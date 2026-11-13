import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 5 : Limites et continuité.pdf » (format v2).
export const MATHS_1RE_C_L05_LIMITES_CONTINUITE: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l05_limites_continuite',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 5,
  title: 'Leçon 5 : Limites et continuité',
  summary:
    'Notion de limite finie en un point, continuité en un point et lecture graphique, fonctions élémentaires et opérations continues, limite à gauche et à droite, calcul de limites et formes indéterminées 0/0.',
  officialVolumeHours: 8,
  contentVersion: 2,
  source: '1ère C - Leçon 5 : Limites et continuité.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Notion de limite en un point et unicité
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l05_limites_continuite_p01',
      order: 1,
      title: 'Notion de limite finie en un point et unicité',
      summary: 'Comprendre la notation lim(x→a) f(x) = l, son unicité et le lien lorsque f est définie en a.',
      conceptExplanation:
        "Soit $f$ une fonction numérique et $a$ un nombre réel (appartenant à $D_f$ ou borne ouverte de $D_f$). Lorsqu'en choisissant $x$ suffisamment proche de $a$ (avec $x \\neq a$), les valeurs $f(x)$ deviennent arbitrairement proches d'un même nombre réel $l$, on dit que **$f$ admet pour limite $l$ en $a$** et on écrit :\n$$\\lim_{x\\to a} f(x) = l$$\n\n**Propriétés fondamentales** :\n- **Unicité** : lorsqu'une fonction admet une limite en $a$, cette limite est **unique**.\n- **Cas où $f$ est définie en $a$** : si $f$ est définie en $a$ et admet une limite en $a$, alors nécessairement $\\lim_{x\\to a} f(x) = f(a)$.",
      keyRule:
        'Si une fonction f admet une limite en a, celle-ci est unique ; si de plus f est définie en a, cette limite vaut obligatoirement f(a).',
      formulas: [
        { name: 'Limite finie en a', formula: '\\lim_{x\\to a} f(x) = l' },
        { name: 'Lien avec f(a) si a ∈ Df', formula: 'a \\in D_f \\text{ et } \\lim_{x\\to a} f(x) \\text{ existe} \\implies \\lim_{x\\to a} f(x) = f(a)' },
      ],
      workedExample: {
        title: 'Étudier la limite en un point de f(x) = 2x − 1 et g(x) = 2 + 4/x',
        statement:
          '1. Pour $f(x) = 2x - 1$ définie sur $\\mathbb{R}$, calcule $\\lim_{x\\to 5} f(x)$.\n2. Pour $g(x) = 2 + \\dfrac{4}{x}$ définie sur $\\mathbb{R}^*$, $g$ admet-elle une limite en $-2$ ? Peut-on écrire $\\lim_{x\\to 0} g(x) = g(0)$ ?',
        methodSteps: [
          '1. Pour $x$ proche de $5$, $2x - 1$ se rapproche de $2\\times 5 - 1 = 9$, donc $\\lim_{x\\to 5} f(x) = 9$.',
          '2. En $-2 \\in \\mathbb{R}^*$, $g$ est bien définie et rationnelle : $\\lim_{x\\to -2} g(x) = 2 + \\dfrac{4}{-2} = 0$.',
          'En revanche, $0 \\notin D_g$ donc $g(0)$ n’existe pas, et quand $x$ approche $0$, $4/x$ diverge vers $\\pm\\infty$ : $g$ n’a pas de limite finie en $0$.',
        ],
        conclusion: '$\\lim_{x\\to 5}(2x-1) = 9$ ; $g$ admet $0$ pour limite en $-2$, mais aucune limite finie en $0$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Signification de lim f(x) = l',
          stepTitle: 'Comprendre « x suffisamment proche de a »',
          paragraphText:
            "Dire que $\\lim_{x\\to a} f(x) = l$ signifie que plus $x$ se rapproche de $a$, plus $f(x)$ se rapproche du réel $l$. Par exemple, pour $f(x) = x^2$, lorsque $x$ s'approche de $2$, $x^2$ s'approche de $4$, donc $\\lim_{x\\to 2} x^2 = 4$.",
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q1',
            type: 'mcq',
            prompt: 'Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x - 1$. Quelle est la limite $\\lim_{x\\to 5} f(x)$ ?',
            options: ['$8$', '$5$', '$9$', '$10$'],
            correctAnswerIndex: 2,
            explanation: 'Lorsque $x$ tend vers $5$, $2x - 1$ tend vers $2\\times 5 - 1 = 9$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Unicité de la limite',
          stepTitle: 'Une fonction ne peut pas avoir deux limites distinctes en a',
          paragraphText:
            'Lorsqu’une fonction $f$ admet une limite en un point $a$, cette limite est unique. Si $f(x)$ se rapproche de deux nombres différents selon la façon dont $x$ approche $a$, alors $f$ n’admet pas de limite en $a$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q2',
            type: 'mcq',
            prompt:
              'Une fonction $f$ peut-elle admettre simultanément deux limites distinctes $l_1 \\neq l_2$ lorsque $x$ tend vers $a$ ?',
            options: [
              'Oui, si $a$ est une valeur positive',
              'Oui, si $f$ est une fonction rationnelle',
              'Non, la limite en un point, lorsqu’elle existe, est toujours unique',
              'Oui, si $a \\notin D_f$',
            ],
            correctAnswerIndex: 2,
            explanation: 'C’est le théorème d’unicité de la limite : une fonction ne peut tendre vers deux réels distincts en un même point $a$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Limite quand f est définie en a',
          stepTitle: 'Égalité nécessaire entre la limite et f(a)',
          paragraphText:
            'Si $f$ est définie en $a$ et admet une limite finie en $a$, alors cette limite vaut obligatoirement $f(a)$ : $\\lim_{x\\to a} f(x) = f(a)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q3',
            type: 'mcq',
            prompt:
              'Si $f$ est définie en $3$ avec $f(3) = 5$ et admet une limite finie en $3$, que vaut obligatoirement $\\lim_{x\\to 3} f(x)$ ?',
            options: ['$3$', '$5$', '$0$', 'On ne peut pas savoir'],
            correctAnswerIndex: 1,
            explanation: 'Par propriété, si $f$ est définie en $a$ et admet une limite en $a$, alors $\\lim_{x\\to a} f(x) = f(a) = 5$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Écrire f(0) hors de Df',
          stepTitle: 'Vérifier d’abord si le point appartient à Df',
          paragraphText:
            'Pour $f(x) = 2 + \\dfrac{4}{x}$ définie sur $\\mathbb{R}^*$, écrire $\\lim_{x\\to 0} f(x) = f(0)$ est doublement faux : $0 \\notin D_f$ donc $f(0)$ n’existe pas, et $f$ n’admet pas de limite finie en $0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q4',
            type: 'mcq',
            prompt: 'Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x) = 2 + \\dfrac{4}{x}$. Quelle affirmation est vraie ?',
            options: [
              '$\\lim_{x\\to 0} f(x) = f(0)$',
              '$f$ admet une limite finie en $0$',
              '$f$ admet une limite finie en $-2$, égale à $0$',
              '$f$ n’admet de limite en aucun réel',
            ],
            correctAnswerIndex: 2,
            explanation: 'En $-2 \\neq 0$, $f$ est définie et $\\lim_{x\\to -2} f(x) = 2 + \\dfrac{4}{-2} = 0$. En $0$, $f$ n’est pas définie et diverge.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul direct par substitution',
          stepTitle: 'Remplacer x par a quand l’expression existe en a',
          paragraphText:
            'Lorsqu’une fonction usuelle (polynôme, fraction sans dénominateur nul, racine de nombre positif) est définie en $a$, on calcule directement $\\lim_{x\\to a} f(x)$ en évaluant $f(a)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -3} (x^2 - 2x + 1)$ ?',
            options: ['$4$', '$16$', '$-2$', '$10$'],
            correctAnswerIndex: 1,
            explanation: 'En remplaçant $x$ par $-3$, on obtient $(-3)^2 - 2(-3) + 1 = 9 + 6 + 1 = 16$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Cas de la fonction constante',
          stepTitle: 'Limite d’une fonction constante en tout point',
          paragraphText:
            'La fonction constante $x \\mapsto c$ garde toujours la valeur $c$, quelle que soit la valeur de $x$ : ainsi $\\lim_{x\\to \\sqrt{3}} (2 - \\sqrt{7}) = 2 - \\sqrt{7}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q6',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to \\sqrt{3}} (2 - \\sqrt{7})$ ?',
            options: ['$\\sqrt{3}$', '$0$', '$2 - \\sqrt{7}$', '$2 + \\sqrt{3} - \\sqrt{7}$'],
            correctAnswerIndex: 2,
            explanation: 'La fonction $x \\mapsto 2 - \\sqrt{7}$ est constante, sa limite en tout réel vaut $2 - \\sqrt{7}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q1',
          type: 'mcq',
          prompt: 'Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x - 1$. Quelle est la limite $\\lim_{x\\to 5} f(x)$ ?',
          options: ['$8$', '$5$', '$9$', '$10$'],
          correctAnswerIndex: 2,
          explanation: 'Lorsque $x$ tend vers $5$, $2x - 1$ tend vers $2\\times 5 - 1 = 9$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q2',
          type: 'mcq',
          prompt:
            'Une fonction $f$ peut-elle admettre simultanément deux limites distinctes $l_1 \\neq l_2$ lorsque $x$ tend vers $a$ ?',
          options: [
            'Oui, si $a$ est une valeur positive',
            'Oui, si $f$ est une fonction rationnelle',
            'Non, la limite en un point, lorsqu’elle existe, est toujours unique',
            'Oui, si $a \\notin D_f$',
          ],
          correctAnswerIndex: 2,
          explanation: 'C’est le théorème d’unicité de la limite : une fonction ne peut tendre vers deux réels distincts en un même point $a$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q3',
          type: 'mcq',
          prompt:
            'Si $f$ est définie en $3$ avec $f(3) = 5$ et admet une limite finie en $3$, que vaut obligatoirement $\\lim_{x\\to 3} f(x)$ ?',
          options: ['$3$', '$5$', '$0$', 'On ne peut pas savoir'],
          correctAnswerIndex: 1,
          explanation: 'Par propriété, si $f$ est définie en $a$ et admet une limite en $a$, alors $\\lim_{x\\to a} f(x) = f(a) = 5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q4',
          type: 'mcq',
          prompt: 'Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x) = 2 + \\dfrac{4}{x}$. Quelle affirmation est vraie ?',
          options: [
            '$\\lim_{x\\to 0} f(x) = f(0)$',
            '$f$ admet une limite finie en $0$',
            '$f$ admet une limite finie en $-2$, égale à $0$',
            '$f$ n’admet de limite en aucun réel',
          ],
          correctAnswerIndex: 2,
          explanation: 'En $-2 \\neq 0$, $f$ est définie et $\\lim_{x\\to -2} f(x) = 2 + \\dfrac{4}{-2} = 0$. En $0$, $f$ n’est pas définie et diverge.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -3} (x^2 - 2x + 1)$ ?',
          options: ['$4$', '$16$', '$-2$', '$10$'],
          correctAnswerIndex: 1,
          explanation: 'En remplaçant $x$ par $-3$, on obtient $(-3)^2 - 2(-3) + 1 = 9 + 6 + 1 = 16$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p01_q6',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to \\sqrt{3}} (2 - \\sqrt{7})$ ?',
          options: ['$\\sqrt{3}$', '$0$', '$2 - \\sqrt{7}$', '$2 + \\sqrt{3} - \\sqrt{7}$'],
          correctAnswerIndex: 2,
          explanation: 'La fonction $x \\mapsto 2 - \\sqrt{7}$ est constante, sa limite en tout réel vaut $2 - \\sqrt{7}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Continuité d'une fonction en un point a
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l05_limites_continuite_p02',
      order: 2,
      title: 'Continuité d’une fonction en un point a',
      summary: 'Vérifier les deux conditions (a ∈ Df et lim f(x) = f(a)) et reconnaître graphiquement la continuité.',
      conceptExplanation:
        "Soit $f$ une fonction et $a$ un nombre réel.\n\nOn dit que **$f$ est continue en $a$** lorsque :\n1. $f$ est **définie en $a$** ($a \\in D_f$),\n2. $f$ admet une limite finie en $a$ et $\\lim_{x\\to a} f(x) = f(a)$.\n\n**Interprétation graphique** : la courbe $(C_f)$ est continue en $a$ lorsqu'on peut la tracer autour du point d'abscisse $a$ **sans lever le crayon**, sans trou (cercle vide) ni saut brusque au niveau de $x = a$.",
      keyRule:
        'Pour qu’une fonction soit continue en a, il faut OBLIGATOIREMENT deux choses : a ∈ Df ET lim(x→a) f(x) = f(a).',
      formulas: [
        { name: 'Définition de la continuité en a', formula: 'a \\in D_f \\quad \\text{et} \\quad \\lim_{x\\to a} f(x) = f(a)' },
      ],
      workedExample: {
        title: 'Étudier la continuité de f(x) = 2x + 1/x en 2 et en 0',
        statement: 'Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x) = 2x + \\dfrac{1}{x}$. Étudie sa continuité en $2$, puis en $0$.',
        methodSteps: [
          'En $a = 2$ : $2 \\in \\mathbb{R}^*$, donc $f$ est définie en $2$ et $f(2) = 2(2) + \\dfrac{1}{2} = 4 + \\dfrac{1}{2} = \\dfrac{9}{2}$.',
          'De plus, $\\lim_{x\\to 2} \\left(2x + \\dfrac{1}{x}\\right) = 4 + \\dfrac{1}{2} = \\dfrac{9}{2} = f(2)$, donc $f$ est continue en $2$.',
          'En $a = 0$ : $0 \\notin \\mathbb{R}^* = D_f$, donc $f$ n’est pas définie en $0$ et ne peut pas être continue en $0$.',
        ],
        conclusion: '$f$ est continue en $2$, mais n’est pas continue en $0$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Continuité en un point',
          stepTitle: 'Les deux conditions de la continuité en a',
          paragraphText:
            'Une fonction $f$ est continue en $a$ si et seulement si $a \\in D_f$ (donc $f(a)$ existe) et $\\lim_{x\\to a} f(x) = f(a)$. Si une seule de ces deux conditions manque, $f$ est discontinue en $a$.',
          formula: { name: 'Continuité en a', formula: 'a \\in D_f \\text{ et } \\lim_{x\\to a} f(x) = f(a)' },
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q1',
            type: 'mcq',
            prompt:
              'Quelle condition traduit exactement le fait qu’une fonction $f$ définie en $a$ est continue en $a$ ?',
            options: [
              '$\\lim_{x\\to a} f(x) = 0$',
              '$\\lim_{x\\to a} f(x) = a$',
              '$\\lim_{x\\to a} f(x) = f(a)$',
              '$f(a) = 0$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Par définition, $f$ est continue en $a \\in D_f$ lorsque $\\lim_{x\\to a} f(x) = f(a)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Point hors domaine Df',
          stepTitle: 'Une fonction ne peut pas être continue hors de Df',
          paragraphText:
            'Même si la limite en $b$ existe (courbe avec un « trou » en $b$), si $b \\notin D_f$, alors $f(b)$ n’existe pas : $f$ n’est donc pas continue en $b$. Par exemple, $f(x) = \\dfrac{x^2+4x+1}{x+3}$ n’est pas définie en $-3$, donc elle n’est pas continue en $-3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q2',
            type: 'mcq',
            prompt:
              'Soit $f(x) = \\dfrac{x^2 + 4x + 1}{x + 3}$. Que peut-on dire de la continuité de $f$ en $a = -3$ ?',
            options: [
              '$f$ est continue en $-3$ car son numérateur ne s’annule pas',
              '$f$ n’est pas continue en $-3$ car $-3 \\notin D_f$',
              '$f$ est continue en $-3$ et vaut $-2$',
              '$f$ est continue sur $\\mathbb{R}$ tout entier',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le domaine de définition est $\\mathbb{R}\\setminus\\{-3\\}$. Comme $f$ n’est pas définie en $-3$, elle ne peut pas y être continue.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Lecture graphique',
          stepTitle: 'Repérer graphiquement une discontinuité en a',
          paragraphText:
            'Sur une représentation graphique, $f$ est continue en $a$ si le point $(a; f(a))$ est plein et relie continûment les branches gauche et droite de $(C_f)$. Si un point est exclu (cercle vide) ou décalé en hauteur par rapport à la courbe, $f$ est discontinue en $a$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q3',
            type: 'mcq',
            prompt:
              'Sur un graphique, la courbe $(C_f)$ passe près du point $(b; \\ell_4)$ avec un rond vide en $(b; \\ell_4)$, et aucun point plein n’est placé à l’abscisse $b$. Que conclut-on ?',
            options: [
              '$f$ admet une limite $\\ell_4$ en $b$ et est continue en $b$',
              '$f$ admet une limite $\\ell_4$ en $b$ mais n’est pas continue en $b$',
              '$f$ n’admet pas de limite en $b$ mais est continue en $b$',
              '$f(b) = \\ell_4$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La courbe converge vers la hauteur $\\ell_4$ (donc $\\lim_{x\\to b} f(x) = \\ell_4$), mais $b$ n’a pas d’image, donc $f$ n’est pas continue en $b$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Calcul exact en a = 2',
          stepTitle: 'Vérifier la continuité de 2x + 1/x en 2',
          paragraphText:
            'Pour $f(x) = 2x + \\dfrac{1}{x}$ sur $\\mathbb{R}^*$, en $x=2$ on a $f(2) = 2(2) + \\dfrac{1}{2} = \\dfrac{9}{2}$ et $\\lim_{x\\to 2} f(x) = \\dfrac{9}{2} = f(2)$, donc $f$ est continue en $2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q4',
            type: 'mcq',
            prompt: 'Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x) = 2x + \\dfrac{1}{x}$. Que vaut $\\lim_{x\\to 2} f(x)$ ?',
            options: ['$\\dfrac{5}{2}$', '$\\dfrac{9}{2}$', '$4$', '$\\dfrac{7}{2}$'],
            correctAnswerIndex: 1,
            explanation: '$f$ est continue en $2$, donc $\\lim_{x\\to 2} f(x) = f(2) = 2\\times 2 + \\dfrac{1}{2} = 4 + \\dfrac{1}{2} = \\dfrac{9}{2}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Polynôme en un point',
          stepTitle: 'Continuité de f(x) = x² + 3 en x = 2',
          paragraphText:
            'Tout polynôme est continu en tout réel $a$. Pour $f(x) = x^2 + 3$, $f$ est définie en $2$ avec $f(2) = 2^2 + 3 = 7$ et $\\lim_{x\\to 2}(x^2+3) = 7 = f(2)$, donc $f$ est continue en $2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q5',
            type: 'mcq',
            prompt:
              'La fonction $f(x) = 2x^3 - 4x^2 - 3x + 1$ est-elle continue en $a = 1$, et que vaut sa limite en $1$ ?',
            options: [
              'Non, car elle change de signe',
              'Oui, c’est un polynôme et $\\lim_{x\\to 1} f(x) = f(1) = -4$',
              'Oui, et $\\lim_{x\\to 1} f(x) = 1$',
              'Non, car $f(1) = 0$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Toute fonction polynôme est continue sur $\\mathbb{R}$, et $f(1) = 2 - 4 - 3 + 1 = -4$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Point isolé hors courbe',
          stepTitle: 'Quand lim f(x) existe mais diffère de f(a)',
          paragraphText:
            'Si $f$ est définie en $a$ mais que la courbe tend vers une hauteur $\\ell \\neq f(a)$ (point isolé), alors $f$ n’est pas continue en $a$ et on retient même qu’en ce point $a$, la limite au sens du programme ne vaut pas $\\ell$ car $\\ell \\neq f(a)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q6',
            type: 'mcq',
            prompt:
              'On sait que pour $x \\neq -2$, $f(x)$ tend vers $3$ quand $x\\to -2$, et l’on pose $f(-2) = 0$. La fonction $f$ est-elle continue en $-2$ ?',
            options: [
              'Oui, car $f(-2)$ existe et vaut $0$',
              'Oui, car $\\lim_{x\\to -2} f(x) = 3$ est finie',
              'Non, car la limite tend vers $3 \\neq f(-2)$',
              'Non, car $-2$ est négatif',
            ],
            correctAnswerIndex: 2,
            explanation: 'Pour être continue en $-2$, il faut que la limite vaille $f(-2)$. Ici $3 \\neq 0$, donc $f$ n’est pas continue en $-2$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q1',
          type: 'mcq',
          prompt:
            'Quelle condition traduit exactement le fait qu’une fonction $f$ définie en $a$ est continue en $a$ ?',
          options: [
            '$\\lim_{x\\to a} f(x) = 0$',
            '$\\lim_{x\\to a} f(x) = a$',
            '$\\lim_{x\\to a} f(x) = f(a)$',
            '$f(a) = 0$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Par définition, $f$ est continue en $a \\in D_f$ lorsque $\\lim_{x\\to a} f(x) = f(a)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q2',
          type: 'mcq',
          prompt:
            'Soit $f(x) = \\dfrac{x^2 + 4x + 1}{x + 3}$. Que peut-on dire de la continuité de $f$ en $a = -3$ ?',
          options: [
            '$f$ est continue en $-3$ car son numérateur ne s’annule pas',
            '$f$ n’est pas continue en $-3$ car $-3 \\notin D_f$',
            '$f$ est continue en $-3$ et vaut $-2$',
            '$f$ est continue sur $\\mathbb{R}$ tout entier',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le domaine de définition est $\\mathbb{R}\\setminus\\{-3\\}$. Comme $f$ n’est pas définie en $-3$, elle ne peut pas y être continue.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q3',
          type: 'mcq',
          prompt:
            'Sur un graphique, la courbe $(C_f)$ passe près du point $(b; \\ell_4)$ avec un rond vide en $(b; \\ell_4)$, et aucun point plein n’est placé à l’abscisse $b$. Que conclut-on ?',
          options: [
            '$f$ admet une limite $\\ell_4$ en $b$ et est continue en $b$',
            '$f$ admet une limite $\\ell_4$ en $b$ mais n’est pas continue en $b$',
            '$f$ n’admet pas de limite en $b$ mais est continue en $b$',
            '$f(b) = \\ell_4$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La courbe converge vers la hauteur $\\ell_4$ (donc $\\lim_{x\\to b} f(x) = \\ell_4$), mais $b$ n’a pas d’image, donc $f$ n’est pas continue en $b$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q4',
          type: 'mcq',
          prompt: 'Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x) = 2x + \\dfrac{1}{x}$. Que vaut $\\lim_{x\\to 2} f(x)$ ?',
          options: ['$\\dfrac{5}{2}$', '$\\dfrac{9}{2}$', '$4$', '$\\dfrac{7}{2}$'],
          correctAnswerIndex: 1,
          explanation: '$f$ est continue en $2$, donc $\\lim_{x\\to 2} f(x) = f(2) = 2\\times 2 + \\dfrac{1}{2} = 4 + \\dfrac{1}{2} = \\dfrac{9}{2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q5',
          type: 'mcq',
          prompt:
            'La fonction $f(x) = 2x^3 - 4x^2 - 3x + 1$ est-elle continue en $a = 1$, et que vaut sa limite en $1$ ?',
          options: [
            'Non, car elle change de signe',
            'Oui, c’est un polynôme et $\\lim_{x\\to 1} f(x) = f(1) = -4$',
            'Oui, et $\\lim_{x\\to 1} f(x) = 1$',
            'Non, car $f(1) = 0$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Toute fonction polynôme est continue sur $\\mathbb{R}$, et $f(1) = 2 - 4 - 3 + 1 = -4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p02_q6',
          type: 'mcq',
          prompt:
            'On sait que pour $x \\neq -2$, $f(x)$ tend vers $3$ quand $x\\to -2$, et l’on pose $f(-2) = 0$. La fonction $f$ est-elle continue en $-2$ ?',
          options: [
            'Oui, car $f(-2)$ existe et vaut $0$',
            'Oui, car $\\lim_{x\\to -2} f(x) = 3$ est finie',
            'Non, car la limite tend vers $3 \\neq f(-2)$',
            'Non, car $-2$ est négatif',
          ],
          correctAnswerIndex: 2,
          explanation: 'Pour être continue en $-2$, il faut que la limite vaille $f(-2)$. Ici $3 \\neq 0$, donc $f$ n’est pas continue en $-2$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Continuité des fonctions élémentaires et opérations
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l05_limites_continuite_p03',
      order: 3,
      title: 'Continuité des fonctions élémentaires et opérations',
      summary: 'Utiliser la continuité des fonctions usuelles (polynômes, rationnelles, racine, valeur absolue, trigonométrie) et des opérations.',
      conceptExplanation:
        "**1. Fonctions élémentaires** : les fonctions $x \\mapsto c$ ($c \\in \\mathbb{R}$), $x \\mapsto x^n$ ($n \\in \\mathbb{N}^*$), $x \\mapsto \\dfrac{1}{x}$, $x \\mapsto \\sqrt{x}$, $x \\mapsto |x|$, $x \\mapsto \\cos x$ et $x \\mapsto \\sin x$ sont continues en **tout élément $a$ de leurs ensembles de définition respectifs**.\n\n**2. Opérations sur les fonctions continues en $a$** : si $f$ et $g$ sont continues en $a$, alors :\n- $f + g$, $fg$, $kf$ ($k \\in \\mathbb{R}$) et $|f|$ sont continues en $a$ ;\n- si $g(a) \\neq 0$, alors $\\dfrac{1}{g}$ et $\\dfrac{f}{g}$ sont continues en $a$ ;\n- si $f \\ge 0$ autour de $a$, alors $\\sqrt{f}$ est continue en $a$.\n\n**Conséquence** : toute fonction obtenue par somme, produit ou quotient de fonctions élémentaires (dont les fonctions polynômes et rationnelles) est continue en tout point de son ensemble de définition.",
      keyRule:
        'Toute fonction construite par somme, produit ou quotient de fonctions élémentaires (polynôme, rationnelle, cos, sin, |x|, √x) est continue en tout point de son ensemble de définition Df.',
      formulas: [
        { name: 'Fonctions continues sur Df', formula: 'c,\\; x^n,\\; \\frac{1}{x},\\; \\sqrt{x},\\; |x|,\\; \\cos x,\\; \\sin x' },
        { name: 'Quotient continu en a', formula: 'f, g \\text{ continues en } a \\text{ et } g(a)\\neq 0 \\implies \\frac{f}{g} \\text{ continue en } a' },
      ],
      workedExample: {
        title: 'Continuité de f², f − g, 4f et limites de fonctions élémentaires',
        statement:
          '1. Soient $f$ et $g$ deux fonctions continues en $5$. Justifie que $f^2$, $f - g$ et $4f$ sont continues en $5$.\n2. Calcule $\\lim_{x\\to 49}\\sqrt{x}$, $\\lim_{x\\to -1{,}8}|x|$ et $\\lim_{x\\to 15}\\cos x$.',
        methodSteps: [
          '1. $f^2 = f \\times f$ est le produit de deux fonctions continues en $5$, donc $f^2$ est continue en $5$.',
          '$f - g = f + (-1)g$ est la somme de $f$ et de $-g$, continues en $5$, donc $f - g$ est continue en $5$ ; de même $4f$ ($k=4$) est continue en $5$.',
          '2. Par continuité sur leur domaine : $\\lim_{x\\to 49}\\sqrt{x} = \\sqrt{49} = 7$, $\\lim_{x\\to -1{,}8}|x| = |-1{,}8| = 1{,}8$, $\\lim_{x\\to 15}\\cos x = \\cos(15)$.',
        ],
        conclusion: '$f^2$, $f-g$ et $4f$ sont continues en $5$ ; les limites valent $7$, $1{,}8$ et $\\cos(15)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Fonctions élémentaires continues',
          stepTitle: 'Continuité des fonctions de référence sur leur Df',
          paragraphText:
            'Les fonctions constantes, puissances $x^n$, inverse $\\frac{1}{x}$, racine carrée $\\sqrt{x}$, valeur absolue $|x|$, cosinus et sinus sont continues en tout point de leur ensemble de définition.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q1',
            type: 'mcq',
            prompt: 'Que valent respectivement $\\lim_{x\\to 49} \\sqrt{x}$ et $\\lim_{x\\to -1{,}8} |x|$ ?',
            options: ['$7$ et $-1{,}8$', '$7$ et $1{,}8$', '$49$ et $1{,}8$', '$\\pm 7$ et $1{,}8$'],
            correctAnswerIndex: 1,
            explanation: '$\\sqrt{x}$ est continue en $49 \\ge 0$ donc $\\sqrt{49} = 7$, et $|x|$ est continue en $-1{,}8$ donc $|-1{,}8| = 1{,}8$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Opérations sur les fonctions continues',
          stepTitle: 'Somme, produit et multiplication par un réel',
          paragraphText:
            'Si $f$ et $g$ sont continues en $a$, alors $f+g$, $f-g$, $fg$, $kf$ ($k\\in\\mathbb{R}$) et $|f|$ sont également continues en $a$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q2',
            type: 'mcq',
            prompt:
              'Soient $f$ et $g$ deux fonctions continues en $5$. Laquelle des fonctions suivantes n’est PAS assurée d’être continue en $5$ sans information supplémentaire ?',
            options: ['$f^2$', '$f - g$', '$4f$', '$\\dfrac{f}{g}$'],
            correctAnswerIndex: 3,
            explanation: 'Pour le quotient $\\dfrac{f}{g}$, il faut en plus s’assurer que $g(5) \\neq 0$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Condition du quotient continu',
          stepTitle: 'Vérifier g(a) ≠ 0 et f ≥ 0 sous le radical',
          paragraphText:
            'Avant d’affirmer qu’un quotient $\\dfrac{f}{g}$ est continu en $a$, vérifie que $g(a) \\neq 0$. Avant d’affirmer que $\\sqrt{f}$ est continue en $a$, vérifie que $f(x) \\ge 0$ autour de $a$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q3',
            type: 'mcq',
            prompt: 'Sur quel ensemble la fonction rationnelle $h(x) = \\dfrac{2x + 1}{x^2 - 9}$ est-elle continue ?',
            options: [
              'Sur $\\mathbb{R}$',
              'Sur $\\mathbb{R}\\setminus\\{3\\}$',
              'Sur $\\mathbb{R}\\setminus\\{-3; 3\\}$',
              'Sur $]-3; 3[$ uniquement',
            ],
            correctAnswerIndex: 2,
            explanation: 'Toute fonction rationnelle est continue sur son ensemble de définition ; ici $x^2 - 9 = 0 \\iff x = -3$ ou $x = 3$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Continuité de x ↦ |x| et √x',
          stepTitle: 'Attention aux bords de Df pour √x',
          paragraphText:
            'La fonction $\\sqrt{x}$ est continue sur $[0; +\\infty[$, y compris en $0$ à droite ($\\lim_{x\\to 0^>} \\sqrt{x} = 0 = \\sqrt{0}$), même si elle n’est pas dérivable en $0$. Et $|x|$ est continue sur tout $\\mathbb{R}$ (même en $0$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q4',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -3} x^2$ et $\\lim_{x\\to 3} \\dfrac{1}{x}$ ?',
            options: [
              '$-9$ et $\\dfrac{1}{3}$',
              '$9$ et $\\dfrac{1}{3}$',
              '$9$ et $3$',
              '$-6$ et $0$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(-3)^2 = 9$ et en $3 \\in \\mathbb{R}^*$, $\\dfrac{1}{x}$ vaut $\\dfrac{1}{3}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Fonction cosinus en un point',
          stepTitle: 'Calculer lim(x→15) cos(x)',
          paragraphText:
            'Comme la fonction cosinus est continue sur $\\mathbb{R}$, $\\lim_{x\\to 15} \\cos x = \\cos(15)$. De même $\\lim_{x\\to 0} \\sin x = \\sin(0) = 0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 15} \\cos x$ ?',
            options: ['$1$', '$0$', '$\\cos(15)$', 'La limite n’existe pas'],
            correctAnswerIndex: 2,
            explanation: 'La fonction cosinus étant continue en tout réel, sa limite en $15$ vaut $\\cos(15)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Continuité de tan x',
          stepTitle: 'Quotient sin x / cos x en −π/6',
          paragraphText:
            'Comme $\\sin x$ et $\\cos x$ sont continues en $-\\dfrac{\\pi}{6}$ et $\\cos\\left(-\\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt{3}}{2} \\neq 0$, leur quotient $\\dfrac{\\sin x}{\\cos x}$ est continu en $-\\dfrac{\\pi}{6}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q6',
            type: 'mcq',
            prompt: 'Pourquoi la fonction $x \\mapsto \\dfrac{\\sin x}{\\cos x}$ est-elle continue en $-\\dfrac{\\pi}{6}$ ?',
            options: [
              'Parce que $\\sin(-\\pi/6) = 0$',
              'Parce que $\\sin x$ et $\\cos x$ y sont continues et $\\cos(-\\pi/6) \\neq 0$',
              'Parce que $\\cos(-\\pi/6) = 0$',
              'Parce que toute fonction trigonométrique est continue partout sur $\\mathbb{R}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le quotient de deux fonctions continues en $a$ est continu en $a$ dès que le dénominateur ne s’annule pas en $a$ ($\\cos(-\\pi/6) = \\sqrt{3}/2 \\neq 0$).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q1',
          type: 'mcq',
          prompt: 'Que valent respectivement $\\lim_{x\\to 49} \\sqrt{x}$ et $\\lim_{x\\to -1{,}8} |x|$ ?',
          options: ['$7$ et $-1{,}8$', '$7$ et $1{,}8$', '$49$ et $1{,}8$', '$\\pm 7$ et $1{,}8$'],
          correctAnswerIndex: 1,
          explanation: '$\\sqrt{x}$ est continue en $49 \\ge 0$ donc $\\sqrt{49} = 7$, et $|x|$ est continue en $-1{,}8$ donc $|-1{,}8| = 1{,}8$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q2',
          type: 'mcq',
          prompt:
            'Soient $f$ et $g$ deux fonctions continues en $5$. Laquelle des fonctions suivantes n’est PAS assurée d’être continue en $5$ sans information supplémentaire ?',
          options: ['$f^2$', '$f - g$', '$4f$', '$\\dfrac{f}{g}$'],
          correctAnswerIndex: 3,
          explanation: 'Pour le quotient $\\dfrac{f}{g}$, il faut en plus s’assurer que $g(5) \\neq 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q3',
          type: 'mcq',
          prompt: 'Sur quel ensemble la fonction rationnelle $h(x) = \\dfrac{2x + 1}{x^2 - 9}$ est-elle continue ?',
          options: [
            'Sur $\\mathbb{R}$',
            'Sur $\\mathbb{R}\\setminus\\{3\\}$',
            'Sur $\\mathbb{R}\\setminus\\{-3; 3\\}$',
            'Sur $]-3; 3[$ uniquement',
          ],
          correctAnswerIndex: 2,
          explanation: 'Toute fonction rationnelle est continue sur son ensemble de définition ; ici $x^2 - 9 = 0 \\iff x = -3$ ou $x = 3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q4',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -3} x^2$ et $\\lim_{x\\to 3} \\dfrac{1}{x}$ ?',
          options: [
            '$-9$ et $\\dfrac{1}{3}$',
            '$9$ et $\\dfrac{1}{3}$',
            '$9$ et $3$',
            '$-6$ et $0$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(-3)^2 = 9$ et en $3 \\in \\mathbb{R}^*$, $\\dfrac{1}{x}$ vaut $\\dfrac{1}{3}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 15} \\cos x$ ?',
          options: ['$1$', '$0$', '$\\cos(15)$', 'La limite n’existe pas'],
          correctAnswerIndex: 2,
          explanation: 'La fonction cosinus étant continue en tout réel, sa limite en $15$ vaut $\\cos(15)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p03_q6',
          type: 'mcq',
          prompt: 'Pourquoi la fonction $x \\mapsto \\dfrac{\\sin x}{\\cos x}$ est-elle continue en $-\\dfrac{\\pi}{6}$ ?',
          options: [
            'Parce que $\\sin(-\\pi/6) = 0$',
            'Parce que $\\sin x$ et $\\cos x$ y sont continues et $\\cos(-\\pi/6) \\neq 0$',
            'Parce que $\\cos(-\\pi/6) = 0$',
            'Parce que toute fonction trigonométrique est continue partout sur $\\mathbb{R}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le quotient de deux fonctions continues en $a$ est continu en $a$ dès que le dénominateur ne s’annule pas en $a$ ($\\cos(-\\pi/6) = \\sqrt{3}/2 \\neq 0$).',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Limite à gauche, limite à droite et critère d'existence
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l05_limites_continuite_p04',
      order: 4,
      title: 'Limite à gauche, limite à droite et critère de continuité',
      summary: 'Distinguer lim(x→a<) et lim(x→a>) pour les fonctions définies par morceaux et conclure sur l’existence d’une limite ou la continuité.',
      conceptExplanation:
        "- Lorsqu'on choisit $x < a$ ($x \\in ]-\\infty; a[$) suffisamment proche de $a$, si $f(x)$ tend vers $l$, on note **la limite à gauche en $a$** : $\\lim_{\\substack{x\\to a\\\\<}} f(x) = l$.\n- Lorsqu'on choisit $x > a$ ($x \\in ]a; +\\infty[$) suffisamment proche de $a$, si $f(x)$ tend vers $l'$, on note **la limite à droite en $a$** : $\\lim_{\\substack{x\\to a\\\\>}} f(x) = l'$.\n\n**Critères d'existence d'une limite et continuité en $a$** :\n- **Si $f$ n'est pas définie en $a$** : $\\lim_{x\\to a} f(x) = l \\iff \\lim_{\\substack{x\\to a\\\\<}} f(x) = \\lim_{\\substack{x\\to a\\\\>}} f(x) = l$.\n- **Si $f$ est définie en $a$** : $\\lim_{x\\to a} f(x) = f(a) \\iff \\lim_{\\substack{x\\to a\\\\<}} f(x) = \\lim_{\\substack{x\\to a\\\\>}} f(x) = f(a)$ (et alors $f$ est **continue en $a$**).",
      keyRule:
        'Si f est définie en a, il faut TROIS égalités pour qu’elle soit continue (et admette une limite) en a : limite à gauche = limite à droite = f(a).',
      formulas: [
        {
          name: 'Critère (a ∉ Df)',
          formula: '\\lim_{x\\to a} f(x) = l \\iff \\lim_{\\substack{x\\to a\\\\<}} f(x) = \\lim_{\\substack{x\\to a\\\\>}} f(x) = l',
        },
        {
          name: 'Critère de continuité (a ∈ Df)',
          formula: 'f \\text{ continue en } a \\iff \\lim_{\\substack{x\\to a\\\\<}} f(x) = \\lim_{\\substack{x\\to a\\\\>}} f(x) = f(a)',
        },
      ],
      visualSchema: {
        type: 'function_plot',
        title: 'Discontinuité par saut en x = 1 (f(x) = x² pour x ≤ 1 et x + 2 pour x > 1)',
        caption:
          'À gauche en 1, f(x) tend vers f(1) = 1 ; à droite en 1, f(x) tend vers 3 ≠ 1 : la courbe saute au point d’abscisse 1.',
        plot: {
          xMin: -2,
          xMax: 4,
          yMin: -1,
          yMax: 6,
          xStep: 1,
          yStep: 1,
          curves: [
            {
              label: 'x² (x ≤ 1)',
              color: 'green',
              pieces: [{ expr: 'x^2', from: -2, to: 1, includeTo: true }],
            },
            {
              label: 'x + 2 (x > 1)',
              color: 'blue',
              pieces: [{ expr: 'x+2', from: 1, to: 4, includeFrom: false }],
            },
          ],
          verticalLines: [{ x: 1, label: 'x = 1', color: 'orange' }],
        },
      },
      workedExample: {
        title: 'Contrat téléphonique en cabine : continuité en 5 et en 30',
        statement:
          'Une cabine facture $x$ minutes de communication par :\n$f(x) = 150x$ sur $[0;5]$, $f(x) = 750$ sur $]5;10[$, $f(x) = 100x$ sur $[10;30]$, et $f(x) = 3000 + 50(x-30)$ sur $]30;+\\infty[$ (en F CFA). Étudie la continuité de $f$ en $5$ et en $30$.',
        methodSteps: [
          'En $5$ : $f(5) = 150\\times 5 = 750$, $\\lim_{\\substack{x\\to 5\\\\<}} f(x) = \\lim_{x\\to 5}(150x) = 750$ et $\\lim_{\\substack{x\\to 5\\\\>}} f(x) = \\lim_{x\\to 5}(750) = 750$.',
          'Comme les trois valeurs valent $750$, $f$ est continue en $5$.',
          'En $30$ : $f(30) = 100\\times 30 = 3000$, $\\lim_{\\substack{x\\to 30\\\\<}} f(x) = 3000$ et $\\lim_{\\substack{x\\to 30\\\\>}} f(x) = \\lim_{x\\to 30}(3000 + 50(x-30)) = 3000$.',
        ],
        conclusion: 'Comme $\\lim_{30^<} = \\lim_{30^>} = f(30) = 3000$, la fonction $f$ est continue en $5$ et en $30$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Notations à gauche et à droite',
          stepTitle: 'Lire et noter les limites à gauche (<) et à droite (>)',
          paragraphText:
            'La notation $\\lim_{\\substack{x\\to a\\\\<}} f(x)$ désigne la limite à gauche en $a$ ($x < a$), tandis que $\\lim_{\\substack{x\\to a\\\\>}} f(x)$ désigne la limite à droite en $a$ ($x > a$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q1',
            type: 'mcq',
            prompt:
              'Soit $f(x) = x^2$ si $x \\le 3$ et $f(x) = 2x + 1$ si $x > 3$. Que valent $\\lim_{\\substack{x\\to 3\\\\<}} f(x)$ et $\\lim_{\\substack{x\\to 3\\\\>}} f(x)$ ?',
            options: ['$9$ et $7$', '$7$ et $9$', '$9$ et $9$', '$7$ et $7$'],
            correctAnswerIndex: 0,
            explanation: 'Pour $x < 3$, $f(x) = x^2 \\to 3^2 = 9$ ; pour $x > 3$, $f(x) = 2x+1 \\to 2(3)+1 = 7$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Existence si a ∉ Df',
          stepTitle: 'Quand la fonction n’est pas définie en a',
          paragraphText:
            'Si $f$ n’est pas définie en $a$, elle admet une limite finie $l$ en $a$ si et seulement si sa limite à gauche et sa limite à droite existent et sont égales à $l$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q2',
            type: 'mcq',
            prompt:
              'Une fonction $f$ est définie sur $\\mathbb{R}\\setminus\\{4\\}$ avec $\\lim_{\\substack{x\\to 4\\\\<}} f(x) = -2$ et $\\lim_{\\substack{x\\to 4\\\\>}} f(x) = -2$. Que peut-on conclure ?',
            options: [
              '$f$ est continue en $4$',
              '$f$ n’admet pas de limite en $4$',
              '$f$ admet une limite en $4$, égale à $-2$',
              '$f(4) = -2$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Comme $4 \\notin D_f$ et que $\\lim_{4^<} f(x) = \\lim_{4^>} f(x) = -2$, $f$ admet bien $-2$ pour limite en $4$ (sans être continue en $4$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'f définie en a avec f(a) différent',
          stepTitle: 'Quand lim gauche = lim droite ≠ f(a)',
          paragraphText:
            'Attention ! Si $f$ est définie en $1$ avec $f(1) = 3$, même si $\\lim_{\\substack{x\\to 1\\\\<}} f(x) = \\lim_{\\substack{x\\to 1\\\\>}} f(x) = 7$, comme $7 \\neq f(1)$, $f$ n’admet pas de limite en $1$ (au sens du programme : elle devrait valoir $f(1)$) et n’est pas continue en $1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q3',
            type: 'mcq',
            prompt:
              'Soit $f$ définie sur $\\mathbb{R}$ telle que $\\lim_{\\substack{x\\to 1\\\\<}} f(x) = 7$, $\\lim_{\\substack{x\\to 1\\\\>}} f(x) = 7$ et $f(1) = 3$. Quelle proposition est correcte ?',
            options: [
              '$f$ est continue en $1$',
              '$f$ n’est pas continue en $1$ car $f(1) = 3 \\neq 7$',
              '$\\lim_{x\\to 1} f(x) = f(1) = 3$',
              '$f$ n’est pas définie en $1$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les limites à gauche et à droite valent $7$, ce qui diffère de $f(1) = 3$ : $f$ est discontinue en $1$ (et selon le critère sur $D_f$, $f$ n’admet pas de limite en $1$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Fonction raccordée en un seuil',
          stepTitle: 'Comparer les 3 valeurs en x = x₀',
          paragraphText:
            'Pour étudier une fonction définie par deux formules autour de $x_0$, calcule séparément $f(x_0)$, la limite à gauche et la limite à droite. Si les deux limites latérales diffèrent, $f$ n’admet pas de limite en $x_0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q4',
            type: 'mcq',
            prompt:
              'On donne $f(x) = 3x - 1$ pour $x < 1$ et $f(x) = \\dfrac{x-1}{x+1}$ pour $x \\ge 1$. Que peut-on dire en $x = 1$ ?',
            options: [
              '$\\lim_{1^<} f = 2$ et $\\lim_{1^>} f = 0$, donc $f$ n’admet pas de limite en $1$',
              '$\\lim_{1^<} f = 2$ et $\\lim_{1^>} f = 2$, donc $f$ est continue en $1$',
              '$\\lim_{1^<} f = 0$ et $\\lim_{1^>} f = 0$, donc $f$ est continue en $1$',
              '$f$ n’est pas définie en $1$',
            ],
            correctAnswerIndex: 0,
            explanation: 'À gauche : $3(1)-1 = 2$. À droite : $\\dfrac{1-1}{1+1} = 0$. Puisque $2 \\neq 0$, $f$ n’admet pas de limite en $1$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Raccordement continu en 5',
          stepTitle: 'Vérifier la continuité d’un tarif par tranches',
          paragraphText:
            'Pour la cabine téléphonique, le tarif passe de $150x$ sur $[0;5]$ à $750$ sur $]5;10[$. En $x=5$, $150\\times 5 = 750$, donc les limites à gauche et à droite valent toutes deux $750 = f(5)$ : pas de saut de prix à 5 minutes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q5',
            type: 'mcq',
            prompt:
              'Avec $f(x) = 150x$ sur $[0;5]$, $750$ sur $]5;10[$ et $100x$ sur $[10;30]$, en quel(s) point(s) parmi $5$ et $10$ la fonction $f$ est-elle continue ?',
            options: [
              'Continue en $5$ et en $10$',
              'Continue en $5$ (vaut $750$), discontinue en $10$ ($750 \\neq 1000$)',
              'Discontinue en $5$ et en $10$',
              'Discontinue en $5$, continue en $10$',
            ],
            correctAnswerIndex: 1,
            explanation: 'En $5$ : $150\\times 5 = 750$ des deux côtés ($f$ continue en $5$). En $10$ : à gauche $750$, à droite $100\\times 10 = 1000 \\neq 750$ ($f$ discontinue en $10$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Fonction de la situation initiale',
          stepTitle: 'Analyser le graphique en x = 1',
          paragraphText:
            'Pour la fonction tracée ci-dessus ($x^2$ pour $x\\le 1$ et $x+2$ pour $x>1$), on a $\\lim_{\\substack{x\\to 1\\\\<}} f(x) = 1^2 = 1$ et $\\lim_{\\substack{x\\to 1\\\\>}} f(x) = 1 + 2 = 3$, d’où une rupture de courbe en $1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q6',
            type: 'mcq',
            prompt:
              'Pour $f(x) = x^2$ si $x \\le 1$ et $f(x) = x + 2$ si $x > 1$, que valent respectivement $f(1)$ et $\\lim_{\\substack{x\\to 1\\\\>}} f(x)$ ?',
            options: ['$1$ et $1$', '$3$ et $1$', '$1$ et $3$', '$3$ et $3$'],
            correctAnswerIndex: 2,
            explanation: 'Comme $1 \\in ]-\\infty; 1]$, $f(1) = 1^2 = 1$. À droite de $1$, $f(x) = x+2 \\to 3$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q1',
          type: 'mcq',
          prompt:
            'Soit $f(x) = x^2$ si $x \\le 3$ et $f(x) = 2x + 1$ si $x > 3$. Que valent $\\lim_{\\substack{x\\to 3\\\\<}} f(x)$ et $\\lim_{\\substack{x\\to 3\\\\>}} f(x)$ ?',
          options: ['$9$ et $7$', '$7$ et $9$', '$9$ et $9$', '$7$ et $7$'],
          correctAnswerIndex: 0,
          explanation: 'Pour $x < 3$, $f(x) = x^2 \\to 3^2 = 9$ ; pour $x > 3$, $f(x) = 2x+1 \\to 2(3)+1 = 7$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q2',
          type: 'mcq',
          prompt:
            'Une fonction $f$ est définie sur $\\mathbb{R}\\setminus\\{4\\}$ avec $\\lim_{\\substack{x\\to 4\\\\<}} f(x) = -2$ et $\\lim_{\\substack{x\\to 4\\\\>}} f(x) = -2$. Que peut-on conclure ?',
          options: [
            '$f$ est continue en $4$',
            '$f$ n’admet pas de limite en $4$',
            '$f$ admet une limite en $4$, égale à $-2$',
            '$f(4) = -2$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Comme $4 \\notin D_f$ et que $\\lim_{4^<} f(x) = \\lim_{4^>} f(x) = -2$, $f$ admet bien $-2$ pour limite en $4$ (sans être continue en $4$).',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q3',
          type: 'mcq',
          prompt:
            'Soit $f$ définie sur $\\mathbb{R}$ telle que $\\lim_{\\substack{x\\to 1\\\\<}} f(x) = 7$, $\\lim_{\\substack{x\\to 1\\\\>}} f(x) = 7$ et $f(1) = 3$. Quelle proposition est correcte ?',
          options: [
            '$f$ est continue en $1$',
            '$f$ n’est pas continue en $1$ car $f(1) = 3 \\neq 7$',
            '$\\lim_{x\\to 1} f(x) = f(1) = 3$',
            '$f$ n’est pas définie en $1$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les limites à gauche et à droite valent $7$, ce qui diffère de $f(1) = 3$ : $f$ est discontinue en $1$ (et selon le critère sur $D_f$, $f$ n’admet pas de limite en $1$).',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q4',
          type: 'mcq',
          prompt:
            'On donne $f(x) = 3x - 1$ pour $x < 1$ et $f(x) = \\dfrac{x-1}{x+1}$ pour $x \\ge 1$. Que peut-on dire en $x = 1$ ?',
          options: [
            '$\\lim_{1^<} f = 2$ et $\\lim_{1^>} f = 0$, donc $f$ n’admet pas de limite en $1$',
            '$\\lim_{1^<} f = 2$ et $\\lim_{1^>} f = 2$, donc $f$ est continue en $1$',
            '$\\lim_{1^<} f = 0$ et $\\lim_{1^>} f = 0$, donc $f$ est continue en $1$',
            '$f$ n’est pas définie en $1$',
          ],
          correctAnswerIndex: 0,
          explanation: 'À gauche : $3(1)-1 = 2$. À droite : $\\dfrac{1-1}{1+1} = 0$. Puisque $2 \\neq 0$, $f$ n’admet pas de limite en $1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q5',
          type: 'mcq',
          prompt:
            'Avec $f(x) = 150x$ sur $[0;5]$, $750$ sur $]5;10[$ et $100x$ sur $[10;30]$, en quel(s) point(s) parmi $5$ et $10$ la fonction $f$ est-elle continue ?',
          options: [
            'Continue en $5$ et en $10$',
            'Continue en $5$ (vaut $750$), discontinue en $10$ ($750 \\neq 1000$)',
            'Discontinue en $5$ et en $10$',
            'Discontinue en $5$, continue en $10$',
          ],
          correctAnswerIndex: 1,
          explanation: 'En $5$ : $150\\times 5 = 750$ des deux côtés ($f$ continue en $5$). En $10$ : à gauche $750$, à droite $100\\times 10 = 1000 \\neq 750$ ($f$ discontinue en $10$).',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p04_q6',
          type: 'mcq',
          prompt:
            'Pour $f(x) = x^2$ si $x \\le 1$ et $f(x) = x + 2$ si $x > 1$, que valent respectivement $f(1)$ et $\\lim_{\\substack{x\\to 1\\\\>}} f(x)$ ?',
          options: ['$1$ et $1$', '$3$ et $1$', '$1$ et $3$', '$3$ et $3$'],
          correctAnswerIndex: 2,
          explanation: 'Comme $1 \\in ]-\\infty; 1]$, $f(1) = 1^2 = 1$. À droite de $1$, $f(x) = x+2 \\to 3$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Opérations sur les limites finies en un point
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l05_limites_continuite_p05',
      order: 5,
      title: 'Opérations sur les limites finies en un point',
      summary: 'Calculer les limites de f + g, f · g et f / g lorsque f et g admettent des limites finies en a.',
      conceptExplanation:
        "Soient $a$, $l$ et $l'$ trois nombres réels. Si $\\lim_{x\\to a} f(x) = l$ et $\\lim_{x\\to a} g(x) = l'$, alors :\n- **Somme** : $\\lim_{x\\to a} (f+g)(x) = l + l'$ ;\n- **Produit** : $\\lim_{x\\to a} (f\\cdot g)(x) = l \\cdot l'$ ;\n- **Quotient** (si $l' \\neq 0$) : $\\lim_{x\\to a} \\dfrac{f(x)}{g(x)} = \\dfrac{l}{l'}$.\n\nCes règles s'appliquent directement pour calculer la limite de toute expression algébrique ou trigonométrique dès lors que le dénominateur ne tend pas vers $0$.",
      keyRule:
        'Si f → l et g → l’ en a, alors f + g → l + l’, fg → ll’, et f/g → l/l’ à condition expresse que l’ ≠ 0.',
      formulas: [
        { name: 'Limite d’une somme', formula: '\\lim_{x\\to a}(f+g)(x) = l + l\'' },
        { name: 'Limite d’un produit', formula: '\\lim_{x\\to a}(f\\cdot g)(x) = l\\times l\'' },
        { name: 'Limite d’un quotient (l’ ≠ 0)', formula: '\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\frac{l}{l\'}' },
      ],
      workedExample: {
        title: 'Opérations sur f, g et limites trigonométrique ou rationnelle',
        statement:
          '1. Sachant que $\\lim_{x\\to 3} f(x) = -5$ et $\\lim_{x\\to 3} g(x) = 2$, calcule $\\lim_{x\\to 3}(f+g)(x)$, $\\lim_{x\\to 3}(fg)(x)$ et $\\lim_{x\\to 3}\\dfrac{f}{g}(x)$.\n2. Calcule $\\lim_{x\\to -5}\\dfrac{x^2-2x+3}{x-2}$ et $\\lim_{x\\to -\\frac{\\pi}{6}}\\dfrac{\\sin x}{\\cos x}$.',
        methodSteps: [
          '1. Par opérations sur les limites finies : $\\lim_{x\\to 3}(f+g)(x) = -5 + 2 = -3$ ; $\\lim_{x\\to 3}(fg)(x) = -5\\times 2 = -10$ ; $\\lim_{x\\to 3}(f/g)(x) = \\dfrac{-5}{2}$.',
          '2. En $-5$, le dénominateur $x - 2$ tend vers $-7 \\neq 0$ : $\\lim_{x\\to -5}\\dfrac{x^2-2x+3}{x-2} = \\dfrac{(-5)^2 - 2(-5) + 3}{-5 - 2} = \\dfrac{38}{-7} = -\\dfrac{38}{7}$.',
          'En $-\\frac{\\pi}{6}$, $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$ et $\\cos\\left(-\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2} \\neq 0$, donc le quotient tend vers $\\dfrac{-1/2}{\\sqrt{3}/2} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$.',
        ],
        conclusion: '$-3$, $-10$, $-\\dfrac{5}{2}$, $-\\dfrac{38}{7}$ et $-\\dfrac{\\sqrt{3}}{3}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Somme et produit de limites',
          stepTitle: 'Additionner et multiplier des limites finies',
          paragraphText:
            'Si $\\lim_{x\\to a} f(x) = l$ et $\\lim_{x\\to a} g(x) = l\'$, la limite de $f+g$ vaut $l+l\'$ et la limite de $f\\cdot g$ vaut $l\\cdot l\'$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q1',
            type: 'mcq',
            prompt:
              'On donne $\\lim_{x\\to 3} f(x) = -5$ et $\\lim_{x\\to 3} g(x) = 2$. Que valent $\\lim_{x\\to 3} (f+g)(x)$ et $\\lim_{x\\to 3} (f\\cdot g)(x)$ ?',
            options: ['$-3$ et $-10$', '$-7$ et $-10$', '$-3$ et $10$', '$3$ et $-10$'],
            correctAnswerIndex: 0,
            explanation: '$\\lim(f+g) = -5 + 2 = -3$ et $\\lim(f\\cdot g) = (-5)\\times 2 = -10$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Quotient de limites',
          stepTitle: 'Diviser deux limites lorsque le dénominateur ne tend pas vers 0',
          paragraphText:
            'Si $\\lim_{x\\to a} f(x) = l$ et $\\lim_{x\\to a} g(x) = l\' \\neq 0$, alors $\\lim_{x\\to a} \\dfrac{f(x)}{g(x)} = \\dfrac{l}{l\'}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q2',
            type: 'mcq',
            prompt: 'Avec $\\lim_{x\\to 3} f(x) = -5$ et $\\lim_{x\\to 3} g(x) = 2$, que vaut $\\lim_{x\\to 3} \\dfrac{f(x)}{g(x)}$ ?',
            options: ['$-\\dfrac{2}{5}$', '$-\\dfrac{5}{2}$', '$\\dfrac{5}{2}$', '$-3$'],
            correctAnswerIndex: 1,
            explanation: 'Comme $\\lim_{x\\to 3} g(x) = 2 \\neq 0$, $\\lim_{x\\to 3}\\dfrac{f(x)}{g(x)} = \\dfrac{-5}{2} = -\\dfrac{5}{2}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Fraction rationnelle en x = −5',
          stepTitle: 'Calculer lim(x→−5) (x² − 2x + 3)/(x − 2)',
          paragraphText:
            'En $x = -5$, le numérateur vaut $(-5)^2 - 2(-5) + 3 = 25 + 10 + 3 = 38$ et le dénominateur vaut $-5 - 2 = -7 \\neq 0$, d’où la limite $-\\dfrac{38}{7}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q3',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -5} \\dfrac{x^2 - 2x + 3}{x - 2}$ ?',
            options: ['$-\\dfrac{38}{7}$', '$\\dfrac{18}{7}$', '$-\\dfrac{18}{7}$', '$-\\dfrac{38}{3}$'],
            correctAnswerIndex: 0,
            explanation: '$(-5)^2 - 2(-5) + 3 = 25 + 10 + 3 = 38$, et $-5 - 2 = -7$, donc la limite est $-\\dfrac{38}{7}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Quotient trigonométrique',
          stepTitle: 'Calculer lim(x→−π/6) (sin x / cos x)',
          paragraphText:
            'En $-\\dfrac{\\pi}{6}$, $\\sin\\left(-\\dfrac{\\pi}{6}\\right) = -\\dfrac{1}{2}$ et $\\cos\\left(-\\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt{3}}{2}$. Le quotient donne $-\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q4',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -\\frac{\\pi}{6}} \\dfrac{\\sin x}{\\cos x}$ ?',
            options: ['$\\dfrac{\\sqrt{3}}{3}$', '$-\\sqrt{3}$', '$-\\dfrac{\\sqrt{3}}{3}$', '$-\\dfrac{1}{2}$'],
            correctAnswerIndex: 2,
            explanation: '$\\dfrac{\\sin(-\\pi/6)}{\\cos(-\\pi/6)} = \\dfrac{-1/2}{\\sqrt{3}/2} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Erreur de signe au dénominateur',
          stepTitle: 'Attention aux signes avec x → a négatif',
          paragraphText:
            'Dans un quotient comme $\\dfrac{x^2 - 2x + 3}{x - 2}$ en $x = -5$, veille bien aux deux erreurs fréquentes : $(-5)^2 = +25$ (positif), $-2(-5) = +10$ (positif), et $-5 - 2 = -7$ (négatif).',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q5',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 1} \\dfrac{2x^2 - 5x + 1}{3x - 5}$ ?',
            options: ['$1$', '$-1$', '$-2$', '$\\dfrac{1}{2}$'],
            correctAnswerIndex: 0,
            explanation: 'Au numérateur : $2(1)-5+1 = -2$. Au dénominateur : $3(1)-5 = -2$. Quotient : $\\dfrac{-2}{-2} = 1$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Constante fois fonction',
          stepTitle: 'Combiner 2f − 3g en un point',
          paragraphText:
            'Grâce à la linéarité des limites finies, si $\\lim_{x\\to a} f(x) = l$ et $\\lim_{x\\to a} g(x) = l\'$, alors $\\lim_{x\\to a}(\\alpha f + \\beta g)(x) = \\alpha l + \\beta l\'$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q6',
            type: 'mcq',
            prompt: 'Si $\\lim_{x\\to 2} f(x) = 4$ et $\\lim_{x\\to 2} g(x) = -3$, que vaut $\\lim_{x\\to 2} (2f(x) - 3g(x))$ ?',
            options: ['$-1$', '$17$', '$1$', '$-17$'],
            correctAnswerIndex: 1,
            explanation: '$2\\times 4 - 3\\times(-3) = 8 + 9 = 17$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q1',
          type: 'mcq',
          prompt:
            'On donne $\\lim_{x\\to 3} f(x) = -5$ et $\\lim_{x\\to 3} g(x) = 2$. Que valent $\\lim_{x\\to 3} (f+g)(x)$ et $\\lim_{x\\to 3} (f\\cdot g)(x)$ ?',
          options: ['$-3$ et $-10$', '$-7$ et $-10$', '$-3$ et $10$', '$3$ et $-10$'],
          correctAnswerIndex: 0,
          explanation: '$\\lim(f+g) = -5 + 2 = -3$ et $\\lim(f\\cdot g) = (-5)\\times 2 = -10$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q2',
          type: 'mcq',
          prompt: 'Avec $\\lim_{x\\to 3} f(x) = -5$ et $\\lim_{x\\to 3} g(x) = 2$, que vaut $\\lim_{x\\to 3} \\dfrac{f(x)}{g(x)}$ ?',
          options: ['$-\\dfrac{2}{5}$', '$-\\dfrac{5}{2}$', '$\\dfrac{5}{2}$', '$-3$'],
          correctAnswerIndex: 1,
          explanation: 'Comme $\\lim_{x\\to 3} g(x) = 2 \\neq 0$, $\\lim_{x\\to 3}\\dfrac{f(x)}{g(x)} = \\dfrac{-5}{2} = -\\dfrac{5}{2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q3',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -5} \\dfrac{x^2 - 2x + 3}{x - 2}$ ?',
          options: ['$-\\dfrac{38}{7}$', '$\\dfrac{18}{7}$', '$-\\dfrac{18}{7}$', '$-\\dfrac{38}{3}$'],
          correctAnswerIndex: 0,
          explanation: '$(-5)^2 - 2(-5) + 3 = 25 + 10 + 3 = 38$, et $-5 - 2 = -7$, donc la limite est $-\\dfrac{38}{7}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q4',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -\\frac{\\pi}{6}} \\dfrac{\\sin x}{\\cos x}$ ?',
          options: ['$\\dfrac{\\sqrt{3}}{3}$', '$-\\sqrt{3}$', '$-\\dfrac{\\sqrt{3}}{3}$', '$-\\dfrac{1}{2}$'],
          correctAnswerIndex: 2,
          explanation: '$\\dfrac{\\sin(-\\pi/6)}{\\cos(-\\pi/6)} = \\dfrac{-1/2}{\\sqrt{3}/2} = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q5',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 1} \\dfrac{2x^2 - 5x + 1}{3x - 5}$ ?',
          options: ['$1$', '$-1$', '$-2$', '$\\dfrac{1}{2}$'],
          correctAnswerIndex: 0,
          explanation: 'Au numérateur : $2(1)-5+1 = -2$. Au dénominateur : $3(1)-5 = -2$. Quotient : $\\dfrac{-2}{-2} = 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p05_q6',
          type: 'mcq',
          prompt: 'Si $\\lim_{x\\to 2} f(x) = 4$ et $\\lim_{x\\to 2} g(x) = -3$, que vaut $\\lim_{x\\to 2} (2f(x) - 3g(x))$ ?',
          options: ['$-1$', '$17$', '$1$', '$-17$'],
          correctAnswerIndex: 1,
          explanation: '$2\\times 4 - 3\\times(-3) = 8 + 9 = 17$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Lever une indétermination 0/0 en un point
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l05_limites_continuite_p06',
      order: 6,
      title: 'Lever une indétermination 0/0 en un point',
      summary: 'Factoriser par (x − a) ou multiplier par l’expression conjuguée pour calculer une limite de forme 0/0.',
      conceptExplanation:
        "Lorsque le numérateur et le dénominateur d'un quotient tendent simultanément vers $0$ quand $x \\to a$, on obtient une **forme indéterminée « $\\dfrac{0}{0}$ »** : la substitution directe échoue.\n\nPour lever l'indétermination :\n1. **Quotient de polynômes** : puisque $a$ annule le numérateur et le dénominateur, on factorise les deux par $(x - a)$, puis on simplifie par $(x - a)$ (pour $x \\neq a$).\n2. **Présence d'une racine carrée** : on multiplie numérateur et dénominateur par **l'expression conjuguée** (par exemple $\\sqrt{x} + 2$ pour faire apparaître $(\\sqrt{x})^2 - 2^2 = x - 4$), puis on simplifie par $(x - a)$.",
      keyRule:
        'Forme 0/0 en x = a : factoriser par (x − a) si ce sont des polynômes, ou multiplier par l’expression conjuguée s’il y a une racine carrée, puis simplifier avant de passer à la limite.',
      formulas: [
        { name: 'Factorisation par (x − a)', formula: 'a^2 - b^2 = (a-b)(a+b)' },
        { name: 'Expression conjuguée', formula: '(\\sqrt{u} - v)(\\sqrt{u} + v) = u - v^2' },
      ],
      workedExample: {
        title: 'Calculer trois limites de forme indéterminée 0/0',
        statement:
          'Calcule :\n1. $\\lim_{x\\to -2}\\dfrac{x^2-4}{x+2}$\n2. $\\lim_{x\\to 3}\\dfrac{x^2-4x+3}{x^2-x-6}$\n3. $\\lim_{x\\to 4}\\dfrac{x-4}{\\sqrt{x}-2}$',
        methodSteps: [
          '1. Pour $x \\neq -2$, $\\dfrac{x^2-4}{x+2} = \\dfrac{(x-2)(x+2)}{x+2} = x - 2$, d’où $\\lim_{x\\to -2}(x-2) = -4$.',
          '2. $3$ est racine des deux trinômes : $x^2-4x+3 = (x-3)(x-1)$ et $x^2-x-6 = (x-3)(x+2)$. Après simplification par $(x-3)$, la limite vaut $\\dfrac{3-1}{3+2} = \\dfrac{2}{5}$.',
          '3. On multiplie par le conjugué $\\sqrt{x}+2$ : $\\dfrac{(x-4)(\\sqrt{x}+2)}{(\\sqrt{x}-2)(\\sqrt{x}+2)} = \\dfrac{(x-4)(\\sqrt{x}+2)}{x-4} = \\sqrt{x}+2$, d’où $\\lim_{x\\to 4}(\\sqrt{x}+2) = 4$.',
        ],
        conclusion: 'Respectivement $-4$, $\\dfrac{2}{5}$ et $4$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Identité remarquable a² − b²',
          stepTitle: 'Simplifier après factorisation par (x − a)',
          paragraphText:
            'Dans $\\dfrac{x^2 - 4}{x + 2}$ quand $x\\to -2$, numérateur et dénominateur tendent vers $0$. En écrivant $x^2 - 4 = (x-2)(x+2)$, on simplifie par $x+2$ (car $x\\neq -2$) et il reste $x-2$, de limite $-4$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q1',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to -2} \\dfrac{x^2 - 4}{x + 2}$ ?',
            options: ['$0$', '$-4$', '$4$', '$+\\infty$'],
            correctAnswerIndex: 1,
            explanation: '$\\dfrac{x^2-4}{x+2} = \\dfrac{(x-2)(x+2)}{x+2} = x - 2$ pour $x\\neq -2$, donc la limite en $-2$ vaut $-2 - 2 = -4$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Factoriser deux trinômes',
          stepTitle: 'Factoriser deux polynômes s’annulant en a',
          paragraphText:
            'Si $P(a) = 0$ et $Q(a) = 0$, alors $(x - a)$ divise $P(x)$ et $Q(x)$. Par exemple, en $3$, $x^2 - 4x + 3 = (x-3)(x-1)$ et $x^2 - x - 6 = (x-3)(x+2)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q2',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 3} \\dfrac{x^2 - 4x + 3}{x^2 - x - 6}$ ?',
            options: ['$\\dfrac{2}{5}$', '$0$', '$-\\dfrac{1}{2}$', '$1$'],
            correctAnswerIndex: 0,
            explanation: 'Après factorisation par $(x-3)$ et simplification, on obtient $\\lim_{x\\to 3}\\dfrac{x-1}{x+2} = \\dfrac{3-1}{3+2} = \\dfrac{2}{5}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Expression conjuguée',
          stepTitle: 'Transformer √x − 2 grâce au conjugué √x + 2',
          paragraphText:
            'Pour faire disparaître $\\sqrt{x} - 2$ au dénominateur, on multiplie haut et bas par $\\sqrt{x} + 2$ : $(\\sqrt{x}-2)(\\sqrt{x}+2) = x - 4$, ce qui permet de simplifier par $(x-4)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q3',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2}$ ?',
            options: ['$0$', '$2$', '$4$', '$+\\infty$'],
            correctAnswerIndex: 2,
            explanation: 'En multipliant par $\\sqrt{x}+2$, l’expression devient $\\sqrt{x}+2$ pour $x\\neq 4$, dont la limite en $4$ est $\\sqrt{4}+2 = 4$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Ne pas décréter que 0/0 = 0 ou 1',
          stepTitle: '0/0 est une forme indéterminée, jamais un résultat final',
          paragraphText:
            'Voir $0$ en haut et $0$ en bas ne veut jamais dire que la limite vaut $0$, ni $1$, ni $\\infty$ ! Les exemples précédents donnent $-4$, $\\dfrac{2}{5}$ et $4$ : il faut toujours transformer l’expression.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q4',
            type: 'mcq',
            prompt: 'Que vaut $\\lim_{x\\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$ ?',
            options: ['$6$', '$\\dfrac{1}{6}$', '$0$', '$3$'],
            correctAnswerIndex: 1,
            explanation: 'En multipliant par $\\sqrt{x}+3$, on obtient $\\dfrac{x-9}{(x-9)(\\sqrt{x}+3)} = \\dfrac{1}{\\sqrt{x}+3} \\xrightarrow[x\\to 9]{} \\dfrac{1}{6}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Continuité d’une fonction prolongée',
          stepTitle: 'Comparer la limite levée à la valeur f(−2)',
          paragraphText:
            'Pour $f(x) = \\dfrac{-x^2 - x + 2}{x + 2}$ si $x \\neq -2$ et $f(-2) = 0$, on factorise : $-x^2 - x + 2 = -(x+2)(x-1)$, d’où $\\lim_{x\\to -2} f(x) = \\lim_{x\\to -2}(-x+1) = 3 \\neq f(-2)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q5',
            type: 'mcq',
            prompt:
              'Soit $f(x) = \\dfrac{-x^2 - x + 2}{x + 2}$ pour $x \\neq -2$, et $f(-2) = 0$. Quelle est la limite $\\lim_{\\substack{x\\to -2\\\\x\\neq -2}} f(x)$ et $f$ est-elle continue en $-2$ ?',
            options: [
              'La limite vaut $3$, donc $f$ est continue en $-2$',
              'La limite de $\\frac{-x^2-x+2}{x+2}$ vaut $3 \\neq f(-2)$, donc $f$ n’est pas continue en $-2$',
              'La limite vaut $0$, donc $f$ est continue en $-2$',
              'La limite vaut $-3$, donc $f$ n’est pas continue en $-2$',
            ],
            correctAnswerIndex: 1,
            explanation: '$-x^2-x+2 = -(x+2)(x-1)$, donc pour $x\\neq -2$, $f(x) = -x+1 \\to 3$. Comme $3 \\neq f(-2)=0$, $f$ n’est pas continue en $-2$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Rendre continue une fonction en a',
          stepTitle: 'Choisir f(a) pour assurer la continuité',
          paragraphText:
            'Dans l’exemple précédent, comme $\\dfrac{-x^2-x+2}{x+2}$ tend vers $3$ en $-2$, il aurait fallu poser $f(-2) = 3$ (et non $0$) pour rendre $f$ continue en $-2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q6',
            type: 'mcq',
            prompt:
              'Pour quelle valeur $k$ la fonction définie par $f(x) = \\dfrac{x^2 - 9}{x - 3}$ ($x \\neq 3$) et $f(3) = k$ est-elle continue en $3$ ?',
            options: ['$k = 0$', '$k = 3$', '$k = 6$', '$k = 9$'],
            correctAnswerIndex: 2,
            explanation: 'Pour $x \\neq 3$, $f(x) = \\dfrac{(x-3)(x+3)}{x-3} = x+3 \\to 6$. Pour la continuité en $3$, il faut $k = f(3) = 6$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q1',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to -2} \\dfrac{x^2 - 4}{x + 2}$ ?',
          options: ['$0$', '$-4$', '$4$', '$+\\infty$'],
          correctAnswerIndex: 1,
          explanation: '$\\dfrac{x^2-4}{x+2} = \\dfrac{(x-2)(x+2)}{x+2} = x - 2$ pour $x\\neq -2$, donc la limite en $-2$ vaut $-2 - 2 = -4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q2',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 3} \\dfrac{x^2 - 4x + 3}{x^2 - x - 6}$ ?',
          options: ['$\\dfrac{2}{5}$', '$0$', '$-\\dfrac{1}{2}$', '$1$'],
          correctAnswerIndex: 0,
          explanation: 'Après factorisation par $(x-3)$ et simplification, on obtient $\\lim_{x\\to 3}\\dfrac{x-1}{x+2} = \\dfrac{3-1}{3+2} = \\dfrac{2}{5}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q3',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 4} \\dfrac{x - 4}{\\sqrt{x} - 2}$ ?',
          options: ['$0$', '$2$', '$4$', '$+\\infty$'],
          correctAnswerIndex: 2,
          explanation: 'En multipliant par $\\sqrt{x}+2$, l’expression devient $\\sqrt{x}+2$ pour $x\\neq 4$, dont la limite en $4$ est $\\sqrt{4}+2 = 4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q4',
          type: 'mcq',
          prompt: 'Que vaut $\\lim_{x\\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$ ?',
          options: ['$6$', '$\\dfrac{1}{6}$', '$0$', '$3$'],
          correctAnswerIndex: 1,
          explanation: 'En multipliant par $\\sqrt{x}+3$, on obtient $\\dfrac{x-9}{(x-9)(\\sqrt{x}+3)} = \\dfrac{1}{\\sqrt{x}+3} \\xrightarrow[x\\to 9]{} \\dfrac{1}{6}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q5',
          type: 'mcq',
          prompt:
            'Soit $f(x) = \\dfrac{-x^2 - x + 2}{x + 2}$ pour $x \\neq -2$, et $f(-2) = 0$. Quelle est la limite $\\lim_{\\substack{x\\to -2\\\\x\\neq -2}} f(x)$ et $f$ est-elle continue en $-2$ ?',
          options: [
            'La limite vaut $3$, donc $f$ est continue en $-2$',
            'La limite de $\\frac{-x^2-x+2}{x+2}$ vaut $3 \\neq f(-2)$, donc $f$ n’est pas continue en $-2$',
            'La limite vaut $0$, donc $f$ est continue en $-2$',
            'La limite vaut $-3$, donc $f$ n’est pas continue en $-2$',
          ],
          correctAnswerIndex: 1,
          explanation: '$-x^2-x+2 = -(x+2)(x-1)$, donc pour $x\\neq -2$, $f(x) = -x+1 \\to 3$. Comme $3 \\neq f(-2)=0$, $f$ n’est pas continue en $-2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l05_limites_continuite_p06_q6',
          type: 'mcq',
          prompt:
            'Pour quelle valeur $k$ la fonction définie par $f(x) = \\dfrac{x^2 - 9}{x - 3}$ ($x \\neq 3$) et $f(3) = k$ est-elle continue en $3$ ?',
          options: ['$k = 0$', '$k = 3$', '$k = 6$', '$k = 9$'],
          correctAnswerIndex: 2,
          explanation: 'Pour $x \\neq 3$, $f(x) = \\dfrac{(x-3)(x+3)}{x-3} = x+3 \\to 6$. Pour la continuité en $3$, il faut $k = f(3) = 6$.',
        },
      ],
    },
  ],
};
