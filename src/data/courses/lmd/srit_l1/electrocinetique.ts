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

export const ELECTROCINETIQUE_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : LOIS FONDAMENTALES DES RÉSEAUX ÉLECTRIQUES EN RÉGIME CONTINU
  // ============================================================================
  {
    id: 'lmd_srit_l1_electrocine_ch1',
    subjectId: 'lmd_electrocinetique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (2PHY3101 Électrocinétique, Semestre 1)',
    title: 'Lois Fondamentales des Réseaux Électriques en Régime Continu',
    summary:
      'Courant, tension, puissance, conventions récepteur et générateur, dipôles passifs et actifs, lois de Kirchhoff, diviseurs, pont de Wheatstone et théorème de Kennelly.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch1_p1',
        order: 1,
        title: 'Grandeurs électriques, conventions et dipôles passifs/actifs',
        summary:
          'Intensité du courant, différence de potentiel, puissance électrique, conventions récepteur et générateur, loi d’Ohm et sources réelles.',
        conceptExplanation:
          'L’électrocinétique en régime continu étudie les circuits parcourus par des courants stationnaires dans le temps (Approximation des Régimes Quasi-Stationnaires réduite au continu). Le signe de la puissance échangée $P = U \\cdot I$ dépend strictement de la convention d’orientation choisie pour les flèches de tension $U$ et de courant $I$ aux bornes du dipôle. Les dipôles linéaires se divisent en dipôles passifs (résistance pure obéissant à la loi d’Ohm et dissipant l’énergie par effet Joule) et dipôles actifs (générateurs de tension de Thévenin et de courant de Norton).',
        formulas: [
          {
            name: 'Loi d’Ohm et Effet Joule (convention récepteur)',
            formula: 'U = R \\cdot I \\quad ; \\quad I = G \\cdot U \\quad ; \\quad P_J = R \\cdot I^2 = G \\cdot U^2',
            note: 'R en Ohms (Ω), G = 1/R en Siemens (S)',
          },
          {
            name: 'Source réelle de tension (convention générateur)',
            formula: 'U = E - r \\cdot I',
            note: 'E : force électromotrice (V), r : résistance interne (Ω)',
          },
        ],
        keyRule:
          'En convention récepteur (flèches de U et I de sens opposés), P = U·I est la puissance reçue (P > 0 pour un récepteur). En convention générateur (flèches de même sens), P = U·I est la puissance fournie.',
        workedExample: {
          title: 'Bilan de puissance d’un générateur réel débitant dans une charge',
          statement:
            'Un générateur réel de tension de f.é.m. $E = 12\\text{ V}$ et de résistance interne $r = 1\\,\\Omega$ alimente une résistance de charge $R = 5\\,\\Omega$. Calculer le courant $I$, la tension $U$ aux bornes du générateur et le rendement énergétique $\\eta$.',
          methodSteps: [
            'Le courant débité dans la maille unique vaut $I = \\frac{E}{R + r} = \\frac{12}{5 + 1} = 2\\text{ A}$.',
            'La tension aux bornes du générateur (et de la charge) vaut $U = E - rI = 12 - 1 \\times 2 = 10\\text{ V}$ (ou $U = RI = 5 \\times 2 = 10\\text{ V}$).',
            'La puissance totale générée par la source idéale est $P_g = E \\cdot I = 24\\text{ W}$ et la puissance utile fournie à la charge est $P_u = U \\cdot I = 20\\text{ W}$ (pertes Joule internes $rI^2 = 4\\text{ W}$).',
            'Le rendement vaut $\\eta = \\frac{P_u}{P_g} = \\frac{U}{E} = \\frac{R}{R+r} = \\frac{10}{12} \\approx 83{,}3\\%$.',
          ],
          conclusion: 'Le générateur débite $2\\text{ A}$ sous $10\\text{ V}$ avec un rendement de $83{,}3\\%$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Courant & Tension',
            stepTheme: 'blue',
            stepTitle: 'Intensité du courant électrique et différence de potentiel',
            paragraphText:
              'L’intensité du courant électrique $i(t)$ à travers une section orientée d’un conducteur est le débit de charge électrique par unité de temps : $i(t) = \\frac{dq}{dt}$, exprimée en Ampères ($1\\text{ A} = 1\\text{ C}\\cdot\\text{s}^{-1}$). Par convention historique, le sens positif du courant est le sens de déplacement des porteurs de charge positifs, soit le sens inverse du déplacement des électrons libres dans un métal. La tension électrique $U_{AB}$ entre deux points $A$ et $B$ est la différence de potentiel électrostatique $U_{AB} = V_A - V_B$ (en Volts, V), représentée sur un schéma par une flèche dont la pointe est dirigée vers le point $A$.',
            formula: {
              name: 'Courant et Tension en régime continu',
              formula: 'I = \\frac{\\Delta Q}{\\Delta t} \\quad ; \\quad U_{AB} = V_A - V_B = -U_{BA}',
              note: 'En régime continu (DC), I et U sont constants dans le temps',
            },
            keyRule:
              'La flèche de tension $U_{AB} = V_A - V_B$ pointe toujours vers la première lettre ($A$).',
            konanTip:
              'Attention au signe : si un courant d’électrons va de $A$ vers $B$, l’intensité conventionnelle positive va de $B$ vers $A$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p1_ex1',
              type: 'mcq',
              prompt:
                'Un fil conducteur métallique est traversé par $3 \\times 10^{20}$ électrons ($q_e = -1{,}6 \\times 10^{-19}\\text{ C}$) allant du point $A$ vers le point $B$ en $\\Delta t = 16\\text{ s}$. Que vaut l’intensité du courant orientée de $B$ vers $A$ ?',
              options: ['$+3\\text{ A}$', '$-3\\text{ A}$', '$+48\\text{ A}$', '$+0{,}3\\text{ A}$'],
              correctAnswerIndex: 0,
              explanation:
                'La charge transportée en valeur absolue est $|\\Delta Q| = N \\cdot e = 3 \\times 10^{20} \\times 1{,}6 \\times 10^{-19} = 48\\text{ C}$. Les électrons allant de $A$ vers $B$, le courant conventionnel positif va de $B$ vers $A$ et vaut $I_{BA} = \\frac{48}{16} = +3\\text{ A}$.',
              hint: 'Calcule $|\\Delta Q| = N \\cdot e$ puis divise par $\\Delta t = 16\\text{ s}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Conventions',
            stepTheme: 'violet',
            stepTitle: 'Conventions Récepteur et Générateur, bilan de puissance',
            paragraphText:
              'Pour étudier les échanges d’énergie aux bornes d’un dipôle $AB$, on définit deux conventions d’orientation. En **convention récepteur**, la flèche du courant $I$ (entrant par $A$) et la flèche de la tension $U_{AB} = V_A - V_B$ (pointant vers $A$) sont de **sens opposés** : le produit $P_{\\text{reçue}} = U_{AB} \\cdot I$ représente alors la puissance algébrique reçue par le dipôle. En **convention générateur**, les flèches de $U_{AB}$ et de $I$ sont de **même sens** (le courant sort par la borne $A$ vers laquelle pointe $U_{AB}$) : le produit $P_{\\text{fournie}} = U_{AB} \\cdot I$ représente la puissance algébrique fournie par le dipôle au reste du circuit.',
            formula: {
              name: 'Puissance électrique échangée',
              formula: 'P_{\\text{reçue (conv. récepteur)}} = U \\cdot I \\quad ; \\quad P_{\\text{fournie (conv. générateur)}} = U \\cdot I',
              note: 'Un dipôle fonctionne effectivement en récepteur si P_reçue > 0, et en générateur si P_fournie > 0',
            },
            keyRule:
              'Flèches opposées = convention récepteur ($P = UI$ reçue). Flèches de même sens = convention générateur ($P = UI$ fournie).',
            konanTip:
              'Un accumulateur (batterie) en cours de recharge a son courant qui entre par sa borne positive : il est alors un récepteur !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Conventions d’orientation et nature énergétique d’un dipôle',
              matrix2x2: {
                topAxis: ['Produit U·I > 0', 'Produit U·I < 0'],
                leftAxis: ['Conv. Récepteur', 'Conv. Générateur'],
                topLeft: {
                  title: 'Comportement Récepteur',
                  items: [
                    'Flèches U et I de sens opposés',
                    'P_reçue = U·I > 0',
                    'Le dipôle absorbe de la puissance (résistance, batterie en charge)',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Comportement Générateur',
                  items: [
                    'Flèches U et I de sens opposés mais U·I < 0',
                    'P_reçue < 0 ⇔ P_fournie = -U·I > 0',
                    'Le dipôle fournit de l’énergie au circuit',
                  ],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'Comportement Générateur',
                  items: [
                    'Flèches U et I de même sens',
                    'P_fournie = U·I > 0',
                    'Le dipôle débite et fournit de la puissance (pile active)',
                  ],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Comportement Récepteur',
                  items: [
                    'Flèches U et I de même sens mais U·I < 0',
                    'P_fournie < 0 ⇔ P_reçue = -U·I > 0',
                    'Le dipôle absorbe de la puissance',
                  ],
                  color: 'violet',
                },
              },
            },
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p1_ex2',
              type: 'mcq',
              prompt:
                'Un dipôle $AB$ est orienté en convention générateur avec $U_{AB} = +15\\text{ V}$ et $I = -2\\text{ A}$. Quel est son comportement énergétique réel ?',
              options: [
                'Il se comporte en récepteur et reçoit $30\\text{ W}$',
                'Il se comporte en générateur et fournit $30\\text{ W}$',
                'Il se comporte en récepteur et reçoit $-30\\text{ W}$',
                'Il ne consomme ni ne fournit aucune puissance',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En convention générateur, la puissance fournie vaut $P_{\\text{fournie}} = U_{AB} \\cdot I = 15 \\times (-2) = -30\\text{ W} < 0$. Il reçoit donc en réalité $P_{\\text{reçue}} = -P_{\\text{fournie}} = +30\\text{ W}$ et fonctionne en récepteur.',
              hint: 'Calcule $P_{\\text{fournie}} = U \\cdot I$ et interprète son signe.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Loi d’Ohm',
            stepTheme: 'violet',
            stepTitle: 'Dipôle passif linéaire : résistance, conductance et effet Joule',
            paragraphText:
              'Un conducteur ohmique (ou résistor) est un dipôle passif linéaire symétrique dont la caractéristique statique $U = f(I)$ passe par l’origine $(0,0)$. En convention récepteur, la loi d’Ohm s’écrit $U = R \\cdot I$, où $R$ est la résistance électrique en Ohms ($\\Omega$). Son inverse $G = \\frac{1}{R}$ est la conductance exprimée en Siemens ($\\text{S}$ ou $\\Omega^{-1}$), telle que $I = G \\cdot U$. Toute la puissance électrique reçue par une résistance est intégralement convertie en chaleur par **effet Joule** : $P_J = U \\cdot I = R I^2 = G U^2 = \\frac{U^2}{R} \\ge 0$.',
            formula: {
              name: 'Loi d’Ohm en convention récepteur et en convention générateur',
              formula: 'U_{\\text{récepteur}} = +R \\cdot I \\quad ; \\quad U_{\\text{générateur}} = -R \\cdot I',
              note: 'En convention générateur, la loi d’Ohm prend un signe moins !',
            },
            keyRule:
              'Une résistance pure ($R > 0$) ne peut jamais fournir de puissance : $P_{\\text{reçue}} = R I^2 \\ge 0$ quel que soit le sens du courant.',
            konanTip:
              'Pour un câble cylindrique homogène de résistivité $\\rho$, de longueur $L$ et de section $S$, la résistance vaut $R = \\rho \\frac{L}{S}$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p1_ex3',
              type: 'mcq',
              prompt:
                'Une résistance de conductance $G = 0{,}04\\text{ S}$ dissipe une puissance thermique de $P_J = 100\\text{ W}$ par effet Joule. Que valent sa résistance $R$ et l’intensité $I$ qui la traverse ?',
              options: [
                '$R = 25\\,\\Omega$ et $I = 2\\text{ A}$',
                '$R = 25\\,\\Omega$ et $I = 4\\text{ A}$',
                '$R = 40\\,\\Omega$ et $I = 2{,}5\\text{ A}$',
                '$R = 0{,}04\\,\\Omega$ et $I = 50\\text{ A}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $R = \\frac{1}{G} = \\frac{1}{0{,}04} = 25\\,\\Omega$. Puis $P_J = R I^2 \\implies I = \\sqrt{\\frac{P_J}{R}} = \\sqrt{\\frac{100}{25}} = \\sqrt{4} = 2\\text{ A}$.',
              hint: 'Calcule d’abord $R = 1/G$ puis utilise $P_J = R I^2$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Sources de tension',
            stepTheme: 'blue',
            stepTitle: 'Sources idéales et réelles de tension (modèle de Thévenin)',
            paragraphText:
              'Une **source idéale de tension** maintient à ses bornes une tension constante $U = E$ (appelée force électromotrice ou f.é.m.) quelle que soit l’intensité $I$ du courant qui la traverse ; sa résistance interne est nulle ($r = 0$). Dans la réalité, toute source de tension présente des pertes internes modélisées par une résistance interne $r$ placée **en série** avec la source idéale $E$ (modèle de Thévenin). En convention générateur, la caractéristique tension-courant d’une source réelle de tension est la droite affine décroissante $U = E - r I$.',
            formula: {
              name: 'Caractéristique d’un générateur réel de tension (conv. générateur)',
              formula: 'U = E - r \\cdot I \\quad ; \\quad I_{\\text{cc}} = \\frac{E}{r}',
              note: 'À vide (I = 0), U = E. En court-circuit (U = 0), I = I_cc = E/r.',
            },
            keyRule:
              'La résistance interne d’une source de tension idéale est nulle ($r = 0$). Lorsqu’on éteint une source idéale de tension ($E = 0$), on la remplace par un fil (court-circuit).',
            konanTip:
              'En convention récepteur (courant entrant par le pôle + d’un récepteur actif ou batterie en charge), la loi s’écrit $U = E\' + r\' I$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p1_ex4',
              type: 'mcq',
              prompt:
                'Une source réelle de tension mesurée à vide affiche $U_0 = 24\\text{ V}$. Lorsqu’elle débite un courant $I = 3\\text{ A}$, la tension à ses bornes tombe à $U = 22{,}5\\text{ V}$. Quelle est sa résistance interne $r$ ?',
              options: ['$0{,}5\\,\\Omega$', '$1{,}5\\,\\Omega$', '$7{,}5\\,\\Omega$', '$8\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'À vide ($I = 0$), la tension mesurée est la f.é.m. $E = U_0 = 24\\text{ V}$. En charge, $U = E - rI \\implies r = \\frac{E - U}{I} = \\frac{24 - 22{,}5}{3} = \\frac{1{,}5}{3} = 0{,}5\\,\\Omega$.',
              hint: 'Identifie $E = U_0$ puis isole $r = (E - U)/I$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Sources de courant',
            stepTheme: 'blue',
            stepTitle: 'Sources idéales et réelles de courant (modèle de Norton)',
            paragraphText:
              'Une **source idéale de courant** débite un courant d’intensité constante $I = I_0$ (appelé courant électromoteur ou c.é.m.) quelle que soit la tension $U$ à ses bornes ; sa résistance interne parallèle est infinie ($g = 0$). Une **source réelle de courant** (modèle de Norton) est modélisée par une source idéale de courant $I_0$ montée **en parallèle** avec une conductance interne $g = \\frac{1}{r}$. En convention générateur, une partie $g U = \\frac{U}{r}$ du courant $I_0$ dérive dans la résistance interne parallèle, de sorte que le courant réellement fourni au circuit extérieur vaut $I = I_0 - g U = I_0 - \\frac{U}{r}$.',
            formula: {
              name: 'Caractéristique d’une source réelle de courant (conv. générateur)',
              formula: 'I = I_0 - g \\cdot U = I_0 - \\frac{U}{r}',
              note: 'Lorsqu’on éteint une source idéale de courant (I_0 = 0), on la remplace par un circuit ouvert (interrupteur ouvert).',
            },
            keyRule:
              'Éteindre une source idéale de tension ($E=0$) = fil (court-circuit). Éteindre une source idéale de courant ($I_0=0$) = coupure (circuit ouvert).',
            konanTip:
              'Ne mets jamais deux sources idéales de tension différentes en parallèle, ni deux sources idéales de courant différentes en série : cela violerait les lois de Kirchhoff !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p1_ex5',
              type: 'mcq',
              prompt:
                'Par quel élément électrique remplace-t-on une source idéale de courant ($I_0$) lorsqu’on l’éteint dans un schéma ?',
              options: [
                'Par un circuit ouvert (interrupteur ouvert)',
                'Par un court-circuit (fil parfait)',
                'Par une résistance de $1\\,\\Omega$',
                'Par un condensateur chargé',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Éteindre une source idéale de courant revient à imposer $I_0 = 0\\text{ A}$ quelle que soit la tension à ses bornes, ce qui est la définition exacte d’un circuit ouvert (branche coupée).',
              hint: 'Un courant nul sous tension quelconque correspond à une branche ouverte.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Point de fonctionnement',
            stepTheme: 'slate',
            stepTitle: 'Point de fonctionnement d’un générateur réel sur un récepteur actif',
            paragraphText:
              'Lorsqu’un générateur réel de tension $(E, r)$ alimente un récepteur actif linéarisé de force contre-électromotrice (f.c.é.m.) $E\'$ et de résistance interne $r\'$ (comme un moteur à courant continu ou un électrolyseur, de caractéristique $U = E\' + r\' I$ pour $I > 0$), le point de fonctionnement $(I_0, U_0)$ est l’intersection des deux droites caractéristiques : $U = E - r I = E\' + r\' I$. Pour que le courant circule dans le sens prévu ($I > 0$), il est indispensable que $E > E\'$. La loi de Pouillet donne alors directement $I = \\frac{E - E\'}{r + r\'}$.',
            formula: {
              name: 'Loi de Pouillet pour une maille simple',
              formula: 'I = \\frac{\\sum E_{\\text{générateurs}} - \\sum E\'_{\\text{récepteurs}}}{\\sum R_{\\text{totales}}}',
              note: 'Valable uniquement lorsque le courant traverse tous les dipôles en série dans une maille unique',
            },
            keyRule:
              'Dans un récepteur actif (moteur, batterie en charge), la puissance $E\' I$ est la puissance utile (mécanique ou chimique) et $r\' I^2$ est perdue par effet Joule.',
            konanTip:
              'Vérifie toujours que $E > E\'$ avant d’appliquer la loi de Pouillet à un récepteur muni d’un clapet anti-retour ou d’un seuil.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p1_ex6',
              type: 'mcq',
              prompt:
                'Un générateur $(E = 24\\text{ V}, r = 1\\,\\Omega)$ alimente en série une résistance de protection $R = 2\\,\\Omega$ et un moteur électrique de f.c.é.m. $E\' = 15\\text{ V}$ et de résistance interne $r\' = 1{,}5\\,\\Omega$. Quelle est la puissance mécanique utile $P_m = E\' I$ développée par le moteur ?',
              options: ['$30\\text{ W}$', '$48\\text{ W}$', '$36\\text{ W}$', '$6\\text{ W}$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après la loi de Pouillet, $I = \\frac{E - E\'}{r + R + r\'} = \\frac{24 - 15}{1 + 2 + 1{,}5} = \\frac{9}{4{,}5} = 2\\text{ A}$. La puissance électromécanique utile convertie par le moteur vaut $P_m = E\' \\cdot I = 15 \\times 2 = 30\\text{ W}$.',
              hint: 'Calcule d’abord $I$ par la loi de Pouillet, puis multiplie par $E\' = 15\\text{ V}$.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch1_p2',
        order: 2,
        title: 'Topologie des réseaux, lois de Kirchhoff et diviseurs',
        summary:
          'Nœuds, branches, mailles indépendantes, 1ère et 2ème lois de Kirchhoff, associations série/parallèle, ponts diviseurs de tension et de courant.',
        conceptExplanation:
          'Un réseau électrique est un graphe constitué de $N$ nœuds (points de jonction d’au moins trois fils), de $B$ branches (portions de circuit comprises entre deux nœuds consécutifs et parcourues par le même courant) et de mailles (chemins fermés formés de branches). Dans l’Approximation des Régimes Quasi-Stationnaires (ARQS), la conservation de la charge électrique impose la loi des nœuds, et l’unicité du potentiel électrique en chaque point impose la loi des mailles. Ces deux lois permettent de démontrer les formules d’association des résistances et des ponts diviseurs.',
        formulas: [
          {
            name: 'Lois de Kirchhoff (Nœuds et Mailles)',
            formula: '\\sum_{k} \\varepsilon_k I_k = 0 \\quad ; \\quad \\sum_{k} \\varepsilon_k U_k = 0',
            note: 'ε_k = +1 ou -1 selon l’orientation choisie par rapport au nœud ou au sens de parcours de la maille',
          },
          {
            name: 'Pont diviseur de tension et Pont diviseur de courant',
            formula: 'U_k = U \\cdot \\frac{R_k}{\\sum R_i} \\quad ; \\quad I_k = I \\cdot \\frac{G_k}{\\sum G_i} = I \\cdot \\frac{R_{\\text{autre}}}{R_1 + R_2}',
            note: 'Diviseur de tension : à vide (courant de sortie nul). Diviseur de courant : même tension aux bornes.',
          },
        ],
        keyRule:
          'On n’applique le pont diviseur de tension entre deux résistances $R_1$ et $R_2$ que si elles sont strictement parcourues par le même courant (aucun courant dérivé vers une charge connectée au point milieu).',
        workedExample: {
          title: 'Calcul de tension par réduction parallèle puis pont diviseur',
          statement:
            'Une source idéale $E = 18\\text{ V}$ alimente une résistance $R_1 = 3\\,\\Omega$ placée en série avec l’association parallèle de $R_2 = 12\\,\\Omega$ et $R_3 = 4\\,\\Omega$. Calculer la tension $U_2$ aux bornes de $R_2$ et le courant $I_3$ dans $R_3$.',
          methodSteps: [
            'On remplace $R_2 \\parallel R_3$ par sa résistance équivalente : $R_{23} = \\frac{R_2 R_3}{R_2 + R_3} = \\frac{12 \\times 4}{12 + 4} = \\frac{48}{16} = 3\\,\\Omega$.',
            'Par le pont diviseur de tension entre $R_1$ et $R_{23}$ en série : $U_2 = E \\cdot \\frac{R_{23}}{R_1 + R_{23}} = 18 \\times \\frac{3}{3 + 3} = 9\\text{ V}$.',
            'Le courant dans $R_3$ vaut $I_3 = \\frac{U_2}{R_3} = \\frac{9}{4} = 2{,}25\\text{ A}$ (vérifiable par diviseur de courant avec $I_{\\text{total}} = \\frac{18}{6} = 3\\text{ A}$ et $I_3 = 3 \\times \\frac{12}{12+4} = 2{,}25\\text{ A}$).',
          ],
          conclusion: 'La tension aux bornes de la branche parallèle est $U_2 = 9\\text{ V}$ et $I_3 = 2{,}25\\text{ A}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Topologie',
            stepTheme: 'blue',
            stepTitle: 'Vocabulaire topologique : nœuds, branches et mailles indépendantes',
            paragraphText:
              'Un **nœud** est une connexion électrique reliant au moins $3$ dipôles (une simple jonction entre $2$ dipôles n’est pas un nœud principal). Une **branche** est un ensemble de dipôles montés en série entre deux nœuds consécutifs : tous les dipôles d’une même branche sont traversés par la même intensité de courant. Une **maille** est un contour fermé constitué d’une succession de branches ne passant qu’une seule fois par un même nœud. Dans un réseau connexe comportant $B$ branches et $N$ nœuds, il existe $N - 1$ équations de nœuds indépendantes et $M = B - N + 1$ équations de mailles indépendantes.',
            formula: {
              name: 'Relation fondamentale de la topologie des réseaux',
              formula: 'B = (N - 1) + M \\implies M = B - N + 1',
              note: 'B : nombre de branches (inconnues de courant), N : nombre de nœuds, M : nombre de mailles indépendantes',
            },
            keyRule:
              'Pour déterminer les $B$ courants de branches d’un réseau, il faut résoudre un système de $B$ équations linéaires : $(N - 1)$ lois des nœuds et $(B - N + 1)$ lois des mailles.',
            konanTip:
              'Compte d’abord soigneusement les vrais nœuds (ceux à 3 fils ou plus) avant de poser tes équations de Kirchhoff.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p2_ex1',
              type: 'mcq',
              prompt:
                'Un circuit électrique connexe comporte $N = 4$ nœuds et $B = 6$ branches (comme un pont de Wheatstone alimenté). Combien d’équations de nœuds indépendantes et d’équations de mailles indépendantes faut-il écrire ?',
              options: [
                '$3$ équations de nœuds et $3$ équations de mailles',
                '$4$ équations de nœuds et $2$ équations de mailles',
                '$2$ équations de nœuds et $4$ équations de mailles',
                '$4$ équations de nœuds et $3$ équations de mailles',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Il y a $N - 1 = 4 - 1 = 3$ équations de nœuds indépendantes et $M = B - N + 1 = 6 - 4 + 1 = 3$ équations de mailles indépendantes, soit au total $3 + 3 = 6 = B$ équations pour les $6$ courants de branches.',
              hint: 'Applique $(N - 1)$ pour les nœuds et $M = B - N + 1$ pour les mailles.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Lois de Kirchhoff',
            stepTheme: 'violet',
            stepTitle: 'Première loi (Loi des Nœuds) et Seconde loi (Loi des Mailles)',
            paragraphText:
              'La **première loi de Kirchhoff (Loi des Nœuds)** traduit l’absence d’accumulation de charge électrique en un nœud : la somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en repartent ($\\sum I_{\\text{entrants}} = \\sum I_{\\text{sortants}}$). La **seconde loi de Kirchhoff (Loi des Mailles)** découle de la relation $U_{AB} = V_A - V_B$ : le long de toute maille fermée orientée selon un sens de parcours choisi arbitrairement, la somme algébrique des tensions comptées positivement dans le sens de parcours et négativement en sens inverse est nulle ($\\sum \\varepsilon_k U_k = 0$).',
            formula: {
              name: 'Énoncé algébrique des lois de Kirchhoff',
              formula: '\\sum_{k \\in \\text{nœud}} \\varepsilon_k I_k = 0 \\quad ; \\quad \\sum_{k \\in \\text{maille}} \\varepsilon_k U_k = 0',
              note: 'Par ailleurs, la puissance totale dans tout réseau vérifie le théorème de Tellegen : Σ (U_b · I_b) = 0',
            },
            keyRule:
              'Dans une maille, on choisit un sens de rotation (horaire ou anti-horaire) : toute flèche de tension de même sens que la rotation est affectée d’un $+$, toute flèche opposée d’un $-$.',
            konanTip:
              'Conservation de la puissance dans un réseau complet : la somme des puissances fournies par les générateurs égale toujours la somme des puissances reçues par les récepteurs.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p2_ex2',
              type: 'mcq',
              prompt:
                'En un nœud $A$ convergent quatre branches : $I_1 = 4\\text{ A}$ (entrant), $I_2 = -1{,}5\\text{ A}$ (entrant), $I_3 = 3\\text{ A}$ (sortant) et $I_4$ (sortant). Que vaut $I_4$ ?',
              options: ['$-0{,}5\\text{ A}$', '$+2{,}5\\text{ A}$', '$+0{,}5\\text{ A}$', '$-2{,}5\\text{ A}$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après la loi des nœuds : $I_{\\text{entrants}} = I_{\\text{sortants}} \\implies I_1 + I_2 = I_3 + I_4 \\implies 4 + (-1{,}5) = 3 + I_4 \\implies 2{,}5 = 3 + I_4 \\implies I_4 = -0{,}5\\text{ A}$.',
              hint: 'Écris $I_1 + I_2 = I_3 + I_4$ en conservant le signe algébrique de $I_2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Série & Parallèle',
            stepTheme: 'violet',
            stepTitle: 'Associations de résistances en série et en parallèle',
            paragraphText:
              'Des dipôles sont **en série** lorsqu’ils appartiennent à la même branche et sont traversés par le même courant $I$ : leurs tensions s’ajoutent et la résistance équivalente est la somme des résistances ($R_{\\text{éq}} = \\sum R_k$). Des dipôles sont **en parallèle** (ou en dérivation) lorsqu’ils sont connectés entre les deux mêmes nœuds et soumis à la même tension $U$ : leurs courants s’ajoutent et la conductance équivalente est la somme des conductances ($G_{\\text{éq}} = \\sum G_k$, soit $\\frac{1}{R_{\\text{éq}}} = \\sum \\frac{1}{R_k}$). Pour deux résistances en parallèle, la formule du produit sur la somme donne $R_{\\text{éq}} = \\frac{R_1 R_2}{R_1 + R_2}$.',
            formula: {
              name: 'Résistance équivalente série et parallèle',
              formula: 'R_{\\text{série}} = \\sum_{k=1}^n R_k \\quad ; \\quad \\frac{1}{R_{\\text{parallèle}}} = \\sum_{k=1}^n \\frac{1}{R_k} \\quad ; \\quad R_1 \\parallel R_2 = \\frac{R_1 R_2}{R_1 + R_2}',
              note: 'La résistance équivalente de plusieurs résistances en parallèle est toujours inférieure à la plus petite d’entre elles.',
            },
            keyRule:
              'Pour $n$ résistances identiques de valeur $R$ montées en parallèle, la résistance équivalente vaut simplement $R_{\\text{éq}} = \\frac{R}{n}$.',
            konanTip:
              'Attention : pour $3$ résistances en parallèle, $R_{\\text{éq}} \\neq \\frac{R_1 R_2 R_3}{R_1 + R_2 + R_3}$ ! La vraie formule est $R_{\\text{éq}} = \\frac{R_1 R_2 R_3}{R_1 R_2 + R_2 R_3 + R_1 R_3}$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p2_ex3',
              type: 'mcq',
              prompt:
                'Quelle est la résistance équivalente à trois résistances $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$ et $R_3 = 4\\,\\Omega$ associées toutes les trois en parallèle ?',
              options: ['$2\\,\\Omega$', '$4\\,\\Omega$', '$22\\,\\Omega$', '$1{,}33\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'On calcule $\\frac{1}{R_{\\text{éq}}} = \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{4} = \\frac{2 + 1 + 3}{12} = \\frac{6}{12} = \\frac{1}{2}\\text{ S} \\implies R_{\\text{éq}} = 2\\,\\Omega$.',
              hint: 'Additionne les inverses $\\frac{1}{6} + \\frac{1}{12} + \\frac{1}{4}$ en mettant au dénominateur commun $12$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Diviseur de tension',
            stepTheme: 'green',
            stepTitle: 'Pont diviseur de tension (à vide et en charge)',
            paragraphText:
              'Considérons $n$ résistances $R_1, R_2, \\dots, R_n$ montées **en série** et soumises à une tension totale $U$. Si aucun courant n’est prélevé aux nœuds intermédiaires (pont **à vide**), toutes les résistances sont parcourues par le même courant $I = \\frac{U}{\\sum R_i}$. La tension aux bornes de la résistance $R_k$ vaut alors $U_k = R_k I = U \\frac{R_k}{\\sum R_i}$. Si une résistance de charge $R_L$ est branchée en parallèle sur $R_2$ dans un pont à deux résistances $(R_1, R_2)$, il faut d’abord remplacer $R_2$ et $R_L$ par $R_{\\text{éq}} = R_2 \\parallel R_L$ avant d’appliquer la formule du diviseur de tension.',
            formula: {
              name: 'Formule du pont diviseur de tension (2 résistances en série)',
              formula: 'U_2 = U \\cdot \\frac{R_2}{R_1 + R_2}',
              note: 'Condition stricte : le courant qui traverse R_1 doit intégralement traverser R_2',
            },
            keyRule:
              'Dans un diviseur de tension, on multiplie la tension totale par la résistance dont on cherche la tension, divisée par la somme des résistances en série.',
            konanTip:
              'Piège classique aux examens : appliquer $U_2 = E \\frac{R_2}{R_1+R_2}$ alors qu’une branche connectée au point milieu prélève un courant $I_s \\neq 0$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p2_ex4',
              type: 'mcq',
              prompt:
                'Un pont diviseur alimenté par $E = 20\\text{ V}$ est formé de $R_1 = 4\\,\\text{k}\\Omega$ en série avec $R_2 = 12\\,\\text{k}\\Omega$. On branche en parallèle sur $R_2$ une résistance de charge $R_L = 12\\,\\text{k}\\Omega$. Que vaut la tension $U_2$ aux bornes de $R_2$ ?',
              options: ['$12\\text{ V}$', '$15\\text{ V}$', '$10\\text{ V}$', '$8\\text{ V}$'],
              correctAnswerIndex: 0,
              explanation:
                'En charge, $R_2$ et $R_L$ sont en parallèle : $R_{2L} = \\frac{12 \\times 12}{12 + 12} = 6\\,\\text{k}\\Omega$. Par diviseur de tension entre $R_1 = 4\\,\\text{k}\\Omega$ et $R_{2L} = 6\\,\\text{k}\\Omega$, on obtient $U_2 = 20 \\times \\frac{6}{4 + 6} = 12\\text{ V}$ (contre $15\\text{ V}$ à vide).',
              hint: 'Calcule d’abord $R_{2L} = R_2 \\parallel R_L$, puis applique le diviseur de tension entre $R_1$ et $R_{2L}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Diviseur de courant',
            stepTheme: 'green',
            stepTitle: 'Pont diviseur de courant entre branches parallèles',
            paragraphText:
              'Lorsqu’un courant principal $I$ arrive à un nœud et se partage entre $n$ résistances $R_1, R_2, \\dots, R_n$ montées **en parallèle** (de conductances $G_k = 1/R_k$), la tension commune aux bornes de l’association vaut $U = \\frac{I}{\\sum G_i}$. Le courant $I_k = G_k U$ dans la branche $k$ est proportionnel à sa conductance : $I_k = I \\frac{G_k}{\\sum G_i}$. Pour **deux résistances** $R_1$ et $R_2$ en parallèle, en remplaçant $G_k = 1/R_k$, on obtient la formule duale avec l’**autre** résistance au numérateur : $I_1 = I \\frac{R_2}{R_1 + R_2}$ et $I_2 = I \\frac{R_1}{R_1 + R_2}$.',
            formula: {
              name: 'Formule du pont diviseur de courant',
              formula: 'I_k = I \\cdot \\frac{G_k}{G_1 + G_2 + \\dots + G_n} \\quad ; \\quad (n=2) \\implies I_1 = I \\cdot \\frac{R_2}{R_1 + R_2}',
              note: 'Pour 2 résistances en parallèle, c’est la résistance de l’AUTRE branche qui figure au numérateur !',
            },
            keyRule:
              'Le courant choisit préférentiellement le chemin de moindre résistance : la plus petite résistance reçoit le plus grand courant.',
            konanTip:
              'Pour 3 résistances ou plus en parallèle, utilise toujours la formule avec les conductances $G_k = 1/R_k$ pour éviter toute erreur.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p2_ex5',
              type: 'mcq',
              prompt:
                'Un courant total $I = 10\\text{ A}$ se divise entre deux résistances en parallèle $R_1 = 20\\,\\Omega$ et $R_2 = 5\\,\\Omega$. Que vaut l’intensité $I_1$ traversant la résistance $R_1$ ?',
              options: ['$2\\text{ A}$', '$8\\text{ A}$', '$5\\text{ A}$', '$2{,}5\\text{ A}$'],
              correctAnswerIndex: 0,
              explanation:
                'Par la formule du diviseur de courant à deux branches, c’est la résistance de l’autre branche ($R_2 = 5\\,\\Omega$) qui est au numérateur : $I_1 = I \\cdot \\frac{R_2}{R_1 + R_2} = 10 \\times \\frac{5}{20 + 5} = 2\\text{ A}$ (et $I_2 = 8\\text{ A}$).',
              hint: 'Utilise $I_1 = I \\cdot \\frac{R_2}{R_1 + R_2}$ (avec $R_2$ au numérateur).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Courts-circuits',
            stepTheme: 'orange',
            stepTitle: 'Identification des branches court-circuitées et des branches ouvertes',
            paragraphText:
              'Avant de se lancer dans de longs calculs sur un schéma électrique, il faut repérer deux cas particuliers radicaux. Premièrement, toute résistance $R$ branchée en **parallèle avec un fil parfait** (court-circuit, $R_{\\text{fil}} = 0$) a une tension nulle à ses bornes ($U = 0$) : aucun courant ne la traverse ($I_R = 0$) et on peut la supprimer du schéma ($R \\parallel 0 = 0$). Deuxièmement, toute résistance $R$ placée **en série avec une branche ouverte** (interrupteur ouvert ou voltmètre idéal de résistance infinie) est parcourue par un courant nul ($I = 0$) : la chute de tension à ses bornes est nulle ($U_R = R I = 0$).',
            formula: {
              name: 'Simplifications extrêmes',
              formula: 'R \\parallel 0 = 0 \\quad (I_R = 0) \\quad ; \\quad R + \\infty = \\infty \\quad (I = 0 \\implies U_R = 0)',
              note: 'Un ampèremètre idéal a une résistance nulle (fil) ; un voltmètre idéal a une résistance infinie (circuit ouvert)',
            },
            keyRule:
              'Un fil de court-circuit en parallèle avec un dipôle absorbe $100\\%$ du courant et annule la tension aux bornes de ce dipôle.',
            konanTip:
              'Pour vérifier si deux résistances sont vraiment en parallèle, nomme les nœuds par des lettres ($A, B, C\\dots$) en donnant la même lettre à tous les points reliés par un simple fil.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p2_ex6',
              type: 'mcq',
              prompt:
                'Une résistance $R_1 = 10\\,\\Omega$ est en série avec un ensemble composé de $R_2 = 50\\,\\Omega$, $R_3 = 100\\,\\Omega$ et d’un fil parfait de résistance nulle, tous trois montés en parallèle. Quelle est la résistance équivalente totale du circuit ?',
              options: ['$10\\,\\Omega$', '$43{,}3\\,\\Omega$', '$0\\,\\Omega$', '$160\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'Le fil parfait ($0\\,\\Omega$) monté en parallèle avec $R_2$ et $R_3$ court-circuite complètement ces deux résistances : la résistance équivalente du bloc parallèle est $0\\,\\Omega$. Il ne reste donc que $R_1 = 10\\,\\Omega$ en série avec $0\\,\\Omega$, soit $R_{\\text{éq}} = 10\\,\\Omega$.',
              hint: 'Que vaut la résistance équivalente d’un bloc parallèle contenant un fil de résistance nulle ?',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch1_p3',
        order: 3,
        title: 'Pont de Wheatstone et transformation Étoile-Triangle de Kennelly',
        summary:
          'Condition d’équilibre du pont de Wheatstone, mesure de précision et formules de passage Étoile (Y) ↔ Triangle (Δ) de Kennelly.',
        conceptExplanation:
          'Certains réseaux résistifs comme le pont de Wheatstone non équilibré ne peuvent être réduits par de simples associations série ou parallèle. L’étude du pont de Wheatstone permet de déterminer la condition d’équilibre pour laquelle aucun courant ne circule dans la branche diagonale centrale (principe des capteurs de jauge de contrainte et de température). Lorsque le pont est déséquilibré, le théorème de Kennelly (transformation Étoile-Triangle ou $Y \\leftrightarrow \\Delta$) permet de remplacer trois résistances connectées en triangle par trois résistances équivalentes en étoile (ou inversement) afin de ramener le réseau à des associations série-parallèle classiques.',
        formulas: [
          {
            name: 'Condition d’équilibre du pont de Wheatstone',
            formula: 'I_G = 0 \\iff V_A = V_B \\iff R_1 \\cdot R_4 = R_2 \\cdot R_3',
            note: 'Les produits des résistances situées sur les branches opposées du losange sont égaux',
          },
          {
            name: 'Transformation Triangle (Δ) → Étoile (Y) de Kennelly',
            formula: 'R_A = \\frac{R_{AB} \\cdot R_{CA}}{R_{AB} + R_{BC} + R_{CA}}',
            note: 'Résistance étoile = (Produit des 2 résistances adjacentes du triangle) / (Somme des 3 résistances du triangle)',
          },
        ],
        keyRule:
          'Pont de Wheatstone équilibré : produits en croix égaux ($R_1 R_4 = R_2 R_3$). Transformation $\\Delta \\to Y$ pour 3 résistances identiques $R_\\Delta$ : $R_Y = R_\\Delta / 3$.',
        workedExample: {
          title: 'Calcul de la résistance équivalente d’un pont symétrique par Kennelly',
          statement:
            'Soit un pont de Wheatstone constitué de $5$ résistances identiques de valeur $R = 12\\,\\Omega$ (les $4$ côtés du losange et la diagonale centrale). Déterminer la résistance équivalente totale $R_{\\text{éq}}$ vue entre les deux sommets d’alimentation.',
          methodSteps: [
            'Remarquons d’abord que le pont est équilibré car $R \\cdot R = R \\cdot R$ : la résistance diagonale centrale n’est parcourue par aucun courant, on peut la retirer ou utiliser Kennelly.',
            'Avec Kennelly : le triangle supérieur formé de $3$ résistances $R = 12\\,\\Omega$ se transforme en une étoile de $3$ résistances $R_Y = \\frac{R}{3} = 4\\,\\Omega$.',
            'On obtient alors $R_Y = 4\\,\\Omega$ en série avec deux branches parallèles de résistance $R_Y + R = 4 + 12 = 16\\,\\Omega$ chacune.',
            'Ainsi $R_{\\text{éq}} = 4 + (16 \\parallel 16) = 4 + 8 = 12\\,\\Omega = R$.',
          ],
          conclusion: 'La résistance équivalente du pont formé de 5 résistances identiques $R$ vaut exactement $R = 12\\,\\Omega$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Wheatstone',
            stepTheme: 'blue',
            stepTitle: 'Structure du pont de Wheatstone et expression de la tension différentielle',
            paragraphText:
              'Un **pont de Wheatstone** est formé de deux diviseurs de tension montés en parallèle aux bornes d’une source de tension $E$ entre les nœuds $C$ et $D$ : une première branche contient $R_1$ et $R_2$ en série (avec le nœud milieu $A$), et une seconde branche contient $R_3$ et $R_4$ en série (avec le nœud milieu $B$). Entre les nœuds $A$ et $B$ est branché un détecteur (galvanomètre ou voltmètre de résistance $R_G$). À vide ($R_G \\to \\infty$, courant $I_{AB} = 0$), les deux diviseurs de tension donnent $V_A - V_D = E \\frac{R_2}{R_1+R_2}$ et $V_B - V_D = E \\frac{R_4}{R_3+R_4}$, d’où la tension différentielle $U_{AB} = V_A - V_B = E \\frac{R_2 R_3 - R_1 R_4}{(R_1+R_2)(R_3+R_4)}$.',
            formula: {
              name: 'Tension de déséquilibre à vide du pont de Wheatstone',
              formula: 'U_{AB0} = V_A - V_B = E \\cdot \\left( \\frac{R_2}{R_1 + R_2} - \\frac{R_4}{R_3 + R_4} \\right) = E \\cdot \\frac{R_2 R_3 - R_1 R_4}{(R_1 + R_2)(R_3 + R_4)}',
              note: 'R_1 et R_4 sont deux branches opposées du pont ; R_2 et R_3 sont les deux autres branches opposées',
            },
            keyRule:
              'La tension à vide $U_{AB0}$ entre les deux points milieux est la différence des deux ponts diviseurs de tension.',
            konanTip:
              'Cette tension $U_{AB0}$ sera exactement la f.é.m. de Thévenin $E_{Th}$ du pont vu entre les bornes $A$ et $B$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p3_ex1',
              type: 'mcq',
              prompt:
                'Dans un pont de Wheatstone alimenté par $E = 10\\text{ V}$, on a $R_1 = 100\\,\\Omega$, $R_2 = 100\\,\\Omega$ (branche $A$) et $R_3 = 100\\,\\Omega$, $R_4 = 300\\,\\Omega$ (branche $B$). Que vaut la tension à vide $U_{AB0} = V_A - V_B$ ?',
              options: ['$-2{,}5\\text{ V}$', '$+2{,}5\\text{ V}$', '$0\\text{ V}$', '$-5\\text{ V}$'],
              correctAnswerIndex: 0,
              explanation:
                'Par les deux diviseurs de tension : $V_A - V_D = 10 \\times \\frac{100}{100+100} = 5\\text{ V}$ et $V_B - V_D = 10 \\times \\frac{300}{100+300} = 7{,}5\\text{ V}$. Donc $U_{AB0} = V_A - V_B = 5 - 7{,}5 = -2{,}5\\text{ V}$.',
              hint: 'Calcule $V_A$ et $V_B$ par rapport à la masse $D$ avec deux diviseurs de tension, puis fais $V_A - V_B$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Équilibre du pont',
            stepTheme: 'violet',
            stepTitle: 'Condition d’équilibre du pont de Wheatstone et métrologie',
            paragraphText:
              'On dit que le pont de Wheatstone est **à l’équilibre** lorsque le courant $I_G$ traversant la branche centrale $AB$ est nul ($I_G = 0$), ce qui équivaut à l’égalité des potentiels $V_A = V_B$ ($U_{AB} = 0$). D’après l’expression de $U_{AB0}$, cette condition est réalisée si et seulement si les produits des résistances des branches opposées sont égaux : $R_1 R_4 = R_2 R_3$. À l’équilibre, la valeur de la résistance centrale $R_G$ n’a aucune influence : on peut la remplacer aussi bien par un circuit ouvert que par un court-circuit sans modifier les courants du pont.',
            formula: {
              name: 'Équation d’équilibre du pont de Wheatstone',
              formula: 'R_1 \\cdot R_4 = R_2 \\cdot R_3 \\iff \\frac{R_1}{R_2} = \\frac{R_3}{R_4}',
              note: 'L’équilibre est indépendant de la tension d’alimentation E et de la résistance du détecteur R_G',
            },
            keyRule:
              'À l’équilibre ($R_1 R_4 = R_2 R_3$), la branche centrale $AB$ a un courant nul et une tension nulle : on peut la supprimer pour calculer la résistance équivalente du pont.',
            konanTip:
              'Si la tension d’alimentation $E$ varie légèrement, un pont équilibré reste parfaitement équilibré : c’est pourquoi cette méthode de zéro est si précise en instrumentation.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p3_ex2',
              type: 'mcq',
              prompt:
                'Un pont de Wheatstone comporte $R_1 = 200\\,\\Omega$, $R_2 = 500\\,\\Omega$, une boîte de résistance réglable $R_3$ et une résistance inconnue $R_x = R_4$. L’équilibre ($I_G = 0$) est obtenu pour $R_3 = 140\\,\\Omega$. Que vaut $R_x$ ?',
              options: ['$350\\,\\Omega$', '$56\\,\\Omega$', '$700\\,\\Omega$', '$280\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'À l’équilibre, $R_1 R_x = R_2 R_3 \\implies R_x = \\frac{R_2 R_3}{R_1} = \\frac{500 \\times 140}{200} = 2{,}5 \\times 140 = 350\\,\\Omega$.',
              hint: 'Utilise la condition des produits en croix $R_1 R_x = R_2 R_3$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Triangle → Étoile',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Kennelly : passage Triangle (Δ) vers Étoile (Y)',
            paragraphText:
              'Trois résistances $R_{AB}, R_{BC}, R_{CA}$ connectées en **Triangle ($\\Delta$ ou $\\Pi$)** entre trois nœuds $A, B, C$ peuvent être remplacées de manière strictement équivalente (mêmes courants et potentiels aux nœuds $A, B, C$) par trois résistances $R_A, R_B, R_C$ connectées en **Étoile ($Y$ ou $T$)** autour d’un nœud central fictif $O$. En égalant les résistances vues entre chaque paire de bornes (la troisième étant en l’air), on démontre que chaque résistance de l’étoile est égale au **produit des deux résistances adjacentes du triangle divisé par la somme des trois résistances du triangle**.',
            formula: {
              name: 'Formules de Kennelly : Triangle (Δ) → Étoile (Y)',
              formula: 'R_A = \\frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} \\; ; \\; R_B = \\frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}} \\; ; \\; R_C = \\frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}',
              note: 'Le dénominateur est le même pour les 3 formules : la somme du périmètre du triangle',
            },
            keyRule:
              'Passage $\\Delta \\to Y$ : $R_{\\text{étoile}} = \\frac{\\text{Produit des 2 côtés du triangle encadrant le sommet}}{\\text{Somme des 3 côtés du triangle}}$.',
            konanTip:
              'Si les trois résistances du triangle sont égales à $R_\\Delta$, les trois résistances de l’étoile équivalente sont égales à $R_Y = \\frac{R_\\Delta}{3}$.',
            visualSchema: {
              type: 'flowchart',
              title: 'Méthode de réduction d’un pont déséquilibré par le théorème de Kennelly',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1. Tester l’équilibre de Wheatstone',
                    sublabel: 'Vérifier si R1·R4 = R2·R3 (si oui : retirer la branche centrale AB)',
                    kind: 'decision',
                    color: 'blue',
                  },
                  {
                    label: '2. Isoler un Triangle (Δ) de 3 résistances',
                    sublabel: 'Exemple : le triangle supérieur (R1, R3, RG) entre les nœuds C, A et B',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: '3. Appliquer Kennelly (Δ → Y)',
                    sublabel: 'Calculer RC, RA, RB avec Somme = R1 + R3 + RG au dénominateur',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: '4. Réduire en Série-Parallèle',
                    sublabel: 'Réq = RC + [(RA + R2) || (RB + R4)]',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p3_ex3',
              type: 'mcq',
              prompt:
                'Un triangle de résistances entre les nœuds $A, B, C$ a pour valeurs $R_{AB} = 10\\,\\Omega$, $R_{BC} = 20\\,\\Omega$ et $R_{CA} = 30\\,\\Omega$. Dans l’étoile équivalente $(R_A, R_B, R_C)$, que vaut la résistance $R_A$ reliée au sommet $A$ ?',
              options: ['$5\\,\\Omega$', '$3{,}33\\,\\Omega$', '$10\\,\\Omega$', '$15\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'Le sommet $A$ est encadré par les côtés $R_{AB} = 10\\,\\Omega$ et $R_{CA} = 30\\,\\Omega$. La somme des trois côtés vaut $10 + 20 + 30 = 60\\,\\Omega$. Donc $R_A = \\frac{R_{AB} \\cdot R_{CA}}{60} = \\frac{10 \\times 30}{60} = \\frac{300}{60} = 5\\,\\Omega$.',
              hint: 'Multiplie les deux résistances attachées au sommet $A$ ($R_{AB}$ et $R_{CA}$) et divise par la somme des trois résistances.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Étoile → Triangle',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Kennelly inverse : passage Étoile (Y) vers Triangle (Δ)',
            paragraphText:
              'Inversement, trois résistances $R_A, R_B, R_C$ montées en **Étoile ($Y$)** peuvent être remplacées par trois résistances $R_{AB}, R_{BC}, R_{CA}$ montées en **Triangle ($\\Delta$)**. Chaque résistance du triangle est égale à la **somme des produits deux à deux des résistances de l’étoile, divisée par la résistance de l’étoile opposée** au côté considéré. Par dualité, si l’on travaille avec les conductances $G_A, G_B, G_C$, la formule $Y \\to \\Delta$ s’écrit exactement comme la formule $\\Delta \\to Y$ des résistances : $G_{AB} = \\frac{G_A G_B}{G_A + G_B + G_C}$.',
            formula: {
              name: 'Formules de Kennelly : Étoile (Y) → Triangle (Δ)',
              formula: 'R_{AB} = \\frac{R_A R_B + R_B R_C + R_C R_A}{R_C} = R_A + R_B + \\frac{R_A R_B}{R_C}',
              note: 'De même : R_BC = (Σ produits 2 à 2) / R_A et R_CA = (Σ produits 2 à 2) / R_B',
            },
            keyRule:
              'Pour trois résistances identiques $R_Y$ en étoile, le triangle équivalent est formé de trois résistances égales à $R_\\Delta = 3 R_Y$.',
            konanTip:
              'Moyen mnémotechnique infaillible : $R_\\Delta = 3 R_Y$ (le triangle a des résistances $3$ fois plus grandes que l’étoile car en triangle les branches sont en parallèle).',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p3_ex4',
              type: 'mcq',
              prompt:
                'Trois résistances en étoile valent $R_A = 2\\,\\Omega$, $R_B = 3\\,\\Omega$ et $R_C = 6\\,\\Omega$. Que vaut la résistance $R_{AB}$ du triangle équivalent entre les nœuds $A$ et $B$ ?',
              options: ['$6\\,\\Omega$', '$9\\,\\Omega$', '$18\\,\\Omega$', '$1{,}5\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'La somme des produits deux à deux vaut $S_p = R_A R_B + R_B R_C + R_C R_A = 2 \\times 3 + 3 \\times 6 + 6 \\times 2 = 6 + 18 + 12 = 36\\,\\Omega^2$. En divisant par la résistance opposée $R_C = 6\\,\\Omega$, on obtient $R_{AB} = \\frac{36}{6} = 6\\,\\Omega$.',
              hint: 'Calcule $(R_A R_B + R_B R_C + R_C R_A) / R_C$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Pont déséquilibré',
            stepTheme: 'green',
            stepTitle: 'Calcul de la résistance équivalente d’un pont déséquilibré',
            paragraphText:
              'Pour calculer la résistance équivalente $R_{CD}$ d’un pont de Wheatstone déséquilibré ($R_1 R_4 \\neq R_2 R_3$) muni d’une résistance centrale $R_G$ entre $A$ et $B$, on remplace le triangle supérieur $(C, A, B)$ formé par $(R_1, R_3, R_G)$ par son étoile équivalente $(R_C, R_A, R_B)$ de centre $O$. Dès lors, la branche $O-A-D$ contient $R_A + R_2$ en série, la branche $O-B-D$ contient $R_B + R_4$ en série, ces deux branches sont en parallèle entre $O$ et $D$, et l’ensemble est en série avec $R_C$. On obtient $R_{CD} = R_C + \\frac{(R_A + R_2)(R_B + R_4)}{R_A + R_2 + R_B + R_4}$.',
            formula: {
              name: 'Résistance équivalente d’un pont après transformation Δ → Y',
              formula: 'R_{CD} = R_C + (R_A + R_2) \\parallel (R_B + R_4)',
              note: 'Où R_C = (R_1 R_3)/S, R_A = (R_1 R_G)/S et R_B = (R_3 R_G)/S avec S = R_1 + R_3 + R_G',
            },
            keyRule:
              'Une seule transformation Triangle $\\to$ Étoile suffit toujours à débloquer un pont de Wheatstone déséquilibré.',
            konanTip:
              'Choisis toujours de transformer le triangle qui contient les valeurs numériques les plus simples (ou deux résistances égales) pour accélérer le calcul.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans un pont de Wheatstone, le triangle supérieur a trois résistances identiques $R_1 = R_3 = R_G = 9\\,\\Omega$, et les deux résistances inférieures valent $R_2 = 3\\,\\Omega$ et $R_4 = 9\\,\\Omega$. Quelle est la résistance équivalente totale $R_{CD}$ du pont ?',
              options: ['$7\\,\\Omega$', '$9\\,\\Omega$', '$6\\,\\Omega$', '$12\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'Le triangle supérieur de trois résistances de $9\\,\\Omega$ donne une étoile de trois résistances $R_C = R_A = R_B = \\frac{9}{3} = 3\\,\\Omega$. On a alors $R_A + R_2 = 3 + 3 = 6\\,\\Omega$ en parallèle avec $R_B + R_4 = 3 + 9 = 12\\,\\Omega$, soit $6 \\parallel 12 = \\frac{72}{18} = 4\\,\\Omega$. En ajoutant $R_C = 3\\,\\Omega$ en série, $R_{CD} = 3 + 4 = 7\\,\\Omega$.',
              hint: 'Transforme d’abord le triangle $(9, 9, 9)$ en étoile $(3, 3, 3)$, puis applique $R_C + (R_A+R_2)\\parallel(R_B+R_4)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Pont de jauge',
            stepTheme: 'slate',
            stepTitle: 'Application aux capteurs : pont de jauge extensométrique',
            paragraphText:
              'En télécommunications et instrumentation industrielle, le pont de Wheatstone est utilisé pour convertir une petite variation de résistance $\\Delta R$ d’un capteur (jauge de contrainte, sonde Pt100) en une tension électrique mesurable. Si trois branches ont une résistance fixe $R$ et la quatrième est un capteur $R_4 = R + \\Delta R$ (montage quart de pont), la tension à vide vaut $U_{AB0} = E \\left(\\frac{1}{2} - \\frac{R + \\Delta R}{2R + \\Delta R}\\right) = -E \\frac{\\Delta R}{2(2R + \\Delta R)}$. Pour de faibles variations relatives ($\\Delta R \\ll R$), la réponse est quasi-linéaire : $|U_{AB0}| \\approx \\frac{E}{4} \\frac{\\Delta R}{R}$.',
            formula: {
              name: 'Sensibilité d’un quart de pont de Wheatstone (ΔR ≪ R)',
              formula: 'U_{AB0} = -\\frac{E \\cdot \\Delta R}{4R + 2\\Delta R} \\approx -\\frac{E}{4} \\cdot \\frac{\\Delta R}{R}',
              note: 'Un montage en pont complet (4 jauges actives) multiplie la sensibilité par 4 et élimine la non-linéarité : U_AB0 = E · (ΔR / R)',
            },
            keyRule:
              'En quart de pont ($\\Delta R \\ll R$), la tension de sortie à vide vaut le quart de la tension d’alimentation multiplié par la variation relative $\\Delta R / R$.',
            konanTip:
              'Retiens bien le facteur $1/4$ en quart de pont, $1/2$ en demi-pont et $1$ en pont complet.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch1_p3_ex6',
              type: 'mcq',
              prompt:
                'Un quart de pont de Wheatstone alimenté sous $E = 8\\text{ V}$ est constitué de trois résistances fixes $R = 100\\,\\Omega$ et d’un capteur $R_4 = R + \\Delta R$ subissant une variation $\\Delta R = 1\\,\\Omega$ ($\\Delta R / R = 1\\%$). Quelle est environ la valeur absolue de la tension de déséquilibre $|U_{AB0}|$ ?',
              options: ['$20\\text{ mV}$', '$80\\text{ mV}$', '$40\\text{ mV}$', '$2\\text{ mV}$'],
              correctAnswerIndex: 0,
              explanation:
                'Pour $\\Delta R \\ll R$, $|U_{AB0}| \\approx \\frac{E}{4} \\cdot \\frac{\\Delta R}{R} = \\frac{8}{4} \\times 0{,}01 = 2 \\times 0{,}01 = 0{,}02\\text{ V} = 20\\text{ mV}$ (valeur exacte : $19{,}9\\text{ mV}$).',
              hint: 'Applique $|U_{AB0}| \\approx \\frac{E}{4} \\frac{\\Delta R}{R}$.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : THÉORÈMES GÉNÉRAUX D’ANALYSE DES RÉSEAUX LINÉAIRES
  // ============================================================================
  {
    id: 'lmd_srit_l1_electrocine_ch2',
    subjectId: 'lmd_electrocinetique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (2PHY3101 Électrocinétique, Semestre 1)',
    title: 'Théorèmes Généraux d’Analyse des Réseaux Linéaires',
    summary:
      'Méthodes des mailles et des nœuds, théorème de superposition, théorème de Millman, théorèmes de Thévenin et de Norton, équivalence et transfert maximal de puissance.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch2_p1',
        order: 1,
        title: 'Méthodes systématiques, Superposition et Théorème de Millman',
        summary:
          'Courants de mailles, potentiels de nœuds, théorème de superposition linéaire et formule des nœuds de Millman.',
        conceptExplanation:
          'Pour éviter d’avoir à résoudre simultanément les $B$ équations de Kirchhoff d’un réseau complexe, l’électrocinétique dispose de méthodes réduisant le nombre d’inconnues (méthode des courants fictifs de mailles de Maxwell à $M$ inconnues, méthode des potentiels de nœuds à $N-1$ inconnues) et de théorèmes reposant sur la linéarité des dipôles : le théorème de superposition et le théorème de Millman (forme condensée de la loi des nœuds exprimée en potentiels).',
        formulas: [
          {
            name: 'Théorème de Superposition',
            formula: 'I_k = \\sum_{s=1}^{S} I_k^{(s)} \\quad ; \\quad U_k = \\sum_{s=1}^{S} U_k^{(s)}',
            note: 'Chaque état partiel (s) est calculé en ne gardant que la source s active et en éteignant toutes les autres sources indépendantes',
          },
          {
            name: 'Théorème de Millman au nœud A',
            formula: 'V_A = \\frac{\\sum_{k} \\frac{V_k}{R_k} + \\sum_{j} \\varepsilon_j I_{0j}}{\\sum_{k} \\frac{1}{R_k}}',
            note: 'Somme des (potentiels voisins / résistance de branche) + courants des sources de courant arrivant en A, divisée par la somme des conductances',
          },
        ],
        keyRule:
          'Le théorème de superposition s’applique aux courants et aux tensions (grandeurs linéaires), mais JAMAIS aux puissances ($P = RI^2$ est quadratique, donc $P \\neq P^{(1)} + P^{(2)}$).',
        workedExample: {
          title: 'Calcul d’un potentiel de nœud par le théorème de Millman',
          statement:
            'Trois branches parallèles sont connectées entre un nœud $A$ et la masse $M$ ($V_M = 0\\text{ V}$) : la branche 1 contient $(E_1 = 12\\text{ V}, R_1 = 2\\,\\Omega)$, la branche 2 contient une résistance pure $R_2 = 4\\,\\Omega$, et la branche 3 contient une source idéale de courant $I_0 = 1{,}5\\text{ A}$ dirigée de $M$ vers $A$ en parallèle avec $R_3 = 4\\,\\Omega$. Calculer $V_A$.',
          methodSteps: [
            'On applique le théorème de Millman au nœud $A$ par rapport à la référence $V_M = 0\\text{ V}$ :',
            'Numérateur : $\\frac{E_1}{R_1} + \\frac{0}{R_2} + \\frac{0}{R_3} + I_0 = \\frac{12}{2} + 0 + 0 + 1{,}5 = 6 + 1{,}5 = 7{,}5\\text{ A}$.',
            'Dénominateur (somme des conductances des branches résistives) : $\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{4} = 1\\text{ S}$.',
            'On en déduit $V_A = \\frac{7{,}5}{1} = 7{,}5\\text{ V}$.',
          ],
          conclusion: 'Le potentiel du nœud $A$ vaut $V_A = 7{,}5\\text{ V}$ en une seule ligne de calcul grâce à Millman.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Courants de mailles',
            stepTheme: 'green',
            stepTitle: 'Méthode des courants de mailles indépendants (Maxwell)',
            paragraphText:
              'Au lieu d’attribuer une inconnue de courant à chacune des $B$ branches, la **méthode des courants de mailles** attribue un courant fictif de circulation $J_m$ à chacune des $M = B - N + 1$ mailles indépendantes du réseau. La loi des nœuds est alors automatiquement vérifiée en tout nœud ! Le courant réel dans une branche appartenant à une seule maille $m$ est $J_m$, et le courant dans une branche commune à deux mailles $m$ et $p$ est la somme algébrique $J_m \\pm J_p$. Il suffit alors d’écrire les $M$ lois des mailles sous forme matricielle $[R][J] = [E]$.',
            formula: {
              name: 'Système matriciel des mailles',
              formula: '\\begin{pmatrix} R_{11} & R_{12} \\\\ R_{21} & R_{22} \\end{pmatrix} \\begin{pmatrix} J_1 \\\\ J_2 \\end{pmatrix} = \\begin{pmatrix} E_1 \\\\ E_2 \\end{pmatrix}',
              note: 'R_mm est la somme des résistances de la maille m ; R_mp = ± R_commune selon les sens des mailles m et p',
            },
            keyRule:
              'Si toutes les mailles indépendantes sont orientées dans le même sens (horaire), les résistances propres $R_{mm}$ sont positives et les résistances mutuelles $R_{mp}$ sont négatives ($-R_{\\text{commune}}$).',
            konanTip:
              'Privilégie la méthode des mailles lorsque le circuit comporte peu de mailles indépendantes ($M = 2$) et des sources de tension.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p1_ex1',
              type: 'mcq',
              prompt:
                'Deux mailles adjacentes 1 et 2, toutes deux orientées dans le sens horaire, partagent une branche centrale contenant une résistance $R_c = 5\\,\\Omega$. La maille 1 contient en outre $R_1 = 3\\,\\Omega$ et la maille 2 contient $R_2 = 7\\,\\Omega$. Que valent les coefficients $R_{11}$, $R_{22}$ et $R_{12}$ de la matrice des mailles ?',
              options: [
                '$R_{11} = 8\\,\\Omega$, $R_{22} = 12\\,\\Omega$ et $R_{12} = -5\\,\\Omega$',
                '$R_{11} = 3\\,\\Omega$, $R_{22} = 7\\,\\Omega$ et $R_{12} = +5\\,\\Omega$',
                '$R_{11} = 8\\,\\Omega$, $R_{22} = 12\\,\\Omega$ et $R_{12} = +5\\,\\Omega$',
                '$R_{11} = 15\\,\\Omega$, $R_{22} = 15\\,\\Omega$ et $R_{12} = -5\\,\\Omega$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La résistance propre de la maille 1 est la somme des résistances de la maille 1 : $R_{11} = R_1 + R_c = 3 + 5 = 8\\,\\Omega$. Pour la maille 2 : $R_{22} = R_2 + R_c = 7 + 5 = 12\\,\\Omega$. Les deux courants de mailles $J_1$ et $J_2$ traversant la branche centrale $R_c$ en sens opposés, la résistance mutuelle vaut $R_{12} = R_{21} = -R_c = -5\\,\\Omega$.',
              hint: '$R_{mm}$ est la somme des résistances de la maille $m$, et $R_{12} = -R_c$ quand les deux mailles tournent dans le même sens.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Potentiels de nœuds',
            stepTheme: 'green',
            stepTitle: 'Méthode des potentiels de nœuds',
            paragraphText:
              'La **méthode des potentiels de nœuds** est la méthode duale de celle des mailles : on choisit un nœud de référence (la **masse**, de potentiel nul $V_{\\text{réf}} = 0\\text{ V}$) et on prend comme inconnues les potentiels $V_1, V_2, \\dots, V_{N-1}$ des $N - 1$ autres nœuds. La loi des mailles est alors automatiquement vérifiée partout puisque chaque tension de branche s’écrit $U_{ij} = V_i - V_j$. On écrit la loi des nœuds en chacun des $N - 1$ nœuds en exprimant les courants à l’aide des conductances, ce qui conduit au système matriciel $[G][V] = [I_s]$.',
            formula: {
              name: 'Système matriciel des nœuds',
              formula: '[G] \\cdot [V] = [I_s] \\quad \\text{avec} \\quad G_{ii} = \\sum_{k \\text{ relié à } i} G_k \\quad ; \\quad G_{ij} = -G_{\\text{entre } i \\text{ et } j}',
              note: 'Réduit le système à N - 1 équations (seulement 1 équation si le circuit n’a que N = 2 nœuds principaux !)',
            },
            keyRule:
              'Dans un circuit à $N = 2$ nœuds principaux (plusieurs branches en parallèle), la méthode des potentiels de nœuds se réduit à une seule équation : le théorème de Millman.',
            konanTip:
              'Choisis toujours comme masse ($V = 0$) le nœud auquel sont connectées le plus grand nombre de branches ou de sources de tension.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p1_ex2',
              type: 'mcq',
              prompt:
                'Un réseau électrique possède $N = 3$ nœuds principaux et $B = 7$ branches en parallèle entre ces nœuds. Combien d’inconnues comporte la méthode des potentiels de nœuds comparée à la méthode des courants de mailles ?',
              options: [
                '$2$ potentiels de nœuds contre $5$ courants de mailles',
                '$3$ potentiels de nœuds contre $7$ courants de mailles',
                '$5$ potentiels de nœuds contre $2$ courants de mailles',
                '$2$ potentiels de nœuds contre $4$ courants de mailles',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La méthode des potentiels de nœuds ne nécessite que $N - 1 = 3 - 1 = 2$ inconnues, tandis que la méthode des mailles nécessite $M = B - N + 1 = 7 - 3 + 1 = 5$ inconnues. Le choix de la méthode des nœuds est ici beaucoup plus rapide.',
              hint: 'Calcule $N - 1$ pour les nœuds et $M = B - N + 1$ pour les mailles.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Superposition',
            stepTheme: 'violet',
            stepTitle: 'Théorème de superposition dans un réseau linéaire',
            paragraphText:
              'Dans tout réseau électrique linéaire comportant plusieurs sources indépendantes (de tension et/ou de courant), le courant dans une branche quelconque (ou la tension entre deux points quelconques) est égal à la **somme algébrique** des courants (ou des tensions) que produirait chacune des sources indépendantes **agissant seule**, toutes les autres sources indépendantes étant **éteintes** (remplacées par leurs résistances internes : une source idéale de tension $E = 0$ devient un court-circuit, une source idéale de courant $I_0 = 0$ devient un circuit ouvert).',
            formula: {
              name: 'Principe de superposition linéaire',
              formula: 'I = I^{(1)} + I^{(2)} + \\dots + I^{(S)} \\quad ; \\quad U = U^{(1)} + U^{(2)} + \\dots + U^{(S)}',
              note: 'Si le réseau contient des sources commandées (dépendantes), on ne les éteint JAMAIS : elles restent actives dans chaque sous-schéma.',
            },
            keyRule:
              'Pour éteindre les sources indépendantes : source de tension idéale $\\to$ fil (court-circuit) ; source de courant idéale $\\to$ coupure (circuit ouvert).',
            konanTip:
              'Garde exactement le même sens d’orientation de la flèche du courant cherché $I$ dans tous les états partiels $I^{(1)}, I^{(2)}\\dots$ avant d’additionner !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p1_ex3',
              type: 'mcq',
              prompt:
                'Une résistance $R = 4\\,\\Omega$ est placée dans la branche centrale d’un circuit à deux sources $E_1$ et $E_2$. Quand $E_1$ agit seule ($E_2 = 0$), le courant dans $R$ de $A$ vers $B$ vaut $I^{(1)} = +3\\text{ A}$. Quand $E_2$ agit seule ($E_1 = 0$), le courant dans $R$ de $A$ vers $B$ vaut $I^{(2)} = -1\\text{ A}$. Que valent le courant réel $I$ et la puissance Joule $P_J$ dissipée dans $R$ lorsque les deux sources agissent ensemble ?',
              options: [
                '$I = 2\\text{ A}$ et $P_J = 16\\text{ W}$',
                '$I = 2\\text{ A}$ et $P_J = 40\\text{ W}$',
                '$I = 4\\text{ A}$ et $P_J = 64\\text{ W}$',
                '$I = 2\\text{ A}$ et $P_J = 32\\text{ W}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par le théorème de superposition, le courant réel vaut $I = I^{(1)} + I^{(2)} = 3 + (-1) = 2\\text{ A}$. La puissance dissipée par effet Joule se calcule à partir du courant total : $P_J = R I^2 = 4 \\times 2^2 = 16\\text{ W}$ (et surtout pas $P^{(1)} + P^{(2)} = 36 + 4 = 40\\text{ W}$ car la puissance n’est pas linéaire !).',
              hint: 'Additionne d’abord les courants $I = I^{(1)} + I^{(2)}$, puis calcule $P_J = R I^2$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Millman',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Millman (loi des nœuds en termes de potentiels)',
            paragraphText:
              'Soit un nœud $A$ auquel aboutissent $n$ branches résistives de résistances $R_k$ ($k = 1\\dots n$) dont les autres extrémités sont portées aux potentiels $V_k$, ainsi que $m$ branches contenant des sources idéales de courant d’intensités $I_{0j}$. En écrivant la loi des nœuds en $A$ : $\\sum_{k=1}^n \\frac{V_k - V_A}{R_k} + \\sum_{j=1}^m \\varepsilon_j I_{0j} = 0$, et en isolant $V_A$, on obtient le **théorème de Millman** : le potentiel $V_A$ est la moyenne des potentiels voisins pondérés par les conductances $G_k = 1/R_k$ (augmentée des courants injectés), divisée par la somme des conductances.',
            formula: {
              name: 'Formule générale de Millman',
              formula: 'V_A = \\frac{\\sum_{k=1}^n \\frac{V_k}{R_k} + \\sum_{j=1}^m \\varepsilon_j I_{0j}}{\\sum_{k=1}^n \\frac{1}{R_k}} = \\frac{\\sum_{k=1}^n G_k V_k + \\sum_{j=1}^m \\varepsilon_j I_{0j}}{\\sum_{k=1}^n G_k}',
              note: 'ε_j = +1 si la source de courant I_0j est dirigée vers le nœud A, et -1 si elle s’éloigne de A',
            },
            keyRule:
              'Attention au dénominateur de Millman : une branche contenant une source de courant idéale (résistance interne infinie) apporte son courant $\\pm I_{0j}$ au numérateur, mais apporte $0$ au dénominateur !',
            konanTip:
              'Si une résistance $R_s$ est en série avec une source idéale de courant $I_0$ dans une même branche, elle ne change rien au courant $I_0$ et n’intervient donc PAS dans le dénominateur de Millman.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p1_ex4',
              type: 'mcq',
              prompt:
                'Au nœud $A$ arrivent trois branches reliées à la masse ($0\\text{ V}$) : une branche avec $(E_1 = 20\\text{ V}, R_1 = 5\\,\\Omega)$, une branche avec $(E_2 = -10\\text{ V}, R_2 = 5\\,\\Omega)$ et une branche avec une résistance seule $R_3 = 2{,}5\\,\\Omega$. Que vaut le potentiel $V_A$ ?',
              options: ['$+2{,}5\\text{ V}$', '$+5\\text{ V}$', '$+3{,}75\\text{ V}$', '$0\\text{ V}$'],
              correctAnswerIndex: 0,
              explanation:
                'Par le théorème de Millman : $V_A = \\frac{\\frac{E_1}{R_1} + \\frac{E_2}{R_2} + \\frac{0}{R_3}}{\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}} = \\frac{\\frac{20}{5} + \\frac{-10}{5} + 0}{\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{2{,}5}} = \\frac{4 - 2}{0{,}2 + 0{,}2 + 0{,}4} = \\frac{2}{0{,}8} = +2{,}5\\text{ V}$.',
              hint: 'Calcule le numérateur $\\frac{20}{5} - \\frac{10}{5}$ et divise par $\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{2{,}5}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Pièges de Millman',
            stepTheme: 'orange',
            stepTitle: 'Cas particuliers dans Millman : branche sans résistance et source de courant',
            paragraphText:
              'Deux erreurs classiques doivent être évitées lors de l’application du théorème de Millman au nœud $A$. Premièrement, si l’une des branches reliant le nœud $A$ à la masse contient **uniquement une source idéale de tension** $E_0$ (sans résistance en série, $R = 0$), le potentiel du nœud $A$ est directement imposé par cette source : $V_A = E_0$, et il est interdit (et inutile) d’écrire Millman avec une division par zéro. Deuxièmement, si une branche contient une source idéale de courant $I_0$ en série avec une résistance $R_s$, la résistance équivalente de la branche est infinie : elle contribue uniquement par $\\pm I_0$ au numérateur et par $0$ au dénominateur.',
            formula: {
              name: 'Contribution d’une branche (I_0 en série avec R_s) dans Millman',
              formula: '\\text{Numérateur : } \\pm I_0 \\quad ; \\quad \\text{Dénominateur : } 0 \\;\\; (\\text{et non } 1/R_s)',
              note: 'Une résistance en série avec une source idéale de courant est absorbée par la source de courant vis-à-vis du reste du circuit',
            },
            keyRule:
              'Une résistance en parallèle avec une source idéale de tension n’influence pas la tension du nœud ; une résistance en série avec une source idéale de courant n’influence pas le courant injecté au nœud.',
            konanTip:
              'C’est l’un des pièges favoris des QCM d’électrocinétique : mettre une résistance $R_s$ en série avec une source de courant $I_0$ pour voir si l’étudiant ajoute à tort $1/R_s$ au dénominateur de Millman !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p1_ex5',
              type: 'mcq',
              prompt:
                'Entre un nœud $A$ et la masse ($0\\text{ V}$) sont connectées deux branches : la branche 1 contient $(E_1 = 10\\text{ V}$ en série avec $R_1 = 5\\,\\Omega)$ et la branche 2 contient une source idéale de courant $I_0 = 2\\text{ A}$ (orientée vers $A$) **en série** avec une résistance $R_2 = 5\\,\\Omega$. Que vaut le potentiel $V_A$ ?',
              options: ['$20\\text{ V}$', '$10\\text{ V}$', '$15\\text{ V}$', '$5\\text{ V}$'],
              correctAnswerIndex: 0,
              explanation:
                'La branche 2 est une source de courant $I_0 = 2\\text{ A}$ en série avec $R_2$ : elle impose un courant de $2\\text{ A}$ vers le nœud $A$ quelle que soit la valeur de $R_2$. Dans Millman, $R_2$ n’apparaît donc pas au dénominateur : $V_A = \\frac{\\frac{E_1}{R_1} + I_0}{\\frac{1}{R_1}} = E_1 + R_1 I_0 = 10 + 5 \\times 2 = 20\\text{ V}$.',
              hint: 'La branche 2 injecte exactement $I_0 = 2\\text{ A}$ en $A$ : tout ce courant augmenté de celui de la branche 1 fixe $V_A$. N’inclus pas $1/R_2$ au dénominateur !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'slate',
            stepTitle: 'Comparaison Superposition vs Millman sur un réseau à deux générateurs',
            paragraphText:
              'Lorsqu’on cherche le courant dans une branche de charge $R_3$ alimentée en parallèle par deux générateurs réels $(E_1, R_1)$ et $(E_2, R_2)$, le théorème de Millman donne la tension $U_{AB} = V_A - V_B$ en une seule fraction : $U_{AB} = \\frac{E_1/R_1 + E_2/R_2}{1/R_1 + 1/R_2 + 1/R_3}$, d’où $I_3 = U_{AB}/R_3$. Le théorème de superposition nécessite quant à lui deux réductions série-parallèle et deux diviseurs de courant successifs.En examen, sauf si l’énoncé impose explicitement d’utiliser le théorème de superposition, le théorème de Millman est presque toujours trois fois plus rapide.',
            formula: {
              name: 'Courant dans la charge centrale par Millman',
              formula: 'I_3 = \\frac{V_A}{R_3} = \\frac{R_2 E_1 + R_1 E_2}{R_1 R_2 + R_1 R_3 + R_2 R_3}',
              note: 'On retrouve immédiatement la décomposition linéaire I_3 = α E_1 + β E_2 du théorème de superposition',
            },
            keyRule:
              'En examen, utilise Millman dès que plusieurs branches sont en parallèle entre deux nœuds ou autour d’un nœud d’entrée (amplificateur opérationnel, ponts).',
            konanTip:
              'Vérifie toujours l’homogénéité de ta formule finale : dans $\\frac{R_2 E_1 + R_1 E_2}{R_1 R_2 + R_1 R_3 + R_2 R_3}$, on a bien des $[\\Omega \\cdot \\text{V}] / [\\Omega^2] = [\\text{V}/\\Omega] = [\\text{A}]$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p1_ex6',
              type: 'mcq',
              prompt:
                'Deux générateurs identiques $(E_1 = E_2 = 12\\text{ V}, r_1 = r_2 = 2\\,\\Omega)$ sont branchés en parallèle pour alimenter une charge $R_L = 5\\,\\Omega$. Quel est le courant $I_L$ traversant la charge $R_L$ ?',
              options: ['$2\\text{ A}$', '$1{,}71\\text{ A}$', '$2{,}4\\text{ A}$', '$4\\text{ A}$'],
              correctAnswerIndex: 0,
              explanation:
                'Par Millman au nœud positif $A$ de la charge : $V_A = \\frac{12/2 + 12/2}{1/2 + 1/2 + 1/5} = \\frac{12}{1 + 0{,}2} = \\frac{12}{1{,}2} = 10\\text{ V}$. Le courant dans la charge vaut donc $I_L = \\frac{V_A}{R_L} = \\frac{10}{5} = 2\\text{ A}$ (chaque générateur fournit $1\\text{ A}$).',
              hint: 'Calcule $V_A$ par Millman puis divise par $R_L = 5\\,\\Omega$.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch2_p2',
        order: 2,
        title: 'Théorèmes de Thévenin, de Norton et équivalence des modèles',
        summary:
          'Réduction de tout dipôle actif linéaire entre deux bornes A et B au générateur équivalent de Thévenin (E_Th, R_Th) ou de Norton (I_N, R_N) et passage Thévenin ↔ Norton.',
        conceptExplanation:
          'Lorsqu’on souhaite étudier l’effet d’une résistance de charge variable $R_L$ branchée entre deux bornes $A$ et $B$ d’un réseau linéaire complexe, il est fastidieux de recalculer tout le circuit pour chaque valeur de $R_L$. Les théorèmes de Thévenin et de Norton affirment que tout le reste du réseau linéaire vu entre $A$ et $B$ se comporte exactement comme un unique générateur réel de tension $(E_{Th}, R_{Th})$ ou un unique générateur réel de courant $(I_N, R_N)$, liés par la relation d’équivalence $E_{Th} = R_{Th} I_N$ et $R_N = R_{Th}$.',
        formulas: [
          {
            name: 'Générateur Équivalent de Thévenin (GET)',
            formula: 'E_{Th} = U_{AB0} = (V_A - V_B)_{\\text{à vide (sans charge)}} \\quad ; \\quad R_{Th} = R_{AB \\text{ (sources indépendantes éteintes)}}',
            note: 'Avec la charge R_L rebranchée entre A et B : I_L = E_Th / (R_Th + R_L)',
          },
          {
            name: 'Générateur Équivalent de Norton (GEN) et Équivalence',
            formula: 'I_N = I_{AB,\\text{cc}} \\quad ; \\quad R_N = R_{Th} \\quad ; \\quad E_{Th} = R_{Th} \\cdot I_N',
            note: 'I_N est le courant de court-circuit circulant de A vers B dans un fil reliant A et B',
          },
        ],
        keyRule:
          'Pour calculer $E_{Th}$ ou $R_{Th}$ entre $A$ et $B$, la première étape obligatoire est de DÉBRANCHER la charge $R_L$ située entre $A$ et $B$.',
        workedExample: {
          title: 'Détermination du générateur de Thévenin d’un pont diviseur',
          statement:
            'Une source $E = 24\\text{ V}$ alimente un pont diviseur $R_1 = 6\\,\\Omega$ et $R_2 = 12\\,\\Omega$. On connecte une résistance de charge $R_L$ aux bornes $A$ et $B$ de $R_2$. Déterminer $(E_{Th}, R_{Th})$ vu entre $A$ et $B$, puis calculer le courant $I_L$ pour $R_L = 6\\,\\Omega$.',
          methodSteps: [
            '1) On débranche la charge $R_L$ entre $A$ et $B$. La tension à vide $U_{AB0}$ aux bornes de $R_2$ est donnée par le pont diviseur de tension : $E_{Th} = U_{AB0} = E \\frac{R_2}{R_1 + R_2} = 24 \\times \\frac{12}{6 + 12} = 16\\text{ V}$.',
            '2) On éteint la source idéale $E$ (remplacée par un fil de court-circuit). Vue entre $A$ et $B$, la résistance $R_1$ se retrouve en parallèle avec $R_2$ : $R_{Th} = R_1 \\parallel R_2 = \\frac{6 \\times 12}{6 + 12} = 4\\,\\Omega$.',
            '3) On rebranche $R_L = 6\\,\\Omega$ sur le modèle de Thévenin $(E_{Th} = 16\\text{ V}, R_{Th} = 4\\,\\Omega)$ : $I_L = \\frac{E_{Th}}{R_{Th} + R_L} = \\frac{16}{4 + 6} = 1{,}6\\text{ A}$.',
          ],
          conclusion: 'Le dipôle actif est équivalent à $(E_{Th} = 16\\text{ V}, R_{Th} = 4\\,\\Omega)$ et débite $1{,}6\\text{ A}$ dans $R_L = 6\\,\\Omega$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Thévenin',
            stepTheme: 'violet',
            stepTitle: 'Énoncé et paramètres du théorème de Thévenin (E_Th, R_Th)',
            paragraphText:
              'D’après le **théorème de Thévenin**, tout réseau électrique linéaire actif vu entre deux bornes $A$ et $B$ peut être remplacé par un **Générateur Équivalent de Thévenin (GET)** constitué d’une source idéale de tension de f.é.m. $E_{Th}$ en série avec une résistance équivalente $R_{Th}$. La f.é.m. $E_{Th}$ est égale à la **tension à vide** $U_{AB0} = (V_A - V_B)_0$ mesurée entre $A$ et $B$ lorsque la charge extérieure est débranchée ($I_{AB} = 0$). La résistance $R_{Th}$ est la résistance équivalente du réseau vu entre $A$ et $B$ lorsque toutes ses sources indépendantes sont éteintes.',
            formula: {
              name: 'Définition de E_Th et R_Th',
              formula: 'E_{Th} = (V_A - V_B)_{\\text{à vide}} \\quad ; \\quad R_{Th} = R_{AB0} \\quad \\Longrightarrow \\quad U_{AB} = E_{Th} - R_{Th} I_{AB}',
              note: 'Une fois E_Th et R_Th déterminés, le courant dans toute charge R_L branchée entre A et B vaut I_L = E_Th / (R_Th + R_L)',
            },
            keyRule:
              '$E_{Th}$ se calcule toujours charge débranchée (circuit ouvert entre $A$ et $B$).',
            konanTip:
              'Quand tu éteins la source de tension $E$ d’un pont diviseur $(R_1, R_2)$ pour calculer $R_{Th}$, $R_1$ et $R_2$ se retrouvent **en parallèle** vues entre $A$ et $B$ ($R_{Th} = R_1 \\parallel R_2$).',
            visualSchema: {
              type: 'flowchart',
              title: 'Algorithme en 4 étapes pour appliquer le théorème de Thévenin',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: 'Étape 1 : Débrancher la charge RL',
                    sublabel: 'Ouvrir la branche entre les bornes A et B où l’on cherche le courant',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: 'Étape 2 : Calculer la tension à vide ETh = UAB0',
                    sublabel: 'Utiliser diviseur de tension, Millman ou loi des mailles avec IAB = 0',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: 'Étape 3 : Éteindre les sources et calculer RTh',
                    sublabel: 'Source de tension → fil ; Source de courant → coupure ; calculer RAB',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: 'Étape 4 : Rebrancher RL sur (ETh, RTh)',
                    sublabel: 'Calculer IL = ETh / (RTh + RL) et UAB = RL · IL',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p2_ex1',
              type: 'mcq',
              prompt:
                'Une source idéale $E = 30\\text{ V}$ alimente en série deux résistances $R_1 = 10\\,\\Omega$ et $R_2 = 15\\,\\Omega$. Quels sont les éléments $(E_{Th}, R_{Th})$ du générateur de Thévenin vu aux bornes $A$ et $B$ de la résistance $R_2$ ?',
              options: [
                '$E_{Th} = 18\\text{ V}$ et $R_{Th} = 6\\,\\Omega$',
                '$E_{Th} = 18\\text{ V}$ et $R_{Th} = 25\\,\\Omega$',
                '$E_{Th} = 12\\text{ V}$ et $R_{Th} = 6\\,\\Omega$',
                '$E_{Th} = 30\\text{ V}$ et $R_{Th} = 15\\,\\Omega$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par diviseur de tension à vide : $E_{Th} = E \\frac{R_2}{R_1 + R_2} = 30 \\times \\frac{15}{10 + 15} = 18\\text{ V}$. En éteignant $E$ (remplacée par un fil), $R_1$ et $R_2$ sont en parallèle entre $A$ et $B$ : $R_{Th} = R_1 \\parallel R_2 = \\frac{10 \\times 15}{10 + 15} = \\frac{150}{25} = 6\\,\\Omega$.',
              hint: 'Utilise le pont diviseur pour $E_{Th}$ et mets $R_1$ en parallèle avec $R_2$ pour $R_{Th}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Norton',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Norton (I_N, R_N) et courant de court-circuit',
            paragraphText:
              'Par dualité, le **théorème de Norton** établit que tout réseau linéaire actif vu entre deux bornes $A$ et $B$ peut être remplacé par un **Générateur Équivalent de Norton (GEN)** constitué d’une source idéale de courant d’intensité $I_N$ montée **en parallèle** avec une résistance équivalente $R_N$. Le courant de Norton $I_N$ est égal au **courant de court-circuit** $I_{AB,\\text{cc}}$ qui circulerait de $A$ vers $B$ si l’on reliait directement les bornes $A$ et $B$ par un fil parfait ($U_{AB} = 0$). La résistance de Norton est identique à celle de Thévenin : $R_N = R_{Th}$.',
            formula: {
              name: 'Définition de I_N et R_N',
              formula: 'I_N = I_{AB,\\text{cc}} \\; (\\text{avec } U_{AB} = 0) \\quad ; \\quad R_N = R_{Th}',
              note: 'Le courant dans une charge R_L branchée sur le modèle de Norton s’obtient par diviseur de courant : I_L = I_N · R_N / (R_N + R_L)',
            },
            keyRule:
              'Pour calculer le courant de Norton $I_N$, on remplace la charge entre $A$ et $B$ par un fil de court-circuit et on calcule le courant qui traverse ce fil de $A$ vers $B$.',
            konanTip:
              'Le fait de court-circuiter $A$ et $B$ annule souvent la tension aux bornes d’une résistance en parallèle avec $AB$, ce qui simplifie énormément le calcul de $I_N$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p2_ex2',
              type: 'mcq',
              prompt:
                'Reprenons le circuit où $E = 30\\text{ V}$ alimente $R_1 = 10\\,\\Omega$ en série avec $R_2 = 15\\,\\Omega$ (bornes $A$ et $B$ aux bornes de $R_2$). Que vaut le courant de Norton $I_N$ vu entre $A$ et $B$ ?',
              options: ['$3\\text{ A}$', '$2\\text{ A}$', '$1{,}2\\text{ A}$', '$5\\text{ A}$'],
              correctAnswerIndex: 0,
              explanation:
                'En court-circuitant $A$ et $B$ par un fil, la résistance $R_2 = 15\\,\\Omega$ est court-circuitée ($I_{R2} = 0$). Tout le courant débité par $E$ à travers $R_1$ passe dans le fil de court-circuit $AB$ : $I_N = I_{\\text{cc}} = \\frac{E}{R_1} = \\frac{30}{10} = 3\\text{ A}$. (On vérifie que $E_{Th} = R_{Th} I_N = 6 \\times 3 = 18\\text{ V}$).',
              hint: 'Quand tu relies $A$ et $B$ par un fil, $R_2$ est court-circuitée : seul $R_1$ limite le courant venant de $E$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Équivalence Th ↔ N',
            stepTheme: 'green',
            stepTitle: 'Équivalence Thévenin ↔ Norton et réduction de réseaux par transformations successives',
            paragraphText:
              'Les modèles de Thévenin $(E_{Th}, R_{Th} \\text{ en série})$ et de Norton $(I_N, R_N \\text{ en parallèle})$ ont exactement la même caractéristique externe $U = E_{Th} - R_{Th} I$ si et seulement si $R_N = R_{Th}$ et $E_{Th} = R_{Th} I_N$. Cette **équivalence Thévenin-Norton** permet de simplifier un réseau de proche en proche : on transforme une source de tension en série avec une résistance $(E, R)$ en une source de courant $I_0 = E/R$ en parallèle avec $R$, on regroupe les éléments en parallèle (les résistances se combinent en parallèle et les sources de courant en parallèle s’additionnent algébriquement), puis on repasse en Thévenin.',
            formula: {
              name: 'Formules de passage Thévenin ↔ Norton',
              formula: 'E_{Th} = R_{Th} \\cdot I_N \\iff I_N = \\frac{E_{Th}}{R_{Th}} \\quad \\text{avec} \\quad R_{Th} = R_N',
              note: 'En série : les f.é.m. E_k s’additionnent et les R_k s’additionnent. En parallèle : les c.é.m. I_0k s’additionnent et les G_k s’additionnent.',
            },
            keyRule:
              'Tension EN SÉRIE avec résistance $(E, R) \\Longleftrightarrow$ Courant EN PARALLÈLE avec la même résistance $(I_0 = E/R, R)$.',
            konanTip:
              'Quand deux générateurs de Thévenin $(E_1, R_1)$ et $(E_2, R_2)$ sont en parallèle, transforme-les en Norton : leurs courants $I_{N1} = E_1/R_1$ et $I_{N2} = E_2/R_2$ s’ajoutent directement (c’est la démonstration de Millman !).',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p2_ex3',
              type: 'mcq',
              prompt:
                'Une source réelle de courant $(I_0 = 4\\text{ A}$ en parallèle avec $R_1 = 3\\,\\Omega)$ est montée en série avec une résistance $R_2 = 5\\,\\Omega$. Quel est le générateur équivalent de Thévenin $(E_{Th}, R_{Th})$ de l’ensemble ?',
              options: [
                '$E_{Th} = 12\\text{ V}$ et $R_{Th} = 8\\,\\Omega$',
                '$E_{Th} = 32\\text{ V}$ et $R_{Th} = 8\\,\\Omega$',
                '$E_{Th} = 12\\text{ V}$ et $R_{Th} = 1{,}875\\,\\Omega$',
                '$E_{Th} = 20\\text{ V}$ et $R_{Th} = 8\\,\\Omega$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On transforme d’abord la source de courant $(I_0 = 4\\text{ A}, R_1 = 3\\,\\Omega)$ en son équivalent de Thévenin : $E_1 = R_1 I_0 = 3 \\times 4 = 12\\text{ V}$ en série avec $R_1 = 3\\,\\Omega$. Cet ensemble étant en série avec $R_2 = 5\\,\\Omega$, on additionne les résistances en série : $E_{Th} = 12\\text{ V}$ et $R_{Th} = R_1 + R_2 = 3 + 5 = 8\\,\\Omega$.',
              hint: 'Convertis d’abord $(I_0, R_1)$ en Thévenin $(R_1 I_0, R_1)$, puis ajoute $R_2$ en série.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Pont de Wheatstone',
            stepTheme: 'green',
            stepTitle: 'Application de Thévenin au calcul du courant dans la diagonale d’un pont de Wheatstone',
            paragraphText:
              'Le théorème de Thévenin est la méthode royale pour calculer le courant $I_G$ dans le galvanomètre de résistance $R_G$ placé entre les nœuds $A$ et $B$ d’un pont de Wheatstone déséquilibré. En débranchant $R_G$, les deux branches $(R_1, R_2)$ et $(R_3, R_4)$ deviennent deux simples diviseurs de tension indépendants : $E_{Th} = U_{AB0} = E \\left(\\frac{R_2}{R_1+R_2} - \\frac{R_4}{R_3+R_4}\\right)$. En éteignant la source $E$ (remplacée par un fil reliant $C$ et $D$), les nœuds $C$ et $D$ sont au même potentiel : vue entre $A$ et $B$, la résistance équivalente vaut simplement $R_{Th} = (R_1 \\parallel R_2) + (R_3 \\parallel R_4)$.',
            formula: {
              name: 'Modèle de Thévenin d’un pont de Wheatstone vu entre A et B',
              formula: 'E_{Th} = E \\left( \\frac{R_2}{R_1 + R_2} - \\frac{R_4}{R_3 + R_4} \\right) \\quad ; \\quad R_{Th} = \\frac{R_1 R_2}{R_1 + R_2} + \\frac{R_3 R_4}{R_3 + R_4}',
              note: 'Le courant dans le détecteur central de résistance R_G vaut alors I_G = E_Th / (R_Th + R_G)',
            },
            keyRule:
              'Pour la diagonale $AB$ d’un pont de Wheatstone : $R_{Th} = (R_1 \\parallel R_2) + (R_3 \\parallel R_4)$.',
            konanTip:
              'Retiens par cœur la formule $R_{Th} = (R_1 \\parallel R_2) + (R_3 \\parallel R_4)$ : elle fait gagner 10 minutes en examen par rapport à Kennelly lorsqu’on ne cherche que le courant central $I_G$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p2_ex4',
              type: 'mcq',
              prompt:
                'Un pont de Wheatstone alimenté par $E = 12\\text{ V}$ possède $R_1 = R_2 = 6\\,\\Omega$ et $R_3 = 4\\,\\Omega$, $R_4 = 12\\,\\Omega$. On branche entre $A$ et $B$ une résistance centrale $R_G = 4\\,\\Omega$. Que valent $R_{Th}$ et la valeur absolue du courant $|I_G|$ dans $R_G$ ?',
              options: [
                '$R_{Th} = 6\\,\\Omega$ et $|I_G| = 0{,}3\\text{ A}$',
                '$R_{Th} = 6\\,\\Omega$ et $|I_G| = 0{,}5\\text{ A}$',
                '$R_{Th} = 10\\,\\Omega$ et $|I_G| = 0{,}3\\text{ A}$',
                '$R_{Th} = 3\\,\\Omega$ et $|I_G| = 0{,}43\\text{ A}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À vide : $V_A = 12 \\times \\frac{6}{12} = 6\\text{ V}$ et $V_B = 12 \\times \\frac{12}{16} = 9\\text{ V}$, donc $|E_{Th}| = |6 - 9| = 3\\text{ V}$. Puis $R_{Th} = (6 \\parallel 6) + (4 \\parallel 12) = 3 + 3 = 6\\,\\Omega$. Enfin, $|I_G| = \\frac{|E_{Th}|}{R_{Th} + R_G} = \\frac{3}{6 + 4} = 0{,}3\\text{ A}$.',
              hint: 'Calcule $E_{Th} = V_A - V_B$, puis $R_{Th} = (R_1 \\parallel R_2) + (R_3 \\parallel R_4)$, et divise $|E_{Th}|$ par $R_{Th} + R_G$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Sources commandées',
            stepTheme: 'green',
            stepTitle: 'Calcul de R_Th en présence de sources liées (commandées)',
            paragraphText:
              'Lorsqu’un réseau contient une **source liée (ou commandée)** dont la valeur dépend d’une tension ou d’un courant interne au circuit (par exemple $E_c = \\mu U_1$ ou $I_c = \\beta I_1$ dans un modèle de transistor), **on n’a jamais le droit d’éteindre une source commandée**. Pour déterminer $R_{Th}$, on éteint uniquement les sources indépendantes, on applique une source de test $(U_{\\text{test}}, I_{\\text{test}})$ en convention récepteur aux bornes $A$ et $B$, et on calcule le rapport $R_{Th} = \\frac{U_{\\text{test}}}{I_{\\text{test}}}$. Alternativement, si $E_{Th}$ et $I_N$ sont non nuls, on peut calculer séparément la tension à vide $E_{Th}$ et le courant de court-circuit $I_N$, puis poser $R_{Th} = \\frac{E_{Th}}{I_N}$.',
            formula: {
              name: 'Méthodes générales de calcul de R_Th (avec sources commandées)',
              formula: 'R_{Th} = \\left( \\frac{U_{\\text{test}}}{I_{\\text{test}}} \\right)_{\\text{sources indép. éteintes}} = \\frac{E_{Th \\text{ (à vide)}}}{I_{N \\text{ (court-circuit)}}}',
              note: 'Une source commandée reste toujours active car elle modélise un couplage physique interne au composant',
            },
            keyRule:
              'On n’éteint JAMAIS une source commandée : on utilise un générateur d’essai $R_{Th} = U_{\\text{test}} / I_{\\text{test}}$ (sources indépendantes éteintes) ou le quotient $R_{Th} = E_{Th} / I_N$.',
            konanTip:
              'Cette méthode du générateur de test $(U_{\\text{test}}, I_{\\text{test}})$ sera indispensable au Semestre 2 en Électronique Fondamentale pour calculer les impédances d’entrée et de sortie des amplificateurs à transistors !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p2_ex5',
              type: 'mcq',
              prompt:
                'Un dipôle actif linéaire avec source commandée présente une tension à vide $U_{AB0} = 15\\text{ V}$ entre ses bornes $A$ et $B$, et débite un courant de court-circuit $I_{\\text{cc}} = 0{,}5\\text{ A}$ lorsqu’on relie $A$ et $B$ par un fil. Quelle est sa résistance de Thévenin $R_{Th}$ ?',
              options: ['$30\\,\\Omega$', '$7{,}5\\,\\Omega$', '$0{,}033\\,\\Omega$', '$15\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'Quelle que soit la présence de sources commandées internes, tant que le dipôle est linéaire, ses modèles de Thévenin et de Norton sont liés par $E_{Th} = R_{Th} I_N$, d’où $R_{Th} = \\frac{U_{AB0}}{I_{\\text{cc}}} = \\frac{15}{0{,}5} = 30\\,\\Omega$.',
              hint: 'Utilise la relation universelle $R_{Th} = E_{Th} / I_N$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse Thévenin',
            stepTheme: 'slate',
            stepTitle: 'Synthèse : choix entre Thévenin et Norton selon la topologie',
            paragraphText:
              'Face à un circuit quelconque, comment choisir entre calculer directement $(E_{Th}, R_{Th})$ ou calculer $(I_N, R_N)$ puis déduire $E_{Th} = R_{Th} I_N$ ? Si les bornes de sortie $A$ et $B$ sont aux bornes d’une branche parallèle finale, le calcul de la tension à vide $E_{Th}$ par Millman ou diviseur de tension est très direct. En revanche, si une résistance est en série avec la borne de sortie $A$, le fait de court-circuiter $A$ et $B$ pour calculer $I_N$ ramène souvent les branches en parallèle directe avec la masse, rendant le calcul de $I_N$ immédiat.',
            formula: {
              name: 'Caractéristique externe unifiée d’un dipôle actif linéaire',
              formula: 'U_{AB} = E_{Th} - R_{Th} I_{AB} \\iff I_{AB} = I_N - \\frac{U_{AB}}{R_N}',
              note: 'La droite U_AB = f(I_AB) coupe l’axe vertical en E_Th et l’axe horizontal en I_N',
            },
            keyRule:
              'Connaître deux des trois grandeurs $(E_{Th}, I_N, R_{Th})$ suffit toujours à déterminer la troisième grâce à $E_{Th} = R_{Th} I_N$.',
            konanTip:
              'Attention lorsqu’une résistance $R_s$ est en série avec la borne $A$ : à vide ($I_A = 0$), il n’y a aucune chute de tension dans $R_s$, donc $R_s$ n’intervient pas dans $E_{Th}$, mais elle s’ajoute dans $R_{Th}$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p2_ex6',
              type: 'mcq',
              prompt:
                'Un pont diviseur $(E = 20\\text{ V}, R_1 = 4\\,\\Omega, R_2 = 4\\,\\Omega)$ a son point milieu relié à la borne de sortie $A$ à travers une résistance série $R_3 = 5\\,\\Omega$ (la borne $B$ étant à la masse). Que valent $E_{Th}$ et $R_{Th}$ vus entre $A$ et $B$ ?',
              options: [
                '$E_{Th} = 10\\text{ V}$ et $R_{Th} = 7\\,\\Omega$',
                '$E_{Th} = 5{,}88\\text{ V}$ et $R_{Th} = 7\\,\\Omega$',
                '$E_{Th} = 10\\text{ V}$ et $R_{Th} = 2\\,\\Omega$',
                '$E_{Th} = 20\\text{ V}$ et $R_{Th} = 9\\,\\Omega$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À vide, aucun courant ne sort par la borne $A$ ($I_A = 0$), donc la chute de tension dans $R_3 = 5\\,\\Omega$ est nulle ! La tension à vide $E_{Th}$ est simplement celle du point milieu du diviseur $(R_1, R_2)$ : $E_{Th} = 20 \\times \\frac{4}{4+4} = 10\\text{ V}$. En revanche, pour $R_{Th}$ (source $E$ éteinte), $R_3$ est en série avec $(R_1 \\parallel R_2)$ : $R_{Th} = (4 \\parallel 4) + 5 = 2 + 5 = 7\\,\\Omega$.',
              hint: 'À vide, le courant dans $R_3$ est nul, donc $E_{Th}$ ne dépend que de $R_1$ et $R_2$. Mais $R_3$ compte dans $R_{Th}$ !',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch2_p3',
        order: 3,
        title: 'Adaptation d’impédance et Théorème du transfert maximal de puissance',
        summary:
          'Puissance fournie à une charge résistive variable, condition d’adaptation R_L = R_Th, puissance maximale disponible et rendement à l’adaptation.',
        conceptExplanation:
          'En télécommunications et en électronique RF (antennes, lignes de transmission coaxiales $50\\,\\Omega$ ou $75\\,\\Omega$, étages d’amplification), l’objectif principal est souvent de transférer le maximum de puissance du générateur $(E_{Th}, R_{Th})$ vers le récepteur de charge $R_L$. L’étude de la fonction puissance $P_L(R_L)$ montre que ce transfert est maximal lorsque la résistance de charge est adaptée à la résistance interne de la source ($R_L = R_{Th}$). À l’inverse, en électrotechnique de puissance (réseau CIE), on cherche un rendement proche de $100\\%$ en imposant $R_L \\gg R_{Th}$.',
        formulas: [
          {
            name: 'Condition d’adaptation et Puissance maximale transférée',
            formula: 'R_L = R_{Th} \\quad \\Longrightarrow \\quad P_{L,\\max} = \\frac{E_{Th}^2}{4 R_{Th}} = \\frac{1}{4} R_N I_N^2',
            note: 'Lorsque R_L = R_Th, la tension en charge vaut la moitié de la tension à vide : U_AB = E_Th / 2',
          },
          {
            name: 'Rendement énergétique du transfert',
            formula: '\\eta = \\frac{P_L}{P_{\\text{totale}}} = \\frac{R_L}{R_{Th} + R_L} \\quad \\xrightarrow{R_L = R_{Th}} \\quad \\eta_{\\text{adaptation}} = 50\\%',
            note: 'À l’adaptation en puissance, la moitié de la puissance est dissipée dans la résistance interne R_Th',
          },
        ],
        keyRule:
          'La puissance reçue par une résistance de charge variable $R_L$ est maximale lorsque $R_L = R_{Th}$, et vaut $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}}$ avec un rendement de $50\\%$.',
        workedExample: {
          title: 'Adaptation d’une antenne de réception à un étage d’entrée',
          statement:
            'Une antenne de réception radio est modélisée par son générateur de Thévenin de f.é.m. $E_{Th} = 2\\text{ mV}$ et de résistance interne $R_{Th} = 50\\,\\Omega$. Quelle doit être la résistance d’entrée $R_e$ du récepteur pour capter le maximum de puissance, et que vaut cette puissance maximale $P_{\\max}$ ?',
          methodSteps: [
            'D’après le théorème du transfert maximal de puissance, il faut réaliser l’adaptation en puissance : $R_e = R_{Th} = 50\\,\\Omega$.',
            'La tension à l’entrée du récepteur vaut alors $U_e = \\frac{E_{Th}}{2} = 1\\text{ mV}$.',
            'La puissance maximale transférée au récepteur vaut $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}} = \\frac{(2 \\times 10^{-3})^2}{4 \\times 50} = \\frac{4 \\times 10^{-6}}{200} = 2 \\times 10^{-8}\\text{ W} = 20\\text{ nW}$.',
          ],
          conclusion: 'L’adaptation est obtenue pour $R_e = 50\\,\\Omega$ et la puissance maximale disponible est de $20\\text{ nW}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Expression de P(R_L)',
            stepTheme: 'violet',
            stepTitle: 'Expression de la puissance reçue par une charge variable R_L',
            paragraphText:
              'Considérons un réseau linéaire actif quelconque représenté par son générateur équivalent de Thévenin $(E_{Th}, R_{Th})$ débitant dans une résistance de charge variable $R_L$. Le courant dans la charge vaut $I_L = \\frac{E_{Th}}{R_{Th} + R_L}$. La puissance électrique $P_L$ reçue par la charge $R_L$ a pour expression $P_L(R_L) = R_L I_L^2 = \\frac{R_L E_{Th}^2}{(R_{Th} + R_L)^2}$. On constate immédiatement que cette puissance s’annule dans les deux cas extrêmes : en **court-circuit** ($R_L = 0 \\implies U = 0 \\implies P_L = 0$) et en **circuit ouvert** ($R_L \\to \\infty \\implies I_L = 0 \\implies P_L \\to 0$).',
            formula: {
              name: 'Puissance délivrée à la charge en fonction de R_L',
              formula: 'P_L(R_L) = E_{Th}^2 \\cdot \\frac{R_L}{(R_{Th} + R_L)^2}',
              note: 'Fonction continue positive sur [0, +∞[ s’annulant en 0 et en +∞ : elle admet donc un maximum absolu',
            },
            keyRule:
              'Un générateur réel ne fournit aucune puissance extérieure ni à vide ($I = 0$) ni en court-circuit ($U = 0$).',
            konanTip:
              'Attention : dans ce théorème, c’est la résistance de charge $R_L$ qui est variable ($R_{Th}$ est fixée par le générateur). Si $R_L$ était fixe et $R_{Th}$ réglable, il faudrait choisir $R_{Th} = 0$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p3_ex1',
              type: 'mcq',
              prompt:
                'Un générateur de Thévenin $(E_{Th} = 12\\text{ V}, R_{Th} = 2\\,\\Omega)$ débite dans une résistance de charge $R_L = 4\\,\\Omega$. Quelle est la puissance $P_L$ reçue par la charge $R_L$ ?',
              options: ['$16\\text{ W}$', '$18\\text{ W}$', '$24\\text{ W}$', '$8\\text{ W}$'],
              correctAnswerIndex: 0,
              explanation:
                'On applique $P_L = E_{Th}^2 \\frac{R_L}{(R_{Th} + R_L)^2} = 12^2 \\times \\frac{4}{(2 + 4)^2} = 144 \\times \\frac{4}{36} = 16\\text{ W}$ (ou bien $I_L = \\frac{12}{6} = 2\\text{ A}$ et $P_L = R_L I_L^2 = 4 \\times 2^2 = 16\\text{ W}$).',
              hint: 'Calcule le courant $I_L = \\frac{E_{Th}}{R_{Th} + R_L}$ puis $P_L = R_L I_L^2$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Démonstration',
            stepTheme: 'violet',
            stepTitle: 'Démonstration de la condition d’adaptation R_L = R_Th',
            paragraphText:
              'Pour trouver la valeur de $R_L$ qui maximise $P_L(R_L) = E_{Th}^2 \\frac{R_L}{(R_{Th} + R_L)^2}$, on calcule la dérivée par rapport à $R_L$ : $\\frac{dP_L}{dR_L} = E_{Th}^2 \\frac{(R_{Th} + R_L)^2 - R_L \\cdot 2(R_{Th} + R_L)}{(R_{Th} + R_L)^4} = E_{Th}^2 \\frac{R_{Th} - R_L}{(R_{Th} + R_L)^3}$. Cette dérivée est positive pour $R_L < R_{Th}$, s’annule pour **$R_L = R_{Th}$** et devient négative pour $R_L > R_{Th}$. La puissance transférée à la charge passe donc par un maximum absolu lorsque la résistance de charge est égale à la résistance de Thévenin du générateur ($R_L = R_{Th}$) : on dit qu’il y a **adaptation de résistance** (ou d’impédance).',
            formula: {
              name: 'Dérivée de la puissance et condition d’adaptation',
              formula: '\\frac{dP_L}{dR_L} = E_{Th}^2 \\cdot \\frac{R_{Th} - R_L}{(R_{Th} + R_L)^3} = 0 \\iff R_L = R_{Th}',
              note: 'On peut aussi démontrer ce résultat sans dérivée grâce à l’identité (R_Th + R_L)^2 - 4 R_Th R_L = (R_Th - R_L)^2 ≥ 0',
            },
            keyRule:
              'Condition d’adaptation en puissance en régime continu : $R_L = R_{Th}$.',
            konanTip:
              'Sache refaire la dérivation de $\\frac{R_L}{(R_{Th} + R_L)^2}$ par rapport à $R_L$ en 30 secondes : c’est une question de cours récurrente aux examens de Licence 1.',
            visualSchema: {
              type: 'function_plot',
              title: 'Courbe de la puissance P_L(R_L) normalisée en fonction de x = R_L / R_Th',
              plot: {
                xMin: 0,
                xMax: 5,
                yMin: 0,
                yMax: 1.2,
                xStep: 1,
                yStep: 0.25,
                xLabel: 'RL/RTh',
                yLabel: 'P/Pmax',
                curves: [
                  {
                    label: 'P / Pmax = 4x / (1+x)²',
                    color: 'violet',
                    pieces: [{ expr: '4*x/((1+x)^2)', from: 0, to: 5 }],
                  },
                ],
                points: [
                  { x: 1, y: 1, label: 'Maximum (RL = RTh, P = Pmax)', filled: true, color: 'green' },
                ],
                verticalLines: [{ x: 1, label: 'x = 1', color: 'green' }],
                horizontalLines: [{ y: 1, label: 'Pmax', color: 'orange' }],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p3_ex2',
              type: 'mcq',
              prompt:
                'Pour un générateur $(E_{Th}, R_{Th})$ donné, quel est le signe de la dérivée $\\frac{dP_L}{dR_L}$ lorsque la résistance de charge vérifie $R_L > R_{Th}$ ?',
              options: [
                'Strictement négatif : la puissance reçue diminue quand $R_L$ augmente au-delà de $R_{Th}$',
                'Strictement positif : la puissance reçue continue d’augmenter avec $R_L$',
                'Toujours nul pour tout $R_L > R_{Th}$',
                'Cela dépend du signe de $E_{Th}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Puisque $\\frac{dP_L}{dR_L} = E_{Th}^2 \\frac{R_{Th} - R_L}{(R_{Th} + R_L)^3}$, dès que $R_L > R_{Th}$, le numérateur $R_{Th} - R_L$ est strictement négatif, donc la puissance $P_L(R_L)$ est strictement décroissante sur $[R_{Th}, +\\infty[$ et tend vers $0$ quand $R_L \\to +\\infty$.',
              hint: 'Regarde le signe du numérateur $R_{Th} - R_L$ dans l’expression de la dérivée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Puissance maximale',
            stepTheme: 'violet',
            stepTitle: 'Valeur de la puissance maximale disponible P_max',
            paragraphText:
              'En remplaçant $R_L = R_{Th}$ dans l’expression de $P_L(R_L)$, on obtient la **puissance maximale disponible** (ou puissance nominale adaptable) que peut délivrer le générateur : $P_{\\max} = E_{Th}^2 \\frac{R_{Th}}{(2 R_{Th})^2} = \\frac{E_{Th}^2}{4 R_{Th}}$. À l’adaptation ($R_L = R_{Th}$), le courant vaut $I_{\\text{adapt}} = \\frac{E_{Th}}{2 R_{Th}} = \\frac{I_N}{2}$ et la tension aux bornes de la charge vaut la moitié de la tension à vide : $U_{\\text{adapt}} = \\frac{E_{Th}}{2}$. En fonction des paramètres de Norton $(I_N, R_N)$, la puissance maximale s’écrit $P_{\\max} = \\frac{1}{4} R_N I_N^2 = \\frac{1}{4} E_{Th} I_N$.',
            formula: {
              name: 'Expressions équivalentes de la puissance maximale transférée',
              formula: 'P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}} = \\frac{R_N I_N^2}{4} = \\frac{E_{Th} \\cdot I_N}{4}',
              note: 'À l’adaptation : U_AB = E_Th / 2 et I_L = I_N / 2, donc P_max = U_AB · I_L = (E_Th · I_N) / 4',
            },
            keyRule:
              'À l’adaptation ($R_L = R_{Th}$), la tension est divisée par $2$ ($U = E_{Th}/2$), le courant vaut la moitié du courant de court-circuit ($I = I_N/2$), et $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}}$.',
            konanTip:
              'N’oublie jamais le facteur $4$ au dénominateur de $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}}$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p3_ex3',
              type: 'mcq',
              prompt:
                'Un dipôle actif a une tension à vide $E_{Th} = 20\\text{ V}$ et une résistance interne $R_{Th} = 5\\,\\Omega$. Quelle est la puissance maximale $P_{\\max}$ qu’il peut transférer à une résistance de charge adaptée ?',
              options: ['$20\\text{ W}$', '$80\\text{ W}$', '$40\\text{ W}$', '$10\\text{ W}$'],
              correctAnswerIndex: 0,
              explanation:
                'La puissance maximale est atteinte pour $R_L = R_{Th} = 5\\,\\Omega$ et vaut $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}} = \\frac{20^2}{4 \\times 5} = \\frac{400}{20} = 20\\text{ W}$.',
              hint: 'Applique la formule $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Rendement',
            stepTheme: 'violet',
            stepTitle: 'Rendement énergétique et compromis Puissance maximale vs Rendement',
            paragraphText:
              'La puissance totale générée par la source idéale interne $E_{Th}$ est $P_g = E_{Th} I_L = (R_{Th} + R_L) I_L^2$, tandis que la puissance utile reçue par la charge est $P_L = R_L I_L^2$. Le **rendement énergétique** $\\eta = \\frac{P_L}{P_g}$ vaut donc $\\eta = \\frac{R_L}{R_{Th} + R_L} = \\frac{1}{1 + R_{Th}/R_L}$. Lorsque la condition d’adaptation en puissance est réalisée ($R_L = R_{Th}$), le rendement vaut exactement **$\\eta = 50\\%$** : autant de puissance est dissipée en chaleur dans la résistance interne $R_{Th}$ que dans la charge $R_L$. Pour obtenir un rendement proche de $100\\%$, il faut au contraire travailler en **adaptation en tension** ($R_L \\gg R_{Th}$).',
            formula: {
              name: 'Rendement énergétique en fonction du rapport x = R_L / R_Th',
              formula: '\\eta = \\frac{R_L}{R_{Th} + R_L} = \\frac{x}{1 + x} \\quad \\Longrightarrow \\quad \\eta(x=1) = 0{,}5 = 50\\%',
              note: 'Le rendement est une fonction strictement croissante de R_L tendant vers 100% quand R_L → +∞',
            },
            keyRule:
              'Adaptation en puissance ($R_L = R_{Th}$, télécoms) $\\implies \\eta = 50\\%$. Adaptation en tension ($R_L \\gg R_{Th}$, transport d’énergie, voltmètre) $\\implies \\eta \\to 100\\%$ et $U_L \\to E_{Th}$.',
            konanTip:
              'Si une centrale électrique de la CIE fonctionnait à l’adaptation de puissance ($R_L = R_{Th}$), $50\\%$ de la production nationale brûlerait dans les alternateurs et les lignes ! En énergie, on impose toujours $R_{Th} \\ll R_L$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p3_ex4',
              type: 'mcq',
              prompt:
                'Un générateur $(E_{Th}, R_{Th} = 2\\,\\Omega)$ alimente une résistance de charge $R_L$. Quelle valeur faut-il donner à $R_L$ pour que le rendement énergétique du transfert soit égal à $\\eta = 80\\%$ ($0{,}8$) ?',
              options: ['$8\\,\\Omega$', '$2\\,\\Omega$', '$10\\,\\Omega$', '$1{,}6\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'On a $\\eta = \\frac{R_L}{R_{Th} + R_L} = 0{,}8 \\implies R_L = 0{,}8 R_{Th} + 0{,}8 R_L \\implies 0{,}2 R_L = 0{,}8 R_{Th} \\implies R_L = 4 R_{Th} = 4 \\times 2 = 8\\,\\Omega$.',
              hint: 'Résous $\\frac{R_L}{2 + R_L} = 0{,}8$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Symétrie R_L1 · R_L2',
            stepTheme: 'violet',
            stepTitle: 'Deux résistances de charge dissipant la même puissance : relation R_L1 · R_L2 = R_Th²',
            paragraphText:
              'Puisque la courbe $P_L(R_L)$ croît de $0$ à $P_{\\max}$ sur $[0, R_{Th}]$ puis décroît de $P_{\\max}$ à $0$ sur $[R_{Th}, +\\infty[$, toute valeur de puissance $P_0$ comprise strictement entre $0$ et $P_{\\max}$ est atteinte pour **deux valeurs distinctes** de la résistance de charge : $R_{L1} < R_{Th}$ et $R_{L2} > R_{Th}$. En écrivant l’égalité $P_L(R_{L1}) = P_L(R_{L2})$, soit $\\frac{R_{L1}}{(R_{Th} + R_{L1})^2} = \\frac{R_{L2}}{(R_{Th} + R_{L2})^2}$, on démontre que la résistance de Thévenin $R_{Th}$ est la **moyenne géométrique** de ces deux résistances : $R_{Th}^2 = R_{L1} \\cdot R_{L2}$, soit $R_{Th} = \\sqrt{R_{L1} R_{L2}}$.',
            formula: {
              name: 'Propriété de moyenne géométrique pour deux charges d’égale puissance',
              formula: 'P_L(R_{L1}) = P_L(R_{L2}) \\quad (\\text{avec } R_{L1} \\neq R_{L2}) \\iff R_{Th} = \\sqrt{R_{L1} \\cdot R_{L2}}',
              note: 'Méthode expérimentale élégante pour déterminer la résistance interne R_Th d’une source sans la court-circuiter',
            },
            keyRule:
              'Si deux charges différentes $R_{L1}$ et $R_{L2}$ reçoivent la même puissance d’un générateur, alors $R_{Th} = \\sqrt{R_{L1} \\cdot R_{L2}}$.',
            konanTip:
              'Cette propriété permet de trouver instantanément $R_{Th}$ dans les QCM d’examen sans aucun système d’équations !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p3_ex5',
              type: 'mcq',
              prompt:
                'Un générateur linéaire débite exactement la même puissance électrique lorsqu’on le connecte à une charge $R_{L1} = 4\\,\\Omega$ que lorsqu’on le connecte à une charge $R_{L2} = 36\\,\\Omega$. Quelle valeur de résistance de charge $R_L$ permettrait de recevoir la puissance maximale de ce générateur ?',
              options: ['$12\\,\\Omega$', '$20\\,\\Omega$', '$18\\,\\Omega$', '$9\\,\\Omega$'],
              correctAnswerIndex: 0,
              explanation:
                'Puisque $P_L(R_{L1}) = P_L(R_{L2})$ avec $R_{L1} \\neq R_{L2}$, la résistance interne de Thévenin est la moyenne géométrique $R_{Th} = \\sqrt{R_{L1} \\cdot R_{L2}} = \\sqrt{4 \\times 36} = \\sqrt{144} = 12\\,\\Omega$. La puissance maximale est atteinte à l’adaptation $R_L = R_{Th} = 12\\,\\Omega$.',
              hint: 'Calcule la moyenne géométrique $R_{Th} = \\sqrt{R_{L1} \\cdot R_{L2}}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Bilan complet',
            stepTheme: 'slate',
            stepTitle: 'Synthèse : adaptation d’une charge à travers un réseau résistif',
            paragraphText:
              'Pour déterminer quelle valeur donner à une résistance variable $R_L$ située au cœur d’un circuit complexe (par exemple dans une branche d’un pont ou à la sortie d’un diviseur) afin qu’elle dissipe le maximum de puissance, la méthode universelle consiste à : 1) débrancher $R_L$ entre ses bornes $A$ et $B$ ; 2) calculer la résistance de Thévenin $R_{Th}$ et la f.é.m. $E_{Th}$ du reste du réseau vu entre $A$ et $B$ ; 3) poser directement $R_L = R_{Th}$ et $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}}$. Il n’est jamais nécessaire d’exprimer la puissance dans le circuit complet avant de dériver !',
            formula: {
              name: 'Synthèse Thévenin + Adaptation de puissance',
              formula: 'R_{L,\\text{opt}} = R_{Th(AB)} \\quad ; \\quad P_{L,\\max} = \\frac{E_{Th(AB)}^2}{4 R_{Th(AB)}}',
              note: 'Raccourci fondamental combinant les deux théorèmes majeurs du chapitre 2',
            },
            keyRule:
              'Toute question demandant « Pour quelle valeur de $R_L$ la puissance dissipée dans $R_L$ est-elle maximale ? » se résout en calculant $R_{Th}$ aux bornes de $R_L$ et en posant $R_L = R_{Th}$.',
            konanTip:
              'Si on ne te demande que la valeur optimale de $R_L$ (et pas la valeur de $P_{\\max}$), tu n’as même pas besoin de calculer $E_{Th}$ : seul le calcul de $R_{Th}$ (sources éteintes) suffit !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch2_p3_ex6',
              type: 'mcq',
              prompt:
                'Une source idéale $E = 36\\text{ V}$ alimente en série une résistance $R_1 = 6\\,\\Omega$ et un bloc parallèle formé de $R_2 = 12\\,\\Omega$ et d’une résistance variable $R_L$. Pour quelle valeur de $R_L$ la puissance dissipée dans $R_L$ est-elle maximale, et que vaut cette puissance maximale ?',
              options: [
                '$R_L = 4\\,\\Omega$ et $P_{\\max} = 36\\text{ W}$',
                '$R_L = 18\\,\\Omega$ et $P_{\\max} = 18\\text{ W}$',
                '$R_L = 6\\,\\Omega$ et $P_{\\max} = 24\\text{ W}$',
                '$R_L = 4\\,\\Omega$ et $P_{\\max} = 81\\text{ W}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En débranchant $R_L$, le reste du circuit est le pont diviseur $(E = 36\\text{ V}, R_1 = 6\\,\\Omega, R_2 = 12\\,\\Omega)$ : $R_{Th} = R_1 \\parallel R_2 = \\frac{6 \\times 12}{6 + 12} = 4\\,\\Omega$ et $E_{Th} = 36 \\times \\frac{12}{6 + 12} = 24\\text{ V}$. La puissance dans $R_L$ est donc maximale pour $R_L = R_{Th} = 4\\,\\Omega$ et vaut $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}} = \\frac{24^2}{4 \\times 4} = \\frac{576}{16} = 36\\text{ W}$.',
              hint: 'Trouve d’abord $R_{Th} = R_1 \\parallel R_2$ et $E_{Th} = E \\frac{R_2}{R_1+R_2}$, puis applique $R_L = R_{Th}$ et $P_{\\max} = \\frac{E_{Th}^2}{4 R_{Th}}$.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : RÉGIMES TRANSITOIRES (RC, RL, RLC) ET RÉGIME SINUSOÏDAL FORCÉ
  // ============================================================================
  {
    id: 'lmd_srit_l1_electrocine_ch3',
    subjectId: 'lmd_electrocinetique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (2PHY3101 Électrocinétique, Semestre 1)',
    title: 'Régimes Transitoires (RC, RL, RLC) et Régime Sinusoïdal Forcé',
    summary:
      'Condensateur et bobine, régimes transitoires du 1er ordre (RC, RL) et du 2nd ordre (RLC), impédances complexes, résonance, puissances en alternatif et relèvement du facteur de puissance.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch3_p1',
        order: 1,
        title: 'Condensateur, bobine et régimes transitoires du premier ordre (RC et RL)',
        summary:
          'Lois constitutives et énergies stockées dans C et L, continuité de u_C(t) et i_L(t), charge et décharge d’un circuit RC (τ = RC) et établissement/rupture dans un circuit RL (τ = L/R).',
        conceptExplanation:
          'Contrairement à la résistance pure qui dissipe l’énergie instantanément, le condensateur (de capacité $C$ en Farads) et la bobine idéale (d’inductance $L$ en Henrys) sont des dipôles réactifs linéaires qui stockent de l’énergie respectivement sous forme électrostatique ($W_C = \\frac{1}{2} C u_C^2$) et magnétique ($W_L = \\frac{1}{2} L i_L^2$). Leurs lois différentielles imposent la continuité de la tension $u_C(t)$ aux bornes d’un condensateur et de l’intensité $i_L(t)$ dans une bobine, donnant naissance aux régimes transitoires exponentiels du premier ordre caractérisés par la constante de temps $\\tau$.',
        formulas: [
          {
            name: 'Lois constitutives (convention récepteur) et Énergies stockées',
            formula: 'i_C = C \\frac{du_C}{dt} \\;\\; (W_C = \\frac{1}{2} C u_C^2) \\quad ; \\quad u_L = L \\frac{di_L}{dt} \\;\\; (W_L = \\frac{1}{2} L i_L^2)',
            note: 'En régime permanent continu (d/dt = 0) : un condensateur est un circuit ouvert (i_C = 0) et une bobine idéale est un fil (u_L = 0)',
          },
          {
            name: 'Solution générale d’un échelon du 1er ordre (RC ou RL)',
            formula: 'y(t) = y(\\infty) + [y(0^+) - y(\\infty)] \\cdot e^{-t/\\tau} \\quad \\text{avec} \\quad \\tau_{RC} = R C \\; ; \\; \\tau_{RL} = \\frac{L}{R}',
            note: 'À t = τ : 63% de la variation est accomplie ; à t = 3τ : 95% ; à t = 5τ : 99,3% (régime permanent atteint)',
          },
        ],
        keyRule:
          'La tension $u_C(t)$ aux bornes d’un condensateur et le courant $i_L(t)$ dans une bobine ne peuvent JAMAIS subir de discontinuité instantanée : $u_C(0^+) = u_C(0^-)$ et $i_L(0^+) = i_L(0^-)$.',
        workedExample: {
          title: 'Charge d’un condensateur initialement déchargé sous un échelon de tension',
          statement:
            'Un condensateur $C = 10\\,\\mu\\text{F}$ initialement déchargé ($u_C(0^-) = 0$) est chargé à $t = 0$ par une source $E = 10\\text{ V}$ à travers une résistance $R = 2\\,\\text{k}\\Omega$. Calculer la constante de temps $\\tau$, l’expression de $u_C(t)$, l’énergie finale stockée $W_C(\\infty)$ et l’énergie totale dissipée par effet Joule dans $R$.',
          methodSteps: [
            'La constante de temps vaut $\\tau = R C = 2 \\times 10^3 \\times 10 \\times 10^{-6} = 0{,}02\\text{ s} = 20\\text{ ms}$.',
            'Par continuité $u_C(0^+) = 0$ et en régime permanent $u_C(\\infty) = E = 10\\text{ V}$, d’où $u_C(t) = E(1 - e^{-t/\\tau}) = 10(1 - e^{-50t})\\text{ V}$.',
            'L’énergie finale emmagasinée dans le condensateur vaut $W_C(\\infty) = \\frac{1}{2} C E^2 = \\frac{1}{2} \\times 10^{-5} \\times 10^2 = 5 \\times 10^{-4}\\text{ J} = 0{,}5\\text{ mJ}$.',
            'Le générateur a fourni au total $W_g = Q_{\\text{finale}} E = C E^2 = 1\\text{ mJ}$ : exactement la moitié ($W_J = \\frac{1}{2} C E^2 = 0{,}5\\text{ mJ}$) a été dissipée par effet Joule dans $R$ (quelle que soit la valeur de $R$ !).',
          ],
          conclusion: 'La constante de temps est $\\tau = 20\\text{ ms}$, $W_C(\\infty) = 0{,}5\\text{ mJ}$ et le rendement de charge sous échelon constant est toujours de $50\\%$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Condensateur C',
            stepTheme: 'blue',
            stepTitle: 'Le condensateur : relation courant-tension, continuité de u_C et associations',
            paragraphText:
              'Un **condensateur** de capacité $C$ (en Farads, F) porte sur son armature positive la charge $q(t) = C u_C(t)$. En convention récepteur, l’intensité du courant vaut $i(t) = \\frac{dq}{dt} = C \\frac{du_C}{dt}$. Il stocke l’énergie électrostatique $W_C = \\frac{1}{2} C u_C^2$. Comme une puissance infinie est physiquement impossible, l’énergie $W_C(t)$ et donc la **tension $u_C(t)$ sont toujours continues** : $u_C(t_0^+) = u_C(t_0^-)$. En régime continu établi ($\\frac{du_C}{dt} = 0$), le courant est nul ($i_C = 0$) : un condensateur se comporte comme un **interrupteur ouvert**. Attention : les capacités s’additionnent **en parallèle** ($C_{\\text{par}} = \\sum C_k$) et leurs inverses s’additionnent **en série** ($\\frac{1}{C_{\\text{série}}} = \\sum \\frac{1}{C_k}$).',
            formula: {
              name: 'Associations de condensateurs (inverse des résistances !)',
              formula: 'C_{\\text{parallèle}} = \\sum_{k=1}^n C_k \\quad ; \\quad \\frac{1}{C_{\\text{série}}} = \\sum_{k=1}^n \\frac{1}{C_k}',
              note: 'Continuité fondamentale à chaque commutation : u_C(0^+) = u_C(0^-)',
            },
            keyRule:
              'La tension $u_C(t)$ aux bornes d’un condensateur est toujours continue, et en régime permanent continu le condensateur équivaut à un circuit ouvert ($i_C = 0$).',
            konanTip:
              'Ne confonds pas avec les résistances : deux condensateurs $C_1$ et $C_2$ en série ont pour capacité équivalente $C_{\\text{éq}} = \\frac{C_1 C_2}{C_1 + C_2}$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p1_ex1',
              type: 'mcq',
              prompt:
                'Deux condensateurs $C_1 = 6\\,\\mu\\text{F}$ et $C_2 = 3\\,\\mu\\text{F}$ sont montés en série, et l’ensemble est soumis à une tension continue $U = 100\\text{ V}$ en régime permanent. Quelle est l’énergie totale $W_C$ emmagasinée dans l’association ?',
              options: ['$10\\text{ mJ}$', '$45\\text{ mJ}$', '$20\\text{ mJ}$', '$90\\text{ mJ}$'],
              correctAnswerIndex: 0,
              explanation:
                'La capacité équivalente des deux condensateurs en série vaut $C_{\\text{éq}} = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{6 \\times 3}{6 + 3} = 2\\,\\mu\\text{F}$. L’énergie stockée vaut $W_C = \\frac{1}{2} C_{\\text{éq}} U^2 = \\frac{1}{2} \\times 2 \\times 10^{-6} \\times 100^2 = 10^{-2}\\text{ J} = 10\\text{ mJ}$.',
              hint: 'Calcule d’abord $C_{\\text{éq}} = \\frac{C_1 C_2}{C_1 + C_2}$ puis applique $W_C = \\frac{1}{2} C_{\\text{éq}} U^2$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Bobine L',
            stepTheme: 'blue',
            stepTitle: 'La bobine inductive : relation tension-courant, continuité de i_L et associations',
            paragraphText:
              'Une **bobine idéale** d’inductance propre $L$ (en Henrys, H) est traversée par un flux magnétique propre $\\Phi = L i_L(t)$. En convention récepteur, la loi de Faraday-Lenz donne la tension à ses bornes : $u_L(t) = \\frac{d\\Phi}{dt} = L \\frac{di_L}{dt}$. Elle stocke l’énergie magnétique $W_L = \\frac{1}{2} L i_L^2$. Par continuité de l’énergie magnétique, l’**intensité du courant $i_L(t)$ dans une bobine est toujours continue** : $i_L(t_0^+) = i_L(t_0^-)$ (elle s’oppose aux variations brusques de courant). En régime continu établi ($\\frac{di_L}{dt} = 0$), la tension à ses bornes est nulle ($u_L = 0$) : une bobine idéale se comporte comme un **fil parfait (court-circuit)**. Sans couplage mutuel, les inductances s’associent comme les résistances ($L_{\\text{série}} = \\sum L_k$).',
            formula: {
              name: 'Loi de la bobine idéale et continuité du courant',
              formula: 'u_L(t) = L \\frac{di_L}{dt} \\quad ; \\quad i_L(t_0^+) = i_L(t_0^-) \\quad ; \\quad L_{\\text{série}} = \\sum L_k',
              note: 'Une bobine réelle possède en outre une faible résistance d’enroulement r en série : u = r i + L (di/dt)',
            },
            keyRule:
              'Le courant $i_L(t)$ dans une bobine est toujours continu, et en régime permanent continu une bobine idéale équivaut à un fil ($u_L = 0$).',
            konanTip:
              'C’est parce que $i_L$ ne peut pas s’annuler instantanément ($di_L/dt \\to -\\infty \\implies u_L \\to -\\infty$) que l’ouverture brusque d’un circuit inductif crée une étincelle de surtension (qu’on protège par une diode de roue libre).',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p1_ex2',
              type: 'mcq',
              prompt:
                'À $t = 0$, on ferme l’interrupteur d’un circuit comprenant une source $E = 12\\text{ V}$ en série avec une résistance $R_1 = 4\\,\\Omega$ et l’association parallèle d’une résistance $R_2 = 6\\,\\Omega$ et d’une bobine idéale $L = 0{,}5\\text{ H}$ (initialement sans courant) en série avec un condensateur idéal $C$ dans une troisième branche ouverte. Si le circuit est simplement $E$ en série avec $R_1$, lui-même en série avec $(R_2 \\parallel L)$, que valent le courant dans la bobine $i_L(0^+)$ juste après la fermeture et $i_L(\\infty)$ en régime permanent ?',
              options: [
                '$i_L(0^+) = 0\\text{ A}$ et $i_L(\\infty) = 3\\text{ A}$',
                '$i_L(0^+) = 1{,}2\\text{ A}$ et $i_L(\\infty) = 3\\text{ A}$',
                '$i_L(0^+) = 0\\text{ A}$ et $i_L(\\infty) = 1{,}2\\text{ A}$',
                '$i_L(0^+) = 3\\text{ A}$ et $i_L(\\infty) = 0\\text{ A}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par continuité du courant dans la bobine : $i_L(0^+) = i_L(0^-) = 0\\text{ A}$ (à $t = 0^+$, tout le courant $\\frac{E}{R_1+R_2} = 1{,}2\\text{ A}$ passe dans $R_2$). En régime permanent ($t \\to \\infty$), la bobine idéale devient un fil parfait ($u_L = 0$) qui court-circuite $R_2$ : tout le courant passe alors dans la bobine et vaut $i_L(\\infty) = \\frac{E}{R_1} = \\frac{12}{4} = 3\\text{ A}$.',
              hint: 'À $t = 0^+$, utilise la continuité $i_L(0^+) = i_L(0^-) = 0$. À $t \\to \\infty$, remplace la bobine idéale par un fil de court-circuit.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Circuit RC',
            stepTheme: 'violet',
            stepTitle: 'Équation différentielle, charge et décharge d’un circuit RC série',
            paragraphText:
              'Dans un circuit $RC$ série soumis à une tension $e(t)$, la loi des mailles $R i + u_C = e(t)$ combinée à $i = C \\frac{du_C}{dt}$ donne l’équation différentielle canonique du 1er ordre : $\\tau \\frac{du_C}{dt} + u_C = e(t)$, où **$\\tau = R C$** est la **constante de temps** (en secondes). Lors de la **charge** d’un condensateur initialement déchargé ($u_C(0)=0$) sous un échelon $E$, on a $u_C(t) = E(1 - e^{-t/\\tau})$ et $i(t) = \\frac{E}{R} e^{-t/\\tau}$. Lors de la **décharge** ($e(t)=0$) depuis une tension initiale $U_0$, on a $u_C(t) = U_0 e^{-t/\\tau}$ et $i(t) = -\\frac{U_0}{R} e^{-t/\\tau}$.',
            formula: {
              name: 'Charge et Décharge d’un condensateur (τ = R·C)',
              formula: '\\text{Charge : } u_C(t) = E(1 - e^{-t/\\tau}) \\quad ; \\quad \\text{Décharge : } u_C(t) = U_0 e^{-t/\\tau}',
              note: 'La tangente à l’origine (t = 0) coupe toujours l’asymptote horizontale à l’instant t = τ',
            },
            keyRule:
              'À $t = \\tau = RC$, le condensateur en charge atteint $1 - e^{-1} \\approx 63{,}2\\%$ de sa tension finale $E$ (et en décharge il lui reste $e^{-1} \\approx 36{,}8\\%$ de $U_0$).',
            konanTip:
              'Le temps de montée de $10\\%$ à $90\\%$ d’un circuit du premier ordre vaut toujours $t_m = \\tau \\ln(9) \\approx 2{,}2\\,\\tau$.',
            visualSchema: {
              type: 'function_plot',
              title: 'Allure normalisée de la charge u_C(t)/E et de la décharge en fonction de t/τ',
              plot: {
                xMin: 0,
                xMax: 5,
                yMin: 0,
                yMax: 1.15,
                xStep: 1,
                yStep: 0.2,
                xLabel: 't/τ',
                yLabel: 'uC/E',
                curves: [
                  {
                    label: 'Charge : 1 - exp(-t/τ)',
                    color: 'blue',
                    pieces: [{ expr: '1 - 2.71828^(-x)', from: 0, to: 5 }],
                  },
                  {
                    label: 'Décharge : exp(-t/τ)',
                    color: 'orange',
                    pieces: [{ expr: '2.71828^(-x)', from: 0, to: 5 }],
                  },
                ],
                points: [
                  { x: 1, y: 0.632, label: '(τ ; 0,63 E)', filled: true, color: 'blue' },
                  { x: 1, y: 0.368, label: '(τ ; 0,37 E)', filled: true, color: 'orange' },
                ],
                verticalLines: [{ x: 1, label: 't = τ', color: 'green' }],
                horizontalLines: [{ y: 1, label: 'Asymptote E', color: 'violet' }],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p1_ex3',
              type: 'mcq',
              prompt:
                'Un condensateur $C = 50\\,\\mu\\text{F}$ initialement chargé sous $U_0 = 20\\text{ V}$ se décharge à $t = 0$ dans une résistance $R = 1\\,\\text{k}\\Omega$. Au bout de quelle durée $t_1$ la tension à ses bornes est-elle divisée par $e \\approx 2{,}718$ ($u_C(t_1) = U_0 / e \\approx 7{,}36\\text{ V}$), et au bout de quelle durée $t_{1/2}$ est-elle divisée par $2$ ($u_C(t_{1/2}) = 10\\text{ V}$) ?',
              options: [
                '$t_1 = 50\\text{ ms}$ et $t_{1/2} = 50 \\ln(2) \\approx 34{,}7\\text{ ms}$',
                '$t_1 = 50\\text{ ms}$ et $t_{1/2} = 25\\text{ ms}$',
                '$t_1 = 20\\text{ ms}$ et $t_{1/2} = 20 \\ln(2) \\approx 13{,}9\\text{ ms}$',
                '$t_1 = 500\\text{ ms}$ et $t_{1/2} = 347\\text{ ms}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La constante de temps vaut $\\tau = R C = 10^3 \\times 50 \\times 10^{-6} = 0{,}05\\text{ s} = 50\\text{ ms}$. La tension vaut $U_0 e^{-t/\\tau} = U_0 e^{-1}$ à $t_1 = \\tau = 50\\text{ ms}$, et elle vaut $U_0 / 2$ lorsque $e^{-t_{1/2}/\\tau} = 1/2 \\implies t_{1/2} = \\tau \\ln(2) = 50 \\ln(2) \\approx 34{,}7\\text{ ms}$.',
              hint: 'Calcule $\\tau = RC$. Pour $U_0/e$, $t_1 = \\tau$ ; pour $U_0/2$, $t_{1/2} = \\tau \\ln(2)$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Circuit RL',
            stepTheme: 'violet',
            stepTitle: 'Établissement et rupture du courant dans un circuit RL série',
            paragraphText:
              'Dans un circuit $RL$ série soumis à une tension $e(t)$, la loi des mailles $R i_L + L \\frac{di_L}{dt} = e(t)$ s’écrit sous forme canonique : $\\tau \\frac{di_L}{dt} + i_L = \\frac{e(t)}{R}$, où la constante de temps vaut cette fois **$\\tau = \\frac{L}{R}$** (en secondes). Lors de l’**établissement du courant** à partir de $i_L(0) = 0$ sous un échelon $E$, le courant croît exponentiellement vers $\\frac{E}{R}$ selon $i_L(t) = \\frac{E}{R}(1 - e^{-t/\\tau})$ tandis que la tension aux bornes de la bobine décroît selon $u_L(t) = E e^{-t/\\tau}$. Lors de la **rupture** ($e(t) = 0$ dans une maille de décharge de résistance $R$), le courant décroît selon $i_L(t) = I_0 e^{-t/\\tau}$.',
            formula: {
              name: 'Établissement du courant dans un circuit RL (τ = L / R)',
              formula: '\\tau = \\frac{L}{R} \\quad ; \\quad i_L(t) = \\frac{E}{R}\\left(1 - e^{-t/\\tau}\\right) \\quad ; \\quad u_L(t) = E \\cdot e^{-t/\\tau}',
              note: 'Plus la résistance R est grande, plus la constante de temps τ = L/R d’une bobine est COURTE !',
            },
            keyRule:
              'Attention à l’écriture de la constante de temps : $\\tau = R \\cdot C$ pour un condensateur, mais $\\tau = \\frac{L}{R}$ pour une bobine.',
            konanTip:
              'Si le circuit contient plusieurs résistances autour de $C$ ou de $L$, la résistance à utiliser dans $\\tau = R_{Th} C$ ou $\\tau = L / R_{Th}$ est toujours la **résistance de Thévenin $R_{Th}$** vue aux bornes du condensateur ou de la bobine !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p1_ex4',
              type: 'mcq',
              prompt:
                'Une bobine réelle d’inductance $L = 0{,}4\\text{ H}$ et de résistance interne $r = 2\\,\\Omega$ est branchée en série avec une résistance $R = 18\\,\\Omega$ et soumise à un échelon de tension $E = 40\\text{ V}$ à $t = 0$ ($i_L(0) = 0$). Que valent la constante de temps $\\tau$ et l’intensité finale $I(\\infty)$ ?',
              options: [
                '$\\tau = 20\\text{ ms}$ et $I(\\infty) = 2\\text{ A}$',
                '$\\tau = 22{,}2\\text{ ms}$ et $I(\\infty) = 2{,}22\\text{ A}$',
                '$\\tau = 8\\text{ s}$ et $I(\\infty) = 2\\text{ A}$',
                '$\\tau = 200\\text{ ms}$ et $I(\\infty) = 20\\text{ A}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La résistance totale en série avec l’inductance $L$ est $R_{\\text{tot}} = R + r = 18 + 2 = 20\\,\\Omega$. On a donc $\\tau = \\frac{L}{R_{\\text{tot}}} = \\frac{0{,}4}{20} = 0{,}02\\text{ s} = 20\\text{ ms}$ et $I(\\infty) = \\frac{E}{R_{\\text{tot}}} = \\frac{40}{20} = 2\\text{ A}$.',
              hint: 'N’oublie pas d’additionner la résistance interne $r$ de la bobine à la résistance $R$ : $R_{\\text{tot}} = R + r$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'RLC libre',
            stepTheme: 'violet',
            stepTitle: 'Circuit RLC série en régime libre : les 3 régimes transitoires du 2nd ordre',
            paragraphText:
              'Dans un circuit $RLC$ série en régime libre ($L C \\frac{d^2 u_C}{dt^2} + R C \\frac{du_C}{dt} + u_C = 0$), on pose la **pulsation propre** $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ et le **facteur de qualité** $Q = \\frac{L \\omega_0}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$ (ou le coefficient d’amortissement $m = \\frac{1}{2Q} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$). L’équation caractéristique $r^2 + \\frac{\\omega_0}{Q} r + \\omega_0^2 = 0$ a pour discriminant réduit $\\Delta\' \\propto m^2 - 1$, ce qui définit trois régimes selon la résistance critique $R_c = 2\\sqrt{\\frac{L}{C}}$ : 1) **Pseudo-périodique** si $R < R_c$ ($Q > 1/2$, oscillations amorties) ; 2) **Critique** si $R = R_c$ ($Q = 1/2$, retour à zéro le plus rapide sans oscillation) ; 3) **Apériodique** si $R > R_c$ ($Q < 1/2$, retour lent sans oscillation).',
            formula: {
              name: 'Pulsation propre ω_0, Facteur de qualité Q et Résistance critique R_c',
              formula: '\\omega_0 = \\frac{1}{\\sqrt{LC}} \\quad ; \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} \\quad ; \\quad R_c = 2\\sqrt{\\frac{L}{C}} \\;\\; (Q = 1/2)',
              note: 'En régime pseudo-périodique (Q > 1/2), la pseudo-pulsation vaut Ω = ω_0 · √(1 - 1/(4Q²))',
            },
            keyRule:
              'En circuit $RLC$ série : $R < 2\\sqrt{L/C}$ ($Q > 0{,}5$) $\\implies$ pseudo-périodique (oscillant amorti) ; $R = 2\\sqrt{L/C}$ ($Q = 0{,}5$) $\\implies$ critique ; $R > 2\\sqrt{L/C}$ ($Q < 0{,}5$) $\\implies$ apériodique.',
            konanTip:
              'Le régime critique ($Q = 1/2$, $m = 1$) est celui qui est recherché en automatique et en instrumentation pour stabiliser un système le plus vite possible sans dépassement.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p1_ex5',
              type: 'mcq',
              prompt:
                'Un circuit $RLC$ série comporte une bobine $L = 0{,}1\\text{ H}$ et un condensateur $C = 10\\,\\mu\\text{F}$. Que valent la pulsation propre $\\omega_0$ et la résistance critique $R_c$ séparant le régime pseudo-périodique du régime apériodique ?',
              options: [
                '$\\omega_0 = 1000\\text{ rad/s}$ et $R_c = 200\\,\\Omega$',
                '$\\omega_0 = 1000\\text{ rad/s}$ et $R_c = 100\\,\\Omega$',
                '$\\omega_0 = 10^6\\text{ rad/s}$ et $R_c = 200\\,\\Omega$',
                '$\\omega_0 = 100\\text{ rad/s}$ et $R_c = 20\\,\\Omega$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{0{,}1 \\times 10^{-5}}} = \\frac{1}{\\sqrt{10^{-6}}} = 1000\\text{ rad/s}$. La résistance critique vaut $R_c = 2\\sqrt{\\frac{L}{C}} = 2\\sqrt{\\frac{0{,}1}{10^{-5}}} = 2\\sqrt{10^4} = 2 \\times 100 = 200\\,\\Omega$.',
              hint: 'Calcule $\\omega_0 = 1/\\sqrt{LC}$ et $R_c = 2\\sqrt{L/C}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Méthode générale',
            stepTheme: 'green',
            stepTitle: 'Méthode universelle pour résoudre n’importe quel transitoire du 1er ordre',
            paragraphText:
              'En examen, pour trouver l’évolution temporelle d’une grandeur $y(t)$ (tension ou courant) dans un circuit à un seul élément réactif ($C$ ou $L$) soumis à un échelon à $t = 0$, inutile de réintégrer toute l’équation différentielle à chaque fois ! Il suffit de déterminer $3$ nombres : 1) la valeur initiale juste après la commutation $y(0^+)$ (déduite de la continuité $u_C(0^+) = u_C(0^-)$ ou $i_L(0^+) = i_L(0^-)$) ; 2) la valeur finale en régime permanent $y(\\infty)$ (en remplaçant $C$ par un circuit ouvert ou $L$ par un fil) ; 3) la constante de temps $\\tau = R_{Th} C$ (ou $L / R_{Th}$). On écrit alors directement $y(t) = y(\\infty) + [y(0^+) - y(\\infty)] e^{-t/\\tau}$.',
            formula: {
              name: 'Formule universelle des régimes transitoires du 1er ordre',
              formula: 'y(t) = y(\\infty) + \\left[ y(0^+) - y(\\infty) \\right] \\cdot e^{-t/\\tau}',
              note: 'Où τ = R_Th · C (circuit capacitif) ou τ = L / R_Th (circuit inductif)',
            },
            keyRule:
              'Trois étapes suffisent pour tout circuit du 1er ordre : $y(0^+)$ par continuité, $y(\\infty)$ en régime permanent, et $\\tau$ avec la résistance de Thévenin $R_{Th}$ vue par $C$ ou $L$.',
            konanTip:
              'Vérifie toujours ta réponse finale en remplaçant $t = 0$ (tu dois retrouver $y(0^+)$) et $t \\to +\\infty$ (tu dois retrouver $y(\\infty)$) !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p1_ex6',
              type: 'mcq',
              prompt:
                'Un condensateur $C = 10\\,\\mu\\text{F}$ a une tension initiale $u_C(0^-) = 4\\text{ V}$. À $t = 0$, on le connecte aux bornes d’un générateur de Thévenin $(E_{Th} = 12\\text{ V}, R_{Th} = 5\\,\\text{k}\\Omega)$. Quelle est l’expression exacte de $u_C(t)$ pour $t \\ge 0$ ?',
              options: [
                '$u_C(t) = 12 - 8 e^{-20t}\\text{ V}$',
                '$u_C(t) = 12(1 - e^{-20t})\\text{ V}$',
                '$u_C(t) = 4 + 12 e^{-20t}\\text{ V}$',
                '$u_C(t) = 12 - 4 e^{-50t}\\text{ V}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par continuité, $u_C(0^+) = u_C(0^-) = 4\\text{ V}$. En régime permanent, $u_C(\\infty) = E_{Th} = 12\\text{ V}$. La constante de temps vaut $\\tau = R_{Th} C = 5 \\times 10^3 \\times 10^{-5} = 0{,}05\\text{ s}$, soit $1/\\tau = 20\\text{ s}^{-1}$. La formule universelle donne $u_C(t) = 12 + (4 - 12) e^{-20t} = 12 - 8 e^{-20t}\\text{ V}$.',
              hint: 'Applique $u_C(t) = u_C(\\infty) + [u_C(0^+) - u_C(\\infty)] e^{-t/\\tau}$ avec $u_C(0^+) = 4\\text{ V}$ et $u_C(\\infty) = 12\\text{ V}$.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch3_p2',
        order: 2,
        title: 'Régime sinusoïdal forcé, impédances complexes et résonance',
        summary:
          'Grandeurs sinusoïdales, valeur efficace, représentation complexe de Fresnel, impédances de R, L et C, loi d’Ohm complexe et résonance d’intensité du circuit RLC série.',
        conceptExplanation:
          'Lorsqu’un circuit linéaire stable est excité par une source sinusoïdale de pulsation $\\omega = 2\\pi f$, une fois le régime transitoire éteint, tous les courants et tensions du circuit oscillent en régime sinusoïdal forcé à la même pulsation $\\omega$. En associant à tout signal $x(t) = X_m \\cos(\\omega t + \\varphi)$ son amplitude complexe $\\underline{X} = X e^{j\\varphi}$ (avec $j^2 = -1$ et $X = X_m / \\sqrt{2}$ la valeur efficace), l’opérateur de dérivation $\\frac{d}{dt}$ devient une simple multiplication algébrique par $j\\omega$. Toutes les lois et tous les théorèmes du régime continu (Kirchhoff, diviseurs, Millman, Thévenin, Norton) se généralisent alors directement aux impédances complexes $\\underline{Z} = R + j X$.',
        formulas: [
          {
            name: 'Impédances complexes fondamentales et Loi d’Ohm complexe',
            formula: '\\underline{Z}_R = R \\quad ; \\quad \\underline{Z}_L = j L \\omega \\quad ; \\quad \\underline{Z}_C = \\frac{1}{j C \\omega} = -\\frac{j}{C \\omega} \\quad ; \\quad \\underline{U} = \\underline{Z} \\cdot \\underline{I}',
            note: 'Module : Z = U_eff / I_eff (en Ω) ; Argument : φ = φ_u - φ_i = arg(Z) (déphasage de u par rapport à i)',
          },
          {
            name: 'Résonance d’intensité du circuit RLC série',
            formula: '\\omega_0 = \\frac{1}{\\sqrt{LC}} \\implies \\underline{Z}(\\omega_0) = R \\; (\\varphi = 0) \\quad ; \\quad \\Delta \\omega = \\frac{R}{L} = \\frac{\\omega_0}{Q}',
            note: 'À la résonance (Lω_0 = 1/(Cω_0)), l’impédance Z est minimale (Z = R), le courant I est maximal (E/R) et u_C subit une surtension Q·E',
          },
        ],
        keyRule:
          'En notation complexe : dériver par rapport au temps revient à multiplier par $j\\omega$, et intégrer par rapport au temps revient à diviser par $j\\omega$.',
        workedExample: {
          title: 'Analyse d’un circuit RLC série en régime sinusoïdal et à la résonance',
          statement:
            'Un circuit $RLC$ série ($R = 30\\,\\Omega$, $L = 0{,}1\\text{ H}$, $C = 100\\,\\mu\\text{F}$) est alimenté par une tension sinusoïdale de valeur efficace $U = 150\\text{ V}$ et de pulsation $\\omega = 200\\text{ rad/s}$. Calculer l’impédance complexe $\\underline{Z}$, son module $Z$, la valeur efficace du courant $I$, le déphasage $\\varphi$ et la pulsation de résonance $\\omega_0$.',
          methodSteps: [
            'À $\\omega = 200\\text{ rad/s}$ : la réactance inductive vaut $X_L = L\\omega = 0{,}1 \\times 200 = 20\\,\\Omega$ et la réactance capacitive vaut $X_C = -\\frac{1}{C\\omega} = -\\frac{1}{10^{-4} \\times 200} = -50\\,\\Omega$.',
            'L’impédance complexe vaut $\\underline{Z} = R + j\\left(L\\omega - \\frac{1}{C\\omega}\\right) = 30 + j(20 - 50) = 30 - 30j\\,\\Omega$.',
            'Son module vaut $Z = \\sqrt{30^2 + (-30)^2} = 30\\sqrt{2} \\approx 42{,}4\\,\\Omega$ et son argument $\\varphi = \\arctan(-1) = -\\frac{\\pi}{4}\\text{ rad} = -45^\\circ$ (circuit globalement capacitif à cette fréquence).',
            'Le courant efficace vaut $I = \\frac{U}{Z} = \\frac{150}{30\\sqrt{2}} = \\frac{5}{\\sqrt{2}} \\approx 3{,}54\\text{ A}$. La résonance a lieu à $\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{10^{-5}}} \\approx 316{,}2\\text{ rad/s}$ (où $I_{\\max} = \\frac{150}{30} = 5\\text{ A}$).',
          ],
          conclusion: 'À $\\omega = 200\\text{ rad/s}$, $Z = 30\\sqrt{2}\\,\\Omega$, $I \\approx 3{,}54\\text{ A}$ et la tension est en retard de $45^\\circ$ sur le courant.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Complexe & Fresnel',
            stepTheme: 'blue',
            stepTitle: 'Grandeur sinusoïdale, valeur efficace et représentation complexe',
            paragraphText:
              'Un signal sinusoïdal $u(t) = U_m \\cos(\\omega t + \\varphi_u)$ est caractérisé par son amplitude maximale $U_m$, sa pulsation $\\omega = 2\\pi f = \\frac{2\\pi}{T}$ (en $\\text{rad/s}$) et sa phase à l’origine $\\varphi_u$. Sa **valeur efficace** $U$ (racine de la moyenne du carré sur une période, mesurée par un voltmètre AC RMS) vaut pour un signal sinusoïdal **$U = \\frac{U_m}{\\sqrt{2}}$**. On associe à $u(t)$ le nombre complexe $\\underline{u}(t) = U_m e^{j(\\omega t + \\varphi_u)} = \\underline{U}_m e^{j\\omega t}$ (ou en valeur efficace complexe $\\underline{U} = U e^{j\\varphi_u}$), représenté dans le plan complexe par un **vecteur de Fresnel** de norme $U$ et d’angle polaire $\\varphi_u$.',
            formula: {
              name: 'Valeur efficace sinusoïdale et dérivation complexe',
              formula: 'U_{\\text{eff}} = \\frac{U_m}{\\sqrt{2}} \\quad ; \\quad \\underline{U} = U_{\\text{eff}} e^{j\\varphi_u} \\quad ; \\quad \\frac{d}{dt} \\longleftrightarrow \\times (j\\omega)',
              note: 'Multiplier par j = e^(jπ/2) fait tourner le vecteur de Fresnel de +π/2 (+90°, avance de phase)',
            },
            keyRule:
              'Pour une grandeur purement sinusoïdale, la valeur moyenne est nulle ($\\langle u \\rangle = 0$) et la valeur efficace vaut $U_{\\text{eff}} = \\frac{U_{\\max}}{\\sqrt{2}}$.',
            konanTip:
              'La tension du secteur CIE en Côte d’Ivoire de « $220\\text{ V} - 50\\text{ Hz}$ » désigne la **valeur efficace** $U = 220\\text{ V}$ : l’amplitude crête vaut en réalité $U_m = 220\\sqrt{2} \\approx 311\\text{ V}$ et $\\omega = 100\\pi \\approx 314\\text{ rad/s}$ !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p2_ex1',
              type: 'mcq',
              prompt:
                'Un courant sinusoïdal a pour expression instantanée $i(t) = 4\\sqrt{2} \\cos(100\\pi t - \\pi/6)\\text{ A}$. Que valent sa fréquence $f$, sa valeur efficace $I$ et sa phase à l’origine $\\varphi_i$ ?',
              options: [
                '$f = 50\\text{ Hz}$, $I = 4\\text{ A}$ et $\\varphi_i = -\\pi/6\\text{ rad}$',
                '$f = 100\\text{ Hz}$, $I = 4\\sqrt{2}\\text{ A}$ et $\\varphi_i = -\\pi/6\\text{ rad}$',
                '$f = 50\\text{ Hz}$, $I = 2\\sqrt{2}\\text{ A}$ et $\\varphi_i = +\\pi/6\\text{ rad}$',
                '$f = 100\\pi\\text{ Hz}$, $I = 4\\text{ A}$ et $\\varphi_i = -\\pi/6\\text{ rad}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La pulsation est $\\omega = 2\\pi f = 100\\pi \\implies f = 50\\text{ Hz}$. L’amplitude maximale est $I_m = 4\\sqrt{2}\\text{ A}$, donc la valeur efficace vaut $I = \\frac{I_m}{\\sqrt{2}} = 4\\text{ A}$, et la phase à l’origine est $\\varphi_i = -\\pi/6\\text{ rad}$.',
              hint: 'Divise $\\omega = 100\\pi$ par $2\\pi$ pour $f$, et divise $I_m = 4\\sqrt{2}$ par $\\sqrt{2}$ pour $I$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Impédances Z',
            stepTheme: 'violet',
            stepTitle: 'Impédance complexe Z, Admittance Y et comportement de R, L et C',
            paragraphText:
              'En convention récepteur, l’**impédance complexe** d’un dipôle linéaire est le rapport $\\underline{Z} = \\frac{\\underline{U}}{\\underline{I}} = R + j X = Z e^{j\\varphi}$ (en $\\Omega$), où $R = \\text{Re}(\\underline{Z})$ est la résistance, $X = \\text{Im}(\\underline{Z})$ est la **réactance**, $Z = |\\underline{Z}| = \\frac{U}{I}$ est le module et $\\varphi = \\arg(\\underline{Z}) = \\varphi_u - \\varphi_i$ est le déphasage de la tension sur le courant. Son inverse $\\underline{Y} = \\frac{1}{\\underline{Z}} = G + j B$ est l’**admittance complexe** (en Siemens). Pour une résistance : $\\underline{Z}_R = R$ ($\\varphi = 0$, en phase). Pour une bobine : $\\underline{Z}_L = j L \\omega$ ($\\varphi = +\\pi/2$, $u$ en avance de $90^\\circ$ sur $i$). Pour un condensateur : $\\underline{Z}_C = \\frac{1}{j C \\omega} = -j \\frac{1}{C \\omega}$ ($\\varphi = -\\pi/2$, $u$ en retard de $90^\\circ$ sur $i$).',
            formula: {
              name: 'Module et Argument d’une impédance complexe Z = R + j X',
              formula: 'Z = |\\underline{Z}| = \\sqrt{R^2 + X^2} = \\frac{U_{\\text{eff}}}{I_{\\text{eff}}} \\quad ; \\quad \\tan \\varphi = \\frac{X}{R} \\;\\; (\\varphi = \\varphi_u - \\varphi_i)',
              note: 'Rappel crucial : 1 / j = -j. Donc Z_C = 1 / (jCω) = -j / (Cω) a une réactance négative X_C = -1/(Cω).',
            },
            keyRule:
              'Bobine ($X_L = +L\\omega > 0$) : tension en avance sur le courant ($\\varphi > 0$). Condensateur ($X_C = -\\frac{1}{C\\omega} < 0$) : tension en retard sur le courant ($\\varphi < 0$).',
            konanTip:
              'En basse fréquence ($\\omega \\to 0$), $|Z_L| \\to 0$ (fil) et $|Z_C| \\to \\infty$ (ouvert). En très haute fréquence ($\\omega \\to \\infty$), c’est l’inverse : la bobine bloque ($|Z_L| \\to \\infty$) et le condensateur laisse tout passer ($|Z_C| \\to 0$, condensateur de découplage) !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p2_ex2',
              type: 'mcq',
              prompt:
                'Une bobine réelle de résistance $R = 30\\,\\Omega$ et d’inductance $L = 0{,}04\\text{ H}$ est parcourue par un courant sinusoïdal de pulsation $\\omega = 1000\\text{ rad/s}$ et de valeur efficace $I = 2\\text{ A}$. Que valent le module $Z$ de son impédance et la tension efficace $U$ à ses bornes ?',
              options: [
                '$Z = 50\\,\\Omega$ et $U = 100\\text{ V}$',
                '$Z = 70\\,\\Omega$ et $U = 140\\text{ V}$',
                '$Z = 40\\,\\Omega$ et $U = 80\\text{ V}$',
                '$Z = 50\\,\\Omega$ et $U = 25\\text{ V}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’impédance complexe de la bobine réelle (modèle série $R + L$) est $\\underline{Z} = R + jL\\omega = 30 + j(0{,}04 \\times 1000) = 30 + 40j\\,\\Omega$. Son module vaut $Z = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$ (triangle $3-4-5$). La tension efficace à ses bornes vaut $U = Z \\cdot I = 50 \\times 2 = 100\\text{ V}$.',
              hint: 'Calcule $X_L = L\\omega = 40\\,\\Omega$, puis $Z = \\sqrt{R^2 + X_L^2}$ et $U = Z \\cdot I$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Lois en complexe',
            stepTheme: 'green',
            stepTitle: 'Lois de Kirchhoff, associations et ponts diviseurs en régime sinusoïdal',
            paragraphText:
              'En représentation complexe, les lois de Kirchhoff s’écrivent $\\sum \\varepsilon_k \\underline{I}_k = 0$ et $\\sum \\varepsilon_k \\underline{U}_k = 0$. Les impédances en série s’additionnent ($\\underline{Z}_{\\text{série}} = \\sum \\underline{Z}_k$) et les admittances en parallèle s’additionnent ($\\underline{Y}_{\\text{par}} = \\sum \\underline{Y}_k$). **Attention au piège fondamental** : on n’additionne **jamais** les valeurs efficaces scalaires des tensions en série ($U_{\\text{tot}} \\neq U_R + U_L$ car elles sont déphasées de $90^\\circ$ !). En vertu du théorème de Pythagore dans le diagramme de Fresnel d’un circuit $RL$ série, on a $U_{\\text{tot}} = \\sqrt{U_R^2 + U_L^2}$, et dans un circuit $RLC$ série, $U_{\\text{tot}} = \\sqrt{U_R^2 + (U_L - U_C)^2}$.',
            formula: {
              name: 'Sommation vectorielle des tensions efficaces en série (RLC)',
              formula: '\\underline{U} = \\underline{U}_R + \\underline{U}_L + \\underline{U}_C \\quad \\Longrightarrow \\quad U = \\sqrt{U_R^2 + (U_L - U_C)^2}',
              note: 'U_L et U_C sont en opposition de phase (déphasées de π rad entre elles) et en quadrature (±π/2) avec U_R',
            },
            keyRule:
              'En régime alternatif sinusoïdal, la loi des mailles s’applique aux tensions instantanées $u(t)$ et aux tensions complexes $\\underline{U}$, mais JAMAIS par simple somme arithmétique des valeurs efficaces $U_{\\text{eff}}$ !',
            konanTip:
              'De même pour un circuit parallèle $R \\parallel L \\parallel C$ : les courants efficaces vérifient $I_{\\text{tot}} = \\sqrt{I_R^2 + (I_L - I_C)^2}$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p2_ex3',
              type: 'mcq',
              prompt:
                'Dans un circuit $RLC$ série en régime sinusoïdal, un voltmètre mesure les valeurs efficaces suivantes aux bornes de chaque composant : $U_R = 60\\text{ V}$, $U_L = 130\\text{ V}$ et $U_C = 50\\text{ V}$. Quelle est la valeur efficace $U$ de la tension totale aux bornes de l’ensemble $RLC$ ?',
              options: ['$100\\text{ V}$', '$240\\text{ V}$', '$140\\text{ V}$', '$80\\text{ V}$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après le diagramme de Fresnel du circuit $RLC$ série, $U = \\sqrt{U_R^2 + (U_L - U_C)^2} = \\sqrt{60^2 + (130 - 50)^2} = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100\\text{ V}$.',
              hint: 'Utilise la relation de Pythagore de Fresnel : $U = \\sqrt{U_R^2 + (U_L - U_C)^2}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Résonance RLC',
            stepTheme: 'violet',
            stepTitle: 'Résonance d’intensité du circuit RLC série et facteur de surtension Q',
            paragraphText:
              'L’impédance d’un circuit $RLC$ série vaut $\\underline{Z}(\\omega) = R + j\\left(L\\omega - \\frac{1}{C\\omega}\\right)$, de module $Z(\\omega) = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}$. Lorsque la pulsation $\\omega$ est égale à la **pulsation propre de résonance $\\omega_0 = \\frac{1}{\\sqrt{LC}}$**, la réactance totale s’annule ($L\\omega_0 = \\frac{1}{C\\omega_0}$) : 1) l’impédance passe par son **minimum absolu** $Z_{\\min} = R$ (purement réelle) ; 2) le déphasage est nul ($\\varphi = 0$, tension et courant en phase) ; 3) l’intensité efficace passe par son **maximum** $I_0 = \\frac{U}{R}$. À la résonance, les tensions aux bornes de la bobine et du condensateur sont égales à **$U_L(\\omega_0) = U_C(\\omega_0) = Q \\cdot U$**, où $Q = \\frac{L\\omega_0}{R} = \\frac{1}{R C \\omega_0}$ est le **facteur de qualité (ou facteur de surtension)**.',
            formula: {
              name: 'Propriétés à la résonance d’intensité (ω = ω_0 = 1/√(LC))',
              formula: 'Z(\\omega_0) = R \\quad ; \\quad I_{\\max} = \\frac{U}{R} \\quad ; \\quad U_L(\\omega_0) = U_C(\\omega_0) = Q \\cdot U \\;\\; \\left(Q = \\frac{L\\omega_0}{R}\\right)',
              note: 'Si Q > 1, U_L et U_C à la résonance sont Q fois plus grandes que la tension d’alimentation U (mais elles se compensent car en opposition de phase !)',
            },
            keyRule:
              'À la résonance d’intensité ($\\omega = \\omega_0 = 1/\\sqrt{LC}$), le circuit $RLC$ série se comporte vis-à-vis du générateur comme une résistance pure $R$, mais la bobine et le condensateur subissent chacun une surtension $Q \\cdot U$.',
            konanTip:
              'Pour $\\omega < \\omega_0$, on a $L\\omega < \\frac{1}{C\\omega}$ donc le circuit $RLC$ série est **capacitif** ($\\varphi < 0$). Pour $\\omega > \\omega_0$, on a $L\\omega > \\frac{1}{C\\omega}$ donc le circuit est **inductif** ($\\varphi > 0$).',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p2_ex4',
              type: 'mcq',
              prompt:
                'Un circuit $RLC$ série de résistance $R = 10\\,\\Omega$, d’inductance $L = 0{,}05\\text{ H}$ et de pulsation de résonance $\\omega_0 = 2000\\text{ rad/s}$ est alimenté à la résonance par une tension efficace $U = 15\\text{ V}$. Que valent le facteur de qualité $Q$ et la tension efficace $U_C$ aux bornes du condensateur à la résonance ?',
              options: [
                '$Q = 10$ et $U_C = 150\\text{ V}$',
                '$Q = 10$ et $U_C = 15\\text{ V}$',
                '$Q = 100$ et $U_C = 1500\\text{ V}$',
                '$Q = 1$ et $U_C = 15\\text{ V}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le facteur de qualité vaut $Q = \\frac{L\\omega_0}{R} = \\frac{0{,}05 \\times 2000}{10} = \\frac{100}{10} = 10$. À la résonance, la tension aux bornes du condensateur subit une surtension égale à $Q$ fois la tension d’alimentation : $U_C(\\omega_0) = Q \\cdot U = 10 \\times 15 = 150\\text{ V}$.',
              hint: 'Calcule $Q = \\frac{L\\omega_0}{R}$ puis multiplie la tension d’alimentation $U$ par $Q$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Bande passante',
            stepTheme: 'violet',
            stepTitle: 'Bande passante à -3 dB et sélectivité d’un circuit résonant',
            paragraphText:
              'La **bande passante à $-3\\text{ dB}$** de la résonance d’intensité est l’intervalle des pulsations $[\\omega_1, \\omega_2]$ pour lesquelles la puissance dissipée dans $R$ est au moins égale à la moitié de la puissance maximale, ce qui correspond à un courant efficace $I(\\omega) \\ge \\frac{I_{\\max}}{\\sqrt{2}}$, soit une impédance $Z(\\omega) \\le R\\sqrt{2}$. Les pulsations de coupure $\\omega_1$ et $\\omega_2$ vérifient $L\\omega - \\frac{1}{C\\omega} = \\pm R$ (soit $\\varphi = \\pm 45^\\circ$). En soustrayant les deux équations, on trouve une largeur de bande passante **$\\Delta \\omega = \\omega_2 - \\omega_1 = \\frac{R}{L} = \\frac{\\omega_0}{Q}$** (et en fréquence $\\Delta f = \\frac{f_0}{Q}$) avec $\\omega_1 \\omega_2 = \\omega_0^2$.',
            formula: {
              name: 'Largeur de la bande passante à -3 dB et Facteur de qualité',
              formula: '\\Delta \\omega = \\omega_2 - \\omega_1 = \\frac{R}{L} = \\frac{\\omega_0}{Q} \\quad \\Longleftrightarrow \\quad Q = \\frac{\\omega_0}{\\Delta \\omega} = \\frac{f_0}{\\Delta f}',
              note: 'Aux pulsations de coupure ω_1 et ω_2 : I = I_max / √2, Z = R√2 et φ = -π/4 (en ω_1) ou +π/4 (en ω_2)',
            },
            keyRule:
              'Plus le facteur de qualité $Q = \\frac{f_0}{\\Delta f}$ est élevé, plus la bande passante $\\Delta f$ est étroite et plus le circuit résonant est **sélectif** (récepteur radio).',
            konanTip:
              'Retiens que la largeur de bande passante $\\Delta \\omega = \\frac{R}{L}$ d’un circuit $RLC$ série ne dépend que de $R$ et de $L$ (pas de $C$) !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p2_ex5',
              type: 'mcq',
              prompt:
                'Un circuit d’accord d’antenne $RLC$ série résonne à la fréquence $f_0 = 1\\text{ MHz}$ avec un facteur de qualité $Q = 50$. Quelle est la largeur de sa bande passante $\\Delta f$ à $-3\\text{ dB}$ ?',
              options: ['$20\\text{ kHz}$', '$50\\text{ kHz}$', '$2\\text{ kHz}$', '$200\\text{ kHz}$'],
              correctAnswerIndex: 0,
              explanation:
                'On a $Q = \\frac{f_0}{\\Delta f} \\implies \\Delta f = \\frac{f_0}{Q} = \\frac{1000\\text{ kHz}}{50} = 20\\text{ kHz}$.',
              hint: 'Divise la fréquence de résonance $f_0$ par le facteur de qualité $Q$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Filtres RC',
            stepTheme: 'slate',
            stepTitle: 'Introduction au filtrage : filtre RC passe-bas et filtre RC passe-haut du 1er ordre',
            paragraphText:
              'Un simple diviseur de tension composé d’une résistance $R$ et d’un condensateur $C$ en série réalise un filtre passif du premier ordre de pulsation de coupure $\\omega_c = \\frac{1}{RC} = \\frac{1}{\\tau}$. Si l’on prélève la tension de sortie **aux bornes du condensateur $C$**, le transfert complexe vaut $\\underline{H}(j\\omega) = \\frac{\\underline{Z}_C}{R + \\underline{Z}_C} = \\frac{1}{1 + j RC\\omega} = \\frac{1}{1 + j(\\omega/\\omega_c)}$ : c’est un **filtre passe-bas** ($|H(0)| = 1$ et $|H(\\infty)| = 0$). Si l’on prélève la sortie **aux bornes de la résistance $R$**, $\\underline{H}(j\\omega) = \\frac{j(\\omega/\\omega_c)}{1 + j(\\omega/\\omega_c)}$ : c’est un **filtre passe-haut** (qui bloque la composante continue).',
            formula: {
              name: 'Fonctions de transfert des cellules RC passe-bas et passe-haut',
              formula: '\\underline{H}_{\\text{PB}}(j\\omega) = \\frac{1}{1 + j\\frac{\\omega}{\\omega_c}} \\quad ; \\quad \\underline{H}_{\\text{PH}}(j\\omega) = \\frac{j\\frac{\\omega}{\\omega_c}}{1 + j\\frac{\\omega}{\\omega_c}} \\quad \\left(\\omega_c = \\frac{1}{RC}\\right)',
              note: 'À la pulsation de coupure ω = ω_c : |H| = 1/√2 ≈ 0,707 (soit un gain en décibels G_dB = 20 log(|H|) = -3 dB)',
            },
            keyRule:
              'Pour reconnaître un filtre sans calcul : remplace $C$ par un circuit ouvert en BF ($\\omega \\to 0$) et par un fil en HF ($\\omega \\to \\infty$), puis regarde ce que devient la tension de sortie.',
            konanTip:
              'Cette astuce asymptotique BF/HF te servira dans tous les cours d’électronique et de traitement du signal de Licence 1, 2 et 3 !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p2_ex6',
              type: 'mcq',
              prompt:
                'Un filtre $RC$ passe-bas est constitué d’une résistance $R = 1\\,\\text{k}\\Omega$ et d’un condensateur $C = 100\\text{ nF}$. Que valent sa pulsation de coupure $\\omega_c$ à $-3\\text{ dB}$ et le module $|\\underline{H}(j\\omega_c)|$ de sa fonction de transfert à cette pulsation ?',
              options: [
                '$\\omega_c = 10\\,000\\text{ rad/s}$ et $|\\underline{H}(j\\omega_c)| = \\frac{1}{\\sqrt{2}} \\approx 0{,}707$',
                '$\\omega_c = 1000\\text{ rad/s}$ et $|\\underline{H}(j\\omega_c)| = 0{,}5$',
                '$\\omega_c = 10\\,000\\text{ rad/s}$ et $|\\underline{H}(j\\omega_c)| = 1$',
                '$\\omega_c = 100\\,000\\text{ rad/s}$ et $|\\underline{H}(j\\omega_c)| = \\frac{1}{\\sqrt{2}}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La pulsation de coupure vaut $\\omega_c = \\frac{1}{RC} = \\frac{1}{10^3 \\times 10^{-7}} = 10^4\\text{ rad/s} = 10\\,000\\text{ rad/s}$. À $\\omega = \\omega_c$, $\\underline{H}(j\\omega_c) = \\frac{1}{1 + j}$, dont le module vaut $|\\underline{H}(j\\omega_c)| = \\frac{1}{\\sqrt{1^2 + 1^2}} = \\frac{1}{\\sqrt{2}} \\approx 0{,}707$ ($-3\\text{ dB}$).',
              hint: 'Calcule $\\omega_c = 1/(RC)$ et le module de $\\frac{1}{1 + j}$.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_electrocine_ch3_p3',
        order: 3,
        title: 'Puissances en régime alternatif, théorème de Boucherot et facteur de puissance',
        summary:
          'Puissances active P, réactive Q, apparente S, puissance complexe, triangle des puissances, théorème de Boucherot et relèvement du facteur de puissance cos φ.',
        conceptExplanation:
          'En régime sinusoïdal forcé, la puissance instantanée $p(t) = u(t) i(t) = U I \\cos\\varphi + U I \\cos(2\\omega t + \\varphi_u + \\varphi_i)$ oscille à la pulsation double $2\\omega$ autour de sa valeur moyenne, appelée puissance active $P = U I \\cos\\varphi$. Pour caractériser complètement les échanges d’énergie entre une source et une installation contenant des éléments réactifs (moteurs inductifs, condensateurs), on introduit trois puissances formant un triangle rectangle (active $P$ en Watts, réactive $Q$ en var, apparente $S$ en VA) ainsi que le théorème de conservation de Boucherot, indispensable pour dimensionner les batteries de condensateurs relevant le facteur de puissance $\\cos\\varphi$.',
        formulas: [
          {
            name: 'Puissances Active (P), Réactive (Q), Apparente (S) et Facteur de puissance',
            formula: 'P = U I \\cos\\varphi \\; [\\text{W}] \\quad ; \\quad Q = U I \\sin\\varphi \\; [\\text{var}] \\quad ; \\quad S = U I = \\sqrt{P^2 + Q^2} \\; [\\text{VA}]',
            note: 'Puissance complexe : S_complexe = (1/2) U_m · I_m* = U · I* = P + j Q. Facteur de puissance : k = cos φ = P / S.',
          },
          {
            name: 'Théorème de Boucherot et Capacité de relèvement de cos φ à cos φ’',
            formula: 'P_{\\text{tot}} = \\sum P_k \\quad ; \\quad Q_{\\text{tot}} = \\sum Q_k \\quad ; \\quad C = \\frac{P (\\tan\\varphi - \\tan\\varphi\')}{\\omega U^2}',
            note: 'Attention : les puissances apparentes ne s’additionnent PAS algébriquement (S_tot = √(P_tot² + Q_tot²) ≠ Σ S_k)',
          },
        ],
        keyRule:
          'D’après le théorème de Boucherot, on additionne algébriquement les puissances actives $P = \\sum P_k$ et les puissances réactives $Q = \\sum Q_k$, puis on calcule $S = \\sqrt{P^2 + Q^2}$ et $I = S/U$.',
        workedExample: {
          title: 'Relèvement du facteur de puissance d’une installation industrielle',
          statement:
            'Un atelier alimenté sous $U = 220\\text{ V}$ à $f = 50\\text{ Hz}$ ($\\omega = 100\\pi \\approx 314\\text{ rad/s}$) consomme une puissance active $P = 4{,}4\\text{ kW}$ avec un facteur de puissance inductif $\\cos\\varphi = 0{,}6$ ($\\sin\\varphi = 0{,}8$, $\\tan\\varphi = 4/3$). Calculer le courant en ligne $I$, puis la capacité $C$ du condensateur à placer en parallèle pour relever le facteur de puissance à $\\cos\\varphi\' = 1$, et le nouveau courant $I\'$.',
          methodSteps: [
            'Avant compensation : $P = U I \\cos\\varphi \\implies I = \\frac{P}{U \\cos\\varphi} = \\frac{4400}{220 \\times 0{,}6} = \\frac{20}{0{,}6} = 33{,}33\\text{ A}$. La puissance réactive absorbée vaut $Q = P \\tan\\varphi = 4400 \\times \\frac{4}{3} \\approx 5867\\text{ var}$.',
            'Pour relever le facteur de puissance à $\\cos\\varphi\' = 1$ ($\\tan\\varphi\' = 0$), le condensateur en parallèle doit fournir la puissance réactive $Q_C = -C \\omega U^2 = -Q$, de sorte que $Q\' = Q + Q_C = 0$.',
            'On en déduit $C = \\frac{P \\tan\\varphi}{\\omega U^2} = \\frac{5867}{314 \\times 220^2} \\approx 3{,}86 \\times 10^{-4}\\text{ F} = 386\\,\\mu\\text{F}$.',
            'Après compensation, la puissance active $P = 4400\\text{ W}$ est inchangée, mais le courant en ligne tombe à $I\' = \\frac{P}{U \\times 1} = \\frac{4400}{220} = 20\\text{ A}$ (réduction des pertes Joule en ligne $(I\'/I)^2 = 0{,}36$, soit $-64\\%$ de pertes !).',
          ],
          conclusion: 'Un condensateur $C \\approx 386\\,\\mu\\text{F}$ réduit le courant en ligne de $33{,}3\\text{ A}$ à $20\\text{ A}$ pour la même puissance utile de $4{,}4\\text{ kW}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Puissance Active P',
            stepTheme: 'blue',
            stepTitle: 'Puissance instantanée p(t), puissance active P et facteur de puissance cos φ',
            paragraphText:
              'Pour un dipôle soumis à $u(t) = U\\sqrt{2}\\cos(\\omega t + \\varphi_u)$ et parcouru par $i(t) = I\\sqrt{2}\\cos(\\omega t + \\varphi_i)$, avec le déphasage $\\varphi = \\varphi_u - \\varphi_i$, la formule trigonométrique $\\cos a \\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]$ donne la puissance instantanée : $p(t) = U I \\cos\\varphi + U I \\cos(2\\omega t + \\varphi_u + \\varphi_i)$. La valeur moyenne de $p(t)$ sur une période est la **puissance active** **$P = \\langle p(t) \\rangle = U I \\cos\\varphi$**, exprimée en **Watts (W)**. Le terme sans dimension $k = \\cos\\varphi \\in [0, 1]$ est appelé **facteur de puissance** du dipôle.',
            formula: {
              name: 'Puissance active (moyenne temporelle de p(t))',
              formula: 'P = \\frac{1}{T} \\int_0^T u(t) i(t)\\,dt = U_{\\text{eff}} \\cdot I_{\\text{eff}} \\cdot \\cos\\varphi = R \\cdot I_{\\text{eff}}^2',
              note: 'Seule la partie résistive R d’une impédance Z = R + jX consomme de la puissance active : P_L = 0 et P_C = 0',
            },
            keyRule:
              'Un condensateur idéal ($\\varphi = -\\pi/2$) et une bobine idéale ($\\varphi = +\\pi/2$) ont un facteur de puissance nul ($\\cos(\\pm\\pi/2) = 0$) : ils ne consomment aucune puissance active en moyenne ($P = 0$).',
            konanTip:
              'Dans toute impédance $\\underline{Z} = R + j X$ parcourue par le courant efficace $I$, la puissance active dissipée vaut toujours $P = R I^2$, exactement comme en continu !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p3_ex1',
              type: 'mcq',
              prompt:
                'Un dipôle alimenté sous une tension sinusoïdale de valeur maximale $U_m = 200\\sqrt{2}\\text{ V}$ est traversé par un courant de valeur maximale $I_m = 5\\sqrt{2}\\text{ A}$ déphasé en retard de $\\varphi = \\pi/3\\text{ rad}$ ($60^\\circ$) par rapport à la tension. Quelle est la puissance active $P$ reçue par ce dipôle ?',
              options: ['$500\\text{ W}$', '$1000\\text{ W}$', '$866\\text{ W}$', '$250\\text{ W}$'],
              correctAnswerIndex: 0,
              explanation:
                'Les valeurs efficaces sont $U = \\frac{U_m}{\\sqrt{2}} = 200\\text{ V}$ et $I = \\frac{I_m}{\\sqrt{2}} = 5\\text{ A}$. La puissance active vaut $P = U I \\cos\\varphi = 200 \\times 5 \\times \\cos(\\pi/3) = 1000 \\times 0{,}5 = 500\\text{ W}$.',
              hint: 'Passe d’abord aux valeurs efficaces $U = U_m/\\sqrt{2}$ et $I = I_m/\\sqrt{2}$, puis calcule $P = U I \\cos(\\pi/3)$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Réactive Q & Apparente S',
            stepTheme: 'blue',
            stepTitle: 'Puissance réactive Q, puissance apparente S et triangle des puissances',
            paragraphText:
              'Pour quantifier l’échange d’énergie fluctuante entre les éléments réactifs ($L$ et $C$) et la source, on définit la **puissance réactive** **$Q = U I \\sin\\varphi = X I^2$**, exprimée en **voltampères réactifs (var)**, et la **puissance apparente** **$S = U I = Z I^2$**, exprimée en **voltampères (VA)** (qui sert à dimensionner les transformateurs et alternateurs). Pour une bobine ($X_L = +L\\omega > 0, \\varphi = +\\pi/2$), $Q_L = +L\\omega I^2 = +\\frac{U_L^2}{L\\omega} > 0$ (elle **absorbe** du réactif). Pour un condensateur ($X_C = -\\frac{1}{C\\omega} < 0, \\varphi = -\\pi/2$), $Q_C = -\\frac{I^2}{C\\omega} = -C\\omega U_C^2 < 0$ (il **fournit** du réactif). Les trois puissances forment le **triangle rectangle des puissances** : $S^2 = P^2 + Q^2$ et $\\tan\\varphi = \\frac{Q}{P}$.',
            formula: {
              name: 'Triangle des puissances et puissances réactives de L et C',
              formula: 'S = \\sqrt{P^2 + Q^2} \\quad ; \\quad \\cos\\varphi = \\frac{P}{S} \\quad ; \\quad \\tan\\varphi = \\frac{Q}{P} \\quad ; \\quad Q_L = +L\\omega I_L^2 \\; ; \\; Q_C = -C\\omega U_C^2',
              note: 'Signe de Q : Q > 0 pour un récepteur inductif (φ > 0) ; Q < 0 pour un récepteur capacitif (φ < 0)',
            },
            keyRule:
              'Une bobine consomme de la puissance réactive ($Q_L > 0$), tandis qu’un condensateur a une puissance réactive reçue négative ($Q_C = -C\\omega U^2 < 0$), ce qui signifie qu’il fournit de la puissance réactive.',
            konanTip:
              'Respecte scrupuleusement les unités aux examens : $P$ en **W** (Watts), $Q$ en **var** (voltampères réactifs) et $S$ en **VA** (voltampères).',
            visualSchema: {
              type: 'bar_chart',
              title: 'Exemple de triangle des puissances 3 - 4 - 5 (cos φ = 0,8 inductif)',
              barChart: {
                yLabel: 'Amplitude',
                unit: 'kW / kvar / kVA',
                bars: [
                  { label: 'Active P (W)', value: 4, color: 'blue', annotation: 'P = S cos φ = 4 kW' },
                  { label: 'Réactive Q (var)', value: 3, color: 'orange', annotation: 'Q = S sin φ = 3 kvar' },
                  { label: 'Apparente S (VA)', value: 5, color: 'violet', annotation: 'S = √(P²+Q²) = 5 kVA' },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p3_ex2',
              type: 'mcq',
              prompt:
                'Un moteur électrique absorbe une puissance active $P = 3\\text{ kW}$ et une puissance réactive inductive $Q = 4\\text{ kvar}$. Que valent sa puissance apparente $S$ et son facteur de puissance $\\cos\\varphi$ ?',
              options: [
                '$S = 5\\text{ kVA}$ et $\\cos\\varphi = 0{,}6$',
                '$S = 7\\text{ kVA}$ et $\\cos\\varphi = 0{,}43$',
                '$S = 5\\text{ kVA}$ et $\\cos\\varphi = 0{,}8$',
                '$S = 3{,}5\\text{ kVA}$ et $\\cos\\varphi = 0{,}75$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après le théorème de Pythagore dans le triangle des puissances : $S = \\sqrt{P^2 + Q^2} = \\sqrt{3^2 + 4^2} = 5\\text{ kVA}$. Le facteur de puissance vaut $\\cos\\varphi = \\frac{P}{S} = \\frac{3}{5} = 0{,}6$.',
              hint: 'Calcule $S = \\sqrt{P^2 + Q^2}$ puis $\\cos\\varphi = P / S$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Puissance complexe',
            stepTheme: 'violet',
            stepTitle: 'Puissance complexe S = U · I* = P + j Q',
            paragraphText:
              'En multipliant la tension efficace complexe $\\underline{U} = U e^{j\\varphi_u}$ par le **conjugué** du courant efficace complexe $\\underline{I}^* = I e^{-j\\varphi_i}$, on définit la **puissance complexe** $\\underline{S} = \\underline{U} \\cdot \\underline{I}^* = U I e^{j(\\varphi_u - \\varphi_i)} = U I e^{j\\varphi} = U I \\cos\\varphi + j U I \\sin\\varphi = P + j Q$. La puissance active $P = \\text{Re}(\\underline{S})$ est la partie réelle de $\\underline{S}$, la puissance réactive $Q = \\text{Im}(\\underline{S})$ est sa partie imaginaire, et la puissance apparente $S = |\\underline{S}|$ est son module. Pour une impédance $\\underline{Z} = R + j X$, on a directement $\\underline{S} = \\underline{Z} I^2 = R I^2 + j X I^2$.',
            formula: {
              name: 'Définition de la puissance complexe',
              formula: '\\underline{S} = \\underline{U} \\cdot \\underline{I}^* = \\frac{1}{2} \\underline{U}_m \\cdot \\underline{I}_m^* = P + j Q = \\underline{Z} \\cdot I_{\\text{eff}}^2 = \\underline{Y}^* \\cdot U_{\\text{eff}}^2',
              note: 'Il faut impérativement prendre le complexe CONJUGUÉ de I pour obtenir φ_u - φ_i (et non φ_u + φ_i)',
            },
            keyRule:
              'Avec les valeurs efficaces complexes : $\\underline{S} = \\underline{U} \\cdot \\underline{I}^* = P + j Q$ (avec les amplitudes maximales complexes, n’oublie pas le facteur $1/2$ : $\\underline{S} = \\frac{1}{2} \\underline{U}_m \\underline{I}_m^*$).',
            konanTip:
              'Cette écriture complexe $\\underline{S} = P + jQ$ rend évidente la démonstration du théorème de Boucherot à partir de la conservation de $\\sum \\underline{U}_k \\underline{I}_k^*$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p3_ex3',
              type: 'mcq',
              prompt:
                'Aux bornes d’un dipôle, la tension efficace complexe vaut $\\underline{U} = 100 + 50j\\text{ V}$ et le courant efficace complexe vaut $\\underline{I} = 4 - 2j\\text{ A}$. Que valent la puissance active $P$ et la puissance réactive $Q$ absorbées par ce dipôle ?',
              options: [
                '$P = 300\\text{ W}$ et $Q = 400\\text{ var}$',
                '$P = 500\\text{ W}$ et $Q = 0\\text{ var}$',
                '$P = 300\\text{ W}$ et $Q = -400\\text{ var}$',
                '$P = 400\\text{ W}$ et $Q = 300\\text{ var}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le conjugué du courant est $\\underline{I}^* = 4 + 2j\\text{ A}$. La puissance complexe vaut $\\underline{S} = \\underline{U} \\cdot \\underline{I}^* = (100 + 50j)(4 + 2j) = 400 + 200j + 200j + 100 j^2 = (400 - 100) + 400j = 300 + 400j$. Par identification $\\underline{S} = P + jQ$, on obtient $P = 300\\text{ W}$ et $Q = 400\\text{ var}$.',
              hint: 'Prends d’abord le conjugué $\\underline{I}^* = 4 + 2j$, puis développe le produit $\\underline{S} = \\underline{U} \\cdot \\underline{I}^* = P + jQ$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Boucherot',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Boucherot : conservation des puissances active et réactive',
            paragraphText:
              'Le **théorème de Boucherot** énonce que dans tout réseau électrique fonctionnant en régime sinusoïdal à fréquence constante, la **puissance active totale** absorbée par un groupement de dipôles est égale à la somme arithmétique des puissances actives de chaque dipôle ($P_{\\text{tot}} = \\sum P_k$), et la **puissance réactive totale** est égale à la somme algébrique des puissances réactives de chaque dipôle ($Q_{\\text{tot}} = \\sum Q_k$). En revanche, **les puissances apparentes ne s’additionnent PAS** (sauf si tous les dipôles ont exactement le même angle $\\varphi_k$) : il faut calculer $S_{\\text{tot}} = \\sqrt{P_{\\text{tot}}^2 + Q_{\\text{tot}}^2}$, puis en déduire le courant total $I_{\\text{tot}} = \\frac{S_{\\text{tot}}}{U}$ et le facteur de puissance global $\\cos\\varphi_{\\text{tot}} = \\frac{P_{\\text{tot}}}{S_{\\text{tot}}}$.',
            formula: {
              name: 'Méthode de Boucherot pour une installation multi-récepteurs',
              formula: 'P_{\\text{tot}} = \\sum_{k=1}^n P_k \\quad ; \\quad Q_{\\text{tot}} = \\sum_{k=1}^n Q_k \\quad \\Longrightarrow \\quad S_{\\text{tot}} = \\sqrt{P_{\\text{tot}}^2 + Q_{\\text{tot}}^2} = U \\cdot I_{\\text{tot}}',
              note: 'Permet de calculer le courant total I_tot appelé par des récepteurs en parallèle sans aucun calcul d’impédances complexes !',
            },
            keyRule:
              'Méthode de Boucherot en 4 colonnes : calculer $P_k$ et $Q_k = P_k \\tan\\varphi_k$ pour chaque appareil, sommer $P_{\\text{tot}} = \\sum P_k$ et $Q_{\\text{tot}} = \\sum Q_k$, puis calculer $S_{\\text{tot}} = \\sqrt{P_{\\text{tot}}^2 + Q_{\\text{tot}}^2}$ et $I_{\\text{tot}} = S_{\\text{tot}}/U$.',
            konanTip:
              'Ne fais JAMAIS $S_{\\text{tot}} = S_1 + S_2$ ni $I_{\\text{tot}} = I_1 + I_2$ lorsque les récepteurs en parallèle ont des facteurs de puissance différents !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p3_ex4',
              type: 'mcq',
              prompt:
                'Une installation sous $U = 200\\text{ V}$ alimente en parallèle : un four de chauffage purement résistif ($P_1 = 2000\\text{ W}, Q_1 = 0$), un moteur inductif ($P_2 = 4000\\text{ W}, Q_2 = +6000\\text{ var}$) et une batterie de condensateurs ($P_3 = 0, Q_3 = -1500\\text{ var}$). Que valent la puissance apparente totale $S_{\\text{tot}}$ et le courant total $I_{\\text{tot}}$ en ligne ?',
              options: [
                '$S_{\\text{tot}} = 7500\\text{ VA}$ et $I_{\\text{tot}} = 37{,}5\\text{ A}$',
                '$S_{\\text{tot}} = 10\\,500\\text{ VA}$ et $I_{\\text{tot}} = 52{,}5\\text{ A}$',
                '$S_{\\text{tot}} = 9219\\text{ VA}$ et $I_{\\text{tot}} = 46{,}1\\text{ A}$',
                '$S_{\\text{tot}} = 6000\\text{ VA}$ et $I_{\\text{tot}} = 30\\text{ A}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par le théorème de Boucherot : $P_{\\text{tot}} = P_1 + P_2 + P_3 = 2000 + 4000 + 0 = 6000\\text{ W}$ et $Q_{\\text{tot}} = Q_1 + Q_2 + Q_3 = 0 + 6000 - 1500 = +4500\\text{ var}$. On en déduit $S_{\\text{tot}} = \\sqrt{6000^2 + 4500^2} = 7500\\text{ VA}$ (triangle $3-4-5$ fois $1500$), d’où $I_{\\text{tot}} = \\frac{S_{\\text{tot}}}{U} = \\frac{7500}{200} = 37{,}5\\text{ A}$.',
              hint: 'Additionne les $P_k$ entre eux ($6000\\text{ W}$) et les $Q_k$ algébriquement ($4500\\text{ var}$), puis calcule $S_{\\text{tot}} = \\sqrt{P_{\\text{tot}}^2 + Q_{\\text{tot}}^2}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Relèvement de cos φ',
            stepTheme: 'green',
            stepTitle: 'Compensation de l’énergie réactive et relèvement du facteur de puissance',
            paragraphText:
              'Une installation industrielle comportant de nombreux moteurs est fortement inductive ($Q > 0$, $\\cos\\varphi$ faible). Or, pour une même puissance active utile $P$ sous la tension réseau $U$, le courant appelé en ligne vaut $I = \\frac{P}{U \\cos\\varphi}$ et les pertes par effet Joule dans les câbles de distribution valent $P_{J,\\text{ligne}} = R_{\\text{ligne}} I^2 = \\frac{R_{\\text{ligne}} P^2}{U^2 \\cos^2\\varphi}$ : un faible $\\cos\\varphi$ augmente fortement le courant et les pertes en ligne (facturées sous forme de pénalités par la CIE si $\\cos\\varphi < 0{,}85$ ou $\\tan\\varphi > 0{,}4$). Pour **relever le facteur de puissance** de $\\cos\\varphi$ à $\\cos\\varphi\' > \\cos\\varphi$, on branche **en parallèle** un condensateur de capacité $C$ qui absorbe $P_C = 0$ et $Q_C = -C\\omega U^2$, réduisant la puissance réactive totale de $Q = P \\tan\\varphi$ à $Q\' = P \\tan\\varphi\' = Q + Q_C$.',
            formula: {
              name: 'Formule de la capacité de compensation C',
              formula: 'Q_C = Q\' - Q = P (\\tan\\varphi\' - \\tan\\varphi) = -C \\omega U^2 \\quad \\Longrightarrow \\quad C = \\frac{P (\\tan\\varphi - \\tan\\varphi\')}{\\omega U^2}',
              note: 'Où ω = 2πf, U est la tension efficace aux bornes du condensateur et P la puissance active de l’installation',
            },
            keyRule:
              'La formule de relèvement du facteur de puissance $C = \\frac{P(\\tan\\varphi - \\tan\\varphi\')}{\\omega U^2}$ est un grand classique absolu des examens d’Électrocinétique.',
            konanTip:
              'Le condensateur de compensation ne modifie absolument pas la puissance active $P$ consommée par l’atelier ($P\' = P$), il réduit uniquement $Q$, $S$ et le courant en ligne $I$.',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p3_ex5',
              type: 'mcq',
              prompt:
                'Une installation consomme $P = 10\\text{ kW}$ sous une tension $U = 200\\text{ V}$ de pulsation $\\omega = 100\\text{ rad/s}$, avec un angle de déphasage initial tel que $\\tan\\varphi = 1{,}2$. Quelle capacité $C$ faut-il brancher en parallèle pour ramener le déphasage à $\\tan\\varphi\' = 0{,}4$ ?',
              options: ['$2000\\,\\mu\\text{F}$ ($2\\text{ mF}$)', '$4000\\,\\mu\\text{F}$', '$200\\,\\mu\\text{F}$', '$1000\\,\\mu\\text{F}$'],
              correctAnswerIndex: 0,
              explanation:
                'On applique la formule issue du théorème de Boucherot : $C = \\frac{P(\\tan\\varphi - \\tan\\varphi\')}{\\omega U^2} = \\frac{10\\,000 \\times (1{,}2 - 0{,}4)}{100 \\times 200^2} = \\frac{8000}{4 \\times 10^6} = 2 \\times 10^{-3}\\text{ F} = 2000\\,\\mu\\text{F}$.',
              hint: 'Applique directement $C = \\frac{P(\\tan\\varphi - \\tan\\varphi\')}{\\omega U^2}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Adaptation complexe',
            stepTheme: 'violet',
            stepTitle: 'Adaptation d’impédance en régime sinusoïdal : Z_L = Z_g*',
            paragraphText:
              'Généralisons le théorème du transfert maximal de puissance au régime sinusoïdal forcé. Soit un générateur de Thévenin de f.é.m. efficace $E_g$ et d’impédance interne complexe $\\underline{Z}_g = R_g + j X_g$ débitant dans une impédance de charge réglable $\\underline{Z}_L = R_L + j X_L$. Le courant efficace vaut $I = \\frac{E_g}{\\sqrt{(R_g + R_L)^2 + (X_g + X_L)^2}}$ et la puissance active reçue par la charge vaut $P_L = R_L I^2 = \\frac{R_L E_g^2}{(R_g + R_L)^2 + (X_g + X_L)^2}$. Pour maximiser $P_L$, il faut d’abord **annuler la réactance totale** en choisissant $X_L = -X_g$ (mise en résonance), puis choisir $R_L = R_g$. La condition d’adaptation en régime sinusoïdal est donc que l’impédance de charge soit égale au **complexe conjugué** de l’impédance du générateur : **$\\underline{Z}_L = \\underline{Z}_g^*$**.',
            formula: {
              name: 'Adaptation d’impédance complexe et puissance active maximale',
              formula: '\\underline{Z}_L = \\underline{Z}_g^* \\iff \\begin{cases} R_L = R_g \\\\ X_L = -X_g \\end{cases} \\quad \\Longrightarrow \\quad P_{L,\\max} = \\frac{E_{g,\\text{eff}}^2}{4 R_g}',
              note: 'Si on ne peut régler que le module Z_L (avec un angle φ_L fixé), l’optimum plus faible est obtenu pour |Z_L| = |Z_g|',
            },
            keyRule:
              'En régime sinusoïdal, le transfert maximal de puissance active est obtenu pour l’adaptation conjuguée $\\underline{Z}_L = \\underline{Z}_g^*$ ($R_L = R_g$ et $X_L = -X_g$), et vaut $P_{\\max} = \\frac{E_{\\text{eff}}^2}{4 R_g}$.',
            konanTip:
              'Si le générateur est inductif ($\\underline{Z}_g = R_g + jL\\omega$), la charge adaptée doit être capacitive ($\\underline{Z}_L = R_g - jL\\omega$) pour compenser la réactance !',
            exercise: {
              id: 'lmd_srit_l1_electrocine_ch3_p3_ex6',
              type: 'mcq',
              prompt:
                'Un générateur haute fréquence de f.é.m. efficace $E_g = 10\\text{ V}$ possède une impédance interne $\\underline{Z}_g = 25 + 40j\\,\\Omega$. Quelle impédance complexe de charge $\\underline{Z}_L$ doit-on lui connecter pour recevoir le maximum de puissance active, et que vaut cette puissance maximale $P_{\\max}$ ?',
              options: [
                '$\\underline{Z}_L = 25 - 40j\\,\\Omega$ et $P_{\\max} = 1\\text{ W}$',
                '$\\underline{Z}_L = 25 + 40j\\,\\Omega$ et $P_{\\max} = 1\\text{ W}$',
                '$\\underline{Z}_L = 25 - 40j\\,\\Omega$ et $P_{\\max} = 0{,}45\\text{ W}$',
                '$\\underline{Z}_L = 25\\,\\Omega$ et $P_{\\max} = 1\\text{ W}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La condition d’adaptation conjuguée impose $\\underline{Z}_L = \\underline{Z}_g^* = 25 - 40j\\,\\Omega$ (les réactances $+40j$ et $-40j$ s’annulent mutuellement). La puissance active maximale transférée vaut alors $P_{\\max} = \\frac{E_g^2}{4 R_g} = \\frac{10^2}{4 \\times 25} = \\frac{100}{100} = 1\\text{ W}$.',
              hint: 'Prends le complexe conjugué de $\\underline{Z}_g$ et calcule $P_{\\max} = \\frac{E_g^2}{4 R_g}$.',
            },
          },
        ],
      }),
    ],
  },
];
