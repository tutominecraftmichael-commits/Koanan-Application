import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 16 : Vecteurs de l’espace.pdf » (format v2).
export const MATHS_1RE_C_L16_VECTEURS_ESPACE: CurriculumChapter = {
  id: 'premiere_c_maths_geometrie_l16_vecteurs_espace',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 16,
  title: 'Leçon 16 : Vecteurs de l’espace',
  summary:
    'Vecteurs colinéaires, orthogonaux et coplanaires, combinaison linéaire et caractérisation de droites et plans, bases et repères de l’espace (abscisse, ordonnée, cote), et produit scalaire dans l’espace (définition géométrique et expression analytique).',
  officialVolumeHours: 12,
  contentVersion: 2,
  source: '1ère C - Leçon 16 : Vecteurs de l’espace.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Vecteurs colinéaires, orthogonaux et caractérisation de droites
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01',
      order: 1,
      title: 'Vecteurs colinéaires, vecteurs orthogonaux et droites de l’espace',
      summary:
        'Extension des opérations vectorielles à l’espace W, colinéarité u = kv, droites D(A, u), demi-droites, segments et orthogonalité de deux vecteurs.',
      conceptExplanation:
        "Toutes les règles de calcul sur les vecteurs du plan (égalité, somme, relation de Chasles, multiplication par un réel) se généralisent à l’ensemble $\\mathcal{W}$ des vecteurs de l’espace $(\\mathcal{E})$.\n\n1. **Vecteurs colinéaires** :\nDeux vecteurs $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** si l’un au moins est nul ou s’ils ont la même direction, c’est-à-dire s’il existe un réel $k$ tel que $\\vec{u} = k\\vec{v}$ ou $\\vec{v} = k\\vec{u}$.\n\nSoit $A$ un point de l’espace et $\\vec{u}$ un vecteur non nul :\n- L’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\vec{u}$ ($k \\in \\mathbb{R}$) est la **droite** passant par $A$ et de vecteur directeur $\\vec{u}$, notée $\\mathcal{D}(A\\,;\\,\\vec{u})$.\n- En particulier, pour $A \\neq B$, $\\overrightarrow{AM} = k\\overrightarrow{AB}$ décrit la droite $(AB)$ si $k \\in \\mathbb{R}$, la **demi-droite** $[AB)$ si $k \\in [0\\,;\\,+\\infty[$ et le **segment** $[AB]$ si $k \\in [0\\,;\\,1]$.\n\n2. **Vecteurs orthogonaux** :\nDeux vecteurs $\\vec{u}$ et $\\vec{v}$ sont **orthogonaux** (noté $\\vec{u} \\perp \\vec{v}$) si l’un au moins est nul ou si leurs directions sont orthogonales (c’est-à-dire s’ils dirigent deux droites orthogonales de l’espace).",
      keyRule:
        'AM = k AB décrit la droite (AB) pour k ∈ ℝ, la demi-droite [AB) pour k ⩾ 0 et le segment [AB] pour k ∈ [0 ; 1]. Deux vecteurs non nuls sont orthogonaux ssi ils dirigent deux droites orthogonales.',
      formulas: [
        { name: 'Colinéarité', formula: '\\vec{u} \\text{ et } \\vec{v} \\text{ colinéaires} \\iff \\exists k \\in \\mathbb{R},\\; \\vec{u} = k\\vec{v} \\text{ ou } \\vec{v} = k\\vec{u}' },
        { name: 'Droite de repère (A, u)', formula: 'M \\in \\mathcal{D}(A\\,;\\,\\vec{u}) \\iff \\exists k \\in \\mathbb{R},\\; \\overrightarrow{AM} = k\\vec{u}' },
        { name: 'Segment et demi-droite', formula: 'M \\in [AB] \\iff \\overrightarrow{AM} = k\\overrightarrow{AB},\\; k \\in [0\\,;\\,1]' },
      ],
      workedExample: {
        title: 'Colinéarité et orthogonalité dans un parallélogramme et un pavé droit',
        statement:
          '1) $ABCD$ est un parallélogramme et $I$ est le milieu de $[AB]$. Exprime $\\overrightarrow{AI}$ en fonction de $\\overrightarrow{DC}$.\n2) $ABCDEFGH$ est un pavé droit ; $\\vec{u}$ dirige $(DH)$ et $\\vec{v}$ dirige $(BC)$. Justifie que $\\vec{u} \\perp \\vec{v}$.',
        methodSteps: [
          '1) $I$ est le milieu de $[AB]$, donc $\\overrightarrow{AI} = \\dfrac{1}{2}\\overrightarrow{AB}$. Comme $ABCD$ est un parallélogramme, $\\overrightarrow{AB} = \\overrightarrow{DC}$, d’où $\\overrightarrow{AI} = \\dfrac{1}{2}\\overrightarrow{DC}$ : les deux vecteurs sont colinéaires.',
          '2) $ABCDEFGH$ est un pavé droit, donc l’arête verticale $(HD)$ est perpendiculaire à la face inférieure $(ABC)$ ; par suite $(HD)$ est orthogonale à $(BC) \\subset (ABC)$.',
          'Comme $\\vec{u}$ et $\\vec{v}$ sont des vecteurs directeurs respectifs de $(HD)$ et $(BC)$, on a $\\vec{u} \\perp \\vec{v}$.',
        ],
        conclusion: '$\\overrightarrow{AI} = \\dfrac{1}{2}\\overrightarrow{DC}$ et $\\vec{u} \\perp \\vec{v}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Vecteurs colinéaires dans l’espace',
          stepTitle: 'Même direction ou vecteur nul',
          paragraphText:
            'Dans l’espace comme dans le plan, deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires lorsqu’il existe un réel $k$ tel que $\\vec{u} = k\\vec{v}$ ou $\\vec{v} = k\\vec{u}$. Le vecteur nul $\\vec{0}$ est colinéaire à tout vecteur de $\\mathcal{W}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q1',
            type: 'mcq',
            prompt: 'Soit $ABCDEFGH$ un cube et $I$ le milieu de $[EF]$. Quelle égalité vectorielle lie $\\overrightarrow{EI}$ et $\\overrightarrow{CD}$ ?',
            options: [
              '$\\overrightarrow{EI} = \\dfrac{1}{2}\\overrightarrow{CD}$',
              '$\\overrightarrow{EI} = -\\dfrac{1}{2}\\overrightarrow{CD}$',
              '$\\overrightarrow{EI} = 2\\overrightarrow{CD}$',
              '$\\overrightarrow{EI}$ et $\\overrightarrow{CD}$ ne sont pas colinéaires',
            ],
            correctAnswerIndex: 1,
            explanation: 'On a $\\overrightarrow{EI} = \\dfrac{1}{2}\\overrightarrow{EF} = \\dfrac{1}{2}\\overrightarrow{AB}$, et dans le cube $\\overrightarrow{AB} = -\\overrightarrow{CD}$, donc $\\overrightarrow{EI} = -\\dfrac{1}{2}\\overrightarrow{CD}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Droite de repère (A, u)',
          stepTitle: 'Caractériser une droite de l’espace par un point et un vecteur',
          paragraphText:
            'Étant donné un point $A$ et un vecteur non nul $\\vec{u}$, l’ensemble des points $M$ de l’espace vérifiant $\\overrightarrow{AM} = k\\vec{u}$ ($k \\in \\mathbb{R}$) est la droite $\\mathcal{D}(A\\,;\\,\\vec{u})$ passant par $A$ et dirigée par $\\vec{u}$.',
          formula: { name: 'Droite D(A, u)', formula: '\\overrightarrow{AM} = k\\vec{u}\\; (k \\in \\mathbb{R}) \\iff M \\in \\mathcal{D}(A\\,;\\,\\vec{u})' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q2',
            type: 'mcq',
            prompt: 'Soit $B$ un point de l’espace et $\\vec{v}$ un vecteur non nul. Quel est l’ensemble des points $M$ tels que $\\overrightarrow{BM} = k\\vec{v}$ avec $k \\in \\mathbb{R}$ ?',
            options: [
              'Le segment $[BM]$',
              'Le plan passant par $B$ de vecteur normal $\\vec{v}$',
              'La droite $\\mathcal{D}(B\\,;\\,\\vec{v})$',
              'La demi-droite d’origine $B$ dirigée par $\\vec{v}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Comme $k$ parcourt tout $\\mathbb{R}$, $M$ décrit toute la droite passant par $B$ et de vecteur directeur $\\vec{v}$, notée $\\mathcal{D}(B\\,;\\,\\vec{v})$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Demi-droite et segment par restriction sur k',
          stepTitle: 'Lire l’intervalle de variation du paramètre k',
          paragraphText:
            'Si $\\overrightarrow{AM} = k\\overrightarrow{AB}$ ($A \\neq B$), restreindre $k$ à $[0\\,;\\,+\\infty[$ donne la demi-droite $[AB)$ (vecteur de même sens que $\\overrightarrow{AB}$), et restreindre $k$ à $[0\\,;\\,1]$ donne le segment $[AB]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q3',
            type: 'mcq',
            prompt: 'Quel ensemble décrivent les points $M$ de l’espace vérifiant $\\overrightarrow{AM} = k\\overrightarrow{AB}$ ($A \\neq B$) lorsque $k \\in [0\\,;\\,1]$ ?',
            options: [
              'La droite $(AB)$',
              'La demi-droite $[AB)$',
              'Le segment $[AB]$',
              'Le cercle de diamètre $[AB]$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Pour $k=0$ on a $M=A$, pour $k=1$ on a $M=B$, et pour $0 \\le k \\le 1$, $M$ parcourt exactement le segment $[AB]$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Vecteurs orthogonaux de l’espace',
          stepTitle: 'Justifier u ⊥ v via les droites directrices',
          paragraphText:
            'Deux vecteurs non nuls $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si et seulement si leurs directions (deux droites passant par un même point et dirigées par $\\vec{u}$ et $\\vec{v}$) sont orthogonales. On utilise donc souvent l’orthogonalité droite-plan dans les solides.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q4',
            type: 'mcq',
            prompt: 'Dans un pavé droit $ABCDEFGH$, lequel des couples de vecteurs suivants N’EST PAS orthogonal ?',
            options: [
              '$\\overrightarrow{AE}$ et $\\overrightarrow{BC}$',
              '$\\overrightarrow{AB}$ et $\\overrightarrow{DH}$',
              '$\\overrightarrow{EF}$ et $\\overrightarrow{CD}$',
              '$\\overrightarrow{AD}$ et $\\overrightarrow{HG}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Dans le pavé droit, $\\overrightarrow{EF} = \\overrightarrow{AB} = -\\overrightarrow{CD}$, donc $\\overrightarrow{EF}$ et $\\overrightarrow{CD}$ sont colinéaires (de sens opposés), et non orthogonaux.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Vecteur nul colinéaire et orthogonal à tout vecteur',
          stepTitle: 'Le vecteur nul vérifie les deux propriétés à la fois',
          paragraphText:
            'N’oublie jamais que $\\vec{0} = 0\\vec{u}$, donc le vecteur nul $\\vec{0}$ est à la fois **colinéaire** à tout vecteur et **orthogonal** à tout vecteur. Voilà pourquoi, pour définir une droite $\\mathcal{D}(A\\,;\\,\\vec{u})$, on exige impérativement $\\vec{u} \\neq \\vec{0}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q5',
            type: 'mcq',
            prompt: 'Pour que l’ensemble des points $M$ vérifiant $\\overrightarrow{AM} = k\\vec{u}$ ($k \\in \\mathbb{R}$) soit une droite, quelle condition faut-il imposer à $\\vec{u}$ ?',
            options: [
              '$\\vec{u}$ doit être unitaire ($\\|\\vec{u}\\| = 1$)',
              '$\\vec{u}$ doit être non nul ($\\vec{u} \\neq \\vec{0}$)',
              '$\\vec{u}$ doit être orthogonal à $\\overrightarrow{OA}$',
              'Aucune condition sur $\\vec{u}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Si $\\vec{u} = \\vec{0}$, alors $\\overrightarrow{AM} = \\vec{0}$ pour tout $k$, donc l’ensemble est réduit au singleton $\\{A\\}$ et non à une droite.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Relier parallélisme de droites et colinéarité',
          stepTitle: 'Prouver que deux vecteurs de l’espace sont colinéaires',
          paragraphText:
            'Dans le cube $ABCDEFGH$, si $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$, alors $\\overrightarrow{IJ} = \\overrightarrow{ID} + \\overrightarrow{DB} + \\overrightarrow{BJ}$... ou plus vite : dans le triangle $GDB$, $\\overrightarrow{IJ} = \\dfrac{1}{2}\\overrightarrow{DB}$ par la droite des milieux vectorielle.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q6',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Quelle relation vectorielle relie $\\overrightarrow{IJ}$ et $\\overrightarrow{DB}$ ?',
            options: [
              '$\\overrightarrow{IJ} = \\dfrac{1}{2}\\overrightarrow{BD}$',
              '$\\overrightarrow{IJ} = \\dfrac{1}{2}\\overrightarrow{DB}$',
              '$\\overrightarrow{IJ} = 2\\overrightarrow{DB}$',
              '$\\overrightarrow{IJ} = -\\overrightarrow{DB}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{IJ} = \\overrightarrow{IG} + \\overrightarrow{GJ} = \\dfrac{1}{2}\\overrightarrow{DG} + \\dfrac{1}{2}\\overrightarrow{GB} = \\dfrac{1}{2}\\overrightarrow{DB}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q1',
          type: 'mcq',
          prompt: 'Soit $ABCDEFGH$ un cube et $I$ le milieu de $[EF]$. Quelle égalité vectorielle lie $\\overrightarrow{EI}$ et $\\overrightarrow{CD}$ ?',
          options: [
            '$\\overrightarrow{EI} = \\dfrac{1}{2}\\overrightarrow{CD}$',
            '$\\overrightarrow{EI} = -\\dfrac{1}{2}\\overrightarrow{CD}$',
            '$\\overrightarrow{EI} = 2\\overrightarrow{CD}$',
            '$\\overrightarrow{EI}$ et $\\overrightarrow{CD}$ ne sont pas colinéaires',
          ],
          correctAnswerIndex: 1,
          explanation: 'On a $\\overrightarrow{EI} = \\dfrac{1}{2}\\overrightarrow{EF} = \\dfrac{1}{2}\\overrightarrow{AB}$, et dans le cube $\\overrightarrow{AB} = -\\overrightarrow{CD}$, donc $\\overrightarrow{EI} = -\\dfrac{1}{2}\\overrightarrow{CD}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q2',
          type: 'mcq',
          prompt: 'Soit $B$ un point de l’espace et $\\vec{v}$ un vecteur non nul. Quel est l’ensemble des points $M$ tels que $\\overrightarrow{BM} = k\\vec{v}$ avec $k \\in \\mathbb{R}$ ?',
          options: [
            'Le segment $[BM]$',
            'Le plan passant par $B$ de vecteur normal $\\vec{v}$',
            'La droite $\\mathcal{D}(B\\,;\\,\\vec{v})$',
            'La demi-droite d’origine $B$ dirigée par $\\vec{v}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Comme $k$ parcourt tout $\\mathbb{R}$, $M$ décrit toute la droite passant par $B$ et de vecteur directeur $\\vec{v}$, notée $\\mathcal{D}(B\\,;\\,\\vec{v})$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q3',
          type: 'mcq',
          prompt: 'Quel ensemble décrivent les points $M$ de l’espace vérifiant $\\overrightarrow{AM} = k\\overrightarrow{AB}$ ($A \\neq B$) lorsque $k \\in [0\\,;\\,1]$ ?',
          options: [
            'La droite $(AB)$',
            'La demi-droite $[AB)$',
            'Le segment $[AB]$',
            'Le cercle de diamètre $[AB]$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Pour $k=0$ on a $M=A$, pour $k=1$ on a $M=B$, et pour $0 \\le k \\le 1$, $M$ parcourt exactement le segment $[AB]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q4',
          type: 'mcq',
          prompt: 'Dans un pavé droit $ABCDEFGH$, lequel des couples de vecteurs suivants N’EST PAS orthogonal ?',
          options: [
            '$\\overrightarrow{AE}$ et $\\overrightarrow{BC}$',
            '$\\overrightarrow{AB}$ et $\\overrightarrow{DH}$',
            '$\\overrightarrow{EF}$ et $\\overrightarrow{CD}$',
            '$\\overrightarrow{AD}$ et $\\overrightarrow{HG}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Dans le pavé droit, $\\overrightarrow{EF} = \\overrightarrow{AB} = -\\overrightarrow{CD}$, donc $\\overrightarrow{EF}$ et $\\overrightarrow{CD}$ sont colinéaires (de sens opposés), et non orthogonaux.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q5',
          type: 'mcq',
          prompt: 'Pour que l’ensemble des points $M$ vérifiant $\\overrightarrow{AM} = k\\vec{u}$ ($k \\in \\mathbb{R}$) soit une droite, quelle condition faut-il imposer à $\\vec{u}$ ?',
          options: [
            '$\\vec{u}$ doit être unitaire ($\\|\\vec{u}\\| = 1$)',
            '$\\vec{u}$ doit être non nul ($\\vec{u} \\neq \\vec{0}$)',
            '$\\vec{u}$ doit être orthogonal à $\\overrightarrow{OA}$',
            'Aucune condition sur $\\vec{u}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Si $\\vec{u} = \\vec{0}$, alors $\\overrightarrow{AM} = \\vec{0}$ pour tout $k$, donc l’ensemble est réduit au singleton $\\{A\\}$ et non à une droite.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q6',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Quelle relation vectorielle relie $\\overrightarrow{IJ}$ et $\\overrightarrow{DB}$ ?',
          options: [
            '$\\overrightarrow{IJ} = \\dfrac{1}{2}\\overrightarrow{BD}$',
            '$\\overrightarrow{IJ} = \\dfrac{1}{2}\\overrightarrow{DB}$',
            '$\\overrightarrow{IJ} = 2\\overrightarrow{DB}$',
            '$\\overrightarrow{IJ} = -\\overrightarrow{DB}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{IJ} = \\overrightarrow{IG} + \\overrightarrow{GJ} = \\dfrac{1}{2}\\overrightarrow{DG} + \\dfrac{1}{2}\\overrightarrow{GB} = \\dfrac{1}{2}\\overrightarrow{DB}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Vecteurs coplanaires et plan de repère (A, u, v)
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02',
      order: 2,
      title: 'Vecteurs coplanaires et plan de repère (A, u, v)',
      summary:
        'Caractérisation d’un plan P(A, u, v) par combinaison linéaire AM = λu + μv, coplanarité de trois vecteurs et preuve d’appartenance de quatre points à un même plan.',
      conceptExplanation:
        "1. **Plan de repère $(A\\,;\\,\\vec{u},\\,\\vec{v})$** :\nSoit $A$ un point de l’espace, et soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs **non colinéaires**. L’ensemble des points $M$ tels que :\n$$\\overrightarrow{AM} = \\lambda\\vec{u} + \\mu\\vec{v} \\qquad ((\\lambda\\,;\\,\\mu) \\in \\mathbb{R}^2)$$\nest le **plan** passant par $A$ et de vecteurs directeurs $\\vec{u}$ et $\\vec{v}$, noté $\\mathcal{P}(A\\,;\\,\\vec{u},\\,\\vec{v})$. On dit que $\\overrightarrow{AM}$ est une **combinaison linéaire** de $\\vec{u}$ et $\\vec{v}$.\n\n2. **Vecteurs coplanaires** :\nTrois vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont dits **coplanaires** si, en choisissant un point $O$ et les points $A, B, C$ tels que $\\overrightarrow{OA} = \\vec{u}$, $\\overrightarrow{OB} = \\vec{v}$ et $\\overrightarrow{OC} = \\vec{w}$, les quatre points $O, A, B, C$ appartiennent à un même plan (autrement dit, on peut représenter ces trois vecteurs dans un même plan).\n\n**Propriétés caractéristiques** :\n- Si $\\vec{u}$ et $\\vec{v}$ sont **non colinéaires** : $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires $\\iff \\exists (\\lambda\\,;\\,\\mu) \\in \\mathbb{R}^2,\\; \\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}$.\n- En toute généralité : $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires $\\iff \\exists (\\lambda, \\mu, \\nu) \\neq (0, 0, 0),\\; \\lambda\\vec{u} + \\mu\\vec{v} + \\nu\\vec{w} = \\vec{0}$.\n- Remarque : deux vecteurs quelconques sont toujours coplanaires ; et dès que deux des trois vecteurs sont colinéaires, les trois vecteurs sont nécessairement coplanaires.",
      keyRule:
        'Trois vecteurs u, v, w (avec u, v non colinéaires) sont coplanaires ssi w = λu + μv. Quatre points E, C, G, K sont coplanaires ssi les vecteurs GE, GC, GK sont coplanaires (par ex. liés par une relation linéaire non triviale égale à 0).',
      formulas: [
        { name: 'Plan P(A, u, v)', formula: 'M \\in \\mathcal{P}(A\\,;\\,\\vec{u},\\,\\vec{v}) \\iff \\exists (\\lambda\\,;\\,\\mu) \\in \\mathbb{R}^2,\\; \\overrightarrow{AM} = \\lambda\\vec{u} + \\mu\\vec{v}' },
        { name: 'Coplanarité (u, v non colinéaires)', formula: '\\vec{u},\\,\\vec{v},\\,\\vec{w} \\text{ coplanaires} \\iff \\exists (\\lambda\\,;\\,\\mu) \\in \\mathbb{R}^2,\\; \\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}' },
        { name: 'Coplanarité symétrique', formula: '\\exists (\\lambda,\\mu,\\nu) \\neq (0,0,0),\\; \\lambda\\vec{u} + \\mu\\vec{v} + \\nu\\vec{w} = \\vec{0}' },
      ],
      workedExample: {
        title: 'Démontrer la coplanarité de 3 vecteurs puis de 4 points par barycentre',
        statement:
          '1) Dans une base $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$, montre que $\\vec{u} = 2\\vec{i}+\\vec{j}-\\vec{k}$, $\\vec{v} = 3\\vec{i}+2\\vec{j}+4\\vec{k}$ et $\\vec{w} = \\vec{i}-6\\vec{k}$ sont coplanaires.\n2) Soit $EFCD$ un tétraèdre, $G = \\operatorname{bar}\\{(E,-1)\\,;\\,(F,2)\\,;\\,(C,1)\\,;\\,(D,2)\\}$ et $K$ le milieu de $[FD]$. Justifie que $E, C, G, K$ sont coplanaires.',
        methodSteps: [
          '1) Cherchons un triplet non nul $(\\alpha, \\beta, \\gamma)$ tel que $\\alpha\\vec{u} + \\beta\\vec{v} + \\gamma\\vec{w} = \\vec{0}$. En projetant sur la base $(\\vec{i}, \\vec{j}, \\vec{k})$, on obtient le système : $2\\alpha + 3\\beta + \\gamma = 0$, $\\alpha + 2\\beta = 0$ et $-\\alpha + 4\\beta - 6\\gamma = 0$.',
          'De $\\alpha = -2\\beta$, les deux autres équations donnent $-\\beta + \\gamma = 0$ et $6\\beta - 6\\gamma = 0$. Pour $\\beta = 1$, on a $\\alpha = -2$ et $\\gamma = 1$ : ainsi $-2\\vec{u} + \\vec{v} + \\vec{w} = \\vec{0}$ (ou $\\vec{w} = 2\\vec{u} - \\vec{v}$), donc $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires.',
          '2) Par définition de $G$, $-\\overrightarrow{GE} + 2\\overrightarrow{GF} + \\overrightarrow{GC} + 2\\overrightarrow{GD} = \\vec{0}$. Comme $K$ est le milieu de $[FD]$, $\\overrightarrow{KF} + \\overrightarrow{KD} = \\vec{0}$, donc $2\\overrightarrow{GF} + 2\\overrightarrow{GD} = 4\\overrightarrow{GK}$.',
          'Il vient $-\\overrightarrow{GE} + 4\\overrightarrow{GK} + \\overrightarrow{GC} = \\vec{0}$, soit $\\overrightarrow{GE} = 4\\overrightarrow{GK} + \\overrightarrow{GC}$ : les vecteurs $\\overrightarrow{GE}, \\overrightarrow{GK}, \\overrightarrow{GC}$ sont coplanaires, donc $E, C, G, K$ sont coplanaires.',
        ],
        conclusion: '1) $\\vec{w} = 2\\vec{u} - \\vec{v}$ donc coplanaires. 2) $\\overrightarrow{GE} = 4\\overrightarrow{GK} + \\overrightarrow{GC}$ donc $E, C, G, K$ sont coplanaires.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Plan de repère (A, u, v)',
          stepTitle: 'Appartenir à un plan par combinaison linéaire',
          paragraphText:
            'Dans le cube $ABCDEFGH$ ($I$ milieu de $[BC]$), on écrit $\\overrightarrow{AI} = \\overrightarrow{AB} + \\dfrac{1}{2}\\overrightarrow{BC}$. Or $\\overrightarrow{AB} = \\overrightarrow{EF}$ et $\\overrightarrow{BC} = \\overrightarrow{AD}$, donc $\\overrightarrow{AI} = \\dfrac{1}{2}\\overrightarrow{AD} + \\overrightarrow{EF}$, ce qui prouve que $I \\in \\mathcal{P}(A\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{EF})$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q1',
            type: 'mcq',
            prompt: 'Soit $ABCDEFGH$ un cube et $I$ le milieu de $[CG]$. Dans quel plan de repère le point $I$ appartient-il grâce à $\\overrightarrow{AI} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\dfrac{1}{2}\\overrightarrow{AE}$ ?',
            options: [
              '$\\mathcal{P}(A\\,;\\,\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD})$',
              '$\\mathcal{P}(A\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{AE})$',
              '$\\mathcal{P}(A\\,;\\,\\overrightarrow{EF}\\,;\\,\\overrightarrow{EH})$',
              '$\\mathcal{P}(B\\,;\\,\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD})$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Puisque $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$, on a $\\overrightarrow{AI} = \\overrightarrow{AC} + \\dfrac{1}{2}\\overrightarrow{AE}$, qui est bien une combinaison linéaire de $\\overrightarrow{AC}$ et $\\overrightarrow{AE}$ depuis le point $A$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Reconnaître des vecteurs coplanaires dans un solide',
          stepTitle: 'Comparer les plans de représentants dans un pavé',
          paragraphText:
            'Pour savoir si trois vecteurs donnés sur un cube ou un pavé sont coplanaires, essaie d’exprimer l’un comme combinaison linéaire des deux autres à l’aide de vecteurs égaux sur des arêtes parallèles.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q2',
            type: 'mcq',
            prompt: 'Dans un pavé droit $ABCDEFGH$, lesquels de ces trois vecteurs NE SONT PAS coplanaires ?',
            options: [
              '$\\overrightarrow{DB}$, $\\overrightarrow{EG}$ et $\\overrightarrow{AB}$',
              '$\\overrightarrow{AG}$, $\\overrightarrow{AE}$ et $\\overrightarrow{FE} - \\overrightarrow{FG}$',
              '$\\overrightarrow{DF}$, $\\overrightarrow{FE} - \\overrightarrow{HE}$ et $\\overrightarrow{AC}$',
              '$\\overrightarrow{AB}$, $\\overrightarrow{AE}$ et $\\overrightarrow{AF}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Pour le premier cas, $\\overrightarrow{EG} = \\overrightarrow{AC}$ est dans $(ABD)$. Pour le deuxième, $\\overrightarrow{FE}-\\overrightarrow{FG} = \\overrightarrow{GE}$ et $\\overrightarrow{AG} = \\overrightarrow{AE}+\\overrightarrow{EG}$. Pour le troisième, $\\overrightarrow{FE}-\\overrightarrow{HE} = \\overrightarrow{FH} = \\overrightarrow{BD}$, or $\\overrightarrow{BD}, \\overrightarrow{AC}$ engendrent la face horizontale $(ABC)$ tandis que $\\overrightarrow{DF}$ sort de ce plan : ils ne sont pas coplanaires.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Tester la coplanarité en base (i, j, k)',
          stepTitle: 'Résoudre w = λu + μv dans la base',
          paragraphText:
            'Si $\\vec{u}, \\vec{v}, \\vec{w}$ sont exprimés dans une base $(\\vec{i}, \\vec{j}, \\vec{k})$, poser $\\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}$ conduit à un système linéaire de $3$ équations à $2$ inconnues $(\\lambda, \\mu)$. Si les trois équations sont compatibles, les vecteurs sont coplanaires !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q3',
            type: 'mcq',
            prompt: 'Soient $\\vec{u} = \\vec{i} + 2\\vec{j} - \\vec{k}$, $\\vec{v} = \\vec{i} - \\vec{j} + 2\\vec{k}$ et $\\vec{w} = 3\\vec{i} + 3\\vec{j}$. Ces vecteurs sont-ils coplanaires ?',
            options: [
              'Non, car la composante selon $\\vec{k}$ de $\\vec{w}$ est nulle',
              'Oui, car $\\vec{w} = 2\\vec{u} + \\vec{v}$',
              'Oui, car $\\vec{w} = \\vec{u} + 2\\vec{v}$',
              'Non, ils forment une base',
            ],
            correctAnswerIndex: 1,
            explanation: 'Vérifions $2\\vec{u} + \\vec{v} = (2+1)\\vec{i} + (4-1)\\vec{j} + (-2+2)\\vec{k} = 3\\vec{i} + 3\\vec{j} = \\vec{w}$ ! Donc $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Prouver que 4 points sont coplanaires',
          stepTitle: 'Utiliser un barycentre ou une colinéarité de vecteurs',
          paragraphText:
            'Quatre points $A, B, C, K$ sont coplanaires si et seulement si trois vecteurs issus d’un même sommet (par ex. $\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AK}$) sont coplanaires. En particulier, si $\\overrightarrow{AK} = \\frac{2}{5}\\overrightarrow{BC}$, alors $\\overrightarrow{AK}$ est colinéaire à $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$, donc $A, B, C, K$ sont coplanaires !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q4',
            type: 'mcq',
            prompt: 'Si quatre points $E, F, G, H$ vérifient $2\\overrightarrow{EF} - 3\\overrightarrow{EG} + \\overrightarrow{EH} = \\vec{0}$, que peut-on en déduire ?',
            options: [
              'Les points $E, F, G, H$ forment un tétraèdre régulier',
              'Les vecteurs $\\overrightarrow{EF}, \\overrightarrow{EG}, \\overrightarrow{EH}$ sont coplanaires, donc $E, F, G, H$ appartiennent à un même plan',
              'Les points $F, G, H$ sont alignés',
              'Les points $E, F, G, H$ ne sont pas coplanaires',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{EH} = -2\\overrightarrow{EF} + 3\\overrightarrow{EG}$ est une combinaison linéaire de $\\overrightarrow{EF}$ et $\\overrightarrow{EG}$, donc $H \\in (EFG)$ (ou les quatre points sont coplanaires).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier le cas où deux vecteurs sont colinéaires',
          stepTitle: 'Deux vecteurs colinéaires rendent automatiquement les trois coplanaires',
          paragraphText:
            'Attention à la définition : écrire $\\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}$ ne caractérise la coplanarité que si $\\vec{u}$ et $\\vec{v}$ ne sont **pas colinéaires**. Si $\\vec{u}$ et $\\vec{v}$ sont colinéaires, on ne peut pas toujours écrire $\\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}$, et pourtant les trois vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ sont toujours coplanaires !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q5',
            type: 'mcq',
            prompt: 'Soient $\\vec{u}, \\vec{v}, \\vec{w}$ trois vecteurs de l’espace tels que $\\vec{u} = 2\\vec{v}$ ($\\vec{v} \\neq \\vec{0}$), et $\\vec{w}$ quelconque. Que peut-on dire ?',
            options: [
              'Ils sont coplanaires uniquement si $\\vec{w}$ est colinéaire à $\\vec{u}$',
              'Ils sont toujours coplanaires, car $\\vec{u} - 2\\vec{v} + 0\\vec{w} = \\vec{0}$ avec $(1,-2,0) \\neq (0,0,0)$',
              'Ils forment une base si $\\vec{w} \\perp \\vec{u}$',
              'On ne peut pas conclure',
            ],
            correctAnswerIndex: 1,
            explanation: 'Si deux des trois vecteurs sont colinéaires, deux vecteurs suffisent à engendrer un plan contenant un représentant du troisième (deux vecteurs étant toujours coplanaires).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Coplanarité via le milieu et le barycentre',
          stepTitle: 'Exprimer 2 GF + 2 GD = 4 GK quand K est milieu de [FD]',
          paragraphText:
            'Dans un tétraèdre $EFCD$, si $G = \\operatorname{bar}\\{(E,-1),(F,2),(C,1),(D,2)\\}$ et $K$ est le milieu de $[FD]$, on associe $(F,2)$ et $(D,2)$ en $(K,4)$, ce qui donne $G = \\operatorname{bar}\\{(E,-1),(K,4),(C,1)\\}$ : $G$ appartient immédiatement au plan $(EKC)$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q6',
            type: 'mcq',
            prompt: 'Dans un tétraèdre $ABCD$, $I$ est le milieu de $[BC]$ et $G = \\operatorname{bar}\\{(A,1),(B,2),(C,2),(D,-1)\\}$. Dans quel plan $G$ se situe-t-il ?',
            options: [
              '$(ABC)$',
              '$(BCD)$',
              '$(AID)$',
              '$(ABD)$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Par associativité, le barycentre partiel de $(B,2)$ et $(C,2)$ est $(I,4)$, donc $G = \\operatorname{bar}\\{(A,1),(I,4),(D,-1)\\}$, ce qui place $G$ dans le plan $(AID)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q1',
          type: 'mcq',
          prompt: 'Soit $ABCDEFGH$ un cube et $I$ le milieu de $[CG]$. Dans quel plan de repère le point $I$ appartient-il grâce à $\\overrightarrow{AI} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\dfrac{1}{2}\\overrightarrow{AE}$ ?',
          options: [
            '$\\mathcal{P}(A\\,;\\,\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD})$',
            '$\\mathcal{P}(A\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{AE})$',
            '$\\mathcal{P}(A\\,;\\,\\overrightarrow{EF}\\,;\\,\\overrightarrow{EH})$',
            '$\\mathcal{P}(B\\,;\\,\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD})$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Puisque $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$, on a $\\overrightarrow{AI} = \\overrightarrow{AC} + \\dfrac{1}{2}\\overrightarrow{AE}$, qui est bien une combinaison linéaire de $\\overrightarrow{AC}$ et $\\overrightarrow{AE}$ depuis le point $A$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q2',
          type: 'mcq',
          prompt: 'Dans un pavé droit $ABCDEFGH$, lesquels de ces trois vecteurs NE SONT PAS coplanaires ?',
          options: [
            '$\\overrightarrow{DB}$, $\\overrightarrow{EG}$ et $\\overrightarrow{AB}$',
            '$\\overrightarrow{AG}$, $\\overrightarrow{AE}$ et $\\overrightarrow{FE} - \\overrightarrow{FG}$',
            '$\\overrightarrow{DF}$, $\\overrightarrow{FE} - \\overrightarrow{HE}$ et $\\overrightarrow{AC}$',
            '$\\overrightarrow{AB}$, $\\overrightarrow{AE}$ et $\\overrightarrow{AF}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Pour le premier cas, $\\overrightarrow{EG} = \\overrightarrow{AC}$ est dans $(ABD)$. Pour le deuxième, $\\overrightarrow{FE}-\\overrightarrow{FG} = \\overrightarrow{GE}$ et $\\overrightarrow{AG} = \\overrightarrow{AE}+\\overrightarrow{EG}$. Pour le troisième, $\\overrightarrow{FE}-\\overrightarrow{HE} = \\overrightarrow{FH} = \\overrightarrow{BD}$, or $\\overrightarrow{BD}, \\overrightarrow{AC}$ engendrent la face horizontale $(ABC)$ tandis que $\\overrightarrow{DF}$ sort de ce plan : ils ne sont pas coplanaires.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q3',
          type: 'mcq',
          prompt: 'Soient $\\vec{u} = \\vec{i} + 2\\vec{j} - \\vec{k}$, $\\vec{v} = \\vec{i} - \\vec{j} + 2\\vec{k}$ et $\\vec{w} = 3\\vec{i} + 3\\vec{j}$. Ces vecteurs sont-ils coplanaires ?',
          options: [
            'Non, car la composante selon $\\vec{k}$ de $\\vec{w}$ est nulle',
            'Oui, car $\\vec{w} = 2\\vec{u} + \\vec{v}$',
            'Oui, car $\\vec{w} = \\vec{u} + 2\\vec{v}$',
            'Non, ils forment une base',
          ],
          correctAnswerIndex: 1,
          explanation: 'Vérifions $2\\vec{u} + \\vec{v} = (2+1)\\vec{i} + (4-1)\\vec{j} + (-2+2)\\vec{k} = 3\\vec{i} + 3\\vec{j} = \\vec{w}$ ! Donc $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q4',
          type: 'mcq',
          prompt: 'Si quatre points $E, F, G, H$ vérifient $2\\overrightarrow{EF} - 3\\overrightarrow{EG} + \\overrightarrow{EH} = \\vec{0}$, que peut-on en déduire ?',
          options: [
            'Les points $E, F, G, H$ forment un tétraèdre régulier',
            'Les vecteurs $\\overrightarrow{EF}, \\overrightarrow{EG}, \\overrightarrow{EH}$ sont coplanaires, donc $E, F, G, H$ appartiennent à un même plan',
            'Les points $F, G, H$ sont alignés',
            'Les points $E, F, G, H$ ne sont pas coplanaires',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{EH} = -2\\overrightarrow{EF} + 3\\overrightarrow{EG}$ est une combinaison linéaire de $\\overrightarrow{EF}$ et $\\overrightarrow{EG}$, donc $E, F, G, H$ appartiennent à un même plan.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q5',
          type: 'mcq',
          prompt: 'Soient $\\vec{u}, \\vec{v}, \\vec{w}$ trois vecteurs de l’espace tels que $\\vec{u} = 2\\vec{v}$ ($\\vec{v} \\neq \\vec{0}$), et $\\vec{w}$ quelconque. Que peut-on dire ?',
          options: [
            'Ils sont coplanaires uniquement si $\\vec{w}$ est colinéaire à $\\vec{u}$',
            'Ils sont toujours coplanaires, car $\\vec{u} - 2\\vec{v} + 0\\vec{w} = \\vec{0}$ avec $(1,-2,0) \\neq (0,0,0)$',
            'Ils forment une base si $\\vec{w} \\perp \\vec{u}$',
            'On ne peut pas conclure',
          ],
          correctAnswerIndex: 1,
          explanation: 'Si deux des trois vecteurs sont colinéaires, deux vecteurs suffisent à engendrer un plan contenant un représentant du troisième (deux vecteurs étant toujours coplanaires).',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q6',
          type: 'mcq',
          prompt: 'Dans un tétraèdre $ABCD$, $I$ est le milieu de $[BC]$ et $G = \\operatorname{bar}\\{(A,1),(B,2),(C,2),(D,-1)\\}$. Dans quel plan $G$ se situe-t-il ?',
          options: ['$(ABC)$', '$(BCD)$', '$(AID)$', '$(ABD)$'],
          correctAnswerIndex: 2,
          explanation: 'Par associativité, le barycentre partiel de $(B,2)$ et $(C,2)$ est $(I,4)$, donc $G = \\operatorname{bar}\\{(A,1),(I,4),(D,-1)\\}$, ce qui place $G$ dans le plan $(AID)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Vecteurs non coplanaires, bases de W et coordonnées de vecteurs
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03',
      order: 3,
      title: 'Vecteurs non coplanaires, bases et coordonnées d’un vecteur',
      summary:
        'Condition de non-coplanarité (λu + μv + νw = 0 ⇒ λ = μ = ν = 0), définition d’une base de l’espace, unicité des coordonnées (x, y, z) et opérations.',
      conceptExplanation:
        "1. **Vecteurs non coplanaires** :\nTrois vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ de $\\mathcal{W}$ sont **non coplanaires** si et seulement si le seul triplet $(\\lambda, \\mu, \\nu)$ vérifiant $\\lambda\\vec{u} + \\mu\\vec{v} + \\nu\\vec{w} = \\vec{0}$ est $(0, 0, 0)$ :\n$$\\vec{u},\\,\\vec{v},\\,\\vec{w} \\text{ non coplanaires} \\iff \\left(\\lambda\\vec{u} + \\mu\\vec{v} + \\nu\\vec{w} = \\vec{0} \\implies \\lambda = \\mu = \\nu = 0\\right)$$\n\n2. **Base de l’espace et théorème fondamental** :\n- Tout triplet $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ de vecteurs **non coplanaires** est appelé **base** de $\\mathcal{W}$.\n- **Propriété fondamentale** : Si $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ est une base de $\\mathcal{W}$, alors pour tout vecteur $\\vec{u} \\in \\mathcal{W}$, il existe un **unique triplet** $(x, y, z) \\in \\mathbb{R}^3$ tel que :\n$$\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$\nOn note $\\vec{u}\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ dans la base $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$.\n\n3. **Opérations sur les coordonnées** :\nSi $\\vec{u}(x\\,;\\,y\\,;\\,z)$ et $\\vec{u’}(x’\\,;\\,y’\\,;\\,z’)$ dans la même base et $\\lambda \\in \\mathbb{R}$, alors $\\vec{u} + \\vec{u’}$ a pour coordonnées $(x+x’\\,;\\,y+y’\\,;\\,z+z’)$ et $\\lambda\\vec{u}$ a pour coordonnées $(\\lambda x\\,;\\,\\lambda y\\,;\\,\\lambda z)$.",
      keyRule:
        'Pour prouver qu’un triplet (u, v, w) est une base (non coplanaires), pose αu + βv + γw = 0 et montre α = β = γ = 0. Tout vecteur s’écrit alors de façon unique xi + yj + zk.',
      formulas: [
        { name: 'Non-coplanarité', formula: '\\alpha\\vec{u} + \\beta\\vec{v} + \\gamma\\vec{w} = \\vec{0} \\implies \\alpha = \\beta = \\gamma = 0' },
        { name: 'Décomposition unique', formula: '\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff \\vec{u}\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}' },
        { name: 'Combinaison linéaire', formula: '(\\vec{u} + \\lambda\\vec{u\'})\\begin{pmatrix} x + \\lambda x\' \\\\ y + \\lambda y\' \\\\ z + \\lambda z\' \\end{pmatrix}' },
      ],
      workedExample: {
        title: 'Démontrer qu’un triplet forme une base et exprimer i, j, k dans cette base',
        statement:
          'Soit $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ une base de $\\mathcal{W}$. On pose $\\vec{u} = \\vec{i}+\\vec{j}-\\vec{k}$, $\\vec{v} = -2\\vec{i}+\\vec{j}-2\\vec{k}$ et $\\vec{w} = -\\vec{i}-2\\vec{j}+4\\vec{k}$.\n1) Démontre que $(\\vec{u},\\,\\vec{v},\\,\\vec{w})$ est une base de $\\mathcal{W}$.\n2) Détermine les coordonnées de $\\vec{i}$, $\\vec{j}$ et $\\vec{k}$ dans la base $(\\vec{u},\\,\\vec{v},\\,\\vec{w})$.',
        methodSteps: [
          '1) Soient $\\alpha, \\beta, \\gamma \\in \\mathbb{R}$ tels que $\\alpha\\vec{u} + \\beta\\vec{v} + \\gamma\\vec{w} = \\vec{0}$. En regroupant suivant $\\vec{i}, \\vec{j}, \\vec{k}$ (base de $\\mathcal{W}$), on obtient : $\\alpha - 2\\beta - \\gamma = 0$, $\\alpha + \\beta - 2\\gamma = 0$ et $-\\alpha - 2\\beta + 4\\gamma = 0$.',
          'Additionnons (1) et (3) : $-4\\beta + 3\\gamma = 0 \\implies \\gamma = \\dfrac{4}{3}\\beta$. En soustrayant (1) de (2) : $3\\beta - \\gamma = 0 \\implies \\gamma = 3\\beta$. D’où $\\dfrac{4}{3}\\beta = 3\\beta \\implies \\beta = 0$, puis $\\gamma = 0$ et $\\alpha = 0$. Donc $(\\vec{u},\\,\\vec{v},\\,\\vec{w})$ est une base.',
          '2) On tire $\\vec{i} = \\vec{u} - \\vec{j} + \\vec{k}$ et on substitue dans $\\vec{v}$ et $\\vec{w}$ : $\\vec{v} = -2\\vec{u} + 3\\vec{j} - 4\\vec{k}$ et $\\vec{w} = -\\vec{u} - \\vec{j} + 3\\vec{k}$.',
          'On résout en $(\\vec{j},\\,\\vec{k})$ : $\\vec{v} + 3\\vec{w} = -5\\vec{u} + 5\\vec{k} \\implies \\vec{k} = \\vec{u} + \\dfrac{1}{5}\\vec{v} + \\dfrac{3}{5}\\vec{w}$, puis $\\vec{j} = 3\\vec{k} - \\vec{u} - \\vec{w} = 2\\vec{u} + \\dfrac{3}{5}\\vec{v} + \\dfrac{4}{5}\\vec{w}$, et $\\vec{i} = \\vec{u} - \\vec{j} + \\vec{k} = -\\dfrac{2}{5}\\vec{v} - \\dfrac{1}{5}\\vec{w}$.',
        ],
        conclusion: '$\\vec{i}\\begin{pmatrix} 0 \\\\ -\\frac{2}{5} \\\\ -\\frac{1}{5} \\end{pmatrix}$, $\\vec{j}\\begin{pmatrix} 2 \\\\ \\frac{3}{5} \\\\ \\frac{4}{5} \\end{pmatrix}$ et $\\vec{k}\\begin{pmatrix} 1 \\\\ \\frac{1}{5} \\\\ \\frac{3}{5} \\end{pmatrix}$ dans $(\\vec{u},\\,\\vec{v},\\,\\vec{w})$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Justifier la non-coplanarité par le système nul',
          stepTitle: 'Poser αu + βv + γw = 0 et prouver α = β = γ = 0',
          paragraphText:
            'Dans un cube $ABCDEFGH$, on pose $\\vec{i} = \\overrightarrow{AB}$, $\\vec{j} = \\overrightarrow{AD}$ et $\\vec{k} = \\overrightarrow{AE}$. Pour montrer que $\\vec{i}$, $\\vec{i}+\\vec{j}$ et $\\vec{i}+\\vec{j}+\\vec{k}$ ne sont pas coplanaires, on écrit $\\alpha\\vec{i} + \\beta(\\vec{i}+\\vec{j}) + \\gamma(\\vec{i}+\\vec{j}+\\vec{k}) = \\vec{0}$, ce qui donne $(\\alpha+\\beta+\\gamma)\\vec{i} + (\\beta+\\gamma)\\vec{j} + \\gamma\\vec{k} = \\vec{0}$, soit $\\gamma = 0$, puis $\\beta = 0$, puis $\\alpha = 0$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q1',
            type: 'mcq',
            prompt: 'Soit $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ une base de $\\mathcal{W}$. On suppose que $\\alpha(\\vec{j}+\\vec{k}) + \\beta(\\vec{k}+\\vec{i}) + \\gamma(\\vec{j}+\\vec{i}) = \\vec{0}$. Quel système en déduit-on ?',
            options: [
              '$\\beta + \\gamma = 0$, $\\alpha + \\gamma = 0$, $\\alpha + \\beta = 0$ (donc $\\alpha = \\beta = \\gamma = 0$)',
              '$\\alpha + \\beta + \\gamma = 0$ uniquement',
              '$\\alpha = 1, \\beta = -1, \\gamma = 0$',
              'On ne peut pas conclure sans valeurs numériques',
            ],
            correctAnswerIndex: 0,
            explanation: 'En regroupant : $(\\beta+\\gamma)\\vec{i} + (\\alpha+\\gamma)\\vec{j} + (\\alpha+\\beta)\\vec{k} = \\vec{0}$. Les trois coefficients s’annulent car $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ est une base ; en sommant on a $2(\\alpha+\\beta+\\gamma) = 0$, d’où $\\alpha = \\beta = \\gamma = 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Lire les coordonnées d’un vecteur dans une base',
          stepTitle: 'Bien repérer l’ordre des trois vecteurs de la base',
          paragraphText:
            'Dans la base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{DH})$ d’un cube $ABCDEFGH$, si $\\vec{u} = 3\\overrightarrow{AB} - 2\\overrightarrow{AC} + 4\\overrightarrow{DH}$, ses coordonnées sont $(3\\,;\\,-2\\,;\\,4)$. Attention à ne pas intervertir l’ordre des vecteurs de base !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q2',
            type: 'mcq',
            prompt: 'Dans un cube $ABCDEFGH$, quelles sont les coordonnées du vecteur $\\vec{v} = 5\\overrightarrow{AE} - 2\\overrightarrow{AB} + \\overrightarrow{AD}$ dans la base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$ ?',
            options: ['$(5\\,;\\,-2\\,;\\,1)$', '$(-2\\,;\\,1\\,;\\,5)$', '$(-2\\,;\\,5\\,;\\,1)$', '$(1\\,;\\,-2\\,;\\,5)$'],
            correctAnswerIndex: 1,
            explanation: 'On ordonne selon la base $(\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ : $\\vec{v} = -2\\overrightarrow{AB} + 1\\overrightarrow{AD} + 5\\overrightarrow{AE}$, donc ses coordonnées sont $(-2\\,;\\,1\\,;\\,5)$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Calculs sur les coordonnées dans une base',
          stepTitle: 'Addition et multiplication par un réel composante par composante',
          paragraphText:
            'Si $\\vec{u}\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x’ \\\\ y’ \\\\ z’ \\end{pmatrix}$ dans une base, alors $\\vec{u} - 2\\vec{v}$ a pour coordonnées $(x - 2x’\\,;\\,y - 2y’\\,;\\,z - 2z’)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q3',
            type: 'mcq',
            prompt: 'Dans une base de $\\mathcal{W}$, on donne $\\vec{u}\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$. Quelles sont les coordonnées de $\\vec{u} - 2\\vec{v}$ ?',
            options: [
              '$\\begin{pmatrix} 2 \\\\ 3 \\\\ 5 \\end{pmatrix}$',
              '$\\begin{pmatrix} 1 \\\\ -3 \\\\ 4 \\end{pmatrix}$',
              '$\\begin{pmatrix} 0 \\\\ -5 \\\\ 5 \\end{pmatrix}$',
              '$\\begin{pmatrix} 4 \\\\ 3 \\\\ 1 \\end{pmatrix}$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Composante par composante : $2 - 2(1) = 0$, $-1 - 2(2) = -5$, $3 - 2(-1) = 5$, soit $(0\\,;\\,-5\\,;\\,5)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Vérifier la liberté de trois vecteurs sur un solide',
          stepTitle: 'Choisir 4 points non coplanaires pour obtenir une base',
          paragraphText:
            'Quatre points $A, B, D, E$ non coplanaires (comme un sommet $A$ d’un cube et ses trois voisins $B, D, E$, ou les quatre sommets d’un tétraèdre) définissent toujours une base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q4',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, lequel des triplets suivants N’EST PAS une base de $\\mathcal{W}$ ?',
            options: [
              '$(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$',
              '$(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{AE})$',
              '$(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{AD})$',
              '$(\\overrightarrow{AI}\\,;\\,\\overrightarrow{AE}\\,;\\,\\overrightarrow{AD})$ ($I$ milieu de $[AB]$)',
            ],
            correctAnswerIndex: 2,
            explanation: '$A, B, C, D$ appartiennent à la même face (coplanaires), donc $\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD}$ sont coplanaires et ne forment pas une base.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Nombre minimal de vecteurs pour une base de l’espace',
          stepTitle: 'Deux vecteurs non colinéaires forment une base d’un plan, jamais de l’espace',
          paragraphText:
            'Dans le plan, une base comporte $2$ vecteurs non colinéaires. Dans l’espace, une base comporte obligatoirement **$3$ vecteurs non coplanaires**. Trois vecteurs deux à deux non colinéaires mais coplanaires (comme $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AC}$) ne forment pas une base de l’espace !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q5',
            type: 'mcq',
            prompt: 'Trois vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ de l’espace sont deux à deux non colinéaires. Cela suffit-il pour affirmer que $(\\vec{u}, \\vec{v}, \\vec{w})$ est une base de l’espace ?',
            options: [
              'Oui, toujours',
              'Non, ils pourraient être coplanaires (par ex. $\\vec{w} = \\vec{u} + \\vec{v}$)',
              'Oui s’ils sont de même norme',
              'Non, il faut quatre vecteurs dans l’espace',
            ],
            correctAnswerIndex: 1,
            explanation: 'Non colinéaires deux à deux n’empêche pas qu’ils soient dans un même plan (comme $\\vec{i}, \\vec{j}$ et $\\vec{i}+\\vec{j}$) : il faut qu’ils soient **non coplanaires**.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Combinaison linéaire v + 3u',
          stepTitle: 'Calculer les coordonnées de v + 3u',
          paragraphText:
            'Si $\\vec{u}\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$, alors $\\vec{v} + 3\\vec{u}$ a pour coordonnées $(1 + 3\\times 2\\,;\\,2 + 3\\times(-1)\\,;\\,-1 + 3\\times 3) = (7\\,;\\,-1\\,;\\,8)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q6',
            type: 'mcq',
            prompt: 'Avec $\\vec{u}(2\\,;\\,-1\\,;\\,3)$ et $\\vec{v}(1\\,;\\,2\\,;\\,-1)$, que vaut le triplet de coordonnées de $\\vec{v} + 3\\vec{u}$ ?',
            options: ['$(7\\,;\\,-1\\,;\\,8)$', '$(0\\,;\\,2\\,;\\,3)$', '$(1\\,;\\,4\\,;\\,2)$', '$(5\\,;\\,1\\,;\\,7)$'],
            correctAnswerIndex: 0,
            explanation: '$(1 + 6\\,;\\,2 - 3\\,;\\,-1 + 9) = (7\\,;\\,-1\\,;\\,8)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q1',
          type: 'mcq',
          prompt: 'Soit $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ une base de $\\mathcal{W}$. On suppose que $\\alpha(\\vec{j}+\\vec{k}) + \\beta(\\vec{k}+\\vec{i}) + \\gamma(\\vec{j}+\\vec{i}) = \\vec{0}$. Quel système en déduit-on ?',
          options: [
            '$\\beta + \\gamma = 0$, $\\alpha + \\gamma = 0$, $\\alpha + \\beta = 0$ (donc $\\alpha = \\beta = \\gamma = 0$)',
            '$\\alpha + \\beta + \\gamma = 0$ uniquement',
            '$\\alpha = 1, \\beta = -1, \\gamma = 0$',
            'On ne peut pas conclure sans valeurs numériques',
          ],
          correctAnswerIndex: 0,
          explanation: 'En regroupant : $(\\beta+\\gamma)\\vec{i} + (\\alpha+\\gamma)\\vec{j} + (\\alpha+\\beta)\\vec{k} = \\vec{0}$. Les trois coefficients s’annulent car $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ est une base ; en sommant on a $2(\\alpha+\\beta+\\gamma) = 0$, d’où $\\alpha = \\beta = \\gamma = 0$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q2',
          type: 'mcq',
          prompt: 'Dans un cube $ABCDEFGH$, quelles sont les coordonnées du vecteur $\\vec{v} = 5\\overrightarrow{AE} - 2\\overrightarrow{AB} + \\overrightarrow{AD}$ dans la base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$ ?',
          options: ['$(5\\,;\\,-2\\,;\\,1)$', '$(-2\\,;\\,1\\,;\\,5)$', '$(-2\\,;\\,5\\,;\\,1)$', '$(1\\,;\\,-2\\,;\\,5)$'],
          correctAnswerIndex: 1,
          explanation: 'On ordonne selon la base $(\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ : $\\vec{v} = -2\\overrightarrow{AB} + 1\\overrightarrow{AD} + 5\\overrightarrow{AE}$, donc ses coordonnées sont $(-2\\,;\\,1\\,;\\,5)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q3',
          type: 'mcq',
          prompt: 'Dans une base de $\\mathcal{W}$, on donne $\\vec{u}\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$. Quelles sont les coordonnées de $\\vec{u} - 2\\vec{v}$ ?',
          options: [
            '$\\begin{pmatrix} 2 \\\\ 3 \\\\ 5 \\end{pmatrix}$',
            '$\\begin{pmatrix} 1 \\\\ -3 \\\\ 4 \\end{pmatrix}$',
            '$\\begin{pmatrix} 0 \\\\ -5 \\\\ 5 \\end{pmatrix}$',
            '$\\begin{pmatrix} 4 \\\\ 3 \\\\ 1 \\end{pmatrix}$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Composante par composante : $2 - 2(1) = 0$, $-1 - 2(2) = -5$, $3 - 2(-1) = 5$, soit $(0\\,;\\,-5\\,;\\,5)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q4',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, lequel des triplets suivants N’EST PAS une base de $\\mathcal{W}$ ?',
          options: [
            '$(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$',
            '$(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{AE})$',
            '$(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AC}\\,;\\,\\overrightarrow{AD})$',
            '$(\\overrightarrow{AI}\\,;\\,\\overrightarrow{AE}\\,;\\,\\overrightarrow{AD})$ ($I$ milieu de $[AB]$)',
          ],
          correctAnswerIndex: 2,
          explanation: '$A, B, C, D$ appartiennent à la même face (coplanaires), donc $\\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD}$ sont coplanaires et ne forment pas une base.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q5',
          type: 'mcq',
          prompt: 'Trois vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ de l’espace sont deux à deux non colinéaires. Cela suffit-il pour affirmer que $(\\vec{u}, \\vec{v}, \\vec{w})$ est une base de l’espace ?',
          options: [
            'Oui, toujours',
            'Non, ils pourraient être coplanaires (par ex. $\\vec{w} = \\vec{u} + \\vec{v}$)',
            'Oui s’ils sont de même norme',
            'Non, il faut quatre vecteurs dans l’espace',
          ],
          correctAnswerIndex: 1,
          explanation: 'Non colinéaires deux à deux n’empêche pas qu’ils soient dans un même plan (comme $\\vec{i}, \\vec{j}$ et $\\vec{i}+\\vec{j}$) : il faut qu’ils soient **non coplanaires**.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q6',
          type: 'mcq',
          prompt: 'Avec $\\vec{u}(2\\,;\\,-1\\,;\\,3)$ et $\\vec{v}(1\\,;\\,2\\,;\\,-1)$, que vaut le triplet de coordonnées de $\\vec{v} + 3\\vec{u}$ ?',
          options: ['$(7\\,;\\,-1\\,;\\,8)$', '$(0\\,;\\,2\\,;\\,3)$', '$(1\\,;\\,4\\,;\\,2)$', '$(5\\,;\\,1\\,;\\,7)$'],
          correctAnswerIndex: 0,
          explanation: '$(1 + 6\\,;\\,2 - 3\\,;\\,-1 + 9) = (7\\,;\\,-1\\,;\\,8)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Bases orthogonales / orthonormées et repères de l'espace
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04',
      order: 4,
      title: 'Bases orthogonales, bases orthonormées et repères de l’espace',
      summary:
        'Définitions de base orthogonale et orthonormée, repère (O, i, j, k), abscisse/ordonnée/cote d’un point, coordonnées d’un vecteur AB et d’un milieu.',
      conceptExplanation:
        "1. **Base orthogonale et base orthonormée** :\n- Une base $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ est **orthogonale** lorsque ses trois vecteurs sont deux à deux orthogonaux : $\\vec{i} \\perp \\vec{j}$, $\\vec{i} \\perp \\vec{k}$ et $\\vec{j} \\perp \\vec{k}$.\n- Elle est **orthonormée** lorsqu’elle est orthogonale et que ses trois vecteurs sont unitaires : $\\|\\vec{i}\\| = \\|\\vec{j}\\| = \\|\\vec{k}\\| = 1$.\n\n2. **Repères de l’espace $(\\mathcal{E})$** :\nOn appelle **repère** de l’espace un quadruplet $(O, I, J, K)$ de points non coplanaires, ou un quadruplet $(O\\,;\\,\\vec{i},\\,\\vec{j},\\,\\vec{k})$ où $O$ est l’origine et $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ une base de $\\mathcal{W}$.\nPour tout point $M$, l’unique triplet $(x\\,;\\,y\\,;\\,z)$ tel que $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ donne les coordonnées de $M$ : **$x$ est l’abscisse, $y$ l’ordonnée et $z$ la cote**.\n\n3. **Calculs dans un repère** :\nPour $A(x_A\\,;\\,y_A\\,;\\,z_A)$ et $B(x_B\\,;\\,y_B\\,;\\,z_B)$ :\n- Le vecteur $\\overrightarrow{AB}$ a pour coordonnées $(x_B - x_A\\,;\\,y_B - y_A\\,;\\,z_B - z_A)$.\n- Le milieu $H$ de $[AB]$ a pour coordonnées $\\left(\\dfrac{x_A+x_B}{2}\\,;\\,\\dfrac{y_A+y_B}{2}\\,;\\,\\dfrac{z_A+z_B}{2}\\right)$.",
      keyRule:
        'Base orthonormée = 2 à 2 orthogonale + vecteurs de norme 1. Dans (O, i, j, k), x = abscisse, y = ordonnée, z = cote, et AB = (x_B − x_A, y_B − y_A, z_B − z_A).',
      formulas: [
        { name: 'Base orthonormée', formula: '\\vec{i}\\perp\\vec{j},\\;\\vec{i}\\perp\\vec{k},\\;\\vec{j}\\perp\\vec{k} \\quad \\text{et} \\quad \\|\\vec{i}\\|=\\|\\vec{j}\\|=\\|\\vec{k}\\|=1' },
        { name: 'Vecteur AB', formula: '\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\\\ z_B - z_A \\end{pmatrix}' },
        { name: 'Milieu de [AB]', formula: 'H\\left(\\frac{x_A+x_B}{2}\\,;\\,\\frac{y_A+y_B}{2}\\,;\\,\\frac{z_A+z_B}{2}\\right)' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Repère orthonormé (A, AB, AD, AE) dans un cube de côté 1 et point K',
        caption: 'K est le symétrique de G par rapport à F : AK = AB + AE − AD, donc K(1 ; −1 ; 1) dans (A, AB, AD, AE).',
        svgContent: `<svg viewBox="0 0 340 210" width="320" height="198" xmlns="http://www.w3.org/2000/svg">
  <polygon points="85,155 195,155 240,120 130,120" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.3"/>
  <line x1="130" y1="35" x2="240" y2="35" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="130" y1="35" x2="85" y2="70" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="240" y1="35" x2="195" y2="70" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="85" y1="70" x2="195" y2="70" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="130" y1="35" x2="130" y2="120" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="240" y1="35" x2="240" y2="120" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="195" y1="70" x2="195" y2="155" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="85" y1="155" x2="195" y2="155" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="85" y1="155" x2="130" y2="120" stroke="#0f766e" stroke-width="2.3" stroke-dasharray="5 3"/>
  <line x1="85" y1="155" x2="85" y2="70" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="195" y1="155" x2="240" y2="120" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="240" y1="35" x2="150" y2="105" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3"/>
  <circle cx="150" cy="105" r="4.2" fill="#dc2626"/><text x="136" y="101" font-size="12" font-weight="bold" fill="#dc2626">K</text>
  <circle cx="85" cy="155" r="4" fill="#1e293b"/><text x="69" y="164" font-size="12" font-weight="bold" fill="#1e293b">A</text>
  <text x="199" y="166" font-size="12" font-weight="bold" fill="#2563eb">B</text>
  <text x="245" y="124" font-size="12" font-weight="bold" fill="#1e293b">C</text>
  <text x="128" y="114" font-size="12" font-weight="bold" fill="#0f766e">D</text>
  <text x="70" y="72" font-size="12" font-weight="bold" fill="#7c3aed">E</text>
  <text x="200" y="75" font-size="12" font-weight="bold" fill="#1e293b">F</text>
  <text x="245" y="36" font-size="12" font-weight="bold" fill="#1e293b">G</text>
  <text x="122" y="29" font-size="12" font-weight="bold" fill="#1e293b">H</text>
</svg>`,
      },
      workedExample: {
        title: 'Coordonnées dans un cube et calcul avec trois points de l’espace',
        statement:
          '1) $ABCDEFGH$ est un cube de côté $1$ et $K$ est le symétrique de $G$ par rapport à $F$. Détermine les coordonnées de $K$ dans le repère orthonormé $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$.\n2) Dans un repère $(O\\,;\\,\\vec{i},\\,\\vec{j},\\,\\vec{k})$, on donne $A(1\\,;\\,2\\,;\\,3)$, $B(-1\\,;\\,0\\,;\\,4)$ et $C(-2\\,;\\,1\\,;\\,-3)$. Calcule les coordonnées du milieu $H$ de $[AB]$ et du point $K$ tel que $\\overrightarrow{AK} = \\dfrac{2}{5}\\overrightarrow{BC}$.',
        methodSteps: [
          '1) Comme $K$ est le symétrique de $G$ par rapport à $F$, on a $\\overrightarrow{FK} = \\overrightarrow{GF} = -\\overrightarrow{FG} = -\\overrightarrow{AD}$. Ainsi $\\overrightarrow{AK} = \\overrightarrow{AB} + \\overrightarrow{BF} + \\overrightarrow{FK} = \\overrightarrow{AB} + \\overrightarrow{AE} - \\overrightarrow{AD}$. Ses coordonnées dans $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$ sont donc $(1\\,;\\,1\\,;\\,-1)$.',
          '2) Milieu $H$ de $[AB]$ : $x_H = \\dfrac{1-1}{2} = 0$, $y_H = \\dfrac{2+0}{2} = 1$, $z_H = \\dfrac{3+4}{2} = \\dfrac{7}{2}$, soit $H\\left(0\\,;\\,1\\,;\\,\\dfrac{7}{2}\\right)$.',
          'Vecteur $\\overrightarrow{BC} = (-2-(-1)\\,;\\,1-0\\,;\\,-3-4) = (-1\\,;\\,1\\,;\\,-7)$.',
          'De $\\overrightarrow{AK} = \\dfrac{2}{5}\\overrightarrow{BC}$, on tire $x_K = 1 + \\dfrac{2}{5}(-1) = \\dfrac{3}{5}$, $y_K = 2 + \\dfrac{2}{5}(1) = \\dfrac{12}{5}$ et $z_K = 3 + \\dfrac{2}{5}(-7) = \\dfrac{1}{5}$.',
        ],
        conclusion: '1) $K(1\\,;\\,1\\,;\\,-1)$. 2) $H\\left(0\\,;\\,1\\,;\\,\\dfrac{7}{2}\\right)$ et $K\\left(\\dfrac{3}{5}\\,;\\,\\dfrac{12}{5}\\,;\\,\\dfrac{1}{5}\\right)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Base orthogonale vs base orthonormée',
          stepTitle: 'Vecteurs deux à deux orthogonaux et de norme 1',
          paragraphText:
            'Dans le cube $ABCDEFGH$ de côté $1$ où $I$ est le milieu de $[AB]$ : $(\\overrightarrow{AI},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$ est une base **orthogonale** (deux à deux orthogonale, mais $\\|\\overrightarrow{AI}\\| = \\frac{1}{2} \\neq 1$), tandis que $(\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$ est **orthonormée** (arêtes de longueur $1$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q1',
            type: 'mcq',
            prompt: 'Soit $ABCDEFGH$ un cube de côté $1$ et $I$ le milieu de $[AB]$. Quel triplet forme une base orthogonale mais NON orthonormée ?',
            options: [
              '$(\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$',
              '$(\\overrightarrow{AI},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$',
              '$(\\overrightarrow{AB},\\,\\overrightarrow{AC},\\,\\overrightarrow{AE})$',
              '$(\\overrightarrow{BC},\\,\\overrightarrow{CD},\\,\\overrightarrow{CG})$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{AI}, \\overrightarrow{AE}, \\overrightarrow{AD}$ sont deux à deux orthogonaux, mais $\\|\\overrightarrow{AI}\\| = \\dfrac{1}{2} \\neq 1$, donc la base est orthogonale sans être orthonormée.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Vocabulaire : abscisse, ordonnée, cote',
          stepTitle: 'Nommer les trois coordonnées d’un point de l’espace',
          paragraphText:
            'Dans un repère $(O\\,;\\,\\vec{i},\\,\\vec{j},\\,\\vec{k})$, si $M$ a pour coordonnées $(x\\,;\\,y\\,;\\,z)$, $x$ s’appelle l’**abscisse**, $y$ l’**ordonnée** et $z$ la **cote** de $M$. Les droites $\\mathcal{D}(O\\,;\\,\\vec{i})$, $\\mathcal{D}(O\\,;\\,\\vec{j})$ et $\\mathcal{D}(O\\,;\\,\\vec{k})$ sont les axes de coordonnées.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q2',
            type: 'mcq',
            prompt: 'Dans un repère $(O\\,;\\,\\vec{i},\\,\\vec{j},\\,\\vec{k})$, le point $M$ a pour coordonnées $(3\\,;\\,-2\\,;\\,5)$. Quelle est sa cote ?',
            options: ['$3$', '$-2$', '$5$', '$6$'],
            correctAnswerIndex: 2,
            explanation: 'La première coordonnée ($3$) est l’abscisse, la deuxième ($-2$) l’ordonnée, et la troisième ($5$) la cote.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer les coordonnées de AB et du milieu',
          stepTitle: 'Attention à l’ordre extrémité moins origine',
          paragraphText:
            'Pour trouver $\\overrightarrow{AB}$, on calcule toujours $B - A$ : $(x_B - x_A\\,;\\,y_B - y_A\\,;\\,z_B - z_A)$. Et pour le milieu de $[AB]$, on fait la demi-somme de chaque coordonnée.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q3',
            type: 'mcq',
            prompt: 'On donne $A(1\\,;\\,-2\\,;\\,1)$ et $B(-2\\,;\\,0\\,;\\,3)$. Quelles sont les coordonnées de $\\overrightarrow{AB}$ ?',
            options: ['$(-3\\,;\\,2\\,;\\,2)$', '$(3\\,;\\,-2\\,;\\,-2)$', '$(-1\\,;\\,-2\\,;\\,4)$', '$(-3\\,;\\,-2\\,;\\,2)$'],
            correctAnswerIndex: 0,
            explanation: '$\\overrightarrow{AB} = (-2 - 1\\,;\\,0 - (-2)\\,;\\,3 - 1) = (-3\\,;\\,2\\,;\\,2)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Lire les coordonnées d’un sommet ou centre dans un cube',
          stepTitle: 'Décomposer OG ou AK dans (A, AB, AD, AE)',
          paragraphText:
            'Dans le cube $ABCDEFGH$ muni du repère $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$ : $B(1\\,;\\,0\\,;\\,0)$, $C(1\\,;\\,1\\,;\\,0)$, $F(1\\,;\\,0\\,;\\,1)$, $G(1\\,;\\,1\\,;\\,1)$, et le centre du cube a pour coordonnées $(\\frac{1}{2}\\,;\\,\\frac{1}{2}\\,;\\,\\frac{1}{2})$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q4',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$ muni du repère $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$, quelles sont les coordonnées du centre $P$ de la face $CDHG$ ?',
            options: [
              '$\\left(\\dfrac{1}{2}\\,;\\,1\\,;\\,\\dfrac{1}{2}\\right)$',
              '$\\left(1\\,;\\,\\dfrac{1}{2}\\,;\\,\\dfrac{1}{2}\\right)$',
              '$\\left(\\dfrac{1}{2}\\,;\\,\\dfrac{1}{2}\\,;\\,1\\right)$',
              '$(1\\,;\\,1\\,;\\,1)$',
            ],
            correctAnswerIndex: 0,
            explanation: '$P$ est le milieu de $[CG]$ avec $C(1\\,;\\,1\\,;\\,0)$ et $G(1\\,;\\,1\\,;\\,1)$ ? Attends : vérifions $[DG]$ : $D(0\\,;\\,1\\,;\\,0)$ et $G(1\\,;\\,1\\,;\\,1)$, leur milieu est bien $\\left(\\dfrac{1}{2}\\,;\\,1\\,;\\,\\dfrac{1}{2}\\right)$ !',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Attention au choix du 2e et 3e vecteur du repère !',
          stepTitle: 'Vérifier l’ordre des axes dans l’énoncé',
          paragraphText:
            'Certains exercices choisissent le repère $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$ (cote verticale en 3e), tandis que d’autres choisissent $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$ (cote en 2e). Lis toujours attentivement l’ordre des vecteurs du repère !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q5',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, quelles sont les coordonnées du point $D$ dans le repère $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$ ?',
            options: ['$(0\\,;\\,1\\,;\\,0)$', '$(0\\,;\\,0\\,;\\,1)$', '$(1\\,;\\,0\\,;\\,0)$', '$(0\\,;\\,1\\,;\\,1)$'],
            correctAnswerIndex: 1,
            explanation: 'Dans ce repère, $\\overrightarrow{AD}$ est le **troisième** vecteur de base : $\\overrightarrow{AD} = 0\\overrightarrow{AB} + 0\\overrightarrow{AE} + 1\\overrightarrow{AD}$, donc $D(0\\,;\\,0\\,;\\,1)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculer les coordonnées d’un point défini vectoriellement',
          stepTitle: 'Traduire AK = (2/5) BC coordonnée par coordonnée',
          paragraphText:
            'Si $A(1\\,;\\,2\\,;\\,3)$ et $\\overrightarrow{BC}(-1\\,;\\,1\\,;\\,-7)$, alors $\\overrightarrow{AK} = \\dfrac{2}{5}\\overrightarrow{BC}$ donne $x_K - 1 = -\\dfrac{2}{5}$, $y_K - 2 = \\dfrac{2}{5}$ et $z_K - 3 = -\\dfrac{14}{5}$, d’où $K\\left(\\dfrac{3}{5}\\,;\\,\\dfrac{12}{5}\\,;\\,\\dfrac{1}{5}\\right)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q6',
            type: 'mcq',
            prompt: 'Soient $A(1\\,;\\,2\\,;\\,3)$, $B(-1\\,;\\,0\\,;\\,4)$ et $C(-2\\,;\\,1\\,;\\,-3)$. Quelles sont les coordonnées du point $K$ tel que $\\overrightarrow{AK} = \\dfrac{2}{5}\\overrightarrow{BC}$ ?',
            options: [
              '$\\left(\\dfrac{3}{5}\\,;\\,\\dfrac{12}{5}\\,;\\,\\dfrac{1}{5}\\right)$',
              '$\\left(\\dfrac{3}{5}\\,;\\,\\dfrac{13}{5}\\,;\\,\\dfrac{1}{5}\\right)$',
              '$\\left(-\\dfrac{2}{5}\\,;\\,\\dfrac{2}{5}\\,;\\,-\\dfrac{14}{5}\\right)$',
              '$\\left(\\dfrac{7}{5}\\,;\\,\\dfrac{8}{5}\\,;\\,\\dfrac{29}{5}\\right)$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\overrightarrow{BC} = (-1\\,;\\,1\\,;\\,-7)$, donc $x_K = 1 - \\dfrac{2}{5} = \\dfrac{3}{5}$, $y_K = 2 + \\dfrac{2}{5} = \\dfrac{12}{5}$ et $z_K = 3 - \\dfrac{14}{5} = \\dfrac{1}{5}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q1',
          type: 'mcq',
          prompt: 'Soit $ABCDEFGH$ un cube de côté $1$ et $I$ le milieu de $[AB]$. Quel triplet forme une base orthogonale mais NON orthonormée ?',
          options: [
            '$(\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$',
            '$(\\overrightarrow{AI},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$',
            '$(\\overrightarrow{AB},\\,\\overrightarrow{AC},\\,\\overrightarrow{AE})$',
            '$(\\overrightarrow{BC},\\,\\overrightarrow{CD},\\,\\overrightarrow{CG})$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{AI}, \\overrightarrow{AE}, \\overrightarrow{AD}$ sont deux à deux orthogonaux, mais $\\|\\overrightarrow{AI}\\| = \\dfrac{1}{2} \\neq 1$, donc la base est orthogonale sans être orthonormée.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q2',
          type: 'mcq',
          prompt: 'Dans un repère $(O\\,;\\,\\vec{i},\\,\\vec{j},\\,\\vec{k})$, le point $M$ a pour coordonnées $(3\\,;\\,-2\\,;\\,5)$. Quelle est sa cote ?',
          options: ['$3$', '$-2$', '$5$', '$6$'],
          correctAnswerIndex: 2,
          explanation: 'La première coordonnée ($3$) est l’abscisse, la deuxième ($-2$) l’ordonnée, et la troisième ($5$) la cote.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q3',
          type: 'mcq',
          prompt: 'On donne $A(1\\,;\\,-2\\,;\\,1)$ et $B(-2\\,;\\,0\\,;\\,3)$. Quelles sont les coordonnées de $\\overrightarrow{AB}$ ?',
          options: ['$(-3\\,;\\,2\\,;\\,2)$', '$(3\\,;\\,-2\\,;\\,-2)$', '$(-1\\,;\\,-2\\,;\\,4)$', '$(-3\\,;\\,-2\\,;\\,2)$'],
          correctAnswerIndex: 0,
          explanation: '$\\overrightarrow{AB} = (-2 - 1\\,;\\,0 - (-2)\\,;\\,3 - 1) = (-3\\,;\\,2\\,;\\,2)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q4',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$ muni du repère $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AD},\\,\\overrightarrow{AE})$, quelles sont les coordonnées du centre $P$ de la face $CDHG$ ?',
          options: [
            '$\\left(\\dfrac{1}{2}\\,;\\,1\\,;\\,\\dfrac{1}{2}\\right)$',
            '$\\left(1\\,;\\,\\dfrac{1}{2}\\,;\\,\\dfrac{1}{2}\\right)$',
            '$\\left(\\dfrac{1}{2}\\,;\\,\\dfrac{1}{2}\\,;\\,1\\right)$',
            '$(1\\,;\\,1\\,;\\,1)$',
          ],
          correctAnswerIndex: 0,
          explanation: '$P$ est le milieu de $[DG]$ avec $D(0\\,;\\,1\\,;\\,0)$ et $G(1\\,;\\,1\\,;\\,1)$, soit $\\left(\\dfrac{1}{2}\\,;\\,1\\,;\\,\\dfrac{1}{2}\\right)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q5',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, quelles sont les coordonnées du point $D$ dans le repère $(A\\,;\\,\\overrightarrow{AB},\\,\\overrightarrow{AE},\\,\\overrightarrow{AD})$ ?',
          options: ['$(0\\,;\\,1\\,;\\,0)$', '$(0\\,;\\,0\\,;\\,1)$', '$(1\\,;\\,0\\,;\\,0)$', '$(0\\,;\\,1\\,;\\,1)$'],
          correctAnswerIndex: 1,
          explanation: 'Dans ce repère, $\\overrightarrow{AD}$ est le **troisième** vecteur de base : $\\overrightarrow{AD} = 0\\overrightarrow{AB} + 0\\overrightarrow{AE} + 1\\overrightarrow{AD}$, donc $D(0\\,;\\,0\\,;\\,1)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q6',
          type: 'mcq',
          prompt: 'Soient $A(1\\,;\\,2\\,;\\,3)$, $B(-1\\,;\\,0\\,;\\,4)$ et $C(-2\\,;\\,1\\,;\\,-3)$. Quelles sont les coordonnées du point $K$ tel que $\\overrightarrow{AK} = \\dfrac{2}{5}\\overrightarrow{BC}$ ?',
          options: [
            '$\\left(\\dfrac{3}{5}\\,;\\,\\dfrac{12}{5}\\,;\\,\\dfrac{1}{5}\\right)$',
            '$\\left(\\dfrac{3}{5}\\,;\\,\\dfrac{13}{5}\\,;\\,\\dfrac{1}{5}\\right)$',
            '$\\left(-\\dfrac{2}{5}\\,;\\,\\dfrac{2}{5}\\,;\\,-\\dfrac{14}{5}\\right)$',
            '$\\left(\\dfrac{7}{5}\\,;\\,\\dfrac{8}{5}\\,;\\,\\dfrac{29}{5}\\right)$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\overrightarrow{BC} = (-1\\,;\\,1\\,;\\,-7)$, donc $x_K = 1 - \\dfrac{2}{5} = \\dfrac{3}{5}$, $y_K = 2 + \\dfrac{2}{5} = \\dfrac{12}{5}$ et $z_K = 3 - \\dfrac{14}{5} = \\dfrac{1}{5}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Produit scalaire dans l'espace : définition géométrique et polarisation
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05',
      order: 5,
      title: 'Produit scalaire dans l’espace : définition et propriétés algébriques',
      summary:
        'Définition géométrique u · v = ||u|| ||v|| cos(BAC), identité de polarisation, bilinéarité, critère d’orthogonalité u · v = 0 et calculs dans un tétraèdre régulier.',
      conceptExplanation:
        "Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs de l’espace, et $A, B, C$ trois points tels que $\\overrightarrow{AB} = \\vec{u}$ et $\\overrightarrow{AC} = \\vec{v}$.\n\nOn appelle **produit scalaire** de $\\vec{u}$ et $\\vec{v}$ le nombre réel noté $\\vec{u} \\cdot \\vec{v}$ défini par :\n- $\\vec{u} \\cdot \\vec{v} = 0$ si $\\vec{u} = \\vec{0}$ ou $\\vec{v} = \\vec{0}$ ;\n- $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\widehat{BAC}$ sinon.\n\n**Formules équivalentes et règles de calcul** :\n- Identité de polarisation : $\\vec{u} \\cdot \\vec{v} = \\dfrac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$.\n- Symétrie et bilinéarité (comme dans le plan) : $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$, $(k\\vec{u}) \\cdot \\vec{v} = k(\\vec{u} \\cdot \\vec{v})$, $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$ et $\\vec{u}^2 = \\|\\vec{u}\\|^2$.\n- **Caractérisation de l’orthogonalité** : $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      keyRule:
        'u · v = ||u|| ||v|| cos(u, v) = (1/2)(||u+v||² − ||u||² − ||v||²). Il se calcule dans le plan contenant les représentants AB et AC, et u ⊥ v ssi u · v = 0.',
      formulas: [
        { name: 'Définition trigonométrique', formula: '\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\widehat{BAC}' },
        { name: 'Formule des normes', formula: '\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)' },
        { name: 'Orthogonalité', formula: '\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0' },
      ],
      workedExample: {
        title: 'Calculs de produits scalaires dans un tétraèdre régulier ABCD d’arête a',
        statement:
          'Soit $ABCD$ un tétraèdre régulier d’arête $a$ ($a > 0$). Calcule en fonction de $a$ :\n1) $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{AD}$\n2) $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$\n3) $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$.',
        methodSteps: [
          'Les quatre faces du tétraèdre régulier $ABCD$ sont des triangles équilatéraux de côté $a$, donc chaque angle géométrique entre deux arêtes d’une même face vaut $\\dfrac{\\pi}{3}$ ($60°$), avec $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$.',
          '1) $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos\\widehat{BAC} = a \\times a \\times \\dfrac{1}{2} = \\dfrac{a^2}{2}$. De même $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = \\dfrac{a^2}{2}$.',
          '2) $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = -\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = -a \\times a \\times \\cos\\widehat{ABC} = -\\dfrac{a^2}{2}$.',
          '3) Par Chasles, $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AD} - \\overrightarrow{AC}) = \\overrightarrow{AB}\\cdot\\overrightarrow{AD} - \\overrightarrow{AB}\\cdot\\overrightarrow{AC} = \\dfrac{a^2}{2} - \\dfrac{a^2}{2} = 0$ (ce qui retrouve $(AB) \\perp (CD)$ !).',
        ],
        conclusion: '$\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = \\overrightarrow{AB}\\cdot\\overrightarrow{AD} = \\dfrac{a^2}{2}$, $\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = -\\dfrac{a^2}{2}$ et $\\overrightarrow{AB}\\cdot\\overrightarrow{CD} = 0$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Calcul géométrique avec le cosinus',
          stepTitle: 'Ramener les deux vecteurs à la même origine',
          paragraphText:
            'Pour appliquer $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\widehat{BAC}$, les deux vecteurs doivent avoir la **même origine** $A$ ($\\overrightarrow{AB} = \\vec{u}$ et $\\overrightarrow{AC} = \\vec{v}$).',
          formula: { name: 'Produit scalaire', formula: '\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\cdot AC \\cdot \\cos\\widehat{BAC}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q1',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un tétraèdre régulier d’arête $a = 4\\text{ cm}$. Que vaut le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ ?',
            options: ['$4$', '$8$', '$8\\sqrt{3}$', '$16$'],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos\\dfrac{\\pi}{3} = 4 \\times 4 \\times \\dfrac{1}{2} = 8$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formule de polarisation des normes',
          stepTitle: 'Calculer un produit scalaire sans connaître l’angle',
          paragraphText:
            'Si on connaît les longueurs $\\|\\vec{u}\\|$, $\\|\\vec{v}\\|$ et $\\|\\vec{u}+\\vec{v}\\|$ (ou $\\|\\vec{u}-\\vec{v}\\|$), on utilise $\\vec{u}\\cdot\\vec{v} = \\dfrac{1}{2}(\\|\\vec{u}+\\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2) = \\dfrac{1}{2}(\\|\\vec{u}\\|^2 + \\|\\vec{v}\\|^2 - \\|\\vec{u}-\\vec{v}\\|^2)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q2',
            type: 'mcq',
            prompt: 'Si $\\|\\vec{u}\\| = 3$, $\\|\\vec{v}\\| = 4$ et $\\|\\vec{u} + \\vec{v}\\| = 5$, que vaut $\\vec{u} \\cdot \\vec{v}$ ?',
            options: ['$0$', '$12$', '$-6$', '$25$'],
            correctAnswerIndex: 0,
            explanation: '$\\vec{u} \\cdot \\vec{v} = \\dfrac{1}{2}(5^2 - 3^2 - 4^2) = \\dfrac{1}{2}(25 - 9 - 16) = 0$ (le triangle des vecteurs est rectangle).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Prouver une orthogonalité sans repère par Chasles',
          stepTitle: 'Développer le produit scalaire grâce à la bilinéarité',
          paragraphText:
            'Pour démontrer que deux droites $(AB)$ et $(CD)$ sont orthogonales dans un solide, calcule $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$ en décomposant $\\overrightarrow{CD} = \\overrightarrow{AD} - \\overrightarrow{AC}$ (ou avec les arêtes d’un cube) : si tu obtiens $0$, elles sont orthogonales.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q3',
            type: 'mcq',
            prompt: 'Dans un cube $ABCDEFGH$ d’arête $a$, que vaut le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{DG}$ ?',
            options: ['$a^2$', '$0$', '$a^2\\sqrt{2}$', '$-a^2$'],
            correctAnswerIndex: 0,
            explanation: 'Par Chasles, $\\overrightarrow{DG} = \\overrightarrow{DC} + \\overrightarrow{CG}$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{DG} = \\overrightarrow{AB}\\cdot\\overrightarrow{DC} + \\overrightarrow{AB}\\cdot\\overrightarrow{CG} = a^2 + 0 = a^2$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Produit scalaire dans le cube d’arête a',
          stepTitle: 'Grande diagonale contre arête ou diagonale de face',
          paragraphText:
            'Dans un cube $ABCDEFGH$ d’arête $a$, en décomposant $\\overrightarrow{EC} = \\overrightarrow{EA} + \\overrightarrow{AB} + \\overrightarrow{AD}$ et $\\overrightarrow{AH} = \\overrightarrow{AD} + \\overrightarrow{AE}$, on retrouve $\\overrightarrow{EC}\\cdot\\overrightarrow{AH} = -a^2 + 0 + a^2 = 0$, soit $(EC) \\perp (AH)$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q4',
            type: 'mcq',
            prompt: 'Dans un cube $ABCDEFGH$ d’arête $a$, que vaut $\\overrightarrow{EC} \\cdot \\overrightarrow{AF}$ sachant que $\\overrightarrow{EC} = \\overrightarrow{AB} + \\overrightarrow{AD} - \\overrightarrow{AE}$ et $\\overrightarrow{AF} = \\overrightarrow{AB} + \\overrightarrow{AE}$ ?',
            options: ['$2a^2$', '$a^2$', '$0$', '$-a^2$'],
            correctAnswerIndex: 2,
            explanation: 'Puisque $(\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ sont deux à deux orthogonaux de norme $a$ : $\\overrightarrow{EC}\\cdot\\overrightarrow{AF} = \\overrightarrow{AB}^2 - \\overrightarrow{AE}^2 = a^2 - a^2 = 0$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier le signe − quand les vecteurs ne partent pas du même sommet',
          stepTitle: 'Attention à AB · BC dans un triangle équilatéral !',
          paragraphText:
            'Erreur classique : écrire $\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = AB\\times BC\\times\\cos(60°) = +\\dfrac{a^2}{2}$. Faux ! Les deux vecteurs ne partent pas du même point $B$ : il faut d’abord écrire $\\overrightarrow{AB} = -\\overrightarrow{BA}$, d’où $\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = -\\overrightarrow{BA}\\cdot\\overrightarrow{BC} = -\\dfrac{a^2}{2}$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q5',
            type: 'mcq',
            prompt: 'Dans un tétraèdre régulier $ABCD$ d’arête $a$, que vaut $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ ?',
            options: [
              '$\\dfrac{a^2}{2}$',
              '$-\\dfrac{a^2}{2}$',
              '$\\dfrac{a^2\\sqrt{3}}{2}$',
              '$0$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = -\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = -a \\times a \\times \\cos\\dfrac{\\pi}{3} = -\\dfrac{a^2}{2}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Produit scalaire de deux arêtes opposées du tétraèdre régulier',
          stepTitle: 'Retrouver (AB) ⊥ (CD) en deux lignes',
          paragraphText:
            'Dans le tétraèdre régulier $ABCD$ d’arête $a$, $\\overrightarrow{AB}\\cdot\\overrightarrow{CD} = \\overrightarrow{AB}\\cdot(\\overrightarrow{AD}-\\overrightarrow{AC}) = \\dfrac{a^2}{2} - \\dfrac{a^2}{2} = 0$, donc les arêtes opposées sont orthogonales.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q6',
            type: 'mcq',
            prompt: 'Soit $ABCD$ un tétraèdre régulier d’arête $a = 5$. Que vaut $\\overrightarrow{AC} \\cdot \\overrightarrow{BD}$ ?',
            options: ['$\\dfrac{25}{2}$', '$-\\dfrac{25}{2}$', '$0$', '$25$'],
            correctAnswerIndex: 2,
            explanation: '$[AC]$ et $[BD]$ sont deux arêtes opposées d’un tétraèdre régulier : elles sont orthogonales, donc $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = 0$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q1',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un tétraèdre régulier d’arête $a = 4\\text{ cm}$. Que vaut le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ ?',
          options: ['$4$', '$8$', '$8\\sqrt{3}$', '$16$'],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos\\dfrac{\\pi}{3} = 4 \\times 4 \\times \\dfrac{1}{2} = 8$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q2',
          type: 'mcq',
          prompt: 'Si $\\|\\vec{u}\\| = 3$, $\\|\\vec{v}\\| = 4$ et $\\|\\vec{u} + \\vec{v}\\| = 5$, que vaut $\\vec{u} \\cdot \\vec{v}$ ?',
          options: ['$0$', '$12$', '$-6$', '$25$'],
          correctAnswerIndex: 0,
          explanation: '$\\vec{u} \\cdot \\vec{v} = \\dfrac{1}{2}(5^2 - 3^2 - 4^2) = \\dfrac{1}{2}(25 - 9 - 16) = 0$ (le triangle des vecteurs est rectangle).',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q3',
          type: 'mcq',
          prompt: 'Dans un cube $ABCDEFGH$ d’arête $a$, que vaut le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{DG}$ ?',
          options: ['$a^2$', '$0$', '$a^2\\sqrt{2}$', '$-a^2$'],
          correctAnswerIndex: 0,
          explanation: 'Par Chasles, $\\overrightarrow{DG} = \\overrightarrow{DC} + \\overrightarrow{CG}$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{DG} = \\overrightarrow{AB}\\cdot\\overrightarrow{DC} + \\overrightarrow{AB}\\cdot\\overrightarrow{CG} = a^2 + 0 = a^2$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q4',
          type: 'mcq',
          prompt: 'Dans un cube $ABCDEFGH$ d’arête $a$, que vaut $\\overrightarrow{EC} \\cdot \\overrightarrow{AF}$ sachant que $\\overrightarrow{EC} = \\overrightarrow{AB} + \\overrightarrow{AD} - \\overrightarrow{AE}$ et $\\overrightarrow{AF} = \\overrightarrow{AB} + \\overrightarrow{AE}$ ?',
          options: ['$2a^2$', '$a^2$', '$0$', '$-a^2$'],
          correctAnswerIndex: 2,
          explanation: 'Puisque $(\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ sont deux à deux orthogonaux de norme $a$ : $\\overrightarrow{EC}\\cdot\\overrightarrow{AF} = \\overrightarrow{AB}^2 - \\overrightarrow{AE}^2 = a^2 - a^2 = 0$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q5',
          type: 'mcq',
          prompt: 'Dans un tétraèdre régulier $ABCD$ d’arête $a$, que vaut $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ ?',
          options: [
            '$\\dfrac{a^2}{2}$',
            '$-\\dfrac{a^2}{2}$',
            '$\\dfrac{a^2\\sqrt{3}}{2}$',
            '$0$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = -\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = -a \\times a \\times \\cos\\dfrac{\\pi}{3} = -\\dfrac{a^2}{2}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q6',
          type: 'mcq',
          prompt: 'Soit $ABCD$ un tétraèdre régulier d’arête $a = 5$. Que vaut $\\overrightarrow{AC} \\cdot \\overrightarrow{BD}$ ?',
          options: ['$\\dfrac{25}{2}$', '$-\\dfrac{25}{2}$', '$0$', '$25$'],
          correctAnswerIndex: 2,
          explanation: '$[AC]$ et $[BD]$ sont deux arêtes opposées d’un tétraèdre régulier : elles sont orthogonales, donc $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = 0$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Expression analytique du produit scalaire, norme et distance
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06',
      order: 6,
      title: 'Expression analytique du produit scalaire, norme et distance',
      summary:
        'Formules u·v = xx’+yy’+zz’, ||u|| = √(x²+y²+z²) et AB = √((x_B−x_A)²+(y_B−y_A)²+(z_B−z_A)²) en base/repère orthonormé(e), et vecteur orthogonal à deux vecteurs.',
      conceptExplanation:
        "Dans une **base orthonormée** $(\\vec{i},\\,\\vec{j},\\,\\vec{k})$ de $\\mathcal{W}$, soient $\\vec{u}\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x’ \\\\ y’ \\\\ z’ \\end{pmatrix}$ deux vecteurs.\n\n1. **Expression analytique du produit scalaire** :\n$$\\vec{u} \\cdot \\vec{v} = xx’ + yy’ + zz’$$\nEn particulier, $\\vec{u} \\perp \\vec{v} \\iff xx’ + yy’ + zz’ = 0$.\n\n2. **Norme d’un vecteur et distance entre deux points** :\n$$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$$\nDans un **repère orthonormé** $(O\\,;\\,\\vec{i},\\,\\vec{j},\\,\\vec{k})$, la distance entre $A(x_A\\,;\\,y_A\\,;\\,z_A)$ et $B(x_B\\,;\\,y_B\\,;\\,z_B)$ vaut :\n$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$\n**Condition impérative** : ces trois formules analytiques ne sont valables **que dans une base ou un repère orthonormé(e)** !\n\n3. **Application** : pour trouver un vecteur $\\vec{t}(x\\,;\\,y\\,;\\,z)$ orthogonal simultanément à deux vecteurs donnés $\\vec{a}$ et $\\vec{b}$, on résout le système linéaire homogène $\\vec{t} \\cdot \\vec{a} = 0$ et $\\vec{t} \\cdot \\vec{b} = 0$ en exprimant deux inconnues en fonction de la troisième.",
      keyRule:
        'Uniquement en base orthonormée : u·v = xx’ + yy’ + zz’, ||u|| = √(x²+y²+z²) et AB = √(Δx²+Δy²+Δz²). Pour trouver t ⊥ a et t ⊥ b, résoudre t·a = 0 et t·b = 0.',
      formulas: [
        { name: 'Produit scalaire (BON)', formula: '\\vec{u} \\cdot \\vec{v} = xx\' + yy\' + zz\'' },
        { name: 'Norme (BON)', formula: '\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}' },
        { name: 'Distance AB (RON)', formula: 'AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}' },
      ],
      workedExample: {
        title: 'Situation complexe : trouver tout vecteur orthogonal à BH et EG dans le cube',
        statement:
          'Dans le cube $ABCDEFGH$ d’arête $1$, on travaille dans la base orthonormée $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$. Détermine la forme générale des coordonnées d’un vecteur $\\vec{t}(x\\,;\\,y\\,;\\,z)$ orthogonal simultanément à $\\overrightarrow{BH}$ et $\\overrightarrow{EG}$.',
        methodSteps: [
          'Exprimons $\\overrightarrow{BH}$ et $\\overrightarrow{EG}$ dans la base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$ : $\\overrightarrow{BH} = \\overrightarrow{BA} + \\overrightarrow{AD} + \\overrightarrow{DH} = -\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$, soit $\\overrightarrow{BH}(-1\\,;\\,1\\,;\\,1)$ ; et $\\overrightarrow{EG} = \\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$, soit $\\overrightarrow{EG}(1\\,;\\,1\\,;\\,0)$.',
          'Traduisons l’orthogonalité dans cette base orthonormée : $\\vec{t} \\perp \\overrightarrow{BH} \\iff -x + y + z = 0$, et $\\vec{t} \\perp \\overrightarrow{EG} \\iff x + y = 0$.',
          'De la seconde équation, $y = -x$. En reportant dans la première : $-x + (-x) + z = 0 \\iff z = 2x$.',
          'En posant $x = \\alpha$ ($\\alpha \\in \\mathbb{R}$), on obtient $\\vec{t}(\\alpha\\,;\\,-\\alpha\\,;\\,2\\alpha)$.',
        ],
        conclusion: 'Tout vecteur orthogonal à $\\overrightarrow{BH}$ et $\\overrightarrow{EG}$ s’écrit $\\vec{t}(\\alpha\\,;\\,-\\alpha\\,;\\,2\\alpha)$ avec $\\alpha \\in \\mathbb{R}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Calcul analytique du produit scalaire et de la norme',
          stepTitle: 'Appliquer xx’ + yy’ + zz’ et √(x² + y² + z²)',
          paragraphText:
            'Dans une base orthonormée, si $\\vec{u}(1\\,;\\,2\\,;\\,-3)$ et $\\vec{v}(2\\,;\\,-1\\,;\\,2)$, alors $\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + (-3)(2) = -6$ et $\\|\\vec{v}\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$.',
          formula: { name: 'Produit scalaire et norme', formula: '\\vec{u}\\cdot\\vec{v} = xx\'+yy\'+zz\',\\quad \\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q1',
            type: 'mcq',
            prompt: 'Dans une base orthonormée, on donne $\\vec{u}(2\\,;\\,1\\,;\\,0)$ et $\\vec{v}(-1\\,;\\,2\\,;\\,4)$. Quelles sont les valeurs de $\\vec{u} \\cdot \\vec{v}$ et $\\|\\vec{v}\\|$ ?',
            options: [
              '$\\vec{u} \\cdot \\vec{v} = 0$ et $\\|\\vec{v}\\| = \\sqrt{21}$',
              '$\\vec{u} \\cdot \\vec{v} = 4$ et $\\|\\vec{v}\\| = \\sqrt{5}$',
              '$\\vec{u} \\cdot \\vec{v} = 0$ et $\\|\\vec{v}\\| = 5$',
              '$\\vec{u} \\cdot \\vec{v} = -2$ et $\\|\\vec{v}\\| = \\sqrt{21}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\vec{u} \\cdot \\vec{v} = 2(-1) + 1(2) + 0(4) = -2 + 2 = 0$, et $\\|\\vec{v}\\| = \\sqrt{(-1)^2 + 2^2 + 4^2} = \\sqrt{1+4+16} = \\sqrt{21}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Distance entre deux points dans un repère orthonormé',
          stepTitle: 'Calculer AB avec les trois coordonnées',
          paragraphText:
            'Dans un repère orthonormé, $AB = \\|\\overrightarrow{AB}\\| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$. Par exemple pour $A(2\\,;\\,3\\,;\\,1)$ et $B(-1\\,;\\,2\\,;\\,1)$, $AB = \\sqrt{(-3)^2 + (-1)^2 + 0^2} = \\sqrt{10}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q2',
            type: 'mcq',
            prompt: 'Dans un repère orthonormé, on donne $A(1\\,;\\,-2\\,;\\,1)$ et $B(-2\\,;\\,0\\,;\\,3)$. Quelle est la distance $AB$ ?',
            options: ['$\\sqrt{7}$', '$\\sqrt{17}$', '$\\sqrt{13}$', '$7$'],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{AB} = (-3\\,;\\,2\\,;\\,2)$, donc $AB = \\sqrt{(-3)^2 + 2^2 + 2^2} = \\sqrt{9 + 4 + 4} = \\sqrt{17}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trouver un vecteur orthogonal à deux vecteurs donnés',
          stepTitle: 'Résoudre le système u · w = 0 et v · w = 0',
          paragraphText:
            'Pour déterminer un vecteur non nul $\\vec{w}(x\\,;\\,y\\,;\\,z)$ orthogonal à $\\vec{u}$ et $\\vec{v}$ en base orthonormée, on écrit $\\vec{w}\\cdot\\vec{u} = 0$ et $\\vec{w}\\cdot\\vec{v} = 0$ (2 équations, 3 inconnues) puis on fixe une valeur pratique à l’une des coordonnées (par exemple $x=1$ ou $x=4$ pour éviter les fractions).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q3',
            type: 'mcq',
            prompt: 'En base orthonormée, soient $\\vec{u}(2\\,;\\,1\\,;\\,0)$ et $\\vec{v}(-1\\,;\\,2\\,;\\,4)$. Lequel des vecteurs suivants est orthogonal à la fois à $\\vec{u}$ et à $\\vec{v}$ ?',
            options: [
              '$\\vec{w}(1\\,;\\,-2\\,;\\,1)$',
              '$\\vec{w}(4\\,;\\,-8\\,;\\,5)$',
              '$\\vec{w}(1\\,;\\,2\\,;\\,-1)$',
              '$\\vec{w}(2\\,;\\,-4\\,;\\,5)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le système donne $2x + y = 0 \\implies y = -2x$ et $-x + 2(-2x) + 4z = 0 \\implies 4z = 5x$. Pour $x = 4$, on obtient $y = -8$ et $z = 5$ (ce qui est égal à $4\\times(1\\,;\\,-2\\,;\\,\\frac{5}{4})$). Vérification : $4(2) + (-8)(1) = 0$ et $4(-1) + (-8)(2) + 5(4) = -4 - 16 + 20 = 0$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculs de produits scalaires entre trois points A, B, C',
          stepTitle: 'Vérifier AB · AC, BC · AC et AB · BC',
          paragraphText:
            'Avec $A(1\\,;\\,-2\\,;\\,1)$, $B(-2\\,;\\,0\\,;\\,3)$ et $C(4\\,;\\,1\\,;\\,-2)$ en repère orthonormé : $\\overrightarrow{AB}(-3\\,;\\,2\\,;\\,2)$, $\\overrightarrow{AC}(3\\,;\\,3\\,;\\,-3)$ et $\\overrightarrow{BC}(6\\,;\\,1\\,;\\,-5)$. On calcule $\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = -9 + 6 - 6 = -9$, $\\overrightarrow{BC}\\cdot\\overrightarrow{AC} = 18 + 3 + 15 = 36$ et $\\overrightarrow{AB}\\cdot\\overrightarrow{BC} = -18 + 2 - 10 = -26$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q4',
            type: 'mcq',
            prompt: 'Avec $\\overrightarrow{BC}(6\\,;\\,1\\,;\\,-5)$ et $\\overrightarrow{AC}(3\\,;\\,3\\,;\\,-3)$ en base orthonormée, que vaut $\\overrightarrow{BC} \\cdot \\overrightarrow{AC}$ ?',
            options: ['$6$', '$36$', '$-26$', '$18$'],
            correctAnswerIndex: 1,
            explanation: '$\\overrightarrow{BC} \\cdot \\overrightarrow{AC} = 6\\times 3 + 1\\times 3 + (-5)\\times(-3) = 18 + 3 + 15 = 36$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Appliquer xx’ + yy’ + zz’ hors d’une base orthonormée',
          stepTitle: 'La formule analytique est FAUSSE si la base n’est pas orthonormée !',
          paragraphText:
            'N’applique **jamais** $\\vec{u}\\cdot\\vec{v} = xx’ + yy’ + zz’$ ou $AB = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$ dans un repère quelconque (par exemple un pavé droit à arêtes inégales ou un tétraèdre régulier) ! Ces formules exigent impérativement une **base orthonormée**.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q5',
            type: 'mcq',
            prompt: 'Dans un pavé droit $ABCDEFGH$ tel que $AB = 2$, $AD = 3$ et $AE = 1$, peut-on utiliser la formule $\\vec{u}\\cdot\\vec{v} = xx’+yy’+zz’$ dans la base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$ ?',
            options: [
              'Oui, car la base est orthogonale',
              'Non, car les vecteurs ne sont pas unitaires (la base est orthogonale mais pas orthonormée)',
              'Oui uniquement pour calculer les distances',
              'Non, car ces trois vecteurs sont coplanaires',
            ],
            correctAnswerIndex: 1,
            explanation: 'Ici $\\|\\overrightarrow{AB}\\|=2$, $\\|\\overrightarrow{AD}\\|=3$ et $\\|\\overrightarrow{AE}\\|=1$ : la base n’est pas orthonormée, il faut multiplier par les normes au carré ($4xx’ + 9yy’ + zz’$) ou prendre une base orthonormée $(\\frac{1}{2}\\overrightarrow{AB},\\,\\frac{1}{3}\\overrightarrow{AD},\\,\\overrightarrow{AE})$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculer l’angle BAC avec le produit scalaire analytique',
          stepTitle: 'Combiner produit scalaire analytique et norme',
          paragraphText:
            'Dans un repère orthonormé, le produit scalaire analytique permet de calculer $\\cos\\widehat{BAC} = \\dfrac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{AB \\times AC}$ et de vérifier si un triangle est rectangle ou isocèle.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q6',
            type: 'mcq',
            prompt: 'Dans un repère orthonormé, on considère $\\overrightarrow{AB}(2\\,;\\,-1\\,;\\,2)$ et $\\overrightarrow{AC}(1\\,;\\,4\\,;\\,1)$. Que peut-on dire du triangle $ABC$ en $A$ ?',
            options: [
              'Il est rectangle en $A$',
              'Il est équilatéral',
              'L’angle $\\widehat{BAC}$ est obtus',
              'Il est aplati',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2(1) + (-1)(4) + 2(1) = 2 - 4 + 2 = 0$, et aucun des deux vecteurs n’est nul : donc $(AB) \\perp (AC)$ et $ABC$ est rectangle en $A$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q1',
          type: 'mcq',
          prompt: 'Dans une base orthonormée, on donne $\\vec{u}(2\\,;\\,1\\,;\\,0)$ et $\\vec{v}(-1\\,;\\,2\\,;\\,4)$. Quelles sont les valeurs de $\\vec{u} \\cdot \\vec{v}$ et $\\|\\vec{v}\\|$ ?',
          options: [
            '$\\vec{u} \\cdot \\vec{v} = 0$ et $\\|\\vec{v}\\| = \\sqrt{21}$',
            '$\\vec{u} \\cdot \\vec{v} = 4$ et $\\|\\vec{v}\\| = \\sqrt{5}$',
            '$\\vec{u} \\cdot \\vec{v} = 0$ et $\\|\\vec{v}\\| = 5$',
            '$\\vec{u} \\cdot \\vec{v} = -2$ et $\\|\\vec{v}\\| = \\sqrt{21}$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\vec{u} \\cdot \\vec{v} = 2(-1) + 1(2) + 0(4) = -2 + 2 = 0$, et $\\|\\vec{v}\\| = \\sqrt{(-1)^2 + 2^2 + 4^2} = \\sqrt{1+4+16} = \\sqrt{21}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q2',
          type: 'mcq',
          prompt: 'Dans un repère orthonormé, on donne $A(1\\,;\\,-2\\,;\\,1)$ et $B(-2\\,;\\,0\\,;\\,3)$. Quelle est la distance $AB$ ?',
          options: ['$\\sqrt{7}$', '$\\sqrt{17}$', '$\\sqrt{13}$', '$7$'],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{AB} = (-3\\,;\\,2\\,;\\,2)$, donc $AB = \\sqrt{(-3)^2 + 2^2 + 2^2} = \\sqrt{9 + 4 + 4} = \\sqrt{17}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q3',
          type: 'mcq',
          prompt: 'En base orthonormée, soient $\\vec{u}(2\\,;\\,1\\,;\\,0)$ et $\\vec{v}(-1\\,;\\,2\\,;\\,4)$. Lequel des vecteurs suivants est orthogonal à la fois à $\\vec{u}$ et à $\\vec{v}$ ?',
          options: [
            '$\\vec{w}(1\\,;\\,-2\\,;\\,1)$',
            '$\\vec{w}(4\\,;\\,-8\\,;\\,5)$',
            '$\\vec{w}(1\\,;\\,2\\,;\\,-1)$',
            '$\\vec{w}(2\\,;\\,-4\\,;\\,5)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le système donne $2x + y = 0 \\implies y = -2x$ et $-x + 2(-2x) + 4z = 0 \\implies 4z = 5x$. Pour $x = 4$, on obtient $y = -8$ et $z = 5$ : $4(2)-8(1)=0$ et $4(-1)-8(2)+5(4)=0$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q4',
          type: 'mcq',
          prompt: 'Avec $\\overrightarrow{BC}(6\\,;\\,1\\,;\\,-5)$ et $\\overrightarrow{AC}(3\\,;\\,3\\,;\\,-3)$ en base orthonormée, que vaut $\\overrightarrow{BC} \\cdot \\overrightarrow{AC}$ ?',
          options: ['$6$', '$36$', '$-26$', '$18$'],
          correctAnswerIndex: 1,
          explanation: '$\\overrightarrow{BC} \\cdot \\overrightarrow{AC} = 6\\times 3 + 1\\times 3 + (-5)\\times(-3) = 18 + 3 + 15 = 36$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q5',
          type: 'mcq',
          prompt: 'Dans un pavé droit $ABCDEFGH$ tel que $AB = 2$, $AD = 3$ et $AE = 1$, peut-on utiliser la formule $\\vec{u}\\cdot\\vec{v} = xx’+yy’+zz’$ dans la base $(\\overrightarrow{AB}\\,;\\,\\overrightarrow{AD}\\,;\\,\\overrightarrow{AE})$ ?',
          options: [
            'Oui, car la base est orthogonale',
            'Non, car les vecteurs ne sont pas unitaires (la base est orthogonale mais pas orthonormée)',
            'Oui uniquement pour calculer les distances',
            'Non, car ces trois vecteurs sont coplanaires',
          ],
          correctAnswerIndex: 1,
          explanation: 'Ici $\\|\\overrightarrow{AB}\\|=2$, $\\|\\overrightarrow{AD}\\|=3$ et $\\|\\overrightarrow{AE}\\|=1$ : la base n’est pas orthonormée, il faut donc passer à une base orthonormée $(\\frac{1}{2}\\overrightarrow{AB},\\,\\frac{1}{3}\\overrightarrow{AD},\\,\\overrightarrow{AE})$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q6',
          type: 'mcq',
          prompt: 'Dans un repère orthonormé, on considère $\\overrightarrow{AB}(2\\,;\\,-1\\,;\\,2)$ et $\\overrightarrow{AC}(1\\,;\\,4\\,;\\,1)$. Que peut-on dire du triangle $ABC$ en $A$ ?',
          options: [
            'Il est rectangle en $A$',
            'Il est équilatéral',
            'L’angle $\\widehat{BAC}$ est obtus',
            'Il est aplati',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2(1) + (-1)(4) + 2(1) = 2 - 4 + 2 = 0$, et aucun des deux vecteurs n’est nul : donc $(AB) \\perp (AC)$ et $ABC$ est rectangle en $A$.',
        },
      ],
    },
  ],
};

