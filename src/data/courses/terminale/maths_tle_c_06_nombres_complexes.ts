import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Pourquoi inventer $i$ tel que $i^2 = -1$ ? (Bombelli et l’équation cubique)',
    paragraphText:
      'Au XVI$^\\text{e}$ siècle, la formule de Scipione dal Ferro pour résoudre $x^3 + px = q$ donne, appliquée à $x^3 - 15x = 4$ (qui admet pourtant la solution réelle évidente $x = 4$), la somme $\\sqrt[3]{2 - 11\\sqrt{-1}} + \\sqrt[3]{2 + 11\\sqrt{-1}}$. Bombelli osa calculer avec $\\sqrt{-1}$ comme un vrai nombre, trouvant $(2 \\pm \\sqrt{-1})^3 = 2 \\pm 11\\sqrt{-1}$, d’où la solution réelle $(2 - \\sqrt{-1}) + (2 + \\sqrt{-1}) = 4$ ! C’est la naissance des nombres complexes et du nombre imaginaire $i$ vérifiant $i^2 = -1$.',
    konanTip: 'Le nombre $i$ n’est pas un caprice : il permet de résoudre TOUTES les équations algébriques, même lorsque les racines finales sont réelles !',
    exercise: {
      id: 'tc_m_num_l06_p01_q01',
      type: 'mcq',
      prompt: 'En utilisant $i^2 = -1$, développer $(2 + i)^3$ comme l’a fait Bombelli.',
      options: [
        '$2 + 11i$',
        '$8 + i$',
        '$2 - 11i$',
        '$6 + 11i$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(2 + i)^3 = 2^3 + 3\\cdot 2^2 i + 3\\cdot 2 i^2 + i^3 = 8 + 12i - 6 - i = 2 + 11i$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'L’ensemble $\\mathbb{C}$ et la forme algébrique $z = a + ib$',
    paragraphText:
      'Il existe un ensemble $\\mathbb{C}$ contenant $\\mathbb{R}$, muni d’une addition et d’une multiplication prolongeant celles de $\\mathbb{R}$, et contenant un élément noté $i$ tel que $i^2 = -1$. Tout nombre complexe $z \\in \\mathbb{C}$ s’écrit de façon UNIQUE sous la forme algébrique $z = a + ib$ avec $(a ; b) \\in \\mathbb{R}^2$. Le réel $a$ est sa partie réelle $\\operatorname{Re}(z)$ et le réel $b$ est sa partie imaginaire $\\operatorname{Im}(z)$.',
    formula: {
      name: 'Forme algébrique et unicité',
      formula: 'z = a + ib \\; (a, b \\in \\mathbb{R}) \\quad ; \\quad a = \\operatorname{Re}(z),\\; b = \\operatorname{Im}(z) \\in \\mathbb{R}',
    },
    exercise: {
      id: 'tc_m_num_l06_p01_q02',
      type: 'mcq',
      prompt: 'Pour $z = -3 + 5i$, quelles sont sa partie réelle $\\operatorname{Re}(z)$ et sa partie imaginaire $\\operatorname{Im}(z)$ ?',
      options: [
        '$\\operatorname{Re}(z) = -3$ et $\\operatorname{Im}(z) = 5i$',
        '$\\operatorname{Re}(z) = -3$ et $\\operatorname{Im}(z) = 5$',
        '$\\operatorname{Re}(z) = 5$ et $\\operatorname{Im}(z) = -3$',
        '$\\operatorname{Re}(z) = 3$ et $\\operatorname{Im}(z) = -5$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Attention : la partie imaginaire $\\operatorname{Im}(z)$ est un nombre RÉEL (sans le $i$ !). Ici $\\operatorname{Re}(z) = -3$ et $\\operatorname{Im}(z) = 5$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Cas particuliers & Égalité',
    stepTheme: 'violet',
    stepTitle: 'Réels, imaginaires purs et égalité de deux complexes',
    paragraphText:
      'Par unicité de l’écriture algébrique : deux nombres complexes sont égaux si et seulement si ils ont même partie réelle ET même partie imaginaire ($a + ib = a’ + ib’ \\iff a = a’$ et $b = b’$). En particulier, $z = 0 \\iff \\operatorname{Re}(z) = 0$ et $\\operatorname{Im}(z) = 0$ ; $z \\in \\mathbb{R} \\iff \\operatorname{Im}(z) = 0$ ; et $z$ est imaginaire pur ($z \\in i\\mathbb{R}$) $\\iff \\operatorname{Re}(z) = 0$.',
    formula: {
      name: 'Égalité dans C',
      formula: 'a + ib = a’ + ib’ \\iff (a = a’ \\text{ et } b = b’) \\qquad (a,b,a’,b’ \\in \\mathbb{R})',
    },
    exercise: {
      id: 'tc_m_num_l06_p01_q03',
      type: 'mcq',
      prompt: 'Pour quels réels $x$ et $y$ a-t-on $(2x - 1) + i(y + 3) = 5 - 2i$ ?',
      options: [
        '$x = 3$ et $y = -5$',
        '$x = 2$ et $y = -1$',
        '$x = 3$ et $y = 5$',
        '$x = -3$ et $y = 5$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Par identification des parties réelles et imaginaires (puisque $x, y \\in \\mathbb{R}$) : $2x - 1 = 5 \\implies x = 3$ et $y + 3 = -2 \\implies y = -5$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Calculs algébriques',
    stepTheme: 'emerald',
    stepTitle: 'Somme, produit et inverse $\\frac{1}{z}$ sous forme algébrique',
    paragraphText:
      'On additionne et on multiplie dans $\\mathbb{C}$ comme dans $\\mathbb{R}$ en remplaçant $i^2$ par $-1$ : $(a + ib)(a’ + ib’) = (aa’ - bb’) + i(ab’ + a’b)$. Pour écrire un quotient $\\frac{1}{a + ib}$ ou $\\frac{z}{a + ib}$ sous forme algébrique (avec $a + ib \\ne 0$), on multiplie numérateur et dénominateur par la quantité conjuguée $a - ib$, en utilisant $(a + ib)(a - ib) = a^2 + b^2$.',
    formula: {
      name: 'Inverse d’un complexe non nul',
      formula: '\\frac{1}{a + ib} = \\frac{a - ib}{a^2 + b^2} = \\frac{a}{a^2 + b^2} - i\\frac{b}{a^2 + b^2}',
    },
    exercise: {
      id: 'tc_m_num_l06_p01_q04',
      type: 'mcq',
      prompt: 'Quelle est la forme algébrique de $z = \\frac{3 + 2i}{1 - i}$ ?',
      options: [
        '$\\frac{1}{2} + \\frac{5}{2}i$',
        '$\\frac{5}{2} + \\frac{1}{2}i$',
        '$\\frac{1}{2} - \\frac{5}{2}i$',
        '$1 + 5i$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)} = \\frac{3 + 3i + 2i + 2i^2}{1^2 + 1^2} = \\frac{1 + 5i}{2} = \\frac{1}{2} + \\frac{5}{2}i$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Puissances de i',
    stepTheme: 'violet',
    stepTitle: 'Périodicité des puissances $i^n$ ($4$-périodique)',
    paragraphText:
      'Les puissances successives de $i$ tournent en cycle de longueur $4$ : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, puis $i^4 = (i^2)^2 = 1$. Pour tout entier $n \\in \\mathbb{N}$, en effectuant la division euclidienne $n = 4q + r$ avec $r \\in \\{0; 1; 2; 3\\}$, on obtient simplement $i^n = (i^4)^q i^r = i^r$.',
    formula: {
      name: 'Cycle des puissances de i',
      formula: 'i^{4q} = 1, \\quad i^{4q+1} = i, \\quad i^{4q+2} = -1, \\quad i^{4q+3} = -i',
    },
    exercise: {
      id: 'tc_m_num_l06_p01_q05',
      type: 'mcq',
      prompt: 'Que valent respectivement $i^{2019}$ et $i^{10^9}$ ?',
      options: [
        '$i^{2019} = -i$ et $i^{10^9} = 1$',
        '$i^{2019} = i$ et $i^{10^9} = -1$',
        '$i^{2019} = -1$ et $i^{10^9} = i$',
        '$i^{2019} = 1$ et $i^{10^9} = 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$2019 = 4 \\times 504 + 3 \\implies i^{2019} = i^3 = -i$. Et $10^9 = 100 \\times 10^7 = 4 \\times 25 \\times 10^7$ est divisible par $4$, donc $i^{10^9} = 1$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Binôme de Newton',
    stepTheme: 'blue',
    stepTitle: 'Développer $(a + ib)^n$ avec le triangle de Pascal',
    paragraphText:
      'La formule du binôme de Newton reste valable dans $\\mathbb{C}$ : $(u + v)^n = \\sum_{k=0}^n \\binom{n}{k} u^{n-k} v^k$. Pour $(1 - 2i)^5$, les coefficients binomiaux d’ordre $5$ sont $1, 5, 10, 10, 5, 1$ : $(1 - 2i)^5 = 1 - 5(2i) + 10(2i)^2 - 10(2i)^3 + 5(2i)^4 - (2i)^5 = 1 - 10i - 40 + 80i + 80 - 32i = 41 + 38i$.',
    exercise: {
      id: 'tc_m_num_l06_p01_q06',
      type: 'mcq',
      prompt: 'Quelle est la forme algébrique de $(1 - 2i)^5$ ?',
      options: [
        '$41 - 38i$',
        '$41 + 38i$',
        '$-39 + 38i$',
        '$1 + 32i$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Partie réelle : $1 - 40 + 80 = 41$. Partie imaginaire : $-10 + 80 - 32 = 38$. Donc $(1 - 2i)^5 = 41 + 38i$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Attention : pas d’ordre sur C !',
    stepTheme: 'orange',
    stepTitle: 'Il n’y a PAS de relation d’ordre compatible sur $\\mathbb{C}$',
    paragraphText:
      'Piège classique : on NE peut PAS écrire $i > 0$ ou $z_1 < z_2$ dans $\\mathbb{C}$ ! En effet, si un ordre compatible avec $+$ et $\\times$ existait, tout carré non nul serait strictement positif, donc $i^2 = -1 > 0$, ce qui est absurde car $1 > 0$. On ne compare par $<$ ou $>$ que des parties réelles, imaginaires, des modules ou des arguments.',
    exercise: {
      id: 'tc_m_num_l06_p01_q07',
      type: 'mcq',
      prompt: 'Parmi ces écritures mathématiques, laquelle est la SEULE qui ait un sens rigoureux ?',
      options: [
        '$3 + 4i > 1 + 2i$',
        '$|3 + 4i| > |1 + 2i|$',
        '$2i > 0$',
        '$\\sqrt{-4} = 2i$ avec la racine carrée réelle',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les modules $|3 + 4i| = 5$ et $|1 + 2i| = \\sqrt{5}$ sont des nombres réels positifs : on peut les comparer ($5 > \\sqrt{5}$). Les inégalités entre complexes non réels et le symbole $\\sqrt{\\phantom{x}}$ sur un négatif sont proscrits.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Conjugué',
    stepTheme: 'blue',
    stepTitle: 'Conjugué $\\bar{z}$ d’un nombre complexe et premières identités',
    paragraphText:
      'Soit $z = a + ib$ ($a, b \\in \\mathbb{R}$). On appelle conjugué de $z$ le nombre complexe noté $\\bar{z}$ défini par $\\bar{z} = a - ib$. On en déduit immédiatement trois formules fondamentales : $z + \\bar{z} = 2a = 2\\operatorname{Re}(z)$, $z - \\bar{z} = 2ib = 2i\\operatorname{Im}(z)$, et $z\\bar{z} = a^2 + b^2 \\in \\mathbb{R}_+$.',
    formula: {
      name: 'Identités avec le conjugué',
      formula: 'z + \\bar{z} = 2\\operatorname{Re}(z) \\quad ; \\quad z - \\bar{z} = 2i\\operatorname{Im}(z) \\quad ; \\quad z\\bar{z} = a^2 + b^2',
    },
    exercise: {
      id: 'tc_m_num_l06_p02_q01',
      type: 'mcq',
      prompt: 'Si $z = 4 - 3i$, que valent $\\bar{z}$ et $z\\bar{z}$ ?',
      options: [
        '$\\bar{z} = -4 + 3i$ et $z\\bar{z} = 7$',
        '$\\bar{z} = 4 + 3i$ et $z\\bar{z} = 25$',
        '$\\bar{z} = 4 + 3i$ et $z\\bar{z} = 7$',
        '$\\bar{z} = -4 - 3i$ et $z\\bar{z} = 25$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le conjugué change uniquement le signe de la partie imaginaire : $\\bar{z} = 4 + 3i$, et $z\\bar{z} = 4^2 + (-3)^2 = 16 + 9 = 25$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Opérations sur z̄',
    stepTheme: 'violet',
    stepTitle: 'Propriétés algébriques du conjugué et critères d’appartenance',
    paragraphText:
      'La conjugaison respecte toutes les opérations : $\\overline{\\bar{z}} = z$, $\\overline{z + z’} = \\bar{z} + \\overline{z’}$, $\\overline{zz’} = \\bar{z}\\overline{z’}$, $\\overline{z^n} = (\\bar{z})^n$, et $\\overline{\\left(\\frac{z}{z’}\\right)} = \\frac{\\bar{z}}{\\overline{z’}}$ ($z’ \\ne 0$). Elle permet aussi de caractériser sans passer par la forme algébrique : $z \\in \\mathbb{R} \\iff \\bar{z} = z$, et $z \\in i\\mathbb{R} \\iff \\bar{z} = -z$.',
    formula: {
      name: 'Critères réel / imaginaire pur',
      formula: 'z \\in \\mathbb{R} \\iff \\bar{z} = z \\qquad ; \\qquad z \\in i\\mathbb{R} \\iff \\bar{z} = -z',
    },
    exercise: {
      id: 'tc_m_num_l06_p02_q02',
      type: 'mcq',
      prompt: 'Quel est le conjugué de $Z = \\frac{(3 + 2i)\\bar{z} - i}{1 + 4i}$ ?',
      options: [
        '$\\frac{(3 - 2i)z + i}{1 - 4i}$',
        '$\\frac{(3 + 2i)z + i}{1 + 4i}$',
        '$\\frac{(3 - 2i)\\bar{z} + i}{1 - 4i}$',
        '$\\frac{(-3 + 2i)z - i}{-1 + 4i}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'On conjugue chaque bloc : $\\overline{3 + 2i} = 3 - 2i$, $\\overline{\\bar{z}} = z$, $\\overline{-i} = +i$ et $\\overline{1 + 4i} = 1 - 4i$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice type',
    stepTheme: 'blue',
    stepTitle: 'Déterminer $x \\in \\mathbb{R}$ pour que $Z = \\frac{2 - 3i}{x + i}$ soit réel ou imaginaire pur',
    paragraphText:
      'Pour $x \\in \\mathbb{R}$, $x + i \\ne 0$. On écrit $Z$ sous forme algébrique : $Z = \\frac{(2 - 3i)(x - i)}{x^2 + 1} = \\frac{(2x - 3) + i(-3x - 2)}{x^2 + 1}$. Ainsi, $Z \\in \\mathbb{R} \\iff \\operatorname{Im}(Z) = 0 \\iff -3x - 2 = 0 \\iff x = -\\frac{2}{3}$ ; et $Z \\in i\\mathbb{R} \\iff \\operatorname{Re}(Z) = 0 \\iff 2x - 3 = 0 \\iff x = \\frac{3}{2}$.',
    exercise: {
      id: 'tc_m_num_l06_p02_q03',
      type: 'mcq',
      prompt: 'Pour quelles valeurs de $x \\in \\mathbb{R}$ le quotient $Z = \\frac{2 - 3i}{x + i}$ est-il respectivement réel puis imaginaire pur ?',
      options: [
        'Réel pour $x = \\frac{3}{2}$, imaginaire pur pour $x = -\\frac{2}{3}$',
        'Réel pour $x = -\\frac{2}{3}$, imaginaire pur pour $x = \\frac{3}{2}$',
        'Réel pour $x = 0$, imaginaire pur pour $x = \\frac{2}{3}$',
        'Réel pour $x = \\frac{2}{3}$, imaginaire pur pour $x = -\\frac{3}{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{Re}(Z) = \\frac{2x - 3}{x^2 + 1}$ s’annule pour $x = \\frac{3}{2}$ ($Z$ est alors imaginaire pur), et $\\operatorname{Im}(Z) = \\frac{-3x - 2}{x^2 + 1}$ s’annule pour $x = -\\frac{2}{3}$ ($Z$ est alors réel).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Module',
    stepTheme: 'blue',
    stepTitle: 'Module $|z| = \\sqrt{a^2 + b^2} = \\sqrt{z\\bar{z}}$',
    paragraphText:
      'Pour tout $z = a + ib$ ($a, b \\in \\mathbb{R}$), on appelle module de $z$ le réel positif noté $|z| = \\sqrt{a^2 + b^2} = \\sqrt{z\\bar{z}}$. Si $z$ est réel, son module coïncide avec sa valeur absolue. Si $z = 0$, $|z| = 0$ (et réciproquement, $|z| = 0 \\iff z = 0$). De plus, $|\\bar{z}| = |-z| = |z|$ et $z\\bar{z} = |z|^2$.',
    formula: {
      name: 'Module d’un nombre complexe',
      formula: '|a + ib| = \\sqrt{a^2 + b^2} \\qquad ; \\qquad z\\bar{z} = |z|^2',
    },
    exercise: {
      id: 'tc_m_num_l06_p02_q04',
      type: 'mcq',
      prompt: 'Calculer $|1 - i\\sqrt{3}|$ et $|\\overline{4 + 3i}|$.',
      options: [
        '$4$ et $5$',
        '$2$ et $5$',
        '$\\sqrt{2}$ et $7$',
        '$2$ et $\\sqrt{7}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$|1 - i\\sqrt{3}| = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$, et $|\\overline{4 + 3i}| = |4 + 3i| = \\sqrt{4^2 + 3^2} = 5$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Propriétés du module',
    stepTheme: 'violet',
    stepTitle: 'Module d’un produit, d’un quotient, d’une puissance et inégalité triangulaire',
    paragraphText:
      'Le module est multiplicatif : $|zz’| = |z|\\cdot|z’|$, $|z^n| = |z|^n$ ($n \\in \\mathbb{N}$, et aussi $n \\in \\mathbb{Z}$ si $z \\ne 0$), et $\\left|\\frac{z}{z’}\\right| = \\frac{|z|}{|z’|}$ ($z’ \\ne 0$). En revanche, pour une somme, on n’a qu’une inégalité, appelée inégalité triangulaire : $|z + z’| \\leqslant |z| + |z’|$.',
    formula: {
      name: 'Propriétés du module',
      formula: '|zz’| = |z|\\,|z’| \\quad ; \\quad |z^n| = |z|^n \\quad ; \\quad \\left|\\frac{z}{z’}\\right| = \\frac{|z|}{|z’|} \\quad ; \\quad |z + z’| \\leqslant |z| + |z’|',
    },
    exercise: {
      id: 'tc_m_num_l06_p02_q05',
      type: 'mcq',
      prompt: 'Sans développer, calculer $|(3 - i)(3i - 2)|$, $\\left|\\frac{3 - i}{4 - i\\sqrt{2}}\\right|$ et $|(3 + i)^3|$.',
      options: [
        '$\\sqrt{130}$, $\\frac{\\sqrt{5}}{3}$ et $10\\sqrt{10}$',
        '$\\sqrt{23}$, $\\frac{10}{18}$ et $30$',
        '$\\sqrt{130}$, $\\frac{5}{3}$ et $10\\sqrt{10}$',
        '$13\\sqrt{10}$, $\\frac{\\sqrt{5}}{3}$ et $1000$',
      ],
      correctAnswerIndex: 0,
      explanation: '$|(3 - i)(3i - 2)| = \\sqrt{10}\\sqrt{13} = \\sqrt{130}$ ; $\\left|\\frac{3 - i}{4 - i\\sqrt{2}}\\right| = \\frac{\\sqrt{10}}{\\sqrt{18}} = \\frac{\\sqrt{5}}{3}$ ; $|(3 + i)^3| = (\\sqrt{10})^3 = 10\\sqrt{10}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur classique sur |z|',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais écrire $|a + ib| = \\sqrt{a^2 + (ib)^2}$ ni $|z + z’| = |z| + |z’|$',
    paragraphText:
      'Deux fautes à proscrire absolument : 1) le $i$ n’entre JAMAIS dans la racine carrée du module ($|a + ib| = \\sqrt{a^2 + b^2}$, pas $\\sqrt{a^2 - b^2}$) ; 2) le module d’une somme n’est PAS la somme des modules : par exemple $|1 + i| = \\sqrt{2} < |1| + |i| = 2$.',
    exercise: {
      id: 'tc_m_num_l06_p02_q06',
      type: 'mcq',
      prompt: 'Que vaut $|3 + 4i| - |3 - 4i|$ et pourquoi $|z + \\bar{z}|$ n’est-il pas égal à $2|z|$ en général ?',
      options: [
        '$|3 + 4i| - |3 - 4i| = 8i$ et $|z + \\bar{z}| = 2|z|$ toujours',
        '$|3 + 4i| - |3 - 4i| = 0$, et $|z + \\bar{z}| = |2\\operatorname{Re}(z)| \\leqslant 2|z|$ (égalité seulement si $z \\in \\mathbb{R}$)',
        '$|3 + 4i| - |3 - 4i| = 2$, et $|z + \\bar{z}| = 0$',
        '$|3 + 4i| - |3 - 4i| = 10$, et $|z + \\bar{z}| > 2|z|$',
      ],
      correctAnswerIndex: 1,
      explanation: '$|3 + 4i| = |3 - 4i| = 5$, donc leur différence vaut $0$. Pour $z = i$, $|i + (-i)| = 0 < 2|i| = 2$ : le module n’est pas additif !',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Équation avec z̄',
    stepTheme: 'slate',
    stepTitle: 'Résoudre une équation du $1^\\text{er}$ degré mêlant $z$ et $\\bar{z}$',
    paragraphText:
      'Pour résoudre une équation comme $2z + 3\\bar{z} = 10 - 5i$, pose $z = x + iy$ ($x, y \\in \\mathbb{R}$), remplace $\\bar{z}$ par $x - iy$, regroupe partie réelle et partie imaginaire, puis identifie à $0$ ou au second membre.',
    exercise: {
      id: 'tc_m_num_l06_p02_q07',
      type: 'mcq',
      prompt: 'Quelle est la solution dans $\\mathbb{C}$ de l’équation $2z + 3\\bar{z} = 10 - 5i$ ?',
      options: [
        '$z = 2 + 5i$',
        '$z = 2 - 5i$',
        '$z = -2 + 5i$',
        '$z = 5 + 2i$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Avec $z = x + iy$, $2(x + iy) + 3(x - iy) = 5x - iy = 10 - 5i \\iff 5x = 10$ et $-y = -5 \\iff x = 2$ et $y = 5$, soit $z = 2 + 5i$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Plan complexe',
    stepTheme: 'blue',
    stepTitle: 'Affixe d’un point et affixe d’un vecteur dans $(O ; \\vec{u}, \\vec{v})$',
    paragraphText:
      'Le plan est muni d’un repère orthonormé direct $(O ; \\vec{u}, \\vec{v})$, appelé plan complexe. À tout nombre complexe $z = a + ib$ ($a, b \\in \\mathbb{R}$) correspond un unique point $M(a ; b)$, appelé point image de $z$, et réciproquement $z$ est l’affixe de $M$ (notée $z_M$). De même, au vecteur $\\vec{w}(a ; b)$ correspond l’affixe $z_{\\vec{w}} = a + ib$. L’axe des abscisses est l’axe réel et l’axe des ordonnées est l’axe imaginaire pur.',
    formula: {
      name: 'Correspondance géométrique',
      formula: 'M(a ; b) \\longleftrightarrow z_M = a + ib \\qquad ; \\qquad \\vec{w}(a ; b) \\longleftrightarrow z_{\\vec{w}} = a + ib',
    },
    exercise: {
      id: 'tc_m_num_l06_p03_q01',
      type: 'mcq',
      prompt: 'Dans le plan complexe, où se situent les points $M(z)$ lorsque $z$ et $\\bar{z}$ ont même image ?',
      options: [
        'Sur l’axe imaginaire pur $(O ; \\vec{v})$',
        'Sur l’axe réel $(O ; \\vec{u})$',
        'Sur la première bissectrice $y = x$',
        'Uniquement à l’origine $O$',
      ],
      correctAnswerIndex: 1,
      explanation: '$M(z) = M(\\bar{z}) \\iff z = \\bar{z} \\iff z \\in \\mathbb{R}$, donc $M$ appartient à l’axe réel $(O ; \\vec{u})$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Vecteurs & Distances',
    stepTheme: 'violet',
    stepTitle: 'Affixe de $\\overrightarrow{AB}$, somme vectorielle et distance $AB$',
    paragraphText:
      'Pour tous points $A(z_A)$ et $B(z_B)$ : l’affixe du vecteur $\\overrightarrow{AB}$ vaut $z_{\\overrightarrow{AB}} = z_B - z_A$ (arrivée moins départ !). Par linéarité, $z_{\\vec{w} + \\vec{w}’} = z_{\\vec{w}} + z_{\\vec{w}’}$ et $z_{k\\vec{w}} = k z_{\\vec{w}}$ ($k \\in \\mathbb{R}$). La norme du vecteur $\\overrightarrow{AB}$, c’est-à-dire la distance $AB$, vaut $AB = |z_B - z_A|$.',
    formula: {
      name: 'Affixe d’un vecteur et distance',
      formula: 'z_{\\overrightarrow{AB}} = z_B - z_A \\qquad ; \\qquad AB = |z_B - z_A|',
    },
    exercise: {
      id: 'tc_m_num_l06_p03_q02',
      type: 'mcq',
      prompt: 'Soient $A(2 - i)$ et $B(-1 + 3i)$. Quelle est l’affixe de $\\overrightarrow{AB}$ et la distance $AB$ ?',
      options: [
        '$z_{\\overrightarrow{AB}} = 3 - 4i$ et $AB = 5$',
        '$z_{\\overrightarrow{AB}} = -3 + 4i$ et $AB = 5$',
        '$z_{\\overrightarrow{AB}} = 1 + 2i$ et $AB = \\sqrt{5}$',
        '$z_{\\overrightarrow{AB}} = -3 + 4i$ et $AB = 25$',
      ],
      correctAnswerIndex: 1,
      explanation: '$z_{\\overrightarrow{AB}} = z_B - z_A = (-1 + 3i) - (2 - i) = -3 + 4i$, et $AB = |-3 + 4i| = \\sqrt{(-3)^2 + 4^2} = 5$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Symétries',
    stepTheme: 'violet',
    stepTitle: 'Interprétation géométrique de $\\bar{z}$, $-z$ et $-\\bar{z}$',
    paragraphText:
      'Si $M$ a pour affixe $z = a + ib$ : le point $M_1(\\bar{z}) = (a ; -b)$ est le symétrique de $M$ par rapport à l’axe réel $(Ox)$ ; le point $M_2(-z) = (-a ; -b)$ est le symétrique de $M$ par rapport à l’origine $O$ ; et le point $M_3(-\\bar{z}) = (-a ; b)$ est le symétrique de $M$ par rapport à l’axe imaginaire $(Oy)$.',
    exercise: {
      id: 'tc_m_num_l06_p03_q03',
      type: 'mcq',
      prompt: 'Quel point est le symétrique de $M(z)$ par rapport à l’axe des ordonnées $(O ; \\vec{v})$ ?',
      options: [
        '$M’(\\bar{z})$',
        '$M’(-z)$',
        '$M’(-\\bar{z})$',
        '$M’(iz)$',
      ],
      correctAnswerIndex: 2,
      explanation: 'La symétrie par rapport à $(Oy)$ transforme $(a ; b)$ en $(-a ; b)$, d’affixe $-a + ib = -\\bar{z}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Milieu & Parallélogramme',
    stepTheme: 'emerald',
    stepTitle: 'Affixe du milieu, du barycentre et du $4^\\text{e}$ sommet d’un parallélogramme',
    paragraphText:
      'Le milieu $I$ du segment $[AB]$ a pour affixe $z_I = \\frac{z_A + z_B}{2}$ (et plus généralement le barycentre $G$ de $(A,\\alpha), (B,\\beta)$ a pour affixe $\\frac{\\alpha z_A + \\beta z_B}{\\alpha + \\beta}$). Pour que $ABCD$ soit un parallélogramme, il faut $\\overrightarrow{AB} = \\overrightarrow{DC}$, soit $z_B - z_A = z_C - z_D$, d’où $z_D = z_A - z_B + z_C$.',
    formula: {
      name: 'Milieu et parallélogramme',
      formula: 'z_I = \\frac{z_A + z_B}{2} \\qquad ; \\qquad ABCD \\text{ parallélogramme} \\iff z_B - z_A = z_C - z_D',
    },
    exercise: {
      id: 'tc_m_num_l06_p03_q04',
      type: 'mcq',
      prompt: 'Soient $A(1 + 2i)$, $B(4 + i)$ et $C(i)$. Quelle est l’affixe du point $D$ tel que $ABCD$ soit un parallélogramme ?',
      options: [
        '$z_D = -3 + 2i$',
        '$z_D = 3$',
        '$z_D = 5 + 2i$',
        '$z_D = -3 + 3i$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\overrightarrow{AD} = \\overrightarrow{BC} \\implies z_D - z_A = z_C - z_B \\implies z_D = (1 + 2i) + i - (4 + i) = -3 + 2i$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Lieux géométriques',
    stepTheme: 'emerald',
    stepTitle: 'Ensembles de points $|z - z_A| = R$ et $|z - z_A| = |z - z_B|$',
    paragraphText:
      'En traduisant $|z - z_A|$ par la distance $AM$ (avec $M(z)$ et $A(z_A)$), deux lieux géométriques apparaissent sans aucun calcul : $|z - z_A| = R$ ($R > 0$) caractérise $AM = R$, c’est le CERCLE de centre $A$ et de rayon $R$ ; $|z - z_A| = |z - z_B|$ ($A \\ne B$) caractérise $AM = BM$, c’est la MÉDIATRICE du segment $[AB]$.',
    formula: {
      name: 'Cercle et médiatrice',
      formula: '|z - z_A| = R \\iff M \\in \\mathcal{C}(A ; R) \\qquad ; \\qquad |z - z_A| = |z - z_B| \\iff M \\in \\operatorname{med}[AB]',
    },
    exercise: {
      id: 'tc_m_num_l06_p03_q05',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $M(z)$ tels que $|z - 2 + 3i| = 4$ ?',
      options: [
        'Le cercle de centre $A(-2 ; 3)$ et de rayon $4$',
        'Le cercle de centre $A(2 ; -3)$ et de rayon $4$',
        'Le cercle de centre $A(2 ; -3)$ et de rayon $2$',
        'La droite passant par $(2 ; -3)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$|z - 2 + 3i| = |z - (2 - 3i)| = 4$ signifie $AM = 4$ avec $A$ d’affixe $2 - 3i$, soit le point $(2 ; -3)$. C’est donc le cercle de centre $A(2 ; -3)$ et de rayon $4$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège sur z̄ dans les lieux',
    stepTheme: 'orange',
    stepTitle: 'Attention à $|\\bar{z} - z_A|$ ou $|iz - z_A|$ avant de conclure !',
    paragraphText:
      'Pour reconnaître une distance $AM$, il faut d’abord isoler $z$ (avec coefficient $+1$ !). Si l’équation comporte $\\bar{z}$, on utilise $|\\bar{z} - z_A| = |\\overline{z - \\overline{z_A}}| = |z - \\overline{z_A}|$ : le centre devient $\\overline{z_A}$ ! Si l’équation comporte $2z$, on factorise par $2$ : $|2z - 4| = 2|z - 2|$.',
    exercise: {
      id: 'tc_m_num_l06_p03_q06',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $M(z)$ vérifiant $|iz + 1 - 2i| = 3$ ?',
      options: [
        'Le cercle de centre $(-1 ; 2)$ et de rayon $3$',
        'Le cercle de centre $(2 ; 1)$ et de rayon $3$',
        'Le cercle de centre $(2 ; -1)$ et de rayon $3$',
        'La médiatrice de deux points',
      ],
      correctAnswerIndex: 1,
      explanation: '$|iz + 1 - 2i| = |i(z - 2 - i)| = |i|\\cdot|z - (2 + i)| = |z - (2 + i)| = 3$ (car $\\frac{1 - 2i}{i} = -i - 2 = -(2 + i)$). C’est le cercle de centre $(2 ; 1)$ et de rayon $3$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Alignement',
    stepTheme: 'slate',
    stepTitle: 'Caractériser l’alignement ou le parallélisme avec les affixes',
    paragraphText:
      'Deux vecteurs non nuls $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires (donc $(AB) \\parallel (CD)$) si et seulement si il existe $k \\in \\mathbb{R}$ tel que $z_D - z_C = k(z_B - z_A)$, autrement dit $\\frac{z_D - z_C}{z_B - z_A} \\in \\mathbb{R}$. En particulier, trois points $A, B, C$ ($A \\ne B$) sont alignés si et seulement si $\\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}$.',
    exercise: {
      id: 'tc_m_num_l06_p03_q07',
      type: 'mcq',
      prompt: 'Soient $A(1)$, $B(2 + i)$ et $C(4 + 3i)$. Les points $A, B, C$ sont-ils alignés ?',
      options: [
        'Oui, car $\\frac{z_C - z_A}{z_B - z_A} = 3 \\in \\mathbb{R}$',
        'Oui, car $z_C = z_A + z_B$',
        'Non, ils forment un triangle rectangle',
        'Oui, car $|z_C - z_A| = 3|z_B - z_A|$',
      ],
      correctAnswerIndex: 0,
      explanation: '$z_C - z_A = 3 + 3i = 3(1 + i)$ et $z_B - z_A = 1 + i$, donc $\\frac{z_C - z_A}{z_B - z_A} = 3 \\in \\mathbb{R}$ : $\\overrightarrow{AC} = 3\\overrightarrow{AB}$, les points sont alignés.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Argument & Forme trigo',
    stepTheme: 'blue',
    stepTitle: 'Argument, argument principal et forme trigonométrique',
    paragraphText:
      'Pour tout complexe NON NUL $z = a + ib$ de module $r = |z| > 0$, on appelle argument de $z$, noté $\\arg(z)$, toute mesure en radians de l’angle orienté $(\\vec{u} ; \\overrightarrow{OM})$. L’unique mesure appartenant à $]-\\pi ; \\pi]$ est appelée argument principal, noté $\\operatorname{Arg}(z)$. Si $\\varphi = \\arg(z)$, alors $\\cos\\varphi = \\frac{a}{r}$ et $\\sin\\varphi = \\frac{b}{r}$, d’où la forme trigonométrique : $z = r(\\cos\\varphi + i\\sin\\varphi)$.',
    formula: {
      name: 'Passage algébrique ↔ trigonométrique',
      formula: 'r = |z| = \\sqrt{a^2 + b^2}, \\quad \\cos\\varphi = \\frac{a}{r}, \\quad \\sin\\varphi = \\frac{b}{r}, \\quad z = r(\\cos\\varphi + i\\sin\\varphi)',
    },
    exercise: {
      id: 'tc_m_num_l06_p04_q01',
      type: 'mcq',
      prompt: 'Quels sont le module et l’argument principal de $z_1 = -\\sqrt{3} + i$ ?',
      options: [
        '$r = 2$ et $\\operatorname{Arg}(z_1) = \\frac{5\\pi}{6}$',
        '$r = 2$ et $\\operatorname{Arg}(z_1) = -\\frac{\\pi}{6}$',
        '$r = 2$ et $\\operatorname{Arg}(z_1) = \\frac{\\pi}{6}$',
        '$r = 4$ et $\\operatorname{Arg}(z_1) = \\frac{2\\pi}{3}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$r = \\sqrt{(-\\sqrt{3})^2 + 1^2} = 2$. On a $\\cos\\varphi = -\\frac{\\sqrt{3}}{2}$ et $\\sin\\varphi = \\frac{1}{2} > 0$, donc l’angle est dans le $2^\\text{e}$ quadrant : $\\operatorname{Arg}(z_1) = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Notation exponentielle',
    stepTheme: 'blue',
    stepTitle: 'Notation $e^{i\\theta}$ et forme exponentielle $z = re^{i\\theta}$',
    paragraphText:
      'Pour tout $\\theta \\in \\mathbb{R}$, on pose $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Ce nombre a toujours pour module $1$ ($|e^{i\\theta}| = 1$) et pour argument $\\theta$ ($\\bmod 2\\pi$). Tout nombre complexe non nul $z$ s’écrit sous forme exponentielle $z = re^{i\\theta}$ avec $r = |z| > 0$ et $\\theta = \\arg(z)$. Valeurs clés : $1 = e^{i0}$, $-1 = e^{i\\pi}$, $i = e^{i\\pi/2}$, $-i = e^{-i\\pi/2}$, $1 + i = \\sqrt{2}e^{i\\pi/4}$, $1 + i\\sqrt{3} = 2e^{i\\pi/3}$.',
    formula: {
      name: 'Forme exponentielle',
      formula: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta \\quad ; \\quad z = r e^{i\\theta} \\; (r > 0)',
    },
    exercise: {
      id: 'tc_m_num_l06_p04_q02',
      type: 'mcq',
      prompt: 'Comment s’écrit le quotient $Z = \\frac{1 + i}{1 + i\\sqrt{3}}$ sous forme exponentielle ?',
      options: [
        '$\\frac{\\sqrt{2}}{2} e^{i\\frac{7\\pi}{12}}$',
        '$\\frac{\\sqrt{2}}{2} e^{-i\\frac{\\pi}{12}}$',
        '$\\sqrt{2} e^{-i\\frac{\\pi}{12}}$',
        '$\\frac{\\sqrt{2}}{2} e^{i\\frac{\\pi}{12}}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$1 + i = \\sqrt{2}e^{i\\pi/4}$ et $1 + i\\sqrt{3} = 2e^{i\\pi/3}$. Donc $Z = \\frac{\\sqrt{2}}{2} e^{i(\\pi/4 - \\pi/3)} = \\frac{\\sqrt{2}}{2} e^{-i\\pi/12}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Règles sur les arguments',
    stepTheme: 'violet',
    stepTitle: 'Propriétés algébriques de l’argument (comme le logarithme !)',
    paragraphText:
      'L’argument transforme les produits en sommes et les quotients en différences (modulo $2\\pi$) : $\\arg(zz’) = \\arg(z) + \\arg(z’) \\pmod{2\\pi}$, $\\arg(z^n) = n\\arg(z) \\pmod{2\\pi}$, $\\arg\\left(\\frac{1}{z}\\right) = -\\arg(z) \\pmod{2\\pi}$, $\\arg\\left(\\frac{z}{z’}\\right) = \\arg(z) - \\arg(z’) \\pmod{2\\pi}$, et $\\arg(\\bar{z}) = -\\arg(z) \\pmod{2\\pi}$.',
    formula: {
      name: 'Propriétés des arguments',
      formula: '\\arg(zz’) \\equiv \\arg(z) + \\arg(z’), \\quad \\arg\\left(\\frac{z}{z’}\\right) \\equiv \\arg(z) - \\arg(z’), \\quad \\arg(z^n) \\equiv n\\arg(z) \\pmod{2\\pi}',
    },
    exercise: {
      id: 'tc_m_num_l06_p04_q03',
      type: 'mcq',
      prompt: 'Si $\\arg(z) \\equiv \\frac{\\pi}{3} \\pmod{2\\pi}$, quel est un argument de $-\\bar{z}$ ?',
      options: [
        '$-\\frac{\\pi}{3}$',
        '$\\frac{2\\pi}{3}$',
        '$-\\frac{2\\pi}{3}$',
        '$\\frac{4\\pi}{3}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$-\\bar{z} = (-1)\\cdot \\bar{z}$, donc $\\arg(-\\bar{z}) \\equiv \\arg(-1) + \\arg(\\bar{z}) \\equiv \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3} \\pmod{2\\pi}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Calcul exact de cos et sin',
    stepTheme: 'blue',
    stepTitle: 'Déduire $\\cos\\frac{5\\pi}{12}$ et $\\sin\\frac{5\\pi}{12}$ grâce aux formes de $(1+i)(\\sqrt{3}+i)$',
    paragraphText:
      'Calculons $Z = (1 + i)(\\sqrt{3} + i)$ de deux façons. Forme algébrique : $Z = (\\sqrt{3} - 1) + i(\\sqrt{3} + 1)$. Forme exponentielle : $1 + i = \\sqrt{2}e^{i\\pi/4}$ et $\\sqrt{3} + i = 2e^{i\\pi/6}$, donc $Z = 2\\sqrt{2} e^{i(\\pi/4 + \\pi/6)} = 2\\sqrt{2} e^{i5\\pi/12}$. Par unicité de la forme algébrique, $2\\sqrt{2}\\cos\\frac{5\\pi}{12} = \\sqrt{3} - 1$ et $2\\sqrt{2}\\sin\\frac{5\\pi}{12} = \\sqrt{3} + 1$.',
    formula: {
      name: 'Valeurs exactes en 5π/12',
      formula: '\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{6} - \\sqrt{2}}{4} \\qquad ; \\qquad \\sin\\frac{5\\pi}{12} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}',
    },
    exercise: {
      id: 'tc_m_num_l06_p04_q04',
      type: 'mcq',
      prompt: 'À partir de $(1 + i)(\\sqrt{3} + i) = 2\\sqrt{2}e^{i\\frac{5\\pi}{12}}$, que vaut exactement $\\cos\\frac{5\\pi}{12}$ ?',
      options: [
        '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
        '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
        '$\\frac{\\sqrt{3} - 1}{2}$',
        '$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{3} - 1}{2\\sqrt{2}} = \\frac{(\\sqrt{3} - 1)\\sqrt{2}}{4} = \\frac{\\sqrt{6} - \\sqrt{2}}{4} > 0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Attention au signe de r !',
    stepTheme: 'orange',
    stepTitle: 'Un module $r$ est TOUJOURS strictement positif ($r > 0$)',
    paragraphText:
      'Piège classique : $-2(\\cos\\theta + i\\sin\\theta)$ n’est PAS une forme trigonométrique, car $-2 < 0$ ! Pour la corriger, on absorbe le signe moins avec $-1 = e^{i\\pi}$ : $-2e^{i\\theta} = 2e^{i(\\theta + \\pi)}$. De même, $\\cos\\theta - i\\sin\\theta = e^{-i\\theta}$ et $\\sin\\theta + i\\cos\\theta = e^{i(\\frac{\\pi}{2} - \\theta)}$.',
    exercise: {
      id: 'tc_m_num_l06_p04_q05',
      type: 'mcq',
      prompt: 'Quelle est la forme exponentielle correcte de $z = -3\\left(\\cos\\frac{\\pi}{5} + i\\sin\\frac{\\pi}{5}\\right)$ ?',
      options: [
        '$-3 e^{i\\frac{\\pi}{5}}$',
        '$3 e^{-i\\frac{\\pi}{5}}$',
        '$3 e^{i\\frac{6\\pi}{5}}$ (ou $3 e^{-i\\frac{4\\pi}{5}}$)',
        '$3 e^{i\\frac{4\\pi}{5}}$',
      ],
      correctAnswerIndex: 2,
      explanation: '$-3 e^{i\\pi/5} = 3 e^{i\\pi} e^{i\\pi/5} = 3 e^{i(\\pi + \\pi/5)} = 3 e^{i6\\pi/5} = 3 e^{-i4\\pi/5}$ (argument principal $-\\frac{4\\pi}{5}$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Angle orienté',
    stepTheme: 'emerald',
    stepTitle: 'Lien entre argument d’un quotient et angle orienté $(\\overrightarrow{AB} ; \\overrightarrow{AC})$',
    paragraphText:
      'Pour trois points distincts $A, B, C$ : $\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) = \\arg(z_{\\overrightarrow{AC}}) - \\arg(z_{\\overrightarrow{AB}}) = (\\vec{u} ; \\overrightarrow{AC}) - (\\vec{u} ; \\overrightarrow{AB}) = \\operatorname{mes}(\\overrightarrow{AB} ; \\overrightarrow{AC}) + 2k\\pi$. De même, $\\frac{AC}{AB} = \\left|\\frac{z_C - z_A}{z_B - z_A}\\right|$. Ce quotient complexe contient donc à la fois le rapport des longueurs ET l’angle orienté !',
    formula: {
      name: 'Interprétation angulaire du quotient',
      formula: '\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) \\equiv (\\overrightarrow{AB} ; \\overrightarrow{AC}) \\pmod{2\\pi}',
    },
    exercise: {
      id: 'tc_m_num_l06_p04_q06',
      type: 'mcq',
      prompt: 'Si $\\frac{z_C - z_A}{z_B - z_A} = e^{i\\frac{\\pi}{3}}$, quelle est la nature du triangle $ABC$ ?',
      options: [
        'Rectangle isocèle en $A$',
        'Équilatéral (de sens direct $A \\to B \\to C$)',
        'Isocèle rectangle en $B$',
        'Aplati',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\left|\\frac{z_C - z_A}{z_B - z_A}\\right| = 1 \\implies AC = AB$, et $(\\overrightarrow{AB} ; \\overrightarrow{AC}) \\equiv \\frac{\\pi}{3} \\pmod{2\\pi}$. Un triangle isocèle ayant un angle de $\\frac{\\pi}{3}$ est équilatéral.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Factorisation par l’arc moitié',
    stepTheme: 'slate',
    stepTitle: 'La méthode de l’angle moitié pour $1 + e^{i\\theta}$ ou $1 - e^{i\\theta}$',
    paragraphText:
      'Pour trouver le module et un argument de $1 + e^{i\\theta}$ ou $e^{i\\alpha} + e^{i\\beta}$, factorise par $e^{i\\frac{\\theta}{2}}$ (l’exponentielle de la demi-somme) : $1 + e^{i\\theta} = e^{i\\frac{\\theta}{2}}(e^{-i\\frac{\\theta}{2}} + e^{i\\frac{\\theta}{2}}) = 2\\cos\\left(\\frac{\\theta}{2}\\right)e^{i\\frac{\\theta}{2}}$.',
    exercise: {
      id: 'tc_m_num_l06_p04_q07',
      type: 'mcq',
      prompt: 'Quelle est la forme trigonométrique simplifiée de $1 - e^{i\\theta}$ pour $\\theta \\in ]0 ; 2\\pi[$ ?',
      options: [
        '$2\\sin\\left(\\frac{\\theta}{2}\\right) e^{i\\left(\\frac{\\theta}{2} - \\frac{\\pi}{2}\\right)}$',
        '$2\\cos\\left(\\frac{\\theta}{2}\\right) e^{i\\frac{\\theta}{2}}$',
        '$-2\\sin\\left(\\frac{\\theta}{2}\\right) e^{i\\frac{\\theta}{2}}$',
        '$2\\sin\\left(\\frac{\\theta}{2}\\right) e^{i\\frac{\\theta}{2}}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$1 - e^{i\\theta} = e^{i\\theta/2}(-2i\\sin(\\theta/2))$. Comme $\\sin(\\theta/2) > 0$ sur $]0 ; 2\\pi[$ et $-i = e^{-i\\pi/2}$, cela donne $2\\sin(\\frac{\\theta}{2}) e^{i(\\frac{\\theta}{2} - \\frac{\\pi}{2})}$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Formule de Moivre',
    stepTheme: 'violet',
    stepTitle: 'La formule de Moivre et le calcul de grandes puissances',
    paragraphText:
      'Pour tout $\\theta \\in \\mathbb{R}$ et tout entier relatif $n \\in \\mathbb{Z}$ : $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, ce qui s’écrit encore plus simplement en notation exponentielle $(e^{i\\theta})^n = e^{in\\theta}$. Pour calculer une grande puissance $(a + ib)^n$, on passe d’abord sous forme exponentielle $r e^{i\\theta}$, puis on applique $(r e^{i\\theta})^n = r^n e^{in\\theta}$.',
    formula: {
      name: 'Formule de Moivre',
      formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\qquad (\\forall \\theta \\in \\mathbb{R},\\; \\forall n \\in \\mathbb{Z})',
    },
    exercise: {
      id: 'tc_m_num_l06_p05_q01',
      type: 'mcq',
      prompt: 'En appliquant la formule de Moivre, calculer $\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)^{300}$.',
      options: [
        '$-1$',
        '$i$',
        '$1$',
        '$e^{i\\pi/3}$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2} = \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3} = e^{i\\pi/3}$. Ainsi, $\\left(e^{i\\pi/3}\\right)^{300} = e^{i100\\pi} = \\cos(100\\pi) + i\\sin(100\\pi) = 1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Formules d’Euler',
    stepTheme: 'violet',
    stepTitle: 'Les formules d’Euler pour $\\cos\\theta$ et $\\sin\\theta$',
    paragraphText:
      'En additionnant puis en soustrayant $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ et $e^{-i\\theta} = \\cos\\theta - i\\sin\\theta$, on obtient les deux célèbres formules d’Euler (valables pour tout $\\theta \\in \\mathbb{R}$) : $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$ et $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$.',
    formula: {
      name: 'Formules d’Euler',
      formula: '\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2} \\qquad ; \\qquad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}',
    },
    exercise: {
      id: 'tc_m_num_l06_p05_q02',
      type: 'mcq',
      prompt: 'À quoi est égal $\\frac{e^{i3x} - e^{-i3x}}{2i}$ pour tout $x \\in \\mathbb{R}$ ?',
      options: [
        '$\\cos(3x)$',
        '$\\sin(3x)$',
        '$3\\sin x$',
        '$i\\sin(3x)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'D’après la formule d’Euler appliquée à $\\theta = 3x$, $\\frac{e^{i3x} - e^{-i3x}}{2i} = \\sin(3x)$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Linéarisation',
    stepTheme: 'emerald',
    stepTitle: 'Linéariser $\\cos^n\\alpha$ ou $\\sin^n\\alpha$ (utile pour primitiver !)',
    paragraphText:
      'Linéariser $\\cos^4\\alpha$, c’est l’écrire comme somme de $\\cos(k\\alpha)$ sans puissance. Méthode systématique : 1) remplacer $\\cos\\alpha$ par $\\frac{e^{i\\alpha} + e^{-i\\alpha}}{2}$ ; 2) développer avec le binôme de Newton ; 3) regrouper deux à deux les termes conjugués $e^{ik\\alpha} + e^{-ik\\alpha} = 2\\cos(k\\alpha)$ (ou $e^{ik\\alpha} - e^{-ik\\alpha} = 2i\\sin(k\\alpha)$).',
    exercise: {
      id: 'tc_m_num_l06_p05_q03',
      type: 'mcq',
      prompt: 'Quelle est la forme linéarisée exacte de $\\cos^4\\alpha$ ?',
      options: [
        '$\\frac{1}{8}\\cos(4\\alpha) + \\frac{1}{2}\\cos(2\\alpha) + \\frac{3}{8}$',
        '$\\frac{1}{8}\\cos(4\\alpha) - \\frac{1}{2}\\cos(2\\alpha) + \\frac{3}{8}$',
        '$\\frac{1}{16}\\cos(4\\alpha) + \\frac{1}{4}\\cos(2\\alpha) + \\frac{3}{8}$',
        '$\\frac{1}{4}\\cos(4\\alpha) + \\frac{1}{2}\\cos(2\\alpha) + \\frac{1}{4}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\cos^4\\alpha = \\frac{1}{16}\\left[(e^{i4\\alpha} + e^{-i4\\alpha}) + 4(e^{i2\\alpha} + e^{-i2\\alpha}) + 6\\right] = \\frac{1}{16}[2\\cos(4\\alpha) + 8\\cos(2\\alpha) + 6] = \\frac{1}{8}\\cos(4\\alpha) + \\frac{1}{2}\\cos(2\\alpha) + \\frac{3}{8}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Linéarisation de sin³',
    stepTheme: 'blue',
    stepTitle: 'Linéariser $\\sin^3\\alpha$ en faisant attention au $(2i)^3 = -8i$',
    paragraphText:
      'Pour $\\sin^n\\alpha$, le dénominateur est $(2i)^n$ : n’oublie ni le facteur $i$, ni son signe ! Pour $n = 3$ : $\\sin^3\\alpha = \\frac{(e^{i\\alpha} - e^{-i\\alpha})^3}{(2i)^3} = \\frac{1}{-8i}[(e^{i3\\alpha} - e^{-i3\\alpha}) - 3(e^{i\\alpha} - e^{-i\\alpha})] = \\frac{1}{-8i}[2i\\sin(3\\alpha) - 6i\\sin\\alpha] = \\frac{3}{4}\\sin\\alpha - \\frac{1}{4}\\sin(3\\alpha)$.',
    exercise: {
      id: 'tc_m_num_l06_p05_q04',
      type: 'mcq',
      prompt: 'Quelle est la forme linéarisée de $\\sin^3\\alpha$ ?',
      options: [
        '$\\frac{3}{4}\\sin\\alpha + \\frac{1}{4}\\sin(3\\alpha)$',
        '$\\frac{3}{4}\\sin\\alpha - \\frac{1}{4}\\sin(3\\alpha)$',
        '$-\\frac{3}{4}\\cos\\alpha + \\frac{1}{4}\\cos(3\\alpha)$',
        '$\\frac{3}{8}\\sin\\alpha - \\frac{1}{8}\\sin(3\\alpha)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Test rapide en $\\alpha = \\frac{\\pi}{2}$ : $\\sin^3(\\frac{\\pi}{2}) = 1$, et $\\frac{3}{4}(1) - \\frac{1}{4}(-1) = 1$ !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Sens inverse (Moivre)',
    stepTheme: 'emerald',
    stepTitle: 'Exprimer $\\cos(n\\theta)$ et $\\sin(n\\theta)$ en polynômes de $\\cos\\theta$ et $\\sin\\theta$',
    paragraphText:
      'À l’inverse de la linéarisation, pour exprimer $\\cos(3\\theta)$ et $\\sin(3\\theta)$ en fonction de $\\cos\\theta$ et $\\sin\\theta$, on écrit $\\cos(3\\theta) + i\\sin(3\\theta) = (\\cos\\theta + i\\sin\\theta)^3$ par Moivre, on développe le cube, puis on identifie parties réelle et imaginaire.',
    exercise: {
      id: 'tc_m_num_l06_p05_q05',
      type: 'mcq',
      prompt: 'Par identification de $(\\cos\\theta + i\\sin\\theta)^3 = \\cos(3\\theta) + i\\sin(3\\theta)$, que vaut $\\cos(3\\theta)$ uniquement en fonction de $\\cos\\theta$ ?',
      options: [
        '$4\\cos^3\\theta - 3\\cos\\theta$',
        '$3\\cos^3\\theta - 4\\cos\\theta$',
        '$\\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta$ sans simplification possible',
        '$4\\cos^3\\theta + 3\\cos\\theta$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\operatorname{Re}(\\cos\\theta + i\\sin\\theta)^3 = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta = \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Vérifier les puissances de i',
    stepTheme: 'orange',
    stepTitle: 'Tester son résultat de linéarisation en $\\alpha = 0$ ou $\\alpha = \\frac{\\pi}{2}$',
    paragraphText:
      'Astuce infaillible après toute linéarisation ou formule trigonométrique : substitue $\\alpha = 0$ (pour $\\cos^4 0 = 1$) et $\\alpha = \\frac{\\pi}{2}$ (pour $\\cos^4\\frac{\\pi}{2} = 0$). Ici $\\frac{1}{8}\\cos 0 + \\frac{1}{2}\\cos 0 + \\frac{3}{8} = 1$, et $\\frac{1}{8}\\cos(2\\pi) + \\frac{1}{2}\\cos(\\pi) + \\frac{3}{8} = \\frac{1}{8} - \\frac{1}{2} + \\frac{3}{8} = 0$. En $10$ secondes, toute erreur de signe est détectée !',
    exercise: {
      id: 'tc_m_num_l06_p05_q06',
      type: 'mcq',
      prompt: 'En testant $\\alpha = 0$, pourquoi la proposition $\\cos^2\\alpha\\sin^2\\alpha = \\frac{1}{8} + \\frac{1}{8}\\cos(4\\alpha)$ est-elle FORCÉMENT fausse ?',
      options: [
        'Parce que pour $\\alpha = 0$, le membre de gauche vaut $0$ alors que celui de droite vaut $\\frac{1}{4}$',
        'Parce qu’il doit y avoir un $\\sin(4\\alpha)$',
        'Parce que le coefficient doit être $\\frac{1}{2}$',
        'Parce que $\\cos^2 0 = 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'En $\\alpha = 0$, $\\cos^2 0 \\sin^2 0 = 0$, or $\\frac{1}{8} + \\frac{1}{8}\\cos 0 = \\frac{1}{4} \\ne 0$ ! La vraie formule est $\\frac{1}{8}(1 - \\cos(4\\alpha))$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Application aux primitives',
    stepTheme: 'slate',
    stepTitle: 'Lien entre linéarisation complexe et primitives trigonométriques',
    paragraphText:
      'Pourquoi linéarise-t-on à l’aide des formules d’Euler en Terminale C ? Parce qu’une fois $\\cos^4\\alpha = \\frac{3}{8} + \\frac{1}{2}\\cos(2\\alpha) + \\frac{1}{8}\\cos(4\\alpha)$ obtenu, chaque terme s’intègre immédiatement en $\\frac{3}{8}\\alpha + \\frac{1}{4}\\sin(2\\alpha) + \\frac{1}{32}\\sin(4\\alpha) + c$ !',
    exercise: {
      id: 'tc_m_num_l06_p05_q07',
      type: 'mcq',
      prompt: 'En utilisant $\\sin^3 x = \\frac{3}{4}\\sin x - \\frac{1}{4}\\sin(3x)$, quelles sont les primitives de $\\sin^3 x$ sur $\\mathbb{R}$ ?',
      options: [
        '$-\\frac{3}{4}\\cos x + \\frac{1}{12}\\cos(3x) + c$',
        '$\\frac{3}{4}\\cos x - \\frac{1}{12}\\cos(3x) + c$',
        '$-\\frac{3}{4}\\cos x + \\frac{1}{4}\\cos(3x) + c$',
        '$\\frac{1}{4}\\sin^4 x + c$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Une primitive de $\\sin x$ est $-\\cos x$, et une primitive de $\\sin(3x)$ est $-\\frac{1}{3}\\cos(3x)$. On obtient donc $-\\frac{3}{4}\\cos x - \\frac{1}{4}\\left(-\\frac{1}{3}\\cos(3x)\\right) + c = -\\frac{3}{4}\\cos x + \\frac{1}{12}\\cos(3x) + c$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Racines carrées dans C',
    stepTheme: 'blue',
    stepTitle: 'Calculer les racines carrées $\\delta = x + iy$ d’un complexe $z_0 = a + ib$',
    paragraphText:
      'Tout complexe non nul $z_0 = a + ib$ admet exactement DEUX racines carrées opposées dans $\\mathbb{C}$ (solutions de $\\delta^2 = z_0$). On pose $\\delta = x + iy$ ($x, y \\in \\mathbb{R}$) et on utilise le système à trois équations (module + partie réelle + partie imaginaire) : $x^2 + y^2 = \\sqrt{a^2 + b^2}$, $x^2 - y^2 = a$, et $2xy = b$ (qui donne le SIGNE de $xy$).',
    formula: {
      name: 'Système des racines carrées',
      formula: '\\begin{cases} x^2 + y^2 = |z_0| \\\\ x^2 - y^2 = \\operatorname{Re}(z_0) \\\\ 2xy = \\operatorname{Im}(z_0) \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l06_p06_q01',
      type: 'mcq',
      prompt: 'Quelles sont les racines carrées de $z_0 = 8 - 6i$ dans $\\mathbb{C}$ ?',
      options: [
        '$3 + i$ et $-3 - i$',
        '$3 - i$ et $-3 + i$',
        '$1 - 3i$ et $-1 + 3i$',
        '$2\\sqrt{2} - i\\sqrt{6}$ et son opposé',
      ],
      correctAnswerIndex: 1,
      explanation: '$|8 - 6i| = \\sqrt{64 + 36} = 10$. Le système donne $x^2 + y^2 = 10$ et $x^2 - y^2 = 8$, soit $2x^2 = 18 \\implies x = \\pm 3$ et $y = \\pm 1$. Comme $2xy = -6 < 0$, $x$ et $y$ sont de signes contraires : $\\pm(3 - i)$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Cas réel négatif',
    stepTheme: 'blue',
    stepTitle: 'Racines carrées d’un réel négatif ($-5$ donne $\\pm i\\sqrt{5}$)',
    paragraphText:
      'Lorsque $z_0 = -r$ ($r > 0$), inutile de poser le système : $-r = r i^2 = (i\\sqrt{r})^2$, donc les deux racines carrées complexes de $-r$ sont immédiatement $i\\sqrt{r}$ et $-i\\sqrt{r}$. Par exemple, les solutions de $z^2 = -5$ sont $i\\sqrt{5}$ et $-i\\sqrt{5}$.',
    exercise: {
      id: 'tc_m_num_l06_p06_q02',
      type: 'mcq',
      prompt: 'Quelles sont les solutions dans $\\mathbb{C}$ de $z^2 + 5 = 0$ et de $z^2 - 2iz - 1 = 0$ ?',
      options: [
        '$\\{-i\\sqrt{5} ; i\\sqrt{5}\\}$ et $\\{i\\}$ (racine double)',
        '$\\varnothing$ et $\\{-i ; i\\}$',
        '$\\{-5i ; 5i\\}$ et $\\{i\\}$',
        '$\\{-i\\sqrt{5} ; i\\sqrt{5}\\}$ et $\\{1 ; -1\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$z^2 = -5 \\implies z = \\pm i\\sqrt{5}$. Et $z^2 - 2iz - 1 = (z - i)^2 = 0$ admet $z = i$ comme racine double ($\\Delta = (-2i)^2 - 4(-1) = -4 + 4 = 0$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Second degré dans C',
    stepTheme: 'violet',
    stepTitle: 'Résoudre $az^2 + bz + c = 0$ à coefficients réels OU complexes',
    paragraphText:
      'Pour toute équation $az^2 + bz + c = 0$ ($a \\ne 0$) dans $\\mathbb{C}$, on calcule $\\Delta = b^2 - 4ac$ : si $\\Delta = 0$, une racine double $z_0 = -\\frac{b}{2a}$ ; si $\\Delta \\ne 0$, on cherche une racine carrée $\\delta$ de $\\Delta$ ($\\delta^2 = \\Delta$) et les deux solutions sont $z_1 = \\frac{-b - \\delta}{2a}$ et $z_2 = \\frac{-b + \\delta}{2a}$.',
    formula: {
      name: 'Résolution du 2nd degré dans C',
      formula: '\\Delta = b^2 - 4ac = \\delta^2 \\implies z_1 = \\frac{-b - \\delta}{2a}, \\quad z_2 = \\frac{-b + \\delta}{2a}',
    },
    exercise: {
      id: 'tc_m_num_l06_p06_q03',
      type: 'mcq',
      prompt: 'Résoudre dans $\\mathbb{C}$ les équations $z^2 + 5z - 14 = 0$ et $z^2 + 2iz + 3 = 0$.',
      options: [
        '$S_1 = \\{-7 ; -2\\}$ et $S_2 = \\{-3i ; i\\}$',
        '$S_1 = \\{-7 ; 2\\}$ et $S_2 = \\{-3i ; i\\}$',
        '$S_1 = \\{7 ; -2\\}$ et $S_2 = \\{3i ; -i\\}$',
        '$S_1 = \\{-7 ; 2\\}$ et $S_2 = \\{-i ; 3i\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $z^2 + 5z - 14 = 0$, $\\Delta = 25 + 56 = 81 = 9^2$, donc $z_1 = \\frac{-5 - 9}{2} = -7$ et $z_2 = \\frac{-5 + 9}{2} = 2$ (attention aux fautes de signe $-2$ vs $+2$ !). Pour $z^2 + 2iz + 3 = 0$, $\\Delta = (2i)^2 - 12 = -16 = (4i)^2$, donc $z = \\frac{-2i \\pm 4i}{2} \\in \\{-3i ; i\\}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Discriminant non réel',
    stepTheme: 'blue',
    stepTitle: 'Équation à coefficients complexes : $z^2 - (1 + i)z + 2 - i = 0$',
    paragraphText:
      'Calculons $\\Delta = [-(1 + i)]^2 - 4(2 - i) = 2i - 8 + 4i = -8 + 6i$. Cherchons $\\delta = x + iy$ tel que $\\delta^2 = -8 + 6i$ : $x^2 + y^2 = \\sqrt{(-8)^2 + 6^2} = 10$, $x^2 - y^2 = -8$ et $2xy = 6 > 0$. On trouve $x = 1, y = 3$, soit $\\delta = 1 + 3i$. Les racines valent $z_1 = \\frac{(1 + i) - (1 + 3i)}{2} = -i$ et $z_2 = \\frac{(1 + i) + (1 + 3i)}{2} = 1 + 2i$.',
    exercise: {
      id: 'tc_m_num_l06_p06_q04',
      type: 'mcq',
      prompt: 'Quelles sont les deux solutions de $z^2 - (1 + i)z + 2 - i = 0$ dans $\\mathbb{C}$ ?',
      options: [
        '$S = \\{i ; 1 - 2i\\}$',
        '$S = \\{-i ; 1 + 2i\\}$',
        '$S = \\{1 + i ; 2 - i\\}$',
        '$S = \\{-i ; -1 + 2i\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Vérification instantanée par somme et produit : $(-i) + (1 + 2i) = 1 + i = -b/a$, et $(-i)(1 + 2i) = -i + 2 = 2 - i = c/a$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Polynômes de degré ≥ 3',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre une équation de degré $3$ : racine évidente + factorisation',
    paragraphText:
      'Soit $P(z) = z^3 + (-1 + i)z^2 + (2 + 2i)z + 8i$. On cherche d’abord une racine réelle $z_0 = x$ ou imaginaire pure $z_0 = iy$ en annulant séparément parties réelle et imaginaire. Ici $P(2i) = (2i)^3 + (-1 + i)(-4) + (2 + 2i)(2i) + 8i = 0$. On factorise alors $P(z) = (z - 2i)(z^2 + az + b)$ par identification ou division, puis on résout le facteur du second degré.',
    exercise: {
      id: 'tc_m_num_l06_p06_q05',
      type: 'mcq',
      prompt: 'Après factorisation de $P(z) = z^3 + (-1 + i)z^2 + (2 + 2i)z + 8i$ par $(z - 2i)$, quel est le trinôme quotient et l’ensemble des solutions ?',
      options: [
        '$z^2 + (-1 + 3i)z - 4$ et $S = \\{2i ; 2 - 2i ; -1 - i\\}$',
        '$z^2 + (-1 + 3i)z + 4$ et $S = \\{2i ; 2 + 2i ; -1 + i\\}$',
        '$z^2 + (1 - 3i)z - 4$ et $S = \\{2i ; -2 + 2i ; 1 + i\\}$',
        '$z^2 - z - 4$ et $S = \\{2i ; -2 ; 2\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(z - 2i)(z^2 + (-1 + 3i)z - 4) = P(z)$. Pour $z^2 + (-1 + 3i)z - 4 = 0$, $\\Delta = (-1 + 3i)^2 + 16 = 8 - 6i = (3 - i)^2$, d’où $z_1 = 2 - 2i$ et $z_2 = -1 - i$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Notation interdite',
    stepTheme: 'orange',
    stepTitle: 'Ne JAMAIS écrire $\\sqrt{\\Delta}$ quand $\\Delta$ est négatif ou non réel !',
    paragraphText:
      'En Terminale C, le symbole $\\sqrt{\\phantom{x}}$ est strictement réservé aux réels positifs. Si $\\Delta = -16$ ou $\\Delta = -8 + 6i$, écris : « Soit $\\delta = 4i$ (ou $\\delta = 1 + 3i$) une racine carrée de $\\Delta$, c’est-à-dire $\\delta^2 = \\Delta$ », puis utilise $\\frac{-b \\pm \\delta}{2a}$. N’écris jamais $\\sqrt{-8 + 6i}$ dans une copie !',
    exercise: {
      id: 'tc_m_num_l06_p06_q06',
      type: 'mcq',
      prompt: 'Comment justifier proprement la racine du discriminant $\\Delta = -9$ dans une copie de Bac C ?',
      options: [
        'Écrire $\\sqrt{\\Delta} = \\sqrt{-9} = 3i$',
        'Écrire « $\\Delta = -9 = (3i)^2$, donc $\\delta = 3i$ vérifie $\\delta^2 = \\Delta$ »',
        'Écrire que l’équation n’a pas de solution car $\\Delta < 0$',
        'Écrire $|\\Delta| = 9$ donc $z = \\frac{-b \\pm 3}{2a}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le radical $\\sqrt{\\phantom{x}}$ ne s’applique qu’aux réels $\\geqslant 0$. En passant par $\\Delta = (3i)^2$, la rédaction est mathématiquement irréprochable.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'propriete',
    stepBadge: 'Équation à coefficients réels',
    stepTheme: 'slate',
    stepTitle: 'Racines conjuguées d’un polynôme à coefficients réels',
    paragraphText:
      'Si un polynôme $P(z) = a_n z^n + \\dots + a_1 z + a_0$ a TOUS ses coefficients réels ($a_k \\in \\mathbb{R}$) et si $z_0$ est racine de $P$, alors son conjugué $\\overline{z_0}$ est aussi racine de $P$ ! (En effet $\\overline{P(z_0)} = P(\\overline{z_0}) = 0$.) Attention : c’est faux si les coefficients sont complexes non réels !',
    exercise: {
      id: 'tc_m_num_l06_p06_q07',
      type: 'mcq',
      prompt: 'Sachant que $1 + 2i$ est solution de $z^3 - 3z^2 + 7z - 5 = 0$, quelles sont toutes les solutions dans $\\mathbb{C}$ ?',
      options: [
        '$\\{1 + 2i ; -1 + 2i ; 1\\}$',
        '$\\{1 + 2i ; 1 - 2i ; 1\\}$',
        '$\\{1 + 2i ; 1 - 2i ; -1\\}$',
        '$\\{1 + 2i ; 2 + i ; 1\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Tous les coefficients étant réels, $\\overline{1 + 2i} = 1 - 2i$ est aussi racine. Or $(1 + 2i) + (1 - 2i) + z_3 = 3 \\implies z_3 = 1$ (on vérifie $1 - 3 + 7 - 5 = 0$).',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Racines n-ièmes',
    stepTheme: 'blue',
    stepTitle: 'Définition et formule des racines $n$-ièmes d’un complexe non nul',
    paragraphText:
      'Soit $Z = R e^{i\\theta}$ ($R > 0$) et $n \\in \\mathbb{N}^*$ ($n \\geqslant 2$). On appelle racine $n$-ième de $Z$ tout complexe $z$ tel que $z^n = Z$. En posant $z = r e^{i\\varphi}$, on obtient $r^n = R \\iff r = \\sqrt[n]{R}$ et $n\\varphi = \\theta + 2k\\pi \\iff \\varphi = \\frac{\\theta}{n} + \\frac{2k\\pi}{n}$. Il existe exactement $n$ racines $n$-ièmes distinctes, obtenues pour $k \\in \\{0 ; 1 ; \\dots ; n - 1\\}$.',
    formula: {
      name: 'Les n racines n-ièmes de R e^(iθ)',
      formula: 'z_k = \\sqrt[n]{R}\\, e^{i\\left(\\frac{\\theta + 2k\\pi}{n}\\right)} \\qquad (k \\in \\{0 ; 1 ; \\dots ; n - 1\\})',
    },
    exercise: {
      id: 'tc_m_num_l06_p07_q01',
      type: 'mcq',
      prompt: 'Quelles sont les $4$ racines quatrièmes de $Z = 8(1 + i\\sqrt{3})$ ?',
      options: [
        '$z_k = 2 e^{i\\left(\\frac{\\pi}{12} + \\frac{k\\pi}{2}\\right)}$ pour $k \\in \\{0 ; 1 ; 2 ; 3\\}$',
        '$z_k = 2 e^{i\\left(\\frac{\\pi}{3} + \\frac{k\\pi}{2}\\right)}$ pour $k \\in \\{0 ; 1 ; 2 ; 3\\}$',
        '$z_k = 4 e^{i\\left(\\frac{\\pi}{12} + \\frac{k\\pi}{2}\\right)}$ pour $k \\in \\{0 ; 1 ; 2 ; 3\\}$',
        '$z_k = 2 e^{i\\left(\\frac{\\pi}{6} + \\frac{2k\\pi}{3}\\right)}$ pour $k \\in \\{0 ; 1 ; 2 ; 3\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$Z = 8 \\cdot 2 e^{i\\pi/3} = 16 e^{i\\pi/3}$. Or $\\sqrt[4]{16} = 2$ et $\\frac{\\pi/3 + 2k\\pi}{4} = \\frac{\\pi}{12} + \\frac{k\\pi}{2}$ ($k \\in \\{0, 1, 2, 3\\}$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Racines de l’unité',
    stepTheme: 'violet',
    stepTitle: 'Racines $n$-ièmes de l’unité ($z^n = 1$), polygone régulier et somme nulle',
    paragraphText:
      'Pour $Z = 1 = e^{i0}$, les $n$ racines $n$-ièmes de l’unité sont $u_k = e^{i\\frac{2k\\pi}{n}}$ ($0 \\leqslant k \\leqslant n - 1$). Géométriquement, leurs images forment les sommets d’un polygone régulier à $n$ côtés inscrit dans le cercle trigonométrique (en particulier le triangle équilatéral $1, j, j^2$ pour $n = 3$ avec $j = e^{i\\frac{2\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$). Pour tout $n \\geqslant 2$, la somme de toutes les racines $n$-ièmes d’un complexe est nulle : $\\sum_{k=0}^{n-1} z_k = 0$ (en particulier $1 + j + j^2 = 0$).',
    formula: {
      name: 'Racines cubiques et somme nulle',
      formula: 'j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}, \\quad j^3 = 1, \\quad j^2 = \\bar{j}, \\quad 1 + j + j^2 = 0 \\quad ; \\quad \\sum_{k=0}^{n-1} z_k = 0',
    },
    exercise: {
      id: 'tc_m_num_l06_p07_q02',
      type: 'mcq',
      prompt: 'Sachant que $j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$, que vaut $1 + j + j^2 + j^3 + j^4$ ?',
      options: [
        '$0$',
        '$1 + j$',
        '$j^2$',
        '$j$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $1 + j + j^2 = 0$, $j^3 = 1$ et $j^4 = j$, on obtient $1 + j + j^2 + j^3 + j^4 = 0 + 1 + j = 1 + j$ (ce qui vaut aussi $-j^2$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Géométrie avancée 1',
    stepTheme: 'blue',
    stepTitle: 'Triangle rectangle isocèle via $\\frac{z_B - z_A}{z_C - z_A} = -i$',
    paragraphText:
      'Pour prouver qu’un triangle $ABC$ est rectangle isocèle en $A$, on calcule le rapport $\\frac{z_B - z_A}{z_C - z_A}$. Si l’on trouve $\\frac{z_B - z_A}{z_C - z_A} = -i$ (ou $+i$), alors $|z_B - z_A| = |\\pm i||z_C - z_A| \\implies AB = AC$, et $(\\overrightarrow{AC} ; \\overrightarrow{AB}) \\equiv \\arg(\\pm i) \\equiv \\pm\\frac{\\pi}{2} \\pmod{2\\pi}$ : le triangle $ABC$ est donc rectangle isocèle en $A$.',
    formula: {
      name: 'Critère triangle rectangle isocèle en A',
      formula: '\\frac{z_B - z_A}{z_C - z_A} = \\pm i \\iff ABC \\text{ rectangle isocèle en } A',
    },
    exercise: {
      id: 'tc_m_num_l06_p07_q03',
      type: 'mcq',
      prompt: 'Soient $A(2)$, $B(2 + 3i)$ et $C(-1)$. Que vaut $\\frac{z_B - z_A}{z_C - z_A}$ et quelle est la nature du triangle $ABC$ ?',
      options: [
        '$-i$, donc $ABC$ est rectangle isocèle en $A$',
        '$i$, donc $ABC$ est rectangle isocèle en $A$',
        '$3i$, donc $ABC$ est rectangle (non isocèle) en $A$',
        '$-1$, donc $A, B, C$ sont alignés',
      ],
      correctAnswerIndex: 0,
      explanation: '$z_B - z_A = 3i$ et $z_C - z_A = -3$, donc $\\frac{z_B - z_A}{z_C - z_A} = \\frac{3i}{-3} = -i$. On a donc $AB = AC$ et $(\\overrightarrow{AC} ; \\overrightarrow{AB}) \\equiv -\\frac{\\pi}{2} \\pmod{2\\pi}$ : $ABC$ est rectangle isocèle en $A$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Orthogonalité & Cocyclicité',
    stepTheme: 'violet',
    stepTitle: 'Critères d’orthogonalité et de points cocycliques ou alignés',
    paragraphText:
      'Pour des points distincts : $(AB) \\perp (CD) \\iff \\frac{z_D - z_C}{z_B - z_A} \\in i\\mathbb{R}^*$ (argument $\\pm\\frac{\\pi}{2}$). En particulier, un point $E$ appartient au cercle de diamètre $[BC]$ ($E \\ne B, C$) si et seulement si $(EB) \\perp (EC)$, c’est-à-dire $\\frac{z_C - z_E}{z_B - z_E} \\in i\\mathbb{R}^*$. Plus généralement, quatre points distincts non alignés $A, B, C, E$ sont cocycliques si et seulement si $\\frac{z_C - z_A}{z_B - z_A} : \\frac{z_C - z_E}{z_B - z_E} \\in \\mathbb{R}^*$.',
    formula: {
      name: 'Cercle de diamètre [BC] et cocyclicité',
      formula: 'E \\in \\mathcal{C}_{[BC]} \\iff \\frac{z_C - z_E}{z_B - z_E} \\in i\\mathbb{R}^* \\qquad ; \\qquad A,B,C,E \\text{ cocycliques/alignés} \\iff \\frac{\\frac{z_C - z_A}{z_B - z_A}}{\\frac{z_C - z_E}{z_B - z_E}} \\in \\mathbb{R}^*',
    },
    exercise: {
      id: 'tc_m_num_l06_p07_q04',
      type: 'mcq',
      prompt: 'Sachant que $\\frac{z_C - z_E}{z_B - z_E} = -\\frac{i}{2}$, que peut-on conclure géométriquement ?',
      options: [
        'Les points $B, C, E$ sont alignés',
        'Le triangle $EBC$ est rectangle en $E$, donc $E$ appartient au cercle de diamètre $[BC]$',
        'Le triangle $EBC$ est équilatéral',
        '$E$ est le milieu de $[BC]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $-\\frac{i}{2} \\in i\\mathbb{R}^*$, son argument vaut $-\\frac{\\pi}{2}$, donc $(\\overrightarrow{EB} ; \\overrightarrow{EC}) \\equiv -\\frac{\\pi}{2} \\pmod{2\\pi}$ : $EBC$ est rectangle en $E$ et $E$ est sur le cercle de diamètre $[BC]$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'Arithmétique & complexes : si $A = x^2 + y^2$, alors $A^n = x_n^2 + y_n^2$',
    paragraphText:
      'Situation complexe du programme : soit $A = x^2 + y^2$ avec $x, y \\in \\mathbb{Z}$. Comment prouver que pour tout $n \\in \\mathbb{N}^*$, $A^n$ s’écrit encore somme de deux carrés d’entiers $x_n^2 + y_n^2$ ? L’idée brillante consiste à poser $z = x + iy$ : alors $A = |z|^2$, donc $A^n = |z|^{2n} = |z^n|^2$ ! Or, par récurrence sur $n$ (ou par formule du binôme), $z^n$ s’écrit $x_n + i y_n$ avec $x_n, y_n \\in \\mathbb{Z}$ (stabilité de $\\mathbb{Z}[i]$ par multiplication), d’où $A^n = x_n^2 + y_n^2$ !',
    formula: {
      name: 'Identité multiplicative des sommes de deux carrés',
      formula: 'A = x^2 + y^2 = |x + iy|^2 \\implies A^n = |(x + iy)^n|^2 = x_n^2 + y_n^2 \\quad (x_n, y_n \\in \\mathbb{Z})',
    },
    exercise: {
      id: 'tc_m_num_l06_p07_q05',
      type: 'mcq',
      prompt: 'En utilisant $|z_1 z_2|^2 = |z_1|^2 |z_2|^2$ avec $z_1 = 2 + 3i$ et $z_2 = 1 + 4i$, comment décomposer $13 \\times 17 = 221$ en somme de deux carrés d’entiers ?',
      options: [
        '$221 = 10^2 + 11^2$',
        '$221 = 14^2 + 5^2$',
        '$221 = 12^2 + 9^2$',
        '$221 = 13^2 + 7^2$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(2 + 3i)(1 + 4i) = (2 - 12) + i(8 + 3) = -10 + 11i$. Donc $|2 + 3i|^2 |1 + 4i|^2 = |-10 + 11i|^2 \\implies 13 \\times 17 = (-10)^2 + 11^2 = 10^2 + 11^2$ (et avec $1 - 4i$, on trouve aussi $14^2 + 5^2$, mais ici $z_1 z_2$ donne directement $10^2 + 11^2$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Vérifier les bornes de somme',
    stepTheme: 'orange',
    stepTitle: 'Attention : $k$ va de $0$ à $n - 1$ (soit $n$ racines, pas $n + 1$ !)',
    paragraphText:
      'Piège classique sur les racines $n$-ièmes : il y a exactement $n$ racines pour $k \\in \\{0 ; 1 ; \\dots ; n - 1\\}$. Si l’on va jusqu’à $k = n$, on retombe sur $z_n = z_0$ car $\\frac{2n\\pi}{n} = 2\\pi$ ! C’est pourquoi la somme nulle s’écrit $\\sum_{k=0}^{n-1} z_k = 0$ (et NON $\\sum_{k=0}^{n} z_k = 0$).',
    exercise: {
      id: 'tc_m_num_l06_p07_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\sum_{k=0}^{4} e^{i\\frac{2k\\pi}{5}}$ (la somme des $5$ racines cinquièmes de l’unité) ?',
      options: [
        '$1$',
        '$0$',
        '$5$',
        '$e^{i2\\pi}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’indice $k$ parcourt exactement $\\{0, 1, 2, 3, 4\\}$ (soit $n = 5$ racines, jusqu’à $n - 1 = 4$) : la somme des $5$ racines cinquièmes de l’unité vaut $0$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan du chapitre',
    stepTheme: 'slate',
    stepTitle: 'Quelle forme complexe choisir selon la question ?',
    paragraphText:
      'Le réflexe clé en Terminale C est de choisir la bonne écriture de $z$ : 1) Forme algébrique $a + ib$ pour les sommes, les équations en $z$ et $\\bar{z}$, les parties réelle/imaginaire ; 2) Forme exponentielle $re^{i\\theta}$ pour les produits, quotients, grandes puissances (Moivre), racines $n$-ièmes et angles ; 3) Forme géométrique (affixes et quotients $\\frac{z_C - z_A}{z_B - z_A}$) pour les distances, alignements, orthogonalités et cercles.',
    exercise: {
      id: 'tc_m_num_l06_p07_q07',
      type: 'mcq',
      prompt: 'Quelle écriture est la plus efficace pour calculer $(1 - i)^{20}$ ?',
      options: [
        'Développer avec le binôme de Newton à l’ordre $20$',
        'Écrire $1 - i = \\sqrt{2}e^{-i\\pi/4}$ puis élever à la puissance $20$ pour obtenir $-2^{10} = -1024$',
        'Calculer $(1 - i)^2$ dix fois à la main',
        'Utiliser le conjugué $\\overline{1 - i}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$(1 - i)^{20} = (\\sqrt{2}e^{-i\\pi/4})^{20} = 2^{10} e^{-i5\\pi} = 1024 \\times (-1) = -1024$.',
    },
  },
];

export const MATHS_TLE_C_L06_NOMBRES_COMPLEXES: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l06_nombres_complexes',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 7,
  title: 'Leçon 6 : Nombres complexes',
  summary:
    'Forme algébrique, conjugué, module, affixes dans le plan complexe, argument, formes trigonométrique et exponentielle, Moivre, Euler et linéarisation, équations du 2nd degré et degré 3, racines n-ièmes et géométrie.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p01',
      order: 1,
      title: 'Ensemble ℂ, forme algébrique et opérations',
      summary:
        'Définir i (i² = −1) et la forme algébrique unique a + ib, maîtriser somme, produit, inverse 1/(a + ib), puissances iⁿ et binôme de Newton.',
      conceptExplanation:
        'L’ensemble ℂ étend ℝ en adjoignant un élément i tel que i² = −1. Chaque complexe s’écrit de façon unique z = a + ib avec a = Re(z) et b = Im(z) réels. Les opérations usuelles s’appliquent en remplaçant i² par −1, et l’inverse s’obtient par multiplication par la quantité conjuguée.',
      keyRule: 'Tout z ∈ ℂ s’écrit de manière unique a + ib (a, b ∈ ℝ) ; on ne compare jamais deux complexes non réels par < ou >.',
      formulas: [
        { name: 'Inverse', formula: '\\frac{1}{a + ib} = \\frac{a - ib}{a^2 + b^2}' },
        { name: 'Puissances de i', formula: 'i^{4q}=1,\\; i^{4q+1}=i,\\; i^{4q+2}=-1,\\; i^{4q+3}=-i' },
      ],
      workedExample: {
        title: 'Quotient sous forme algébrique',
        statement: 'Mettre $z = \\frac{3 + 2i}{1 - i}$ sous forme algébrique.',
        methodSteps: [
          'Multiplier numérateur et dénominateur par le conjugué $1 + i$.',
          'Calculer $(3 + 2i)(1 + i) = 3 + 5i + 2i^2 = 1 + 5i$ et $(1 - i)(1 + i) = 1^2 + 1^2 = 2$.',
        ],
        conclusion: 'On obtient $z = \\frac{1}{2} + \\frac{5}{2}i$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p02',
      order: 2,
      title: 'Conjugué et module d’un nombre complexe',
      summary:
        'Utiliser le conjugué z̄ (critères réel et imaginaire pur, z z̄ = |z|²) et les propriétés du module |z| = √(a² + b²).',
      conceptExplanation:
        'Le conjugué z̄ = a − ib caractérise les réels (z̄ = z) et les imaginaires purs (z̄ = −z) et permet de calculer z z̄ = a² + b² = |z|². Le module |z| est multiplicatif (|zz′| = |z||z′|), mais vérifie l’inégalité triangulaire |z + z′| ≤ |z| + |z′| pour la somme.',
      keyRule: '|zz′| = |z||z′| et z z̄ = |z|², mais |z + z′| ≤ |z| + |z′|.',
      formulas: [
        { name: 'Conjugué', formula: 'z + \\bar{z} = 2\\operatorname{Re}(z) \\quad ; \\quad z - \\bar{z} = 2i\\operatorname{Im}(z)' },
        { name: 'Module', formula: '|z| = \\sqrt{a^2 + b^2} = \\sqrt{z\\bar{z}}' },
      ],
      workedExample: {
        title: 'Module d’un quotient et d’une puissance',
        statement: 'Calculer $\\left|\\frac{3 - i}{4 - i\\sqrt{2}}\\right|$ et $|(3 + i)^3|$.',
        methodSteps: [
          '$|3 - i| = \\sqrt{9 + 1} = \\sqrt{10}$ et $|4 - i\\sqrt{2}| = \\sqrt{16 + 2} = \\sqrt{18} = 3\\sqrt{2}$.',
          'Diviser : $\\frac{\\sqrt{10}}{3\\sqrt{2}} = \\frac{\\sqrt{5}}{3}$.',
          'Pour le cube : $|(3 + i)^3| = |3 + i|^3 = (\\sqrt{10})^3 = 10\\sqrt{10}$.',
        ],
        conclusion: 'Les modules valent respectivement $\\frac{\\sqrt{5}}{3}$ et $10\\sqrt{10}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p03',
      order: 3,
      title: 'Représentation géométrique et affixes dans le plan complexe',
      summary:
        'Traduire points, vecteurs, distances, milieux, parallélogrammes, symétries, cercles et médiatrices en langage d’affixes.',
      conceptExplanation:
        'Dans le repère orthonormé direct (O ; u, v), chaque complexe z correspond à un point M(z) ou à un vecteur. L’affixe de AB est z_B − z_A et la distance AB vaut |z_B − z_A|. Ainsi, |z − z_A| = R décrit un cercle et |z − z_A| = |z − z_B| la médiatrice de [AB].',
      keyRule: 'z(AB) = z_B − z_A et AB = |z_B − z_A|.',
      formulas: [
        { name: 'Vecteur et distance', formula: 'z_{\\overrightarrow{AB}} = z_B - z_A \\quad ; \\quad AB = |z_B - z_A|' },
        { name: 'Milieu et parallélogramme', formula: 'z_I = \\frac{z_A + z_B}{2} \\quad ; \\quad ABCD \\text{ parallélogramme} \\iff z_B - z_A = z_C - z_D' },
      ],
      workedExample: {
        title: 'Identifier un cercle à partir d’une équation en module',
        statement: 'Déterminer l’ensemble des points $M(z)$ tels que $|iz + 1 - 2i| = 3$.',
        methodSteps: [
          'Factoriser par $i$ : $iz + 1 - 2i = i\\left(z + \\frac{1 - 2i}{i}\\right) = i(z - (2 + i))$.',
          'Comme $|i| = 1$, l’équation devient $|z - (2 + i)| = 3$, soit $AM = 3$ avec $A(2 ; 1)$.',
        ],
        conclusion: 'L’ensemble cherché est le cercle de centre $A(2 ; 1)$ et de rayon $3$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p04',
      order: 4,
      title: 'Argument, formes trigonométrique et exponentielle',
      summary:
        'Calculer module et argument, passer entre formes algébrique, trigonométrique et exponentielle re^(iθ), utiliser les propriétés de arg(z) et déduire des valeurs exactes.',
      conceptExplanation:
        'Tout complexe non nul s’écrit r(cos θ + i sin θ) = re^(iθ) avec r = |z| > 0 et θ = arg(z). La notation exponentielle transforme multiplications et divisions en additions et soustractions d’angles, ce qui simplifie les quotients et le calcul d’angles géométriques (AB ; AC) = arg((z_C − z_A)/(z_B − z_A)).',
      keyRule: 'Toujours vérifier que r > 0 dans re^(iθ), puis manipuler les angles modulo 2π.',
      formulas: [
        { name: 'Forme exponentielle', formula: 'z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta} \\quad (r > 0)' },
        { name: 'Angle orienté', formula: '(\\overrightarrow{AB} ; \\overrightarrow{AC}) \\equiv \\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) \\pmod{2\\pi}' },
      ],
      workedExample: {
        title: 'Quotient sous forme exponentielle',
        statement: 'Écrire $Z = \\frac{1 + i}{1 + i\\sqrt{3}}$ sous forme exponentielle.',
        methodSteps: [
          '$1 + i = \\sqrt{2}e^{i\\frac{\\pi}{4}}$ et $1 + i\\sqrt{3} = 2e^{i\\frac{\\pi}{3}}$.',
          'Diviser les modules et soustraire les arguments : $Z = \\frac{\\sqrt{2}}{2}e^{i(\\frac{\\pi}{4} - \\frac{\\pi}{3})} = \\frac{\\sqrt{2}}{2}e^{-i\\frac{\\pi}{12}}$.',
        ],
        conclusion: '$Z = \\frac{\\sqrt{2}}{2} e^{-i\\frac{\\pi}{12}}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p05',
      order: 5,
      title: 'Formule de Moivre, formules d’Euler et linéarisation',
      summary:
        'Appliquer la formule de Moivre aux puissances et à cos(nθ)/sin(nθ), puis utiliser les formules d’Euler et le binôme de Newton pour linéariser cos^n α et sin^n α.',
      conceptExplanation:
        'La formule de Moivre (e^(iθ))^n = e^(inθ) permet de calculer instantanément des puissances élevées et d’exprimer cos(nθ) ou sin(nθ) en polynômes. Réciproquement, les formules d’Euler expriment cos θ et sin θ avec e^(±iθ) afin de linéariser toute puissance trigonométrique avant intégration.',
      keyRule: 'Moivre pour les puissances (cos θ + i sin θ)^n ; Euler + binôme pour linéariser cos^n α ou sin^n α.',
      formulas: [
        { name: 'Moivre', formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)' },
        { name: 'Euler', formula: '\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2} \\quad ; \\quad \\sin\\theta = \\frac{e^{i\\theta}-e^{-i\\theta}}{2i}' },
      ],
      workedExample: {
        title: 'Linéarisation de cos⁴ α',
        statement: 'Linéariser $\\cos^4\\alpha$ à l’aide des formules d’Euler.',
        methodSteps: [
          '$\\cos^4\\alpha = \\left(\\frac{e^{i\\alpha} + e^{-i\\alpha}}{2}\\right)^4 = \\frac{1}{16}\\left(e^{i4\\alpha} + 4e^{i2\\alpha} + 6 + 4e^{-i2\\alpha} + e^{-i4\\alpha}\\right)$.',
          'Regrouper les termes conjugués : $\\frac{1}{16}[2\\cos(4\\alpha) + 8\\cos(2\\alpha) + 6]$.',
        ],
        conclusion: '$\\cos^4\\alpha = \\frac{1}{8}\\cos(4\\alpha) + \\frac{1}{2}\\cos(2\\alpha) + \\frac{3}{8}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p06',
      order: 6,
      title: 'Racines carrées, équations du 2nd degré et degré 3 dans ℂ',
      summary:
        'Calculer les racines carrées de a + ib par système, résoudre az² + bz + c = 0 à coefficients réels ou complexes, et factoriser un polynôme de degré 3 via une racine évidente.',
      conceptExplanation:
        'Dans ℂ, toute équation du second degré az² + bz + c = 0 admet des solutions : on calcule Δ = b² − 4ac puis on cherche δ tel que δ² = Δ (par système si Δ n’est pas réel). Pour le degré 3, on trouve une racine évidente z₀ (réelle ou imaginaire pure) puis on factorise par (z − z₀).',
      keyRule: 'Ne jamais écrire √Δ si Δ n’est pas un réel positif ; poser δ tel que δ² = Δ.',
      formulas: [
        { name: 'Racines carrées', formula: '\\begin{cases} x^2+y^2 = |z_0| \\\\ x^2-y^2 = \\operatorname{Re}(z_0) \\\\ 2xy = \\operatorname{Im}(z_0) \\end{cases}' },
        { name: 'Second degré', formula: '\\Delta = b^2 - 4ac = \\delta^2 \\implies z = \\frac{-b \\pm \\delta}{2a}' },
      ],
      workedExample: {
        title: 'Équation du 2nd degré à coefficients complexes',
        statement: 'Résoudre dans $\\mathbb{C}$ l’équation $z^2 - (1 + i)z + 2 - i = 0$.',
        methodSteps: [
          'Calculer $\\Delta = (1 + i)^2 - 4(2 - i) = -8 + 6i$.',
          'Résoudre $\\delta^2 = -8 + 6i$ par le système ($x^2 + y^2 = 10$, $x^2 - y^2 = -8$, $2xy = 6 > 0$) : $\\delta = 1 + 3i$.',
          'Calculer $z_1 = \\frac{(1 + i) - (1 + 3i)}{2} = -i$ et $z_2 = \\frac{(1 + i) + (1 + 3i)}{2} = 1 + 2i$.',
        ],
        conclusion: 'L’ensemble des solutions est $S = \\{-i ; 1 + 2i\\}$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l06_nombres_complexes_p07',
      order: 7,
      title: 'Racines n-ièmes, géométrie avancée et situation complexe',
      summary:
        'Déterminer les n racines n-ièmes (dont 1, j, j²), exploiter ∑ z_k = 0, caractériser triangles particuliers, orthogonalité et cocyclicité, et résoudre des problèmes d’arithmétique via |zⁿ|².',
      conceptExplanation:
        'Les n racines n-ièmes de Re^(iθ) forment un polygone régulier centré en O et leur somme est nulle. En géométrie, le quotient (z_C − z_A)/(z_B − z_A) permet de prouver qu’un triangle est équilatéral ou rectangle isocèle, ou encore que 4 points sont cocycliques. En arithmétique, la multiplicativité du module résout l’écriture de Aⁿ comme somme de deux carrés.',
      keyRule: 'Les racines n-ièmes sont indexées de k = 0 à n − 1 et vérifient ∑(k=0 à n−1) z_k = 0.',
      formulas: [
        { name: 'Racines n-ièmes', formula: 'z_k = \\sqrt[n]{R}\\,e^{i\\frac{\\theta + 2k\\pi}{n}} \\quad (0 \\leqslant k \\leqslant n - 1)' },
        { name: 'Triangle rectangle isocèle', formula: '\\frac{z_B - z_A}{z_C - z_A} = \\pm i' },
      ],
      workedExample: {
        title: 'Racines quatrièmes de 8(1 + i√3)',
        statement: 'Déterminer les racines quatrièmes de $Z = 8(1 + i\\sqrt{3})$.',
        methodSteps: [
          'Mettre sous forme exponentielle : $Z = 8 \\cdot 2e^{i\\frac{\\pi}{3}} = 16e^{i\\frac{\\pi}{3}}$.',
          'Prendre $\\sqrt[4]{16} = 2$ et diviser l’argument + $2k\\pi$ par $4$ : $\\varphi_k = \\frac{\\pi}{12} + \\frac{k\\pi}{2}$.',
        ],
        conclusion: 'Les $4$ racines sont $z_k = 2e^{i\\left(\\frac{\\pi}{12} + \\frac{k\\pi}{2}\\right)}$ pour $k \\in \\{0 ; 1 ; 2 ; 3\\}$.',
      },
      structuredSteps: p07Steps,
      exercises: p07Steps.map((s) => s.exercise),
    },
  ],
};
