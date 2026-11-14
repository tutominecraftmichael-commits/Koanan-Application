import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « PC 1ère CDE : Les lentilles minces » (format v2).
export const PHYSIQUE_1RE_CD_L06_LENTILLES_MINCES: CurriculumChapter = {
  id: 'premiere_c_physique_l06_lentilles_minces',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  // Numéro officiel inconnu (PDF sans « P n ») : placée après la réflexion-réfraction (P12)
  order: 13,
  title: 'Les lentilles minces',
  summary:
    'Lentilles convergentes et divergentes, centre optique, foyers principaux et secondaires, distance focale et vergence, théorème des vergences, construction graphique des images, formules de conjugaison et de grandissement, hygiène des lentilles de contact.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'PC 1ère CDE : Les lentilles minces.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Lentilles minces : classification géométrique et symboles
    // ========================================================================
    {
      id: 'premiere_c_physique_l06_lentilles_minces_p01',
      order: 1,
      title: 'Lentilles minces convergentes et divergentes : géométrie et symboles',
      summary:
        'Distinguer une lentille à bords minces (convergente) d’une lentille à bords épais (divergente) par sa forme, son effet sur un faisceau et son symbole normalisé.',
      conceptExplanation:
        "Une **lentille** est un milieu transparent (verre, plastique) limité par deux calottes sphériques, ou par une calotte sphérique et un plan.\n\n- **Lentille mince** : l’épaisseur $e$ (ou $l$) au centre est très petite devant les rayons de courbure $R_1$ et $R_2$ des faces et devant leur somme ($e \\ll R_1, R_2$).\n- **Axe optique principal** : droite passant par les centres de courbure des deux faces (ou perpendiculaire à la face plane et passant par le centre de la calotte sphérique) ; c’est un axe de symétrie de révolution.\n- **Deux familles de lentilles** :\n  1. **Lentilles convergentes (à bords minces)** : plus épaisses au centre qu’aux bords (biconvexe, plan-convexe, ménisque convergent). Elles font **converger** un faisceau cylindrique parallèle vers l’axe optique. Symbole : segment vertical terminé par des **flèches pointant vers l’extérieur**.\n  2. **Lentilles divergentes (à bords épais)** : plus minces au centre qu’aux bords (biconcave, plan-concave, ménisque divergent). Elles font **divergér** un faisceau parallèle en l’écartant de l’axe optique. Symbole : segment vertical terminé par des **flèches pointant vers l’intérieur** (en V inversé).",
      keyRule:
        'Bords minces (centre épais) = lentille convergente (flèches vers l’extérieur). Bords épais (centre mince) = lentille divergente (flèches vers l’intérieur).',
      formulas: [
        {
          name: 'Condition de lentille mince',
          formula: 'e \\ll R_1 \\quad\\text{et}\\quad e \\ll R_2',
          note: 'L’épaisseur au centre est négligeable devant les rayons de courbure',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Les deux types de lentilles minces et leurs symboles normalisés',
        svgContent: `<svg viewBox="0 0 360 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="155" rx="10" fill="#0f172a"/>
  <!-- Lentille convergente -->
  <text x="90" y="22" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">Convergente (bords minces)</text>
  <line x1="20" y1="80" x2="160" y2="80" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1"/>
  <path d="M 55 38 Q 70 80 55 122 Q 40 80 55 38 Z" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Symbole convergente -->
  <line x1="115" y1="36" x2="115" y2="124" stroke="#22c55e" stroke-width="2.5"/>
  <polyline points="109,44 115,36 121,44" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <polyline points="109,116 115,124 121,116" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <text x="125" y="75" fill="#e2e8f0" font-size="11">O</text>
  <text x="90" y="142" text-anchor="middle" fill="#94a3b8" font-size="10">C &gt; 0 (f′ &gt; 0)</text>

  <!-- Separateur -->
  <line x1="180" y1="15" x2="180" y2="145" stroke="#334155" stroke-width="1"/>

  <!-- Lentille divergente -->
  <text x="270" y="22" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Divergente (bords épais)</text>
  <line x1="200" y1="80" x2="340" y2="80" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1"/>
  <path d="M 225 38 L 245 38 Q 237 80 245 122 L 225 122 Q 233 80 225 38 Z" fill="#3b2f1e" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Symbole divergente -->
  <line x1="295" y1="36" x2="295" y2="124" stroke="#f59e0b" stroke-width="2.5"/>
  <polyline points="289,30 295,38 301,30" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <polyline points="289,130 295,122 301,130" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="305" y="75" fill="#e2e8f0" font-size="11">O</text>
  <text x="270" y="142" text-anchor="middle" fill="#94a3b8" font-size="10">C &lt; 0 (f′ &lt; 0)</text>
</svg>`,
        caption: 'Formes réelles et symboles normalisés des lentilles convergentes (gauche) et divergentes (droite).',
      },
      workedExample: {
        title: 'Identifier une lentille par son profil et son effet',
        statement:
          'On dispose de deux lentilles en verre : $(L_1)$ mesure $6\\,\\mathrm{mm}$ au centre et $1\\,\\mathrm{mm}$ au bord ; $(L_2)$ mesure $1\\,\\mathrm{mm}$ au centre et $5\\,\\mathrm{mm}$ au bord. Identifier leur nature et leur symbole.',
        methodSteps: [
          '1) (L_1) a les bords plus minces que le centre : c’est une lentille convergente (symbole à flèches tournées vers l’extérieur).',
          '2) (L_2) a les bords plus épais que le centre : c’est une lentille divergente (symbole à flèches tournées vers l’intérieur).',
        ],
        conclusion: '(L_1) est convergente (C > 0) et (L_2) est divergente (C < 0).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Lentille mince',
          stepTitle: 'Critère géométrique d’une lentille mince',
          paragraphText:
            'Une lentille est dite mince lorsque son épaisseur au centre est négligeable devant les rayons de courbure de ses deux faces. Son diamètre utile est également faible par rapport aux rayons de courbure.',
          exercise: {
            id: 'physique_1re_cd_l06_p01_q01',
            type: 'mcq',
            prompt: 'À quelle condition une lentille d’épaisseur au centre $e$ et de rayons de courbure $R_1$ et $R_2$ est-elle qualifiée de lentille mince ?',
            options: [
              '$e \\ll R_1$ et $e \\ll R_2$',
              '$e \\gg R_1 + R_2$',
              '$R_1 = R_2 = e$',
              'Elle possède obligatoirement deux faces planes',
            ],
            correctAnswerIndex: 0,
            explanation: 'Une lentille est mince si son épaisseur maximale au centre est très petite devant les rayons de courbure de ses faces sphériques.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Classification',
          stepTheme: 'Bords minces vs bords épais',
          stepTitle: 'Reconnaître une lentille convergente au toucher ou au profil',
          paragraphText:
            'Toutes les lentilles à **bords minces** (biconvexe, plan-convexe, ménisque convergent) sont plus épaisses au centre que sur les bords et ont un comportement convergent (dans l’air).',
          exercise: {
            id: 'physique_1re_cd_l06_p01_q02',
            type: 'mcq',
            prompt: 'Parmi les formes suivantes, laquelle correspond à une lentille **divergente** ?',
            options: [
              'Une lentille biconcave (plus mince au centre qu’aux bords)',
              'Une lentille biconvexe (plus épaisse au centre)',
              'Une lentille plan-convexe',
              'Un ménisque convergent',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les lentilles à bords épais (biconcave, plan-concave, ménisque divergent) sont plus minces au centre qu’aux bords : ce sont des lentilles divergentes.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Symbole',
          stepTheme: 'Représentation schématique',
          stepTitle: 'Associer le symbole normalisé au type de lentille',
          paragraphText:
            'En optique géométrique, on schématise une lentille mince par un segment vertical centré sur l’axe optique, portant aux extrémités des pointes tournées vers l’extérieur (convergente) ou vers l’intérieur (divergente).',
          exercise: {
            id: 'physique_1re_cd_l06_p01_q03',
            type: 'mcq',
            prompt: 'Comment reconnaît-on le symbole schématique d’une lentille **convergente** ?',
            options: [
              'Les flèches aux deux extrémités du segment pointent vers l’extérieur',
              'Les flèches aux deux extrémités pointent vers l’axe optique (vers l’intérieur)',
              'Le segment se termine par deux petits cercles',
              'Il est tracé en pointillés parallèles à l’axe optique',
            ],
            correctAnswerIndex: 0,
            explanation: 'Une lentille convergente est représentée par un trait vertical terminé par deux chevrons pointant vers l’extérieur (rappelant l’amincissement vers les bords).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Observation',
          stepTheme: 'Effet sur un faisceau parallèle',
          stepTitle: 'Action comparée sur des rayons parallèles à l’axe',
          paragraphText:
            'Lorsqu’un faisceau de lumière parallèle à l’axe optique traverse une lentille convergente, les rayons se rapprochent de l’axe et se croisent en un point. À travers une lentille divergente, ils s’écartent de l’axe optique.',
          exercise: {
            id: 'physique_1re_cd_l06_p01_q04',
            type: 'mcq',
            prompt: 'Un élève place un texte derrière une lentille posée près de la feuille : les lettres apparaissent nettement plus petites et droites quelle que soit la faible distance. Quel type de lentille observe-t-il ?',
            options: [
              'Une lentille divergente (à bords épais)',
              'Une lentille convergente (loupe)',
              'Un miroir plan',
              'Une lame à faces parallèles',
            ],
            correctAnswerIndex: 0,
            explanation: 'Une lentille convergente utilisée près d’un texte (loupe) le grossit ; une lentille divergente donne au contraire une image droite et rétrécie.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Ménisques convergent et divergent',
          stepTitle: 'Ne pas confondre les deux types de ménisques',
          paragraphText:
            'Un ménisque possède une face concave et une face convexe. Il est **convergent** si son centre est plus épais que ses bords, et **divergent** si ses bords sont plus épais que son centre (cas des verres correcteurs de myopie).',
          exercise: {
            id: 'physique_1re_cd_l06_p01_q05',
            type: 'mcq',
            prompt: 'Une lentille présente une face convexe et une face concave, mais elle est plus épaisse sur ses bords qu’en son centre. Quelle est sa nature ?',
            options: [
              'Un ménisque divergent',
              'Un ménisque convergent',
              'Une lentille biconvexe',
              'Une lentille plan-convexe',
            ],
            correctAnswerIndex: 0,
            explanation: 'C’est l’épaisseur comparée du centre et des bords qui tranche : bords plus épais que le centre = ménisque divergent.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exercice',
          stepTheme: 'Identification des éléments',
          stepTitle: 'Axe optique et symétrie des lentilles sphériques',
          paragraphText:
            'Pour une lentille biconvexe ou biconcave, l’axe optique joint les centres $C_1$ et $C_2$ des deux sphères. Pour une lentille plan-convexe ou plan-concave, l’axe optique passe par le centre de la calotte sphérique perpendiculairement à la face plane.',
          exercise: {
            id: 'physique_1re_cd_l06_p01_q06',
            type: 'mcq',
            prompt: 'Qu’est-ce que l’axe optique principal d’une lentille plan-convexe ?',
            options: [
              'La droite perpendiculaire à la face plane passant par le centre de courbure de la face sphérique',
              'La droite tangente au bord supérieur de la lentille',
              'La bissectrice d’un rayon incident quelconque',
              'Le plan contenant la face plane de la lentille',
            ],
            correctAnswerIndex: 0,
            explanation: 'L’axe optique est l’axe de symétrie de révolution : il est perpendiculaire à la face plane et passe par le centre de la sphère constituant l’autre face.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Centre optique, foyers principaux/secondaires et orientation
    // ========================================================================
    {
      id: 'premiere_c_physique_l06_lentilles_minces_p02',
      order: 2,
      title: 'Centre optique, foyers principaux, plans focaux et orientation',
      summary:
        'Définir le centre optique O, les foyers principaux F et F′ (réels ou virtuels), les foyers secondaires et l’orientation algébrique selon le sens de la lumière.',
      conceptExplanation:
        "Chaque lentille mince est caractérisée par des points remarquables situés sur son axe optique ou dans ses plans focaux.\n\n- **Centre optique $O$** : intersection de l’axe optique principal et de la lentille. Tout rayon lumineux passant par $O$ traverse la lentille **sans être dévié**.\n- **Foyer principal image $F'$** : point de l’axe optique où convergent (lentille convergente, foyer **réel**) ou d’où semblent provenir après émergence (lentille divergente, foyer **virtuel**) les rayons incidents parallèles à l’axe optique.\n- **Foyer principal objet $F$** : symétrique de $F'$ par rapport à $O$ ($OF = OF'$). Tout rayon incident passant par $F$ (convergente) ou dont le prolongement passe par $F$ (divergente) émerge **parallèle à l’axe optique**.\n- **Plans focaux $(\\pi)$ et $(\\pi')$ et foyers secondaires $\\psi, \\psi'$** : les plans perpendiculaires à l’axe optique passant par $F$ et $F'$ sont le **plan focal objet** $(\\pi)$ et le **plan focal image** $(\\pi')$. Un faisceau parallèle incliné par rapport à l’axe converge en un **foyer secondaire image** $\\psi' \\in (\\pi')$ (intersection avec $(\\pi')$ du rayon parallèle passant par $O$).\n- **Orientation des axes** : on choisit positivement le **sens de propagation de la lumière** (généralement de gauche à droite) avec pour origine $O$ :\n  - Lentille convergente : $F$ avant $O$ ($\\overline{OF} < 0$) et $F'$ après $O$ ($\\overline{OF'} > 0$).\n  - Lentille divergente : $F'$ avant $O$ ($\\overline{OF'} < 0$) et $F$ après $O$ ($\\overline{OF} > 0$).",
      keyRule:
        'Rayon par O -> non dévié. F et F′ sont symétriques par rapport à O : pour une convergente OF′ > 0 (F avant O, F′ après O) ; pour une divergente OF′ < 0 (F′ avant O, F après O).',
      formulas: [
        {
          name: 'Symétrie des foyers principaux',
          formula: '\\overline{OF} = -\\overline{OF\'}',
          note: 'Valable pour toute lentille mince baignant dans un même milieu (l’air)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Position des foyers F et F′ selon le type de lentille (lumière de gauche à droite)',
        svgContent: `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="160" rx="10" fill="#0f172a"/>
  <!-- Convergente en haut -->
  <text x="15" y="18" fill="#22c55e" font-size="10" font-weight="bold">Convergente : F réel avant O, F′ réel après O</text>
  <line x1="20" y1="50" x2="340" y2="50" stroke="#64748b" stroke-width="1"/>
  <polygon points="340,50 333,47 333,53" fill="#64748b"/>
  <line x1="180" y1="22" x2="180" y2="78" stroke="#22c55e" stroke-width="2"/>
  <polyline points="175,28 180,22 185,28" fill="none" stroke="#22c55e" stroke-width="2"/>
  <polyline points="175,72 180,78 185,72" fill="none" stroke="#22c55e" stroke-width="2"/>
  <!-- Rayons parallèles -->
  <line x1="35" y1="33" x2="180" y2="33" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="180" y1="33" x2="275" y2="58" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="35" y1="67" x2="180" y2="67" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="180" y1="67" x2="275" y2="42" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="115" cy="50" r="3" fill="#f59e0b"/><text x="115" y="64" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">F</text>
  <text x="186" y="62" fill="#e2e8f0" font-size="10">O</text>
  <circle cx="245" cy="50" r="3" fill="#22c55e"/><text x="245" y="64" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">F′</text>

  <!-- Divergente en bas -->
  <text x="15" y="96" fill="#f59e0b" font-size="10" font-weight="bold">Divergente : F′ virtuel avant O, F virtuel après O</text>
  <line x1="20" y1="128" x2="340" y2="128" stroke="#64748b" stroke-width="1"/>
  <polygon points="340,128 333,125 333,131" fill="#64748b"/>
  <line x1="180" y1="100" x2="180" y2="154" stroke="#f59e0b" stroke-width="2"/>
  <polyline points="175,95 180,101 185,95" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <polyline points="175,159 180,153 185,159" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <!-- Rayons divergents et prolongements -->
  <line x1="35" y1="112" x2="180" y2="112" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="115" y1="128" x2="180" y2="112" stroke="#38bdf8" stroke-dasharray="3 2" stroke-width="1.2"/>
  <line x1="180" y1="112" x2="265" y2="91" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="35" y1="144" x2="180" y2="144" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="115" y1="128" x2="180" y2="144" stroke="#38bdf8" stroke-dasharray="3 2" stroke-width="1.2"/>
  <line x1="180" y1="144" x2="265" y2="165" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="115" cy="128" r="3" fill="#f59e0b"/><text x="115" y="142" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">F′</text>
  <text x="186" y="140" fill="#e2e8f0" font-size="10">O</text>
  <circle cx="245" cy="128" r="3" fill="#22c55e"/><text x="245" y="142" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">F</text>
</svg>`,
        caption: 'Sens de la lumière de gauche à droite : F′ est après O pour une convergente (réel) et avant O pour une divergente (virtuel).',
      },
      workedExample: {
        title: 'Repérer les positions algébriques F, O, F′ et A',
        statement:
          'La lumière se propage de gauche à droite. Une lentille divergente a une distance focale de $20\\,\\mathrm{cm}$ en valeur absolue et un objet réel $AB$ est placé $30\\,\\mathrm{cm}$ avant $O$. Donner les abscisses $\\overline{OA}$, $\\overline{OF\'}$ et $\\overline{OF}$.',
        methodSteps: [
          '1) L’axe optique a pour origine O et est orienté dans le sens de la lumière (de gauche à droite).',
          '2) L’objet réel est avant O : OA = −30 cm.',
          '3) La lentille étant divergente, F′ est avant O (OF′ = −20 cm) et F est après O (OF = +20 cm).',
        ],
        conclusion: 'On a OA = −30 cm, OF′ = −20 cm et OF = +20 cm.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Centre optique O',
          stepTitle: 'Propriété fondamentale du centre optique',
          paragraphText:
            'Dans l’approximation des lentilles minces, le centre optique $O$ est assimilé au point d’intersection de la lentille et de l’axe optique : tout rayon passant par $O$ traverse la lentille sans déviation.',
          exercise: {
            id: 'physique_1re_cd_l06_p02_q01',
            type: 'mcq',
            prompt: 'Que subit un rayon lumineux incident qui passe par le centre optique $O$ d’une lentille mince divergente ?',
            options: [
              'Il traverse la lentille sans être dévié',
              'Il est dévié parallèlement à l’axe optique',
              'Il passe nécessairement par le foyer image $F\'$',
              'Il est réfléchi vers la source lumineuse',
            ],
            correctAnswerIndex: 0,
            explanation: 'Quel que soit le type de lentille mince (convergente ou divergente), tout rayon passant par $O$ émerge sans déviation.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Foyers',
          stepTheme: 'Foyer principal image F′',
          stepTitle: 'Image d’un objet très éloigné (Soleil, étoile)',
          paragraphText:
            'Un objet très éloigné envoie des rayons quasi parallèles à l’axe optique. À travers une lentille convergente, ces rayons se concentrent exactement au **foyer principal image $F\'$**, où l’on peut former une image nette sur un écran.',
          exercise: {
            id: 'physique_1re_cd_l06_p02_q02',
            type: 'mcq',
            prompt: 'Si l’on dirige une lentille convergente vers le Soleil pour concentrer sa lumière en un point brillant sur une feuille, à quelle distance de la lentille se trouve la feuille ?',
            options: [
              'À la distance focale $OF\'$',
              'À la distance $2\\,OF\'$',
              'Collée contre le centre optique $O$',
              'Entre $O$ et $F$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le Soleil étant pratiquement à l’infini, ses rayons arrivent parallèlement à l’axe et convergent dans le plan focal image, au foyer $F\'$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Inversion de F et F′',
          stepTitle: 'Ordre des points F, O et F′ sur une lentille divergente',
          paragraphText:
            'Contrairement à la lentille convergente (ordre $F, O, F\'$ dans le sens de la lumière), pour une lentille divergente le foyer principal image $F\'$ est situé **avant** la lentille et le foyer objet $F$ est situé **après** (ordre $F\', O, F$).',
          exercise: {
            id: 'physique_1re_cd_l06_p02_q03',
            type: 'mcq',
            prompt: 'La lumière se propage de gauche à droite à travers une lentille mince divergente de centre $O$. Dans quel ordre rencontre-t-on les points sur l’axe optique ?',
            options: [
              '$F\'$, puis $O$, puis $F$',
              '$F$, puis $O$, puis $F\'$',
              '$O$, puis $F$, puis $F\'$',
              '$F$, puis $F\'$, puis $O$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Pour une lentille divergente, $\\overline{OF\'} < 0$ ($F\'$ à gauche de $O$) et $\\overline{OF} > 0$ ($F$ à droite de $O$). Les deux foyers sont virtuels.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Plans focaux',
          stepTheme: 'Foyers secondaires',
          stepTitle: 'Rôle des foyers secondaires ψ et ψ′',
          paragraphText:
            'Un faisceau de rayons parallèles entre eux mais inclinés d’un angle $\\alpha$ par rapport à l’axe optique converge en un point $\\psi\'$ du **plan focal image** $(\\pi\')$. On trouve $\\psi\'$ en traçant le rayon parallèle passant par $O$ jusqu’à $(\\pi\')$.',
          exercise: {
            id: 'physique_1re_cd_l06_p02_q04',
            type: 'mcq',
            prompt: 'Où convergent des rayons parallèles entre eux mais non parallèles à l’axe optique après avoir traversé une lentille convergente ?',
            options: [
              'En un foyer secondaire image $\\psi\'$ appartenant au plan focal image $(\\pi\')$',
              'Au foyer principal image $F\'$',
              'Au centre optique $O$',
              'En un foyer secondaire objet $\\psi$ avant la lentille',
            ],
            correctAnswerIndex: 0,
            explanation: 'Tout faisceau parallèle incliné converge dans le plan focal image $(\\pi\')$ au foyer secondaire $\\psi\'$, aligné avec le rayon non dévié passant par $O$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Réel / Virtuel',
          stepTheme: 'Nature des foyers',
          stepTitle: 'Foyers réels (convergente) et virtuels (divergente)',
          paragraphText:
            'Les foyers d’une lentille convergente sont **réels** car les rayons lumineux y passent effectivement ; ceux d’une lentille divergente sont **virtuels** car seuls leurs prolongements géométriques s’y coupent.',
          exercise: {
            id: 'physique_1re_cd_l06_p02_q05',
            type: 'mcq',
            prompt: 'Peut-on observer directement le point image d’un objet à l’infini sur un écran placé au foyer $F\'$ d’une lentille divergente ?',
            options: [
              'Non, car $F\'$ est un foyer virtuel où les rayons émergents ne se croisent pas réellement',
              'Oui, à condition d’éloigner l’écran après la lentille',
              'Oui, en plaçant l’écran en $F$',
              'Oui, car tous les foyers sont réels',
            ],
            correctAnswerIndex: 0,
            explanation: 'Une image ou un foyer virtuel ne peut pas être recueilli sur un écran : seuls les prolongements des rayons divergents passent par $F\'$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Orientation',
          stepTheme: 'Mesures algébriques',
          stepTitle: 'Signe des abscisses sur l’axe optique orienté',
          paragraphText:
            'L’axe optique est orienté dans le **sens de propagation de la lumière** avec $O$ pour origine. Un objet réel placé avant la lentille a une abscisse $\\overline{OA} < 0$, tandis qu’une image réelle formée après la lentille a $\\overline{OA\'} > 0$.',
          exercise: {
            id: 'physique_1re_cd_l06_p02_q06',
            type: 'mcq',
            prompt: 'Un objet réel $AB$ est placé $50\\,\\mathrm{cm}$ devant une lentille mince (lumière de gauche à droite). Quelle est sa mesure algébrique $\\overline{OA}$ ?',
            options: [
              '$\\overline{OA} = -50\\,\\mathrm{cm}$',
              '$\\overline{OA} = +50\\,\\mathrm{cm}$',
              '$\\overline{OA} = -0{,}02\\,\\mathrm{cm}$',
              '$\\overline{OA} = +25\\,\\mathrm{cm}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Le sens positif étant celui de la lumière (de $A$ vers $O$), le vecteur $\\overrightarrow{OA}$ pointe dans le sens positif mais $A$ est avant $O$, donc la position de $A$ sur l’axe d’origine $O$ vaut $x_A = \\overline{OA} = -50\\,\\mathrm{cm}$.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Distance focale, vergence et théorème des vergences
    // ========================================================================
    {
      id: 'premiere_c_physique_l06_lentilles_minces_p03',
      order: 3,
      title: 'Distance focale, vergence et théorème des vergences',
      summary:
        'Calculer la vergence C = 1/OF′ en dioptries (δ), interpréter son signe et appliquer le théorème des vergences à deux lentilles accolées.',
      conceptExplanation:
        "La **vergence** mesure l’aptitude d’une lentille mince à faire converger ou diverger un faisceau lumineux.\n\n- **Distance focale** : c’est la mesure algébrique $f' = \\overline{OF'}$ (exprimée en **mètre**, $\\mathrm{m}$, dans le Système International) :\n  - $f' > 0$ pour une lentille convergente ;\n  - $f' < 0$ pour une lentille divergente.\n  *(On note aussi $f = OF = OF' > 0$ pour la distance focale non algébrique d’une lentille convergente.)*\n- **Vergence $C$** : c’est l’inverse de la distance focale image algébrique :\n  $$C = \\frac{1}{\\overline{OF'}} = \\frac{1}{f'}$$\n  - **Unité** : la **dioptrie**, notée $\\delta$ (ou $\\mathrm{m}^{-1}$), lorsque $\\overline{OF'}$ est exprimée en **mètres**.\n  - $C > 0$ pour une lentille convergente ; $C < 0$ pour une lentille divergente.\n- **Théorème des vergences (lentilles accolées)** : lorsqu’on accole deux lentilles minces $(L_1)$ et $(L_2)$ de vergences $C_1$ et $C_2$ ayant le même axe optique, l’association équivaut à une lentille mince unique de vergence :\n  $$C = C_1 + C_2 \\qquad \\text{soit} \\qquad \\frac{1}{f'} = \\frac{1}{f'_1} + \\frac{1}{f'_2}$$",
      keyRule:
        'C = 1 / OF′ (en dioptries δ, impérativement avec OF′ en mètres). Lentilles accolées : C = C1 + C2 (et NON f′ = f′1 + f′2).',
      formulas: [
        {
          name: 'Vergence d’une lentille mince',
          formula: 'C = \\frac{1}{\\overline{OF\'}} = \\frac{1}{f\'}',
          note: 'C en dioptries (δ ou m⁻¹) si f′ est en mètres (m)',
        },
        {
          name: 'Théorème des vergences',
          formula: 'C = C_1 + C_2 \\qquad\\text{et}\\qquad \\frac{1}{f\'} = \\frac{1}{f\'_1} + \\frac{1}{f\'_2}',
          note: 'Valable pour des lentilles minces coaxiales accolées',
        },
      ],
      workedExample: {
        title: 'Système de deux lentilles accolées (Ex 3 p. 8 corrigé)',
        statement:
          'On accole une lentille $(L_1)$ de vergence $C_1 = -5\\,\\delta$ et une lentille convergente $(L_2)$ de distance focale $f\'_2 = +20\\,\\mathrm{cm}$. Déterminer la vergence $C$ du système accolé.',
        methodSteps: [
          '1) Convertir f′_2 en mètres : f′_2 = +0,20 m, d’où C_2 = 1 / 0,20 = +5 δ.',
          '2) Appliquer le théorème des vergences : C = C_1 + C_2 = −5 + 5 = 0 δ.',
        ],
        conclusion: 'Les deux lentilles se compensent exactement : le système équivaut à une lame à faces parallèles (C = 0 δ).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Calcul de la vergence',
          stepTitle: 'Convertir la distance focale en mètres avant d’inverser',
          paragraphText:
            'La dioptrie ($\\delta$) équivaut au $\\mathrm{m}^{-1}$. Il faut donc **toujours convertir $\\overline{OF\'}$ en mètres** avant de calculer $C = 1/\\overline{OF\'}$.',
          exercise: {
            id: 'physique_1re_cd_l06_p03_q01',
            type: 'mcq',
            prompt: 'Une lentille mince convergente a une distance focale $f\' = +20\\,\\mathrm{cm}$. Quelle est sa vergence $C$ ?',
            options: ['$+5\\,\\delta$', '$+0{,}05\\,\\delta$', '$+20\\,\\delta$', '$-5\\,\\delta$'],
            correctAnswerIndex: 0,
            explanation: '$f\' = +20\\,\\mathrm{cm} = +0{,}20\\,\\mathrm{m}$, donc $C = \\frac{1}{0{,}20} = +5\\,\\delta$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Signe',
          stepTheme: 'Interprétation du signe de C',
          stepTitle: 'Vergence négative d’une lentille divergente',
          paragraphText:
            'Comme $\\overline{OF\'} < 0$ pour une lentille divergente, sa vergence est négative ($C < 0$). Plus $|C|$ est grand, plus la lentille dévie fortement la lumière.',
          exercise: {
            id: 'physique_1re_cd_l06_p03_q02',
            type: 'mcq',
            prompt: 'Une lentille porte l’indication $C = -5\\,\\delta$. Quelles sont sa nature et la position algébrique de son foyer image $\\overline{OF\'}$ ?',
            options: [
              'Lentille divergente avec $\\overline{OF\'} = -20\\,\\mathrm{cm}$',
              'Lentille convergente avec $\\overline{OF\'} = +20\\,\\mathrm{cm}$',
              'Lentille divergente avec $\\overline{OF\'} = -5\\,\\mathrm{cm}$',
              'Lentille divergente avec $\\overline{OF\'} = +20\\,\\mathrm{cm}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$C < 0$ indique une lentille divergente ; $\\overline{OF\'} = \\frac{1}{C} = \\frac{1}{-5} = -0{,}20\\,\\mathrm{m} = -20\\,\\mathrm{cm}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Théorème',
          stepTheme: 'Lentilles accolées',
          stepTitle: 'Addition algébrique des vergences',
          paragraphText:
            'Lorsque deux lentilles minces $(L_1)$ et $(L_2)$ sont accolées, leurs vergences s’additionnent algébriquement : $C = C_1 + C_2$.',
          exercise: {
            id: 'physique_1re_cd_l06_p03_q03',
            type: 'mcq',
            prompt: 'On accole une lentille convergente de vergence $C_1 = +10\\,\\delta$ et une lentille divergente de vergence $C_2 = -15\\,\\delta$. Quel système obtient-on ?',
            options: [
              'Une lentille divergente équivalente de vergence $C = -5\\,\\delta$ ($f\' = -20\\,\\mathrm{cm}$)',
              'Une lentille convergente équivalente de vergence $C = +25\\,\\delta$',
              'Une lentille convergente de vergence $C = +5\\,\\delta$',
              'Une lame à faces parallèles de vergence nulle',
            ],
            correctAnswerIndex: 0,
            explanation: '$C = C_1 + C_2 = +10 + (-15) = -5\\,\\delta < 0$ : l’ensemble est équivalent à une lentille divergente de distance focale $f\' = -0{,}20\\,\\mathrm{m} = -20\\,\\mathrm{cm}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Cas limite',
          stepTheme: 'Compensation exacte de vergence',
          stepTitle: 'Que donne l’accolement de −5 δ et +5 δ ?',
          paragraphText:
            'Si une lentille divergente de vergence $C_1 = -5\\,\\delta$ est accolée à une lentille convergente de distance focale $f_2 = +20\\,\\mathrm{cm}$ (soit $C_2 = +5\\,\\delta$), la vergence résultante est nulle ($C = 0\\,\\delta$) : l’association se comporte comme une lame à faces parallèles qui ne dévie pas un faisceau parallèle.',
          exercise: {
            id: 'physique_1re_cd_l06_p03_q04',
            type: 'mcq',
            prompt: 'On accole une lentille divergente $(L_1)$ de vergence $C_1 = -5\\,\\delta$ et une lentille convergente $(L_2)$ de distance focale $f\'_2 = +20\\,\\mathrm{cm}$. Que vaut la vergence $C$ du système accolé ?',
            options: ['$0\\,\\delta$', '$+10\\,\\delta$', '$-10\\,\\delta$', '$+15\\,\\delta$'],
            correctAnswerIndex: 0,
            explanation: '$C_2 = \\frac{1}{+0{,}20} = +5\\,\\delta$, donc $C = C_1 + C_2 = -5 + 5 = 0\\,\\delta$ (foyer rejeté à l’infini, équivalent à une lame à faces parallèles).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Distances focales accolées',
          stepTitle: 'Ne jamais additionner les distances focales',
          paragraphText:
            'Pour des lentilles accolées, ce sont les **vergences** qui s’additionnent ($C = C_1 + C_2$), et non les distances focales ($f\' \\neq f\'_1 + f\'_2$).',
          exercise: {
            id: 'physique_1re_cd_l06_p03_q05',
            type: 'mcq',
            prompt: 'Deux lentilles minces convergentes identiques de distance focale $f\'_1 = f\'_2 = +20\\,\\mathrm{cm}$ sont accolées. Quelle est la distance focale $f\'$ de la lentille équivalente ?',
            options: ['$+10\\,\\mathrm{cm}$', '$+40\\,\\mathrm{cm}$', '$+20\\,\\mathrm{cm}$', '$+5\\,\\mathrm{cm}$'],
            correctAnswerIndex: 0,
            explanation: '$C_1 = C_2 = +5\\,\\delta \\implies C = 5 + 5 = +10\\,\\delta$, donc $f\' = \\frac{1}{10} = +0{,}10\\,\\mathrm{m} = +10\\,\\mathrm{cm}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'methode',
          stepBadge: 'Comparaison',
          stepTheme: 'Comparer la convergence de deux lentilles',
          stepTitle: 'La lentille la plus convergente a la plus courte focale',
          paragraphText:
            'Plus la distance focale $|f\'|$ d’une lentille convergente est petite, plus sa vergence $C = 1/f\'$ est élevée et plus elle dévie fortement les rayons vers l’axe.',
          exercise: {
            id: 'physique_1re_cd_l06_p03_q06',
            type: 'mcq',
            prompt: 'Entre $(L_A)$ de distance focale $f\'_A = +10\\,\\mathrm{cm}$ et $(L_B)$ de distance focale $f\'_B = +25\\,\\mathrm{cm}$, laquelle est la plus convergente ?',
            options: [
              '$(L_A)$ car $C_A = +10\\,\\delta > C_B = +4\\,\\delta$',
              '$(L_B)$ car $25\\,\\mathrm{cm} > 10\\,\\mathrm{cm}$',
              'Elles ont la même vergence',
              'Impossible de comparer sans connaître leur diamètre',
            ],
            correctAnswerIndex: 0,
            explanation: '$C_A = 1/0{,}10 = +10\\,\\delta$ tandis que $C_B = 1/0{,}25 = +4\\,\\delta$. La plus courte focale correspond à la plus forte vergence.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Construction graphique des images et nature (réelle / virtuelle)
    // ========================================================================
    {
      id: 'premiere_c_physique_l06_lentilles_minces_p04',
      order: 4,
      title: 'Construction graphique d’une image : trois rayons particuliers',
      summary:
        'Tracer l’image A′B′ d’un objet AB à l’aide des trois rayons particuliers (convergente et divergente) et identifier trois instruments optiques courants.',
      conceptExplanation:
        "Pour trouver graphiquement l’image $B'$ d’un point objet $B$ hors de l’axe (avec $AB \\perp$ à l’axe optique), deux des trois **rayons particuliers** suffisent (le 3e sert de vérification) :\n\n1. **Rayon passant par le centre optique $O$** : il traverse la lentille **sans déviation**.\n2. **Rayon incident parallèle à l’axe optique** : il émerge en passant par le foyer image $F'$ (lentille convergente) ou en semblant provenir de $F'$ (lentille divergente).\n3. **Rayon incident passant par $F$ (convergente) ou dirigé vers $F$ (divergente)** : il émerge **parallèle à l’axe optique**.\n\n- **Trois configurations classiques du cours** :\n  - **Appareil photographique** (lentille convergente, objet au-delà de $2f'$, $|\\overline{OA}| > 2f'$) : image **réelle**, **renversée** et **plus petite** que l’objet.\n  - **Loupe** (lentille convergente, objet placé entre $F$ et $O$, $|\\overline{OA}| < f'$) : les rayons émergents divergent ; leurs prolongements donnent une image **virtuelle**, **droite** et **agrandie** (observée à travers la lentille).\n  - **Lunette de myope** (lentille divergente, objet réel devant la lentille) : image **virtuelle**, **droite** et **plus petite** située entre $F'$ et $O$.",
      keyRule:
        'Deux rayons particuliers suffisent pour placer B′ : (1) par O sans déviation ; (2) parallèle à l’axe -> passe par F′ (ou semble venir de F′) ; (3) par F (ou vers F) -> parallèle à l’axe.',
      formulas: [
        {
          name: 'Critère géométrique de réalité',
          formula: '\\text{Rayons émergents concourants} \\implies \\text{Image réelle } (\\overline{OA\'} > 0)',
          note: 'Prolongements arrière concourants -> image virtuelle (OA′ < 0)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Construction graphique : image réelle (haut) vs loupe virtuelle (bas)',
        svgContent: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="175" rx="10" fill="#0f172a"/>
  <!-- Cas 1 : objet au-dela de F -->
  <text x="14" y="16" fill="#38bdf8" font-size="10" font-weight="bold">1. Convergente avec |OA| &gt; f′ : image réelle renversée A′B′</text>
  <line x1="15" y1="52" x2="345" y2="52" stroke="#64748b" stroke-width="1"/>
  <line x1="175" y1="22" x2="175" y2="82" stroke="#22c55e" stroke-width="2"/>
  <circle cx="120" cy="52" r="2.5" fill="#f59e0b"/><text x="120" y="64" text-anchor="middle" fill="#f59e0b" font-size="9">F</text>
  <circle cx="230" cy="52" r="2.5" fill="#22c55e"/><text x="230" y="45" text-anchor="middle" fill="#22c55e" font-size="9">F′</text>
  <!-- Objet AB en x=55, y=52->30 -->
  <line x1="55" y1="52" x2="55" y2="30" stroke="#e2e8f0" stroke-width="2"/>
  <polygon points="55,27 52,33 58,33" fill="#e2e8f0"/>
  <text x="48" y="63" fill="#e2e8f0" font-size="9">A</text>
  <text x="48" y="29" fill="#e2e8f0" font-size="9">B</text>
  <!-- Rayons vers A'B' en x=277, y=52->70.3 -->
  <line x1="55" y1="30" x2="175" y2="30" stroke="#38bdf8" stroke-width="1.3"/>
  <line x1="175" y1="30" x2="277" y2="70.7" stroke="#38bdf8" stroke-width="1.3"/>
  <line x1="55" y1="30" x2="277" y2="70.7" stroke="#a855f7" stroke-width="1.3"/>
  <!-- Image A'B' -->
  <line x1="277" y1="52" x2="277" y2="69" stroke="#22c55e" stroke-width="2"/>
  <polygon points="277,72 274,66 280,66" fill="#22c55e"/>
  <text x="283" y="49" fill="#22c55e" font-size="9">A′</text>
  <text x="283" y="75" fill="#22c55e" font-size="9">B′</text>

  <!-- Cas 2 : Loupe (objet entre F et O) -->
  <text x="14" y="102" fill="#f59e0b" font-size="10" font-weight="bold">2. Loupe (|OA| &lt; f′) : image virtuelle droite agrandie</text>
  <line x1="15" y1="145" x2="345" y2="145" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="108" x2="190" y2="168" stroke="#22c55e" stroke-width="2"/>
  <circle cx="110" cy="145" r="2.5" fill="#f59e0b"/><text x="110" y="158" text-anchor="middle" fill="#f59e0b" font-size="9">F</text>
  <circle cx="270" cy="145" r="2.5" fill="#22c55e"/><text x="270" y="158" text-anchor="middle" fill="#22c55e" font-size="9">F′</text>
  <!-- Objet AB en x=142, y=145->127 (distance 48 < 80) -->
  <line x1="142" y1="145" x2="142" y2="128" stroke="#e2e8f0" stroke-width="2"/>
  <polygon points="142,125 139,131 145,131" fill="#e2e8f0"/>
  <text x="142" y="158" text-anchor="middle" fill="#e2e8f0" font-size="9">A</text>
  <text x="142" y="122" text-anchor="middle" fill="#e2e8f0" font-size="9">B</text>
  <!-- Image virtuelle A'B' en x=70, y=145->100 -->
  <line x1="70" y1="145" x2="70" y2="103" stroke="#f59e0b" stroke-dasharray="3 2" stroke-width="2"/>
  <text x="70" y="158" text-anchor="middle" fill="#f59e0b" font-size="9">A′</text>
  <text x="64" y="103" fill="#f59e0b" font-size="9">B′</text>
  <!-- Rayons et prolongements -->
  <line x1="142" y1="127" x2="190" y2="127" stroke="#38bdf8" stroke-width="1.3"/>
  <line x1="190" y1="127" x2="310" y2="154" stroke="#38bdf8" stroke-width="1.3"/>
  <line x1="70" y1="100" x2="190" y2="127" stroke="#38bdf8" stroke-dasharray="3 2" stroke-width="1.2"/>
  <line x1="142" y1="127" x2="290" y2="165" stroke="#a855f7" stroke-width="1.3"/>
  <line x1="70" y1="100" x2="142" y2="127" stroke="#a855f7" stroke-dasharray="3 2" stroke-width="1.2"/>
</svg>`,
        caption: 'En haut : image réelle renversée (|OA| > f′). En bas : effet loupe avec image virtuelle droite agrandie (|OA| < f′).',
      },
      workedExample: {
        title: 'Construction d’une image avec une loupe (Ex 6 p. 10)',
        statement:
          'Un objet $AB$ de $2\\,\\mathrm{cm}$ de hauteur est placé $4\\,\\mathrm{cm}$ devant une lentille convergente de distance focale $f\' = +10\\,\\mathrm{cm}$. Décrire la construction graphique de $A\'B\'$.',
        methodSteps: [
          '1) L’objet est entre F (à −10 cm) et O : tracer le rayon BO qui n’est pas dévié.',
          '2) Tracer le rayon issu de B parallèle à l’axe optique : il émerge en passant par F′ (+10 cm).',
          '3) Les deux rayons émergents divergent après la lentille : prolonger en pointillés vers l’arrière pour trouver leur intersection B′.',
        ],
        conclusion: 'On obtient une image virtuelle A′B′, droite et agrandie, située du même côté que l’objet.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Construction',
          stepTheme: 'Les trois rayons particuliers',
          stepTitle: 'Tracer les rayons particuliers pour une lentille convergente',
          paragraphText:
            'Un rayon parallèle à l’axe optique émerge en passant par $F\'$ ; un rayon passant par $F$ émerge parallèle à l’axe optique ; un rayon passant par $O$ n’est pas dévié. L’intersection des rayons émergents (ou de leurs prolongements) donne $B\'$.',
          exercise: {
            id: 'physique_1re_cd_l06_p04_q01',
            type: 'mcq',
            prompt: 'Pour une lentille mince **convergente**, comment émerge un rayon incident qui passe par le foyer principal objet $F$ ?',
            options: [
              'Parallèlement à l’axe optique',
              'En passant par le foyer image $F\'$',
              'Sans être dévié',
              'En revenant vers $F$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Tout rayon incident passant par le foyer objet $F$ ressort de la lentille parallèlement à l’axe optique principal.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Rayons particuliers sur lentille divergente',
          stepTitle: 'Tracer un rayon émergent sur une lentille divergente',
          paragraphText:
            'Avec une lentille divergente, le rayon incident parallèle à l’axe émerge en s’écartant de l’axe comme s’il provenait du foyer virtuel $F\'$ (situé avant $O$) ; le rayon dirigé vers $F$ (situé après $O$) émerge parallèle à l’axe.',
          exercise: {
            id: 'physique_1re_cd_l06_p04_q02',
            type: 'mcq',
            prompt: 'Un rayon incident se dirige vers le foyer objet $F$ d’une lentille mince **divergente** (situé après la lentille). Comment émerge-t-il ?',
            options: [
              'Parallèlement à l’axe optique',
              'En passant par $F\'$',
              'Sans aucune déviation',
              'En se rabattant vers $F$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Par définition du foyer objet $F$, un rayon incident dont le prolongement passe par $F$ ressort parallèlement à l’axe optique.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Instrument',
          stepTheme: 'Fonctionnement de la loupe',
          stepTitle: 'Position de l’objet pour utiliser une lentille comme loupe',
          paragraphText:
            'Une loupe est une lentille convergente devant laquelle on place l’objet **entre le foyer objet $F$ et le centre optique $O$** ($|\\overline{OA}| < f\'$). Les rayons émergents divergent mais leurs prolongements forment une image virtuelle, droite et plus grande.',
          exercise: {
            id: 'physique_1re_cd_l06_p04_q03',
            type: 'mcq',
            prompt: 'Une lentille convergente de distance focale $f\' = 10\\,\\mathrm{cm}$ sert de loupe pour lire une petite inscription placée à $4\\,\\mathrm{cm}$ devant elle. Quelles sont les caractéristiques de l’image observée ?',
            options: [
              'Virtuelle, droite et plus grande que l’objet',
              'Réelle, renversée et plus petite que l’objet',
              'Réelle, droite et de même taille que l’objet',
              'Rejetée à l’infini',
            ],
            correctAnswerIndex: 0,
            explanation: 'Comme $4\\,\\mathrm{cm} < f\' = 10\\,\\mathrm{cm}$, l’objet est entre $F$ et $O$ : l’image est **virtuelle, droite et agrandie**.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Instrument',
          stepTheme: 'Appareil photographique et projecteur',
          stepTitle: 'Cas de l’objet réel au-delà de F',
          paragraphText:
            'Si l’objet réel $AB$ est placé avant $F$ ($|\\overline{OA}| > f\'$ devant une convergente), l’image $A\'B\'$ se forme après $F\'$ sur un capteur ou un écran : elle est **réelle et renversée**. Elle est plus petite si $|\\overline{OA}| > 2f\'$ (appareil photo) et plus grande si $f\' < |\\overline{OA}| < 2f\'$ (vidéoprojecteur).',
          exercise: {
            id: 'physique_1re_cd_l06_p04_q04',
            type: 'mcq',
            prompt: 'Un objet réel de $10\\,\\mathrm{cm}$ est placé à $50\\,\\mathrm{cm}$ devant une lentille convergente de distance focale $f\' = 20\\,\\mathrm{cm}$. Que peut-on dire immédiatement de l’image avant tout calcul ?',
            options: [
              'Elle est réelle, renversée et plus petite que l’objet car $50\\,\\mathrm{cm} > 2f\'$',
              'Elle est virtuelle, droite et agrandie',
              'Elle est réelle, droite et de même taille',
              'Aucune image ne peut se former',
            ],
            correctAnswerIndex: 0,
            explanation: 'Ici $2f\' = 40\\,\\mathrm{cm}$ et $OA = 50\\,\\mathrm{cm} > 2f\'$ : l’image est réelle, renversée et réduite (située entre $F\'$ et $2f\'$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Objet réel devant lentille divergente',
          stepTitle: 'Nature de l’image donnée par une lentille divergente',
          paragraphText:
            'Pour tout objet réel placé devant une lentille mince divergente ($\\overline{OA} < 0$), les rayons émergents s’écartent toujours davantage : l’image est systématiquement **virtuelle, droite et plus petite** que l’objet, située entre $F\'$ et $O$.',
          exercise: {
            id: 'physique_1re_cd_l06_p04_q05',
            type: 'mcq',
            prompt: 'Lorsqu’on observe un objet réel quelconque à travers une lentille divergente, comment est toujours son image ?',
            options: [
              'Virtuelle, droite et plus petite que l’objet',
              'Réelle, renversée et plus grande que l’objet',
              'Virtuelle, renversée et agrandie',
              'Réelle et droite',
            ],
            correctAnswerIndex: 0,
            explanation: 'Une lentille divergente ne peut donner d’un objet réel qu’une image virtuelle, droite et rétrécie (d’où son usage pour corriger la myopie).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Cas spécial',
          stepTheme: 'Objet au foyer F ou objet virtuel',
          stepTitle: 'Que devient l’image si l’objet est placé au foyer objet F ?',
          paragraphText:
            'Si le point objet $A$ est confondu avec le foyer objet $F$ ($\\overline{OA} = \\overline{OF}$), tous les rayons issus d’un point de $AB$ émergent parallèles entre eux : l’image est rejetée **à l’infini** (principe du collimateur ou du phare).',
          exercise: {
            id: 'physique_1re_cd_l06_p04_q06',
            type: 'mcq',
            prompt: 'Où se forme l’image d’un objet réel placé exactement dans le plan focal objet d’une lentille convergente ($\\overline{OA} = -f\'$) ?',
            options: [
              'À l’infini (faisceau émergent parallèle)',
              'Sur la lentille au centre optique $O$',
              'Au foyer image $F\'$',
              'À une distance $2f\'$ après la lentille',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les rayons issus d’un point du plan focal objet émergent parallèles entre eux : l’image se forme à l’infini.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Formule de conjugaison de Descartes et grandissement
    // ========================================================================
    {
      id: 'premiere_c_physique_l06_lentilles_minces_p05',
      order: 5,
      title: 'Formule de conjugaison et grandissement : calculs algébriques',
      summary:
        'Appliquer la formule de conjugaison 1/OA′ − 1/OA = 1/OF′ et la relation de grandissement γ = A′B′/AB = OA′/OA avec leurs signes exacts.',
      conceptExplanation:
        "Dans les conditions de Gauss (rayons peu inclinés et proches de l’axe optique), les positions et tailles de l’objet $AB$ et de son image $A'B'$ sont reliées par deux relations algébriques exactes.\n\n- **Formule de conjugaison de Descartes** (en mesures algébriques d’origine $O$) :\n  $$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}} = C$$\n  *(Remarque : en grandeurs positives non algébriques avec $p = OA$ avant la lentille et $p' = OA'$ après la lentille pour un objet réel et une image réelle, cela s’écrit $\\frac{1}{p} + \\frac{1}{p'} = \\frac{1}{f'}$.)*\n- **Grandissement $\\gamma$** (sans unité) :\n  $$\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$$\n  - **Signe de $\\gamma$** : $\\gamma > 0 \\implies$ image **droite** (même sens que l’objet) ; $\\gamma < 0 \\implies$ image **renversée** (sens contraire).\n  - **Valeur absolue $|\\gamma|$** : $|\\gamma| > 1 \\implies$ image **agrandie** ; $|\\gamma| < 1 \\implies$ image **rétrécie** ; $|\\gamma| = 1 \\implies$ même taille que l’objet.\n- **Lien de cohérence** : toutes les longueurs ($\\overline{OA}$, $\\overline{OA'}$, $\\overline{OF'}$) peuvent être exprimées en $\\mathrm{cm}$ dans les formules de conjugaison et de grandissement, à condition d’utiliser **la même unité** partout (mais en **mètres** pour calculer $C$ en dioptries).",
      keyRule:
        'Conjugaison : 1/OA′ − 1/OA = 1/OF′ = C. Grandissement : γ = A′B′/AB = OA′/OA (γ > 0 droite, γ < 0 renversée ; |γ| > 1 agrandie, |γ| < 1 rétrécie).',
      formulas: [
        {
          name: 'Formule de conjugaison de Descartes',
          formula: '\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF\'}} = C',
          note: 'Attention au signe MOINS devant 1/OA en mesures algébriques !',
        },
        {
          name: 'Grandissement linéaire',
          formula: '\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\frac{\\overline{OA\'}}{\\overline{OA}}',
          note: 'Grandeur algébrique sans unité',
        },
      ],
      workedExample: {
        title: 'Calcul par la formule de conjugaison (Situation / Ex 5)',
        statement:
          'Un objet réel $AB = 10\\,\\mathrm{cm}$ est placé à $50\\,\\mathrm{cm}$ devant une lentille convergente de distance focale $f\' = +20\\,\\mathrm{cm}$. Calculer la position $\\overline{OA\'}$, le grandissement $\\gamma$ et la taille de l’image.',
        methodSteps: [
          '1) Données algébriques : OA = −50 cm et OF′ = +20 cm.',
          '2) Formule de Descartes : 1/OA′ = 1/OF′ + 1/OA = 1/20 − 1/50 = 3/100 ⇒ OA′ = +100/3 ≈ +33,3 cm.',
          '3) Grandissement : γ = OA′/OA = (100/3)/(−50) = −2/3 ≈ −0,67, donc A′B′ = γ·AB ≈ −6,67 cm.',
        ],
        conclusion: 'L’image est réelle (OA′ = +33,3 cm), renversée (γ < 0) et mesure environ 6,67 cm.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul d’image réelle',
          stepTitle: 'Appliquer Descartes avec objet réel et lentille convergente',
          paragraphText:
            'Si un objet réel est à $50\\,\\mathrm{cm}$ devant une lentille convergente ($\\overline{OA} = -50\\,\\mathrm{cm}$, $\\overline{OF\'} = +20\\,\\mathrm{cm}$), on calcule $\\frac{1}{\\overline{OA\'}} = \\frac{1}{\\overline{OF\'}} + \\frac{1}{\\overline{OA}} = \\frac{1}{20} - \\frac{1}{50} = \\frac{3}{100}$.',
          exercise: {
            id: 'physique_1re_cd_l06_p05_q01',
            type: 'mcq',
            prompt: 'Un objet réel de hauteur $AB = 10\\,\\mathrm{cm}$ est placé à $50\\,\\mathrm{cm}$ devant une lentille convergente de distance focale $f\' = +20\\,\\mathrm{cm}$. Quelles sont la position $\\overline{OA\'}$ et le grandissement $\\gamma$ de l’image ?',
            options: [
              '$\\overline{OA\'} \\approx +33{,}3\\,\\mathrm{cm}$ et $\\gamma = -2/3 \\approx -0{,}67$',
              '$\\overline{OA\'} = +14{,}3\\,\\mathrm{cm}$ et $\\gamma = +0{,}29$',
              '$\\overline{OA\'} = +33{,}3\\,\\mathrm{cm}$ et $\\gamma = -0{,}75$',
              '$\\overline{OA\'} = -33{,}3\\,\\mathrm{cm}$ et $\\gamma = +0{,}67$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\frac{1}{\\overline{OA\'}} = \\frac{1}{20} + \\frac{1}{-50} = \\frac{5 - 2}{100} = \\frac{3}{100}$, donc $\\overline{OA\'} = \\frac{100}{3} \\approx +33{,}3\\,\\mathrm{cm}$ (image réelle) et $\\gamma = \\frac{100/3}{-50} = -\\frac{2}{3} \\approx -0{,}67$ (image renversée de $6{,}67\\,\\mathrm{cm}$).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Signe dans Descartes',
          stepTitle: 'L’erreur classique de signe devant 1/OA',
          paragraphText:
            'Une erreur très fréquente consiste à remplacer $\\overline{OA}$ par $+8\\,\\mathrm{cm}$ au lieu de $-8\\,\\mathrm{cm}$ dans $\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF\'}}$, ce qui inverse totalement la position et la nature de l’image.',
          exercise: {
            id: 'physique_1re_cd_l06_p05_q02',
            type: 'mcq',
            prompt: 'Un objet réel de $2\\,\\mathrm{cm}$ de hauteur est placé à $8\\,\\mathrm{cm}$ devant une lentille convergente de distance focale $f\' = +10\\,\\mathrm{cm}$. Quelle est la position exacte $\\overline{OA\'}$ de son image ?',
            options: [
              '$\\overline{OA\'} = -40\\,\\mathrm{cm}$ (image virtuelle devant la lentille)',
              '$\\overline{OA\'} = +40\\,\\mathrm{cm}$ (image réelle après la lentille)',
              '$\\overline{OA\'} = +4{,}44\\,\\mathrm{cm}$',
              '$\\overline{OA\'} = -4{,}44\\,\\mathrm{cm}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Avec $\\overline{OA} = -8\\,\\mathrm{cm}$ et $\\overline{OF\'} = +10\\,\\mathrm{cm}$ : $\\frac{1}{\\overline{OA\'}} = \\frac{1}{10} + \\frac{1}{-8} = \\frac{4 - 5}{40} = -\\frac{1}{40}$, donc $\\overline{OA\'} = -40\\,\\mathrm{cm}$ (image virtuelle, car $8\\,\\mathrm{cm} < f\'$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Grandissement',
          stepTheme: 'Sens et taille de l’image',
          stepTitle: 'Calculer la taille algébrique A′B′ à partir de γ',
          paragraphText:
            'Une fois $\\overline{OA\'}$ connu, on calcule $\\gamma = \\frac{\\overline{OA\'}}{\\overline{OA}}$, puis $\\overline{A\'B\'} = \\gamma \\cdot \\overline{AB}$. Si $\\overline{AB} > 0$ (objet dirigé vers le haut) et $\\gamma > 0$, l’image est dirigée vers le haut (droite).',
          exercise: {
            id: 'physique_1re_cd_l06_p05_q03',
            type: 'mcq',
            prompt: 'Dans le cas précédent ($\\overline{AB} = +2\\,\\mathrm{cm}$, $\\overline{OA} = -8\\,\\mathrm{cm}$, $\\overline{OA\'} = -40\\,\\mathrm{cm}$), que valent $\\gamma$ et $\\overline{A\'B\'}$ ?',
            options: [
              '$\\gamma = +5$ et $\\overline{A\'B\'} = +10\\,\\mathrm{cm}$ (droite, 5 fois plus grande)',
              '$\\gamma = -5$ et $\\overline{A\'B\'} = -10\\,\\mathrm{cm}$ (renversée)',
              '$\\gamma = +0{,}2$ et $\\overline{A\'B\'} = +0{,}4\\,\\mathrm{cm}$ (rétrécie)',
              '$\\gamma = +4$ et $\\overline{A\'B\'} = +8\\,\\mathrm{cm}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\gamma = \\frac{\\overline{OA\'}}{\\overline{OA}} = \\frac{-40}{-8} = +5 > 0$ (image droite), donc $\\overline{A\'B\'} = 5 \\times 2 = +10\\,\\mathrm{cm}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Activité',
          stepTheme: 'Loupe de distance focale 10 cm',
          stepTitle: 'Calcul algébrique pour une loupe',
          paragraphText:
            'Dans l’exercice d’application du cours (Ex 6), une lentille convergente de focale $f\' = 10\\,\\mathrm{cm}$ observe un objet de $2\\,\\mathrm{cm}$ placé à $4\\,\\mathrm{cm}$ ($\\overline{OA} = -4\\,\\mathrm{cm}$). La relation de Descartes donne $\\overline{OA\'} = -20/3\\,\\mathrm{cm}$ et $\\gamma = +5/3$.',
          exercise: {
            id: 'physique_1re_cd_l06_p05_q04',
            type: 'mcq',
            prompt: 'Une lentille convergente ($f\' = +10\\,\\mathrm{cm}$) est placée à $4\\,\\mathrm{cm}$ d’un objet de $2\\,\\mathrm{cm}$ de hauteur ($\\overline{OA} = -4\\,\\mathrm{cm}$). Quelles sont la position et la hauteur de l’image ?',
            options: [
              '$\\overline{OA\'} \\approx -6{,}67\\,\\mathrm{cm}$ et $A\'B\' \\approx 3{,}33\\,\\mathrm{cm}$ ($\\gamma \\approx +1{,}67$)',
              '$\\overline{OA\'} \\approx +6{,}67\\,\\mathrm{cm}$ et $A\'B\' \\approx 3{,}33\\,\\mathrm{cm}$',
              '$\\overline{OA\'} = -2{,}86\\,\\mathrm{cm}$ et $A\'B\' = 1{,}43\\,\\mathrm{cm}$',
              '$\\overline{OA\'} = -14\\,\\mathrm{cm}$ et $A\'B\' = 7\\,\\mathrm{cm}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\frac{1}{\\overline{OA\'}} = \\frac{1}{10} - \\frac{1}{4} = \\frac{2 - 5}{20} = -\\frac{3}{20}$, d’où $\\overline{OA\'} = -\\frac{20}{3} \\approx -6{,}67\\,\\mathrm{cm}$, $\\gamma = \\frac{-20/3}{-4} = +\\frac{5}{3} \\approx +1{,}67$ et $A\'B\' = \\frac{10}{3} \\approx 3{,}33\\,\\mathrm{cm}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Retrouver la distance focale f′',
          stepTitle: 'Calculer C et f′ à partir de OA et OA′',
          paragraphText:
            'Lorsqu’on mesure expérimentalement la position de l’objet $\\overline{OA}$ et celle de l’image nette sur l’écran $\\overline{OA\'}$, la formule de conjugaison permet directement de déterminer $C = \\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}}$ (avec $\\overline{OA}, \\overline{OA\'}$ en $\\mathrm{m}$).',
          exercise: {
            id: 'physique_1re_cd_l06_p05_q05',
            type: 'mcq',
            prompt: 'Un objet réel situé à $30\\,\\mathrm{cm}$ devant une lentille forme une image nette sur un écran placé à $60\\,\\mathrm{cm}$ derrière la lentille. Quelles sont la distance focale $f\'$ et la vergence $C$ de cette lentille ?',
            options: [
              '$f\' = +20\\,\\mathrm{cm}$ et $C = +5\\,\\delta$',
              '$f\' = +60\\,\\mathrm{cm}$ et $C = +1{,}67\\,\\delta$',
              '$f\' = -20\\,\\mathrm{cm}$ et $C = -5\\,\\delta$',
              '$f\' = +45\\,\\mathrm{cm}$ et $C = +2{,}22\\,\\delta$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\overline{OA} = -0{,}30\\,\\mathrm{m}$ et $\\overline{OA\'} = +0{,}60\\,\\mathrm{m}$. $C = \\frac{1}{0{,}60} - \\frac{1}{-0{,}30} = \\frac{1 + 2}{0{,}60} = +5\\,\\delta$, donc $f\' = +0{,}20\\,\\mathrm{m} = +20\\,\\mathrm{cm}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Lentille divergente en calcul',
          stepTitle: 'Appliquer Descartes avec une lentille divergente',
          paragraphText:
            'Avec une lentille divergente, on n’oublie pas que $\\overline{OF\'} < 0$ (ou $C < 0$) dans $\\frac{1}{\\overline{OA\'}} = C + \\frac{1}{\\overline{OA}}$. Comme $C < 0$ et $\\overline{OA} < 0$, $\\frac{1}{\\overline{OA\'}}$ est toujours négatif pour un objet réel.',
          exercise: {
            id: 'physique_1re_cd_l06_p05_q06',
            type: 'mcq',
            prompt: 'Un objet réel est placé à $20\\,\\mathrm{cm}$ devant une lentille divergente de vergence $C = -5\\,\\delta$ ($f\' = -20\\,\\mathrm{cm}$). Où se forme l’image et que vaut son grandissement ?',
            options: [
              '$\\overline{OA\'} = -10\\,\\mathrm{cm}$ et $\\gamma = +0{,}5$',
              '$\\overline{OA\'} = +10\\,\\mathrm{cm}$ et $\\gamma = -0{,}5$',
              '$\\overline{OA\'} = -20\\,\\mathrm{cm}$ et $\\gamma = +1$',
              'Image rejetée à l’infini',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\frac{1}{\\overline{OA\'}} = \\frac{1}{-20} + \\frac{1}{-20} = -\\frac{2}{20} = -\\frac{1}{10}$, donc $\\overline{OA\'} = -10\\,\\mathrm{cm}$ et $\\gamma = \\frac{-10}{-20} = +0{,}5$ (image virtuelle, droite, deux fois plus petite).',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Objets/images virtuels, associations et lentilles de contact
    // ========================================================================
    {
      id: 'premiere_c_physique_l06_lentilles_minces_p06',
      order: 6,
      title: 'Systèmes composés, objets virtuels et lentilles de contact',
      summary:
        'Traiter un objet virtuel ou un système de deux lentilles accolées et connaître les règles d’hygiène et d’usage des lentilles de contact (Documentation).',
      conceptExplanation:
        "En pratique et dans les exercices approfondis (Ex 4, Ex 7 et Documentation p. 11–14), on rencontre des objets virtuels, des lentilles accolées ainsi que des applications oculaires.\n\n- **Objet virtuel ($\\overline{OA} > 0$) et image réelle** : un objet est **virtuel** lorsque les rayons incidents convergent vers un point $A$ situé **après** la lentille ($\\overline{OA} > 0$), généralement parce qu’une première lentille forme déjà une image intermédiaire après la seconde lentille.\n  - Une lentille **convergente** transforme toujours un objet virtuel en une **image réelle, droite et plus petite**, située entre $O$ et $F'$.\n  - Une lentille **divergente** peut donner d’un objet virtuel une **image réelle** si cet objet virtuel est placé entre $O$ et $F$ ($0 < \\overline{OA} < |f'|$) ; sinon ($\\overline{OA} > |f'|$), l’image est virtuelle.\n- **Effet d’un accolement correcteur** : si l’on accole une lentille divergente de forte vergence ($C_2 = -15\\,\\delta$) à une lentille convergente ($C_1 = +10\\,\\delta$), la vergence résultante devient négative ($C = -5\\,\\delta$) : l’image d’un objet réel à $8\\,\\mathrm{cm}$ devient alors **virtuelle, droite et rétrécie** ($\\overline{OA'} \\approx -5{,}71\\,\\mathrm{cm}$, $\\gamma \\approx +0{,}71$).\n- **Lentilles de contact (Documentation p. 13–14)** : ce sont des lentilles minces correctrices (myopie, hypermétropie, presbytie) posées directement sur le film lacrymal de la cornée. Règles essentielles d’hygiène :\n  - Se laver et sécher soigneusement les mains avant toute manipulation.\n  - Ne **jamais** utiliser d’eau du robinet ni de salive pour nettoyer ou mouiller une lentille (risque d’infections oculaires graves) ; utiliser uniquement une solution d’entretien adaptée.\n  - Ne **jamais** dormir avec ses lentilles sauf avis médical spécifique pour des lentilles prévues à cet effet, et ne jamais prêter ses lentilles.",
      keyRule:
        'Objet virtuel (OA > 0) : une lentille divergente peut donner une image réelle si 0 < OA < OF. Pour les lentilles de contact : mains propres, solution stérile dédiée uniquement (jamais d’eau du robinet ni de salive), jamais de prêt.',
      formulas: [
        {
          name: 'Condition d’image réelle avec lentille divergente',
          formula: '0 < \\overline{OA} < \\overline{OF}',
          note: 'Objet virtuel situé entre O et le foyer objet virtuel F',
        },
      ],
      workedExample: {
        title: 'Correction d’une loupe par une lentille divergente (Ex 4 corrigé)',
        statement:
          'Une lentille $(L_1)$ ($f\'_1 = +10\\,\\mathrm{cm}$) observe un objet à $8\\,\\mathrm{cm}$ ($\\overline{OA} = -8\\,\\mathrm{cm}$). On lui accole $(L_2)$ de vergence $C_2 = -15\\,\\delta$. Calculer la nouvelle image.',
        methodSteps: [
          '1) Avant accolement : 1/OA′ = 1/10 − 1/8 = −1/40 ⇒ OA′ = −40 cm et γ = (−40)/(−8) = +5 (virtuelle, droite, agrandie).',
          '2) Après accolement : C = C_1 + C_2 = +10 − 15 = −5 δ (système divergent).',
          '3) Nouvelle position : 1/OA′ = C + 1/OA = −5 + 1/(−0,08) = −17,5 m⁻¹ ⇒ OA′ ≈ −5,71 cm et γ = (−5,71)/(−8) ≈ +0,71.',
        ],
        conclusion: 'L’accolement transforme le système en lentille divergente : l’image reste virtuelle et droite mais devient plus petite que l’objet.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Concept',
          stepTheme: 'Objet virtuel',
          stepTitle: 'Reconnaître un objet virtuel dans un système optique',
          paragraphText:
            'Un objet $AB$ est **virtuel** pour une lentille lorsqu’un faisceau convergent est intercepté par la lentille avant que les rayons ne se croisent en $B$ : l’abscisse $\\overline{OA}$ est alors positive ($\\overline{OA} > 0$).',
          exercise: {
            id: 'physique_1re_cd_l06_p06_q01',
            type: 'mcq',
            prompt: 'Dans le repère orienté dans le sens de propagation de la lumière (origine $O$), quel signe possède la position $\\overline{OA}$ d’un **objet virtuel** ?',
            options: [
              '$\\overline{OA} > 0$ (situé après la lentille)',
              '$\\overline{OA} < 0$ (situé avant la lentille)',
              '$\\overline{OA} = 0$',
              'Le signe dépend uniquement de la vergence',
            ],
            correctAnswerIndex: 0,
            explanation: 'Un objet réel est en amont de la lentille ($\\overline{OA} < 0$) ; un objet virtuel correspond au point de convergence situé en aval de la lentille ($\\overline{OA} > 0$).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'exemple',
          stepBadge: 'Synthèse',
          stepTheme: 'Modification par lentille accolée',
          stepTitle: 'Transformation d’une loupe en système divergent (Ex 4)',
          paragraphText:
            'Une lentille $(L_1)$ de focale $f\'_1 = +10\\,\\mathrm{cm}$ ($C_1 = +10\\,\\delta$) donne d’un objet à $8\\,\\mathrm{cm}$ une image virtuelle agrandie ($\\gamma = +5$). Si on lui accole $(L_2)$ de vergence $C_2 = -15\\,\\delta$, le système a pour vergence $C = -5\\,\\delta$.',
          exercise: {
            id: 'physique_1re_cd_l06_p06_q02',
            type: 'mcq',
            prompt: 'On accole à $(L_1)$ ($f\'_1 = +10\\,\\mathrm{cm}$) une lentille $(L_2)$ de vergence $C_2 = -15\\,\\delta$ pour observer le même objet placé à $8\\,\\mathrm{cm}$ ($\\overline{OA} = -0{,}08\\,\\mathrm{m}$). Comment change l’image par rapport à $(L_1)$ seule ?',
            options: [
              'Elle reste virtuelle et droite, mais devient plus petite que l’objet ($\\gamma \\approx +0{,}71$)',
              'Elle devient réelle et renversée',
              'Elle reste agrandie avec un grandissement $\\gamma = +5$',
              'Elle disparaît à l’infini',
            ],
            correctAnswerIndex: 0,
            explanation: '$C = +10 - 15 = -5\\,\\delta$ (système divergent). $\\frac{1}{\\overline{OA\'}} = -5 + \\frac{1}{-0{,}08} = -17{,}5\\,\\mathrm{m}^{-1} \\implies \\overline{OA\'} \\approx -5{,}71\\,\\mathrm{cm}$ et $\\gamma = \\frac{-5{,}71}{-8} \\approx +0{,}71$ : image virtuelle, droite et rétrécie.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Objet virtuel devant lentille convergente',
          stepTitle: 'Image d’un objet virtuel à travers une convergente',
          paragraphText:
            'Si un faisceau déjà convergent traverse une lentille convergente ($\\overline{OA} > 0$ et $\\overline{OF\'} > 0$), la lentille rapproche encore le point de convergence : $\\frac{1}{\\overline{OA\'}} = \\frac{1}{\\overline{OF\'}} + \\frac{1}{\\overline{OA}} > \\frac{1}{\\overline{OF\'}}$, donc $0 < \\overline{OA\'} < \\overline{OF\'}$.',
          exercise: {
            id: 'physique_1re_cd_l06_p06_q03',
            type: 'mcq',
            prompt: 'Quelle est toujours la nature de l’image d’un objet virtuel ($\\overline{OA} > 0$) donnée par une lentille convergente ?',
            options: [
              'Réelle, droite et plus petite que l’objet (entre $O$ et $F\'$)',
              'Virtuelle, renversée et agrandie',
              'Réelle, renversée et plus grande que l’objet',
              'Virtuelle et droite au-delà de $F\'$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Puisque $\\overline{OA} > 0$ et $0 < \\overline{OA\'} < \\overline{OF\'}$, l’image est réelle ($\\overline{OA\'} > 0$), droite ($\\gamma = \\overline{OA\'}/\\overline{OA} > 0$) et rétrécie ($\\overline{OA\'} < \\overline{OA}$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Objet virtuel devant lentille divergente',
          stepTitle: 'Quand une lentille divergente donne-t-elle une image réelle ?',
          paragraphText:
            'Avec une lentille divergente ($\\overline{OF\'} < 0$) et un objet virtuel ($\\overline{OA} > 0$), $\\frac{1}{\\overline{OA\'}} = \\frac{1}{\\overline{OA}} - \\frac{1}{|\\overline{OF\'}|}$. Ce résultat est positif (image **réelle**) si et seulement si $0 < \\overline{OA} < |\\overline{OF\'}| = \\overline{OF}$.',
          exercise: {
            id: 'physique_1re_cd_l06_p06_q04',
            type: 'mcq',
            prompt: 'Un objet virtuel est placé à $\\overline{OA} = +10\\,\\mathrm{cm}$ d’une lentille divergente de focale $\\overline{OF\'} = -20\\,\\mathrm{cm}$ ($\\overline{OF} = +20\\,\\mathrm{cm}$). Où se forme l’image ?',
            options: [
              'À $\\overline{OA\'} = +20\\,\\mathrm{cm}$ (image réelle, droite, $\\gamma = +2$)',
              'À $\\overline{OA\'} = -6{,}67\\,\\mathrm{cm}$ (image virtuelle)',
              'À $\\overline{OA\'} = -20\\,\\mathrm{cm}$ (image virtuelle)',
              'Au foyer $F\'$ directement',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\frac{1}{\\overline{OA\'}} = \\frac{1}{-20} + \\frac{1}{+10} = +\\frac{1}{20}$, donc $\\overline{OA\'} = +20\\,\\mathrm{cm}$ (réelle) et $\\gamma = \\frac{+20}{+10} = +2$ (droite, double).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'definition',
          stepBadge: 'Hygiène',
          stepTheme: 'Lentilles de contact (Documentation)',
          stepTitle: 'Précautions indispensables pour les lentilles de contact',
          paragraphText:
            'D’après la documentation du cours (p. 13–14), les lentilles de contact sont en contact direct avec l’œil : un mauvais entretien expose à des infections graves de la cornée.',
          exercise: {
            id: 'physique_1re_cd_l06_p06_q05',
            type: 'mcq',
            prompt: 'Selon les règles d’hygiène de la documentation du cours sur les lentilles de contact, quelle pratique est strictement **interdite** ?',
            options: [
              'Rincer ses lentilles à l’eau du robinet ou avec de la salive',
              'Se laver soigneusement les mains avant de poser les lentilles',
              'Utiliser uniquement une solution de nettoyage spécifique prescrite',
              'Respecter la date limite de renouvellement des lentilles',
            ],
            correctAnswerIndex: 0,
            explanation: 'L’eau du robinet et la salive contiennent des micro-organismes pouvant provoquer de graves infections cornéennes : seule une solution dédiée doit être utilisée.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Santé',
          stepTheme: 'Port et suivi médical des lentilles',
          stepTitle: 'Bonnes pratiques en cas d’irritation ou de nuit',
          paragraphText:
            'La cornée reçoit une grande part de son oxygène directement au contact de l’air. Porter des lentilles classiques pendant le sommeil réduit l’oxygénation et augmente le risque infectieux ; en cas de rougeur ou douleur, il faut retirer la lentille et consulter un ophtalmologiste.',
          exercise: {
            id: 'physique_1re_cd_l06_p06_q06',
            type: 'mcq',
            prompt: 'Que doit-on faire immédiatement si une lentille de contact provoque une douleur ou une rougeur oculaire persistante ?',
            options: [
              'La retirer immédiatement et consulter un spécialiste',
              'La rincer à l’eau fraîche du robinet et la remettre',
              'Dormir avec pour laisser l’œil s’habituer',
              'La prêter à un proche pour vérifier si elle est abîmée',
            ],
            correctAnswerIndex: 0,
            explanation: 'Il faut retirer la lentille sans délai en cas d’inconfort anormal, de rougeur ou de trouble visuel et consulter un professionnel de santé.',
          },
        },
      ],
    },
  ]),
};
