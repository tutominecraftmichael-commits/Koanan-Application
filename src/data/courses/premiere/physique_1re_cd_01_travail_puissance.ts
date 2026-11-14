import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « PC 1ère CD - P1 : Travail et puissance d'une force dans le cas d'un mouvement de translation » (format v2).
export const PHYSIQUE_1RE_CD_L01_TRAVAIL_PUISSANCE: CurriculumChapter = {
  id: 'premiere_c_physique_l01_travail_puissance_translation',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 1,
  title: 'Leçon 1 : Travail et puissance d’une force dans le cas d’un mouvement de translation',
  summary:
    'Travail d’une force constante sur un déplacement rectiligne ou quelconque, travail du poids, puissance moyenne et instantanée, travail de la tension d’un ressort et bilan énergétique sur un trajet complexe.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'PC 1ère CD - P1 : Travail et puissance dans le cas d’un mouvement de translation.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Travail d’une force constante sur un déplacement rectiligne
    // ========================================================================
    {
      id: 'premiere_c_physique_l01_travail_puissance_translation_p01',
      order: 1,
      title: 'Travail d’une force constante sur un déplacement rectiligne',
      summary:
        'Définir le travail d’une force constante comme le produit scalaire W = F.AB.cos(alpha), connaître son unité SI (joule) et qualifier un travail moteur, nul ou résistant.',
      conceptExplanation:
        "Lorsqu’un tracteur tire un camion hors d’un ravin (Situation d’apprentissage p. 1), l’effort fourni dépend de la force exercée et du déplacement.\n\n- **Force constante** : une force $\\vec{F}$ est dite constante si sa **norme** (intensité), sa **direction** et son **sens** restent invariants au cours du temps.\n- **Définition** : le travail $W_{AB}(\\vec{F})$ d’une force constante $\\vec{F}$ lors d’un déplacement rectiligne $\\overrightarrow{AB}$ de son point d’application est égal au produit scalaire de $\\vec{F}$ par $\\overrightarrow{AB}$ :\n  $$W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB} = F \\cdot AB \\cdot \\cos\\alpha$$\n  où $\\alpha = (\\widehat{\\vec{F}, \\overrightarrow{AB}})$ est l’angle entre le vecteur force et le vecteur déplacement.\n- **Unité SI** : le travail s’exprime en **joule** (symbole $\\mathrm{J}$), avec $1\\,\\mathrm{J} = 1\\,\\mathrm{N}\\cdot\\mathrm{m}$.\n- **Grandeur algébrique** :\n  - Si $0^\\circ \\le \\alpha < 90^\\circ$, $\\cos\\alpha > 0 \\implies W_{AB}(\\vec{F}) > 0$ : le travail est **moteur** (la force favorise le déplacement).\n  - Si $\\alpha = 90^\\circ$, $\\cos\\alpha = 0 \\implies W_{AB}(\\vec{F}) = 0$ : le travail est **nul** (force orthogonale au déplacement).\n  - Si $90^\\circ < \\alpha \\le 180^\\circ$, $\\cos\\alpha < 0 \\implies W_{AB}(\\vec{F}) < 0$ : le travail est **résistant** (la force s’oppose au déplacement).",
      keyRule:
        'W_AB(F) = F · AB · cos α est algébrique (en joules) : moteur si α < 90° (> 0), nul si α = 90° (= 0), résistant si 90° < α ≤ 180° (< 0).',
      formulas: [
        {
          name: 'Travail d’une force constante (déplacement rectiligne)',
          formula: 'W_{AB}(\\vec{F}) = \\vec{F}\\cdot\\overrightarrow{AB} = F \\cdot AB \\cdot \\cos\\alpha',
          note: 'F en N, AB en m, W en joule (J) ; α est l’angle entre F et le vecteur déplacement AB',
        },
        {
          name: 'Nature algébrique du travail',
          formula: 'W > 0\\;(\\text{moteur}),\\quad W = 0\\;(\\text{nul}),\\quad W < 0\\;(\\text{résistant})',
          note: 'Dépend du signe de cos α selon que α < 90°, α = 90° ou α > 90°',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Nature du travail selon l’orientation de la force par rapport à V',
        caption: 'Activité p. 2 : F₁ (α < 90°) fournit un travail moteur ; F₂ et F₄ (⊥ V) un travail nul ; F₃ (opposée à V) un travail résistant.',
        svgContent: `<svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb"/>
    </marker>
    <marker id="arr-red" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#dc2626"/>
    </marker>
    <marker id="arr-slate" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#475569"/>
    </marker>
    <marker id="arr-green" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#059669"/>
    </marker>
  </defs>
  <line x1="30" y1="105" x2="345" y2="105" stroke="#64748b" stroke-width="2" marker-end="url(#arr-slate)"/>
  <text x="18" y="109" font-size="11" fill="#475569">X'</text>
  <text x="352" y="109" font-size="11" fill="#475569">X</text>
  <rect x="150" y="90" width="44" height="30" rx="4" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.8"/>
  <circle cx="172" cy="105" r="2.5" fill="#1e293b"/>
  <!-- V -->
  <line x1="172" y1="78" x2="218" y2="78" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/>
  <text x="195" y="72" font-size="12" font-weight="bold" fill="#059669">V</text>
  <!-- F1 -->
  <line x1="172" y1="105" x2="275" y2="55" stroke="#2563eb" stroke-width="2.2" marker-end="url(#arr-blue)"/>
  <text x="278" y="54" font-size="12" font-weight="bold" fill="#2563eb">F₁ (moteur)</text>
  <path d="M 205 105 A 33 33 0 0 0 201 91" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="210" y="99" font-size="11" fill="#2563eb">α</text>
  <!-- F4 upward -->
  <line x1="172" y1="105" x2="172" y2="30" stroke="#475569" stroke-width="2" marker-end="url(#arr-slate)"/>
  <text x="178" y="34" font-size="11" font-weight="bold" fill="#475569">F₄ (nul)</text>
  <!-- F2 downward -->
  <line x1="172" y1="105" x2="172" y2="155" stroke="#475569" stroke-width="2" marker-end="url(#arr-slate)"/>
  <text x="178" y="154" font-size="11" font-weight="bold" fill="#475569">F₂ (nul)</text>
  <!-- F3 opposing -->
  <line x1="172" y1="105" x2="68" y2="105" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr-red)"/>
  <text x="58" y="92" font-size="11" font-weight="bold" fill="#dc2626">F₃ (résistant)</text>
</svg>`,
      },
      workedExample: {
        title: 'Calcul du travail d’une force inclinée sur un déplacement horizontal',
        statement:
          'Un ouvrier tire une caisse sur un sol horizontal sur une distance $AB = 12\\,\\mathrm{m}$ avec une force constante $F = 80\\,\\mathrm{N}$ faisant un angle $\\alpha = 30^\\circ$ avec la direction du mouvement.',
        methodSteps: [
          '1) Vérifier que la force est constante et le déplacement rectiligne de longueur AB = 12 m.',
          '2) Appliquer W_AB(F) = F · AB · cos α = 80 × 12 × cos(30°).',
          '3) Calculer : cos(30°) ≈ 0,866 ⇒ W_AB(F) ≈ 960 × 0,866 ≈ 831,4 J.',
        ],
        conclusion: 'W_AB(F) ≈ +831,4 J : le travail est positif donc moteur.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Force constante',
          stepTitle: 'Quand dit-on qu’une force est constante ?',
          paragraphText:
            'Une force $\\vec{F}$ est dite constante au cours du temps si ses trois caractéristiques vectorielles — norme (intensité), direction et sens — restent inchangées pendant le déplacement.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p01_q1',
            type: 'mcq',
            prompt: 'À quelle condition une force $\\vec{F}$ est-elle qualifiée de force constante ?',
            options: [
              'Sa norme, sa direction et son sens ne changent pas au cours du temps',
              'Sa norme varie proportionnellement à la vitesse du solide',
              'Son point d’application reste immobile pendant toute l’expérience',
              'Sa direction tourne régulièrement tout en gardant la même intensité',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Un vecteur force constant conserve la même direction, le même sens et la même norme (intensité) au cours du temps.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Formule clé',
          stepTheme: 'Produit scalaire',
          stepTitle: 'Expression du travail et unité dans le SI',
          paragraphText:
            'Sur un déplacement rectiligne $\\overrightarrow{AB}$, le travail d’une force constante $\\vec{F}$ vaut $W_{AB}(\\vec{F}) = \\vec{F}\\cdot\\overrightarrow{AB} = F\\cdot AB\\cos\\alpha$, avec $W$ exprimé en joule ($\\mathrm{J}$).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p01_q2',
            type: 'mcq',
            prompt: 'Quelle est l’expression exacte du travail d’une force constante $\\vec{F}$ sur un déplacement rectiligne $\\overrightarrow{AB}$ (avec $\\alpha = (\\widehat{\\vec{F}, \\overrightarrow{AB}})$) et son unité SI ?',
            options: [
              'W_AB(F) = F · AB · cos α, en joule (J)',
              'W_AB(F) = F · AB · sin α, en watt (W)',
              'W_AB(F) = F / AB · cos α, en newton (N)',
              'W_AB(F) = F · AB · tan α, en joule par seconde (J/s)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Par définition, le travail est le produit scalaire F · AB = F · AB · cos α et son unité SI est le joule (J).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Signe algébrique',
          stepTheme: 'Travail moteur, nul, résistant',
          stepTitle: 'Comment classer la nature du travail selon l’angle α ?',
          paragraphText:
            'Puisque $F > 0$ et $AB > 0$, le signe du travail est celui de $\\cos\\alpha$ : moteur si $\\alpha < 90^\\circ$ ($W > 0$), nul si $\\alpha = 90^\\circ$ ($W = 0$), et résistant si $90^\\circ < \\alpha \\le 180^\\circ$ ($W < 0$).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p01_q3',
            type: 'mcq',
            prompt: 'Lorsque l’angle $\\alpha = (\\widehat{\\vec{F}, \\overrightarrow{AB}})$ vérifie $90^\\circ < \\alpha < 180^\\circ$, comment qualifie-t-on le travail $W_{AB}(\\vec{F})$ ?',
            options: [
              'Résistant, car cos α < 0 donc W_AB(F) < 0',
              'Moteur, car la force accompagne le mouvement',
              'Nul, car le déplacement est plus petit que la force',
              'Toujours égal au produit F · AB',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Entre 90° et 180°, cos α est négatif : W_AB(F) < 0, la force s’oppose au déplacement et son travail est résistant.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Application PDF',
          stepTheme: 'Activité p. 2',
          stepTitle: 'Identifier la nature du travail des quatre forces',
          paragraphText:
            'Sur l’activité du cours (p. 2), un solide avance suivant $\\vec{V}$ : $\\vec{F}_1$ inclinée vers l’avant fournit un travail moteur ; $\\vec{F}_2$ et $\\vec{F}_4$ perpendiculaires à $\\vec{V}$ ont un travail nul ; $\\vec{F}_3$ opposée à $\\vec{V}$ fournit un travail résistant.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p01_q4',
            type: 'mcq',
            prompt: 'Un solide se déplace vers la droite suivant $\\vec{V}$. Une force verticale ascendante $\\vec{F}_4$ et une force horizontale vers la gauche $\\vec{F}_3$ agissent sur lui. Quelle est la nature de leurs travaux ?',
            options: [
              'Le travail de F₄ est nul et celui de F₃ est résistant',
              'Le travail de F₄ est moteur et celui de F₃ est nul',
              'Les travaux de F₄ et de F₃ sont tous deux moteurs',
              'Le travail de F₄ est résistant et celui de F₃ est moteur',
            ],
            correctAnswerIndex: 0,
            explanation:
              'F₄ est perpendiculaire au déplacement (α = 90° ⇒ W = 0). F₃ est opposée au déplacement (α = 180° ⇒ W = −F₃·AB < 0, travail résistant).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Calcul direct',
          stepTheme: 'Force motrice oblique',
          stepTitle: 'Calculer un travail avec cos α',
          paragraphText:
            'Pour calculer $W_{AB}(\\vec{F})$, repérer la norme $F$ (en $\\mathrm{N}$), la distance $AB$ (en $\\mathrm{m}$) et l’angle $\\alpha$ entre $\\vec{F}$ et $\\overrightarrow{AB}$, puis évaluer $F \\cdot AB \\cdot \\cos\\alpha$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p01_q5',
            type: 'mcq',
            prompt: 'Une force constante $F = 40\\,\\mathrm{N}$ tire un chariot sur $AB = 5\\,\\mathrm{m}$ en faisant un angle $\\alpha = 60^\\circ$ avec la trajectoire horizontale. Quel vaut $W_{AB}(\\vec{F})$ ?',
            options: ['+100 J', '+200 J', '+173,2 J', '-100 J'],
            correctAnswerIndex: 0,
            explanation:
              'W_AB(F) = F · AB · cos(60°) = 40 × 5 × 0,5 = +100 J.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège angle',
          stepTheme: 'Angle avec la verticale',
          stepTitle: 'Attention à quel angle est donné dans l’énoncé',
          paragraphText:
            'Dans la formule $F\\cdot AB\\cos\\alpha$, $\\alpha$ est toujours l’angle entre $\\vec{F}$ et le **vecteur déplacement** $\\overrightarrow{AB}$. Si l’énoncé donne l’angle $\\beta$ avec la **normale** à la trajectoire, l’angle avec $\\overrightarrow{AB}$ vaut $90^\\circ - \\beta$ (et $\\cos(90^\\circ - \\beta) = \\sin\\beta$).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p01_q6',
            type: 'mcq',
            prompt: 'Un câble tire un bloc horizontalement sur $10\\,\\mathrm{m}$ avec une force $F = 60\\,\\mathrm{N}$ faisant un angle de $30^\\circ$ **avec la verticale** vers l’avant. Quel est le travail de $\\vec{F}$ ?',
            options: ['+300 J', '+519,6 J', '+600 J', '0 J'],
            correctAnswerIndex: 0,
            explanation:
              'L’angle avec le déplacement horizontal est α = 90° − 30° = 60°. Donc W = 60 × 10 × cos(60°) = 600 × 0,5 = +300 J.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Travail du poids et déplacement quelconque
    // ========================================================================
    {
      id: 'premiere_c_physique_l01_travail_puissance_translation_p02',
      order: 2,
      title: 'Travail d’une force constante sur un trajet quelconque et travail du poids',
      summary:
        'Montrer que le travail d’une force constante ne dépend pas du chemin suivi et calculer le travail du poids W_AB(P) = mg(z_A - z_B).',
      conceptExplanation:
        "Que se passe-t-il si le trajet entre $A$ et $B$ n’est plus rectiligne (trajectoire courbe, ligne brisée) ?\n\n- **Invariance par rapport au chemin suivi** : en découpant un trajet quelconque entre $A$ et $B$ en déplacements élémentaires rectilignes $\\overrightarrow{\\delta\\ell}_i$, la somme vaut $\\sum \\vec{F}\\cdot\\overrightarrow{\\delta\\ell}_i = \\vec{F}\\cdot \\sum \\overrightarrow{\\delta\\ell}_i = \\vec{F}\\cdot\\overrightarrow{AB}$. Le travail d’une force constante **ne dépend pas du chemin suivi**, mais uniquement des positions de départ $A$ et d’arrivée $B$.\n- **Expression analytique dans un repère $(O,\\vec{i},\\vec{j},\\vec{k})$** : si $\\vec{F} = F_x\\vec{i}+F_y\\vec{j}+F_z\\vec{k}$ et $\\overrightarrow{AB} = (x_B-x_A)\\vec{i}+(y_B-y_A)\\vec{j}+(z_B-z_A)\\vec{k}$, alors :\n  $$W_{AB}(\\vec{F}) = F_x(x_B-x_A) + F_y(y_B-y_A) + F_z(z_B-z_A)$$\n  *(Remarque : le PDF p. 2 comporte une coquille $(x_A-x_B)\\vec{i}$ sur la ligne de définition de $\\overrightarrow{AB}$, corrigée à la ligne suivante en $(x_B-x_A)\\vec{i}$.)*\n- **Travail du poids** : dans un repère d’axe vertical $(Oz)$ **ascendant**, $\\vec{g} = -g\\vec{k}$ et $\\vec{P} = -mg\\vec{k}$ :\n  $$W_{AB}(\\vec{P}) = -mg\\vec{k} \\cdot [(x_B-x_A)\\vec{i} + (z_B-z_A)\\vec{k}] = mg(z_A - z_B)$$\n  - **À la descente** ($z_A > z_B$, dénivelé $h = z_A - z_B > 0$) : $W_{AB}(\\vec{P}) = +mgh > 0$ (**moteur**).\n  - **À la montée** ($z_B > z_A$, dénivelé $h = z_B - z_A > 0$) : $W_{AB}(\\vec{P}) = -mgh < 0$ (**résistant**).\n  - **Sur un trajet horizontal** ($z_A = z_B$) : $W_{AB}(\\vec{P}) = 0$.",
      keyRule:
        'Le travail d’une force constante ne dépend pas du chemin suivi : W_AB(F) = F · AB. Avec l’axe (Oz) ascendant, W_AB(P) = mg(z_A − z_B) (+mgh en descente, −mgh en montée).',
      formulas: [
        {
          name: 'Travail du poids (axe Oz ascendant)',
          formula: 'W_{AB}(\\vec{P}) = mg(z_A - z_B)',
          note: 'Vaut +mgh lors d’une descente de hauteur h, et −mgh lors d’une montée de hauteur h',
        },
        {
          name: 'Travail du poids d’un pendule (de θ à 0)',
          formula: 'W_{A\\to A_0}(\\vec{P}) = mg\\ell(1 - \\cos\\theta)',
          note: 'Pour un pendule de longueur ℓ abandonné d’un angle θ jusqu’à la verticale A₀',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Travail du poids entre A et B (axe Oz ascendant)',
        caption: 'Le travail W_AB(P) = mg(z_A − z_B) est indépendant de la courbe suivie entre A et B.',
        svgContent: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-b2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb"/>
    </marker>
    <marker id="arr-r2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#dc2626"/>
    </marker>
    <marker id="arr-k2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#1e293b"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="55" y1="165" x2="55" y2="18" stroke="#1e293b" stroke-width="2" marker-end="url(#arr-k2)"/>
  <line x1="55" y1="165" x2="310" y2="165" stroke="#1e293b" stroke-width="1.6" marker-end="url(#arr-k2)"/>
  <text x="42" y="24" font-size="12" font-weight="bold" fill="#1e293b">z</text>
  <text x="40" y="172" font-size="11" fill="#1e293b">O</text>
  <!-- Dashed altitudes -->
  <line x1="55" y1="42" x2="115" y2="42" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <text x="32" y="46" font-size="11" font-weight="bold" fill="#1e293b">z_A</text>
  <line x1="55" y1="128" x2="255" y2="128" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <text x="32" y="132" font-size="11" font-weight="bold" fill="#1e293b">z_B</text>
  <!-- Curved path A to B -->
  <path d="M 115 42 C 195 38, 240 72, 255 128" fill="none" stroke="#0f172a" stroke-width="2.2"/>
  <!-- Direct AB vector -->
  <line x1="115" y1="42" x2="255" y2="128" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arr-b2)"/>
  <text x="195" y="102" font-size="12" font-weight="bold" fill="#2563eb">AB</text>
  <!-- Points A and B -->
  <circle cx="115" cy="42" r="3.5" fill="#1e293b"/>
  <text x="118" y="34" font-size="12" font-weight="bold" fill="#1e293b">A</text>
  <circle cx="255" cy="128" r="3.5" fill="#1e293b"/>
  <text x="262" y="132" font-size="12" font-weight="bold" fill="#1e293b">B</text>
  <!-- Weight vector P -->
  <circle cx="211" cy="70" r="3.2" fill="#dc2626"/>
  <line x1="211" y1="70" x2="211" y2="125" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr-r2)"/>
  <text x="193" y="114" font-size="12" font-weight="bold" fill="#dc2626">P = mg</text>
  <!-- g vector -->
  <line x1="308" y1="45" x2="308" y2="95" stroke="#0284c7" stroke-width="2" marker-end="url(#arr-b2)"/>
  <text x="315" y="74" font-size="12" font-weight="bold" fill="#0284c7">g</text>
</svg>`,
      },
      workedExample: {
        title: 'Pendule simple (Exercice 2 p. 7)',
        statement:
          'Une bille de masse $m = 100\\,\\mathrm{g}$ fixée à un fil de longueur $\\ell = 40\\,\\mathrm{cm}$ est écartée d’un angle $\\theta = 60^\\circ$ (position $A$) puis lâchée jusqu’à la verticale $A_0$. On donne $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$. Calculer $W_{A\\to A_0}(\\vec{T})$ et $W_{A\\to A_0}(\\vec{P})$.',
        methodSteps: [
          '1) À chaque instant, la tension T du fil est radiale et orthogonale au déplacement circulaire élémentaire : W(T) = 0 J.',
          '2) Avec l’axe (Oz) ascendant d’origine O : z_A = −ℓ cos θ et z_{A₀} = −ℓ.',
          '3) Donc W(P) = mg(z_A − z_{A₀}) = mgℓ(1 − cos θ) = 0,1 × 10 × 0,4 × (1 − cos 60°) = 0,4 × 0,5 = +0,2 J.',
        ],
        conclusion: 'W(T) = 0 J et W(P) = +0,2 J (travail moteur lors de la descente).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Chemin suivi',
          stepTheme: 'Force constante',
          stepTitle: 'Le travail d’une force constante dépend-il du trajet ?',
          paragraphText:
            'Non : le travail d’une force constante $\\vec{F}$ entre deux points $A$ et $B$ ne dépend jamais du chemin suivi ; il vaut toujours $W_{AB}(\\vec{F}) = \\vec{F}\\cdot\\overrightarrow{AB}$, que le trajet soit rectiligne, brisé ou courbe.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p02_q1',
            type: 'mcq',
            prompt: 'De quoi dépend le travail d’une force constante $\\vec{F}$ entre deux positions $A$ et $B$ ?',
            options: [
              'Uniquement de la force et des positions de départ A et d’arrivée B',
              'De la longueur exacte de la courbe suivie entre A et B',
              'De la masse et de la vitesse maximale atteinte en route',
              'De la forme plus ou moins sinueuse du trajet',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Une force constante possède un travail égal au produit scalaire F · AB, indépendant du chemin intermédiaire suivi entre A et B.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Formule poids',
          stepTheme: 'Activité p. 2–3',
          stepTitle: 'Expression du travail du poids avec axe ascendant',
          paragraphText:
            'Lorsque l’axe vertical $(Oz)$ est orienté vers le haut (**ascendant**), le vecteur poids s’écrit $\\vec{P} = -mg\\vec{k}$ et le travail du poids entre $A(z_A)$ et $B(z_B)$ est $W_{AB}(\\vec{P}) = mg(z_A - z_B)$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p02_q2',
            type: 'mcq',
            prompt: 'L’axe des cotes $(Oz)$ étant orienté vers le haut (ascendant), quelle est l’expression exacte du travail du poids $\\vec{P}$ d’un solide se déplaçant de $A$ à $B$ ?',
            options: [
              'mg(z_A − z_B)',
              'mg(z_B − z_A)',
              'mg · AB',
              '−mg · AB',
            ],
            correctAnswerIndex: 0,
            explanation:
              'P = −mg k et AB_z = z_B − z_A, donc W_AB(P) = −mg(z_B − z_A) = mg(z_A − z_B) (Activité p. 2–3).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Produit scalaire',
          stepTheme: 'Exercice 1 p. 6',
          stepTitle: 'Calcul analytique dans un repère orthonormé',
          paragraphText:
            'Dans l’Exercice 1 (p. 6), $\\vec{F} = 200\\vec{i} - 100\\vec{j}$ se déplace de $A$ à $B$ ($\\overrightarrow{AB} = \\vec{i} + 2{,}5\\vec{j}$), puis $B\\to C$ ($2\\vec{i} - 1{,}5\\vec{j}$), puis $C\\to D$ ($\\vec{i} + \\vec{j}$). Comme $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD} = \\overrightarrow{AD} = 4\\vec{i}+2\\vec{j}$, la somme des travaux $-50 + 550 + 100 = 600\\,\\mathrm{J}$ égale directement $W_{AD}(\\vec{F}) = 200\\times 4 - 100\\times 2 = 600\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p02_q3',
            type: 'mcq',
            prompt: 'Une force constante vaut $\\vec{F} = 200\\vec{i} - 100\\vec{j}$ (en $\\mathrm{N}$) et le déplacement total vaut $\\overrightarrow{AD} = 4\\vec{i} + 2\\vec{j}$ (en $\\mathrm{m}$). Que vaut $W_{AD}(\\vec{F})$ ?',
            options: ['+600 J', '+1 000 J', '-600 J', '+200 J'],
            correctAnswerIndex: 0,
            explanation:
              'W_AD(F) = F_x·Δx + F_y·Δy = 200 × 4 + (−100) × 2 = 800 − 200 = +600 J (Exercice 1 p. 6).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Pendule simple',
          stepTheme: 'Exercice 2 p. 7',
          stepTitle: 'Travail du poids d’un pendule écarté d’un angle θ',
          paragraphText:
            'Lorsqu’un pendule de longueur $\\ell$ quitte un angle $\\theta$ pour revenir à la verticale $A_0$, l’altitude augmente de bas en haut donc le solide descend de $h = \\ell(1 - \\cos\\theta)$, d’où $W_{A\\to A_0}(\\vec{P}) = +mg\\ell(1 - \\cos\\theta)$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p02_q4',
            type: 'mcq',
            prompt: 'Une bille ($m = 100\\,\\mathrm{g}$) au bout d’un fil de longueur $\\ell = 40\\,\\mathrm{cm}$ est lâchée sans vitesse depuis $\\theta = 60^\\circ$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$). Quel est le travail de son poids jusqu’à la verticale $A_0$ ?',
            options: ['+0,2 J', '+0,4 J', '-0,2 J', '0 J'],
            correctAnswerIndex: 0,
            explanation:
              'W(P) = mgℓ(1 − cos 60°) = 0,1 × 10 × 0,4 × (1 − 0,5) = +0,2 J (Exercice 2 p. 7).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Tension du fil',
          stepTheme: 'Force centrale / orthogonale',
          stepTitle: 'Pourquoi la tension du fil ne travaille-t-elle pas ?',
          paragraphText:
            'Sur un arc de cercle, la tension $\\vec{T}$ du fil est portée par le rayon tandis que le vecteur vitesse (et le déplacement élémentaire) est tangent au cercle : $\\vec{T} \\perp \\overrightarrow{\\delta\\ell}$ à chaque instant, donc $W(\\vec{T}) = 0\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p02_q5',
            type: 'mcq',
            prompt: 'Que vaut le travail de la tension $\\vec{T}$ du fil d’un pendule lors du mouvement circulaire de $A$ vers $A_0$ ?',
            options: [
              '0 J, car T est constamment orthogonale au déplacement élémentaire tangentiel',
              'mgℓ cos θ, car T s’oppose au poids',
              '−mgℓ(1 − cos θ), car T retient la bille',
              'T · ℓ · θ, où θ est en radians',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Bien que la direction de T varie, T reste à tout instant perpendiculaire à la trajectoire circulaire, donc son travail élémentaire δW = T · δℓ = 0.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège signe Δz',
          stepTheme: 'Montée vs descente',
          stepTitle: 'Ne jamais confondre Δz = z_B − z_A et z_A − z_B',
          paragraphText:
            'Le PDF p. 2 écrit $W_{AB}(\\vec{P}) = mg(z_A - z_B)$ puis $mg\\Delta z$ : attention, si l’on définit $\\Delta z = z_B - z_A$ (variation d’altitude), alors $W_{AB}(\\vec{P}) = -mg\\Delta z$. Retiens la règle physique infaillible : **descente $\\Rightarrow +mgh$, montée $\\Rightarrow -mgh$**.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p02_q6',
            type: 'mcq',
            prompt: 'Un solide de masse $m = 5\\,\\mathrm{kg}$ est élevé du sol ($z_A = 0\\,\\mathrm{m}$) à un plateau ($z_B = 4\\,\\mathrm{m}$) avec $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$. Quel est le travail de son poids $\\vec{P}$ ?',
            options: ['-200 J', '+200 J', '+20 J', '0 J'],
            correctAnswerIndex: 0,
            explanation:
              'Le solide monte (z_B > z_A), donc le poids s’oppose au mouvement : W_AB(P) = mg(z_A − z_B) = 5 × 10 × (0 − 4) = −200 J.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Puissance moyenne et puissance instantanée
    // ========================================================================
    {
      id: 'premiere_c_physique_l01_travail_puissance_translation_p03',
      order: 3,
      title: 'Puissance moyenne et puissance instantanée d’une force',
      summary:
        'Distinguer le travail (énergie échangée) de la puissance (débit d’énergie), calculer P_m = W/Δt et p = F · v en watts.',
      conceptExplanation:
        "Deux personnes qui montent la même caisse en haut d’un escalier effectuent le **même travail**, mais celle qui monte en courant développe une **plus grande puissance** parce qu’elle met moins de temps (Documentation p. 11).\n\n- **Puissance moyenne** : si une force $\\vec{F}$ effectue un travail $W(\\vec{F})$ pendant une durée $\\Delta t$, sa puissance moyenne est :\n  $$P_m = \\frac{W(\\vec{F})}{\\Delta t}$$\n  - **Unité SI** : le **watt** (symbole $\\mathrm{W}$), avec $1\\,\\mathrm{W} = 1\\,\\mathrm{J}\\cdot\\mathrm{s}^{-1} = 1\\,\\mathrm{kg}\\cdot\\mathrm{m}^2\\cdot\\mathrm{s}^{-3}$.\n- **Puissance instantanée** : pour un déplacement élémentaire $\\overrightarrow{\\delta\\ell}$ effectué pendant un intervalle de temps très bref $\\delta t$, on a $\\vec{v} = \\frac{\\overrightarrow{\\delta\\ell}}{\\delta t}$, d’où :\n  $$p = \\frac{\\delta W}{\\delta t} = \\vec{F}\\cdot\\frac{\\overrightarrow{\\delta\\ell}}{\\delta t} = \\vec{F}\\cdot\\vec{v} = F \\cdot v \\cdot \\cos(\\widehat{\\vec{F},\\vec{v}})$$\n- **Précision sur l’Activité p. 3 (grue)** : l’énoncé demande le travail et la puissance du *poids* alors que le corrigé calcule ceux de la *force motrice* $\\vec{F}$ ($F = 1\\,000\\,\\mathrm{N}$, $\\Delta z = 30\\,\\mathrm{m}$, $\\Delta t = 50\\,\\mathrm{s}$). Pour la force motrice vers le haut : $W(\\vec{F}) = +30\\,000\\,\\mathrm{J}$ et $P_m(\\vec{F}) = +600\\,\\mathrm{W}$. Si la montée est à vitesse constante ($P = F$), le poids fournit $W(\\vec{P}) = -30\\,000\\,\\mathrm{J}$ et $P_m(\\vec{P}) = -600\\,\\mathrm{W}$.",
      keyRule:
        'P_m = W(F) / Δt et p = F · v = F · v · cos α (en watts, W = J/s). Toujours convertir v en m/s (diviser km/h par 3,6).',
      formulas: [
        {
          name: 'Puissance moyenne',
          formula: 'P_m = \\frac{W(\\vec{F})}{\\Delta t}',
          note: 'W en J, Δt en s, P_m en watt (W)',
        },
        {
          name: 'Puissance instantanée',
          formula: 'p = \\vec{F}\\cdot\\vec{v} = F\\cdot v\\cdot\\cos(\\widehat{\\vec{F},\\vec{v}})',
          note: 'v en m/s (rappel : 1 m/s = 3,6 km/h)',
        },
      ],
      workedExample: {
        title: 'Puissance développée sur le trajet AB du wagonnet (Exercice 4 p. 8–9)',
        statement:
          'Sur une voie horizontale, un ouvrier tire un wagonnet à vitesse constante $v = 54\\,\\mathrm{km}\\cdot\\mathrm{h}^{-1}$ avec une force horizontale $\\vec{F}$ de valeur $F = 50\\,\\mathrm{N}$ dans le sens du mouvement.',
        methodSteps: [
          '1) Convertir la vitesse en unités SI : v = 54 / 3,6 = 15 m/s.',
          '2) La force F est colinéaire et de même sens que v (α = 0°, cos 0° = 1).',
          '3) Calculer p = F · v = 50 × 15 = 750 W.',
        ],
        conclusion: 'La puissance développée par la force F vaut 750 W (et sur AB = 150 m en Δt = 10 s, W = 7 500 J et P_m = 7 500 / 10 = 750 W).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Puissance moyenne',
          stepTheme: 'Débit d’énergie',
          stepTitle: 'Relation entre travail, durée et puissance moyenne',
          paragraphText:
            'La puissance moyenne mesure la rapidité avec laquelle un travail est fourni : elle est définie par le quotient $P_m = \\frac{W(\\vec{F})}{\\Delta t}$, exprimé en **watt** ($\\mathrm{W}$), équivalent à $1\\,\\mathrm{J}\\cdot\\mathrm{s}^{-1}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p03_q1',
            type: 'mcq',
            prompt: 'Une force fournit un travail $W = 12\\,000\\,\\mathrm{J}$ pendant une durée $\\Delta t = 40\\,\\mathrm{s}$. Quelle est sa puissance moyenne ?',
            options: ['300 W', '480 000 W', '0,0033 W', '300 J'],
            correctAnswerIndex: 0,
            explanation: 'P_m = W / Δt = 12 000 / 40 = 300 W (en watts).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Instantanée',
          stepTheme: 'Produit scalaire F·v',
          stepTitle: 'Comment exprime-t-on la puissance instantanée p ?',
          paragraphText:
            'En divisant le travail élémentaire $\\delta W = \\vec{F}\\cdot\\overrightarrow{\\delta\\ell}$ par l’intervalle bref $\\delta t$, on obtient la puissance instantanée $p = \\vec{F}\\cdot\\vec{v} = F\\cdot v\\cdot\\cos(\\widehat{\\vec{F},\\vec{v}})$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p03_q2',
            type: 'mcq',
            prompt: 'Quelle formule exprime la puissance instantanée $p$ d’une force $\\vec{F}$ appliquée à un point animé d’une vitesse $\\vec{v}$ ?',
            options: [
              'p = F · v = F · v · cos α',
              'p = F / v',
              'p = (1/2) · F · v²',
              'p = F · v · Δt',
            ],
            correctAnswerIndex: 0,
            explanation: 'p = δW/δt = F · (δℓ/δt) = F · v = F · v · cos α.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Activité grue',
          stepTheme: 'Force motrice vs poids',
          stepTitle: 'Distinguer la puissance de la force motrice et celle du poids',
          paragraphText:
            'Une grue applique une force verticale ascendante $F = 1\\,000\\,\\mathrm{N}$ pour élever une charge de $\\Delta z = 30\\,\\mathrm{m}$ en $\\Delta t = 50\\,\\mathrm{s}$ : la force motrice accomplit $W(\\vec{F}) = +30\\,000\\,\\mathrm{J}$ soit $P_m(\\vec{F}) = 600\\,\\mathrm{W}$ ; à vitesse constante ($P = F$), le poids effectue un travail résistant $W(\\vec{P}) = -30\\,000\\,\\mathrm{J}$ soit $P_m(\\vec{P}) = -600\\,\\mathrm{W}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p03_q3',
            type: 'mcq',
            prompt: 'Une grue déploie une force ascendante constante $F = 1\\,000\\,\\mathrm{N}$ pour soulever une charge de $\\Delta z = 30\\,\\mathrm{m}$ en $\\Delta t = 50\\,\\mathrm{s}$. Que valent le travail et la puissance moyenne de cette force $\\vec{F}$ ?',
            options: [
              'W(F) = 30 000 J et P_m(F) = 600 W',
              'W(F) = 30 000 J et P_m(F) = 1 500 000 W',
              'W(F) = 1 000 J et P_m(F) = 20 W',
              'W(F) = −30 000 J et P_m(F) = 600 W',
            ],
            correctAnswerIndex: 0,
            explanation: 'W(F) = F · Δz = 1 000 × 30 = 30 000 J, et P_m = 30 000 / 50 = 600 W (Activité p. 3).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Conversion km/h',
          stepTheme: 'Vitesse en m/s',
          stepTitle: 'Convertir km/h en m/s avant d’appliquer p = F·v',
          paragraphText:
            'Pour obtenir une puissance en watts ($\\mathrm{W}$), la vitesse doit obligatoirement être exprimée en $\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ en divisant la valeur en $\\mathrm{km}\\cdot\\mathrm{h}^{-1}$ par $3{,}6$ (ex. $54\\,\\mathrm{km/h} = 15\\,\\mathrm{m/s}$, $72\\,\\mathrm{km/h} = 20\\,\\mathrm{m/s}$).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p03_q4',
            type: 'mcq',
            prompt: 'Un moteur exerce une force de traction horizontale $F = 50\\,\\mathrm{N}$ dans le sens du mouvement sur un wagonnet roulant à $v = 54\\,\\mathrm{km}\\cdot\\mathrm{h}^{-1}$. Quelle puissance développe-t-il ?',
            options: ['750 W', '2 700 W', '208,3 W', '7 500 W'],
            correctAnswerIndex: 0,
            explanation: 'v = 54 / 3,6 = 15 m/s ⇒ p = F · v = 50 × 15 = 750 W (Exercice 4 p. 9).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Culture scientifique',
          stepTheme: 'Travail vs Puissance',
          stepTitle: 'Même travail ne signifie pas même puissance',
          paragraphText:
            'Comme l’illustre la documentation (p. 11), brûler $1\\,\\mathrm{kg}$ de charbon libère plus d’énergie ($15\\text{ à }30\\,\\mathrm{MJ}$) que $1\\,\\mathrm{kg}$ de TNT ($4{,}7\\,\\mathrm{MJ}$), mais l’explosion du TNT est quasi instantanée : sa **puissance** est donc immensément supérieure.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p03_q5',
            type: 'mcq',
            prompt: 'Deux étudiants portent chacun le même carton de masse $20\\,\\mathrm{kg}$ au 2e étage. Le premier met $25\\,\\mathrm{s}$ en marchant, le second met $10\\,\\mathrm{s}$ en courant. Quelle affirmation est exacte ?',
            options: [
              'Ils fournissent le même travail contre la pesanteur, mais le second développe une plus grande puissance',
              'Le second fournit plus de travail et la même puissance',
              'Le premier développe une plus grande puissance car il dure plus longtemps',
              'Leurs deux puissances moyennes sont rigoureusement égales',
            ],
            correctAnswerIndex: 0,
            explanation: 'La hauteur h étant identique, W = mgh est le même. Comme P_m = W / Δt et Δt₂ < Δt₁, le second développe une puissance plus élevée.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Unité SI',
          stepTheme: 'Analyse dimensionnelle',
          stepTitle: 'Équivalent du watt en unités de base du SI',
          paragraphText:
            'Puisque $1\\,\\mathrm{N} = 1\\,\\mathrm{kg}\\cdot\\mathrm{m}\\cdot\\mathrm{s}^{-2}$, on a $1\\,\\mathrm{J} = 1\\,\\mathrm{kg}\\cdot\\mathrm{m}^2\\cdot\\mathrm{s}^{-2}$ et donc $1\\,\\mathrm{W} = 1\\,\\mathrm{J}\\cdot\\mathrm{s}^{-1} = 1\\,\\mathrm{kg}\\cdot\\mathrm{m}^2\\cdot\\mathrm{s}^{-3}$. Ne confonds pas joule (énergie/travail) et watt (puissance).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p03_q6',
            type: 'mcq',
            prompt: 'Parmi ces écritures, laquelle correspond à l’unité du watt ($\\mathrm{W}$) dans le système international ?',
            options: ['J·s⁻¹ (ou kg·m²·s⁻³)', 'N·m (ou kg·m²·s⁻²)', 'N·s⁻¹', 'J·s'],
            correctAnswerIndex: 0,
            explanation: 'Le watt est un joule par seconde : 1 W = 1 J·s⁻¹ = 1 kg·m²·s⁻³ (Documentation p. 11).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Travail de la tension d’un ressort
    // ========================================================================
    {
      id: 'premiere_c_physique_l01_travail_puissance_translation_p04',
      order: 4,
      title: 'Travail de la tension d’un ressort (force non constante)',
      summary:
        'Utiliser la loi T = kx, déterminer graphiquement le travail par la méthode des trapèzes et appliquer W(T) = -1/2 k(x2² - x1²).',
      conceptExplanation:
        "Contrairement au poids, la tension d’un ressort n’est **pas constante** : son intensité augmente avec l’allongement.\n\n- **Tension d’un ressort (force de rappel)** : un solide fixé à un ressort de raideur $k$ (en $\\mathrm{N}\\cdot\\mathrm{m}^{-1}$) sur un plan horizontal sans frottement subit lors d’un allongement $\\overrightarrow{M_0M} = x\\,\\vec{i}$ une force de rappel $\\vec{T} = -kx\\,\\vec{i}$, équilibrée à l’arrêt par l’opérateur $\\vec{F} = +kx\\,\\vec{i}$, soit :\n  $$T = F = k \\cdot x$$\n- **Travail élémentaire et méthode graphique** : sur un tout petit déplacement $\\delta x$, la force peut être considérée constante : $\\delta W(\\vec{F}) = kx\\,\\delta x$ (aire du rectangle élémentaire, soit $\\delta W'(\\vec{T}) = -kx\\,\\delta x$).\n  En additionnant de $0$ à $x$, la somme des trapèzes correspond à l’**aire du triangle rectangle** de base $x$ et de hauteur $kx$ :\n  $$W_{OM}(\\vec{F}) = +\\frac{1}{2}kx^2 \\quad\\text{et}\\quad W_{OM}(\\vec{T}) = -\\frac{1}{2}kx^2$$\n- **Cas général entre deux allongements $x_1$ et $x_2$** :\n  $$W_{1\\to 2}(\\vec{T}) = -\\frac{1}{2}k\\left(x_2^2 - x_1^2\\right)$$\n  - Lorsqu’on **étire** le ressort ($|x_2| > |x_1|$), le travail de $\\vec{T}$ est **résistant** ($< 0$).\n  - Lorsqu’on **lâche** le ressort vers sa position d’équilibre ($|x_2| < |x_1|$), le travail de $\\vec{T}$ est **moteur** ($> 0$).",
      keyRule:
        'La tension T = −kx ī varie linéairement avec x : le travail de la tension entre x₁ et x₂ vaut W(T) = −(1/2)·k·(x₂² − x₁²), avec x₁ et x₂ en mètres.',
      formulas: [
        {
          name: 'Tension d’un ressort (force de rappel)',
          formula: '\\vec{T} = -kx\\,\\vec{i} \\implies T = k\\,x',
          note: 'k : constante de raideur en N/m ; x : allongement (ou raccourcissement) en m',
        },
        {
          name: 'Travail de la tension entre x₁ et x₂',
          formula: 'W_{1\\to 2}(\\vec{T}) = -\\frac{1}{2}k\\left(x_2^2 - x_1^2\\right)',
          note: 'Depuis le repos (x₁ = 0) jusqu’à x : W(T) = −(1/2)kx² ; travail de l’opérateur quasi-statique : W(F) = −W(T)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Travail élémentaire et aire du triangle F = kx (p. 4)',
        caption: 'La somme des aires δW = kx·δx entre 0 et x vaut l’aire du triangle OMP : W(F) = ½·x·(kx) = ½kx².',
        svgContent: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-k4" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#1e293b"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="50" y1="145" x2="320" y2="145" stroke="#1e293b" stroke-width="2" marker-end="url(#arr-k4)"/>
  <line x1="50" y1="145" x2="50" y2="18" stroke="#1e293b" stroke-width="2" marker-end="url(#arr-k4)"/>
  <text x="325" y="149" font-size="12" font-weight="bold" fill="#1e293b">x</text>
  <text x="34" y="24" font-size="12" font-weight="bold" fill="#1e293b">F</text>
  <text x="38" y="159" font-size="11" fill="#1e293b">O</text>
  <!-- Triangle OMP shaded lightly -->
  <polygon points="50,145 270,145 270,35" fill="#dbeafe" opacity="0.65"/>
  <!-- Elementary strip -->
  <rect x="150" y="95" width="24" height="50" fill="#2563eb" opacity="0.35" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="153" y="160" font-size="11" font-weight="bold" fill="#1d4ed8">δx</text>
  <!-- Line F = kx -->
  <line x1="50" y1="145" x2="290" y2="25" stroke="#2563eb" stroke-width="2.5"/>
  <text x="108" y="64" font-size="12" font-weight="bold" fill="#2563eb">F = kx</text>
  <!-- Point P and M -->
  <line x1="270" y1="35" x2="270" y2="145" stroke="#475569" stroke-dasharray="4 3"/>
  <line x1="50" y1="35" x2="270" y2="35" stroke="#475569" stroke-dasharray="4 3"/>
  <text x="20" y="39" font-size="11" font-weight="bold" fill="#1e293b">kx</text>
  <text x="266" y="160" font-size="11" font-weight="bold" fill="#1e293b">x (M)</text>
  <circle cx="270" cy="35" r="3" fill="#1e293b"/>
  <text x="275" y="33" font-size="11" font-weight="bold" fill="#1e293b">P</text>
  <text x="195" y="128" font-size="11" font-weight="bold" fill="#1e3a8a">Aire = ½kx²</text>
</svg>`,
      },
      workedExample: {
        title: 'Allongement progressif d’un ressort (Activité p. 5)',
        statement:
          'Un ressort horizontal de raideur $k = 25\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$ est étiré : 1) de sa position d’équilibre ($x_1 = 0$) jusqu’à $x_2 = 8\\,\\mathrm{cm}$ ; 2) de $x_1 = 3\\,\\mathrm{cm}$ jusqu’à $x_2 = 8\\,\\mathrm{cm}$. Calculer $W(\\vec{T})$ puis $W(\\vec{F}_{\\text{op}})$ pour le cas 1.',
        methodSteps: [
          '1) Convertir les longueurs en mètres : 8 cm = 0,08 m ; 3 cm = 0,03 m.',
          '2) Cas 1 : W(T) = −(1/2) × 25 × (0,08² − 0) = −12,5 × 0,0064 = −0,08 J = −8·10⁻² J.',
          '3) Cas 2 : W(T) = −(1/2) × 25 × (0,08² − 0,03²) = −12,5 × (0,0064 − 0,0009) = −0,06875 J ≈ −6,9·10⁻² J.',
          '4) Pour l’opérateur (cas 1) : W(F_op) = −W(T) = +8·10⁻² J.',
        ],
        conclusion: 'W₁(T) = −8·10⁻² J ; W₂(T) ≈ −6,9·10⁻² J ; W(F_op) = +8·10⁻² J.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Force de rappel',
          stepTheme: 'Loi de Hooke',
          stepTitle: 'Expression vectorielle de la tension d’un ressort',
          paragraphText:
            'Lorsqu’on étire un ressort de raideur $k$ d’une longueur $x$ à partir de sa position d’équilibre $M_0$ suivant $\\vec{i}$, il exerce sur le solide une force de rappel dirigée en sens inverse : $\\vec{T} = -kx\\,\\vec{i}$ (de valeur $T = kx$).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p04_q1',
            type: 'mcq',
            prompt: 'Un ressort horizontal de raideur $k = 50\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$ est étiré de $x = 4\\,\\mathrm{cm}$. Quelle est l’intensité $T$ de la tension du ressort ?',
            options: ['2 N', '200 N', '12,5 N', '0,8 N'],
            correctAnswerIndex: 0,
            explanation: 'T = k · x avec x = 4 cm = 0,04 m ⇒ T = 50 × 0,04 = 2 N.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Aire du graphe',
          stepTheme: 'Travail élémentaire',
          stepTitle: 'Pourquoi obtient-on le facteur 1/2 dans le travail du ressort ?',
          paragraphText:
            'Parce que la force $F = kx$ n’est pas constante ! On ne peut pas multiplier directement $kx$ par $x$ : le travail $\\sum kx\\,\\delta x$ est égal à l’aire du triangle rectangle sous la droite $F = kx$, soit $\\frac{1}{2}\\times x \\times (kx) = \\frac{1}{2}kx^2$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p04_q2',
            type: 'mcq',
            prompt: 'Pourquoi ne peut-on pas écrire $W(\\vec{T}) = -T\\cdot x = -kx^2$ pour un ressort étiré de $0$ à $x$ ?',
            options: [
              'Parce que la tension T = kx varie linéairement avec x ; son travail vaut l’aire du triangle, soit −(1/2)kx²',
              'Parce que la tension du ressort est toujours nulle',
              'Parce qu’il faut multiplier par cos(60°) qui vaut 1/2',
              'Parce que la raideur k diminue quand x augmente',
            ],
            correctAnswerIndex: 0,
            explanation:
              'La force variant de 0 à kx, le travail est égal à l’aire du triangle sous la courbe F(x), d’où le facteur 1/2 : W(T) = −(1/2)kx².',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Formule générale',
          stepTheme: 'De x₁ à x₂',
          stepTitle: 'Calculer le travail de la tension entre deux allongements',
          paragraphText:
            'Entre un allongement initial $x_1$ et un allongement final $x_2$, le travail de la tension du ressort vaut $W_{1\\to 2}(\\vec{T}) = -\\frac{1}{2}k(x_2^2 - x_1^2)$. Attention : il faut soustraire les **carrés** $x_2^2 - x_1^2$, jamais $(x_2 - x_1)^2$ !',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p04_q3',
            type: 'mcq',
            prompt: 'Un ressort de raideur $k = 25\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$ est allongé de $x_1 = 3\\,\\mathrm{cm}$ jusqu’à $x_2 = 8\\,\\mathrm{cm}$ (Activité p. 5). Quel est le travail $W(\\vec{T})$ de sa tension ?',
            options: ['−6,9·10⁻² J', '−3,1·10⁻² J', '+6,9·10⁻² J', '−8,0·10⁻² J'],
            correctAnswerIndex: 0,
            explanation:
              'W(T) = −(1/2) × 25 × (0,08² − 0,03²) = −12,5 × (0,0064 − 0,0009) = −0,06875 J ≈ −6,9·10⁻² J.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Opérateur vs Ressort',
          stepTheme: 'Travail de l’opérateur',
          stepTitle: 'Travail de l’opérateur qui étire le ressort',
          paragraphText:
            'Lorsque l’opérateur étire lentement le ressort de l’équilibre ($x_1=0$) jusqu’à $x_2 = 8\\,\\mathrm{cm}$, $\\vec{F} = -\\vec{T}$ à chaque instant, donc $W(\\vec{F}) = -W(\\vec{T}) = +\\frac{1}{2}k x_2^2 = +8\\times 10^{-2}\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p04_q4',
            type: 'mcq',
            prompt: 'Un opérateur allonge quasi-statiquement un ressort ($k = 25\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$) de la position d’équilibre jusqu’à $x = 8\\,\\mathrm{cm}$. Quel est le travail effectué par l’opérateur ?',
            options: ['+8·10⁻² J', '−8·10⁻² J', '+16·10⁻² J', '+2,0 J'],
            correctAnswerIndex: 0,
            explanation:
              'W(F) = −W(T) = +(1/2) × 25 × 0,08² = +0,08 J = +8·10⁻² J (travail moteur, Activité p. 5).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Retour à l’équilibre',
          stepTheme: 'Signe du travail de T',
          stepTitle: 'Quand le travail de la tension d’un ressort est-il moteur ?',
          paragraphText:
            'Si le ressort revient d’un allongement $x_1 = 8\\,\\mathrm{cm}$ vers le repos $x_2 = 0$, alors $x_2^2 - x_1^2 < 0$, donc $W(\\vec{T}) = -\\frac{1}{2}k(0 - x_1^2) = +\\frac{1}{2}k x_1^2 > 0$ : la force de rappel tire le solide dans le sens du mouvement.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p04_q5',
            type: 'mcq',
            prompt: 'Un ressort étiré de $x_1 = 10\\,\\mathrm{cm}$ est relâché et revient jusqu’à $x_2 = 2\\,\\mathrm{cm}$. Quelle est la nature du travail de la tension $\\vec{T}$ du ressort pendant ce retour ?',
            options: [
              'Moteur, car x₂² < x₁² donc W(T) > 0',
              'Résistant, car la formule comporte un signe moins',
              'Nul, car le ressort reste horizontal',
              'Nul, car le déplacement change de sens',
            ],
            correctAnswerIndex: 0,
            explanation:
              'Pendant le retour vers l’équilibre, |x₂| < |x₁| donc (x₂² − x₁²) < 0 ; comme W(T) = −½k(x₂² − x₁²), W(T) > 0 (travail moteur).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège erreur',
          stepTheme: 'Différence des carrés',
          stepTitle: 'Éviter l’erreur (x₂ − x₁)² au lieu de (x₂² − x₁²)',
          paragraphText:
            'Une erreur classique consiste à remplacer $x_2^2 - x_1^2$ par $(x_2 - x_1)^2$ : entre $3\\,\\mathrm{cm}$ et $8\\,\\mathrm{cm}$, $0{,}08^2 - 0{,}03^2 = 5{,}5\\times 10^{-3}\\,\\mathrm{m}^2$, alors que $(0{,}08-0{,}03)^2 = 2{,}5\\times 10^{-3}\\,\\mathrm{m}^2$ (plus de deux fois trop petit !). Et pense toujours à convertir les $\\mathrm{cm}$ en $\\mathrm{m}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p04_q6',
            type: 'mcq',
            prompt: 'Parmi ces expressions, laquelle est **fausse** pour un ressort de raideur $k$ dont l’allongement passe de $x_1$ à $x_2$ ?',
            options: [
              'W(T) = −(1/2)·k·(x₂ − x₁)²',
              'W(T) = −(1/2)·k·(x₂² − x₁²)',
              'W(T) = (1/2)·k·(x₁² − x₂²)',
              'W(T) = −(1/2)·k·(x₂ − x₁)(x₂ + x₁)',
            ],
            correctAnswerIndex: 0,
            explanation:
              'W(T) dépend de x₂² − x₁² = (x₂ − x₁)(x₂ + x₁) et jamais de (x₂ − x₁)² (sauf lorsque x₁ = 0).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Bilan des forces et travaux sur un plan incliné
    // ========================================================================
    {
      id: 'premiere_c_physique_l01_travail_puissance_translation_p05',
      order: 5,
      title: 'Bilan des forces et travaux sur un plan incliné',
      summary:
        'Décomposer la réaction du support R = R_N + f, calculer W(P), W(T) et W(f) en montée ou en descente et appliquer le principe de l’inertie.',
      conceptExplanation:
        "Sur un plan incliné d’angle $\\alpha$ par rapport à l’horizontale (Situation d’évaluation p. 5 et Exercice 3 p. 7–8), il faut savoir dresser le **bilan des forces** avant tout calcul de travail.\n\n- **Réaction du plan** : lorsqu’il existe des frottements, la réaction $\\vec{R}$ du support se décompose en :\n  - $\\vec{R}_N$, composante **normale** (perpendiculaire au plan) : son travail est toujours **nul** ($W_{AB}(\\vec{R}_N) = 0$) ;\n  - $\\vec{f} = \\vec{R}_T$, force de **frottement** parallèle au plan et opposée au mouvement : son travail est toujours **résistant**, $W_{AB}(\\vec{f}) = -f \\cdot AB$.\n- **Travail du poids sur un plan incliné** : sur une longueur $AB = \\ell$, la variation d’altitude vaut $h = \\ell\\sin\\alpha$. En **montée**, $W_{AB}(\\vec{P}) = -mg\\ell\\sin\\alpha$ ; en **descente**, $W_{AB}(\\vec{P}) = +mg\\ell\\sin\\alpha$.\n- **Principe de l’inertie et vitesse constante (Exercice 3 p. 8)** : si un solide glisse à **vitesse constante** (mouvement rectiligne uniforme), la somme vectorielle des forces est nulle ($\\sum \\vec{F} = \\vec{0}$), ce qui implique que la **somme des travaux est nulle** :\n  $$W(\\vec{P}) + W(\\vec{T}) + W(\\vec{R}_N) + W(\\vec{f}) = 0$$",
      keyRule:
        'Sur un plan incliné d’angle α : W(R_N) = 0, W(f) = −f · AB, et W(P) = ∓mg · AB · sin α (− en montée, + en descente). À vitesse constante, ∑ W(F) = 0.',
      formulas: [
        {
          name: 'Travail du poids en montée sur un plan incliné d’angle α',
          formula: 'W_{AB}(\\vec{P}) = -m\\,g\\,AB\\,\\sin\\alpha',
          note: 'Pour une descente, le signe devient positif : +mg·AB·sin α',
        },
        {
          name: 'Travail des forces de frottement constantes',
          formula: 'W_{AB}(\\vec{f}) = -f \\cdot AB',
          note: 'Toujours négatif (résistant) car f est opposé au déplacement',
        },
        {
          name: 'Condition d’équilibre dynamique (vitesse constante)',
          formula: '\\sum \\vec{F} = \\vec{0} \\implies \\sum W_{AB}(\\vec{F}) = 0',
          note: 'Permet de déterminer une force inconnue (ex. skieuse du remonte-pente)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Forces exercées sur une caisse tirée le long d’un plan incliné (p. 5)',
        caption: 'Situation p. 5 : T tire vers le haut du plan (moteur) ; P et f = R_T travaillent négativement (résistants) ; R_N ⊥ AB ne travaille pas.',
        svgContent: `<svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <defs>
    <marker id="arr-b5" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb"/>
    </marker>
    <marker id="arr-r5" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#dc2626"/>
    </marker>
    <marker id="arr-g5" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#059669"/>
    </marker>
    <marker id="arr-o5" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#d97706"/>
    </marker>
  </defs>
  <!-- Horizontal & inclined plane (approx 22 deg) -->
  <line x1="30" y1="160" x2="345" y2="160" stroke="#64748b" stroke-width="2"/>
  <line x1="45" y1="160" x2="330" y2="48" stroke="#1e293b" stroke-width="2.5"/>
  <path d="M 85 160 A 40 40 0 0 0 82 145" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <text x="92" y="154" font-size="11" font-weight="bold" fill="#1e293b">α</text>
  <!-- Crate at center (185, 105) -->
  <g transform="translate(185,105) rotate(-21.5)">
    <rect x="-20" y="-22" width="40" height="22" rx="3" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
    <circle cx="0" cy="-11" r="2.5" fill="#1e293b"/>
    <!-- R_N perpendicular up -->
    <line x1="0" y1="0" x2="0" y2="-62" stroke="#059669" stroke-width="2" marker-end="url(#arr-g5)"/>
    <text x="6" y="-56" font-size="11" font-weight="bold" fill="#059669">R_N</text>
    <!-- f opposing motion -->
    <line x1="0" y1="0" x2="-58" y2="0" stroke="#d97706" stroke-width="2.2" marker-end="url(#arr-o5)"/>
    <text x="-55" y="-6" font-size="11" font-weight="bold" fill="#d97706">f</text>
    <!-- T pulling up the slope -->
    <line x1="0" y1="-11" x2="80" y2="-11" stroke="#2563eb" stroke-width="2.3" marker-end="url(#arr-b5)"/>
    <text x="68" y="-17" font-size="12" font-weight="bold" fill="#2563eb">T</text>
  </g>
  <!-- Weight P vertical down from (181, 95) -->
  <line x1="181" y1="95" x2="181" y2="155" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr-r5)"/>
  <text x="187" y="148" font-size="12" font-weight="bold" fill="#dc2626">P</text>
  <text x="110" y="128" font-size="11" font-weight="bold" fill="#1e293b">A</text>
  <text x="275" y="64" font-size="11" font-weight="bold" fill="#1e293b">B</text>
</svg>`,
      },
      workedExample: {
        title: 'Caisse tirée sur un chantier (Situation d’évaluation p. 5–6)',
        statement:
          'Une caisse de masse $m = 60\\,\\mathrm{kg}$ est tirée sur une longueur $AB = 11{,}5\\,\\mathrm{m}$ le long d’un plan incliné d’angle $\\alpha = 20^\\circ$ par une corde parallèle au plan ($T = 500\\,\\mathrm{N}$), avec un frottement $f = 50\\,\\mathrm{N}$ et $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$. Calculer $W(\\vec{P})$, $W(\\vec{T})$ et $W(\\vec{f})$.',
        methodSteps: [
          '1) Poids (montée de h = 11,5 sin 20°) : W_AB(P) = −mg · AB · sin(20°) = −60 × 10 × 11,5 × 0,342 ≈ −2 360 J (résistant).',
          '2) Tension de la corde (colinéaire et de même sens que AB) : W_AB(T) = +T · AB = 500 × 11,5 = +5 750 J (moteur ; note : le PDF p. 6 écrit par erreur −T·AB en étape intermédiaire mais donne bien +5 750 J).',
          '3) Frottements (opposés à AB) : W_AB(f) = −f · AB = −50 × 11,5 = −575 J (résistant).',
        ],
        conclusion: 'W(P) ≈ −2 360 J ; W(T) = +5 750 J ; W(f) = −575 J (et W(R_N) = 0 J).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Réaction normale',
          stepTheme: 'Orthogonalité',
          stepTitle: 'Quel est toujours le travail de la réaction normale R_N ?',
          paragraphText:
            'Que le plan soit horizontal ou incliné, la composante normale $\\vec{R}_N$ de la réaction du support est perpendiculaire à la surface de glissement, donc perpendiculaire au déplacement $\\overrightarrow{AB}$ : $W_{AB}(\\vec{R}_N) = 0\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p05_q1',
            type: 'mcq',
            prompt: 'Une caisse glisse sur une pente de longueur $11{,}5\\,\\mathrm{m}$ inclinée de $20^\\circ$. Que vaut le travail de la composante normale $\\vec{R}_N$ de la réaction du plan ?',
            options: [
              '0 J',
              '−mg · AB · cos 20°',
              '+R_N · AB',
              '−f · AB',
            ],
            correctAnswerIndex: 0,
            explanation: 'R_N est toujours perpendiculaire au déplacement le long du plan : cos 90° = 0 ⇒ W(R_N) = 0 J.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Situation p. 5–6',
          stepTheme: 'Travail du poids',
          stepTitle: 'Calculer le travail du poids lors de la montée de la caisse',
          paragraphText:
            'Dans la situation p. 5–6 ($m = 60\\,\\mathrm{kg}$, $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $AB = 11{,}5\\,\\mathrm{m}$, $\\alpha = 20^\\circ$), la caisse monte d’une hauteur $h = AB\\sin 20^\\circ$, donc $W_{AB}(\\vec{P}) = -60\\times 10\\times 11{,}5\\sin 20^\\circ \\approx -2\\,360\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p05_q2',
            type: 'mcq',
            prompt: 'Une caisse ($m = 60\\,\\mathrm{kg}$) est hissée de $AB = 11{,}5\\,\\mathrm{m}$ sur une pente de $\\alpha = 20^\\circ$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $\\sin 20^\\circ \\approx 0{,}342$). Que vaut $W_{AB}(\\vec{P})$ ?',
            options: ['−2 360 J', '+2 360 J', '−6 484 J', '−690 J'],
            correctAnswerIndex: 0,
            explanation: 'W_AB(P) = −mg · AB · sin α = −600 × 11,5 × 0,342 ≈ −2 360 J (travail résistant).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Frottements',
          stepTheme: 'Situation p. 5–6',
          stepTitle: 'Calculer le travail de la corde et des frottements',
          paragraphText:
            'Pour la corde parallèle au plan ($T = 500\\,\\mathrm{N}$) tirant vers le haut sur $11{,}5\\,\\mathrm{m}$, $W(\\vec{T}) = +500\\times 11{,}5 = +5\\,750\\,\\mathrm{J}$. Pour les frottements ($f = 50\\,\\mathrm{N}$) dirigés vers le bas, $W(\\vec{f}) = -50\\times 11{,}5 = -575\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p05_q3',
            type: 'mcq',
            prompt: 'Au cours du déplacement $AB = 11{,}5\\,\\mathrm{m}$, la caisse subit une force de frottement constante $f = 50\\,\\mathrm{N}$ parallèle au plan. Quel est le travail $W_{AB}(\\vec{f})$ ?',
            options: ['−575 J', '+575 J', '−575 × sin 20° J', '0 J'],
            correctAnswerIndex: 0,
            explanation: 'La force de frottement est constante et opposée au mouvement (α = 180°) : W(f) = −f · AB = −50 × 11,5 = −575 J.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Vitesse constante',
          stepTheme: 'Principe d’inertie',
          stepTitle: 'Utiliser ∑ W = 0 lorsque la vitesse est constante',
          paragraphText:
            'Dans l’Exercice 3 (p. 7–8), une skieuse ($m = 58\\,\\mathrm{kg}$) monte sans frottement à **vitesse constante** une pente d’angle $\\alpha = 20^\\circ$ ($g = 9{,}8\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$), tirée par une perche faisant un angle $\\beta = 30^\\circ$ avec la piste. Par le principe de l’inertie, $W(\\vec{T}) + W(\\vec{P}) + W(\\vec{R}_N) = 0$, soit $T\\,L\\cos\\beta - m g L\\sin\\alpha = 0$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p05_q4',
            type: 'mcq',
            prompt: 'Une skieuse de masse $m$ est tirée à **vitesse constante** sans frottement sur une piste d’angle $\\alpha$ par une tige faisant un angle $\\beta$ avec la piste. Quelle expression donne la tension $T$ de la tige ?',
            options: [
              'T = (m·g·sin α) / cos β',
              'T = (m·g·cos α) / sin β',
              'T = m·g·sin α · cos β',
              'T = m·g·(sin α + cos β)',
            ],
            correctAnswerIndex: 0,
            explanation: 'T·L·cos β − m·g·L·sin α = 0 ⇒ T = (m·g·sin α) / cos β (Exercice 3 p. 8).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application numérique',
          stepTheme: 'Exercice 3 p. 8',
          stepTitle: 'Valeur de la traction sur le remonte-pente',
          paragraphText:
            'Avec $m = 58\\,\\mathrm{kg}$, $g = 9{,}8\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $\\alpha = 20^\\circ$ et $\\beta = 30^\\circ$, on obtient $T = \\frac{58\\times 9{,}8\\times \\sin 20^\\circ}{\\cos 30^\\circ} \\approx 224{,}48\\,\\mathrm{N}$. Note que $L$ se simplifie !',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p05_q5',
            type: 'mcq',
            prompt: 'Dans l’exercice du remonte-pente ($m = 58\\,\\mathrm{kg}$, $g = 9{,}8\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $\\alpha = 20^\\circ$, $\\beta = 30^\\circ$), la longueur de la piste est doublée ($600\\,\\mathrm{m}$ au lieu de $300\\,\\mathrm{m}$). Comment évolue la force de traction $T$ ?',
            options: [
              'Elle reste inchangée (≈ 224,5 N), car L se simplifie dans l’équation',
              'Elle est multipliée par 2',
              'Elle est divisée par 2',
              'Elle augmente proportionnellement à L²',
            ],
            correctAnswerIndex: 0,
            explanation: 'T = (m·g·sin α)/cos β ne dépend pas de la longueur L de la piste.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège signe T',
          stepTheme: 'Erreur de signe évitée',
          stepTitle: 'Vérifier le signe physique de chaque travail obtenu',
          paragraphText:
            'Relis toujours le signe de tes résultats : une force qui tire dans le sens du mouvement a obligatoirement un travail **positif** (le corrigé PDF p. 6 écrit `W(T) = - T.AB = +5 750 J` par faute de frappe sur le signe `-`, le résultat final `+5 750 J` étant bien positif).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p05_q6',
            type: 'mcq',
            prompt: 'Dans le calcul de $W_{AB}(\\vec{T})$ lorsque la corde tire la caisse vers le haut de la pente, quelle écriture est à la fois mathématiquement et physiquement correcte ?',
            options: [
              'W_AB(T) = T · AB · cos(0°) = +T · AB > 0 (travail moteur)',
              'W_AB(T) = −T · AB < 0 (travail moteur)',
              'W_AB(T) = +T · AB · sin α',
              'W_AB(T) = −T · AB · cos α',
            ],
            correctAnswerIndex: 0,
            explanation: 'La tension de la corde est colinéaire et de même sens que AB (α = 0° ⇒ cos 0° = +1), son travail est positif.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Synthèse sur trajets mixtes (rectiligne + incliné + circulaire)
    // ========================================================================
    {
      id: 'premiere_c_physique_l01_travail_puissance_translation_p06',
      order: 6,
      title: 'Synthèse : travaux sur trajets mixtes et circulaires',
      summary:
        'Découper un trajet complexe (horizontal, plan incliné, arc de cercle), calculer le travail du poids et des frottements avec les angles en radians.',
      conceptExplanation:
        "Dans les devoirs (Exercices 4 et 5 p. 8–11), un mobile parcourt successivement des tronçons horizontaux, inclinés et circulaires.\n\n- **Méthode par tronçons (additivité)** : pour un trajet $A\\to B\\to C\\to D$, le travail total d’une force est la somme des travaux sur chaque tronçon :\n  $$W_{A\\to D}(\\vec{F}) = W_{AB}(\\vec{F}) + W_{BC}(\\vec{F}) + W_{CD}(\\vec{F})$$\n- **Travail d’une force constante vs frottements tangentiels** :\n  - Pour une force **constante** (comme le poids $\\vec{P}$), il suffit de trouver la dénivellation $z_A - z_D$. Sur un arc circulaire $CD$ de centre $O$ et d’angle au centre $\\alpha$ à partir de la verticale basse $C$, l’altitude monte de $h' = r(1 - \\cos\\alpha)$, d’où $W_{C\\to D}(\\vec{P}) = -mgr(1 - \\cos\\alpha)$.\n  - Pour une force de **frottement** $\\vec{f}$ d’intensité constante mais toujours tangente à la trajectoire, sa direction change sur l’arc de cercle ! Son travail est égal à $-f \\times L_{\\text{totale}}$, où la longueur d’un arc de cercle de rayon $r$ et d’angle $\\alpha$ vaut :\n    $$L_{\\text{arc}} = r \\cdot \\alpha \\quad (\\text{avec } \\alpha \\text{ en radians !})$$\n- **Précision sur la pente « à $p\\,\\%$ »** : « l’altitude s’élève de $2\\,\\mathrm{m}$ pour un parcours de $100\\,\\mathrm{m}$ » signifie $\\sin\\beta = \\frac{2}{100} = 0{,}02$. Dans l’Exercice 4 (p. 8–9), avec $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $m = 950\\,\\mathrm{kg}$ et $CD = 165\\,\\mathrm{m}$, on obtient rigoureusement $W_{CD}(\\vec{P}) = -950\\times 10\\times 165\\times 0{,}02 = -31\\,350\\,\\mathrm{J}$ *(le corrigé PDF affiche $-30\\,723\\,\\mathrm{J}$ car il a utilisé $9{,}8$ par mégarde alors que l’énoncé donne $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$)*.",
      keyRule:
        'Sur un arc circulaire de rayon r et d’angle α, la montée de hauteur vaut r(1 − cos α) pour le poids, et la longueur parcourue par les frottements vaut r·α avec α obligatoirement en radians.',
      formulas: [
        {
          name: 'Travail des frottements sur piste mixte (rectiligne + arc)',
          formula: 'W_{A\\to D}(\\vec{f}) = -f\\left(AB + BC + r\\cdot\\alpha_{\\text{rad}}\\right)',
          note: 'Sur un arc de cercle, convertir impérativement α en radians : 30° = π/6 rad',
        },
        {
          name: 'Travail du poids en montée sur un arc circulaire depuis le bas',
          formula: 'W_{C\\to D}(\\vec{P}) = -m\\,g\\,r\\,(1 - \\cos\\alpha)',
          note: 'Car le dénivelé entre C (bas) et D (angle α avec la verticale) vaut h′ = r(1 − cos α)',
        },
      ],
      workedExample: {
        title: 'Chariot sur la piste ABCD (Exercice 5 p. 10–11)',
        statement:
          'Un chariot ($m = 1\\,\\mathrm{kg}$, $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$) descend une rampe $AB = 2\\,\\mathrm{m}$ inclinée de $\\alpha = 30^\\circ$, parcourt une horizontale $BC = 3\\,\\mathrm{m}$ puis remonte un arc circulaire $CD$ de rayon $r = 1\\,\\mathrm{m}$ et d’angle au centre $\\alpha = 30^\\circ$. Une force de frottement constante $f = 1{,}23\\,\\mathrm{N}$ s’oppose au mouvement. Calculer $W_{A\\to D}(\\vec{P})$ et $W_{A\\to D}(\\vec{f})$.',
        methodSteps: [
          '1) Travail du poids : AB (descente) +mg·AB·sin 30° = +10 J ; BC (horizontal) 0 J ; CD (montée) −mgr(1 − cos 30°) = −10(1 − 0,866) ≈ −1,34 J (PDF arrondit à −1,4 J). Total : W_A→D(P) ≈ +8,66 J (moteur).',
          '2) Travail de R_N : 0 J sur chaque tronçon car R_N est toujours perpendiculaire au déplacement.',
          '3) Travail des frottements : convertir α = 30° = π/6 ≈ 0,5236 rad ⇒ L_CD = r·α = 0,5236 m.',
          '4) Longueur totale : 2 + 3 + 0,5236 = 5,5236 m ⇒ W_A→D(f) = −1,23 × 5,5236 ≈ −6,79 J (résistant).',
        ],
        conclusion: 'W_A→D(P) ≈ +8,66 J (moteur) ; W_A→D(R_N) = 0 J ; W_A→D(f) ≈ −6,79 J (résistant).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Angle via W',
          stepTheme: 'Exercice 4 (BC)',
          stepTitle: 'Retrouver l’angle de traction à partir d’un travail connu',
          paragraphText:
            'Sur la portion horizontale $BC = 100\\,\\mathrm{m}$ de l’Exercice 4 (p. 8–9), une force constante $F = 50\\,\\mathrm{N}$ inclinée d’un angle $\\alpha$ avec les rails fournit un travail $W_{BC}(\\vec{F}) = 4\\,\\mathrm{kJ} = 4\\,000\\,\\mathrm{J}$. On en déduit $\\cos\\alpha = \\frac{4\\,000}{50\\times 100} = 0{,}8 \\implies \\alpha \\approx 36{,}87^\\circ$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p06_q1',
            type: 'mcq',
            prompt: 'Une force $F = 50\\,\\mathrm{N}$ tire un wagonnet sur $BC = 100\\,\\mathrm{m}$ en fournissant un travail $W_{BC}(\\vec{F}) = 4\\,\\mathrm{kJ}$. Que vaut $\\cos\\alpha$ (et $\\alpha$ avec les rails) ?',
            options: [
              'cos α = 0,80 soit α ≈ 36,87°',
              'cos α = 0,08 soit α ≈ 85,4°',
              'cos α = 0,50 soit α = 60°',
              'cos α = 0,60 soit α ≈ 53,13°',
            ],
            correctAnswerIndex: 0,
            explanation: 'W_BC = 4 000 J ⇒ cos α = 4 000 / (50 × 100) = 4 000 / 5 000 = 0,8 ⇒ α = arccos(0,8) ≈ 36,87°.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Pente à 2 %',
          stepTheme: 'Exercice 4 (CD)',
          stepTitle: 'Calcul rigoureux sur une pente donnée par « 2 m pour 100 m »',
          paragraphText:
            'Sur la partie $CD = 165\\,\\mathrm{m}$ ($m = 950\\,\\mathrm{kg}$, $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $\\sin\\beta = 2/100 = 0{,}02$), le travail du poids en montée vaut exactement $W_{CD}(\\vec{P}) = -950\\times 10\\times 165\\times 0{,}02 = -31\\,350\\,\\mathrm{J}$, et si la corde est inclinée de $\\alpha = 36{,}87^\\circ$ par rapport au plan, $W_{CD}(\\vec{F}) = 50\\times 165\\times 0{,}8 = +6\\,600\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p06_q2',
            type: 'mcq',
            prompt: 'Un wagonnet ($m = 950\\,\\mathrm{kg}$, $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$) monte une pente $CD = 165\\,\\mathrm{m}$ où l’altitude s’élève de $2\\,\\mathrm{m}$ pour $100\\,\\mathrm{m}$ de parcours. Que vaut exactement $W_{CD}(\\vec{P})$ ?',
            options: ['−31 350 J', '+31 350 J', '−3 135 J', '−15 675 J'],
            correctAnswerIndex: 0,
            explanation: 'sin β = 2/100 = 0,02 ⇒ h = 165 × 0,02 = 3,3 m ⇒ W_CD(P) = −mgh = −950 × 10 × 3,3 = −31 350 J.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Arc circulaire',
          stepTheme: 'Exercice 5 (poids)',
          stepTitle: 'Dénivelé sur un arc circulaire pour le travail du poids',
          paragraphText:
            'Dans l’Exercice 5 (p. 10), la partie $CD$ est un arc de cercle de centre $O$ et de rayon $r$ tel que $C$ soit à la verticale sous $O$. Quand le chariot monte jusqu’à l’angle $\\alpha$, son altitude augmente de $h\' = r - r\\cos\\alpha = r(1 - \\cos\\alpha)$.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p06_q3',
            type: 'mcq',
            prompt: 'Un chariot de masse $m = 1\\,\\mathrm{kg}$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$) monte le long d’un arc de cercle $CD$ de rayon $r = 1\\,\\mathrm{m}$ depuis le point bas $C$ jusqu’à un angle $\\alpha = 30^\\circ$ ($\\cos 30^\\circ \\approx 0{,}866$). Que vaut $W_{C\\to D}(\\vec{P})$ ?',
            options: ['−1,34 J (environ −1,4 J)', '+1,34 J', '−8,66 J', '−5,00 J'],
            correctAnswerIndex: 0,
            explanation: 'h′ = r(1 − cos 30°) ≈ 1 × (1 − 0,866) = 0,134 m ⇒ W_C→D(P) = −mgh′ ≈ −1 × 10 × 0,134 = −1,34 J.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège radians',
          stepTheme: 'Frottements sur arc',
          stepTitle: 'Convertir l’angle en radians pour la longueur d’un arc',
          paragraphText:
            'Une force de frottement $\\vec{f}$ suit la tangente à la trajectoire : sur l’arc de cercle $CD$, son travail vaut $W_{C\\to D}(\\vec{f}) = -f\\cdot\\widehat{CD} = -f\\cdot r\\cdot\\alpha$, où $\\alpha$ **doit être en radians** ($30^\\circ = \\frac{\\pi}{6}\\,\\mathrm{rad} \\approx 0{,}524\\,\\mathrm{rad}$, et surtout pas $30$ !).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p06_q4',
            type: 'mcq',
            prompt: 'Un chariot subit un frottement $f = 1{,}23\\,\\mathrm{N}$ le long d’un arc circulaire de rayon $r = 1\\,\\mathrm{m}$ sous-tendu par un angle $\\alpha = 30^\\circ$. Quel est le travail $W_{C\\to D}(\\vec{f})$ sur cet arc ?',
            options: ['−0,64 J (soit −1,23 × π/6)', '−36,9 J (soit −1,23 × 30)', '−1,23 J', '0 J'],
            correctAnswerIndex: 0,
            explanation: 'Longueur d’arc = r · α_rad = 1 × (π/6) ≈ 0,5236 m ⇒ W_C→D(f) = −1,23 × 0,5236 ≈ −0,64 J.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Bilan complet',
          stepTheme: 'Exercice 5 (total)',
          stepTitle: 'Somme des travaux du poids et des frottements sur ABCD',
          paragraphText:
            'Sur la piste complète $ABCD$ ($AB = 2\\,\\mathrm{m}$, $\\alpha = 30^\\circ$, $BC = 3\\,\\mathrm{m}$, arc $CD$ de $r=1\\,\\mathrm{m}$ et $\\alpha = 30^\\circ$), le poids fournit $+10 + 0 - 1{,}34 \\approx +8{,}66\\,\\mathrm{J}$ (moteur) tandis que les frottements ($f=1{,}23\\,\\mathrm{N}$) fournissent $-1{,}23(2+3+\\pi/6) \\approx -6{,}79\\,\\mathrm{J}$ (résistant).',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p06_q5',
            type: 'mcq',
            prompt: 'Sur la piste $ABCD$ ($AB = 2\\,\\mathrm{m}$, $BC = 3\\,\\mathrm{m}$, arc $CD$ de $r = 1\\,\\mathrm{m}$ et $\\alpha = 30^\\circ$), avec $f = 1{,}23\\,\\mathrm{N}$, quel est le travail total des frottements $W_{A\\to D}(\\vec{f})$ ?',
            options: ['−6,79 J', '+6,79 J', '−43,05 J', '−6,15 J'],
            correctAnswerIndex: 0,
            explanation: 'L = AB + BC + r·α_rad = 2 + 3 + π/6 ≈ 5,5236 m ⇒ W_A→D(f) = −1,23 × 5,5236 ≈ −6,79 J (Exercice 5 p. 11).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Critère clé',
          stepTheme: 'Force non conservative',
          stepTitle: 'Différence fondamentale entre travail du poids et travail des frottements',
          paragraphText:
            'Le travail du poids ne dépend que de la différence d’altitude $z_A - z_D$ (il est indépendant du chemin). En revanche, la force de frottement $\\vec{f}$ change de direction avec la trajectoire et reste toujours opposée au déplacement : son travail vaut $-f\\cdot L_{\\text{parcourue}}$ et **dépend du chemin suivi**.',
          exercise: {
            id: 'premiere_c_physique_l01_travail_puissance_translation_p06_q6',
            type: 'mcq',
            prompt: 'Pourquoi ne peut-on pas calculer le travail des frottements $W_{A\\to D}(\\vec{f})$ en faisant simplement $\\vec{f}\\cdot\\overrightarrow{AD}$ ?',
            options: [
              'Parce que le vecteur f change de direction à chaque tronçon pour rester opposé au déplacement réel',
              'Parce que l’intensité f vaut toujours 0 sur une courbe',
              'Parce que le frottement est parallèle au poids',
              'Parce que AD est toujours nul sur une piste courbe',
            ],
            correctAnswerIndex: 0,
            explanation: 'f n’est pas une force constante lorsque la trajectoire tourne (AB puis BC puis CD) : son travail dépend de la longueur totale parcourue (−f · L).',
          },
        },
      ],
    },
  ]),
};
