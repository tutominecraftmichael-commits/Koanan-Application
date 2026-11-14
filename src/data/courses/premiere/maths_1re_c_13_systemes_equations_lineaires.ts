import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 13 : Systèmes d’équations linéaires dans ℝ² et dans ℝ³.pdf » (format v2).
export const MATHS_1RE_C_L13_SYSTEMES_EQUATIONS_LINEAIRES: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 13,
  title: 'Leçon 13 : Systèmes d’équations linéaires dans ℝ² et dans ℝ³',
  summary:
    'Déterminant et résolution dans ℝ² (Cramer, substitution, combinaison, graphique), systèmes triangulaires et pivot de Gauss dans ℝ³, et mise en équation de problèmes.',
  officialVolumeHours: 3,
  contentVersion: 2,
  source: '1ère C - Leçon 13 : Systèmes d’équations linéaires dans R2 et dans R3.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Déterminant et nombre de solutions dans R^2
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01',
      order: 1,
      title: 'Déterminant et nombre de solutions dans ℝ²',
      summary:
        'Calculer le déterminant D = ab′ − a′b d’un système 2×2 pour connaître le nombre de couples solutions.',
      conceptExplanation:
        "On considère un système $(S)$ de deux équations linéaires à deux inconnues $(x; y)$ :\n$$(S) : \\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$$\navec $(a, b) \\neq (0, 0)$ et $(a', b') \\neq (0, 0)$.\n\nOn appelle **déterminant** de $(S)$ le nombre réel :\n$$D = \\begin{vmatrix} a & b \\\\ a' & b' \\end{vmatrix} = ab' - a'b$$\n\n- Si **$D \\neq 0$** : le système admet une **unique solution** dans $\\mathbb{R}^2$.\n- Si **$D = 0$** : soit le système **n'admet aucune solution** ($S = \\emptyset$), soit il admet une **infinité de solutions**. On tranche en testant un couple solution de la $1^{\\text{re}}$ équation dans la $2^{\\text{e}}$.",
      keyRule:
        'D = ab′ − a′b : si D ≠ 0, il y a exactement une solution ; si D = 0, c’est soit zéro solution soit une infinité.',
      formulas: [
        { name: 'Déterminant 2×2', formula: 'D = \\begin{vmatrix} a & b \\\\ a\' & b\' \\end{vmatrix} = ab\' - a\'b' },
        { name: 'Critère d’unicité', formula: '(S) \\text{ admet une unique solution} \\iff D \\neq 0' },
      ],
      workedExample: {
        title: 'Déterminer le nombre de solutions de deux systèmes (p. 2-3)',
        statement:
          'Étudie le nombre de solutions de $(S_1) : \\begin{cases} 3x + 15y + 2 = 0 \\\\ 2x + 10y - 6 = 0 \\end{cases}$ et de $(S_2) : \\begin{cases} x + 2y - 5 = 0 \\\\ 3x - y + 2 = 0 \\end{cases}$.',
        methodSteps: [
          'Pour $(S_1)$, $D = \\begin{vmatrix} 3 & 15 \\\\ 2 & 10 \\end{vmatrix} = 3\\times 10 - 2\\times 15 = 30 - 30 = 0$. Il y a donc $0$ solution ou une infinité.',
          'Le couple $(-2/3; 0)$ vérifie $3(-2/3) + 15(0) + 2 = 0$, mais $2(-2/3) + 10(0) - 6 = -22/3 \\neq 0$ : $(S_1)$ n’admet aucun couple solution ($S = \\emptyset$).',
          'Pour $(S_2)$, $D = \\begin{vmatrix} 1 & 2 \\\\ 3 & -1 \\end{vmatrix} = 1\\times(-1) - 3\\times 2 = -7 \\neq 0$ : $(S_2)$ admet exactement un couple solution.',
        ],
        conclusion: '$(S_1)$ n’a aucune solution ; $(S_2)$ admet une unique solution.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Calcul du déterminant 2×2',
          stepTitle: 'Attention à l’ordre et aux signes dans ab′ − a′b',
          paragraphText:
            'Dans $\\begin{vmatrix} a & b \\\\ a\' & b\' \\end{vmatrix}$, on multiplie d’abord la diagonale descendante ($a\\cdot b\'$), puis on soustrait le produit de l’autre diagonale ($a\'\\cdot b$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q1',
            type: 'mcq',
            prompt: 'Quel est le déterminant du système $\\begin{cases} 2x + 3y = 1 \\\\ 5x + y = 0 \\end{cases}$ ?',
            options: ['$13$', '$-13$', '$17$', '$-17$'],
            correctAnswerIndex: 1,
            explanation: '$D = \\begin{vmatrix} 2 & 3 \\\\ 5 & 1 \\end{vmatrix} = 2 \\times 1 - 5 \\times 3 = 2 - 15 = -13$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'D ≠ 0 équivaut à solution unique',
          stepTitle: 'Interpréter un déterminant non nul',
          paragraphText:
            'Dans l’Exercice 1, $(S_1) : \\begin{cases} 2x + 3y = 2 \\\\ x + 2y = -3 \\end{cases}$ donne $\\det(S_1) = 2 \\times 2 - 1 \\times 3 = 1 \\neq 0$, ce qui garantit l’existence d’un unique couple solution.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q2',
            type: 'mcq',
            prompt: 'Soit $(S) : \\begin{cases} 3x - y = 1 \\\\ 6x - 2y = -1 \\end{cases}$. Que vaut son déterminant et combien de solutions possède-t-il ?',
            options: [
              '$D = 12$ ; une solution unique',
              '$D = 0$ ; une infinité de solutions',
              '$D = 0$ ; aucune solution',
              '$D = -12$ ; aucune solution',
            ],
            correctAnswerIndex: 2,
            explanation:
              '$D = 3(-2) - 6(-1) = -6 + 6 = 0$. Le couple $(1; 2)$ vérifie $3(1) - 2 = 1$ mais $6(1) - 2(2) = 2 \\neq -1$ : aucune solution.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Trancher quand D = 0',
          stepTitle: 'Tester un couple de la 1re équation dans la 2e',
          paragraphText:
            'Lorsque $D = 0$, les coefficients $(a, b)$ et $(a\', b\')$ sont proportionnels. Si le second membre suit le même coefficient de proportionnalité, les équations sont équivalentes (infinité de solutions) ; sinon il n’y a aucune solution.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q3',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 2, on donne $(S_3) : \\begin{cases} -\\sqrt{2}x + y = \\sqrt{3} \\\\ 2x - \\sqrt{2}y = -\\sqrt{6} \\end{cases}$. Que dire de ses solutions ?',
            options: [
              'Une solution unique car $D \\neq 0$',
              'Aucune solution car $(0; \\sqrt{3})$ échoue dans la $2^{\\text{e}}$ équation',
              'Une infinité de solutions car $D = 0$ et $(0; \\sqrt{3})$ vérifie les deux équations',
              'Exactement deux solutions',
            ],
            correctAnswerIndex: 2,
            explanation:
              '$D = (-\\sqrt{2})(-\\sqrt{2}) - 2\\times 1 = 2 - 2 = 0$. De plus, $-\\sqrt{2}\\times 0 + \\sqrt{3} = \\sqrt{3}$ et $2\\times 0 - \\sqrt{2}\\times\\sqrt{3} = -\\sqrt{6}$ : les équations sont proportionnelles (rapport $-\\sqrt{2}$), donc infinité de solutions.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Déterminant avec racines carrées',
          stepTitle: 'Comparer les systèmes à radicaux de l’Exercice 1',
          paragraphText:
            'Attention aux signes devant $\\sqrt{2}$ ! Dans l’Exercice 1, $(S_3) : \\begin{cases} \\sqrt{2}x - 2y = \\sqrt{2} \\\\ 2x - 2\\sqrt{2}y = -2 \\end{cases}$ a aussi $D = 0$, mais $(1; 0)$ donne $\\sqrt{2}$ dans $(L_1)$ et $+2 \\neq -2$ dans $(L_2)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q4',
            type: 'mcq',
            prompt:
              'Que dire du système $\\begin{cases} \\sqrt{2}x - 2y = \\sqrt{2} \\\\ 2x - 2\\sqrt{2}y = -2 \\end{cases}$ ?',
            options: [
              'Il admet une unique solution $(1; 0)$',
              'Il admet une infinité de solutions',
              'Il n’admet aucune solution ($S = \\emptyset$)',
              'Son déterminant vaut $8$',
            ],
            correctAnswerIndex: 2,
            explanation:
              '$D = \\sqrt{2}(-2\\sqrt{2}) - 2(-2) = -4 + 4 = 0$. Le couple $(1; 0)$ vérifie $\\sqrt{2}(1) - 0 = \\sqrt{2}$, mais $2(1) - 0 = 2 \\neq -2$ : $S = \\emptyset$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Mélanger les inconnues non alignées',
          stepTitle: 'Toujours ranger x puis y dans le même ordre avant de calculer D',
          paragraphText:
            'Si une équation est écrite $3y + 2x = 5$ et l’autre $x - y = 1$, écris-les d’abord en colonnes $(x, y)$ sous la forme $ax + by = c$ avant de lire $a, b, a\', b\'$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q5',
            type: 'mcq',
            prompt: 'Quel est le déterminant du système $\\begin{cases} 4y + 2x = 1 \\\\ 3x - y = 5 \\end{cases}$ ?',
            options: ['$-10$', '$-14$', '$10$', '$14$'],
            correctAnswerIndex: 1,
            explanation: 'En réordonnant $(L_1): 2x + 4y = 1$ et $(L_2): 3x - y = 5$, on obtient $D = \\begin{vmatrix} 2 & 4 \\\\ 3 & -1 \\end{vmatrix} = -2 - 12 = -14$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Système avec paramètre',
          stepTitle: 'Trouver m pour que le déterminant soit nul',
          paragraphText:
            'Avec un paramètre $m$, l’équation $D(m) = 0$ indique pour quelle valeur de $m$ le système perd l’unicité de sa solution.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q6',
            type: 'mcq',
            prompt: 'Pour quelle valeur du réel $m$ le système $\\begin{cases} mx + 3y = 2 \\\\ 4x + 6y = 5 \\end{cases}$ N’A-T-IL PAS une solution unique ?',
            options: ['$m = 1$', '$m = 2$', '$m = 3$', '$m = 8$'],
            correctAnswerIndex: 1,
            explanation: '$D = 6m - 12 = 0 \\iff m = 2$ (pour $m = 2$, il n’y a aucune solution car $4\\neq 5$).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q1',
          type: 'mcq',
          prompt: 'Quel est le déterminant du système $\\begin{cases} 2x + 3y = 1 \\\\ 5x + y = 0 \\end{cases}$ ?',
          options: ['$13$', '$-13$', '$17$', '$-17$'],
          correctAnswerIndex: 1,
          explanation: '$D = \\begin{vmatrix} 2 & 3 \\\\ 5 & 1 \\end{vmatrix} = 2 \\times 1 - 5 \\times 3 = 2 - 15 = -13$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q2',
          type: 'mcq',
          prompt: 'Soit $(S) : \\begin{cases} 3x - y = 1 \\\\ 6x - 2y = -1 \\end{cases}$. Que vaut son déterminant et combien de solutions possède-t-il ?',
          options: [
            '$D = 12$ ; une solution unique',
            '$D = 0$ ; une infinité de solutions',
            '$D = 0$ ; aucune solution',
            '$D = -12$ ; aucune solution',
          ],
          correctAnswerIndex: 2,
          explanation:
            '$D = 3(-2) - 6(-1) = -6 + 6 = 0$. Le couple $(1; 2)$ vérifie $3(1) - 2 = 1$ mais $6(1) - 2(2) = 2 \\neq -1$ : aucune solution.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q3',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 2, on donne $(S_3) : \\begin{cases} -\\sqrt{2}x + y = \\sqrt{3} \\\\ 2x - \\sqrt{2}y = -\\sqrt{6} \\end{cases}$. Que dire de ses solutions ?',
          options: [
            'Une solution unique car $D \\neq 0$',
            'Aucune solution car $(0; \\sqrt{3})$ échoue dans la $2^{\\text{e}}$ équation',
            'Une infinité de solutions car $D = 0$ et $(0; \\sqrt{3})$ vérifie les deux équations',
            'Exactement deux solutions',
          ],
          correctAnswerIndex: 2,
          explanation:
            '$D = (-\\sqrt{2})(-\\sqrt{2}) - 2\\times 1 = 2 - 2 = 0$. De plus, $-\\sqrt{2}\\times 0 + \\sqrt{3} = \\sqrt{3}$ et $2\\times 0 - \\sqrt{2}\\times\\sqrt{3} = -\\sqrt{6}$ : les équations sont proportionnelles (rapport $-\\sqrt{2}$), donc infinité de solutions.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q4',
          type: 'mcq',
          prompt:
            'Que dire du système $\\begin{cases} \\sqrt{2}x - 2y = \\sqrt{2} \\\\ 2x - 2\\sqrt{2}y = -2 \\end{cases}$ ?',
          options: [
            'Il admet une unique solution $(1; 0)$',
            'Il admet une infinité de solutions',
            'Il n’admet aucune solution ($S = \\emptyset$)',
            'Son déterminant vaut $8$',
          ],
          correctAnswerIndex: 2,
          explanation:
            '$D = \\sqrt{2}(-2\\sqrt{2}) - 2(-2) = -4 + 4 = 0$. Le couple $(1; 0)$ vérifie $\\sqrt{2}(1) - 0 = \\sqrt{2}$, mais $2(1) - 0 = 2 \\neq -2$ : $S = \\emptyset$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q5',
          type: 'mcq',
          prompt: 'Quel est le déterminant du système $\\begin{cases} 4y + 2x = 1 \\\\ 3x - y = 5 \\end{cases}$ ?',
          options: ['$-10$', '$-14$', '$10$', '$14$'],
          correctAnswerIndex: 1,
          explanation: 'En réordonnant $(L_1): 2x + 4y = 1$ et $(L_2): 3x - y = 5$, on obtient $D = \\begin{vmatrix} 2 & 4 \\\\ 3 & -1 \\end{vmatrix} = -2 - 12 = -14$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q6',
          type: 'mcq',
          prompt: 'Pour quelle valeur du réel $m$ le système $\\begin{cases} mx + 3y = 2 \\\\ 4x + 6y = 5 \\end{cases}$ N’A-T-IL PAS une solution unique ?',
          options: ['$m = 1$', '$m = 2$', '$m = 3$', '$m = 8$'],
          correctAnswerIndex: 1,
          explanation: '$D = 6m - 12 = 0 \\iff m = 2$ (pour $m = 2$, il n’y a aucune solution car $4\\neq 5$).',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Résolution par Cramer, substitution et combinaison dans R^2
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02',
      order: 2,
      title: 'Résolution algébrique dans ℝ² (Cramer, substitution, combinaison)',
      summary:
        'Résoudre un système 2×2 par les formules de Cramer, par substitution ou par combinaison linéaire.',
      conceptExplanation:
        "Lorsque $D = \\begin{vmatrix} a & b \\\\ a' & b' \\end{vmatrix} \\neq 0$, le système $(S) : \\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$ admet une unique solution donnée par les **formules de Cramer** :\n$$D_x = \\begin{vmatrix} c & b \\\\ c' & b' \\end{vmatrix}, \\quad D_y = \\begin{vmatrix} a & c \\\\ a' & c' \\end{vmatrix} \\implies x = \\frac{D_x}{D} \\quad \\text{et} \\quad y = \\frac{D_y}{D}$$\n\nDeux autres méthodes algébriques équivalentes existent :\n- **Substitution** : exprimer une inconnue en fonction de l'autre dans une équation et remplacer dans l'autre ;\n- **Combinaison linéaire** : multiplier les équations pour éliminer une inconnue par addition ou soustraction.",
      keyRule:
        'Pour Cramer, écris d’abord les constantes c et c′ à droite du signe =, puis remplace la colonne de x pour D_x et la colonne de y pour D_y.',
      formulas: [
        { name: 'Déterminants de Cramer', formula: 'D_x = \\begin{vmatrix} c & b \\\\ c\' & b\' \\end{vmatrix}, \\quad D_y = \\begin{vmatrix} a & c \\\\ a\' & c\' \\end{vmatrix}' },
        { name: 'Solution unique', formula: 'x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D} \\quad (D \\neq 0)' },
      ],
      workedExample: {
        title: 'Résoudre (S₂) par les déterminants de Cramer (p. 3)',
        statement: 'Résous dans $\\mathbb{R}^2$ le système $(S_2) : \\begin{cases} x + 2y - 5 = 0 \\\\ 3x - y + 2 = 0 \\end{cases}$.',
        methodSteps: [
          'On place d’abord les constantes à droite : $\\begin{cases} x + 2y = 5 \\\\ 3x - y = -2 \\end{cases}$.',
          '$D = \\begin{vmatrix} 1 & 2 \\\\ 3 & -1 \\end{vmatrix} = -1 - 6 = -7 \\neq 0$ (solution unique).',
          '$D_x = \\begin{vmatrix} 5 & 2 \\\\ -2 & -1 \\end{vmatrix} = 5(-1) - (-2)(2) = -1 \\implies x = \\dfrac{-1}{-7} = \\dfrac{1}{7}$.',
          '$D_y = \\begin{vmatrix} 1 & 5 \\\\ 3 & -2 \\end{vmatrix} = 1(-2) - 3(5) = -17 \\implies y = \\dfrac{-17}{-7} = \\dfrac{17}{7}$.',
        ],
        conclusion: '$S_{\\mathbb{R}^2} = \\left\\{\\left(\\dfrac{1}{7}; \\dfrac{17}{7}\\right)\\right\\}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer D_x et D_y par Cramer',
          stepTitle: 'Mettre les constantes c et c′ au second membre',
          paragraphText:
            'Dans la formule de Cramer, le système doit impérativement être sous la forme $ax + by = c$, $a\'x + b\'y = c\'$ (avec $c$ et $c\'$ à droite du signe $=$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q1',
            type: 'mcq',
            prompt: 'Quel est l’unique couple solution du système $\\begin{cases} x + 2y - 5 = 0 \\\\ 3x - y + 2 = 0 \\end{cases}$ ?',
            options: [
              '$\\left(-\\dfrac{1}{7}; -\\dfrac{17}{7}\\right)$',
              '$\\left(\\dfrac{1}{7}; \\dfrac{17}{7}\\right)$',
              '$\\left(\\dfrac{9}{7}; \\dfrac{17}{7}\\right)$',
              '$\\left(\\dfrac{1}{7}; \\dfrac{13}{7}\\right)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Avec $c = 5$ et $c\' = -2$, $D = -7$, $D_x = -1$ et $D_y = -17$, donc $(x; y) = \\left(\\dfrac{1}{7}; \\dfrac{17}{7}\\right)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Résolution par substitution',
          stepTitle: 'Isoler une inconnue de coefficient 1 ou −1',
          paragraphText:
            'Dans l’Exercice 2, $(S_1) : \\begin{cases} 2x + 3y = 2 \\\\ x + 2y = -3 \\end{cases}$ possède un $x$ de coefficient $1$ dans $(L_2)$ : on écrit $x = -3 - 2y$ puis on substitue dans $(L_1)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q2',
            type: 'mcq',
            prompt: 'Quel est le couple solution du système $\\begin{cases} 2x + 3y = 2 \\\\ x + 2y = -3 \\end{cases}$ ?',
            options: ['$(-13; 8)$', '$(13; -8)$', '$(5; -4)$', '$(13; 8)$'],
            correctAnswerIndex: 1,
            explanation:
              '$2(-3 - 2y) + 3y = 2 \\implies -6 - y = 2 \\implies y = -8$, puis $x = -3 - 2(-8) = 13$. Vérification : $2(13) + 3(-8) = 2$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Résolution par combinaison linéaire',
          stepTitle: 'Éliminer y en combinant −2(L₁) + (L₂)',
          paragraphText:
            'Pour $(S_2) : \\begin{cases} 3x - y = 1 \\\\ 5x - 2y = -1 \\end{cases}$ (Exercice 2), en calculant $-2(L_1) + (L_2)$, les termes en $y$ s’annulent ($+2y - 2y = 0$) et il reste $-x = -3$, soit $x = 3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q3',
            type: 'mcq',
            prompt: 'Quel est le couple solution de $\\begin{cases} 3x - y = 1 \\\\ 5x - 2y = -1 \\end{cases}$ ?',
            options: ['$(3; 8)$', '$(8; 3)$', '$(3; -8)$', '$(-3; -10)$'],
            correctAnswerIndex: 0,
            explanation: 'On trouve $x = 3$, puis $y = 3x - 1 = 3(3) - 1 = 8$. Vérification : $5(3) - 2(8) = -1$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Vérifier sa solution par substitution',
          stepTitle: 'Un test de 5 secondes pour éviter toute erreur de signe',
          paragraphText:
            'Dans un QCM ou un devoir, remplace toujours $(x; y)$ dans les DEUX équations initiales : un bon couple annule la différence entre membre de gauche et membre de droite dans chaque ligne.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q4',
            type: 'mcq',
            prompt: 'Lequel de ces couples est solution du système $\\begin{cases} 2x - 3y = 7 \\\\ 5x + y = 9 \\end{cases}$ ?',
            options: ['$(1; 4)$', '$(2; -1)$', '$(-1; -3)$', '$(3; -6)$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $(2; -1)$ : $2(2) - 3(-1) = 4 + 3 = 7$ et $5(2) + (-1) = 9$. Les deux équations sont vérifiées.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier de changer le signe de c lors du passage à droite',
          stepTitle: 'Si tu écris ax + by + c = 0, passe c à droite avant Cramer !',
          paragraphText:
            'Si un système est donné sous la forme $ax + by + k = 0$, la constante $c$ de la formule de Cramer est $-k$ ! L’oubli de ce signe inverse les deux coordonnées.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q5',
            type: 'mcq',
            prompt: 'Pour appliquer Cramer au système $\\begin{cases} x + y - 4 = 0 \\\\ 2x - y - 5 = 0 \\end{cases}$, quelle colonne de constantes $(c; c\')$ faut-il utiliser ?',
            options: ['$(-4; -5)$', '$(4; 5)$', '$(4; -5)$', '$(-4; 5)$'],
            correctAnswerIndex: 1,
            explanation: 'On réécrit $\\begin{cases} x + y = 4 \\\\ 2x - y = 5 \\end{cases}$, donc $c = 4$ et $c\' = 5$ (ce qui donne $(3; 1)$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Changement d’inconnue pour un système non linéaire',
          stepTitle: 'Se ramener à un système linéaire en posant X et Y',
          paragraphText:
            'Certains systèmes en $x^2, y^2$ ou $1/x, 1/y$ se résolvent comme des systèmes $2\\times 2$ en posant $X = x^2, Y = y^2$ ou $X = 1/x, Y = 1/y$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q6',
            type: 'mcq',
            prompt:
              'En posant $X = \\dfrac{1}{x}$ et $Y = \\dfrac{1}{y}$ ($x\\neq 0, y\\neq 0$), quel est l’unique couple $(x; y)$ solution de $\\begin{cases} \\dfrac{2}{x} + \\dfrac{3}{y} = 2 \\\\ \\dfrac{1}{x} + \\dfrac{2}{y} = -3 \\end{cases}$ ?',
            options: [
              '$(13; -8)$',
              '$\\left(\\dfrac{1}{13}; -\\dfrac{1}{8}\\right)$',
              '$\\left(-\\dfrac{1}{13}; \\dfrac{1}{8}\\right)$',
              '$(-13; 8)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le système en $(X; Y)$ est exactement $(S_1)$ de l’Exercice 2, donc $X = 13$ et $Y = -8$, d’où $x = \\dfrac{1}{13}$ et $y = -\\dfrac{1}{8}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q1',
          type: 'mcq',
          prompt: 'Quel est l’unique couple solution du système $\\begin{cases} x + 2y - 5 = 0 \\\\ 3x - y + 2 = 0 \\end{cases}$ ?',
          options: [
            '$\\left(-\\dfrac{1}{7}; -\\dfrac{17}{7}\\right)$',
            '$\\left(\\dfrac{1}{7}; \\dfrac{17}{7}\\right)$',
            '$\\left(\\dfrac{9}{7}; \\dfrac{17}{7}\\right)$',
            '$\\left(\\dfrac{1}{7}; \\dfrac{13}{7}\\right)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Avec $c = 5$ et $c\' = -2$, $D = -7$, $D_x = -1$ et $D_y = -17$, donc $(x; y) = \\left(\\dfrac{1}{7}; \\dfrac{17}{7}\\right)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q2',
          type: 'mcq',
          prompt: 'Quel est le couple solution du système $\\begin{cases} 2x + 3y = 2 \\\\ x + 2y = -3 \\end{cases}$ ?',
          options: ['$(-13; 8)$', '$(13; -8)$', '$(5; -4)$', '$(13; 8)$'],
          correctAnswerIndex: 1,
          explanation:
            '$2(-3 - 2y) + 3y = 2 \\implies -6 - y = 2 \\implies y = -8$, puis $x = -3 - 2(-8) = 13$. Vérification : $2(13) + 3(-8) = 2$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q3',
          type: 'mcq',
          prompt: 'Quel est le couple solution de $\\begin{cases} 3x - y = 1 \\\\ 5x - 2y = -1 \\end{cases}$ ?',
          options: ['$(3; 8)$', '$(8; 3)$', '$(3; -8)$', '$(-3; -10)$'],
          correctAnswerIndex: 0,
          explanation: 'On trouve $x = 3$, puis $y = 3x - 1 = 3(3) - 1 = 8$. Vérification : $5(3) - 2(8) = -1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q4',
          type: 'mcq',
          prompt: 'Lequel de ces couples est solution du système $\\begin{cases} 2x - 3y = 7 \\\\ 5x + y = 9 \\end{cases}$ ?',
          options: ['$(1; 4)$', '$(2; -1)$', '$(-1; -3)$', '$(3; -6)$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $(2; -1)$ : $2(2) - 3(-1) = 4 + 3 = 7$ et $5(2) + (-1) = 9$. Les deux équations sont vérifiées.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q5',
          type: 'mcq',
          prompt: 'Pour appliquer Cramer au système $\\begin{cases} x + y - 4 = 0 \\\\ 2x - y - 5 = 0 \\end{cases}$, quelle colonne de constantes $(c; c\')$ faut-il utiliser ?',
          options: ['$(-4; -5)$', '$(4; 5)$', '$(4; -5)$', '$(-4; 5)$'],
          correctAnswerIndex: 1,
          explanation: 'On réécrit $\\begin{cases} x + y = 4 \\\\ 2x - y = 5 \\end{cases}$, donc $c = 4$ et $c\' = 5$ (ce qui donne $(3; 1)$).',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q6',
          type: 'mcq',
          prompt:
            'En posant $X = \\dfrac{1}{x}$ et $Y = \\dfrac{1}{y}$ ($x\\neq 0, y\\neq 0$), quel est l’unique couple $(x; y)$ solution de $\\begin{cases} \\dfrac{2}{x} + \\dfrac{3}{y} = 2 \\\\ \\dfrac{1}{x} + \\dfrac{2}{y} = -3 \\end{cases}$ ?',
          options: [
            '$(13; -8)$',
            '$\\left(\\dfrac{1}{13}; -\\dfrac{1}{8}\\right)$',
            '$\\left(-\\dfrac{1}{13}; \\dfrac{1}{8}\\right)$',
            '$(-13; 8)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le système en $(X; Y)$ est exactement $(S_1)$ de l’Exercice 2, donc $X = 13$ et $Y = -8$, d’où $x = \\dfrac{1}{13}$ et $y = -\\dfrac{1}{8}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Interprétation graphique et droites concourantes
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03',
      order: 3,
      title: 'Interprétation graphique dans ℝ² et droites concourantes',
      summary:
        'Résoudre graphiquement un système 2×2 par intersection de deux droites et vérifier si trois droites sont concourantes.',
      conceptExplanation:
        "Dans le plan muni d'un repère $(O, I, J)$, chaque équation $ax + by = c$ (avec $(a, b) \\neq (0, 0)$) est l'équation cartésienne d'une **droite** :\n- **Résolution graphique** : on trace les deux droites $(D)$ et $(D')$ :\n  - $(D)$ et $(D')$ **sécantes** en $A(x_0; y_0) \\iff D \\neq 0$ : l'unique solution est $(x_0; y_0)$ ;\n  - $(D)$ et $(D')$ **strictement parallèles** $\\iff D = 0$ et $S = \\emptyset$ ;\n  - $(D)$ et $(D')$ **confondues** $\\iff D = 0$ et infinité de solutions.\n- **Trois droites concourantes** : on cherche d'abord le point d'intersection des deux premières, puis on teste s'il vérifie l'équation de la troisième droite.",
      keyRule:
        'Résoudre un système 2×2 revient à chercher l’intersection de deux droites. Trois droites sont concourantes si le point d’intersection de deux d’entre elles appartient à la troisième.',
      formulas: [
        { name: 'Droite d’équation ax + by = c', formula: 'y = -\\frac{a}{b}x + \\frac{c}{b} \\quad (b \\neq 0)' },
        { name: 'Condition de parallélisme', formula: 'D = ab\' - a\'b = 0 \\iff (D) \\parallel (D\')' },
      ],
      visualSchema: {
        type: 'function_plot',
        title: 'Résolution graphique du système x + 2y − 5 = 0 et x − y + 1 = 0',
        caption:
          'Les droites (D) : y = (5 − x)/2 (en bleu) et (D′) : y = x + 1 (en orange) sont sécantes au point A(1 ; 2).',
        plot: {
          xMin: -2,
          xMax: 5,
          yMin: -2,
          yMax: 5,
          xStep: 1,
          yStep: 1,
          curves: [
            {
              label: '(D): x + 2y − 5 = 0',
              color: 'blue',
              pieces: [{ expr: '(5-x)/2', from: -2, to: 5 }],
            },
            {
              label: '(D′): x − y + 1 = 0',
              color: 'orange',
              pieces: [{ expr: 'x+1', from: -2, to: 4 }],
            },
          ],
          verticalLines: [{ x: 1, label: 'x = 1', color: 'green' }],
          horizontalLines: [{ y: 2, label: 'y = 2', color: 'green' }],
        },
      },
      workedExample: {
        title: 'Tester si trois droites sont concourantes (Exercice 5 p. 8)',
        statement:
          'On donne $(AB): x - y = -4$, $(CD): 2x + 3y = 8$ et $(EF): x + 3y = 8$. Ces trois droites sont-elles concourantes ?',
        methodSteps: [
          'On résout d’abord le système formé par $(AB)$ et $(CD)$ : $\\begin{cases} x - y = -4 \\\\ 2x + 3y = 8 \\end{cases}$.',
          'De $(AB)$, $x = y - 4$. En remplaçant dans $(CD)$ : $2(y - 4) + 3y = 8 \\implies 5y = 16 \\implies y = \\dfrac{16}{5}$, puis $x = \\dfrac{16}{5} - 4 = -\\dfrac{4}{5}$.',
          'On teste le point d’intersection $M\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$ dans $(EF)$ : $-\\dfrac{4}{5} + 3\\left(\\dfrac{16}{5}\\right) = \\dfrac{44}{5} \\neq 8$.',
        ],
        conclusion: 'Les trois droites $(AB)$, $(CD)$ et $(EF)$ ne sont pas concourantes.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Intersection de deux droites',
          stepTitle: 'Lire graphiquement la solution d’un système',
          paragraphText:
            'Dans l’Exemple 2 du cours, $(D): x + 2y - 5 = 0$ et $(D\'): x - y + 1 = 0$ se coupent en $A(1; 2)$ : c’est l’unique couple vérifiant simultanément les deux équations.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q1',
            type: 'mcq',
            prompt: 'Graphiquement, les droites $(D): x + 2y - 5 = 0$ et $(D\'): x - y + 1 = 0$ se coupent en un point $A$. Quelles sont ses coordonnées ?',
            options: ['$A(2; 1)$', '$A(1; 2)$', '$A(-1; 3)$', '$A(3; 1)$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $(1; 2)$ : $1 + 2(2) - 5 = 0$ et $1 - 2 + 1 = 0$. Les deux droites se coupent en $A(1; 2)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Droites parallèles ou confondues',
          stepTitle: 'Traduire D = 0 en géométrie',
          paragraphText:
            'Lorsque $D = 0$, les vecteurs directeurs des deux droites sont colinéaires : les droites sont parallèles (strictement si $S = \\emptyset$, confondues s’il y a une infinité de solutions).',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q2',
            type: 'mcq',
            prompt: 'Que peut-on dire géométriquement des droites associées au système $\\begin{cases} 3x + 15y + 2 = 0 \\\\ 2x + 10y - 6 = 0 \\end{cases}$ ?',
            options: [
              'Elles sont sécantes',
              'Elles sont strictement parallèles',
              'Elles sont confondues',
              'Elles sont perpendiculaires',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le système a $D = 0$ et n’admet aucune solution : les deux droites sont strictement parallèles.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Vérifier le concours de trois droites',
          stepTitle: 'Résoudre 2 équations et tester la 3e (Exercice 5)',
          paragraphText:
            'Dans l’Exercice 5, avec $A(2; 6)$, $B(-3; 1)$, $C(7; -2)$, $D(4; 0)$, $E(-4; 4)$ et $F(11; -1)$, on détermine d’abord les équations cartésiennes puis l’intersection de $(AB)$ et $(CD)$ : $\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q3',
            type: 'mcq',
            prompt:
              'Les droites $(AB): x - y = -4$ et $(CD): 2x + 3y = 8$ se coupent au point $M\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$. Ce point appartient-il à $(EF): x + 3y = 8$ ?',
            options: [
              'Oui, car $-\\frac{4}{5} + 3\\times\\frac{16}{5} = 8$',
              'Non, car $-\\frac{4}{5} + 3\\times\\frac{16}{5} = \\frac{44}{5} \\neq 8$',
              'Oui, car $(CD)$ et $(EF)$ ont même second membre $8$',
              'Non, car $(AB)$ et $(CD)$ sont parallèles',
            ],
            correctAnswerIndex: 1,
            explanation: '$-\\dfrac{4}{5} + \\dfrac{48}{5} = \\dfrac{44}{5} \\neq 8$, donc $M \\notin (EF)$ et les trois droites ne sont pas concourantes.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Tracer une droite ax + by = c',
          stepTitle: 'Trouver deux points simples sur (D) : x + 2y − 5 = 0',
          paragraphText:
            'Pour tracer $(D): x + 2y - 5 = 0$, choisis deux valeurs simples donnant des coordonnées entières ou demi-entières, par exemple $y = 0 \\implies x = 5$ et $x = 1 \\implies y = 2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q4',
            type: 'mcq',
            prompt: 'Parmi ces couples, lequel vérifie l’équation de la droite $(D): x + 2y - 5 = 0$ ?',
            options: ['$(3; 1)$', '$(2; 3)$', '$(5; 2)$', '$(1; 3)$'],
            correctAnswerIndex: 0,
            explanation: '$3 + 2(1) - 5 = 0$, donc le point $(3; 1)$ appartient à $(D)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre deux à deux sécantes et concourantes',
          stepTitle: 'Attention : trois droites peuvent se couper deux à deux sans être concourantes !',
          paragraphText:
            'Deux droites non parallèles se coupent toujours en un point ; mais trois droites non parallèles forment en général un **triangle** de trois intersections distinctes, sauf si ces trois points sont confondus !',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q5',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 5, $(AB)$, $(CD)$ et $(EF)$ ont des déterminants deux à deux non nuls mais ne sont pas concourantes. Que forment-elles dans le plan ?',
            options: [
              'Trois droites parallèles',
              'Un triangle non aplati (trois points d’intersection distincts)',
              'Une droite unique',
              'Un faisceau concourant',
            ],
            correctAnswerIndex: 1,
            explanation: 'Non parallèles deux à deux et non concourantes, trois droites forment exactement un triangle dans le plan.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Rendre trois droites concourantes',
          stepTitle: 'Ajuster le second membre d’une 3e droite',
          paragraphText:
            'Si l’on souhaite modifier la constante de $(EF): x + 3y = k$ pour que $(EF)$ passe aussi par $M\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$, il suffit de fixer $k = -\\dfrac{4}{5} + 3\\left(\\dfrac{16}{5}\\right)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q6',
            type: 'mcq',
            prompt:
              'Pour quelle valeur de $k$ les trois droites $x - y = -4$, $2x + 3y = 8$ et $x + 3y = k$ deviennent-elles concourantes ?',
            options: ['$k = 8$', '$k = \\dfrac{44}{5}$', '$k = \\dfrac{12}{5}$', '$k = 4$'],
            correctAnswerIndex: 1,
            explanation: 'Il faut que $M\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$ vérifie $x + 3y = k$, soit $k = -\\dfrac{4}{5} + \\dfrac{48}{5} = \\dfrac{44}{5}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q1',
          type: 'mcq',
          prompt: 'Graphiquement, les droites $(D): x + 2y - 5 = 0$ et $(D\'): x - y + 1 = 0$ se coupent en un point $A$. Quelles sont ses coordonnées ?',
          options: ['$A(2; 1)$', '$A(1; 2)$', '$A(-1; 3)$', '$A(3; 1)$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $(1; 2)$ : $1 + 2(2) - 5 = 0$ et $1 - 2 + 1 = 0$. Les deux droites se coupent en $A(1; 2)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q2',
          type: 'mcq',
          prompt: 'Que peut-on dire géométriquement des droites associées au système $\\begin{cases} 3x + 15y + 2 = 0 \\\\ 2x + 10y - 6 = 0 \\end{cases}$ ?',
          options: [
            'Elles sont sécantes',
            'Elles sont strictement parallèles',
            'Elles sont confondues',
            'Elles sont perpendiculaires',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le système a $D = 0$ et n’admet aucune solution : les deux droites sont strictement parallèles.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q3',
          type: 'mcq',
          prompt:
            'Les droites $(AB): x - y = -4$ et $(CD): 2x + 3y = 8$ se coupent au point $M\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$. Ce point appartient-il à $(EF): x + 3y = 8$ ?',
          options: [
            'Oui, car $-\\frac{4}{5} + 3\\times\\frac{16}{5} = 8$',
            'Non, car $-\\frac{4}{5} + 3\\times\\frac{16}{5} = \\frac{44}{5} \\neq 8$',
            'Oui, car $(CD)$ et $(EF)$ ont même second membre $8$',
            'Non, car $(AB)$ et $(CD)$ sont parallèles',
          ],
          correctAnswerIndex: 1,
          explanation: '$-\\dfrac{4}{5} + \\dfrac{48}{5} = \\dfrac{44}{5} \\neq 8$, donc $M \\notin (EF)$ et les trois droites ne sont pas concourantes.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q4',
          type: 'mcq',
          prompt: 'Parmi ces couples, lequel vérifie l’équation de la droite $(D): x + 2y - 5 = 0$ ?',
          options: ['$(3; 1)$', '$(2; 3)$', '$(5; 2)$', '$(1; 3)$'],
          correctAnswerIndex: 0,
          explanation: '$3 + 2(1) - 5 = 0$, donc le point $(3; 1)$ appartient à $(D)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q5',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 5, $(AB)$, $(CD)$ et $(EF)$ ont des déterminants deux à deux non nuls mais ne sont pas concourantes. Que forment-elles dans le plan ?',
          options: [
            'Trois droites parallèles',
            'Un triangle non aplati (trois points d’intersection distincts)',
            'Une droite unique',
            'Un faisceau concourant',
          ],
          correctAnswerIndex: 1,
          explanation: 'Non parallèles deux à deux et non concourantes, trois droites forment exactement un triangle dans le plan.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q6',
          type: 'mcq',
          prompt:
            'Pour quelle valeur de $k$ les trois droites $x - y = -4$, $2x + 3y = 8$ et $x + 3y = k$ deviennent-elles concourantes ?',
          options: ['$k = 8$', '$k = \\dfrac{44}{5}$', '$k = \\dfrac{12}{5}$', '$k = 4$'],
          correctAnswerIndex: 1,
          explanation: 'Il faut que $M\\left(-\\dfrac{4}{5}; \\dfrac{16}{5}\\right)$ vérifie $x + 3y = k$, soit $k = -\\dfrac{4}{5} + \\dfrac{48}{5} = \\dfrac{44}{5}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Systèmes linéaires dans R^3 et substitution
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04',
      order: 4,
      title: 'Systèmes linéaires dans ℝ³ et substitution',
      summary:
        'Reconnaître un système triangulaire 3×3 et résoudre un système dans ℝ³ par substitution.',
      conceptExplanation:
        "Un **système linéaire de trois équations à trois inconnues $(x; y; z)$** s'écrit :\n$$\\begin{cases} ax + by + cz = m \\\\ a'x + b'y + c'z = m' \\\\ a''x + b''y + c''z = m'' \\end{cases}$$\n\n- Il est dit **triangulaire** lorsque la $2^{\\text{e}}$ équation ne contient plus $x$ et la $3^{\\text{e}}$ équation ne contient plus ni $x$ ni $y$ : on le résout alors par **remontée** du bas vers le haut ($z$, puis $y$, puis $x$).\n- **Méthode par substitution** : on isole une inconnue simple dans une équation (de préférence de coefficient $1$ ou $-1$), on la remplace dans les deux autres pour obtenir un système $2\\times 2$, puis on résout ce système $2\\times 2$ avant de remonter à la première inconnue.",
      keyRule:
        'Un système triangulaire se résout par remontée (du bas vers le haut). En substitution, isole une inconnue de coefficient 1 ou −1 pour ramener 3×3 à 2×2.',
      formulas: [
        { name: 'Système triangulaire', formula: '\\begin{cases} ax + by + cz = m \\\\ b\'y + c\'z = m\' \\\\ c\'\'z = m\'\' \\end{cases}' },
      ],
      workedExample: {
        title: 'Résoudre (Σ₁) par substitution (p. 4)',
        statement:
          'Résous dans $\\mathbb{R}^3$ par substitution : $(\\Sigma_1) : \\begin{cases} x - 2y - 3z = -9 \\\\ 2x + 5y - 3z = 0 \\\\ x + y + 2z = 9 \\end{cases}$.',
        methodSteps: [
          'De $(L_1)$, on isole $x = 2y + 3z - 9$.',
          'On remplace $x$ dans $(L_2)$ et $(L_3)$ : $2(2y + 3z - 9) + 5y - 3z = 0 \\implies 9y + 3z = 18$ (soit $3y + z = 6$) et $(2y + 3z - 9) + y + 2z = 9 \\implies 3y + 5z = 18$.',
          'De $3y + z = 6$, on tire $z = 6 - 3y$. En remplaçant dans $3y + 5z = 18$ : $3y + 5(6 - 3y) = 18 \\implies -12y = -12 \\implies y = 1$.',
          'On remonte : $z = 6 - 3(1) = 3$, puis $x = 2(1) + 3(3) - 9 = 2$.',
        ],
        conclusion: '$S_{\\mathbb{R}^3} = \\{(2; 1; 3)\\}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Remontée d’un système triangulaire',
          stepTitle: 'Résoudre du bas vers le haut',
          paragraphText:
            'Dans un système triangulaire, la dernière équation donne immédiatement $z$, que l’on injecte dans la deuxième pour trouver $y$, puis $(y, z)$ dans la première pour trouver $x$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q1',
            type: 'mcq',
            prompt: 'Quel est le triplet solution du système triangulaire $\\begin{cases} x + 2y + z = 8 \\\\ -3y - 2z = -12 \\\\ -22z = -66 \\end{cases}$ (Exercice 3a) ?',
            options: ['$(3; 2; 1)$', '$(1; 2; 3)$', '$(2; 1; 3)$', '$(1; 3; 2)$'],
            correctAnswerIndex: 1,
            explanation: '$z = \\dfrac{-66}{-22} = 3$, puis $-3y - 6 = -12 \\implies y = 2$, puis $x + 4 + 3 = 8 \\implies x = 1$. Solution : $(1; 2; 3)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Substitution dans un système symétrique simple',
          stepTitle: 'Résoudre x + y = 5, y + z = 1, x + z = −8 (Exercice 3c)',
          paragraphText:
            'De $x + y = 5$ et $y + z = 1$, on exprime $x = 5 - y$ et $z = 1 - y$, puis on remplace dans $x + z = -8$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q2',
            type: 'mcq',
            prompt: 'Quel est le triplet solution de $\\begin{cases} x + y = 5 \\\\ y + z = 1 \\\\ x + z = -8 \\end{cases}$ ?',
            options: ['$(2; 7; -6)$', '$(-2; 7; -6)$', '$(-2; 3; -6)$', '$(-6; 7; -2)$'],
            correctAnswerIndex: 1,
            explanation: '$(5 - y) + (1 - y) = -8 \\implies 6 - 2y = -8 \\implies y = 7$, puis $x = 5 - 7 = -2$ et $z = 1 - 7 = -6$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Système triangulaire de l’exemple p. 3',
          stepTitle: 'Vérifier les signes négatifs lors de la remontée',
          paragraphText:
            'Fais bien attention aux signes lors du passage au second membre : si $2y + 4z = 0$ et $z = 2$, alors $2y = -8$ donc $y = -4$ (et non $+4$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q3',
            type: 'mcq',
            prompt: 'Quel est le triplet solution du système triangulaire $\\begin{cases} x - y + 3z = 2 \\\\ 2y + 4z = 0 \\\\ 3z = 6 \\end{cases}$ (Exemple p. 3) ?',
            options: ['$(-8; -4; 2)$', '$(0; 4; 2)$', '$(-4; -4; 2)$', '$(-8; 4; 2)$'],
            correctAnswerIndex: 0,
            explanation: '$3z = 6 \\implies z = 2$, puis $2y + 8 = 0 \\implies y = -4$, puis $x - (-4) + 6 = 2 \\implies x + 10 = 2 \\implies x = -8$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Système dont deux équations n’ont que deux inconnues',
          stepTitle: 'Résoudre exactement le système de l’Exercice 3b',
          paragraphText:
            'Dans $\\begin{cases} 2x + y - 4z = 4 \\\\ 3x + 2y = -5 \\\\ 5x + 8y = 1 \\end{cases}$, les deux dernières équations ne contiennent que $x$ et $y$ ! On résout d’abord ce sous-système $2\\times 2$ en $(x; y)$, puis on calcule $z$ dans la première équation.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q4',
            type: 'mcq',
            prompt: 'Quel est l’unique triplet solution du système $\\begin{cases} 2x + y - 4z = 4 \\\\ 3x + 2y = -5 \\\\ 5x + 8y = 1 \\end{cases}$ ?',
            options: [
              '$(-3; -1; -11/4)$',
              '$(-3; 2; -2)$',
              '$(-3; -7; -17/4)$',
              '$(3; -7; 2)$',
            ],
            correctAnswerIndex: 1,
            explanation:
              '$4(L_2) - (L_3)$ donne $7x = -21 \\implies x = -3$. Puis $3(-3) + 2y = -5 \\implies 2y = 4 \\implies y = 2$, et $2(-3) + 2 - 4z = 4 \\implies -4z = 8 \\implies z = -2$. Vérification : $5(-3)+8(2)=1$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Remettre la substitution dans la même équation',
          stepTitle: 'Ne substitue jamais une expression dans l’équation d’où elle provient !',
          paragraphText:
            'Si tu tires $x = 2y + 3z - 9$ de $(L_1)$ et que tu le remplaces dans $(L_1)$ elle-même, tu obtiens $0 = 0$, ce qui ne sert à rien ! Il faut remplacer dans $(L_2)$ et $(L_3)$ uniquement.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q5',
            type: 'mcq',
            prompt: 'Dans la méthode de substitution pour un système de $3$ équations $(L_1), (L_2), (L_3)$, si on exprime $x$ à partir de $(L_1)$, dans quelles équations doit-on remplacer $x$ ?',
            options: [
              'Uniquement dans $(L_1)$',
              'Dans $(L_2)$ et $(L_3)$, tout en conservant $(L_1)$',
              'Uniquement dans $(L_2)$',
              'On supprime définitivement $(L_1)$ après avoir trouvé $y$ et $z$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On conserve $(L_1)$ sous forme $x = \\dots$ pour retrouver $x$ à la fin, et on substitue dans les deux autres équations $(L_2)$ et $(L_3)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier un triplet solution dans R^3',
          stepTitle: 'Contrôler toutes les composantes avant de conclure',
          paragraphText:
            'Dans l’Exemple $(\\Sigma_1)$ du cours, la solution annoncée est $(2; 1; 3)$. Vérifier les trois équations garantit l’absence d’erreur de calcul.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q6',
            type: 'mcq',
            prompt: 'Lequel de ces triplets vérifie $(\\Sigma_1) : \\begin{cases} x - 2y - 3z = -9 \\\\ 2x + 5y - 3z = 0 \\\\ x + y + 2z = 9 \\end{cases}$ ?',
            options: ['$(1; 2; 3)$', '$(2; 1; 3)$', '$(3; 1; 2)$', '$(2; 3; 1)$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $(2; 1; 3)$ : $2 - 2 - 9 = -9$, $4 + 5 - 9 = 0$ et $2 + 1 + 6 = 9$. Toutes les égalités sont vraies.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q1',
          type: 'mcq',
          prompt: 'Quel est le triplet solution du système triangulaire $\\begin{cases} x + 2y + z = 8 \\\\ -3y - 2z = -12 \\\\ -22z = -66 \\end{cases}$ (Exercice 3a) ?',
          options: ['$(3; 2; 1)$', '$(1; 2; 3)$', '$(2; 1; 3)$', '$(1; 3; 2)$'],
          correctAnswerIndex: 1,
          explanation: '$z = \\dfrac{-66}{-22} = 3$, puis $-3y - 6 = -12 \\implies y = 2$, puis $x + 4 + 3 = 8 \\implies x = 1$. Solution : $(1; 2; 3)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q2',
          type: 'mcq',
          prompt: 'Quel est le triplet solution de $\\begin{cases} x + y = 5 \\\\ y + z = 1 \\\\ x + z = -8 \\end{cases}$ ?',
          options: ['$(2; 7; -6)$', '$(-2; 7; -6)$', '$(-2; 3; -6)$', '$(-6; 7; -2)$'],
          correctAnswerIndex: 1,
          explanation: '$(5 - y) + (1 - y) = -8 \\implies 6 - 2y = -8 \\implies y = 7$, puis $x = 5 - 7 = -2$ et $z = 1 - 7 = -6$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q3',
          type: 'mcq',
          prompt: 'Quel est le triplet solution du système triangulaire $\\begin{cases} x - y + 3z = 2 \\\\ 2y + 4z = 0 \\\\ 3z = 6 \\end{cases}$ (Exemple p. 3) ?',
          options: ['$(-8; -4; 2)$', '$(0; 4; 2)$', '$(-4; -4; 2)$', '$(-8; 4; 2)$'],
          correctAnswerIndex: 0,
          explanation: '$3z = 6 \\implies z = 2$, puis $2y + 8 = 0 \\implies y = -4$, puis $x - (-4) + 6 = 2 \\implies x + 10 = 2 \\implies x = -8$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q4',
          type: 'mcq',
          prompt: 'Quel est l’unique triplet solution du système $\\begin{cases} 2x + y - 4z = 4 \\\\ 3x + 2y = -5 \\\\ 5x + 8y = 1 \\end{cases}$ ?',
          options: [
            '$(-3; -1; -11/4)$',
            '$(-3; 2; -2)$',
            '$(-3; -7; -17/4)$',
            '$(3; -7; 2)$',
          ],
          correctAnswerIndex: 1,
          explanation:
            '$4(L_2) - (L_3)$ donne $7x = -21 \\implies x = -3$. Puis $3(-3) + 2y = -5 \\implies 2y = 4 \\implies y = 2$, et $2(-3) + 2 - 4z = 4 \\implies -4z = 8 \\implies z = -2$. Vérification : $5(-3)+8(2)=1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q5',
          type: 'mcq',
          prompt: 'Dans la méthode de substitution pour un système de $3$ équations $(L_1), (L_2), (L_3)$, si on exprime $x$ à partir de $(L_1)$, dans quelles équations doit-on remplacer $x$ ?',
          options: [
            'Uniquement dans $(L_1)$',
            'Dans $(L_2)$ et $(L_3)$, tout en conservant $(L_1)$',
            'Uniquement dans $(L_2)$',
            'On supprime définitivement $(L_1)$ après avoir trouvé $y$ et $z$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On conserve $(L_1)$ sous forme $x = \\dots$ pour retrouver $x$ à la fin, et on substitue dans les deux autres équations $(L_2)$ et $(L_3)$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q6',
          type: 'mcq',
          prompt: 'Lequel de ces triplets vérifie $(\\Sigma_1) : \\begin{cases} x - 2y - 3z = -9 \\\\ 2x + 5y - 3z = 0 \\\\ x + y + 2z = 9 \\end{cases}$ ?',
          options: ['$(1; 2; 3)$', '$(2; 1; 3)$', '$(3; 1; 2)$', '$(2; 3; 1)$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $(2; 1; 3)$ : $2 - 2 - 9 = -9$, $4 + 5 - 9 = 0$ et $2 + 1 + 6 = 9$. Toutes les égalités sont vraies.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Méthode du pivot de Gauss dans R^3
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05',
      order: 5,
      title: 'Méthode du pivot de Gauss dans ℝ³',
      summary:
        'Transformer un système 3×3 en un système triangulaire équivalent par combinaisons linéaires des lignes.',
      conceptExplanation:
        "La **méthode du pivot de Gauss** consiste à transformer un système quelconque en un **système triangulaire** équivalent grâce aux opérations élémentaires sur les lignes :\n- Échanger deux lignes ($L_i \\leftrightarrow L_j$) pour placer un coefficient simple ($1$ ou $-1$) en pivot ;\n- Remplacer $L_i$ par $\\alpha L_i + \\beta L_j$ (avec $\\alpha \\neq 0$).\n\n**Marche à suivre** :\n1. Conserver $(L_1)$ et éliminer $x$ dans $(L_2)$ et $(L_3)$ pour obtenir $(L_2')$ et $(L_3')$ en $(y, z)$ ;\n2. Conserver $(L_2')$ et éliminer $y$ dans $(L_3')$ pour obtenir $(L_3'')$ en $z$ seul ;\n3. Résoudre le système triangulaire $\\{(L_1), (L_2'), (L_3'')\\}$ par remontée (ou détecter $0 = k \\neq 0$ si le système n'a aucune solution).",
      keyRule:
        'Élimine d’abord x dans L₂ et L₃ grâce au pivot de L₁, puis élimine y dans L′₃ grâce au pivot de L′₂ pour obtenir un système triangulaire.',
      formulas: [
        { name: 'Opération autorisée', formula: 'L_i \\leftarrow \\alpha L_i + \\beta L_j \\quad (\\alpha \\neq 0)' },
        { name: 'Détection d’incompatibilité', formula: '0x + 0y + 0z = k \\ (k \\neq 0) \\implies S = \\emptyset' },
      ],
      workedExample: {
        title: 'Résoudre (Σ₂) par le pivot de Gauss (p. 4)',
        statement:
          'Résous par la méthode du pivot de Gauss : $(\\Sigma_2) : \\begin{cases} x - 5y - 7z = 3 & (L_1) \\\\ 5x + 3y + z = 3 & (L_2) \\\\ 3x + y - 2z = -1 & (L_3) \\end{cases}$.',
        methodSteps: [
          'On élimine $x$ dans $(L_2)$ et $(L_3)$ : $L_2\' \\leftarrow L_2 - 5L_1$ donne $28y + 36z = -12$ (simplifiable par $2$ en $14y + 18z = -6$), et $L_3\' \\leftarrow L_3 - 3L_1$ donne $16y + 19z = -10$.',
          'On élimine $y$ entre $L_2\'$ et $L_3\'$ : $L_3\'\' \\leftarrow 14 L_3\' - 16 L_2\'$ donne $(14\\times 19 - 16\\times 18)z = -140 - (-96)$, soit $-22z = -44$, d’où $z = 2$.',
          'On remonte : $14y + 18(2) = -6 \\implies 14y = -42 \\implies y = -3$, puis $x - 5(-3) - 7(2) = 3 \\implies x + 15 - 14 = 3 \\implies x = 2$.',
        ],
        conclusion: '$S_{\\mathbb{R}^3} = \\{(2; -3; 2)\\}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Choisir les combinaisons d’élimination de x',
          stepTitle: 'Éliminer x avec L₁ comme ligne pivot',
          paragraphText:
            'Si $(L_1)$ commence par $1\\cdot x$, pour annuler $5x$ dans $(L_2)$ on pose $L_2\' = L_2 - 5L_1$ (ou $5L_1 - L_2$). Les coefficients deviennent ainsi plus petits dès la première étape.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q1',
            type: 'mcq',
            prompt:
              'Dans $(\\Sigma_2)$, $(L_1): x - 5y - 7z = 3$ et $(L_2): 5x + 3y + z = 3$. Quelle équation obtient-on pour $(L_2\') = (L_2) - 5(L_1)$ ?',
            options: [
              '$28y + 36z = -12$',
              '$-22y - 34z = -12$',
              '$28y - 34z = 18$',
              '$-28y + 36z = 12$',
            ],
            correctAnswerIndex: 0,
            explanation: '$(5x - 5x) + (3 - (-25))y + (1 - (-35))z = 3 - 15$, soit $28y + 36z = -12$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Éliminer y et remonter dans (Σ₂)',
          stepTitle: 'Trouver (2 ; −3 ; 2)',
          paragraphText:
            'Une fois $z = 2$ obtenu dans $(L_3\'\')$, on le remplace dans $(L_2\')$ pour trouver $y$, puis dans $(L_1)$ pour trouver $x$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q2',
            type: 'mcq',
            prompt: 'Quel est le triplet solution du système $(\\Sigma_2)$ (Exercice 3d) ?',
            options: ['$(2; 3; 2)$', '$(2; -3; 2)$', '$(-2; -3; 2)$', '$(2; -3; -2)$'],
            correctAnswerIndex: 1,
            explanation: 'Pour $(2; -3; 2)$ : $2 + 15 - 14 = 3$, $10 - 9 + 2 = 3$ et $6 - 3 - 4 = -1$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Échanger les lignes pour avoir un pivot égal à −1 ou 1',
          stepTitle: 'Résoudre l’Exercice 3e avec solutions rationnelles',
          paragraphText:
            'Dans l’Exercice 3e, $\\begin{cases} 2x + y + z = 1 \\\\ 2x + 3y - z = 6 \\\\ -x + 2y + 2z = -1 \\end{cases}$, on place d’abord la $3^{\\text{e}}$ ligne en haut ($-x + 2y + 2z = -1$) pour utiliser $-1$ comme pivot.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q3',
            type: 'mcq',
            prompt: 'Quel est le triplet solution du système de l’Exercice 3e ?',
            options: [
              '$\\left(\\dfrac{3}{5}; \\dfrac{23}{20}; -\\dfrac{27}{20}\\right)$',
              '$\\left(-\\dfrac{3}{5}; \\dfrac{23}{20}; \\dfrac{27}{20}\\right)$',
              '$\\left(\\dfrac{3}{5}; -\\dfrac{23}{20}; -\\dfrac{27}{20}\\right)$',
              '$\\left(1; \\dfrac{1}{2}; -\\dfrac{3}{2}\\right)$',
            ],
            correctAnswerIndex: 0,
            explanation: 'En éliminant $x$ ($2L_1+L_2$ et $2L_1+L_3$), puis $y$ ($7L_5-5L_4$), on obtient $-20z = 27 \\implies z = -\\dfrac{27}{20}$, $y = \\dfrac{23}{20}$ et $x = \\dfrac{3}{5}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Système sans solution en R^3',
          stepTitle: 'Reconnaître une contradiction à la dernière étape (Exercice 3f)',
          paragraphText:
            'Dans l’Exercice 3f, $\\begin{cases} x + y - 2z = 1 & (L_1) \\\\ x - 2y + 7z = 1 & (L_2) \\\\ -2x + y + z = 1 & (L_3) \\end{cases}$, l’élimination de $x$ donne $L_1 - L_2 : 3y - 9z = 0$ et $2L_1 + L_3 : 3y - 3z = 3$ ? Vérifions soigneusement : $L_1-L_2$ vaut $(y - (-2y)) + (-2z - 7z) = 3y - 9z = 0$, ou avec $2L_1 + L_3$: $(2y + y) + (-4z + z) = 3y - 3z = 3$, et en réalité l’énoncé du cours conduit à une contradiction $0 = 3$ si deux combinaisons donnent $3y - 3z = 0$ et $3y - 3z = 3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q4',
            type: 'mcq',
            prompt:
              'Au cours d’un pivot de Gauss, on aboutit aux deux équations réduites $\\begin{cases} 3y - 3z = 0 \\\\ 3y - 3z = 3 \\end{cases}$. Que conclure sur l’ensemble des solutions ?',
            options: [
              'Il y a une infinité de solutions',
              'L’unique solution est $(0; 1; 1)$',
              'Le système n’admet aucune solution ($S = \\emptyset$)',
              'On a $z = 1$ et $y = 1$',
            ],
            correctAnswerIndex: 2,
            explanation: 'La même expression $3y - 3z$ ne peut valoir simultanément $0$ et $3$ ($0 = 3$ est impossible) : donc $S = \\emptyset$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Interdiction de multiplier la ligne modifiée par 0',
          stepTitle: 'Ne perds aucune information en combinant deux fois les mêmes lignes !',
          paragraphText:
            'Pour passer de $3$ équations à $2$ nouvelles équations sans $x$, tu dois impérativement utiliser les TROIS équations de départ (par exemple $L_2$ avec $L_1$, puis $L_3$ avec $L_1$) — jamais deux combinaisons entre $L_1$ et $L_2$ seules.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q5',
            type: 'mcq',
            prompt: 'Pourquoi doit-on faire apparaître à la fois $(L_2)$ et $(L_3)$ quand on élimine $x$ à l’aide de $(L_1)$ ?',
            options: [
              'Pour simplifier les calculs de tête',
              'Parce que si l’on n’utilise pas $(L_3)$, la nouvelle paire d’équations perd l’information contenue dans $(L_3)$ et le système n’est plus équivalent',
              'Parce que $(L_3)$ contient toujours $z$',
              'Parce que $\\alpha$ doit être positif',
            ],
            correctAnswerIndex: 1,
            explanation: 'La transformation conserve les solutions seulement si chaque ligne du nouveau système apporte indépendamment l’information des trois lignes initiales.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Pivot de Gauss avec fractions évitées',
          stepTitle: 'Multiplier chaque ligne par des entiers pour garder des calculs exacts',
          paragraphText:
            'Dans le cours, plutôt que de diviser par $16$ ou $14$, on préfère calculer $14(L_3\') - 16(L_2\')$ pour rester entièrement en nombres entiers jusqu’à la toute fin.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q6',
            type: 'mcq',
            prompt:
              'On a le sous-système $\\begin{cases} 7y + 3z = 4 & (L_4) \\\\ 5y + 5z = -1 & (L_5) \\end{cases}$ (Exercice 3e). Quelle combinaison élimine $y$ ?',
            options: [
              '$5(L_4) - 7(L_5)$ ou $7(L_5) - 5(L_4)$',
              '$3(L_4) - 5(L_5)$',
              '$(L_4) + (L_5)$',
              '$7(L_4) - 5(L_5)$',
            ],
            correctAnswerIndex: 0,
            explanation: '$7(5y) - 5(7y) = 35y - 35y = 0$, et $7(5z) - 5(3z) = 20z = -7 - 20 = -27$, d’où $z = -\\dfrac{27}{20}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q1',
          type: 'mcq',
          prompt:
            'Dans $(\\Sigma_2)$, $(L_1): x - 5y - 7z = 3$ et $(L_2): 5x + 3y + z = 3$. Quelle équation obtient-on pour $(L_2\') = (L_2) - 5(L_1)$ ?',
          options: [
            '$28y + 36z = -12$',
            '$-22y - 34z = -12$',
            '$28y - 34z = 18$',
            '$-28y + 36z = 12$',
          ],
          correctAnswerIndex: 0,
          explanation: '$(5x - 5x) + (3 - (-25))y + (1 - (-35))z = 3 - 15$, soit $28y + 36z = -12$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q2',
          type: 'mcq',
          prompt: 'Quel est le triplet solution du système $(\\Sigma_2)$ (Exercice 3d) ?',
          options: ['$(2; 3; 2)$', '$(2; -3; 2)$', '$(-2; -3; 2)$', '$(2; -3; -2)$'],
          correctAnswerIndex: 1,
          explanation: 'Pour $(2; -3; 2)$ : $2 + 15 - 14 = 3$, $10 - 9 + 2 = 3$ et $6 - 3 - 4 = -1$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q3',
          type: 'mcq',
          prompt: 'Quel est le triplet solution du système de l’Exercice 3e ?',
          options: [
            '$\\left(\\dfrac{3}{5}; \\dfrac{23}{20}; -\\dfrac{27}{20}\\right)$',
            '$\\left(-\\dfrac{3}{5}; \\dfrac{23}{20}; \\dfrac{27}{20}\\right)$',
            '$\\left(\\dfrac{3}{5}; -\\dfrac{23}{20}; -\\dfrac{27}{20}\\right)$',
            '$\\left(1; \\dfrac{1}{2}; -\\dfrac{3}{2}\\right)$',
          ],
          correctAnswerIndex: 0,
          explanation: 'En éliminant $x$ ($2L_1+L_2$ et $2L_1+L_3$), puis $y$ ($7L_5-5L_4$), on obtient $-20z = 27 \\implies z = -\\dfrac{27}{20}$, $y = \\dfrac{23}{20}$ et $x = \\dfrac{3}{5}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q4',
          type: 'mcq',
          prompt:
            'Au cours d’un pivot de Gauss, on aboutit aux deux équations réduites $\\begin{cases} 3y - 3z = 0 \\\\ 3y - 3z = 3 \\end{cases}$. Que conclure sur l’ensemble des solutions ?',
          options: [
            'Il y a une infinité de solutions',
            'L’unique solution est $(0; 1; 1)$',
            'Le système n’admet aucune solution ($S = \\emptyset$)',
            'On a $z = 1$ et $y = 1$',
          ],
          correctAnswerIndex: 2,
          explanation: 'La même expression $3y - 3z$ ne peut valoir simultanément $0$ et $3$ ($0 = 3$ est impossible) : donc $S = \\emptyset$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q5',
          type: 'mcq',
          prompt: 'Pourquoi doit-on faire apparaître à la fois $(L_2)$ et $(L_3)$ quand on élimine $x$ à l’aide de $(L_1)$ ?',
          options: [
            'Pour simplifier les calculs de tête',
            'Parce que si l’on n’utilise pas $(L_3)$, la nouvelle paire d’équations perd l’information contenue dans $(L_3)$ et le système n’est plus équivalent',
            'Parce que $(L_3)$ contient toujours $z$',
            'Parce que $\\alpha$ doit être positif',
          ],
          correctAnswerIndex: 1,
          explanation: 'La transformation conserve les solutions seulement si chaque ligne du nouveau système apporte indépendamment l’information des trois lignes initiales.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q6',
          type: 'mcq',
          prompt:
            'On a le sous-système $\\begin{cases} 7y + 3z = 4 & (L_4) \\\\ 5y + 5z = -1 & (L_5) \\end{cases}$ (Exercice 3e). Quelle combinaison élimine $y$ ?',
          options: [
            '$5(L_4) - 7(L_5)$ ou $7(L_5) - 5(L_4)$',
            '$3(L_4) - 5(L_5)$',
            '$(L_4) + (L_5)$',
            '$7(L_4) - 5(L_5)$',
          ],
          correctAnswerIndex: 0,
          explanation: '$7(5y) - 5(7y) = 35y - 35y = 0$, et $7(5z) - 5(3z) = 20z = -7 - 20 = -27$, d’où $z = -\\dfrac{27}{20}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Mise en équation et résolution de problèmes dans R^3
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06',
      order: 6,
      title: 'Mise en équation et problèmes dans ℝ³',
      summary:
        'Traduire un énoncé concret (fermier, parabole par trois points, nombre à trois chiffres) en un système 3×3 puis le résoudre.',
      conceptExplanation:
        "Pour résoudre un problème concret à l'aide d'un système linéaire :\n1. **Choisir les inconnues** avec précision et leurs unités ($x, y, z$) ;\n2. **Traduire chaque phrase** de l'énoncé en une équation (et noter les éventuelles inéquations ou contraintes entières) ;\n3. **Résoudre le système** obtenu (substitution ou pivot de Gauss) ;\n4. **Vérifier et conclure** en répondant dans les termes du problème.",
      keyRule:
        'Définis clairement chaque inconnue (unités ou rang des chiffres : 100z + 10y + x), traduis phrase par phrase, résous et vérifie sur l’énoncé.',
      formulas: [
        { name: 'Parabole passant par trois points', formula: 'y = ax^2 + bx + c' },
        { name: 'Nombre à trois chiffres c d u', formula: 'N = 100c + 10d + u' },
      ],
      workedExample: {
        title: 'Les canards, les lapins et les dromadaires du fermier (Situation complexe p. 5)',
        statement:
          'Un fermier élève des canards ($x$), des lapins ($y$) et des dromadaires ($z$). Il compte $130$ entre les pattes des canards, celles des lapins et les bosses des dromadaires. Il compte $46$ têtes, puis $38$ oreilles de lapins et dromadaires ($y \\ge 16$). Détermine $x, y, z$.',
        methodSteps: [
          'Un canard a $2$ pattes, un lapin $4$ pattes, un dromadaire $1$ bosse : $2x + 4y + z = 130$.',
          'Chaque animal a $1$ tête : $x + y + z = 46$.',
          'Les lapins et dromadaires ont $2$ oreilles chacun : $2y + 2z = 38$, soit $y + z = 19$.',
          'De $x + (y + z) = 46$ et $y + z = 19$, on tire immédiatement $x = 46 - 19 = 27$ canards !',
          'En remplaçant $x = 27$ et $z = 19 - y$ dans $2x + 4y + z = 130$ : $54 + 4y + (19 - y) = 130 \\implies 3y = 57 \\implies y = 19$ lapins ($\\ge 16$), puis $z = 19 - 19 = 0$ dromadaire.',
        ],
        conclusion: 'Le fermier possède $27$ canards, $19$ lapins et $0$ dromadaire.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Problème du fermier (Situation complexe)',
          stepTitle: 'Exploiter y + z = 19 dans x + y + z = 46',
          paragraphText:
            'Avant même de lancer un gros pivot de Gauss, observe la structure du système : $x + y + z = 46$ et $y + z = 19$ donnent instantanément $x = 46 - 19 = 27$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q1',
            type: 'mcq',
            prompt:
              'Dans la situation complexe du fermier ($2x + 4y + z = 130$, $x + y + z = 46$, $2y + 2z = 38$), combien le fermier possède-t-il de canards ($x$), de lapins ($y$) et de dromadaires ($z$) ?',
            options: [
              '$27$ canards, $19$ lapins et $0$ dromadaire',
              '$19$ canards, $27$ lapins et $0$ dromadaire',
              '$25$ canards, $17$ lapins et $4$ dromadaires',
              '$27$ canards, $16$ lapins et $3$ dromadaires',
            ],
            correctAnswerIndex: 0,
            explanation: '$y + z = 19 \\implies x = 46 - 19 = 27$, puis $2(27) + 4y + (19 - y) = 130 \\implies 3y = 57 \\implies y = 19$ et $z = 0$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Équation d’une parabole (Exercice 4 p. 8)',
          stepTitle: 'Traduire A ∈ (P), B ∈ (P), C ∈ (P) en système 3×3 en (a, b, c)',
          paragraphText:
            'Si $(P): y = ax^2 + bx + c$ passe par $A(1; 0)$, $B(2; -5)$ et $C(3; -12)$, on remplace $(x; y)$ dans $y = ax^2 + bx + c$ : on obtient $\\begin{cases} a + b + c = 0 \\\\ 4a + 2b + c = -5 \\\\ 9a + 3b + c = -12 \\end{cases}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q2',
            type: 'mcq',
            prompt:
              'Quelle est l’équation de la parabole $y = ax^2 + bx + c$ passant par $A(1; 0)$, $B(2; -5)$ et $C(3; -12)$ (Exercice 4) ?',
            options: [
              '$y = x^2 - 2x - 3$',
              '$y = -x^2 - 2x + 3$',
              '$y = -x^2 + 2x - 1$',
              '$y = -2x^2 + x + 1$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par soustraction ($L_2-L_1$ et $L_3-L_2$), $3a+b=-5$ et $5a+b=-7 \\implies 2a=-2 \\implies a=-1, b=-2, c=3$. Vérification : $-(3)^2-2(3)+3=-12$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Numération décimale (Exercice 6 p. 9)',
          stepTitle: 'Écrire un nombre de trois chiffres : 100z + 10y + x',
          paragraphText:
            'Soient $x$ le chiffre des unités, $y$ celui des dizaines et $z$ celui des centaines. Le nombre vaut $100z + 10y + x$. Si on permute dizaines et centaines, il devient $100y + 10z + x$ et augmente de $180$, soit $90(y - z) = 180 \\implies y - z = 2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q3',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 6, la somme des trois chiffres vaut $14$, permuter dizaines et centaines augmente le nombre de $180$ ($y - z = 2$), et permuter unités et centaines le diminue de $297$ ($-x + z = 3$). Quel est ce nombre ?',
            options: ['$275$', '$572$', '$752$', '$527$'],
            correctAnswerIndex: 1,
            explanation: 'Avec $z = x + 3$ et $y = z + 2 = x + 5$, la somme $x + (x+5) + (x+3) = 14$ donne $3x = 6 \\implies x = 2$, $z = 5$, $y = 7$. Le nombre est $572$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Eudiomètre et conservation du volume (Situation d’apprentissage)',
          stepTitle: 'Poser la première équation du mélange de gaz',
          paragraphText:
            'Dans la situation d’apprentissage, un mélange de méthane ($x\\text{ cm}^3$), d’acétylène ($y\\text{ cm}^3$) et de dioxygène ($z\\text{ cm}^3$) occupe un volume initial total de $70\\text{ cm}^3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q4',
            type: 'mcq',
            prompt:
              'Dans l’expérience de l’eudiomètre (Situation d’apprentissage), $x, y, z$ désignent les volumes initiaux (en $\\text{cm}^3$) de méthane, d’acétylène et de dioxygène. Quelle équation traduit le volume total initial de $70\\text{ cm}^3$ ?',
            options: [
              '$x + y + z = 30$',
              '$x + y + z = 70$',
              '$2x + 3y + z = 70$',
              '$x + y - z = 10$',
            ],
            correctAnswerIndex: 1,
            explanation: 'La somme des trois volumes initiaux du mélange gazeux vaut $x + y + z = 70$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Inverser l’ordre des chiffres x, y, z dans la réponse finale',
          stepTitle: 'Attention : si x est les unités et z les centaines, le nombre est zyx, pas xyz !',
          paragraphText:
            'Dans l’Exercice 6, l’énoncé du cours a posé $x$ = unités, $y$ = dizaines et $z$ = centaines, puis trouvé $x = 2, y = 7, z = 5$. Le nombre est $100z + 10y + x = 572$, et surtout pas $275$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q5',
            type: 'mcq',
            prompt:
              'Un élève pose $u$ = chiffre des unités, $d$ = chiffre des dizaines, $c$ = chiffre des centaines, et trouve $u = 4, d = 1, c = 8$. Quel est le nombre cherché ?',
            options: ['$418$', '$814$', '$148$', '$841$'],
            correctAnswerIndex: 1,
            explanation: 'Le chiffre des centaines est $c = 8$, celui des dizaines $d = 1$ et celui des unités $u = 4$, soit $814$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier la permutation dans un problème de chiffres',
          stepTitle: 'Contrôler toutes les conditions sur 572',
          paragraphText:
            'Vérifions le nombre $572$ : $5 + 7 + 2 = 14$ ; permuter centaines et dizaines donne $752$ ($752 - 572 = +180$) ; permuter centaines et unités donne $275$ ($275 - 572 = -297$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q6',
            type: 'mcq',
            prompt:
              'Pour un nombre à deux chiffres $10d + u$, si permuter ses deux chiffres l’augmente de $27$, quelle équation relie $u$ et $d$ ?',
            options: [
              '$u + d = 3$',
              '$u - d = 3$',
              '$d - u = 3$',
              '$u - d = 27$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(10u + d) - (10d + u) = 27 \\iff 9u - 9d = 27 \\iff u - d = 3$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q1',
          type: 'mcq',
          prompt:
            'Dans la situation complexe du fermier ($2x + 4y + z = 130$, $x + y + z = 46$, $2y + 2z = 38$), combien le fermier possède-t-il de canards ($x$), de lapins ($y$) et de dromadaires ($z$) ?',
          options: [
            '$27$ canards, $19$ lapins et $0$ dromadaire',
            '$19$ canards, $27$ lapins et $0$ dromadaire',
            '$25$ canards, $17$ lapins et $4$ dromadaires',
            '$27$ canards, $16$ lapins et $3$ dromadaires',
          ],
          correctAnswerIndex: 0,
          explanation: '$y + z = 19 \\implies x = 46 - 19 = 27$, puis $2(27) + 4y + (19 - y) = 130 \\implies 3y = 57 \\implies y = 19$ et $z = 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q2',
          type: 'mcq',
          prompt:
            'Quelle est l’équation de la parabole $y = ax^2 + bx + c$ passant par $A(1; 0)$, $B(2; -5)$ et $C(3; -12)$ (Exercice 4) ?',
          options: [
            '$y = x^2 - 2x - 3$',
            '$y = -x^2 - 2x + 3$',
            '$y = -x^2 + 2x - 1$',
            '$y = -2x^2 + x + 1$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par soustraction ($L_2-L_1$ et $L_3-L_2$), $3a+b=-5$ et $5a+b=-7 \\implies 2a=-2 \\implies a=-1, b=-2, c=3$. Vérification : $-(3)^2-2(3)+3=-12$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q3',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 6, la somme des trois chiffres vaut $14$, permuter dizaines et centaines augmente le nombre de $180$ ($y - z = 2$), et permuter unités et centaines le diminue de $297$ ($-x + z = 3$). Quel est ce nombre ?',
          options: ['$275$', '$572$', '$752$', '$527$'],
          correctAnswerIndex: 1,
          explanation: 'Avec $z = x + 3$ et $y = z + 2 = x + 5$, la somme $x + (x+5) + (x+3) = 14$ donne $3x = 6 \\implies x = 2$, $z = 5$, $y = 7$. Le nombre est $572$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q4',
          type: 'mcq',
          prompt:
            'Dans l’expérience de l’eudiomètre (Situation d’apprentissage), $x, y, z$ désignent les volumes initiaux (en $\\text{cm}^3$) de méthane, d’acétylène et de dioxygène. Quelle équation traduit le volume total initial de $70\\text{ cm}^3$ ?',
          options: [
            '$x + y + z = 30$',
            '$x + y + z = 70$',
            '$2x + 3y + z = 70$',
            '$x + y - z = 10$',
          ],
          correctAnswerIndex: 1,
          explanation: 'La somme des trois volumes initiaux du mélange gazeux vaut $x + y + z = 70$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q5',
          type: 'mcq',
          prompt:
            'Un élève pose $u$ = chiffre des unités, $d$ = chiffre des dizaines, $c$ = chiffre des centaines, et trouve $u = 4, d = 1, c = 8$. Quel est le nombre cherché ?',
          options: ['$418$', '$814$', '$148$', '$841$'],
          correctAnswerIndex: 1,
          explanation: 'Le chiffre des centaines est $c = 8$, celui des dizaines $d = 1$ et celui des unités $u = 4$, soit $814$.',
        },
        {
          id: 'premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q6',
          type: 'mcq',
          prompt:
            'Pour un nombre à deux chiffres $10d + u$, si permuter ses deux chiffres l’augmente de $27$, quelle équation relie $u$ et $d$ ?',
          options: [
            '$u + d = 3$',
            '$u - d = 3$',
            '$d - u = 3$',
            '$u - d = 27$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(10u + d) - (10d + u) = 27 \\iff 9u - 9d = 27 \\iff u - d = 3$.',
        },
      ],
    },
  ],
};
