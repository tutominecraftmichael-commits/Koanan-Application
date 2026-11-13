import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 11 : Étude et représentation graphique d’une fonction.pdf » (format v2).
export const MATHS_1RE_C_L11_ETUDE_REPRESENTATION_FONCTION: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l11_etude_representation_fonction',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 11,
  title: 'Leçon 11 : Étude et représentation graphique d’une fonction',
  summary:
    'Parité et réduction d’étude, axe et centre de symétrie, périodicité, asymptotes obliques et positions relatives, plan complet d’étude et optimisation.',
  officialVolumeHours: 12,
  contentVersion: 2,
  source: '1ère C - Leçon 11 : Étude et représentation graphique d’une fonction.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Parité d'une fonction et domaine symétrique
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01',
      order: 1,
      title: 'Parité d’une fonction et domaine symétrique',
      summary:
        'Vérifier la symétrie du domaine de définition par rapport à 0 et tester si f(−x) = f(x) ou f(−x) = −f(x).',
      conceptExplanation:
        "Soit $f$ une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ d'ensemble de définition $D_f$ et $(C_f)$ sa courbe dans un repère orthogonal $(O, I, J)$.\n\n- **Condition préalable obligatoire** : $D_f$ doit être **symétrique par rapport à $0$**, c'est-à-dire que pour tout $x \\in D_f$, on a $-x \\in D_f$. Sinon, $f$ n'est ni paire ni impaire !\n- **$f$ est paire** lorsque $\\forall x \\in D_f, -x \\in D_f$ et $f(-x) = f(x)$. Graphiquement, la droite des ordonnées $(OJ)$ est un **axe de symétrie** de $(C_f)$.\n- **$f$ est impaire** lorsque $\\forall x \\in D_f, -x \\in D_f$ et $f(-x) = -f(x)$. Graphiquement, l'origine $O$ est un **centre de symétrie** de $(C_f)$.\n- Dans les deux cas, il suffit d'étudier $f$ sur $D_f \\cap [0; +\\infty[$, puis de compléter $(C_f)$ par symétrie.",
      keyRule:
        'Avant de calculer f(−x), vérifie toujours que D_f est symétrique par rapport à 0 ! Paire ⇔ axe (OJ) ; impaire ⇔ centre O.',
      formulas: [
        { name: 'Fonction paire', formula: '\\forall x \\in D_f,\\ -x \\in D_f \\text{ et } f(-x) = f(x)' },
        { name: 'Fonction impaire', formula: '\\forall x \\in D_f,\\ -x \\in D_f \\text{ et } f(-x) = -f(x)' },
      ],
      workedExample: {
        title: 'Étudier la parité de quatre fonctions (Exercice 1 p. 9-10)',
        statement:
          'Étudie la parité des fonctions : (1) $f_1(x) = 3x^4 - |x| + 1$ ; (2) $f_2(x) = \\dfrac{x^3}{x^2 - 1}$ ; (3) $f_3(x) = \\dfrac{x^2}{x - 1}$ ; (4) $f_4(x) = x^2 + 4x - 8$.',
        methodSteps: [
          '(1) $D_{f_1} = \\mathbb{R}$ (symétrique par rapport à $0$) et $f_1(-x) = 3(-x)^4 - |-x| + 1 = 3x^4 - |x| + 1 = f_1(x)$ : $f_1$ est paire.',
          '(2) $D_{f_2} = \\mathbb{R}\\setminus\\{-1; 1\\}$ (symétrique par rapport à $0$) et $f_2(-x) = \\dfrac{(-x)^3}{(-x)^2 - 1} = -\\dfrac{x^3}{x^2 - 1} = -f_2(x)$ : $f_2$ est impaire.',
          '(3) $D_{f_3} = \\mathbb{R}\\setminus\\{1\\}$ n’est pas symétrique par rapport à $0$ car $-1 \\in D_{f_3}$ mais $1 \\notin D_{f_3}$ : $f_3$ n’est ni paire ni impaire.',
          '(4) $D_{f_4} = \\mathbb{R}$ mais $f_4(-x) = x^2 - 4x - 8$ n’est égal ni à $f_4(x)$ ni à $-f_4(x)$ : $f_4$ n’est ni paire ni impaire.',
        ],
        conclusion: '$f_1$ paire, $f_2$ impaire, $f_3$ et $f_4$ ni paires ni impaires.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Domaine symétrique par rapport à 0',
          stepTitle: 'Vérifier la condition −x ∈ D_f avant tout calcul',
          paragraphText:
            'Des ensembles comme $\\mathbb{R}$, $\\mathbb{R}\\setminus\\{0\\}$, $\\mathbb{R}\\setminus\\{-2; 2\\}$ ou $[-1; 1]$ sont symétriques par rapport à $0$. En revanche, $\\mathbb{R}\\setminus\\{1\\}$ ou $[-2; 5]$ ne le sont pas.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q1',
            type: 'mcq',
            prompt: 'Parmi ces ensembles, lequel N’EST PAS symétrique par rapport à $0$ ?',
            options: ['$\\mathbb{R}\\setminus\\{-1; 1\\}$', '$]-3; 3[$', '$\\mathbb{R}\\setminus\\{2\\}$', '$\\mathbb{R}\\setminus\\{0\\}$'],
            correctAnswerIndex: 2,
            explanation: '$-2 \\in \\mathbb{R}\\setminus\\{2\\}$ mais son opposé $2$ n’y appartient pas : cet ensemble n’est pas symétrique par rapport à $0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Fonction paire et axe (OJ)',
          stepTitle: 'Reconnaître une fonction paire algébriquement',
          paragraphText:
            'Les fonctions $x \\mapsto c$, $x \\mapsto x^2$, $x \\mapsto |x|$ et $x \\mapsto \\cos(x)$ sont paires. Dans un repère orthogonal $(O, I, J)$, la courbe d’une fonction paire est symétrique par rapport à l’axe $(OJ)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q2',
            type: 'mcq',
            prompt: 'Laquelle de ces fonctions est paire sur son ensemble de définition ?',
            options: [
              '$f(x) = \\dfrac{x}{1 + x^2}$',
              '$f(x) = 3x^4 - |x| + 1$',
              '$f(x) = x^2 + 4x - 8$',
              '$f(x) = \\sin(x)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $f(x) = 3x^4 - |x| + 1$, $D_f = \\mathbb{R}$ et $f(-x) = 3(-x)^4 - |-x| + 1 = 3x^4 - |x| + 1 = f(x)$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Fonction impaire et centre O',
          stepTitle: 'Reconnaître une fonction impaire algébriquement et graphiquement',
          paragraphText:
            'Les fonctions $x \\mapsto x$, $x \\mapsto x^3$, $x \\mapsto \\dfrac{1}{x}$ et $x \\mapsto \\sin(x)$ sont impaires. La courbe d’une fonction impaire admet l’origine $O$ pour centre de symétrie.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q3',
            type: 'mcq',
            prompt: 'Que peut-on dire de la fonction $f$ définie sur $\\mathbb{R}\\setminus\\{-1; 1\\}$ par $f(x) = \\dfrac{x^3}{x^2 - 1}$ ?',
            options: [
              'Elle est paire, sa courbe admet $(OJ)$ comme axe de symétrie',
              'Elle est impaire, sa courbe admet $O$ comme centre de symétrie',
              'Elle n’est ni paire ni impaire',
              'Son domaine n’est pas symétrique par rapport à $0$',
            ],
            correctAnswerIndex: 1,
            explanation: '$D_f = \\mathbb{R}\\setminus\\{-1; 1\\}$ est symétrique par rapport à $0$ et $f(-x) = \\dfrac{-x^3}{x^2 - 1} = -f(x)$ : $f$ est impaire.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Réduction de l’intervalle d’étude',
          stepTitle: 'Restreindre l’étude à D_f ∩ [0; +∞[',
          paragraphText:
            'Lorsque $f$ est paire ou impaire, il suffit d’étudier ses variations et de tracer sa courbe sur $D_f \\cap [0; +\\infty[$, puis de compléter le tracé par symétrie orthogonale d’axe $(OJ)$ (paire) ou symétrie centrale de centre $O$ (impaire).',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q4',
            type: 'mcq',
            prompt:
              'La fonction $f$ est impaire sur $\\mathbb{R}\\setminus\\{-1; 1\\}$ et croissante sur $]1; +\\infty[$. Quel est son sens de variation sur $]-\\infty; -1[$ ?',
            options: ['Décroissante', 'Croissante', 'Constante', 'On ne peut pas conclure'],
            correctAnswerIndex: 1,
            explanation: 'La symétrie centrale de centre $O$ conserve les sens de variation : $f$ est aussi croissante sur $]-\\infty; -1[$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier de tester le domaine D_f',
          stepTitle: 'Attention au piège de f(x) = x²/(x − 1)',
          paragraphText:
            'Pour $f(x) = \\dfrac{x^2}{x - 1}$, $f(-x) = \\dfrac{x^2}{-x - 1} \\neq f(x)$ et $\\neq -f(x)$, mais on gagne encore plus de temps en remarquant dès le départ que $D_f = \\mathbb{R}\\setminus\\{1\\}$ n’est pas symétrique par rapport à $0$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q5',
            type: 'mcq',
            prompt:
              'Pour $f(x) = \\dfrac{x^2}{x - 1}$, pourquoi peut-on conclure immédiatement qu’elle n’est ni paire ni impaire sans même calculer $f(-x)$ ?',
            options: [
              'Parce que $x^2$ est pair et $x - 1$ ne l’est pas',
              'Parce que $1 \\notin D_f$ alors que $-1 \\in D_f$ : $D_f$ n’est pas symétrique par rapport à $0$',
              'Parce que $f(0) = 0$',
              'Parce qu’une fraction rationnelle n’est jamais paire',
            ],
            correctAnswerIndex: 1,
            explanation: '$-1 \\in D_f$ mais $-(-1) = 1 \\notin D_f$, ce qui viole dès l’origine la condition « $\\forall x \\in D_f, -x \\in D_f$ ».',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Fonction impaire définie en 0',
          stepTitle: 'Valeur obligatoire f(0) pour une fonction impaire',
          paragraphText:
            'Si $f$ est impaire et définie en $0$, alors $f(-0) = -f(0)$, soit $f(0) = -f(0)$, d’où $2f(0) = 0$ et donc $f(0) = 0$. La courbe passe obligatoirement par $O(0; 0)$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q6',
            type: 'mcq',
            prompt: 'Soit $f$ une fonction définie sur $\\mathbb{R}$ telle que $f(x) = x^2 + 4x - 8$. Pourquoi $f$ n’est-elle pas impaire ?',
            options: [
              '$D_f$ n’est pas symétrique par rapport à $0$',
              '$f(0) = -8 \\neq 0$ et $f(-x) = x^2 - 4x - 8 \\neq -f(x)$',
              'Parce que $f(1) = -3$',
              'Parce que son coefficient dominant est $1$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Toute fonction impaire définie en $0$ vérifie $f(0) = 0$. Ici $f(0) = -8 \\neq 0$ (et $f(-x) \\neq \\pm f(x)$).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q1',
          type: 'mcq',
          prompt: 'Parmi ces ensembles, lequel N’EST PAS symétrique par rapport à $0$ ?',
          options: ['$\\mathbb{R}\\setminus\\{-1; 1\\}$', '$]-3; 3[$', '$\\mathbb{R}\\setminus\\{2\\}$', '$\\mathbb{R}\\setminus\\{0\\}$'],
          correctAnswerIndex: 2,
          explanation: '$-2 \\in \\mathbb{R}\\setminus\\{2\\}$ mais son opposé $2$ n’y appartient pas : cet ensemble n’est pas symétrique par rapport à $0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q2',
          type: 'mcq',
          prompt: 'Laquelle de ces fonctions est paire sur son ensemble de définition ?',
          options: [
            '$f(x) = \\dfrac{x}{1 + x^2}$',
            '$f(x) = 3x^4 - |x| + 1$',
            '$f(x) = x^2 + 4x - 8$',
            '$f(x) = \\sin(x)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $f(x) = 3x^4 - |x| + 1$, $D_f = \\mathbb{R}$ et $f(-x) = 3(-x)^4 - |-x| + 1 = 3x^4 - |x| + 1 = f(x)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q3',
          type: 'mcq',
          prompt: 'Que peut-on dire de la fonction $f$ définie sur $\\mathbb{R}\\setminus\\{-1; 1\\}$ par $f(x) = \\dfrac{x^3}{x^2 - 1}$ ?',
          options: [
            'Elle est paire, sa courbe admet $(OJ)$ comme axe de symétrie',
            'Elle est impaire, sa courbe admet $O$ comme centre de symétrie',
            'Elle n’est ni paire ni impaire',
            'Son domaine n’est pas symétrique par rapport à $0$',
          ],
          correctAnswerIndex: 1,
          explanation: '$D_f = \\mathbb{R}\\setminus\\{-1; 1\\}$ est symétrique par rapport à $0$ et $f(-x) = \\dfrac{-x^3}{x^2 - 1} = -f(x)$ : $f$ est impaire.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q4',
          type: 'mcq',
          prompt:
            'La fonction $f$ est impaire sur $\\mathbb{R}\\setminus\\{-1; 1\\}$ et croissante sur $]1; +\\infty[$. Quel est son sens de variation sur $]-\\infty; -1[$ ?',
          options: ['Décroissante', 'Croissante', 'Constante', 'On ne peut pas conclure'],
          correctAnswerIndex: 1,
          explanation: 'La symétrie centrale de centre $O$ conserve les sens de variation : $f$ est aussi croissante sur $]-\\infty; -1[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q5',
          type: 'mcq',
          prompt:
            'Pour $f(x) = \\dfrac{x^2}{x - 1}$, pourquoi peut-on conclure immédiatement qu’elle n’est ni paire ni impaire sans même calculer $f(-x)$ ?',
          options: [
            'Parce que $x^2$ est pair et $x - 1$ ne l’est pas',
            'Parce que $1 \\notin D_f$ alors que $-1 \\in D_f$ : $D_f$ n’est pas symétrique par rapport à $0$',
            'Parce que $f(0) = 0$',
            'Parce qu’une fraction rationnelle n’est jamais paire',
          ],
          correctAnswerIndex: 1,
          explanation: '$-1 \\in D_f$ mais $-(-1) = 1 \\notin D_f$, ce qui viole dès l’origine la condition « $\\forall x \\in D_f, -x \\in D_f$ ».',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q6',
          type: 'mcq',
          prompt: 'Soit $f$ une fonction définie sur $\\mathbb{R}$ telle que $f(x) = x^2 + 4x - 8$. Pourquoi $f$ n’est-elle pas impaire ?',
          options: [
            '$D_f$ n’est pas symétrique par rapport à $0$',
            '$f(0) = -8 \\neq 0$ et $f(-x) = x^2 - 4x - 8 \\neq -f(x)$',
            'Parce que $f(1) = -3$',
            'Parce que son coefficient dominant est $1$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Toute fonction impaire définie en $0$ vérifie $f(0) = 0$. Ici $f(0) = -8 \\neq 0$ (et $f(-x) \\neq \\pm f(x)$).',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Axe de symétrie et centre de symétrie
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02',
      order: 2,
      title: 'Axe de symétrie et centre de symétrie',
      summary:
        'Démontrer qu’une droite x = a est axe de symétrie ou qu’un point A(a ; b) est centre de symétrie de (C_f).',
      conceptExplanation:
        "Dans un repère orthogonal $(O, I, J)$, soit $f$ définie sur $D_f$ :\n\n1. **Axe de symétrie $(D) : x = a$** : $(D)$ est axe de symétrie de $(C_f)$ si et seulement si pour tout $x \\in D_f$ :\n$$2a - x \\in D_f \\quad \\text{et} \\quad f(2a - x) = f(x)$$\n*(Variante équivalente : pour tout $h$ tel que $a+h \\in D_f$, on a $a-h \\in D_f$ et $f(a+h) = f(a-h)$.)*\n\n2. **Centre de symétrie $A(a; b)$** : $A$ est centre de symétrie de $(C_f)$ si et seulement si pour tout $x \\in D_f$ :\n$$2a - x \\in D_f \\quad \\text{et} \\quad f(2a - x) + f(x) = 2b$$\n*(Variante équivalente : $a-h \\in D_f$ et $\\dfrac{f(a+h) + f(a-h)}{2} = b$.)*",
      keyRule:
        'Axe x = a : f(2a − x) = f(x) (ou f(x + a) paire). Centre A(a ; b) : f(2a − x) + f(x) = 2b (ou g(x) = f(x + a) − b impaire).',
      formulas: [
        { name: 'Axe de symétrie x = a', formula: '2a - x \\in D_f \\text{ et } f(2a - x) = f(x)' },
        { name: 'Centre de symétrie A(a ; b)', formula: '2a - x \\in D_f \\text{ et } f(2a - x) + f(x) = 2b' },
      ],
      visualSchema: {
        type: 'function_plot',
        title: 'Axe de symétrie x = 3 pour f(x) = −2(x − 3)² + 5',
        caption:
          'Pour tout x ∈ ℝ, f(6 − x) = f(x) : la parabole est symétrique par rapport à la droite verticale x = 3.',
        plot: {
          xMin: 0,
          xMax: 6,
          yMin: -4,
          yMax: 6,
          xStep: 1,
          yStep: 1,
          curves: [
            {
              label: 'f(x) = −2(x−3)²+5',
              color: 'blue',
              pieces: [{ expr: '-2*(x-3)^2+5', from: 0.9, to: 5.1 }],
            },
          ],
          verticalLines: [{ x: 3, label: 'Axe x = 3', color: 'orange' }],
        },
      },
      workedExample: {
        title: 'Axe x = 3 et centre A(2 ; 3) (Exercices de fixation p. 5-6)',
        statement:
          '1. Démontre que la droite $(D) : x = 3$ est axe de symétrie de $(C_f)$ pour $f(x) = -2(x - 3)^2 + 5$.\n2. Démontre que $A(2; 3)$ est centre de symétrie de $(C_g)$ pour $g(x) = (x - 2)^3 + 3$.',
        methodSteps: [
          '1. $D_f = \\mathbb{R}$, donc $\\forall x \\in \\mathbb{R}$, $2\\times 3 - x = 6 - x \\in D_f$. De plus, $f(6 - x) = -2(6 - x - 3)^2 + 5 = -2(3 - x)^2 + 5 = -2(x - 3)^2 + 5 = f(x)$. Donc $x = 3$ est axe de symétrie.',
          '2. $D_g = \\mathbb{R}$, donc $\\forall x \\in \\mathbb{R}$, $2\\times 2 - x = 4 - x \\in D_g$. De plus, $g(4 - x) + g(x) = (2 - x)^3 + 3 + (x - 2)^3 + 3 = -(x - 2)^3 + (x - 2)^3 + 6 = 6 = 2\\times 3$. Donc $A(2; 3)$ est centre de symétrie.',
        ],
        conclusion: '$(D): x = 3$ est axe de symétrie de $(C_f)$ et $A(2; 3)$ est centre de symétrie de $(C_g)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formule de l’axe de symétrie',
          stepTitle: 'Utiliser f(2a − x) = f(x)',
          paragraphText:
            'Pour démontrer que $(D) : x = a$ est axe de symétrie, calcule $2a - x$ (par exemple si $a = 3$, $2a - x = 6 - x$), vérifie qu’il reste dans $D_f$ puis montre que $f(2a - x) = f(x)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q1',
            type: 'mcq',
            prompt: 'Pour démontrer que la droite d’équation $x = 2$ est axe de symétrie de $(C_f)$, quelle relation doit vérifier $f$ pour tout $x \\in D_f$ ?',
            options: [
              '$2 - x \\in D_f$ et $f(2 - x) = f(x)$',
              '$4 - x \\in D_f$ et $f(4 - x) = f(x)$',
              '$4 - x \\in D_f$ et $f(4 - x) + f(x) = 2$',
              '$x + 2 \\in D_f$ et $f(x + 2) = f(x)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Ici $a = 2$, donc $2a - x = 4 - x$ : il faut $4 - x \\in D_f$ et $f(4 - x) = f(x)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formule du centre de symétrie',
          stepTitle: 'Vérifier f(2a − x) + f(x) = 2b',
          paragraphText:
            'Le point $A(a; b)$ est le milieu de tout couple de points symétriques $M(x; f(x))$ et $M\'(2a - x; f(2a - x))$. Leurs abscisses ont pour moyenne $a$ et leurs ordonnées ont pour moyenne $b$, d’où $f(2a - x) + f(x) = 2b$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q2',
            type: 'mcq',
            prompt: 'Soit $f(x) = \\dfrac{x^2 + 5x - 1}{x + 1}$ sur $\\mathbb{R}\\setminus\\{-1\\}$. Que vaut $f(-2 - x) + f(x)$ ?',
            options: ['$3$', '$6$', '$0$', '$-2$'],
            correctAnswerIndex: 1,
            explanation:
              '$f(-2-x) + f(x) = \\dfrac{(-2-x)^2 + 5(-2-x) - 1}{-1 - x} + \\dfrac{x^2 + 5x - 1}{x + 1} = \\dfrac{-x^2 + x + 7 + x^2 + 5x - 1}{x + 1} = \\dfrac{6(x + 1)}{x + 1} = 6 = 2 \\times 3$. Ainsi $A(-1; 3)$ est centre de symétrie.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Changement de repère g(x) = f(x + a) − b',
          stepTitle: 'Se ramener à la parité autour de l’origine',
          paragraphText:
            'Les Exercices 2, 6, 7 et 8 utilisent aussi le changement de variable : $x = a$ est axe de symétrie de $(C_f)$ si et seulement si $g(x) = f(x + a)$ est paire ; $A(a; b)$ est centre de symétrie si et seulement si $g(x) = f(x + a) - b$ est impaire.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q3',
            type: 'mcq',
            prompt:
              'Pour $f(x) = x^2 - 4x + 7$, on pose $g(x) = f(x + 2)$. Quelle expression simplifiée obtient-on pour $g(x)$ ?',
            options: ['$x^2 + 3$', '$x^2 - 4x + 3$', '$x^2 + 7$', '$(x + 2)^2 + 3$'],
            correctAnswerIndex: 0,
            explanation:
              '$f(x + 2) = (x + 2)^2 - 4(x + 2) + 7 = x^2 + 4x + 4 - 4x - 8 + 7 = x^2 + 3$. Cette fonction $g$ est paire, donc $x = 2$ est axe de symétrie.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Centre de symétrie d’une fonction homographique ou rationnelle',
          stepTitle: 'Tester le centre A(2 ; 1) de f(x) = (x² − 3x + 3)/(x − 2)',
          paragraphText:
            'Dans l’Exercice 8, $f(x) = x - 1 + \\dfrac{1}{x - 2}$. En posant $g(x) = f(x + 2) - 1 = (x + 2 - 1 + \\dfrac{1}{x}) - 1 = x + \\dfrac{1}{x} = \\dfrac{x^2 + 1}{x}$, on voit immédiatement que $g$ est impaire sur $\\mathbb{R}\\setminus\\{0\\}$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q4',
            type: 'mcq',
            prompt: 'Si l’on pose $g(x) = f(x - 1) - 2$ pour $f(x) = \\dfrac{2x - 1}{x + 1}$ (Exercice 7), quelle expression obtient-on pour $g(x)$ ?',
            options: ['$-\\dfrac{3}{x}$', '$\\dfrac{3}{x}$', '$\\dfrac{2x}{x}$', '$-\\dfrac{1}{x}$'],
            correctAnswerIndex: 0,
            explanation:
              '$f(x - 1) - 2 = \\dfrac{2(x - 1) - 1}{x} - 2 = \\dfrac{2x - 3 - 2x}{x} = -\\dfrac{3}{x}$, impaire sur $\\mathbb{R}\\setminus\\{0\\}$, donc $A(-1; 2)$ est centre de symétrie.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Ne pas oublier le « 2b » pour le centre de symétrie',
          stepTitle: 'Attention : f(2a − x) + f(x) vaut 2b (pas b) !',
          paragraphText:
            'Pour un centre $A(a; b)$, la demi-somme $\\dfrac{f(a+h) + f(a-h)}{2}$ est égale à $b$, ce qui revient à une somme égale à $2b$ — jamais un produit ni simplement $b$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q5',
            type: 'mcq',
            prompt: 'Soit $f(x) = x^3 - 3x - 1$. Quelle valeur de $b$ permet au point $A(0; b)$ d’être centre de symétrie de $(C_f)$ ?',
            options: ['$b = 0$', '$b = -1$', '$b = -2$', '$b = 1$'],
            correctAnswerIndex: 1,
            explanation: '$f(-x) + f(x) = (-x^3 + 3x - 1) + (x^3 - 3x - 1) = -2 = 2 \\times (-1)$, donc $b = -1$ et $A(0; -1)$ est centre de symétrie.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Centre de symétrie et domaine de définition',
          stepTitle: 'Exploiter la valeur interdite pour deviner l’abscisse du centre',
          paragraphText:
            'Si $D_f = \\mathbb{R}\\setminus\\{x_0\\}$, tout axe ou centre de symétrie doit laisser $D_f$ stable par $x \\mapsto 2a - x$, ce qui impose $2a - x_0 = x_0$, soit $a = x_0$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q6',
            type: 'mcq',
            prompt:
              'La courbe d’une fonction définie sur $\\mathbb{R}\\setminus\\{5\\}$ possède un centre de symétrie $A(a; b)$. Que vaut obligatoirement $a$ ?',
            options: ['$a = 0$', '$a = 2{,}5$', '$a = 5$', '$a = 10$'],
            correctAnswerIndex: 2,
            explanation: 'Pour que $2a - x \\in \\mathbb{R}\\setminus\\{5\\}$ pour tout $x \\neq 5$, la valeur exclue $5$ doit être son propre symétrique : $2a - 5 = 5 \\implies a = 5$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q1',
          type: 'mcq',
          prompt: 'Pour démontrer que la droite d’équation $x = 2$ est axe de symétrie de $(C_f)$, quelle relation doit vérifier $f$ pour tout $x \\in D_f$ ?',
          options: [
            '$2 - x \\in D_f$ et $f(2 - x) = f(x)$',
            '$4 - x \\in D_f$ et $f(4 - x) = f(x)$',
            '$4 - x \\in D_f$ et $f(4 - x) + f(x) = 2$',
            '$x + 2 \\in D_f$ et $f(x + 2) = f(x)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Ici $a = 2$, donc $2a - x = 4 - x$ : il faut $4 - x \\in D_f$ et $f(4 - x) = f(x)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q2',
          type: 'mcq',
          prompt: 'Soit $f(x) = \\dfrac{x^2 + 5x - 1}{x + 1}$ sur $\\mathbb{R}\\setminus\\{-1\\}$. Que vaut $f(-2 - x) + f(x)$ ?',
          options: ['$3$', '$6$', '$0$', '$-2$'],
          correctAnswerIndex: 1,
          explanation:
            '$f(-2-x) + f(x) = \\dfrac{(-2-x)^2 + 5(-2-x) - 1}{-1 - x} + \\dfrac{x^2 + 5x - 1}{x + 1} = \\dfrac{-x^2 + x + 7 + x^2 + 5x - 1}{x + 1} = \\dfrac{6(x + 1)}{x + 1} = 6 = 2 \\times 3$. Ainsi $A(-1; 3)$ est centre de symétrie.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q3',
          type: 'mcq',
          prompt:
            'Pour $f(x) = x^2 - 4x + 7$, on pose $g(x) = f(x + 2)$. Quelle expression simplifiée obtient-on pour $g(x)$ ?',
          options: ['$x^2 + 3$', '$x^2 - 4x + 3$', '$x^2 + 7$', '$(x + 2)^2 + 3$'],
          correctAnswerIndex: 0,
          explanation:
            '$f(x + 2) = (x + 2)^2 - 4(x + 2) + 7 = x^2 + 4x + 4 - 4x - 8 + 7 = x^2 + 3$. Cette fonction $g$ est paire, donc $x = 2$ est axe de symétrie.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q4',
          type: 'mcq',
          prompt: 'Si l’on pose $g(x) = f(x - 1) - 2$ pour $f(x) = \\dfrac{2x - 1}{x + 1}$ (Exercice 7), quelle expression obtient-on pour $g(x)$ ?',
          options: ['$-\\dfrac{3}{x}$', '$\\dfrac{3}{x}$', '$\\dfrac{2x}{x}$', '$-\\dfrac{1}{x}$'],
          correctAnswerIndex: 0,
          explanation:
            '$f(x - 1) - 2 = \\dfrac{2(x - 1) - 1}{x} - 2 = \\dfrac{2x - 3 - 2x}{x} = -\\dfrac{3}{x}$, impaire sur $\\mathbb{R}\\setminus\\{0\\}$, donc $A(-1; 2)$ est centre de symétrie.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q5',
          type: 'mcq',
          prompt: 'Soit $f(x) = x^3 - 3x - 1$. Quelle valeur de $b$ permet au point $A(0; b)$ d’être centre de symétrie de $(C_f)$ ?',
          options: ['$b = 0$', '$b = -1$', '$b = -2$', '$b = 1$'],
          correctAnswerIndex: 1,
          explanation: '$f(-x) + f(x) = (-x^3 + 3x - 1) + (x^3 - 3x - 1) = -2 = 2 \\times (-1)$, donc $b = -1$ et $A(0; -1)$ est centre de symétrie.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q6',
          type: 'mcq',
          prompt:
            'La courbe d’une fonction définie sur $\\mathbb{R}\\setminus\\{5\\}$ possède un centre de symétrie $A(a; b)$. Que vaut obligatoirement $a$ ?',
          options: ['$a = 0$', '$a = 2{,}5$', '$a = 5$', '$a = 10$'],
          correctAnswerIndex: 2,
          explanation: 'Pour que $2a - x \\in \\mathbb{R}\\setminus\\{5\\}$ pour tout $x \\neq 5$, la valeur exclue $5$ doit être son propre symétrique : $2a - 5 = 5 \\implies a = 5$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Fonctions périodiques et réduction d'intervalle
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03',
      order: 3,
      title: 'Fonctions périodiques et réduction d’intervalle',
      summary:
        'Montrer qu’une fonction est T-périodique et combiner périodicité et parité pour réduire l’intervalle d’étude.',
      conceptExplanation:
        "Soit $T$ un réel strictement positif ($T > 0$). Une fonction $f$ est dite **périodique de période $T$** (ou $T$-périodique) lorsque pour tout $x \\in D_f$ :\n$$x + T \\in D_f, \\quad x - T \\in D_f \\quad \\text{et} \\quad f(x + T) = f(x)$$\n\nRéférences usuelles :\n- $\\cos$ et $\\sin$ sont $2\\pi$-périodiques ; $\\tan$ est $\\pi$-périodique.\n- Si $T$ est une période de $f$, alors pour tout $k \\in \\mathbb{Z}\\setminus\\{0\\}$, $f(x + kT) = f(x)$.\n- **Réduction d'étude** : si $f$ est $T$-périodique, il suffit de l'étudier sur $D_f \\cap [a; a + T[$ puis de translater la courbe par $k T\\,\\overrightarrow{OI}$. Si elle est en plus paire ou impaire, on étudie sur $D_f \\cap [0; T/2]$.",
      keyRule:
        'T > 0 est période si x ± T ∈ D_f et f(x + T) = f(x). Avec périodicité T ET parité/imparité, on réduit l’étude à [0 ; T/2] !',
      formulas: [
        { name: 'Période T', formula: 'x \\pm T \\in D_f \\text{ et } f(x + T) = f(x)' },
        { name: 'Fonction cos(ax + b) ou sin(ax + b)', formula: 'T = \\frac{2\\pi}{|a|}' },
        { name: 'Dérivée dans l’Exercice 9', formula: '(2\\sin x + \\sin 2x)\' = 2(2\\cos x - 1)(\\cos x + 1)' },
      ],
      workedExample: {
        title: 'Réduire l’étude de f(x) = 2sin(x) + sin(2x) (Exercice 9 p. 16-17)',
        statement:
          'Soit $f(x) = 2\\sin(x) + \\sin(2x)$ définie sur $\\mathbb{R}$. (1) Montre que $f$ est impaire et $2\\pi$-périodique, et déduis-en qu’on peut réduire l’étude à $I = [0; \\pi]$. (2) Étudie les variations sur $[0; \\pi]$.',
        methodSteps: [
          '1. $D_f = \\mathbb{R}$. $f(-x) = 2\\sin(-x) + \\sin(-2x) = -2\\sin(x) - \\sin(2x) = -f(x)$ : $f$ est impaire.',
          '$f(x + 2\\pi) = 2\\sin(x + 2\\pi) + \\sin(2x + 4\\pi) = 2\\sin(x) + \\sin(2x) = f(x)$ : $f$ est $2\\pi$-périodique.',
          'Par $2\\pi$-périodicité on restreint à $[-\\pi; \\pi]$ (de longueur $2\\pi$), puis par imparité on réduit à $[0; \\pi]$.',
          '2. $f\'(x) = 2\\cos(x) + 2\\cos(2x) = 2\\cos(x) + 2(2\\cos^2 x - 1) = 2(2\\cos x - 1)(\\cos x + 1)$. Sur $[0; \\pi]$, $\\cos x + 1 \\ge 0$ et $2\\cos x - 1$ s’annule en $\\dfrac{\\pi}{3}$ ($+$ sur $[0; \\pi/3]$, $-$ sur $[\\pi/3; \\pi]$).',
        ],
        conclusion: 'Étude sur $[0; \\pi]$ : $f$ croît de $0$ à $\\dfrac{3\\sqrt{3}}{2}$ sur $[0; \\pi/3]$ puis décroît de $\\dfrac{3\\sqrt{3}}{2}$ à $0$ sur $[\\pi/3; \\pi]$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Vérifier la définition de T-périodicité',
          stepTitle: 'Ne pas oublier la stabilité du domaine D_f par translation',
          paragraphText:
            'Dans l’Exercice 4, $f(x) = \\cos\\left(3x - \\dfrac{\\pi}{5}\\right)$ est définie sur $\\mathbb{R}$ tout entier (et surtout pas sur un intervalle borné !). Ainsi $x + \\dfrac{2\\pi}{3} \\in \\mathbb{R}$ et $x - \\dfrac{2\\pi}{3} \\in \\mathbb{R}$ pour tout $x \\in \\mathbb{R}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q1',
            type: 'mcq',
            prompt: 'Quelle est une période de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = \\cos\\left(3x - \\dfrac{\\pi}{5}\\right)$ ?',
            options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$2\\pi$', '$6\\pi$'],
            correctAnswerIndex: 1,
            explanation:
              '$f\\left(x + \\dfrac{2\\pi}{3}\\right) = \\cos\\left(3x + 2\\pi - \\dfrac{\\pi}{5}\\right) = \\cos\\left(3x - \\dfrac{\\pi}{5}\\right) = f(x)$, donc $T = \\dfrac{2\\pi}{3}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Période de sin(2x) et tan(x)',
          stepTitle: 'Connaître les périodes classiques',
          paragraphText:
            'La fonction $\\sin(2x)$ est $\\pi$-périodique car $\\sin(2(x + \\pi)) = \\sin(2x + 2\\pi) = \\sin(2x)$. La fonction $\\tan(x)$ est $\\pi$-périodique sur $\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2} + k\\pi\\right\\}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q2',
            type: 'mcq',
            prompt: 'Quelle est la période fondamentale de la fonction $x \\mapsto \\sin(2x)$ ?',
            options: ['$\\dfrac{\\pi}{2}$', '$\\pi$', '$2\\pi$', '$4\\pi$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $\\sin(ax)$, la période fondamentale est $\\dfrac{2\\pi}{|a|} = \\dfrac{2\\pi}{2} = \\pi$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Combiner périodicité et imparité',
          stepTitle: 'Passer d’une période 2π à l’intervalle [0 ; π]',
          paragraphText:
            'Dans l’Exercice 9, $f$ est $2\\pi$-périodique donc l’étude sur $[-\\pi; \\pi]$ suffit ; comme $f$ est en plus impaire, on connaît $[-\\pi; 0]$ par symétrie centrale de centre $O$ dès que $[0; \\pi]$ est connu !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q3',
            type: 'mcq',
            prompt:
              'La fonction $f(x) = 2\\sin(x) + \\sin(2x)$ est impaire et $2\\pi$-périodique. À quel intervalle minimal peut-on réduire son étude ?',
            options: ['$[0; 2\\pi[$', '$[0; \\pi]$', '$[-\\pi; \\pi]$', '$\\left[0; \\dfrac{\\pi}{2}\\right]$'],
            correctAnswerIndex: 1,
            explanation: 'La périodicité $2\\pi$ réduit l’étude à $[-\\pi; \\pi]$, puis l’imparité permet de ne l’étudier que sur $[0; \\pi]$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul du maximum de 2sin(x) + sin(2x)',
          stepTitle: 'Évaluer f en x = π/3',
          paragraphText:
            'Dans l’Exercice 9, $f\'(x) = 2(2\\cos x - 1)(\\cos x + 1)$ s’annule en $x = \\dfrac{\\pi}{3}$ sur $[0; \\pi[$. Or $\\sin\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{2}$ et $\\sin\\left(\\dfrac{2\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{2}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q4',
            type: 'mcq',
            prompt: 'Que vaut le maximum de $f(x) = 2\\sin(x) + \\sin(2x)$ sur $[0; \\pi]$, atteint en $x = \\dfrac{\\pi}{3}$ ?',
            options: ['$\\sqrt{3}$', '$\\dfrac{3\\sqrt{3}}{2}$', '$2$', '$3$'],
            correctAnswerIndex: 1,
            explanation: '$f\\left(\\dfrac{\\pi}{3}\\right) = 2\\left(\\dfrac{\\sqrt{3}}{2}\\right) + \\dfrac{\\sqrt{3}}{2} = \\sqrt{3} + \\dfrac{\\sqrt{3}}{2} = \\dfrac{3\\sqrt{3}}{2}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Période d’une somme de deux fonctions périodiques',
          stepTitle: 'Attention : f(x) = 2sin(x) + sin(2x) n’est PAS π-périodique !',
          paragraphText:
            'Bien que $\\sin(2x)$ soit $\\pi$-périodique, $\\sin(x)$ ne l’est pas : $\\sin(x + \\pi) = -\\sin(x)$. La somme prend donc la plus grande des deux périodes (un multiple commun), ici $2\\pi$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q5',
            type: 'mcq',
            prompt: 'Si $f(x) = 2\\sin(x) + \\sin(2x)$, pourquoi $\\pi$ N’EST-IL PAS une période de $f$ ?',
            options: [
              'Parce que $\\sin(2(x + \\pi)) \\neq \\sin(2x)$',
              'Parce que $f(x + \\pi) = -2\\sin(x) + \\sin(2x) \\neq f(x)$ en général',
              'Parce que $\\pi$ est irrationnel',
              'Parce que $f(\\pi) = 0$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par exemple $f(\\pi/2) = 2$, alors que $f(\\pi/2 + \\pi) = f(3\\pi/2) = -2 \\neq 2$ : $\\pi$ n’est pas période de $f$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Utiliser f(x + kT) = f(x)',
          stepTitle: 'Compléter la courbe par translations successives',
          paragraphText:
            'Une fois tracée sur $[-\\pi; \\pi]$, la courbe de l’Exercice 9 sur $\\left[-\\dfrac{7\\pi}{3}; \\dfrac{7\\pi}{3}\\right]$ s’obtient en appliquant les translations de vecteurs $-2\\pi\\,\\overrightarrow{OI}$ et $+2\\pi\\,\\overrightarrow{OI}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q6',
            type: 'mcq',
            prompt: 'Sachant que $f$ est $2\\pi$-périodique et impaire, et que $f(\\pi/3) = \\dfrac{3\\sqrt{3}}{2}$, que vaut $f\\left(-\\dfrac{7\\pi}{3}\\right)$ ?',
            options: ['$\\dfrac{3\\sqrt{3}}{2}$', '$-\\dfrac{3\\sqrt{3}}{2}$', '$0$', '$\\dfrac{\\sqrt{3}}{2}$'],
            correctAnswerIndex: 1,
            explanation: '$-\\dfrac{7\\pi}{3} = -\\dfrac{\\pi}{3} - 2\\pi$, donc par $2\\pi$-périodicité et imparité : $f(-7\\pi/3) = f(-\\pi/3) = -f(\\pi/3) = -\\dfrac{3\\sqrt{3}}{2}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q1',
          type: 'mcq',
          prompt: 'Quelle est une période de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = \\cos\\left(3x - \\dfrac{\\pi}{5}\\right)$ ?',
          options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$2\\pi$', '$6\\pi$'],
          correctAnswerIndex: 1,
          explanation:
            '$f\\left(x + \\dfrac{2\\pi}{3}\\right) = \\cos\\left(3x + 2\\pi - \\dfrac{\\pi}{5}\\right) = \\cos\\left(3x - \\dfrac{\\pi}{5}\\right) = f(x)$, donc $T = \\dfrac{2\\pi}{3}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q2',
          type: 'mcq',
          prompt: 'Quelle est la période fondamentale de la fonction $x \\mapsto \\sin(2x)$ ?',
          options: ['$\\dfrac{\\pi}{2}$', '$\\pi$', '$2\\pi$', '$4\\pi$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $\\sin(ax)$, la période fondamentale est $\\dfrac{2\\pi}{|a|} = \\dfrac{2\\pi}{2} = \\pi$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q3',
          type: 'mcq',
          prompt:
            'La fonction $f(x) = 2\\sin(x) + \\sin(2x)$ est impaire et $2\\pi$-périodique. À quel intervalle minimal peut-on réduire son étude ?',
          options: ['$[0; 2\\pi[$', '$[0; \\pi]$', '$[-\\pi; \\pi]$', '$\\left[0; \\dfrac{\\pi}{2}\\right]$'],
          correctAnswerIndex: 1,
          explanation: 'La périodicité $2\\pi$ réduit l’étude à $[-\\pi; \\pi]$, puis l’imparité permet de ne l’étudier que sur $[0; \\pi]$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q4',
          type: 'mcq',
          prompt: 'Que vaut le maximum de $f(x) = 2\\sin(x) + \\sin(2x)$ sur $[0; \\pi]$, atteint en $x = \\dfrac{\\pi}{3}$ ?',
          options: ['$\\sqrt{3}$', '$\\dfrac{3\\sqrt{3}}{2}$', '$2$', '$3$'],
          correctAnswerIndex: 1,
          explanation: '$f\\left(\\dfrac{\\pi}{3}\\right) = 2\\left(\\dfrac{\\sqrt{3}}{2}\\right) + \\dfrac{\\sqrt{3}}{2} = \\sqrt{3} + \\dfrac{\\sqrt{3}}{2} = \\dfrac{3\\sqrt{3}}{2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q5',
          type: 'mcq',
          prompt: 'Si $f(x) = 2\\sin(x) + \\sin(2x)$, pourquoi $\\pi$ N’EST-IL PAS une période de $f$ ?',
          options: [
            'Parce que $\\sin(2(x + \\pi)) \\neq \\sin(2x)$',
            'Parce que $f(x + \\pi) = -2\\sin(x) + \\sin(2x) \\neq f(x)$ en général',
            'Parce que $\\pi$ est irrationnel',
            'Parce que $f(\\pi) = 0$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par exemple $f(\\pi/2) = 2$, alors que $f(\\pi/2 + \\pi) = f(3\\pi/2) = -2 \\neq 2$ : $\\pi$ n’est pas période de $f$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q6',
          type: 'mcq',
          prompt: 'Sachant que $f$ est $2\\pi$-périodique et impaire, et que $f(\\pi/3) = \\dfrac{3\\sqrt{3}}{2}$, que vaut $f\\left(-\\dfrac{7\\pi}{3}\\right)$ ?',
          options: ['$\\dfrac{3\\sqrt{3}}{2}$', '$-\\dfrac{3\\sqrt{3}}{2}$', '$0$', '$\\dfrac{\\sqrt{3}}{2}$'],
          correctAnswerIndex: 1,
          explanation: '$-\\dfrac{7\\pi}{3} = -\\dfrac{\\pi}{3} - 2\\pi$, donc par $2\\pi$-périodicité et imparité : $f(-7\\pi/3) = f(-\\pi/3) = -f(\\pi/3) = -\\dfrac{3\\sqrt{3}}{2}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Asymptotes obliques et positions relatives
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04',
      order: 4,
      title: 'Asymptotes obliques et positions relatives',
      summary:
        'Montrer qu’une droite y = ax + b est asymptote oblique à (C_f) et étudier la position de (C_f) par rapport à cette droite.',
      conceptExplanation:
        "Soient $a \\neq 0$ et $b$ deux réels.\n- **Asymptote oblique** : la droite $(D)$ d'équation $y = ax + b$ est asymptote oblique à $(C_f)$ en $+\\infty$ (respectivement en $-\\infty$) lorsque :\n$$\\lim_{x \\to +\\infty} \\bigl[f(x) - (ax + b)\\bigr] = 0 \\quad \\bigl(\\text{resp. en } -\\infty\\bigr)$$\n\n- **Comment trouver $ax + b$ pour une fraction rationnelle $\\dfrac{P(x)}{Q(x)}$** (avec $\\deg P = \\deg Q + 1$) : on effectue une **division euclidienne** ou une **identification** pour écrire $f(x) = ax + b + \\dfrac{R(x)}{Q(x)}$ avec $\\lim_{x\\to\\pm\\infty} \\dfrac{R(x)}{Q(x)} = 0$.\n- **Position relative** : on étudie le signe de la différence $d(x) = f(x) - (ax + b)$ :\n  - Si $d(x) > 0$, $(C_f)$ est **au-dessus** de $(D)$ ;\n  - Si $d(x) < 0$, $(C_f)$ est **au-dessous** de $(D)$ ;\n  - Si $d(x) = 0$, $(C_f)$ et $(D)$ se coupent.",
      keyRule:
        'y = ax + b est asymptote oblique en ±∞ ssi f(x) − (ax + b) → 0 ; le signe de cette même différence donne la position de (C_f) par rapport à (D).',
      formulas: [
        { name: 'Critère d’asymptote oblique', formula: '\\lim_{x\\to\\pm\\infty}[f(x) - (ax + b)] = 0 \\ (a \\neq 0)' },
        { name: 'Position relative', formula: 'f(x) - y_D > 0 \\iff (C_f) \\text{ est au-dessus de } (D)' },
      ],
      workedExample: {
        title: 'Asymptote oblique et position relative (Exercice 8 p. 14)',
        statement:
          'Soit $f(x) = \\dfrac{x^2 - 3x + 3}{x - 2}$ définie sur $\\mathbb{R}\\setminus\\{2\\}$. (1) Écris $f(x)$ sous la forme $ax + b + \\dfrac{c}{x - 2}$. (2) Justifie que $(D): y = x - 1$ est asymptote à $(C_f)$ en $+\\infty$ et $-\\infty$. (3) Étudie la position de $(C_f)$ par rapport à $(D)$.',
        methodSteps: [
          'En divisant $x^2 - 3x + 3$ par $x - 2$ (ou en remarquant $x^2 - 3x + 3 = (x - 1)(x - 2) + 1$), on obtient $f(x) = x - 1 + \\dfrac{1}{x - 2}$, soit $a = 1$, $b = -1$, $c = 1$.',
          'Comme $\\lim_{x\\to\\pm\\infty}[f(x) - (x - 1)] = \\lim_{x\\to\\pm\\infty} \\dfrac{1}{x - 2} = 0$, la droite $(D): y = x - 1$ est asymptote oblique à $(C_f)$ en $+\\infty$ et en $-\\infty$.',
          'Signe de $f(x) - (x - 1) = \\dfrac{1}{x - 2}$ : négatif sur $]-\\infty; 2[$ donc $(C_f)$ est au-dessous de $(D)$ ; positif sur $]2; +\\infty[$ donc $(C_f)$ est au-dessus de $(D)$.',
        ],
        conclusion: '$(D): y = x - 1$ est asymptote ; $(C_f)$ est sous $(D)$ avant $2$ et au-dessus après $2$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Critère d’asymptote oblique',
          stepTitle: 'Vérifier la limite de f(x) − (ax + b)',
          paragraphText:
            'Dire que $(D): y = ax + b$ ($a \\neq 0$) est asymptote oblique à $(C_f)$ en $+\\infty$ ne veut pas seulement dire que $f(x) \\to +\\infty$ : il faut impérativement que l’écart vertical $f(x) - (ax + b)$ tende vers $0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q1',
            type: 'mcq',
            prompt:
              'La fonction $f$ vérifie $f(x) = 2x + 5 + \\dfrac{4}{x - 1}$ sur $\\mathbb{R}\\setminus\\{1\\}$ (Exercice 5). Quelle droite est asymptote oblique à $(C_f)$ en $+\\infty$ et en $-\\infty$ ?',
            options: [
              'La droite d’équation $y = 2x$',
              'La droite d’équation $y = 2x + 5$',
              'La droite d’équation $x = 1$',
              'La droite d’équation $y = 5$',
            ],
            correctAnswerIndex: 1,
            explanation: '$f(x) - (2x + 5) = \\dfrac{4}{x - 1} \\xrightarrow[x\\to\\pm\\infty]{} 0$, donc $y = 2x + 5$ est asymptote oblique en $+\\infty$ et $-\\infty$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Décomposer une fraction rationnelle',
          stepTitle: 'Trouver a, b, c dans (2x² + 3x − 1)/(x − 1)',
          paragraphText:
            'Pour mettre $f(x) = \\dfrac{2x^2 + 3x - 1}{x - 1}$ sous la forme $ax + b + \\dfrac{c}{x - 1}$, réduis au même dénominateur $\\dfrac{(ax + b)(x - 1) + c}{x - 1}$ et identifie les coefficients du numérateur.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q2',
            type: 'mcq',
            prompt:
              'Si $\\dfrac{x^2 - 3x + 3}{x - 2} = ax + b + \\dfrac{c}{x - 2}$ pour tout $x \\neq 2$, quels sont les réels $a$, $b$ et $c$ ?',
            options: [
              '$a = 1, b = -1, c = 1$',
              '$a = 1, b = -3, c = 3$',
              '$a = 1, b = 1, c = 5$',
              '$a = 1, b = -5, c = -7$',
            ],
            correctAnswerIndex: 0,
            explanation: '$(x - 1)(x - 2) + 1 = x^2 - 3x + 2 + 1 = x^2 - 3x + 3$, d’où $a = 1$, $b = -1$, $c = 1$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Signe de f(x) − (ax + b)',
          stepTitle: 'Étudier la position de (C_f) par rapport à son asymptote',
          paragraphText:
            'Dans l’Exercice 11, $f(x) = \\dfrac{x^3 - x^2 + 3x + 5}{x^2 + 3} = x - 1 + \\dfrac{8}{x^2 + 3}$. La différence vaut $\\dfrac{8}{x^2 + 3}$, qui est strictement positive pour tout réel $x$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q3',
            type: 'mcq',
            prompt:
              'Pour $f(x) = x - 1 + \\dfrac{8}{x^2 + 3}$ (Exercice 11), quelle est la position de $(C_f)$ par rapport à $(D): y = x - 1$ ?',
            options: [
              '$(C_f)$ est toujours au-dessous de $(D)$',
              '$(C_f)$ est toujours strictement au-dessus de $(D)$',
              '$(C_f)$ coupe $(D)$ en $x = 1$',
              '$(C_f)$ passe sous $(D)$ pour $x < 0$ et au-dessus pour $x > 0$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour tout $x \\in \\mathbb{R}$, $f(x) - (x - 1) = \\dfrac{8}{x^2 + 3} > 0$, donc $(C_f)$ reste strictement au-dessus de $(D)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Asymptote oblique avec quotient par x',
          stepTitle: 'Vérifier f(x) = (x² − 3x + 3)/(x − 2) avant et après x = 2',
          paragraphText:
            'Lorsqu’un dénominateur change de signe (comme $x - 2$), la courbe traverse d’un côté de l’asymptote à l’autre de part et d’autre de la valeur interdite.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q4',
            type: 'mcq',
            prompt:
              'Pour $f(x) = x - 1 + \\dfrac{1}{x - 2}$ (Exercice 8), où se situe $(C_f)$ par rapport à $(D): y = x - 1$ sur $]-\\infty; 2[$ ?',
            options: [
              '$(C_f)$ est au-dessus de $(D)$',
              '$(C_f)$ est au-dessous de $(D)$',
              '$(C_f)$ et $(D)$ sont confondues',
              '$(C_f)$ coupe $(D)$ en $x = 1$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $x < 2$, $x - 2 < 0$, donc $f(x) - (x - 1) = \\dfrac{1}{x - 2} < 0$ : $(C_f)$ est au-dessous de $(D)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre asymptote oblique et direction asymptotique',
          stepTitle: 'Attention : f(x)/x → a ne suffit pas pour que y = ax soit asymptote !',
          paragraphText:
            'Par exemple, si $f(x) = 2x + 5 + \\dfrac{4}{x - 1}$, on a bien $\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = 2$, mais $f(x) - 2x \\to 5 \\neq 0$ : l’asymptote est $y = 2x + 5$, et non $y = 2x$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q5',
            type: 'mcq',
            prompt: 'Soit $g(x) = 3x - 4 + \\dfrac{2}{x}$. Quelle est la limite de $g(x) - 3x$ quand $x \\to +\\infty$ ?',
            options: ['$0$', '$-4$', '$3$', '$+\\infty$'],
            correctAnswerIndex: 1,
            explanation: '$g(x) - 3x = -4 + \\dfrac{2}{x} \\to -4 \\neq 0$. La droite asymptote est $y = 3x - 4$ (et non $y = 3x$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Tangente parallèle à l’asymptote oblique',
          stepTitle: 'Résoudre f\'(x) = a dans l’Exercice 11',
          paragraphText:
            'Dans l’Exercice 11, $(D): y = x - 1$ a pour coefficient directeur $1$. Une tangente à $(C_f)$ est parallèle à $(D)$ si et seulement si $f\'(x) = 1$, c’est-à-dire $x - 1 + \\dfrac{8}{x^2+3}$ a une dérivée égale à $1$, soit $\\left(\\dfrac{8}{x^2+3}\\right)\' = 0$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q6',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 11, $f(x) = x - 1 + \\dfrac{8}{x^2 + 3}$. En quel point $A$ de $(C_f)$ la tangente est-elle parallèle à $(D): y = x - 1$ ?',
            options: ['$A(0; 5/3)$', '$A(1; 1)$', '$A(-1; 0)$', '$A(2; 9/7)$'],
            correctAnswerIndex: 0,
            explanation:
              '$f\'(x) = 1 - \\dfrac{16x}{(x^2+3)^2}$. Donc $f\'(x) = 1 \\iff x = 0$, et $f(0) = -1 + \\dfrac{8}{3} = \\dfrac{5}{3}$. (À ne pas confondre avec la tangente horizontale en $x = 1$ où $f\'(1) = 0$ !)',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q1',
          type: 'mcq',
          prompt:
            'La fonction $f$ vérifie $f(x) = 2x + 5 + \\dfrac{4}{x - 1}$ sur $\\mathbb{R}\\setminus\\{1\\}$ (Exercice 5). Quelle droite est asymptote oblique à $(C_f)$ en $+\\infty$ et en $-\\infty$ ?',
          options: [
            'La droite d’équation $y = 2x$',
            'La droite d’équation $y = 2x + 5$',
            'La droite d’équation $x = 1$',
            'La droite d’équation $y = 5$',
          ],
          correctAnswerIndex: 1,
          explanation: '$f(x) - (2x + 5) = \\dfrac{4}{x - 1} \\xrightarrow[x\\to\\pm\\infty]{} 0$, donc $y = 2x + 5$ est asymptote oblique en $+\\infty$ et $-\\infty$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q2',
          type: 'mcq',
          prompt:
            'Si $\\dfrac{x^2 - 3x + 3}{x - 2} = ax + b + \\dfrac{c}{x - 2}$ pour tout $x \\neq 2$, quels sont les réels $a$, $b$ et $c$ ?',
          options: [
            '$a = 1, b = -1, c = 1$',
            '$a = 1, b = -3, c = 3$',
            '$a = 1, b = 1, c = 5$',
            '$a = 1, b = -5, c = -7$',
          ],
          correctAnswerIndex: 0,
          explanation: '$(x - 1)(x - 2) + 1 = x^2 - 3x + 2 + 1 = x^2 - 3x + 3$, d’où $a = 1$, $b = -1$, $c = 1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q3',
          type: 'mcq',
          prompt:
            'Pour $f(x) = x - 1 + \\dfrac{8}{x^2 + 3}$ (Exercice 11), quelle est la position de $(C_f)$ par rapport à $(D): y = x - 1$ ?',
          options: [
            '$(C_f)$ est toujours au-dessous de $(D)$',
            '$(C_f)$ est toujours strictement au-dessus de $(D)$',
            '$(C_f)$ coupe $(D)$ en $x = 1$',
            '$(C_f)$ passe sous $(D)$ pour $x < 0$ et au-dessus pour $x > 0$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour tout $x \\in \\mathbb{R}$, $f(x) - (x - 1) = \\dfrac{8}{x^2 + 3} > 0$, donc $(C_f)$ reste strictement au-dessus de $(D)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q4',
          type: 'mcq',
          prompt:
            'Pour $f(x) = x - 1 + \\dfrac{1}{x - 2}$ (Exercice 8), où se situe $(C_f)$ par rapport à $(D): y = x - 1$ sur $]-\\infty; 2[$ ?',
          options: [
            '$(C_f)$ est au-dessus de $(D)$',
            '$(C_f)$ est au-dessous de $(D)$',
            '$(C_f)$ et $(D)$ sont confondues',
            '$(C_f)$ coupe $(D)$ en $x = 1$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $x < 2$, $x - 2 < 0$, donc $f(x) - (x - 1) = \\dfrac{1}{x - 2} < 0$ : $(C_f)$ est au-dessous de $(D)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q5',
          type: 'mcq',
          prompt: 'Soit $g(x) = 3x - 4 + \\dfrac{2}{x}$. Quelle est la limite de $g(x) - 3x$ quand $x \\to +\\infty$ ?',
          options: ['$0$', '$-4$', '$3$', '$+\\infty$'],
          correctAnswerIndex: 1,
          explanation: '$g(x) - 3x = -4 + \\dfrac{2}{x} \\to -4 \\neq 0$. La droite asymptote est $y = 3x - 4$ (et non $y = 3x$).',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q6',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 11, $f(x) = x - 1 + \\dfrac{8}{x^2 + 3}$. En quel point $A$ de $(C_f)$ la tangente est-elle parallèle à $(D): y = x - 1$ ?',
          options: ['$A(0; 5/3)$', '$A(1; 1)$', '$A(-1; 0)$', '$A(2; 9/7)$'],
          correctAnswerIndex: 0,
          explanation:
            '$f\'(x) = 1 - \\dfrac{16x}{(x^2+3)^2}$. Donc $f\'(x) = 1 \\iff x = 0$, et $f(0) = -1 + \\dfrac{8}{3} = \\dfrac{5}{3}$. (À ne pas confondre avec la tangente horizontale en $x = 1$ où $f\'(1) = 0$ !)',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Plan complet d'étude d'une fonction et tangentes
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05',
      order: 5,
      title: 'Méthodologie complète d’étude d’une fonction',
      summary:
        'Enchaîner ensemble de définition, symétries, limites, dérivée, variations, tangentes et tracé de la courbe.',
      conceptExplanation:
        "Pour étudier et représenter graphiquement une fonction $f$, on suit un plan structuré en 6 étapes :\n1. **Ensemble de définition $D_f$** et recherche d'éventuelles **symétries** (parité, axe, centre) ou **périodicité** ;\n2. **Limites** aux bornes de $D_f$ et interprétation graphique (**asymptotes** verticales, horizontales ou obliques) ;\n3. **Dérivée $f'(x)$**, étude du **signe de $f'(x)$** et **sens de variation** ;\n4. **Tableau de variation** complet (valeurs exactes aux extrema et limites aux bornes) ;\n5. **Tangentes particulières** ($y = f'(x_0)(x - x_0) + f(x_0)$), **points remarquables** (intersections avec les axes) et **positions relatives** ;\n6. **Construction** dans le repère en respectant les unités graphiques.",
      keyRule:
        'Suis toujours le fil conducteur : D_f → symétries → limites/asymptotes → signe de f\' → tableau de variation → tangentes → tracé.',
      formulas: [
        { name: 'Tangente en x₀', formula: 'y = f\'(x_0)(x - x_0) + f(x_0)' },
        { name: 'Factorisation clé (Exercice 11)', formula: 'x^4 + 6x^2 - 16x + 9 = (x - 1)^2(x^2 + 2x + 9)' },
      ],
      workedExample: {
        title: 'Étudier un polynôme et sa tangente au point d’inflexion (Exercice 6 p. 11-12)',
        statement:
          'Soit $f(x) = x^3 - 3x - 1$. Dresse le tableau de variation de $f$, détermine la tangente $(T)$ au point d’abscisse $0$, et étudie la position de $(C)$ par rapport à $(T)$.',
        methodSteps: [
          '$D_f = \\mathbb{R}$, $\\lim_{-\\infty} f = -\\infty$, $\\lim_{+\\infty} f = +\\infty$.',
          '$f\'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$ s’annule en $-1$ et $1$. $f$ est croissante sur $]-\\infty; -1]$ et $[1; +\\infty[$, décroissante sur $[-1; 1]$, avec $f(-1) = 1$ (maximum local) et $f(1) = -3$ (minimum local).',
          'En $x_0 = 0$ : $f(0) = -1$ et $f\'(0) = -3$, donc $(T): y = -3(x - 0) - 1 = -3x - 1$.',
          '$f(x) - (-3x - 1) = x^3$. Sur $]-\\infty; 0]$, $x^3 \\le 0$ donc $(C)$ est au-dessous de $(T)$ ; sur $[0; +\\infty[$, $x^3 \\ge 0$ donc $(C)$ est au-dessus de $(T)$.',
        ],
        conclusion: 'Extrema locaux $1$ en $-1$ et $-3$ en $1$ ; $(T): y = -3x - 1$ traverse $(C)$ en $(0; -1)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Ordre logique d’étude',
          stepTitle: 'Identifier les étapes incontournables avant le tracé',
          paragraphText:
            'On ne trace jamais une courbe point par point à l’aveugle : les asymptotes, les extrema du tableau de variation et les tangentes notables donnent immédiatement l’ossature géométrique de $(C_f)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q1',
            type: 'mcq',
            prompt:
              'Dans le tableau de variation de $f(x) = \\dfrac{x^2 - 3x + 3}{x - 2}$ (Exercice 8), où $f\'(x) = \\dfrac{x^2 - 4x + 3}{(x - 2)^2}$, quels sont le maximum local et le minimum local ?',
            options: [
              'Maximum local $3$ en $x=3$ et minimum local $-1$ en $x=1$',
              'Maximum local $-1$ en $x=1$ et minimum local $3$ en $x=3$',
              'Maximum global $3$ et minimum global $-1$',
              'Aucun extremum local',
            ],
            correctAnswerIndex: 1,
            explanation:
              '$f\'(x) > 0$ sur $]-\\infty; 1[$ et $f\'(x) < 0$ sur $]1; 2[$, donc $f(1) = -1$ est un maximum local. $f\'(x) < 0$ sur $]2; 3[$ et $f\'(x) > 0$ sur $]3; +\\infty[$, donc $f(3) = 3$ est un minimum local !',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Équation de la tangente et position relative',
          stepTitle: 'Étudier (C) et (T) pour f(x) = x³ − 3x − 1',
          paragraphText:
            'En un point d’abscisse $x_0$, la tangente a pour équation $y = f\'(x_0)(x - x_0) + f(x_0)$. Pour comparer $(C)$ et $(T)$, on factorise toujours la différence $f(x) - y_T$ par $(x - x_0)$ (en fait au moins $(x - x_0)^2$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q2',
            type: 'mcq',
            prompt:
              'Pour $f(x) = x^3 - 3x - 1$, la tangente $(T)$ au point d’abscisse $0$ a pour équation $y = -3x - 1$. Quelle est la position de $(C)$ par rapport à $(T)$ ?',
            options: [
              '$(C)$ est toujours au-dessus de $(T)$',
              '$(C)$ est toujours au-dessous de $(T)$',
              '$(C)$ est au-dessous de $(T)$ sur $]-\\infty; 0]$ et au-dessus sur $[0; +\\infty[$',
              '$(C)$ est au-dessus de $(T)$ sur $]-\\infty; 0]$ et au-dessous sur $[0; +\\infty[$',
            ],
            correctAnswerIndex: 2,
            explanation: '$f(x) - (-3x - 1) = x^3$, qui est négatif pour $x \\le 0$ et positif pour $x \\ge 0$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Signe d’un polynôme de degré 4 factorisé',
          stepTitle: 'Dérivée toujours positive ou nulle (Exercice 11)',
          paragraphText:
            'Dans l’Exercice 11, $f\'(x) = \\dfrac{p(x)}{(x^2 + 3)^2}$ avec $p(x) = (x - 1)^2(x^2 + 2x + 9)$. Le discriminant de $x^2 + 2x + 9$ vaut $\\Delta = 4 - 36 = -32 < 0$, donc $x^2 + 2x + 9 > 0$ sur $\\mathbb{R}$, et $(x - 1)^2 \\ge 0$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q3',
            type: 'mcq',
            prompt:
              'Sachant que $p(x) = (x - 1)^2(x^2 + 2x + 9)$ et $f\'(x) = \\dfrac{p(x)}{(x^2 + 3)^2}$ (Exercice 11), que peut-on conclure sur les variations de $f$ sur $\\mathbb{R}$ ?',
            options: [
              '$f$ est croissante sur $]-\\infty; 1]$ et décroissante sur $[1; +\\infty[$',
              '$f$ est strictement croissante sur $\\mathbb{R}$ tout entier (avec $f\'(1) = 0$)',
              '$f$ est strictement décroissante sur $\\mathbb{R}$',
              '$f$ change de sens de variation en $x = -1$',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Comme $(x - 1)^2 \\ge 0$ et $x^2 + 2x + 9 > 0$ ($\\Delta = -32 < 0$), $f\'(x) \\ge 0$ sur $\\mathbb{R}$ et ne s’annule qu’en un seul point ($x = 1$) : $f$ est strictement croissante sur $\\mathbb{R}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Tangente de l’Exercice 11 en x = −1',
          stepTitle: 'Vérifier f(x) − (2x + 2) = −(x + 1)³ / (x² + 3)',
          paragraphText:
            'En $x = -1$ dans l’Exercice 11, $f(-1) = \\dfrac{-1 - 1 - 3 + 5}{4} = 0$ et $f\'(-1) = \\dfrac{p(-1)}{16} = \\dfrac{32}{16} = 2$, d’où $(T): y = 2x + 2$. Puis $f(x) - (2x + 2) = -\\dfrac{(x + 1)^3}{x^2 + 3}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q4',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 11, on a $f(x) - (2x + 2) = -\\dfrac{(x + 1)^3}{x^2 + 3}$. Que se passe-t-il au point d’abscisse $x = -1$ ?',
            options: [
              '$(C)$ reste toujours au-dessus de $(T)$',
              '$(C)$ est au-dessus de $(T)$ pour $x < -1$ et au-dessous pour $x > -1$',
              '$(C)$ est au-dessous de $(T)$ pour $x < -1$ et au-dessus pour $x > -1$',
              '$(T)$ coupe $(C)$ uniquement à l’infini',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Pour $x < -1$, $(x + 1)^3 < 0$ donc $-\\dfrac{(x + 1)^3}{x^2 + 3} > 0$ ($(C)$ est au-dessus de $(T)$). Pour $x > -1$, la différence est négative ($(C)$ est au-dessous de $(T)$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre un extremum local et un extremum global',
          stepTitle: 'Comment le minimum local (3) peut-il être plus grand que le maximum local (−1) ?',
          paragraphText:
            'Dans l’Exercice 8, $f(1) = -1$ est un maximum **local** (autour de $x = 1$) et $f(3) = 3$ est un minimum **local** (autour de $x = 3$). Ce n’est pas contradictoire car il y a une asymptote verticale en $x = 2$ entre les deux branches !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q5',
            type: 'mcq',
            prompt:
              'Pourquoi le minimum local $f(3) = 3$ de $f(x) = \\dfrac{x^2 - 3x + 3}{x - 2}$ peut-il être supérieur à son maximum local $f(1) = -1$ ?',
            options: [
              'C’est impossible : il y a une erreur de dérivée',
              'Parce que $f$ n’est pas continue sur $[1; 3]$ à cause de la discontinuité (asymptote verticale) en $x = 2$',
              'Parce que $f$ est décroissante partout',
              'Parce que $3 > 1$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Sur la branche $]-\\infty; 2[$, $f$ reste en dessous de $-1$, tandis que sur la branche $]2; +\\infty[$, $f$ reste au-dessus de $3$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Signe d’une fonction homographique et monotonie',
          stepTitle: 'Vérifier f(x) = (2x − 1)/(x + 1) sur ℝ\\{−1}',
          paragraphText:
            'Pour $f(x) = \\dfrac{2x - 1}{x + 1}$ (Exercice 7), $f\'(x) = \\dfrac{3}{(x + 1)^2} > 0$ sur chacun des deux intervalles $]-\\infty; -1[$ et $]-1; +\\infty[$. Il faut bien séparer ces deux intervalles par une double barre dans le tableau de variation.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q6',
            type: 'mcq',
            prompt: 'Soit $f(x) = \\dfrac{2x - 1}{x + 1}$ sur $\\mathbb{R}\\setminus\\{-1\\}$. Quelles sont ses deux asymptotes ?',
            options: [
              '$x = -1$ et $y = 2$',
              '$x = 1$ et $y = 2$',
              '$x = -1$ et $y = -1$',
              '$x = 2$ et $y = -1$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\lim_{\\pm\\infty} f(x) = 2$ donne l’asymptote horizontale $y = 2$, et $\\lim_{-1^\\pm} f(x) = \\mp\\infty$ donne l’asymptote verticale $x = -1$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q1',
          type: 'mcq',
          prompt:
            'Dans le tableau de variation de $f(x) = \\dfrac{x^2 - 3x + 3}{x - 2}$ (Exercice 8), où $f\'(x) = \\dfrac{x^2 - 4x + 3}{(x - 2)^2}$, quels sont le maximum local et le minimum local ?',
          options: [
            'Maximum local $3$ en $x=3$ et minimum local $-1$ en $x=1$',
            'Maximum local $-1$ en $x=1$ et minimum local $3$ en $x=3$',
            'Maximum global $3$ et minimum global $-1$',
            'Aucun extremum local',
          ],
          correctAnswerIndex: 1,
          explanation:
            '$f\'(x) > 0$ sur $]-\\infty; 1[$ et $f\'(x) < 0$ sur $]1; 2[$, donc $f(1) = -1$ est un maximum local. $f\'(x) < 0$ sur $]2; 3[$ et $f\'(x) > 0$ sur $]3; +\\infty[$, donc $f(3) = 3$ est un minimum local !',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q2',
          type: 'mcq',
          prompt:
            'Pour $f(x) = x^3 - 3x - 1$, la tangente $(T)$ au point d’abscisse $0$ a pour équation $y = -3x - 1$. Quelle est la position de $(C)$ par rapport à $(T)$ ?',
          options: [
            '$(C)$ est toujours au-dessus de $(T)$',
            '$(C)$ est toujours au-dessous de $(T)$',
            '$(C)$ est au-dessous de $(T)$ sur $]-\\infty; 0]$ et au-dessus sur $[0; +\\infty[$',
            '$(C)$ est au-dessus de $(T)$ sur $]-\\infty; 0]$ et au-dessous sur $[0; +\\infty[$',
          ],
          correctAnswerIndex: 2,
          explanation: '$f(x) - (-3x - 1) = x^3$, qui est négatif pour $x \\le 0$ et positif pour $x \\ge 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q3',
          type: 'mcq',
          prompt:
            'Sachant que $p(x) = (x - 1)^2(x^2 + 2x + 9)$ et $f\'(x) = \\dfrac{p(x)}{(x^2 + 3)^2}$ (Exercice 11), que peut-on conclure sur les variations de $f$ sur $\\mathbb{R}$ ?',
          options: [
            '$f$ est croissante sur $]-\\infty; 1]$ et décroissante sur $[1; +\\infty[$',
            '$f$ est strictement croissante sur $\\mathbb{R}$ tout entier (avec $f\'(1) = 0$)',
            '$f$ est strictement décroissante sur $\\mathbb{R}$',
            '$f$ change de sens de variation en $x = -1$',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Comme $(x - 1)^2 \\ge 0$ et $x^2 + 2x + 9 > 0$ ($\\Delta = -32 < 0$), $f\'(x) \\ge 0$ sur $\\mathbb{R}$ et ne s’annule qu’en un seul point ($x = 1$) : $f$ est strictement croissante sur $\\mathbb{R}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q4',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 11, on a $f(x) - (2x + 2) = -\\dfrac{(x + 1)^3}{x^2 + 3}$. Que se passe-t-il au point d’abscisse $x = -1$ ?',
          options: [
            '$(C)$ reste toujours au-dessus de $(T)$',
            '$(C)$ est au-dessus de $(T)$ pour $x < -1$ et au-dessous pour $x > -1$',
            '$(C)$ est au-dessous de $(T)$ pour $x < -1$ et au-dessus pour $x > -1$',
            '$(T)$ coupe $(C)$ uniquement à l’infini',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Pour $x < -1$, $(x + 1)^3 < 0$ donc $-\\dfrac{(x + 1)^3}{x^2 + 3} > 0$ ($(C)$ est au-dessus de $(T)$). Pour $x > -1$, la différence est négative ($(C)$ est au-dessous de $(T)$).',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q5',
          type: 'mcq',
          prompt:
            'Pourquoi le minimum local $f(3) = 3$ de $f(x) = \\dfrac{x^2 - 3x + 3}{x - 2}$ peut-il être supérieur à son maximum local $f(1) = -1$ ?',
          options: [
            'C’est impossible : il y a une erreur de dérivée',
            'Parce que $f$ n’est pas continue sur $[1; 3]$ à cause de la discontinuité (asymptote verticale) en $x = 2$',
            'Parce que $f$ est décroissante partout',
            'Parce que $3 > 1$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Sur la branche $]-\\infty; 2[$, $f$ reste en dessous de $-1$, tandis que sur la branche $]2; +\\infty[$, $f$ reste au-dessus de $3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q6',
          type: 'mcq',
          prompt: 'Soit $f(x) = \\dfrac{2x - 1}{x + 1}$ sur $\\mathbb{R}\\setminus\\{-1\\}$. Quelles sont ses deux asymptotes ?',
          options: [
            '$x = -1$ et $y = 2$',
            '$x = 1$ et $y = 2$',
            '$x = -1$ et $y = -1$',
            '$x = 2$ et $y = -1$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\lim_{\\pm\\infty} f(x) = 2$ donne l’asymptote horizontale $y = 2$, et $\\lim_{-1^\\pm} f(x) = \\mp\\infty$ donne l’asymptote verticale $x = -1$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Problèmes d'optimisation (situation complexe et bénéfice)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06',
      order: 6,
      title: 'Optimisation par étude de fonction',
      summary:
        'Modéliser un coût ou un bénéfice sur un intervalle borné et trouver le minimum ou le maximum grâce à la dérivée.',
      conceptExplanation:
        "En économie ou en géométrie, on modélise souvent une grandeur à optimiser (coût $U(x)$, bénéfice $B(x)$) sur un intervalle borné $[m; M]$ imposé par les contraintes concrètes.\n\nMéthode de résolution :\n1. Identifier la fonction et son **domaine de contrainte** $[m; M]$ ;\n2. Dériver la fonction et résoudre $f'(x) = 0$ en ne gardant que les valeurs appartenant à $[m; M]$ ;\n3. Dresser le **tableau de variation restreint à $[m; M]$** ;\n4. Conclure en précisant **à la fois** la valeur optimale (minimum ou maximum, avec son unité en F CFA) **et** la quantité $x$ où elle est atteinte.",
      keyRule:
        'Sur un intervalle concret [m ; M], élimine les racines de f\'(x) situées hors de [m ; M] et vérifie s’il s’agit d’un minimum ou d’un maximum.',
      formulas: [
        { name: 'Coût des ampoules', formula: 'U(x) = x - 10 + \\frac{900}{x}, \\quad U\'(x) = \\frac{(x - 30)(x + 30)}{x^2}' },
        { name: 'Bénéfice jus de fruits (Ex. 10)', formula: 'B(x) = -x^2 + 130x - 4125, \\quad B\'(x) = -2x + 130' },
      ],
      workedExample: {
        title: 'Minimiser le coût de production d’ampoules (Situation complexe p. 8-9)',
        statement:
          'Une entreprise fabrique chaque jour $x \\in [10; 100]$ ampoules. Le coût de production est modélisé par $U(x) = x - 10 + \\dfrac{900}{x}$ (en F CFA). Quel nombre d’ampoules faut-il fabriquer pour minimiser ce coût ?',
        methodSteps: [
          'Sur $[10; 100]$, $U$ est dérivable et $U\'(x) = 1 - \\dfrac{900}{x^2} = \\dfrac{x^2 - 900}{x^2} = \\dfrac{(x - 30)(x + 30)}{x^2}$.',
          'Comme $x^2 > 0$ et $x + 30 > 0$ sur $[10; 100]$ (la racine $-30$ est hors domaine), $U\'(x)$ a le signe de $x - 30$ : négatif sur $[10; 30[$, nul en $30$, positif sur $]30; 100]$.',
          'Donc $U$ décroît sur $[10; 30]$ puis croît sur $[30; 100]$ : son minimum est atteint en $x = 30$ et vaut $U(30) = 30 - 10 + \\dfrac{900}{30} = 50\\text{ F CFA}$.',
        ],
        conclusion: 'Il faut fabriquer $30$ ampoules par jour pour un coût minimal de $50\\text{ F CFA}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Dériver une fonction coût rationnelle',
          stepTitle: 'Calculer U\'(x) pour U(x) = x − 10 + 900/x',
          paragraphText:
            'Rappelle-toi que $\\left(\\dfrac{k}{x}\\right)\' = -\\dfrac{k}{x^2}$. En réduisant au même dénominateur $x^2$, on obtient une différence de deux carrés $x^2 - 900 = (x - 30)(x + 30)$ très facile à étudier.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q1',
            type: 'mcq',
            prompt: 'Quelle est l’expression factorisée de la dérivée $U\'(x)$ pour $U(x) = x - 10 + \\dfrac{900}{x}$ ?',
            options: [
              '$\\dfrac{(x - 30)^2}{x^2}$',
              '$\\dfrac{(x - 30)(x + 30)}{x^2}$',
              '$1 + \\dfrac{900}{x^2}$',
              '$\\dfrac{x - 900}{x^2}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$U\'(x) = 1 - \\dfrac{900}{x^2} = \\dfrac{x^2 - 30^2}{x^2} = \\dfrac{(x - 30)(x + 30)}{x^2}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Conclure sur l’intervalle [10 ; 100]',
          stepTitle: 'Trouver la quantité optimale et la valeur du minimum',
          paragraphText:
            'Sur $[10; 100]$, $U\'(x) \\le 0$ avant $30$ et $U\'(x) \\ge 0$ après $30$ : la fonction descend puis remonte, formant un minimum absolu sur l’intervalle en $x = 30$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q2',
            type: 'mcq',
            prompt: 'Pour quel nombre d’ampoules le coût $U(x)$ est-il minimal sur $[10; 100]$, et combien vaut ce minimum ?',
            options: [
              '$10$ ampoules pour un coût de $90\\text{ F CFA}$',
              '$30$ ampoules pour un coût de $50\\text{ F CFA}$',
              '$50$ ampoules pour un coût de $30\\text{ F CFA}$',
              '$100$ ampoules pour un coût de $99\\text{ F CFA}$',
            ],
            correctAnswerIndex: 1,
            explanation: '$U\'(30) = 0$ avec changement de signe $-$ vers $+$, et $U(30) = 30 - 10 + 30 = 50\\text{ F CFA}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Optimiser le profit des jus de fruits (Exercice 10)',
          stepTitle: 'Passer du coût unitaire V(x) à B(x) = 100 − V(x)',
          paragraphText:
            'Dans la situation d’apprentissage et l’Exercice 10, chaque jus est vendu $100\\text{ F CFA}$ et le coût unitaire vaut $V(x) = x^2 - 130x + 4225$ pour $x \\le 100$. La marge $B(x) = 100 - V(x)$ vaut donc $-x^2 + 130x - 4125$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q3',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 10, on étudie $B(x) = -x^2 + 130x - 4125$ sur $[0; 100]$. Pour quelle quantité $x$ la fonction $B$ atteint-elle son maximum ?',
            options: ['$x = 50$', '$x = 65$', '$x = 100$', '$x = 130$'],
            correctAnswerIndex: 1,
            explanation: '$B\'(x) = -2x + 130 = 0 \\iff x = 65$. Comme $B\'(x) > 0$ avant $65$ et $< 0$ après, $B$ est maximale en $x = 65$ jus.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer la valeur maximale de B(x)',
          stepTitle: 'Évaluer B(65) sans erreur de calcul',
          paragraphText:
            'Pour calculer $B(65) = -65^2 + 130 \\times 65 - 4125$, remarque que $130 = 2 \\times 65$ : ainsi $-65^2 + 2 \\times 65^2 = +65^2 = 4225$, et $4225 - 4125 = 100$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q4',
            type: 'mcq',
            prompt: 'Que vaut $B(65)$ pour $B(x) = -x^2 + 130x - 4125$ ?',
            options: ['$65\\text{ F CFA}$', '$100\\text{ F CFA}$', '$130\\text{ F CFA}$', '$25\\text{ F CFA}$'],
            correctAnswerIndex: 1,
            explanation: '$-65^2 + 130 \\times 65 - 4125 = 4225 - 4125 = 100\\text{ F CFA}$. (On retrouve aussi que $V(65) = (65 - 65)^2 + 0 = 0$.)',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Racine de f\'(x) hors du domaine de contrainte',
          stepTitle: 'Ne garde jamais une solution négative pour un nombre d’objets !',
          paragraphText:
            'L’équation $(x - 30)(x + 30) = 0$ possède deux racines : $30$ et $-30$. Un nombre d’ampoules $x$ dans $[10; 100]$ ne peut pas valoir $-30$ : il ne faut pas mettre $-30$ dans le tableau de variation restreint à $[10; 100]$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q5',
            type: 'mcq',
            prompt:
              'Dans le tableau de variation de $U(x)$ sur $[10; 100]$ (Situation complexe), pourquoi la valeur $x = -30$ n’apparaît-elle pas ?',
            options: [
              'Parce que $U\'(-30) \\neq 0$',
              'Parce que $-30 \\notin [10; 100]$ (une quantité produite ne peut être négative)',
              'Parce que $-30$ est une valeur interdite',
              'Parce que $U(-30) = 0$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On étudie $U$ uniquement sur l’intervalle des contraintes $[10; 100]$, qui ne contient pas $-30$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier le coût maximal aux bornes de [10 ; 100]',
          stepTitle: 'Comparer U(10) et U(100) pour trouver le pire coût',
          paragraphText:
            'Sur $[10; 100]$, $U$ décroît jusqu’en $x = 30$ puis croît jusqu’en $x = 100$. La plus grande valeur possible du coût se trouve donc forcément à l’une des deux bornes $x = 10$ ou $x = 100$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q6',
            type: 'mcq',
            prompt: 'Sur $[10; 100]$, quelle valeur atteint le coût $U(x) = x - 10 + \\dfrac{900}{x}$ aux bornes $x = 10$ et $x = 100$ ?',
            options: [
              '$U(10) = 90$ et $U(100) = 99$',
              '$U(10) = 100$ et $U(100) = 99$',
              '$U(10) = 90$ et $U(100) = 90$',
              '$U(10) = 50$ et $U(100) = 100$',
            ],
            correctAnswerIndex: 0,
            explanation: '$U(10) = 10 - 10 + \\dfrac{900}{10} = 90\\text{ F CFA}$ et $U(100) = 100 - 10 + \\dfrac{900}{100} = 99\\text{ F CFA}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q1',
          type: 'mcq',
          prompt: 'Quelle est l’expression factorisée de la dérivée $U\'(x)$ pour $U(x) = x - 10 + \\dfrac{900}{x}$ ?',
          options: [
            '$\\dfrac{(x - 30)^2}{x^2}$',
            '$\\dfrac{(x - 30)(x + 30)}{x^2}$',
            '$1 + \\dfrac{900}{x^2}$',
            '$\\dfrac{x - 900}{x^2}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$U\'(x) = 1 - \\dfrac{900}{x^2} = \\dfrac{x^2 - 30^2}{x^2} = \\dfrac{(x - 30)(x + 30)}{x^2}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q2',
          type: 'mcq',
          prompt: 'Pour quel nombre d’ampoules le coût $U(x)$ est-il minimal sur $[10; 100]$, et combien vaut ce minimum ?',
          options: [
            '$10$ ampoules pour un coût de $90\\text{ F CFA}$',
            '$30$ ampoules pour un coût de $50\\text{ F CFA}$',
            '$50$ ampoules pour un coût de $30\\text{ F CFA}$',
            '$100$ ampoules pour un coût de $99\\text{ F CFA}$',
          ],
          correctAnswerIndex: 1,
          explanation: '$U\'(30) = 0$ avec changement de signe $-$ vers $+$, et $U(30) = 30 - 10 + 30 = 50\\text{ F CFA}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q3',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 10, on étudie $B(x) = -x^2 + 130x - 4125$ sur $[0; 100]$. Pour quelle quantité $x$ la fonction $B$ atteint-elle son maximum ?',
          options: ['$x = 50$', '$x = 65$', '$x = 100$', '$x = 130$'],
          correctAnswerIndex: 1,
          explanation: '$B\'(x) = -2x + 130 = 0 \\iff x = 65$. Comme $B\'(x) > 0$ avant $65$ et $< 0$ après, $B$ est maximale en $x = 65$ jus.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q4',
          type: 'mcq',
          prompt: 'Que vaut $B(65)$ pour $B(x) = -x^2 + 130x - 4125$ ?',
          options: ['$65\\text{ F CFA}$', '$100\\text{ F CFA}$', '$130\\text{ F CFA}$', '$25\\text{ F CFA}$'],
          correctAnswerIndex: 1,
          explanation: '$-65^2 + 130 \\times 65 - 4125 = 4225 - 4125 = 100\\text{ F CFA}$. (On retrouve aussi que $V(65) = (65 - 65)^2 + 0 = 0$.)',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q5',
          type: 'mcq',
          prompt:
            'Dans le tableau de variation de $U(x)$ sur $[10; 100]$ (Situation complexe), pourquoi la valeur $x = -30$ n’apparaît-elle pas ?',
          options: [
            'Parce que $U\'(-30) \\neq 0$',
            'Parce que $-30 \\notin [10; 100]$ (une quantité produite ne peut être négative)',
            'Parce que $-30$ est une valeur interdite',
            'Parce que $U(-30) = 0$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On étudie $U$ uniquement sur l’intervalle des contraintes $[10; 100]$, qui ne contient pas $-30$.',
        },
        {
          id: 'premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q6',
          type: 'mcq',
          prompt: 'Sur $[10; 100]$, quelle valeur atteint le coût $U(x) = x - 10 + \\dfrac{900}{x}$ aux bornes $x = 10$ et $x = 100$ ?',
          options: [
            '$U(10) = 90$ et $U(100) = 99$',
            '$U(10) = 100$ et $U(100) = 99$',
            '$U(10) = 90$ et $U(100) = 90$',
            '$U(10) = 50$ et $U(100) = 100$',
          ],
          correctAnswerIndex: 0,
          explanation: '$U(10) = 10 - 10 + \\dfrac{900}{10} = 90\\text{ F CFA}$ et $U(100) = 100 - 10 + \\dfrac{900}{100} = 99\\text{ F CFA}$.',
        },
      ],
    },
  ],
};

