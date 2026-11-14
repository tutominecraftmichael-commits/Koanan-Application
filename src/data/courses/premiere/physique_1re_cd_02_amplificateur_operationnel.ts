import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « PC 1ère CDE - P10 : L'amplificateur opérationnel » (format v2).
export const PHYSIQUE_1RE_CD_L02_AMPLIFICATEUR_OPERATIONNEL: CurriculumChapter = {
  id: 'premiere_c_physique_l02_amplificateur_operationnel',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 2,
  title: 'Leçon 2 : L’amplificateur opérationnel',
  summary:
    'Description du boîtier DIL-8 et symbole de l’AO, caractéristique U_s = f(U_d) (régime linéaire et régime saturé), propriétés de l’AO idéal, montages suiveur, inverseur, non inverseur, sommateur et comparateur.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'PC 1ère C - P10 : L’amplificateur opérationnel.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Description, boîtier à 8 bornes et symbole de l’AO
    // ========================================================================
    {
      id: 'premiere_c_physique_l02_amplificateur_operationnel_p01',
      order: 1,
      title: 'Description, brochage à 8 bornes et symbole de l’AO',
      summary:
        'Identifier les 8 bornes d’un amplificateur opérationnel à l’aide de l’encoche repère et lire son symbole normalisé.',
      conceptExplanation:
        "L’**amplificateur opérationnel** (noté **AO** ou **AOP**) est un **circuit intégré linéaire** très répandu (radios, électronique de pointe, capteurs). À l’origine conçu pour effectuer des opérations mathématiques (addition, soustraction, intégration, dérivation), il renferme des dizaines de transistors (dont une paire différentielle d’entrée) et des éléments passifs sur silicium.\n\n- **Boîtier à 8 bornes (repère par encoche)** : en regardant le boîtier par-dessus avec l’encoche à droite (ou en comptant dans le sens trigonométrique à partir du point/encoche) :\n  - **Borne 2** : entrée inverseuse ($E^-$).\n  - **Borne 3** : entrée non inverseuse ($E^+$).\n  - **Bornes 4 et 7** : bornes d’alimentation continue (négative $A^- = -V_{CC}$ en 4, positive $A^+ = +V_{CC}$ en 7).\n  - **Borne 6** : borne de sortie ($S$).\n  - **Bornes 1 et 5** : réglage de décalage (*offset*).\n  - **Borne 8** : **NC** (Non Connectée).\n- **Symbole normalisé** : rectangle (ou triangle) comportant les deux entrées marquées `−` ($E^-$) et `+` ($E^+$), le signe `▷ ∞` rappelant le gain infini du modèle idéal, et la sortie $S$.",
      keyRule:
        'Sur un AO standard à 8 bornes : 2 = E⁻ (inverseuse), 3 = E⁺ (non inverseuse), 4 = A⁻ (−Vcc), 7 = A⁺ (+Vcc), 6 = S (sortie), 1 et 5 = offset, 8 = NC.',
      formulas: [
        {
          name: 'Tension différentielle d’entrée',
          formula: 'U_d = V^+ - V^- = U_+ - U_-',
          note: 'Différence de potentiel entre l’entrée non inverseuse E⁺ (borne 3) et l’entrée inverseuse E⁻ (borne 2)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Brochage standard à 8 bornes (encoche) et symbole de l’AO (p. 1)',
        caption: 'Repérage normalisé des 8 pattes du boîtier et symbole électrique (E⁻, E⁺, ▷ ∞, S).',
        svgContent: `<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <!-- DIP-8 package -->
  <rect x="35" y="46" width="145" height="68" rx="4" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>
  <!-- Encoche & dot -->
  <path d="M 180 71 A 9 9 0 0 0 180 89" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="164" cy="60" r="3.5" fill="#1e293b"/>
  <text x="186" y="84" font-size="10" fill="#475569">encoche</text>
  <!-- Top pins 4, 3, 2, 1 -->
  <rect x="49" y="34" width="10" height="12" fill="#94a3b8" stroke="#1e293b"/>
  <rect x="85" y="34" width="10" height="12" fill="#2563eb" stroke="#1e293b"/>
  <rect x="121" y="34" width="10" height="12" fill="#dc2626" stroke="#1e293b"/>
  <rect x="157" y="34" width="10" height="12" fill="#cbd5e1" stroke="#1e293b"/>
  <text x="51" y="59" font-size="11" font-weight="bold" fill="#1e293b">4</text>
  <text x="87" y="59" font-size="11" font-weight="bold" fill="#1e293b">3</text>
  <text x="123" y="59" font-size="11" font-weight="bold" fill="#1e293b">2</text>
  <text x="159" y="59" font-size="11" font-weight="bold" fill="#1e293b">1</text>
  <text x="45" y="26" font-size="11" font-weight="bold" fill="#1e293b">A⁻</text>
  <text x="82" y="26" font-size="11" font-weight="bold" fill="#2563eb">E⁺</text>
  <text x="118" y="26" font-size="11" font-weight="bold" fill="#dc2626">E⁻</text>
  <text x="148" y="26" font-size="10" fill="#475569">offset</text>
  <!-- Bottom pins 5, 6, 7, 8 -->
  <rect x="49" y="114" width="10" height="12" fill="#cbd5e1" stroke="#1e293b"/>
  <rect x="85" y="114" width="10" height="12" fill="#059669" stroke="#1e293b"/>
  <rect x="121" y="114" width="10" height="12" fill="#94a3b8" stroke="#1e293b"/>
  <rect x="157" y="114" width="10" height="12" fill="#e2e8f0" stroke="#1e293b"/>
  <text x="51" y="108" font-size="11" font-weight="bold" fill="#1e293b">5</text>
  <text x="87" y="108" font-size="11" font-weight="bold" fill="#1e293b">6</text>
  <text x="123" y="108" font-size="11" font-weight="bold" fill="#1e293b">7</text>
  <text x="159" y="108" font-size="11" font-weight="bold" fill="#1e293b">8</text>
  <text x="40" y="141" font-size="10" fill="#475569">offset</text>
  <text x="87" y="141" font-size="11" font-weight="bold" fill="#059669">S</text>
  <text x="118" y="141" font-size="11" font-weight="bold" fill="#1e293b">A⁺</text>
  <text x="154" y="141" font-size="10" fill="#475569">NC</text>
  <!-- Symbol on right -->
  <rect x="262" y="45" width="70" height="68" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <line x1="232" y1="62" x2="262" y2="62" stroke="#dc2626" stroke-width="2"/>
  <line x1="232" y1="96" x2="262" y2="96" stroke="#2563eb" stroke-width="2"/>
  <line x1="332" y1="79" x2="360" y2="79" stroke="#059669" stroke-width="2"/>
  <text x="213" y="66" font-size="12" font-weight="bold" fill="#dc2626">E⁻</text>
  <text x="213" y="100" font-size="12" font-weight="bold" fill="#2563eb">E⁺</text>
  <text x="364" y="83" font-size="12" font-weight="bold" fill="#059669">S</text>
  <text x="268" y="66" font-size="14" font-weight="bold" fill="#dc2626">−</text>
  <text x="268" y="101" font-size="14" font-weight="bold" fill="#2563eb">+</text>
  <polygon points="292,55 304,61 292,67" fill="none" stroke="#1e293b" stroke-width="1.6"/>
  <text x="308" y="66" font-size="14" font-weight="bold" fill="#1e293b">∞</text>
  <text x="255" y="136" font-size="11" fill="#475569">Symbole normalisé</text>
</svg>`,
      },
      workedExample: {
        title: 'Repérer les bornes d’un circuit intégré AO sur plaque d’essai',
        statement:
          'Lors d’un TP sur le TL081 / LM741 (boîtier 8 broches), tu dois câbler l’entrée non inverseuse, l’entrée inverseuse, l’alimentation symétrique $\\pm 15\\,\\mathrm{V}$ et la sortie. Quelles bornes branches-tu ?',
        methodSteps: [
          '1) Repérer l’encoche du boîtier pour compter les bornes de 1 à 8 dans le sens standard.',
          '2) Connecter la borne 3 (E⁺) et la borne 2 (E⁻) aux entrées du montage.',
          '3) Connecter +15 V sur la borne 7 (A⁺), −15 V sur la borne 4 (A⁻), et mesurer U_s sur la borne 6 (S).',
          '4) Laisser la borne 8 (NC) libre et ne pas confondre les bornes 1 et 5 (offset).',
        ],
        conclusion: 'Entrées : 2 (E⁻) et 3 (E⁺) ; Sortie : 6 (S) ; Alimentations : 4 (A⁻) et 7 (A⁺).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Famille & Rôle',
          stepTheme: 'Circuit intégré',
          stepTitle: 'À quelle famille appartient l’amplificateur opérationnel ?',
          paragraphText:
            'L’amplificateur opérationnel (AO ou AOP) appartient à la famille des **circuits intégrés linéaires**. Il se présente sous forme d’un boîtier comportant **huit (8) bornes** de branchement et sert à amplifier ou réaliser des opérations sur des tensions (addition, soustraction, dérivation, intégration…).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p01_q1',
            type: 'mcq',
            prompt: 'Complète correctement : « L’amplificateur opérationnel fait partie de la famille des … et se présente sous la forme d’un boîtier possédant … de branchement. » (Exercice 2 p. 6)',
            options: [
              'circuits intégrés / huit bornes',
              'dipôles passifs / deux bornes',
              'générateurs idéaux / quatre bornes',
              'transistors simples / trois bornes',
            ],
            correctAnswerIndex: 0,
            explanation: 'Un AO est un circuit intégré linéaire en boîtier standard à 8 bornes.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Entrées 2 et 3',
          stepTheme: 'Brochage',
          stepTitle: 'Identifier l’entrée inverseuse et l’entrée non inverseuse',
          paragraphText:
            'À partir du repère (encoche) du boîtier : la **borne 2** est l’entrée inverseuse ($E^-$, marquée `−`), et la **borne 3** est l’entrée non inverseuse ($E^+$, marquée `+`).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p01_q2',
            type: 'mcq',
            prompt: 'Sur le brochage normalisé à 8 bornes d’un amplificateur opérationnel, à quelles bornes correspondent respectivement $E^-$ et $E^+$ ?',
            options: [
              'Borne 2 pour E⁻ et borne 3 pour E⁺',
              'Borne 3 pour E⁻ et borne 2 pour E⁺',
              'Borne 4 pour E⁻ et borne 7 pour E⁺',
              'Borne 1 pour E⁻ et borne 5 pour E⁺',
            ],
            correctAnswerIndex: 0,
            explanation: 'Borne 2 = entrée inverseuse E⁻ ; Borne 3 = entrée non inverseuse E⁺ (p. 1).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Sortie & Alim',
          stepTheme: 'Bornes 4, 6, 7',
          stepTitle: 'Où se situent la sortie et les bornes d’alimentation ?',
          paragraphText:
            'Sur un boîtier AO à 8 broches, la **borne 6** est la sortie ($S$), tandis que les **bornes 4 et 7** sont les alimentations continues ($A^-$ négative en 4, $A^+$ positive en 7) indispensables à son fonctionnement.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p01_q3',
            type: 'mcq',
            prompt: 'Sur un AO en boîtier à 8 bornes, quel est le rôle des bornes 6, 4 et 7 ?',
            options: [
              '6 est la sortie (S), 4 l’alimentation négative (A⁻) et 7 l’alimentation positive (A⁺)',
              '6 est l’entrée E⁺, 4 l’offset et 7 la sortie (S)',
              '6 n’est pas connectée (NC), 4 et 7 sont les deux entrées',
              '6 est la masse, 4 la sortie et 7 le réglage d’offset',
            ],
            correctAnswerIndex: 0,
            explanation: 'Borne 6 = sortie S ; borne 4 = alimentation négative A⁻ ; borne 7 = alimentation positive A⁺.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Bornes 1, 5, 8',
          stepTheme: 'Offset et NC',
          stepTitle: 'Rôle des bornes restantes (1, 5 et 8)',
          paragraphText:
            'Les bornes **1 et 5** servent au réglage d’*offset* (annulation du petit décalage résiduel), et la borne **8** porte la mention **NC** (*Non Connectée*) : aucun composant interne n’y est relié.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p01_q4',
            type: 'mcq',
            prompt: 'À quoi sert la borne 8 d’un boîtier amplificateur opérationnel standard ?',
            options: [
              'Elle n’est pas connectée (NC)',
              'C’est l’entrée de mesure prioritaire',
              'C’est la sortie inversée du signal',
              'C’est la prise de terre obligatoire',
            ],
            correctAnswerIndex: 0,
            explanation: 'La borne 8 est marquée NC (Non Connectée) et les bornes 1 et 5 servent au réglage d’offset.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Symbole & Tension',
          stepTheme: 'Tension différentielle',
          stepTitle: 'Définir U_d sur le symbole de l’AO',
          paragraphText:
            'Sur le schéma électrique, on représente uniquement $E^-$ (`−`), $E^+$ (`+`) et $S$ (les alimentations $\\pm V_{CC}$ sont le plus souvent sous-entendues). La **tension différentielle** est $U_d = V^+ - V^- = U_+ - U_-$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p01_q5',
            type: 'mcq',
            prompt: 'Quelle relation définit la tension différentielle d’entrée $U_d$ d’un amplificateur opérationnel ?',
            options: [
              'U_d = V⁺ − V⁻ (tension entre E⁺ et E⁻)',
              'U_d = V⁻ − V⁺',
              'U_d = U_s + U_e',
              'U_d = V_CC − V_sat',
            ],
            correctAnswerIndex: 0,
            explanation: 'Par convention, la flèche U_d pointe vers E⁺ : U_d = V⁺ − V⁻ = U_+ − U_−.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège masse',
          stepTheme: 'Pas de borne masse',
          stepTitle: 'L’AO n’a pas de borne de masse propre',
          paragraphText:
            'Attention : aucune des 8 bornes de l’AO n’est reliée directement à la masse ! La **masse $M$** est le point commun (potentiel $0\\,\\mathrm{V}$) des deux générateurs d’alimentation symétrique $+V_{CC}$ et $-V_{CC}$, et sert de référence pour mesurer $U_e$ et $U_s$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p01_q6',
            type: 'mcq',
            prompt: 'Lequel de ces énoncés est exact concernant la masse dans un montage à AO ?',
            options: [
              'L’AO n’a pas de borne de masse sur son boîtier ; la masse est le point milieu des alimentations ±Vcc',
              'La borne 8 sert obligatoirement de masse du circuit',
              'La borne 4 doit toujours être reliée à la sortie S',
              'Une radio n’utilise jamais d’amplificateur opérationnel',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les 8 bornes sont : offset (1,5), E⁻ (2), E⁺ (3), A⁻ (4), S (6), A⁺ (7) et NC (8). La masse provient du point milieu des alimentations.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Caractéristique U_s = f(U_d) et les deux régimes
    // ========================================================================
    {
      id: 'premiere_c_physique_l02_amplificateur_operationnel_p02',
      order: 2,
      title: 'Caractéristique U_s = f(U_d) : régime linéaire et régime saturé',
      summary:
        'Lire la caractéristique U_s = f(U_d) de l’AO réel et de l’AO idéal, distinguer régime linéaire et saturation (±V_sat < ±V_CC).',
      conceptExplanation:
        "La courbe $U_s = f(U_d)$ représente la **caractéristique de transfert** de l’AO.\n\n- **AO réel** (p. 2) : il possède deux régimes distincts :\n  - **Régime linéaire** (zone centrale très étroite, $|U_d| < \\varepsilon$) : $U_s$ est proportionnelle à $U_d$ :\n    $$U_s = G \\cdot U_d$$\n    où $G$ est le **gain différentiel** (très grand, typiquement $10^4$ à $10^6$).\n  - **Régime saturé** ($|U_d| \\ge \\varepsilon$) : $U_s$ reste bloquée à $+V_{\\text{sat}}$ (si $U_d > 0$) ou à $-V_{\\text{sat}}$ (si $U_d < 0$).\n    Les tensions $-V_{CC}$ et $+V_{CC}$ sont les tensions d’alimentation ; les tensions de saturation vérifient toujours :\n    $$|\\pm V_{\\text{sat}}| < |\\pm V_{CC}|$$\n    *(par exemple $V_{CC} = 15\\,\\mathrm{V}$ et $V_{\\text{sat}} \\approx 13\\text{ à }14\\,\\mathrm{V}$)*.\n- **AO idéal (parfait)** : son gain différentiel est **infini** ($G \\to \\infty$), donc la zone linéaire $\\varepsilon \\to 0$ est portée par l’axe vertical $U_d = 0$ :\n  - **Régime linéaire** : $U_d = 0$ et $|U_s| < V_{\\text{sat}}$ (amplificateur de tension) ;\n  - **Régime saturé** : $U_d \\ne 0 \\implies U_s = +V_{\\text{sat}}$ (si $U_d > 0$) ou $U_s = -V_{\\text{sat}}$ (si $U_d < 0$) (comparateur de tension).",
      keyRule:
        'Pour un AO idéal : si U_d = 0 et |U_s| < V_sat ⇒ régime linéaire ; si U_d ≠ 0 ⇒ régime saturé avec U_s = +V_sat (U_d > 0) ou −V_sat (U_d < 0). On a toujours |V_sat| < |V_CC|.',
      formulas: [
        {
          name: 'Régime linéaire de l’AO réel',
          formula: 'U_s = G \\cdot U_d \\quad\\text{avec } |U_s| < V_{\\text{sat}} < V_{CC}',
          note: 'Pour l’AO idéal, G → ∞ donc U_d = 0 tant que |U_s| < V_sat',
        },
        {
          name: 'Régime saturé de l’AO idéal',
          formula: 'U_d > 0 \\implies U_s = +V_{\\text{sat}},\\qquad U_d < 0 \\implies U_s = -V_{\\text{sat}}',
          note: 'Deux seuls états électriques possibles en sortie en saturation',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Caractéristique U_s = f(U_d) : AO réel vs AO idéal (p. 2)',
        caption: 'À gauche : AO réel (pente très forte G entre −ε et +ε). À droite : AO idéal (G infini : régime linéaire sur U_d = 0, saturé dès U_d ≠ 0).',
        svgContent: `<svg viewBox="0 0 380 185" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-ao2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#334155"/>
    </marker>
  </defs>
  <!-- Left: Real AO -->
  <text x="52" y="16" font-size="11" font-weight="bold" fill="#1e293b">AO réel</text>
  <line x1="15" y1="95" x2="170" y2="95" stroke="#334155" stroke-width="1.5" marker-end="url(#arr-ao2)"/>
  <line x1="92" y1="168" x2="92" y2="24" stroke="#334155" stroke-width="1.5" marker-end="url(#arr-ao2)"/>
  <text x="166" y="109" font-size="10" fill="#334155">U_d</text>
  <text x="97" y="30" font-size="10" fill="#334155">U_s</text>
  <!-- +Vcc / +Vsat -->
  <line x1="87" y1="38" x2="97" y2="38" stroke="#64748b" stroke-width="1.4"/>
  <text x="52" y="42" font-size="9" fill="#64748b">+V_CC</text>
  <text x="52" y="54" font-size="9" font-weight="bold" fill="#2563eb">+V_sat</text>
  <text x="97" y="144" font-size="9" font-weight="bold" fill="#2563eb">−V_sat</text>
  <line x1="87" y1="153" x2="97" y2="153" stroke="#64748b" stroke-width="1.4"/>
  <text x="98" y="158" font-size="9" fill="#64748b">−V_CC</text>
  <!-- Linear zone markers -->
  <line x1="78" y1="48" x2="78" y2="140" stroke="#dc2626" stroke-dasharray="3 2"/>
  <line x1="106" y1="48" x2="106" y2="140" stroke="#dc2626" stroke-dasharray="3 2"/>
  <text x="64" y="107" font-size="9" fill="#dc2626">−ε</text>
  <text x="108" y="107" font-size="9" fill="#dc2626">+ε</text>
  <!-- Curve -->
  <polyline points="20,140 78,140 106,50 162,50" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <text x="20" y="176" font-size="9" fill="#475569">saturé | lin. | saturé</text>
  <!-- Right: Ideal AO -->
  <text x="250" y="16" font-size="11" font-weight="bold" fill="#1e293b">AO idéal (G = ∞)</text>
  <line x1="205" y1="95" x2="365" y2="95" stroke="#334155" stroke-width="1.5" marker-end="url(#arr-ao2)"/>
  <line x1="285" y1="168" x2="285" y2="24" stroke="#334155" stroke-width="1.5" marker-end="url(#arr-ao2)"/>
  <text x="360" y="109" font-size="10" fill="#334155">U_d</text>
  <text x="290" y="30" font-size="10" fill="#334155">U_s</text>
  <text x="245" y="54" font-size="9" font-weight="bold" fill="#059669">+V_sat</text>
  <text x="291" y="144" font-size="9" font-weight="bold" fill="#059669">−V_sat</text>
  <polyline points="210,140 285,140 285,50 355,50" fill="none" stroke="#059669" stroke-width="2.5"/>
  <text x="235" y="176" font-size="9" fill="#475569">Régime linéaire : U_d = 0</text>
</svg>`,
      },
      workedExample: {
        title: 'Déterminer le régime de fonctionnement d’un AO idéal (Exercice 1–3 p. 6–7)',
        statement:
          'Un AO idéal est alimenté sous $\\pm 15\\,\\mathrm{V}$ et possède $V_{\\text{sat}} = 13\\,\\mathrm{V}$. On mesure successivement : a) $U_d = 0\\,\\mathrm{V}$ et $U_s = -8\\,\\mathrm{V}$ ; b) $U_d = +0{,}5\\,\\mathrm{V}$. Quel est son régime et la valeur de $U_s$ ?',
        methodSteps: [
          '1) En (a), U_d = 0 V et |U_s| = 8 V < V_sat = 13 V : l’AO fonctionne en régime linéaire (amplificateur de tension).',
          '2) En (b), U_d = +0,5 V ≠ 0 et U_d > 0 : l’AO idéal est en régime saturé positif.',
          '3) Donc en (b), U_s = +V_sat = +13 V (et jamais +15 V car |V_sat| < |V_CC|).',
        ],
        conclusion: 'Cas (a) : régime linéaire (U_s = −8 V) ; cas (b) : régime saturé positif (U_s = +13 V).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Deux régimes',
          stepTheme: 'Linéaire vs Saturé',
          stepTitle: 'Quels sont les deux régimes de fonctionnement d’un AO ?',
          paragraphText:
            'La caractéristique $U_s = f(U_d)$ met en évidence deux régimes : le **régime linéaire** (où $U_d = 0$ pour l’AO idéal, et l’AO fonctionne en amplificateur de tension) et le **régime saturé** (où $U_d \\ne 0$, $U_s = \\pm V_{\\text{sat}}$, et l’AO fonctionne en comparateur de tension).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p02_q1',
            type: 'mcq',
            prompt: 'Quelle phrase exprime correctement les deux rôles possibles d’un amplificateur opérationnel ? (Exercice 3 p. 7)',
            options: [
              'Il peut fonctionner comme amplificateur de tension en régime linéaire et comme comparateur de tension en régime saturé',
              'Il fonctionne comme amplificateur en régime saturé et comme comparateur en régime linéaire',
              'Il ne peut fonctionner qu’en régime linéaire quelle que soit la tension différentielle',
              'En régime saturé, la tension de sortie est proportionnelle à U_d',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un amplificateur opérationnel fonctionne comme amplificateur de tension en régime linéaire (U_d = 0) et comme comparateur de tension en régime saturé (U_d ≠ 0).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'V_sat vs V_CC',
          stepTheme: 'Saturation',
          stepTitle: 'Relation entre tension de saturation et tension d’alimentation',
          paragraphText:
            'En régime saturé, la sortie vaut $+V_{\\text{sat}}$ ou $-V_{\\text{sat}}$. Ces tensions de saturation sont toujours légèrement inférieures en valeur absolue aux tensions d’alimentation $\\pm V_{CC}$ : $|\\pm V_{\\text{sat}}| < |\\pm V_{CC}|$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p02_q2',
            type: 'mcq',
            prompt: 'Un AO est alimenté par des tensions symétriques $\\pm V_{CC} = \\pm 15\\,\\mathrm{V}$. Quelle valeur est physiquement plausible pour sa tension de saturation $V_{\\text{sat}}$ ?',
            options: ['13,5 V (car |V_sat| < |V_CC|)', '18 V (supérieure à V_CC)', '0 V', '150 V'],
            correctAnswerIndex: 0,
            explanation: 'On a toujours |±V_sat| < |±V_CC| : pour V_CC = 15 V, V_sat vaut typiquement 13 à 14 V.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'AO idéal',
          stepTheme: 'Gain infini',
          stepTitle: 'Que vaut le gain différentiel interne d’un AO idéal ?',
          paragraphText:
            'Dans un AO réel, $U_s = G\\cdot U_d$ avec $G$ très grand. Pour l’**AO idéal (parfait)**, le gain différentiel interne est considéré comme **infini** ($G \\to \\infty$), si bien que toute tension finie $|U_s| < V_{\\text{sat}}$ impose $U_d = \\frac{U_s}{G} = 0$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p02_q3',
            type: 'mcq',
            prompt: 'Que devient le gain différentiel interne $G$ de la caractéristique $U_s = f(U_d)$ lorsqu’on modélise un AO comme **idéal** ?',
            options: [
              'Il est infini (d’où le symbole ∞ dans le schéma)',
              'Il vaut exactement 1',
              'Il vaut 0',
              'Il est toujours négatif',
            ],
            correctAnswerIndex: 0,
            explanation: 'Un AO idéal possède un gain différentiel infini : sur sa caractéristique, la droite centrale est verticale (U_d = 0).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Texte à trous',
          stepTheme: 'Exercice 2 p. 6',
          stepTitle: 'Associer U_d = 0 et U_d ≠ 0 au bon régime',
          paragraphText:
            'Pour un AO idéal, si la tension différentielle $U_d$ est **nulle**, il fonctionne en **régime linéaire** (tant que $|U_s| < V_{\\text{sat}}$) ; tandis que si la d.d.p. entre les deux entrées n’est pas nulle ($U_d \\ne 0$), il bascule en **régime saturé**.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p02_q4',
            type: 'mcq',
            prompt: 'Un AO idéal a $V^+ = 3\\,\\mathrm{V}$ et $V^- = 1\\,\\mathrm{V}$, avec $V_{\\text{sat}} = 14\\,\\mathrm{V}$. Quel est son régime et que vaut $U_s$ ?',
            options: [
              'Régime saturé positif : U_s = +14 V',
              'Régime saturé négatif : U_s = −14 V',
              'Régime linéaire : U_s = +2 V',
              'Régime linéaire : U_s = 0 V',
            ],
            correctAnswerIndex: 0,
            explanation: 'U_d = V⁺ − V⁻ = 3 − 1 = +2 V ≠ 0 et U_d > 0 ⇒ saturation positive : U_s = +V_sat = +14 V.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Gain de montage',
          stepTheme: 'Rapport Us/Ue',
          stepTitle: 'Gain en tension d’un montage vs gain différentiel interne',
          paragraphText:
            'En régime linéaire, l’AO est inséré dans un montage avec des résistances externes : on appelle **gain en tension** du montage le rapport $G = \\left|\\frac{U_s}{U_e}\\right|$ (Exercice 1 Q4 p. 6, à ne pas confondre avec le gain différentiel interne $\\infty$ de l’AO seul).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p02_q5',
            type: 'mcq',
            prompt: 'Un montage amplificateur en régime linéaire reçoit $U_e = 1{,}5\\,\\mathrm{V}$ et délivre $U_s = -4{,}5\\,\\mathrm{V}$. Quel est le gain en tension $G$ du montage ?',
            options: ['3', '−3', '0,33', '6'],
            correctAnswerIndex: 0,
            explanation: 'Le gain en tension du montage est G = |U_s / U_e| = |−4,5 / 1,5| = 3.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Vrai ou Faux',
          stepTheme: 'Exercice 1 p. 6',
          stepTitle: 'Déjouer les affirmations fausses sur l’AO en régime linéaire',
          paragraphText:
            'Dans l’Exercice 1 (p. 6), trois pièges reviennent souvent : 1) les courants d’entrée sont **extrêmement faibles** ($i^+ = i^- = 0$), jamais élevés ; 2) en régime linéaire, $U_d = 0$ (pas $\\ne 0$) et $|U_s| < V_{\\text{sat}}$ (jamais $U_s > V_{\\text{sat}}$) ; 3) la résistance d’entrée entre $E^+$ et $E^-$ (et non « $E^+$ et $E^+$ » !) est infinie.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p02_q6',
            type: 'mcq',
            prompt: 'Parmi ces affirmations extraites de l’Exercice 1 (p. 6), laquelle est **VRAIE** ?',
            options: [
              'En régime linéaire idéal, les courants aux entrées sont négligeables : i⁺ = i⁻ = 0 et |U_s| < V_sat',
              'Dans un AO, les intensités des courants d’entrée sont très élevées',
              'En fonctionnement linéaire idéal, la tension différentielle U_d est non nulle',
              'En régime linéaire, la tension de sortie vérifie U_s > V_sat',
            ],
            correctAnswerIndex: 0,
            explanation: 'Seule la première proposition est vraie : i⁺ = i⁻ = 0, U_d = 0 et |U_s| < V_sat en régime linéaire idéal.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Propriétés de l’AO idéal en régime linéaire & montage suiveur
    // ========================================================================
    {
      id: 'premiere_c_physique_l02_amplificateur_operationnel_p03',
      order: 3,
      title: 'AO idéal en régime linéaire et montage suiveur',
      summary:
        'Appliquer les 3 conditions du régime linéaire idéal (i⁺ = i⁻ = 0, U_d = 0, |U_s| < V_sat) et analyser le montage suiveur.',
      conceptExplanation:
        "Pour étudier tout montage à amplificateur opérationnel idéal fonctionnant en **régime linéaire** (ce qui exige en pratique une boucle de rétroaction de la sortie $S$ vers l’entrée inverseuse $E^-$), on pose systématiquement les trois hypothèses fondamentales (p. 2 & p. 5) :\n\n1. **Résistance d’entrée infinie $\\implies$ courants d’entrée nuls** :\n   $$i^+ = i^- = 0$$\n2. **Gain interne infini $\\implies$ entrées au même potentiel** :\n   $$U_d = U_+ - U_- = 0 \\iff V^+ = V^-$$\n3. **Absence de saturation** :\n   $$|U_s| < V_{\\text{sat}}$$\n\n- **Montage suiveur** (p. 2) : on relie directement la sortie $S$ à l’entrée inverseuse $E^-$ (fil de bouclage sans résistance) et on applique la tension d’entrée $U_e$ à l’entrée non inverseuse $E^+$.\n  - Comme $U_+ = U_e$, $U_- = U_s$ et $U_d = U_+ - U_- = 0$, on obtient :\n    $$U_s = U_e$$\n  - La tension de sortie **suit** exactement la tension d’entrée ($G = 1$), mais le circuit ne prélève aucun courant sur la source ($i^+ = 0$) : il sert d’**adaptateur d’impédance** (exemple du **voltmètre électronique**).",
      keyRule:
        'Régime linéaire idéal : i⁺ = i⁻ = 0, U_d = 0 (donc V⁺ = V⁻) et |U_s| < V_sat. Pour le montage suiveur (S relié à E⁻, U_e sur E⁺) : U_s = U_e.',
      formulas: [
        {
          name: 'Conditions de l’AO idéal en régime linéaire',
          formula: 'i^+ = i^- = 0,\\qquad U_d = V^+ - V^- = 0,\\qquad |U_s| < V_{\\text{sat}}',
          note: 'Point de départ obligatoire de toute démonstration de montage linéaire',
        },
        {
          name: 'Montage suiveur',
          formula: 'U_s = U_e \\quad\\left(G = \\frac{U_s}{U_e} = 1\\right)',
          note: 'Permet de recopier U_e sans prélever de courant (i⁺ = 0) : ex. voltmètre électronique',
        },
      ],
      workedExample: {
        title: 'Pourquoi utilise-t-on un montage suiveur alors que U_s = U_e ?',
        statement:
          'Un capteur fragile délivre une tension $U_e = 2{,}4\\,\\mathrm{V}$ mais ne doit débiter aucun courant sous peine de voir sa tension chuter. On intercale un montage suiveur devant un appareil de mesure. Justifier le montage.',
        methodSteps: [
          '1) Le capteur est branché sur E⁺ où i⁺ = 0 : aucun courant n’est prélevé sur le capteur.',
          '2) La sortie S est bouclée sur E⁻, donc V⁻ = U_s.',
          '3) En régime linéaire, U_d = 0 ⇒ V⁺ = V⁻ ⇒ U_s = U_e = 2,4 V ; le courant demandé par l’appareil de mesure est fourni par l’alimentation de l’AO.',
        ],
        conclusion: 'Le suiveur recopie U_s = U_e = 2,4 V tout en isolant électriquement le capteur (courant nul i⁺ = 0).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Courants d’entrée',
          stepTheme: 'Résistance infinie',
          stepTitle: 'Pourquoi pose-t-on i⁺ = i⁻ = 0 ?',
          paragraphText:
            'L’amplificateur opérationnel idéal présente une **résistance d’entrée infinie** entre ses bornes $E^+$ et $E^-$ : aucun courant ne pénètre dans le composant par ces deux entrées, d’où $i^+ = i^- = 0$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p03_q1',
            type: 'mcq',
            prompt: 'Quelle propriété électrique de l’AO idéal justifie que $i^+ = i^- = 0$ ?',
            options: [
              'Sa résistance d’entrée est infinie',
              'Sa tension de sortie est toujours nulle',
              'Son alimentation est coupée',
              'Sa résistance de sortie est infinie',
            ],
            correctAnswerIndex: 0,
            explanation: 'Une résistance d’entrée infinie empêche tout courant d’entrer par E⁺ et E⁻ : i⁺ = i⁻ = 0.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Potentiels égaux',
          stepTheme: 'U_d = 0',
          stepTitle: 'Conséquence de U_d = 0 sur les nœuds d’entrée',
          paragraphText:
            'En régime linéaire idéal, $U_d = U_+ - U_- = 0$, ce qui signifie que l’entrée non inverseuse $E^+$ et l’entrée inverseuse $E^-$ sont au **même potentiel** ($V^+ = V^-$), même si elles ne sont pas reliées par un fil.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p03_q2',
            type: 'mcq',
            prompt: 'En régime linéaire pour un AO idéal, si l’entrée $E^+$ est reliée à la masse ($V^+ = 0\\,\\mathrm{V}$), que vaut le potentiel $V^-$ de l’entrée inverseuse $E^-$ ?',
            options: [
              '0 V (masse virtuelle), car U_d = V⁺ − V⁻ = 0',
              '+V_sat',
              '−V_CC',
              'Égal à U_s',
            ],
            correctAnswerIndex: 0,
            explanation: 'U_d = V⁺ − V⁻ = 0 ⇒ V⁻ = V⁺ = 0 V : on parle de masse virtuelle pour E⁻.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Montage suiveur',
          stepTheme: 'Schéma & relation',
          stepTitle: 'Reconnaître un montage suiveur',
          paragraphText:
            'Dans le montage suiveur (p. 2), la borne de sortie $S$ est reliée directement à l’entrée inverseuse $E^-$ (sans résistance) et la tension d’entrée $U_e$ est appliquée à $E^+$. Comme $U_d = 0$, on a directement $U_s = U_e$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p03_q3',
            type: 'mcq',
            prompt: 'Quelle relation lie $U_s$ et $U_e$ dans un montage suiveur à AO idéal en régime linéaire ?',
            options: ['U_s = U_e', 'U_s = −U_e', 'U_s = 2 U_e', 'U_s = 0'],
            correctAnswerIndex: 0,
            explanation: 'La maille d’entrée donne U_e − U_d − U_s = 0 ; avec U_d = 0, on obtient U_s = U_e.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Voltmètre électronique',
          stepTitle: 'Exemple concret du montage suiveur',
          paragraphText:
            'Le cours cite le **voltmètre électronique** comme exemple d’utilisation du montage suiveur : grâce à $i^+ = 0$, l’appareil mesure la tension aux bornes d’un circuit sans le perturber en tirant du courant.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p03_q4',
            type: 'mcq',
            prompt: 'Quel appareil du cours illustre directement l’intérêt du montage suiveur ?',
            options: [
              'Le voltmètre électronique',
              'Le moteur synchrone triphasé',
              'Le transformateur haute tension',
              'La cellule photovoltaïque',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le PDF p. 2 mentionne le voltmètre électronique comme exemple d’application du montage suiveur.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Loi des mailles',
          stepTheme: 'Méthode générale',
          stepTitle: 'Comment s’assurer que l’AO fonctionne bien en régime linéaire ?',
          paragraphText:
            'La présence d’un fil ou d’un dipôle (comme une résistance $R_2$) reliant la sortie $S$ à l’entrée inverseuse $E^-$ réalise une **contre-réaction négative**, ce qui stabilise l’AO en régime linéaire tant que $|U_s| < V_{\\text{sat}}$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p03_q5',
            type: 'mcq',
            prompt: 'Sur un schéma électrique, quel indice permet de savoir qu’un montage à AO peut fonctionner en régime linéaire ?',
            options: [
              'La sortie S est reliée (directement ou par une résistance) à l’entrée inverseuse E⁻',
              'Les deux entrées E⁺ et E⁻ sont court-circuitées ensemble',
              'Aucune liaison n’existe entre la sortie S et les entrées',
              'La sortie S est reliée à la masse',
            ],
            correctAnswerIndex: 0,
            explanation: 'Un bouclage sur l’entrée inverseuse E⁻ réalise une rétroaction négative qui permet le régime linéaire (tant que |U_s| < V_sat).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège saturation',
          stepTheme: 'Condition |Us| < Vsat',
          stepTitle: 'Ne jamais oublier la condition |U_s| < V_sat',
          paragraphText:
            'Même avec une contre-réaction sur $E^-$, un montage suiveur ($U_s = U_e$) sature si l’entrée dépasse $V_{\\text{sat}}$ : si $V_{\\text{sat}} = 13\\,\\mathrm{V}$ et qu’on injecte $U_e = 15\\,\\mathrm{V}$, la sortie reste bloquée à $+13\\,\\mathrm{V}$ (et $U_d = 15 - 13 = +2\\,\\mathrm{V} \\ne 0$).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p03_q6',
            type: 'mcq',
            prompt: 'On injecte $U_e = +15\\,\\mathrm{V}$ dans un montage suiveur dont $V_{\\text{sat}} = 13\\,\\mathrm{V}$. Que vaut la tension de sortie $U_s$ ?',
            options: ['+13 V (régime saturé)', '+15 V (régime linéaire)', '−13 V', '0 V'],
            correctAnswerIndex: 0,
            explanation: 'Comme |U_e| = 15 V > V_sat = 13 V, l’AO ne peut pas fournir 15 V : il sature à U_s = +V_sat = +13 V.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Montage amplificateur inverseur
    // ========================================================================
    {
      id: 'premiere_c_physique_l02_amplificateur_operationnel_p04',
      order: 4,
      title: 'Montage amplificateur inverseur',
      summary:
        'Démontrer la relation U_s = -(R₂/R₁) U_e, calculer le gain en tension G = R₂/R₁ et exploiter la courbe U_s = f(U_e) d’un TP.',
      conceptExplanation:
        "Dans le **montage amplificateur inverseur** (p. 3, Situation Montage 1 p. 5, Exercice 4 p. 7–8), la tension d’entrée $U_e$ est appliquée à l’entrée **inverseuse** $E^-$ (nœud $A$) à travers une résistance $R_1$, la sortie $S$ est rebouclée sur $E^-$ par une résistance $R_2$, et l’entrée non inverseuse $E^+$ est reliée à la masse $M$.\n\n- **Démonstration (AO idéal en régime linéaire : $i^- = 0$ et $U_d = 0$)** :\n  - Loi des nœuds en $A$ : $I_1 = I_2 + i^- \\implies I_1 = I_2$ (même intensité dans $R_1$ et $R_2$).\n  - Maille d’entrée $MNABM$ : $U_e - R_1 I_1 + U_d = 0 \\implies U_e = R_1 I_1$.\n  - Maille de sortie $MASBM$ : $U_s + R_2 I_2 + U_d = 0 \\implies U_s = -R_2 I_2$.\n  - Par quotient (avec $I_1 = I_2$) :\n    $$U_s = -\\frac{R_2}{R_1}\\,U_e$$\n- **Signification** : le signe `−` indique que $U_s$ et $U_e$ sont de **signes opposés** (en opposition de phase pour un signal alternatif) : d’où le nom *inverseur*.\n- **Gain en tension** :\n  $$G = \\left|\\frac{U_s}{U_e}\\right| = \\frac{R_2}{R_1}$$\n  Sur le graphe expérimental $U_s = f(U_e)$ (Exercice 4 p. 7–8, avec $R_1 = 1\\,\\mathrm{k}\\Omega$ et $R_2 = 2\\,\\mathrm{k}\\Omega$), on obtient une droite passant par l’origine de pente négative $\\frac{\\Delta U_s}{\\Delta U_e} = -2 = -\\frac{R_2}{R_1}$.",
      keyRule:
        'Montage inverseur (E⁺ à la masse, U_e via R₁ sur E⁻, R₂ entre E⁻ et S) : U_s = −(R₂ / R₁) · U_e et gain G = |U_s / U_e| = R₂ / R₁.',
      formulas: [
        {
          name: 'Tension de sortie de l’amplificateur inverseur',
          formula: 'U_s = -\\frac{R_2}{R_1}\\,U_e',
          note: 'La pente de la caractéristique U_s = f(U_e) vaut −R₂ / R₁',
        },
        {
          name: 'Gain en tension du montage inverseur',
          formula: 'G = \\left|\\frac{U_s}{U_e}\\right| = \\frac{R_2}{R_1}',
          note: 'Amplifie (G > 1) si R₂ > R₁, atténue (G < 1) si R₂ < R₁',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Schéma du montage amplificateur inverseur (p. 3 & Ex. 4 p. 7)',
        caption: 'E⁺ est à la masse M ; I₁ = I₂ car i⁻ = 0 ; V_A = V_B = 0 V ⇒ U_s = −(R₂/R₁) U_e.',
        svgContent: `<svg viewBox="0 0 380 185" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-i4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#2563eb"/>
    </marker>
    <marker id="arr-v4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#059669"/>
    </marker>
  </defs>
  <!-- Ground line M -->
  <line x1="55" y1="150" x2="335" y2="150" stroke="#1e293b" stroke-width="2"/>
  <line x1="185" y1="150" x2="185" y2="164" stroke="#1e293b" stroke-width="2"/>
  <line x1="173" y1="164" x2="197" y2="164" stroke="#1e293b" stroke-width="2"/>
  <line x1="178" y1="169" x2="192" y2="169" stroke="#1e293b" stroke-width="1.6"/>
  <text x="163" y="160" font-size="11" font-weight="bold" fill="#1e293b">M</text>
  <!-- Input Ue -->
  <circle cx="55" cy="75" r="2.5" fill="#1e293b"/>
  <text x="48" y="66" font-size="11" font-weight="bold" fill="#1e293b">N</text>
  <line x1="55" y1="145" x2="55" y2="80" stroke="#059669" stroke-width="2" marker-end="url(#arr-v4)"/>
  <text x="33" y="118" font-size="12" font-weight="bold" fill="#059669">U_e</text>
  <!-- Wire + R1 -->
  <line x1="55" y1="75" x2="92" y2="75" stroke="#1e293b" stroke-width="1.8"/>
  <rect x="92" y="65" width="44" height="20" fill="#fff" stroke="#1e293b" stroke-width="1.8"/>
  <text x="107" y="79" font-size="11" font-weight="bold" fill="#1e293b">R₁</text>
  <line x1="136" y1="75" x2="195" y2="75" stroke="#1e293b" stroke-width="1.8"/>
  <!-- Current I1 -->
  <line x1="65" y1="75" x2="82" y2="75" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-i4)"/>
  <text x="68" y="63" font-size="10" font-weight="bold" fill="#2563eb">I₁</text>
  <!-- Node A -->
  <circle cx="155" cy="75" r="3" fill="#dc2626"/>
  <text x="148" y="92" font-size="11" font-weight="bold" fill="#dc2626">A</text>
  <!-- Feedback loop with R2 -->
  <polyline points="155,75 155,30 205,30" fill="none" stroke="#1e293b" stroke-width="1.8"/>
  <rect x="205" y="20" width="48" height="20" fill="#fff" stroke="#1e293b" stroke-width="1.8"/>
  <text x="222" y="34" font-size="11" font-weight="bold" fill="#1e293b">R₂</text>
  <polyline points="253,30 298,30 298,92" fill="none" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="168" y1="30" x2="190" y2="30" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-i4)"/>
  <text x="172" y="22" font-size="10" font-weight="bold" fill="#2563eb">I₂</text>
  <!-- AO block -->
  <rect x="195" y="60" width="76" height="64" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="202" y="79" font-size="14" font-weight="bold" fill="#dc2626">−</text>
  <text x="202" y="114" font-size="14" font-weight="bold" fill="#2563eb">+</text>
  <polygon points="228,70 240,76 228,82" fill="none" stroke="#1e293b" stroke-width="1.6"/>
  <text x="244" y="81" font-size="14" font-weight="bold" fill="#1e293b">∞</text>
  <!-- E+ to ground -->
  <polyline points="195,110 165,110 165,150" fill="none" stroke="#1e293b" stroke-width="1.8"/>
  <text x="155" y="126" font-size="10" font-weight="bold" fill="#1e293b">B</text>
  <!-- Output Us -->
  <line x1="271" y1="92" x2="335" y2="92" stroke="#1e293b" stroke-width="1.8"/>
  <circle cx="335" cy="92" r="2.5" fill="#1e293b"/>
  <text x="340" y="90" font-size="11" font-weight="bold" fill="#1e293b">S</text>
  <line x1="335" y1="145" x2="335" y2="97" stroke="#059669" stroke-width="2" marker-end="url(#arr-v4)"/>
  <text x="342" y="126" font-size="12" font-weight="bold" fill="#059669">U_s</text>
</svg>`,
      },
      workedExample: {
        title: 'Exploitation du TP amplificateur inverseur (Exercice 4 p. 7–8)',
        statement:
          'Avec $R_1 = 1\\,\\mathrm{k}\\Omega$ et $R_2 = 2\\,\\mathrm{k}\\Omega$, les mesures donnent pour $U_e = 1\\,\\mathrm{V} \\to U_s = -2\\,\\mathrm{V}$ et pour $U_e = 4\\,\\mathrm{V} \\to U_s = -7{,}8\\,\\mathrm{V}$. Comparer la pente $\\frac{\\Delta U_s}{\\Delta U_e}$ au rapport $\\frac{R_2}{R_1}$.',
        methodSteps: [
          '1) Rapport théorique : R₂ / R₁ = 2 000 / 1 000 = 2.',
          '2) Pente expérimentale entre U_e = 1 V et 4 V : ΔU_s / ΔU_e = (−7,8 − (−2)) / (4 − 1) = −5,8 / 3 ≈ −1,93 ≈ −2.',
          '3) La pente de la droite vaut donc −R₂ / R₁, ce qui vérifie la loi théorique U_s = −(R₂ / R₁) U_e = −2 U_e.',
        ],
        conclusion: 'Le montage est un amplificateur inverseur de gain G = 2 (U_s = −2 U_e).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Formule inverseur',
          stepTheme: 'U_s = −(R₂/R₁)U_e',
          stepTitle: 'Expression de la tension de sortie du montage inverseur',
          paragraphText:
            'Dans le montage inverseur ($E^+$ à la masse, $U_e$ appliquée à $E^-$ via $R_1$, contre-réaction par $R_2$), les lois des mailles et $I_1 = I_2$ conduisent à $U_s = -\\frac{R_2}{R_1} U_e$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p04_q1',
            type: 'mcq',
            prompt: 'Quelle est la relation entre $U_s$ et $U_e$ pour un montage amplificateur inverseur idéal en régime linéaire (résistance d’entrée $R_1$, résistance de contre-réaction $R_2$) ?',
            options: [
              'U_s = −(R₂ / R₁) · U_e',
              'U_s = +((R₁ + R₂) / R₁) · U_e',
              'U_s = −(R₁ / R₂) · U_e',
              'U_s = +(R₂ / R₁) · U_e',
            ],
            correctAnswerIndex: 0,
            explanation: 'Pour l’amplificateur inverseur, U_s = −(R₂ / R₁) U_e.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Activité p. 3',
          stepTheme: 'Calcul direct',
          stepTitle: 'Calculer U_s lorsque R₂ = 2 R₁',
          paragraphText:
            'Dans l’activité d’application (p. 3), on a $R_2 = 2R_1$ et $U_e = +2\\,\\mathrm{V}$ : alors $U_s = -\\frac{2R_1}{R_1} U_e = -2 U_e = -2\\times 2 = -4\\,\\mathrm{V}$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p04_q2',
            type: 'mcq',
            prompt: 'Un montage amplificateur inverseur possède $R_1 = 10\\,\\mathrm{k}\\Omega$ et $R_2 = 30\\,\\mathrm{k}\\Omega$. Si $U_e = -1{,}5\\,\\mathrm{V}$ (avec $V_{\\text{sat}} = 13\\,\\mathrm{V}$), que vaut $U_s$ ?',
            options: ['+4,5 V', '−4,5 V', '−0,5 V', '+6,0 V'],
            correctAnswerIndex: 0,
            explanation: 'U_s = −(R₂ / R₁) U_e = −(30 / 10) × (−1,5) = +4,5 V (< 13 V, donc bien en régime linéaire).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Démonstration',
          stepTheme: 'Loi des mailles',
          stepTitle: 'Étapes clés pour retrouver U_s = −(R₂/R₁)U_e',
          paragraphText:
            'Pour démontrer la formule : 1) poser $i^- = 0$ pour en déduire $I_1 = I_2$ ; 2) écrire la maille d’entrée $U_e - R_1 I_1 + U_d = 0 \\implies U_e = R_1 I_1$ ; 3) écrire la maille de sortie $U_s + R_2 I_2 + U_d = 0 \\implies U_s = -R_2 I_2$, puis éliminer $I_1 = I_2$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p04_q3',
            type: 'mcq',
            prompt: 'Dans la démonstration du montage inverseur, quelle propriété garantit que l’intensité $I_1$ traversant $R_1$ est égale à l’intensité $I_2$ traversant $R_2$ ?',
            options: [
              'Le courant d’entrée dans l’AO est nul : i⁻ = 0, donc par la loi des nœuds en A, I₁ = I₂',
              'La résistance R₁ est obligatoirement égale à R₂',
              'La tension U_s est égale à U_e',
              'L’entrée E⁺ est reliée à la sortie S',
            ],
            correctAnswerIndex: 0,
            explanation: 'Au nœud A relié à E⁻, I₁ = I₂ + i⁻ ; comme i⁻ = 0 (résistance d’entrée infinie), on obtient I₁ = I₂.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Gain & Pente',
          stepTheme: 'Exercice 4 p. 7–8',
          stepTitle: 'Lire le gain à partir du graphe expérimental U_s = f(U_e)',
          paragraphText:
            'Dans le TP de l’Exercice 4 ($R_1 = 1\\,\\mathrm{k}\\Omega$, $R_2 = 2\\,\\mathrm{k}\\Omega$), la droite $U_s = f(U_e)$ passe par $(0,0)$ et a une pente négative $\\frac{\\Delta U_s}{\\Delta U_e} = -2 = -\\frac{R_2}{R_1}$, d’où le gain $G = 2$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p04_q4',
            type: 'mcq',
            prompt: 'La caractéristique expérimentale $U_s = f(U_e)$ d’un montage inverseur est une droite passant par l’origine et par le point $(U_e = 2{,}5\\,\\mathrm{V}\\,;\\,U_s = -10\\,\\mathrm{V})$. Quel est le gain $G$ et le rapport $R_2/R_1$ ?',
            options: [
              'G = 4 et R₂ / R₁ = 4',
              'G = −4 et R₂ / R₁ = 0,25',
              'G = 0,25 et R₂ / R₁ = 4',
              'G = 2,5 et R₂ / R₁ = 1',
            ],
            correctAnswerIndex: 0,
            explanation: 'La pente vaut −10 / 2,5 = −4 = −R₂/R₁, donc R₂/R₁ = 4 et le gain en tension est G = |U_s/U_e| = 4.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Inversion de signe',
          stepTheme: 'Signal alternatif',
          stepTitle: 'Que fait l’inverseur sur un signal sinusoïdal ?',
          paragraphText:
            'Si $U_e(t)$ est positive, $U_s(t)$ est négative, et inversement : l’amplificateur inverseur change le signe (déphasage de $\\pi\\,\\mathrm{rad}$ ou $180^\\circ$) tout en multipliant l’amplitude par $G = \\frac{R_2}{R_1}$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p04_q5',
            type: 'mcq',
            prompt: 'On applique $U_e(t) = 2\\sin(\\omega t)$ (en $\\mathrm{V}$) à un amplificateur inverseur de gain $G = 5$ ($V_{\\text{sat}} = 14\\,\\mathrm{V}$). Quelle est l’expression de $U_s(t)$ ?',
            options: [
              'U_s(t) = −10 sin(ωt) V',
              'U_s(t) = +10 sin(ωt) V',
              'U_s(t) = −0,4 sin(ωt) V',
              'U_s(t) = −2 sin(ωt) V',
            ],
            correctAnswerIndex: 0,
            explanation: 'G = R₂/R₁ = 5, donc U_s(t) = −5 · U_e(t) = −10 sin(ωt) V (amplitude 10 V < 14 V).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège masse virtuelle',
          stepTheme: 'Résistance d’entrée',
          stepTitle: 'Attention : R₁ et R₂ ne sont pas reliées à la masse par hasard',
          paragraphText:
            'Dans le montage inverseur, $V^- = V^+ = 0\\,\\mathrm{V}$ (masse virtuelle) : la résistance $R_1$ est soumise à $U_e$, donc le générateur d’entrée débite un courant $I_1 = U_e / R_1$ (contrairement au suiveur ou au non inverseur où $U_e$ arrive sur $E^+$ avec $i^+ = 0$). Et vérifie toujours que $|\\frac{R_2}{R_1}U_e| < V_{\\text{sat}}$ !',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p04_q6',
            type: 'mcq',
            prompt: 'Un amplificateur inverseur ($R_1 = 1\\,\\mathrm{k}\\Omega$, $R_2 = 10\\,\\mathrm{k}\\Omega$, $V_{\\text{sat}} = 13\\,\\mathrm{V}$) reçoit $U_e = +2\\,\\mathrm{V}$. Que mesure-t-on réellement en sortie $U_s$ ?',
            options: [
              '−13 V (l’AO sature car −20 V dépasse −V_sat)',
              '−20 V',
              '+13 V',
              '−0,2 V',
            ],
            correctAnswerIndex: 0,
            explanation: 'La formule linéaire donnerait −(10/1)×2 = −20 V, impossible car |U_s| ≤ V_sat = 13 V : l’AO passe en saturation négative U_s = −13 V.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Montage amplificateur non inverseur
    // ========================================================================
    {
      id: 'premiere_c_physique_l02_amplificateur_operationnel_p05',
      order: 5,
      title: 'Montage amplificateur non inverseur et choix de montage',
      summary:
        'Démontrer U_s = ((R₁ + R₂)/R₁) U_e, calculer G = 1 + R₂/R₁ et départager un montage inverseur d’un non inverseur.',
      conceptExplanation:
        "Dans le **montage amplificateur non inverseur** (p. 3, Situation Montage 2 p. 5–6), on souhaite amplifier $U_e$ **en conservant son signe** ($U_s$ et $U_e$ de même signe).\n\n- **Branchement** : $U_e$ est appliquée directement à l’entrée **non inverseuse** $E^+$ ; l’entrée inverseuse $E^-$ (nœud $A$) est reliée à la masse $M$ par $R_1$ et à la sortie $S$ par $R_2$.\n- **Démonstration (AO idéal en régime linéaire : $i^- = 0$, $U_d = 0$)** :\n  - Le même courant $i$ circule dans $R_2$ et $R_1$ (pont diviseur de tension).\n  - Maille d’entrée : $V_A = V^+ = U_e$, donc aux bornes de $R_1$, la tension vaut $U_{AM} = U_e$.\n  - Comme $R_1$ et $R_2$ sont parcourues par le même courant $i = \\frac{U_e}{R_1}$ (dirigé de $S$ vers $M$), on a :\n    $$U_s = (R_1 + R_2)\\,i = (R_1 + R_2)\\frac{U_e}{R_1} = \\frac{R_1 + R_2}{R_1}\\,U_e = \\left(1 + \\frac{R_2}{R_1}\\right)U_e$$\n  *(Remarque : dans le PDF p. 5, la ligne intermédiaire imprime par erreur `Us = -(R1+R2)i` en inversant le sens du courant, mais la relation encadrée $U_s = \\frac{R_1+R_2}{R_1}U_e$ est bien positive.)*\n- **Gain en tension** :\n  $$G = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1} > 1$$",
      keyRule:
        'Montage non inverseur (U_e sur E⁺, R₁ entre E⁻ et la masse, R₂ entre E⁻ et S) : U_s = (1 + R₂ / R₁) · U_e et gain G = 1 + R₂ / R₁ > 1.',
      formulas: [
        {
          name: 'Tension de sortie de l’amplificateur non inverseur',
          formula: 'U_s = \\frac{R_1 + R_2}{R_1}\\,U_e = \\left(1 + \\frac{R_2}{R_1}\\right)U_e',
          note: 'U_s et U_e sont toujours de même signe (en phase)',
        },
        {
          name: 'Gain en tension du montage non inverseur',
          formula: 'G = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1}',
          note: 'Toujours supérieur ou égal à 1 (le suiveur correspond à R₂ = 0 ou R₁ → ∞)',
        },
      ],
      workedExample: {
        title: 'Départager deux schémas en TP (Situation d’évaluation p. 5–6)',
        statement:
          'Pour réaliser un amplificateur non inverseur, on hésite entre le Montage 1 ($E^+$ à la masse, $U_e$ sur $E^-$ via $R_1$) et le Montage 2 ($U_e$ sur $E^+$, $R_1$ entre $E^-$ et la masse, $R_2$ entre $E^-$ et $S$). On prend $R_1 = 2\\,\\mathrm{k}\\Omega$, $R_2 = 4\\,\\mathrm{k}\\Omega$ et $U_e = +3\\,\\mathrm{V}$. Quel montage choisir et que vaut $U_s$ ?',
        methodSteps: [
          '1) Montage 1 : U_e attaque E⁻ ⇒ inverseur, U_s = −(R₂/R₁)U_e = −2 × 3 = −6 V < 0 (gain G₁ = 2).',
          '2) Montage 2 : U_e attaque E⁺ ⇒ non inverseur, U_s = (1 + R₂/R₁)U_e = (1 + 2) × 3 = +9 V > 0 (gain G₂ = 3).',
          '3) Comme on cherche un amplificateur non inverseur (U_s et U_e de même signe), il faut choisir le Montage 2.',
        ],
        conclusion: 'Il faut réaliser le Montage 2 (non inverseur), qui donne G = 3 et U_s = +9 V.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Formule non inverseur',
          stepTheme: 'Gain 1 + R₂/R₁',
          stepTitle: 'Expression de U_s et du gain G en non inverseur',
          paragraphText:
            'Dans le montage amplificateur non inverseur ($U_e$ sur $E^+$, $R_1$ entre $E^-$ et la masse, $R_2$ entre $E^-$ et $S$), le pont diviseur donne $U_e = \\frac{R_1}{R_1+R_2} U_s$, soit $U_s = \\left(1 + \\frac{R_2}{R_1}\\right) U_e$ et $G = 1 + \\frac{R_2}{R_1}$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p05_q1',
            type: 'mcq',
            prompt: 'Quelle formule exprime le gain en tension $G$ d’un amplificateur **non inverseur** ?',
            options: [
              'G = 1 + R₂ / R₁',
              'G = R₂ / R₁',
              'G = −R₂ / R₁',
              'G = R₁ / (R₁ + R₂)',
            ],
            correctAnswerIndex: 0,
            explanation: 'U_s = ((R₁ + R₂) / R₁) U_e = (1 + R₂ / R₁) U_e, donc G = 1 + R₂ / R₁ (p. 3).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Activité p. 3',
          stepTheme: 'Application R₂ = 2 R₁',
          stepTitle: 'Calcul du gain et de U_s pour R₂ = 2 R₁',
          paragraphText:
            'Dans l’activité d’application (p. 3), on pose $R_2 = 2R_1$ : le gain en tension vaut alors $G = 1 + \\frac{2R_1}{R_1} = 1 + 2 = 3$ (alors que l’inverseur avec les mêmes résistances a un gain de $2$).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p05_q2',
            type: 'mcq',
            prompt: 'Pour un montage amplificateur non inverseur avec $R_2 = 2 R_1$ et $U_e = +2{,}5\\,\\mathrm{V}$ ($V_{\\text{sat}} = 13\\,\\mathrm{V}$), que valent le gain $G$ et la tension de sortie $U_s$ ?',
            options: [
              'G = 3 et U_s = +7,5 V',
              'G = 2 et U_s = +5,0 V',
              'G = 2 et U_s = −5,0 V',
              'G = 1,5 et U_s = +3,75 V',
            ],
            correctAnswerIndex: 0,
            explanation: 'G = 1 + 2R₁/R₁ = 3, d’où U_s = 3 × 2,5 = +7,5 V.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Reconnaissance',
          stepTheme: 'Situation p. 5–6',
          stepTitle: 'Identifier rapidement un schéma inverseur vs non inverseur',
          paragraphText:
            'Règle visuelle immédiate : si $U_e$ est reliée à $E^+$ (avec $R_1$ entre $E^-$ et la masse), c’est un **non inverseur** ($U_s / U_e > 0$). Si $E^+$ est à la masse et $U_e$ arrive via $R_1$ sur $E^-$, c’est un **inverseur** ($U_s / U_e < 0$).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p05_q3',
            type: 'mcq',
            prompt: 'Comment reconnaît-on immédiatement un montage **non inverseur** sur un schéma (Situation p. 5) ?',
            options: [
              'La tension d’entrée U_e est appliquée sur E⁺ tandis que R₁ relie E⁻ à la masse',
              'L’entrée E⁺ est reliée directement à la masse',
              'La sortie S est reliée à l’entrée E⁺ par R₂',
              'Aucune résistance n’est reliée à E⁻ ni à la masse',
            ],
            correctAnswerIndex: 0,
            explanation: 'En non inverseur, U_e attaque E⁺ ; E⁻ est reliée au pont diviseur (R₁ vers la masse, R₂ vers S).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Lien suiveur',
          stepTheme: 'Cas limite',
          stepTitle: 'Le montage suiveur est un cas particulier du non inverseur',
          paragraphText:
            'Si l’on remplace $R_2$ par un fil ($R_2 = 0$) ou si l’on supprime $R_1$ ($R_1 \\to \\infty$) dans le montage non inverseur, la formule $G = 1 + \\frac{R_2}{R_1}$ donne $G = 1$ : on retrouve exactement le **montage suiveur** ($U_s = U_e$).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p05_q4',
            type: 'mcq',
            prompt: 'Dans un montage non inverseur, quelle valeur minimale peut prendre le gain en tension $G = 1 + \\frac{R_2}{R_1}$ ?',
            options: [
              '1 (cas du montage suiveur si R₂ = 0)',
              '0',
              '0,5',
              '−1',
            ],
            correctAnswerIndex: 0,
            explanation: 'Comme R₁ > 0 et R₂ ≥ 0, on a toujours G = 1 + R₂/R₁ ≥ 1 : un non inverseur ne peut jamais atténuer.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Dimensionnement',
          stepTheme: 'Calcul de R₂',
          stepTitle: 'Choisir R₂ pour obtenir un gain souhaité',
          paragraphText:
            'Si l’on dispose de $R_1 = 2\\,\\mathrm{k}\\Omega$ et qu’on veut un gain non inverseur $G = 6$, on résout $1 + \\frac{R_2}{R_1} = 6 \\implies \\frac{R_2}{R_1} = 5 \\implies R_2 = 5 \\times 2\\,\\mathrm{k}\\Omega = 10\\,\\mathrm{k}\\Omega$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p05_q5',
            type: 'mcq',
            prompt: 'Tu dois concevoir un amplificateur non inverseur de gain $G = 11$ en utilisant $R_1 = 1\\,\\mathrm{k}\\Omega$. Quelle valeur de $R_2$ dois-tu choisir ?',
            options: ['10 kΩ', '11 kΩ', '12 kΩ', '9 kΩ'],
            correctAnswerIndex: 0,
            explanation: 'G = 1 + R₂/R₁ = 11 ⇒ R₂/R₁ = 10 ⇒ R₂ = 10 × 1 kΩ = 10 kΩ.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège du "+1"',
          stepTheme: 'Confusion avec R₂/R₁',
          stepTitle: 'Ne pas oublier le « 1 + » dans le montage non inverseur',
          paragraphText:
            'Piège fréquent : si $R_1 = R_2$, le montage **inverseur** donne $G = 1$ ($U_s = -U_e$), alors que le montage **non inverseur** donne $G = 1 + 1 = 2$ ($U_s = +2 U_e$). De plus, en non inverseur, $U_e$ arrive directement sur $E^+$, donc le courant prélevé sur la source d’entrée est **nul** ($i^+ = 0$).',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p05_q6',
            type: 'mcq',
            prompt: 'On choisit deux résistances identiques $R_1 = R_2 = 4{,}7\\,\\mathrm{k}\\Omega$ et $U_e = +3\\,\\mathrm{V}$. Que vaut $U_s$ dans un montage **non inverseur** (avec $V_{\\text{sat}} = 14\\,\\mathrm{V}$) ?',
            options: ['+6 V', '+3 V', '−3 V', '−6 V'],
            correctAnswerIndex: 0,
            explanation: 'En non inverseur avec R₁ = R₂, G = 1 + 1 = 2, donc U_s = +2 × 3 = +6 V.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Montage sommateur inverseur et montage comparateur
    // ========================================================================
    {
      id: 'premiere_c_physique_l02_amplificateur_operationnel_p06',
      order: 6,
      title: 'Montage sommateur inverseur et montage comparateur',
      summary:
        'Établir la loi du sommateur inverseur U_s = −R₃(U₁/R₁ + U₂/R₂) et prévoir les basculements +V_sat / −V_sat du comparateur en régime saturé.',
      conceptExplanation:
        "Deux autres montages essentiels du programme exploitent l’AO en régime linéaire (sommateur) et en régime saturé (comparateur).\n\n- **Montage sommateur inverseur (régime linéaire)** (p. 4 & Exercice 5 p. 8–9) : deux tensions $U_1$ et $U_2$ sont appliquées respectivement via $R_1$ et $R_2$ sur le nœud $A$ relié à $E^-$ ; $R_3$ assure la contre-réaction entre $A$ et $S$ ; $E^+$ est à la masse $M$.\n  - Comme $V_A = V_B = 0\\,\\mathrm{V}$ ($U_d = 0$), on a $i_1 = \\frac{U_1}{R_1}$ et $i_2 = \\frac{U_2}{R_2}$.\n  - Loi des nœuds en $A$ ($i^- = 0$) : $i_3 = i_1 + i_2$, avec $U_s = -R_3 i_3$ :\n    $$U_s = -R_3\\left(\\frac{U_1}{R_1} + \\frac{U_2}{R_2}\\right)$$\n  - **Cas particulier ($R_1 = R_2 = R_3 = R$)** : $U_s = -(U_1 + U_2)$, soit exactement l’opposée de la somme des entrées.\n- **Montage comparateur (régime saturé)** (p. 4) : il n’y a **pas de rétroaction sur $E^-$** (boucle ouverte) : $U_d \\ne 0$, donc $U_s$ ne peut prendre que deux valeurs ($+V_{\\text{sat}}$ ou $-V_{\\text{sat}}$).\n  - Si $U_1$ (tension de référence) est sur $E^-$ et $U_2$ (tension à comparer) est sur $E^+$, alors $U_d = U_2 - U_1$ :\n    - Si $U_2 > U_1 \\implies U_d > 0 \\implies U_s = +V_{\\text{sat}}$ ;\n    - Si $U_2 < U_1 \\implies U_d < 0 \\implies U_s = -V_{\\text{sat}}$.",
      keyRule:
        'Sommateur inverseur (linéaire) : U_s = −R₃(U₁/R₁ + U₂/R₂). Comparateur (boucle ouverte, saturé) : U_s = +V_sat si V⁺ > V⁻ (U_d > 0) et −V_sat si V⁺ < V⁻ (U_d < 0).',
      formulas: [
        {
          name: 'Montage sommateur inverseur',
          formula: 'U_s = -R_3\\left(\\frac{U_1}{R_1} + \\frac{U_2}{R_2}\\right)',
          note: 'Si R₁ = R₂ = R₃ = R, alors U_s = −(U₁ + U₂)',
        },
        {
          name: 'Montage comparateur (U₁ sur E⁻, U₂ sur E⁺)',
          formula: 'U_d = U_2 - U_1 \\implies \\begin{cases} U_s = +V_{\\text{sat}} & \\text{si } U_2 > U_1 \\\\ U_s = -V_{\\text{sat}} & \\text{si } U_2 < U_1 \\end{cases}',
          note: 'Fonctionne en régime saturé (pas de contre-réaction sur E⁻)',
        },
      ],
      workedExample: {
        title: 'Sommateur à trois résistances égales (Exercice 5 p. 8–9)',
        statement:
          'Dans un montage sommateur inverseur, toutes les résistances sont égales à $R = 250\\,\\Omega$. On applique $U_1 = 4\\,\\mathrm{V}$ et $U_2 = 6\\,\\mathrm{V}$ (avec $V_{\\text{sat}} = 14\\,\\mathrm{V}$). Calculer $U_s$.',
        methodSteps: [
          '1) AO idéal en régime linéaire : i⁺ = i⁻ = 0 et U_d = 0 ⇒ V_A = 0 V.',
          '2) Courants d’entrée : i₁ = U₁ / R et i₂ = U₂ / R.',
          '3) Loi des nœuds en A : i₃ = i₁ + i₂, et U_s = −R·i₃ = −R(U₁/R + U₂/R) = −(U₁ + U₂).',
          '4) Application numérique : U_s = −(4 + 6) = −10 V (comme |−10| < 14 V, pas de saturation).',
        ],
        conclusion: 'U_s = −10 V : c’est un montage sommateur inverseur.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Sommateur',
          stepTheme: 'Loi générale',
          stepTitle: 'Formule du montage sommateur inverseur',
          paragraphText:
            'Dans le montage sommateur inverseur (p. 4), la loi des nœuds à l’entrée $E^-$ ($i_3 = i_1 + i_2$ avec $V_A = 0\\,\\mathrm{V}$) conduit à la relation $U_s = -R_3\\left(\\frac{U_1}{R_1} + \\frac{U_2}{R_2}\\right)$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p06_q1',
            type: 'mcq',
            prompt: 'Un montage sommateur inverseur utilise $R_1 = 1\\,\\mathrm{k}\\Omega$, $R_2 = 2\\,\\mathrm{k}\\Omega$ et $R_3 = 4\\,\\mathrm{k}\\Omega$. On applique $U_1 = +1\\,\\mathrm{V}$ et $U_2 = +3\\,\\mathrm{V}$ ($V_{\\text{sat}} = 14\\,\\mathrm{V}$). Que vaut $U_s$ ?',
            options: ['−10 V', '−4 V', '+10 V', '−16 V'],
            correctAnswerIndex: 0,
            explanation: 'U_s = −R₃(U₁/R₁ + U₂/R₂) = −4 × (1/1 + 3/2) = −4 × (1 + 1,5) = −10 V.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exercice 5 p. 8–9',
          stepTheme: 'Cas R₁ = R₂ = R₃ = R',
          stepTitle: 'Sommateur simple lorsque les trois résistances sont égales',
          paragraphText:
            'Lorsque $R_1 = R_2 = R_3 = R$ (Exercice 5 p. 8–9, $R = 250\\,\\Omega$), le facteur $R$ se simplifie : $U_s = -(U_1 + U_2)$, soit $-10\\,\\mathrm{V}$ pour $U_1 = 4\\,\\mathrm{V}$ et $U_2 = 6\\,\\mathrm{V}$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p06_q2',
            type: 'mcq',
            prompt: 'Si dans un sommateur inverseur $R_1 = R_2 = R_3 = 250\\,\\Omega$, $U_1 = 4\\,\\mathrm{V}$ et $U_2 = 6\\,\\mathrm{V}$, quelle est l’expression et la valeur de $U_s$ (avec $V_{\\text{sat}} = 14\\,\\mathrm{V}$) ?',
            options: [
              'U_s = −(U₁ + U₂) = −10 V',
              'U_s = +(U₁ + U₂) = +10 V',
              'U_s = −(U₁ + U₂)/2 = −5 V',
              'U_s = −250(U₁ + U₂) = −2 500 V',
            ],
            correctAnswerIndex: 0,
            explanation: 'Quand les trois résistances valent R, U_s = −R(U₁/R + U₂/R) = −(U₁ + U₂) = −10 V (Exercice 5 p. 9).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Comparateur',
          stepTheme: 'Boucle ouverte',
          stepTitle: 'Principe du montage comparateur en régime saturé',
          paragraphText:
            'Dans un comparateur simple (p. 4), aucune liaison n’existe entre $S$ et $E^-$ : l’AO fonctionne en **régime saturé** ($U_d \\ne 0$). On compare $U_2$ (appliquée sur $E^+$) à la tension de référence $U_1$ (appliquée sur $E^-$) via $U_d = U_2 - U_1$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p06_q3',
            type: 'mcq',
            prompt: 'Dans le montage comparateur de la page 4, $U_1 = +5\\,\\mathrm{V}$ est appliquée sur $E^-$ et $U_2 = +3\\,\\mathrm{V}$ sur $E^+$, avec $V_{\\text{sat}} = 13\\,\\mathrm{V}$. Que vaut la tension de sortie $U_s$ ?',
            options: ['−13 V (−V_sat)', '+13 V (+V_sat)', '−2 V', '+2 V'],
            correctAnswerIndex: 0,
            explanation: 'U_d = V⁺ − V⁻ = U₂ − U₁ = 3 − 5 = −2 V < 0 ⇒ saturation négative : U_s = −V_sat = −13 V.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Signe de U_d',
          stepTheme: 'Comparaison V⁺ vs V⁻',
          stepTitle: 'Méthode infaillible pour le comparateur',
          paragraphText:
            'Pour ne jamais inverser le signe en comparateur : calcule toujours $U_d = V^+ - V^-$ en identifiant quelle tension est sur $E^+$ et quelle tension est sur $E^-$. Dès que $V^+ > V^-$, $U_s = +V_{\\text{sat}}$ ; dès que $V^+ < V^-$, $U_s = -V_{\\text{sat}}$.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p06_q4',
            type: 'mcq',
            prompt: 'Sur un comparateur, on inverse le câblage : on applique la référence $U_1 = +5\\,\\mathrm{V}$ sur $E^+$ et la tension variable $U_2 = +3\\,\\mathrm{V}$ sur $E^-$ ($V_{\\text{sat}} = 12\\,\\mathrm{V}$). Que vaut $U_s$ ?',
            options: ['+12 V (+V_sat)', '−12 V (−V_sat)', '+2 V', '0 V'],
            correctAnswerIndex: 0,
            explanation: 'Ici V⁺ = U₁ = 5 V et V⁻ = U₂ = 3 V, donc U_d = 5 − 3 = +2 V > 0 ⇒ U_s = +V_sat = +12 V.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Signal périodique',
          stepTheme: 'Créneaux en sortie',
          stepTitle: 'Que donne un comparateur alimenté par une tension sinusoïdale ?',
          paragraphText:
            'Si l’on applique sur $E^+$ une tension sinusoïdale $U_e(t)$ et sur $E^-$ une référence $U_1 = 0\\,\\mathrm{V}$ (masse), la sortie $U_s(t)$ vaut $+V_{\\text{sat}}$ pendant les alternances positives ($U_e > 0$) et $-V_{\\text{sat}}$ pendant les alternances négatives ($U_e < 0$) : on obtient un **signal en créneaux**.',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p06_q5',
            type: 'mcq',
            prompt: 'On applique $U_2(t) = 5\\sin(\\omega t)$ (en $\\mathrm{V}$) sur $E^+$ et on relie $E^-$ à la masse ($U_1 = 0\\,\\mathrm{V}$). Quelle est la forme de $U_s(t)$ en sortie ?',
            options: [
              'Une tension en créneaux oscillant entre +V_sat et −V_sat',
              'Une sinusoïde amplifiée de même fréquence',
              'Une tension continue constante égale à +5 V',
              'Une tension toujours nulle',
            ],
            correctAnswerIndex: 0,
            explanation: 'En boucle ouverte, l’AO sature dès que U₂(t) ≠ 0 : +V_sat quand U₂ > 0 et −V_sat quand U₂ < 0, formant un créneau.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège sommateur',
          stepTheme: 'Pas d’addition en V⁻',
          stepTitle: 'Le sommateur ne donne pas U_s = U₁ + U₂ directement',
          paragraphText:
            'Deux pièges à éviter : 1) Le montage standard étudié en 1ère est un sommateur **inverseur**, donc il y a un signe `−` devant la somme : si $U_1 + U_2 > 0$, $U_s < 0$ ; 2) on ne peut jamais utiliser $U_d = 0$ en boucle ouverte (comparateur) !',
          exercise: {
            id: 'premiere_c_physique_l02_amplificateur_operationnel_p06_q6',
            type: 'mcq',
            prompt: 'Un élève affirme : « Dans le montage comparateur de la page 4, comme l’AO est idéal, j’écris $U_d = 0$ donc $U_1 = U_2$. » Pourquoi son raisonnement est-il faux ?',
            options: [
              'Parce que sans contre-réaction sur E⁻, l’AO est en régime saturé où U_d ≠ 0 (U⁺ ≠ U⁻)',
              'Parce que dans un comparateur, c’est i⁺ qui devient infini',
              'Parce que U_d n’est nul qu’en courant continu',
              'Parce qu’un AO idéal est toujours bloqué à 0 V',
            ],
            correctAnswerIndex: 0,
            explanation: 'La relation U_d = 0 n’est valable qu’en régime linéaire (avec contre-réaction sur E⁻ et |U_s| < V_sat) ; en comparateur (saturé), U_d ≠ 0.',
          },
        },
      ],
    },
  ]),
};
