import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ères CD - Chimie Organique - Hydrocarbures insaturés : alcènes et alcynes » (format v2).
export const CHIMIE_1RE_CD_L03_ALCENES_ALCYNES: CurriculumChapter = {
  id: 'premiere_c_chimie_l03_alcenes_alcynes',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 3,
  title: 'Leçon 3 : Hydrocarbures insaturés : alcènes et alcynes',
  summary:
    'Structure géométrique de l’éthylène et de l’acétylène, formules brutes CₙH₂ₙ et CₙH₂ₙ₋₂, nomenclature IUPAC, stéréoisomérie Z/E, combustion, additions (Markovnikov, hydrogénation ménagée, hydratation) et polymérisation.',
  officialVolumeHours: 6,
  contentVersion: 2,
  source: '1ères CD - Chimie Organique : Hydrocarbures insaturés : alcènes et alcynes.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Structure géométrique de l’éthylène et de l’acétylène, formules brutes
    // ========================================================================
    {
      id: 'premiere_c_chimie_l03_alcenes_alcynes_p01',
      order: 1,
      title: 'Structure géométrique : éthylène, acétylène et formules brutes',
      summary:
        'Distinguer alcène et alcyne par leurs liaisons multiples, connaître les paramètres géométriques de l’éthylène (120°, plan) et de l’acétylène (180°, linéaire) et établir CₙH₂ₙ et CₙH₂ₙ₋₂.',
      conceptExplanation:
        "Les **hydrocarbures insaturés** sont des hydrocarbures dont la chaîne carbonée renferme au moins une liaison multiple (double ou triple) entre deux atomes de carbone :\n\n1. **Les alcènes (carbone trigonal)** : hydrocarbures acycliques possédant **une double liaison covalente** $\\mathrm{C=C}$.\n   - **Formule brute générale** : $\\mathrm{C_nH_{2n}}$ avec $n \\ge 2$, de masse molaire $M = 14n\\text{ g/mol}$.\n   - **Exemple type — l’éthylène ($\\mathrm{C_2H_4}$, éthène)** : formule semi-développée $\\mathrm{CH_2=CH_2}$. Chaque carbone est **trigonal** (lié à 3 atomes) : les 6 atomes sont **coplanaires** (molécule **plane** et rigide autour de $\\mathrm{C=C}$), les angles valent environ **$120^\\circ$**, la longueur $\\mathrm{C=C}$ est **$134\\text{ pm}$** et $\\mathrm{C-H}$ vaut **$110\\text{ pm}$**.\n2. **Les alcynes (carbone digonal)** : hydrocarbures acycliques possédant **une triple liaison covalente** $\\mathrm{C\\equiv C}$.\n   - **Formule brute générale** : $\\mathrm{C_nH_{2n-2}}$ avec $n \\ge 2$, de masse molaire $M = 14n - 2\\text{ g/mol}$.\n   - **Exemple type — l’acétylène ($\\mathrm{C_2H_2}$, éthyne)** : formule semi-développée $\\mathrm{HC\\equiv CH}$. Chaque carbone est **digonal** (lié à 2 atomes) : les 4 atomes sont **alignés** (molécule **linéaire** et rigide), l’angle $\\widehat{\\mathrm{HCC}}$ vaut **$180^\\circ$**, la longueur $\\mathrm{C\\equiv C}$ est **$120\\text{ pm}$** et $\\mathrm{C-H}$ vaut **$110\\text{ pm}$**.",
      keyRule:
        'Un alcène (C=C, carbones trigonaux à 120°, plan local) suit la formule CₙH₂ₙ (n ≥ 2) ; un alcyne (C≡C, carbones digonaux à 180°, linéaire local) suit CₙH₂ₙ₋₂ (n ≥ 2).',
      formulas: [
        {
          name: 'Formule brute générale d’un alcène acyclique',
          formula: '\\mathrm{C_nH_{2n}} \\quad (n \\ge 2), \\quad M = 14n\\text{ g/mol}',
          note: 'Éthylène C₂H₄ : d(C=C) = 134 pm, d(C-H) = 110 pm, angles ≈ 120°, molécule plane',
        },
        {
          name: 'Formule brute générale d’un alcyne acyclique',
          formula: '\\mathrm{C_nH_{2n-2}} \\quad (n \\ge 2), \\quad M = (14n - 2)\\text{ g/mol}',
          note: 'Acétylène C₂H₂ : d(C≡C) = 120 pm, d(C-H) = 110 pm, angle = 180°, molécule linéaire',
        },
      ],
      workedExample: {
        title: 'Identifier un alcène ou un alcyne à partir de sa masse molaire',
        statement:
          'Un hydrocarbure acyclique insaturé A possède une masse molaire $M = 54\\text{ g/mol}$ et un second hydrocarbure acyclique B possède $M = 56\\text{ g/mol}$ (avec $M(\\mathrm{C}) = 12\\text{ g/mol}$ et $M(\\mathrm{H}) = 1\\text{ g/mol}$). Détermine leurs formules brutes.',
        methodSteps: [
          '1) Testons la formule d’un alcène (M = 14n) pour B : 14n = 56 donne n = 4 (entier ≥ 2), donc B est un alcène de formule C₄H₈.',
          '2) Pour A (M = 54), 54 n’est ni de la forme 14n + 2 ni 14n. Testons un alcyne : 14n - 2 = 54 donne 14n = 56, soit n = 4.',
          '3) Avec n = 4 dans CₙH₂ₙ₋₂, A a pour formule brute C₄H₆.',
        ],
        conclusion:
          'A est un alcyne de formule brute C₄H₆ (M = 54 g/mol) et B est un alcène de formule brute C₄H₈ (M = 56 g/mol).',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Géométrie comparée de l’éthylène (plan, 120°) et de l’acétylène (linéaire, 180°)',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Géométrie de l'éthylène et de l'acétylène">
  <rect x="8" y="8" width="168" height="174" rx="10" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.2"/>
  <text x="92" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">Éthylène C₂H₄ (plan)</text>
  <line x1="66" y1="92" x2="118" y2="92" stroke="#1E293B" stroke-width="2.2"/>
  <line x1="66" y1="98" x2="118" y2="98" stroke="#1E293B" stroke-width="2.2"/>
  <line x1="66" y1="95" x2="36" y2="56" stroke="#1E293B" stroke-width="2"/>
  <line x1="66" y1="95" x2="36" y2="134" stroke="#1E293B" stroke-width="2"/>
  <line x1="118" y1="95" x2="148" y2="56" stroke="#1E293B" stroke-width="2"/>
  <line x1="118" y1="95" x2="148" y2="134" stroke="#1E293B" stroke-width="2"/>
  <circle cx="66" cy="95" r="11" fill="#2563EB"/><text x="66" y="99" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">C</text>
  <circle cx="118" cy="95" r="11" fill="#2563EB"/><text x="118" y="99" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">C</text>
  <circle cx="34" cy="54" r="8" fill="#EF4444"/><text x="34" y="57.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="34" cy="136" r="8" fill="#EF4444"/><text x="34" y="139.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="150" cy="54" r="8" fill="#EF4444"/><text x="150" y="57.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="150" cy="136" r="8" fill="#EF4444"/><text x="150" y="139.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF">H</text>
  <text x="92" y="82" text-anchor="middle" font-size="9.5" font-weight="600" fill="#1E293B">134 pm</text>
  <text x="92" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#15803D">Angles ≈ 120°</text>
  <text x="92" y="171" text-anchor="middle" font-size="9" fill="#475569">d(C–H) = 110 pm</text>

  <rect x="184" y="8" width="168" height="174" rx="10" fill="#FEF2F2" stroke="#FECACA" stroke-width="1.2"/>
  <text x="268" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#B91C1C">Acétylène C₂H₂ (linéaire)</text>
  <line x1="242" y1="90" x2="294" y2="90" stroke="#1E293B" stroke-width="1.8"/>
  <line x1="242" y1="95" x2="294" y2="95" stroke="#1E293B" stroke-width="2"/>
  <line x1="242" y1="100" x2="294" y2="100" stroke="#1E293B" stroke-width="1.8"/>
  <line x1="242" y1="95" x2="206" y2="95" stroke="#1E293B" stroke-width="2"/>
  <line x1="294" y1="95" x2="330" y2="95" stroke="#1E293B" stroke-width="2"/>
  <circle cx="242" cy="95" r="11" fill="#2563EB"/><text x="242" y="99" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">C</text>
  <circle cx="294" cy="95" r="11" fill="#2563EB"/><text x="294" y="99" text-anchor="middle" font-size="10.5" font-weight="700" fill="#FFF">C</text>
  <circle cx="204" cy="95" r="8" fill="#EF4444"/><text x="204" y="98.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF">H</text>
  <circle cx="332" cy="95" r="8" fill="#EF4444"/><text x="332" y="98.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF">H</text>
  <text x="268" y="80" text-anchor="middle" font-size="9.5" font-weight="600" fill="#1E293B">120 pm</text>
  <text x="268" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#15803D">Angle = 180°</text>
  <text x="268" y="171" text-anchor="middle" font-size="9" fill="#475569">d(C–H) = 110 pm</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Insaturations',
          stepTitle: 'Qu’est-ce qu’un hydrocarbure insaturé ?',
          paragraphText:
            'Un hydrocarbure insaturé comporte au moins une double liaison C=C (alcène) ou une triple liaison C≡C (alcyne) dans sa chaîne carbonée.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q1',
            type: 'mcq',
            prompt: 'Quelle caractéristique structurale définit un alcyne acyclique ?',
            options: [
              'Une molécule composée uniquement de C et H renfermant une triple liaison C≡C',
              'Une molécule renfermant uniquement des liaisons simples C–C et C–H',
              'Une molécule contenant un atome d’oxygène doublement lié au carbone',
              'Un hydrocarbure renfermant une double liaison C=C et aucune triple liaison',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un alcyne est un hydrocarbure insaturé caractérisé par la présence d’une triple liaison carbone-carbone C≡C.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Éthylène',
          stepTheme: 'Géométrie plane',
          stepTitle: 'Structure géométrique de l’éthylène C₂H₄',
          paragraphText:
            'Dans l’éthylène (CH₂=CH₂), chaque atome de carbone est trigonal : les 6 atomes sont dans un même plan, les angles de valence valent environ 120°, la longueur C=C mesure 134 pm et C–H mesure 110 pm.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q2',
            type: 'mcq',
            prompt: 'Quelles sont la géométrie et les valeurs d’angle caractéristiques de la molécule d’éthylène $\\mathrm{C_2H_4}$ ?',
            options: [
              'Molécule plane avec des angles de valence d’environ $120^\\circ$ et $d(\\mathrm{C=C}) = 134\\text{ pm}$',
              'Molécule tétraédrique non plane avec des angles de $109^\\circ 28\'$',
              'Molécule linéaire avec un angle de $180^\\circ$ et $d(\\mathrm{C\\equiv C}) = 120\\text{ pm}$',
              'Molécule pyramidale avec des angles droits de $90^\\circ$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les deux carbones de l’éthylène étant trigonaux et bloqués par la double liaison, les 6 atomes sont coplanaires avec des angles de 120° et d(C=C) = 134 pm.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Acétylène',
          stepTheme: 'Géométrie linéaire',
          stepTitle: 'Structure géométrique de l’acétylène C₂H₂',
          paragraphText:
            'Dans l’acétylène (HC≡CH), chaque carbone est digonal : la molécule est linéaire (4 atomes alignés), l’angle H–C≡C vaut 180° et la triple liaison C≡C est plus courte (120 pm) que C=C (134 pm) et C–C (154 pm).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q3',
            type: 'mcq',
            prompt: 'Quel classement range correctement les liaisons carbone-carbone par longueur décroissante ?',
            options: [
              '$d(\\mathrm{C-C}) = 154\\text{ pm} > d(\\mathrm{C=C}) = 134\\text{ pm} > d(\\mathrm{C\\equiv C}) = 120\\text{ pm}$',
              '$d(\\mathrm{C\\equiv C}) = 154\\text{ pm} > d(\\mathrm{C=C}) = 134\\text{ pm} > d(\\mathrm{C-C}) = 120\\text{ pm}$',
              '$d(\\mathrm{C=C}) > d(\\mathrm{C-C}) > d(\\mathrm{C\\equiv C})$',
              'Toutes les liaisons carbone-carbone mesurent exactement $110\\text{ pm}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Plus la multiplicité de la liaison entre deux carbones augmente, plus la distance entre leurs noyaux diminue : 154 pm (simple) > 134 pm (double) > 120 pm (triple).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Formules brutes',
          stepTheme: 'Calcul de n',
          stepTitle: 'Retrouver n à partir de la masse molaire',
          paragraphText:
            'Pour un alcène acyclique CₙH₂ₙ, M = 14n. Pour un alcyne acyclique CₙH₂ₙ₋₂, M = 14n - 2 (avec n ≥ 2 dans les deux cas).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q4',
            type: 'mcq',
            prompt: 'Un alcyne acyclique a une masse molaire $M = 54\\text{ g/mol}$. Quelle est sa formule brute ?',
            options: [
              '$\\mathrm{C_4H_6}$',
              '$\\mathrm{C_4H_8}$',
              '$\\mathrm{C_3H_4}$',
              '$\\mathrm{C_5H_8}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour un alcyne, $14n - 2 = 54 \\implies 14n = 56 \\implies n = 4$, soit $\\mathrm{C_4H_6}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'Valeur minimale de n',
          stepTitle: 'Pourquoi n ≥ 2 pour les alcènes et alcynes ?',
          paragraphText:
            'Une double ou triple liaison carbone-carbone exige au minimum deux atomes de carbone dans la molécule : il n’existe donc ni « méthène » ni « méthyne ».',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q5',
            type: 'mcq',
            prompt: 'Quel est le plus petit entier $n$ possible dans les formules générales $\\mathrm{C_nH_{2n}}$ (alcènes) et $\\mathrm{C_nH_{2n-2}}$ (alcynes) ?',
            options: [
              '$n = 2$ (éthylène $\\mathrm{C_2H_4}$ et acétylène $\\mathrm{C_2H_2}$)',
              '$n = 1$ (comme pour les alcanes)',
              '$n = 3$ (propène et propyne)',
              '$n = 4$ (butène et butyne)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Il faut au moins deux atomes de carbone pour former une liaison double C=C ou triple C≡C : la série commence donc à n = 2.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Reconnaissance',
          stepTitle: 'Classer un hydrocarbure selon sa formule brute',
          paragraphText:
            'La comparaison du nombre d’atomes H avec 2n permet d’identifier immédiatement un alcane (2n + 2), un alcène acyclique (2n) ou un alcyne acyclique (2n − 2).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q6',
            type: 'mcq',
            prompt: 'Parmi les formules brutes suivantes, laquelle correspond nécessairement à un alcène ou cyclane, et laquelle à un alcyne acyclique pour $n = 5$ ?',
            options: [
              '$\\mathrm{C_5H_{10}}$ (alcène) et $\\mathrm{C_5H_8}$ (alcyne)',
              '$\\mathrm{C_5H_{12}}$ (alcène) et $\\mathrm{C_5H_{10}}$ (alcyne)',
              '$\\mathrm{C_5H_8}$ (alcène) et $\\mathrm{C_5H_6}$ (alcyne)',
              '$\\mathrm{C_5H_{10}}$ (alcène) et $\\mathrm{C_5H_{12}}$ (alcyne)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour $n = 5$, $2n = 10$ donne $\\mathrm{C_5H_{10}}$ (pentène) et $2n - 2 = 8$ donne $\\mathrm{C_5H_8}$ (pentyne).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q1',
          type: 'mcq',
          prompt: 'Quelle caractéristique structurale définit un alcyne acyclique ?',
          options: [
            'Une molécule composée uniquement de C et H renfermant une triple liaison C≡C',
            'Une molécule renfermant uniquement des liaisons simples C–C et C–H',
            'Une molécule contenant un atome d’oxygène doublement lié au carbone',
            'Un hydrocarbure renfermant une double liaison C=C et aucune triple liaison',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un alcyne est un hydrocarbure insaturé caractérisé par la présence d’une triple liaison carbone-carbone C≡C.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q2',
          type: 'mcq',
          prompt: 'Quelles sont la géométrie et les valeurs d’angle caractéristiques de la molécule d’éthylène $\\mathrm{C_2H_4}$ ?',
          options: [
            'Molécule plane avec des angles de valence d’environ $120^\\circ$ et $d(\\mathrm{C=C}) = 134\\text{ pm}$',
            'Molécule tétraédrique non plane avec des angles de $109^\\circ 28\'$',
            'Molécule linéaire avec un angle de $180^\\circ$ et $d(\\mathrm{C\\equiv C}) = 120\\text{ pm}$',
            'Molécule pyramidale avec des angles droits de $90^\\circ$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les deux carbones de l’éthylène étant trigonaux et bloqués par la double liaison, les 6 atomes sont coplanaires avec des angles de 120° et d(C=C) = 134 pm.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q3',
          type: 'mcq',
          prompt: 'Quel classement range correctement les liaisons carbone-carbone par longueur décroissante ?',
          options: [
            '$d(\\mathrm{C-C}) = 154\\text{ pm} > d(\\mathrm{C=C}) = 134\\text{ pm} > d(\\mathrm{C\\equiv C}) = 120\\text{ pm}$',
            '$d(\\mathrm{C\\equiv C}) = 154\\text{ pm} > d(\\mathrm{C=C}) = 134\\text{ pm} > d(\\mathrm{C-C}) = 120\\text{ pm}$',
            '$d(\\mathrm{C=C}) > d(\\mathrm{C-C}) > d(\\mathrm{C\\equiv C})$',
            'Toutes les liaisons carbone-carbone mesurent exactement $110\\text{ pm}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Plus la multiplicité de la liaison entre deux carbones augmente, plus la distance entre leurs noyaux diminue : 154 pm (simple) > 134 pm (double) > 120 pm (triple).',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q4',
          type: 'mcq',
          prompt: 'Un alcyne acyclique a une masse molaire $M = 54\\text{ g/mol}$. Quelle est sa formule brute ?',
          options: [
            '$\\mathrm{C_4H_6}$',
            '$\\mathrm{C_4H_8}$',
            '$\\mathrm{C_3H_4}$',
            '$\\mathrm{C_5H_8}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour un alcyne, $14n - 2 = 54 \\implies 14n = 56 \\implies n = 4$, soit $\\mathrm{C_4H_6}$.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q5',
          type: 'mcq',
          prompt: 'Quel est le plus petit entier $n$ possible dans les formules générales $\\mathrm{C_nH_{2n}}$ (alcènes) et $\\mathrm{C_nH_{2n-2}}$ (alcynes) ?',
          options: [
            '$n = 2$ (éthylène $\\mathrm{C_2H_4}$ et acétylène $\\mathrm{C_2H_2}$)',
            '$n = 1$ (comme pour les alcanes)',
            '$n = 3$ (propène et propyne)',
            '$n = 4$ (butène et butyne)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Il faut au moins deux atomes de carbone pour former une liaison double C=C ou triple C≡C : la série commence donc à n = 2.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p01_q6',
          type: 'mcq',
          prompt: 'Parmi les formules brutes suivantes, laquelle correspond nécessairement à un alcène ou cyclane, et laquelle à un alcyne acyclique pour $n = 5$ ?',
          options: [
            '$\\mathrm{C_5H_{10}}$ (alcène) et $\\mathrm{C_5H_8}$ (alcyne)',
            '$\\mathrm{C_5H_{12}}$ (alcène) et $\\mathrm{C_5H_{10}}$ (alcyne)',
            '$\\mathrm{C_5H_8}$ (alcène) et $\\mathrm{C_5H_6}$ (alcyne)',
            '$\\mathrm{C_5H_{10}}$ (alcène) et $\\mathrm{C_5H_{12}}$ (alcyne)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour $n = 5$, $2n = 10$ donne $\\mathrm{C_5H_{10}}$ (pentène) et $2n - 2 = 8$ donne $\\mathrm{C_5H_8}$ (pentyne).',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Nomenclature IUPAC des alcènes, alcynes et isomérie de position
    // ========================================================================
    {
      id: 'premiere_c_chimie_l03_alcenes_alcynes_p02',
      order: 2,
      title: 'Nomenclature IUPAC des alcènes, alcynes et isomérie',
      summary:
        'Appliquer les règles IUPAC (chaîne la plus longue contenant la liaison multiple, priorité de numérotation sur C=C ou C≡C, suffixes -ène / -yne, cycloalcènes) et reconnaître les isomères de position.',
      conceptExplanation:
        "La nomenclature officielle d’un alcène ou d’un alcyne suit trois règles impératives :\n\n1. **Choix de la chaîne principale** : c’est la **chaîne carbonée la plus longue qui contient impérativement la double liaison $\\mathrm{C=C}$ ou la triple liaison $\\mathrm{C\\equiv C}$** (même si une autre chaîne sans l’insaturation était plus longue !). On remplace la terminaison *-ane* de l’alcane correspondant par **-ène** (alcène) ou **-yne** (alcyne).\n2. **Sens de numérotation (priorité absolue à l’insaturation)** : on numérote la chaîne principale à partir de l’extrémité qui attribue **les plus petits indices possibles aux deux carbones de la liaison multiple** (avant même les ramifications alkyles !). L’indice de position retenu est le plus petit des deux carbones doublement ou triplement liés, placé juste avant *-ène* ou *-yne* : ex. `but-1-ène`, `but-2-ène`, `3-méthylbut-1-ène`, `3-éthylpent-2-ène`, `4-méthylpent-2-yne`, `2,2-diméthylhex-3-yne`.\n3. **Cas particuliers** :\n   - Lorsqu’il n’y a aucune ambiguïté de position, l’indice 1 peut être omis (`propène`, `2-méthylpropène`, `propyne`).\n   - **Cycloalcènes** : les carbones de $\\mathrm{C=C}$ portent obligatoirement les numéros **1 et 2** (ex. `1-méthylcyclobutène`).\n   - **Isomérie de position** : des isomères ont la même chaîne carbonée mais diffèrent par l’indice de la liaison multiple (ex. `but-1-ène` et `but-2-ène`).",
      keyRule:
        'La chaîne principale doit contenir C=C ou C≡C, et la numérotation donne en priorité le plus petit indice à la liaison multiple avant de considérer les substituants.',
      formulas: [
        {
          name: 'Structure du nom IUPAC d’un alcène / alcyne',
          formula: '\\text{[Substituants par ordre alphabétique]}-[\\text{racine}]-[\\text{indice}]-\\text{ène / yne}',
          note: 'Exemple : CH₃-CH(CH₃)-C≡C-CH₃ → 4-méthylpent-2-yne (car 2 < 3)',
        },
      ],
      workedExample: {
        title: 'Nommer un alcène et un alcyne ramifiés (Exemples et Ex 1 p. 9)',
        statement:
          'Donne le nom IUPAC des molécules suivantes : (A) $\\mathrm{CH_3-CH(CH_3)-CH=CH-CH(C_2H_5)-CH_3}$ et (B) $\\mathrm{CH_3-C\\equiv C-CH(CH_3)-CH_2-CH_2-CH_3}$.',
        methodSteps: [
          '1) Pour (A) : en dépliant le groupe -C₂H₅ terminal à droite, la chaîne la plus longue contenant C=C compte 7 carbones (heptène) — attention : vérifions la chaîne réelle ! De gauche à droite : C1(CH₃)–C2H(CH₃)–C3H=C4H–C5H(CH₂CH₃)–C6H₃ donne 6 C jusqu’à C6, ou 7 C en continuant sur le C₂H₅ (-CH₂-CH₃) ! Numérotons depuis la droite : C1(CH₃)–C2H₂–C3H(CH₃)–C4H=C5H–C6H(CH₃)–C7H₃ → C=C entre 4 et 5 ; depuis la gauche : C1–C2–C3=C4–C5–C6–C7 → C=C entre 3 et 4 (plus petit !). Donc 2,5-diméthylhept-3-ène.',
          '2) Pour la molécule du cours CH₃-CH₂-CH(CH₃)-CH=CH-CH₂-CH₂-CH₃ (8 C) : en numérotant depuis la gauche, C=C est en 4-5 et le méthyle en 3 ; depuis la droite, C=C est en 4-5 (même indice) mais le méthyle serait en 6. On choisit donc la numérotation donnant le plus petit indice au méthyle : 3-méthyloct-4-ène.',
          '3) Pour (B) : chaîne à 7 carbones (heptyne). Depuis la gauche, C≡C est en 2 (contre 5 depuis la droite) et le méthyle est en 4 → 4-méthylhept-2-yne.',
        ],
        conclusion:
          'La liaison multiple tranche d’abord le sens de numérotation ; les substituants ne servent qu’en cas d’égalité d’indice pour l’insaturation.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Exemples officiels de nomenclature IUPAC (alcènes et alcynes)',
        tableData: {
          headers: ['Formule semi-développée', 'Chaîne principale', 'Sens prioritaire', 'Nom IUPAC'],
          rows: [
            ['CH₂=CH-CH₂-CH₃', '4 C (butène)', 'Gauche → C=C en 1', 'but-1-ène'],
            ['CH₃-CH=CH-CH₃', '4 C (butène)', 'Symétrique → C=C en 2', 'but-2-ène'],
            ['CH₂=C(CH₃)-CH₃', '3 C (propène)', 'C=C en 1, méthyle en 2', '2-méthylpropène'],
            ['CH₃-C≡C-CH(CH₃)-CH₃', '5 C (pentyne)', 'Gauche → C≡C en 2', '4-méthylpent-2-yne'],
            ['CH₃-C(CH₃)₂-C≡C-CH₂-CH₃', '6 C (hexyne)', 'Droite → C≡C en 3 (égalité) puis 2,2 < 5,5', '2,2-diméthylhex-3-yne'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Chaîne principale',
          stepTheme: 'Règle IUPAC n°1',
          stepTitle: 'Choisir la chaîne principale d’un alcène ou alcyne',
          paragraphText:
            'La chaîne principale est la plus longue chaîne carbonée renfermant la double liaison C=C ou la triple liaison C≡C.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q1',
            type: 'mcq',
            prompt: 'Comment nomme-t-on l’alcène $\\mathrm{CH_2=C(C_2H_5)-CH_2-CH_2-CH_3}$ ?',
            options: [
              '$2$-éthylpent-$1$-ène',
              '$3$-méthylidènehexane',
              '$4$-éthylpent-$4$-ène',
              '$2$-propylbut-$1$-ène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La chaîne la plus longue contenant la double liaison C=C compte 5 carbones (pent-1-ène, et non 6 car on doit partir de CH₂=) et porte un groupe éthyle en C2 : 2-éthylpent-1-ène.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Numérotation',
          stepTheme: 'Priorité à l’insaturation',
          stepTitle: 'Quel extrême choisit-on pour numéroter ?',
          paragraphText:
            'On numérote à partir de l’extrémité qui donne le plus petit indice aux carbones de la double ou triple liaison, même si un substituant alkyle se trouve plus près de l’autre extrémité.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q2',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH(CH_3)-C\\equiv C-CH_3}$ ?',
            options: [
              '$4$-méthylpent-$2$-yne',
              '$2$-méthylpent-$3$-yne',
              '$2$-méthylpent-$2$-yne',
              '$4$-méthylpent-$3$-yne',
            ],
            correctAnswerIndex: 0,
            explanation:
              'En numérotant depuis la droite, la triple liaison porte l’indice 2 (au lieu de 3 depuis la gauche). Le groupe méthyle se retrouve alors en position 4 : 4-méthylpent-2-yne.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Égalité d’indice',
          stepTheme: 'Départager par les substituants',
          stepTitle: 'Lorsque la liaison multiple est au milieu de la chaîne',
          paragraphText:
            'Si la liaison multiple reçoit le même indice dans les deux sens de lecture, on choisit le sens qui minimise les indices des substituants.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q3',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-C(CH_3)_2-C\\equiv C-CH_2-CH_3}$ ?',
            options: [
              '$2,2$-diméthylhex-$3$-yne',
              '$5,5$-diméthylhex-$3$-yne',
              '$2$-diméthylhex-$3$-yne',
              '$2,2$-diméthylhex-$4$-yne',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans les deux sens, la triple liaison est en position 3-4 (indice 3). En partant de la gauche, les deux méthyles portent les indices 2,2 (inférieurs à 5,5) : 2,2-diméthylhex-3-yne.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Ordre alphabétique',
          stepTheme: 'Plusieurs substituants',
          stepTitle: 'Combiner chaîne principale, priorité et ordre alphabétique',
          paragraphText:
            'Après avoir fixé l’indice de C=C ou C≡C, on classe tous les substituants par ordre alphabétique (sans tenir compte de di-, tri-).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q4',
            type: 'mcq',
            prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH_2-CH(C_2H_5)-CH=C(CH_3)-CH_2-CH_2-CH_3}$ ?',
            options: [
              '$3$-éthyl-$5$-méthyloct-$4$-ène',
              '$6$-éthyl-$4$-méthyloct-$4$-ène',
              '$5$-méthyl-$3$-éthyloct-$4$-ène',
              '$3$-éthyl-$5$-méthyloct-$3$-ène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La chaîne la plus longue contenant C=C compte 8 carbones avec C=C en position 4-5 dans les deux sens. De gauche à droite, les substituants sont en 3 (éthyle) et 5 (méthyle), inférieurs à (4,6) : 3-éthyl-5-méthyloct-4-ène.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Isomérie',
          stepTheme: 'Isomérie de position',
          stepTitle: 'Isomérie de position vs isomérie de chaîne',
          paragraphText:
            'Des molécules de même formule brute et de même squelette carboné mais dont la liaison multiple occupe des positions différentes sont des isomères de position.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q5',
            type: 'mcq',
            prompt: 'Quelle relation relie le $\\text{but-}1\\text{-ène}$ et le $\\text{but-}2\\text{-ène}$ ?',
            options: [
              'Ce sont des isomères de position (même formule $\\mathrm{C_4H_8}$, même chaîne à 4 C, position différente de $\\mathrm{C=C}$)',
              'Ce sont des isomères de chaîne ayant des nombres différents d’atomes de carbone',
              'Ce sont deux stéréoisomères $(Z)$ et $(E)$ d’une même molécule',
              'Il s’agit de la même molécule représentée différemment',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les deux ont une chaîne linéaire à 4 carbones (C₄H₈) mais la double liaison est placée entre C1–C2 dans l’un et entre C2–C3 dans l’autre.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Cycloalcène',
          stepTheme: 'Numérotation d’un cycle',
          stepTitle: 'Numéroter un cycloalcène substitué',
          paragraphText:
            'Dans un cycloalcène, les deux carbones de la double liaison portent toujours les indices 1 et 2, en choisissant le sens de rotation qui donne le plus petit indice au substituant.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q6',
            type: 'mcq',
            prompt: 'Dans un cycle à 4 carbones comportant une double liaison $\\mathrm{C=C}$ et un groupe méthyle porté par l’un des carbones de cette double liaison, quel est son nom IUPAC ?',
            options: [
              '$1$-méthylcyclobutène',
              '$2$-méthylcyclobut-$1$-ène',
              '$4$-méthylcyclobutène',
              'méthylbut-$1$-ène',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La double liaison occupe les positions 1 et 2 du cycle ; on attribue le numéro 1 au carbone doublement lié portant le substituant méthyle : 1-méthylcyclobutène.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q1',
          type: 'mcq',
          prompt: 'Comment nomme-t-on l’alcène $\\mathrm{CH_2=C(C_2H_5)-CH_2-CH_2-CH_3}$ ?',
          options: [
            '$2$-éthylpent-$1$-ène',
            '$3$-méthylidènehexane',
            '$4$-éthylpent-$4$-ène',
            '$2$-propylbut-$1$-ène',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La chaîne la plus longue contenant la double liaison C=C compte 5 carbones (pent-1-ène, et non 6 car on doit partir de CH₂=) et porte un groupe éthyle en C2 : 2-éthylpent-1-ène.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q2',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH(CH_3)-C\\equiv C-CH_3}$ ?',
          options: [
            '$4$-méthylpent-$2$-yne',
            '$2$-méthylpent-$3$-yne',
            '$2$-méthylpent-$2$-yne',
            '$4$-méthylpent-$3$-yne',
          ],
          correctAnswerIndex: 0,
          explanation:
            'En numérotant depuis la droite, la triple liaison porte l’indice 2 (au lieu de 3 depuis la gauche). Le groupe méthyle se retrouve alors en position 4 : 4-méthylpent-2-yne.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q3',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-C(CH_3)_2-C\\equiv C-CH_2-CH_3}$ ?',
          options: [
            '$2,2$-diméthylhex-$3$-yne',
            '$5,5$-diméthylhex-$3$-yne',
            '$2$-diméthylhex-$3$-yne',
            '$2,2$-diméthylhex-$4$-yne',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans les deux sens, la triple liaison est en position 3-4 (indice 3). En partant de la gauche, les deux méthyles portent les indices 2,2 (inférieurs à 5,5) : 2,2-diméthylhex-3-yne.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q4',
          type: 'mcq',
          prompt: 'Quel est le nom IUPAC de $\\mathrm{CH_3-CH_2-CH(C_2H_5)-CH=C(CH_3)-CH_2-CH_2-CH_3}$ ?',
          options: [
            '$3$-éthyl-$5$-méthyloct-$4$-ène',
            '$6$-éthyl-$4$-méthyloct-$4$-ène',
            '$5$-méthyl-$3$-éthyloct-$4$-ène',
            '$3$-éthyl-$5$-méthyloct-$3$-ène',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La chaîne la plus longue contenant C=C compte 8 carbones avec C=C en position 4-5 dans les deux sens. De gauche à droite, les substituants sont en 3 (éthyle) et 5 (méthyle), inférieurs à (4,6) : 3-éthyl-5-méthyloct-4-ène.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q5',
          type: 'mcq',
          prompt: 'Quelle relation relie le $\\text{but-}1\\text{-ène}$ et le $\\text{but-}2\\text{-ène}$ ?',
          options: [
            'Ce sont des isomères de position (même formule $\\mathrm{C_4H_8}$, même chaîne à 4 C, position différente de $\\mathrm{C=C}$)',
            'Ce sont des isomères de chaîne ayant des nombres différents d’atomes de carbone',
            'Ce sont deux stéréoisomères $(Z)$ et $(E)$ d’une même molécule',
            'Il s’agit de la même molécule représentée différemment',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les deux ont une chaîne linéaire à 4 carbones (C₄H₈) mais la double liaison est placée entre C1–C2 dans l’un et entre C2–C3 dans l’autre.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p02_q6',
          type: 'mcq',
          prompt: 'Dans un cycle à 4 carbones comportant une double liaison $\\mathrm{C=C}$ et un groupe méthyle porté par l’un des carbones de cette double liaison, quel est son nom IUPAC ?',
          options: [
            '$1$-méthylcyclobutène',
            '$2$-méthylcyclobut-$1$-ène',
            '$4$-méthylcyclobutène',
            'méthylbut-$1$-ène',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La double liaison occupe les positions 1 et 2 du cycle ; on attribue le numéro 1 au carbone doublement lié portant le substituant méthyle : 1-méthylcyclobutène.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Stéréoisomérie Z / E des alcènes
    // ========================================================================
    {
      id: 'premiere_c_chimie_l03_alcenes_alcynes_p03',
      order: 3,
      title: 'Stéréoisomérie Z / E des alcènes',
      summary:
        'Comprendre l’origine de la stéréoisomérie Z/E (absence de rotation libre autour de C=C), vérifier la condition d’existence et nommer (Z) ou (E) un alcène.',
      conceptExplanation:
        "Contrairement à une liaison simple $\\mathrm{C-C}$, la **double liaison $\\mathrm{C=C}$ ne permet pas la libre rotation** d’un carbone par rapport à l’autre : les 4 groupes liés aux deux carbones de $\\mathrm{C=C}$ sont bloqués dans un même plan.\n\n- **Condition nécessaire et suffisante d’existence** : un alcène $\\mathrm{A_1(B_1)C=C(A_2)B_2}$ présente deux stéréoisomères $(Z)$ et $(E)$ **si et seulement si chacun des deux carbones de la double liaison porte deux atomes ou groupes d’atomes différents** ($A_1 \\neq B_1$ **et** $A_2 \\neq B_2$).\n- **Stéréoisomère $(Z)$** (de l’allemand *zusammen* = ensemble ; dit aussi *cis* lorsque deux groupes identiques sont concernés) : les deux atomes d’hydrogène (ou les deux groupes principaux / substituants prioritaires) sont situés **du même côté** de l’axe de la double liaison $\\mathrm{C=C}$. Exemple : $(Z)\\text{-but-}2\\text{-ène}$ et $(Z)\\text{-hex-}2\\text{-ène}$.\n- **Stéréoisomère $(E)$** (de l’allemand *entgegen* = opposé ; dit aussi *trans*) : les deux atomes d’hydrogène (ou les deux groupes principaux) sont situés **de part et d’autre** de l’axe de la double liaison $\\mathrm{C=C}$. Exemple : $(E)\\text{-but-}2\\text{-ène}$ et $(E)\\text{-hex-}2\\text{-ène}$.\n- **Contre-exemples fondamentaux (Exercice 2 p. 9)** : le `but-1-ène` ($\\mathrm{CH_2=CH-CH_2-CH_3}$) et le `2-méthylpropène` ($\\mathrm{CH_2=C(CH_3)_2}$) **n’ont pas d’isomérie Z/E** car le premier carbone porte deux atomes H identiques.",
      keyRule:
        'Un alcène possède une stéréoisomérie Z/E ssi chacun des deux carbones de C=C porte deux substituants différents ; (Z) = groupes principaux du même côté, (E) = de part et d’autre de l’axe C=C.',
      formulas: [
        {
          name: 'Critère d’existence de la stéréoisomérie Z/E',
          formula: 'A_1 \\neq B_1 \\quad \\text{et} \\quad A_2 \\neq B_2 \\quad \\text{pour } A_1B_1\\mathrm{C=C}A_2B_2',
          note: 'Les alcynes (linéaires à 180°) et les alcènes terminaux R-CH=CH₂ ne présentent jamais d’isomérie Z/E',
        },
      ],
      workedExample: {
        title: 'Tester l’existence de stéréoisomères Z/E parmi les isomères de C₄H₈ (Ex 2 p. 9)',
        statement:
          'Parmi les 3 alcènes isomères de formule brute $\\mathrm{C_4H_8}$ (`but-1-ène`, `but-2-ène`, `2-méthylpropène`), lesquels donnent une stéréoisomérie $(Z)/(E)$ ?',
        methodSteps: [
          '1) but-1-ène (CH₂=CH-C₂H₅) : C1 porte deux H identiques → NON.',
          '2) 2-méthylpropène (CH₂=C(CH₃)₂) : C1 porte deux H identiques (et C2 deux méthyles identiques) → NON.',
          '3) but-2-ène (CH₃-CH=CH-CH₃) : C2 porte (-H et -CH₃) différents ET C3 porte (-H et -CH₃) différents → OUI, il existe le (Z)-but-2-ène et le (E)-but-2-ène.',
        ],
        conclusion:
          'Seul le but-2-ène existe sous les deux formes stéréoisomères (Z)-but-2-ène et (E)-but-2-ène.',
      },
      visualSchema: {
        type: 'geometry_svg',
        title: 'Stéréoisomères (Z)-but-2-ène et (E)-but-2-ène',
        svgContent: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stéréoisomères Z et E du but-2-ène">
  <rect x="8" y="8" width="168" height="159" rx="10" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
  <text x="92" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#065F46">(Z)-but-2-ène</text>
  <line x1="22" y1="88" x2="162" y2="88" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="68" y1="85" x2="116" y2="85" stroke="#1E293B" stroke-width="2.2"/>
  <line x1="68" y1="91" x2="116" y2="91" stroke="#1E293B" stroke-width="2.2"/>
  <line x1="68" y1="88" x2="44" y2="54" stroke="#1E293B" stroke-width="2"/>
  <line x1="116" y1="88" x2="140" y2="54" stroke="#1E293B" stroke-width="2"/>
  <line x1="68" y1="88" x2="44" y2="122" stroke="#1E293B" stroke-width="2"/>
  <line x1="116" y1="88" x2="140" y2="122" stroke="#1E293B" stroke-width="2"/>
  <text x="68" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">C</text>
  <text x="116" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">C</text>
  <text x="38" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#B91C1C">CH₃</text>
  <text x="146" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#B91C1C">CH₃</text>
  <text x="38" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155">H</text>
  <text x="146" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155">H</text>
  <text x="92" y="155" text-anchor="middle" font-size="9.5" font-weight="600" fill="#065F46">CH₃ du même côté</text>

  <rect x="184" y="8" width="168" height="159" rx="10" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.2"/>
  <text x="268" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#1E40AF">(E)-but-2-ène</text>
  <line x1="198" y1="88" x2="338" y2="88" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="244" y1="85" x2="292" y2="85" stroke="#1E293B" stroke-width="2.2"/>
  <line x1="244" y1="91" x2="292" y2="91" stroke="#1E293B" stroke-width="2.2"/>
  <line x1="244" y1="88" x2="220" y2="54" stroke="#1E293B" stroke-width="2"/>
  <line x1="292" y1="88" x2="316" y2="122" stroke="#1E293B" stroke-width="2"/>
  <line x1="244" y1="88" x2="220" y2="122" stroke="#1E293B" stroke-width="2"/>
  <line x1="292" y1="88" x2="316" y2="54" stroke="#1E293B" stroke-width="2"/>
  <text x="244" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">C</text>
  <text x="292" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">C</text>
  <text x="214" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#B91C1C">CH₃</text>
  <text x="322" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#B91C1C">CH₃</text>
  <text x="214" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155">H</text>
  <text x="322" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155">H</text>
  <text x="268" y="155" text-anchor="middle" font-size="9.5" font-weight="600" fill="#1E40AF">CH₃ de part et d’autre</text>
</svg>`,
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Origine',
          stepTheme: 'Rigidité de C=C',
          stepTitle: 'Pourquoi les alcènes peuvent-ils avoir des stéréoisomères Z/E ?',
          paragraphText:
            'Contrairement aux alcanes où les groupes tournent librement autour de C–C, la double liaison C=C empêche toute rotation libre entre les deux carbones trigonaux.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q1',
            type: 'mcq',
            prompt: 'Quelle propriété physique de la double liaison $\\mathrm{C=C}$ explique l’existence des stéréoisomères $(Z)$ et $(E)$ ?',
            options: [
              'L’impossibilité de rotation libre autour de la double liaison $\\mathrm{C=C}$',
              'La rotation rapide autour de la double liaison à température ambiante',
              'La forme linéaire à $180^\\circ$ des carbones trigonaux',
              'La possibilité pour le carbone de former 5 liaisons covalentes',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La double liaison bloque les 4 groupes liés aux deux carbones dans un même plan : passer de la forme (Z) à la forme (E) nécessite de rompre la liaison.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Condition Z/E',
          stepTheme: 'Critère d’existence',
          stepTitle: 'À quelle condition un alcène présente-t-il l’isomérie Z/E ?',
          paragraphText:
            'Il faut que chacun des deux carbones doublement liés porte deux atomes ou groupes d’atomes différents.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q2',
            type: 'mcq',
            prompt: 'Parmi les alcènes suivants, lequel NE présente PAS de stéréoisomérie $(Z)/(E)$ ?',
            options: [
              '$2$-méthylpropène ($\\mathrm{CH_2=C(CH_3)_2}$)',
              'but-$2$-ène ($\\mathrm{CH_3-CH=CH-CH_3}$)',
              'hex-$2$-ène ($\\mathrm{CH_3-CH=CH-C_3H_7}$)',
              'pent-$2$-ène ($\\mathrm{CH_3-CH=CH-C_2H_5}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans le 2-méthylpropène, C1 porte deux atomes H identiques et C2 porte deux groupes méthyles identiques : la condition Z/E n’est pas remplie.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Z vs E',
          stepTheme: 'Reconnaissance',
          stepTitle: 'Distinguer le stéréoisomère (Z) du stéréoisomère (E)',
          paragraphText:
            'Dans la forme (Z), les deux atomes d’hydrogène (ou les deux groupes alkyles principaux) sont du même côté de l’axe C=C ; dans la forme (E), ils sont de part et d’autre.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q3',
            type: 'mcq',
            prompt: 'Dans le stéréoisomère $(E)\\text{-hex-}2\\text{-ène}$ ($\\mathrm{CH_3-CH=CH-CH_2-CH_2-CH_3}$), comment sont placés le groupe $-\\mathrm{CH_3}$ et le groupe $-\\mathrm{CH_2-CH_2-CH_3}$ ?',
            options: [
              'De part et d’autre de l’axe de la double liaison $\\mathrm{C=C}$',
              'Tous les deux du même côté de l’axe de la double liaison $\\mathrm{C=C}$',
              'Perpendiculairement au plan de la molécule à $90^\\circ$',
              'Alignés sur un même axe à $180^\\circ$ comme dans un alcyne',
            ],
            correctAnswerIndex: 0,
            explanation:
              '(E) signifie « entgegen » (opposé) : les deux chaînes alkyles principales (ainsi que les deux H) se trouvent de part et d’autre de la double liaison.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Identification',
          stepTheme: 'Isomères de C₅H₁₀',
          stepTitle: 'Dénombrer les isomères présentant une stéréoisomérie Z/E',
          paragraphText:
            'Un alcène interne dont chaque carbone de C=C porte un H et un alkyle (R–CH=CH–R′) donne systématiquement deux stéréoisomères (Z) et (E).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q4',
            type: 'mcq',
            prompt: 'Parmi ces molécules, laquelle possède deux stéréoisomères $(Z)$ et $(E)$ ?',
            options: [
              '$\\text{pent-}2\\text{-ène}$ ($\\mathrm{CH_3-CH=CH-C_2H_5}$)',
              '$\\text{but-}1\\text{-ène}$ ($\\mathrm{CH_2=CH-CH_2-CH_3}$)',
              '$2$-méthylbut-$2$-ène ($\\mathrm{CH_3-C(CH_3)=CH-CH_3}$)',
              '$\\text{but-}2\\text{-yne}$ ($\\mathrm{CH_3-C\\equiv C-CH_3}$)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Dans le pent-2-ène, C2 porte H et CH₃, C3 porte H et C₂H₅ : les deux carbones portent bien des groupes différents, contrairement au but-1-ène (=CH₂), au 2-méthylbut-2-ène (=C(CH₃)₂) ou au but-2-yne (linéaire).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège classique',
          stepTheme: '3-éthylpent-2-ène',
          stepTitle: 'Attention aux deux groupes identiques sur C3 !',
          paragraphText:
            'Un élève croit parfois que tout alcène non terminal possède une isomérie Z/E. Or si l’un des carbones porte deux groupes alkyles identiques (ex. –C(C₂H₅)₂ ou –C(CH₃)₂), il n’y a qu’un seul composé.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q5',
            type: 'mcq',
            prompt: 'Pourquoi le $2$-méthylbut-$2$-ène ($\\mathrm{CH_3-C(CH_3)=CH-CH_3}$) ne présente-t-il PAS de stéréoisomérie $(Z)/(E)$ ?',
            options: [
              'Parce que le carbone $n^\\circ 2$ de la double liaison porte deux groupes méthyles $-\\mathrm{CH_3}$ identiques',
              'Parce qu’il s’agit d’un alcyne linéaire',
              'Parce que le carbone $n^\\circ 3$ porte deux atomes d’hydrogène identiques',
              'Parce qu’une molécule à 5 carbones est toujours libre de tourner autour de $\\mathrm{C=C}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C2 porte deux substituants identiques (-CH₃ et -CH₃) : échanger les groupes sur C3 redonne exactement la même molécule dans l’espace.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Bilan',
          stepTheme: 'Alcènes vs alcynes',
          stepTitle: 'Pourquoi les alcynes n’ont-ils jamais d’isomérie Z/E ?',
          paragraphText:
            'Les deux carbones d’une triple liaison C≡C étant digonaux (angle 180°), la partie R₁–C≡C–R₂ est rectiligne : il n’existe ni côté « même bord » ni côté « opposé ».',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q6',
            type: 'mcq',
            prompt: 'Peut-on observer une stéréoisomérie $(Z)/(E)$ pour le $\\text{but-}2\\text{-yne}$ ($\\mathrm{CH_3-C\\equiv C-CH_3}$) ?',
            options: [
              'Non, car chaque carbone de la triple liaison ne porte qu’un seul substituant sur un axe linéaire à $180^\\circ$',
              'Oui, $(Z)\\text{-but-}2\\text{-yne}$ et $(E)\\text{-but-}2\\text{-yne}$ existent à température ambiante',
              'Oui, mais uniquement en présence de lumière ultraviolette',
              'Non, uniquement parce que le but-2-yne contient 4 atomes de carbone',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un carbone triplement lié est digonal et n’a qu’un seul autre voisin : la géométrie est linéaire (180°), excluant toute isomérie Z/E.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q1',
          type: 'mcq',
          prompt: 'Quelle propriété physique de la double liaison $\\mathrm{C=C}$ explique l’existence des stéréoisomères $(Z)$ et $(E)$ ?',
          options: [
            'L’impossibilité de rotation libre autour de la double liaison $\\mathrm{C=C}$',
            'La rotation rapide autour de la double liaison à température ambiante',
            'La forme linéaire à $180^\\circ$ des carbones trigonaux',
            'La possibilité pour le carbone de former 5 liaisons covalentes',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La double liaison bloque les 4 groupes liés aux deux carbones dans un même plan : passer de la forme (Z) à la forme (E) nécessite de rompre la liaison.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q2',
          type: 'mcq',
          prompt: 'Parmi les alcènes suivants, lequel NE présente PAS de stéréoisomérie $(Z)/(E)$ ?',
          options: [
            '$2$-méthylpropène ($\\mathrm{CH_2=C(CH_3)_2}$)',
            'but-$2$-ène ($\\mathrm{CH_3-CH=CH-CH_3}$)',
            'hex-$2$-ène ($\\mathrm{CH_3-CH=CH-C_3H_7}$)',
            'pent-$2$-ène ($\\mathrm{CH_3-CH=CH-C_2H_5}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans le 2-méthylpropène, C1 porte deux atomes H identiques et C2 porte deux groupes méthyles identiques : la condition Z/E n’est pas remplie.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q3',
          type: 'mcq',
          prompt: 'Dans le stéréoisomère $(E)\\text{-hex-}2\\text{-ène}$ ($\\mathrm{CH_3-CH=CH-CH_2-CH_2-CH_3}$), comment sont placés le groupe $-\\mathrm{CH_3}$ et le groupe $-\\mathrm{CH_2-CH_2-CH_3}$ ?',
          options: [
            'De part et d’autre de l’axe de la double liaison $\\mathrm{C=C}$',
            'Tous les deux du même côté de l’axe de la double liaison $\\mathrm{C=C}$',
            'Perpendiculairement au plan de la molécule à $90^\\circ$',
            'Alignés sur un même axe à $180^\\circ$ comme dans un alcyne',
          ],
          correctAnswerIndex: 0,
          explanation:
            '(E) signifie « entgegen » (opposé) : les deux chaînes alkyles principales (ainsi que les deux H) se trouvent de part et d’autre de la double liaison.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q4',
          type: 'mcq',
          prompt: 'Parmi ces molécules, laquelle possède deux stéréoisomères $(Z)$ et $(E)$ ?',
          options: [
            '$\\text{pent-}2\\text{-ène}$ ($\\mathrm{CH_3-CH=CH-C_2H_5}$)',
            '$\\text{but-}1\\text{-ène}$ ($\\mathrm{CH_2=CH-CH_2-CH_3}$)',
            '$2$-méthylbut-$2$-ène ($\\mathrm{CH_3-C(CH_3)=CH-CH_3}$)',
            '$\\text{but-}2\\text{-yne}$ ($\\mathrm{CH_3-C\\equiv C-CH_3}$)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Dans le pent-2-ène, C2 porte H et CH₃, C3 porte H et C₂H₅ : les deux carbones portent bien des groupes différents, contrairement au but-1-ène (=CH₂), au 2-méthylbut-2-ène (=C(CH₃)₂) ou au but-2-yne (linéaire).',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q5',
          type: 'mcq',
          prompt: 'Pourquoi le $2$-méthylbut-$2$-ène ($\\mathrm{CH_3-C(CH_3)=CH-CH_3}$) ne présente-t-il PAS de stéréoisomérie $(Z)/(E)$ ?',
          options: [
            'Parce que le carbone $n^\\circ 2$ de la double liaison porte deux groupes méthyles $-\\mathrm{CH_3}$ identiques',
            'Parce qu’il s’agit d’un alcyne linéaire',
            'Parce que le carbone $n^\\circ 3$ porte deux atomes d’hydrogène identiques',
            'Parce qu’une molécule à 5 carbones est toujours libre de tourner autour de $\\mathrm{C=C}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C2 porte deux substituants identiques (-CH₃ et -CH₃) : échanger les groupes sur C3 redonne exactement la même molécule dans l’espace.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p03_q6',
          type: 'mcq',
          prompt: 'Peut-on observer une stéréoisomérie $(Z)/(E)$ pour le $\\text{but-}2\\text{-yne}$ ($\\mathrm{CH_3-C\\equiv C-CH_3}$) ?',
          options: [
            'Non, car chaque carbone de la triple liaison ne porte qu’un seul substituant sur un axe linéaire à $180^\\circ$',
            'Oui, $(Z)\\text{-but-}2\\text{-yne}$ et $(E)\\text{-but-}2\\text{-yne}$ existent à température ambiante',
            'Oui, mais uniquement en présence de lumière ultraviolette',
            'Non, uniquement parce que le but-2-yne contient 4 atomes de carbone',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Un carbone triplement lié est digonal et n’a qu’un seul autre voisin : la géométrie est linéaire (180°), excluant toute isomérie Z/E.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Combustion et réactions d’addition sur les alcènes (Markovnikov)
    // ========================================================================
    {
      id: 'premiere_c_chimie_l03_alcenes_alcynes_p04',
      order: 4,
      title: 'Combustion et additions sur les alcènes (Markovnikov)',
      summary:
        'Écrire les bilans de combustion complète et maîtriser les réactions d’addition sur les alcènes (H₂, Cl₂/Br₂, HCl, H₂O) avec la règle de Markovnikov.',
      conceptExplanation:
        "À l’inverse des alcanes, les alcènes et les alcynes subissent facilement des **réactions d’addition** grâce à l’ouverture de leur liaison multiple (passage à des carbones tétraédriques) :\n\n1. **Combustion complète** :\n   - Alcènes : $\\mathrm{C_nH_{2n} + \\frac{3n}{2}O_2 \\longrightarrow nCO_2 + nH_2O}$ (ex. $\\mathrm{C_2H_4 + 3O_2 \\to 2CO_2 + 2H_2O}$).\n   - Alcynes : $\\mathrm{C_nH_{2n-2} + \\frac{3n-1}{2}O_2 \\longrightarrow nCO_2 + (n-1)H_2O}$ (ex. $\\mathrm{2C_2H_2 + 5O_2 \\to 4CO_2 + 2H_2O}$).\n2. **Additions sur la double liaison $\\mathrm{C=C}$** :\n   - **Hydrogénation catalytique** ($+\\mathrm{H_2}$, catalyseur $\\mathrm{Ni}$ ou $\\mathrm{Pd}$) : donne un **alcane** ($\\mathrm{CH_2=CH_2 + H_2 \\to CH_3-CH_3}$).\n   - **Halogénation** ($+\\mathrm{Cl_2}$ ou $+\\mathrm{Br_2}$) : s’effectue rapidement **à l’obscurité** (contrairement aux alcanes) et donne un composé dihalogéné vicinal ($\\mathrm{CH_2=CH_2 + Br_2 \\to CH_2Br-CH_2Br}$, `1,2-dibromoéthane`). La **décoloration de l’eau de brome** (jaune-orangée $\\to$ incolore) est le **test caractéristique d’une insaturation**.\n   - **Addition de $\\mathrm{HCl}$ et hydratation ($+\\mathrm{H_2O}$ en milieu $\\mathrm{H_2SO_4}$)** : sur un alcène **dissymétrique**, on applique la **règle de Markovnikov** : **l’atome d’hydrogène $\\mathrm{H}$ se fixe préférentiellement sur le carbone de $\\mathrm{C=C}$ le plus hydrogéné** (qui porte déjà le plus d’atomes H), et le groupe $-\\mathrm{Cl}$ ou $-\\mathrm{OH}$ sur le carbone le moins hydrogéné.\n   - Exemples officiels : propène + $\\mathrm{H_2O} \\to$ **propan-2-ol** (majoritaire) ; but-1-ène + $\\mathrm{H_2O} \\to$ **butan-2-ol** ; 2-méthylpropène + $\\mathrm{H_2O} \\to$ **2-méthylpropan-2-ol** ; 2,3-diméthylbut-2-ène + $\\mathrm{HCl} \\to$ **2-chloro-2,3-diméthylbutane**.",
      keyRule:
        'Un alcène décolore le dibrome à l’obscurité par addition ; lors de l’addition de HCl ou H₂O sur un alcène dissymétrique (Markovnikov), H se fixe sur le carbone de C=C le plus hydrogéné et –Cl ou –OH sur le moins hydrogéné.',
      formulas: [
        {
          name: 'Combustion complète d’un alcène et d’un alcyne',
          formula: '\\mathrm{C_nH_{2n} + \\frac{3n}{2}O_2 \\to nCO_2 + nH_2O} \\quad ; \\quad \\mathrm{C_nH_{2n-2} + \\frac{3n-1}{2}O_2 \\to nCO_2 + (n-1)H_2O}',
          note: 'Pour l’acétylène (n = 2) : 2 C₂H₂ + 5 O₂ → 4 CO₂ + 2 H₂O (flamme très éclairante)',
        },
        {
          name: 'Règle de Markovnikov (exemple du propène)',
          formula: '\\mathrm{CH_3-CH=CH_2 + H-X \\longrightarrow CH_3-CHX-CH_3 \\quad (majoritaire)}',
          note: 'H va sur =CH₂ (2 H), et X (Cl ou OH) va sur -CH= (1 H)',
        },
      ],
      workedExample: {
        title: 'Identifier le produit majoritaire d’hydratation ou d’addition de HCl',
        statement:
          'Détermine le produit majoritaire de : (1) l’hydratation du `2-méthylpropène` en milieu acide ($\\mathrm{H_2SO_4}$) et (2) l’addition de $\\mathrm{HCl}$ sur le `2,3-diméthylbut-2-ène` ?',
        methodSteps: [
          '1) 2-méthylpropène : CH₂=C(CH₃)₂ + H₂O. Le carbone C1 (=CH₂) porte 2 H ; le carbone C2 (=C<) porte 0 H.',
          '   Par Markovnikov, H se fixe sur C1 (-CH₃) et -OH sur C2 : on obtient majoritairement le 2-méthylpropan-2-ol : CH₃-C(OH)(CH₃)-CH₃.',
          '2) 2,3-diméthylbut-2-ène : (CH₃)₂C=C(CH₃)₂ + HCl. Les deux carbones de C=C sont symétriques (0 H chacun) : H va sur l’un et Cl sur l’autre, donnant uniquement le 2-chloro-2,3-diméthylbutane : CH₃-CCl(CH₃)-CH(CH₃)-CH₃.',
        ],
        conclusion:
          'Il suffit de compter le nombre d’atomes H directement liés à chaque carbone de la double liaison avant d’appliquer la règle de Markovnikov.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Combustion',
          stepTheme: 'Équation-bilan',
          stepTitle: 'Équilibrer la combustion complète d’un alcène ou alcyne',
          paragraphText:
            'Lors d’une combustion complète dans un excès de dioxygène, un alcène CₙH₂ₙ forme exactement n moles de CO₂ et n moles de H₂O ; un alcyne forme n CO₂ et (n − 1) H₂O.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q1',
            type: 'mcq',
            prompt: 'Quelle est l’équation-bilan équilibrée de la combustion complète de l’acétylène $\\mathrm{C_2H_2}$ ?',
            options: [
              '$2\\mathrm{C_2H_2} + 5\\mathrm{O_2} \\longrightarrow 4\\mathrm{CO_2} + 2\\mathrm{H_2O}$',
              '$\\mathrm{C_2H_2} + 3\\mathrm{O_2} \\longrightarrow 2\\mathrm{CO_2} + 2\\mathrm{H_2O}$',
              '$2\\mathrm{C_2H_2} + 3\\mathrm{O_2} \\longrightarrow 4\\mathrm{CO_2} + 2\\mathrm{H_2O}$',
              '$\\mathrm{C_2H_2} + 2\\mathrm{O_2} \\longrightarrow 2\\mathrm{CO_2} + \\mathrm{H_2O}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pour $n = 2$ dans $\\mathrm{C_nH_{2n-2} + \\frac{3n-1}{2}O_2 \\to nCO_2 + (n-1)H_2O}$, le coefficient de $\\mathrm{O_2}$ vaut $5/2$ ; en multipliant par 2 : $2\\mathrm{C_2H_2} + 5\\mathrm{O_2} \\to 4\\mathrm{CO_2} + 2\\mathrm{H_2O}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Test d’insaturation',
          stepTheme: 'Dibrome à l’obscurité',
          stepTitle: 'Distinguer un alcène d’un alcane avec l’eau de brome',
          paragraphText:
            'L’eau de brome réagit par addition sur la double liaison même à l’obscurité en se décolorant, tandis qu’un alcane reste sans réaction à l’obscurité.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q2',
            type: 'mcq',
            prompt: 'Que produit l’addition du dibrome $\\mathrm{Br_2}$ sur l’éthylène $\\mathrm{CH_2=CH_2}$ à l’obscurité ?',
            options: [
              'Du $1,2$-dibromoéthane ($\\mathrm{CH_2Br-CH_2Br}$) avec décoloration de l’eau de brome',
              'Du bromoéthane et du bromure d’hydrogène $\\mathrm{HBr}$ par substitution',
              'Aucune réaction car $\\mathrm{Br_2}$ exige obligatoirement des UV',
              'Du $1,1$-dibromoéthane exclusivement',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Chaque carbone de la double liaison fixe un atome Br lors de l’ouverture de C=C, donnant le 1,2-dibromoéthane et décolorant le dibrome.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Hydrogénation',
          stepTheme: 'Passage à l’alcane',
          stepTitle: 'Hydrogénation catalytique d’un alcène',
          paragraphText:
            'En présence de nickel (Ni) ou de palladium (Pd), un alcène fixe une mole de H₂ par mole d’alcène pour former l’alcane correspondant.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q3',
            type: 'mcq',
            prompt: 'Quel produit obtient-on par hydrogénation catalytique du $\\text{but-}2\\text{-ène}$ en présence de nickel ?',
            options: [
              'Le butane ($\\mathrm{CH_3-CH_2-CH_2-CH_3}$)',
              'Le $2$-méthylpropane',
              'Le but-$1$-ène',
              'Le but-$2$-yne',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’addition de H₂ sur CH₃–CH=CH–CH₃ conserve le squelette linéaire à 4 carbones et donne le butane.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Markovnikov',
          stepTheme: 'Addition de HCl',
          stepTitle: 'Énoncer et appliquer la règle de Markovnikov',
          paragraphText:
            'Lors de l’addition de H–Cl ou H–OH sur un alcène dissymétrique, l’atome H se fixe majoritairement sur le carbone doublement lié le plus hydrogéné.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q4',
            type: 'mcq',
            prompt: 'Quel produit majoritaire obtient-on par addition de chlorure d’hydrogène $\\mathrm{HCl}$ sur le propène ($\\mathrm{CH_3-CH=CH_2}$) ?',
            options: [
              'Le $2$-chloropropane ($\\mathrm{CH_3-CHCl-CH_3}$)',
              'Le $1$-chloropropane ($\\mathrm{CH_3-CH_2-CH_2Cl}$)',
              'Le $1,2$-dichloropropane',
              'Le chlorométhane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le carbone terminal (=CH₂) porte 2 atomes H contre 1 seul pour =CH– : d’après Markovnikov, H se fixe sur =CH₂ et Cl sur le carbone central (2-chloropropane).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Hydratation',
          stepTheme: 'Synthèse d’un alcool',
          stepTitle: 'Hydratation d’un alcène en présence d’acide sulfurique',
          paragraphText:
            'L’addition d’eau H–OH catalysée par l’acide sulfurique H₂SO₄ obéit à la règle de Markovnikov et transforme un alcène en alcool.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q5',
            type: 'mcq',
            prompt: 'Quel alcool obtient-on majoritairement par hydratation du $2$-méthylpropène ($\\mathrm{CH_2=C(CH_3)_2}$) en milieu acide ?',
            options: [
              'Le $2$-méthylpropan-$2$-ol ($\\mathrm{CH_3-C(OH)(CH_3)-CH_3}$)',
              'Le $2$-méthylpropan-$1$-ol ($\\mathrm{HO-CH_2-CH(CH_3)_2}$)',
              'Le butan-$2$-ol',
              'Le butan-$1$-ol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'C1 (=CH₂) porte 2 H et C2 (=C(CH₃)₂) porte 0 H : H se fixe sur C1 et –OH sur C2, formant le 2-méthylpropan-2-ol.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Vigilance',
          stepTheme: 'Cas de C₄H₈',
          stepTitle: 'Comparer l’hydratation de but-1-ène et but-2-ène',
          paragraphText:
            'Bien que différents par la position de C=C, le but-1-ène (via Markovnikov) et le but-2-ène (symétrique) conduisent tous deux au même alcool majoritaire : le butan-2-ol.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q6',
            type: 'mcq',
            prompt: 'Quel alcool est majoritairement obtenu par hydratation du $\\text{but-}1\\text{-ène}$ comme par hydratation du $\\text{but-}2\\text{-ène}$ ?',
            options: [
              'Le $\\text{butan-}2\\text{-ol}$',
              'Le $\\text{butan-}1\\text{-ol}$',
              'Le $2$-méthylpropan-$2$-ol',
              'L’éthanol',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Avec but-1-ène (CH₂=CH–CH₂–CH₃), –OH va sur C2 par Markovnikov ; avec but-2-ène (CH₃–CH=CH–CH₃), C2 et C3 sont équivalents : dans les deux cas on obtient le butan-2-ol.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q1',
          type: 'mcq',
          prompt: 'Quelle est l’équation-bilan équilibrée de la combustion complète de l’acétylène $\\mathrm{C_2H_2}$ ?',
          options: [
            '$2\\mathrm{C_2H_2} + 5\\mathrm{O_2} \\longrightarrow 4\\mathrm{CO_2} + 2\\mathrm{H_2O}$',
            '$\\mathrm{C_2H_2} + 3\\mathrm{O_2} \\longrightarrow 2\\mathrm{CO_2} + 2\\mathrm{H_2O}$',
            '$2\\mathrm{C_2H_2} + 3\\mathrm{O_2} \\longrightarrow 4\\mathrm{CO_2} + 2\\mathrm{H_2O}$',
            '$\\mathrm{C_2H_2} + 2\\mathrm{O_2} \\longrightarrow 2\\mathrm{CO_2} + \\mathrm{H_2O}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Pour $n = 2$ dans $\\mathrm{C_nH_{2n-2} + \\frac{3n-1}{2}O_2 \\to nCO_2 + (n-1)H_2O}$, le coefficient de $\\mathrm{O_2}$ vaut $5/2$ ; en multipliant par 2 : $2\\mathrm{C_2H_2} + 5\\mathrm{O_2} \\to 4\\mathrm{CO_2} + 2\\mathrm{H_2O}$.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q2',
          type: 'mcq',
          prompt: 'Que produit l’addition du dibrome $\\mathrm{Br_2}$ sur l’éthylène $\\mathrm{CH_2=CH_2}$ à l’obscurité ?',
          options: [
            'Du $1,2$-dibromoéthane ($\\mathrm{CH_2Br-CH_2Br}$) avec décoloration de l’eau de brome',
            'Du bromoéthane et du bromure d’hydrogène $\\mathrm{HBr}$ par substitution',
            'Aucune réaction car $\\mathrm{Br_2}$ exige obligatoirement des UV',
            'Du $1,1$-dibromoéthane exclusivement',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Chaque carbone de la double liaison fixe un atome Br lors de l’ouverture de C=C, donnant le 1,2-dibromoéthane et décolorant le dibrome.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q3',
          type: 'mcq',
          prompt: 'Quel produit obtient-on par hydrogénation catalytique du $\\text{but-}2\\text{-ène}$ en présence de nickel ?',
          options: [
            'Le butane ($\\mathrm{CH_3-CH_2-CH_2-CH_3}$)',
            'Le $2$-méthylpropane',
            'Le but-$1$-ène',
            'Le but-$2$-yne',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’addition de H₂ sur CH₃–CH=CH–CH₃ conserve le squelette linéaire à 4 carbones et donne le butane.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q4',
          type: 'mcq',
          prompt: 'Quel produit majoritaire obtient-on par addition de chlorure d’hydrogène $\\mathrm{HCl}$ sur le propène ($\\mathrm{CH_3-CH=CH_2}$) ?',
          options: [
            'Le $2$-chloropropane ($\\mathrm{CH_3-CHCl-CH_3}$)',
            'Le $1$-chloropropane ($\\mathrm{CH_3-CH_2-CH_2Cl}$)',
            'Le $1,2$-dichloropropane',
            'Le chlorométhane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le carbone terminal (=CH₂) porte 2 atomes H contre 1 seul pour =CH– : d’après Markovnikov, H se fixe sur =CH₂ et Cl sur le carbone central (2-chloropropane).',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q5',
          type: 'mcq',
          prompt: 'Quel alcool obtient-on majoritairement par hydratation du $2$-méthylpropène ($\\mathrm{CH_2=C(CH_3)_2}$) en milieu acide ?',
          options: [
            'Le $2$-méthylpropan-$2$-ol ($\\mathrm{CH_3-C(OH)(CH_3)-CH_3}$)',
            'Le $2$-méthylpropan-$1$-ol ($\\mathrm{HO-CH_2-CH(CH_3)_2}$)',
            'Le butan-$2$-ol',
            'Le butan-$1$-ol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'C1 (=CH₂) porte 2 H et C2 (=C(CH₃)₂) porte 0 H : H se fixe sur C1 et –OH sur C2, formant le 2-méthylpropan-2-ol.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p04_q6',
          type: 'mcq',
          prompt: 'Quel alcool est majoritairement obtenu par hydratation du $\\text{but-}1\\text{-ène}$ comme par hydratation du $\\text{but-}2\\text{-ène}$ ?',
          options: [
            'Le $\\text{butan-}2\\text{-ol}$',
            'Le $\\text{butan-}1\\text{-ol}$',
            'Le $2$-méthylpropan-$2$-ol',
            'L’éthanol',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Avec but-1-ène (CH₂=CH–CH₂–CH₃), –OH va sur C2 par Markovnikov ; avec but-2-ène (CH₃–CH=CH–CH₃), C2 et C3 sont équivalents : dans les deux cas on obtient le butan-2-ol.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Réactions d’addition sur les alcynes et schémas réactionnels
    // ========================================================================
    {
      id: 'premiere_c_chimie_l03_alcenes_alcynes_p05',
      order: 5,
      title: 'Additions sur les alcynes et schémas réactionnels',
      summary:
        'Maîtriser les additions en 1 ou 2 étapes sur la triple liaison C≡C (hydrogénation ménagée vs complète, + 2 Br₂, + 2 HCl, hydratation en éthanal) et résoudre les bilans quantitatifs.',
      conceptExplanation:
        "La triple liaison $\\mathrm{C\\equiv C}$ permet **jusqu’à deux additions successives** (fixation de 1 ou 2 moles de réactif par mole d’alcyne) :\n\n1. **Hydrogénation** :\n   - **Complète** ($+2\\mathrm{H_2}$, catalyseur **nickel $\\mathrm{Ni}$** ou **platine $\\mathrm{Pt}$**) $\\to$ **alcane** : $\\mathrm{HC\\equiv CH + 2H_2 \\xrightarrow{Ni} CH_3-CH_3}$.\n   - **Ménagée (partielle)** ($+\\mathrm{H_2}$, catalyseur **palladium désactivé**) $\\to$ **alcène** : $\\mathrm{HC\\equiv CH + H_2 \\xrightarrow{Pd\\text{ désactivé}} CH_2=CH_2}$.\n2. **Addition de dihalogène** ($+2\\mathrm{Br_2}$ ou $+2\\mathrm{Cl_2}$) : donne un dérivé **tétrahalogéné** : $\\mathrm{HC\\equiv CH + 2Br_2 \\to CHBr_2-CHBr_2}$ (`1,1,2,2-tétrabromoéthane`) ; avec le but-2-yne $\\to$ `2,2,3,3-tétrabromobutane`.\n3. **Addition de $\\mathrm{HCl}$** :\n   - 1re mole : $\\mathrm{HC\\equiv CH + HCl \\to CH_2=CHCl}$ (`chloroéthylène` / chlorure de vinyle).\n   - 2 moles : $\\mathrm{HC\\equiv CH + 2HCl \\to CH_3-CHCl_2}$ (`1,1-dichloroéthane`, par Markovnikov lors de la seconde étape).\n4. **Hydratation de l’acétylène** : en présence d’ions mercure(II) $\\mathrm{Hg^{2+}}$ en milieu acide ($\\mathrm{H^+}$), l’addition d’une molécule d’eau sur $\\mathrm{C_2H_2}$ conduit à l’**éthanal** (aldéhyde) : $\\mathrm{HC\\equiv CH + H_2O \\xrightarrow{Hg^{2+}, H^+} CH_3-CHO}$.",
      keyRule:
        'Sur un alcyne, H₂/Pd désactivé arrête l’hydrogénation à l’alcène (sinon H₂/Ni donne l’alcane), + 2 Br₂ donne un tétrabromoalcane, + 2 HCl donne un dérivé géminé (1,1-dichloroéthane), et + H₂O (Hg²⁺, H⁺) sur C₂H₂ donne l’éthanal CH₃–CHO.',
      formulas: [
        {
          name: 'Hydrogénation ménagée vs complète de l’acétylène',
          formula: '\\mathrm{C_2H_2 + H_2 \\xrightarrow{Pd\\text{ désactivé}} C_2H_4} \\quad ; \\quad \\mathrm{C_2H_2 + 2H_2 \\xrightarrow{Ni} C_2H_6}',
          note: 'Permet de préparer un alcène contrôlé à partir d’un alcyne',
        },
        {
          name: 'Hydratation catalytique de l’acétylène',
          formula: '\\mathrm{HC\\equiv CH + H_2O \\xrightarrow{Hg^{2+},\\,H^+} CH_3-CHO}',
          note: 'Formation d’éthanal (aldéhyde), et non d’un alcool stable',
        },
      ],
      workedExample: {
        title: 'Résoudre un schéma réactionnel et un dosage gravimétrique (Ex 4 & Ex 5 p. 10–11)',
        statement:
          'Un alcyne B ($M_B = 26\\text{ g/mol}$) subit une hydrogénation sur Pd désactivé pour donner A. A réagit avec $\\mathrm{HCl}$ pour donner C et avec $\\mathrm{H_2O}$ pour donner E ; B hydraté en présence de $\\mathrm{Hg^{2+}}$ donne D. De plus, on hydrogène complètement $20\\text{ cm}^3$ de B ($V_m = 22{,}4\\text{ L/mol}$) pour obtenir de l’éthane. Calcule la masse d’éthane obtenue et identifie A, B, C, D, E.',
        methodSteps: [
          '1) Alcyne B : 14n − 2 = 26 → n = 2, donc B est l’acétylène (C₂H₂).',
          '2) Schéma : B (C₂H₂) + H₂ (Pd désactivé) → A = éthylène (C₂H₄) ; A + HCl → C = chloroéthane (CH₃-CH₂Cl) ; A + H₂O → E = éthanol (CH₃-CH₂OH) ; B + H₂O (Hg²⁺) → D = éthanal (CH₃-CHO).',
          '3) Bilan molaire d’hydrogénation complète (C₂H₂ + 2 H₂ → C₂H₆) : n(C₂H₆) = n(C₂H₂) = V / Vm = 0,020 / 22,4 ≈ 8,93 × 10⁻⁴ mol.',
          '4) Masse d’éthane (M = 30 g/mol) : m = 30 × (0,020 / 22,4) ≈ 0,0268 g (soit environ 0,027 g).',
        ],
        conclusion:
          'Dans une chaîne de réactions organiques, la conservation du squelette carboné permet d’identifier toute la série dès qu’un seul composé est connu.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Catalyseurs',
          stepTheme: 'Hydrogénation contrôlée',
          stepTitle: 'Arrêter l’hydrogénation d’un alcyne au stade de l’alcène',
          paragraphText:
            'Alors que le nickel ou le platine conduisent à l’alcane par fixation de 2 H₂, le palladium désactivé permet d’arrêter la réaction après fixation d’une seule mole de H₂ sur C≡C.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q1',
            type: 'mcq',
            prompt: 'Quel catalyseur permet de transformer l’acétylène $\\mathrm{C_2H_2}$ en éthylène $\\mathrm{C_2H_4}$ par hydrogénation ménagée sans aller jusqu’à l’éthane ?',
            options: [
              'Le palladium désactivé',
              'Le nickel en excès de dihydrogène',
              'L’acide sulfurique concentré $\\mathrm{H_2SO_4}$',
              'La lumière ultraviolette seule',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le palladium désactivé modère l’activité catalytique pour bloquer l’hydrogénation après une seule addition : C₂H₂ + H₂ → C₂H₄.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Halogénation',
          stepTheme: 'Double addition de Br₂',
          stepTitle: 'Addition complète de dibrome sur un alcyne',
          paragraphText:
            'Une mole d’alcyne peut fixer 2 moles de dibrome Br₂ pour former un dérivé tétrabromé saturé.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q2',
            type: 'mcq',
            prompt: 'Quel produit obtient-on par addition complète de deux moles de $\\mathrm{Br_2}$ sur une mole de $\\text{but-}2\\text{-yne}$ ($\\mathrm{CH_3-C\\equiv C-CH_3}$) ?',
            options: [
              'Le $2,2,3,3$-tétrabromobutane ($\\mathrm{CH_3-CBr_2-CBr_2-CH_3}$)',
              'Le $1,2,3,4$-tétrabromobutane',
              'Le $2,3$-dibromobutane',
              'Le $1,1,2,2$-tétrabromoéthane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Chaque carbone de la triple liaison C2≡C3 fixe deux atomes Br lors des deux additions successives, donnant le 2,2,3,3-tétrabromobutane.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Hydratation',
          stepTheme: 'Cas de l’acétylène',
          stepTitle: 'Produit de l’hydratation de l’acétylène',
          paragraphText:
            'L’addition d’eau sur l’acétylène en présence de sels de mercure (Hg²⁺) en milieu acide donne directement un aldéhyde : l’éthanal (CH₃–CHO).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q3',
            type: 'mcq',
            prompt: 'Quel est le produit formé lors de l’hydratation de l’acétylène $\\mathrm{HC\\equiv CH}$ en présence d’ions $\\mathrm{Hg^{2+}}$ en milieu acide ?',
            options: [
              'L’éthanal ($\\mathrm{CH_3-CHO}$)',
              'L’éthanol ($\\mathrm{CH_3-CH_2OH}$)',
              'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
              'Le $1,1$-dichloroéthane',
            ],
            correctAnswerIndex: 0,
            explanation:
              'HC≡CH + H₂O (catalyse Hg²⁺, H⁺) → CH₃–CHO (éthanal). L’éthanol provient, lui, de l’hydratation de l’éthylène C₂H₄.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Stoechiométrie',
          stepTheme: 'Addition de 2 HCl',
          stepTitle: 'Écrire correctement l’addition totale de HCl sur l’acétylène',
          paragraphText:
            'Pour passer de l’acétylène au 1,1-dichloroéthane, il faut additionner deux molécules de chlorure d’hydrogène HCl (et non une seule).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q4',
            type: 'mcq',
            prompt: 'Quelle équation traduit la transformation complète de l’acétylène en $1,1$-dichloroéthane ?',
            options: [
              '$\\mathrm{HC\\equiv CH + 2HCl \\longrightarrow CH_3-CHCl_2}$',
              '$\\mathrm{HC\\equiv CH + HCl \\longrightarrow CH_3-CHCl_2}$',
              '$\\mathrm{HC\\equiv CH + 2HCl \\longrightarrow CH_2Cl-CH_2Cl}$',
              '$\\mathrm{HC\\equiv CH + HCl \\longrightarrow CH_2=CHCl + H_2}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'L’équation équilibrée nécessite 2 HCl ; la première addition donne CH₂=CHCl, puis la seconde obéit à Markovnikov (H sur =CH₂ et Cl sur =CHCl) pour former CH₃–CHCl₂.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Analyse élémentaire',
          stepTheme: 'Exercice quantitatif',
          stepTitle: 'Déterminer la formule d’un alcène par fixation de dibrome',
          paragraphText:
            'Si un alcène CₙH₂ₙ fixe exactement Br₂, la masse molaire du dérivé dibromé vaut 14n + 160 (avec M(Br) = 80 g/mol), ce qui permet de trouver n à partir du pourcentage massique de brome.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q5',
            type: 'mcq',
            prompt: 'Un alcène $\\mathrm{C_nH_{2n}}$ réagit mole à mole avec $\\mathrm{Br_2}$ ($M(\\mathrm{Br}) = 80\\text{ g/mol}$) pour donner un composé dibromé renfermant $74\\%$ en masse de brome. Quelle est la formule brute de l’alcène ?',
            options: [
              '$\\mathrm{C_4H_8}$',
              '$\\mathrm{C_3H_6}$',
              '$\\mathrm{C_2H_4}$',
              '$\\mathrm{C_5H_{10}}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$\\frac{160}{14n + 160} = 0{,}74 \\implies 14n + 160 \\approx 216{,}2 \\implies 14n \\approx 56{,}2 \\implies n = 4$, soit $\\mathrm{C_4H_8}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Bilan volumique',
          stepTheme: 'Situation p. 8–9',
          stepTitle: 'Calculer la masse de produit lors d’une hydrogénation complète',
          paragraphText:
            'Lors de l’hydrogénation complète C₂H₂ + 2 H₂ → C₂H₆, une mole d’acétylène produit une mole d’éthane (M = 30 g/mol).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q6',
            type: 'mcq',
            prompt: 'On hydrogène complètement $V = 20\\text{ cm}^3$ ($0{,}020\\text{ L}$) d’acétylène $\\mathrm{C_2H_2}$ ($V_m = 22{,}4\\text{ L/mol}$) en présence de nickel pour obtenir de l’éthane ($M = 30\\text{ g/mol}$). Quelle masse d’éthane se forme ?',
            options: [
              '$m \\approx 0{,}027\\text{ g}$ ($0{,}0268\\text{ g}$)',
              '$m \\approx 0{,}27\\text{ g}$',
              '$m \\approx 0{,}013\\text{ g}$',
              '$m \\approx 0{,}60\\text{ g}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$n(\\mathrm{C_2H_6}) = n(\\mathrm{C_2H_2}) = \\frac{0{,}020}{22{,}4} \\approx 8{,}93 \\times 10^{-4}\\text{ mol}$, d’où $m = 30 \\times \\frac{0{,}020}{22{,}4} \\approx 0{,}0268\\text{ g} \\approx 0{,}027\\text{ g}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q1',
          type: 'mcq',
          prompt: 'Quel catalyseur permet de transformer l’acétylène $\\mathrm{C_2H_2}$ en éthylène $\\mathrm{C_2H_4}$ par hydrogénation ménagée sans aller jusqu’à l’éthane ?',
          options: [
            'Le palladium désactivé',
            'Le nickel en excès de dihydrogène',
            'L’acide sulfurique concentré $\\mathrm{H_2SO_4}$',
            'La lumière ultraviolette seule',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le palladium désactivé modère l’activité catalytique pour bloquer l’hydrogénation après une seule addition : C₂H₂ + H₂ → C₂H₄.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q2',
          type: 'mcq',
          prompt: 'Quel produit obtient-on par addition complète de deux moles de $\\mathrm{Br_2}$ sur une mole de $\\text{but-}2\\text{-yne}$ ($\\mathrm{CH_3-C\\equiv C-CH_3}$) ?',
          options: [
            'Le $2,2,3,3$-tétrabromobutane ($\\mathrm{CH_3-CBr_2-CBr_2-CH_3}$)',
            'Le $1,2,3,4$-tétrabromobutane',
            'Le $2,3$-dibromobutane',
            'Le $1,1,2,2$-tétrabromoéthane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Chaque carbone de la triple liaison C2≡C3 fixe deux atomes Br lors des deux additions successives, donnant le 2,2,3,3-tétrabromobutane.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q3',
          type: 'mcq',
          prompt: 'Quel est le produit formé lors de l’hydratation de l’acétylène $\\mathrm{HC\\equiv CH}$ en présence d’ions $\\mathrm{Hg^{2+}}$ en milieu acide ?',
          options: [
            'L’éthanal ($\\mathrm{CH_3-CHO}$)',
            'L’éthanol ($\\mathrm{CH_3-CH_2OH}$)',
            'L’acide éthanoïque ($\\mathrm{CH_3-COOH}$)',
            'Le $1,1$-dichloroéthane',
          ],
          correctAnswerIndex: 0,
          explanation:
            'HC≡CH + H₂O (catalyse Hg²⁺, H⁺) → CH₃–CHO (éthanal). L’éthanol provient, lui, de l’hydratation de l’éthylène C₂H₄.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q4',
          type: 'mcq',
          prompt: 'Quelle équation traduit la transformation complète de l’acétylène en $1,1$-dichloroéthane ?',
          options: [
            '$\\mathrm{HC\\equiv CH + 2HCl \\longrightarrow CH_3-CHCl_2}$',
            '$\\mathrm{HC\\equiv CH + HCl \\longrightarrow CH_3-CHCl_2}$',
            '$\\mathrm{HC\\equiv CH + 2HCl \\longrightarrow CH_2Cl-CH_2Cl}$',
            '$\\mathrm{HC\\equiv CH + HCl \\longrightarrow CH_2=CHCl + H_2}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'L’équation équilibrée nécessite 2 HCl ; la première addition donne CH₂=CHCl, puis la seconde obéit à Markovnikov (H sur =CH₂ et Cl sur =CHCl) pour former CH₃–CHCl₂.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q5',
          type: 'mcq',
          prompt: 'Un alcène $\\mathrm{C_nH_{2n}}$ réagit mole à mole avec $\\mathrm{Br_2}$ ($M(\\mathrm{Br}) = 80\\text{ g/mol}$) pour donner un composé dibromé renfermant $74\\%$ en masse de brome. Quelle est la formule brute de l’alcène ?',
          options: [
            '$\\mathrm{C_4H_8}$',
            '$\\mathrm{C_3H_6}$',
            '$\\mathrm{C_2H_4}$',
            '$\\mathrm{C_5H_{10}}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$\\frac{160}{14n + 160} = 0{,}74 \\implies 14n + 160 \\approx 216{,}2 \\implies 14n \\approx 56{,}2 \\implies n = 4$, soit $\\mathrm{C_4H_8}$.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p05_q6',
          type: 'mcq',
          prompt: 'On hydrogène complètement $V = 20\\text{ cm}^3$ ($0{,}020\\text{ L}$) d’acétylène $\\mathrm{C_2H_2}$ ($V_m = 22{,}4\\text{ L/mol}$) en présence de nickel pour obtenir de l’éthane ($M = 30\\text{ g/mol}$). Quelle masse d’éthane se forme ?',
          options: [
            '$m \\approx 0{,}027\\text{ g}$ ($0{,}0268\\text{ g}$)',
            '$m \\approx 0{,}27\\text{ g}$',
            '$m \\approx 0{,}013\\text{ g}$',
            '$m \\approx 0{,}60\\text{ g}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$n(\\mathrm{C_2H_6}) = n(\\mathrm{C_2H_2}) = \\frac{0{,}020}{22{,}4} \\approx 8{,}93 \\times 10^{-4}\\text{ mol}$, d’où $m = 30 \\times \\frac{0{,}020}{22{,}4} \\approx 0{,}0268\\text{ g} \\approx 0{,}027\\text{ g}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Polymérisation, polymères usuels et enjeux environnementaux
    // ========================================================================
    {
      id: 'premiere_c_chimie_l03_alcenes_alcynes_p06',
      order: 6,
      title: 'Polymérisation, polymères usuels et impact environnemental',
      summary:
        'Définir la polyaddition (monomère, motif, polymère, degré de polymérisation n), connaître PE, PVC et PS ainsi que leurs usages, et situer les enjeux des polymères biodégradables.',
      conceptExplanation:
        "Une **polymérisation (polyaddition)** est une réaction d’addition répétée d’un très grand nombre $n$ de molécules insaturées identiques appelées **monomères** pour former une macromolécule appelée **polymère** (sans élimination de sous-produit) :\n\n$$n\\;\\mathrm{CH_2=CH-X} \\longrightarrow \\big(-\\mathrm{CH_2-CHX}-\\big)_n$$\n\n- **Motif** : unité structurale $-\\mathrm{CH_2-CHX}-$ qui se répète $n$ fois dans la chaîne macromoléculaire ; sa masse molaire $M_{\\text{motif}}$ est égale à celle du monomère $M_{\\text{monomère}}$.\n- **Degré (ou indice) de polymérisation $n$** : nombre moyen de motifs par chaîne de polymère, donné par :\n  $$n = \\frac{M_{\\text{polymère}}}{M_{\\text{motif}}}$$\n- **Principaux polymères dérivés d’alcènes** :\n  1. **Polyéthylène (`PE`)** : monomère **éthylène** ($\\mathrm{CH_2=CH_2}$, $M = 28\\text{ g/mol}$), motif $-\\mathrm{CH_2-CH_2}-$ (sachets, emballages, jouets, bouteilles).\n  2. **Polychlorure de vinyle (`PVC`)** : monomère **chlorure de vinyle** ou chloroéthylène ($\\mathrm{CH_2=CHCl}$, $M = 62{,}5\\text{ g/mol}$), motif $-\\mathrm{CH_2-CHCl}-$ (tuyauterie, gaines, profilés).\n  3. **Polystyrène (`PS`)** : monomère **styrène** ($\\mathrm{C_6H_5-CH=CH_2}$, $M = 104\\text{ g/mol}$), motif $-\\mathrm{CH(C_6H_5)-CH_2}-$ (emballages anti-chocs, pots de yaourt).\n- **Environnement (Documentation p. 12)** : la plupart des matières plastiques issues du pétrole sont **non biodégradables** et s’accumulent dans les sols et les océans ; d’où la nécessité du **recyclage** et du développement de **polymères biodégradables** (biomatériaux, par ex. à base d’amidon).",
      keyRule:
        'En polyaddition, la masse molaire du motif égale celle du monomère ; l’indice de polymérisation vaut n = M(polymère) / M(motif). Les polymères majeurs sont PE (C₂H₄), PVC (CH₂=CHCl) et PS (C₆H₅–CH=CH₂).',
      formulas: [
        {
          name: 'Degré de polymérisation n',
          formula: 'n = \\frac{M_{\\text{polymère}}}{M_{\\text{motif}}}',
          note: 'Avec M(motif) = M(monomère) car toute la masse du monomère est conservée dans la polyaddition',
        },
      ],
      workedExample: {
        title: 'Calculer l’indice de polymérisation d’un polymère halogéné (Ex 3 p. 10)',
        statement:
          'On polymérise le $1,1$-dichloroéthylène ($\\mathrm{CH_2=CCl_2}$) pour obtenir le polychlorure de vinylidène (PVDC) de masse molaire moyenne $M_{\\text{polymère}} = 85\\text{ kg/mol}$. Écris la formule du motif et calcule le degré de polymérisation $n$ ($M(\\mathrm{C})=12$, $M(\\mathrm{H})=1$, $M(\\mathrm{Cl})=35{,}5\\text{ g/mol}$).',
        methodSteps: [
          '1) Ouverture de la double liaison : le motif du polymère est (–CH₂–CCl₂–).',
          '2) Masse molaire du motif : M(motif) = 2×12 + 2×1 + 2×35,5 = 24 + 2 + 71 = 97 g/mol.',
          '3) Conversion et division : M(polymère) = 85 kg/mol = 85 000 g/mol, donc n = 85 000 / 97 ≈ 876.',
        ],
        conclusion:
          'Une chaîne moyenne de ce polymère contient environ 876 motifs –CH₂–CCl₂–.',
      },
      visualSchema: {
        type: 'custom_svg',
        title: 'Synthèse des principaux polymères industriels et leurs monomères',
        tableData: {
          headers: ['Polymère (sigle)', 'Monomère', 'Motif répétitif', 'Exemples d’applications'],
          rows: [
            ['Polyéthylène (PE)', 'Éthylène : CH₂=CH₂', '–(CH₂–CH₂)–', 'Sachets, emballages, jouets, bouteilles'],
            ['Polychlorure de vinyle (PVC)', 'Chlorure de vinyle : CH₂=CHCl', '–(CH₂–CHCl)–', 'Tuyauterie, gaines, profilés'],
            ['Polystyrène (PS)', 'Styrène : C₆H₅–CH=CH₂', '–(CH(C₆H₅)–CH₂)–', 'Pots de yaourt, emballages anti-chocs'],
          ],
        },
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Polyaddition',
          stepTheme: 'Vocabulaire',
          stepTitle: 'Monomère, motif et polymère',
          paragraphText:
            'Dans une polyaddition, n molécules identiques de monomère porteur d’une double liaison s’additionnent bout à bout pour former un polymère constitué de n motifs identiques.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q1',
            type: 'mcq',
            prompt: 'Comment s’appelle la petite unité structurale $-\\mathrm{CH_2-CHCl}-$ qui se répète $n$ fois dans la chaîne du PVC ?',
            options: [
              'Le motif du polymère',
              'Le catalyseur de réaction',
              'L’indice de polymérisation',
              'Le stéréoisomère $(Z)$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La molécule de départ CH₂=CHCl est le monomère, l’enchaînement répétitif –(CH₂–CHCl)– est le motif et n est le degré de polymérisation.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'PE / PVC / PS',
          stepTheme: 'Reconnaître le monomère',
          stepTitle: 'Associer un polymère usuel à son monomère',
          paragraphText:
            'Pour retrouver le monomère à partir du motif d’une polyaddition, il suffit de refermer la double liaison C=C entre les deux carbones du motif.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q2',
            type: 'mcq',
            prompt: 'Quel monomère permet de synthétiser le polystyrène (PS) utilisé dans les pots de yaourt et les emballages anti-chocs ?',
            options: [
              'Le styrène : $\\mathrm{C_6H_5-CH=CH_2}$',
              'Le chlorure de vinyle : $\\mathrm{CH_2=CHCl}$',
              'L’éthylène : $\\mathrm{CH_2=CH_2}$',
              'L’acétylène : $\\mathrm{HC\\equiv CH}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le styrène C₆H₅–CH=CH₂ comporte une double liaison C=C dont l’ouverture conduit au motif –(CH(C₆H₅)–CH₂)– du polystyrène.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'PVC',
          stepTheme: 'Applications et formule',
          stepTitle: 'Le polychlorure de vinyle (PVC)',
          paragraphText:
            'Le polychlorure de vinyle (PVC), issu du chloroéthylène CH₂=CHCl, est très utilisé dans la tuyauterie, les gaines et les menuiseries.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q3',
            type: 'mcq',
            prompt: 'Quel polymère a pour motif $-\\mathrm{CH_2-CHCl}-$ et sert notamment à fabriquer les canalisations et tuyauteries rigides ?',
            options: [
              'Le polychlorure de vinyle (PVC)',
              'Le polyéthylène (PE)',
              'Le polystyrène (PS)',
              'Le polypropylène (PP)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Le motif –CH₂–CHCl– contient un atome de chlore par motif : il correspond au polychlorure de vinyle (PVC).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Degré n',
          stepTheme: 'Calcul de n',
          stepTitle: 'Calculer le degré de polymérisation n',
          paragraphText:
            'On exprime la masse molaire du polymère et celle du motif dans la même unité (en g/mol), puis on effectue le quotient n = M(polymère) / M(motif).',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q4',
            type: 'mcq',
            prompt: 'Un échantillon de polychlorure de vinylidène obtenu par polymérisation du $1,1$-dichloroéthylène ($\\mathrm{CH_2=CCl_2}$, $M_{\\text{motif}} = 97\\text{ g/mol}$) a une masse molaire moyenne $M = 85\\text{ kg/mol}$. Quel est son degré de polymérisation $n$ ?',
            options: [
              '$n \\approx 876$',
              '$n \\approx 88$',
              '$n \\approx 1\\,328$',
              '$n \\approx 8\\,760$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$n = \\frac{85\\,000}{97} \\approx 876$. Attention à bien convertir $85\\text{ kg/mol}$ en $85\\,000\\text{ g/mol}$ avant de diviser par $97\\text{ g/mol}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Erreur d’unité',
          stepTheme: 'kg/mol vs g/mol',
          stepTitle: 'Ne jamais oublier de convertir kg/mol en g/mol !',
          paragraphText:
            'Les masses molaires des polymères sont souvent données en kg/mol alors que celles des motifs sont calculées en g/mol : oublier le facteur 1000 divise n par 1000.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q5',
            type: 'mcq',
            prompt: 'Un polyéthylène ($M_{\\text{motif}} = 28\\text{ g/mol}$) possède un degré de polymérisation $n = 2\\,500$. Quelle est sa masse molaire exprimée en $\\text{kg/mol}$ ?',
            options: [
              '$70\\text{ kg/mol}$',
              '$70\\,000\\text{ kg/mol}$',
              '$7\\text{ kg/mol}$',
              '$0{,}07\\text{ kg/mol}$',
            ],
            correctAnswerIndex: 0,
            explanation:
              '$M = n \\times M_{\\text{motif}} = 2\\,500 \\times 28 = 70\\,000\\text{ g/mol} = 70\\text{ kg/mol}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Écologie',
          stepTheme: 'Plastiques & environnement',
          stepTitle: 'Pollutions plastiques et polymères biodégradables',
          paragraphText:
            'Les plastiques synthétiques traditionnels ne sont pas biodégradables ; le tri, le recyclage et la fabrication de polymères biodégradables permettent de réduire leur impact environnemental.',
          exercise: {
            id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q6',
            type: 'mcq',
            prompt: 'Pourquoi la gestion des déchets de polymères usuels (PE, PVC, PS) représente-t-elle un enjeu environnemental majeur ?',
            options: [
              'Parce qu’ils ne sont pas biodégradables et persistent durablement dans les écosystèmes, justifiant le recyclage et les polymères biodégradables',
              'Parce qu’ils disparaissent spontanément dans l’eau de pluie en quelques heures',
              'Parce qu’ils sont exclusivement solubles dans le dioxygène de l’air',
              'Parce que les polymères ont tous un degré de polymérisation inférieur à 2',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Les plastiques issus du pétrole résistent à la dégradation microbienne ; il est donc essentiel de les recycler ou de développer des biopolymères biodégradables.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q1',
          type: 'mcq',
          prompt: 'Comment s’appelle la petite unité structurale $-\\mathrm{CH_2-CHCl}-$ qui se répète $n$ fois dans la chaîne du PVC ?',
          options: [
            'Le motif du polymère',
            'Le catalyseur de réaction',
            'L’indice de polymérisation',
            'Le stéréoisomère $(Z)$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'La molécule de départ CH₂=CHCl est le monomère, l’enchaînement répétitif –(CH₂–CHCl)– est le motif et n est le degré de polymérisation.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q2',
          type: 'mcq',
          prompt: 'Quel monomère permet de synthétiser le polystyrène (PS) utilisé dans les pots de yaourt et les emballages anti-chocs ?',
          options: [
            'Le styrène : $\\mathrm{C_6H_5-CH=CH_2}$',
            'Le chlorure de vinyle : $\\mathrm{CH_2=CHCl}$',
            'L’éthylène : $\\mathrm{CH_2=CH_2}$',
            'L’acétylène : $\\mathrm{HC\\equiv CH}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le styrène C₆H₅–CH=CH₂ comporte une double liaison C=C dont l’ouverture conduit au motif –(CH(C₆H₅)–CH₂)– du polystyrène.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q3',
          type: 'mcq',
          prompt: 'Quel polymère a pour motif $-\\mathrm{CH_2-CHCl}-$ et sert notamment à fabriquer les canalisations et tuyauteries rigides ?',
          options: [
            'Le polychlorure de vinyle (PVC)',
            'Le polyéthylène (PE)',
            'Le polystyrène (PS)',
            'Le polypropylène (PP)',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Le motif –CH₂–CHCl– contient un atome de chlore par motif : il correspond au polychlorure de vinyle (PVC).',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q4',
          type: 'mcq',
          prompt: 'Un échantillon de polychlorure de vinylidène obtenu par polymérisation du $1,1$-dichloroéthylène ($\\mathrm{CH_2=CCl_2}$, $M_{\\text{motif}} = 97\\text{ g/mol}$) a une masse molaire moyenne $M = 85\\text{ kg/mol}$. Quel est son degré de polymérisation $n$ ?',
          options: [
            '$n \\approx 876$',
            '$n \\approx 88$',
            '$n \\approx 1\\,328$',
            '$n \\approx 8\\,760$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$n = \\frac{85\\,000}{97} \\approx 876$. Attention à bien convertir $85\\text{ kg/mol}$ en $85\\,000\\text{ g/mol}$ avant de diviser par $97\\text{ g/mol}$.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q5',
          type: 'mcq',
          prompt: 'Un polyéthylène ($M_{\\text{motif}} = 28\\text{ g/mol}$) possède un degré de polymérisation $n = 2\\,500$. Quelle est sa masse molaire exprimée en $\\text{kg/mol}$ ?',
          options: [
            '$70\\text{ kg/mol}$',
            '$70\\,000\\text{ kg/mol}$',
            '$7\\text{ kg/mol}$',
            '$0{,}07\\text{ kg/mol}$',
          ],
          correctAnswerIndex: 0,
          explanation:
            '$M = n \\times M_{\\text{motif}} = 2\\,500 \\times 28 = 70\\,000\\text{ g/mol} = 70\\text{ kg/mol}$.',
        },
        {
          id: 'premiere_c_chimie_l03_alcenes_alcynes_p06_q6',
          type: 'mcq',
          prompt: 'Pourquoi la gestion des déchets de polymères usuels (PE, PVC, PS) représente-t-elle un enjeu environnemental majeur ?',
          options: [
            'Parce qu’ils ne sont pas biodégradables et persistent durablement dans les écosystèmes, justifiant le recyclage et les polymères biodégradables',
            'Parce qu’ils disparaissent spontanément dans l’eau de pluie en quelques heures',
            'Parce qu’ils sont exclusivement solubles dans le dioxygène de l’air',
            'Parce que les polymères ont tous un degré de polymérisation inférieur à 2',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Les plastiques issus du pétrole résistent à la dégradation microbienne ; il est donc essentiel de les recycler ou de développer des biopolymères biodégradables.',
        },
      ],
    },
  ],
};
