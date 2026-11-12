import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L06_MAINTIEN_CONSTANCE_MILIEU_INTERIEUR: CurriculumChapter = {
  id: "terminale_d_svt_ch08_le_maintien_de_la_constance_du_milieu_interieur",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 8,
  title: "Le maintien de la constance du milieu intérieur (Régulation rénale, équilibre hydrominéral, volémie, ADH et aldostérone)",
  summary: "Étude complète et approfondie du rôle des reins dans l'homéostasie du milieu intérieur selon le programme officiel de Côte d'Ivoire (Leçon 8 SVT Tle D) : ultrastructure du rein et du néphron (corpuscule de Malpighi, capsule de Bowman, glomérule, tubules urinaires), analyse comparative et mécanismes de formation de l'urine (filtration glomérulaire sélective, réabsorption tubulaire totale ou partielle, sécrétion active et excrétion), régulation neuro-hormonale de la teneur en eau et de la volémie par l'ADH (osmorécepteurs, tensiorécepteurs, polyurie et oligurie), régulation de la natrémie et de la pression artérielle par le système rénine-angiotensine-aldostérone (SRAA), et régulation couplée de l'équilibre acido-basique (tampon bicarbonate, poumons et reins).",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_milieu_interieur_homeostasie_organisation_rein_nephron",
      order: 1,
      title: "Le milieu intérieur, l'homéostasie et l'organisation anatomo-fonctionnelle du rein",
      summary: "Concept fondamental du milieu intérieur (Claude Bernard) et d'homéostasie (Walter Cannon), anatomie macroscopique du rein de mammifère et cytologie du néphron, unité fonctionnelle rénale.",
      conceptExplanation: "Chez les animaux supérieurs pluricellulaires, les cellules ne sont pas en contact direct avec l'environnement externe. Elles vivent et fonctionnent immergées dans un compartiment liquide intermédiaire hautement régulé : le milieu intérieur.\n\n1. Le milieu intérieur et le concept d'homéostasie :\n- Définition du milieu intérieur (Claude Bernard, 1857) : Il est constitué par l'ensemble des liquides extracellulaires de l'organisme, comprenant :\n  - Le plasma sanguin : fraction liquide du sang circulant dans les vaisseaux (environ 3 litres chez l'adulte).\n  - La lymphe interstitielle : liquide baignant directement les cellules des tissus, issu de la filtration du plasma à travers les parois des capillaires sanguins.\n  - La lymphe canalisée : lymphe interstitielle drainée par les vaisseaux lymphatiques qui la ramènent dans la circulation veineuse au niveau des veines sous-clavières.\n- Définition de l'homéostasie (Walter Cannon, 1926) : C'est la capacité de l'organisme à maintenir constants, ou dans des limites physiologiques étroites et compatibles avec la vie cellulaire, les paramètres physico-chimiques du milieu intérieur (température centrale ~37 °C, glycémie ~1 g/L, pression osmotique ~300 mOsm/L, pH artériel entre 7,35 et 7,45, natrémie, kaliémie, volémie).\n- Rôle épurateur et régulateur du rein : Le métabolisme cellulaire produit en permanence des déchets toxiques (urée issue du catabolisme des protéines, acide urique, créatinine, sulfates, protons H+) qui souillent le sang. Les reins filtrent le plasma en continu, éliminent les déchets dans l'urine et ajustent la quantité d'eau et d'électrolytes pour préserver l'équilibre homéostasique.\n\n2. Anatomie macroscopique du rein de mammifère :\nChaque rein est un organe pair en forme de haricot situé dans la région lombaire rétropéritonéale de part et d'autre de la colonne vertébrale. Une coupe longitudinale révèle trois zones concentriques distinctes de l'extérieur vers l'intérieur :\n- La capsule fibreuse externe : enveloppe conjonctive protectrice inextensible et résistante.\n- La zone corticale (cortex rénal) : bande périphérique superficielle d'aspect granuleux rougeâtre (renfermant plus d'un million de corpuscules de Malpighi et les tubes contournés proximal et distal).\n- La zone médullaire (médulla rénale) : région centrale d'aspect strié plus pâle, formée de 8 à 18 formations pyramidales à base externe appelées pyramides de Malpighi. Leurs sommets (papilles rénales) font saillie dans de petites cavités collectrices (les petits calices, qui fusionnent en grands calices).\n- Le bassinet (pyélon) : cavité en forme d'entonnoir qui collecte l'urine définitive s'écoulant des calices pour l'acheminer vers la vessie par l'uretère.\n\n3. Le néphron : Unité structurale et fonctionnelle du rein :\nChaque rein humain contient environ 1 à 1,2 million de néphrons, unités microscopiques assurant l'épuration sanguine. Chaque néphron est constitué de deux ensembles morphologiques étroitement intriqués :\n- Le corpuscule rénal de Malpighi (situé exclusivement dans le cortex) :\n  - Le glomérule de Malpighi : peloton de capillaires artériels sanguins ramifiés sous haute pression hydrostatique, intercalé entre une artériole afférente de fort calibre et une artériole efférente de calibre plus étroit.\n  - La capsule de Bowman : cupule à double feuillet (feuillet viscéral tapissé de cellules spécialisées appelées podocytes et feuillet pariétal) délimitant un espace capsulaire clos qui recueille le filtrat glomérulaire.\n- Les tubules urinaires (long canal replié d'environ 5 cm) :\n  - Le tube contourné proximal (TCP) : fait suite à la capsule de Bowman dans le cortex, tapissé d'un épithélium avec une bordure en brosse hérissée de microvillosités amplifiant la surface de réabsorption active.\n  - L'anse de Henlé : tube en épingle à cheveu descendant profondément dans la médulla rénale (branche descendante grêle très perméable à l'eau) puis remontant vers le cortex (branche ascendante large, totalement imperméable à l'eau mais siège d'un transport actif intense de NaCl).\n  - Le tube contourné distal (TCD) : situé dans le cortex, siège des régulations hormonales terminales fines.\n  - Le tube collecteur de Bellini : canal rectiligne descendant traversant les pyramides médullaires, collectant l'urine de plusieurs néphrons pour déboucher à la papille rénale dans le bassinet.",
      keyRule: "L'homéostasie est la constance dynamique du milieu intérieur (plasma + lymphe). Le néphron est l'unité fonctionnelle du rein constituée du corpuscule de Malpighi (capsule de Bowman + glomérule) et des tubules urinaires (TCP, anse de Henlé, TCD et tube collecteur).",
      formulas: [
        {
          name: "Compartiments liquidiens du milieu intérieur",
          formula: "\\text{Milieu Intérieur} = \\text{Plasma sanguin (vasculaire)} + \\text{Lymphe interstitielle (tissulaire)} + \\text{Lymphe canalisée (lymphatique)}",
          note: "Représente environ 20% du poids corporel total chez l'adulte"
        }
      ],
      workedExample: {
        title: "Analyse histologique et identification des zones rénales d'un mammifère",
        statement: "On observe au microscope optique deux coupes histologiques prélevées dans différentes zones d'un rein de porc : Coupe A : Présente de nombreuses structures sphériques composées d'une pelote capillaire entourée d'un espace vide, au milieu de tubes tapissés de cellules à bordure en brosse. Coupe B : Dépourvue de toute structure sphérique, présentant exclusivement de longs tubes rectilignes parallèles orientés verticalement. 1. Identifier les structures visibles sur la coupe A. 2. Déterminer la zone anatomique du rein d'où proviennent respectivement les coupes A et B.",
        methodSteps: [
          "Étape 1 : Identifier les structures de la coupe A. Les sphères formées de pelotes capillaires correspondent aux glomérules de Malpighi enchâssés dans les capsules de Bowman (corpuscules de Malpighi). Les tubes à bordure en brosse sont les tubes contournés proximaux (TCP).",
          "Étape 2 : Déterminer la localisation de la coupe A. Les corpuscules de Malpighi et les tubes contournés sont situés exclusivement dans la région périphérique du rein : la zone corticale (cortex).",
          "Étape 3 : Identifier et localiser la coupe B. Les tubes rectilignes parallèles correspondent aux branches descendantes et ascendantes des anses de Henlé et aux tubes collecteurs de Bellini. Cette organisation striée sans aucun glomérule caractérise la zone médullaire (médulla / pyramides de Malpighi)."
        ],
        conclusion: "Coupe A = Zone corticale (présence des corpuscules de Malpighi et tubes contournés) ; Coupe B = Zone médullaire (anses de Henlé et tubes de Bellini)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Organisation structurale du néphron et vascularisation rénale",
        tableData: {
          headers: ["Segment du néphron", "Localisation dans le rein", "Structure cytologique", "Fonction physiologique majeure"],
          rows: [
            ["Glomérule + Capsule de Bowman", "Cortex rénal", "Capillaires fenêtrés et podocytes", "Filtration glomérulaire sous haute pression (urine primitive)"],
            ["Tube contourné proximal (TCP)", "Cortex rénal", "Épithélium cubique à bordure en brosse", "Réabsorption massive de l'eau (65-70%), du glucose (100%) et des ions"],
            ["Anse de Henlé (branche descendante)", "Médulla rénale", "Épithélium pavimenteux mince très perméable", "Sortie passive d'eau par osmose vers le tissu médullaire hypertonique"],
            ["Anse de Henlé (branche ascendante)", "Médulla rénale", "Épithélium épais imperméable à l'eau", "Pompage actif de Na+ et Cl-, création du gradient osmotique cortico-papillaire"],
            ["Tube contourné distal (TCD)", "Cortex rénal", "Cellules sensibles à l'aldostérone et l'ADH", "Réabsorption modulée de sodium et d'eau, sécrétion de potassium et protons"],
            ["Tube collecteur de Bellini", "Médulla vers calices", "Épithélium riche en canaux à eau (aquaporines)", "Concentration finale de l'urine définitive sous contrôle de l'ADH"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c08_p1_ex1",
          type: "mcq",
          prompt: "Quelle est la définition exacte du 'milieu intérieur' établie originellement par le physiologiste Claude Bernard ?",
          options: [
            "L'ensemble des liquides extracellulaires de l'organisme (plasma sanguin, lymphe interstitielle et lymphe canalisée)",
            "Le contenu liquide du tube digestif et des sucs gastriques",
            "L'urine stockée dans la vessie avant son élimination",
            "Le cytoplasme situé à l'intérieur des globules rouges"
          ],
          correctAnswerIndex: 0,
          explanation: "Le milieu intérieur désigne l'ensemble des compartiments liquidiens extracellulaires (plasma et lymphes) qui baignent toutes les cellules vivantes de l'organisme et garantissent leur survie."
        },
        {
          id: "tle_d_svt_c08_p1_ex2",
          type: "mcq",
          prompt: "Quel nom porte l'unité microscopique structurale et fonctionnelle du rein capable de filtrer le sang et d'élaborer l'urine ?",
          options: [
            "Le néphron",
            "Le neurone",
            "Le sarcomère",
            "L'hépatocyte"
          ],
          correctAnswerIndex: 0,
          explanation: "Le néphron est l'unité fonctionnelle élémentaire du rein. Chaque rein humain en compte plus d'un million, constitués chacun d'un corpuscule de Malpighi et d'un réseau tubulaire."
        },
        {
          id: "tle_d_svt_c08_p1_ex3",
          type: "mcq",
          prompt: "Dans quelle zone anatomique du rein trouve-t-on exclusivement les corpuscules de Malpighi (glomérules + capsules de Bowman) ?",
          options: [
            "Dans la zone corticale (le cortex)",
            "Dans les pyramides de Malpighi de la zone médullaire",
            "Dans le bassinet",
            "Dans la paroi de l'uretère"
          ],
          correctAnswerIndex: 0,
          explanation: "Les corpuscules de Malpighi et les tubes contournés sont situés uniquement dans le cortex rénal, ce qui lui confère son aspect granuleux caractéristique. La médulla ne contient que des tubes rectilignes."
        },
        {
          id: "tle_d_svt_c08_p1_ex4",
          type: "mcq",
          prompt: "De quels éléments est constitué le corpuscule rénal de Malpighi ?",
          options: [
            "Du glomérule capillaire de Malpighi et de la capsule de Bowman",
            "De l'anse de Henlé et du tube de Bellini",
            "Du bassinet et de la veine rénale",
            "De la capsule fibreuse et du bassinet"
          ],
          correctAnswerIndex: 0,
          explanation: "Le corpuscule de Malpighi associe le glomérule (réseau de capillaires sanguins fenêtrés) et la capsule de Bowman (cupule délimitant la chambre glomérulaire de filtration)."
        },
        {
          id: "tle_d_svt_c08_p1_ex5",
          type: "mcq",
          prompt: "Quelle caractéristique morphologique du tube contourné proximal (TCP) démontre son intense activité de réabsorption de substances utiles ?",
          options: [
            "La présence d'une bordure en brosse constituée d'une multitude de microvillosités apicales",
            "L'absence totale de membrane plasmique",
            "La présence de valvules étanches bloquant le passage de l'eau",
            "Une coloration blanche due à une gaine de myéline isolante"
          ],
          correctAnswerIndex: 0,
          explanation: "La bordure en brosse multiplie la surface d'échange membranaire par 40, permettant au TCP de réabsorber activement 100% du glucose et des acides aminés, ainsi que la majeure partie de l'eau et des sels minéraux."
        },
        {
          id: "tle_d_svt_c08_p1_ex6",
          type: "mcq",
          prompt: "Vers quelle structure anatomique en forme d'entonnoir converge l'urine définitive sortant des pyramides de Malpighi avant de descendre dans l'uretère ?",
          options: [
            "Le bassinet (ou pyélon)",
            "Le glomérule",
            "L'anse de Henlé",
            "La corticosurrénale"
          ],
          correctAnswerIndex: 0,
          explanation: "L'urine définitive s'écoule des tubes de Bellini au niveau des papilles rénales dans les calices, qui se déversent dans le bassinet, poche collectrice précédant l'uretère."
        }
      ]
    },
    {
      id: "pt2_etapes_formation_urine_filtration_reabsorption_secretion",
      order: 2,
      title: "Les étapes de la formation de l'urine : Filtration, réabsorption, sécrétion et excrétion",
      summary: "Analyse comparée des constituants chimiques du plasma, de l'urine primitive et de l'urine définitive, mécanismes biophysiques de la filtration glomérulaire sélective, de la réabsorption tubulaire (notion de seuil rénal) et de la sécrétion tubulaire active.",
      conceptExplanation: "L'élaboration de l'urine par le néphron n'est pas une simple sécrétion ou un simple tamisage passif : elle résulte de la succession coordonnée de trois processus physiologiques fondamentaux : la filtration glomérulaire, la réabsorption tubulaire et la sécrétion tubulaire.\n\n1. Analyse comparative : Plasma vs Urine primitive vs Urine définitive :\n- Comparaison Plasma / Urine primitive (obtenue par microponction de la capsule de Bowman) :\n  - Identité osmotique et minérale : Les concentrations en eau, en électrolytes ($Na^+ = 3,2\\text{ g/L}$, $K^+ = 0,2\\text{ g/L}$, $Cl^- = 3,6\\text{ g/L}$, $Ca^{2+}$, $HCO_3^-$), en glucose ($1\\text{ g/L}$) et en déchets azotés (urée $0,3\\text{ g/L}$, acide urique $0,03\\text{ g/L}$, créatinine $0,01\\text{ g/L}$) sont strictement identiques dans le plasma et dans l'urine primitive.\n  - Différence majeure : Les protéines de haut poids moléculaire (protéines plasmatiques : 60 à 80 g/L dans le plasma) et les lipides sont totalement absents de l'urine primitive.\n  - Déduction : L'urine primitive est un plasma déprotéinisé obtenu par un processus de filtration mécanique sélective au niveau du glomérule.\n- Comparaison Urine primitive / Urine définitive (recueillie à la sortie de l'uretère) :\n  - Substances totalement absentes de l'urine définitive : Le glucose ($0\\text{ g/L}$ contre $1\\text{ g/L}$), les acides aminés, les vitamines et les bicarbonates sont absents chez le sujet sain : ces substances ont été entièrement réabsorbées par les tubules.\n  - Substances fortement concentrées dans l'urine définitive : L'urée passe de $0,3\\text{ g/L}$ dans le plasma à $20\\text{ à }30\\text{ g/L}$ dans l'urine (concentrée environ 70 fois !), la créatinine passe de $0,01\\text{ g/L}$ à $1\\text{ à }2\\text{ g/L}$ (concentrée 100 fois), les ions $K^+$ et $H^+$.\n  - Substances nouvelles absentes du plasma : L'acide hippurique ($0,5\\text{ g/L}$) et l'ammoniaque ($NH_4^+$ : 1 à 4 g/L), absents du plasma, se retrouvent dans l'urine définitive : elles ont été synthétisées et sécrétées activement par les cellules des tubules rénaux.\n\n2. Les mécanismes élémentaires de formation de l'urine :\n- 1. La filtration glomérulaire (Phénomène passif mécanique) :\n  - Siège : Membrane basale glomérulaire et fentes de filtration des podocytes dans la capsule de Bowman.\n  - Moteur physique : La Pression Efficace de Filtration ($P_{EF}$), résultant de la compétition entre trois forces :\n    $$P_{EF} = P_{CG} - (P_B + \\Pi_{CG})$$\n    où $P_{CG}$ est la pression hydrostatique des capillaires glomérulaires (~50 mmHg), $P_B$ est la pression hydrostatique du liquide dans la capsule de Bowman (~10 mmHg) et $\\Pi_{CG}$ est la pression oncotique des protéines plasmatiques (~25 mmHg). Soit $P_{EF} = 50 - (10 + 25) = 15\\text{ mmHg}$.\n  - Débit : Le débit de filtration glomérulaire (DFG) est colossal : environ 125 mL/min, soit environ 180 litres d'urine primitive formés chaque jour chez un adulte !\n  - Sélectivité : La membrane glomérulaire agit comme un filtre sélectif selon la taille (poids moléculaire seuil d'environ 68 kDa, bloquant l'albumine et les globulines) et la charge électrique négative.\n- 2. La réabsorption tubulaire (Phénomène sélectif actif et passif) :\n  - Sur les 180 litres filtrés par jour, environ 178,5 litres d'eau sont réabsorbés le long des tubules, de sorte que le volume d'urine définitive éliminé n'est que de 1 à 1,5 litre/jour (réabsorption de plus de 99% de l'eau filtrée).\n  - Réabsorption sans seuil (ou obligatoire) : Certaines substances sont obligatoirement et totalement réabsorbées quel que soit leur taux plasmatique (ex: acides aminés, vitamines).\n  - Réabsorption à seuil : Cas emblématique du glucose. Dans le tube contourné proximal, le glucose est réabsorbé à 100% par des transporteurs actifs secondaires ($Na^+$/glucose SGLT2) tant que la glycémie ne dépasse pas le 'seuil rénal du glucose' (environ $1,80\\text{ g/L}$ ou $10\\text{ mmol/L}$). Au-delà de ce seuil (chez le diabétique non équilibré), les transporteurs tubulaires sont saturés : l'excédent de glucose ne peut plus être réabsorbé et apparaît dans l'urine définitive (glycosurie).\n  - Réabsorption partielle modulée : L'eau, les ions sodium ($Na^+$), potassium ($K^+$), chlorure ($Cl^-$) et calcium ($Ca^{2+}$) sont réabsorbés de manière variable pour maintenir l'équilibre électrolytique.\n- 3. La sécrétion tubulaire (Phénomène actif) :\n  - Transfert direct de molécules du sang des capillaires péritubulaires vers la lumière du tubule rénal (sans passer par la filtration glomérulaire).\n  - Concerne l'élimination des protons $H^+$, du potassium $K^+$, de l'ammoniaque $NH_3$ (transformé en $NH_4^+$ pour tamponner l'acidité), de l'acide hippurique et de nombreux xénobiotiques (médicaments comme la pénicilline, toxines végétales).\n- 4. L'excrétion :\n  - Évacuation hors de l'organisme du produit final : l'urine définitive, solution aqueuse hypertonique ou hypotonique contenant des déchets métaboliques et débarrassée de substances nutritives nobles.",
      keyRule: "L'urine primitive (180 L/j) est un plasma déprotéinisé obtenu par filtration glomérulaire. L'urine définitive (1,5 L/j) résulte de la réabsorption tubulaire (eau 99%, glucose 100% sous le seuil rénal de 1,8 g/L) et de la sécrétion tubulaire active (acide hippurique, H+, ammoniaque).",
      formulas: [
        {
          name: "Équation de la Pression Efficace de Filtration (PEF)",
          formula: "P_{EF} = P_{\\text{hydrostatique glomérulaire}} - [P_{\\text{capsulaire Bowman}} + \\Pi_{\\text{oncotique protéines}}] \\approx 50 - (10 + 25) = 15\\text{ mmHg}",
          note: "Si la pression artérielle chute en dessous de 40 mmHg, la PEF s'annule : c'est l'anurie aiguë"
        }
      ],
      workedExample: {
        title: "Calcul du taux de concentration de l'urée et détection d'une glycosurie pathologique",
        statement: "Chez un patient, les analyses de laboratoire révèlent les valeurs suivantes : Dans le plasma sanguin : Glucose = 2,5 g/L ; Urée = 0,3 g/L ; Protéines = 72 g/L. Dans l'urine définitive : Volume émis = 1,5 L/24h ; Glucose = 4 g/L ; Urée = 24 g/L ; Protéines = 0 g/L. 1. Calculer le facteur de concentration de l'urée par le rein. 2. Expliquer pourquoi le glucose est présent dans l'urine de ce patient alors qu'il est normalement absent chez le sujet sain.",
        methodSteps: [
          "Étape 1 : Calculer le coefficient de concentration de l'urée. Taux de concentration = Concentration urinaire / Concentration plasmatique = 24 g/L / 0,3 g/L = 80. L'urée est concentrée 80 fois au cours de son transit tubulaire, principalement en raison de la réabsorption massive de l'eau.",
          "Étape 2 : Analyser la glycémie du patient. La concentration plasmatique en glucose du patient est de 2,5 g/L, ce qui est très supérieur à la glycémie normale (~1 g/L) et dépasse le seuil rénal d'élimination du glucose fixé à 1,8 g/L.",
          "Étape 3 : Expliquer la présence de glucose dans l'urine. Au-dessus de 1,8 g/L de glycémie, la capacité maximale de transport des protéines réabsorbantes du tube proximal (TmG) est dépassée. Les transporteurs sont saturés : le glucose non réabsorbé s'élimine dans l'urine définitive (glycosurie symptomatique d'un diabète sucré)."
        ],
        conclusion: "Urée concentrée 80 fois ; La glycosurie s'explique par le dépassement du seuil rénal de réabsorption (2,5 g/L > 1,8 g/L)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison quantitative des constituants : Plasma vs Urine primitive vs Urine définitive",
        tableData: {
          headers: ["Constituant chimique", "Concentration Plasma (g/L)", "Concentration Urine primitive (g/L)", "Concentration Urine définitive (g/L)", "Phénomène rénal responsable"],
          rows: [
            ["Eau", "900 - 920", "980 - 990", "950 - 970", "Filtration glomérulaire puis réabsorption tubulaire de 99%"],
            ["Protéines (Albumine)", "60 - 80", "0 (absence totale)", "0 (absence totale)", "Arrêtées au niveau du filtre glomérulaire (poids élevé > 68 kDa)"],
            ["Glucose", "0,8 - 1,1", "0,8 - 1,1", "0 chez le sujet sain", "Filtration libre puis réabsorption active totale (100%) dans le TCP"],
            ["Urée (déchet azoté)", "0,30", "0,30", "20 - 30", "Filtrée librement, peu réabsorbée (~50%), concentrée par réabsorption d'eau"],
            ["Créatinine", "0,01", "0,01", "1,0 - 1,5", "Filtrée et non réabsorbée (légèrement sécrétée), concentrée 100 fois"],
            ["Acide hippurique / NH4+", "0 (absence)", "0 (absence)", "0,5 à 2,0", "Sécrétion tubulaire active exclusive par les cellules du néphron"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c08_p2_ex1",
          type: "mcq",
          prompt: "Quelle est la principale différence de composition chimique entre le plasma sanguin et l'urine primitive recueillie dans la capsule de Bowman ?",
          options: [
            "L'urine primitive ne contient aucune protéine de haut poids moléculaire ni de lipide",
            "L'urine primitive ne contient ni eau ni sels minéraux",
            "L'urine primitive contient dix fois plus d'urée que le plasma",
            "L'urine primitive est dépourvue de glucose chez le sujet sain"
          ],
          correctAnswerIndex: 0,
          explanation: "La membrane glomérulaire arrête les macromolécules (protéines > 68 kDa et lipides) mais laisse passer l'eau, les ions et les petites molécules. L'urine primitive est donc un plasma déprotéinisé."
        },
        {
          id: "tle_d_svt_c08_p2_ex2",
          type: "mcq",
          prompt: "Quel volume approximatif d'urine primitive est filtré chaque jour par l'ensemble des glomérules chez un être humain adulte sain ?",
          options: [
            "Environ 180 litres par jour",
            "Environ 1,5 litre par jour",
            "Environ 5 litres par jour",
            "Environ 10 000 litres par jour"
          ],
          correctAnswerIndex: 0,
          explanation: "Le débit de filtration glomérulaire normal est de 125 mL/min, soit 180 litres de filtrat glomérulaire produit par 24 heures. Plus de 99% de ce volume est réabsorbé le long des tubules."
        },
        {
          id: "tle_d_svt_c08_p2_ex3",
          type: "mcq",
          prompt: "À quelle valeur correspond le 'seuil rénal d'élimination du glucose' au-delà duquel apparaît du glucose dans l'urine définitive (glycosurie) ?",
          options: [
            "Environ 1,80 g/L de sang (ou 10 mmol/L)",
            "Environ 0,50 g/L de sang",
            "Environ 5,00 g/L de sang",
            "Il n'existe aucun seuil rénal pour le glucose"
          ],
          correctAnswerIndex: 0,
          explanation: "Le seuil rénal du glucose se situe vers 1,80 g/L de plasma. Lorsque la glycémie dépasse ce seuil, les transporteurs tubulaires proximaux sont saturés et l'excédent de glucose s'élimine dans l'urine."
        },
        {
          id: "tle_d_svt_c08_p2_ex4",
          type: "mcq",
          prompt: "Quelles substances sont totalement absentes du plasma sanguin mais sont sécrétées activement par les tubules rénaux et retrouvées dans l'urine définitive ?",
          options: [
            "L'acide hippurique et les sels ammoniacaux (ammoniaque)",
            "Le glucose et les acides aminés",
            "L'albumine et le fibrinogène",
            "L'insuline et le glucagon"
          ],
          correctAnswerIndex: 0,
          explanation: "L'acide hippurique et l'ammoniaque ne préexistent pas dans le plasma circulant : ils sont synthétisés et sécrétés activement par les cellules de l'épithélium tubulaire directement dans l'urine."
        },
        {
          id: "tle_d_svt_c08_p2_ex5",
          type: "mcq",
          prompt: "Si la pression artérielle systolique d'un individu chute brutalement en dessous de 50 mmHg lors d'un choc hémorragique sévère, quelle est la conséquence rénale immédiate ?",
          options: [
            "La pression efficace de filtration s'annule, entraînant l'arrêt de la formation de l'urine (anurie aiguë)",
            "Une augmentation de la diurèse à plus de 10 litres par jour",
            "Une élimination massive de globules rouges intacts dans l'urine",
            "La transformation des néphrons en tissu hépatique"
          ],
          correctAnswerIndex: 0,
          explanation: "La pression efficace de filtration vaut PEF = Pcg - (Pb + Pi_cg). Si la pression hydrostatique glomérulaire s'effondre sous la somme des pressions opposées (~35-40 mmHg), la filtration s'arrête net : c'est l'anurie."
        },
        {
          id: "tle_d_svt_c08_p2_ex6",
          type: "mcq",
          prompt: "Quelle proportion de l'eau présente dans l'urine primitive est normalement réabsorbée par les tubules rénaux pour former l'urine définitive ?",
          options: [
            "Plus de 99% de l'eau filtrée",
            "Exactement 50% de l'eau filtrée",
            "Moins de 10% de l'eau filtrée",
            "Aucune réabsorption : 100% de l'eau filtrée est éliminée"
          ],
          correctAnswerIndex: 0,
          explanation: "Sur les 180 litres d'urine primitive formés quotidiennement, environ 178,5 litres sont réabsorbés par les tubules rénaux (TCP, anse de Henlé, TCD et tubes collecteurs), ne laissant que 1 à 1,5 litre d'urine définitive."
        }
      ]
    },
    {
      id: "pt3_regulation_teneur_eau_volemie_axe_posthypophyse_adh",
      order: 3,
      title: "Régulation de la teneur en eau, de la volémie et de la pression osmotique par l'ADH",
      summary: "Mise en évidence expérimentale du rôle de l'eau sur la diurèse, récepteurs impliqués (osmorécepteurs carotidiens et volorécepteurs auriculaires), sécrétion et mode d'action de l'hormone antidiurétique (ADH / vasopressine), mécanismes de la polyurie et de l'oligurie.",
      conceptExplanation: "La quantité d'eau présente dans l'organisme doit rester remarquablement constante pour maintenir la pression osmotique intracellulaire et la volémie (volume total du sang circulant). Le rein est l'effecteur principal de cette régulation hydrique sous commande neuro-endocrine.\n\n1. Expérience fondamentale d'ingestion d'eau (Expérience de la diurèse hydrique) :\n- Protocole expérimental : On fait ingérer ou perfuser 250 à 500 mL d'eau pure à un chien (ou un volontaire humain à jeun) et on mesure le débit urinaire (diurèse en mL/min ou cm³/min) et la pression osmotique plasmatique au cours du temps.\n- Résultats observés :\n  - Avant l'ingestion d'eau : Le débit urinaire de base est faible et stable, voisin de $1\\text{ cm}^3\\text{/min}$. La pression osmotique du plasma est normale (~300 mOsm/L).\n  - Après ingestion d'eau : On observe un temps de latence de 15 à 20 minutes (temps nécessaire à l'absorption intestinale de l'eau). Puis la diurèse s'élève de façon spectaculaire pour atteindre un pic à $4\\text{ à }5\\text{ cm}^3\\text{/min}$ au bout d'une heure, avant de redescendre progressivement à sa valeur initiale.\n  - Simultanément, la pression osmotique plasmatique subit une chute transitoire (chute à ~291 mOsm/L) en raison de la dilution du plasma (hémodilution).\n\n2. Les capteurs de la balance hydrique :\nL'organisme surveille en permanence deux paramètres physiques complémentaires liés à l'eau :\n- Les osmorécepteurs : Récepteurs sensoriels spécialisés situés dans les parois des artères carotides et principalement dans l'hypothalamus antérieur (noyaux supra-optiques). Ils sont extrêmement sensibles aux variations de la concentration molaire des solutés du plasma (pression osmotique).\n- Les volorécepteurs (ou tensiorécepteurs à basse pression) : Terminaisons nerveuses sensibles à l'étirement situées dans la paroi de l'oreillette gauche du cœur et des gros vaisseaux thoraciques. Ils mesurent en continu le degré de remplissage vasculaire (la volémie).\n\n3. L'Hormone Antidiurétique (ADH ou Vasopressine) :\n- Synthèse et stockage : L'ADH est un nonapeptide synthétisé par les corps cellulaires des neurones des noyaux supra-optiques et paraventriculaires de l'hypothalamus. Elle chemine le long des axones du faisceau hypothalamo-hypophysaire pour être stockée et déversée dans le sang au niveau du lobe postérieur de l'hypophyse (la posthypophyse ou neurohypophyse).\n- Rôle physiologique et organe cible : L'ADH est véhiculée par le sang jusqu'aux reins. Son rôle majeur est freinateur de la diurèse (anti-diurétique) en favorisant la réabsorption active d'eau au niveau des parois du tube contourné distal et surtout du tube collecteur de Bellini.\n- Mécanisme cellulaire : L'ADH se lie à des récepteurs membranaires V2 situés au pôle basal des cellules du tube collecteur. Cela déclenche une cascade intracellulaire (AMPc) provoquant la fusion de vésicules renfermant des canaux protéiques à eau (les aquaporines de type 2 - AQP2) avec la membrane plasmique apicale. Les tubules deviennent hautement perméables à l'eau : l'eau quitte passivement l'urine primitive par osmose pour regagner les capillaires sanguins médullaires hypertoniques.\n\n4. Boucles de rétroaction homéostasiques comparées :\n- Cas 1 : Excès d'eau (Surcharge hydrique, ingestion massive d'eau) :\n  1. L'eau absorbée augmente le volume sanguin (hypervolémie) et dilue les solutés du plasma (chute de la pression osmotique sous 295 mOsm/L).\n  2. Les osmorécepteurs et les volorécepteurs stimulés transmettent un message nerveux freinateur à l'hypothalamus.\n  3. La posthypophyse freine ou stoppe la libération d'ADH dans le sang.\n  4. En l'absence d'ADH, les parois du tube collecteur redeviennent totalement imperméables à l'eau (les aquaporines sont réinternalisées dans des vésicules).\n  5. L'eau ne peut plus être réabsorbée : elle s'élimine massivement dans l'urine. Il en résulte l'émission d'une urine abondante, très diluée et claire : c'est la polyurie (diurèse aqueuse).\n  6. L'excès d'eau ayant été éliminé, la volémie et la pression osmotique reviennent à leurs valeurs normales.\n- Cas 2 : Déficit d'eau (Déshydratation, sudation intense, privation d'eau, hémorragie, diarrhée) :\n  1. La perte d'eau entraîne une baisse du volume plasmatique (hypovolémie) et une concentration des solutés (hausse de la pression osmotique au-dessus de 300 mOsm/L).\n  2. Cette hyperosmolalité stimule intensément les osmorécepteurs hypothalamiques et lève le frein des volorécepteurs auriculaires.\n  3. L'hypothalamus ordonne une décharge massive d'ADH par la posthypophyse dans la circulation générale (tout en déclenchant la sensation consciente de soif).\n  4. L'abondance d'ADH provoque l'insertion maximale des aquaporines dans les tubes collecteurs : réabsorption d'eau poussée à son maximum.\n  5. L'eau est réabsorbée vers le sang : le débit d'urine s'effondre et l'urine émise est très rare, concentrée et foncée : c'est l'oligurie.\n  6. Ce mécanisme d'épargne d'eau compense le déficit et ramène la pression osmotique et la volémie à la normale.",
      keyRule: "L'ADH est sécrétée par la posthypophyse en cas de déshydratation (hausse de pression osmotique ou baisse de volémie) : elle augmente la réabsorption d'eau dans les tubes collecteurs et diminue la diurèse (oligurie). En excès d'eau, la baisse d'ADH entraîne une polyurie d'urine diluée.",
      formulas: [
        {
          name: "Boucle de régulation de l'eau par l'ADH",
          formula: "\\text{P.O. } \\uparrow \\text{ ou Volémie } \\downarrow \\implies \\text{Posthypophyse} \\xrightarrow{\\text{ADH } \\uparrow} \\text{Tubules rénaux} \\xrightarrow{\\text{Réabsorption } H_2O \\uparrow} \\text{Diurèse } \\downarrow \\text{ (Oligurie)} \\implies \\text{P.O. normale}",
          note: "En cas d'excès d'eau : baisse d'ADH -> hausse de diurèse (polyurie)"
        }
      ],
      workedExample: {
        title: "Interprétation d'un syndrome de diabète insipide consécutif à un traumatisme crânien",
        statement: "À la suite d'un accident de la circulation avec traumatisme crânien au niveau de la selle turcique, un patient présente une soif inextinguible (il boit plus de 12 litres d'eau par jour) et émet un volume urinaire quotidien de 12 à 15 litres d'une urine très pâle, de densité presque égale à celle de l'eau pure. L'administration d'extraits posthypophysaires d'ADH normalise instantanément sa diurèse à 1,5 L/jour. Expliquer la cause de ce trouble.",
        methodSteps: [
          "Étape 1 : Analyser les symptômes initiaux. L'émission d'une quantité colossale d'urine très diluée (12 à 15 L/j) est une polyurie majeure, compensée par une polydipsie (soif intense).",
          "Étape 2 : Analyser l'effet du traitement par l'ADH. L'injection d'ADH exogène corrige immédiatement la polyurie, ce qui prouve que les reins et leurs tubules sont parfaitement sains et fonctionnels.",
          "Étape 3 : Identifier la lésion sous-jacente. Le traumatisme crânien a détruit la tige pituitaire ou la posthypophyse, empêchant la synthèse ou la libération de l'hormone antidiurétique endogène. C'est le diabète insipide central (déficit en ADH)."
        ],
        conclusion: "La polyurie massive résulte d'un arrêt de la sécrétion d'ADH par la posthypophyse lésée, empêchant la réabsorption tubulaire normale de l'eau."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Régulation neuro-endocrine comparée de la teneur en eau de l'organisme",
        tableData: {
          headers: ["Situation physiologique", "Pression osmotique plasmatique", "Sécrétion d'ADH posthypophysaire", "Perméabilité des tubes collecteurs", "Volume et aspect de l'urine émise"],
          rows: [
            ["Ingestion massive d'eau (Surcharge)", "Diminuée (< 295 mOsm/L, dilution)", "Fortement freinée ou nulle (baisse d'ADH)", "Imperméables à l'eau (absence d'aquaporines)", "Polyurie : Urine abondante, claire, très diluée"],
            ["Déshydratation / Sudation intense", "Augmentée (> 305 mOsm/L, hémoconcentration)", "Fortement stimulée (hypersécrétion d'ADH)", "Très perméables à l'eau (insertion d'aquaporines)", "Oligurie : Urine rare, foncée, très concentrée"],
            ["Hémorragie aiguë (Perte de sang)", "Normale au début, mais volémie effondrée", "Stimulée au maximum par les volorécepteurs", "Réabsorption maximale d'eau pour sauver la pression", "Oligurie extrême voire anurie de protection"],
            ["Diabète insipide (Lésion hypophyse)", "Tendance à l'hyperosmolalité", "Absente par destruction de la posthypophyse", "Totalement imperméables en permanence", "Polyurie permanente massive (10 à 20 L/jour)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c08_p3_ex1",
          type: "mcq",
          prompt: "Où se situent les osmorécepteurs centraux capables de mesurer les variations de la pression osmotique du plasma sanguin ?",
          options: [
            "Dans l'hypothalamus",
            "Dans la vessie",
            "Dans le cortex cérébelleux",
            "Dans la rate"
          ],
          correctAnswerIndex: 0,
          explanation: "Les osmorécepteurs centraux sont situés dans l'hypothalamus antérieur (notamment les noyaux supra-optiques) et surveillent en continu l'osmolarité du plasma pour ajuster la sécrétion d'ADH."
        },
        {
          id: "tle_d_svt_c08_p3_ex2",
          type: "mcq",
          prompt: "Par quelle structure endocrine l'Hormone Antidiurétique (ADH ou vasopressine) est-elle libérée dans la circulation sanguine ?",
          options: [
            "La posthypophyse (neurohypophyse)",
            "La corticosurrénale",
            "Le pancréas endocrine",
            "La glande thyroïde"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ADH est synthétisée par les neurones de l'hypothalamus, transportée le long de leurs axones et déversée dans le sang par le lobe postérieur de l'hypophyse (posthypophyse)."
        },
        {
          id: "tle_d_svt_c08_p3_ex3",
          type: "mcq",
          prompt: "Quel est l'effet physiologique direct de l'ADH sur les cellules du tube collecteur de Bellini du néphron ?",
          options: [
            "Elle augmente la perméabilité à l'eau en insérant des canaux protéiques (aquaporines) dans la membrane apicale",
            "Elle bloque la circulation du sang dans le glomérule",
            "Elle provoque la destruction des pyramides de Malpighi",
            "Elle transforme l'urée en glucose"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ADH provoque la translocation des aquaporines-2 vers la membrane apicale des cellules du tube collecteur, permettant à l'eau d'être réabsorbée par osmose vers les capillaires sanguins."
        },
        {
          id: "tle_d_svt_c08_p3_ex4",
          type: "mcq",
          prompt: "Comment qualifie-t-on l'élimination d'un volume anormalement élevé d'urine très diluée suite à une ingestion massive d'eau ?",
          options: [
            "La polyurie",
            "L'oligurie",
            "L'anurie",
            "L'hématurie"
          ],
          correctAnswerIndex: 0,
          explanation: "La polyurie désigne une augmentation importante du volume d'urine émis par 24 heures (urine abondante et diluée), provoquée par la suppression physiologique de la sécrétion d'ADH."
        },
        {
          id: "tle_d_svt_c08_p3_ex5",
          type: "mcq",
          prompt: "Où se trouvent les volorécepteurs (ou tensiorécepteurs à basse pression) mesurant les variations de volume sanguin pour la régulation de l'ADH ?",
          options: [
            "Dans la paroi de l'oreillette gauche du cœur",
            "Dans le ventricule droit",
            "Dans la capsule de Bowman",
            "Dans le foie"
          ],
          correctAnswerIndex: 0,
          explanation: "Les volorécepteurs auriculaires situés dans l'oreillette gauche sont sensibles à l'étirement produit par le retour veineux et informent l'hypothalamus du degré de remplissage vasculaire."
        },
        {
          id: "tle_d_svt_c08_p3_ex6",
          type: "mcq",
          prompt: "Quel effet a la consommation de boissons alcoolisées sur la sécrétion d'ADH et sur la diurèse ?",
          options: [
            "L'alcool inhibe la sécrétion d'ADH par la posthypophyse, provoquant une polyurie déshydratante",
            "L'alcool stimule massivement la sécrétion d'ADH, provoquant une oligurie",
            "L'alcool détruit irréversiblement les récepteurs carotidiens",
            "L'alcool n'a aucun effet sur l'élimination de l'eau"
          ],
          correctAnswerIndex: 0,
          explanation: "L'éthanol est un inhibiteur pharmacologique de la sécrétion d'ADH au niveau central : en l'absence d'ADH, les reins ne réabsorbent plus l'eau, provoquant une abondante perte d'eau urinaire (polyurie et déshydratation consécutive)."
        }
      ]
    },
    {
      id: "pt4_regulation_sodium_sraa_aldosterone_equilibre_acide_base",
      order: 4,
      title: "Régulation du sodium par le système Rénine-Angiotensine-Aldostérone et équilibre acido-basique",
      summary: "Rôle capital du sodium (Na+) dans la pression osmotique, détection par l'appareil juxtaglomérulaire, cascade enzymatique du système SRAA (rénine, angiotensine, aldostérone corticosurrénalienne), et régulation intégrée du pH par les reins et les poumons.",
      conceptExplanation: "L'ion sodium ($Na^+$) est le principal cation du milieu extracellulaire (natrémie normale : 135 à 145 mmol/L). Il représente plus de 90% des osmoles actives du plasma : toute variation de la teneur en sodium modifie directement la pression osmotique, attire ou retient l'eau et détermine la pression artérielle.\n\n1. Mise en évidence expérimentale de la régulation de la natrémie :\n- Expérience d'injection de NaCl hypertonique à un chien : On injecte une solution concentrée de NaCl (20‰). La diurèse, initialement à $4,3\\text{ cm}^3\\text{/min}$, chute brusquement à $1\\text{ cm}^3\\text{/min}$ en 28 minutes, avant de remonter vers $3,8\\text{ cm}^3\\text{/min}$ après 50 minutes.\n  - Interprétation : L'apport massif de sel augmente la pression osmotique du plasma, stimulant la rétention d'eau par l'ADH (chute de la diurèse). Simultanément, les mécanismes d'élimination rénale du sodium excédentaire s'enclenchent pour ramener la natrémie à sa valeur de consigne.\n- Expérience de perfusion des surrénales et ablation des reins :\n  - Un chien soumis à un régime totalement dépourvu de sodium présente une hypersécrétion d'une substance X (l'aldostérone) par ses glandes corticosurrénales, tandis qu'un régime hypersalé met cette sécrétion au repos.\n  - La perfusion directe des surrénales par des concentrations variables de NaCl ne modifie pas la production de substance X : cela prouve que le sodium n'agit pas directement sur les surrénales.\n  - L'ablation des reins entraîne une chute durable de la sécrétion d'aldostérone, tandis que l'injection intraveineuse d'extraits rénaux prélevés chez un animal privé de sel relance immédiatement la production d'aldostérone.\n  - Conclusion : Les reins détectent la variation de sodium et sécrètent un intermédiaire chimique véhiculé par le sang (la rénine) qui commande la corticosurrénale.\n\n2. Le Système Rénine-Angiotensine-Aldostérone (SRAA) :\n- Détection : La baisse de la natrémie ($Na^+$) ou la baisse de la pression de perfusion de l'artériole afférente rénale est détectée au niveau de l'appareil juxtaglomérulaire (cellules myoépithélioïdes de l'artériole afférente et macula densa du tube distal).\n- La cascade biochimique séquentielle :\n  1. Sécrétion de Rénine : En réponse à l'hyponatrémie ou à l'hypotension, les cellules juxtaglomérulaires libèrent dans le sang une enzyme protéolytique : la rénine.\n  2. Formation de l'Angiotensine I : La rénine circulante rencontre dans le plasma une protéine précurseur synthétisée en continu par le foie : l'angiotensinogène. La rénine clive l'angiotensinogène pour libérer un décapeptide inactif : l'angiotensine I.\n  3. Formation de l'Angiotensine II : Lors de son passage dans les capillaires pulmonaires et rénaux, l'angiotensine I est clivée par l'Enzyme de Conversion de l'Angiotensine (ECA) pour former l'angiotensine II, peptide hautement actif.\n  4. Effets de l'Angiotensine II : C'est un puissant vasoconstricteur artériel (augmente immédiatement la pression artérielle) et le stimulant direct de la zone glomérulée de la corticosurrénale.\n  5. Sécrétion d'Aldostérone : Sous l'effet de l'angiotensine II, la corticosurrénale sécrète dans le sang une hormone stéroïde minéralocorticoïde : l'aldostérone.\n- Action cellulaire de l'aldostérone au niveau rénal :\n  - L'aldostérone pénètre dans les cellules cibles du tube contourné distal et du tube collecteur, se lie à son récepteur cytosolique et stimule la transcription génique de la pompe $Na^+/K^+$ ATPase basolatérale et des canaux sodiques épithéliaux apicaux (ENaC).\n  - Conséquences : Augmentation massive de la réabsorption active de sodium ($Na^+$) de la lumière tubulaire vers le sang, accompagnée d'une réabsorption passive d'ions chlorure ($Cl^-$) et d'eau par osmose. Simultanément, elle augmente l'excrétion urinaire d'ions potassium ($K^+$) et de protons ($H^+$).\n  - Résultat : Rétablissement de la natrémie, augmentation de la volémie et normalisation de la pression artérielle.\n- En cas d'excès de sodium (hypernatrémie) : Le système SRAA est totalement inhibé ; l'aldostérone s'effondre, entraînant une faible réabsorption tubulaire et une forte élimination urinaire du sodium (natriurèse) qui ramène la pression osmotique à la normale.\n\n3. Régulation intégrée de l'équilibre acido-basique (pH plasmatique) :\nLe pH artériel doit impérativement être maintenu à $7,40 \\pm 0,02$. Trois lignes de défense complémentaires interviennent pour neutraliser les déviations :\n- Les systèmes tampons physico-chimiques sanguins immédiats (action en quelques secondes) :\n  - Le système tampon ouvert majeur : Acide carbonique / Bicarbonate :\n    $$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{HCO}_3^- + \\text{H}^+$$\n  - Autres tampons : Tampon phosphate ($HPO_4^{2-} / H_2PO_4^-$), protéines plasmatiques et hémoglobine des hématies.\n- La régulation respiratoire pulmonaire (action en quelques minutes) :\n  - En cas d'acidose ($pH < 7,35$, accumulation de $H^+$) : Les centres respiratoires bulbaires sont stimulés -> hyperventilation réflexe qui élimine massivement le $CO_2$ gazeux, déplaçant l'équilibre vers la gauche et consommant les protons $H^+$.\n  - En cas d'alcalose ($pH > 7,45$) : Hypoventilation réflexe qui retient le $CO_2$ pour acidifier le plasma.\n- La régulation métabolique rénale (action puissante en quelques heures à quelques jours) :\n  - En cas d'acidose : Les cellules tubulaires rénales sécrètent activement des ions $H^+$ dans l'urine (neutralisés par la synthèse d'ammoniac $NH_3 + H^+ \\to NH_4^+$ éliminé sous forme de chlorure d'ammonium, et par le tampon phosphate) et réabsorbent $100\\%$ des ions bicarbonate ($HCO_3^-$) vers le plasma, régénérant la réserve alcaline.\n  - En cas d'alcalose : Les reins cessent de réabsorber les bicarbonates et les éliminent dans l'urine définitive, ramenant le pH à 7,40.",
      keyRule: "La baisse de sodium stimule la cascade SRAA : Rénine (rein) -> Angiotensine (foie + ECA) -> Aldostérone (corticosurrénale) -> Réabsorption active de Na+ et d'eau dans le TCD. Le pH sanguin (7,40) est stabilisé par le tampon bicarbonate, l'excrétion de CO2 par les poumons et l'excrétion de H+ par les reins.",
      formulas: [
        {
          name: "Cascade du Système Rénine-Angiotensine-Aldostérone (SRAA)",
          formula: "\\text{Na}^+ \\downarrow \\text{ (Rein)} \\xrightarrow{\\text{Rénine}} \\text{Angiotensinogène (Foie)} \\xrightarrow{\\text{Angiotensine I}} \\xrightarrow{\\text{ECA}} \\text{Angiotensine II} \\xrightarrow{\\text{Corticosurrénale}} \\text{Aldostérone} \\implies \\text{Réabsorption Na}^+ \\uparrow",
          note: "L'aldostérone augmente la rétention de sodium et d'eau tout en favorisant l'élimination de K+ et H+"
        },
        {
          name: "Équilibre du système tampon bicarbonate du plasma",
          formula: "\\text{CO}_2 \\text{ (Poumons)} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{HCO}_3^- \\text{ (Reins)} + \\text{H}^+ \\text{ (Urine)}",
          note: "Régulation acido-basique couplée respiratoire (rapide) et rénale (durable)"
        }
      ],
      workedExample: {
        title: "Interprétation de l'effet d'un traitement par inhibiteur de l'ECA (IEC) sur l'hypertension",
        statement: "Un patient souffrant d'hypertension artérielle sévère reçoit un traitement médical par un 'inhibiteur de l'enzyme de conversion de l'angiotensine' (IEC, comme le captopril). On mesure après 48h ses paramètres sanguins et urinaires : Sa pression artérielle s'est normalisée, son taux plasmatique d'aldostérone a chuté de 70%, et son élimination urinaire de sodium (natriurèse) a considérablement augmenté. Expliquer le mode d'action de ce médicament.",
        methodSteps: [
          "Étape 1 : Identifier la cible pharmacologique de l'IEC. L'IEC bloque l'enzyme de conversion de l'angiotensine (ECA), empêchant la transformation de l'angiotensine I en angiotensine II active.",
          "Étape 2 : Analyser les répercussions sur l'aldostérone. En l'absence d'angiotensine II, la corticosurrénale n'est plus stimulée : la sécrétion d'aldostérone s'effondre de 70%.",
          "Étape 3 : Expliquer les conséquences rénales. La chute de l'aldostérone diminue la réabsorption tubulaire de sodium. Le sodium et l'eau sont donc éliminés en plus grande quantité dans l'urine (natriurèse et diurèse accrues).",
          "Étape 4 : Conclure sur la baisse de pression artérielle. La réduction de la volémie par perte d'eau et de sel, associée à la levée de la vasoconstriction artérielle normalement induite par l'angiotensine II, entraîne la baisse et la normalisation de la pression artérielle."
        ],
        conclusion: "L'inhibition de l'ECA bloque la production d'angiotensine II et d'aldostérone, favorisant l'élimination de sodium et faisant chuter la pression artérielle."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Régulation intégrée du sodium et de la pression artérielle (Système SRAA)",
        tableData: {
          headers: ["Organe / Tissu", "Médiateur / Hormone produit", "Stimulus déclencheur", "Action physiologique spécifique"],
          rows: [
            ["Appareil juxtaglomérulaire (Rein)", "Rénine (enzyme protéolytique)", "Baisse de natrémie, hypovolémie ou hypotension", "Clive l'angiotensinogène en angiotensine I inactif"],
            ["Foie", "Angiotensinogène (précurseur)", "Synthèse hépatique constitutive continue", "Substrat circulant disponible pour la rénine"],
            ["Poumons et cellules endothéliales", "Enzyme de conversion (ECA)", "Présente sur l'endothélium vasculaire", "Convertit l'angiotensine I en angiotensine II"],
            ["Angiotensine II", "Octapeptide vasoactif puissant", "Produite dès l'activation de la rénine", "Vasoconstriction directe et stimulation corticosurrénalienne"],
            ["Corticosurrénale (zone glomérulée)", "Aldostérone (minéralocorticoïde)", "Stimulée par l'angiotensine II (et hyperkaliémie)", "Stimule la réabsorption de Na+ et l'excrétion de K+ dans le TCD"],
            ["Tubules rénaux (TCD et collecteur)", "ENaC et pompe Na+/K+ ATPase", "Activés par l'aldostérone", "Rétention hydrosodée -> retour de la pression artérielle à la normale"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c08_p4_ex1",
          type: "mcq",
          prompt: "Quelle enzyme est sécrétée par les cellules de l'appareil juxtaglomérulaire du rein en réponse à une baisse de sodium ou de pression artérielle ?",
          options: [
            "La rénine",
            "L'aldostérone",
            "L'angiotensinogène",
            "L'acétylcholinestérase"
          ],
          correctAnswerIndex: 0,
          explanation: "La rénine est une enzyme libérée par les cellules juxtaglomérulaires rénales qui amorce la cascade du système SRAA en clivant l'angiotensinogène d'origine hépatique."
        },
        {
          id: "tle_d_svt_c08_p4_ex2",
          type: "mcq",
          prompt: "Quelle glande endocrine synthétise et sécrète l'aldostérone dans la circulation sanguine ?",
          options: [
            "La glande corticosurrénale (partie corticale de la surrénale)",
            "La médullosurrénale",
            "La posthypophyse",
            "La glande thyroïde"
          ],
          correctAnswerIndex: 0,
          explanation: "L'aldostérone est une hormone minéralocorticoïde stéroïde synthétisée exclusivement par la zone glomérulée de la corticosurrénale sous la stimulation de l'angiotensine II."
        },
        {
          id: "tle_d_svt_c08_p4_ex3",
          type: "mcq",
          prompt: "Quel est l'effet physiologique direct de l'aldostérone sur les cellules du tube contourné distal (TCD) du néphron ?",
          options: [
            "Elle stimule la réabsorption active des ions sodium (Na+) et favorise l'élimination des ions potassium (K+) et protons (H+)",
            "Elle bloque totalement la filtration des protéines dans la capsule de Bowman",
            "Elle élimine 100% du sodium dans l'urine en moins de 10 minutes",
            "Elle inhibe définitivement la sécrétion d'angiotensinogène par le foie"
          ],
          correctAnswerIndex: 0,
          explanation: "L'aldostérone stimule l'expression de la pompe Na+/K+ ATPase et des canaux sodiques dans le TCD, augmentant la réabsorption de sodium et d'eau tout en augmentant l'excrétion urinaire de potassium et de protons."
        },
        {
          id: "tle_d_svt_c08_p4_ex4",
          type: "mcq",
          prompt: "Lors d'une acidose métabolique (baisse du pH sanguin en dessous de 7,35), comment réagissent immédiatement les poumons pour compenser cette acidité ?",
          options: [
            "Par une hyperventilation réflexe augmentant l'élimination du dioxyde de carbone (CO2)",
            "Par un arrêt respiratoire complet (apnée prolongée)",
            "Par une diminution de l'apport en oxygène",
            "Par la sécrétion de salive très alcaline"
          ],
          correctAnswerIndex: 0,
          explanation: "L'excès d'ions H+ stimule les centres respiratoires bulbaires : l'hyperventilation élimine le CO2 gazeux, ce qui déplace l'équilibre du tampon bicarbonate vers la gauche et consomme des protons, élevant le pH."
        },
        {
          id: "tle_d_svt_c08_p4_ex5",
          type: "mcq",
          prompt: "Comment les reins interviennent-ils de manière durable pour corriger une situation d'acidose dans le sang ?",
          options: [
            "En sécrétant activement des ions H+ dans l'urine (liés à l'ammoniac NH4+) et en réabsorbant la totalité des ions bicarbonate (HCO3-)",
            "En arrêtant totalement la filtration du glucose",
            "En éliminant tous les globules blancs par diapédèse",
            "En transformant l'urée en acide chlorhydrique"
          ],
          correctAnswerIndex: 0,
          explanation: "Les cellules tubulaires rénales sécrètent activement les protons H+ excédentaires (neutralisés par NH3 et les phosphates urinaires) et réabsorbent les bicarbonates HCO3- pour restaurer la réserve alcaline du plasma."
        },
        {
          id: "tle_d_svt_c08_p4_ex6",
          type: "mcq",
          prompt: "Quelle est la valeur physiologique normale de consigne du pH artériel du plasma chez un être humain en bonne santé ?",
          options: [
            "Entre 7,35 et 7,45 (moyenne 7,40)",
            "Entre 1,0 et 2,0",
            "Exactement 8,50",
            "Entre 6,00 et 6,50"
          ],
          correctAnswerIndex: 0,
          explanation: "Le pH du sang artériel est strictement régulé autour de 7,40 (limites physiologiques normales entre 7,35 et 7,45). Une valeur inférieure à 7,35 définit une acidose, et supérieure à 7,45 une alcalose."
        }
      ]
    }
  ]
};

