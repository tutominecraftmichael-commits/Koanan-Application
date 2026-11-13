import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Modéliser les murs d’une maquette d’exposition en 3D',
    paragraphText:
      'Pour éviter que les murs d’une maquette d’exposition ne s’écroulent, des élèves de Terminale C souhaitent placer des panneaux strictement parallèles ou perpendiculaires entre eux dans un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$ de l’espace $\\mathcal{E}$. La géométrie analytique de l’espace traduit directement les notions géométriques (orthogonalité, appartenance, distance) en équations simples sur les coordonnées $(x ; y ; z)$.',
    formula: {
      name: 'Repère orthonormé de l’espace',
      formula: 'M(x ; y ; z) \\in \\mathcal{E} \\iff \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}',
    },
    konanTip: 'Dans l’espace, un plan se pilote presque toujours grâce à UN seul objet : son vecteur normal $\\vec{n}$.',
    exercise: {
      id: 'tc_m_geo_l06_p01_q01',
      type: 'mcq',
      prompt: 'Pour positionner deux murs plans de la maquette de façon qu’ils soient perpendiculaires, sur quel outil analytique principal s’appuie-t-on ?',
      options: [
        'Leurs vecteurs normaux respectifs $\\vec{n}$ et $\\vec{n}’$',
        'Uniquement le milieu de leurs arêtes',
        'La somme des abscisses de deux points',
        'Leur distance à l’origine uniquement',
      ],
      correctAnswerIndex: 0,
      explanation: 'Deux plans sont parallèles ssi leurs vecteurs normaux sont colinéaires, et perpendiculaires ssi leurs vecteurs normaux sont orthogonaux ($\\vec{n}\\cdot\\vec{n}’ = 0$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Vecteur normal',
    stepTheme: 'blue',
    stepTitle: 'Définition d’un vecteur normal à un plan',
    paragraphText:
      'Soit $(P)$ un plan de l’espace $\\mathcal{E}$, dirigé par un couple de vecteurs directeurs non colinéaires $\\vec{u}$ et $\\vec{v}$. On appelle **vecteur normal** à $(P)$ tout vecteur **non nul** $\\vec{n}$ orthogonal à la fois à $\\vec{u}$ et à $\\vec{v}$. Dans un cube $ABCDEFGH$, les vecteurs $\\overrightarrow{AD}$ et $\\overrightarrow{DC}$ forment une base du plan $(ABC)$, et $\\overrightarrow{DH}$ (ou $\\overrightarrow{BF}$) est orthogonal aux deux : c’est donc un vecteur normal à $(ABC)$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Cube ABCDEFGH : vecteur normal à la face (ABC)',
      caption: 'DH (ou BF) est orthogonal à AD et à DC, donc normal au plan (ABC).',
      svgContent: `<svg viewBox="0 0 260 175" width="250" height="168" xmlns="http://www.w3.org/2000/svg">
        <rect x="45" y="55" width="105" height="95" fill="none" stroke="#1e293b" stroke-width="2"/>
        <polygon points="45,55 90,25 195,25 150,55" fill="none" stroke="#1e293b" stroke-width="2"/>
        <polygon points="150,55 195,25 195,120 150,150" fill="none" stroke="#1e293b" stroke-width="2"/>
        <line x1="45" y1="150" x2="90" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="90" y1="25" x2="90" y2="120" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,3"/>
        <line x1="90" y1="120" x2="195" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
        <polygon points="45,150 150,150 195,120 90,120" fill="#dbeafe" fill-opacity="0.45" stroke="none"/>
        <text x="32" y="158" font-size="12" font-weight="bold" fill="#1e293b">A</text>
        <text x="153" y="160" font-size="12" font-weight="bold" fill="#1e293b">B</text>
        <text x="200" y="124" font-size="12" font-weight="bold" fill="#1e293b">C</text>
        <text x="80" y="116" font-size="12" font-weight="bold" fill="#2563eb">D</text>
        <text x="32" y="55" font-size="12" font-weight="bold" fill="#1e293b">E</text>
        <text x="148" y="69" font-size="12" font-weight="bold" fill="#1e293b">F</text>
        <text x="199" y="25" font-size="12" font-weight="bold" fill="#1e293b">G</text>
        <text x="85" y="18" font-size="12" font-weight="bold" fill="#2563eb">H</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l06_p01_q02',
      type: 'mcq',
      prompt: 'Dans le cube $ABCDEFGH$ ci-dessus, quel plan passe par $H$ et admet $\\overrightarrow{AB}$ comme vecteur normal ?',
      options: ['Le plan $(ABC)$', 'Le plan $(ADE)$ (c’est-à-dire $(ADH)$)', 'Le plan $(EFG)$', 'Le plan $(BCG)$ uniquement'],
      correctAnswerIndex: 1,
      explanation: 'Les arêtes $(AD)$ et $(AE)$ sont perpendiculaires à $(AB)$, donc $\\overrightarrow{AB}$ est normal au plan $(ADE)$ qui contient aussi $H$. (Le plan $(BCG)$ a aussi $\\overrightarrow{AB}$ comme vecteur normal mais ne passe pas par $H$.)',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Caractérisation',
    stepTheme: 'violet',
    stepTitle: 'Unicité du plan et équivalence $\\overrightarrow{AM} \\perp \\vec{n}$',
    paragraphText:
      'Soient $A$ un point et $\\vec{n}$ un vecteur non nul de l’espace. Il existe **un unique plan $(P)$** passant par $A$ et de vecteur normal $\\vec{n}$. Pour tout point $M$ de l’espace, $M \\in (P) \\iff \\overrightarrow{AM} \\perp \\vec{n} \\iff \\overrightarrow{AM} \\cdot \\vec{n} = 0$. En particulier, si $M$ est un point du plan $(ABC)$ d’un cube, alors $\\overrightarrow{AM}$ est toujours orthogonal à $\\overrightarrow{BF}$.',
    formula: {
      name: 'Caractérisation vectorielle d’un plan',
      formula: 'M \\in (P) \\iff \\overrightarrow{AM} \\cdot \\vec{n} = 0',
    },
    exercise: {
      id: 'tc_m_geo_l06_p01_q03',
      type: 'mcq',
      prompt: 'Deux plans $(P)$ et $(P’)$ ont pour vecteurs normaux $\\vec{n}$ et $\\vec{n}’$. À quelle condition $(P)$ et $(P’)$ sont-ils perpendiculaires ?',
      options: [
        '$\\vec{n}$ et $\\vec{n}’$ sont colinéaires',
        '$\\vec{n}$ et $\\vec{n}’$ sont orthogonaux ($\\vec{n} \\cdot \\vec{n}’ = 0$)',
        '$\\vec{n} + \\vec{n}’ = \\vec{0}$',
        '$\\|\\vec{n}\\| = \\|\\vec{n}’\\|$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les directions des vecteurs normaux reflètent directement les inclinaisons des plans : $(P) \\perp (P’) \\iff \\vec{n} \\perp \\vec{n}’$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Équation cartésienne',
    stepTheme: 'violet',
    stepTitle: 'Équation cartésienne $ax + by + cz + d = 0$ d’un plan',
    paragraphText:
      'Dans un repère orthonormé, tout plan $(P)$ de vecteur normal $\\vec{n}(a; b; c) \\neq \\vec{0}$ admet une équation cartésienne de la forme $ax + by + cz + d = 0$. Réciproquement, toute équation $ax + by + cz + d = 0$ avec $(a, b, c) \\neq (0, 0, 0)$ est celle d’un plan de vecteur normal $\\vec{n}(a; b; c)$. Pour tout $k \\neq 0$, $k(ax+by+cz+d)=0$ représente le même plan.',
    formula: {
      name: 'Équation cartésienne en repère orthonormé',
      formula: 'ax + by + cz + d = 0 \\quad \\text{avec } (a,b,c) \\neq (0,0,0) \\implies \\vec{n}(a; b; c) \\perp (P)',
    },
    keyRule: 'Attention : si le repère n’est PAS orthonormé, le plan a toujours une équation $ax+by+cz+d=0$, mais $(a;b;c)$ n’est plus un vecteur normal !',
    exercise: {
      id: 'tc_m_geo_l06_p01_q04',
      type: 'mcq',
      prompt: 'Quelle est une équation cartésienne du plan passant par l’origine $O(0;0;0)$ et de vecteur normal $\\vec{n}(1; -2; -3)$ ?',
      options: [
        '$x - 2y - 3z + 1 = 0$',
        '$x - 2y - 3z = 0$',
        '$-x + 2y + 3z - 6 = 0$',
        '$x + 2y + 3z = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’équation est de la forme $x - 2y - 3z + d = 0$. Comme $O(0;0;0)$ appartient au plan, $0 - 0 - 0 + d = 0 \\implies d = 0$, soit $x - 2y - 3z = 0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice corrigé',
    stepTheme: 'green',
    stepTitle: 'Plan orthogonal à une droite $(AB)$ passant par $C$ (Ex. 2 p.12)',
    paragraphText:
      'On donne $A(5; 2; 3)$, $B(4; -2; 1)$ et $C(2; 4; -5)$. Pour trouver l’équation du plan passant par $C$ et orthogonal à $(AB)$, on prend $\\overrightarrow{AB}$ comme vecteur normal ! Calculons soigneusement : $\\overrightarrow{AB}(4 - 5 ; -2 - 2 ; 1 - 3) = (-1 ; -4 ; -2)$ (attention à bien faire $x_B - x_A = -1$ et non $+1$). Une équation est donc $-x - 4y - 2z + d’ = 0$, ou en multipliant par $-1$ : $x + 4y + 2z + d = 0$. Comme $C(2; 4; -5)$ est dans le plan, $2 + 4(4) + 2(-5) + d = 0 \\implies 8 + d = 0 \\implies d = -8$, soit $x + 4y + 2z - 8 = 0$.',
    formula: {
      name: 'Plan normal à (AB) passant par C',
      formula: '\\overrightarrow{AB}(-1; -4; -2) \\implies (x - 2) + 4(y - 4) + 2(z + 5) = 0 \\iff x + 4y + 2z - 8 = 0',
    },
    exercise: {
      id: 'tc_m_geo_l06_p01_q05',
      type: 'mcq',
      prompt: 'Avec $A(5;2;3)$, $B(4;-2;1)$ et $C(2;4;-5)$, quelle est l’équation cartésienne exacte du plan passant par $C$ et orthogonal à $(AB)$ ?',
      options: [
        '$x - 4y - 2z + 4 = 0$',
        '$x + 4y + 2z - 8 = 0$',
        '$x + 4y - 2z + 8 = 0$',
        '$-x - 4y + 2z = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{AB} = (4-5; -2-2; 1-3) = (-1; -4; -2)$, colinéaire à $(1; 4; 2)$. Pour $C(2;4;-5)$ : $2 + 4(4) + 2(-5) = 8$, donc $x + 4y + 2z - 8 = 0$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Distance point–plan',
    stepTheme: 'violet',
    stepTitle: 'Distance d’un point $A(x_0; y_0; z_0)$ à un plan $(P)$',
    paragraphText:
      'En repère orthonormé, si $(P)$ a pour équation $ax + by + cz + d = 0$ et $A(x_0; y_0; z_0)$ est un point de $\\mathcal{E}$, la distance de $A$ à $(P)$ (longueur $AH$ où $H$ est le projeté orthogonal de $A$ sur $(P)$) vaut $d(A ; P) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$. Exemple du cours : pour $A(3; 2; 1)$ et $(P) : 2x - y + 3z + 5 = 0$, $d(A;P) = \\frac{|6 - 2 + 3 + 5|}{\\sqrt{4 + 1 + 9}} = \\frac{12}{\\sqrt{14}} = \\frac{6\\sqrt{14}}{7}$.',
    formula: {
      name: 'Distance d’un point à un plan',
      formula: 'd(A ; P) = \\frac{|a x_0 + b y_0 + c z_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}',
    },
    exercise: {
      id: 'tc_m_geo_l06_p01_q06',
      type: 'mcq',
      prompt: 'Quelle est la distance exacte du point $E(4 ; 2 ; -1)$ au plan $(Q)$ d’équation cartésienne $3x - 4y + 6 = 0$ (Exercice 1 d’application) ?',
      options: ['$\\frac{2}{5}$', '$2$', '$\\frac{10}{\\sqrt{29}}$', '$10$'],
      correctAnswerIndex: 1,
      explanation: '$d(E;(Q)) = \\frac{|3\\times 4 - 4\\times 2 + 0\\times(-1) + 6|}{\\sqrt{3^2 + (-4)^2 + 0^2}} = \\frac{|12 - 8 + 6|}{\\sqrt{25}} = \\frac{10}{5} = 2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier la valeur absolue ni les zéros manquants dans $ax+by+cz+d=0$',
    paragraphText:
      'Si une coordonnée manque dans l’équation d’un plan, par exemple $(Q) : 3x - 4y + 6 = 0$, cela signifie que le coefficient de $z$ est $c = 0$ : son vecteur normal est $\\vec{n}(3; -4; 0)$ et la racine au dénominateur vaut $\\sqrt{3^2 + (-4)^2 + 0^2} = 5$. Et il faut toujours mettre la **valeur absolue** au numérateur pour que la distance soit positive.',
    exercise: {
      id: 'tc_m_geo_l06_p01_q07',
      type: 'mcq',
      prompt: 'Quel vecteur est normal au plan $(R)$ d’équation $2x - 5z + 7 = 0$ ?',
      options: ['$(2 ; -5 ; 7)$', '$(2 ; -5 ; 0)$', '$(2 ; 0 ; -5)$', '$(0 ; 2 ; -5)$'],
      correctAnswerIndex: 2,
      explanation: 'L’équation s’écrit $2x + 0\\cdot y - 5z + 7 = 0$, donc un vecteur normal est $\\vec{n}(2 ; 0 ; -5)$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Représentation paramétrique',
    stepTheme: 'blue',
    stepTitle: 'Représentation paramétrique d’une droite $(D)$',
    paragraphText:
      'Soit $(D)$ la droite passant par $A(x_0; y_0; z_0)$ et de vecteur directeur $\\vec{u}(a; b; c) \\neq \\vec{0}$. On dit que le système $\\begin{cases} x = x_0 + ta \\\\ y = y_0 + tb \\\\ z = z_0 + tc \\end{cases}$ ($t \\in \\mathbb{R}$) est une **représentation paramétrique** de $(D)$. Comme le choix du point $A \\in (D)$ et du vecteur directeur $\\vec{u}$ n’est pas unique, une droite admet une **infinité** de représentations paramétriques.',
    formula: {
      name: 'Système paramétrique de (D)',
      formula: '\\begin{cases} x = x_0 + t a \\\\ y = y_0 + t b \\\\ z = z_0 + t c \\end{cases}, \\quad t \\in \\mathbb{R}',
    },
    exercise: {
      id: 'tc_m_geo_l06_p02_q01',
      type: 'mcq',
      prompt: 'Quelle représentation paramétrique correspond à la droite $(D)$ passant par $A(2; 3; 0)$ et de vecteur directeur $\\vec{u}(-1; -1; 1)$ ?',
      options: [
        '$\\begin{cases} x = -1 + 2\\lambda \\\\ y = -1 + 3\\lambda \\\\ z = 1 \\end{cases}$',
        '$\\begin{cases} x = 2 - \\lambda \\\\ y = 3 - \\lambda \\\\ z = \\lambda \\end{cases}$ ($\\lambda \\in \\mathbb{R}$)',
        '$\\begin{cases} x = 2 + \\lambda \\\\ y = 3 + \\lambda \\\\ z = -\\lambda \\end{cases}$',
        '$x + y + z = 5$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les constantes donnent le point $(2; 3; 0)$ et les coefficients de $\\lambda$ donnent le vecteur directeur $(-1; -1; 1)$ : cela correspond exactement au second système.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Lecture rapide',
    stepTheme: 'green',
    stepTitle: 'Lire un point, un vecteur directeur et tester l’appartenance',
    paragraphText:
      'À partir d’un système paramétrique comme $\\begin{cases} x = 2\\mu \\\\ y = 2 - 4\\mu \\\\ z = 2 - 2\\mu \\end{cases}$, les constantes sans paramètre donnent le point $B(0; 2; 2)$ et les coefficients devant le paramètre donnent le vecteur directeur $\\vec{u}’(2; -4; -2)$. Pour vérifier si un point $M(x_M; y_M; z_M)$ appartient à cette droite, on résout le système et on vérifie s’il donne la **même** valeur de paramètre pour les trois coordonnées.',
    exercise: {
      id: 'tc_m_geo_l06_p02_q02',
      type: 'mcq',
      prompt: 'Le point $M(1 ; 0 ; 1)$ appartient-il à la droite $(D’) : \\begin{cases} x = 2\\mu \\\\ y = 2 - 4\\mu \\\\ z = 2 - 2\\mu \\end{cases}$ ?',
      options: [
        'Oui, pour $\\mu = \\frac{1}{2}$',
        'Oui, pour $\\mu = 2$',
        'Non, car $z$ donne une autre valeur de $\\mu$',
        'Non, car il manque $x_0$',
      ],
      correctAnswerIndex: 0,
      explanation: '$2\\mu = 1 \\implies \\mu = \\frac{1}{2}$ ; alors $y = 2 - 4(\\frac{1}{2}) = 0$ et $z = 2 - 2(\\frac{1}{2}) = 1$. Les trois équations donnent bien $\\mu = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Deux droites (1/2)',
    stepTheme: 'violet',
    stepTitle: 'Droites parallèles (confondues ou strictement parallèles)',
    paragraphText:
      'Soient $(D)$ de repère $(A, \\vec{u})$ et $(D’)$ de repère $(B, \\vec{v})$. Les droites $(D)$ et $(D’)$ sont **parallèles si et seulement si $\\vec{u}$ et $\\vec{v}$ sont colinéaires** ($\\vec{v} = k\\vec{u}$). Ensuite, pour trancher : si $A \\in (D’)$ (ou $\\overrightarrow{AB}$ colinéaire à $\\vec{u}$), elles sont **confondues** ; sinon elles sont **strictement parallèles**.',
    formula: {
      name: 'Parallélisme de deux droites',
      formula: '(D) \\parallel (D’) \\iff \\vec{u} \\text{ et } \\vec{v} \\text{ colinéaires}',
    },
    exercise: {
      id: 'tc_m_geo_l06_p02_q03',
      type: 'mcq',
      prompt: 'Soient $(D) : x=3,\\; y=1+\\lambda,\\; z=-2\\lambda$ et $(D’’) : x=1,\\; y=1-2v,\\; z=-1+4v$. Quelle est leur position relative ?',
      options: [
        'Elles sont confondues',
        'Elles sont strictement parallèles',
        'Elles sont sécantes',
        'Elles sont non coplanaires',
      ],
      correctAnswerIndex: 1,
      explanation: 'Leurs vecteurs directeurs $\\vec{u}(0;1;-2)$ et $\\vec{u}’’(0;-2;4) = -2\\vec{u}$ sont colinéaires (donc parallèles). De plus tout point de $(D)$ a pour abscisse $3 \\neq 1$ : elles sont strictement parallèles.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Deux droites (2/2)',
    stepTheme: 'violet',
    stepTitle: 'Droites sécantes vs droites non coplanaires',
    paragraphText:
      'Lorsque $\\vec{u}$ et $\\vec{v}$ ne sont **pas colinéaires**, $(D)$ et $(D’)$ sont soit **sécantes** (si $\\overrightarrow{AB}, \\vec{u}, \\vec{v}$ sont coplanaires), soit **non coplanaires** (sinon). En pratique, on résout le système à $3$ équations et $2$ inconnues (avec deux paramètres distincts, par exemple $\\mu$ et $v$ !) : s’il existe un couple solution unique $(\\mu, v)$, les droites sont **sécantes** ; si le système est impossible, elles sont **non coplanaires**.',
    formula: {
      name: 'Critère analytique d’intersection',
      formula: '\\vec{u} \\nparallel \\vec{v} : \\quad \\text{système } M_{(\\mu)} = M’_{(v)} \\text{ compatible} \\iff \\text{sécantes}',
    },
    keyRule: 'Toujours donner des noms de paramètres DIFFÉRENTS ($\\lambda, \\mu, v$) à chaque droite avant d’égaler leurs coordonnées !',
    exercise: {
      id: 'tc_m_geo_l06_p02_q04',
      type: 'mcq',
      prompt: 'Dans l’exercice p.6, $(D’)$ a pour paramètre $\\mu$ ($x=2\\mu, y=2-4\\mu, z=2-2\\mu$) et $(D’’)$ a pour paramètre $v$ ($x=1, y=1-2v, z=-1+4v$). Sont-elles sécantes ou non coplanaires ?',
      options: [
        'Sécantes en $A(1 ; 0 ; 1)$ pour $(\\mu ; v) = (\\frac{1}{2} ; \\frac{1}{2})$',
        'Non coplanaires',
        'Strictement parallèles',
        'Sécantes en $B(0 ; 2 ; 2)$',
      ],
      correctAnswerIndex: 0,
      explanation: '$2\\mu = 1 \\implies \\mu = \\frac{1}{2}$. Dans $y$ : $2 - 2 = 1 - 2v \\implies v = \\frac{1}{2}$. Vérif dans $z$ : $2 - 1 = 1$ et $-1 + 4(\\frac{1}{2}) = 1$. Elles se coupent en $A(1;0;1)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'definition',
    stepBadge: 'Orthogonalité',
    stepTheme: 'blue',
    stepTitle: 'Droites orthogonales dans l’espace ($\\vec{u} \\cdot \\vec{v} = 0$)',
    paragraphText:
      'Deux droites $(D)$ et $(D’)$ de vecteurs directeurs $\\vec{u}$ et $\\vec{v}$ sont **orthogonales** si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. Attention : dans l’espace, deux droites orthogonales ne sont pas obligatoirement sécantes (elles peuvent être non coplanaires). Ainsi, $(D)$ de vecteur directeur $\\vec{u}(0; 1; -2)$ et $(D’)$ de vecteur directeur $\\vec{u}’(2; -4; -2)$ vérifient $\\vec{u}\\cdot\\vec{u}’ = 0\\times 2 + 1\\times(-4) + (-2)\\times(-2) = 0$ tout en ayant un système d’intersection impossible : elles sont **non coplanaires et orthogonales** !',
    formula: {
      name: 'Orthogonalité de deux droites',
      formula: '(D) \\perp (D’) \\iff \\vec{u} \\cdot \\vec{v} = 0',
    },
    exercise: {
      id: 'tc_m_geo_l06_p02_q05',
      type: 'mcq',
      prompt: 'Comment prouve-t-on que $(D)$ ($\\vec{u}(0; 1; -2)$) et $(D’)$ ($\\vec{u}’(2; -4; -2)$) sont orthogonales ?',
      options: [
        'On calcule $\\vec{u} \\cdot \\vec{u}’ = 0\\times 2 + 1\\times(-4) + (-2)\\times(-2) = 0$',
        'On vérifie qu’elles ont un point commun',
        'On montre que $\\vec{u}’ = 2\\vec{u}$',
        'On vérifie qu’elles ont la même abscisse',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le produit scalaire des deux vecteurs directeurs est nul ($0 - 4 + 4 = 0$), donc les deux droites sont orthogonales, bien qu’elles ne se coupent pas.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Système impossible',
    stepTheme: 'green',
    stepTitle: 'Vérifier qu’un système d’intersection est sans solution',
    paragraphText:
      'Pour $(D)$ ($x=3, y=1+\\lambda, z=-2\\lambda$) et $(D’)$ ($x=2\\mu, y=2-4\\mu, z=2-2\\mu$), les deux premières équations imposent $2\\mu = 3 \\implies \\mu = \\frac{3}{2}$, puis $1 + \\lambda = 2 - 4(\\frac{3}{2}) = -4 \\implies \\lambda = -5$. Or dans la troisième équation, $-2\\lambda = 10$ alors que $2 - 2\\mu = 2 - 3 = -1$ ($10 \\neq -1$). Le système n’admet aucune solution : $(D)$ et $(D’)$ sont non coplanaires.',
    exercise: {
      id: 'tc_m_geo_l06_p02_q06',
      type: 'mcq',
      prompt: 'Pourquoi deux droites de l’espace ayant des vecteurs directeurs non colinéaires peuvent-elles n’avoir aucun point commun ?',
      options: [
        'C’est impossible en géométrie',
        'Parce qu’elles peuvent être non coplanaires (dans des plans parallèles distincts par exemple)',
        'Parce que leurs vecteurs directeurs sont nuls',
        'Parce que la distance vaut $0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Contrairement au plan, deux droites non parallèles de l’espace ne se coupent pas forcément : elles peuvent être non coplanaires.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Piège classique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas réutiliser la même lettre $\\lambda$ pour deux droites différentes',
    paragraphText:
      'Si deux droites $(D)$ et $(D’)$ sont données toutes deux avec le paramètre $t$ dans l’énoncé, **renomme obligatoirement** l’un des deux paramètres en $t’$ (ou $\\lambda$ et $\\mu$) avant de chercher un point d’intersection ! En effet, un point commun peut correspondre à $t = 2$ sur $(D)$ et $t’ = -1$ sur $(D’)$. Garder la même lettre $t$ ferait rater le point d’intersection !',
    exercise: {
      id: 'tc_m_geo_l06_p02_q07',
      type: 'mcq',
      prompt: 'Les droites $(D_1) : (t ; 2t ; 1)$ et $(D_2) : (2 ; s+3 ; 1)$ (paramètres $t, s \\in \\mathbb{R}$) se coupent-elles ?',
      options: [
        'Non, car $t = 2$ et $2t = t+3$ donnerait $4 = 5$',
        'Oui, en $(2 ; 4 ; 1)$ pour $t = 2$ et $s = 1$',
        'Elles sont parallèles',
        'Elles sont confondues',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec deux paramètres distincts $t$ et $s$ : $t = 2$ et $2t = s + 3 \\implies 4 = s + 3 \\implies s = 1$, et $z=1=1$. Elles se coupent en $(2;4;1)$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Droite et Plan',
    stepTheme: 'violet',
    stepTitle: 'Positions relatives d’une droite $(D)=(A;\\vec{u})$ et d’un plan $(P)$',
    paragraphText:
      'Soient $(D)$ une droite passant par $A$ de vecteur directeur $\\vec{u}$, et $(P)$ un plan passant par $B$ de vecteur normal $\\vec{n}$. On teste d’abord le produit scalaire $\\vec{u} \\cdot \\vec{n}$ : si $\\vec{u} \\cdot \\vec{n} \\neq 0$, $(D)$ et $(P)$ sont **sécants en un point unique** (et si $\\vec{u}$ est colinéaire à $\\vec{n}$, $(D)$ est **orthogonale/perpendiculaire** à $(P)$). Si $\\vec{u} \\cdot \\vec{n} = 0$, alors $(D) \\parallel (P)$ : $(D)$ est **incluse** dans $(P)$ si $A \\in (P)$ (ou $\\overrightarrow{AB}\\cdot\\vec{n}=0$), et **strictement parallèle** sinon.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Critères droite (A ; u) et plan (P) de normale n',
      tableData: {
        headers: ['Test $\\vec{u} \\cdot \\vec{n}$', 'Test complémentaire', 'Position relative'],
        rows: [
          ['$\\vec{u} \\cdot \\vec{n} = 0$', '$A \\in (P)$ ($\\overrightarrow{AB}\\cdot\\vec{n}=0$)', '$(D) \\subset (P)$ (incluse)'],
          ['$\\vec{u} \\cdot \\vec{n} = 0$', '$A \\notin (P)$ ($\\overrightarrow{AB}\\cdot\\vec{n}\\neq 0$)', '$(D) \\parallel (P)$ strictement'],
          ['$\\vec{u} \\cdot \\vec{n} \\neq 0$', 'Cas particulier : $\\vec{u} \\parallel \\vec{n}$', 'Sécants en $1$ point ($(D) \\perp (P)$ si colinéaires)'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l06_p03_q01',
      type: 'mcq',
      prompt: 'À quelle condition une droite $(D)$ de vecteur directeur $\\vec{u}$ est-elle orthogonale (perpendiculaire) à un plan $(P)$ de vecteur normal $\\vec{n}$ ?',
      options: [
        '$\\vec{u} \\cdot \\vec{n} = 0$',
        '$\\vec{u}$ et $\\vec{n}$ sont colinéaires',
        'Un point de $(D)$ appartient à $(P)$',
        '$\\vec{u} + \\vec{n} = \\vec{0}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le vecteur normal $\\vec{n}$ étant lui-même orthogonal à $(P)$, une droite est orthogonale à $(P)$ si et seulement si son vecteur directeur $\\vec{u}$ est colinéaire à $\\vec{n}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Intersection droite–plan',
    stepTheme: 'green',
    stepTitle: 'Calculer l’intersection d’une droite $(D)$ et d’un plan $(P)$',
    paragraphText:
      'Soient $(D) : \\begin{cases} x = 2 - 2\\lambda \\\\ y = 2\\lambda \\\\ z = 2 - 3\\lambda \\end{cases}$ et $(P) : 2x + y + 2z - 4 = 0$. On a $\\vec{u}(-2; 2; -3)$ et $\\vec{n}(2; 1; 2)$, donc $\\vec{u}\\cdot\\vec{n} = -4 + 2 - 6 = -8 \\neq 0$ : $(D)$ perce $(P)$ en un point $A$. On substitue $x, y, z$ dans l’équation de $(P)$ : $2(2-2\\lambda) + 2\\lambda + 2(2-3\\lambda) - 4 = 0 \\iff 4 - 8\\lambda = 0 \\iff \\lambda = \\frac{1}{2}$. En reportant dans $(D)$, on obtient $A(1 ; 1 ; \\frac{1}{2})$.',
    formula: {
      name: 'Substitution paramétrique dans le plan',
      formula: 'a(x_0+\\lambda u_x) + b(y_0+\\lambda u_y) + c(z_0+\\lambda u_z) + d = 0 \\implies \\lambda',
    },
    exercise: {
      id: 'tc_m_geo_l06_p03_q02',
      type: 'mcq',
      prompt: 'La droite $(D’) : \\begin{cases} x = 1 - \\mu \\\\ y = 2 - 2\\mu \\\\ z = 1 + 2\\mu \\end{cases}$ et le plan $(P) : 2x + y + 2z - 4 = 0$ sont :',
      options: [
        'Sécants',
        'Strictement parallèles',
        'Confondus ($(D’) \\subset (P)$)',
        'Orthogonaux',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\vec{u}’(-1;-2;2) \\cdot \\vec{n}(2;1;2) = -2 - 2 + 4 = 0$ donc $(D’) \\parallel (P)$. De plus le point $B(1;2;1) \\in (D’)$ vérifie $2(1)+2+2(1)-4 = 2 \\neq 0$, donc $B \\notin (P)$ : strictement parallèles.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Deux plans',
    stepTheme: 'violet',
    stepTitle: 'Positions relatives de deux plans $(P)$ et $(P’)$',
    paragraphText:
      'Soient $(P)$ passant par $A$ de vecteur normal $\\vec{n}$ et $(P’)$ passant par $B$ de vecteur normal $\\vec{n}’$. Si $\\vec{n}$ et $\\vec{n}’$ sont **colinéaires**, $(P)$ et $(P’)$ sont **parallèles** (confondus si $A \\in (P’)$ / $\\overrightarrow{AB}\\cdot\\vec{n} = 0$, strictement parallèles sinon). Si $\\vec{n}$ et $\\vec{n}’$ sont **non colinéaires**, alors $(P)$ et $(P’)$ sont **sécants suivant une droite $(\\Delta)$** (et perpendiculaires si $\\vec{n}\\cdot\\vec{n}’ = 0$).',
    formula: {
      name: 'Deux plans (P) et (P’)',
      formula: '\\vec{n} \\parallel \\vec{n}’ \\iff (P) \\parallel (P’) \\qquad ; \\qquad \\vec{n} \\nparallel \\vec{n}’ \\iff (P) \\cap (P’) = (\\Delta)',
    },
    exercise: {
      id: 'tc_m_geo_l06_p03_q03',
      type: 'mcq',
      prompt: 'Quelle est la position relative des plans $(P) : 2x - y + 4z - 1 = 0$ et $(P’) : -4x + 2y - 8z + 5 = 0$ ?',
      options: [
        'Sécants suivant une droite',
        'Confondus',
        'Strictement parallèles',
        'Perpendiculaires',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\vec{n}’(-4;2;-8) = -2\\vec{n}(2;-1;4)$, donc $(P)\\parallel(P’)$. Comme $-2(2x-y+4z-1) = -4x+2y-8z+2 \\neq -4x+2y-8z+5$, ils sont strictement parallèles.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Intersection de 2 plans',
    stepTheme: 'green',
    stepTitle: 'Paramétrer la droite d’intersection de deux plans sécants',
    paragraphText:
      'Soient $(P) : 2x + y + 2z - 6 = 0$ et $(P’) : 2x - 2y - z + 3 = 0$. Leurs vecteurs normaux $\\vec{n}(2;1;2)$ et $\\vec{n}’(2;-2;-1)$ ne sont pas colinéaires (car $\\frac{2}{2} \\neq \\frac{1}{-2}$), et de plus $\\vec{n}\\cdot\\vec{n}’ = 4 - 2 - 2 = 0$, donc $(P) \\perp (P’)$. Pour trouver leur droite d’intersection $(\\Delta)$, on pose l’une des coordonnées comme paramètre, par exemple $z = \\lambda$, puis on résout le système $2 \\times 2$ en $x$ et $y$ : $\\begin{cases} 2x + y = 6 - 2\\lambda \\\\ 2x - 2y = -3 + \\lambda \\end{cases}$, ce qui donne $3y = 9 - 3\\lambda \\implies y = 3 - \\lambda$, puis $x = \\frac{3}{2} - \\frac{1}{2}\\lambda$.',
    formula: {
      name: 'Droite (Δ) = (P) ∩ (P’)',
      formula: '\\begin{cases} x = \\frac{3}{2} - \\frac{1}{2}\\lambda \\\\ y = 3 - \\lambda \\\\ z = \\lambda \\end{cases}, \\quad \\lambda \\in \\mathbb{R}',
    },
    exercise: {
      id: 'tc_m_geo_l06_p03_q04',
      type: 'mcq',
      prompt: 'À l’aide de la représentation paramétrique obtenue $\\begin{cases} x = \\frac{3}{2} - \\frac{1}{2}\\lambda \\\\ y = 3 - \\lambda \\\\ z = \\lambda \\end{cases}$, quel vecteur dirige cette droite d’intersection $(\\Delta)$ ?',
      options: [
        '$\\vec{u}(\\frac{3}{2} ; 3 ; 0)$',
        '$\\vec{u}(-1 ; -2 ; 2)$ (ou $(-\\frac{1}{2} ; -1 ; 1)$)',
        '$\\vec{n}(2 ; 1 ; 2)$',
        '$\\vec{u}(1 ; 1 ; 1)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les coefficients de $\\lambda$ forment le vecteur directeur $(-\\frac{1}{2}; -1; 1)$, qui multiplié par $2$ donne $\\vec{u}(-1; -2; 2)$. On vérifie bien qu’il est orthogonal à $\\vec{n}(2;1;2)$ et $\\vec{n}’(2;-2;-1)$ !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Vérification croisée',
    stepTheme: 'blue',
    stepTitle: 'Contrôler une intersection $(P) \\cap (P’)$ en 10 secondes',
    paragraphText:
      'Quand tu trouves une droite paramétrique $(\\Delta)$ pour $(P) \\cap (P’)$, vérifie toujours deux points ou un point + le vecteur directeur : (1) le point trouvé pour $\\lambda = 0$, ici $(\\frac{3}{2}; 3; 0)$, doit annuler les deux équations de $(P)$ et $(P’)$ ; (2) le vecteur directeur $\\vec{u}$ doit être orthogonal à $\\vec{n}$ ET à $\\vec{n}’$ ($\\vec{u}\\cdot\\vec{n} = 0$ et $\\vec{u}\\cdot\\vec{n}’ = 0$).',
    exercise: {
      id: 'tc_m_geo_l06_p03_q05',
      type: 'mcq',
      prompt: 'Pour les plans $(P) : 2x+y+2z-6=0$ et $(P’) : 2x-2y-z+3=0$, le produit scalaire $\\vec{n} \\cdot \\vec{n}’$ vaut :',
      options: ['$6$', '$2$', '$0$ (les plans sont perpendiculaires)', '$-4$'],
      correctAnswerIndex: 2,
      explanation: '$\\vec{n}\\cdot\\vec{n}’ = 2\\times 2 + 1\\times(-2) + 2\\times(-1) = 4 - 2 - 2 = 0$, donc $(P)$ et $(P’)$ sont perpendiculaires.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Choix du paramètre',
    stepTheme: 'green',
    stepTitle: 'Choisir la bonne inconnue à poser égale à $t$',
    paragraphText:
      'Dans certains systèmes, une variable n’apparaît qu’une fois ou apparaît dans une équation simple (ex. $x - z - 2 = 0$ et $2x + y - 3z + 1 = 0$). En posant $z = t$, la première équation donne tout de suite $x = 2 + t$, et la deuxième donne $y = 3t - 2(2+t) - 1 = t - 5$. Choisir l’inconnue la plus simple à isoler évite les fractions inutiles.',
    exercise: {
      id: 'tc_m_geo_l06_p03_q06',
      type: 'mcq',
      prompt: 'Soit $(D)$ l’intersection de $(Q) : x - z - 2 = 0$ et $(Q’) : 2x + y - 3z + 1 = 0$. En posant $z = t$, quelle expression de $(x, y, z)$ obtient-on ?',
      options: [
        '$(2+t ; -5+t ; t)$',
        '$(2-t ; 5+t ; t)$',
        '$(2+t ; 5-t ; t)$',
        '$(-2+t ; -5+t ; t)$',
      ],
      correctAnswerIndex: 0,
      explanation: '$x = 2 + t$, puis $y = -2x + 3z - 1 = -2(2+t) + 3t - 1 = t - 5$. Donc $E(2;-5;0) \\in (D)$ et $\\vec{u}(1;1;1)$ dirige $(D)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Confusion classique',
    stepTheme: 'orange',
    stepTitle: 'Vecteur directeur vs vecteur normal : ne jamais mélanger !',
    paragraphText:
      'Pour tester le parallélisme entre **une droite** ($\\vec{u}$) et **un plan** ($\\vec{n}$), ce n’est PAS la colinéarité qu’il faut tester, mais **l’orthogonalité $\\vec{u}\\cdot\\vec{n} = 0$** ! Inversement, si $\\vec{u}$ et $\\vec{n}$ sont colinéaires, alors la droite est orthogonale (perpendiculaire) au plan.',
    keyRule: 'Droite // Plan $\\iff \\vec{u} \\cdot \\vec{n} = 0$. Droite $\\perp$ Plan $\\iff \\vec{u}$ et $\\vec{n}$ colinéaires.',
    exercise: {
      id: 'tc_m_geo_l06_p03_q07',
      type: 'mcq',
      prompt: 'Si une droite $(D)$ a pour vecteur directeur $\\vec{u}(1; 1; 1)$ et un plan $(P)$ a pour équation $x - y + 3 = 0$, pourquoi $(D)$ est-elle parallèle à $(P)$ ?',
      options: [
        'Car $\\vec{u}$ est colinéaire à $\\vec{n}(1; -1; 0)$',
        'Car $\\vec{u} \\cdot \\vec{n} = 1\\times 1 + 1\\times(-1) + 1\\times 0 = 0$',
        'Car $O \\in (P)$',
        'Car $(P)$ ne dépend pas de $z$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le vecteur normal de $(P)$ est $\\vec{n}(1; -1; 0)$. Comme $\\vec{u}\\cdot\\vec{n} = 0$, $\\vec{u} \\perp \\vec{n}$, donc $(D)$ est parallèle à $(P)$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Renforcement Ex. 1.1',
    stepTheme: 'green',
    stepTitle: 'Déterminer une équation cartésienne du plan $(ABC)$ depuis $3$ points',
    paragraphText:
      'Soient $A(-2; 0; 0)$, $B(0; 3; 0)$ et $C(0; 0; -4)$ non alignés. Un vecteur normal $\\vec{n}(a; b; c)$ à $(ABC)$ est orthogonal à $\\overrightarrow{AB}(2; 3; 0)$ et $\\overrightarrow{AC}(2; 0; -4)$ : $\\begin{cases} 2a + 3b = 0 \\\\ 2a - 4c = 0 \\end{cases}$. On choisit une valeur pratique pour $a$ afin d’éviter les fractions, par exemple $a = 6$ : alors $b = -4$ et $c = 3$, donc $\\vec{n}(6; -4; 3)$. L’équation est $6x - 4y + 3z + d = 0$ ; comme $A(-2; 0; 0) \\in (ABC)$, $6(-2) + d = 0 \\implies d = 12$, d’où $6x - 4y + 3z + 12 = 0$.',
    formula: {
      name: 'Vecteur normal à (ABC)',
      formula: '\\vec{n} \\cdot \\overrightarrow{AB} = 0 \\quad \\text{et} \\quad \\vec{n} \\cdot \\overrightarrow{AC} = 0',
    },
    exercise: {
      id: 'tc_m_geo_l06_p04_q01',
      type: 'mcq',
      prompt: 'Quelle est une équation cartésienne du plan passant par $A(-2;0;0)$, $B(0;3;0)$ et $C(0;0;-4)$ ?',
      options: [
        '$6x + 4y + 3z + 12 = 0$',
        '$6x - 4y + 3z + 12 = 0$',
        '$2x + 3y - 4z = 0$',
        '$6x - 4y + 3z - 12 = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On teste les trois points dans $6x - 4y + 3z + 12 = 0$ : pour $A$ : $-12+12=0$ ; pour $B$ : $-12+12=0$ ; pour $C$ : $-12+12=0$. Les trois appartiennent bien au plan !',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Renforcement Ex. 1.2',
    stepTheme: 'green',
    stepTitle: 'Trouver UN plan passant par $A$ et orthogonal à $(ABC)$',
    paragraphText:
      'Il existe une infinité de plans passant par $A(-2;0;0)$ et orthogonaux à $(ABC)$. Pour en déterminer un, il suffit de trouver un vecteur normal $\\vec{n}’(a’; b’; c’) \\neq \\vec{0}$ tel que $\\vec{n}\\cdot\\vec{n}’ = 0$, soit $6a’ - 4b’ + 3c’ = 0$. Astuce : pose $a’ = 0$, ce qui laisse $-4b’ + 3c’ = 0$, par exemple $\\vec{n}’(0; 3; 4)$. L’équation du plan $(P)$ est alors $3y + 4z + d = 0$, et comme $A(-2; 0; 0) \\in (P)$, $0 + 0 + d = 0 \\implies d = 0$, soit $(P) : 3y + 4z = 0$.',
    formula: {
      name: 'Condition de perpendicularité (P) ⊥ (ABC)',
      formula: '6a’ - 4b’ + 3c’ = 0 \\quad \\xrightarrow{a’=0} \\quad \\vec{n}’(0; 3; 4) \\implies (P): 3y + 4z = 0',
    },
    exercise: {
      id: 'tc_m_geo_l06_p04_q02',
      type: 'mcq',
      prompt: 'Lequel de ces plans passe par $A(-2; 0; 0)$ et est orthogonal au plan $(ABC) : 6x - 4y + 3z + 12 = 0$ ?',
      options: [
        '$(P) : 3y + 4z = 0$',
        '$(P) : 6x - 4y + 3z = 0$',
        '$(P) : 3y - 4z = 0$',
        '$(P) : 4y + 3z + 6 = 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le vecteur normal $(0; 3; 4)$ vérifie $6(0) - 4(3) + 3(4) = 0$ (orthogonal à $\\vec{n}$) et $A(-2; 0; 0)$ vérifie $3(0) + 4(0) = 0$. Note : $6x-4y+3z=0$ est parallèle à $(ABC)$, pas orthogonal !',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Renforcement Ex. 2',
    stepTheme: 'green',
    stepTitle: 'Plan $(\\Pi)$ contenant une droite $(D)$ et perpendiculaire à $(P)$',
    paragraphText:
      'Pour trouver un plan $(\\Pi)$ contenant une droite $(D)$ (de point $E$ et vecteur directeur $\\vec{u}$) et perpendiculaire à $(P)$ (de vecteur normal $\\vec{n}$), un vecteur normal $\\vec{n}’$ à $(\\Pi)$ doit vérifier deux conditions simultanées : $\\vec{n}’ \\perp \\vec{u}$ (car $(D) \\subset (\\Pi)$) ET $\\vec{n}’ \\perp \\vec{n}$ (car $(\\Pi) \\perp (P)$). Dans l’Exercice 2 p.13 ($\\vec{u}(1;1;1)$, $\\vec{n}(1;-1;0)$, $E(2;-5;0)$), on résout $\\begin{cases} a’+b’+c’=0 \\\\ a’-b’=0 \\end{cases}$, d’où $\\vec{n}’(1; 1; -2)$ et $(\\Pi) : x + y - 2z + 3 = 0$.',
    formula: {
      name: 'Conditions pour (Π) contenant (D) et ⊥ (P)',
      formula: '\\vec{n}’ \\cdot \\vec{u} = 0, \\quad \\vec{n}’ \\cdot \\vec{n} = 0 \\quad \\text{et} \\quad E \\in (\\Pi)',
    },
    exercise: {
      id: 'tc_m_geo_l06_p04_q03',
      type: 'mcq',
      prompt: 'Sachant que $(\\Pi)$ admet $\\vec{n}’(1; 1; -2)$ pour vecteur normal et passe par $E(2; -5; 0)$, quelle est son équation cartésienne ?',
      options: [
        '$x + y - 2z - 3 = 0$',
        '$x + y - 2z + 3 = 0$',
        '$x - y - 2z - 7 = 0$',
        '$x + y + 2z + 3 = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: '$1(2) + 1(-5) - 2(0) + d = 0 \\iff -3 + d = 0 \\iff d = 3$, d’où $x + y - 2z + 3 = 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Équation paramétrique → cartésienne',
    stepTheme: 'blue',
    stepTitle: 'Passer d’un point et deux vecteurs directeurs à l’équation d’un plan',
    paragraphText:
      'Si un plan est défini par trois points $A, B, C$ ou par un point $A$ et deux vecteurs directeurs $\\vec{u}, \\vec{v}$ non colinéaires, la méthode universelle consiste à chercher $\\vec{n}(a; b; c)$ solution du système homogène $\\begin{cases} \\vec{n}\\cdot\\vec{u} = 0 \\\\ \\vec{n}\\cdot\\vec{v} = 0 \\end{cases}$ en fixant librement l’une des composantes non nulles, puis à déterminer $d$ en écrivant que $A$ vérifie $ax+by+cz+d=0$.',
    exercise: {
      id: 'tc_m_geo_l06_p04_q04',
      type: 'mcq',
      prompt: 'Si $\\vec{n}(a; b; c)$ doit être orthogonal à $\\vec{u}(1; 0; -2)$ et à $\\vec{v}(0; 1; 3)$, lequel de ces vecteurs convient ?',
      options: ['$(2 ; -3 ; 1)$', '$(-2 ; 3 ; 1)$', '$(2 ; 3 ; 1)$', '$(1 ; 1 ; 1)$'],
      correctAnswerIndex: 0,
      explanation: '$a - 2c = 0$ et $b + 3c = 0$. Pour $c = 1$, on obtient $a = 2$ et $b = -3$, soit $\\vec{n}(2; -3; 1)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Double représentation',
    stepTheme: 'green',
    stepTitle: 'Montrer qu’une droite donnée par deux plans est parallèle à un 3e plan',
    paragraphText:
      'Dans l’Exercice 2 de renforcement, $(D)$ est donnée comme intersection de $(Q): x-z-2=0$ et $(Q’): 2x+y-3z+1=0$. Plutôt que de chercher deux vecteurs normaux, on paramétrise d’abord $(D)$ (ici $\\vec{u}(1; 1; 1)$) puis on teste simplement $\\vec{u} \\cdot \\vec{n}_P = 0$ ! Comme $\\vec{n}_P(1; -1; 0)$, on a $1(1) + 1(-1) + 1(0) = 0$, donc $(D) \\parallel (P)$.',
    exercise: {
      id: 'tc_m_geo_l06_p04_q05',
      type: 'mcq',
      prompt: 'Comment vérifier en plus que cette droite $(D)$ ($E(2;-5;0) \\in (D)$) est STRICTEMENT parallèle à $(P) : x - y + 3 = 0$ ?',
      options: [
        'En vérifiant que $2 - (-5) + 3 = 10 \\neq 0$ (donc $E \\notin (P)$)',
        'En vérifiant que $E \\in (P)$',
        'En calculant $\\vec{n}_Q \\cdot \\vec{n}_P$',
        'C’est automatique dès que $\\vec{u}\\cdot\\vec{n}_P = 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Une droite dont le vecteur directeur est orthogonal à $\\vec{n}_P$ est soit incluse dans $(P)$, soit strictement parallèle. Comme $E(2;-5;0) \\notin (P)$ ($10 \\neq 0$), elle est strictement parallèle.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Système cartésien de droite',
    stepTheme: 'violet',
    stepTitle: 'Passer d’une représentation paramétrique à deux équations de plans',
    paragraphText:
      'Inversement, pour écrire une droite $(D)$ sous forme d’intersection de deux plans à partir de $\\begin{cases} x = 2 + t \\\\ y = -5 + t \\\\ z = t \\end{cases}$, il suffit d’éliminer le paramètre $t$ ! Ici $t = z$, donc $x = 2 + z \\iff x - z - 2 = 0$ et $y = -5 + z \\iff y - z + 5 = 0$.',
    exercise: {
      id: 'tc_m_geo_l06_p04_q06',
      type: 'mcq',
      prompt: 'Quel système d’équations de deux plans représente la droite $\\begin{cases} x = 1 + 2t \\\\ y = -3 + t \\\\ z = 4 - t \\end{cases}$ ?',
      options: [
        '$\\begin{cases} x - 2y - 7 = 0 \\\\ y + z - 1 = 0 \\end{cases}$',
        '$\\begin{cases} x + y + z = 2 \\\\ x - y = 4 \\end{cases}$',
        '$x + y - z = 0$',
        '$\\begin{cases} x = 1 \\\\ y = -3 \\end{cases}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'De $y = -3 + t$ on tire $t = y + 3$. Alors $x = 1 + 2(y+3) = 2y + 7 \\iff x - 2y - 7 = 0$, et $y + z = (-3+t)+(4-t) = 1 \\iff y + z - 1 = 0$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Contrôle',
    stepTheme: 'orange',
    stepTitle: 'Vérifier le vecteur normal d’un plan parallèle à un plan donné',
    paragraphText:
      'Tout plan $(P’)$ parallèle à $(P) : ax + by + cz + d = 0$ possède le même vecteur normal $\\vec{n}(a; b; c)$ : son équation s’écrit donc directement $ax + by + cz + d’ = 0$, avec un seul réel $d’$ à ajuster grâce à un point connu de $(P’)$.',
    exercise: {
      id: 'tc_m_geo_l06_p04_q07',
      type: 'mcq',
      prompt: 'Quelle est l’équation du plan parallèle à $(P) : 2x - y + 3z - 5 = 0$ passant par $K(1 ; 2 ; -1)$ ?',
      options: [
        '$2x - y + 3z + 3 = 0$',
        '$2x - y + 3z - 3 = 0$',
        '$2x - y + 3z = 0$',
        '$x + 2y - z + 5 = 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'On écrit $2x - y + 3z + d’ = 0$. Avec $K(1;2;-1)$ : $2(1) - 2 + 3(-1) + d’ = 0 \\iff -3 + d’ = 0 \\iff d’ = 3$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'La sculpture de M. Yéo : choisir un repère orthonormé adapté',
    paragraphText:
      'M. Yéo réalise une sculpture inscrite dans un cube $ABCDEFGH$ : une base triangulaire équilatérale $BDE$ et une barre de fer $(AG)$. Pour vérifier que $(AG)$ est orthogonale au plan $(BDE)$, l’idée clé en géométrie analytique est de choisir le **repère orthonormé** $(A ; \\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ ! Dans ce repère d’unité le côté du cube, tous les sommets ont des coordonnées simples composées uniquement de $0$ et de $1$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Cube ABCDEFGH : base BDE et grande diagonale (AG)',
      caption: 'Dans le repère (A ; AB, AD, AE), AG(1 ; 1 ; 1) est normal au plan (BDE).',
      svgContent: `<svg viewBox="0 0 260 175" width="250" height="168" xmlns="http://www.w3.org/2000/svg">
        <rect x="45" y="55" width="105" height="95" fill="none" stroke="#1e293b" stroke-width="1.8"/>
        <polygon points="45,55 90,25 195,25 150,55" fill="none" stroke="#1e293b" stroke-width="1.8"/>
        <polygon points="150,55 195,25 195,120 150,150" fill="none" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="45" y1="150" x2="90" y2="120" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
        <line x1="90" y1="25" x2="90" y2="120" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
        <line x1="90" y1="120" x2="195" y2="120" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
        <polygon points="150,150 90,120 45,55" fill="#dcfce7" fill-opacity="0.55" stroke="#16a34a" stroke-width="2"/>
        <line x1="30" y1="168" x2="215" y2="10" stroke="#2563eb" stroke-width="2.3"/>
        <text x="34" y="152" font-size="12" font-weight="bold" fill="#1e293b">A</text>
        <text x="153" y="160" font-size="12" font-weight="bold" fill="#16a34a">B</text>
        <text x="80" y="116" font-size="12" font-weight="bold" fill="#16a34a">D</text>
        <text x="33" y="53" font-size="12" font-weight="bold" fill="#16a34a">E</text>
        <text x="200" y="29" font-size="12" font-weight="bold" fill="#2563eb">G</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l06_p05_q01',
      type: 'mcq',
      prompt: 'Dans le repère orthonormé $(A ; \\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ du cube $ABCDEFGH$, quelles sont les coordonnées du point $G$ (sommet opposé à $A$) ?',
      options: ['$(1 ; 0 ; 1)$', '$(0 ; 1 ; 1)$', '$(1 ; 1 ; 1)$', '$(1 ; 1 ; 0)$'],
      correctAnswerIndex: 2,
      explanation: '$\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AE}$, donc $G(1 ; 1 ; 1)$ (et $B(1;0;0)$, $D(0;1;0)$, $E(0;0;1)$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Résolution analytique',
    stepTheme: 'green',
    stepTitle: 'Prouver que $(AG)$ est orthogonale au plan $(BDE)$',
    paragraphText:
      'On calcule deux vecteurs directeurs du plan $(BDE)$ : $\\overrightarrow{BD}(-1; 1; 0)$ et $\\overrightarrow{ED}(0; 1; -1)$. Un vecteur $\\vec{n}(a; b; c)$ normal à $(BDE)$ vérifie $\\begin{cases} \\vec{n}\\cdot\\overrightarrow{BD} = -a + b = 0 \\\\ \\vec{n}\\cdot\\overrightarrow{ED} = b - c = 0 \\end{cases}$, soit $a = b = c$. En prenant $a = 1$, $\\vec{n}(1; 1; 1) = \\overrightarrow{AG}$ ! Comme $\\overrightarrow{AG}$ est un vecteur normal à $(BDE)$, la droite $(AG)$ est bien orthogonale au plan $(BDE)$ (et l’équation de $(BDE)$ est $x + y + z - 1 = 0$).',
    formula: {
      name: 'Preuve par produit scalaire ou vecteur normal',
      formula: '\\overrightarrow{AG} = \\vec{n}_{(BDE)}(1;1;1) \\implies (AG) \\perp (BDE)',
    },
    exercise: {
      id: 'tc_m_geo_l06_p05_q02',
      type: 'mcq',
      prompt: 'Dans ce repère $(A ; \\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$, quelle est l’équation cartésienne du plan $(BDE)$ ?',
      options: [
        '$x + y + z = 0$',
        '$x + y + z - 1 = 0$',
        '$x - y + z - 1 = 0$',
        '$x + y - z = 1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le vecteur normal est $\\vec{n}(1;1;1)$ et le point $B(1;0;0)$ vérifie $1 + 0 + 0 - 1 = 0$, donc $(BDE) : x + y + z - 1 = 0$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Approfondissement (q1)',
    stepTheme: 'green',
    stepTitle: 'Discuter l’intersection de deux plans dépendant d’un paramètre $a$',
    paragraphText:
      'Soient $a, b \\in \\mathbb{R}$, et les plans $(P) : x + y + z = 0$ et $(Q) : ax + y + z + b = 0$. Leurs vecteurs normaux sont $\\vec{n}(1; 1; 1)$ et $\\vec{n}’(a; 1; 1)$. Quand sont-ils colinéaires ? S’il existe $k \\in \\mathbb{R}^*$ tel que $(1; 1; 1) = k(a; 1; 1)$, les deux dernières composantes imposent $k = 1$, puis la première donne $a = 1$. Donc $(P)$ et $(Q)$ sont sécants si et seulement si **$a \\neq 1$** !',
    formula: {
      name: 'Condition de sécance paramétrique',
      formula: '\\vec{n}(1;1;1) \\nparallel \\vec{n}’(a;1;1) \\iff a \\neq 1',
    },
    exercise: {
      id: 'tc_m_geo_l06_p05_q03',
      type: 'mcq',
      prompt: 'Pour quelle(s) valeur(s) de $a$ et $b$ les plans $(P) : x + y + z = 0$ et $(Q) : ax + y + z + b = 0$ sont-ils sécants ?',
      options: [
        'Pour tout $a \\neq 1$ et tout $b \\in \\mathbb{R}$',
        'Pour $a = 1$ et $b \\neq 0$',
        'Pour tout $a \\in \\mathbb{R}$ et $b \\neq 1$',
        'Uniquement pour $a = -2$',
      ],
      correctAnswerIndex: 0,
      explanation: 'La sécance de deux plans ne dépend que de la non-colinéarité de leurs vecteurs normaux, donc uniquement de $a \\neq 1$ (quelle que soit la constante $b$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Approfondissement (q2)',
    stepTheme: 'green',
    stepTitle: 'Paramétrer $(D) = (P) \\cap (Q)$ et trouver $(D) \\perp (D’)$',
    paragraphText:
      'Pour $a \\neq 1$, posons $z = t$ dans le système $\\begin{cases} x + y + z = 0 \\\\ ax + y + z + b = 0 \\end{cases}$. En soustrayant les deux équations, $(a - 1)x + b = 0 \\implies x = -\\frac{b}{a-1}$ (car $a - 1 \\neq 0$ !), puis $y = -t + \\frac{b}{a-1}$. Un vecteur directeur de $(D)$ est donc $\\vec{u}(0; -1; 1)$. Comparons avec $(D’) : \\begin{cases} x = 1 \\\\ y = -3 + b\\lambda \\\\ z = -1 + \\lambda \\end{cases}$, dirigée par $\\vec{u}’(0; b; 1)$ : elles sont orthogonales ssi $\\vec{u}\\cdot\\vec{u}’ = -b + 1 = 0$, soit **$a \\neq 1$ et $b = 1$** !',
    formula: {
      name: 'Orthogonalité paramétrique (D) ⊥ (D’)',
      formula: '\\vec{u}(0;-1;1) \\cdot \\vec{u}’(0;b;1) = 0 \\iff 0 - b + 1 = 0 \\iff b = 1 \\quad (\\text{avec } a \\neq 1)',
    },
    exercise: {
      id: 'tc_m_geo_l06_p05_q04',
      type: 'mcq',
      prompt: 'Dans l’exercice d’approfondissement ($a \\neq 1$), quelles valeurs de $a$ et $b$ rendent les droites $(D) = (P) \\cap (Q)$ et $(D’)$ orthogonales ?',
      options: [
        '$a = 1$ et $b = 1$',
        '$a \\neq 1$ et $b = 1$',
        '$a \\neq 1$ et $b = -1$',
        '$a = 0$ et $b = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Il faut d’abord que $(D)$ existe ($a \\neq 1$), puis que $\\vec{u}(0;-1;1)\\cdot\\vec{u}’(0;b;1) = -b + 1 = 0 \\iff b = 1$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Récapitulatif 3D',
    stepTheme: 'blue',
    stepTitle: 'Synthèse des tests vectoriels en géométrie analytique de l’espace',
    paragraphText:
      'Presque tous les problèmes d’espace de Terminale C se résument à tester une **colinéarité** ou un **produit scalaire nul** entre vecteurs directeurs de droites et vecteurs normaux de plans.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Memento des conditions dans l’espace (repère orthonormé)',
      tableData: {
        headers: ['Configuration', 'Condition vectorielle', 'À retenir'],
        rows: [
          ['$(D) \\parallel (D’)$', '$\\vec{u}$ et $\\vec{v}$ colinéaires', 'Tester $A \\in (D’)$ pour confondues'],
          ['$(D) \\perp (D’)$', '$\\vec{u} \\cdot \\vec{v} = 0$', 'Pas forcément sécantes'],
          ['$(D) \\parallel (P)$', '$\\vec{u} \\cdot \\vec{n} = 0$', 'Tester $A \\in (P)$ pour $(D) \\subset (P)$'],
          ['$(D) \\perp (P)$', '$\\vec{u}$ et $\\vec{n}$ colinéaires', 'Même direction que la normale'],
          ['$(P) \\parallel (P’)$', '$\\vec{n}$ et $\\vec{n}’$ colinéaires', 'Équations proportionnelles sur $(x,y,z)$'],
          ['$(P) \\perp (P’)$', '$\\vec{n} \\cdot \\vec{n}’ = 0$', 'Intersection = droite $(\\Delta)$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l06_p05_q05',
      type: 'mcq',
      prompt: 'Dans l’espace muni d’un repère orthonormé, on considère un plan $(P)$ de vecteur normal $\\vec{n}(2; -1; 3)$ et un plan $(P’)$ de vecteur normal $\\vec{n}’(1; 5; 1)$. Quelle est leur position ?',
      options: [
        'Strictement parallèles',
        'Sécants et perpendiculaires',
        'Confondus',
        'Sécants mais non perpendiculaires',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\vec{n} \\cdot \\vec{n}’ = 2(1) + (-1)(5) + 3(1) = 2 - 5 + 3 = 0$, donc $(P)$ et $(P’)$ sont sécants et perpendiculaires.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Distance & Cube',
    stepTheme: 'green',
    stepTitle: 'Calculer une distance dans le cube grâce à l’équation du plan',
    paragraphText:
      'Dans le cube unité $ABCDEFGH$, l’équation de $(BDE)$ est $x + y + z - 1 = 0$. La distance du sommet $A(0; 0; 0)$ au plan $(BDE)$ vaut tout simplement $d(A; (BDE)) = \\frac{|0+0+0-1|}{\\sqrt{1^2+1^2+1^2}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$, et la distance de $G(1; 1; 1)$ vaut $\\frac{|1+1+1-1|}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$ (soit le tiers et les deux tiers de la grande diagonale $AG = \\sqrt{3}$) !',
    exercise: {
      id: 'tc_m_geo_l06_p05_q06',
      type: 'mcq',
      prompt: 'Dans le cube unité $ABCDEFGH$, sachant que $(BDE)$ a pour équation $x + y + z - 1 = 0$, quelle est la distance du point $G(1; 1; 1)$ au plan $(BDE)$ ?',
      options: ['$\\frac{1}{3}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{2\\sqrt{3}}{3}$', '$\\sqrt{3}$'],
      correctAnswerIndex: 2,
      explanation: '$d(G;(BDE)) = \\frac{|1 + 1 + 1 - 1|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Projeté orthogonal',
    stepTheme: 'orange',
    stepTitle: 'Trouver les coordonnées du projeté orthogonal $H$ de $A$ sur $(P)$',
    paragraphText:
      'Pour trouver le projeté orthogonal $H$ d’un point $A$ sur un plan $(P)$ de vecteur normal $\\vec{n}$, il suffit de tracer la droite $(D)$ passant par $A$ et de vecteur directeur $\\vec{n}$, puis de calculer l’intersection $(D) \\cap (P)$ en injectant les équations paramétriques de $(D)$ dans l’équation cartésienne de $(P)$ !',
    exercise: {
      id: 'tc_m_geo_l06_p05_q07',
      type: 'mcq',
      prompt: 'Comment obtient-on les coordonnées du projeté orthogonal $H$ d’un point $A$ sur le plan $(P) : ax + by + cz + d = 0$ ?',
      options: [
        'On prend l’intersection de $(P)$ avec la droite passant par $A$ de vecteur directeur $\\vec{n}(a; b; c)$',
        'On calcule $\\frac{a+b+c}{3}$',
        'On annule $d$ dans l’équation de $(P)$',
        'On prend la droite passant par $O$ de vecteur directeur $\\overrightarrow{OA}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Puisque $(AH) \\perp (P)$, la droite $(AH)$ passe par $A$ et est dirigée par le vecteur normal $\\vec{n}(a; b; c)$ : $H$ est l’unique point de $(AH) \\cap (P)$.',
    },
  },
];

export const MATHS_TLE_C_L06_GEOMETRIE_ANALYTIQUE_ESPACE: CurriculumChapter = {
  id: 'terminale_c_maths_geometrie_l06_geometrie_analytique_espace',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 6,
  title: 'Leçon 6 : Géométrie analytique de l’espace',
  summary:
    'Vecteur normal à un plan, équation cartésienne ax + by + cz + d = 0, distance d’un point à un plan, représentations paramétriques d’une droite, positions relatives (droites, droite/plan, deux plans) et orthogonalité dans l’espace.',
  officialVolumeHours: 10,
  contentVersion: 2,
  points: [
    {
      id: 'terminale_c_maths_geometrie_l06_geometrie_analytique_espace_p01',
      order: 1,
      title: 'Vecteur normal, équation cartésienne d’un plan et distance point–plan',
      summary:
        'Caractériser un plan par un point et un vecteur normal, établir ax + by + cz + d = 0 et calculer d(A ; P).',
      conceptExplanation:
        'Dans un repère orthonormé, tout plan $(P)$ admet une équation cartésienne $ax+by+cz+d=0$ avec $\\vec{n}(a;b;c) \\neq \\vec{0}$ vecteur normal. La distance d’un point $A(x_0;y_0;z_0)$ à $(P)$ vaut $d(A;P) = \\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.',
      keyRule: 'Attention au signe dans $\\overrightarrow{AB} = (x_B - x_A ; y_B - y_A ; z_B - z_A)$ et à la valeur absolue dans $d(A;P)$.',
      formulas: [
        { name: 'Plan', formula: 'ax + by + cz + d = 0 \\quad (\\vec{n}(a;b;c))' },
        { name: 'Distance', formula: 'd(A;P) = \\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}' },
      ],
      workedExample: {
        title: 'Distance de E(4 ; 2 ; −1) à (Q) : 3x − 4y + 6 = 0',
        statement: 'Calculer $d(E ; (Q))$.',
        methodSteps: [
          'Vecteur normal $\\vec{n}(3; -4; 0)$, norme $\\sqrt{3^2 + (-4)^2 + 0^2} = 5$.',
          'Numérateur : $|3(4) - 4(2) + 6| = |12 - 8 + 6| = 10$.',
        ],
        conclusion: '$d(E ; (Q)) = \\frac{10}{5} = 2$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l06_geometrie_analytique_espace_p02',
      order: 2,
      title: 'Représentations paramétriques d’une droite et positions de deux droites',
      summary:
        'Écrire une représentation paramétrique (A, u), distinguer droites parallèles/confondues, sécantes, non coplanaires et orthogonales.',
      conceptExplanation:
        'Une droite $(A,\\vec{u})$ s’écrit $x=x_0+ta, y=y_0+tb, z=z_0+tc$. Deux droites $(A,\\vec{u})$ et $(B,\\vec{v})$ sont parallèles ssi $\\vec{u}$ et $\\vec{v}$ sont colinéaires, orthogonales ssi $\\vec{u}\\cdot\\vec{v}=0$, et si $\\vec{u} \\nparallel \\vec{v}$ le système d’intersection (avec paramètres distincts) décide entre sécantes et non coplanaires.',
      keyRule: 'Toujours utiliser deux paramètres distincts ($\\lambda$ et $\\mu$) pour tester l’intersection de deux droites.',
      formulas: [
        { name: 'Droite (A, u)', formula: '\\begin{cases} x = x_0 + ta \\\\ y = y_0 + tb \\\\ z = z_0 + tc \\end{cases}' },
      ],
      workedExample: {
        title: 'Intersection de (D’) et (D’’)',
        statement: 'Montrer que $(D’): (2\\mu, 2-4\\mu, 2-2\\mu)$ et $(D’’): (1, 1-2v, -1+4v)$ sont sécantes.',
        methodSteps: [
          'Vecteurs directeurs $\\vec{u}’(2;-4;-2)$ et $\\vec{u}’’(0;-2;4)$ non colinéaires.',
          '$2\\mu = 1 \\implies \\mu = \\frac{1}{2}$, puis $2-2 = 1-2v \\implies v = \\frac{1}{2}$, compatible avec $z : 1 = 1$.',
        ],
        conclusion: 'Sécantes en $A(1 ; 0 ; 1)$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l06_geometrie_analytique_espace_p03',
      order: 3,
      title: 'Positions relatives droite–plan et plan–plan',
      summary:
        'Tester u·n = 0 pour droite/plan, colinéarité et orthogonalité des vecteurs normaux pour deux plans, et paramétrer l’intersection de deux plans.',
      conceptExplanation:
        'Droite $(A,\\vec{u})$ et plan $(P)$ de normale $\\vec{n}$ : $\\vec{u}\\cdot\\vec{n}=0 \\implies$ parallèles (incluse si $A\\in(P)$), sinon sécants (orthogonaux si $\\vec{u}\\parallel\\vec{n}$). Deux plans de normales $\\vec{n}, \\vec{n}’$ : parallèles ssi $\\vec{n}\\parallel\\vec{n}’$, sécants suivant une droite sinon (perpendiculaires ssi $\\vec{n}\\cdot\\vec{n}’=0$).',
      keyRule: 'Pour trouver $(P) \\cap (P’)$, poser une coordonnée égale à $\\lambda$ (ex. $z = \\lambda$) et résoudre le système $2 \\times 2$.',
      formulas: [
        { name: 'Droite // Plan', formula: '\\vec{u}\\cdot\\vec{n} = 0' },
        { name: 'Plans ⊥', formula: '\\vec{n}\\cdot\\vec{n}’ = 0' },
      ],
      workedExample: {
        title: 'Droite d’intersection de deux plans perpendiculaires (p.10)',
        statement: 'Paramétrer $(\\Delta) = (P) \\cap (P’)$ pour $2x+y+2z-6=0$ et $2x-2y-z+3=0$.',
        methodSteps: [
          '$\\vec{n}(2;1;2)$ et $\\vec{n}’(2;-2;-1)$ ne sont pas colinéaires et $\\vec{n}\\cdot\\vec{n}’ = 0$ ($(P)\\perp(P’)$).',
          'En posant $z = \\lambda$ : $y = 3 - \\lambda$ et $x = \\frac{3}{2} - \\frac{1}{2}\\lambda$.',
        ],
        conclusion: '$(\\Delta) : (\\frac{3}{2} - \\frac{1}{2}\\lambda ;\\; 3 - \\lambda ;\\; \\lambda)$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l06_geometrie_analytique_espace_p04',
      order: 4,
      title: 'Construire équations de plans (3 points, plans orthogonaux, plan contenant une droite)',
      summary:
        'Déterminer l’équation de (ABC), trouver un plan orthogonal à un plan donné passant par A ou contenant une droite (D).',
      conceptExplanation:
        'Pour obtenir un vecteur normal $\\vec{n}(a;b;c)$ orthogonal à deux vecteurs donnés $\\vec{u}$ et $\\vec{v}$, on résout $\\vec{n}\\cdot\\vec{u}=0$ et $\\vec{n}\\cdot\\vec{v}=0$ en fixant une composante non nulle, puis on détermine $d$ avec un point du plan.',
      keyRule: 'Tout plan contenant $(D)$ et orthogonal à $(P)$ admet un vecteur normal orthogonal à $\\vec{u}_D$ et à $\\vec{n}_P$.',
      formulas: [
        { name: 'Plan parallèle à P', formula: 'ax + by + cz + d’ = 0' },
      ],
      workedExample: {
        title: 'Plan (Π) contenant (D) et perpendiculaire à (P) (Ex. 2 p.13)',
        statement: 'Avec $\\vec{u}(1;1;1)$, $E(2;-5;0) \\in (D)$ et $\\vec{n}_P(1;-1;0)$, déterminer $(\\Pi)$.',
        methodSteps: [
          '$\\vec{n}’(a’;b’;c’)$ vérifie $a’+b’+c’=0$ et $a’-b’=0$, d’où $\\vec{n}’(1;1;-2)$.',
          'Comme $E(2;-5;0) \\in (\\Pi)$ : $2 - 5 + d = 0 \\implies d = 3$.',
        ],
        conclusion: '$(\\Pi) : x + y - 2z + 3 = 0$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l06_geometrie_analytique_espace_p05',
      order: 5,
      title: 'Situation complexe (sculpture BDE ⊥ AG) et problèmes paramétrés',
      summary:
        'Choisir un repère orthonormé dans un cube, prouver (AG) ⊥ (BDE), résoudre les discussions paramétriques (a, b) et calculer des distances ou projetés.',
      conceptExplanation:
        'Dans un cube $ABCDEFGH$, le repère orthonormé $(A ; \\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AE})$ rend immédiates toutes les équations de plans, distances et preuves d’orthogonalité. Pour les problèmes à paramètres $(a,b)$, on traite d’abord la condition de sécance avant d’écrire l’intersection.',
      keyRule: 'Diviser par $a - 1$ n’est licite qu’après avoir posé $a \\neq 1$.',
      formulas: [
        { name: 'Plan (BDE) dans le cube unité', formula: 'x + y + z - 1 = 0 \\quad (\\vec{n} = \\overrightarrow{AG}(1;1;1))' },
      ],
      workedExample: {
        title: 'Orthogonalité paramétrique (approfondissement p.13-14)',
        statement: 'Pour $(P): x+y+z=0$ et $(Q): ax+y+z+b=0$, trouver $(a, b)$ pour que $(D)=(P)\\cap(Q)$ existe et soit orthogonale à $(D’)$ de vecteur $\\vec{u}’(0;b;1)$.',
        methodSteps: [
          '$(P)$ et $(Q)$ sont sécants $\\iff \\vec{n}(1;1;1) \\nparallel \\vec{n}’(a;1;1) \\iff a \\neq 1$.',
          'En posant $z = t$, $\\vec{u}_D(0;-1;1)$, donc $\\vec{u}_D\\cdot\\vec{u}’ = -b + 1 = 0 \\iff b = 1$.',
        ],
        conclusion: '$a \\neq 1$ et $b = 1$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};

