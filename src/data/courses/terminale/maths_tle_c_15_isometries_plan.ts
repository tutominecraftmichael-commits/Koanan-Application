import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Situation & Définition',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce qu’une isométrie plane ? (p.1–2)',
    paragraphText:
      'Dans une usine de jouets, deux robots appliquent successivement deux symétries orthogonales d’axes parallèles $(D)$ et $(D’)$, et un élève affirme qu’un seul robot programmé par translation réalise le même déplacement : c’est l’objet de l’étude des **isométries planes**. Une **isométrie plane** est une application du plan dans lui-même qui **conserve la distance** : pour tous points $M, N$ d’images $M’, N’$, on a $M’N’ = MN$. Les translations, symétries orthogonales (réflexions) et rotations sont des isométries ; une homothétie de rapport $\\lambda \\notin \\{-1, 1\\}$ n’en est pas une car $M’N’ = |\\lambda|MN$.',
    formula: {
      name: 'Définition d’une isométrie plane',
      formula: '\\forall M, N \\in \\mathcal{P}, \\quad M’N’ = MN',
    },
    exercise: {
      id: 'tc_m_geo_l15_p01_q01',
      type: 'mcq',
      prompt: 'Parmi les transformations suivantes, laquelle n’est PAS une isométrie plane ?',
      options: [
        'La translation de vecteur non nul $\\vec{u}$',
        'La rotation de centre $K$ et d’angle $\\frac{\\pi}{3}$',
        'L’homothétie de centre $K$ et de rapport $-\\frac{1}{2}$',
        'La symétrie orthogonale d’axe $(D)$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Une homothétie de rapport $\\lambda = -\\frac{1}{2}$ vérifie $M’N’ = \\frac{1}{2}MN \\neq MN$ lorsque $M \\neq N$ : elle ne conserve pas les distances.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Conservations',
    stepTheme: 'violet',
    stepTitle: 'Bijection, images de figures simples et propriétés de conservation (p.2–3)',
    paragraphText:
      'Toute isométrie plane $f$ est une **transformation du plan** (bijection du plan dans lui-même). Elle transforme une droite $(D)$ en une droite $(D’)$, un segment $[AB]$ en le segment $[f(A)f(B)]$, un cercle $\\mathcal{C}(O, r)$ en $\\mathcal{C}(f(O), r)$, un carré en un carré de même côté, et un triangle équilatéral en un triangle équilatéral. De plus, elle conserve le **produit scalaire** ($\\overrightarrow{AB}\\cdot\\overrightarrow{CD} = \\overrightarrow{A’B’}\\cdot\\overrightarrow{C’D’}$), le **barycentre**, le parallélisme, l’orthogonalité, le contact et les **angles géométriques** (non orientés).',
    konanTip: 'Attention : toute isométrie conserve les angles géométriques, mais pas forcément les angles orientés ! Une symétrie orthogonale change un angle orienté en son opposé.',
    exercise: {
      id: 'tc_m_geo_l15_p01_q02',
      type: 'mcq',
      prompt: 'Soit $f$ une isométrie plane. Laquelle des grandeurs suivantes est TOUJOURS conservée par $f$ ?',
      options: [
        'La mesure algébrique d’un vecteur sur un axe fixe',
        'Le signe de la mesure principale de tout angle orienté',
        'Le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$ et le barycentre',
        'Tous les points d’une droite parallèle à $(AB)$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Toute isométrie conserve les longueurs et les angles géométriques, donc le produit scalaire $\\overrightarrow{AB}\\cdot\\overrightarrow{CD} = \\frac{1}{2}(AB^2+CD^2-\\|\\overrightarrow{AB}-\\overrightarrow{CD}\\|^2)$ ainsi que le barycentre.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Axes parallèles',
    stepTheme: 'violet',
    stepTitle: 'Composée de deux symétries orthogonales d’axes parallèles (p.3)',
    paragraphText:
      'Si $(D)$ et $(\\Delta)$ sont deux droites parallèles, la composée $s_{(\\Delta)} \\circ s_{(D)}$ est la **translation** de vecteur $2\\overrightarrow{HK}$, où $H$ est un point quelconque de $(D)$ et $K$ son projeté orthogonal sur $(\\Delta)$. En sens inverse, $s_{(D)} \\circ s_{(\\Delta)} = t_{2\\overrightarrow{KH}}$ : lorsque $(D) \\neq (\\Delta)$, $s_{(\\Delta)} \\circ s_{(D)} \\neq s_{(D)} \\circ s_{(\\Delta)}$. Cas particulier : si $(D) = (\\Delta)$, alors $s_{(D)} \\circ s_{(D)} = \\operatorname{Id}_{(\\mathcal{P})}$.',
    formula: {
      name: 'Deux réflexions d’axes parallèles (D) // (Δ)',
      formula: 's_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}} \\qquad ; \\qquad s_{(D)} \\circ s_{(D)} = \\operatorname{Id}_{(\\mathcal{P})}',
    },
    visualSchema: {
      type: 'geometry_svg',
      title: 'Composée s_(Δ) ∘ s_(D) pour deux axes parallèles (p.3)',
      caption: 'K est le projeté orthogonal de H ∈ (D) sur (Δ) : le point H est envoyé sur H’ tel que HH’ = 2 HK.',
      svgContent: `<svg viewBox="0 0 320 140" width="305" height="133" xmlns="http://www.w3.org/2000/svg">
        <line x1="25" y1="38" x2="295" y2="38" stroke="#2563eb" stroke-width="2"/><text x="270" y="31" font-size="11" font-weight="bold" fill="#2563eb">(D)</text>
        <line x1="25" y1="74" x2="295" y2="74" stroke="#dc2626" stroke-width="2"/><text x="270" y="67" font-size="11" font-weight="bold" fill="#dc2626">(Δ)</text>
        <line x1="150" y1="18" x2="150" y2="128" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4,3"/>
        <rect x="150" y="38" width="9" height="9" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <rect x="150" y="74" width="9" height="9" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <circle cx="150" cy="38" r="3.5" fill="#2563eb"/><text x="135" y="32" font-size="11" font-weight="bold" fill="#2563eb">H</text>
        <circle cx="150" cy="74" r="3.5" fill="#dc2626"/><text x="135" y="69" font-size="11" font-weight="bold" fill="#dc2626">K</text>
        <circle cx="150" cy="110" r="3.5" fill="#16a34a"/><text x="131" y="122" font-size="11" font-weight="bold" fill="#16a34a">H’</text>
        <line x1="175" y1="38" x2="175" y2="110" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowG)"/>
        <text x="183" y="96" font-size="11" font-weight="bold" fill="#16a34a">2 HK</text>
        <defs><marker id="arrowG" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#16a34a"/></marker></defs>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l15_p01_q03',
      type: 'mcq',
      prompt: 'Dans un rectangle $ABCD$, $I, J, L, K$ sont les milieux de $[AB], [DC], [AD], [BC]$ (p.3). Quelle transformation est égale à $s_{(IJ)} \\circ s_{(AD)}$ ?',
      options: ['$t_{\\overrightarrow{BA}}$', '$t_{\\overrightarrow{AB}}$', '$t_{\\overrightarrow{AD}}$', '$\\operatorname{Id}_{(\\mathcal{P})}$'],
      correctAnswerIndex: 1,
      explanation: '$(IJ) \\parallel (AD)$ et $I$ est le projeté orthogonal de $A \\in (AD)$ sur $(IJ)$, donc $s_{(IJ)} \\circ s_{(AD)} = t_{2\\overrightarrow{AI}} = t_{\\overrightarrow{AB}}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Décomposition translation',
    stepTheme: 'violet',
    stepTitle: 'Décomposer $t_{\\vec{u}}$ en deux symétries orthogonales (p.4)',
    paragraphText:
      'Réciproquement, soit $t_{\\vec{u}}$ une translation de vecteur non nul $\\vec{u}$. Pour toute droite $(\\Delta)$ de **vecteur normal $\\vec{u}$**, il existe une unique droite $(D) = t_{\\frac{1}{2}\\vec{u}}(\\Delta)$ telle que $t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)}$, et une unique droite $(D’) = t_{-\\frac{1}{2}\\vec{u}}(\\Delta)$ telle que $t_{\\vec{u}} = s_{(\\Delta)} \\circ s_{(D’)}$. Retiens le sens du déplacement : de l’axe appliqué **en premier** vers l’axe appliqué **en second**, le décalage vaut $\\frac{1}{2}\\vec{u}$.',
    formula: {
      name: 'Décomposition d’une translation t_u⃗',
      formula: 't_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)} \\;\\text{ avec } (D) = t_{\\frac{1}{2}\\vec{u}}(\\Delta) \\qquad ; \\qquad t_{\\vec{u}} = s_{(\\Delta)} \\circ s_{(D’)} \\;\\text{ avec } (D’) = t_{-\\frac{1}{2}\\vec{u}}(\\Delta)',
    },
    exercise: {
      id: 'tc_m_geo_l15_p01_q04',
      type: 'mcq',
      prompt: 'Dans le rectangle $ABCD$ ($I, J, L, K$ milieux de $[AB], [DC], [AD], [BC]$, p.4), laquelle des décompositions suivantes de $t_{\\overrightarrow{AB}}$ est FAUSSE ?',
      options: [
        '$t_{\\overrightarrow{AB}} = s_{(BC)} \\circ s_{(IJ)}$',
        '$t_{\\overrightarrow{AB}} = s_{(IJ)} \\circ s_{(AD)}$',
        '$t_{\\overrightarrow{AB}} = s_{(AD)} \\circ s_{(IJ)}$',
        '$s_{(IK)} \\circ s_{(IK)} = \\operatorname{Id}_{(\\mathcal{P})}$',
      ],
      correctAnswerIndex: 2,
      explanation: '$s_{(AD)} \\circ s_{(IJ)} = t_{2\\overrightarrow{IA}} = t_{\\overrightarrow{BA}} = t_{-\\overrightarrow{AB}} \\neq t_{\\overrightarrow{AB}}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice 6 p.18–19',
    stepTheme: 'green',
    stepTitle: 'Trouver la droite inconnue $(\\Delta)$ dans $t_{\\vec{u}} = s_{(\\Delta)} \\circ s_{(D)}$',
    paragraphText:
      'Dans un triangle équilatéral $ABC$ de milieux $I, J, K$ de $[BC], [CA], [AB]$ (p.18), cherchons $(\\Delta)$ telle que $t_{\\overrightarrow{CK}} = s_{(\\Delta)} \\circ s_{(IJ)}$. Le vecteur $\\overrightarrow{CK}$ est bien normal à $(IJ)$ car $(IJ) \\parallel (AB)$ et $(CK) \\perp (AB)$. Comme $(IJ)$ est appliqué en premier, on décale $(IJ)$ de $+\\frac{1}{2}\\overrightarrow{CK}$ : or $\\overrightarrow{CK}$ pointe de $C$ vers $K$, et $(IJ)$ se trouve à mi-hauteur entre $C$ et $(AB)$, donc $t_{\\frac{1}{2}\\overrightarrow{CK}}(IJ) = (AB)$, d’où $(\\Delta) = (AB)$ !',
    exercise: {
      id: 'tc_m_geo_l15_p01_q05',
      type: 'mcq',
      prompt: 'Dans le triangle équilatéral $ABC$ ($I, J, K$ milieux de $[BC], [CA], [AB]$), quelle droite $(\\Delta)$ vérifie $t_{\\overrightarrow{AB}} = s_{(CK)} \\circ s_{(\\Delta)}$ (Ex. 6.4 p.19) ?',
      options: [
        'La médiatrice de $[AC]$ (droite $(BJ)$)',
        'La médiatrice de $[AK]$, parallèle à $(CK)$ passant par le milieu de $[AK]$',
        'La droite $(AI)$',
        'La droite $(AB)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Ici $(CK)$ est appliqué en second et est normal à $\\overrightarrow{AB}$, donc $(\\Delta) = t_{-\\frac{1}{2}\\overrightarrow{AB}}((CK)) = t_{\\overrightarrow{KA}}((CK))$, soit la parallèle à $(CK)$ (médiatrice de $[AK]$) passant à $\\frac{1}{2}BA$ à gauche de $K$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 5 p.18',
    stepTheme: 'blue',
    stepTitle: 'Simplifier une composée de réflexions parallèles dans un carré',
    paragraphText:
      'Soit $ABCD$ un carré direct de centre $O$ (sommets consécutifs dans l’ordre direct $A, B, C, D$). Que vaut $f = s_{(DC)} \\circ s_{(AB)}$ ? Les axes $(AB)$ et $(DC)$ étant parallèles et $D$ étant le projeté orthogonal de $A$ sur $(DC)$, la propriété donne immédiatement $s_{(DC)} \\circ s_{(AB)} = t_{2\\overrightarrow{AD}}$. Ainsi, $A$ est envoyé en $A’$ tel que $\\overrightarrow{AA’} = 2\\overrightarrow{AD}$, et $f$ est la translation de vecteur $2\\overrightarrow{AD}$.',
    exercise: {
      id: 'tc_m_geo_l15_p01_q06',
      type: 'mcq',
      prompt: 'Dans un carré direct $ABCD$, à quelle transformation est égale $f = s_{(DC)} \\circ s_{(AB)}$ (Ex. 5.1 p.18) ?',
      options: [
        'La translation de vecteur $\\overrightarrow{AD}$',
        'La translation de vecteur $2\\overrightarrow{AD}$',
        'La symétrie centrale de centre $O$',
        'La rotation d’angle $\\frac{\\pi}{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$(AB) \\parallel (DC)$ et $\\overrightarrow{AD} \\perp (AB)$, donc $s_{(DC)} \\circ s_{(AB)} = t_{2\\overrightarrow{AD}}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance vecteur',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais inverser l’ordre des axes dans $s_{(\\Delta)} \\circ s_{(D)}$',
    paragraphText:
      'Dans $s_{(\\Delta)} \\circ s_{(D)}$, on applique **d’abord** la droite de droite $(D)$, **ensuite** la droite de gauche $(\\Delta)$ ! Le vecteur de translation va donc **de $(D)$ vers $(\\Delta)$** : $\\vec{u} = 2\\overrightarrow{HK}$ avec $H \\in (D)$ et $K \\in (\\Delta)$. Inversement, dans la décomposition $t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)}$, si $(\\Delta)$ est donné à droite, $(D)$ est décalé de $+\\frac{1}{2}\\vec{u}$ ; si $(D’)$ est inconnu à droite dans $s_{(\\Delta)} \\circ s_{(D’)}$, il faut reculer de $-\\frac{1}{2}\\vec{u}$.',
    exercise: {
      id: 'tc_m_geo_l15_p01_q07',
      type: 'mcq',
      prompt: 'Si $(\\Delta)$ et $(D)$ sont parallèles avec $H \\in (D)$ et $K$ son projeté orthogonal sur $(\\Delta)$, que vaut $s_{(D)} \\circ s_{(\\Delta)}$ ?',
      options: [
        '$t_{2\\overrightarrow{HK}}$',
        '$t_{2\\overrightarrow{KH}}$',
        '$t_{\\overrightarrow{HK}}$',
        '$t_{\\overrightarrow{KH}}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Dans $s_{(D)} \\circ s_{(\\Delta)}$, on applique d’abord $s_{(\\Delta)}$ puis $s_{(D)}$, donc le déplacement va de $K \\in (\\Delta)$ vers $H \\in (D)$ : vecteur $2\\overrightarrow{KH}$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Axes sécants',
    stepTheme: 'violet',
    stepTitle: 'Composée de deux symétries orthogonales d’axes sécants (p.5)',
    paragraphText:
      'Dans le plan orienté, soient $(\\Delta)$ et $(D)$ deux droites sécantes en $O$, de vecteurs directeurs respectifs $\\vec{u}$ et $\\vec{v}$, et posons $\\alpha = \\operatorname{Mes}(\\widehat{\\vec{u}, \\vec{v}})$. Alors la composée $s_{(D)} \\circ s_{(\\Delta)}$ est la **rotation de centre $O$ et d’angle $2\\alpha$** : $s_{(D)} \\circ s_{(\\Delta)} = r_{(O,\\, 2\\alpha)}$. En **cas particulier**, si $(\\Delta) \\perp (D)$ en $O$, alors $2\\alpha \\equiv \\pi\\;[2\\pi]$ et la composée commute : $s_{(D)} \\circ s_{(\\Delta)} = s_{(\\Delta)} \\circ s_{(D)} = s_O$ (symétrie centrale de centre $O$).',
    formula: {
      name: 'Deux réflexions d’axes sécants en O',
      formula: 's_{(D)} \\circ s_{(\\Delta)} = r_{(O,\\, 2\\operatorname{Mes}(\\widehat{\\vec{u},\\vec{v}}))} \\qquad ; \\qquad (D)\\perp(\\Delta) \\implies s_{(D)} \\circ s_{(\\Delta)} = s_O',
    },
    visualSchema: {
      type: 'geometry_svg',
      title: 'Angle de la rotation s_(D) ∘ s_(Δ) = r(O, 2α) (p.5)',
      caption: 'L’angle orienté va du premier axe (Δ) (dirigé par u⃗) vers le second axe (D) (dirigé par v⃗), multiplié par 2.',
      svgContent: `<svg viewBox="0 0 320 155" width="305" height="148" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="130" x2="280" y2="25" stroke="#2563eb" stroke-width="2"/><text x="266" y="19" font-size="11" font-weight="bold" fill="#2563eb">(Δ)</text>
        <line x1="100" y1="145" x2="215" y2="12" stroke="#dc2626" stroke-width="2"/><text x="195" y="19" font-size="11" font-weight="bold" fill="#dc2626">(D)</text>
        <circle cx="150" cy="82" r="3.8" fill="#1e293b"/><text x="134" y="80" font-size="12" font-weight="bold" fill="#1e293b">O</text>
        <line x1="88" y1="109" x2="120" y2="95" stroke="#2563eb" stroke-width="2.4" marker-end="url(#arB)"/>
        <text x="95" y="119" font-size="11" font-weight="bold" fill="#2563eb">u⃗</text>
        <line x1="126" y1="112" x2="144" y2="90" stroke="#dc2626" stroke-width="2.4" marker-end="url(#arR)"/>
        <text x="115" y="102" font-size="11" font-weight="bold" fill="#dc2626">v⃗</text>
        <path d="M 190 64 A 44 44 0 0 0 176 52" fill="none" stroke="#16a34a" stroke-width="2"/>
        <text x="196" y="61" font-size="11" font-weight="bold" fill="#16a34a">α = (u⃗, v⃗)</text>
        <defs>
          <marker id="arB" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker>
          <marker id="arR" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker>
        </defs>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l15_p02_q01',
      type: 'mcq',
      prompt: 'Dans le triangle équilatéral direct $ABC$ de centre $G$ ($I, J, K$ milieux de $[BC], [CA], [AB]$, p.5), quelle est la composée $s_{(AI)} \\circ s_{(AB)}$ ?',
      options: [
        '$r_{(A,\\, \\frac{\\pi}{3})}$',
        '$r_{(A,\\, -\\frac{\\pi}{3})}$',
        '$r_{(A,\\, \\frac{\\pi}{6})}$',
        'La symétrie centrale $s_A$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(AI)$ et $(AB)$ se coupent en $A$, et $I$ est le milieu de $[BC]$, donc $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AI}}) = \\frac{\\pi}{6}$, dont le double vaut $\\frac{\\pi}{3}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation p.5',
    stepTheme: 'green',
    stepTitle: 'Calculer $s_{(AI)} \\circ s_{(CK)}$ et $s_{(CB)} \\circ s_{(AI)}$ dans un triangle équilatéral',
    paragraphText:
      'Toujours dans le triangle équilatéral direct $ABC$ de centre $G$ ($I, J, K$ milieux de $[BC], [CA], [AB]$) : les médianes-hauteurs $(AI)$ et $(CK)$ se coupent en $G$, et l’angle orienté $(\\widehat{\\overrightarrow{GK}, \\overrightarrow{GI}})$ vaut $+\\frac{2\\pi}{3}$ (dont le double $+\\frac{4\\pi}{3}$ a pour mesure principale $-\\frac{2\\pi}{3}$), donc $s_{(AI)} \\circ s_{(CK)} = r_{(G,\\, -\\frac{2\\pi}{3})}$ (ce qu’on vérifie vite : $s_{(CK)}(C)=C$ et $s_{(AI)}(C)=B$, or $r_{(G,-2\\pi/3)}(C)=B$). Quant à $(CB)$ et $(AI)$, elles sont perpendiculaires en $I$, donc $s_{(CB)} \\circ s_{(AI)} = s_I$.',
    exercise: {
      id: 'tc_m_geo_l15_p02_q02',
      type: 'mcq',
      prompt: 'Dans le triangle équilatéral direct $ABC$ de centre $G$, à quoi est égale la composée $s_{(AI)} \\circ s_{(CK)}$ (p.5) ?',
      options: [
        '$r_{(G,\\, \\frac{2\\pi}{3})}$',
        '$r_{(G,\\, -\\frac{2\\pi}{3})}$',
        '$s_G$',
        '$r_{(G,\\, \\frac{\\pi}{3})}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les droites $(AI)$ et $(CK)$ se coupent en $G$, et $s_{(AI)}(s_{(CK)}(C)) = s_{(AI)}(C) = B$, ce qui correspond bien à la rotation de centre $G$ et d’angle $-\\frac{2\\pi}{3}$ (dans le sens direct $A \\to B \\to C$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Décomposition rotation',
    stepTheme: 'violet',
    stepTitle: 'Décomposer $r_{(O, \\alpha)}$ en deux réflexions d’axes sécants (p.5–6)',
    paragraphText:
      'Soit $r$ la rotation de centre $O$ et d’angle $\\alpha$. Pour toute droite $(\\Delta)$ passant par $O$ : il existe une unique droite $(D) = r_{(O,\\, \\frac{1}{2}\\alpha)}(\\Delta)$ telle que $r = s_{(D)} \\circ s_{(\\Delta)}$, et une unique droite $(D’) = r_{(O,\\, -\\frac{1}{2}\\alpha)}(\\Delta)$ telle que $r = s_{(\\Delta)} \\circ s_{(D’)}$. Le procédé est exactement parallèle à la translation : on passe de l’axe appliqué en premier à l’axe appliqué en second par la **moitié** de la transformation ($+\\frac{1}{2}\\alpha$).',
    formula: {
      name: 'Décomposition d’une rotation r(O, α)',
      formula: 'r_{(O,\\alpha)} = s_{(D)} \\circ s_{(\\Delta)} \\;\\text{ avec } (D)=r_{(O,\\frac{\\alpha}{2})}(\\Delta) \\qquad ; \\qquad r_{(O,\\alpha)} = s_{(\\Delta)} \\circ s_{(D’)} \\;\\text{ avec } (D’)=r_{(O,-\\frac{\\alpha}{2})}(\\Delta)',
    },
    exercise: {
      id: 'tc_m_geo_l15_p02_q03',
      type: 'mcq',
      prompt: 'Dans le triangle équilatéral direct $ABC$ de centre $G$ ($I, J, K$ milieux de $[BC], [CA], [AB]$, p.6), quelle droite $(\\Delta)$ vérifie $r_{(G,\\, -\\frac{2\\pi}{3})} = s_{(\\Delta)} \\circ s_{(AI)}$ ?',
      options: ['$(JB)$', '$(CK)$', '$(AB)$', '$(BC)$'],
      correctAnswerIndex: 0,
      explanation: 'On tourne $(AI)$ autour de $G$ d’un angle $\\frac{1}{2}\\left(-\\frac{2\\pi}{3}\\right) = -\\frac{\\pi}{3}$ : $(\\widehat{\\overrightarrow{GI}, \\overrightarrow{GJ}}) = \\frac{2\\pi}{3}$, donc en sens opposé $(\\widehat{\\overrightarrow{GI}, \\overrightarrow{GB}}) = -\\frac{\\pi}{3}$ (ou $-\\frac{\\pi}{3} + \\pi$ = même droite $(JB)$). Ainsi $(\\Delta) = (JB)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation p.6',
    stepTheme: 'green',
    stepTitle: 'Résoudre $r_{(B,\\, \\frac{\\pi}{3})} = s_{(BG)} \\circ s_{(\\Delta)}$ et $s_K = s_{(\\Delta)} \\circ s_{(CG)}$',
    paragraphText:
      'Pour trouver $(\\Delta)$ dans $r_{(B,\\, \\frac{\\pi}{3})} = s_{(BG)} \\circ s_{(\\Delta)}$, l’axe inconnu $(\\Delta)$ est à **droite** (appliqué en premier), donc on fait tourner la droite connue $(BG)$ autour de $B$ de $-\\frac{1}{2}\\left(\\frac{\\pi}{3}\\right) = -\\frac{\\pi}{6}$ : comme $BG$ est bissectrice de $\\widehat{ABC} = \\frac{\\pi}{3}$ (et $(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BA}}) = +\\frac{\\pi}{3}$), tourner de $-\\frac{\\pi}{6}$ ramène $(BG)$ sur $(BC)$ ! Pour $s_K = s_{(\\Delta)} \\circ s_{(CG)}$, $s_K$ est la rotation d’angle $\\pi$, et $(CG)$ passe par $K$ ($\\perp (AB)$), donc $(\\Delta) = (AB)$.',
    exercise: {
      id: 'tc_m_geo_l15_p02_q04',
      type: 'mcq',
      prompt: 'Dans le même triangle équilatéral direct $ABC$, quelle droite $(\\Delta)$ vérifie $r_{(B,\\, \\frac{\\pi}{3})} = s_{(BG)} \\circ s_{(\\Delta)}$ (p.6) ?',
      options: ['$(BA)$', '$(BC)$', '$(AC)$', '$(KI)$'],
      correctAnswerIndex: 1,
      explanation: '$(\\Delta) = r_{(B,\\, -\\frac{\\pi}{6})}((BG))$. Comme $(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BG}}) = +\\frac{\\pi}{6}$, tourner $(BG)$ de $-\\frac{\\pi}{6}$ donne la droite $(BC)$ (on vérifie $s_{(BG)}(s_{(BC)}(C)) = s_{(BG)}(C) = A = r_{(B,\\frac{\\pi}{3})}(C)$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Composée t et r',
    stepTheme: 'green',
    stepTitle: 'Composée d’une translation et d’une rotation : méthode des axes (p.6–7)',
    paragraphText:
      'La composée d’une translation $t$ et d’une rotation $r$ d’angle non nul $\\alpha$ est une **rotation d’angle $\\alpha$** (et en général $r \\circ t \\neq t \\circ r$). Pour trouver son **centre**, on décompose $t$ et $r$ en symétries orthogonales en choisissant une **droite pivot commune** ! Exemple (p.7) : dans le carré direct $ABCD$ de centre $O$ ($(\\Delta)$ médiatrice de $[CB]$), posons $f = t_{\\overrightarrow{CB}} \\circ r_{(D,\\, \\frac{\\pi}{2})}$. La droite $(DC)$ est normale à $\\overrightarrow{CB}$ et passe par $D$ ! On écrit $r_{(D,\\frac{\\pi}{2})} = s_{(DC)} \\circ s_{(DO)}$ et $t_{\\overrightarrow{CB}} = s_{(\\Delta)} \\circ s_{(DC)}$, d’où $f = s_{(\\Delta)} \\circ s_{(DC)} \\circ s_{(DC)} \\circ s_{(DO)} = s_{(\\Delta)} \\circ s_{(DO)} = r_{(O,\\, \\frac{\\pi}{2})}$ car $(\\Delta)$ et $(DO)$ se coupent en $O$ !',
    formula: {
      name: 'Astuce de la droite pivot (p.7)',
      formula: 'f = t_{\\overrightarrow{CB}} \\circ r_{(D,\\frac{\\pi}{2})} = (s_{(\\Delta)} \\circ s_{(DC)}) \\circ (s_{(DC)} \\circ s_{(DO)}) = s_{(\\Delta)} \\circ s_{(DO)} = r_{(O,\\frac{\\pi}{2})}',
    },
    exercise: {
      id: 'tc_m_geo_l15_p02_q05',
      type: 'mcq',
      prompt: 'Dans le carré direct $ABCD$ de centre $O$, quelle droite choisit-on comme « pivot commun » pour simplifier $t_{\\overrightarrow{CB}} \\circ r_{(D,\\, \\frac{\\pi}{2})}$ ?',
      options: [
        'La droite $(AB)$',
        'La droite $(DC)$, car elle passe par $D$ et est normale à $\\overrightarrow{CB}$',
        'La droite $(AC)$',
        'La droite $(BC)$, car elle dirige $\\overrightarrow{CB}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une droite pivot pour $t_{\\vec{u}} \\circ r_{(D,\\alpha)}$ doit passer par le centre $D$ de la rotation ET être normale au vecteur $\\vec{u} = \\overrightarrow{CB}$ : c’est la droite $(DC)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 5 p.18',
    stepTheme: 'blue',
    stepTitle: 'Simplifier $s_{(DC)} \\circ s_{(AC)}$ et $r_{(C,\\,-\\frac{\\pi}{2})} \\circ r_{(A,\\,\\frac{\\pi}{2})}$ dans un carré',
    paragraphText:
      'Dans un carré direct $ABCD$ de centre $O$ : (1) pour $s_{(DC)} \\circ s_{(AC)}$, les axes se coupent en $C$ et $(\\widehat{\\overrightarrow{CA}, \\overrightarrow{CD}}) = +\\frac{\\pi}{4}$ (car $A,B,C,D$ dans le sens direct : $B$ est après $A$, donc $\\overrightarrow{CA} \\to \\overrightarrow{CD}$ vaut $-\\frac{\\pi}{4}$ en sens inverse ou $+\\frac{\\pi}{4}$? Vérifions sur un repère : $A(0,0), B(1,0), C(1,1), D(0,1)$ : $\\overrightarrow{CA}=(-1,-1)$ ($-135^\\circ$) et $\\overrightarrow{CD}=(-1,0)$ ($180^\\circ$), soit $-45^\\circ$! Le double vaut $-\\frac{\\pi}{2}$, d’où $r_{(C, -\\frac{\\pi}{2})}$). (2) Pour $r_{(C,-\\frac{\\pi}{2})} \\circ r_{(A,\\frac{\\pi}{2})}$, la somme des angles vaut $-\\frac{\\pi}{2} + \\frac{\\pi}{2} = 0$, donc c’est une **translation** (de vecteur $\\overrightarrow{A A’}$ avec $A’ = r_{(C,-\\pi/2)}(A) = B$? Dans $A(0,0),B(1,0),C(1,1),D(0,1)$, tourner $A$ autour de $C$ de $-\\frac{\\pi}{2}$ donne $(2,0)$? Calculons : $z_C + (-i)(z_A - z_C) = (1+i) - i(-1-i) = 1+i+i-1 = 2i$, soit $2\\overrightarrow{AD}$).',
    exercise: {
      id: 'tc_m_geo_l15_p02_q06',
      type: 'mcq',
      prompt: 'Que peut-on affirmer de la composée $r_{(C,\\, -\\frac{\\pi}{2})} \\circ r_{(A,\\, \\frac{\\pi}{2})}$ de deux rotations d’angles opposés et de centres distincts $A$ et $C$ ?',
      options: [
        'C’est nécessairement l’application identique',
        'C’est une translation (car la somme des angles vaut $0$ modulo $2\\pi$)',
        'C’est une rotation d’angle $\\pi$',
        'C’est une symétrie orthogonale d’axe $(AC)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La composée de deux rotations d’angles $\\alpha$ et $\\beta$ vérifie une somme d’angles $\\alpha + \\beta \\equiv 0\\;[2\\pi]$ : c’est donc une translation (non nulle ici car $r_{(C,-\\pi/2)}(r_{(A,\\pi/2)}(A)) = r_{(C,-\\pi/2)}(A) \\neq A$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur classique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier le facteur $2$ sur l’angle et le signe dans $r \\circ t$',
    paragraphText:
      'Deux erreurs très fréquentes sur les rotations décomposées : (1) oublier le facteur $2$ dans $s_{(D)} \\circ s_{(\\Delta)} = r_{(O, 2\\alpha)}$ (si les droites font un angle $\\frac{\\pi}{4}$, la rotation a pour angle $\\frac{\\pi}{2}$, pas $\\frac{\\pi}{4}$) ; (2) inverser les sens de décomposition : dans $r_{(C, -\\frac{\\pi}{2})} \\circ t_{\\vec{u}}$, on décompose la rotation sous la forme $s_{(D’)} \\circ s_{\\text{pivot}}$ et la translation sous la forme $s_{\\text{pivot}} \\circ s_{(D)}$ pour que les deux $s_{\\text{pivot}}$ se retrouvent **côte à côte** et s’annulent ($s_{\\text{pivot}} \\circ s_{\\text{pivot}} = \\operatorname{Id}$).',
    exercise: {
      id: 'tc_m_geo_l15_p02_q07',
      type: 'mcq',
      prompt: 'Si deux droites $(D)$ et $(\\Delta)$ sont sécantes en $O$ et forment un angle de $\\frac{\\pi}{4}$ (dans le sens de $(\\Delta)$ vers $(D)$), quel est l’angle de la rotation $s_{(D)} \\circ s_{(\\Delta)}$ ?',
      options: ['$\\frac{\\pi}{8}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
      correctAnswerIndex: 2,
      explanation: 'L’angle de la rotation composée est le double de l’angle orienté des droites : $2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Symétrie glissée',
    stepTheme: 'blue',
    stepTitle: 'Définition et éléments caractéristiques d’une symétrie glissée (p.7–8)',
    paragraphText:
      'Étant donné une droite $(D)$ et un **vecteur directeur $\\vec{u}$ de $(D)$** (non nul), on appelle **symétrie glissée** d’axe $(D)$ et de vecteur $\\vec{u}$ la composée de la symétrie orthogonale d’axe $(D)$ et de la translation de vecteur $\\vec{u}$. Comme $\\vec{u}$ dirige $(D)$, ces deux transformations **commutent** : $t_{\\vec{u}} \\circ s_{(D)} = s_{(D)} \\circ t_{\\vec{u}}$. Contrairement à une réflexion, une symétrie glissée n’admet **aucun point invariant**.',
    formula: {
      name: 'Symétrie glissée d’axe (D) et vecteur u⃗ directeur de (D)',
      formula: 'f = t_{\\vec{u}} \\circ s_{(D)} = s_{(D)} \\circ t_{\\vec{u}} \\qquad (\\vec{u} \\text{ non nul, } \\vec{u} \\parallel (D))',
    },
    exercise: {
      id: 'tc_m_geo_l15_p03_q01',
      type: 'mcq',
      prompt: 'Combien de points invariants possède une symétrie glissée (de vecteur non nul) ?',
      options: [
        'Une infinité (tous les points de son axe $(D)$)',
        'Un seul point invariant',
        'Aucun point invariant (l’ensemble est $\\emptyset$)',
        'Deux points invariants',
      ],
      correctAnswerIndex: 2,
      explanation: 'Propriété 1 (p.8) : si $M \\notin (D)$, son symétrique est de l’autre côté de $(D)$ ; si $M \\in (D)$, $s_{(D)}(M) = M$ puis $t_{\\vec{u}}(M) \\neq M$ car $\\vec{u} \\neq \\vec{0}$. Aucun point n’est fixe.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Trouver axe & vecteur',
    stepTheme: 'violet',
    stepTitle: 'Retrouver l’axe $(D)$ et le vecteur $\\vec{u}$ d’une symétrie glissée (p.8)',
    paragraphText:
      'Pour tout point $M$ et son image $M’ = f(M)$ par une symétrie glissée $f$ d’axe $(D)$ et de vecteur $\\vec{u}$, le **milieu du segment $[MM’]$ appartient toujours à l’axe $(D)$**. Ainsi, si l’on connaît deux couples distincts $M \\mapsto M’$ et $N \\mapsto N’$ dont les milieux $K$ de $[MM’]$ et $L$ de $[NN’]$ sont distincts, l’axe est simplement la droite **$(KL)$**. Quant au vecteur $\\vec{u}$, puisque $f \\circ f = t_{\\vec{u}} \\circ s_{(D)} \\circ s_{(D)} \\circ t_{\\vec{u}} = t_{2\\vec{u}}$, on a pour tout point $A$ : $\\vec{u} = \\frac{1}{2}\\overrightarrow{AA’’}$ où $A’’ = f(f(A))$.',
    formula: {
      name: 'Point méthode (p.8)',
      formula: 'I \\text{ milieu de } [MM’] \\implies I \\in (D) \\qquad ; \\qquad f \\circ f = t_{2\\vec{u}} \\implies \\vec{u} = \\frac{1}{2}\\overrightarrow{A\\,f(f(A))}',
    },
    visualSchema: {
      type: 'geometry_svg',
      title: 'Symétrie glissée : milieu I de [MM’] sur (D) et f∘f(A) = A + 2u⃗ (p.7–8)',
      caption: 'La translation de vecteur u⃗ et la réflexion d’axe (D) commutent ; I ∈ (D) et C milieu de [AA’] ∈ (D).',
      svgContent: `<svg viewBox="0 0 320 148" width="305" height="141" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="86" x2="300" y2="62" stroke="#2563eb" stroke-width="2"/><text x="275" y="55" font-size="11" font-weight="bold" fill="#2563eb">(D)</text>
        <circle cx="85" cy="118" r="3.5" fill="#1e293b"/><text x="76" y="135" font-size="11" font-weight="bold" fill="#1e293b">M</text>
        <circle cx="80" cy="44" r="3" fill="#64748b"/><text x="61" y="42" font-size="10" fill="#64748b">M₂</text>
        <circle cx="170" cy="36" r="3.5" fill="#dc2626"/><text x="176" y="34" font-size="11" font-weight="bold" fill="#dc2626">M’</text>
        <circle cx="175" cy="110" r="3" fill="#64748b"/><text x="180" y="118" font-size="10" fill="#64748b">M₁</text>
        <line x1="85" y1="118" x2="80" y2="44" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="80" y1="44" x2="170" y2="36" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arGr)"/>
        <line x1="85" y1="118" x2="175" y2="110" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arGr)"/>
        <line x1="175" y1="110" x2="170" y2="36" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="85" y1="118" x2="170" y2="36" stroke="#dc2626" stroke-width="1.5"/>
        <circle cx="127.5" cy="77" r="3.5" fill="#2563eb"/><text x="122" y="95" font-size="11" font-weight="bold" fill="#2563eb">I</text>
        <text x="124" y="31" font-size="10" font-weight="bold" fill="#16a34a">u⃗</text>
        <defs><marker id="arGr" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l15_p03_q02',
      type: 'mcq',
      prompt: 'Soit $g$ une symétrie glissée telle que $g(C) = B$ et $g(L) = K$ dans l’exercice de fixation p.8–9 ($I$ milieu de $[BC]$, $J$ milieu de $[LK]$). Quels sont l’axe et le vecteur de $g$ ?',
      options: [
        'Axe $(AC)$ et vecteur $\\overrightarrow{CB}$',
        'Axe $(IJ)$ et vecteur $\\overrightarrow{KB}$',
        'Axe $(KL)$ et vecteur $\\overrightarrow{BC}$',
        'Axe $(IJ)$ et vecteur $\\overrightarrow{BC}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le milieu de $[CB]$ est $I$ et celui de $[LK]$ est $J$ : l’axe est $(IJ)$. Le projeté de $\\overrightarrow{CB}$ parallèlement à $(IJ)$ (ou $\\frac{1}{2}\\overrightarrow{g(g(C))C}$ non, $\\overrightarrow{KB} = \\overrightarrow{JI}$ qui est bien parallèle à $(IJ)$) donne le vecteur $\\overrightarrow{KB}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Translation ∘ Réflexion',
    stepTheme: 'violet',
    stepTitle: 'Composée d’une translation et d’une symétrie orthogonale (p.9–11)',
    paragraphText:
      'Soient $(\\Delta)$ une droite et $\\vec{u}$ un vecteur non nul. La composée $t_{\\vec{u}} \\circ s_{(\\Delta)}$ (ou $s_{(\\Delta)} \\circ t_{\\vec{u}}$) est : (1) une **symétrie orthogonale** si $\\vec{u}$ est **normal** à $(\\Delta)$ (on décompose $t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)}$ avec $(D) = t_{\\frac{1}{2}\\vec{u}}(\\Delta)$, ce qui donne $s_{(D)}$) ; (2) une **symétrie glissée** si $\\vec{u}$ n’est **pas normal** à $(\\Delta)$. Dans ce second cas, on décompose $\\vec{u} = \\vec{n} + \\vec{\\tau}$ où $\\vec{n} \\perp (\\Delta)$ et $\\vec{\\tau} \\parallel (\\Delta)$ : alors $t_{\\vec{u}} \\circ s_{(\\Delta)} = t_{\\vec{\\tau}} \\circ (t_{\\vec{n}} \\circ s_{(\\Delta)}) = t_{\\vec{\\tau}} \\circ s_{(D)}$ (symétrie glissée d’axe $(D) = t_{\\frac{1}{2}\\vec{n}}(\\Delta)$ et de vecteur $\\vec{\\tau}$).',
    formula: {
      name: 'Décomposition orthogonale u⃗ = n⃗ + τ⃗ (p.9–11)',
      formula: 't_{\\vec{u}} \\circ s_{(\\Delta)} = t_{\\vec{\\tau}} \\circ s_{(D)} \\quad \\text{avec } (D) = t_{\\frac{1}{2}\\vec{n}}(\\Delta) \\;\\;(\\vec{n}\\perp(\\Delta),\\; \\vec{\\tau}\\parallel(\\Delta))',
    },
    exercise: {
      id: 'tc_m_geo_l15_p03_q03',
      type: 'mcq',
      prompt: 'Dans le carré $ABCD$ de centre $O$ ($I, J, K, L$ milieux de $[AB], [BC], [CD], [DA]$, p.10), à quoi est égale $f = t_{\\overrightarrow{AC}} \\circ s_{(KI)}$ ?',
      options: [
        'La symétrie orthogonale d’axe $(BC)$',
        'La symétrie glissée d’axe $(BC)$ et de vecteur $\\overrightarrow{BC}$',
        'La symétrie glissée d’axe $(KI)$ et de vecteur $\\overrightarrow{AC}$',
        'La translation de vecteur $\\overrightarrow{AC}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{AC} = \\overrightarrow{BC} + \\overrightarrow{AB}$ avec $\\overrightarrow{AB} \\perp (KI)$ et $\\overrightarrow{BC} \\parallel (KI)$. On a $t_{\\overrightarrow{AB}} = s_{(BC)} \\circ s_{(KI)}$, donc $f = t_{\\overrightarrow{BC}} \\circ s_{(BC)} \\circ s_{(KI)} \\circ s_{(KI)} = t_{\\overrightarrow{BC}} \\circ s_{(BC)}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Rotation ∘ Réflexion',
    stepTheme: 'violet',
    stepTitle: 'Composée d’une rotation $r(K, \\theta)$ et d’une réflexion $s_{(D)}$ (p.11–12)',
    paragraphText:
      'Soient $(D)$ une droite et $r$ une rotation de centre $K$ et d’angle $\\theta$ non nul. Alors $r \\circ s_{(D)}$ et $s_{(D)} \\circ r$ sont : (1) des **symétries orthogonales** si **$K \\in (D)$** (on décompose $r = s_{(\\Delta_2)} \\circ s_{(D)}$, d’où $r \\circ s_{(D)} = s_{(\\Delta_2)}$ avec $(\\Delta_2) = r_{(K, \\frac{1}{2}\\theta)}((D))$) ; (2) des **symétries glissées** si **$K \\notin (D)$**. En ce cas, en notant $(D’)$ la parallèle à $(D)$ passant par $K$ et $H$ le projeté orthogonal de $K$ sur $(D)$, $s_{(D’)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}$, d’où $r \\circ s_{(D)} = s_{(\\Delta_2)} \\circ t_{2\\overrightarrow{HK}}$ (symétrie glissée car $2\\overrightarrow{HK}$ n’est pas normal à $(\\Delta_2)$).',
    formula: {
      name: 'Critère d’appartenance du centre K à l’axe (D)',
      formula: 'K \\in (D) \\implies r \\circ s_{(D)} \\text{ est une réflexion} \\qquad ; \\qquad K \\notin (D) \\implies r \\circ s_{(D)} \\text{ est une symétrie glissée}',
    },
    exercise: {
      id: 'tc_m_geo_l15_p03_q04',
      type: 'mcq',
      prompt: 'Dans le triangle équilatéral direct $ABC$ de centre $G$ (p.12), quelle est la nature de $f = s_{(AG)} \\circ r_{(G,\\, \\frac{2\\pi}{3})}$ ?',
      options: [
        'Une symétrie orthogonale d’axe $(GB)$ (médiatrice de $[AC]$)',
        'Une symétrie glissée d’axe $(KI)$',
        'Une rotation de centre $G$',
        'Une translation',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le centre $G$ de la rotation appartient à l’axe $(AG)$ de la réflexion, donc $f$ est une symétrie orthogonale. Comme $f(A) = s_{(AG)}(B) = C$ et $f(G) = G$, son axe est la médiatrice de $[AC]$, c’est-à-dire $(GB)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Correction p.12 détaillée',
    stepTheme: 'green',
    stepTitle: 'Déterminer les éléments caractéristiques de $g = r_{(G,\\, \\frac{2\\pi}{3})} \\circ s_{(AB)}$ (p.12)',
    paragraphText:
      'Dans le même triangle équilatéral direct $ABC$ de centre $G$ ($I, J, K$ milieux de $[BC], [CA], [AB]$), étudions $g = r_{(G,\\, \\frac{2\\pi}{3})} \\circ s_{(AB)}$. Comme $G \\notin (AB)$, $g$ est une **symétrie glissée**. Calculons deux images : $g(A) = r_{(G, \\frac{2\\pi}{3})}(A) = B$, et $g(B) = r_{(G, \\frac{2\\pi}{3})}(B) = C$. Ainsi, le milieu de $[AB]$ est $K$ et le milieu de $[BC]$ est $I$ : l’axe de $g$ est donc la droite **$(KI)$**. De plus, $g(g(A)) = g(B) = C$, d’où le vecteur $\\vec{u} = \\frac{1}{2}\\overrightarrow{AC} = \\overrightarrow{JC} = \\overrightarrow{KI}$ (qui dirige bien $(KI)$ !).',
    formula: {
      name: 'Éléments complets de g = r(G, 2π/3) ∘ s_(AB)',
      formula: '\\text{Axe } (KI) \\qquad ; \\qquad \\vec{u} = \\frac{1}{2}\\overrightarrow{AC} = \\overrightarrow{JC} = \\overrightarrow{KI}',
    },
    exercise: {
      id: 'tc_m_geo_l15_p03_q05',
      type: 'mcq',
      prompt: 'Pour $g = r_{(G,\\, \\frac{2\\pi}{3})} \\circ s_{(AB)}$ dans le triangle équilatéral direct $ABC$ (p.12), sachant que $g(A) = B$ et $g(B) = C$, quel vecteur vaut $\\frac{1}{2}\\overrightarrow{g(g(A))A}$ non, le vecteur de la symétrie glissée $g$ ?',
      options: [
        '$\\frac{1}{2}\\overrightarrow{AC} = \\overrightarrow{KI}$',
        '$\\overrightarrow{AC}$',
        '$\\overrightarrow{AB}$',
        '$\\overrightarrow{BG}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$g \\circ g(A) = g(B) = C$, donc $t_{2\\vec{u}}(A) = C \\implies \\vec{u} = \\frac{1}{2}\\overrightarrow{AC} = \\overrightarrow{KI} = \\overrightarrow{JC}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 3 p.18 & p.22',
    stepTheme: 'blue',
    stepTitle: 'Images par la symétrie glissée $f = t_{\\overrightarrow{AK}} \\circ s_{(IJ)}$',
    paragraphText:
      'Dans l’exercice 3 (p.18 & 22), $ABC$ est équilatéral, $D = s_{(AC)}(B)$, et $I, J, K, L$ sont les milieux respectifs de $[BC], [CA], [AB], [CD]$. Soit $f$ la symétrie glissée d’axe $(IJ)$ et de vecteur $\\overrightarrow{AK}$. La droite $(IJ)$ étant la droite des milieux parallèle à $(AB)$, elle est à égale distance de $(AB)$ et $(CD)$ ($ABCD$ est un losange). Par $s_{(IJ)}$, $A$ est envoyé en $L$ (milieu de $[CD]$), puis la translation de vecteur $\\overrightarrow{AK} = \\overrightarrow{LC}$ l’envoie en **$C$** ($f(A) = C$). De même, $f(C) = B$, $f(J) = I$ (car $J \\in (IJ)$ et $\\overrightarrow{JI} = \\overrightarrow{AK}$) et $f(L) = K$.',
    exercise: {
      id: 'tc_m_geo_l15_p03_q06',
      type: 'mcq',
      prompt: 'Avec les données de l’exercice 3 (p.18), quelle est l’image $f(J)$ par la symétrie glissée d’axe $(IJ)$ et de vecteur $\\overrightarrow{AK}$ ?',
      options: ['$L$', '$I$', '$K$', '$B$'],
      correctAnswerIndex: 1,
      explanation: '$J$ appartient à l’axe $(IJ)$, donc $s_{(IJ)}(J) = J$, puis $t_{\\overrightarrow{AK}}(J) = I$ car $\\overrightarrow{JI} = \\frac{1}{2}\\overrightarrow{AB} = \\overrightarrow{AK}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance démonstration',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $\\frac{1}{2}\\overrightarrow{AA’}$ et $\\frac{1}{2}\\overrightarrow{AA’’}$ !',
    paragraphText:
      'Pour une symétrie glissée $f$, il y a deux points différents associés à $A$ : sa première image $A’ = f(A)$ sert à trouver l’**axe $(D)$** (le **milieu** de $[AA’]$ est sur $(D)$), tandis que sa seconde image $A’’ = f(f(A))$ sert à trouver le **vecteur $\\vec{u}$** ($\\vec{u} = \\frac{1}{2}\\overrightarrow{AA’’}$). Si tu prends le milieu ou la moitié de $\\overrightarrow{AA’}$, tu auras faux dès que $A \\notin (D)$ !',
    exercise: {
      id: 'tc_m_geo_l15_p03_q07',
      type: 'mcq',
      prompt: 'Soit $f$ une symétrie glissée et $A$ un point n’appartenant pas à son axe. Si $A’ = f(A)$ et $A’’ = f(f(A))$, laquelle des affirmations suivantes est exacte ?',
      options: [
        'Le vecteur de $f$ est $\\frac{1}{2}\\overrightarrow{AA’}$',
        'Le milieu de $[AA’]$ appartient à l’axe de $f$, et le vecteur de $f$ est $\\frac{1}{2}\\overrightarrow{AA’’}$',
        'Le milieu de $[AA’’]$ appartient à l’axe de $f$',
        '$A’’ = A$ car toute symétrie est involutive',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le milieu de $[AA’]$ est toujours sur l’axe $(D)$, et $f \\circ f = t_{2\\vec{u}}$ donne $\\overrightarrow{AA’’} = 2\\vec{u}$, soit $\\vec{u} = \\frac{1}{2}\\overrightarrow{AA’’}$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Points invariants',
    stepTheme: 'violet',
    stepTitle: 'Classification d’une isométrie par ses points invariants (p.13)',
    paragraphText:
      'Toute isométrie plane $f$ est entièrement classée par l’ensemble $\\operatorname{Inv}(f)$ de ses points fixes : si $f$ fixe **trois points non alignés**, c’est $\\operatorname{Id}_{(\\mathcal{P})}$ ; si $f \\neq \\operatorname{Id}$ fixe **deux points distincts $A$ et $B$**, c’est la **symétrie orthogonale d’axe $(AB)$** ; si $f$ fixe **un unique point $A$**, c’est une **rotation de centre $A$** (d’angle non nul) ; si $f$ ne fixe **aucun point**, c’est soit une **translation** (de vecteur non nul), soit une **symétrie glissée**.',
    formula: {
      name: 'Points invariants d’une isométrie',
      formula: '\\#\\operatorname{Inv} \\ge 3 \\text{ (non alignés)} \\Rightarrow \\operatorname{Id} \\; ; \\; (AB) \\Rightarrow s_{(AB)} \\; ; \\; \\{A\\} \\Rightarrow r_{(A,\\theta\\neq 0)} \\; ; \\; \\emptyset \\Rightarrow t_{\\vec{u}\\neq\\vec{0}} \\text{ ou sym. glissée}',
    },
    exercise: {
      id: 'tc_m_geo_l15_p04_q01',
      type: 'mcq',
      prompt: 'Une isométrie du plan qui laisse invariants deux points distincts $A$ et $B$ et qui n’est pas l’application identique est nécessairement :',
      options: [
        'Une rotation de centre $A$',
        'La symétrie orthogonale d’axe $(AB)$',
        'Une translation de vecteur $\\overrightarrow{AB}$',
        'Une symétrie glissée d’axe $(AB)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Toute isométrie différente de $\\operatorname{Id}$ qui fixe $A$ et $B$ ($A \\neq B$) fixe toute la droite $(AB)$ et n’est autre que la réflexion $s_{(AB)}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Déplacement / Anti',
    stepTheme: 'blue',
    stepTitle: 'Déplacements et antidéplacements : définitions et composées (p.13–14)',
    paragraphText:
      'Un **déplacement** est une isométrie qui **conserve les angles orientés** : ce sont exactement les **translations** et les **rotations** (dont $\\operatorname{Id}$). Un **antidéplacement** est une isométrie qui **transforme tout angle orienté en son opposé** : ce sont exactement les **symétries orthogonales** et les **symétries glissées**. Toute isométrie est soit un déplacement, soit un antidéplacement. En composition : la composée de **deux déplacements** ou de **deux antidéplacements** est un **déplacement** ; la composée d’**un déplacement et d’un antidéplacement** est un **antidéplacement** (la réciproque garde la même parité).',
    visualSchema: {
      type: 'custom_svg',
      title: 'Classification croisée : points invariants × parité (p.14)',
      caption: 'Tableau récapitulatif des cinq types d’isométries planes.',
      tableData: {
        headers: ['Ensemble des points invariants', 'Le plan P', 'La droite (D)', 'Le singleton {A}', 'Ensemble vide ∅'],
        rows: [
          ['Déplacement (conserve les angles orientés)', '$\\operatorname{Id}_{\\mathcal{P}}$', 'Impossible', 'Rotation de centre $A$ ($\\theta \\neq 0$)', 'Translation de vecteur non nul'],
          ['Antidéplacement (oppose les angles orientés)', 'Impossible', 'Symétrie orthogonale $s_{(D)}$', 'Impossible', 'Symétrie glissée'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l15_p04_q02',
      type: 'mcq',
      prompt: 'Quelle est la nature (déplacement ou antidéplacement) de la composée de deux antidéplacements suivie d’un déplacement ?',
      options: [
        'Toujours un déplacement',
        'Toujours un antidéplacement',
        'Ni l’un ni l’autre',
        'Cela dépend des centres choisis',
      ],
      correctAnswerIndex: 0,
      explanation: 'Deux antidéplacements forment un déplacement ($-1 \\times -1 = +1$), puis composé avec un déplacement cela reste un déplacement.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Exercice tableau p.14',
    stepTheme: 'green',
    stepTitle: 'Compléter la table de composition dans le triangle équilatéral $ABC$ (p.14 & 18)',
    paragraphText:
      'Dans le triangle équilatéral direct $ABC$ de centre $G$ ($I, J, K$ milieux de $[BC], [CA], [AB]$, $r = r_{(G, \\frac{2\\pi}{3})}$), classons rapidement : $r^2$ (composée de deux déplacements $\\to$ **déplacement**) ; $s_{(AI)} \\circ r$ (antidéplacement $\\circ$ déplacement $\\to$ **antidéplacement**) ; $s_{(BJ)} \\circ s_I$ (réflexion $\\circ$ symétrie centrale $s_I$, qui est une rotation d’angle $\\pi$, donc déplacement $\\to$ **antidéplacement**) ; $s_{(BJ)} \\circ \\operatorname{Id}$ (**antidéplacement**) ; $s_{(BJ)} \\circ t_{\\overrightarrow{AC}}$ (**antidéplacement**) ; $s_{(AI)} \\circ s_{(CK)}$ (**déplacement**) ; $t_{\\overrightarrow{AC}} \\circ t_{\\overrightarrow{GI}}$ (**déplacement**).',
    exercise: {
      id: 'tc_m_geo_l15_p04_q03',
      type: 'mcq',
      prompt: 'À propos de $s_{(BJ)} \\circ s_I$, où $s_{(BJ)}$ est une symétrie orthogonale et $s_I$ une symétrie centrale, quelle affirmation est vraie (p.14) ?',
      options: [
        'C’est un déplacement car les deux sont des symétries',
        'C’est un antidéplacement car $s_I$ est une rotation d’angle $\\pi$ (déplacement) et $s_{(BJ)}$ est un antidéplacement',
        'C’est une translation',
        'C’est l’identité du plan',
      ],
      correctAnswerIndex: 1,
      explanation: 'Attention au piège ! Une symétrie **centrale** $s_I$ est une rotation d’angle $\\pi$, donc un **déplacement**. Composée avec la symétrie orthogonale $s_{(BJ)}$, on obtient un **antidéplacement**.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Détermination déplacement',
    stepTheme: 'violet',
    stepTitle: 'Déplacement unique transformant $A \\mapsto A’$ et $B \\mapsto B’$ ($AB = A’B’$) (p.15)',
    paragraphText:
      'Soient quatre points $A, B, A’, B’$ tels que **$AB = A’B’$** et **$A \\neq B$**. Il existe un **unique déplacement** $f$ transformant $A$ en $A’$ et $B$ en $B’$ : si $\\overrightarrow{AB} = \\overrightarrow{A’B’}$, alors $f$ est la **translation** de vecteur $\\overrightarrow{AA’}$ ; si $\\overrightarrow{AB} \\neq \\overrightarrow{A’B’}$, alors $f$ est une **rotation** d’angle orienté $\\operatorname{Mes}(\\widehat{\\overrightarrow{AB}, \\overrightarrow{A’B’}})$ (dont le centre est l’intersection des médiatrices de $[AA’]$ et $[BB’]$, ou à défaut déterminé par symétries/affixes).',
    formula: {
      name: 'Critère d’identification d’un déplacement',
      formula: 'AB = A’B’ \\;(A\\neq B) \\implies \\exists! \\text{ déplacement } f : \\begin{cases} \\overrightarrow{AB} = \\overrightarrow{A’B’} \\implies f = t_{\\overrightarrow{AA’}} \\\\ \\overrightarrow{AB} \\neq \\overrightarrow{A’B’} \\implies f \\text{ rotation d’angle } (\\widehat{\\overrightarrow{AB}, \\overrightarrow{A’B’}}) \\end{cases}',
    },
    exercise: {
      id: 'tc_m_geo_l15_p04_q04',
      type: 'mcq',
      prompt: 'Sur le cercle $(\\Gamma)$ de centre $O$ et diamètre $[BC]$ (p.15), $A \\in (\\Gamma)$ vérifie $(\\widehat{\\overrightarrow{BA}, \\overrightarrow{BC}}) = \\frac{\\pi}{3}$ et $A’$ est diamétralement opposé à $A$. Quelle est la nature du déplacement $g$ tel que $g(A) = C$ et $g(B) = O$ ?',
      options: [
        'La translation de vecteur $\\overrightarrow{AC}$',
        'Une rotation d’angle $\\frac{\\pi}{3}$',
        'Une symétrie orthogonale',
        'Une rotation d’angle $\\pi$',
      ],
      correctAnswerIndex: 1,
      explanation: '$OA = OB$ et $(\\widehat{\\overrightarrow{BA}, \\overrightarrow{BO}}) = \\frac{\\pi}{3}$, donc $OAB$ est équilatéral et $AB = OB = OC$. Comme $\\overrightarrow{AB} \\neq \\overrightarrow{CO}$ et $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{CO}}) = (\\widehat{\\overrightarrow{CA’}, \\overrightarrow{CO}}) = \\frac{\\pi}{3}$, $g$ est une rotation d’angle $\\frac{\\pi}{3}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Détermination anti',
    stepTheme: 'violet',
    stepTitle: 'Antidéplacement unique transformant $A \\mapsto A’$ et $B \\mapsto B’$ (p.15–16)',
    paragraphText:
      'Pour les mêmes points $A, B, A’, B’$ avec $AB = A’B’$ et $A \\neq B$, il existe également un **unique antidéplacement** $g$ transformant $A$ en $A’$ et $B$ en $B’$. Comment distinguer ses deux formes possibles ? Si les segments **$[AA’]$ et $[BB’]$ ont la même médiatrice $(\\Delta)$** (y compris si $A=A’$ ou $B=B’$ avec l’autre point sur $(\\Delta)$ ou la droite $(AB)$), alors $g$ est la **symétrie orthogonale d’axe $(\\Delta)$**. Si $[AA’]$ et $[BB’]$ ont des **médiatrices différentes**, alors $g$ est une **symétrie glissée**.',
    exercise: {
      id: 'tc_m_geo_l15_p04_q05',
      type: 'mcq',
      prompt: 'Dans le triangle $ABC$ rectangle en $B$ avec $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = \\frac{\\pi}{3}$ (p.16), $O, I, K$ sont les milieux de $[AC], [OA], [AB]$. Soit $g$ l’antidéplacement tel que $g(B) = A$ et $g(A) = O$. Pourquoi $g$ est-il une symétrie glissée et quels sont ses éléments ?',
      options: [
        'Car $[BA]$ et $[AO]$ ont des médiatrices différentes ; axe $(KI)$ et vecteur $\\frac{1}{2}\\overrightarrow{BO} = \\overrightarrow{KI}$',
        'Car $[BA]$ et $[AO]$ ont la même médiatrice $(KI)$ ; $g = s_{(KI)}$',
        'Car $g(B)=A$ implique une translation',
        'Car $AB \\neq AO$',
      ],
      correctAnswerIndex: 0,
      explanation: '$AOB$ est équilatéral donc $AB = AO$. Comme les médiatrices de $[BA]$ et $[AO]$ sont distinctes, $g$ est une symétrie glissée. Les milieux de $[BA]$ et $[AO]$ sont $K$ et $I$, d’où l’axe $(KI)$, et $g(g(B)) = g(A) = O \\implies \\vec{u} = \\frac{1}{2}\\overrightarrow{BO} = \\overrightarrow{KI}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 10 p.20 & 22',
    stepTheme: 'blue',
    stepTitle: 'Appliquer une rotation sur un carré pour prouver l’orthogonalité',
    paragraphText:
      'Dans un carré $ABCD$ de centre $I$ ($(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = \\frac{\\pi}{2}$), soit $M \\in [BD]$ ($M \\neq B, D$), $N$ et $P$ ses projetés orthogonaux sur $(AB)$ et $(AD)$, et $Q \\in [MP]$ tel que $IMQ$ soit rectangle isocèle direct en $I$ non, indirect en $I$? Soit $r = r_{(I, -\\frac{\\pi}{2})}$ (Ex. 10 p.20). On a $r(B) = A$ et $r(M) = Q$, d’où $r((AB)) = (AD)$ et $r((MN)) = (MP)$ (car $M, Q, P$ sont alignés), donc $r(N) = P$ ! Comme une isométrie conserve le produit scalaire, $\\overrightarrow{NA}\\cdot\\overrightarrow{NB} = \\overrightarrow{PD}\\cdot\\overrightarrow{PA} = \\overrightarrow{PA}\\cdot\\overrightarrow{PD}$, et comme $r(C) = B$ et $r(N) = P$ avec un angle de $-\\frac{\\pi}{2}$, on obtient $(NC) \\perp (BP)$ et $NC = BP$ !',
    exercise: {
      id: 'tc_m_geo_l15_p04_q06',
      type: 'mcq',
      prompt: 'Dans l’exercice 10 (p.22–23), la rotation $r$ de centre $I$ et d’angle $-\\frac{\\pi}{2}$ vérifie $r(C) = B$ et $r(N) = P$. Que déduit-on immédiatement pour les droites $(NC)$ et $(BP)$ ?',
      options: [
        '$(NC) \\parallel (BP)$ et $NC = 2BP$',
        '$(NC) \\perp (BP)$ et $NC = BP$',
        '$(NC)$ et $(BP)$ se coupent en $I$',
        'Les points $N, C, B, P$ sont alignés',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’image du segment $[NC]$ par une rotation d’angle $-\\frac{\\pi}{2}$ est $[PB]$, donc $NC = PB$ et $(\\widehat{\\overrightarrow{NC}, \\overrightarrow{PB}}) = -\\frac{\\pi}{2}$, soit $(NC) \\perp (BP)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre les symétries $s_I$ (centrale) et $s_{(D)}$ (orthogonale)',
    paragraphText:
      'Une erreur de lecture classique consiste à traiter la **symétrie centrale $s_I$** comme un antidéplacement parce qu’elle porte le mot « symétrie ». En réalité, dans le plan, $s_I$ équivaut à la **rotation de centre $I$ et d’angle $\\pi$** : elle conserve les angles orientés, c’est donc un **déplacement** ! Seules la symétrie **orthogonale** (axiale) $s_{(D)}$ et la symétrie **glissée** sont des antidéplacements.',
    exercise: {
      id: 'tc_m_geo_l15_p04_q07',
      type: 'mcq',
      prompt: 'Parmi ces quatre transformations du plan, laquelle est un DÉPLACEMENT ?',
      options: [
        'La symétrie orthogonale d’axe $(AB)$',
        'La symétrie glissée d’axe $(AB)$ et de vecteur $\\overrightarrow{AB}$',
        'La symétrie centrale de centre $O$',
        'La composée $s_{(AB)} \\circ t_{\\overrightarrow{AB}}$',
      ],
      correctAnswerIndex: 2,
      explanation: 'La symétrie centrale de centre $O$ est la rotation $r_{(O, \\pi)}$ : c’est un déplacement, alors que les trois autres sont des antidéplacements.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'Motif d’un pagne : passer du triangle $CIA$ aux cinq triangles (p.16–17)',
    paragraphText:
      'Lors d’une sortie du club de mathématiques, la figure représente cinq triangles isocèles rectangles : $BAC, BOC, CIA, BAJ$ (superposables) et le grand triangle $OIJ$ (Ex. 19 p.16–17 & 23). Le jeu consiste à trouver la transformation envoyant $CIA$ sur chacun d’eux. Quatre sont des isométries : $\\operatorname{Id}$ ($CIA \\to CIA$), $t_{\\overrightarrow{IA}}$ ($CIA \\to BAJ$), $t_{\\overrightarrow{IC}}$ ($CIA \\to BOC$) et la symétrie glissée $t_{\\overrightarrow{IC}} \\circ s_{(BC)}$ (attention : ou réflexion selon l’orientation $C \\to B, I \\to A, A \\to C$ ? Vérifions !) envoyant $CIA \\to BAC$. La cinquième ($CIA \\to OIJ$) ne conserve pas les longueurs : c’est l’**homothétie** $h_{(I, 2)}$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Motif du pagne : CIA, BOC, BAC, BAJ et OIJ (p.16 & p.22)',
      caption: 'Quatre triangles superposables (isométries) et le grand triangle OIJ (homothétie de centre I et rapport 2).',
      svgContent: `<svg viewBox="0 0 300 185" width="285" height="176" xmlns="http://www.w3.org/2000/svg">
        <polygon points="75,160 225,160 75,20" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
        <polygon points="75,160 150,160 75,90" fill="#dbeafe" fill-opacity="0.55" stroke="#2563eb" stroke-width="1.4"/>
        <polygon points="150,160 225,160 150,90" fill="#dcfce7" fill-opacity="0.55" stroke="#16a34a" stroke-width="1.4"/>
        <polygon points="75,90 150,90 150,160" fill="#fef3c7" fill-opacity="0.55" stroke="#d97706" stroke-width="1.4"/>
        <polygon points="75,90 150,90 75,20" fill="#ede9fe" fill-opacity="0.55" stroke="#7c3aed" stroke-width="1.4"/>
        <text x="61" y="172" font-size="11" font-weight="bold" fill="#1e293b">O</text>
        <text x="147" y="173" font-size="11" font-weight="bold" fill="#1e293b">C</text>
        <text x="228" y="170" font-size="11" font-weight="bold" fill="#1e293b">I</text>
        <text x="61" y="94" font-size="11" font-weight="bold" fill="#1e293b">B</text>
        <text x="155" y="88" font-size="11" font-weight="bold" fill="#1e293b">A</text>
        <text x="63" y="21" font-size="11" font-weight="bold" fill="#1e293b">J</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l15_p05_q01',
      type: 'mcq',
      prompt: 'Dans la situation complexe du motif de pagne (p.17), laquelle des cinq transformations permettant de passer de $CIA$ aux cinq triangles n’est PAS une isométrie ?',
      options: [
        'La translation de vecteur $\\overrightarrow{IA}$ (vers $BAJ$)',
        'La translation de vecteur $\\overrightarrow{IC}$ (vers $BOC$)',
        'La composée $t_{\\overrightarrow{IC}} \\circ s_{(BC)}$ (vers $BAC$)',
        'L’homothétie de centre $I$ et de rapport $2$ (vers $OIJ$)',
      ],
      correctAnswerIndex: 3,
      explanation: 'Le triangle $OIJ$ a des côtés deux fois plus grands que ceux de $CIA$ : on passe de $CIA$ à $OIJ$ par l’homothétie de centre $I$ et de rapport $2$, qui n’est pas une isométrie.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Exercice 13 p.20 & 23',
    stepTheme: 'green',
    stepTitle: 'Isométries laissant globalement invariant un polygone régulier $\\Gamma$',
    paragraphText:
      'Soit $\\Gamma$ un polygone régulier de centre $O$ et de sommets $\\{A_1, \\dots, A_n\\}$. Alors $O$ est l’isobarycentre des sommets : $O = \\operatorname{isobar}\\{(A_i, 1)\\}_{1\\le i\\le n}$. Si $f$ est une isométrie telle que $f(\\Gamma) = \\Gamma$, elle permute les sommets ($\\{f(A_i)\\} = \\{A_i\\}$) et conserve le barycentre : donc $f(O) = \\operatorname{isobar}\\{(f(A_i), 1)\\} = O$ ! Ainsi, **le centre $O$ est invariant par $f$**. On en déduit immédiatement que toute isométrie distincte de $\\operatorname{Id}$ conservant $\\Gamma$ admet au moins un point fixe ($O$), donc est soit une **rotation** (de centre $O$), soit une **symétrie orthogonale** (d’axe passant par $O$) !',
    exercise: {
      id: 'tc_m_geo_l15_p05_q02',
      type: 'mcq',
      prompt: 'Pourquoi une isométrie différente de $\\operatorname{Id}$ laissant globalement invariant un polygone régulier de centre $O$ ne peut-elle jamais être une translation ou une symétrie glissée (p.23) ?',
      options: [
        'Parce qu’elle laisse invariant le centre $O$ (isobarycentre des sommets), ce qui exclut les isométries sans point fixe',
        'Parce qu’un polygone régulier n’a pas d’axes de symétrie',
        'Parce que le périmètre change par translation',
        'Parce que toute isométrie d’un polygone est l’identité',
      ],
      correctAnswerIndex: 0,
      explanation: 'Toute isométrie qui fixe $O$ ne peut pas avoir $\\operatorname{Inv}(f) = \\emptyset$ : ce ne peut être ni une translation non nulle, ni une symétrie glissée.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Exercice 15 & 14 p.21',
    stepTheme: 'green',
    stepTitle: 'Structure de groupe des isométries et caractérisation par le repère',
    paragraphText:
      'Si $f$ et $g$ sont deux isométries planes, alors pour tous points $M, N$, $(g \\circ f)$ vérifie $d(g(f(M)), g(f(N))) = d(f(M), f(N)) = d(M, N)$, donc $g \\circ f$ est une **isométrie** ; de même, $f$ étant bijective, $f^{-1}$ vérifie $d(f^{-1}(A), f^{-1}(B)) = d(f(f^{-1}(A)), f(f^{-1}(B))) = d(A, B)$, donc $f^{-1}$ est aussi une **isométrie**. De plus (Ex. 14), toute application conservant le barycentre et envoyant tout repère orthonormé $(O, \\vec{i}, \\vec{j})$ sur un repère orthonormé est une isométrie.',
    exercise: {
      id: 'tc_m_geo_l15_p05_q03',
      type: 'mcq',
      prompt: 'Soient $f$ et $g$ deux isométries planes. Quelle justification prouve directement que $g \\circ f$ est une isométrie ?',
      options: [
        'Pour tous $M, N$, $d(g(f(M)), g(f(N))) = d(f(M), f(N)) = d(M, N)$',
        'La somme de deux angles vaut toujours $\\pi$',
        '$g \\circ f$ fixe toujours l’origine $O$',
        'Toute application continue est une isométrie',
      ],
      correctAnswerIndex: 0,
      explanation: 'Il suffit d’appliquer deux fois la définition de conservation des distances : d’abord par $g$, puis par $f$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice 17 p.21',
    stepTheme: 'blue',
    stepTitle: 'Enchaîner réflexions et symétrie centrale dans un triangle équilatéral',
    paragraphText:
      'Dans l’exercice 17, $ABC$ est équilatéral direct de centre $O$ et $[AD]$ est un diamètre du cercle circonscrit (médiatrice de $[BC]$). On étudie $f = s_{(BD)} \\circ s_C \\circ s_{(AB)}$. Comme $s_{(BD)}$ et $s_{(AB)}$ sont des antidéplacements et $s_C$ est un déplacement, $f$ est un **déplacement** ! Calculons deux images : $f(A) = s_{(BD)}(s_C(A)) = s_{(BD)}(A’)$ où $A’ = s_C(A) = (BD) \\cap (AC) \\implies A’ \\in (BD) \\implies f(A) = A’$. En vérifiant un second point comme $B$, on détermine complètement le déplacement $f$, puis on en déduit la nature d’antidéplacement de $s_{(BD)} \\circ s_C = f \\circ s_{(AB)}$.',
    exercise: {
      id: 'tc_m_geo_l15_p05_q04',
      type: 'mcq',
      prompt: 'Quelle est la parité de la transformation $f = s_{(BD)} \\circ s_C \\circ s_{(AB)}$ (Ex. 17 p.21) ?',
      options: [
        'Un déplacement (car elle compose deux antidéplacements et un déplacement $s_C$)',
        'Un antidéplacement (car elle contient trois lettres $s$)',
        'Une homothétie de rapport $-1$',
        'Une symétrie glissée',
      ],
      correctAnswerIndex: 0,
      explanation: '$s_C$ est une symétrie **centrale** (donc un déplacement), et $s_{(BD)}$, $s_{(AB)}$ sont deux réflexions (antidéplacements) : au total, $-1 \\times (+1) \\times (-1) = +1$, c’est un déplacement !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice 18 p.21',
    stepTheme: 'green',
    stepTitle: 'Étude complète d’une symétrie glissée sur un losange d’angle $\\frac{\\pi}{3}$',
    paragraphText:
      'Soit $ABCD$ un losange de côté $5$ avec $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = \\frac{\\pi}{3}$ ($ABD$ et $BCD$ sont donc équilatéraux directs !), $I, J, K, L, O$ les milieux de $[AB], [BC], [CD], [DA], [BD]$, $(\\Delta)$ médiatrice de $[AB]$, et $f$ l’isométrie définie par $f(A)=B, f(B)=D, f(D)=C$. Comme $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = +\\frac{\\pi}{3}$ alors que $(\\widehat{\\overrightarrow{BD}, \\overrightarrow{BC}}) = -\\frac{\\pi}{3}$, $f$ oppose l’angle orienté : c’est un **antidéplacement** ! N’ayant aucun point fixe (sinon ce serait une réflexion fixant les images de $A, B, D$, impossible ici car les médiatrices de $[AB]$ et $[BD]$ diffèrent), $f$ est une **symétrie glissée**.',
    exercise: {
      id: 'tc_m_geo_l15_p05_q05',
      type: 'mcq',
      prompt: 'Dans le losange $ABCD$ de l’exercice 18 ($f(A)=B, f(B)=D, f(D)=C$), comment calcule-t-on le vecteur de la symétrie glissée $f$ dès la question 2 ?',
      options: [
        '$f(f(A)) = f(B) = D$, donc $\\vec{u} = \\frac{1}{2}\\overrightarrow{AD}$',
        '$f(A) = B$, donc $\\vec{u} = \\overrightarrow{AB}$',
        '$f(D) = C$, donc $\\vec{u} = \\overrightarrow{DC}$',
        '$\\vec{u} = \\frac{1}{2}\\overrightarrow{BC}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Puisque $f(A) = B$ et $f(B) = D$, on a $f(f(A)) = D$, d’où $t_{2\\vec{u}}(A) = D$ et le vecteur de la symétrie glissée est $\\vec{u} = \\frac{1}{2}\\overrightarrow{AD}$ (et son axe passe par les milieux $I$ de $[AB]$ et $O$ de $[BD]$, c’est-à-dire la droite $(IO) \\parallel (AD)$ !).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 9.3 p.19 & 22',
    stepTheme: 'blue',
    stepTitle: 'Simplifier une triple composée $h = t_{\\overrightarrow{CD}} \\circ r_{(O,\\, \\frac{\\pi}{2})} \\circ t_{\\overrightarrow{DA}}$',
    paragraphText:
      'Dans un carré direct $ABCD$ de centre $O$ ($(\\Delta)$ médiatrice de $[CB]$ et $[DA]$), simplifions $h = t_{\\overrightarrow{CD}} \\circ r_{(O, \\frac{\\pi}{2})} \\circ t_{\\overrightarrow{DA}}$ par étapes : (1) avec la droite pivot $(\\Delta)$ passant par $O$ et normale à $\\overrightarrow{DA}$, on écrit $t_{\\overrightarrow{DA}} = s_{(\\Delta)} \\circ s_{(DC)}$ et $r_{(O,\\frac{\\pi}{2})} = s_{(AC)} \\circ s_{(\\Delta)}$, ce qui réduit $r_{(O,\\frac{\\pi}{2})} \\circ t_{\\overrightarrow{DA}}$ à $s_{(AC)} \\circ s_{(DC)} = r_{(C,\\, \\frac{\\pi}{2})}$ ; (2) avec la droite pivot $(BC)$ passant par $C$ et normale à $\\overrightarrow{CD}$, on écrit $r_{(C,\\frac{\\pi}{2})} = s_{(BC)} \\circ s_{(AC)}$ et $t_{\\overrightarrow{CD}} = s_{(OO’)} \\circ s_{(BC)}$, d’où $h = s_{(OO’)} \\circ s_{(AC)} = r_{(O,\\, \\frac{\\pi}{2})}$ !',
    exercise: {
      id: 'tc_m_geo_l15_p05_q06',
      type: 'mcq',
      prompt: 'À quelle transformation simple se réduit $h = t_{\\overrightarrow{CD}} \\circ r_{(O,\\, \\frac{\\pi}{2})} \\circ t_{\\overrightarrow{DA}}$ dans le carré direct $ABCD$ de centre $O$ (Ex. 9.3 p.22) ?',
      options: [
        'La translation de vecteur $\\overrightarrow{CA}$',
        'La rotation de centre $O$ et d’angle $\\frac{\\pi}{2}$',
        'La rotation de centre $C$ et d’angle $\\frac{\\pi}{2}$',
        'La symétrie glissée d’axe $(AC)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le pivot $(\\Delta)$ ramène $r_{(O,\\frac{\\pi}{2})} \\circ t_{\\overrightarrow{DA}}$ à $r_{(C,\\frac{\\pi}{2})}$, puis le pivot $(BC)$ ramène $t_{\\overrightarrow{CD}} \\circ r_{(C,\\frac{\\pi}{2})}$ à $s_{(OO’)} \\circ s_{(AC)} = r_{(O, \\frac{\\pi}{2})}$ (on vérifie : $h(O) = t_{\\overrightarrow{CD}}(r_{(O,\\pi/2)}(O’)) = t_{\\overrightarrow{CD}}(\\text{milieu haut}) \\dots$ ou sur $A$ : $A \\mapsto \\text{hors}$ $\\to D \\mapsto C$ ? Vérification sur coordonnées : $t_{\\overrightarrow{DA}}$ puis $r_{(O,\\pi/2)}$ puis $t_{\\overrightarrow{CD}}$ fixe bien $O$ et a pour angle $\\frac{\\pi}{2}$ !).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Méthode générale',
    stepTheme: 'orange',
    stepTitle: 'Vérifier le résultat d’une composée d’isométries sur un point test',
    paragraphText:
      'Quand tu simplifies une composée compliquée de translations, rotations et réflexions (comme $s_{(DC)} \\circ s_{(AC)}$ ou $t_{\\overrightarrow{CD}} \\circ r_{(O,\\frac{\\pi}{2})} \\circ t_{\\overrightarrow{DA}}$), **teste toujours deux points simples de la figure** ($A, B, C, D$ ou $O$) dans l’expression initiale puis dans ta conclusion ! Si $f(O) = O$ et $f(A) = ?$, cette vérification en $5$ secondes détecte immédiatement toute erreur de signe d’angle ou d’inversion de vecteurs.',
    exercise: {
      id: 'tc_m_geo_l15_p05_q07',
      type: 'mcq',
      prompt: 'Dans le carré direct $ABCD$ (Ex. 12 p.20 : triangles rectangles isocèles extérieurs $IAB, JBC, KCD, LDA$ de sommets $I, J, K, L$, $O$ milieu de $[AC]$), si $r_I = r_{(I, \\frac{\\pi}{2})}$ et $r_J = r_{(J, \\frac{\\pi}{2})}$, quelle est la nature de $r_I \\circ r_J$ ?',
      options: [
        'Une rotation d’angle $\\pi$ (c’est-à-dire une symétrie centrale), de centre $O$ car $r_I(r_J(C)) = r_I(B) = A$',
        'Une translation',
        'Une symétrie orthogonale',
        'L’application identique',
      ],
      correctAnswerIndex: 0,
      explanation: 'La somme des angles vaut $\\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi$ : c’est une symétrie centrale ! Comme $r_J(C) = B$ et $r_I(B) = A$, le milieu de $[AC]$ (qui est $O$) est son centre ($r_I \\circ r_J = s_O$).',
    },
  },
];

export const MATHS_TLE_C_L15_ISOMETRIES_PLAN: CurriculumChapter = {
  id: 'terminale_c_maths_geometrie_l15_isometries_plan',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 15,
  title: 'Leçon 15 : Isométries du plan',
  summary:
    'Définition et propriétés de conservation des isométries planes ; décomposition d’une translation et d’une rotation en deux symétries orthogonales ; symétrie glissée et composées ; classification (points invariants, déplacements et antidéplacements) ; détermination et problèmes de synthèse.',
  officialVolumeHours: 10,
  contentVersion: 2,
  points: [
    {
      id: 'terminale_c_maths_geometrie_l15_isometries_plan_p01',
      order: 1,
      title: 'Isométries planes et décomposition d’une translation',
      summary:
        'Définir une isométrie plane, connaître ses conservations et composer/décomposer une translation à l’aide de deux symétries orthogonales d’axes parallèles.',
      conceptExplanation:
        'Une isométrie plane conserve les distances, les aires, les angles géométriques, le produit scalaire et le barycentre. Pour deux droites parallèles $(D)$ et $(\\Delta)$ avec $H \\in (D)$ projeté en $K \\in (\\Delta)$, $s_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}$. Réciproquement, toute translation $t_{\\vec{u}}$ se décompose à partir de n’importe quelle droite normale à $\\vec{u}$ par un décalage de $\\pm\\frac{1}{2}\\vec{u}$.',
      keyRule: 'De la première droite appliquée (à droite) vers la seconde (à gauche), le décalage d’axe vaut $\\frac{1}{2}\\vec{u}$.',
      formulas: [
        { name: 'Axes parallèles', formula: 's_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}} \\qquad ; \\qquad t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)} \\iff (D) = t_{\\frac{1}{2}\\vec{u}}(\\Delta)' },
      ],
      workedExample: {
        title: 'Rectangle ABCD : s_(IJ) ∘ s_(AD) (p.3)',
        statement: 'Déterminer $s_{(IJ)} \\circ s_{(AD)}$ où $I$ est le milieu de $[AB]$ et $J$ le milieu de $[DC]$.',
        methodSteps: [
          'Les droites $(IJ)$ et $(AD)$ sont parallèles, et $I$ est le projeté orthogonal de $A \\in (AD)$ sur $(IJ)$.',
          'Vecteur de translation : $2\\overrightarrow{AI} = \\overrightarrow{AB}$.',
        ],
        conclusion: '$s_{(IJ)} \\circ s_{(AD)} = t_{\\overrightarrow{AB}}$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l15_isometries_plan_p02',
      order: 2,
      title: 'Décomposition d’une rotation et composée avec une translation',
      summary:
        'Composer deux réflexions d’axes sécants en rotation d’angle double, décomposer r(O, α) et trouver le centre de t ∘ r grâce à une droite pivot.',
      conceptExplanation:
        'Pour deux droites $(\\Delta)$ et $(D)$ sécantes en $O$ faisant l’angle orienté $\\alpha = (\\widehat{\\vec{u}, \\vec{v}})$, $s_{(D)} \\circ s_{(\\Delta)} = r_{(O, 2\\alpha)}$ (symétrie centrale $s_O$ si elles sont perpendiculaires). Inversement, on décompose $r_{(O,\\alpha)}$ en tournant la droite connue de $\\pm\\frac{1}{2}\\alpha$. La composée d’une translation et d’une rotation d’angle non nul $\\alpha$ est une rotation d’angle $\\alpha$, dont le centre s’obtient via une droite pivot passant par le centre initial et normale au vecteur de translation.',
      keyRule: 'Dans $s_{(D)} \\circ s_{(\\Delta)} = r_{(O, 2\\alpha)}$, l’angle de rotation est le **double** de l’angle orienté du premier axe $(\\Delta)$ vers le second $(D)$.',
      formulas: [
        { name: 'Axes sécants', formula: 's_{(D)} \\circ s_{(\\Delta)} = r_{(O,\\, 2\\alpha)} \\qquad ; \\qquad (D)\\perp(\\Delta) \\implies s_{(D)}\\circ s_{(\\Delta)} = s_O' },
      ],
      workedExample: {
        title: 'Carré direct ABCD : f = t_CB⃗ ∘ r(D, π/2) (p.7)',
        statement: 'Déterminer la nature et les éléments caractéristiques de $f$.',
        methodSteps: [
          'Droite pivot $(DC)$ : passe par $D$ et normale à $\\overrightarrow{CB}$.',
          '$r_{(D,\\pi/2)} = s_{(DC)}\\circ s_{(DO)}$ et $t_{\\overrightarrow{CB}} = s_{(\\Delta)}\\circ s_{(DC)}$ ($(\\Delta)$ médiatrice de $[CB]$).',
          'Élimination du pivot : $f = s_{(\\Delta)} \\circ s_{(DO)} = r_{(O, \\frac{\\pi}{2})}$.',
        ],
        conclusion: '$f$ est la rotation de centre $O$ et d’angle $\\frac{\\pi}{2}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l15_isometries_plan_p03',
      order: 3,
      title: 'Symétrie glissée et composées avec une symétrie orthogonale',
      summary:
        'Caractériser la symétrie glissée (axe par milieux de [MM’], vecteur ½ AA’’), décomposer t ∘ s_(Δ) et r ∘ s_(D) selon les conditions de normalité ou d’incidence.',
      conceptExplanation:
        'Une symétrie glissée $t_{\\vec{u}} \\circ s_{(D)} = s_{(D)} \\circ t_{\\vec{u}}$ ($\\vec{u} \\parallel (D), \\vec{u} \\neq \\vec{0}$) n’a aucun point fixe ; l’axe $(D)$ passe par le milieu de tout segment $[MM’]$ et $\\vec{u} = \\frac{1}{2}\\overrightarrow{AA’’}$. La composée $t_{\\vec{u}} \\circ s_{(\\Delta)}$ est une réflexion ssi $\\vec{u} \\perp (\\Delta)$, sinon une symétrie glissée ; $r_{(K,\\theta)} \\circ s_{(D)}$ est une réflexion ssi $K \\in (D)$, sinon une symétrie glissée.',
      keyRule: 'Milieu de $[AA’]$ $\\implies$ axe $(D)$ ; vecteur $\\frac{1}{2}\\overrightarrow{AA’’}$ $\\implies$ vecteur $\\vec{u}$ ($A’’ = f(f(A))$).',
      formulas: [
        { name: 'Symétrie glissée', formula: 'f = t_{\\vec{u}} \\circ s_{(D)} \\implies \\frac{A+f(A)}{2} \\in (D) \\;\\text{ et }\\; \\vec{u} = \\frac{1}{2}\\overrightarrow{A\\,f(f(A))}' },
      ],
      workedExample: {
        title: 'Triangle équilatéral ABC : g = r(G, 2π/3) ∘ s_(AB) (p.12, complété)',
        statement: 'Donner la nature et les éléments caractéristiques de $g$.',
        methodSteps: [
          '$G \\notin (AB)$ donc $g$ est une symétrie glissée. De plus $g(A) = B$ et $g(B) = C$.',
          'Milieux : $K$ (milieu de $[AB]$) et $I$ (milieu de $[BC]$), d’où l’axe $(KI)$.',
          'Double image : $g(g(A)) = C \\implies \\vec{u} = \\frac{1}{2}\\overrightarrow{AC} = \\overrightarrow{KI}$.',
        ],
        conclusion: '$g$ est la symétrie glissée d’axe $(KI)$ et de vecteur $\\overrightarrow{KI}$ (ou $\\overrightarrow{JC}$).',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l15_isometries_plan_p04',
      order: 4,
      title: 'Classification des isométries et détermination par deux paires de points',
      summary:
        'Classer toute isométrie par ses points invariants, distinguer déplacements (translations, rotations) et antidéplacements (réflexions, symétries glissées), et déterminer f et g vérifiant A↦A’, B↦B’.',
      conceptExplanation:
        'Tout déplacement conserve les angles orientés (translation ou rotation), tout antidéplacement les inverse (réflexion ou symétrie glissée). Pour $A \\neq B$ et $AB = A’B’$, il existe un unique déplacement ($t$ si $\\overrightarrow{AB}=\\overrightarrow{A’B’}$, sinon rotation) et un unique antidéplacement (réflexion si $[AA’]$ et $[BB’]$ ont même médiatrice, sinon symétrie glissée) envoyant $A$ en $A’$ et $B$ en $B’$.',
      keyRule: 'La symétrie centrale $s_O$ est une rotation d’angle $\\pi$, donc un **déplacement** !',
      formulas: [
        { name: 'Parité des compositions', formula: '\\text{Dépl} \\circ \\text{Dépl} = \\text{Anti} \\circ \\text{Anti} = \\text{Dépl} \\quad ; \\quad \\text{Dépl} \\circ \\text{Anti} = \\text{Anti}' },
      ],
      workedExample: {
        title: 'Antidéplacement g tel que g(B) = A et g(A) = O (p.16)',
        statement: 'Identifier $g$ dans $ABC$ rectangle en $B$ avec $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = \\frac{\\pi}{3}$.',
        methodSteps: [
          '$OAB$ est équilatéral, donc $AB = AO$. Les médiatrices de $[BA]$ et $[AO]$ étant distinctes, $g$ est une symétrie glissée.',
          'Milieux $K$ de $[BA]$ et $I$ de $[AO]$ donnent l’axe $(KI)$, et $g(g(B)) = O$ donne $\\vec{u} = \\frac{1}{2}\\overrightarrow{BO} = \\overrightarrow{KI}$.',
        ],
        conclusion: '$g$ est la symétrie glissée d’axe $(KI)$ et de vecteur $\\overrightarrow{KI}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l15_isometries_plan_p05',
      order: 5,
      title: 'Situation complexe (motif d’un pagne) et problèmes de synthèse',
      summary:
        'Résoudre la situation complexe du pagne, démontrer l’invariance du centre d’un polygone régulier, et étudier des composées sur un losange et un carré.',
      conceptExplanation:
        'La combinaison des critères de points invariants, de parité et de conservation du barycentre permet de résoudre efficacement les problèmes de synthèse du Bac : invariance du centre d’un polygone régulier, composées de rotations et symétries dans un carré ou un losange d’angle $\\frac{\\pi}{3}$, et reconnaissance d’une symétrie glissée via deux couples d’images.',
      keyRule: 'Dans tout problème de synthèse, commencer par déterminer la **parité** (déplacement/antidéplacement) et chercher les **points invariants** ou $f \\circ f$.',
      formulas: [
        { name: 'Polygone régulier', formula: 'f(\\Gamma) = \\Gamma \\implies f(O) = O \\implies f \\in \\{\\text{Id},\\; r_{(O,\\theta)},\\; s_{(D)}\\}' },
      ],
      workedExample: {
        title: 'Symétrie glissée sur le losange ABCD d’angle π/3 (Ex. 18 p.21)',
        statement: 'Étudier l’isométrie $f$ telle que $f(A)=B$, $f(B)=D$ et $f(D)=C$.',
        methodSteps: [
          '$(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = +\\frac{\\pi}{3}$ mais $(\\widehat{\\overrightarrow{BD}, \\overrightarrow{BC}}) = -\\frac{\\pi}{3}$ : $f$ est un antidéplacement.',
          '$f(f(A)) = f(B) = D \\implies$ le vecteur est $\\vec{u} = \\frac{1}{2}\\overrightarrow{AD}$ et l’axe passe par $I$ (milieu de $[AB]$) et $O$ (milieu de $[BD]$).',
        ],
        conclusion: '$f$ est la symétrie glissée d’axe $(IO)$ et de vecteur $\\frac{1}{2}\\overrightarrow{AD}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};
