import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Comparer deux placements financiers : intérêts simples vs intérêts composés',
    paragraphText:
      'Au $1^\\text{er}$ janvier 2021, la promotion place $300\\,000\\text{ F CFA}$ avec l’objectif d’atteindre $400\\,000\\text{ F CFA}$ avant août 2022 ($19$ mois). Option 1 ($+2500\\text{ F}$ par mois) : suite arithmétique $u_n = 300\\,000 + 2500n$, qui atteint $400\\,000$ en $n = 40$ mois (trop tard !). Option 2 ($+5\\%$ par mois) : suite géométrique $v_n = 300\\,000 \\times (1{,}05)^n$, qui atteint $400\\,000$ dès $(1{,}05)^n \\geqslant \\frac{4}{3} \\iff n \\geqslant \\frac{\\ln(4/3)}{\\ln(1{,}05)} \\approx 5{,}89$, soit $6$ mois ! L’option 2 est nettement plus avantageuse.',
    formula: {
      name: 'Comparaison arithmétique vs géométrique',
      formula: 'u_n = 300\\,000 + 2500n \\;(n=40) \\qquad \\text{vs} \\qquad v_n = 300\\,000\\times 1{,}05^n \\;(n=6)',
    },
    konanTip: 'Une croissance arithmétique ajoute un montant constant ; une croissance géométrique (pourcentage fixe) multiplie par une constante $q$ et explose beaucoup plus vite !',
    exercise: {
      id: 'tc_m_num_l12_p01_q01',
      type: 'mcq',
      prompt: 'Avec l’Option 2 ($+5\\%$ par mois sur $300\\,000\\text{ F CFA}$), au bout de combien de mois entiers dépasse-t-on l’objectif de $400\\,000\\text{ F CFA}$ ?',
      options: [
        '$40$ mois',
        '$6$ mois (dès le $6^\\text{e}$ mois)',
        '$19$ mois',
        '$5$ mois',
      ],
      correctAnswerIndex: 1,
      explanation: '$v_5 = 300\\,000 \\times 1{,}05^5 \\approx 382\\,884 < 400\\,000$, et $v_6 = 300\\,000 \\times 1{,}05^6 \\approx 402\\,029 \\geqslant 400\\,000$ : l’objectif est atteint dès le $6^\\text{e}$ mois !',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Suites arithmétiques',
    stepTheme: 'blue',
    stepTitle: 'Suite arithmétique : récurrence $u_{n+1} = u_n + r$ et terme général',
    paragraphText:
      'Une suite $(u_n)$ est arithmétique de raison $r \\in \\mathbb{R}$ lorsque pour tout $n$, $u_{n+1} = u_n + r$. Son terme général s’exprime explicitement par $u_n = u_0 + nr$, et plus généralement pour tous entiers naturels $n$ et $p$ : $u_n = u_p + (n - p)r$. Par exemple, si $r = 2$ et $u_3 = -5$, alors $u_n = -5 + 2(n - 3) = 2n - 11$.',
    formula: {
      name: 'Formules suite arithmétique',
      formula: 'u_{n+1} = u_n + r \\qquad \\Longleftrightarrow \\qquad u_n = u_p + (n - p)r',
    },
    exercise: {
      id: 'tc_m_num_l12_p01_q02',
      type: 'mcq',
      prompt: 'Si $(u_n)$ est arithmétique de raison $-3$ avec $u_2 = 7$, quelle est l’expression explicite de $u_n$ et que vaut $u_{20}$ ?',
      options: [
        '$u_n = -3n + 7$ et $u_{20} = -53$',
        '$u_n = -3n + 13$ et $u_{20} = -47$',
        '$u_n = -3n + 10$ et $u_{20} = -50$',
        '$u_n = 7 \\cdot (-3)^{n-2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$u_n = (n - 2)(-3) + 7 = -3n + 13$. Pour $n = 20$, $u_{20} = -60 + 13 = -47$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Suites géométriques',
    stepTheme: 'blue',
    stepTitle: 'Suite géométrique : récurrence $v_{n+1} = q v_n$ et terme général',
    paragraphText:
      'Une suite $(v_n)$ est géométrique de raison $q \\in \\mathbb{R}$ lorsque pour tout $n$, $v_{n+1} = q v_n$. Son terme général s’écrit $v_n = v_0 q^n$, et plus généralement pour tous $n$ et $p$ : $v_n = v_p q^{n - p}$ (attention aux coquilles d’indice : l’exposant est bien $n - p$, pas $n + 1$ !). Exemple : si $q = -\\frac{3}{2}$ et $v_4 = 16$, alors $v_n = 16\\left(-\\frac{3}{2}\\right)^{n - 4}$.',
    formula: {
      name: 'Formules suite géométrique',
      formula: 'v_{n+1} = q v_n \\qquad \\Longleftrightarrow \\qquad v_n = v_p\\, q^{n - p}',
    },
    exercise: {
      id: 'tc_m_num_l12_p01_q03',
      type: 'mcq',
      prompt: 'Soit $(v_n)$ une suite géométrique de raison $-2$ telle que $v_4 = 16$. Que vaut $v_2$ ?',
      options: [
        '$v_2 = 64$',
        '$v_2 = 4$',
        '$v_2 = -4$',
        '$v_2 = 8$',
      ],
      correctAnswerIndex: 1,
      explanation: '$v_2 = v_4 \\times (-2)^{2 - 4} = 16 \\times (-2)^{-2} = 16 \\times \\frac{1}{4} = 4$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Sommes de termes',
    stepTheme: 'violet',
    stepTitle: 'Somme de termes consécutifs d’une suite arithmétique ou géométrique',
    paragraphText:
      'Pour une suite arithmétique (avec $n \\geqslant p$, soit $n - p + 1$ termes) : $u_p + \\dots + u_n = (n - p + 1)\\frac{u_p + u_n}{2}$ (nombre de termes $\\times$ moyenne des extrêmes). Pour une suite géométrique de raison $q \\ne 1$ : $v_p + \\dots + v_n = v_p \\times \\frac{1 - q^{n - p + 1}}{1 - q}$ (premier terme $\\times \\frac{1 - q^{\\text{nb termes}}}{1 - q}$).',
    formula: {
      name: 'Sommes consécutives (n ≥ p)',
      formula: '\\sum_{k=p}^n u_k = (n - p + 1)\\frac{u_p + u_n}{2} \\qquad ; \\qquad \\sum_{k=p}^n v_k = v_p\\frac{1 - q^{n - p + 1}}{1 - q} \\; (q \\ne 1)',
    },
    exercise: {
      id: 'tc_m_num_l12_p01_q04',
      type: 'mcq',
      prompt: 'Calculer $u_0 + u_1 + \\dots + u_{20}$ pour la suite arithmétique de raison $-3$ avec $u_2 = 7$ ($u_0 = 13$ et $u_{20} = -47$).',
      options: [
        '$-340$',
        '$-357$',
        '$-714$',
        '$357$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Il y a $20 - 0 + 1 = 21$ termes : $S = 21 \\times \\frac{13 + (-47)}{2} = 21 \\times (-17) = -357$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Somme géométrique',
    stepTheme: 'blue',
    stepTitle: 'Calculer $v_2 + v_3 + \\dots + v_{21}$ pour $q = -2$ et $v_4 = 16$',
    paragraphText:
      'Nombre de termes de $v_2$ à $v_{21}$ : $21 - 2 + 1 = 20$ termes. Le premier terme de la somme est $v_2 = 4$. On applique la formule : $S = 4 \\times \\frac{1 - (-2)^{20}}{1 - (-2)} = \\frac{4}{3}(1 - 2^{20})$ (car $(-2)^{20} = 2^{20}$ puisque $20$ est pair).',
    exercise: {
      id: 'tc_m_num_l12_p01_q05',
      type: 'mcq',
      prompt: 'Combien de termes contient la somme $v_2 + v_3 + \\dots + v_{21}$ et que vaut-elle pour $v_2 = 4$ et $q = -2$ ?',
      options: [
        '$19$ termes, somme $\\frac{4}{3}(1 + 2^{19})$',
        '$20$ termes, somme $\\frac{4}{3}(1 - 2^{20})$',
        '$21$ termes, somme $\\frac{4}{3}(1 + 2^{21})$',
        '$20$ termes, somme $4(1 - 2^{20})$',
      ],
      correctAnswerIndex: 1,
      explanation: '$21 - 2 + 1 = 20$ termes, donc $S = 4 \\cdot \\frac{1 - (-2)^{20}}{1 - (-2)} = \\frac{4}{3}(1 - 2^{20})$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Compter les termes !',
    stepTheme: 'orange',
    stepTitle: 'De l’indice $p$ à l’indice $n$, il y a $n - p + 1$ termes (pas $n - p$ !)',
    paragraphText:
      'Erreur classique : oublier le « $+1$ » dans le nombre de termes ! De $u_0$ à $u_n$, il y a $n + 1$ termes ; de $u_2$ à $u_{21}$, il y a $21 - 2 + 1 = 20$ termes. De plus, lorsque $q = 1$, la formule $\\frac{1 - q^N}{1 - q}$ est interdite : la somme de $N$ termes égaux à $v_p$ vaut simplement $N v_p$ !',
    exercise: {
      id: 'tc_m_num_l12_p01_q06',
      type: 'mcq',
      prompt: 'Combien de termes additionne-t-on dans la somme $S = u_5 + u_6 + \\dots + u_{18}$ ?',
      options: [
        '$13$ termes',
        '$14$ termes',
        '$15$ termes',
        '$18$ termes',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le nombre d’entiers de $5$ à $18$ inclus est $18 - 5 + 1 = 14$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Nature d’une suite',
    stepTheme: 'slate',
    stepTitle: 'Comment prouver qu’une suite est arithmétique ou géométrique ?',
    paragraphText:
      'Pour prouver que $(u_n)$ est arithmétique, calcule $u_{n+1} - u_n$ pour tout $n$ et montre qu’il est égal à une constante $r$ indépendante de $n$. Pour prouver que $(v_n)$ est géométrique, exprime $v_{n+1}$ en fonction de $v_n$ sous la forme $v_{n+1} = q v_n$ avec $q$ indépendant de $n$ (préférable à $\\frac{v_{n+1}}{v_n}$ si $v_n$ risque de s’annuler).',
    exercise: {
      id: 'tc_m_num_l12_p01_q07',
      type: 'mcq',
      prompt: 'On pose $v_n = u_n - 6$ avec $u_{n+1} = \\frac{1}{2}u_n + 3$. Quelle est la nature de la suite $(v_n)$ ?',
      options: [
        'Arithmétique de raison $3$',
        'Géométrique de raison $\\frac{1}{2}$ (car $v_{n+1} = \\frac{1}{2}v_n$)',
        'Ni arithmétique ni géométrique',
        'Constante',
      ],
      correctAnswerIndex: 1,
      explanation: '$v_{n+1} = u_{n+1} - 6 = \\frac{1}{2}u_n + 3 - 6 = \\frac{1}{2}(u_n - 6) = \\frac{1}{2}v_n$ : $(v_n)$ est géométrique de raison $\\frac{1}{2}$ !',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Principe de récurrence',
    stepTheme: 'blue',
    stepTitle: 'À quoi sert le raisonnement par récurrence et quelles sont ses $3$ étapes ?',
    paragraphText:
      'Le raisonnement par récurrence sert à démontrer qu’une propriété $P(n)$ dépendant d’un entier naturel $n$ est vraie pour TOUT $n \\geqslant n_0$. Il comporte obligatoirement trois étapes : 1) Initialisation : vérifier $P(n_0)$ ; 2) Hérédité : fixer un entier $k \\geqslant n_0$, SUPPOSER $P(k)$ vraie (hypothèse de récurrence), et DÉMONTRER $P(k+1)$ ; 3) Conclusion : conclure que $\\forall n \\geqslant n_0,\\; P(n)$ est vraie.',
    formula: {
      name: 'Schéma de récurrence',
      formula: 'P(n_0) \\text{ vraie} \\quad \\text{et} \\quad \\forall k \\geqslant n_0,\\; (P(k) \\implies P(k+1)) \\quad \\Longrightarrow \\quad \\forall n \\geqslant n_0,\\; P(n)',
    },
    exercise: {
      id: 'tc_m_num_l12_p02_q01',
      type: 'mcq',
      prompt: 'Dans l’étape d’hérédité d’une récurrence sur $P(n)$ pour $n \\geqslant n_0$, que suppose-t-on et que démontre-t-on ?',
      options: [
        'On suppose que $P(n)$ est vraie pour tout $n \\geqslant n_0$',
        'On fixe un entier $k \\geqslant n_0$, on suppose $P(k)$ vraie, et on démontre $P(k + 1)$',
        'On vérifie seulement $P(0)$ et $P(1)$',
        'On suppose $P(k + 1)$ vraie pour prouver $P(k)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’hérédité ne suppose JAMAIS « pour tout $n$ » (ce serait supposer ce qu’on veut prouver !) : on fixe UN entier $k \\geqslant n_0$, on suppose $P(k)$, et on établit $P(k + 1)$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Exercice du cours',
    stepTheme: 'blue',
    stepTitle: 'Prouver par récurrence que $\\forall n \\in \\mathbb{N},\\; u_n < 6$ pour $u_{n+1} = \\frac{1}{2}u_n + 3$',
    paragraphText:
      'Soit $(u_n)$ définie par $u_0 = -1$ et $u_{n+1} = \\frac{1}{2}u_n + 3$. Initialisation ($n = 0$) : $u_0 = -1 < 6$, donc $P(0)$ est vraie. Hérédité : soit $k \\geqslant 0$ tel que $u_k < 6$. En multipliant par $\\frac{1}{2} > 0$, on a $\\frac{1}{2}u_k < 3$, puis en ajoutant $3$, $\\frac{1}{2}u_k + 3 < 3 + 3 = 6$, c’est-à-dire $u_{k+1} < 6$ ! Conclusion : $\\forall n \\in \\mathbb{N},\\; u_n < 6$.',
    exercise: {
      id: 'tc_m_num_l12_p02_q02',
      type: 'mcq',
      prompt: 'Dans cette démonstration ($u_0 = -1$, $u_{n+1} = \\frac{1}{2}u_n + 3$), comment passe-t-on de $u_k < 6$ à $u_{k+1} < 6$ ?',
      options: [
        'En ajoutant $3$ puis en divisant par $2$',
        'En multipliant par $\\frac{1}{2} > 0$ ($\\frac{1}{2}u_k < 3$) puis en ajoutant $3$ ($\\frac{1}{2}u_k + 3 < 6$)',
        'En posant $u_k = 6$',
        'C’est vrai seulement si $u_0 > 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On construit exactement l’expression de $u_{k+1}$ à partir de $u_k < 6$ en conservant le sens des inégalités.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Inégalités & Monotonie',
    stepTheme: 'emerald',
    stepTitle: 'Utiliser la récurrence pour minorer, majorer ou étudier le sens de variation',
    paragraphText:
      'On utilise aussi la récurrence pour montrer qu’une suite définie par $u_{n+1} = f(u_n)$ est croissante ($u_n \\leqslant u_{n+1}$) ou décroissante ($u_{n+1} \\leqslant u_n$) lorsque $f$ est croissante sur l’intervalle étudié : si $u_k \\leqslant u_{k+1}$ et $f$ est croissante, alors $f(u_k) \\leqslant f(u_{k+1})$, soit $u_{k+1} \\leqslant u_{k+2}$ ! Il faut toutefois initialiser en comparant $u_0$ et $u_1$.',
    exercise: {
      id: 'tc_m_num_l12_p02_q03',
      type: 'mcq',
      prompt: 'Soit $u_{n+1} = \\sqrt{u_n + 2}$ avec $u_0 = 0$. Pourquoi l’inégalité $u_0 \\leqslant u_1$ jointe à la croissance de $x \\mapsto \\sqrt{x + 2}$ prouve-t-elle par récurrence que $(u_n)$ est croissante ?',
      options: [
        'Parce que toute suite positive est croissante',
        'Parce que $u_k \\leqslant u_{k+1} \\implies \\sqrt{u_k + 2} \\leqslant \\sqrt{u_{k+1} + 2}$, soit $u_{k+1} \\leqslant u_{k+2}$',
        'Parce que $\\sqrt{2} > 1$',
        'Parce que $u_n$ est bornée',
      ],
      correctAnswerIndex: 1,
      explanation: 'Initialisation : $u_0 = 0 \\leqslant u_1 = \\sqrt{2}$. Hérédité : la fonction $f(x) = \\sqrt{x+2}$ est croissante sur $[-2 ; +\\infty[$, donc $u_k \\leqslant u_{k+1} \\implies f(u_k) \\leqslant f(u_{k+1})$, soit $u_{k+1} \\leqslant u_{k+2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Sommes & Divisibilité',
    stepTheme: 'blue',
    stepTitle: 'Récurrence pour une formule explicite de somme ou une divisibilité',
    paragraphText:
      'La récurrence permet aussi de prouver des identités de sommes ($\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$) ou des propriétés d’arithmétique ($4^n - 1$ multiple de $3$). À l’hérédité, on sépare le dernier terme : $\\sum_{i=1}^{k+1} i = \\left(\\sum_{i=1}^k i\\right) + (k+1)$, puis on applique l’hypothèse de récurrence.',
    exercise: {
      id: 'tc_m_num_l12_p02_q04',
      type: 'mcq',
      prompt: 'Lors de l’hérédité pour prouver $\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}$, par quoi remplace-t-on $\\sum_{i=1}^{k+1} i^2$ ?',
      options: [
        '$\\frac{(k+1)(k+2)(2k+3)}{6}$ directement sans calcul',
        '$\\frac{k(k+1)(2k+1)}{6} + (k+1)^2$',
        '$\\frac{k(k+1)(2k+1)}{6} + k^2$',
        '$(k+1)^2 - k^2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On écrit $\\sum_{i=1}^{k+1} i^2 = \\left(\\sum_{i=1}^k i^2\\right) + (k+1)^2$, on remplace la somme jusqu’à $k$ par l’hypothèse de récurrence $\\frac{k(k+1)(2k+1)}{6}$, puis on factorise par $\\frac{k+1}{6}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Les 2 erreurs fatales',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais omettre l’initialisation (attention à $P(n)$ héréditaire mais fausse !)',
    paragraphText:
      'Piège classique : la propriété « $4^n + 1$ est divisible par $3$ » est HÉRÉDITAIRE ($4^{k+1} + 1 = 4(4^k + 1) - 3$), mais elle est FAUSSE pour tout $n$ car l’initialisation en $n = 0$ échoue ($4^0 + 1 = 2$ n’est pas divisible par $3$) ! Sans initialisation vérifiée, l’hérédité seule ne prouve rien.',
    exercise: {
      id: 'tc_m_num_l12_p02_q05',
      type: 'mcq',
      prompt: 'Pourquoi l’énoncé « Soit $k \\in \\mathbb{N}$, supposons $4^k + 1$ multiple de $3$, alors $4^{k+1} + 1 = 4(4^k + 1) - 3$ est multiple de $3$ » NE prouve-t-il PAS que $4^n + 1$ est multiple de $3$ ?',
      options: [
        'Parce que le calcul d’hérédité est faux',
        'Parce que l’initialisation est fausse ($4^0 + 1 = 2$ et $4^1 + 1 = 5$ ne sont pas multiples de $3$)',
        'Parce qu’on n’a pas divisé par $4$',
        'Parce que $n$ doit être pair',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’hérédité seule dit « SI c’est vrai en $k$, alors en $k+1$ » : comme l’initialisation n’est vraie pour aucun $n_0$, la chaîne ne démarre jamais !',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 8 (Q1)',
    stepTheme: 'blue',
    stepTitle: 'Prouver par récurrence que $v_n - u_n > 0$ (suites couplées)',
    paragraphText:
      'Soient $a \\in ]\\frac{1}{2} ; 1[$, $u_0 = 2$, $v_0 = 3$, $u_{n+1} = a u_n + (1 - a) v_n$ et $v_{n+1} = (1 - a) u_n + a v_n$. Initialisation : $v_0 - u_0 = 3 - 2 = 1 > 0$. Hérédité : $v_{k+1} - u_{k+1} = (1 - 2a)u_k + (2a - 1)v_k = (2a - 1)(v_k - u_k)$. Comme $a \\in ]\\frac{1}{2} ; 1[$, $2a - 1 > 0$, et par hypothèse de récurrence $v_k - u_k > 0$, donc $v_{k+1} - u_{k+1} > 0$.',
    exercise: {
      id: 'tc_m_num_l12_p02_q06',
      type: 'mcq',
      prompt: 'Sachant que $a \\in ]\\frac{1}{2} ; 1[$, quel est l’encadrement de $2a - 1$ utilisé dans $v_{k+1} - u_{k+1} = (2a - 1)(v_k - u_k)$ ?',
      options: [
        '$-1 < 2a - 1 < 0$',
        '$0 < 2a - 1 < 1$',
        '$1 < 2a - 1 < 2$',
        '$2a - 1 > 1$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{1}{2} < a < 1 \\iff 1 < 2a < 2 \\iff 0 < 2a - 1 < 1$. Ainsi $2a - 1 > 0$ préserve le signe strictement positif de $v_k - u_k$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Initialisation à n₀ > 0',
    stepTheme: 'slate',
    stepTitle: 'Adapter le rang initial $n_0$ quand la propriété ne démarre qu’à partir d’un seuil',
    paragraphText:
      'Certaines propriétés ne sont vraies qu’à partir de $n_0 = 2$ ou $n_0 = 4$ (par exemple $2^n \\geqslant n^2$ est vrai en $0, 1, 2$, faux en $3$ puisque $8 < 9$, et vrai pour tout $n \\geqslant 4$ !). Dans ce cas, on initialise explicitement à $n_0 = 4$ et on prend $k \\geqslant 4$ dans l’hérédité.',
    exercise: {
      id: 'tc_m_num_l12_p02_q07',
      type: 'mcq',
      prompt: 'À partir de quel rang $n_0$ peut-on démontrer par récurrence que $2^n > n^2$ pour tout $n \\geqslant n_0$ ?',
      options: [
        '$n_0 = 2$',
        '$n_0 = 4$',
        '$n_0 = 5$',
        '$n_0 = 3$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Test : $n = 3 : 8 > 9$ (faux) ; $n = 4 : 16 > 16$ (faux pour l’inégalité stricte !) ; $n = 5 : 32 > 25$ (vrai !), et pour $k \\geqslant 5$, $2^{k+1} = 2\\cdot 2^k > 2k^2 > (k+1)^2$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Monotonie',
    stepTheme: 'blue',
    stepTitle: 'Suites croissantes, décroissantes, constantes et monotones',
    paragraphText:
      'Soit $(u_n)$ une suite définie sur une partie $E$ de $\\mathbb{N}$. Elle est : croissante si $\\forall n \\in E,\\; u_n \\leqslant u_{n+1}$ (strictement si $<$) ; décroissante si $\\forall n \\in E,\\; u_n \\geqslant u_{n+1}$ (strictement si $>$) ; constante si $\\forall n \\in E,\\; u_n = u_{n+1}$ ; monotone si elle est soit croissante, soit décroissante.',
    formula: {
      name: 'Caractérisations de la monotonie',
      formula: 'u_{n+1} - u_n \\geqslant 0 \\iff (u_n) \\text{ croissante} \\qquad ; \\qquad u_{n+1} - u_n \\leqslant 0 \\iff (u_n) \\text{ décroissante}',
    },
    exercise: {
      id: 'tc_m_num_l12_p03_q01',
      type: 'mcq',
      prompt: 'Étudier le sens de variation sur $\\mathbb{N}$ de la suite $w_n = n^2 + 3n$.',
      options: [
        'Décroissante car $w_{n+1} - w_n = -2n - 4 < 0$',
        'Strictement croissante car $w_{n+1} - w_n = 2n + 4 > 0$ pour tout $n \\in \\mathbb{N}$',
        'Non monotone',
        'Constante',
      ],
      correctAnswerIndex: 1,
      explanation: '$w_{n+1} - w_n = (n+1)^2 + 3(n+1) - (n^2 + 3n) = 2n + 4 > 0$ pour tout $n \\in \\mathbb{N}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Les 3 méthodes',
    stepTheme: 'emerald',
    stepTitle: 'Méthode du quotient $\\frac{u_{n+1}}{u_n}$ (quand $u_n > 0$) et méthode fonctionnelle $u_n = f(n)$',
    paragraphText:
      'En plus du signe de $u_{n+1} - u_n$, deux autres méthodes sont très rapides : 1) Si $\\forall n \\in E,\\; u_n > 0$, comparer $\\frac{u_{n+1}}{u_n}$ à $1$ ($\\geqslant 1 \\implies$ croissante ; $\\leqslant 1 \\implies$ décroissante) — idéal pour les exponentielles et factorielles, comme $v_n = e^{-2n+1}$ où $\\frac{v_{n+1}}{v_n} = e^{-2} < 1$. 2) Si $u_n = f(n)$, étudier les variations de $f$ sur $[n_0 ; +\\infty[$, comme $u_n = \\sqrt{\\ln n}$ ($n \\geqslant 2$) avec $f’(x) = \\frac{1}{2x\\sqrt{\\ln x}} > 0$.',
    exercise: {
      id: 'tc_m_num_l12_p03_q02',
      type: 'mcq',
      prompt: 'Quelle méthode donne le plus rapidement la décroissance de $v_n = e^{-2n + 1}$ sur $\\mathbb{N}$ ?',
      options: [
        'Calculer $\\frac{v_{n+1}}{v_n} = \\frac{e^{-2n-1}}{e^{-2n+1}} = e^{-2} < 1$ puisque $v_n > 0$',
        'Calculer $v_0$ et $v_1$ seulement',
        'Montrer que $v_n$ est bornée',
        'Utiliser le théorème de Gauss',
      ],
      correctAnswerIndex: 0,
      explanation: 'Tous les termes $v_n = e^{-2n+1}$ sont strictement positifs et $\\frac{v_{n+1}}{v_n} = e^{-2} < 1$, donc $v_{n+1} < v_n$ : $(v_n)$ est strictement décroissante.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Majorée, minorée, bornée',
    stepTheme: 'blue',
    stepTitle: 'Définitions de suite majorée, minorée et bornée',
    paragraphText:
      'Soit $(u_n)$ définie sur $E \\subset \\mathbb{N}$ : $(u_n)$ est MAJORÉE s’il existe $M \\in \\mathbb{R}$ tel que $\\forall n \\in E,\\; u_n \\leqslant M$ ; MINORÉE s’il existe $m \\in \\mathbb{R}$ tel que $\\forall n \\in E,\\; u_n \\geqslant m$ ; BORNÉE si elle est à la fois majorée et minorée (ou équivalemment $\\exists K \\geqslant 0,\\; \\forall n \\in E,\\; |u_n| \\leqslant K$).',
    formula: {
      name: 'Majoration / Minoration',
      formula: '(\\forall n \\in E,\\; m \\leqslant u_n \\leqslant M) \\iff (u_n) \\text{ bornée}',
    },
    exercise: {
      id: 'tc_m_num_l12_p03_q03',
      type: 'mcq',
      prompt: 'Parmi les $4$ affirmations suivantes sur une suite $(u_n)$ définie sur $\\mathbb{N}$, laquelle est VRAIE ?',
      options: [
        'Si $\\forall n \\in \\mathbb{N},\\; u_n < -3$, alors $(u_n)$ est minorée par $-3$',
        'S’il existe un entier $n$ tel que $u_n \\geqslant 0$, alors $(u_n)$ est minorée par $0$',
        'Si $\\forall n \\in \\mathbb{N},\\; u_n \\geqslant 2$, alors $(u_n)$ est majorée par $2$',
        'Si $\\forall n \\in \\mathbb{N},\\; |u_n| < 1$, alors $(u_n)$ est bornée',
      ],
      correctAnswerIndex: 3,
      explanation: '$|u_n| < 1 \\iff -1 < u_n < 1$ pour tout $n$, donc $(u_n)$ est minorée par $-1$ et majorée par $1$ : elle est bornée ! Les trois autres confondent majorant/minorant ou $\\forall$ et $\\exists$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Minoration par différence (Ex 5)',
    stepTheme: 'blue',
    stepTitle: 'Montrer que $u_n = \\frac{n + 3n^2}{1 + n^2}$ ($n \\in \\mathbb{N}^*$) est minorée par $2$',
    paragraphText:
      'Pour prouver $u_n \\geqslant m$, on étudie le signe de $u_n - m$. Ici : $u_n - 2 = \\frac{n + 3n^2 - 2(1 + n^2)}{1 + n^2} = \\frac{n^2 + n - 2}{1 + n^2} = \\frac{(n - 1)(n + 2)}{1 + n^2}$. Pour tout $n \\in \\mathbb{N}^*$, $n - 1 \\geqslant 0$, $n + 2 > 0$ et $1 + n^2 > 0$, donc $u_n - 2 \\geqslant 0$, soit $\\forall n \\in \\mathbb{N}^*,\\; u_n \\geqslant 2$.',
    exercise: {
      id: 'tc_m_num_l12_p03_q04',
      type: 'mcq',
      prompt: 'Pour $u_n = \\frac{n + 3n^2}{1 + n^2}$ ($n \\geqslant 1$), quelle factorisation prouve immédiatement que $u_n \\geqslant 2$ ?',
      options: [
        '$u_n - 2 = \\frac{(n + 1)(n - 2)}{1 + n^2}$',
        '$u_n - 2 = \\frac{(n - 1)(n + 2)}{1 + n^2} \\geqslant 0$ pour tout $n \\geqslant 1$',
        '$u_n - 2 = \\frac{n^2 + 2}{1 + n^2}$',
        '$u_n - 2 = \\frac{n - 1}{1 + n^2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$n^2 + n - 2 = (n - 1)(n + 2)$, qui est positif ou nul dès que $n \\geqslant 1$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Encadrement successif (Ex 6)',
    stepTheme: 'emerald',
    stepTitle: 'Montrer que $v_n = \\sqrt{4 - \\frac{2}{1 + n^2}}$ est bornée par $\\sqrt{2}$ et $2$',
    paragraphText:
      'Par encadrements successifs sur $\\mathbb{N}$ : $n^2 \\geqslant 0 \\implies 1 + n^2 \\geqslant 1 \\implies 0 < \\frac{1}{1 + n^2} \\leqslant 1 \\implies 0 < \\frac{2}{1 + n^2} \\leqslant 2 \\implies -2 \\leqslant -\\frac{2}{1 + n^2} < 0 \\implies 2 \\leqslant 4 - \\frac{2}{1 + n^2} < 4$. Comme la fonction $\\sqrt{\\phantom{x}}$ est croissante sur $[0 ; +\\infty[$, $\\sqrt{2} \\leqslant v_n < 2$ pour tout $n \\in \\mathbb{N}$.',
    exercise: {
      id: 'tc_m_num_l12_p03_q05',
      type: 'mcq',
      prompt: 'Quel encadrement exact vérifie $v_n = \\sqrt{4 - \\frac{2}{1 + n^2}}$ pour tout $n \\in \\mathbb{N}$ ?',
      options: [
        '$0 \\leqslant v_n \\leqslant 2$',
        '$\\sqrt{2} \\leqslant v_n < 2$',
        '$2 < v_n \\leqslant 4$',
        '$1 \\leqslant v_n \\leqslant \\sqrt{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le minimum est atteint en $n = 0$ ($v_0 = \\sqrt{4 - 2} = \\sqrt{2}$), et comme $\\frac{2}{1 + n^2} > 0$, on a strictement $4 - \\frac{2}{1 + n^2} < 4$, d’où $v_n < 2$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Pièges sur u_n = f(n) et quotient',
    stepTheme: 'orange',
    stepTitle: 'Attention : $\\frac{u_{n+1}}{u_n} \\geqslant 1$ exige $u_n > 0$ ; et $f$ décroissante vs suite non monotone',
    paragraphText:
      'Si certains termes $u_n$ sont NÉGATIFS (par exemple $u_n = -2^n$), on a $\\frac{u_{n+1}}{u_n} = 2 > 1$ alors que la suite est DÉCROISSANTE ($-2 > -4 > -8$) ! La méthode du quotient ne marche QUE lorsque $u_n > 0$ pour tout $n$. De plus, $(-1)^n$ n’est pas égale à $f(n)$ d’une fonction usuelle dérivable sur $[0 ; +\\infty[$ et oscille sans être monotone.',
    exercise: {
      id: 'tc_m_num_l12_p03_q06',
      type: 'mcq',
      prompt: 'Soit $u_n = -3 \\times 2^n$ ($n \\in \\mathbb{N}$). Quel est son sens de variation ?',
      options: [
        'Croissante car $\\frac{u_{n+1}}{u_n} = 2 > 1$',
        'Strictement décroissante car $u_{n+1} - u_n = -3 \\times 2^n < 0$',
        'Constante',
        'Croissante puis décroissante',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $u_n < 0$, diviser $u_{n+1} \\geqslant u_n$ par $u_n$ inverse l’inégalité ! Par différence, $u_{n+1} - u_n = -3\\cdot 2^{n+1} + 3\\cdot 2^n = -3\\cdot 2^n < 0$, donc $(u_n)$ est strictement décroissante.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Majoration télescopique (Ex 7)',
    stepTheme: 'slate',
    stepTitle: 'Majorer la somme $u_n = \\sum_{k=1}^n \\frac{1}{k^2}$ par téléscopage',
    paragraphText:
      'Pour $u_n = 1 + \\frac{1}{2^2} + \\dots + \\frac{1}{n^2}$ ($n \\geqslant 1$) : d’abord $u_{n+1} - u_n = \\frac{1}{(n+1)^2} > 0$, donc $(u_n)$ est strictement croissante. Ensuite, pour tout $k \\geqslant 2$, $k^2 > k(k-1) \\implies \\frac{1}{k^2} \\leqslant \\frac{1}{k(k-1)} = \\frac{1}{k-1} - \\frac{1}{k}$. En sommant de $k = 2$ à $n$, tous les termes intermédiaires s’annulent (téléscopage) : $u_n \\leqslant 1 + \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{n-1} - \\frac{1}{n}\\right) = 2 - \\frac{1}{n} < 2$ !',
    exercise: {
      id: 'tc_m_num_l12_p03_q07',
      type: 'mcq',
      prompt: 'À l’aide de l’inégalité $\\frac{1}{k^2} \\leqslant \\frac{1}{k-1} - \\frac{1}{k}$ pour $k \\geqslant 2$, que donne la somme téléscopique pour $u_n = \\sum_{k=1}^n \\frac{1}{k^2}$ ?',
      options: [
        '$u_n \\leqslant 1 - \\frac{1}{n}$',
        '$u_n \\leqslant 2 - \\frac{1}{n} < 2$',
        '$u_n \\leqslant 2 + \\frac{1}{n}$',
        '$u_n \\leqslant \\frac{\\pi^2}{6}$ par téléscopage élémentaire',
      ],
      correctAnswerIndex: 1,
      explanation: '$1 + (1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\dots + (\\frac{1}{n-1} - \\frac{1}{n}) = 1 + 1 - \\frac{1}{n} = 2 - \\frac{1}{n} < 2$. (Euler montrera plus tard que la limite exacte vaut $\\frac{\\pi^2}{6} \\approx 1{,}645 < 2$ !)',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Convergence & Divergence',
    stepTheme: 'blue',
    stepTitle: 'Suite convergente (limite finie unique) vs suite divergente',
    paragraphText:
      'On dit qu’une suite $(u_n)$ est CONVERGENTE lorsqu’elle admet une limite FINIE $l \\in \\mathbb{R}$ quand $n \\to +\\infty$ (et si elle admet une limite, cette limite est UNIQUE). Toute suite qui n’est pas convergente est dite DIVERGENTE : soit elle tend vers $+\\infty$ ou $-\\infty$ (comme $\\sqrt{n}$), soit elle n’admet aucune limite (comme $(-1)^n$ ou $\\cos n$ qui oscillent).',
    formula: {
      name: 'Critère de convergence',
      formula: '(u_n) \\text{ converge} \\iff \\exists l \\in \\mathbb{R},\\; \\lim_{n \\to +\\infty} u_n = l',
    },
    exercise: {
      id: 'tc_m_num_l12_p04_q01',
      type: 'mcq',
      prompt: 'Parmi ces suites, laquelle est CONVERGENTE ?',
      options: [
        '$u_n = \\sqrt{n}$',
        '$v_n = \\frac{1}{n^3}$ ($n \\geqslant 1$)',
        '$w_n = \\cos(n)$',
        '$t_n = (-1)^n$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\lim_{n\\to+\\infty} \\frac{1}{n^3} = 0 \\in \\mathbb{R}$, donc $(v_n)$ converge vers $0$. $\\sqrt{n} \\to +\\infty$ (diverge), tandis que $\\cos(n)$ et $(-1)^n$ n’ont pas de limite (divergent).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Limite via f(n)',
    stepTheme: 'violet',
    stepTitle: 'Transposition des limites de fonctions et limites de référence ($n^\\alpha$, $a^n$)',
    paragraphText:
      'Si $u_n = f(n)$ et $\\lim_{x\\to+\\infty} f(x) = l$ ($l$ fini ou infini), alors $\\lim_{n\\to+\\infty} u_n = l$, et toutes les opérations sur les limites s’appliquent. Pour les suites puissances ($\\alpha \\in \\mathbb{R}$) : $\\lim n^\\alpha = +\\infty$ si $\\alpha > 0$, $1$ si $\\alpha = 0$, $0$ si $\\alpha < 0$. Pour les suites géométriques $(a^n)$ : $0$ si $-1 < a < 1$, $1$ si $a = 1$, $+\\infty$ si $a > 1$, et PAS de limite si $a \\leqslant -1$ !',
    formula: {
      name: 'Limite d’une suite géométrique (a^n)',
      formula: '\\lim_{n\\to+\\infty} a^n = \\begin{cases} 0 & \\text{si } |a| < 1 \\\\ 1 & \\text{si } a = 1 \\\\ +\\infty & \\text{si } a > 1 \\\\ \\text{n’existe pas} & \\text{si } a \\leqslant -1 \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l12_p04_q02',
      type: 'mcq',
      prompt: 'Que valent dans l’ordre les limites en $+\\infty$ de $(-3)^n$, $\\left(-\\frac{2}{e}\\right)^n$ et $n^{-\\frac{5}{6}}$ ?',
      options: [
        '$-\\infty$, $0$, $0$',
        'N’existe pas, $0$, $0$',
        '$+\\infty$, n’existe pas, $0$',
        'N’existe pas, $+\\infty$, $+\\infty$',
      ],
      correctAnswerIndex: 1,
      explanation: '$-3 \\leqslant -1 \\implies (-3)^n$ n’a pas de limite. Comme $e \\approx 2{,}718 > 2$, $-1 < -\\frac{2}{e} < 1 \\implies \\left(-\\frac{2}{e}\\right)^n \\to 0$. Et $-\\frac{5}{6} < 0 \\implies n^{-5/6} \\to 0$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Croissances comparées',
    stepTheme: 'violet',
    stepTitle: 'Croissances comparées des suites $(a^n)$, $(n^\\alpha)$ et $(\\ln n)$',
    paragraphText:
      'Les théorèmes de croissances comparées s’appliquent exactement aux suites : pour $\\alpha > 0$, $\\lim_{n\\to+\\infty} \\frac{\\ln n}{n^\\alpha} = 0$ ; pour $a > 1$ et $\\alpha > 0$, $\\lim_{n\\to+\\infty} \\frac{n^\\alpha}{a^n} = 0$ ; et pour $0 < a < 1$ et $\\alpha < 0$ (ou plutôt $\\alpha > 0$ avec $a^n$ au numérateur), $a^n n^\\alpha \\to 0$. Exemple : $\\frac{\\sqrt{n}}{\\ln n} = \\frac{1}{(\\ln n)/n^{1/2}} \\to +\\infty$.',
    formula: {
      name: 'Croissances comparées de suites',
      formula: '\\forall \\alpha > 0,\\; \\lim_{n\\to+\\infty} \\frac{\\ln n}{n^\\alpha} = 0 \\qquad ; \\qquad \\forall a > 1,\\; \\forall \\alpha > 0,\\; \\lim_{n\\to+\\infty} \\frac{n^\\alpha}{a^n} = 0',
    },
    exercise: {
      id: 'tc_m_num_l12_p04_q03',
      type: 'mcq',
      prompt: 'Calculer les limites de $v_n = n^2 - 2^{n+3}$ et de $w_n = \\frac{n \\times 3^n}{4^n}$ quand $n \\to +\\infty$.',
      options: [
        '$+\\infty$ et $+\\infty$',
        '$-\\infty$ et $0$',
        '$0$ et $0$',
        '$-\\infty$ et $\\frac{3}{4}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$v_n = 2^n\\left(\\frac{n^2}{2^n} - 8\\right) \\to (+\\infty) \\times (0 - 8) = -\\infty$. Et $w_n = \\frac{n}{(4/3)^n} \\to 0$ car $a = \\frac{4}{3} > 1$ et $\\alpha = 1 > 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Techniques de calcul',
    stepTheme: 'emerald',
    stepTitle: 'Quantité conjuguée $\\sqrt{n^2 + 1} - n$ et fractions rationnelles',
    paragraphText:
      'Pour lever une forme indéterminée $+\\infty - \\infty$ avec racine carrée : $\\sqrt{n^2 + 1} - n = \\frac{(n^2 + 1) - n^2}{\\sqrt{n^2 + 1} + n} = \\frac{1}{\\sqrt{n^2 + 1} + n} \\to 0$. Pour $\\frac{\\ln(n+1)}{n} = \\frac{\\ln(n+1)}{n+1} \\times \\frac{n+1}{n} \\to 0 \\times 1 = 0$. Pour $\\frac{3n^2 - 2n + 1}{n^3}$, on factorise par le terme dominant $n^2$ au numérateur et $n^3$ au dénominateur $\\implies \\lim = 0$.',
    exercise: {
      id: 'tc_m_num_l12_p04_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{n\\to+\\infty} \\left(\\sqrt{n^2 + 1} - n\\right)$ ?',
      options: [
        '$+\\infty$',
        '$1$',
        '$0$',
        '$\\frac{1}{2}$',
      ],
      correctAnswerIndex: 2,
      explanation: 'En multipliant par la quantité conjuguée $\\sqrt{n^2 + 1} + n$, on obtient $\\frac{1}{\\sqrt{n^2 + 1} + n} \\xrightarrow[n\\to+\\infty]{} 0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Erreur d’exposant négatif',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $\\left(-\\frac{2}{e}\\right)^n$ qui tend vers $0$ et $(-3)^n$ qui diverge',
    paragraphText:
      'Beaucoup pensent qu’une suite alternée de signe n’a jamais de limite : c’est FAUX ! Quand la raison $a$ est strictement comprise entre $-1$ et $0$ (comme $-\\frac{2}{e} \\approx -0{,}736$), $(a^n)$ oscille en signe MAIS son module $|a|^n \\to 0$, donc $\\lim_{n\\to+\\infty} a^n = 0$ ! La limite n’existe pas uniquement quand $a \\leqslant -1$.',
    exercise: {
      id: 'tc_m_num_l12_p04_q05',
      type: 'mcq',
      prompt: 'Parmi ces suites géométriques alternées, laquelle CONVERGE vers $0$ ?',
      options: [
        '$(-1)^n$',
        '$(-1{,}01)^n$',
        '$\\left(-\\frac{3}{4}\\right)^n$',
        '$(-\\pi)^n$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Comme $-1 < -\\frac{3}{4} < 1$, $\\left|-\\frac{3}{4}\\right|^n = \\left(\\frac{3}{4}\\right)^n \\to 0$, donc $\\left(-\\frac{3}{4}\\right)^n$ converge vers $0$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Fraction avec puissances',
    stepTheme: 'blue',
    stepTitle: 'Simplifier un quotient de combinaisons de suites géométriques',
    paragraphText:
      'Pour calculer la limite de $\\frac{5^n - 2^n}{5^n + 3^n}$, mets en facteur le terme géométrique de plus grande base ($5^n$) au numérateur et au dénominateur : $\\frac{5^n(1 - (2/5)^n)}{5^n(1 + (3/5)^n)} = \\frac{1 - (2/5)^n}{1 + (3/5)^n} \\to \\frac{1 - 0}{1 + 0} = 1$.',
    exercise: {
      id: 'tc_m_num_l12_p04_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{n\\to+\\infty} \\frac{2\\cdot 5^n - 3^n}{5^{n+1} + 2^n}$ ?',
      options: [
        '$0$',
        '$\\frac{2}{5}$',
        '$2$',
        '$+\\infty$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En divisant numérateur et dénominateur par $5^n$ : $\\frac{2 - (3/5)^n}{5 + (2/5)^n} \\xrightarrow[n\\to+\\infty]{} \\frac{2 - 0}{5 + 0} = \\frac{2}{5}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan des limites',
    stepTheme: 'slate',
    stepTitle: 'Réflexe face à une indétermination de suite',
    paragraphText:
      'En résumé : 1) Polynôme ou fraction rationnelle $\\to$ factoriser par la plus haute puissance de $n$ ; 2) Somme de racines $\\to$ expression conjuguée ; 3) Puissances $a^n$, $n^\\alpha$, $\\ln n$ $\\to$ factoriser par le terme dominant ($a^n$ si $a > 1$) et utiliser les croissances comparées.',
    exercise: {
      id: 'tc_m_num_l12_p04_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{n\\to+\\infty} \\frac{3n^2 - 2n + 1}{n^3}$ ($n \\in \\mathbb{N}^*$)?',
      options: [
        '$3$',
        '$0$',
        '$+\\infty$',
        '$-2$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{3n^2 - 2n + 1}{n^3} = \\frac{3}{n} - \\frac{2}{n^2} + \\frac{1}{n^3} \\xrightarrow[n\\to+\\infty]{} 0$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Convergence monotone',
    stepTheme: 'violet',
    stepTitle: 'Les $4$ théorèmes de convergence (ou divergence) des suites monotones',
    paragraphText:
      'Théorème fondamental d’existence de limite (sans avoir besoin de connaître la valeur de la limite !) : 1) Toute suite CROISSANTE et MAJORÉE est CONVERGENTE ; 2) Toute suite DÉCROISSANTE et MINORÉE est CONVERGENTE ; 3) Toute suite croissante et NON majorée diverge vers $+\\infty$ ; 4) Toute suite décroissante et NON minorée diverge vers $-\\infty$.',
    formula: {
      name: 'Théorème de convergence monotone',
      formula: '(\\text{croissante et majorée}) \\implies \\text{converge} \\qquad ; \\qquad (\\text{décroissante et minorée}) \\implies \\text{converge}',
    },
    exercise: {
      id: 'tc_m_num_l12_p05_q01',
      type: 'mcq',
      prompt: 'Parmi ces $4$ affirmations, laquelle est FAUSSE ?',
      options: [
        'Toute suite décroissante et à termes positifs est convergente',
        'Toute suite croissante et non majorée diverge vers $+\\infty$',
        'Toute suite croissante est nécessairement convergente',
        'Toute suite décroissante et non minorée diverge vers $-\\infty$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Une suite croissante peut diverger vers $+\\infty$ si elle n’est pas majorée (exemple : $u_n = n$). En revanche, une suite décroissante à termes positifs est minorée par $0$, donc elle converge !',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Comparaison & Gendarmes',
    stepTheme: 'violet',
    stepTitle: 'Théorèmes de comparaison, d’encadrement (gendarmes) et critère $|u_n - l| \\leqslant v_n$',
    paragraphText:
      'Si à partir d’un certain rang $n_0$ : 1) $u_n \\leqslant v_n$ et toutes deux convergent, alors $\\lim u_n \\leqslant \\lim v_n$ (passage à la limite dans une inégalité large !) ; 2) $u_n \\geqslant v_n$ et $v_n \\to +\\infty \\implies u_n \\to +\\infty$ (et symétriquement $u_n \\leqslant v_n \\to -\\infty \\implies u_n \\to -\\infty$) ; 3) Théorème des gendarmes : si $v_n \\leqslant u_n \\leqslant w_n$ avec $\\lim v_n = \\lim w_n = l$, alors $(u_n)$ converge vers $l$. Corollaire pratique : si $|u_n - l| \\leqslant v_n$ et $v_n \\to 0$, alors $u_n \\to l$.',
    formula: {
      name: 'Gendarmes et critère absolu',
      formula: 'v_n \\leqslant u_n \\leqslant w_n \\text{ et } \\lim v_n = \\lim w_n = l \\implies \\lim u_n = l',
    },
    exercise: {
      id: 'tc_m_num_l12_p05_q02',
      type: 'mcq',
      prompt: 'Calculer les limites en $+\\infty$ de $u_n = -n + \\cos n$ et $v_n = n^2 + (-1)^n$.',
      options: [
        'Aucune des deux n’a de limite à cause de $\\cos n$ et $(-1)^n$',
        '$\\lim u_n = -\\infty$ et $\\lim v_n = +\\infty$',
        '$\\lim u_n = 0$ et $\\lim v_n = +\\infty$',
        '$\\lim u_n = -\\infty$ et $\\lim v_n = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\cos n \\leqslant 1 \\implies u_n \\leqslant -n + 1 \\to -\\infty$, donc $u_n \\to -\\infty$. Et $(-1)^n \\geqslant -1 \\implies v_n \\geqslant n^2 - 1 \\to +\\infty$, donc $v_n \\to +\\infty$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice 7c (Série harmonique)',
    stepTheme: 'blue',
    stepTitle: 'Prouver la convergence de $u_n = \\sum_{k=1}^n \\frac{1}{k^2}$ sans calculer sa limite',
    paragraphText:
      'Nous avons démontré précédemment que la suite $u_n = \\sum_{k=1}^n \\frac{1}{k^2}$ est strictement croissante ($u_{n+1} - u_n = \\frac{1}{(n+1)^2} > 0$) et majorée par $2$ ($u_n \\leqslant 2 - \\frac{1}{n} < 2$). Par le théorème de convergence monotone, $(u_n)$ est CONVERGENTE (vers une limite $l \\leqslant 2$, qui vaut en réalité $\\frac{\\pi^2}{6}$).',
    exercise: {
      id: 'tc_m_num_l12_p05_q03',
      type: 'mcq',
      prompt: 'Si une suite $(u_n)$ est croissante et vérifie $\\forall n \\in \\mathbb{N}^*,\\; u_n < 2$, que peut-on affirmer avec certitude sur sa limite $l$ ?',
      options: [
        'Que $l = 2$ obligatoirement',
        'Que $(u_n)$ converge vers une limite finie $l$ vérifiant $u_1 \\leqslant l \\leqslant 2$ (pas forcément $< 2$ ni $= 2$)',
        'Que $(u_n)$ diverge',
        'Que $l < 2$ obligatoirement',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le théorème garantit la convergence vers un réel $l$ ; par passage à la limite dans $u_1 \\leqslant u_n < 2$, l’inégalité stricte devient LARGE : $u_1 \\leqslant l \\leqslant 2$ !',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Application des gendarmes',
    stepTheme: 'emerald',
    stepTitle: 'Encadrer $\\frac{\\sin(n)}{n}$ ou $\\frac{(-1)^n}{n^2 + 1}$ pour trouver la limite',
    paragraphText:
      'Quand une suite comporte un terme borné oscillant comme $\\sin(n)$, $\\cos(n)$ ou $(-1)^n$ divisé par un terme qui tend vers $+\\infty$, applique les gendarmes ! Comme $-1 \\leqslant \\sin(n) \\leqslant 1$, pour $n \\geqslant 1$, $-\\frac{1}{n} \\leqslant \\frac{\\sin n}{n} \\leqslant \\frac{1}{n}$, donc $\\lim_{n\\to+\\infty} \\frac{\\sin n}{n} = 0$.',
    exercise: {
      id: 'tc_m_num_l12_p05_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{n\\to+\\infty} \\left(3 + \\frac{(-1)^n}{n^2 + 1}\\right)$ ?',
      options: [
        'N’existe pas',
        '$0$',
        '$3$',
        '$4$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\left|u_n - 3\\right| = \\frac{1}{n^2 + 1} \\xrightarrow[n\\to+\\infty]{} 0$, donc d’après le corollaire du théorème des gendarmes, $\\lim_{n\\to+\\infty} u_n = 3$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Inégalité stricte à la limite !',
    stepTheme: 'orange',
    stepTitle: 'Une inégalité stricte $u_n < v_n$ devient LARGE ($\\lim u_n \\leqslant \\lim v_n$) à la limite',
    paragraphText:
      'Piège classique : si $\\forall n \\in \\mathbb{N}^*,\\; u_n < v_n$ et que les deux suites convergent, on peut seulement conclure $\\lim u_n \\leqslant \\lim v_n$ (et NON $<$) ! Contre-exemple immédiat : $u_n = 0 < v_n = \\frac{1}{n}$, pourtant $\\lim u_n = 0 = \\lim v_n$.',
    exercise: {
      id: 'tc_m_num_l12_p05_q05',
      type: 'mcq',
      prompt: 'Soient $u_n = 1 - \\frac{1}{n}$ et $v_n = 1 + \\frac{1}{n}$ ($n \\geqslant 1$). On a $\\forall n \\geqslant 1,\\; u_n < v_n$. Que vaut la relation entre leurs limites ?',
      options: [
        '$\\lim u_n < \\lim v_n$',
        '$\\lim u_n = \\lim v_n = 1$ (l’inégalité stricte devient large à la limite)',
        '$\\lim u_n > \\lim v_n$',
        'Les deux suites divergent',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le passage à la limite conserve les inégalités larges ($\\leqslant$), jamais les inégalités strictes ($<$) : ici $1 - \\frac{1}{n} < 1 + \\frac{1}{n}$ mais les deux tendent vers $1$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Majorant ≠ Limite !',
    stepTheme: 'orange',
    stepTitle: 'Un majorant $M$ prouve que $(u_n)$ converge, mais la limite n’est pas forcément $M$ !',
    paragraphText:
      'Erreur fréquente : croire que si $(u_n)$ est croissante et majorée par $2$, alors $\\lim u_n = 2$. FAUX ! Par exemple $u_n = \\sum_{k=1}^n \\frac{1}{k^2}$ est croissante et majorée par $2$, mais sa limite vaut $\\frac{\\pi^2}{6} \\approx 1{,}645 < 2$. Pour trouver la VALEUR exacte de la limite, il faut un autre théorème (ex. équation $f(l) = l$ ou calcul explicite).',
    exercise: {
      id: 'tc_m_num_l12_p05_q06',
      type: 'mcq',
      prompt: 'Si une suite $(u_n)$ est croissante et majorée par $10$, quelle conclusion est CORRECTE ?',
      options: [
        '$\\lim u_n = 10$',
        '$(u_n)$ converge vers un réel $l$ tel que $u_0 \\leqslant l \\leqslant 10$',
        '$(u_n)$ diverge vers $+\\infty$',
        'On a besoin que $u_0 = 0$ pour conclure qu’elle converge',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le théorème de convergence monotone assure l’existence de $l \\in [u_0 ; 10]$, mais $l$ peut être strictement inférieur à $10$ (tout dépend de la suite : $10$ n’est qu’un majorant parmi d’autres).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Comparaison (Ex 1 p.8)',
    stepTheme: 'slate',
    stepTitle: 'Comparer les limites de $u_n = \\frac{n^2}{2^n} - 8$ et $v_n = \\frac{n^2}{2^n}$',
    paragraphText:
      'Comme $\\forall n \\in \\mathbb{N},\\; u_n = v_n - 8 \\leqslant v_n$, par théorème de comparaison $\\lim_{n\\to+\\infty} u_n \\leqslant \\lim_{n\\to+\\infty} v_n$ (ici $-8 \\leqslant 0$ par croissance comparée).',
    exercise: {
      id: 'tc_m_num_l12_p05_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{n\\to+\\infty} \\left(\\frac{n^2}{2^n} - 8\\right)$ ?',
      options: [
        '$0$',
        '$-8$',
        '$+\\infty$',
        '$-\\infty$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par croissance comparée ($a = 2 > 1, \\alpha = 2 > 0$), $\\lim_{n\\to+\\infty} \\frac{n^2}{2^n} = 0$, donc $u_n \\to 0 - 8 = -8$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Composition v_n = f(u_n)',
    stepTheme: 'violet',
    stepTitle: 'Limite d’une suite composée $v_n = f(u_n)$',
    paragraphText:
      'Soit $f$ une fonction définie sur un ensemble $E$, et $(u_n)$ une suite d’éléments de $E$. Si $\\lim_{n\\to+\\infty} u_n = a$ et $\\lim_{x\\to a} f(x) = l$ (en particulier si $f$ est continue en $a$, alors $l = f(a)$), alors la suite $v_n = f(u_n)$ vérifie $\\lim_{n\\to+\\infty} v_n = l$.',
    formula: {
      name: 'Composition limite de suite',
      formula: '\\left(\\lim_{n\\to+\\infty} u_n = a \\quad \\text{et} \\quad \\lim_{x\\to a} f(x) = l\\right) \\implies \\lim_{n\\to+\\infty} f(u_n) = l',
    },
    exercise: {
      id: 'tc_m_num_l12_p06_q01',
      type: 'mcq',
      prompt: 'En écrivant $v_n = n \\sin\\left(\\frac{1}{n}\\right) = \\frac{\\sin(1/n)}{1/n}$ ($n \\geqslant 1$), quelle est la limite de $(v_n)$ en $+\\infty$ ?',
      options: [
        '$0$',
        '$1$',
        '$+\\infty$',
        'N’existe pas',
      ],
      correctAnswerIndex: 1,
      explanation: 'En posant $u_n = \\frac{1}{n} \\to 0$ et $f(x) = \\frac{\\sin x}{x}$ (qui tend vers $1$ quand $x \\to 0$), on obtient $\\lim_{n\\to+\\infty} v_n = 1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Autres exemples v_n = f(u_n)',
    stepTheme: 'blue',
    stepTitle: 'Calculer $\\lim_{n\\to+\\infty} n\\ln\\left(1 + \\frac{3}{n}\\right)$ et $\\lim_{n\\to+\\infty} \\cos\\left(\\frac{n\\pi + 1}{3n}\\right)$',
    paragraphText:
      'Pour $n\\ln\\left(1 + \\frac{3}{n}\\right) = 3 \\cdot \\frac{\\ln(1 + 3/n)}{3/n}$, avec $u_n = \\frac{3}{n} \\to 0$ et $\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x} = 1$, la limite vaut $3$. De même, $\\frac{n\\pi + 1}{3n} = \\frac{\\pi}{3} + \\frac{1}{3n} \\to \\frac{\\pi}{3}$, et comme $\\cos$ est continue en $\\frac{\\pi}{3}$, $\\cos\\left(\\frac{n\\pi+1}{3n}\\right) \\to \\cos\\frac{\\pi}{3} = \\frac{1}{2}$ !',
    exercise: {
      id: 'tc_m_num_l12_p06_q02',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{n\\to+\\infty} \\cos\\left(\\frac{n\\pi + 1}{3n}\\right)$ ?',
      options: [
        '$0$',
        '$\\frac{1}{2}$',
        '$\\frac{\\sqrt{3}}{2}$',
        'N’existe pas',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{n\\pi + 1}{3n} \\to \\frac{\\pi}{3}$, et par continuité du cosinus, $\\cos\\left(\\frac{n\\pi + 1}{3n}\\right) \\to \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Théorème du point fixe',
    stepTheme: 'violet',
    stepTitle: 'Limite d’une suite récurrente $u_{n+1} = f(u_n)$ : équation $f(l) = l$',
    paragraphText:
      'Soit $f$ une fonction CONTINUE sur un intervalle fermé $K$ (avec $f(K) \\subset K$) et $(u_n)$ une suite à valeurs dans $K$ définie par $u_0 \\in K$ et $u_{n+1} = f(u_n)$. SI la suite $(u_n)$ converge vers un réel $l$, alors nécessairement $l \\in K$ ET $l$ est solution de l’équation du point fixe $f(l) = l$ ! (En effet $u_{n+1} \\to l$ et $f(u_n) \\to f(l)$ par continuité de $f$.)',
    formula: {
      name: 'Théorème du point fixe',
      formula: '\\left(u_{n+1} = f(u_n),\\; f \\text{ continue sur } K,\\; u_n \\in K,\\; \\lim u_n = l\\right) \\implies l \\in K \\text{ et } f(l) = l',
    },
    exercise: {
      id: 'tc_m_num_l12_p06_q03',
      type: 'mcq',
      prompt: 'Soit $(u_n)$ définie par $u_0 = 0{,}8$ et $u_{n+1} = \\frac{1}{2}u_n\\left(1 + \\frac{u_n}{2}\\right)$, supposée décroissante et dans $[0 ; 1]$. Quelle est sa limite $l$ ?',
      options: [
        '$l = 2$',
        '$l = 0$ (car $l \\in [0 ; 1]$ et les solutions de $f(x) = x$ sont $0$ et $2$)',
        '$l = 0{,}8$',
        'On ne peut pas savoir si elle converge',
      ],
      correctAnswerIndex: 1,
      explanation: 'Décroissante et minorée par $0$, $(u_n)$ converge vers $l \\in [0 ; 1]$. La fonction $f(x) = \\frac{1}{2}x(1 + \\frac{x}{2})$ étant continue, $f(l) = l \\iff l^2 - 2l = 0 \\iff l = 0$ ou $l = 2$. Comme $2 \\notin [0 ; 1]$, $l = 0$ !',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Protocole complet',
    stepTheme: 'emerald',
    stepTitle: 'Les $3$ temps pour trouver la limite d’une suite $u_{n+1} = f(u_n)$',
    paragraphText:
      'Pour une suite récurrente $u_{n+1} = f(u_n)$ : Temps 1 : montrer par récurrence que $u_n$ reste dans un intervalle fermé $K$ (bornée). Temps 2 : montrer que $(u_n)$ est monotone (par récurrence si $f$ croissante, ou signe de $u_{n+1} - u_n$), puis conclure par convergence monotone qu’elle converge vers $l \\in K$. Temps 3 : $f$ étant continue sur $K$, résoudre $f(l) = l$ dans $K$ pour identifier $l$ !',
    exercise: {
      id: 'tc_m_num_l12_p06_q04',
      type: 'mcq',
      prompt: 'Soit $u_0 = 1$ et $u_{n+1} = \\sqrt{u_n + 2}$, suite croissante majorée par $2$ dans $[0 ; 2]$. Quelle est sa limite ?',
      options: [
        '$l = -1$',
        '$l = 2$',
        '$l = 1$',
        '$l = \\sqrt{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La suite converge vers $l \\in [1 ; 2]$ vérifiant $\\sqrt{l + 2} = l \\iff l^2 - l - 2 = 0$ avec $l \\geqslant 0$. Les racines sont $2$ et $-1$ ; seule $l = 2 \\in [1 ; 2]$ convient.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Attention : prouver d’abord la convergence !',
    stepTheme: 'orange',
    stepTitle: 'Ne JAMAIS résoudre $f(l) = l$ avant d’avoir prouvé que $(u_n)$ converge !',
    paragraphText:
      'Piège classique et sévèrement sanctionné au Bac : résoudre $f(l) = l$ pour « prouver que la suite converge vers $l$ » ! L’équation $f(l) = l$ ne PROUVE PAS la convergence : par exemple pour $u_{n+1} = 2u_n - 1$ avec $u_0 = 3$, l’équation $2l - 1 = l$ donne $l = 1$, alors que la suite tend vers $+\\infty$ ! Il faut D’ABORD démontrer que $(u_n)$ converge (souvent via la convergence monotone), ENSUITE résoudre $f(l) = l$.',
    exercise: {
      id: 'tc_m_num_l12_p06_q05',
      type: 'mcq',
      prompt: 'Pour $u_0 = 3$ et $u_{n+1} = 2u_n - 1$, pourquoi est-il FAUX d’écrire « $\\lim u_n = l$ vérifie $2l - 1 = l \\implies \\lim u_n = 1$ » ?',
      options: [
        'Parce que $2l - 1 = l$ donne $l = 0$',
        'Parce que la suite diverge vers $+\\infty$ ($u_n = 2^{n+1} + 1$) : on ne peut appliquer $f(l) = l$ qu’après avoir prouvé la convergence !',
        'Parce que $f(x) = 2x - 1$ n’est pas continue',
        'Parce que $u_0 = 3 > 1$ est un cas particulier sans importance',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le théorème du point fixe dit « SI $(u_n)$ converge, ALORS $f(l) = l$ ». Or ici $u_1 = 5, u_2 = 9, u_n = 2^{n+1} + 1 \\to +\\infty$ : la suite ne converge pas !',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Intervalle fermé K',
    stepTheme: 'orange',
    stepTitle: 'Si $u_n \\in ]a ; b[$, la limite $l$ peut tomber aux bornes ($l \\in [a ; b]$) !',
    paragraphText:
      'Comme une inégalité stricte devient large à la limite, si tu as montré $\\forall n,\\; 0 < u_n < 1$, la limite $l$ appartient à l’intervalle FERMÉ $[0 ; 1]$ : il est donc tout à fait normal que $l = 0$ (comme dans l’exercice $u_{n+1} = \\frac{1}{2}u_n(1 + \\frac{u_n}{2})$) !',
    exercise: {
      id: 'tc_m_num_l12_p06_q06',
      type: 'mcq',
      prompt: 'Dans l’exercice $u_{n+1} = \\frac{1}{2}u_n(1 + \\frac{u_n}{2})$ avec $u_0 = 0{,}8$, on a $0 < u_n < 1$ pour tout $n$. Pourquoi $l = 0$ est-elle pourtant valide ?',
      options: [
        'Parce que $0$ est dans l’intervalle fermé $[0 ; 1]$ : le passage à la limite élargit $0 < u_n$ en $0 \\leqslant l$',
        'Parce que $u_n$ devient nulle à partir d’un certain rang',
        'Parce que $f$ n’est pas définie en $0$',
        'C’est une contradiction, $l$ ne peut pas valoir $0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Pour tout $n$, $u_n > 0$, et comme $(u_n)$ décroît vers $0$, la limite atteint la borne $0$ de l’intervalle fermé $[0 ; 1]$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Suite homographique',
    stepTheme: 'slate',
    stepTitle: 'Éliminer une racine parasite du point fixe grâce à l’intervalle $K$',
    paragraphText:
      'Très souvent l’équation $f(l) = l$ admet deux solutions (comme $l = 0$ et $l = 2$, ou $l = -1$ et $l = 2$). L’encadrement de $(u_n)$ dans $[0 ; 1]$ (ou le sens de variation $u_n \\leqslant u_0$ pour une suite décroissante !) permet d’éliminer la mauvaise racine.',
    exercise: {
      id: 'tc_m_num_l12_p06_q07',
      type: 'mcq',
      prompt: 'Une suite $(u_n)$ est croissante à partir de $u_0 = 2$ et majorée par $5$, avec $u_{n+1} = f(u_n)$ ($f$ continue). Si $f(x) = x$ admet pour solutions $x = 1$ et $x = 4$, quelle est $\\lim u_n$ ?',
      options: [
        '$1$',
        '$4$ (car $(u_n)$ étant croissante, $l \\geqslant u_0 = 2$)',
        '$5$',
        '$2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $(u_n)$ est croissante et majorée par $5$, on a $2 = u_0 \\leqslant u_n \\leqslant 5$, donc $l \\in [2 ; 5]$. La racine $1$ est exclue, il reste $l = 4$.',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Suites adjacentes / couplées (Ex 8)',
    stepTheme: 'blue',
    stepTitle: 'Étudier deux suites couplées $(u_n)$ et $(v_n)$ jusqu’à leur limite commune',
    paragraphText:
      'Reprenons l’exercice 8 : $a \\in ]\\frac{1}{2} ; 1[$, $u_0 = 2$, $v_0 = 3$, $u_{n+1} = a u_n + (1 - a)v_n$ et $v_{n+1} = (1 - a)u_n + a v_n$. Après avoir prouvé par récurrence que $v_n - u_n > 0$ pour tout $n$, on calcule $u_{n+1} - u_n = (1 - a)(v_n - u_n) > 0$ ($(u_n)$ est strictement croissante) et $v_{n+1} - v_n = -(1 - a)(v_n - u_n) < 0$ ($(v_n)$ est strictement décroissante). Ainsi $2 = u_0 \\leqslant u_n < v_n \\leqslant v_0 = 3$ : $(u_n)$ croissante majorée par $3$ converge, et $(v_n)$ décroissante minorée par $2$ converge !',
    formula: {
      name: 'Encadrement des deux suites couplées',
      formula: 'u_0 \\leqslant u_n < v_n \\leqslant v_0 \\implies (u_n) \\text{ et } (v_n) \\text{ convergent}',
    },
    exercise: {
      id: 'tc_m_num_l12_p07_q01',
      type: 'mcq',
      prompt: 'Dans l’exercice 8 ($u_{n+1} = a u_n + (1 - a)v_n$, $v_{n+1} = (1 - a)u_n + a v_n$, $a \\in ]\\frac{1}{2} ; 1[$ et $v_n > u_n$), pourquoi $(u_n)$ et $(v_n)$ convergent-elles ?',
      options: [
        'Parce qu’elles sont géométriques',
        'Parce que $(u_n)$ est croissante majorée par $v_0 = 3$ et $(v_n)$ est décroissante minorée par $u_0 = 2$',
        'Parce que $u_n$ et $v_n$ sont constantes',
        'Parce que $a < 0$',
      ],
      correctAnswerIndex: 1,
      explanation: '$u_n$ croît et reste sous $v_n \\leqslant v_0 = 3$ ; $v_n$ décroît et reste au-dessus de $u_n \\geqslant u_0 = 2$ : le théorème de convergence monotone s’applique aux deux !',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Différence w_n & Somme t_n (Ex 8)',
    stepTheme: 'emerald',
    stepTitle: 'Trouver la limite commune via $w_n = v_n - u_n$ et l’invariant $t_n = u_n + v_n$',
    paragraphText:
      'Pour prouver qu’elles ont la MÊME limite et calculer sa valeur : 1) $w_n = v_n - u_n$ vérifie $w_{n+1} = (2a - 1)w_n$ avec $w_0 = 1$ et $0 < 2a - 1 < 1$, donc $(w_n)$ est géométrique de limite $0$, d’où $\\lim(v_n - u_n) = 0 \\implies \\lim v_n = \\lim u_n = l$ (elles sont adjacentes !). 2) $t_n = u_n + v_n$ vérifie $t_{n+1} = (a + 1 - a)u_n + (1 - a + a)v_n = u_n + v_n = t_n = t_0 = 5$ (suite constante !). Par passage à la limite : $2l = 5 \\implies l = \\frac{5}{2}$ !',
    formula: {
      name: 'Suites auxiliaires w_n et t_n',
      formula: 'w_n = (2a - 1)^n \\to 0 \\quad \\text{et} \\quad t_n = u_n + v_n = 5 \\implies 2l = 5 \\implies l = \\frac{5}{2}',
    },
    exercise: {
      id: 'tc_m_num_l12_p07_q02',
      type: 'mcq',
      prompt: 'Dans l’exercice 8, quelle est la nature des suites $w_n = v_n - u_n$ et $t_n = u_n + v_n$, et quelle est la limite commune de $(u_n)$ et $(v_n)$ ?',
      options: [
        '$(w_n)$ arithmétique, $(t_n)$ géométrique, limite $5$',
        '$(w_n)$ géométrique de raison $2a - 1 \\in ]0 ; 1[$ (limite $0$), $(t_n)$ constante égale à $5$, limite commune $\\frac{5}{2}$',
        '$(w_n)$ constante, $(t_n)$ tend vers $0$, limite $\\frac{1}{2}$',
        '$(w_n)$ géométrique de raison $a$, limite commune $a$',
      ],
      correctAnswerIndex: 1,
      explanation: '$w_n \\to 0$ montre que les deux limites sont égales à un même $l$, et $t_n = 5$ donne $l + l = 5 \\implies l = \\frac{5}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe (Véhicule)',
    stepTheme: 'blue',
    stepTitle: 'Renouvellement de véhicule : dépréciation de $20\\%$ vs hausse de $3\\%$',
    paragraphText:
      'Une entreprise achète un véhicule $30\\,000\\,000\\text{ F CFA}$. Chaque année, son prix de revente baisse de $20\\%$ ($u_{n+1} = 0{,}8 u_n$, soit $u_5 = 30\\,000\\,000 \\times 0{,}8^5 = 9\\,830\\,400\\text{ F}$), tandis que le prix d’un véhicule neuf augmente de $3\\%$ par an ($v_{n+1} = 1{,}03 v_n$, soit $v_5 = 30\\,000\\,000 \\times 1{,}03^5 \\approx 34\\,778\\,222\\text{ F}$). La différence au bout de $5$ ans vaut $v_5 - u_5 \\approx 24\\,947\\,822\\text{ F} \\leqslant 25\\,000\\,000\\text{ F}$, et $u_5 = 9\\,830\\,400 \\leqslant 10\\,000\\,000\\text{ F}$ : la société cède donc le véhicule et l’employé peut l’acheter !',
    exercise: {
      id: 'tc_m_num_l12_p07_q03',
      type: 'mcq',
      prompt: 'Après $5$ ans ($u_5 = 30\\,000\\,000 \\times 0{,}8^5 = 9\\,830\\,400$ et $v_5 \\approx 34\\,778\\,222$), l’employé peut-il acheter le véhicule ?',
      options: [
        'Non, car $u_5 > 10\\,000\\,000$',
        'Non, car $v_5 - u_5 > 25\\,000\\,000$',
        'Oui, car $v_5 - u_5 \\approx 24\\,947\\,822 < 25\\,000\\,000$ ET $u_5 = 9\\,830\\,400 \\leqslant 10\\,000\\,000$',
        'Oui, car le véhicule neuf a baissé de prix',
      ],
      correctAnswerIndex: 2,
      explanation: 'Les deux conditions sont remplies : le différentiel à payer par l’entreprise est sous $25\\,000\\,000\\text{ F}$ ($24\\,947\\,822\\text{ F}$) et le prix de revente est sous le budget de $10\\,000\\,000\\text{ F}$ ($9\\,830\\,400\\text{ F}$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Suites arithmético-géométriques',
    stepTheme: 'emerald',
    stepTitle: 'Méthode générale pour $u_{n+1} = a u_n + b$ ($a \\ne 1$) via suite auxiliaire',
    paragraphText:
      'Pour trouver l’expression explicite et la limite de $u_{n+1} = a u_n + b$ ($a \\ne 1$) : 1) Résoudre l’équation du point fixe $c = ac + b \\implies c = \\frac{b}{1 - a}$ ; 2) Poser $v_n = u_n - c$ ; 3) Vérifier que $v_{n+1} = u_{n+1} - c = a(u_n - c) = a v_n$ (suite géométrique de raison $a$) ; 4) En déduire $u_n = c + (u_0 - c)a^n$. Si $|a| < 1$, $a^n \\to 0$ donc $u_n \\to c$ !',
    formula: {
      name: 'Suite arithmético-géométrique',
      formula: 'u_{n+1} = a u_n + b \\;(a \\ne 1),\\; c = \\frac{b}{1-a} \\implies u_n = c + (u_0 - c)a^n',
    },
    exercise: {
      id: 'tc_m_num_l12_p07_q04',
      type: 'mcq',
      prompt: 'Soit $u_0 = -1$ et $u_{n+1} = \\frac{1}{2}u_n + 3$. Quelle est l’expression explicite de $u_n$ et sa limite en $+\\infty$ ?',
      options: [
        '$u_n = 6 - 7\\left(\\frac{1}{2}\\right)^n$ et $\\lim u_n = 6$',
        '$u_n = 6 + 7\\left(\\frac{1}{2}\\right)^n$ et $\\lim u_n = 6$',
        '$u_n = 3 - 4\\left(\\frac{1}{2}\\right)^n$ et $\\lim u_n = 3$',
        '$u_n = -1 + 3n$ et $\\lim u_n = +\\infty$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Point fixe : $c = \\frac{1}{2}c + 3 \\implies c = 6$. En posant $v_n = u_n - 6$, $v_0 = -7$ et $v_{n+1} = \\frac{1}{2}v_n \\implies u_n = 6 - 7\\left(\\frac{1}{2}\\right)^n \\to 6$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Coefficient multiplicateur',
    stepTheme: 'orange',
    stepTitle: 'Attention aux pourcentages successifs : $+3\\% \\to \\times 1{,}03$ et $-20\\% \\to \\times 0{,}80$',
    paragraphText:
      'Dans les problèmes financiers et démographiques : augmenter de $t\\%$ revient à multiplier par $1 + \\frac{t}{100}$ (et attention : $v_{n+1} = 1{,}03 v_n$, avec $v_n$ et surtout pas $u_n$ !). Diminuer de $t\\%$ revient à multiplier par $1 - \\frac{t}{100}$ (baisse de $20\\% \\implies 0{,}80$). Et n’additionne jamais des pourcentages successifs : $-20\\%$ pendant $5$ ans donne $(0{,}8)^5 = 0{,}32768$ (baisse de $67{,}2\\%$), pas $-100\\%$ !',
    exercise: {
      id: 'tc_m_num_l12_p07_q05',
      type: 'mcq',
      prompt: 'Si une grandeur $v_n$ augmente de $3\\%$ chaque année à partir de $v_0 = 30\\,000\\,000$, quelle relation de récurrence et formule explicite la décrivent ?',
      options: [
        '$v_{n+1} = v_n + 0{,}03$ et $v_n = 30\\,000\\,000 + 0{,}03n$',
        '$v_{n+1} = 1{,}03 v_n$ et $v_n = 30\\,000\\,000 \\times (1{,}03)^n$',
        '$v_{n+1} = 0{,}03 v_n$ et $v_n = 30\\,000\\,000 \\times (0{,}03)^n$',
        '$v_{n+1} = 1{,}3 v_n$ et $v_n = 30\\,000\\,000 \\times (1{,}3)^n$',
      ],
      correctAnswerIndex: 1,
      explanation: '$+3\\%$ correspond à $v_{n+1} = v_n + 0{,}03 v_n = 1{,}03 v_n$, suite géométrique de raison $q = 1{,}03$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Suites adjacentes',
    stepTheme: 'violet',
    stepTitle: 'Définition générale des suites adjacentes',
    paragraphText:
      'Deux suites $(u_n)$ et $(v_n)$ sont dites ADJACENTES lorsque : 1) $(u_n)$ est croissante ; 2) $(v_n)$ est décroissante ; 3) $\\lim_{n\\to+\\infty} (v_n - u_n) = 0$. Propriété : si $(u_n)$ et $(v_n)$ sont adjacentes, alors pour tout $n$, $u_n \\leqslant v_n$, et elles CONVERGENT toutes deux vers la MÊME limite $l$ (comme dans l’exercice 8 !).',
    exercise: {
      id: 'tc_m_num_l12_p07_q06',
      type: 'mcq',
      prompt: 'Lesquelles de ces trois conditions définissent deux suites adjacentes $(u_n)$ et $(v_n)$ ?',
      options: [
        '$(u_n)$ croissante, $(v_n)$ croissante, et $\\lim(u_n - v_n) = 0$',
        '$(u_n)$ croissante, $(v_n)$ décroissante, et $\\lim(v_n - u_n) = 0$',
        '$(u_n)$ et $(v_n)$ convergent vers $0$',
        '$u_n < v_n$ pour tout $n$, sans hypothèse de monotonie',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une croissante, l’autre décroissante, et leur écart tend vers $0$ : elles se resserrent l’une vers l’autre autour d’une limite commune.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan du chapitre',
    stepTheme: 'slate',
    stepTitle: 'Carte mentale complète pour réussir les suites au Bac C',
    paragraphText:
      'En résumé : 1) Arithmétique / Géométrique : formules explicites, sommes de $n - p + 1$ termes ; 2) Récurrence en $3$ étapes strictes (Initialisation, Hérédité, Conclusion) ; 3) Monotonie ($u_{n+1} - u_n$, $\\frac{u_{n+1}}{u_n}$ si $u_n > 0$, $f(n)$, récurrence) ; 4) Convergence : calcul direct + croissances comparées, comparaison/gendarmes, convergence monotone, puis point fixe $f(l) = l$ ou suites adjacentes.',
    exercise: {
      id: 'tc_m_num_l12_p07_q07',
      type: 'mcq',
      prompt: 'Pour une suite $(u_n)$ quelconque, laquelle de ces implications est FAUSSE ?',
      options: [
        '$(u_n)$ convergente $\\implies (u_n)$ bornée',
        '$(u_n)$ croissante et majorée $\\implies (u_n)$ convergente',
        '$(u_n)$ bornée $\\implies (u_n)$ convergente',
        '$(u_n)$ et $(v_n)$ adjacentes $\\implies \\lim u_n = \\lim v_n$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Une suite peut être bornée sans converger ! Contre-exemple immédiat : $u_n = (-1)^n$ vérifie $-1 \\leqslant u_n \\leqslant 1$ (donc bornée), mais n’a pas de limite ! En revanche, toute suite convergente est bornée.',
    },
  },
];

export const MATHS_TLE_C_L12_SUITES_NUMERIQUES: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l12_suites_numeriques',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 10,
  title: 'Leçon 12 : Suites numériques',
  summary:
    'Suites arithmétiques et géométriques, raisonnement par récurrence, sens de variation, suites majorées/minorées/bornées, convergence et limites de référence, théorèmes de comparaison et convergence monotone, suites récurrentes et adjacentes.',
  officialVolumeHours: 14,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p01',
      order: 1,
      title: 'Suites arithmétiques et suites géométriques (rappels & sommes)',
      summary:
        'Maîtriser les relations de récurrence, formules explicites u_n = u_p + (n−p)r et v_n = v_p q^(n−p), et les sommes de n−p+1 termes consécutifs.',
      conceptExplanation:
        'Une suite arithmétique progresse par addition d’une raison r, tandis qu’une suite géométrique progresse par multiplication par q. Le décompte précis des n − p + 1 termes entre les rangs p et n évite l’erreur classique dans le calcul des sommes.',
      keyRule: 'De l’indice p à l’indice n (n ≥ p), il y a toujours n − p + 1 termes.',
      formulas: [
        { name: 'Termes généraux', formula: 'u_n = u_p + (n - p)r \\qquad ; \\qquad v_n = v_p q^{n - p}' },
        { name: 'Sommes (q ≠ 1)', formula: '\\sum_{k=p}^n u_k = (n-p+1)\\frac{u_p+u_n}{2} \\quad ; \\quad \\sum_{k=p}^n v_k = v_p\\frac{1-q^{n-p+1}}{1-q}' },
      ],
      workedExample: {
        title: 'Somme de termes d’une suite géométrique',
        statement: 'Soit $(v_n)$ géométrique de raison $q = -2$ avec $v_4 = 16$. Calculer $v_2 + v_3 + \\dots + v_{21}$.',
        methodSteps: [
          'Calculer $v_2 = v_4 q^{2-4} = 16 \\times (-2)^{-2} = 4$.',
          'Compter les termes : $21 - 2 + 1 = 20$ termes.',
          'Appliquer la formule : $S = 4 \\times \\frac{1 - (-2)^{20}}{1 - (-2)} = \\frac{4}{3}(1 - 2^{20})$.',
        ],
        conclusion: 'La somme vaut $\\frac{4}{3}(1 - 2^{20})$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p02',
      order: 2,
      title: 'Raisonnement par récurrence',
      summary:
        'Rédiger rigoureusement les 3 étapes (Initialisation en n₀, Hérédité P(k) ⇒ P(k+1), Conclusion) pour démontrer des majorations, monotonies, sommes ou divisibilités.',
      conceptExplanation:
        'Le raisonnement par récurrence démontre qu’une propriété P(n) vraie en n₀ et héréditaire (P(k) ⇒ P(k+1) pour tout k ≥ n₀) reste vraie pour tout entier n ≥ n₀. L’initialisation est indispensable : une propriété héréditaire fausse au départ ne démarre jamais.',
      keyRule: 'Toujours rédiger les 3 étapes : Initialisation en n₀, Hérédité (fixer k ≥ n₀, supposer P(k), prouver P(k+1)), Conclusion.',
      formulas: [
        { name: 'Principe de récurrence', formula: '(P(n_0) \\text{ et } \\forall k \\geqslant n_0,\\; (P(k) \\implies P(k+1))) \\implies \\forall n \\geqslant n_0,\\; P(n)' },
      ],
      workedExample: {
        title: 'Majoration par récurrence',
        statement: 'Soit $u_0 = -1$ et $u_{n+1} = \\frac{1}{2}u_n + 3$. Montrer par récurrence que $\\forall n \\in \\mathbb{N},\\; u_n < 6$.',
        methodSteps: [
          'Initialisation : $u_0 = -1 < 6$, donc vraie au rang $0$.',
          'Hérédité : soit $k \\geqslant 0$ tel que $u_k < 6$. Alors $\\frac{1}{2}u_k < 3$, puis $u_{k+1} = \\frac{1}{2}u_k + 3 < 6$.',
          'Conclusion : $\\forall n \\in \\mathbb{N},\\; u_n < 6$.',
        ],
        conclusion: 'La majoration $u_n < 6$ est établie pour tout $n \\in \\mathbb{N}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p03',
      order: 3,
      title: 'Sens de variation, suites majorées, minorées et bornées',
      summary:
        'Étudier la monotonie (signe de u_(n+1) − u_n, quotient u_(n+1)/u_n si u_n > 0, fonction f(n), récurrence) et prouver qu’une suite est minorée, majorée ou bornée.',
      conceptExplanation:
        'La monotonie s’étudie via u_(n+1) − u_n, le rapport u_(n+1)/u_n à condition que u_n > 0, ou l’étude de f quand u_n = f(n). Pour prouver qu’une suite est bornée, on étudie u_n − m et M − u_n, on procède par encadrements successifs ou par récurrence.',
      keyRule: 'Comparer u_(n+1)/u_n à 1 exige impérativement u_n > 0 pour tout n.',
      formulas: [
        { name: 'Monotonie (u_n > 0)', formula: '\\frac{u_{n+1}}{u_n} \\geqslant 1 \\implies \\text{croissante} \\qquad ; \\qquad \\frac{u_{n+1}}{u_n} \\leqslant 1 \\implies \\text{décroissante}' },
      ],
      workedExample: {
        title: 'Majoration par somme téléscopique',
        statement: 'Montrer que $u_n = \\sum_{k=1}^n \\frac{1}{k^2}$ est croissante et majorée par $2$.',
        methodSteps: [
          'Croissance : $u_{n+1} - u_n = \\frac{1}{(n+1)^2} > 0$.',
          'Majoration : $\\forall k \\geqslant 2,\\; \\frac{1}{k^2} \\leqslant \\frac{1}{k-1} - \\frac{1}{k}$, donc en sommant $u_n \\leqslant 1 + (1 - \\frac{1}{n}) = 2 - \\frac{1}{n} < 2$.',
        ],
        conclusion: 'La suite $(u_n)$ est strictement croissante et majorée par $2$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p04',
      order: 4,
      title: 'Convergence, limites de référence et croissances comparées',
      summary:
        'Distinguer convergence et divergence, calculer les limites de a^n, n^α et des formes indéterminées grâce aux croissances comparées et à la quantité conjuguée.',
      conceptExplanation:
        'Une suite converge lorsqu’elle possède une limite finie réelle ; sinon elle diverge (limite infinie ou absence de limite, comme (−1)^n ou (−3)^n). En +∞, a^n (a > 1) domine n^α (α > 0), qui domine ln n.',
      keyRule: '(a^n) converge vers 0 ssi −1 < a < 1 ; pour a ≤ −1, elle n’a pas de limite.',
      formulas: [
        { name: 'Croissances comparées', formula: '\\lim_{n\\to+\\infty}\\frac{\\ln n}{n^\\alpha} = 0 \\quad ; \\quad \\lim_{n\\to+\\infty}\\frac{n^\\alpha}{a^n} = 0 \\; (a > 1,\\; \\alpha > 0)' },
      ],
      workedExample: {
        title: 'Croissance comparée avec exponentielle discrète',
        statement: 'Calculer $\\lim_{n\\to+\\infty} (n^2 - 2^{n+3})$ et $\\lim_{n\\to+\\infty} \\frac{n\\cdot 3^n}{4^n}$.',
        methodSteps: [
          'Factoriser $n^2 - 2^{n+3} = 2^n\\left(\\frac{n^2}{2^n} - 8\\right) \\to (+\\infty) \\times (-8) = -\\infty$.',
          'Réécrire $\\frac{n\\cdot 3^n}{4^n} = \\frac{n}{(4/3)^n} \\to 0$ car $\\frac{4}{3} > 1$.',
        ],
        conclusion: 'Les limites valent respectivement $-\\infty$ et $0$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p05',
      order: 5,
      title: 'Convergence monotone et propriétés de comparaison (gendarmes)',
      summary:
        'Appliquer le théorème de convergence des suites monotones, les théorèmes de comparaison et d’encadrement (gendarmes) ainsi que le passage à la limite dans les inégalités.',
      conceptExplanation:
        'Le théorème de convergence monotone affirme qu’une suite croissante et majorée (ou décroissante et minorée) converge, même sans formule explicite. Les théorèmes de comparaison et des gendarmes permettent d’enchaîner inégalités asymptotiques et limites.',
      keyRule: 'Attention : u_n < v_n donne lim u_n ≤ lim v_n (inégalité large) ; un majorant M ≠ forcément la limite.',
      formulas: [
        { name: 'Gendarmes', formula: 'v_n \\leqslant u_n \\leqslant w_n \\text{ et } \\lim v_n = \\lim w_n = l \\implies \\lim u_n = l' },
      ],
      workedExample: {
        title: 'Limite avec terme oscillant',
        statement: 'Déterminer $\\lim_{n\\to+\\infty} (-n + \\cos n)$ et $\\lim_{n\\to+\\infty} (n^2 + (-1)^n)$.',
        methodSteps: [
          'Comme $\\cos n \\leqslant 1$, $-n + \\cos n \\leqslant -n + 1 \\to -\\infty$, d’où $\\lim (-n + \\cos n) = -\\infty$.',
          'Comme $(-1)^n \\geqslant -1$, $n^2 + (-1)^n \\geqslant n^2 - 1 \\to +\\infty$, d’où $\\lim (n^2 + (-1)^n) = +\\infty$.',
        ],
        conclusion: 'Les limites sont respectivement $-\\infty$ et $+\\infty$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p06',
      order: 6,
      title: 'Suite v_n = f(u_n) et suites récurrentes u_(n+1) = f(u_n)',
      summary:
        'Calculer lim f(u_n) par composition et déterminer la limite d’une suite récurrente convergente par résolution de l’équation du point fixe f(l) = l.',
      conceptExplanation:
        'Si u_n → a et f(x) → l en a, alors f(u_n) → l. Pour une suite récurrente u_(n+1) = f(u_n) avec f continue sur un intervalle fermé K stable, il faut d’abord prouver la convergence (via la convergence monotone), puis identifier la limite parmi les solutions de f(l) = l dans K.',
      keyRule: 'Toujours prouver la convergence AVANT de résoudre l’équation du point fixe f(l) = l.',
      formulas: [
        { name: 'Point fixe', formula: '(u_{n+1} = f(u_n),\\; f \\text{ continue sur } K,\\; u_n \\in K,\\; u_n \\to l) \\implies l \\in K \\text{ et } f(l) = l' },
      ],
      workedExample: {
        title: 'Limite d’une suite récurrente décroissante',
        statement: 'Pour $u_0 = 0{,}8$ et $u_{n+1} = \\frac{1}{2}u_n\\left(1 + \\frac{u_n}{2}\\right)$, décroissante dans $[0 ; 1]$, trouver $\\lim u_n$.',
        methodSteps: [
          '$(u_n)$ est décroissante et minorée par $0$, donc elle converge vers un réel $l \\in [0 ; 1]$.',
          'La fonction $f(x) = \\frac{1}{2}x(1 + \\frac{x}{2})$ étant continue, $f(l) = l \\iff l^2 - 2l = 0 \\iff l \\in \\{0 ; 2\\}$.',
          'Comme $2 \\notin [0 ; 1]$, on garde $l = 0$.',
        ],
        conclusion: 'La suite converge vers $0$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_suites_numeriques_p07',
      order: 7,
      title: 'Suites couplées/adjacentes et modélisations financières',
      summary:
        'Résoudre le problème des suites couplées (Ex 8) via convergence monotone, différence géométrique et somme constante, et modéliser des situations concrètes d’évolution en pourcentage.',
      conceptExplanation:
        'Deux suites adjacentes (une croissante, l’autre décroissante, de différence tendant vers 0) encadrent leur limite commune. Dans l’exercice des suites couplées, l’invariant u_n + v_n = constante fournit immédiatement cette limite. En modélisation financière, chaque évolution de t% se traduit par une suite géométrique de raison 1 ± t/100.',
      keyRule: 'Pour deux suites adjacentes liées par un invariant u_n + v_n = C, la limite commune vaut C/2.',
      formulas: [
        { name: 'Coefficient multiplicateur', formula: '+t\\% \\iff \\times\\left(1 + \\frac{t}{100}\\right) \\qquad ; \\qquad -t\\% \\iff \\times\\left(1 - \\frac{t}{100}\\right)' },
      ],
      workedExample: {
        title: 'Suites couplées et limite commune (Ex 8)',
        statement: 'Soient $a \\in ]\\frac{1}{2} ; 1[$, $u_0 = 2$, $v_0 = 3$, $u_{n+1} = a u_n + (1-a)v_n$ et $v_{n+1} = (1-a)u_n + a v_n$. Trouver leur limite commune.',
        methodSteps: [
          'Prouver par récurrence $v_n > u_n$, puis $(u_n)$ croissante majorée par $3$ et $(v_n)$ décroissante minorée par $2$ : les deux convergent.',
          'Observer que $w_n = v_n - u_n = (2a - 1)^n \\to 0$ (donc $\\lim u_n = \\lim v_n = l$).',
          'Observer que $t_n = u_n + v_n = t_0 = 5$ est constante, d’où $2l = 5$.',
        ],
        conclusion: 'Les deux suites convergent vers $\\frac{5}{2}$.',
      },
      structuredSteps: p07Steps,
      exercises: p07Steps.map((s) => s.exercise),
    },
  ],
};

