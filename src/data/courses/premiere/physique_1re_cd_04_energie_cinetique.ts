import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « PC 1ère CDE : Énergie cinétique » (format v2).
export const PHYSIQUE_1RE_CD_L04_ENERGIE_CINETIQUE: CurriculumChapter = {
  id: 'premiere_c_physique_l04_energie_cinetique',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  // Programme 1re C : P1 travail (translation), P2 travail (rotation), P3 énergie cinétique, P4 Ep, P5 Em, P6 champ
  order: 3,
  title: 'Leçon 3 : Énergie cinétique',
  summary:
    'Énergie cinétique de translation (½mv²) et de rotation (½J_Δω², 1ère C), moments d’inertie usuels, théorème de l’énergie cinétique (ΔEc = ∑W_ext) et applications avec frottements ou ressort.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'PC 1ère CDE : Énergie cinétique.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Énergie cinétique de translation et d’un ensemble de points
    // ========================================================================
    {
      id: 'premiere_c_physique_l04_energie_cinetique_p01',
      order: 1,
      title: 'Énergie cinétique de translation et d’un système de points',
      summary:
        'Définir l’énergie cinétique, calculer Ec = ½mv² en unités SI et distinguer énergie cinétique et quantité de mouvement.',
      conceptExplanation:
        "Lors d’une collision routière (Situation d’apprentissage p. 1), l’importance des dégâts causés par un véhicule lançé à grande vitesse s’explique par son **énergie cinétique**.\n\n- **Définition** : l’**énergie cinétique** $E_c$ d’un solide est l’énergie qu’il possède du fait de sa vitesse dans un référentiel donné (elle est donc positive ou nulle et dépend du référentiel choisi).\n- **Solide en translation (ou point matériel)** : pour un solide de masse $m$ animé d’une vitesse $v$ :\n  $$E_c = \\frac{1}{2} m v^2$$\n  - **Unités SI** : $m$ en kilogramme ($\\mathrm{kg}$), $v$ en $\\mathrm{m}\\cdot\\mathrm{s}^{-1}$, $E_c$ en **joule** ($\\mathrm{J}$).\n- **Ensemble de points matériels** : l’énergie cinétique totale d’un système formé de points $M_i(m_i, v_i)$ est la somme de leurs énergies cinétiques :\n  $$E_c = \\sum_i E_{c,i} = \\sum_i \\frac{1}{2} m_i v_i^2$$\n- **Lien avec la quantité de mouvement** (Documentation p. 9) : pour une particule de quantité de mouvement $p = mv$, on a $E_c = \\frac{p^2}{2m}$.",
      keyRule:
        'Ec = ½·m·v² (en joules, avec m en kg et v en m/s). Toujours positif ou nul ; si la vitesse double, Ec est multipliée par 4.',
      formulas: [
        {
          name: 'Énergie cinétique de translation',
          formula: 'E_c = \\frac{1}{2}\\,m\\,v^2',
          note: 'm en kg ; v en m/s (diviser km/h par 3,6) ; E_c en J',
        },
        {
          name: 'Énergie cinétique d’un ensemble de points',
          formula: 'E_c = \\sum_i \\frac{1}{2}\\,m_i\\,v_i^2',
          note: 'L’énergie cinétique est une grandeur scalaire additive et positive',
        },
      ],
      workedExample: {
        title: 'Bille en translation rectiligne (Activité 1 p. 1)',
        statement:
          'Une bille de masse $m = 250\\,\\mathrm{g}$ se déplace sur une route rectiligne à la vitesse $V = 2\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$. Calculer son énergie cinétique $E_c$.',
        methodSteps: [
          '1) Convertir la masse en kilogrammes : m = 250 g = 0,25 kg.',
          '2) Écrire la formule : E_c = ½ · m · V².',
          '3) Calculer : E_c = ½ × 0,25 × 2² = 0,5 × 0,25 × 4 = 0,5 J.',
        ],
        conclusion: 'L’énergie cinétique de la bille vaut E_c = 0,5 J.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Énergie du mouvement',
          stepTitle: 'Qu’est-ce que l’énergie cinétique d’un solide ?',
          paragraphText:
            'L’**énergie cinétique** d’un solide est l’énergie qu’il possède du fait de sa **vitesse**. Comme la vitesse dépend du référentiel d’observation, l’énergie cinétique dépend elle aussi du **référentiel** choisi et s’exprime en joules ($\\mathrm{J}$).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p01_q1',
            type: 'mcq',
            prompt: 'Un voyageur est assis immobile dans un train qui roule à $90\\,\\mathrm{km}\\cdot\\mathrm{h}^{-1}$. Que vaut son énergie cinétique selon le référentiel choisi ?',
            options: [
              'Nulle dans le référentiel du train, et non nulle dans le référentiel terrestre',
              'Identique dans tous les référentiels car sa masse ne change pas',
              'Négative dans le référentiel du train',
              'Nulle dans le référentiel terrestre',
            ],
            correctAnswerIndex: 0,
            explanation: 'L’énergie cinétique Ec = ½mv² dépend de la vitesse, donc du référentiel (Documentation p. 9).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Formule Ec',
          stepTheme: 'Translation',
          stepTitle: 'Calculer l’énergie cinétique d’un solide en translation',
          paragraphText:
            'Un solide de masse $m$ en translation à la vitesse $v$ possède une énergie cinétique $E_c = \\frac{1}{2} m v^2$ (avec $m$ en $\\mathrm{kg}$, $v$ en $\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ et $E_c$ en $\\mathrm{J}$).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p01_q2',
            type: 'mcq',
            prompt: 'Une bille de masse $m = 250\\,\\mathrm{g}$ se déplace en translation à $V = 2\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ (Activité 1 p. 1). Quelle est son énergie cinétique ?',
            options: ['0,5 J', '500 J', '1,0 J', '0,25 J'],
            correctAnswerIndex: 0,
            explanation: 'm = 250 g = 0,25 kg ⇒ Ec = ½ × 0,25 × 2² = 0,5 J.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Effet du carré',
          stepTheme: 'Vitesse doublée',
          stepTitle: 'Comment varie Ec quand la vitesse est multipliée par k ?',
          paragraphText:
            'L’énergie cinétique est proportionnelle au **carré** de la vitesse ($v^2$). Si la vitesse d’une voiture est doublée ($v \\to 2v$), son énergie cinétique (et donc sa distance de freinage à force égale) est multipliée par $2^2 = 4$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p01_q3',
            type: 'mcq',
            prompt: 'Si la vitesse d’un camion est multipliée par $3$, par combien est multipliée son énergie cinétique ?',
            options: ['Par 9', 'Par 3', 'Par 6', 'Par 1,5'],
            correctAnswerIndex: 0,
            explanation: 'Ec = ½mv² est proportionnelle à v² : si v′ = 3v, alors E′c = ½m(3v)² = 9 Ec.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Conversions SI',
          stepTheme: 'g → kg et km/h → m/s',
          stepTitle: 'Convertir masse et vitesse avant de calculer Ec',
          paragraphText:
            'Avant d’utiliser $E_c = \\frac{1}{2} m v^2$, vérifie toujours les unités SI : masse en $\\mathrm{kg}$ (diviser les grammes par $1\\,000$) et vitesse en $\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ (diviser les $\\mathrm{km}\\cdot\\mathrm{h}^{-1}$ par $3{,}6$).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p01_q4',
            type: 'mcq',
            prompt: 'Une voiture de masse $m = 1\\,000\\,\\mathrm{kg}$ roule à $v = 72\\,\\mathrm{km}\\cdot\\mathrm{h}^{-1}$. Quelle est son énergie cinétique ?',
            options: ['200 000 J (200 kJ)', '400 000 J', '2 592 000 J', '20 000 J'],
            correctAnswerIndex: 0,
            explanation: 'v = 72 / 3,6 = 20 m/s ⇒ Ec = ½ × 1 000 × 20² = 500 × 400 = 200 000 J = 200 kJ.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Système de points',
          stepTheme: 'Somme scalaire',
          stepTitle: 'Additionner les énergies cinétiques d’un ensemble de points',
          paragraphText:
            'Contrairement aux vecteurs vitesse ou force, les énergies cinétiques s’additionnent comme de simples nombres positifs : $E_c = \\sum \\frac{1}{2} m_i v_i^2$, même si deux points se déplacent en sens opposés.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p01_q5',
            type: 'mcq',
            prompt: 'Deux mobiles identiques de masse $m = 2\\,\\mathrm{kg}$ roulent sur une même droite en **sens opposés** avec la même vitesse de norme $v = 3\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$. Que vaut l’énergie cinétique totale du système des deux mobiles ?',
            options: ['18 J', '0 J', '9 J', '36 J'],
            correctAnswerIndex: 0,
            explanation: 'Chaque mobile a Ec = ½ × 2 × 3² = 9 J. L’énergie cinétique étant scalaire et positive, Ec_tot = 9 + 9 = 18 J.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège signe & unité',
          stepTheme: 'Jamais négative',
          stepTitle: 'Une énergie cinétique n’est jamais négative',
          paragraphText:
            'Ne confonds pas l’énergie cinétique $E_c$ (toujours $\\ge 0$) avec sa **variation** $\\Delta E_c = E_{c,2} - E_{c,1}$ qui peut être négative lors d’un freinage. De plus, l’unité est le joule ($\\mathrm{J}$), équivalent à $\\mathrm{kg}\\cdot\\mathrm{m}^2\\cdot\\mathrm{s}^{-2}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p01_q6',
            type: 'mcq',
            prompt: 'Lorsqu’un mobile freine de $10\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ jusqu’à l’arrêt, que peut-on dire de $E_c$ et de $\\Delta E_c$ ?',
            options: [
              'Ec est toujours ≥ 0 (elle diminue jusqu’à 0), tandis que la variation ΔEc = Ec_final − Ec_initial est négative',
              'Ec devient négative pendant tout le freinage',
              'ΔEc est positive car les forces de freinage travaillent positivement',
              'Ec reste constante mais v² devient négatif',
            ],
            correctAnswerIndex: 0,
            explanation: 'Ec = ½mv² ≥ 0 à tout instant ; au freinage Ec diminue donc ΔEc = 0 − Ec_initial < 0.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Énergie cinétique de rotation & moments d’inertie (1ère C)
    // ========================================================================
    {
      id: 'premiere_c_physique_l04_energie_cinetique_p02',
      order: 2,
      title: 'Énergie cinétique de rotation et moments d’inertie (1ère C)',
      summary:
        'Définir le moment d’inertie J_Δ, connaître les moments d’inertie des solides homogènes usuels et calculer Ec = ½ J_Δ ω².',
      conceptExplanation:
        "Lorsqu’un solide $S$ tourne autour d’un axe fixe $(\\Delta)$ avec une vitesse angulaire $\\omega$ (section 1.3 du cours, spécifique à la **1ère C**), chaque point $M_i$ à la distance $r_i$ de l’axe décrit un cercle à la vitesse $v_i = r_i\\omega$.\n\n- **Moment d’inertie $J_\\Delta$** : en sommant $E_c = \\sum \\frac{1}{2} m_i(r_i\\omega)^2 = \\frac{1}{2}(\\sum m_i r_i^2)\\omega^2$, on définit le **moment d’inertie** du solide par rapport à $(\\Delta)$ :\n  $$J_\\Delta = \\sum_i m_i r_i^2$$\n  - **Unité SI** : $\\mathrm{kg}\\cdot\\mathrm{m}^2$ *(corrige la coquille « kg. M » du PDF p. 2)*.\n  - Il caractérise la répartition des masses autour de l’axe $(\\Delta)$.\n- **Énergie cinétique de rotation** :\n  $$E_c = \\frac{1}{2} J_\\Delta \\omega^2$$\n  où $\\omega$ s’exprime en $\\mathrm{rad}\\cdot\\mathrm{s}^{-1}$. Si la vitesse est donnée en tours par minute ($N$ en $\\mathrm{tr}\\cdot\\mathrm{min}^{-1}$), on convertit par $\\omega = \\frac{2\\pi N}{60}$.\n- **Moments d’inertie usuels (axe passant par G)** (p. 2) :\n  - Anneau (ou cerceau) de rayon $R$ : $J_\\Delta = M R^2$ ;\n  - Disque ou cylindre plein : $J_\\Delta = \\frac{1}{2} M R^2$ ;\n  - Boule pleine (sphère) : $J_\\Delta = \\frac{2}{5} M R^2$ ;\n  - Barre homogène de longueur $\\ell$ (axe $\\perp$ passant par $G$) : $J_\\Delta = \\frac{1}{12} M \\ell^2$.",
      keyRule:
        'En rotation autour d’un axe fixe Δ : Ec = ½·J_Δ·ω², avec J_Δ en kg·m² et ω = 2πN/60 en rad/s. Disque/cylindre : ½MR², boule : 2/5 MR², anneau : MR², barre : 1/12 Mℓ².',
      formulas: [
        {
          name: 'Énergie cinétique de rotation (1ère C)',
          formula: 'E_c = \\frac{1}{2}\\,J_\\Delta\\,\\omega^2 \\quad\\text{avec } \\omega = \\frac{2\\pi N}{60}',
          note: 'J_Δ en kg·m² ; ω en rad/s ; N en tr/min',
        },
        {
          name: 'Moments d’inertie de solides homogènes',
          formula: 'J_{\\text{anneau}} = MR^2,\\; J_{\\text{cyl}} = \\frac{1}{2}MR^2,\\; J_{\\text{boule}} = \\frac{2}{5}MR^2,\\; J_{\\text{barre}} = \\frac{1}{12}M\\ell^2',
          note: 'Axes de symétrie passant par le centre d’inertie G',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Moments d’inertie des solides homogènes usuels (p. 2)',
        caption: 'Plus la masse est éloignée de l’axe Δ, plus J_Δ est grand (anneau MR² > disque ½MR² > boule ⅖MR²).',
        svgContent: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <!-- 1. Anneau -->
  <ellipse cx="48" cy="58" rx="14" ry="30" fill="none" stroke="#2563eb" stroke-width="3.5"/>
  <line x1="25" y1="70" x2="72" y2="46" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="68" y="42" font-size="10" fill="#1e293b">Δ</text>
  <text x="24" y="108" font-size="11" font-weight="bold" fill="#1e293b">Anneau</text>
  <text x="20" y="126" font-size="11" font-weight="bold" fill="#2563eb">J = MR²</text>
  <!-- 2. Disque / Cylindre -->
  <rect x="115" y="34" width="38" height="48" fill="#dbeafe" stroke="#1e293b" stroke-width="1.6"/>
  <ellipse cx="134" cy="34" rx="19" ry="7" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.6"/>
  <ellipse cx="134" cy="82" rx="19" ry="7" fill="#dbeafe" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="134" y1="16" x2="134" y2="96" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="139" y="22" font-size="10" fill="#dc2626">Δ</text>
  <text x="112" y="108" font-size="11" font-weight="bold" fill="#1e293b">Cylindre</text>
  <text x="108" y="126" font-size="11" font-weight="bold" fill="#2563eb">J = ½MR²</text>
  <!-- 3. Boule -->
  <circle cx="230" cy="58" r="28" fill="#e0e7ff" stroke="#1e293b" stroke-width="1.8"/>
  <ellipse cx="230" cy="58" rx="28" ry="8" fill="none" stroke="#475569" stroke-dasharray="3 2"/>
  <line x1="230" y1="18" x2="230" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="235" y="22" font-size="10" fill="#dc2626">Δ</text>
  <text x="214" y="108" font-size="11" font-weight="bold" fill="#1e293b">Boule</text>
  <text x="204" y="126" font-size="11" font-weight="bold" fill="#2563eb">J = ⅖MR²</text>
  <!-- 4. Barre -->
  <line x1="295" y1="78" x2="365" y2="38" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <line x1="330" y1="20" x2="330" y2="92" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <circle cx="330" cy="58" r="3" fill="#dc2626"/>
  <text x="335" y="24" font-size="10" fill="#dc2626">Δ</text>
  <text x="315" y="108" font-size="11" font-weight="bold" fill="#1e293b">Barre</text>
  <text x="303" y="126" font-size="11" font-weight="bold" fill="#2563eb">J = 1/12 Mℓ²</text>
</svg>`,
      },
      workedExample: {
        title: 'Solide en rotation autour d’un axe fixe (Activité p. 2–3)',
        statement:
          'Un solide de moment d’inertie $J_\\Delta = 6\\cdot 10^{-1}\\,\\mathrm{kg}\\cdot\\mathrm{m}^2$ tourne à la vitesse angulaire $\\omega = 0{,}5\\,\\mathrm{rad}\\cdot\\mathrm{s}^{-1}$. Calculer son énergie cinétique de rotation.',
        methodSteps: [
          '1) Identifier les données en unités SI : J_Δ = 0,6 kg·m² et ω = 0,5 rad/s.',
          '2) Appliquer Ec = ½ · J_Δ · ω².',
          '3) Calculer : Ec = 0,5 × 0,6 × (0,5)² = 0,3 × 0,25 = 0,075 J = 7,5·10⁻² J.',
        ],
        conclusion: 'L’énergie cinétique de rotation du solide vaut 7,5·10⁻² J.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Moment d’inertie',
          stepTheme: 'Unité SI',
          stepTitle: 'Définition et unité du moment d’inertie J_Δ',
          paragraphText:
            'Le moment d’inertie $J_\\Delta = \\sum m_i r_i^2$ traduit la manière dont la masse du solide est répartie autour de l’axe de rotation $(\\Delta)$ ; son unité SI est le kilogramme mètre carré ($\\mathrm{kg}\\cdot\\mathrm{m}^2$).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p02_q1',
            type: 'mcq',
            prompt: 'Quelle est l’unité légale dans le Système International du moment d’inertie $J_\\Delta$ ?',
            options: ['kg·m²', 'kg·m', 'kg·m⁻²', 'J·s'],
            correctAnswerIndex: 0,
            explanation: 'Puisque J_Δ = ∑ m_i r_i², son unité SI est le kg·m².',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Formule rotation',
          stepTheme: 'Activité p. 2–3',
          stepTitle: 'Calculer Ec = ½ J_Δ ω²',
          paragraphText:
            'L’énergie cinétique d’un solide en rotation autour d’un axe fixe $(\\Delta)$ s’écrit $E_c = \\frac{1}{2} J_\\Delta \\omega^2$ avec $J_\\Delta$ en $\\mathrm{kg}\\cdot\\mathrm{m}^2$ et $\\omega$ en $\\mathrm{rad}\\cdot\\mathrm{s}^{-1}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p02_q2',
            type: 'mcq',
            prompt: 'Un solide de moment d’inertie $J_\\Delta = 6\\cdot 10^{-1}\\,\\mathrm{kg}\\cdot\\mathrm{m}^2$ tourne à $\\omega = 0{,}5\\,\\mathrm{rad}\\cdot\\mathrm{s}^{-1}$. Quelle est son énergie cinétique ?',
            options: ['7,5·10⁻² J', '1,5·10⁻¹ J', '3,0·10⁻¹ J', '7,5·10⁻¹ J'],
            correctAnswerIndex: 0,
            explanation: 'Ec = ½ × 0,6 × (0,5)² = 0,3 × 0,25 = 0,075 J = 7,5·10⁻² J (Activité p. 2–3).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Solides usuels',
          stepTheme: 'Disque, Boule, Anneau',
          stepTitle: 'Connaître les moments d’inertie de référence',
          paragraphText:
            'À retenir pour un solide homogène de masse $M$ et de rayon $R$ (ou longueur $\\ell$) : anneau $MR^2$ ; disque ou cylindre plein $\\frac{1}{2}MR^2$ ; boule pleine $\\frac{2}{5}MR^2$ ; barre autour de son centre $\\frac{1}{12}M\\ell^2$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p02_q3',
            type: 'mcq',
            prompt: 'Un cylindre homogène, un anneau et une boule pleine ont tous la même masse $M$ et le même rayon $R$. Lequel possède le plus grand moment d’inertie autour de son axe ?',
            options: [
              'L’anneau (J = MR²)',
              'Le cylindre plein (J = ½MR²)',
              'La boule pleine (J = ⅖MR²)',
              'Ils ont tous le même moment d’inertie',
            ],
            correctAnswerIndex: 0,
            explanation: '1 > 1/2 (0,5) > 2/5 (0,4) : l’anneau concentre toute sa masse à la distance maximale R de l’axe.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Conversion tr/min',
          stepTheme: 'Calcul de ω',
          stepTitle: 'Passer de N (tr/min) à ω (rad/s)',
          paragraphText:
            'Un tour complet vaut $2\\pi\\,\\mathrm{rad}$ et une minute vaut $60\\,\\mathrm{s}$ : si un volant tourne à $N$ tours par minute, sa vitesse angulaire est $\\omega = \\frac{2\\pi N}{60}$ en $\\mathrm{rad}\\cdot\\mathrm{s}^{-1}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p02_q4',
            type: 'mcq',
            prompt: 'Un volant d’inertie ($J_\\Delta = 2\\,\\mathrm{kg}\\cdot\\mathrm{m}^2$) tourne à $N = 300\\,\\mathrm{tr}\\cdot\\mathrm{min}^{-1}$. Que vaut sa vitesse angulaire $\\omega$ et son énergie cinétique ?',
            options: [
              'ω = 10π ≈ 31,4 rad/s et Ec ≈ 987 J',
              'ω = 300 rad/s et Ec = 90 000 J',
              'ω = 5 rad/s et Ec = 25 J',
              'ω = 600π rad/s',
            ],
            correctAnswerIndex: 0,
            explanation: 'ω = 2π × 300 / 60 = 10π ≈ 31,42 rad/s ⇒ Ec = ½ × 2 × (10π)² = 100π² ≈ 987 J.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Volant en fonte',
          stepTheme: 'Exercice 3 p. 6',
          stepTitle: 'Calculer le moment d’inertie d’un cylindre à partir de ρ',
          paragraphText:
            'Dans l’Exercice 3 (p. 6), un volant cylindrique de rayon $R = 50\\,\\mathrm{cm} = 0{,}5\\,\\mathrm{m}$, hauteur $h = 1\\,\\mathrm{m}$ et masse volumique $\\rho = 7\\,600\\,\\mathrm{kg}\\cdot\\mathrm{m}^{-3}$ a une masse $M = \\rho\\pi R^2 h$, donc $J_\\Delta = \\frac{1}{2}MR^2 = \\frac{1}{2}\\rho\\pi h R^4$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p02_q5',
            type: 'mcq',
            prompt: 'Un cylindre homogène plein de masse volumique $\\rho$, de rayon $R = 0{,}50\\,\\mathrm{m}$ et de hauteur $h = 1\\,\\mathrm{m}$ a pour volume $V = \\pi R^2 h$. Quelle est l’expression correcte et la valeur exacte (avec $\\rho = 7\\,600\\,\\mathrm{kg}\\cdot\\mathrm{m}^{-3}$) de $J_\\Delta$ ?',
            options: [
              'J_Δ = ½ ρ π h R⁴ ≈ 746,1 kg·m²',
              'J_Δ = ρ π h R²',
              'J_Δ = ½ ρ π h (R²)⁴',
              'J_Δ = ¼ ρ R⁴',
            ],
            correctAnswerIndex: 0,
            explanation: 'J_Δ = ½ M R² = ½ (ρ π R² h) R² = ½ ρ π h R⁴ = 0,5 × 7 600 × π × 1 × 0,5⁴ ≈ 746,1 kg·m² (le corrigé PDF avait par erreur élevé R² = 0,25 à la puissance 4).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège axe de la barre',
          stepTheme: 'Centre vs extrémité',
          stepTitle: 'Le moment d’inertie dépend de la position de l’axe Δ',
          paragraphText:
            'La formule $J_\\Delta = \\frac{1}{12} M\\ell^2$ pour la barre homogène n’est valable que si l’axe $(\\Delta)$ passe par son **centre d’inertie $G$**. Pour calculer $E_c$ de rotation, vérifie toujours en quel point passe l’axe $(\\Delta)$ et convertis $N$ (tr/min) en $\\mathrm{rad}\\cdot\\mathrm{s}^{-1}$ !',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p02_q6',
            type: 'mcq',
            prompt: 'Un volant a un moment d’inertie $J_\\Delta = 40\\,\\mathrm{kg}\\cdot\\mathrm{m}^2$. Sa vitesse passe de $N_1 = 1\\,400\\,\\mathrm{tr}\\cdot\\mathrm{min}^{-1}$ à $N_2 = 1\\,300\\,\\mathrm{tr}\\cdot\\mathrm{min}^{-1}$ en $\\Delta t = 4\\,\\mathrm{s}$. Comment calculer la puissance moyenne restituée ?',
            options: [
              'P = |ΔEc| / Δt = ½ J_Δ (ω₁² − ω₂²) / Δt (avec ω₁, ω₂ en rad/s)',
              'P = ½ J_Δ (N₁ − N₂)² / Δt',
              'P = ½ J_Δ (ω₁ − ω₂)² / Δt',
              'P = J_Δ · Δt',
            ],
            correctAnswerIndex: 0,
            explanation: 'Attention : ω₁² − ω₂² ≠ (ω₁ − ω₂)² ! On calcule ΔEc = ½ J_Δ(ω₂² − ω₁²) avec ω = 2πN/60, puis P = |ΔEc| / Δt (Exercice 3 p. 6).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Théorème de l’énergie cinétique (TEC) et méthode d’étude
    // ========================================================================
    {
      id: 'premiere_c_physique_l04_energie_cinetique_p03',
      order: 3,
      title: 'Théorème de l’énergie cinétique et méthode d’application',
      summary:
        'Énoncer le théorème de l’énergie cinétique (ΔEc = ∑W_ext) et appliquer la méthode en 3 étapes sur plan incliné et horizontal.',
      conceptExplanation:
        "Le **théorème de l’énergie cinétique (TEC)** relie directement le mouvement (les vitesses) aux forces qui s’exercent sur le système.\n\n- **Énoncé officiel** (p. 3 & p. 8) : dans un **référentiel galiléen**, la variation de l’énergie cinétique d’un solide (en translation ou en rotation autour d’un axe fixe) entre deux instants $t_1$ et $t_2$ est égale à la **somme algébrique des travaux des forces extérieures** appliquées au solide entre ces deux instants :\n  $$\\Delta E_c = E_{c,2} - E_{c,1} = \\sum W_{1\\to 2}(\\vec{F}_{\\text{ext}})$$\n- **Méthode rigoureuse en 3 étapes (p. 3)** :\n  1. **Préciser le système** étudié (et le référentiel galiléen) ;\n  2. **Faire l’inventaire des forces extérieures** appliquées au système ;\n  3. **Préciser les deux positions (instants)** initial et final entre lesquels on applique le théorème.\n- **Lien avec le principe de l’inertie** : si le mouvement s’effectue à **vitesse constante**, $\\Delta E_c = 0 \\implies \\sum W(\\vec{F}_{\\text{ext}}) = 0$.",
      keyRule:
        'TEC (référentiel galiléen) : ΔEc = Ec(B) − Ec(A) = ∑ W_A→B(F_ext). Méthode : 1) système, 2) bilan des forces, 3) états initial et final.',
      formulas: [
        {
          name: 'Théorème de l’énergie cinétique (TEC)',
          formula: '\\Delta E_c = E_{c}(B) - E_{c}(A) = \\sum W_{A\\to B}(\\vec{F}_{\\text{ext}})',
          note: 'Valable uniquement dans un référentiel galiléen',
        },
        {
          name: 'Vitesse atteinte en descente sans frottement depuis le repos',
          formula: 'V_B = \\sqrt{2\\,g\\,h} = \\sqrt{2\\,g\\,AB\\sin\\alpha}',
          note: 'Indépendante de la masse m du solide !',
        },
      ],
      workedExample: {
        title: 'Descente sans frottement puis arrêt par frottement (Activité p. 3)',
        statement:
          'Un solide de masse $m = 85\\,\\mathrm{kg}$ part sans vitesse initiale du sommet $A$ d’un plan incliné sans frottement ($AB = 20\\,\\mathrm{m}$, $\\alpha = 30^\\circ$), puis s’arrête au bout d’un trajet horizontal $BC = 30\\,\\mathrm{m}$ soumis à un frottement constant $f$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$). Calculer $V_B$ puis $f$.',
        methodSteps: [
          '1) Sur AB (sans frottement) : bilan P et R_N (W(R_N)=0). TEC entre A (V_A=0) et B : ½mV_B² − 0 = mgh = mg·AB·sin 30°.',
          '2) Simplifier par m : V_B = √(2g·AB·sin 30°) = √(2 × 10 × 20 × 0,5) = √200 ≈ 14,14 m/s.',
          '3) Sur BC (horizontal, V_C = 0) : W(P) = 0, W(R_N) = 0, W(f) = −f·BC. TEC : 0 − ½mV_B² = −f·BC.',
          '4) Calculer f = m V_B² / (2 BC) = (85 × 200) / (2 × 30) ≈ 283,33 N.',
        ],
        conclusion: 'V_B ≈ 14,14 m/s et la force de frottement horizontale vaut f ≈ 283,33 N.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Énoncé TEC',
          stepTheme: 'Exercice 2 p. 6',
          stepTitle: 'Énoncer exactement le théorème de l’énergie cinétique',
          paragraphText:
            'Dans un référentiel galiléen, la variation de l’énergie cinétique d’un solide entre deux instants est égale à la **somme algébrique** des travaux de toutes les **forces extérieures** appliquées entre ces deux instants : $\\Delta E_c = \\sum W_{1\\to 2}(\\vec{F}_{\\text{ext}})$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p03_q1',
            type: 'mcq',
            prompt: 'Dans un référentiel galiléen, à quoi est égale la variation $\\Delta E_c = E_{c,2} - E_{c,1}$ de l’énergie cinétique d’un solide entre deux instants $t_1$ et $t_2$ ?',
            options: [
              'À la somme algébrique des travaux de toutes les forces extérieures appliquées entre ces deux instants',
              'Uniquement au travail de la force motrice',
              'Au produit de la puissance par la masse du solide',
              'À la somme vectorielle des forces extérieures appliquées',
            ],
            correctAnswerIndex: 0,
            explanation: 'C’est l’énoncé exact du théorème de l’énergie cinétique (Exercice 2 p. 6).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: '3 étapes clés',
          stepTheme: 'Rédaction physique',
          stepTitle: 'Les trois préalables avant d’écrire ΔEc = ∑W',
          paragraphText:
            'Avant d’appliquer le TEC dans un devoir (p. 3), indique toujours : 1) le **système** (et le référentiel galiléen) ; 2) l’**inventaire des forces** extérieures ; 3) les **deux instants (ou positions)** initial et final.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p03_q2',
            type: 'mcq',
            prompt: 'Lors de l’application du théorème de l’énergie cinétique sur un schéma, quelle force ne faut-il surtout pas oublier dans l’inventaire, même si son travail vaut 0 J ?',
            options: [
              'La réaction normale R_N du support (en précisant W(R_N) = 0 J car R_N ⊥ au déplacement)',
              'La force de Coriolis imaginaire du mobile',
              'Le poids interne de chaque molécule d’air',
              'La masse volumique du solide',
            ],
            correctAnswerIndex: 0,
            explanation: 'Un bilan complet cite toutes les forces extérieures (P, R_N, et éventuellement f ou F) avant d’annuler W(R_N) = 0.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Activité AB',
          stepTheme: 'Chute sans frottement',
          stepTitle: 'Calculer la vitesse en bas d’un plan incliné sans frottement',
          paragraphText:
            'En descente sans frottement depuis le repos ($V_A = 0$), $\\frac{1}{2} m V_B^2 = mgh = mg\\,AB\\sin\\alpha \\implies V_B = \\sqrt{2g\\,AB\\sin\\alpha}$. Avec $AB = 20\\,\\mathrm{m}$, $\\alpha = 30^\\circ$ et $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, on obtient $V_B = \\sqrt{200} \\approx 14{,}14\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p03_q3',
            type: 'mcq',
            prompt: 'Un solide ($m = 85\\,\\mathrm{kg}$) glisse sans frottement depuis le repos sur une pente $AB = 20\\,\\mathrm{m}$ inclinée de $30^\\circ$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$). Quelle est sa vitesse en $B$ ?',
            options: ['14,14 m/s (√200)', '20,0 m/s', '10,0 m/s', '17,32 m/s'],
            correctAnswerIndex: 0,
            explanation: 'V_B = √(2 · 10 · 20 · sin 30°) = √(400 × 0,5) = √200 ≈ 14,14 m/s (Activité p. 3).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Activité BC',
          stepTheme: 'Freinage par frottement',
          stepTitle: 'Déterminer la force de frottement qui arrête un solide',
          paragraphText:
            'Sur un plan horizontal où le solide passe de $V_B$ à l’arrêt ($V_C = 0$) sur une distance $BC$, $W(\\vec{P}) = 0$ et $W(\\vec{R}_N) = 0$. Le TEC donne $0 - \\frac{1}{2} m V_B^2 = -f\\cdot BC \\implies f = \\frac{m V_B^2}{2\\,BC}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p03_q4',
            type: 'mcq',
            prompt: 'Le solide précédent ($m = 85\\,\\mathrm{kg}$, $V_B^2 = 200\\,\\mathrm{m}^2\\cdot\\mathrm{s}^{-2}$) s’arrête en $C$ après $BC = 30\\,\\mathrm{m}$ de glissement horizontal. Que vaut l’intensité $f$ de la force de frottement ?',
            options: ['283,3 N', '566,7 N', '141,7 N', '850,0 N'],
            correctAnswerIndex: 0,
            explanation: 'f = (m V_B²) / (2 BC) = (85 × 200) / (2 × 30) = 17 000 / 60 ≈ 283,3 N (Activité p. 3).',
          },
        },
        {
          stepNumber: 5,
          stepBadge: 'Propulsion',
          stepKind: 'methode',
          stepTheme: 'Accélération en côte',
          stepTitle: 'Évaluer une force motrice en montée avec accélération',
          paragraphText:
            'Si un véhicule de masse $m = 130\\,\\mathrm{kg}$ (poids $P = 1\\,300\\,\\mathrm{N}$, $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$) monte une côte de longueur $L = 50\\,\\mathrm{m}$ ($\\beta = 15^\\circ$) en passant de $v_1 = 3\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ à $v_2 = 12\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ contre un frottement $f = 780\\,\\mathrm{N}$, le TEC donne $F = \\frac{\\frac{1}{2}m(v_2^2-v_1^2)}{L} + f + P\\sin\\beta \\approx 1\\,292\\,\\mathrm{N}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p03_q5',
            type: 'mcq',
            prompt: 'Un véhicule de masse $m = 1\\,000\\,\\mathrm{kg}$ accélère de $v_1 = 0$ à $v_2 = 10\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ sur une route horizontale de longueur $L = 50\\,\\mathrm{m}$ avec un frottement $f = 500\\,\\mathrm{N}$. Quelle est l’intensité de la force motrice $F$ ?',
            options: ['1 500 N', '1 000 N', '500 N', '2 500 N'],
            correctAnswerIndex: 0,
            explanation: 'TEC : ½ m v₂² = (F − f)L ⇒ 50 000 = (F − 500)×50 ⇒ F − 500 = 1 000 ⇒ F = 1 500 N.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège masse vs poids',
          stepTheme: 'Vigilance P = mg',
          stepTitle: 'Ne jamais confondre la masse m (en kg) et le poids P (en N)',
          paragraphText:
            'Vérifie toujours si l’énoncé te donne la **masse $m$** ou le **poids $P$** : si $P = 1\\,300\\,\\mathrm{N}$ et $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$ (Situation p. 3–4), alors $m = \\frac{P}{g} = 130\\,\\mathrm{kg}$ ! Remplacer $m$ par $1\\,300$ dans $\\frac{1}{2}mv^2$ rendrait l’énergie cinétique $10$ fois trop grande.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p03_q6',
            type: 'mcq',
            prompt: 'Une voiturette de randonnée a un poids total $P = 1\\,300\\,\\mathrm{N}$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$) et roule à $v = 12\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$. Quelle est la valeur exacte de son énergie cinétique $E_c$ ?',
            options: ['9 360 J (avec m = 130 kg)', '93 600 J', '780 J', '15 600 J'],
            correctAnswerIndex: 0,
            explanation: 'm = P / g = 1 300 / 10 = 130 kg ⇒ Ec = ½ × 130 × 12² = 65 × 144 = 9 360 J.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Chute dans une cuvette demi-sphérique avec ou sans frottements
    // ========================================================================
    {
      id: 'premiere_c_physique_l04_energie_cinetique_p04',
      order: 4,
      title: 'Application sur piste circulaire : avec ou sans frottements',
      summary:
        'Appliquer le TEC sur un arc de cercle (cuvette demi-sphérique), déduire la présence de frottements et calculer l’intensité f sur l’arc.',
      conceptExplanation:
        "De nombreux problèmes de 1ère (Exercice 1 p. 5–6, Exercice 5 p. 7–9) étudient un mobile glissant dans une **cuvette circulaire** de rayon $r$.\n\n- **Sans frottement** : les seules forces sont le poids $\\vec{P}$ et la réaction normale $\\vec{R}$ (toujours orthogonale au cercle, donc $W(\\vec{R}) = 0$). Du bord $A$ (altitude $h = r$ au-dessus du fond $B$) jusqu’au fond $B$, en partant sans vitesse initiale ($V_A = 0$) :\n  $$\\frac{1}{2} m V_B^2 = m g r \\implies V_B = \\sqrt{2 g r}$$\n- **Détection et calcul des frottements** : si la vitesse réelle mesurée au fond vérifie $V'_B < \\sqrt{2gr}$, c’est qu’il existe des forces de frottement $\\vec{f}$ résistantes. Le TEC s’écrit alors :\n  $$\\frac{1}{2} m {V'_B}^2 - 0 = m g r + W_{AB}(\\vec{f}) \\implies W_{AB}(\\vec{f}) = \\frac{1}{2} m {V'_B}^2 - m g r < 0$$\n- **Intensité $f$ supposée constante sur l’arc** : le travail des frottements sur un quart de cercle de longueur $\\widehat{AB} = \\frac{2\\pi r}{4} = \\frac{\\pi r}{2}$ vaut :\n  $$W_{AB}(\\vec{f}) = -f \\cdot \\frac{\\pi r}{2} \\implies f = -\\frac{2\\,W_{AB}(\\vec{f})}{\\pi r}$$",
      keyRule:
        'Dans une cuvette circulaire de rayon r (descente du bord A au fond B sans vitesse) : théoriquement V_B = √(2gr) ; s’il y a frottement (V′_B < V_B), W(f) = ½mV′_B² − mgr et f = −W(f) / L_arc.',
      formulas: [
        {
          name: 'Vitesse théorique au fond d’une cuvette de rayon r (sans frottement)',
          formula: 'V_B = \\sqrt{2\\,g\\,r}',
          note: 'Pour un lâcher sans vitesse depuis le bord horizontal (h = r)',
        },
        {
          name: 'Travail et intensité de frottement sur un quart de cercle',
          formula: 'W_{AB}(\\vec{f}) = \\frac{1}{2}m{V\'_B}^2 - mgr = -f\\cdot\\frac{\\pi r}{2}',
          note: 'Longueur d’un quart de cercle de rayon r : (π r) / 2',
        },
      ],
      workedExample: {
        title: 'Bille dans une cuvette demi-sphérique (Exercice 1 p. 5–6)',
        statement:
          'Une bille de masse $m = 100\\,\\mathrm{g}$ glisse sans vitesse initiale du bord $A$ d’une cuvette demi-sphérique de rayon $r = 0{,}5\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$). 1) Calculer $V_B$ sans frottement. 2) En réalité $V\'_B = 2{,}5\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ : en déduire $W_{AB}(\\vec{f})$ puis $f$.',
        methodSteps: [
          '1) Sans frottement : V_B = √(2 × 10 × 0,5) = √10 ≈ 3,16 m/s.',
          '2) Comme V′_B = 2,5 m/s < 3,16 m/s, il existe des forces de frottement.',
          '3) Travail des frottements : W_AB(f) = ½ × 0,1 × (2,5)² − 0,1 × 10 × 0,5 = 0,3125 − 0,5 = −0,1875 J ≈ −0,19 J.',
          '4) Quart de cercle : L = πr/2 ⇒ f = −2 W_AB(f) / (πr) = −2(−0,19) / (π × 0,5) ≈ 0,24 N.',
        ],
        conclusion: 'V_B ≈ 3,16 m/s ; W_AB(f) ≈ −0,19 J ; intensité f ≈ 0,24 N.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Sans frottement',
          stepTheme: 'Cuvette r = 0,5 m',
          stepTitle: 'Vitesse théorique au fond d’une cuvette demi-sphérique',
          paragraphText:
            'Lors d’un glissement sans frottement depuis le bord supérieur $A$ jusqu’au fond $B$ d’une cuvette de rayon $r$, le dénivelé vaut $h = r$ et $W(\\vec{R}) = 0$, d’où $V_B = \\sqrt{2gr}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p04_q1',
            type: 'mcq',
            prompt: 'Une bille ($m = 100\\,\\mathrm{g}$) est lâchée sans vitesse du bord d’une cuvette hémisphérique de rayon $r = 0{,}5\\,\\mathrm{m}$ sans frottement ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$). Quelle est sa vitesse au fond $B$ ?',
            options: ['3,16 m/s', '2,50 m/s', '10,0 m/s', '2,24 m/s'],
            correctAnswerIndex: 0,
            explanation: 'V_B = √(2gr) = √(2 × 10 × 0,5) = √10 ≈ 3,16 m/s (Exercice 1 p. 5).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Diagnostic frottement',
          stepTheme: 'V′_B < V_B',
          stepTitle: 'Comment prouver l’existence de frottements par l’expérience ?',
          paragraphText:
            'Si la vitesse réellement mesurée $V\'_B$ au point $B$ est **inférieure** à la vitesse théorique $V_B = \\sqrt{2gr}$ calculée sans frottement, cela prouve qu’une force de frottement résistante a prélevé de l’énergie mécanique ($W(\\vec{f}) < 0$).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p04_q2',
            type: 'mcq',
            prompt: 'Dans l’expérience précédente, on mesure au fond $B$ une vitesse réelle $V\'_B = 2{,}5\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ (au lieu de $3{,}16\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$). Que conclut-on ?',
            options: [
              'La bille est soumise à des forces de frottement résistantes car V′_B < V_B',
              'La réaction R de la cuvette a fourni un travail négatif',
              'La masse de la bille a augmenté pendant la descente',
              'La pesanteur est nulle au fond de la cuvette',
            ],
            correctAnswerIndex: 0,
            explanation: 'Comme W(R_N) = 0, seule la présence de frottements (W(f) < 0) explique que V′_B < V_B.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Calcul de W(f)',
          stepTheme: 'Exercice 1 Q3.1',
          stepTitle: 'Calculer le travail des frottements à partir de V′_B',
          paragraphText:
            'En appliquant le TEC avec frottements entre $A$ ($V_A = 0$) et $B$ ($V\'_B = 2{,}5\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$) pour $m = 0{,}1\\,\\mathrm{kg}$ et $r = 0{,}5\\,\\mathrm{m}$ : $W_{AB}(\\vec{f}) = \\frac{1}{2} m {V\'_B}^2 - mgr = 0{,}3125 - 0{,}5 \\approx -0{,}19\\,\\mathrm{J}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p04_q3',
            type: 'mcq',
            prompt: 'Avec $m = 100\\,\\mathrm{g}$, $r = 0{,}5\\,\\mathrm{m}$, $g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$ et $V\'_B = 2{,}5\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$, quel est le travail total des frottements entre $A$ et $B$ ?',
            options: ['≈ −0,19 J', '≈ +0,19 J', '≈ −0,50 J', '≈ −0,81 J'],
            correctAnswerIndex: 0,
            explanation: 'W_AB(f) = ½ × 0,1 × 2,5² − 0,1 × 10 × 0,5 = 0,3125 − 0,5 = −0,1875 J ≈ −0,19 J.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Intensité sur arc',
          stepTheme: 'Quart de cercle',
          stepTitle: 'Déduire l’intensité f d’un frottement le long d’un quart de cercle',
          paragraphText:
            'Entre le bord horizontal $A$ et le fond $B$, le rayon tourne de $\\frac{\\pi}{2}\\,\\mathrm{rad}$ : la longueur parcourue vaut $\\widehat{AB} = \\frac{\\pi r}{2}$. D’où $W_{AB}(\\vec{f}) = -f \\cdot \\frac{\\pi r}{2}$, soit $f = -\\frac{2\\,W_{AB}(\\vec{f})}{\\pi r} \\approx 0{,}24\\,\\mathrm{N}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p04_q4',
            type: 'mcq',
            prompt: 'Sachant que $W_{AB}(\\vec{f}) \\approx -0{,}19\\,\\mathrm{J}$ le long d’un quart de cercle de rayon $r = 0{,}5\\,\\mathrm{m}$, que vaut l’intensité $f$ de la force de frottement ?',
            options: ['≈ 0,24 N', '≈ 0,38 N', '≈ 0,12 N', '≈ 0,76 N'],
            correctAnswerIndex: 0,
            explanation: 'Longueur = πr/2 = 0,25π ≈ 0,785 m ⇒ f = 0,19 / 0,785 ≈ 0,24 N (Exercice 1 p. 6).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Position quelconque',
          stepTheme: 'Dénivelé r(1 − cos α)',
          stepTitle: 'Dénivelé quand la piste circulaire ne couvre qu’un angle α < 90°',
          paragraphText:
            'Si la piste circulaire ne va que d’un angle $\\alpha$ à la verticale passant par le fond $B$ (comme dans l’Exercice 5 p. 7–8 avec $\\alpha = 60^\\circ$), la hauteur de descente entre $A$ et $B$ vaut $h = r(1 - \\cos\\alpha)$ et la longueur de l’arc vaut $\\widehat{AB} = r\\cdot\\alpha_{\\text{rad}}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p04_q5',
            type: 'mcq',
            prompt: 'Un chariot glisse sans frottement sur un arc de cercle de rayon $r = 2\\,\\mathrm{m}$ entre le point $A$ repéré par $\\alpha = 60^\\circ$ et le point le plus bas $B$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, $\\cos 60^\\circ = 0{,}5$). De quelle hauteur verticale descend-il ?',
            options: ['1,0 m', '2,0 m', '1,73 m', '0,5 m'],
            correctAnswerIndex: 0,
            explanation: 'h = r(1 − cos α) = 2 × (1 − 0,5) = 1,0 m.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège masse dans V_B',
          stepTheme: 'Simplification par m',
          stepTitle: 'Sans frottement, V_B ne dépend pas de la masse !',
          paragraphText:
            'Attention : sans frottement, la masse $m$ se simplifie dans $\\frac{1}{2}mV_B^2 = mgh$, donc deux billes de masses $10\\,\\mathrm{g}$ et $5\\,\\mathrm{kg}$ atteignent le fond à la **même vitesse** $\\sqrt{2gr}$. En revanche, dès qu’il y a des frottements $f$, $m$ ne se simplifie plus !',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p04_q6',
            type: 'mcq',
            prompt: 'On lâche successivement deux billes de masses $100\\,\\mathrm{g}$ et $400\\,\\mathrm{g}$ sans vitesse initiale du bord de la même cuvette sans frottement. Comment se comparent leurs vitesses au fond ?',
            options: [
              'Elles sont rigoureusement égales : V_B = √(2gr) ne dépend pas de la masse',
              'La bille de 400 g va deux fois plus vite',
              'La bille de 400 g va quatre fois plus vite',
              'La bille de 100 g va deux fois plus vite',
            ],
            correctAnswerIndex: 0,
            explanation: 'En l’absence de frottements (W(f) = 0), ½ m V_B² = m g r donne V_B = √(2gr), indépendant de m.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Application du TEC avec un ressort (lancer et compression)
    // ========================================================================
    {
      id: 'premiere_c_physique_l04_energie_cinetique_p05',
      order: 5,
      title: 'Théorème de l’énergie cinétique avec un ressort',
      summary:
        'Intégrer le travail de la tension du ressort W(T) = ±½k(Δℓ)² dans le TEC pour trouver la vitesse d’éjection, la hauteur maximale ou la compression du ressort.',
      conceptExplanation:
        "Le théorème de l’énergie cinétique permet d’étudier très élégamment les lanceurs et amortisseurs à ressort (Exercices 4 et 5 p. 7–9).\n\n- **Travail de la tension du ressort** : lorsque le ressort passe d’une compression (ou allongement) $x_1$ à $x_2$, $W_{1\\to 2}(\\vec{T}) = -\\frac{1}{2}k(x_2^2 - x_1^2)$ :\n  - Si le ressort **propulse** un projectile depuis sa compression initiale $x_0 = |\\ell - \\ell_0|$ jusqu’à sa longueur à vide ($x_2 = 0$), le ressort fournit un travail **moteur** $W(\\vec{T}) = +\\frac{1}{2} k (\\ell - \\ell_0)^2$.\n  - Si un mobile **comprime** le ressort depuis le repos ($x_1 = 0$) jusqu’à l’arrêt ($x_2 = x$), le ressort effectue un travail **résistant** $W(\\vec{T}) = -\\frac{1}{2} k x^2$.\n- **Canon à ressort (Exercice 4 p. 7)** :\n  - Lors de la détente ($0 \\to v_1$, action du poids négligée dans le canon) : $\\frac{1}{2} m v_1^2 = \\frac{1}{2} k (\\ell - \\ell_0)^2 \\implies v_1 = \\sqrt{\\frac{k(\\ell - \\ell_0)^2}{m}}$.\n  - En l’air ensuite (phase verticale montante de $v_1$ jusqu’au sommet $v_f = 0$) : $0 - \\frac{1}{2} m v_1^2 = -m g h_{\\max} \\implies h_{\\max} = \\frac{v_1^2}{2g}$.",
      keyRule:
        'Détente d’un ressort comprimé de x : W(T) = +½kx² (moteur) ⇒ v₁ = x√(k/m). Compression jusqu’à l’arrêt : W(T) = −½kx² (résistant).',
      formulas: [
        {
          name: 'Vitesse d’éjection par un ressort (détente de Δℓ = |ℓ − ℓ₀|)',
          formula: '\\frac{1}{2}\\,m\\,v_1^2 = \\frac{1}{2}\\,k\\,(\\ell - \\ell_0)^2 \\implies v_1 = |\\ell - \\ell_0|\\,\\sqrt{\\frac{k}{m}}',
          note: 'En négligeant le poids et les frottements durant la détente dans le canon',
        },
        {
          name: 'Hauteur maximale atteinte en tir vertical',
          formula: 'h_{\\max} = \\frac{v_1^2}{2g}',
          note: 'Obtenue par le TEC entre la sortie du canon (v₁) et le sommet (v_f = 0)',
        },
      ],
      workedExample: {
        title: 'Canon à ressort vertical (Exercice 4 p. 6–7)',
        statement:
          'Une force $F = 10\\,\\mathrm{N}$ raccourcit un ressort de $x = 0{,}5\\,\\mathrm{cm}$. On comprime ce ressort ($\\ell_0 = 10\\,\\mathrm{cm}$) jusqu’à $\\ell = 5\\,\\mathrm{cm}$ pour lancer verticalement un projectile de masse $m = 30\\,\\mathrm{g}$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, poids négligé dans le canon). Calculer $k$, $v_1$ et $h_{\\max}$.',
        methodSteps: [
          '1) Raideur k : k = F / x = 10 / 0,005 = 2 000 N/m.',
          '2) TEC dans le canon (de Δℓ = 0,05 m à 0) : ½ m v₁² = ½ k (ℓ − ℓ₀)² ⇒ v₁ = √(2 000 × 0,05² / 0,03) = √(5 / 0,03) ≈ 12,91 m/s.',
          '3) TEC en l’air (de v₁ à v_f = 0) : −½ m v₁² = −m g h_max ⇒ h_max = v₁² / (2g) = 12,91² / 20 ≈ 8,33 m (PDF : 12,9² / 20 = 8,32 m).',
        ],
        conclusion: 'k = 2 000 N/m ; vitesse de sortie v₁ ≈ 12,9 m/s ; hauteur maximale h_max ≈ 8,33 m.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Mesure de k',
          stepTheme: 'Exercice 4 Q2',
          stepTitle: 'Déterminer la constante de raideur k d’un ressort',
          paragraphText:
            'Lorsqu’une force $F$ provoque une déformation (allongement ou raccourcissement) $x$ à l’équilibre, la loi $F = k\\,x$ donne immédiatement la raideur $k = \\frac{F}{x}$ (avec $x$ converti en mètres).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p05_q1',
            type: 'mcq',
            prompt: 'Une force d’intensité $F = 10\\,\\mathrm{N}$ provoque un raccourcissement de $x = 0{,}5\\,\\mathrm{cm}$ d’un ressort (Exercice 4 p. 7). Quelle est sa constante de raideur $k$ ?',
            options: ['2 000 N/m', '200 N/m', '20 N/m', '5 000 N/m'],
            correctAnswerIndex: 0,
            explanation: 'x = 0,5 cm = 0,005 m ⇒ k = F / x = 10 / 0,005 = 2 000 N/m.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Éjection',
          stepTheme: 'Exercice 4 Q3.1',
          stepTitle: 'Calculer la vitesse à la sortie d’un canon à ressort',
          paragraphText:
            'En appliquant le TEC entre l’instant du lâcher ($v_0 = 0$, compression $5\\,\\mathrm{cm}$) et la sortie du canon ($v_1$, ressort détendu), $\\frac{1}{2} m v_1^2 = \\frac{1}{2} k(\\ell - \\ell_0)^2$, d’où $v_1 = \\sqrt{\\frac{2\\,000\\times 0{,}05^2}{0{,}03}} \\approx 12{,}9\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p05_q2',
            type: 'mcq',
            prompt: 'Un ressort ($k = 2\\,000\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$, longueur à vide $10\\,\\mathrm{cm}$) comprimé à $5\\,\\mathrm{cm}$ propulse un projectile de masse $m = 30\\,\\mathrm{g}$ (poids négligé dans le canon). Quelle est sa vitesse de sortie $v_1$ ?',
            options: ['≈ 12,9 m/s', '≈ 1,29 m/s', '≈ 166,7 m/s', '≈ 4,08 m/s'],
            correctAnswerIndex: 0,
            explanation: 'v₁ = √(k(Δℓ)²/m) = √(2 000 × 0,05² / 0,03) = √(5 / 0,03) ≈ 12,91 m/s.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Sommet du tir',
          stepTheme: 'Exercice 4 Q3.2',
          stepTitle: 'Trouver la hauteur maximale atteinte par le projectile',
          paragraphText:
            'Une fois sorti du canon à la vitesse $v_1$, le projectile ne subit plus que son poids $\\vec{P}$ (frottements négligés). Au sommet, $v_f = 0$, donc $0 - \\frac{1}{2} m v_1^2 = -mgh_{\\max} \\implies h_{\\max} = \\frac{v_1^2}{2g} \\approx 8{,}33\\,\\mathrm{m}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p05_q3',
            type: 'mcq',
            prompt: 'Éjecté verticalement vers le haut avec une vitesse $v_1 = 12{,}9\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ ($g = 10\\,\\mathrm{N}\\cdot\\mathrm{kg}^{-1}$, sans frottement), à quelle hauteur maximale $h_{\\max}$ monte le projectile ?',
            options: ['≈ 8,32 m', '≈ 16,6 m', '≈ 0,65 m', '≈ 4,16 m'],
            correctAnswerIndex: 0,
            explanation: 'h_max = v₁² / (2g) = 12,9² / (2 × 10) = 166,41 / 20 ≈ 8,32 m.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Amortissement',
          stepTheme: 'Exercice 5 (1ère C)',
          stepTitle: 'Calculer la compression maximale x d’un ressort heurté par une bille',
          paragraphText:
            'Dans l’Exercice 5 (p. 7–9), une bille arrive en $A$ avec $E_{cA} = mgH$, descend un arc $AB$ (dénivelé $r(1-\\cos\\alpha)$) puis glisse sur $BC$ avec frottement $f$ (longueur $r\\alpha_{\\text{rad}} + BC$), et s’arrête ($v_D = 0$) en comprimant de $x$ un ressort sans frottement sur $CD$ : $0 - E_{cA} = mgr(1-\\cos\\alpha) - f(r\\alpha_{\\text{rad}}+BC) - \\frac{1}{2}kx^2$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p05_q4',
            type: 'mcq',
            prompt: 'Une bille de masse $m = 0{,}2\\,\\mathrm{kg}$ arrive horizontalement sans frottement à la vitesse $v = 4\\,\\mathrm{m}\\cdot\\mathrm{s}^{-1}$ contre un ressort horizontal de raideur $k = 200\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$. De quelle longueur $x$ le ressort se comprime-t-il à l’arrêt ?',
            options: ['0,126 m (12,6 cm)', '0,016 m', '0,40 m', '1,26 m'],
            correctAnswerIndex: 0,
            explanation: 'TEC jusqu’à l’arrêt : 0 − ½mv² = −½kx² ⇒ x = √(mv²/k) = √(0,2 × 16 / 200) = √0,016 ≈ 0,126 m.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Après l’arrêt',
          stepTheme: 'Rebond élastique',
          stepTitle: 'Que fait la bille juste après avoir comprimé le ressort au maximum ?',
          paragraphText:
            'À l’instant d’arrêt en $D$ (compression maximale $x$), la vitesse est nulle mais la tension $\\vec{T}$ du ressort comprimé vaut $kx \\ne 0$ et pousse vers $C$ : la bille n’est donc **pas à l’équilibre**, elle **rebrousse chemin** immédiatement (Exercice 5 Q4 p. 9).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p05_q5',
            type: 'mcq',
            prompt: 'Au moment précis où une bille qui heurte un ressort horizontal atteint sa compression maximale $x$ (vitesse nulle), que fait-elle juste après ?',
            options: [
              'Elle rebrousse chemin car le ressort comprimé exerce sur elle une force de rappel T = kx non nulle vers l’arrière',
              'Elle reste définitivement collée immobile en D car sa vitesse est nulle',
              'Elle continue d’avancer en traversant le mur',
              'Son énergie cinétique devient négative',
            ],
            correctAnswerIndex: 0,
            explanation: 'Vitesse nulle ne signifie pas équilibre : la force de rappel du ressort comprimé renvoie la bille en sens inverse (p. 9).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège signe ressort',
          stepTheme: 'Compression vs détente',
          stepTitle: 'Vérifier le signe de W(T) selon détente ou compression',
          paragraphText:
            'Règle de signe sans erreur : si le ressort passe d’un état déformé ($\\Delta\\ell \\ne 0$) à son état libre ($0$), $W(\\vec{T}) = +\\frac{1}{2}k(\\Delta\\ell)^2 > 0$ (moteur) ; s’il passe de libre ($0$) à comprimé ($x$), $W(\\vec{T}) = -\\frac{1}{2}kx^2 < 0$ (résistant).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p05_q6',
            type: 'mcq',
            prompt: 'Dans l’application du TEC lors du freinage d’une bille par un ressort initialement au repos qui se comprime de $x$, quel signe affecte le terme $\\frac{1}{2} k x^2$ dans $\\sum W(\\vec{F}_{\\text{ext}})$ ?',
            options: [
              'Signe négatif (−½kx²), car la tension du ressort s’oppose à l’avancée de la bille',
              'Signe positif (+½kx²)',
              'Nul car le ressort est immobile',
              '−kx sans le facteur ½ ni le carré',
            ],
            correctAnswerIndex: 0,
            explanation: 'En comprimant un ressort à partir du repos, la tension T pointe en sens opposé au mouvement : son travail est résistant (−½kx²).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Bilan de puissance & synthèse historique (Documentation)
    // ========================================================================
    {
      id: 'premiere_c_physique_l04_energie_cinetique_p06',
      order: 6,
      title: 'Synthèse : TEC sur systèmes mixtes et histoire du concept',
      summary:
        'Calculer une puissance mécanique moyenne à partir de ΔEc/Δt (volant en fonte) et situer le théorème dans son cadre newtonien (vis viva).',
      conceptExplanation:
        "Le théorème de l’énergie cinétique s’applique aussi bien aux échanges de puissance en rotation qu’aux synthèses multi-tronçons.\n\n- **Puissance moyenne restituée par variation d’énergie cinétique** (Exercice 3 p. 6) : si un volant en rotation voit sa vitesse diminuer de $\\omega_1$ à $\\omega_2$ pendant $\\Delta t$, il restitue l’énergie $E_r = |\\Delta E_c| = \\frac{1}{2} J_\\Delta (\\omega_1^2 - \\omega_2^2) > 0$, ce qui correspond à une puissance moyenne restituée :\n  $$P = \\frac{E_r}{\\Delta t}$$\n- **Synthèse multi-étapes (Exercice 5 p. 7–9)** : lorsque les forces changent de nature d’un tronçon à l’autre (chute verticale $H \\to A$, puis arc circulaire $AB$ avec frottements, puis horizontale $BC$ avec frottements, puis ressort $CD$ sans frottement), on peut appliquer le TEC directement entre deux positions très éloignées ($A$ et $D$) en sommant les travaux sur chaque tronçon : $\\Delta E_c = W_{A\\to D}(\\vec{P}) + W_{A\\to D}(\\vec{R}_N) + W_{A\\to C}(\\vec{f}) + W_{C\\to D}(\\vec{T})$.\n- **Repères historiques et limites (Documentation p. 9)** : le mot *cinétique* vient du grec *kinesis* (mouvement) et a été popularisé par **William Thomson (Lord Kelvin)**. Auparavant, **Gottfried Leibniz** et **Johann Bernoulli** avaient introduit la *vis viva* (« force vivante » $mv^2$). Enfin, $E_c = \\frac{1}{2}mv^2$ est valable en **mécanique newtonienne** (pour des vitesses très petites devant celle de la lumière), mais doit être modifiée en mécanique **relativiste** et **quantique**.",
      keyRule:
        'Puissance moyenne échangée : P = |ΔEc| / Δt. Le TEC peut s’appliquer directement entre un état initial A et un état final D éloignés en additionnant les travaux sur chaque tronçon.',
      formulas: [
        {
          name: 'Puissance moyenne liée à une variation d’énergie cinétique',
          formula: 'P = \\frac{|\\Delta E_c|}{\\Delta t} = \\frac{|E_{c,2} - E_{c,1}|}{\\Delta t}',
          note: 'En watts (W = J/s)',
        },
        {
          name: 'Énergie cinétique et quantité de mouvement p = mv',
          formula: 'E_c = \\frac{1}{2}\\,m\\,v^2 = \\frac{p^2}{2\\,m}',
          note: 'Valable en mécanique newtonienne (vitesses faibles devant c)',
        },
      ],
      workedExample: {
        title: 'Puissance restituée par un volant d’inertie qui ralentit',
        statement:
          'Un volant d’inertie de moment d’inertie $J_\\Delta = 50\\,\\mathrm{kg}\\cdot\\mathrm{m}^2$ a une énergie cinétique initiale $E_c = 5{,}0\\cdot 10^5\\,\\mathrm{J}$ qui descend à $E\'_c = 4{,}32\\cdot 10^5\\,\\mathrm{J}$ en $\\Delta t = 4\\,\\mathrm{s}$. Calculer l’énergie restituée $E_r$ et la puissance moyenne $P$.',
        methodSteps: [
          '1) Variation d’énergie cinétique : ΔEc = E′_c − Ec = 4,32·10⁵ − 5,0·10⁵ = −6,8·10⁴ J.',
          '2) L’énergie cédée au milieu extérieur (restituée) est Er = |ΔEc| = 6,8·10⁴ J = 68 kJ.',
          '3) Puissance moyenne restituée : P = Er / Δt = 68 000 / 4 = 17 000 W = 1,7·10⁴ W.',
        ],
        conclusion: 'Le volant restitue 68 kJ en 4 s, soit une puissance moyenne de 17 kW (1,7·10⁴ W).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'exemple',
          stepBadge: 'Volant & Puissance',
          stepTheme: 'Exercice 3 Q3',
          stepTitle: 'Calculer une puissance restituée à partir de ΔEc',
          paragraphText:
            'Si l’énergie cinétique d’un volant en fonte passe de $5{,}0\\cdot 10^5\\,\\mathrm{J}$ à $4{,}32\\cdot 10^5\\,\\mathrm{J}$ en $\\Delta t = 4\\,\\mathrm{s}$ (Exercice 3 p. 6), la perte d’énergie cinétique vaut $|\\Delta E_c| = 6{,}8\\cdot 10^4\\,\\mathrm{J}$, donc la puissance moyenne restituée vaut $P = \\frac{6{,}8\\cdot 10^4}{4} = 1{,}7\\cdot 10^4\\,\\mathrm{W}$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p06_q1',
            type: 'mcq',
            prompt: 'Un volant en rotation perd $\\Delta E_c = -6{,}8\\cdot 10^4\\,\\mathrm{J}$ en $\\Delta t = 4\\,\\mathrm{s}$. Quelle est la puissance moyenne qu’il restitue ?',
            options: ['1,7·10⁴ W (17 kW)', '2,72·10⁵ W', '6,8·10⁴ W', '1,7·10³ W'],
            correctAnswerIndex: 0,
            explanation: 'P = Er / Δt = (6,8·10⁴) / 4 = 1,7·10⁴ W = 17 kW.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Trajet global',
          stepTheme: 'Exercice 5 (A → D)',
          stepTitle: 'Appliquer le TEC directement entre les extrémités d’un parcours mixte',
          paragraphText:
            'Dans l’Exercice 5 (p. 8–9), au lieu de calculer les vitesses intermédiaires en $B$ et en $C$, il est beaucoup plus rapide d’appliquer directement le TEC entre $A$ et $D$ : $E_{cD} - E_{cA} = W_{A\\to D}(\\vec{P}) + W_{A\\to D}(\\vec{R}_N) + W_{A\\to C}(\\vec{f}) + W_{C\\to D}(\\vec{T})$.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p06_q2',
            type: 'mcq',
            prompt: 'Une bille ($E_{cA} = 0{,}20\\,\\mathrm{J}$) descend un dénivelé ($W(\\vec{P}) = +0{,}30\\,\\mathrm{J}$), perd $0{,}10\\,\\mathrm{J}$ par frottement puis s’arrête en comprimant un ressort de raideur $k = 50\\,\\mathrm{N}\\cdot\\mathrm{m}^{-1}$. Quelle est la compression maximale $x$ du ressort ?',
            options: ['≈ 0,126 m (12,6 cm)', '≈ 0,016 m', '≈ 0,089 m', '≈ 0,400 m'],
            correctAnswerIndex: 0,
            explanation: 'TEC global : 0 − 0,20 = +0,30 − 0,10 − ½ k x² ⇒ ½ × 50 x² = 0,40 ⇒ x² = 0,80 / 50 = 0,016 ⇒ x ≈ 0,126 m.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Origine historique',
          stepTheme: 'Documentation p. 9',
          stepTitle: 'D’où vient le terme « énergie cinétique » ?',
          paragraphText:
            'Le terme *énergie cinétique* dérive du grec *kinesis* (« mouvement ») et remonte à **William Thomson (Lord Kelvin)**. Il succède au concept de *vis viva* ($mv^2$) développé par Leibniz et Bernoulli au XVIIe siècle, face à la quantité de mouvement $mv$ de Descartes.',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p06_q3',
            type: 'mcq',
            prompt: 'D’après la documentation du cours (p. 9), quel physicien a introduit l’appellation moderne d’« énergie cinétique » (du grec *kinesis*) ?',
            options: [
              'William Thomson (Lord Kelvin)',
              'Blaise Pascal',
              'Antoine Lavoisier',
              'Alessandro Volta',
            ],
            correctAnswerIndex: 0,
            explanation: 'Lord Kelvin (William Thomson) est à l’origine du terme « énergie cinétique », issu du grec kinesis (mouvement).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Échelle microscopique',
          stepTheme: 'Gaz chaud & relativité',
          stepTitle: 'Énergie cinétique microscopique et domaine de validité',
          paragraphText:
            'À l’échelle microscopique, l’énergie cinétique moyenne des particules d’un gaz augmente avec sa **température**. Par ailleurs, la formule $E_c = \\frac{1}{2} m v^2$ appartient à la **mécanique newtonienne** : elle n’est plus exacte pour des vitesses proches de celle de la lumière (mécanique relativiste).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p06_q4',
            type: 'mcq',
            prompt: 'Selon la documentation (p. 9), à quelle grandeur macroscopique d’un gaz chaud est directement liée l’énergie cinétique moyenne de ses molécules ?',
            options: [
              'À sa température',
              'Uniquement à sa couleur',
              'À sa résistance électrique interne',
              'À son indice de réfraction dans le vide',
            ],
            correctAnswerIndex: 0,
            explanation: 'Plus la température d’un gaz est élevée, plus l’énergie cinétique moyenne d’agitation de ses particules est grande (p. 9).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'p et Ec',
          stepTheme: 'Formule p²/(2m)',
          stepTitle: 'Relier quantité de mouvement p = mv et énergie cinétique',
          paragraphText:
            'Pour une particule de masse $m$ et de quantité de mouvement $p = mv$, on peut exprimer $E_c$ en fonction de $p$ : $E_c = \\frac{1}{2} m v^2 = \\frac{(mv)^2}{2m} = \\frac{p^2}{2m}$ (Documentation p. 9).',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p06_q5',
            type: 'mcq',
            prompt: 'En mécanique newtonienne, quelle relation exacte lie l’énergie cinétique $E_c$ et la norme $p = mv$ de la quantité de mouvement d’une particule de masse $m$ ?',
            options: ['Ec = p² / (2m)', 'Ec = p / (2m)', 'Ec = 2 m p²', 'Ec = p² · m'],
            correctAnswerIndex: 0,
            explanation: 'p = mv ⇒ p² / (2m) = m²v² / (2m) = ½mv² = Ec.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège ΔEc',
          stepTheme: 'Sens du mouvement',
          stepTitle: 'Toujours vérifier la cohérence physique du signe final',
          paragraphText:
            'Dans un bilan avec le TEC : si les forces motrices l’emportent sur les forces résistantes ($\\sum W > 0$), alors $\\Delta E_c > 0$ et le solide **accélère** ($v_2 > v_1$). Si $\\sum W < 0$, il **ralentit** ($v_2 < v_1$). Et sous un radical $\\sqrt{\\dots}$, la quantité doit impérativement être $\\ge 0$ !',
          exercise: {
            id: 'premiere_c_physique_l04_energie_cinetique_p06_q6',
            type: 'mcq',
            prompt: 'Un solide partant avec $E_{c,1} = 20\\,\\mathrm{J}$ subit des forces extérieures dont la somme des travaux vaut $\\sum W = +30\\,\\mathrm{J}$. Quelle est son énergie cinétique finale $E_{c,2}$ ?',
            options: ['50 J (le solide a accéléré)', '10 J', '−10 J', '600 J'],
            correctAnswerIndex: 0,
            explanation: 'ΔEc = Ec,2 − Ec,1 = ∑W ⇒ Ec,2 = Ec,1 + ∑W = 20 + 30 = 50 J (> 20 J : accélération).',
          },
        },
      ],
    },
  ]),
};
