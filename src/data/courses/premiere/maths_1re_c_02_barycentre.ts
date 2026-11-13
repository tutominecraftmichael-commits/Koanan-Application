import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 2 : Barycentre.pdf » (format v2).
export const MATHS_1RE_C_L02_BARYCENTRE: CurriculumChapter = {
  id: 'premiere_c_maths_geometrie_l02_barycentre',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 2,
  title: 'Leçon 2 : Barycentre',
  summary:
    'Barycentre de deux, trois et quatre points pondérés, propriétés (homogénéité, isobarycentre, projection, réduction vectorielle, coordonnées), barycentre partiel (alignement et concours), et lignes de niveau MA² + MB² = k et MA/MB = k.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: '1ère C - Leçon 2 : Barycentre.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Barycentre de deux points pondérés : définition et position
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l02_barycentre_p01',
      order: 1,
      title: 'Barycentre de deux points pondérés : définition et position',
      summary:
        'Existence et unicité sous la condition a + b ≠ 0, formule vectorielle AG = b/(a+b) AB et localisation sur (AB).',
      conceptExplanation:
        "Un **point pondéré** est un couple $(A, a)$ formé d'un point $A$ du plan et d'un réel non nul $a$ appelé coefficient (ou poids).\n\nSoient $(A, a)$ et $(B, b)$ deux points pondérés tels que **$a + b \\neq 0$**. Il existe un unique point $G$ du plan vérifiant :\n$$a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}$$\nCe point $G$ est appelé **barycentre** des points pondérés $(A, a)$ et $(B, b)$, noté $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$.\n\nPar la relation de Chasles ($\\overrightarrow{GB} = \\overrightarrow{GA} + \\overrightarrow{AB}$), on obtient la formule de construction :\n$$\\overrightarrow{AG} = \\frac{b}{a+b}\\overrightarrow{AB} \\quad \\text{et} \\quad \\overrightarrow{BG} = \\frac{a}{a+b}\\overrightarrow{BA}$$\nLe barycentre $G$ appartient toujours à la droite $(AB)$ :\n- Si $a$ et $b$ sont **de même signe**, $G \\in [AB]$ ;\n- Si $a$ et $b$ sont **de signes contraires**, $G \\in (AB) \\setminus [AB]$ (à l'extérieur du segment, du côté du point affecté du coefficient le plus grand en valeur absolue).",
      keyRule:
        'G = bar{(A,a);(B,b)} existe et est unique ssi a + b ≠ 0. On le place grâce à AG = [b/(a+b)] AB ; il est sur [AB] ssi a et b sont de même signe.',
      formulas: [
        { name: 'Définition (a + b ≠ 0)', formula: 'a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}' },
        { name: 'Position par rapport à A', formula: '\\overrightarrow{AG} = \\frac{b}{a+b}\\overrightarrow{AB}' },
        { name: 'Position par rapport à B', formula: '\\overrightarrow{BG} = \\frac{a}{a+b}\\overrightarrow{BA}' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Position du barycentre G sur la droite (AB)',
        caption: 'Si a et b ont le même signe, G ∈ [AB] ; s’ils sont de signes contraires, G ∈ (AB) \\ [AB].',
        svgContent: `<svg viewBox="0 0 360 120" width="340" height="114" xmlns="http://www.w3.org/2000/svg">
  <line x1="25" y1="38" x2="335" y2="38" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="75" y1="38" x2="265" y2="38" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="75" cy="38" r="4" fill="#1e293b"/><text x="70" y="24" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <circle cx="265" cy="38" r="4" fill="#1e293b"/><text x="260" y="24" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <circle cx="151" cy="38" r="4.5" fill="#2563eb"/><text x="136" y="57" font-size="12" font-weight="bold" fill="#2563eb">G₁ (a,b même signe)</text>
  <line x1="25" y1="88" x2="335" y2="88" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="75" y1="88" x2="225" y2="88" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="75" cy="88" r="4" fill="#1e293b"/><text x="70" y="74" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <circle cx="225" cy="88" r="4" fill="#1e293b"/><text x="220" y="74" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <circle cx="305" cy="88" r="4.5" fill="#7c3aed"/><text x="242" y="108" font-size="12" font-weight="bold" fill="#7c3aed">G₂ (signes contraires)</text>
</svg>`,
      },
      workedExample: {
        title: 'Reconnaître un barycentre et montrer une appartenance à (AB)',
        statement:
          'Soient $A$, $B$ et $K$ trois points du plan tels que $-2\\overrightarrow{KB} - 2\\overrightarrow{BA} - 5\\overrightarrow{AB} = \\vec{0}$. Justifie que $K \\in (AB)$.',
        methodSteps: [
          'Comme $-2\\overrightarrow{BA} = 2\\overrightarrow{AB}$, on obtient $-2\\overrightarrow{KB} - 3\\overrightarrow{AB} = \\vec{0}$.',
          'En décomposant $\\overrightarrow{AB} = \\overrightarrow{AK} + \\overrightarrow{KB}$, il vient $-2\\overrightarrow{KB} - 3\\overrightarrow{AK} - 3\\overrightarrow{KB} = \\vec{0}$, soit $3\\overrightarrow{KA} - 5\\overrightarrow{KB} = \\vec{0}$.',
          'Comme $3 + (-5) = -2 \\neq 0$, $K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -5)\\}$.',
        ],
        conclusion: 'Tout barycentre de deux points appartient à la droite joignant ces deux points : donc $K \\in (AB)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Condition d’existence et unicité',
          stepTitle: 'La somme des coefficients doit être non nulle',
          paragraphText:
            'Deux points pondérés $(A, a)$ et $(B, b)$ admettent un unique barycentre $G$ si et seulement si $a + b \\neq 0$. Il vérifie alors $a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}$.',
          formula: { name: 'Condition d’existence', formula: 'a + b \\neq 0' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q1',
            type: 'mcq',
            prompt: 'Parmi les systèmes suivants, lequel N’ADMET PAS de barycentre ?',
            options: [
              '$\\{(A, 2)\\,;\\,(B, 3)\\}$',
              '$\\{(A, -4)\\,;\\,(B, 4)\\}$',
              '$\\{(A, -1)\\,;\\,(B, -5)\\}$',
              '$\\{(A, 2)\\,;\\,(B, -3)\\}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $\\{(A, -4)\\,;\\,(B, 4)\\}$, la somme des coefficients vaut $-4 + 4 = 0$, donc le barycentre n’existe pas.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Passer d’une relation vectorielle au barycentre',
          stepTitle: 'Mettre tous les vecteurs avec le point G en origine',
          paragraphText:
            'Pour identifier les coefficients à partir d’une égalité vectorielle, ramène tous les vecteurs à la forme $\\overrightarrow{GA}$ et $\\overrightarrow{GB}$ grâce à $\\overrightarrow{BG} = -\\overrightarrow{GB}$. Par exemple, $2\\overrightarrow{GA} - 3\\overrightarrow{BG} = \\vec{0} \\iff 2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q2',
            type: 'mcq',
            prompt: 'Si $2\\overrightarrow{GA} - 3\\overrightarrow{BG} = \\vec{0}$, alors $G$ est le barycentre de :',
            options: [
              '$(A, 2)$ et $(B, -3)$',
              '$(A, -2)$ et $(B, 3)$',
              '$(A, 2)$ et $(B, 3)$',
              '$(A, 3)$ et $(B, 2)$',
            ],
            correctAnswerIndex: 2,
            explanation: '$-3\\overrightarrow{BG} = +3\\overrightarrow{GB}$, donc $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$, soit $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 3)\\}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Relation de construction AG = b/(a+b) AB',
          stepTitle: 'Exprimer AG en fonction de AB',
          paragraphText:
            'Si $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$, alors $\\overrightarrow{AG} = \\dfrac{b}{a+b}\\overrightarrow{AB}$. Attention : c’est le coefficient de $B$ qui figure au numérateur quand le vecteur part de $A$ !',
          formula: { name: 'Vecteur AG', formula: '\\overrightarrow{AG} = \\frac{b}{a+b}\\overrightarrow{AB}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q3',
            type: 'mcq',
            prompt: 'Soit $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, -3)\\}$. Que vaut $\\overrightarrow{AG}$ en fonction de $\\overrightarrow{AB}$ ?',
            options: [
              '$\\overrightarrow{AG} = -2\\overrightarrow{AB}$',
              '$\\overrightarrow{AG} = 3\\overrightarrow{AB}$',
              '$\\overrightarrow{AG} = -3\\overrightarrow{AB}$',
              '$\\overrightarrow{AG} = \\dfrac{3}{5}\\overrightarrow{AB}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{AG} = \\dfrac{-3}{2 + (-3)}\\overrightarrow{AB} = \\dfrac{-3}{-1}\\overrightarrow{AB} = 3\\overrightarrow{AB}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Localisation de G sur (AB)',
          stepTitle: 'Segment [AB] ou extérieur selon le signe des coefficients',
          paragraphText:
            'Le barycentre de $(A, a)$ et $(B, b)$ appartient toujours à la droite $(AB)$. Si $a$ et $b$ sont de même signe, $0 < \\dfrac{b}{a+b} < 1$, donc $G \\in [AB]$. S’ils sont de signes contraires, $G \\in (AB) \\setminus [AB]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q4',
            type: 'mcq',
            prompt: 'Soit $G = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, 2)\\}$. Où se situe $G$ ?',
            options: [
              'Sur le segment $[AB]$, plus près de $B$',
              'Sur le segment $[AB]$, plus près de $A$',
              'À l’extérieur de $[AB]$, du côté de $A$',
              'Hors de la droite $(AB)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les coefficients $3$ et $2$ sont positifs donc $G \\in [AB]$ ; de plus $\\overrightarrow{AG} = \\dfrac{2}{5}\\overrightarrow{AB}$, donc $G$ est plus proche de $A$ (poids $3 > 2$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Inverser les poids dans AG = b/(a+b) AB',
          stepTitle: 'Le poids le plus lourd attire G vers lui',
          paragraphText:
            'Beaucoup d’élèves écrivent $\\overrightarrow{AG} = \\dfrac{a}{a+b}\\overrightarrow{AB}$ par réflexe. Retiens le test physique du levier : si $A$ porte $3$ et $B$ porte $1$, $G$ doit être plus proche du point le plus lourd $A$, donc $AG = \\dfrac{1}{4}AB < BG = \\dfrac{3}{4}AB$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q5',
            type: 'mcq',
            prompt: 'Sur une droite graduée régulièrement en $4$ intervalles entre $A$ et $B$, $G$ est à $1$ graduation de $A$ et $3$ graduations de $B$. Pour quels coefficients a-t-on $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$ ?',
            options: [
              '$(A, 1)$ et $(B, 3)$',
              '$(A, 3)$ et $(B, 1)$',
              '$(A, 2)$ et $(B, 1)$',
              '$(A, 3)$ et $(B, -1)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On a $\\overrightarrow{AG} = \\dfrac{1}{4}\\overrightarrow{AB} = \\dfrac{b}{a+b}\\overrightarrow{AB}$, soit $b=1$ et $a=3$ : $3\\overrightarrow{GA} + 1\\overrightarrow{GB} = \\vec{0}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Transformation vectorielle et appartenance à (AB)',
          stepTitle: 'Ramener une relation quelconque à K = bar{(A,a);(B,b)}',
          paragraphText:
            'À partir de $-2\\overrightarrow{KB} - 2\\overrightarrow{BA} - 5\\overrightarrow{AB} = \\vec{0}$, on simplifie $-2\\overrightarrow{BA} - 5\\overrightarrow{AB} = -3\\overrightarrow{AB}$, puis par Chasles en $K$ : $-2\\overrightarrow{KB} - 3(\\overrightarrow{AK} + \\overrightarrow{KB}) = \\vec{0} \\iff 3\\overrightarrow{KA} - 5\\overrightarrow{KB} = \\vec{0}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q6',
            type: 'mcq',
            prompt: 'Si $3\\overrightarrow{KA} - 5\\overrightarrow{KB} = \\vec{0}$, que peut-on affirmer pour $K$ ?',
            options: [
              '$K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -5)\\}$ et $K \\in (AB) \\setminus [AB]$',
              '$K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, 5)\\}$ et $K \\in [AB]$',
              '$K = \\operatorname{bar}\\{(A, -3)\\,;\\,(B, 5)\\}$ et $K \\notin (AB)$',
              '$K$ n’existe pas car $3 - 5 = -2 < 0$',
            ],
            correctAnswerIndex: 0,
            explanation: 'La somme vaut $3 + (-5) = -2 \\neq 0$, donc $K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -5)\\}$. Les poids étant de signes contraires, $K \\in (AB) \\setminus [AB]$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q1',
          type: 'mcq',
          prompt: 'Parmi les systèmes suivants, lequel N’ADMET PAS de barycentre ?',
          options: [
            '$\\{(A, 2)\\,;\\,(B, 3)\\}$',
            '$\\{(A, -4)\\,;\\,(B, 4)\\}$',
            '$\\{(A, -1)\\,;\\,(B, -5)\\}$',
            '$\\{(A, 2)\\,;\\,(B, -3)\\}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $\\{(A, -4)\\,;\\,(B, 4)\\}$, la somme des coefficients vaut $-4 + 4 = 0$, donc le barycentre n’existe pas.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q2',
          type: 'mcq',
          prompt: 'Si $2\\overrightarrow{GA} - 3\\overrightarrow{BG} = \\vec{0}$, alors $G$ est le barycentre de :',
          options: [
            '$(A, 2)$ et $(B, -3)$',
            '$(A, -2)$ et $(B, 3)$',
            '$(A, 2)$ et $(B, 3)$',
            '$(A, 3)$ et $(B, 2)$',
          ],
          correctAnswerIndex: 2,
          explanation: '$-3\\overrightarrow{BG} = +3\\overrightarrow{GB}$, donc $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$, soit $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 3)\\}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q3',
          type: 'mcq',
          prompt: 'Soit $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, -3)\\}$. Que vaut $\\overrightarrow{AG}$ en fonction de $\\overrightarrow{AB}$ ?',
          options: [
            '$\\overrightarrow{AG} = -2\\overrightarrow{AB}$',
            '$\\overrightarrow{AG} = 3\\overrightarrow{AB}$',
            '$\\overrightarrow{AG} = -3\\overrightarrow{AB}$',
            '$\\overrightarrow{AG} = \\dfrac{3}{5}\\overrightarrow{AB}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{AG} = \\dfrac{-3}{2 + (-3)}\\overrightarrow{AB} = \\dfrac{-3}{-1}\\overrightarrow{AB} = 3\\overrightarrow{AB}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q4',
          type: 'mcq',
          prompt: 'Soit $G = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, 2)\\}$. Où se situe $G$ ?',
          options: [
            'Sur le segment $[AB]$, plus près de $B$',
            'Sur le segment $[AB]$, plus près de $A$',
            'À l’extérieur de $[AB]$, du côté de $A$',
            'Hors de la droite $(AB)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les coefficients $3$ et $2$ sont positifs donc $G \\in [AB]$ ; de plus $\\overrightarrow{AG} = \\dfrac{2}{5}\\overrightarrow{AB}$, donc $G$ est plus proche de $A$ (poids $3 > 2$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q5',
          type: 'mcq',
          prompt: 'Sur une droite graduée régulièrement en $4$ intervalles entre $A$ et $B$, $G$ est à $1$ graduation de $A$ et $3$ graduations de $B$. Pour quels coefficients a-t-on $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$ ?',
          options: [
            '$(A, 1)$ et $(B, 3)$',
            '$(A, 3)$ et $(B, 1)$',
            '$(A, 2)$ et $(B, 1)$',
            '$(A, 3)$ et $(B, -1)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On a $\\overrightarrow{AG} = \\dfrac{1}{4}\\overrightarrow{AB} = \\dfrac{b}{a+b}\\overrightarrow{AB}$, soit $b=1$ et $a=3$ : $3\\overrightarrow{GA} + 1\\overrightarrow{GB} = \\vec{0}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p01_q6',
          type: 'mcq',
          prompt: 'Si $3\\overrightarrow{KA} - 5\\overrightarrow{KB} = \\vec{0}$, que peut-on affirmer pour $K$ ?',
          options: [
            '$K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -5)\\}$ et $K \\in (AB) \\setminus [AB]$',
            '$K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, 5)\\}$ et $K \\in [AB]$',
            '$K = \\operatorname{bar}\\{(A, -3)\\,;\\,(B, 5)\\}$ et $K \\notin (AB)$',
            '$K$ n’existe pas car $3 - 5 = -2 < 0$',
          ],
          correctAnswerIndex: 0,
          explanation: 'La somme vaut $3 + (-5) = -2 \\neq 0$, donc $K = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -5)\\}$. Les poids étant de signes contraires, $K \\in (AB) \\setminus [AB]$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Propriétés du barycentre de deux points et coordonnées
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l02_barycentre_p02',
      order: 2,
      title: 'Propriétés du barycentre de deux points et coordonnées',
      summary:
        'Homogénéité, isobarycentre, conservation par projection, réduction aMA + bMB = (a+b)MG et coordonnées.',
      conceptExplanation:
        "Le barycentre de deux points pondérés possède cinq propriétés fondamentales :\n1. **Homogénéité** : pour tout réel $k \\neq 0$, $\\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\} = \\operatorname{bar}\\{(A, ka)\\,;\\,(B, kb)\\}$.\n2. **Isobarycentre** : si $a = b \\neq 0$, $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, a)\\}$ est l’**isobarycentre** de $A$ et $B$, c'est-à-dire le **milieu** du segment $[AB]$.\n3. **Conservation par projection** : le projeté $G'$ du barycentre $G$ de $(A, a)$ et $(B, b)$ sur une droite est le barycentre des projetés $(A', a)$ et $(B', b)$ affectés des mêmes coefficients.\n4. **Réduction de $a\\overrightarrow{MA} + b\\overrightarrow{MB}$** : pour tout point $M$ du plan, si $a + b \\neq 0$, alors :\n$$a\\overrightarrow{MA} + b\\overrightarrow{MB} = (a+b)\\overrightarrow{MG}$$\nSi $a + b = 0$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB} = a(\\overrightarrow{MA} - \\overrightarrow{MB}) = a\\overrightarrow{BA}$ est **indépendant de $M$**.\n5. **Coordonnées** : dans un repère $(O; \\vec{\\imath}, \\vec{\\jmath})$, $G$ a pour coordonnées :\n$$x_G = \\frac{ax_A + bx_B}{a+b}, \\qquad y_G = \\frac{ay_A + by_B}{a+b}$$",
      keyRule:
        'On peut multiplier tous les poids par un même k ≠ 0. Pour tout point M, a MA + b MB vaut (a + b) MG si a + b ≠ 0, ou un vecteur constant a BA si a + b = 0.',
      formulas: [
        { name: 'Homogénéité (k ≠ 0)', formula: '\\operatorname{bar}\\{(A,a);(B,b)\\} = \\operatorname{bar}\\{(A,ka);(B,kb)\\}' },
        { name: 'Réduction (a + b ≠ 0)', formula: 'a\\overrightarrow{MA} + b\\overrightarrow{MB} = (a+b)\\overrightarrow{MG}' },
        { name: 'Coordonnées', formula: 'G\\left(\\frac{ax_A + bx_B}{a+b}\\,;\\,\\frac{ay_A + by_B}{a+b}\\right)' },
      ],
      workedExample: {
        title: 'Homogénéité et coordonnées de G',
        statement:
          '1) On donne $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 7)\\}$. Détermine $a$ tel que $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, 21)\\}$.\n2) Soient $A(1\\,;\\,2)$ et $B(-1\\,;\\,3)$. Calcule les coordonnées de $G = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 2)\\}$.',
        methodSteps: [
          'Pour passer de $7$ à $21$, on multiplie par $k = 3$ ($21 = 3 \\times 7$). Par homogénéité, $a = 3 \\times 2 = 6$.',
          'La somme des coefficients vaut $-1 + 2 = 1$.',
          '$x_G = \\dfrac{(-1)\\times 1 + 2\\times(-1)}{1} = -3$ et $y_G = \\dfrac{(-1)\\times 2 + 2\\times 3}{1} = 4$.',
        ],
        conclusion: '$G = \\operatorname{bar}\\{(A, 6)\\,;\\,(B, 21)\\}$ et $G(-3\\,;\\,4)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Homogénéité du barycentre',
          stepTitle: 'Multiplier les coefficients par un même réel non nul k',
          paragraphText:
            'Multiplier chaque coefficient par un même réel $k \\neq 0$ ne change pas le barycentre : $\\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\} = \\operatorname{bar}\\{(A, ka)\\,;\\,(B, kb)\\}$. Cela permet d’éliminer les fractions.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q1',
            type: 'mcq',
            prompt: 'On donne $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 7)\\}$. Quel réel $a$ vérifie $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, 21)\\}$ ?',
            options: ['$a = 6$', '$a = 14$', '$a = 9$', '$a = 21$'],
            correctAnswerIndex: 0,
            explanation: 'On passe de $7$ à $21$ en multipliant par $k = 3$ ; donc $a = 3 \\times 2 = 6$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Isobarycentre et conservation par projection',
          stepTitle: 'Milieu d’un segment et image par projection',
          paragraphText:
            'Lorsque $a = b \\neq 0$, $G$ est l’**isobarycentre** de $A$ et $B$ : c’est le milieu de $[AB]$. Par ailleurs, si $P$ est une projection sur une droite et $A’=P(A)$, $B’=P(B)$, $G’=P(G)$, alors $G’ = \\operatorname{bar}\\{(A’, a)\\,;\\,(B’, b)\\}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q2',
            type: 'mcq',
            prompt: 'Soit $G = \\operatorname{bar}\\{(A, 5)\\,;\\,(B, 5)\\}$ et $P$ la projection orthogonale sur une droite $(D)$ telle que $P(A)=A’$, $P(B)=B’$, $P(G)=G’$. Que représente $G’$ pour $[A’B’]$ ?',
            options: [
              'Le tiers de $[A’B’]$ en partant de $A’$',
              'Le milieu du segment $[A’B’]$',
              'Le point $A’$',
              'Un point hors de $(D)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par conservation du barycentre par projection, $G’ = \\operatorname{bar}\\{(A’, 5)\\,;\\,(B’, 5)\\}$, donc $G’$ est l’isobarycentre (milieu) de $[A’B’]$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Réduction de la somme aMA + bMB',
          stepTitle: 'Remplacer une somme de deux vecteurs par un seul vecteur',
          paragraphText:
            'Si $K = \\operatorname{bar}\\{(C, 3)\\,;\\,(D, 1)\\}$, alors pour tout point $M$ du plan, $3\\overrightarrow{MC} + \\overrightarrow{MD} = (3 + 1)\\overrightarrow{MK} = 4\\overrightarrow{MK}$. Cette propriété simplifie énormément les recherches d’ensembles de points.',
          formula: { name: 'Réduction à un seul vecteur', formula: 'a\\overrightarrow{MA} + b\\overrightarrow{MB} = (a+b)\\overrightarrow{MG}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q3',
            type: 'mcq',
            prompt: 'Soit $K = \\operatorname{bar}\\{(C, 3)\\,;\\,(D, 1)\\}$. Pour tout point $M$, à quoi est égal $3\\overrightarrow{MC} + \\overrightarrow{MD}$ ?',
            options: [
              '$2\\overrightarrow{MK}$',
              '$3\\overrightarrow{MK}$',
              '$4\\overrightarrow{MK}$',
              '$4\\overrightarrow{KM}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'La somme des poids est $3 + 1 = 4$, donc $3\\overrightarrow{MC} + \\overrightarrow{MD} = 4\\overrightarrow{MK}$ pour tout point $M$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Cas où a + b = 0 dans aMA + bMB',
          stepTitle: 'Quand la somme des poids est nulle, le vecteur est constant !',
          paragraphText:
            'Si $a + b = 0$, il n’y a PAS de barycentre, mais on ne reste pas bloqué : $a\\overrightarrow{MA} - a\\overrightarrow{MB} = a(\\overrightarrow{MA} + \\overrightarrow{BM}) = a\\overrightarrow{BA}$, qui ne dépend plus de $M$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q4',
            type: 'mcq',
            prompt: 'Soient $A$ et $B$ deux points du plan et $M$ un point quelconque. À quoi est égal $5\\overrightarrow{MA} - 5\\overrightarrow{MB}$ ?',
            options: [
              '$\\vec{0}$',
              '$5\\overrightarrow{AB}$',
              '$5\\overrightarrow{BA}$',
              '$10\\overrightarrow{MG}$',
            ],
            correctAnswerIndex: 2,
            explanation: '$5\\overrightarrow{MA} - 5\\overrightarrow{MB} = 5(\\overrightarrow{MA} + \\overrightarrow{BM}) = 5\\overrightarrow{BA}$ (vecteur constant, indépendant de $M$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Coordonnées du barycentre de deux points',
          stepTitle: 'Calculer la moyenne pondérée des coordonnées',
          paragraphText:
            'Pour trouver les coordonnées de $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$, on calcule la moyenne pondérée des abscisses et des ordonnées : $x_G = \\dfrac{ax_A + bx_B}{a+b}$ et $y_G = \\dfrac{ay_A + by_B}{a+b}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q5',
            type: 'mcq',
            prompt: 'Soient $A(1\\,;\\,2)$ et $B(-1\\,;\\,3)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 2)\\}$ ?',
            options: ['$(-3\\,;\\,4)$', '$(3\\,;\\,-4)$', '$(-1\\,;\\,8)$', '$(0\\,;\\,5)$'],
            correctAnswerIndex: 0,
            explanation: '$x_G = \\dfrac{-1\\times 1 + 2\\times(-1)}{-1+2} = -3$ et $y_G = \\dfrac{-1\\times 2 + 2\\times 3}{-1+2} = 4$, soit $G(-3\\,;\\,4)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Application : retrouver un coefficient à partir de la réduction',
          stepTitle: 'Combiner homogénéité et coordonnées',
          paragraphText:
            'Si $M$ varie dans le plan et qu’on sait que $\\frac{1}{2}\\overrightarrow{MA} + \\frac{3}{2}\\overrightarrow{MB} = 2\\overrightarrow{MG}$, en multipliant par $2$ on voit que $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 3)\\}$. Pour $A(0\\,;\\,4)$ et $B(8\\,;\\,0)$, $G$ a alors pour coordonnées $(\\frac{24}{4}\\,;\\,\\frac{4}{4}) = (6\\,;\\,1)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q6',
            type: 'mcq',
            prompt: 'Dans un repère, $A(2\\,;\\,-1)$ et $B(6\\,;\\,7)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A, \\frac{1}{2})\\,;\\,(B, \\frac{3}{2})\\}$ ?',
            options: ['$(5\\,;\\,5)$', '$(4\\,;\\,3)$', '$(3\\,;\\,1)$', '$(5\\,;\\,3)$'],
            correctAnswerIndex: 0,
            explanation: 'Par homogénéité (on multiplie par $2$), $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 3)\\}$ : $x_G = \\dfrac{2 + 18}{4} = 5$ et $y_G = \\dfrac{-1 + 21}{4} = 5$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q1',
          type: 'mcq',
          prompt: 'On donne $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 7)\\}$. Quel réel $a$ vérifie $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, 21)\\}$ ?',
          options: ['$a = 6$', '$a = 14$', '$a = 9$', '$a = 21$'],
          correctAnswerIndex: 0,
          explanation: 'On passe de $7$ à $21$ en multipliant par $k = 3$ ; donc $a = 3 \\times 2 = 6$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q2',
          type: 'mcq',
          prompt: 'Soit $G = \\operatorname{bar}\\{(A, 5)\\,;\\,(B, 5)\\}$ et $P$ la projection orthogonale sur une droite $(D)$ telle que $P(A)=A’$, $P(B)=B’$, $P(G)=G’$. Que représente $G’$ pour $[A’B’]$ ?',
          options: [
            'Le tiers de $[A’B’]$ en partant de $A’$',
            'Le milieu du segment $[A’B’]$',
            'Le point $A’$',
            'Un point hors de $(D)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par conservation du barycentre par projection, $G’ = \\operatorname{bar}\\{(A’, 5)\\,;\\,(B’, 5)\\}$, donc $G’$ est l’isobarycentre (milieu) de $[A’B’]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q3',
          type: 'mcq',
          prompt: 'Soit $K = \\operatorname{bar}\\{(C, 3)\\,;\\,(D, 1)\\}$. Pour tout point $M$, à quoi est égal $3\\overrightarrow{MC} + \\overrightarrow{MD}$ ?',
          options: [
            '$2\\overrightarrow{MK}$',
            '$3\\overrightarrow{MK}$',
            '$4\\overrightarrow{MK}$',
            '$4\\overrightarrow{KM}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'La somme des poids est $3 + 1 = 4$, donc $3\\overrightarrow{MC} + \\overrightarrow{MD} = 4\\overrightarrow{MK}$ pour tout point $M$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q4',
          type: 'mcq',
          prompt: 'Soient $A$ et $B$ deux points du plan et $M$ un point quelconque. À quoi est égal $5\\overrightarrow{MA} - 5\\overrightarrow{MB}$ ?',
          options: [
            '$\\vec{0}$',
            '$5\\overrightarrow{AB}$',
            '$5\\overrightarrow{BA}$',
            '$10\\overrightarrow{MG}$',
          ],
          correctAnswerIndex: 2,
          explanation: '$5\\overrightarrow{MA} - 5\\overrightarrow{MB} = 5(\\overrightarrow{MA} + \\overrightarrow{BM}) = 5\\overrightarrow{BA}$ (vecteur constant, indépendant de $M$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q5',
          type: 'mcq',
          prompt: 'Soient $A(1\\,;\\,2)$ et $B(-1\\,;\\,3)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 2)\\}$ ?',
          options: ['$(-3\\,;\\,4)$', '$(3\\,;\\,-4)$', '$(-1\\,;\\,8)$', '$(0\\,;\\,5)$'],
          correctAnswerIndex: 0,
          explanation: '$x_G = \\dfrac{-1\\times 1 + 2\\times(-1)}{-1+2} = -3$ et $y_G = \\dfrac{-1\\times 2 + 2\\times 3}{-1+2} = 4$, soit $G(-3\\,;\\,4)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p02_q6',
          type: 'mcq',
          prompt: 'Dans un repère, $A(2\\,;\\,-1)$ et $B(6\\,;\\,7)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A, \\frac{1}{2})\\,;\\,(B, \\frac{3}{2})\\}$ ?',
          options: ['$(5\\,;\\,5)$', '$(4\\,;\\,3)$', '$(3\\,;\\,1)$', '$(5\\,;\\,3)$'],
          correctAnswerIndex: 0,
          explanation: 'Par homogénéité (on multiplie par $2$), $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 3)\\}$ : $x_G = \\dfrac{2 + 18}{4} = 5$ et $y_G = \\dfrac{-1 + 21}{4} = 5$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Barycentre de trois et quatre points pondérés
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l02_barycentre_p03',
      order: 3,
      title: 'Barycentre de trois et quatre points pondérés',
      summary:
        'Existence (somme non nulle), décomposition AG dans (AB, AC), isobarycentre du triangle et du parallélogramme, coordonnées.',
      conceptExplanation:
        "Toutes les propriétés vues à deux points se généralisent à **trois** ou **quatre** points pondérés :\n- Pour $3$ points $(A,a)$, $(B,b)$, $(C,c)$ avec **$a + b + c \\neq 0$**, il existe un unique point $G$ tel que :\n$$a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{AG} = \\frac{b}{a+b+c}\\overrightarrow{AB} + \\frac{c}{a+b+c}\\overrightarrow{AC}$$\n- Pour tout point $M$ du plan :\n  - Si $a+b+c \\neq 0$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} = (a+b+c)\\overrightarrow{MG}$.\n  - Si $a+b+c = 0$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} = a\\overrightarrow{CA} + b\\overrightarrow{CB}$ est **indépendant de $M$**.\n- **Isobarycentres usuels** : l’isobarycentre de trois points non alignés $A, B, C$ est le **centre de gravité** du triangle $ABC$ ; l’isobarycentre des quatre sommets d’un parallélogramme $ABCD$ est le **centre** de ce parallélogramme.\n- **À 4 points** : si $a+b+c+d \\neq 0$, $G = \\operatorname{bar}\\{(A,a)\\,;\\,(B,b)\\,;\\,(C,c)\\,;\\,(D,d)\\}$ vérifie $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} + d\\overrightarrow{MD} = (a+b+c+d)\\overrightarrow{MG}$.",
      keyRule:
        'Pour 3 ou 4 points, le barycentre existe ssi la somme des coefficients est non nulle. Si cette somme vaut 0, la somme vectorielle aMA + bMB + cMC ne dépend plus de M.',
      formulas: [
        { name: 'Construction depuis A', formula: '\\overrightarrow{AG} = \\frac{b}{a+b+c}\\overrightarrow{AB} + \\frac{c}{a+b+c}\\overrightarrow{AC}' },
        { name: 'Réduction (3 points)', formula: 'a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} = (a+b+c)\\overrightarrow{MG}' },
        { name: 'Somme nulle (a+b+c=0)', formula: 'a\\overrightarrow{MA} + b\\overrightarrow{MB} + (-a-b)\\overrightarrow{MC} = a\\overrightarrow{CA} + b\\overrightarrow{CB}' },
      ],
      workedExample: {
        title: 'Construire un barycentre de 3 points et calculer ses coordonnées',
        statement:
          '1) Soit $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, -1)\\,;\\,(C, 4)\\}$. Exprime $\\overrightarrow{AG}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.\n2) Pour $A(1\\,;\\,-2)$, $B(-3\\,;\\,-2)$ et $C(-1\\,;\\,0)$, calcule les coordonnées du barycentre $G’$ de $(A, 1)$, $(B, 4)$ et $(C, -3)$.',
        methodSteps: [
          'La somme des poids de $G$ est $2 - 1 + 4 = 5 \\neq 0$, donc $\\overrightarrow{AG} = -\\dfrac{1}{5}\\overrightarrow{AB} + \\dfrac{4}{5}\\overrightarrow{AC}$.',
          'Pour $G’$, la somme des poids est $1 + 4 - 3 = 2$.',
          '$x_{G’} = \\dfrac{1\\times 1 + 4\\times(-3) - 3\\times(-1)}{2} = \\dfrac{1 - 12 + 3}{2} = -4$ et $y_{G’} = \\dfrac{1\\times(-2) + 4\\times(-2) - 3\\times 0}{2} = -5$.',
        ],
        conclusion: '$\\overrightarrow{AG} = -\\dfrac{1}{5}\\overrightarrow{AB} + \\dfrac{4}{5}\\overrightarrow{AC}$ et $G’(-4\\,;\\,-5)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Identifier les coefficients à 3 ou 4 points',
          stepTitle: 'Attention aux vecteurs inversés par rapport à G',
          paragraphText:
            'Dans la relation $a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} = \\vec{0}$, tous les vecteurs doivent avoir $G$ comme origine. Par exemple, $\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = \\vec{0}$ s’écrit $-\\overrightarrow{GA} - 2\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, soit $\\overrightarrow{GA} + 2\\overrightarrow{GB} - \\overrightarrow{GC} = \\vec{0}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q1',
            type: 'mcq',
            prompt: 'Soient $A, B, C, G$ quatre points tels que $\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = \\vec{0}$. Quels sont les points pondérés dont $G$ est le barycentre ?',
            options: [
              '$(A, 1)$, $(B, 2)$, $(C, 1)$',
              '$(A, 1)$, $(B, 2)$, $(C, -1)$',
              '$(A, -1)$, $(B, 2)$, $(C, 1)$',
              '$(A, 1)$, $(B, -2)$, $(C, 1)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = -\\overrightarrow{GA} - 2\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{GA} + 2\\overrightarrow{GB} - \\overrightarrow{GC} = \\vec{0}$, donc $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(C, -1)\\}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Construction à partir du sommet A',
          stepTitle: 'Exprimer AG dans la base (AB, AC)',
          paragraphText:
            'Si $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\,;\\,(C, c)\\}$, on remplace $\\overrightarrow{GB}$ par $\\overrightarrow{GA} + \\overrightarrow{AB}$ et $\\overrightarrow{GC}$ par $\\overrightarrow{GA} + \\overrightarrow{AC}$, ce qui donne directement $\\overrightarrow{AG} = \\dfrac{b}{a+b+c}\\overrightarrow{AB} + \\dfrac{c}{a+b+c}\\overrightarrow{AC}$.',
          formula: { name: 'Construction géométrique', formula: '\\overrightarrow{AG} = \\frac{b}{a+b+c}\\overrightarrow{AB} + \\frac{c}{a+b+c}\\overrightarrow{AC}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q2',
            type: 'mcq',
            prompt: 'Soit $G$ défini par $-2\\overrightarrow{GA} + 6\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$. Que vaut $\\overrightarrow{AG}$ ?',
            options: [
              '$\\dfrac{6}{5}\\overrightarrow{AB} + \\dfrac{1}{5}\\overrightarrow{AC}$',
              '$-\\dfrac{6}{5}\\overrightarrow{AB} - \\dfrac{1}{5}\\overrightarrow{AC}$',
              '$\\dfrac{6}{9}\\overrightarrow{AB} + \\dfrac{1}{9}\\overrightarrow{AC}$',
              '$\\dfrac{2}{5}\\overrightarrow{AB} + \\dfrac{1}{5}\\overrightarrow{AC}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'La somme des coefficients est $-2 + 6 + 1 = 5$, donc $\\overrightarrow{AG} = \\dfrac{6}{5}\\overrightarrow{AB} + \\dfrac{1}{5}\\overrightarrow{AC}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Isobarycentre d’un triangle et d’un parallélogramme',
          stepTitle: 'Centre de gravité et centre de symétrie',
          paragraphText:
            'L’isobarycentre de trois points non alignés $A, B, C$ ($G = \\operatorname{bar}\\{(A,1)\\,;\\,(B,1)\\,;\\,(C,1)\\}$) est le **centre de gravité** du triangle $ABC$. Pour un parallélogramme $ABCD$, $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = \\vec{0}$ : le centre $O$ est l’isobarycentre des quatre sommets.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q3',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un parallélogramme de centre $O$. Pour tout point $M$ du plan, à quoi est égal $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD}$ ?',
            options: ['$\\vec{0}$', '$2\\overrightarrow{MO}$', '$4\\overrightarrow{MO}$', '$\\overrightarrow{AC} + \\overrightarrow{BD}$'],
            correctAnswerIndex: 2,
            explanation: '$O$ est l’isobarycentre des $4$ sommets $A, B, C, D$ (somme des poids $1+1+1+1 = 4$), donc $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}+\\overrightarrow{MD} = 4\\overrightarrow{MO}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Somme des coefficients nulle à 3 points',
          stepTitle: 'Quand a + b + c = 0, le vecteur ne dépend pas de M',
          paragraphText:
            'Si $a + b + c = 0$, il n’existe pas de barycentre. En choisissant $C$ comme origine (relation de Chasles), $a(\\overrightarrow{MC}+\\overrightarrow{CA}) + b(\\overrightarrow{MC}+\\overrightarrow{CB}) + (-a-b)\\overrightarrow{MC} = a\\overrightarrow{CA} + b\\overrightarrow{CB}$. Exemple : $-2\\overrightarrow{MA} + 5\\overrightarrow{MB} - 3\\overrightarrow{MC} = 5\\overrightarrow{AB} - 3\\overrightarrow{AC}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q4',
            type: 'mcq',
            prompt: 'Pour tout point $M$ du plan, à quoi est égal le vecteur $-2\\overrightarrow{MA} + 5\\overrightarrow{MB} - 3\\overrightarrow{MC}$ ?',
            options: [
              '$\\vec{0}$',
              '$5\\overrightarrow{AB} - 3\\overrightarrow{AC}$',
              '$2\\overrightarrow{AB} - 3\\overrightarrow{AC}$',
              '$10\\overrightarrow{MG}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$-2 + 5 - 3 = 0$ : en introduisant $A$, $-2\\overrightarrow{MA} + 5(\\overrightarrow{MA}+\\overrightarrow{AB}) - 3(\\overrightarrow{MA}+\\overrightarrow{AC}) = 5\\overrightarrow{AB} - 3\\overrightarrow{AC}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Coordonnées à 3 points pondérés',
          stepTitle: 'Étendre la moyenne pondérée à 3 sommets',
          paragraphText:
            'Pour $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\,;\\,(C, c)\\}$, on calcule $x_G = \\dfrac{ax_A + bx_B + cx_C}{a+b+c}$ et $y_G = \\dfrac{ay_A + by_B + cy_C}{a+b+c}$. Vérifie toujours le dénominateur $a+b+c$ en premier.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q5',
            type: 'mcq',
            prompt: 'Soient $A(1\\,;\\,2)$, $B(-1\\,;\\,3)$ et $C(0\\,;\\,-2)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 2)\\,;\\,(C, 3)\\}$ ?',
            options: [
              '$\\left(-\\dfrac{3}{4}\\,;\\,-\\dfrac{1}{2}\\right)$',
              '$\\left(\\dfrac{3}{4}\\,;\\,\\dfrac{1}{2}\\right)$',
              '$(-3\\,;\\,-2)$',
              '$\\left(-\\dfrac{1}{2}\\,;\\,-\\dfrac{3}{4}\\right)$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Somme $-1+2+3 = 4$. $x_G = \\dfrac{-1 - 2 + 0}{4} = -\\dfrac{3}{4}$ et $y_G = \\dfrac{-2 + 6 - 6}{4} = -\\dfrac{2}{4} = -\\dfrac{1}{2}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Barycentre de quatre points pondérés',
          stepTitle: 'Réduire 4MA − 2MB + 4MC − 5MD',
          paragraphText:
            'Soient $A, B, C, D, H$ tels que $\\overrightarrow{HA} - \\overrightarrow{HB} + 4\\overrightarrow{HC} - 2\\overrightarrow{HD} = \\vec{0}$ (somme $2$). Pour un système $H = \\operatorname{bar}\\{(A, 4)\\,;\\,(B, -2)\\,;\\,(C, 4)\\,;\\,(D, -5)\\}$ dont la somme des poids vaut $4 - 2 + 4 - 5 = 1$, on obtient pour tout point $M$ : $4\\overrightarrow{MA} - 2\\overrightarrow{MB} + 4\\overrightarrow{MC} - 5\\overrightarrow{MD} = \\overrightarrow{MH}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q6',
            type: 'mcq',
            prompt: 'Soit $E = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 4)\\,;\\,(C, -7)\\}$. Pour tout point $M$, à quoi est égal $-\\overrightarrow{MA} + 4\\overrightarrow{MB} - 7\\overrightarrow{MC}$ ?',
            options: ['$-4\\overrightarrow{ME}$', '$4\\overrightarrow{ME}$', '$-12\\overrightarrow{ME}$', '$10\\overrightarrow{ME}$'],
            correctAnswerIndex: 0,
            explanation: 'La somme des coefficients vaut $-1 + 4 - 7 = -4$, donc $-\\overrightarrow{MA} + 4\\overrightarrow{MB} - 7\\overrightarrow{MC} = -4\\overrightarrow{ME}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q1',
          type: 'mcq',
          prompt: 'Soient $A, B, C, G$ quatre points tels que $\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = \\vec{0}$. Quels sont les points pondérés dont $G$ est le barycentre ?',
          options: [
            '$(A, 1)$, $(B, 2)$, $(C, 1)$',
            '$(A, 1)$, $(B, 2)$, $(C, -1)$',
            '$(A, -1)$, $(B, 2)$, $(C, 1)$',
            '$(A, 1)$, $(B, -2)$, $(C, 1)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = -\\overrightarrow{GA} - 2\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{GA} + 2\\overrightarrow{GB} - \\overrightarrow{GC} = \\vec{0}$, donc $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(C, -1)\\}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q2',
          type: 'mcq',
          prompt: 'Soit $G$ défini par $-2\\overrightarrow{GA} + 6\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$. Que vaut $\\overrightarrow{AG}$ ?',
          options: [
            '$\\dfrac{6}{5}\\overrightarrow{AB} + \\dfrac{1}{5}\\overrightarrow{AC}$',
            '$-\\dfrac{6}{5}\\overrightarrow{AB} - \\dfrac{1}{5}\\overrightarrow{AC}$',
            '$\\dfrac{6}{9}\\overrightarrow{AB} + \\dfrac{1}{9}\\overrightarrow{AC}$',
            '$\\dfrac{2}{5}\\overrightarrow{AB} + \\dfrac{1}{5}\\overrightarrow{AC}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'La somme des coefficients est $-2 + 6 + 1 = 5$, donc $\\overrightarrow{AG} = \\dfrac{6}{5}\\overrightarrow{AB} + \\dfrac{1}{5}\\overrightarrow{AC}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q3',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un parallélogramme de centre $O$. Pour tout point $M$ du plan, à quoi est égal $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} + \\overrightarrow{MD}$ ?',
          options: ['$\\vec{0}$', '$2\\overrightarrow{MO}$', '$4\\overrightarrow{MO}$', '$\\overrightarrow{AC} + \\overrightarrow{BD}$'],
          correctAnswerIndex: 2,
          explanation: '$O$ est l’isobarycentre des $4$ sommets $A, B, C, D$ (somme des poids $1+1+1+1 = 4$), donc $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}+\\overrightarrow{MD} = 4\\overrightarrow{MO}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q4',
          type: 'mcq',
          prompt: 'Pour tout point $M$ du plan, à quoi est égal le vecteur $-2\\overrightarrow{MA} + 5\\overrightarrow{MB} - 3\\overrightarrow{MC}$ ?',
          options: [
            '$\\vec{0}$',
            '$5\\overrightarrow{AB} - 3\\overrightarrow{AC}$',
            '$2\\overrightarrow{AB} - 3\\overrightarrow{AC}$',
            '$10\\overrightarrow{MG}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$-2 + 5 - 3 = 0$ : en introduisant $A$, $-2\\overrightarrow{MA} + 5(\\overrightarrow{MA}+\\overrightarrow{AB}) - 3(\\overrightarrow{MA}+\\overrightarrow{AC}) = 5\\overrightarrow{AB} - 3\\overrightarrow{AC}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q5',
          type: 'mcq',
          prompt: 'Soient $A(1\\,;\\,2)$, $B(-1\\,;\\,3)$ et $C(0\\,;\\,-2)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 2)\\,;\\,(C, 3)\\}$ ?',
          options: [
            '$\\left(-\\dfrac{3}{4}\\,;\\,-\\dfrac{1}{2}\\right)$',
            '$\\left(\\dfrac{3}{4}\\,;\\,\\dfrac{1}{2}\\right)$',
            '$(-3\\,;\\,-2)$',
            '$\\left(-\\dfrac{1}{2}\\,;\\,-\\dfrac{3}{4}\\right)$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Somme $-1+2+3 = 4$. $x_G = \\dfrac{-1 - 2 + 0}{4} = -\\dfrac{3}{4}$ et $y_G = \\dfrac{-2 + 6 - 6}{4} = -\\dfrac{2}{4} = -\\dfrac{1}{2}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p03_q6',
          type: 'mcq',
          prompt: 'Soit $E = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 4)\\,;\\,(C, -7)\\}$. Pour tout point $M$, à quoi est égal $-\\overrightarrow{MA} + 4\\overrightarrow{MB} - 7\\overrightarrow{MC}$ ?',
          options: ['$-4\\overrightarrow{ME}$', '$4\\overrightarrow{ME}$', '$-12\\overrightarrow{ME}$', '$10\\overrightarrow{ME}$'],
          correctAnswerIndex: 0,
          explanation: 'La somme des coefficients vaut $-1 + 4 - 7 = -4$, donc $-\\overrightarrow{MA} + 4\\overrightarrow{MB} - 7\\overrightarrow{MC} = -4\\overrightarrow{ME}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Barycentre partiel, alignement et concours de droites
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l02_barycentre_p04',
      order: 4,
      title: 'Barycentre partiel, alignement et concours de droites',
      summary:
        'Propriété d’associativité du barycentre : regrouper deux points pondérés par leur barycentre partiel (a + b ≠ 0) pour placer G ou prouver un alignement/concours.',
      conceptExplanation:
        "**Théorème du barycentre partiel (associativité)** : soient $(A, a)$, $(B, b)$, $(C, c)$ tels que $a+b+c \\neq 0$ et **$a + b \\neq 0$**. Si $H = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$, alors :\n$$G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\,;\\,(C, c)\\} = \\operatorname{bar}\\{(H, a+b)\\,;\\,(C, c)\\}$$\nOn appelle $H$ le **barycentre partiel** de $(A,a)$ et $(B,b)$.\n\n**Applications clés** :\n1. **Positionner $G$** : dans la situation de la plaque triangulaire $ABC$ munie de masses $m_A=2\\text{ g}$, $m_B=5\\text{ g}$, $m_C=3\\text{ g}$, on pose $H = \\operatorname{bar}\\{(A,2)\\,;\\,(C,3)\\}$ ($\\overrightarrow{AH} = \\frac{3}{5}\\overrightarrow{AC}$), puis $G = \\operatorname{bar}\\{(H,5)\\,;\\,(B,5)\\}$ : $G$ est le **milieu de $[BH]$**.\n2. **Alignement** : si l'on montre que $G = \\operatorname{bar}\\{(H, \\alpha)\\,;\\,(C, \\beta)\\}$, alors $G \\in (HC)$ : les points $G, H, C$ sont alignés.\n3. **Concours de trois droites** : en regroupant différemment les coefficients d'un même barycentre $G$ (par exemple $\\{(A,2)\\,;\\,(B,2)\\,;\\,(C,2)\\}$), on montre que $G$ appartient simultanément à trois droites $(IL)$, $(NK)$ et $(JM)$, qui sont donc **concourantes en $G$**.",
      keyRule:
        'On ne change pas un barycentre en remplaçant deux (ou plusieurs) points par leur barycentre partiel affecté de la somme non nulle de leurs coefficients.',
      formulas: [
        { name: 'Associativité (a + b ≠ 0)', formula: '\\operatorname{bar}\\{(A,a);(B,b);(C,c)\\} = \\operatorname{bar}\\{(H,a+b);(C,c)\\}' },
        { name: 'Alignement', formula: 'G = \\operatorname{bar}\\{(P,\\alpha);(Q,\\beta)\\} \\implies P, Q, G \\text{ alignés}' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Plaque triangulaire en équilibre et barycentre partiel H',
        caption: 'H = bar{(A,2);(C,3)} sur [AC] (AH = 3/5 AC), puis G est le milieu de [BH].',
        svgContent: `<svg viewBox="0 0 320 175" width="305" height="167" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,35 275,35 160,150" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="160" y1="150" x2="183" y2="35" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="45" cy="35" r="4" fill="#1e293b"/><text x="30" y="30" font-size="13" font-weight="bold" fill="#1e293b">A (2g)</text>
  <circle cx="275" cy="35" r="4" fill="#1e293b"/><text x="255" y="28" font-size="13" font-weight="bold" fill="#1e293b">C (3g)</text>
  <circle cx="160" cy="150" r="4" fill="#1e293b"/><text x="167" y="162" font-size="13" font-weight="bold" fill="#1e293b">B (5g)</text>
  <circle cx="183" cy="35" r="4.5" fill="#7c3aed"/><text x="178" y="24" font-size="13" font-weight="bold" fill="#7c3aed">H (5g)</text>
  <circle cx="171.5" cy="92.5" r="5" fill="#2563eb"/><text x="180" y="96" font-size="13" font-weight="bold" fill="#2563eb">G (milieu [BH])</text>
</svg>`,
      },
      workedExample: {
        title: 'Prouver que trois droites sont concourantes (Exercice 7)',
        statement:
          'Dans un triangle $ABC$, chaque côté est partagé en trois segments égaux : $I, J \\in [AB]$ ($AI = IJ = JB$), $K, L \\in [BC]$ et $M, N \\in [CA]$ ($CN = NM = MA$? Ici $A-N-M-C$, donc $N = \\operatorname{bar}\\{(A,2);(C,1)\\}$ et $M = \\operatorname{bar}\\{(A,1);(C,2)\\}$). Montre que $(IL)$, $(JM)$ et $(KN)$ sont concourantes.',
        methodSteps: [
          'On exprime chaque point : $I=\\operatorname{bar}\\{(A,2);(B,1)\\}$, $L=\\operatorname{bar}\\{(B,1);(C,2)\\}$, $J=\\operatorname{bar}\\{(A,1);(B,2)\\}$, $M=\\operatorname{bar}\\{(A,1);(C,2)\\}$, $N=\\operatorname{bar}\\{(A,2);(C,1)\\}$, $K=\\operatorname{bar}\\{(B,2);(C,1)\\}$.',
          'Soit $G = \\operatorname{bar}\\{(A,2);(B,2);(C,2)\\}$ (centre de gravité).',
          'En éclatant $(B,2)$ en $(B,1)+(B,1)$, $G = \\operatorname{bar}\\{(I,3);(L,3)\\} \\implies G \\in (IL)$.',
          'En éclatant $(C,2)$ en $(C,1)+(C,1)$, $G = \\operatorname{bar}\\{(N,3);(K,3)\\} \\implies G \\in (NK)$.',
          'En éclatant $(A,2)$ en $(A,1)+(A,1)$, $G = \\operatorname{bar}\\{(J,3);(M,3)\\} \\implies G \\in (JM)$.',
        ],
        conclusion: 'Donc $G \\in (IL) \\cap (KN) \\cap (JM)$ : les trois droites sont concourantes en $G$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Barycentre partiel (associativité)',
          stepTitle: 'Remplacer deux points par leur barycentre partiel',
          paragraphText:
            'Si $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(C, 3)\\}$, on peut d’abord introduire $H = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\}$. La somme des poids de $A$ et $B$ vaut $1 + 2 = 3 \\neq 0$, donc $G = \\operatorname{bar}\\{(H, 3)\\,;\\,(C, 3)\\}$ : $G$ est l’isobarycentre de $H$ et $C$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q1',
            type: 'mcq',
            prompt: 'Soit $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(C, 3)\\}$ et $H = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\}$. Quelle est la position exacte de $G$ ?',
            options: [
              'Le milieu du segment $[HC]$',
              'Le tiers de $[HC]$ en partant de $H$',
              'Le milieu du segment $[AB]$',
              'Le point vérifiant $\\overrightarrow{HG} = \\dfrac{1}{3}\\overrightarrow{HC}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Par associativité, $G = \\operatorname{bar}\\{(H, 1+2)\\,;\\,(C, 3)\\} = \\operatorname{bar}\\{(H, 3)\\,;\\,(C, 3)\\}$, donc $G$ est le milieu de $[HC]$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Condition a + b ≠ 0 sur le barycentre partiel',
          stepTitle: 'On ne peut pas regrouper deux points de somme nulle',
          paragraphText:
            'Pour remplacer $(A, a)$ et $(B, b)$ par leur barycentre partiel $H$, il faut impérativement que $a + b \\neq 0$. Par exemple, pour $G = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, -2)\\,;\\,(C, 5)\\}$, on ne peut pas regrouper $A$ et $B$ ($2 - 2 = 0$), mais on peut regrouper $A$ et $C$ ($2 + 5 = 7 \\neq 0$) ou $B$ et $C$ ($-2 + 5 = 3 \\neq 0$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q2',
            type: 'mcq',
            prompt: 'Soit $G = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -3)\\,;\\,(C, 4)\\}$. Quel regroupement partiel EST INTERDIT ?',
            options: [
              'Regrouper $(A, 3)$ et $(C, 4)$',
              'Regrouper $(B, -3)$ et $(C, 4)$',
              'Regrouper $(A, 3)$ et $(B, -3)$',
              'Calculer $3\\overrightarrow{GA} - 3\\overrightarrow{GB} + 4\\overrightarrow{GC} = \\vec{0}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'La somme des coefficients de $A$ et $B$ vaut $3 + (-3) = 0$ : ils n’admettent donc pas de barycentre partiel.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Construction pas à pas avec barycentre partiel',
          stepTitle: 'Construire un barycentre de 3 points en deux étapes simples',
          paragraphText:
            'Pour $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 4)\\,;\\,(C, -3)\\}$, on construit d’abord $H = \\operatorname{bar}\\{(B, 4)\\,;\\,(C, -3)\\}$ grâce à $\\overrightarrow{BH} = \\dfrac{-3}{4-3}\\overrightarrow{BC} = -3\\overrightarrow{BC}$, puis $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(H, 1)\\}$ est simplement le milieu de $[HA]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q3',
            type: 'mcq',
            prompt: 'Dans un triangle $ABC$, $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 4)\\,;\\,(C, -3)\\}$ et $H = \\operatorname{bar}\\{(B, 4)\\,;\\,(C, -3)\\}$. Quelles relations caractérisent $H$ et $G$ ?',
            options: [
              '$\\overrightarrow{BH} = 3\\overrightarrow{BC}$ et $G$ milieu de $[HA]$',
              '$\\overrightarrow{BH} = -3\\overrightarrow{BC}$ et $G$ milieu de $[HA]$',
              '$\\overrightarrow{BH} = -\\dfrac{3}{4}\\overrightarrow{BC}$ et $\\overrightarrow{AG} = \\dfrac{1}{2}\\overrightarrow{AH}$',
              '$\\overrightarrow{CH} = -3\\overrightarrow{CB}$ et $G$ milieu de $[BC]$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $H = \\operatorname{bar}\\{(B,4)\\,;\\,(C,-3)\\}$, $\\overrightarrow{BH} = \\dfrac{-3}{4-3}\\overrightarrow{BC} = -3\\overrightarrow{BC}$. Puis $G = \\operatorname{bar}\\{(A,1)\\,;\\,(H,1)\\}$ est le milieu de $[HA]$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Démontrer un alignement par associativité',
          stepTitle: 'Faire apparaître deux points existants dans un seul barycentre',
          paragraphText:
            'Dans le triangle $ABC$, $P$ est le symétrique de $B$ par rapport à $C$ ($P = \\operatorname{bar}\\{(B, -1)\\,;\\,(C, 2)\\}$), $\\overrightarrow{CQ} = \\frac{1}{3}\\overrightarrow{CA}$ ($Q = \\operatorname{bar}\\{(A, 1)\\,;\\,(C, 2)\\}$) et $R$ est le milieu de $[AB]$ ($R = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 1)\\}$). En formant $\\{(A,1)\\,;\\,(B,1)\\,;\\,(B,-1)\\,;\\,(C,2)\\}$, le poids total de $B$ s’annule ($1 - 1 = 0$) : il reste $Q = \\operatorname{bar}\\{(R, 2)\\,;\\,(P, 1)\\}$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q4',
            type: 'mcq',
            prompt: 'Avec les données ci-dessus ($R$ milieu de $[AB]$, $P$ symétrique de $B$ par rapport à $C$, $\\overrightarrow{CQ} = \\frac{1}{3}\\overrightarrow{CA}$), quelle égalité prouve que $P, Q, R$ sont alignés ?',
            options: [
              '$Q = \\operatorname{bar}\\{(R, 2)\\,;\\,(P, 1)\\}$',
              '$Q = \\operatorname{bar}\\{(R, 1)\\,;\\,(P, 2)\\}$',
              '$P = \\operatorname{bar}\\{(Q, 1)\\,;\\,(R, 2)\\}$',
              '$R = \\operatorname{bar}\\{(P, 2)\\,;\\,(Q, 1)\\}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le système $\\{(A,1)\\,;\\,(B,1)\\,;\\,(B,-1)\\,;\\,(C,2)\\}$ se regroupe d’une part en $\\{(A,1)\\,;\\,(C,2)\\}$ (soit $Q$), et d’autre part en $\\{(R, 2)\\,;\\,(P, 1)\\}$. Donc $Q = \\operatorname{bar}\\{(R, 2)\\,;\\,(P, 1)\\} \\in [PR]$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Prouver un concours de droites',
          stepTitle: 'Décomposer un même barycentre selon plusieurs paires',
          paragraphText:
            'Dans un parallélogramme $ABCD$, $K$ est le milieu de $[AD]$, $I$ et $J$ partagent $[AB]$ en $3$ parties égales ($I = \\operatorname{bar}\\{(A,2);(B,1)\\}$, $J = \\operatorname{bar}\\{(A,1);(B,2)\\}$), et $C = \\operatorname{bar}\\{(A,-1);(B,1);(D,1)\\}$. Pour $G = \\operatorname{bar}\\{(A,1);(B,2);(D,1)\\}$, on a à la fois $G = \\operatorname{bar}\\{(K,2);(B,2)\\} \\in (KB)$, $G = \\operatorname{bar}\\{(J,3);(D,1)\\} \\in (JD)$, et $G = \\operatorname{bar}\\{(I,3);(C,1)\\} \\in (IC)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q5',
            type: 'mcq',
            prompt: 'Soit $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(D, 1)\\}$ avec $I = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 1)\\}$ et $C = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 1)\\,;\\,(D, 1)\\}$. En éclatant $(A,1)=(A,2)+(A,-1)$ et $(B,2)=(B,1)+(B,1)$, que devient $G$ ?',
            options: [
              '$G = \\operatorname{bar}\\{(I, 3)\\,;\\,(C, 1)\\}$, donc $G \\in (IC)$',
              '$G = \\operatorname{bar}\\{(I, 1)\\,;\\,(C, 3)\\}$, donc $G \\in (IC)$',
              '$G = \\operatorname{bar}\\{(I, 3)\\,;\\,(C, -1)\\}$, donc $G \\in (IC)$',
              '$G = \\operatorname{bar}\\{(I, 2)\\,;\\,(C, 2)\\}$, donc $G$ milieu de $[IC]$',
            ],
            correctAnswerIndex: 0,
            explanation: '$(A,2)$ et $(B,1)$ donnent $(I, 3)$ ; $(A,-1)$, $(B,1)$ et $(D,1)$ donnent $(C, 1)$ (somme $-1+1+1 = 1$). D’où $G = \\operatorname{bar}\\{(I, 3)\\,;\\,(C, 1)\\}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Situation complexe : équilibre d’une plaque triangulaire',
          stepTitle: 'Accrocher le fil au barycentre des trois masses',
          paragraphText:
            'On suspend $m_A = 2\\text{ g}$, $m_B = 5\\text{ g}$, $m_C = 3\\text{ g}$ aux sommets de $ABC$. Le point d’équilibre vérifie $2\\overrightarrow{GA} + 5\\overrightarrow{GB} + 3\\overrightarrow{GC} = \\vec{0}$. En posant $H = \\operatorname{bar}\\{(A, 2)\\,;\\,(C, 3)\\}$ ($\\overrightarrow{AH} = \\frac{3}{5}\\overrightarrow{AC}$), on obtient $G = \\operatorname{bar}\\{(H, 5)\\,;\\,(B, 5)\\}$, soit le milieu de $[BH]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q6',
            type: 'mcq',
            prompt: 'Si les masses suspendues à $A, B, C$ sont $m_A = 2\\text{ g}$, $m_B = 5\\text{ g}$ et $m_C = 3\\text{ g}$, où se trouve le point d’équilibre $G$ ?',
            options: [
              'Au milieu de $[AC]$',
              'Au milieu de $[BH]$ où $\\overrightarrow{AH} = \\dfrac{3}{5}\\overrightarrow{AC}$',
              'Au milieu de $[BH]$ où $\\overrightarrow{AH} = \\dfrac{2}{5}\\overrightarrow{AC}$',
              'Au centre de gravité du triangle $ABC$',
            ],
            correctAnswerIndex: 1,
            explanation: '$H = \\operatorname{bar}\\{(A, 2)\\,;\\,(C, 3)\\}$ vérifie $\\overrightarrow{AH} = \\dfrac{3}{5}\\overrightarrow{AC}$ et a pour masse partielle $2+3 = 5\\text{ g}$. Comme $m_B = 5\\text{ g}$, $G$ est le milieu de $[BH]$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q1',
          type: 'mcq',
          prompt: 'Soit $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(C, 3)\\}$ et $H = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\}$. Quelle est la position exacte de $G$ ?',
          options: [
            'Le milieu du segment $[HC]$',
            'Le tiers de $[HC]$ en partant de $H$',
            'Le milieu du segment $[AB]$',
            'Le point vérifiant $\\overrightarrow{HG} = \\dfrac{1}{3}\\overrightarrow{HC}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Par associativité, $G = \\operatorname{bar}\\{(H, 1+2)\\,;\\,(C, 3)\\} = \\operatorname{bar}\\{(H, 3)\\,;\\,(C, 3)\\}$, donc $G$ est le milieu de $[HC]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q2',
          type: 'mcq',
          prompt: 'Soit $G = \\operatorname{bar}\\{(A, 3)\\,;\\,(B, -3)\\,;\\,(C, 4)\\}$. Quel regroupement partiel EST INTERDIT ?',
          options: [
            'Regrouper $(A, 3)$ et $(C, 4)$',
            'Regrouper $(B, -3)$ et $(C, 4)$',
            'Regrouper $(A, 3)$ et $(B, -3)$',
            'Calculer $3\\overrightarrow{GA} - 3\\overrightarrow{GB} + 4\\overrightarrow{GC} = \\vec{0}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'La somme des coefficients de $A$ et $B$ vaut $3 + (-3) = 0$ : ils n’admettent donc pas de barycentre partiel.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q3',
          type: 'mcq',
          prompt: 'Dans un triangle $ABC$, $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 4)\\,;\\,(C, -3)\\}$ et $H = \\operatorname{bar}\\{(B, 4)\\,;\\,(C, -3)\\}$. Quelles relations caractérisent $H$ et $G$ ?',
          options: [
            '$\\overrightarrow{BH} = 3\\overrightarrow{BC}$ et $G$ milieu de $[HA]$',
            '$\\overrightarrow{BH} = -3\\overrightarrow{BC}$ et $G$ milieu de $[HA]$',
            '$\\overrightarrow{BH} = -\\dfrac{3}{4}\\overrightarrow{BC}$ et $\\overrightarrow{AG} = \\dfrac{1}{2}\\overrightarrow{AH}$',
            '$\\overrightarrow{CH} = -3\\overrightarrow{CB}$ et $G$ milieu de $[BC]$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $H = \\operatorname{bar}\\{(B,4)\\,;\\,(C,-3)\\}$, $\\overrightarrow{BH} = \\dfrac{-3}{4-3}\\overrightarrow{BC} = -3\\overrightarrow{BC}$. Puis $G = \\operatorname{bar}\\{(A,1)\\,;\\,(H,1)\\}$ est le milieu de $[HA]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q4',
          type: 'mcq',
          prompt: 'Avec les données ci-dessus ($R$ milieu de $[AB]$, $P$ symétrique de $B$ par rapport à $C$, $\\overrightarrow{CQ} = \\frac{1}{3}\\overrightarrow{CA}$), quelle égalité prouve que $P, Q, R$ sont alignés ?',
          options: [
            '$Q = \\operatorname{bar}\\{(R, 2)\\,;\\,(P, 1)\\}$',
            '$Q = \\operatorname{bar}\\{(R, 1)\\,;\\,(P, 2)\\}$',
            '$P = \\operatorname{bar}\\{(Q, 1)\\,;\\,(R, 2)\\}$',
            '$R = \\operatorname{bar}\\{(P, 2)\\,;\\,(Q, 1)\\}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Le système $\\{(A,1)\\,;\\,(B,1)\\,;\\,(B,-1)\\,;\\,(C,2)\\}$ se regroupe d’une part en $\\{(A,1)\\,;\\,(C,2)\\}$ (soit $Q$), et d’autre part en $\\{(R, 2)\\,;\\,(P, 1)\\}$. Donc $Q = \\operatorname{bar}\\{(R, 2)\\,;\\,(P, 1)\\} \\in [PR]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q5',
          type: 'mcq',
          prompt: 'Soit $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, 2)\\,;\\,(D, 1)\\}$ avec $I = \\operatorname{bar}\\{(A, 2)\\,;\\,(B, 1)\\}$ et $C = \\operatorname{bar}\\{(A, -1)\\,;\\,(B, 1)\\,;\\,(D, 1)\\}$. En éclatant $(A,1)=(A,2)+(A,-1)$ et $(B,2)=(B,1)+(B,1)$, que devient $G$ ?',
          options: [
            '$G = \\operatorname{bar}\\{(I, 3)\\,;\\,(C, 1)\\}$, donc $G \\in (IC)$',
            '$G = \\operatorname{bar}\\{(I, 1)\\,;\\,(C, 3)\\}$, donc $G \\in (IC)$',
            '$G = \\operatorname{bar}\\{(I, 3)\\,;\\,(C, -1)\\}$, donc $G \\in (IC)$',
            '$G = \\operatorname{bar}\\{(I, 2)\\,;\\,(C, 2)\\}$, donc $G$ milieu de $[IC]$',
          ],
          correctAnswerIndex: 0,
          explanation: '$(A,2)$ et $(B,1)$ donnent $(I, 3)$ ; $(A,-1)$, $(B,1)$ et $(D,1)$ donnent $(C, 1)$ (somme $-1+1+1 = 1$). D’où $G = \\operatorname{bar}\\{(I, 3)\\,;\\,(C, 1)\\}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p04_q6',
          type: 'mcq',
          prompt: 'Si les masses suspendues à $A, B, C$ sont $m_A = 2\\text{ g}$, $m_B = 5\\text{ g}$ et $m_C = 3\\text{ g}$, où se trouve le point d’équilibre $G$ ?',
          options: [
            'Au milieu de $[AC]$',
            'Au milieu de $[BH]$ où $\\overrightarrow{AH} = \\dfrac{3}{5}\\overrightarrow{AC}$',
            'Au milieu de $[BH]$ où $\\overrightarrow{AH} = \\dfrac{2}{5}\\overrightarrow{AC}$',
            'Au centre de gravité du triangle $ABC$',
          ],
          correctAnswerIndex: 1,
          explanation: '$H = \\operatorname{bar}\\{(A, 2)\\,;\\,(C, 3)\\}$ vérifie $\\overrightarrow{AH} = \\dfrac{3}{5}\\overrightarrow{AC}$ et a pour masse partielle $2+3 = 5\\text{ g}$. Comme $m_B = 5\\text{ g}$, $G$ est le milieu de $[BH]$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Lignes de niveau de aMA² + bMB² et de MA/MB
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l02_barycentre_p05',
      order: 5,
      title: 'Lignes de niveau de aMA² + bMB² et de MA/MB',
      summary:
        'Définition d’une ligne de niveau k, réduction de aMA² + bMB² via G = bar{(A,a);(B,b)}, médiatrice pour MA/MB = 1 et cercle pour MA/MB = k ≠ 1.',
      conceptExplanation:
        "Soit $f$ une application du plan dans $\\mathbb{R}$ et $k \\in \\mathbb{R}$. La **ligne de niveau $k$** de $f$ est l’ensemble des points $M$ du plan tels que $f(M) = k$.\n\n1. **Application $f(M) = aMA^2 + bMB^2$** ($a \\neq 0$, $b \\neq 0$, **$a + b \\neq 0$**)\nEn posant $G = \\operatorname{bar}\\{(A, a)\\,;\\,(B, b)\\}$ et en écrivant $\\overrightarrow{MA} = \\overrightarrow{MG} + \\overrightarrow{GA}$ et $\\overrightarrow{MB} = \\overrightarrow{MG} + \\overrightarrow{GB}$, le terme produit scalaire $2\\overrightarrow{MG}\\cdot(a\\overrightarrow{GA} + b\\overrightarrow{GB})$ s'annule :\n$$aMA^2 + bMB^2 = (a+b)MG^2 + aGA^2 + bGB^2$$\nOn obtient alors $MG^2 = \\alpha$. Selon le signe de $\\alpha$, la ligne de niveau $k$ est : l’**ensemble vide** ($\\alpha < 0$), le **singleton $\\{G\\}$** ($\\alpha = 0$), ou le **cercle de centre $G$ et de rayon $\\sqrt{\\alpha}$** ($\\alpha > 0$).\n\n2. **Application $f(M) = \\dfrac{MA}{MB}$** ($k > 0$, $M \\neq B$)\n- Si $k = 1$ : $MA = MB$, l’ensemble est la **médiatrice** de $[AB]$.\n- Si $k \\neq 1$ : $\\dfrac{MA}{MB} = k \\iff MA^2 - k^2 MB^2 = 0$. En posant $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -k^2)\\}$ ($1 - k^2 \\neq 0$), l’ensemble est un **cercle de centre $G$**.",
      keyRule:
        'Pour a+b ≠ 0, aMA² + bMB² = (a+b)MG² + aGA² + bGB². Pour MA/MB = k : médiatrice si k = 1 ; si k ≠ 1, on résout MA² − k²MB² = 0 avec G = bar{(A,1);(B,−k²)}.',
      formulas: [
        { name: 'Développement scalaire', formula: 'aMA^2 + bMB^2 = (a+b)MG^2 + aGA^2 + bGB^2' },
        { name: 'Rapport MA/MB = k', formula: '\\frac{MA}{MB} = k \\iff MA^2 - k^2 MB^2 = 0' },
      ],
      workedExample: {
        title: 'Ligne de niveau de MA² + MB² = 122 et de MA/MB = 3',
        statement:
          '1) $AB = 12$. Détermine la ligne de niveau $122$ de $M \\mapsto MA^2 + MB^2$.\n2) $AB = 6$. Détermine la ligne de niveau $3$ de $M \\mapsto \\dfrac{MA}{MB}$.',
        methodSteps: [
          '1) Soit $G$ l’isobarycentre (milieu) de $[AB]$, donc $GA = GB = 6$. On a $MA^2 + MB^2 = 2MG^2 + GA^2 + GB^2 = 2MG^2 + 36 + 36 = 2MG^2 + 72$.',
          'Ainsi $2MG^2 + 72 = 122 \\iff 2MG^2 = 50 \\iff MG^2 = 25 \\iff MG = 5$ : cercle de centre $G$ et de rayon $5$.',
          '2) $\\dfrac{MA}{MB} = 3 \\iff MA^2 - 9MB^2 = 0$. Soit $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$ ($\\overrightarrow{GA} = 9\\overrightarrow{GB} \\implies GA^2 = 81GB^2$).',
          'En réduisant : $(1-9)MG^2 + GA^2 - 9GB^2 = 0 \\iff -8MG^2 + 72GB^2 = 0 \\iff MG^2 = 9GB^2 \\iff MG = 3GB$. Or $\\overrightarrow{BG} = \\dfrac{1}{-8}\\overrightarrow{BA}$ donne $GB = \\dfrac{6}{8} = \\dfrac{3}{4}$, donc $3GB = \\dfrac{9}{4} = 2{,}25$.',
        ],
        conclusion: '1) Cercle de centre $G$ (milieu de $[AB]$) et de rayon $5$ ; 2) Cercle de centre $G = \\operatorname{bar}\\{(A,1);(B,-9)\\}$ et de rayon $3GB = 2{,}25$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Ligne de niveau d’une application',
          stepTitle: 'L’ensemble des points M vérifiant f(M) = k',
          paragraphText:
            'La ligne de niveau $k$ d’une application $f$ du plan dans $\\mathbb{R}$ est l’ensemble $\\{M \\in \\mathcal{P} \\mid f(M) = k\\}$. Par exemple, pour $f(M) = OM$, la ligne de niveau $3$ est le cercle de centre $O$ et de rayon $3$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q1',
            type: 'mcq',
            prompt: 'Soit $O$ un point fixe et $f(M) = OM$. Quelle est la ligne de niveau $k = 0$ de $f$ ?',
            options: [
              'L’ensemble vide $\\emptyset$',
              'Le singleton $\\{O\\}$',
              'Le cercle de centre $O$ et de rayon $1$',
              'Une droite passant par $O$',
            ],
            correctAnswerIndex: 1,
            explanation: '$OM = 0 \\iff M = O$, donc la ligne de niveau $0$ est réduite au seul point $O$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Réduction de aMA² + bMB²',
          stepTitle: 'Introduire G = bar{(A,a);(B,b)} dans les carrés scalaires',
          paragraphText:
            'En développant $a(\\overrightarrow{MG}+\\overrightarrow{GA})^2 + b(\\overrightarrow{MG}+\\overrightarrow{GB})^2$, le double produit $2\\overrightarrow{MG}\\cdot(a\\overrightarrow{GA}+b\\overrightarrow{GB})$ s’annule par définition de $G$. Il reste $(a+b)MG^2 + aGA^2 + bGB^2$.',
          formula: { name: 'Identité de Leibniz', formula: 'aMA^2 + bMB^2 = (a+b)MG^2 + aGA^2 + bGB^2' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q2',
            type: 'mcq',
            prompt: 'Soient $A$ et $B$ tels que $AB = 12$ et $G$ le milieu de $[AB]$. Quelle est la ligne de niveau $122$ de $M \\mapsto MA^2 + MB^2$ ?',
            options: [
              'L’ensemble vide $\\emptyset$',
              'Le point $G$',
              'Le cercle de centre $G$ et de rayon $5$',
              'Le cercle de centre $G$ et de rayon $25$',
            ],
            correctAnswerIndex: 2,
            explanation: '$GA = GB = 6$, donc $MA^2 + MB^2 = 2MG^2 + 36 + 36 = 2MG^2 + 72$. Ainsi $2MG^2 + 72 = 122 \\iff MG^2 = 25 \\iff MG = 5$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Discussion selon la valeur de MG²',
          stepTitle: 'Une équation MG² = −4 donne l’ensemble vide !',
          paragraphText:
            'Ne conclus jamais automatiquement « c’est un cercle » sans vérifier le signe du second membre ! Si l’on trouve $MG^2 = 0$, la ligne de niveau est $\\{G\\}$ ; si l’on trouve $MG^2 < 0$, elle est vide ($\\emptyset$). Avec $AB = 12$, $MA^2 + MB^2 = 72 \\iff 2MG^2 = 0 \\iff M = G$, et $MA^2 + MB^2 = 50 \\iff 2MG^2 = -22$ donne $\\emptyset$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q3',
            type: 'mcq',
            prompt: 'Toujours avec $AB = 12$ ($G$ milieu de $[AB]$), quelle est la ligne de niveau $72$ de $M \\mapsto MA^2 + MB^2$ ?',
            options: [
              'Le singleton $\\{G\\}$',
              'L’ensemble vide $\\emptyset$',
              'Le cercle de centre $G$ et de rayon $6$',
              'La médiatrice de $[AB]$',
            ],
            correctAnswerIndex: 0,
            explanation: '$2MG^2 + 72 = 72 \\iff 2MG^2 = 0 \\iff MG = 0 \\iff M = G$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Ligne de niveau de MA/MB',
          stepTitle: 'Médiatrice si k = 1, cercle si k ≠ 1',
          paragraphText:
            'Pour deux points distincts $A$ et $B$ et $k > 0$, la ligne de niveau $k$ de $M \\mapsto \\dfrac{MA}{MB}$ (pour $M \\neq B$) est la médiatrice de $[AB]$ si $k = 1$, et un cercle de centre $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -k^2)\\}$ si $k \\neq 1$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q4',
            type: 'mcq',
            prompt: 'Dans quel cas l’ensemble des points $M$ vérifiant $\\dfrac{MA}{MB} = k$ ($k > 0$) est-il une droite ?',
            options: [
              'Seulement lorsque $k = 1$ (la médiatrice de $[AB]$)',
              'Lorsque $k = 2$',
              'Lorsque $k < 1$',
              'Jamais, c’est toujours un cercle',
            ],
            correctAnswerIndex: 0,
            explanation: 'Si $k = 1$, $\\dfrac{MA}{MB} = 1 \\iff MA = MB$, ce qui caractérise la médiatrice de $[AB]$. Dès que $k \\neq 1$ ($k>0$), c’est un cercle.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul du rayon pour MA/MB = k ≠ 1',
          stepTitle: 'Réduire MA² − k²MB² = 0 à l’aide de G = bar{(A,1);(B,−k²)}',
          paragraphText:
            'Pour $\\dfrac{MA}{MB} = 3$ avec $AB = 6$, on élève au carré : $MA^2 - 9MB^2 = 0$. Avec $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$, on a $\\overrightarrow{GA} = 9\\overrightarrow{GB}$, donc $GA^2 = 81GB^2$. La formule de réduction donne $(1-9)MG^2 + 81GB^2 - 9GB^2 = 0 \\iff -8MG^2 + 72GB^2 = 0 \\iff MG = 3GB$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q5',
            type: 'mcq',
            prompt: 'Soient $A, B$ tels que $AB = 6$ et $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$. Quelle est la ligne de niveau $3$ de $M \\mapsto \\dfrac{MA}{MB}$ ?',
            options: [
              'La médiatrice de $[AB]$',
              'Le cercle de centre $G$ et de rayon $3GB$',
              'Le cercle de centre $G$ et de rayon $9GB$',
              'L’ensemble vide $\\emptyset$',
            ],
            correctAnswerIndex: 1,
            explanation: '$-8MG^2 + 72GB^2 = 0 \\iff MG^2 = 9GB^2 \\iff MG = 3GB$ (soit un rayon égal à $3 \\times \\dfrac{6}{8} = \\dfrac{9}{4}$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calcul numérique complet du rayon',
          stepTitle: 'Déterminer GB puis le rayon en fonction de AB',
          paragraphText:
            'Dans l’exemple précédent ($AB = 6$, $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$), on a $\\overrightarrow{BG} = \\dfrac{1}{1-9}\\overrightarrow{BA} = -\\dfrac{1}{8}\\overrightarrow{BA}$, d’où $GB = \\dfrac{1}{8}AB = \\dfrac{6}{8} = \\dfrac{3}{4}$. Le rayon vaut donc $R = 3GB = \\dfrac{9}{4} = 2{,}25$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q6',
            type: 'mcq',
            prompt: 'Pour $AB = 8$ et $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$, quel est le rayon exact du cercle des points $M$ vérifiant $\\dfrac{MA}{MB} = 3$ ?',
            options: ['$1$', '$3$', '$4$', '$6$'],
            correctAnswerIndex: 1,
            explanation: '$GB = \\dfrac{1}{8}AB = \\dfrac{8}{8} = 1$, et $MG = 3GB = 3 \\times 1 = 3$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q1',
          type: 'mcq',
          prompt: 'Soit $O$ un point fixe et $f(M) = OM$. Quelle est la ligne de niveau $k = 0$ de $f$ ?',
          options: [
            'L’ensemble vide $\\emptyset$',
            'Le singleton $\\{O\\}$',
            'Le cercle de centre $O$ et de rayon $1$',
            'Une droite passant par $O$',
          ],
          correctAnswerIndex: 1,
          explanation: '$OM = 0 \\iff M = O$, donc la ligne de niveau $0$ est réduite au seul point $O$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q2',
          type: 'mcq',
          prompt: 'Soient $A$ et $B$ tels que $AB = 12$ et $G$ le milieu de $[AB]$. Quelle est la ligne de niveau $122$ de $M \\mapsto MA^2 + MB^2$ ?',
          options: [
            'L’ensemble vide $\\emptyset$',
            'Le point $G$',
            'Le cercle de centre $G$ et de rayon $5$',
            'Le cercle de centre $G$ et de rayon $25$',
          ],
          correctAnswerIndex: 2,
          explanation: '$GA = GB = 6$, donc $MA^2 + MB^2 = 2MG^2 + 36 + 36 = 2MG^2 + 72$. Ainsi $2MG^2 + 72 = 122 \\iff MG^2 = 25 \\iff MG = 5$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q3',
          type: 'mcq',
          prompt: 'Toujours avec $AB = 12$ ($G$ milieu de $[AB]$), quelle est la ligne de niveau $72$ de $M \\mapsto MA^2 + MB^2$ ?',
          options: [
            'Le singleton $\\{G\\}$',
            'L’ensemble vide $\\emptyset$',
            'Le cercle de centre $G$ et de rayon $6$',
            'La médiatrice de $[AB]$',
          ],
          correctAnswerIndex: 0,
          explanation: '$2MG^2 + 72 = 72 \\iff 2MG^2 = 0 \\iff MG = 0 \\iff M = G$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q4',
          type: 'mcq',
          prompt: 'Dans quel cas l’ensemble des points $M$ vérifiant $\\dfrac{MA}{MB} = k$ ($k > 0$) est-il une droite ?',
          options: [
            'Seulement lorsque $k = 1$ (la médiatrice de $[AB]$)',
            'Lorsque $k = 2$',
            'Lorsque $k < 1$',
            'Jamais, c’est toujours un cercle',
          ],
          correctAnswerIndex: 0,
          explanation: 'Si $k = 1$, $\\dfrac{MA}{MB} = 1 \\iff MA = MB$, ce qui caractérise la médiatrice de $[AB]$. Dès que $k \\neq 1$ ($k>0$), c’est un cercle.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q5',
          type: 'mcq',
          prompt: 'Soient $A, B$ tels que $AB = 6$ et $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$. Quelle est la ligne de niveau $3$ de $M \\mapsto \\dfrac{MA}{MB}$ ?',
          options: [
            'La médiatrice de $[AB]$',
            'Le cercle de centre $G$ et de rayon $3GB$',
            'Le cercle de centre $G$ et de rayon $9GB$',
            'L’ensemble vide $\\emptyset$',
          ],
          correctAnswerIndex: 1,
          explanation: '$-8MG^2 + 72GB^2 = 0 \\iff MG^2 = 9GB^2 \\iff MG = 3GB$ (soit un rayon égal à $3 \\times \\dfrac{6}{8} = \\dfrac{9}{4}$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p05_q6',
          type: 'mcq',
          prompt: 'Pour $AB = 8$ et $G = \\operatorname{bar}\\{(A, 1)\\,;\\,(B, -9)\\}$, quel est le rayon exact du cercle des points $M$ vérifiant $\\dfrac{MA}{MB} = 3$ ?',
          options: ['$1$', '$3$', '$4$', '$6$'],
          correctAnswerIndex: 1,
          explanation: '$GB = \\dfrac{1}{8}AB = \\dfrac{8}{8} = 1$, et $MG = 3GB = 3 \\times 1 = 3$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Ensembles de points par réduction barycentrique (synthèse)
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l02_barycentre_p06',
      order: 6,
      title: 'Ensembles de points par réduction barycentrique',
      summary:
        'Reconnaître une demi-droite, une médiatrice, un cercle de diamètre [GH] ou un cercle de centre G après réduction vectorielle.',
      conceptExplanation:
        "En réduisant les sommes vectorielles à l’aide des barycentres appropriés, on identifie immédiatement les quatre grands ensembles de points rencontrés en Première C :\n- **Colinéarité et même sens** : $\\overrightarrow{MG} = \\lambda\\overrightarrow{BC}$ avec $\\lambda \\ge 0$ (ou $\\lambda > 0$ si le vecteur nul est exclu) définit une **demi-droite** d’origine $G$, parallèle à $(BC)$ et de sens $\\overrightarrow{BC}$.\n- **Égalité de distances** : $MG = MH$ (obtenue par $\\|4\\overrightarrow{MG}\\| = 2\\|2\\overrightarrow{MH}\\|$) définit la **médiatrice** du segment $[GH]$.\n- **Orthogonalité** : $\\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0$ (obtenue par $(4\\overrightarrow{MG})\\cdot(2\\overrightarrow{MH}) = 0$) définit le **cercle de diamètre $[GH]$**.\n- **Norme constante** : $\\|4\\overrightarrow{MG}\\| = R \\iff MG = \\dfrac{R}{4}$ définit le **cercle de centre $G$ et de rayon $\\dfrac{R}{4}$**.\n\n**Réflexe géométrique** : lorsque le triangle $ABC$ est équilatéral de côté $a$ et $H$ est le milieu de $[BC]$, la hauteur vaut $AH = \\dfrac{a\\sqrt{3}}{2}$ et $(AH) \\perp (BC)$, ce qui permet de calculer $BG$ par le théorème de Pythagore dans le triangle rectangle $BHG$.",
      keyRule:
        'Après réduction par les barycentres G et H : MG = MH → médiatrice de [GH] ; MG·MH = 0 → cercle de diamètre [GH] ; MG = r → cercle de centre G et de rayon r.',
      formulas: [
        { name: 'Médiatrice de [GH]', formula: '\\|4\\overrightarrow{MG}\\| = 2\\|2\\overrightarrow{MH}\\| \\iff MG = MH' },
        { name: 'Cercle de diamètre [GH]', formula: '\\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0' },
        { name: 'Cercle de centre G', formula: '\\|k\\overrightarrow{MG}\\| = R \\iff MG = \\frac{R}{|k|}' },
      ],
      visualSchema: {
        type: 'custom_svg',
        title: 'Tableau de reconnaissance rapide des ensembles de points',
        tableData: {
          headers: ['Condition après réduction', 'Nature géométrique', 'Éléments caractéristiques'],
          rows: [
            ['$\\overrightarrow{MG} = \\lambda\\overrightarrow{u}\\,(\\lambda \\ge 0)$', 'Demi-droite', 'Origine $G$, direction et sens de $\\overrightarrow{u}$'],
            ['$MG = MH$', 'Droite', 'Médiatrice du segment $[GH]$'],
            ['$\\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0$', 'Cercle', 'Cercle de diamètre $[GH]$'],
            ['$MG = r\\,(r > 0)$', 'Cercle', 'Centre $G$, rayon $r$'],
          ],
        },
      },
      workedExample: {
        title: 'Synthèse complète sur un triangle équilatéral (Exercice 6)',
        statement:
          '$ABC$ est un triangle équilatéral de côté $AB = 8$, $H$ est le milieu de $[BC]$ et $G = \\operatorname{bar}\\{(A,2)\\,;\\,(B,1)\\,;\\,(C,1)\\}$.\nDétermine l’ensemble des points $M$ vérifiant : 1) $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 2\\|\\overrightarrow{MB}+\\overrightarrow{MC}\\|$ ; 2) $(2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC})\\cdot(\\overrightarrow{MB}+\\overrightarrow{MC}) = 0$ ; 3) $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 8\\sqrt{7}$, puis vérifie que $B$ appartient à ce dernier ensemble.',
        methodSteps: [
          'Comme $H$ est le milieu de $[BC]$, $\\overrightarrow{MB}+\\overrightarrow{MC} = 2\\overrightarrow{MH}$ et $G = \\operatorname{bar}\\{(A,2);(H,2)\\}$ est le milieu de $[AH]$, donc $2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC} = 4\\overrightarrow{MG}$.',
          '1) $\\|4\\overrightarrow{MG}\\| = 2\\|2\\overrightarrow{MH}\\| \\iff 4MG = 4MH \\iff MG = MH$ : médiatrice de $[GH]$.',
          '2) $(4\\overrightarrow{MG})\\cdot(2\\overrightarrow{MH}) = 0 \\iff \\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0$ : cercle de diamètre $[GH]$.',
          '3) $\\|4\\overrightarrow{MG}\\| = 8\\sqrt{7} \\iff MG = 2\\sqrt{7}$ : cercle de centre $G$ et de rayon $2\\sqrt{7}$. Comme $ABC$ est équilatéral de côté $8$, $AH = 4\\sqrt{3}$, $GH = 2\\sqrt{3}$ et $BH = 4$ avec $(GH) \\perp (BH)$. Par Pythagore, $BG^2 = 4^2 + (2\\sqrt{3})^2 = 16 + 12 = 28 = (2\\sqrt{7})^2$, donc $BG = 2\\sqrt{7}$ et $B$ est bien sur ce cercle.',
        ],
        conclusion: 'Médiatrice de $[GH]$, cercle de diamètre $[GH]$, et cercle de centre $G$ passant par $B$ (rayon $2\\sqrt{7}$).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Préparer les réductions vectorielles',
          stepTitle: 'Associer chaque somme à son barycentre',
          paragraphText:
            'Dans le triangle équilatéral $ABC$ avec $H$ milieu de $[BC]$ et $G = \\operatorname{bar}\\{(A,2)\\,;\\,(B,1)\\,;\\,(C,1)\\}$, on a $H = \\operatorname{bar}\\{(B,1)\\,;\\,(C,1)\\}$, donc $G = \\operatorname{bar}\\{(A,2)\\,;\\,(H,2)\\}$ est le milieu de $[AH]$. Pour tout $M$ : $2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC} = 4\\overrightarrow{MG}$ et $\\overrightarrow{MB}+\\overrightarrow{MC} = 2\\overrightarrow{MH}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q1',
            type: 'mcq',
            prompt: 'Soit $ABC$ équilatéral de côté $8$, $H$ le milieu de $[BC]$ et $G = \\operatorname{bar}\\{(A,2)\\,;\\,(B,1)\\,;\\,(C,1)\\}$. Quelle est la distance $GH$ ?',
            options: ['$4$', '$2\\sqrt{3}$', '$4\\sqrt{3}$', '$2\\sqrt{7}$'],
            correctAnswerIndex: 1,
            explanation: 'La hauteur $AH$ d’un triangle équilatéral de côté $8$ vaut $\\dfrac{8\\sqrt{3}}{2} = 4\\sqrt{3}$. Comme $G$ est le milieu de $[AH]$, $GH = 2\\sqrt{3}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Condition de colinéarité de même sens',
          stepTitle: 'Demi-droite d’origine G dirigée par BC',
          paragraphText:
            'L’ensemble $(D_1)$ des points $M$ tels que $2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}$ soit colinéaire à $\\overrightarrow{BC}$ et de même sens vérifie $4\\overrightarrow{MG} = \\lambda\\overrightarrow{BC}$ avec $\\lambda \\ge 0$ (ou $\\lambda > 0$ si le vecteur nul est exclu). C’est la demi-droite d’origine $G$, parallèle à $(BC)$ et de même sens que $\\overrightarrow{BC}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q2',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des points $M$ tels que $\\overrightarrow{MG} = \\lambda\\overrightarrow{BC}$ avec $\\lambda \\ge 0$ ?',
            options: [
              'La droite passant par $G$ et parallèle à $(BC)$',
              'La demi-droite d’origine $G$, parallèle à $(BC)$ et dirigée dans le sens de $\\overrightarrow{BC}$',
              'Le segment $[BC]$',
              'La médiatrice de $[BC]$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La condition $\\lambda \\ge 0$ restreint la droite passant par $G$ et parallèle à $(BC)$ au seul côté dirigé par $\\overrightarrow{BC}$ : c’est une demi-droite.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Égalité de normes à deux barycentres',
          stepTitle: 'Simplifier les facteurs devant les normes',
          paragraphText:
            'L’équation $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 2\\|\\overrightarrow{MB}+\\overrightarrow{MC}\\|$ devient $\\|4\\overrightarrow{MG}\\| = 2\\|2\\overrightarrow{MH}\\|$, soit $4MG = 4MH \\iff MG = MH$. L’ensemble $(D_2)$ est donc la médiatrice du segment $[GH]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q3',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des points $M$ vérifiant $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 2\\|\\overrightarrow{MB}+\\overrightarrow{MC}\\|$ ?',
            options: [
              'La médiatrice de $[BC]$',
              'La médiatrice de $[GH]$',
              'Le cercle de diamètre $[GH]$',
              'La droite $(AH)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On obtient $4MG = 2 \\times 2MH = 4MH$, soit $MG = MH$, ce qui caractérise la médiatrice de $[GH]$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Orthogonalité et produit scalaire nul',
          stepTitle: 'Caractérisation d’un cercle par un diamètre',
          paragraphText:
            'Dire que $2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}$ est orthogonal à $\\overrightarrow{MB}+\\overrightarrow{MC}$ équivaut à $(4\\overrightarrow{MG})\\cdot(2\\overrightarrow{MH}) = 0 \\iff \\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0$. Cet ensemble $(C_1)$ est le cercle de diamètre $[GH]$.',
          formula: { name: 'Cercle de diamètre [GH]', formula: '\\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0 \\iff M \\in \\mathcal{C}_{[GH]}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q4',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des points $M$ tels que $2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}$ soit orthogonal à $\\overrightarrow{MB}+\\overrightarrow{MC}$ ?',
            options: [
              'La médiatrice de $[GH]$',
              'Le cercle de diamètre $[GH]$',
              'Le cercle de centre $G$ et de rayon $GH$',
              'La droite $(GH)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'L’orthogonalité se traduit par $8\\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0 \\iff \\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0$, qui définit le cercle de diamètre $[GH]$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier de diviser par la somme des coefficients',
          stepTitle: 'Ne confonds pas ‖4 MG‖ = 8√7 avec MG = 8√7',
          paragraphText:
            'Dans $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 8\\sqrt{7}$, la réduction donne $\\|4\\overrightarrow{MG}\\| = 8\\sqrt{7}$, soit $4MG = 8\\sqrt{7}$. Il faut impérativement diviser par $4$ pour trouver le rayon : $MG = 2\\sqrt{7}$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q5',
            type: 'mcq',
            prompt: 'Quel est le rayon du cercle $(C_2)$ d’équation $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 8\\sqrt{7}$ ?',
            options: ['$8\\sqrt{7}$', '$4\\sqrt{7}$', '$2\\sqrt{7}$', '$\\sqrt{7}$'],
            correctAnswerIndex: 2,
            explanation: '$4MG = 8\\sqrt{7} \\implies MG = \\dfrac{8\\sqrt{7}}{4} = 2\\sqrt{7}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier qu’un point appartient à un cercle',
          stepTitle: 'Prouver que B appartient au cercle (C₂) par Pythagore',
          paragraphText:
            'Dans $ABC$ équilatéral de côté $8$, $(AH) \\perp (BC)$, $BH = 4$ et $GH = 2\\sqrt{3}$. Le triangle $BHG$ est rectangle en $H$, donc $BG^2 = BH^2 + HG^2 = 4^2 + (2\\sqrt{3})^2 = 16 + 12 = 28$. Or $(2\\sqrt{7})^2 = 4 \\times 7 = 28$, donc $BG = 2\\sqrt{7}$ : le point $B$ appartient à $(C_2)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q6',
            type: 'mcq',
            prompt: 'Dans le triangle rectangle $BHG$ avec $BH = 4$ et $GH = 2\\sqrt{3}$, combien vaut $BG$ ?',
            options: ['$2\\sqrt{5}$', '$2\\sqrt{7}$', '$6$', '$4\\sqrt{3}$'],
            correctAnswerIndex: 1,
            explanation: 'Par le théorème de Pythagore, $BG^2 = 4^2 + (2\\sqrt{3})^2 = 16 + 12 = 28$, d’où $BG = \\sqrt{28} = 2\\sqrt{7}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q1',
          type: 'mcq',
          prompt: 'Soit $ABC$ équilatéral de côté $8$, $H$ le milieu de $[BC]$ et $G = \\operatorname{bar}\\{(A,2)\\,;\\,(B,1)\\,;\\,(C,1)\\}$. Quelle est la distance $GH$ ?',
          options: ['$4$', '$2\\sqrt{3}$', '$4\\sqrt{3}$', '$2\\sqrt{7}$'],
          correctAnswerIndex: 1,
          explanation: 'La hauteur $AH$ d’un triangle équilatéral de côté $8$ vaut $\\dfrac{8\\sqrt{3}}{2} = 4\\sqrt{3}$. Comme $G$ est le milieu de $[AH]$, $GH = 2\\sqrt{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q2',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des points $M$ tels que $\\overrightarrow{MG} = \\lambda\\overrightarrow{BC}$ avec $\\lambda \\ge 0$ ?',
          options: [
            'La droite passant par $G$ et parallèle à $(BC)$',
            'La demi-droite d’origine $G$, parallèle à $(BC)$ et dirigée dans le sens de $\\overrightarrow{BC}$',
            'Le segment $[BC]$',
            'La médiatrice de $[BC]$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La condition $\\lambda \\ge 0$ restreint la droite passant par $G$ et parallèle à $(BC)$ au seul côté dirigé par $\\overrightarrow{BC}$ : c’est une demi-droite.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q3',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des points $M$ vérifiant $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 2\\|\\overrightarrow{MB}+\\overrightarrow{MC}\\|$ ?',
          options: [
            'La médiatrice de $[BC]$',
            'La médiatrice de $[GH]$',
            'Le cercle de diamètre $[GH]$',
            'La droite $(AH)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On obtient $4MG = 2 \\times 2MH = 4MH$, soit $MG = MH$, ce qui caractérise la médiatrice de $[GH]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q4',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des points $M$ tels que $2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}$ soit orthogonal à $\\overrightarrow{MB}+\\overrightarrow{MC}$ ?',
          options: [
            'La médiatrice de $[GH]$',
            'Le cercle de diamètre $[GH]$',
            'Le cercle de centre $G$ et de rayon $GH$',
            'La droite $(GH)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'L’orthogonalité se traduit par $8\\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0 \\iff \\overrightarrow{MG}\\cdot\\overrightarrow{MH} = 0$, qui définit le cercle de diamètre $[GH]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q5',
          type: 'mcq',
          prompt: 'Quel est le rayon du cercle $(C_2)$ d’équation $\\|2\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}\\| = 8\\sqrt{7}$ ?',
          options: ['$8\\sqrt{7}$', '$4\\sqrt{7}$', '$2\\sqrt{7}$', '$\\sqrt{7}$'],
          correctAnswerIndex: 2,
          explanation: '$4MG = 8\\sqrt{7} \\implies MG = \\dfrac{8\\sqrt{7}}{4} = 2\\sqrt{7}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l02_barycentre_p06_q6',
          type: 'mcq',
          prompt: 'Dans le triangle rectangle $BHG$ avec $BH = 4$ et $GH = 2\\sqrt{3}$, combien vaut $BG$ ?',
          options: ['$2\\sqrt{5}$', '$2\\sqrt{7}$', '$6$', '$4\\sqrt{3}$'],
          correctAnswerIndex: 1,
          explanation: 'Par le théorème de Pythagore, $BG^2 = 4^2 + (2\\sqrt{3})^2 = 16 + 12 = 28$, d’où $BG = \\sqrt{28} = 2\\sqrt{7}$.',
        },
      ],
    },
  ],
};

