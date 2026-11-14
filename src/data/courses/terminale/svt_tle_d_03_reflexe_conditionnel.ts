import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L03_REFLEXE_CONDITIONNEL: CurriculumChapter = {
  id: "terminale_d_svt_ch04_le_reflexe_conditionnel",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 3,
  title: "Le réflexe conditionnel (Mécanismes neurophysiologiques et plasticité cérébrale)",
  summary: "Étude rigoureuse et complète de la neurobiologie du comportement acquis : expériences historiques de Pavlov et protocole de conditionnement salivaire, nature des stimuli (neutre, absolu/inconditionnel, conditionnel), trajet anatomique de l'influx nerveux et établissement de la nouvelle liaison intercorticale, conditions physiologiques indispensables, propriétés caractéristiques (extinction, généralisation, discrimination), conditionnements moteurs d'évitement et applications aux apprentissages et automatismes humains.",
  officialVolumeHours: 5,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_experiences_pavlov_nature_stimuli",
      order: 1,
      title: "Mise en évidence expérimentale et nature des stimuli (Expériences de Pavlov)",
      summary: "Protocole expérimental de conditionnement salivaire chez le chien (Ivan Pavlov), analyse séquentielle des 4 phases et définitions rigoureuses des concepts : stimulus neutre, stimulus inconditionnel (absolu), réflexe inné, stimulus conditionnel et réflexe acquis.",
      conceptExplanation: "Les comportements animaux et humains associent deux types d'activités motrices ou sécrétoires : des réponses stéréotypées présentes dès la naissance (réflexes innés) et des réponses adaptatives nouvellement acquises au contact de l'environnement (réflexes conditionnels ou acquis).\n\n1. Dispositif expérimental d'Ivan Pavlov (Prix Nobel 1904) :\nPour étudier la régulation nerveuse des sécrétions digestives, le physiologiste russe Ivan Pavlov conçut une installation expérimentale hautement rigoureuse :\n- Un chien est placé dans un harnais maintenant sa posture sans douleur ni contrainte physique excessive, à l'intérieur d'une chambre isolée acoustiquement (double cloison insonorisée) afin d'éliminer tout bruit parasite venant de l'extérieur.\n- La température et l'éclairage de la pièce sont maintenus rigoureusement constants.\n- Une fistule salivaire est pratiquée sur la joue du chien : le conduit de la glande salivaire parotide est dévié vers l'extérieur et connecté à un tube gradué muni d'un index mobile ou d'un compteur de gouttes, permettant de mesurer avec précision le volume et le débit de salive sécrétée sans que l'expérimentateur n'intervienne visuellement auprès de l'animal.\n\n2. Déroulement chronologique des quatre phases expérimentales :\n- Phase 1 (Test initial du stimulus sonore) :\nOn fait entendre au chien le tic-tac régulier d'un métronome (ou un son de sifflet). L'animal dresse les oreilles et tourne la tête vers la source sonore (réflexe d'orientation), mais aucune goutte de salive n'est émise par les glandes salivaires. Ce son est inefficace vis-à-vis de la fonction salivaire : c'est un STIMULUS NEUTRE (SN).\n- Phase 2 (Test du stimulus alimentaire) :\nOn dépose sur la langue ou dans la gueule du chien de la poudre de viande ou un morceau d'aliment. Immédiatement, une salivation abondante est observée (ex. 15 gouttes recueillies). Cette sécrétion est involontaire, automatique, préprogrammée génétiquement : c'est un RÉFLEXE INNÉ (ou réflexe inconditionnel). La viande constitue un STIMULUS ABSOLU (ou stimulus inconditionnel, SI).\n- Phase 3 (Phase d'apprentissage ou de couplage associatif) :\nOn associe systématiquement les deux stimuli selon une chronologie stricte : on déclenche le métronome, puis quelques secondes plus tard, alors que le son retentit encore, on distribue la viande. L'animal salive. Au début des essais, le chien semble hésitant, puis l'association devient promptement intégrée. Cette opération d'association (SN + SI) est répétée plusieurs dizaines de fois sur plusieurs jours consécutifs.\n- Phase 4 (Test de la réponse conditionnelle) :\nOn fait entendre au chien uniquement le son du métronome, sans aucune présentation de viande. Constat : le chien salive abondamment (ex. 10 à 15 gouttes). Le son du métronome, initialement inefficace pour la salivation, est devenu un STIMULUS CONDITIONNEL (SC). La salivation déclenchée par ce stimulus non alimentaire est un RÉFLEXE CONDITIONNEL (ou réflexe acquis).\n\n3. Synthèse des définitions fondamentales :\n- Réflexe inné (inconditionnel) : réaction involontaire, automatique, immuable, inscrite dans le patrimoine génétique de l'espèce, ne nécessitant aucun apprentissage préalable.\n- Réflexe conditionnel (acquis) : réaction nouvelle déclenchée par un stimulus qui n'avait originellement aucun effet sur la fonction considérée, résultant d'un apprentissage associatif et propre à l'histoire de l'individu.\n- Stimulus neutre (SN) : signal perceptible par les organes des sens qui ne déclenche naturellement aucune réponse sur la fonction physiologique ciblée.\n- Stimulus absolu / inconditionnel (SI) : excitant naturel spécifique qui déclenche obligatoirement et d'emblée la réponse réflexe innée.\n- Stimulus conditionnel (SC) : ancien stimulus neutre ayant acquis, au terme de l'apprentissage associatif, le pouvoir de déclencher la réponse réflexe.",
      keyRule: "Un réflexe conditionnel est une réponse acquise par apprentissage associatif : un stimulus neutre (SN) associé de manière répétée à un stimulus inconditionnel (SI) devient un stimulus conditionnel (SC) capable de déclencher seul la réponse réflexe.",
      formulas: [
        {
          name: "Séquence canonique du conditionnement pavlovien",
          formula: "\\text{Phase 1 : } \\text{SN} \\to \\text{Aucune salivation} \\quad | \\quad \\text{Phase 2 : } \\text{SI (viande)} \\to \\text{Salivation innée}",
          note: "Apprentissage : [SN + SI] répété n fois -> Phase test : SC -> Réflexe conditionnel acquis"
        }
      ],
      workedExample: {
        title: "Identification et qualification des composantes d'un protocole expérimental",
        statement: "On place un chat dans un box insonorisé. On fait clignoter une diode rouge pendant 2 secondes : le chat observe la lampe sans sécréter de sucs gastriques. Immédiatement après chaque clignotement, on lui administre une boulette de poisson : la sécrétion gastrique s'élève à 8 mL en 10 minutes. Après 40 séances identiques, la simple lumière rouge allumée sans poisson entraîne une sécrétion gastrique de 7,5 mL. Déterminer la nature de chaque stimulus et de chaque réaction.",
        methodSteps: [
          "Étape 1 : Analyser l'effet initial de la lumière rouge. Ne provoquant aucune sécrétion gastrique avant le couplage, la lumière rouge est un stimulus neutre (SN) vis-à-vis de la sécrétion gastrique.",
          "Étape 2 : Analyser l'effet du poisson. Le poisson déclenche spontanément et d'emblée la sécrétion gastrique sans apprentissage : le poisson est un stimulus inconditionnel (SI ou stimulus absolu) et la sécrétion gastrique correspondante est un réflexe inné (inconditionnel).",
          "Étape 3 : Analyser l'effet de l'association répétée. Le couplage [lumière + poisson] correspond à la phase d'apprentissage associatif.",
          "Étape 4 : Analyser l'effet final de la lumière rouge seule. Provoquant désormais la sécrétion gastrique sans aliment, la lumière rouge est devenue un stimulus conditionnel (SC) et la sécrétion gastrique est un réflexe conditionnel (ou acquis)."
        ],
        conclusion: "Lumière rouge initiale = SN ; Poisson = SI ; Sécrétion initiale = Réflexe inné ; Lumière finale = SC ; Sécrétion finale = Réflexe conditionnel."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Chronologie synoptique du conditionnement pavlovien",
        tableData: {
          headers: ["Phase", "Stimulus appliqué", "Réaction physiologique de l'animal", "Statut neurobiologique"],
          rows: [
            ["Phase 1 : Contrôle", "Son du métronome seul", "Orientation des oreilles, aucune salivation", "Stimulus neutre (SN)"],
            ["Phase 2 : Référence", "Morceau de viande dans la gueule", "Salivation immédiate et abondante", "Stimulus inconditionnel (SI) / Réflexe inné"],
            ["Phase 3 : Apprentissage", "Son du métronome suivi de viande (× n fois)", "Salivation déclenchée par la viande", "Phase de couplage associatif (renforcement)"],
            ["Phase 4 : Test acquis", "Son du métronome seul (sans viande)", "Salivation abondante (10 à 15 gouttes)", "Stimulus conditionnel (SC) / Réflexe conditionnel"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c04_p1_q01",
          type: 'mcq',
          prompt: "Dans le protocole initial de Pavlov, pourquoi qualifie-t-on le tic-tac du métronome de « stimulus neutre » lors du premier contact avec l'animal ?",
          options: [
            "Parce que le métronome est inaudible pour le chien et ne franchit pas le seuil absolu d'audibilité.",
            "Parce qu'il provoque une excitation auditive mais ne déclenche naturellement aucune sécrétion salivaire.",
            "Parce qu'il détruit spontanément les terminaisons nerveuses des glandes salivaires.",
            "Parce qu'il s'agit d'un stimulus chimique inactif sur les papilles gustatives."
          ],
          correctAnswerIndex: 1,
          explanation: "Un stimulus est dit neutre pour une fonction physiologique donnée (ici la salivation) lorsqu'il est parfaitement perçu par l'animal (réflexe d'orientation, mouvements des oreilles) mais ne possède aucune liaison préétablie avec le centre réflexe de cette fonction."
        },
        {
          id: "tle_d_svt_c04_p1_q02",
          type: 'mcq',
          prompt: "Un morceau de viande déposé dans la gueule d'un chiot nouveau-né n'ayant jamais été nourri auparavant déclenche aussitôt une salivation. Cette réaction est :",
          options: [
            "Un réflexe conditionnel hérité des parents par imprégnation visuelle.",
            "Un comportement acquis nécessitant une maturation post-natale du cortex cérébral.",
            "Un réflexe inné (inconditionnel) stéréotypé et présent chez tous les individus sains de l'espèce.",
            "Une réaction volontaire nécessitant la prise de décision consciente dans le lobe frontal."
          ],
          correctAnswerIndex: 2,
          explanation: "La salivation en réponse à la présence d'aliment dans la bouche est un réflexe inné : il est automatique, involontaire, présent dès la naissance sans apprentissage, et commun à tous les membres de l'espèce."
        },
        {
          id: "tle_d_svt_c04_p1_q03",
          type: 'mcq',
          prompt: "Quelle modification sémantique et physiologique s'opère sur le stimulus sonore à l'issue réussie de la phase de conditionnement de Pavlov ?",
          options: [
            "Le stimulus neutre devient un stimulus inconditionnel absolu.",
            "Le stimulus neutre devient un stimulus conditionnel capable d'activer le centre salivaire sans présence d'aliment.",
            "Le stimulus conditionnel redevient un stimulus inefficace en raison de l'accoutumance.",
            "Le stimulus absolu se transforme en stimulus inhibiteur bloquant la salivation."
          ],
          correctAnswerIndex: 1,
          explanation: "Au cours du conditionnement, le stimulus initialement neutre a acquis, par association répétée avec le stimulus absolu, la capacité d'évoquer à lui seul la salivation : il est devenu un stimulus conditionnel."
        },
        {
          id: "tle_d_svt_c04_p1_q04",
          type: 'mcq',
          prompt: "Dans le dispositif de Pavlov, à quoi sert rigoureusement la chambre insonorisée à température constante ?",
          options: [
            "À endormir le chien pour pratiquer des enregistrements d'électroencéphalographie de sommeil profond.",
            "À isoler l'animal de tout stimulus parasite externe qui perturberait l'établissement sélectif de l'association.",
            "À augmenter la pression atmosphérique afin d'accélérer l'exocytose salivaire.",
            "À empêcher la lumière du jour de dégrader la poudre de viande contenue dans la mangeoire."
          ],
          correctAnswerIndex: 1,
          explanation: "Le conditionnement requiert une vigilance focalisée et l'absence d'interférences sensorielles. Tout bruit imprévu ou variation thermique agit comme un stimulus distracteur déclenchant une inhibition externe ou un réflexe d'orientation concurrent."
        },
        {
          id: "tle_d_svt_c04_p1_q05",
          type: 'mcq',
          prompt: "Un expérimentateur fait entendre une cloche à un chien, puis ne lui donne JAMAIS de nourriture. Au bout de 100 répétitions de la cloche seule :",
          options: [
            "Le chien finira par saliver spontanément par effet d'attente psychologique.",
            "La cloche restera un stimulus neutre vis-à-vis de la salivation et provoquera même une habituation (disparition du réflexe d'orientation).",
            "La cloche se transformera automatiquement en stimulus absolu.",
            "Le chien développera un réflexe conditionnel d'hypersécrétion salivaire paradoxale."
          ],
          correctAnswerIndex: 1,
          explanation: "Sans association avec un stimulus inconditionnel (renforcement), un stimulus neutre ne peut jamais devenir conditionnel. Au contraire, l'animal s'y habitue et finit par ne plus réagir du tout (extinction du réflexe d'orientation initial)."
        },
        {
          id: "tle_d_svt_c04_p1_q06",
          type: 'mcq',
          prompt: "Laquelle des propositions suivantes distingue formellement un réflexe inné d'un réflexe conditionnel ?",
          options: [
            "Le réflexe inné est temporaire tandis que le réflexe conditionnel est définitif et immuable.",
            "Le réflexe inné est spécifique à un individu isolé alors que le réflexe conditionnel est partagé par toute l'espèce.",
            "Le réflexe inné existe sans apprentissage préalable alors que le réflexe conditionnel résulte obligatoirement d'une expérience individuelle.",
            "Le réflexe inné fait obligatoirement intervenir le cortex cérébral alors que le réflexe conditionnel est purement médullaire."
          ],
          correctAnswerIndex: 2,
          explanation: "Le réflexe inné est programmé génétiquement et commun à toute l'espèce dès la naissance, tandis que le réflexe conditionnel est individuel, acquis et dépend de l'histoire propre de l'organisme."
        },
        {
          id: "tle_d_svt_c04_p1_q07",
          type: 'mcq',
          prompt: "On mesure le débit salivaire chez un chien au cours de 4 situations : (A) silence = 0 goutte ; (B) lumière bleue = 0 goutte ; (C) viande = 16 gouttes ; (D) lumière bleue suivie immédiatement de viande = 16 gouttes. Que représentent la situation (B) et la situation (C) ?",
          options: [
            "(B) est le stimulus inconditionnel et (C) est le stimulus conditionnel.",
            "(B) montre l'action d'un stimulus neutre et (C) montre la réponse à un stimulus absolu.",
            "(B) représente un réflexe conditionnel installé et (C) un réflexe d'orientation.",
            "(B) et (C) correspondent tous les deux à des stimuli neutres inefficaces."
          ],
          correctAnswerIndex: 1,
          explanation: "La lumière bleue ne produisant aucune goutte de salive est un stimulus neutre pour la salivation. La viande déclenchant immédiatement 16 gouttes de salive est le stimulus absolu (inconditionnel)."
        },
        {
          id: "tle_d_svt_c04_p1_q08",
          type: 'mcq',
          prompt: "Pourquoi les activités motrices humaines hautement coordonnées telles que l'écriture, la conduite automobile ou la natation relèvent-elles initialement de réflexes conditionnels et d'automatismes acquis ?",
          options: [
            "Parce qu'elles sont codées dans l'ADN humain et s'expriment spontanément sans maître ni entraînement.",
            "Parce qu'elles s'élaborent par apprentissage, répétition et renforcement sous le contrôle du système nerveux central.",
            "Parce qu'elles ne font intervenir aucun centre nerveux supérieur ni aucune structure sensorielle.",
            "Parce qu'elles disparaissent dès que la personne s'endort pour ne plus jamais réapparaître."
          ],
          correctAnswerIndex: 1,
          explanation: "L'écriture, la nage ou la conduite ne sont pas innées ; elles nécessitent un guidage initial, une coordination sensorimotrice corticale, puis une automatisation progressive grâce à la répétition de stimuli et de rétroactions (renforcements)."
        }
      ]
    },
    {
      id: "pt2_mecanisme_arc_reflexe_liaison_intercorticale",
      order: 2,
      title: "Mécanisme neurophysiologique et trajet de l'influx : la nouvelle liaison intercorticale",
      summary: "Structures nerveuses intervenant dans le réflexe conditionnel salivaire, comparaison avec l'arc réflexe inné bulbaire, et mise en évidence de la nouvelle liaison synaptique intercorticale entre l'aire réceptrice primaire et l'aire gustative corticale.",
      conceptExplanation: "La compréhension du réflexe conditionnel repose sur l'analyse comparative des circuits anatomiques et fonctionnels empruntés par le message nerveux lors du réflexe inné et lors du réflexe acquis.\n\n1. Circuit neuroanatomique du réflexe inné salivaire (voie bulbaire sous-corticale) :\nLorsque de la nourriture est introduite dans la gueule d'un animal :\n- Récepteur sensoriel : les bourgeons du goût situés sur les papilles linguales sont stimulés chimiquement par les molécules sapides de l'aliment.\n- Voie sensitive afférente : l'influx nerveux sensitif est conduit par les fibres gustatives des nerfs crâniens (nerf lingual, rameau de la corde du tympan du nerf facial VII, et nerf glossopharyngien IX).\n- Centre nerveux réflexe : le message parvient au centre salivaire situé dans le tronc cérébral (plus précisément dans le bulbe rachidien).\n- Voie motrice efférente : le centre bulbaire émet un influx moteur sécrétoire qui emprunte les fibres nerveuses parasympathiques des nerfs crâniens (notamment le nerf tympanico-lingual et les fibres du nerf glossopharyngien reliant le ganglion otique).\n- Organes effecteurs : les glandes salivaires (parotides, sous-maxillaires et sublinguales) sécrètent immédiatement de la salive par exocytose.\nParallèlement, une collatérale sensitive ascendante monte vers le cortex cérébral au niveau de l'aire gustative primaire (permettant la perception consciente du goût).\n\n2. Événements neurobiologiques lors du conditionnement (mise en place de la nouvelle liaison) :\nLors de la répétition coordonnée [Son de métronome + Viande] :\n- Le son stimule les récepteurs auditifs (cellules ciliées de l'organe de Corti de la cochlée dans l'oreille interne).\n- L'influx nerveux sensitif acoustique emprunte le nerf auditif (nerf cochléaire VIII) jusqu'à l'aire auditive primaire située dans le lobe temporal du cortex cérébral.\n- La viande stimule les récepteurs gustatifs de la langue, qui envoient un influx nerveux vers le centre salivaire bulbaire (déclenchant la salivation innée) et simultanément vers l'aire gustative primaire située dans le cortex cérébral (lobe pariétal / insula).\n- Conséquence capitale : l'activation concomitante et répétée de l'aire auditive corticale et de l'aire gustative corticale induit la création et la stabilisation d'une chaîne synaptique fonctionnelle reliant ces deux aires cérébrales. C'est l'établissement de la NOUVELLE LIAISON NERVEUSE INTERCORTICALE (phénomène de plasticité synaptique et potentialisation à long terme).\n\n3. Trajet de l'influx nerveux lors du réflexe conditionnel de salivation :\nUne fois le réflexe installé, lorsque le son du métronome retentit SEUL :\n1. Récepteur sensoriel : oreille interne (cellules ciliées de la cochlée).\n2. Voie afférente : nerf auditif (conduction centripète de l'influx sensoriel).\n3. Premier centre cortical : aire auditive du cortex cérébral temporal.\n4. Voie d'association : NOUVELLE LIAISON NERVEUSE INTERCORTICALE reliant l'aire auditive à l'aire gustative du cortex cérébral.\n5. Deuxième centre cortical : aire gustative du cortex cérébral, activée indirectement par la liaison intercorticale.\n6. Voie descendante : fibres cortico-bulbaires reliant l'aire gustative corticale au centre salivaire bulbaire.\n7. Centre sous-cortical : centre salivaire du bulbe rachidien.\n8. Voie motrice efférente : fibres nerveuses sécrétrices motrices (parasympathiques).\n9. Effecteurs : glandes salivaires.\n10. Réponse : salivation réflexe acquise.",
      keyRule: "Le réflexe inné salivaire est sous-cortical (centre bulbaire direct). Le réflexe conditionnel salivaire exige obligatoirement le cortex cérébral et l'établissement d'une nouvelle liaison nerveuse intercorticale entre l'aire réceptrice du stimulus conditionnel et l'aire corticale du stimulus absolu.",
      formulas: [
        {
          name: "Trajet complet du réflexe conditionnel salivaire acoustique",
          formula: "\\text{Stimulus sonore} \\to \\text{Oreille interne} \\xrightarrow{\\text{Nerf auditif}} \\text{Aire auditive corticale} \\xrightarrow{\\text{Liaison intercorticale}} \\text{Aire gustative} \\to \\text{Bulbe rachidien} \\xrightarrow{\\text{Fibres motrices}} \\text{Glandes salivaires} \\to \\text{Salive}",
          note: "L'ablation du cortex cérébral abolit immédiatement et définitivement la liaison intercorticale et le réflexe conditionnel."
        }
      ],
      workedExample: {
        title: "Classification anatomique des structures intervenant dans le réflexe salivaire conditionnel",
        statement: "On dispose de la liste suivante d'éléments anatomiques : (a) Cellules ciliées de l'oreille interne ; (b) Centre salivaire du bulbe rachidien ; (c) Nouvelle liaison intercorticale ; (d) Aire auditive corticale ; (e) Nerf auditif ; (f) Fibres sécrétrices motrices ; (g) Glandes parotides ; (h) Aire gustative corticale. Classer ces éléments selon les 4 catégories : Récepteur, Voies et structures nerveuses, Centres nerveux, Effecteur.",
        methodSteps: [
          "Étape 1 : Identifier le récepteur sensoriel. Les cellules ciliées de la cochlée captent l'onde sonore -> Récepteur = (a).",
          "Étape 2 : Identifier les centres nerveux. Les structures cérébrales et bulbaires traitant et relayant le message sont : l'aire auditive corticale (d), l'aire gustative corticale (h) et le centre salivaire du bulbe rachidien (b) -> Centres nerveux = (b, d, h).",
          "Étape 3 : Identifier les structures nerveuses de liaison et de conduction. Le nerf auditif sensitif (e), la nouvelle liaison intercorticale (c) et les fibres nerveuses motrices efférentes (f) -> Structures de transmission = (c, e, f).",
          "Étape 4 : Identifier l'effecteur. La glande parotide exécute la réponse sécrétoire -> Effecteur = (g)."
        ],
        conclusion: "Récepteur : (a) ; Centres nerveux : (b, d, h) ; Structures de transmission : (c, e, f) ; Effecteur : (g)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison des trajets nerveux : Réflexe Inné vs Réflexe Conditionnel",
        tableData: {
          headers: ["Caractéristique", "Arc réflexe inné (salivation à la viande)", "Arc réflexe conditionnel (salivation au son)"],
          rows: [
            ["Point de départ sensoriel", "Bourgeons gustatifs de la langue", "Cellules ciliées de l'oreille interne (cochlée)"],
            ["Voie sensitive afférente", "Nerf lingual et glossopharyngien", "Nerf auditif (cochléaire)"],
            ["Rôle du cortex cérébral", "Facultatif pour la réponse motrice (collatérale consciente)", "Indispensable : héberge la nouvelle liaison nerveuse intercorticale"],
            ["Liaison neuronale clé", "Synapses préprogrammées dans le bulbe rachidien", "Nouvelle chaîne synaptique intercorticale (aire auditive -> aire gustative)"],
            ["Centre moteur immédiat", "Centre salivaire bulbaire (bulbe rachidien)", "Centre salivaire bulbaire activé par voie cortico-bulbaire"],
            ["Voie efférente et effecteur", "Fibres sécrétrices motrices -> glandes salivaires", "Fibres sécrétrices motrices -> glandes salivaires"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c04_p2_q01",
          type: 'mcq',
          prompt: "Quelle est la structure nerveuse absolument indispensable à l'établissement d'un réflexe conditionnel, dont l'absence n'empêche pourtant pas le réflexe inné de salivation ?",
          options: [
            "La moelle épinière lombaire.",
            "Le cortex cérébral (hémisphères cérébraux).",
            "La glande surrénale.",
            "Le cervelet vestibulaire."
          ],
          correctAnswerIndex: 1,
          explanation: "Le réflexe inné salivaire est sous-cortical (centre dans le bulbe rachidien) et persiste chez un animal décortiqué. En revanche, le réflexe conditionnel nécessite impérativement le cortex cérébral pour former la nouvelle liaison intercorticale."
        },
        {
          id: "tle_d_svt_c04_p2_q02",
          type: 'mcq',
          prompt: "Lorsqu'un chien conditionné salive à l'écoute d'un métronome, quel cheminement emprunte l'influx nerveux entre l'aire auditive et le bulbe rachidien ?",
          options: [
            "Aire auditive -> Nerf optique -> Rétine -> Glandes salivaires directes.",
            "Aire auditive -> Nouvelle liaison nerveuse intercorticale -> Aire gustative corticale -> Centre salivaire bulbaire.",
            "Aire auditive -> Cervelet -> Moelle sacrée -> Ganglion sympathique sans passer par le bulbe.",
            "Aire auditive -> Tympan -> Récepteurs linguaux -> Corde du tympan."
          ],
          correctAnswerIndex: 1,
          explanation: "L'influx né dans l'aire auditive corticale franchit la nouvelle liaison intercorticale vers l'aire gustative, qui transmet ensuite l'excitation au centre salivaire bulbaire commandant la sécrétion."
        },
        {
          id: "tle_d_svt_c04_p2_q03",
          type: 'mcq',
          prompt: "On sectionne les deux hémisphères cérébraux d'un chien adulte préalablement conditionné à saliver au tintement d'une cloche. Que constate-t-on lorsqu'on fait tinter la cloche, puis lorsqu'on lui met de la viande dans la gueule ?",
          options: [
            "Il salive à la cloche, mais ne salive plus à la viande.",
            "Il ne salive plus à la cloche (réflexe conditionnel aboli), mais salive parfaitement à la viande (réflexe inné conservé).",
            "Il ne salive plus du tout ni à la cloche, ni à la viande car les glandes salivaires sont paralysées.",
            "Il continue de saliver abondamment dans les deux cas sans aucune modification."
          ],
          correctAnswerIndex: 1,
          explanation: "La destruction des hémisphères cérébraux détruit le siège de la liaison intercorticale (disparition du réflexe conditionnel), mais laisse intact le bulbe rachidien où réside le centre du réflexe inné salivaire."
        },
        {
          id: "tle_d_svt_c04_p2_q04",
          type: 'mcq',
          prompt: "Sur le plan cellulaire et synaptique, en quoi consiste la « nouvelle liaison nerveuse » découverte par Pavlov ?",
          options: [
            "En la naissance spontanée de nouveaux axones traversant instantanément le crâne en quelques secondes.",
            "En la facilitation et la consolidation synaptique de circuits neuronaux corticaux préexistants mais silencieux (plasticité synaptique).",
            "En la fusion physique des membranes plasmiques de tous les neurones du bulbe rachidien.",
            "En la transformation de cellules gliales en neurones sensitifs myélinisés de conduction saltatoire."
          ],
          correctAnswerIndex: 1,
          explanation: "La nouvelle liaison nerveuse ne correspond pas à la création magique de nouveaux nerfs macroscopiques, mais à l'activation et au renforcement durable de voies synaptiques interneuronales (plasticité synaptique corticale)."
        },
        {
          id: "tle_d_svt_c04_p2_q05",
          type: 'mcq',
          prompt: "Dans le cas d'un réflexe conditionnel salivaire où le stimulus conditionnel est un éclair de lumière blanche, quelles sont les deux aires corticales reliées par la nouvelle liaison nerveuse ?",
          options: [
            "L'aire auditive et l'aire motrice de la jambe.",
            "L'aire visuelle (occipitale) et l'aire gustative.",
            "L'aire olfactive et l'aire motrice du langage (Broca).",
            "L'aire somesthésique tactile et l'aire visuelle."
          ],
          correctAnswerIndex: 1,
          explanation: "Le stimulus conditionnel étant visuel, l'influx atteint d'abord l'aire visuelle primaire corticale. La nouvelle liaison nerveuse relie donc cette aire visuelle à l'aire gustative corticale associée à la salivation."
        },
        {
          id: "tle_d_svt_c04_p2_q06",
          type: 'mcq',
          prompt: "Si l'on anesthésie localement la muqueuse de la langue d'un chien avant de lui faire entendre le son du métronome auquel il est parfaitement conditionné, que se passe-t-il ?",
          options: [
            "Le chien ne salive pas car les récepteurs de la langue sont nécessaires à la perception du son.",
            "Le chien salive normalement car le stimulus conditionnel emprunte l'oreille et la liaison intercorticale sans dépendre des récepteurs de la langue.",
            "Le chien salive du sang car la liaison intercorticale est hémorragique.",
            "Le son du métronome est instantanément effacé de la mémoire du chien."
          ],
          correctAnswerIndex: 1,
          explanation: "Une fois le réflexe conditionnel acquis, le déclencheur est le son capté par l'oreille. L'influx passe par l'aire auditive, la liaison intercorticale et le bulbe sans avoir besoin d'activer les récepteurs gustatifs de la langue."
        },
        {
          id: "tle_d_svt_c04_p2_q07",
          type: 'mcq',
          prompt: "Quel rôle joue le bulbe rachidien dans l'expression du réflexe conditionnel salivaire ?",
          options: [
            "Il est le siège unique de la mémoire associative du réflexe.",
            "Il sert de centre réflexe effecteur sous-cortical recevant l'ordre descendant du cortex pour commander les glandes salivaires.",
            "Il analyse la hauteur fréquentielle et le timbre du son du métronome.",
            "Il bloque systématiquement les influx nerveux pour éviter l'épuisement des glandes salivaires."
          ],
          correctAnswerIndex: 1,
          explanation: "Le bulbe rachidien héberge le noyau salivaire (centre effecteur) qui reçoit les commandes descendantes de l'aire gustative corticale pour activer les fibres sécrétrices motrices destinées aux glandes salivaires."
        },
        {
          id: "tle_d_svt_c04_p2_q08",
          type: 'mcq',
          prompt: "Chez un animal dont on sectionne les nerfs sensitifs gustatifs (nerfs lingual et glossopharyngien), peut-on installer un NOUVEAU réflexe conditionnel salivaire associant un son et de la viande ?",
          options: [
            "Oui, car la vue de la viande suffit toujours à créer le réflexe sans gustation.",
            "Non, car l'absence d'influx gustatif empêche la stimulation du centre salivaire et de l'aire gustative par le stimulus absolu.",
            "Oui, car le son du métronome remplace directement les papilles gustatives de la langue.",
            "Oui, car la moelle épinière prend en charge la gustation en cas de section nerveuse."
          ],
          correctAnswerIndex: 1,
          explanation: "Pour créer le réflexe, le stimulus absolu doit obligatoirement parvenir au système nerveux afin d'activer l'aire gustative et le centre salivaire. Si les voies gustatives afférentes sont sectionnées, l'association est impossible."
        }
      ]
    },
    {
      id: "pt3_conditions_indispensables_mise_en_place",
      order: 3,
      title: "Conditions physiologiques et méthodologiques indispensables au conditionnement",
      summary: "Analyse des cinq exigences strictes requises pour établir un réflexe conditionnel : intégrité des hémisphères cérébraux, intégrité des organes effecteurs et sensoriels, état de vigilance et absence de perturbations, ordre chronologique strict (antériorité du SN), et répétition avec renforcement.",
      conceptExplanation: "La mise en place d'un réflexe conditionnel n'est pas un phénomène automatique ou aléatoire ; elle obéit à des lois neurophysiologiques et des protocoles méthodologiques rigoureux.\n\n1. L'intégrité anatomique et fonctionnelle des hémisphères cérébraux :\nLe cortex cérébral est le substrat biologique exclusif de la plasticité synaptique assurant la liaison entre les différentes aires sensorielles et motrices.\n- Si le cortex cérébral est altéré par une lésion bilatérale, une ablation expérimentale (décortication) ou une anesthésie générale, tout apprentissage conditionnel devient rigoureusement impossible.\n- Les animaux possédant un cortex cérébral plus développé (ex. primates, Homme) présentent une rapidité et une finesse de conditionnement considérablement supérieures aux animaux à encéphale lissencéphale.\n\n2. L'intégrité des organes des sens, des voies nerveuses et des effecteurs :\n- L'organe sensoriel récepteur du stimulus neutre (l'œil pour la lumière, l'oreille pour le son, la peau pour le contact) doit être parfaitement fonctionnel.\n- Les voies afférentes (nerfs sensoriels) et efférentes (nerfs moteurs ou sécréteurs) doivent conduire normalement les potentiels d'action.\n- Les glandes ou les muscles effecteurs doivent être réactifs et vascularisés.\n\n3. L'état physiologique de vigilance et la disponibilité de l'animal :\n- Vigilance active : l'animal doit être éveillé et attentif. Un animal somnolent, comateux ou sous sédatifs ne peut acquérir aucun conditionnement.\n- Motivation biologique : dans le conditionnement salivaire, le chien doit être à jeun depuis quelques heures. Un animal complètement repu n'accorde aucun intérêt à la nourriture (le stimulus absolu perd son efficacité motivationnelle).\n- Isolement environnemental (absence de stress et d'inconfort) : toute stimulation externe imprévue (claquement de porte, présence d'une personne étrangère, douleur liée à un harnais trop serré, odeur insolite) déclenche chez l'animal une réaction d'orientation ou une peur qui bloque l'apprentissage par inhibition externe.\n\n4. L'ordre chronologique strict de présentation des stimuli (règle d'antériorité) :\nC'est la règle d'or découverte par Pavlov :\n- Le stimulus neutre (SN) doit obligatoirement PRÉCÉDER de peu le stimulus inconditionnel (SI).\n- L'intervalle temporel optimal est de quelques fractions de seconde à quelques secondes (conditionnement simultané retardé ou de trace court). Le son commence, puis la viande arrive pendant que le son continue.\n- Si le stimulus absolu précède le stimulus neutre (viande d'abord, puis son après la déglutition), le conditionnement n'a JAMAIS lieu (conditionnement rétrograde inefficace), car le stimulus inconditionnel concentre toute l'activité nerveuse du cerveau et éclipse le signal neutre postérieur.\n- Si le stimulus neutre et le stimulus absolu sont présentés strictement en même temps sans décalage, le conditionnement est très faible, laborieux ou instable.\n\n5. La répétition et le renforcement périodique :\nUn réflexe conditionnel ne naît pas d'une association isolée unique (sauf cas particulier des aversions gustatives toxiques). Il nécessite la répétition séquentielle de plusieurs dizaines à plusieurs centaines d'associations [SN + SI]. Le stimulus absolu agit comme un « renforçateur » sans lequel la trace synaptique intercorticale ne peut se stabiliser.",
      keyRule: "Pour réussir un conditionnement : le cortex cérébral doit être intact, l'animal éveillé et motivé sans stress, et le stimulus neutre doit obligatoirement précéder immédiatement le stimulus absolu lors d'associations répétées.",
      formulas: [
        {
          name: "Règle temporelle du conditionnement",
          formula: "t_{\\text{SN}} < t_{\\text{SI}} \\quad \\text{avec} \\quad \\Delta t = t_{\\text{SI}} - t_{\\text{SN}} \\in [0,5\\text{ s} \\;; 5\\text{ s}]",
          note: "Si Delta t < 0 (rétrograde), aucun réflexe conditionnel ne peut se former."
        }
      ],
      workedExample: {
        title: "Analyse des causes d'échec d'un protocole de conditionnement",
        statement: "Un étudiant tente d'entraîner des lapins à fermer la paupière à la sonnerie d'un buzzer. Lot 1 : les lapins reçoivent d'abord un jet d'air sur la cornée (provoquant le clignement), puis le buzzer retentit 2 secondes après le jet d'air (100 essais). Résultat : aucun lapin ne cligne au buzzer seul. Lot 2 : les lapins sont placés dans une pièce très bruyante où des ouvriers effectuent des travaux. Résultat : aucun lapin n'apprend. Expliquer l'échec pour chaque lot.",
        methodSteps: [
          "Étape 1 : Analyser le lot 1. Le jet d'air sur la cornée est le stimulus absolu (SI) et le buzzer est le stimulus neutre (SN). Dans ce protocole, le SI précède le SN (conditionnement rétrograde). Le système nerveux ne peut pas anticiper un événement par un signal qui lui succède.",
          "Étape 2 : Analyser le lot 2. La présence de bruits imprévus de marteau et de présence humaine crée des stimuli parasites intenses et un état de stress chez le lapin. Il se produit une inhibition externe permanente bloquant l'attention et la plasticité cérébrale.",
          "Étape 3 : Formuler les corrections méthodologiques. Pour réussir, il faut inverser la chronologie du lot 1 (faire retentir le buzzer 1 seconde AVANT le jet d'air) et placer les lapins dans une cage insonorisée calme comme celle de Pavlov."
        ],
        conclusion: "Échec du lot 1 dû à la violation de la règle d'antériorité du SN. Échec du lot 2 dû au stress et à l'inhibition externe par absence d'isolation sonore."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Tableau récapitulatif des 5 conditions nécessaires au conditionnement",
        tableData: {
          headers: ["Condition indispensable", "Raison neurobiologique", "Conséquence en cas de non-respect"],
          rows: [
            ["1. Intégrité des hémisphères cérébraux", "Siège de la plasticité et de la nouvelle liaison synaptique", "Impossibilité totale d'apprendre (animal décortiqué = zéro réflexe acquis)"],
            ["2. Intégrité des récepteurs et effecteurs", "Transmission physique des signaux d'entrée et de sortie", "Déficit sensitif ou moteur empêchant la perception ou l'action"],
            ["3. Vigilance et motivation (ex. faim)", "Mobilisation des circuits attentionnels et dopaminergiques", "Inattention ou refus si l'animal est repu ou endormi"],
            ["4. Absence de stimuli parasites (calme)", "Évite l'inhibition externe par des signaux concurrents", "Perturbation de l'attention et stress inhibiteur"],
            ["5. Antériorité stricte du stimulus neutre", "Le signal doit annoncer l'événement pour créer l'anticipation", "Échec complet si le stimulus absolu précède le stimulus neutre"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c04_p3_q01",
          type: 'mcq',
          prompt: "Pourquoi est-il rigoureusement impossible d'établir un conditionnement salivaire si l'on donne la viande au chien AVANT de faire sonner le métronome ?",
          options: [
            "Parce que le chien a la gueule pleine et ne peut plus entendre les sons.",
            "Parce que le stimulus neutre doit obligatoirement précéder le stimulus absolu pour jouer son rôle de signal annonciateur.",
            "Parce que la viande paralyse temporairement les nerfs crâniens auditifs.",
            "Parce que l'ordre des stimuli n'a aucune importance chez les mammifères."
          ],
          correctAnswerIndex: 1,
          explanation: "Un réflexe conditionnel est une anticipation adaptative : le stimulus neutre doit précéder le stimulus absolu afin de constituer un signal d'annonce. Si le stimulus absolu arrive en premier, le son ultérieur n'a aucune valeur prédictive."
        },
        {
          id: "tle_d_svt_c04_p3_q02",
          type: 'mcq',
          prompt: "Un expérimentateur propose un morceau de viande à un chien qui vient d'ingérer un repas massif de 2 kg de viande 10 minutes auparavant. Que constate-t-on quant à l'efficacité du conditionnement ?",
          options: [
            "Le chien apprend dix fois plus vite car son cerveau est suralimenté en glucose.",
            "L'animal est totalement désintéressé par la nourriture, ce qui supprime la motivation et empêche le renforcement.",
            "Le réflexe inné se transforme immédiatement en réflexe conditionnel sans sonnerie.",
            "La salivation devient continue et permanente pendant 48 heures."
          ],
          correctAnswerIndex: 1,
          explanation: "L'état de satiété supprime la faim et la motivation de l'animal. Sans appétit, la viande ne fonctionne plus comme un renforçateur efficace, empêchant ainsi l'apprentissage associatif."
        },
        {
          id: "tle_d_svt_c04_p3_q03",
          type: 'mcq',
          prompt: "Que se produit-il si un bruit soudain et violent (explosion d'un pétard à proximité) survient pendant la séance de conditionnement d'un chien ?",
          options: [
            "Le réflexe conditionnel est instantanément gravé de manière indélébile dans le cortex.",
            "Il se produit une inhibition externe : le chien détourne son attention et la liaison en cours d'établissement est temporairement bloquée.",
            "Le chien sécrète instantanément 500 mL de salive par suractivation bulbaire.",
            "La fistule salivaire se rebouche spontanément."
          ],
          correctAnswerIndex: 1,
          explanation: "Un stimulus parasite intense et soudain déclenche un réflexe d'orientation défensif qui inhibe transitoirement les activités corticales en cours : c'est l'inhibition externe."
        },
        {
          id: "tle_d_svt_c04_p3_q04",
          type: 'mcq',
          prompt: "Quelle expérience prouve de manière irréfutable que le cortex cérébral est le centre indispensable du réflexe conditionnel ?",
          options: [
            "L'ablation du cervelet qui perturbe l'équilibre de l'animal sans toucher à la salivation.",
            "L'ablation bilatérale des hémisphères cérébraux qui supprime tous les réflexes conditionnels tout en maintenant le réflexe inné de salivation.",
            "La section des muscles de la patte postérieure qui empêche le chien de sauter.",
            "La ligature du canal de Wharton qui assèche les glandes sous-maxillaires."
          ],
          correctAnswerIndex: 1,
          explanation: "L'ablation du cortex cérébral (décortication) fait disparaître irréversiblement les réflexes conditionnels chez le chien, alors que les réflexes innés gérés par le tronc cérébral et la moelle épinière subsistent."
        },
        {
          id: "tle_d_svt_c04_p3_q05",
          type: 'mcq',
          prompt: "Quel est l'intervalle de temps (décalage temporel) généralement le plus favorable entre le déclenchement du stimulus neutre et l'administration du stimulus inconditionnel ?",
          options: [
            "Le stimulus absolu doit être donné exactement 24 heures après le stimulus neutre.",
            "Un décalage court de quelques fractions de seconde à quelques secondes (0,5 à 5 s) où le stimulus neutre précède le stimulus absolu.",
            "Le stimulus absolu doit précéder le stimulus neutre de 15 minutes.",
            "Aucun décalage n'est permis, ils doivent être appliqués à la milliseconde identique."
          ],
          correctAnswerIndex: 1,
          explanation: "Un intervalle court de quelques secondes permet au système nerveux d'associer la trace du premier stimulus avec l'arrivée du renforçateur. Un délai trop long dissocie les deux événements, tandis qu'une application strictement simultanée est moins efficace."
        },
        {
          id: "tle_d_svt_c04_p3_q06",
          type: 'mcq',
          prompt: "Pourquoi une seule et unique association son-nourriture ne suffit-elle généralement pas à créer un réflexe conditionnel solide chez le chien ?",
          options: [
            "Parce que les neurones meurent tous après une première stimulation auditive.",
            "Parce que la stabilisation de la liaison intercorticale exige la consolidation synaptique progressive par répétitions régulières.",
            "Parce que le métronome a besoin d'être remonté mécaniquement 50 fois.",
            "Parce que les glandes salivaires refusent de fonctionner au premier essai."
          ],
          correctAnswerIndex: 1,
          explanation: "La création d'une nouvelle voie nerveuse fonctionnelle repose sur la plasticité synaptique (potentialisation à long terme) qui requiert la répétition séquentielle d'influx pour modifier durablement l'efficacité des synapses intercorticales."
        },
        {
          id: "tle_d_svt_c04_p3_q07",
          type: 'mcq',
          prompt: "Si l'on utilise un son extrêmement douloureux (au-delà du seuil de tolérance auditive de 130 dB) comme stimulus neutre pour conditionner la salivation, qu'observe-t-on ?",
          options: [
            "Le conditionnement salivaire est ultra-rapide et l'animal salive 10 fois plus.",
            "L'apprentissage échoue car la douleur déclenche des réactions intenses de panique, de fuite et de stress qui inhibent la fonction salivaire.",
            "Le chien devient immédiatement sourd mais continue de saliver au son.",
            "Le son se transforme immédiatement en stimulus absolu gustatif."
          ],
          correctAnswerIndex: 1,
          explanation: "Un stimulus doit être d'intensité modérée et non traumatisante. Un son douloureux provoque un réflexe de défense et de stress intense incompatible avec la mise en place d'un réflexe salivaire."
        },
        {
          id: "tle_d_svt_c04_p3_q08",
          type: 'mcq',
          prompt: "Parmi les assertions suivantes relatives aux conditions du conditionnement, laquelle est FAUSSE ?",
          options: [
            "L'animal doit être dans un état d'éveil normal et vigilant.",
            "Le stimulus inconditionnel doit obligatoirement précéder le stimulus neutre d'au moins 30 secondes.",
            "Le cortex cérébral doit être anatomiquement et physiologiquement intègre.",
            "L'environnement d'apprentissage doit être exempt de stimulations parasites imprévues."
          ],
          correctAnswerIndex: 1,
          explanation: "La proposition fausse est que le stimulus inconditionnel doit précéder le stimulus neutre. Au contraire, c'est le stimulus neutre qui doit impérativement précéder le stimulus inconditionnel (règle d'antériorité)."
        }
      ]
    },
    {
      id: "pt4_proprietes_extinction_generalisation_discrimination",
      order: 4,
      title: "Propriétés caractéristiques : extinction, discrimination et généralisation",
      summary: "Dynamique fonctionnelle des réflexes conditionnels : nature temporaire et extinction par non-renforcement (inhibition interne), généralisation du stimulus aux signaux voisins, et discrimination (différenciation) par renforcement sélectif chez le chien et le chimpanzé.",
      conceptExplanation: "Contrairement aux réflexes innés qui sont immuables, universels et définitifs, les réflexes conditionnels se caractérisent par leur remarquable flexibilité biologique et leur réversibilité.\n\n1. Caractère temporaire et phénomène d'extinction :\nUn réflexe conditionnel n'est jamais définitivement gravé dans le système nerveux. Il doit être régulièrement entretenu et consolidé par le stimulus absolu (renforcement) pour persister.\n- Protocole d'extinction : si l'on présente au chien conditionné le stimulus conditionnel seul (ex. le son du métronome ou un éclair de lumière) sans jamais lui apporter de viande lors des essais successifs :\n  * Essai 1 à 3 : salivation abondante (ex. 15 gouttes en 30 secondes).\n  * Essais 4 à 8 : la réponse diminue progressivement (13, 11, 9, 5 gouttes).\n  * Essais 9 à 15 : la salivation devient nulle (0 goutte). L'animal n'émet plus aucune salive : c'est l'EXTINCTION du réflexe conditionnel.\n- Signification neurobiologique : l'extinction n'est pas un effacement passif ou une destruction anatomique de la liaison nerveuse, mais un processus actif d'inhibition corticale (inhibition interne). Preuve : si après plusieurs jours de repos on applique à nouveau le stimulus conditionnel, la réponse réapparaît spontanément (récupération spontanée), ou bien un réapprentissage ne demande que 2 ou 3 essais au lieu de 40.\n\n2. Phénomène de généralisation du stimulus :\nLorsqu'un animal vient d'être conditionné à un stimulus précis (ex. une lumière blanche ou un son pur de fréquence 1 000 Hz) :\n- Si on lui présente des stimuli voisins non utilisés lors du dressage (lumière bleue, verte, rouge, ou un son de 800 Hz ou 1 200 Hz), l'animal réagit en salivant avec la même intensité ou une intensité proche.\n- Exemple expérimental chez le chien : après conditionnement à une lumière blanche (10 gouttes de salive), la lumière bleue donne 10 gouttes, la lumière verte donne 10 gouttes, la lumière rouge donne 10 gouttes. Le chien généralise la réponse à toutes les lumières visibles.\n- La généralisation est un mécanisme adaptatif primitif permettant à l'animal de réagir à des signaux de l'environnement qui ne sont jamais rigoureusement identiques dans la nature.\n\n3. Phénomène de discrimination (ou différenciation fine) :\nLa discrimination est la capacité du cortex cérébral à distinguer le stimulus pertinent spécifique parmi des stimuli voisins et à inhiber la réponse pour tous les autres.\n- Cas comparatif entre espèces (expérience du chien et du chimpanzé) :\n  * Chez le chimpanzé conditionné à une lumière blanche : dès la présentation des autres lumières, le chimpanzé ne salive qu'à la lumière blanche (10 gouttes) et ne salive pas du tout (0 goutte) à la lumière bleue, verte ou rouge. Grâce à un cortex cérébral hautement développé et des zones associatives plus perfectionnées, le chimpanzé discrimine spontanément les longueurs d'onde.\n  * Chez le chien : la discrimination n'est pas spontanée mais peut s'acquérir par un apprentissage sélectif. Si l'on associe systématiquement la viande à la lumière blanche, mais qu'on ne donne JAMAIS de viande après une lumière verte ou bleue, le chien finit par saliver exclusivement à la lumière blanche et reste indifférent aux autres lumières.\n- Ce processus met en jeu une inhibition différentielle qui restreint la réponse au seul stimulus biologiquement pertinent.",
      keyRule: "Un réflexe conditionnel est temporaire : il subit l'extinction en l'absence de renforcement. Il présente d'abord une phase de généralisation à des stimuli voisins, avant d'aboutir à la discrimination (différenciation) par renforcement sélectif.",
      formulas: [
        {
          name: "Cinétique d'extinction par non-renforcement",
          formula: "N_{\\text{essais sans SI}} \\uparrow \\implies \\text{Débit salivaire } Q_{\\text{salive}} \\to 0 \\quad (\\text{Inhibition corticale interne})",
          note: "Le réflexe s'éteint mais n'est pas détruit : phénomène de récupération spontanée après repos."
        }
      ],
      workedExample: {
        title: "Interprétation de données expérimentales de discrimination et d'extinction",
        statement: "On dispose d'un tableau consignant le nombre de gouttes de salive recueillies par période de 30 s chez un chien conditionné : - Essais 1 à 3 (Lumière blanche seule) : 0 goutte. - Essais 4 à 5 (Viande seule) : 15 gouttes. - Essais 6 à 12 (Lumière blanche + Viande) : 15 gouttes. - Essais 13 à 15 (Lumière blanche seule) : 13, 11, 9 gouttes. - Essais 18 à 20 (Lumière blanche seule) : 0 goutte. 1. Identifier la phase représentée par les essais 13 à 20. 2. Expliquer l'évolution observée.",
        methodSteps: [
          "Étape 1 : Analyser les essais 13 à 20. Le stimulus conditionnel (lumière blanche) est présenté de façon répétée sans jamais être suivi par le stimulus absolu (viande).",
          "Étape 2 : Décrire l'évolution du débit salivaire. Le nombre de gouttes diminue progressivement de 13 gouttes jusqu'à 0 goutte au 18e essai.",
          "Étape 3 : Nommer et expliquer le mécanisme neurobiologique. Cette disparition progressive de la réponse réflexe par absence de renforcement constitue l'extinction du réflexe conditionnel. Elle s'explique par le développement d'une inhibition interne au niveau du cortex cérébral."
        ],
        conclusion: "Essais 13 à 20 = Phase d'extinction progressive du réflexe conditionnel par absence de renforcement alimentaire."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Tableau comparatif de la réponse salivaire (Généralisation vs Discrimination)",
        tableData: {
          headers: ["Espèce testée", "Lumière blanche (stimulus de dressage)", "Lumière bleue", "Lumière verte", "Lumière rouge", "Comportement neurobiologique démontré"],
          rows: [
            ["Chien (phase initiale)", "10 gouttes", "10 gouttes", "10 gouttes", "10 gouttes", "Généralisation du stimulus (réponse à toute lumière visible)"],
            ["Chimpanzé", "10 gouttes", "0 goutte", "0 goutte", "0 goutte", "Discrimination immédiate et spontanée (cortex supérieur très développé)"],
            ["Chien (après dressage sélectif)", "10 gouttes", "0 goutte", "0 goutte", "0 goutte", "Différenciation acquise par renforcement sélectif exclusif"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c04_p4_q01",
          type: 'mcq',
          prompt: "Que se passe-t-il si l'on applique le stimulus conditionnel (son du métronome) 30 fois de suite à un chien conditionné sans jamais lui donner le moindre morceau de viande ?",
          options: [
            "Le débit salivaire augmente de façon exponentielle jusqu'à l'hémorragie.",
            "La réponse salivaire diminue progressivement jusqu'à disparaître totalement : c'est l'extinction.",
            "Le chien se transforme spontanément en animal carnivore sauvage agressif.",
            "Le stimulus conditionnel se transforme définitivement en stimulus inconditionnel."
          ],
          correctAnswerIndex: 1,
          explanation: "La répétition du stimulus conditionnel sans renforcement par le stimulus absolu entraîne l'extinction progressive du réflexe conditionnel sous l'effet d'une inhibition corticale active."
        },
        {
          id: "tle_d_svt_c04_p4_q02",
          type: 'mcq',
          prompt: "Un chien conditionné à saliver au son d'une fréquence de 1 000 Hz salive également la première fois qu'on lui fait écouter un son de 900 Hz ou de 1 100 Hz. Quel est ce phénomène ?",
          options: [
            "L'extinction rétrograde.",
            "La généralisation du stimulus.",
            "La surdité corticale paradoxale.",
            "La dégénérescence du nerf auditif."
          ],
          correctAnswerIndex: 1,
          explanation: "La généralisation est la tendance du système nerveux à déclencher la réponse conditionnelle à des stimuli proches ou similaires au stimulus conditionnel d'origine."
        },
        {
          id: "tle_d_svt_c04_p4_q03",
          type: 'mcq',
          prompt: "Dans l'expérience officielle comparant le chien et le chimpanzé conditionnés à un éclair de lumière blanche, pourquoi le chimpanzé salive-t-il à la lumière blanche (10 gouttes) mais ne salive pas du tout aux lumières bleue, verte et rouge (0 goutte) dès les premiers tests ?",
          options: [
            "Parce que le chimpanzé est daltonien et ne voit pas les couleurs bleue, verte et rouge.",
            "Parce que le chimpanzé possède un cortex cérébral plus complexe et perfectionné permettant une discrimination spontanée des stimuli.",
            "Parce que le chimpanzé n'aime pas la viande contrairement au chien.",
            "Parce que le chimpanzé a été anesthésié au niveau des yeux."
          ],
          correctAnswerIndex: 1,
          explanation: "Le chimpanzé possède des zones corticales associatives hautement développées qui lui permettent une discrimination fine immédiate du stimulus de départ (lumière blanche), inhibant spontanément la réponse pour les autres couleurs."
        },
        {
          id: "tle_d_svt_c04_p4_q04",
          type: 'mcq',
          prompt: "Comment un expérimentateur peut-il amener un chien à discriminer parfaitement deux sons proches (son A de 1 000 Hz et son B de 1 050 Hz) ?",
          options: [
            "En lui coupant un des deux nerfs auditifs.",
            "En associant toujours la viande au son A, et en ne donnant jamais de viande après le son B (renforcement sélectif).",
            "En augmentant le volume sonore du son B jusqu'à faire éclater le tympan.",
            "En injectant de l'acétylcholine directement dans les glandes salivaires."
          ],
          correctAnswerIndex: 1,
          explanation: "La discrimination s'obtient par renforcement différentiel : le stimulus à sélectionner est systématiquement renforcé par le stimulus absolu, tandis que le stimulus voisin n'est jamais renforcé, provoquant son extinction sélective."
        },
        {
          id: "tle_d_svt_c04_p4_q05",
          type: 'mcq',
          prompt: "Un réflexe conditionnel éteint (qui ne se manifeste plus) réapparaît souvent spontanément après quelques jours de repos complet sans aucun nouvel apprentissage. Cette « récupération spontanée » prouve que :",
          options: [
            "Le réflexe inné avait été détruit par l'extinction.",
            "L'extinction n'est pas une destruction anatomique de la liaison nerveuse, mais une inhibition corticale réversible.",
            "Le chien a mangé en cachette pendant la nuit.",
            "La salive était restée bloquée dans le tube gradué par capillarité."
          ],
          correctAnswerIndex: 1,
          explanation: "La récupération spontanée démontre que les circuits synaptiques de la liaison intercorticale existent toujours, mais qu'ils étaient temporairement masqués par une inhibition interne active développée par le cortex."
        },
        {
          id: "tle_d_svt_c04_p4_q06",
          type: 'mcq',
          prompt: "Laquelle des caractéristiques suivantes s'applique EXCLUSIVEMENT aux réflexes conditionnels et NON aux réflexes innés ?",
          options: [
            "Ils sont transmis héréditairement aux descendants.",
            "Ils sont temporaires et peuvent s'éteindre s'ils ne sont pas entretenus par un renforcement régulier.",
            "Ils sont rigoureusement identiques chez tous les animaux d'une même espèce.",
            "Ils sont totalement indépendants du cerveau et des hémisphères cérébraux."
          ],
          correctAnswerIndex: 1,
          explanation: "La temporalité et l'extinction sont des propriétés exclusives des réflexes conditionnels. Les réflexes innés, eux, sont permanents, immuables et durent toute la vie sans nécessiter d'entretien."
        },
        {
          id: "tle_d_svt_c04_p4_q07",
          type: 'mcq',
          prompt: "On observe le tableau d'essais d'un animal : Essai 10 : 15 gouttes ; Essai 11 : 14 gouttes ; Essai 12 : 11 gouttes ; Essai 13 : 8 gouttes ; Essai 14 : 3 gouttes ; Essai 15 : 0 goutte. Quel paramètre expérimental l'expérimentateur a-t-il modifié à partir de l'essai 10 ?",
          options: [
            "Il a augmenté la dose de viande de 500 grammes à chaque essai.",
            "Il a supprimé le stimulus absolu (viande), présentant le stimulus conditionnel seul sans renforcement.",
            "Il a augmenté l'éclairage de la pièce d'expérimentation.",
            "Il a sectionné les fibres motrices des glandes salivaires."
          ],
          correctAnswerIndex: 1,
          explanation: "La diminution graduelle et continue de la réponse salivaire jusqu'à zéro est la signature classique de la suppression du renforçateur (stimulus absolu), conduisant à l'extinction du réflexe."
        },
        {
          id: "tle_d_svt_c04_p4_q08",
          type: 'mcq',
          prompt: "Quel avantage adaptatif majeur la capacité d'extinction et de discrimination confère-t-elle à un être vivant dans son milieu naturel ?",
          options: [
            "Permettre à l'animal d'économiser son énergie en cessant de réagir à des signaux devenus trompeurs ou inutiles pour sa survie.",
            "Rendre tous ses mouvements totalement incontrôlables et aléatoires.",
            "Supprimer définitivement la faim et la soif.",
            "Empêcher les organes des sens de capter la lumière du soleil."
          ],
          correctAnswerIndex: 0,
          explanation: "L'extinction permet une formidable adaptabilité : si un signal de l'environnement n'annonce plus de nourriture ou de danger, l'animal cesse de dépenser inutilement de l'énergie et adapte son comportement aux nouvelles réalités."
        }
      ]
    },
    {
      id: "pt5_conditionnement_moteur_operant_importance_humaine",
      order: 5,
      title: "Réflexes conditionnels moteurs, conditionnement d'évitement et applications humaines",
      summary: "Expérimentation du conditionnement moteur chez la souris (choc électrique et flexion de la patte), distinction entre conditionnement répondant (pavlovien) et conditionnement opérant/moteur, et rôle capital dans les apprentissages scolaires, professionnels et quotidiens chez l'Homme.",
      conceptExplanation: "Les réflexes conditionnels ne se limitent pas aux fonctions sécrétoires viscérales comme la salivation ; ils s'étendent à la motricité somatique sous forme de réflexes conditionnels moteurs et d'évitement.\n\n1. Mise en évidence expérimentale du réflexe conditionnel moteur (expérience de la souris) :\nUn protocole officiel étudie le réflexe d'évitement chez la souris :\n- Dispositif : une souris est placée dans une enceinte munie d'une lampe électrique et d'un brassard serré autour d'une patte postérieure relié à un stimulateur électrique.\n- Essai 1 (Test du stimulus lumineux seul) : on allume la lampe. La souris tourne ses yeux vers la lampe (réflexe d'orientation), mais aucune flexion de la patte n'est constatée. La lumière est un stimulus neutre pour la flexion motrice.\n- Essais 2 à 4 (Test de la décharge électrique) : on envoie une faible décharge électrique indolore mais désagréable sur la patte postérieure. La souris fléchit immédiatement et vigoureusement la patte stimulée. C'est un réflexe inné de retrait (réflexe médullaire de défense), et la décharge électrique constitue le stimulus absolu (inconditionnel).\n- Essais 5 à 9 (Association répétée) : on allume la lampe, puis une seconde plus tard, on envoie le courant électrique. La souris fléchit la patte. Cette association coordonnée est répétée plusieurs fois (phase d'apprentissage).\n- Essais 10 à 13 (Test du stimulus conditionnel moteur) : on allume la lampe SEULE, sans aucun choc électrique. Constat remarquable : la souris fléchit aussitôt la patte postérieure à la seule vue de la lumière ! La lumière est devenue un stimulus conditionnel et la flexion de la patte est un réflexe conditionnel moteur d'évitement.\n- Essais 14 et 15 (Extinction) : la lumière allumée seule de manière répétée cesse progressivement de provoquer la flexion de la patte (extinction).\n\n2. Trajet de l'influx nerveux lors du réflexe moteur conditionnel :\n1. Récepteur sensoriel : les photorécepteurs de la rétine de l'œil.\n2. Voie afférente : le nerf optique.\n3. Centre cortical récepteur : l'aire visuelle du cortex cérébral (lobe occipital).\n4. Voie d'association : la NOUVELLE LIAISON NERVEUSE INTERCORTICALE reliant l'aire visuelle à l'aire motrice corticale.\n5. Centre cortical moteur : l'aire motrice corticale (lobe frontal / circonvolution frontale ascendante).\n6. Voie motrice descendante : faisceau pyramidal traversant le tronc cérébral et descendant dans la moelle épinière.\n7. Relais médullaire : motoneurones de la corne antérieure de la moelle épinière.\n8. Voie motrice efférente : nerf moteur sciatique.\n9. Effecteurs : muscles fléchisseurs de la patte postérieure.\n10. Réponse : flexion défensive de la patte.\n\n3. Les types de conditionnement :\n- Conditionnement classique / répondant (type pavlovien) : le sujet est passif, la réponse est déclenchée par le stimulus (souvent végétative/sécrétoire ou motrice réflexe).\n- Conditionnement actif / instrumental / opérant (type skinnerien) : le sujet agit activement sur son environnement (ex. appuyer sur un levier pour obtenir de la nourriture ou pour couper un courant électrique). La conséquence de l'action renforce le comportement.\n\n4. Importance capitale chez l'Homme et applications pratiques :\nChez l'être humain, la quasi-totalité des savoir-faire complexes et des adaptations comportementales repose sur des réflexes conditionnels et des chaînes d'automatismes acquis :\n- Apprentissages moteurs scolaires et fondamentaux :\n  * L'écriture : au début de la scolarité, l'enfant doit concentrer toute son attention corticale consciente sur le tracé de chaque lettre. Avec les années d'entraînement (répétitions et corrections par le maître), le geste graphique devient un réflexe conditionnel moteur automatisé libérant l'esprit pour la réflexion conceptuelle.\n  * La lecture : l'association visuelle des graphèmes (lettres) aux phonèmes (sons) et au sens devient instantanée et réflexe.\n- Conduite d'un véhicule et motricité sportive :\n  * Conduite automobile : le freinage d'urgence à la vue d'un feu rouge ou d'un piéton traversant inopinément devient un réflexe conditionnel moteur extrêmement rapide (temps de réaction raccourci de plusieurs dixièmes de seconde).\n  * Pratique musicale ou sportive : natation, vélo, piano, football, où des coordinations motrices très fines sont exécutées sans délibération consciente.\n- Éducation sociale et réflexes de sécurité :\n  * Répondre à son prénom, dire bonjour, s'écarter au son d'un klaxon d'avertissement, respecter les signaux lumineux de danger sont des réflexes acquis indispensables à la vie en société et à la préservation de la vie.",
      keyRule: "Le réflexe conditionnel moteur fait intervenir l'aire motrice corticale et le faisceau pyramidal descendant vers les muscles squelettiques. Chez l'Homme, il constitue le socle des apprentissages, du dressage, de l'éducation et de l'automatisation des gestes quotidiens.",
      formulas: [
        {
          name: "Trajet de l'arc réflexe conditionnel moteur visuel",
          formula: "\\text{Lumière} \\to \\text{Œil} \\xrightarrow{\\text{Nerf optique}} \\text{Aire visuelle} \\xrightarrow{\\text{Liaison intercorticale}} \\text{Aire motrice} \\xrightarrow{\\text{Voie pyramidale}} \\text{Moelle épinière} \\xrightarrow{\\text{Nerf moteur}} \\text{Muscle fléchisseur}",
          note: "La coordination motrice passe du contrôle conscient volontaire à l'automatisme réflexe économique."
        }
      ],
      workedExample: {
        title: "Analyse du temps de réaction et de l'automatisation chez le conducteur automobile",
        statement: "Un automobiliste débutant voit un obstacle surgir sur la chaussée. Son temps de réaction (temps entre la perception visuelle de l'obstacle et l'appui sur la pédale de frein) est mesuré à 1,5 seconde. Après plusieurs années de pratique régulière de la conduite, ce même individu placé dans la même situation présente un temps de réaction de 0,6 seconde. 1. Pourquoi le temps de réaction a-t-il diminué de plus de la moitié ? 2. Quel type de réflexe intervient désormais ?",
        methodSteps: [
          "Étape 1 : Analyser la situation chez le conducteur débutant. Chez le novice, la situation nécessite une analyse visuelle consciente, une délibération intellectuelle sur la conduite à tenir, puis une commande volontaire hésitante : le circuit cortical emprunte de multiples relais associatifs lents.",
          "Étape 2 : Analyser l'effet de l'expérience et de la pratique répétée. La répétition régulière de l'association [signal visuel de danger -> pression vigoureuse du pied sur le frein] a consolidé des voies neuronales privilégiées hautement coordonnées.",
          "Étape 3 : Identifier la nature de la réaction. L'action est devenue un réflexe conditionnel moteur hautement automatisé, réduisant le trajet synaptique et abaissant le temps de réaction au minimum physiologique (environ 0,6 seconde)."
        ],
        conclusion: "La réduction du temps de réaction résulte de l'automatisation du geste de freinage sous la forme d'un réflexe conditionnel moteur."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison des conditionnements et applications humaines",
        tableData: {
          headers: ["Type de conditionnement", "Exemple type", "Effecteurs mobilisés", "Rôle adaptatif chez l'Homme"],
          rows: [
            ["Conditionnement sécrétoire (pavlovien)", "Salivation au tintement d'un sifflet ou métronome", "Glandes exocrines (salivaires, gastriques)", "Préparation digestive anticipée, régulations métaboliques"],
            ["Conditionnement moteur d'évitement", "Flexion de la patte de la souris à l'allumage d'une lampe", "Muscles striés squelettiques fléchisseurs", "Protection immédiate contre les dangers et agressions physiques"],
            ["Automatismes moteurs complexes", "Écriture manuscrite, conduite automobile, dactylographie", "Musculature fine squelettique coordonnée", "Libération des capacités cognitives conscientes pour des tâches supérieures"],
            ["Réflexes sociaux et éducatifs", "Réaction au feu tricolore, arrêt au coup de sifflet d'un agent", "Comportements moteurs complexes", "Intégration sociale harmonieuse et sécurité collective"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c04_p5_q01",
          type: 'mcq',
          prompt: "Dans l'expérience de la souris soumise à un éclairage suivi d'un choc électrique sur la patte, quel rôle joue la décharge électrique au cours du conditionnement ?",
          options: [
            "C'est un stimulus neutre sans aucune action motrice.",
            "C'est le stimulus absolu (inconditionnel) qui provoque le réflexe inné de retrait de la patte.",
            "C'est un inhibiteur des photorécepteurs rétiniens.",
            "C'est un stimulus conditionnel acquis par l'hérédité."
          ],
          correctAnswerIndex: 1,
          explanation: "La décharge électrique déclenche d'emblée la flexion réflexe de défense sans apprentissage préalable : elle constitue le stimulus absolu (inconditionnel)."
        },
        {
          id: "tle_d_svt_c04_p5_q02",
          type: 'mcq',
          prompt: "Lorsqu'une souris conditionnée fléchit sa patte postérieure à la seule vue de la lampe allumée, quel centre nerveux cortical moteur est activé par la nouvelle liaison nerveuse ?",
          options: [
            "L'aire olfactive du lobe temporal.",
            "L'aire motrice corticale commandant les muscles fléchisseurs du membre postérieur.",
            "Le bulbe rachidien gustatif.",
            "L'aire auditive de la parole."
          ],
          correctAnswerIndex: 1,
          explanation: "La nouvelle liaison nerveuse intercorticale relie l'aire visuelle à l'aire motrice corticale, qui envoie ensuite l'ordre de contraction aux muscles fléchisseurs par le faisceau pyramidal."
        },
        {
          id: "tle_d_svt_c04_p5_q03",
          type: 'mcq',
          prompt: "Quelle différence fondamentale existe-t-il entre le réflexe conditionnel de salivation de Pavlov et le réflexe conditionnel de flexion de la souris ?",
          options: [
            "Le réflexe de Pavlov utilise un animal sans cerveau tandis que la souris possède un cerveau intact.",
            "Le réflexe de Pavlov met en jeu un effecteur sécrétoire glandulaire (végétatif), tandis que celui de la souris met en jeu un effecteur musculaire squelettique (moteur).",
            "Le réflexe de la souris dure toute la vie sans jamais pouvoir s'éteindre.",
            "Le réflexe de Pavlov ne fait intervenir aucun récepteur sensoriel."
          ],
          correctAnswerIndex: 1,
          explanation: "Le réflexe salivaire est sécrétoire végétatif (effecteur = glande salivaire), alors que le réflexe d'évitement de la patte est somatique moteur (effecteur = muscle strié squelettique commandé par des motoneurones médullaires)."
        },
        {
          id: "tle_d_svt_c04_p5_q04",
          type: 'mcq',
          prompt: "Un enfant qui apprend à écrire dessine chaque lettre avec lenteur, en appuyant très fort sur son crayon et en mobilisant tout son corps. Quelques années plus tard, il écrit rapidement sans regarder la pointe de son stylo tout en écoutant son professeur. Ce progrès illustre :",
          options: [
            "Une régression fonctionnelle du système nerveux moteur.",
            "L'automatisation du geste moteur qui est devenu un réflexe acquis par répétition et renforcement.",
            "Une transformation de l'écriture en réflexe inné transmissible à ses futurs enfants.",
            "Une atrophie du cortex cérébral frontal."
          ],
          correctAnswerIndex: 1,
          explanation: "L'apprentissage moteur de l'écriture passe par une automatisation progressive : les circuits moteurs deviennent des réflexes conditionnés rapides et fluides qui n'exigent plus de contrôle conscient permanent."
        },
        {
          id: "tle_d_svt_c04_p5_q05",
          type: 'mcq',
          prompt: "À un carrefour routier, un automobiliste aperçoit un feu tricolore passer brusquement au rouge et appuie immédiatement sur la pédale de frein sans réfléchir. Dans ce comportement acquis :",
          options: [
            "Le feu rouge est un stimulus inconditionnel absolu programmé génétiquement chez Homo sapiens.",
            "Le feu rouge est un stimulus conditionnel visuel déclenchant un réflexe conditionnel moteur appris au cours de la formation à la conduite.",
            "Le freinage est un réflexe inné médullaire semblable au réflexe rotulien.",
            "Le cortex cérébral est totalement contourné et absent du processus."
          ],
          correctAnswerIndex: 1,
          explanation: "Le respect du feu rouge est un réflexe conditionnel acquis lors de l'apprentissage du code de la route et de la pratique de la conduite : le signal lumineux rouge (stimulus conditionnel) déclenche le freinage moteur réflexe."
        },
        {
          id: "tle_d_svt_c04_p5_q06",
          type: 'mcq',
          prompt: "Pourquoi le dressage des animaux de cirque ou des chiens de garde repose-t-il fondamentalement sur les principes du conditionnement pavlovien et skinnerien ?",
          options: [
            "Parce que les animaux sauvages n'ont pas de système nerveux avant d'entrer dans un cirque.",
            "Parce qu'en associant des ordres verbaux ou sonores (stimuli neutres au départ) à des récompenses alimentaires ou des évitements d'inconfort (renforcements), on crée des réflexes acquis stables.",
            "Parce que le dressage modifie de façon permanente le caryotype et les chromosomes des animaux.",
            "Parce que les animaux apprennent uniquement par télépathie avec leur dresseur."
          ],
          correctAnswerIndex: 1,
          explanation: "Le dressage consiste précisément à associer des signaux arbitraires (mots, sifflets, gestes) à des stimuli renforçateurs (nourriture, caresses) pour établir des réflexes conditionnels comportementaux désirés."
        },
        {
          id: "tle_d_svt_c04_p5_q07",
          type: 'mcq',
          prompt: "Parmi les situations suivantes, laquelle ne relève PAS d'un réflexe conditionnel ou acquis ?",
          options: [
            "Un pianiste jouant un morceau complexe les yeux fermés en synchronisant parfaitement ses doigts.",
            "Un piéton sursautant et s'arrêtant net au coup de klaxon strident d'un camion qui approche à vive allure.",
            "Un bébé qui retire instantanément son pied lorsqu'une épingle pique sa plante de pied quelques minutes après sa naissance.",
            "Un nageur qui plonge au bruit sec du coup de pistolet du starter lors d'une compétition."
          ],
          correctAnswerIndex: 2,
          explanation: "Le retrait du pied piqué chez un nouveau-né est un réflexe inné médullaire de défense (présent dès la naissance sans aucun apprentissage préalable). Toutes les autres situations sont des réflexes acquis par l'expérience ou l'entraînement."
        },
        {
          id: "tle_d_svt_c04_p5_q08",
          type: 'mcq',
          prompt: "Quel est le bénéfice cognitif majeur pour l'être humain d'avoir transformé des actions comme la marche, l'écriture et la conduite en réflexes conditionnels automatisés ?",
          options: [
            "Détruire les synapses du cervelet pour faire de la place dans la boîte crânienne.",
            "Libérer l'attention consciente du cortex cérébral pour lui permettre d'exécuter d'autres tâches intellectuelles complexes simultanément.",
            "Empêcher les muscles de consommer du glucose et de l'ATP lors des mouvements.",
            "Supprimer complètement le besoin de dormir la nuit."
          ],
          correctAnswerIndex: 1,
          explanation: "L'automatisation motrice par conditionnement libère l'attention consciente : un individu peut ainsi tenir une conversation ou réfléchir à un problème tout en marchant ou en conduisant, car le contrôle moteur de base s'effectue automatiquement."
        }
      ]
    }
  ]
};

