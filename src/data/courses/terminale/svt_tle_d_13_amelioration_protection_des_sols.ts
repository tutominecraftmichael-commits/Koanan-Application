import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L13_AMELIORATION_PROTECTION_DES_SOLS: CurriculumChapter = {
  id: "terminale_d_svt_ch14_amelioration_protection_des_sols",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 14,
  title: "L'amélioration et la protection des sols (Amendements chimiques, organiques, calcaires, CAH et techniques de conservation)",
  summary: "Étude complète et approfondie de la gestion rationnelle et de la fertilisation des sols agricoles selon le programme officiel de SVT Terminale D de Côte d'Ivoire : amendements chimiques par engrais minéraux NPK (loi des rendements décroissants et risques de toxicité), amendements organiques (rôle décomposeur et minéralisateur des vers de terre, débris animaux et végétaux, engrais verts et symbiose fixatrice d'azote des légumineuses), amendements calcaires (chaux vive CaO, carbonate de calcium CaCO3) et humifères pour la formation du Complexe Argilo-Humique (CAH) et la neutralisation de l'acidité, et techniques culturales de protection et de lutte anti-érosive (paillage, jachère, assolement, cultures en terrasses et engazonnement).",
  officialVolumeHours: 5,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_amendements_chimiques_engrais_npk_rendement",
      order: 1,
      title: "Les amendements chimiques : engrais minéraux N-P-K et loi des rendements",
      summary: "Rôles physiologiques des macroéléments (Azote, Phosphore, Potassium), courbe de réponse du rendement agricole en fonction des doses d'engrais, seuil d'optimum agronomique et risques de phytotoxicité par surdosage.",
      conceptExplanation: "Un sol agricole cultivé de manière répétée s'appauvrit progressivement en éléments nutritifs prélevés par les récoltes successives. Pour restaurer et accroître sa fertilité, l'agriculteur recourt à des amendements chimiques sous forme d'engrais minéraux.\n\n1. Nature et composition des engrais minéraux chimiques :\nLes engrais chimiques se présentent sous forme de sels minéraux solubles épandus à la surface du sol. Dès leur mise en contact avec l'eau de la solution du sol, ils se dissolvent instantanément et libèrent des ions minéraux directement assimilables par les poils absorbants des racines végétales :\n- Engrais simples : n'apportent qu'un seul élément nutritif majeur (ex. urée pour l'azote, superphosphate pour le phosphore, chlorure de potassium pour le potassium) ;\n- Engrais composés (formules N-P-K) : apportent simultanément les trois macroéléments fondamentaux dans des proportions adaptées aux cultures (ex. NPK 15-15-15 ou 12-24-18).\n\n2. Rôles physiologiques fondamentaux de la triade N-P-K :\n- Azote (N) : constituant indispensable des acides aminés, des protéines, des acides nucléiques (ADN/ARN) et de la chlorophylle. Il stimule vigoureusement le développement végétatif aérien (tiges, feuilles vertes et tallage des céréales) ;\n- Phosphore (P) : constituant des molécules d'ATP (transfert d'énergie cellulaire), des phospholipides membranaires et des acides nucléiques. Il favorise l'enracinement précoce et profond, accélère la floraison, la nouaison et la maturation des fruits et graines ;\n- Potassium (K) : régulateur osmotique majeur de la turgescence cellulaire et de l'ouverture/fermeture des stomates foliaires. Il participe à la synthèse et au stockage des glucides (amidon, saccharose), confère à la plante une résistance accrue à la sécheresse, aux attaques parasitaires et à la verse.\n\n3. Analyse de la courbe de réponse agronomique aux doses d'engrais :\nL'expérimentation agronomique (épandage de doses croissantes de 50 à 300 kg/ha d'engrais NPK) met en évidence trois phases distinctes :\n- Phase d'efficacité croissante (de 50 à 150 kg/ha) : le rendement augmente progressivement de 48 à 82,5 quintaux/ha. Les éléments minéraux comblent les carences du sol et enrichissent la réserve minérale immédiatement utilisable par la plante ;\n- Optimum agronomique (à 150 kg/ha) : pic de production maximal (82,5 qtx/ha), correspondant à la dose d'engrais économiquement et physiologiquement optimale ;\n- Phase de rendements décroissants et de toxicité (au-delà de 150 kg/ha) : le rendement chute lourdement (80, puis 60 et enfin 40 qtx/ha à 300 kg/ha). Un excès d'engrais augmente la pression osmotique de la solution du sol (brûlure osmotique des racines par appel d'eau inverse), crée des toxicités ioniques directes et inhibe l'absorption d'autres oligo-éléments.\n\n4. Conséquences environnementales du surdosage minéral :\nL'effet des engrais minéraux est immédiat mais éphémère (ne dure que le temps d'une récolte). Les engrais azotés en excès (sous forme de nitrates $NO_3^-$ très mobiles car repoussés par le complexe d'argile négatif) sont lessivés par les eaux de pluie vers les nappes phréatiques et les cours d'eau, provoquant l'eutrophisation des milieux aquatiques et la contamination de l'eau potable.",
      keyRule: "L'apport d'engrais chimiques N-P-K améliore immédiatement le rendement en fournissant des sels directement assimilables. Toutefois, le rendement obéit à la loi des rendements décroissants : un apport excessif au-delà de la dose optimale devient toxique pour les cultures et fait chuter la récolte tout en polluant les nappes phréatiques.",
      formulas: [
        {
          name: "Rendement agricole relatif",
          formula: "R = \\frac{\\text{Masse totale de récolte (qtx ou kg)}}{\\text{Superficie de la parcelle (ha)}}",
          note: "1 quintal (qtx) = 100 kg. 1 hectare (ha) = 10 000 m²"
        },
        {
          name: "Loi de l'optimum agronomique de Liebieg-Mitscherlich",
          formula: "R_{\\text{max}} \\iff \\text{Dose}_{\\text{optimale}} \\quad (\\text{au-delà : } \\frac{dR}{d(\\text{dose})} < 0)",
          note: "Le rendement plafonne puis régresse en phase de toxicité osmotique"
        }
      ],
      workedExample: {
        title: "Interprétation d'un essai agronomique de fertilisation azotée sur le maïs",
        statement: "Un agronome teste différentes doses d'engrais azoté (urée) sur 4 parcelles homogènes d'un hectare cultivées en maïs. Les récoltes obtenues sont : Parcelle 1 (0 kg/ha d'urée) = 22 quintaux ; Parcelle 2 (80 kg/ha) = 54 quintaux ; Parcelle 3 (160 kg/ha) = 78 quintaux ; Parcelle 4 (240 kg/ha) = 45 quintaux. 1. Analyser l'évolution des rendements. 2. Déterminer la dose recommandée. 3. Expliquer le résultat obtenu sur la parcelle 4.",
        methodSteps: [
          "Étape 1 : Analyser l'évolution des rendements en fonction de la fertilisation. Entre 0 et 160 kg/ha d'apport d'urée, le rendement passe de 22 à 78 quintaux/ha, soit une multiplication par plus de 3,5 de la production grâce à la levée de la carence azotée.",
          "Étape 2 : Déterminer la dose recommandée. Le rendement maximal est atteint sur la parcelle 3 à la dose de 160 kg/ha (78 qtx/ha). C'est la dose agronomiquement optimale.",
          "Étape 3 : Expliquer la baisse observée sur la parcelle 4. À 240 kg/ha, le rendement s'effondre à 45 quintaux/ha. Cette chute est due à un surdosage provoquant une toxicité azotée et une élévation excessive de la salinité/pression osmotique de la solution du sol, entravant l'absorption hydrique des racines."
        ],
        conclusion: "La dose optimale est de 160 kg/ha ; l'excès d'engrais à 240 kg/ha est phytotoxique et contre-productif."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Rôles physiologiques des éléments N-P-K et conséquences agronomiques",
        tableData: {
          headers: ["Élément fertilisant", "Forme ionique absorbée", "Rôle biologique fondamental", "Symptômes de carence", "Effets du surdosage"],
          rows: [
            ["Azote (N)", "NO3- (nitrate) et NH4+ (ammonium)", "Synthèse des protéines et chlorophylle, croissance végétative foliaire", "Jaunissement des feuilles âgées (chlorose), rabougrissement", "Végétation exubérante sensible aux maladies, verse, retard maturité"],
            ["Phosphore (P)", "H2PO4- et HPO4^2- (dihydrogénophosphate)", "Transfert d'énergie (ATP), développement racinaire, floraison", "Feuilles vert sombre à reflets pourpres, enracinement très faible", "Blocage de l'absorption du zinc et du fer par précipitation"],
            ["Potassium (K)", "K+ (ion potassium libre)", "Régulation osmotique, turgescence stomatique, synthèse d'amidon", "Nécrose marginale des feuilles, tiges molles, sensibilité au sec", "Blocage de l'assimilation du magnésium (carence induite en Mg)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c14_q1",
          type: "mcq",
          prompt: "Sous quelle forme les engrais chimiques minéraux apportent-ils les nutriments aux plantes ?",
          options: [
            "Sous forme de macromolécules organiques complexes insolubles",
            "Sous forme de sels minéraux qui se dissolvent dans la solution du sol et sont directement assimilables",
            "Sous forme de cellules vivantes symbiotiques",
            "Sous forme exclusive de gaz carbonique dissous"
          ],
          correctAnswerIndex: 1,
          explanation: "Les engrais chimiques sont constitués de sels minéraux purifiés qui se dissolvent rapidement dans l'eau du sol, libérant des ions minéraux (nitrates, phosphates, potassium) immédiatement absorbables par les racines."
        },
        {
          id: "tle_d_svt_c14_q2",
          type: "mcq",
          prompt: "Lors d'un essai de fertilisation minérale, pourquoi le rendement agricole finit-il par chuter lorsque l'on apporte des doses excessives d'engrais ?",
          options: [
            "Parce que les plantes cessent définitivement de photosynthétiser la nuit",
            "Parce que les engrais en concentration trop élevée deviennent phytotoxiques et perturbent l'équilibre osmotique du sol",
            "Parce que les vers de terre mangent toutes les racines de la culture",
            "Parce que le sol se transforme spontanément en roche magmatique"
          ],
          correctAnswerIndex: 1,
          explanation: "Au-delà de la dose optimale, la concentration excessive en sels dissous augmente la salinité et le potentiel osmotique de la solution du sol, provoquant une déshydratation des racines, des brûlures chimiques et des déséquilibres toxiques pour la plante."
        },
        {
          id: "tle_d_svt_c14_q3",
          type: "mcq",
          prompt: "Quel macroélément fertilisant favorise prioritairement le développement du système racinaire et la maturité des graines ?",
          options: [
            "L'azote (N)",
            "Le phosphore (P)",
            "Le calcium (Ca)",
            "Le chlore (Cl)"
          ],
          correctAnswerIndex: 1,
          explanation: "Le phosphore (P) joue un rôle énergétique central (molécules d'ATP) et intervient directement dans l'élongation des racines jeunes, la précocité de la floraison et la formation féconde des fruits et graines."
        },
        {
          id: "tle_d_svt_c14_q4",
          type: "mcq",
          prompt: "Quelle est la principale limite temporelle de l'action des engrais chimiques minéraux par rapport aux engrais organiques ?",
          options: [
            "Leur effet est immédiat mais ne dure généralement que le temps d'une seule saison de culture",
            "Leur effet met plus de dix ans à se manifester dans la plante",
            "Ils ne fonctionnent qu'en saison sèche",
            "Ils ne peuvent pas être dissous par l'eau de pluie"
          ],
          correctAnswerIndex: 0,
          explanation: "Les engrais minéraux ont une action coup de fouet immédiate grâce à leur solubilité, mais ils ne fixent pas de réserves durables dans le sol et sont rapidement épuisés par prélèvement ou lessivés à la fin du cycle cultural."
        },
        {
          id: "tle_d_svt_c14_q5",
          type: "mcq",
          prompt: "Quel impact écologique majeur résulte du lessivage des engrais azotés chimiques vers les eaux de surface et nappes ?",
          options: [
            "Une diminution de la température atmosphérique globale",
            "L'eutrophisation des plans d'eau et la prolifération excessive d'algues consommatrices d'oxygène",
            "Une augmentation de la porosité des roches métamorphiques",
            "La stérilisation complète de l'air ambiant"
          ],
          correctAnswerIndex: 1,
          explanation: "Les nitrates non absorbés sont facilement entraînés par les eaux de ruissellement et d'infiltration. Dans les cours d'eau et lagunes, cet excès de nutriments provoque une pullulation d'algues (eutrophisation) dont la décomposition asphyxie le milieu aquatique."
        },
        {
          id: "tle_d_svt_c14_q6",
          type: "mcq",
          prompt: "Un agriculteur constate que ses plants de tomate ont des tiges molles et résistent très mal au manque d'eau. Quel élément minéral est probablement déficitaire ?",
          options: [
            "Le potassium (K)",
            "L'azote (N)",
            "Le silicium (Si)",
            "Le fer (Fe)"
          ],
          correctAnswerIndex: 0,
          explanation: "Le potassium (K) est le régulateur principal de la turgescence cellulaire et du fonctionnement des stomates. Sa carence affaiblit la rigidité mécanique des tiges et la résistance hydrique des cultures."
        }
      ]
    },
    {
      id: "pt2_amendements_organiques_vers_de_terre_engrais_verts",
      order: 2,
      title: "Les amendements organiques : minéralisation, vers de terre et engrais verts",
      summary: "Transformation de la matière organique par minéralisation, action pédologique majeure des vers de terre (turricules), valorisation des résidus (fumier, lisier, paille) et engrais verts légumineux symbiotiques fixateurs d'azote.",
      conceptExplanation: "Contrairement aux engrais chimiques minéraux immédiatement assimilables, la matière organique fraîche (débris animaux et végétaux) ne peut pas être absorbée directement par les racines des plantes. Elle doit d'abord subir une dégradation biologique dans le sol.\n\n1. Le processus de minéralisation :\nLa minéralisation est l'ensemble des transformations biochimiques par lesquelles la matière organique morte est décomposée et oxydée par les micro-organismes du sol (bactéries, champignons) et la faune édaphique en composés minéraux simples et solubles :\n$$\\text{Matière organique} \\xrightarrow{\\text{Décomposition / Minéralisation}} \\text{Ions minéraux } (Ca^{2+}, Mg^{2+}, K^+, NH_4^+, NO_3^-, H_2PO_4^-) + CO_2 + H_2O$$\nCe processus assure une libération progressive, continue et durable des sels minéraux tout au long de la croissance des cultures, évitant les chocs de toxicité et le lessivage brutal.\n\n2. Le rôle fondamental des vers de terre (lombrics) dans la fertilité des sols :\nDans les sols équilibrés (notamment les sols forestiers), les vers de terre jouent un rôle d'ingénieurs écologiques irremplaçables :\n- Action mécanique : ils perforent le sol de multiples galeries qui aèrent la terre, facilitent la pénétration des racines et augmentent la perméabilité à l'eau de pluie (réduction du ruissellement érosif) ;\n- Action biologique et digestive : ils ingèrent continuellement un mélange intime de terre minérale et de débris végétaux en décomposition ;\n- Formation des turricules : leurs excréments rejetés à la surface et dans les galeries, appelés « turricules », constituent un concentré de fertilité exceptionnelle. L'analyse chimique montre que la terre des turricules contient jusqu'à 5 fois plus de nitrates ($NO_3^-$), 7 fois plus de phosphore assimilable, 11 fois plus de potassium ($K^+$) et 1,5 fois plus de calcium ($Ca^{2+}$) qu'un sol dépourvu de vers de terre.\n\n3. Typologie des amendements organiques :\nOn distingue principalement deux grandes catégories d'amendements organiques en agriculture :\n- Les débris animaux et végétaux recyclés : fumier d'étable (mélange de litière de paille et déjections animales), purin, lisier, paille compostée, fientes de volailles. Ils apportent à la fois de l'humus stable et une réserve d'éléments nutritifs ;\n- Les engrais verts : cultures herbacées à croissance rapide semées non pour être récoltées, mais pour être fauchées et enfouies sur place dans la couche arable du sol.\n\n4. Le pouvoir fertilisant exceptionnel des engrais verts à légumineuses :\nL'emploi de légumineuses (Mucuna, Crotalaria, Pueraria, Soja, Niébé, Arachide) comme engrais vert présente un double avantage décisif :\n- Symbiose fixatrice d'azote : les racines des légumineuses portent des nodosités abritant des bactéries symbiotiques du genre *Rhizobium*. Ces bactéries captent l'azote gazeux atmosphérique ($N_2$), inaccessible aux plantes supérieures, et le transforment en azote organique directement mobilisable ;\n- Double enrichissement à l'enfouissement : lors de la décomposition de la biomasse enfouie, l'azote fixé dans les tissus est minéralisé par la faune du sol et enrichit considérablement la réserve du sol sans aucun coût en engrais synthétique, tout en améliorant la structure physique et la teneur en humus.",
      keyRule: "La matière organique est transformée par minéralisation en sels minéraux solubles. Les vers de terre enrichissent le sol via leurs turricules riches en minéraux et aèrent le sol par leurs galeries. Les engrais verts de légumineuses enrichissent doublement le sol en fixant l'azote de l'air grâce à leurs nodosités racinaires symbiotiques.",
      formulas: [
        {
          name: "Fixation symbiotique de l'azote atmosphérique",
          formula: "N_2 \\text{ (atmosphérique)} + 8 H^+ + 8 e^- + 16 \\text{ ATP} \\xrightarrow{\\text{Nitrogénase (Rhizobium)}} 2 NH_3 + H_2 + 16 \\text{ ADP} + 16 \\text{ Pi}",
          note: "Enrichissement naturel du sol en azote sans engrais de synthèse"
        }
      ],
      workedExample: {
        title: "Comparaison agronomique de la fertilisation azotée minérale vs engrais vert",
        statement: "Une station expérimentale de l'ANADER compare le rendement en riz sur 3 parcelles identiques de 1 ha : Parcelle A (témoin sans apport) = 2 100 kg/ha ; Parcelle B (apport de 60 kg/ha d'engrais azoté minéral) = 3 800 kg/ha ; Parcelle C (culture préalable d'une légumineuse enfouie en engrais vert) = 5 900 kg/ha. 1. Analyser les résultats. 2. Expliquer la supériorité de l'engrais vert.",
        methodSteps: [
          "Étape 1 : Analyser les résultats quantitatifs. La parcelle témoin A produit 2 100 kg/ha. L'engrais azoté chimique améliore le rendement (+1 700 kg/ha, soit 3 800 kg/ha). La légumineuse en engrais vert produit le rendement le plus spectaculaire (+3 800 kg/ha par rapport au témoin, soit 5 900 kg/ha).",
          "Étape 2 : Expliquer l'effet de l'engrais chimique. Il apporte immédiatement des ions nitrates qui boostent le développement du riz mais sans améliorer la rétention d'eau ni la vie microbienne du sol.",
          "Étape 3 : Expliquer la supériorité de l'engrais vert. La légumineuse enrichit le sol par deux mécanismes cumulés : 1) fixation de l'azote atmosphérique par ses nodosités racinaires symbiotiques (Rhizobium) ; 2) apport de biomasse organique qui, lors de sa minéralisation par les lombrics et microbes, libère des éléments nutritifs de façon étalée tout en améliorant la structure physique et l'humus du sol."
        ],
        conclusion: "L'engrais vert de légumineuses donne le meilleur rendement (5 900 kg/ha) grâce à la fixation symbiotique de l'azote et à l'amélioration globale de la biologie du sol."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparatif Engrais Chimiques Minéraux vs Amendements Organiques",
        tableData: {
          headers: ["Caractéristique", "Engrais chimiques minéraux (NPK)", "Amendements organiques (Fumier, Engrais verts)"],
          rows: [
            ["État des nutriments", "Sels minéraux solubles immédiatement dissociés", "Substances organiques complexes à minéraliser"],
            ["Vitesse d'assimilation", "Immédiate (effet coup de fouet rapide)", "Progressive et continue (action de fond différée)"],
            ["Action sur la structure du sol", "Nulle (ne crée pas d'agrégats ni d'humus)", "Majeure : formation d'humus et stimulation biologique"],
            ["Action sur la macrofaune", "Peut nuire aux vers de terre à forte dose", "Nourrit et multiplie les vers de terre et microorganismes"],
            ["Risque de lessivage", "Élevé pour les nitrates (pollution des eaux)", "Faible (restitution graduelle en harmonie avec la plante)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c14_q7",
          type: "mcq",
          prompt: "Pourquoi la matière organique fraîche (débris végétaux, paille, fumier) ne nourrit-elle pas immédiatement les racines des cultures ?",
          options: [
            "Parce qu'elle contient des toxines mortelles pour toutes les plantes",
            "Parce qu'elle est constituée de macromolécules organiques que les racines ne peuvent absorber qu'après minéralisation en sels solubles",
            "Parce que les racines ne peuvent absorber que de l'eau pure sans aucun soluté",
            "Parce que la matière organique s'évapore spontanément dans l'air"
          ],
          correctAnswerIndex: 1,
          explanation: "Les racines n'absorbent que des ions minéraux dissous de petite taille. Les composés carbonés et azotés complexes de la matière organique doivent d'abord être décomposés et minéralisés par la biologie du sol."
        },
        {
          id: "tle_d_svt_c14_q8",
          type: "mcq",
          prompt: "Comment nomme-t-on les excréments des vers de terre enrichis en sels minéraux et en matière organique digérée ?",
          options: [
            "Les nodules",
            "Les turricules",
            "Les vacuoles",
            "Les stalagmites"
          ],
          correctAnswerIndex: 1,
          explanation: "Les turricules sont les déjections rejetées à la surface du sol par les vers de terre, formées d'un mélange intime de particules minérales et d'humus hautement concentré en éléments nutritifs assimilables."
        },
        {
          id: "tle_d_svt_c14_q9",
          type: "mcq",
          prompt: "Quelle est la définition agronomique exacte d'un engrais vert ?",
          options: [
            "Une peinture verte synthétique pulvérisée sur les sols nus",
            "Une culture à croissance rapide semée pour être fauchée et incorporée au sol afin d'améliorer sa fertilité",
            "Un engrais chimique composé uniquement de phosphore",
            "Des feuilles d'arbres mortes ramassées en saison sèche"
          ],
          correctAnswerIndex: 1,
          explanation: "Un engrais vert est une culture temporaire (souvent une légumineuse ou une graminée) cultivée spécifiquement pour être enfouie dans le sol, afin de l'enrichir en biomasse, en azote et de protéger sa surface."
        },
        {
          id: "tle_d_svt_c14_q10",
          type: "mcq",
          prompt: "Grâce à quel mécanisme biologique les légumineuses cultivées en engrais vert apportent-elles un supplément massif d'azote au sol ?",
          options: [
            "Grâce à des cristaux de chlorophylle qui stockent le potassium",
            "Grâce à une symbiose avec des bactéries Rhizobium situées dans des nodosités racinaires fixant l'azote gazeux",
            "En absorbant directement l'azote des roches métamorphiques profondes",
            "En synthétisant de l'azote par photosynthèse foliaire"
          ],
          correctAnswerIndex: 1,
          explanation: "Les légumineuses forment une association symbiotique avec les bactéries du genre Rhizobium au sein de nodosités sur leurs racines, capables de réduire le diazote atmosphérique (N2) en ammonium assimilable par la plante."
        },
        {
          id: "tle_d_svt_c14_q11",
          type: "mcq",
          prompt: "En dehors de l'enrichissement chimique en minéraux, quel bénéfice physique capital les vers de terre apportent-ils au sol ?",
          options: [
            "Ils compactent le sol pour empêcher l'eau d'entrer",
            "Ils perforent des galeries qui aèrent le sol, facilitent l'enracinement et améliorent l'infiltration de l'eau",
            "Ils élèvent la température du sol jusqu'à 60 °C",
            "Ils détruisent l'argile pour créer du sable fin"
          ],
          correctAnswerIndex: 1,
          explanation: "Le réseau dense de galeries creusées par les lombrics favorise la circulation de l'air (respiration racinaire), la pénétration mécanique des racines et l'infiltration rapide de l'eau de pluie, évitant le ravinement de surface."
        },
        {
          id: "tle_d_svt_c14_q12",
          type: "mcq",
          prompt: "Parmi les matières suivantes, laquelle constitue un engrais organique issu d'effluents d'élevage ?",
          options: [
            "Le superphosphate triple",
            "Le fumier d'étable (ou lisier)",
            "La chaux vive (CaO)",
            "Le sulfate d'ammoniaque"
          ],
          correctAnswerIndex: 1,
          explanation: "Le fumier (mélange de paille de litière et d'excréments d'animaux d'élevage) est un amendement organique naturel riche en matière carbonée et en fertilisants azotés et potassiques."
        }
      ]
    },
    {
      id: "pt3_amendements_calcaires_humiferes_complexe_argilo_humique",
      order: 3,
      title: "Les amendements calcaires et humifères : formation du Complexe Argilo-Humique (CAH)",
      summary: "Diagnostic d'un sol acide dégradé, mécanismes chimiques du chaulage (chaux vive CaO, carbonate de calcium CaCO3), neutralisation des ions H+ et fixation du Ca2+, rôle structurant de l'humus et formation du complexe argilo-humique (CAH).",
      conceptExplanation: "Sous climat tropical humide (comme dans les régions forestières et de savane de Côte d'Ivoire), les précipitations intenses provoquent un lessivage continu des bases échangeables ($Ca^{2+}, Mg^{2+}, K^+$). Les sols deviennent acides, compacts, chimiquement dénutris et biologiquement inactifs.\n\n1. Diagnostic et caractéristiques d'un sol dégradé infertile :\nUne analyse pédologique d'un sol dégradé révèle typiquement :\n- Propriétés physiques défavorables : structure compacte ou sableuse sans cohésion, manque total d'agrégats stables (absence de granulation), battance en surface lors des pluies et asphyxie racinaire ;\n- Propriétés chimiques très néfastes : pH fortement acide ($pH \\le 4,5$), absence de cations bivalents floculants ($Ca^{2+}, Mg^{2+}$), saturation du complexe absorbant par des ions hydrogène ($H^+$) et aluminium toxique ($Al^{3+}$) ;\n- Propriétés biologiques compromises : activité microbienne presque nulle, absence de lombrics et végétation chétive.\nCe sol nécessite impérativement un amendement calcaire et un amendement humifère.\n\n2. L'amendement calcaire (Chaulage) : nature et réactions chimiques :\nFaire un amendement calcaire consiste à apporter des composés calciques pour corriger l'acidité et régulariser l'état ionique du sol :\n- Cas de la chaux vive ($CaO$) : réservée aux sols lourds, compacts et très acides en raison de sa grande réactivité et de son pouvoir neutralisant élevé. Dans l'eau du sol, elle s'hydrate puis se dissocie instantanément :\n$$CaO + H_2O \\longrightarrow Ca(OH)_2 \\longrightarrow Ca^{2+} + 2 OH^-$$\n- Cas du carbonate de calcium broyé ($CaCO_3$) : adapté aux sols légers, filtrants ou sableux. Il réagit progressivement sous l'action de l'eau chargée de dioxyde de carbone ($CO_2$) et des acides organiques du sol pour former le bicarbonate de calcium soluble qui se dissocie :\n$$CaCO_3 + H_2O + CO_2 \\longrightarrow Ca(HCO_3)_2 \\longrightarrow Ca^{2+} + 2 HCO_3^-$$\n\n3. Mécanisme d'action du calcium sur le complexe absorbant du sol :\nLe complexe absorbant du sol (argile et matière organique) possède une surface chargée négativement qui retenait les ions acidifiants $H^+$. Lors de l'amendement calcaire :\n- Échange cationique : chaque ion bivalent calcium $Ca^{2+}$ prend la place de deux ions monovalents $H^+$ fixés sur le complexe absorbant ;\n- Neutralisation de l'acidité : les ions hydroxyde ($OH^-$) ou hydrogénocarbonate ($HCO_3^-$) libérés dans la solution réagissent avec les ions $H^+$ expulsés pour former de l'eau neutre ($H_2O$) ou de l'acide carbonique très faible non toxique :\n$$H^+ + OH^- \\longrightarrow H_2O$$\nLe pH du sol s'élève et tend vers la neutralité ($pH \\approx 6,5 - 7$), ce qui débloque l'assimilation des phosphates et relance l'activité des bactéries nitrifiantes.\n\n4. Rôle de l'amendement humifère et genèse du Complexe Argilo-Humique (CAH) :\nL'humus est une matière colloïdale brune ou noirâtre issue de la décomposition biologique lente de la matière organique exclusivement végétale. L'apport d'humus complète l'amendement calcaire :\n- Floculation et ponts calciques : les micelles d'argile (chargées négativement) et les micelles d'humus (chargées négativement) se repoussent spontanément en milieu aqueux (état dispersé défavorable). En présence d'ions $Ca^{2+}$, le calcium agit comme un pont électrostatique bivalent positif reliant l'argile et l'humus :\n$$\\text{Argile}^- \\quad \\dots \\quad Ca^{2+} \\quad \\dots \\quad \\text{Humus}^-$$\nCette association forme le Complexe Argilo-Humique (CAH), également appelé complexe adsorbant ;\n- Formation de la structure grumeleuse : le CAH enrobe et cimente les grains de sable et de limon, créant des agrégats stables et poreux (structure grumeleuse). Le sol acquiert une excellente aération, retient l'eau utile sans asphyxie et stocke durablement les nutriments minéraux échangeables ($K^+, Mg^{2+}, NH_4^+$).",
      keyRule: "L'amendement calcaire (CaO ou CaCO3) apporte des ions Ca2+ qui délogent les ions H+ du complexe absorbant, élevant le pH vers la neutralité. Les ions Ca2+ soudent l'argile et l'humus par des ponts calciques pour former le Complexe Argilo-Humique (CAH), conférant au sol une structure grumeleuse fertile et stable.",
      formulas: [
        {
          name: "Hydratation et dissociation de la chaux vive",
          formula: "CaO + H_2O \\longrightarrow Ca(OH)_2 \\longrightarrow Ca^{2+} + 2 OH^-",
          note: "Neutralisation : H^+ + OH^- \\rightarrow H_2O (élévation du pH)"
        },
        {
          name: "Dissolution du calcaire broyé",
          formula: "CaCO_3 + H_2O + CO_2 \\longrightarrow Ca(HCO_3)_2 \\longrightarrow Ca^{2+} + 2 HCO_3^-",
          note: "Convient aux sols légers et sableux"
        }
      ],
      workedExample: {
        title: "Interprétation du redressement du pH d'un sol acide par apport de chaux vive",
        statement: "Un planteur possède une terre agricole compacte dont le pH mesuré est de 4,5 (très acide). L'analyse montre une forte saturation en ions H+ et une quasi-absence d'ions Ca2+. Après épandage raisonné de chaux vive (CaO) et arrosage, le pH remonte à 6,8 et la structure devient grumeleuse. 1. Expliquer les étapes chimiques de la neutralisation des ions H+. 2. Expliquer comment le sol a acquis sa structure grumeleuse.",
        methodSteps: [
          "Étape 1 : Réaction de la chaux vive dans la solution du sol. Le CaO s'hydrate au contact de l'eau : CaO + H2O -> Ca(OH)2. Il se dissocie en ions Ca2+ et en deux ions OH-.",
          "Étape 2 : Échange cationique et neutralisation de l'acidité. Les ions Ca2+ bivalents possèdent une plus grande affinité pour le complexe absorbant négatif que les ions H+ monovalents. Les ions Ca2+ prennent la place des ions H+ sur le complexe absorbant. Les ions H+ libérés dans la solution réagissent avec les ions OH- pour former de l'eau neutre : H+ + OH- -> H2O. L'acidité diminue et le pH remonte vers la neutralité (6,8).",
          "Étape 3 : Genèse de la structure grumeleuse. Les ions Ca2+ bivalents servent de ponts électrostatiques reliant les colloïdes négatifs d'argile et d'humus (floculation). Cela forme le Complexe Argilo-Humique (CAH) qui agrège les particules de limon et sable, créant une structure grumeleuse poreuse et bien aérée."
        ],
        conclusion: "La chaux apporte le Ca2+ qui neutralise les ions H+ par formation d'eau et ponte l'argile et l'humus en complexe argilo-humique stable."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Mécanisme de formation du Complexe Argilo-Humique (CAH) par le calcium",
        tableData: {
          headers: ["Composant du sol", "Charge électrique superficielle", "État en absence de Ca2+ (sol acide)", "État en présence de Ca2+ (amendement calcaire)"],
          rows: [
            ["Colloïdes d'argile", "Négative (-)", "Dispersés dans l'eau (sol battant, imperméable)", "Floculés et liés à l'humus par ponts calciques"],
            ["Colloïdes d'humus", "Négative (-)", "Isolés, lessivés ou dégradés sans fixation", "Agrégés au complexe pour stabiliser la structure"],
            ["Ions fixés sur le complexe", "Cations échangeables", "Saturé d'ions H+ et Al3+ acidifiants et toxiques", "Saturé d'ions Ca2+, Mg2+, K+, NH4+ nutritifs"],
            ["Structure macroscopique", "Organisation du sol", "Structure compacte et asphyxiante ou particulaire", "Structure grumeleuse aérée, drainante et fertile"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c14_q13",
          type: "mcq",
          prompt: "Quel est le rôle direct des ions Ca2+ apportés par l'amendement calcaire dans un sol acide ?",
          options: [
            "Ils remplacent les ions H+ fixés sur le complexe absorbant et forment des ponts reliant l'argile et l'humus",
            "Ils dissolvent l'argile pour la faire disparaître du sol",
            "Ils bloquent définitivement l'entrée de l'eau dans le sous-sol",
            "Ils détruisent les bactéries symbiotiques Rhizobium"
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions bivalents Ca2+ délogent les ions acidifiants H+ du complexe absorbant négatif et établissent des ponts électrostatiques (floculation) reliant l'argile et l'humus pour former le Complexe Argilo-Humique."
        },
        {
          id: "tle_d_svt_c14_q14",
          type: "mcq",
          prompt: "Quel composé est spécifiquement recommandé pour l'amendement calcaire rapide des sols lourds, compacts et très acides ?",
          options: [
            "Le chlorure de sodium (NaCl)",
            "La chaux vive (CaO)",
            "Le sable de quartz pur",
            "Le soufre en poudre"
          ],
          correctAnswerIndex: 1,
          explanation: "La chaux vive (oxyde de calcium CaO) possède un très fort pouvoir neutralisant immédiat en s'hydratant en Ca(OH)2, ce qui convient parfaitement pour corriger rapidement les sols argileux très acides."
        },
        {
          id: "tle_d_svt_c14_q15",
          type: "mcq",
          prompt: "Comment nomme-t-on la matière organique noirâtre de composition variée résultant de la décomposition de débris végétaux ?",
          options: [
            "L'argile smectite",
            "L'humus",
            "Le quartz",
            "La latérite"
          ],
          correctAnswerIndex: 1,
          explanation: "L'humus est la matière organique colloïdale foncée issue de la décomposition et de la transformation biologique de la matière végétale par la macrofaune et les microorganismes du sol."
        },
        {
          id: "tle_d_svt_c14_q16",
          type: "mcq",
          prompt: "Quelle structure physique du sol, favorisée par le Complexe Argilo-Humique, offre les meilleures conditions de culture ?",
          options: [
            "La structure compacte imperméable",
            "La structure particulaire sans cohésion",
            "La structure grumeleuse poreuse et bien aérée",
            "La structure cimentée indurée en cuirasse"
          ],
          correctAnswerIndex: 2,
          explanation: "La structure grumeleuse est formée d'agrégats stables soudés par le CAH, laissant entre eux des macropores (pour l'air et l'enracinement) et des micropores (pour retenir l'eau utile aux plantes)."
        },
        {
          id: "tle_d_svt_c14_q17",
          type: "mcq",
          prompt: "Dans un sol acide (pH 4,5), que deviennent les ions H+ délogés du complexe absorbant après apport de chaux vive ?",
          options: [
            "Ils se transforment en or pur",
            "Ils se combinent aux ions OH- libérés par la chaux pour former des molécules d'eau neutre (H2O)",
            "Ils s'évaporent sous forme de gaz radioactif",
            "Ils précipitent sous forme de cristaux de diamant"
          ],
          correctAnswerIndex: 1,
          explanation: "Les ions OH- issus de la dissociation de Ca(OH)2 neutralisent directement les protons acides selon la réaction fondamentale acide-base : H+ + OH- -> H2O, ce qui élève le pH du milieu."
        },
        {
          id: "tle_d_svt_c14_q18",
          type: "mcq",
          prompt: "Pour un sol sableux léger et filtrant, quel amendement calcaire est préféré pour éviter une agression trop brutale du milieu ?",
          options: [
            "La chaux vive concentrée (CaO)",
            "Le carbonate de calcium broyé (CaCO3)",
            "L'acide chlorhydrique concentré",
            "Le nitrate d'ammonium pur"
          ],
          correctAnswerIndex: 1,
          explanation: "Le carbonate de calcium (CaCO3 ou calcaire broyé) a une solubilité lente et progressive en présence de CO2 dissous, ce qui évite les à-coups de pH sur les sols sableux légers dotés d'un faible pouvoir tampon."
        }
      ]
    },
    {
      id: "pt4_techniques_protection_conservation_gestion_durable_sols",
      order: 4,
      title: "Techniques de protection, conservation et gestion durable des sols",
      summary: "Pratiques culturales anti-érosives et de conservation de la fertilité : paillage (mulching), jachère, assolement/rotation, terrassement en banquettes sur pentes et engazonnement/plantes de couverture.",
      conceptExplanation: "En zone tropicale, l'agressivité des averses pluvieuses (effet de battance), l'intensité de l'insolation et l'érosion hydrique et éolienne provoquent le décapage de la couche arable fertile. La durabilité de l'agriculture exige la mise en œuvre de techniques de protection mécanique et biologique du sol.\n\n1. Le paillage (ou mulching) :\nLe paillage consiste à étaler une couverture continue de matière végétale morte (paille de graminées, herbes sèches, tiges de maïs, résidus de récolte) sur la surface du sol cultivé :\n- Protection mécanique anti-battance : la paille amortit l'impact cinétique violent des gouttes de pluie qui, sans couverture, pulvérisent les agrégats de terre et forment une croûte de battance imperméable en surface ;\n- Régulation thermique et hydrique : elle fait écran contre l'insolation directe intense, diminue considérablement l'évaporation de l'eau du sol, maintenant une humidité favorable aux racines même en période de sécheresse ;\n- Enrichissement progressif : en se décomposant lentement, la paille nourrit la faune du sol et restitue des éléments minéraux et de l'humus.\n\n2. La pratique de la jachère :\nLa jachère consiste à laisser une parcelle agricole au repos complet après plusieurs années consécutives d'exploitation :\n- Objectif : permettre à la végétation naturelle spontanée de recoloniser le terrain, d'enfoncer ses racines et de reconstituer naturellement le stock d'éléments minéraux et d'humus par l'accumulation de litière ;\n- Régénération biologique : les populations de microorganismes et de vers de terre se restaurent sans perturbation due au labour ou aux traitements chimiques ;\n- Évolution moderne : la jachère naturelle longue traditionnelle (10 à 20 ans) étant devenue impossible avec la pression démographique, on préconise aujourd'hui les jachères améliorées courtes (2 à 3 ans) ensemencées de légumineuses arbustives fixatrices d'azote.\n\n3. L'assolement et la rotation des cultures :\nL'assolement consiste à diviser une exploitation en plusieurs parcelles (soles) et à y faire alterner les cultures dans le temps (rotation) selon un ordre agronomique réfléchi :\n- Préservation des réserves minérales : chaque espèce végétale présente des besoins nutritionnels différents et prospecte le sol à des profondeurs racinaires distinctes. Faire alterner une culture exigeante en azote (ex. maïs) avec une culture fixatrice d'azote (ex. niébé/soja), puis une culture à enracinement profond puisant le potassium (ex. manioc), évite l'épuisement sélectif du sol ;\n- Rupture des cycles parasitaires : la rotation empêche la prolifération spécifique des insectes ravageurs, nématodes, champignons pathogènes et mauvaises herbes inféodés à une culture donnée (évite la fatigue des sols mono-cultivés).\n\n4. Le terrassement (Cultures en terrasses sur terrains en pente) :\nSur les terrains présentant une forte déclivité, l'eau de pluie ruisselle à grande vitesse, creusant des ravines et arrachant la terre arable fertile :\n- Aménagement en terrasses : le versant en pente est façonné en une succession de gradins ou banquettes planes horizontales en escalier soutenues par des murets de pierre ou des talus herbeux ;\n- Rôle anti-érosif : les terrasses brisent l'énergie cinétique de l'eau qui s'écoule, ralentissent le ruissellement superficiel et favorisent l'infiltration de l'eau dans le sous-sol tout en retenant la terre fertile sur les plates-formes cultivées.\n\n5. Les plantes de couverture et l'engazonnement :\nCette méthode consiste à maintenir en permanence un tapis végétal vivant dense (graminées gazonnantes ou légumineuses rampantes telles que *Pueraria phaseoloides*) sur les sols dénudés ou sous les cultures pérennes (palmier à huile, hévéa, caféier, cacaoyer) :\n- Fixation racinaire : le chevelu racinaire dense lie fermement les particules de sol et neutralise l'érosion éolienne et hydrique ;\n- Restauration de la biodiversité : elle protège la flore et la microfaune tellurique tout en freinant l'enherbement par des adventices envahissantes.",
      keyRule: "Pour protéger durablement les sols : le paillage protège de la battance et de l'insolation ; la jachère reconstitue naturellement la fertilité ; l'assolement/rotation évite l'épuisement sélectif des minéraux ; le terrassement freine le ruissellement sur pente ; et les plantes de couverture fixent la terre contre l'érosion.",
      formulas: [
        {
          name: "Équation universelle de perte en sol par érosion (USLE - Wischmeier)",
          formula: "A = R \\times K \\times LS \\times C \\times P",
          note: "A = perte de terre (t/ha/an), R = agressivité des pluies, K = érodibilité du sol, LS = facteur topographique (longueur/pente), C = couvert végétal (paillage/cultures), P = pratiques anti-érosives (terrasses)"
        }
      ],
      workedExample: {
        title: "Élaboration d'un plan de réhabilitation d'une parcelle en pente dégradée à Bondoukou",
        statement: "Dans un village près de Bondoukou, une parcelle sur colline en pente de 15 % subit un ravinement important. Le sol est nu, battant et son rendement en maïs s'est effondré. Proposer une stratégie intégrée en 3 volets combinant protection physique, correction structurale et régénération biologique.",
        methodSteps: [
          "Étape 1 : Protection mécanique contre l'érosion pluviale. Aménager la pente en terrasses (gradins en escalier avec talus stabilisés par des herbes fixatrices) pour casser la vitesse de ruissellement et retenir les sédiments.",
          "Étape 2 : Protection de surface et restitution d'humidité. Pratiquer un paillage immédiat des sols cultivés avec des résidus de récolte pour éliminer l'effet de battance des pluies tropicales et limiter l'évaporation.",
          "Étape 3 : Restauration chimique et biologique par rotation culturale. Remplacer la monoculture de maïs par une rotation culturale triennale intégrant une légumineuse en engrais vert (niébé ou mucuna) pour réinjecter de l'azote par fixation symbiotique et apporter de la matière organique humifère qui reconstituera le complexe argilo-humique."
        ],
        conclusion: "L'association terrasses + paillage + rotation avec légumineuse régénère durablement la fertilité et stoppe l'érosion."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Synthèse des 5 techniques majeures de protection et conservation des sols",
        tableData: {
          headers: ["Technique culturale", "Modalité d'application", "Effet direct sur le sol", "Impact agronomique et écologique majeur"],
          rows: [
            ["Paillage (mulching)", "Couverture de résidus végétaux morts (paille)", "Lutte contre la battance des pluies, l'insolation et l'évaporation", "Maintien de l'humidité du sol, réduction de l'érosion, apport d'humus"],
            ["Jachère", "Mise au repos du sol pendant 2 à plusieurs années", "Reconstitution spontanée de la fertilité et de la macrofaune", "Régénération des réserves minérales sans intrants chimiques"],
            ["Assolement / Rotation", "Alternance de cultures aux besoins différents sur une parcelle", "Évite l'épuisement sélectif du sol en ions minéraux spécifiques", "Rupture des cycles biologiques des ravageurs et maladies des plantes"],
            ["Terrassement", "Aménagement des versants pentus en gradins / terrasses", "Freine l'écoulement rapide des eaux de pluie de ruissellement", "Suppression du ravinement et conservation des couches arables"],
            ["Plantes de couverture", "Semis de plantes herbacées rampantes ou gazonnantes", "Couverture végétale permanente et ancrage racinaire de surface", "Protection anti-érosive totale et enrichissement en azote symbiotique"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c14_q19",
          type: "mcq",
          prompt: "Quel est l'effet protecteur immédiat du paillage contre l'action des pluies tropicales ?",
          options: [
            "Il augmente la vitesse du ruissellement de surface",
            "Il amortit l'impact cinétique des gouttes de pluie et empêche la formation d'une croûte de battance",
            "Il accélère l'évaporation de l'eau du sol",
            "Il brûle les jeunes feuilles par réaction exothermique"
          ],
          correctAnswerIndex: 1,
          explanation: "La couche de paille absorbe l'énergie cinétique des grosses gouttes d'eau de pluie, évitant l'éclatement des agrégats de surface et le colmatage des pores (croûte de battance imperméable)."
        },
        {
          id: "tle_d_svt_c14_q20",
          type: "mcq",
          prompt: "En quoi consiste la pratique agronomique de la jachère ?",
          options: [
            "À inonder en permanence une parcelle d'eau de mer",
            "À mettre un sol au repos sans culture pendant un certain temps pour lui permettre de reconstituer naturellement sa fertilité",
            "À arracher toute la terre arable pour la remplacer par du gravier",
            "À épandre des doses massives de pesticides chaque semaine"
          ],
          correctAnswerIndex: 1,
          explanation: "La jachère est la mise au repos temporaire d'une terre agricole pour laisser la végétation naturelle et les microorganismes reconstituer la réserve en éléments minéraux et en matière organique."
        },
        {
          id: "tle_d_svt_c14_q21",
          type: "mcq",
          prompt: "Quel est l'intérêt agronomique majeur de pratiquer l'assolement (rotation des cultures) sur une même parcelle ?",
          options: [
            "Produire exactement la même plante toute l'année",
            "Éviter l'épuisement sélectif du sol en faisant alterner des plantes n'ayant pas les mêmes besoins en éléments minéraux",
            "Rendre le sol totalement stérile",
            "Forcer le sol à devenir très acide"
          ],
          correctAnswerIndex: 1,
          explanation: "En alternant des plantes aux exigences minérales et aux profondeurs d'enracinement distinctes (ex. maïs puis légumineuse puis tubercule), on évite le prélèvement répété des mêmes éléments minéraux et on casse le cycle des parasites."
        },
        {
          id: "tle_d_svt_c14_q22",
          type: "mcq",
          prompt: "Sur un terrain fortement incliné, pourquoi réalise-t-on des cultures en terrasses (terrassement en gradins) ?",
          options: [
            "Pour augmenter la vitesse du vent",
            "Pour lutter contre l'écoulement rapide des eaux de pluie et limiter le ravinement érosif",
            "Pour empêcher le soleil d'éclairer la colline",
            "Pour assécher définitivement la nappe phréatique"
          ],
          correctAnswerIndex: 1,
          explanation: "Les terrasses horizontales en escalier transforment une pente rapide en une succession de plats qui ralentissent le ruissellement des eaux de pluie, favorisent l'infiltration et retiennent la couche de terre fertile."
        },
        {
          id: "tle_d_svt_c14_q23",
          type: "mcq",
          prompt: "Quel rôle jouent les plantes de couverture (engazonnement) sous les cultures de plantation comme le palmier à huile ou l'hévéa ?",
          options: [
            "Elles assèchent les racines des arbres géants",
            "Elles protègent le sol contre l'érosion, maintiennent la fraîcheur et reconstituent la biodiversité tellurique",
            "Elles attirent les criquets pèlerins",
            "Elles empêchent la formation de toute feuille sur les arbres"
          ],
          correctAnswerIndex: 1,
          explanation: "Le tapis vivant dense des plantes de couverture fixe les particules de terre grâce à son réseau racinaire, amortit les pluies, empêche l'invasion de mauvaises herbes et entretient une faune du sol active."
        },
        {
          id: "tle_d_svt_c14_q24",
          type: "mcq",
          prompt: "Parmi les combinaisons suivantes, laquelle représente une gestion rationnelle et durable des sols agricoles ?",
          options: [
            "Monoculture continue + déforestation totale + brûlis répété chaque année",
            "Amendement calcaire et humifère + paillage + rotation de cultures avec légumineuses",
            "Surdosage massif d'engrais chimiques sans aucun apport de matière organique",
            "Labour intensif dans le sens de la plus grande pente sans terrasses"
          ],
          correctAnswerIndex: 1,
          explanation: "L'association d'amendements rééquilibrant le complexe argilo-humique (chaux + compost/humus), du paillage protecteur et de rotations culturales enrichies en légumineuses constitue le fondement d'une agriculture durable préservant les sols et l'environnement."
        }
      ]
    }
  ]
};

