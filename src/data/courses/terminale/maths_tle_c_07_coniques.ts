import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Orbites de satellites et définition unifiée des coniques',
    paragraphText:
      'En astronomie, la trajectoire d’un satellite ou d’une sonde autour d’un astre peut être circulaire, elliptique, parabolique ou hyperbolique. Toutes ces courbes appartiennent à une même famille : les **coniques**, définies géométriquement par un point fixe appelé **foyer $F$**, une droite fixe appelée **directrice $(\\mathcal{D})$** (ne passant pas par $F$) et un réel strictement positif appelé **excentricité $e$**.',
    formula: {
      name: 'Définition foyer–directrice',
      formula: 'M \\in (\\Gamma) \\iff \\frac{MF}{MH} = e \\qquad (H \\text{ projeté orthogonal de } M \\text{ sur } (\\mathcal{D}))',
    },
    konanTip: 'Une seule formule $\\frac{MF}{MH} = e$ engendre les trois coniques : tout dépend de la position de $e$ par rapport à $1$ !',
    exercise: {
      id: 'tc_m_geo_l07_p01_q01',
      type: 'mcq',
      prompt: 'Dans la définition d’une conique de foyer $F$ et de directrice $(\\mathcal{D})$, que représente $H$ dans le rapport $\\frac{MF}{MH} = e$ ?',
      options: [
        'Le milieu du segment $[MF]$',
        'Le projeté orthogonal de $M$ sur la directrice $(\\mathcal{D})$',
        'Le centre de symétrie de la conique',
        'Le symétrique de $F$ par rapport à $M$',
      ],
      correctAnswerIndex: 1,
      explanation: '$MH$ désigne la distance du point $M$ à la droite $(\\mathcal{D})$, c’est-à-dire la longueur du segment $[MH]$ où $H$ est le projeté orthogonal de $M$ sur $(\\mathcal{D})$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Classification par e',
    stepTheme: 'blue',
    stepTitle: 'Parabole ($e=1$), ellipse ($0<e<1$) et hyperbole ($e>1$)',
    paragraphText:
      'Soit $(\\Gamma)$ la conique de foyer $F$, de directrice $(\\mathcal{D})$ ($F \\notin (\\mathcal{D})$) et d’excentricité $e > 0$. La nature de $(\\Gamma)$ ne dépend que de la valeur de $e$ : si **$e = 1$**, $(\\Gamma)$ est une **parabole** ($MF = MH$) ; si **$0 < e < 1$**, $(\\Gamma)$ est une **ellipse** ; si **$e > 1$**, $(\\Gamma)$ est une **hyperbole**.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Foyer F, directrice (D), axe focal (Δ) et symétrie orthogonale',
      caption: 'La droite (Δ) passant par F et perpendiculaire à (D) est axe de symétrie de (Γ).',
      svgContent: `<svg viewBox="0 0 320 155" width="305" height="148" xmlns="http://www.w3.org/2000/svg">
        <line x1="75" y1="15" x2="75" y2="145" stroke="#dc2626" stroke-width="2"/>
        <text x="54" y="25" font-size="12" font-weight="bold" fill="#dc2626">(D)</text>
        <line x1="20" y1="80" x2="305" y2="80" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="285" y="73" font-size="12" font-weight="bold" fill="#64748b">(Δ)</text>
        <circle cx="75" cy="80" r="3" fill="#dc2626"/><text x="61" y="94" font-size="11" font-weight="bold" fill="#dc2626">K</text>
        <circle cx="145" cy="80" r="3.8" fill="#2563eb"/><text x="142" y="96" font-size="12" font-weight="bold" fill="#2563eb">F</text>
        <line x1="75" y1="35" x2="215" y2="35" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="3,3"/>
        <line x1="145" y1="80" x2="215" y2="35" stroke="#2563eb" stroke-width="1.8"/>
        <circle cx="75" cy="35" r="3" fill="#475569"/><text x="58" y="39" font-size="11" fill="#475569">H</text>
        <circle cx="215" cy="35" r="3.8" fill="#1e293b"/><text x="221" y="38" font-size="12" font-weight="bold" fill="#1e293b">M</text>
        <line x1="75" y1="125" x2="215" y2="125" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="3,3"/>
        <line x1="145" y1="80" x2="215" y2="125" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,2"/>
        <circle cx="75" cy="125" r="3" fill="#475569"/><text x="56" y="130" font-size="11" fill="#475569">H’</text>
        <circle cx="215" cy="125" r="3.8" fill="#7c3aed"/><text x="221" y="130" font-size="12" font-weight="bold" fill="#7c3aed">M’</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l07_p01_q02',
      type: 'mcq',
      prompt: 'Quelle est la nature de l’ensemble $(\\Gamma)$ des points $M$ du plan tels que $MF = 2\\,MH$ ($H$ projeté orthogonal de $M$ sur $(\\mathcal{D})$, $F \\notin (\\mathcal{D})$) ?',
      options: ['Une parabole', 'Une ellipse', 'Une hyperbole', 'Un cercle'],
      correctAnswerIndex: 2,
      explanation: '$\\frac{MF}{MH} = 2 = e$. Comme $e > 1$, la conique $(\\Gamma)$ est une hyperbole.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Axe focal',
    stepTheme: 'violet',
    stepTitle: 'Axe focal $(\\Delta)$ et symétrie orthogonale',
    paragraphText:
      'La droite $(\\Delta)$ passant par $F$ et perpendiculaire à la directrice $(\\mathcal{D})$ est un **axe de symétrie** de $(\\Gamma)$ : on l’appelle l’**axe focal** de la conique. En effet, si $M \\in (\\Gamma)$ et $M’ = S_{(\\Delta)}(M)$ (et $H’ = S_{(\\Delta)}(H)$), la symétrie orthogonale conserve les distances et l’orthogonalité, donc $M’F = MF$ et $M’H’ = MH$, d’où $\\frac{M’F}{M’H’} = e$ et $M’ \\in (\\Gamma)$.',
    exercise: {
      id: 'tc_m_geo_l07_p01_q03',
      type: 'mcq',
      prompt: 'On donne $F(2 ; 3)$ et la directrice $(D)$ d’équation $x = -4$. Quelle est une équation de l’axe focal $(\\Delta)$ ?',
      options: ['$x = 2$', '$y = 3$', '$x = -4$', '$y = -3$'],
      correctAnswerIndex: 1,
      explanation: '$(D) : x = -4$ est verticale, donc toute perpendiculaire à $(D)$ est horizontale ($y = \\text{cte}$). Comme $(\\Delta)$ passe par $F(2; 3)$, son équation est $y = 3$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Sommets sur (Δ)',
    stepTheme: 'violet',
    stepTitle: 'Sommets sur l’axe focal via les barycentres de $F$ et $K$',
    paragraphText:
      'Soit $K$ le projeté orthogonal de $F$ sur $(\\mathcal{D})$. Les points d’intersection de $(\\Gamma)$ avec l’axe focal $(\\Delta)$ s’appellent les **sommets** situés sur l’axe focal. Si **$e = 1$**, $(\\Gamma)$ coupe $(\\Delta)$ en un **unique sommet $S$**, milieu de $[FK]$. Si **$e \\neq 1$**, $(\\Gamma)$ coupe $(\\Delta)$ en **deux sommets $A$ et $A’$** donnés par $A = \\operatorname{bar}\\{(F, 1), (K, e)\\}$ et $A’ = \\operatorname{bar}\\{(F, 1), (K, -e)\\}$.',
    formula: {
      name: 'Sommets sur l’axe focal',
      formula: 'e = 1 \\implies S \\text{ milieu de } [FK] \\qquad ; \\qquad e \\neq 1 \\implies A = \\operatorname{bar}\\{(F,1),(K,e)\\},\\; A’ = \\operatorname{bar}\\{(F,1),(K,-e)\\}',
    },
    exercise: {
      id: 'tc_m_geo_l07_p01_q04',
      type: 'mcq',
      prompt: 'Si une conique a pour foyer $F$, directrice $(D)$ et excentricité $e = \\frac{1}{3}$ (avec $K$ projeté orthogonal de $F$ sur $(D)$), quels systèmes pondérés donnent les sommets $A$ et $A’$ sur l’axe focal ?',
      options: [
        '$A = \\operatorname{bar}\\{(F;3),(K;1)\\}$ et $A’ = \\operatorname{bar}\\{(F;3),(K;-1)\\}$',
        '$A = \\operatorname{bar}\\{(F;1),(K;3)\\}$ et $A’ = \\operatorname{bar}\\{(F;1),(K;-3)\\}$',
        '$A$ milieu de $[FK]$',
        '$A = \\operatorname{bar}\\{(F;1),(K;-\\frac{1}{3})\\}$ uniquement',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\operatorname{bar}\\{(F,1),(K,\\frac{1}{3})\\} = \\operatorname{bar}\\{(F,3),(K,1)\\}$ par homogénéité (multiplication par $3$), et de même $A’ = \\operatorname{bar}\\{(F,3),(K,-1)\\}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation',
    stepTheme: 'green',
    stepTitle: 'Calculer les coordonnées des sommets $A$ et $A’$ (p.2-3)',
    paragraphText:
      'Reprenons $F(2 ; 3)$, $(D) : x = -4$ et $e = \\frac{1}{3}$. Le projeté orthogonal de $F$ sur $(D)$ a même ordonnée que $F$ et pour abscisse $-4$, soit $K(-4 ; 3)$. On applique les coordonnées du barycentre : pour $A = \\operatorname{bar}\\{(F,3),(K,1)\\}$, $x_A = \\frac{3(2) + 1(-4)}{4} = \\frac{2}{4} = \\frac{1}{2}$ et $y_A = 3$. Pour $A’ = \\operatorname{bar}\\{(F,3),(K,-1)\\}$, $x_{A’} = \\frac{3(2) - 1(-4)}{2} = \\frac{10}{2} = 5$ et $y_{A’} = 3$. Donc $A(\\frac{1}{2} ; 3)$ et $A’(5 ; 3)$.',
    formula: {
      name: 'Vérification des rapports sur (Δ)',
      formula: 'AF = \\frac{3}{2},\\; AK = \\frac{9}{2} \\implies \\frac{AF}{AK} = \\frac{1}{3} \\qquad ; \\qquad A’F = 3,\\; A’K = 9 \\implies \\frac{A’F}{A’K} = \\frac{1}{3}',
    },
    exercise: {
      id: 'tc_m_geo_l07_p01_q05',
      type: 'mcq',
      prompt: 'Avec $F(2 ; 3)$, $(D) : x = -4$ et $e = \\frac{1}{3}$, quelles sont les coordonnées des sommets $A$ et $A’$ sur l’axe focal ?',
      options: [
        '$A(-1 ; 3)$ et $A’(5 ; 3)$',
        '$A(\\frac{1}{2} ; 3)$ et $A’(5 ; 3)$',
        '$A(-4 ; 3)$ et $A’(2 ; 3)$',
        '$A(\\frac{1}{2} ; 0)$ et $A’(5 ; 0)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$K(-4; 3)$. $x_A = \\frac{3\\times 2 + (-4)}{4} = \\frac{1}{2}$ et $x_{A’} = \\frac{3\\times 2 - (-4)}{2} = 5$, avec $y = 3$ pour les deux points sur $(\\Delta)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'definition',
    stepBadge: 'Régionnement',
    stepTheme: 'blue',
    stepTitle: 'Points intérieurs et points extérieurs à une conique',
    paragraphText:
      'Pour tout point $M$ du plan (dont le projeté orthogonal sur $(\\mathcal{D})$ est $H$), la conique $(\\Gamma)$ partage le plan en deux régions : $M$ est **intérieur** à $(\\Gamma)$ si **$MF < e\\,MH$**, et $M$ est **extérieur** à $(\\Gamma)$ si **$MF > e\\,MH$**. En particulier, le foyer $F$ vérifie $0 < e\\,FK$ (toujours **intérieur**), tandis que tout point $M \\in (\\mathcal{D})$ vérifie $MH = 0 < MF$ (toujours **extérieur**).',
    formula: {
      name: 'Régionnement par rapport à (Γ)',
      formula: 'M \\text{ intérieur} \\iff MF < e\\,MH \\qquad ; \\qquad M \\text{ extérieur} \\iff MF > e\\,MH',
    },
    exercise: {
      id: 'tc_m_geo_l07_p01_q06',
      type: 'mcq',
      prompt: 'Une parabole ($e = 1$) a pour foyer $F(1 ; 0)$ et pour directrice $(D) : x = -1$. Le point $P(2 ; 2)$ est-il intérieur, sur la parabole, ou extérieur ?',
      options: [
        'Intérieur à la parabole',
        'Sur la parabole',
        'Extérieur à la parabole',
        'On ne peut pas savoir sans l’équation réduite',
      ],
      correctAnswerIndex: 0,
      explanation: '$PF = \\sqrt{(2-1)^2 + (2-0)^2} = \\sqrt{5} \\approx 2{,}24$, alors que $PH = |2 - (-1)| = 3$. Comme $PF < e\\,PH$ ($\\sqrt{5} < 3$), $P$ est intérieur à la parabole.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance',
    stepTheme: 'orange',
    stepTitle: 'Bien distinguer les coefficients de $A$ et $A’$ selon la valeur de $e$',
    paragraphText:
      'Pour $e > 1$ (hyperbole), les deux coefficients de $A’ = \\operatorname{bar}\\{(F, 1), (K, -e)\\}$ sont $1$ et $-e$ : la somme vaut $1 - e < 0$, ce qui reste bien non nul tant que $e \\neq 1$ ! En revanche si $e = 1$, $1 - e = 0$ donc $A’$ n’existe pas : c’est exactement pour cela qu’une parabole n’a qu’un seul sommet $S$.',
    exercise: {
      id: 'tc_m_geo_l07_p01_q07',
      type: 'mcq',
      prompt: 'Pourquoi la parabole ($e = 1$) ne possède-t-elle qu’un seul sommet sur l’axe focal au lieu de deux ?',
      options: [
        'Parce que pour $e = 1$, le système $\\{(F; 1),\\; (K; -e)\\}$ a une somme nulle ($1 - 1 = 0$)',
        'Parce qu’une parabole n’a pas de directrice',
        'Parce que le foyer $F$ appartient à $(D)$',
        'Parce que le sommet est toujours l’origine',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le second sommet $A’ = \\operatorname{bar}\\{(F,1),(K,-e)\\}$ n’existe que si $1 - e \\neq 0$ ; pour $e = 1$, seul $S = \\operatorname{bar}\\{(F,1),(K,1)\\}$ (milieu de $[FK]$) existe.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Équation réduite',
    stepTheme: 'blue',
    stepTitle: 'Équation réduite d’une parabole : $y^2 = 2px$ et $x^2 = 2py$',
    paragraphText:
      'Soit $(\\mathcal{P})$ une parabole de foyer $F$, de directrice $(\\mathcal{D})$ et de sommet $S$ (milieu de $[FK]$). Le réel strictement positif $p = KF$ s’appelle le **paramètre** de la parabole. Dans le repère orthonormé $(S, \\vec{i}, \\vec{j})$ avec $\\vec{i} = \\frac{1}{SF}\\overrightarrow{SF}$, l’équation réduite de $(\\mathcal{P})$ est **$y^2 = 2px$** : l’axe focal est $(S, \\vec{i})$, le foyer est $F(\\frac{p}{2}; 0)$ et la directrice est $(\\mathcal{D}) : x = -\\frac{p}{2}$. En échangeant $(S, \\vec{i})$ et $(S, \\vec{j})$, on obtient **$x^2 = 2py$** avec foyer $F(0; \\frac{p}{2})$ et directrice $y = -\\frac{p}{2}$.',
    formula: {
      name: 'Équations réduites canoniques (p > 0)',
      formula: 'y^2 = 2px \\;\\left(F\\left(\\frac{p}{2};0\\right),\\; x=-\\frac{p}{2}\\right) \\qquad ; \\qquad x^2 = 2py \\;\\left(F\\left(0;\\frac{p}{2}\\right),\\; y=-\\frac{p}{2}\\right)',
    },
    exercise: {
      id: 'tc_m_geo_l07_p02_q01',
      type: 'mcq',
      prompt: 'Que représente géométriquement le paramètre $p > 0$ d’une parabole de foyer $F$ et de directrice $(\\mathcal{D})$ ?',
      options: [
        'La distance $SF$ entre le sommet et le foyer',
        'La distance $KF$ entre le foyer $F$ et la directrice $(\\mathcal{D})$ ($p = 2SF$)',
        'Le carré de l’ordonnée au foyer',
        'L’excentricité de la parabole',
      ],
      correctAnswerIndex: 1,
      explanation: '$S$ étant le milieu de $[FK]$, $SF = SK = \\frac{p}{2}$ et la distance du foyer à la directrice vaut $KF = p$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Signe de a',
    stepTheme: 'violet',
    stepTitle: 'Cas général centré en $O$ : $y^2 = 2ax$ et $x^2 = 2ay$ ($a \\neq 0$)',
    paragraphText:
      'Dans un repère orthonormé fixé $(O, \\vec{i}, \\vec{j})$, une courbe d’équation $y^2 = 2ax$ ($a \\neq 0$) est une parabole de sommet $O$, d’axe focal $(O, \\vec{i})$, de paramètre **$p = |a|$**, de foyer $F(\\frac{a}{2}; 0)$ et de directrice $x = -\\frac{a}{2}$ (tournée vers $x > 0$ si $a > 0$, vers $x < 0$ si $a < 0$). Symétriquement, $x^2 = 2ay$ donne une parabole d’axe focal $(O, \\vec{j})$, de foyer $F(0; \\frac{a}{2})$ et de directrice $y = -\\frac{a}{2}$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau récapitulatif des éléments caractéristiques d’une parabole de sommet O',
      tableData: {
        headers: ['Élément', 'Équation $y^2 = 2ax$', 'Équation $x^2 = 2ay$'],
        rows: [
          ['Paramètre $p$', '$|a|$', '$|a|$'],
          ['Sommet', '$O(0;0)$', '$O(0;0)$'],
          ['Axe focal', '$(O, \\vec{i})$ ($y=0$)', '$(O, \\vec{j})$ ($x=0$)'],
          ['Foyer $F$', '$F\\left(\\frac{a}{2} ; 0\\right)$', '$F\\left(0 ; \\frac{a}{2}\\right)$'],
          ['Directrice $(\\mathcal{D})$', '$x = -\\frac{a}{2}$', '$y = -\\frac{a}{2}$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p02_q02',
      type: 'mcq',
      prompt: 'Pour la parabole $(\\mathcal{P})$ d’équation $y^2 + 4x = 0$, quels sont le paramètre, le foyer $F$ et la directrice $(\\mathcal{D})$ ?',
      options: [
        'Paramètre $2$, foyer $F(-1 ; 0)$, directrice $x = 1$',
        'Paramètre $4$, foyer $F(-2 ; 0)$, directrice $x = 2$',
        'Paramètre $2$, foyer $F(1 ; 0)$, directrice $x = -1$',
        'Paramètre $1$, foyer $F(0 ; -1)$, directrice $y = 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$y^2 = -4x = 2(-2)x$, donc $a = -2$. Paramètre $|a| = 2$, foyer $F(\\frac{-2}{2}; 0) = F(-1; 0)$ et directrice $x = -\\frac{-2}{2} = 1$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Courbe représentative',
    stepTheme: 'blue',
    stepTitle: 'Visualiser une parabole $x^2 = 2ay$ avec son foyer et sa directrice',
    paragraphText:
      'Considérons la parabole $(\\mathcal{P})$ d’équation $x^2 = 4y$ (soit $y = \\frac{1}{4}x^2$). En identifiant $2a = 4$, on trouve $a = 2 > 0$. Son sommet est $O(0; 0)$, son axe focal est $(Oy)$, son foyer est $F(0 ; 1)$ et sa directrice est la droite horizontale $(\\mathcal{D}) : y = -1$.',
    visualSchema: {
      type: 'function_plot',
      title: 'Parabole x² = 4y (a = 2), foyer F(0 ; 1) et directrice y = −1',
      caption: 'Tout point M sur la parabole est à égale distance de F(0 ; 1) et de la droite y = −1.',
      plot: {
        xMin: -4,
        xMax: 4,
        yMin: -2,
        yMax: 4.5,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'y = x²/4',
            color: 'blue',
            pieces: [{ expr: 'x^2/4', from: -4, to: 4 }],
          },
        ],
        points: [
          { x: 0, y: 0, label: 'S(0;0)', filled: true, color: 'slate' },
          { x: 0, y: 1, label: 'F(0;1)', filled: true, color: 'violet' },
        ],
        horizontalLines: [{ y: -1, label: '(D): y = -1', color: 'orange' }],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p02_q03',
      type: 'mcq',
      prompt: 'La parabole d’équation $2y^2 + 3x = 0$ (Exercice 1 p.10) admet pour foyer et axe focal :',
      options: [
        'Foyer $F(-\\frac{3}{8} ; 0)$ et axe focal $(O, \\vec{i})$',
        'Foyer $F(-\\frac{3}{4} ; 0)$ et axe focal $(O, \\vec{i})$',
        'Foyer $F(0 ; -\\frac{3}{8})$ et axe focal $(O, \\vec{j})$',
        'Foyer $F(\\frac{3}{8} ; 0)$ et axe focal $(O, \\vec{i})$',
      ],
      correctAnswerIndex: 0,
      explanation: '$2y^2 + 3x = 0 \\iff y^2 = -\\frac{3}{2}x = 2(-\\frac{3}{4})x$, donc $a = -\\frac{3}{4}$. Le sommet est $O$, l’axe focal est $(O,\\vec{i})$ et le foyer est $F(\\frac{a}{2};0) = F(-\\frac{3}{8}; 0)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Parabole translatée',
    stepTheme: 'green',
    stepTitle: 'Déterminer le sommet et le foyer d’une parabole translatée (Ex. 1.2)',
    paragraphText:
      'Soit la parabole $(\\mathcal{P}) : x^2 - 2x = -3y - 1$. On complète le carré en $x$ : $(x - 1)^2 - 1 = -3y - 1 \\iff (x - 1)^2 = -3y$. En posant le changement de repère $\\begin{cases} X = x - 1 \\\\ Y = y \\end{cases}$ centré au sommet $S(1 ; 0)$, l’équation devient $X^2 = -3Y = 2(-\\frac{3}{2})Y$ ($a = -\\frac{3}{2}$). L’axe focal est $(S, \\vec{j})$. Dans $(S, \\vec{i}, \\vec{j})$, $F(0 ; \\frac{a}{2}) = (0 ; -\\frac{3}{4})$, donc dans $(O, \\vec{i}, \\vec{j})$ : $x_F = 1 + 0 = 1$ et $y_F = -\\frac{3}{4}$, soit $F(1 ; -\\frac{3}{4})$.',
    formula: {
      name: 'Formules de translation du repère',
      formula: 'X = x - x_S, \\; Y = y - y_S \\iff x = x_S + X, \\; y = y_S + Y',
    },
    exercise: {
      id: 'tc_m_geo_l07_p02_q04',
      type: 'mcq',
      prompt: 'Quels sont le sommet $S$ et le foyer $F$ de la parabole d’équation $x^2 - 2x = -3y - 1$ ?',
      options: [
        '$S(1 ; 0)$ et $F(1 ; -\\frac{3}{4})$',
        '$S(-1 ; 0)$ et $F(-1 ; -\\frac{3}{4})$',
        '$S(1 ; 0)$ et $F(1 ; -\\frac{3}{2})$',
        '$S(1 ; 1)$ et $F(1 ; \\frac{1}{4})$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(x - 1)^2 = -3y$ donne $S(1 ; 0)$ et $2a = -3 \\implies a = -\\frac{3}{2}$, d’où dans $(S, \\vec{i}, \\vec{j})$ : $F(0 ; -\\frac{3}{4})$, et dans $(O,\\vec{i},\\vec{j})$ : $F(1 ; -\\frac{3}{4})$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice 3 (1/2)',
    stepTheme: 'green',
    stepTitle: 'Trouver l’équation d’une parabole depuis foyer et directrice verticale',
    paragraphText:
      'On cherche l’équation de la parabole de foyer $F(3 ; 2)$ et de directrice $(D) : x = 1$. Le projeté orthogonal de $F$ sur $(D)$ est $K(1 ; 2)$, d’où $KF = 3 - 1 = 2 = p$. Le sommet $S$, milieu de $[FK]$, a pour coordonnées $S(2 ; 2)$. Dans $(S, \\vec{i}, \\vec{j})$ (l’axe focal passant par $K(1;2) \\to F(3;2)$ est parallèle à $(O,\\vec{i})$ et dirigé vers les $x$ croissants), $Y^2 = 2pX = 4X$. Comme $X = x - 2$ et $Y = y - 2$, l’équation dans $(O, \\vec{i}, \\vec{j})$ est **$(y - 2)^2 = 4(x - 2)$**.',
    exercise: {
      id: 'tc_m_geo_l07_p02_q05',
      type: 'mcq',
      prompt: 'Quelle est l’équation réduite dans $(O, \\vec{i}, \\vec{j})$ de la parabole de foyer $F(3 ; 2)$ et de directrice $(D) : x = 1$ ?',
      options: [
        '$(x - 2)^2 = 4(y - 2)$',
        '$(y - 2)^2 = 4(x - 2)$',
        '$(y - 2)^2 = -4(x - 2)$',
        '$(y - 2)^2 = 2(x - 2)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$K(1;2) \\implies S(2;2)$, $\\overrightarrow{KF} = (2;0)$ orienté positivement sur $(Ox)$ avec $p = 2$, d’où $Y^2 = 2pX = 4X \\iff (y - 2)^2 = 4(x - 2)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Exercice 3 (2/2)',
    stepTheme: 'green',
    stepTitle: 'Parabole depuis foyer $F(1 ; 4)$ et directrice horizontale $y = 2$',
    paragraphText:
      'Si la directrice est horizontale $(D) : y = 2$, le projeté orthogonal de $F(1 ; 4)$ sur $(D)$ est $K(1 ; 2)$, avec $KF = 4 - 2 = 2 = p$. Le sommet est le milieu $S(1 ; 3)$. Comme $\\overrightarrow{KF}(0; 2)$ est orienté vers les $y$ croissants, l’équation dans $(S, \\vec{i}, \\vec{j})$ est $X^2 = 2pY = 4Y$, soit dans $(O, \\vec{i}, \\vec{j})$ : **$(x - 1)^2 = 4(y - 3)$**.',
    exercise: {
      id: 'tc_m_geo_l07_p02_q06',
      type: 'mcq',
      prompt: 'Quelle est l’équation de la parabole de foyer $F(1 ; 4)$ et de directrice $(D) : y = 2$ ?',
      options: [
        '$(y - 3)^2 = 4(x - 1)$',
        '$(x - 1)^2 = 4(y - 3)$',
        '$(x - 1)^2 = -4(y - 3)$',
        '$(x - 1)^2 = 2(y - 4)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$K(1;2)$, sommet $S(1;3)$, $p = KF = 2$ et $y_F > y_K$ : $X^2 = 4Y \\iff (x - 1)^2 = 4(y - 3)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Signe du paramètre a',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $2a$ et $a$ lors de l’identification',
    paragraphText:
      'Dans l’équation canonique $y^2 = 2ax$ (ou $x^2 = 2ay$), le coefficient devant la variable linéaire est **$2a$**, pas $a$ ! Si l’équation est $y^2 = -3x$, alors $2a = -3 \\implies a = -\\frac{3}{2}$, et le foyer est en $\\frac{a}{2} = -\\frac{3}{4}$ (c’est-à-dire le quart du coefficient devant $x$ !).',
    keyRule: 'Toujours diviser le coefficient du terme du 1er degré par $2$ pour trouver $a$, puis encore par $2$ (soit par $4$ au total) pour trouver l’abscisse/ordonnée $\\frac{a}{2}$ du foyer !',
    exercise: {
      id: 'tc_m_geo_l07_p02_q07',
      type: 'mcq',
      prompt: 'Pour la parabole d’équation $x^2 = -8y$, quelles sont les coordonnées du foyer $F$ ?',
      options: ['$F(0 ; -8)$', '$F(0 ; -4)$', '$F(0 ; -2)$', '$F(-2 ; 0)$'],
      correctAnswerIndex: 2,
      explanation: '$2a = -8 \\implies a = -4 \\implies \\frac{a}{2} = -2$. Comme le carré porte sur $x$, l’axe focal est $(Oy)$, donc $F(0 ; -2)$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Conique à centre',
    stepTheme: 'violet',
    stepTitle: 'Équation réduite générale d’une conique à centre ($e \\neq 1$)',
    paragraphText:
      'Soit $(\\Gamma)$ une conique de foyer $F$, directrice $(\\mathcal{D})$ et excentricité $e \\neq 1$, de sommets $A, A’$ sur l’axe focal. Dans le repère orthonormé $(O, \\vec{i}, \\vec{j})$ où $O$ est le milieu de $[AA’]$ (appelé **centre de la conique**) et $\\vec{i} = \\frac{1}{OA}\\overrightarrow{OA}$, en posant $a = OA > 0$ et $c = OF > 0$, son équation réduite est $\\frac{x^2}{a^2} + \\frac{y^2}{a^2 - c^2} = 1$, avec $e = \\frac{c}{a}$ et $(\\mathcal{D}) : x = \\frac{a^2}{c}$.',
    formula: {
      name: 'Équation réduite unifiée (e ≠ 1)',
      formula: '\\frac{x^2}{a^2} + \\frac{y^2}{a^2 - c^2} = 1 \\qquad \\left(F(c;0),\\; (\\mathcal{D}): x = \\frac{a^2}{c},\\; e = \\frac{c}{a}\\right)',
    },
    exercise: {
      id: 'tc_m_geo_l07_p03_q01',
      type: 'mcq',
      prompt: 'Pour une conique à centre ($e \\neq 1$) d’axe focal $(O,\\vec{i})$, par symétrie par rapport au centre $O$, quels sont le second foyer $F’$ et la seconde directrice $(\\mathcal{D}’)$ ?',
      options: [
        '$F’(-c ; 0)$ et $(\\mathcal{D}’) : x = -\\frac{a^2}{c}$ (avec $FF’ = 2c$)',
        '$F’(0 ; -c)$ et $(\\mathcal{D}’) : y = -\\frac{a^2}{c}$',
        '$F’(-a ; 0)$ et $(\\mathcal{D}’) : x = -\\frac{c^2}{a}$',
        'Une conique à centre n’a qu’un seul foyer',
      ],
      correctAnswerIndex: 0,
      explanation: '$O$ et la médiatrice de $[AA’]$ étant éléments de symétrie, les symétriques de $F(c;0)$ et $(\\mathcal{D}): x = \\frac{a^2}{c}$ par rapport à $O$ sont $F’(-c;0)$ et $(\\mathcal{D}’): x = -\\frac{a^2}{c}$. $FF’ = 2c$ est la distance focale.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'L’ellipse',
    stepTheme: 'blue',
    stepTitle: 'Équation réduite de l’ellipse : $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$',
    paragraphText:
      'Lorsque $0 < e < 1$, on a $c < a$ ($a^2 - c^2 > 0$). On pose $b^2 = a^2 - c^2$ ($b > 0$), ce qui donne l’équation de l’ellipse **$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$** ($a > b$, axe focal $(AA’)$ horizontal). Si au contraire $a < b$ dans $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, l’axe focal devient l’axe vertical $(BB’)$ avec $c = \\sqrt{b^2 - a^2}$ et $e = \\frac{c}{b}$. Enfin, lorsque $a = b$, l’ellipse est simplement le cercle $\\mathcal{C}(O ; a)$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau récapitulatif des éléments caractéristiques d’une ellipse de centre O',
      tableData: {
        headers: ['Élément', 'Cas $a > b$ (axe focal $Ox$)', 'Cas $a < b$ (axe focal $Oy$)'],
        rows: [
          ['Demi-distance focale $c$', '$c = \\sqrt{a^2 - b^2}$', '$c = \\sqrt{b^2 - a^2}$'],
          ['Excentricité $e$', '$e = \\frac{c}{a} < 1$', '$e = \\frac{c}{b} < 1$'],
          ['Sommets', '$A(a;0),\\; A’(-a;0),\\; B(0;b),\\; B’(0;-b)$', '$A(a;0),\\; A’(-a;0),\\; B(0;b),\\; B’(0;-b)$'],
          ['Grand axe / Petit axe', 'Grand $(AA’)$ / Petit $(BB’)$', 'Grand $(BB’)$ / Petit $(AA’)$'],
          ['Foyers', '$F(c;0)$ et $F’(-c;0)$', '$F(0;c)$ et $F’(0;-c)$'],
          ['Directrices', '$x = \\frac{a^2}{c}$ et $x = -\\frac{a^2}{c}$', '$y = \\frac{b^2}{c}$ et $y = -\\frac{b^2}{c}$'],
          ['Cercles remarquables', 'Principal $\\mathcal{C}(O;a)$, Secondaire $\\mathcal{C}(O;b)$', 'Principal $\\mathcal{C}(O;b)$, Secondaire $\\mathcal{C}(O;a)$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p03_q02',
      type: 'mcq',
      prompt: 'Pour l’ellipse d’équation $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, quels sont $c$, l’excentricité $e$ et les directrices ?',
      options: [
        '$c = 4$, $e = \\frac{4}{5}$, directrices $x = \\pm \\frac{25}{4}$',
        '$c = \\sqrt{34}$, $e = \\frac{\\sqrt{34}}{5}$, directrices $x = \\pm \\frac{25}{\\sqrt{34}}$',
        '$c = 4$, $e = \\frac{4}{3}$, directrices $y = \\pm \\frac{9}{4}$',
        '$c = 16$, $e = \\frac{16}{25}$, directrices $x = \\pm \\frac{25}{16}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$a = 5$, $b = 3$ ($a > b$), donc $c = \\sqrt{25 - 9} = 4$, $e = \\frac{c}{a} = \\frac{4}{5}$, foyers $(\\pm 4; 0)$ et directrices $x = \\pm \\frac{a^2}{c} = \\pm \\frac{25}{4}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Axe focal vertical',
    stepTheme: 'blue',
    stepTitle: 'Cas $a < b$ : l’axe focal est $(O, \\vec{j})$ (Exercice 2.1 p.11)',
    paragraphText:
      'Considérons l’ellipse $(\\Gamma) : \\frac{x^2}{9} + \\frac{y^2}{16} = 1$. Ici $a = 3$ et $b = 4$, donc **$a < b$** ! Le grand axe et l’axe focal sont donc portés par l’axe des ordonnées $(O, \\vec{j})$. On calcule $c = \\sqrt{b^2 - a^2} = \\sqrt{16 - 9} = \\sqrt{7}$, d’où les foyers **$F(0 ; \\sqrt{7})$ et $F’(0 ; -\\sqrt{7})$**, l’excentricité $e = \\frac{\\sqrt{7}}{4}$ et les directrices $y = \\pm \\frac{16}{\\sqrt{7}}$.',
    exercise: {
      id: 'tc_m_geo_l07_p03_q03',
      type: 'mcq',
      prompt: 'Pour l’ellipse d’équation $\\frac{x^2}{9} + \\frac{y^2}{16} = 1$, quels sont l’axe focal et les coordonnées des foyers ?',
      options: [
        'Axe focal $(O, \\vec{i})$, foyers $(\\pm\\sqrt{7} ; 0)$',
        'Axe focal $(O, \\vec{j})$, foyers $F(0 ; \\sqrt{7})$ et $F’(0 ; -\\sqrt{7})$',
        'Axe focal $(O, \\vec{j})$, foyers $F(0 ; 5)$ et $F’(0 ; -5)$',
        'Axe focal $(O, \\vec{i})$, foyers $(\\pm 5 ; 0)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $b = 4 > a = 3$, le grand axe est vertical $(O, \\vec{j})$, $c = \\sqrt{16 - 9} = \\sqrt{7}$ et les foyers sont sur $(Oy)$ : $(0 ; \\pm\\sqrt{7})$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Exercice 4.1 (corrigé)',
    stepTheme: 'green',
    stepTitle: 'Équation d’une ellipse depuis $F(1; 0)$, $(D) : x = 10$ et $e = \\frac{4}{5}$',
    paragraphText:
      'Comme $e = \\frac{4}{5} < 1$, $(\\Gamma)$ est une ellipse d’axe focal horizontal $(O, \\vec{i})$ et $K(10 ; 0)$. On trouve les deux sommets : $A = \\operatorname{bar}\\{(F,5),(K,4)\\} \\implies A(5 ; 0)$ et $A’ = \\operatorname{bar}\\{(F,5),(K,-4)\\} \\implies A’(-35 ; 0)$. Attention au calcul de la longueur du grand axe : $AA’ = |5 - (-35)| = 40 = 2a$, donc **$a = 20$** ! Le centre est le milieu $S(-15 ; 0)$, et $c = ae = 20 \\times \\frac{4}{5} = 16$ (on vérifie $SF = 1 - (-15) = 16$). Alors $b^2 = a^2 - c^2 = 400 - 256 = 144$. Dans $(O, \\vec{i}, \\vec{j})$, l’équation est **$\\frac{(x + 15)^2}{400} + \\frac{y^2}{144} = 1$**.',
    formula: {
      name: 'Vérification directe avec F(1;0) et (D): x = 10',
      formula: 'x_S + \\frac{a^2}{c} = -15 + \\frac{400}{16} = -15 + 25 = 10 \\qquad (\\text{directrice } (D) \\text{ retrouvée !})',
    },
    exercise: {
      id: 'tc_m_geo_l07_p03_q04',
      type: 'mcq',
      prompt: 'Dans l’Exercice 4.1 ($F(1 ; 0)$, $(D) : x = 10$, $e = \\frac{4}{5}$), sachant que les sommets sont $A(5 ; 0)$ et $A’(-35 ; 0)$, quelles sont les valeurs exactes de $a$, $c$ et $b^2$ et l’équation de l’ellipse ?',
      options: [
        '$a = 20$, $c = 16$, $b^2 = 144$, et $\\frac{(x + 15)^2}{400} + \\frac{y^2}{144} = 1$',
        '$a = 10$, $c = 8$, $b^2 = 36$, et $\\frac{(x + 15)^2}{100} + \\frac{y^2}{36} = 1$',
        '$a = 15$, $c = 12$, $b^2 = 81$, et $\\frac{(x + 15)^2}{225} + \\frac{y^2}{81} = 1$',
        '$a = 20$, $c = 16$, $b^2 = 656$, et $\\frac{(x + 15)^2}{400} + \\frac{y^2}{656} = 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$AA’ = 5 - (-35) = 40 \\implies a = 20$ (attention à la distance entre $+5$ et $-35$!). Centre $S(-15;0)$, $c = ae = 16$, $b^2 = 20^2 - 16^2 = 144$. Au point $A(5;0)$, $\\frac{(5+15)^2}{400} + 0 = 1$ est bien vérifiée !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Relation fondamentale',
    stepTheme: 'violet',
    stepTitle: 'Comparer $a$, $b$ et $c$ pour l’ellipse vs l’hyperbole',
    paragraphText:
      'Pour une **ellipse**, le demi-grand axe est toujours la plus grande des trois longueurs : $c^2 + b^2 = a^2$ (si $a > b$) ou $c^2 + a^2 = b^2$ (si $b > a$). C’est l’inverse pour une hyperbole, où la demi-distance focale $c$ est toujours la plus grande ($c^2 = a^2 + b^2$).',
    keyRule: 'Dans l’ellipse : $c = \\sqrt{|a^2 - b^2|}$ (soustraction sous la racine). Et l’axe focal est toujours porté par le PLUS GRAND dénominateur !',
    exercise: {
      id: 'tc_m_geo_l07_p03_q05',
      type: 'mcq',
      prompt: 'L’ellipse d’équation $\\frac{(x - 2)^2}{7} + \\frac{(y + 1)^2}{16} = 1$ a pour centre $\\Omega$ et pour demi-distance focale $c$ :',
      options: [
        '$\\Omega(2 ; -1)$ et $c = 3$',
        '$\\Omega(-2 ; 1)$ et $c = 3$',
        '$\\Omega(2 ; -1)$ et $c = \\sqrt{23}$',
        '$\\Omega(2 ; -1)$ et $c = 9$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Centre $\\Omega(2 ; -1)$. Comme $16 > 7$ ($b^2 > a^2$), $c = \\sqrt{16 - 7} = \\sqrt{9} = 3$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Mise sous forme canonique',
    stepTheme: 'green',
    stepTitle: 'Mettre $Ax^2 + Cy^2 + Dx + Ey + F = 0$ sous forme réduite d’ellipse',
    paragraphText:
      'Lorsque $A$ et $C$ sont non nuls et de **même signe** ($AC > 0$, avec $A \\neq C$), on regroupe les termes en $x$ et en $y$, on factorise par $A$ et $C$, on complète les carrés pour faire apparaître $(x - x_0)^2$ et $(y - y_0)^2$, puis on divise toute l’équation par le terme constant du membre de droite afin d’obtenir $1$.',
    exercise: {
      id: 'tc_m_geo_l07_p03_q06',
      type: 'mcq',
      prompt: 'Quelle est la forme réduite de l’équation $4x^2 + y^2 - 8x + 6y - 3 = 0$ ?',
      options: [
        '$\\frac{(x - 1)^2}{4} + \\frac{(y + 3)^2}{16} = 1$',
        '$\\frac{(x - 1)^2}{16} + \\frac{(y + 3)^2}{4} = 1$',
        '$\\frac{(x + 1)^2}{4} + \\frac{(y - 3)^2}{16} = 1$',
        '$\\frac{(x - 1)^2}{3} + \\frac{(y + 3)^2}{12} = 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$4(x^2 - 2x) + (y^2 + 6y) = 3 \\iff 4[(x-1)^2 - 1] + [(y+3)^2 - 9] = 3 \\iff 4(x-1)^2 + (y+3)^2 = 16 \\iff \\frac{(x-1)^2}{4} + \\frac{(y+3)^2}{16} = 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur d’axe focal',
    stepTheme: 'orange',
    stepTitle: 'Quand $a = b$, l’ellipse devient un cercle !',
    paragraphText:
      'Si dans $\\frac{(x - x_0)^2}{a^2} + \\frac{(y - y_0)^2}{b^2} = 1$ on obtient $a = b = R$, l’équation se réécrit $(x - x_0)^2 + (y - y_0)^2 = R^2$ : c’est un **cercle** de centre $\\Omega(x_0; y_0)$ et de rayon $R$. On a alors $c = 0$ et $e = 0$, les deux foyers étant confondus avec le centre.',
    exercise: {
      id: 'tc_m_geo_l07_p03_q07',
      type: 'mcq',
      prompt: 'Quelle est la nature de la courbe d’équation $9x^2 + 9y^2 - 18x + 36y + 9 = 0$ ?',
      options: [
        'Une ellipse proprement dite d’excentricité $e = \\frac{1}{3}$',
        'Un cercle de centre $(1 ; -2)$ et de rayon $2$',
        'Une hyperbole équilatère',
        'L’ensemble vide',
      ],
      correctAnswerIndex: 1,
      explanation: 'En divisant par $9$ : $(x-1)^2 - 1 + (y+2)^2 - 4 + 1 = 0 \\iff (x-1)^2 + (y+2)^2 = 4$, soit le cercle de centre $(1 ; -2)$ et de rayon $2$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'L’hyperbole',
    stepTheme: 'blue',
    stepTitle: 'Équation réduite de l’hyperbole et ses deux orientations',
    paragraphText:
      'Lorsque $e > 1$, on a $c > a$ ($a^2 - c^2 < 0$). En posant $b^2 = c^2 - a^2$ ($b > 0$), la courbe d’équation **$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$** est une **hyperbole** d’axe focal $(O, \\vec{i})$ ($A(a;0), A’(-a;0)$), de demi-distance focale $c = \\sqrt{a^2 + b^2}$ et d’excentricité $e = \\frac{c}{a} > 1$. Si les signes sont inversés (**$-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$**), l’axe focal est **$(O, \\vec{j})$**, les sommets sont $B(0; b), B’(0; -b)$, et $e = \\frac{c}{b}$. Dans les deux cas, les asymptotes sont $(\\Delta) : y = \\frac{b}{a}x$ et $(\\Delta’) : y = -\\frac{b}{a}x$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau récapitulatif des éléments caractéristiques d’une hyperbole de centre O',
      tableData: {
        headers: ['Élément', '$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ (axe $Ox$)', '$-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ (axe $Oy$)'],
        rows: [
          ['Demi-distance focale $c$', '$c = \\sqrt{a^2 + b^2}$', '$c = \\sqrt{a^2 + b^2}$'],
          ['Excentricité $e$', '$e = \\frac{c}{a} > 1$', '$e = \\frac{c}{b} > 1$'],
          ['Sommets', '$A(a ; 0),\\; A’(-a ; 0)$', '$B(0 ; b),\\; B’(0 ; -b)$'],
          ['Axe focal', '$(AA’)$ ($y=0$)', '$(BB’)$ ($x=0$)'],
          ['Foyers', '$F(c ; 0)$ et $F’(-c ; 0)$', '$F(0 ; c)$ et $F’(0 ; -c)$'],
          ['Directrices', '$x = \\frac{a^2}{c}$ et $x = -\\frac{a^2}{c}$', '$y = \\frac{b^2}{c}$ et $y = -\\frac{b^2}{c}$'],
          ['Asymptotes', '$y = \\frac{b}{a}x$ et $y = -\\frac{b}{a}x$', '$y = \\frac{b}{a}x$ et $y = -\\frac{b}{a}x$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p04_q01',
      type: 'mcq',
      prompt: 'À quelle condition une hyperbole d’équation réduite $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ est-elle dite **équilatère** ?',
      options: [
        'Lorsque $a = b$ (les asymptotes $y = x$ et $y = -x$ sont perpendiculaires)',
        'Lorsque $c = a$',
        'Lorsque $e = 1$',
        'Lorsque $a = 2b$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Si $a = b$, le rectangle des asymptotes est un carré : les deux asymptotes $y = x$ et $y = -x$ sont orthogonales, et $e = \\sqrt{2}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Exercice de fixation (corrigé)',
    stepTheme: 'blue',
    stepTitle: 'Éléments caractéristiques de $\\frac{x^2}{4} - y^2 = 1$ (p.5)',
    paragraphText:
      'Dans $\\frac{x^2}{4} - \\frac{y^2}{1} = 1$, le signe « $+$ » porte sur $x^2$, donc l’axe focal est **$(O, \\vec{i})$**. On lit $a = 2$ et $b = 1$, d’où $c = \\sqrt{a^2 + b^2} = \\sqrt{4 + 1} = \\sqrt{5}$. Excentricité $e = \\frac{c}{a} = \\frac{\\sqrt{5}}{2}$, sommets $A(2;0)$ et $A’(-2;0)$, foyers $F(\\sqrt{5}; 0)$ et $F’(-\\sqrt{5}; 0)$, asymptotes $y = \\pm \\frac{1}{2}x$, et directrices $x = \\pm \\frac{a^2}{c} = \\pm \\frac{4}{\\sqrt{5}} = \\pm \\frac{4\\sqrt{5}}{5}$ (soit $(D) : x = \\frac{4\\sqrt{5}}{5}$ et $(D’) : x = -\\frac{4\\sqrt{5}}{5}$).',
    formula: {
      name: 'Directrices de x²/4 − y² = 1',
      formula: 'x = \\frac{a^2}{c} = \\frac{4}{\\sqrt{5}} = \\frac{4\\sqrt{5}}{5} \\quad \\text{et} \\quad x = -\\frac{4\\sqrt{5}}{5}',
    },
    exercise: {
      id: 'tc_m_geo_l07_p04_q02',
      type: 'mcq',
      prompt: 'Pour l’hyperbole d’équation $\\frac{x^2}{4} - y^2 = 1$, quelles sont les équations des deux directrices $(D)$ et $(D’)$ et des asymptotes ?',
      options: [
        'Directrices $x = \\frac{4\\sqrt{5}}{5}$ et $x = -\\frac{4\\sqrt{5}}{5}$ ; asymptotes $y = \\pm \\frac{1}{2}x$',
        'Directrices $x = -\\frac{4\\sqrt{5}}{5}$ uniquement ; asymptotes $y = \\pm 2x$',
        'Directrices $y = \\pm \\frac{\\sqrt{5}}{5}$ ; asymptotes $y = \\pm \\frac{1}{2}x$',
        'Directrices $x = \\pm \\frac{5}{4}$ ; asymptotes $y = \\pm x$',
      ],
      correctAnswerIndex: 0,
      explanation: '$a = 2, b = 1, c = \\sqrt{5}$. Les directrices sont symétriques par rapport à $O$ : $x = \\pm \\frac{a^2}{c} = \\pm \\frac{4\\sqrt{5}}{5}$, et les asymptotes ont pour pentes $\\pm\\frac{b}{a} = \\pm\\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Exercice 2.2 (corrigé)',
    stepTheme: 'green',
    stepTitle: 'Hyperbole translatée d’axe vertical : $-\\frac{(x-1)^2}{4} + \\frac{(y+2)^2}{9} = 1$',
    paragraphText:
      'Ici le « $+$ » est devant le terme en $y$, donc l’axe focal est vertical **$(\\Omega, \\vec{j})$** autour du centre $\\Omega(1 ; -2)$. On lit $a = 2$ et $b = 3$, d’où $c = \\sqrt{a^2 + b^2} = \\sqrt{4 + 9} = \\sqrt{13}$. Dans le repère $(\\Omega, \\vec{i}, \\vec{j})$, les foyers sont $(0 ; \\sqrt{13})$ et $(0 ; -\\sqrt{13})$. Par translation $\\begin{cases} x = 1 + X \\\\ y = -2 + Y \\end{cases}$, on obtient dans $(O, \\vec{i}, \\vec{j})$ : **$F(1 ; -2 + \\sqrt{13})$ et $F’(1 ; -2 - \\sqrt{13})$** (attention à ne pas tronquer $\\sqrt{13}$ en $\\sqrt{3}$ !).',
    formula: {
      name: 'Foyers après translation',
      formula: 'F(1 ; -2 + \\sqrt{13}) \\qquad \\text{et} \\qquad F’(1 ; -2 - \\sqrt{13})',
    },
    exercise: {
      id: 'tc_m_geo_l07_p04_q03',
      type: 'mcq',
      prompt: 'Pour l’hyperbole $-\\frac{(x - 1)^2}{4} + \\frac{(y + 2)^2}{9} = 1$, quels sont le centre $\\Omega$, l’axe focal et les foyers ?',
      options: [
        'Centre $\\Omega(-1 ; 2)$, axe focal $(\\Omega, \\vec{i})$, foyers $(-1\\pm\\sqrt{13} ; 2)$',
        'Centre $\\Omega(1 ; -2)$, axe focal $(\\Omega, \\vec{j})$, foyers $F(1 ; -2+\\sqrt{13})$ et $F’(1 ; -2-\\sqrt{13})$',
        'Centre $\\Omega(1 ; -2)$, axe focal $(\\Omega, \\vec{j})$, foyers $F(1 ; -2+\\sqrt{3})$ et $F’(1 ; -2-\\sqrt{3})$',
        'Centre $\\Omega(1 ; -2)$, axe focal $(\\Omega, \\vec{i})$, foyers $F(1\\pm\\sqrt{5} ; -2)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le terme en $y$ est positif donc l’axe focal est $(\\Omega, \\vec{j})$, $\\Omega(1;-2)$, et $c = \\sqrt{4+9} = \\sqrt{13}$ donne les ordonnées $-2 \\pm \\sqrt{13}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Tracé & Asymptotes',
    stepTheme: 'blue',
    stepTitle: 'Visualiser une hyperbole et ses asymptotes',
    paragraphText:
      'Sur le graphe de l’hyperbole $\\frac{x^2}{4} - y^2 = 1$, les deux branches $y = \\sqrt{\\frac{x^2}{4} - 1}$ et $y = -\\sqrt{\\frac{x^2}{4} - 1}$ sont définies pour $|x| \\geqslant 2$, passent par les sommets $A(2; 0)$ et $A’(-2; 0)$, et se rapprochent indéfiniment des asymptotes $y = \\frac{1}{2}x$ et $y = -\\frac{1}{2}x$ en $\\pm\\infty$.',
    visualSchema: {
      type: 'function_plot',
      title: 'Hyperbole x²/4 − y² = 1 et ses asymptotes y = ±x/2',
      caption: 'Sommets A(2;0), A’(−2;0) et foyers F(√5;0), F’(−√5;0).',
      plot: {
        xMin: -5,
        xMax: 5,
        yMin: -3,
        yMax: 3,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'Branche +',
            color: 'blue',
            pieces: [
              { expr: 'sqrt(x^2/4 - 1)', from: -5, to: -2, includeTo: true },
              { expr: 'sqrt(x^2/4 - 1)', from: 2, to: 5, includeFrom: true },
            ],
          },
          {
            label: 'Branche -',
            color: 'blue',
            pieces: [
              { expr: '-sqrt(x^2/4 - 1)', from: -5, to: -2, includeTo: true },
              { expr: '-sqrt(x^2/4 - 1)', from: 2, to: 5, includeFrom: true },
            ],
          },
          {
            label: 'Asymptote +',
            color: 'orange',
            pieces: [{ expr: 'x/2', from: -5, to: 5 }],
          },
          {
            label: 'Asymptote -',
            color: 'orange',
            pieces: [{ expr: '-x/2', from: -5, to: 5 }],
          },
        ],
        points: [
          { x: 2, y: 0, label: 'A', filled: true, color: 'blue' },
          { x: -2, y: 0, label: 'A’', filled: true, color: 'blue' },
          { x: 2.236, y: 0, label: 'F', filled: true, color: 'violet' },
          { x: -2.236, y: 0, label: 'F’', filled: true, color: 'violet' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p04_q04',
      type: 'mcq',
      prompt: 'Quelles sont les équations des asymptotes de l’hyperbole translatée $-\\frac{(x - 1)^2}{4} + \\frac{(y + 2)^2}{9} = 1$ ?',
      options: [
        '$y + 2 = \\pm \\frac{3}{2}(x - 1)$',
        '$y + 2 = \\pm \\frac{2}{3}(x - 1)$',
        '$y = \\pm \\frac{3}{2}x$',
        '$y - 2 = \\pm \\frac{3}{2}(x + 1)$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Dans le repère centré en $\\Omega(1;-2)$, les asymptotes sont $Y = \\pm\\frac{b}{a}X = \\pm\\frac{3}{2}X$, soit en revenant à $(x,y)$ : $y + 2 = \\pm\\frac{3}{2}(x - 1)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice 4.2 (p.12-13)',
    stepTheme: 'green',
    stepTitle: 'Équation d’une hyperbole depuis $F(4; -1)$, $(D): y = 0$ et $e = 3$',
    paragraphText:
      'Comme $e = 3 > 1$, $(\\Gamma)$ est une hyperbole. La directrice $(D) : y = 0$ étant horizontale, l’axe focal est vertical, $K(4 ; 0)$ et $B = \\operatorname{bar}\\{(F,1),(K,3)\\} \\implies B(4 ; -\\frac{1}{4})$, $B’ = \\operatorname{bar}\\{(F,1),(K,-3)\\} \\implies B’(4 ; \\frac{1}{2})$. La longueur $BB’ = \\frac{1}{2} - (-\\frac{1}{4}) = \\frac{3}{4} = 2b$ donne $b = \\frac{3}{8}$, le centre est $S(4 ; \\frac{1}{8})$, $c = be = \\frac{9}{8}$, et $a^2 = c^2 - b^2 = \\frac{81}{64} - \\frac{9}{64} = \\frac{72}{64} = \\frac{9}{8}$. L’équation est donc **$-\\frac{(x - 4)^2}{9/8} + \\frac{(y - 1/8)^2}{9/64} = 1$**.',
    exercise: {
      id: 'tc_m_geo_l07_p04_q05',
      type: 'mcq',
      prompt: 'Dans l’Exercice 4.2 ($F(4; -1)$, $(D): y = 0$, $e = 3$), quels sont le centre $S$ et la valeur de $a^2$ de cette hyperbole ?',
      options: [
        '$S(4 ; \\frac{1}{8})$ et $a^2 = \\frac{9}{8}$',
        '$S(4 ; -\\frac{1}{2})$ et $a^2 = \\frac{9}{64}$',
        '$S(4 ; \\frac{1}{8})$ et $a^2 = \\frac{9}{64}$',
        '$S(0 ; \\frac{1}{8})$ et $a^2 = \\frac{9}{8}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$S$ est le milieu de $[BB’]$ avec $B(4;-\\frac{1}{4})$ et $B’(4;\\frac{1}{2})$, soit $S(4 ; \\frac{1}{8})$. Puis $b = \\frac{3}{8}$, $c = be = \\frac{9}{8}$ et $a^2 = c^2 - b^2 = \\frac{81-9}{64} = \\frac{9}{8}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur d’orientation',
    stepTheme: 'orange',
    stepTitle: 'L’axe focal de l’hyperbole dépend du SIGNE, pas du plus grand entre $a$ et $b$ !',
    paragraphText:
      'Pour une ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, l’axe focal suit le plus grand entre $a$ et $b$. Pour une **hyperbole**, ce n’est PAS la taille de $a$ et $b$ qui décide, c’est le **signe « $+$ » devant le terme carré** : si $+\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, l’axe focal est $(Ox)$ même si $a < b$ ; si $-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, l’axe focal est $(Oy)$ même si $b < a$ !',
    keyRule: 'Ellipse : le plus grand dénominateur donne l’axe focal. Hyperbole : le signe $+$ donne l’axe focal !',
    exercise: {
      id: 'tc_m_geo_l07_p04_q06',
      type: 'mcq',
      prompt: 'Quel est l’axe focal de l’hyperbole d’équation $\\frac{x^2}{4} - \\frac{y^2}{25} = 1$ (bien que $4 < 25$) ?',
      options: [
        'L’axe $(O, \\vec{j})$ car $25 > 4$',
        'L’axe $(O, \\vec{i})$ car le terme en $x^2$ porte le signe $+$ (et la courbe ne coupe pas $(Oy)$)',
        'La première bissectrice $y = x$',
        'Elle n’a pas d’axe focal',
      ],
      correctAnswerIndex: 1,
      explanation: 'Si $x = 0$, $-\\frac{y^2}{25} = 1$ n’a aucune solution ; pour $y = 0$, $x = \\pm 2$ : les sommets et l’axe focal sont donc sur $(O, \\vec{i})$ !',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'propriete',
    stepBadge: 'Asymptotes constantes',
    stepTheme: 'violet',
    stepTitle: 'Retrouver l’excentricité depuis les pentes des asymptotes',
    paragraphText:
      'Dans le cas $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, les pentes des asymptotes sont $\\pm m = \\pm \\frac{b}{a}$. Or $e = \\frac{c}{a} = \\frac{\\sqrt{a^2+b^2}}{a} = \\sqrt{1 + \\left(\\frac{b}{a}\\right)^2} = \\sqrt{1 + m^2}$ ! Une seule asymptote suffit donc souvent à retrouver $e$ très vite en QCM.',
    exercise: {
      id: 'tc_m_geo_l07_p04_q07',
      type: 'mcq',
      prompt: 'Une hyperbole centrée en $O$ d’axe focal $(Ox)$ admet pour asymptotes les droites d’équation $y = \\pm \\sqrt{3}\\,x$. Quelle est son excentricité $e$ ?',
      options: ['$\\sqrt{3}$', '$2$', '$\\frac{2\\sqrt{3}}{3}$', '$4$'],
      correctAnswerIndex: 1,
      explanation: 'On a $\\frac{b}{a} = \\sqrt{3}$, donc $e = \\sqrt{1 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'La piscine elliptique de M. Coulibaly : mise en équation réduite',
    paragraphText:
      'M. Coulibaly souhaite tracer le bord de sa piscine sachant que tout point du bord est à une distance de la pompe à eau $F$ égale à la moitié de sa distance au mur $(D)$ ($e = \\frac{1}{2}$). Son ami mathématicien obtient la relation $3x^2 + 4y^2 + 6x - 9 = 0$ dans le repère orthonormé $(O, I, J)$ (unité $2\\text{ m}$). Factorisons en $x$ : $3(x^2 + 2x) + 4y^2 = 9 \\iff 3[(x+1)^2 - 1] + 4y^2 = 9 \\iff 3(x+1)^2 + 4y^2 = 12$. En divisant par $12$, on obtient l’équation réduite d’une ellipse : **$\\frac{(x+1)^2}{4} + \\frac{y^2}{3} = 1$**.',
    visualSchema: {
      type: 'function_plot',
      title: 'Plan de la piscine elliptique (x+1)²/4 + y²/3 = 1',
      caption: 'Centre Ω(−1;0), pompe F(0;0), second foyer F’(−2;0), mur (D): x = 3 et (D’): x = −5.',
      plot: {
        xMin: -5.5,
        xMax: 3.5,
        yMin: -2.5,
        yMax: 2.5,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'Demi-ellipse +',
            color: 'blue',
            pieces: [{ expr: 'sqrt(3*(1 - (x+1)^2/4))', from: -3, to: 1, includeFrom: true, includeTo: true }],
          },
          {
            label: 'Demi-ellipse -',
            color: 'blue',
            pieces: [{ expr: '-sqrt(3*(1 - (x+1)^2/4))', from: -3, to: 1, includeFrom: true, includeTo: true }],
          },
        ],
        points: [
          { x: -1, y: 0, label: 'Ω(-1;0)', filled: true, color: 'slate' },
          { x: 0, y: 0, label: 'F(0;0)', filled: true, color: 'violet' },
          { x: -2, y: 0, label: 'F’(-2;0)', filled: true, color: 'violet' },
          { x: 1, y: 0, label: 'A', filled: true, color: 'blue' },
          { x: -3, y: 0, label: 'A’', filled: true, color: 'blue' },
        ],
        verticalLines: [
          { x: 3, label: '(D) mur: x=3', color: 'orange' },
          { x: -5, label: '(D’): x=-5', color: 'slate' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p05_q01',
      type: 'mcq',
      prompt: 'Quelle est l’équation réduite de la piscine vérifiant $3x^2 + 4y^2 + 6x - 9 = 0$ et les coordonnées de son centre $\\Omega$ ?',
      options: [
        '$\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$, centre $\\Omega(-1 ; 0)$',
        '$\\frac{(x - 1)^2}{4} + \\frac{y^2}{3} = 1$, centre $\\Omega(1 ; 0)$',
        '$\\frac{(x + 1)^2}{3} + \\frac{y^2}{4} = 1$, centre $\\Omega(-1 ; 0)$',
        '$\\frac{(x + 1)^2}{4} - \\frac{y^2}{3} = 1$, centre $\\Omega(-1 ; 0)$',
      ],
      correctAnswerIndex: 0,
      explanation: '$3(x+1)^2 + 4y^2 = 9 + 3 = 12 \\implies \\frac{(x+1)^2}{4} + \\frac{y^2}{3} = 1$, donc $\\Omega(-1 ; 0)$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Changement de repère',
    stepTheme: 'green',
    stepTitle: 'Retrouver la pompe $F$, les sommets et le mur $(D)$ dans $(O, I, J)$',
    paragraphText:
      'Pour l’ellipse $\\frac{(x+1)^2}{4} + \\frac{y^2}{3} = 1$, on a $a = 2$, $b = \\sqrt{3}$ ($a > b$), donc $c = \\sqrt{4 - 3} = 1$ et l’axe focal est $(\\Omega I)$. Dans le repère centré $(\\Omega, I, J)$ : $F(1; 0)$, $F’(-1; 0)$, $A(2; 0)$, $A’(-2; 0)$, $B(0; \\sqrt{3})$, $B’(0; -\\sqrt{3})$, $(D) : X = \\frac{a^2}{c} = 4$ et $(D’) : X = -4$. Avec $\\begin{cases} x = -1 + X \\\\ y = Y \\end{cases}$, on obtient dans $(O, I, J)$ : pompe **$F(0 ; 0)$** (à l’origine !), $F’(-2 ; 0)$, $A(1 ; 0)$, $A’(-3 ; 0)$, et le mur **$(D) : x = 3$** (ainsi que $(D’) : x = -5$).',
    exercise: {
      id: 'tc_m_geo_l07_p05_q02',
      type: 'mcq',
      prompt: 'Dans le repère $(O, I, J)$ du jardin, quelles sont la position de la pompe $F$ et l’équation du mur $(D)$ pour la piscine $\\frac{(x+1)^2}{4} + \\frac{y^2}{3} = 1$ ?',
      options: [
        'Pompe $F(1 ; 0)$ et mur $(D) : x = 4$',
        'Pompe $F(0 ; 0)$ et mur $(D) : x = 3$',
        'Pompe $F(-2 ; 0)$ et mur $(D) : x = -5$',
        'Pompe $F(0 ; 1)$ et mur $(D) : y = 3$',
      ],
      correctAnswerIndex: 1,
      explanation: '$x_F = -1 + 1 = 0$, $y_F = 0$, et $(D) : x = -1 + \\frac{a^2}{c} = -1 + 4 = 3$ (à $3 \\times 2\\text{ m} = 6\\text{ m}$ de la pompe).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Approfondissement Ex. 5.1',
    stepTheme: 'green',
    stepTitle: 'Étude complète de l’hyperbole $(\\mathcal{H}) : 3x^2 - y^2 + 2x + 1 = 0$',
    paragraphText:
      'Mettons $3x^2 + 2x - y^2 + 1 = 0$ sous forme canonique : $3\\left(x + \\frac{1}{3}\\right)^2 - \\frac{1}{3} - y^2 + 1 = 0 \\iff 3\\left(x + \\frac{1}{3}\\right)^2 - y^2 = -\\frac{2}{3}$. En multipliant par $-\\frac{3}{2}$, on obtient **$-\\frac{(x + 1/3)^2}{2/9} + \\frac{y^2}{2/3} = 1$**. C’est une hyperbole de centre $\\Omega(-\\frac{1}{3} ; 0)$ et d’axe focal vertical $(\\Omega, \\vec{e}_2)$, avec $a^2 = \\frac{2}{9}$, $b^2 = \\frac{2}{3}$, $c^2 = \\frac{8}{9}$ ($c = \\frac{\\sqrt{8}}{3} = \\frac{2\\sqrt{2}}{3}$), excentricité $e = \\frac{c}{b} = \\frac{2\\sqrt{3}}{3}$ et asymptotes $y = \\pm \\sqrt{3}(x + \\frac{1}{3})$.',
    formula: {
      name: 'Forme réduite et éléments de (H)',
      formula: '-\\frac{\\left(x+\\frac{1}{3}\\right)^2}{\\frac{2}{9}} + \\frac{y^2}{\\frac{2}{3}} = 1, \\quad e = \\frac{2\\sqrt{3}}{3}, \\quad (\\Delta): y = \\pm\\sqrt{3}\\left(x+\\frac{1}{3}\\right)',
    },
    exercise: {
      id: 'tc_m_geo_l07_p05_q03',
      type: 'mcq',
      prompt: 'Quelles sont la nature et l’excentricité de la courbe $(\\mathcal{H}) : 3x^2 - y^2 + 2x + 1 = 0$ ?',
      options: [
        'Une hyperbole d’axe focal $(\\Omega, \\vec{e}_2)$ et d’excentricité $e = \\frac{2\\sqrt{3}}{3}$',
        'Une hyperbole d’axe focal $(\\Omega, \\vec{e}_1)$ et d’excentricité $e = 2$',
        'Une ellipse d’excentricité $e = \\frac{\\sqrt{3}}{2}$',
        'Une parabole de paramètre $\\frac{2}{3}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$-\\frac{(x+1/3)^2}{2/9} + \\frac{y^2}{2/3} = 1$ a son signe $+$ sur $y^2$, donc axe focal vertical, $b = \\sqrt{\\frac{2}{3}}$, $c = \\frac{\\sqrt{8}}{3}$, d’où $e = \\frac{c}{b} = \\frac{\\sqrt{8}/3}{\\sqrt{2}/\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Approfondissement Ex. 5.2',
    stepTheme: 'green',
    stepTitle: 'Lieu géométrique dans le plan complexe (alignement de $1, z, z^4$)',
    paragraphText:
      'Dans le plan complexe muni du repère $(O, \\vec{e}_1, \\vec{e}_2)$, on donne $A(1)$, $M(z)$ et $M’(z^4)$. Pour $z \\neq 1$, les points $A, M, M’$ sont alignés ssi $\\frac{z^4 - 1}{z - 1} = 1 + z + z^2 + z^3 \\in \\mathbb{R}$ (et si $z = 1$, $M = A$ donc $A, M, M’$ sont alignés et $1+1+1+1 = 4 \\in \\mathbb{R}$ aussi). En posant $z = x + iy$, on développe : $1 + z + z^2 + z^3 = (1 + x + x^2 - y^2 + x^3 - 3xy^2) + y(3x^2 - y^2 + 2x + 1)i$.',
    formula: {
      name: 'Condition complexe d’alignement',
      formula: 'A(1), M(z), M’(z^4) \\text{ alignés} \\iff \\operatorname{Im}(1 + z + z^2 + z^3) = 0 \\iff y(3x^2 - y^2 + 2x + 1) = 0',
    },
    exercise: {
      id: 'tc_m_geo_l07_p05_q04',
      type: 'mcq',
      prompt: 'À quelle équation sur les réels $x$ et $y$ équivaut la condition « $1 + z + z^2 + z^3$ est un nombre réel » (avec $z = x + iy$) ?',
      options: [
        '$x(3x^2 - y^2 + 2x + 1) = 0$',
        '$y(3x^2 - y^2 + 2x + 1) = 0$',
        '$3x^2 + y^2 + 2x + 1 = 0$',
        '$y(x^2 + y^2 - 1) = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La partie imaginaire de $(x+iy) + (x+iy)^2 + (x+iy)^3$ est $y + 2xy + (3x^2 y - y^3) = y(3x^2 - y^2 + 2x + 1)$ : un complexe est réel ssi sa partie imaginaire est nulle.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Conclusion du lieu',
    stepTheme: 'blue',
    stepTitle: 'Interpréter le produit nul : réunion de l’axe réel et de $(\\mathcal{H})$',
    paragraphText:
      'L’équation $y(3x^2 - y^2 + 2x + 1) = 0$ équivaut à $y = 0$ OU $3x^2 - y^2 + 2x + 1 = 0$. L’ensemble des points $M(x; y)$ cherché est donc la **réunion de l’axe réel $(O, \\vec{e}_1)$ et de l’hyperbole $(\\mathcal{H})$** étudiée à la question 1 ! C’est un grand classique du Bac C mêlant nombres complexes et coniques.',
    exercise: {
      id: 'tc_m_geo_l07_p05_q05',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $M(z)$ tels que $A(1)$, $M(z)$ et $M’(z^4)$ soient alignés ?',
      options: [
        'Le cercle trigonométrique uniquement',
        'L’axe $(O, \\vec{e}_2)$ et l’hyperbole $(\\mathcal{H})$',
        'La réunion de l’axe $(O, \\vec{e}_1)$ et de l’hyperbole $(\\mathcal{H})$',
        'La droite $y = x$ et la parabole $y = x^2$',
      ],
      correctAnswerIndex: 2,
      explanation: '$y = 0$ est l’axe des abscisses $(O, \\vec{e}_1)$ et $3x^2 - y^2 + 2x + 1 = 0$ est l’hyperbole $(\\mathcal{H})$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Reconnaissance rapide',
    stepTheme: 'violet',
    stepTitle: 'Reconnaître immédiatement la nature de $Ax^2 + Cy^2 + Dx + Ey + F = 0$',
    paragraphText:
      'En Terminale C (sans terme croisé $xy$), la nature d’une conique non dégénérée d’équation $Ax^2 + Cy^2 + Dx + Ey + F = 0$ se lit au premier coup d’œil grâce au signe du produit $AC$ :',
    visualSchema: {
      type: 'custom_svg',
      title: 'Clé d’identification rapide de Ax² + Cy² + Dx + Ey + F = 0',
      tableData: {
        headers: ['Condition sur $A$ et $C$', 'Courbe générique', 'Points de vigilance'],
        rows: [
          ['$A = 0$ ou $C = 0$ (pas les deux)', 'Parabole', 'Compléter le seul carré présent'],
          ['$AC > 0$ et $A = C$', 'Cercle (ou $\\emptyset$, ou $1$ point)', 'Même coefficient devant $x^2$ et $y^2$'],
          ['$AC > 0$ et $A \\neq C$', 'Ellipse (ou $\\emptyset$, ou $1$ point)', 'Axe focal = plus grand dénominateur'],
          ['$AC < 0$', 'Hyperbole (ou $2$ droites sécantes)', 'Axe focal = terme à signe $+$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l07_p05_q06',
      type: 'mcq',
      prompt: 'Sans tout développer, quelle est la nature probable de la courbe d’équation $5x^2 - 2y^2 + 10x + 8y - 13 = 0$ ?',
      options: ['Un cercle', 'Une ellipse', 'Une parabole', 'Une hyperbole'],
      correctAnswerIndex: 3,
      explanation: 'Ici $A = 5$ et $C = -2$ sont de signes contraires ($AC = -10 < 0$) : il s’agit d’une hyperbole.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vérification globale',
    stepTheme: 'orange',
    stepTitle: 'Relier l’équation réduite et la constante du second membre',
    paragraphText:
      'Attention : pour conclure sur la nature de $Ax^2 + Cy^2 + Dx + Ey + F = 0$ après complétion des carrés, il faut toujours regarder le signe du second membre ! Par exemple, $(x-1)^2 + 2(y+1)^2 = 0$ donne un point unique $(1;-1)$, $(x-1)^2 + 2(y+1)^2 = -3$ donne $\\emptyset$, et $3(x+1)^2 - y^2 = 0$ donne deux droites sécantes ($y = \\pm\\sqrt{3}(x+1)$), pas une hyperbole !',
    exercise: {
      id: 'tc_m_geo_l07_p05_q07',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $(x ; y)$ du plan vérifiant $3(x + 1)^2 - y^2 = 0$ ?',
      options: [
        'Une hyperbole équilatère',
        'La réunion de deux droites sécantes en $(-1 ; 0)$ : $y = \\sqrt{3}(x+1)$ et $y = -\\sqrt{3}(x+1)$',
        'Un cercle réduit à un point',
        'Une parabole de sommet $(-1 ; 0)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$y^2 = 3(x+1)^2 \\iff (y - \\sqrt{3}(x+1))(y + \\sqrt{3}(x+1)) = 0$ : c’est une hyperbole dégénérée en ses deux asymptotes !',
    },
  },
];

export const MATHS_TLE_C_L07_CONIQUES: CurriculumChapter = {
  id: 'terminale_c_maths_geometrie_l07_coniques',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 7,
  title: 'Leçon 7 : Coniques',
  summary:
    'Définition foyer–directrice (MF/MH = e), axe focal, sommets et régionnement ; équations réduites et éléments caractéristiques de la parabole, de l’ellipse et de l’hyperbole ; coniques translatées et lieux géométriques complexes.',
  officialVolumeHours: 8,
  contentVersion: 2,
  points: [
    {
      id: 'terminale_c_maths_geometrie_l07_coniques_p01',
      order: 1,
      title: 'Définition foyer–directrice, axe focal, sommets et régionnement',
      summary:
        'Classer une conique via l’excentricité e (parabole, ellipse, hyperbole), trouver l’axe focal, calculer les sommets via bar{(F,1),(K,±e)} et étudier le régionnement.',
      conceptExplanation:
        'Une conique de foyer $F$, directrice $(\\mathcal{D})$ ($F \\notin (\\mathcal{D})$) et d’excentricité $e > 0$ est l’ensemble des points $M$ vérifiant $\\frac{MF}{MH} = e$. Elle admet pour axe focal la perpendiculaire $(\\Delta)$ à $(\\mathcal{D})$ passant par $F$. Sur $(\\Delta)$, le sommet est le milieu de $[FK]$ si $e = 1$, et $A = \\operatorname{bar}\\{(F,1),(K,e)\\}$, $A’ = \\operatorname{bar}\\{(F,1),(K,-e)\\}$ si $e \\neq 1$.',
      keyRule: '$e=1$ : parabole ; $0 < e < 1$ : ellipse ; $e > 1$ : hyperbole. $M$ intérieur $\\iff MF < e\\,MH$.',
      formulas: [
        { name: 'Définition', formula: '\\frac{MF}{MH} = e \\qquad (e > 0)' },
        { name: 'Sommets (e ≠ 1)', formula: 'A = \\operatorname{bar}\\{(F,1),(K,e)\\}, \\quad A’ = \\operatorname{bar}\\{(F,1),(K,-e)\\}' },
      ],
      workedExample: {
        title: 'Sommets de F(2; 3), (D): x = −4, e = 1/3',
        statement: 'Déterminer l’axe focal et les sommets $A, A’$.',
        methodSteps: [
          'Axe focal perpendiculaire à $x=-4$ passant par $F(2;3)$ : $y = 3$, et $K(-4; 3)$.',
          '$A = \\operatorname{bar}\\{(F,3),(K,1)\\} \\implies A(\\frac{1}{2}; 3)$ ; $A’ = \\operatorname{bar}\\{(F,3),(K,-1)\\} \\implies A’(5; 3)$.',
        ],
        conclusion: 'Axe focal $y = 3$, sommets $A(\\frac{1}{2} ; 3)$ et $A’(5 ; 3)$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l07_coniques_p02',
      order: 2,
      title: 'Équation réduite et éléments caractéristiques de la parabole',
      summary:
        'Maîtriser y² = 2ax et x² = 2ay (paramètre |a|, foyer, directrice), étudier les paraboles translatées et retrouver l’équation depuis (F, D).',
      conceptExplanation:
        'Une parabole d’équation réduite $y^2 = 2ax$ ($a \\neq 0$) a pour sommet $O$, axe focal $(O, \\vec{i})$, paramètre $|a|$, foyer $F(\\frac{a}{2}; 0)$ et directrice $x = -\\frac{a}{2}$. Avec $x^2 = 2ay$, l’axe focal est $(O, \\vec{j})$, $F(0; \\frac{a}{2})$ et $(\\mathcal{D}) : y = -\\frac{a}{2}$. Si la parabole est translatée en $S(x_S; y_S)$, on utilise $(y - y_S)^2 = 2a(x - x_S)$ ou $(x - x_S)^2 = 2a(y - y_S)$.',
      keyRule: 'Dans $y^2 = 2ax$, la coordonnée du foyer vaut $\\frac{a}{2}$, soit le quart du coefficient devant $x$.',
      formulas: [
        { name: 'Paraboles canoniques', formula: 'y^2 = 2ax \\;\\left(F(\\frac{a}{2};0)\\right) \\qquad ; \\qquad x^2 = 2ay \\;\\left(F(0;\\frac{a}{2})\\right)' },
      ],
      workedExample: {
        title: 'Parabole depuis F(3; 2) et (D): x = 1 (Ex. 3.1)',
        statement: 'Déterminer une équation de la parabole.',
        methodSteps: [
          'Projeté $K(1; 2)$, paramètre $p = KF = 2$, sommet $S(2; 2)$ (milieu de $[FK]$).',
          'Dans $(S, \\vec{i}, \\vec{j})$ : $Y^2 = 2pX = 4X$.',
        ],
        conclusion: '$(y - 2)^2 = 4(x - 2)$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l07_coniques_p03',
      order: 3,
      title: 'Équation réduite et éléments caractéristiques de l’ellipse',
      summary:
        'Exploiter x²/a² + y²/b² = 1 dans les deux cas a > b et a < b (c, e, foyers, directrices, cercles principal et secondaire), forme canonique et construction depuis (F, D, e).',
      conceptExplanation:
        'L’ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a, b > 0$) a son axe focal sur $(Ox)$ si $a > b$ (avec $c = \\sqrt{a^2 - b^2}$, $e = \\frac{c}{a}$, $F(\\pm c; 0)$, $x = \\pm\\frac{a^2}{c}$) et sur $(Oy)$ si $a < b$ (avec $c = \\sqrt{b^2 - a^2}$, $e = \\frac{c}{b}$, $F(0; \\pm c)$, $y = \\pm\\frac{b^2}{c}$). Si $a = b$, c’est un cercle.',
      keyRule: 'Dans l’ellipse, $a^2$ et $b^2$ se soustraient pour donner $c^2 = |a^2 - b^2|$, et le plus grand demi-axe porte les foyers.',
      formulas: [
        { name: 'Ellipse centrée', formula: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\qquad (c^2 = |a^2 - b^2|)' },
      ],
      workedExample: {
        title: 'Ellipse depuis F(1; 0), (D): x = 10 et e = 4/5 (Ex. 4.1 corrigé)',
        statement: 'Déterminer l’équation réduite de $(\\Gamma)$.',
        methodSteps: [
          '$K(10;0)$, $A = \\operatorname{bar}\\{(F,5),(K,4)\\} = A(5;0)$, $A’ = \\operatorname{bar}\\{(F,5),(K,-4)\\} = A’(-35;0)$.',
          '$AA’ = 40 = 2a \\implies a = 20$, centre $S(-15; 0)$, $c = ae = 16$ et $b^2 = a^2 - c^2 = 144$.',
        ],
        conclusion: '$\\frac{(x + 15)^2}{400} + \\frac{y^2}{144} = 1$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l07_coniques_p04',
      order: 4,
      title: 'Équation réduite et éléments caractéristiques de l’hyperbole',
      summary:
        'Distinguer x²/a² − y²/b² = 1 et −x²/a² + y²/b² = 1, calculer c = √(a²+b²), e, foyers, directrices, asymptotes y = ±(b/a)x et hyperbole équilatère.',
      conceptExplanation:
        'Pour l’hyperbole, $c = \\sqrt{a^2 + b^2}$ est toujours supérieur à $a$ et à $b$. L’axe focal est $(Ox)$ si le signe $+$ porte sur $x^2$ ($\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, $e = \\frac{c}{a}$), et $(Oy)$ si le signe $+$ porte sur $y^2$ ($-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $e = \\frac{c}{b}$). Les asymptotes ont toujours pour équation $y = \\pm \\frac{b}{a}x$.',
      keyRule: 'Dans l’hyperbole, le terme affecté du signe $+$ indique la direction de l’axe focal.',
      formulas: [
        { name: 'Hyperbole centrée', formula: '\\pm\\left(\\frac{x^2}{a^2} - \\frac{y^2}{b^2}\\right) = 1 \\qquad (c = \\sqrt{a^2 + b^2},\\; y = \\pm\\frac{b}{a}x)' },
      ],
      workedExample: {
        title: 'Hyperbole x²/4 − y² = 1 (p.5)',
        statement: 'Donner nature, axe focal, foyers, directrices et asymptotes.',
        methodSteps: [
          'Signe $+$ devant $x^2$ : axe focal $(O, \\vec{i})$, $a = 2$, $b = 1$, $c = \\sqrt{5}$, $e = \\frac{\\sqrt{5}}{2}$.',
          'Foyers $F(\\sqrt{5};0), F’(-\\sqrt{5};0)$ ; directrices $x = \\pm\\frac{4\\sqrt{5}}{5}$ ; asymptotes $y = \\pm\\frac{1}{2}x$.',
        ],
        conclusion: 'Hyperbole d’excentricité $\\frac{\\sqrt{5}}{2}$ et d’asymptotes $y = \\pm\\frac{1}{2}x$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l07_coniques_p05',
      order: 5,
      title: 'Situation complexe (piscine elliptique) et coniques dans le plan complexe',
      summary:
        'Résoudre le tracé complet d’une ellipse translatée (piscine de M. Coulibaly), étudier l’alignement complexe menant à une hyperbole et reconnaître toute conique.',
      conceptExplanation:
        'Une équation du second degré $Ax^2 + Cy^2 + Dx + Ey + F = 0$ se ramène par complétion des carrés et changement de repère à une forme réduite centrée en $\\Omega$, dont on déduit immédiatement la nature et les éléments caractéristiques dans le repère initial. Dans le plan complexe, la partie imaginaire d’un rapport nul donne souvent l’équation cartésienne d’une conique.',
      keyRule: 'Après changement de repère $\\begin{cases} x = x_\\Omega + X \\\\ y = y_\\Omega + Y \\end{cases}$, ne pas oublier de convertir foyers, sommets et directrices vers $(O, \\vec{i}, \\vec{j})$.',
      formulas: [
        { name: 'Piscine elliptique', formula: '3x^2 + 4y^2 + 6x - 9 = 0 \\iff \\frac{(x+1)^2}{4} + \\frac{y^2}{3} = 1' },
      ],
      workedExample: {
        title: 'Alignement de A(1), M(z) et M’(z⁴) (Ex. 5.2)',
        statement: 'Déterminer l’ensemble des points $M(x ; y)$ tels que $A(1)$, $M(z)$ et $M’(z^4)$ soient alignés.',
        methodSteps: [
          'Condition : $1 + z + z^2 + z^3 \\in \\mathbb{R} \\iff \\operatorname{Im}(1+z+z^2+z^3) = 0$.',
          'En posant $z = x + iy$, la partie imaginaire vaut $y(3x^2 - y^2 + 2x + 1) = 0$.',
        ],
        conclusion: 'Réunion de l’axe réel $(O, \\vec{e}_1)$ et de l’hyperbole $(\\mathcal{H}) : -\\frac{(x+1/3)^2}{2/9} + \\frac{y^2}{2/3} = 1$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};
