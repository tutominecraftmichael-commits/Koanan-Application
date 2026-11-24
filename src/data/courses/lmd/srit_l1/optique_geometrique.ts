import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

export const OPTIQUE_GEOMETRIQUE_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : FONDEMENTS, LOIS DE SNELL-DESCARTES, PRISME ET FIBRE OPTIQUE
  // ==========================================================================
  {
    id: 'lmd_srit_l1_optique_ch1',
    subjectId: 'lmd_optique_geometrique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (Optique Géométrique)',
    title: 'Fondements de l\'Optique Géométrique, Lois de Snell-Descartes, Prisme et Fibre optique',
    summary:
      'Indice de réfraction, chemin optique et principe de Fermat, lois de Snell-Descartes, réflexion totale, lame à faces parallèles, prisme et guidage dans une fibre optique.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_optique_ch1_p1',
        order: 1,
        title: 'Milieux transparents, indice de réfraction, chemin optique et principe de Fermat',
        summary:
          'Définir le cadre de l\'optique géométrique, l\'indice de réfraction n = c/v, la dispersion de Cauchy, le chemin optique L et le principe variationnel de Fermat.',
        conceptExplanation:
          'L\'optique géométrique étudie la propagation de la lumière sous forme de rayons lumineux lorsque la longueur d\'onde est très petite devant les dimensions des obstacles (approximation des courtes longueurs d\'onde). Dans un milieu d\'indice n = c/v, la lumière suit les trajectoires qui rendent stationnaire le chemin optique L.',
        keyRule:
          'Lorsqu\'une onde lumineuse change de milieu, sa fréquence f reste strictement invariante, tandis que sa célérité v = c/n et sa longueur d\'onde lambda = lambda_0 / n sont divisées par l\'indice n.',
        workedExample: {
          title: 'Célérité, longueur d\'onde et chemin optique dans une fibre de silice',
          statement:
            'Un laser télécom émet dans le vide à lambda_0 = 1550 nm dans un cœur en silice d\'indice n = 1,50 et de longueur d = 2,0 km. Calculer la vitesse v, la longueur d\'onde lambda dans la silice, le chemin optique L et la durée de propagation tau.',
          methodSteps: [
            '1. Célérité dans la silice : v = c / n = (3,00 × 10^8) / 1,50 = 2,00 × 10^8 m/s.',
            '2. Longueur d\'onde dans le milieu : lambda = lambda_0 / n = 1550 / 1,50 ≈ 1033,3 nm.',
            '3. Chemin optique : L = n × d = 1,50 × 2,0 = 3,0 km, et durée : tau = L / c = d / v = 3000 / (3,00 × 10^8) = 10 µs.',
          ],
          conclusion: 'Le chemin optique L = 3,0 km est la distance que parcourrait la lumière dans le vide pendant la même durée tau = 10 µs.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Rayon lumineux & Indice',
            stepTheme: 'blue',
            stepTitle: 'Approximation de l\'optique géométrique et indice de réfraction n = c/v',
            paragraphText:
              'L\'**optique géométrique** est valide lorsque la longueur d\'onde $\\lambda$ de la lumière (domaine visible : $400\\text{ nm} \\le \\lambda_0 \\le 800\\text{ nm}$) est négligeable devant la taille $a$ des ouvertures et obstacles ($\\lambda \\ll a$), ce qui permet de négliger la diffraction. Dans un milieu transparent, homogène et isotrope (MTHI), la lumière se propage en **ligne droite** à la vitesse de phase $v \\le c$ (où $c \\approx 3{,}00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$ est la célérité dans le vide). On définit l\'**indice de réfraction absolu** du milieu par le rapport sans dimension $n = \\frac{c}{v} \\ge 1$.',
            formula: {
              name: 'Indice de réfraction absolu d\'un milieu transparent',
              formula: 'n = \\frac{c}{v} \\ge 1 \\quad \\Longleftrightarrow \\quad v = \\frac{c}{n}',
              note: 'Indice du vide : n = 1 ; air : n ≈ 1,0003 ≈ 1 ; eau : n ≈ 1,33 ; verre / silice : n ≈ 1,5 ; diamant : n ≈ 2,42.',
            },
            keyRule:
              'Plus un milieu est réfringent (n élevé), plus la lumière s\'y propage lentement (v = c / n diminue).',
            konanTip:
              'Un indice de réfraction en optique géométrique classique est toujours supérieur ou égal à 1 (n >= 1) et n\'a aucune unité.',
            exercise: {
              id: 'srit_opt_c1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle est la vitesse de propagation de la lumière dans un verre flint d\'indice de réfraction $n = 1{,}60$ (avec $c = 3{,}00 \\times 10^8\\text{ m/s}$) ?',
              options: [
                '1,875 × 10^8 m/s',
                '4,80 × 10^8 m/s',
                '3,00 × 10^8 m/s',
                '2,25 × 10^8 m/s',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par définition n = c / v, donc v = c / n = (3,00 × 10^8) / 1,60 = 1,875 × 10^8 m/s.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Invariance de la fréquence',
            stepTheme: 'violet',
            stepTitle: 'Fréquence, longueur d\'onde dans un milieu et loi de dispersion de Cauchy',
            paragraphText:
              'Une radiation monochromatique est caractérisée par sa **fréquence temporelle** $\\nu$ (ou $f$, en Hz) ou sa période $T = 1/\\nu$, qui ne dépend **que de la source émettrice** et reste strictement invariante lors du passage d\'un milieu à un autre. En revanche, comme $\\lambda = v\\,T = \\frac{v}{\\nu}$ et $v = \\frac{c}{n}$, la longueur d\'onde dans un milieu d\'indice $n$ est réduite selon $\\lambda = \\frac{\\lambda_0}{n}$, où $\\lambda_0 = \\frac{c}{\\nu}$ est la longueur d\'onde dans le vide. Dans un milieu dispersif (verre, eau), l\'indice $n(\\lambda_0)$ décroît avec la longueur d\'onde selon la **loi de Cauchy** $n(\\lambda_0) = A + \\frac{B}{\\lambda_0^2}$ ($B > 0$).',
            formula: {
              name: 'Contraction de la longueur d\'onde et loi de Cauchy',
              formula: '\\lambda = \\frac{\\lambda_0}{n} \\qquad \\text{et} \\qquad n(\\lambda_0) = A + \\frac{B}{\\lambda_0^2} \\quad (A > 1,\\; B > 0)',
              note: 'Comme lambda_violet (400 nm) < lambda_rouge (750 nm), on a n_violet > n_rouge : le violet est plus dévié que le rouge.',
            },
            keyRule:
              'La couleur (la fréquence f) d\'un rayon lumineux ne change jamais à la traversée d\'un dioptre ; seule sa longueur d\'onde lambda = lambda_0 / n varie.',
            konanTip:
              'D\'après la loi de Cauchy $n = A + B/\\lambda_0^2$, les courtes longueurs d\'onde (bleu/violet) ont un indice $n$ plus grand que les grandes longueurs d\'onde (rouge).',
            exercise: {
              id: 'srit_opt_c1_p1_q2',
              type: 'mcq',
              prompt:
                'Lorsqu\'un faisceau laser rouge ($\\lambda_0 = 600\\text{ nm}$ dans le vide) pénètre dans l\'eau d\'indice $n = 4/3$, comment évoluent sa fréquence $f$ et sa longueur d\'onde $\\lambda$ ?',
              options: [
                'Sa fréquence f reste constante et sa longueur d\'onde devient λ = λ₀ / n = 450 nm',
                'Sa fréquence f est divisée par 4/3 et sa longueur d\'onde reste égale à 600 nm',
                'Sa fréquence f reste constante et sa longueur d\'onde devient λ = n × λ₀ = 800 nm',
                'Sa fréquence f et sa longueur d\'onde λ restent toutes deux inchangées',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La fréquence temporelle f est un invariant imposé par la source. La vitesse v étant divisée par n = 4/3, la longueur d\'onde devient λ = v / f = λ₀ / n = 600 / (4/3) = 450 nm.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Chemin optique',
            stepTheme: 'blue',
            stepTitle: 'Chemin optique L = (AB) entre deux points et temps de parcours',
            paragraphText:
              'Le **chemin optique** entre deux points $A$ et $B$, noté $L_{AB}$ ou $(AB)$, est défini par l\'intégrale curviligne de l\'indice de réfraction le long du trajet suivi par le rayon : $L_{AB} = \\int_A^B n(M)\\,\\mathrm{d}s$. Comme $\\mathrm{d}s = v\\,\\mathrm{d}t = \\frac{c}{n}\\,\\mathrm{d}t$, on a $n\\,\\mathrm{d}s = c\\,\\mathrm{d}t$, d\'où $L_{AB} = c\\,\\tau_{AB}$, où $\\tau_{AB}$ est la durée de propagation de $A$ à $B$. Dans une succession de $k$ milieux homogènes d\'indices $n_i$ sur des segments rectilignes de longueurs géométriques $d_i$, le chemin optique s\'écrit simplement $L = \\sum_{i=1}^k n_i\\,d_i$.',
            formula: {
              name: 'Définition générale et discrète du chemin optique',
              formula: 'L_{AB} = (AB) = \\int_A^B n(M)\\,\\mathrm{d}s = c \\cdot \\tau_{AB} = \\sum_{i=1}^k n_i\\,d_i',
              note: 'Le chemin optique s\'exprime en mètres (m) : c\'est la distance que la lumière parcourrait dans le vide pendant le même temps tau_AB.',
            },
            keyRule:
              'Dans un milieu homogène d\'indice n, le chemin optique sur une distance géométrique d vaut L = n × d (et non d / n !).',
            konanTip:
              'Ne confondez jamais $v = c / n$ (la vitesse divise par $n$) et $L = n \\cdot d$ (le chemin optique multiplie la distance géométrique par $n$).',
            exercise: {
              id: 'srit_opt_c1_p1_q3',
              type: 'mcq',
              prompt:
                'Un rayon lumineux traverse successivement $d_1 = 20\\text{ cm}$ d\'air ($n_1 = 1{,}0$) puis une cuve de $d_2 = 10\\text{ cm}$ de verre ($n_2 = 1{,}5$). Quel est le chemin optique total $L$ parcouru ?',
              options: [
                '35 cm',
                '30 cm',
                '26,7 cm',
                '45 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans une succession de milieux homogènes, L = n₁·d₁ + n₂·d₂ = 1,0 × 20 + 1,5 × 10 = 20 + 15 = 35 cm.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Principe de Fermat',
            stepTheme: 'violet',
            stepTitle: 'Énoncé du principe de Fermat et théorème de Malus-Dupin',
            paragraphText:
              'Le **principe de Fermat** est le postulat fondamental de toute l\'optique géométrique : *le trajet effectivement suivi par la lumière pour aller d\'un point $A$ à un point $B$ rend le chemin optique $L_{AB}$ **stationnaire** ($\\delta L_{AB} = 0$, le plus souvent minimal) par rapport aux trajets virtuels infiniment voisins*. On en déduit immédiatement : **1.** la propagation rectiligne dans tout milieu homogène (la droite minimise la distance) ; **2.** le **principe du retour inverse de la lumière** ($L_{AB} = L_{BA}$, le trajet est indépendant du sens de parcours) ; **3.** le **théorème de Malus** : les rayons lumineux sont partout orthogonaux aux surfaces d\'onde ($L = \\text{cste}$).',
            keyRule:
              'Principe du retour inverse : si la lumière suit un trajet quelconque de A vers B à travers des miroirs et dioptres, elle peut suivre exactement le même trajet en sens inverse de B vers A.',
            konanTip:
              'En milieu inhomogène à gradient d\'indice (mirages atmosphériques ou fibres à gradient d\'indice), le rayon se courbe toujours vers les régions d\'indice $n$ le plus élevé !',
            exercise: {
              id: 'srit_opt_c1_p1_q4',
              type: 'mcq',
              prompt:
                'Que stipule le principe de Fermat concernant la trajectoire suivie par la lumière entre deux points $A$ et $B$ ?',
              options: [
                'Le chemin optique L = ∫ n ds est stationnaire (δL = 0, généralement minimal), ce qui équivaut à un temps de parcours stationnaire',
                'La distance géométrique ∫ ds est toujours minimale, même lors de la traversée de plusieurs milieux d\'indices différents',
                'La vitesse de la lumière reste constante sur tout le trajet entre A et B',
                'Le produit n × v est minimal le long du rayon lumineux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le principe de Fermat affirme la stationnarité du chemin optique L = ∫ n ds = c·τ (et donc du temps de parcours τ), et non de la distance géométrique brute lorsque le milieu change.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Lois de Snell-Descartes',
            stepTheme: 'green',
            stepTitle: 'Lois de Snell-Descartes pour la réflexion et la réfraction sur un dioptre',
            paragraphText:
              'Lorsqu\'un rayon incident dans le milieu $1$ (indice $n_1$) frappe une surface de séparation (dioptre) au point d\'incidence $I$ en faisant un angle $i_1$ avec la **normale** $\\vec{N}$ au dioptre : **1re loi (coplanarité)** : le rayon réfléchi et le rayon réfracté appartiennent au **plan d\'incidence** (plan contenant le rayon incident et la normale en $I$) ; **2e loi (réflexion)** : l\'angle de réflexion vérifie $|r| = |i_1|$ (algébriquement $r = -i_1$) ; **3e loi (réfraction)** : dans le milieu $2$ (indice $n_2$), l\'angle de réfraction $i_2$ vérifie la relation fondamentale $n_1 \\sin i_1 = n_2 \\sin i_2$.',
            formula: {
              name: 'Lois de Snell-Descartes à l\'interface entre deux milieux (n1, n2)',
              formula: '\\text{Réflexion : } r = -i_1 \\quad (|r| = |i_1|) \\qquad \\text{Réfraction : } n_1 \\sin i_1 = n_2 \\sin i_2',
              note: 'ATTENTION : En optique géométrique, tous les angles (i1, r, i2) sont TOUJOURS mesurés par rapport à la NORMALE à la surface, et jamais par rapport au plan du dioptre !',
            },
            keyRule:
              'Passage vers un milieu plus réfringent (n2 > n1) → le rayon se rapproche de la normale (i2 < i1). Passage vers un milieu moins réfringent (n2 < n1) → le rayon s\'écarte de la normale (i2 > i1).',
            konanTip:
              'Piège fréquent aux QCM : si l\'énoncé donne l\'angle $\\alpha$ du rayon avec la *surface* du miroir ou du dioptre, l\'angle d\'incidence vaut $i_1 = 90^\\circ - \\alpha$ !',
            exercise: {
              id: 'srit_opt_c1_p1_q5',
              type: 'mcq',
              prompt:
                'Un rayon lumineux arrive depuis l\'air ($n_1 = 1{,}0$) sur la surface calme d\'un bassin d\'eau ($n_2 = \\sqrt{3} \\approx 1{,}732$ pour un liquide spécial) en faisant un angle de $30^\\circ$ avec la **surface horizontale** du liquide. Quel est l\'angle de réfraction $i_2$ par rapport à la normale ?',
              options: [
                '30°',
                '60°',
                '16,8°',
                '45°',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'angle avec la surface vaut 30°, donc l\'angle d\'incidence par rapport à la normale vaut i₁ = 90° - 30° = 60°. D\'après Snell-Descartes : 1 × sin(60°) = √3 × sin(i₂) ⇒ √3/2 = √3 sin(i₂) ⇒ sin(i₂) = 1/2 ⇒ i₂ = 30°.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Réflexion totale',
            stepTheme: 'orange',
            stepTitle: 'Angle limite de réfraction et phénomène de réflexion totale interne',
            paragraphText:
              'Deux situations asymétriques doivent être distinguées dans $n_1 \\sin i_1 = n_2 \\sin i_2$. **Cas 1 ($n_1 < n_2$, ex. air $\\to$ verre)** : $\\sin i_2 = \\frac{n_1}{n_2}\\sin i_1 \\le \\frac{n_1}{n_2} < 1$ pour tout $i_1 \\in [0, 90^\\circ]$ ; le rayon réfracté existe toujours, et pour $i_1 \\to 90^\\circ$ (incidence rasante), $i_2$ atteint l\'**angle de réfraction limite** $\\lambda = \\arcsin(n_1/n_2)$. **Cas 2 ($n_1 > n_2$, milieu plus réfringent vers moins réfringent, ex. verre $\\to$ air)** : le rayon s\'écarte de la normale ($i_2 > i_1$). Lorsque $i_1$ atteint l\'**angle critique (ou angle limite)** $i_L = \\arcsin\\!\\left(\\frac{n_2}{n_1}\\right)$, le rayon réfracté émerge en rasant la surface ($i_2 = 90^\\circ$). Pour tout angle **$i_1 > i_L$**, il n\'y a plus aucun rayon réfracté : toute l\'énergie lumineuse subit une **réflexion totale** !',
            formula: {
              name: 'Condition et angle limite de réflexion totale interne',
              formula: '\\text{Condition : } n_1 > n_2 \\quad \\text{et} \\quad i_1 > i_L \\quad \\text{avec} \\quad \\sin i_L = \\frac{n_2}{n_1}',
              note: 'La réflexion totale ne peut JAMAIS se produire lorsque la lumière va d\'un milieu moins réfringent vers un milieu plus réfringent (n1 < n2).',
            },
            keyRule:
              'Il y a réflexion totale si et seulement si 1) le milieu incident est le plus réfringent (n1 > n2) ET 2) l\'angle d\'incidence dépasse l\'angle limite i1 > arcsin(n2 / n1).',
            konanTip:
              'Pour le dioptre verre ($n_1 = 1{,}5$) $\\to$ air ($n_2 = 1$), $\\sin i_L = 1/1{,}5 = 2/3$, soit $i_L \\approx 41{,}8^\\circ$ : un prisme rectangle isocèle ($i_1 = 45^\\circ > 41{,}8^\\circ$) agit donc comme un miroir parfait sans argenture !',
            exercise: {
              id: 'srit_opt_c1_p1_q6',
              type: 'mcq',
              prompt:
                'Sous quelles conditions exactes observe-t-on le phénomène de **réflexion totale** sur un dioptre séparant le milieu d\'incidence $n_1$ du milieu $n_2$ ?',
              options: [
                'Lorsque n₁ > n₂ et que l\'angle d\'incidence vérifie i₁ > arcsin(n₂ / n₁)',
                'Lorsque n₁ < n₂ et que l\'angle d\'incidence vérifie i₁ > arcsin(n₁ / n₂)',
                'Pour n\'importe quels indices n₁ et n₂ dès que i₁ > 45°',
                'Lorsque n₁ > n₂ et que l\'angle d\'incidence vérifie i₁ < arcsin(n₂ / n₁)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'De sin(i₂) = (n₁/n₂) sin(i₁), la valeur sin(i₂) ne peut dépasser 1 que si n₁ > n₂ et sin(i₁) > n₂/n₁, soit i₁ > i_L = arcsin(n₂/n₁).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_optique_ch1_p2',
        order: 2,
        title: 'Lame à faces parallèles et étude complète du prisme',
        summary:
          'Calculer le déplacement latéral d\'une lame à faces parallèles, établir les quatre formules du prisme, la condition d\'émergence et la déviation minimale Dm.',
        conceptExplanation:
          'Une lame à faces parallèles ne dévie pas angulairement le rayon émergent (i\' = i) mais lui impose un déplacement latéral parallèle d. Un prisme d\'angle au sommet A et d\'indice n dévie le rayon lumineux vers sa base d\'un angle D = i + i\' - A qui passe par un minimum Dm lorsque le trajet est symétrique (i = i\' et r = r\' = A/2).',
        keyRule:
          'Au minimum de déviation Dm d\'un prisme d\'angle A, on a i = i\' = (Dm + A)/2, r = r\' = A/2 et l\'indice vaut n = sin((Dm + A)/2) / sin(A/2).',
        workedExample: {
          title: 'Calcul de l\'indice d\'un prisme à partir de sa déviation minimale',
          statement:
            'Un prisme équilatéral (A = 60°) présente une déviation minimale Dm = 30° pour une radiation monochromatique. Calculer les angles r, i_m et l\'indice n du verre.',
          methodSteps: [
            '1. Au minimum de déviation : r = r\' = A / 2 = 60° / 2 = 30°.',
            '2. Angle d\'incidence : i_m = (Dm + A) / 2 = (30° + 60°) / 2 = 45°.',
            '3. Indice du prisme : n = sin(i_m) / sin(r) = sin(45°) / sin(30°) = (√2 / 2) / (1 / 2) = √2 ≈ 1,414.',
          ],
          conclusion: 'La mesure goniométrique de A et Dm détermine avec une grande précision l\'indice n = √2 ≈ 1,414.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Lame à faces parallèles',
            stepTheme: 'violet',
            stepTitle: 'Traversée d\'une lame à faces parallèles : parallélisme et déplacement latéral',
            paragraphText:
              'Considérons une lame de verre d\'épaisseur $e$ et d\'indice $n$, plongée dans l\'air ($n_0 = 1$) et délimitée par deux faces planes strictement parallèles. En $I$ (face d\'entrée), la loi de Snell-Descartes donne $\\sin i = n \\sin r$. Comme les normales aux deux faces sont parallèles, l\'angle d\'incidence interne sur la face de sortie en $I\'$ est égal à $r$, d\'où $n \\sin r = 1 \\cdot \\sin i\'$. On en déduit $\\sin i\' = \\sin i$, soit **$i\' = i$** : **le rayon émergent est strictement parallèle au rayon incident** (déviation angulaire nulle $D = 0$), mais il subit un **déplacement latéral** $d = II\' \\sin(i - r) = \\frac{e}{\\cos r}\\sin(i - r)$.',
            formula: {
              name: 'Déplacement latéral d\'un rayon par une lame à faces parallèles d\'épaisseur e',
              formula: 'i\' = i \\qquad \\text{et} \\qquad d = e \\, \\frac{\\sin(i - r)}{\\cos r} \\quad \\xrightarrow{\\text{petits angles}} \\quad d \\approx e\\,i\\left(1 - \\frac{1}{n}\\right)',
              note: 'Le rayon ne subit jamais de réflexion totale sur la face de sortie d\'une lame à faces parallèles plongée dans le même milieu.',
            },
            keyRule:
              'Une lame à faces parallèles baignant dans un même milieu ne dévie pas la direction du rayon (i\' = i), elle le translate seulement latéralement.',
            konanTip:
              'Aux petits angles (conditions de Gauss), $\\sin i \\approx i$ et $\\sin r \\approx r \\approx i/n$, d\'où la formule très utile $d \\approx e\\,i\\,(1 - 1/n)$.',
            exercise: {
              id: 'srit_opt_c1_p2_q1',
              type: 'mcq',
              prompt:
                'Un rayon lumineux arrive depuis l\'air sous une incidence $i = 40^\\circ$ sur une lame de verre à faces parallèles ($n = 1{,}5$) baignant dans l\'air. Quel est l\'angle d\'émergence $i\'$ du rayon à la sortie de la lame ?',
              options: [
                'i\' = 40° (le rayon émergent est parallèle au rayon incident)',
                'i\' = 25,4°',
                'i\' = 60°',
                'Il y a réflexion totale sur la seconde face',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Puisque les deux faces sont parallèles et baignent dans le même milieu (air), on a sin(i) = n sin(r) = sin(i\'), d\'où i\' = i = 40°.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Les 4 formules du prisme',
            stepTheme: 'blue',
            stepTitle: 'Équations fondamentales du prisme d\'angle au sommet A et d\'indice n',
            paragraphText:
              'Un **prisme** est un milieu transparent homogène d\'indice $n$ limité par deux dioptres plans non parallèles formant un dièdre d\'**angle au sommet $A$**, plongé dans l\'air ($n_{\\text{air}} = 1$). Dans un plan de section principale perpendiculaire à l\'arête, on note $i$ et $r$ les angles d\'incidence et de réfraction sur la face d\'entrée (en $I$), puis $r\'$ et $i\'$ les angles d\'incidence interne et d\'émergence sur la face de sortie (en $I\'$). La géométrie du triangle $SII\'$ et les lois de Snell-Descartes fournissent les **quatre équations fondamentales du prisme**.',
            formula: {
              name: 'Système des 4 formules du prisme (dans l\'air)',
              formula: '\\begin{cases} (1)\\; \\sin i = n \\sin r \\\\ (2)\\; \\sin i\' = n \\sin r\' \\\\ (3)\\; A = r + r\' \\\\ (4)\\; D = i + i\' - A \\end{cases}',
              note: 'La déviation totale D = (i - r) + (i\' - r\') = i + i\' - A rabat toujours le rayon vers la base du prisme (lorsque n > 1).',
            },
            keyRule:
              'Toujours mémoriser ensemble les deux relations angulaires géométriques du prisme : A = r + r\' et D = i + i\' - A.',
            konanTip:
              'Dans la convention algébrique du prisme, $r$ est positif si le rayon réfracté se rapproche de la base. Pour un rayon entrant normalement à la première face ($i = 0$), on a immédiatement $r = 0$, donc $r\' = A$ !',
            exercise: {
              id: 'srit_opt_c1_p2_q2',
              type: 'mcq',
              prompt:
                'Un rayon lumineux arrive sous **incidence normale** ($i = 0^\\circ$) sur la face d\'entrée d\'un prisme d\'angle au sommet $A = 30^\\circ$ et d\'indice $n = 1{,}5$. Que valent les angles internes $r$ et $r\'$ ?',
              options: [
                'r = 0° et r\' = 30°',
                'r = 15° et r\' = 15°',
                'r = 30° et r\' = 0°',
                'r = 19,5° et r\' = 10,5°',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme i = 0°, la première formule sin(i) = n sin(r) impose r = 0°. La troisième formule A = r + r\' donne alors immédiatement r\' = A - r = 30° - 0° = 30°.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Condition d\'émergence',
            stepTheme: 'violet',
            stepTitle: 'Conditions d\'émergence d\'un rayon hors du prisme',
            paragraphText:
              'Pour qu\'un rayon entré dans le prisme puisse **émerger par la face de sortie** sans subir de réflexion totale en $I\'$, son angle d\'incidence interne $r\'$ doit rester inférieur ou égal à l\'angle limite $\\lambda = \\arcsin(1/n)$ du dioptre verre-air ($r\' \\le \\lambda$). Comme $r = A - r\'$ et que $r$ est lui-même borné par $r \\le \\lambda$ (atteint pour l\'incidence rasante $i = 90^\\circ$), on obtient deux conditions fondamentales : **1. Condition sur le prisme** : $A = r + r\' \\le 2\\lambda$ (si $A > 2\\lambda$, aucun rayon ne peut traverser le prisme !) ; **2. Condition sur l\'incidence** : $i \\ge i_{\\min}$ avec $\\sin i_{\\min} = n\\sin(A - \\lambda)$.',
            formula: {
              name: 'Conditions nécessaires et suffisantes d\'émergence du prisme',
              formula: 'A \\le 2\\,\\lambda \\quad \\text{et} \\quad i \\ge i_{\\min} = \\arcsin\\!\\big(n\\sin(A - \\lambda)\\big) \\quad \\text{où } \\sin\\lambda = \\frac{1}{n}',
              note: 'Pour un verre d\'indice n = 1,5, lambda ≈ 41,8°, donc tout prisme d\'angle A > 83,6° bloque systématiquement l\'émergence par la seconde face.',
            },
            keyRule:
              'Un prisme d\'indice n ne peut laisser émerger un rayon par sa seconde face que si son angle au sommet vérifie A <= 2 arcsin(1/n).',
            konanTip:
              'Si pour un angle particulier on trouve $r\' > \\arcsin(1/n)$, il y a réflexion totale sur la face de sortie et la formule $\\sin i\' = n\\sin r\'$ n\'a plus de solution réelle !',
            exercise: {
              id: 'srit_opt_c1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle est la valeur maximale de l\'angle au sommet $A_{\\max}$ d\'un prisme d\'indice $n = \\sqrt{2}$ au-delà de laquelle aucun rayon incident dans l\'air ne peut émerger par la seconde face ?',
              options: [
                '90°',
                '45°',
                '60°',
                '120°',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'angle limite verre-air vérifie sin(λ) = 1/n = 1/√2, soit λ = 45°. La condition d\'émergence A ≤ 2λ donne donc A_max = 2 × 45° = 90°.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Minimum de déviation',
            stepTheme: 'green',
            stepTitle: 'Minimum de déviation Dm et formule goniométrique de l\'indice',
            paragraphText:
              'L\'étude de la fonction $D(i) = i + i\'(i) - A$ montre que la déviation $D$ passe par un **minimum unique $D_m$** lorsque la dérivée $\\frac{\\mathrm{d}D}{\\mathrm{d}i} = 1 + \\frac{\\mathrm{d}i\'}{\\mathrm{d}i} = 0$, ce qui correspond, par symétrie du retour inverse de la lumière, à un trajet **symétrique** dans le prisme : **$i = i\' = i_m$** et **$r = r\' = r_m$**. Les formules (3) et (4) donnent alors immédiatement $r_m = \\frac{A}{2}$ et $D_m = 2i_m - A \\iff i_m = \\frac{D_m + A}{2}$. En reportant dans $\\sin i_m = n\\sin r_m$, on obtient la célèbre formule du prisme au minimum de déviation.',
            formula: {
              name: 'Indice du prisme au minimum de déviation Dm',
              formula: 'r = r\' = \\frac{A}{2}, \\qquad i = i\' = \\frac{D_m + A}{2}, \\qquad n = \\frac{\\sin\\!\\left(\\dfrac{D_m + A}{2}\\right)}{\\sin\\!\\left(\\dfrac{A}{2}\\right)}',
              note: 'Pour un prisme de petit angle A (en radians) sous faible incidence, sin(x) ≈ x donne la formule approchée : D ≈ (n - 1)·A.',
            },
            keyRule:
              'Au minimum de déviation Dm, le rayon traverse le prisme symétriquement (parallèlement à la base si le prisme est isocèle) avec r = r\' = A/2 et i = i\' = (Dm + A)/2.',
            konanTip:
              'Retenez aussi l\'approximation des petits angles ($A \\ll 1\\text{ rad}$ et $i \\ll 1\\text{ rad}$) : la déviation d\'un prisme mince est constante et vaut **$D = (n - 1)A$** !',
            exercise: {
              id: 'srit_opt_c1_p2_q4',
              type: 'mcq',
              prompt:
                'Pour un prisme de petit angle au sommet $A = 4^\\circ$ et d\'indice $n = 1{,}50$ éclairé sous faible incidence, quelle est la valeur approchée de la déviation $D$ ?',
              options: [
                '2°',
                '6°',
                '4°',
                '3°',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans l\'approximation des petits angles, D ≈ (n - 1)·A = (1,50 - 1) × 4° = 0,50 × 4° = 2°.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Dispersion par un prisme',
            stepTheme: 'slate',
            stepTitle: 'Décomposition de la lumière blanche et pouvoir dispersif du prisme',
            paragraphText:
              'Lorsqu\'un pinceau de lumière blanche (polychromatique) arrive sur un prisme sous une incidence $i$ fixée, l\'angle $r$ dépend de la longueur d\'onde via $n(\\lambda)$ : comme $n_{\\text{violet}} > n_{\\text{rouge}}$ (loi de Cauchy) et que la déviation $\\frac{\\partial D}{\\partial n} > 0$ est une fonction strictement croissante de l\'indice $n$, **la lumière violette est plus déviée que la lumière rouge** ($D_{\\text{violet}} > D_{\\text{rouge}}$). L\'écart angulaire $\\Delta D = D_{\\text{bleu}} - D_{\\text{rouge}}$ (qui vaut $(n_B - n_R)A$ pour un prisme de petit angle) explique la séparation spectrale de l\'arc-en-ciel.',
            keyRule:
              'La déviation D d\'un prisme croît avec l\'indice n : comme n_violet > n_rouge, le violet est toujours plus dévié vers la base du prisme que le rouge.',
            konanTip:
              'Différentielle de la déviation au minimum de déviation par rapport à l\'indice : $\\mathrm{d}D_m = \\frac{2\\sin(A/2)}{\\cos i_m}\\,\\mathrm{d}n$.',
            exercise: {
              id: 'srit_opt_c1_p2_q5',
              type: 'mcq',
              prompt:
                'Lors de la dispersion de la lumière blanche par un prisme en verre normal (où l\'indice suit la loi de Cauchy $n(\\lambda) = A + B/\\lambda^2$ avec $B > 0$), quelle radiation subit la **plus grande déviation** ?',
              options: [
                'Le violet (courte longueur d\'onde, donc indice n plus élevé)',
                'Le rouge (grande longueur d\'onde, donc indice n plus faible)',
                'Le vert (situé au milieu du spectre visible)',
                'Toutes les couleurs sont déviées du même angle D',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme λ_violet < λ_rouge, la loi de Cauchy donne n_violet > n_rouge. Or la déviation D croît avec l\'indice n du prisme, donc le violet est davantage dévié vers la base que le rouge.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Prismes à réflexion totale',
            stepTheme: 'orange',
            stepTitle: 'Prismes réflecteurs à 45°-90°-45° (Porro, périscope, jumelles)',
            paragraphText:
              'Un prisme rectangle isocèle en verre ($n = 1{,}5$, angles $45^\\circ, 90^\\circ, 45^\\circ$) est très utilisé en instrumentation optique comme réflecteur sans perte métallique. Si un rayon entre **normalement** ($i = 0$) par un petit côté de l\'angle droit, il poursuit tout droit ($r = 0$) et frappe l\'hypoténuse sous un angle interne $r\' = 45^\\circ$. Or l\'angle limite verre-air vaut $\\lambda = \\arcsin(1/1{,}5) \\approx 41{,}8^\\circ < 45^\\circ$ : il y a donc **réflexion totale** sur l\'hypoténuse ! Le rayon est dévié de $90^\\circ$ (ou de $180^\\circ$ après deux réflexions totales successives sur les deux petits côtés lorsque le rayon entre par l\'hypoténuse : prisme de Porro).',
            keyRule:
              'Sur un prisme rectangle isocèle d\'indice n, il y a réflexion totale à 45° dans l\'air dès que sin(45°) > 1/n, soit n > √2 ≈ 1,414.',
            konanTip:
              'Si l\'on plonge ce même prisme en verre ($n_1 = 1{,}5$) dans l\'eau ($n_2 = 1{,}33$), l\'angle limite devient $\\arcsin(1{,}33/1{,}5) \\approx 62{,}5^\\circ > 45^\\circ$ : la réflexion totale disparaît et le rayon sort dans l\'eau !',
            exercise: {
              id: 'srit_opt_c1_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur minimale de l\'indice $n$ d\'un prisme rectangle isocèle ($45^\\circ - 90^\\circ - 45^\\circ$) placé dans l\'air ($n_0 = 1$) pour qu\'un rayon entrant normalement à l\'un des côtés subisse une réflexion totale sur l\'hypoténuse ?',
              options: [
                'n > √2 ≈ 1,414',
                'n > 1,50',
                'n > 2,00',
                'n > √3 ≈ 1,732',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le rayon frappe l\'hypoténuse sous un angle d\'incidence interne de 45°. Il y a réflexion totale si sin(45°) > 1/n, soit √2 / 2 > 1/n, ce qui équivaut à n > √2 ≈ 1,414.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_optique_ch1_p3',
        order: 3,
        title: 'Guidage de la lumière dans une fibre optique et ouverture numérique',
        summary:
          'Appliquer l\'optique géométrique aux télécommunications par fibre optique à saut d\'indice : condition de guidage, cône d\'acceptance, ouverture numérique ON et dispersion intermodale.',
        conceptExplanation:
          'Une fibre optique à saut d\'indice est un guide d\'onde cylindrique constitué d\'un cœur central d\'indice n1 entouré d\'une gaine optique d\'indice n2 légèrement inférieur (n1 > n2). Les rayons injectés dans le cône d\'acceptance d\'ouverture numérique ON = sqrt(n1² - n2²) sont guidés par réflexions totales internes successives.',
        keyRule:
          'Dans l\'air (n0 = 1), l\'ouverture numérique d\'une fibre optique à saut d\'indice vaut ON = sin(theta_max) = sqrt(n_coeur² - n_gaine²).',
        workedExample: {
          title: 'Calcul de l\'ouverture numérique et du cône d\'acceptance d\'une fibre télécom',
          statement:
            'Une fibre optique à saut d\'indice possède un cœur d\'indice n1 = 1,48 et une gaine d\'indice n2 = 1,46. Calculer l\'angle limite phi_L à l\'interface cœur-gaine, l\'ouverture numérique ON et le demi-angle d\'acceptance theta_max dans l\'air.',
          methodSteps: [
            '1. Angle limite cœur-gaine : sin(phi_L) = n2 / n1 = 1,46 / 1,48 ≈ 0,9865 ⇒ phi_L ≈ 80,6°.',
            '2. Ouverture numérique : ON = sqrt(n1² - n2²) = sqrt(1,48² - 1,46²) = sqrt(2,1904 - 2,1316) = sqrt(0,0588) ≈ 0,2425.',
            '3. Demi-angle du cône d\'acceptance dans l\'air : theta_max = arcsin(ON) = arcsin(0,2425) ≈ 14,0°.',
          ],
          conclusion: 'Tout rayon entrant sur la face d\'entrée avec un angle theta <= 14,0° par rapport à l\'axe de la fibre est intégralement guidé.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Architecture Fibre',
            stepTheme: 'blue',
            stepTitle: 'Constitution d\'une fibre optique à saut d\'indice (cœur / gaine)',
            paragraphText:
              'En télécommunications (SRIT), une **fibre optique à saut d\'indice** (step-index fiber) est composée de deux cylindres coaxiaux en silice ou polymère : un **cœur** central d\'indice de réfraction $n_1$ (typiquement diamètre $9\\,\\mu\\text{m}$ en monomode ou $50\\,\\mu\\text{m}$ en multimode) entouré d\'une **gaine optique** (cladding) d\'indice $n_2$ (diamètre standard $125\\,\\mu\\text{m}$), le tout protégé par un revêtement mécanique (coating). Pour que la lumière puisse être piégée dans le cœur par **réflexion totale interne** à l\'interface cœur/gaine, il est **impératif que l\'indice du cœur soit strictement supérieur à celui de la gaine : $n_1 > n_2$**.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Structure radiale d\'une fibre optique télécom et condition sur les indices',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'Protection externe', title: 'Revêtement primaire / Gaine mécanique (250 µm à 900 µm)', subtitle: 'Protection contre les contraintes mécaniques et l\'humidité', color: 'slate' },
                  { badge: 'Gaine optique (n₂)', title: 'Cladding en silice dopée (diamètre 125 µm, indice n₂)', subtitle: 'Indice plus faible (n₂ < n₁) pour assurer la réflexion totale', color: 'blue' },
                  { badge: 'Cœur optique (n₁)', title: 'Core en silice haute pureté (indice n₁ > n₂)', subtitle: 'Milieu de propagation guidant le signal lumineux laser/LED', color: 'green' },
                ],
              },
            },
            keyRule:
              'Condition fondamentale d\'existence du guidage optique : n_coeur (n1) > n_gaine (n2). On définit l\'écart relatif d\'indice par Delta = (n1² - n2²) / (2 n1²) ≈ (n1 - n2) / n1.',
            konanTip:
              'En pratique télécom, l\'écart relatif d\'indice $\\Delta = (n_1 - n_2)/n_1$ est faible, de l\'ordre de $1\\%$ (ex. $n_1 = 1{,}480$ et $n_2 = 1{,}465$).',
            exercise: {
              id: 'srit_opt_c1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle relation doivent obligatoirement vérifier l\'indice du cœur $n_1$ et l\'indice de la gaine optique $n_2$ d\'une fibre optique à saut d\'indice pour permettre le guidage par réflexion totale ?',
              options: [
                'n₁ > n₂ (l\'indice du cœur doit être strictement supérieur à celui de la gaine)',
                'n₁ < n₂ (l\'indice de la gaine doit être supérieur à celui du cœur)',
                'n₁ = n₂ (les deux indices doivent être égaux pour éviter la réfraction)',
                'n₁ × n₂ = 1',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La réflexion totale interne à l\'interface cœur → gaine exige que la lumière se propage dans le milieu le plus réfringent (le cœur) vers le milieu le moins réfringent (la gaine), d\'où n₁ > n₂.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Ouverture numérique ON',
            stepTheme: 'violet',
            stepTitle: 'Démonstration de l\'ouverture numérique ON et du cône d\'acceptance',
            paragraphText:
              'Un rayon pénètre depuis un milieu extérieur d\'indice $n_0$ (généralement l\'air, $n_0 = 1$) sur la face d\'entrée plane de la fibre sous un angle $\\theta_0$ avec l\'axe optique. Il est réfracté dans le cœur sous l\'angle $\\theta_1$ tel que $n_0 \\sin\\theta_0 = n_1 \\sin\\theta_1$, puis frappe l\'interface cylindrique cœur/gaine sous l\'angle d\'incidence $\\varphi = 90^\\circ - \\theta_1$. Il y a réflexion totale si $\\sin\\varphi \\ge \\frac{n_2}{n_1}$, soit $\\cos\\theta_1 \\ge \\frac{n_2}{n_1}$, c\'est-à-dire $\\sin\\theta_1 = \\sqrt{1 - \\cos^2\\theta_1} \\le \\sqrt{1 - \\frac{n_2^2}{n_1^2}}$. En multipliant par $n_1$, on obtient la condition du **cône d\'acceptance** : $n_0 \\sin\\theta_0 \\le \\sqrt{n_1^2 - n_2^2} = \\text{ON}$.',
            formula: {
              name: 'Ouverture numérique (ON) et angle d\'acceptance maximal d\'une fibre optique',
              formula: '\\text{ON} = n_0 \\sin\\theta_{0,\\max} = \\sqrt{n_1^2 - n_2^2} = n_1\\sqrt{2\\Delta}',
              note: 'Dans l\'air (n0 = 1), sin(theta_max) = sqrt(n1² - n2²). Le cône de demi-angle au sommet theta_max est appelé cône d\'acceptance.',
            },
            keyRule:
              'Un rayon incident dans l\'air sous un angle theta0 avec l\'axe de la fibre est guidé si et seulement si sin(theta0) <= ON = sqrt(n1² - n2²).',
            konanTip:
              'Attention au piège d\'angles : $\\theta_1$ est l\'angle du rayon avec **l\'axe** de la fibre, tandis que $\\varphi = 90^\\circ - \\theta_1$ est l\'angle d\'incidence avec la **normale** à l\'interface cœur/gaine ($\\sin\\varphi = \\cos\\theta_1$) !',
            exercise: {
              id: 'srit_opt_c1_p3_q2',
              type: 'mcq',
              prompt:
                'Quelle est l\'ouverture numérique $\\text{ON}$ d\'une fibre optique dont le cœur a pour indice $n_1 = 1{,}50$ et la gaine a pour indice $n_2 = 1{,}44$ ?',
              options: [
                'ON = √(1,50² - 1,44²) = 0,42',
                'ON = 1,50 - 1,44 = 0,06',
                'ON = 1,44 / 1,50 = 0,96',
                'ON = √(1,50² + 1,44²) ≈ 2,08',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par définition, ON = √(n₁² - n₂²) = √(2,25 - 2,0736) = √0,1764 = 0,42.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Dispersion intermodale',
            stepTheme: 'green',
            stepTitle: 'Chemin optique, retard intermodal Δτ et bande passante d\'une fibre',
            paragraphText:
              'Dans une fibre multimode à saut d\'indice de longueur géométrique $L$, le **rayon axial** ($\\theta_1 = 0$) parcourt exactement la distance $d_{\\min} = L$ en un temps $\\tau_{\\min} = \\frac{n_1 L}{c}$. Au contraire, le **rayon le plus incliné** (à la limite de réflexion totale $\\cos\\theta_{1,\\max} = n_2 / n_1$) parcourt en zigzag une distance totale plus longue $d_{\\max} = \\frac{L}{\\cos\\theta_{1,\\max}} = L\\frac{n_1}{n_2}$, en un temps $\\tau_{\\max} = \\frac{n_1 d_{\\max}}{c} = \\frac{n_1^2 L}{n_2 c}$. L\'écart temporel $\\Delta\\tau = \\tau_{\\max} - \\tau_{\\min}$ entre ces deux modes extrêmes élargit les impulsions numériques et s\'appelle la **dispersion intermodale**.',
            formula: {
              name: 'Étalement temporel (dispersion intermodale) sur une fibre de longueur L',
              formula: '\\Delta\\tau = \\tau_{\\max} - \\tau_{\\min} = \\frac{n_1 L}{c}\\left(\\frac{n_1}{n_2} - 1\\right) = \\frac{n_1(n_1 - n_2)}{n_2\\,c}\\,L',
              note: 'Le débit binaire maximal transmissible sans recouvrement des bits est inversement proportionnel à Delta_tau (B_max ≈ 1 / (2 Delta_tau)).',
            },
            keyRule:
              'Sur une fibre de longueur L, le trajet géométrique le plus long guidé vaut d_max = L × (n1 / n2), et son chemin optique vaut L_opt,max = n1² × L / n2.',
            konanTip:
              'Pour supprimer la dispersion intermodale en télécoms longue distance, on utilise une **fibre à gradient d\'indice** (où les rayons obliques vont plus vite en périphérie) ou une **fibre monomode** (un seul mode axial).',
            exercise: {
              id: 'srit_opt_c1_p3_q3',
              type: 'mcq',
              prompt:
                'Dans une fibre à saut d\'indice de longueur $L$, quel est le rapport $d_{\\max} / d_{\\min}$ entre la distance géométrique parcourue par le rayon guidé le plus incliné et celle parcourue par le rayon axial ?',
              options: [
                'n₁ / n₂',
                'n₂ / n₁',
                '√(n₁² - n₂²)',
                '(n₁ - n₂) / n₁',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le rayon axial parcourt d_min = L. Le rayon limite incliné d\'un angle θ₁,max avec l\'axe (tel que cos θ₁,max = n₂/n₁) parcourt d_max = L / cos(θ₁,max) = L × (n₁ / n₂). Le rapport vaut donc n₁ / n₂.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Nombre de réflexions',
            stepTheme: 'slate',
            stepTitle: 'Calcul du pas d\'un zigzag et du nombre de réflexions dans le cœur',
            paragraphText:
              'Soit une fibre optique dont le cœur a un diamètre $D_c = 2a$ (rayon $a$) et une longueur totale $L$. Un rayon méridien se propageant dans le cœur en faisant un angle $\\theta_1$ avec l\'axe optique parcourt entre deux réflexions totales consécutives sur les parois opposées du cœur une distance longitudinale (projetée sur l\'axe) égale à $p = \\frac{D_c}{\\tan\\theta_1} = D_c \\tan\\varphi$. Le nombre total de réflexions totales subies sur toute la longueur $L$ de la fibre est donc de l\'ordre de $N \\approx \\frac{L}{p} = \\frac{L \\tan\\theta_1}{D_c}$.',
            keyRule:
              'La distance axiale entre deux rebonds successifs dans un cœur de diamètre Dc vaut p = Dc / tan(theta1), d\'où N = (L × tan(theta1)) / Dc réflexions.',
            konanTip:
              'Pour un cœur de diamètre $D_c = 50\\,\\mu\\text{m}$, une longueur $L = 1\\text{ m}$ et $\\theta_1 = 10^\\circ$, le rayon subit déjà plus de $3\\,500$ réflexions totales par mètre sans aucune perte d\'énergie par réfraction !',
            exercise: {
              id: 'srit_opt_c1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans une fibre optique de longueur $L = 1\\text{ m}$ et de diamètre de cœur $D_c = 50\\,\\mu\\text{m}$, un rayon se propage avec un angle interne $\\theta_1$ tel que $\\tan\\theta_1 = 0{,}10$. Quelle est la distance axiale $p$ entre deux réflexions successives et le nombre $N$ de réflexions sur $1\\text{ m}$ ?',
              options: [
                'p = 0,5 mm et N = 2 000 réflexions',
                'p = 5 µm et N = 200 000 réflexions',
                'p = 5 mm et N = 200 réflexions',
                'p = 50 µm et N = 20 000 réflexions',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La distance axiale entre deux rebonds vaut p = Dc / tan(θ₁) = 50 µm / 0,10 = 500 µm = 0,5 mm. Sur L = 1 m = 1000 mm, le nombre de réflexions est N = L / p = 1000 / 0,5 = 2 000.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Immersion & Courbures',
            stepTheme: 'orange',
            stepTitle: 'Influence du milieu extérieur n0 et des pertes par courbure de la fibre',
            paragraphText:
              'Deux pièges classiques apparaissent dans les problèmes de fibres optiques : **1.** L\'ouverture numérique intrinsèque $\\text{ON} = \\sqrt{n_1^2 - n_2^2}$ ne dépend que du cœur et de la gaine, mais le **demi-angle du cône d\'acceptance** $\\theta_{0,\\max}$ dans le milieu extérieur d\'indice $n_0$ vérifie $\\sin\\theta_{0,\\max} = \\frac{\\text{ON}}{n_0}$ : si l\'entrée de la fibre est plongée dans l\'eau ($n_0 = 1{,}33$) au lieu de l\'air ($n_0 = 1$), l\'angle d\'acceptance $\\theta_{0,\\max}$ **diminue** ! **2.** Si la fibre subit une **courbure trop prononcée** (faible rayon de courbure $R$), l\'angle d\'incidence local $\\varphi$ sur la paroi extérieure du virage diminue et peut passer sous l\'angle limite $\\varphi_L$ : une partie de la lumière s\'échappe alors dans la gaine (**pertes par macro-courbure**).',
            keyRule:
              'En milieu extérieur d\'indice n0 != 1, la formule du cône d\'acceptance est n0 sin(theta0,max) = sqrt(n1² - n2²), soit sin(theta0,max) = ON / n0.',
            konanTip:
              'C\'est pour éviter que $\\varphi$ ne devienne inférieur à $\\varphi_L$ que les techniciens télécoms respectent toujours un **rayon de courbure minimal** lors du tirage des jarretières optiques !',
            exercise: {
              id: 'srit_opt_c1_p3_q5',
              type: 'mcq',
              prompt:
                'Une fibre optique d\'ouverture numérique $\\text{ON} = \\sqrt{n_1^2 - n_2^2} = 0{,}26$ a sa face d\'entrée plongée dans un liquide d\'indice $n_0 = 1{,}30$. Que vaut le sinus du demi-angle maximal d\'acceptance $\\sin\\theta_{0,\\max}$ dans ce liquide ?',
              options: [
                'sin(θ₀,max) = ON / n₀ = 0,26 / 1,30 = 0,20',
                'sin(θ₀,max) = ON = 0,26',
                'sin(θ₀,max) = n₀ × ON = 0,338',
                'sin(θ₀,max) = 0',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La loi de Snell-Descartes à la face d\'entrée donne n₀ sin(θ₀,max) = n₁ sin(θ₁,max) = √(n₁² - n₂²) = ON, d\'où sin(θ₀,max) = ON / n₀ = 0,26 / 1,30 = 0,20.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Atténuation linéique dB/km',
            stepTheme: 'violet',
            stepTitle: 'Atténuation linéique d\'une liaison optique et fenêtres télécoms',
            paragraphText:
              'Au cours de sa propagation sur une longueur $L$ (en km) dans la fibre, la puissance optique $P(L)$ décroît exponentiellement en raison de la diffusion de Rayleigh et de l\'absorption infrarouge de la silice. En ingénierie télécom (SRIT), on caractérise cette perte par le **coefficient d\'atténuation linéique $\\alpha_{\\text{dB}}$** exprimé en **$\\text{dB/km}$** : $A_{\\text{dB}} = \\alpha_{\\text{dB}} \\cdot L = 10\\log_{10}\\!\\left(\\frac{P_{\\text{entrée}}}{P_{\\text{sortie}}}\\right)$. Les trois fenêtres de transmission normalisées de la silice sont **$850\\text{ nm}$** ($\\alpha \\approx 2{,}5\\text{ dB/km}$, réseaux locaux LAN), **$1310\\text{ nm}$** ($\\alpha \\approx 0{,}35\\text{ dB/km}$, dispersion chromatique nulle) et **$1550\\text{ nm}$** ($\\alpha \\approx 0{,}20\\text{ dB/km}$, minimum absolu d\'atténuation pour les câbles sous-marins et grandes distances).',
            formula: {
              name: 'Affaiblissement en décibels d\'une fibre optique de longueur L',
              formula: 'A_{\\text{dB}} = \\alpha_{\\text{dB}}\\cdot L = 10\\log_{10}\\!\\left(\\frac{P_e}{P_s}\\right) \\quad \\Longleftrightarrow \\quad P_s = P_e \\cdot 10^{-\\frac{\\alpha_{\\text{dB}}\\,L}{10}}',
              note: 'Une perte de 3 dB correspond exactement à une division par 2 de la puissance optique (10^(-3/10) ≈ 0,5) ; une perte de 10 dB divise la puissance par 10.',
            },
            keyRule:
              'En décibels, une atténuation totale de 3 dB divise la puissance par 2, 10 dB divise la puissance par 10, et 20 dB divise la puissance par 100.',
            konanTip:
              'La troisième fenêtre télécom à $\\lambda_0 = 1550\\text{ nm}$ offre l\'atténuation minimale de la silice ($0{,}2\\text{ dB/km}$) : sur $15\\text{ km}$, la perte vaut $0{,}2 \\times 15 = 3\\text{ dB}$, soit la moitié de la puissance injectée.',
            exercise: {
              id: 'srit_opt_c1_p3_q6',
              type: 'mcq',
              prompt:
                'Un laser injecte une puissance optique $P_e = 10\\text{ mW}$ à $\\lambda_0 = 1550\\text{ nm}$ dans une fibre optique de longueur $L = 50\\text{ km}$ ayant une atténuation linéique $\\alpha = 0{,}20\\text{ dB/km}$. Quelle est la puissance optique $P_s$ reçue en sortie ?',
              options: [
                '1,0 mW (perte totale de 10 dB, soit une division par 10)',
                '5,0 mW (perte de 3 dB)',
                '0,1 mW (perte de 20 dB)',
                '2,0 mW',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'affaiblissement total vaut A = α × L = 0,20 × 50 = 10 dB. Or 10 log₁₀(Pe / Ps) = 10 dB ⇔ Pe / Ps = 10¹ = 10, donc Ps = Pe / 10 = 10 mW / 10 = 1,0 mW.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : STIGMATISME, CONDITIONS DE GAUSS, MIROIRS PLANS ET SPHÉRIQUES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_optique_ch2',
    subjectId: 'lmd_optique_geometrique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (Optique Géométrique)',
    title: 'Stigmatisme, Conditions de Gauss, Miroirs plans et Miroirs sphériques',
    summary:
      'Objets et images réels ou virtuels, stigmatisme rigoureux et approché (conditions de Gauss), miroir plan, miroirs sphériques concave et convexe, relations de Descartes et de Newton.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_optique_ch2_p1',
        order: 1,
        title: 'Systèmes optiques, stigmatisme, aplanétisme, conditions de Gauss et miroir plan',
        summary:
          'Distinguer objets et images réels ou virtuels, définir le stigmatisme rigoureux et l\'approximation paraxiale de Gauss, et maîtriser les lois du miroir plan.',
        conceptExplanation:
          'Un système optique est rigoureusement stigmatique pour un couple de points conjugués (A, A\') si tout rayon passant par A passe par A\' après traversée du système. Le miroir plan est le seul système usuel rigoureusement stigmatique pour tout point de l\'espace ; les systèmes sphériques ne sont stigmatiques que dans les conditions de Gauss (rayons paraxiaux).',
        keyRule:
          'Le miroir plan donne de tout point objet A une image A\' symétrique orthogonale par rapport au plan du miroir (HA\' = -HA), de nature opposée (objet réel ↔ image virtuelle) et de grandissement gamma = +1.',
        workedExample: {
          title: 'Déplacement de l\'image et du rayon réfléchi lors du mouvement d\'un miroir plan',
          statement:
            'Un objet réel A est placé à 30 cm devant un miroir plan M. 1) Où se trouve son image A\' ? 2) Si l\'on recule le miroir de d = 5 cm en s\'éloignant de A, de combien se déplace l\'image A\' par rapport à A ?',
          methodSteps: [
            '1. Initialement, HA = -30 cm donc HA\' = -HA = +30 cm derrière le miroir : la distance AA\' vaut 2 × 30 = 60 cm.',
            '2. Après recul du miroir de 5 cm, la nouvelle distance objet-miroir est 35 cm, donc la nouvelle distance objet-image est 2 × 35 = 70 cm.',
            '3. L\'image A\' s\'est déplacée de 70 - 60 = 10 cm = 2d dans le même sens que le miroir.',
          ],
          conclusion: 'Translater un miroir plan de d translate l\'image de 2d ; tourner un miroir plan d\'un angle alpha tourne le rayon réfléchi de 2 alpha.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Réel vs Virtuel',
            stepTheme: 'blue',
            stepTitle: 'Espace objet, espace image, réalité et virtualité des points conjugués',
            paragraphText:
              'Par convention universelle, la lumière se propage **de la gauche vers la droite** (sens positif de l\'axe optique). Un **point objet $A$** est le point d\'intersection des rayons incidents qui entrent dans le système optique : si les rayons incidents divergent effectivement depuis $A$ (situé avant la face d\'entrée), l\'objet est **réel** ; si les rayons incidents convergent vers un point $A$ situé après la face d\'entrée (prolongements en pointillés), l\'objet est **virtuel**. Symétriquement, un **point image $A\'$** est **réel** si les rayons émergents convergent effectivement en $A\'$ (on peut la recueillir sur un écran), et **virtuel** si les rayons émergents divergent en semblant provenir de leurs prolongements en $A\'$ (visible à l\'œil nu mais non projetable sur un écran).',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Classification Objet / Image × Réel / Virtuel pour un système optique',
              matrix2x2: {
                topAxis: ['Rayons incidents (Objet A)', 'Rayons émergents (Image A\')'],
                leftAxis: ['Nature RÉELLE (croisement effectif)', 'Nature VIRTUELLE (croisement des prolongements)'],
                topLeft: {
                  title: 'Objet Réel',
                  items: ['Faisceau incident divergent issu de A', 'Situé dans l\'espace objet réel (avant l\'entrée)', 'Source physique directe (bougie, LED)'],
                  color: 'blue',
                },
                topRight: {
                  title: 'Image Réelle',
                  items: ['Faisceau émergent convergent en A\'', 'Située dans l\'espace image réel (après la sortie)', 'Projetable directement sur un écran'],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Objet Virtuel',
                  items: ['Faisceau incident convergent vers A', 'Formé par un système optique placé en amont', 'Situé après la face d\'entrée'],
                  color: 'orange',
                },
                bottomRight: {
                  title: 'Image Virtuelle',
                  items: ['Faisceau émergent divergent semblant venir de A\'', 'Non projetable sur un écran', 'Observable directement à l\'œil nu (miroir plan, loupe)'],
                  color: 'violet',
                },
              },
            },
            keyRule:
              'Une image réelle est formée par l\'intersection effective des rayons émergents (projetable sur un écran) ; une image virtuelle est formée par l\'intersection des prolongements des rayons émergents.',
            konanTip:
              'Pour un miroir (système catoptrique), l\'espace réel (objet ET image) se trouve **devant** la face réfléchissante, et l\'espace virtuel se trouve **derrière** le miroir !',
            exercise: {
              id: 'srit_opt_c2_p1_q1',
              type: 'mcq',
              prompt:
                'Comment caractérise-t-on physiquement une **image réelle** $A\'$ par opposition à une **image virtuelle** à la sortie d\'un système optique ?',
              options: [
                'Une image réelle est formée par la convergence effective des rayons émergents et peut être recueillie directement sur un écran',
                'Une image réelle ne peut être vue qu\'à travers un oculaire et jamais sur un écran',
                'Une image virtuelle est formée par la convergence effective des rayons émergents sur un écran',
                'Une image réelle se trouve toujours derrière un miroir plan',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En un point image réel A\', les rayons lumineux émergents se croisent physiquement : un écran placé en A\' affiche donc l\'image nette.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Stigmatisme & Fermat',
            stepTheme: 'violet',
            stepTitle: 'Stigmatisme rigoureux, condition de chemin optique constant et aplanétisme',
            paragraphText:
              'Un système optique est **rigoureusement stigmatique** pour un couple de points conjugués $(A, A\')$ si tout rayon issu de $A$ émerge en passant exactement par $A\'$. D\'après le principe de Fermat et le théorème de Malus, le stigmatisme rigoureux entre $A$ et $A\'$ équivaut à la **constance du chemin optique** $(AA\') = \\text{cste}$ quel que soit le rayon suivi à travers le système (ou $\\pm (AA\') = \\text{cste}$ si l\'un des points est virtuel). Par exemple, un miroir parabolique est rigoureusement stigmatique pour le couple $(\\infty_{\\text{axe}}, F)$ (antennes paraboliques télécoms !), et un miroir elliptique pour ses deux foyers $(F_1, F_2)$. Enfin, le système est **aplanétique** s\'il conserve le stigmatisme pour un petit objet $AB$ perpendiculaire à l\'axe (image $A\'B\'$ elle aussi perpendiculaire à l\'axe).',
            keyRule:
              'Condition de Fermat du stigmatisme rigoureux entre deux points réels A et A\' : le chemin optique L(A → M → A\') est strictement le même pour tous les points M d\'ouverture du système.',
            konanTip:
              'C\'est parce que la parabole est rigoureusement stigmatique entre un point à l\'infini sur l\'axe et son foyer $F$ que les réflecteurs de faisceaux hertziens et satellites en SRIT sont paraboliques et non sphériques !',
            exercise: {
              id: 'srit_opt_c2_p1_q2',
              type: 'mcq',
              prompt:
                'D\'après le principe de Fermat, quelle condition sur le chemin optique $(AMA\')$ traduit le **stigmatisme rigoureux** d\'un système optique entre un point objet réel $A$ et un point image réel $A\'$ ?',
              options: [
                'Le chemin optique (AMA\') est constant quel que soit le point d\'incidence M sur le système',
                'Le chemin optique (AMA\') est nul pour tous les rayons',
                'Le chemin optique (AMA\') est proportionnel à la distance de M à l\'axe optique',
                'La distance géométrique AM + MA\' est toujours constante même à travers des verres d\'indice n > 1',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour qu\'une surface d\'onde sphérique issue de A converge exactement en un point unique A\', tous les rayons reliant A à A\' doivent mettre le même temps de parcours, soit un chemin optique (AMA\') = constante.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Conditions de Gauss',
            stepTheme: 'blue',
            stepTitle: 'Stigmatisme approché et conditions de Gauss (approximation paraxiale)',
            paragraphText:
              'Les surfaces sphériques (miroirs sphériques, dioptres sphériques, lentilles) sont faciles à usiner industriellement mais ne sont **pas** rigoureusement stigmatiques (les rayons marginaux convergent plus près du sommet que les rayons centraux : c\'est l\'**aberration géométrique de sphéricité**). Elles deviennent cependant **approximativement stigmatiques et aplanétiques** lorsque l\'on travaille dans les **conditions de Gauss**, c\'est-à-dire avec des **rayons paraxiaux** : **1.** les rayons sont très peu inclinés par rapport à l\'axe optique ($\\alpha \\ll 1\\text{ rad}$) ; **2.** les rayons frappent le système très près du sommet $S$ (faible ouverture, obtenue en plaçant un **diaphragme** centré sur l\'axe). Mathématiquement, on remplace $\\sin\\alpha \\approx \\tan\\alpha \\approx \\alpha$ et $\\cos\\alpha \\approx 1$ (développement limité à l\'ordre 1).',
            formula: {
              name: 'Approximation paraxiale (développements limités à l\'ordre 1 en radians)',
              formula: '\\alpha \\ll 1\\text{ rad} \\implies \\sin\\alpha \\approx \\tan\\alpha \\approx \\alpha \\quad \\text{et} \\quad \\cos\\alpha \\approx 1',
              note: 'Dans les conditions de Gauss, la loi de Snell-Descartes n1 sin(i1) = n2 sin(i2) se linéarise en la loi de Kepler : n1 · i1 = n2 · i2.',
            },
            keyRule:
              'Travailler dans les conditions de Gauss (rayons paraxiaux : proches de l\'axe et peu inclinés sur l\'axe) supprime les aberrations de sphéricité et garantit le stigmatisme et l\'aplanétisme approchés.',
            konanTip:
              'Comment réalise-t-on expérimentalement les conditions de Gauss sur un banc d\'optique ? En diaphragmant le faisceau autour de l\'axe optique principal !',
            exercise: {
              id: 'srit_opt_c2_p1_q3',
              type: 'mcq',
              prompt:
                'En quoi consistent les **conditions de Gauss** pour un système optique centré, et comment devient la loi de réfraction de Snell-Descartes dans cette approximation ?',
              options: [
                'Rayons paraxiaux (proches de l\'axe optique et faiblement inclinés sur lui), ce qui linéarise la réfraction en n₁·i₁ ≈ n₂·i₂',
                'Rayons très inclinés (i₁ proche de 90°) passant par les bords du système, donnant n₁/i₁ = n₂/i₂',
                'Utilisation exclusive d\'une lumière polychromatique blanche sans diaphragme',
                'Égalité stricte des indices n₁ = n₂ de part et d\'autre du système',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les conditions de Gauss imposent des rayons paraxiaux (proches de l\'axe et peu inclinés : i ≪ 1 rad), permettant l\'approximation sin(i) ≈ tan(i) ≈ i et donc n₁·i₁ ≈ n₂·i₂.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Miroir plan',
            stepTheme: 'violet',
            stepTitle: 'Miroir plan : stigmatisme rigoureux, formule de conjugaison et grandissement',
            paragraphText:
              'Le **miroir plan** est le **seul système optique rigoureusement stigmatique et aplanétique pour tout point de l\'espace** (sans avoir besoin des conditions de Gauss). Pour tout point objet $A$, si $H$ désigne sa projection orthogonale sur le plan du miroir, son image conjuguée $A\'$ est le **symétrique orthogonal** de $A$ par rapport au miroir : $\\overline{HA\'} = -\\overline{HA}$. Comme $A$ et $A\'$ sont situés de part et d\'autre du miroir, **l\'image et l\'objet sont toujours de natures opposées** : un objet réel ($\\overline{HA} < 0$) donne une image virtuelle ($\\overline{HA\'} > 0$), et un objet virtuel donne une image réelle. Le grandissement transversal vaut $\\gamma = +1$ (image droite, de même taille que l\'objet, mais énantiomorphe : inversion gauche-droite).',
            formula: {
              name: 'Relation de conjugaison du miroir plan (origine H sur le miroir)',
              formula: '\\overline{HA\'} = -\\overline{HA} \\quad \\Longleftrightarrow \\quad \\overline{HA} + \\overline{HA\'} = 0, \\qquad \\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = +1',
              note: 'Un miroir plan peut être vu comme la limite d\'un miroir sphérique dont le rayon de courbure R = SC tend vers l\'infini (1/SC = 0).',
            },
            keyRule:
              'Le miroir plan est rigoureusement stigmatique pour tout l\'espace : HA\' = -HA. D\'un objet réel il donne une image virtuelle symétrique, droite et de même grandeur.',
            konanTip:
              'Attention : si un faisceau **convergent** tombe sur un miroir plan (objet **virtuel** situé à $20\\text{ cm}$ derrière le miroir), le miroir plan réfléchit les rayons qui convergent effectivement à $20\\text{ cm}$ devant lui, formant une **image réelle** projetable sur un écran !',
            exercise: {
              id: 'srit_opt_c2_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle est la nature de l\'image $A\'$ donnée par un miroir plan lorsque le faisceau incident est un **faisceau convergent** dont les rayons se dirigent vers un point $A$ situé à $15\\text{ cm}$ derrière le miroir ?',
              options: [
                'Une image RÉELLE située à 15 cm devant le miroir (car A est un objet virtuel)',
                'Une image VIRTUELLE située à 15 cm derrière le miroir',
                'Une image VIRTUELLE située à 30 cm devant le miroir',
                'Une image à l\'infini',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un faisceau incident convergent correspond à un objet virtuel A situé à 15 cm derrière le miroir (HA = +15 cm). Par symétrie HA\' = -HA = -15 cm, les rayons réfléchis convergent effectivement à 15 cm devant le miroir en une image réelle A\'.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Translation & Rotation',
            stepTheme: 'green',
            stepTitle: 'Effet d\'une translation et d\'une rotation d\'un miroir plan',
            paragraphText:
              'Deux théorèmes cinématiques du miroir plan sont indispensables aux concours et examens : **1. Translation** : si l\'objet $A$ est fixe et que l\'on translate le miroir plan de $\\vec{d}$ perpendiculairement à son plan, l\'image $A\'$ se translate de **$2\\vec{d}$** dans le même sens (si le miroir s\'approche à la vitesse $V$, l\'image s\'approche de l\'objet fixe à la vitesse $2V$). **2. Rotation** : si la direction du rayon incident est fixe et que l\'on fait tourner le miroir plan d\'un angle $\\alpha$ autour d\'un axe situé dans son plan, la normale tourne de $\\alpha$ et **le rayon réfléchi tourne d\'un angle $2\\alpha$** dans le même sens.',
            formula: {
              name: 'Lois de déplacement (translation d et rotation alpha) du miroir plan',
              formula: '\\Delta \\overline{AA\'} = 2\\,d \\qquad \\text{et} \\qquad \\Delta\\theta_{\\text{réfléchi}} = 2\\,\\alpha',
              note: 'La propriété de déviation 2 alpha est utilisée dans les galvanomètres à miroir et les scanners optiques laser pour amplifier la mesure des petits angles.',
            },
            keyRule:
              'Miroir translaté de d → image translatée de 2d. Miroir tourné d\'un angle alpha → rayon réfléchi tourné d\'un angle 2 alpha.',
            konanTip:
              'Et si c\'est la personne qui avance de $d$ vers un miroir fixe ? Elle s\'approche de $d$ du miroir et son image s\'approche aussi de $d$ du miroir en sens inverse : la distance entre la personne et son image diminue donc de $2d$.',
            exercise: {
              id: 'srit_opt_c2_p1_q5',
              type: 'mcq',
              prompt:
                'Un rayon laser fixe frappe un miroir plan. Si l\'on fait tourner le miroir d\'un angle $\\alpha = 12^\\circ$ autour de son axe, de quel angle tourne le rayon réfléchi ?',
              options: [
                '24° dans le même sens de rotation que le miroir',
                '12° dans le même sens',
                '6° dans le même sens',
                '24° en sens opposé',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque le miroir tourne de α = 12°, sa normale tourne de 12°, ce qui modifie l\'angle d\'incidence de α et la direction totale du rayon réfléchi de 2α = 2 × 12° = 24° dans le même sens.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Association de 2 miroirs',
            stepTheme: 'slate',
            stepTitle: 'Association de deux miroirs plans faisant un dièdre d\'angle alpha',
            paragraphText:
              'Considérons deux miroirs plans $M_1$ et $M_2$ formant un dièdre d\'angle $\\alpha$. Un rayon situé dans un plan perpendiculaire à l\'arête subit une première réflexion sur $M_1$ puis une seconde réflexion sur $M_2$. Un calcul géométrique dans le triangle formé par les deux points d\'incidence et l\'arête montre que la **déviation totale $D$** subie par le rayon après les deux réflexions est **indépendante de l\'angle d\'incidence initial** et vaut simplement **$D = 2\\alpha$** (ou $360^\\circ - 2\\alpha$). En particulier, pour deux miroirs perpendiculaires ($\\alpha = 90^\\circ$, principe du **coin de cube / catadioptre**), $D = 180^\\circ$ : le rayon repart toujours parallèlement à lui-même en sens inverse !',
            keyRule:
              'Après deux réflexions successives sur deux miroirs plans formant un angle alpha, tout rayon incident est dévié d\'un angle constant D = 2 alpha (indépendant de l\'incidence).',
            konanTip:
              'Pour $\\alpha = 90^\\circ$ (deux miroirs à angle droit), le nombre d\'images d\'un objet ponctuel placées sur le cercle centré sur l\'arête vaut $N = \\frac{360^\\circ}{90^\\circ} - 1 = 3$ images.',
            exercise: {
              id: 'srit_opt_c2_p1_q6',
              type: 'mcq',
              prompt:
                'Deux miroirs plans $M_1$ et $M_2$ sont disposés à angle droit ($\\alpha = 90^\\circ$). Quel est l\'angle de déviation totale $D$ d\'un rayon lumineux qui se réfléchit successivement sur $M_1$ puis sur $M_2$ ?',
              options: [
                '180° quel que soit l\'angle d\'incidence (le rayon repart parallèlement au rayon incident en sens opposé)',
                '90° quel que soit l\'angle d\'incidence',
                'Il dépend de l\'angle d\'incidence initial i₁ sur le premier miroir',
                '0° (le rayon continue dans la même direction et le même sens)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Deux réflexions successives sur un dièdre d\'angle α produisent une rotation d\'angle D = 2α. Pour α = 90°, D = 2 × 90° = 180° : le rayon émergent est antiparallèle au rayon incident (catadioptre).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_optique_ch2_p2',
        order: 2,
        title: 'Miroirs sphériques concave et convexe : foyers et relations de conjugaison',
        summary:
          'Définir les éléments cardinaux (sommet S, centre C, foyer F) d\'un miroir sphérique concave ou convexe et appliquer les formules de conjugaison de Descartes (origine en S ou en C) et de Newton.',
        conceptExplanation:
          'Un miroir sphérique de sommet S et de centre de courbure C possède un foyer principal unique F = F\' situé exactement au milieu du segment SC (f = SF = SC / 2 = R / 2). Avec la lumière orientée de gauche à droite, un miroir concave (creux face à la lumière) a SC < 0 et f < 0 (convergent), tandis qu\'un miroir convexe (bombé) a SC > 0 et f > 0 (divergent).',
        keyRule:
          'Formule de Descartes pour un miroir sphérique (origine au sommet S) : 1 / SA\' + 1 / SA = 2 / SC = 1 / f, avec un signe PLUS entre 1/SA\' et 1/SA et grandissement gamma = -SA\' / SA.',
        workedExample: {
          title: 'Image donnée par un miroir sphérique concave (formule de Descartes)',
          statement:
            'Un miroir sphérique concave a un rayon de courbure R = 40 cm (donc SC = -40 cm). On place un objet réel AB de hauteur 2 cm à 60 cm devant le sommet S (SA = -60 cm). Déterminer la distance focale f = SF, la position SA\', la nature et la taille A\'B\' de l\'image.',
          methodSteps: [
            '1. Distance focale algébrique : f = SF = SC / 2 = -40 / 2 = -20 cm.',
            '2. Formule de Descartes : 1 / SA\' + 1 / SA = 1 / f ⇒ 1 / SA\' = 1 / (-20) - 1 / (-60) = -3/60 + 1/60 = -2/60 = -1/30 ⇒ SA\' = -30 cm.',
            '3. Grandissement : gamma = -SA\' / SA = -(-30) / (-60) = -0,5 ⇒ A\'B\' = gamma × AB = -1,0 cm.',
          ],
          conclusion: 'SA\' = -30 cm < 0 : l\'image est RÉELLE (située 30 cm devant le miroir), RENVERSÉE (gamma < 0) et deux fois plus petite (1 cm).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Concave vs Convexe',
            stepTheme: 'blue',
            stepTitle: 'Éléments géométriques (S, C, R) et conventions de signes des miroirs sphériques',
            paragraphText:
              'Un **miroir sphérique** est une calotte sphérique réfléchissante de **centre de courbure $C$**, de **sommet $S$** (pôle sur l\'axe optique principal $(SC)$) et de rayon algébrique $R = \\overline{SC}$. Avec l\'axe optique orienté dans le sens de la lumière incidente (de gauche à droite) : **1.** Un **miroir concave** présente sa face creuse à la lumière incidente ; son centre $C$ est situé *devant* le miroir (à gauche de $S$), donc **$\\overline{SC} = R < 0$** : c\'est un miroir **convergent**. **2.** Un **miroir convexe** présente sa face bombée à la lumière incidente ; son centre $C$ est situé *derrière* le miroir (à droite de $S$), donc **$\\overline{SC} = R > 0$** : c\'est un miroir **divergent**.',
            keyRule:
              'Lumière venant de la gauche : Miroir CONCAVE (convergent) ⇔ SC < 0 et SF < 0 (foyer réel). Miroir CONVEXE (divergent) ⇔ SC > 0 et SF > 0 (foyer virtuel).',
            konanTip:
              'Pour un miroir sphérique, tout point situé **devant** la face réfléchissante (abscisse $\\overline{SM} < 0$) est **RÉEL**, et tout point situé **derrière** le miroir ($\\overline{SM} > 0$) est **VIRTUEL** !',
            exercise: {
              id: 'srit_opt_c2_p2_q1',
              type: 'mcq',
              prompt:
                'La lumière incidente se propageant de gauche à droite (sens positif de l\'axe), quels sont les signes algébriques du rayon $\\overline{SC}$ et de la distance focale $f = \\overline{SF}$ pour un **miroir sphérique concave** de rayon géométrique $50\\text{ cm}$ ?',
              options: [
                'SC = -50 cm < 0 et f = SF = -25 cm < 0 (foyer réel situé devant le miroir)',
                'SC = +50 cm > 0 et f = SF = +25 cm > 0 (foyer virtuel situé derrière le miroir)',
                'SC = -50 cm < 0 et f = SF = +25 cm > 0',
                'SC = +50 cm > 0 et f = SF = -25 cm < 0',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour un miroir concave (creux tourné vers la gauche d\'où vient la lumière), le centre C et le foyer F (milieu de SC) sont situés à gauche du sommet S : leurs mesures algébriques sont négatives, SC = -50 cm et SF = SC/2 = -25 cm.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Foyer F = F\'',
            stepTheme: 'violet',
            stepTitle: 'Superposition des foyers objet et image au milieu de SC (f = R/2)',
            paragraphText:
              'En vertu du principe du retour inverse de la lumière et de la loi de réflexion $r = -i$, tout rayon incident parallèle à l\'axe optique ($A \\to \\infty$) se réfléchit en coupant l\'axe au **foyer principal image $F\'$**, et réciproquement tout rayon passant par le **foyer principal objet $F$** se réfléchit parallèlement à l\'axe ($A\' \\to \\infty$). Pour un miroir sphérique, **les foyers principaux objet et image sont confondus en un point unique $F = F\'$**, situé dans les conditions de Gauss **exactement au milieu du segment $[SC]$** : $f = f\' = \\overline{SF} = \\frac{\\overline{SC}}{2} = \\frac{R}{2}$ (et donc $\\overline{CF} = -\\frac{\\overline{SC}}{2} = -f$). La vergence d\'un miroir s\'écrit $V = -\\frac{1}{f} = -\\frac{2}{\\overline{SC}}$ ($V > 0$ pour un miroir concave).',
            formula: {
              name: 'Position du foyer principal d\'un miroir sphérique dans les conditions de Gauss',
              formula: 'F = F\' \\quad \\text{milieu de } [SC] \\implies f = \\overline{SF} = \\frac{\\overline{SC}}{2} = \\frac{R}{2}',
              note: 'Le foyer F est réel (devant le miroir, SF < 0) pour un miroir concave, et virtuel (derrière le miroir, SF > 0) pour un miroir convexe.',
            },
            keyRule:
              'Pour tout miroir sphérique dans l\'approximation de Gauss, le foyer F est le milieu du segment reliant le sommet S au centre de courbure C : SF = SC / 2.',
            konanTip:
              'Par ailleurs, le sommet $S$ et le centre $C$ sont chacun leur propre image conjuguée (**points doubles** ou points autopaires du miroir : $S\' = S$ et $C\' = C$).',
            exercise: {
              id: 'srit_opt_c2_p2_q2',
              type: 'mcq',
              prompt:
                'Où se situe le foyer principal $F$ d\'un miroir sphérique de sommet $S$ et de centre de courbure $C$ dans les conditions de Gauss, et quels sont les deux points doubles du miroir sur l\'axe optique ?',
              options: [
                'F est le milieu du segment [SC] (SF = SC/2), et les deux points doubles (conjugués d\'eux-mêmes) sont S et C',
                'F est confondu avec le centre C (SF = SC), et le seul point double est S',
                'F est situé à la distance SF = 2 SC, et les points doubles sont F et C',
                'Le foyer objet F et le foyer image F\' sont symétriques par rapport au sommet S (SF\' = -SF)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans les conditions de Gauss, F = F\' est le milieu de [SC] (SF = SC/2). De plus, tout rayon frappant S est symétrique par rapport à l\'axe (S\' = S) et tout rayon passant par C arrive normalement au miroir et repart sur lui-même (C\' = C).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Formules de Descartes',
            stepTheme: 'violet',
            stepTitle: 'Relations de conjugaison et de grandissement de Descartes (origine en S)',
            paragraphText:
              'En choisissant le **sommet $S$** comme origine des mesures algébriques sur l\'axe optique orienté, la position de l\'image $\\overline{SA\'}$ et celle de l\'objet $\\overline{SA}$ d\'un miroir sphérique dans les conditions de Gauss sont liées par la **relation de conjugaison de Descartes** : $\\frac{1}{\\overline{SA\'}} + \\frac{1}{\\overline{SA}} = \\frac{2}{\\overline{SC}} = \\frac{1}{\\overline{SF}} = \\frac{1}{f}$. Le **grandissement transversal** $\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}}$ vaut alors **$\\gamma = -\\frac{\\overline{SA\'}}{\\overline{SA}}$** (attention au signe **moins**, contrairement aux lentilles !). Si $\\gamma > 0$, l\'image est **droite** (même sens que l\'objet) ; si $\\gamma < 0$, l\'image est **renversée**.',
            formula: {
              name: 'Relations de conjugaison et de grandissement de Descartes (origine au sommet S)',
              formula: '\\frac{1}{\\overline{SA\'}} + \\frac{1}{\\overline{SA}} = \\frac{2}{\\overline{SC}} = \\frac{1}{f} \\qquad \\text{et} \\qquad \\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = -\\frac{\\overline{SA\'}}{\\overline{SA}}',
              note: 'En isolant SA\', on obtient la forme pratique : SA\' = (SA · f) / (SA - f).',
            },
            keyRule:
              'Miroir sphérique (origine S) : signe PLUS (+) dans la conjugaison 1/SA\' + 1/SA = 1/f et signe MOINS (-) dans le grandissement gamma = -SA\'/SA.',
            konanTip:
              'Conséquence immédiate de $\\gamma = -\\overline{SA\'}/\\overline{SA}$ : si $A$ et $A\'$ ont le même signe (tous deux réels devant le miroir), $\\gamma < 0$ donc l\'image est **renversée** ; s\'ils sont de signes opposés (objet réel, image virtuelle), $\\gamma > 0$ donc l\'image est **droite** !',
            exercise: {
              id: 'srit_opt_c2_p2_q3',
              type: 'mcq',
              prompt:
                'Un objet réel $AB$ est placé à $15\\text{ cm}$ devant un **miroir sphérique convexe** de rayon de courbure $R = +60\\text{ cm}$ ($\\overline{SA} = -15\\text{ cm}$ et $f = \\overline{SF} = +30\\text{ cm}$). Que valent la position $\\overline{SA\'}$ et le grandissement $\\gamma$ de l\'image ?',
              options: [
                'SA\' = +10 cm (image virtuelle) et γ = +2/3 (image droite et réduite)',
                'SA\' = -30 cm (image réelle) et γ = -2 (image renversée et agrandie)',
                'SA\' = +30 cm (image virtuelle) et γ = -2',
                'SA\' = -10 cm (image réelle) et γ = +2/3',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec 1/SA\' + 1/SA = 1/f, on a 1/SA\' = 1/30 - 1/(-15) = 1/30 + 2/30 = 3/30 = 1/10 ⇒ SA\' = +10 cm > 0 (image virtuelle derrière le miroir convexe). Le grandissement vaut γ = -SA\'/SA = -10 / (-15) = +2/3 > 0 (droite et réduite : principe du rétroviseur grand angle).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Origine en C & Newton',
            stepTheme: 'violet',
            stepTitle: 'Formule de Descartes (origine au centre C) et formules de Newton (origine au foyer F)',
            paragraphText:
              'Outre l\'origine au sommet $S$, deux autres origines sont très utilisées pour un miroir sphérique : **1. Origine au centre $C$** : la relation de conjugaison garde exactement la même forme symétrique $\\frac{1}{\\overline{CA\'}} + \\frac{1}{\\overline{CA}} = \\frac{2}{\\overline{CS}} = \\frac{1}{\\overline{CF}}$, mais le grandissement change de signe et devient **$\\gamma = +\\frac{\\overline{CA\'}}{\\overline{CA}}$**. **2. Origine au foyer $F$ (relations de Newton)** : en posant $\\overline{FA}$ et $\\overline{FA\'}$ les abscisses par rapport au foyer $F$ et $f = \\overline{SF}$, la conjugaison et le grandissement deviennent purement multiplicatifs : **$\\overline{FA}\\cdot\\overline{FA\'} = f^2 > 0$** et **$\\gamma = -\\frac{f}{\\overline{FA}} = -\\frac{\\overline{FA\'}}{f}$**.',
            formula: {
              name: 'Relations de Descartes (origine C) et de Newton (origine F) du miroir sphérique',
              formula: '\\text{Origine } C : \\; \\frac{1}{\\overline{CA\'}} + \\frac{1}{\\overline{CA}} = \\frac{2}{\\overline{CS}}, \\; \\gamma = +\\frac{\\overline{CA\'}}{\\overline{CA}} \\qquad \\text{Newton (origine } F\\text{)} : \\; \\overline{FA}\\cdot\\overline{FA\'} = f^2, \\; \\gamma = -\\frac{f}{\\overline{FA}} = -\\frac{\\overline{FA\'}}{f}',
              note: 'Dans la formule de Newton du miroir sphérique, le produit FA · FA\' = f² est toujours STRICTEMENT POSITIF : A et A\' sont donc toujours du même côté par rapport au foyer F !',
            },
            keyRule:
              'Relation de Newton d\'un miroir sphérique : FA × FA\' = f² = (+SF)² > 0, ce qui prouve que l\'objet A et son image A\' se trouvent toujours du même côté du foyer F.',
            konanTip:
              'Ne confondez pas la relation de Newton du **miroir sphérique** ($\\overline{FA}\\cdot\\overline{FA\'} = +f^2 > 0$) avec celle de la **lentille mince** ($\\overline{FA}\\cdot\\overline{F\'A\'} = -f\'^2 < 0$) !',
            exercise: {
              id: 'srit_opt_c2_p2_q4',
              type: 'mcq',
              prompt:
                'Pour un miroir sphérique de distance focale $f = \\overline{SF} = -20\\text{ cm}$, un objet $A$ est situé à $\\overline{FA} = -10\\text{ cm}$ du foyer $F$. Que valent la position $\\overline{FA\'}$ et le grandissement $\\gamma$ d\'après les formules de Newton ?',
              options: [
                'FA\' = -40 cm et γ = -2',
                'FA\' = +40 cm et γ = +2',
                'FA\' = -10 cm et γ = -1',
                'FA\' = -20 cm et γ = -0,5',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D\'après la relation de Newton FA · FA\' = f², on a (-10) × FA\' = (-20)² = +400 ⇒ FA\' = -40 cm. Le grandissement vaut γ = -f / FA = -(-20) / (-10) = -2.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Construction géométrique',
            stepTheme: 'green',
            stepTitle: 'Les 4 rayons particuliers pour construire l\'image A\'B\' d\'un miroir sphérique',
            paragraphText:
              'Pour construire géométriquement l\'image $A\'B\'$ d\'un objet $AB$ perpendiculaire à l\'axe optique d\'un miroir sphérique (dans l\'approximation de Gauss où l\'onassimile le miroir à son plan tangent en $S$), il suffit de tracer au moins **deux des quatre rayons particuliers** issus de $B$ : **1.** Le rayon incident **parallèle à l\'axe optique** se réfléchit en passant par le foyer $F$. **2.** Le rayon incident **passant par le foyer $F$** se réfléchit parallèlement à l\'axe optique. **3.** Le rayon incident **passant par le centre $C$** frappe le miroir normalement ($i = 0$) et **repart sur lui-même** en sens inverse. **4.** Le rayon frappant le **sommet $S$** se réfléchit symétriquement par rapport à l\'axe optique principal.',
            visualSchema: {
              type: 'flowchart',
              title: 'Règles de tracé des 4 rayons caractéristiques issus de B sur un miroir sphérique',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { id: 'r1', label: 'Rayon 1 : Incident parallèle à l\'axe optique', sublabel: '→ Réfléchi en passant par le foyer principal F', kind: 'process', color: 'blue' },
                  { id: 'r2', label: 'Rayon 2 : Incident passant par le foyer principal F', sublabel: '→ Réfléchi parallèlement à l\'axe optique', kind: 'process', color: 'green' },
                  { id: 'r3', label: 'Rayon 3 : Incident passant par le centre de courbure C', sublabel: '→ Incidence normale (i = 0) : repart exactement sur lui-même', kind: 'process', color: 'violet' },
                  { id: 'r4', label: 'Rayon 4 : Incident frappant le sommet S du miroir', sublabel: '→ Réfléchi symétriquement par rapport à l\'axe optique (r = -i)', kind: 'end', color: 'orange' },
                ],
              },
            },
            keyRule:
              'Tout rayon passant par le centre C d\'un miroir sphérique est perpendiculaire à la surface sphérique et se réfléchit donc sur sa propre trajectoire.',
            konanTip:
              'Si le rayon vise un foyer ou un centre **virtuel** situé derrière un miroir convexe, tracez la partie derrière le miroir en **pointillés** !',
            exercise: {
              id: 'srit_opt_c2_p2_q5',
              type: 'mcq',
              prompt:
                'Comment se comporte un rayon lumineux incident dont la direction passe par le **centre de courbure $C$** d\'un miroir sphérique (concave ou convexe) ?',
              options: [
                'Il frappe le miroir sous incidence normale (i = 0) et se réfléchit exactement sur lui-même en sens inverse',
                'Il se réfléchit parallèlement à l\'axe optique principal',
                'Il se réfléchit en passant par le sommet S',
                'Il subit une déviation de 90°',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Tout rayon d\'une sphère est normal à la surface sphérique en son point d\'impact. L\'angle d\'incidence par rapport à la normale (C-I) est donc i = 0, d\'où r = 0 : le rayon repart sur lui-même.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Foyers secondaires',
            stepTheme: 'orange',
            stepTitle: 'Plan focal et construction d\'un rayon incident oblique quelconque',
            paragraphText:
              'Comment tracer le rayon réfléchi correspondant à un rayon incident oblique quelconque qui ne passe ni par $F$, ni par $C$, ni par $S$ ? On utilise le **plan focal** $\\mathcal{P}_F$, plan perpendiculaire à l\'axe optique passant par le foyer principal $F$. Tout faisceau de rayons incidents parallèles entre eux (mais inclinés d\'un angle $\\theta$ par rapport à l\'axe optique) converge après réflexion en un même point $\\Phi$ appartenant au plan focal $\\mathcal{P}_F$, appelé **foyer secondaire**. Pour trouver $\\Phi$, on trace la parallèle au rayon incident passant par le centre $C$ (qui repart sur elle-même) ou par $F$ : son intersection avec le plan focal $\\mathcal{P}_F$ donne immédiatement $\\Phi$ !',
            keyRule:
              'Deux rayons incidents parallèles entre eux (mais non parallèles à l\'axe optique) se croisent après réflexion sur un miroir sphérique en un foyer secondaire situé dans le plan focal.',
            konanTip:
              'La distance du foyer secondaire $\\Phi$ à l\'axe optique vaut $\\overline{F\\Phi} = f \\cdot \\tan\\theta \\approx f\\,\\theta$, où $\\theta$ est l\'inclinaison du faisceau parallèle.',
            exercise: {
              id: 'srit_opt_c2_p2_q6',
              type: 'mcq',
              prompt:
                'En quel lieu géométrique convergent, après réflexion sur un miroir sphérique, deux rayons incidents parallèles entre eux mais inclinés d\'un angle $\\theta \\neq 0$ par rapport à l\'axe optique ?',
              options: [
                'En un foyer secondaire Φ situé dans le plan focal perpendiculaire à l\'axe en F',
                'Au foyer principal F sur l\'axe optique',
                'Au centre de courbure C du miroir',
                'Dans le plan perpendiculaire à l\'axe passant par le centre C',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans les conditions de Gauss, tout faisceau incident cylindrique incliné par rapport à l\'axe optique converge en un foyer secondaire appartenant au plan focal (plan orthogonal à l\'axe passant par F).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_optique_ch2_p3',
        order: 3,
        title: 'Discussion complète de la nature des images des miroirs concave et convexe',
        summary:
          'Analyser toutes les positions possibles de l\'objet réel ou virtuel devant un miroir concave ou convexe, le grandissement longitudinal et les applications pratiques.',
        conceptExplanation:
          'Selon la position de l\'objet réel par rapport à C, F et S, un miroir concave peut donner une image réelle renversée réduite (objet au-delà de C), réelle renversée agrandie (objet entre C et F) ou virtuelle droite agrandie (objet entre F et S). Au contraire, d\'un objet réel, un miroir convexe donne TOUJOURS une image virtuelle, droite et réduite située entre S et F.',
        keyRule:
          'D\'un objet réel, un miroir convexe donne toujours une image virtuelle, droite et plus petite (0 < gamma < 1) ; un miroir concave ne donne une image virtuelle (droite et agrandie, gamma > 1) que si l\'objet réel est placé entre F et S.',
        workedExample: {
          title: 'Conception d\'un miroir de maquillage / dentiste (image droite grossie 3 fois)',
          statement:
            'On souhaite qu\'un miroir sphérique donne d\'une dent (objet réel) située à 2,0 cm devant le sommet S une image virtuelle, droite et 3 fois plus grande (gamma = +3). Déterminer la nature du miroir et son rayon de courbure R = SC.',
          methodSteps: [
            '1. Objet réel à 2 cm devant S ⇒ SA = -2,0 cm. Image droite grossie 3 fois ⇒ gamma = -SA\' / SA = +3 ⇒ SA\' = -3 × SA = +6,0 cm (image bien virtuelle derrière le miroir).',
            '2. Formule de Descartes : 1 / f = 1 / SA\' + 1 / SA = 1 / 6 + 1 / (-2) = (1 - 3) / 6 = -2 / 6 = -1 / 3 ⇒ f = SF = -3,0 cm.',
            '3. Rayon de courbure : R = SC = 2 f = -6,0 cm < 0 ⇒ miroir sphérique CONCAVE de rayon 6,0 cm.',
          ],
          conclusion: 'Il faut un miroir concave de distance focale f = -3 cm (l\'objet à 2 cm est bien placé entre F et S).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Miroir concave : cas 1 & 2',
            stepTheme: 'violet',
            stepTitle: 'Miroir concave avec un objet réel placé au-delà du foyer F (SA < SF < 0)',
            paragraphText:
              'Pour un **miroir concave** ($\\overline{SC} = 2f < 0$), plaçons un objet **réel** $A$ devant le foyer $F$ ($\\overline{SA} < \\overline{SF} < 0$). D\'après Newton ($\\overline{FA}\\cdot\\overline{FA\'} = f^2 > 0$ et $\\gamma = -f/\\overline{FA}$), comme $\\overline{FA} < 0$, on a $\\overline{FA\'} < 0$ (donc $\\overline{SA\'} < \\overline{SF} < 0$) et $\\gamma < 0$ : **l\'image $A\'B\'$ est toujours RÉELLE et RENVERSÉE**. Trois sous-cas remarquables se distinguent : **1.** Objet au-delà de $C$ ($-\\infty < \\overline{SA} < \\overline{SC}$) $\\implies$ image entre $C$ et $F$ ($\\overline{SC} < \\overline{SA\'} < \\overline{SF}$), **réduite** ($-1 < \\gamma < 0$). **2.** Objet en $C$ ($\\overline{SA} = \\overline{SC}$) $\\implies$ image en $C$, de **même taille renversée** ($\\gamma = -1$). **3.** Objet entre $C$ et $F$ ($\\overline{SC} < \\overline{SA} < \\overline{SF}$) $\\implies$ image au-delà de $C$, **agrandie** ($\\gamma < -1$).',
            keyRule:
              'Miroir concave : Objet réel au-delà de C ↔ Image réelle entre C et F (et réciproquement par retour inverse !). En C, gamma = -1.',
            konanTip:
              'C\'est la propriété $\\overline{SA} = \\overline{SC} \\implies \\overline{SA\'} = \\overline{SC}$ avec $\\gamma = -1$ qui permet de mesurer expérimentalement le rayon de courbure $R$ d\'un miroir concave par **autocollimation au centre** !',
            exercise: {
              id: 'srit_opt_c2_p3_q1',
              type: 'mcq',
              prompt:
                'Devant un miroir sphérique concave de sommet $S$, de foyer $F$ et de centre $C$, où faut-il placer un objet réel $AB$ pour obtenir sur un écran une **image réelle, renversée et strictement plus grande que l\'objet** ($\\gamma < -1$) ?',
              options: [
                'Entre le centre de courbure C et le foyer principal F',
                'Au-delà du centre de courbure C (entre -∞ et C)',
                'Exactement au centre de courbure C',
                'Entre le foyer principal F et le sommet S',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque l\'objet réel A est situé entre C et F (|f| < |SA| < 2|f|), on a 0 > FA > -|f|, donc γ = -f / FA < -1 et l\'image A\' est réelle (située au-delà de C), renversée et agrandie.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Miroir concave : entre F et S',
            stepTheme: 'violet',
            stepTitle: 'Miroir concave en effet loupe (objet réel entre F et S) et objet virtuel',
            paragraphText:
              'Que se passe-t-il lorsque l\'objet réel $A$ s\'approche du miroir concave et franchit le foyer $F$ pour se placer **entre $F$ et $S$** ($\\overline{SF} < \\overline{SA} < 0$) ? Alors $\\overline{FA} > 0$, et comme $f = \\overline{SF} < 0$, la formule de Newton donne $\\overline{FA\'} = f^2 / \\overline{FA} > |f|$ (donc $\\overline{SA\'} > 0$) et $\\gamma = -f / \\overline{FA} > +1$ : **l\'image devient VIRTUELLE (derrière le miroir), DROITE et AGRANDIE** ($\\gamma > 1$). C\'est le principe du miroir grossissant (maquillage, rasage, miroir dentaire). Enfin, si l\'objet est **virtuel** (derrière le miroir concave, $\\overline{SA} > 0$), l\'image est toujours **réelle, droite et réduite**, située entre $F$ et $S$ ($0 < \\gamma < 1$).',
            keyRule:
              'Un miroir concave fonctionne en « miroir grossissant » (image virtuelle, droite, gamma > 1) si et seulement si l\'objet réel est placé entre le foyer F et le sommet S.',
            konanTip:
              'Au passage de l\'objet réel par le foyer $F$ ($\\overline{SA} = \\overline{SF}$), l\'image est rejetée à l\'infini ($\\overline{SA\'} \\to \\pm\\infty$) : c\'est le mode projecteur ou phare automobile !',
            exercise: {
              id: 'srit_opt_c2_p3_q2',
              type: 'mcq',
              prompt:
                'Quelles sont les caractéristiques de l\'image $A\'B\'$ d\'un objet réel $AB$ placé **entre le foyer $F$ et le sommet $S$** d\'un miroir sphérique concave ?',
              options: [
                'Image virtuelle, droite et agrandie (γ > 1), située derrière le miroir',
                'Image réelle, renversée et agrandie (γ < -1), située devant le miroir',
                'Image virtuelle, droite et réduite (0 < γ < 1), située entre S et F',
                'Image réelle, droite et réduite',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour SF < SA < 0 (objet réel entre F et S d\'un miroir concave), 1/SA\' = 1/SF - 1/SA > 0 car |SA| < |SF|. On a donc SA\' > 0 (image virtuelle) et γ = -SA\'/SA > 1 (droite et plus grande que l\'objet).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Miroir convexe',
            stepTheme: 'violet',
            stepTitle: 'Miroir sphérique convexe : rétroviseur et surveillance grand champ',
            paragraphText:
              'Pour un **miroir sphérique convexe** ($\\overline{SC} > 0$ et $f = \\overline{SF} > 0$, foyer virtuel situé derrière le miroir), considérons un **objet réel quelconque** ($\\overline{SA} < 0$). Dans la formule de Descartes $\\frac{1}{\\overline{SA\'}} = \\frac{1}{f} - \\frac{1}{\\overline{SA}}$, comme $f > 0$ et $-\\frac{1}{\\overline{SA}} > 0$, la somme est toujours strictement positive et supérieure à $\\frac{1}{f}$ : on a donc systématiquement **$0 < \\overline{SA\'} < f$** et **$0 < \\gamma = -\\frac{\\overline{SA\'}}{\\overline{SA}} < 1$**. Ainsi, **quel que soit l\'emplacement d\'un objet réel devant un miroir convexe, son image est TOUJOURS virtuelle, droite, réduite et confinée entre le sommet $S$ et le foyer $F$** !',
            keyRule:
              'Miroir convexe + Objet réel (SA < 0) ⇒ Image TOUJOURS virtuelle (0 < SA\' < f), droite et réduite (0 < gamma < 1).',
            konanTip:
              'C\'est pourquoi les rétroviseurs automobiles et les miroirs de sécurité routière aux carrefours sont des **miroirs convexes** : ils offrent une image toujours droite et un très large champ de vision (en contrepartie, les objets paraissent plus petits et plus éloignés qu\'en réalité).',
            exercise: {
              id: 'srit_opt_c2_p3_q3',
              type: 'mcq',
              prompt:
                'Un objet réel est placé à une distance quelconque devant un **miroir sphérique convexe**. Quelle est systématiquement la nature de son image ?',
              options: [
                'Toujours virtuelle, droite et réduite (0 < γ < 1), située derrière le miroir entre S et F',
                'Toujours réelle, renversée et réduite',
                'Virtuelle et agrandie si l\'objet est proche de S, réelle et renversée s\'il est loin',
                'Toujours virtuelle, renversée et agrandie',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour un miroir convexe (f > 0) et tout objet réel (SA < 0), 1/SA\' = 1/f + 1/|SA| > 1/f > 0, donc 0 < SA\' < f (virtuelle entre S et F) et 0 < γ = SA\'/|SA| < 1 (droite et réduite).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Objet virtuel & Convexe',
            stepTheme: 'orange',
            stepTitle: 'Comment un miroir convexe peut-il donner une image réelle ?',
            paragraphText:
              'Un piège classique d\'examen consiste à demander : *« Un miroir convexe peut-il former une image réelle sur un écran ? »* La réponse est **OUI, à condition que l\'objet soit VIRTUEL et placé entre le sommet $S$ et le foyer virtuel $F$** ($0 < \\overline{SA} < f$) ! En effet, si un premier système optique fait converger un faisceau vers un point $A$ situé derrière le miroir convexe entre $S$ et $F$ ($0 < \\overline{SA} < f$), alors $\\frac{1}{\\overline{SA\'}} = \\frac{1}{f} - \\frac{1}{\\overline{SA}} < 0 \\implies \\overline{SA\'} < 0$ (image **réelle** devant le miroir), avec $\\gamma = -\\frac{\\overline{SA\'}}{\\overline{SA}} > 1$ (image **droite et agrandie**). C\'est exactement le principe du **miroir secondaire convexe d\'un télescope de Cassegrain** !',
            keyRule:
              'Un miroir convexe (f > 0) donne une image RÉELLE (SA\' < 0) si et seulement si l\'objet est VIRTUEL et situé entre S et F (0 < SA < f).',
            konanTip:
              'C\'est la conséquence directe du principe du retour inverse appliquée au résultat précédent : puisque $[\\text{Objet réel} < 0] \\to [\\text{Image virtuelle} \\in ]0, f[]$, alors $[\\text{Objet virtuel} \\in ]0, f[] \\to [\\text{Image réelle} < 0]$ !',
            exercise: {
              id: 'srit_opt_c2_p3_q4',
              type: 'mcq',
              prompt:
                'Dans quel unique cas un **miroir sphérique convexe** (de sommet $S$ et de foyer $F$ avec $f = \\overline{SF} > 0$) donne-t-il une **image réelle** ($\\overline{SA\'} < 0$) ?',
              options: [
                'Lorsque l\'objet est virtuel et situé entre le sommet S et le foyer F (0 < SA < f)',
                'Lorsque l\'objet est réel et situé entre S et F',
                'Lorsque l\'objet est virtuel et situé au-delà du centre C (SA > 2f)',
                'Jamais, un miroir convexe ne peut en aucun cas donner une image réelle',
              ],
              correctAnswerIndex: 0,
              explanation:
                'De 1/SA\' = 1/f - 1/SA avec f > 0, pour avoir SA\' < 0 (image réelle devant le miroir), il faut et il suffit que 1/SA > 1/f > 0, c\'est-à-dire 0 < SA < f (objet virtuel entre S et F).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Grandissement longitudinal',
            stepTheme: 'green',
            stepTitle: 'Grandissement longitudinal (axial) et grandissement angulaire d\'un miroir',
            paragraphText:
              'Lorsqu\'un petit objet subit un déplacement élémentaire $\\mathrm{d}\\overline{SA}$ le long de l\'axe optique (ou possède une petite épaisseur axiale $\\mathrm{d}x$), son image se déplace de $\\mathrm{d}\\overline{SA\'}$. En différenciant la relation de Descartes $\\frac{1}{\\overline{SA\'}} + \\frac{1}{\\overline{SA}} = \\frac{1}{f}$ (où $f$ est constant), on obtient $-\\frac{\\mathrm{d}\\overline{SA\'}}{\\overline{SA\'}^2} - \\frac{\\mathrm{d}\\overline{SA}}{\\overline{SA}^2} = 0$. On en déduit le **grandissement longitudinal (ou axial)** $g = \\frac{\\mathrm{d}\\overline{SA\'}}{\\mathrm{d}\\overline{SA}} = -\\left(\\frac{\\overline{SA\'}}{\\overline{SA}}\\right)^2 = -\\gamma^2 < 0$. Le signe moins montre un résultat fondamental : **pour un miroir, lorsque l\'objet se déplace le long de l\'axe optique, l\'image se déplace toujours en sens inverse de l\'objet** !',
            formula: {
              name: 'Grandissement longitudinal (axial) d\'un miroir sphérique',
              formula: 'g = \\frac{\\mathrm{d}\\overline{SA\'}}{\\mathrm{d}\\overline{SA}} = -\\left(\\frac{\\overline{SA\'}}{\\overline{SA}}\\right)^2 = -\\gamma^2 < 0',
              note: 'Comme g = -gamma² < 0, l\'objet A et son image A\' évoluent toujours en sens opposés le long de l\'axe optique d\'un miroir.',
            },
            keyRule:
              'Pour tout miroir (plan ou sphérique), le grandissement longitudinal vaut g = d(SA\') / d(SA) = -gamma² < 0 : objet et image se déplacent en sens contraires.',
            konanTip:
              'Comparez bien avec les lentilles minces (Chapitre 3) : pour une lentille, $g = +\\gamma^2 > 0$ (objet et image se déplacent dans le *même* sens), alors que pour un miroir, $g = -\\gamma^2 < 0$ (sens *opposés*) !',
            exercise: {
              id: 'srit_opt_c2_p3_q5',
              type: 'mcq',
              prompt:
                'Pour un miroir sphérique donnant une image avec un grandissement transversal $\\gamma = -2$, que vaut le grandissement longitudinal $g = \\frac{\\mathrm{d}\\overline{SA\'}}{\\mathrm{d}\\overline{SA}}$ et dans quel sens se déplace l\'image si l\'objet avance d\'un petit déplacement $\\mathrm{d}\\overline{SA} > 0$ ?',
              options: [
                'g = -γ² = -4 : l\'image se déplace en sens opposé à l\'objet, d\'une distance 4 fois plus grande',
                'g = +γ² = +4 : l\'image se déplace dans le même sens que l\'objet, d\'une distance 4 fois plus grande',
                'g = γ = -2 : l\'image se déplace en sens opposé d\'une distance 2 fois plus grande',
                'g = -1/γ = +0,5',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En différenciant 1/SA\' + 1/SA = 1/f, on obtient d(SA\')/d(SA) = -(SA\'/SA)² = -γ². Avec γ = -2, on a g = -(-2)² = -4 < 0 (sens opposé, amplitude multipliée par 4).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse Miroirs',
            stepTheme: 'slate',
            stepTitle: 'Distance entre un objet et son image et problème inverse sur banc d\'optique',
            paragraphText:
              'Dans de nombreux exercices d\'examen, l\'énoncé ne donne pas directement $\\overline{SA}$ et $\\overline{SA\'}$, mais la distance $D = |\\overline{AA\'}|$ entre l\'objet réel et l\'écran où se forme l\'image réelle, ainsi que le grandissement $|\\gamma| = k$ (avec $\\gamma = -k < 0$ puisque l\'image réelle d\'un objet réel par un miroir concave est toujours renversée). On résout alors le système $\\overline{SA\'} = k\\,\\overline{SA}$ (puisque $\\gamma = -\\overline{SA\'}/\\overline{SA} = -k$) et $\\overline{SA\'} - \\overline{SA} = (k - 1)\\overline{SA}$, puis on reporte dans $\\frac{1}{f} = \\frac{1}{\\overline{SA\'}} + \\frac{1}{\\overline{SA}} = \\frac{k + 1}{k\\,\\overline{SA}}$ pour déterminer la focale $f$ et le rayon $R = 2f$.',
            keyRule:
              'Si un objet réel et son image réelle sur un écran ont la même nature (tous deux devant le miroir concave : SA < 0 et SA\' < 0), alors gamma = -SA\' / SA est obligatoirement négatif (image renversée).',
            konanTip:
              'Vérifiez toujours la cohérence des signes à la fin d\'un calcul : pour un miroir concave, on doit trouver $f < 0$ et $R = 2f < 0$.',
            exercise: {
              id: 'srit_opt_c2_p3_q6',
              type: 'mcq',
              prompt:
                'Un objet réel $AB$ est placé à $20\\text{ cm}$ devant un miroir sphérique concave ($\\overline{SA} = -20\\text{ cm}$). On recueille une image réelle nette sur un écran placé à $60\\text{ cm}$ devant le miroir ($\\overline{SA\'} = -60\\text{ cm}$). Que valent le grandissement $\\gamma$ et le rayon de courbure $R = \\overline{SC}$ du miroir ?',
              options: [
                'γ = -3 et R = -30 cm (distance focale f = -15 cm)',
                'γ = +3 et R = -30 cm',
                'γ = -3 et R = -15 cm',
                'γ = -1/3 et R = -60 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le grandissement vaut γ = -SA\' / SA = -(-60) / (-20) = -3. Par ailleurs, 1/f = 1/SA\' + 1/SA = 1/(-60) + 1/(-20) = -4/60 = -1/15 ⇒ f = -15 cm, d\'où le rayon de courbure R = 2f = -30 cm.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : DIOPTRES SPHÉRIQUES, LENTILLES MINCES ET INSTRUMENTS D'OPTIQUE
  // ==========================================================================
  {
    id: 'lmd_srit_l1_optique_ch3',
    subjectId: 'lmd_optique_geometrique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (Optique Géométrique)',
    title: 'Dioptres sphériques, Lentilles minces et Systèmes centrés / Instruments d\'optique',
    summary:
      'Dioptres plan et sphérique, formule des opticiens, relations de Descartes et de Newton des lentilles minces, association de lentilles (Gullstrand) et instruments d\'optique.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_optique_ch3_p1',
        order: 1,
        title: 'Dioptre plan, dioptre sphérique et formule des opticiens pour les lentilles minces',
        summary:
          'Établir l\'invariant de réfraction du dioptre sphérique et du dioptre plan dans les conditions de Gauss, puis en déduire la vergence et la formule des opticiens.',
        conceptExplanation:
          'Un dioptre sphérique de sommet S et de centre C séparant deux milieux d\'indices n1 et n2 conjugue A et A\' selon n2/SA\' - n1/SA = (n2 - n1)/SC. L\'association de deux dioptres sphériques d\'épaisseur négligeable constitue une lentille mince de centre optique O dont la vergence V = 1/f\' est donnée par la formule des opticiens.',
        keyRule:
          'Invariant de conjugaison du dioptre sphérique : n2 / SA\' - n1 / SA = (n2 - n1) / SC = V. Pour un dioptre plan (SC → ∞), le second membre est nul : SA\' / n2 = SA / n1.',
        workedExample: {
          title: 'Profondeur apparente d\'un poisson observé verticalement depuis l\'air (dioptre plan)',
          statement:
            'Un poisson A se trouve à une profondeur réelle de 1,20 m sous la surface plane de l\'eau (indice n1 = 4/3 ≈ 1,333). Un observateur situé dans l\'air (n2 = 1,00) le regarde verticalement (conditions de Gauss). À quelle profondeur apparente HA\' voit-il l\'image A\' du poisson ?',
          methodSteps: [
            '1. La lumière va du poisson (eau, n1 = 4/3) vers l\'observateur (air, n2 = 1). Avec H à la surface et l\'axe orienté vers le haut : HA = -1,20 m.',
            '2. Formule du dioptre plan dans les conditions de Gauss : n2 / HA\' = n1 / HA ⇒ HA\' = (n2 / n1) × HA.',
            '3. Application numérique : HA\' = (1 / (4/3)) × (-1,20) = (3/4) × (-1,20) = -0,90 m.',
          ],
          conclusion: 'L\'image A\' est virtuelle et située à 0,90 m sous la surface : le fond de l\'eau paraît rapproché d\'un facteur 3/4.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Dioptre sphérique',
            stepTheme: 'violet',
            stepTitle: 'Relation de conjugaison, grandissement et foyers du dioptre sphérique',
            paragraphText:
              'Un **dioptre sphérique** de sommet $S$, de centre $C$ et de rayon algébrique $R = \\overline{SC}$ sépare un milieu incident d\'indice $n_1$ d\'un milieu émergent d\'indice $n_2$. Dans les conditions de Gauss ($n_1 i_1 \\approx n_2 i_2$), la relation de conjugaison avec origine au sommet $S$ s\'écrit : **$\\frac{n_2}{\\overline{SA\'}} - \\frac{n_1}{\\overline{SA}} = \\frac{n_2 - n_1}{\\overline{SC}} = V$**, où $V$ est la **vergence** du dioptre (en dioptries $\\delta = \\text{m}^{-1}$). Le grandissement transversal vaut **$\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\frac{n_1\\,\\overline{SA\'}}{n_2\\,\\overline{SA}} = \\frac{\\overline{CA\'}}{\\overline{CA}}$**. Les distances focales objet $f = \\overline{SF}$ ($A\' \\to \\infty$) et image $f\' = \\overline{SF\'}$ ($A \\to \\infty$) vérifient $f\' = \\frac{n_2}{n_2 - n_1}\\overline{SC}$ et $f = -\\frac{n_1}{n_2 - n_1}\\overline{SC}$, d\'où $\\frac{f\'}{f} = -\\frac{n_2}{n_1}$.',
            formula: {
              name: 'Conjugaison, grandissement et distances focales du dioptre sphérique',
              formula: '\\frac{n_2}{\\overline{SA\'}} - \\frac{n_1}{\\overline{SA}} = \\frac{n_2 - n_1}{\\overline{SC}} = V, \\qquad \\gamma = \\frac{n_1\\,\\overline{SA\'}}{n_2\\,\\overline{SA}}, \\qquad f = -\\frac{n_1}{V}, \\quad f\' = +\\frac{n_2}{V}',
              note: 'Un dioptre sphérique est convergent (V > 0, f\' > 0) si (n2 - n1) et SC ont le même signe ; sinon il est divergent (V < 0).',
            },
            keyRule:
              'Sur un dioptre sphérique séparant deux milieux d\'indices différents (n1 != n2), les distances focales f et f\' ne sont pas opposées en valeur absolue : on a f\' / n2 + f / n1 = 0.',
            konanTip:
              'Attention au grandissement du dioptre sphérique avec origine au sommet $S$ : il contient le rapport des indices $\\gamma = \\frac{n_1}{n_2}\\frac{\\overline{SA\'}}{\\overline{SA}}$ !',
            exercise: {
              id: 'srit_opt_c3_p1_q1',
              type: 'mcq',
              prompt:
                'Un dioptre sphérique convexe vers l\'air ($\\overline{SC} = +10\\text{ cm}$) sépare l\'air ($n_1 = 1{,}0$) du verre ($n_2 = 1{,}5$). Que valent sa vergence $V$, sa distance focale objet $f = \\overline{SF}$ et sa distance focale image $f\' = \\overline{SF\'}$ ?',
              options: [
                'V = +5 δ, f = -20 cm et f\' = +30 cm',
                'V = +5 δ, f = -30 cm et f\' = +30 cm',
                'V = -5 δ, f = +20 cm et f\' = -30 cm',
                'V = +15 δ, f = -10 cm et f\' = +15 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La vergence vaut V = (n₂ - n₁)/SC = (1,5 - 1,0)/0,10 m = +5 δ. La distance focale objet vaut f = -n₁/V = -1,0/5 = -0,20 m = -20 cm, et la distance focale image vaut f\' = +n₂/V = +1,5/5 = +0,30 m = +30 cm.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Dioptre plan',
            stepTheme: 'violet',
            stepTitle: 'Le dioptre plan comme cas limite (R → ∞) et déplacement apparent d\'une lame',
            paragraphText:
              'Un **dioptre plan** est un dioptre sphérique dont le rayon de courbure tend vers l\'infini ($\\overline{SC} \\to \\infty$, donc $V = 0$). Contrairement au miroir plan, le dioptre plan n\'est **pas** rigoureusement stigmatique (sauf pour les points de sa surface), mais il est **stigmatique dans les conditions de Gauss** (rayons peu inclinés sur la normale). En faisant $\\overline{SC} \\to \\infty$ dans la formule du dioptre sphérique (avec $H$ pied de la normale à la surface), on obtient : **$\\frac{\\overline{HA\'}}{n_2} = \\frac{\\overline{HA}}{n_1}$** et $\\gamma = +1$. L\'application de cette formule aux deux faces d\'une **lame à faces parallèles** d\'épaisseur $e$ et d\'indice $n$ dans l\'air montre qu\'elle rapproche l\'image d\'un déplacement axial **$\\overline{AA\'} = e\\left(1 - \\frac{1}{n}\\right)$** dans le sens de la lumière.',
            formula: {
              name: 'Conjugaison de Gauss du dioptre plan et décalage axial d\'une lame d\'épaisseur e',
              formula: '\\frac{\\overline{HA\'}}{n_2} = \\frac{\\overline{HA}}{n_1} \\qquad \\text{et} \\qquad \\overline{AA\'}_{\\text{lame}} = e\\left(1 - \\frac{1}{n}\\right) > 0',
              note: 'Un objet observé depuis l\'air (n2 = 1) au fond d\'une piscine (n1 = 4/3) paraît plus proche de la surface : |HA\'| = |HA| / n1 = (3/4) |HA|.',
            },
            keyRule:
              'Dans les conditions de Gauss, pour un dioptre plan séparant n1 de n2 : HA\' / n2 = HA / n1 et le grandissement transversal vaut gamma = +1.',
            konanTip:
              'Pour une lame de verre d\'épaisseur $e = 6\\text{ mm}$ et d\'indice $n = 1{,}5$ interposée devant un objet, l\'image est avancée dans le sens de la lumière de $\\overline{AA\'} = 6\\times(1 - 1/1{,}5) = 2\\text{ mm}$.',
            exercise: {
              id: 'srit_opt_c3_p1_q2',
              type: 'mcq',
              prompt:
                'On interpose une lame de verre à faces parallèles d\'épaisseur $e = 9\\text{ mm}$ et d\'indice $n = 1{,}5$ (placée dans l\'air) perpendiculairement aux rayons issus d\'un objet ponctuel $A$. Dans les conditions de Gauss, de combien et dans quel sens l\'image $A\'$ est-elle décalée par rapport à $A$ ?',
              options: [
                'AA\' = +3 mm dans le sens de propagation de la lumière (car e(1 - 1/n) = 9 × (1 - 2/3) = 3 mm)',
                'AA\' = -3 mm en sens inverse de la lumière',
                'AA\' = +6 mm dans le sens de la lumière',
                'AA\' = 0 mm (la lame ne décale pas l\'image)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le décalage longitudinal produit par une lame à faces parallèles dans les conditions de Gauss vaut AA\' = e(1 - 1/n) = 9 × (1 - 1/1,5) = 9 × (1/3) = +3 mm dans le sens de propagation de la lumière.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Formule des opticiens',
            stepTheme: 'blue',
            stepTitle: 'Lentilles minces sphériques et formule des opticiens (vergence V)',
            paragraphText:
              'Une **lentille sphérique** est un milieu transparent d\'indice $n$ limité par deux dioptres sphériques (ou un dioptre sphérique et un dioptre plan) de sommets $S_1, S_2$ et de centres $C_1, C_2$. Elle est dite **mince** si son épaisseur au centre $e = \\overline{S_1S_2}$ est très petite devant les rayons de courbure $|R_1|, |R_2|$ : on confond alors $S_1$ et $S_2$ en un point unique appelé **centre optique $O$**. En appliquant deux fois la relation du dioptre sphérique (air $n_0 \\to$ verre $n \\to$ air $n_0$) via l\'image intermédiaire $A_1$, on obtient la **formule des opticiens** donnant la **vergence $V = \\frac{1}{f\'}$** de la lentille (en dioptries $\\delta = \\text{m}^{-1}$ lorsque $f\'$ et $R_1, R_2$ sont en mètres).',
            formula: {
              name: 'Formule des opticiens (lentille mince d\'indice n plongée dans un milieu d\'indice n0)',
              formula: 'V = \\frac{1}{f\'} = \\left(\\frac{n}{n_0} - 1\\right)\\left(\\frac{1}{\\overline{S_1C_1}} - \\frac{1}{\\overline{S_2C_2}}\\right) \\xrightarrow{\\text{dans l\'air } (n_0=1)} V = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
              note: '1 dioptrie (1 δ) = 1 m⁻¹. Si l\'une des faces est plane, son rayon de courbure est infini (1 / R_plan = 0).',
            },
            keyRule:
              'Dans la formule des opticiens V = (n - 1)(1/R1 - 1/R2), R1 = S1C1 et R2 = S2C2 sont des mesures ALGÉBRIQUES orientées dans le sens de la lumière.',
            konanTip:
              'Pour une lentille **biconvexe** dans l\'air : la 1re face est bombée vers la gauche donc son centre $C_1$ est à droite ($R_1 = \\overline{S_1C_1} > 0$) ; la 2e face est bombée vers la droite donc son centre $C_2$ est à gauche ($R_2 = \\overline{S_2C_2} < 0$). Ainsi $\\frac{1}{R_1} - \\frac{1}{R_2} = \\frac{1}{|R_1|} + \\frac{1}{|R_2|} > 0$ : elle est bien **convergente** ($V > 0$) !',
            exercise: {
              id: 'srit_opt_c3_p1_q3',
              type: 'mcq',
              prompt:
                'Une lentille mince **biconvexe symétrique** en verre d\'indice $n = 1{,}50$, plongée dans l\'air ($n_0 = 1$), possède deux faces de même rayon géométrique $|R_1| = |R_2| = 20\\text{ cm}$ (soit $R_1 = +0{,}20\\text{ m}$ et $R_2 = -0{,}20\\text{ m}$). Que valent sa vergence $V$ et sa distance focale image $f\'$ ?',
              options: [
                'V = +5,0 δ et f\' = +20 cm',
                'V = 0 δ et f\' = ∞',
                'V = +2,5 δ et f\' = +40 cm',
                'V = -5,0 δ et f\' = -20 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D\'après la formule des opticiens : V = (n - 1)(1/R₁ - 1/R₂) = (1,50 - 1)(1/0,20 - 1/(-0,20)) = 0,50 × (5 + 5) = +5,0 δ. La distance focale image vaut donc f\' = 1/V = 0,20 m = +20 cm.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Convergente vs Divergente',
            stepTheme: 'blue',
            stepTitle: 'Classification géométrique et optique des lentilles minces (f\' > 0 et f\' < 0)',
            paragraphText:
              'Dans l\'air ($n > n_0 = 1$), les lentilles minces se répartissent en deux familles : **1. Lentilles convergentes** ($V > 0$, distance focale image **$f\' = \\overline{OF\'} > 0$**, bords minces) : biconvexe, plan-convexe et ménisque convergent (plus épais au centre qu\'aux bords). Leur foyer principal image $F\'$ est **réel** (à droite de $O$) et leur foyer principal objet $F$ est **réel** (à gauche de $O$, symétrique : $\\overline{OF} = -\\overline{OF\'} = -f\'$). **2. Lentilles divergentes** ($V < 0$, **$f\' = \\overline{OF\'} < 0$**, bords épais) : biconcave, plan-concave et ménisque divergent. Leurs foyers $F\'$ (à gauche de $O$) et $F$ (à droite de $O$) sont **virtuels** !',
            keyRule:
              'Pour toute lentille mince baignant dans le même milieu des deux côtés, les foyers principaux objet F et image F\' sont symétriques par rapport au centre optique O : OF = -OF\' = -f\'.',
            konanTip:
              'Piège classique : si l\'on plonge une lentille biconvexe en verre ($n = 1{,}5$) dans un liquide plus réfringent que le verre (ex. sulfure de carbone $n_0 = 1{,}63$), le facteur $(n/n_0 - 1)$ devient négatif et la lentille biconvexe devient **divergente** !',
            exercise: {
              id: 'srit_opt_c3_p1_q4',
              type: 'mcq',
              prompt:
                'Pour une **lentille mince divergente** de vergence $V = -4\\,\\delta$ placée dans l\'air (lumière de gauche à droite), quelles sont les positions algébriques de son foyer principal image $F\'$ et de son foyer principal objet $F$ par rapport au centre optique $O$ ?',
              options: [
                'OF\' = f\' = -25 cm (à gauche de O) et OF = -f\' = +25 cm (à droite de O)',
                'OF\' = f\' = +25 cm (à droite de O) et OF = -25 cm (à gauche de O)',
                'OF\' = OF = -25 cm (les deux foyers sont confondus à gauche de O)',
                'OF\' = -4 cm et OF = +4 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec V = -4 δ, la distance focale image vaut f\' = OF\' = 1/V = -0,25 m = -25 cm (F\' est donc à gauche de O, virtuel). Par symétrie OF = -OF\', le foyer objet F est à OF = +25 cm (à droite de O, virtuel).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Les 3 rayons clés',
            stepTheme: 'green',
            stepTitle: 'Règles de construction géométrique à travers une lentille mince',
            paragraphText:
              'Toute construction géométrique d\'image à travers une lentille mince de centre optique $O$ et de foyers principaux $F$ et $F\'$ repose sur les **trois rayons caractéristiques** issus d\'un point objet $B$ : **1.** Tout rayon passant par le **centre optique $O$** traverse la lentille **sans aucune déviation** (car au voisinage de $O$, la lentille mince se comporte comme une lame à faces parallèles d\'épaisseur négligeable $e \\to 0$). **2.** Tout rayon incident **parallèle à l\'axe optique** émerge en passant par le **foyer principal image $F\'$** (ou semble provenir de $F\'$ si la lentille est divergente). **3.** Tout rayon incident passant par le **foyer principal objet $F$** (ou dont le prolongement passe par $F$) émerge **parallèlement à l\'axe optique**.',
            keyRule:
              'Un rayon passant par le centre optique O d\'une lentille mince n\'est JAMAIS dévié, quelle que soit son inclinaison (dans les conditions de Gauss).',
            konanTip:
              'Pour tracer l\'émergent d\'un rayon incident oblique quelconque, tracez la **parallèle à ce rayon passant par $O$** (non déviée) : elle coupe le **plan focal image** $\\mathcal{P}_{F\'}$ au foyer secondaire image $\\Phi\'$ par lequel passe le rayon émergent !',
            exercise: {
              id: 'srit_opt_c3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle est la propriété fondamentale de tout rayon lumineux passant par le **centre optique $O$** d\'une lentille mince (convergente ou divergente) ?',
              options: [
                'Il traverse la lentille en ligne droite sans subir aucune déviation',
                'Il émerge parallèlement à l\'axe optique principal',
                'Il est réfléchi sur lui-même en sens inverse',
                'Il converge systématiquement au foyer principal image F\'',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Au centre optique O, les plans tangents aux deux faces de la lentille sont parallèles et l\'épaisseur est négligeable : le rayon n\'est ni dévié ni décalé.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Lentille plan-convexe',
            stepTheme: 'orange',
            stepTitle: 'Application de la formule des opticiens aux lentilles plan-convexe et ménisques',
            paragraphText:
              'Lorsqu\'on applique la formule des opticiens $V = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$ à une lentille ayant une face plane (par exemple une lentille **plan-convexe**), le rayon de courbure de la face plane est infini, donc son inverse $\\frac{1}{R_{\\text{plan}}} = 0$. Si la face d\'entrée est plane ($1/R_1 = 0$) et la face de sortie est convexe vers l\'extérieur ($C_2$ à gauche, donc $R_2 = -|R| < 0$), on obtient $V = (n - 1)\\left(0 - \\frac{1}{-|R|}\\right) = +\\frac{n - 1}{|R|} > 0$. Si l\'on retourne la lentille (face d\'entrée convexe $R_1 = +|R|$, face de sortie plane $1/R_2 = 0$), on obtient exactement la **même vergence** $V = +\\frac{n - 1}{|R|}$ !',
            keyRule:
              'La vergence V et la distance focale f\' d\'une lentille mince dans les conditions de Gauss restent strictement invariantes lorsqu\'on retourne la lentille (échange des deux faces).',
            konanTip:
              'Pour $n = 1{,}50$, une lentille plan-convexe de rayon $|R|$ a une distance focale très simple à retenir : $f\' = \\frac{|R|}{n - 1} = \\frac{|R|}{0{,}5} = 2|R|$ (tandis qu\'une biconvexe symétrique a $f\' = |R|$) !',
            exercise: {
              id: 'srit_opt_c3_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle est la distance focale image $f\'$ d\'une lentille mince **plan-convexe** en verre d\'indice $n = 1{,}50$ (placée dans l\'air) dont la face sphérique a un rayon de courbure de valeur absolue $|R| = 30\\text{ cm}$ ?',
              options: [
                'f\' = +60 cm',
                'f\' = +30 cm',
                'f\' = +15 cm',
                'f\' = -60 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour une lentille plan-convexe dans l\'air, 1/f\' = (n - 1)(1/|R| - 0) = (1,50 - 1) / 30 cm = 0,50 / 30 = 1 / 60 cm⁻¹, d\'où f\' = +60 cm.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_optique_ch3_p2',
        order: 2,
        title: 'Relations de conjugaison des lentilles minces (Descartes et Newton) et méthode de Bessel',
        summary:
          'Maîtriser les relations de conjugaison et de grandissement de Descartes (origine en O) et de Newton (origines en F et F\'), la nature des images et la condition D >= 4f\' de Bessel-Silbermann.',
        conceptExplanation:
          'Avec l\'origine au centre optique O, toute lentille mince vérifie la relation de Descartes 1/OA\' - 1/OA = 1/f\' = V (avec un signe MOINS) et le grandissement gamma = +OA\'/OA (avec un signe PLUS). Avec les origines aux foyers F et F\', les relations de Newton s\'écrivent FA · F\'A\' = -f\'² et gamma = -f\'/FA = -F\'A\'/f\'.',
        keyRule:
          'Lentille mince (origine O) : signe MOINS (-) dans 1/OA\' - 1/OA = 1/f\' et signe PLUS (+) dans gamma = +OA\'/OA (exactement l\'opposé des signes du miroir sphérique !).',
        workedExample: {
          title: 'Projecteur de diapositives à lentille convergente',
          statement:
            'Une lentille mince convergente de distance focale f\' = +10 cm projette l\'image réelle d\'un objet réel AB sur un écran avec un grandissement gamma = -4 (image renversée 4 fois plus grande). Calculer la position de l\'objet OA et la distance objet-écran D = AA\'.',
          methodSteps: [
            '1. De gamma = OA\' / OA = -4, on tire OA\' = -4 OA.',
            '2. En reportant dans Descartes 1/OA\' - 1/OA = 1/f\' : 1/(-4 OA) - 1/OA = -5 / (4 OA) = 1/10 ⇒ OA = -50 / 4 = -12,5 cm.',
            '3. On en déduit OA\' = -4 × (-12,5) = +50,0 cm, et la distance objet-écran D = OA\' - OA = 50 - (-12,5) = 62,5 cm.',
          ],
          conclusion: 'L\'objet doit être placé à 12,5 cm devant la lentille (juste avant F situé à -10 cm) et l\'écran à 50 cm après la lentille.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Descartes (origine O)',
            stepTheme: 'violet',
            stepTitle: 'Relations de conjugaison et de grandissement de Descartes pour une lentille mince',
            paragraphText:
              'En prenant le **centre optique $O$** comme origine des mesures algébriques sur l\'axe optique orienté de gauche à droite, la position de l\'image $\\overline{OA\'}$ et celle de l\'objet $\\overline{OA}$ sont liées par la **relation de conjugaison de Descartes** : **$\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF\'}} = \\frac{1}{f\'} = V$**. Le **grandissement transversal** est donné par le théorème de Thalès dans les triangles $OAB$ et $OA\'B\'$ (puisque le rayon passant par $O$ n\'est pas dévié) : **$\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = +\\frac{\\overline{OA\'}}{\\overline{OA}}$**. Pour une lentille, l\'espace **objet réel** est à gauche de $O$ ($\\overline{OA} < 0$), tandis que l\'espace **image réelle** est à **droite de $O$** ($\\overline{OA\'} > 0$).',
            formula: {
              name: 'Relations de Descartes d\'une lentille mince (origine au centre optique O)',
              formula: '\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f\'} = V \\qquad \\text{et} \\qquad \\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = +\\frac{\\overline{OA\'}}{\\overline{OA}}',
              note: 'Forme explicite : OA\' = (OA · f\') / (OA + f\') et gamma = f\' / (OA + f\') = (f\' - OA\') / f\'.',
            },
            keyRule:
              'Pour une lentille : Objet réel ⇔ OA < 0 (avant la lentille) ; Image réelle ⇔ OA\' > 0 (après la lentille, projetable sur un écran).',
            konanTip:
              'Conséquence immédiate de $\\gamma = +\\overline{OA\'}/\\overline{OA}$ : si un objet réel ($\\overline{OA} < 0$) donne une image réelle ($\\overline{OA\'} > 0$), alors $\\gamma < 0$ (**image renversée**) ; s\'il donne une image virtuelle ($\\overline{OA\'} < 0$), alors $\\gamma > 0$ (**image droite**) !',
            exercise: {
              id: 'srit_opt_c3_p2_q1',
              type: 'mcq',
              prompt:
                'Un objet réel $AB$ est placé à $30\\text{ cm}$ devant une lentille mince convergente de distance focale $f\' = +20\\text{ cm}$ ($\\overline{OA} = -30\\text{ cm}$). Que valent la position $\\overline{OA\'}$, la nature de l\'image et le grandissement $\\gamma$ ?',
              options: [
                'OA\' = +60 cm (image réelle après la lentille) et γ = -2 (image renversée et 2 fois plus grande)',
                'OA\' = -60 cm (image virtuelle avant la lentille) et γ = +2 (image droite)',
                'OA\' = +12 cm (image réelle) et γ = -0,4',
                'OA\' = +30 cm et γ = -1',
              ],
              correctAnswerIndex: 0,
              explanation:
                'De 1/OA\' - 1/OA = 1/f\', on tire 1/OA\' = 1/20 + 1/(-30) = (3 - 2)/60 = 1/60 ⇒ OA\' = +60 cm > 0 (image réelle située 60 cm après la lentille). Le grandissement vaut γ = +OA\'/OA = 60 / (-30) = -2.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Formules de Newton',
            stepTheme: 'violet',
            stepTitle: 'Relations de conjugaison et de grandissement de Newton (origines en F et F\')',
            paragraphText:
              'Si l\'on repère la position de l\'objet $A$ par rapport au **foyer principal objet $F$** ($\\sigma = \\overline{FA}$) et celle de l\'image $A\'$ par rapport au **foyer principal image $F\'$** ($\\sigma\' = \\overline{F\'A\'}$), les triangles semblables construits avec les rayons parallèles à l\'axe donnent les **relations de Newton de la lentille mince** : **$\\gamma = -\\frac{f\'}{\\overline{FA}} = +\\frac{f}{\\overline{FA}}$** et **$\\gamma = -\\frac{\\overline{F\'A\'}}{f\'} = +\\frac{\\overline{F\'A\'}}{f}$** (puisque $f = \\overline{OF} = -f\'$). En égalant ces deux expressions de $\\gamma$, on obtient la célèbre relation de conjugaison de Newton : **$\\overline{FA}\\cdot\\overline{F\'A\'} = f\\cdot f\' = -f\'^2 < 0$**.',
            formula: {
              name: 'Relations de Newton d\'une lentille mince (origines aux foyers F et F\')',
              formula: '\\overline{FA}\\cdot\\overline{F\'A\'} = -f\'^2 < 0 \\qquad \\text{et} \\qquad \\gamma = -\\frac{f\'}{\\overline{FA}} = -\\frac{\\overline{F\'A\'}}{f\'}',
              note: 'Le produit FA · F\'A\' = -f\'² étant strictement NÉGATIF, les vecteurs FA et F\'A\' sont toujours de sens opposés !',
            },
            keyRule:
              'Pour toute lentille mince, le produit de Newton FA × F\'A\' = -f\'² est toujours strictement négatif : FA et F\'A\' sont toujours de signes contraires.',
            konanTip:
              'De même, en différenciant Descartes, le **grandissement longitudinal** d\'une lentille mince vaut $g = \\frac{\\mathrm{d}\\overline{OA\'}}{\\mathrm{d}\\overline{OA}} = +\\left(\\frac{\\overline{OA\'}}{\\overline{OA}}\\right)^2 = +\\gamma^2 > 0$ : pour une lentille, **l\'objet et l\'image se déplacent toujours dans le MÊME sens** le long de l\'axe optique !',
            exercise: {
              id: 'srit_opt_c3_p2_q2',
              type: 'mcq',
              prompt:
                'Pour une lentille mince convergente de distance focale $f\' = +10\\text{ cm}$, un objet réel $A$ est situé à $5\\text{ cm}$ avant le foyer principal objet $F$ ($\\overline{FA} = -5\\text{ cm}$). Que valent $\\overline{F\'A\'}$ et le grandissement $\\gamma$ d\'après les formules de Newton ?',
              options: [
                'F\'A\' = +20 cm (donc OA\' = +30 cm) et γ = -2',
                'F\'A\' = -20 cm et γ = +2',
                'F\'A\' = +5 cm et γ = -1',
                'F\'A\' = +50 cm et γ = -5',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D\'après Newton, FA · F\'A\' = -f\'² = -100 cm². Avec FA = -5 cm, on obtient F\'A\' = -100 / (-5) = +20 cm (et OA\' = OF\' + F\'A\' = 10 + 20 = +30 cm). Le grandissement vaut γ = -f\'/FA = -10/(-5) = -2.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Bilan images L.C. / L.D.',
            stepTheme: 'green',
            stepTitle: 'Tableau complet de la nature des images (lentille convergente vs divergente)',
            paragraphText:
              'Analysons tous les cas d\'un **objet réel** ($\\overline{OA} < 0$) : **A) Lentille convergente ($f\' > 0$)** : **1.** Si l\'objet réel est placé **avant $F$** ($\\overline{OA} < -f\'$), l\'image est **RÉELLE** ($\\overline{OA\'} > f\' > 0$) et **renversée** ($\\gamma < 0$) : elle est réduite si $\\overline{OA} < -2f\'$, de même taille ($\\gamma = -1$) au point symétrique $\\overline{OA} = -2f\'$ ($\\overline{OA\'} = +2f\'$), et agrandie si $-2f\' < \\overline{OA} < -f\'$. **2.** Si l\'objet réel est placé **entre $F$ et $O$** ($-f\' < \\overline{OA} < 0$), alors $\\frac{1}{\\overline{OA\'}} = \\frac{1}{f\'} + \\frac{1}{\\overline{OA}} < 0$ : l\'image est **VIRTUELLE** ($\\overline{OA\'} < \\overline{OA} < 0$), **droite et agrandie** ($\\gamma > 1$) : c\'est le **fonctionnement en loupe** ! **B) Lentille divergente ($f\' < 0$)** : pour tout objet réel ($\\overline{OA} < 0$), $\\frac{1}{\\overline{OA\'}} = \\frac{1}{f\'} + \\frac{1}{\\overline{OA}} < \\frac{1}{f\'} < 0$, donc **l\'image d\'un objet réel par une lentille divergente est TOUJOURS virtuelle, droite et réduite** ($0 < \\gamma < 1$), située entre $F\'$ et $O$ !',
            keyRule:
              'D\'un objet réel, une lentille divergente donne toujours une image virtuelle, droite et réduite (0 < gamma < 1) ; une lentille convergente fonctionne en loupe (image virtuelle, droite, gamma > 1) lorsque l\'objet réel est placé entre F et O.',
            konanTip:
              'Notez la parfaite analogie entre le **miroir concave** et la **lentille convergente** (en remplaçant $C$ par le point antiprincipal $2F$ d\'abscisse $-2f\'$), et entre le **miroir convexe** et la **lentille divergente** !',
            exercise: {
              id: 'srit_opt_c3_p2_q3',
              type: 'mcq',
              prompt:
                'À quelle distance $\\overline{OA}$ d\'une lentille mince convergente de distance focale $f\' > 0$ faut-il placer un objet réel $AB$ pour obtenir une image réelle $A\'B\'$ renversée et **exactement de même grandeur** ($\\gamma = -1$) ?',
              options: [
                'À la distance 2f\' devant la lentille (OA = -2f\', ce qui donne OA\' = +2f\' et une distance objet-image AA\' = 4f\')',
                'Exactement au foyer principal objet F (OA = -f\')',
                'Entre le foyer objet F et le centre optique O (OA = -f\'/2)',
                'À la distance 4f\' devant la lentille (OA = -4f\')',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour avoir γ = OA\'/OA = -1, il faut OA\' = -OA. En reportant dans 1/OA\' - 1/OA = 1/f\', on obtient -2/OA = 1/f\' ⇒ OA = -2f\' et OA\' = +2f\' (plans antiprincipaux).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode de Bessel',
            stepTheme: 'green',
            stepTitle: 'Condition de Silbermann (D >= 4f\') et méthode focométrique de Bessel',
            paragraphText:
              'Sur un banc d\'optique, on fixe un objet réel $A$ et un écran $E$ à une distance totale $D = \\overline{AA\'} > 0$, et l\'on déplace une lentille convergente de focale $f\' > 0$ entre les deux. En posant $x = \\overline{AO} = -\\overline{OA} > 0$, on a $\\overline{OA\'} = D - x$, et la relation de Descartes devient $\\frac{1}{D - x} + \\frac{1}{x} = \\frac{1}{f\'} \\iff x^2 - D\\,x + D\\,f\' = 0$. Le discriminant de ce trinôme du second degré est **$\\Delta = D(D - 4f\')$** : **1.** Si **$D < 4f\'$** ($\\Delta < 0$), il n\'existe **aucune position** de la lentille donnant une image réelle sur l\'écran ! **2.** Si **$D = 4f\'$** (**méthode de Silbermann**), il existe une position unique $x = D/2 = 2f\'$ ($\\gamma = -1$). **3.** Si **$D > 4f\'$** (**méthode de Bessel**), il existe **deux positions** conjuguées $O_1$ et $O_2$ de la lentille séparées de $d = \\sqrt{D(D - 4f\')}$, d\'où la formule de Bessel : **$f\' = \\frac{D^2 - d^2}{4D}$**.',
            formula: {
              name: 'Condition de Silbermann et formule focométrique de Bessel',
              formula: '\\text{Condition d\'image réelle sur l\'écran : } D \\ge 4f\' \\qquad \\text{Formule de Bessel : } f\' = \\frac{D^2 - d^2}{4D}',
              note: 'Pour les deux positions de Bessel O1 et O2, les grandissements gamma1 et gamma2 sont inverses l\'un de l\'autre : gamma1 × gamma2 = +1.',
            },
            keyRule:
              'La distance minimale entre un objet réel et son image réelle donnée par une lentille convergente de focale f\' est D_min = 4f\' (atteinte pour OA = -2f\' et OA\' = +2f\').',
            konanTip:
              'La formule de Bessel $f\' = \\frac{D^2 - d^2}{4D}$ est la méthode de TP la plus précise pour mesurer $f\'$ car elle ne nécessite pas de repérer le centre optique $O$ à l\'intérieur de la monture de la lentille !',
            exercise: {
              id: 'srit_opt_c3_p2_q4',
              type: 'mcq',
              prompt:
                'Un objet lumineux et un écran fixe sont distants de $D = 100\\text{ cm}$. En déplaçant une lentille convergente entre l\'objet et l\'écran, on obtient une image nette sur l\'écran pour deux positions de la lentille distantes de $d = 60\\text{ cm}$. Quelle est la distance focale $f\'$ de la lentille (formule de Bessel) ?',
              options: [
                'f\' = 16 cm',
                'f\' = 25 cm',
                'f\' = 20 cm',
                'f\' = 40 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D\'après la formule de Bessel, f\' = (D² - d²) / (4D) = (100² - 60²) / (4 × 100) = (10 000 - 3 600) / 400 = 6 400 / 400 = 16 cm.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Objet virtuel & L.D.',
            stepTheme: 'orange',
            stepTitle: 'Objet virtuel devant une lentille convergente ou divergente',
            paragraphText:
              'Que se passe-t-il lorsqu\'un faisceau incident **convergent** arrive sur une lentille mince, c\'est-à-dire lorsque l\'objet $A$ est **virtuel** ($\\overline{OA} > 0$, situé à droite de $O$) ? **1. Sur une lentille convergente ($f\' > 0$)** : la lentille accentue encore la convergence du faisceau ! Comme $\\frac{1}{\\overline{OA\'}} = \\frac{1}{f\'} + \\frac{1}{\\overline{OA}} > \\frac{1}{f\'} > 0$, on a **$0 < \\overline{OA\'} < f\'$** et **$0 < \\gamma < 1$** : tout objet virtuel donne par une lentille convergente une **image toujours réelle, droite et réduite**, située entre $O$ et $F\'$. **2. Sur une lentille divergente ($f\' < 0$)** : si l\'objet virtuel est placé entre $O$ et le foyer objet virtuel $F$ ($0 < \\overline{OA} < |f\'| = \\overline{OF}$), alors $\\frac{1}{\\overline{OA\'}} = \\frac{1}{f\'} + \\frac{1}{\\overline{OA}} > 0 \\implies \\overline{OA\'} > 0$ : **la lentille divergente donne alors une image RÉELLE, droite et agrandie** ($\\gamma > 1$) !',
            keyRule:
              'Une lentille divergente (f\' < 0) donne une image RÉELLE (OA\' > 0) si et seulement si l\'objet est VIRTUEL et situé entre O et F (0 < OA < -f\').',
            konanTip:
              'C\'est très fréquent dans les montages à deux lentilles : la première lentille convergente $L_1$ forme une image $A_1B_1$ qui sert d\'**objet virtuel** pour une seconde lentille divergente $L_2$ placée avant $A_1$ !',
            exercise: {
              id: 'srit_opt_c3_p2_q5',
              type: 'mcq',
              prompt:
                'Un faisceau convergent tombe sur une **lentille mince divergente** de distance focale $f\' = -20\\text{ cm}$ (son foyer objet virtuel est à $\\overline{OF} = +20\\text{ cm}$). En l\'absence de la lentille, le faisceau convergerait en un point $A$ situé à $10\\text{ cm}$ après la lentille ($\\overline{OA} = +10\\text{ cm}$). Où et de quelle nature est l\'image finale $A\'$ ?',
              options: [
                'OA\' = +20 cm : image RÉELLE située 20 cm après la lentille, avec γ = +2 (droite et agrandie)',
                'OA\' = -20 cm : image VIRTUELLE située 20 cm avant la lentille',
                'OA\' = +6,67 cm : image RÉELLE réduite',
                'L\'image est rejetée à l\'infini',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'objet est virtuel avec OA = +10 cm. La formule de Descartes donne 1/OA\' = 1/f\' + 1/OA = 1/(-20) + 1/10 = +1/20 ⇒ OA\' = +20 cm > 0 (image réelle après la lentille), et γ = OA\'/OA = 20/10 = +2.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Autocollimation',
            stepTheme: 'slate',
            stepTitle: 'Méthode d\'autocollimation par miroir plan pour mesurer f\'',
            paragraphText:
              'La **focométrie par autocollimation** consiste à placer un **miroir plan** perpendiculairement à l\'axe optique juste derrière une lentille convergente $L$. On déplace un objet lumineux $AB$ devant la lentille jusqu\'à ce que son image finale $A\'B\'$ (après traversée de $L$, réflexion sur le miroir plan et retraversée de $L$ en sens inverse) se forme **dans le même plan que l\'objet $AB$ lui-même**, renversée et de même taille ($\\gamma_{\\text{total}} = -1$). Par retour inverse de la lumière, cela signifie que les rayons entre la lentille et le miroir plan sont **parallèles à l\'axe optique** : l\'objet $A$ est donc exactement situé au **foyer principal objet $F$** de la lentille, et la distance mesurée entre l\'objet et la lentille donne directement **$f\' = |\\overline{OF}|$** !',
            keyRule:
              'En autocollimation devant l\'ensemble (lentille convergente + miroir plan), l\'image coïncide avec le plan de l\'objet si et seulement si l\'objet est dans le plan focal objet de la lentille (OA = -f\').',
            konanTip:
              'Remarque importante : la position et l\'inclinaison exacte de la distance entre la lentille et le miroir plan n\'ont **aucune influence** en autocollimation, car le faisceau entre la lentille et le miroir est un faisceau de rayons parallèles !',
            exercise: {
              id: 'srit_opt_c3_p2_q6',
              type: 'mcq',
              prompt:
                'Lors d\'une mesure par **autocollimation** avec un miroir plan placé à $8\\text{ cm}$ derrière une lentille mince convergente, on obtient une image nette renversée dans le plan même de l\'objet lorsque celui-ci est situé à $25\\text{ cm}$ devant la lentille. Quelle est la distance focale $f\'$ de la lentille ?',
              options: [
                'f\' = +25 cm (la distance de 8 cm au miroir plan n\'intervient pas)',
                'f\' = +33 cm (25 cm + 8 cm)',
                'f\' = +17 cm (25 cm - 8 cm)',
                'f\' = +12,5 cm (25 cm / 2)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En autocollimation, l\'objet est au foyer principal objet F de la lentille pour que le faisceau émergent de la lentille soit parallèle à l\'axe optique et revienne sur lui-même après réflexion sur le miroir plan (quelle que soit la distance lentille-miroir). Donc f\' = |OA| = 25 cm.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_optique_ch3_p3',
        order: 3,
        title: 'Association de lentilles (doublets, Gullstrand) et instruments d\'optique',
        summary:
          'Calculer la vergence d\'un doublet de lentilles accolées ou séparées d\'une distance e (formule de Gullstrand), le grandissement composé, et analyser l\'œil, la loupe, le microscope et la lunette astronomique.',
        conceptExplanation:
          'Lorsqu\'un système centré associe deux lentilles L1 et L2 séparées par une distance e = O1O2, l\'image intermédiaire A1B1 donnée par L1 joue le rôle d\'objet pour L2, le grandissement total est le produit gamma = gamma1 × gamma2, et la vergence équivalente dans l\'air est donnée par la formule de Gullstrand V = V1 + V2 - e V1 V2.',
        keyRule:
          'Pour deux lentilles minces accolées (e = 0), les vergences s\'additionnent algébriquement : V = V1 + V2 (soit 1/f\' = 1/f\'1 + 1/f\'2). Pour deux lentilles distantes de e = O1O2 : V = V1 + V2 - e·V1·V2.',
        workedExample: {
          title: 'Association de deux lentilles minces (doublet séparé) et grandissement total',
          statement:
            'Soient deux lentilles convergentes L1 (f\'1 = +10 cm, V1 = +10 δ) et L2 (f\'2 = +20 cm, V2 = +5 δ) distantes de e = O1O2 = 15 cm. Un objet réel AB est placé à 20 cm devant L1 (O1A = -20 cm). Déterminer la position de l\'image finale O2A\', le grandissement total gamma et la vergence V du doublet.',
          methodSteps: [
            '1. Traversée de L1 : 1/O1A1 = 1/f\'1 + 1/O1A = 1/10 - 1/20 = +1/20 ⇒ O1A1 = +20 cm et gamma1 = O1A1 / O1A = 20 / (-20) = -1.',
            '2. Changement d\'origine (Chasles) : O2A1 = O2O1 + O1A1 = -e + O1A1 = -15 + 20 = +5 cm (A1 est un objet virtuel pour L2 !).',
            '3. Traversée de L2 : 1/O2A\' = 1/f\'2 + 1/O2A1 = 1/20 + 1/5 = 5/20 = 1/4 ⇒ O2A\' = +4,0 cm (image finale réelle), gamma2 = 4/5 = +0,8, donc gamma = gamma1 × gamma2 = -0,8. Vergence de Gullstrand : V = 10 + 5 - 0,15 × 10 × 5 = 15 - 7,5 = +7,5 δ.',
          ],
          conclusion: 'La relation de Chasles O2A1 = O1A1 - e est l\'étape clé de tout calcul sur un système à plusieurs lentilles.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Doublets & Gullstrand',
            stepTheme: 'violet',
            stepTitle: 'Lentilles accolées, formule de Gullstrand et systèmes afocaux',
            paragraphText:
              'Lorsqu\'on associe sur un même axe optique deux lentilles minces $L_1$ (vergence $V_1 = 1/f\'_1$) et $L_2$ (vergence $V_2 = 1/f\'_2$) séparées dans l\'air par la distance $e = \\overline{O_1O_2}$, la **vergence totale $V = 1/f\'$** du système équivalent (doublet) est donnée par la **formule de Gullstrand** : **$V = V_1 + V_2 - e\\,V_1\\,V_2$**, soit $\\frac{1}{f\'} = \\frac{1}{f\'_1} + \\frac{1}{f\'_2} - \\frac{e}{f\'_1\\,f\'_2} = -\\frac{\\Delta}{f\'_1\\,f\'_2}$ où $\\Delta = \\overline{F\'_1F_2} = e - (f\'_1 + f\'_2)$ est l\'**intervalle optique**. **Cas 1 (lentilles accolées, $e = 0$)** : **$V = V_1 + V_2$** (les vergences s\'additionnent simplement). **Cas 2 ($e = f\'_1 + f\'_2$, soit $F\'_1$ confondu avec $F_2$, $\\Delta = 0$)** : la vergence s\'annule ($V = 0$, $f\' \\to \\infty$) : le système est **afocal** (un faisceau incident parallèle à l\'axe ressort parallèle à l\'axe !).',
            formula: {
              name: 'Formule de Gullstrand pour un doublet de deux lentilles distantes de e = O1O2',
              formula: 'V = \\frac{1}{f\'} = V_1 + V_2 - e\\,V_1\\,V_2 = \\frac{f\'_1 + f\'_2 - e}{f\'_1\\,f\'_2} = -\\frac{\\Delta}{f\'_1\\,f\'_2}',
              note: 'Un doublet est noté par un triplet (p, q, r) — ex. oculaire de Huygens (3, 2, 1) ou de Ramsden — indiquant les proportions f\'1 : e : f\'2.',
            },
            keyRule:
              'Lentilles accolées (e = 0) ⇒ V = V1 + V2. Système afocal (V = 0, un objet à l\'infini donne une image à l\'infini) ⇔ F\'1 = F2 ⇔ e = f\'1 + f\'2.',
            konanTip:
              'Lorsqu\'on applique Gullstrand $V = V_1 + V_2 - e V_1 V_2$ avec $V_1, V_2$ en dioptries ($\\delta = \\text{m}^{-1}$), n\'oubliez jamais de convertir l\'écartement $e$ **en mètres** !',
            exercise: {
              id: 'srit_opt_c3_p3_q1',
              type: 'mcq',
              prompt:
                'On associe deux lentilles minces de vergences $V_1 = +10\\,\\delta$ ($f\'_1 = +10\\text{ cm}$) et $V_2 = +5\\,\\delta$ ($f\'_2 = +20\\text{ cm}$). Que vaut la vergence équivalente $V$ lorsqu\'elles sont **accolées** ($e = 0$), et quelle distance $e = \\overline{O_1O_2}$ faut-il choisir pour que le système soit **afocal** ($V = 0$) ?',
              options: [
                'Accolées : V = +15 δ ; Système afocal : e = f\'₁ + f\'₂ = 30 cm',
                'Accolées : V = +15 δ ; Système afocal : e = f\'₂ - f\'₁ = 10 cm',
                'Accolées : V = +50 δ ; Système afocal : e = 15 cm',
                'Accolées : V = +5 δ ; Système afocal : e = 30 cm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Accolées (e = 0) : V = V₁ + V₂ = 10 + 5 = +15 δ. Le système est afocal (V = 0) lorsque le foyer image F\'₁ coïncide avec le foyer objet F₂, soit e = f\'₁ + f\'₂ = 10 cm + 20 cm = 30 cm (en effet V = 15 - 0,30 × 50 = 0).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Chasles & Grandissement',
            stepTheme: 'green',
            stepTitle: 'Méthode générale de résolution d\'un système à N lentilles (chaîne d\'images)',
            paragraphText:
              'Pour déterminer l\'image finale $A\'B\'$ d\'un objet $AB$ à travers une succession de deux lentilles $L_1$ et $L_2$ distantes de $e = \\overline{O_1O_2}$ ($AB \\xrightarrow{L_1} A_1B_1 \\xrightarrow{L_2} A\'B\'$), on procède en trois étapes : **1.** Calculer la position de l\'image intermédiaire $\\overline{O_1A_1}$ par Descartes sur $L_1$ : $\\frac{1}{\\overline{O_1A_1}} = \\frac{1}{f\'_1} + \\frac{1}{\\overline{O_1A}}$, et $\\gamma_1 = \\frac{\\overline{O_1A_1}}{\\overline{O_1A}}$. **2.** Effectuer le **changement d\'origine par la relation de Chasles** : **$\\overline{O_2A_1} = \\overline{O_2O_1} + \\overline{O_1A_1} = \\overline{O_1A_1} - e$**. **3.** Calculer $\\overline{O_2A\'}$ par Descartes sur $L_2$ avec $A_1$ comme objet : $\\frac{1}{\\overline{O_2A\'}} = \\frac{1}{f\'_2} + \\frac{1}{\\overline{O_2A_1}}$, et $\\gamma_2 = \\frac{\\overline{O_2A\'}}{\\overline{O_2A_1}}$. Le grandissement transversal total est le **produit** des grandissements : **$\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\gamma_1 \\times \\gamma_2$**.',
            formula: {
              name: 'Relation de transfert de Chasles et théorème du grandissement composé',
              formula: '\\overline{O_2A_1} = \\overline{O_1A_1} - e \\qquad \\text{et} \\qquad \\gamma_{\\text{total}} = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\frac{\\overline{A_1B_1}}{\\overline{AB}}\\times\\frac{\\overline{A\'B\'}}{\\overline{A_1B_1}} = \\gamma_1 \\cdot \\gamma_2',
              note: 'Pour N systèmes centrés successifs, le grandissement total est le produit des N grandissements individuels : gamma = gamma1 × gamma2 × ... × gammaN.',
            },
            keyRule:
              'Entre deux lentilles distantes de e = O1O2 > 0, l\'abscisse de l\'image intermédiaire A1 par rapport à la seconde lentille O2 vaut toujours O2A1 = O1A1 - e.',
            konanTip:
              'Si $\\overline{O_1A_1} > e$, alors $\\overline{O_2A_1} = \\overline{O_1A_1} - e > 0$ : l\'image intermédiaire $A_1$ se forme *après* $L_2$ et constitue donc un **objet virtuel** pour $L_2$ !',
            exercise: {
              id: 'srit_opt_c3_p3_q2',
              type: 'mcq',
              prompt:
                'Dans un système de deux lentilles $L_1$ et $L_2$ séparées de $e = \\overline{O_1O_2} = 12\\text{ cm}$, la première lentille $L_1$ donne un grandissement $\\gamma_1 = -2$ et forme une image intermédiaire $A_1$ à $\\overline{O_1A_1} = +20\\text{ cm}$. Que vaut l\'abscisse objet $\\overline{O_2A_1}$ pour la seconde lentille $L_2$, et que vaut le grandissement total $\\gamma$ si $\\gamma_2 = +0{,}5$ ?',
              options: [
                'O₂A₁ = +8 cm (objet virtuel pour L₂) et γ_total = γ₁ × γ₂ = -1',
                'O₂A₁ = +32 cm et γ_total = γ₁ + γ₂ = -1,5',
                'O₂A₁ = -8 cm (objet réel pour L₂) et γ_total = -1',
                'O₂A₁ = +8 cm et γ_total = -4',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par la relation de Chasles, O₂A₁ = O₂O₁ + O₁A₁ = -e + O₁A₁ = -12 + 20 = +8 cm > 0 (A₁ est donc un objet virtuel pour L₂). Le grandissement total est le produit γ = γ₁ × γ₂ = (-2) × 0,5 = -1.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Œil & Amétropies',
            stepTheme: 'blue',
            stepTitle: 'Modèle de l\'œil réduit, accommodation et correction des défauts visuels',
            paragraphText:
              'L\'**œil réduit** est modélisé par une lentille convergente unique de vergence variable (cornée + cristallin, centre optique $O$) située à une distance fixe $d \\approx 17\\text{ mm}$ d\'un écran sphérique fixe : la **rétine** (où doit se former une image réelle nette $\\overline{OA\'} = +d$). La vision nette s\'étend du **Punctum Remotum (PR)** (point le plus éloigné vu net **sans accommoder**, au repos : à l\'infini pour un **œil emmétrope** normal) jusqu\'au **Punctum Proximum (PP)** (point le plus proche vu net en **accommodant au maximum** en bombant le cristallin : $d_m \\approx 25\\text{ cm}$ pour un œil normal). Un **œil myope** est **trop convergent** (son PR est à distance finie devant lui) : on le corrige par une **lentille divergente** ($V < 0$). Un **œil hypermétrope** n\'est **pas assez convergent** : on le corrige par une **lentille convergente** ($V > 0$).',
            keyRule:
              'Œil emmétrope (normal) : PR à l\'infini (repos) et PP à d_m = 25 cm. Œil myope (trop convergent) → correction par lentille DIVERGENTE (f\' = -D_PR < 0). Œil hypermétrope (pas assez convergent) → correction par lentille CONVERGENTE (V > 0).',
            konanTip:
              'Astuce de calcul pour la myopie : si un œil myope ne voit net au plus loin qu\'à $D_{\\text{PR}} = 50\\text{ cm}$ ($\\overline{OA} = -0{,}50\\text{ m}$), le verre correcteur doit donner d\'un objet à l\'infini une image virtuelle en son PR, donc **$f\'_{\\text{verre}} = -0{,}50\\text{ m}$** soit **$V = -2{,}0\\,\\delta$** !',
            exercise: {
              id: 'srit_opt_c3_p3_q3',
              type: 'mcq',
              prompt:
                'Un étudiant myope a son Punctum Remotum (PR) situé à $40\\text{ cm}$ devant ses yeux (au-delà de $40\\text{ cm}$, il voit flou). Quelle doit être la vergence $V$ de ses verres correcteurs (supposés accolés à l\'œil) pour ramener sa vision nette à l\'infini sans accommoder ?',
              options: [
                'V = -2,5 δ (lentille divergente de distance focale f\' = -40 cm)',
                'V = +2,5 δ (lentille convergente de distance focale f\' = +40 cm)',
                'V = -4,0 δ (lentille divergente)',
                'V = +4,0 δ (lentille convergente)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour voir net à l\'infini sans accommoder, la lentille correctrice doit former d\'un objet situé à l\'infini (OA → -∞) une image virtuelle au PR de l\'œil myope (OA\' = f\' = -0,40 m). Sa vergence vaut donc V = 1/f\' = 1/(-0,40) = -2,5 δ (lentille divergente).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Puissance & Loupe',
            stepTheme: 'violet',
            stepTitle: 'La loupe : puissance intrinsèque P = V et grossissement commercial Gc = P / 4',
            paragraphText:
              'Une **loupe** est une lentille mince convergente de courte distance focale $f\' > 0$ (typiquement $2\\text{ cm}$ à $10\\text{ cm}$) derrière laquelle on place un petit objet réel $AB$ **entre le foyer objet $F$ et le centre optique $O$** pour en observer à l\'œil une image virtuelle droite et agrandie sous un diamètre apparent $\\alpha\' = \\text{angle sous lequel est vue } A\'B\'$. La **puissance** d\'un instrument oculaire est définie par $P = \\frac{\\alpha\'}{AB}$ (en dioptries $\\delta = \\text{rad}\\cdot\\text{m}^{-1}$). Lorsque l\'objet est placé exactement dans le plan focal objet $F$ (observation **à l\'infini sans fatigue d\'accommodation**), l\'image est rejetée à l\'infini sous l\'angle $\\alpha\' = \\frac{AB}{f\'}$, ce qui donne la **puissance intrinsèque** : **$P_i = \\frac{1}{f\'} = V$**. Le **grossissement commercial** $G_c = \\frac{\\alpha\'}{\\alpha}$ compare $\\alpha\'$ à l\'angle $\\alpha = \\frac{AB}{d_m}$ sous lequel l\'objet est vu à l\'œil nu à la distance minimale conventionnelle $d_m = 25\\text{ cm} = 0{,}25\\text{ m}$ : **$G_c = d_m\\,P_i = \\frac{P_i}{4} = \\frac{V}{4}$**.',
            formula: {
              name: 'Puissance intrinsèque et grossissement commercial d\'une loupe (dm = 0,25 m)',
              formula: 'P_i = \\frac{\\alpha\'}{AB} = \\frac{1}{f\'} = V \\; (\\text{en } \\delta) \\qquad \\text{et} \\qquad G_c = \\frac{\\alpha\'}{\\alpha} = 0{,}25\\,P_i = \\frac{V}{4} = \\frac{0{,}25\\text{ m}}{f\'}',
              note: 'Pour observer avec une loupe sans accommoder (image virtuelle à l\'infini), l\'objet réel doit être placé exactement au foyer principal objet F de la loupe.',
            },
            keyRule:
              'Pour toute loupe de vergence V (en dioptries), la puissance intrinsèque vaut Pi = V = 1/f\' et le grossissement commercial vaut Gc = Pi / 4 = V / 4.',
            konanTip:
              'Une loupe marquée « $\\times 5$ » dans le commerce ($G_c = 5$) a une puissance intrinsèque $P_i = 4 \\times 5 = 20\\,\\delta$, soit une distance focale $f\' = 1/20 = 0{,}05\\text{ m} = 5\\text{ cm}$ !',
            exercise: {
              id: 'srit_opt_c3_p3_q4',
              type: 'mcq',
              prompt:
                'Une loupe est constituée d\'une lentille mince convergente de distance focale $f\' = +5{,}0\\text{ cm}$. Que valent sa puissance intrinsèque $P_i$ et son grossissement commercial $G_c$ ?',
              options: [
                'P_i = 20 δ et G_c = 5',
                'P_i = 5 δ et G_c = 20',
                'P_i = 20 δ et G_c = 20',
                'P_i = 0,20 δ et G_c = 4',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec f\' = 0,05 m, la puissance intrinsèque vaut P_i = 1/f\' = 1/0,05 = 20 δ. Le grossissement commercial (pour d_m = 0,25 m) vaut G_c = P_i / 4 = 20 / 4 = 5.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Microscope optique',
            stepTheme: 'violet',
            stepTitle: 'Le microscope optique composé : objectif, oculaire et puissance intrinsèque',
            paragraphText:
              'Un **microscope optique** associe deux systèmes convergents séparés par un tube de longueur constante : **1. L\'objectif** $L_1$ (très courte focale $f\'_1$ de quelques millimètres) devant lequel on place le très petit objet $AB$ juste avant son foyer objet $F_1$ ; l\'objectif en donne une **image intermédiaire réelle, renversée et très agrandie $A_1B_1$** avec un grandissement $\\gamma_{\\text{obj}} = -\\frac{\\overline{F\'_1A_1}}{f\'_1}$. **2. L\'oculaire** $L_2$ (focale $f\'_2$ de quelques centimètres) qui fonctionne comme une **loupe** observant l\'image intermédiaire $A_1B_1$ ! Pour une observation à l\'infini sans accommoder, $A_1$ se forme au foyer objet $F_2$ de l\'oculaire, donc $\\overline{F\'_1A_1} = \\overline{F\'_1F_2} = \\Delta$ (**intervalle optique** du microscope, normalisé à $\\Delta \\approx 16\\text{ cm}$). On a alors **$|\\gamma_{\\text{obj}}| = \\frac{\\Delta}{f\'_1}$**, la puissance intrinsèque vaut **$P_i = |\\gamma_{\\text{obj}}|\\cdot P_{\\text{oc}} = \\frac{\\Delta}{f\'_1\\,f\'_2}$** et le grossissement commercial vaut **$G_c = \\frac{P_i}{4} = |\\gamma_{\\text{obj}}|\\cdot G_{c,\\text{oc}}$**.',
            formula: {
              name: 'Puissance intrinsèque et grossissement commercial d\'un microscope (intervalle optique Delta = F\'1F2)',
              formula: '|\\gamma_{\\text{obj}}| = \\frac{\\Delta}{f\'_1}, \\qquad P_i = |\\gamma_{\\text{obj}}|\\cdot P_{\\text{oc}} = \\frac{\\Delta}{f\'_1\\,f\'_2}, \\qquad G_c = \\frac{P_i}{4} = \\frac{0{,}25\\,\\Delta}{f\'_1\\,f\'_2} = |\\gamma_{\\text{obj}}|\\cdot G_{c,\\text{oc}}',
              note: 'Un objectif marqué « ×40 » (|gamma_obj| = 40) associé à un oculaire marqué « ×10 » (Gc,oc = 10) donne un microscope de grossissement commercial Gc = 40 × 10 = 400.',
            },
            keyRule:
              'Dans un microscope réglé pour une vision à l\'infini (sans fatigue), l\'image intermédiaire réelle A1B1 donnée par l\'objectif se forme dans le plan focal objet F2 de l\'oculaire : |gamma_obj| = Delta / f\'1 et Gc = |gamma_obj| × Gc,oc.',
            konanTip:
              'La vergence totale du microscope de Gullstrand vaut d\'ailleurs $V = -\\frac{\\Delta}{f\'_1 f\'_2} = -P_i < 0$ : pris globalement, un microscope optique est équivalent à un système convergent suivi d\'un oculaire donnant une image finale virtuelle **renversée** !',
            exercise: {
              id: 'srit_opt_c3_p3_q5',
              type: 'mcq',
              prompt:
                'Un microscope optique possède un intervalle optique $\\Delta = F\'_1F_2 = 16\\text{ cm}$, un objectif de distance focale $f\'_1 = 4{,}0\\text{ mm}$ et un oculaire de distance focale $f\'_2 = 2{,}5\\text{ cm}$. Que valent le grandissement en valeur absolue de l\'objectif $|\\gamma_{\\text{obj}}|$, le grossissement commercial de l\'oculaire $G_{c,\\text{oc}}$ et le grossissement commercial total $G_c$ du microscope ?',
              options: [
                '|γ_obj| = 40, G_c,oc = 10 et G_c = 400',
                '|γ_obj| = 4, G_c,oc = 10 et G_c = 40',
                '|γ_obj| = 40, G_c,oc = 40 et G_c = 1600',
                '|γ_obj| = 16, G_c,oc = 25 et G_c = 400',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a |γ_obj| = Δ / f\'₁ = 160 mm / 4,0 mm = 40. Pour l\'oculaire, f\'₂ = 0,025 m donc P_oc = 1/0,025 = 40 δ et G_c,oc = P_oc / 4 = 10. Le grossissement commercial total du microscope est le produit G_c = |γ_obj| × G_c,oc = 40 × 10 = 400.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Lunette astronomique',
            stepTheme: 'slate',
            stepTitle: 'La lunette astronomique afocale : grossissement G = f\'1 / f\'2 et cercle oculaire',
            paragraphText:
              'Une **lunette astronomique** est destinée à observer des astres situés à l\'**infini** sous un petit angle $\\alpha$. Pour qu\'un œil emmétrope puisse observer l\'image finale elle aussi à l\'**infini** (sans accommoder), la lunette doit être un **système afocal** ($V = 0$) : le **foyer principal image $F\'_1$ de l\'objectif** (grande distance focale $f\'_1 > 0$) doit coïncider exactement avec le **foyer principal objet $F_2$ de l\'oculaire** (courte distance focale $f\'_2 > 0$). La longueur du tube de la lunette vaut donc **$e = \\overline{O_1O_2} = f\'_1 + f\'_2$**. L\'image intermédiaire $A_1B_1$ de l\'astre se forme dans le plan focal commun avec une hauteur $A_1B_1 = f\'_1\\,\\alpha$, puis l\'oculaire la renvoie à l\'infini sous l\'angle $\\alpha\' = \\frac{A_1B_1}{f\'_2}$. Le **grossissement intrinsèque** de la lunette afocale vaut donc **$G = \\frac{|\\alpha\'|}{|\\alpha|} = \\frac{f\'_1}{f\'_2} = \\frac{D_{\\text{objectif}}}{d_{\\text{cercle oculaire}}}$** !',
            formula: {
              name: 'Équations de la lunette astronomique afocale (objectif f\'1, oculaire f\'2)',
              formula: 'F\'_1 = F_2 \\implies e = \\overline{O_1O_2} = f\'_1 + f\'_2 \\qquad \\text{et} \\qquad G = \\frac{|\\alpha\'|}{|\\alpha|} = \\frac{f\'_1}{f\'_2} = \\frac{D_{\\text{entrée}}}{d_{\\text{sortie}}}',
              note: 'Le cercle oculaire (pupille de sortie où l\'observateur doit placer son œil) est l\'image de la monture de l\'objectif donnée par l\'oculaire.',
            },
            keyRule:
              'Pour une lunette astronomique afocale (de Kepler, deux lentilles convergentes) : l\'écartement vaut e = f\'1 + f\'2, le grossissement vaut G = f\'1 / f\'2 (> 1 car f\'1 >> f\'2) et l\'image finale est renversée.',
            konanTip:
              'Dans une **lunette de Galilée** (jumelles de théâtre), l\'oculaire est une lentille **divergente** ($f\'_2 < 0$) : la condition afocale $F\'_1 = F_2$ donne un tube plus court $e = f\'_1 - |f\'_2|$ et une image finale **droite** !',
            exercise: {
              id: 'srit_opt_c3_p3_q6',
              type: 'mcq',
              prompt:
                'Une lunette astronomique afocale est constituée d\'un objectif convergent de distance focale $f\'_1 = +90\\text{ cm}$ et de diamètre $D = 60\\text{ mm}$, et d\'un oculaire convergent de distance focale $f\'_2 = +3{,}0\\text{ cm}$. Que valent la distance $e = \\overline{O_1O_2}$ entre les deux lentilles, le grossissement $G$ de la lunette et le diamètre $d$ du cercle oculaire ?',
              options: [
                'e = 93 cm, G = 30 et d = D / G = 2,0 mm',
                'e = 87 cm, G = 30 et d = 2,0 mm',
                'e = 93 cm, G = 270 et d = 20 mm',
                'e = 30 cm, G = 30 et d = 60 mm',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour une lunette astronomique afocale (F\'₁ confondu avec F₂), la distance entre les centres optiques vaut e = f\'₁ + f\'₂ = 90 + 3 = 93 cm. Le grossissement vaut G = f\'₁ / f\'₂ = 90 / 3 = 30, et le diamètre du cercle oculaire vaut d = D / G = 60 mm / 30 = 2,0 mm.',
            },
          },
        ],
      }),
    ],
  },
];
