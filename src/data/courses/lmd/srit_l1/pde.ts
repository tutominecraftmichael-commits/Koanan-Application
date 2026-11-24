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

export const PDE_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : PHYSIQUE DES SEMI-CONDUCTEURS À L'ÉQUILIBRE THERMODYNAMIQUE
  // ============================================================================
  {
    id: 'lmd_srit_l1_pde_ch1',
    subjectId: 'lmd_pde',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 4,
    contentVersion: 2,
    source: 'Programme LMD — SRIT 1 Semestre 1 (Physique des Dispositifs Électroniques, 12h)',
    title: 'Physique des Semi-conducteurs à l’équilibre thermodynamique',
    summary:
      'Structure cristalline du Silicium et du Germanium, diagramme des bandes d’énergie, statistique de Fermi-Dirac, concentration intrinsèque, loi d’action de masse, dopage N et P et neutralité électrique.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_pde_c1_p1',
        order: 1,
        title: 'Structure cristalline, bandes d’énergie et porteurs de charge',
        summary:
          'Réseau diamant du Silicium, liaisons covalentes, bande de valence, bande de conduction, gap énergétique et concept de trou.',
        conceptExplanation:
          'Les semi-conducteurs élémentaires comme le Silicium ($\\text{Si}$, colonne IV, $Z=14$) et le Germanium ($\\text{Ge}$, $Z=32$) cristallisent dans la structure diamant où chaque atome partage ses $4$ électrons de valence avec ses $4$ plus proches voisins par des liaisons covalentes. Du point de vue quantique, le rapprochement des atomes dans le cristal scinde les niveaux atomiques en deux bandes permises séparées par une bande interdite (gap $E_g = E_C - E_V$) : la bande de valence ($E \\le E_V$) et la bande de conduction ($E \\ge E_C$).',
        formulas: [
          {
            name: 'Largeur de la bande interdite (Gap)',
            formula: 'E_g = E_C - E_V',
            note: 'À 300 K : Eg(Si) ≈ 1,12 eV ; Eg(Ge) ≈ 0,66 eV ; Eg(GaAs) ≈ 1,42 eV',
          },
          {
            name: 'Relation de dispersion parabolique au voisinage des extrema',
            formula: 'E(k) = E_C + \\frac{\\hbar^2 k^2}{2 m_n^*} \\quad \\text{et} \\quad E(k) = E_V - \\frac{\\hbar^2 k^2}{2 m_p^*}',
            note: 'mn* et mp* désignent les masses effectives de conduction des électrons et des trous',
          },
        ],
        keyRule:
          'Un semi-conducteur est un isolant au zéro absolu ($T = 0\\text{ K}$) dont le gap $E_g$ modéré ($0{,}5\\text{ eV} < E_g < 3\\text{ eV}$) permet une excitation thermique des électrons à température ambiante ($300\\text{ K}$).',
        workedExample: {
          title: 'Longueur d’onde seuil d’absorption optique du Silicium',
          statement:
            'Le Silicium possède un gap $E_g = 1{,}12\\text{ eV}$ à $300\\text{ K}$. Calculer la longueur d’onde maximale $\\lambda_{\\max}$ d’un photon capable de faire passer un électron de la bande de valence à la bande de conduction. On donne $h = 6{,}63\\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3\\times 10^8\\text{ m/s}$ et $1\\text{ eV} = 1{,}6\\times 10^{-19}\\text{ J}$.',
          methodSteps: [
            'Condition d’absorption interbande : l’énergie du photon doit vérifier $E_{\\text{ph}} = \\frac{hc}{\\lambda} \\ge E_g$.',
            'Convertir le gap en Joules : $E_g = 1{,}12 \\times 1{,}6\\times 10^{-19} = 1{,}792\\times 10^{-19}\\text{ J}$.',
            'Isoler $\\lambda_{\\max} = \\frac{hc}{E_g} = \\frac{6{,}63\\times 10^{-34} \\times 3\\times 10^8}{1{,}792\\times 10^{-19}} \\approx 1{,}11\\times 10^{-6}\\text{ m}$.',
          ],
          conclusion:
            'La longueur d’onde seuil du Silicium vaut $\\lambda_{\\max} \\approx 1{,}11\\text{ }\\mu\\text{m}$ (proche infrarouge).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cristallographie',
            stepTheme: 'blue',
            stepTitle: 'Structure cristalline du Silicium et liaisons covalentes',
            paragraphText:
              'Le Silicium ($Z = 14$, configuration $1s^2 2s^2 2p^6 3s^2 3p^2$) et le Germanium ($Z = 32$) appartiennent à la colonne IV du tableau périodique et possèdent exactement $4$ électrons périphériques sur leur couche de valence. Dans le cristal parfait, chaque atome est situé au centre d’un tétraèdre régulier et établit $4$ liaisons covalentes avec ses $4$ voisins immédiats (réseau cubique à faces centrées de type diamant), assurant ainsi une couche externe saturée à $8$ électrons à $T = 0\\text{ K}$.',
            formula: {
              name: 'Électrons de valence d’un élément tétravalent (Colonne IV)',
              formula: 'N_{\\text{valence}}(\\text{Si}, \\text{Ge}) = 4',
              note: 'Chaque liaison covalente met en commun 2 électrons de spins opposés',
            },
            keyRule:
              'À $T = 0\\text{ K}$, tous les électrons de valence sont engagés dans les liaisons covalentes : aucun électron libre n’est disponible pour la conduction.',
            konanTip:
              'Retiens toujours que le Silicium est tétravalent (4 électrons de valence) : c’est la base pour comprendre le dopage par les éléments des colonnes III et V.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p1_s1',
              type: 'mcq',
              prompt:
                'Combien d’électrons de valence possède un atome de Silicium ($Z=14$) et quel type de liaison chimique assure la cohésion du cristal pur ?',
              options: [
                '4 électrons de valence engagés dans 4 liaisons covalentes tétraédriques',
                '3 électrons de valence engagés dans des liaisons ioniques',
                '5 électrons de valence engagés dans une liaison métallique délocalisée',
                '8 électrons de valence libres dans un réseau hexagonal',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Silicium est un élément de la colonne IV : ses 4 électrons périphériques ($3s^2 3p^2$) forment 4 liaisons covalentes avec ses 4 plus proches voisins dans une géométrie tétraédrique.',
              hint: 'Le Silicium appartient à la 4ème colonne de la classification périodique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Bandes d’énergie',
            stepTheme: 'violet',
            stepTitle: 'Bande de valence, bande de conduction et gap énergétique',
            paragraphText:
              'Dans un solide cristallin, le recouvrement des orbitales atomiques engendre des bandes d’énergie permises séparées par des bandes interdites. La dernière bande totalement ou partiellement remplie à $0\\text{ K}$ est la bande de valence (sommet d’énergie $E_V$), tandis que la bande supérieure, vide à $0\\text{ K}$, est la bande de conduction (minimum d’énergie $E_C$). La différence $E_g = E_C - E_V$ est la largeur de bande interdite (ou gap), où aucun état électronique stationnaire n’existe dans le cristal pur.',
            formula: {
              name: 'Définition de la largeur de bande interdite (Gap)',
              formula: 'E_g = E_C - E_V',
              note: 'À 300 K : Eg(Si) = 1,12 eV et Eg(Ge) = 0,66 eV',
            },
            keyRule:
              'Pour qu’un électron participe au courant dans la bande de conduction, il doit recevoir une énergie au moins égale à $E_g = E_C - E_V$.',
            konanTip:
              'Connais par cœur les deux valeurs numériques classiques d’examen à $300\\text{ K}$ : $E_g(\\text{Si}) = 1{,}12\\text{ eV}$ et $E_g(\\text{Ge}) = 0{,}66\\text{ eV}$.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Diagramme des bandes d’énergie d’un semi-conducteur',
              caption: 'Séparation énergétique entre la bande de valence et la bande de conduction par le gap Eg.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'E ≥ Ec',
                    title: 'Bande de Conduction (BC)',
                    subtitle: 'Électrons quasi-libres de densité n (masse effective mn*)',
                    color: 'blue',
                  },
                  {
                    badge: 'Eg = Ec - Ev',
                    title: 'Bande Interdite (Gap énergétique)',
                    subtitle: 'Aucun état permis dans le cristal intrinsèque pur (1,12 eV pour Si à 300 K)',
                    color: 'orange',
                  },
                  {
                    badge: 'E ≤ Ev',
                    title: 'Bande de Valence (BV)',
                    subtitle: 'Électrons de liaison covalente et trous libres de densité p (masse effective mp*)',
                    color: 'violet',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p1_s2',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de la largeur de bande interdite $E_g$ du Silicium à température ambiante ($T = 300\\text{ K}$) ?',
              options: [
                '$E_g \\approx 1{,}12\\text{ eV}$',
                '$E_g \\approx 0{,}12\\text{ eV}$',
                '$E_g \\approx 5{,}50\\text{ eV}$',
                '$E_g = 0\\text{ eV}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À $300\\text{ K}$, le Silicium possède un gap $E_g \\approx 1{,}12\\text{ eV}$ (contre $0{,}66\\text{ eV}$ pour le Germanium et plus de $5\\text{ eV}$ pour un isolant comme le diamant ou $\\text{SiO}_2$).',
              hint: 'C’est légèrement supérieur à $1\\text{ eV}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Classification',
            stepTheme: 'green',
            stepTitle: 'Distinction entre isolant, semi-conducteur et conducteur métallique',
            paragraphText:
              'Le diagramme des bandes permet de classer rigoureusement les matériaux électriques. Dans un métal (conducteur), la bande de conduction chevauche la bande de valence ($E_g = 0$) ou la dernière bande n’est que partiellement remplie : la densité d’électrons libres est immense ($\\sim 10^{22}\\text{ cm}^{-3}$) quelle que soit la température. Dans un isolant ($\\text{SiO}_2$, diamant), $E_g > 5\\text{ eV}$ est trop grand devant l’agitation thermique $k_B T \\approx 0{,}026\\text{ eV}$ à $300\\text{ K}$. Le semi-conducteur présente un gap intermédiaire ($E_g \\sim 1\\text{ eV}$) permettant une conductivité modulable par la température, l’éclairement ou le dopage.',
            formula: {
              name: 'Énergie thermique caractéristique à température ambiante (300 K)',
              formula: 'k_B T \\approx 0{,}0259\\text{ eV} \\approx 26\\text{ meV}',
              note: 'kB = 1,38 × 10^-23 J/K = 8,617 × 10^-5 eV/K',
            },
            keyRule:
              'Contrairement aux métaux dont la résistivité augmente avec la température, la résistivité d’un semi-conducteur intrinsèque diminue exponentiellement quand la température augmente.',
            konanTip:
              'Si un QCM compare l’effet d’une hausse de température sur le cuivre et le silicium pur : la conductivité du silicium augmente très fortement par génération thermique de paires électron-trou.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p1_s3',
              type: 'mcq',
              prompt:
                'Comment évolue la conductivité électrique d’un semi-conducteur intrinsèque lorsque sa température augmente ?',
              options: [
                'Elle augmente fortement car l’agitation thermique brise davantage de liaisons covalentes',
                'Elle diminue linéairement comme dans un métal conducteur classique',
                'Elle reste strictement nulle quelle que soit la température',
                'Elle devient infinie dès que la température dépasse $10\\text{ K}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque $T$ croît, le nombre d’électrons franchissant le gap $E_g$ par agitation thermique augmente exponentiellement en $e^{-E_g/(2k_B T)}$, ce qui accroît fortement la conductivité.',
              hint: 'Plus la température s’élève, plus les liaisons covalentes sont rompues.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Quasi-particule',
            stepTheme: 'blue',
            stepTitle: 'Concept de trou dans la bande de valence et masse effective',
            paragraphText:
              'Lorsqu’un électron de valence acquiert une énergie $\\ge E_g$, il rompt sa liaison covalente et monte dans la bande de conduction, laissant derrière lui une place vacante dans la bande de valence appelée « trou ». Sous l’action d’un champ électrique, un électron de valence voisin peut venir combler cette lacune, déplaçant ainsi le défaut de liaison en sens inverse des électrons. Pour simplifier l’étude dynamique de la bande de valence presque pleine, on modélise cette lacune comme une quasi-particule de charge positive $+q = +1{,}6\\times 10^{-19}\\text{ C}$ et de masse effective positive $m_p^* > 0$.',
            formula: {
              name: 'Masse effective dans le réseau cristallin',
              formula: '\\frac{1}{m^*} = \\frac{1}{\\hbar^2} \\frac{d^2 E(k)}{dk^2}',
              note: 'La masse effective intègre l’effet du potentiel périodique des ions du réseau cristallin',
            },
            keyRule:
              'La génération thermique dans un cristal intrinsèque crée toujours les porteurs par paires : un électron libre dans la BC ($-q, m_n^*$) et un trou libre dans la BV ($+q, m_p^*$).',
            konanTip:
              'Attention : le trou se déplace uniquement dans la bande de valence (par sauts successifs d’électrons de liaison), tandis que l’électron libre évolue dans la bande de conduction.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p1_s4',
              type: 'mcq',
              prompt:
                'Quelle est la nature physique d’un « trou » dans un semi-conducteur ?',
              options: [
                'Une quasi-particule de charge $+q$ et de masse effective $m_p^* > 0$ représentant une place électronique vacante dans la bande de valence',
                'Un proton libre qui s’est détaché du noyau de Silicium et circule dans la bande de conduction',
                'Un ion positif de Silicium $\\text{Si}^+$ qui se déplace physiquement à travers le cristal',
                'Un électron de charge positive situé au-dessus du niveau $E_C$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les noyaux de Silicium restent fixes aux nœuds du réseau cristallin. Le trou est une quasi-particule décrivant le mouvement collectif des électrons de la bande de valence lorsqu’une liaison covalente est incomplète.',
              hint: 'Les atomes du réseau ne bougent pas ; seule la lacune électronique se propage dans la bande de valence.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Densités d’états',
            stepTheme: 'violet',
            stepTitle: 'Densités effectives d’états Nc et Nv aux bords des bandes',
            paragraphText:
              'Pour calculer le nombre de porteurs par unité de volume, il faut connaître la densité d’états quantiques disponibles $\\rho(E)$ au voisinage du bas de la bande de conduction $E_C$ et du sommet de la bande de valence $E_V$. Après intégration sur l’énergie pondérée par la distribution thermique, tout se passe comme si la bande de conduction était remplacée par un niveau unique dégénéré d’énergie $E_C$ de densité effective d’états $N_C(T)$, et la bande de valence par un niveau d’énergie $E_V$ de densité effective $N_V(T)$. Ces deux grandeurs varient avec la température selon une loi en $T^{3/2}$.',
            formula: {
              name: 'Densités effectives d’états en bande de conduction et de valence',
              formula: 'N_C = 2\\left(\\frac{2\\pi m_n^* k_B T}{h^2}\\right)^{3/2} \\quad \\text{et} \\quad N_V = 2\\left(\\frac{2\\pi m_p^* k_B T}{h^2}\\right)^{3/2}',
              note: 'Pour le Silicium à 300 K : Nc ≈ 2,8 × 10^19 cm^-3 et Nv ≈ 1,04 × 10^19 cm^-3',
            },
            keyRule:
              'Les densités effectives d’états $N_C$ et $N_V$ sont proportionnelles à $T^{3/2}$ et dépendent uniquement des masses effectives $m_n^*$ et $m_p^*$ du matériau et de la température $T$.',
            konanTip:
              'Pour passer d’une température $T_1$ à une température $T_2$ dans un exercice, utilise directement le rapport $\\frac{N_C(T_2)}{N_C(T_1)} = \\left(\\frac{T_2}{T_1}\\right)^{3/2}$.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p1_s5',
              type: 'mcq',
              prompt:
                'Selon quelle loi de puissance les densités effectives d’états $N_C$ et $N_V$ d’un semi-conducteur dépendent-elles de la température absolue $T$ ?',
              options: [
                'Elles sont proportionnelles à $T^{3/2}$',
                'Elles sont inversement proportionnelles à $T^2$',
                'Elles sont indépendantes de la température $T$',
                'Elles sont proportionnelles à $T^{1/2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après les formules $N_C = 2(2\\pi m_n^* k_B T / h^2)^{3/2}$ et $N_V = 2(2\\pi m_p^* k_B T / h^2)^{3/2}$, $N_C$ et $N_V$ varient en $T^{3/2}$.',
              hint: 'Regarde l’exposant du facteur contenant $k_B T$ dans l’expression de $N_C$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Calcul optique',
            stepTheme: 'slate',
            stepTitle: 'Absorption photonique et génération optique de paires électron-trou',
            paragraphText:
              'Outre l’agitation thermique, un semi-conducteur peut générer des paires électron-trou par absorption de photons incidents (effet photoélectrique interne utilisé dans les photodiodes et cellules photovoltaïques). Un photon de fréquence $\\nu$ et de longueur d’onde $\\lambda$ transporte une énergie $E_{\\text{ph}} = h\\nu = \\frac{hc}{\\lambda}$. Si $E_{\\text{ph}} < E_g$, le matériau est transparent au rayonnement. Si $E_{\\text{ph}} \\ge E_g$, le photon est absorbé et transfère un électron de la bande de valence vers la bande de conduction.',
            formula: {
              name: 'Longueur d’onde seuil de photoconduction',
              formula: '\\lambda_{\\max}(\\mu\\text{m}) = \\frac{hc}{E_g} \\approx \\frac{1{,}24}{E_g(\\text{eV})}',
              note: 'Règle pratique rapide : λ(µm) ≈ 1,24 / Eg(eV)',
            },
            keyRule:
              'La formule rapide $\\lambda_{\\max}(\\mu\\text{m}) \\approx \\frac{1{,}24}{E_g(\\text{eV})}$ donne immédiatement la longueur d’onde maximale détectable par un semi-conducteur de gap $E_g$.',
            konanTip:
              'En QCM chronométré, retiens la constante $hc \\approx 1{,}24\\text{ eV}\\cdot\\mu\\text{m}$ : pour le Germanium ($E_g = 0{,}66\\text{ eV}$), $\\lambda_{\\max} = 1{,}24/0{,}66 \\approx 1{,}88\\text{ }\\mu\\text{m}$.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p1_s6',
              type: 'mcq',
              prompt:
                'Quelle est la longueur d’onde maximale $\\lambda_{\\max}$ d’un photon capable de créer une paire électron-trou dans le Germanium ($E_g = 0{,}66\\text{ eV}$ à $300\\text{ K}$) ? On donne $hc \\approx 1{,}24\\text{ eV}\\cdot\\mu\\text{m}$.',
              options: [
                '$\\lambda_{\\max} \\approx 1{,}88\\text{ }\\mu\\text{m}$',
                '$\\lambda_{\\max} \\approx 0{,}53\\text{ }\\mu\\text{m}$',
                '$\\lambda_{\\max} \\approx 1{,}11\\text{ }\\mu\\text{m}$',
                '$\\lambda_{\\max} \\approx 3{,}40\\text{ }\\mu\\text{m}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En appliquant $\\lambda_{\\max} = \\frac{hc}{E_g} = \\frac{1{,}24}{0{,}66} \\approx 1{,}88\\text{ }\\mu\\text{m}$, on trouve que le Germanium détecte l’infrarouge jusqu’à $1{,}88\\text{ }\\mu\\text{m}$ (idéal pour les télécoms fibrées à $1{,}55\\text{ }\\mu\\text{m}$).',
              hint: 'Divise $1{,}24\\text{ eV}\\cdot\\mu\\text{m}$ par $0{,}66\\text{ eV}$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_pde_c1_p2',
        order: 2,
        title: 'Statistique de Fermi-Dirac, semi-conducteur intrinsèque et loi d’action de masse',
        summary:
          'Fonction de Fermi-Dirac, approximation de Maxwell-Boltzmann, expressions de n et p, concentration intrinsèque ni et loi d’action de masse n·p = ni².',
        conceptExplanation:
          'Les électrons étant des fermions de spin $1/2$ soumis au principe d’exclusion de Pauli, leur probabilité d’occupation d’un niveau d’énergie $E$ à l’équilibre thermodynamique est régie par la statistique de Fermi-Dirac $f(E)$ caractérisée par le niveau de Fermi $E_F$. Lorsque $E_F$ est distant des bords de bande d’au moins $3 k_B T$ (semi-conducteur non dégénéré), l’approximation de Maxwell-Boltzmann permet d’exprimer simplement les concentrations $n$ et $p$ et d’établir la loi fondamentale d’action de masse $n \\cdot p = n_i^2$.',
        formulas: [
          {
            name: 'Concentration d’électrons et de trous (régime non dégénéré)',
            formula: 'n = N_C \\exp\\left(-\\frac{E_C - E_F}{k_B T}\\right) \\quad \\text{et} \\quad p = N_V \\exp\\left(-\\frac{E_F - E_V}{k_B T}\\right)',
            note: 'Valable lorsque Ev + 3kBT < Ef < Ec - 3kBT',
          },
          {
            name: 'Concentration intrinsèque et Loi d’action de masse',
            formula: 'n_i = \\sqrt{N_C N_V}\\exp\\left(-\\frac{E_g}{2 k_B T}\\right) \\quad \\Longrightarrow \\quad n \\cdot p = n_i^2',
            note: 'Pour le Silicium à 300 K : ni ≈ 1,45 × 10^10 cm^-3',
          },
        ],
        keyRule:
          'À l’équilibre thermodynamique, le produit $n \\cdot p = n_i^2$ ne dépend que de la nature du semi-conducteur ($E_g$) et de la température $T$, jamais du dopage.',
        workedExample: {
          title: 'Calcul de la concentration intrinsèque du Silicium à 300 K',
          statement:
            'À $T = 300\\text{ K}$, on donne pour le Silicium : $N_C = 2{,}8\\times 10^{19}\\text{ cm}^{-3}$, $N_V = 1{,}04\\times 10^{19}\\text{ cm}^{-3}$, $E_g = 1{,}12\\text{ eV}$ et $k_B T = 0{,}0259\\text{ eV}$. Calculer la concentration intrinsèque $n_i$.',
          methodSteps: [
            'Calculer la moyenne géométrique des densités d’états : $\\sqrt{N_C N_V} = \\sqrt{2{,}8\\times 1{,}04}\\times 10^{19} \\approx 1{,}706\\times 10^{19}\\text{ cm}^{-3}$.',
            'Calculer l’exposant thermique : $\\frac{E_g}{2 k_B T} = \\frac{1{,}12}{2 \\times 0{,}0259} \\approx 21{,}62$.',
            'Évaluer $n_i = 1{,}706\\times 10^{19} \\times e^{-21{,}62} \\approx 1{,}706\\times 10^{19} \\times 4{,}08\\times 10^{-10} \\approx 0{,}7\\text{ à }1{,}45\\times 10^{10}\\text{ cm}^{-3}$ (avec la valeur expérimentale affinée $E_g(300\\text{ K})$).',
          ],
          conclusion:
            'La valeur de référence universellement retenue à $300\\text{ K}$ pour le Silicium est $n_i \\approx 1{,}45\\times 10^{10}\\text{ cm}^{-3}$ (souvent arrondie à $1{,}5\\times 10^{10}\\text{ cm}^{-3}$ dans les sujets d’examen).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Statistique quantique',
            stepTheme: 'blue',
            stepTitle: 'Fonction de distribution de Fermi-Dirac et niveau de Fermi Ef',
            paragraphText:
              'À l’équilibre thermodynamique à la température absolue $T$, la probabilité $f(E)$ qu’un état quantique d’énergie $E$ soit occupé par un électron est donnée par la loi de Fermi-Dirac. Le paramètre énergétique $E_F$, appelé niveau de Fermi (ou potentiel chimique des électrons), représente l’énergie de référence pour laquelle la probabilité d’occupation vaut exactement $f(E_F) = \\frac{1}{2}$ à toute température $T > 0\\text{ K}$. Symétriquement, la probabilité qu’un état de la bande de valence soit occupé par un trou (c’est-à-dire laissé vacant par un électron) vaut $1 - f(E)$.',
            formula: {
              name: 'Distribution de Fermi-Dirac',
              formula: 'f(E) = \\frac{1}{1 + \\exp\\left(\\frac{E - E_F}{k_B T}\\right)}',
              note: 'Pour E = Ef, exp(0) = 1 donc f(Ef) = 1/2 = 50 %',
            },
            keyRule:
              'Quelle que soit la température $T > 0\\text{ K}$, la probabilité d’occupation d’un état situé au niveau de Fermi $E = E_F$ vaut exactement $50\\%$.',
            konanTip:
              'Au zéro absolu ($T \\to 0\\text{ K}$), $f(E)$ devient une fonction échelon : $f(E) = 1$ pour $E < E_F$ (tous les états sont pleins) et $f(E) = 0$ pour $E > E_F$ (tous les états sont vides).',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p2_s1',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de la fonction de Fermi-Dirac $f(E)$ pour un niveau d’énergie $E$ égal au niveau de Fermi $E_F$ à $T = 300\\text{ K}$ ?',
              options: [
                '$f(E_F) = \\frac{1}{2} = 0{,}5$',
                '$f(E_F) = 1$',
                '$f(E_F) = 0$',
                '$f(E_F) = \\frac{1}{e} \\approx 0{,}37$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En remplaçant $E = E_F$ dans $f(E) = \\frac{1}{1 + e^{(E-E_F)/(k_B T)}}$, on obtient $e^0 = 1$, d’où $f(E_F) = \\frac{1}{1+1} = \\frac{1}{2}$.',
              hint: 'Calcule $\\exp(0)$ au dénominateur de la fonction de Fermi-Dirac.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Approximation',
            stepTheme: 'green',
            stepTitle: 'Approximation de Maxwell-Boltzmann (Semi-conducteur non dégénéré)',
            paragraphText:
              'Dans la plupart des composants électroniques courants, le niveau de Fermi $E_F$ reste situé à l’intérieur de la bande interdite, suffisamment loin des bords $E_C$ et $E_V$ (concrètement $E_C - E_F \\ge 3 k_B T$ et $E_F - E_V \\ge 3 k_B T$) : on dit que le semi-conducteur est non dégénéré. Dans la bande de conduction où $E \\ge E_C$, on a alors $\\exp\\left(\\frac{E - E_F}{k_B T}\\right) \\gg 1$, ce qui permet de négliger le terme $1$ au dénominateur de $f(E)$ et de remplacer la statistique de Fermi-Dirac par une exponentielle simple de Maxwell-Boltzmann.',
            formula: {
              name: 'Approximation de Maxwell-Boltzmann pour les électrons et les trous',
              formula: 'f(E) \\approx \\exp\\left(-\\frac{E - E_F}{k_B T}\\right) \\quad \\text{et} \\quad 1 - f(E) \\approx \\exp\\left(-\\frac{E_F - E}{k_B T}\\right)',
              note: 'Erreur relative inférieure à 5 % dès que |E - Ef| ≥ 3 kBT ≈ 78 meV à 300 K',
            },
            keyRule:
              'Un semi-conducteur est dit non dégénéré tant que son niveau de Fermi reste dans la bande interdite à plus de $3 k_B T$ des bords $E_C$ et $E_V$.',
            konanTip:
              'Si le dopage est extrême ($> 10^{19}\\text{ cm}^{-3}$), $E_F$ pénètre dans la bande permise : le semi-conducteur devient « dégénéré » et se comporte presque comme un métal (cas des diodes Tunnel ou Zener fortement dopées).',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p2_s2',
              type: 'mcq',
              prompt:
                'Sous quelle condition énergétique un semi-conducteur est-il qualifié de « non dégénéré », autorisant l’approximation de Maxwell-Boltzmann ?',
              options: [
                'Lorsque le niveau de Fermi $E_F$ est situé dans la bande interdite à au moins $3 k_B T$ des bords $E_C$ et $E_V$',
                'Lorsque le niveau de Fermi $E_F$ est situé très haut à l’intérieur de la bande de conduction ($E_F > E_C + 5 k_B T$)',
                'Uniquement lorsque la température est strictement égale à $0\\text{ K}$',
                'Lorsque la largeur de bande interdite $E_g$ est nulle',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’approximation $\\frac{1}{1 + e^{(E-E_F)/k_B T}} \\approx e^{-(E-E_F)/k_B T}$ exige $e^{(E-E_F)/k_B T} \\gg 1$, soit $E_C - E_F \\ge 3 k_B T$ (et de même $E_F - E_V \\ge 3 k_B T$ pour les trous).',
              hint: 'Il faut que l’exponentielle au dénominateur soit grande devant $1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Concentrations',
            stepTheme: 'violet',
            stepTitle: 'Expressions des concentrations n et p à l’équilibre',
            paragraphText:
              'En intégrant le produit de la densité d’états $\\rho(E)$ par la probabilité d’occupation de Maxwell-Boltzmann sur toute la bande de conduction pour les électrons, et sur toute la bande de valence pour les trous, on obtient les deux expressions fondamentales de $n$ et $p$ à l’équilibre thermodynamique. On observe que plus le niveau de Fermi $E_F$ se rapproche de $E_C$, plus la concentration d’électrons $n$ est élevée ; inversement, plus $E_F$ se rapproche de $E_V$, plus la concentration de trous $p$ est grande.',
            formula: {
              name: 'Concentrations d’électrons libres n et de trous libres p',
              formula: 'n = N_C \\exp\\left(-\\frac{E_C - E_F}{k_B T}\\right) \\quad ; \\quad p = N_V \\exp\\left(-\\frac{E_F - E_V}{k_B T}\\right)',
              note: 'n et p s’expriment classiquement en cm^-3 en physique des semi-conducteurs',
            },
            keyRule:
              'La position du niveau de Fermi $E_F$ dans le gap gouverne directement le rapport entre électrons et trous : $E_F$ proche de $E_C \\implies n \\gg p$ ; $E_F$ proche de $E_V \\implies p \\gg n$.',
            konanTip:
              'Vérifie toujours la cohérence des signes dans l’exponentielle : comme $E_C > E_F > E_V$, les différences $(E_C - E_F)$ et $(E_F - E_V)$ sont toutes deux positives, donc les exponentielles sont bien négatives.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p2_s3',
              type: 'mcq',
              prompt:
                'Dans un semi-conducteur non dégénéré à l’équilibre, que se passe-t-il si le niveau de Fermi $E_F$ se rapproche du bord de la bande de conduction $E_C$ ?',
              options: [
                'La concentration d’électrons $n$ augmente exponentiellement tandis que la concentration de trous $p$ diminue',
                'La concentration d’électrons $n$ diminue et la concentration de trous $p$ augmente',
                'Les concentrations $n$ et $p$ diminuent simultanément vers zéro',
                'Les concentrations $n$ et $p$ restent toutes deux égales à $n_i$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si $E_F$ se rapproche de $E_C$, l’écart $(E_C - E_F)$ diminue donc $n = N_C e^{-(E_C - E_F)/k_B T}$ augmente, tandis que $(E_F - E_V)$ augmente donc $p = N_V e^{-(E_F - E_V)/k_B T}$ diminue.',
              hint: 'Regarde comment varie $e^{-(E_C - E_F)/k_B T}$ quand $(E_C - E_F)$ devient plus petit.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Intrinsèque',
            stepTheme: 'violet',
            stepTitle: 'Semi-conducteur intrinsèque, niveau de Fermi intrinsèque Ei et concentration ni',
            paragraphText:
              'Un semi-conducteur est dit intrinsèque lorsqu’il est parfaitement pur (exempt de toute impureté dopante). Dans ce cas, chaque électron promu dans la bande de conduction laisse exactement un trou dans la bande de valence : la neutralité impose $n = p = n_i$, où $n_i$ est la concentration intrinsèque. En égalant les expressions de $n$ et $p$, on détermine le niveau de Fermi intrinsèque $E_i$, qui se situe pratiquement au milieu de la bande interdite.',
            formula: {
              name: 'Niveau de Fermi intrinsèque Ei et concentration intrinsèque ni',
              formula: 'E_i = \\frac{E_C + E_V}{2} + \\frac{k_B T}{2}\\ln\\left(\\frac{N_V}{N_C}\\right) \\approx \\frac{E_C + E_V}{2} \\quad ; \\quad n_i = \\sqrt{N_C N_V}\\exp\\left(-\\frac{E_g}{2 k_B T}\\right)',
              note: 'À 300 K : ni(Si) ≈ 1,45 × 10^10 cm^-3 et ni(Ge) ≈ 2,4 × 10^13 cm^-3',
            },
            keyRule:
              'Dans un semi-conducteur intrinsèque pur, $n = p = n_i$ et le niveau de Fermi $E_F = E_i$ est situé quasiment au milieu du gap ($E_i \\approx \\frac{E_C + E_V}{2}$).',
            konanTip:
              'Pourquoi $n_i(\\text{Ge}) \\approx 2{,}4\\times 10^{13}\\text{ cm}^{-3}$ est-il mille fois plus grand que $n_i(\\text{Si}) \\approx 1{,}45\\times 10^{10}\\text{ cm}^{-3}$ à $300\\text{ K}$ ? Parce que le gap du Germanium ($0{,}66\\text{ eV}$) est plus petit que celui du Silicium ($1{,}12\\text{ eV}$) !',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p2_s4',
              type: 'mcq',
              prompt:
                'Quel est l’ordre de grandeur de la concentration intrinsèque $n_i$ du Silicium pur à $T = 300\\text{ K}$ ?',
              options: [
                '$n_i \\approx 1{,}45 \\times 10^{10}\\text{ cm}^{-3}$',
                '$n_i \\approx 5 \\times 10^{22}\\text{ cm}^{-3}$',
                '$n_i \\approx 2{,}8 \\times 10^{19}\\text{ cm}^{-3}$',
                '$n_i \\approx 1{,}6 \\times 10^{-19}\\text{ cm}^{-3}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À $300\\text{ K}$, le Silicium compte environ $5\\times 10^{22}\\text{ atomes/cm}^3$, mais seulement $n_i \\approx 1{,}45\\times 10^{10}\\text{ porteurs/cm}^3$ sont ionisés thermiquement (soit environ 1 atome sur $3\\times 10^{12}$).',
              hint: 'C’est de l’ordre de $1{,}45\\times 10^{10}$ par $\\text{cm}^3$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Loi fondamentale',
            stepTheme: 'violet',
            stepTitle: 'Loi d’action de masse : n · p = ni²',
            paragraphText:
              'Si l’on effectue le produit des concentrations $n$ et $p$ d’un semi-conducteur non dégénéré quelconque à l’équilibre thermodynamique, le niveau de Fermi $E_F$ s’élimine dans l’exponentielle puisque $(E_C - E_F) + (E_F - E_V) = E_C - E_V = E_g$. On obtient ainsi la loi d’action de masse : $n \\cdot p = N_C N_V e^{-E_g/(k_B T)} = n_i^2$. Cette relation est capitale : elle reste vraie que le semi-conducteur soit intrinsèque ou dopé (extrinsèque), dès lors qu’il est à l’équilibre thermodynamique.',
            formula: {
              name: 'Loi d’action de masse et écriture en fonction de Ei',
              formula: 'n \\cdot p = n_i^2 \\quad ; \\quad n = n_i \\exp\\left(\\frac{E_F - E_i}{k_B T}\\right) \\quad ; \\quad p = n_i \\exp\\left(\\frac{E_i - E_F}{k_B T}\\right)',
              note: 'Valable uniquement à l’équilibre thermodynamique (absence d’injection ou d’éclairement hors équilibre)',
            },
            keyRule:
              'Grâce à la loi d’action de masse $n \\cdot p = n_i^2$, dès que l’on connaît la concentration des porteurs majoritaires à l’équilibre, on obtient immédiatement celle des porteurs minoritaires.',
            konanTip:
              'C’est la formule la plus utilisée en TD de PDE : si $n = 10^{16}\\text{ cm}^{-3}$ dans du Silicium ($n_i = 1{,}5\\times 10^{10}\\text{ cm}^{-3}$), alors $p = \\frac{n_i^2}{n} = \\frac{2{,}25\\times 10^{20}}{10^{16}} = 2{,}25\\times 10^4\\text{ cm}^{-3}$.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p2_s5',
              type: 'mcq',
              prompt:
                'Dans un échantillon de Silicium à l’équilibre thermodynamique à $300\\text{ K}$ ($n_i = 1{,}5\\times 10^{10}\\text{ cm}^{-3}$), la concentration d’électrons vaut $n = 1{,}5\\times 10^{15}\\text{ cm}^{-3}$. Que vaut la concentration de trous $p$ ?',
              options: [
                '$p = 1{,}5 \\times 10^5\\text{ cm}^{-3}$',
                '$p = 1{,}5 \\times 10^{15}\\text{ cm}^{-3}$',
                '$p = 1{,}5 \\times 10^{10}\\text{ cm}^{-3}$',
                '$p = 10^{-5}\\text{ cm}^{-3}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après la loi d’action de masse $n \\cdot p = n_i^2$, on a $p = \\frac{n_i^2}{n} = \\frac{(1{,}5\\times 10^{10})^2}{1{,}5\\times 10^{15}} = 1{,}5\\times 10^5\\text{ cm}^{-3}$.',
              hint: 'Applique $p = n_i^2 / n$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Limites de validité de la loi d’action de masse et effet de la température',
            paragraphText:
              'Deux erreurs classiques doivent être évitées aux examens. Premièrement, la loi d’action de masse $n \\cdot p = n_i^2$ n’est valable qu’à l’équilibre thermodynamique (et pour un semi-conducteur non dégénéré) : dès que le composant est soumis à une tension de polarisation ou à un éclairement créant un excès de porteurs, $n \\cdot p \\ne n_i^2$. Deuxièmement, à très haute température, $n_i(T)$ croît si vite qu’il finit par dépasser la concentration d’impuretés dopantes : le semi-conducteur dopé redevient alors intrinsèque et perd sa fonction électronique !',
            formula: {
              name: 'Domaine de validité de la loi d’action de masse',
              formula: '\\text{Équilibre thermodynamique (}V = 0,\\text{ obscurité)} \\implies n_0 \\cdot p_0 = n_i^2(T)',
              note: 'Hors équilibre : n · p = ni² · exp((EFn - EFp) / kBT) ≠ ni²',
            },
            keyRule:
              'La loi $n \\cdot p = n_i^2$ tombe en défaut hors équilibre thermodynamique (polarisation électrique, illumination optique) ou en régime de dégénérescence (dopage extrême).',
            konanTip:
              'C’est parce que $n_i$ devient trop élevé à haute température que les puces en Germanium ($E_g = 0{,}66\\text{ eV}$) ne fonctionnent plus au-dessus de $70\\text{ }^\\circ\\text{C}$, alors que le Silicium ($E_g = 1{,}12\\text{ eV}$) supporte jusqu’à $150\\text{ }^\\circ\\text{C}$.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p2_s6',
              type: 'mcq',
              prompt:
                'Dans laquelle des situations suivantes la loi d’action de masse $n \\cdot p = n_i^2$ N’EST-ELLE PAS applicable ?',
              options: [
                'Lorsqu’une jonction est fortement éclairée ou traversée par un courant d’injection hors équilibre thermodynamique',
                'Lorsque le Silicium est dopé de type N à $N_D = 10^{16}\\text{ cm}^{-3}$ à l’équilibre thermodynamique',
                'Lorsque le Silicium est dopé de type P à $N_A = 10^{15}\\text{ cm}^{-3}$ à l’équilibre thermodynamique',
                'Lorsque le Silicium est intrinsèque à $T = 300\\text{ K}$ dans l’obscurité',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La loi d’action de masse $n \\cdot p = n_i^2$ découle de l’unicité du niveau de Fermi $E_F$ à l’équilibre thermodynamique. Sous éclairement ou injection électrique (hors équilibre), $n \\cdot p > n_i^2$.',
              hint: 'La loi d’action de masse exige l’équilibre thermodynamique.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_pde_c1_p3',
        order: 3,
        title: 'Semi-conducteurs extrinsèques : dopage N et P, neutralité électrique et niveau de Fermi',
        summary:
          'Dopage par donneurs pentavalents (type N) et accepteurs trivalents (type P), équation de neutralité électrique, calcul des porteurs majoritaires/minoritaires et déplacement de Ef.',
        conceptExplanation:
          'La conductivité d’un semi-conducteur intrinsèque étant très faible à $300\\text{ K}$, on introduit volontairement dans le réseau cristallin une faible proportion contrôlée d’atomes étrangers ($10^{14}$ à $10^{18}\\text{ cm}^{-3}$) : c’est le dopage. Le dopage par des éléments pentavalents (colonne V : $\\text{P, As, Sb}$) fournit des électrons supplémentaires (semi-conducteur type N), tandis que le dopage par des éléments trivalents (colonne III : $\\text{B, Ga, In}$) crée des trous supplémentaires (semi-conducteur type P).',
        formulas: [
          {
            name: 'Équation générale de neutralité électrique',
            formula: 'n + N_A^- = p + N_D^+',
            note: 'À 300 K (ionisation totale des impuretés) : NA^- ≈ NA et ND^+ ≈ ND',
          },
          {
            name: 'Position du niveau de Fermi dans un semi-conducteur dopé',
            formula: 'E_{Fn} - E_i = k_B T \\ln\\left(\\frac{N_D}{n_i}\\right) \\quad ; \\quad E_i - E_{Fp} = k_B T \\ln\\left(\\frac{N_A}{n_i}\\right)',
            note: 'Pour un type N : n ≈ ND et p ≈ ni²/ND ; pour un type P : p ≈ NA et n ≈ ni²/NA',
          },
        ],
        keyRule:
          'Un semi-conducteur dopé de type N ou de type P reste globalement électriquement neutre : la charge des porteurs mobiles est exactement compensée par la charge des ions dopants fixes ($N_D^+$ ou $N_A^-$).',
        workedExample: {
          title: 'Calcul des porteurs et du niveau de Fermi dans un Silicium dopé N',
          statement:
            'Un cristal de Silicium à $300\\text{ K}$ ($n_i = 1{,}45\\times 10^{10}\\text{ cm}^{-3}$, $k_B T = 0{,}026\\text{ eV}$) est dopé au Phosphore avec $N_D = 1{,}45\\times 10^{16}\\text{ cm}^{-3}$. Déterminer $n$, $p$ et l’écart $E_F - E_i$.',
          methodSteps: [
            'Le Phosphore (colonne V) est un donneur : comme $N_D \\gg n_i$, on a ionisation totale et $n \\approx N_D = 1{,}45\\times 10^{16}\\text{ cm}^{-3}$ (électrons majoritaires).',
            'Par la loi d’action de masse, $p = \\frac{n_i^2}{N_D} = \\frac{(1{,}45\\times 10^{10})^2}{1{,}45\\times 10^{16}} = 1{,}45\\times 10^4\\text{ cm}^{-3}$ (trous minoritaires).',
            'Position du niveau de Fermi : $E_F - E_i = k_B T \\ln\\left(\\frac{N_D}{n_i}\\right) = 0{,}026 \\times \\ln(10^6) = 0{,}026 \\times 13{,}815 \\approx +0{,}36\\text{ eV}$.',
          ],
          conclusion:
            'Les électrons sont majoritaires ($n = 1{,}45\\times 10^{16}\\text{ cm}^{-3}$), les trous minoritaires ($p = 1{,}45\\times 10^4\\text{ cm}^{-3}$) et $E_F$ est situé à $0{,}36\\text{ eV}$ au-dessus du milieu du gap $E_i$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Dopage Type N',
            stepTheme: 'blue',
            stepTitle: 'Dopage de type N par des atomes donneurs pentavalents (Colonne V)',
            paragraphText:
              'Pour obtenir un semi-conducteur extrinsèque de type N, on substitue certains atomes de Silicium par des atomes pentavalents de la colonne V ($5$ électrons de valence) tels que le Phosphore ($\\text{P}$), l’Arsenic ($\\text{As}$) ou l’Antimoine ($\\text{Sb}$). Quatre de ces cinq électrons assurent les liaisons covalentes avec les quatre atomes de Silicium voisins ; le cinquième électron, très faiblement lié (énergie d’ionisation $\\Delta E_D = E_C - E_D \\approx 0{,}045\\text{ eV}$), passe dès la température ambiante dans la bande de conduction. L’atome dopant, ayant cédé un électron, devient un ion positif fixe $\\text{D}^+$ dans le réseau : on l’appelle un donneur.',
            formula: {
              name: 'Concentrations à 300 K dans un semi-conducteur de type N (ND >> ni)',
              formula: 'n \\approx N_D^+ \\approx N_D \\quad \\text{et} \\quad p = \\frac{n_i^2}{N_D} \\ll n',
              note: 'Dans un type N : les électrons sont les porteurs majoritaires et les trous les porteurs minoritaires',
            },
            keyRule:
              'Un dopant de la colonne V ($\\text{P, As, Sb}$) est un donneur d’électrons (type N) : une fois ionisé, il devient un ion fixe chargé positivement ($N_D^+$).',
            konanTip:
              'Moyen mnémotechnique infaillible : Type **N** = porteurs majoritaires **N**égatifs (électrons) = donneurs de la colonne V ($\\text{P, As, Sb}$).',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p3_s1',
              type: 'mcq',
              prompt:
                'Parmi les éléments chimiques suivants, lesquels sont des impuretés donatrices permettant de réaliser un dopage de type N dans le Silicium ?',
              options: [
                'Le Phosphore ($\\text{P}$), l’Arsenic ($\\text{As}$) et l’Antimoine ($\\text{Sb}$) de la colonne V',
                'Le Bore ($\\text{B}$), le Gallium ($\\text{Ga}$) et l’Indium ($\\text{In}$) de la colonne III',
                'Le Carbone ($\\text{C}$) et le Germanium ($\\text{Ge}$) de la colonne IV',
                'L’Hélium ($\\text{He}$) et le Néon ($\\text{Ne}$) de la colonne VIII',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les éléments de la colonne V ($\\text{P, As, Sb}$) possèdent 5 électrons de valence : ils donnent leur 5ème électron à la bande de conduction, créant un semi-conducteur de type N.',
              hint: 'Il faut un atome ayant 5 électrons de valence (colonne V).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Dopage Type P',
            stepTheme: 'blue',
            stepTitle: 'Dopage de type P par des atomes accepteurs trivalents (Colonne III)',
            paragraphText:
              'Pour obtenir un semi-conducteur extrinsèque de type P, on introduit des atomes trivalents de la colonne III ($3$ électrons de valence) tels que le Bore ($\\text{B}$), le Gallium ($\\text{Ga}$) ou l’Indium ($\\text{In}$). Il manque alors un quatrième électron pour compléter les quatre liaisons covalentes autour de l’impureté. Ce niveau accepteur $E_A$, situé très près au-dessus de $E_V$ ($E_A - E_V \\approx 0{,}045\\text{ eV}$), capture facilement un électron de la bande de valence à $300\\text{ K}$ : l’atome dopant devient un ion négatif fixe $\\text{A}^-$ et libère un trou mobile dans la bande de valence.',
            formula: {
              name: 'Concentrations à 300 K dans un semi-conducteur de type P (NA >> ni)',
              formula: 'p \\approx N_A^- \\approx N_A \\quad \\text{et} \\quad n = \\frac{n_i^2}{N_A} \\ll p',
              note: 'Dans un type P : les trous sont les porteurs majoritaires et les électrons les porteurs minoritaires',
            },
            keyRule:
              'Un dopant de la colonne III ($\\text{B, Ga, In}$) est un accepteur d’électrons (type P) : en capturant un électron de valence pour compléter ses liaisons, il devient un ion fixe négatif ($N_A^-$) et crée un trou libre.',
            konanTip:
              'Ne confonds jamais le signe des porteurs mobiles et celui des ions fixes : dans une région P, les porteurs mobiles sont positifs (trous $+q$), mais les ions dopants fixes sont négatifs ($\\text{B}^-$ ou $N_A^-$) !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Comparaison synthétique des dopages de type N et de type P',
              caption: 'Nature des impuretés, charges fixes et porteurs mobiles à 300 K.',
              matrix2x2: {
                topAxis: ['Dopage Type N (Donneurs)', 'Dopage Type P (Accepteurs)'],
                leftAxis: ['Atomes & Ions fixes', 'Porteurs & Niveau Ef'],
                topLeft: {
                  title: 'Colonne V (P, As, Sb)',
                  items: [
                    '5 électrons de valence (1 électron cédé)',
                    'Niveau donneur Ed juste sous Ec',
                    'Ions fixes positifs ND+ dans le cristal',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Colonne III (B, Ga, In)',
                  items: [
                    '3 électrons de valence (1 électron capté)',
                    'Niveau accepteur Ea juste au-dessus de Ev',
                    'Ions fixes négatifs NA- dans le cristal',
                  ],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'Comportement électrique Type N',
                  items: [
                    'Majoritaires : électrons n ≈ ND',
                    'Minoritaires : trous p = ni² / ND',
                    'Niveau de Fermi Ef au-dessus de Ei (proche Ec)',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Comportement électrique Type P',
                  items: [
                    'Majoritaires : trous p ≈ NA',
                    'Minoritaires : électrons n = ni² / NA',
                    'Niveau de Fermi Ef au-dessous de Ei (proche Ev)',
                  ],
                  color: 'orange',
                },
              },
            },
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p3_s2',
              type: 'mcq',
              prompt:
                'Dans un cristal de Silicium dopé au Bore ($\\text{B}$, colonne III), quels sont les porteurs majoritaires et quelle est la charge électrique des ions de Bore fixes dans le réseau après ionisation ?',
              options: [
                'Les porteurs majoritaires sont les trous ($+q$) et les ions de Bore fixes sont chargés négativement ($\\text{B}^-$)',
                'Les porteurs majoritaires sont les trous ($+q$) et les ions de Bore fixes sont chargés positivement ($\\text{B}^+$)',
                'Les porteurs majoritaires sont les électrons ($-q$) et les ions de Bore fixes sont chargés négativement ($\\text{B}^-$)',
                'Les porteurs majoritaires sont les électrons ($-q$) et les ions de Bore fixes sont neutres',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Bore (3 électrons de valence) est un accepteur : il capte un 4ème électron dans la bande de valence pour former ses 4 liaisons covalentes. Il devient donc un ion fixe négatif $\\text{B}^-$ tout en libérant un trou mobile $+q$ dans la bande de valence.',
              hint: 'Un accepteur capte un électron supplémentaire : quelle devient sa charge ionique ?',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Neutralité',
            stepTheme: 'violet',
            stepTitle: 'Équation de neutralité électrique générale et semi-conducteur compensé',
            paragraphText:
              'Un barreau semi-conducteur isolé est électriquement neutre en tout point puisque chaque atome introduit (Silicium ou dopant) est initialement neutre. En écrivant que la somme des densités de charges négatives (électrons libres $n$ et accepteurs ionisés $N_A^-$) est égale à la somme des densités de charges positives (trous libres $p$ et donneurs ionisés $N_D^+$), on obtient l’équation de neutralité électrique. Combinée à la loi d’action de masse $n \\cdot p = n_i^2$, elle conduit à une équation du second degré permettant de calculer exactement $n$ et $p$ même lorsque les deux types de dopants sont présents simultanément (semi-conducteur compensé).',
            formula: {
              name: 'Équation de neutralité et résolution générale à ionisation complète',
              formula: 'n + N_A = p + N_D \\quad \\text{avec} \\quad p = \\frac{n_i^2}{n} \\implies n^2 - (N_D - N_A)n - n_i^2 = 0',
              note: 'Si ND > NA et (ND - NA) >> ni, le matériau est de type N effectif avec n ≈ ND - NA',
            },
            keyRule:
              'Dans un semi-conducteur compensé contenant à la fois des donneurs $N_D$ et des accepteurs $N_A$, le type effectif est déterminé par le dopant majoritaire : type N si $N_D > N_A$ ($n \\approx N_D - N_A$), type P si $N_A > N_D$ ($p \\approx N_A - N_D$).',
            konanTip:
              'Si $N_D = N_A$ exactement (compensation totale), l’équation donne $n^2 = n_i^2 \\implies n = p = n_i$ : le semi-conducteur retrouve les concentrations d’un matériau intrinsèque !',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p3_s3',
              type: 'mcq',
              prompt:
                'Un échantillon de Silicium à $300\\text{ K}$ ($n_i = 1{,}5\\times 10^{10}\\text{ cm}^{-3}$) contient simultanément $N_D = 5\\times 10^{16}\\text{ cm}^{-3}$ atomes de Phosphore et $N_A = 2\\times 10^{16}\\text{ cm}^{-3}$ atomes de Bore. Quels sont le type effectif et la concentration des porteurs majoritaires ?',
              options: [
                'Type N avec $n \\approx N_D - N_A = 3 \\times 10^{16}\\text{ cm}^{-3}$',
                'Type P avec $p \\approx N_A = 2 \\times 10^{16}\\text{ cm}^{-3}$',
                'Type N avec $n \\approx N_D + N_A = 7 \\times 10^{16}\\text{ cm}^{-3}$',
                'Intrinsèque avec $n = p = 1{,}5 \\times 10^{10}\\text{ cm}^{-3}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $N_D > N_A$ et $N_D - N_A = 3\\times 10^{16}\\text{ cm}^{-3} \\gg n_i$, les accepteurs compensent une partie des donneurs et la concentration d’électrons majoritaires vaut $n \\approx N_D - N_A = 3\\times 10^{16}\\text{ cm}^{-3}$.',
              hint: 'Calcule le dopage net effectif $N_D - N_A$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Niveau de Fermi',
            stepTheme: 'green',
            stepTitle: 'Déplacement du niveau de Fermi en fonction du dopage',
            paragraphText:
              'À partir des relations $n = n_i e^{(E_F - E_i)/k_B T}$ et $p = n_i e^{(E_i - E_F)/k_B T}$, on détermine immédiatement la position du niveau de Fermi $E_F$ par rapport au niveau intrinsèque $E_i$ (situé au milieu du gap). Dans un semi-conducteur de type N ($n \\approx N_D > n_i$), $E_F$ s’élève au-dessus de $E_i$ en direction de la bande de conduction $E_C$. Dans un semi-conducteur de type P ($p \\approx N_A > n_i$), $E_F$ s’abaisse au-dessous de $E_i$ en direction de la bande de valence $E_V$.',
            formula: {
              name: 'Position du niveau de Fermi par rapport à Ec, Ev ou Ei',
              formula: 'E_C - E_{Fn} = k_B T \\ln\\left(\\frac{N_C}{N_D}\\right) \\quad ; \\quad E_{Fp} - E_V = k_B T \\ln\\left(\\frac{N_V}{N_A}\\right)',
              note: 'Par rapport à Ei : EFn - Ei = kBT ln(ND/ni) et Ei - EFp = kBT ln(NA/ni)',
            },
            keyRule:
              'Plus le dopage $N_D$ (resp. $N_A$) est élevé, plus le niveau de Fermi $E_F$ se rapproche du bord de bande $E_C$ (resp. $E_V$).',
            konanTip:
              'Retiens que chaque fois que le dopage est multiplié par $10$ à $300\\text{ K}$, le niveau de Fermi se déplace de $k_B T \\ln(10) \\approx 26\\text{ meV} \\times 2{,}303 \\approx 60\\text{ meV}$ vers le bord de bande correspondant.',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p3_s4',
              type: 'mcq',
              prompt:
                'Quelle expression donne la distance énergétique $E_C - E_F$ entre le bas de la bande de conduction et le niveau de Fermi dans un semi-conducteur de type N ($n \\approx N_D$) à l’équilibre ?',
              options: [
                '$E_C - E_F = k_B T \\ln\\left(\\frac{N_C}{N_D}\\right)$',
                '$E_C - E_F = k_B T \\ln\\left(\\frac{N_D}{n_i}\\right)$',
                '$E_C - E_F = \\frac{E_g}{2}$',
                '$E_C - E_F = k_B T \\ln\\left(\\frac{N_V}{N_D}\\right)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En partant de $n = N_D = N_C \\exp\\left(-\\frac{E_C - E_F}{k_B T}\\right)$, on prend le logarithme népérien : $\\frac{E_C - E_F}{k_B T} = \\ln\\left(\\frac{N_C}{N_D}\\right)$, soit $E_C - E_F = k_B T \\ln\\left(\\frac{N_C}{N_D}\\right)$.',
              hint: 'Inverse la relation $N_D = N_C e^{-(E_C - E_F)/(k_B T)}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Régimes en T',
            stepTheme: 'violet',
            stepTitle: 'Les trois régimes de température d’un semi-conducteur dopé',
            paragraphText:
              'La concentration des porteurs majoritaires d’un semi-conducteur dopé (par exemple type N) évolue selon trois régimes distincts lorsque la température $T$ croît de $0\\text{ K}$ aux hautes températures. Aux très basses températures ($T < 100\\text{ K}$, régime de gel ou d’ionisation partielle), l’énergie thermique est insuffisante pour ioniser tous les donneurs ($n < N_D$). Aux températures intermédiaires incluant l’ambiante ($150\\text{ K} < T < 450\\text{ K}$ pour Si, régime extrinsèque), tous les donneurs sont ionisés et $n \\approx N_D = \\text{constante}$. Aux hautes températures ($T > 500\\text{ K}$, régime intrinsèque), $n_i(T)$ dépasse $N_D$ et $n \\approx n_i(T)$ croît exponentiellement.',
            formula: {
              name: 'Plage de fonctionnement normal (Régime extrinsèque d’épuisement)',
              formula: 'N_D^+ = N_D \\quad \\text{et} \\quad n_i(T) \\ll N_D \\quad \\Longrightarrow \\quad n(T) \\approx N_D = \\text{cste}',
              note: 'Le niveau de Fermi Ef tend quant à lui vers le milieu du gap Ei lorsque T devient très grande',
            },
            keyRule:
              'Un composant électronique à semi-conducteur est conçu pour fonctionner dans le régime extrinsèque (plateau d’ionisation complète où $n \\approx N_D$), encadré par le gel des porteurs à basse température et le retour à l’état intrinsèque à haute température.',
            konanTip:
              'Si on te demande où se dirige le niveau de Fermi $E_F$ d’un semi-conducteur dopé N ou P lorsque la température $T$ devient très élevée : il revient toujours vers le niveau intrinsèque $E_i$ au milieu du gap !',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p3_s5',
              type: 'mcq',
              prompt:
                'Comment évolue la position du niveau de Fermi $E_F$ d’un semi-conducteur dopé de type N lorsque la température $T$ devient très élevée (de sorte que $n_i(T) \\gg N_D$) ?',
              options: [
                'Le niveau de Fermi $E_F$ redescend et tend vers le niveau intrinsèque $E_i$ au milieu de la bande interdite',
                'Le niveau de Fermi $E_F$ pénètre indéfiniment à l’intérieur de la bande de conduction',
                'Le niveau de Fermi $E_F$ descend jusque dans la bande de valence sous $E_V$',
                'Le niveau de Fermi $E_F$ reste strictement immobile quelle que soit la température',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À très haute température, la génération thermique intrinsèque domine le dopage ($n_i(T) \\gg N_D$) : on a $n \\approx p \\approx n_i$ et $E_F - E_i = k_B T \\ln(n/n_i) \\to 0$, donc $E_F$ rejoint $E_i$ au milieu du gap.',
              hint: 'À très haute température, le semi-conducteur dopé redevient intrinsèque.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'orange',
            stepTitle: 'Charge électrique globale d’un barreau dopé N ou P',
            paragraphText:
              'Une confusion très fréquente chez les étudiants consiste à croire qu’un semi-conducteur de type N porte une charge électrique globale négative sous prétexte qu’il contient beaucoup d’électrons libres, ou qu’un semi-conducteur de type P est chargé positivement parce qu’il contient beaucoup de trous. C’est totalement faux ! Chaque électron libre supplémentaire dans un type N provient d’un atome donneur initialement neutre qui est devenu un ion positif fixe $\\text{D}^+$ dans le cristal. La densité volumique de charge totale $\\rho = q(p - n + N_D^+ - N_A^-)$ est donc rigoureusement nulle.',
            formula: {
              name: 'Densité volumique de charge dans un semi-conducteur homogène à l’équilibre',
              formula: '\\rho = q\\left(p - n + N_D^+ - N_A^-\\right) = 0',
              note: 'La charge d’espace ρ ≠ 0 n’apparaît qu’au voisinage d’une jonction ou d’une interface (ZCE)',
            },
            keyRule:
              'Un semi-conducteur dopé N ou P pris isolément est globalement et localement électriquement neutre ($\\rho = 0$).',
            konanTip:
              'Cette question tombe presque chaque année en QCM d’examen : « Un barreau de Silicium dopé P est-il chargé positivement, négativement ou neutre ? » La bonne réponse est toujours **électriquement neutre** !',
            exercise: {
              id: 'lmd_srit_l1_pde_c1_p3_s6',
              type: 'mcq',
              prompt:
                'Quelle est la charge électrique nette globale d’un barreau de Silicium homogène dopé de type P avec $N_A = 10^{17}\\text{ atomes de Bore/cm}^3$ ?',
              options: [
                'Il est électriquement neutre car la charge positive des trous mobiles est compensée par la charge négative des ions accepteurs fixes $N_A^-$',
                'Il porte une charge nette positive égale à $+q N_A$ par $\\text{cm}^3$',
                'Il porte une charge nette négative égale à $-q N_A$ par $\\text{cm}^3$',
                'Il porte une charge positive uniquement à température ambiante et négative à $0\\text{ K}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chaque atome de Bore introduit dans le cristal de Silicium est électriquement neutre (5 protons et 5 électrons). Lorsqu’il s’ionise en captant un électron de valence, il forme un couple (ion fixe $\\text{B}^-$ + trou mobile $h^+$) dont la somme des charges est nulle.',
              hint: 'Un cristal formé à partir d’atomes électriquement neutres conserve une charge totale nulle.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : PHÉNOMÈNES DE TRANSPORT DES PORTEURS DANS LES SEMI-CONDUCTEURS
  // ============================================================================
  {
    id: 'lmd_srit_l1_pde_ch2',
    subjectId: 'lmd_pde',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 4,
    contentVersion: 2,
    source: 'Programme LMD — SRIT 1 Semestre 1 (Physique des Dispositifs Électroniques, 12h)',
    title: 'Phénomènes de Transport des porteurs dans les Semi-conducteurs',
    summary:
      'Conduction par dérive sous champ électrique, mobilité, conductivité et résistivité, effet Hall, diffusion par gradient de concentration (loi de Fick), relation d’Einstein et équations de continuité.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_pde_c2_p1',
        order: 1,
        title: 'Conduction (dérive) sous l’effet d’un champ électrique : mobilité et conductivité',
        summary:
          'Vitesse de dérive, mobilité des électrons et des trous, loi d’Ohm locale, conductivité σ et résistivité ρ d’un semi-conducteur.',
        conceptExplanation:
          'En l’absence de champ électrique, l’agitation thermique anime les porteurs d’une vitesse aléatoire élevée ($v_{\\text{th}} \\approx 10^7\\text{ cm/s}$ à $300\\text{ K}$) mais de moyenne vectorielle nulle. Lorsqu’on applique un champ électrique $\\vec{E}$, les porteurs subissent entre deux collisions (temps de relaxation moyen $\\tau$) une accélération qui leur confère une vitesse moyenne d’entraînement appelée vitesse de dérive $\\vec{v}_d$, proportionnelle à $\\vec{E}$ à faible champ.',
        formulas: [
          {
            name: 'Vitesses de dérive et mobilités des porteurs',
            formula: '\\vec{v}_n = -\\mu_n \\vec{E} \\quad ; \\quad \\vec{v}_p = +\\mu_p \\vec{E} \\quad \\text{avec} \\quad \\mu = \\frac{q\\tau}{m^*}',
            note: 'Dans le Silicium à 300 K : μn ≈ 1350 cm²/(V·s) et μp ≈ 480 cm²/(V·s)',
          },
          {
            name: 'Densité de courant de conduction et conductivité électrique',
            formula: '\\vec{J}_{\\text{cond}} = q(n\\mu_n + p\\mu_p)\\vec{E} = \\sigma \\vec{E} \\quad ; \\quad \\rho = \\frac{1}{\\sigma}',
            note: 'σ en (Ω·cm)^-1 et ρ en Ω·cm',
          },
        ],
        keyRule:
          'Bien que les électrons et les trous dérivent en sens opposés sous l’effet de $\\vec{E}$, leurs densités de courant de conduction $\\vec{J}_{n,\\text{cond}} = q n \\mu_n \\vec{E}$ et $\\vec{J}_{p,\\text{cond}} = q p \\mu_p \\vec{E}$ sont toutes deux de même sens que $\\vec{E}$ et s’additionnent !',
        workedExample: {
          title: 'Calcul de la résistivité d’un barreau de Silicium dopé N',
          statement:
            'Un barreau de Silicium à $300\\text{ K}$ est dopé avec $N_D = 10^{16}\\text{ cm}^{-3}$. On donne $q = 1{,}6\\times 10^{-19}\\text{ C}$, $\\mu_n = 1350\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ et $\\mu_p = 480\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Calculer sa conductivité $\\sigma$ et sa résistivité $\\rho$.',
          methodSteps: [
            'Dans un semi-conducteur de type N ($n \\approx N_D \\gg p$), la contribution des trous minoritaires est totalement négligeable : $\\sigma \\approx q n \\mu_n \\approx q N_D \\mu_n$.',
            'Application numérique : $\\sigma = 1{,}6\\times 10^{-19} \\times 10^{16} \\times 1350 = 2{,}16\\text{ }(\\Omega\\cdot\\text{cm})^{-1}$.',
            'On en déduit la résistivité : $\\rho = \\frac{1}{\\sigma} = \\frac{1}{2{,}16} \\approx 0{,}463\\text{ }\\Omega\\cdot\\text{cm}$.',
          ],
          conclusion:
            'La conductivité vaut $\\sigma = 2{,}16\\text{ }(\\Omega\\cdot\\text{cm})^{-1}$ et la résistivité vaut $\\rho \\approx 0{,}463\\text{ }\\Omega\\cdot\\text{cm}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mobilité',
            stepTheme: 'blue',
            stepTitle: 'Mouvement de dérive sous champ électrique et mobilité μ',
            paragraphText:
              'Soumis à un champ électrique $\\vec{E}$, un porteur libre est accéléré par la force électrostatique $\\vec{F} = q_{\\text{porteur}}\\vec{E}$ mais subit des chocs fréquents contre les vibrations thermiques du réseau (phonons) et les impuretés ionisées. Au bout d’un temps libre moyen $\\tau$, il atteint un régime stationnaire caractérisé par une vitesse moyenne de dérive proportionnelle au champ électrique : $\\vec{v}_n = -\\mu_n \\vec{E}$ pour les électrons (qui remontent le champ) et $\\vec{v}_p = +\\mu_p \\vec{E}$ pour les trous (qui descendent le champ). Le coefficient positif $\\mu$ est la mobilité du porteur.',
            formula: {
              name: 'Expression microscopique de la mobilité',
              formula: '\\mu_n = \\frac{q \\tau_n}{m_n^*} \\quad \\text{et} \\quad \\mu_p = \\frac{q \\tau_p}{m_p^*}',
              note: 'Unité usuelle en électronique : cm²/(V·s) ou m²/(V·s)',
            },
            keyRule:
              'Dans le Silicium comme dans la quasi-totalité des semi-conducteurs, la mobilité des électrons est supérieure à celle des trous ($\\mu_n \\approx 1350\\text{ cm}^2/\\text{V}\\cdot\\text{s} > \\mu_p \\approx 480\\text{ cm}^2/\\text{V}\\cdot\\text{s}$) car leur masse effective $m_n^*$ est plus faible.',
            konanTip:
              'C’est parce que $\\mu_n \\approx 2{,}8\\,\\mu_p$ dans le Silicium que les transistors bipolaires NPN et les transistors MOS à canal N (NMOS) sont beaucoup plus rapides que leurs homologues PNP et PMOS !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p1_s1',
              type: 'mcq',
              prompt:
                'Quelle est l’unité de la mobilité $\\mu$ des porteurs de charge et quelle relation lie la vitesse de dérive des électrons $\\vec{v}_n$ au champ électrique $\\vec{E}$ ?',
              options: [
                'Unité : $\\text{cm}^2/(\\text{V}\\cdot\\text{s})$ et relation : $\\vec{v}_n = -\\mu_n \\vec{E}$',
                'Unité : $\\text{cm}/\\text{s}$ et relation : $\\vec{v}_n = +\\mu_n \\vec{E}$',
                'Unité : $\\text{V}/(\\text{cm}\\cdot\\text{s})$ et relation : $\\vec{v}_n = -\\vec{E}/\\mu_n$',
                'Unité : $(\\Omega\\cdot\\text{cm})^{-1}$ et relation : $\\vec{v}_n = q\\mu_n \\vec{E}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La vitesse étant en $\\text{cm/s}$ et le champ électrique en $\\text{V/cm}$, le rapport $\\mu = |v|/|E|$ s’exprime en $\\frac{\\text{cm/s}}{\\text{V/cm}} = \\text{cm}^2/(\\text{V}\\cdot\\text{s})$. Comme l’électron porte une charge $-q < 0$, il dérive en sens opposé à $\\vec{E}$ : $\\vec{v}_n = -\\mu_n \\vec{E}$.',
              hint: 'Divise l’unité d’une vitesse ($\\text{cm/s}$) par l’unité d’un champ électrique ($\\text{V/cm}$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Courant de dérive',
            stepTheme: 'violet',
            stepTitle: 'Densité de courant de conduction et loi d’Ohm locale',
            paragraphText:
              'Une assemblée de porteurs de concentration volumique $N$, de charge $q_{\\text{porteur}}$ et de vitesse moyenne $\\vec{v}$ engendre un vecteur densité de courant $\\vec{J} = N q_{\\text{porteur}} \\vec{v}$ (en $\\text{A/cm}^2$). Pour les électrons, $\\vec{J}_{n,\\text{cond}} = n(-q)(-\\mu_n \\vec{E}) = +q n \\mu_n \\vec{E}$. Pour les trous, $\\vec{J}_{p,\\text{cond}} = p(+q)(+\\mu_p \\vec{E}) = +q p \\mu_p \\vec{E}$. Les deux signes moins de la charge et de la vitesse de l’électron se compensent : les courants de dérive des électrons et des trous sont tous deux colinéaires et de même sens que le champ électrique $\\vec{E}$ !',
            formula: {
              name: 'Densité totale de courant de conduction (Loi d’Ohm locale)',
              formula: '\\vec{J}_{\\text{cond}} = \\vec{J}_{n,\\text{cond}} + \\vec{J}_{p,\\text{cond}} = q(n\\mu_n + p\\mu_p)\\vec{E} = \\sigma \\vec{E}',
              note: 'σ = q(n·μn + p·μp) est la conductivité électrique du semi-conducteur',
            },
            keyRule:
              'La conductivité totale d’un semi-conducteur est la somme des conductivités partielles des deux types de porteurs : $\\sigma = q(n\\mu_n + p\\mu_p)$.',
            konanTip:
              'Ne soustrais jamais les courants d’électrons et de trous dans la conduction sous champ électrique : même s’ils partent dans des directions opposées, leurs charges sont opposées donc leurs courants électriques s’ajoutent !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p1_s2',
              type: 'mcq',
              prompt:
                'Quelle est l’expression du vecteur densité de courant total de conduction $\\vec{J}_{\\text{cond}}$ dans un semi-conducteur soumis à un champ électrique $\\vec{E}$ ?',
              options: [
                '$\\vec{J}_{\\text{cond}} = q(n\\mu_n + p\\mu_p)\\vec{E}$',
                '$\\vec{J}_{\\text{cond}} = q(p\\mu_p - n\\mu_n)\\vec{E}$',
                '$\\vec{J}_{\\text{cond}} = q(n\\mu_n - p\\mu_p)\\vec{E}$',
                '$\\vec{J}_{\\text{cond}} = \\frac{q}{n\\mu_n + p\\mu_p}\\vec{E}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $\\vec{J}_{n,\\text{cond}} = (-q)n(-\\mu_n\\vec{E}) = qn\\mu_n\\vec{E}$ et $\\vec{J}_{p,\\text{cond}} = (+q)p(+\\mu_p\\vec{E}) = qp\\mu_p\\vec{E}$, les deux contributions sont de même sens que $\\vec{E}$ et s’additionnent.',
              hint: 'Le produit $(-q)\\times(-\\mu_n\\vec{E})$ donne un signe positif.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Résistivité',
            stepTheme: 'green',
            stepTitle: 'Calcul de la conductivité σ et de la résistivité ρ d’un matériau dopé',
            paragraphText:
              'Dans un semi-conducteur extrinsèque de type N ($n \\approx N_D \\gg p$) ou de type P ($p \\approx N_A \\gg n$), la concentration des porteurs minoritaires est inférieure de plusieurs ordres de grandeur à celle des majoritaires. On peut donc négliger le terme des minoritaires dans l’expression de la conductivité $\\sigma$. La résistivité $\\rho = \\frac{1}{\\sigma}$ (en $\\Omega\\cdot\\text{cm}$) permet ensuite de calculer la résistance électrique $R = \\rho \\frac{L}{S}$ d’un barreau de longueur $L$ et de section droite $S$.',
            formula: {
              name: 'Résistivité d’un semi-conducteur extrinsèque N ou P',
              formula: '\\rho_N \\approx \\frac{1}{q N_D \\mu_n} \\quad ; \\quad \\rho_P \\approx \\frac{1}{q N_A \\mu_p} \\quad ; \\quad R = \\rho \\frac{L}{S}',
              note: 'Pour le Silicium intrinsèque (n = p = ni) : σi = q·ni·(μn + μp) ≈ 4,4 × 10^-6 (Ω·cm)^-1',
            },
            keyRule:
              'Le dopage d’un semi-conducteur permet d’abaisser sa résistivité de plusieurs millions de fois par rapport à l’état intrinsèque ($\\rho_i \\approx 2{,}3\\times 10^5\\text{ }\\Omega\\cdot\\text{cm}$ pour le Silicium pur à $300\\text{ K}$).',
            konanTip:
              'Veille toujours à l’homogénéité des unités : en PDE, on travaille systématiquement en centimètres ($N_D$ en $\\text{cm}^{-3}$, $\\mu$ en $\\text{cm}^2/\\text{V}\\cdot\\text{s}$, donc $\\rho$ en $\\Omega\\cdot\\text{cm}$).',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p1_s3',
              type: 'mcq',
              prompt:
                'Un échantillon de Silicium de type P est dopé avec $N_A = 10^{15}\\text{ cm}^{-3}$. Sachant que $q = 1{,}6\\times 10^{-19}\\text{ C}$ et $\\mu_p = 500\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$, quelle est sa résistivité $\\rho$ à $300\\text{ K}$ ?',
              options: [
                '$\\rho = 12{,}5\\text{ }\\Omega\\cdot\\text{cm}$',
                '$\\rho = 0{,}08\\text{ }\\Omega\\cdot\\text{cm}$',
                '$\\rho = 1{,}25\\text{ }\\Omega\\cdot\\text{cm}$',
                '$\\rho = 125\\text{ }\\Omega\\cdot\\text{cm}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On calcule d’abord la conductivité $\\sigma \\approx q N_A \\mu_p = 1{,}6\\times 10^{-19} \\times 10^{15} \\times 500 = 0{,}08\\text{ }(\\Omega\\cdot\\text{cm})^{-1}$. La résistivité vaut donc $\\rho = \\frac{1}{0{,}08} = 12{,}5\\text{ }\\Omega\\cdot\\text{cm}$.',
              hint: 'Calcule $\\sigma = q N_A \\mu_p$ puis prends l’inverse $\\rho = 1/\\sigma$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Mécanismes',
            stepTheme: 'violet',
            stepTitle: 'Évolution de la mobilité avec la température et le dopage (Loi de Matthiessen)',
            paragraphText:
              'La mobilité $\\mu$ n’est pas une constante absolue : elle est limitée par deux mécanismes principaux de collision (diffusion) dans le cristal. Le premier est l’interaction avec les vibrations thermiques du réseau (phonons acoustiques), qui réduit la mobilité quand la température croît ($\\mu_{\\text{réseau}} \\propto T^{-3/2}$). Le second est la déviation coulombienne par les impuretés dopantes ionisées ($N_D^+, N_A^-$), qui réduit la mobilité lorsque le dopage augmente mais devient moins gênante quand les porteurs sont rapides ($\\mu_{\\text{imp}} \\propto T^{+3/2}/N_{\\text{imp}}$).',
            formula: {
              name: 'Loi d’additivité des fréquences de collision (Règle de Matthiessen)',
              formula: '\\frac{1}{\\mu} = \\frac{1}{\\mu_{\\text{réseau}}} + \\frac{1}{\\mu_{\\text{impuretés}}}',
              note: 'Plus un semi-conducteur est fortement dopé, plus la mobilité μ de ses porteurs diminue',
            },
            keyRule:
              'À température ambiante ($300\\text{ K}$), une augmentation de la concentration de dopage ou une élévation de la température entraîne une diminution de la mobilité $\\mu$ des porteurs.',
            konanTip:
              'Attention au piège : quand on double le dopage $N_D$ à fort niveau ($> 10^{17}\\text{ cm}^{-3}$), la conductivité $\\sigma = q N_D \\mu_n$ augmente moins vite que prévu car $\\mu_n$ diminue simultanément à cause des chocs sur les ions dopants !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p1_s4',
              type: 'mcq',
              prompt:
                'À température ambiante ($300\\text{ K}$), quel est l’effet d’une forte augmentation de la concentration en impuretés dopantes sur la mobilité $\\mu$ des porteurs ?',
              options: [
                'La mobilité $\\mu$ diminue en raison de l’augmentation des collisions coulombiennes sur les ions dopants',
                'La mobilité $\\mu$ augmente proportionnellement à la concentration de dopage',
                'La mobilité $\\mu$ reste strictement constante quel que soit le dopage',
                'La mobilité des électrons augmente tandis que celle des trous s’annule',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Plus la densité d’ions dopants ($N_D^+$ ou $N_A^-$) est grande, plus le temps libre moyen $\\tau$ entre deux collisions diminue (règle de Matthiessen), ce qui abaisse la mobilité $\\mu = q\\tau/m^*$.',
              hint: 'Plus il y a d’impuretés ionisées sur le trajet des porteurs, plus il y a de collisions.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Fort champ',
            stepTheme: 'orange',
            stepTitle: 'Saturation de la vitesse de dérive à fort champ électrique',
            paragraphText:
              'La relation linéaire $\\vec{v}_d = \\mu \\vec{E}$ (et donc la loi d’Ohm $\\vec{J} = \\sigma \\vec{E}$) n’est valable que pour des champs électriques faibles ou modérés ($E < 10^3\\text{ V/cm}$ dans le Silicium). Lorsque le champ électrique dépasse environ $10^4\\text{ V/cm}$ (ce qui est fréquent dans les canaux submicroniques des transistors modernes), les porteurs gagnent tant d’énergie qu’ils émettent massivement des phonons optiques : leur vitesse de dérive plafonne alors à une valeur limite appelée vitesse de saturation $v_{\\text{sat}} \\approx 10^7\\text{ cm/s}$.',
            formula: {
              name: 'Comportement de la vitesse de dérive à très fort champ électrique',
              formula: 'E \\gg E_{\\text{crit}} \\approx 10^4\\text{ V/cm} \\quad \\Longrightarrow \\quad |\\vec{v}_d| \\longrightarrow v_{\\text{sat}} \\approx 10^7\\text{ cm/s}',
              note: 'En régime de saturation de vitesse, la densité de courant devient constante : J = q·n·vsat',
            },
            keyRule:
              'À très fort champ électrique ($E > 10^4\\text{ V/cm}$), la mobilité effective chute et la vitesse de dérive des porteurs sature autour de $v_{\\text{sat}} \\approx 10^7\\text{ cm/s}$ dans le Silicium.',
            konanTip:
              'Si un exercice te fait calculer $v_d = \\mu_n E$ et que tu trouves $v_d > 10^7\\text{ cm/s}$, signale immédiatement que le régime ohmique linéaire est dépassé et que la vitesse sature à $10^7\\text{ cm/s}$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p1_s5',
              type: 'mcq',
              prompt:
                'Que se passe-t-il pour la vitesse de dérive des électrons dans le Silicium lorsque le champ électrique appliqué devient très intense ($E > 5\\times 10^4\\text{ V/cm}$) ?',
              options: [
                'Elle cesse de croître linéairement avec $E$ et plafonne à une vitesse de saturation $v_{\\text{sat}} \\approx 10^7\\text{ cm/s}$',
                'Elle continue de croître indéfiniment selon $v_n = \\mu_n E$ jusqu’à dépasser la vitesse de la lumière',
                'Elle s’annule brusquement car le cristal devient isolant',
                'Elle s’inverse et les électrons dérivent dans le même sens que $\\vec{E}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À fort champ électrique, l’émission intense de phonons optiques limite la vitesse maximale de dérive des porteurs à la vitesse thermique de saturation $v_{\\text{sat}} \\approx 10^7\\text{ cm/s}$ ($10^5\\text{ m/s}$).',
              hint: 'À fort champ, la loi linéaire $v = \\mu E$ n’est plus respectée : la vitesse sature.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Effet Hall',
            stepTheme: 'green',
            stepTitle: 'Caractérisation expérimentale par Effet Hall (Type, concentration et mobilité)',
            paragraphText:
              'Comment déterminer expérimentalement si un échantillon semi-conducteur est de type N ou P, ainsi que sa concentration de porteurs et leur mobilité ? On utilise l’effet Hall : un barreau parcouru par un courant longitudinal $I_x$ est plongé dans un champ magnétique transversal $B_z$. La force magnétique de Lorentz $q\\vec{v}\\wedge\\vec{B}$ dévie les porteurs(électrons ou trous) vers la même face latérale, faisant apparaître une tension transversale de Hall $V_H$ dont le signe révèle immédiatement le type N ($R_H < 0$) ou P ($R_H > 0$) et la valeur donne la concentration des porteurs.',
            formula: {
              name: 'Constante de Hall RH et mobilité de Hall μH',
              formula: 'R_{H,\\text{type N}} = -\\frac{1}{q n} \\quad ; \\quad R_{H,\\text{type P}} = +\\frac{1}{q p} \\quad ; \\quad \\mu_H = |R_H| \\sigma',
              note: 'Tension de Hall sur une plaquette d’épaisseur d : VH = RH · Ix · Bz / d',
            },
            keyRule:
              'La mesure conjointe de la constante de Hall $R_H$ et de la conductivité $\\sigma$ permet de déterminer à la fois le type de dopage (signe de $R_H$), la concentration des porteurs ($1/q|R_H|$) et leur mobilité ($\\mu = |R_H|\\sigma$).',
            konanTip:
              'Retiens le signe de la constante de Hall : $R_H < 0$ pour un semi-conducteur de type N (porteurs négatifs) et $R_H > 0$ pour un semi-conducteur de type P (porteurs positifs).',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p1_s6',
              type: 'mcq',
              prompt:
                'Une mesure d’effet Hall sur une plaquette de Silicium fournit une constante de Hall positive $R_H = +625\\text{ cm}^3/\\text{C}$ et une conductivité $\\sigma = 0{,}8\\text{ }(\\Omega\\cdot\\text{cm})^{-1}$. Quels sont le type du semi-conducteur, la concentration des majoritaires et leur mobilité ? ($q = 1{,}6\\times 10^{-19}\\text{ C}$)',
              options: [
                'Type P, concentration $p = 10^{16}\\text{ cm}^{-3}$ et mobilité $\\mu_p = 500\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$',
                'Type N, concentration $n = 10^{16}\\text{ cm}^{-3}$ et mobilité $\\mu_n = 500\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$',
                'Type P, concentration $p = 10^{15}\\text{ cm}^{-3}$ et mobilité $\\mu_p = 1350\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$',
                'Type N, concentration $n = 6{,}25\\times 10^{18}\\text{ cm}^{-3}$ et mobilité $\\mu_n = 800\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $R_H > 0$, le semi-conducteur est de type P. On a $p = \\frac{1}{q R_H} = \\frac{1}{1{,}6\\times 10^{-19} \\times 625} = \\frac{1}{10^{-16}} = 10^{16}\\text{ cm}^{-3}$, et la mobilité vaut $\\mu_p = R_H \\sigma = 625 \\times 0{,}8 = 500\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$.',
              hint: 'Le signe de $R_H$ donne le signe des porteurs majoritaires ; puis applique $p = 1/(q R_H)$ et $\\mu_p = R_H \\sigma$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_pde_c2_p2',
        order: 2,
        title: 'Transport par diffusion, relation d’Einstein et courant total',
        summary:
          'Loi de Fick, courant de diffusion des électrons et des trous, constantes de diffusion Dn et Dp, relation d’Einstein D/μ = kBT/q = UT et courant total conduction + diffusion.',
        conceptExplanation:
          'Contrairement aux métaux où la concentration électronique est uniforme, les dispositifs à semi-conducteurs (jonctions PN, transistors bipolaires) présentent de forts gradients spatiaux de concentration. Par agitation thermique, les porteurs migrent spontanément des régions les plus concentrées vers les régions les moins concentrées : c’est le phénomène de diffusion (loi de Fick), qui engendre un courant électrique même en l’absence totale de champ électrique.',
        formulas: [
          {
            name: 'Densités de courant de diffusion des électrons et des trous',
            formula: '\\vec{J}_{n,\\text{diff}} = +q D_n \\overrightarrow{\\text{grad}}\\,n \\quad ; \\quad \\vec{J}_{p,\\text{diff}} = -q D_p \\overrightarrow{\\text{grad}}\\,p',
            note: 'En 1D selon Ox : Jn,diff = +q Dn (dn/dx) et Jp,diff = -q Dp (dp/dx)',
          },
          {
            name: 'Relation d’Einstein et potentiel thermique UT',
            formula: '\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = U_T = \\frac{k_B T}{q} \\approx 26\\text{ mV à }300\\text{ K}',
            note: 'Pour Si à 300 K : Dn ≈ 35 cm²/s et Dp ≈ 12,5 cm²/s',
          },
        ],
        keyRule:
          'Le flux matériel de diffusion est toujours dirigé en sens inverse du gradient de concentration ($-D\\,\\overrightarrow{\\text{grad}}\\,N$), mais comme l’électron porte une charge négative $-q$, sa densité de courant électrique de diffusion s’écrit avec un signe PLUS : $\\vec{J}_{n,\\text{diff}} = +q D_n \\overrightarrow{\\text{grad}}\\,n$.',
        workedExample: {
          title: 'Calcul de la constante de diffusion et du courant de diffusion',
          statement:
            'Dans du Silicium à $300\\text{ K}$ ($U_T = 26\\text{ mV}$), la mobilité des électrons vaut $\\mu_n = 1350\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Calculer la constante de diffusion $D_n$, puis la densité de courant de diffusion $J_{n,\\text{diff}}$ si la concentration d’électrons décroît linéairement de $10^{17}\\text{ cm}^{-3}$ à $0$ sur une distance $\\Delta x = 2\\text{ }\\mu\\text{m} = 2\\times 10^{-4}\\text{ cm}$.',
          methodSteps: [
            'Appliquer la relation d’Einstein : $D_n = \\mu_n U_T = 1350 \\times 0{,}026 = 35{,}1\\text{ cm}^2/\\text{s}$.',
            'Calculer le gradient de concentration : $\\frac{dn}{dx} = \\frac{0 - 10^{17}}{2\\times 10^{-4}} = -5\\times 10^{20}\\text{ cm}^{-4}$.',
            'En déduire la densité de courant : $J_{n,\\text{diff}} = q D_n \\frac{dn}{dx} = 1{,}6\\times 10^{-19} \\times 35{,}1 \\times (-5\\times 10^{20}) \\approx -2808\\text{ A/cm}^2$.',
          ],
          conclusion:
            'La constante de diffusion vaut $D_n \\approx 35{,}1\\text{ cm}^2/\\text{s}$ et la densité de courant de diffusion atteint $|J_{n,\\text{diff}}| \\approx 2{,}81\\text{ kA/cm}^2$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Loi de Fick',
            stepTheme: 'blue',
            stepTitle: 'Phénomène de diffusion et première loi de Fick',
            paragraphText:
              'Lorsque la concentration de porteurs $n(x)$ ou $p(x)$ n’est pas uniforme dans l’espace, l’agitation thermique aléatoire entraîne statistiquement un flux net de particules depuis les zones de forte concentration vers les zones de faible concentration. D’après la première loi de Fick de la thermodynamique statistique, le vecteur flux de particules $\\vec{\\Phi}$ (nombre de porteurs traversant l’unité de surface par seconde) est proportionnel et opposé au gradient de concentration : $\\vec{\\Phi}_n = -D_n \\overrightarrow{\\text{grad}}\\,n$ et $\\vec{\\Phi}_p = -D_p \\overrightarrow{\\text{grad}}\\,p$, où $D_n$ et $D_p$ sont les constantes (ou coefficients) de diffusion.',
            formula: {
              name: 'Première loi de Fick pour les flux de porteurs',
              formula: '\\vec{\\Phi}_n = -D_n \\overrightarrow{\\text{grad}}\\,n \\quad \\text{et} \\quad \\vec{\\Phi}_p = -D_p \\overrightarrow{\\text{grad}}\\,p',
              note: 'Unité de la constante de diffusion D : cm²/s (ou m²/s)',
            },
            keyRule:
              'Le signe moins de la loi de Fick traduit le fait que les particules diffusent toujours des fortes concentrations vers les faibles concentrations (dans le sens où la concentration décroît).',
            konanTip:
              'Ne confonds pas le flux de particules $\\vec{\\Phi}$ (en $\\text{cm}^{-2}\\cdot\\text{s}^{-1}$) et la densité de courant électrique $\\vec{J} = q_{\\text{porteur}}\\vec{\\Phi}$ (en $\\text{A/cm}^2$) !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p2_s1',
              type: 'mcq',
              prompt:
                'Quelle est l’unité de la constante de diffusion $D_n$ ou $D_p$ dans le système usuel de la physique des semi-conducteurs ?',
              options: [
                '$\\text{cm}^2/\\text{s}$',
                '$\\text{cm}^2/(\\text{V}\\cdot\\text{s})$',
                '$\\text{cm}^{-3}\\cdot\\text{s}^{-1}$',
                '$\\text{A}/\\text{cm}^2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans $\\Phi = -D \\frac{dn}{dx}$, le flux $\\Phi$ est en $\\text{cm}^{-2}\\cdot\\text{s}^{-1}$ et le gradient $\\frac{dn}{dx}$ est en $\\text{cm}^{-4}$. Le rapport $D$ s’exprime donc en $\\frac{\\text{cm}^{-2}\\cdot\\text{s}^{-1}}{\\text{cm}^{-4}} = \\text{cm}^2/\\text{s}$.',
              hint: 'L’unité de $\\mu$ est $\\text{cm}^2/(\\text{V}\\cdot\\text{s})$ et $D = \\mu U_T$ où $U_T$ est en Volts.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Courants de diffusion',
            stepTheme: 'violet',
            stepTitle: 'Expressions des densités de courant de diffusion Jn,diff et Jp,diff',
            paragraphText:
              'Pour obtenir le vecteur densité de courant électrique de diffusion, il suffit de multiplier le flux de particules $\\vec{\\Phi}$ par la charge algébrique du porteur considéré. Pour les trous de charge $+q$, on a $\\vec{J}_{p,\\text{diff}} = (+q)\\vec{\\Phi}_p = -q D_p \\overrightarrow{\\text{grad}}\\,p$. Pour les électrons de charge $-q$, le produit de $(-q)$ par le signe moins de la loi de Fick donne un signe positif : $\\vec{J}_{n,\\text{diff}} = (-q)\\vec{\\Phi}_n = +q D_n \\overrightarrow{\\text{grad}}\\,n$. En effet, si les électrons diffusent vers la droite, le courant électrique conventionnel est dirigé vers la gauche, c’est-à-dire dans le sens où $n$ augmente !',
            formula: {
              name: 'Densités de courant de diffusion à une dimension (axe Ox)',
              formula: 'J_{n,\\text{diff}} = +q D_n \\frac{dn}{dx} \\quad \\text{et} \\quad J_{p,\\text{diff}} = -q D_p \\frac{dp}{dx}',
              note: 'Attention à l’opposition des signes entre Jn,diff (+) et Jp,diff (-)',
            },
            keyRule:
              'Retiens scrupuleusement les signes : $+q D_n \\frac{dn}{dx}$ pour les électrons et $-q D_p \\frac{dp}{dx}$ pour les trous.',
            konanTip:
              'C’est l’inverse de la conduction : en conduction, $\\vec{J}_n$ et $\\vec{J}_p$ ont tous deux le signe $+$. En diffusion, $\\vec{J}_{n,\\text{diff}}$ a un signe $+$ devant le gradient et $\\vec{J}_{p,\\text{diff}}$ a un signe $-$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p2_s2',
              type: 'mcq',
              prompt:
                'Quelles sont les expressions exactes des densités de courant électrique de diffusion des électrons $J_{n,\\text{diff}}$ et des trous $J_{p,\\text{diff}}$ selon l’axe $Ox$ ?',
              options: [
                '$J_{n,\\text{diff}} = +q D_n \\frac{dn}{dx}$ et $J_{p,\\text{diff}} = -q D_p \\frac{dp}{dx}$',
                '$J_{n,\\text{diff}} = -q D_n \\frac{dn}{dx}$ et $J_{p,\\text{diff}} = +q D_p \\frac{dp}{dx}$',
                '$J_{n,\\text{diff}} = -q D_n \\frac{dn}{dx}$ et $J_{p,\\text{diff}} = -q D_p \\frac{dp}{dx}$',
                '$J_{n,\\text{diff}} = +q D_n \\frac{dn}{dx}$ et $J_{p,\\text{diff}} = +q D_p \\frac{dp}{dx}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après la loi de Fick, $\\Phi_n = -D_n \\frac{dn}{dx}$ et $\\Phi_p = -D_p \\frac{dp}{dx}$. En multipliant par les charges $-q$ et $+q$, on obtient $J_{n,\\text{diff}} = (-q)\\Phi_n = +q D_n \\frac{dn}{dx}$ et $J_{p,\\text{diff}} = (+q)\\Phi_p = -q D_p \\frac{dp}{dx}$.',
              hint: 'Multiplie le flux de Fick $(-D\\frac{dN}{dx})$ par $-q$ pour les électrons et par $+q$ pour les trous.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Einstein',
            stepTheme: 'violet',
            stepTitle: 'Relation d’Einstein et potentiel thermique UT',
            paragraphText:
              'La mobilité $\\mu$ (qui régit la conduction) et la constante de diffusion $D$ (qui régit la diffusion) ne sont pas indépendantes, car ces deux phénomènes sont gouvernés à l’échelle microscopique par la même agitation thermique et le même temps de collision $\\tau$. La relation d’Einstein établit que pour chaque type de porteur dans un semi-conducteur non dégénéré, le rapport $\\frac{D}{\\mu}$ est universel et égal au potentiel thermodynamique (ou tension thermique) $U_T = \\frac{k_B T}{q}$.',
            formula: {
              name: 'Relation d’Einstein entre diffusion et mobilité',
              formula: '\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = U_T = \\frac{k_B T}{q}',
              note: 'À T = 300 K : UT = (1,38 × 10^-23 × 300) / (1,6 × 10^-19) ≈ 0,025875 V ≈ 26 mV',
            },
            keyRule:
              'À température ambiante ($T = 300\\text{ K}$), le potentiel thermique vaut $U_T = \\frac{k_B T}{q} \\approx 26\\text{ mV}$ et permet de déduire immédiatement $D_n = \\mu_n U_T$ et $D_p = \\mu_p U_T$.',
            konanTip:
              'Mémorise la valeur $U_T \\approx 26\\text{ mV} = 0{,}026\\text{ V}$ à $300\\text{ K}$ : tu la retrouveras dans toutes les formules de la jonction PN et du transistor bipolaire !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p2_s3',
              type: 'mcq',
              prompt:
                'À $T = 300\\text{ K}$ ($U_T = \\frac{k_B T}{q} \\approx 26\\text{ mV}$), la mobilité des trous dans un échantillon de Silicium vaut $\\mu_p = 500\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Quelle est la valeur de leur constante de diffusion $D_p$ ?',
              options: [
                '$D_p = 13\\text{ cm}^2/\\text{s}$',
                '$D_p = 19\\,230\\text{ cm}^2/\\text{s}$',
                '$D_p = 35\\text{ cm}^2/\\text{s}$',
                '$D_p = 1{,}3\\text{ cm}^2/\\text{s}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après la relation d’Einstein $\\frac{D_p}{\\mu_p} = U_T$, on a $D_p = \\mu_p \\times U_T = 500 \\times 0{,}026 = 13\\text{ cm}^2/\\text{s}$.',
              hint: 'Multiplie $\\mu_p = 500$ par $U_T = 0{,}026\\text{ V}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Équations de courant',
            stepTheme: 'violet',
            stepTitle: 'Équations générales des densités de courant totales (Conduction + Diffusion)',
            paragraphText:
              'Dans le cas général où un semi-conducteur est soumis simultanément à un champ électrique $\\vec{E}$ et à un gradient de concentration de porteurs, le courant des électrons $\\vec{J}_n$ et le courant des trous $\\vec{J}_p$ sont chacun la somme de leur composante de conduction (dérive) et de leur composante de diffusion. Le vecteur densité de courant électrique total dans le matériau est enfin la somme $\\vec{J}_{\\text{tot}} = \\vec{J}_n + \\vec{J}_p$.',
            formula: {
              name: 'Équations de transport (Courants d’électrons, de trous et courant total)',
              formula: '\\begin{cases} \\vec{J}_n = q n \\mu_n \\vec{E} + q D_n \\overrightarrow{\\text{grad}}\\,n \\\\ \\vec{J}_p = q p \\mu_p \\vec{E} - q D_p \\overrightarrow{\\text{grad}}\\,p \\end{cases} \\quad \\text{et} \\quad \\vec{J}_{\\text{tot}} = \\vec{J}_n + \\vec{J}_p',
              note: 'Ces deux équations constituent le pilier de toute la physique des composants à semi-conducteurs',
            },
            keyRule:
              'Chaque type de porteur contribue au courant par deux mécanismes additifs : la conduction sous champ électrique ($q N \\mu \\vec{E}$) et la diffusion sous gradient de concentration ($\\pm q D \\overrightarrow{\\text{grad}}\\,N$).',
            konanTip:
              'Ces deux équations servent à démontrer la relation d’Einstein et la formule de la barrière de potentiel $V_0$ de la jonction PN : à l’équilibre thermodynamique, $\\vec{J}_n = \\vec{0}$ et $\\vec{J}_p = \\vec{0}$ séparément !',
            visualSchema: {
              type: 'flowchart',
              title: 'Synthèse des mécanismes de transport dans un semi-conducteur',
              caption: 'Combinaison de la conduction (champ électrique E) et de la diffusion (gradient de concentration) formant le courant total.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    id: 'causes',
                    label: 'Sollicitations internes ou externes',
                    sublabel: 'Champ électrique E = -grad(V) et Gradients de concentration grad(n), grad(p)',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 'conduction',
                    label: 'Courant de Conduction (Dérive)',
                    sublabel: 'Jn,cond = q·n·μn·E et Jp,cond = q·p·μp·E (même sens que E)',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    id: 'diffusion',
                    label: 'Courant de Diffusion (Loi de Fick)',
                    sublabel: 'Jn,diff = +q·Dn·grad(n) et Jp,diff = -q·Dp·grad(p) avec D = μ·UT',
                    kind: 'process',
                    color: 'orange',
                  },
                  {
                    id: 'total',
                    label: 'Densité de courant total : Jtot = Jn + Jp',
                    sublabel: 'À l’équilibre thermodynamique : Jn = 0 et Jp = 0 (conduction et diffusion se compensent)',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p2_s4',
              type: 'mcq',
              prompt:
                'Quelle est l’expression complète de la densité de courant de trous $J_p(x)$ à une dimension en présence simultanée d’un champ électrique $E(x)$ et d’un gradient de concentration $\\frac{dp}{dx}$ ?',
              options: [
                '$J_p(x) = q p(x) \\mu_p E(x) - q D_p \\frac{dp}{dx}$',
                '$J_p(x) = q p(x) \\mu_p E(x) + q D_p \\frac{dp}{dx}$',
                '$J_p(x) = -q p(x) \\mu_p E(x) - q D_p \\frac{dp}{dx}$',
                '$J_p(x) = q n(x) \\mu_n E(x) - q D_p \\frac{dp}{dx}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le courant total de trous est la somme du courant de conduction $+q p \\mu_p E$ et du courant de diffusion $-q D_p \\frac{dp}{dx}$.',
              hint: 'Additionne le terme de conduction des trous ($+q p \\mu_p E$) et le terme de diffusion des trous ($-q D_p \\frac{dp}{dx}$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Démonstration',
            stepTheme: 'green',
            stepTitle: 'Équilibre thermodynamique : compensation exacte entre conduction et diffusion',
            paragraphText:
              'À l’équilibre thermodynamique (aucune tension extérieure ni éclairement), aucun courant net d’électrons ni de trous ne peut circuler : $\\vec{J}_n = \\vec{0}$ et $\\vec{J}_p = \\vec{0}$ en tout point. Cela implique que si un semi-conducteur présente un dopage non uniforme $N_D(x)$, la diffusion des électrons vers les zones moins dopées fait apparaître un champ électrique interne auto-induit $E(x)$ qui crée un courant de conduction exactement opposé au courant de diffusion ! En écrivant $J_n = q n \\mu_n E + q D_n \\frac{dn}{dx} = 0$, on exprime directement ce champ interne.',
            formula: {
              name: 'Champ électrique interne auto-induit à l’équilibre thermodynamique',
              formula: 'J_n = 0 \\quad \\Longrightarrow \\quad E(x) = -\\frac{D_n}{\\mu_n} \\frac{1}{n(x)}\\frac{dn}{dx} = -U_T \\frac{d(\\ln n)}{dx}',
              note: 'Principe physique fondamental de la barrière de potentiel dans une jonction PN',
            },
            keyRule:
              'À l’équilibre thermodynamique dans un semi-conducteur inhumogène, le courant de conduction et le courant de diffusion de chaque porteur sont non nuls mais s’annulent mutuellement en tout point ($J_{n,\\text{cond}} + J_{n,\\text{diff}} = 0$).',
            konanTip:
              'Ce mécanisme d’équilibre entre diffusion et conduction sous champ interne est la clé absolue pour comprendre la formation de la Zone de Charge d’Espace (ZCE) de la jonction PN au Chapitre 3.',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p2_s5',
              type: 'mcq',
              prompt:
                'Dans un semi-conducteur à dopage non uniforme maintenu à l’équilibre thermodynamique, quelle relation lie le courant de conduction $J_{n,\\text{cond}}$ et le courant de diffusion $J_{n,\\text{diff}}$ des électrons en chaque point ?',
              options: [
                '$J_{n,\\text{cond}} + J_{n,\\text{diff}} = 0$ (ils sont égaux en module et de sens opposés)',
                '$J_{n,\\text{cond}} = J_{n,\\text{diff}} > 0$ (ils s’additionnent pour créer un courant permanent)',
                '$J_{n,\\text{cond}} = 0$ et $J_{n,\\text{diff}} > 0$',
                '$J_{n,\\text{cond}} > 0$ et $J_{n,\\text{diff}} = 0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À l’équilibre thermodynamique, le principe du bilan détaillé impose $J_n = J_{n,\\text{cond}} + J_{n,\\text{diff}} = 0$ (et de même $J_p = 0$) : un champ électrique interne contrebalance exactement la diffusion.',
              hint: 'Peut-il exister un courant électrique permanent dans un cristal isolé à l’équilibre thermodynamique ?',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Potentiel chimique',
            stepTheme: 'slate',
            stepTitle: 'Lien entre gradient du niveau de Fermi et courant total',
            paragraphText:
              'En remplaçant $n(x) = N_C \\exp\\left(-\\frac{E_C(x) - E_F(x)}{k_B T}\\right)$ et la relation entre le champ électrique et la courbure des bandes $q E(x) = \\frac{dE_C}{dx}$ dans l’expression du courant total $J_n(x)$, on démontre que la densité de courant s’écrit très simplement $J_n(x) = n(x) \\mu_n \\frac{dE_F}{dx}$. Ainsi, c’est le gradient spatial du niveau de Fermi $\\overrightarrow{\\text{grad}}\\,E_F$ qui est la véritable force motrice globale (électrochimique) du courant électrique !',
            formula: {
              name: 'Expression électrochimique du courant et constance de Ef à l’équilibre',
              formula: '\\vec{J}_n = n \\mu_n \\overrightarrow{\\text{grad}}\\,E_F \\quad \\Longrightarrow \\quad \\text{À l’équilibre (}\\vec{J}=\\vec{0}\\text{) : } E_F = \\text{constante partout}',
              note: 'Règle d’or du tracé des diagrammes de bandes : à l’équilibre, Ef est une droite horizontale unique !',
            },
            keyRule:
              'À l’équilibre thermodynamique ($\\vec{J}_n = \\vec{J}_p = \\vec{0}$), le niveau de Fermi $E_F$ est rigoureusement constant et uniforme dans tout le système, même à la jonction entre deux régions différemment dopées.',
            konanTip:
              'Retiens cette loi fondamentale pour le Chapitre 3 : quand on met en contact une région P et une région N à l’équilibre, leurs niveaux de Fermi s’alignent pour former une seule droite horizontale $E_F = \\text{cste}$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p2_s6',
              type: 'mcq',
              prompt:
                'Quelle propriété fondamentale vérifie le niveau de Fermi $E_F$ à travers tout système semi-conducteur (même hétérogène ou comportant une jonction PN) à l’équilibre thermodynamique ?',
              options: [
                'Le niveau de Fermi $E_F$ est constant (horizontal) en tout point du système',
                'Le niveau de Fermi $E_F$ présente une discontinuité égale à $E_g$ à chaque interface',
                'Le niveau de Fermi $E_F$ est toujours confondu avec $E_C$ en tout point',
                'Le niveau de Fermi $E_F$ varie linéairement avec la coordonnée $x$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $\\vec{J}_n = n \\mu_n \\overrightarrow{\\text{grad}}\\,E_F = \\vec{0}$ à l’équilibre thermodynamique, on a nécessairement $\\overrightarrow{\\text{grad}}\\,E_F = \\vec{0}$, donc $E_F$ est constant dans tout le dispositif.',
              hint: 'Si $\\vec{J}_n = n \\mu_n \\overrightarrow{\\text{grad}}\\,E_F = \\vec{0}$, que vaut le gradient de $E_F$ ?',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_pde_c2_p3',
        order: 3,
        title: 'Génération-Recombinaison, durée de vie et équations de continuité',
        summary:
          'Génération thermique et optique, recombinaison directe et par centres pièges, durée de vie τn et τp, équations de continuité et longueur de diffusion L = √(D·τ).',
        conceptExplanation:
          'Lorsqu’un semi-conducteur est écarté de l’équilibre thermodynamique (par éclairement ou par injection électrique dans une jonction), des porteurs en excès $\\Delta n = n - n_0$ et $\\Delta p = p - p_0$ apparaissent. Le retour à l’équilibre s’effectue par recombinaison des paires électron-trou avec une durée de vie caractéristique $\\tau$. L’évolution spatio-temporelle des concentrations obéit aux équations de continuité, qui couplent la divergence du courant aux taux de génération $G$ et de recombinaison $R$.',
        formulas: [
          {
            name: 'Équations de continuité pour les électrons et les trous (en 1D)',
            formula: '\\frac{\\partial n}{\\partial t} = G_n - R_n + \\frac{1}{q}\\frac{\\partial J_n}{\\partial x} \\quad ; \\quad \\frac{\\partial p}{\\partial t} = G_p - R_p - \\frac{1}{q}\\frac{\\partial J_p}{\\partial x}',
            note: 'En faible injection : Rn - Gn,th = Δn / τn et Rp - Gp,th = Δp / τp',
          },
          {
            name: 'Longueurs de diffusion des porteurs minoritaires',
            formula: 'L_n = \\sqrt{D_n \\tau_n} \\quad \\text{et} \\quad L_p = \\sqrt{D_p \\tau_p}',
            note: 'Distance moyenne parcourue par un porteur minoritaire par diffusion avant de se recombiner',
          },
        ],
        keyRule:
          'Un porteur minoritaire injecté dans une zone neutre diffuse sur une distance caractéristique égale à sa longueur de diffusion $L = \\sqrt{D\\tau}$ avant de disparaître par recombinaison.',
        workedExample: {
          title: 'Calcul de la longueur de diffusion des électrons minoritaires',
          statement:
            'Dans une région de Silicium de type P à $300\\text{ K}$, les électrons minoritaires ont une constante de diffusion $D_n = 36\\text{ cm}^2/\\text{s}$ et une durée de vie $\\tau_n = 10^{-6}\\text{ s} = 1\\text{ }\\mu\\text{s}$. Calculer leur longueur de diffusion $L_n$.',
          methodSteps: [
            'Appliquer la définition de la longueur de diffusion : $L_n = \\sqrt{D_n \\tau_n}$.',
            'Remplacer par les valeurs numériques en unités CGS ($\\text{cm}$ et $\\text{s}$) : $L_n = \\sqrt{36 \\times 10^{-6}} = 6\\times 10^{-3}\\text{ cm}$.',
            'Convertir en micromètres : $L_n = 6\\times 10^{-3}\\text{ cm} = 60\\text{ }\\mu\\text{m}$.',
          ],
          conclusion:
            'Les électrons minoritaires diffusent en moyenne sur $L_n = 60\\text{ }\\mu\\text{m}$ dans la région P avant de se recombiner avec les trous majoritaires.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Hors équilibre',
            stepTheme: 'blue',
            stepTitle: 'Processus de Génération et de Recombinaison (G-R)',
            paragraphText:
              'La génération est tout processus (thermique, optique par absorption de photons, ou par choc) qui fait passer un électron de la bande de valence à la bande de conduction, créant une paire électron-trou. La recombinaison est le processus inverse par lequel un électron de la bande de conduction retombe dans une place vacante de la bande de valence, annihilant une paire électron-trou en libérant l’énergie $E_g$ sous forme d’un photon (recombinaison radiative, utilisée dans les LED et lasers en $\\text{GaAs}$) ou de vibrations du réseau / phonons (recombinaison non radiative assistée par pièges, dominante dans le Silicium à gap indirect).',
            formula: {
              name: 'Égalité des taux à l’équilibre thermodynamique',
              formula: 'G_{\\text{th}} = R_0 \\quad \\Longrightarrow \\quad \\frac{dn_0}{dt} = \\frac{dp_0}{dt} = 0',
              note: 'Hors équilibre sous éclairement Gext : Gtot = Gth + Gext',
            },
            keyRule:
              'À l’équilibre thermodynamique, le taux de génération thermique $G_{\\text{th}}$ compense exactement le taux de recombinaison $R_0$, maintenant les concentrations $n_0$ et $p_0$ constantes.',
            konanTip:
              'C’est parce que le Silicium est un semi-conducteur à gap indirect (recombinaison non radiative sous forme de chaleur) qu’on ne fabrique pas de LED classiques en Silicium massif, mais en arséniure ou nitrure de gallium ($\\text{GaAs}, \\text{GaN}$) à gap direct !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p3_s1',
              type: 'mcq',
              prompt:
                'Que devient une paire électron-trou lors d’un événement de recombinaison bande à bande dans un semi-conducteur ?',
              options: [
                'L’électron de conduction retombe dans la bande de valence pour combler le trou, annihilant la paire et libérant une énergie $\\approx E_g$ (photon ou phonons)',
                'L’électron et le trou fusionnent pour former un nouvel atome de Silicium supplémentaire',
                'L’électron monte à un niveau d’énergie supérieur dans la bande de conduction en absorbant de la chaleur',
                'Le trou quitte la bande de valence pour devenir un proton libre hors du cristal',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lors d’une recombinaison, l’électron libre de la BC occupe la liaison covalente incomplète (trou) de la BV : les deux porteurs libres disparaissent et l’énergie $E_g = E_C - E_V$ est restituée sous forme lumineuse (photon) ou thermique (phonons).',
              hint: 'La recombinaison est l’inverse exact de la génération d’une paire électron-trou.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Durée de vie',
            stepTheme: 'violet',
            stepTitle: 'Porteurs en excès et durée de vie des porteurs minoritaires τ',
            paragraphText:
              'Lorsqu’une perturbation extérieure crée un excès de porteurs $\\Delta n = n - n_0$ et $\\Delta p = p - p_0$ (avec $\\Delta n = \\Delta p$ pour préserver la neutralité), on parle de régime de faible injection si cet excès reste très inférieur à la concentration des porteurs majoritaires. Dans ce régime, le taux net de recombinaison $U = R - G_{\\text{th}}$ est directement proportionnel à l’excès de porteurs minoritaires : $U_n = \\frac{\\Delta n}{\\tau_n}$ dans un type P, et $U_p = \\frac{\\Delta p}{\\tau_p}$ dans un type N, où $\\tau_n$ et $\\tau_p$ sont les durées de vie des porteurs minoritaires.',
            formula: {
              name: 'Décroissance temporelle d’un excès uniforme après arrêt de l’excitation',
              formula: '\\frac{d(\\Delta n)}{dt} = -\\frac{\\Delta n}{\\tau_n} \\quad \\Longrightarrow \\quad \\Delta n(t) = \\Delta n(0)\\,\\exp\\left(-\\frac{t}{\\tau_n}\\right)',
              note: 'Typiquement dans le Silicium : τ varie de 10^-8 s à 10^-3 s selon la pureté cristalline',
            },
            keyRule:
              'Après l’arrêt d’une excitation homogène, l’excès de porteurs minoritaires décroît exponentiellement vers zéro avec une constante de temps égale à la durée de vie $\\tau$.',
            konanTip:
              'En régime stationnaire sous un éclairement uniforme créant $G_{\\text{opt}}$ paires par $\\text{cm}^3$ et par seconde, on a $\\frac{d(\\Delta n)}{dt} = G_{\\text{opt}} - \\frac{\\Delta n}{\\tau_n} = 0$, soit immédiatement $\\Delta n = G_{\\text{opt}} \\cdot \\tau_n$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p3_s2',
              type: 'mcq',
              prompt:
                'Un échantillon de Silicium de type P (où la durée de vie des électrons minoritaires vaut $\\tau_n = 2\\text{ }\\mu\\text{s}$) est soumis à un éclairement uniforme stationnaire qui génère $G_{\\text{opt}} = 5\\times 10^{18}\\text{ paires}/(\\text{cm}^3\\cdot\\text{s})$. Quelle est la concentration stationnaire d’électrons en excès $\\Delta n$ ?',
              options: [
                '$\\Delta n = 10^{13}\\text{ cm}^{-3}$',
                '$\\Delta n = 2{,}5 \\times 10^{24}\\text{ cm}^{-3}$',
                '$\\Delta n = 10^{19}\\text{ cm}^{-3}$',
                '$\\Delta n = 2 \\times 10^{-6}\\text{ cm}^{-3}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En régime stationnaire uniforme, le taux de génération optique équilibre le taux de recombinaison : $G_{\\text{opt}} = \\frac{\\Delta n}{\\tau_n}$, d’où $\\Delta n = G_{\\text{opt}} \\tau_n = 5\\times 10^{18} \\times 2\\times 10^{-6} = 10^{13}\\text{ cm}^{-3}$.',
              hint: 'En régime permanent, $\\Delta n = G_{\\text{opt}} \\times \\tau_n$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Continuité',
            stepTheme: 'violet',
            stepTitle: 'Équations de continuité (Bilan local de conservation des porteurs)',
            paragraphText:
              'Dans un volume élémentaire de semi-conducteur, la variation temporelle du nombre de porteurs par unité de temps ($\\frac{\\partial n}{\\partial t}$ ou $\\frac{\\partial p}{\\partial t}$) résulte du bilan entre trois termes : les porteurs créés localement par génération ($+G$), les porteurs détruits localement par recombinaison ($-R$) et le flux net de porteurs entrant moins sortant à travers la surface du volume ($-\\text{div}\\,\\vec{\\Phi}$). En remplaçant les flux de particules par les densités de courant électrique $\\vec{J}_n = -q\\vec{\\Phi}_n$ et $\\vec{J}_p = +q\\vec{\\Phi}_p$, on obtient les équations de continuité.',
            formula: {
              name: 'Équations de continuité tridimensionnelles et unidimensionnelles',
              formula: '\\begin{cases} \\dfrac{\\partial n}{\\partial t} = G_n - R_n + \\dfrac{1}{q}\\text{div}\\,\\vec{J}_n = G_{\\text{ext}} - \\dfrac{\\Delta n}{\\tau_n} + \\dfrac{1}{q}\\dfrac{\\partial J_n}{\\partial x} \\\\[6pt] \\dfrac{\\partial p}{\\partial t} = G_p - R_p - \\dfrac{1}{q}\\text{div}\\,\\vec{J}_p = G_{\\text{ext}} - \\dfrac{\\Delta p}{\\tau_p} - \\dfrac{1}{q}\\dfrac{\\partial J_p}{\\partial x} \\end{cases}',
              note: 'Remarquer le signe + devant (1/q) ∂Jn/∂x et le signe - devant (1/q) ∂Jp/∂x',
            },
            keyRule:
              'L’équation de continuité traduit la conservation de la charge à l’échelle locale en reliant la variation temporelle des concentrations à la divergence des courants et au taux net de génération-recombinaison.',
            konanTip:
              'Pourquoi y a-t-il $+\\frac{1}{q}\\frac{\\partial J_n}{\\partial x}$ pour les électrons et $-\\frac{1}{q}\\frac{\\partial J_p}{\\partial x}$ pour les trous ? Parce que $J_n = -q \\Phi_n$ alors que $J_p = +q \\Phi_p$, et le bilan matériel comporte toujours $-\\frac{\\partial \\Phi}{\\partial x}$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p3_s3',
              type: 'mcq',
              prompt:
                'Quelle est l’écriture exacte de l’équation de continuité à une dimension pour les trous dans un semi-conducteur ?',
              options: [
                '$\\frac{\\partial p}{\\partial t} = G_p - R_p - \\frac{1}{q}\\frac{\\partial J_p}{\\partial x}$',
                '$\\frac{\\partial p}{\\partial t} = G_p - R_p + \\frac{1}{q}\\frac{\\partial J_p}{\\partial x}$',
                '$\\frac{\\partial p}{\\partial t} = R_p - G_p + q\\frac{\\partial J_p}{\\partial x}$',
                '$\\frac{\\partial p}{\\partial t} = G_p + R_p - \\frac{1}{q}\\frac{\\partial J_p}{\\partial x}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le bilan de conservation des trous s’écrit $\\frac{\\partial p}{\\partial t} = G_p - R_p - \\frac{\\partial \\Phi_p}{\\partial x}$. Comme $J_p = +q \\Phi_p$, on a $\\Phi_p = \\frac{J_p}{q}$, d’où $\\frac{\\partial p}{\\partial t} = G_p - R_p - \\frac{1}{q}\\frac{\\partial J_p}{\\partial x}$.',
              hint: 'Pour les trous de charge positive $+q$, le terme de divergence du courant porte un signe moins.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Équation de diffusion',
            stepTheme: 'green',
            stepTitle: 'Équation de diffusion des porteurs minoritaires en zone neutre',
            paragraphText:
              'Dans une région quasi-neutre homogène (par exemple la région N ou P hors de la zone de charge d’espace d’une jonction), le champ électrique est quasiment nul ($E \\approx 0$). Les porteurs minoritaires injectés s’y déplacent donc uniquement par diffusion : $J_n = q D_n \\frac{\\partial (\\Delta n)}{\\partial x}$ (dans P) et $J_p = -q D_p \\frac{\\partial (\\Delta p)}{\\partial x}$ (dans N). En reportant cette expression dans l’équation de continuité en régime permanent ($\\frac{\\partial}{\\partial t} = 0$) et sans éclairement ($G_{\\text{ext}} = 0$), on obtient l’équation différentielle fondamentale de diffusion des minoritaires.',
            formula: {
              name: 'Équation différentielle de diffusion en régime permanent (E = 0, Gext = 0)',
              formula: 'D_n \\frac{d^2(\\Delta n)}{dx^2} - \\frac{\\Delta n}{\\tau_n} = 0 \\quad \\Longleftrightarrow \\quad \\frac{d^2(\\Delta n)}{dx^2} - \\frac{\\Delta n}{L_n^2} = 0 \\quad \\text{avec} \\quad L_n = \\sqrt{D_n \\tau_n}',
              note: 'De même pour les trous minoritaires dans une région N : d²(Δp)/dx² - Δp / Lp² = 0 avec Lp = √(Dp τp)',
            },
            keyRule:
              'En zone neutre ($E = 0$) et en régime stationnaire, le profil spatial des porteurs minoritaires en excès obéit à l’équation différentielle $\\frac{d^2(\\Delta n)}{dx^2} - \\frac{\\Delta n}{L_n^2} = 0$.',
            konanTip:
              'Vérifie l’unité de la longueur de diffusion $L_n = \\sqrt{D_n \\tau_n}$ : $\\sqrt{(\\text{cm}^2/\\text{s}) \\times \\text{s}} = \\sqrt{\\text{cm}^2} = \\text{cm}$. C’est bien une longueur !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p3_s4',
              type: 'mcq',
              prompt:
                'Dans une région de type N où les trous minoritaires ont une constante de diffusion $D_p = 12\\text{ cm}^2/\\text{s}$ et une durée de vie $\\tau_p = 3\\times 10^{-7}\\text{ s}$, que vaut leur longueur de diffusion $L_p$ ?',
              options: [
                '$L_p = 1{,}897 \\times 10^{-3}\\text{ cm} \\approx 19\\text{ }\\mu\\text{m}$',
                '$L_p = 3{,}6 \\times 10^{-6}\\text{ cm}$',
                '$L_p = 200\\text{ cm}$',
                '$L_p = 6 \\times 10^{-2}\\text{ cm}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On applique $L_p = \\sqrt{D_p \\tau_p} = \\sqrt{12 \\times 3\\times 10^{-7}} = \\sqrt{36 \\times 10^{-7}} = \\sqrt{3{,}6 \\times 10^{-6}} \\approx 1{,}897 \\times 10^{-3}\\text{ cm} \\approx 19\\text{ }\\mu\\text{m}$.',
              hint: 'Calcule $\\sqrt{12 \\times 3\\times 10^{-7}}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Profil exponentiel',
            stepTheme: 'slate',
            stepTitle: 'Profil spatial de décroissance exponentielle des minoritaires injectés',
            paragraphText:
              'Considérons un barreau semi-conducteur semi-infini ($x \\ge 0$) de type N dans lequel on injecte en continu à l’extrémité $x = 0$ un excès de trous minoritaires $\\Delta p(0)$. Comme l’excès de porteurs doit tendre vers zéro loin de la surface d’injection ($\\Delta p(x \\to +\\infty) = 0$), la solution de l’équation $\\frac{d^2(\\Delta p)}{dx^2} - \\frac{\\Delta p}{L_p^2} = 0$ se réduit à une exponentielle décroissante unique : $\\Delta p(x) = \\Delta p(0)\\,e^{-x/L_p}$. Le courant de diffusion associé décroît également exponentiellement avec la distance $x$.',
            formula: {
              name: 'Profil spatial et courant de diffusion dans un barreau semi-infini (x ≥ 0)',
              formula: '\\Delta p(x) = \\Delta p(0)\\,\\exp\\left(-\\frac{x}{L_p}\\right) \\quad \\Longrightarrow \\quad J_p(x) = -q D_p \\frac{d(\\Delta p)}{dx} = \\frac{q D_p \\Delta p(0)}{L_p}\\exp\\left(-\\frac{x}{L_p}\\right)',
              note: 'À la distance x = Lp, la concentration en excès a chuté d’un facteur e (il reste ~37 % de Δp(0))',
            },
            keyRule:
              'Dans une région semi-infinie, la densité de courant d’injection des minoritaires à l’entrée ($x = 0$) vaut $J_p(0) = \\frac{q D_p \\Delta p(0)}{L_p}$.',
            konanTip:
              'Cette formule $J_p(0) = \\frac{q D_p \\Delta p(0)}{L_p}$ est exactement celle qui permet d’établir la loi de Shockley de la jonction PN au Chapitre 3 !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p3_s5',
              type: 'mcq',
              prompt:
                'Des trous minoritaires sont injectés en $x = 0$ avec un excès $\\Delta p(0)$ dans un barreau de type N semi-infini ($x \\ge 0$) de longueur de diffusion $L_p$. Quelle est l’expression du profil stationnaire $\\Delta p(x)$ ?',
              options: [
                '$\\Delta p(x) = \\Delta p(0)\\,\\exp\\left(-\\frac{x}{L_p}\\right)$',
                '$\\Delta p(x) = \\Delta p(0)\\,\\exp\\left(+\\frac{x}{L_p}\\right)$',
                '$\\Delta p(x) = \\Delta p(0)\\left(1 - \\frac{x}{L_p}\\right)$',
                '$\\Delta p(x) = \\frac{\\Delta p(0)}{1 + (x/L_p)^2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La solution générale de $\\frac{d^2(\\Delta p)}{dx^2} - \\frac{\\Delta p}{L_p^2} = 0$ est $A e^{-x/L_p} + B e^{+x/L_p}$. La condition physique $\\Delta p(+\\infty) = 0$ impose $B = 0$, et la condition en $x=0$ donne $A = \\Delta p(0)$.',
              hint: 'La concentration en excès doit rester bornée et tendre vers $0$ quand $x \\to +\\infty$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Base courte',
            stepTheme: 'orange',
            stepTitle: 'Cas d’une région courte (W << L) : profil linéaire et transistor bipolaire',
            paragraphText:
              'Attention à ne pas appliquer aveuglément la formule exponentielle $\\Delta n(x) = \\Delta n(0)e^{-x/L_n}$ lorsque la région traversée a une épaisseur $W$ très petite devant la longueur de diffusion $L_n$ ($W \\ll L_n$, cas de la base d’un transistor bipolaire ou d’une diode courte) ! Si tous les porteurs en excès sont collectés en $x = W$ ($\\Delta n(W) = 0$), les recombinaisons sur le trajet sont négligeables ($\\frac{d^2(\\Delta n)}{dx^2} \\approx 0$) : le profil de concentration devient une droite décroissante $\\Delta n(x) = \\Delta n(0)\\left(1 - \\frac{x}{W}\\right)$ et le courant de diffusion est constant sur toute la largeur $W$.',
            formula: {
              name: 'Approximation de région courte (W << Ln avec Δn(W) = 0)',
              formula: '\\Delta n(x) \\approx \\Delta n(0)\\left(1 - \\frac{x}{W}\\right) \\quad \\Longrightarrow \\quad |J_{n,\\text{diff}}| = \\frac{q D_n \\Delta n(0)}{W}',
              note: 'La longueur de diffusion Ln est alors remplacée par l’épaisseur géométrique W de la région',
            },
            keyRule:
              'Lorsque l’épaisseur $W$ d’une zone neutre est très inférieure à la longueur de diffusion $L$ ($W \\ll L$), les porteurs traversent la région pratiquement sans se recombiner et leur profil de concentration est linéaire.',
            konanTip:
              'C’est le principe même du transistor bipolaire (BJT) : on fabrique une base ultra-mince ($W_B \\ll L_n$) pour que plus de $99\\%$ des électrons émis par l’émetteur atteignent le collecteur sans se recombiner dans la base !',
            exercise: {
              id: 'lmd_srit_l1_pde_c2_p3_s6',
              type: 'mcq',
              prompt:
                'Quelle est l’allure du profil de concentration des porteurs minoritaires en excès $\\Delta n(x)$ dans une région neutre très mince d’épaisseur $W \\ll L_n$ (où $\\Delta n(W) = 0$) ?',
              options: [
                'Un profil linéaire décroissant $\\Delta n(x) \\approx \\Delta n(0)\\left(1 - \\frac{x}{W}\\right)$ car les recombinaisons y sont négligeables',
                'Un profil sinusoïdal oscillant entre $+\\Delta n(0)$ et $-\\Delta n(0)$',
                'Un profil strictement constant $\\Delta n(x) = \\Delta n(0)$ jusqu’en $x = W$',
                'Un profil parabolique croissant avec $x^2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque $W \\ll L_n$, le temps de transit par diffusion à travers l’épaisseur $W$ est très inférieur à la durée de vie $\\tau_n$ : presque aucune recombinaison n’a lieu, donc $\\frac{d^2(\\Delta n)}{dx^2} \\approx 0$, ce qui donne une droite entre $\\Delta n(0)$ et $\\Delta n(W)=0$.',
              hint: 'Si $\\frac{d^2(\\Delta n)}{dx^2} \\approx 0$, quelle est la forme mathématique de la fonction $\\Delta n(x)$ ?',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : LA JONCTION PN À L'ÉQUILIBRE ET SOUS POLARISATION
  // ============================================================================
  {
    id: 'lmd_srit_l1_pde_ch3',
    subjectId: 'lmd_pde',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 4,
    contentVersion: 2,
    source: 'Programme LMD — SRIT 1 Semestre 1 (Physique des Dispositifs Électroniques, Chapitre II)',
    title: 'La Jonction PN à l’équilibre et sous polarisation',
    summary:
      'Formation de la Zone de Charge d’Espace (ZCE), équation de Poisson, barrière de potentiel V0, extensions xp, xn et largeur W, champ maximal, polarisation directe et inverse, loi de Shockley, capacités Cj et Cd et claquage.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_pde_c3_p1',
        order: 1,
        title: 'Formation de la Jonction PN, Zone de Charge d’Espace (ZCE) et barrière de potentiel V0',
        summary:
          'Mise en contact P-N, diffusion des majoritaires, ions fixes découverts dans la ZCE, champ électrique interne, alignement du niveau de Fermi et potentiel de diffusion V0.',
        conceptExplanation:
          'Une jonction PN abrupte est formée au sein d’un même monocristal semi-conducteur par la frontière métallurgique ($x=0$) entre une région dopée P ($N_A$ accepteurs/cm³) et une région dopée N ($N_D$ donneurs/cm³). Dès la formation de la jonction, le fort gradient de concentration provoque la diffusion des trous de P vers N et des électrons de N vers P, découvrant de part et d’autre de $x=0$ une Zone de Charge d’Espace (ZCE) dépeuplée de porteurs mobiles où règnent un champ électrique interne $\\vec{E}_0$ (dirigé de N vers P) et une barrière de potentiel $V_0$.',
        formulas: [
          {
            name: 'Potentiel de diffusion (Barrière de potentiel interne à l’équilibre)',
            formula: 'V_0 = U_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right) = \\frac{k_B T}{q}\\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)',
            note: 'Typiquement à 300 K : V0 ≈ 0,6 V à 0,8 V pour le Silicium et V0 ≈ 0,2 V à 0,3 V pour le Germanium',
          },
          {
            name: 'Hauteur de la barrière d’énergie potentielle pour les porteurs',
            formula: 'q V_0 = E_{Fn} - E_{Fp} = E_g - (E_C - E_{Fn}) - (E_{Fp} - E_V)',
            note: 'Après mise en contact à l’équilibre, les niveaux de Fermi s’alignent et les bandes se courbent de qV0',
          },
        ],
        keyRule:
          'Dans la Zone de Charge d’Espace (ZCE), le côté P contient des ions accepteurs fixes négatifs ($-q N_A$) et le côté N contient des ions donneurs fixes positifs ($+q N_D$) : le champ électrique interne $\\vec{E}_0$ est donc toujours dirigé de la région N vers la région P.',
        workedExample: {
          title: 'Calcul de la barrière de potentiel V0 d’une jonction PN en Silicium',
          statement:
            'Une jonction PN en Silicium à $300\\text{ K}$ ($n_i = 1{,}5\\times 10^{10}\\text{ cm}^{-3}$, $U_T = 26\\text{ mV}$) est dopée avec $N_A = 10^{17}\\text{ cm}^{-3}$ côté P et $N_D = 2{,}25\\times 10^{15}\\text{ cm}^{-3}$ côté N. Calculer le potentiel de diffusion $V_0$.',
          methodSteps: [
            'Calculer le produit des dopages divisé par $n_i^2$ : $\\frac{N_A N_D}{n_i^2} = \\frac{10^{17} \\times 2{,}25\\times 10^{15}}{(1{,}5\\times 10^{10})^2} = \\frac{2{,}25\\times 10^{32}}{2{,}25\\times 10^{20}} = 10^{12}$.',
            'Calculer le logarithme népérien : $\\ln(10^{12}) = 12 \\times \\ln(10) \\approx 12 \\times 2{,}3026 = 27{,}63$.',
            'Multiplier par $U_T = 0{,}026\\text{ V}$ : $V_0 = 0{,}026 \\times 27{,}63 \\approx 0{,}718\\text{ V}$.',
          ],
          conclusion:
            'La barrière de potentiel interne de la jonction à l’équilibre vaut $V_0 \\approx 0{,}72\\text{ V}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Genèse ZCE',
            stepTheme: 'blue',
            stepTitle: 'Formation de la Zone de Charge d’Espace (ZCE / Zone de déplétion)',
            paragraphText:
              'Lorsqu’une région P (riche en trous) et une région N (riche en électrons) sont juxtaposées, les trous diffusent de P vers N et les électrons diffusent de N vers P à travers la jonction métallurgique ($x=0$), où ils se recombinent. En quittant le voisinage de l’interface, les trous laissent derrière eux dans la région P ($-x_p \\le x \\le 0$) des ions accepteurs fixes chargés négativement ($-q N_A$), tandis que les électrons laissent dans la région N ($0 \\le x \\le x_n$) des ions donneurs fixes chargés positivement ($+q N_D$). Cette région centrale vidée de porteurs libres est appelée Zone de Charge d’Espace (ZCE), zone de déplétion ou zone de transition.',
            formula: {
              name: 'Approximation de déplétion complète d’Abrupte (Shockley)',
              formula: '\\rho(x) = \\begin{cases} -q N_A & \\text{pour } -x_p \\le x < 0 \\text{ (ZCE côté P)} \\\\ +q N_D & \\text{pour } 0 < x \\le x_n \\text{ (ZCE côté N)} \\\\ 0 & \\text{hors de la ZCE (zones neutres)} \\end{cases}',
              note: 'Dans la ZCE : n ≈ 0 et p ≈ 0 devant NA et ND',
            },
            keyRule:
              'Dans la ZCE, la charge d’espace est négative du côté P ($\\rho = -q N_A$, ions accepteurs $\\text{A}^-$) et positive du côté N ($\\rho = +q N_D$, ions donneurs $\\text{D}^+$).',
            konanTip:
              'Ne tombe jamais dans le piège des signes de la ZCE : côté **P**, la charge d’espace est **négative** ($-q N_A$) ; côté **N**, la charge d’espace est **positive** ($+q N_D$) !',
            visualSchema: {
              type: 'layered_stack',
              title: 'Structure spatiale d’une jonction PN à l’équilibre',
              caption: 'Répartition des zones neutres et de la Zone de Charge d’Espace (ZCE) de largeur W = xp + xn.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'x < -xp',
                    title: 'Zone Neutre P (QNP)',
                    subtitle: 'Trous majoritaires pP0 ≈ NA compensant les ions NA- (ρ = 0, E = 0)',
                    color: 'violet',
                  },
                  {
                    badge: '-xp ≤ x < 0',
                    title: 'ZCE côté P (Déplétée)',
                    subtitle: 'Ions accepteurs fixes découverts : densité de charge ρ = -q·NA < 0',
                    color: 'orange',
                  },
                  {
                    badge: '0 < x ≤ +xn',
                    title: 'ZCE côté N (Déplétée)',
                    subtitle: 'Ions donneurs fixes découverts : densité de charge ρ = +q·ND > 0 (Champ E dirigé de N vers P)',
                    color: 'blue',
                  },
                  {
                    badge: 'x > +xn',
                    title: 'Zone Neutre N (QNN)',
                    subtitle: 'Électrons majoritaires nN0 ≈ ND compensant les ions ND+ (ρ = 0, E = 0)',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p1_s1',
              type: 'mcq',
              prompt:
                'Quelle est la nature des charges électriques présentes dans la Zone de Charge d’Espace (ZCE) d’une jonction PN à l’équilibre ?',
              options: [
                'Des ions accepteurs fixes négatifs ($-q N_A$) du côté P et des ions donneurs fixes positifs ($+q N_D$) du côté N',
                'Des ions fixes positifs ($+q N_A$) du côté P et des ions fixes négatifs ($-q N_D$) du côté N',
                'Uniquement des électrons libres accumulés du côté P et des trous libres du côté N',
                'Aucune charge électrique car la densité volumique $\\rho(x)$ est nulle dans la ZCE',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En diffusant hors de la ZCE, les trous du côté P découvrent les ions accepteurs fixes négatifs ($N_A^-$) et les électrons du côté N découvrent les ions donneurs fixes positifs ($N_D^+$).',
              hint: 'Rappelle-toi le signe d’un ion accepteur (colonne III ayant capté un électron) et d’un ion donneur (colonne V ayant cédé un électron).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Champ interne',
            stepTheme: 'violet',
            stepTitle: 'Sens du champ électrique interne et équilibre entre diffusion et conduction',
            paragraphText:
              'La présence de charges positives $+q N_D$ du côté N ($x > 0$) et de charges négatives $-q N_A$ du côté P ($x < 0$) crée au sein de la ZCE un champ électrique interne $\\vec{E}_0$ dirigé des charges positives vers les charges négatives, c’est-à-dire de la région N vers la région P. Ce champ électrique s’oppose à la diffusion des porteurs majoritaires (il repousse les trous vers P et les électrons vers N) et favorise au contraire le passage des porteurs minoritaires. L’équilibre thermodynamique est atteint lorsque le courant de conduction dû à $\\vec{E}_0$ compense exactement le courant de diffusion pour chaque type de porteur.',
            formula: {
              name: 'Sens du champ électrique et différence de potentiel interne',
              formula: '\\vec{E}_0 \\text{ dirigé de N vers P} \\quad \\Longleftrightarrow \\quad V_N - V_P = V_0 > 0',
              note: 'Le potentiel électrostatique V(x) est plus élevé dans la région N que dans la région P',
            },
            keyRule:
              'Dans une jonction PN, le champ électrique interne $\\vec{E}$ est toujours dirigé de la région N vers la région P, et le potentiel électrostatique de la région N est supérieur à celui de la région P ($V_N - V_P = V_0 > 0$).',
            konanTip:
              'Comme les lignes de champ électrique partent toujours des charges positives pour aller vers les charges négatives, et que la ZCE côté N est positive ($+q N_D$) tandis que la ZCE côté P est négative ($-q N_A$), $\\vec{E}$ va forcément de N vers P !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p1_s2',
              type: 'mcq',
              prompt:
                'Dans quel sens est orienté le champ électrique interne $\\vec{E}_0$ dans la Zone de Charge d’Espace d’une jonction PN et quelle région possède le potentiel électrostatique le plus élevé ?',
              options: [
                '$\\vec{E}_0$ est dirigé de la région N vers la région P, et le potentiel est plus élevé côté N ($V_N > V_P$)',
                '$\\vec{E}_0$ est dirigé de la région P vers la région N, et le potentiel est plus élevé côté P ($V_P > V_N$)',
                '$\\vec{E}_0$ est dirigé de N vers P, mais le potentiel est plus élevé côté P ($V_P > V_N$)',
                '$\\vec{E}_0$ est nul en tout point de la ZCE à l’équilibre thermodynamique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La ZCE contient des ions positifs $+q N_D$ côté N et des ions négatifs $-q N_A$ côté P. Le champ $\\vec{E}_0 = -\\overrightarrow{\\text{grad}}\\,V$ pointe des charges $+$ vers les charges $-$ (de N vers P), et comme le champ descend les potentiels, on a $V_N > V_P$.',
              hint: 'Le champ électrique va des charges positives (ZCE côté N) vers les charges négatives (ZCE côté P), dans le sens des potentiels décroissants.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Potentiel V0',
            stepTheme: 'violet',
            stepTitle: 'Expression du potentiel de diffusion (barrière de potentiel V0)',
            paragraphText:
              'Pour calculer la différence de potentiel interne $V_0 = V_N - V_P$ à l’équilibre thermodynamique, on écrit que le courant total des trous (ou des électrons) est nul à travers toute la ZCE : $J_p = q p \\mu_p E - q D_p \\frac{dp}{dx} = 0$. En remplaçant $E = -\\frac{dV}{dx}$ et $\\frac{D_p}{\\mu_p} = U_T$, on obtient $dV = -U_T \\frac{dp}{p}$. En intégrant de la zone neutre P (où $V = V_P$ et $p_{P0} \\approx N_A$) à la zone neutre N (où $V = V_N$ et $p_{N0} \\approx \\frac{n_i^2}{N_D}$), on établit la formule fondamentale du potentiel de diffusion $V_0$.',
            formula: {
              name: 'Barrière de potentiel interne V0 d’une jonction PN à l’équilibre',
              formula: 'V_0 = V_N - V_P = U_T \\ln\\left(\\frac{p_{P0}}{p_{N0}}\\right) = U_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)',
              note: 'Relations de Boltzmann équivalentes : pN0 = pP0 exp(-V0/UT) et nP0 = nN0 exp(-V0/UT)',
            },
            keyRule:
              'Le potentiel de diffusion $V_0 = U_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$ augmente avec les dopages $N_A$ et $N_D$ et dépend du matériau via $n_i^2$.',
            konanTip:
              'Un voltmètre branché aux bornes d’une diode à l’équilibre peut-il mesurer la tension $V_0 \\approx 0{,}7\\text{ V}$ ? Non, jamais ! Car aux contacts métalliques des fils du voltmètre se créent des potentiels de contact qui compensent exactement $V_0$ (le niveau de Fermi est plat sur toute la boucle).',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p1_s3',
              type: 'mcq',
              prompt:
                'Quelle est l’expression de la barrière de potentiel interne $V_0$ (potentiel de diffusion) d’une jonction PN à l’équilibre thermodynamique ?',
              options: [
                '$V_0 = U_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$',
                '$V_0 = U_T \\ln\\left(\\frac{N_A + N_D}{n_i}\\right)$',
                '$V_0 = \\frac{q}{2\\varepsilon_s}(N_A + N_D)$',
                '$V_0 = U_T \\exp\\left(\\frac{N_A N_D}{n_i^2}\\right)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’intégration de $J_p = 0$ entre la zone P ($p_{P0} = N_A$) et la zone N ($p_{N0} = n_i^2 / N_D$) donne $V_0 = V_N - V_P = U_T \\ln(p_{P0}/p_{N0}) = U_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$.',
              hint: 'C’est le produit du potentiel thermique $U_T$ par le logarithme népérien de $\\frac{N_A N_D}{n_i^2}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Diagramme de bandes',
            stepTheme: 'green',
            stepTitle: 'Alignement du niveau de Fermi et courbure des bandes d’énergie',
            paragraphText:
              'Avant la mise en contact, le niveau de Fermi $E_{Fp}$ de la région P est proche de $E_V$, tandis que le niveau de Fermi $E_{Fn}$ de la région N est proche de $E_C$. Lorsqu’on forme la jonction à l’équilibre thermodynamique, l’absence de courant impose que le niveau de Fermi $E_F$ devienne constant (une seule droite horizontale) d’un bout à l’autre du cristal. Pour que $E_{Fp}$ et $E_{Fn}$ s’alignent, les bandes d’énergie $E_C(x)$ et $E_V(x)$ de la région P doivent s’élever par rapport à celles de la région N d’une hauteur énergétique exactement égale à $q V_0$.',
            formula: {
              name: 'Barrière d’énergie potentielle sur le diagramme des bandes',
              formula: '\\Delta E_{\\text{barrière}} = E_C(\\text{côté P}) - E_C(\\text{côté N}) = E_V(\\text{côté P}) - E_V(\\text{côté N}) = q V_0',
              note: 'Car l’énergie potentielle d’un électron de charge -q dans le potentiel V(x) vaut Ep(x) = -q V(x)',
            },
            keyRule:
              'Sur le diagramme des bandes d’une jonction PN à l’équilibre, le niveau de Fermi $E_F$ est une droite horizontale unique et les bandes $E_C$ et $E_V$ sont plus hautes du côté P que du côté N d’une quantité $q V_0$.',
            konanTip:
              'Pourquoi les bandes d’énergie sont-elles plus hautes du côté P alors que le potentiel électrique $V$ est plus haut du côté N ? Parce que le diagramme des bandes représente l’énergie des **électrons** de charge négative $-q$ : $E_C(x) = \\text{cste} - q V(x)$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p1_s4',
              type: 'mcq',
              prompt:
                'Dans le diagramme des bandes d’énergie d’une jonction PN à l’équilibre thermodynamique, quelle est la différence de hauteur énergétique entre le bas de la bande de conduction côté P et le bas de la bande de conduction côté N ?',
              options: [
                '$E_{C,P} - E_{C,N} = q V_0$',
                '$E_{C,P} - E_{C,N} = 0$',
                '$E_{C,P} - E_{C,N} = E_g$',
                '$E_{C,P} - E_{C,N} = -q V_0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’alignement des niveaux de Fermi $E_{Fp} = E_{Fn}$ abaisse les bandes du côté N par rapport au côté P d’une énergie $q(V_N - V_P) = q V_0$, qui constitue la barrière d’énergie que doivent franchir les électrons de N pour passer vers P.',
              hint: 'Un électron de charge $q$ franchissant une différence de potentiel $V_0$ doit surmonter une barrière d’énergie $q V_0$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Neutralité ZCE',
            stepTheme: 'violet',
            stepTitle: 'Neutralité globale de la ZCE et extensions xp et xn',
            paragraphText:
              'Désignons par $x_p$ la profondeur de pénétration de la ZCE dans la région P, par $x_n$ sa profondeur de pénétration dans la région N, et par $W = x_p + x_n$ la largeur totale de la ZCE (pour une section droite $S$). Chaque paire électron-trou qui s’est recombinée à la formation de la jonction ayant créé exactement un ion négatif côté P et un ion positif côté N, la charge négative totale découverte côté P ($Q_- = -q N_A S x_p$) est égale en valeur absolue à la charge positive totale découverte côté N ($Q_+ = +q N_D S x_n$).',
            formula: {
              name: 'Égalité des charges d’espace et extensions xp et xn en fonction de W',
              formula: 'N_A x_p = N_D x_n \\quad \\text{et} \\quad W = x_p + x_n \\quad \\Longrightarrow \\quad x_p = \\frac{W N_D}{N_A + N_D} \\quad ; \\quad x_n = \\frac{W N_A}{N_A + N_D}',
              note: 'Si NA >> ND (jonction P+N dissymétrique) : xp << xn et W ≈ xn',
            },
            keyRule:
              'La relation de neutralité de la ZCE ($N_A x_p = N_D x_n$) montre que la zone de déplétion s’étend toujours principalement du côté le moins dopé de la jonction !',
            konanTip:
              'C’est une propriété essentielle aux examens : dans une jonction dissymétrique $P^+N$ où $N_A \\gg N_D$ (par exemple $N_A = 10^{18}\\text{ cm}^{-3}$ et $N_D = 10^{15}\\text{ cm}^{-3}$), on a $\\frac{x_n}{x_p} = \\frac{N_A}{N_D} = 1000$, donc la ZCE s’étend à $99{,}9\\%$ dans la région N ($W \\approx x_n$) !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p1_s5',
              type: 'mcq',
              prompt:
                'Dans une jonction PN abrupte où le côté P est dix fois plus dopé que le côté N ($N_A = 10\\,N_D$), quelle relation lie les extensions $x_p$ et $x_n$ de la Zone de Charge d’Espace ?',
              options: [
                '$x_n = 10\\,x_p$ (la ZCE s’étend dix fois plus profondément dans la région N moins dopée)',
                '$x_p = 10\\,x_n$ (la ZCE s’étend dix fois plus profondément dans la région P plus dopée)',
                '$x_p = x_n = \\frac{W}{2}$ quels que soient les dopages',
                '$x_p = 100\\,x_n$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La neutralité électrique de la ZCE impose $N_A x_p = N_D x_n$. Si $N_A = 10\\,N_D$, alors $10\\,N_D x_p = N_D x_n$, d’où $x_n = 10\\,x_p$.',
              hint: 'Utilise l’égalité de conservation de la charge $N_A x_p = N_D x_n$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Poisson & W',
            stepTheme: 'green',
            stepTitle: 'Intégration de l’équation de Poisson : champ maximal |Emax| et largeur W de la ZCE',
            paragraphText:
              'Pour déterminer le profil du champ électrique $E(x)$ et du potentiel $V(x)$ dans la ZCE, on intègre deux fois l’équation de Poisson $\\frac{d^2 V}{dx^2} = -\\frac{dE}{dx} = -\\frac{\\rho(x)}{\\varepsilon_s}$ (où $\\varepsilon_s = \\varepsilon_0 \\varepsilon_r$ est la permittivité du semi-conducteur, avec $\\varepsilon_r \\approx 11{,}7$ pour Si). La première intégration avec $E(-x_p) = E(x_n) = 0$ montre que $E(x)$ a un profil triangulaire négatif dont la valeur absolue est maximale à l’interface $x=0$. La seconde intégration donne la hauteur de potentiel $V_0$ (ou $V_0 - V$ sous polarisation $V$) et la largeur totale $W$ de la ZCE.',
            formula: {
              name: 'Champ électrique maximal à l’interface (x = 0) et largeur totale W de la ZCE',
              formula: '|E_{\\max}| = \\frac{q N_A x_p}{\\varepsilon_s} = \\frac{q N_D x_n}{\\varepsilon_s} = \\frac{2(V_0 - V)}{W} \\quad ; \\quad W = \\sqrt{\\frac{2\\varepsilon_s}{q}\\left(\\frac{1}{N_A} + \\frac{1}{N_D}\\right)(V_0 - V)}',
              note: 'À l’équilibre thermodynamique, poser V = 0 dans ces deux formules (εs ≈ 1,04 × 10^-12 F/cm pour Si)',
            },
            keyRule:
              'Le champ électrique dans la ZCE est maximal en module à la jonction métallurgique ($x=0$) et vaut $|E_{\\max}| = \\frac{2(V_0 - V)}{W}$ (l’aire du triangle de base $W$ et de hauteur $|E_{\\max}|$ étant égale à $V_0 - V$).',
            konanTip:
              'Pour retenir sans effort $|E_{\\max}| = \\frac{2(V_0 - V)}{W}$, souviens-toi que la différence de potentiel est l’intégrale (l’aire) du profil triangulaire de $|E(x)|$ sur la base $W$ : $\\text{Aire du triangle} = \\frac{1}{2} W |E_{\\max}| = V_0 - V$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p1_s6',
              type: 'mcq',
              prompt:
                'Une jonction PN à l’équilibre ($V = 0$) possède une barrière de potentiel $V_0 = 0{,}72\\text{ V}$ et une Zone de Charge d’Espace de largeur totale $W = 0{,}4\\text{ }\\mu\\text{m} = 4\\times 10^{-5}\\text{ cm}$. Quelle est l’intensité maximale du champ électrique $|E_{\\max}|$ à l’interface $x = 0$ ?',
              options: [
                '$|E_{\\max}| = 3{,}6 \\times 10^4\\text{ V/cm}$',
                '$|E_{\\max}| = 1{,}8 \\times 10^4\\text{ V/cm}$',
                '$|E_{\\max}| = 7{,}2 \\times 10^5\\text{ V/cm}$',
                '$|E_{\\max}| = 2{,}88 \\times 10^{-5}\\text{ V/cm}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À l’équilibre ($V = 0$), le profil triangulaire du champ électrique donne $|E_{\\max}| = \\frac{2 V_0}{W} = \\frac{2 \\times 0{,}72}{4\\times 10^{-5}} = \\frac{1{,}44}{4\\times 10^{-5}} = 0{,}36\\times 10^5 = 3{,}6\\times 10^4\\text{ V/cm}$.',
              hint: 'Utilise la relation de l’aire du triangle de champ électrique : $|E_{\\max}| = \\frac{2 V_0}{W}$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_pde_c3_p2',
        order: 2,
        title: 'Jonction PN hors équilibre : polarisation directe, polarisation inverse et loi de Shockley',
        summary:
          'Effet d’une tension V = VP - VN sur la barrière V0 - V et la largeur W, injection des minoritaires, courant de saturation Is et équation caractéristique de Shockley.',
        conceptExplanation:
          'Lorsqu’on applique une tension extérieure $V = V_P - V_N$ aux bornes de la jonction PN, la quasi-totalité de cette tension se reporte sur la Zone de Charge d’Espace (fortement résistive car dépeuplée de porteurs), faisant passer la barrière de potentiel de $V_0$ à $(V_0 - V)$. En polarisation directe ($V > 0$), la barrière est abaissée et un fort courant exponentiel de diffusion traverse la jonction ; en polarisation inverse ($V < 0$), la barrière est accrue et seul subsiste un très faible courant de saturation $I_s$ dû aux porteurs minoritaires.',
        formulas: [
          {
            name: 'Caractéristique courant-tension d’une jonction PN idéale (Loi de Shockley)',
            formula: 'I = I_s \\left[\\exp\\left(\\frac{V}{\\eta U_T}\\right) - 1\\right]',
            note: 'η est le facteur d’idéalité (1 ≤ η ≤ 2, η = 1 pour une jonction idéale) et UT = kBT/q ≈ 26 mV à 300 K',
          },
          {
            name: 'Expression physique du courant de saturation inverse Is',
            formula: 'I_s = q S n_i^2 \\left(\\frac{D_n}{L_n N_A} + \\frac{D_p}{L_p N_D}\\right)',
            note: 'Typiquement à 300 K : Is ≈ 10^-14 à 10^-11 A pour le Silicium et Is ≈ 10^-6 A pour le Germanium',
          },
        ],
        keyRule:
          'Une polarisation directe ($V = V_P - V_N > 0$) abaisse la barrière de potentiel à $(V_0 - V)$ et rétrécit la ZCE ; une polarisation inverse ($V < 0$) augmente la barrière à $(V_0 + |V|)$ et élargit la ZCE.',
        workedExample: {
          title: 'Calcul du courant direct d’une diode idéale par la loi de Shockley',
          statement:
            'Une diode à jonction PN idéale ($\\eta = 1$) en Silicium à $300\\text{ K}$ ($U_T = 26\\text{ mV}$) possède un courant de saturation inverse $I_s = 10^{-12}\\text{ A}$. Calculer le courant $I$ qui la traverse sous une polarisation directe $V = +0{,}65\\text{ V}$, puis sous une polarisation inverse $V = -2\\text{ V}$.',
          methodSteps: [
            'En polarisation directe ($V = +0{,}65\\text{ V}$) : calculer le rapport $\\frac{V}{U_T} = \\frac{0{,}65}{0{,}026} = 25$.',
            'Évaluer le courant direct : $I = 10^{-12}\\,(e^{25} - 1) \\approx 10^{-12} \\times 7{,}20\\times 10^{10} = 0{,}072\\text{ A} = 72\\text{ mA}$.',
            'En polarisation inverse ($V = -2\\text{ V}$) : $e^{-2/0{,}026} = e^{-76{,}9} \\ll 1$, donc $I \\approx -I_s = -10^{-12}\\text{ A} = -1\\text{ pA}$.',
          ],
          conclusion:
            'La jonction laisse passer $I = 72\\text{ mA}$ en direct sous $0{,}65\\text{ V}$ et bloque le courant en inverse ($I \\approx -1\\text{ pA}$), réalisant une fonction de redressement unidirectionnel.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Polarisation Directe',
            stepTheme: 'blue',
            stepTitle: 'Polarisation directe (V = VP - VN > 0) : abaissement de la barrière et injection',
            paragraphText:
              'On dit que la jonction PN est polarisée en direct lorsqu’on relie le pôle positif du générateur à la région P (anode) et le pôle négatif à la région N (cathode), soit $V = V_P - V_N > 0$. Le champ électrique appliqué $\\vec{E}_{\\text{ext}}$ (dirigé de P vers N) s’oppose au champ interne $\\vec{E}_0$ (dirigé de N vers P). La barrière de potentiel est ainsi réduite à $(V_0 - V)$, la largeur $W$ de la ZCE diminue, et un très grand nombre de porteurs majoritaires (trous de P et électrons de N) franchissent la barrière abaissée pour être injectés comme porteurs minoritaires dans la région opposée.',
            formula: {
              name: 'Hauteur de barrière et largeur de la ZCE en polarisation directe (0 < V < V0)',
              formula: 'V_{\\text{barrière}} = V_0 - V < V_0 \\quad \\Longrightarrow \\quad W(V) = W_0 \\sqrt{1 - \\frac{V}{V_0}} < W_0',
              note: 'Où W0 est la largeur de la ZCE à l’équilibre (V = 0)',
            },
            keyRule:
              'En polarisation directe ($V > 0$), la barrière de potentiel diminue à $(V_0 - V)$, la ZCE se rétrécit ($W < W_0$) et le courant de diffusion des porteurs majoritaires devient prépondérant.',
            konanTip:
              'Sur le diagramme des bandes hors équilibre, le niveau de Fermi se dédouble en deux quasi-niveaux de Fermi séparés de $E_{Fn} - E_{Fp} = q V$, et la hauteur de barrière entre les bandes des côtés P et N diminue à $q(V_0 - V)$.',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p2_s1',
              type: 'mcq',
              prompt:
                'Quel est l’effet d’une tension de polarisation directe ($V = V_P - V_N > 0$) sur la barrière de potentiel interne et sur la largeur $W$ de la Zone de Charge d’Espace d’une jonction PN ?',
              options: [
                'La barrière de potentiel diminue à $(V_0 - V)$ et la largeur $W$ de la ZCE diminue',
                'La barrière de potentiel augmente à $(V_0 + V)$ et la largeur $W$ de la ZCE augmente',
                'La barrière de potentiel diminue à $(V_0 - V)$ mais la largeur $W$ de la ZCE augmente',
                'La barrière de potentiel et la largeur $W$ de la ZCE restent toutes deux inchangées',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En polarisation directe ($V > 0$), le champ appliqué s’oppose au champ interne de la ZCE : la barrière de potentiel s’abaisse à $(V_0 - V)$ et la largeur de déplétion $W \\propto \\sqrt{V_0 - V}$ rétrécit.',
              hint: 'Regarde le terme $(V_0 - V)$ sous la racine carrée de l’expression de $W$ lorsque $V > 0$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Polarisation Inverse',
            stepTheme: 'blue',
            stepTitle: 'Polarisation inverse (V = VP - VN < 0) : élargissement de la ZCE et blocage',
            paragraphText:
              'On dit que la jonction PN est polarisée en inverse lorsqu’on porte la région N à un potentiel supérieur à celui de la région P, soit $V = V_P - V_N = -|V| < 0$ (pôle $+$ sur N, pôle $-$ sur P). Le champ électrique extérieur s’ajoute alors au champ interne $\\vec{E}_0$ dans le même sens (de N vers P). La barrière de potentiel s’élève à $(V_0 - V) = V_0 + |V|$, et la largeur $W$ de la ZCE s’élargit en attirant les porteurs majoritaires loin de l’interface. Le courant de diffusion des majoritaires est totalement bloqué : seul subsiste un infime courant inverse $-I_s$ dû aux porteurs minoritaires générés thermiquement au voisinage de la ZCE et propulsés par le champ électrique.',
            formula: {
              name: 'Hauteur de barrière et largeur de la ZCE en polarisation inverse (V = -|V| < 0)',
              formula: 'V_{\\text{barrière}} = V_0 - V = V_0 + |V| > V_0 \\quad \\Longrightarrow \\quad W(V) = W_0 \\sqrt{1 + \\frac{|V|}{V_0}} > W_0',
              note: 'Dès que |V| > 4 UT ≈ 100 mV en inverse, le courant vaut I ≈ -Is = constante',
            },
            keyRule:
              'En polarisation inverse ($V < 0$), la barrière de potentiel augmente à $V_0 + |V|$, la ZCE s’élargit ($W > W_0$) et le courant est limité au courant de saturation inverse $-I_s$ des porteurs minoritaires.',
            konanTip:
              'En calcul numérique sous polarisation inverse (par exemple tension inverse de $5\\text{ V}$), remplace $V$ par $-5\\text{ V}$ dans $(V_0 - V)$, ce qui donne $V_0 - (-5) = V_0 + 5\\text{ V}$ !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p2_s2',
              type: 'mcq',
              prompt:
                'Une jonction PN dont le potentiel de diffusion vaut $V_0 = 0{,}7\\text{ V}$ et dont la ZCE a une largeur $W_0 = 0{,}5\\text{ }\\mu\\text{m}$ à l’équilibre est soumise à une tension de polarisation inverse de $5{,}6\\text{ V}$ ($V = -5{,}6\\text{ V}$). Quelle devient la nouvelle largeur $W$ de sa ZCE ?',
              options: [
                '$W = 1{,}5\\text{ }\\mu\\text{m}$',
                '$W = 0{,}167\\text{ }\\mu\\text{m}$',
                '$W = 4{,}5\\text{ }\\mu\\text{m}$',
                '$W = 0{,}5\\text{ }\\mu\\text{m}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La barrière de potentiel passe de $V_0 = 0{,}7\\text{ V}$ à $V_0 - V = 0{,}7 - (-5{,}6) = 6{,}3\\text{ V}$, soit $9$ fois $V_0$. Comme $W \\propto \\sqrt{V_0 - V}$, la largeur $W$ est multipliée par $\\sqrt{9} = 3$, soit $W = 3 \\times 0{,}5 = 1{,}5\\text{ }\\mu\\text{m}$.',
              hint: 'Calcule le facteur $\\sqrt{\\frac{V_0 - V}{V_0}}$ avec $V = -5{,}6\\text{ V}$ et $V_0 = 0{,}7\\text{ V}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Loi de la jonction',
            stepTheme: 'violet',
            stepTitle: 'Conditions aux limites de la ZCE (Loi de la jonction) et équation de Shockley',
            paragraphText:
              'L’abaissement de la barrière de potentiel de $V_0$ à $(V_0 - V)$ modifie exponentiellement la concentration des porteurs minoritaires aux bords de la ZCE ($x = -x_p$ et $x = +x_n$) : c’est la loi de la jonction $p_N(x_n) = p_{N0}\\,e^{V/U_T}$ et $n_P(-x_p) = n_{P0}\\,e^{V/U_T}$. Ces porteurs minoritaires en excès ($\\Delta p_N(x_n) = p_{N0}(e^{V/U_T} - 1)$ et $\\Delta n_P(-x_p) = n_{P0}(e^{V/U_T} - 1)$) diffusent ensuite dans les zones neutres N et P sur leurs longueurs de diffusion $L_p$ et $L_n$. La somme de leurs courants de diffusion à la sortie de la ZCE donne la célèbre équation de Shockley.',
            formula: {
              name: 'Loi de la jonction aux bords de la ZCE et équation de Shockley',
              formula: '\\begin{cases} \\Delta p_N(x_n) = p_{N0}\\left(e^{V/U_T} - 1\\right) \\\\ \\Delta n_P(-x_p) = n_{P0}\\left(e^{V/U_T} - 1\\right) \\end{cases} \\implies I = I_s\\left(e^{\\frac{V}{\\eta U_T}} - 1\\right)',
              note: 'En direct dès que V > 100 mV : exp(V / ηUT) >> 1 donc I ≈ Is · exp(V / ηUT)',
            },
            keyRule:
              'La caractéristique courant-tension d’une jonction PN obéit à la loi exponentielle de Shockley $I = I_s\\left(e^{V/(\\eta U_T)} - 1\\right)$, où la tension de seuil pratique en direct vaut environ $0{,}6\\text{ à }0{,}7\\text{ V}$ pour le Silicium et $0{,}2\\text{ à }0{,}3\\text{ V}$ pour le Germanium.',
            konanTip:
              'Pour une diode idéale ($\\eta = 1$) à $300\\text{ K}$ ($U_T = 26\\text{ mV}$), chaque augmentation de la tension directe de $\\Delta V = U_T \\ln(10) \\approx 60\\text{ mV}$ multiplie le courant direct $I$ par $10$ !',
            visualSchema: {
              type: 'function_plot',
              title: 'Caractéristique courant-tension I(V) d’une jonction PN (Loi de Shockley)',
              caption: 'Croissance exponentielle en polarisation directe (V > 0,6 V) et blocage à -Is en polarisation inverse (avant claquage).',
              plot: {
                xMin: -3,
                xMax: 2,
                yMin: -2,
                yMax: 6,
                xStep: 1,
                yStep: 2,
                xLabel: 'V',
                yLabel: 'I',
                curves: [
                  {
                    label: 'Courant I(V)',
                    color: 'blue',
                    pieces: [
                      {
                        expr: '0.1*(exp(2*x)-1)',
                        from: -2.2,
                        to: 1.9,
                      },
                    ],
                  },
                ],
                points: [
                  { x: 0, y: 0, label: 'Équilibre (0,0)', filled: true, color: 'green' },
                  { x: 1.2, y: 1.0, label: 'Seuil Vd ≈ 0,7V', filled: true, color: 'orange' },
                ],
                verticalLines: [
                  { x: -2.2, label: 'VBR (Claquage)', color: 'violet' },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p2_s3',
              type: 'mcq',
              prompt:
                'De combien faut-il augmenter la tension directe $V$ aux bornes d’une jonction PN idéale ($\\eta = 1$) à $T = 300\\text{ K}$ ($U_T = 26\\text{ mV}$) pour multiplier son courant direct $I$ par un facteur $10$ ? On donne $\\ln(10) \\approx 2{,}3$.',
              options: [
                '$\\Delta V = U_T \\ln(10) \\approx 60\\text{ mV}$',
                '$\\Delta V = 10 \\times U_T = 260\\text{ mV}$',
                '$\\Delta V = 0{,}7\\text{ V}$',
                '$\\Delta V = 26\\text{ mV}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En polarisation directe, $I \\approx I_s e^{V/U_T}$. Pour avoir $\\frac{I_2}{I_1} = e^{(V_2 - V_1)/U_T} = 10$, il faut $\\Delta V = V_2 - V_1 = U_T \\ln(10) \\approx 26\\text{ mV} \\times 2{,}3 \\approx 60\\text{ mV}$.',
              hint: 'Résous $e^{\\Delta V / U_T} = 10$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Courant Is',
            stepTheme: 'violet',
            stepTitle: 'Analyse physique du courant de saturation inverse Is et effet de la température',
            paragraphText:
              'L’expression théorique du courant de saturation $I_s = q S\\left(\\frac{D_n n_{P0}}{L_n} + \\frac{D_p p_{N0}}{L_p}\\right) = q S n_i^2\\left(\\frac{D_n}{L_n N_A} + \\frac{D_p}{L_p N_D}\\right)$ met en évidence deux propriétés cruciales. Premièrement, $I_s$ est proportionnel à la section $S$ de la jonction et dépend principalement du côté le moins dopé (dans une jonction $P^+N$ où $N_A \\gg N_D$, le courant est constitué presque exclusivement de trous injectés de $P^+$ vers $N$). Deuxièmement, comme $I_s$ est proportionnel à $n_i^2(T) \\propto e^{-E_g/(k_B T)}$, le courant inverse $I_s$ double approximativement tous les $10\\text{ }^\\circ\\text{C}$ d’élévation de température !',
            formula: {
              name: 'Dépendance thermique de Is et de la tension directe à courant constant',
              formula: 'I_s(T) \\propto n_i^2(T) \\propto T^3 \\exp\\left(-\\frac{E_g}{k_B T}\\right) \\quad ; \\quad \\left(\\frac{\\partial V}{\\partial T}\\right)_{I=\\text{cste}} \\approx -2\\text{ mV/K}',
              note: 'À courant direct I maintenu constant, la tension V aux bornes d’une diode Si baisse d’environ 2 mV par °C',
            },
            keyRule:
              'Le courant de saturation inverse $I_s$ est proportionnel à $n_i^2$ : il est donc beaucoup plus faible dans le Silicium que dans le Germanium, et il croît très fortement avec la température.',
            konanTip:
              'En électronique pratique (et en QCM), retiens le coefficient thermique d’une diode au Silicium passante : sa tension de seuil $V_d \\approx 0{,}7\\text{ V}$ diminue de $-2\\text{ mV}/^\\circ\\text{C}$ quand la température augmente (propriété utilisée pour fabriquer des capteurs de température à diode) !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p2_s4',
              type: 'mcq',
              prompt:
                'Dans une jonction PN fortement dissymétrique de type $P^+N$ (où le dopage accepteur $N_A$ est mille fois supérieur au dopage donneur $N_D$), quelle est la nature dominante du courant qui traverse la jonction en polarisation directe ?',
              options: [
                'C’est essentiellement un courant de trous injectés de la région $P^+$ fortement dopée vers la région $N$ faiblement dopée',
                'C’est essentiellement un courant d’électrons injectés de la région $N$ vers la région $P^+$',
                'Les courants d’électrons et de trous sont toujours strictement égaux à $50\\%$ chacun quels que soient les dopages',
                'Aucun courant ne peut circuler dans une jonction dissymétrique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le rapport du courant de trous au courant d’électrons dans la jonction vaut $\\frac{I_p}{I_n} = \\frac{D_p L_n N_A}{D_n L_p N_D}$. Comme $N_A \\gg N_D$, on a $I_p \\gg I_n$ : c’est la région la plus dopée ($P^+$) qui injecte ses majoritaires dans la région la moins dopée ($N$).',
              hint: 'Compare les termes $\\frac{D_n}{L_n N_A}$ et $\\frac{D_p}{L_p N_D}$ dans l’expression de $I_s$ lorsque $N_A \\gg N_D$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Résistance dynamique',
            stepTheme: 'green',
            stepTitle: 'Résistance dynamique (différentielle) rd d’une jonction PN en petit signal',
            paragraphText:
              'Lorsqu’une diode polarisée en direct autour d’un point de repos continu $(V_0, I_0)$ est soumise à une petite variation alternative de tension $v(t)$, elle se comporte vis-à-vis de ce petit signal comme une résistance linéaire appelée résistance dynamique (ou différentielle) $r_d$. Par définition, la conductance dynamique $g_d = \\frac{1}{r_d}$ est la dérivée du courant par rapport à la tension au point de repos : $g_d = \\left(\\frac{dI}{dV}\\right)_{I_0}$. En dérivant la loi de Shockley, on obtient une formule universelle remarquablement simple.',
            formula: {
              name: 'Conductance et résistance dynamiques d’une jonction PN polarisée en direct',
              formula: 'g_d = \\frac{dI}{dV} = \\frac{I_0 + I_s}{\\eta U_T} \\approx \\frac{I_0}{\\eta U_T} \\quad \\Longrightarrow \\quad r_d = \\frac{\\eta U_T}{I_0} \\approx \\frac{26\\text{ mV}}{I_0\\text{ (mA)}}',
              note: 'Exemple : pour η = 1 et un courant de polarisation I0 = 1 mA à 300 K, rd ≈ 26 Ω',
            },
            keyRule:
              'La résistance dynamique en direct d’une jonction PN idéale ($\\eta = 1$) à $300\\text{ K}$ est inversement proportionnelle au courant continu de polarisation : $r_d(\\Omega) \\approx \\frac{26}{I_0(\\text{mA})}$.',
            konanTip:
              'Cette formule $r_d = \\frac{U_T}{I_0}$ tombe constamment aux examens de PDE et d’Électronique Fondamentale : pour $I_0 = 2\\text{ mA}$, $r_d = 26/2 = 13\\text{ }\\Omega$ ; pour $I_0 = 10\\text{ mA}$, $r_d = 2{,}6\\text{ }\\Omega$.',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p2_s5',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de la résistance dynamique (différentielle) $r_d$ d’une jonction PN idéale ($\\eta = 1$) à $T = 300\\text{ K}$ ($U_T = 26\\text{ mV}$) polarisée en direct par un courant continu $I_0 = 5{,}2\\text{ mA}$ ?',
              options: [
                '$r_d = 5\\text{ }\\Omega$',
                '$r_d = 50\\text{ }\\Omega$',
                '$r_d = 135{,}2\\text{ }\\Omega$',
                '$r_d = 0{,}2\\text{ }\\Omega$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En appliquant $r_d = \\frac{U_T}{I_0} = \\frac{26\\text{ mV}}{5{,}2\\text{ mA}} = 5\\text{ }\\Omega$.',
              hint: 'Divise $U_T = 26\\text{ mV}$ par le courant de repos $I_0 = 5{,}2\\text{ mA}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Jonction réelle',
            stepTheme: 'orange',
            stepTitle: 'Écarts à la loi idéale de Shockley : G-R dans la ZCE (η = 2) et résistance série Rs',
            paragraphText:
              'Dans une jonction PN réelle en Silicium, l’équation idéale de Shockley doit être corrigée dans trois domaines de tension. À très faible polarisation directe ($V < 0{,}4\\text{ V}$) ainsi qu’en inverse, la génération-recombinaison (G-R) des porteurs à l’intérieur même de la ZCE domine le courant de diffusion, ce qui donne un facteur d’idéalité $\\eta \\approx 2$ en direct et un courant inverse qui croît légèrement avec $W \\propto \\sqrt{|V|}$. À très fort courant direct ($V > 0{,}8\\text{ V}$), la chute de tension ohmique $R_s I$ dans les zones neutres P et N n’est plus négligeable et la caractéristique $I(V)$ devient linéaire.',
            formula: {
              name: 'Prise en compte du facteur d’idéalité η et de la résistance série Rs des zones neutres',
              formula: 'V_{\\text{diode}} = V_{\\text{jonction}} + R_s I = \\eta U_T \\ln\\left(1 + \\frac{I}{I_s}\\right) + R_s I',
              note: 'η ≈ 2 à faible courant direct (recombinaison dans la ZCE) ; η ≈ 1 à courant moyen (diffusion pure)',
            },
            keyRule:
              'Le facteur d’idéalité $\\eta$ (compris entre $1$ et $2$) traduit la compétition entre le courant idéal de diffusion dans les zones neutres ($\\eta = 1$) et le courant de recombinaison dans la ZCE ($\\eta = 2$).',
            konanTip:
              'Si un énoncé de TD ne précise pas la valeur de $\\eta$, prends par défaut $\\eta = 1$ (jonction idéale) ; s’il précise « en tenant compte de la recombinaison dans la ZCE avec $\\eta = 2$ », pense à diviser $V$ par $2 U_T \\approx 52\\text{ mV}$ dans l’exponentielle !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p2_s6',
              type: 'mcq',
              prompt:
                'Quelle est l’origine physique d’un facteur d’idéalité $\\eta \\approx 2$ dans la caractéristique directe $I = I_s(e^{V/(\\eta U_T)} - 1)$ d’une jonction PN réelle en Silicium à faible courant ?',
              options: [
                'La prépondérance des recombinaisons de paires électron-trou à l’intérieur de la Zone de Charge d’Espace (ZCE)',
                'La fusion thermique des contacts métalliques de l’anode et de la cathode',
                'Le claquage par avalanche de la jonction dès $V = +0{,}1\\text{ V}$',
                'L’annulation de la constante de Planck dans les semi-conducteurs dopés',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À faible tension directe dans le Silicium, le courant de recombinaison au sein de la ZCE (proportionnel à $n_i W e^{V/(2 U_T)}$) l’emporte sur le courant de diffusion dans les zones neutres (proportionnel à $n_i^2 e^{V/U_T}$), d’où $\\eta \\approx 2$.',
              hint: 'Le courant de recombinaison dans la ZCE varie en $\\exp(V / 2U_T)$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_pde_c3_p3',
        order: 3,
        title: 'Effets capacitifs (transition Cj et diffusion Cd) et phénomènes de claquage (Zener et Avalanche)',
        summary:
          'Capacité de transition (de déplétion) Cj en polarisation inverse (diode Varicap), capacité de diffusion Cd en polarisation directe, claquage par effet Zener et par multiplication en avalanche.',
        conceptExplanation:
          'En régime dynamique (variable dans le temps), toute modification de la tension $V$ aux bornes d’une jonction PN entraîne une variation des charges stockées dans le composant, ce qui se traduit par deux effets capacitifs distincts : la capacité de transition (ou de jonction) $C_j$, due à la variation des charges fixes de la ZCE et prépondérante en inverse, et la capacité de diffusion $C_d$, due au stockage des porteurs minoritaires injectés dans les zones neutres et prépondérante en direct. Enfin, sous forte tension inverse $V < -V_{BR}$, survient le claquage par effet Zener ou par avalanche.',
        formulas: [
          {
            name: 'Capacité de transition (de déplétion / de jonction) Cj',
            formula: 'C_j(V) = \\frac{\\varepsilon_s S}{W(V)} = \\frac{C_{j0}}{\\sqrt{1 - \\dfrac{V}{V_0}}} \\quad \\text{avec} \\quad C_{j0} = S\\sqrt{\\frac{q\\varepsilon_s}{2 V_0 \\left(\\dfrac{1}{N_A} + \\dfrac{1}{N_D}\\right)}}',
            note: 'En polarisation inverse (V < 0), Cj diminue quand la tension inverse |V| augmente',
          },
          {
            name: 'Capacité de diffusion Cd en polarisation directe',
            formula: 'C_d = \\frac{\\tau_T I_0}{\\eta U_T} = \\tau_T g_d',
            note: 'τT est le temps de transit / durée de vie moyenne des minoritaires injectés ; Cd est proportionnelle au courant direct I0',
          },
        ],
        keyRule:
          'En polarisation inverse ($V < 0$), la jonction se comporte comme un condensateur plan d’épaisseur $W(V)$ de capacité $C_j = \\frac{\\varepsilon_s S}{W(V)}$ commandée par la tension (principe de la diode Varicap) ; en polarisation directe ($V > 0$), c’est la capacité de diffusion $C_d \\propto I_0$ qui domine.',
        workedExample: {
          title: 'Calcul de la capacité de jonction Cj d’une diode Varicap',
          statement:
            'Une diode Varicap en Silicium présente une barrière de potentiel $V_0 = 0{,}8\\text{ V}$ et une capacité à tension nulle $C_{j0} = 45\\text{ pF}$. Quelle est la valeur de sa capacité de transition $C_j$ lorsqu’on la polarise en inverse sous $V = -6{,}4\\text{ V}$ ?',
          methodSteps: [
            'Calculer le terme sous la racine : $1 - \\frac{V}{V_0} = 1 - \\frac{-6{,}4}{0{,}8} = 1 + 8 = 9$.',
            'Appliquer la formule de la capacité de transition d’une jonction abrupte : $C_j(V) = \\frac{C_{j0}}{\\sqrt{1 - V/V_0}}$.',
            'Application numérique : $C_j(-6{,}4\\text{ V}) = \\frac{45\\text{ pF}}{\\sqrt{9}} = \\frac{45}{3} = 15\\text{ pF}$.',
          ],
          conclusion:
            'Sous une tension inverse de $6{,}4\\text{ V}$, la capacité de la diode Varicap s’abaisse à $C_j = 15\\text{ pF}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Capacité Cj',
            stepTheme: 'blue',
            stepTitle: 'Capacité de transition (ou de jonction / déplétion) Cj',
            paragraphText:
              'La Zone de Charge d’Espace (ZCE), dépourvue de porteurs libres (isolante) et encadrée par les deux zones neutres P et N fortement conductrices, est analogue au diélectrique d’un condensateur plan de surface $S$ et d’épaisseur $W(V)$. Lorsqu’on fait varier la tension $V$ autour d’un point de polarisation, la largeur $W(V)$ varie, modifiant la charge ionique découverte $|Q_j| = q S N_A x_p = q S N_D x_n$. La capacité différentielle associée $C_j = \\left|\\frac{dQ_j}{dV}\\right|$ s’identifie exactement à la formule du condensateur plan d’épaisseur $W(V)$.',
            formula: {
              name: 'Expression de la capacité de transition Cj(V)',
              formula: 'C_j(V) = \\left|\\frac{dQ_j}{dV}\\right| = \\frac{\\varepsilon_s S}{W(V)} = \\frac{C_{j0}}{\\sqrt{1 - \\dfrac{V}{V_0}}}',
              note: 'Cette capacité domine le comportement dynamique de la jonction en polarisation inverse (V < 0)',
            },
            keyRule:
              'Plus la tension inverse $|V|$ augmente, plus la ZCE s’élargit ($W$ augmente) et plus la capacité de transition $C_j = \\frac{\\varepsilon_s S}{W}$ diminue.',
            konanTip:
              'Trace mentalement la droite $\\frac{1}{C_j^2}$ en fonction de la tension inverse $|V|$ : comme $\\frac{1}{C_j^2} = \\frac{2}{q\\varepsilon_s S^2}\\left(\\frac{1}{N_A} + \\frac{1}{N_D}\\right)(V_0 - V)$, c’est une droite affine dont l’ordonnée à l’origine à $\\frac{1}{C_j^2} = 0$ donne expérimentalement $V_0$ et la pente donne le dopage !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p3_s1',
              type: 'mcq',
              prompt:
                'Comment évolue la capacité de transition (de jonction) $C_j$ d’une jonction PN lorsque l’on augmente l’amplitude $|V|$ de la tension de polarisation inverse ?',
              options: [
                'Elle diminue en $\\frac{1}{\\sqrt{V_0 + |V|}}$ car la largeur $W$ de la ZCE augmente',
                'Elle augmente proportionnellement à $|V|$ car la ZCE se rétrécit',
                'Elle croît exponentiellement avec $|V|$',
                'Elle reste strictement indépendante de la tension appliquée comme un condensateur céramique fixe',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En polarisation inverse ($V = -|V| < 0$), la largeur de la ZCE augmente selon $W \\propto \\sqrt{V_0 + |V|}$. Comme $C_j = \\frac{\\varepsilon_s S}{W}$, la capacité $C_j$ diminue proportionnellement à $\\frac{1}{\\sqrt{V_0 + |V|}}$.',
              hint: 'Dans un condensateur plan $C = \\varepsilon S / W$, que fait $C$ quand l’écartement $W$ des armatures augmente ?',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Application télécom',
            stepTheme: 'slate',
            stepTitle: 'Application de Cj(V) : la diode Varicap (Varactor) en télécommunications',
            paragraphText:
              'La dépendance de la capacité de transition $C_j(V)$ vis-à-vis de la tension inverse est exploitée industriellement dans les diodes Varicap (ou Varactors : *Variable Reactor*). Polarisée en inverse (donc sans consommer de courant continu), une diode Varicap constitue un condensateur commandé électroniquement par une tension continue. Associée à une bobine d’inductance $L$ dans un circuit résonant LC, elle permet d’ajuster la fréquence d’oscillation $f_0 = \\frac{1}{2\\pi\\sqrt{L\\,C_j(V)}}$ des oscillateurs commandés en tension (VCO), des synthétiseurs de fréquence radio/GSM/Wi-Fi et des modulateurs FM.',
            formula: {
              name: 'Fréquence de résonance d’un oscillateur LC accordé par diode Varicap',
              formula: 'f_0(V) = \\frac{1}{2\\pi\\sqrt{L \\cdot C_j(V)}} \\quad \\text{avec} \\quad V < 0',
              note: 'Lorsque la tension inverse |V| augmente, Cj diminue donc la fréquence de résonance f0 augmente',
            },
            keyRule:
              'Une diode Varicap s’utilise toujours polarisée en inverse pour offrir une capacité $C_j(V)$ purement réactive (sans courant de conduction) réglable par la tension inverse.',
            konanTip:
              'Pour un étudiant en SRIT (Systèmes, Réseaux et Télécommunications), retiens que la diode Varicap polarisée en inverse est le composant clé des VCO (*Voltage-Controlled Oscillators*) dans tous les émetteurs-récepteurs radio !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p3_s2',
              type: 'mcq',
              prompt:
                'Dans quel mode de polarisation doit-on faire fonctionner une diode Varicap pour l’utiliser comme condensateur variable commandé en tension dans un oscillateur radiofréquence (VCO) ?',
              options: [
                'En polarisation inverse ($V < 0$, avant la tension de claquage) afin de moduler $C_j(V)$ avec un courant continu quasi nul',
                'En polarisation directe à très fort courant ($I > 1\\text{ A}$) pour court-circuiter la bobine',
                'En régime de claquage par avalanche permanent à haute puissance',
                'Uniquement à tension strictement nulle ($V = 0\\text{ V}$) sans aucun signal de commande',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En polarisation inverse, la résistance dynamique de la diode est quasi infinie ($I \\approx -I_s \\approx 0$) : la jonction se comporte comme un condensateur pur à très faible perte dont la capacité $C_j(V)$ est réglée par la tension inverse.',
              hint: 'Un condensateur ne doit pas être court-circuité par un fort courant continu de conduction.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Capacité Cd',
            stepTheme: 'blue',
            stepTitle: 'Capacité de diffusion (ou de stockage) Cd en polarisation directe',
            paragraphText:
              'En polarisation directe ($V > 0$), un grand nombre de porteurs minoritaires sont injectés et stockés dans les zones neutres P et N sur leurs longueurs de diffusion $L_n$ et $L_p$ avant de se recombiner. La charge totale de ces porteurs minoritaires en excès stockés hors de la ZCE est proportionnelle au courant direct $I$ et à leur durée de vie $\\tau$ : $Q_{\\text{diff}} = \\tau_T I$. Toute variation de la tension directe $dV$ impose de fournir ou d’évacuer cette charge stockée $dQ_{\\text{diff}}$, ce qui définit la capacité de diffusion $C_d = \\frac{dQ_{\\text{diff}}}{dV}$, prépondérante en polarisation directe.',
            formula: {
              name: 'Capacité de diffusion Cd en polarisation directe',
              formula: 'C_d = \\frac{dQ_{\\text{diff}}}{dV} = \\tau_T \\frac{dI}{dV} = \\frac{\\tau_T I_0}{\\eta U_T} = \\frac{\\tau_T}{r_d}',
              note: 'Cd croît exponentiellement avec V (proportionnellement au courant direct I0) et limite la vitesse de commutation',
            },
            keyRule:
              'La capacité de diffusion $C_d = \\frac{\\tau_T I_0}{\\eta U_T}$ est directement proportionnelle au courant continu direct $I_0$ et à la durée de vie $\\tau_T$ des porteurs minoritaires.',
            konanTip:
              'Lorsqu’on commute brusquement une diode de l’état passant ($I_0 > 0$) à l’état bloqué ($V < 0$), elle ne se bloque pas instantanément : il faut un temps de recouvrement inverse $t_{rr}$ pour évacuer la charge stockée dans $C_d$ ! (C’est pourquoi on utilise des diodes Schottky métal/semi-conducteur sans minoritaires pour les hautes fréquences).',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p3_s3',
              type: 'mcq',
              prompt:
                'Quelle est l’expression de la capacité de diffusion $C_d$ d’une jonction PN idéale ($\\eta = 1$) polarisée en direct par un courant continu $I_0$, sachant que le temps de transit/stockage moyen des porteurs minoritaires vaut $\\tau_T$ ?',
              options: [
                '$C_d = \\frac{\\tau_T I_0}{U_T}$',
                '$C_d = \\frac{U_T}{\\tau_T I_0}$',
                '$C_d = \\frac{\\varepsilon_s S}{W}$',
                '$C_d = \\tau_T I_0 U_T$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La charge stockée par diffusion vaut $Q_{\\text{diff}} = \\tau_T I$. En dérivant par rapport à $V$, on obtient $C_d = \\frac{dQ_{\\text{diff}}}{dV} = \\tau_T \\frac{dI}{dV} = \\frac{\\tau_T I_0}{U_T}$.',
              hint: 'Multiplie le temps de stockage $\\tau_T$ par la conductance dynamique $g_d = I_0 / U_T$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Claquage Zener',
            stepTheme: 'violet',
            stepTitle: 'Phénomènes de claquage en inverse : l’effet Zener (effet tunnel)',
            paragraphText:
              'Lorsqu’on augmente la tension inverse au-delà d’un seuil critique $V = -V_{BR}$ (tension de claquage ou *Breakdown Voltage*), le courant inverse croît brutalement de plusieurs ordres de grandeur tandis que la tension aux bornes de la jonction reste quasiment constante. Deux mécanismes physiques distincts peuvent provoquer ce claquage. Le premier est l’effet Zener, qui se produit dans les jonctions très fortement dopées ($N_A, N_D > 10^{18}\\text{ cm}^{-3}$) : la ZCE y est si étroite ($W < 10\\text{ nm}$) et le champ électrique si intense ($|E_{\\max}| > 10^6\\text{ V/cm}$) que les électrons de la bande de valence côté P franchissent directement la bande interdite par effet tunnel quantique vers la bande de conduction côté N.',
            formula: {
              name: 'Domaine et coefficient thermique du claquage par effet Zener pur',
              formula: 'V_Z < 5\\text{ V} \\quad ; \\quad |E_{\\text{crit, Zener}}| \\approx 10^6\\text{ V/cm} \\quad ; \\quad \\frac{dV_Z}{dT} < 0',
              note: 'Quand T augmente, Eg diminue légèrement donc l’effet tunnel est facilité : VZ diminue avec T',
            },
            keyRule:
              'Le claquage par effet Zener (effet tunnel quantique à travers une ZCE très mince) prédomine dans les jonctions très fortement dopées dont la tension de claquage est inférieure à $5\\text{ V}$ ($V_{BR} < 5\\text{ V}$).',
            konanTip:
              'Retiens le signe du coefficient de température : l’effet Zener ($V_Z < 5\\text{ V}$) a un coefficient de température **négatif** ($\\frac{dV_Z}{dT} < 0$), tandis que l’effet d’avalanche ($V_Z > 7\\text{ V}$) a un coefficient de température **positif** !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p3_s4',
              type: 'mcq',
              prompt:
                'Quel est le mécanisme physique responsable du claquage par effet Zener dans une jonction PN fortement dopée ($V_{BR} < 5\\text{ V}$) ?',
              options: [
                'Le passage direct des électrons de la bande de valence côté P vers la bande de conduction côté N par effet tunnel quantique sous un champ électrique très intense ($\\sim 10^6\\text{ V/cm}$) à travers une ZCE très étroite',
                'L’ionisation par choc en chaîne des atomes du cristal par des porteurs accélérés sur une ZCE très large',
                'L’inversion du dopage qui transforme les atomes de Bore en atomes de Phosphore',
                'La fusion complète du cristal de Silicium à $1414\\text{ }^\\circ\\text{C}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un fort dopage des deux côtés crée une ZCE extrêmement fine ($W \\sim 10\\text{ nm}$). Dès quelques volts en inverse, le champ dépasse $10^6\\text{ V/cm}$ et les électrons de valence traversent l’épaisseur du gap par effet tunnel quantique sans collision.',
              hint: 'L’effet Zener est un phénomène purement quantique à travers une barrière très mince.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Avalanche',
            stepTheme: 'violet',
            stepTitle: 'Claquage par multiplication en avalanche (Ionisation par choc)',
            paragraphText:
              'Dans les jonctions faiblement ou moyennement dopées, la ZCE est plus large ($W > 0{,}1\\text{ }\\mu\\text{m}$) et la tension de claquage dépasse $7\\text{ V}$. Avant que le champ tunnel Zener ne soit atteint, les porteurs minoritaires qui traversent la large ZCE sont si fortement accélérés par le champ électrique ($|E_{\\max}| \\approx 3\\times 10^5\\text{ V/cm}$) qu’ils acquièrent une énergie cinétique supérieure à $E_g$. Lors d’un choc avec un atome de Silicium du réseau, ils brisent une liaison covalente et créent une nouvelle paire électron-trou (ionisation par impact), dont les porteurs accélérés créent à leur tour d’autres paires par réaction en chaîne : c’est le claquage par avalanche.',
            formula: {
              name: 'Tension de claquage par avalanche en fonction du champ critique Ecrit',
              formula: '|E_{\\max}| = \\sqrt{\\frac{2q}{\\varepsilon_s}\\frac{N_A N_D}{N_A + N_D}(V_0 + V_{BR})} = E_{\\text{crit}} \\quad \\Longrightarrow \\quad V_{BR} \\approx \\frac{\\varepsilon_s E_{\\text{crit}}^2}{2 q N_{\\text{moins dopé}}}',
              note: 'Moins la jonction est dopée, plus sa tension de claquage par avalanche VBR est élevée (et dVBR/dT > 0)',
            },
            keyRule:
              'La tension de claquage par avalanche $V_{BR}$ est inversement proportionnelle au dopage du côté le moins dopé : pour supporter une haute tension inverse (diodes de redressement de puissance), il faut un dopage faible !',
            konanTip:
              'Pour une diode dite « Zener » de référence à $V_Z \\approx 5{,}6\\text{ V}$ ou $6{,}2\\text{ V}$, les effets Zener ($\\frac{dV_Z}{dT} < 0$) et d’avalanche ($\\frac{dV_Z}{dT} > 0$) ont lieu simultanément et leurs coefficients thermiques se compensent, donnant une tension ultra-stable en température !',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p3_s5',
              type: 'mcq',
              prompt:
                'Comment varie la tension de claquage par avalanche $V_{BR}$ d’une jonction PN dissymétrique $P^+N$ lorsque l’on diminue le dopage $N_D$ de la région la moins dopée ?',
              options: [
                'La tension de claquage $V_{BR}$ augmente (proportionnellement à $1/N_D$)',
                'La tension de claquage $V_{BR}$ diminue vers zéro',
                'La tension de claquage $V_{BR}$ est indépendante du dopage $N_D$',
                'La tension de claquage devient négative en polarisation directe',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après $|E_{\\max}|^2 \\approx \\frac{2 q N_D}{\\varepsilon_s} V_{BR} = E_{\\text{crit}}^2$, on a $V_{BR} \\approx \\frac{\\varepsilon_s E_{\\text{crit}}^2}{2 q N_D}$ : plus la région N est faiblement dopée, plus la ZCE s’étale et plus il faut une tension inverse élevée pour atteindre le champ critique d’avalanche.',
              hint: 'Dans $|E_{\\max}| = \\frac{2(V_0 + V_{BR})}{W}$, si $N_D$ est plus faible, $W$ est plus grand donc il faut une tension $V_{BR}$ plus grande pour atteindre le même champ critique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Destruction thermique',
            stepTheme: 'orange',
            stepTitle: 'Claquage électrique réversible vs destruction thermique irréversible',
            paragraphText:
              'Un piège classique consiste à croire que le claquage Zener ou par avalanche détruit systématiquement la jonction PN. En réalité, les mécanismes électroniques d’effet Zener et d’ionisation par avalanche sont parfaitement réversibles et non destructifs en eux-mêmes ! La destruction physique de la jonction (par fusion locale du cristal et des métallisations) ne survient que si la puissance thermique dissipée par effet Joule en inverse $P = V_{BR} \\times |I_{\\text{inv}}|$ dépasse la puissance maximale $P_{\\max}$ que le boîtier peut évacuer. Si le courant inverse est limité par une résistance extérieure (cas des régulateurs à diode Zener), la jonction fonctionne indéfiniment en régime de claquage sans aucun dommage.',
            formula: {
              name: 'Condition de non-destruction thermique en régime de claquage inverse',
              formula: 'P_{\\text{dissipée}} = V_Z \\cdot |I_Z| \\le P_{\\max} \\quad \\Longrightarrow \\quad |I_Z| \\le I_{Z,\\max} = \\frac{P_{\\max}}{V_Z}',
              note: 'Une résistance série de limitation R est indispensable pour fixer le courant IZ dans une diode Zener',
            },
            keyRule:
              'Le claquage inverse (Zener ou avalanche) n’est pas destructif tant que le courant inverse $|I_Z|$ est limité par le circuit extérieur de sorte que la puissance dissipée $P = V_Z |I_Z|$ reste inférieure à $P_{\\max}$.',
            konanTip:
              'Si un QCM d’examen demande : « Le claquage d’une jonction PN est-il un phénomène irréversible ? », réponds **Non** : il est totalement réversible tant que la dissipation thermique $V_{BR}|I|$ est maintenue sous la limite maximale du composant.',
            exercise: {
              id: 'lmd_srit_l1_pde_c3_p3_s6',
              type: 'mcq',
              prompt:
                'Une diode Zener de tension de claquage $V_Z = 10\\text{ V}$ peut dissiper au maximum une puissance thermique $P_{\\max} = 500\\text{ mW}$ sans destruction. Quel est le courant inverse maximal $|I_{Z,\\max}|$ qu’elle peut supporter en régime de claquage ?',
              options: [
                '$|I_{Z,\\max}| = 50\\text{ mA}$ (le claquage est totalement réversible tant que $|I_Z| \\le 50\\text{ mA}$)',
                '$|I_{Z,\\max}| = 5\\text{ A}$',
                '$|I_{Z,\\max}| = 20\\text{ mA}$',
                '$|I_{Z,\\max}| = 0\\text{ mA}$ car tout début de claquage détruit instantanément la jonction',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La puissance dissipée en claquage inverse vaut $P = V_Z |I_Z|$. La condition $P \\le P_{\\max}$ donne $|I_{Z,\\max}| = \\frac{P_{\\max}}{V_Z} = \\frac{0{,}5\\text{ W}}{10\\text{ V}} = 0{,}05\\text{ A} = 50\\text{ mA}$.',
              hint: 'Divise la puissance maximale $P_{\\max} = 500\\text{ mW}$ par la tension Zener $V_Z = 10\\text{ V}$.',
            },
          },
        ],
      }),
    ],
  },
];
