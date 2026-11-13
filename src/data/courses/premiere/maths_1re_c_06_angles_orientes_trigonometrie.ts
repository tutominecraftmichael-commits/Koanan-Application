import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 06 : Angles orientés et trigonométrie.pdf » (format v2).
export const MATHS_1RE_C_L06_ANGLES_ORIENTES_TRIGONOMETRIE: CurriculumChapter = {
  id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 6,
  title: 'Leçon 6 : Angles orientés et trigonométrie',
  summary:
    'Mesures et mesure principale d’un angle orienté, relation de Chasles et propriétés, angle inscrit et points cocycliques, lignes trigonométriques et formules d’addition/duplication/linéarisation, fonctions circulaires, équations et inéquations trigonométriques.',
  officialVolumeHours: 12,
  contentVersion: 2,
  source: '1ère C - Leçon 06 : Angles orientés et trigonométrie.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Mesures d'un angle orienté et mesure principale
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01',
      order: 1,
      title: 'Mesures d’un angle orienté et mesure principale',
      summary:
        'Ensemble des mesures α + 2kπ (k ∈ ℤ), unicité de la mesure principale dans ]−π ; π] et méthode de détermination par encadrement.',
      conceptExplanation:
        "Le plan étant muni d'un repère orthonormé direct $(O, I, J)$ et du cercle trigonométrique $(\\mathcal{C})$ (l'unité étant le radian), soit $\\widehat{(\\vec{u}, \\vec{v})}$ un angle orienté.\n- Si $\\alpha$ est une mesure de $\\widehat{(\\vec{u}, \\vec{v})}$, toutes ses mesures sont de la forme :\n$$\\alpha + 2k\\pi \\qquad (k \\in \\mathbb{Z})$$\nElles ont toutes le même point image $M$ sur le cercle trigonométrique.\n- **Mesure principale** : il existe un **unique** réel $x \\in \\,]-\\pi\\,;\\,\\pi]$ qui soit mesure de l'angle orienté $\\widehat{(\\vec{u}, \\vec{v})}$. On le note $\\operatorname{Mes}\\widehat{(\\vec{u}, \\vec{v})} = x$.\n- **Méthode pour trouver la mesure principale** d'une mesure donnée $x$ : on cherche l'entier relatif $k \\in \\mathbb{Z}$ tel que :\n$$-\\pi < x + 2k\\pi \\le \\pi \\iff -\\frac{1}{2} < \\frac{x}{2\\pi} + k \\le \\frac{1}{2}$$\npuis on calcule $\\alpha = x + 2k\\pi$.",
      keyRule:
        'Deux réels mesurent le même angle orienté ssi leur différence est un multiple de 2π. La mesure principale est l’unique mesure appartenant à ]−π ; π].',
      formulas: [
        { name: 'Ensemble des mesures', formula: '\\operatorname{mes}\\widehat{(\\vec{u},\\vec{v})} = \\alpha + 2k\\pi\\quad (k \\in \\mathbb{Z})' },
        { name: 'Mesure principale', formula: '\\alpha \\in \\,]-\\pi\\,;\\,\\pi]' },
      ],
      workedExample: {
        title: 'Déterminer la mesure principale de −119π/4 et 2021π/6',
        statement: 'Détermine la mesure principale $\\alpha$ de $-\\dfrac{119\\pi}{4}$ puis de $\\dfrac{2021\\pi}{6}$.',
        methodSteps: [
          'Pour $x = -\\dfrac{119\\pi}{4}$, on pose $-\\pi < -\\dfrac{119\\pi}{4} + 2k\\pi \\le \\pi$.',
          'En divisant par $2\\pi$ : $-\\dfrac{1}{2} < -\\dfrac{119}{8} + k \\le \\dfrac{1}{2} \\iff \\dfrac{115}{8} < k \\le \\dfrac{123}{8}$, soit $14{,}375 < k \\le 15{,}375$, d’où $k = 15$.',
          'Donc $\\alpha = -\\dfrac{119\\pi}{4} + 30\\pi = \\dfrac{\\pi}{4} \\in \\,]-\\pi\\,;\\,\\pi]$.',
          'Pour $x = \\dfrac{2021\\pi}{6}$, on pose $-\\dfrac{1}{2} < \\dfrac{2021}{12} + k \\le \\dfrac{1}{2}$, soit $-\\dfrac{2027}{12} < k \\le -\\dfrac{2015}{12}$ ($-168{,}91 < k \\le -167{,}91$), donc $k = -168$.',
          'Ainsi $\\alpha = \\dfrac{2021\\pi}{6} - 168 \\times 2\\pi = \\dfrac{2021\\pi}{6} - 336\\pi = \\dfrac{2021 - 2016}{6}\\pi = \\dfrac{5\\pi}{6} \\in \\,]-\\pi\\,;\\,\\pi]$.',
        ],
        conclusion: 'La mesure principale de $-\\dfrac{119\\pi}{4}$ est $\\dfrac{\\pi}{4}$ et celle de $\\dfrac{2021\\pi}{6}$ est $\\dfrac{5\\pi}{6}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Reconnaître des mesures d’un même angle orienté',
          stepTitle: 'Ajouter ou retrancher un multiple entier de 2π',
          paragraphText:
            'Deux nombres réels représentent le même angle orienté si et seulement si leur différence est de la forme $2k\\pi$ ($k \\in \\mathbb{Z}$), c’est-à-dire un multiple **pair** de $\\pi$. En particulier, ajouter $3\\pi$ ou $-2021\\pi$ change l’angle orienté en son opposé.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q1',
            type: 'mcq',
            prompt: 'Soit $\\widehat{(\\vec{u}, \\vec{v})}$ un angle orienté de mesure principale $\\dfrac{\\pi}{12}$. Lequel de ces nombres EST une autre mesure de cet angle ?',
            options: [
              '$\\dfrac{\\pi}{12} + 3\\pi$',
              '$\\dfrac{\\pi}{12} - 6\\pi$',
              '$\\dfrac{\\pi}{12} - 2021\\pi$',
              '$\\dfrac{\\pi}{12} + \\pi$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Seul $-6\\pi = 2 \\times (-3)\\pi$ est un multiple entier de $2\\pi$. Les multiples impairs ($+3\\pi$, $-2021\\pi$, $+\\pi$) donnent le point diamétralement opposé.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Intervalle de la mesure principale',
          stepTitle: 'Attention aux bornes : −π exclu, π inclus',
          paragraphText:
            'La mesure principale d’un angle orienté est l’unique mesure appartenant à $]-\\pi\\,;\\,\\pi]$. L’angle orienté nul $\\hat{0}$ a pour mesure principale $0$ et l’angle orienté plat $\\hat{\\pi}$ a pour mesure principale $\\pi$ (jamais $-\\pi$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q2',
            type: 'mcq',
            prompt: 'Quelle est la mesure principale de l’angle orienté dont une mesure est $-3\\pi$ ?',
            options: ['$-\\pi$', '$\\pi$', '$0$', '$-3\\pi$'],
            correctAnswerIndex: 1,
            explanation: '$-3\\pi + 2 \\times 2\\pi = \\pi$, qui appartient bien à $]-\\pi\\,;\\,\\pi]$ (alors que $-\\pi$ est exclu de l’intervalle).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Encadrement de k pour trouver la mesure principale',
          stepTitle: 'Encadrer −1/2 < x/(2π) + k ≤ 1/2',
          paragraphText:
            'Pour trouver la mesure principale de $x = -\\dfrac{119\\pi}{4}$, on résout $-\\pi < -\\dfrac{119\\pi}{4} + 2k\\pi \\le \\pi$, ce qui équivaut à $\\dfrac{115}{8} < k \\le \\dfrac{123}{8}$. L’unique entier $k$ dans cet intervalle est $k = 15$, d’où $\\alpha = -\\dfrac{119\\pi}{4} + 30\\pi = \\dfrac{\\pi}{4}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q3',
            type: 'mcq',
            prompt: 'Quelle est la mesure principale de l’angle orienté dont une mesure est $-\\dfrac{119\\pi}{4}$ ?',
            options: ['$-\\dfrac{3\\pi}{4}$', '$-\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$'],
            correctAnswerIndex: 2,
            explanation: '$-\\dfrac{119\\pi}{4} + 15 \\times 2\\pi = \\dfrac{-119 + 120}{4}\\pi = \\dfrac{\\pi}{4} \\in \\,]-\\pi\\,;\\,\\pi]$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Soustraire un multiple impair de π',
          stepTitle: 'Un multiple de 2π doit toujours être un nombre PAIR de π',
          paragraphText:
            'Attention lorsque tu fais apparaître le multiple le plus proche de $2\\pi$ par décomposition rapide ! Par exemple, pour $-\\dfrac{37\\pi}{3}$, on écrit $-\\dfrac{36\\pi}{3} - \\dfrac{\\pi}{3} = -12\\pi - \\dfrac{\\pi}{3} = -6 \\times 2\\pi - \\dfrac{\\pi}{3}$ : ici $12$ est bien pair, donc $\\alpha = -\\dfrac{\\pi}{3}$. Si tu avais retiré $11\\pi$, ce serait faux !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q4',
            type: 'mcq',
            prompt: 'Quelle est la mesure principale de l’angle orienté de mesure $-\\dfrac{37\\pi}{3}$ ?',
            options: ['$-\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$-\\dfrac{2\\pi}{3}$'],
            correctAnswerIndex: 0,
            explanation: '$-\\dfrac{37\\pi}{3} = -12\\pi - \\dfrac{\\pi}{3} = -6 \\times 2\\pi - \\dfrac{\\pi}{3}$, donc la mesure principale est $-\\dfrac{\\pi}{3}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Décomposer 149π/3 et 2021π/6',
          stepTitle: 'Appliquer la division euclidienne par le double du dénominateur',
          paragraphText:
            'Astuce rapide : divise le numérateur par $2d$ (où $d$ est le dénominateur). Pour $\\dfrac{149\\pi}{3}$, $2d = 6$ et $149 = 25 \\times 6 - 1$, donc $\\dfrac{149\\pi}{3} = 25 \\times 2\\pi - \\dfrac{\\pi}{3}$ : mesure principale $-\\dfrac{\\pi}{3}$. Pour $\\dfrac{2021\\pi}{6}$, $2d = 12$ et $2021 = 168 \\times 12 + 5$, donc $\\alpha = \\dfrac{5\\pi}{6}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q5',
            type: 'mcq',
            prompt: 'Quelle est la mesure principale de $\\dfrac{149\\pi}{3}$ ?',
            options: ['$\\dfrac{\\pi}{3}$', '$-\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$-\\dfrac{2\\pi}{3}$'],
            correctAnswerIndex: 1,
            explanation: '$149\\pi = 150\\pi - \\pi = 25 \\times 6\\pi - \\pi$, donc $\\dfrac{149\\pi}{3} = 25 \\times 2\\pi - \\dfrac{\\pi}{3}$ ; sa mesure principale est $-\\dfrac{\\pi}{3}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier avec un grand numérateur',
          stepTitle: 'Mesure principale de 2021π/6',
          paragraphText:
            'Calculons avec soin : $168 \\times 2\\pi = 336\\pi = \\dfrac{2016\\pi}{6}$. Donc $\\dfrac{2021\\pi}{6} - 168 \\times 2\\pi = \\dfrac{2021 - 2016}{6}\\pi = \\dfrac{5\\pi}{6}$, qui est bien compris dans $]-\\pi\\,;\\,\\pi]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q6',
            type: 'mcq',
            prompt: 'Quelle est la mesure principale exacte de $\\dfrac{2021\\pi}{6}$ ?',
            options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{5\\pi}{6}$', '$-\\dfrac{5\\pi}{6}$', '$\\dfrac{5\\pi}{12}$'],
            correctAnswerIndex: 1,
            explanation: '$168 \\times 12 = 2016$ et $2021 - 2016 = 5$, donc $\\dfrac{2021\\pi}{6} - 168\\times 2\\pi = \\dfrac{5\\pi}{6} \\in \\,]-\\pi\\,;\\,\\pi]$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q1',
          type: 'mcq',
          prompt: 'Soit $\\widehat{(\\vec{u}, \\vec{v})}$ un angle orienté de mesure principale $\\dfrac{\\pi}{12}$. Lequel de ces nombres EST une autre mesure de cet angle ?',
          options: [
            '$\\dfrac{\\pi}{12} + 3\\pi$',
            '$\\dfrac{\\pi}{12} - 6\\pi$',
            '$\\dfrac{\\pi}{12} - 2021\\pi$',
            '$\\dfrac{\\pi}{12} + \\pi$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Seul $-6\\pi = 2 \\times (-3)\\pi$ est un multiple entier de $2\\pi$. Les multiples impairs ($+3\\pi$, $-2021\\pi$, $+\\pi$) donnent le point diamétralement opposé.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q2',
          type: 'mcq',
          prompt: 'Quelle est la mesure principale de l’angle orienté dont une mesure est $-3\\pi$ ?',
          options: ['$-\\pi$', '$\\pi$', '$0$', '$-3\\pi$'],
          correctAnswerIndex: 1,
          explanation: '$-3\\pi + 2 \\times 2\\pi = \\pi$, qui appartient bien à $]-\\pi\\,;\\,\\pi]$ (alors que $-\\pi$ est exclu de l’intervalle).',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q3',
          type: 'mcq',
          prompt: 'Quelle est la mesure principale de l’angle orienté dont une mesure est $-\\dfrac{119\\pi}{4}$ ?',
          options: ['$-\\dfrac{3\\pi}{4}$', '$-\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$'],
          correctAnswerIndex: 2,
          explanation: '$-\\dfrac{119\\pi}{4} + 15 \\times 2\\pi = \\dfrac{-119 + 120}{4}\\pi = \\dfrac{\\pi}{4} \\in \\,]-\\pi\\,;\\,\\pi]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q4',
          type: 'mcq',
          prompt: 'Quelle est la mesure principale de l’angle orienté de mesure $-\\dfrac{37\\pi}{3}$ ?',
          options: ['$-\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$-\\dfrac{2\\pi}{3}$'],
          correctAnswerIndex: 0,
          explanation: '$-\\dfrac{37\\pi}{3} = -12\\pi - \\dfrac{\\pi}{3} = -6 \\times 2\\pi - \\dfrac{\\pi}{3}$, donc la mesure principale est $-\\dfrac{\\pi}{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q5',
          type: 'mcq',
          prompt: 'Quelle est la mesure principale de $\\dfrac{149\\pi}{3}$ ?',
          options: ['$\\dfrac{\\pi}{3}$', '$-\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$-\\dfrac{2\\pi}{3}$'],
          correctAnswerIndex: 1,
          explanation: '$149\\pi = 150\\pi - \\pi = 25 \\times 6\\pi - \\pi$, donc $\\dfrac{149\\pi}{3} = 25 \\times 2\\pi - \\dfrac{\\pi}{3}$ ; sa mesure principale est $-\\dfrac{\\pi}{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p01_q6',
          type: 'mcq',
          prompt: 'Quelle est la mesure principale exacte de $\\dfrac{2021\\pi}{6}$ ?',
          options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{5\\pi}{6}$', '$-\\dfrac{5\\pi}{6}$', '$\\dfrac{5\\pi}{12}$'],
          correctAnswerIndex: 1,
          explanation: '$168 \\times 12 = 2016$ et $2021 - 2016 = 5$, donc $\\dfrac{2021\\pi}{6} - 168\\times 2\\pi = \\dfrac{5\\pi}{6} \\in \\,]-\\pi\\,;\\,\\pi]$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Somme, différence, relation de Chasles et propriétés
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02',
      order: 2,
      title: 'Relation de Chasles et propriétés des angles orientés',
      summary:
        'Somme et opposé d’angles orientés, relation de Chasles (u,v) + (v,w) = (u,w), effet de la multiplication des vecteurs par k > 0 ou k < 0.',
      conceptExplanation:
        "Soient $\\vec{u}, \\vec{v}, \\vec{w}$ des vecteurs non nuls et $k \\in \\mathbb{R}^*$.\n1. **Somme et différence** : si $\\hat{\\alpha}$ et $\\hat{\\beta}$ ont pour mesures respectives $\\alpha$ et $\\beta$, alors $\\hat{\\alpha} + \\hat{\\beta}$ a pour mesure $\\alpha + \\beta$, l'opposé $-\\hat{\\alpha}$ a pour mesure $-\\alpha$, et $\\hat{\\alpha} - \\hat{\\beta}$ a pour mesure $\\alpha - \\beta$.\n2. **Relation de Chasles** :\n$$\\widehat{(\\vec{u}, \\vec{v})} + \\widehat{(\\vec{v}, \\vec{w})} = \\widehat{(\\vec{u}, \\vec{w})}$$\n3. **Conséquences fondamentales** :\n- **Permutation** : $\\widehat{(\\vec{v}, \\vec{u})} = -\\widehat{(\\vec{u}, \\vec{v})}$ ;\n- **Même signe ($k > 0$)** : $\\widehat{(k\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, k\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ ;\n- **Signe contraire ($k < 0$)** : $\\widehat{(k\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, k\\vec{v})} = \\hat{\\pi} + \\widehat{(\\vec{u}, \\vec{v})}$ ;\n- **Même scalaire aux deux vecteurs ($k \\neq 0$)** : $\\widehat{(k\\vec{u}, k\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ (même si $k < 0$, car $\\hat{\\pi} + \\hat{\\pi} = \\hat{0}$ !).",
      keyRule:
        'Chasles : (u, v) + (v, w) = (u, w). Multiplier UN vecteur par k < 0 ajoute π̂ ; multiplier LES DEUX vecteurs par k < 0 ne change pas l’angle.',
      formulas: [
        { name: 'Relation de Chasles', formula: '\\widehat{(\\vec{u},\\vec{v})} + \\widehat{(\\vec{v},\\vec{w})} = \\widehat{(\\vec{u},\\vec{w})}' },
        { name: 'Changement de sens (un vecteur)', formula: '\\widehat{(-\\vec{u},\\vec{v})} = \\widehat{(\\vec{u},-\\vec{v})} = \\hat{\\pi} + \\widehat{(\\vec{u},\\vec{v})}' },
        { name: 'Changement de sens (les deux)', formula: '\\widehat{(-\\vec{u},-\\vec{v})} = \\widehat{(\\vec{u},\\vec{v})}' },
      ],
      workedExample: {
        title: 'Calculer des mesures avec Chasles et les scalaires (Exercice 10)',
        statement:
          'Sachant que $-\\dfrac{\\pi}{7}$ et $\\dfrac{\\pi}{4}$ sont des mesures respectives de $\\widehat{(\\vec{u}, \\vec{v})}$ et $\\widehat{(\\vec{u}, \\vec{w})}$, trouve une mesure de $\\widehat{(2\\vec{u}, \\vec{v})}$, $\\widehat{(\\vec{u}, -3\\vec{v})}$, $\\widehat{(\\vec{w}, \\vec{u})}$ et $\\widehat{(\\vec{v}, \\vec{w})}$.',
        methodSteps: [
          '$2 > 0$, donc $\\widehat{(2\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ a pour mesure $-\\dfrac{\\pi}{7}$.',
          '$-3 < 0$, donc $\\widehat{(\\vec{u}, -3\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$ a pour mesure $-\\dfrac{\\pi}{7} + \\pi = \\dfrac{6\\pi}{7}$.',
          '$\\widehat{(\\vec{w}, \\vec{u})} = -\\widehat{(\\vec{u}, \\vec{w})}$ a pour mesure $-\\dfrac{\\pi}{4}$.',
          'Par Chasles, $\\widehat{(\\vec{v}, \\vec{w})} = \\widehat{(\\vec{v}, \\vec{u})} + \\widehat{(\\vec{u}, \\vec{w})}$, qui a pour mesure $+\\dfrac{\\pi}{7} + \\dfrac{\\pi}{4} = \\dfrac{11\\pi}{28}$.',
        ],
        conclusion: 'Respectivement $-\\dfrac{\\pi}{7}$, $\\dfrac{6\\pi}{7}$, $-\\dfrac{\\pi}{4}$ et $\\dfrac{11\\pi}{28}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Relation de Chasles sur les angles orientés',
          stepTitle: 'Enchaîner deux angles partageant un vecteur intermédiaire',
          paragraphText:
            'Dans $\\widehat{(\\vec{u}, \\vec{v})} + \\widehat{(\\vec{v}, \\vec{w})} = \\widehat{(\\vec{u}, \\vec{w})}$, le second vecteur du premier angle doit être identique au premier vecteur du second angle. Vérifie bien l’ordre des lettres !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q1',
            type: 'mcq',
            prompt: '$A, B, C, D$ sont quatre points distincts. Laquelle de ces égalités est correcte ?',
            options: [
              '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AB}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{AC}, \\overrightarrow{DC})}$',
              '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AB}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AC})}$',
              '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AC}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AB})}$',
              '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AB})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AC})}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par la relation de Chasles, $\\widehat{(\\overrightarrow{AB}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Multiplication par un réel positif ou négatif',
          stepTitle: 'Quand ajoute-t-on π̂ à un angle orienté ?',
          paragraphText:
            'Multiplier un vecteur par $k > 0$ conserve son sens et ne modifie pas l’angle : $\\widehat{(7\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$. Multiplier un seul des deux vecteurs par $k < 0$ retourne son sens et ajoute $\\hat{\\pi}$ : $\\widehat{(-2\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q2',
            type: 'mcq',
            prompt: 'Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs non nuls. Quelle égalité est FAUSSE ?',
            options: [
              '$\\widehat{(-\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$',
              '$\\widehat{(7\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, 7\\vec{v})}$',
              '$\\widehat{(-5\\vec{u}, -5\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$',
              '$\\widehat{(\\vec{u}, 4\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$',
            ],
            correctAnswerIndex: 3,
            explanation: 'Puisque $4 > 0$, $\\widehat{(\\vec{u}, 4\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ (on n’ajoute pas $\\hat{\\pi}$ !).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Deux coefficients négatifs (-5u, -5v)',
          stepTitle: 'Deux signes moins s’annulent (π̂ + π̂ = 0̂)',
          paragraphText:
            'Attention : pour $\\widehat{(k\\vec{u}, k’\\vec{v})}$ lorsque $k < 0$ ET $k’ < 0$, chacun ajoute $\\hat{\\pi}$, donc au total on ajoute $2\\hat{\\pi} = \\hat{0}$ ! Ainsi $\\widehat{(-5\\vec{u}, -3\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q3',
            type: 'mcq',
            prompt: 'Si une mesure de $\\widehat{(\\vec{u}, \\vec{v})}$ est $\\dfrac{\\pi}{5}$, quelle est une mesure de $\\widehat{(-2\\vec{u}, -7\\vec{v})}$ ?',
            options: ['$\\dfrac{\\pi}{5} + \\pi$', '$-\\dfrac{\\pi}{5}$', '$\\dfrac{\\pi}{5}$', '$\\dfrac{6\\pi}{5}$'],
            correctAnswerIndex: 2,
            explanation: 'Les deux facteurs $-2$ et $-7$ sont strictement négatifs, donc $\\widehat{(-2\\vec{u}, -7\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ a même mesure $\\dfrac{\\pi}{5}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Somme et différence de mesures',
          stepTitle: 'Additionner ou soustraire les mesures de α̂ et β̂',
          paragraphText:
            'Si $\\hat{\\alpha}$ a pour mesure $\\dfrac{\\pi}{3}$ et $\\hat{\\beta}$ a pour mesure $\\dfrac{\\pi}{4}$, alors $\\hat{\\alpha} + \\hat{\\beta}$ a pour mesure $\\dfrac{\\pi}{3} + \\dfrac{\\pi}{4} = \\dfrac{7\\pi}{12}$ et $\\hat{\\alpha} - \\hat{\\beta}$ a pour mesure $\\dfrac{\\pi}{3} - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{12}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q4',
            type: 'mcq',
            prompt: 'Si $\\hat{\\alpha}$ et $\\hat{\\beta}$ ont pour mesures respectives $-\\dfrac{2\\pi}{3}$ et $-\\pi$, quelles sont des mesures de $\\hat{\\alpha} + \\hat{\\beta}$ et $\\hat{\\alpha} - \\hat{\\beta}$ ?',
            options: [
              '$-\\dfrac{5\\pi}{3}$ et $\\dfrac{\\pi}{3}$',
              '$\\dfrac{\\pi}{3}$ et $-\\dfrac{5\\pi}{3}$',
              '$-\\dfrac{\\pi}{3}$ et $-\\dfrac{5\\pi}{3}$',
              '$-\\dfrac{5\\pi}{3}$ et $-\\dfrac{\\pi}{3}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Somme : $-\\dfrac{2\\pi}{3} + (-\\pi) = -\\dfrac{5\\pi}{3}$. Différence : $-\\dfrac{2\\pi}{3} - (-\\pi) = \\dfrac{\\pi}{3}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Utiliser Chasles pour relier v et w via u',
          stepTitle: 'Inverser (u, v) en −(v, u) avant d’appliquer Chasles',
          paragraphText:
            'Quand on connaît $\\widehat{(\\vec{u}, \\vec{v})}$ et $\\widehat{(\\vec{u}, \\vec{w})}$, pour calculer $\\widehat{(\\vec{v}, \\vec{w})}$, on écrit $\\widehat{(\\vec{v}, \\vec{w})} = \\widehat{(\\vec{v}, \\vec{u})} + \\widehat{(\\vec{u}, \\vec{w})} = -\\widehat{(\\vec{u}, \\vec{v})} + \\widehat{(\\vec{u}, \\vec{w})}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q5',
            type: 'mcq',
            prompt: 'Si $\\widehat{(\\vec{u}, \\vec{v})}$ a pour mesure $-\\dfrac{\\pi}{7}$ et $\\widehat{(\\vec{u}, \\vec{w})}$ a pour mesure $\\dfrac{\\pi}{4}$, quelle est une mesure de $\\widehat{(\\vec{v}, \\vec{w})}$ ?',
            options: [
              '$\\dfrac{\\pi}{4} - \\dfrac{\\pi}{7} = \\dfrac{3\\pi}{28}$',
              '$\\dfrac{\\pi}{7} + \\dfrac{\\pi}{4} = \\dfrac{11\\pi}{28}$',
              '$-\\dfrac{\\pi}{7} - \\dfrac{\\pi}{4} = -\\dfrac{11\\pi}{28}$',
              '$\\dfrac{\\pi}{7} - \\dfrac{\\pi}{4} = -\\dfrac{3\\pi}{28}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\widehat{(\\vec{v}, \\vec{w})} = \\widehat{(\\vec{v}, \\vec{u})} + \\widehat{(\\vec{u}, \\vec{w})}$ a pour mesure $-(-\\dfrac{\\pi}{7}) + \\dfrac{\\pi}{4} = \\dfrac{11\\pi}{28}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calcul d’angles orientés dans un carré avec triangles équilatéraux',
          stepTitle: 'Démontrer un alignement par somme d’angles (Exercice 5)',
          paragraphText:
            '$ABCD$ est un carré direct ; $ABF$ et $CBE$ sont des triangles équilatéraux directs. On montre que $\\operatorname{Mes}\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DC})} = \\dfrac{\\pi}{12}$ et $\\operatorname{Mes}\\widehat{(\\overrightarrow{DC}, \\overrightarrow{DE})} = -\\dfrac{\\pi}{12}$. Par Chasles, $\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})} = \\widehat{(\\overrightarrow{DF}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{DE})} = \\hat{0}$, donc $D, E, F$ sont alignés.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q6',
            type: 'mcq',
            prompt: 'Si $\\operatorname{Mes}\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DC})} = \\dfrac{\\pi}{12}$ et $\\operatorname{Mes}\\widehat{(\\overrightarrow{DC}, \\overrightarrow{DE})} = -\\dfrac{\\pi}{12}$, que conclut-on pour $D, E, F$ ?',
            options: [
              '$\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})} = \\hat{0}$, donc $D, E, F$ sont alignés',
              '$(DF) \\perp (DE)$',
              'Le triangle $DEF$ est équilatéral',
              '$\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})} = \\dfrac{\\pi}{6}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Par Chasles, $\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})}$ a pour mesure $\\dfrac{\\pi}{12} - \\dfrac{\\pi}{12} = 0$, donc $\\overrightarrow{DF}$ et $\\overrightarrow{DE}$ sont colinéaires de même sens : $D, E, F$ sont alignés.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q1',
          type: 'mcq',
          prompt: '$A, B, C, D$ sont quatre points distincts. Laquelle de ces égalités est correcte ?',
          options: [
            '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AB}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{AC}, \\overrightarrow{DC})}$',
            '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AB}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AC})}$',
            '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AC}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AB})}$',
            '$\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AB})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AC})}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par la relation de Chasles, $\\widehat{(\\overrightarrow{AB}, \\overrightarrow{DC})} + \\widehat{(\\overrightarrow{DC}, \\overrightarrow{AC})} = \\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q2',
          type: 'mcq',
          prompt: 'Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs non nuls. Quelle égalité est FAUSSE ?',
          options: [
            '$\\widehat{(-\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$',
            '$\\widehat{(7\\vec{u}, \\vec{v})} = \\widehat{(\\vec{u}, 7\\vec{v})}$',
            '$\\widehat{(-5\\vec{u}, -5\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$',
            '$\\widehat{(\\vec{u}, 4\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$',
          ],
          correctAnswerIndex: 3,
          explanation: 'Puisque $4 > 0$, $\\widehat{(\\vec{u}, 4\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ (on n’ajoute pas $\\hat{\\pi}$ !).',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q3',
          type: 'mcq',
          prompt: 'Si une mesure de $\\widehat{(\\vec{u}, \\vec{v})}$ est $\\dfrac{\\pi}{5}$, quelle est une mesure de $\\widehat{(-2\\vec{u}, -7\\vec{v})}$ ?',
          options: ['$\\dfrac{\\pi}{5} + \\pi$', '$-\\dfrac{\\pi}{5}$', '$\\dfrac{\\pi}{5}$', '$\\dfrac{6\\pi}{5}$'],
          correctAnswerIndex: 2,
          explanation: 'Les deux facteurs $-2$ et $-7$ sont strictement négatifs, donc $\\widehat{(-2\\vec{u}, -7\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})}$ a même mesure $\\dfrac{\\pi}{5}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q4',
          type: 'mcq',
          prompt: 'Si $\\hat{\\alpha}$ et $\\hat{\\beta}$ ont pour mesures respectives $-\\dfrac{2\\pi}{3}$ et $-\\pi$, quelles sont des mesures de $\\hat{\\alpha} + \\hat{\\beta}$ et $\\hat{\\alpha} - \\hat{\\beta}$ ?',
          options: [
            '$-\\dfrac{5\\pi}{3}$ et $\\dfrac{\\pi}{3}$',
            '$\\dfrac{\\pi}{3}$ et $-\\dfrac{5\\pi}{3}$',
            '$-\\dfrac{\\pi}{3}$ et $-\\dfrac{5\\pi}{3}$',
            '$-\\dfrac{5\\pi}{3}$ et $-\\dfrac{\\pi}{3}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Somme : $-\\dfrac{2\\pi}{3} + (-\\pi) = -\\dfrac{5\\pi}{3}$. Différence : $-\\dfrac{2\\pi}{3} - (-\\pi) = \\dfrac{\\pi}{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q5',
          type: 'mcq',
          prompt: 'Si $\\widehat{(\\vec{u}, \\vec{v})}$ a pour mesure $-\\dfrac{\\pi}{7}$ et $\\widehat{(\\vec{u}, \\vec{w})}$ a pour mesure $\\dfrac{\\pi}{4}$, quelle est une mesure de $\\widehat{(\\vec{v}, \\vec{w})}$ ?',
          options: [
            '$\\dfrac{\\pi}{4} - \\dfrac{\\pi}{7} = \\dfrac{3\\pi}{28}$',
            '$\\dfrac{\\pi}{7} + \\dfrac{\\pi}{4} = \\dfrac{11\\pi}{28}$',
            '$-\\dfrac{\\pi}{7} - \\dfrac{\\pi}{4} = -\\dfrac{11\\pi}{28}$',
            '$\\dfrac{\\pi}{7} - \\dfrac{\\pi}{4} = -\\dfrac{3\\pi}{28}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\widehat{(\\vec{v}, \\vec{w})} = \\widehat{(\\vec{v}, \\vec{u})} + \\widehat{(\\vec{u}, \\vec{w})}$ a pour mesure $-(-\\dfrac{\\pi}{7}) + \\dfrac{\\pi}{4} = \\dfrac{11\\pi}{28}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p02_q6',
          type: 'mcq',
          prompt: 'Si $\\operatorname{Mes}\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DC})} = \\dfrac{\\pi}{12}$ et $\\operatorname{Mes}\\widehat{(\\overrightarrow{DC}, \\overrightarrow{DE})} = -\\dfrac{\\pi}{12}$, que conclut-on pour $D, E, F$ ?',
          options: [
            '$\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})} = \\hat{0}$, donc $D, E, F$ sont alignés',
            '$(DF) \\perp (DE)$',
            'Le triangle $DEF$ est équilatéral',
            '$\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})} = \\dfrac{\\pi}{6}$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Par Chasles, $\\widehat{(\\overrightarrow{DF}, \\overrightarrow{DE})}$ a pour mesure $\\dfrac{\\pi}{12} - \\dfrac{\\pi}{12} = 0$, donc $\\overrightarrow{DF}$ et $\\overrightarrow{DE}$ sont colinéaires de même sens : $D, E, F$ sont alignés.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Double d'un angle orienté, angle inscrit et cocyclicité
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03',
      order: 3,
      title: 'Double d’un angle orienté, cercle et cocyclicité',
      summary:
        'Résolution de 2α̂ = 0̂ ou 2α̂ = 2β̂, théorème de l’angle orienté inscrit, caractérisation d’un cercle 2(MA, MB) = (OA, OB) et points cocycliques.',
      conceptExplanation:
        "Le **double** d’un angle orienté $\\hat{\\alpha}$ est l’angle orienté $2\\hat{\\alpha} = \\hat{\\alpha} + \\hat{\\alpha}$, de mesure $2\\alpha$.\n\n**Équations sur les doubles** :\n- $2\\hat{\\alpha} = \\hat{0} \\iff (\\hat{\\alpha} = \\hat{0} \\text{ ou } \\hat{\\alpha} = \\hat{\\pi})$ (caractérise la **colinéarité** / l'**alignement** de $A, B, C$ lorsque $2\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\hat{0}$).\n- $2\\hat{\\alpha} = 2\\hat{\\beta} \\iff (\\hat{\\alpha} = \\hat{\\beta} \\text{ ou } \\hat{\\alpha} = \\hat{\\beta} + \\hat{\\pi})$.\n- $2\\hat{\\alpha} = \\hat{\\pi} \\iff (\\hat{\\alpha} = \\widehat{\\frac{\\pi}{2}} \\text{ ou } \\hat{\\alpha} = \\widehat{-\\frac{\\pi}{2}})$ (caractérise l'**orthogonalité**).\n\n**Angle inscrit et cercle** : soit $(\\mathcal{C})$ un cercle de centre $O$ passant par $A$ et $B$ ($A \\neq B$). Pour tout point $M$ distinct de $A$ et $B$ :\n- Si $M \\in (\\mathcal{C})$, $\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\frac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$ (sur un arc) ou $\\frac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} + \\hat{\\pi}$ (sur l’autre arc) ;\n- En doublant, on obtient la **caractérisation exacte du cercle** :\n$$M \\in (\\mathcal{C}) \\iff 2\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$$\n- **Points cocycliques** : quatre points $A, B, C, D$ (trois à trois non alignés) sont **cocycliques** si et seulement si $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$.",
      keyRule:
        'M ∈ (C) ssi 2(MA, MB) = (OA, OB). Quatre points A, B, C, D (non 3 à 3 alignés) sont cocycliques ssi 2(CA, CB) = 2(DA, DB).',
      formulas: [
        { name: 'Double nul (alignement)', formula: '2\\hat{\\alpha} = \\hat{0} \\iff \\hat{\\alpha} = \\hat{0} \\text{ ou } \\hat{\\alpha} = \\hat{\\pi}' },
        { name: 'Caractérisation d’un cercle', formula: 'M \\in \\mathcal{C}_{(O, OA)} \\iff 2\\widehat{(\\overrightarrow{MA},\\overrightarrow{MB})} = \\widehat{(\\overrightarrow{OA},\\overrightarrow{OB})}' },
        { name: 'Cocyclicité', formula: '2\\widehat{(\\overrightarrow{CA},\\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA},\\overrightarrow{DB})}' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Angles orientés inscrits sur les deux arcs AB',
        caption: 'En M₁ (grand arc), (M₁A, M₁B) = ½(OA, OB) ; en M₂ (petit arc), (M₂A, M₂B) = ½(OA, OB) + π̂ ; dans les deux cas, 2(MA, MB) = (OA, OB).',
        svgContent: `<svg viewBox="0 0 280 185" width="265" height="175" xmlns="http://www.w3.org/2000/svg">
  <circle cx="140" cy="92" r="72" fill="none" stroke="#1e293b" stroke-width="2"/>
  <polyline points="82,135 140,92 198,135" fill="none" stroke="#7c3aed" stroke-width="1.8"/>
  <polygon points="82,135 152,22 198,135" fill="none" stroke="#2563eb" stroke-width="1.8"/>
  <polyline points="82,135 150,163 198,135" fill="none" stroke="#ea580c" stroke-width="1.6" stroke-dasharray="4,3"/>
  <circle cx="140" cy="92" r="3.5" fill="#7c3aed"/><text x="135" y="84" font-size="12" font-weight="bold" fill="#7c3aed">O</text>
  <circle cx="82" cy="135" r="3.5" fill="#1e293b"/><text x="66" y="144" font-size="12" font-weight="bold" fill="#1e293b">A</text>
  <circle cx="198" cy="135" r="3.5" fill="#1e293b"/><text x="204" y="144" font-size="12" font-weight="bold" fill="#1e293b">B</text>
  <circle cx="152" cy="22" r="3.5" fill="#2563eb"/><text x="155" y="18" font-size="12" font-weight="bold" fill="#2563eb">M₁</text>
  <circle cx="150" cy="163" r="3.5" fill="#ea580c"/><text x="152" y="177" font-size="12" font-weight="bold" fill="#ea580c">M₂</text>
</svg>`,
      },
      workedExample: {
        title: 'Calculer un angle inscrit et montrer une cocyclicité',
        statement:
          '1) Sur le cercle de centre $O$, $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} = \\dfrac{2\\pi}{3}$ et $M$ se trouve sur le petit arc $\\overset{\\frown}{AB}$ (côté opposé à $O$). Calcule $\\operatorname{Mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})}$.\n2) Soit $ABC$ un triangle rectangle en $C$ et $D$ le symétrique de $C$ par rapport à $(AB)$. Montre que $A, B, C, D$ sont cocycliques.',
        methodSteps: [
          '1) Comme $M$ et $O$ sont de part et d’autre de $(AB)$, $\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} + \\hat{\\pi}$. Une mesure est $\\dfrac{\\pi}{3} + \\pi = \\dfrac{4\\pi}{3}$, dont la mesure principale est $\\dfrac{4\\pi}{3} - 2\\pi = -\\dfrac{2\\pi}{3}$.',
          '2) Les triangles $ABC$ et $ABD$ sont respectivement rectangles en $C$ et en $D$. Donc $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = \\hat{\\pi}$ et $2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})} = \\hat{\\pi}$.',
        ],
        conclusion: '1) $\\operatorname{Mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = -\\dfrac{2\\pi}{3}$ ; 2) $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$, donc $A, B, C, D$ sont cocycliques.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Double nul et colinéarité',
          stepTitle: 'Éliminer le facteur 2 en ajoutant π̂',
          paragraphText:
            'Dire que $2\\hat{\\alpha} = \\hat{0}$ ne signifie pas forcément que $\\hat{\\alpha} = \\hat{0}$ : $2\\hat{\\pi} = \\hat{0}$ aussi ! Ainsi $2\\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} = \\hat{0} \\iff \\widehat{(\\overrightarrow{AB}, \\overrightarrow{AC})} \\in \\{\\hat{0}, \\hat{\\pi}\\}$, ce qui signifie exactement que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires (donc $A, B, C$ alignés).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q1',
            type: 'mcq',
            prompt: 'Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs non nuls. À quoi est égal $2\\widehat{(\\vec{u}, -\\vec{v})}$ ?',
            options: [
              '$2\\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$',
              '$2\\widehat{(\\vec{u}, \\vec{v})}$',
              '$\\hat{0}$',
              '$-2\\widehat{(\\vec{u}, \\vec{v})}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\widehat{(\\vec{u}, -\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$, donc en doublant : $2\\widehat{(\\vec{u}, -\\vec{v})} = 2\\widehat{(\\vec{u}, \\vec{v})} + 2\\hat{\\pi} = 2\\widehat{(\\vec{u}, \\vec{v})}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Doubles d’angles dans un carré direct (Exercice 9)',
          stepTitle: 'Comparer des doubles d’angles orientés',
          paragraphText:
            'Dans un carré $ABCD$ de centre $O$ et de sens direct : $(\\overrightarrow{AB}, \\overrightarrow{AO}) = -\\dfrac{\\pi}{4}$ (ou $+\\dfrac{\\pi}{4}$ selon l’orientation $A,B,C,D$ direct : ici $A \\to B \\to C \\to D$ donne $(\\overrightarrow{AB}, \\overrightarrow{AD}) = +\\dfrac{\\pi}{2}$ si $A$ haut-gauche, $B$ bas-gauche, $C$ bas-droite, $D$ haut-droite, et $(\\overrightarrow{AB}, \\overrightarrow{AO}) = \\dfrac{\\pi}{4}$), donc $2(\\overrightarrow{AB}, \\overrightarrow{AO}) = \\dfrac{\\pi}{2} = (\\overrightarrow{AB}, \\overrightarrow{AD})$. De même, $2(\\overrightarrow{OA}, \\overrightarrow{OD}) = \\hat{\\pi}$ et $2(\\overrightarrow{AB}, \\overrightarrow{DC}) = \\hat{0}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q2',
            type: 'mcq',
            prompt: 'Pour tout vecteur non nul $\\vec{u}$, que vaut $2\\widehat{(\\vec{u}, -\\vec{u})}$ ?',
            options: ['$\\hat{\\pi}$', '$\\hat{0}$', '$\\widehat{\\frac{\\pi}{2}}$', '$-\\hat{\\pi}$'],
            correctAnswerIndex: 1,
            explanation: '$\\widehat{(\\vec{u}, -\\vec{u})} = \\hat{\\pi}$, donc $2\\widehat{(\\vec{u}, -\\vec{u})} = 2\\hat{\\pi} = \\hat{0}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Angles orientés inscrits dans un cercle',
          stepTitle: 'Angle au centre double de l’angle inscrit (+ π̂ sur le petit arc)',
          paragraphText:
            'Si $M$ appartient au cercle $(\\mathcal{C})$ de centre $O$ passant par $A$ et $B$, alors $\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$ s’il est du même côté que $O$ par rapport à $(AB)$, et $\\dfrac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} + \\hat{\\pi}$ s’il est du côté opposé.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q3',
            type: 'mcq',
            prompt: 'Sur un cercle de centre $O$, $M$ et $O$ sont du même côté de $(AB)$ et $\\operatorname{Mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{\\pi}{4}$. Que vaut $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$ ?',
            options: ['$\\dfrac{\\pi}{8}$', '$\\dfrac{\\pi}{2}$', '$-\\dfrac{\\pi}{2}$', '$\\dfrac{3\\pi}{4}$'],
            correctAnswerIndex: 1,
            explanation: 'Ici $\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$, donc $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} = 2 \\times \\dfrac{\\pi}{4} = \\dfrac{\\pi}{2}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier + π̂ sur l’arc opposé à O',
          stepTitle: 'Vérifie de quel côté de (AB) se trouve M !',
          paragraphText:
            'Lorsque $M$ est du côté opposé à $O$ par rapport à la corde $(AB)$, l’angle orienté $\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})}$ vaut $\\dfrac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} + \\hat{\\pi}$, soit une différence de $\\pi$ ! Avec $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} = \\dfrac{2\\pi}{3}$, on trouve $\\dfrac{\\pi}{3} + \\pi = \\dfrac{4\\pi}{3}$, dont la mesure principale est $-\\dfrac{2\\pi}{3}$ (et non $\\dfrac{\\pi}{3}$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q4',
            type: 'mcq',
            prompt: 'On donne $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} = \\dfrac{2\\pi}{3}$, et $M \\in (\\mathcal{C})$ est sur le petit arc $\\overset{\\frown}{AB}$ (côté opposé à $O$). Que vaut $\\operatorname{Mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})}$ ?',
            options: ['$\\dfrac{\\pi}{3}$', '$-\\dfrac{\\pi}{3}$', '$-\\dfrac{2\\pi}{3}$', '$\\dfrac{2\\pi}{3}$'],
            correctAnswerIndex: 2,
            explanation: '$\\operatorname{mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{1}{2}\\cdot\\dfrac{2\\pi}{3} + \\pi = \\dfrac{4\\pi}{3}$, dont la mesure principale est $\\dfrac{4\\pi}{3} - 2\\pi = -\\dfrac{2\\pi}{3}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Caractérisation d’un cercle et cocyclicité',
          stepTitle: 'Éliminer le + π̂ grâce au facteur 2',
          paragraphText:
            'Comme $2\\hat{\\pi} = \\hat{0}$, la condition $2\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$ caractérise TOUT le cercle $(\\mathcal{C})$ privé de $A$ et $B$. De même, $A, B, C, D$ (non 3 à 3 alignés) sont cocycliques ssi $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$.',
          formula: { name: 'Points cocycliques', formula: '2\\widehat{(\\overrightarrow{CA},\\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA},\\overrightarrow{DB})}' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q5',
            type: 'mcq',
            prompt: 'Quelle condition nécessaire et suffisante assure que quatre points $A, B, C, D$ (trois quelconques non alignés) sont cocycliques ?',
            options: [
              '$\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = \\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$',
              '$2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$',
              '$\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} + \\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})} = \\hat{0}$',
              '$CA = DA$ et $CB = DB$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Il faut égalité des DOUBLES : $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$, ce qui couvre aussi le cas où $C$ et $D$ sont sur des arcs opposés de $(AB)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Application aux triangles rectangles',
          stepTitle: 'Deux triangles rectangles de même hypoténuse',
          paragraphText:
            'Si $ABC$ est rectangle en $C$ et $D$ est le symétrique de $C$ par rapport à $(AB)$, alors $ABD$ est rectangle en $D$. On a $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = \\hat{\\pi}$ et $2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})} = \\hat{\\pi}$, donc $A, B, C, D$ appartiennent au cercle de diamètre $[AB]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q6',
            type: 'mcq',
            prompt: '$ABC$ et $ABD$ sont deux triangles rectangles respectivement en $C$ et en $D$. Quel est le centre du cercle passant par $A, B, C, D$ ?',
            options: [
              'Le milieu de $[CD]$',
              'Le milieu de $[AB]$',
              'Le centre de gravité de $ABC$',
              'Ces quatre points ne sont pas cocycliques',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les deux angles droits partagent l’hypoténuse $[AB]$, donc $A, B, C, D$ sont cocycliques sur le cercle de diamètre $[AB]$ (centre : milieu de $[AB]$).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q1',
          type: 'mcq',
          prompt: 'Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs non nuls. À quoi est égal $2\\widehat{(\\vec{u}, -\\vec{v})}$ ?',
          options: [
            '$2\\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$',
            '$2\\widehat{(\\vec{u}, \\vec{v})}$',
            '$\\hat{0}$',
            '$-2\\widehat{(\\vec{u}, \\vec{v})}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\widehat{(\\vec{u}, -\\vec{v})} = \\widehat{(\\vec{u}, \\vec{v})} + \\hat{\\pi}$, donc en doublant : $2\\widehat{(\\vec{u}, -\\vec{v})} = 2\\widehat{(\\vec{u}, \\vec{v})} + 2\\hat{\\pi} = 2\\widehat{(\\vec{u}, \\vec{v})}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q2',
          type: 'mcq',
          prompt: 'Pour tout vecteur non nul $\\vec{u}$, que vaut $2\\widehat{(\\vec{u}, -\\vec{u})}$ ?',
          options: ['$\\hat{\\pi}$', '$\\hat{0}$', '$\\widehat{\\frac{\\pi}{2}}$', '$-\\hat{\\pi}$'],
          correctAnswerIndex: 1,
          explanation: '$\\widehat{(\\vec{u}, -\\vec{u})} = \\hat{\\pi}$, donc $2\\widehat{(\\vec{u}, -\\vec{u})} = 2\\hat{\\pi} = \\hat{0}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q3',
          type: 'mcq',
          prompt: 'Sur un cercle de centre $O$, $M$ et $O$ sont du même côté de $(AB)$ et $\\operatorname{Mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{\\pi}{4}$. Que vaut $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$ ?',
          options: ['$\\dfrac{\\pi}{8}$', '$\\dfrac{\\pi}{2}$', '$-\\dfrac{\\pi}{2}$', '$\\dfrac{3\\pi}{4}$'],
          correctAnswerIndex: 1,
          explanation: 'Ici $\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{1}{2}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})}$, donc $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} = 2 \\times \\dfrac{\\pi}{4} = \\dfrac{\\pi}{2}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q4',
          type: 'mcq',
          prompt: 'On donne $\\operatorname{Mes}\\widehat{(\\overrightarrow{OA}, \\overrightarrow{OB})} = \\dfrac{2\\pi}{3}$, et $M \\in (\\mathcal{C})$ est sur le petit arc $\\overset{\\frown}{AB}$ (côté opposé à $O$). Que vaut $\\operatorname{Mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})}$ ?',
          options: ['$\\dfrac{\\pi}{3}$', '$-\\dfrac{\\pi}{3}$', '$-\\dfrac{2\\pi}{3}$', '$\\dfrac{2\\pi}{3}$'],
          correctAnswerIndex: 2,
          explanation: '$\\operatorname{mes}\\widehat{(\\overrightarrow{MA}, \\overrightarrow{MB})} = \\dfrac{1}{2}\\cdot\\dfrac{2\\pi}{3} + \\pi = \\dfrac{4\\pi}{3}$, dont la mesure principale est $\\dfrac{4\\pi}{3} - 2\\pi = -\\dfrac{2\\pi}{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q5',
          type: 'mcq',
          prompt: 'Quelle condition nécessaire et suffisante assure que quatre points $A, B, C, D$ (trois quelconques non alignés) sont cocycliques ?',
          options: [
            '$\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = \\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$',
            '$2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$',
            '$\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} + \\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})} = \\hat{0}$',
            '$CA = DA$ et $CB = DB$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Il faut égalité des DOUBLES : $2\\widehat{(\\overrightarrow{CA}, \\overrightarrow{CB})} = 2\\widehat{(\\overrightarrow{DA}, \\overrightarrow{DB})}$, ce qui couvre aussi le cas où $C$ et $D$ sont sur des arcs opposés de $(AB)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p03_q6',
          type: 'mcq',
          prompt: '$ABC$ et $ABD$ sont deux triangles rectangles respectivement en $C$ et en $D$. Quel est le centre du cercle passant par $A, B, C, D$ ?',
          options: [
            'Le milieu de $[CD]$',
            'Le milieu de $[AB]$',
            'Le centre de gravité de $ABC$',
            'Ces quatre points ne sont pas cocycliques',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les deux angles droits partagent l’hypoténuse $[AB]$, donc $A, B, C, D$ sont cocycliques sur le cercle de diamètre $[AB]$ (centre : milieu de $[AB]$).',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Lignes trigonométriques, valeurs remarquables et angles associés
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04',
      order: 4,
      title: 'Lignes trigonométriques, valeurs remarquables et angles associés',
      summary:
        'Cosinus, sinus et tangente sur le cercle trigonométrique, tableau des valeurs remarquables et formules des angles associés (−α, π−α, π+α, π/2−α, π/2+α).',
      conceptExplanation:
        "Soit $M$ le point du cercle trigonométrique $(\\mathcal{C})$ image du réel $\\alpha$ dans le repère orthonormé direct $(O, I, J)$ :\n- $\\cos \\alpha$ est l’**abscisse** de $M$ et $\\sin \\alpha$ est l’**ordonnée** de $M$, donc $M(\\cos\\alpha\\,;\\,\\sin\\alpha)$ et $\\cos^2\\alpha + \\sin^2\\alpha = 1$.\n- Pour $\\alpha \\neq \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$), la **tangente** est $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$ (lue géométriquement sur la tangente $(T)$ en $I$).\n\n**Angles associés à $\\alpha$** :\n- **Opposé ($-\\alpha$)** : $\\cos(-\\alpha) = \\cos\\alpha$, $\\sin(-\\alpha) = -\\sin\\alpha$, $\\tan(-\\alpha) = -\\tan\\alpha$.\n- **Supplémentaire ($\\pi - \\alpha$)** : $\\cos(\\pi-\\alpha) = -\\cos\\alpha$, $\\sin(\\pi-\\alpha) = \\sin\\alpha$, $\\tan(\\pi-\\alpha) = -\\tan\\alpha$.\n- **Demi-tour ($\\pi + \\alpha$)** : $\\cos(\\pi+\\alpha) = -\\cos\\alpha$, $\\sin(\\pi+\\alpha) = -\\sin\\alpha$, $\\tan(\\pi+\\alpha) = \\tan\\alpha$.\n- **Complémentaire ($\\frac{\\pi}{2} - \\alpha$)** : $\\cos(\\frac{\\pi}{2}-\\alpha) = \\sin\\alpha$, $\\sin(\\frac{\\pi}{2}-\\alpha) = \\cos\\alpha$.\n- **Quart de tour ($\\frac{\\pi}{2} + \\alpha$)** : $\\cos(\\frac{\\pi}{2}+\\alpha) = -\\sin\\alpha$, $\\sin(\\frac{\\pi}{2}+\\alpha) = \\cos\\alpha$.",
      keyRule:
        'Sur le cercle trigonométrique, cos est en abscisse et sin en ordonnée. ±π conserve cos/sin (au signe près) ; π/2 ± α échange cos et sin !',
      formulas: [
        { name: 'Tangente (α ≠ π/2 + kπ)', formula: '\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}' },
        { name: 'Relation fondamentale', formula: '\\cos^2\\alpha + \\sin^2\\alpha = 1' },
      ],
      visualSchema: {
        type: 'custom_svg',
        title: 'Lignes trigonométriques des angles remarquables',
        tableData: {
          headers: ['$\\alpha$', '$0$', '$\\pi/6$', '$\\pi/4$', '$\\pi/3$', '$\\pi/2$', '$\\pi$'],
          rows: [
            ['$\\cos\\alpha$', '$1$', '$\\sqrt{3}/2$', '$\\sqrt{2}/2$', '$1/2$', '$0$', '$-1$'],
            ['$\\sin\\alpha$', '$0$', '$1/2$', '$\\sqrt{2}/2$', '$\\sqrt{3}/2$', '$1$', '$0$'],
            ['$\\tan\\alpha$', '$0$', '$1/\\sqrt{3}$', '$1$', '$\\sqrt{3}$', 'non définie', '$0$'],
          ],
        },
      },
      workedExample: {
        title: 'Calculer cos α et sin α via les angles associés',
        statement: 'Calcule les valeurs exactes de $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$, $\\sin\\left(\\dfrac{4\\pi}{3}\\right)$ et $\\cos\\left(\\dfrac{3\\pi}{4}\\right)$.',
        methodSteps: [
          '$\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6} \\implies \\cos\\left(\\dfrac{5\\pi}{6}\\right) = -\\cos\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2}$.',
          '$\\dfrac{4\\pi}{3} = \\pi + \\dfrac{\\pi}{3} \\implies \\sin\\left(\\dfrac{4\\pi}{3}\\right) = -\\sin\\left(\\dfrac{\\pi}{3}\\right) = -\\dfrac{\\sqrt{3}}{2}$.',
          '$\\dfrac{3\\pi}{4} = \\dfrac{\\pi}{2} + \\dfrac{\\pi}{4} \\implies \\cos\\left(\\dfrac{3\\pi}{4}\\right) = -\\sin\\left(\\dfrac{\\pi}{4}\\right) = -\\dfrac{\\sqrt{2}}{2}$.',
        ],
        conclusion: 'Respectivement $-\\dfrac{\\sqrt{3}}{2}$, $-\\dfrac{\\sqrt{3}}{2}$ et $-\\dfrac{\\sqrt{2}}{2}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Cosinus et sinus sur le cercle trigonométrique',
          stepTitle: 'Abscisse = cos α, Ordonnée = sin α',
          paragraphText:
            'Sur le cercle trigonométrique de centre $O$ et de rayon $1$, tout point $M(\\alpha)$ a pour coordonnées $(\\cos\\alpha\\,;\\,\\sin\\alpha)$. Par exemple, pour $\\alpha = \\dfrac{\\pi}{2}$, $M$ est au sommet haut $J(0\\,;\\,1)$, donc $\\cos(\\frac{\\pi}{2}) = 0$ et $\\sin(\\frac{\\pi}{2}) = 1$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q1',
            type: 'mcq',
            prompt: 'Quelles sont les valeurs de $\\cos\\left(-\\dfrac{\\pi}{2}\\right)$ et $\\sin\\left(-\\dfrac{\\pi}{2}\\right)$ ?',
            options: [
              '$\\cos = 0$ et $\\sin = 1$',
              '$\\cos = 0$ et $\\sin = -1$',
              '$\\cos = -1$ et $\\sin = 0$',
              '$\\cos = 1$ et $\\sin = 0$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le point image de $-\\dfrac{\\pi}{2}$ est $J’(0\\,;\\,-1)$ tout en bas du cercle : abscisse $\\cos = 0$, ordonnée $\\sin = -1$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Ensemble de définition de la tangente',
          stepTitle: 'tan α = sin α / cos α là où cos α ≠ 0',
          paragraphText:
            'La tangente d’un angle orienté est $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$, définie pour tout réel $\\alpha \\neq \\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$). Par exemple, $\\tan\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1/2}{\\sqrt{3}/2} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q2',
            type: 'mcq',
            prompt: 'Pour quelles valeurs de $\\alpha$ la tangente $\\tan\\alpha$ N’EST-ELLE PAS définie ?',
            options: [
              '$\\alpha = k\\pi\\,(k \\in \\mathbb{Z})$',
              '$\\alpha = \\dfrac{\\pi}{2} + 2k\\pi\\,(k \\in \\mathbb{Z})$ uniquement',
              '$\\alpha = \\dfrac{\\pi}{2} + k\\pi\\,(k \\in \\mathbb{Z})$',
              '$\\alpha = \\dfrac{\\pi}{4} + k\\pi\\,(k \\in \\mathbb{Z})$',
            ],
            correctAnswerIndex: 2,
            explanation: '$\\cos\\alpha = 0 \\iff \\alpha = \\dfrac{\\pi}{2} + k\\pi\\,(k \\in \\mathbb{Z})$ (à la fois en $+\\dfrac{\\pi}{2}$ et en $-\\dfrac{\\pi}{2}$ modulo $2\\pi$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Angles −α, π − α et π + α',
          stepTitle: 'Lire les symétries par rapport aux axes et à O',
          paragraphText:
            'Par symétrie sur le cercle : $\\cos(-\\alpha) = \\cos\\alpha$ et $\\sin(-\\alpha) = -\\sin\\alpha$ ; $\\cos(\\pi-\\alpha) = -\\cos\\alpha$ et $\\sin(\\pi-\\alpha) = \\sin\\alpha$ ; $\\cos(\\pi+\\alpha) = -\\cos\\alpha$ et $\\sin(\\pi+\\alpha) = -\\sin\\alpha$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q3',
            type: 'mcq',
            prompt: 'Que valent $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$ et $\\sin\\left(\\dfrac{5\\pi}{6}\\right)$ ?',
            options: [
              '$\\dfrac{\\sqrt{3}}{2}$ et $\\dfrac{1}{2}$',
              '$-\\dfrac{\\sqrt{3}}{2}$ et $\\dfrac{1}{2}$',
              '$-\\dfrac{\\sqrt{3}}{2}$ et $-\\dfrac{1}{2}$',
              '$-\\dfrac{1}{2}$ et $\\dfrac{\\sqrt{3}}{2}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$, donc $\\cos = -\\cos(\\frac{\\pi}{6}) = -\\dfrac{\\sqrt{3}}{2}$ et $\\sin = +\\sin(\\frac{\\pi}{6}) = \\dfrac{1}{2}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Angles π/2 − α et π/2 + α',
          stepTitle: 'Le quart de tour échange cosinus et sinus',
          paragraphText:
            'La symétrie par rapport à la première bissectrice donne $\\cos(\\frac{\\pi}{2}-\\alpha) = \\sin\\alpha$ et $\\sin(\\frac{\\pi}{2}-\\alpha) = \\cos\\alpha$. Une rotation de $+\\frac{\\pi}{2}$ donne $\\cos(\\frac{\\pi}{2}+\\alpha) = -\\sin\\alpha$ et $\\sin(\\frac{\\pi}{2}+\\alpha) = \\cos\\alpha$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q4',
            type: 'mcq',
            prompt: 'À quoi est égal $\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$ pour tout réel $\\alpha$ ?',
            options: ['$\\sin\\alpha$', '$-\\sin\\alpha$', '$\\cos\\alpha$', '$-\\cos\\alpha$'],
            correctAnswerIndex: 1,
            explanation: '$\\cos(\\frac{\\pi}{2} + \\alpha) = -\\sin\\alpha$ (si $\\alpha$ est un petit angle positif, $\\frac{\\pi}{2} + \\alpha$ passe dans le 2e quadrant où l’abscisse cosinus est négative).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe de tan(π − α) et tan(π + α)',
          stepTitle: 'La tangente est π-périodique !',
          paragraphText:
            'Attention aux signes : $\\tan(\\pi + \\alpha) = \\dfrac{-\\sin\\alpha}{-\\cos\\alpha} = +\\tan\\alpha$ (la fonction tangente est périodique de période $\\pi$), tandis que $\\tan(\\pi - \\alpha) = \\dfrac{\\sin\\alpha}{-\\cos\\alpha} = -\\tan\\alpha$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\tan\\left(\\dfrac{4\\pi}{3}\\right)$ ?',
            options: ['$-\\sqrt{3}$', '$\\sqrt{3}$', '$-\\dfrac{1}{\\sqrt{3}}$', '$\\dfrac{1}{\\sqrt{3}}$'],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{4\\pi}{3} = \\pi + \\dfrac{\\pi}{3}$, et $\\tan(\\pi + \\alpha) = \\tan\\alpha$, donc $\\tan\\left(\\dfrac{4\\pi}{3}\\right) = \\tan\\left(\\dfrac{\\pi}{3}\\right) = \\sqrt{3}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calculs dans les quatre quadrants',
          stepTitle: 'Comparer −π/3, 4π/3 et 3π/4',
          paragraphText:
            'Dans le 4e quadrant ($-\\frac{\\pi}{3}$) : $\\cos > 0, \\sin < 0$, soit $(\\frac{1}{2}\\,;\\,-\\frac{\\sqrt{3}}{2})$. Dans le 3e quadrant ($\\frac{4\\pi}{3}$) : $\\cos < 0, \\sin < 0$, soit $(-\\frac{1}{2}\\,;\\,-\\frac{\\sqrt{3}}{2})$. Dans le 2e quadrant ($\\frac{3\\pi}{4}$) : $\\cos < 0, \\sin > 0$, soit $(-\\frac{\\sqrt{2}}{2}\\,;\\,\\frac{\\sqrt{2}}{2})$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\cos\\left(\\dfrac{4\\pi}{3}\\right) + \\sin\\left(-\\dfrac{\\pi}{3}\\right)$ ?',
            options: [
              '$\\dfrac{-1 - \\sqrt{3}}{2}$',
              '$\\dfrac{1 - \\sqrt{3}}{2}$',
              '$\\dfrac{-1 + \\sqrt{3}}{2}$',
              '$0$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\cos(\\frac{4\\pi}{3}) = -\\dfrac{1}{2}$ et $\\sin(-\\frac{\\pi}{3}) = -\\dfrac{\\sqrt{3}}{2}$, donc la somme vaut $\\dfrac{-1 - \\sqrt{3}}{2}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q1',
          type: 'mcq',
          prompt: 'Quelles sont les valeurs de $\\cos\\left(-\\dfrac{\\pi}{2}\\right)$ et $\\sin\\left(-\\dfrac{\\pi}{2}\\right)$ ?',
          options: [
            '$\\cos = 0$ et $\\sin = 1$',
            '$\\cos = 0$ et $\\sin = -1$',
            '$\\cos = -1$ et $\\sin = 0$',
            '$\\cos = 1$ et $\\sin = 0$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le point image de $-\\dfrac{\\pi}{2}$ est $J’(0\\,;\\,-1)$ tout en bas du cercle : abscisse $\\cos = 0$, ordonnée $\\sin = -1$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q2',
          type: 'mcq',
          prompt: 'Pour quelles valeurs de $\\alpha$ la tangente $\\tan\\alpha$ N’EST-ELLE PAS définie ?',
          options: [
            '$\\alpha = k\\pi\\,(k \\in \\mathbb{Z})$',
            '$\\alpha = \\dfrac{\\pi}{2} + 2k\\pi\\,(k \\in \\mathbb{Z})$ uniquement',
            '$\\alpha = \\dfrac{\\pi}{2} + k\\pi\\,(k \\in \\mathbb{Z})$',
            '$\\alpha = \\dfrac{\\pi}{4} + k\\pi\\,(k \\in \\mathbb{Z})$',
          ],
          correctAnswerIndex: 2,
          explanation: '$\\cos\\alpha = 0 \\iff \\alpha = \\dfrac{\\pi}{2} + k\\pi\\,(k \\in \\mathbb{Z})$ (à la fois en $+\\dfrac{\\pi}{2}$ et en $-\\dfrac{\\pi}{2}$ modulo $2\\pi$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q3',
          type: 'mcq',
          prompt: 'Que valent $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$ et $\\sin\\left(\\dfrac{5\\pi}{6}\\right)$ ?',
          options: [
            '$\\dfrac{\\sqrt{3}}{2}$ et $\\dfrac{1}{2}$',
            '$-\\dfrac{\\sqrt{3}}{2}$ et $\\dfrac{1}{2}$',
            '$-\\dfrac{\\sqrt{3}}{2}$ et $-\\dfrac{1}{2}$',
            '$-\\dfrac{1}{2}$ et $\\dfrac{\\sqrt{3}}{2}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$, donc $\\cos = -\\cos(\\frac{\\pi}{6}) = -\\dfrac{\\sqrt{3}}{2}$ et $\\sin = +\\sin(\\frac{\\pi}{6}) = \\dfrac{1}{2}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q4',
          type: 'mcq',
          prompt: 'À quoi est égal $\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$ pour tout réel $\\alpha$ ?',
          options: ['$\\sin\\alpha$', '$-\\sin\\alpha$', '$\\cos\\alpha$', '$-\\cos\\alpha$'],
          correctAnswerIndex: 1,
          explanation: '$\\cos(\\frac{\\pi}{2} + \\alpha) = -\\sin\\alpha$ (si $\\alpha$ est un petit angle positif, $\\frac{\\pi}{2} + \\alpha$ passe dans le 2e quadrant où l’abscisse cosinus est négative).',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\tan\\left(\\dfrac{4\\pi}{3}\\right)$ ?',
          options: ['$-\\sqrt{3}$', '$\\sqrt{3}$', '$-\\dfrac{1}{\\sqrt{3}}$', '$\\dfrac{1}{\\sqrt{3}}$'],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{4\\pi}{3} = \\pi + \\dfrac{\\pi}{3}$, et $\\tan(\\pi + \\alpha) = \\tan\\alpha$, donc $\\tan\\left(\\dfrac{4\\pi}{3}\\right) = \\tan\\left(\\dfrac{\\pi}{3}\\right) = \\sqrt{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p04_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\cos\\left(\\dfrac{4\\pi}{3}\\right) + \\sin\\left(-\\dfrac{\\pi}{3}\\right)$ ?',
          options: [
            '$\\dfrac{-1 - \\sqrt{3}}{2}$',
            '$\\dfrac{1 - \\sqrt{3}}{2}$',
            '$\\dfrac{-1 + \\sqrt{3}}{2}$',
            '$0$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\cos(\\frac{4\\pi}{3}) = -\\dfrac{1}{2}$ et $\\sin(-\\frac{\\pi}{3}) = -\\dfrac{\\sqrt{3}}{2}$, donc la somme vaut $\\dfrac{-1 - \\sqrt{3}}{2}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Formules trigonométriques et fonctions circulaires
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05',
      order: 5,
      title: 'Formules d’addition, duplication, linéarisation et fonctions circulaires',
      summary:
        'Formules de cos(a±b) et sin(a±b), duplication (cos 2a, sin 2a), linéarisation (cos²a, sin²a), et périodicité des fonctions sin, cos et tan.',
      conceptExplanation:
        "**1. Formules d'addition** (pour tous réels $a, b$) :\n- $\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b$\n- $\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b$\n- $\\sin(a + b) = \\sin a\\cos b + \\cos a\\sin b$\n- $\\sin(a - b) = \\sin a\\cos b - \\cos a\\sin b$\n\n**2. Duplication** ($b = a$) et **linéarisation** :\n- $\\sin 2a = 2\\sin a\\cos a$\n- $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$\n- $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$ et $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$\n\n**3. Fonctions circulaires** :\n- $\\sin$ ($\\mathbb{R} \\to \\mathbb{R}$, impaire) et $\\cos$ ($\\mathbb{R} \\to \\mathbb{R}$, paire) sont **$2\\pi$-périodiques** : on trace leur courbe sur $[-\\pi\\,;\\,\\pi]$ puis on complète par translations de vecteurs $2k\\pi\\overrightarrow{OI}$.\n- $\\tan$ est définie et continue sur $\\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}$, impaire et **$\\pi$-périodique** : on la trace sur $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{2}[$ puis on translate de $k\\pi\\overrightarrow{OI}$.",
      keyRule:
        'cos(a ± b) inverse le signe au milieu (cos cos ∓ sin sin) ; sin(a ± b) conserve le signe (sin cos ± cos sin). cos²a = (1 + cos 2a)/2 et sin²a = (1 − cos 2a)/2.',
      formulas: [
        { name: 'Addition cosinus', formula: '\\cos(a\\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b' },
        { name: 'Addition sinus', formula: '\\sin(a\\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b' },
        { name: 'Duplication', formula: '\\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a,\\quad \\sin 2a = 2\\sin a\\cos a' },
        { name: 'Linéarisation', formula: '\\cos^2 a = \\frac{1+\\cos 2a}{2},\\quad \\sin^2 a = \\frac{1-\\cos 2a}{2}' },
      ],
      visualSchema: {
        type: 'function_plot',
        title: 'Représentation des fonctions sinus (bleu) et cosinus (violet)',
        caption: 'Toutes deux sont périodiques de période 2π et comprises entre −1 et 1.',
        plot: {
          xMin: -3.5,
          xMax: 6.5,
          yMin: -1.5,
          yMax: 1.5,
          xStep: 1,
          yStep: 0.5,
          curves: [
            {
              label: 'y = sin(x)',
              color: 'blue',
              pieces: [{ expr: 'sin(x)', from: -3.3, to: 6.3 }],
            },
            {
              label: 'y = cos(x)',
              color: 'violet',
              pieces: [{ expr: 'cos(x)', from: -3.3, to: 6.3 }],
            },
          ],
        },
      },
      workedExample: {
        title: 'Calculer cos(7π/12) et sin(7π/12), et somme de cosinus (Exercice 11)',
        statement:
          '1) En remarquant que $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$, calcule $\\cos\\left(\\dfrac{7\\pi}{12}\\right)$ et $\\sin\\left(\\dfrac{7\\pi}{12}\\right)$.\n2) Démontre que $\\cos\\dfrac{\\pi}{11} + \\cos\\dfrac{3\\pi}{11} + \\cos\\dfrac{5\\pi}{11} + \\cos\\dfrac{7\\pi}{11} + \\cos\\dfrac{9\\pi}{11} = \\dfrac{1}{2}$.',
        methodSteps: [
          '1) $\\cos\\left(\\dfrac{\\pi}{4}+\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2} - \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{2}-\\sqrt{6}}{4}$ ; $\\sin\\left(\\dfrac{\\pi}{4}+\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{2}+\\sqrt{6}}{4}$.',
          '2) Grâce à $\\sin(a+b)+\\sin(a-b) = 2\\sin a\\cos b$, on multiplie la somme $S$ par $2\\sin\\dfrac{\\pi}{11}$ : $A = 2\\sin\\dfrac{\\pi}{11}\\cdot S$ devient télescopique.',
          '$A = \\sin\\dfrac{2\\pi}{11} + \\left(\\sin\\dfrac{4\\pi}{11}-\\sin\\dfrac{2\\pi}{11}\\right) + \\dots + \\left(\\sin\\dfrac{10\\pi}{11}-\\sin\\dfrac{8\\pi}{11}\\right) = \\sin\\dfrac{10\\pi}{11} = \\sin\\left(\\pi - \\dfrac{\\pi}{11}\\right) = \\sin\\dfrac{\\pi}{11}$.',
          'Comme $\\sin\\dfrac{\\pi}{11} \\neq 0$, $2\\sin\\dfrac{\\pi}{11}\\cdot S = \\sin\\dfrac{\\pi}{11} \\implies S = \\dfrac{1}{2}$.',
        ],
        conclusion: '$\\cos\\dfrac{7\\pi}{12} = \\dfrac{\\sqrt{2}-\\sqrt{6}}{4}$, $\\sin\\dfrac{7\\pi}{12} = \\dfrac{\\sqrt{2}+\\sqrt{6}}{4}$, et la somme vaut $\\dfrac{1}{2}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formules d’addition',
          stepTitle: 'cos change le signe, sin le conserve',
          paragraphText:
            'Retiens la symétrie : $\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$ et $\\cos(a-b) = \\cos a\\cos b + \\sin a\\sin b$ ; $\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$ et $\\sin(a-b) = \\sin a\\cos b - \\cos a\\sin b$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q1',
            type: 'mcq',
            prompt: 'En utilisant $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$, que vaut $\\cos\\left(\\dfrac{7\\pi}{12}\\right)$ ?',
            options: [
              '$\\dfrac{\\sqrt{2} + \\sqrt{6}}{4}$',
              '$\\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$',
              '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$',
              '$\\dfrac{\\sqrt{3} - \\sqrt{2}}{4}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\cos(\\frac{\\pi}{4})\\cos(\\frac{\\pi}{3}) - \\sin(\\frac{\\pi}{4})\\sin(\\frac{\\pi}{3}) = \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2} - \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{2}-\\sqrt{6}}{4}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formules de duplication et linéarisation',
          stepTitle: 'Passer du degré 2 à l’angle double (et inversement)',
          paragraphText:
            'Les trois écritures de $\\cos 2a$ sont $\\cos^2 a - \\sin^2 a$, $2\\cos^2 a - 1$ et $1 - 2\\sin^2 a$. On en déduit immédiatement les formules de linéarisation : $2\\cos^2 a = 1 + \\cos 2a$ et $2\\sin^2 a = 1 - \\cos 2a$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q2',
            type: 'mcq',
            prompt: 'Parmi ces expressions, à quoi est égal $2\\sin^2 a$ ?',
            options: ['$1 + \\cos 2a$', '$1 - \\cos 2a$', '$\\sin 2a$', '$2\\cos^2 a - 1$'],
            correctAnswerIndex: 1,
            explanation: 'Puisque $\\cos 2a = 1 - 2\\sin^2 a$, on obtient $2\\sin^2 a = 1 - \\cos 2a$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre sin 2a et 2 sin a',
          stepTitle: 'sin(2a) n’est PAS égal à 2 sin(a) !',
          paragraphText:
            'Pour tout réel $a$, $\\sin(2a) = 2\\sin a\\cos a$ (il y a le facteur $\\cos a$). De même, $\\cos(a+b) \\neq \\cos a + \\cos b$. Par exemple $\\sin(2 \\times \\frac{\\pi}{4}) = \\sin(\\frac{\\pi}{2}) = 1$, alors que $2\\sin(\\frac{\\pi}{4}) = \\sqrt{2} \\neq 1$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q3',
            type: 'mcq',
            prompt: 'À quoi est égal $\\sin 2a$ pour tout réel $a$ ?',
            options: ['$2\\sin a$', '$1 - 2\\sin^2 a$', '$2\\sin a\\cos a$', '$\\cos^2 a - \\sin^2 a$'],
            correctAnswerIndex: 2,
            explanation: 'Par la formule d’addition $\\sin(a+a) = \\sin a\\cos a + \\cos a\\sin a = 2\\sin a\\cos a$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Produit en somme : 2 sin a cos b',
          stepTitle: 'Utiliser sin(a+b) + sin(a−b) pour faire apparaître une somme télescopique',
          paragraphText:
            'En additionnant $\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$ et $\\sin(a-b) = \\sin a\\cos b - \\cos a\\sin b$, les termes en $\\cos a\\sin b$ s’éliminent : $2\\sin a\\cos b = \\sin(a+b) + \\sin(a-b)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q4',
            type: 'mcq',
            prompt: 'Que vaut $2\\sin\\left(\\dfrac{\\pi}{11}\\right)\\cos\\left(\\dfrac{3\\pi}{11}\\right)$ à l’aide de la formule $2\\sin a\\cos b = \\sin(a+b) + \\sin(a-b)$ ?',
            options: [
              '$\\sin\\dfrac{4\\pi}{11} + \\sin\\dfrac{2\\pi}{11}$',
              '$\\sin\\dfrac{4\\pi}{11} - \\sin\\dfrac{2\\pi}{11}$',
              '$\\cos\\dfrac{4\\pi}{11} - \\cos\\dfrac{2\\pi}{11}$',
              '$\\sin\\dfrac{3\\pi}{11} - \\sin\\dfrac{\\pi}{11}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$a + b = \\dfrac{4\\pi}{11}$ et $a - b = -\\dfrac{2\\pi}{11}$. Comme $\\sin$ est impaire, $\\sin(-\\frac{2\\pi}{11}) = -\\sin(\\frac{2\\pi}{11})$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Périodicité et tracé des fonctions circulaires',
          stepTitle: 'Translater le motif de base de 2π ou de π',
          paragraphText:
            'Les courbes de $x \\mapsto \\sin x$ et $x \\mapsto \\cos x$ se construisent sur $[-\\pi\\,;\\,\\pi]$ (ou $[0\\,;\\,2\\pi]$) puis se complètent par translations de vecteurs $2\\pi\\overrightarrow{OI}$ et $-2\\pi\\overrightarrow{OI}$. Celle de $x \\mapsto \\tan x$ se trace sur $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{2}[$ puis se translate de $\\pi\\overrightarrow{OI}$ et $-\\pi\\overrightarrow{OI}$ (asymptotes verticales en $\\frac{\\pi}{2} + k\\pi$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q5',
            type: 'mcq',
            prompt: 'Par quelles translations complète-t-on la courbe de la fonction tangente à partir de l’intervalle $]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}[$ ?',
            options: [
              'Des translations de vecteurs $2k\\pi\\overrightarrow{OI}$ ($k \\in \\mathbb{Z}$)',
              'Des translations de vecteurs $k\\pi\\overrightarrow{OI}$ ($k \\in \\mathbb{Z}$)',
              'Des translations de vecteurs $k\\dfrac{\\pi}{2}\\overrightarrow{OI}$ ($k \\in \\mathbb{Z}$)',
              'La fonction tangente n’est pas périodique',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\tan(x + \\pi) = \\tan x$, donc la fonction tangente est $\\pi$-périodique et se reproduit tous les $\\pi\\overrightarrow{OI}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Période d’une fonction cos(ax + b)',
          stepTitle: 'Étudier f(x) = cos(2x + 5)',
          paragraphText:
            'Pour $f(x) = \\cos(2x + 5)$, l’ajout de $2\\pi$ dans l’argument correspond à $2(x + T) + 5 = 2x + 5 + 2\\pi \\iff T = \\pi$. Ainsi $f$ est périodique de période $\\pi$ et bornée entre $-1$ et $1$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q6',
            type: 'mcq',
            prompt: 'Quelle est la plus petite période strictement positive de la fonction $f(x) = \\cos(2x + 5)$ ?',
            options: ['$2\\pi$', '$\\pi$', '$\\dfrac{\\pi}{2}$', '$5$'],
            correctAnswerIndex: 1,
            explanation: '$\\cos(2(x + \\pi) + 5) = \\cos(2x + 5 + 2\\pi) = \\cos(2x + 5)$, donc la période est $\\dfrac{2\\pi}{2} = \\pi$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q1',
          type: 'mcq',
          prompt: 'En utilisant $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$, que vaut $\\cos\\left(\\dfrac{7\\pi}{12}\\right)$ ?',
          options: [
            '$\\dfrac{\\sqrt{2} + \\sqrt{6}}{4}$',
            '$\\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$',
            '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$',
            '$\\dfrac{\\sqrt{3} - \\sqrt{2}}{4}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\cos(\\frac{\\pi}{4})\\cos(\\frac{\\pi}{3}) - \\sin(\\frac{\\pi}{4})\\sin(\\frac{\\pi}{3}) = \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2} - \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{2}-\\sqrt{6}}{4}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q2',
          type: 'mcq',
          prompt: 'Parmi ces expressions, à quoi est égal $2\\sin^2 a$ ?',
          options: ['$1 + \\cos 2a$', '$1 - \\cos 2a$', '$\\sin 2a$', '$2\\cos^2 a - 1$'],
          correctAnswerIndex: 1,
          explanation: 'Puisque $\\cos 2a = 1 - 2\\sin^2 a$, on obtient $2\\sin^2 a = 1 - \\cos 2a$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q3',
          type: 'mcq',
          prompt: 'À quoi est égal $\\sin 2a$ pour tout réel $a$ ?',
          options: ['$2\\sin a$', '$1 - 2\\sin^2 a$', '$2\\sin a\\cos a$', '$\\cos^2 a - \\sin^2 a$'],
          correctAnswerIndex: 2,
          explanation: 'Par la formule d’addition $\\sin(a+a) = \\sin a\\cos a + \\cos a\\sin a = 2\\sin a\\cos a$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q4',
          type: 'mcq',
          prompt: 'Que vaut $2\\sin\\left(\\dfrac{\\pi}{11}\\right)\\cos\\left(\\dfrac{3\\pi}{11}\\right)$ à l’aide de la formule $2\\sin a\\cos b = \\sin(a+b) + \\sin(a-b)$ ?',
          options: [
            '$\\sin\\dfrac{4\\pi}{11} + \\sin\\dfrac{2\\pi}{11}$',
            '$\\sin\\dfrac{4\\pi}{11} - \\sin\\dfrac{2\\pi}{11}$',
            '$\\cos\\dfrac{4\\pi}{11} - \\cos\\dfrac{2\\pi}{11}$',
            '$\\sin\\dfrac{3\\pi}{11} - \\sin\\dfrac{\\pi}{11}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$a + b = \\dfrac{4\\pi}{11}$ et $a - b = -\\dfrac{2\\pi}{11}$. Comme $\\sin$ est impaire, $\\sin(-\\frac{2\\pi}{11}) = -\\sin(\\frac{2\\pi}{11})$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q5',
          type: 'mcq',
          prompt: 'Par quelles translations complète-t-on la courbe de la fonction tangente à partir de l’intervalle $]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}[$ ?',
          options: [
            'Des translations de vecteurs $2k\\pi\\overrightarrow{OI}$ ($k \\in \\mathbb{Z}$)',
            'Des translations de vecteurs $k\\pi\\overrightarrow{OI}$ ($k \\in \\mathbb{Z}$)',
            'Des translations de vecteurs $k\\dfrac{\\pi}{2}\\overrightarrow{OI}$ ($k \\in \\mathbb{Z}$)',
            'La fonction tangente n’est pas périodique',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\tan(x + \\pi) = \\tan x$, donc la fonction tangente est $\\pi$-périodique et se reproduit tous les $\\pi\\overrightarrow{OI}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p05_q6',
          type: 'mcq',
          prompt: 'Quelle est la plus petite période strictement positive de la fonction $f(x) = \\cos(2x + 5)$ ?',
          options: ['$2\\pi$', '$\\pi$', '$\\dfrac{\\pi}{2}$', '$5$'],
          correctAnswerIndex: 1,
          explanation: '$\\cos(2(x + \\pi) + 5) = \\cos(2x + 5 + 2\\pi) = \\cos(2x + 5)$, donc la période est $\\dfrac{2\\pi}{2} = \\pi$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Équations trigonométriques et équation a cos x + b sin x + c = 0
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06',
      order: 6,
      title: 'Équations trigonométriques et méthode de a cos x + b sin x + c = 0',
      summary:
        'Résolution dans ℝ de cos x = cos a, sin x = sin a, tan x = tan a, réduction r cos(x − α) de a cos x + b sin x, et situation complexe du couloir.',
      conceptExplanation:
        "**1. Équations élémentaires dans $\\mathbb{R}$** ($k \\in \\mathbb{Z}$) :\n- $\\cos x = \\cos a \\iff (x = a + 2k\\pi \\text{ ou } x = -a + 2k\\pi)$\n- $\\sin x = \\sin a \\iff (x = a + 2k\\pi \\text{ ou } x = \\pi - a + 2k\\pi)$\n- $\\tan x = \\tan a \\iff x = a + k\\pi$ (pour $x, a \\neq \\frac{\\pi}{2} + n\\pi$)\n- Cas particuliers : $\\cos x = -1 \\iff x = (2k+1)\\pi$ ; $\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi$ ; $\\sin x = 0 \\iff x = k\\pi$.\n\n**2. Équation $a\\cos x + b\\sin x + c = 0$** ($a \\neq 0, b \\neq 0$) :\nOn factorise par $r = \\sqrt{a^2 + b^2}$ :\n$$a\\cos x + b\\sin x = \\sqrt{a^2+b^2}\\left(\\frac{a}{\\sqrt{a^2+b^2}}\\cos x + \\frac{b}{\\sqrt{a^2+b^2}}\\sin x\\right) = \\sqrt{a^2+b^2}\\cos(x - \\alpha)$$\noù $\\alpha$ vérifie $\\cos\\alpha = \\dfrac{a}{\\sqrt{a^2+b^2}}$ et $\\sin\\alpha = \\dfrac{b}{\\sqrt{a^2+b^2}}$. L'équation se ramène alors à $\\cos(x - \\alpha) = \\dfrac{-c}{\\sqrt{a^2+b^2}}$ (qui n'a de solutions que si $|c| \\le \\sqrt{a^2+b^2}$).",
      keyRule:
        'cos x = cos a donne x = ±a + 2kπ ; sin x = sin a donne a ou π − a (+ 2kπ) ; tan x = tan a donne a + kπ. Pour a cos x + b sin x, on factorise par √(a² + b²).',
      formulas: [
        { name: 'cos x = cos a', formula: 'x = a + 2k\\pi \\quad\\text{ou}\\quad x = -a + 2k\\pi\\quad (k \\in \\mathbb{Z})' },
        { name: 'sin x = sin a', formula: 'x = a + 2k\\pi \\quad\\text{ou}\\quad x = \\pi - a + 2k\\pi\\quad (k \\in \\mathbb{Z})' },
        { name: 'Réduction linéaire', formula: 'a\\cos x + b\\sin x = \\sqrt{a^2+b^2}\\cos(x - \\alpha)' },
      ],
      workedExample: {
        title: 'Résoudre √3 cos x + sin x = √2 puis la situation du couloir',
        statement:
          '1) Résous dans $\\mathbb{R}$ : $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$.\n2) Un couloir de largeur $\\sqrt{3}\\text{ m}$ tourne à angle droit vers un couloir de largeur $1\\text{ m}$ ; une barre de longueur $4\\text{ m}$ passant par l’angle intérieur $O$ fait un angle $\\alpha \\in \\,]0\\,;\\,\\frac{\\pi}{2}[$ avec le premier mur. Détermine les valeurs possibles de $\\alpha$.',
        methodSteps: [
          '1) $r = \\sqrt{(\\sqrt{3})^2 + 1^2} = 2$. On écrit $2(\\frac{\\sqrt{3}}{2}\\cos x + \\frac{1}{2}\\sin x) = \\sqrt{2} \\iff \\cos(x - \\frac{\\pi}{6}) = \\frac{\\sqrt{2}}{2} = \\cos\\frac{\\pi}{4}$.',
          'D’où $x - \\frac{\\pi}{6} = \\frac{\\pi}{4} + 2k\\pi \\implies x = \\frac{5\\pi}{12} + 2k\\pi$, ou $x - \\frac{\\pi}{6} = -\\frac{\\pi}{4} + 2k\\pi \\implies x = -\\frac{\\pi}{12} + 2k\\pi$.',
          '2) $OA = \\dfrac{\\sqrt{3}}{\\sin\\alpha}$ et $OB = \\dfrac{1}{\\cos\\alpha}$, donc $AB = \\dfrac{\\sqrt{3}\\cos\\alpha + \\sin\\alpha}{\\sin\\alpha\\cos\\alpha} = 4 \\iff 2\\cos(\\alpha - \\frac{\\pi}{6}) = 2\\sin 2\\alpha = 2\\cos(\\frac{\\pi}{2} - 2\\alpha)$.',
          'On obtient $\\alpha = \\dfrac{2\\pi}{9} + \\dfrac{2k\\pi}{3}$ ou $\\alpha = \\dfrac{\\pi}{3} - 2k\\pi$. Dans $]0\\,;\\,\\frac{\\pi}{2}[$, il y a deux solutions : $\\alpha = \\dfrac{2\\pi}{9}$ et $\\alpha = \\dfrac{\\pi}{3}$ (Séry a raison).',
        ],
        conclusion: '1) $x = \\frac{5\\pi}{12} + 2k\\pi$ ou $-\\frac{\\pi}{12} + 2k\\pi$ ; 2) $\\alpha \\in \\{\\frac{2\\pi}{9}, \\frac{\\pi}{3}\\}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Équations cos x = cos a et sin x = sin a',
          stepTitle: 'Ne pas oublier la deuxième famille de solutions',
          paragraphText:
            'Dans $\\mathbb{R}$, $\\cos x = \\dfrac{1}{2} = \\cos\\dfrac{\\pi}{3}$ donne $x = \\dfrac{\\pi}{3} + 2k\\pi$ OU $x = -\\dfrac{\\pi}{3} + 2k\\pi$. Et $\\sin x = -\\dfrac{\\sqrt{3}}{2} = \\sin\\left(-\\dfrac{\\pi}{3}\\right)$ donne $x = -\\dfrac{\\pi}{3} + 2k\\pi$ OU $x = \\pi - (-\\dfrac{\\pi}{3}) + 2k\\pi = \\dfrac{4\\pi}{3} + 2k\\pi$ (soit $-\\dfrac{2\\pi}{3} + 2k\\pi$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q1',
            type: 'mcq',
            prompt: 'Quelles sont les solutions dans $\\mathbb{R}$ de $\\sin x = -\\dfrac{\\sqrt{3}}{2}$ ($k \\in \\mathbb{Z}$) ?',
            options: [
              '$x = -\\dfrac{\\pi}{3} + 2k\\pi$ ou $x = \\dfrac{\\pi}{3} + 2k\\pi$',
              '$x = -\\dfrac{\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{2\\pi}{3} + 2k\\pi$',
              '$x = \\dfrac{2\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{2\\pi}{3} + 2k\\pi$',
              '$x = -\\dfrac{\\pi}{3} + k\\pi$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\sin(-\\frac{\\pi}{3}) = -\\dfrac{\\sqrt{3}}{2}$ et $\\pi - (-\\frac{\\pi}{3}) = \\dfrac{4\\pi}{3} \\equiv -\\dfrac{2\\pi}{3} \\,[2\\pi]$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Équation tan x = tan a et cas particuliers',
          stepTitle: 'Modulo π pour tangente, modulo 2π ou π selon cos/sin',
          paragraphText:
            'Pour la tangente, il n’y a qu’une seule famille modulo $\\pi$ : $\\tan x = 1 \\iff \\tan x = \\tan\\frac{\\pi}{4} \\iff x = \\frac{\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$). Pour $\\cos x = 0$, on écrit en une seule famille $x = \\frac{\\pi}{2} + k\\pi$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q2',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des solutions dans $\\mathbb{R}$ de $\\tan x = 1$ ?',
            options: [
              '$\\left\\{\\dfrac{\\pi}{4} + 2k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
              '$\\left\\{\\dfrac{\\pi}{4} + k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
              '$\\left\\{\\dfrac{\\pi}{4} + 2k\\pi,\\; -\\dfrac{\\pi}{4} + 2k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
              '$\\left\\{\\dfrac{\\pi}{2} + k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\tan x = \\tan\\frac{\\pi}{4} \\iff x = \\dfrac{\\pi}{4} + k\\pi\\,(k \\in \\mathbb{Z})$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Transformer a cos x + b sin x en r cos(x − α)',
          stepTitle: 'Factoriser par r = √(a² + b²)',
          paragraphText:
            'Pour résoudre $a\\cos x + b\\sin x = -c$, on met $\\sqrt{a^2+b^2}$ en facteur. Dans $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$, $r = \\sqrt{3+1} = 2$, d’où $\\dfrac{\\sqrt{3}}{2}\\cos x + \\dfrac{1}{2}\\sin x = \\cos\\dfrac{\\pi}{6}\\cos x + \\sin\\dfrac{\\pi}{6}\\sin x = \\cos\\left(x - \\dfrac{\\pi}{6}\\right)$.',
          formula: { name: 'Factorisation', formula: '\\sqrt{3}\\cos x + \\sin x = 2\\cos\\left(x - \\frac{\\pi}{6}\\right)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q3',
            type: 'mcq',
            prompt: 'Comment s’écrit l’expression $\\cos 2x - \\sqrt{3}\\sin 2x$ sous la forme $r\\cos(2x - \\alpha)$ ?',
            options: [
              '$2\\cos\\left(2x - \\dfrac{\\pi}{3}\\right)$',
              '$2\\cos\\left(2x + \\dfrac{\\pi}{3}\\right)$',
              '$2\\cos\\left(2x + \\dfrac{\\pi}{6}\\right)$',
              '$\\sqrt{2}\\cos\\left(2x + \\dfrac{\\pi}{3}\\right)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$r = \\sqrt{1 + 3} = 2$ : $2\\left(\\frac{1}{2}\\cos 2x - \\frac{\\sqrt{3}}{2}\\sin 2x\\right) = 2\\left(\\cos\\frac{\\pi}{3}\\cos 2x - \\sin\\frac{\\pi}{3}\\sin 2x\\right) = 2\\cos\\left(2x + \\frac{\\pi}{3}\\right)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier le signe de 2x lorsqu’on divise par 2',
          stepTitle: 'Divise aussi le + 2kπ par 2 !',
          paragraphText:
            'Dans $\\cos\\left(2x + \\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2} = \\cos\\dfrac{2\\pi}{3}$, on écrit d’abord $2x + \\dfrac{\\pi}{3} = \\pm\\dfrac{2\\pi}{3} + 2k\\pi$, PUIS on divise TOUTE l’égalité par $2$ (y compris $2k\\pi$ qui devient $+ k\\pi$) ! On obtient $x = \\dfrac{\\pi}{6} + k\\pi$ ou $x = -\\dfrac{\\pi}{2} + k\\pi$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q4',
            type: 'mcq',
            prompt: 'Quelles sont les solutions dans $\\mathbb{R}$ de $\\cos\\left(2x + \\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2}$ ($k \\in \\mathbb{Z}$) ?',
            options: [
              '$x = \\dfrac{\\pi}{6} + 2k\\pi$ ou $x = -\\dfrac{\\pi}{2} + 2k\\pi$',
              '$x = \\dfrac{\\pi}{6} + k\\pi$ ou $x = -\\dfrac{\\pi}{2} + k\\pi$',
              '$x = \\dfrac{\\pi}{3} + k\\pi$ ou $x = -\\pi + k\\pi$',
              '$x = \\dfrac{\\pi}{6} + k\\pi$ uniquement',
            ],
            correctAnswerIndex: 1,
            explanation: 'La division par $2$ transforme $+2k\\pi$ en $+k\\pi$ : $2x = \\frac{\\pi}{3} + 2k\\pi \\implies x = \\frac{\\pi}{6} + k\\pi$, et $2x = -\\pi + 2k\\pi \\implies x = -\\frac{\\pi}{2} + k\\pi$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Sélectionner les solutions dans un intervalle donné',
          stepTitle: 'Encadrer les entiers k pour lister toutes les racines',
          paragraphText:
            'Pour trouver les solutions de l’équation précédente dans $]-\\dfrac{3\\pi}{2}\\,;\\,2\\pi]$, on résout $-\\dfrac{3\\pi}{2} < \\dfrac{\\pi}{6} + k\\pi \\le 2\\pi \\iff -\\dfrac{10}{6} < k \\le \\dfrac{11}{6}$ ($k \\in \\{-1, 0, 1\\}$, donnant $-\\frac{5\\pi}{6}, \\frac{\\pi}{6}, \\frac{7\\pi}{6}$) et $-\\dfrac{3\\pi}{2} < -\\dfrac{\\pi}{2} + k\\pi \\le 2\\pi \\iff -1 < k \\le \\dfrac{5}{2}$ ($k \\in \\{0, 1, 2\\}$, donnant $-\\frac{\\pi}{2}, \\frac{\\pi}{2}, \\frac{3\\pi}{2}$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q5',
            type: 'mcq',
            prompt: 'Combien de solutions possède l’équation $\\cos 2x - \\sqrt{3}\\sin 2x = -1$ dans l’intervalle $\\left]-\\dfrac{3\\pi}{2}\\,;\\,2\\pi\\right]$ ?',
            options: ['$2$ solutions', '$4$ solutions', '$6$ solutions', '$8$ solutions'],
            correctAnswerIndex: 2,
            explanation: 'Trois valeurs de $k$ pour la première famille ($-\\frac{5\\pi}{6}, \\frac{\\pi}{6}, \\frac{7\\pi}{6}$) et trois pour la seconde ($-\\frac{\\pi}{2}, \\frac{\\pi}{2}, \\frac{3\\pi}{2}$), soit $6$ solutions au total.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Situation complexe : équation du couloir à angle droit',
          stepTitle: 'Convertir sin 2α en cos(π/2 − 2α)',
          paragraphText:
            'Dans la situation complexe du couloir, l’équation $\\dfrac{\\sqrt{3}\\cos\\alpha + \\sin\\alpha}{\\sin\\alpha\\cos\\alpha} = 4$ se ramène à $\\cos\\left(\\alpha - \\dfrac{\\pi}{6}\\right) = \\sin 2\\alpha = \\cos\\left(\\dfrac{\\pi}{2} - 2\\alpha\\right)$. Sur $]0\\,;\\,\\frac{\\pi}{2}[$, on obtient $\\alpha = \\dfrac{2\\pi}{9}$ ($k=0$ dans $\\frac{2\\pi}{9} + \\frac{2k\\pi}{3}$) et $\\alpha = \\dfrac{\\pi}{3}$ ($k=0$ dans $\\frac{\\pi}{3} - 2k\\pi$) : c’est donc Séry qui a raison.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q6',
            type: 'mcq',
            prompt: 'Pour l’équation $\\cos\\left(\\alpha - \\dfrac{\\pi}{6}\\right) = \\cos\\left(\\dfrac{\\pi}{2} - 2\\alpha\\right)$ sur $\\left]0\\,;\\,\\dfrac{\\pi}{2}\\right[$, qui de Séry ($\\frac{2\\pi}{9}$ ou $\\frac{\\pi}{3}$) ou de son voisin ($\\frac{\\pi}{3}$ seulement) a raison ?',
            options: [
              'Le voisin, car $\\dfrac{2\\pi}{9}$ est hors de $\\left]0\\,;\\,\\dfrac{\\pi}{2}\\right[$',
              'Séry, car $\\dfrac{2\\pi}{9}$ et $\\dfrac{\\pi}{3}$ appartiennent tous deux à $\\left]0\\,;\\,\\dfrac{\\pi}{2}\\right[$ et vérifient l’équation',
              'Aucun des deux : la seule solution est $\\dfrac{\\pi}{6}$',
              'Séry se trompe : $2\\pi/9 > \\pi/2$',
            ],
            correctAnswerIndex: 1,
            explanation: '$0 < \\dfrac{2\\pi}{9} < \\dfrac{\\pi}{3} < \\dfrac{\\pi}{2}$ (puisque $\\frac{2}{9} < \\frac{1}{3} < \\frac{1}{2}$), et les deux vérifient $AB = 4\\text{ m}$ : Séry a donc raison.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q1',
          type: 'mcq',
          prompt: 'Quelles sont les solutions dans $\\mathbb{R}$ de $\\sin x = -\\dfrac{\\sqrt{3}}{2}$ ($k \\in \\mathbb{Z}$) ?',
          options: [
            '$x = -\\dfrac{\\pi}{3} + 2k\\pi$ ou $x = \\dfrac{\\pi}{3} + 2k\\pi$',
            '$x = -\\dfrac{\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{2\\pi}{3} + 2k\\pi$',
            '$x = \\dfrac{2\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{2\\pi}{3} + 2k\\pi$',
            '$x = -\\dfrac{\\pi}{3} + k\\pi$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\sin(-\\frac{\\pi}{3}) = -\\dfrac{\\sqrt{3}}{2}$ et $\\pi - (-\\frac{\\pi}{3}) = \\dfrac{4\\pi}{3} \\equiv -\\dfrac{2\\pi}{3} \\,[2\\pi]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q2',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des solutions dans $\\mathbb{R}$ de $\\tan x = 1$ ?',
          options: [
            '$\\left\\{\\dfrac{\\pi}{4} + 2k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
            '$\\left\\{\\dfrac{\\pi}{4} + k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
            '$\\left\\{\\dfrac{\\pi}{4} + 2k\\pi,\\; -\\dfrac{\\pi}{4} + 2k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
            '$\\left\\{\\dfrac{\\pi}{2} + k\\pi,\\; k \\in \\mathbb{Z}\\right\\}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\tan x = \\tan\\frac{\\pi}{4} \\iff x = \\dfrac{\\pi}{4} + k\\pi\\,(k \\in \\mathbb{Z})$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q3',
          type: 'mcq',
          prompt: 'Comment s’écrit l’expression $\\cos 2x - \\sqrt{3}\\sin 2x$ sous la forme $r\\cos(2x - \\alpha)$ ?',
          options: [
            '$2\\cos\\left(2x - \\dfrac{\\pi}{3}\\right)$',
            '$2\\cos\\left(2x + \\dfrac{\\pi}{3}\\right)$',
            '$2\\cos\\left(2x + \\dfrac{\\pi}{6}\\right)$',
            '$\\sqrt{2}\\cos\\left(2x + \\dfrac{\\pi}{3}\\right)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$r = \\sqrt{1 + 3} = 2$ : $2\\left(\\frac{1}{2}\\cos 2x - \\frac{\\sqrt{3}}{2}\\sin 2x\\right) = 2\\left(\\cos\\frac{\\pi}{3}\\cos 2x - \\sin\\frac{\\pi}{3}\\sin 2x\\right) = 2\\cos\\left(2x + \\frac{\\pi}{3}\\right)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q4',
          type: 'mcq',
          prompt: 'Quelles sont les solutions dans $\\mathbb{R}$ de $\\cos\\left(2x + \\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2}$ ($k \\in \\mathbb{Z}$) ?',
          options: [
            '$x = \\dfrac{\\pi}{6} + 2k\\pi$ ou $x = -\\dfrac{\\pi}{2} + 2k\\pi$',
            '$x = \\dfrac{\\pi}{6} + k\\pi$ ou $x = -\\dfrac{\\pi}{2} + k\\pi$',
            '$x = \\dfrac{\\pi}{3} + k\\pi$ ou $x = -\\pi + k\\pi$',
            '$x = \\dfrac{\\pi}{6} + k\\pi$ uniquement',
          ],
          correctAnswerIndex: 1,
          explanation: 'La division par $2$ transforme $+2k\\pi$ en $+k\\pi$ : $2x = \\frac{\\pi}{3} + 2k\\pi \\implies x = \\frac{\\pi}{6} + k\\pi$, et $2x = -\\pi + 2k\\pi \\implies x = -\\frac{\\pi}{2} + k\\pi$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q5',
          type: 'mcq',
          prompt: 'Combien de solutions possède l’équation $\\cos 2x - \\sqrt{3}\\sin 2x = -1$ dans l’intervalle $\\left]-\\dfrac{3\\pi}{2}\\,;\\,2\\pi\\right]$ ?',
          options: ['$2$ solutions', '$4$ solutions', '$6$ solutions', '$8$ solutions'],
          correctAnswerIndex: 2,
          explanation: 'Trois valeurs de $k$ pour la première famille ($-\\frac{5\\pi}{6}, \\frac{\\pi}{6}, \\frac{7\\pi}{6}$) et trois pour la seconde ($-\\frac{\\pi}{2}, \\frac{\\pi}{2}, \\frac{3\\pi}{2}$), soit $6$ solutions au total.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p06_q6',
          type: 'mcq',
          prompt: 'Pour l’équation $\\cos\\left(\\alpha - \\dfrac{\\pi}{6}\\right) = \\cos\\left(\\dfrac{\\pi}{2} - 2\\alpha\\right)$ sur $\\left]0\\,;\\,\\dfrac{\\pi}{2}\\right[$, qui de Séry ($\\frac{2\\pi}{9}$ ou $\\frac{\\pi}{3}$) ou de son voisin ($\\frac{\\pi}{3}$ seulement) a raison ?',
          options: [
            'Le voisin, car $\\dfrac{2\\pi}{9}$ est hors de $\\left]0\\,;\\,\\dfrac{\\pi}{2}\\right[$',
            'Séry, car $\\dfrac{2\\pi}{9}$ et $\\dfrac{\\pi}{3}$ appartiennent tous deux à $\\left]0\\,;\\,\\dfrac{\\pi}{2}\\right[$ et vérifient l’équation',
            'Aucun des deux : la seule solution est $\\dfrac{\\pi}{6}$',
            'Séry se trompe : $2\\pi/9 > \\pi/2$',
          ],
          correctAnswerIndex: 1,
          explanation: '$0 < \\dfrac{2\\pi}{9} < \\dfrac{\\pi}{3} < \\dfrac{\\pi}{2}$ (puisque $\\frac{2}{9} < \\frac{1}{3} < \\frac{1}{2}$), et les deux vérifient $AB = 4\\text{ m}$ : Séry a donc raison.',
        },
      ],
    },

    // ========================================================================
    // POINT 7 : Inéquations trigonométriques sur le cercle
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07',
      order: 7,
      title: 'Inéquations trigonométriques sur le cercle',
      summary:
        'Méthode graphique sur le cercle trigonométrique et la droite tangente pour résoudre sin x > a, cos x ≤ a et tan x < a dans ]−π ; π] ou [0 ; 2π].',
      conceptExplanation:
        "La résolution d’une inéquation trigonométrique sur un intervalle d’amplitude $2\\pi$ (comme $]-\\pi\\,;\\,\\pi]$ ou $[0\\,;\\,2\\pi]$) se fait géométriquement sur le cercle trigonométrique $(\\mathcal{C})$ :\n1. **Pour $\\sin x > a$ (ou $\\ge, <, \\le$)** : on trace la droite horizontale $y = a$, on repère les points d’intersection $M, N$ avec $(\\mathcal{C})$ et on lit dans l'intervalle demandé les abscisses curvilignes de l’arc situé au-dessus (ou en dessous) de $y = a$.\n2. **Pour $\\cos x \\le a$** : on trace la droite verticale $x = a$ et on lit l'arc situé à gauche de cette droite.\n3. **Pour $\\tan x < a$** : on tient d'abord compte des **valeurs interdites** ($x \\neq \\frac{\\pi}{2} + k\\pi$), on place sur la tangente $(T)$ en $I$ le point d'ordonnée $a$, on trace la droite passant par $O$, puis on lit les arcs correspondants **en parcourant le cercle dans le sens trigonométrique (croissant)** de la borne inférieure à la borne supérieure de l'intervalle imposé !",
      keyRule:
        'Toujours parcourir le cercle trigonométrique dans le sens direct (de la borne gauche à la borne droite de l’intervalle) sans oublier d’exclure ±π/2 pour tan x.',
      formulas: [
        { name: 'sin x > −1/2 sur ]−π ; π]', formula: '\\left]-\\pi\\,;\\,-\\frac{5\\pi}{6}\\right[ \\cup \\left]-\\frac{\\pi}{6}\\,;\\,\\pi\\right]' },
        { name: 'cos x ≤ −√3/2 sur [0 ; 2π]', formula: '\\left[\\frac{5\\pi}{6}\\,;\\,\\frac{7\\pi}{6}\\right]' },
        { name: 'tan x < 1 sur ]−π ; π]', formula: '\\left]-\\pi\\,;\\,-\\frac{3\\pi}{4}\\right[ \\cup \\left]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}\\right[ \\cup \\left]\\frac{\\pi}{2}\\,;\\,\\pi\\right]' },
      ],
      workedExample: {
        title: 'Résoudre trois inéquations trigonométriques de référence',
        statement:
          'Résous : 1) $\\sin x > -\\dfrac{1}{2}$ dans $]-\\pi\\,;\\,\\pi]$ ; 2) $\\cos x \\le -\\dfrac{\\sqrt{3}}{2}$ dans $[0\\,;\\,2\\pi]$ ; 3) $\\tan x < 1$ dans $]-\\pi\\,;\\,\\pi]$.',
        methodSteps: [
          '1) Les images sur $(\\mathcal{C})$ d’ordonnée $-\\dfrac{1}{2}$ dans $]-\\pi\\,;\\,\\pi]$ sont $-\\dfrac{5\\pi}{6}$ et $-\\dfrac{\\pi}{6}$. L’arc d’ordonnée $> -\\dfrac{1}{2}$ va de $-\\pi$ à $-\\dfrac{5\\pi}{6}$ (exclu) puis de $-\\dfrac{\\pi}{6}$ (exclu) à $\\pi$ (inclus).',
          '2) Sur $[0\\,;\\,2\\pi]$, l’abscisse vaut $-\\dfrac{\\sqrt{3}}{2}$ en $\\dfrac{5\\pi}{6}$ et $\\dfrac{7\\pi}{6}$. L’arc à gauche (abscisse $\\le -\\dfrac{\\sqrt{3}}{2}$) est $\\left[\\dfrac{5\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right]$.',
          '3) Pour $\\tan x < 1$ sur $]-\\pi\\,;\\,\\pi]$ : valeurs interdites $-\\dfrac{\\pi}{2}$ et $\\dfrac{\\pi}{2}$ ; $\\tan x = 1$ en $-\\dfrac{3\\pi}{4}$ et $\\dfrac{\\pi}{4}$. Sur $]-\\pi\\,;\\,\\pi]$, $\\tan x < 1$ sur $]-\\pi\\,;\\,-\\frac{3\\pi}{4}[ \\cup ]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[ \\cup ]\\frac{\\pi}{2}\\,;\\,\\pi]$.',
        ],
        conclusion: '1) $]-\\pi\\,;\\,-\\frac{5\\pi}{6}[ \\cup ]-\\frac{\\pi}{6}\\,;\\,\\pi]$ ; 2) $[\\frac{5\\pi}{6}\\,;\\,\\frac{7\\pi}{6}]$ ; 3) $]-\\pi\\,;\\,-\\frac{3\\pi}{4}[ \\cup ]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[ \\cup ]\\frac{\\pi}{2}\\,;\\,\\pi]$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Lire sin x > −1/2 sur ]−π ; π]',
          stepTitle: 'Attention : sur ]−π ; π], l’arc traverse −π/+π en deux morceaux !',
          paragraphText:
            'Dans $]-\\pi\\,;\\,\\pi]$, on part de $-\\pi$ (en bas à gauche en tournant dans le sens positif). De $-\\pi$ à $-\\dfrac{5\\pi}{6}$, l’ordonnée $\\sin x$ est comprise entre $0$ et $-\\dfrac{1}{2}$, donc strictement supérieure à $-\\dfrac{1}{2}$ ! Entre $-\\dfrac{5\\pi}{6}$ et $-\\dfrac{\\pi}{6}$, elle passe en dessous. Puis de $-\\dfrac{\\pi}{6}$ à $\\pi$, elle repasse au-dessus.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q1',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des solutions de $\\sin x > -\\dfrac{1}{2}$ dans $\\left]-\\pi\\,;\\,\\pi\\right]$ ?',
            options: [
              '$\\left]-\\dfrac{5\\pi}{6}\\,;\\,-\\dfrac{\\pi}{6}\\right[$',
              '$\\left]-\\dfrac{\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right[$',
              '$\\left]-\\pi\\,;\\,-\\dfrac{5\\pi}{6}\\right[ \\cup \\left]-\\dfrac{\\pi}{6}\\,;\\,\\pi\\right]$',
              '$\\left[-\\pi\\,;\\,-\\dfrac{5\\pi}{6}\\right] \\cup \\left[-\\dfrac{\\pi}{6}\\,;\\,\\pi\\right]$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Sur $]-\\pi\\,;\\,\\pi]$, la condition stricte $>$ exclut $-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$, et en $x=\\pi$ on a $\\sin\\pi = 0 > -\\frac{1}{2}$ donc $\\pi$ est inclus.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Adapter les bornes à l’intervalle [0 ; 2π]',
          stepTitle: 'Donner les mesures dans [0 ; 2π] et non dans ]−π ; π]',
          paragraphText:
            'Pour résoudre $\\cos x \\le -\\dfrac{\\sqrt{3}}{2}$ dans $[0\\,;\\,2\\pi]$, on ne doit pas écrire $\\left[\\dfrac{5\\pi}{6}\\,;\\,-\\dfrac{5\\pi}{6}\\right]$ (ce qui est impossible car $\\frac{5\\pi}{6} > -\\frac{5\\pi}{6}$ !). Il faut renommer $-\\dfrac{5\\pi}{6} + 2\\pi = \\dfrac{7\\pi}{6}$, ce qui donne un intervalle croissant : $\\left[\\dfrac{5\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q2',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des solutions de $\\cos x \\le -\\dfrac{\\sqrt{3}}{2}$ dans $[0\\,;\\,2\\pi]$ ?',
            options: [
              '$\\left[0\\,;\\,\\dfrac{5\\pi}{6}\\right] \\cup \\left[\\dfrac{7\\pi}{6}\\,;\\,2\\pi\\right]$',
              '$\\left[\\dfrac{5\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right]$',
              '$\\left]\\dfrac{5\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right[$',
              '$\\left[\\dfrac{2\\pi}{3}\\,;\\,\\dfrac{4\\pi}{3}\\right]$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $x \\in [\\frac{5\\pi}{6}\\,;\\,\\frac{7\\pi}{6}]$, l’abscisse $\\cos x$ est inférieure ou égale à $-\\dfrac{\\sqrt{3}}{2}$, bornes incluses car l’inégalité est large ($\\le$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier d’exclure les valeurs interdites ±π/2 pour tan x',
          stepTitle: 'En ±π/2, la tangente n’existe pas !',
          paragraphText:
            'Beaucoup d’élèves oublient les pôles de $\\tan x$ et écrivent un intervalle continu en traversant $\\pm\\dfrac{\\pi}{2}$. Par exemple, juste avant $\\dfrac{\\pi}{2}$, $\\tan x \\to +\\infty > 1$, donc $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[$ s’arrête à $\\frac{\\pi}{4}$ et ne reprend qu’après $\\dfrac{\\pi}{2}$, où $\\tan x < 0 < 1$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q3',
            type: 'mcq',
            prompt: 'Sur l’intervalle $\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}\\right[$, où a-t-on $\\tan x < 1$ ?',
            options: [
              '$\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{4}\\right[$',
              '$\\left]\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{2}\\right[$',
              '$\\left[-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right]$',
              '$\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}\\right[$ tout entier',
            ],
            correctAnswerIndex: 0,
            explanation: 'Sur $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{2}[$, la fonction tangente est strictement croissante et vaut $1$ en $\\frac{\\pi}{4}$, donc $\\tan x < 1 \\iff x \\in \\,]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Compléter tan x < 1 sur ]−π ; π]',
          stepTitle: 'Vérifier les 3 morceaux de ]−π ; π]',
          paragraphText:
            'Dans $]-\\pi\\,;\\,\\pi]$, $\\tan x = 1$ en $-\\dfrac{3\\pi}{4}$ et $\\dfrac{\\pi}{4}$, et les valeurs interdites sont $-\\dfrac{\\pi}{2}$ et $\\dfrac{\\pi}{2}$. En lisant de gauche à droite : pour $]-\\pi\\,;\\,-\\frac{3\\pi}{4}[$, $0 < \\tan x < 1$ ; pour $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[$, $\\tan x < 1$ ; pour $]\\frac{\\pi}{2}\\,;\\,\\pi]$, $\\tan x \\le 0 < 1$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q4',
            type: 'mcq',
            prompt: 'Quel est l’ensemble des solutions de $\\tan x < 1$ dans $\\left]-\\pi\\,;\\,\\pi\\right]$ ?',
            options: [
              '$\\left]-\\pi\\,;\\,-\\dfrac{3\\pi}{4}\\right[ \\cup \\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{4}\\right[ \\cup \\left]\\dfrac{\\pi}{2}\\,;\\,\\pi\\right]$',
              '$\\left]-\\dfrac{3\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$',
              '$\\left]-\\pi\\,;\\,\\dfrac{\\pi}{4}\\right[$',
              '$\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{4}\\right[ \\cup \\left]\\dfrac{\\pi}{2}\\,;\\,\\pi\\right]$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les trois intervalles où la droite $(OM)$ coupe $(T)$ en une ordonnée $< 1$ sont $]-\\pi\\,;\\,-\\frac{3\\pi}{4}[$, $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[$ et $]\\frac{\\pi}{2}\\,;\\,\\pi]$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Bornes incluses ou exclues',
          stepTitle: 'Test rapide en prenant une valeur dans l’intervalle',
          paragraphText:
            'Pour vérifier une solution d’inéquation trigonométrique sans erreur, teste deux valeurs simples : $0$ et $\\pi$ (ou $\\frac{\\pi}{2}$). Par exemple, pour $\\tan x < 1$ en $x = \\pi$, $\\tan\\pi = 0 < 1$ : $\\pi$ doit impérativement être inclus ! Pour $\\sin x > -\\frac{1}{2}$ en $x = 0$, $\\sin 0 = 0 > -\\frac{1}{2}$ : $0$ doit être dans la solution.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q5',
            type: 'mcq',
            prompt: 'Sur $[0\\,;\\,2\\pi]$, quel est l’ensemble des solutions de $\\sin x \\ge \\dfrac{1}{2}$ ?',
            options: [
              '$\\left[\\dfrac{\\pi}{6}\\,;\\,\\dfrac{5\\pi}{6}\\right]$',
              '$\\left[\\dfrac{\\pi}{3}\\,;\\,\\dfrac{2\\pi}{3}\\right]$',
              '$\\left[0\\,;\\,\\dfrac{\\pi}{6}\\right] \\cup \\left[\\dfrac{5\\pi}{6}\\,;\\,2\\pi\\right]$',
              '$\\left]\\dfrac{\\pi}{6}\\,;\\,\\dfrac{5\\pi}{6}\\right[$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Dans $[0\\,;\\,2\\pi]$, $\\sin x = \\frac{1}{2}$ en $\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$, et $\\sin x \\ge \\frac{1}{2}$ au-dessus (autour de $\\frac{\\pi}{2}$ où $\\sin = 1$). Bornes incluses car $\\ge$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Inéquation avec facteur 2 ou cos(x) ≥ 0',
          stepTitle: 'Résoudre cos x > √2/2 sur ]−π ; π]',
          paragraphText:
            'Sur $]-\\pi\\,;\\,\\pi]$, les points d’abscisse $\\dfrac{\\sqrt{2}}{2}$ correspondent à $-\\dfrac{\\pi}{4}$ et $+\\dfrac{\\pi}{4}$. L’arc situé à droite (abscisse $> \\dfrac{\\sqrt{2}}{2}$, contenant $x = 0$ où $\\cos 0 = 1$) est en un seul tenant : $\\left]-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q6',
            type: 'mcq',
            prompt: 'Sur $\\left]-\\pi\\,;\\,\\pi\\right]$, quel est l’ensemble des solutions de $\\cos x > \\dfrac{\\sqrt{2}}{2}$ ?',
            options: [
              '$\\left]-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$',
              '$\\left[-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right]$',
              '$\\left]-\\pi\\,;\\,-\\dfrac{\\pi}{4}\\right[ \\cup \\left]\\dfrac{\\pi}{4}\\,;\\,\\pi\\right]$',
              '$\\left]\\dfrac{\\pi}{4}\\,;\\,\\dfrac{7\\pi}{4}\\right[$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Sur $]-\\pi\\,;\\,\\pi]$, $\\cos x > \\frac{\\sqrt{2}}{2}$ correspond à l’arc passant par $I(0)$, soit l’intervalle ouvert $\\left]-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q1',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des solutions de $\\sin x > -\\dfrac{1}{2}$ dans $\\left]-\\pi\\,;\\,\\pi\\right]$ ?',
          options: [
            '$\\left]-\\dfrac{5\\pi}{6}\\,;\\,-\\dfrac{\\pi}{6}\\right[$',
            '$\\left]-\\dfrac{\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right[$',
            '$\\left]-\\pi\\,;\\,-\\dfrac{5\\pi}{6}\\right[ \\cup \\left]-\\dfrac{\\pi}{6}\\,;\\,\\pi\\right]$',
            '$\\left[-\\pi\\,;\\,-\\dfrac{5\\pi}{6}\\right] \\cup \\left[-\\dfrac{\\pi}{6}\\,;\\,\\pi\\right]$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Sur $]-\\pi\\,;\\,\\pi]$, la condition stricte $>$ exclut $-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$, et en $x=\\pi$ on a $\\sin\\pi = 0 > -\\frac{1}{2}$ donc $\\pi$ est inclus.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q2',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des solutions de $\\cos x \\le -\\dfrac{\\sqrt{3}}{2}$ dans $[0\\,;\\,2\\pi]$ ?',
          options: [
            '$\\left[0\\,;\\,\\dfrac{5\\pi}{6}\\right] \\cup \\left[\\dfrac{7\\pi}{6}\\,;\\,2\\pi\\right]$',
            '$\\left[\\dfrac{5\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right]$',
            '$\\left]\\dfrac{5\\pi}{6}\\,;\\,\\dfrac{7\\pi}{6}\\right[$',
            '$\\left[\\dfrac{2\\pi}{3}\\,;\\,\\dfrac{4\\pi}{3}\\right]$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $x \\in [\\frac{5\\pi}{6}\\,;\\,\\frac{7\\pi}{6}]$, l’abscisse $\\cos x$ est inférieure ou égale à $-\\dfrac{\\sqrt{3}}{2}$, bornes incluses car l’inégalité est large ($\\le$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q3',
          type: 'mcq',
          prompt: 'Sur l’intervalle $\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}\\right[$, où a-t-on $\\tan x < 1$ ?',
          options: [
            '$\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{4}\\right[$',
            '$\\left]\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{2}\\right[$',
            '$\\left[-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right]$',
            '$\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}\\right[$ tout entier',
          ],
          correctAnswerIndex: 0,
          explanation: 'Sur $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{2}[$, la fonction tangente est strictement croissante et vaut $1$ en $\\frac{\\pi}{4}$, donc $\\tan x < 1 \\iff x \\in \\,]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q4',
          type: 'mcq',
          prompt: 'Quel est l’ensemble des solutions de $\\tan x < 1$ dans $\\left]-\\pi\\,;\\,\\pi\\right]$ ?',
          options: [
            '$\\left]-\\pi\\,;\\,-\\dfrac{3\\pi}{4}\\right[ \\cup \\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{4}\\right[ \\cup \\left]\\dfrac{\\pi}{2}\\,;\\,\\pi\\right]$',
            '$\\left]-\\dfrac{3\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$',
            '$\\left]-\\pi\\,;\\,\\dfrac{\\pi}{4}\\right[$',
            '$\\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{4}\\right[ \\cup \\left]\\dfrac{\\pi}{2}\\,;\\,\\pi\\right]$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Les trois intervalles où la droite $(OM)$ coupe $(T)$ en une ordonnée $< 1$ sont $]-\\pi\\,;\\,-\\frac{3\\pi}{4}[$, $]-\\frac{\\pi}{2}\\,;\\,\\frac{\\pi}{4}[$ et $]\\frac{\\pi}{2}\\,;\\,\\pi]$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q5',
          type: 'mcq',
          prompt: 'Sur $[0\\,;\\,2\\pi]$, quel est l’ensemble des solutions de $\\sin x \\ge \\dfrac{1}{2}$ ?',
          options: [
            '$\\left[\\dfrac{\\pi}{6}\\,;\\,\\dfrac{5\\pi}{6}\\right]$',
            '$\\left[\\dfrac{\\pi}{3}\\,;\\,\\dfrac{2\\pi}{3}\\right]$',
            '$\\left[0\\,;\\,\\dfrac{\\pi}{6}\\right] \\cup \\left[\\dfrac{5\\pi}{6}\\,;\\,2\\pi\\right]$',
            '$\\left]\\dfrac{\\pi}{6}\\,;\\,\\dfrac{5\\pi}{6}\\right[$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Dans $[0\\,;\\,2\\pi]$, $\\sin x = \\frac{1}{2}$ en $\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$, et $\\sin x \\ge \\frac{1}{2}$ au-dessus (autour de $\\frac{\\pi}{2}$ où $\\sin = 1$). Bornes incluses car $\\ge$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l06_angles_orientes_trigonometrie_p07_q6',
          type: 'mcq',
          prompt: 'Sur $\\left]-\\pi\\,;\\,\\pi\\right]$, quel est l’ensemble des solutions de $\\cos x > \\dfrac{\\sqrt{2}}{2}$ ?',
          options: [
            '$\\left]-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$',
            '$\\left[-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right]$',
            '$\\left]-\\pi\\,;\\,-\\dfrac{\\pi}{4}\\right[ \\cup \\left]\\dfrac{\\pi}{4}\\,;\\,\\pi\\right]$',
            '$\\left]\\dfrac{\\pi}{4}\\,;\\,\\dfrac{7\\pi}{4}\\right[$',
          ],
          correctAnswerIndex: 0,
          explanation: 'Sur $]-\\pi\\,;\\,\\pi]$, $\\cos x > \\frac{\\sqrt{2}}{2}$ correspond à l’arc passant par $I(0)$, soit l’intervalle ouvert $\\left]-\\dfrac{\\pi}{4}\\,;\\,\\dfrac{\\pi}{4}\\right[$.',
        },
      ],
    },
  ],
};
