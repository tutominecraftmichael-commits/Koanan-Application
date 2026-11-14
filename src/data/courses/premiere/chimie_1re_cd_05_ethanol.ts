import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CD - Chimie Organique - L’éthanol » (format v2).
export const CHIMIE_1RE_CD_L05_ETHANOL: CurriculumChapter = {
  id: 'premiere_c_chimie_l05_ethanol',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 5,
  title: 'Leçon 5 : L’éthanol',
  summary:
    'Préparation de l’éthanol (fermentation des jus sucrés et hydratation de l’éthylène), combustion complète, expérience de la lampe sans flamme, oxydation ménagée en éthanal et acide éthanoïque, et risques liés à l’alcool.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: '1ères CD - Chimie Organique : L’éthanol.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Obtention de l’éthanol (fermentation et hydratation)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l05_ethanol_p01',
      order: 1,
      title: 'Obtention de l’éthanol : fermentation et hydratation',
      summary:
        'Expliquer les deux voies de préparation de l’éthanol (fermentation enzymatique du glucose et hydratation industrielle de l’éthylène) avec leurs équations-bilans.',
      conceptExplanation:
        "L’**éthanol** (ou alcool éthylique) est un alcool primaire de formule brute $\\mathrm{C_2H_6O}$ (formule semi-développée $\\mathrm{CH_3-CH_2-OH}$, masse molaire $M = 46\\text{ g/mol}$). On l’obtient principalement par deux procédés :\n\n1. **Par fermentation alcoolique des jus sucrés** (fabrication du vin, de la bière, du vin de palme ou du *« Koutoukou »*) : sous l’action d’**enzymes** (levures), le glucose contenu dans les fruits, grains ou sèves se transforme en éthanol avec dégagement de dioxyde de carbone :\n   $$\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$$\n2. **Par hydratation de l’éthylène (voie pétrochimique industrielle)** : l’addition d’eau sur l’éthylène ($\\mathrm{C_2H_4}$) en présence d’**acide sulfurique ($\\mathrm{H_2SO_4}$) comme catalyseur** fournit directement de l’éthanol :\n   $$\\mathrm{CH_2=CH_2 + H_2O \\xrightarrow{H_2SO_4} CH_3-CH_2-OH}$$",
      keyRule:
        'L’éthanol CH₃–CH₂–OH (M = 46 g/mol) s’obtient par fermentation enzymatique du glucose (C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂) ou par hydratation catalytique de l’éthylène en présence de H₂SO₄.',
      formulas: [
        {
          name: 'Fermentation alcoolique du glucose',
          formula: '\\mathrm{C_6H_{12}O_6 \\xrightarrow{\\text{enzymes}} 2\\,C_2H_5OH + 2\\,CO_2}',
          note: '1 mole de glucose donne 2 moles d’éthanol et 2 moles de CO₂',
        },
        {
          name: 'Hydratation catalytique de l’éthylène',
          formula: '\\mathrm{CH_2=CH_2 + H_2O \\xrightarrow{H_2SO_4} CH_3-CH_2-OH}',
          note: 'L’acide sulfurique joue le rôle de catalyseur',
        },
      ],
      workedExample: {
        title: 'Calculer la masse d’éthanol produite par fermentation (application directe)',
        statement:
          'On fait fermenter complètement $180\\text{ g}$ de glucose ($M(\\mathrm{C_6H_{12}O_6}) = 180\\text{ g/mol}$). Quelle quantité de matière et quelle masse d’éthanol ($M = 46\\text{ g/mol}$) obtient-on théoriquement ?',
        methodSteps: [
          '1) Quantité de glucose initiale : n(glucose) = 180 / 180 = 1 mol.',
          '2) Bilan molaire de l’équation C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ : n(éthanol) = 2 × n(glucose) = 2 mol.',
          '3) Masse d’éthanol formée : m = 2 × 46 = 92 g.',
        ],
        conclusion:
          'La fermentation complète de 180 g de glucose libère 92 g d’éthanol (et 88 g de CO₂).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Identité',
          stepTheme: 'Formule & masse molaire',
          stepTitle: 'Formule et classe chimique de l’éthanol',
          paragraphText:
            'L’éthanol CH₃–CH₂–OH a pour formule brute C₂H₆O et une masse molaire de 46 g/mol ; son carbone fonctionnel étant lié à un seul autre carbone, c’est un alcool primaire.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p01_q1',
            type: 'mcq',
            prompt: 'Un alcool saturé $\\mathrm{C_nH_{2n+2}O}$ a pour masse molaire $M = 46\\text{ g/mol}$. Quelle est sa formule brute et sa classe ?',
            options: [
              '$\\mathrm{C_2H_6O}$ (éthanol), alcool primaire',
              '$\\mathrm{CH_4O}$ (méthanol), alcool secondaire',
              '$\\mathrm{C_3H_8O}$ (propan-2-ol), alcool secondaire',
              '$\\mathrm{C_2H_4O_2}$ (acide éthanoïque)',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$14n + 18 = 46 \\implies 14n = 28 \\implies n = 2$, soit $\\mathrm{C_2H_6O}$ ($\\mathrm{CH_3-CH_2-OH}$). Le carbone portant –OH est lié à un seul C : alcool primaire.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Fermentation',
          stepTheme: 'Jus sucrés',
          stepTitle: 'Équation-bilan de la fermentation du glucose',
          paragraphText:
            'La fermentation des jus sucrés (vin de palme, jus de fruits) transforme le glucose C₆H₁₂O₆ en éthanol et dioxyde de carbone sous l’action d’enzymes.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p01_q2',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de la fermentation alcoolique du glucose ?',
            options: [
              '$\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$',
              '$\\mathrm{C_6H_{12}O_6 + 6\\,O_2 \\longrightarrow 6\\,CO_2 + 6\\,H_2O}$',
              '$\\mathrm{C_6H_{12}O_6 \\longrightarrow 3\\,C_2H_5OH + CO_2}$',
              '$\\mathrm{C_2H_4 + H_2O \\longrightarrow C_2H_5OH}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Conservation des atomes : 6 C = 2×2 + 2×1 ; 12 H = 2×6 ; 6 O = 2×1 + 2×2. L’équation C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ est exactement équilibrée.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Voie industrielle',
          stepTheme: 'Hydratation de C₂H₄',
          stepTitle: 'Préparer l’éthanol à partir de l’éthylène',
          paragraphText:
            'Industriellement, l’éthanol est synthétisé par hydratation de l’éthylène (CH₂=CH₂ + H₂O) en présence d’acide sulfurique (H₂SO₄) jouant le rôle de catalyseur.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p01_q3',
            type: 'mcq',
            prompt: 'Quel réactif et quel catalyseur permettent de synthétiser industriellement l’éthanol par hydratation ?',
            options: [
              'L’éthylène ($\\mathrm{C_2H_4}$) et l’eau en présence d’acide sulfurique ($\\mathrm{H_2SO_4}$)',
              'L’éthane ($\\mathrm{C_2H_6}$) et l’eau à l’obscurité',
              'L’acétylène ($\\mathrm{C_2H_2}$) et l’eau en présence de $\\mathrm{Hg^{2+}}$',
              'Le méthane et le dioxygène sur cuivre',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’hydratation de l’éthylène catalysée par H₂SO₄ donne l’éthanol (alors que l’hydratation de l’acétylène sur Hg²⁺ donne l’éthanal).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Bilan gaz',
          stepTheme: 'Gaz dégagé',
          stepTitle: 'Identifier le gaz issu de la fermentation',
          paragraphText:
            'Lors de la fermentation du jus sucré (ex. vin de palme pour le koutoukou), il se forme autant de moles de gaz dioxyde de carbone CO₂ que de moles d’éthanol.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p01_q4',
            type: 'mcq',
            prompt: 'Quel gaz se dégage lors de la fermentation alcoolique d’un jus sucré ?',
            options: [
              'Le dioxyde de carbone ($\\mathrm{CO_2}$)',
              'Le dihydrogène ($\\mathrm{H_2}$)',
              'Le dioxygène ($\\mathrm{O_2}$)',
              'Le méthane ($\\mathrm{CH_4}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La fermentation décarboxyle partiellement le glucose en formant 2 moles de CO₂ par mole de glucose fermenté (trouble l’eau de chaux).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège classique',
          stepTheme: 'Rôle de l’enzyme et de H₂SO₄',
          stepTitle: 'Ne pas confondre enzymes de fermentation et catalyseur acide',
          paragraphText:
            'Les enzymes (levures) assurent la voie biologique (fermentation du glucose), tandis que H₂SO₄ catalyse la voie chimique (hydratation de l’éthylène).',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p01_q5',
            type: 'mcq',
            prompt: 'Quel est le rôle des levures (enzymes) lors de la transformation du vin de palme en boisson alcoolisée ?',
            options: [
              'Elles catalysent biologiquement la transformation du glucose en éthanol et $\\mathrm{CO_2}$',
              'Elles apportent les atomes de carbone qui fabriquent le glucose',
              'Elles oxydent l’éthanol en dioxyde de carbone et eau par combustion',
              'Elles remplacent l’éthylène lors de la synthèse industrielle',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les enzymes des levures permettent la fermentation anaérobie du glucose C₆H₁₂O₆ en éthanol et dioxyde de carbone.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Calcul stœchiométrique',
          stepTheme: 'Fermentation',
          stepTitle: 'Calculer une quantité d’éthanol produite',
          paragraphText:
            'Une mole de glucose (180 g) produit toujours 2 moles d’éthanol (92 g) et 2 moles de CO₂ selon C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p01_q6',
            type: 'mcq',
            prompt: 'Quelle quantité de matière maximale d’éthanol peut-on obtenir par fermentation complète de $0{,}5\\text{ mol}$ de glucose ?',
            options: [
              '$1{,}0\\text{ mol}$ d’éthanol',
              '$0{,}5\\text{ mol}$ d’éthanol',
              '$0{,}25\\text{ mol}$ d’éthanol',
              '$2{,}0\\text{ mol}$ d’éthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'D’après les coefficients stœchiométriques (1 glucose → 2 éthanol), 0,5 mol de glucose produisent 2 × 0,5 = 1,0 mol d’éthanol.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l05_ethanol_p01_q1',
          type: 'mcq',
          prompt: 'Un alcool saturé $\\mathrm{C_nH_{2n+2}O}$ a pour masse molaire $M = 46\\text{ g/mol}$. Quelle est sa formule brute et sa classe ?',
          options: [
            '$\\mathrm{C_2H_6O}$ (éthanol), alcool primaire',
            '$\\mathrm{CH_4O}$ (méthanol), alcool secondaire',
            '$\\mathrm{C_3H_8O}$ (propan-2-ol), alcool secondaire',
            '$\\mathrm{C_2H_4O_2}$ (acide éthanoïque)',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$14n + 18 = 46 \\implies 14n = 28 \\implies n = 2$, soit $\\mathrm{C_2H_6O}$ ($\\mathrm{CH_3-CH_2-OH}$). Le carbone portant –OH est lié à un seul C : alcool primaire.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p01_q2',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de la fermentation alcoolique du glucose ?',
          options: [
            '$\\mathrm{C_6H_{12}O_6 \\longrightarrow 2\\,C_2H_5OH + 2\\,CO_2}$',
            '$\\mathrm{C_6H_{12}O_6 + 6\\,O_2 \\longrightarrow 6\\,CO_2 + 6\\,H_2O}$',
            '$\\mathrm{C_6H_{12}O_6 \\longrightarrow 3\\,C_2H_5OH + CO_2}$',
            '$\\mathrm{C_2H_4 + H_2O \\longrightarrow C_2H_5OH}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Conservation des atomes : 6 C = 2×2 + 2×1 ; 12 H = 2×6 ; 6 O = 2×1 + 2×2. L’équation C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ est exactement équilibrée.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p01_q3',
          type: 'mcq',
          prompt: 'Quel réactif et quel catalyseur permettent de synthétiser industriellement l’éthanol par hydratation ?',
          options: [
            'L’éthylène ($\\mathrm{C_2H_4}$) et l’eau en présence d’acide sulfurique ($\\mathrm{H_2SO_4}$)',
            'L’éthane ($\\mathrm{C_2H_6}$) et l’eau à l’obscurité',
            'L’acétylène ($\\mathrm{C_2H_2}$) et l’eau en présence de $\\mathrm{Hg^{2+}}$',
            'Le méthane et le dioxygène sur cuivre',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’hydratation de l’éthylène catalysée par H₂SO₄ donne l’éthanol (alors que l’hydratation de l’acétylène sur Hg²⁺ donne l’éthanal).',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p01_q4',
          type: 'mcq',
          prompt: 'Quel gaz se dégage lors de la fermentation alcoolique d’un jus sucré ?',
          options: [
            'Le dioxyde de carbone ($\\mathrm{CO_2}$)',
            'Le dihydrogène ($\\mathrm{H_2}$)',
            'Le dioxygène ($\\mathrm{O_2}$)',
            'Le méthane ($\\mathrm{CH_4}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La fermentation décarboxyle partiellement le glucose en formant 2 moles de CO₂ par mole de glucose fermenté (trouble l’eau de chaux).',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p01_q5',
          type: 'mcq',
          prompt: 'Quel est le rôle des levures (enzymes) lors de la transformation du vin de palme en boisson alcoolisée ?',
          options: [
            'Elles catalysent biologiquement la transformation du glucose en éthanol et $\\mathrm{CO_2}$',
            'Elles apportent les atomes de carbone qui fabriquent le glucose',
            'Elles oxydent l’éthanol en dioxyde de carbone et eau par combustion',
            'Elles remplacent l’éthylène lors de la synthèse industrielle',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les enzymes des levures permettent la fermentation anaérobie du glucose C₆H₁₂O₆ en éthanol et dioxyde de carbone.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p01_q6',
          type: 'mcq',
          prompt: 'Quelle quantité de matière maximale d’éthanol peut-on obtenir par fermentation complète de $0{,}5\\text{ mol}$ de glucose ?',
          options: [
            '$1{,}0\\text{ mol}$ d’éthanol',
            '$0{,}5\\text{ mol}$ d’éthanol',
            '$0{,}25\\text{ mol}$ d’éthanol',
            '$2{,}0\\text{ mol}$ d’éthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'D’après les coefficients stœchiométriques (1 glucose → 2 éthanol), 0,5 mol de glucose produisent 2 × 0,5 = 1,0 mol d’éthanol.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Combustion complète de l’éthanol et bilans quantitatifs
    // ========================================================================
    {
      id: 'premiere_c_chimie_l05_ethanol_p02',
      order: 2,
      title: 'Combustion complète de l’éthanol et bilans molaires',
      summary:
        'Équilibrer l’équation-bilan de combustion complète de l’éthanol dans O₂, comprendre qu’elle détruit la chaîne carbonée et calculer volumes et masses des réactifs et produits.',
      conceptExplanation:
        "L’éthanol brûle facilement dans le dioxygène de l’air (flamme bleutée peu fuligineuse). Lors de cette **combustion complète**, la chaîne carbonée à 2 atomes de carbone est entièrement **détruite** pour former du dioxyde de carbone ($\\mathrm{CO_2}$) et de l’eau ($\\mathrm{H_2O}$) :\n\n$$\\mathrm{CH_3-CH_2-OH + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$$\n\n- **Vérification des coefficients** :\n  - Carbone : $2$ dans $\\mathrm{C_2H_6O} \\implies 2\\,\\mathrm{CO_2}$.\n  - Hydrogène : $6$ dans $\\mathrm{C_2H_6O} \\implies 3\\,\\mathrm{H_2O}$.\n  - Oxygène : à droite $2\\times 2 + 3\\times 1 = 7$ atomes O ; comme l’éthanol en apporte déjà **$1$**, $\\mathrm{O_2}$ n’en fournit que $7 - 1 = 6$, d’où le coefficient **$3\\,\\mathrm{O_2}$**.\n- **Bilan molaire général** :\n  $$n(\\mathrm{C_2H_6O}) = \\frac{n(\\mathrm{O_2})}{3} = \\frac{n(\\mathrm{CO_2})}{2} = \\frac{n(\\mathrm{H_2O})}{3}$$",
      keyRule:
        'Équation de combustion complète de l’éthanol : C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O (n’oublie pas l’atome O déjà présent dans la molécule d’éthanol !).',
      formulas: [
        {
          name: 'Combustion complète et bilan molaire',
          formula: '\\mathrm{C_2H_6O + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O} \\implies n_{\\text{éthanol}} = \\frac{n_{\\mathrm{O_2}}}{3} = \\frac{n_{\\mathrm{CO_2}}}{2} = \\frac{n_{\\mathrm{H_2O}}}{3}',
          note: 'Permet de relier immédiatement m(éthanol), V(O₂), m(CO₂) et m(H₂O)',
        },
      ],
      workedExample: {
        title: 'Combustion complète de 4,5 g d’éthanol (Exercice 5 p. 5)',
        statement:
          'On réalise la combustion complète de $m = 4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) dans le dioxygène ($V_m = 22{,}4\\text{ L/mol}$). Calcule le volume $V_{\\mathrm{O_2}}$ nécessaire ainsi que les masses $m_{\\mathrm{CO_2}}$ ($M = 44\\text{ g/mol}$) et $m_{\\mathrm{H_2O}}$ ($M = 18\\text{ g/mol}$) obtenues.',
        methodSteps: [
          '1) Bilan pour O₂ : V(O₂) = (3 × Vm × m) / M(éthanol) = (3 × 22,4 × 4,5) / 46 ≈ 6,57 L.',
          '2) Masse de CO₂ : m(CO₂) = (2 × m / 46) × 44 = (2 × 4,5 × 44) / 46 ≈ 8,61 g.',
          '3) Masse de H₂O : m(H₂O) = (3 × m / 46) × 18 = (3 × 4,5 × 18) / 46 ≈ 5,28 g.',
        ],
        conclusion:
          'La combustion complète de 4,5 g d’éthanol consomme 6,57 L de O₂ et produit 8,61 g de CO₂ et 5,28 g d’eau.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Équation-bilan',
          stepTheme: 'Équilibrage',
          stepTitle: 'Équilibrer la combustion complète de l’éthanol',
          paragraphText:
            'Dans C₂H₆O + a O₂ → b CO₂ + c H₂O, l’atome O déjà contenu dans C₂H₆O intervient dans le décompte de l’oxygène : 1 + 2a = 2b + c = 7, donc a = 3.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p02_q1',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de la combustion complète de l’éthanol dans le dioxygène ?',
            options: [
              '$\\mathrm{C_2H_5OH + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$',
              '$2\\,\\mathrm{C_2H_5OH + 7\\,O_2 \\longrightarrow 4\\,CO_2 + 6\\,H_2O}$',
              '$\\mathrm{C_2H_5OH + 2\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$',
              '$\\mathrm{C_2H_5OH + 3\\,O_2 \\longrightarrow 2\\,CO + 3\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'À droite, 2 CO₂ + 3 H₂O totalisent 7 atomes O ; C₂H₅OH en fournit déjà 1, donc 3 O₂ apportent les 6 restants.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège classique',
          stepTheme: 'Oubli du O de l’alcool',
          stepTitle: 'Erreur fréquente entre éthane et éthanol !',
          paragraphText:
            'Une mole d’éthane C₂H₆ exige 3,5 mol de O₂ (soit 7/2 O₂), tandis qu’une mole d’éthanol C₂H₆O n’exige que 3 mol de O₂ car la molécule apporte déjà un atome O.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p02_q2',
            type: 'mcq',
            prompt: 'Combien de moles de dioxygène $\\mathrm{O_2}$ consomme la combustion complète d’une mole d’éthanol ?',
            options: [
              '$3\\text{ mol}$ de $\\mathrm{O_2}$',
              '$3{,}5\\text{ mol}$ de $\\mathrm{O_2}$',
              '$2\\text{ mol}$ de $\\mathrm{O_2}$',
              '$5\\text{ mol}$ de $\\mathrm{O_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’éthane C₂H₆ demande 3,5 mol de O₂, mais l’éthanol C₂H₆O possède déjà un atome O : il consomme donc 3 mol de O₂.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Volume de O₂',
          stepTheme: 'Exercice 5 p. 5',
          stepTitle: 'Calculer le volume de dioxygène nécessaire',
          paragraphText:
            'Comme n(O₂) = 3 × n(éthanol), le volume de O₂ vaut V(O₂) = 3 × (m / 46) × Vm.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p02_q3',
            type: 'mcq',
            prompt: 'Quel volume de dioxygène ($V_m = 22{,}4\\text{ L/mol}$) est nécessaire à la combustion complète de $4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) ?',
            options: [
              '$6{,}57\\text{ L}$',
              '$2{,}19\\text{ L}$',
              '$4{,}38\\text{ L}$',
              '$13{,}1\\text{ L}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$V_{\\mathrm{O_2}} = \\frac{3 \\times 22{,}4 \\times 4{,}5}{46} = \\frac{302{,}4}{46} \\approx 6{,}57\\text{ L}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Masse de CO₂',
          stepTheme: 'Exercice 5 p. 5',
          stepTitle: 'Calculer la masse de dioxyde de carbone dégagée',
          paragraphText:
            'Puisque n(CO₂) = 2 × n(éthanol), on a m(CO₂) = 2 × (m / 46) × 44.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p02_q4',
            type: 'mcq',
            prompt: 'Quelle masse de dioxyde de carbone ($M = 44\\text{ g/mol}$) se forme lors de la combustion complète de $4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) ?',
            options: [
              '$8{,}61\\text{ g}$',
              '$4{,}30\\text{ g}$',
              '$5{,}28\\text{ g}$',
              '$12{,}9\\text{ g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$m_{\\mathrm{CO_2}} = \\frac{2 \\times 4{,}5 \\times 44}{46} = \\frac{396}{46} \\approx 8{,}61\\text{ g}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Masse d’eau',
          stepTheme: 'Exercice 5 p. 5',
          stepTitle: 'Calculer la masse d’eau produite',
          paragraphText:
            'Puisque n(H₂O) = 3 × n(éthanol), on a m(H₂O) = 3 × (m / 46) × 18.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p02_q5',
            type: 'mcq',
            prompt: 'Quelle masse d’eau ($M = 18\\text{ g/mol}$) produit la combustion complète de $4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) ?',
            options: [
              '$5{,}28\\text{ g}$',
              '$3{,}52\\text{ g}$',
              '$8{,}61\\text{ g}$',
              '$1{,}76\\text{ g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$m_{\\mathrm{H_2O}} = \\frac{3 \\times 4{,}5 \\times 18}{46} = \\frac{243}{46} \\approx 5{,}28\\text{ g}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'definition',
          stepBadge: 'Effet sur la chaîne',
          stepTheme: 'Exercice 3 p. 4',
          stepTitle: 'Conséquence de la combustion sur le squelette carboné',
          paragraphText:
            'Contrairement à l’oxydation ménagée, la combustion complète rompt la liaison C–C de l’éthanol et détruit la chaîne carbonée en formant du CO₂.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p02_q6',
            type: 'mcq',
            prompt: 'Quel est l’effet de la combustion complète sur la chaîne carbonée de l’éthanol ?',
            options: [
              'Elle détruit totalement la chaîne carbonée en donnant $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$',
              'Elle conserve la chaîne carbonée en formant de l’éthanal',
              'Elle transforme la chaîne carbonée en cycle aromatique',
              'Elle allonge la chaîne carbonée de 2 à 4 carbones',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Lors d’une combustion complète, tous les atomes de carbone de l’éthanol sont séparés et oxydés en molécules CO₂ indépendantes.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l05_ethanol_p02_q1',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de la combustion complète de l’éthanol dans le dioxygène ?',
          options: [
            '$\\mathrm{C_2H_5OH + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$',
            '$2\\,\\mathrm{C_2H_5OH + 7\\,O_2 \\longrightarrow 4\\,CO_2 + 6\\,H_2O}$',
            '$\\mathrm{C_2H_5OH + 2\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$',
            '$\\mathrm{C_2H_5OH + 3\\,O_2 \\longrightarrow 2\\,CO + 3\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'À droite, 2 CO₂ + 3 H₂O totalisent 7 atomes O ; C₂H₅OH en fournit déjà 1, donc 3 O₂ apportent les 6 restants.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p02_q2',
          type: 'mcq',
          prompt: 'Combien de moles de dioxygène $\\mathrm{O_2}$ consomme la combustion complète d’une mole d’éthanol ?',
          options: [
            '$3\\text{ mol}$ de $\\mathrm{O_2}$',
            '$3{,}5\\text{ mol}$ de $\\mathrm{O_2}$',
            '$2\\text{ mol}$ de $\\mathrm{O_2}$',
            '$5\\text{ mol}$ de $\\mathrm{O_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’éthane C₂H₆ demande 3,5 mol de O₂, mais l’éthanol C₂H₆O possède déjà un atome O : il consomme donc 3 mol de O₂.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p02_q3',
          type: 'mcq',
          prompt: 'Quel volume de dioxygène ($V_m = 22{,}4\\text{ L/mol}$) est nécessaire à la combustion complète de $4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) ?',
          options: [
            '$6{,}57\\text{ L}$',
            '$2{,}19\\text{ L}$',
            '$4{,}38\\text{ L}$',
            '$13{,}1\\text{ L}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$V_{\\mathrm{O_2}} = \\frac{3 \\times 22{,}4 \\times 4{,}5}{46} = \\frac{302{,}4}{46} \\approx 6{,}57\\text{ L}$.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p02_q4',
          type: 'mcq',
          prompt: 'Quelle masse de dioxyde de carbone ($M = 44\\text{ g/mol}$) se forme lors de la combustion complète de $4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) ?',
          options: [
            '$8{,}61\\text{ g}$',
            '$4{,}30\\text{ g}$',
            '$5{,}28\\text{ g}$',
            '$12{,}9\\text{ g}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$m_{\\mathrm{CO_2}} = \\frac{2 \\times 4{,}5 \\times 44}{46} = \\frac{396}{46} \\approx 8{,}61\\text{ g}$.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p02_q5',
          type: 'mcq',
          prompt: 'Quelle masse d’eau ($M = 18\\text{ g/mol}$) produit la combustion complète de $4{,}5\\text{ g}$ d’éthanol ($M = 46\\text{ g/mol}$) ?',
          options: [
            '$5{,}28\\text{ g}$',
            '$3{,}52\\text{ g}$',
            '$8{,}61\\text{ g}$',
            '$1{,}76\\text{ g}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$m_{\\mathrm{H_2O}} = \\frac{3 \\times 4{,}5 \\times 18}{46} = \\frac{243}{46} \\approx 5{,}28\\text{ g}$.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p02_q6',
          type: 'mcq',
          prompt: 'Quel est l’effet de la combustion complète sur la chaîne carbonée de l’éthanol ?',
          options: [
            'Elle détruit totalement la chaîne carbonée en donnant $\\mathrm{CO_2}$ et $\\mathrm{H_2O}$',
            'Elle conserve la chaîne carbonée en formant de l’éthanal',
            'Elle transforme la chaîne carbonée en cycle aromatique',
            'Elle allonge la chaîne carbonée de 2 à 4 carbones',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Lors d’une combustion complète, tous les atomes de carbone de l’éthanol sont séparés et oxydés en molécules CO₂ indépendantes.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Expérience de la lampe « sans flamme » et tests caractéristiques
    // ========================================================================
    {
      id: 'premiere_c_chimie_l05_ethanol_p03',
      order: 3,
      title: 'La lampe « sans flamme » : expérience et tests d’identification',
      summary:
        'Décrire le montage de la lampe sans flamme (éthanol tiédi, fil de cuivre incandescent catalyseur) et interpréter les tests au réactif de Schiff et au papier pH.',
      conceptExplanation:
        "L’expérience dite de la **lampe « sans flamme »** met en évidence l’**oxydation ménagée** de l’éthanol gazeux par le dioxygène de l’air :\n\n- **Dispositif** : on porte un fil de **cuivre** en spirale à l’incandescence dans la flamme d’un bec Bunsen, puis on l’introduit rapidement dans un bécher contenant un peu d’**éthanol tiédi** (qui libère des vapeurs d’éthanol) ; on place à l’ouverture du papier imbibé de **réactif de Schiff** et du **papier indicateur de pH**.\n- **Observations et interprétations** :\n  1. **Le fil de cuivre reste incandescent sans flamme** : le cuivre joue le rôle de **catalyseur** ; l’incandescence entretenue prouve que la réaction est **très exothermique**.\n  2. **Le papier imbibé de réactif de Schiff rosit (devient rose-violet)** : test caractéristique d’un **aldéhyde**, ici l’**éthanal** ($\\mathrm{CH_3-CHO}$).\n  3. **Le papier pH devient rouge** ($\\mathrm{pH < 7}$) : indique la formation d’un **acide**, ici l’**acide éthanoïque** ($\\mathrm{CH_3-COOH}$).",
      keyRule:
        'Dans la lampe sans flamme, le cuivre incandescent (catalyseur) reste rouge car la réaction est exothermique ; le réactif de Schiff rosit (éthanal) et le papier pH rougit (acide éthanoïque).',
      workedExample: {
        title: 'Interpréter les résultats de la lampe sans flamme',
        statement:
          'Lors de l’expérience de la lampe sans flamme, pourquoi le fil de cuivre ne s’éteint-il pas quand on le retire de la flamme pour le placer au-dessus de l’éthanol tiédi ?',
        methodSteps: [
          '1) Les vapeurs d’éthanol et le dioxygène de l’air réagissent à la surface du fil de cuivre qui agit comme catalyseur.',
          '2) Cette oxydation ménagée libère de la chaleur (réaction exothermique), maintenant le fil de cuivre incandescent sans production de flamme.',
          '3) Les vapeurs dégagées rosissent le réactif de Schiff (éthanal) et rougissent le papier pH (acide éthanoïque).',
        ],
        conclusion:
          'L’expérience prouve à la fois le caractère exothermique de l’oxydation catalytique sur cuivre et la formation successive d’éthanal puis d’acide éthanoïque.',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Montage de la lampe « sans flamme » (oxydation catalytique de l’éthanol)',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Expérience de la lampe sans flamme avec fil de cuivre incandescent, réactif de Schiff et papier pH">
  <rect x="8" y="8" width="344" height="174" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
  <path d="M126,56 L126,162 Q126,168 132,168 L228,168 Q234,168 234,162 L234,56" fill="#FFFFFF" stroke="#334155" stroke-width="2"/>
  <rect x="128" y="138" width="104" height="28" rx="3" fill="#DBEAFE"/>
  <text x="180" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#1E40AF">Éthanol tiédi</text>
  <line x1="180" y1="30" x2="180" y2="74" stroke="#64748B" stroke-width="2"/>
  <path d="M172,74 Q188,80 172,86 Q188,92 172,98 Q188,104 172,110 Q188,116 180,122" fill="none" stroke="#DC2626" stroke-width="3"/>
  <text x="200" y="96" font-size="10" font-weight="700" fill="#B91C1C">Cuivre</text>
  <text x="200" y="108" font-size="9" font-weight="600" fill="#B91C1C">incandescent</text>
  <rect x="18" y="42" width="96" height="36" rx="6" fill="#FCE7F3" stroke="#F472B6" stroke-width="1.2"/>
  <text x="66" y="57" text-anchor="middle" font-size="9.5" font-weight="700" fill="#9D174D">Réactif de Schiff</text>
  <text x="66" y="70" text-anchor="middle" font-size="9" fill="#9D174D">→ devient rose (éthanal)</text>
  <line x1="114" y1="60" x2="144" y2="68" stroke="#DB2777" stroke-width="1.5" stroke-dasharray="3 2"/>
  <rect x="246" y="42" width="98" height="36" rx="6" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.2"/>
  <text x="295" y="57" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991B1B">Papier pH</text>
  <text x="295" y="70" text-anchor="middle" font-size="9" fill="#991B1B">→ devient rouge (acide)</text>
  <line x1="246" y1="60" x2="216" y2="68" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="180" y="23" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0F172A">Lampe « sans flamme » : catalyse exothermique sur cuivre</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Catalyseur',
          stepTheme: 'Rôle du cuivre',
          stepTitle: 'Quel est le rôle du fil de cuivre dans la lampe sans flamme ?',
          paragraphText:
            'Porté à l’incandescence puis maintenu dans les vapeurs d’éthanol et l’air, le fil de cuivre accélère la réaction sans être consommé : c’est un catalyseur.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p03_q1',
            type: 'mcq',
            prompt: 'Quel rôle joue le fil de cuivre dans l’expérience de la lampe « sans flamme » ?',
            options: [
              'Il joue le rôle de catalyseur de l’oxydation ménagée de l’éthanol',
              'Il est le réactif limitant qui se transforme en oxyde de carbone',
              'Il refroidit les vapeurs d’éthanol pour les liquéfier',
              'Il neutralise l’acide formé pour empêcher le papier pH de rougir',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le cuivre accélère l’oxydation des vapeurs d’éthanol par le dioxygène de l’air et reste intact à la fin : il sert de catalyseur.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Thermicité',
          stepTheme: 'Incandescence entretenue',
          stepTitle: 'Que prouve le maintien de l’incandescence du cuivre ?',
          paragraphText:
            'L’oxydation ménagée de l’éthanol libère suffisamment de chaleur pour entretenir la température élevée du fil de cuivre : la réaction est exothermique.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p03_q2',
            type: 'mcq',
            prompt: 'Que révèle le fait que la spirale de cuivre reste incandescente au-dessus de l’éthanol tiédi ?',
            options: [
              'La réaction d’oxydation ménagée sur le cuivre est très exothermique',
              'La réaction est fortement endothermique et absorbe la chaleur de la pièce',
              'Le cuivre subit une combustion complète en fondant dans l’éthanol',
              'La réaction est athermique comme l’estérification',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La chaleur dégagée par la réaction (exothermique) maintient l’incandescence du fil de cuivre sans aucune flamme.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Test de Schiff',
          stepTheme: 'Aldéhyde formé',
          stepTitle: 'Interpréter la coloration rose du réactif de Schiff',
          paragraphText:
            'Le réactif de Schiff (incolore) devient rose-violet au contact d’un aldéhyde : ici, il met en évidence l’éthanal (CH₃–CHO).',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p03_q3',
            type: 'mcq',
            prompt: 'Que met en évidence le rosissement du papier imbibé de réactif de Schiff ?',
            options: [
              'La formation d’un aldéhyde : l’éthanal ($\\mathrm{CH_3-CHO}$)',
              'La formation de dioxyde de carbone ($\\mathrm{CO_2}$)',
              'La présence d’acide sulfurique concentré',
              'La formation d’un alcool tertiaire',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le réactif de Schiff est le test spécifique des aldéhydes ; sa coloration rose révèle ici l’éthanal.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Test pH',
          stepTheme: 'Acide formé',
          stepTitle: 'Interpréter le virage au rouge du papier pH',
          paragraphText:
            'Le papier indicateur de pH vire au rouge (pH < 7), prouvant qu’une fraction de l’éthanal s’est poursuivie en un acide : l’acide éthanoïque (CH₃–COOH).',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p03_q4',
            type: 'mcq',
            prompt: 'Quel produit explique que le papier indicateur de pH devienne rouge ($\\mathrm{pH < 7}$) au-dessus du montage ?',
            options: [
              'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
              'L’éthanal ($\\mathrm{CH_3-CHO}$)',
              'L’éthylène ($\\mathrm{C_2H_4}$)',
              'Le monoxyde de carbone ($\\mathrm{CO}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’éthanal est neutre vis-à-vis du papier pH ; c’est l’acide éthanoïque formé lors de la deuxième étape d’oxydation qui fait rougir le papier pH.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Protocole',
          stepTheme: 'Éthanol tiédi',
          stepTitle: 'Pourquoi tiédit-on légèrement l’éthanol au départ ?',
          paragraphText:
            'Tiédir l’éthanol favorise sa vaporisation afin que ses vapeurs se mélangent au dioxygène de l’air autour de la spirale de cuivre chaude.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p03_q5',
            type: 'mcq',
            prompt: 'Pourquoi utilise-t-on de l’éthanol tiédi plutôt que glacé dans le bécher de la lampe sans flamme ?',
            options: [
              'Pour augmenter l’évaporation de l’éthanol afin que ses vapeurs réagissent avec $\\mathrm{O_2}$ sur le cuivre',
              'Pour provoquer la solidification instantanée de l’éthanol',
              'Pour dissoudre entièrement le fil de cuivre dans le liquide',
              'Pour empêcher toute réaction avec le dioxygène de l’air',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’oxydation catalytique a lieu en phase gazeuse entre les vapeurs d’éthanol et O₂ au contact du cuivre chaud.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Distinction',
          stepTheme: 'Sans flamme vs combustion',
          stepTitle: 'Ne pas confondre lampe sans flamme et combustion vive',
          paragraphText:
            'En absence de flamme vive, le cuivre catalyse une oxydation douce (ménagée) qui s’arrête à l’éthanal et à l’acide éthanoïque au lieu de tout brûler en CO₂.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p03_q6',
            type: 'mcq',
            prompt: 'Si l’éthanol s’enflammait vivement à l’allumette au lieu de réagir « sans flamme » sur le cuivre, quels produits obtiendrait-on majoritairement ?',
            options: [
              'Du dioxyde de carbone ($\\mathrm{CO_2}$) et de l’eau par combustion',
              'Uniquement de l’éthanal pur sans dégagement gazeux',
              'Du glucose et du dioxygène',
              'De l’éthanoate d’éthyle exclusivement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La flamme provoque la combustion de l’éthanol (destruction de la chaîne en CO₂ + H₂O), tandis que la lampe sans flamme réalise l’oxydation ménagée.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l05_ethanol_p03_q1',
          type: 'mcq',
          prompt: 'Quel rôle joue le fil de cuivre dans l’expérience de la lampe « sans flamme » ?',
          options: [
            'Il joue le rôle de catalyseur de l’oxydation ménagée de l’éthanol',
            'Il est le réactif limitant qui se transforme en oxyde de carbone',
            'Il refroidit les vapeurs d’éthanol pour les liquéfier',
            'Il neutralise l’acide formé pour empêcher le papier pH de rougir',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le cuivre accélère l’oxydation des vapeurs d’éthanol par le dioxygène de l’air et reste intact à la fin : il sert de catalyseur.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p03_q2',
          type: 'mcq',
          prompt: 'Que révèle le fait que la spirale de cuivre reste incandescente au-dessus de l’éthanol tiédi ?',
          options: [
            'La réaction d’oxydation ménagée sur le cuivre est très exothermique',
            'La réaction est fortement endothermique et absorbe la chaleur de la pièce',
            'Le cuivre subit une combustion complète en fondant dans l’éthanol',
            'La réaction est athermique comme l’estérification',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La chaleur dégagée par la réaction (exothermique) maintient l’incandescence du fil de cuivre sans aucune flamme.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p03_q3',
          type: 'mcq',
          prompt: 'Que met en évidence le rosissement du papier imbibé de réactif de Schiff ?',
          options: [
            'La formation d’un aldéhyde : l’éthanal ($\\mathrm{CH_3-CHO}$)',
            'La formation de dioxyde de carbone ($\\mathrm{CO_2}$)',
            'La présence d’acide sulfurique concentré',
            'La formation d’un alcool tertiaire',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le réactif de Schiff est le test spécifique des aldéhydes ; sa coloration rose révèle ici l’éthanal.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p03_q4',
          type: 'mcq',
          prompt: 'Quel produit explique que le papier indicateur de pH devienne rouge ($\\mathrm{pH < 7}$) au-dessus du montage ?',
          options: [
            'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
            'L’éthanal ($\\mathrm{CH_3-CHO}$)',
            'L’éthylène ($\\mathrm{C_2H_4}$)',
            'Le monoxyde de carbone ($\\mathrm{CO}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’éthanal est neutre vis-à-vis du papier pH ; c’est l’acide éthanoïque formé lors de la deuxième étape d’oxydation qui fait rougir le papier pH.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p03_q5',
          type: 'mcq',
          prompt: 'Pourquoi utilise-t-on de l’éthanol tiédi plutôt que glacé dans le bécher de la lampe sans flamme ?',
          options: [
            'Pour augmenter l’évaporation de l’éthanol afin que ses vapeurs réagissent avec $\\mathrm{O_2}$ sur le cuivre',
            'Pour provoquer la solidification instantanée de l’éthanol',
            'Pour dissoudre entièrement le fil de cuivre dans le liquide',
            'Pour empêcher toute réaction avec le dioxygène de l’air',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’oxydation catalytique a lieu en phase gazeuse entre les vapeurs d’éthanol et O₂ au contact du cuivre chaud.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p03_q6',
          type: 'mcq',
          prompt: 'Si l’éthanol s’enflammait vivement à l’allumette au lieu de réagir « sans flamme » sur le cuivre, quels produits obtiendrait-on majoritairement ?',
          options: [
            'Du dioxyde de carbone ($\\mathrm{CO_2}$) et de l’eau par combustion',
            'Uniquement de l’éthanal pur sans dégagement gazeux',
            'Du glucose et du dioxygène',
            'De l’éthanoate d’éthyle exclusivement',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La flamme provoque la combustion de l’éthanol (destruction de la chaîne en CO₂ + H₂O), tandis que la lampe sans flamme réalise l’oxydation ménagée.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Équations d’oxydation ménagée et conservation de la chaîne
    // ========================================================================
    {
      id: 'premiere_c_chimie_l05_ethanol_p04',
      order: 4,
      title: 'Équations d’oxydation ménagée et conservation de la chaîne',
      summary:
        'Écrire les deux étapes équilibrées de l’oxydation ménagée de l’éthanol sur cuivre et distinguer conservation et rupture du squelette carboné.',
      conceptExplanation:
        "En présence de cuivre porté à incandescence, l’éthanol gazeux subit une **oxydation ménagée** en deux étapes successives par le dioxygène de l’air :\n\n1. **Étape 1 (vers l’éthanal)** :\n   $$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}\\,O_2 \\xrightarrow{Cu} CH_3-CHO + H_2O}$$\n2. **Étape 2 (vers l’acide éthanoïque)** :\n   $$\\mathrm{CH_3-CHO + \\frac{1}{2}\\,O_2 \\xrightarrow{Cu} CH_3-COOH}$$\n\n- **Propriété capitale** : **l’oxydation ménagée conserve la chaîne carbonée** (éthanol $\\to$ éthanal $\\to$ acide éthanoïque possèdent tous exactement **2 atomes de carbone** liés entre eux).\n- Au contraire, la **combustion complète** **détruit la chaîne carbonée** en brisant la liaison $\\mathrm{C-C}$ pour former $\\mathrm{CO_2}$.",
      keyRule:
        'CH₃-CH₂-OH + 1/2 O₂ → CH₃-CHO + H₂O puis CH₃-CHO + 1/2 O₂ → CH₃-COOH : l’oxydation ménagée conserve la chaîne à 2 carbones (à la différence de la combustion qui la détruit).',
      formulas: [
        {
          name: 'Première et deuxième étapes d’oxydation ménagée',
          formula: '\\mathrm{CH_3-CH_2-OH + \\tfrac{1}{2}O_2 \\xrightarrow{Cu} CH_3-CHO + H_2O} \\quad ; \\quad \\mathrm{CH_3-CHO + \\tfrac{1}{2}O_2 \\xrightarrow{Cu} CH_3-COOH}',
          note: 'Attention : la seconde étape forme uniquement l’acide éthanoïque, sans molécule H₂O produite',
        },
      ],
      workedExample: {
        title: 'Comparer les deux étapes et les bilans d’atomes',
        statement:
          'Vérifie l’équilibrage de la seconde étape d’oxydation ménagée : $\\mathrm{CH_3-CHO + \\frac{1}{2}O_2 \\to CH_3-COOH}$, et indique le bilan global si tout l’éthanol est transformé en acide éthanoïque.',
        methodSteps: [
          '1) Étape 2 : à gauche, 2 C, 4 H et (1 + 1) = 2 O ; à droite CH₃-COOH contient 2 C, 4 H et 2 O : il ne se forme aucune molécule d’eau supplémentaire !',
          '2) Bilan global (Étape 1 + Étape 2) : CH₃-CH₂-OH + O₂ → CH₃-COOH + H₂O (soit 1 mol de O₂ par mol d’éthanol oxydé en acide, contre 3 mol de O₂ pour la combustion complète).',
        ],
        conclusion:
          'L’oxydation ménagée totale de l’éthanol en acide éthanoïque ne consomme qu’une mole de O₂ par mole d’éthanol et préserve la liaison C–C.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Étape 1',
          stepTheme: 'Éthanol → Éthanal',
          stepTitle: 'Écrire l’équation-bilan de la formation d’éthanal',
          paragraphText:
            'Lors de la première étape d’oxydation ménagée par O₂, 1 mole d’éthanol réagit avec 1/2 mole de O₂ pour donner 1 mole d’éthanal et 1 mole d’eau.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p04_q1',
            type: 'mcq',
            prompt: 'Quelle équation-bilan traduit la première étape d’oxydation ménagée de l’éthanol en éthanal ?',
            options: [
              '$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}O_2 \\xrightarrow{Cu} CH_3-CHO + H_2O}$',
              '$\\mathrm{CH_3-CH_2-OH + O_2 \\xrightarrow{Cu} CH_3-CHO + 2\\,H_2O}$',
              '$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}O_2 \\xrightarrow{Cu} CH_3-COOH + H_2}$',
              '$\\mathrm{CH_3-CH_2-OH + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C₂H₆O + 1/2 O₂ donne C₂H₄O (éthanal) + H₂O : 2 C, 6 H et 2 O de chaque côté.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Étape 2',
          stepTheme: 'Éthanal → Acide éthanoïque',
          stepTitle: 'Écrire l’équation-bilan de la formation d’acide éthanoïque',
          paragraphText:
            'Dans la seconde étape, l’éthanal fixe un atome d’oxygène (1/2 O₂) pour donner l’acide éthanoïque CH₃–COOH, sans dégagement d’eau.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p04_q2',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de l’oxydation ménagée de l’éthanal en acide éthanoïque ?',
            options: [
              '$\\mathrm{CH_3-CHO + \\frac{1}{2}O_2 \\xrightarrow{Cu} CH_3-COOH}$',
              '$\\mathrm{CH_3-CHO + O_2 \\xrightarrow{Cu} CH_3-COOH + H_2O}$',
              '$\\mathrm{CH_3-CHO + H_2O \\xrightarrow{Cu} CH_3-COOH + H_2}$',
              '$\\mathrm{CH_3-CHO + \\frac{5}{2}O_2 \\longrightarrow 2\\,CO_2 + 2\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’éthanal (C₂H₄O) et l’acide éthanoïque (C₂H₄O₂) ont exactement le même nombre d’atomes H (4) et C (2) : il suffit donc d’ajouter 1/2 O₂ sans former H₂O.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Squelette carboné',
          stepTheme: 'Exercice 3 p. 4',
          stepTitle: 'Ce que signifie « oxydation ménagée »',
          paragraphText:
            'On parle d’oxydation ménagée car la réaction ne casse aucune liaison C–C : elle conserve intégralement la chaîne carbonée de l’alcool de départ.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p04_q3',
            type: 'mcq',
            prompt: 'Que permet de réaliser l’oxydation ménagée de l’éthanol (contrairement à sa combustion complète) ?',
            options: [
              'Conserver sa chaîne carbonée à $2$ atomes de carbone',
              'Détruire sa chaîne carbonée pour former du $\\mathrm{CO_2}$',
              'Transformer sa chaîne carbonée en cycle benzénique',
              'Doubler la longueur de sa chaîne carbonée à $4$ carbones',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’oxydation ménagée modifie uniquement le groupe fonctionnel tout en préservant le squelette carboné C–C.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Équilibrage',
          stepTheme: 'Éviter le "+ H₂O" erroné',
          stepTitle: 'Attention : pas de H₂O dans CH₃–CHO → CH₃–COOH !',
          paragraphText:
            'Si on écrit à tort CH₃–CHO + O₂ → CH₃–COOH + H₂O, il y aurait 4 H à gauche contre 6 H à droite : c’est impossible !',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p04_q4',
            type: 'mcq',
            prompt: 'Pourquoi l’équation « $\\mathrm{CH_3-CHO + O_2 \\to CH_3-COOH + H_2O}$ » est-elle fausse ?',
            options: [
              'Parce qu’elle ne conserve pas l’élément hydrogène ($4$ atomes $\\mathrm{H}$ à gauche contre $6$ à droite)',
              'Parce que l’acide éthanoïque est un alcool secondaire',
              'Parce que le dioxygène ne réagit jamais avec un aldéhyde',
              'Parce qu’elle produit trop d’atomes de carbone à droite',
            ],
            correctAnswerIndex: 0,
            explanation:
              'CH₃-CHO apporte 4 H ; CH₃-COOH seul en contient déjà 4. Ajouter H₂O à droite crée 2 atomes H en excès : la réaction exacte est CH₃-CHO + 1/2 O₂ → CH₃-COOH.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Bilan global',
          stepTheme: 'Oxydation complète ménagée',
          stepTitle: 'Combiner les deux étapes en une seule équation',
          paragraphText:
            'En additionnant étape 1 et étape 2 (et en simplifiant CH₃–CHO), l’éthanol + O₂ donne acide éthanoïque + eau.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p04_q5',
            type: 'mcq',
            prompt: 'Quel est le bilan global équilibré transformant l’éthanol en acide éthanoïque par le dioxygène ?',
            options: [
              '$\\mathrm{CH_3-CH_2-OH + O_2 \\longrightarrow CH_3-COOH + H_2O}$',
              '$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}O_2 \\longrightarrow CH_3-COOH + H_2O}$',
              '$\\mathrm{CH_3-CH_2-OH + 2\\,O_2 \\longrightarrow CH_3-COOH + 2\\,H_2O}$',
              '$\\mathrm{CH_3-CH_2-OH + 3\\,O_2 \\longrightarrow CH_3-COOH + 2\\,H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '1/2 O₂ (étape 1) + 1/2 O₂ (étape 2) = 1 O₂ ; le bilan C₂H₆O + O₂ → C₂H₄O₂ + H₂O conserve 2 C, 6 H et 3 O.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application numérique',
          stepTheme: 'Quantité de O₂',
          stepTitle: 'Volume de O₂ pour oxyder 0,2 mol d’éthanol en éthanal',
          paragraphText:
            'D’après CH₃-CH₂-OH + 1/2 O₂ → CH₃-CHO + H₂O, 1 mol d’éthanol ne nécessite que 0,5 mol de O₂ pour donner l’éthanal.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p04_q6',
            type: 'mcq',
            prompt: 'Quelle quantité de matière de dioxygène $\\mathrm{O_2}$ consomme la transformation de $0{,}20\\text{ mol}$ d’éthanol en éthanal ?',
            options: [
              '$0{,}10\\text{ mol}$ de $\\mathrm{O_2}$',
              '$0{,}20\\text{ mol}$ de $\\mathrm{O_2}$',
              '$0{,}40\\text{ mol}$ de $\\mathrm{O_2}$',
              '$0{,}60\\text{ mol}$ de $\\mathrm{O_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Puisque $n(\\mathrm{O_2}) = \\frac{1}{2}\\,n(\\text{éthanol})$, on obtient $\\frac{1}{2} \\times 0{,}20 = 0{,}10\\text{ mol}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l05_ethanol_p04_q1',
          type: 'mcq',
          prompt: 'Quelle équation-bilan traduit la première étape d’oxydation ménagée de l’éthanol en éthanal ?',
          options: [
            '$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}O_2 \\xrightarrow{Cu} CH_3-CHO + H_2O}$',
            '$\\mathrm{CH_3-CH_2-OH + O_2 \\xrightarrow{Cu} CH_3-CHO + 2\\,H_2O}$',
            '$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}O_2 \\xrightarrow{Cu} CH_3-COOH + H_2}$',
            '$\\mathrm{CH_3-CH_2-OH + 3\\,O_2 \\longrightarrow 2\\,CO_2 + 3\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C₂H₆O + 1/2 O₂ donne C₂H₄O (éthanal) + H₂O : 2 C, 6 H et 2 O de chaque côté.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p04_q2',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de l’oxydation ménagée de l’éthanal en acide éthanoïque ?',
          options: [
            '$\\mathrm{CH_3-CHO + \\frac{1}{2}O_2 \\xrightarrow{Cu} CH_3-COOH}$',
            '$\\mathrm{CH_3-CHO + O_2 \\xrightarrow{Cu} CH_3-COOH + H_2O}$',
            '$\\mathrm{CH_3-CHO + H_2O \\xrightarrow{Cu} CH_3-COOH + H_2}$',
            '$\\mathrm{CH_3-CHO + \\frac{5}{2}O_2 \\longrightarrow 2\\,CO_2 + 2\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’éthanal (C₂H₄O) et l’acide éthanoïque (C₂H₄O₂) ont exactement le même nombre d’atomes H (4) et C (2) : il suffit donc d’ajouter 1/2 O₂ sans former H₂O.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p04_q3',
          type: 'mcq',
          prompt: 'Que permet de réaliser l’oxydation ménagée de l’éthanol (contrairement à sa combustion complète) ?',
          options: [
            'Conserver sa chaîne carbonée à $2$ atomes de carbone',
            'Détruire sa chaîne carbonée pour former du $\\mathrm{CO_2}$',
            'Transformer sa chaîne carbonée en cycle benzénique',
            'Doubler la longueur de sa chaîne carbonée à $4$ carbones',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’oxydation ménagée modifie uniquement le groupe fonctionnel tout en préservant le squelette carboné C–C.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p04_q4',
          type: 'mcq',
          prompt: 'Pourquoi l’équation « $\\mathrm{CH_3-CHO + O_2 \\to CH_3-COOH + H_2O}$ » est-elle fausse ?',
          options: [
            'Parce qu’elle ne conserve pas l’élément hydrogène ($4$ atomes $\\mathrm{H}$ à gauche contre $6$ à droite)',
            'Parce que l’acide éthanoïque est un alcool secondaire',
            'Parce que le dioxygène ne réagit jamais avec un aldéhyde',
            'Parce qu’elle produit trop d’atomes de carbone à droite',
          ],
          correctAnswerIndex: 0,
          explanation:
            'CH₃-CHO apporte 4 H ; CH₃-COOH seul en contient déjà 4. Ajouter H₂O à droite crée 2 atomes H en excès : la réaction exacte est CH₃-CHO + 1/2 O₂ → CH₃-COOH.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p04_q5',
          type: 'mcq',
          prompt: 'Quel est le bilan global équilibré transformant l’éthanol en acide éthanoïque par le dioxygène ?',
          options: [
            '$\\mathrm{CH_3-CH_2-OH + O_2 \\longrightarrow CH_3-COOH + H_2O}$',
            '$\\mathrm{CH_3-CH_2-OH + \\frac{1}{2}O_2 \\longrightarrow CH_3-COOH + H_2O}$',
            '$\\mathrm{CH_3-CH_2-OH + 2\\,O_2 \\longrightarrow CH_3-COOH + 2\\,H_2O}$',
            '$\\mathrm{CH_3-CH_2-OH + 3\\,O_2 \\longrightarrow CH_3-COOH + 2\\,H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '1/2 O₂ (étape 1) + 1/2 O₂ (étape 2) = 1 O₂ ; le bilan C₂H₆O + O₂ → C₂H₄O₂ + H₂O conserve 2 C, 6 H et 3 O.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p04_q6',
          type: 'mcq',
          prompt: 'Quelle quantité de matière de dioxygène $\\mathrm{O_2}$ consomme la transformation de $0{,}20\\text{ mol}$ d’éthanol en éthanal ?',
          options: [
            '$0{,}10\\text{ mol}$ de $\\mathrm{O_2}$',
            '$0{,}20\\text{ mol}$ de $\\mathrm{O_2}$',
            '$0{,}40\\text{ mol}$ de $\\mathrm{O_2}$',
            '$0{,}60\\text{ mol}$ de $\\mathrm{O_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Puisque $n(\\mathrm{O_2}) = \\frac{1}{2}\\,n(\\text{éthanol})$, on obtient $\\frac{1}{2} \\times 0{,}20 = 0{,}10\\text{ mol}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Schémas réactionnels et identifications (Exercices du cours)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l05_ethanol_p05',
      order: 5,
      title: 'Enchaînements réactionnels autour de l’éthanol',
      summary:
        'Résoudre des suites réactionnelles (acétylène → éthylène → éthanol → éthanal → acide éthanoïque) et identifier des composés oxygénés par leur masse molaire.',
      conceptExplanation:
        "En chimie organique de 1ère CD, l’éthanol est au cœur d’une chaîne classique de transformations :\n\n$$\\mathrm{HC\\equiv CH} \\;(\\text{acétylène}) \\xrightarrow{+\\mathrm{H_2}} \\mathrm{CH_2=CH_2} \\;(\\text{éthylène}) \\xrightarrow{+\\mathrm{H_2O}} \\mathrm{CH_3-CH_2-OH} \\;(\\text{éthanol}) \\xrightarrow{+\\frac{1}{2}\\mathrm{O_2}} \\mathrm{CH_3-CHO} \\;(\\text{éthanal}) \\xrightarrow{+\\frac{1}{2}\\mathrm{O_2}} \\mathrm{CH_3-COOH} \\;(\\text{acide éthanoïque})$$\n\n- **Méthode d’identification inversée (Situation p. 2, Ex 2 et Ex 4 p. 3–4)** :\n  - Si un acide carboxylique saturé $\\mathrm{C_nH_{2n}O_2}$ a pour masse molaire $M_C = 60\\text{ g/mol}$, alors $14n + 32 = 60 \\implies n = 2$ : c’est l’**acide éthanoïque** ($\\mathrm{C_2H_4O_2}$).\n  - L’aldéhyde $\\mathrm{C_nH_{2n}O}$ qui lui a donné naissance par oxydation ménagée conserve le même $n = 2$ : c’est l’**éthanal** ($\\mathrm{CH_3-CHO}$), lui-même issu de l’**éthanol** ($\\mathrm{CH_3-CH_2-OH}$).",
      keyRule:
        'Toutes les étapes d’hydratation et d’oxydation ménagée autour de l’éthylène/éthanol conservent le squelette à 2 atomes de carbone ; M = 60 g/mol identifie C₂H₄O₂ (acide éthanoïque) et M = 46 g/mol identifie C₂H₆O (éthanol).',
      formulas: [
        {
          name: 'Chaîne complète à 2 atomes de carbone',
          formula: '\\mathrm{C_2H_2 \\xrightarrow{+H_2} C_2H_4 \\xrightarrow{+H_2O} C_2H_5OH \\xrightarrow{+\\tfrac{1}{2}O_2} CH_3CHO \\xrightarrow{+\\tfrac{1}{2}O_2} CH_3COOH}',
          note: 'Conservation stricte des 2 carbones tout au long de la filière',
        },
      ],
      workedExample: {
        title: 'Résoudre une suite de 4 réactions (Exercice 1 & Exercice 2 p. 3)',
        statement:
          '(1) Identifie A, B, C, D dans : $A + \\mathrm{H_2} \\to \\text{éthylène}$ ; $\\text{éthylène} + \\mathrm{H_2O} \\to B$ ; $B + \\frac{1}{2}\\mathrm{O_2} \\to C + \\mathrm{H_2O}$ ; $C + \\frac{1}{2}\\mathrm{O_2} \\to D$ (acide éthanoïque). (2) Un composé X ($\\mathrm{C_nH_{2n}O}$) donne par oxydation sur cuivre un acide de masse molaire $M = 60\\text{ g/mol}$ : quel est X ?',
        methodSteps: [
          '1) A + H₂ → C₂H₄ : A est l’acétylène (HC≡CH, sur Pd désactivé).',
          '2) C₂H₄ + H₂O → B : B est l’éthanol (CH₃-CH₂-OH).',
          '3) B + 1/2 O₂ → C + H₂O : C est l’éthanal (CH₃-CHO), qui s’oxyde en D = acide éthanoïque (CH₃-COOH).',
          '4) Pour X : l’acide CₙH₂ₙO₂ a M = 14n + 32 = 60 → n = 2 (acide éthanoïque). Par conservation de la chaîne, X (CₙH₂ₙO) vaut C₂H₄O : c’est l’éthanal.',
        ],
        conclusion:
          'Dès que l’on détermine n sur un maillon de la chaîne (masse molaire ou formule brute), tous les autres maillons à 2 carbones sont immédiatement connus.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Exercice 1 p. 3',
          stepTheme: 'Remonter à l’alcyne',
          stepTitle: 'Identifier le composé A qui donne l’éthylène avec H₂',
          paragraphText:
            'Par hydrogénation ménagée (fixation d’une mole de H₂), seul l’acétylène HC≡CH conduit à l’éthylène CH₂=CH₂.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p05_q1',
            type: 'mcq',
            prompt: 'Dans la réaction $A + \\mathrm{H_2} \\to \\text{éthylène}$ (en présence de Pd désactivé), quel est le composé $A$ ?',
            options: [
              'L’acétylène ($\\mathrm{HC\\equiv CH}$)',
              'L’éthane ($\\mathrm{CH_3-CH_3}$)',
              'L’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
              'Le propène ($\\mathrm{C_3H_6}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'HC≡CH + H₂ → CH₂=CH₂ : l’hydrogénation ménagée d’un alcyne à 2 C fournit l’alcène à 2 C (éthylène).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Exercice 2 p. 3',
          stepTheme: 'M = 60 g/mol',
          stepTitle: 'Remonter d’un acide carboxylique vers son précurseur',
          paragraphText:
            'L’acide carboxylique saturé de masse molaire M = 60 g/mol vérifie 14n + 32 = 60, soit n = 2 (acide éthanoïque).',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p05_q2',
            type: 'mcq',
            prompt: 'Un composé organique $X$ de formule brute $\\mathrm{C_nH_{2n}O}$ est oxydé par $\\mathrm{O_2}$ sur cuivre en un acide carboxylique de masse molaire $M = 60\\text{ g/mol}$. Quel est $X$ ?',
            options: [
              'L’éthanal ($\\mathrm{CH_3-CHO}$)',
              'L’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
              'La propanone ($\\mathrm{CH_3-CO-CH_3}$)',
              'Le propanal ($\\mathrm{CH_3-CH_2-CHO}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              '14n + 32 = 60 ⟹ n = 2 (acide éthanoïque). Le composé X de formule CₙH₂ₙO vaut donc C₂H₄O : c’est l’éthanal (et non l’éthanol qui est CₙH₂ₙ₊₂O).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Exercice 4 p. 4',
          stepTheme: 'Solvant pharmaceutique',
          stepTitle: 'Identifier un alcool saturé par son produit d’oxydation C₂H₄O₂',
          paragraphText:
            'Si l’oxydation ménagée d’un alcool saturé conduit à C₂H₄O₂, la chaîne carbonée conserve ses 2 carbones : l’alcool de départ est l’éthanol.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p05_q3',
            type: 'mcq',
            prompt: 'Un alcool saturé utilisé comme solvant subit une oxydation par $\\mathrm{O_2}$ pour donner un composé $\\mathrm{C_2H_4O_2}$. De quel type d’oxydation s’agit-il et quel est cet alcool ?',
            options: [
              'Oxydation ménagée ; l’alcool est l’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
              'Combustion complète ; l’alcool est le méthanol',
              'Oxydation ménagée ; l’alcool est le propan-1-ol',
              'Fermentation ; l’alcool est le propan-2-ol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’oxydation ménagée conserve les 2 carbones de C₂H₄O₂ (acide éthanoïque) : l’alcool saturé à 2 C est l’éthanol.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Tests croisés',
          stepTheme: 'Situation p. 2',
          stepTitle: 'Identifier B et C par le réactif de Schiff et le papier pH',
          paragraphText:
            'Dans la série d’oxydation d’un alcool primaire A (M = 46 g/mol), B rosit le réactif de Schiff et C rougit le papier pH.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p05_q4',
            type: 'mcq',
            prompt: 'Lors de l’oxydation sur cuivre d’un alcool $A$ ($M = 46\\text{ g/mol}$), $B$ rosit le réactif de Schiff puis s’oxyde en $C$ qui rougit le papier pH. Quels sont $B$ et $C$ ?',
            options: [
              '$B$ = éthanal ($\\mathrm{CH_3-CHO}$) et $C$ = acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
              '$B$ = acide éthanoïque et $C$ = éthanal',
              '$B$ = propanone et $C$ = acide propanoïque',
              '$B$ = éthylène et $C$ = éthane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'M = 46 g/mol ⟹ A = éthanol. Le produit qui rosit le réactif de Schiff est l’aldéhyde B (éthanal) et le produit acide qui rougit le papier pH est C (acide éthanoïque).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'C₂H₆O : alcool vs éther',
          stepTitle: 'Un isomère de l’éthanol réagit-il comme lui ?',
          paragraphText:
            'L’oxyde de diméthyle CH₃–O–CH₃ possède la même formule brute C₂H₆O et la même masse molaire M = 46 g/mol que l’éthanol, mais il n’a pas de groupe –OH et ne forme ni éthanal ni acide éthanoïque.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p05_q5',
            type: 'mcq',
            prompt: 'Pourquoi la formule brute $\\mathrm{C_2H_6O}$ ne suffit-elle pas à elle seule sans préciser « alcool » pour affirmer qu’on obtient de l’éthanal par oxydation ménagée ?',
            options: [
              'Parce que $\\mathrm{C_2H_6O}$ possède un isomère éther-oxyde ($\\mathrm{CH_3-O-CH_3}$) qui ne donne pas d’éthanal',
              'Parce que $\\mathrm{C_2H_6O}$ correspond toujours à l’acide méthanoïque',
              'Parce que l’éthanol est un alcool tertiaire',
              'Parce que $\\mathrm{C_2H_6O}$ a une masse molaire de 60 g/mol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’oxyde de diméthyle (méthoxyméthane) a la même formule brute C₂H₆O que l’éthanol mais n’est pas un alcool primaire.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Bilan de masse',
          stepTheme: 'Passage C₂H₄O₂ → C₂H₆O',
          stepTitle: 'Comparer les masses molaires de la série en C₂',
          paragraphText:
            'Lors du passage éthanol (46) → éthanal (44) → acide éthanoïque (60), la perte de H₂ diminue M de 2 g/mol puis le gain d’un atome O l’augmente de 16 g/mol.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p05_q6',
            type: 'mcq',
            prompt: 'Quelles sont les masses molaires respectives de l’éthylène, de l’éthanol, de l’éthanal et de l’acide éthanoïque ?',
            options: [
              '$28$, $46$, $44$ et $60\\text{ g/mol}$',
              '$26$, $44$, $46$ et $60\\text{ g/mol}$',
              '$30$, $46$, $48$ et $62\\text{ g/mol}$',
              '$28$, $46$, $58$ et $74\\text{ g/mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C₂H₄ = 28 g/mol ; C₂H₆O = 46 g/mol ; C₂H₄O = 44 g/mol ; C₂H₄O₂ = 60 g/mol.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l05_ethanol_p05_q1',
          type: 'mcq',
          prompt: 'Dans la réaction $A + \\mathrm{H_2} \\to \\text{éthylène}$ (en présence de Pd désactivé), quel est le composé $A$ ?',
          options: [
            'L’acétylène ($\\mathrm{HC\\equiv CH}$)',
            'L’éthane ($\\mathrm{CH_3-CH_3}$)',
            'L’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
            'Le propène ($\\mathrm{C_3H_6}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'HC≡CH + H₂ → CH₂=CH₂ : l’hydrogénation ménagée d’un alcyne à 2 C fournit l’alcène à 2 C (éthylène).',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p05_q2',
          type: 'mcq',
          prompt: 'Un composé organique $X$ de formule brute $\\mathrm{C_nH_{2n}O}$ est oxydé par $\\mathrm{O_2}$ sur cuivre en un acide carboxylique de masse molaire $M = 60\\text{ g/mol}$. Quel est $X$ ?',
          options: [
            'L’éthanal ($\\mathrm{CH_3-CHO}$)',
            'L’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
            'La propanone ($\\mathrm{CH_3-CO-CH_3}$)',
            'Le propanal ($\\mathrm{CH_3-CH_2-CHO}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            '14n + 32 = 60 ⟹ n = 2 (acide éthanoïque). Le composé X de formule CₙH₂ₙO vaut donc C₂H₄O : c’est l’éthanal (et non l’éthanol qui est CₙH₂ₙ₊₂O).',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p05_q3',
          type: 'mcq',
          prompt: 'Un alcool saturé utilisé comme solvant subit une oxydation par $\\mathrm{O_2}$ pour donner un composé $\\mathrm{C_2H_4O_2}$. De quel type d’oxydation s’agit-il et quel est cet alcool ?',
          options: [
            'Oxydation ménagée ; l’alcool est l’éthanol ($\\mathrm{CH_3-CH_2-OH}$)',
            'Combustion complète ; l’alcool est le méthanol',
            'Oxydation ménagée ; l’alcool est le propan-1-ol',
            'Fermentation ; l’alcool est le propan-2-ol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’oxydation ménagée conserve les 2 carbones de C₂H₄O₂ (acide éthanoïque) : l’alcool saturé à 2 C est l’éthanol.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p05_q4',
          type: 'mcq',
          prompt: 'Lors de l’oxydation sur cuivre d’un alcool $A$ ($M = 46\\text{ g/mol}$), $B$ rosit le réactif de Schiff puis s’oxyde en $C$ qui rougit le papier pH. Quels sont $B$ et $C$ ?',
          options: [
            '$B$ = éthanal ($\\mathrm{CH_3-CHO}$) et $C$ = acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
            '$B$ = acide éthanoïque et $C$ = éthanal',
            '$B$ = propanone et $C$ = acide propanoïque',
            '$B$ = éthylène et $C$ = éthane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'M = 46 g/mol ⟹ A = éthanol. Le produit qui rosit le réactif de Schiff est l’aldéhyde B (éthanal) et le produit acide qui rougit le papier pH est C (acide éthanoïque).',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p05_q5',
          type: 'mcq',
          prompt: 'Pourquoi la formule brute $\\mathrm{C_2H_6O}$ ne suffit-elle pas à elle seule sans préciser « alcool » pour affirmer qu’on obtient de l’éthanal par oxydation ménagée ?',
          options: [
            'Parce que $\\mathrm{C_2H_6O}$ possède un isomère éther-oxyde ($\\mathrm{CH_3-O-CH_3}$) qui ne donne pas d’éthanal',
            'Parce que $\\mathrm{C_2H_6O}$ correspond toujours à l’acide méthanoïque',
            'Parce que l’éthanol est un alcool tertiaire',
            'Parce que $\\mathrm{C_2H_6O}$ a une masse molaire de 60 g/mol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’oxyde de diméthyle (méthoxyméthane) a la même formule brute C₂H₆O que l’éthanol mais n’est pas un alcool primaire.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p05_q6',
          type: 'mcq',
          prompt: 'Quelles sont les masses molaires respectives de l’éthylène, de l’éthanol, de l’éthanal et de l’acide éthanoïque ?',
          options: [
            '$28$, $46$, $44$ et $60\\text{ g/mol}$',
            '$26$, $44$, $46$ et $60\\text{ g/mol}$',
            '$30$, $46$, $48$ et $62\\text{ g/mol}$',
            '$28$, $46$, $58$ et $74\\text{ g/mol}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C₂H₄ = 28 g/mol ; C₂H₆O = 46 g/mol ; C₂H₄O = 44 g/mol ; C₂H₄O₂ = 60 g/mol.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Dangers liés à l’alcool, métabolisme et alcootest (Documentation)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l05_ethanol_p06',
      order: 6,
      title: 'Dangers de l’alcool, métabolisme et prévention (alcootest)',
      summary:
        'Connaître les effets sanitaires de l’éthanol (troubles de mémoire, cirrhose, diabète, risque fœtal), son absorption/élimination par le foie et l’usage routier de l’alcootest.',
      conceptExplanation:
        "Présent dans toutes les boissons alcoolisées (vin, bière, liqueurs, *koutoukou*), l’**éthanol** est une substance psychoactive toxique à forte dose ou en consommation régulière :\n\n1. **Risques pour la santé (cours p. 2 & 5–6)** :\n   - À court terme : baisse de la vigilance, ralentissement des réflexes, troubles de la coordination (accidents de la route).\n   - À moyen et long terme : **troubles de la mémoire**, **diabète**, **cirrhose du foie**.\n   - Chez la femme enceinte : l’éthanol **franchit facilement la barrière placentaire**, exposant le fœtus à des concentrations proches de celles de la mère.\n2. **Absorption et élimination dans l’organisme** :\n   - $70$ à $80\\%$ de l’éthanol est absorbé au niveau de l’intestin grêle (duodénum et jéjunum) ; la prise d’alcool **pendant un repas ralentit l’absorption** (pic atteint en $\\approx 90\\text{ min}$ contre $\\approx 45\\text{ min}$ à jeun).\n   - L’éthanol est **éliminé essentiellement par le foie ($95\\%$)** et pour les **$5\\%$ restants** par les reins, la peau, les poumons et la salive.\n   - Un **verre standard** contient environ **$10\\text{ g}$ d’alcool pur**, quelle que soit la boisson.\n3. **Contrôle routier** : les forces de sécurité utilisent l’**alcootest** pour dépister l’excès d’éthanol dans l’air expiré des conducteurs.",
      keyRule:
        'L’éthanol est éliminé à 95 % par le foie (responsable de la cirrhose en cas d’abus) et passe la barrière placentaire ; 1 verre standard ≈ 10 g d’éthanol pur, dépisté dans l’air expiré par l’alcootest.',
      workedExample: {
        title: 'Comparer deux situations d’absorption d’alcool (Documentation p. 5–6)',
        statement:
          'Une personne consomme un verre standard ($10\\text{ g}$ d’éthanol pur) à jeun ou pendant un repas. Quelle différence observe-t-on sur la cinétique d’absorption et quel organe élimine l’essentiel de cet alcool ?',
        methodSteps: [
          '1) À jeun, la vidange gastrique est rapide : le pic de concentration plasmatique est atteint en environ 45 minutes.',
          '2) Pendant un repas, la nourriture ralentit la vidange gastrique : le pic est retardé aux alentours de 90 minutes (temps doublé).',
          '3) Dans les deux cas, le foie assure 95 % de l’élimination de l’éthanol (les 5 % restants partent par les reins, les poumons, la peau et la salive).',
        ],
        conclusion:
          'L’élimination reste assurée à 95 % par le foie, même si le repas retarde l’absorption intestinale.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Pathologies',
          stepTheme: 'Risques chroniques',
          stepTitle: 'Identifier les maladies liées à l’alcoolisme',
          paragraphText:
            'La consommation excessive et répétée d’éthanol provoque des lésions graves du système nerveux (troubles de mémoire) et d’organes métaboliques (cirrhose du foie, diabète).',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p06_q1',
            type: 'mcq',
            prompt: 'Quelles pathologies figurent parmi les conséquences connues d’une consommation excessive d’éthanol ?',
            options: [
              'Troubles de la mémoire, diabète et cirrhose du foie',
              'Uniquement des caries dentaires superficielles',
              'Renforcement permanent des réflexes visuels',
              'Immunité totale contre les maladies hépatiques',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’abus d’éthanol altère durablement le cerveau (troubles de mémoire), le pancréas (diabète) et surtout le foie (cirrhose).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Élimination',
          stepTheme: 'Rôle du foie',
          stepTitle: 'Quel organe élimine majoritairement l’éthanol ?',
          paragraphText:
            'Le foie dégrade 95 % de l’éthanol absorbé ; les 5 % restants sont éliminés sous forme inchangée par les poumons (haleine), les reins, la peau et la salive.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p06_q2',
            type: 'mcq',
            prompt: 'Quel organe assure environ $95\\%$ de l’élimination de l’éthanol dans le corps humain ?',
            options: [
              'Le foie',
              'Les reins uniquement',
              'La peau',
              'Les poumons',
            ],
            correctAnswerIndex: 0,
            explanation:
              '95 % de l’éthanol est métabolisé par le foie ; seuls 5 % s’éliminent par l’air expiré, l’urine, la sueur et la salive.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Cinétique biologique',
          stepTheme: 'À jeun vs repas',
          stepTitle: 'Effet d’un repas sur la vitesse d’absorption',
          paragraphText:
            'L’absorption a lieu principalement dans l’intestin (duodénum et jéjunum) : prise pendant un repas, l’alcoolémie atteint son maximum deux fois plus tard (~90 min vs ~45 min à jeun).',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p06_q3',
            type: 'mcq',
            prompt: 'Quel est l’effet de l’ingestion de nourriture en même temps qu’une boisson alcoolisée ?',
            options: [
              'Elle ralentit la vidange gastrique et double le temps d’atteinte du pic plasmatique (environ $90\\text{ min}$ contre $45\\text{ min}$ à jeun)',
              'Elle empêche définitivement tout passage de l’éthanol dans le sang',
              'Elle détruit 100 % de l’éthanol dès la bouche',
              'Elle multiplie par dix la vitesse d’absorption intestinale',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La nourriture retarde le passage vers le duodénum/jéjunum, doublant le délai d’atteinte du pic sanguin sans annuler la quantité totale absorbée.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'definition',
          stepBadge: 'Unité alcool',
          stepTheme: 'Verre standard',
          stepTitle: 'Masse d’alcool pur dans un verre standard',
          paragraphText:
            'Servis dans des verres adaptés en débit de boisson (vin, bière, alcool fort), un verre standard apporte environ 10 g d’éthanol pur.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p06_q4',
            type: 'mcq',
            prompt: 'Quelle masse approximative d’alcool pur contient un verre standard de boisson alcoolisée ?',
            options: [
              '$10\\text{ g}$ d’éthanol pur',
              '$100\\text{ g}$ d’éthanol pur',
              '$1\\text{ g}$ d’éthanol pur',
              '$0{,}1\\text{ g}$ d’éthanol pur',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un verre standard (verre de vin, demi de bière ou dose de spiritueux) contient environ 10 g d’éthanol pur.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Sécurité routière',
          stepTheme: 'Alcootest',
          stepTitle: 'Principe du dépistage routier',
          paragraphText:
            'Parce qu’une fraction de l’éthanol est éliminée par les poumons dans l’air expiré, l’alcootest permet d’estimer l’alcoolémie d’un conducteur.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p06_q5',
            type: 'mcq',
            prompt: 'Quel dispositif utilisent les agents de circulation routière pour détecter un excès d’éthanol chez un conducteur ?',
            options: [
              'L’alcootest (analyse de l’éthanol dans l’air expiré)',
              'Le papier pH trempé dans l’huile moteur',
              'Le réactif de Schiff appliqué sur la carrosserie',
              'Le thermomètre à mercure',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’alcootest (ou éthylotest) met en évidence la présence excessive de vapeurs d’éthanol dans l’haleine d’un conducteur.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Grossesse',
          stepTheme: 'Barrière placentaire',
          stepTitle: 'Risque particulier pendant la grossesse',
          paragraphText:
            'L’éthanol traverse aisément la barrière placentaire : sa concentration chez le fœtus devient proche de celle de la mère.',
          exercise: {
            id: 'premiere_c_chimie_l05_ethanol_p06_q6',
            type: 'mcq',
            prompt: 'Pourquoi toute consommation d’alcool est-elle dangereuse pendant la grossesse ?',
            options: [
              'Parce que l’éthanol franchit facilement la barrière placentaire et atteint chez le fœtus des concentrations proches de celles de la mère',
              'Parce que le placenta transforme l’éthanol en glucose bénéfique',
              'Parce que l’éthanol reste bloqué uniquement dans l’estomac maternel',
              'Parce que seul le dioxyde de carbone traverse le placenta',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Petite molécule soluble dans l’eau, l’éthanol diffuse à travers le placenta jusqu’au liquide amniotique et au fœtus.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l05_ethanol_p06_q1',
          type: 'mcq',
          prompt: 'Quelles pathologies figurent parmi les conséquences connues d’une consommation excessive d’éthanol ?',
          options: [
            'Troubles de la mémoire, diabète et cirrhose du foie',
            'Uniquement des caries dentaires superficielles',
            'Renforcement permanent des réflexes visuels',
            'Immunité totale contre les maladies hépatiques',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’abus d’éthanol altère durablement le cerveau (troubles de mémoire), le pancréas (diabète) et surtout le foie (cirrhose).',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p06_q2',
          type: 'mcq',
          prompt: 'Quel organe assure environ $95\\%$ de l’élimination de l’éthanol dans le corps humain ?',
          options: [
            'Le foie',
            'Les reins uniquement',
            'La peau',
            'Les poumons',
          ],
          correctAnswerIndex: 0,
          explanation:
            '95 % de l’éthanol est métabolisé par le foie ; seuls 5 % s’éliminent par l’air expiré, l’urine, la sueur et la salive.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p06_q3',
          type: 'mcq',
          prompt: 'Quel est l’effet de l’ingestion de nourriture en même temps qu’une boisson alcoolisée ?',
          options: [
            'Elle ralentit la vidange gastrique et double le temps d’atteinte du pic plasmatique (environ $90\\text{ min}$ contre $45\\text{ min}$ à jeun)',
            'Elle empêche définitivement tout passage de l’éthanol dans le sang',
            'Elle détruit 100 % de l’éthanol dès la bouche',
            'Elle multiplie par dix la vitesse d’absorption intestinale',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La nourriture retarde le passage vers le duodénum/jéjunum, doublant le délai d’atteinte du pic sanguin sans annuler la quantité totale absorbée.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p06_q4',
          type: 'mcq',
          prompt: 'Quelle masse approximative d’alcool pur contient un verre standard de boisson alcoolisée ?',
          options: [
            '$10\\text{ g}$ d’éthanol pur',
            '$100\\text{ g}$ d’éthanol pur',
            '$1\\text{ g}$ d’éthanol pur',
            '$0{,}1\\text{ g}$ d’éthanol pur',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un verre standard (verre de vin, demi de bière ou dose de spiritueux) contient environ 10 g d’éthanol pur.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p06_q5',
          type: 'mcq',
          prompt: 'Quel dispositif utilisent les agents de circulation routière pour détecter un excès d’éthanol chez un conducteur ?',
          options: [
            'L’alcootest (analyse de l’éthanol dans l’air expiré)',
            'Le papier pH trempé dans l’huile moteur',
            'Le réactif de Schiff appliqué sur la carrosserie',
            'Le thermomètre à mercure',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’alcootest (ou éthylotest) met en évidence la présence excessive de vapeurs d’éthanol dans l’haleine d’un conducteur.',
        },
        {
          id: 'premiere_c_chimie_l05_ethanol_p06_q6',
          type: 'mcq',
          prompt: 'Pourquoi toute consommation d’alcool est-elle dangereuse pendant la grossesse ?',
          options: [
            'Parce que l’éthanol franchit facilement la barrière placentaire et atteint chez le fœtus des concentrations proches de celles de la mère',
            'Parce que le placenta transforme l’éthanol en glucose bénéfique',
            'Parce que l’éthanol reste bloqué uniquement dans l’estomac maternel',
            'Parce que seul le dioxyde de carbone traverse le placenta',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Petite molécule soluble dans l’eau, l’éthanol diffuse à travers le placenta jusqu’au liquide amniotique et au fœtus.',
        },
      ],
    },
  ],
};
