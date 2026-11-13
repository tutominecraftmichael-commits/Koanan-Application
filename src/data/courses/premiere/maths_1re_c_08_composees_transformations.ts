import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 8 : Composées de transformations.pdf » (format v2).
export const MATHS_1RE_C_L08_COMPOSEES_TRANSFORMATIONS: CurriculumChapter = {
  id: 'premiere_c_maths_geometrie_l08_composees_transformations',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 8,
  title: 'Leçon 8 : Composées de transformations',
  summary:
    'Propriété caractéristique et composée de translations, composée de rotations (même centre, centres différents, cas de la symétrie centrale), composée d’homothéties et construction du centre, et composée de symétries orthogonales d’axes parallèles ou sécants.',
  officialVolumeHours: 12,
  contentVersion: 2,
  source: '1ère C - Leçon 8 : Composées de transformations.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Propriété caractéristique et composée de deux translations
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01',
      order: 1,
      title: 'Propriété caractéristique, composée et expression analytique de translations',
      summary:
        'Caractérisation d’une translation par conservation vectorielle, composée t_u ∘ t_v = t_{u+v}, commutativité et expression analytique.',
      conceptExplanation:
        "Une application $f$ du plan $\\mathcal{P}$ dans lui-même est une **translation** si et seulement si, pour tous points $M$ et $N$ d’images respectives $M' = f(M)$ et $N' = f(N)$, on a :\n$$\\overrightarrow{M'N'} = \\overrightarrow{MN}$$\nAttention à ne pas écrire simplement $M'N' = MN$ (qui caractérise toute isométrie) : c’est bien l’égalité **vectorielle** qui caractérise la translation.\n\nSoient $\\vec{u}$ et $\\vec{v}$ deux vecteurs du plan. La composée des translations $t_{\\vec{u}}$ et $t_{\\vec{v}}$ est la translation de vecteur $\\vec{u} + \\vec{v}$ :\n$$t_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{v}} \\circ t_{\\vec{u}} = t_{\\vec{u} + \\vec{v}}$$\nLa composition des translations est donc **commutative** et la réciproque de $t_{\\vec{u}}$ est $(t_{\\vec{u}})^{-1} = t_{-\\vec{u}}$ (car $t_{\\vec{u}} \\circ t_{-\\vec{u}} = \\operatorname{Id}_{\\mathcal{P}}$).\n\nDans un repère $(O\\,;\\,\\vec{i},\\,\\vec{j})$, si $\\vec{u}(a\\,;\\,b)$, alors $M'(x'\\,;\\,y') = t_{\\vec{u}}(M(x\\,;\\,y))$ équivaut au système :\n$$\\begin{cases} x' = x + a \\\\ y' = y + b \\end{cases} \\iff \\begin{cases} x = x' - a \\\\ y = y' - b \\end{cases}$$",
      keyRule:
        't_u ∘ t_v = t_{u+v} = t_v ∘ t_u (commutatif). Une translation conserve les vecteurs : MN = M’N’ en vecteurs. Pour trouver l’image d’une droite, exprime x et y en fonction de x’ et y’ puis remplace dans son équation.',
      formulas: [
        { name: 'Propriété caractéristique', formula: '\\overrightarrow{M\'N\'} = \\overrightarrow{MN}' },
        { name: 'Composée de deux translations', formula: 't_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{u} + \\vec{v}}' },
        { name: 'Réciproque d’une translation', formula: '(t_{\\vec{u}})^{-1} = t_{-\\vec{u}}' },
        { name: 'Expression analytique', formula: '\\begin{cases} x\' = x + a \\\\ y\' = y + b \\end{cases}' },
      ],
      workedExample: {
        title: 'Image d’une droite par une translation via l’expression analytique',
        statement:
          'Dans le plan muni d’un repère $(O\\,;\\,\\vec{i},\\,\\vec{j})$, détermine une équation de la droite $(D’)$, image de $(D) : -x + 3y + 2 = 0$ par la translation de vecteur $\\vec{u}(-2\\,;\\,3)$.',
        methodSteps: [
          'L’expression analytique de $t_{\\vec{u}}$ est $x’ = x - 2$ et $y’ = y + 3$, d’où $x = x’ + 2$ et $y = y’ - 3$.',
          'Un point $M’(x’\\,;\\,y’)$ appartient à $(D’)$ si et seulement si son antécédent $M(x\\,;\\,y)$ appartient à $(D)$, soit $-(x’ + 2) + 3(y’ - 3) + 2 = 0$.',
          'En développant : $-x’ - 2 + 3y’ - 9 + 2 = 0$, soit $-x’ + 3y’ - 9 = 0$.',
        ],
        conclusion: 'La droite $(D’)$ a pour équation cartésienne $-x + 3y - 9 = 0$ (elle est parallèle à $(D)$).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Propriété caractéristique d’une translation',
          stepTitle: 'Reconnaître une translation par conservation d’un vecteur',
          paragraphText:
            'Une transformation $f$ du plan est une translation si et seulement si, pour tous points $M$ et $N$, $\\overrightarrow{f(M)f(N)} = \\overrightarrow{MN}$. En géométrie, si $f(M) = M’$ et $f(N) = N’$, le quadrilatère $MNN’M’$ est un parallélogramme (éventuellement aplati).',
          formula: { name: 'Caractérisation vectorielle', formula: '\\overrightarrow{M\'N\'} = \\overrightarrow{MN}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q1',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un parallélogramme et $f$ une application du plan telle que pour tous points $M, N$, $\\overrightarrow{f(M)f(N)} = \\overrightarrow{MN}$. Si $f(A) = B$, que vaut $f(D)$ ?',
            options: ['$A$', '$B$', '$C$', '$D$'],
            correctAnswerIndex: 2,
            explanation: 'On a $\\overrightarrow{f(A)f(D)} = \\overrightarrow{AD}$, donc $\\overrightarrow{Bf(D)} = \\overrightarrow{AD} = \\overrightarrow{BC}$ car $ABCD$ est un parallélogramme. Ainsi $f(D) = C$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Composée de deux translations',
          stepTitle: 'Additionner les vecteurs de translation',
          paragraphText:
            'Pour tous vecteurs $\\vec{u}$ et $\\vec{v}$, $t_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{u}+\\vec{v}}$. Comme l’addition vectorielle est commutative ($\\vec{u}+\\vec{v} = \\vec{v}+\\vec{u}$), on a toujours $t_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{v}} \\circ t_{\\vec{u}}$.',
          formula: { name: 'Somme des vecteurs', formula: 't_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{u} + \\vec{v}}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q2',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un parallélogramme. À quelle transformation est égale $t_{\\overrightarrow{AB}} \\circ t_{\\overrightarrow{AD}}$ ?',
            options: [
              '$t_{\\overrightarrow{BD}}$',
              '$t_{\\overrightarrow{AC}}$',
              '$t_{\\overrightarrow{CA}}$',
              'La symétrie centrale de centre $A$',
            ],
            correctAnswerIndex: 1,
            explanation: '$t_{\\overrightarrow{AB}} \\circ t_{\\overrightarrow{AD}} = t_{\\overrightarrow{AB} + \\overrightarrow{AD}}$. Comme $ABCD$ est un parallélogramme, $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$, d’où $t_{\\overrightarrow{AC}}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Transformation réciproque d’une translation',
          stepTitle: 'Quand deux translations se compensent',
          paragraphText:
            'Si $\\vec{u} + \\vec{v} = \\vec{0}$, alors $t_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{0}} = \\operatorname{Id}_{\\mathcal{P}}$. La bijection réciproque de $t_{\\vec{u}}$ est donc la translation de vecteur $-\\vec{u}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q3',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un parallélogramme. Quelle est l’application réciproque de $t_{\\overrightarrow{CD}}$ ?',
            options: ['$t_{\\overrightarrow{DC}}$', '$t_{\\overrightarrow{BA}}$', '$t_{\\overrightarrow{AD}}$', '$t_{\\overrightarrow{BC}}$'],
            correctAnswerIndex: 0,
            explanation: 'La réciproque de $t_{\\overrightarrow{CD}}$ est $t_{-\\overrightarrow{CD}} = t_{\\overrightarrow{DC}}$ (qui est aussi égale à $t_{\\overrightarrow{AB}}$, et non $t_{\\overrightarrow{BA}}$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Expression analytique d’une composée de translations',
          stepTitle: 'Trouver l’image d’une droite par substitution inverse',
          paragraphText:
            'Pour déterminer l’image d’une droite $(D) : ax + by + c = 0$ par $t_{\\vec{u}}(\\alpha\\,;\\,\\beta)$, on exprime d’abord $x = x’ - \\alpha$ et $y = y’ - \\beta$, puis on substitue dans l’équation de $(D)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q4',
            type: 'mcq',
            prompt: 'Quelle est l’équation de l’image de $(D) : 2x - y + 1 = 0$ par $t_{\\vec{u}(1\\,;\\,-3)}$ ?',
            options: [
              '$2x - y - 4 = 0$',
              '$2x - y + 6 = 0$',
              '$2x - y + 2 = 0$',
              '$2x - y - 2 = 0$',
            ],
            correctAnswerIndex: 0,
            explanation: '$x = x’ - 1$ et $y = y’ + 3$. En remplaçant dans $2x - y + 1 = 0$ : $2(x’ - 1) - (y’ + 3) + 1 = 0 \\iff 2x’ - y’ - 4 = 0$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre M’N’ = MN et M’N’ = MN en vecteurs',
          stepTitle: 'La conservation des longueurs ne suffit pas',
          paragraphText:
            'Une rotation, une symétrie centrale ou une symétrie orthogonale conservent toutes la distance $M’N’ = MN$, mais aucune n’est une translation ! La propriété caractéristique de la translation exige impérativement l’égalité des **vecteurs** $\\overrightarrow{M’N’} = \\overrightarrow{MN}$ (même direction, même sens et même norme).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q5',
            type: 'mcq',
            prompt: 'Une transformation $f$ vérifie $f(A)=B$, $f(C)=D$ et $\\overrightarrow{AB} = \\overrightarrow{CD}$ pour quatre points donnés, tandis que pour $M, N$ quelconques on a seulement $M’N’ = MN$. Peut-on conclure que $f$ est une translation ?',
            options: [
              'Oui, car $M’N’ = MN$ caractérise les translations',
              'Non, $M’N’ = MN$ signifie seulement que $f$ est une isométrie',
              'Oui, car deux points suffisent',
              'Non, car une translation inverse les longueurs',
            ],
            correctAnswerIndex: 1,
            explanation: 'Seule la relation vectorielle $\\overrightarrow{M’N’} = \\overrightarrow{MN}$ pour tous points $M, N$ caractérise la translation ; $M’N’ = MN$ caractérise toutes les isométries.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Composée de translations dans un rectangle',
          stepTitle: 'Enchaîner deux translations sur des sommets',
          paragraphText:
            'Soit $ABCD$ un rectangle. Pour trouver $(t_{\\overrightarrow{CD}} \\circ t_{\\overrightarrow{AD}})(B)$, on applique d’abord $t_{\\overrightarrow{AD}}$ à $B$ (ou on compose d’abord en $t_{\\overrightarrow{CD} + \\overrightarrow{AD}}$). Comme $\\overrightarrow{CD} = \\overrightarrow{BA}$ et $\\overrightarrow{AD} = \\overrightarrow{BC}$, le vecteur total vaut $\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q6',
            type: 'mcq',
            prompt: 'Dans un parallélogramme $ABCD$, quel est le vecteur de la translation $t_{\\overrightarrow{CD}} \\circ t_{\\overrightarrow{AD}}$ ?',
            options: ['$\\overrightarrow{AC}$', '$\\overrightarrow{CA}$', '$\\overrightarrow{BD}$', '$\\overrightarrow{DB}$'],
            correctAnswerIndex: 2,
            explanation: '$\\overrightarrow{CD} + \\overrightarrow{AD} = \\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD}$. Donc $t_{\\overrightarrow{CD}} \\circ t_{\\overrightarrow{AD}} = t_{\\overrightarrow{BD}}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q1',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un parallélogramme et $f$ une application du plan telle que pour tous points $M, N$, $\\overrightarrow{f(M)f(N)} = \\overrightarrow{MN}$. Si $f(A) = B$, que vaut $f(D)$ ?',
          options: ['$A$', '$B$', '$C$', '$D$'],
          correctAnswerIndex: 2,
          explanation: 'On a $\\overrightarrow{f(A)f(D)} = \\overrightarrow{AD}$, donc $\\overrightarrow{Bf(D)} = \\overrightarrow{AD} = \\overrightarrow{BC}$ car $ABCD$ est un parallélogramme. Ainsi $f(D) = C$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q2',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un parallélogramme. À quelle transformation est égale $t_{\\overrightarrow{AB}} \\circ t_{\\overrightarrow{AD}}$ ?',
          options: [
            '$t_{\\overrightarrow{BD}}$',
            '$t_{\\overrightarrow{AC}}$',
            '$t_{\\overrightarrow{CA}}$',
            'La symétrie centrale de centre $A$',
          ],
          correctAnswerIndex: 1,
          explanation: '$t_{\\overrightarrow{AB}} \\circ t_{\\overrightarrow{AD}} = t_{\\overrightarrow{AB} + \\overrightarrow{AD}}$. Comme $ABCD$ est un parallélogramme, $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$, d’où $t_{\\overrightarrow{AC}}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q3',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un parallélogramme. Quelle est l’application réciproque de $t_{\\overrightarrow{CD}}$ ?',
          options: ['$t_{\\overrightarrow{DC}}$', '$t_{\\overrightarrow{BA}}$', '$t_{\\overrightarrow{AD}}$', '$t_{\\overrightarrow{BC}}$'],
          correctAnswerIndex: 0,
          explanation: 'La réciproque de $t_{\\overrightarrow{CD}}$ est $t_{-\\overrightarrow{CD}} = t_{\\overrightarrow{DC}}$ (qui est aussi égale à $t_{\\overrightarrow{AB}}$, et non $t_{\\overrightarrow{BA}}$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q4',
          type: 'mcq',
          prompt: 'Quelle est l’équation de l’image de $(D) : 2x - y + 1 = 0$ par $t_{\\vec{u}(1\\,;\\,-3)}$ ?',
          options: [
            '$2x - y - 4 = 0$',
            '$2x - y + 6 = 0$',
            '$2x - y + 2 = 0$',
            '$2x - y - 2 = 0$',
          ],
          correctAnswerIndex: 0,
          explanation: '$x = x’ - 1$ et $y = y’ + 3$. En remplaçant dans $2x - y + 1 = 0$ : $2(x’ - 1) - (y’ + 3) + 1 = 0 \\iff 2x’ - y’ - 4 = 0$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q5',
          type: 'mcq',
          prompt: 'Une transformation $f$ vérifie $f(A)=B$, $f(C)=D$ et $\\overrightarrow{AB} = \\overrightarrow{CD}$ pour quatre points donnés, tandis que pour $M, N$ quelconques on a seulement $M’N’ = MN$. Peut-on conclure que $f$ est une translation ?',
          options: [
            'Oui, car $M’N’ = MN$ caractérise les translations',
            'Non, $M’N’ = MN$ signifie seulement que $f$ est une isométrie',
            'Oui, car deux points suffisent',
            'Non, car une translation inverse les longueurs',
          ],
          correctAnswerIndex: 1,
          explanation: 'Seule la relation vectorielle $\\overrightarrow{M’N’} = \\overrightarrow{MN}$ pour tous points $M, N$ caractérise la translation ; $M’N’ = MN$ caractérise toutes les isométries.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p01_q6',
          type: 'mcq',
          prompt: 'Dans un parallélogramme $ABCD$, quel est le vecteur de la translation $t_{\\overrightarrow{CD}} \\circ t_{\\overrightarrow{AD}}$ ?',
          options: ['$\\overrightarrow{AC}$', '$\\overrightarrow{CA}$', '$\\overrightarrow{BD}$', '$\\overrightarrow{DB}$'],
          correctAnswerIndex: 2,
          explanation: '$\\overrightarrow{CD} + \\overrightarrow{AD} = \\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD}$. Donc $t_{\\overrightarrow{CD}} \\circ t_{\\overrightarrow{AD}} = t_{\\overrightarrow{BD}}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Composée de deux rotations (même centre et centres distincts)
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02',
      order: 2,
      title: 'Composée de deux rotations : même centre ou centres distincts',
      summary:
        'Rotation de même centre r(O, α + θ) et cas général r(A, α) ∘ r(B, θ) : translation si α + θ ≡ 0 [2π], sinon rotation d’angle α + θ dont on construit le centre Ω.',
      conceptExplanation:
        "1. **Rotations de même centre $O$** :\nLa composée de deux rotations de même centre $O$ et d’angles orientés $\\alpha$ et $\\theta$ est la rotation de centre $O$ et d’angle $\\alpha + \\theta$ :\n$$r(O\\,;\\,\\alpha) \\circ r(O\\,;\\,\\theta) = r(O\\,;\\,\\theta) \\circ r(O\\,;\\,\\alpha) = r(O\\,;\\,\\alpha + \\theta)$$\nEn particulier, $(r(O\\,;\\,\\alpha))^{-1} = r(O\\,;\\,-\\alpha)$.\n\n2. **Rotations de centres distincts $A \\neq B$** ($\\hat{\\alpha} \\neq \\hat{0}$, $\\hat{\\theta} \\neq \\hat{0}$) :\nSoit $f = r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta)$ (en général **non commutatif**).\n- **Si $\\alpha + \\theta \\equiv 0\\,[2\\pi]$** : $f$ est la **translation** de vecteur $\\overrightarrow{BB'}$, où $B' = r(A\\,;\\,\\alpha)(B)$ (car $r(B\\,;\\,\\theta)(B) = B$).\n- **Si $\\alpha + \\theta \\not\\equiv 0\\,[2\\pi]$** : $f$ est une **rotation d’angle $\\alpha + \\theta$**. Pour déterminer son centre $\\Omega$ (unique point invariant), on utilise soit le calcul d’images sur des figures remarquables, soit la décomposition en symétries orthogonales : on pose $r(A\\,;\\,\\alpha) = S_{(\\Delta')} \\circ S_{(AB)}$ et $r(B\\,;\\,\\theta) = S_{(AB)} \\circ S_{(\\Delta)}$, alors $f = S_{(\\Delta')} \\circ S_{(\\Delta)}$ et $\\Omega = (\\Delta) \\cap (\\Delta')$.",
      keyRule:
        'Même centre : r(O, α) ∘ r(O, θ) = r(O, α+θ) (commutatif). Centres distincts : si α + θ ≡ 0 [2π], c’est la translation de vecteur BB’ avec B’ = r(A, α)(B) ; sinon c’est une rotation d’angle α + θ de centre Ω = (Δ) ∩ (Δ’).',
      formulas: [
        { name: 'Même centre', formula: 'r(O\\,;\\,\\alpha) \\circ r(O\\,;\\,\\theta) = r(O\\,;\\,\\alpha + \\theta)' },
        { name: 'Réciproque d’une rotation', formula: '(r(O\\,;\\,\\alpha))^{-1} = r(O\\,;\\,-\\alpha)' },
        { name: 'Somme nulle (α + θ ≡ 0 [2π])', formula: 'r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,-\\alpha) = t_{\\overrightarrow{BB\'}} \\quad (B\' = r(A\\,;\\,\\alpha)(B))' },
        { name: 'Somme non nulle (α + θ ≠ 0 [2π])', formula: 'r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta) = r(\\Omega\\,;\\,\\alpha + \\theta)' },
      ],
      workedExample: {
        title: 'Identifier r_B ∘ r_A et S_D ∘ r_A dans un carré direct ABCD',
        statement:
          'Soit $ABCD$ un carré de sens direct. On note $r_A = r(A\\,;\\,\\dfrac{\\pi}{2})$, $r_B = r(B\\,;\\,-\\dfrac{\\pi}{2})$ et $S_D = r(D\\,;\\,\\pi)$. Détermine la nature et les éléments caractéristiques de $f = r_B \\circ r_A$ et $g = S_D \\circ r_A$.',
        methodSteps: [
          'Pour $f = r_B \\circ r_A$ : la somme des angles vaut $-\\dfrac{\\pi}{2} + \\dfrac{\\pi}{2} = 0$, donc $f$ est une translation.',
          'Calculons l’image de $A$ : $f(A) = r_B(r_A(A)) = r_B(A)$. Dans le carré direct $ABCD$, $\\widehat{(\\overrightarrow{BA}, \\overrightarrow{BC})} = -\\dfrac{\\pi}{2}$ et $BA = BC$, donc $r_B(A) = C$. Ainsi $f = t_{\\overrightarrow{AC}}$.',
          'Pour $g = S_D \\circ r_A$ : la somme des angles vaut $\\pi + \\dfrac{\\pi}{2} = \\dfrac{3\\pi}{2} \\equiv -\\dfrac{\\pi}{2}\\,[2\\pi]$, donc $g$ est une rotation d’angle $-\\dfrac{\\pi}{2}$.',
          'Cherchons son centre en testant $C$ : $r_A(C) = r(A\\,;\\,\\dfrac{\\pi}{2})(C)$. Comme $AC$ est diagonale du carré direct, $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$ tourné de $+\\dfrac{\\pi}{2}$ donne $\\overrightarrow{AD} - \\overrightarrow{AB} = \\overrightarrow{BD}$, donc $r_A(C) = A’$ tel que $D$ soit le milieu de $[A’C]$ : vérification immédiate, $\\overrightarrow{AA’} + \\overrightarrow{AC} = 2\\overrightarrow{AD}$ car $(\\overrightarrow{AD}-\\overrightarrow{AB}) + (\\overrightarrow{AB}+\\overrightarrow{AD}) = 2\\overrightarrow{AD}$. Donc $S_D(r_A(C)) = C$ !',
        ],
        conclusion: '$r_B \\circ r_A = t_{\\overrightarrow{AC}}$ et $S_D \\circ r_A = r(C\\,;\\,-\\dfrac{\\pi}{2})$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Composée de rotations de même centre',
          stepTitle: 'Additionner les angles lorsque le centre est commun',
          paragraphText:
            'Si deux rotations ont le même centre $O$, leur composée est la rotation de centre $O$ et d’angle la somme des deux angles. Si cette somme est un multiple de $2\\pi$, on retrouve l’application identique $\\operatorname{Id}_{\\mathcal{P}}$.',
          formula: { name: 'Même centre', formula: 'r(O\\,;\\,\\alpha) \\circ r(O\\,;\\,\\theta) = r(O\\,;\\,\\alpha + \\theta)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q1',
            type: 'mcq',
            prompt: 'Que vaut la composée $r\\left(O\\,;\\,\\dfrac{\\pi}{3}\\right) \\circ r\\left(O\\,;\\,\\dfrac{\\pi}{6}\\right)$ ?',
            options: [
              '$r\\left(O\\,;\\,\\dfrac{\\pi}{2}\\right)$',
              '$r\\left(O\\,;\\,\\dfrac{\\pi}{6}\\right)$',
              '$r\\left(O\\,;\\,-\\dfrac{\\pi}{2}\\right)$',
              'La symétrie centrale de centre $O$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les deux rotations ont le même centre $O$ : on additionne leurs angles $\\dfrac{\\pi}{3} + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{2}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas α + θ ≡ 0 [2π] avec centres distincts',
          stepTitle: 'Deux rotations de centres distincts et d’angles opposés donnent une translation',
          paragraphText:
            'Lorsque $A \\neq B$ et $\\alpha + \\theta \\equiv 0\\,[2\\pi]$, l’angle de la composée $f = r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta)$ est nul : $f$ est une translation non identique dont le vecteur s’obtient en calculant $\\overrightarrow{Bf(B)}$ ou $\\overrightarrow{Ef(E)}$ pour un point bien choisi $E$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q2',
            type: 'mcq',
            prompt: 'Soit $ABC$ un triangle équilatéral direct. Que vaut $f = r\\left(B\\,;\\,-\\dfrac{\\pi}{3}\\right) \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{3}\\right)$ ?',
            options: [
              'Une rotation d’angle $\\dfrac{2\\pi}{3}$',
              '$t_{\\overrightarrow{AC}}$',
              '$t_{\\overrightarrow{CA}}$',
              'La symétrie centrale de centre $C$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La somme des angles vaut $-\\dfrac{\\pi}{3} + \\dfrac{\\pi}{3} = 0$, donc $f$ est une translation. Comme $f(A) = r\\left(B\\,;\\,-\\dfrac{\\pi}{3}\\right)(A) = C$ (dans le triangle équilatéral direct $ABC$), son vecteur est $\\overrightarrow{AC}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver le centre Ω de r(A, α) ∘ r(B, θ)',
          stepTitle: 'Utiliser la décomposition en symétries orthogonales',
          paragraphText:
            'Si $\\alpha + \\theta \\not\\equiv 0\\,[2\\pi]$, on écrit $r(A\\,;\\,\\alpha) = S_{(\\Delta’)} \\circ S_{(AB)}$ avec $\\widehat{((AB), (\\Delta’))} = \\dfrac{\\alpha}{2}$ (passant par $A$) et $r(B\\,;\\,\\theta) = S_{(AB)} \\circ S_{(\\Delta)}$ avec $\\widehat{((\\Delta), (AB))} = \\dfrac{\\theta}{2}$ (passant par $B$). Alors $r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta) = S_{(\\Delta’)} \\circ S_{(\\Delta)}$, donc son centre $\\Omega$ est l’intersection de $(\\Delta)$ et $(\\Delta’)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q3',
            type: 'mcq',
            prompt: 'Pour construire le centre $\\Omega$ de $r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right)$ à l’aide de la droite $(AB)$, quelles mesures d’angles orientés de droites utilisent $(\\Delta’)$ (passant par $A$) et $(\\Delta)$ (passant par $B$) ?',
            options: [
              '$\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{4}$ et $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{4}$',
              '$\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{2}$ et $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{2}$',
              '$\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{4}$ et $\\widehat{((AB),(\\Delta))} = \\dfrac{\\pi}{4}$',
              '$\\widehat{((\\Delta’), (AB))} = \\dfrac{\\pi}{4}$ et $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{4}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Chaque demi-angle intervient dans l’ordre de composition : $r(A,\\pi/2) = S_{(\\Delta’)} \\circ S_{(AB)}$ exige $\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{4}$, et $r(B,\\pi/2) = S_{(AB)} \\circ S_{(\\Delta)}$ exige $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{4}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas de l’angle nul vs non nul et caractérisation du centre',
          stepTitle: 'Médiatrice de [BB’] et point invariant',
          paragraphText:
            'Si $f = r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta) = r(\\Omega\\,;\\,\\alpha+\\theta)$, tout point $M$ vérifie $\\Omega M = \\Omega f(M)$. En particulier $\\Omega$ appartient à la médiatrice de $[BB’]$ (où $B’ = r(A\\,;\\,\\alpha)(B)$) et à la médiatrice de $[AE]$ (où $E = r(B\\,;\\,-\\theta)(A)$, car $f(E) = A$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q4',
            type: 'mcq',
            prompt: 'Soit $f = r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta)$ une rotation de centre $\\Omega$. Si $B’ = r(A\\,;\\,\\alpha)(B)$, sur quelle droite remarquable $\\Omega$ se trouve-t-il nécessairement ?',
            options: [
              'La droite $(AB)$',
              'La médiatrice du segment $[BB’]$',
              'La droite $(AB’)$',
              'La perpendiculaire à $(AB)$ en $A$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Comme $f(B) = r(A\\,;\\,\\alpha)(B) = B’$ et que $f$ est une rotation de centre $\\Omega$, on a $\\Omega B = \\Omega B’$, donc $\\Omega$ appartient à la médiatrice de $[BB’]$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Non-commutativité pour des centres distincts',
          stepTitle: 'Attention à l’ordre de composition lorsque A ≠ B',
          paragraphText:
            'Contrairement aux translations ou aux rotations de même centre, si $A \\neq B$, on a en général $r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta) \\neq r(B\\,;\\,\\theta) \\circ r(A\\,;\\,\\alpha)$ ! Même quand les deux sont des rotations d’angle $\\alpha + \\theta$, leurs centres diffèrent ; et si $\\alpha + \\theta \\equiv 0\\,[2\\pi]$, les vecteurs de translation sont différents.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q5',
            type: 'mcq',
            prompt: 'Dans un carré direct $ABCD$, que vaut $f_2 = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(B\\,;\\,-\\dfrac{\\pi}{2}\\right)$ ?',
            options: [
              '$t_{\\overrightarrow{AC}}$',
              '$t_{\\overrightarrow{BD}}$',
              '$t_{\\overrightarrow{CA}}$',
              '$\\operatorname{Id}_{\\mathcal{P}}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La somme des angles est nulle, donc $f_2$ est une translation. On a $f_2(B) = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)(B) = D$, donc $f_2 = t_{\\overrightarrow{BD}}$ (alors que $r_B \\circ r_A = t_{\\overrightarrow{AC}}$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier un centre de rotation par calcul d’image',
          stepTitle: 'Tester un sommet candidat pour prouver qu’il est invariant',
          paragraphText:
            'Dans un carré direct $ABCD$, pour prouver que $r(B\\,;\\,\\dfrac{\\pi}{2}) \\circ r(A\\,;\\,\\dfrac{\\pi}{2})$ ou $S_D \\circ r(A\\,;\\,\\dfrac{\\pi}{2})$ a pour centre un sommet donné, il suffit de montrer que ce sommet est invariant, puisque la composée est déjà connue comme une rotation d’angle égal à la somme des angles.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q6',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un carré direct. Quelle est la nature de $S_D \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ ?',
            options: [
              'La translation de vecteur $\\overrightarrow{AC}$',
              'La rotation de centre $C$ et d’angle $-\\dfrac{\\pi}{2}$',
              'La rotation de centre $B$ et d’angle $\\dfrac{\\pi}{2}$',
              'La symétrie centrale de centre $C$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La somme des angles vaut $\\pi + \\dfrac{\\pi}{2} \\equiv -\\dfrac{\\pi}{2}\\,[2\\pi]$, et comme $S_D\\left(r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)(C)\\right) = C$, c’est la rotation $r\\left(C\\,;\\,-\\dfrac{\\pi}{2}\\right)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q1',
          type: 'mcq',
          prompt: 'Que vaut la composée $r\\left(O\\,;\\,\\dfrac{\\pi}{3}\\right) \\circ r\\left(O\\,;\\,\\dfrac{\\pi}{6}\\right)$ ?',
          options: [
            '$r\\left(O\\,;\\,\\dfrac{\\pi}{2}\\right)$',
            '$r\\left(O\\,;\\,\\dfrac{\\pi}{6}\\right)$',
            '$r\\left(O\\,;\\,-\\dfrac{\\pi}{2}\\right)$',
            'La symétrie centrale de centre $O$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Les deux rotations ont le même centre $O$ : on additionne leurs angles $\\dfrac{\\pi}{3} + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{2}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q2',
          type: 'mcq',
          prompt: 'Soit $ABC$ un triangle équilatéral direct. Que vaut $f = r\\left(B\\,;\\,-\\dfrac{\\pi}{3}\\right) \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{3}\\right)$ ?',
          options: [
            'Une rotation d’angle $\\dfrac{2\\pi}{3}$',
            '$t_{\\overrightarrow{AC}}$',
            '$t_{\\overrightarrow{CA}}$',
            'La symétrie centrale de centre $C$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La somme des angles vaut $-\\dfrac{\\pi}{3} + \\dfrac{\\pi}{3} = 0$, donc $f$ est une translation. Comme $f(A) = r\\left(B\\,;\\,-\\dfrac{\\pi}{3}\\right)(A) = C$ dans le triangle équilatéral direct $ABC$, son vecteur est $\\overrightarrow{AC}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q3',
          type: 'mcq',
          prompt: 'Pour construire le centre $\\Omega$ de $r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right)$ à l’aide de la droite $(AB)$, quelles mesures d’angles orientés de droites utilisent $(\\Delta’)$ (passant par $A$) et $(\\Delta)$ (passant par $B$) ?',
          options: [
            '$\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{4}$ et $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{4}$',
            '$\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{2}$ et $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{2}$',
            '$\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{4}$ et $\\widehat{((AB),(\\Delta))} = \\dfrac{\\pi}{4}$',
            '$\\widehat{((\\Delta’), (AB))} = \\dfrac{\\pi}{4}$ et $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{4}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Chaque demi-angle intervient dans l’ordre de composition : $r(A,\\pi/2) = S_{(\\Delta’)} \\circ S_{(AB)}$ exige $\\widehat{((AB),(\\Delta’))} = \\dfrac{\\pi}{4}$, et $r(B,\\pi/2) = S_{(AB)} \\circ S_{(\\Delta)}$ exige $\\widehat{((\\Delta),(AB))} = \\dfrac{\\pi}{4}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q4',
          type: 'mcq',
          prompt: 'Soit $f = r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta)$ une rotation de centre $\\Omega$. Si $B’ = r(A\\,;\\,\\alpha)(B)$, sur quelle droite remarquable $\\Omega$ se trouve-t-il nécessairement ?',
          options: [
            'La droite $(AB)$',
            'La médiatrice du segment $[BB’]$',
            'La droite $(AB’)$',
            'La perpendiculaire à $(AB)$ en $A$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Comme $f(B) = r(A\\,;\\,\\alpha)(B) = B’$ et que $f$ est une rotation de centre $\\Omega$, on a $\\Omega B = \\Omega B’$, donc $\\Omega$ appartient à la médiatrice de $[BB’]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q5',
          type: 'mcq',
          prompt: 'Dans un carré direct $ABCD$, que vaut $f_2 = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(B\\,;\\,-\\dfrac{\\pi}{2}\\right)$ ?',
          options: [
            '$t_{\\overrightarrow{AC}}$',
            '$t_{\\overrightarrow{BD}}$',
            '$t_{\\overrightarrow{CA}}$',
            '$\\operatorname{Id}_{\\mathcal{P}}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La somme des angles est nulle, donc $f_2$ est une translation. On a $f_2(B) = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)(B) = D$, donc $f_2 = t_{\\overrightarrow{BD}}$ (alors que $r_B \\circ r_A = t_{\\overrightarrow{AC}}$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p02_q6',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un carré direct. Quelle est la nature de $S_D \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ ?',
          options: [
            'La translation de vecteur $\\overrightarrow{AC}$',
            'La rotation de centre $C$ et d’angle $-\\dfrac{\\pi}{2}$',
            'La rotation de centre $B$ et d’angle $\\dfrac{\\pi}{2}$',
            'La symétrie centrale de centre $C$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La somme des angles vaut $\\pi + \\dfrac{\\pi}{2} \\equiv -\\dfrac{\\pi}{2}\\,[2\\pi]$, et comme $S_D\\left(r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)(C)\\right) = C$, c’est la rotation $r\\left(C\\,;\\,-\\dfrac{\\pi}{2}\\right)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Cas de la symétrie centrale et démonstrations géométriques
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03',
      order: 3,
      title: 'Composée donnant une symétrie centrale et démonstrations',
      summary:
        'Cas α + θ ≡ π [2π] donnant une symétrie centrale S_K, propriété (S_K)⁻¹ = S_K et application aux alignements, milieux et hauteurs concourantes.',
      conceptExplanation:
        "Un cas particulièrement fécond de la composée de deux rotations est celui où la somme des angles vaut $\\pi$ modulo $2\\pi$ :\n$$\\alpha + \\theta \\equiv \\pi\\,[2\\pi]$$\nDans ce cas, $r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta)$ est une rotation d’angle $\\pi$, c’est-à-dire une **symétrie centrale** $S_K$ (demi-tour de centre $K$).\n\nCette identification offre deux propriétés puissantes pour les démonstrations :\n1. **Détermination immédiate du centre $K$** : dès que l’on connaît un point $M$ et son image $M’ = S_K(M)$, le centre $K$ est simplement le **milieu** du segment $[MM’]$.\n2. **Égalité avec la réciproque** : puisque $(S_K)^{-1} = S_K$, si $r \\circ r’ = S_K$, alors automatiquement :\n$$(r \\circ r’)^{-1} = r’^{-1} \\circ r^{-1} = S_K$$\nCela permet d’obtenir une nouvelle paire de points symétriques par rapport à $K$, donc de prouver que plusieurs milieux coïncident, qu’un triangle est rectangle isocèle, ou que des droites sont parallèles ou concourantes.",
      keyRule:
        'Si α + θ ≡ π [2π], alors r ∘ r’ est une symétrie centrale S_K, et donc r’⁻¹ ∘ r⁻¹ = S_K également. Dès qu’on connaît un couple M ↦ M’, K est le milieu de [MM’].',
      formulas: [
        { name: 'Angle plat (α + θ ≡ π [2π])', formula: 'r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta) = S_K' },
        { name: 'Réciproque d’une symétrie centrale', formula: 'r \\circ r\' = S_K \\implies r\'^{-1} \\circ r^{-1} = S_K' },
        { name: 'Milieu d’un couple (M, M’)', formula: 'S_K(M) = M\' \\iff K \\text{ est le milieu de } [MM\']' },
      ],
      workedExample: {
        title: 'Démontrer une symétrie centrale par composée de deux quarts de tour',
        statement:
          'Soit $ABC$ un triangle quelconque. À l’extérieur de $ABC$, on construit deux carrés directs $ABDE$ (de centre $I$, tel que $A \\to B \\to D \\to E$) et $ACGF$ (de centre $J$, tel que $F \\to A \\to C \\to G$). Soit $K$ le milieu de $[BF]$. Montre que $r\\left(I\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(J\\,;\\,\\dfrac{\\pi}{2}\\right) = S_K$ puis exprime l’image $A’ = S_K(A)$ à l’aide de $r$ et $r’^{-1}$.',
        methodSteps: [
          'Notons $r = r\\left(I\\,;\\,\\dfrac{\\pi}{2}\\right)$ et $r’ = r\\left(J\\,;\\,\\dfrac{\\pi}{2}\\right)$. La somme des angles vaut $\\dfrac{\\pi}{2} + \\dfrac{\\pi}{2} = \\pi$, donc $r \\circ r’$ est une symétrie centrale $S_{\\Omega}$.',
          'Calculons l’image de $F$ : dans le carré direct $ACGF$, $r’(F) = A$ ; dans le carré direct $ABDE$, $r(A) = B$. Donc $(r \\circ r’)(F) = r(A) = B$, ce qui prouve que $\\Omega$ est le milieu $K$ de $[FB]$, soit $r \\circ r’ = S_K$.',
          'Comme $(S_K)^{-1} = S_K$, on a aussi $r’^{-1} \\circ r^{-1} = S_K$, où $r^{-1} = r\\left(I\\,;\\,-\\dfrac{\\pi}{2}\\right)$ et $r’^{-1} = r\\left(J\\,;\\,-\\dfrac{\\pi}{2}\\right)$.',
          'En appliquant ces deux égalités au point $A$, on obtient $A’ = S_K(A) = (r \\circ r’)(A) = r(C)$ et aussi $A’ = (r’^{-1} \\circ r^{-1})(A) = r’^{-1}(E)$.',
        ],
        conclusion: 'On a établi $r \\circ r’ = r’^{-1} \\circ r^{-1} = S_K$ et $A’ = S_K(A) = r(C) = r’^{-1}(E)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Condition pour obtenir une symétrie centrale',
          stepTitle: 'Quand la somme des angles vaut π modulo 2π',
          paragraphText:
            'La composée $r(A\\,;\\,\\alpha) \\circ r(B\\,;\\,\\theta)$ est une symétrie centrale (rotation d’angle $\\pi$) si et seulement si $\\alpha + \\theta \\equiv \\pi\\,[2\\pi]$. Cela arrive notamment en composant deux quarts de tour directs ($\\dfrac{\\pi}{2} + \\dfrac{\\pi}{2} = \\pi$) ou deux quarts de tour indirects ($-\\dfrac{\\pi}{2} - \\dfrac{\\pi}{2} = -\\pi \\equiv \\pi$).',
          formula: { name: 'Condition angulaire', formula: '\\alpha + \\theta \\equiv \\pi\\,[2\\pi] \\implies r(A\\,;\\,\\alpha)\\circ r(B\\,;\\,\\theta) = S_K' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q1',
            type: 'mcq',
            prompt: 'Parmi les composées suivantes de deux rotations, laquelle est une symétrie centrale ?',
            options: [
              '$r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(B\\,;\\,-\\dfrac{\\pi}{2}\\right)$',
              '$r\\left(A\\,;\\,\\dfrac{\\pi}{3}\\right) \\circ r\\left(B\\,;\\,\\dfrac{2\\pi}{3}\\right)$',
              '$r\\left(A\\,;\\,\\dfrac{\\pi}{4}\\right) \\circ r\\left(B\\,;\\,\\dfrac{\\pi}{4}\\right)$',
              '$r\\left(A\\,;\\,\\pi\\right) \\circ r\\left(B\\,;\\,\\pi\\right)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{\\pi}{3} + \\dfrac{2\\pi}{3} = \\pi$, donc $r(A,\\pi/3) \\circ r(B,2\\pi/3)$ est une rotation d’angle $\\pi$, c’est-à-dire une symétrie centrale.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver le centre K de la symétrie centrale',
          stepTitle: 'Le centre K est le milieu de tout segment [MM’]',
          paragraphText:
            'Dès qu’on sait que $f = r \\circ r’$ est une symétrie centrale $S_K$, il suffit de calculer l’image $M’ = f(M)$ d’un point bien choisi (souvent le centre ou un sommet envoyé sur le centre de la deuxième rotation) : $K$ est alors exactement le milieu de $[MM’]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q2',
            type: 'mcq',
            prompt: 'Soient $r_1 = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ et $r_2 = r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right)$ ($A \\neq B$). On pose $A’ = r_2(A)$. Quel est le centre $O$ de la symétrie centrale $r_2 \\circ r_1$ ?',
            options: [
              'Le milieu de $[AB]$',
              'Le milieu de $[AA’]$',
              'Le point $B$',
              'Le point $A’$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On a $(r_2 \\circ r_1)(A) = r_2(r_1(A)) = r_2(A) = A’$. Comme $r_2 \\circ r_1 = S_O$, le centre $O$ est le milieu du segment $[AA’]$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Utiliser l’égalité (r ∘ r’) = (r’⁻¹ ∘ r⁻¹)',
          stepTitle: 'Inverser une symétrie centrale donne elle-même',
          paragraphText:
            'Une symétrie centrale $S_K$ est involutive : $S_K \\circ S_K = \\operatorname{Id}_{\\mathcal{P}}$, soit $(S_K)^{-1} = S_K$. Par conséquent, si $r \\circ r’ = S_K$, alors $r’^{-1} \\circ r^{-1} = (r \\circ r’)^{-1} = S_K$ !',
          formula: { name: 'Involution de S_K', formula: 'r \\circ r\' = S_K \\implies r\'^{-1} \\circ r^{-1} = S_K' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q3',
            type: 'mcq',
            prompt: 'Sachant que $r\\left(I\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(J\\,;\\,\\dfrac{\\pi}{2}\\right) = S_K$, à quoi est égale la composée $r\\left(J\\,;\\,-\\dfrac{\\pi}{2}\\right) \\circ r\\left(I\\,;\\,-\\dfrac{\\pi}{2}\\right)$ ?',
            options: [
              '$S_K$',
              '$t_{2\\overrightarrow{IJ}}$',
              '$r(K\\,;\\,\\dfrac{\\pi}{2})$',
              '$\\operatorname{Id}_{\\mathcal{P}}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$r\\left(J\\,;\\,-\\dfrac{\\pi}{2}\\right) \\circ r\\left(I\\,;\\,-\\dfrac{\\pi}{2}\\right) = (r \\circ r’)^{-1} = (S_K)^{-1} = S_K$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Application : triangle rectangle isocèle et médiane-hauteur',
          stepTitle: 'Comparer les longueurs et l’orthogonalité via S_K',
          paragraphText:
            'Dans la configuration de deux carrés construits à l’extérieur d’un triangle $ABC$, la relation $S_K(F) = B$ et $A’ = S_K(A)$ entraîne que $ABFA’$ est un parallélogramme de centre $K$ (donc $\\overrightarrow{BA’} = \\overrightarrow{AF}$), et avec les quarts de tour on montre que la médiane $(AK)$ de $ABF$ est perpendiculaire à $(BC)$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q4',
            type: 'mcq',
            prompt: 'Si $S_K(F) = B$ et $S_K(A) = A’$, que peut-on affirmer sur le quadrilatère $ABFA’$ ?',
            options: [
              'C’est un trapèze sans autre propriété',
              'C’est un parallélogramme de centre $K$',
              'Ses diagonales sont $[AB]$ et $[FA’]$',
              'Il est nécessairement un losange',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les diagonales $[BF]$ et $[AA’]$ ont le même milieu $K$, donc $ABFA’$ est un parallélogramme de centre $K$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre deux symétries centrales S_A ∘ S_B avec une symétrie centrale',
          stepTitle: 'S_A ∘ S_B donne une translation, pas une symétrie centrale !',
          paragraphText:
            'Une symétrie centrale $S_A$ est une rotation d’angle $\\pi$. En composant **deux** symétries centrales $S_A \\circ S_B$, la somme des angles vaut $\\pi + \\pi = 2\\pi \\equiv 0\\,[2\\pi]$ ! Ce n’est donc jamais une symétrie centrale, mais la translation $t_{2\\overrightarrow{BA}}$ (ou $\\operatorname{Id}$ si $A = B$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q5',
            type: 'mcq',
            prompt: 'Soient $A$ et $B$ deux points distincts. Quelle est la nature de $S_A \\circ S_B$ ?',
            options: [
              'La symétrie centrale de centre le milieu de $[AB]$',
              'La translation de vecteur $2\\overrightarrow{AB}$',
              'La translation de vecteur $2\\overrightarrow{BA}$',
              'Une rotation d’angle $\\dfrac{\\pi}{2}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Somme des angles $\\pi + \\pi \\equiv 0\\,[2\\pi]$ : c’est une translation. Son vecteur vaut $\\overrightarrow{B S_A(S_B(B))} = \\overrightarrow{B S_A(B)} = 2\\overrightarrow{BA}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculer une composée donnant une symétrie centrale',
          stepTitle: 'Trouver le centre de r(B, π/2) ∘ r(A, π/2) dans un carré',
          paragraphText:
            'Soit $ABCD$ un carré direct. Considérons $f = r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$. La somme des angles vaut $\\pi$, donc $f = S_O$. Cherchons $f(D)$ : $r(A\\,;\\,\\pi/2)(D) = D’$ tel que $A$ soit milieu de $[BD’]$ ; plus simplement, $f(A) = r(B\\,;\\,\\pi/2)(A) = A’$ avec $ABA’$ rectangle isocèle direct en $B$, et $O$ est le milieu de $[AA’]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q6',
            type: 'mcq',
            prompt: 'Dans un repère orthonormé, $A(0\\,;\\,0)$ et $B(2\\,;\\,0)$. Que vaut le centre $O$ de la symétrie centrale $r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ ?',
            options: ['$O(1\\,;\\,1)$', '$O(1\\,;\\,-1)$', '$O(1\\,;\\,0)$', '$O(2\\,;\\,-2)$'],
            correctAnswerIndex: 1,
            explanation: 'On a $r(A,\\pi/2)(A) = A(0\\,;\\,0)$, puis $r(B,\\pi/2)(A)$ tourne le vecteur $\\overrightarrow{BA}(-2\\,;\\,0)$ de $+\\dfrac{\\pi}{2}$ en $(0\\,;\\,-2)$, soit $A’(2\\,;\\,-2)$. Le milieu de $[AA’]$ est $O(1\\,;\\,-1)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q1',
          type: 'mcq',
          prompt: 'Parmi les composées suivantes de deux rotations, laquelle est une symétrie centrale ?',
          options: [
            '$r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(B\\,;\\,-\\dfrac{\\pi}{2}\\right)$',
            '$r\\left(A\\,;\\,\\dfrac{\\pi}{3}\\right) \\circ r\\left(B\\,;\\,\\dfrac{2\\pi}{3}\\right)$',
            '$r\\left(A\\,;\\,\\dfrac{\\pi}{4}\\right) \\circ r\\left(B\\,;\\,\\dfrac{\\pi}{4}\\right)$',
            '$r\\left(A\\,;\\,\\pi\\right) \\circ r\\left(B\\,;\\,\\pi\\right)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{\\pi}{3} + \\dfrac{2\\pi}{3} = \\pi$, donc $r(A,\\pi/3) \\circ r(B,2\\pi/3)$ est une rotation d’angle $\\pi$, c’est-à-dire une symétrie centrale.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q2',
          type: 'mcq',
          prompt: 'Soient $r_1 = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ et $r_2 = r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right)$ ($A \\neq B$). On pose $A’ = r_2(A)$. Quel est le centre $O$ de la symétrie centrale $r_2 \\circ r_1$ ?',
          options: [
            'Le milieu de $[AB]$',
            'Le milieu de $[AA’]$',
            'Le point $B$',
            'Le point $A’$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On a $(r_2 \\circ r_1)(A) = r_2(r_1(A)) = r_2(A) = A’$. Comme $r_2 \\circ r_1 = S_O$, le centre $O$ est le milieu du segment $[AA’]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q3',
          type: 'mcq',
          prompt: 'Sachant que $r\\left(I\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(J\\,;\\,\\dfrac{\\pi}{2}\\right) = S_K$, à quoi est égale la composée $r\\left(J\\,;\\,-\\dfrac{\\pi}{2}\\right) \\circ r\\left(I\\,;\\,-\\dfrac{\\pi}{2}\\right)$ ?',
          options: [
            '$S_K$',
            '$t_{2\\overrightarrow{IJ}}$',
            '$r(K\\,;\\,\\dfrac{\\pi}{2})$',
            '$\\operatorname{Id}_{\\mathcal{P}}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$r\\left(J\\,;\\,-\\dfrac{\\pi}{2}\\right) \\circ r\\left(I\\,;\\,-\\dfrac{\\pi}{2}\\right) = (r \\circ r’)^{-1} = (S_K)^{-1} = S_K$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q4',
          type: 'mcq',
          prompt: 'Si $S_K(F) = B$ et $S_K(A) = A’$, que peut-on affirmer sur le quadrilatère $ABFA’$ ?',
          options: [
            'C’est un trapèze sans autre propriété',
            'C’est un parallélogramme de centre $K$',
            'Ses diagonales sont $[AB]$ et $[FA’]$',
            'Il est nécessairement un losange',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les diagonales $[BF]$ et $[AA’]$ ont le même milieu $K$, donc $ABFA’$ est un parallélogramme de centre $K$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q5',
          type: 'mcq',
          prompt: 'Soient $A$ et $B$ deux points distincts. Quelle est la nature de $S_A \\circ S_B$ ?',
          options: [
            'La symétrie centrale de centre le milieu de $[AB]$',
            'La translation de vecteur $2\\overrightarrow{AB}$',
            'La translation de vecteur $2\\overrightarrow{BA}$',
            'Une rotation d’angle $\\dfrac{\\pi}{2}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Somme des angles $\\pi + \\pi \\equiv 0\\,[2\\pi]$ : c’est une translation. Son vecteur vaut $\\overrightarrow{B S_A(S_B(B))} = \\overrightarrow{B S_A(B)} = 2\\overrightarrow{BA}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p03_q6',
          type: 'mcq',
          prompt: 'Dans un repère orthonormé, $A(0\\,;\\,0)$ et $B(2\\,;\\,0)$. Que vaut le centre $O$ de la symétrie centrale $r\\left(B\\,;\\,\\dfrac{\\pi}{2}\\right) \\circ r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ ?',
          options: ['$O(1\\,;\\,1)$', '$O(1\\,;\\,-1)$', '$O(1\\,;\\,0)$', '$O(2\\,;\\,-2)$'],
          correctAnswerIndex: 1,
          explanation: 'On a $r(A,\\pi/2)(A) = A(0\\,;\\,0)$, puis $r(B,\\pi/2)(A)$ tourne le vecteur $\\overrightarrow{BA}(-2\\,;\\,0)$ de $+\\dfrac{\\pi}{2}$ en $(0\\,;\\,-2)$, soit $A’(2\\,;\\,-2)$. Le milieu de $[AA’]$ est $O(1\\,;\\,-1)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Composée de deux homothéties (même centre et centres distincts)
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04',
      order: 4,
      title: 'Composée de deux homothéties et construction du centre',
      summary:
        'Homothéties de même centre h(O, kk’), centres distincts : translation si kk’ = 1, homothétie de rapport kk’ et centre Ω = (AB) ∩ (EE’) sinon.',
      conceptExplanation:
        "1. **Homothéties de même centre $O$** :\nPour tous réels non nuls $k$ et $k’$, la composée de $h(O\\,;\\,k)$ et $h(O\\,;\\,k’)$ est l’homothétie de centre $O$ et de rapport $kk’$ :\n$$h(O\\,;\\,k) \\circ h(O\\,;\\,k’) = h(O\\,;\\,k’) \\circ h(O\\,;\\,k) = h(O\\,;\\,kk’)$$\nLa réciproque de $h(O\\,;\\,k)$ est $h(O\\,;\\,\\frac{1}{k})$.\n\n2. **Homothéties de centres distincts $A \\neq B$** ($k \\neq 1$, $k’ \\neq 1$) :\nSoit $f = h(A\\,;\\,k) \\circ h(B\\,;\\,k’)$.\n- **Si $kk’ = 1$** : $f$ est la **translation** de vecteur $\\overrightarrow{BB’}$ où $B’ = h(A\\,;\\,k)(B)$ (c’est-à-dire de vecteur $(k - 1)\\overrightarrow{AB}$).\n- **Si $kk’ \\neq 1$** : $f$ est une **homothétie de rapport $kk’$**, dont le centre $\\Omega$ appartient à la droite $(AB)$ et vérifie :\n$$\\overrightarrow{\\Omega B’} = kk’\\overrightarrow{\\Omega B} \\quad (\\text{avec } B’ = h(A\\,;\\,k)(B))$$\nPour construire géométriquement $\\Omega$ sans calcul : on choisit un point $E \\notin (AB)$, on construit $E_1 = h(B\\,;\\,k’)(E)$ puis $E’ = h(A\\,;\\,k)(E_1) = f(E)$. Comme $\\Omega$, $E$ et $E’$ sont alignés, $\\Omega$ est l’intersection des droites $(AB)$ et $(EE’)$.",
      keyRule:
        'h(A, k) ∘ h(B, k’) : si kk’ = 1, c’est la translation de vecteur BB’ = (k − 1) AB ; si kk’ ≠ 1, c’est l’homothétie de rapport kk’ et de centre Ω = (AB) ∩ (EE’) où E’ = h(A,k)(h(B,k’)(E)).',
      formulas: [
        { name: 'Même centre', formula: 'h(O\\,;\\,k) \\circ h(O\\,;\\,k\') = h(O\\,;\\,kk\')' },
        { name: 'Réciproque d’une homothétie', formula: '(h(O\\,;\\,k))^{-1} = h\\left(O\\,;\\,\\frac{1}{k}\\right)' },
        { name: 'Cas kk’ = 1 (A ≠ B)', formula: 'h(A\\,;\\,k) \\circ h(B\\,;\\,\\tfrac{1}{k}) = t_{\\overrightarrow{BB\'}} \\quad (\\overrightarrow{BB\'} = (k-1)\\overrightarrow{AB})' },
        { name: 'Cas kk’ ≠ 1 (A ≠ B)', formula: 'h(A\\,;\\,k) \\circ h(B\\,;\\,k\') = h(\\Omega\\,;\\,kk\'), \\quad \\Omega = (AB) \\cap (EE\')' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Construction géométrique du centre Ω de h(A, k) ∘ h(B, k’)',
        caption: 'On choisit E ∉ (AB), on trace E₁ = h(B, k’)(E) puis E’ = h(A, k)(E₁) : alors Ω = (AB) ∩ (EE’).',
        svgContent: `<svg viewBox="0 0 360 190" width="340" height="179" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="2"/>
  <text x="325" y="166" font-size="11" fill="#475569">(AB)</text>
  <line x1="170" y1="60" x2="290" y2="165" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="70" y1="150" x2="225" y2="35" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="242" y1="22" x2="22" y2="168" stroke="#2563eb" stroke-width="2"/>
  <circle cx="198" cy="84" r="4" fill="#1e293b"/><text x="205" y="82" font-size="12" font-weight="bold" fill="#1e293b">E</text>
  <circle cx="270" cy="147" r="4" fill="#0f766e"/><text x="276" y="142" font-size="12" font-weight="bold" fill="#0f766e">B</text>
  <circle cx="145" cy="119" r="4" fill="#7c3aed"/><text x="128" y="112" font-size="12" font-weight="bold" fill="#7c3aed">E₁</text>
  <circle cx="70" cy="150" r="4" fill="#ea580c"/><text x="64" y="168" font-size="12" font-weight="bold" fill="#ea580c">A</text>
  <circle cx="220" cy="38" r="4" fill="#dc2626"/><text x="227" y="38" font-size="12" font-weight="bold" fill="#dc2626">E'</text>
  <circle cx="50" cy="150" r="5" fill="#2563eb"/><text x="41" y="138" font-size="13" font-weight="bold" fill="#2563eb">Ω</text>
</svg>`,
      },
      workedExample: {
        title: 'Cas kk’ = 1 et calcul algébrique de Ω quand kk’ ≠ 1',
        statement:
          'Soit $ABCD$ un parallélogramme.\n1) Détermine $f = h(A\\,;\\,2) \\circ h\\left(D\\,;\\,\\dfrac{1}{2}\\right)$.\n2) Sur une droite $(AB)$, détermine le barycentre $\\Omega$ centre de $g = h(A\\,;\\,3) \\circ h(B\\,;\\,-2)$.',
        methodSteps: [
          '1) Le produit des rapports vaut $2 \\times \\dfrac{1}{2} = 1$, donc $f$ est une translation. Son vecteur est $\\overrightarrow{Df(D)} = \\overrightarrow{Dh(A\\,;\\,2)(D)}$. Or $h(A\\,;\\,2)(D) = D’$ avec $\\overrightarrow{AD’} = 2\\overrightarrow{AD}$, donc $\\overrightarrow{DD’} = \\overrightarrow{AD} = \\overrightarrow{BC}$. Ainsi $f = t_{\\overrightarrow{BC}}$.',
          '2) Pour $g = h(A\\,;\\,3) \\circ h(B\\,;\\,-2)$, le produit des rapports vaut $3 \\times (-2) = -6 \\neq 1$ : $g$ est une homothétie de rapport $-6$.',
          'Cherchons son centre $\\Omega$ : par définition $g(\\Omega) = \\Omega$, ou en utilisant $B’ = h(A\\,;\\,3)(B)$ ($\\overrightarrow{AB’} = 3\\overrightarrow{AB}$), on a $\\overrightarrow{\\Omega B’} = -6\\overrightarrow{\\Omega B}$, soit $\\overrightarrow{\\Omega B’} + 6\\overrightarrow{\\Omega B} = \\vec{0}$.',
          'Comme $\\overrightarrow{AB’} = 3\\overrightarrow{AB}$, on exprime tout depuis $A$ : $(\\overrightarrow{\\Omega A} + 3\\overrightarrow{AB}) + 6(\\overrightarrow{\\Omega A} + \\overrightarrow{AB}) = \\vec{0} \\iff 7\\overrightarrow{\\Omega A} + 9\\overrightarrow{AB} = \\vec{0}$, donc $\\overrightarrow{A\\Omega} = \\dfrac{9}{7}\\overrightarrow{AB}$.',
        ],
        conclusion: '$h(A\\,;\\,2) \\circ h\\left(D\\,;\\,\\dfrac{1}{2}\\right) = t_{\\overrightarrow{BC}}$ et $h(A\\,;\\,3) \\circ h(B\\,;\\,-2) = h(\\Omega\\,;\\,-6)$ avec $\\overrightarrow{A\\Omega} = \\dfrac{9}{7}\\overrightarrow{AB}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Homothéties de même centre',
          stepTitle: 'Multiplier les rapports lorsque le centre est commun',
          paragraphText:
            'Deux homothéties de même centre $O$ commutent toujours et leur composée est l’homothétie de centre $O$ et de rapport égal au produit de leurs rapports.',
          formula: { name: 'Même centre', formula: 'h(O\\,;\\,k) \\circ h(O\\,;\\,k\') = h(O\\,;\\,kk\')' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q1',
            type: 'mcq',
            prompt: 'Que vaut la composée $h(O\\,;\\,-3) \\circ h\\left(O\\,;\\,\\dfrac{2}{3}\\right)$ ?',
            options: [
              '$h\\left(O\\,;\\,-\\dfrac{7}{3}\\right)$',
              '$h(O\\,;\\,-2)$',
              '$S_O$',
              '$h(O\\,;\\,2)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le centre $O$ est commun : le rapport est le produit $(-3) \\times \\dfrac{2}{3} = -2$, soit $h(O\\,;\\,-2)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas kk’ = 1 : obtenir une translation',
          stepTitle: 'Produit des rapports égal à 1 avec centres distincts',
          paragraphText:
            'Si $A \\neq B$ et $kk’ = 1$ (avec $k \\neq 1$), la composée $h(A\\,;\\,k) \\circ h(B\\,;\\,k’)$ est la translation de vecteur $\\overrightarrow{BB’}$ où $B’ = h(A\\,;\\,k)(B)$. Par la relation $\\overrightarrow{AB’} = k\\overrightarrow{AB}$, ce vecteur vaut $(k - 1)\\overrightarrow{AB}$.',
          formula: { name: 'Vecteur de translation', formula: '\\vec{u} = \\overrightarrow{BB\'} = (k - 1)\\overrightarrow{AB}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q2',
            type: 'mcq',
            prompt: 'Soient $A$ et $B$ deux points distincts. À quoi est égale $h(A\\,;\\,3) \\circ h\\left(B\\,;\\,\\dfrac{1}{3}\\right)$ ?',
            options: [
              '$t_{2\\overrightarrow{AB}}$',
              '$t_{\\overrightarrow{AB}}$',
              '$t_{2\\overrightarrow{BA}}$',
              '$h(A\\,;\\,1)$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le produit des rapports vaut $3 \\times \\dfrac{1}{3} = 1$, donc c’est une translation de vecteur $(3 - 1)\\overrightarrow{AB} = 2\\overrightarrow{AB}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas kk’ ≠ 1 : nature et rapport de la composée',
          stepTitle: 'Une homothétie de rapport kk’ et de centre sur (AB)',
          paragraphText:
            'Si $kk’ \\neq 1$, la composée $f = h(A\\,;\\,k) \\circ h(B\\,;\\,k’)$ est une homothétie de rapport $kk’$. Son centre $\\Omega$ appartient à la droite $(AB)$ et vérifie $\\overrightarrow{\\Omega B’} = kk’\\overrightarrow{\\Omega B}$ avec $B’ = h(A\\,;\\,k)(B)$ (donc $\\Omega = \\operatorname{bar}\\{(B’, 1)\\,;\\,(B, -kk’)\\}$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q3',
            type: 'mcq',
            prompt: 'Soit $f = h(A\\,;\\,2) \\circ h(B\\,;\\,3)$ ($A \\neq B$). Quelle est la nature de $f$ ?',
            options: [
              'Une homothétie de rapport $5$',
              'Une homothétie de rapport $6$ dont le centre appartient à $(AB)$',
              'Une translation de vecteur $6\\overrightarrow{AB}$',
              'Une symétrie centrale',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le produit des rapports vaut $2 \\times 3 = 6 \\neq 1$ : $f$ est une homothétie de rapport $6$ et son centre appartient nécessairement à la droite $(AB)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Construire géométriquement le centre Ω',
          stepTitle: 'Construire un point auxiliaire E et son image E’',
          paragraphText:
            'Pour construire à la règle et au compas le centre $\\Omega$ de $f = h(A\\,;\\,k) \\circ h(B\\,;\\,k’)$ (lorsque $kk’ \\neq 1$) : on choisit un point $E \\notin (AB)$, on construit $E_1 = h(B\\,;\\,k’)(E)$ puis $E’ = h(A\\,;\\,k)(E_1)$. Comme $\\overrightarrow{\\Omega E’} = kk’\\overrightarrow{\\Omega E}$, on obtient $\\Omega = (AB) \\cap (EE’)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q4',
            type: 'mcq',
            prompt: 'Pour construire le centre $\\Omega$ de $h(A\\,;\\,k) \\circ h(B\\,;\\,k’)$ ($kk’ \\neq 1$), on choisit $E \\notin (AB)$ et on construit $E’ = h(A\\,;\\,k)(h(B\\,;\\,k’)(E))$. Comment obtient-on $\\Omega$ ?',
            options: [
              '$\\Omega$ est le milieu de $[EE’]$',
              '$\\Omega$ est le point d’intersection des droites $(AB)$ et $(EE’)$',
              '$\\Omega$ est l’intersection de $(AE)$ et $(BE’)$',
              '$\\Omega$ est le projeté orthogonal de $E’$ sur $(AB)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Toute droite joignant un point et son image par une homothétie passe par son centre ; et le centre de la composée appartient à $(AB)$. Donc $\\Omega = (AB) \\cap (EE’)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Additionner les rapports au lieu de les multiplier',
          stepTitle: 'Les rapports d’homothéties se multiplient, comme la réciproque s’inverse',
          paragraphText:
            'Ne confonds pas translation (addition des vecteurs) et homothétie (**multiplication** des rapports) ! De même, la réciproque de $h(O\\,;\\,k)$ n’est pas $h(O\\,;\\,-k)$ mais $h(O\\,;\\,\\frac{1}{k})$ ($h(O\\,;\\,-k)$ compose avec $h(O\\,;\\,k)$ en $h(O\\,;\\,-k^2)$, pas en l’identité !).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q5',
            type: 'mcq',
            prompt: 'Quelle est la transformation réciproque de $h(O\\,;\\,-2)$ ?',
            options: [
              '$h(O\\,;\\,2)$',
              '$h\\left(O\\,;\\,-\\dfrac{1}{2}\\right)$',
              '$h\\left(O\\,;\\,\\dfrac{1}{2}\\right)$',
              '$S_O$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La réciproque de $h(O\\,;\\,k)$ est $h\\left(O\\,;\\,\\dfrac{1}{k}\\right)$. Pour $k = -2$, on obtient $h\\left(O\\,;\\,-\\dfrac{1}{2}\\right)$ car $(-2)\\times\\left(-\\dfrac{1}{2}\\right) = 1$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculer la position précise du centre Ω',
          stepTitle: 'Exprimer AΩ en fonction de AB',
          paragraphText:
            'Soit $f = h(A\\,;\\,2) \\circ h(B\\,;\\,-1)$. Ici $kk’ = -2 \\neq 1$, donc $f = h(\\Omega\\,;\\,-2)$. On pose $B’ = h(A\\,;\\,2)(B)$, soit $\\overrightarrow{AB’} = 2\\overrightarrow{AB}$. La relation $f(B) = B’$ donne $\\overrightarrow{\\Omega B’} = -2\\overrightarrow{\\Omega B}$, soit $\\overrightarrow{\\Omega A} + 2\\overrightarrow{AB} + 2(\\overrightarrow{\\Omega A} + \\overrightarrow{AB}) = \\vec{0} \\iff 3\\overrightarrow{\\Omega A} + 4\\overrightarrow{AB} = \\vec{0}$, donc $\\overrightarrow{A\\Omega} = \\dfrac{4}{3}\\overrightarrow{AB}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q6',
            type: 'mcq',
            prompt: 'Pour $f = h(A\\,;\\,2) \\circ S_B$ (rappel : $S_B = h(B\\,;\\,-1)$), quelle relation vérifie son centre $\\Omega$ ?',
            options: [
              '$\\overrightarrow{A\\Omega} = \\dfrac{4}{3}\\overrightarrow{AB}$',
              '$\\overrightarrow{A\\Omega} = \\dfrac{2}{3}\\overrightarrow{AB}$',
              '$\\overrightarrow{A\\Omega} = -\\dfrac{4}{3}\\overrightarrow{AB}$',
              '$\\overrightarrow{A\\Omega} = 2\\overrightarrow{AB}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'On a $f(B) = h(A\\,;\\,2)(B) = B’$ avec $\\overrightarrow{AB’} = 2\\overrightarrow{AB}$ et le rapport vaut $2 \\times (-1) = -2$. Donc $\\overrightarrow{\\Omega B’} = -2\\overrightarrow{\\Omega B}$, ce qui donne $3\\overrightarrow{\\Omega A} + 4\\overrightarrow{AB} = \\vec{0}$, soit $\\overrightarrow{A\\Omega} = \\dfrac{4}{3}\\overrightarrow{AB}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q1',
          type: 'mcq',
          prompt: 'Que vaut la composée $h(O\\,;\\,-3) \\circ h\\left(O\\,;\\,\\dfrac{2}{3}\\right)$ ?',
          options: [
            '$h\\left(O\\,;\\,-\\dfrac{7}{3}\\right)$',
            '$h(O\\,;\\,-2)$',
            '$S_O$',
            '$h(O\\,;\\,2)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le centre $O$ est commun : le rapport est le produit $(-3) \\times \\dfrac{2}{3} = -2$, soit $h(O\\,;\\,-2)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q2',
          type: 'mcq',
          prompt: 'Soient $A$ et $B$ deux points distincts. À quoi est égale $h(A\\,;\\,3) \\circ h\\left(B\\,;\\,\\dfrac{1}{3}\\right)$ ?',
          options: [
            '$t_{2\\overrightarrow{AB}}$',
            '$t_{\\overrightarrow{AB}}$',
            '$t_{2\\overrightarrow{BA}}$',
            '$h(A\\,;\\,1)$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Le produit des rapports vaut $3 \\times \\dfrac{1}{3} = 1$, donc c’est une translation de vecteur $(3 - 1)\\overrightarrow{AB} = 2\\overrightarrow{AB}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q3',
          type: 'mcq',
          prompt: 'Soit $f = h(A\\,;\\,2) \\circ h(B\\,;\\,3)$ ($A \\neq B$). Quelle est la nature de $f$ ?',
          options: [
            'Une homothétie de rapport $5$',
            'Une homothétie de rapport $6$ dont le centre appartient à $(AB)$',
            'Une translation de vecteur $6\\overrightarrow{AB}$',
            'Une symétrie centrale',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le produit des rapports vaut $2 \\times 3 = 6 \\neq 1$ : $f$ est une homothétie de rapport $6$ et son centre appartient nécessairement à la droite $(AB)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q4',
          type: 'mcq',
          prompt: 'Pour construire le centre $\\Omega$ de $h(A\\,;\\,k) \\circ h(B\\,;\\,k’)$ ($kk’ \\neq 1$), on choisit $E \\notin (AB)$ et on construit $E’ = h(A\\,;\\,k)(h(B\\,;\\,k’)(E))$. Comment obtient-on $\\Omega$ ?',
          options: [
            '$\\Omega$ est le milieu de $[EE’]$',
            '$\\Omega$ est le point d’intersection des droites $(AB)$ et $(EE’)$',
            '$\\Omega$ est l’intersection de $(AE)$ et $(BE’)$',
            '$\\Omega$ est le projeté orthogonal de $E’$ sur $(AB)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Toute droite joignant un point et son image par une homothétie passe par son centre ; et le centre de la composée appartient à $(AB)$. Donc $\\Omega = (AB) \\cap (EE’)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q5',
          type: 'mcq',
          prompt: 'Quelle est la transformation réciproque de $h(O\\,;\\,-2)$ ?',
          options: [
            '$h(O\\,;\\,2)$',
            '$h\\left(O\\,;\\,-\\dfrac{1}{2}\\right)$',
            '$h\\left(O\\,;\\,\\dfrac{1}{2}\\right)$',
            '$S_O$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La réciproque de $h(O\\,;\\,k)$ est $h\\left(O\\,;\\,\\dfrac{1}{k}\\right)$. Pour $k = -2$, on obtient $h\\left(O\\,;\\,-\\dfrac{1}{2}\\right)$ car $(-2)\\times\\left(-\\dfrac{1}{2}\\right) = 1$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p04_q6',
          type: 'mcq',
          prompt: 'Pour $f = h(A\\,;\\,2) \\circ S_B$ (rappel : $S_B = h(B\\,;\\,-1)$), quelle relation vérifie son centre $\\Omega$ ?',
          options: [
            '$\\overrightarrow{A\\Omega} = \\dfrac{4}{3}\\overrightarrow{AB}$',
            '$\\overrightarrow{A\\Omega} = \\dfrac{2}{3}\\overrightarrow{AB}$',
            '$\\overrightarrow{A\\Omega} = -\\dfrac{4}{3}\\overrightarrow{AB}$',
            '$\\overrightarrow{A\\Omega} = 2\\overrightarrow{AB}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'On a $f(B) = h(A\\,;\\,2)(B) = B’$ avec $\\overrightarrow{AB’} = 2\\overrightarrow{AB}$ et le rapport vaut $2 \\times (-1) = -2$. Donc $\\overrightarrow{\\Omega B’} = -2\\overrightarrow{\\Omega B}$, ce qui donne $3\\overrightarrow{\\Omega A} + 4\\overrightarrow{AB} = \\vec{0}$, soit $\\overrightarrow{A\\Omega} = \\dfrac{4}{3}\\overrightarrow{AB}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Composée de deux symétries orthogonales d’axes parallèles
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05',
      order: 5,
      title: 'Composée de deux symétries orthogonales d’axes parallèles',
      summary:
        'S_{(D’)} ∘ S_{(D)} = t_{2 OO’} (où O ∈ (D) et O’ est son projeté orthogonal sur (D’)) ; sens du vecteur selon l’ordre des axes et décomposition d’une translation.',
      conceptExplanation:
        "Soient $(D)$ et $(D’)$ deux droites **parallèles**. On choisit un point quelconque $O \\in (D)$ et on note $O’$ son projeté orthogonal sur $(D’)$.\n\nLa composée des symétries orthogonales $S_{(D’)} \\circ S_{(D)}$ est la **translation** de vecteur $2\\overrightarrow{OO’}$ :\n$$S_{(D’)} \\circ S_{(D)} = t_{2\\overrightarrow{OO’}}$$\nLe vecteur va donc **du premier axe appliqué $(D)$ vers le deuxième axe $(D’)$**, perpendiculairement aux deux axes, avec une norme égale au double de la distance entre $(D)$ et $(D’)$.\n\nSi $(D) \\neq (D’)$, l’ordre compte : $S_{(D)} \\circ S_{(D’)} = t_{2\\overrightarrow{O’O}} = t_{-2\\overrightarrow{OO’}}$.\n\nRéciproquement, toute translation $t_{\\vec{u}}$ ($\\vec{u} \\neq \\vec{0}$) peut s’écrire d’une **infinité** de façons comme composée $S_{(D’)} \\circ S_{(D)}$ de deux symétries orthogonales d’axes orthogonaux à $\\vec{u}$ vérifiant $(D’) = t_{\\frac{1}{2}\\vec{u}}(D)$.",
      keyRule:
        'Pour (D) // (D’), S_{(D’)} ∘ S_{(D)} = t_{2 OO’}, du premier axe (D) vers le second (D’). Si on inverse l’ordre, le vecteur change de sens : S_{(D)} ∘ S_{(D’)} = t_{2 O’O}.',
      formulas: [
        { name: 'Composée d’axes parallèles', formula: 'S_{(D\')} \\circ S_{(D)} = t_{2\\overrightarrow{OO\'}} \\quad (O \\in (D),\\, O\' \\text{ projeté sur } (D\'))' },
        { name: 'Inversion de l’ordre', formula: 'S_{(D)} \\circ S_{(D\')} = t_{2\\overrightarrow{O\'O}} = (S_{(D\')} \\circ S_{(D)})^{-1}' },
        { name: 'Décomposition d’une translation', formula: 't_{\\vec{u}} = S_{(D\')} \\circ S_{(D)} \\iff (D) \\perp \\vec{u} \\text{ et } (D\') = t_{\\frac{1}{2}\\vec{u}}(D)' },
      ],
      workedExample: {
        title: 'Composées de symétries orthogonales dans un carré et un rectangle',
        statement:
          'Soit $ABCD$ un carré, $L$ le milieu de $[AD]$ et $J$ le milieu de $[BC]$.\n1) Détermine $S_{(LJ)} \\circ S_{(DC)}$ et $S_{(DC)} \\circ S_{(LJ)}$.\n2) Décompose la translation $t_{\\overrightarrow{AB}}$ sous la forme $S_{(D’)} \\circ S_{(AD)}$.',
        methodSteps: [
          '1) Dans le carré $ABCD$, $(LJ)$ est la médiatrice de $[AD]$ et de $[BC]$ : donc $(LJ) \\parallel (DC)$ et $D \\in (DC)$ a pour projeté orthogonal $L$ sur $(LJ)$.',
          'Ainsi $S_{(LJ)} \\circ S_{(DC)} = t_{2\\overrightarrow{DL}} = t_{\\overrightarrow{DA}} = t_{\\overrightarrow{CB}}$.',
          'En inversant l’ordre, on va de $(LJ)$ vers $(DC)$ : $S_{(DC)} \\circ S_{(LJ)} = t_{2\\overrightarrow{LD}} = t_{\\overrightarrow{AD}} = t_{\\overrightarrow{BC}}$.',
          '2) Pour $t_{\\overrightarrow{AB}} = S_{(D’)} \\circ S_{(AD)}$, on vérifie d’abord que $(AD) \\perp \\overrightarrow{AB}$. Il faut ensuite $(D’) = t_{\\frac{1}{2}\\overrightarrow{AB}}(AD)$, qui est la médiatrice de $[AB]$ et $[CD]$ (passant par les milieux de $[AB]$ et $[CD]$).',
        ],
        conclusion: '$S_{(LJ)} \\circ S_{(DC)} = t_{\\overrightarrow{CB}}$, $S_{(DC)} \\circ S_{(LJ)} = t_{\\overrightarrow{BC}}$ et $t_{\\overrightarrow{AB}} = S_{(D’)} \\circ S_{(AD)}$ où $(D’)$ est la médiatrice de $[AB]$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Nature et vecteur de S_{(D’)} ∘ S_{(D)} pour (D) // (D’)',
          stepTitle: 'Le double du vecteur reliant les deux axes parallèles',
          paragraphText:
            'Si $(D) \\parallel (D’)$, la composée $S_{(D’)} \\circ S_{(D)}$ est une translation dont le vecteur est $2\\overrightarrow{OO’}$, où $O \\in (D)$ et $O’$ est le projeté orthogonal de $O$ sur $(D’)$. En particulier, si $(D) = (D’)$, on obtient $S_{(D)} \\circ S_{(D)} = \\operatorname{Id}_{\\mathcal{P}}$.',
          formula: { name: 'Axes parallèles', formula: 'S_{(D\')} \\circ S_{(D)} = t_{2\\overrightarrow{OO\'}}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q1',
            type: 'mcq',
            prompt: 'Soient $(D)$ et $(D’)$ deux droites parallèles distantes de $3\\text{ cm}$. Que vaut $S_{(D’)} \\circ S_{(D)}$ ?',
            options: [
              'Une symétrie orthogonale d’axe parallèle à $(D)$',
              'Une translation de vecteur orthogonal aux axes et de norme $6\\text{ cm}$',
              'Une translation de vecteur orthogonal aux axes et de norme $3\\text{ cm}$',
              'Une homothétie de rapport $2$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La norme du vecteur $2\\overrightarrow{OO’}$ est $2 \\times OO’ = 2 \\times 3 = 6\\text{ cm}$, et ce vecteur est orthogonal à $(D)$ et $(D’)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Sens du vecteur selon l’ordre de composition',
          stepTitle: 'Aller du 1er axe (à droite) vers le 2e axe (à gauche)',
          paragraphText:
            'Dans l’écriture $S_{(D’)} \\circ S_{(D)}$, on applique d’abord $S_{(D)}$ puis $S_{(D’)}$ : le point $O \\in (D)$ reste fixe par $S_{(D)}$, puis est envoyé en $O’’$ symétrique de $O$ par rapport à $(D’)$, donc $\\overrightarrow{OO’’} = 2\\overrightarrow{OO’}$ pointe de $(D)$ vers $(D’)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q2',
            type: 'mcq',
            prompt: 'Dans un rectangle $ABCD$, $L$ est le milieu de $[AD]$ et $J$ le milieu de $[BC]$. À quoi est égale $S_{(AB)} \\circ S_{(LJ)}$ ?',
            options: ['$t_{\\overrightarrow{DA}}$', '$t_{\\overrightarrow{AD}}$', '$t_{2\\overrightarrow{DA}}$', '$t_{\\overrightarrow{AB}}$'],
            correctAnswerIndex: 0,
            explanation: 'On applique d’abord $S_{(LJ)}$ puis $S_{(AB)}$ : le vecteur va de $(LJ)$ vers $(AB)$, soit $2\\overrightarrow{LA} = \\overrightarrow{DA}$ (et non $\\overrightarrow{AD}$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Décomposer une translation en deux symétries orthogonales',
          stepTitle: 'Choisir un axe perpendiculaire et translater de la moitié du vecteur',
          paragraphText:
            'Pour écrire $t_{\\vec{u}} = S_{(D’)} \\circ S_{(D)}$ : tout couple de droites parallèles orthogonales à $\\vec{u}$ telles que $(D’) = t_{\\frac{1}{2}\\vec{u}}(D)$ convient. S’il s’agit d’écrire $t_{\\vec{u}} = S_{(D)} \\circ S_{(D’)}$, c’est $(D)$ qui est translatée de $(D’)$ par $t_{\\frac{1}{2}\\vec{u}}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q3',
            type: 'mcq',
            prompt: 'Dans un rectangle $ABCD$, quelle droite $(D)$ vérifie $t_{\\overrightarrow{BC}} = S_{(DC)} \\circ S_{(D)}$ ?',
            options: [
              'La droite $(AB)$',
              'La droite $(AD)$',
              'La médiatrice des segments $[AD]$ et $[BC]$',
              'Il n’en existe pas',
            ],
            correctAnswerIndex: 2,
            explanation: 'Il faut que le vecteur reliant $(D)$ à $(DC)$ soit $\\frac{1}{2}\\overrightarrow{BC} = \\overrightarrow{LC}$, donc $(D)$ passe par les milieux $L$ de $[AD]$ et $J$ de $[BC]$, c’est-à-dire la médiatrice de $[AD]$ et $[BC]$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Réduction de S_{(D_3)} ∘ S_{(D_2)} ∘ S_{(D_1)} d’axes parallèles',
          stepTitle: 'Composer une translation avec une troisième symétrie orthogonale',
          paragraphText:
            'Si $(D_1)$, $(D_2)$ et $(D_3)$ sont parallèles, alors $S_{(D_2)} \\circ S_{(D_1)} = t_{\\vec{u}}$ avec $\\vec{u} \\perp (D_3)$. En écrivant $t_{\\vec{u}} = S_{(D_3)} \\circ S_{(D_4)}$, on obtient $S_{(D_3)} \\circ S_{(D_2)} \\circ S_{(D_1)} = S_{(D_4)}$ (une autre symétrie orthogonale d’axe parallèle !).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q4',
            type: 'mcq',
            prompt: 'Dans un repère orthonormé, on considère les droites d’équations $(D_1): x=1$, $(D_2): x=3$ et $(D_3): x=4$. Quelle est la transformation $S_{(D_3)} \\circ S_{(D_2)} \\circ S_{(D_1)}$ ?',
            options: [
              'La translation de vecteur $4\\vec{i}$',
              'La symétrie orthogonale par rapport à la droite $x = 2$',
              'La symétrie orthogonale par rapport à la droite $x = 0$',
              'La symétrie orthogonale par rapport à la droite $x = 6$',
            ],
            correctAnswerIndex: 1,
            explanation: '$S_{(D_2)} \\circ S_{(D_1)} = t_{4\\vec{i}}$ (car $2\\times(3-1)=4$). Comme $t_{4\\vec{i}} = S_{(D_3)} \\circ S_{(x=2)}$ (car $2\\times(4-2)=4$), on a $S_{(D_3)} \\circ t_{4\\vec{i}} = S_{(x=2)}$. Vérification sur $x=0$ : $0 \\mapsto 2 \\mapsto 4 \\mapsto 4$ ! Et $S_{(x=2)}(0) = 4$ !',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier le facteur 2 ou inverser l’ordre des axes',
          stepTitle: 'Doubler la distance entre les axes et respecter l’ordre',
          paragraphText:
            'Deux erreurs classiques : oublier le facteur $2$ (écrire $\\overrightarrow{OO’}$ au lieu de $2\\overrightarrow{OO’}$), et confondre $S_{(D’)} \\circ S_{(D)}$ avec $S_{(D)} \\circ S_{(D’)}$ alors que les deux vecteurs sont opposés.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q5',
            type: 'mcq',
            prompt: 'Soient $(D_1) : y = 1$ et $(D_2) : y = -2$ dans un repère orthonormé. Que vaut $S_{(D_2)} \\circ S_{(D_1)}$ ?',
            options: [
              '$t_{-3\\vec{j}}$',
              '$t_{6\\vec{j}}$',
              '$t_{-6\\vec{j}}$',
              '$t_{3\\vec{j}}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'On part de $O(0\\,;\\,1) \\in (D_1)$ vers son projeté $O’(0\\,;\\,-2) \\in (D_2)$ : $\\overrightarrow{OO’} = -3\\vec{j}$, donc $2\\overrightarrow{OO’} = -6\\vec{j}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Enchaîner dans un rectangle ABCD',
          stepTitle: 'Simplifier S_{(LJ)} ∘ S_{(DC)} puis S_{(BC)} ∘ S_{(AB)}',
          paragraphText:
            'Dans un carré $ABCD$ où $L$ est le milieu de $[AD]$ et $J$ le milieu de $[BC]$, $(DC) \\parallel (LJ)$ avec $\\overrightarrow{DL} = \\frac{1}{2}\\overrightarrow{DA} = \\frac{1}{2}\\overrightarrow{CB}$, donc $S_{(LJ)} \\circ S_{(DC)} = t_{2\\overrightarrow{DL}} = t_{\\overrightarrow{CB}}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q6',
            type: 'mcq',
            prompt: 'Dans un carré $ABCD$, si $(D_1) = (AB)$ et $(D_2) = (CD)$, que vaut $S_{(CD)} \\circ S_{(AB)}$ ?',
            options: [
              '$t_{\\overrightarrow{AD}}$',
              '$t_{2\\overrightarrow{AD}}$',
              '$t_{2\\overrightarrow{DA}}$',
              '$S_O$ ($O$ centre du carré)',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les droites $(AB)$ et $(CD)$ sont parallèles, et le projeté de $A \\in (AB)$ sur $(CD)$ est $D$. On va de $(AB)$ vers $(CD)$, donc le vecteur est $2\\overrightarrow{AD}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q1',
          type: 'mcq',
          prompt: 'Soient $(D)$ et $(D’)$ deux droites parallèles distantes de $3\\text{ cm}$. Que vaut $S_{(D’)} \\circ S_{(D)}$ ?',
          options: [
            'Une symétrie orthogonale d’axe parallèle à $(D)$',
            'Une translation de vecteur orthogonal aux axes et de norme $6\\text{ cm}$',
            'Une translation de vecteur orthogonal aux axes et de norme $3\\text{ cm}$',
            'Une homothétie de rapport $2$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La norme du vecteur $2\\overrightarrow{OO’}$ est $2 \\times OO’ = 2 \\times 3 = 6\\text{ cm}$, et ce vecteur est orthogonal à $(D)$ et $(D’)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q2',
          type: 'mcq',
          prompt: 'Dans un rectangle $ABCD$, $L$ est le milieu de $[AD]$ et $J$ le milieu de $[BC]$. À quoi est égale $S_{(AB)} \\circ S_{(LJ)}$ ?',
          options: ['$t_{\\overrightarrow{DA}}$', '$t_{\\overrightarrow{AD}}$', '$t_{2\\overrightarrow{DA}}$', '$t_{\\overrightarrow{AB}}$'],
          correctAnswerIndex: 0,
          explanation: 'On applique d’abord $S_{(LJ)}$ puis $S_{(AB)}$ : le vecteur va de $(LJ)$ vers $(AB)$, soit $2\\overrightarrow{LA} = \\overrightarrow{DA}$ (et non $\\overrightarrow{AD}$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q3',
          type: 'mcq',
          prompt: 'Dans un rectangle $ABCD$, quelle droite $(D)$ vérifie $t_{\\overrightarrow{BC}} = S_{(DC)} \\circ S_{(D)}$ ?',
          options: [
            'La droite $(AB)$',
            'La droite $(AD)$',
            'La médiatrice des segments $[AD]$ et $[BC]$',
            'Il n’en existe pas',
          ],
          correctAnswerIndex: 2,
          explanation: 'Il faut que le vecteur reliant $(D)$ à $(DC)$ soit $\\frac{1}{2}\\overrightarrow{BC} = \\overrightarrow{LC}$, donc $(D)$ passe par les milieux $L$ de $[AD]$ et $J$ de $[BC]$, c’est-à-dire la médiatrice de $[AD]$ et $[BC]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q4',
          type: 'mcq',
          prompt: 'Dans un repère orthonormé, on considère les droites d’équations $(D_1): x=1$, $(D_2): x=3$ et $(D_3): x=4$. Quelle est la transformation $S_{(D_3)} \\circ S_{(D_2)} \\circ S_{(D_1)}$ ?',
          options: [
            'La translation de vecteur $4\\vec{i}$',
            'La symétrie orthogonale par rapport à la droite $x = 2$',
            'La symétrie orthogonale par rapport à la droite $x = 0$',
            'La symétrie orthogonale par rapport à la droite $x = 6$',
          ],
          correctAnswerIndex: 1,
          explanation: '$S_{(D_2)} \\circ S_{(D_1)} = t_{4\\vec{i}}$. Comme $t_{4\\vec{i}} = S_{(D_3)} \\circ S_{(x=2)}$ (car $2\\times(4-2)=4$), on obtient $S_{(D_3)} \\circ S_{(D_2)} \\circ S_{(D_1)} = S_{(x=2)}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q5',
          type: 'mcq',
          prompt: 'Soient $(D_1) : y = 1$ et $(D_2) : y = -2$ dans un repère orthonormé. Que vaut $S_{(D_2)} \\circ S_{(D_1)}$ ?',
          options: [
            '$t_{-3\\vec{j}}$',
            '$t_{6\\vec{j}}$',
            '$t_{-6\\vec{j}}$',
            '$t_{3\\vec{j}}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'On part de $O(0\\,;\\,1) \\in (D_1)$ vers son projeté $O’(0\\,;\\,-2) \\in (D_2)$ : $\\overrightarrow{OO’} = -3\\vec{j}$, donc $2\\overrightarrow{OO’} = -6\\vec{j}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p05_q6',
          type: 'mcq',
          prompt: 'Dans un carré $ABCD$, si $(D_1) = (AB)$ et $(D_2) = (CD)$, que vaut $S_{(CD)} \\circ S_{(AB)}$ ?',
          options: [
            '$t_{\\overrightarrow{AD}}$',
            '$t_{2\\overrightarrow{AD}}$',
            '$t_{2\\overrightarrow{DA}}$',
            '$S_O$ ($O$ centre du carré)',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les droites $(AB)$ et $(CD)$ sont parallèles, et le projeté de $A \\in (AB)$ sur $(CD)$ est $D$. On va de $(AB)$ vers $(CD)$, donc le vecteur est $2\\overrightarrow{AD}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Composée de deux symétries orthogonales d’axes sécants
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06',
      order: 6,
      title: 'Composée de deux symétries orthogonales d’axes sécants',
      summary:
        'S_{(D’)} ∘ S_{(D)} = r(O, 2 θ) où O = (D) ∩ (D’) et θ = ((D), (D’)) ; cas d’axes perpendiculaires donnant S_O (commutatif) et décomposition d’une rotation.',
      conceptExplanation:
        "Soient $(D)$ et $(D’)$ deux droites **sécantes** en un point $O$, dirigées respectivement par des vecteurs $\\vec{u}$ et $\\vec{v}$.\n\nLa composée $S_{(D’)} \\circ S_{(D)}$ est la **rotation** de centre $O$ et d’angle orienté $2\\widehat{(\\vec{u}\\,;\\,\\vec{v})}$ (soit le double de l’angle orienté de droites $\\widehat{((D)\\,;\\,(D’))}$) :\n$$S_{(D’)} \\circ S_{(D)} = r\\left(O\\,;\\,2\\widehat{(\\vec{u}\\,;\\,\\vec{v})}\\right)$$\nNotice que : pour une rotation d’angle de vecteurs, un angle de droites $\\theta$ est défini modulo $\\pi$, donc son double $2\\theta$ est bien défini modulo $2\\pi$. L’ordre compte : du 1er axe $(D)$ vers le 2e axe $(D’)$ ; si l’on permute, $S_{(D)} \\circ S_{(D’)} = r(O\\,;\\,-2\\widehat{(\\vec{u}\\,;\\,\\vec{v})})$.\n\n**Cas particulier fondamental** : si $(D) \\perp (D’)$ en $O$, alors $2\\widehat{(\\vec{u}\\,;\\,\\vec{v})} \\equiv \\pi\\,[2\\pi]$, donc :\n$$S_{(D’)} \\circ S_{(D)} = S_{(D)} \\circ S_{(D’)} = S_O$$\nLes deux symétries commutent alors et donnent la symétrie centrale de centre $O$.\n\n**Réciproque** : toute rotation $r(O\\,;\\,\\alpha)$ se décompose (d’une infinité de façons) en $S_{(D’)} \\circ S_{(D)}$ avec $O \\in (D) \\cap (D’)$ et $\\widehat{((D)\\,;\\,(D’))} = \\frac{\\alpha}{2}$.",
      keyRule:
        'Si (D) et (D’) se coupent en O, S_{(D’)} ∘ S_{(D)} = r(O, 2 θ) avec θ = ((D), (D’)) du 1er axe vers le 2e. Si (D) ⊥ (D’), elles commutent et donnent la symétrie centrale S_O.',
      formulas: [
        { name: 'Axes sécants en O', formula: 'S_{(D\')} \\circ S_{(D)} = r\\left(O\\,;\\,2\\widehat{(\\vec{u}\\,;\\,\\vec{v})}\\right)' },
        { name: 'Axes perpendiculaires en O', formula: '(D) \\perp (D\') \\iff S_{(D\')} \\circ S_{(D)} = S_{(D)} \\circ S_{(D\')} = S_O' },
        { name: 'Décomposition d’une rotation', formula: 'r(O\\,;\\,\\alpha) = S_{(D\')} \\circ S_{(D)} \\iff O \\in (D)\\cap(D\') \\text{ et } \\widehat{((D),(D\'))} \\equiv \\frac{\\alpha}{2}\\,[\\pi]' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Triangle équilatéral direct ABC de centre O : axes sécants',
        caption: '(AA’), (BB’), (CC’) sont les hauteurs-médiatrices concourantes en O. s_{(AA’)} ∘ s_{(AB)} = r(A, π/3) et s_{(CC’)} ∘ s_{(AB)} = S_{C’}.',
        svgContent: `<svg viewBox="0 0 320 220" width="300" height="206" xmlns="http://www.w3.org/2000/svg">
  <polygon points="160,26 62,188 258,188" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <line x1="160" y1="26" x2="160" y2="188" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="5 3"/>
  <line x1="62" y1="188" x2="209" y2="107" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="5 3"/>
  <line x1="258" y1="188" x2="111" y2="107" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="5 3"/>
  <circle cx="160" cy="26" r="4" fill="#1e293b"/><text x="155" y="18" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <circle cx="62" cy="188" r="4" fill="#1e293b"/><text x="45" y="196" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <circle cx="258" cy="188" r="4" fill="#1e293b"/><text x="264" y="196" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <circle cx="160" cy="188" r="3.5" fill="#2563eb"/><text x="155" y="206" font-size="12" font-weight="bold" fill="#2563eb">A'</text>
  <circle cx="209" cy="107" r="3.5" fill="#7c3aed"/><text x="216" y="106" font-size="12" font-weight="bold" fill="#7c3aed">B'</text>
  <circle cx="111" cy="107" r="3.5" fill="#0f766e"/><text x="90" y="106" font-size="12" font-weight="bold" fill="#0f766e">C'</text>
  <circle cx="160" cy="134" r="4" fill="#dc2626"/><text x="167" y="147" font-size="12" font-weight="bold" fill="#dc2626">O</text>
</svg>`,
      },
      workedExample: {
        title: 'Composées de symétries axiales dans un triangle équilatéral direct ABC',
        statement:
          'Soit $ABC$ un triangle équilatéral de sens direct et de centre $O$. On note $A’$, $B’$ et $C’$ les milieux respectifs de $[BC]$, $[CA]$ et $[AB]$. Détermine :\n1) $s_{(AA’)} \\circ s_{(AB)}$\n2) $s_{(AA’)} \\circ s_{(BB’)}$\n3) $s_{(CC’)} \\circ s_{(AB)}$.',
        methodSteps: [
          '1) $(AB)$ et $(AA’)$ se coupent en $A$. Comme $(AA’)$ est la bissectrice intérieure de $\\widehat{BAC}$ dans le triangle direct $ABC$, $\\widehat{(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AA’})} = +\\dfrac{\\pi}{6}$. Donc $s_{(AA’)} \\circ s_{(AB)} = r\\left(A\\,;\\,2\\times\\dfrac{\\pi}{6}\\right) = r\\left(A\\,;\\,\\dfrac{\\pi}{3}\\right)$.',
          '2) $(BB’)$ et $(AA’)$ se coupent au centre $O$. En testant sur les sommets : $s_{(BB’)}(A) = C$ puis $s_{(AA’)}(C) = B$, et $s_{(BB’)}(B) = B$ puis $s_{(AA’)}(B) = C$. On obtient la rotation de centre $O$ et d’angle $+\\dfrac{2\\pi}{3}$ : $s_{(AA’)} \\circ s_{(BB’)} = r\\left(O\\,;\\,\\dfrac{2\\pi}{3}\\right)$ (cohérent avec $\\widehat{((BB’),(AA’))} \\equiv \\dfrac{\\pi}{3}\\,[\\pi]$).',
          '3) $(AB)$ et $(CC’)$ sont perpendiculaires et se coupent en $C’$ (milieu de $[AB]$, et **non** en $C$ !). La composée de deux symétries orthogonales d’axes perpendiculaires est la symétrie centrale par rapport à leur intersection : $s_{(CC’)} \\circ s_{(AB)} = S_{C’}$.',
        ],
        conclusion: '$s_{(AA’)} \\circ s_{(AB)} = r\\left(A\\,;\\,\\dfrac{\\pi}{3}\\right)$, $s_{(AA’)} \\circ s_{(BB’)} = r\\left(O\\,;\\,\\dfrac{2\\pi}{3}\\right)$ et $s_{(CC’)} \\circ s_{(AB)} = S_{C’}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Axes sécants : rotation de centre O et d’angle 2θ',
          stepTitle: 'Doubler l’angle orienté du 1er axe vers le 2e axe',
          paragraphText:
            'Lorsque $(D)$ et $(D’)$ se coupent en $O$ avec des vecteurs directeurs $\\vec{u}$ et $\\vec{v}$, la composée $S_{(D’)} \\circ S_{(D)}$ est la rotation de centre $O$ et d’angle $2\\widehat{(\\vec{u}\\,;\\,\\vec{v})}$. Le point d’intersection $O$ est le centre car il est invariant par chacune des deux réflexions.',
          formula: { name: 'Rotation associée', formula: 'S_{(D\')} \\circ S_{(D)} = r\\left(O\\,;\\,2\\widehat{(\\vec{u}\\,;\\,\\vec{v})}\\right)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q1',
            type: 'mcq',
            prompt: 'Soient $(D)$ et $(D’)$ deux droites sécantes en $O$ telles que $\\widehat{((D)\\,;\\,(D’))} = -\\dfrac{\\pi}{5}\\,[\\pi]$. Quelle est la transformation $S_{(D’)} \\circ S_{(D)}$ ?',
            options: [
              '$r\\left(O\\,;\\,-\\dfrac{\\pi}{5}\\right)$',
              '$r\\left(O\\,;\\,\\dfrac{2\\pi}{5}\\right)$',
              '$r\\left(O\\,;\\,-\\dfrac{2\\pi}{5}\\right)$',
              '$S_O$',
            ],
            correctAnswerIndex: 2,
            explanation: 'On double l’angle orienté du premier axe $(D)$ vers le second axe $(D’)$ : $2 \\times \\left(-\\dfrac{\\pi}{5}\\right) = -\\dfrac{2\\pi}{5}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas d’axes perpendiculaires : symétrie centrale S_O',
          stepTitle: 'Deux réflexions d’axes orthogonaux commutent et donnent S_O',
          paragraphText:
            'Si $(D) \\perp (D’)$ en $O$, l’angle droit doublé donne $\\pi\\,[2\\pi]$. Comme $r(O\\,;\\,\\pi) = r(O\\,;\\,-\\pi) = S_O$, les deux symétries commutent et leur composée est la symétrie centrale de centre $O$. Réciproquement, si $S_{(D’)} \\circ S_{(D)}$ est une symétrie centrale, alors $(D) \\perp (D’)$.',
          formula: { name: 'Cas perpendiculaire', formula: '(D) \\perp (D\') \\text{ en } O \\iff S_{(D\')} \\circ S_{(D)} = S_O' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q2',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un rectangle de centre $O$ et $I, J, K, L$ les milieux respectifs de $[AB], [BC], [CD], [DA]$. À quelle transformation est égale $S_{(IK)} \\circ S_{(JL)}$ ?',
            options: ['$t_{\\overrightarrow{AB}}$', '$S_O$', '$r(O\\,;\\,\\dfrac{\\pi}{2})$', '$\\operatorname{Id}_{\\mathcal{P}}$'],
            correctAnswerIndex: 1,
            explanation: 'Les médianes $(IK)$ et $(JL)$ du rectangle sont perpendiculaires et se coupent en $O$ : leur composée est donc la symétrie centrale $S_O$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Décomposer une rotation en deux symétries orthogonales',
          stepTitle: 'Choisir un premier axe par O et tourner de α/2',
          paragraphText:
            'Pour décomposer $r(O\\,;\\,\\alpha)$ sous la forme $S_{(D’)} \\circ S_{(D)}$, on choisit librement une première droite $(D)$ passant par $O$, puis on construit $(D’)$ passant par $O$ telle que $\\widehat{((D)\\,;\\,(D’))} = \\dfrac{\\alpha}{2}$. Si au contraire on fixe $(D’)$, on construit $(D)$ telle que $\\widehat{((D)\\,;\\,(D’))} = \\dfrac{\\alpha}{2}$, soit $(D) = r\\left(O\\,;\\,-\\dfrac{\\alpha}{2}\\right)(D’)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q3',
            type: 'mcq',
            prompt: 'Dans un carré direct $ABCD$, on souhaite écrire $r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) = S_{(D’)} \\circ S_{(AB)}$. Quelle droite $(D’)$ convient ?',
            options: ['$(AD)$', '$(AC)$', '$(BD)$', '$(BC)$'],
            correctAnswerIndex: 1,
            explanation: 'Il faut que $(D’)$ passe par $A$ et fasse un angle de $\\dfrac{1}{2}\\left(\\dfrac{\\pi}{2}\\right) = +\\dfrac{\\pi}{4}$ avec $(AB)$ dans le sens direct : c’est la diagonale $(AC)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Vérifier l’ordre des axes dans un carré direct',
          stepTitle: 'Attention au sens de S_{(AC)} ∘ S_{(AB)} vs S_{(AB)} ∘ S_{(AC)}',
          paragraphText:
            'Dans un carré direct $ABCD$, $\\widehat{(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC})} = +\\dfrac{\\pi}{4}$. Donc $S_{(AC)} \\circ S_{(AB)} = r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$ (test : $B \\mapsto B \\mapsto D$), tandis que $S_{(AB)} \\circ S_{(AC)} = r\\left(A\\,;\\,-\\dfrac{\\pi}{2}\\right)$ (test : $D \\mapsto B \\mapsto B$, soit $D \\mapsto B$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q4',
            type: 'mcq',
            prompt: 'Dans un carré direct $ABCD$, à quelle rotation est égale $S_{(AB)} \\circ S_{(AC)}$ ?',
            options: [
              '$r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$',
              '$r\\left(A\\,;\\,-\\dfrac{\\pi}{2}\\right)$',
              '$r(A\\,;\\,\\pi)$',
              '$r(O\\,;\\,\\dfrac{\\pi}{2})$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On applique d’abord $S_{(AC)}$ puis $S_{(AB)}$ : l’angle orienté $\\widehat{((AC),(AB))} = -\\dfrac{\\pi}{4}$, donc le double est $-\\dfrac{\\pi}{2}$, soit $r\\left(A\\,;\\,-\\dfrac{\\pi}{2}\\right)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Identifier précisément le point d’intersection des deux axes',
          stepTitle: 'Le centre de S_{(CC’)} ∘ S_{(AB)} est C’, pas C !',
          paragraphText:
            'Dans un triangle équilatéral $ABC$ où $C’$ est le milieu de $[AB]$, la hauteur $(CC’)$ coupe la droite $(AB)$ au point **$C’$** (et non en $C$ !). Donc $S_{(CC’)} \\circ S_{(AB)}$ est la symétrie centrale de centre $C’$ (et non $S_C$). Vérifie toujours quel point appartient simultanément aux **deux** droites.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q5',
            type: 'mcq',
            prompt: 'Dans un triangle équilatéral $ABC$, $C’$ est le milieu de $[AB]$. Quel est le centre de la symétrie centrale $S_{(CC’)} \\circ S_{(AB)}$ ?',
            options: ['Le point $C$', 'Le point $C’$', 'Le centre $O$ du triangle', 'Le point $A$'],
            correctAnswerIndex: 1,
            explanation: 'Les droites $(CC’)$ et $(AB)$ sont perpendiculaires et leur point d’intersection est $C’$ : donc $S_{(CC’)} \\circ S_{(AB)} = S_{C’}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Synthèse sur le triangle équilatéral direct ABC',
          stepTitle: 'Calculer S_{(AA’)} ∘ S_{(BB’)} en testant deux sommets',
          paragraphText:
            'Pour ne jamais te tromper de signe dans un triangle équilatéral direct $ABC$ (de hauteurs $(AA’)$, $(BB’)$ concourantes en $O$), vérifie toujours ta formule sur deux sommets : $(S_{(AA’)} \\circ S_{(BB’)})(A) = S_{(AA’)}(C) = B$, donc l’angle autour de $O$ qui envoie $A$ sur $B$ est bien $+\\dfrac{2\\pi}{3}$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q6',
            type: 'mcq',
            prompt: 'Soit $ABC$ un triangle équilatéral direct de centre $O$, et $A’, B’, C’$ les milieux de $[BC], [CA], [AB]$. Que vaut $S_{(BB’)} \\circ S_{(AA’)}$ ?',
            options: [
              '$r\\left(O\\,;\\,\\dfrac{2\\pi}{3}\\right)$',
              '$r\\left(O\\,;\\,-\\dfrac{2\\pi}{3}\\right)$',
              '$r\\left(O\\,;\\,\\dfrac{\\pi}{3}\\right)$',
              '$S_O$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Testons sur $B$ : $S_{(AA’)}(B) = C$, puis $S_{(BB’)}(C) = A$. La rotation de centre $O$ envoyant $B$ sur $A$ dans le triangle direct $ABC$ a pour angle $-\\dfrac{2\\pi}{3}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q1',
          type: 'mcq',
          prompt: 'Soient $(D)$ et $(D’)$ deux droites sécantes en $O$ telles que $\\widehat{((D)\\,;\\,(D’))} = -\\dfrac{\\pi}{5}\\,[\\pi]$. Quelle est la transformation $S_{(D’)} \\circ S_{(D)}$ ?',
          options: [
            '$r\\left(O\\,;\\,-\\dfrac{\\pi}{5}\\right)$',
            '$r\\left(O\\,;\\,\\dfrac{2\\pi}{5}\\right)$',
            '$r\\left(O\\,;\\,-\\dfrac{2\\pi}{5}\\right)$',
            '$S_O$',
          ],
          correctAnswerIndex: 2,
          explanation: 'On double l’angle orienté du premier axe $(D)$ vers le second axe $(D’)$ : $2 \\times \\left(-\\dfrac{\\pi}{5}\\right) = -\\dfrac{2\\pi}{5}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q2',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un rectangle de centre $O$ et $I, J, K, L$ les milieux respectifs de $[AB], [BC], [CD], [DA]$. À quelle transformation est égale $S_{(IK)} \\circ S_{(JL)}$ ?',
          options: ['$t_{\\overrightarrow{AB}}$', '$S_O$', '$r(O\\,;\\,\\dfrac{\\pi}{2})$', '$\\operatorname{Id}_{\\mathcal{P}}$'],
          correctAnswerIndex: 1,
          explanation: 'Les médianes $(IK)$ et $(JL)$ du rectangle sont perpendiculaires et se coupent en $O$ : leur composée est donc la symétrie centrale $S_O$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q3',
          type: 'mcq',
          prompt: 'Dans un carré direct $ABCD$, on souhaite écrire $r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right) = S_{(D’)} \\circ S_{(AB)}$. Quelle droite $(D’)$ convient ?',
          options: ['$(AD)$', '$(AC)$', '$(BD)$', '$(BC)$'],
          correctAnswerIndex: 1,
          explanation: 'Il faut que $(D’)$ passe par $A$ et fasse un angle de $\\dfrac{1}{2}\\left(\\dfrac{\\pi}{2}\\right) = +\\dfrac{\\pi}{4}$ avec $(AB)$ dans le sens direct : c’est la diagonale $(AC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q4',
          type: 'mcq',
          prompt: 'Dans un carré direct $ABCD$, à quelle rotation est égale $S_{(AB)} \\circ S_{(AC)}$ ?',
          options: [
            '$r\\left(A\\,;\\,\\dfrac{\\pi}{2}\\right)$',
            '$r\\left(A\\,;\\,-\\dfrac{\\pi}{2}\\right)$',
            '$r(A\\,;\\,\\pi)$',
            '$r(O\\,;\\,\\dfrac{\\pi}{2})$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On applique d’abord $S_{(AC)}$ puis $S_{(AB)}$ : l’angle orienté $\\widehat{((AC),(AB))} = -\\dfrac{\\pi}{4}$, donc le double est $-\\dfrac{\\pi}{2}$, soit $r\\left(A\\,;\\,-\\dfrac{\\pi}{2}\\right)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q5',
          type: 'mcq',
          prompt: 'Dans un triangle équilatéral $ABC$, $C’$ est le milieu de $[AB]$. Quel est le centre de la symétrie centrale $S_{(CC’)} \\circ S_{(AB)}$ ?',
          options: ['Le point $C$', 'Le point $C’$', 'Le centre $O$ du triangle', 'Le point $A$'],
          correctAnswerIndex: 1,
          explanation: 'Les droites $(CC’)$ et $(AB)$ sont perpendiculaires et leur point d’intersection est $C’$ : donc $S_{(CC’)} \\circ S_{(AB)} = S_{C’}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l08_composees_transformations_p06_q6',
          type: 'mcq',
          prompt: 'Soit $ABC$ un triangle équilatéral direct de centre $O$, et $A’, B’, C’$ les milieux de $[BC], [CA], [AB]$. Que vaut $S_{(BB’)} \\circ S_{(AA’)}$ ?',
          options: [
            '$r\\left(O\\,;\\,\\dfrac{2\\pi}{3}\\right)$',
            '$r\\left(O\\,;\\,-\\dfrac{2\\pi}{3}\\right)$',
            '$r\\left(O\\,;\\,\\dfrac{\\pi}{3}\\right)$',
            '$S_O$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Testons sur $B$ : $S_{(AA’)}(B) = C$, puis $S_{(BB’)}(C) = A$. La rotation de centre $O$ envoyant $B$ sur $A$ dans le triangle direct $ABC$ a pour angle $-\\dfrac{2\\pi}{3}$.',
        },
      ],
    },
  ],
};
