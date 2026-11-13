import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 12 : Orthogonalité dans l’espace.pdf » (format v2).
export const MATHS_1RE_C_L12_ORTHOGONALITE_ESPACE: CurriculumChapter = {
  id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 12,
  title: 'Leçon 12 : Orthogonalité dans l’espace',
  summary:
    'Droites orthogonales, droite et plan perpendiculaires (propriété fondamentale, unicité et parallélisme), plans perpendiculaires, projections orthogonales et distances, et problèmes de synthèse dans le cube et le tétraèdre.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: '1ère C - Leçon 12 : Orthogonalité dans l’espace.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Droites orthogonales dans l'espace
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01',
      order: 1,
      title: 'Droites orthogonales dans l’espace',
      summary:
        'Définition de deux droites orthogonales (parallèles à deux droites perpendiculaires), distinction avec droites perpendiculaires, propriétés de transfert et théorème des milieux.',
      conceptExplanation:
        "Convention utilisée sur le cube $ABCDEFGH$ : la face $ABCD$ forme la base inférieure et $E, F, G, H$ sont placés respectivement au-dessus de $A, B, C, D$ (les arêtes verticales sont donc $[AE]$, $[BF]$, $[CG]$ et $[DH]$).\n\nDans l’espace $(\\mathcal{E})$, deux droites $(D_1)$ et $(D_2)$ sont dites **orthogonales** (on note $(D_1) \\perp (D_2)$) lorsqu’il existe deux droites **perpendiculaires** $(L_1)$ et $(L_2)$ telles que $(D_1) \\parallel (L_1)$ et $(D_2) \\parallel (L_2)$.\n\n**Distinction essentielle** : deux droites sont dites **perpendiculaires** lorsqu’elles sont orthogonales **et sécantes** (donc coplanaires). Deux droites orthogonales ne sont pas nécessairement sécantes : par exemple, dans le cube $ABCDEFGH$, $(AE)$ et $(DC)$ sont orthogonales sans se couper, car $(CG) \\perp (GH)$ avec $(CG) \\parallel (AE)$ et $(GH) \\parallel (DC)$.\n\n**Propriétés de transfert** :\n- Si deux droites sont orthogonales, toute droite parallèle à l’une est orthogonale à l’autre.\n- Si deux droites sont parallèles, toute droite orthogonale à l’une est orthogonale à l’autre.\n- **Attention** : dans l’espace, deux droites orthogonales à une même troisième ne sont pas nécessairement parallèles (dans le cube, $(AB)$ et $(AD)$ sont toutes deux orthogonales à $(AE)$, pourtant elles sont perpendiculaires !).",
      keyRule:
        'Orthogonales = directions à 90° (sécantes ou non). Perpendiculaires = orthogonales ET sécantes. Pour prouver (D₁) ⊥ (D₂), remplace chaque droite par une parallèle de façon à former un angle droit.',
      formulas: [
        { name: 'Définition', formula: '\\begin{cases} (L_1) \\perp (L_2) \\text{ (sécantes)} \\\\ (D_1) \\parallel (L_1) \\text{ et } (D_2) \\parallel (L_2) \\end{cases} \\implies (D_1) \\perp (D_2)' },
        { name: 'Transfert par parallélisme', formula: '(D_1) \\perp (D_2) \\text{ et } (D_2) \\parallel (D_3) \\implies (D_1) \\perp (D_3)' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Cube ABCDEFGH : droites orthogonales (AE) ⊥ (DC) et (IJ) ⊥ (AC)',
        caption: 'I et J milieux de [DG] et [BG] : (IJ) // (DB) et (AC) ⊥ (DB), donc (AC) ⊥ (IJ).',
        svgContent: `<svg viewBox="0 0 320 220" width="300" height="206" xmlns="http://www.w3.org/2000/svg">
  <line x1="95" y1="34" x2="235" y2="34" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="95" y1="34" x2="55" y2="68" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="235" y1="34" x2="195" y2="68" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="55" y1="68" x2="195" y2="68" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="95" y1="34" x2="95" y2="154" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="235" y1="34" x2="235" y2="154" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="55" y1="68" x2="55" y2="188" stroke="#2563eb" stroke-width="2.4"/>
  <line x1="195" y1="68" x2="195" y2="188" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="95" y1="154" x2="235" y2="154" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
  <line x1="95" y1="154" x2="55" y2="188" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="235" y1="154" x2="195" y2="188" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="55" y1="188" x2="195" y2="188" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="55" y1="188" x2="235" y2="154" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="95" y1="154" x2="195" y2="188" stroke="#0f766e" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="165" y1="94" x2="215" y2="111" stroke="#7c3aed" stroke-width="2.4"/>
  <circle cx="165" cy="94" r="3.8" fill="#7c3aed"/><text x="155" y="88" font-size="11" font-weight="bold" fill="#7c3aed">I</text>
  <circle cx="215" cy="111" r="3.8" fill="#7c3aed"/><text x="220" y="114" font-size="11" font-weight="bold" fill="#7c3aed">J</text>
  <text x="41" y="196" font-size="12" font-weight="bold" fill="#1e293b">A</text>
  <text x="199" y="198" font-size="12" font-weight="bold" fill="#1e293b">B</text>
  <text x="240" y="160" font-size="12" font-weight="bold" fill="#1e293b">C</text>
  <text x="82" y="158" font-size="12" font-weight="bold" fill="#1e293b">D</text>
  <text x="41" y="70" font-size="12" font-weight="bold" fill="#2563eb">E</text>
  <text x="199" y="72" font-size="12" font-weight="bold" fill="#1e293b">F</text>
  <text x="240" y="34" font-size="12" font-weight="bold" fill="#1e293b">G</text>
  <text x="83" y="32" font-size="12" font-weight="bold" fill="#1e293b">H</text>
</svg>`,
      },
      workedExample: {
        title: 'Démontrer que (IJ) et (AC) sont orthogonales dans le cube ABCDEFGH',
        statement:
          'Soit $ABCDEFGH$ un cube, $I$ le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Démontre que les droites $(IJ)$ et $(AC)$ sont orthogonales.',
        methodSteps: [
          'Dans le triangle $BDG$, $I$ est le milieu de $[DG]$ et $J$ est le milieu de $[BG]$. D’après la propriété de la droite des milieux, $(IJ) \\parallel (DB)$.',
          '$ABCD$ est un carré, donc ses diagonales $(AC)$ et $(DB)$ sont perpendiculaires (et donc orthogonales).',
          'Comme $(IJ) \\parallel (DB)$ et $(AC) \\perp (DB)$, toute droite orthogonale à $(DB)$ est orthogonale à sa parallèle $(IJ)$.',
        ],
        conclusion: 'Les droites $(IJ)$ et $(AC)$ sont orthogonales : $(IJ) \\perp (AC)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Droites orthogonales vs perpendiculaires',
          stepTitle: 'Deux droites orthogonales ne sont pas nécessairement sécantes',
          paragraphText:
            'Dans l’espace, « perpendiculaires » signifie « orthogonales et sécantes », tandis que « orthogonales » ne demande pas que les deux droites se coupent. Toute droite perpendiculaire à une autre lui est orthogonale, mais la réciproque est fausse.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q1',
            type: 'mcq',
            prompt: 'Parmi ces deux affirmations sur l’espace, laquelle est vraie ?\n(1) Deux droites perpendiculaires sont orthogonales.\n(2) Deux droites orthogonales sont perpendiculaires.',
            options: [
              '(1) et (2) sont vraies',
              '(1) est vraie et (2) est fausse',
              '(1) est fausse et (2) est vraie',
              '(1) et (2) sont fausses',
            ],
            correctAnswerIndex: 1,
            explanation: 'Deux droites perpendiculaires sont coplanaires, sécantes et forment un angle droit, donc elles sont orthogonales. À l’inverse, deux droites orthogonales (comme $(AE)$ et $(DC)$ dans un cube) peuvent être non sécantes.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Prouver l’orthogonalité via deux droites parallèles',
          stepTitle: 'Ramener les directions en un même point',
          paragraphText:
            'Pour démontrer que $(D_1) \\perp (D_2)$ dans un solide, cherche une droite $(L_1) \\parallel (D_1)$ et une droite $(L_2) \\parallel (D_2)$ qui soient sécantes et perpendiculaires sur une même face (carré, rectangle, triangle rectangle).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q2',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, quelle paire de droites prouve directement par parallélisme que $(AE) \\perp (DC)$ ?',
            options: [
              '$(CG) \\parallel (AE)$, $(GH) \\parallel (DC)$ et $(CG) \\perp (GH)$',
              '$(AB) \\parallel (DC)$ et $(AB) \\parallel (AE)$',
              '$(AD) \\parallel (BC)$ et $(AD) \\perp (DC)$',
              '$(EF) \\perp (FG)$ et $(EF) \\parallel (AE)$',
            ],
            correctAnswerIndex: 0,
            explanation: 'On a $(CG) \\parallel (AE)$ et $(GH) \\parallel (DC)$ ; dans la face carrée $CDHG$, $(CG) \\perp (GH)$, donc $(AE) \\perp (DC)$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Transfert par parallélisme',
          stepTitle: 'Utiliser la droite des milieux puis le parallélisme',
          paragraphText:
            'Si $(d_1) \\parallel (d_2)$ et $(d_3) \\perp (d_1)$, alors $(d_3) \\perp (d_2)$. Ce réflexe est très utile avec le théorème de la droite des milieux dans un triangle de l’espace.',
          formula: { name: 'Propriété de transfert', formula: '(d_1) \\parallel (d_2) \\text{ et } (d_3) \\perp (d_1) \\implies (d_3) \\perp (d_2)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q3',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Pourquoi a-t-on $(IJ) \\perp (AC)$ ?',
            options: [
              'Car $(IJ)$ et $(AC)$ sont sécantes à angle droit',
              'Car $(IJ) \\parallel (DB)$ dans le triangle $BDG$ et $(AC) \\perp (DB)$ dans le carré $ABCD$',
              'Car $(IJ) \\parallel (EG)$ et $(EG) \\perp (AC)$',
              'Car $I, J, A, C$ forment un rectangle',
            ],
            correctAnswerIndex: 1,
            explanation: 'Dans le triangle $BDG$, la droite des milieux donne $(IJ) \\parallel (DB)$. Or dans le carré $ABCD$, les diagonales $(AC)$ et $(DB)$ sont perpendiculaires, d’où $(IJ) \\perp (AC)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier qu’un angle n’est pas droit par parallélisme',
          stepTitle: 'Montrer que deux droites ne sont PAS orthogonales',
          paragraphText:
            'Dans le cube $ABCDEFGH$, soient $Q$ et $R$ les milieux respectifs des arêtes $[AE]$ et $[BF]$. Comme $(AR) \\parallel (QF)$ (dans la face $ABFE$) et $(HG) \\parallel (EF)$, si $(AR)$ et $(HG)$ étaient orthogonales, on aurait $(QF) \\perp (EF)$ — impossible dans le triangle rectangle $QEF$ en $E$ (deux angles droits en $E$ et en $F$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q4',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $Q$ et $R$ sont les milieux de $[AE]$ et $[BF]$. Pourquoi $(AR)$ et $(HG)$ ne sont-elles PAS orthogonales ?',
            options: [
              'Car elles ne sont pas sécantes',
              'Car $(AR) \\parallel (QF)$ et $(HG) \\parallel (EF)$, or le triangle $QEF$ est rectangle en $E$ donc $(QF)$ n’est pas perpendiculaire à $(EF)$',
              'Car $(AR)$ est parallèle à $(HG)$',
              'Car $(AR)$ est contenue dans la face $ABCD$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Dans le parallélogramme $AQFR$... attention : $AQ = RF$ et $(AQ)//(RF)$, donc $AQFR$ est un parallélogramme et $(AR) \\parallel (QF)$. Comme $(HG) \\parallel (EF)$ et $\\widehat{QFE} < 90°$ (car $\\widehat{QEF} = 90°$), $(AR)$ et $(HG)$ ne sont pas orthogonales.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Deux droites orthogonales à une même troisième',
          stepTitle: 'Dans l’espace, deux orthogonales à (D) ne sont pas forcément parallèles !',
          paragraphText:
            'En géométrie plane, deux droites perpendiculaires à une même droite sont parallèles. **Dans l’espace, c’est FAUX !** Par exemple, dans un cube, $(AB) \\perp (AE)$ et $(AD) \\perp (AE)$, pourtant $(AB)$ et $(AD)$ sont perpendiculaires (et non parallèles).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q5',
            type: 'mcq',
            prompt: 'On sait que dans l’espace, $(D_1) \\perp (\\Delta)$ et $(D_2) \\perp (\\Delta)$. Que peut-on en déduire ?',
            options: [
              '$(D_1) \\parallel (D_2)$',
              '$(D_1) \\perp (D_2)$',
              'Rien sur la position relative de $(D_1)$ et $(D_2)$ (elles peuvent être parallèles, perpendiculaires ou quelconques)',
              '$(D_1)$ et $(D_2)$ sont confondues',
            ],
            correctAnswerIndex: 2,
            explanation: 'Dans l’espace, une infinité de droites de directions distinctes sont orthogonales à $(\\Delta)$ : dans le cube, $(AB)$ et $(AD)$ sont orthogonales à $(AE)$ mais perpendiculaires entre elles ; $(AB)$ et $(EF)$ le sont aussi tout en étant parallèles.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Arêtes du cube orthogonales entre elles',
          stepTitle: 'Identifier rapidement les paires d’arêtes orthogonales',
          paragraphText:
            'Dans le cube $ABCDEFGH$, les arêtes se répartissent en trois directions deux à deux orthogonales : la direction de $(AB)$ (`{AB, DC, EF, HG}`), celle de $(AD)$ (`{AD, BC, EH, FG}`) et celle de $(AE)$ (`{AE, BF, CG, DH}`). Toute droite d’une direction est orthogonale à toute droite des deux autres directions.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q6',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, la droite $(AB)$ est orthogonale à laquelle des droites suivantes ?',
            options: ['$(CD)$', '$(CG)$', '$(EF)$', '$(GH)$'],
            correctAnswerIndex: 1,
            explanation: '$(CD)$, $(EF)$ et $(GH)$ sont toutes parallèles à $(AB)$. Seule $(CG)$ appartient à la direction verticale, perpendiculaire à $(BC)$ qui est parallèle à $(AD) \\perp (AB)$ : donc $(AB) \\perp (CG)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q1',
          type: 'mcq',
          prompt: 'Parmi ces deux affirmations sur l’espace, laquelle est vraie ?\n(1) Deux droites perpendiculaires sont orthogonales.\n(2) Deux droites orthogonales sont perpendiculaires.',
          options: [
            '(1) et (2) sont vraies',
            '(1) est vraie et (2) est fausse',
            '(1) est fausse et (2) est vraie',
            '(1) et (2) sont fausses',
          ],
          correctAnswerIndex: 1,
          explanation: 'Deux droites perpendiculaires sont coplanaires, sécantes et forment un angle droit, donc elles sont orthogonales. À l’inverse, deux droites orthogonales (comme $(AE)$ et $(DC)$ dans un cube) peuvent être non sécantes.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q2',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, quelle paire de droites prouve directement par parallélisme que $(AE) \\perp (DC)$ ?',
          options: [
            '$(CG) \\parallel (AE)$, $(GH) \\parallel (DC)$ et $(CG) \\perp (GH)$',
            '$(AB) \\parallel (DC)$ et $(AB) \\parallel (AE)$',
            '$(AD) \\parallel (BC)$ et $(AD) \\perp (DC)$',
            '$(EF) \\perp (FG)$ et $(EF) \\parallel (AE)$',
          ],
          correctAnswerIndex: 0,
          explanation: 'On a $(CG) \\parallel (AE)$ et $(GH) \\parallel (DC)$ ; dans la face carrée $CDHG$, $(CG) \\perp (GH)$, donc $(AE) \\perp (DC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q3',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Pourquoi a-t-on $(IJ) \\perp (AC)$ ?',
          options: [
            'Car $(IJ)$ et $(AC)$ sont sécantes à angle droit',
            'Car $(IJ) \\parallel (DB)$ dans le triangle $BDG$ et $(AC) \\perp (DB)$ dans le carré $ABCD$',
            'Car $(IJ) \\parallel (EG)$ et $(EG) \\perp (AC)$',
            'Car $I, J, A, C$ forment un rectangle',
          ],
          correctAnswerIndex: 1,
          explanation: 'Dans le triangle $BDG$, la droite des milieux donne $(IJ) \\parallel (DB)$. Or dans le carré $ABCD$, les diagonales $(AC)$ et $(DB)$ sont perpendiculaires, d’où $(IJ) \\perp (AC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q4',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $Q$ et $R$ sont les milieux de $[AE]$ et $[BF]$. Pourquoi $(AR)$ et $(HG)$ ne sont-elles PAS orthogonales ?',
          options: [
            'Car elles ne sont pas sécantes',
            'Car $(AR) \\parallel (QF)$ et $(HG) \\parallel (EF)$, or le triangle $QEF$ est rectangle en $E$ donc $(QF)$ n’est pas perpendiculaire à $(EF)$',
            'Car $(AR)$ est parallèle à $(HG)$',
            'Car $(AR)$ est contenue dans la face $ABCD$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On a $(AR) \\parallel (QF)$ et $(HG) \\parallel (EF)$. Or dans le triangle rectangle $QEF$ en $E$, $(QF)$ n’est pas orthogonale à $(EF)$, donc $(AR)$ et $(HG)$ ne sont pas orthogonales.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q5',
          type: 'mcq',
          prompt: 'On sait que dans l’espace, $(D_1) \\perp (\\Delta)$ et $(D_2) \\perp (\\Delta)$. Que peut-on en déduire ?',
          options: [
            '$(D_1) \\parallel (D_2)$',
            '$(D_1) \\perp (D_2)$',
            'Rien sur la position relative de $(D_1)$ et $(D_2)$ (elles peuvent être parallèles, perpendiculaires ou quelconques)',
            '$(D_1)$ et $(D_2)$ sont confondues',
          ],
          correctAnswerIndex: 2,
          explanation: 'Dans l’espace, une infinité de droites de directions distinctes sont orthogonales à $(\\Delta)$ : dans le cube, $(AB)$ et $(AD)$ sont orthogonales à $(AE)$ mais perpendiculaires entre elles ; $(AB)$ et $(EF)$ le sont aussi tout en étant parallèles.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q6',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, la droite $(AB)$ est orthogonale à laquelle des droites suivantes ?',
          options: ['$(CD)$', '$(CG)$', '$(EF)$', '$(GH)$'],
          correctAnswerIndex: 1,
          explanation: '$(CD)$, $(EF)$ et $(GH)$ sont toutes parallèles à $(AB)$. Seule $(CG)$ appartient à la direction verticale, perpendiculaire à $(BC)$ qui est parallèle à $(AD) \\perp (AB)$ : donc $(AB) \\perp (CG)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Droite et plan orthogonaux : définition et propriété fondamentale
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02',
      order: 2,
      title: 'Droite perpendiculaire à un plan et propriété fondamentale',
      summary:
        'Une droite (D) est perpendiculaire à (P) ssi elle est orthogonale à deux droites sécantes de (P). Conséquence fondamentale : (D) est orthogonale à toute droite de (P).',
      conceptExplanation:
        "Dans l’espace, une droite $(D)$ est dite **perpendiculaire** (ou orthogonale) à un plan $(P)$ lorsque $(D)$ est orthogonale à **deux droites sécantes** contenues dans $(P)$. On note $(D) \\perp (P)$.\n$$\\begin{cases} (d_1) \\subset (P),\\; (d_2) \\subset (P) \\\\ (d_1) \\text{ et } (d_2) \\text{ sécantes} \\\\ (D) \\perp (d_1) \\text{ et } (D) \\perp (d_2) \\end{cases} \\implies (D) \\perp (P)$$\n\n**Propriété fondamentale** : Si une droite $(D)$ est perpendiculaire à un plan $(P)$, alors $(D)$ est orthogonale à **toute droite incluse dans $(P)$**.\n$$(D) \\perp (P) \\text{ et } (\\Delta) \\subset (P) \\implies (D) \\perp (\\Delta)$$\n\nCette propriété est l’outil numéro un pour démontrer que deux droites $(D)$ et $(\\Delta)$ sont orthogonales : il suffit de trouver un plan contenant l’une d’elles et auquel l’autre est perpendiculaire !",
      keyRule:
        'Pour montrer (D) ⊥ (P) : trouver DEUX droites SÉCANTES de (P) orthogonales à (D). Pour montrer (D) ⊥ (Δ) : montrer que (D) est perpendiculaire à un plan contenant (Δ).',
      formulas: [
        { name: 'Critère droite ⊥ plan', formula: '(d_1),(d_2)\\text{ sécantes dans }(P),\\;(D)\\perp(d_1),\\;(D)\\perp(d_2) \\implies (D) \\perp (P)' },
        { name: 'Propriété fondamentale', formula: '(D) \\perp (P) \\text{ et } (\\Delta) \\subset (P) \\implies (D) \\perp (\\Delta)' },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Droite (D) perpendiculaire au plan (P) : critère des deux sécantes',
        caption: '(D) ⊥ (d₁) et (D) ⊥ (d₂) avec (d₁) et (d₂) sécantes dans (P) ⇒ (D) ⊥ (P).',
        svgContent: `<svg viewBox="0 0 340 190" width="320" height="179" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,145 100,82 300,82 240,145" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <line x1="85" y1="128" x2="255" y2="98" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="115" y1="94" x2="225" y2="134" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="170" y1="20" x2="170" y2="114" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="170" y1="114" x2="170" y2="145" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="170" y1="145" x2="170" y2="175" stroke="#2563eb" stroke-width="2.5"/>
  <polyline points="170,101 183,99 183,112" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <polyline points="170,101 157,109 157,120" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <text x="178" y="34" font-size="13" font-weight="bold" fill="#2563eb">(D)</text>
  <text x="255" y="138" font-size="13" font-weight="bold" fill="#92400e">(P)</text>
  <text x="258" y="102" font-size="12" fill="#1e293b">(d₁)</text>
  <text x="227" y="136" font-size="12" fill="#1e293b">(d₂)</text>
</svg>`,
      },
      workedExample: {
        title: 'Arêtes opposées orthogonales d’un tétraèdre SABC',
        statement:
          'Soit $SABC$ un tétraèdre tel que $(SA) \\perp (ABC)$ et le triangle $ABC$ soit rectangle en $A$. Démontre que $(SB) \\perp (AC)$ puis que $(SC) \\perp (AB)$.',
        methodSteps: [
          'Comme $(SA) \\perp (ABC)$ et $(AC) \\subset (ABC)$, la propriété fondamentale donne $(SA) \\perp (AC)$.',
          'De plus le triangle $ABC$ est rectangle en $A$, donc $(AC) \\perp (AB)$.',
          'Les droites $(SA)$ et $(AB)$ sont deux droites sécantes (en $A$) du plan $(SAB)$ : donc $(AC) \\perp (SAB)$.',
          'Or $(SB) \\subset (SAB)$, donc par la propriété fondamentale $(AC) \\perp (SB)$. Par le même raisonnement avec $(AB) \\perp (SA)$ et $(AB) \\perp (AC)$, on obtient $(AB) \\perp (SAC)$ et donc $(AB) \\perp (SC)$.',
        ],
        conclusion: 'Les couples d’arêtes opposées $(SB)$ et $(AC)$, puis $(SC)$ et $(AB)$ sont orthogonaux.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Définition d’une droite perpendiculaire à un plan',
          stepTitle: 'Deux droites sécantes du plan suffisent',
          paragraphText:
            'Une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsqu’elle est orthogonale à deux droites sécantes incluses dans $(P)$. Par exemple, dans le cube $ABCDEFGH$, $(DH) \\perp (HE)$ et $(DH) \\perp (HG)$ qui sont sécantes en $H$ dans $(EGH)$, donc $(DH) \\perp (EGH)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q1',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, pour montrer que $(EF) \\perp (BFG)$, quelles deux droites du plan $(BFG)$ suffit-il d’utiliser ?',
            options: [
              '$(BF)$ et $(CG)$, car elles sont parallèles',
              '$(BF)$ et $(FG)$, car elles sont sécantes en $F$ et orthogonales à $(EF)$',
              '$(BG)$ seule, car c’est une diagonale',
              '$(AB)$ et $(CD)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(BF)$ et $(FG)$ sont deux droites sécantes (en $F$) du plan $(BFG)$ et $(EF)$ est perpendiculaire à chacune d’elles, donc $(EF) \\perp (BFG)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Propriété fondamentale',
          stepTitle: 'Orthogonale à deux sécantes ⇒ orthogonale à TOUTES les droites du plan',
          paragraphText:
            'Une fois établi que $(D) \\perp (P)$, $(D)$ est automatiquement orthogonale à n’importe quelle droite incluse dans $(P)$ — même si elle ne passe pas par le pied de $(D)$.',
          formula: { name: 'Propriété fondamentale', formula: '(D) \\perp (P) \\text{ et } (\\Delta) \\subset (P) \\implies (D) \\perp (\\Delta)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q2',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, sachant que $(DH) \\perp (EGH)$, que peut-on en déduire immédiatement pour $(DH)$ et $(EG)$ ?',
            options: [
              '$(DH)$ et $(EG)$ sont parallèles',
              '$(DH)$ et $(EG)$ sont perpendiculaires en $H$',
              '$(DH)$ et $(EG)$ sont orthogonales car $(EG) \\subset (EGH)$',
              'On ne peut rien déduire sans calculer $EG$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Puisque $(DH) \\perp (EGH)$ et $(EG) \\subset (EGH)$, la propriété fondamentale assure que $(DH) \\perp (EG)$ (elles sont orthogonales, et d’ailleurs non sécantes).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Utiliser un plan auxiliaire pour prouver (D₁) ⊥ (D₂)',
          stepTitle: 'Enfermer une droite dans un plan perpendiculaire à l’autre',
          paragraphText:
            'Dans la situation d’apprentissage du cube $ABCDEFGH$ ($I, J$ milieux de $[FB], [FG]$), pour prouver $(HG) \\perp (IJ)$, on observe que $(IJ) \\subset (BFG)$, or $(HG) \\perp (GF)$ et $(HG) \\perp (GC)$ sécantes dans $(BFG)$ : donc $(HG) \\perp (BFG)$, d’où $(HG) \\perp (IJ)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q3',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $I$ et $J$ sont les milieux de $[FB]$ et $[FG]$. Comment prouve-t-on que $(HG) \\perp (IJ)$ ?',
            options: [
              'En montrant que $(HG) \\perp (BFG)$ car $(HG) \\perp (FG)$ et $(HG) \\perp (GC)$, puis en utilisant $(IJ) \\subset (BFG)$',
              'En montrant que $(IJ) \\parallel (HG)$',
              'En montrant que $(IJ) \\subset (EFG)$ et $(HG) \\perp (EFG)$',
              'En calculant $HI = HJ$',
            ],
            correctAnswerIndex: 0,
            explanation: '$(HG) \\perp (FG)$ et $(HG) \\perp (GC)$ qui sont sécantes en $G$ dans $(BFG)$, donc $(HG) \\perp (BFG)$. Comme $I \\in [FB]$ et $J \\in [FG]$, $(IJ) \\subset (BFG)$, donc $(HG) \\perp (IJ)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Grande diagonale du cube et face diagonale',
          stepTitle: 'Montrer que (AF) ⊥ (EBC) puis (AF) ⊥ (EC)',
          paragraphText:
            'Dans le cube $ABCDEFGH$ : $(AF)$ et $(EB)$ sont les diagonales du carré $ABFE$, donc $(AF) \\perp (EB)$. De plus $(BC) \\perp (ABFE)$ (car $(BC) \\perp (AB)$ et $(BC) \\perp (BF)$), donc $(BC) \\perp (AF)$. Comme $(EB)$ et $(BC)$ sont sécantes en $B$ dans $(EBC)$, $(AF) \\perp (EBC)$, ce qui entraîne $(AF) \\perp (EC)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q4',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, pourquoi a-t-on $(AF) \\perp (EC)$ ?',
            options: [
              'Car $(AF)$ et $(EC)$ sont deux arêtes perpendiculaires',
              'Car $(AF) \\perp (EB)$ et $(AF) \\perp (BC)$, donc $(AF) \\perp (EBC)$ qui contient $(EC)$',
              'Car $(EC) \\parallel (AB)$ et $(AF) \\perp (AB)$',
              'Car $AEFC$ est un carré',
            ],
            correctAnswerIndex: 1,
            explanation: '$(EB)$ et $(BC)$ sont sécantes en $B$ dans $(EBC)$, et $(AF)$ est orthogonale à ces deux droites : donc $(AF) \\perp (EBC)$ et par conséquent $(AF) \\perp (EC)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Condition « sécantes » indispensable',
          stepTitle: 'Deux droites parallèles d’un plan ne suffisent JAMAIS',
          paragraphText:
            'Si une droite $(D)$ est orthogonale à deux droites **parallèles** contenues dans un plan $(P)$, on ne peut pas conclure que $(D) \\perp (P)$ ! Par exemple, dans le cube, $(DF)$... plutôt : $(BC)$ est orthogonale à $(AB)$ et à $(EF)$ (ou dans $(ABCD)$, $(AE)$ est orthogonale à $(AB)$ et à $(CD)$ ? Ici $(AE) \\perp (ABCD)$ aussi, prenons donc $(BH)$ ? Mieux : dans le cube, $(AB)$ est orthogonale à $(AD)$ et à $(BC)$ qui sont parallèles dans $(ABCD)$, et pourtant $(AB) \\subset (ABCD)$ n’est pas perpendiculaire à $(ABCD)$ !).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q5',
            type: 'mcq',
            prompt: 'Vrai ou faux : « Toute droite $(D)$ orthogonale à deux droites parallèles d’un plan $(P)$ est perpendiculaire à $(P)$. »',
            options: [
              'Vrai, deux droites suffisent toujours',
              'Faux, les deux droites de $(P)$ doivent être sécantes (ex. $(AB)$ est orthogonale à $(AD)$ et $(BC)$ dans $(ABCD)$ mais incluse dans $(ABCD)$)',
              'Vrai si $(D)$ coupe les deux droites',
              'Faux uniquement si $(D)$ ne coupe pas $(P)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Il faut impérativement deux droites **sécantes** de $(P)$ pour définir sa direction. Deux droites parallèles ne caractérisent pas un plan.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Triangles rectangles dans un cube',
          stepTitle: 'Justifier qu’un triangle est rectangle grâce à (D) ⊥ (P)',
          paragraphText:
            'Dans le cube $ABCDEFGH$, on veut savoir si les triangles $EBG$, $HEC$ et $AEC$ sont rectangles. $EBG$ a pour côtés trois diagonales de faces égales ($a\\sqrt{2}$) : il est équilatéral ! En revanche, $(EH) \\perp (CDH)$ entraîne $(EH) \\perp (HC)$ (donc $HEC$ est rectangle en $H$) et $(AE) \\perp (ABC)$ entraîne $(AE) \\perp (AC)$ (donc $AEC$ est rectangle en $A$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q6',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, lequel de ces triangles N’EST PAS rectangle ?',
            options: ['$HEC$', '$AEC$', '$EBG$', '$ABD$'],
            correctAnswerIndex: 2,
            explanation: '$EB = BG = EG = a\\sqrt{2}$ (diagonales de trois faces carrées) : $EBG$ est équilatéral (angles de $60°$). À l’inverse, $HEC$ est rectangle en $H$, $AEC$ en $A$ et $ABD$ en $A$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q1',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, pour montrer que $(EF) \\perp (BFG)$, quelles deux droites du plan $(BFG)$ suffit-il d’utiliser ?',
          options: [
            '$(BF)$ et $(CG)$, car elles sont parallèles',
            '$(BF)$ et $(FG)$, car elles sont sécantes en $F$ et orthogonales à $(EF)$',
            '$(BG)$ seule, car c’est une diagonale',
            '$(AB)$ et $(CD)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(BF)$ et $(FG)$ sont deux droites sécantes (en $F$) du plan $(BFG)$ et $(EF)$ est perpendiculaire à chacune d’elles, donc $(EF) \\perp (BFG)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q2',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, sachant que $(DH) \\perp (EGH)$, que peut-on en déduire immédiatement pour $(DH)$ et $(EG)$ ?',
          options: [
            '$(DH)$ et $(EG)$ sont parallèles',
            '$(DH)$ et $(EG)$ sont perpendiculaires en $H$',
            '$(DH)$ et $(EG)$ sont orthogonales car $(EG) \\subset (EGH)$',
            'On ne peut rien déduire sans calculer $EG$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Puisque $(DH) \\perp (EGH)$ et $(EG) \\subset (EGH)$, la propriété fondamentale assure que $(DH) \\perp (EG)$ (elles sont orthogonales, et d’ailleurs non sécantes).',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q3',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $I$ et $J$ sont les milieux de $[FB]$ et $[FG]$. Comment prouve-t-on que $(HG) \\perp (IJ)$ ?',
          options: [
            'En montrant que $(HG) \\perp (BFG)$ car $(HG) \\perp (FG)$ et $(HG) \\perp (GC)$, puis en utilisant $(IJ) \\subset (BFG)$',
            'En montrant que $(IJ) \\parallel (HG)$',
            'En montrant que $(IJ) \\subset (EFG)$ et $(HG) \\perp (EFG)$',
            'En calculant $HI = HJ$',
          ],
          correctAnswerIndex: 0,
          explanation: '$(HG) \\perp (FG)$ et $(HG) \\perp (GC)$ qui sont sécantes en $G$ dans $(BFG)$, donc $(HG) \\perp (BFG)$. Comme $I \\in [FB]$ et $J \\in [FG]$, $(IJ) \\subset (BFG)$, donc $(HG) \\perp (IJ)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q4',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, pourquoi a-t-on $(AF) \\perp (EC)$ ?',
          options: [
            'Car $(AF)$ et $(EC)$ sont deux arêtes perpendiculaires',
            'Car $(AF) \\perp (EB)$ et $(AF) \\perp (BC)$, donc $(AF) \\perp (EBC)$ qui contient $(EC)$',
            'Car $(EC) \\parallel (AB)$ et $(AF) \\perp (AB)$',
            'Car $AEFC$ est un carré',
          ],
          correctAnswerIndex: 1,
          explanation: '$(EB)$ et $(BC)$ sont sécantes en $B$ dans $(EBC)$, et $(AF)$ est orthogonale à ces deux droites : donc $(AF) \\perp (EBC)$ et par conséquent $(AF) \\perp (EC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q5',
          type: 'mcq',
          prompt: 'Vrai ou faux : « Toute droite $(D)$ orthogonale à deux droites parallèles d’un plan $(P)$ est perpendiculaire à $(P)$. »',
          options: [
            'Vrai, deux droites suffisent toujours',
            'Faux, les deux droites de $(P)$ doivent être sécantes (ex. $(AB)$ est orthogonale à $(AD)$ et $(BC)$ dans $(ABCD)$ mais incluse dans $(ABCD)$)',
            'Vrai si $(D)$ coupe les deux droites',
            'Faux uniquement si $(D)$ ne coupe pas $(P)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Il faut impérativement deux droites **sécantes** de $(P)$ pour définir sa direction. Deux droites parallèles ne caractérisent pas un plan.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q6',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, lequel de ces triangles N’EST PAS rectangle ?',
          options: ['$HEC$', '$AEC$', '$EBG$', '$ABD$'],
          correctAnswerIndex: 2,
          explanation: '$EB = BG = EG = a\\sqrt{2}$ (diagonales de trois faces carrées) : $EBG$ est équilatéral (angles de $60°$). À l’inverse, $HEC$ est rectangle en $H$, $AEC$ en $A$ et $ABD$ en $A$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Unicité et théorèmes liant parallélisme et orthogonalité
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03',
      order: 3,
      title: 'Unicité et théorèmes liant parallélisme et orthogonalité',
      summary:
        'Existence et unicité de la droite perpendiculaire à un plan et du plan perpendiculaire à une droite ; transfert par parallélisme et orthogonalité à un même objet.',
      conceptExplanation:
        "Voici les six théorèmes de structure qui relient orthogonalité et parallélisme dans l’espace :\n\n1. **Unicité de la droite perpendiculaire à un plan** : Par un point donné $M$, il existe une **unique droite** perpendiculaire à un plan $(P)$ donné.\n2. **Unicité du plan perpendiculaire à une droite** : Par un point donné $M$, il existe un **unique plan** perpendiculaire à une droite $(D)$ donnée (attention : il existe par contre une *infinité* de droites passant par $M$ et orthogonales à $(D)$ — toutes celles contenues dans cet unique plan !).\n\n3. **Droites parallèles et plan** : Si deux droites sont parallèles, tout plan perpendiculaire à l’une est perpendiculaire à l’autre.\n4. **Deux droites perpendiculaires à un même plan** : Si $(D_1) \\perp (P)$ et $(D_2) \\perp (P)$, alors **$(D_1) \\parallel (D_2)$**.\n5. **Plans parallèles et droite** : Si deux plans sont parallèles, toute droite perpendiculaire à l’un est perpendiculaire à l’autre.\n6. **Deux plans perpendiculaires à une même droite** : Si $(P) \\perp (D)$ et $(Q) \\perp (D)$, alors **$(P) \\parallel (Q)$**.",
      keyRule:
        'Unicité : par M passe 1 unique droite ⊥ (P) et 1 unique plan ⊥ (D) (mais ∞ droites orthogonales à (D)). Deux droites ⊥ à un même plan sont parallèles ; deux plans ⊥ à une même droite sont parallèles.',
      formulas: [
        { name: 'Deux droites ⊥ à un même plan', formula: '(D_1) \\perp (P) \\text{ et } (D_2) \\perp (P) \\implies (D_1) \\parallel (D_2)' },
        { name: 'Deux plans ⊥ à une même droite', formula: '(P) \\perp (D) \\text{ et } (Q) \\perp (D) \\implies (P) \\parallel (Q)' },
        { name: 'Transfert droite-plan', formula: '(D_1) \\parallel (D_2) \\text{ et } (D_1) \\perp (P) \\implies (D_2) \\perp (P)' },
        { name: 'Transfert plan-droite', formula: '(P) \\parallel (Q) \\text{ et } (D) \\perp (P) \\implies (D) \\perp (Q)' },
      ],
      workedExample: {
        title: 'Applications directes dans le cube ABCDEFGH',
        statement:
          'Dans le cube $ABCDEFGH$ :\n1) Quelle est l’unique droite passant par $B$ et perpendiculaire au plan $(GCD)$ ?\n2) Quel est l’unique plan passant par $A$ et perpendiculaire à la droite $(AD)$ ?\n3) Une droite $(D)$ coupe $(EFGH)$ en $I$ en étant orthogonale à $(FH)$ et $(EG)$. Montre que $(D) \\perp (ABD)$.',
        methodSteps: [
          '1) $(BC) \\perp (CD)$ et $(BC) \\perp (CG)$, donc $(BC) \\perp (GCD)$. Par unicité de la droite passant par $B$ et perpendiculaire à $(GCD)$, c’est la droite $(BC)$.',
          '2) $(AD) \\perp (AB)$ et $(AD) \\perp (AE)$, donc $(AD) \\perp (ABE)$. Par unicité du plan passant par $A$ et perpendiculaire à $(AD)$, c’est le plan $(ABE)$.',
          '3) $(FH)$ et $(EG)$ sont sécantes en $I$ dans $(EFGH)$, donc $(D) \\perp (EFGH)$. Or les faces opposées $(EFGH)$ et $(ABD)$ du cube sont parallèles, donc $(D) \\perp (ABD)$.',
        ],
        conclusion: '1) $(BC)$, 2) $(ABE)$, 3) $(D) \\perp (ABD)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Unicité de la droite perpendiculaire à un plan',
          stepTitle: 'Une seule droite par un point donné ⊥ (P)',
          paragraphText:
            'Par un point donné $M$ de l’espace (sur le plan ou hors du plan), il passe une et une seule droite perpendiculaire à un plan $(P)$ donné.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q1',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, combien existe-t-il de droites passant par $B$ et perpendiculaires au plan $(GCD)$, et quelle est-elle ?',
            options: [
              'Une infinité, formant la face $ABFE$',
              'Une seule : la droite $(BC)$',
              'Deux : $(BA)$ et $(BC)$',
              'Aucune, car $B \\notin (GCD)$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par un point donné $B$, il passe une unique droite perpendiculaire à $(GCD)$. Comme $(BC) \\perp (CD)$ et $(BC) \\perp (CG)$, cette unique droite est $(BC)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Unicité du plan perpendiculaire à une droite',
          stepTitle: 'Un seul plan par un point donné ⊥ (D)',
          paragraphText:
            'Par un point donné $M$, il existe un unique plan perpendiculaire à une droite $(D)$ donnée (c’est le plan médiateur du segment si $M$ en est le milieu et que $(D)$ est la droite du segment).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q2',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, quel est l’unique plan passant par $A$ et perpendiculaire à la droite $(AD)$ ?',
            options: ['$(ABC)$', '$(ABE)$', '$(ADH)$', '$(EFG)$'],
            correctAnswerIndex: 1,
            explanation: '$(AD) \\perp (AB)$ et $(AD) \\perp (AE)$ sécantes en $A$ dans $(ABE)$, donc $(ABE)$ est l’unique plan passant par $A$ et perpendiculaire à $(AD)$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Deux droites orthogonales à un même plan',
          stepTitle: '(D₁) ⊥ (P) et (D₂) ⊥ (P) ⇒ (D₁) // (D₂)',
          paragraphText:
            'Si deux droites sont perpendiculaires à un même plan, elles ont nécessairement la même direction (celle de la normale au plan) : elles sont parallèles (ou confondues).',
          formula: { name: 'Parallélisme via plan', formula: '(D_1) \\perp (P) \\text{ et } (D_2) \\perp (P) \\implies (D_1) \\parallel (D_2)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q3',
            type: 'mcq',
            prompt: 'Dans l’espace, que peut-on toujours conclure si deux droites distinctes $(D_1)$ et $(D_2)$ sont toutes deux perpendiculaires à un même plan $(P)$ ?',
            options: [
              'Elles sont perpendiculaires entre elles',
              'Elles sont parallèles',
              'Elles sont orthogonales mais non coplanaires',
              'Elles sont sécantes',
            ],
            correctAnswerIndex: 1,
            explanation: 'Deux droites perpendiculaires à un même plan sont toujours parallèles (donc coplanaires).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Deux plans perpendiculaires à une même droite',
          stepTitle: '(P) ⊥ (D) et (Q) ⊥ (D) ⇒ (P) // (Q)',
          paragraphText:
            'Si deux plans sont perpendiculaires à une même droite, alors ils sont parallèles. De même, si $(P) \\parallel (Q)$ et $(D) \\perp (P)$, alors $(D) \\perp (Q)$.',
          formula: { name: 'Plans ⊥ à une droite', formula: '(P) \\perp (D) \\text{ et } (Q) \\perp (D) \\implies (P) \\parallel (Q)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q4',
            type: 'mcq',
            prompt: 'Dans un tétraèdre $SABC$, la droite $(D)$ est orthogonale aux deux faces $(ABC)$ et $(IJK)$. Que peut-on en déduire pour les plans $(ABC)$ et $(IJK)$ ?',
            options: [
              'Ils sont perpendiculaires',
              'Ils sont parallèles',
              'Ils sont sécants le long de $(D)$',
              'On ne peut rien conclure',
            ],
            correctAnswerIndex: 1,
            explanation: 'Deux plans perpendiculaires à une même droite $(D)$ sont parallèles.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Droite orthogonale à une droite donnée par un point M',
          stepTitle: 'Par M, il passe une INFINITÉ de droites orthogonales à (D) !',
          paragraphText:
            'Attention à cette erreur fréquente : par un point donné $M$ de l’espace, il ne passe **pas** une unique droite orthogonale à une droite $(D)$, mais une **infinité** ! Toutes les droites passant par $M$ et incluses dans l’unique plan $(P)$ passant par $M$ perpendiculaire à $(D)$ sont orthogonales à $(D)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q5',
            type: 'mcq',
            prompt: 'Soit $M$ un point de l’espace et $(D)$ une droite. Combien existe-t-il de droites passant par $M$ et orthogonales à $(D)$ ?',
            options: [
              'Aucune si $M \\notin (D)$',
              'Une seule',
              'Exactement deux',
              'Une infinité (toutes celles du plan passant par $M$ et perpendiculaire à $(D)$)',
            ],
            correctAnswerIndex: 3,
            explanation: 'Par $M$ passe un unique **plan** perpendiculaire à $(D)$, et par la propriété fondamentale toute droite de ce plan passant par $M$ est orthogonale à $(D)$ : il y en a donc une infinité.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Combinaison de parallélisme et d’orthogonalité',
          stepTitle: 'Enchaîner (AE) // (DH) et (EFGH) // (ABD)',
          paragraphText:
            'Dans le cube $ABCDEFGH$ : comme $(AE) \\parallel (DH)$ et $(DH) \\perp (FGH)$, on déduit $(AE) \\perp (FGH)$. De même, si $(D) \\perp (FGH)$ et $(FGH) \\parallel (ABD)$, on déduit $(D) \\perp (ABD)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q6',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $I$ est le milieu de $[BF]$, $J$ de $[FG]$ et $K$ de $[AE]$. Sachant que $(IK) \\parallel (AB)$, pourquoi $(IK) \\perp (ADE)$ ?',
            options: [
              'Car $(AB) \\perp (ADE)$ et $(IK) \\parallel (AB)$',
              'Car $(IK)$ est incluse dans $(ADE)$',
              'Car $(IK) \\perp (BC)$ uniquement',
              'Car $I, K, A, D$ forment un carré',
            ],
            correctAnswerIndex: 0,
            explanation: 'Dans le cube, $(AB) \\perp (AD)$ et $(AB) \\perp (AE)$, donc $(AB) \\perp (ADE)$. Comme $(IK) \\parallel (AB)$ (dans le rectangle $ABFE$), tout plan perpendiculaire à $(AB)$ est perpendiculaire à $(IK)$ : donc $(IK) \\perp (ADE)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q1',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, combien existe-t-il de droites passant par $B$ et perpendiculaires au plan $(GCD)$, et quelle est-elle ?',
          options: [
            'Une infinité, formant la face $ABFE$',
            'Une seule : la droite $(BC)$',
            'Deux : $(BA)$ et $(BC)$',
            'Aucune, car $B \\notin (GCD)$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par un point donné $B$, il passe une unique droite perpendiculaire à $(GCD)$. Comme $(BC) \\perp (CD)$ et $(BC) \\perp (CG)$, cette unique droite est $(BC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q2',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, quel est l’unique plan passant par $A$ et perpendiculaire à la droite $(AD)$ ?',
          options: ['$(ABC)$', '$(ABE)$', '$(ADH)$', '$(EFG)$'],
          correctAnswerIndex: 1,
          explanation: '$(AD) \\perp (AB)$ et $(AD) \\perp (AE)$ sécantes en $A$ dans $(ABE)$, donc $(ABE)$ est l’unique plan passant par $A$ et perpendiculaire à $(AD)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q3',
          type: 'mcq',
          prompt: 'Dans l’espace, que peut-on toujours conclure si deux droites distinctes $(D_1)$ et $(D_2)$ sont toutes deux perpendiculaires à un même plan $(P)$ ?',
          options: [
            'Elles sont perpendiculaires entre elles',
            'Elles sont parallèles',
            'Elles sont orthogonales mais non coplanaires',
            'Elles sont sécantes',
          ],
          correctAnswerIndex: 1,
          explanation: 'Deux droites perpendiculaires à un même plan sont toujours parallèles (donc coplanaires).',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q4',
          type: 'mcq',
          prompt: 'Dans un tétraèdre $SABC$, la droite $(D)$ est orthogonale aux deux faces $(ABC)$ et $(IJK)$. Que peut-on en déduire pour les plans $(ABC)$ et $(IJK)$ ?',
          options: [
            'Ils sont perpendiculaires',
            'Ils sont parallèles',
            'Ils sont sécants le long de $(D)$',
            'On ne peut rien conclure',
          ],
          correctAnswerIndex: 1,
          explanation: 'Deux plans perpendiculaires à une même droite $(D)$ sont parallèles.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q5',
          type: 'mcq',
          prompt: 'Soit $M$ un point de l’espace et $(D)$ une droite. Combien existe-t-il de droites passant par $M$ et orthogonales à $(D)$ ?',
          options: [
            'Aucune si $M \\notin (D)$',
            'Une seule',
            'Exactement deux',
            'Une infinité (toutes celles du plan passant par $M$ et perpendiculaire à $(D)$)',
          ],
          correctAnswerIndex: 3,
          explanation: 'Par $M$ passe un unique **plan** perpendiculaire à $(D)$, et par la propriété fondamentale toute droite de ce plan passant par $M$ est orthogonale à $(D)$ : il y en a donc une infinité.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q6',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $I$ est le milieu de $[BF]$, $J$ de $[FG]$ et $K$ de $[AE]$. Sachant que $(IK) \\parallel (AB)$, pourquoi $(IK) \\perp (ADE)$ ?',
          options: [
            'Car $(AB) \\perp (ADE)$ et $(IK) \\parallel (AB)$',
            'Car $(IK)$ est incluse dans $(ADE)$',
            'Car $(IK) \\perp (BC)$ uniquement',
            'Car $I, K, A, D$ forment un carré',
          ],
          correctAnswerIndex: 0,
          explanation: 'Dans le cube, $(AB) \\perp (AD)$ et $(AB) \\perp (AE)$, donc $(AB) \\perp (ADE)$. Comme $(IK) \\parallel (AB)$, tout plan perpendiculaire à $(AB)$ est perpendiculaire à $(IK)$ : donc $(IK) \\perp (ADE)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Plans perpendiculaires de l'espace
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04',
      order: 4,
      title: 'Plans perpendiculaires de l’espace',
      summary:
        'Définition de deux plans perpendiculaires ((d) ⊂ (P) et (d) ⊥ (Q)), conséquences, théorème de la droite d’intersection et contre-exemple de deux plans perpendiculaires à un même plan.',
      conceptExplanation:
        "Dans l’espace, deux plans $(P)$ et $(Q)$ sont dits **perpendiculaires** (on note $(P) \\perp (Q)$) lorsque l’un d’eux contient une droite perpendiculaire à l’autre :\n$$\\begin{cases} (d) \\subset (P) \\\\ (d) \\perp (Q) \\end{cases} \\implies (P) \\perp (Q)$$\n(La relation est symétrique : si $(P)$ contient une droite orthogonale à $(Q)$, alors $(Q)$ contient aussi une droite orthogonale à $(P)$.)\n\n**Propriétés importantes** :\n- Si une droite $(D)$ est perpendiculaire à $(P)$, tout plan contenant $(D)$ (ou parallèle à $(D)$) est perpendiculaire à $(P)$.\n- Si deux plans sont perpendiculaires, tout plan parallèle à l’un est perpendiculaire à l’autre.\n- Un plan $(R)$ est perpendiculaire à **deux plans sécants** $(P)$ et $(Q)$ si et seulement si $(R)$ est perpendiculaire à **leur droite d’intersection** $(\\Delta) = (P) \\cap (Q)$.\n\n**Attention** : Deux plans perpendiculaires à un même plan $(P)$ ne sont **pas nécessairement parallèles** ! Par exemple, dans le cube $ABCDEFGH$, deux murs adjacents $(ABFE)$ et $(ADHE)$ sont tous deux perpendiculaires au sol $(ABCD)$, et ils sont sécants le long de $(AE)$.",
      keyRule:
        'Pour montrer (P) ⊥ (Q) : exhiber une droite incluse dans (P) qui est perpendiculaire à (Q). Et si (R) ⊥ (P) et (R) ⊥ (Q) (sécants), alors (R) ⊥ ((P) ∩ (Q)).',
      formulas: [
        { name: 'Critère plans perpendiculaires', formula: '(d) \\subset (P) \\text{ et } (d) \\perp (Q) \\implies (P) \\perp (Q)' },
        { name: 'Plans sécants ⊥ à un 3e plan', formula: '(P)\\perp(R) \\text{ et } (Q)\\perp(R) \\text{ (avec } (P)\\cap(Q)=(\\Delta)\\text{)} \\iff (\\Delta) \\perp (R)' },
      ],
      workedExample: {
        title: 'Démontrer que (ACE) et (DEH) sont perpendiculaires au plan (ABC) puis (AEC) ⊥ (HDB)',
        statement:
          'Dans le cube $ABCDEFGH$ :\n1) Démontre que les plans $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$.\n2) Démontre que $(AEC) \\perp (HDB)$.',
        methodSteps: [
          '1) Les plans $(ACE)$ et $(DEH)$ (c’est-à-dire $(ADHE)$) sont sécants et leur droite d’intersection est $(AE)$. Or $(AE) \\perp (AD)$ et $(AE) \\perp (AB)$ sécantes dans $(ABC)$, donc $(AE) \\perp (ABC)$. Comme $(AE)$ est incluse dans $(ACE)$ et dans $(DEH)$, ces deux plans sont perpendiculaires à $(ABC)$.',
          '2) Dans le carré $ABCD$, $(AC) \\perp (BD)$. De plus, $(CG) \\perp (ABC)$ entraîne $(CG) \\perp (AC)$, et comme $(HD) \\parallel (CG)$, on a $(AC) \\perp (HD)$.',
          'Les droites $(BD)$ et $(HD)$ étant sécantes en $D$ dans $(HDB)$, il vient $(AC) \\perp (HDB)$. Comme $(AC) \\subset (AEC)$, on conclut $(AEC) \\perp (HDB)$.',
        ],
        conclusion: '1) $(ACE) \\perp (ABC)$ et $(DEH) \\perp (ABC)$. 2) $(AEC) \\perp (HDB)$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Critère pour montrer (P) ⊥ (Q)',
          stepTitle: 'Trouver une droite de (P) perpendiculaire à (Q)',
          paragraphText:
            'Pour démontrer que deux plans $(P)$ et $(Q)$ sont perpendiculaires, la méthode standard consiste à repérer une droite $(d)$ incluse dans l’un et à prouver qu’elle est perpendiculaire à deux droites sécantes de l’autre.',
          formula: { name: 'Critère', formula: '(d) \\subset (P) \\text{ et } (d) \\perp (Q) \\implies (P) \\perp (Q)' },
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q1',
            type: 'mcq',
            prompt: 'Soit $SABCD$ une pyramide régulière à base carrée $ABCD$ de centre $O$ et de hauteur $[SO]$. Pourquoi les plans $(SDB)$ et $(ABD)$ sont-ils perpendiculaires ?',
            options: [
              'Car $(AO) \\subset (ABD)$ et $(AO) \\perp (SDB)$ (puisque $(AO) \\perp (BD)$ et $(AO) \\perp (SO)$)',
              'Car $SB = SD$',
              'Car $(BD)$ est incluse dans les deux plans',
              'Car le triangle $SBD$ est équilatéral',
            ],
            correctAnswerIndex: 0,
            explanation: '$ABCD$ est un carré donc $(AO) \\perp (BD)$, et $[SO]$ est la hauteur donc $(SO) \\perp (ABC)$, d’où $(SO) \\perp (AO)$. Ainsi $(AO) \\perp (SDB)$ ; comme $(AO) \\subset (ABD)$, on a $(ABD) \\perp (SDB)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Plans sécants perpendiculaires à un même troisième plan',
          stepTitle: 'Passer par leur droite d’intersection',
          paragraphText:
            'Un plan $(R)$ est perpendiculaire à deux plans sécants $(P)$ et $(Q)$ si et seulement si $(R)$ est perpendiculaire à leur droite d’intersection $(\\Delta) = (P) \\cap (Q)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q2',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $(ACE)$ et $(DEH)$ sont tous deux perpendiculaires à $(ABC)$ parce que :',
            options: [
              '$(ACE) \\parallel (DEH)$',
              'Leur droite d’intersection $(AE)$ est perpendiculaire au plan $(ABC)$',
              'Ils contiennent tous deux le point $C$',
              'Ils sont perpendiculaires à $(FGH)$ mais pas à $(ABC)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(AE)$ appartient aux deux plans $(ACE)$ et $(DEH)$ (qui sont sécants) et $(AE) \\perp (ABC)$, donc les deux plans sont perpendiculaires à $(ABC)$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Plans perpendiculaires et droites orthogonales dans le cube',
          stepTitle: 'Démontrer (FCH) ⊥ (AEG) dans le cube',
          paragraphText:
            'Dans le cube $ABCDEFGH$, les diagonales du carré $EFGH$ vérifient $(FH) \\perp (EG)$. De plus $(AE) \\perp (EFGH)$, donc $(AE) \\perp (FH)$. Ainsi $(FH) \\perp (AEG)$, et comme $(FH) \\subset (FCH)$, les plans $(FCH)$ et $(AEG)$ sont perpendiculaires.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q3',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, quelle droite incluse dans $(FCH)$ permet de prouver que $(FCH) \\perp (AEG)$ ?',
            options: ['$(FC)$', '$(CH)$', '$(FH)$', '$(FG)$'],
            correctAnswerIndex: 2,
            explanation: '$(FH) \\perp (EG)$ dans le carré $EFGH$ et $(FH) \\perp (AE)$ car $(AE) \\perp (EFGH)$. Donc $(FH) \\perp (AEG)$, ce qui prouve $(FCH) \\perp (AEG)$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Tétraèdre SABC avec (SB) ⊥ (ABC)',
          stepTitle: 'Plans perpendiculaires dans un tétraèdre',
          paragraphText:
            'Soit $SABC$ un tétraèdre tel que $(SB) \\perp (ABC)$ et le triangle $ABC$ soit rectangle en $A$. Comme $(SB) \\perp (ABC)$, on a $(SB) \\perp (AC)$. Comme $ABC$ est rectangle en $A$, $(AB) \\perp (AC)$. Donc $(AC) \\perp (SAB)$ ; or $(AC) \\subset (SAC)$, donc $(SAB) \\perp (SAC)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q4',
            type: 'mcq',
            prompt: 'Dans un tétraèdre $SABC$ avec $(SB) \\perp (ABC)$ et $ABC$ rectangle en $A$, pourquoi $(SAB) \\perp (SAC)$ ?',
            options: [
              'Car $(SB) \\perp (SC)$',
              'Car $(AC) \\perp (SB)$ et $(AC) \\perp (AB)$, donc $(AC) \\perp (SAB)$ avec $(AC) \\subset (SAC)$',
              'Car $(SA) \\perp (ABC)$',
              'Car $(AB) \\perp (SC)$',
            ],
            correctAnswerIndex: 1,
            explanation: '$(SB)$ et $(AB)$ sont sécantes en $B$ dans $(SAB)$, et $(AC)$ est orthogonale aux deux : donc $(AC) \\perp (SAB)$, d’où $(SAC) \\perp (SAB)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Deux plans perpendiculaires à un même plan',
          stepTitle: 'Deux murs perpendiculaires au sol ne sont pas parallèles !',
          paragraphText:
            'Attention : si $(P) \\perp (R)$ et $(Q) \\perp (R)$, $(P)$ et $(Q)$ peuvent très bien être **sécants** (et même perpendiculaires !), comme deux faces verticales adjacentes $(ABFE)$ et $(ADHE)$ d’un cube par rapport au sol $(ABCD)$. Ce sont deux plans perpendiculaires à une même **droite** qui sont toujours parallèles.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q5',
            type: 'mcq',
            prompt: 'Vrai ou faux : « Deux plans perpendiculaires à un même plan sont toujours parallèles. »',
            options: [
              'Vrai',
              'Faux : deux plans perpendiculaires à un même plan peuvent être sécants (ex. deux faces verticales adjacentes d’un cube par rapport à la base)',
              'Vrai s’ils sont disjoints',
              'Faux uniquement si le troisième plan est horizontal',
            ],
            correctAnswerIndex: 1,
            explanation: 'C’est faux ! Par exemple $(ABFE) \\perp (ABCD)$ et $(ADHE) \\perp (ABCD)$, mais $(ABFE)$ et $(ADHE)$ sont perpendiculaires le long de $(AE)$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Une droite d’un plan perp. à un autre n’est pas toujours ⊥ à cet autre plan',
          stepTitle: 'Seules certaines droites de (P) sont perpendiculaires à (Q)',
          paragraphText:
            'Si $(P) \\perp (Q)$, cela ne signifie PAS que **toute** droite de $(P)$ est perpendiculaire à $(Q)$ ! Dans le cube, $(ABFE) \\perp (ABCD)$, pourtant $(AF) \\subset (ABFE)$ n’est pas perpendiculaire à $(ABCD)$ — seules les droites de $(P)$ orthogonales à l’intersection $(P) \\cap (Q)$ le sont.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q6',
            type: 'mcq',
            prompt: 'On sait que $(P) \\perp (Q)$ et que leur droite d’intersection est $(\\Delta)$. Quelle droite $(d)$ de $(P)$ est perpendiculaire au plan $(Q)$ ?',
            options: [
              'Toute droite incluse dans $(P)$',
              'Uniquement les droites de $(P)$ parallèles à $(\\Delta)$',
              'Toute droite de $(P)$ perpendiculaire à $(\\Delta)$',
              'Aucune droite de $(P)$',
            ],
            correctAnswerIndex: 2,
            explanation: 'Dans un plan $(P)$ perpendiculaire à $(Q)$, ce sont précisément les droites de $(P)$ perpendiculaires à la droite d’intersection $(\\Delta)$ qui sont perpendiculaires au plan $(Q)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q1',
          type: 'mcq',
          prompt: 'Soit $SABCD$ une pyramide régulière à base carrée $ABCD$ de centre $O$ et de hauteur $[SO]$. Pourquoi les plans $(SDB)$ et $(ABD)$ sont-ils perpendiculaires ?',
          options: [
            'Car $(AO) \\subset (ABD)$ et $(AO) \\perp (SDB)$ (puisque $(AO) \\perp (BD)$ et $(AO) \\perp (SO)$)',
            'Car $SB = SD$',
            'Car $(BD)$ est incluse dans les deux plans',
            'Car le triangle $SBD$ est équilatéral',
          ],
          correctAnswerIndex: 0,
          explanation: '$ABCD$ est un carré donc $(AO) \\perp (BD)$, et $[SO]$ est la hauteur donc $(SO) \\perp (ABC)$, d’où $(SO) \\perp (AO)$. Ainsi $(AO) \\perp (SDB)$ ; comme $(AO) \\subset (ABD)$, on a $(ABD) \\perp (SDB)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q2',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $(ACE)$ et $(DEH)$ sont tous deux perpendiculaires à $(ABC)$ parce que :',
          options: [
            '$(ACE) \\parallel (DEH)$',
            'Leur droite d’intersection $(AE)$ est perpendiculaire au plan $(ABC)$',
            'Ils contiennent tous deux le point $C$',
            'Ils sont perpendiculaires à $(FGH)$ mais pas à $(ABC)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(AE)$ appartient aux deux plans $(ACE)$ et $(DEH)$ (qui sont sécants) et $(AE) \\perp (ABC)$, donc les deux plans sont perpendiculaires à $(ABC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q3',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, quelle droite incluse dans $(FCH)$ permet de prouver que $(FCH) \\perp (AEG)$ ?',
          options: ['$(FC)$', '$(CH)$', '$(FH)$', '$(FG)$'],
          correctAnswerIndex: 2,
          explanation: '$(FH) \\perp (EG)$ dans le carré $EFGH$ et $(FH) \\perp (AE)$ car $(AE) \\perp (EFGH)$. Donc $(FH) \\perp (AEG)$, ce qui prouve $(FCH) \\perp (AEG)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q4',
          type: 'mcq',
          prompt: 'Dans un tétraèdre $SABC$ avec $(SB) \\perp (ABC)$ et $ABC$ rectangle en $A$, pourquoi $(SAB) \\perp (SAC)$ ?',
          options: [
            'Car $(SB) \\perp (SC)$',
            'Car $(AC) \\perp (SB)$ et $(AC) \\perp (AB)$, donc $(AC) \\perp (SAB)$ avec $(AC) \\subset (SAC)$',
            'Car $(SA) \\perp (ABC)$',
            'Car $(AB) \\perp (SC)$',
          ],
          correctAnswerIndex: 1,
          explanation: '$(SB)$ et $(AB)$ sont sécantes en $B$ dans $(SAB)$, et $(AC)$ est orthogonale aux deux : donc $(AC) \\perp (SAB)$, d’où $(SAC) \\perp (SAB)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q5',
          type: 'mcq',
          prompt: 'Vrai ou faux : « Deux plans perpendiculaires à un même plan sont toujours parallèles. »',
          options: [
            'Vrai',
            'Faux : deux plans perpendiculaires à un même plan peuvent être sécants (ex. deux faces verticales adjacentes d’un cube par rapport à la base)',
            'Vrai s’ils sont disjoints',
            'Faux uniquement si le troisième plan est horizontal',
          ],
          correctAnswerIndex: 1,
          explanation: 'C’est faux ! Par exemple $(ABFE) \\perp (ABCD)$ et $(ADHE) \\perp (ABCD)$, mais $(ABFE)$ et $(ADHE)$ sont perpendiculaires le long de $(AE)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q6',
          type: 'mcq',
          prompt: 'On sait que $(P) \\perp (Q)$ et que leur droite d’intersection est $(\\Delta)$. Quelle droite $(d)$ de $(P)$ est perpendiculaire au plan $(Q)$ ?',
          options: [
            'Toute droite incluse dans $(P)$',
            'Uniquement les droites de $(P)$ parallèles à $(\\Delta)$',
            'Toute droite de $(P)$ perpendiculaire à $(\\Delta)$',
            'Aucune droite de $(P)$',
          ],
          correctAnswerIndex: 2,
          explanation: 'Dans un plan $(P)$ perpendiculaire à $(Q)$, ce sont précisément les droites de $(P)$ perpendiculaires à la droite d’intersection $(\\Delta)$ qui sont perpendiculaires au plan $(Q)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Projections orthogonales et distances dans l'espace
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05',
      order: 5,
      title: 'Projections orthogonales sur un plan ou une droite et distances',
      summary:
        'Projeté orthogonal d’un point sur un plan ou une droite, distance minimale, conservation du milieu, et preuve que deux droites (PQ) et (IJ) sont orthogonales non sécantes.',
      conceptExplanation:
        "1. **Projection orthogonale sur un plan $(P)$** :\nPour tout point $A$, l’unique droite passant par $A$ et perpendiculaire à $(P)$ coupe $(P)$ en un unique point $H$, appelé **projeté orthogonal de $A$ sur $(P)$**. La longueur $AH$ est la **distance du point $A$ au plan $(P)$** : c’est la plus courte distance de $A$ à un point de $(P)$ ($AH < AM$ pour tout $M \\in (P) \\setminus \\{H\\}$).\n\n2. **Projection orthogonale sur une droite $(\\Delta)$** :\nL’unique plan passant par $B$ et perpendiculaire à $(\\Delta)$ coupe $(\\Delta)$ en un unique point $K$, appelé **projeté orthogonal de $B$ sur $(\\Delta)$**. La longueur $BK$ est la **distance du point $B$ à la droite $(\\Delta)$**.\n\n3. **Propriétés de la projection orthogonale $p$ sur $(P)$** :\n- L’image d’une droite $(D)$ est un **singleton** si $(D) \\perp (P)$, et une **droite** sinon.\n- L’image d’un segment $[AB]$ est un **singleton** si $(AB) \\perp (P)$, et un **segment** $[A’B’]$ sinon.\n- **Conservation du milieu** : si $(AB)$ n’est pas perpendiculaire à $(P)$, l’image du milieu de $[AB]$ est le milieu de $[A’B’]$.",
      keyRule:
        'Le projeté orthogonal H de A sur (P) est le pied de l’unique perpendiculaire à (P) passant par A ; AH est la distance minimale. La projection orthogonale conserve les milieux (sauf si (AB) ⊥ (P)).',
      formulas: [
        { name: 'Distance au plan (P)', formula: 'd(A\\,;\\,(P)) = AH = \\min_{M \\in (P)} AM' },
        { name: 'Conservation du milieu', formula: 'I \\text{ milieu de } [AB],\\;(AB)\\not\\perp(P) \\implies p(I) \\text{ milieu de } [p(A)p(B)]' },
      ],
      workedExample: {
        title: 'Situation complexe : (PQ) et (IJ) sont orthogonales non sécantes',
        statement:
          'Soit $ABCDEFGH$ un cube, $I$ et $J$ les milieux respectifs de $[BC]$ et $[CD]$, et $P$ et $Q$ les centres respectifs des faces $AEHD$ et $CDHG$. Démontre que $(PQ)$ et $(IJ)$ sont orthogonales et non sécantes.',
        methodSteps: [
          '1) **Non sécantes** : Soit $(\\Pi)$ le plan passant par les milieux des arêtes verticales $[AE], [BF], [CG], [DH]$ (plan médiateur de $[AE]$). On a $(PQ) \\subset (\\Pi)$ et $(IJ) \\subset (ABC)$. Or $(\\Pi) \\parallel (ABC)$ et ils sont distincts (disjoints) : donc $(PQ)$ et $(IJ)$ n’ont aucun point commun.',
          '2) **Orthogonales** : Projetons $P$ et $Q$ orthogonalement sur $(ABC)$ : le projeté de $P$ (centre de $AEHD$) est le milieu $S$ de $[AD]$, et le projeté de $Q$ (centre de $CDHG$) est le milieu $J$ de $[CD]$ ! Comme $P, Q \\in (\\Pi)$ parallèle à $(ABC)$, la droite $(PQ)$ est parallèle à sa projetée $(SJ)$.',
          '3) Dans le triangle $ACD$, $S$ et $J$ sont les milieux de $[AD]$ et $[CD]$, donc $(SJ) \\parallel (AC)$. Dans le triangle $BCD$, $I$ et $J$ sont les milieux de $[BC]$ et $[CD]$, donc $(IJ) \\parallel (BD)$.',
          '4) Dans le carré $ABCD$, $(AC) \\perp (BD)$. Comme $(PQ) \\parallel (SJ) \\parallel (AC)$ et $(IJ) \\parallel (BD)$, on conclut $(PQ) \\perp (IJ)$.',
        ],
        conclusion: 'Les droites $(PQ)$ et $(IJ)$ sont orthogonales et non sécantes.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Projeté orthogonal sur un plan et distance',
          stepTitle: 'Distance d’un point A à un plan (P)',
          paragraphText:
            'Si $H$ est le projeté orthogonal de $A$ sur $(P)$, la droite $(AH)$ est perpendiculaire à $(P)$ en $H$. Pour tout point $M \\in (P)$, le triangle $AHM$ est rectangle en $H$ (ou aplati si $M=H$), donc $AH \\le AM$ : $AH$ est la distance de $A$ à $(P)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q1',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quelle est la distance du point $B$ au plan $(EGH)$ ?',
            options: ['$a\\sqrt{2}$', '$a$', '$0$', '$a\\sqrt{3}$'],
            correctAnswerIndex: 1,
            explanation: 'Le plan $(EGH)$ est la face supérieure $(EFGH)$. Comme $(BF) \\perp (EFGH)$ et $F \\in (EFGH)$, $F$ est le projeté orthogonal de $B$ sur $(EGH)$, donc la distance vaut $BF = a$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Projeté orthogonal sur une droite',
          stepTitle: 'Trouver le projeté sur une arête du cube',
          paragraphText:
            'Le projeté orthogonal de $B$ sur une droite $(\\Delta)$ est l’intersection de $(\\Delta)$ avec le plan passant par $B$ et perpendiculaire à $(\\Delta)$. Par exemple, dans le cube $ABCDEFGH$, le plan $(ABF)$ est perpendiculaire à $(EH)$ en $E$ : donc le projeté orthogonal de $B$ (et de $A$, $F$) sur $(EH)$ est $E$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q2',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quel est le projeté orthogonal de $F$ sur la droite $(HD)$, et quelle est la distance de $F$ à $(HD)$ ?',
            options: [
              'Projeté $D$, distance $FD = a\\sqrt{3}$',
              'Projeté $H$, distance $FH = a\\sqrt{2}$',
              'Projeté $E$, distance $FE = a$',
              'Projeté $G$, distance $FG = a$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le plan $(EFGH)$ passe par $F$ et est perpendiculaire à $(HD)$ en $H$. Donc le projeté de $F$ sur $(HD)$ est $H$, et la distance vaut $FH = a\\sqrt{2}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Projeté orthogonal du milieu d’un segment',
          stepTitle: 'L’image du milieu est le milieu de l’image',
          paragraphText:
            'Par une projection orthogonale $p$ sur un plan $(P)$, l’image d’un segment $[AB]$ non perpendiculaire à $(P)$ est le segment $[A’B’]$, et l’image du milieu de $[AB]$ est le milieu de $[A’B’]$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q3',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, $I$ est le centre de la face $EFGH$ et $J$ est le centre de la face $ABCD$. Quel est le projeté orthogonal de $I$ sur le plan $(ABC)$ ?',
            options: ['Le point $A$', 'Le point $D$', 'Le point $J$', 'Le milieu de $[AB]$'],
            correctAnswerIndex: 2,
            explanation: '$I$ est le milieu de $[HF]$, dont le projeté orthogonal sur $(ABC)$ est $[DB]$. Comme $(HF)$ n’est pas perpendiculaire à $(ABC)$, le projeté de $I$ est le milieu de $[DB]$, soit $J$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Images de sommets par projection sur une face',
          stepTitle: 'Projeter sur le plan (EHD) dans un cube',
          paragraphText:
            'Soit $p$ la projection orthogonale sur le plan $(EHD)$ dans le cube $ABCDEFGH$. Comme $(AB) \\perp (EHD)$ en $A$ et $(EF) \\perp (EHD)$ en $E$, on a $p(B) = A$, $p(C) = D$, $p(F) = E$ et $p(G) = H$. Et tout point déjà dans $(EHD)$ ($A, D, E, H$) est son propre projeté !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q4',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, si $p$ est la projection orthogonale sur le plan $(EHD)$ et $K \\in [GH]$, que vaut $p(K)$ ?',
            options: ['$E$', '$D$', '$H$', '$A$'],
            correctAnswerIndex: 2,
            explanation: 'La droite $(GH)$ est perpendiculaire au plan $(EHD)$ en $H$ (car $(GH) \\perp (EH)$ et $(GH) \\perp (DH)$). Tous les points de $(GH)$ ont donc pour projeté orthogonal sur $(EHD)$ le point $H$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Distance d’un point appartenant au plan',
          stepTitle: 'Si M ∈ (P), son projeté est lui-même et la distance vaut 0',
          paragraphText:
            'N’applique pas mécaniquement la formule d’une arête ! Avant de calculer la distance d’un point $H$ au plan $(AED)$, vérifie si $H$ n’appartient pas déjà à $(AED)$ : dans le cube $ABCDEFGH$, la face latérale est $ADHE$, donc $H \\in (AED)$ et $d(H\\,;\\,(AED)) = 0$ !',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q5',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quelle est la distance du point $H$ au plan $(AED)$ ?',
            options: ['$a$', '$a\\sqrt{2}$', '$0$', '$\\dfrac{a}{2}$'],
            correctAnswerIndex: 2,
            explanation: 'Dans le cube $ABCDEFGH$, les quatre points $A, D, H, E$ forment la même face carrée $ADHE$ : donc $H \\in (AED)$, et la distance de $H$ à $(AED)$ est nulle ($0$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Image d’un segment perpendiculaire au plan de projection',
          stepTitle: 'Quand l’image d’une droite ou d’un segment est réduite à un point',
          paragraphText:
            'Si $(AB) \\perp (P)$, tous les points de $[AB]$ suivent la même perpendiculaire à $(P)$ : l’image de la droite $(AB)$ et celle du segment $[AB]$ par la projection orthogonale sur $(P)$ sont réduites à un **singleton** (un seul point).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q6',
            type: 'mcq',
            prompt: 'Par la projection orthogonale sur le plan $(ABC)$ dans le cube $ABCDEFGH$, quelle est l’image du segment $[CG]$ ?',
            options: [
              'Le segment $[CD]$',
              'Le singleton $\\{C\\}$',
              'La droite $(CG)$',
              'Le segment $[BC]$',
            ],
            correctAnswerIndex: 1,
            explanation: 'L’arête $(CG)$ est perpendiculaire au plan $(ABC)$ en $C$ : tous les points de $[CG]$ se projettent donc au seul point $C$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q1',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quelle est la distance du point $B$ au plan $(EGH)$ ?',
          options: ['$a\\sqrt{2}$', '$a$', '$0$', '$a\\sqrt{3}$'],
          correctAnswerIndex: 1,
          explanation: 'Le plan $(EGH)$ est la face supérieure $(EFGH)$. Comme $(BF) \\perp (EFGH)$ et $F \\in (EFGH)$, $F$ est le projeté orthogonal de $B$ sur $(EGH)$, donc la distance vaut $BF = a$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q2',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quel est le projeté orthogonal de $F$ sur la droite $(HD)$, et quelle est la distance de $F$ à $(HD)$ ?',
          options: [
            'Projeté $D$, distance $FD = a\\sqrt{3}$',
            'Projeté $H$, distance $FH = a\\sqrt{2}$',
            'Projeté $E$, distance $FE = a$',
            'Projeté $G$, distance $FG = a$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le plan $(EFGH)$ passe par $F$ et est perpendiculaire à $(HD)$ en $H$. Donc le projeté de $F$ sur $(HD)$ est $H$, et la distance vaut $FH = a\\sqrt{2}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q3',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, $I$ est le centre de la face $EFGH$ et $J$ est le centre de la face $ABCD$. Quel est le projeté orthogonal de $I$ sur le plan $(ABC)$ ?',
          options: ['Le point $A$', 'Le point $D$', 'Le point $J$', 'Le milieu de $[AB]$'],
          correctAnswerIndex: 2,
          explanation: '$I$ est le milieu de $[HF]$, dont le projeté orthogonal sur $(ABC)$ est $[DB]$. Comme $(HF)$ n’est pas perpendiculaire à $(ABC)$, le projeté de $I$ est le milieu de $[DB]$, soit $J$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q4',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, si $p$ est la projection orthogonale sur le plan $(EHD)$ et $K \\in [GH]$, que vaut $p(K)$ ?',
          options: ['$E$', '$D$', '$H$', '$A$'],
          correctAnswerIndex: 2,
          explanation: 'La droite $(GH)$ est perpendiculaire au plan $(EHD)$ en $H$ (car $(GH) \\perp (EH)$ et $(GH) \\perp (DH)$). Tous les points de $(GH)$ ont donc pour projeté orthogonal sur $(EHD)$ le point $H$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q5',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quelle est la distance du point $H$ au plan $(AED)$ ?',
          options: ['$a$', '$a\\sqrt{2}$', '$0$', '$\\dfrac{a}{2}$'],
          correctAnswerIndex: 2,
          explanation: 'Dans le cube $ABCDEFGH$, les quatre points $A, D, H, E$ forment la même face carrée $ADHE$ : donc $H \\in (AED)$, et la distance de $H$ à $(AED)$ est nulle ($0$).',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q6',
          type: 'mcq',
          prompt: 'Par la projection orthogonale sur le plan $(ABC)$ dans le cube $ABCDEFGH$, quelle est l’image du segment $[CG]$ ?',
          options: [
            'Le segment $[CD]$',
            'Le singleton $\\{C\\}$',
            'La droite $(CG)$',
            'Le segment $[BC]$',
          ],
          correctAnswerIndex: 1,
          explanation: 'L’arête $(CG)$ est perpendiculaire au plan $(ABC)$ en $C$ : tous les points de $[CG]$ se projettent donc au seul point $C$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Synthèse : grande diagonale du cube et tétraèdre régulier
    // ========================================================================
    {
      id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06',
      order: 6,
      title: 'Synthèse : grande diagonale du cube et tétraèdre régulier',
      summary:
        'Orthogonalité (EC) ⊥ (AHF), position du centre de gravité O de AHF au tiers de [EC] et distance EO = a√3/3 ; hauteurs et centre de gravité du tétraèdre régulier.',
      conceptExplanation:
        "Les exercices d’approfondissement du programme combinent orthogonalité, théorème de Pythagore et barycentre.\n\n1. **Grande diagonale $(EC)$ d’un cube $ABCDEFGH$ d’arête $a$** :\n- $EC = \\sqrt{EA^2 + AC^2} = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$.\n- $(AH) \\perp (EDC) \\implies (AH) \\perp (EC)$ ; de même $(AF) \\perp (EBC) \\implies (AF) \\perp (EC)$. Donc **$(EC) \\perp (AHF)$**.\n- Le point d’intersection $O = (EC) \\cap (AHF)$ est le **centre de gravité** (isobarycentre) du triangle équilatéral $AHF$ (de côté $a\\sqrt{2}$). Comme $\\overrightarrow{EF} + \\overrightarrow{EH} + \\overrightarrow{EA} - \\overrightarrow{EC} = \\vec{0}$, on a $E = \\operatorname{bar}\\{(F,1)\\,;\\,(H,1)\\,;\\,(A,1)\\,;\\,(C,-1)\\} = \\operatorname{bar}\\{(O,3)\\,;\\,(C,-1)\\}$, soit :\n$$\\overrightarrow{EO} = \\frac{1}{3}\\overrightarrow{EC} \\quad \\text{et} \\quad d(E\\,;\\,(AHF)) = EO = \\frac{\\sqrt{3}}{3}a$$\n\n2. **Tétraèdre régulier $SABC$ (toutes faces équilatérales)** :\n- Deux arêtes opposées sont **orthogonales** : si $K$ est le milieu de $[AB]$, $(SK) \\perp (AB)$ et $(CK) \\perp (AB)$, donc $(AB) \\perp (SKC)$, d’où $(AB) \\perp (SC)$.\n- Le projeté orthogonal $H$ de $S$ sur $(ABC)$ est le centre de gravité de $ABC$, et le centre de gravité $G$ du tétraèdre vérifie $3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$ (soit $\\overrightarrow{SG} = \\frac{3}{4}\\overrightarrow{SH}$).",
      keyRule:
        'Dans le cube d’arête a : EC = a√3, (EC) ⊥ (AHF) en O (isobarycentre de AHF), avec EO = (1/3)EC = a√3/3. Dans un tétraèdre régulier, deux arêtes opposées sont orthogonales et SG = (3/4) SH.',
      formulas: [
        { name: 'Grande diagonale du cube', formula: 'EC = a\\sqrt{3} \\quad \\text{et} \\quad (EC) \\perp (AHF)' },
        { name: 'Distance de E à (AHF)', formula: '\\overrightarrow{EO} = \\frac{1}{3}\\overrightarrow{EC} \\implies EO = \\frac{\\sqrt{3}}{3}a' },
        { name: 'Tétraèdre régulier', formula: '(AB) \\perp (SC) \\quad \\text{et} \\quad 3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}' },
      ],
      workedExample: {
        title: 'Calculer la distance du sommet E au plan (AHF) dans un cube d’arête a',
        statement:
          'Dans un cube $ABCDEFGH$ d’arête $a$, on admet que $(EC) \\perp (AHF)$ et que $O = (EC) \\cap (AHF)$ est l’isobarycentre de $A, H, F$.\n1) Justifie que $E = \\operatorname{bar}\\{(F,1)\\,;\\,(H,1)\\,;\\,(A,1)\\,;\\,(C,-1)\\}$.\n2) Déduis-en la distance $d(E\\,;\\,(AHF)) = EO$.',
        methodSteps: [
          '1) $1 + 1 + 1 - 1 = 2 \\neq 0$. Calculons $\\overrightarrow{EF} + \\overrightarrow{EH} + \\overrightarrow{EA} - \\overrightarrow{EC}$ : dans le cube, $\\overrightarrow{EC} = \\overrightarrow{EA} + \\overrightarrow{AC} = \\overrightarrow{EA} + \\overrightarrow{AB} + \\overrightarrow{AD}$. Or $\\overrightarrow{EF} = \\overrightarrow{AB}$ et $\\overrightarrow{EH} = \\overrightarrow{AD}$, donc $\\overrightarrow{EF} + \\overrightarrow{EH} + \\overrightarrow{EA} - \\overrightarrow{EC} = \\vec{0}$.',
          '2) Par associativité du barycentre, en remplaçant $\\{(F,1)\\,;\\,(H,1)\\,;\\,(A,1)\\}$ par $(O, 3)$, on obtient $E = \\operatorname{bar}\\{(O,3)\\,;\\,(C,-1)\\}$, soit $3\\overrightarrow{EO} - \\overrightarrow{EC} = \\vec{0}$, donc $\\overrightarrow{EO} = \\dfrac{1}{3}\\overrightarrow{EC}$.',
          '3) La grande diagonale vaut $EC = \\sqrt{AE^2 + AB^2 + AD^2} = \\sqrt{3a^2} = a\\sqrt{3}$, d’où $EO = \\dfrac{1}{3}a\\sqrt{3} = \\dfrac{\\sqrt{3}}{3}a$.',
        ],
        conclusion: 'Comme $(EC) \\perp (AHF)$ en $O$, $O$ est le projeté orthogonal de $E$ sur $(AHF)$ et $d(E\\,;\\,(AHF)) = EO = \\dfrac{\\sqrt{3}}{3}a$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Prouver que (EC) ⊥ (AHF) dans un cube',
          stepTitle: 'Montrer successivement (EC) ⊥ (AH) et (EC) ⊥ (AF)',
          paragraphText:
            'Dans le cube $ABCDEFGH$, $(AH) \\perp (ED)$ (diagonales de $ADHE$) et $(AH) \\perp (DC)$ (car $(DC) \\perp (ADHE)$), donc $(AH) \\perp (EDC)$ et par suite $(AH) \\perp (EC)$. Par un argument symétrique avec $(AF) \\perp (EBC)$, on a $(AF) \\perp (EC)$, d’où $(EC) \\perp (AHF)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q1',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$, pourquoi la droite $(AH)$ est-elle perpendiculaire au plan $(EDC)$ ?',
            options: [
              'Car $(AH)$ est parallèle à $(EC)$',
              'Car $(AH) \\perp (ED)$ et $(AH) \\perp (DC)$, deux droites sécantes de $(EDC)$',
              'Car $(AH)$ coupe $(EC)$ en $O$',
              'Car $AH = ED$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les diagonales du carré $ADHE$ donnent $(AH) \\perp (ED)$, et l’arête $(DC)$ est perpendiculaire au plan $(ADHE)$ donc $(DC) \\perp (AH)$. Comme $(ED)$ et $(DC)$ sont sécantes en $D$ dans $(EDC)$, $(AH) \\perp (EDC)$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Nature du triangle AHF et position de O',
          stepTitle: 'Un triangle équilatéral et son centre de gravité',
          paragraphText:
            'Les trois côtés $[AH]$, $[HF]$ et $[FA]$ sont des diagonales de faces du cube d’arête $a$ : $AH = HF = FA = a\\sqrt{2}$, donc $AHF$ est équilatéral. Le point $E$ étant équidistant de $A, H, F$ ($EA=EH=EF=a$), sa projection orthogonale $O$ sur $(AHF)$ est aussi le centre du cercle circonscrit (et donc le centre de gravité) de $AHF$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q2',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quelle est la nature et la longueur du côté du triangle $AHF$ ?',
            options: [
              'Triangle rectangle isocèle de côté $a$',
              'Triangle équilatéral de côté $a\\sqrt{2}$',
              'Triangle équilatéral de côté $a\\sqrt{3}$',
              'Triangle isocèle non équilatéral',
            ],
            correctAnswerIndex: 1,
            explanation: '$[AH]$, $[HF]$ et $[FA]$ sont les diagonales de trois carrés de côté $a$, donc $AH = HF = FA = a\\sqrt{2}$ : $AHF$ est équilatéral.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer EO par le barycentre',
          stepTitle: 'Exprimer E comme barycentre de A, H, F et C',
          paragraphText:
            'Puisque $\\overrightarrow{EF} + \\overrightarrow{EH} + \\overrightarrow{EA} = \\overrightarrow{EF} + \\overrightarrow{EH} + \\overrightarrow{EA} = \\overrightarrow{EC}$, on a $\\overrightarrow{EF} + \\overrightarrow{EH} + \\overrightarrow{EA} - \\overrightarrow{EC} = \\vec{0}$, donc $E = \\operatorname{bar}\\{(F,1)\\,;\\,(H,1)\\,;\\,(A,1)\\,;\\,(C,-1)\\}$. Avec l’isobarycentre $O$ de $A, H, F$, $3\\overrightarrow{EO} = \\overrightarrow{EC}$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q3',
            type: 'mcq',
            prompt: 'Dans le cube $ABCDEFGH$ d’arête $a = 6\\text{ cm}$, quelle est la distance du sommet $E$ au plan $(AHF)$ ?',
            options: ['$2\\text{ cm}$', '$3\\sqrt{2}\\text{ cm}$', '$2\\sqrt{3}\\text{ cm}$', '$6\\sqrt{3}\\text{ cm}$'],
            correctAnswerIndex: 2,
            explanation: 'La distance vaut $EO = \\dfrac{\\sqrt{3}}{3}a = \\dfrac{\\sqrt{3}}{3} \\times 6 = 2\\sqrt{3}\\text{ cm}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Arêtes opposées du tétraèdre régulier SABC',
          stepTitle: 'Passer par le plan médiateur (SKC)',
          paragraphText:
            'Dans un tétraèdre régulier $SABC$ (toutes les arêtes ont même longueur), soit $K$ le milieu de $[AB]$. Comme $SAB$ et $CAB$ sont équilatéraux (ou isocèles en $S$ et $C$), les médianes $(SK)$ et $(CK)$ sont perpendiculaires à $(AB)$, donc $(AB) \\perp (SKC)$, d’où $(AB) \\perp (SC)$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q4',
            type: 'mcq',
            prompt: 'Dans un tétraèdre régulier $SABC$ ($K$ milieu de $[AB]$), quel plan perpendiculaire à $(AB)$ permet de prouver que $(AB) \\perp (SC)$ ?',
            options: ['$(ABC)$', '$(SAB)$', '$(SKC)$', '$(SBC)$'],
            correctAnswerIndex: 2,
            explanation: '$(AB) \\perp (SK)$ et $(AB) \\perp (CK)$ sécantes en $K$ dans $(SKC)$, donc $(AB) \\perp (SKC)$, ce qui implique $(AB) \\perp (SC)$ car $(SC) \\subset (SKC)$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre diagonale de face et grande diagonale du cube',
          stepTitle: 'Ne confonds pas a√2 et a√3 !',
          paragraphText:
            'Une diagonale d’une **face** du cube d’arête $a$ mesure $a\\sqrt{2}$ (triangle rectangle de côtés $a$ et $a$), alors qu’une **grande diagonale** joignant deux sommets opposés dans l’espace (comme $EC$, $AG$, $BH$ ou $DF$) mesure $a\\sqrt{3}$ (triangle rectangle de côtés $a$ et $a\\sqrt{2}$).',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q5',
            type: 'mcq',
            prompt: 'Dans un cube $ABCDEFGH$ d’arête $a$, quelle est la longueur exacte de la grande diagonale $[EC]$ ?',
            options: ['$a\\sqrt{2}$', '$a\\sqrt{3}$', '$2a$', '$3a$'],
            correctAnswerIndex: 1,
            explanation: 'Dans le triangle $EAC$ rectangle en $A$, $EA = a$ et $AC = a\\sqrt{2}$, donc $EC = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Centre de gravité G d’un tétraèdre régulier',
          stepTitle: 'Relation 3 GH + GS = 0',
          paragraphText:
            'Soit $G$ l’isobarycentre du tétraèdre régulier $SABC$ ($\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}+\\overrightarrow{GS}=\\vec{0}$) et $H$ le projeté orthogonal de $S$ sur $(ABC)$ (qui est aussi l’isobarycentre de $A, B, C$). Par associativité (ou Chasles en $H$), $3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$, donc $G$ est sur la hauteur $[SH]$ au quart à partir de $H$.',
          exercise: {
            id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q6',
            type: 'mcq',
            prompt: 'Si $G$ est le centre de gravité du tétraèdre régulier $SABC$ et $H$ le centre de gravité de la base $ABC$, quelle égalité est vraie ?',
            options: [
              '$\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$',
              '$3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$',
              '$\\overrightarrow{GH} + 3\\overrightarrow{GS} = \\vec{0}$',
              '$4\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par associativité de l’isobarycentre $G$ de $S, A, B, C$ avec $H = \\operatorname{bar}\\{(A,1),(B,1),(C,1)\\}$, on a $G = \\operatorname{bar}\\{(H,3),(S,1)\\}$, soit $3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q1',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$, pourquoi la droite $(AH)$ est-elle perpendiculaire au plan $(EDC)$ ?',
          options: [
            'Car $(AH)$ est parallèle à $(EC)$',
            'Car $(AH) \\perp (ED)$ et $(AH) \\perp (DC)$, deux droites sécantes de $(EDC)$',
            'Car $(AH)$ coupe $(EC)$ en $O$',
            'Car $AH = ED$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les diagonales du carré $ADHE$ donnent $(AH) \\perp (ED)$, et l’arête $(DC)$ est perpendiculaire au plan $(ADHE)$ donc $(DC) \\perp (AH)$. Comme $(ED)$ et $(DC)$ sont sécantes en $D$ dans $(EDC)$, $(AH) \\perp (EDC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q2',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$ d’arête $a$, quelle est la nature et la longueur du côté du triangle $AHF$ ?',
          options: [
            'Triangle rectangle isocèle de côté $a$',
            'Triangle équilatéral de côté $a\\sqrt{2}$',
            'Triangle équilatéral de côté $a\\sqrt{3}$',
            'Triangle isocèle non équilatéral',
          ],
          correctAnswerIndex: 1,
          explanation: '$[AH]$, $[HF]$ et $[FA]$ sont les diagonales de trois carrés de côté $a$, donc $AH = HF = FA = a\\sqrt{2}$ : $AHF$ est équilatéral.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q3',
          type: 'mcq',
          prompt: 'Dans le cube $ABCDEFGH$ d’arête $a = 6\\text{ cm}$, quelle est la distance du sommet $E$ au plan $(AHF)$ ?',
          options: ['$2\\text{ cm}$', '$3\\sqrt{2}\\text{ cm}$', '$2\\sqrt{3}\\text{ cm}$', '$6\\sqrt{3}\\text{ cm}$'],
          correctAnswerIndex: 2,
          explanation: 'La distance vaut $EO = \\dfrac{\\sqrt{3}}{3}a = \\dfrac{\\sqrt{3}}{3} \\times 6 = 2\\sqrt{3}\\text{ cm}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q4',
          type: 'mcq',
          prompt: 'Dans un tétraèdre régulier $SABC$ ($K$ milieu de $[AB]$), quel plan perpendiculaire à $(AB)$ permet de prouver que $(AB) \\perp (SC)$ ?',
          options: ['$(ABC)$', '$(SAB)$', '$(SKC)$', '$(SBC)$'],
          correctAnswerIndex: 2,
          explanation: '$(AB) \\perp (SK)$ et $(AB) \\perp (CK)$ sécantes en $K$ dans $(SKC)$, donc $(AB) \\perp (SKC)$, ce qui implique $(AB) \\perp (SC)$ car $(SC) \\subset (SKC)$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q5',
          type: 'mcq',
          prompt: 'Dans un cube $ABCDEFGH$ d’arête $a$, quelle est la longueur exacte de la grande diagonale $[EC]$ ?',
          options: ['$a\\sqrt{2}$', '$a\\sqrt{3}$', '$2a$', '$3a$'],
          correctAnswerIndex: 1,
          explanation: 'Dans le triangle $EAC$ rectangle en $A$, $EA = a$ et $AC = a\\sqrt{2}$, donc $EC = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$.',
        },
        {
          id: 'premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q6',
          type: 'mcq',
          prompt: 'Si $G$ est le centre de gravité du tétraèdre régulier $SABC$ et $H$ le centre de gravité de la base $ABC$, quelle égalité est vraie ?',
          options: [
            '$\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$',
            '$3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$',
            '$\\overrightarrow{GH} + 3\\overrightarrow{GS} = \\vec{0}$',
            '$4\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par associativité de l’isobarycentre $G$ de $S, A, B, C$ avec $H = \\operatorname{bar}\\{(A,1),(B,1),(C,1)\\}$, on a $G = \\operatorname{bar}\\{(H,3),(S,1)\\}$, soit $3\\overrightarrow{GH} + \\overrightarrow{GS} = \\vec{0}$.',
        },
      ],
    },
  ],
};

