import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « 1ères CE - Chimie : Corrosion et protection des métaux » (format v2).
export const CHIMIE_1RE_CD_L11_CORROSION_PROTECTION_METAUX: CurriculumChapter = {
  id: 'premiere_c_chimie_l11_corrosion_protection_metaux',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 11,
  title: 'Leçon 11 : Corrosion et protection des métaux',
  summary:
    'Corrosion chimique et électrochimique (micro-piles fer/cuivre et fer/zinc), méthodes de protection des métaux (passivation, parkérisation, revêtements, galvanoplastie, anode sacrificielle) et aspect quantitatif.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CE - Chimie : CORROSION ET PROTECTION DES METAUX.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Définition et formes de corrosion des métaux
    // ========================================================================
    {
      id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01',
      order: 1,
      title: 'Définition de la corrosion et comportement différentiel des métaux',
      summary:
        'Définir la corrosion, distinguer corrosion chimique (sèche) et corrosion électrochimique (humide), et comparer fer, aluminium/zinc et métaux nobles.',
      conceptExplanation:
        "Une machette oubliée dans un champ humide se couvre de rouille (Situation d’apprentissage p. 1) : le métal subit une **corrosion**.\n\n- **Définition** : la **corrosion** est l’ensemble des actions physico-chimiques par lesquelles un matériau (en particulier un métal ou un alliage) est altéré et détérioré par le milieu qui l’entoure.\n- **Inégalité des métaux face à la corrosion** :\n  - Les **métaux nobles** (or $\\mathrm{Au}$, platine $\\mathrm{Pt}$) possèdent un potentiel standard très élevé et sont pratiquement insensibles à la corrosion.\n  - Certains métaux très réducteurs (**aluminium** $\\mathrm{Al}$, **zinc** $\\mathrm{Zn}$) s’oxydent seulement en surface : ils se recouvrent d’une mince couche d’oxyde **imperméable et adhérente** (alumine, oxyde de zinc) qui protège le cœur du métal.\n  - Sous l’action de l’air humide, le **fer** forme de la **rouille** (oxyde ferrique hydraté). Cette couche étant **poreuse et friable**, elle laisse passer l’eau et le dioxygène : l’attaque continue **en profondeur** jusqu’à la destruction totale de la pièce.\n- **Deux causes principales** :\n  - **Corrosion chimique (ou sèche)** : attaque directe du métal par des liquides ou des gaz (souvent à température élevée, par exemple $600\\,^\\circ\\mathrm{C}$ à $1\\,000\\,^\\circ\\mathrm{C}$ sur les parois de réacteurs ou conduites).\n  - **Corrosion électrochimique (ou humide)** : action d’un film d’eau condensée contenant des gaz et poussières dissous (formant un électrolyte) en présence de deux zones métalliques de potentiels différents qui forment une **pile électrochimique**.",
      keyRule:
        'La rouille du fer est poreuse et n’arrête pas la corrosion, contrairement à la fine couche d’oxyde imperméable qui passive Al et Zn en surface. La corrosion humide fait intervenir un électrolyte et une micro-pile.',
      formulas: [
        {
          name: 'Oxydation anodique du fer lors de la formation de la rouille',
          formula: '\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}',
          note: 'Suivie de l’oxydation en Fe³⁺ et précipitation d’oxyde/hydroxyde ferrique hydraté (rouille poreuse)',
        },
      ],
      workedExample: {
        title: 'Pourquoi l’aluminium résiste-t-il mieux que le fer à l’air humide ?',
        statement:
          'Bien que l’aluminium ($E^\\circ(\\mathrm{Al^{3+}/Al}) = -1{,}66\\,\\mathrm{V}$) soit un réducteur plus fort que le fer ($E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$), une fenêtre en aluminium ne se détruit pas à l’air humide contrairement à une pièce en fer. Explique pourquoi.',
        methodSteps: [
          '1) Au contact de l’air, l’aluminium s’oxyde très vite en surface en formant de l’alumine Al₂O₃.',
          '2) Cette couche d’alumine est mince, continue et imperméable : elle isole le métal sous-jacent de l’air et de l’eau.',
          '3) Au contraire, la rouille formée sur le fer est poreuse : elle laisse pénétrer l’eau et le dioxygène, ce qui détruit le fer en profondeur.',
        ],
        conclusion:
          'L’aluminium est protégé par sa couche d’oxyde imperméable (autopassivation), tandis que la rouille du fer est poreuse.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Notion de corrosion',
          stepTitle: 'Qu’appelle-t-on corrosion d’un métal ?',
          paragraphText:
            'La corrosion désigne l’ensemble des phénomènes physico-chimiques par lesquels un métal ou un alliage tend à s’oxyder et à se détériorer sous l’action du milieu ambiant (air, gaz, humidité, solutions).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01_q1',
            type: 'mcq',
            prompt: 'Quelle définition correspond exactement à la corrosion d’un métal ?',
            options: [
              'L’ensemble des actions physico-chimiques qui produisent la détérioration du métal par son milieu',
              'La fusion d’un métal dans un haut-fourneau industriel',
              'Le refroidissement rapide d’un alliage dans l’eau froide',
              'La dissolution physique d’un sel ionique dans l’eau pure',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La corrosion est la détérioration (par oxydation chimique ou électrochimique) des matériaux métalliques au contact de leur environnement.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Rouille vs Oxyde',
          stepTheme: 'Rôle de la couche formée',
          stepTitle: 'Pourquoi la rouille détruit-elle le fer en profondeur ?',
          paragraphText:
            'Contrairement à la couche d’oxyde imperméable formée sur l’aluminium ou le zinc, la rouille qui se forme sur le fer est poreuse et n’empêche pas l’attaque de progresser vers l’intérieur.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01_q2',
            type: 'mcq',
            prompt: 'Pourquoi la corrosion du fer par l’air humide se poursuit-elle jusqu’à la destruction complète de la pièce ?',
            options: [
              'Parce que la rouille formée est poreuse et ne protège pas le métal sous-jacent',
              'Parce que la rouille forme un vernis étanche qui accélère le chauffage',
              'Parce que le fer est un métal noble comme l’or',
              'Parce que le fer fond spontanément au contact de l’eau',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La rouille est une couche poreuse qui laisse passer l’eau et l’oxygène de l’air, permettant à l’oxydation de continuer en profondeur.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Métaux nobles',
          stepTheme: 'Insensibilité',
          stepTitle: 'Quels métaux sont pratiquement insensibles à la corrosion ?',
          paragraphText:
            'Les métaux nobles comme l’or (Au) et le platine (Pt) ont des potentiels redox très élevés : ils ne sont pratiquement pas oxydés par l’air ni par l’eau.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01_q3',
            type: 'mcq',
            prompt: 'Parmi ces métaux, lesquels sont des métaux nobles pratiquement insensibles à la corrosion naturelle ?',
            options: [
              'L’or et le platine',
              'Le fer et le magnésium',
              'Le sodium et le potassium',
              'Le zinc et l’aluminium seuls',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’or (Au) et le platine (Pt) sont des métaux nobles très peu réducteurs, pratiquement inaltérables par le milieu ambiant.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Autopassivation',
          stepTheme: 'Aluminium et zinc',
          stepTitle: 'Comment l’aluminium et le zinc résistent-ils à l’air ?',
          paragraphText:
            'L’aluminium et le zinc s’oxydent superficiellement au contact de l’air, mais la mince couche d’oxyde produite est imperméable et stoppe l’attaque en profondeur.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01_q4',
            type: 'mcq',
            prompt: 'Comment s’explique la bonne résistance à l’air ambiant de l’aluminium et du zinc ?',
            options: [
              'Ils se couvrent en surface d’une mince couche d’oxyde imperméable qui bloque la corrosion en profondeur',
              'Ils ne réagissent jamais avec le dioxygène de l’air',
              'Ils possèdent un potentiel redox supérieur à celui de l’or',
              'Ils forment une couche de rouille poreuse très épaisse',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Al et Zn forment rapidement une pellicule d’oxyde dense et imperméable qui protège le cœur du métal.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Deux causes',
          stepTheme: 'Chimique vs Électrochimique',
          stepTitle: 'Distinguer corrosion chimique et corrosion électrochimique',
          paragraphText:
            'La corrosion chimique résulte de l’action directe des gaz ou liquides sur le métal (souvent à haute température), tandis que la corrosion électrochimique met en jeu une micro-pile en présence d’un électrolyte (humidité + gaz/sels dissous).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01_q5',
            type: 'mcq',
            prompt: 'À quoi est due la corrosion chimique (ou corrosion sèche) d’un récipient métallique ?',
            options: [
              'À l’action directe des liquides ou des gaz sur les parois du métal, sans formation de micro-pile en solution aqueuse',
              'À l’immersion d’une pièce dans un bain d’acide nitrique pour la passiver',
              'À la formation d’une pellicule imperméable de peinture à l’huile',
              'À la connexion volontaire de la pièce à une anode de magnésium',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La corrosion chimique correspond à l’attaque chimique directe du métal par des gaz ou des liquides (souvent à température élevée).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Facteurs',
          stepTheme: 'Conditions favorisantes',
          stepTitle: 'Quels facteurs déclenchent la corrosion atmosphérique ?',
          paragraphText:
            'Dans l’atmosphère, la condensation de vapeur d’eau à la surface froide du métal dissout gaz (O₂, CO₂, SO₂…) et sels/poussières pour former un électrolyte conducteur.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p01_q6',
            type: 'mcq',
            prompt: 'Quelles conditions favorisent le démarrage de la corrosion atmosphérique (humide) d’une pièce en fer ?',
            options: [
              'La présence d’humidité condensée chargée de gaz et de poussières ou sels dissous, formant un électrolyte',
              'Un vide poussé totalement sec et dépourvu de dioxygène',
              'Un revêtement étanche de vernis ou d’émail sans fissure',
              'L’alliage avec un fort pourcentage de chrome et de nickel sans humidité',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’humidité condensée dissout les gaz et impuretés de l’air pour former un film électrolytique permettant la circulation des électrons et des ions.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Mécanisme de la corrosion électrochimique (micro-piles)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02',
      order: 2,
      title: 'Mécanisme électrochimique : rôle des micro-piles et des inclusions',
      summary:
        'Expliquer la formation d’une micro-pile à la surface d’un métal (inclusions de Cu ou de Zn dans le fer, soudures, aération différentielle).',
      conceptExplanation:
        "La **corrosion électrochimique** est la principale cause de dégradation du fer et des aciers (ouvrages de construction, carrosseries, coques). Elle se produit lorsqu’une surface métallique est recouverte d’un film d’eau ionique (vapeur d’eau condensée + gaz/poussières dissous) et comporte deux zones de potentiels redox différents (impureté/inclusion métallique, soudure non homogène, contact avec un autre métal ou différence d’oxygénation d’une goutte d’eau).\n\nIl se forme alors une **pile électrochimique** (micro-pile) en court-circuit : **à la borne négative (anode), c’est le métal le plus réducteur (potentiel $E^\\circ$ le plus bas) qui s’oxyde et se dissout**.\n\n- **Premier exemple — Inclusion d’un métal moins réducteur que le fer (le cuivre $\\mathrm{Cu}$)** :\n  Couples : $\\mathrm{Cu^{2+}/Cu}$ ($+0{,}34\\,\\mathrm{V}$) et $\\mathrm{Fe^{2+}/Fe}$ ($-0{,}44\\,\\mathrm{V}$). Le fer est **plus réducteur** que le cuivre : il constitue la borne négative de la micro-pile et subit l’oxydation :\n  $$\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$$\n  Il y a dissolution du fer à la surface de contact : **le fer se corrode**.\n- **Deuxième exemple — Inclusion d’un métal plus réducteur que le fer (le zinc $\\mathrm{Zn}$)** :\n  Couples : $\\mathrm{Fe^{2+}/Fe}$ ($-0{,}44\\,\\mathrm{V}$) et $\\mathrm{Zn^{2+}/Zn}$ ($-0{,}76\\,\\mathrm{V}$). Le zinc est **plus réducteur** que le fer : c’est donc le zinc qui s’oxyde à la borne négative :\n  $$\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$$\n  **Le fer est protégé** à la surface de contact : il ne subit pas de corrosion tant qu’il reste du zinc.",
      keyRule:
        'Dans une micro-pile métal 1 / métal 2 en milieu humide, le métal au potentiel E° le plus bas (le plus réducteur) joue le rôle d’anode (−) et se corrode, protégeant l’autre métal.',
      visualSchema: {
        type: 'geometry_svg',
        title: 'Micro-piles électrochimiques : Fer/Cuivre vs Fer/Zinc',
        svgContent: `<svg viewBox="0 0 360 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison entre une inclusion de cuivre qui corrode le fer et une inclusion de zinc qui protège le fer">
  <rect x="6" y="6" width="348" height="173" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="14" y="14" width="160" height="157" rx="8" fill="#FFFFFF" stroke="#FCA5A5"/>
  <text x="94" y="31" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#B91C1C">1. Inclusion Cu : Fer corrodé</text>
  <path d="M 38 92 Q 94 56 150 92 Z" fill="#BAE6FD" opacity="0.85" stroke="#0284C7"/>
  <text x="94" y="79" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0369A1">Électrolyte (eau + gaz)</text>
  <rect x="26" y="92" width="136" height="44" rx="3" fill="#94A3B8" stroke="#475569"/>
  <rect x="82" y="92" width="24" height="18" rx="2" fill="#D97706" stroke="#92400E"/>
  <text x="94" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF">Cu</text>
  <text x="52" y="118" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#FFFFFF">Fer (−)</text>
  <text x="136" y="118" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#FFFFFF">Fe²⁺ + 2e⁻</text>
  <text x="94" y="150" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#B91C1C">Fe → Fe²⁺ + 2 e⁻</text>
  <text x="94" y="163" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#475569">Fe plus réducteur que Cu</text>

  <rect x="186" y="14" width="160" height="157" rx="8" fill="#FFFFFF" stroke="#86EFAC"/>
  <text x="266" y="31" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803D">2. Inclusion Zn : Fer protégé</text>
  <path d="M 210 92 Q 266 56 322 92 Z" fill="#BAE6FD" opacity="0.85" stroke="#0284C7"/>
  <text x="266" y="79" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0369A1">Électrolyte (eau + gaz)</text>
  <rect x="198" y="92" width="136" height="44" rx="3" fill="#94A3B8" stroke="#475569"/>
  <rect x="254" y="92" width="24" height="18" rx="2" fill="#64748B" stroke="#1E293B"/>
  <text x="266" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF">Zn</text>
  <text x="226" y="118" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#FFFFFF">Fer (+)</text>
  <text x="308" y="118" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#FFFFFF">protégé</text>
  <text x="266" y="150" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#15803D">Zn → Zn²⁺ + 2 e⁻</text>
  <text x="266" y="163" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#475569">Zn plus réducteur que Fe</text>
</svg>`,
      },
      workedExample: {
        title: 'Prévoir quel métal subit la corrosion dans une micro-pile (Exercice 1)',
        statement:
          'On met une pièce en fer en contact avec : (a) une impureté de cuivre ($E^\\circ = +0{,}34\\,\\mathrm{V}$), puis (b) une impureté de zinc ($E^\\circ = -0{,}76\\,\\mathrm{V}$), sachant que $E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$. Quel métal se corrode dans chaque cas ?',
        methodSteps: [
          '1) Cas (a) Fe/Cu : E°(Fe²⁺/Fe) = −0,44 V < E°(Cu²⁺/Cu) = +0,34 V. Le fer est plus réducteur que le cuivre : c’est le fer qui s’oxyde (Fe → Fe²⁺ + 2 e⁻) et se corrode.',
          '2) Cas (b) Fe/Zn : E°(Zn²⁺/Zn) = −0,76 V < E°(Fe²⁺/Fe) = −0,44 V. Le zinc est plus réducteur que le fer : c’est le zinc qui s’oxyde (Zn → Zn²⁺ + 2 e⁻) et protège le fer.',
        ],
        conclusion:
          'Une impureté moins réductrice que le fer favorise sa corrosion ; une impureté plus réductrice que le fer le protège.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Micro-pile',
          stepTheme: 'Définition',
          stepTitle: 'Qu’est-ce qu’une micro-pile de corrosion ?',
          paragraphText:
            'C’est une minuscule pile électrochimique formée à la surface d’un métal en présence d’un film électrolytique lorsqu’il existe une hétérogénéité (inclusion d’un autre métal, soudure, différence d’oxygénation).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02_q1',
            type: 'mcq',
            prompt: 'Qu’appelle-t-on « micro-pile » en étude de la corrosion ?',
            options: [
              'Une pile électrochimique locale formée à la surface du métal en présence d’un électrolyte et responsable de la corrosion',
              'Un générateur industriel utilisé pour alimenter une cuve d’électrolyse',
              'Une pile alcaline sèche utilisée dans les appareils portatifs',
              'Une couche de peinture imperméable appliquée sur l’acier',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les hétérogénéités à la surface d’un métal humidifié forment des micro-piles électrochimiques où le métal de plus bas potentiel se dissout.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Règle d’or',
          stepTheme: 'Borne négative',
          stepTitle: 'Lequel des deux métaux s’oxyde dans une micro-pile ?',
          paragraphText:
            'Dans la micro-pile constituée de deux métaux différents, la borne négative (anode) correspond toujours au métal le plus réducteur (potentiel standard E° le plus bas), qui subit l’oxydation.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02_q2',
            type: 'mcq',
            prompt: 'Lorsque le fer est en contact avec une petite inclusion métallique M en atmosphère humide, dans quel cas la corrosion du fer est-elle accélérée ?',
            options: [
              'Lorsque le métal M est moins réducteur que le fer ($E^\\circ(M^{n+}/M) > E^\\circ(\\mathrm{Fe^{2+}/Fe})$)',
              'Lorsque le métal M est plus réducteur que le fer ($E^\\circ(M^{n+}/M) < E^\\circ(\\mathrm{Fe^{2+}/Fe})$)',
              'Uniquement lorsque l’inclusion est en zinc ou en magnésium',
              'Uniquement dans une atmosphère totalement sèche sans eau',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Si M est moins réducteur que Fe (ex. cuivre, nickel, étain), c’est le fer qui est le plus réducteur : il devient l’anode (−) et se corrode.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Fer + Cuivre',
          stepTheme: 'Cas de la corrosion',
          stepTitle: 'Interpréter le contact fer–cuivre en milieu humide',
          paragraphText:
            'Avec Cu²⁺/Cu (+0,34 V) et Fe²⁺/Fe (−0,44 V), le fer est plus réducteur que le cuivre : le fer forme la borne négative et passe en solution sous forme Fe²⁺.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02_q3',
            type: 'mcq',
            prompt: 'Une canalisation en fer porte un raccord en cuivre en milieu humide. Que se passe-t-il au voisinage du contact ?',
            options: [
              'Le fer constitue la borne négative, s’oxyde ($\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$) et se corrode rapidement',
              'Le cuivre s’oxyde et protège complètement le fer',
              'Aucun courant ne circule entre le fer et le cuivre',
              'Le fer se recouvre spontanément de cuivre pur sans se dissoudre',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E°(Fe²⁺/Fe) = −0,44 V < E°(Cu²⁺/Cu) = +0,34 V : le fer, plus réducteur, s’oxyde et subit une corrosion accélérée.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Fer + Zinc',
          stepTheme: 'Cas de protection',
          stepTitle: 'Interpréter le contact fer–zinc en milieu humide',
          paragraphText:
            'Avec Zn²⁺/Zn (−0,76 V) et Fe²⁺/Fe (−0,44 V), c’est le zinc (plus réducteur) qui joue le rôle d’anode négative et s’oxyde ; le fer est protégé.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02_q4',
            type: 'mcq',
            prompt: 'Lorsqu’une pièce en fer présente une inclusion de zinc en milieu humide, quelle équation traduit le phénomène qui protège le fer ?',
            options: [
              '$\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$',
              '$\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$',
              '$\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$',
              '$\\mathrm{Fe^{2+} + 2\\,e^- \\longrightarrow Fe}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le zinc, plus réducteur que le fer, s’oxyde à la place du fer selon Zn → Zn²⁺ + 2 e⁻, protégeant ainsi le fer.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Autres causes',
          stepTheme: 'Hétérogénéités diverses',
          stepTitle: 'D’où peuvent provenir les micro-piles sur une même pièce ?',
          paragraphText:
            'Une micro-pile ne nécessite pas forcément deux métaux différents : une soudure non homogène ou une différence de concentration en dioxygène entre le centre et le bord d’une goutte d’eau suffit.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02_q5',
            type: 'mcq',
            prompt: 'Parmi ces situations, laquelle peut engendrer des micro-piles électrochimiques à la surface d’une pièce métallique ?',
            options: [
              'Des soudures non homogènes, des impuretés ou des zones inégalement aérées sous une goutte d’eau',
              'Un séchage total de la pièce sous vide absolu',
              'Un polissage parfait de l’or pur dans l’air sec',
              'La mise sous tension continue au pôle négatif avec électrolyte absent',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La documentation rappelle que les micro-piles proviennent de couplages de métaux différents, d’impuretés, de soudures non homogènes ou de milieux inhomogènes (intérieur/bord d’une goutte d’eau).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'Zinc vs Nickel sur acier',
          stepTitle: 'Comparer un dépôt de zinc et un dépôt de nickel sur l’acier (Ex. 3)',
          paragraphText:
            'Avec $E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\,\\mathrm{V}$, $E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$ et $E^\\circ(\\mathrm{Ni^{2+}/Ni}) = -0{,}25\\,\\mathrm{V}$, si le revêtement est rayé jusqu’à l’acier, le zinc protège l’acier alors que le nickel provoque sa corrosion !',
          konanTip: 'Attention à une inversion fréquente dans certains corrigés : en cas de rayure, Ni (−0,25 V) est MOINS réducteur que Fe (−0,44 V), donc c’est Fe qui rouille ; avec Zn (−0,76 V), c’est Zn qui s’oxyde et Fe reste protégé !',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p02_q6',
            type: 'mcq',
            prompt: 'On raye jusqu’au cœur en acier ($E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$) deux objets exposés à l’air humide : l’un est recouvert de zinc ($-0{,}76\\,\\mathrm{V}$) et l’autre de nickel ($-0{,}25\\,\\mathrm{V}$). Que prévoit l’électrochimie au niveau de la rayure ?',
            options: [
              'L’acier recouvert de zinc est protégé ; l’acier recouvert de nickel subit la corrosion',
              'L’acier recouvert de nickel est protégé même rayé ; celui au zinc se corrode',
              'Les deux aciers se corrodent à la même vitesse qu’un acier nu',
              'Aucun des deux aciers ne peut former de micro-pile',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le zinc (−0,76 V) est plus réducteur que le fer (−0,44 V) : il s’oxyde à la place du fer. Le nickel (−0,25 V) est moins réducteur que le fer : en cas de fissure, le fer devient l’anode et se corrode.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Aciers inoxydables, passivation et revêtements non métalliques
    // ========================================================================
    {
      id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03',
      order: 3,
      title: 'Alliages inoxydables, modification chimique (passivation, parkérisation) et revêtements',
      summary:
        'Connaître les méthodes passives de lutte contre la corrosion : aciers spéciaux, passivation nitrique, parkérisation phosphorique et couches isolantes.',
      conceptExplanation:
        "Pour éviter ou ralentir la corrosion, on choisit la solution technique et économique la mieux adaptée à l’usage :\n\n- **Aciers spéciaux et aciers inoxydables** : l’addition au fer de **chrome, nickel, titane ou molybdène** donne des aciers très résistants à la corrosion (ex. ustensiles chirurgicaux, agroalimentaires), mais **coûteux**. (Attention : certains aciers inoxydables restent attaquables en présence d’acide fort comme $\\mathrm{HCl}$, voir Exercice 5).\n- **Modification chimique de la surface à protéger** : on plonge la pièce dans un bain approprié pour former une **pellicule imperméable** adhérente :\n  - **Passivation à l’acide nitrique** ($\\mathrm{HNO_3}$ fumant sur le fer) : formation d’une mince couche d’oxyde protectrice (ou par anodisation électrolytique pour l’aluminium).\n  - **Parkérisation** : procédé de protection des pièces métalliques par **phosphatation superficielle de l’acier** dans un bain d’**acide phosphorique** ($\\mathrm{H_3PO_4}$), très utilisé pour les **carrosseries d’automobiles** avant peinture.\n- **Recouvrement de la surface par une couche isolante** : application de **peintures** (dont peinture au minium/à l’huile), **vernis, laques, matières plastiques ou émail** afin d’isoler physiquement le métal de l’atmosphère oxydante et de l’humidité.",
      keyRule:
        'On peut protéger un métal en modifiant sa masse (aciers inoxydables au Cr/Ni), en modifiant sa surface (passivation nitrique, parkérisation par H₃PO₄) ou en l’isolant (peinture, vernis, plastique, émail).',
      workedExample: {
        title: 'Choisir un revêtement résistant à l’acide chlorhydrique (Exercice 5)',
        statement:
          'Une pièce assimilée au couple $\\mathrm{Fe^{2+}/Fe}$ ($-0{,}44\\,\\mathrm{V}$) est trempée dans une solution diluée d’acide chlorhydrique ($\\mathrm{H_3O^+/H_2}$, $0{,}00\\,\\mathrm{V}$). Parmi le zinc ($-0{,}76\\,\\mathrm{V}$) et le cuivre ($+0{,}34\\,\\mathrm{V}$), quel métal choisir pour un revêtement étanche ?',
        methodSteps: [
          '1) Les ions H₃O⁺ de HCl (E° = 0,00 V) oxydent spontanément tout métal de potentiel E° < 0,00 V : le fer (−0,44 V) et le zinc (−0,76 V) sont tous deux attaqués par l’acide.',
          '2) En revanche, E°(Cu²⁺/Cu) = +0,34 V > 0,00 V : le cuivre n’est pas oxydé par les ions H₃O⁺.',
          '3) Un revêtement étanche et sans défaut en cuivre protège donc la pièce dans HCl dilué (attention : s’il était percé, le fer sous-jacent serait attaqué).',
        ],
        conclusion:
          'Il faut choisir le cuivre car il n’est pas oxydé par les ions H₃O⁺ de l’acide chlorhydrique.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Alliages',
          stepTheme: 'Aciers inoxydables',
          stepTitle: 'Comment fabrique-t-on un acier inoxydable ?',
          paragraphText:
            'On ajoute au fer des métaux tels que le chrome, le nickel, le titane ou le molybdène. L’alliage obtenu résiste remarquablement bien à la corrosion mais revient plus cher.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03_q1',
            type: 'mcq',
            prompt: 'Quels éléments d’addition utilise-t-on principalement pour rendre un acier inoxydable ?',
            options: [
              'Chrome, nickel, titane ou molybdène',
              'Sodium, potassium ou calcium',
              'Soufre et phosphore en grande quantité',
              'Mercure et plomb liquides',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’addition de chrome, nickel, titane ou molybdène permet d’obtenir des aciers spéciaux et inoxydables résistants à la corrosion.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Parkérisation',
          stepTheme: 'Phosphatation',
          stepTitle: 'Qu’est-ce que la parkérisation d’une pièce en acier ?',
          paragraphText:
            'La parkérisation est un procédé de protection par phosphatation superficielle de l’acier à l’aide d’acide phosphorique (H₃PO₄), formant une couche imperméable qui ralentit la corrosion.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03_q2',
            type: 'mcq',
            prompt: 'En quoi consiste la parkérisation utilisée notamment sur les carrosseries automobiles ?',
            options: [
              'Une phosphatation superficielle de l’acier par l’acide phosphorique pour former une pellicule protectrice',
              'Une immersion dans de l’étain fondu à haute température',
              'L’ajout d’une anode de magnésium vissée sous la voiture',
              'Le dépôt d’une couche d’émail vitrifié au four',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La parkérisation est une modification chimique de surface par phosphatation avec l’acide phosphorique destinée à ralentir la corrosion de l’acier.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Passivation',
          stepTheme: 'Acide nitrique',
          stepTitle: 'Comment passive-t-on le fer chimiquement ?',
          paragraphText:
            'En plongeant le fer dans un bain d’acide nitrique concentré (fumant), il se recouvre d’une très fine pellicule d’oxyde imperméable qui bloque toute attaque ultérieure : c’est la passivation.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03_q3',
            type: 'mcq',
            prompt: 'Quel réactif chimique utilise-t-on au laboratoire ou dans l’industrie pour réaliser la passivation chimique du fer ?',
            options: [
              'L’acide nitrique concentré ($\\mathrm{HNO_3}$)',
              'L’acide chlorhydrique dilué ($\\mathrm{HCl}$)',
              'Une solution de sulfate de cuivre(II)',
              'De l’eau salée bouillante',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’acide nitrique concentré forme à la surface du fer une pellicule d’oxyde imperméable (passivité du fer à l’acide nitrique).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Isolement',
          stepTheme: 'Revêtements non métalliques',
          stepTitle: 'Quel est le rôle des peintures, vernis et plastiques ?',
          paragraphText:
            'Les peintures, vernis, laques, matières plastiques et émaux protègent le métal en formant une barrière physique étanche qui l’isole du dioxygène et de l’humidité.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03_q4',
            type: 'mcq',
            prompt: 'Quel est le mode d’action d’une couche imperméable de peinture à l’huile ou de vernis appliquée sur une grille en fer ?',
            options: [
              'Elle isole la surface métallique de l’atmosphère oxydante et de l’humidité',
              'Elle s’oxyde à la place du fer par effet galvanique',
              'Elle transforme le fer en alliage inoxydable au chrome',
              'Elle réduit la rouille déjà formée en fer pur',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une couche de peinture, vernis, plastique ou émail empêche le contact entre le métal, l’eau et le dioxygène atmosphérique.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Milieu acide',
          stepTheme: 'Choix pour HCl (Ex. 5)',
          stepTitle: 'Quel métal protège le fer contre l’acide chlorhydrique ?',
          paragraphText:
            'Dans HCl ($E^\\circ(\\mathrm{H_3O^+/H_2}) = 0{,}00\\,\\mathrm{V}$), le cuivre ($+0{,}34\\,\\mathrm{V}$) n’est pas attaqué par $\\mathrm{H_3O^+}$, contrairement au zinc ($-0{,}76\\,\\mathrm{V}$) et au fer ($-0{,}44\\,\\mathrm{V}$).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03_q5',
            type: 'mcq',
            prompt: 'Pour protéger de façon étanche une pièce en acier trempée dans une solution d’acide chlorhydrique ($E^\\circ(\\mathrm{H_3O^+/H_2}) = 0\\,\\mathrm{V}$), quel métal convient entre $\\mathrm{Zn}$ ($-0{,}76\\,\\mathrm{V}$) et $\\mathrm{Cu}$ ($+0{,}34\\,\\mathrm{V}$) ?',
            options: [
              'Le cuivre, car il n’est pas oxydé par les ions $\\mathrm{H_3O^+}$ de l’acide chlorhydrique',
              'Le zinc, car il est plus réducteur que les ions $\\mathrm{H_3O^+}$',
              'Aucun des deux car le cuivre réagit violemment avec HCl dilué',
              'Le zinc, car son potentiel est positif',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E°(Cu²⁺/Cu) = +0,34 V > 0,00 V : le cuivre résiste aux ions H₃O⁺ de HCl dilué, alors que le zinc (−0,76 V) serait rapidement dissous par l’acide.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège de revêtement',
          stepTheme: 'Conséquence d’un défaut',
          stepTitle: 'Que se passe-t-il si un revêtement isolant ou de cuivre est rayé ?',
          paragraphText:
            'Une peinture ou un métal moins réducteur que le fer (cuivre, étain, nickel) ne protège l’acier que s’il reste parfaitement continu : la moindre fissure expose le fer et rétablit la corrosion.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p03_q6',
            type: 'mcq',
            prompt: 'Que se passe-t-il si une fine couche protectrice de cuivre recouvrant une pièce en acier trempée dans un électrolyte acide vient à être percée ?',
            options: [
              'Il se forme une micro-pile où l’acier (moins noble) se corrode rapidement',
              'Le cuivre se dissout en priorité pour boucher le trou',
              'La pièce reste indéfiniment protégée sans aucune attaque',
              'Les ions H₃O⁺ redeviennent des molécules d’oxygène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dès que l’acier (−0,44 V) et le cuivre (+0,34 V) sont tous deux au contact de l’électrolyte, le fer devient l’anode négative et se corrode.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Revêtements métalliques : immersion (galvanisation) et électrolyse
    // ========================================================================
    {
      id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04',
      order: 4,
      title: 'Immersion dans un métal fondu et recouvrement électrolytique',
      summary:
        'Distinguer fer galvanisé (zinc) et fer blanc (étain), et comprendre le recouvrement protecteur par électrolyse à anode soluble (zincage).',
      conceptExplanation:
        "On recouvre fréquemment les pièces en acier d’un autre métal par deux grandes techniques :\n\n- **Immersion de la pièce dans un métal fondu** :\n  - **Fer galvanisé** : acier plongé dans du **zinc fondu** ($E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\,\\mathrm{V} < E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$). Double avantage : le zinc isole le fer **et**, même si la couche est rayée, c’est le zinc (plus réducteur) qui s’oxyde en priorité en formant une micro-pile protectrice.\n  - **Fer blanc** (boîtes de conserve) : acier recouvert d’**étain fondu** ($E^\\circ(\\mathrm{Sn^{2+}/Sn}) = -0{,}14\\,\\mathrm{V}$). L’étain est **moins réducteur** que le fer : il protège tant que le revêtement est parfaitement intact (et résiste aux acides alimentaires), mais s’il est rayé à l’air humide, le fer rouille !\n- **Recouvrement électrolytique (ex. zincage)** :\n  Le dépôt protecteur est obtenu par **électrolyse à anode soluble** dans une solution d’ions $\\mathrm{Zn^{2+}}$ :\n  - À l’**anode** (plaque de zinc pur, pôle $+$), le zinc s’oxyde :\n    $$\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$$\n  - À la **cathode** (pièce en acier à protéger, pôle $-$), les ions $\\mathrm{Zn^{2+}}$ se réduisent et forment un dépôt régulier de zinc sur la pièce :\n    $$\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$$",
      keyRule:
        'Fer galvanisé = fer + zinc (Zn protège même en cas de rayure) ; fer blanc = fer + étain. En zincage électrolytique à anode soluble : anode (+) en Zn (oxydation) et cathode (−) = pièce à protéger (réduction).',
      formulas: [
        {
          name: 'Zincage par électrolyse à anode soluble',
          formula: '\\text{Anode : } \\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-} \\qquad \\text{Cathode : } \\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}',
          note: 'La concentration en ions Zn²⁺ dans le bain reste constante',
        },
      ],
      workedExample: {
        title: 'Comparer la protection du fer galvanisé et du fer blanc',
        statement:
          'Une tôle en **fer galvanisé** (recouverte de zinc, $E^\\circ = -0{,}76\\,\\mathrm{V}$) et une boîte en **fer blanc** (recouverte d’étain, $E^\\circ = -0{,}14\\,\\mathrm{V}$) sont toutes deux rayées jusqu’au fer ($E^\\circ = -0{,}44\\,\\mathrm{V}$) et exposées à la pluie. Laquelle résiste le mieux à la rouille ?',
        methodSteps: [
          '1) Sur le fer galvanisé, Zn (−0,76 V) est plus réducteur que Fe (−0,44 V) : dans la micro-pile formée au niveau de la rayure, Zn s’oxyde et protège le fer.',
          '2) Sur le fer blanc rayé, Sn (−0,14 V) est moins réducteur que Fe (−0,44 V) : le fer devient l’anode (−) et rouille rapidement au niveau de la rayure.',
        ],
        conclusion:
          'Le fer galvanisé continue de protéger le fer même après une rayure, contrairement au fer blanc.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Vocabulaire',
          stepTheme: 'Fer galvanisé vs fer blanc',
          stepTitle: 'Qu’appelle-t-on fer galvanisé et fer blanc ?',
          paragraphText:
            'En immergeant l’acier dans un bain de métal fondu, on obtient du fer galvanisé s’il est recouvert de zinc, ou du fer blanc s’il est recouvert d’étain.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04_q1',
            type: 'mcq',
            prompt: 'De quels métaux sont recouverts respectivement le « fer galvanisé » et le « fer blanc » obtenus par immersion ?',
            options: [
              'Zinc pour le fer galvanisé ; étain pour le fer blanc',
              'Étain pour le fer galvanisé ; zinc pour le fer blanc',
              'Cuivre pour le fer galvanisé ; nickel pour le fer blanc',
              'Aluminium pour le fer galvanisé ; plomb pour le fer blanc',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La galvanisation recouvre le fer de zinc, tandis que l’étamage (fer blanc) le recouvre d’étain.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Rayure',
          stepTheme: 'Différence clé Zn vs Sn',
          stepTitle: 'Pourquoi le fer blanc rouille-t-il dès qu’il est rayé ?',
          paragraphText:
            'Avec E°(Fe²⁺/Fe) = −0,44 V et E°(Sn²⁺/Sn) = −0,14 V, l’étain est moins réducteur que le fer. Si le revêtement d’étain est fissuré, le fer devient l’anode et rouille plus vite.',
          konanTip: 'L’étain protège par barrière étanche uniquement ; le zinc protège à la fois par barrière ET par protection électrochimique si le revêtement est rayé.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04_q2',
            type: 'mcq',
            prompt: 'Pourquoi une boîte en fer blanc ($\\mathrm{Fe}$ recouvert de $\\mathrm{Sn}$, $E^\\circ = -0{,}14\\,\\mathrm{V}$) se met-elle à rouiller rapidement si elle est rayée à l’humidité, contrairement à une tôle galvanisée ($\\mathrm{Zn}$, $E^\\circ = -0{,}76\\,\\mathrm{V}$) ?',
            options: [
              'Parce que l’étain est moins réducteur que le fer, qui devient donc l’anode et s’oxyde dans la rayure',
              'Parce que l’étain est plus réducteur que le zinc',
              'Parce que le zinc ne réagit jamais avec l’eau ni l’air',
              'Parce que la rayure transforme l’étain en oxyde ferrique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'E°(Fe²⁺/Fe) < E°(Sn²⁺/Sn) : dans une micro-pile Fe/Sn, le fer est oxydé en priorité. Dans Fe/Zn, c’est le zinc (−0,76 V) qui s’oxyde.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Zincage',
          stepTheme: 'Anode soluble',
          stepTitle: 'Identifier anode et cathode lors du zincage électrolytique',
          paragraphText:
            'Dans le recouvrement électrolytique à anode soluble (zincage), la pièce en fer à recouvrir constitue la cathode (pôle −) et une plaque de zinc pur constitue l’anode soluble (pôle +).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04_q3',
            type: 'mcq',
            prompt: 'Lors du zincage électrolytique à anode soluble d’une pièce en acier, comment branche-t-on les électrodes ?',
            options: [
              'Une barre de zinc à l’anode ($+$) et la pièce en acier à la cathode ($-$)',
              'La pièce en acier à l’anode ($+$) et une barre de zinc à la cathode ($-$)',
              'Deux électrodes en fer dans de l’eau distillée pure',
              'Une barre de cuivre à l’anode et du zinc à la cathode',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le zinc s’oxyde à l’anode (Zn → Zn²⁺ + 2 e⁻) et vient se déposer par réduction (Zn²⁺ + 2 e⁻ → Zn) sur la pièce en acier placée à la cathode.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Équations',
          stepTheme: 'Bilan aux électrodes',
          stepTitle: 'Écrire les demi-équations du zincage électrolytique',
          paragraphText:
            'À l’anode : $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$ (oxydation). À la cathode : $\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$ (réduction et dépôt).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04_q4',
            type: 'mcq',
            prompt: 'Quelle réaction se produit à la cathode lors du zincage électrolytique d’une pièce métallique ?',
            options: [
              '$\\mathrm{Zn^{2+} + 2\\,e^- \\longrightarrow Zn}$',
              '$\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$',
              '$\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$',
              '$2\\,\\mathrm{H_2O \\longrightarrow O_2 + 4\\,H^+ + 4\\,e^-}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À la cathode se produit toujours une réduction : les ions Zn²⁺ sont réduits en zinc métallique qui se dépose sur la pièce.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Concentration',
          stepTheme: 'Conservation des ions',
          stepTitle: 'Comment évolue la concentration en ions Zn²⁺ dans le bain ?',
          paragraphText:
            'Chaque ion Zn²⁺ réduit à la cathode est immédiatement remplacé par un ion Zn²⁺ libéré par l’anode de zinc : la concentration du bain en Zn²⁺ reste constante.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04_q5',
            type: 'mcq',
            prompt: 'Au cours du zincage par électrolyse à anode soluble en zinc, comment évolue la quantité d’ions $\\mathrm{Zn^{2+}}$ dans la solution ?',
            options: [
              'Elle reste constante, car chaque ion consommé à la cathode est remplacé à l’anode',
              'Elle diminue jusqu’à devenir nulle très rapidement',
              'Elle double toutes les minutes',
              'Les ions $\\mathrm{Zn^{2+}}$ sont remplacés par des ions $\\mathrm{Fe^{2+}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Autant d’atomes de zinc s’oxydent en Zn²⁺ à l’anode que d’ions Zn²⁺ se déposent en Zn à la cathode : [Zn²⁺] reste constante.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Synthèse',
          stepTheme: 'Méthode industrielle',
          stepTitle: 'Comparer les techniques de protection par dépôt',
          paragraphText:
            'L’immersion dans un métal fondu (galvanisation) et l’électrolyse à anode soluble (zincage) permettent toutes deux d’appliquer une couche régulière de zinc sur des pièces d’acier.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p04_q6',
            type: 'mcq',
            prompt: 'Quelle affirmation compare justement la galvanisation à chaud et le recouvrement électrolytique par du zinc ?',
            options: [
              'Les deux procédés recouvrent l’acier de zinc : le premier par immersion dans du zinc fondu, le second par réduction cathodique d’ions $\\mathrm{Zn^{2+}}$',
              'La galvanisation utilise du cuivre fondu et le zincage utilise du plomb',
              'Seule la galvanisation dépose un métal sur l’acier ; le zincage dépose du plastique',
              'Dans les deux cas, la pièce en acier doit être dissoute à l’anode',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La galvanisation à chaud plonge la pièce dans du zinc liquide, tandis que le zincage électrolytique réduit Zn²⁺ sur la pièce placée à la cathode.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Protection cathodique (anode sacrificielle et courant imposé)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05',
      order: 5,
      title: 'Protection cathodique : anode sacrificielle et courant imposé',
      summary:
        'Comprendre le principe de la protection cathodique (coque de navire, canalisation enterrée, pylône) et savoir choisir une anode sacrificielle adaptée.',
      conceptExplanation:
        "Pour protéger de grandes structures en acier impossibles à recouvrir durablement de peinture seule (**coque de navire, canalisation enterrée, rail, pylône, réservoir**), on utilise la **protection cathodique** :\n\n- **Principe de l’anode sacrificielle (protection galvanique)** :\n  On relie électriquement la pièce en fer à protéger (qui devient la **cathode**) à un bloc d’un **métal plus réducteur que le fer**, appelé **anode sacrificielle** (généralement en **zinc**, en **magnésium** ou parfois en **aluminium**).\n  - Dans la pile ainsi formée, c’est l’anode sacrificielle (potentiel $E^\\circ$ plus bas que $E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$) qui s’oxyde et se consomme à la place du fer : on la remplace périodiquement.\n  - Exemples du cours : blocs de zinc vissés sur la **coque en acier d’un navire** (comme sur le chantier naval CARENA du port d’Abidjan, Exercice 4) ; bloc de magnésium ou de zinc relié par un câble à une **canalisation enterrée**.\n- **Protection cathodique par courant imposé** :\n  On relie la structure en fer à protéger à la **borne négative ($-$)** d’un générateur de courant continu (elle est ainsi maintenue à l’état de **cathode**), tandis que la borne positive ($+$) est reliée à une **anode auxiliaire** enterrée que l’on change périodiquement.",
      keyRule:
        'Protection cathodique : on force le fer à être cathode. Par anode sacrificielle, on le relie à un métal plus réducteur (E° < −0,44 V : Zn, Mg ou Al), qui est oxydé (« sacrifié ») à la place du fer.',
      workedExample: {
        title: 'Choisir les métaux pour protéger la coque d’un navire (Exercice 4)',
        statement:
          'Sur le chantier de la CARENA au port d’Abidjan, on veut protéger la coque en acier ($E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$) d’un bateau par anode sacrificielle. Données : $E^\\circ(\\mathrm{Zn^{2+}/Zn}) = -0{,}76\\,\\mathrm{V}$, $E^\\circ(\\mathrm{Pb^{2+}/Pb}) = -0{,}13\\,\\mathrm{V}$, $E^\\circ(\\mathrm{Mg^{2+}/Mg}) = -2{,}37\\,\\mathrm{V}$. Quel(s) métal(ux) peut-on utiliser et pourquoi la plaque perd-elle $20\\,\\mathrm{kg}$ durant un voyage ?',
        methodSteps: [
          '1) Critère électrochimique : il faut un métal plus réducteur que le fer (E° < −0,44 V). Le zinc (−0,76 V) et le magnésium (−2,37 V) conviennent donc tous les deux (le plomb à −0,13 V provoquerait au contraire la corrosion de la coque !). En eau de mer, on utilise couramment le zinc.',
          '2) Perte de masse de 20 kg : au cours de la traversée, l’anode de zinc s’oxyde en ions Zn²⁺ qui passent dans l’eau de mer (Zn → Zn²⁺ + 2 e⁻).',
          '3) Nom d’anode sacrificielle : le bloc de zinc se consomme (« se sacrifie ») par oxydation pour empêcher la coque en acier de rouiller.',
        ],
        conclusion:
          'Le zinc (et le magnésium) sont plus réducteurs que le fer ; l’anode de zinc s’oxyde pour protéger la coque, d’où son nom d’anode sacrificielle.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Principe',
          stepTheme: 'Anode sacrificielle',
          stepTitle: 'Comment fonctionne une protection par anode sacrificielle ?',
          paragraphText:
            'On relie la pièce en fer à un métal plus réducteur (Zn, Mg ou Al). Ce dernier devient l’anode de la pile formée, s’oxyde lentement et maintient le fer à l’état de cathode protégée.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05_q1',
            type: 'mcq',
            prompt: 'Dans une protection cathodique par anode sacrificielle, quel rôle joue la pièce en fer à protéger ?',
            options: [
              'Elle joue le rôle de cathode, où il ne se produit aucune oxydation du fer',
              'Elle joue le rôle d’anode et se dissout plus vite',
              'Elle est isolée dans un bain d’acide nitrique sans contact métallique',
              'Elle sert d’électrolyte solide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’anode sacrificielle (plus réductrice) subit l’oxydation ; la pièce en fer reçoit les électrons et constitue la cathode protégée.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Choix du métal',
          stepTheme: 'Critère de potentiel E°',
          stepTitle: 'Quel métal peut servir d’anode sacrificielle pour le fer ?',
          paragraphText:
            'Pour protéger le fer ($E^\\circ = -0{,}44\\,\\mathrm{V}$), l’anode doit avoir un potentiel standard inférieur à $-0{,}44\\,\\mathrm{V}$ : le zinc ($-0{,}76\\,\\mathrm{V}$) et le magnésium ($-2{,}37\\,\\mathrm{V}$) conviennent, contrairement au plomb ($-0{,}13\\,\\mathrm{V}$).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05_q2',
            type: 'mcq',
            prompt: 'Parmi le zinc ($-0{,}76\\,\\mathrm{V}$), le magnésium ($-2{,}37\\,\\mathrm{V}$) et le plomb ($-0{,}13\\,\\mathrm{V}$), quels métaux peuvent protéger par anode sacrificielle une coque en acier ($E^\\circ(\\mathrm{Fe^{2+}/Fe}) = -0{,}44\\,\\mathrm{V}$) ?',
            options: [
              'Le zinc et le magnésium (tous deux plus réducteurs que le fer)',
              'Le plomb uniquement',
              'Le zinc et le plomb',
              'Le plomb et le magnésium uniquement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un métal protecteur doit avoir E° < −0,44 V : c’est le cas du zinc (−0,76 V) et du magnésium (−2,37 V). Le plomb (−0,13 V) accélérerait la corrosion de la coque.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Port d’Abidjan',
          stepTheme: 'Perte de masse',
          stepTitle: 'Pourquoi la masse de l’anode de zinc diminue-t-elle ?',
          paragraphText:
            'La perte de masse d’une plaque de zinc fixée sur une coque s’explique par son oxydation continue : les atomes Zn se transforment en ions Zn²⁺ qui se dissolvent dans l’eau de mer.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05_q3',
            type: 'mcq',
            prompt: 'Après un voyage en mer, une plaque de zinc fixée à la coque d’un navire a perdu $20\\,\\mathrm{kg}$. Quelle est la cause de cette perte de masse ?',
            options: [
              'Le zinc s’est oxydé en ions $\\mathrm{Zn^{2+}}$ solubles pour protéger la coque en acier',
              'La plaque de zinc a réagi avec le sel pour devenir de l’acier',
              'L’eau de mer a réduit le zinc en fer métallique',
              'La coque a absorbé mécaniquement la plaque de zinc',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’anode de zinc s’oxyde (Zn → Zn²⁺ + 2 e⁻) : les ions Zn²⁺ passent dans l’eau de mer, ce qui explique la diminution de masse.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Justification',
          stepTheme: 'Terme sacrificiel',
          stepTitle: 'Pourquoi parle-t-on d’anode « sacrificielle » ?',
          paragraphText:
            'On dit que l’anode est « sacrificielle » parce que l’on accepte qu’elle soit oxydée et progressivement détruite afin de préserver intact l’ouvrage en fer beaucoup plus coûteux.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05_q4',
            type: 'mcq',
            prompt: 'Pourquoi qualifie-t-on la plaque de zinc fixée sur une canalisation ou une coque d’« anode sacrificielle » ?',
            options: [
              'Parce qu’elle est volontairement oxydée et consommée à la place du fer à protéger, puis remplacée périodiquement',
              'Parce qu’elle sert uniquement de lest pour équilibrer le navire',
              'Parce qu’elle empêche tout passage d’électrons dans le métal',
              'Parce qu’elle transforme l’eau de mer en eau douce',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Elle se « sacrifie » par oxydation anodique afin d’épargner la structure en acier et doit être remplacée quand elle est usée.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Courant imposé',
          stepTheme: 'Branchement sur générateur',
          stepTitle: 'Comment protéger une conduite enterrée avec un générateur ?',
          paragraphText:
            'Dans la protection cathodique par courant imposé, on relie la conduite en acier à la borne négative (−) du générateur et une anode auxiliaire sacrifiée dans le sol à la borne positive (+).',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05_q5',
            type: 'mcq',
            prompt: 'Pour protéger une canalisation enterrée par courant imposé (à l’aide d’une source continue extérieure), à quelle borne du générateur faut-il relier la canalisation ?',
            options: [
              'À la borne négative ($-$), pour en faire une cathode',
              'À la borne positive ($+$), pour en faire une anode',
              'Aux deux bornes en même temps pour créer un court-circuit',
              'Uniquement à un tuyau en cuivre voisin sans générateur',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La structure à protéger est reliée à la borne négative (−) afin de recevoir des électrons (cathode), et la borne (+) à une anode auxiliaire.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège d’examen',
          stepTheme: 'Branchement erroné',
          stepTitle: 'Conséquence d’une erreur de métal ou de polarité',
          paragraphText:
            'Fixer un bloc de cuivre ou de plomb (moins réducteurs que le fer) sur une coque en acier ne la protège pas : au contraire, c’est la coque en acier qui s’oxyde encore plus vite !',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p05_q6',
            type: 'mcq',
            prompt: 'Un marin remplace par erreur l’anode en zinc d’une coque en acier par un bloc de plomb ($E^\\circ = -0{,}13\\,\\mathrm{V}$). Que se produit-il en mer ?',
            options: [
              'La coque en acier ($-0{,}44\\,\\mathrm{V}$) devient l’anode et se corrode rapidement',
              'Le bloc de plomb se dissout en protégeant la coque encore mieux que le zinc',
              'Les deux métaux s’oxydent exactement à la même vitesse',
              'Aucun transfert d’électrons n’est possible dans l’eau salée',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Comme E°(Fe²⁺/Fe) = −0,44 V < E°(Pb²⁺/Pb) = −0,13 V, le fer est plus réducteur que le plomb : la coque se corrode au lieu d’être protégée !',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Bilan quantitatif de la corrosion et du faraday
    // ========================================================================
    {
      id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06',
      order: 6,
      title: 'Calculs quantitatifs en protection cathodique : le faraday',
      summary:
        'Utiliser 1 F = N·e = 96 500 C pour calculer la quantité de matière et la masse d’anode sacrificielle consommée pendant une durée donnée.',
      conceptExplanation:
        "La documentation du cours rappelle comment relier la **durée de vie d’une anode sacrificielle** au **courant de protection** grâce au **faraday** :\n\n- **Charge d’une mole d’électrons** : une mole contient $\\mathcal{N} = 6{,}02 \\times 10^{23}$ électrons de charge élémentaire $e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$, soit environ :\n  $$Q = \\mathcal{N} \\cdot e \\approx 96\\,500\\,\\mathrm{C} \\implies 1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$$\n- **Application à une anode sacrificielle en zinc** ($\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$, $M(\\mathrm{Zn}) = 65{,}4\\,\\mathrm{g\\cdot mol^{-1}}$) :\n  Si le courant de corrosion/protection a une intensité moyenne $I$ pendant la durée $\\Delta t$, la quantité d’électricité débitée est $Q = I \\cdot \\Delta t$.\n  Le nombre de moles d’électrons cédées vaut $n(e^-) = \\frac{Q}{F} = \\frac{I \\cdot \\Delta t}{F}$, et comme chaque atome de zinc libère $2$ électrons :\n  $$n(\\mathrm{Zn}) = \\frac{n(e^-)}{2} = \\frac{I \\cdot \\Delta t}{2\\,F} \\implies m(\\mathrm{Zn}) = \\frac{M(\\mathrm{Zn}) \\cdot I \\cdot \\Delta t}{2\\,F}$$\n  À l’inverse, connaître la masse perdue (par exemple $m = 20\\,\\mathrm{kg}$ de zinc sur la coque d’un navire dans l’Exercice 4) permet de calculer la quantité d’électrons transférée ($n(e^-) = 2\\,m/M(\\mathrm{Zn})$) et l’intensité moyenne correspondante.",
      keyRule:
        'Pour une anode M → Mᶻ⁺ + z e⁻ débitant un courant I pendant Δt : Q = I·Δt, n(e⁻) = Q/F (1 F = 96 500 C/mol) et n(M) = n(e⁻)/z, d’où m(M) = M(M)·I·Δt / (z·F).',
      formulas: [
        {
          name: 'Masse d’anode consommée en protection cathodique',
          formula: 'm(M) = \\frac{M(M) \\cdot I \\cdot \\Delta t}{z \\cdot F} \\quad \\text{avec } 1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}',
          note: 'Pour Zn → Zn²⁺ + 2 e⁻, z = 2 ; pour Al → Al³⁺ + 3 e⁻, z = 3',
        },
      ],
      workedExample: {
        title: 'Calculer la masse de zinc consommée par un courant de protection',
        statement:
          'Une anode sacrificielle en zinc ($M(\\mathrm{Zn}) = 65{,}4\\,\\mathrm{g\\cdot mol^{-1}}$) débite un courant moyen $I = 0{,}50\\,\\mathrm{A}$ pendant $\\Delta t = 1\\,930\\,\\mathrm{s}$ ($1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$). Calcule la masse de zinc oxydée.',
        methodSteps: [
          '1) Quantité d’électricité : Q = I · Δt = 0,50 × 1 930 = 965 C.',
          '2) Quantité d’électrons cédés : n(e⁻) = Q / F = 965 / 96 500 = 0,010 mol.',
          '3) D’après Zn → Zn²⁺ + 2 e⁻ (z = 2) : n(Zn) = n(e⁻) / 2 = 0,0050 mol.',
          '4) Masse consommée : m(Zn) = 0,0050 × 65,4 = 0,327 g.',
        ],
        conclusion:
          'L’anode de zinc perd une masse m(Zn) = 0,327 g pendant cette durée.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Constante 1 F',
          stepTheme: 'Calcul du faraday',
          stepTitle: 'Retrouver la valeur du faraday à partir de N et e',
          paragraphText:
            'La charge d’une mole d’électrons vaut $Q = \\mathcal{N} \\cdot e$ avec $\\mathcal{N} \\approx 6{,}02 \\times 10^{23}\\,\\mathrm{mol^{-1}}$ et $e \\approx 1{,}60 \\times 10^{-19}\\,\\mathrm{C}$, retenue usuellement à $1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06_q1',
            type: 'mcq',
            prompt: 'Quelle relation permet de retrouver la valeur du faraday ($1\\,\\mathrm{F} \\approx 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$) ?',
            options: [
              '$1\\,\\mathrm{F} = \\mathcal{N} \\cdot e$',
              '$1\\,\\mathrm{F} = \\mathcal{N} / e$',
              '$1\\,\\mathrm{F} = I / \\Delta t$',
              '$1\\,\\mathrm{F} = M \\cdot e$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une mole d’électrons compte N entités portant chacune la charge élémentaire e, donc Q = N · e ≈ 96 500 C.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Anode en zinc',
          stepTheme: 'Nombre d’électrons échangés',
          stepTitle: 'Relier n(Zn) et n(e⁻) lors de l’oxydation du zinc',
          paragraphText:
            'D’après la demi-équation $\\mathrm{Zn \\longrightarrow Zn^{2+} + 2\\,e^-}$, chaque mole de zinc oxydée libère $2\\,\\mathrm{mol}$ d’électrons : $n(\\mathrm{Zn}) = n(e^-) / 2$.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06_q2',
            type: 'mcq',
            prompt: 'Lorsqu’une anode sacrificielle de zinc s’oxyde en cédant $0{,}40\\,\\mathrm{mol}$ d’électrons, quelle quantité de matière de zinc a été consommée ?',
            options: [
              '$0{,}20\\,\\mathrm{mol}$',
              '$0{,}40\\,\\mathrm{mol}$',
              '$0{,}80\\,\\mathrm{mol}$',
              '$0{,}10\\,\\mathrm{mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'D’après Zn → Zn²⁺ + 2 e⁻, n(Zn) = n(e⁻) / 2 = 0,40 / 2 = 0,20 mol.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Calcul de masse',
          stepTheme: 'Anode Zn sous 0,50 A',
          stepTitle: 'Calculer la masse de zinc consommée en protection cathodique',
          paragraphText:
            'En combinant $Q = I \\cdot \\Delta t$, $n(e^-) = Q / F$ et $n(\\mathrm{Zn}) = n(e^-) / 2$, on calcule directement la masse oxydée $m(\\mathrm{Zn}) = n(\\mathrm{Zn}) \\cdot M(\\mathrm{Zn})$.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06_q3',
            type: 'mcq',
            prompt: 'Une anode sacrificielle de zinc ($M(\\mathrm{Zn}) = 65{,}4\\,\\mathrm{g\\cdot mol^{-1}}$) débite $I = 0{,}50\\,\\mathrm{A}$ pendant $1\\,930\\,\\mathrm{s}$ ($1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$). Quelle masse de zinc s’est oxydée ?',
            options: [
              '$0{,}327\\,\\mathrm{g}$',
              '$0{,}654\\,\\mathrm{g}$',
              '$1{,}308\\,\\mathrm{g}$',
              '$0{,}164\\,\\mathrm{g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Q = 0,50 × 1 930 = 965 C ; n(e⁻) = 965 / 96 500 = 0,010 mol ; n(Zn) = 0,0050 mol ; m(Zn) = 0,0050 × 65,4 = 0,327 g.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Anode en Al',
          stepTheme: 'Cas trivalent (z = 3)',
          stepTitle: 'Calculer pour une anode sacrificielle en aluminium (z = 3)',
          paragraphText:
            'Avec l’aluminium ($\\mathrm{Al \\longrightarrow Al^{3+} + 3\\,e^-}$), $1\\,\\mathrm{mol}$ d’aluminium cède $3\\,\\mathrm{mol}$ d’électrons, soit une très grande quantité d’électricité par gramme.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06_q4',
            type: 'mcq',
            prompt: 'Une anode sacrificielle en aluminium ($M(\\mathrm{Al}) = 27\\,\\mathrm{g\\cdot mol^{-1}}$) perd $5{,}4\\,\\mathrm{g}$ par oxydation en ions $\\mathrm{Al^{3+}}$. Quelle quantité d’électricité $Q$ a-t-elle fournie ($1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$) ?',
            options: [
              '$57\\,900\\,\\mathrm{C}$',
              '$19\\,300\\,\\mathrm{C}$',
              '$38\\,600\\,\\mathrm{C}$',
              '$9\\,650\\,\\mathrm{C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(Al) = 5,4 / 27 = 0,20 mol. D’après Al → Al³⁺ + 3 e⁻, n(e⁻) = 3 × 0,20 = 0,60 mol, soit Q = 0,60 × 96 500 = 57 900 C.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Perte du fer',
          stepTheme: 'Intensité moyenne de corrosion',
          stepTitle: 'Évaluer la durée correspondant à une perte de fer',
          paragraphText:
            'De la même façon, une corrosion du fer ($\\mathrm{Fe \\longrightarrow Fe^{2+} + 2\\,e^-}$, $M(\\mathrm{Fe}) = 55{,}8\\,\\mathrm{g\\cdot mol^{-1}}$) de courant moyen $I$ permet de calculer la masse perdue au bout du temps $\\Delta t$.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06_q5',
            type: 'mcq',
            prompt: 'Une tôle de fer se corrode sous forme d’ions $\\mathrm{Fe^{2+}}$ ($M(\\mathrm{Fe}) = 55{,}8\\,\\mathrm{g\\cdot mol^{-1}}$) avec une charge totale échangée $Q = 19\\,300\\,\\mathrm{C}$ ($1\\,\\mathrm{F} = 96\\,500\\,\\mathrm{C\\cdot mol^{-1}}$). Quelle masse de fer a été détruite ?',
            options: [
              '$5{,}58\\,\\mathrm{g}$',
              '$11{,}16\\,\\mathrm{g}$',
              '$2{,}79\\,\\mathrm{g}$',
              '$22{,}32\\,\\mathrm{g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'n(e⁻) = 19 300 / 96 500 = 0,20 mol ; d’après Fe → Fe²⁺ + 2 e⁻, n(Fe) = 0,20 / 2 = 0,10 mol, donc m(Fe) = 0,10 × 55,8 = 5,58 g.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Bilan de révision',
          stepTheme: 'Choix de la méthode optimale',
          stepTitle: 'Associer chaque ouvrage métallique à sa méthode de protection',
          paragraphText:
            'Selon l’usage et le coût : carrosserie automobile → parkérisation + peinture ; boîte de conserve → fer blanc ; tôle de toiture → acier galvanisé ; coque de navire ou tuyau enterré → protection cathodique.',
          exercise: {
            id: 'premiere_c_chimie_l11_corrosion_protection_metaux_p06_q6',
            type: 'mcq',
            prompt: 'Quelle association « ouvrage en acier — méthode usuelle de protection anticorrosion » est exacte ?',
            options: [
              'Carrosserie automobile : parkérisation par $\\mathrm{H_3PO_4}$ puis peinture ; coque de navire : anodes sacrificielles de zinc',
              'Carrosserie automobile : immersion dans du mercure liquide ; coque de navire : plaque de cuivre',
              'Tôle extérieure : dépôt de sodium ; canalisation enterrée : acide chlorhydrique',
              'Boîte de conserve : alliage au platine massif uniquement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La parkérisation à l’acide phosphorique prépare les carrosseries avant peinture, et les coques de navires utilisent des anodes sacrificielles en zinc.',
          },
        },
      ],
    },
  ]),
};
