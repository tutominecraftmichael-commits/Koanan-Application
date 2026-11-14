import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « PC 1ère C - P12 : Réflexion et réfraction de la lumière blanche » (format v2).
export const PHYSIQUE_1RE_CD_L03_REFLEXION_REFRACTION_LUMIERE: CurriculumChapter = {
  id: 'premiere_c_physique_l03_reflexion_refraction_lumiere',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  // Source « PC 1ère C - P12 » : 12e leçon du programme de 1re C
  order: 12,
  title: 'Leçon 12 : Réflexion et réfraction de la lumière blanche',
  summary:
    'Lois de Descartes pour la réflexion et lois de Descartes-Snell pour la réfraction, angle limite, réflexion totale, traversée d’une cuve à eau ou d’un prisme, dispersion et fibre optique.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'PC 1ère C - P12 : Réflexion et réfraction de la lumière blanche.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Réflexion de la lumière et lois de Descartes
    // ========================================================================
    {
      id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01',
      order: 1,
      title: 'Réflexion de la lumière et lois de Descartes',
      summary:
        'Définir la réflexion, repérer le plan d’incidence et la normale, et appliquer les deux lois de Descartes (r = i).',
      conceptExplanation:
        "Devant un miroir plan $(M)$, un pinceau lumineux rebondit sans changer de milieu de propagation.\n\n- **Définition** : la **réflexion de la lumière** est le changement de direction et de sens de propagation de la lumière lorsqu’elle rencontre une surface réfléchissante (ex. miroir plan), tout en **restant dans le milieu de propagation initial**.\n- **Repères géométriques** :\n  - Le point $I$ où le rayon incident $(SI)$ frappe le miroir est le **point d’incidence**.\n  - La droite perpendiculaire au miroir passant par $I$ est la **normale** $(IN)$.\n  - L’**angle d’incidence** $i$ est l’angle entre le rayon incident $(SI)$ et la **normale** ; l’**angle de réflexion** $r$ est l’angle entre le rayon réfléchi $(IR)$ et la **normale**.\n- **Lois de Descartes pour la réflexion** (vérifiées par les mesures $i = r = 0^\\circ, 10^\\circ, \\dots, 50^\\circ$ p. 1) :\n  1. **Première loi (loi du plan)** : le rayon incident $(SI)$, le rayon réfléchi $(IR)$ et la normale au point d’incidence appartiennent à un même plan appelé **plan d’incidence**.\n  2. **Deuxième loi (loi des angles)** : l’angle d’incidence et l’angle de réflexion ont la **même mesure** :\n     $$r = i$$",
      keyRule:
        'Les angles i et r se mesurent toujours par rapport à la NORMALE au miroir (et non par rapport à la surface). Lois de la réflexion : même plan d’incidence et r = i.',
      formulas: [
        {
          name: 'Deuxième loi de Descartes pour la réflexion',
          formula: 'r = i',
          note: 'i : angle entre le rayon incident et la normale ; r : angle entre le rayon réfléchi et la normale',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Réflexion sur un miroir plan (p. 1)',
        caption: 'Le rayon incident SI, la normale IN et le rayon réfléchi IR sont dans le même plan d’incidence, avec r = i.',
        svgContent: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-ray1" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb"/>
    </marker>
    <marker id="arr-ray2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#dc2626"/>
    </marker>
  </defs>
  <!-- Mirror -->
  <line x1="40" y1="138" x2="320" y2="138" stroke="#1e293b" stroke-width="2.5"/>
  <g stroke="#64748b" stroke-width="1.3">
    <line x1="50" y1="138" x2="42" y2="148"/><line x1="70" y1="138" x2="62" y2="148"/>
    <line x1="90" y1="138" x2="82" y2="148"/><line x1="110" y1="138" x2="102" y2="148"/>
    <line x1="130" y1="138" x2="122" y2="148"/><line x1="150" y1="138" x2="142" y2="148"/>
    <line x1="170" y1="138" x2="162" y2="148"/><line x1="190" y1="138" x2="182" y2="148"/>
    <line x1="210" y1="138" x2="202" y2="148"/><line x1="230" y1="138" x2="222" y2="148"/>
    <line x1="250" y1="138" x2="242" y2="148"/><line x1="270" y1="138" x2="262" y2="148"/>
    <line x1="290" y1="138" x2="282" y2="148"/><line x1="310" y1="138" x2="302" y2="148"/>
  </g>
  <text x="16" y="143" font-size="11" font-weight="bold" fill="#1e293b">(M)</text>
  <!-- Normal -->
  <line x1="180" y1="22" x2="180" y2="152" stroke="#475569" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="186" y="29" font-size="11" fill="#475569">Normale (N)</text>
  <rect x="180" y="128" width="9" height="10" fill="none" stroke="#475569" stroke-width="1.2"/>
  <circle cx="180" cy="138" r="3" fill="#1e293b"/>
  <text x="169" y="162" font-size="12" font-weight="bold" fill="#1e293b">I</text>
  <!-- Incident ray S -> I -->
  <line x1="65" y1="42" x2="178" y2="136" stroke="#2563eb" stroke-width="2.2" marker-end="url(#arr-ray1)"/>
  <circle cx="65" cy="42" r="3" fill="#2563eb"/>
  <text x="51" y="42" font-size="12" font-weight="bold" fill="#2563eb">S</text>
  <!-- Reflected ray I -> R -->
  <line x1="180" y1="138" x2="295" y2="42" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr-ray2)"/>
  <circle cx="295" cy="42" r="3" fill="#dc2626"/>
  <text x="302" y="44" font-size="12" font-weight="bold" fill="#dc2626">R</text>
  <!-- Angle arcs i and r -->
  <path d="M 149 112 A 40 40 0 0 1 180 98" fill="none" stroke="#2563eb" stroke-width="1.6"/>
  <text x="159" y="96" font-size="12" font-weight="bold" fill="#2563eb">i</text>
  <path d="M 180 98 A 40 40 0 0 1 211 112" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <text x="193" y="96" font-size="12" font-weight="bold" fill="#dc2626">r</text>
</svg>`,
      },
      workedExample: {
        title: 'Rayon arrivant sur un miroir vertical (Activité 1 p. 2)',
        statement:
          'Un rayon lumineux frappe un miroir plan disposé verticalement avec un angle d’incidence $\\theta = 45^\\circ$ par rapport à la normale horizontale. Déterminer la valeur de l’angle $\\alpha$ du rayon réfléchi et la direction finale du rayon.',
        methodSteps: [
          '1) Identifier la normale : le miroir étant vertical, la normale au plan du miroir est horizontale.',
          '2) Appliquer la 2e loi de Descartes pour la réflexion : α = θ = 45°.',
          '3) Le rayon incident arrive obliquement à 45° au-dessus de l’horizontale et repart à 45° au-dessous (ou symétriquement de l’autre côté de la normale).',
        ],
        conclusion: 'L’angle de réflexion vaut α = 45° et l’angle entre le rayon incident et le rayon réfléchi vaut 45° + 45° = 90°.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Milieu de propagation',
          stepTitle: 'Qu’est-ce que la réflexion de la lumière ?',
          paragraphText:
            'La **réflexion** est le changement de direction et de sens d’un rayon lumineux lorsqu’il rencontre une surface réfléchissante (comme un miroir), tout en restant dans le **même milieu** de propagation initial.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01_q1',
            type: 'mcq',
            prompt: 'Lors d’une réflexion de la lumière sur un miroir, que devient le milieu de propagation du rayon réfléchi ?',
            options: [
              'Le rayon réfléchi reste dans le milieu de propagation initial',
              'Le rayon traverse obligatoirement le miroir et change de milieu',
              'Le rayon est totalement absorbé par le miroir',
              'Le rayon change de vitesse car il passe dans le verre',
            ],
            correctAnswerIndex: 0,
            explanation: 'Par définition, la réflexion renvoie la lumière dans le milieu initial (à la différence de la réfraction qui traverse le dioptre).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Lois de Descartes',
          stepTheme: '1re et 2e lois',
          stepTitle: 'Énoncé des deux lois de Descartes pour la réflexion',
          paragraphText:
            'D’après les lois de Descartes (p. 2) : 1) le rayon incident et le rayon réfléchi appartiennent à un même plan appelé **plan d’incidence** ; 2) l’angle d’incidence $i$ et l’angle de réflexion $r$ ont la même mesure ($r = i$).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01_q2',
            type: 'mcq',
            prompt: 'D’après l’Exercice 1 (p. 6), quelle affirmation concernant les lois de la réflexion est **VRAIE** ?',
            options: [
              'Le rayon incident et le rayon réfléchi appartiennent au plan d’incidence et vérifient i = r',
              'Dans une réflexion, l’angle d’incidence i est toujours supérieur à l’angle de réflexion r',
              'Le rayon incident et le rayon réfléchi n’appartiennent pas au même plan',
              'L’angle de réflexion r vaut toujours le double de l’angle d’incidence i',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les deux lois de Descartes imposent un plan d’incidence commun et r = i.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Activité 1 p. 2',
          stepTheme: 'Miroir vertical',
          stepTitle: 'Réflexion sur un miroir vertical sous θ = 45°',
          paragraphText:
            'Si un rayon arrive sur un miroir vertical avec un angle $\\theta = 45^\\circ$ par rapport à la normale horizontale, le rayon réfléchi repart symétriquement sous un angle $\\alpha = 45^\\circ$ ; les deux rayons font alors entre eux un angle de $90^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01_q3',
            type: 'mcq',
            prompt: 'Un rayon lumineux frappe un miroir plan avec un angle d’incidence $i = 45^\\circ$. Quel angle fait le rayon incident avec le rayon réfléchi ?',
            options: ['90°', '45°', '180°', '0°'],
            correctAnswerIndex: 0,
            explanation: 'r = i = 45°, et les deux rayons sont de part et d’autre de la normale : l’angle entre eux vaut i + r = 45° + 45° = 90°.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Incidence rasante/normale',
          stepTheme: 'Cas i = 0°',
          stepTitle: 'Que se passe-t-il sous incidence normale (i = 0°) ?',
          paragraphText:
            'Si le rayon arrive perpendiculairement au miroir (confondu avec la normale), alors $i = 0^\\circ \\implies r = 0^\\circ$ : le rayon est réfléchi sur lui-même, en sens inverse.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01_q4',
            type: 'mcq',
            prompt: 'Un faisceau laser frappe un miroir plan perpendiculairement à sa surface. Que valent l’angle d’incidence $i$ et l’angle de réflexion $r$ ?',
            options: [
              'i = 0° et r = 0° (le rayon repart sur lui-même)',
              'i = 90° et r = 90°',
              'i = 90° et r = 0°',
              'Il n’y a aucune réflexion',
            ],
            correctAnswerIndex: 0,
            explanation: 'Perpendiculaire à la surface signifie confondu avec la normale, donc i = 0° et r = 0°.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège angle surface',
          stepTheme: 'Angle avec le miroir',
          stepTitle: 'Complémentaire à 90° si l’angle est donné avec le miroir',
          paragraphText:
            'Piège classique : si un énoncé indique que le rayon fait un angle de $30^\\circ$ **avec le plan du miroir**, l’angle d’incidence $i$ (mesuré avec la normale) vaut $i = 90^\\circ - 30^\\circ = 60^\\circ$, donc $r = 60^\\circ$ !',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01_q5',
            type: 'mcq',
            prompt: 'Un rayon lumineux rase un miroir plan en faisant un angle de $25^\\circ$ **avec la surface du miroir**. Quel est son angle de réflexion $r$ ?',
            options: ['65°', '25°', '50°', '130°'],
            correctAnswerIndex: 0,
            explanation: 'La normale est à 90° du miroir : i = 90° − 25° = 65°, et par la 2e loi de Descartes r = i = 65°.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Rotation du miroir',
          stepTheme: 'Géométrie',
          stepTitle: 'Lien entre plan d’incidence et miroir',
          paragraphText:
            'Dans l’espace à trois dimensions, le plan d’incidence est le plan unique contenant à la fois le rayon incident $(SI)$ et la normale $(IN)$ ; le rayon réfléchi $(IR)$ est toujours contenu dans ce plan (jamais hors du plan).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p01_q6',
            type: 'mcq',
            prompt: 'Deux éléments géométriques définissent toujours le plan d’incidence. Lesquels ?',
            options: [
              'Le rayon incident et la normale à la surface au point d’incidence',
              'La surface du miroir uniquement',
              'Le rayon incident et une droite quelconque parallèle au miroir',
              'La source S et le centre de la Terre',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le plan d’incidence est déterminé par le rayon incident et la normale au point d’incidence I.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Réfraction de la lumière et lois de Descartes-Snell
    // ========================================================================
    {
      id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02',
      order: 2,
      title: 'Réfraction de la lumière et lois de Descartes–Snell',
      summary:
        'Définir la réfraction à la traversée d’un dioptre, interpréter l’indice n et appliquer la relation n₁ sin i₁ = n₂ sin i₂.',
      conceptExplanation:
        "Un bâton plongé dans l’eau semble brisé à la surface : la lumière change de direction en passant d’un milieu transparent à un autre.\n\n- **Définition** : la **réfraction** est le changement de direction de propagation de la lumière lorsqu’elle traverse la surface de séparation (**dioptre**) entre deux milieux homogènes et transparents distincts (ex. air–eau, air–verre).\n- **Vocabulaire (Exercice 2 p. 6)** : rayon incident $(SI)$ dans le milieu 1 d’indice $n_1$, normale $(IN)$ au dioptre, angle d’incidence $i_1$, angle de réfraction $i_2$ et rayon réfracté $(IT)$ dans le milieu 2 d’indice $n_2$.\n- **Lois de Descartes–Snell pour la réfraction** (p. 3) :\n  1. **Première loi** : le rayon réfracté $(IT)$, le rayon incident $(SI)$ et la normale appartiennent au **même plan d’incidence**.\n  2. **Deuxième loi** : l’angle d’incidence $i_1$ et l’angle de réfraction $i_2$ vérifient :\n     $$n_1 \\cdot \\sin i_1 = n_2 \\cdot \\sin i_2$$\n     où $n_1$ et $n_2$ sont les **indices de réfraction** des deux milieux ($n_{\\text{air}} \\approx 1{,}00$, $n_{\\text{eau}} \\approx 1{,}33$, $n_{\\text{verre}} \\approx 1{,}50$ à $1{,}52$).\n- **Vérification expérimentale (p. 3)** : pour l’interface air ($n_1=1$) / verre ($n_2=1{,}5$), le tableau donne pour $i_1 = 30^\\circ, 40^\\circ, 50^\\circ$ des angles réfractés $i_2 = 19{,}5^\\circ, 25{,}5^\\circ, 31^\\circ$, tels que le rapport $\\frac{\\sin i_1}{\\sin i_2} \\approx 1{,}5 = \\frac{n_2}{n_1}$ reste constant.",
      keyRule:
        'Lois de Descartes–Snell : plan d’incidence commun et n₁ sin i₁ = n₂ sin i₂. L’indice de réfraction est sans unité et toujours ≥ 1 (air ≈ 1,00 ; eau ≈ 1,33 ; verre ≈ 1,5).',
      formulas: [
        {
          name: 'Deuxième loi de Descartes–Snell (réfraction)',
          formula: 'n_1\\,\\sin i_1 = n_2\\,\\sin i_2',
          note: 'Les angles i₁ et i₂ sont toujours mesurés par rapport à la normale au dioptre',
        },
        {
          name: 'Rapport des sinus',
          formula: '\\frac{\\sin i_1}{\\sin i_2} = \\frac{n_2}{n_1}',
          note: 'Permet de mesurer expérimentalement l’indice n₂ d’un milieu transparent par rapport à l’air (n₁ = 1)',
        },
      ],
      workedExample: {
        title: 'Réfraction air → verre et air → eau (Tableau p. 3 & Activité 2 p. 4)',
        statement:
          'Un rayon lumineux passe de l’air ($n_1 = 1{,}00$) dans de l’eau ($n_2 = 1{,}33$) sous un angle d’incidence $\\theta_1 = 45^\\circ$. Calculer l’angle de réfraction $\\theta_2$. (Comparer avec le cas $\\theta_1 = 60^\\circ$ utilisé par mégarde dans le corrigé du PDF p. 4).',
        methodSteps: [
          '1) Appliquer Descartes-Snell : n₁ sin θ₁ = n₂ sin θ₂ ⇒ sin θ₂ = (n₁ / n₂) sin θ₁.',
          '2) Pour θ₁ = 45° : sin θ₂ = (1 × sin 45°) / 1,33 = 0,7071 / 1,33 ≈ 0,5317 ⇒ θ₂ = arcsin(0,5317) ≈ 32,1°.',
          '3) Si l’incidence était θ₁ = 60° (valeur substituée dans le corrigé du PDF p. 4), sin θ₂ = 0,866 / 1,33 ≈ 0,651 ⇒ θ₂ ≈ 40,6° (arrondi à 40° dans le PDF).',
        ],
        conclusion: 'Pour θ₁ = 45° dans l’énoncé de l’Activité 2, l’angle réfracté exact est θ₂ ≈ 32,1° (et non 40°).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Dioptre',
          stepTitle: 'Quand se produit le phénomène de réfraction ?',
          paragraphText:
            'La **réfraction** est la déviation (changement de direction) d’un faisceau lumineux lorsqu’il traverse la surface de séparation (**dioptre**) entre deux milieux homogènes et transparents d’indices différents.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02_q1',
            type: 'mcq',
            prompt: 'Laquelle de ces définitions correspond exactement à la **réfraction** de la lumière ?',
            options: [
              'Le changement de direction de propagation de la lumière à la traversée de la séparation entre deux milieux transparents distincts',
              'Le rebond de la lumière sur un miroir en restant dans le milieu initial',
              'L’absorption totale d’un rayon lumineux par un corps noir opaque',
              'La propagation en ligne droite dans le vide',
            ],
            correctAnswerIndex: 0,
            explanation: 'Lors de la réfraction, la lumière traverse le dioptre et change de direction dans le second milieu transparent (Exercice 1 Q3 p. 6).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Loi de Snell',
          stepTheme: 'Relation des sinus',
          stepTitle: 'Formule de la deuxième loi de Descartes–Snell',
          paragraphText:
            'La deuxième loi de Descartes–Snell pour la réfraction s’écrit $n_1\\sin i_1 = n_2\\sin i_2$, où $n_1, i_1$ concernent le milieu incident et $n_2, i_2$ le milieu réfracté (toujours avec les angles pris par rapport à la **normale**).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02_q2',
            type: 'mcq',
            prompt: 'Un rayon passe d’un milieu 1 ($n_1$) à un milieu 2 ($n_2$) sous un angle d’incidence $i_1$ et un angle de réfraction $i_2$. Quelle relation est exacte ?',
            options: [
              'n₁ · sin i₁ = n₂ · sin i₂',
              'n₁ · cos i₁ = n₂ · cos i₂',
              'n₁ · i₁ = n₂ · i₂',
              'n₁ / sin i₁ = n₂ / sin i₂',
            ],
            correctAnswerIndex: 0,
            explanation: 'C’est la deuxième loi de Descartes–Snell : n₁ sin i₁ = n₂ sin i₂.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Mesure d’indice',
          stepTheme: 'Expérience p. 3',
          stepTitle: 'Déterminer l’indice d’un verre à partir de i₁ et i₂',
          paragraphText:
            'Lorsqu’un rayon passe de l’air ($n_1 = 1{,}00$) dans un bloc de verre sous $i_1 = 40^\\circ$ ($\\sin 40^\\circ \\approx 0{,}64$) et se réfracte à $i_2 = 25{,}5^\\circ$ ($\\sin 25{,}5^\\circ \\approx 0{,}43$), le rapport $\\frac{\\sin i_1}{\\sin i_2} = \\frac{0{,}64}{0{,}43} \\approx 1{,}49 \\approx 1{,}50$ donne l’indice $n_2$ du verre.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02_q3',
            type: 'mcq',
            prompt: 'Un rayon venant de l’air ($n_1 = 1{,}00$) pénètre dans un bloc transparent sous $i_1 = 30^\\circ$ ($\\sin 30^\\circ = 0{,}50$) et est réfracté à $i_2 = 19{,}5^\\circ$ ($\\sin 19{,}5^\\circ \\approx 0{,}334$). Quel est l’indice $n_2$ de ce milieu ?',
            options: ['≈ 1,50', '≈ 0,67', '≈ 1,33', '≈ 2,00'],
            correctAnswerIndex: 0,
            explanation: 'n₂ = n₁ · (sin i₁ / sin i₂) = 1,00 × (0,50 / 0,334) ≈ 1,50 (tableau p. 3).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Calcul de i₂',
          stepTheme: 'Activité 2 corrigée',
          stepTitle: 'Calculer un angle réfracté avec sin⁻¹ (arcsin)',
          paragraphText:
            'Pour trouver $i_2$, isole d’abord $\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2}$, puis applique la fonction $\\arcsin$ ($\\sin^{-1}$ sur calculatrice en mode **degrés**). Pour $n_1=1$, $n_2=1{,}33$ et $i_1=45^\\circ$, $\\sin i_2 = 0{,}7071/1{,}33 \\approx 0{,}5317 \\implies i_2 \\approx 32{,}1^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02_q4',
            type: 'mcq',
            prompt: 'Un rayon passe de l’air ($n_1 = 1{,}00$) dans l’eau ($n_2 = 1{,}33$) avec un angle d’incidence $\\theta_1 = 45^\\circ$ (Activité 2 p. 4). Quelle est la valeur exacte de l’angle réfracté $\\theta_2$ ?',
            options: ['≈ 32,1°', '≈ 40,6°', '≈ 70,5°', '45,0°'],
            correctAnswerIndex: 0,
            explanation: 'sin θ₂ = (1 × sin 45°) / 1,33 ≈ 0,5317 ⇒ θ₂ = arcsin(0,5317) ≈ 32,1° (le corrigé PDF avait utilisé sin 60° par erreur).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Réfringence',
          stepTheme: 'Sens de déviation',
          stepTitle: 'Le rayon se rapproche-t-il ou s’écarte-t-il de la normale ?',
          paragraphText:
            'Dire que le milieu 2 est **plus réfringent** que le milieu 1 signifie $n_2 > n_1$. D’après $n_1 \\sin i_1 = n_2 \\sin i_2$, on a alors $\\sin i_2 < \\sin i_1$, donc $i_2 < i_1$ : le rayon réfracté **se rapproche de la normale**.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02_q5',
            type: 'mcq',
            prompt: 'Un rayon lumineux passe de l’eau ($n_1 = 1{,}33$) dans du verre ($n_2 = 1{,}52$). Comment évolue l’angle avec la normale ?',
            options: [
              'Le verre étant plus réfringent (n₂ > n₁), le rayon se rapproche de la normale : i₂ < i₁',
              'Le rayon s’écarte de la normale : i₂ > i₁',
              'Le rayon n’est pas dévié : i₂ = i₁',
              'Il y a réflexion totale quel que soit l’angle d’incidence',
            ],
            correctAnswerIndex: 0,
            explanation: 'Quand n₂ > n₁, sin i₂ = (n₁/n₂) sin i₁ < sin i₁ ⇒ i₂ < i₁ : le rayon réfracté se rapproche de la normale.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège i₁ = 0°',
          stepTheme: 'Incidence normale',
          stepTitle: 'Incidence normale et retour inverse de la lumière',
          paragraphText:
            'Si le rayon arrive perpendiculairement au dioptre ($i_1 = 0^\\circ$), $\\sin i_2 = \\frac{n_1}{n_2}\\sin 0^\\circ = 0 \\implies i_2 = 0^\\circ$ : le rayon traverse tout droit **sans déviation**. Attention aussi au mode de la calculatrice : vérifie qu’elle est en **DEG** (et pas RAD) !',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p02_q6',
            type: 'mcq',
            prompt: 'Un rayon lumineux passe de l’air ($n_1 = 1$) dans du verre ($n_2 = 1{,}5$) en arrivant perpendiculairement à la surface. Que vaut l’angle de réfraction $i_2$ ?',
            options: ['0° (aucune déviation)', '41,8°', '90°', '48,2°'],
            correctAnswerIndex: 0,
            explanation: 'Perpendiculaire à la surface ⇒ i₁ = 0° ⇒ n₂ sin i₂ = 0 ⇒ i₂ = 0°.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Passage vers un milieu plus réfringent et angle limite de réfraction
    // ========================================================================
    {
      id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03',
      order: 3,
      title: 'Passage n₁ < n₂ et angle limite de réfraction',
      summary:
        'Calculer l’angle limite de réfraction sin L = n₁/n₂ quand la lumière passe d’un milieu moins réfringent vers un milieu plus réfringent.',
      conceptExplanation:
        "Que se passe-t-il si la lumière arrive depuis un milieu moins réfringent ($n_1 < n_2$, par exemple air $\\to$ eau ou air $\\to$ verre) avec un angle d’incidence très grand ?\n\n- **Comportement pour $n_1 < n_2$** (p. 3) : on a toujours $i_2 < i_1$. Quel que soit $i_1 \\in [0^\\circ, 90^\\circ[$, $\\frac{n_1}{n_2}\\sin i_1 < 1$, donc la réfraction existe **toujours** (il n’y a **jamais** de réflexion totale dans ce sens !).\n- **Angle limite de réfraction $L$ (ou $i_\\ell$)** : lorsque le rayon incident rase le dioptre ($i_1 \\to 90^\\circ$, $\\sin i_1 = 1$), l’angle réfracté $i_2$ atteint sa valeur maximale possible, appelée **angle limite de réfraction** $L$ :\n  $$n_2 \\sin L = n_1 \\sin 90^\\circ \\implies \\sin L = \\frac{n_1}{n_2}$$\n- **Correction importante de l’Exercice 4 (p. 7–8)** :\n  - Un rayon dans l’air ($n_1 = 1{,}00$) arrive en faisant $30^\\circ$ **avec la surface de l’eau** ($n_2 = 1{,}33$) : l’angle d’incidence vaut donc $i_1 = 90^\\circ - 30^\\circ = 60^\\circ$.\n  - L’angle de réflexion vaut $r = 60^\\circ$, l’angle de réfraction vaut $i_2 = \\arcsin(\\sin 60^\\circ / 1{,}33) \\approx 40{,}6^\\circ$ *(arrondi à $40^\\circ$ dans le PDF)*.\n  - Pour l’angle limite air $\\to$ eau, $\\sin i_\\ell = \\frac{1{,}00}{1{,}33} \\approx 0{,}7519$, ce qui donne exactement $i_\\ell = \\arcsin(0{,}7519) \\approx 48{,}75^\\circ$ *(le corrigé PDF p. 8 affiche par coquille `76,19°`, valeur impossible car $\\sin 76{,}19^\\circ \\approx 0{,}971$ !)*.",
      keyRule:
        'Quand n₁ < n₂ (ex. air → eau ou air → verre), il y a toujours réfraction et l’angle réfracté reste inférieur à l’angle limite de réfraction L donné par sin L = n₁ / n₂ (≈ 48,75° pour air/eau).',
      formulas: [
        {
          name: 'Angle limite de réfraction (quand n₁ < n₂)',
          formula: '\\sin L = \\frac{n_1}{n_2}',
          note: 'Pour n₁ = 1,00 (air) et n₂ = 1,33 (eau) : L = arcsin(1/1,33) ≈ 48,75° ; pour le verre (n₂ = 1,50) : L ≈ 41,8°',
        },
      ],
      workedExample: {
        title: 'Rayon air → eau incliné à 30° de la surface (Exercice 4 p. 7–8 corrigé)',
        statement:
          'Un rayon lumineux dans l’air ($n_1 = 1{,}00$) arrive sur la surface horizontale de l’eau ($n_2 = 1{,}33$) en faisant un angle de $30^\\circ$ avec cette surface. Déterminer $i_1$, $r$, $i_2$ et l’angle limite de réfraction $i_\\ell$.',
        methodSteps: [
          '1) Angle d’incidence avec la normale : i₁ = 90° − 30° = 60°.',
          '2) Angle de réflexion : r = i₁ = 60°.',
          '3) Angle de réfraction : sin i₂ = (1,00 × sin 60°) / 1,33 ≈ 0,8660 / 1,33 ≈ 0,6511 ⇒ i₂ = arcsin(0,6511) ≈ 40,6°.',
          '4) Angle limite de réfraction (pour i₁ = 90°) : sin i_ℓ = 1,00 / 1,33 ≈ 0,7519 ⇒ i_ℓ = arcsin(0,7519) ≈ 48,75° (correction de la coquille 76,19° du PDF).',
        ],
        conclusion: 'i₁ = 60° ; r = 60° ; i₂ ≈ 40,6° ; angle limite de réfraction i_ℓ ≈ 48,75°.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Angle limite L',
          stepTheme: 'Sens n₁ < n₂',
          stepTitle: 'Comment définit-on l’angle limite de réfraction quand n₁ < n₂ ?',
          paragraphText:
            'Lorsque la lumière passe d’un milieu $1$ vers un milieu $2$ **plus réfringent** ($n_1 < n_2$), $i_2$ augmente avec $i_1$ et atteint son maximum $L$ (angle limite de réfraction) lorsque le rayon incident est rasant ($i_1 = 90^\\circ$) : $\\sin L = \\frac{n_1}{n_2}$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03_q1',
            type: 'mcq',
            prompt: 'Lorsqu’un rayon lumineux passe de l’air ($n_1 = 1$) dans du verre d’indice $n_2 = 1{,}50$, quelle relation donne l’angle limite de réfraction $L$ ?',
            options: [
              'sin L = n₁ / n₂ = 1 / 1,50 (soit L ≈ 41,8°)',
              'sin L = n₂ / n₁ = 1,50',
              'cos L = n₁ / n₂',
              'L = 90°',
            ],
            correctAnswerIndex: 0,
            explanation: 'Pour i₁ = 90°, n₁ sin 90° = n₂ sin L ⇒ sin L = n₁ / n₂ = 1 / 1,50 ≈ 0,6667 ⇒ L ≈ 41,8°.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Air → Eau',
          stepTheme: 'Exercice 4 corrigé',
          stepTitle: 'Valeur exacte de l’angle limite air → eau',
          paragraphText:
            'Pour l’interface air ($n_1 = 1{,}00$) / eau ($n_2 = 1{,}33$), $\\sin i_\\ell = \\frac{1}{1{,}33} \\approx 0{,}7519$, ce qui donne $i_\\ell \\approx 48{,}75^\\circ$ (environ $48{,}8^\\circ$). Un rayon venant de l’air ne peut donc jamais se réfracter dans l’eau avec un angle supérieur à $48{,}8^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03_q2',
            type: 'mcq',
            prompt: 'Avec $n_{\\text{air}} = 1{,}00$ et $n_{\\text{eau}} = 1{,}33$, quelle est la valeur exacte de l’angle limite de réfraction $i_\\ell$ (Activité 2 Q3 & Exercice 4 Q4) ?',
            options: ['≈ 48,8° (48,75°)', '76,19°', '30,0°', '41,8°'],
            correctAnswerIndex: 0,
            explanation: 'arcsin(1 / 1,33) = arcsin(0,7519) ≈ 48,75° (la valeur 76,19° imprimée dans le corrigé PDF p. 8 est une coquille).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Conversion 90° − θ',
          stepTheme: 'Exercice 4 p. 7–8',
          stepTitle: 'Trouver i₁ quand l’angle est donné par rapport à la surface',
          paragraphText:
            'Si le rayon incident fait un angle de $30^\\circ$ avec la surface de l’eau, trace d’abord la normale (perpendiculaire à la surface) : l’angle d’incidence est le complémentaire $i_1 = 90^\\circ - 30^\\circ = 60^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03_q3',
            type: 'mcq',
            prompt: 'Dans l’Exercice 4 (p. 7), un rayon arrive dans l’air en formant un angle de $30^\\circ$ **avec la surface de l’eau** ($n_2 = 1{,}33$). Que valent l’angle d’incidence $i_1$ et l’angle de réfraction $i_2$ ?',
            options: [
              'i₁ = 60° et i₂ ≈ 40,6°',
              'i₁ = 30° et i₂ ≈ 22,1°',
              'i₁ = 60° et i₂ = 60°',
              'i₁ = 30° et i₂ ≈ 40,6°',
            ],
            correctAnswerIndex: 0,
            explanation: 'i₁ = 90° − 30° = 60°, puis sin i₂ = sin 60° / 1,33 ≈ 0,6511 ⇒ i₂ ≈ 40,6°.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Toujours réfracté',
          stepTheme: 'Pas de réflexion totale',
          stepTitle: 'Peut-on observer une réflexion totale de l’air vers l’eau ?',
          paragraphText:
            'Non ! Lorsqu’un rayon passe d’un milieu **moins réfringent** vers un milieu **plus réfringent** ($n_1 < n_2$), $\\sin i_2 = \\frac{n_1}{n_2}\\sin i_1$ est toujours strictement inférieur à $1$, donc il existe toujours un rayon réfracté dans le milieu 2.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03_q4',
            type: 'mcq',
            prompt: 'Un faisceau laser se propageant dans l’air ($n_1 = 1{,}00$) frappe la surface calme d’une piscine ($n_2 = 1{,}33$) sous un angle d’incidence $i_1 = 80^\\circ$. Que se passe-t-il ?',
            options: [
              'Une partie est réfléchie à 80° et le reste est réfracté dans l’eau sous i₂ ≈ 47,8° (< 48,8°)',
              'Il se produit une réflexion totale car 80° > 48,8°',
              'Le rayon réfracté fait un angle de 90° avec la normale',
              'Aucun rayon ne pénètre dans l’eau au-delà de 48,8°',
            ],
            correctAnswerIndex: 0,
            explanation: 'Air → eau correspond à n₁ < n₂ : pas de réflexion totale possible ! sin i₂ = sin 80° / 1,33 ≈ 0,740 ⇒ i₂ ≈ 47,8°.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Trouver n₂',
          stepTheme: 'Mesure par angle limite',
          stepTitle: 'Déduire un indice de réfraction à partir de L',
          paragraphText:
            'Si l’on mesure que l’angle limite de réfraction depuis l’air ($n_1 = 1$) vers un liquide vaut $L = 37^\\circ$ ($\\sin 37^\\circ \\approx 0{,}60$), on en déduit l’indice du liquide : $n_2 = \\frac{n_1}{\\sin L} = \\frac{1}{0{,}60} \\approx 1{,}67$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03_q5',
            type: 'mcq',
            prompt: 'De l’air ($n_1 = 1{,}00$) vers un bloc de cristal, l’angle limite de réfraction vaut $L = 30^\\circ$. Quel est l’indice de réfraction $n_2$ de ce cristal ?',
            options: ['2,00', '0,50', '1,50', '1,73'],
            correctAnswerIndex: 0,
            explanation: 'sin L = n₁ / n₂ ⇒ n₂ = n₁ / sin 30° = 1 / 0,5 = 2,00.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège fraction',
          stepTheme: 'sin L ≤ 1',
          stepTitle: 'Vérifier que sin L est toujours inférieur à 1',
          paragraphText:
            'Un sinus ne peut jamais dépasser $1$ : si ton calcul de $\\sin L$ donne $1{,}33$ ou $1{,}52$, tu as inversé le numérateur et le dénominateur ! Dans $\\sin L = \\frac{n_{\\text{petit}}}{n_{\\text{grand}}}$, le **plus petit indice** est toujours au numérateur.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p03_q6',
            type: 'mcq',
            prompt: 'Pour calculer l’angle limite $L$ entre deux milieux d’indices $n_a = 1{,}52$ et $n_b = 1{,}33$, quelle formule est mathématiquement et physiquement valide ?',
            options: [
              'sin L = 1,33 / 1,52 ≈ 0,875 ⇒ L ≈ 61,0°',
              'sin L = 1,52 / 1,33 ≈ 1,143',
              'sin L = 1,52 − 1,33 = 0,19',
              'cos L = 1,33 / 1,52',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le sinus vaut obligatoirement n_petit / n_grand ≤ 1, soit 1,33 / 1,52 ≈ 0,875 (L ≈ 61,0°).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Passage n₁ > n₂ et réflexion totale
    // ========================================================================
    {
      id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04',
      order: 4,
      title: 'Passage n₁ > n₂, réfraction limite et réflexion totale',
      summary:
        'Prévoir la réfraction (i₁ < L), la réfraction limite (i₁ = L) et la réflexion totale (i₁ > L) lorsque la lumière sort d’un milieu plus réfringent.',
      conceptExplanation:
        "Considérons maintenant un rayon qui se propage d’un milieu $1$ **plus réfringent** vers un milieu $2$ **moins réfringent** ($n_1 > n_2$, par exemple **eau $\\to$ air** ou **verre $\\to$ air**, p. 4–5).\n\n- **Écartement de la normale** : puisque $n_1 > n_2$, $\\sin i_2 = \\frac{n_1}{n_2}\\sin i_1 > \\sin i_1$, donc $i_2 > i_1$ : le rayon réfracté **s’écarte** de la normale.\n- **Angle limite d’incidence $L$ (réfraction limite)** : comme $i_2 > i_1$, c’est l’angle réfracté $i_2$ qui atteint le premier $90^\\circ$ ($\\sin i_2 = 1$). L’angle d’incidence correspondant est appelé **angle limite** $L$ tel que :\n  $$\\sin L = \\frac{n_2}{n_1}$$\n  *(ex. eau $1{,}33 \\to$ air $1{,}00$ : $L \\approx 48{,}8^\\circ$ ; verre $1{,}50 \\to$ air $1{,}00$ : $L \\approx 41{,}8^\\circ$)*.\n- **Les trois cas selon la valeur de $i_1$** (p. 4–5 et Exercice 3 p. 7) :\n  1. **$i_1 < L$ (Réfraction)** : il existe un rayon réfracté ($i_2 > i_1$) et un faible rayon réfléchi ($r_1 = i_1$).\n  2. **$i_1 = L$ (Réfraction limite)** : le rayon réfracté rase le dioptre en faisant $i_2 = 90^\\circ = \\frac{\\pi}{2}\\,\\mathrm{rad}$ avec la normale.\n  3. **$i_1 > L$ (Réflexion totale)** : l’équation $\\sin i_2 = \\frac{n_1}{n_2}\\sin i_1 > 1$ n’a **aucune solution** : le rayon ne sort pas dans le milieu 2, il est **intégralement réfléchi** dans le milieu 1 selon $r = i_1$.",
      keyRule:
        'Conditions de la réflexion totale : (1) le rayon doit passer d’un milieu PLUS réfringent vers un milieu MOINS réfringent (n₁ > n₂), ET (2) l’angle d’incidence doit dépasser l’angle limite : i₁ > L avec sin L = n₂ / n₁.',
      formulas: [
        {
          name: 'Angle limite pour la réflexion totale (quand n₁ > n₂)',
          formula: '\\sin L = \\frac{n_2}{n_1}',
          note: 'Pour eau (1,33) → air (1) : L ≈ 48,75° ; pour verre (1,52) → air (1) : L ≈ 41,1°',
        },
        {
          name: 'Trois régimes pour n₁ > n₂',
          formula: 'i_1 < L\\;(\\text{réfraction}),\\quad i_1 = L\\;(\\text{réfraction limite } i_2=90^\\circ),\\quad i_1 > L\\;(\\text{réflexion totale})',
          note: 'En réflexion totale, 100 % du flux incident est réfléchi selon r = i₁',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Les trois cas pour n₁ > n₂ (p. 4 & Exercice 3 p. 7)',
        caption: 'De gauche à droite : 1) i₁ < L (réfraction) ; 2) i₁ = L (réfraction limite i₂ = 90°) ; 3) i₁ > L (réflexion totale).',
        svgContent: `<svg viewBox="0 0 390 170" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-rt" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#dc2626"/>
    </marker>
    <marker id="arr-bt" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#2563eb"/>
    </marker>
  </defs>
  <!-- Panel 1: i1 < L -->
  <rect x="8" y="88" width="114" height="62" fill="#dbeafe" opacity="0.7"/>
  <line x1="8" y1="88" x2="122" y2="88" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="65" y1="22" x2="65" y2="146" stroke="#64748b" stroke-dasharray="4 3"/>
  <line x1="36" y1="142" x2="64" y2="90" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt)"/>
  <line x1="65" y1="88" x2="110" y2="42" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-rt)"/>
  <line x1="65" y1="88" x2="94" y2="142" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="3 2"/>
  <text x="14" y="34" font-size="10" fill="#475569">n₂ &lt; n₁</text>
  <text x="14" y="102" font-size="10" fill="#1e3a8a">n₁</text>
  <text x="28" y="164" font-size="10" font-weight="bold" fill="#1e293b">1. i₁ &lt; L (Réfraction)</text>
  <!-- Panel 2: i1 = L -->
  <rect x="138" y="88" width="114" height="62" fill="#dbeafe" opacity="0.7"/>
  <line x1="138" y1="88" x2="252" y2="88" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="195" y1="22" x2="195" y2="146" stroke="#64748b" stroke-dasharray="4 3"/>
  <line x1="154" y1="142" x2="194" y2="90" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-bt)"/>
  <line x1="195" y1="88" x2="250" y2="88" stroke="#dc2626" stroke-width="2.4" marker-end="url(#arr-rt)"/>
  <text x="199" y="81" font-size="9" font-weight="bold" fill="#dc2626">i₂=90°</text>
  <text x="144" y="34" font-size="10" fill="#475569">n₂ &lt; n₁</text>
  <text x="152" y="164" font-size="10" font-weight="bold" fill="#1e293b">2. i₁ = L (Limite)</text>
  <!-- Panel 3: i1 > L -->
  <rect x="268" y="88" width="114" height="62" fill="#dbeafe" opacity="0.7"/>
  <line x1="268" y1="88" x2="382" y2="88" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="325" y1="22" x2="325" y2="146" stroke="#64748b" stroke-dasharray="4 3"/>
  <line x1="274" y1="136" x2="324" y2="90" stroke="#2563eb" stroke-width="2.2" marker-end="url(#arr-bt)"/>
  <line x1="325" y1="88" x2="376" y2="136" stroke="#dc2626" stroke-width="2.4" marker-end="url(#arr-rt)"/>
  <text x="274" y="34" font-size="10" fill="#475569">n₂ &lt; n₁</text>
  <text x="272" y="164" font-size="10" font-weight="bold" fill="#dc2626">3. i₁ &gt; L (Réfl. totale)</text>
</svg>`,
      },
      workedExample: {
        title: 'Plongeur regardant vers la surface de l’eau',
        statement:
          'Une lampe étanche située au fond d’une piscine ($n_1 = 1{,}33$) émet des rayons vers la surface de l’air ($n_2 = 1{,}00$) sous trois incidences : a) $i_1 = 35^\\circ$ ; b) $i_1 = 48{,}75^\\circ$ ; c) $i_1 = 60^\\circ$. Préciser ce qui se produit dans chaque cas.',
        methodSteps: [
          '1) Vérifier la condition n₁ > n₂ : 1,33 > 1,00, donc la réflexion totale est possible.',
          '2) Calculer l’angle limite : sin L = n₂ / n₁ = 1,00 / 1,33 ⇒ L ≈ 48,75°.',
          '3) Cas (a) : 35° < 48,75° ⇒ réfraction dans l’air : sin i₂ = 1,33 × sin 35° ≈ 0,763 ⇒ i₂ ≈ 49,7°.',
          '4) Cas (b) : i₁ = L ⇒ réfraction limite : le rayon sort en rasant la surface (i₂ = 90°).',
          '5) Cas (c) : 60° > 48,75° ⇒ réflexion totale : aucun rayon ne sort dans l’air, tout est réfléchi à r = 60°.',
        ],
        conclusion: '(a) Réfraction à 49,7° ; (b) réfraction limite à 90° ; (c) réflexion totale à r = 60°.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Deux conditions',
          stepTheme: 'Réflexion totale',
          stepTitle: 'Quelles sont les deux conditions indispensables de la réflexion totale ?',
          paragraphText:
            'Pour observer une **réflexion totale**, il faut obligatoirement réunir deux conditions (p. 4) : 1) la lumière doit passer d’un milieu **plus réfringent** vers un milieu **moins réfringent** ($n_1 > n_2$) ; 2) l’angle d’incidence $i_1$ doit être strictement supérieur à l’angle limite ($i_1 > L$, avec $\\sin L = \\frac{n_2}{n_1}$).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04_q1',
            type: 'mcq',
            prompt: 'À quelles conditions se produit le phénomène de **réflexion totale** ?',
            options: [
              'n₁ > n₂ et i₁ > L (où sin L = n₂ / n₁)',
              'n₁ < n₂ et i₁ > L (où sin L = n₁ / n₂)',
              'n₁ > n₂ et i₁ < L',
              'Sous incidence normale (i₁ = 0°) quel que soit le milieu',
            ],
            correctAnswerIndex: 0,
            explanation: 'La réflexion totale exige de quitter un milieu plus réfringent (n₁ > n₂) sous un angle i₁ > L = arcsin(n₂/n₁).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Exercice 3 p. 7',
          stepTheme: 'Trois figures',
          stepTitle: 'Associer chaque figure (i₁ < L, i₁ = L, i₁ > L) au bon phénomène',
          paragraphText:
            'Lorsque $n_2 < n_1$ (Exercice 3 p. 7) : si $i_1 < i_{1\\ell}$, le rayon sort dans le milieu 2 (**réfraction**) ; si $i_1 = i_{1\\ell}$, il longe la surface (**réfraction limite**) ; si $i_1 > i_{1\\ell}$, il reste intégralement dans le milieu 1 (**réflexion totale**).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04_q2',
            type: 'mcq',
            prompt: 'Un rayon quitte un verre d’indice $n_1$ vers l’air ($n_2 < n_1$) sous un angle d’incidence exactement égal à l’angle limite $i_1 = L$. Comment repart le rayon ?',
            options: [
              'Il rase la surface de séparation dans l’air : i₂ = 90° (π/2 rad) (réfraction limite)',
              'Il repart perpendiculairement dans l’air : i₂ = 0°',
              'Il subit la réflexion totale sans aucun rayon à la surface',
              'Il ressort avec le même angle i₂ = L',
            ],
            correctAnswerIndex: 0,
            explanation: 'Par définition de l’angle limite L, n₁ sin L = n₂ sin 90° = n₂ : le rayon réfracté rase le dioptre à i₂ = 90° (p. 5).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Test du sinus',
          stepTheme: 'Diagnostic rapide',
          stepTitle: 'Reconnaître une réflexion totale par le calcul',
          paragraphText:
            'Si en appliquant $n_1 \\sin i_1 = n_2 \\sin i_2$, tu trouves $\\sin i_2 > 1$, ne panique pas devant l’erreur `Math ERROR` de ta calculatrice : cela prouve mathématiquement que $i_1 > L$ et qu’il y a **réflexion totale** !',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04_q3',
            type: 'mcq',
            prompt: 'Un rayon dans du verre ($n_1 = 1{,}50$) frappe le dioptre verre/air ($n_2 = 1{,}00$) sous $i_1 = 45^\\circ$. En calculant $\\sin i_2 = \\frac{1{,}50 \\sin 45^\\circ}{1{,}00}$, on obtient $\\approx 1{,}06 > 1$. Que conclure ?',
            options: [
              'Il y a réflexion totale : le rayon est réfléchi dans le verre avec r = 45°',
              'Le rayon traverse l’air avec i₂ = 90°',
              'Le rayon est absorbé par le verre',
              'L’angle de réfraction vaut i₂ = 45°',
            ],
            correctAnswerIndex: 0,
            explanation: 'Puisque sin i₂ = 1,06 > 1, il est impossible d’avoir réfraction (45° > L ≈ 41,8°) : le rayon subit la réflexion totale à r = 45°.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Prismes réflecteurs',
          stepTheme: 'Verre/Air 45°',
          stepTitle: 'Pourquoi un prisme à 45° en verre (n = 1,5) sert-il de miroir parfait ?',
          paragraphText:
            'Pour le verre ($n_1 = 1{,}50$) dans l’air ($n_2 = 1{,}00$), l’angle limite vaut $L = \\arcsin(1/1{,}50) \\approx 41{,}8^\\circ$. Toute incidence de $45^\\circ$ vérifie $45^\\circ > 41{,}8^\\circ$ : le prisme réfléchit donc $100\\,\\%$ de la lumière, mieux qu’un miroir métallique !',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04_q4',
            type: 'mcq',
            prompt: 'Un prisme en verre d’indice $n = 1{,}52$ est plongé dans l’air ($n = 1{,}00$). Quel est son angle limite verre $\\to$ air ?',
            options: ['≈ 41,1°', '≈ 48,8°', '≈ 65,8°', '≈ 24,4°'],
            correctAnswerIndex: 0,
            explanation: 'sin L = 1 / 1,52 ≈ 0,6579 ⇒ L = arcsin(0,6579) ≈ 41,1°.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Plongée en eau',
          stepTheme: 'Eau → Air',
          stepTitle: 'Calculer l’angle d’émergence quand i₁ < L',
          paragraphText:
            'Lorsqu’un rayon venant de l’eau ($n_1 = 1{,}33$) frappe la surface sous $i_1 = 30^\\circ < L \\approx 48{,}8^\\circ$, il se réfracte dans l’air ($n_2 = 1{,}00$) selon $\\sin i_2 = 1{,}33 \\sin 30^\\circ = 0{,}665 \\implies i_2 \\approx 41{,}7^\\circ$ ($i_2 > i_1$).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04_q5',
            type: 'mcq',
            prompt: 'Un rayon lumineux sort de l’eau ($n_1 = 1{,}33$) vers l’air ($n_2 = 1{,}00$) avec un angle d’incidence $i_1 = 30^\\circ$. Quel est l’angle de réfraction $i_2$ dans l’air ?',
            options: ['≈ 41,7°', '≈ 22,1°', '≈ 30,0°', 'Réflexion totale'],
            correctAnswerIndex: 0,
            explanation: '1,33 × sin 30° = 1,00 × sin i₂ ⇒ sin i₂ = 1,33 × 0,5 = 0,665 ⇒ i₂ = arcsin(0,665) ≈ 41,7°.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège diamant/eau',
          stepTheme: 'Eau vs Verre',
          stepTitle: 'L’angle limite dépend des DEUX milieux en contact',
          paragraphText:
            'Attention : l’angle limite d’un bloc de verre ($n_1 = 1{,}52$) n’est pas le même s’il est dans l’air ($n_2 = 1{,}00 \\implies L \\approx 41{,}1^\\circ$) que s’il est plongé dans l’eau ($n_2 = 1{,}33 \\implies \\sin L = 1{,}33/1{,}52 \\implies L \\approx 61{,}0^\\circ$) !',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p04_q6',
            type: 'mcq',
            prompt: 'On plonge entièrement un prisme de verre ($n_1 = 1{,}52$) dans l’eau ($n_2 = 1{,}33$) au lieu de le laisser dans l’air ($n_2 = 1{,}00$). Comment varie l’angle limite de réflexion totale ?',
            options: [
              'Il augmente (de ≈ 41,1° dans l’air à ≈ 61,0° dans l’eau)',
              'Il diminue (de ≈ 61,0° à ≈ 41,1°)',
              'Il reste identique car n₁ ne change pas',
              'Il devient nul',
            ],
            correctAnswerIndex: 0,
            explanation: 'sin L = n₂ / n₁ augmente quand n₂ passe de 1,00 à 1,33, donc l’angle limite L augmente.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Applications complexes : cuve à miroir et prisme
    // ========================================================================
    {
      id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05',
      order: 5,
      title: 'Systèmes optiques : cuve avec miroir et prisme en verre',
      summary:
        'Suivre pas à pas la marche d’un rayon dans une cuve d’eau à miroir plan (Situation p. 5–6) et à travers un prisme équilatéral (Exercice 5 p. 8–9).',
      conceptExplanation:
        "En épreuve, plusieurs réfractions et réflexions s’enchaînent sur un même trajet lumineux.\n\n- **1) Cuve d’eau avec miroir horizontal au fond (Situation p. 5–6)** :\n  - Un laser dans l’air ($n_1 = 1{,}00$, *le PDF p. 5 imprime par coquille `n1 = 1,33` mais utilise bien `1` dans le calcul !*) arrive sur l’eau ($n_2 = 1{,}33$) sous $i_1 = 60^\\circ$.\n  - **Entrée air $\\to$ eau** : $i_2 = \\arcsin(\\sin 60^\\circ / 1{,}33) \\approx 40{,}63^\\circ$ *(arrondi à $40^\\circ$ dans le PDF)*.\n  - **Réflexion au fond sur le miroir plan** : le miroir est parallèle à la surface libre, donc les normales sont parallèles ; par angles alternes-internes, l’incidence sur le miroir vaut $i_2$ et l’angle réfléchi vaut $i_3 = i_2 \\approx 40{,}63^\\circ$.\n  - **Sortie eau $\\to$ air** : par le principe du **retour inverse** (symétrie exacte), $n_1\\sin\\alpha = n_2\\sin i_3 = n_2\\sin i_2 = n_1\\sin i_1 \\implies \\alpha = i_1 = 60^\\circ$ *(le PDF trouve $58{,}74^\\circ$ uniquement parce qu’il a tronqué $40{,}63^\\circ$ à $40^\\circ$ !)*.\n- **2) Prisme équilatéral d’angle au sommet $A = 60^\\circ$ et d’indice $n = 1{,}52$ (Exercice 5 p. 8–9)** :\n  - Rayon incident dans l’air sous $\\theta_1 = 30^\\circ$ sur la face d’entrée : $\\theta_2 = \\arcsin(\\sin 30^\\circ / 1{,}52) \\approx 19{,}2^\\circ$.\n  - Dans le quadrilatère formé par les deux faces et les deux normales perpendiculaires aux faces, l’angle au croisement des normales vaut $180^\\circ - 60^\\circ = 120^\\circ$, donc dans le triangle interne l’angle d’incidence sur la face de sortie vaut exactement $r' = A - \\theta_2 = 60^\\circ - 19{,}2^\\circ = 40{,}8^\\circ$.\n  - Comme $40{,}8^\\circ < L_{\\text{verre/air}} \\approx 41{,}1^\\circ$, le rayon ressort dans l’air sous $\\theta_3 = \\arcsin(1{,}52\\sin 40{,}8^\\circ) \\approx 83{,}3^\\circ$ *(à ne pas confondre avec la coquille du PDF p. 9 qui avait substitué $30^\\circ$ dans la formule de sortie)*.",
      keyRule:
        'Cuve + miroir parallèle : le rayon ressort toujours dans l’air sous le même angle que l’incidence initiale (retour inverse). Dans un prisme d’angle au sommet A : les deux angles internes vérifient r + r′ = A.',
      formulas: [
        {
          name: 'Relation géométrique dans un prisme d’angle au sommet A',
          formula: 'r + r\' = A \\implies r\' = A - r',
          note: 'Pour un prisme équilatéral A = 60°, l’incidence r′ sur la deuxième face vaut 60° − θ₂',
        },
        {
          name: 'Principe de symétrie cuve horizontale + miroir horizontal',
          formula: '\\alpha_{\\text{sortie}} = i_1\\;(\\text{entrée})',
          note: 'Car la normale au miroir est parallèle à la normale à la surface de l’eau',
        },
      ],
      workedExample: {
        title: 'Marche d’un rayon dans un prisme équilatéral (Exercice 5 p. 8–9 corrigé)',
        statement:
          'Un rayon frappe la face d’entrée d’un prisme équilatéral ($A = 60^\\circ$) en verre ($n = 1{,}52$) dans l’air ($n_1 = 1$) sous un angle d’incidence $\\theta_1 = 30^\\circ$. Calculer l’angle de réfraction interne $\\theta_2$, l’angle d’incidence interne $r\'$ sur la deuxième face et l’angle d’émergence $\\theta_3$.',
        methodSteps: [
          '1) Face d’entrée : sin θ₂ = (1 × sin 30°) / 1,52 = 0,5 / 1,52 ≈ 0,3289 ⇒ θ₂ ≈ 19,2°.',
          '2) Géométrie du prisme : les normales aux deux faces font entre elles 120°, donc r′ = A − θ₂ = 60° − 19,2° = 40,8°.',
          '3) Vérification de non-réflexion totale : sin L = 1 / 1,52 ⇒ L ≈ 41,1°. Comme r′ = 40,8° < 41,1°, le rayon émerge bien dans l’air.',
          '4) Face de sortie : sin θ₃ = 1,52 × sin 40,8° ≈ 1,52 × 0,6534 ≈ 0,993 ⇒ θ₃ ≈ 83,3°.',
        ],
        conclusion: 'θ₂ ≈ 19,2° ; r′ ≈ 40,8° ; angle d’émergence dans l’air θ₃ ≈ 83,3°.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Cuve & Miroir',
          stepTheme: 'Situation p. 5–6',
          stepTitle: 'Angle d’émergence après réflexion sur le miroir au fond d’une cuve',
          paragraphText:
            'Dans la Situation d’évaluation (p. 5–6), le rayon entre dans l’eau ($n_2 = 1{,}33$) sous $i_1 = 60^\\circ$, se réfracte à $i_2 \\approx 40{,}63^\\circ$, se réfléchit sur le miroir horizontal du fond avec $i_3 = i_2$, puis retraverse l’interface eau/air. Sans erreur d’arrondi, il ressort dans l’air exactement à $60^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05_q1',
            type: 'mcq',
            prompt: 'Un rayon laser dans l’air ($n_1 = 1{,}00$) frappe la surface d’une cuve d’eau ($n_2 = 1{,}33$) sous $i_1 = 60^\\circ$, se réfléchit sur un miroir plan horizontal posé au fond, puis ressort dans l’air. Quel est exactement l’angle $\\alpha$ de sortie dans l’air ?',
            options: [
              '60° (identique à l’angle d’incidence initial par symétrie)',
              '40,6°',
              '30°',
              '90°',
            ],
            correctAnswerIndex: 0,
            explanation: 'n₁ sin α = n₂ sin i₃ = n₂ sin i₂ = n₁ sin i₁ ⇒ α = i₁ = 60° (l’écart 58,74° du PDF vient uniquement d’un arrondi intermédiaire à 40°).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Géométrie cuve',
          stepTheme: 'Normales parallèles',
          stepTitle: 'Pourquoi l’angle d’incidence sur le miroir du fond vaut-il i₂ ?',
          paragraphText:
            'La surface libre de l’eau et le miroir plan posé au fond de la cuve sont tous deux **horizontaux**. Leurs normales sont donc toutes deux verticales (parallèles), si bien que les angles formés par le rayon immergé avec ces normales sont **alternes-internes** et donc égaux à $i_2$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05_q2',
            type: 'mcq',
            prompt: 'Dans la cuve contenant un miroir plan horizontal au fond, le rayon pénètre dans l’eau avec un angle réfracté $i_2 = 40{,}6^\\circ$. Sous quel angle d’incidence frappe-t-il le miroir du fond et quel est son angle réfléchi $i_3$ ?',
            options: [
              '40,6° puis réfléchi à i₃ = 40,6°',
              '49,4° puis réfléchi à 49,4°',
              '60° puis réfléchi à 60°',
              '0° puis réfléchi à 0°',
            ],
            correctAnswerIndex: 0,
            explanation: 'La normale au miroir est parallèle à la normale à la surface de l’eau : angle d’incidence = i₂ = 40,6° et par réflexion i₃ = i₂ = 40,6°.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Prisme face 1',
          stepTheme: 'Exercice 5 p. 8–9',
          stepTitle: 'Angle de réfraction à l’entrée d’un prisme en verre',
          paragraphText:
            'Dans l’Exercice 5 (p. 8–9), un rayon dans l’air ($n_1 = 1$) frappe la face d’un prisme en verre ($n_2 = 1{,}52$) sous $\\theta_1 = 30^\\circ$. D’après Snell-Descartes, $\\sin\\theta_2 = \\frac{\\sin 30^\\circ}{1{,}52} = \\frac{0{,}5}{1{,}52} \\approx 0{,}3289 \\implies \\theta_2 \\approx 19{,}2^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05_q3',
            type: 'mcq',
            prompt: 'Un rayon dans l’air ($n_1 = 1{,}00$) frappe la face d’entrée d’un prisme en verre ($n = 1{,}52$) avec un angle d’incidence $\\theta_1 = 30^\\circ$. Que vaut l’angle réfracté $\\theta_2$ dans le verre ?',
            options: ['≈ 19,2°', '≈ 49,5°', '≈ 40,8°', '30,0°'],
            correctAnswerIndex: 0,
            explanation: 'sin θ₂ = sin 30° / 1,52 = 0,5 / 1,52 ≈ 0,3289 ⇒ θ₂ = arcsin(0,3289) ≈ 19,2°.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Prisme relation A',
          stepTheme: 'r′ = A − θ₂',
          stepTitle: 'Trouver l’angle d’incidence interne sur la 2e face du prisme',
          paragraphText:
            'Dans un prisme triangulaire dont l’angle au sommet vaut $A = 60^\\circ$, la somme des angles internes avec les deux normales vérifie toujours $\\theta_2 + r\' = A$. Donc si $\\theta_2 = 19{,}2^\\circ$, l’angle d’incidence sur la seconde face vaut $r\' = 60^\\circ - 19{,}2^\\circ = 40{,}8^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05_q4',
            type: 'mcq',
            prompt: 'Dans un prisme équilatéral ($A = 60^\\circ$), l’angle réfracté après la première face vaut $\\theta_2 = 19{,}2^\\circ$. Quel est l’angle d’incidence $r\'$ sur la deuxième face ?',
            options: ['40,8°', '19,2°', '79,2°', '30,0°'],
            correctAnswerIndex: 0,
            explanation: 'Les deux normales formant un angle de 180° − 60° = 120°, dans le triangle interne r′ = 60° − θ₂ = 60° − 19,2° = 40,8°.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Prisme sortie',
          stepTheme: 'Émergence dans l’air',
          stepTitle: 'Calculer l’angle d’émergence du prisme dans l’air',
          paragraphText:
            'Sur la deuxième face du prisme ($n = 1{,}52 \\to 1{,}00$), on applique Descartes–Snell avec l’incidence interne $r\' = 40{,}8^\\circ$ : $\\sin\\theta_3 = 1{,}52 \\times \\sin 40{,}8^\\circ \\approx 0{,}993 \\implies \\theta_3 \\approx 83{,}3^\\circ$ (très près du bord, car $40{,}8^\\circ$ frôle l’angle limite $41{,}1^\\circ$ !).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05_q5',
            type: 'mcq',
            prompt: 'Un rayon interne dans le prisme ($n = 1{,}52$) arrive sur la seconde face (vers l’air, $n_1 = 1{,}00$) sous l’incidence $r\' = 40{,}8^\\circ$. Quel est l’angle de réfraction $\\theta_3$ à son retour dans l’air ?',
            options: [
              '≈ 83,3° (car sin θ₃ = 1,52 × sin 40,8° ≈ 0,993)',
              '≈ 40,8°',
              '≈ 25,4°',
              'Réflexion totale',
            ],
            correctAnswerIndex: 0,
            explanation: 'n sin r′ = 1 · sin θ₃ ⇒ sin θ₃ = 1,52 × sin 40,8° ≈ 0,993 ⇒ θ₃ ≈ 83,3° (< 90°, pas de réflexion totale car 40,8° < 41,1°).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège erreur prisme',
          stepTheme: 'Ne pas réinjecter θ₁',
          stepTitle: 'Attention : l’incidence sur la 2e face n’est pas 30° ni θ₂',
          paragraphText:
            'En traversant un prisme, les deux faces ne sont **pas parallèles** (elles font un angle $A = 60^\\circ$). Il ne faut donc jamais remettre $\\theta_1$ ou $\\theta_2$ à la place de $r\' = A - \\theta_2$ dans la loi de sortie (l’angle $40{,}8^\\circ$ du PDF est d’ailleurs la valeur de $r\'$, pas de $\\theta_3$). Et vérifie toujours si $r\' > L$ (réflexion totale sur la 2e face !).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p05_q6',
            type: 'mcq',
            prompt: 'Que se passe-t-il si l’on diminue l’angle d’incidence $\\theta_1$ à l’entrée de ce même prisme ($A = 60^\\circ$, $n = 1{,}52$) jusqu’à $\\theta_1 = 20^\\circ$ ($\\theta_2 \\approx 13{,}0^\\circ$) ?',
            options: [
              'r′ = 47,0° dépasse L ≈ 41,1° : le rayon subit une réflexion totale sur la 2e face et n’en sort pas',
              'Le rayon ressort obligatoirement par la 2e face sous 20°',
              'Le rayon s’arrête au centre du prisme',
              'La réflexion totale est impossible en sortie d’un prisme dans l’air',
            ],
            correctAnswerIndex: 0,
            explanation: 'Si θ₁ = 20°, θ₂ ≈ 13,0° donc r′ = 60° − 13,0° = 47,0° > L ≈ 41,1° : sin θ₃ > 1, réflexion totale sur la 2e face !',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Dispersion de la lumière blanche et fibre optique
    // ========================================================================
    {
      id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06',
      order: 6,
      title: 'Dispersion de la lumière blanche et fibre optique',
      summary:
        'Expliquer la décomposition de la lumière blanche par un prisme (indice n dépendant de la couleur) et le guidage dans une fibre optique par réflexion totale.',
      conceptExplanation:
        "Les lois de la réfraction et de la réflexion totale expliquent deux phénomènes majeurs : la séparation des couleurs par le prisme et la transmission par fibre optique.\n\n- **Dispersion de la lumière blanche par un prisme** :\n  - La lumière blanche (soleil, lampe à incandescence) est **polychromatique** : c’est une superposition de radiations monochromatiques colorées (du rouge au violet).\n  - Dans le verre ou l’eau, l’indice de réfraction $n$ dépend légèrement de la couleur (milieu **dispersif**) : il est un peu plus grand pour le **violet** que pour le **rouge** ($n_{\\text{violet}} > n_{\\text{rouge}}$).\n  - D’après $n\\sin i_2 = n_1\\sin i_1$, le rayon **violet** est donc **plus dévié** que le rayon **rouge**, ce qui étale la lumière blanche en un spectre continu (arc-en-ciel).\n- **Fibre optique et applications industrielles (Documentation p. 10)** :\n  - Une fibre optique comporte un **cœur** transparent d’indice $n_1$ entouré d’une **gaine** d’indice inférieur ($n_2 < n_1$). Un rayon entrant sous incidence rasante sur la paroi cœur/gaine ($i > L = \\arcsin(n_2/n_1)$) est guidé sur des kilomètres par **réflexions totales successives** sans perte.\n  - **Domaines d’application (p. 10)** : télécommunications (réseaux urbains, interurbains et sous-marins), audiovisuel (TV câblée), médecine (**endoscopie** et **chirurgie laser** pour calculs rénaux, tumeurs ou rétine), éclairage décoratif (piscines, fontaines, enseignes), signalisation routière et **astronautique** (navigation des fusées et satellites).",
      keyRule:
        'Un prisme disperse la lumière blanche car l’indice du verre dépend de la couleur (violet plus dévié que le rouge). La fibre optique guide la lumière grâce à des réflexions totales successives dans un cœur (n₁) entouré d’une gaine (n₂ < n₁).',
      formulas: [
        {
          name: 'Condition de guidage dans une fibre optique (cœur n₁, gaine n₂)',
          formula: 'n_{\\text{cœur}} > n_{\\text{gaine}} \\quad\\text{et}\\quad i_{\\text{paroi}} > L = \\arcsin\\!\\left(\\frac{n_{\\text{gaine}}}{n_{\\text{cœur}}}\\right)',
          note: 'Permet les réflexions totales successives tout au long de la fibre même courbée',
        },
      ],
      workedExample: {
        title: 'Guidage d’un signal dans une fibre optique sous-marine',
        statement:
          'Une fibre optique de télécommunication possède un cœur en silice d’indice $n_1 = 1{,}48$ et une gaine d’indice $n_2 = 1{,}46$. Calculer l’angle limite $L$ à l’interface cœur/gaine et vérifier si un rayon frappant cette interface sous $i = 84^\\circ$ est guidé.',
        methodSteps: [
          '1) Vérifier la condition sur les indices : n₁ = 1,48 > n₂ = 1,46 (réflexion totale possible du cœur vers la gaine).',
          '2) Calculer L : sin L = n₂ / n₁ = 1,46 / 1,48 ≈ 0,9865 ⇒ L = arcsin(0,9865) ≈ 80,6°.',
          '3) Comparer i et L : i = 84° > 80,6° ⇒ le rayon subit la réflexion totale et reste confiné dans le cœur.',
        ],
        conclusion: 'L ≈ 80,6° : comme i = 84° > L, le rayon est guidé par réflexions totales successives.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Lumière blanche',
          stepTheme: 'Dispersion',
          stepTitle: 'Pourquoi un prisme décompose-t-il la lumière blanche ?',
          paragraphText:
            'La lumière blanche est **polychromatique** (composée de toutes les couleurs du spectre). Le verre est un milieu **dispersif** dont l’indice de réfraction $n$ varie avec la couleur ($n_{\\text{violet}} > n_{\\text{rouge}}$), ce qui sépare les radiations lors de la réfraction.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06_q1',
            type: 'mcq',
            prompt: 'À la sortie d’un prisme éclairé en lumière blanche, quelle radiation colorée est la plus déviée et pourquoi ?',
            options: [
              'La lumière violette, car l’indice de réfraction du verre est plus grand pour le violet que pour le rouge',
              'La lumière rouge, car sa vitesse dans le vide est plus faible',
              'Toutes les couleurs sont déviées exactement du même angle',
              'Uniquement la lumière verte grâce à la réflexion totale',
            ],
            correctAnswerIndex: 0,
            explanation: 'Dans un verre dispersif, n_violet > n_rouge : par la loi de Snell-Descartes, les courtes longueurs d’onde (violet) sont plus déviées que le rouge.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Fibre optique',
          stepTheme: 'Principe physique',
          stepTitle: 'Quel phénomène optique assure le guidage dans une fibre optique ?',
          paragraphText:
            'Une fibre optique transporte des impulsions lumineuses sur de longues distances en emprisonnant la lumière à l’intérieur d’un cœur transparent (indice $n_1$) entouré d’une gaine ($n_2 < n_1$) grâce à des **réflexions totales successives**.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06_q2',
            type: 'mcq',
            prompt: 'Sur quel phénomène optique repose le guidage de la lumière à l’intérieur d’une fibre optique ?',
            options: [
              'La réflexion totale sur l’interface entre un cœur d’indice n₁ et une gaine d’indice n₂ < n₁',
              'La dispersion polychromatique de la lumière blanche',
              'La réfraction limite vers l’extérieur de la gaine',
              'L’absorption sélective des rayons violets',
            ],
            correctAnswerIndex: 0,
            explanation: 'Pour rester guidé dans le cœur sans fuir dans la gaine, le rayon subit des réflexions totales successives (n_cœur > n_gaine).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Calcul fibre',
          stepTheme: 'Angle limite cœur/gaine',
          stepTitle: 'Vérifier la condition de guidage dans une fibre',
          paragraphText:
            'À l’interface cœur ($n_1$) / gaine ($n_2 < n_1$), l’angle limite vaut $\\sin L = \\frac{n_2}{n_1}$. Tout rayon atteignant la paroi sous une incidence $i > L$ reste parfaitement guidé dans le cœur.',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06_q3',
            type: 'mcq',
            prompt: 'Une fibre optique a un cœur d’indice $n_1 = 1{,}50$ et une gaine d’indice $n_2 = 1{,}40$. Quelle est la valeur approximative de l’angle limite $L$ à l’interface cœur/gaine ?',
            options: ['≈ 69,0°', '≈ 21,0°', '≈ 41,8°', '≈ 45,6°'],
            correctAnswerIndex: 0,
            explanation: 'sin L = n₂ / n₁ = 1,40 / 1,50 ≈ 0,9333 ⇒ L = arcsin(0,9333) ≈ 69,0°.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Télécoms & Médical',
          stepTheme: 'Documentation p. 10',
          stepTitle: 'Applications des fibres optiques en télécoms et en médecine',
          paragraphText:
            'D’après la documentation (p. 10), la fibre optique sert aux **télécommunications** (liaisons urbaines, interurbaines et sous-marines), à l’**audiovisuel** (TV câblée) et en **médecine** : en **endoscopie** (éclairer et transmettre des images de l’intérieur du corps) et en **chirurgie laser** (calculs rénaux, tumeurs, rétine).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06_q4',
            type: 'mcq',
            prompt: 'En médecine, comment la fibre optique intervient-elle selon la documentation du cours (p. 10) ?',
            options: [
              'En endoscopie pour éclairer et visualiser l’intérieur du corps, et associée au laser pour opérer (calculs rénaux, tumeurs, rétine)',
              'Uniquement pour réaliser des radiographies par rayons X',
              'Pour mesurer la masse osseuse par gravimétrie',
              'Pour disperser la lumière blanche en rayons gamma',
            ],
            correctAnswerIndex: 0,
            explanation: 'La documentation p. 10 précise son double usage médical : endoscopie (éclairage + image) et chirurgie laser.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Autres secteurs',
          stepTheme: 'Éclairage & Astronautique',
          stepTitle: 'Applications industrielles : éclairage, route, astronautique',
          paragraphText:
            'Outre les télécoms et la médecine, le document (p. 10) cite l’**éclairage** (piscines, bassins, fontaines, enseignes), la **signalisation routière** (ronds-points, séparation de voies) et l’**astronautique** (cœur des systèmes de navigation des fusées et satellites).',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06_q5',
            type: 'mcq',
            prompt: 'Dans quel domaine de pointe mentionné à la fin du cours (p. 10) développe-t-on la fibre optique pour les systèmes de navigation des fusées et satellites ?',
            options: [
              'L’astronautique',
              'La métallurgie lourde',
              'L’agriculture céréalière',
              'La distillation fractionnée du pétrole',
            ],
            correctAnswerIndex: 0,
            explanation: 'La documentation p. 10 souligne l’essor de la fibre optique en astronautique pour la navigation des fusées et satellites.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège fibre',
          stepTheme: 'Indice cœur vs gaine',
          stepTitle: 'Que se passerait-il si n_gaine > n_cœur ?',
          paragraphText:
            'Si l’indice de la gaine dépassait celui du cœur ($n_2 > n_1$), la condition de réflexion totale ne serait **jamais satisfaite** : à chaque rebond, une fraction de la lumière se réfracterait dans la gaine et s’échapperait hors de la fibre dès les premiers centimètres !',
          exercise: {
            id: 'premiere_c_physique_l03_reflexion_refraction_lumiere_p06_q6',
            type: 'mcq',
            prompt: 'Pourquoi la gaine d’une fibre optique doit-elle impérativement avoir un indice $n_2$ **inférieur** à l’indice $n_1$ du cœur ?',
            options: [
              'Parce que la réflexion totale n’est possible que lorsque la lumière tente de passer vers un milieu moins réfringent (n₂ < n₁)',
              'Parce qu’un indice plus faible bloque les réflexions et disperse les couleurs',
              'Parce que si n₂ > n₁, la lumière reculerait vers la source sous incidence normale',
              'Parce que la gaine doit absolument être métallique et opaque',
            ],
            correctAnswerIndex: 0,
            explanation: 'Sans la condition n₁ > n₂, aucune réflexion totale ne peut avoir lieu à l’interface cœur/gaine et le signal fuirait hors du cœur.',
          },
        },
      ],
    },
  ]),
};
