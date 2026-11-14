import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CD - Chimie Organique - Pétrole et gaz naturels » (format v2).
export const CHIMIE_1RE_CD_L01_PETROLE_GAZ_NATURELS: CurriculumChapter = {
  id: 'premiere_c_chimie_l01_petrole_gaz_naturels',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 1,
  title: 'Leçon 1 : Pétrole et gaz naturels',
  summary:
    'Origine sédimentaire et composition du pétrole et des gaz naturels, raffinage (distillation fractionnée, craquage, reformage et indice d’octane), utilité des dérivés et impacts environnementaux.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CD - Chimie Organique : Pétrole et gaz naturels.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Origine et composition du pétrole et des gaz naturels
    // ========================================================================
    {
      id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01',
      order: 1,
      title: 'Origine et composition du pétrole et des gaz naturels',
      summary:
        'Comprendre la formation lente à partir de débris organiques enfouis en anaérobiose et identifier les constituants chimiques du pétrole brut et des gaz naturels.',
      conceptExplanation:
        "Le **pétrole** et les **gaz naturels** sont des hydrocarbures fossiles formés au cours de millions d’années par la décomposition lente de matières organiques animales et végétales (plancton, débris marins et lacustres).\n\n- **Formation** : ces débris se déposent au fond des océans, mers et lacs pour former des sédiments organiques. Enfouis progressivement lors des plissements de l’écorce terrestre, **à l’abri du dioxygène de l’air** et sous l’action de bactéries anaérobies, de la pression et de la température, ils se transforment en hydrocarbures liquides (pétrole) ou gazeux (gaz naturels).\n- **Composition du pétrole brut** : mélange complexe essentiellement constitué d’**hydrocarbures saturés (alcanes)**, souvent d’hydrocarbures aromatiques, mais rarement d’hydrocarbures insaturés (alcènes, alcynes). Il contient aussi des composés soufrés, oxygénés et azotés.\n- **Composition des gaz naturels** : ils sont constitués à environ **90 % de méthane** ($\\mathrm{CH_4}$), accompagné d’éthane, de propane et de butane.",
      keyRule:
        'Pétrole et gaz naturels naissent sans oxygène (anaérobiose) sur des millions d’années : le pétrole est riche en alcanes et aromatiques, tandis que le gaz naturel contient environ 90 % de méthane.',
      formulas: [
        {
          name: 'Constituant majoritaire des gaz naturels',
          formula: '\\mathrm{CH_4} \\approx 90\\%',
          note: 'Méthane, le plus léger des alcanes',
        },
        {
          name: 'Nature des hydrocarbures du pétrole brut',
          formula: '\\text{Alcanes (majoritaires)} + \\text{Aromatiques}',
          note: 'Très peu d’hydrocarbures insaturés à l’état brut',
        },
      ],
      workedExample: {
        title: 'Expliquer la formation et la nature chimique d’un gisement',
        statement:
          'Lors d’un exposé à la SIR, on explique pourquoi un gisement profond renferme à la fois du pétrole liquide et du gaz naturel riche en méthane.',
        methodSteps: [
          '1) Des débris organiques animaux et végétaux se sont accumulés au fond d’anciennes mers et ont formé des sédiments organiques.',
          '2) Recouverts par d’autres couches lors des mouvements géologiques, ils ont subi une décomposition bactérienne très lente à l’abri de l’oxygène.',
          '3) La fraction gazeuse migrée au sommet du piège géologique est composée à 90 % de méthane (CH₄) ; la fraction liquide (pétrole brut) associe surtout des alcanes et des hydrocarbures aromatiques.',
        ],
        conclusion:
          'Le pétrole brut est une ressource fossile non renouvelable composée d’un mélange complexe d’hydrocarbures inutilisable en l’état.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Comparaison pétrole brut et gaz naturels',
        tableData: {
          headers: ['Ressource fossile', 'État physique', 'Constituants dominants', 'Impuretés / autres'],
          rows: [
            ['Pétrole brut', 'Liquide visqueux', 'Hydrocarbures saturés (alcanes) + aromatiques', 'Composés soufrés, oxygénés, azotés'],
            ['Gaz naturels', 'Gazeux', 'Méthane CH₄ (~90 %) + alcanes légers', 'Traces de CO₂, N₂, H₂S'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Origine',
          stepTheme: 'Genèse des hydrocarbures',
          stepTitle: 'Matière première des gisements fossiles',
          paragraphText:
            'Le pétrole et les gaz naturels proviennent de la décomposition lente de matières organiques animales et végétales déposées au fond des océans, des mers et des lacs.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q1',
            type: 'mcq',
            prompt: 'De quoi sont principalement issus le pétrole brut et les gaz naturels ?',
            options: [
              'De la décomposition lente de matières organiques animales et végétales enfouies',
              'De la fusion directe de roches volcaniques basaltiques',
              'De la condensation atmosphérique du dioxyde de carbone polaire',
              'De la dissolution du calcaire marin dans l’eau de pluie',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les sédiments organiques issus de restes animaux et végétaux se transforment très lentement en pétrole et gaz naturels après enfouissement.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Condition clé',
          stepTheme: 'Transformation biologique',
          stepTitle: 'Rôle de l’anaérobiose et des bactéries',
          paragraphText:
            'Pour que les sédiments organiques se transforment en hydrocarbures au lieu de se minéraliser totalement en CO₂, leur décomposition par les bactéries doit impérativement se produire à l’abri du dioxygène de l’air après enfouissement.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q2',
            type: 'mcq',
            prompt: 'Dans quelle condition la transformation des sédiments organiques en hydrocarbures s’effectue-t-elle ?',
            options: [
              'À l’abri du dioxygène de l’air et sous l’action de bactéries',
              'En présence d’un excès permanent de dioxygène atmosphérique',
              'Uniquement sous l’effet du rayonnement ultraviolet à la surface du sol',
              'En quelques semaines seulement sans enfouissement sédimentaire',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’enfouissement protège la matière organique de l’oxygène ; les bactéries anaérobies, la pression et la chaleur la transforment alors lentement en hydrocarbures.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Composition',
          stepTheme: 'Pétrole brut',
          stepTitle: 'Familles chimiques présentes dans le pétrole',
          paragraphText:
            'Le pétrole brut est un mélange complexe composé essentiellement d’hydrocarbures saturés (alcanes), souvent accompagnés d’hydrocarbures aromatiques, mais très rarement d’hydrocarbures insaturés. On y trouve aussi des composés soufrés, oxygénés et azotés.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q3',
            type: 'mcq',
            prompt: 'Quelle affirmation décrit correctement la composition du pétrole brut ?',
            options: [
              'C’est un mélange riche en alcanes et souvent en aromatiques, mais pauvre en hydrocarbures insaturés',
              'C’est un corps pur constitué uniquement d’éthylène liquide',
              'Il est composé à 90 % de dihydrogène et d’acide sulfurique',
              'Il ne renferme aucun composé soufré, oxygéné ni azoté',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pétrole brut contient surtout des alcanes et des hydrocarbures aromatiques (plus des impuretés soufrées, oxygénées et azotées), mais rarement des alcènes ou alcynes.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Gaz naturel',
          stepTheme: 'Composition gazeuse',
          stepTitle: 'Proportion dominante de méthane',
          paragraphText:
            'Les gaz naturels extraits des gisements souterrains ont une composition dominée à environ 90 % par le méthane ($\\mathrm{CH_4}$), complété par de faibles proportions d’alcanes légers.',
          formula: { name: 'Gaz naturel', formula: '\\%(\\mathrm{CH_4}) \\approx 90\\%' },
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q4',
            type: 'mcq',
            prompt: 'Quel gaz constitue à environ 90 % les gaz naturels ?',
            options: [
              'Le méthane (CH₄)',
              'L’acétylène (C₂H₂)',
              'Le dioxyde de soufre (SO₂)',
              'Le dichlore (Cl₂)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les gaz naturels sont constitués à 90 % de méthane, le plus simple des alcanes.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Temps géologique',
          stepTheme: 'Ressource fossile',
          stepTitle: 'Pourquoi le pétrole est-il non renouvelable ?',
          paragraphText:
            'La formation d’un gisement pétrolier exige plusieurs millions d’années. Comme l’extraction et la consommation humaine actuelles sont infiniment plus rapides que cette genèse géologique, le pétrole est qualifié d’énergie fossile non renouvelable.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q5',
            type: 'mcq',
            prompt: 'Pourquoi qualifie-t-on le pétrole de ressource non renouvelable ?',
            options: [
              'Parce qu’il met plusieurs millions d’années à se former et que sa consommation dépasse le rythme de formation',
              'Parce qu’il disparaît dès qu’il entre en contact avec l’eau liquide',
              'Parce qu’on peut le régénérer en laboratoire en moins d’une heure',
              'Parce qu’il ne contient aucun atome de carbone réutilisable',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La durée géologique de formation (plusieurs millions d’années) rend les réserves épuisables à l’échelle humaine.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Utilisation directe',
          stepTitle: 'Le pétrole brut à la sortie du puits',
          paragraphText:
            'Attention : bien qu’il contienne de nombreux hydrocarbures précieux, le pétrole brut est inutilisable directement tel qu’il sort du puits dans les moteurs ou l’industrie. Il doit subir un ensemble de traitements appelé raffinage.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q6',
            type: 'mcq',
            prompt: 'Peut-on utiliser le pétrole brut tel qu’il sort du gisement directement comme carburant automobile ?',
            options: [
              'Non, c’est un mélange complexe inutilisable à l’état brut qui doit être raffiné au préalable',
              'Oui, il suffit de le filtrer avec du papier avant de le verser dans le réservoir',
              'Oui, car le pétrole brut ne contient que de l’essence pure prête à l’emploi',
              'Non, uniquement parce qu’il est toujours solide à température ambiante',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pétrole brut est un mélange complexe contenant aussi des composés soufrés et des fractions lourdes : il est inutilisable sans raffinage.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q1',
          type: 'mcq',
          prompt: 'De quoi sont principalement issus le pétrole brut et les gaz naturels ?',
          options: [
            'De la décomposition lente de matières organiques animales et végétales enfouies',
            'De la fusion directe de roches volcaniques basaltiques',
            'De la condensation atmosphérique du dioxyde de carbone polaire',
            'De la dissolution du calcaire marin dans l’eau de pluie',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les sédiments organiques issus de restes animaux et végétaux se transforment très lentement en pétrole et gaz naturels après enfouissement.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q2',
          type: 'mcq',
          prompt: 'Dans quelle condition la transformation des sédiments organiques en hydrocarbures s’effectue-t-elle ?',
          options: [
            'À l’abri du dioxygène de l’air et sous l’action de bactéries',
            'En présence d’un excès permanent de dioxygène atmosphérique',
            'Uniquement sous l’effet du rayonnement ultraviolet à la surface du sol',
            'En quelques semaines seulement sans enfouissement sédimentaire',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’enfouissement protège la matière organique de l’oxygène ; les bactéries anaérobies, la pression et la chaleur la transforment alors lentement en hydrocarbures.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q3',
          type: 'mcq',
          prompt: 'Quelle affirmation décrit correctement la composition du pétrole brut ?',
          options: [
            'C’est un mélange riche en alcanes et souvent en aromatiques, mais pauvre en hydrocarbures insaturés',
            'C’est un corps pur constitué uniquement d’éthylène liquide',
            'Il est composé à 90 % de dihydrogène et d’acide sulfurique',
            'Il ne renferme aucun composé soufré, oxygéné ni azoté',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pétrole brut contient surtout des alcanes et des hydrocarbures aromatiques (plus des impuretés soufrées, oxygénées et azotées), mais rarement des alcènes ou alcynes.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q4',
          type: 'mcq',
          prompt: 'Quel gaz constitue à environ 90 % les gaz naturels ?',
          options: [
            'Le méthane (CH₄)',
            'L’acétylène (C₂H₂)',
            'Le dioxyde de soufre (SO₂)',
            'Le dichlore (Cl₂)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les gaz naturels sont constitués à 90 % de méthane, le plus simple des alcanes.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q5',
          type: 'mcq',
          prompt: 'Pourquoi qualifie-t-on le pétrole de ressource non renouvelable ?',
          options: [
            'Parce qu’il met plusieurs millions d’années à se former et que sa consommation dépasse le rythme de formation',
            'Parce qu’il disparaît dès qu’il entre en contact avec l’eau liquide',
            'Parce qu’on peut le régénérer en laboratoire en moins d’une heure',
            'Parce qu’il ne contient aucun atome de carbone réutilisable',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La durée géologique de formation (plusieurs millions d’années) rend les réserves épuisables à l’échelle humaine.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p01_q6',
          type: 'mcq',
          prompt: 'Peut-on utiliser le pétrole brut tel qu’il sort du gisement directement comme carburant automobile ?',
          options: [
            'Non, c’est un mélange complexe inutilisable à l’état brut qui doit être raffiné au préalable',
            'Oui, il suffit de le filtrer avec du papier avant de le verser dans le réservoir',
            'Oui, car le pétrole brut ne contient que de l’essence pure prête à l’emploi',
            'Non, uniquement parce qu’il est toujours solide à température ambiante',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pétrole brut est un mélange complexe contenant aussi des composés soufrés et des fractions lourdes : il est inutilisable sans raffinage.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Raffinage et distillation fractionnée (fractionnement)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02',
      order: 2,
      title: 'Raffinage et distillation fractionnée du pétrole',
      summary:
        'Identifier les trois opérations de base du raffinage et comprendre le principe physique de la séparation par températures d’ébullition dans une colonne à plateaux.',
      conceptExplanation:
        "Le **raffinage** regroupe l’ensemble des opérations physiques et chimiques permettant de transformer le pétrole brut en produits commerciaux utilisables. Il repose sur trois opérations de base :\n1. Le **fractionnement** (ou **distillation fractionnée**) — séparation physique.\n2. Le **craquage** — transformation chimique de molécules lourdes en molécules légères.\n3. Le **reformage** — modification de la structure moléculaire pour améliorer la qualité des essences.\n\n**Principe de la distillation fractionnée** :\n- Le pétrole brut est chauffé puis envoyé dans une haute tour métallique appelée **colonne à plateaux** (plus chaude en bas qu’en haut).\n- Les différents constituants se séparent selon leurs **températures d’ébullition** : les vapeurs montent et se condensent sur les plateaux correspondant à leur température.\n- En **haut de colonne** (basses températures d’ébullition, molécules légères) on recueille les gaz (GPL : butane, propane) et les essences ; au milieu le kérosène et le gasoil ; en **bas de colonne** les résidus lourds (fioul lourd, bitumes).",
      keyRule:
        'Le raffinage enchaîne fractionnement (séparation physique par température d’ébullition en colonne à plateaux), craquage et reformage.',
      formulas: [
        {
          name: 'Trilogie du raffinage',
          formula: '\\text{Raffinage} = \\text{Fractionnement} + \\text{Craquage} + \\text{Reformage}',
        },
        {
          name: 'Critère du fractionnement',
          formula: 'T_{\\text{éb}}(\\text{haut}) < T_{\\text{éb}}(\\text{milieu}) < T_{\\text{éb}}(\\text{bas})',
          note: 'Les coupes les plus légères s’élèvent tout en haut de la colonne à plateaux',
        },
      ],
      workedExample: {
        title: 'Répondre à une demande d’information sur le raffinage (Situation p. 2)',
        statement:
          'Un documentaire explique que le pétrole brut sortant des puits est inutilisable et doit être raffiné. Explique à un élève pourquoi et nomme les opérations de base.',
        methodSteps: [
          '1) Le pétrole brut est un mélange hétérogène d’hydrocarbures de masses très diverses et d’impuretés : aucun moteur ne peut le brûler efficacement tel quel.',
          '2) On commence par le fractionnement dans une colonne à plateaux pour séparer les coupes selon leurs températures d’ébullition.',
          '3) On complète par deux traitements chimiques : le craquage (casser les molécules lourdes) et le reformage (modifier la structure des alcanes légers).',
        ],
        conclusion:
          'Les trois opérations fondamentales du raffinage sont le fractionnement, le craquage et le reformage.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Schéma d’une colonne à plateaux (distillation fractionnée)',
        svgContent: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Colonne à plateaux de distillation fractionnée du pétrole">
  <rect x="75" y="16" width="90" height="186" rx="18" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2.2"/>
  <line x1="75" y1="54" x2="165" y2="54" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="75" y1="92" x2="165" y2="92" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="75" y1="130" x2="165" y2="130" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="75" y1="168" x2="165" y2="168" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M22,184 L75,184" stroke="#EA580C" stroke-width="3" fill="none"/>
  <text x="10" y="176" font-size="10" font-weight="700" fill="#EA580C">Pétrole brut</text>
  <text x="10" y="196" font-size="9" fill="#EA580C">chauffé (~370 °C)</text>
  <path d="M165,36 L210,36" stroke="#1D4ED8" stroke-width="2"/>
  <text x="216" y="39" font-size="10.5" font-weight="600" fill="#1E293B">Gaz (GPL) &lt; 40 °C</text>
  <path d="M165,73 L210,73" stroke="#1D4ED8" stroke-width="2"/>
  <text x="216" y="76" font-size="10.5" font-weight="600" fill="#1E293B">Essences (40–180 °C)</text>
  <path d="M165,111 L210,111" stroke="#1D4ED8" stroke-width="2"/>
  <text x="216" y="114" font-size="10.5" font-weight="600" fill="#1E293B">Kérosène (180–250 °C)</text>
  <path d="M165,149 L210,149" stroke="#1D4ED8" stroke-width="2"/>
  <text x="216" y="152" font-size="10.5" font-weight="600" fill="#1E293B">Gasoil (250–350 °C)</text>
  <path d="M165,186 L210,186" stroke="#7C2D12" stroke-width="2"/>
  <text x="216" y="189" font-size="10.5" font-weight="600" fill="#7C2D12">Fioul lourd &amp; bitumes</text>
  <text x="86" y="116" font-size="9.5" font-weight="700" fill="#1D4ED8">Colonne à</text>
  <text x="92" y="127" font-size="9.5" font-weight="700" fill="#1D4ED8">plateaux</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Industrie pétrolière',
          stepTitle: 'Les trois opérations du raffinage',
          paragraphText:
            'On appelle raffinage l’ensemble des procédés qui transforment le pétrole brut inutilisable en produits finis. Il comprend trois opérations de base : le fractionnement, le craquage et le reformage.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q1',
            type: 'mcq',
            prompt: 'Quelles sont les trois opérations de base effectuées au cours du raffinage du pétrole brut ?',
            options: [
              'Le fractionnement, le craquage et le reformage',
              'L’électrolyse, la saponification et la fermentation alcoolique',
              'La décantation, le broyage et la calcination',
              'La photosynthèse, la polymérisation et la neutralisation acide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le raffinage associe la séparation physique par distillation fractionnée (fractionnement) puis les transformations chimiques de craquage et de reformage.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Principe physique',
          stepTheme: 'Distillation fractionnée',
          stepTitle: 'Critère de séparation des constituants',
          paragraphText:
            'La distillation fractionnée (ou fractionnement) sépare les différents constituants d’un pétrole brut en exploitant les différences entre leurs températures d’ébullition.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q2',
            type: 'mcq',
            prompt: 'Sur quelle propriété physique repose la séparation des constituants lors du fractionnement du pétrole ?',
            options: [
              'Sur leurs températures d’ébullition différentes',
              'Sur leur solubilité dans l’eau froide',
              'Sur leur couleur et leur odeur caractéristiques',
              'Sur leur conductivité électrique à l’état solide',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les constituants du pétrole passent à l’état gazeux puis se condensent à des températures d’ébullition distinctes le long de la tour.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Appareillage',
          stepTheme: 'Tour de distillation',
          stepTitle: 'Nom de l’installation de fractionnement',
          paragraphText:
            'Dans une raffinerie comme la SIR à Abidjan, le fractionnement du pétrole brut s’effectue dans une grande tour verticale équipée de niveaux internes appelée « colonne à plateaux ».',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q3',
            type: 'mcq',
            prompt: 'Dans quel équipement industriel réalise-t-on la distillation fractionnée du pétrole ?',
            options: [
              'Une colonne à plateaux',
              'Un haut-fourneau à coke',
              'Une cuve à électrolyse à membrane',
              'Un autoclave biologique stérile',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La distillation fractionnée du pétrole brut se déroule dans une tour appelée colonne à plateaux.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Gradient thermique',
          stepTheme: 'Lecture de colonne',
          stepTitle: 'Où récupère-t-on les fractions légères et lourdes ?',
          paragraphText:
            'La température décroît du bas vers le haut dans une colonne à plateaux. Les molécules légères à faible température d’ébullition (gaz, essence) montent tout en haut, tandis que les hydrocarbures lourds (fioul lourd, bitume) restent en bas.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q4',
            type: 'mcq',
            prompt: 'Où recueille-t-on les hydrocarbures les plus légers (gaz, essences) dans la colonne à plateaux ?',
            options: [
              'En haut de la colonne, là où la température est la plus basse',
              'Tout au fond de la colonne, mélangés aux bitumes',
              'À l’extérieur avant même de chauffer le pétrole brut',
              'Uniquement par filtration mécanique sur sable',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Plus une molécule est légère, plus sa température d’ébullition est basse ; ses vapeurs montent donc jusqu’aux plateaux supérieurs les plus froids.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Nature physique',
          stepTheme: 'Conservation des molécules',
          stepTitle: 'Le fractionnement modifie-t-il les molécules ?',
          paragraphText:
            'Attention à bien distinguer physique et chimie : le fractionnement est une opération purement physique qui trie des molécules déjà présentes dans le pétrole brut sans rompre aucune liaison chimique.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q5',
            type: 'mcq',
            prompt: 'La distillation fractionnée du pétrole est-elle une transformation chimique ?',
            options: [
              'Non, c’est une séparation physique qui ne modifie pas la structure des molécules',
              'Oui, elle transforme systématiquement tous les alcanes en polymères',
              'Oui, elle casse toutes les liaisons C-C pour produire uniquement du méthane',
              'Oui, c’est une réaction nucléaire entre noyaux de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La distillation fractionnée sépare par vaporisation/condensation les constituants existants sans créer de nouvelles espèces chimiques.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Limites du fractionnement',
          stepTitle: 'Pourquoi le fractionnement ne suffit-il pas ?',
          paragraphText:
            'Après distillation fractionnée, la proportion de coupes lourdes (fiouls) dépasse souvent les besoins du marché, alors que la demande en essences et en matières premières pour la pétrochimie (alcènes légers) est beaucoup plus forte. C’est pourquoi on recourt au craquage et au reformage.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q6',
            type: 'mcq',
            prompt: 'Pourquoi la distillation fractionnée seule ne suffit-elle pas dans une raffinerie moderne ?',
            options: [
              'Parce qu’elle donne trop de coupes lourdes et pas assez d’essences légères de bonne qualité ni d’alcènes pétrochimiques',
              'Parce que le pétrole brut contient déjà 95 % d’essence prête pour les moteurs',
              'Parce que la colonne à plateaux détruit toutes les molécules d’alcanes',
              'Parce qu’elle ne sépare que l’eau pure et le dioxyde de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les besoins mondiaux en essences performantes et en alcènes légers exigent de compléter le fractionnement par le craquage et le reformage.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q1',
          type: 'mcq',
          prompt: 'Quelles sont les trois opérations de base effectuées au cours du raffinage du pétrole brut ?',
          options: [
            'Le fractionnement, le craquage et le reformage',
            'L’électrolyse, la saponification et la fermentation alcoolique',
            'La décantation, le broyage et la calcination',
            'La photosynthèse, la polymérisation et la neutralisation acide',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le raffinage associe la séparation physique par distillation fractionnée (fractionnement) puis les transformations chimiques de craquage et de reformage.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q2',
          type: 'mcq',
          prompt: 'Sur quelle propriété physique repose la séparation des constituants lors du fractionnement du pétrole ?',
          options: [
            'Sur leurs températures d’ébullition différentes',
            'Sur leur solubilité dans l’eau froide',
            'Sur leur couleur et leur odeur caractéristiques',
            'Sur leur conductivité électrique à l’état solide',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les constituants du pétrole passent à l’état gazeux puis se condensent à des températures d’ébullition distinctes le long de la tour.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q3',
          type: 'mcq',
          prompt: 'Dans quel équipement industriel réalise-t-on la distillation fractionnée du pétrole ?',
          options: [
            'Une colonne à plateaux',
            'Un haut-fourneau à coke',
            'Une cuve à électrolyse à membrane',
            'Un autoclave biologique stérile',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La distillation fractionnée du pétrole brut se déroule dans une tour appelée colonne à plateaux.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q4',
          type: 'mcq',
          prompt: 'Où recueille-t-on les hydrocarbures les plus légers (gaz, essences) dans la colonne à plateaux ?',
          options: [
            'En haut de la colonne, là où la température est la plus basse',
            'Tout au fond de la colonne, mélangés aux bitumes',
            'À l’extérieur avant même de chauffer le pétrole brut',
            'Uniquement par filtration mécanique sur sable',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Plus une molécule est légère, plus sa température d’ébullition est basse ; ses vapeurs montent donc jusqu’aux plateaux supérieurs les plus froids.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q5',
          type: 'mcq',
          prompt: 'La distillation fractionnée du pétrole est-elle une transformation chimique ?',
          options: [
            'Non, c’est une séparation physique qui ne modifie pas la structure des molécules',
            'Oui, elle transforme systématiquement tous les alcanes en polymères',
            'Oui, elle casse toutes les liaisons C-C pour produire uniquement du méthane',
            'Oui, c’est une réaction nucléaire entre noyaux de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La distillation fractionnée sépare par vaporisation/condensation les constituants existants sans créer de nouvelles espèces chimiques.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p02_q6',
          type: 'mcq',
          prompt: 'Pourquoi la distillation fractionnée seule ne suffit-elle pas dans une raffinerie moderne ?',
          options: [
            'Parce qu’elle donne trop de coupes lourdes et pas assez d’essences légères de bonne qualité ni d’alcènes pétrochimiques',
            'Parce que le pétrole brut contient déjà 95 % d’essence prête pour les moteurs',
            'Parce que la colonne à plateaux détruit toutes les molécules d’alcanes',
            'Parce qu’elle ne sépare que l’eau pure et le dioxyde de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les besoins mondiaux en essences performantes et en alcènes légers exigent de compléter le fractionnement par le craquage et le reformage.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Le craquage des hydrocarbures lourds et bilan massique
    // ========================================================================
    {
      id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03',
      order: 3,
      title: 'Le craquage des hydrocarbures lourds',
      summary:
        'Définir le craquage, écrire et équilibrer ses équations-bilans (dont la déshydrogénation et la rupture de chaîne du butane) et calculer les pourcentages massiques des produits.',
      conceptExplanation:
        "Le **craquage** est une transformation chimique qui permet de casser les molécules d’**hydrocarbures lourds** (à longue chaîne carbonée) en **hydrocarbures légers** (alcanes plus courts, alcènes très réactifs utiles en pétrochimie et parfois dihydrogène).\n\n- **Conservation des atomes** : dans toute équation de craquage, le nombre total d’atomes de carbone et d’hydrogène reste strictement identique avant et après réaction.\n- **Exemple officiel du craquage du butane ($\\mathrm{C_4H_{10}}$)** (Exercice 4 du cours) :\n  - Réaction 1 (déshydrogénation, 60 % des moles de butane) : $\\mathrm{C_4H_{10} \\longrightarrow C_4H_8 + H_2}$ (formation de méthylpropène $\\mathrm{CH_2=C(CH_3)-CH_3}$ et de dihydrogène).\n  - Réaction 2 (coupure de chaîne, 40 % des moles de butane) : $\\mathrm{C_4H_{10} \\longrightarrow C_3H_6 + CH_4}$ (formation de propène $\\mathrm{CH_3-CH=CH_2}$ et de méthane).",
      keyRule:
        'Le craquage brise des hydrocarbures lourds en hydrocarbures légers (souvent un alcane plus court et un alcène) avec conservation de la masse et du nombre d’atomes.',
      formulas: [
        {
          name: 'Craquage déshydrogénant du butane',
          formula: '\\mathrm{C_4H_{10} \\longrightarrow C_4H_8 + H_2}',
          note: 'Produit du méthylpropène CH₂=C(CH₃)-CH₃ et H₂',
        },
        {
          name: 'Craquage avec coupure de chaîne du butane',
          formula: '\\mathrm{C_4H_{10} \\longrightarrow C_3H_6 + CH_4}',
          note: 'Produit du propène CH₃-CH=CH₂ et du méthane',
        },
        {
          name: 'Pourcentage massique d’un produit i',
          formula: '\\%m_i = \\dfrac{m_i}{m_{\\text{totale}}} \\times 100',
        },
      ],
      workedExample: {
        title: 'Pourcentages massiques des produits du craquage du butane (Exercice 4 p. 3–4)',
        statement:
          'Le craquage de 100 mol de butane ($M = 58\\text{ g/mol}$) suit deux réactions : 60 % donnent du méthylpropène ($\\mathrm{C_4H_8}$) et du dihydrogène ($\\mathrm{H_2}$) ; 40 % donnent du propène ($\\mathrm{C_3H_6}$) et du méthane ($\\mathrm{CH_4}$). Détermine la composition massique finale.',
        methodSteps: [
          '1) Masse initiale de butane : m_tot = 100 × 58 = 5800 g (conservée après réaction).',
          '2) 60 mol donnent 60 mol de C₄H₈ (M = 56 g/mol, m = 3360 g, soit 3360/5800 × 100 = 57,93 %) et 60 mol de H₂ (M = 2 g/mol, m = 120 g, soit 2,07 %).',
          '3) 40 mol donnent 40 mol de C₃H₆ (M = 42 g/mol, m = 1680 g, soit 1680/5800 × 100 = 28,97 %) et 40 mol de CH₄ (M = 16 g/mol, m = 640 g, soit 11,03 %).',
        ],
        conclusion:
          'Le mélange obtenu renferme 57,93 % de méthylpropène, 28,97 % de propène, 11,03 % de méthane et 2,07 % de dihydrogène.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Objectif du craquage',
          stepTitle: 'Transformer les molécules lourdes en légères',
          paragraphText:
            'Le craquage consiste à briser de longues chaînes carbonées d’hydrocarbures lourds pour fabriquer des hydrocarbures légers à plus forte valeur ajoutée (carburants plus volatils et alcènes pour la pétrochimie).',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q1',
            type: 'mcq',
            prompt: 'Quel est le rôle principal de l’opération de craquage dans une raffinerie ?',
            options: [
              'Transformer des hydrocarbures lourds en hydrocarbures légers',
              'Transformer du méthane gazeux en bitume routier solide',
              'Séparer physiquement les gaz dissous sans casser aucune liaison',
              'Dissoudre le pétrole brut dans de l’acide nitrique concentré',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le craquage coupe les chaînes carbonées des hydrocarbures lourds pour obtenir des hydrocarbures plus légers.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Conservation atomique',
          stepTitle: 'Équilibrer un craquage avec production d’alcène',
          paragraphText:
            'Lorsqu’un alcane lourd subit un craquage, ses liaisons C-C ou C-H se rompent. Par exemple, le butane ($\\mathrm{C_4H_{10}}$) peut se craquer en propène ($\\mathrm{C_3H_6}$) et méthane ($\\mathrm{CH_4}$), ou en méthylpropène ($\\mathrm{C_4H_8}$) et dihydrogène ($\\mathrm{H_2}$).',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q2',
            type: 'mcq',
            prompt: 'Lors du craquage d’une molécule de décane $\\mathrm{C_{10}H_{22}}$, on obtient une molécule d’octane $\\mathrm{C_8H_{18}}$ et un seul autre produit. Quelle est sa formule brute ?',
            options: [
              '$\\mathrm{C_2H_4}$ (éthène)',
              '$\\mathrm{C_2H_6}$ (éthane)',
              '$\\mathrm{C_3H_6}$ (propène)',
              '$\\mathrm{CH_4}$ (méthane)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Par conservation des atomes : $10 - 8 = 2$ atomes de carbone et $22 - 18 = 4$ atomes d’hydrogène, soit une molécule d’éthène $\\mathrm{C_2H_4}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Vigilance formule',
          stepTheme: 'Tétravalence du carbone',
          stepTitle: 'Écrire correctement la formule du propène et du méthylpropène',
          paragraphText:
            'Attention aux erreurs d’écriture sur les formules semi-développées : chaque atome de carbone doit toujours former exactement 4 liaisons. On écrit le propène $\\mathrm{CH_3-CH=CH_2}$ (et jamais « CH₃-CH₂=CH₂ ») et le méthylpropène $\\mathrm{CH_2=C(CH_3)-CH_3}$.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q3',
            type: 'mcq',
            prompt: 'Parmi ces écritures semi-développées du propène ($\\mathrm{C_3H_6}$), laquelle respecte la tétravalence du carbone ?',
            options: [
              '$\\mathrm{CH_3-CH=CH_2}$',
              '$\\mathrm{CH_3-CH_2=CH_2}$',
              '$\\mathrm{CH_2=CH_2-CH_3}$',
              '$\\mathrm{CH_3-C\\equiv CH_3}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans $\\mathrm{CH_3-CH=CH_2}$, le carbone central porte 1 liaison simple à gauche, 1 liaison double à droite et 1 liaison avec H, soit bien 4 liaisons.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Calcul bilan',
          stepTheme: 'Pourcentage massique',
          stepTitle: 'Calculer la masse molaire et la part d’un produit',
          paragraphText:
            'Si 60 % des molécules de butane ($M = 58\\text{ g/mol}$) donnent $\\mathrm{C_4H_8}$ ($M = 56\\text{ g/mol}$) et $\\mathrm{H_2}$ ($M = 2\\text{ g/mol}$), alors sur 100 mol de butane (5800 g), il se forme 60 mol de $\\mathrm{C_4H_8}$ de masse $60 \\times 56 = 3360\\text{ g}$.',
          formula: { name: 'Part massique de C₄H₈', formula: '\\%m(\\mathrm{C_4H_8}) = \\dfrac{56 \\times 60}{58} \\approx 57{,}93\\%' },
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q4',
            type: 'mcq',
            prompt: 'Dans ce craquage où 60 % du butane ($M=58\\text{ g/mol}$) donne du méthylpropène ($M=56\\text{ g/mol}$) et du dihydrogène, quel est le pourcentage en masse de méthylpropène obtenu ?',
            options: [
              '57,93 %',
              '60,00 %',
              '28,97 %',
              '11,03 %',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le pourcentage massique vaut $(60 \\times 56) / 58 \\approx 57{,}93\\%$. Il diffère du pourcentage molaire (60 %) car une partie de la masse est emportée par $\\mathrm{H_2}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Seconde voie du craquage',
          stepTitle: 'Pourcentage massique de méthane et de propène',
          paragraphText:
            'Les 40 % restants du butane se craquent selon $\\mathrm{C_4H_{10} \\to C_3H_6 + CH_4}$. Sur 100 mol de butane (5800 g), on obtient 40 mol de $\\mathrm{CH_4}$ ($M = 16\\text{ g/mol}$, soit 640 g) et 40 mol de $\\mathrm{C_3H_6}$ ($M = 42\\text{ g/mol}$, soit 1680 g).',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q5',
            type: 'mcq',
            prompt: 'Toujours pour ce même craquage (40 % donnant $\\mathrm{C_3H_6 + CH_4}$), quel est le pourcentage en masse de méthane ($M = 16\\text{ g/mol}$) formé ?',
            options: [
              '11,03 %',
              '2,07 %',
              '28,97 %',
              '40,00 %',
            ],
            correctAnswerIndex: 0,
            explanation:
              'On calcule $(40 \\times 16) / 58 = 640 / 58 \\approx 11{,}03\\%$ de méthane en masse (et $(40 \\times 42)/58 \\approx 28{,}97\\%$ de propène).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Bilan général',
          stepTheme: 'Vérification de masse',
          stepTitle: 'La somme des pourcentages massiques vaut 100 %',
          paragraphText:
            'Au cours d’une réaction chimique en système fermé, la masse totale se conserve. Additionner les pourcentages massiques des quatre produits formés ($57{,}93 + 2{,}07 + 28{,}97 + 11{,}03 = 100\\%$) constitue un excellent moyen de contrôler ses calculs en devoir.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q6',
            type: 'mcq',
            prompt: 'Lors du craquage d’un échantillon de 5,8 kg de butane en réacteur fermé, quelle est la masse totale de l’ensemble des produits obtenus ?',
            options: [
              '5,8 kg (conservation de la masse)',
              'Moins de 3 kg car les chaînes carbonées ont raccourci',
              '11,6 kg car le nombre de molécules a doublé',
              '5,6 kg car le dihydrogène a une masse nulle',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le nombre de molécules augmente mais le nombre d’atomes reste inchangé : d’après Lavoisier, la masse totale demeure égale à 5,8 kg.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q1',
          type: 'mcq',
          prompt: 'Quel est le rôle principal de l’opération de craquage dans une raffinerie ?',
          options: [
            'Transformer des hydrocarbures lourds en hydrocarbures légers',
            'Transformer du méthane gazeux en bitume routier solide',
            'Séparer physiquement les gaz dissous sans casser aucune liaison',
            'Dissoudre le pétrole brut dans de l’acide nitrique concentré',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le craquage coupe les chaînes carbonées des hydrocarbures lourds pour obtenir des hydrocarbures plus légers.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q2',
          type: 'mcq',
          prompt: 'Lors du craquage d’une molécule de décane $\\mathrm{C_{10}H_{22}}$, on obtient une molécule d’octane $\\mathrm{C_8H_{18}}$ et un seul autre produit. Quelle est sa formule brute ?',
          options: [
            '$\\mathrm{C_2H_4}$ (éthène)',
            '$\\mathrm{C_2H_6}$ (éthane)',
            '$\\mathrm{C_3H_6}$ (propène)',
            '$\\mathrm{CH_4}$ (méthane)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Par conservation des atomes : $10 - 8 = 2$ atomes de carbone et $22 - 18 = 4$ atomes d’hydrogène, soit une molécule d’éthène $\\mathrm{C_2H_4}$.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q3',
          type: 'mcq',
          prompt: 'Parmi ces écritures semi-développées du propène ($\\mathrm{C_3H_6}$), laquelle respecte la tétravalence du carbone ?',
          options: [
            '$\\mathrm{CH_3-CH=CH_2}$',
            '$\\mathrm{CH_3-CH_2=CH_2}$',
            '$\\mathrm{CH_2=CH_2-CH_3}$',
            '$\\mathrm{CH_3-C\\equiv CH_3}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans $\\mathrm{CH_3-CH=CH_2}$, le carbone central porte 1 liaison simple à gauche, 1 liaison double à droite et 1 liaison avec H, soit bien 4 liaisons.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q4',
          type: 'mcq',
          prompt: 'Dans ce craquage où 60 % du butane ($M=58\\text{ g/mol}$) donne du méthylpropène ($M=56\\text{ g/mol}$) et du dihydrogène, quel est le pourcentage en masse de méthylpropène obtenu ?',
          options: [
            '57,93 %',
            '60,00 %',
            '28,97 %',
            '11,03 %',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le pourcentage massique vaut $(60 \\times 56) / 58 \\approx 57{,}93\\%$. Il diffère du pourcentage molaire (60 %) car une partie de la masse est emportée par $\\mathrm{H_2}$.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q5',
          type: 'mcq',
          prompt: 'Toujours pour ce même craquage (40 % donnant $\\mathrm{C_3H_6 + CH_4}$), quel est le pourcentage en masse de méthane ($M = 16\\text{ g/mol}$) formé ?',
          options: [
            '11,03 %',
            '2,07 %',
            '28,97 %',
            '40,00 %',
          ],
          correctAnswerIndex: 0,
          explanation:
            'On calcule $(40 \\times 16) / 58 = 640 / 58 \\approx 11{,}03\\%$ de méthane en masse (et $(40 \\times 42)/58 \\approx 28{,}97\\%$ de propène).',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p03_q6',
          type: 'mcq',
          prompt: 'Lors du craquage d’un échantillon de 5,8 kg de butane en réacteur fermé, quelle est la masse totale de l’ensemble des produits obtenus ?',
          options: [
            '5,8 kg (conservation de la masse)',
            'Moins de 3 kg car les chaînes carbonées ont raccourci',
            '11,6 kg car le nombre de molécules a doublé',
            '5,6 kg car le dihydrogène a une masse nulle',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le nombre de molécules augmente mais le nombre d’atomes reste inchangé : d’après Lavoisier, la masse totale demeure égale à 5,8 kg.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Le reformage et l’indice d’octane
    // ========================================================================
    {
      id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04',
      order: 4,
      title: 'Le reformage et l’indice d’octane',
      summary:
        'Comprendre le principe du reformage (isomérisation, cyclisation, aromatisation sans changer le nombre de carbones) et son rôle pour augmenter l’indice d’octane des essences.',
      conceptExplanation:
        "Les essences issues directement de la distillation fractionnée contiennent surtout des alcanes à **chaîne linéaire** qui s’enflamment trop facilement sous compression dans les cylindres.\n\n- **Définition du reformage** : opération chimique qui consiste à **modifier la structure** d’un hydrocarbure **sans modifier son nombre d’atomes de carbone** (transformation d’alcanes linéaires en alcanes ramifiés par isomérisation, ou en cyclanes / hydrocarbures aromatiques avec départ d’hydrogène).\n- **Application** : il se pratique sur les alcanes des **essences légères** afin d’améliorer leur **indice d’octane**.\n- **Indice d’octane** : nombre qui mesure la **résistance à l’autoallumage** (ou cliquetis) d’un carburant, c’est-à-dire la résistance à une combustion spontanée provoquée par la compression avant l’étincelle de la bougie. Plus l’indice d’octane est élevé (ex. super 95 vs ordinaire 87), meilleure est la résistance au cliquetis.",
      keyRule:
        'Le reformage modifie la structure d’un hydrocarbure sans changer son nombre d’atomes de carbone ; il augmente l’indice d’octane (résistance à l’autoallumage sans bougie).',
      formulas: [
        {
          name: 'Conservation du squelette en carbone',
          formula: 'N_C(\\text{produit}) = N_C(\\text{réactif})',
          note: 'Contrairement au craquage qui diminue le nombre de carbones',
        },
        {
          name: 'Exemple d’isomérisation en reformage',
          formula: '\\mathrm{C_6H_{14}\\,(lin\\acute{e}aire)} \\longrightarrow \\mathrm{C_6H_{14}\\,(ramifi\\acute{e})}',
        },
      ],
      workedExample: {
        title: 'Distinguer craquage et reformage sur deux transformations',
        statement:
          'On compare : (A) transformation de l’heptane linéaire $\\mathrm{C_7H_{16}}$ en 2,2,3-triméthylbutane $\\mathrm{C_7H_{16}}$ ; (B) transformation du dodécane $\\mathrm{C_{12}H_{26}}$ en octane $\\mathrm{C_8H_{18}}$ et but-1-ène $\\mathrm{C_4H_8}$. Identifie chaque opération.',
        methodSteps: [
          '1) En (A), réactif et produit possèdent tous deux 7 atomes de carbone : seule la structure change (chaîne linéaire → chaîne ramifiée). Il s’agit d’un reformage.',
          '2) Cette ramification élève fortement l’indice d’octane du carburant.',
          '3) En (B), une molécule lourde en C₁₂ est coupée en deux molécules plus légères (C₈ et C₄) : il s’agit d’un craquage.',
        ],
        conclusion:
          '(A) est un reformage (nombre de C conservé) et (B) est un craquage (coupe de chaîne).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Reformage catalytique',
          stepTitle: 'Principe du reformage',
          paragraphText:
            'Le reformage consiste à modifier la géométrie de la chaîne carbonée d’un hydrocarbure (passage d’une chaîne linéaire à une chaîne ramifiée, cyclique ou aromatique) tout en conservant exactement le même nombre d’atomes de carbone.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q1',
            type: 'mcq',
            prompt: 'Quelle propriété caractérise l’opération de reformage lors du raffinage ?',
            options: [
              'Elle modifie la structure d’un hydrocarbure sans changer son nombre d’atomes de carbone',
              'Elle coupe une molécule lourde en deux ou trois molécules plus petites',
              'Elle sépare uniquement les fractions par ébullition sans réaction chimique',
              'Elle polymérise des milliers de molécules d’éthylène entre elles',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le reformage réorganise l’architecture de la chaîne carbonée à nombre constant d’atomes de carbone.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Indice d’octane',
          stepTheme: 'Qualité des essences',
          stepTitle: 'Que mesure l’indice d’octane ?',
          paragraphText:
            'Dans un moteur à essence, le mélange air-essence comprimé doit attendre l’étincelle de la bougie pour s’enflammer. L’indice d’octane mesure la résistance d’un carburant à l’autoallumage (allumage spontané sans intervention de la bougie).',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q2',
            type: 'mcq',
            prompt: 'Que mesure l’indice d’octane d’une essence ?',
            options: [
              'Sa résistance à l’autoallumage (allumage sans intervention de la bougie)',
              'La masse de soufre dissoute par litre de carburant',
              'La couleur bleutée de la flamme produite à l’air libre',
              'La quantité de bitume résiduel contenue dans l’essence',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Plus l’indice d’octane est élevé, plus le carburant résiste à l’autoallumage prématuré (cliquetis) lors de la compression dans le cylindre.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Objectif',
          stepTheme: 'Essences légères',
          stepTitle: 'Sur quelles coupes pratique-t-on le reformage ?',
          paragraphText:
            'Les essences légères obtenues après fractionnement possèdent beaucoup d’alcanes linéaires à faible indice d’octane. Le reformage s’applique précisément sur ces alcanes légers pour augmenter leur indice d’octane.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q3',
            type: 'mcq',
            prompt: 'Dans quel but pratique-t-on le reformage sur les alcanes des essences légères ?',
            options: [
              'Pour améliorer (augmenter) leur indice d’octane',
              'Pour transformer l’essence liquide en gaz méthane',
              'Pour abaisser artificiellement leur pouvoir calorifique',
              'Pour augmenter leur teneur en eau avant le stockage',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Transformer des alcanes linéaires en alcanes ramifiés ou aromatiques relève nettement l’indice d’octane des essences.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Comparaison',
          stepTheme: 'Reconnaître une réaction',
          stepTitle: 'Identifier une réaction de reformage',
          paragraphText:
            'Pour savoir si une équation représente un reformage, compte les atomes de carbone : si la molécule organique produite a le même nombre de carbones que le réactif (par exemple C₆H₁₄ linéaire → C₆H₁₄ ramifié ou C₆H₆ benzène + 4 H₂), c’est un reformage.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q4',
            type: 'mcq',
            prompt: 'Laquelle des transformations suivantes correspond à une réaction de reformage ?',
            options: [
              '$\\mathrm{CH_3-(CH_2)_4-CH_3 \\longrightarrow CH_3-CH(CH_3)-CH(CH_3)-CH_3}$ (de $C_6$ linéaire à $C_6$ ramifié)',
              '$\\mathrm{C_{10}H_{22} \\longrightarrow C_5H_{12} + C_5H_{10}}$',
              '$n\\,\\mathrm{CH_2=CH_2 \\longrightarrow -(CH_2-CH_2)-_n}$',
              '$\\mathrm{C_4H_{10} + \\frac{13}{2}O_2 \\longrightarrow 4CO_2 + 5H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le passage de l’hexane linéaire au 2,3-diméthylbutane conserve les 6 atomes de carbone en modifiant la structure : c’est un reformage (isomérisation).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Aromatisation',
          stepTheme: 'Cyclisation en C₆',
          stepTitle: 'Reformage produisant un composé aromatique et H₂',
          paragraphText:
            'Le reformage de l’hexane ($\\mathrm{C_6H_{14}}$) peut aussi former du benzène ($\\mathrm{C_6H_6}$, composé cyclique aromatique à très haut indice d’octane) avec libération de dihydrogène ($\\mathrm{4\\,H_2}$). Le nombre d’atomes de carbone de l’hydrocarbure reste 6.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q5',
            type: 'mcq',
            prompt: 'Lors du reformage de l’hexane $\\mathrm{C_6H_{14}}$ en benzène $\\mathrm{C_6H_6}$, combien de molécules de dihydrogène $\\mathrm{H_2}$ sont libérées par molécule d’hexane ?',
            options: [
              '$4\\,\\mathrm{H_2}$',
              '$2\\,\\mathrm{H_2}$',
              '$1\\,\\mathrm{H_2}$',
              '$6\\,\\mathrm{H_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$14 - 6 = 8$ atomes d’hydrogène perdus, ce qui forme $8 / 2 = 4$ molécules de dihydrogène : $\\mathrm{C_6H_{14} \\to C_6H_6 + 4\\,H_2}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Idée reçue',
          stepTheme: 'Usage des essences',
          stepTitle: 'Super vs ordinaire : indice d’octane ≠ « propreté »',
          paragraphText:
            'Attention aux idées reçues : un indice d’octane plus élevé ne signifie pas que le carburant est plus « propre » ou plus énergétique pour n’importe quel véhicule. Il empêche simplement le cliquetis dans les moteurs à taux de compression élevé ; pour un moteur conçu pour l’essence ordinaire, payer plus cher pour du super n’apporte aucun gain.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q6',
            type: 'mcq',
            prompt: 'Que faut-il retenir de la différence entre une essence ordinaire (indice 87) et une essence « super » (indice plus élevé) ?',
            options: [
              'L’indice d’octane indique uniquement la résistance à l’autoallumage, pas une qualité supérieure utile à tous les moteurs',
              'L’essence super ne contient aucun atome de carbone',
              'Une essence à haut indice d’octane double la puissance de n’importe quel moteur ordinaire',
              'L’essence ordinaire est du pétrole brut non raffiné',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’indice d’octane caractérise la résistance au cliquetis ; il convient d’utiliser l’indice recommandé par le constructeur du moteur.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q1',
          type: 'mcq',
          prompt: 'Quelle propriété caractérise l’opération de reformage lors du raffinage ?',
          options: [
            'Elle modifie la structure d’un hydrocarbure sans changer son nombre d’atomes de carbone',
            'Elle coupe une molécule lourde en deux ou trois molécules plus petites',
            'Elle sépare uniquement les fractions par ébullition sans réaction chimique',
            'Elle polymérise des milliers de molécules d’éthylène entre elles',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le reformage réorganise l’architecture de la chaîne carbonée à nombre constant d’atomes de carbone.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q2',
          type: 'mcq',
          prompt: 'Que mesure l’indice d’octane d’une essence ?',
          options: [
            'Sa résistance à l’autoallumage (allumage sans intervention de la bougie)',
            'La masse de soufre dissoute par litre de carburant',
            'La couleur bleutée de la flamme produite à l’air libre',
            'La quantité de bitume résiduel contenue dans l’essence',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Plus l’indice d’octane est élevé, plus le carburant résiste à l’autoallumage prématuré (cliquetis) lors de la compression dans le cylindre.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q3',
          type: 'mcq',
          prompt: 'Dans quel but pratique-t-on le reformage sur les alcanes des essences légères ?',
          options: [
            'Pour améliorer (augmenter) leur indice d’octane',
            'Pour transformer l’essence liquide en gaz méthane',
            'Pour abaisser artificiellement leur pouvoir calorifique',
            'Pour augmenter leur teneur en eau avant le stockage',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Transformer des alcanes linéaires en alcanes ramifiés ou aromatiques relève nettement l’indice d’octane des essences.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q4',
          type: 'mcq',
          prompt: 'Laquelle des transformations suivantes correspond à une réaction de reformage ?',
          options: [
            '$\\mathrm{CH_3-(CH_2)_4-CH_3 \\longrightarrow CH_3-CH(CH_3)-CH(CH_3)-CH_3}$ (de $C_6$ linéaire à $C_6$ ramifié)',
            '$\\mathrm{C_{10}H_{22} \\longrightarrow C_5H_{12} + C_5H_{10}}$',
            '$n\\,\\mathrm{CH_2=CH_2 \\longrightarrow -(CH_2-CH_2)-_n}$',
            '$\\mathrm{C_4H_{10} + \\frac{13}{2}O_2 \\longrightarrow 4CO_2 + 5H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le passage de l’hexane linéaire au 2,3-diméthylbutane conserve les 6 atomes de carbone en modifiant la structure : c’est un reformage (isomérisation).',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q5',
          type: 'mcq',
          prompt: 'Lors du reformage de l’hexane $\\mathrm{C_6H_{14}}$ en benzène $\\mathrm{C_6H_6}$, combien de molécules de dihydrogène $\\mathrm{H_2}$ sont libérées par molécule d’hexane ?',
          options: [
            '$4\\,\\mathrm{H_2}$',
            '$2\\,\\mathrm{H_2}$',
            '$1\\,\\mathrm{H_2}$',
            '$6\\,\\mathrm{H_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$14 - 6 = 8$ atomes d’hydrogène perdus, ce qui forme $8 / 2 = 4$ molécules de dihydrogène : $\\mathrm{C_6H_{14} \\to C_6H_6 + 4\\,H_2}$.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p04_q6',
          type: 'mcq',
          prompt: 'Que faut-il retenir de la différence entre une essence ordinaire (indice 87) et une essence « super » (indice plus élevé) ?',
          options: [
            'L’indice d’octane indique uniquement la résistance à l’autoallumage, pas une qualité supérieure utile à tous les moteurs',
            'L’essence super ne contient aucun atome de carbone',
            'Une essence à haut indice d’octane double la puissance de n’importe quel moteur ordinaire',
            'L’essence ordinaire est du pétrole brut non raffiné',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’indice d’octane caractérise la résistance au cliquetis ; il convient d’utiliser l’indice recommandé par le constructeur du moteur.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Utilité des dérivés du pétrole et pétrochimie
    // ========================================================================
    {
      id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05',
      order: 5,
      title: 'Utilité et classification des produits dérivés du pétrole',
      summary:
        'Recenser les usages énergétiques et pétrochimiques des dérivés du pétrole (carburants, bitumes, plastiques, textiles, médicaments) et les distinguer des autres produits chimiques.',
      conceptExplanation:
        "Le pétrole raffiné et transformé par la **pétrochimie** est omniprésent dans la vie quotidienne :\n\n- **Usages énergétiques et transports** : essence, gasoil, carburant turboréacteur (kérosène), **GPL** (butane et propane en bouteille pour la cuisine et le chauffage) et fioul (qui produit environ 5 % de l’électricité mondiale).\n- **Travaux publics et lubrification** : les **bitumes** servent à revêtir les routes (90 % de la production mondiale de bitume y est consacrée) ; les huiles de graissage réduisent l’usure des moteurs ; les solvants permettent le dégraissage des métaux.\n- **Pétrochimie** : environ **99 % des matières plastiques et textiles synthétiques** (nylon, polyester, PVC), ainsi que de nombreux détergents, caoutchoucs synthétiques, adhésifs, médicaments, engrais et produits phytosanitaires (insecticides comme l’hexachlorocyclohexane) sont issus de la pétrochimie.\n- **Distinction importante** : certains produits courants comme l’**acide sulfurique**, l’**acide nitrique** ou l’**alcool éthylique** issu de fermentation ne sont pas des dérivés du pétrole.",
      keyRule:
        'Le pétrole sert à la fois d’énergie (carburants, GPL, fioul), de matériau routier (bitume) et de matière première pétrochimique (99 % des plastiques, fibres synthétiques, solvants, médicaments).',
      formulas: [
        {
          name: 'GPL (Gaz de Pétrole Liquéfiés)',
          formula: '\\text{Propane } (\\mathrm{C_3H_8}) + \\text{Butane } (\\mathrm{C_4H_{10}})',
          note: 'Utilisés en bouteilles pour la cuisson et le chauffage',
        },
      ],
      workedExample: {
        title: 'Classer des produits entre dérivés du pétrole et autres produits (Exercice 3 p. 3)',
        statement:
          'Classe les substances suivantes en deux catégories (dérivés du pétrole / autres produits) : éthylène, nitroglycérine, bitume, gasoil, hexachlorocyclohexane, essence, acide sulfurique, carburant turboréacteur, alcool éthylique, butane, propane, acide nitrique.',
        methodSteps: [
          '1) Dérivés du pétrole (carburants, gaz, résidus et dérivés pétrochimiques) : bitume, gasoil, essence, carburant turboréacteur, butane, propane, éthylène, hexachlorocyclohexane, nitroglycérine.',
          '2) Autres produits chimiques (chimie minérale ou fermentation) : acide sulfurique (H₂SO₄), acide nitrique (HNO₃), alcool éthylique (éthanol de fermentation).',
        ],
        conclusion:
          'Les acides minéraux (H₂SO₄, HNO₃) et l’éthanol de fermentation n’appartiennent pas aux produits dérivés du pétrole.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Principaux domaines d’utilisation du pétrole',
        tableData: {
          headers: ['Domaine', 'Produits pétroliers associés', 'Usage principal'],
          rows: [
            ['Transports & énergie', 'Essence, gasoil, kérosène, GPL, fioul', 'Moteurs, aviation, cuisson, centrales (~5 % électricité)'],
            ['Routes & mécanique', 'Bitumes, huiles de graissage, solvants', 'Chaussées, lubrification, dégraissage'],
            ['Pétrochimie', 'Éthylène, plastiques, nylon, détergents, phytosanitaires', '99 % des plastiques, textiles, médicaments, agriculture'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Énergie domestique',
          stepTheme: 'GPL et cuisson',
          stepTitle: 'Que désignent les GPL ?',
          paragraphText:
            'Les GPL (Gaz de Pétrole Liquéfiés) sont des hydrocarbures gazeux légers issus du raffinage, principalement le propane et le butane, maintenus liquides sous pression en bouteille pour la cuisson des aliments et le chauffage.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q1',
            type: 'mcq',
            prompt: 'Quels hydrocarbures composent principalement le GPL (Gaz de Pétrole Liquéfié) utilisé en bouteille pour la cuisson ?',
            options: [
              'Le butane et le propane',
              'Le bitume et le fioul lourd',
              'L’éthylène et le benzène',
              'Le dioxyde de carbone et le diazote',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les bouteilles de gaz domestique contiennent des GPL, constitués essentiellement de butane et de propane liquéfiés sous pression.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Pétrochimie',
          stepTheme: 'Matières synthétiques',
          stepTitle: 'Place du pétrole dans les plastiques et textiles',
          paragraphText:
            'Au-delà des carburants, la pétrochimie transforme les coupes légères (éthylène, propène) en polymères : environ 99 % des matières plastiques et des fibres synthétiques (nylon, polyester) proviennent du pétrole.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q2',
            type: 'mcq',
            prompt: 'Quelle proportion approximative des matières plastiques et textiles synthétiques (nylon, polyester) est issue de la pétrochimie ?',
            options: [
              'Environ 99 %',
              'Moins de 5 %',
              'Exactement 25 %',
              '0 %, ils viennent uniquement du bois',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Environ 99 % des matières plastiques et textiles synthétiques proviennent des transformations pétrochimiques issues du pétrole.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Travaux publics',
          stepTheme: 'Bitumes et routes',
          stepTitle: 'Usage principal du bitume issu du pétrole',
          paragraphText:
            'Les résidus lourds obtenus tout en bas de la colonne de distillation donnent les bitumes. Environ 90 % de la production mondiale de bitume est absorbée par la construction et l’entretien des routes.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q3',
            type: 'mcq',
            prompt: 'À quel secteur d’activité sont destinés environ 90 % de la production mondiale de bitume issu du pétrole ?',
            options: [
              'La construction routière',
              'La fabrication de médicaments injectables',
              'L’alimentation des moteurs d’avions à réaction',
              'La fabrication de bouteilles d’eau minérale',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le bitume, coupe lourde du raffinage, sert à 90 % pour le revêtement et la construction des routes.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Classification',
          stepTheme: 'Tri de substances',
          stepTitle: 'Distinguer dérivés du pétrole et produits minéraux',
          paragraphText:
            'Dans un tableau de tri (Exercice 3), les carburants (essence, gasoil, carburant turboréacteur), gaz (butane, propane), alcènes (éthylène) et bitumes dérivent du pétrole, contrairement aux acides minéraux ($\\mathrm{H_2SO_4}$, $\\mathrm{HNO_3}$).',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q4',
            type: 'mcq',
            prompt: 'Parmi les produits suivants, lequel N’EST PAS un produit dérivé du pétrole ?',
            options: [
              'L’acide nitrique ($\\mathrm{HNO_3}$)',
              'Le gasoil',
              'Le carburant turboréacteur (kérosène)',
              'Le bitume',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’acide nitrique (tout comme l’acide sulfurique ou l’alcool éthylique issu de fermentation) n’est pas un dérivé du pétrole.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Usages variés',
          stepTheme: 'Industrie et agriculture',
          stepTitle: 'Solvants, lubrifiants et produits agricoles',
          paragraphText:
            'Les dérivés pétroliers interviennent aussi dans les huiles de graissage des machines, le dégraissage des métaux par solvants, les détergents, les caoutchoucs, les adhésifs, ainsi que de nombreux engrais, insecticides et produits phytosanitaires.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q5',
            type: 'mcq',
            prompt: 'Quel rôle jouent les dérivés pétroliers utilisés comme solvants dans l’industrie mécanique ?',
            options: [
              'Ils permettent le dégraissage des pièces métalliques',
              'Ils remplacent le fer dans la fabrication de l’acier',
              'Ils servent uniquement à alimenter les centrales nucléaires',
              'Ils augmentent le frottement entre les engrenages',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les solvants dérivés du pétrole dissolvent les graisses et servent notamment au dégraissage des métaux.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confusion gaz/essence',
          stepTitle: 'Ne pas confondre carburant avion et alcool éthylique',
          paragraphText:
            'L’aviation utilise le carburant turboréacteur (kérosène), fraction moyenne issue du pétrole brut. En revanche, l’alcool éthylique (éthanol) issu de la fermentation végétale n’est pas classé parmi les produits dérivés du pétrole dans l’exercice du cours.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q6',
            type: 'mcq',
            prompt: 'Quelle liste ne comporte QUE des produits classés comme dérivés du pétrole ?',
            options: [
              'Éthylène, gasoil, bitume, butane',
              'Acide sulfurique, éthanol de fermentation, propane',
              'Acide nitrique, essence, acide sulfurique',
              'Bitume, eau distillée, acide nitrique',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Éthylène, gasoil, bitume et butane proviennent tous du raffinage et de la pétrochimie, alors que les acides sulfurique et nitrique sont des composés minéraux.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q1',
          type: 'mcq',
          prompt: 'Quels hydrocarbures composent principalement le GPL (Gaz de Pétrole Liquéfié) utilisé en bouteille pour la cuisson ?',
          options: [
            'Le butane et le propane',
            'Le bitume et le fioul lourd',
            'L’éthylène et le benzène',
            'Le dioxyde de carbone et le diazote',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les bouteilles de gaz domestique contiennent des GPL, constitués essentiellement de butane et de propane liquéfiés sous pression.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q2',
          type: 'mcq',
          prompt: 'Quelle proportion approximative des matières plastiques et textiles synthétiques (nylon, polyester) est issue de la pétrochimie ?',
          options: [
            'Environ 99 %',
            'Moins de 5 %',
            'Exactement 25 %',
            '0 %, ils viennent uniquement du bois',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Environ 99 % des matières plastiques et textiles synthétiques proviennent des transformations pétrochimiques issues du pétrole.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q3',
          type: 'mcq',
          prompt: 'À quel secteur d’activité sont destinés environ 90 % de la production mondiale de bitume issu du pétrole ?',
          options: [
            'La construction routière',
            'La fabrication de médicaments injectables',
            'L’alimentation des moteurs d’avions à réaction',
            'La fabrication de bouteilles d’eau minérale',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le bitume, coupe lourde du raffinage, sert à 90 % pour le revêtement et la construction des routes.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q4',
          type: 'mcq',
          prompt: 'Parmi les produits suivants, lequel N’EST PAS un produit dérivé du pétrole ?',
          options: [
            'L’acide nitrique ($\\mathrm{HNO_3}$)',
            'Le gasoil',
            'Le carburant turboréacteur (kérosène)',
            'Le bitume',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’acide nitrique (tout comme l’acide sulfurique ou l’alcool éthylique issu de fermentation) n’est pas un dérivé du pétrole.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q5',
          type: 'mcq',
          prompt: 'Quel rôle jouent les dérivés pétroliers utilisés comme solvants dans l’industrie mécanique ?',
          options: [
            'Ils permettent le dégraissage des pièces métalliques',
            'Ils remplacent le fer dans la fabrication de l’acier',
            'Ils servent uniquement à alimenter les centrales nucléaires',
            'Ils augmentent le frottement entre les engrenages',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les solvants dérivés du pétrole dissolvent les graisses et servent notamment au dégraissage des métaux.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p05_q6',
          type: 'mcq',
          prompt: 'Quelle liste ne comporte QUE des produits classés comme dérivés du pétrole ?',
          options: [
            'Éthylène, gasoil, bitume, butane',
            'Acide sulfurique, éthanol de fermentation, propane',
            'Acide nitrique, essence, acide sulfurique',
            'Bitume, eau distillée, acide nitrique',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Éthylène, gasoil, bitume et butane proviennent tous du raffinage et de la pétrochimie, alors que les acides sulfurique et nitrique sont des composés minéraux.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Impact environnemental et épuisement des réserves
    // ========================================================================
    {
      id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06',
      order: 6,
      title: 'Impact environnemental et gestion des réserves pétrolières',
      summary:
        'Analyser les pollutions liées au transport, à la combustion et aux produits pétrochimiques ainsi que les enjeux liés à la surconsommation d’une ressource fossile limitée.',
      conceptExplanation:
        "L’exploitation massive du pétrole et de ses dérivés engendre de graves conséquences écologiques et pose le problème de l’épuisement des réserves :\n\n1. **Pollution lors du transport** : les accidents de pétroliers ou fuites d’oléoducs provoquent des **marées noires**, détruisant durablement la faune et la flore marines et littorales.\n2. **Pollution atmosphérique due aux combustibles** : la combustion des carburants et du fioul libère d’importantes quantités de **dioxyde de carbone ($\\mathrm{CO_2}$)**, principal gaz à effet de serre responsable du réchauffement climatique (et altération des équilibres atmosphériques), ainsi que des oxydes d’azote et de soufre.\n3. **Pollution des sols et des eaux** : les insecticides, produits phytosanitaires et plastiques non biodégradables issus de la pétrochimie appauvrissent les sols et contaminent durablement l’environnement.\n4. **Épuisement d’une ressource finie** : la consommation mondiale dépasse le rythme naturel de formation géologique, conduisant à la diminution progressive des réserves connues.",
      keyRule:
        'Le pétrole génère des marées noires lors du transport, des gaz à effet de serre (CO₂) lors de la combustion, et des pollutions durables des sols par les plastiques et pesticides.',
      formulas: [
        {
          name: 'Impact de la combustion des hydrocarbures',
          formula: '\\text{Hydrocarbure} + \\mathrm{O_2} \\longrightarrow \\mathrm{CO_2} \\text{ (effet de serre)} + \\mathrm{H_2O}',
        },
      ],
      workedExample: {
        title: 'Analyser l’impact environnemental des dérivés pétroliers (Exercice 2 p. 3)',
        statement:
          'Cite trois impacts écologiques majeurs liés à l’exploitation, au transport et à l’utilisation des produits dérivés du pétrole.',
        methodSteps: [
          '1) Lors du transport maritime : risque de marées noires souillant les océans et détruisant les écosystèmes côtiers.',
          '2) Lors de l’usage des combustibles (carburants, fioul) : rejet massif de CO₂ augmentant l’effet de serre et le dérèglement climatique.',
          '3) Lors de l’usage agricole ou industriel : pollution et appauvrissement des sols par les insecticides et produits phytosanitaires pétrochimiques, ainsi que par les déchets plastiques.',
        ],
        conclusion:
          'La transition vers les énergies renouvelables et la réduction des déchets plastiques deviennent indispensables.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Transport',
          stepTheme: 'Pollution marine',
          stepTitle: 'Les marées noires',
          paragraphText:
            'Un naufrage de pétrolier ou une fuite sur une plateforme ou un oléoduc déverse des milliers de tonnes de pétrole brut dans les océans : ce phénomène catastrophique s’appelle une marée noire.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q1',
            type: 'mcq',
            prompt: 'Quelle catastrophe écologique résulte directement d’un mauvais transport ou d’un déversement accidentel de pétrole brut en mer ?',
            options: [
              'Une marée noire',
              'Une pluie acide purement minérale',
              'Une éruption volcanique sous-marine',
              'Une marée verte d’eau douce',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le déversement accidentel de pétrole brut lors du transport maritime entraîne des marées noires qui asphyxient la vie marine.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Atmosphère',
          stepTheme: 'Combustion',
          stepTitle: 'Rôle des combustibles dans l’effet de serre',
          paragraphText:
            'La combustion des carburants (essence, gasoil, kérosène) et du fioul rejette du dioxyde de carbone ($\\mathrm{CO_2}$), qui s’accumule dans l’atmosphère et amplifie l’effet de serre et le réchauffement climatique.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q2',
            type: 'mcq',
            prompt: 'Quel gaz issu de la combustion complète des carburants pétroliers contribue majoritairement à l’effet de serre ?',
            options: [
              'Le dioxyde de carbone ($\\mathrm{CO_2}$)',
              'Le diazote ($\\mathrm{N_2}$)',
              'L’argon ($\\mathrm{Ar}$)',
              'Le dihydrogène ($\\mathrm{H_2}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Toute combustion d’hydrocarbures produit du dioxyde de carbone ($\\mathrm{CO_2}$), principal gaz à effet de serre d’origine anthropique.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Sols et eaux',
          stepTheme: 'Pétrochimie agricole',
          stepTitle: 'Impact des insecticides et phytosanitaires',
          paragraphText:
            'Comme le rappelle l’Exercice 2 du cours, les insecticides et produits phytosanitaires issus de la pétrochimie s’infiltrent dans l’environnement, polluent les nappes et appauvrissent la biodiversité des sols.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q3',
            type: 'mcq',
            prompt: 'Quel impact écologique provoquent les insecticides et produits phytosanitaires dérivés du pétrole lorsqu’ils sont utilisés en excès ?',
            options: [
              'Ils polluent l’environnement et appauvrissent les sols',
              'Ils forment directement du pétrole neuf sous les racines',
              'Ils neutralisent tout le dioxyde de carbone atmosphérique',
              'Ils disparaissent instantanément sans laisser de traces',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Ces composés persistants contaminent les sols, altèrent leur microfaune et polluent les eaux de ruissellement.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Raréfaction',
          stepTheme: 'Surconsommation',
          stepTitle: 'Pourquoi les réserves mondiales s’épuisent-elles ?',
          paragraphText:
            'D’après le document d’analyse du cours, la consommation mondiale dépasse aujourd’hui le renouvellement naturel (nul à l’échelle humaine) et l’extraction peine à suivre la demande à long terme, menant à l’épuisement futur des gisements.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q4',
            type: 'mcq',
            prompt: 'Quelle affirmation résume correctement la situation des réserves mondiales de pétrole évoquée en documentation ?',
            options: [
              'Le pétrole est surconsommé : ses réserves ne sont pas illimitées et diminueront jusqu’à épuisement',
              'Le pétrole se reforme aussi vite qu’on le pompe dans les gisements',
              'La consommation mondiale de pétrole est devenue nulle depuis 1995',
              'Les réserves sont inépuisables car le pétrole provient de l’eau de mer pure',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La formation du pétrole prenant des millions d’années, la surexploitation actuelle épuise progressivement les réserves existantes.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Plastiques',
          stepTheme: 'Déchets pétrochimiques',
          stepTitle: 'Pollution par les matières plastiques',
          paragraphText:
            'Omniprésents dans les emballages, les sachets et les objets du quotidien, les plastiques issus de la pétrochimie mettent des siècles à se dégrader dans la nature s’ils ne sont pas collectés et recyclés.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q5',
            type: 'mcq',
            prompt: 'Quel geste citoyen limite le plus efficacement la pollution liée aux emballages plastiques dérivés du pétrole ?',
            options: [
              'Réduire leur usage, les trier et favoriser le recyclage ou les matériaux biodégradables',
              'Les jeter dans les cours d’eau pour les diluer',
              'Les brûler à l’air libre dans les quartiers habités',
              'Les enfouir dans les champs agricoles pour fertiliser la terre',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La réduction à la source, le tri et le recyclage évitent l’accumulation de plastiques persistants dans les sols et les océans et économisent du pétrole.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Nuance scientifique',
          stepTheme: 'Ozone vs effet de serre',
          stepTitle: 'Ne pas confondre CO₂ (effet de serre) et fréons (ozone)',
          paragraphText:
            'Attention à la rigueur scientifique : le dioxyde de carbone ($\\mathrm{CO_2}$) produit par la combustion des carburants est responsable du renforcement de l’**effet de serre** (réchauffement climatique), tandis que ce sont certains dérivés halogénés chlorés/fluorés (fréons, CFC) qui détruisent directement la couche d’ozone stratosphérique.',
          exercise: {
            id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q6',
            type: 'mcq',
            prompt: 'Quelle distinction scientifique est exacte concernant les polluants gazeux ?',
            options: [
              'Le CO₂ renforce principalement l’effet de serre, alors que les fréons (CFC) attaquent directement la couche d’ozone',
              'Le CO₂ est le seul responsable des trous dans la couche d’ozone sans aucun effet sur le climat',
              'La couche d’ozone et l’effet de serre désignent exactement le même gaz polluant liquide',
              'La combustion des alcanes libère du dioxygène pur qui refroidit l’atmosphère',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le CO₂ piège le rayonnement infrarouge (effet de serre), tandis que les CFC libèrent des radicaux chlore détruisant l’ozone stratosphérique.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q1',
          type: 'mcq',
          prompt: 'Quelle catastrophe écologique résulte directement d’un mauvais transport ou d’un déversement accidentel de pétrole brut en mer ?',
          options: [
            'Une marée noire',
            'Une pluie acide purement minérale',
            'Une éruption volcanique sous-marine',
            'Une marée verte d’eau douce',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le déversement accidentel de pétrole brut lors du transport maritime entraîne des marées noires qui asphyxient la vie marine.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q2',
          type: 'mcq',
          prompt: 'Quel gaz issu de la combustion complète des carburants pétroliers contribue majoritairement à l’effet de serre ?',
          options: [
            'Le dioxyde de carbone ($\\mathrm{CO_2}$)',
            'Le diazote ($\\mathrm{N_2}$)',
            'L’argon ($\\mathrm{Ar}$)',
            'Le dihydrogène ($\\mathrm{H_2}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Toute combustion d’hydrocarbures produit du dioxyde de carbone ($\\mathrm{CO_2}$), principal gaz à effet de serre d’origine anthropique.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q3',
          type: 'mcq',
          prompt: 'Quel impact écologique provoquent les insecticides et produits phytosanitaires dérivés du pétrole lorsqu’ils sont utilisés en excès ?',
          options: [
            'Ils polluent l’environnement et appauvrissent les sols',
            'Ils forment directement du pétrole neuf sous les racines',
            'Ils neutralisent tout le dioxyde de carbone atmosphérique',
            'Ils disparaissent instantanément sans laisser de traces',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Ces composés persistants contaminent les sols, altèrent leur microfaune et polluent les eaux de ruissellement.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q4',
          type: 'mcq',
          prompt: 'Quelle affirmation résume correctement la situation des réserves mondiales de pétrole évoquée en documentation ?',
          options: [
            'Le pétrole est surconsommé : ses réserves ne sont pas illimitées et diminueront jusqu’à épuisement',
            'Le pétrole se reforme aussi vite qu’on le pompe dans les gisements',
            'La consommation mondiale de pétrole est devenue nulle depuis 1995',
            'Les réserves sont inépuisables car le pétrole provient de l’eau de mer pure',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La formation du pétrole prenant des millions d’années, la surexploitation actuelle épuise progressivement les réserves existantes.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q5',
          type: 'mcq',
          prompt: 'Quel geste citoyen limite le plus efficacement la pollution liée aux emballages plastiques dérivés du pétrole ?',
          options: [
            'Réduire leur usage, les trier et favoriser le recyclage ou les matériaux biodégradables',
            'Les jeter dans les cours d’eau pour les diluer',
            'Les brûler à l’air libre dans les quartiers habités',
            'Les enfouir dans les champs agricoles pour fertiliser la terre',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La réduction à la source, le tri et le recyclage évitent l’accumulation de plastiques persistants dans les sols et les océans et économisent du pétrole.',
        },
        {
          id: 'premiere_c_chimie_l01_petrole_gaz_naturels_p06_q6',
          type: 'mcq',
          prompt: 'Quelle distinction scientifique est exacte concernant les polluants gazeux ?',
          options: [
            'Le CO₂ renforce principalement l’effet de serre, alors que les fréons (CFC) attaquent directement la couche d’ozone',
            'Le CO₂ est le seul responsable des trous dans la couche d’ozone sans aucun effet sur le climat',
            'La couche d’ozone et l’effet de serre désignent exactement le même gaz polluant liquide',
            'La combustion des alcanes libère du dioxygène pur qui refroidit l’atmosphère',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le CO₂ piège le rayonnement infrarouge (effet de serre), tandis que les CFC libèrent des radicaux chlore détruisant l’ozone stratosphérique.',
        },
      ],
    },
  ],
};
