import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CD - Chimie Organique - Hydrocarbures saturés : les alcanes » (format v2).
export const CHIMIE_1RE_CD_L02_ALCANES: CurriculumChapter = {
  id: 'premiere_c_chimie_l02_alcanes',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 2,
  title: 'Leçon 2 : Hydrocarbures saturés : les alcanes',
  summary:
    'Liaison covalente et valence, formule brute CₙH₂ₙ₊₂, structure tétraédrique du méthane et éthane, nomenclature des alcanes et cyclanes, isomérie de chaîne, combustion complète/incomplète et chloration photochimique.',
  officialVolumeHours: 6,
  contentVersion: 2,
  source: '1ères CD - Chimie Organique : Hydrocarbures saturés : les alcanes.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Généralités, liaison covalente, valence et formule CₙH₂ₙ₊₂
    // ========================================================================
    {
      id: 'premiere_c_chimie_l02_alcanes_p01',
      order: 1,
      title: 'Généralités, liaison covalente, valence et formule des alcanes',
      summary:
        'Définir la liaison covalente et la valence d’un atome, caractériser un hydrocarbure saturé et établir la formule brute générale CₙH₂ₙ₊₂.',
      conceptExplanation:
        "En chimie organique, les **hydrocarbures** sont des composés moléculaires renfermant **uniquement** des atomes de carbone ($\\mathrm{C}$) et des atomes d’hydrogène ($\\mathrm{H}$).\n\n- **Liaison covalente** : liaison chimique établie entre deux atomes par la mise en commun de **deux électrons célibataires** (un de chaque atome) formant un doublet liant.\n- **Valence d’un atome** : nombre maximal de liaisons covalentes qu’un atome peut former avec d’autres atomes. Le carbone est **tétravalent** (4 liaisons), l’hydrogène est **monovalent** (1 liaison), le chlore est monovalent (1 liaison) et l’oxygène est divalent (2 liaisons).\n- **Définition d’un alcane** : un **alcane** (non cyclique) est un **hydrocarbure saturé** dont tous les atomes de carbone ont une **structure tétraédrique** (toutes les liaisons C–C et C–H sont simples). Ils sont dits *saturés* car aucune autre molécule ne peut s’y additionner.\n- **Formule brute générale** : $\\mathrm{C_n H_{2n+2}}$ avec $n \\ge 1$, de masse molaire $M = 14n + 2\\text{ g/mol}$.",
      keyRule:
        'Un alcane non cyclique est un hydrocarbure saturé (liaisons simples uniquement, carbones tétraédriques) de formule brute générale CₙH₂ₙ₊₂ (n ≥ 1).',
      formulas: [
        {
          name: 'Formule brute générale d’un alcane acyclique',
          formula: '\\mathrm{C_nH_{2n+2}} \\quad (n \\ge 1)',
          note: 'Masse molaire M = 14n + 2 g/mol (avec M(C)=12 et M(H)=1)',
        },
      ],
      workedExample: {
        title: 'Identifier un alcane et vérifier des propositions Vrai/Faux (Exercice 2 p. 7–8)',
        statement:
          'Parmi ces affirmations, détermine lesquelles sont vraies ou fausses : (1) « Un composé contenant uniquement C et H est forcément un alcane » ; (2) « La molécule d’alcane est dite saturée car elle ne peut pas additionner une autre molécule » ; (3) « La formule brute générale des alcanes est $\\mathrm{C_nH_{2n-2}}$ ».',
        methodSteps: [
          '1) Faux : contenir uniquement C et H définit un hydrocarbure au sens large (les alcènes et alcynes sont aussi des hydrocarbures, mais insaturés). Un alcane doit en plus n’avoir que des liaisons simples.',
          '2) Vrai : toutes les valences du carbone sont saturées par des liaisons simples, rendant toute réaction d’addition impossible.',
          '3) Faux : CₙH₂ₙ₋₂ est la formule des alcynes (ou cycloalcènes) ; les alcanes acycliques vérifient CₙH₂ₙ₊₂.',
        ],
        conclusion:
          'La distinction « hydrocarbure quelconque » vs « hydrocarbure saturé (alcane) » repose sur la nature uniquement simple des liaisons.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Liaison chimique',
          stepTitle: 'Qu’est-ce qu’une liaison covalente ?',
          paragraphText:
            'Une liaison covalente se forme lorsque deux atomes mettent en commun deux de leurs électrons célibataires afin de constituer un doublet d’électrons de liaison partagé entre eux.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p01_q1',
            type: 'mcq',
            prompt: 'Comment s’établit une liaison covalente simple entre deux atomes ?',
            options: [
              'Par la mise en commun de deux électrons célibataires formant un doublet de liaison',
              'Par le transfert définitif de tous les protons d’un noyau vers l’autre',
              'Par l’attraction purement magnétique entre deux neutrons libres',
              'Par la fusion des noyaux atomiques à température ambiante',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Chaque atome apporte un électron célibataire ; leur mise en commun constitue le doublet liant d’une liaison covalente.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Valence',
          stepTheme: 'Liaisons du carbone',
          stepTitle: 'Valence d’un atome en chimie organique',
          paragraphText:
            'La valence d’un atome correspond au nombre de liaisons covalentes qu’il forme avec ses voisins. Dans les composés organiques, l’atome de carbone forme toujours 4 liaisons covalentes (valence 4) et l’hydrogène 1 liaison.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p01_q2',
            type: 'mcq',
            prompt: 'Que représente la valence d’un atome dans une molécule organique ?',
            options: [
              'Le nombre de liaisons covalentes qu’il peut former avec d’autres atomes',
              'La masse en grammes d’une mole de cet atome',
              'Le nombre total de neutrons contenus dans son noyau',
              'La température d’ébullition du composé à pression normale',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La valence désigne le nombre de liaisons covalentes que l’atome engage autour de lui (4 pour C, 1 pour H).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Formule brute',
          stepTheme: 'Série des alcanes',
          stepTitle: 'Formule brute générale et masse molaire',
          paragraphText:
            'Tout alcane non cyclique possède $n$ atomes de carbone et $2n+2$ atomes d’hydrogène : sa formule brute est $\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$). Sa masse molaire vaut $M = 12n + 2n + 2 = 14n + 2\\text{ g/mol}$.',
          formula: { name: 'Alcane non cyclique', formula: '\\mathrm{C_nH_{2n+2}} \\implies M = 14n + 2\\text{ g/mol}' },
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p01_q3',
            type: 'mcq',
            prompt: 'Un alcane non cyclique a pour masse molaire $M = 72\\text{ g/mol}$ (avec $M(\\mathrm{C})=12$, $M(\\mathrm{H})=1\\text{ g/mol}$). Quelle est sa formule brute ?',
            options: [
              '$\\mathrm{C_5H_{12}}$',
              '$\\mathrm{C_4H_{10}}$',
              '$\\mathrm{C_6H_{14}}$',
              '$\\mathrm{C_5H_{10}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$14n + 2 = 72 \\implies 14n = 70 \\implies n = 5$. L’alcane est donc $\\mathrm{C_5H_{12}}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Caractère saturé',
          stepTheme: 'Réactivité',
          stepTitle: 'Pourquoi les alcanes sont-ils qualifiés de « saturés » ?',
          paragraphText:
            'Dans un alcane, tous les atomes de carbone forment 4 liaisons covalentes simples et sont donc tétraédriques. Ne comportant aucune liaison multiple, la molécule ne peut pas additionner d’autre molécule : elle est dite saturée.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p01_q4',
            type: 'mcq',
            prompt: 'Pourquoi dit-on que la molécule d’alcane est saturée ?',
            options: [
              'Parce que tous ses atomes de carbone ne forment que des liaisons simples et qu’elle ne peut pas subir de réaction d’addition',
              'Parce qu’elle se dissout instantanément à saturation dans l’eau froide',
              'Parce qu’elle contient au moins une triple liaison carbone-carbone',
              'Parce qu’elle ne peut pas brûler dans le dioxygène de l’air',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un alcane ne possède que des liaisons simples C–C et C–H : aucune autre molécule ne peut s’y additionner.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège d’examen',
          stepTheme: 'Définition stricte',
          stepTitle: '« Contenir uniquement C et H » suffit-il à définir un alcane ?',
          paragraphText:
            'Attention à ce piège classique (Exercice 2 p. 7–8) ! L’affirmation « Un alcane est un composé organique renfermant uniquement C et H » est insuffisante donc FAUSSE comme définition d’un alcane : elle définit un hydrocarbure en général (comme les alcènes ou alcynes), alors qu’un alcane exige en plus des liaisons simples uniquement.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p01_q5',
            type: 'mcq',
            prompt: 'Pourquoi la proposition « Tout composé renfermant uniquement des atomes C et H est un alcane » est-elle FAUSSE ?',
            options: [
              'Parce que les alcènes et les alcynes ne contiennent aussi que C et H tout en étant insaturés',
              'Parce que les alcanes contiennent toujours au moins un atome d’oxygène',
              'Parce que les alcanes ne renferment aucun atome d’hydrogène',
              'Parce que les composés en C et H sont toujours des acides minéraux',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Contenir uniquement C et H caractérise tout hydrocarbure ; pour être un alcane, il faut en plus être saturé (liaisons covalentes simples uniquement).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Tri',
          stepTheme: 'Formules brutes',
          stepTitle: 'Reconnaître un alcane acyclique parmi des formules',
          paragraphText:
            'Pour vérifier qu’une formule $\\mathrm{C_xH_y}$ correspond à un alcane non cyclique, teste la relation $y = 2x + 2$. Par exemple, pour $\\mathrm{C_8H_{18}}$ : $2\\times 8 + 2 = 18$, c’est bien un alcane.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p01_q6',
            type: 'mcq',
            prompt: 'Parmi les formules brutes suivantes, laquelle correspond à un alcane non cyclique ?',
            options: [
              '$\\mathrm{C_7H_{16}}$',
              '$\\mathrm{C_7H_{14}}$',
              '$\\mathrm{C_7H_{12}}$',
              '$\\mathrm{C_6H_6}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour $n = 7$, $2n + 2 = 16$ : $\\mathrm{C_7H_{16}}$ (heptane) est un alcane non cyclique, alors que $\\mathrm{C_7H_{14}}$ est un alcène ou un cyclane.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l02_alcanes_p01_q1',
          type: 'mcq',
          prompt: 'Comment s’établit une liaison covalente simple entre deux atomes ?',
          options: [
            'Par la mise en commun de deux électrons célibataires formant un doublet de liaison',
            'Par le transfert définitif de tous les protons d’un noyau vers l’autre',
            'Par l’attraction purement magnétique entre deux neutrons libres',
            'Par la fusion des noyaux atomiques à température ambiante',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Chaque atome apporte un électron célibataire ; leur mise en commun constitue le doublet liant d’une liaison covalente.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p01_q2',
          type: 'mcq',
          prompt: 'Que représente la valence d’un atome dans une molécule organique ?',
          options: [
            'Le nombre de liaisons covalentes qu’il peut former avec d’autres atomes',
            'La masse en grammes d’une mole de cet atome',
            'Le nombre total de neutrons contenus dans son noyau',
            'La température d’ébullition du composé à pression normale',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La valence désigne le nombre de liaisons covalentes que l’atome engage autour de lui (4 pour C, 1 pour H).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p01_q3',
          type: 'mcq',
          prompt: 'Un alcane non cyclique a pour masse molaire $M = 72\\text{ g/mol}$ (avec $M(\\mathrm{C})=12$, $M(\\mathrm{H})=1\\text{ g/mol}$). Quelle est sa formule brute ?',
          options: [
            '$\\mathrm{C_5H_{12}}$',
            '$\\mathrm{C_4H_{10}}$',
            '$\\mathrm{C_6H_{14}}$',
            '$\\mathrm{C_5H_{10}}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$14n + 2 = 72 \\implies 14n = 70 \\implies n = 5$. L’alcane est donc $\\mathrm{C_5H_{12}}$.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p01_q4',
          type: 'mcq',
          prompt: 'Pourquoi dit-on que la molécule d’alcane est saturée ?',
          options: [
            'Parce que tous ses atomes de carbone ne forment que des liaisons simples et qu’elle ne peut pas subir de réaction d’addition',
            'Parce qu’elle se dissout instantanément à saturation dans l’eau froide',
            'Parce qu’elle contient au moins une triple liaison carbone-carbone',
            'Parce qu’elle ne peut pas brûler dans le dioxygène de l’air',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un alcane ne possède que des liaisons simples C–C et C–H : aucune autre molécule ne peut s’y additionner.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p01_q5',
          type: 'mcq',
          prompt: 'Pourquoi la proposition « Tout composé renfermant uniquement des atomes C et H est un alcane » est-elle FAUSSE ?',
          options: [
            'Parce que les alcènes et les alcynes ne contiennent aussi que C et H tout en étant insaturés',
            'Parce que les alcanes contiennent toujours au moins un atome d’oxygène',
            'Parce que les alcanes ne renferment aucun atome d’hydrogène',
            'Parce que les composés en C et H sont toujours des acides minéraux',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Contenir uniquement C et H caractérise tout hydrocarbure ; pour être un alcane, il faut en plus être saturé (liaisons covalentes simples uniquement).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p01_q6',
          type: 'mcq',
          prompt: 'Parmi les formules brutes suivantes, laquelle correspond à un alcane non cyclique ?',
          options: [
            '$\\mathrm{C_7H_{16}}$',
            '$\\mathrm{C_7H_{14}}$',
            '$\\mathrm{C_7H_{12}}$',
            '$\\mathrm{C_6H_6}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour $n = 7$, $2n + 2 = 16$ : $\\mathrm{C_7H_{16}}$ (heptane) est un alcane non cyclique, alors que $\\mathrm{C_7H_{14}}$ est un alcène ou un cyclane.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Structure géométrique : méthane, éthane et chaîne carbonée
    // ========================================================================
    {
      id: 'premiere_c_chimie_l02_alcanes_p02',
      order: 2,
      title: 'Structure du méthane, de l’éthane et chaînes carbonées',
      summary:
        'Connaître la géométrie tétraédrique du méthane (109 pm, 109°28′), la rotation libre autour de la liaison C–C dans l’éthane et distinguer chaîne linéaire, ramifiée et cyclique.',
      conceptExplanation:
        "Chaque atome de carbone d’un alcane possède une **structure tétraédrique** (ou tétragonale) :\n\n1. **Le méthane ($\\mathrm{CH_4}$)** : plus simple des alcanes.\n   - L’atome de carbone est situé au centre d’un **tétraèdre régulier** dont les 4 sommets sont occupés par les 4 atomes d’hydrogène.\n   - Longueur de liaison $\\mathrm{C-H}$ : **$109\\text{ pm}$** ($1\\text{ pm} = 10^{-12}\\text{ m}$).\n   - Angle de liaison $\\widehat{\\mathrm{HCH}}$ : **$109^\\circ 28'$** (environ $109{,}5^\\circ$).\n2. **L’éthane ($\\mathrm{C_2H_6}$)** : formule semi-développée $\\mathrm{CH_3-CH_3}$. Les deux carbones sont tétragonaux et les deux groupes méthyle $-\\mathrm{CH_3}$ peuvent **tourner librement** l’un par rapport à l’autre autour de l’axe de la liaison simple $\\mathrm{C-C}$.\n3. **Chaîne carbonée (squelette carboné)** :\n   - **Linéaire** : atomes de carbone liés à la suite les uns des autres sans boucle (chaque carbone est lié à au plus 2 autres carbones).\n   - **Ramifiée** : acyclique, avec au moins un atome de carbone (dit *carbone ramifié*) lié à **3 ou 4 autres atomes de carbone**.",
      keyRule:
        'Le méthane CH₄ est un tétraèdre régulier (d = 109 pm, angle = 109°28′) ; la liaison simple C–C permet la rotation libre des groupes ; une chaîne ramifiée comporte au moins un carbone lié à 3 ou 4 autres carbones.',
      formulas: [
        {
          name: 'Géométrie du méthane CH₄',
          formula: 'd(\\mathrm{C-H}) = 109\\text{ pm}, \\quad \\widehat{\\mathrm{HCH}} = 109^\\circ 28\'',
          note: 'Carbone tétraédrique au centre d’un tétraèdre régulier',
        },
      ],
      workedExample: {
        title: 'Distinguer chaîne linéaire et chaîne ramifiée',
        statement:
          'Compare les molécules $\\mathrm{CH_3-CH_2-CH_2-CH_3}$ et $\\mathrm{CH_3-CH(CH_3)-CH_3}$.',
        methodSteps: [
          '1) Dans CH₃-CH₂-CH₂-CH₃, chaque carbone est lié à 1 ou 2 atomes de carbone seulement et il n’y a pas de boucle : la chaîne est linéaire.',
          '2) Dans CH₃-CH(CH₃)-CH₃, le carbone central (-CH-) est lié à 3 autres atomes de carbone : c’est un carbone ramifié, donc la chaîne est ramifiée.',
        ],
        conclusion:
          'La première molécule est le butane linéaire (n-butane), la seconde est ramifiée (2-méthylpropane).',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Structure tétraédrique de la molécule de méthane CH₄',
        svgContent: `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tétraèdre régulier de la molécule de méthane CH4">
  <polygon points="140,26 62,158 216,158" fill="#EFF6FF" fill-opacity="0.6" stroke="#94A3B8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="140" y1="26" x2="178" y2="180" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="62" y1="158" x2="178" y2="180" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="216" y1="158" x2="178" y2="180" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="140" y1="118" x2="140" y2="34" stroke="#1E293B" stroke-width="2.5"/>
  <line x1="140" y1="118" x2="68" y2="155" stroke="#1E293B" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="140" y1="118" x2="210" y2="155" stroke="#1E293B" stroke-width="2.5"/>
  <line x1="140" y1="118" x2="175" y2="176" stroke="#1E293B" stroke-width="3.2"/>
  <circle cx="140" cy="118" r="13" fill="#2563EB"/>
  <text x="140" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">C</text>
  <circle cx="140" cy="26" r="10" fill="#EF4444"/><text x="140" y="30" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="62" cy="158" r="10" fill="#EF4444"/><text x="62" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="216" cy="158" r="10" fill="#EF4444"/><text x="216" y="162" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="178" cy="180" r="10" fill="#EF4444"/><text x="178" y="184" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">H</text>
  <path d="M140,86 A32,32 0 0,1 167,134" fill="none" stroke="#16A34A" stroke-width="1.8"/>
  <text x="175" y="102" font-size="10.5" font-weight="700" fill="#16A34A">109°28'</text>
  <text x="108" y="72" font-size="10" font-weight="600" fill="#1E293B">109 pm</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Méthane',
          stepTheme: 'Géométrie spatiale',
          stepTitle: 'Structure tétraédrique du méthane',
          paragraphText:
            'Dans la molécule de méthane ($\\mathrm{CH_4}$), l’atome de carbone occupe le centre d’un tétraèdre régulier et les 4 atomes d’hydrogène occupent ses 4 sommets : la molécule est non plane.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p02_q1',
            type: 'mcq',
            prompt: 'Quelle est la géométrie spatiale exacte de la molécule de méthane $\\mathrm{CH_4}$ ?',
            options: [
              'Tétraédrique régulière (carbone au centre et les 4 H aux sommets)',
              'Plane en forme de carré avec des angles de 90°',
              'Linéaire avec tous les atomes alignés sur une droite',
              'Pyramide à base triangulaire avec H au sommet et C à la base',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les 4 doublets de liaison autour du carbone du méthane pointent vers les 4 sommets d’un tétraèdre régulier.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Paramètres',
          stepTheme: 'Angles et distances',
          stepTitle: 'Longueur et angle de liaison du méthane',
          paragraphText:
            'Les caractéristiques géométriques mesurées du méthane sont une longueur de liaison $d(\\mathrm{C-H}) = 109\\text{ pm}$ ($1\\text{ pm} = 10^{-12}\\text{ m}$) et un angle de valence $\\widehat{\\mathrm{HCH}} = 109^\\circ 28\'$.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p02_q2',
            type: 'mcq',
            prompt: 'Quelles sont la longueur de liaison C–H et la valeur de l’angle $\\widehat{\\mathrm{HCH}}$ dans la molécule de méthane ?',
            options: [
              '109 pm et 109°28′',
              '134 pm et 120°',
              '120 pm et 180°',
              '154 pm et 90°',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans le méthane, $d(\\mathrm{C-H}) = 109\\text{ pm}$ et $\\widehat{\\mathrm{HCH}} = 109^\\circ 28\'$ (134 pm/120° correspond à l’éthylène et 120 pm/180° à l’acétylène).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Éthane',
          stepTheme: 'Liaison C–C',
          stepTitle: 'Rotation libre autour de la liaison simple C–C',
          paragraphText:
            'Dans l’éthane ($\\mathrm{CH_3-CH_3}$), les deux carbones sont tétragonaux et reliés par une liaison covalente simple. Les deux groupes méthyle $-\\mathrm{CH_3}$ peuvent tourner librement l’un par rapport à l’autre autour de l’axe $\\mathrm{C-C}$.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p02_q3',
            type: 'mcq',
            prompt: 'Que peuvent faire les deux groupes méthyle ($\\mathrm{-CH_3}$) de la molécule d’éthane autour de l’axe de la liaison simple C–C ?',
            options: [
              'Tourner librement l’un par rapport à l’autre',
              'Rester strictement bloqués dans un même plan rigide comme dans l’éthylène',
              'Former spontanément une triple liaison sans perte d’hydrogène',
              'Se séparer spontanément en deux atomes isolés à froid',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une liaison covalente simple C–C autorise la libre rotation des groupes situés de part et d’autre de son axe.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Chaîne linéaire',
          stepTheme: 'Squelette carboné',
          stepTitle: 'Reconnaître une chaîne carbonée linéaire',
          paragraphText:
            'Une chaîne carbonée est dite linéaire lorsqu’elle est formée d’atomes de carbone liés à la suite les uns des autres sans former de boucle : aucun atome de carbone n’est lié à plus de deux autres atomes de carbone.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p02_q4',
            type: 'mcq',
            prompt: 'Quelle formule semi-développée correspond à un alcane à chaîne carbonée linéaire ?',
            options: [
              '$\\mathrm{CH_3-CH_2-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CH(CH_3)-CH_3}$',
              '$\\mathrm{CH_3-C(CH_3)_2-CH_3}$',
              '$\\mathrm{CH_2=CH-CH_2-CH_3}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans $\\mathrm{CH_3-CH_2-CH_2-CH_3}$, les 4 carbones se suivent en une seule ligne acyclique sans ramification ($\\mathrm{CH_2=CH-CH_2-CH_3}$ est un alcène).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Chaîne ramifiée',
          stepTheme: 'Carbone ramifié',
          stepTitle: 'Critère d’une chaîne carbonée ramifiée',
          paragraphText:
            'Une chaîne carbonée acyclique est ramifiée lorsqu’au moins un atome de carbone (appelé carbone ramifié) est directement relié à trois ou quatre autres atomes de carbone.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p02_q5',
            type: 'mcq',
            prompt: 'À combien d’autres atomes de carbone un « carbone ramifié » est-il directement lié ?',
            options: [
              'À trois ou quatre autres atomes de carbone',
              'À un seul autre atome de carbone uniquement',
              'À exactement deux autres atomes de carbone',
              'À zéro atome de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un carbone de bout de chaîne est lié à 1 C, un maillon linéaire $-\\mathrm{CH_2}-$ à 2 C, et un nœud de ramification ($-\\mathrm{CH}<$ ou $>\\mathrm{C}<$) à 3 ou 4 C.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Dessins coudés',
          stepTitle: 'Attention aux angles dessinés sur la feuille !',
          paragraphText:
            'Attention : sur une feuille, on peut dessiner $\\mathrm{CH_3-CH_2-CH_2-CH_3}$ avec un coude à 90° en bout de ligne ($\\mathrm{CH_3-CH_2-CH_2}$ puis $\\mathrm{CH_3}$ vers le bas). Ce n’est pas une ramification ! Le carbone n’est toujours lié qu’à 2 autres carbones : la chaîne reste linéaire.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p02_q6',
            type: 'mcq',
            prompt: 'Si une molécule est écrite $\\mathrm{CH_3-CH_2-CH_2}$ avec un $\\mathrm{-CH_3}$ tracé vers le bas sous le troisième carbone, sa chaîne est-elle ramifiée ?',
            options: [
              'Non, elle reste linéaire car chaque carbone interne n’est lié qu’à 2 autres carbones',
              'Oui, dès qu’un segment est tracé verticalement c’est une ramification',
              'Oui, car elle forme un cycle à 4 carbones',
              'Non, car elle ne contient pas 4 atomes de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un simple pliage du dessin en bout de chaîne ne crée pas de nœud à 3 ou 4 voisins : c’est toujours la même chaîne linéaire à 4 carbones.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l02_alcanes_p02_q1',
          type: 'mcq',
          prompt: 'Quelle est la géométrie spatiale exacte de la molécule de méthane $\\mathrm{CH_4}$ ?',
          options: [
            'Tétraédrique régulière (carbone au centre et les 4 H aux sommets)',
            'Plane en forme de carré avec des angles de 90°',
            'Linéaire avec tous les atomes alignés sur une droite',
            'Pyramide à base triangulaire avec H au sommet et C à la base',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les 4 doublets de liaison autour du carbone du méthane pointent vers les 4 sommets d’un tétraèdre régulier.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p02_q2',
          type: 'mcq',
          prompt: 'Quelles sont la longueur de liaison C–H et la valeur de l’angle $\\widehat{\\mathrm{HCH}}$ dans la molécule de méthane ?',
          options: [
            '109 pm et 109°28′',
            '134 pm et 120°',
            '120 pm et 180°',
            '154 pm et 90°',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans le méthane, $d(\\mathrm{C-H}) = 109\\text{ pm}$ et $\\widehat{\\mathrm{HCH}} = 109^\\circ 28\'$ (134 pm/120° correspond à l’éthylène et 120 pm/180° à l’acétylène).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p02_q3',
          type: 'mcq',
          prompt: 'Que peuvent faire les deux groupes méthyle ($\\mathrm{-CH_3}$) de la molécule d’éthane autour de l’axe de la liaison simple C–C ?',
          options: [
            'Tourner librement l’un par rapport à l’autre',
            'Rester strictement bloqués dans un même plan rigide comme dans l’éthylène',
            'Former spontanément une triple liaison sans perte d’hydrogène',
            'Se séparer spontanément en deux atomes isolés à froid',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une liaison covalente simple C–C autorise la libre rotation des groupes situés de part et d’autre de son axe.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p02_q4',
          type: 'mcq',
          prompt: 'Quelle formule semi-développée correspond à un alcane à chaîne carbonée linéaire ?',
          options: [
            '$\\mathrm{CH_3-CH_2-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CH(CH_3)-CH_3}$',
            '$\\mathrm{CH_3-C(CH_3)_2-CH_3}$',
            '$\\mathrm{CH_2=CH-CH_2-CH_3}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans $\\mathrm{CH_3-CH_2-CH_2-CH_3}$, les 4 carbones se suivent en une seule ligne acyclique sans ramification ($\\mathrm{CH_2=CH-CH_2-CH_3}$ est un alcène).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p02_q5',
          type: 'mcq',
          prompt: 'À combien d’autres atomes de carbone un « carbone ramifié » est-il directement lié ?',
          options: [
            'À trois ou quatre autres atomes de carbone',
            'À un seul autre atome de carbone uniquement',
            'À exactement deux autres atomes de carbone',
            'À zéro atome de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un carbone de bout de chaîne est lié à 1 C, un maillon linéaire $-\\mathrm{CH_2}-$ à 2 C, et un nœud de ramification ($-\\mathrm{CH}<$ ou $>\\mathrm{C}<$) à 3 ou 4 C.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p02_q6',
          type: 'mcq',
          prompt: 'Si une molécule est écrite $\\mathrm{CH_3-CH_2-CH_2}$ avec un $\\mathrm{-CH_3}$ tracé vers le bas sous le troisième carbone, sa chaîne est-elle ramifiée ?',
          options: [
            'Non, elle reste linéaire car chaque carbone interne n’est lié qu’à 2 autres carbones',
            'Oui, dès qu’un segment est tracé verticalement c’est une ramification',
            'Oui, car elle forme un cycle à 4 carbones',
            'Non, car elle ne contient pas 4 atomes de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un simple pliage du dessin en bout de chaîne ne crée pas de nœud à 3 ou 4 voisins : c’est toujours la même chaîne linéaire à 4 carbones.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Nomenclature des alcanes linéaires, groupes alkyles et ramifiés
    // ========================================================================
    {
      id: 'premiere_c_chimie_l02_alcanes_p03',
      order: 3,
      title: 'Nomenclature IUPAC des alcanes linéaires et ramifiés',
      summary:
        'Nommer les 10 premiers alcanes linéaires, les groupes alkyles et appliquer les règles IUPAC (chaîne principale, plus petits indices, ordre alphabétique, dérivés halogénés).',
      conceptExplanation:
        "La nomenclature des alcanes obéit aux règles suivantes :\n\n1. **Alcanes linéaires ($n = 1$ à $10$)** :\n   - $n=1$ méthane, $2$ éthane, $3$ propane, $4$ butane (noms d’usage) ;\n   - $n=5$ pentane, $6$ hexane, $7$ heptane, $8$ octane, $9$ nonane, $10$ décane (**préfixe + ane**).\n2. **Groupes alkyles ($-\\mathrm{C_nH_{2n+1}}$)** : obtenus en retirant un H à un alcane ; suffixe **-yle** (méthyle $-\\mathrm{CH_3}$, éthyle $-\\mathrm{C_2H_5}$, propyle $-\\mathrm{C_3H_7}$, isopropyle $-\\mathrm{CH(CH_3)_2}$). Dans le nom de l’alcane, on supprime le « e » final de « -yle ».\n3. **Alcanes à chaîne ramifiée (3 étapes)** :\n   - ① Trouver la **chaîne la plus longue** (chaîne principale) → donne le nom racine de l’alcane.\n   - ② Numéroter la chaîne principale de façon à attribuer les **indices de position les plus petits possibles** aux ramifications.\n   - ③ Énoncer les substituants (alkyles ou halogènes : fluoro-, chloro-, bromo-) par **ordre alphabétique** (sans tenir compte des préfixes multiplicatifs *di-, tri-, tétra-*).",
      keyRule:
        'Toujours chercher la chaîne la plus longue (attention aux détours en C₂H₅ !), numéroter pour obtenir les indices les plus bas, puis classer les substituants par ordre alphabétique sans compter di/tri.',
      formulas: [
        {
          name: 'Formule générale d’un groupe alkyle',
          formula: '-\\mathrm{C_nH_{2n+1}}',
          note: 'Remplacer la terminaison -ane par -yle (sans « e » devant le nom principal)',
        },
      ],
      workedExample: {
        title: 'Nommer un alcane ramifié et un dérivé halogéné (Activité p. 3 & Ex 1 p. 7)',
        statement:
          'Nomme le composé C de l’activité p. 3 : $\\mathrm{CH_3-CH(C_2H_5)-CH(C_2H_5)-CH_2-CH(C_2H_5)-CH_3}$, ainsi que le dérivé bromo-chloro de l’Exercice 1c.',
        methodSteps: [
          '1) Chaîne principale : en dépliant le C₂H₅ à gauche (2 C) jusqu’au C₂H₅ de droite (2 C), on obtient 2 + 1 + 1 + 1 + 1 + 2 = 8 carbones (octane !), et non 6.',
          '2) Numérotation : en partant du bout C₂H₅ de gauche, les substituants sont en 3 (méthyle), 4 (éthyle) et 6 (méthyle), soit les indices (3, 4, 6) < (3, 5, 6).',
          '3) Ordre alphabétique (« éthyl » avant « méthyl ») : 4-éthyl-3,6-diméthyloctane.',
        ],
        conclusion:
          'Ne jamais choisir une chaîne horizontale par automatisme : il faut toujours déplier les groupes C₂H₅ ou C₃H₇ situés aux extrémités.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Les 10 premiers alcanes linéaires et groupes alkyles courants',
        tableData: {
          headers: ['n', 'Alcane linéaire', 'Formule brute', 'Groupe alkyle associé'],
          rows: [
            [1, 'Méthane', 'CH₄', 'Méthyle (-CH₃)'],
            [2, 'Éthane', 'C₂H₆', 'Éthyle (-CH₂-CH₃)'],
            [3, 'Propane', 'C₃H₈', 'Propyle / Isopropyle'],
            [4, 'Butane', 'C₄H₁₀', 'Butyle (-C₄H₉)'],
            [5, 'Pentane', 'C₅H₁₂', 'Pentyle (-C₅H₁₁)'],
            [6, 'Hexane', 'C₆H₁₄', 'Hexyle (-C₆H₁₃)'],
            [7, 'Heptane', 'C₇H₁₆', 'Heptyle (-C₇H₁₅)'],
            [8, 'Octane', 'C₈H₁₈', 'Octyle (-C₈H₁₇)'],
            [9, 'Nonane', 'C₉H₂₀', 'Nonyle (-C₉H₁₉)'],
            [10, 'Décane', 'C₁₀H₂₂', 'Décyle (-C₁₀H₂₁)'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Bases',
          stepTheme: 'Alcanes linéaires',
          stepTitle: 'Noms des alcanes de n = 1 à 10',
          paragraphText:
            'Les quatre premiers alcanes portent des noms d’usage (méthane, éthane, propane, butane). À partir de $n = 5$, on accole le suffixe « -ane » au préfixe grec indiquant le nombre de carbones : pentane (5), hexane (6), heptane (7), octane (8), nonane (9), décane (10).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p03_q1',
            type: 'mcq',
            prompt: 'Quel est le nom de l’alcane linéaire de formule brute $\\mathrm{C_7H_{16}}$ ?',
            options: [
              'Heptane',
              'Hexane',
              'Octane',
              'Nonane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le préfixe pour 7 atomes de carbone est « hept- », d’où le nom heptane.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Substituants',
          stepTheme: 'Groupes alkyles',
          stepTitle: 'Méthyle, éthyle, propyle et isopropyle',
          paragraphText:
            'Un groupe alkyle dérive d’un alcane par perte d’un atome H (terminaison « -yle »). Par exemple, $-\\mathrm{CH_3}$ est le méthyle, $-\\mathrm{CH_2-CH_3}$ est l’éthyle, $-\\mathrm{CH_2-CH_2-CH_3}$ est le propyle et $-\\mathrm{CH(CH_3)-CH_3}$ est l’isopropyle.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p03_q2',
            type: 'mcq',
            prompt: 'Quelle formule semi-développée correspond au groupe isopropyle ?',
            options: [
              '$\\mathrm{CH_3-CH(CH_3)-}$ (relié par le carbone central)',
              '$\\mathrm{CH_3-CH_2-CH_2-}$',
              '$\\mathrm{CH_3-CH_2-}$',
              '$\\mathrm{CH_3-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le groupe isopropyle possède 3 carbones et se lie à la chaîne principale par le carbone central : $\\mathrm{-CH(CH_3)_2}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Piège classique',
          stepTheme: 'Chaîne la plus longue',
          stepTitle: 'Bien repérer la chaîne principale avec des éthyles',
          paragraphText:
            'Dans l’exemple du cours $\\mathrm{CH_3-CH(CH_3)-CH_2-CH(C_2H_5)-CH_2-CH_3}$, la chaîne horizontale contient 5 carbones, mais en descendant sur $-\\mathrm{C_2H_5}$ on obtient 6 carbones (hexane). C’est donc un hexane substitué en 2 et 4 : le 4-éthyl-2-méthylhexane (ou attention selon la position : vérifie toujours les deux bouts !).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p03_q3',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC exact du composé E : $\\mathrm{CH_3-CH(C_2H_5)-CH_3}$ ?',
            options: [
              '2-méthylbutane',
              '2-éthylpropane',
              '1,1-diméthylpropane',
              'Pentane linéaire',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En dépliant le groupe $-\\mathrm{C_2H_5}$, la chaîne la plus longue comporte 4 carbones (butane) avec un groupe méthyle sur le carbone 2 : 2-méthylbutane.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Numérotation',
          stepTheme: 'Plus petits indices',
          stepTitle: 'Choisir le sens de numérotation et les préfixes di/tri',
          paragraphText:
            'Dans $\\mathrm{CH_3-C(CH_3)_2-CH(CH_3)-CH_3}$, numéroter de gauche à droite place les trois méthyles en (2, 2, 3), ce qui est plus petit que (2, 3, 3) de droite à gauche. On nomme : 2,2,3-triméthylbutane.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p03_q4',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de la molécule B : $\\mathrm{CH_3-CH(CH_3)-CH_2-CH_2-CH(CH_3)-CH_3}$ ?',
            options: [
              '2,5-diméthylhexane',
              '1,4-diméthylhexane',
              '2-méthyl-5-méthylhexane',
              '2,5-méthyloctane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La chaîne principale comporte 6 carbones (hexane) et porte deux groupes méthyles en positions 2 et 5 (les plus basses possibles) : 2,5-diméthylhexane.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Ordre alphabétique',
          stepTheme: 'Règle IUPAC',
          stepTitle: 'Les préfixes « di-, tri-, tétra- » ne comptent pas !',
          paragraphText:
            'Attention : pour classer les substituants par ordre alphabétique, on ignore les préfixes multiplicateurs *di-, tri-, tétra-*. Ainsi dans le 4-éthyl-3,6-diméthyloctane, on compare « éthyl » (e) avant « méthyl » (m), et non « d » de diméthyl.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p03_q5',
            type: 'mcq',
            prompt: 'Comment s’écrit correctement le nom de l’alcane portant un groupe éthyle en position 4 et deux groupes méthyles en positions 3 et 6 sur une chaîne à 8 carbones ?',
            options: [
              '4-éthyl-3,6-diméthyloctane',
              '3,6-diméthyl-4-éthyloctane',
              '3,6-méthyl-4-éthyloctane',
              '4-éthyl-3,6-diméthylhexane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans l’ordre alphabétique, « éthyl » précède « méthyl » (on ignore le préfixe « di- »). Le nom officiel est donc 4-éthyl-3,6-diméthyloctane.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Halogénoalcanes',
          stepTheme: 'Exercice 1 p. 7',
          stepTitle: 'Formule d’un alcane substitué par des halogènes',
          paragraphText:
            'Les halogènes (fluoro-, chloro-, bromo-) se nomment et se classent alphabétiquement exactement comme des substituants alkyles. Exemple de l’Exercice 1 : le 2-chloro-3-méthylbutane a pour formule $\\mathrm{CH_3-CHCl-CH(CH_3)-CH_3}$.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p03_q6',
            type: 'mcq',
            prompt: 'Quelle formule semi-développée correspond au « 2,3-dichloro-2-méthylpentane » (Exercice 1b) ?',
            options: [
              '$\\mathrm{CH_3-CCl(CH_3)-CHCl-CH_2-CH_3}$',
              '$\\mathrm{CH_2Cl-CH(CH_3)-CHCl-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CHCl-CCl(CH_3)-CH_2-CH_3}$',
              '$\\mathrm{CH_3-CCl_2-CH(CH_3)-CH_2-CH_3}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La chaîne pentane a 5 C : le carbone 2 porte à la fois un Cl et un $-\\mathrm{CH_3}$, et le carbone 3 porte le second Cl, soit $\\mathrm{CH_3-CCl(CH_3)-CHCl-CH_2-CH_3}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l02_alcanes_p03_q1',
          type: 'mcq',
          prompt: 'Quel est le nom de l’alcane linéaire de formule brute $\\mathrm{C_7H_{16}}$ ?',
          options: [
            'Heptane',
            'Hexane',
            'Octane',
            'Nonane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le préfixe pour 7 atomes de carbone est « hept- », d’où le nom heptane.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p03_q2',
          type: 'mcq',
          prompt: 'Quelle formule semi-développée correspond au groupe isopropyle ?',
          options: [
            '$\\mathrm{CH_3-CH(CH_3)-}$ (relié par le carbone central)',
            '$\\mathrm{CH_3-CH_2-CH_2-}$',
            '$\\mathrm{CH_3-CH_2-}$',
            '$\\mathrm{CH_3-}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le groupe isopropyle possède 3 carbones et se lie à la chaîne principale par le carbone central : $\\mathrm{-CH(CH_3)_2}$.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p03_q3',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC exact du composé E : $\\mathrm{CH_3-CH(C_2H_5)-CH_3}$ ?',
          options: [
            '2-méthylbutane',
            '2-éthylpropane',
            '1,1-diméthylpropane',
            'Pentane linéaire',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En dépliant le groupe $-\\mathrm{C_2H_5}$, la chaîne la plus longue comporte 4 carbones (butane) avec un groupe méthyle sur le carbone 2 : 2-méthylbutane.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p03_q4',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de la molécule B : $\\mathrm{CH_3-CH(CH_3)-CH_2-CH_2-CH(CH_3)-CH_3}$ ?',
          options: [
            '2,5-diméthylhexane',
            '1,4-diméthylhexane',
            '2-méthyl-5-méthylhexane',
            '2,5-méthyloctane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La chaîne principale comporte 6 carbones (hexane) et porte deux groupes méthyles en positions 2 et 5 (les plus basses possibles) : 2,5-diméthylhexane.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p03_q5',
          type: 'mcq',
          prompt: 'Comment s’écrit correctement le nom de l’alcane portant un groupe éthyle en position 4 et deux groupes méthyles en positions 3 et 6 sur une chaîne à 8 carbones ?',
          options: [
            '4-éthyl-3,6-diméthyloctane',
            '3,6-diméthyl-4-éthyloctane',
            '3,6-méthyl-4-éthyloctane',
            '4-éthyl-3,6-diméthylhexane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans l’ordre alphabétique, « éthyl » précède « méthyl » (on ignore le préfixe « di- »). Le nom officiel est donc 4-éthyl-3,6-diméthyloctane.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p03_q6',
          type: 'mcq',
          prompt: 'Quelle formule semi-développée correspond au « 2,3-dichloro-2-méthylpentane » (Exercice 1b) ?',
          options: [
            '$\\mathrm{CH_3-CCl(CH_3)-CHCl-CH_2-CH_3}$',
            '$\\mathrm{CH_2Cl-CH(CH_3)-CHCl-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CHCl-CCl(CH_3)-CH_2-CH_3}$',
            '$\\mathrm{CH_3-CCl_2-CH(CH_3)-CH_2-CH_3}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La chaîne pentane a 5 C : le carbone 2 porte à la fois un Cl et un $-\\mathrm{CH_3}$, et le carbone 3 porte le second Cl, soit $\\mathrm{CH_3-CCl(CH_3)-CHCl-CH_2-CH_3}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Les cyclanes (cycloalcanes) et l’isomérie de chaîne
    // ========================================================================
    {
      id: 'premiere_c_chimie_l02_alcanes_p04',
      order: 4,
      title: 'Les cyclanes et l’isomérie de chaîne',
      summary:
        'Connaître la définition, la formule brute CₙH₂ₙ et la nomenclature des cyclanes (cycloalcanes), et savoir dénombrer les isomères de chaîne en C₄H₁₀ et C₅H₁₂.',
      conceptExplanation:
        "1. **Les cyclanes (ou cycloalcanes)** :\n   - Hydrocarbures saturés (uniquement des liaisons simples C–C) dont la chaîne carbonée se referme sur elle-même en formant un **cycle**.\n   - Leur formule brute générale est **$\\mathrm{C_nH_{2n}}$** ($n \\ge 3$, masse molaire $M = 14n\\text{ g/mol}$).\n   - **Nomenclature** : préfixe **cyclo-** suivi du nom de l’alcane linéaire de même nombre de carbones du cycle (cyclopropane $\\mathrm{C_3H_6}$, cyclobutane, cyclopentane, cyclohexane). En cas de ramifications, on numérote le cycle pour donner les **indices les plus petits** possibles (en cas d’égalité entre deux groupes différents, priorité alphabétique au numéro 1).\n2. **Isomérie de chaîne** :\n   - Des **isomères de chaîne** possèdent la **même formule brute** mais des **enchaînements carbonés (formules semi-développées) différents**.\n   - Pour $\\mathrm{C_4H_{10}}$ : 2 isomères (butane et 2-méthylpropane).\n   - Pour $\\mathrm{C_5H_{12}}$ : 3 isomères (pentane, 2-méthylbutane et 2,2-diméthylpropane).",
      keyRule:
        'Cyclane = chaîne cyclique saturée de formule CₙH₂ₙ (n ≥ 3). Isomères de chaîne = même formule brute, squelette carboné différent (2 en C₄H₁₀, 3 en C₅H₁₂).',
      formulas: [
        {
          name: 'Formule brute générale d’un cyclane',
          formula: '\\mathrm{C_nH_{2n}} \\quad (n \\ge 3)',
          note: 'Attention : même formule brute que les alcènes acycliques !',
        },
      ],
      workedExample: {
        title: 'Trouver les trois isomères de chaîne de C₅H₁₂ (Activité p. 5)',
        statement:
          'Donne les formules semi-développées et les noms des trois isomères de l’alcane de formule brute $\\mathrm{C_5H_{12}}$.',
        methodSteps: [
          '1) Chaîne principale à 5 carbones : CH₃-CH₂-CH₂-CH₂-CH₃ → pentane (ou n-pentane).',
          '2) Chaîne principale à 4 carbones + 1 méthyle : CH₃-CH(CH₃)-CH₂-CH₃ → 2-méthylbutane.',
          '3) Chaîne principale à 3 carbones + 2 méthyles sur le carbone central : CH₃-C(CH₃)₂-CH₃ → 2,2-diméthylpropane.',
        ],
        conclusion:
          'Il existe exactement 3 isomères de constitution de formule C₅H₁₂.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Cyclanes',
          stepTheme: 'Formule brute',
          stepTitle: 'Définition et formule générale des cyclanes',
          paragraphText:
            'Les cyclanes (cycloalcanes) sont des hydrocarbures à liaisons simples C–C uniquement dont le squelette forme un anneau fermé (cycle). La fermeture du cycle enlève 2 hydrogènes par rapport à l’alcane linéaire, donnant la formule brute $\\mathrm{C_nH_{2n}}$ ($n \\ge 3$).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p04_q1',
            type: 'mcq',
            prompt: 'Quelle est la formule brute générale des cyclanes (cycloalcanes) ?',
            options: [
              '$\\mathrm{C_nH_{2n}}$ ($n \\ge 3$)',
              '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
              '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
              '$\\mathrm{C_nH_{2n+1}}$ ($n \\ge 1$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un cycle saturé simple possède exactement 2 atomes d’hydrogène par atome de carbone : $\\mathrm{C_nH_{2n}}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège Vrai/Faux',
          stepTheme: 'Exercice 2.4 p. 7–8',
          stepTitle: 'Cyclique ≠ ramifiée',
          paragraphText:
            'Attention à l’affirmation de l’Exercice 2.4 : « Les alcanes cycliques ou cyclanes sont des alcanes dont la chaîne carbonée est ramifiée » → FAUX ! Un cyclane non substitué (comme le cyclopentane) a une chaîne cyclique fermée sur elle-même, et pas forcément ramifiée.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p04_q2',
            type: 'mcq',
            prompt: 'Pourquoi la proposition « Les cyclanes sont des alcanes dont la chaîne carbonée est ramifiée » est-elle FAUSSE ?',
            options: [
              'Parce qu’un cyclane se définit par une chaîne carbonée refermée sur elle-même en cycle, sans être nécessairement ramifiée',
              'Parce que les cyclanes possèdent obligatoirement une double liaison C=C',
              'Parce que les cyclanes ne contiennent que des atomes de carbone sans hydrogène',
              'Parce qu’un cycle comporte toujours un seul atome de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un cyclane possède une chaîne fermée sur elle-même (cyclique) ; le cyclopropane ou le cyclohexane non substitués ne comportent aucune ramification.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Nomenclature',
          stepTheme: 'Cyclanes substitués',
          stepTitle: 'Numéroter un cyclane ramifié (Activité p. 4)',
          paragraphText:
            'Sur un cycle à 1 seul substituant, l’indice 1 est inutile (ex. méthylcyclobutane). Avec 2 substituants, on choisit le sens donnant les plus petits indices (ex. 1,3-diméthylcyclohexane plutôt que 1,5), et en cas d’égalité (1 et 2, ou 1 et 3), on attribue l’indice 1 au groupe prioritaire par ordre alphabétique : 1-éthyl-2-méthylcyclopentane et 1-éthyl-3-méthylcyclopentane.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p04_q3',
            type: 'mcq',
            prompt: 'Un cycle à 5 carbones saturé porte un groupe éthyle et un groupe méthyle sur deux carbones voisins. Quel est son nom IUPAC ?',
            options: [
              '1-éthyl-2-méthylcyclopentane',
              '2-éthyl-1-méthylcyclopentane',
              '1-éthyl-5-méthylcyclopentane',
              '1-éthyl-2-méthylpentane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On numérote en (1, 2) plutôt qu’en (1, 5), et « éthyl » précède « méthyl » alphabétiquement donc porte l’indice 1 : 1-éthyl-2-méthylcyclopentane.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Isomérie',
          stepTheme: 'Isomères de chaîne',
          stepTitle: 'Définition de l’isomérie de chaîne',
          paragraphText:
            'On appelle isomères de chaîne des composés différents ayant exactement la même formule brute, mais des formules semi-développées qui diffèrent par l’enchaînement de leurs atomes de carbone (ex. butane linéaire $\\mathrm{CH_3-CH_2-CH_2-CH_3}$ et 2-méthylpropane $\\mathrm{CH_3-CH(CH_3)-CH_3}$).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p04_q4',
            type: 'mcq',
            prompt: 'Combien d’isomères d’alcanes existent pour la formule brute $\\mathrm{C_4H_{10}}$ ?',
            options: [
              '2 isomères (le butane et le 2-méthylpropane)',
              '1 seul isomère (le butane)',
              '3 isomères',
              '4 isomères',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On peut former soit une chaîne linéaire à 4 C (butane), soit une chaîne à 3 C avec 1 méthyle sur le carbone central (2-méthylpropane).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Dénombrement C₅',
          stepTheme: 'Isomères de C₅H₁₂',
          stepTitle: 'Les trois isomères de formule brute C₅H₁₂',
          paragraphText:
            'Pour $\\mathrm{C_5H_{12}}$, il existe exactement 3 isomères : le pentane (chaîne à 5 C), le 2-méthylbutane (chaîne à 4 C + 1 méthyle) et le 2,2-diméthylpropane (chaîne à 3 C + 2 méthyles sur C2).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p04_q5',
            type: 'mcq',
            prompt: 'Lequel de ces composés N’EST PAS un isomère de formule brute $\\mathrm{C_5H_{12}}$ ?',
            options: [
              'Le cyclopentane',
              'Le 2-méthylbutane',
              'Le 2,2-diméthylpropane',
              'Le pentane linéaire',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le cyclopentane est un cyclane de formule brute $\\mathrm{C_5H_{10}}$, alors que le pentane, le 2-méthylbutane et le 2,2-diméthylpropane ont tous pour formule $\\mathrm{C_5H_{12}}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Faux isomère',
          stepTheme: 'Éviter les doublons',
          stepTitle: 'Le « 2-éthylpropane » n’existe pas !',
          paragraphText:
            'Piège fréquent lors de la recherche d’isomères de $\\mathrm{C_5H_{12}}$ : si on accroche un groupe éthyle sur le carbone 2 du propane, la chaîne la plus longue passe à 4 carbones. Ce n’est pas un nouvel isomère, mais simplement le 2-méthylbutane déjà compté !',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p04_q6',
            type: 'mcq',
            prompt: 'Un élève propose « 2-éthylpropane » comme 4e isomère de $\\mathrm{C_5H_{12}}$. Quelle molécule a-t-il en réalité dessinée ?',
            options: [
              'Le 2-méthylbutane (déjà compté)',
              'Le 2,2-diméthylpropane',
              'Le cyclobutane',
              'Le méthylcyclobutane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En prolongeant par le groupe éthyle, la chaîne la plus longue a 4 carbones (butane) et un méthyle sur le carbone 2 : c’est le 2-méthylbutane.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l02_alcanes_p04_q1',
          type: 'mcq',
          prompt: 'Quelle est la formule brute générale des cyclanes (cycloalcanes) ?',
          options: [
            '$\\mathrm{C_nH_{2n}}$ ($n \\ge 3$)',
            '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
            '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
            '$\\mathrm{C_nH_{2n+1}}$ ($n \\ge 1$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un cycle saturé simple possède exactement 2 atomes d’hydrogène par atome de carbone : $\\mathrm{C_nH_{2n}}$.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p04_q2',
          type: 'mcq',
          prompt: 'Pourquoi la proposition « Les cyclanes sont des alcanes dont la chaîne carbonée est ramifiée » est-elle FAUSSE ?',
          options: [
            'Parce qu’un cyclane se définit par une chaîne carbonée refermée sur elle-même en cycle, sans être nécessairement ramifiée',
            'Parce que les cyclanes possèdent obligatoirement une double liaison C=C',
            'Parce que les cyclanes ne contiennent que des atomes de carbone sans hydrogène',
            'Parce qu’un cycle comporte toujours un seul atome de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un cyclane possède une chaîne fermée sur elle-même (cyclique) ; le cyclopropane ou le cyclohexane non substitués ne comportent aucune ramification.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p04_q3',
          type: 'mcq',
          prompt: 'Un cycle à 5 carbones saturé porte un groupe éthyle et un groupe méthyle sur deux carbones voisins. Quel est son nom IUPAC ?',
          options: [
            '1-éthyl-2-méthylcyclopentane',
            '2-éthyl-1-méthylcyclopentane',
            '1-éthyl-5-méthylcyclopentane',
            '1-éthyl-2-méthylpentane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On numérote en (1, 2) plutôt qu’en (1, 5), et « éthyl » précède « méthyl » alphabétiquement donc porte l’indice 1 : 1-éthyl-2-méthylcyclopentane.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p04_q4',
          type: 'mcq',
          prompt: 'Combien d’isomères d’alcanes existent pour la formule brute $\\mathrm{C_4H_{10}}$ ?',
          options: [
            '2 isomères (le butane et le 2-méthylpropane)',
            '1 seul isomère (le butane)',
            '3 isomères',
            '4 isomères',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On peut former soit une chaîne linéaire à 4 C (butane), soit une chaîne à 3 C avec 1 méthyle sur le carbone central (2-méthylpropane).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p04_q5',
          type: 'mcq',
          prompt: 'Lequel de ces composés N’EST PAS un isomère de formule brute $\\mathrm{C_5H_{12}}$ ?',
          options: [
            'Le cyclopentane',
            'Le 2-méthylbutane',
            'Le 2,2-diméthylpropane',
            'Le pentane linéaire',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le cyclopentane est un cyclane de formule brute $\\mathrm{C_5H_{10}}$, alors que le pentane, le 2-méthylbutane et le 2,2-diméthylpropane ont tous pour formule $\\mathrm{C_5H_{12}}$.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p04_q6',
          type: 'mcq',
          prompt: 'Un élève propose « 2-éthylpropane » comme 4e isomère de $\\mathrm{C_5H_{12}}$. Quelle molécule a-t-il en réalité dessinée ?',
          options: [
            'Le 2-méthylbutane (déjà compté)',
            'Le 2,2-diméthylpropane',
            'Le cyclobutane',
            'Le méthylcyclobutane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En prolongeant par le groupe éthyle, la chaîne la plus longue a 4 carbones (butane) et un méthyle sur le carbone 2 : c’est le 2-méthylbutane.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Combustion des alcanes et bilan stœchiométrique
    // ========================================================================
    {
      id: 'premiere_c_chimie_l02_alcanes_p05',
      order: 5,
      title: 'Combustion des alcanes et bilans stœchiométriques',
      summary:
        'Équilibrer la combustion complète d’un alcane, identifier les produits d’une combustion incomplète et exploiter le bilan molaire ou volumique pour déterminer une formule brute ou la composition d’un mélange gazeux.',
      conceptExplanation:
        "1. **Combustion complète** (dioxygène en quantité suffisante) : dégage beaucoup de chaleur et forme uniquement du dioxyde de carbone et de l’eau :\n$$\\mathrm{C_nH_{2n+2} + \\dfrac{3n+1}{2}O_2 \\longrightarrow n\\,CO_2 + (n+1)H_2O}$$\n2. **Combustion incomplète** (dioxygène en défaut/insuffisant) : elle produit de l’eau ($\\mathrm{H_2O}$), du dioxyde de carbone ($\\mathrm{CO_2}$), du carbone noir ($\\mathrm{C}$) et du **monoxyde de carbone ($\\mathrm{CO}$)**, gaz très toxique.\n3. **Exploitation quantitative (bilan molaire / volumique)** :\n   - À partir des masses de $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$ : $\\dfrac{n(\\mathrm{CO_2})}{n} = \\dfrac{n(\\mathrm{H_2O})}{n+1}$, ce qui donne directement $n$ donc la formule brute.\n   - Pour un mélange gazeux de deux alcanes (volumes $V_1$ et $V_2$), on résout un système d’équations traduisant le volume total $V_1 + V_2$ et le volume de $\\mathrm{CO_2}$ formé (ou de $\\mathrm{O_2}$ consommé).",
      keyRule:
        'Combustion complète : CₙH₂ₙ₊₂ + ((3n+1)/2) O₂ → n CO₂ + (n+1) H₂O. En défaut d’O₂, il se forme aussi C et CO (toxique).',
      formulas: [
        {
          name: 'Équation générale de combustion complète',
          formula: '\\mathrm{C_nH_{2n+2} + \\dfrac{3n+1}{2}O_2 \\longrightarrow n\\,CO_2 + (n+1)H_2O}',
        },
        {
          name: 'Bilan molaire de combustion complète',
          formula: '\\dfrac{n(\\text{alcane})}{1} = \\dfrac{n(\\mathrm{CO_2})}{n} = \\dfrac{n(\\mathrm{H_2O})}{n+1}',
        },
      ],
      workedExample: {
        title: 'Composition d’un mélange gazeux propane/butane (Exercice 5 p. 9–10)',
        statement:
          'On brûle complètement $12\\text{ cm}^3$ d’un mélange de propane ($V_1$) et de butane ($V_2$) dans $100\\text{ cm}^3$ de dioxygène. Après condensation de l’eau, il reste $42\\text{ cm}^3$ de $\\mathrm{CO_2}$ et $31\\text{ cm}^3$ de $\\mathrm{O_2}$ en excès. Détermine $V_1$ et $V_2$.',
        methodSteps: [
          '1) Équations : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O et C₄H₁₀ + (13/2) O₂ → 4 CO₂ + 5 H₂O.',
          '2) Volume total des alcanes : V₁ + V₂ = 12 cm³.',
          '3) Volume de CO₂ formé : 3 V₁ + 4 V₂ = 42 cm³ (et O₂ consommé : 5 V₁ + 6,5 V₂ = 100 - 31 = 69 cm³).',
          '4) Résolution : 4 V₂ = 42 - 3(12 - V₂) → V₂ = 6 cm³ et V₁ = 6 cm³ (soit 50 % chacun).',
        ],
        conclusion:
          'Le mélange initial contient 6 cm³ de propane (50 %) et 6 cm³ de butane (50 %).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Combustion complète',
          stepTitle: 'Coefficients stœchiométriques du dioxygène',
          paragraphText:
            'Dans la combustion complète d’une mole d’alcane $\\mathrm{C_nH_{2n+2}}$, il faut $n$ moles de $\\mathrm{CO_2}$ et $(n+1)$ moles de $\\mathrm{H_2O}$. En comptant les atomes d’oxygène à droite ($2n + n + 1 = 3n + 1$), on trouve le coefficient $\\dfrac{3n+1}{2}$ devant $\\mathrm{O_2}$.',
          formula: { name: 'Exemple : butane', formula: '\\mathrm{C_4H_{10} + \\dfrac{13}{2}O_2 \\longrightarrow 4\\,CO_2 + 5\\,H_2O}' },
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p05_q1',
            type: 'mcq',
            prompt: 'Quel est le coefficient stœchiométrique du dioxygène $\\mathrm{O_2}$ dans l’équation $\\mathrm{C_3H_8 + \\dots O_2 \\to 3\\,CO_2 + 4\\,H_2O}$ ?',
            options: [
              '5',
              '13/2',
              '7/2',
              '4',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour $n = 3$, $(3n+1)/2 = (9+1)/2 = 5$. On vérifie : $5 \\times 2 = 10$ atomes O à gauche et $3\\times 2 + 4 = 10$ à droite.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Défaut de O₂',
          stepTheme: 'Combustion incomplète',
          stepTitle: 'Produits d’une combustion incomplète',
          paragraphText:
            'Lorsque le dioxygène est en défaut (insuffisant), la combustion est incomplète : la flamme devient jaune et fuligineuse. Les produits formés sont l’eau, le dioxyde de carbone, le carbone (suie) et le monoxyde de carbone ($\\mathrm{CO}$).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p05_q2',
            type: 'mcq',
            prompt: 'Quels produits toxiques ou solides apparaissent spécifiquement lorsque le dioxygène est insuffisant lors de la combustion d’un alcane ?',
            options: [
              'Du carbone (C) et du monoxyde de carbone (CO), en plus de CO₂ et H₂O',
              'Du dichlore gazeux (Cl₂) et du chlorure d’hydrogène (HCl)',
              'Du dioxygène pur et du méthanol liquide',
              'Uniquement de l’eau et du dioxyde de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une combustion incomplète (défaut d’O₂) produit de l’eau, du CO₂, du carbone noir (C) et du monoxyde de carbone (CO), gaz inodore et mortel.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Bilan molaire',
          stepTheme: 'Situation p. 6–7',
          stepTitle: 'Trouver la formule brute à partir de CO₂ et H₂O',
          paragraphText:
            'Lors de la combustion complète d’un alcane, on obtient $3{,}52\\text{ g}$ de $\\mathrm{CO_2}$ ($M=44\\text{ g/mol}$, soit $0{,}08\\text{ mol}$) et $1{,}8\\text{ g}$ d’eau ($M=18\\text{ g/mol}$, soit $0{,}10\\text{ mol}$). D’après $\\dfrac{0{,}08}{n} = \\dfrac{0{,}10}{n+1}$, on déduit $0{,}08(n+1) = 0{,}10n \\implies 0{,}02n = 0{,}08$.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p05_q3',
            type: 'mcq',
            prompt: 'La combustion complète d’un alcane produit $0{,}08\\text{ mol}$ de $\\mathrm{CO_2}$ et $0{,}10\\text{ mol}$ de $\\mathrm{H_2O}$. Quelle est la formule brute de cet alcane ?',
            options: [
              '$\\mathrm{C_4H_{10}}$',
              '$\\mathrm{C_5H_{12}}$',
              '$\\mathrm{C_3H_8}$',
              '$\\mathrm{C_2H_6}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'De $0{,}08 / n = 0{,}10 / (n+1)$, on obtient $0{,}02n = 0{,}08 \\implies n = 4$, soit le butane (ou 2-méthylpropane) $\\mathrm{C_4H_{10}}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Volume de gaz',
          stepTheme: 'Bilan volumique',
          stepTitle: 'Calculer le volume de O₂ nécessaire ($V_m = 22{,}4\\text{ L/mol}$)',
          paragraphText:
            'Dans la Situation d’évaluation p. 6–7, on brûle l’alcane en $\\mathrm{C_4H_{10}}$ : $n(\\mathrm{CO_2}) = 0{,}08\\text{ mol}$, et d’après $\\mathrm{2\\,C_4H_{10} + 13\\,O_2 \\to 8\\,CO_2 + 10\\,H_2O}$, on a $n(\\mathrm{O_2}) = \\dfrac{13}{8}\\,n(\\mathrm{CO_2}) = \\dfrac{13}{8}\\times 0{,}08 = 0{,}13\\text{ mol}$.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p05_q4',
            type: 'mcq',
            prompt: 'Avec $n(\\mathrm{O_2}) = 0{,}13\\text{ mol}$ et un volume molaire $V_m = 22{,}4\\text{ L/mol}$, quel volume de dioxygène a nécessité cette combustion ?',
            options: [
              '2,91 L (environ 2,9 L)',
              '1,79 L',
              '0,58 L',
              '4,48 L',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$V(\\mathrm{O_2}) = n(\\mathrm{O_2}) \\times V_m = 0{,}13 \\times 22{,}4 = 2{,}912\\text{ L} \\approx 2{,}9\\text{ L}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Mélange gazeux',
          stepTheme: 'Exercice 5 p. 9–10',
          stepTitle: 'Mettre en équation la combustion de deux alcanes',
          paragraphText:
            'Pour un mélange de $12\\text{ cm}^3$ de propane ($V_1$) et butane ($V_2$) formant $42\\text{ cm}^3$ de $\\mathrm{CO_2}$, les lois des gaz parfaits donnent $V_1 + V_2 = 12$ et $3V_1 + 4V_2 = 42$ (car 1 mol de propane donne 3 mol de CO₂ et 1 mol de butane en donne 4).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p05_q5',
            type: 'mcq',
            prompt: 'Un mélange de $12\\text{ cm}^3$ de propane ($V_1$) et de butane ($V_2$) produit $42\\text{ cm}^3$ de $\\mathrm{CO_2}$ après combustion complète. Quels sont $V_1$ et $V_2$ ?',
            options: [
              '$V_1 = 6\\text{ cm}^3$ et $V_2 = 6\\text{ cm}^3$ (50 % chacun)',
              '$V_1 = 4\\text{ cm}^3$ et $V_2 = 8\\text{ cm}^3$',
              '$V_1 = 8\\text{ cm}^3$ et $V_2 = 4\\text{ cm}^3$',
              '$V_1 = 3\\text{ cm}^3$ et $V_2 = 9\\text{ cm}^3$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$3(12 - V_2) + 4V_2 = 42 \\implies 36 + V_2 = 42 \\implies V_2 = 6\\text{ cm}^3$, d’où $V_1 = 6\\text{ cm}^3$ (50 % et 50 %).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Contrôle d’indice',
          stepTitle: 'Bien utiliser le bilan de O₂ sur un mélange',
          paragraphText:
            'Attention aux confusions d’indices : pour la combustion du butane ($V_2$), le volume de dioxygène consommé est $\\dfrac{13}{2}\\,V_2$ (et non $\\dfrac{13}{2}\\,V_1$ !). On vérifie sur l’Exercice 5 : $5(6) + 6{,}5(6) = 30 + 39 = 69\\text{ cm}^3$, et $100 - 69 = 31\\text{ cm}^3$ de $\\mathrm{O_2}$ restants.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p05_q6',
            type: 'mcq',
            prompt: 'Combien de $\\text{cm}^3$ de dioxygène consomme la combustion complète de $6\\text{ cm}^3$ de butane ($\\mathrm{C_4H_{10}}$) ?',
            options: [
              '$39\\text{ cm}^3$',
              '$30\\text{ cm}^3$',
              '$24\\text{ cm}^3$',
              '$69\\text{ cm}^3$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'D’après $\\mathrm{C_4H_{10} + \\frac{13}{2}O_2 \\to 4CO_2 + 5H_2O}$, $V(\\mathrm{O_2}) = \\frac{13}{2} \\times 6 = 39\\text{ cm}^3$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l02_alcanes_p05_q1',
          type: 'mcq',
          prompt: 'Quel est le coefficient stœchiométrique du dioxygène $\\mathrm{O_2}$ dans l’équation $\\mathrm{C_3H_8 + \\dots O_2 \\to 3\\,CO_2 + 4\\,H_2O}$ ?',
          options: [
            '5',
            '13/2',
            '7/2',
            '4',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour $n = 3$, $(3n+1)/2 = (9+1)/2 = 5$. On vérifie : $5 \\times 2 = 10$ atomes O à gauche et $3\\times 2 + 4 = 10$ à droite.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p05_q2',
          type: 'mcq',
          prompt: 'Quels produits toxiques ou solides apparaissent spécifiquement lorsque le dioxygène est insuffisant lors de la combustion d’un alcane ?',
          options: [
            'Du carbone (C) et du monoxyde de carbone (CO), en plus de CO₂ et H₂O',
            'Du dichlore gazeux (Cl₂) et du chlorure d’hydrogène (HCl)',
            'Du dioxygène pur et du méthanol liquide',
            'Uniquement de l’eau et du dioxyde de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Une combustion incomplète (défaut d’O₂) produit de l’eau, du CO₂, du carbone noir (C) et du monoxyde de carbone (CO), gaz inodore et mortel.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p05_q3',
          type: 'mcq',
          prompt: 'La combustion complète d’un alcane produit $0{,}08\\text{ mol}$ de $\\mathrm{CO_2}$ et $0{,}10\\text{ mol}$ de $\\mathrm{H_2O}$. Quelle est la formule brute de cet alcane ?',
          options: [
            '$\\mathrm{C_4H_{10}}$',
            '$\\mathrm{C_5H_{12}}$',
            '$\\mathrm{C_3H_8}$',
            '$\\mathrm{C_2H_6}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'De $0{,}08 / n = 0{,}10 / (n+1)$, on obtient $0{,}02n = 0{,}08 \\implies n = 4$, soit le butane (ou 2-méthylpropane) $\\mathrm{C_4H_{10}}$.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p05_q4',
          type: 'mcq',
          prompt: 'Avec $n(\\mathrm{O_2}) = 0{,}13\\text{ mol}$ et un volume molaire $V_m = 22{,}4\\text{ L/mol}$, quel volume de dioxygène a nécessité cette combustion ?',
          options: [
            '2,91 L (environ 2,9 L)',
            '1,79 L',
            '0,58 L',
            '4,48 L',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$V(\\mathrm{O_2}) = n(\\mathrm{O_2}) \\times V_m = 0{,}13 \\times 22{,}4 = 2{,}912\\text{ L} \\approx 2{,}9\\text{ L}$.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p05_q5',
          type: 'mcq',
          prompt: 'Un mélange de $12\\text{ cm}^3$ de propane ($V_1$) et de butane ($V_2$) produit $42\\text{ cm}^3$ de $\\mathrm{CO_2}$ après combustion complète. Quels sont $V_1$ et $V_2$ ?',
          options: [
            '$V_1 = 6\\text{ cm}^3$ et $V_2 = 6\\text{ cm}^3$ (50 % chacun)',
            '$V_1 = 4\\text{ cm}^3$ et $V_2 = 8\\text{ cm}^3$',
            '$V_1 = 8\\text{ cm}^3$ et $V_2 = 4\\text{ cm}^3$',
            '$V_1 = 3\\text{ cm}^3$ et $V_2 = 9\\text{ cm}^3$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$3(12 - V_2) + 4V_2 = 42 \\implies 36 + V_2 = 42 \\implies V_2 = 6\\text{ cm}^3$, d’où $V_1 = 6\\text{ cm}^3$ (50 % et 50 %).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p05_q6',
          type: 'mcq',
          prompt: 'Combien de $\\text{cm}^3$ de dioxygène consomme la combustion complète de $6\\text{ cm}^3$ de butane ($\\mathrm{C_4H_{10}}$) ?',
          options: [
            '$39\\text{ cm}^3$',
            '$30\\text{ cm}^3$',
            '$24\\text{ cm}^3$',
            '$69\\text{ cm}^3$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'D’après $\\mathrm{C_4H_{10} + \\frac{13}{2}O_2 \\to 4CO_2 + 5H_2O}$, $V(\\mathrm{O_2}) = \\frac{13}{2} \\times 6 = 39\\text{ cm}^3$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Chloration photochimique et dérivés chlorés
    // ========================================================================
    {
      id: 'premiere_c_chimie_l02_alcanes_p06',
      order: 6,
      title: 'Réactions de substitution : chloration des alcanes',
      summary:
        'Comprendre la réaction photochimique de substitution du méthane et des alcanes supérieurs, compter les isomères monochlorés et connaître les usages et impacts des dérivés chlorés.',
      conceptExplanation:
        "Puisqu’ils sont saturés, les alcanes ne subissent pas de réactions d’addition mais des **réactions de substitution** : un atome d’hydrogène est remplacé par un autre atome (comme le chlore $\\mathrm{Cl}$).\n\n1. **Chloration du méthane** : elle nécessite impérativement la **lumière** (rayons UV) : c’est une **réaction photochimique** (à l’obscurité, rien ne se passe à froid). Il se forme successivement quatre dérivés chlorés + du chlorure d’hydrogène ($\\mathrm{HCl}$) :\n   - $\\mathrm{CH_4 + Cl_2 \\xrightarrow{\\text{lumière}} CH_3Cl + HCl}$ (**monochlorométhane** : agent réfrigérant)\n   - $\\mathrm{CH_3Cl + Cl_2 \\xrightarrow{\\text{lumière}} CH_2Cl_2 + HCl}$ (**dichlorométhane** : solvant)\n   - $\\mathrm{CH_2Cl_2 + Cl_2 \\xrightarrow{\\text{lumière}} CHCl_3 + HCl}$ (**trichlorométhane / chloroforme** : solvant, synthèse organique)\n   - $\\mathrm{CHCl_3 + Cl_2 \\xrightarrow{\\text{lumière}} CCl_4 + HCl}$ (**tétrachlorométhane** : excellent solvant des corps gras et du brome).\n   *Remarque environnementale* : certains dérivés halogénés (fréons, contenant Cl ou F) sont de puissants gaz à effet de serre et attaquent la couche d’ozone.\n2. **Monochloration d’un alcane supérieur** :\n   - Propane $\\mathrm{C_3H_8}$ → 2 isomères monochlorés (**1-chloropropane** et **2-chloropropane**).\n   - Symétrie maximale : le **2,2-diméthylpropane** $\\mathrm{C(CH_3)_4}$ ne donne qu’**un seul** dérivé monochloré (car ses 4 groupes méthyle sont équivalents).",
      keyRule:
        'La chloration d’un alcane est une réaction photochimique de substitution (impossible à l’obscurité à froid) qui produit toujours un dérivé chloré et HCl.',
      formulas: [
        {
          name: 'Monochloration générale d’un alcane',
          formula: '\\mathrm{C_nH_{2n+2} + Cl_2 \\xrightarrow{\\text{lumière}} C_nH_{2n+1}Cl + HCl}',
        },
      ],
      workedExample: {
        title: 'Identifier un isomère en C₅H₁₂ par monochloration (Exercice 4 p. 8–9)',
        statement:
          'Un alcane A de formule brute $\\mathrm{C_5H_{12}}$ ne donne qu’un seul produit monochloré lors de sa réaction avec le dichlore à la lumière. Identifie A et écris l’équation de sa monochloration.',
        methodSteps: [
          '1) Les trois isomères de C₅H₁₂ sont le pentane (3 dérivés monochlorés), le 2-méthylbutane (4 dérivés) et le 2,2-diméthylpropane.',
          '2) Dans le 2,2-diméthylpropane CH₃-C(CH₃)₂-CH₃, les 12 atomes H appartiennent à 4 groupes -CH₃ totalement équivalents.',
          '3) Remplacer n’importe quel H donne donc toujours le même produit : le 1-chloro-2,2-diméthylpropane.',
          '4) Équation : C(CH₃)₄ + Cl₂ → (lumière) → (CH₃)₃C-CH₂Cl + HCl.',
        ],
        conclusion:
          'L’alcane A est le 2,2-diméthylpropane.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Substitution',
          stepTheme: 'Mécanisme',
          stepTitle: 'Pourquoi parle-t-on de réaction photochimique ?',
          paragraphText:
            'La chloration d’un alcane est une substitution (un atome Cl remplace un atome H en libérant HCl) qui ne démarre qu’en présence de lumière : c’est une réaction photochimique. C’est une différence clé avec les alcènes qui réagissent même à l’obscurité.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p06_q1',
            type: 'mcq',
            prompt: 'Quelle condition expérimentale est indispensable pour amorcer la chloration du méthane à température ambiante ?',
            options: [
              'La présence de lumière (réaction photochimique)',
              'L’obscurité totale à 0 °C',
              'La présence d’acide sulfurique concentré et d’eau',
              'La présence de palladium et de dihydrogène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les alcanes étant saturés et peu réactifs à l’obscurité, la lumière fournit l’énergie nécessaire pour casser $\\mathrm{Cl_2}$ et amorcer la substitution.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: '4 produits',
          stepTheme: 'Chloration du méthane',
          stepTitle: 'Les quatre dérivés chlorés du méthane',
          paragraphText:
            'Chaque substitution successive sur le méthane remplace un H par un Cl et libère $\\mathrm{HCl}$, produisant : $\\mathrm{CH_3Cl}$ (monochlorométhane), $\\mathrm{CH_2Cl_2}$ (dichlorométhane), $\\mathrm{CHCl_3}$ (trichlorométhane ou chloroforme) et $\\mathrm{CCl_4}$ (tétrachlorométhane).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p06_q2',
            type: 'mcq',
            prompt: 'Lors de la réaction $\\mathrm{CH_2Cl_2 + Cl_2 \\xrightarrow{\\text{lumière}} \\dots + HCl}$, quel produit chloré se forme-t-il ?',
            options: [
              'Le trichlorométhane ($\\mathrm{CHCl_3}$), aussi appelé chloroforme',
              'Le monochlorométhane ($\\mathrm{CH_3Cl}$)',
              'Le tétrachlorométhane ($\\mathrm{CCl_4}$)',
              'Le 1,2-dichloroéthane ($\\mathrm{CH_2Cl-CH_2Cl}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un atome H de $\\mathrm{CH_2Cl_2}$ est remplacé par un atome Cl, ce qui donne $\\mathrm{CHCl_3}$ (trichlorométhane ou chloroforme).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Monochloration',
          stepTheme: 'Exercice 3 p. 8',
          stepTitle: 'Isomères obtenus par monochloration du propane',
          paragraphText:
            'Dans le propane $\\mathrm{CH_3-CH_2-CH_3}$, les deux extrémités $-\\mathrm{CH_3}$ sont équivalentes, mais différentes du carbone central $-\\mathrm{CH_2}-$. La monochloration donne donc deux isomères : le 1-chloropropane ($\\mathrm{CH_3-CH_2-CH_2Cl}$) et le 2-chloropropane ($\\mathrm{CH_3-CHCl-CH_3}$).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p06_q3',
            type: 'mcq',
            prompt: 'Combien d’isomères monochlorés obtient-on par action du dichlore (en défaut) sur le propane à la lumière ?',
            options: [
              '2 isomères : le 1-chloropropane et le 2-chloropropane',
              '1 seul isomère : le 1-chloropropane',
              '3 isomères distincts',
              '4 isomères distincts',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La substitution a lieu soit sur un carbone terminal (1-chloropropane), soit sur le carbone central (2-chloropropane).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Symétrie',
          stepTheme: 'Exercice 4 p. 8–9',
          stepTitle: 'Identifier un alcane par son nombre de dérivés monochlorés',
          paragraphText:
            'Plus une molécule d’alcane est symétrique, moins elle donne d’isomères monochlorés. Parmi les trois isomères de $\\mathrm{C_5H_{12}}$, seul le 2,2-diméthylpropane ($\\mathrm{C(CH_3)_4}$) possède 4 groupes $-\\mathrm{CH_3}$ identiques et ne fournit donc qu’un seul produit monochloré.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p06_q4',
            type: 'mcq',
            prompt: 'Quel isomère de $\\mathrm{C_5H_{12}}$ ne forme qu’un seul composé organique lors de sa monochloration photochimique ?',
            options: [
              'Le 2,2-diméthylpropane',
              'Le pentane linéaire',
              'Le 2-méthylbutane',
              'Le méthylcyclobutane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans le 2,2-diméthylpropane, tous les 12 atomes d’hydrogène sont rigoureusement équivalents : la monochloration mène à un unique produit.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Applications',
          stepTheme: 'Intérêt des dérivés chlorés',
          stepTitle: 'Usages courants et impact environnemental des dérivés halogénés',
          paragraphText:
            'Le monochlorométhane sert d’agent réfrigérant ; le dichlorométhane et le tétrachlorométhane ($\\mathrm{CCl_4}$) sont d’excellents solvants (le chloroforme $\\mathrm{CHCl_3}$ était jadis anesthésique). Toutefois, certains dérivés contenant Cl ou F (fréons) sont des gaz à effet de serre et attaquent la couche d’ozone.',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p06_q5',
            type: 'mcq',
            prompt: 'Parmi les quatre dérivés chlorés du méthane, lequel était autrefois employé comme anesthésique général et sert aujourd’hui de solvant et d’intermédiaire de synthèse ?',
            options: [
              'Le trichlorométhane ou chloroforme ($\\mathrm{CHCl_3}$)',
              'Le monochlorométhane ($\\mathrm{CH_3Cl}$)',
              'Le chlorure d’hydrogène ($\\mathrm{HCl}$)',
              'Le dichlorométhane ($\\mathrm{CH_2Cl_2}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le trichlorométhane ($\\mathrm{CHCl_3}$), appelé couramment chloroforme, fut autrefois utilisé comme anesthésique général.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Équation-bilan',
          stepTitle: 'Ne jamais oublier le dégagement de HCl !',
          paragraphText:
            'Dans une équation de substitution par le dichlore ($\\mathrm{Cl_2}$), un seul atome de chlore entre sur l’alcane tandis que l’autre emporte l’hydrogène chassé sous forme de chlorure d’hydrogène ($\\mathrm{HCl}$). Oublier $+\\mathrm{HCl}$ rend l’équation fausse (contrairement à l’addition sur un alcène).',
          exercise: {
            id: 'premiere_c_chimie_l02_alcanes_p06_q6',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan correctement écrite de la monochloration du butane ?',
            options: [
              '$\\mathrm{C_4H_{10} + Cl_2 \\xrightarrow{\\text{lumière}} C_4H_9Cl + HCl}$',
              '$\\mathrm{C_4H_{10} + Cl_2 \\longrightarrow C_4H_{10}Cl_2}$',
              '$\\mathrm{C_4H_{10} + Cl_2 \\longrightarrow C_4H_8Cl_2 + H_2}$',
              '$\\mathrm{C_4H_{10} + HCl \\longrightarrow C_4H_{11}Cl}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C’est une substitution (un Cl remplace un H) : il se forme obligatoirement le dérivé monochloré $\\mathrm{C_4H_9Cl}$ et du chlorure d’hydrogène $\\mathrm{HCl}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l02_alcanes_p06_q1',
          type: 'mcq',
          prompt: 'Quelle condition expérimentale est indispensable pour amorcer la chloration du méthane à température ambiante ?',
          options: [
            'La présence de lumière (réaction photochimique)',
            'L’obscurité totale à 0 °C',
            'La présence d’acide sulfurique concentré et d’eau',
            'La présence de palladium et de dihydrogène',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les alcanes étant saturés et peu réactifs à l’obscurité, la lumière fournit l’énergie nécessaire pour casser $\\mathrm{Cl_2}$ et amorcer la substitution.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p06_q2',
          type: 'mcq',
          prompt: 'Lors de la réaction $\\mathrm{CH_2Cl_2 + Cl_2 \\xrightarrow{\\text{lumière}} \\dots + HCl}$, quel produit chloré se forme-t-il ?',
          options: [
            'Le trichlorométhane ($\\mathrm{CHCl_3}$), aussi appelé chloroforme',
            'Le monochlorométhane ($\\mathrm{CH_3Cl}$)',
            'Le tétrachlorométhane ($\\mathrm{CCl_4}$)',
            'Le 1,2-dichloroéthane ($\\mathrm{CH_2Cl-CH_2Cl}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un atome H de $\\mathrm{CH_2Cl_2}$ est remplacé par un atome Cl, ce qui donne $\\mathrm{CHCl_3}$ (trichlorométhane ou chloroforme).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p06_q3',
          type: 'mcq',
          prompt: 'Combien d’isomères monochlorés obtient-on par action du dichlore (en défaut) sur le propane à la lumière ?',
          options: [
            '2 isomères : le 1-chloropropane et le 2-chloropropane',
            '1 seul isomère : le 1-chloropropane',
            '3 isomères distincts',
            '4 isomères distincts',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La substitution a lieu soit sur un carbone terminal (1-chloropropane), soit sur le carbone central (2-chloropropane).',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p06_q4',
          type: 'mcq',
          prompt: 'Quel isomère de $\\mathrm{C_5H_{12}}$ ne forme qu’un seul composé organique lors de sa monochloration photochimique ?',
          options: [
            'Le 2,2-diméthylpropane',
            'Le pentane linéaire',
            'Le 2-méthylbutane',
            'Le méthylcyclobutane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans le 2,2-diméthylpropane, tous les 12 atomes d’hydrogène sont rigoureusement équivalents : la monochloration mène à un unique produit.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p06_q5',
          type: 'mcq',
          prompt: 'Parmi les quatre dérivés chlorés du méthane, lequel était autrefois employé comme anesthésique général et sert aujourd’hui de solvant et d’intermédiaire de synthèse ?',
          options: [
            'Le trichlorométhane ou chloroforme ($\\mathrm{CHCl_3}$)',
            'Le monochlorométhane ($\\mathrm{CH_3Cl}$)',
            'Le chlorure d’hydrogène ($\\mathrm{HCl}$)',
            'Le dichlorométhane ($\\mathrm{CH_2Cl_2}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le trichlorométhane ($\\mathrm{CHCl_3}$), appelé couramment chloroforme, fut autrefois utilisé comme anesthésique général.',
        },
        {
          id: 'premiere_c_chimie_l02_alcanes_p06_q6',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan correctement écrite de la monochloration du butane ?',
          options: [
            '$\\mathrm{C_4H_{10} + Cl_2 \\xrightarrow{\\text{lumière}} C_4H_9Cl + HCl}$',
            '$\\mathrm{C_4H_{10} + Cl_2 \\longrightarrow C_4H_{10}Cl_2}$',
            '$\\mathrm{C_4H_{10} + Cl_2 \\longrightarrow C_4H_8Cl_2 + H_2}$',
            '$\\mathrm{C_4H_{10} + HCl \\longrightarrow C_4H_{11}Cl}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C’est une substitution (un Cl remplace un H) : il se forme obligatoirement le dérivé monochloré $\\mathrm{C_4H_9Cl}$ et du chlorure d’hydrogène $\\mathrm{HCl}$.',
        },
      ],
    },
  ],
};

