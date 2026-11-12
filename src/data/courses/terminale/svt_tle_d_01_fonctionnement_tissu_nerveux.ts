import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L01_FONCTIONNEMENT_TISSU_NERVEUX: CurriculumChapter = {
  id: "terminale_d_svt_ch02_fonctionnement_du_tissu_nerveux",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 2,
  title: "Le fonctionnement du tissu nerveux (Nature, propriétés et transmission synaptique)",
  summary: "Étude approfondie de l'organisation anatomique et fonctionnelle du système nerveux : ultrastructure du neurone et du nerf, nature électrique et biochimique du potentiel de repos et du potentiel d'action, propriétés physiologiques fondamentales (excitabilité, rhéobase, chronaxie, lois de réponse et périodes réfractaires), mécanismes et vitesse de conduction de l'influx nerveux, et fonctionnement détaillé de la transmission synaptique neuro-neuronique et neuro-musculaire.",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_organisation_nerf_neurone",
      order: 1,
      title: "Organisation anatomique du nerf et ultrastructure du neurone",
      summary: "Organisation tissulaire du nerf (épinèvre, périnèvre, endonèvre, faisceaux de fibres) et cytologie du neurone (corps cellulaire, dendrites, axone, myéline, cellules de Schwann, nœuds de Ranvier).",
      conceptExplanation: "Le tissu nerveux est constitué de deux populations cellulaires principales : les neurones (unités structurales et fonctionnelles assurant l'excitabilité et la conductibilité) et les cellules gliales (rôle trophique, isolant et de soutien).\n\n1. Organisation macroscopique et microscopique du nerf :\nUne coupe transversale de nerf montre une structure hiérarchisée en faisceaux protégés par des gaines conjonctives superposées :\n- L'épinèvre : gaine conjonctive externe résistante enveloppant la totalité du nerf et renfermant les vaisseaux sanguins nourriciers (artérioles, veinules).\n- Le périnèvre : enveloppe conjonctive dense entourant individuellement chaque faisceau de fibres nerveuses.\n- L'endonèvre : tissu conjonctif lâche délicat entourant chaque fibre nerveuse à l'intérieur du faisceau.\n\n2. Ultrastructure du neurone (cellule nerveuse) :\nLe neurone est une cellule hautement différenciée et polarisée comprenant trois parties fondamentales :\n- Le corps cellulaire (soma ou péricaryon) : renferme le noyau volumineux à nucléole proéminent, des organites abondants dont les corps de Nissl (amas de réticulum endoplasmique granuleux riche en ribosomes traduisant les neurotransmetteurs et protéines du cytosquelette) et des neurofibrilles qui assurent le transport axonal.\n- Les dendrites : prolongements cytoplasmiques courts, arborescents et très ramifiés, constituant le pôle récepteur principal recevant les signaux synaptiques afférents.\n- L'axone (ou cylindraxe) : prolongement cytoplasmique unique, de diamètre constant et de longueur variable (pouvant atteindre plus d'un mètre), émergeant du cône d'implantation. Il constitue le pôle conducteur du message nerveux efférent et se termine par l'arborisation terminale munie de boutons synaptiques.\n\n3. Fibres myélinisées et amyéliniques :\n- Les fibres myélinisées possèdent une gaine de myéline (substance lipidique isolante d'aspect blanchâtre). Dans le système nerveux périphérique (SNP), elle est produite par l'enroulement concentrique de la membrane plasmique des cellules de Schwann. La gaine est interrompue à intervalles réguliers (tous les 1 à 2 mm) par des étranglements amyéliniques appelés nœuds de Ranvier, où la membrane axonale est directement au contact du milieu interstitiel.\n- Les fibres amyéliniques sont simplement enchâssées dans le cytoplasme d'une cellule de Schwann sans enroulement spiralé de myéline.",
      keyRule: "L'unité fonctionnelle du tissu nerveux est le neurone. Le message nerveux circule de manière polarisée : dendrites -> corps cellulaire -> axone -> arborisation terminale. Les nœuds de Ranvier sont les seuls sites d'échanges ioniques des fibres myélinisées.",
      formulas: [
        {
          name: "Hiérarchie anatomique des gaines conjonctives du nerf",
          formula: "\\text{Épinèvre (gaine externe)} \\supset \\text{Périnèvre (faisceau)} \\supset \\text{Endonèvre (fibre)}",
          note: "Assure la vascularisation, la protection mécanique et l'isolement électrique"
        }
      ],
      workedExample: {
        title: "Analyse histologique d'une coupe de nerf sciatique de grenouille",
        statement: "On réalise une coupe transversale d'un nerf sciatique observé au microscope optique. On distingue : une enveloppe externe englobant des vaisseaux sanguins (zone 1), des territoires circulaires circonscrits par une membrane dense (zone 2), et à l'intérieur de ces cercles, une multitude de sections circulaires avec un point sombre central (zone 3). 1. Identifier chacune de ces zones. 2. Préciser ce que représente le point sombre central de la zone 3.",
        methodSteps: [
          "Étape 1 : Analyser la zone 1. L'enveloppe générale protectrice externe contenant le réseau vasculaire correspond à l'épinèvre.",
          "Étape 2 : Analyser la zone 2. Les groupements circulaires entourés d'une gaine dense correspondent aux faisceaux de fibres nerveuses, délimités par le périnèvre.",
          "Étape 3 : Analyser la zone 3. Chaque petite section circulaire correspond à une fibre nerveuse entourée de son endonèvre.",
          "Étape 4 : Déterminer la nature du point sombre central. Au centre d'une fibre nerveuse coupée transversalement se trouve l'axone (cylindraxe), entouré de sa gaine de myéline ou cellule de Schwann."
        ],
        conclusion: "Zone 1 = Épinèvre ; Zone 2 = Faisceau délimité par le périnèvre ; Zone 3 = Fibre nerveuse ; Point central = Axone."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Organisation structurale d'un nerf et d'un neurone moteur",
        tableData: {
          headers: ["Structure nerveuse", "Enveloppe associée", "Localisation cellulaire", "Rôle physiologique"],
          rows: [
            ["Nerf entier", "Épinèvre (tissu conjonctif riche en vaisseaux)", "Organe périphérique", "Conduction de faisceaux mixtes (sensitifs et moteurs)"],
            ["Faisceau de fibres", "Périnèvre (gaine lamellaire dense)", "Compartiment intermédiaire", "Isolement mécanique et protection fasciculaire"],
            ["Fibre nerveuse", "Endonèvre et gaine de myéline", "Unité cellulaire axonale", "Conduction de l'influx nerveux individuel"],
            ["Corps cellulaire (soma)", "Membrane plasmique neuronale", "Substance grise / ganglions", "Intégration somato-dendritique et biosynthèse"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c02_p1_ex1",
          type: "mcq",
          prompt: "Quelle gaine conjonctive enveloppe individuellement un faisceau de fibres nerveuses au sein d'un nerf ?",
          options: [
            "Le périnèvre",
            "L'épinèvre",
            "L'endonèvre",
            "Le sarcolemme"
          ],
          correctAnswerIndex: 0,
          explanation: "Le périnèvre entoure chaque faisceau de fibres nerveuses. L'épinèvre enveloppe le nerf tout entier, tandis que l'endonèvre entoure chaque fibre nerveuse individuelle. Le sarcolemme est la membrane de la fibre musculaire."
        },
        {
          id: "tle_d_svt_c02_p1_ex2",
          type: "mcq",
          prompt: "Au niveau d'une fibre myélinisée du système nerveux périphérique, quelle cellule synthétise la gaine de myéline ?",
          options: [
            "La cellule de Schwann",
            "L'astrocyte fibrillaire",
            "La microglie",
            "Le neurone moteur lui-même"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans le système nerveux périphérique (SNP), la gaine de myéline est formée par l'enroulement concentrique de la membrane plasmique des cellules de Schwann autour de l'axone."
        },
        {
          id: "tle_d_svt_c02_p1_ex3",
          type: "mcq",
          prompt: "Dans un neurone fonctionnel au repos, quelle structure cytoplasmique caractéristique est constituée de réticulum endoplasmique granuleux riche en ARN ?",
          options: [
            "Les corps de Nissl",
            "Les nœuds de Ranvier",
            "Les cônes d'implantation",
            "Les télodendrons"
          ],
          correctAnswerIndex: 0,
          explanation: "Les corps de Nissl (ou substance tigroïde) correspondent aux amas de réticulum endoplasmique rugueux très développés dans le soma, traduisant une intense activité de synthèse protéique."
        },
        {
          id: "tle_d_svt_c02_p1_ex4",
          type: "mcq",
          prompt: "Où sont localisés les nœuds de Ranvier sur une fibre nerveuse ?",
          options: [
            "Aux interruptions régulières de la gaine de myéline le long de l'axone",
            "Exclusivement à l'extrémité des arborisations dendritiques",
            "À la jonction exacte entre l'épinèvre et le périnèvre",
            "Autour du cône d'implantation axonale uniquement"
          ],
          correctAnswerIndex: 0,
          explanation: "Les nœuds de Ranvier sont des étranglements périodiques où la gaine de myéline s'interrompt, laissant l'axone nu en contact direct avec le liquide interstitiel."
        },
        {
          id: "tle_d_svt_c02_p1_ex5",
          type: "mcq",
          prompt: "Une substance toxique détruit sélectivement les cellules de l'endonèvre. Quel élément subit directement les conséquences de cette altération ?",
          options: [
            "Le tissu conjonctif qui sépare et isole chaque fibre nerveuse à l'intérieur d'un faisceau",
            "La capsule conjonctive externe recouvrant l'ensemble du tronc nerveux",
            "La membrane limitante des faisceaux musculaires squelettiques",
            "Les ganglions rachidiens de la racine postérieure"
          ],
          correctAnswerIndex: 0,
          explanation: "L'endonèvre est le fin tissu conjonctif qui entoure chaque fibre nerveuse à l'intérieur d'un faisceau ; sa destruction altère le micro-environnement immédiat de chaque axone."
        },
        {
          id: "tle_d_svt_c02_p1_ex6",
          type: "mcq",
          prompt: "Quelle partie morphologique du neurone est spécialisée dans la RÉCEPTION des signaux synaptiques afférents ?",
          options: [
            "Les dendrites",
            "L'arborisation terminale",
            "Les nœuds de Ranvier",
            "La gaine de Schwann"
          ],
          correctAnswerIndex: 0,
          explanation: "Les dendrites constituent le pôle récepteur principal du neurone, recueillant les messages nerveux provenant des neurones situés en amont pour les acheminer vers le corps cellulaire."
        },
        {
          id: "tle_d_svt_c02_p1_ex7",
          type: "mcq",
          prompt: "Si l'on sectionne un nerf rachidien mixte, quelles fibres sont lésées ?",
          options: [
            "À la fois des fibres nerveuses sensitives (afférentes) et motrices (efférentes)",
            "Exclusivement des prolongements dendritiques sensoriels",
            "Uniquement des fibres motrices destinées aux plaques motrices",
            "Seulement les capillaires sanguins de l'épinèvre sans altération axonale"
          ],
          correctAnswerIndex: 0,
          explanation: "Un nerf rachidien est un nerf mixte : il contient simultanément des axones de neurones sensitifs (centripètes) et des axones de motoneurones (centrifuges)."
        },
        {
          id: "tle_d_svt_c02_p1_ex8",
          type: "mcq",
          prompt: "Pourquoi la substance blanche de l'axe cérébro-spinal apparaît-elle blanchâtre à l'examen anatomique ?",
          options: [
            "En raison de l'abondance des lipides constituant les gaines de myéline des axones",
            "Parce qu'elle ne contient aucune fibre nerveuse vivante",
            "À cause de la calcification des corps cellulaires neuronaux",
            "Parce qu'elle est totalement dépourvue de vaisseaux sanguins"
          ],
          correctAnswerIndex: 0,
          explanation: "La substance blanche doit sa couleur à la richesse en myéline (riche en lipides comme la sphingomyéline) entourant les axones qui la traversent."
        }
      ]
    },
    {
      id: "pt2_potentiel_repos_gradient_ionique",
      order: 2,
      title: "Nature électrique du message nerveux et potentiel de repos (PR)",
      summary: "Mesure oscillographique de la d.d.p. membranaire (-70 mV), inégale répartition des ions Na+ et K+, perméabilité de repos et rôle actif de la pompe Na+/K+ ATPase.",
      conceptExplanation: "La membrane d'un axone au repos présente une polarisation électrique permanente appelée potentiel de repos ou potentiel de membrane.\n\n1. Mise en évidence expérimentale à l'oscilloscope cathodique :\nOn utilise l'axone géant de calmar (diamètre atteignant 1 mm) placé dans de l'eau de mer :\n- Deux microélectrodes réceptrices $R_1$ et $R_2$ placées à la surface externe de l'axone non excité enregistrent une différence de potentiel (d.d.p.) nulle ($0\\text{ mV}$) : la surface est équipotentielle.\n- Dès que la microélectrode de verre $R_2$ est enfoncée à l'intérieur de l'axone (tandis que $R_1$ reste à la surface externe servant de référence), le spot subit une déviation verticale instantanée vers le bas qui se stabilise à une valeur négative constante (comprise entre $-60\\text{ mV}$ et $-85\\text{ mV}$, couramment $-70\\text{ mV}$).\n- Conclusion fondamentale : Au repos, la face interne de la membrane plasmique est électronégative par rapport à la face externe qui est électropositive.\n\n2. Origine ionique du potentiel de repos :\nLe potentiel de repos résulte d'une asymétrie de concentration ionique majeure entre le cytoplasme (milieu intracellulaire) et le liquide interstitiel (milieu extracellulaire) :\n- Les ions potassium ($K^+$) sont très concentrés à l'intérieur (environ $400\\text{ mmol/L}$) et peu concentrés à l'extérieur ($20\\text{ mmol/L}$).\n- Les ions sodium ($Na^+$) sont très concentrés à l'extérieur (environ $440\\text{ mmol/L}$) et peu concentrés à l'intérieur ($50\\text{ mmol/L}$).\n- Les anions protéiques non diffusibles ($A^-$) sont piégés à l'intérieur de la cellule.\n\n3. Perméabilité passive et canaux de fuite :\nAu repos, la membrane possède de nombreux canaux de fuite constamment ouverts pour le potassium ($K^+$), rendant la membrane 50 à 100 fois plus perméable au $K^+$ qu'au $Na^+$. Les ions $K^+$ diffusent passivement vers l'extérieur selon leur gradient de concentration, emportant des charges positives et laissant l'intérieur électronégatif.\n\n4. Maintien actif par la pompe $Na^+/K^+$ ATPase :\nLa diffusion passive tendrait à terme à annuler les gradients. Le déséquilibre est maintenu par un transporteur protéique actif : la pompe $Na^+/K^+$ ATPase. Pour chaque molécule d'ATP hydrolysée en $ADP + P_i$, la pompe expulse activement $3\\text{ }Na^+$ vers l'extérieur et réintroduit $2\\text{ }K^+$ vers l'intérieur contre leurs gradients électrochimiques respectifs. Ce transport électrogène asymétrique pérennise la négativité intracellulaire de $-70\\text{ mV}$.",
      keyRule: "Le potentiel de repos (-70 mV) est dû à l'inégale répartition des ions Na+ et K+ (K+ intracellulaire > extracellulaire ; Na+ extracellulaire > intracellulaire) et à la perméabilité de fuite au K+, stabilisé par la pompe Na+/K+ ATPase qui consomme de l'ATP (3 Na+ sortis / 2 K+ entrés).",
      formulas: [
        {
          name: "Stœchiométrie de la pompe Na+/K+ ATPase",
          formula: "3\\text{ Na}^+_{\\text{int}} + 2\\text{ K}^+_{\\text{ext}} + \\text{ATP} + \\text{H}_2\\text{O} \\xrightarrow{\\text{ATPase}} 3\\text{ Na}^+_{\\text{ext}} + 2\\text{ K}^+_{\\text{int}} + \\text{ADP} + \\text{P}_i",
          note: "Maintient les gradients ioniques et la négativité interne (-70 mV)"
        }
      ],
      workedExample: {
        title: "Calcul du flux ionique net au repos lors d'une intoxication au dinitrophénol (DNP)",
        statement: "On traite un axone géant de calmar avec du DNP, une substance inhibitrice qui bloque la synthèse d'ATP mitochondriale. 1. Préciser l'effet immédiat du DNP sur la pompe Na+/K+. 2. Décrire l'évolution du potentiel de repos au bout de quelques heures et expliquer la cause biochimique.",
        methodSteps: [
          "Étape 1 : Analyser l'impact du manque d'ATP. La pompe Na+/K+ est une ATPase qui nécessite l'énergie de l'hydrolyse de l'ATP pour fonctionner contre les gradients. En présence de DNP, la pompe s'arrête instantanément.",
          "Étape 2 : Analyser les flux passifs résiduels. Les canaux de fuite continuent de laisser diffuser Na+ vers l'intérieur et K+ vers l'extérieur selon leurs gradients de concentration.",
          "Étape 3 : Déterminer la conséquence sur les gradients. En l'absence de pompage actif, les gradients ioniques s'amenuisent progressivement jusqu'à l'équilibre passif.",
          "Étape 4 : Déduire l'évolution de la d.d.p. Lorsque les concentrations de part et d'autre s'égalisent, la d.d.p. s'annule (0 mV) : l'axone perd totalement son potentiel de repos et devient inexcitable."
        ],
        conclusion: "L'inhibition de la pompe par le DNP entraîne la dissipation progressive des gradients ioniques et la dépolarisation irréversible jusqu'à 0 mV."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Gradients ioniques et transport transmembranaire au potentiel de repos",
        tableData: {
          headers: ["Ion / Élément", "Concentration Intracellulaire", "Concentration Extracellulaire", "Gradient chimique", "Sens du transport actif (Pompe)"],
          rows: [
            ["Ions K+", "400 mmol/L (très élevée)", "20 mmol/L (faible)", "Vers l'extérieur (sortie passive)", "Entrée de 2 K+ vers l'intérieur"],
            ["Ions Na+", "50 mmol/L (faible)", "440 mmol/L (très élevée)", "Vers l'intérieur (entrée passive)", "Expulsion de 3 Na+ vers l'extérieur"],
            ["Anions organiques (A-)", "Forte concentration protéique", "Nulle / négligeable", "Imperméables (piégés)", "Aucun transport actif"],
            ["Potentiel résultant", "-70 mV (face interne)", "0 mV (référence externe)", "Inversion transmembranaire", "Pompe électrogène consommatrice d'ATP"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c02_p2_ex1",
          type: "mcq",
          prompt: "Quelle valeur de potentiel enregistre-t-on lorsqu'une microélectrode est introduite à l'intérieur d'un axone au repos, la seconde restant en surface ?",
          options: [
            "Environ -70 mV",
            "Exactement 0 mV",
            "+40 mV",
            "+100 mV"
          ],
          correctAnswerIndex: 0,
          explanation: "Au repos, l'intérieur de l'axone est électronégatif par rapport à l'extérieur électropositif, ce qui se traduit par une d.d.p. stable d'environ -70 mV (potentiel de repos ou potentiel de membrane)."
        },
        {
          id: "tle_d_svt_c02_p2_ex2",
          type: "mcq",
          prompt: "Quelle est la répartition relative des ions sodium (Na+) et potassium (K+) de part et d'autre de la membrane d'un axone au repos ?",
          options: [
            "Na+ est plus concentré à l'extérieur, tandis que K+ est plus concentré à l'intérieur",
            "Na+ et K+ sont tous les deux plus concentrés à l'intérieur de l'axone",
            "Na+ et K+ sont en concentrations rigoureusement identiques des deux côtés",
            "K+ est plus concentré à l'extérieur et Na+ à l'intérieur"
          ],
          correctAnswerIndex: 0,
          explanation: "Le milieu intracellulaire est enrichi en K+ (environ 400 mmol/L contre 20 mmol/L dehors), tandis que le milieu extracellulaire est enrichi en Na+ (environ 440 mmol/L contre 50 mmol/L dedans)."
        },
        {
          id: "tle_d_svt_c02_p2_ex3",
          type: "mcq",
          prompt: "Quel est le bilan stœchiométrique et le rôle de la pompe Na+/K+ ATPase pour une molécule d'ATP consommée ?",
          options: [
            "Expulsion de 3 Na+ et entrée de 2 K+ contre leurs gradients",
            "Entrée de 3 Na+ et sortie de 2 K+ dans le sens de leurs gradients",
            "Expulsion de 1 Na+ et entrée de 1 K+ sans dépense d'énergie",
            "Sortie de 2 Na+ et entrée de 3 Ca2+ par transport passif"
          ],
          correctAnswerIndex: 0,
          explanation: "La pompe Na+/K+ ATPase assure un transport actif antiport électrogène : elle expulse 3 ions Na+ et réabsorbe 2 ions K+ par molécule d'ATP hydrolysée, maintenant les gradients ioniques."
        },
        {
          id: "tle_d_svt_c02_p2_ex4",
          type: "mcq",
          prompt: "Que se passe-t-il si l'on applique de l'ouabaïne (un poison spécifique qui inhibe la pompe Na+/K+ ATPase) sur un axone ?",
          options: [
            "Les gradients de concentration de Na+ et K+ diminuent progressivement jusqu'à annulation du potentiel de repos",
            "Le potentiel de repos descend instantanément à -120 mV",
            "L'axone émet une salve infinie de potentiels d'action spontanés",
            "La membrane devient totalement imperméable à l'eau"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ouabaïne bloque la pompe Na+/K+. Les fuites passives non compensées entraînent l'égalisation progressive des concentrations et l'annulation du potentiel de repos."
        },
        {
          id: "tle_d_svt_c02_p2_ex5",
          type: "mcq",
          prompt: "Pourquoi la membrane plasmique de l'axone au repos est-elle principalement perméable aux ions K+ plutôt qu'aux ions Na+ ?",
          options: [
            "Parce qu'elle possède de nombreux canaux de fuite à K+ constamment ouverts au repos",
            "Parce que les ions Na+ sont trop volumineux pour traverser la bicouche lipidique",
            "Parce que les canaux voltage-dépendants à Na+ sont tous totalement ouverts au repos",
            "Parce que les ions K+ sont attirés par les charges positives extracellulaires"
          ],
          correctAnswerIndex: 0,
          explanation: "La perméabilité sélective de repos est due aux canaux de fuite (canaux non régulés) hautement sélectifs et perméables au K+, qui laissent sortir le K+ selon son gradient."
        },
        {
          id: "tle_d_svt_c02_p2_ex6",
          type: "mcq",
          prompt: "Si l'on place deux électrodes de réception R1 et R2 à la surface externe d'un axone au repos non stimulé, qu'observe-t-on sur l'oscilloscope ?",
          options: [
            "Une ligne horizontale au niveau 0 mV (différence de potentiel nulle)",
            "Une déviation permanente à -70 mV",
            "Un potentiel d'action spontané de +40 mV",
            "Une oscillation sinusoïdale continue"
          ],
          correctAnswerIndex: 0,
          explanation: "Tous les points de la surface externe d'un axone au repos présentent la même charge positive : la d.d.p. entre deux points de surface est nulle (0 mV)."
        },
        {
          id: "tle_d_svt_c02_p2_ex7",
          type: "mcq",
          prompt: "Si l'on augmente expérimentalement la concentration extracellulaire de K+ autour d'un axone au repos, comment varie le potentiel de repos ?",
          options: [
            "Le potentiel de membrane devient moins négatif (dépolarisation du potentiel de repos)",
            "Le potentiel de membrane s'hyperpolarise jusqu'à -100 mV",
            "Le potentiel de repos reste rigoureusement inchangé",
            "Les canaux Na+ voltage-dépendants se ferment définitivement"
          ],
          correctAnswerIndex: 0,
          explanation: "En augmentant le K+ externe, on diminue le gradient de concentration du K+ vers l'extérieur. Moins d'ions K+ sortent, donc l'intérieur devient moins électronégatif (la valeur passe par exemple de -70 mV à -50 mV : dépolarisation)."
        },
        {
          id: "tle_d_svt_c02_p2_ex8",
          type: "mcq",
          prompt: "Quel rôle jouent les protéines intracellulaires chargées négativement (anions non diffusibles A-) dans la genèse du potentiel de repos ?",
          options: [
            "Elles restent emprisonnées à l'intérieur de l'axone et contribuent à l'électronégativité interne",
            "Elles sortent activement à travers les canaux de fuite",
            "Elles hydrolysent directement l'ATP pour faire entrer du sodium",
            "Elles neutralisent complètement les ions potassium"
          ],
          correctAnswerIndex: 0,
          explanation: "Les macromolécules protéiques chargées négativement ne peuvent pas franchir la membrane plasmique : leur rétention intracellulaire participe à la négativité du milieu intérieur."
        }
      ]
    },
    {
      id: "pt3_potentiel_action_mecanismes_ioniques",
      order: 3,
      title: "Le potentiel d'action (PA) monophasique et ses mécanismes ioniques",
      summary: "Cinétique du PA monophasique (artéfact, latence, dépolarisation, repolarisation, hyperpolarisation, restauration) et ouverture séquentielle des canaux voltage-dépendants.",
      conceptExplanation: "Lorsqu'un axone reçoit une stimulation électrique efficace (égale ou supérieure au seuil), la membrane subit une modification brutale, transitoire et stéréotypée de sa polarisation : le potentiel d'action (PA).\n\n1. Décomposition morphologique du PA monophasique :\nEnregistré avec une électrode intracellulaire et une de surface, le PA dure de 1 à 2 millisecondes et présente successivement :\n- Artéfact de stimulation (A) : brève déviation instantanée liée au passage direct du courant excitateur au niveau des électrodes stimulatrices.\n- Temps de latence (AB) : délai correspondant au temps nécessaire à l'onde nerveuse pour parcourir la distance séparant les électrodes stimulatrices de l'électrode réceptrice $R_1$.\n- Phase de dépolarisation (BC) : montée brutale du potentiel de $-70\\text{ mV}$ à $+30\\text{ mV}$ ou $+40\\text{ mV}$. Le potentiel franchit le niveau zéro : c'est l'inversion de polarité membranaire (l'intérieur devient électropositif et l'extérieur électronégatif ; l'amplitude totale atteint 100 à 110 mV).\n- Phase de repolarisation (CD) : redescente rapide ramenant le potentiel vers le niveau de repos ($-70\\text{ mV}$).\n- Phase d'hyperpolarisation (DE) : descente transitoire en dessous du potentiel de repos (atteignant $-75$ à $-80\\text{ mV}$).\n- Phase de restauration (EF) : retour progressif au potentiel de repos initial ($-70\\text{ mV}$).\n\n2. Mécanismes ioniques et canaux voltage-dépendants :\nLe PA s'explique par le fonctionnement séquentiel de deux types de canaux protéiques régulés par le voltage :\n- Canaux $Na^+$ voltage-dépendants : possèdent une porte d'activation rapide et une porte d'inactivation. Lorsque la stimulation dépolarise la membrane jusqu'au seuil ($-50\\text{ mV}$), les canaux $Na^+$ s'ouvrent brutalement. Les ions $Na^+$ se précipitent massivement vers l'intérieur (influx de $Na^+$) attirés par leur gradient chimique et électrique : c'est la dépolarisation. Au pic (+30 mV), les canaux $Na^+$ s'inactivent automatiquement.\n- Canaux $K^+$ voltage-dépendants : s'ouvrent avec un léger retard par rapport aux canaux $Na^+$. Au pic du PA, alors que les canaux $Na^+$ sont inactivés, les canaux $K^+$ s'ouvrent largement, provoquant une sortie massive d'ions $K^+$ vers l'extérieur : c'est la repolarisation.\n- Hyperpolarisation : la fermeture des canaux $K^+$ voltage-dépendants est lente et retardée, provoquant une sortie excédentaire d'ions $K^+$ au-delà de la valeur de repos.\n- Restauration : les canaux voltage-dépendants sont tous fermés ; la pompe $Na^+/K^+$ ATPase expulse les ions $Na^+$ entrés et réintroduit les ions $K^+$ sortis pour restaurer rigoureusement les concentrations initiales.",
      keyRule: "Dépolarisation = entrée massive et rapide d'ions Na+ par les canaux Na+ voltage-dépendants. Repolarisation = sortie d'ions K+ par les canaux K+ voltage-dépendants (canaux Na+ inactivés). Hyperpolarisation = fermeture lente des canaux K+. Restauration = pompe Na+/K+ ATPase.",
      formulas: [
        {
          name: "Amplitude totale d'un potentiel d'action",
          formula: "\\Delta V = V_{\\text{pic}} - V_{\\text{repos}} = (+30\\text{ mV}) - (-70\\text{ mV}) = 100\\text{ mV}",
          note: "Signal stéréotypé invariant (loi du tout ou rien)"
        }
      ],
      workedExample: {
        title: "Effet de la tétrodotoxine (TTX) et du tétraéthylammonium (TEA) sur le potentiel d'action",
        statement: "On dispose de deux axones géants stimulés efficacement : - L'axone 1 est perfusé avec de la TTX (toxine de poisson fugu). - L'axone 2 est perfusé avec du TEA. Prédire et justifier l'enregistrement obtenu pour chaque axone.",
        methodSteps: [
          "Étape 1 : Identifier le mode d'action de la TTX. La TTX bloque spécifiquement les canaux Na+ voltage-dépendants.",
          "Étape 2 : Déduire le tracé de l'axone 1. Sans entrée de Na+, aucune dépolarisation n'est possible : aucun potentiel d'action n'apparaît (l'axone reste bloqué à -70 mV).",
          "Étape 3 : Identifier le mode d'action du TEA. Le TEA bloque spécifiquement les canaux K+ voltage-dépendants.",
          "Étape 4 : Déduire le tracé de l'axone 2. La dépolarisation initiale par entrée de Na+ s'effectue normalement jusqu'au pic (+30 mV), mais la repolarisation rapide ne peut se produire : le potentiel reste anormalement prolongé en plateau haut."
        ],
        conclusion: "TTX bloque la dépolarisation (absence totale de PA) ; TEA bloque la repolarisation (maintien anormal de la dépolarisation)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Phases cinétiques du potentiel d'action et états des canaux ioniques",
        tableData: {
          headers: ["Phase du PA", "Segment de courbe", "Valeurs de potentiel", "État canaux Na+ voltage-dépendants", "État canaux K+ voltage-dépendants"],
          rows: [
            ["Repos", "Avant A", "-70 mV", "Fermés (activables)", "Fermés"],
            ["Latence", "Segment AB", "-70 mV (propagation)", "Fermés", "Fermés"],
            ["Dépolarisation", "Segment BC", "De -70 mV à +30 mV", "Ouverts (entrée massive de Na+)", "Fermés (en cours d'activation lente)"],
            ["Repolarisation", "Segment CD", "De +30 mV à -70 mV", "Inactivés (fermés non activables)", "Ouverts (sortie massive de K+)"],
            ["Hyperpolarisation", "Segment DE", "De -70 mV à -80 mV", "Fermés (désinactivés réactivables)", "Fermeture lente et retardée (fuite de K+)"],
            ["Restauration", "Segment EF", "Retour à -70 mV", "Fermés", "Fermés (activité de la pompe Na+/K+)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c02_p3_ex1",
          type: "mcq",
          prompt: "Quel événement ionique membranaire précis déclenche la phase de DÉPOLARISATION du potentiel d'action ?",
          options: [
            "L'ouverture des canaux à Na+ voltage-dépendants et l'entrée massive d'ions Na+",
            "L'ouverture des canaux à K+ voltage-dépendants et la sortie massive d'ions K+",
            "L'arrêt complet de la pompe Na+/K+ ATPase",
            "L'expulsion brutale d'anions protéiques vers l'extérieur"
          ],
          correctAnswerIndex: 0,
          explanation: "La dépolarisation est causée par l'ouverture explosive des canaux Na+ voltage-dépendants dès que le seuil de potentiel est atteint, entraînant un influx massif d'ions Na+ vers l'intérieur."
        },
        {
          id: "tle_d_svt_c02_p3_ex2",
          type: "mcq",
          prompt: "Quelle phase du potentiel d'action correspond à la sortie massive d'ions K+ consécutive à l'inactivation des canaux Na+ ?",
          options: [
            "La repolarisation",
            "La dépolarisation",
            "Le temps de latence",
            "L'artéfact de stimulation"
          ],
          correctAnswerIndex: 0,
          explanation: "La repolarisation correspond au retour du potentiel membranaire vers sa valeur de repos grâce à l'inactivation des canaux Na+ et à l'ouverture des canaux K+ voltage-dépendants (sortie de K+)."
        },
        {
          id: "tle_d_svt_c02_p3_ex3",
          type: "mcq",
          prompt: "Quelle est la cause biophysique directe de l'hyperpolarisation observée à la fin d'un potentiel d'action ?",
          options: [
            "La fermeture lente et retardée des canaux K+ voltage-dépendants, entraînant une sortie excessive d'ions K+",
            "Une rentrée excessive d'ions Na+ par la pompe ATPase",
            "La destruction de la gaine de myéline par l'influx",
            "L'accumulation d'ions chlorure dans le milieu extracellulaire"
          ],
          correctAnswerIndex: 0,
          explanation: "Les canaux K+ voltage-dépendants se referment avec retard ; la sortie continue d'ions K+ fait descendre transitoirement le potentiel sous la valeur de repos (-75 à -80 mV)."
        },
        {
          id: "tle_d_svt_c02_p3_ex4",
          type: "mcq",
          prompt: "On immerge un axone dans un milieu de substitution totalement dépourvu d'ions sodium (Na+). Qu'enregistre-t-on lors d'une stimulation supraliminaire ?",
          options: [
            "Aucun potentiel d'action n'est généré (l'artéfact de stimulation est seul visible)",
            "Un potentiel d'action d'amplitude deux fois plus élevée",
            "Une hyperpolarisation géante continue",
            "Une repolarisation immédiate sans dépolarisation"
          ],
          correctAnswerIndex: 0,
          explanation: "En l'absence totale de Na+ extracellulaire, aucun flux entrant de Na+ ne peut se produire lors de l'ouverture des canaux voltage-dépendants : la genèse du PA est impossible."
        },
        {
          id: "tle_d_svt_c02_p3_ex5",
          type: "mcq",
          prompt: "Que représente le temps de latence sur un enregistrement oscillographique de potentiel d'action ?",
          options: [
            "La durée mise par l'influx nerveux pour se propager des électrodes stimulatrices à la première électrode réceptrice",
            "Le temps nécessaire pour hydrolyser une molécule d'ATP au repos",
            "La durée totale pendant laquelle l'axone reste inexcitable",
            "Le délai d'ouverture des canaux chlore postsynaptiques"
          ],
          correctAnswerIndex: 0,
          explanation: "Le temps de latence est le temps de conduction mis par l'onde de dépolarisation pour parcourir la distance séparant les électrodes de stimulation de l'électrode réceptrice."
        },
        {
          id: "tle_d_svt_c02_p3_ex6",
          type: "mcq",
          prompt: "Quel état adoptent les canaux Na+ voltage-dépendants au sommet (pic à +30 mV) du potentiel d'action ?",
          options: [
            "Ils deviennent inactivés (fermés et non activables immédiatement)",
            "Ils restent grand ouverts pendant plusieurs minutes",
            "Ils inversent leur polarité pour faire sortir du sodium",
            "Ils sont dégradés par les enzymes cytoplasmiques"
          ],
          correctAnswerIndex: 0,
          explanation: "Au pic du PA, les canaux Na+ voltage-dépendants passent de l'état ouvert à l'état inactivé par fermeture de leur porte d'inactivation, stoppant net l'entrée de Na+."
        },
        {
          id: "tle_d_svt_c02_p3_ex7",
          type: "mcq",
          prompt: "Si la distance entre l'électrode de stimulation et l'électrode réceptrice est de 3 cm et que le temps de latence est de 1 ms, quelle est la vitesse de conduction de la fibre ?",
          options: [
            "30 m/s",
            "3 m/s",
            "0,3 m/s",
            "300 m/s"
          ],
          correctAnswerIndex: 0,
          explanation: "v = d / t = 0,03 m / 0,001 s = 30 m/s."
        },
        {
          id: "tle_d_svt_c02_p3_ex8",
          type: "mcq",
          prompt: "Comment se rétablissent définitivement les concentrations ioniques initiales de part et d'autre de la membrane après le passage répété de potentiels d'action ?",
          options: [
            "Grâce au travail de la pompe Na+/K+ ATPase qui refoule le Na+ entré et réintègre le K+ sorti",
            "Par simple diffusion passive à travers les phospholipides membranaires",
            "Par ouverture spontanée de canaux calciques mitochondriaux",
            "Par fusion vésiculaire au niveau du soma"
          ],
          correctAnswerIndex: 0,
          explanation: "C'est l'activité permanente de la pompe Na+/K+ ATPase qui compense les entrées de Na+ et sorties de K+ survenues pendant le PA en rétablissant les réserves ioniques initiales."
        }
      ]
    },
    {
      id: "pt4_proprietes_excitabilite_seuil_lois",
      order: 4,
      title: "Propriétés physiologiques : excitabilité, seuils et lois de réponse",
      summary: "Courbe d'excitabilité (rhéobase, temps utile, chronaxie), loi du tout ou rien (fibre isolée) versus loi de sommation et recrutement (nerf entier).",
      conceptExplanation: "La fibre nerveuse et le nerf possèdent deux propriétés physiologiques fondamentales : l'excitabilité (capacité de réagir à un stimulus) et la conductibilité (capacité de propager l'influx).\n\n1. Paramètres de l'excitabilité : courbe intensité-temps (courbe d'excitabilité) :\nPour qu'une stimulation électrique soit efficace, elle doit associer une intensité suffisante ($I$) appliquée pendant une durée minimale ($t$). La courbe représentant la variation de l'intensité liminaire en fonction du temps d'application est une hyperbole définissant plusieurs caractéristiques fondamentales :\n- La rhéobase ($R$) : plus petite intensité de stimulation capable de provoquer une réponse du nerf si le temps d'application est suffisant. En dessous de la rhéobase, aucune stimulation ne peut être efficace, quelle que soit sa durée.\n- Le temps utile ($t_u$) : temps d'application minimal nécessaire pour que l'intensité égale à la rhéobase provoque une réponse.\n- La chronaxie ($C$) : durée minimale d'application nécessaire pour qu'une intensité double de la rhéobase ($2R$) provoque une réponse. C'est le critère universel de mesure de l'excitabilité : plus la chronaxie est courte, plus le tissu est excitable.\n- Zones de la courbe : en dessous de la courbe se trouve la zone des excitations inefficaces (infraliminaires) ; sur la courbe se trouvent les excitations seuils (liminaires) ; au-dessus se trouve la zone des excitations efficaces (supraliminaires).\n\n2. Loi du tout ou rien (fibre nerveuse isolée) :\nLorsqu'on stimule une fibre nerveuse isolée avec des intensités croissantes :\n- Pour $I < I_{\\text{seuil}}$ (intensités infraliminaires) : aucune réponse n'est émise ($0\\text{ mV}$).\n- Dès que $I = I_{\\text{seuil}}$ (intensité liminaire) : la fibre répond d'emblée par un potentiel d'action d'amplitude maximale ($+20\\text{ mV}$ ou $+30\\text{ mV}$ selon les conditions).\n- Pour $I > I_{\\text{seuil}}$ (intensités supraliminaires) : l'amplitude du potentiel d'action reste rigoureusement constante et identique. La fibre répond avec son potentiel d'action complet ou ne répond pas du tout : elle obéit strictement à la loi du tout ou rien.\n\n3. Loi de sommation et de recrutement (nerf entier) :\nLe nerf entier est un faisceau constitué de plusieurs centaines ou milliers de fibres nerveuses qui ne possèdent pas toutes le même seuil d'excitabilité ni le même diamètre :\n- Pour $I < I_1$ (infraliminaire pour toutes les fibres) : aucune réponse globale.\n- À $I_1$ (seuil de la fibre la plus excitable) : première réponse de faible amplitude.\n- De $I_1$ à $I_n$ : l'amplitude de la réponse globale du nerf augmente progressivement avec l'intensité du stimulus. Cette augmentation résulte du recrutement progressif d'un nombre de plus en plus élevé de fibres nerveuses dont les potentiels d'action élémentaires s'additionnent : c'est le phénomène de sommation spatiale ou recrutement des fibres.\n- Au-delà de $I_n$ (intensité maximale) : l'amplitude de la réponse globale devient constante et maximale, car toutes les fibres composant le nerf ont été excitées (saturation du recrutement).",
      keyRule: "La fibre nerveuse isolée obéit à la loi du tout ou rien (amplitude d'emblée maximale dès le seuil). Le nerf entier obéit à la loi de sommation / recrutement (amplitude croissante proportionnelle au nombre de fibres recrutées jusqu'à saturation). Chronaxie plus faible = excitabilité plus forte.",
      formulas: [
        {
          name: "Critère de mesure de l'excitabilité (Chronaxie)",
          formula: "\\text{Pour } I = 2 \\times \\text{Rhéobase} \\implies t = \\text{Chronaxie } (C)",
          note: "Excitabilité \\propto \\frac{1}{\\text{Chronaxie}}"
        }
      ],
      workedExample: {
        title: "Comparaison de l'excitabilité de deux fibres A et B",
        statement: "On mesure les paramètres d'excitabilité de deux fibres nerveuses : - Fibre A : Rhéobase = 1,2 V ; Chronaxie = 0,3 ms. - Fibre B : Rhéobase = 0,8 V ; Chronaxie = 1,2 ms. 1. Déterminer quelle fibre est la plus excitable. 2. Justifier la réponse en vous référant aux définitions officielles.",
        methodSteps: [
          "Étape 1 : Rappeler le critère de comparaison de l'excitabilité. L'excitabilité relative d'une structure nerveuse se compare principalement par sa chronaxie et non par sa seule rhéobase.",
          "Étape 2 : Comparer les chronaxies. La fibre A a une chronaxie de 0,3 ms, tandis que la fibre B a une chronaxie de 1,2 ms (0,3 ms < 1,2 ms).",
          "Étape 3 : Conclure sur l'excitabilité. Plus la chronaxie est brève, plus le temps nécessaire pour exciter la fibre à 2R est court, ce qui démontre une plus grande réactivité et une excitabilité supérieure."
        ],
        conclusion: "La fibre A est la plus excitable car sa chronaxie (0,3 ms) est nettement inférieure à celle de la fibre B (1,2 ms)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison des réponses d'une fibre isolée versus un nerf entier à des stimulations croissantes",
        tableData: {
          headers: ["Intensité de stimulation", "Fibre nerveuse isolée", "Nerf entier", "Mécanisme biologique"],
          rows: [
            ["I < Seuil (infraliminaire)", "0 mV (aucune réponse)", "0 mV (aucune réponse)", "Canaux Na+ fermés, aucun PA"],
            ["I = Seuil liminaire", "PA d'amplitude maximale (ex: 20 mV)", "PA global de faible amplitude", "Recrutement des fibres les plus excitables"],
            ["I supraliminaire croissante", "PA d'amplitude constante (toujours 20 mV)", "PA global d'amplitude croissante (20 -> 40 mV)", "Loi du tout ou rien (fibre) vs Recrutement progressif (nerf)"],
            ["I maximale de saturation", "PA d'amplitude constante (20 mV)", "PA global d'amplitude maximale constante", "Toutes les fibres du nerf sont excitées (saturation)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c02_p4_ex1",
          type: "mcq",
          prompt: "Comment définit-on la rhéobase sur une courbe d'excitabilité nerveuse ?",
          options: [
            "La plus petite intensité de stimulation capable de provoquer une réponse du nerf",
            "La durée minimale nécessaire pour qu'une intensité double déclenche un PA",
            "L'intensité maximale au-delà de laquelle le nerf est détruit par la chaleur",
            "Le potentiel d'inversion des canaux potassium"
          ],
          correctAnswerIndex: 0,
          explanation: "La rhéobase est l'intensité liminaire minimale au-dessous de laquelle aucune réponse n'est obtenue, quelle que soit la durée pendant laquelle le courant est appliqué."
        },
        {
          id: "tle_d_svt_c02_p4_ex2",
          type: "mcq",
          prompt: "La chronaxie d'un nerf sciatique est de 0,4 ms et celle d'un nerf vague est de 1,6 ms. Que peut-on en déduire ?",
          options: [
            "Le nerf sciatique est nettement plus excitable que le nerf vague",
            "Le nerf vague est quatre fois plus excitable que le nerf sciatique",
            "Les deux nerfs conduisent l'influx à la même vitesse",
            "Le nerf sciatique ne possède aucun canal sodium voltage-dépendant"
          ],
          correctAnswerIndex: 0,
          explanation: "Plus la chronaxie est petite, plus la structure nerveuse est excitable : 0,4 ms < 1,6 ms, le nerf sciatique est donc plus excitable."
        },
        {
          id: "tle_d_svt_c02_p4_ex3",
          type: "mcq",
          prompt: "Pourquoi l'amplitude du potentiel d'action d'une fibre nerveuse isolée ne varie-t-elle pas lorsqu'on augmente l'intensité au-delà du seuil ?",
          options: [
            "Parce que la fibre nerveuse isolée obéit à la loi du tout ou rien",
            "Parce que la fibre s'épuise instantanément en ATP",
            "Parce que le nerf entier empêche la sommation",
            "Parce que les canaux potassium restent bloqués"
          ],
          correctAnswerIndex: 0,
          explanation: "La fibre nerveuse isolée obéit à la loi du tout ou rien : dès que le seuil de dépolarisation est franchi, la totalité des canaux Na+ voltage-dépendants locaux s'ouvre, produisant d'emblée un PA d'amplitude maximale."
        },
        {
          id: "tle_d_svt_c02_p4_ex4",
          type: "mcq",
          prompt: "Pourquoi l'amplitude de la réponse globale d'un nerf entier augmente-t-elle avec l'intensité des stimulations ?",
          options: [
            "Par recrutement progressif d'un nombre croissant de fibres nerveuses constituant le nerf",
            "Parce que chaque fibre individuelle augmente l'amplitude de son potentiel d'action",
            "Parce que la vitesse de la lumière accélère les électrons de l'oscilloscope",
            "Parce que les synapses internes fusionnent entre elles"
          ],
          correctAnswerIndex: 0,
          explanation: "Le nerf contient des fibres ayant des seuils d'excitabilité différents. Une intensité plus forte excite un nombre plus grand de fibres : leurs potentiels d'action s'additionnent (loi de sommation / recrutement)."
        },
        {
          id: "tle_d_svt_c02_p4_ex5",
          type: "mcq",
          prompt: "Que se passe-t-il lorsque l'intensité de stimulation appliquée sur un nerf entier dépasse l'intensité maximale de saturation ?",
          options: [
            "L'amplitude du potentiel d'action global reste constante et maximale",
            "L'amplitude continue d'augmenter indéfiniment sans limite",
            "L'amplitude retombe immédiatement à zéro",
            "La réponse se transforme en un potentiel de repos oscillant"
          ],
          correctAnswerIndex: 0,
          explanation: "À l'intensité maximale de saturation, toutes les fibres composant le nerf sont déjà excitées : une intensité supérieure ne peut recruter aucune fibre supplémentaire, l'amplitude reste donc en plateau."
        },
        {
          id: "tle_d_svt_c02_p4_ex6",
          type: "mcq",
          prompt: "Que représente le temps utile sur une courbe d'excitabilité ?",
          options: [
            "Le temps d'application minimal de l'intensité égale à la rhéobase pour déclencher une réponse",
            "La durée d'inactivation de la pompe sodium-potassium",
            "Le temps nécessaire pour que l'influx atteigne le cerveau",
            "Le temps de latence mesuré entre deux stimulations"
          ],
          correctAnswerIndex: 0,
          explanation: "Le temps utile est la durée minimale d'application du courant électrique correspondant à la valeur de la rhéobase permettant d'atteindre le seuil d'excitation."
        },
        {
          id: "tle_d_svt_c02_p4_ex7",
          type: "mcq",
          prompt: "Une stimulation électrique d'intensité 3 V appliquée pendant 0,1 ms ne provoque aucune réponse d'un nerf dont la rhéobase est de 1 V et le temps utile de 1,5 ms. Où se situe ce point sur le graphique d'excitabilité ?",
          options: [
            "Dans la zone des excitations inefficaces (en dessous de la courbe d'excitabilité)",
            "Exactement sur la courbe des excitations liminaires",
            "Dans la zone des excitations de saturation supraliminaire",
            "Sur l'asymptote horizontale de la rhéobase"
          ],
          correctAnswerIndex: 0,
          explanation: "Bien que l'intensité (3 V) soit supérieure à la rhéobase (1 V), la durée (0,1 ms) est insuffisante pour ce niveau d'intensité : le point se trouve sous la courbe dans la zone des stimulations inefficaces."
        },
        {
          id: "tle_d_svt_c02_p4_ex8",
          type: "mcq",
          prompt: "Si l'on détruit mécaniquement la moitié des fibres d'un nerf sciatique, quel sera l'effet sur l'amplitude maximale de son potentiel d'action global de saturation ?",
          options: [
            "L'amplitude maximale sera divisée par environ deux",
            "L'amplitude maximale restera rigoureusement identique en vertu de la loi du tout ou rien",
            "L'amplitude maximale augmentera car les fibres restantes reçoivent plus d'énergie",
            "La durée du potentiel d'action sera multipliée par dix"
          ],
          correctAnswerIndex: 0,
          explanation: "Le PA global du nerf résulte de la sommation des PA individuels de ses fibres. Si le nombre total de fibres fonctionnelles diminue de moitié, la sommation maximale possible est diminuée d'autant."
        }
      ]
    },
    {
      id: "pt5_periodes_refractaires_vitesse_propagation",
      order: 5,
      title: "Périodes réfractaires, sens et vitesse de propagation de l'influx",
      summary: "Périodes réfractaires absolue (PRA) et relative (PRR), sens de conduction (in vivo vs in vitro) et mécanismes de propagation (courants locaux vs conduction saltatoire, formule v = Δd/Δt).",
      conceptExplanation: "La membrane d'un neurone présente une dynamique temporelle d'excitabilité et de conduction très précise.\n\n1. Périodes réfractaires après un potentiel d'action :\nLorsqu'on applique deux stimulations efficaces successives ($S_1$ et $S_2$) séparées par un intervalle de temps variable $(\\Delta t)$ :\n- Période réfractaire absolue (PRA) : si $S_2$ est appliquée très peu de temps après $S_1$ (pendant la dépolarisation ou le premier tiers de la repolarisation, durée d'environ 1 ms), aucune réponse n'est obtenue à $S_2$, quelle que soit la force du stimulus. Explication moléculaire : les canaux $Na^+$ voltage-dépendants sont totalement inactivés et ne peuvent pas s'ouvrir.\n- Période réfractaire relative (PRR) : si $S_2$ intervient pendant la fin de la repolarisation ou l'hyperpolarisation (durée de 2 à 4 ms), le nerf peut répondre, mais uniquement si l'intensité de $S_2$ est nettement supérieure au seuil habituel, et l'amplitude de la deuxième réponse est d'abord réduite avant de redevenir normale. Explication moléculaire : une partie des canaux $Na^+$ est désinactivée (redevenue activable) mais les canaux $K^+$ sont encore ouverts.\n\n2. Sens de propagation de l'influx nerveux :\n- In vitro (fibre nerveuse isolée extraite de l'organisme) : une stimulation appliquée au milieu de l'axone déclenche un potentiel d'action qui se propage de manière bidirectionnelle, vers la droite et vers la gauche, avec la même vitesse et la même amplitude.\n- In vivo (dans l'organisme vivant) : l'influx nerveux circule rigoureusement dans un seul sens (unidirectionnel ou sens orthodromique) : des dendrites vers le corps cellulaire, puis le long de l'axone jusqu'à l'arborisation terminale. Ce sens unique est imposé par la structure polarisée asymétrique des synapses chimiques et par l'état réfractaire de la membrane qui vient d'être dépolarisée (empêchant tout retour en arrière).\n\n3. Modes et vitesse de conduction de l'influx nerveux :\n- Fibres amyéliniques : la dépolarisation d'un point de la membrane engendre des différences de potentiel entre la zone active (négative en surface) et les zones adjacentes au repos (positives en surface). Des micro-courants électriques circulaires s'établissent : ce sont les courants locaux. Ils dépolarisent de proche en proche la membrane voisine jusqu'au seuil. Cette conduction est continue, pas à pas, et lente (1 à 3 m/s).\n- Fibres myélinisées : la gaine de myéline est un isolant électrique remarquable imperméable aux ions. Les canaux voltage-dépendants sont exclusivement concentrés au niveau des nœuds de Ranvier. Les courants locaux ne peuvent s'établir que d'un nœud de Ranvier au nœud suivant en sautant par-dessus le manchon de myéline : c'est la conduction saltatoire. Ce mode est beaucoup plus rapide (pouvant dépasser 100 à 120 m/s) et très économe en énergie métabolique (ATP de la pompe).\n\n4. Calcul expérimental de la vitesse de conduction :\nÀ l'aide d'un stimulateur et d'un oscilloscope à double voie enregistrant en deux points récepteurs distants $R_1$ et $R_2$ :\n- Soit $d_1$ la distance entre le stimulateur et $R_1$ avec un temps de latence $t_1$.\n- Soit $d_2$ la distance entre le stimulateur et $R_2$ avec un temps de latence $t_2$.\n- La vitesse $v$ est donnée par le rapport : $v = \\frac{\\Delta d}{\\Delta t} = \\frac{d_2 - d_1}{t_2 - t_1}$.\n- Facteurs accélérateurs : le diamètre de la fibre (la vitesse croît avec le diamètre car la résistance axoplasmique interne diminue), la température (augmente la cinétique d'ouverture des canaux) et la myélinisation.",
      keyRule: "Période réfractaire absolue (PRA) = canaux Na+ inactivés, excitabilité nulle. Conduction saltatoire (fibres myélinisées) = sauts de nœud de Ranvier en nœud de Ranvier, rapide (jusqu'à 120 m/s). Vitesse v = Δd / Δt = (d2 - d1) / (t2 - t1).",
      formulas: [
        {
          name: "Vitesse de propagation de l'influx nerveux",
          formula: "v = \\frac{\\Delta d}{\\Delta t} = \\frac{d_2 - d_1}{t_2 - t_1}",
          note: "v en m/s ; d en mètres (m) ; t en secondes (s)"
        }
      ],
      workedExample: {
        title: "Calcul de la vitesse de l'influx sur un nerf sciatique de mammifère",
        statement: "Sur un nerf de mammifère maintenu à 37 °C, deux électrodes de détection R1 et R2 sont distantes de d2 - d1 = 48 mm = 0,048 m. Le décalage temporel mesuré entre les sommets des deux potentiels d'action sur l'oscilloscope est de t2 - t1 = 0,4 ms = 0,0004 s. 1. Calculer la vitesse de conduction de ce nerf en m/s. 2. Déterminer si ce nerf est constitué de fibres myélinisées ou amyéliniques.",
        methodSteps: [
          "Étape 1 : Appliquer la formule de la vitesse : v = Δd / Δt.",
          "Étape 2 : Convertir les unités dans le Système International : Δd = 0,048 m ; Δt = 4,0.10⁻⁴ s.",
          "Étape 3 : Effectuer le calcul numérique : v = 0,048 / 0,0004 = 120 m/s.",
          "Étape 4 : Interpréter le résultat selon la classification physiologique. Une vitesse de 120 m/s est caractéristique d'une conduction saltatoire rapide le long de grosses fibres myélinisées (fibres de type A)."
        ],
        conclusion: "La vitesse de conduction est de 120 m/s ; le nerf est constitué de fibres myélinisées."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison des modes de conduction de l'influx nerveux",
        tableData: {
          headers: ["Caractéristique", "Fibre amyélinique", "Fibre myélinisée", "Facteur déterminant"],
          rows: [
            ["Mode de conduction", "Continue de proche en proche", "Saltatoire (sauts d'un nœud à l'autre)", "Présence de gaine isolante de myéline"],
            ["Sites d'échanges ioniques", "Tout au long de la membrane", "Exclusivement aux nœuds de Ranvier", "Distribution des canaux Na+ voltage-dépendants"],
            ["Vitesse moyenne", "Lente (0,5 à 3 m/s)", "Rapide (20 à 120 m/s)", "Résistance membranaire et fuites limitées"],
            ["Consommation d'ATP", "Élevée (pompage continu)", "Faible (pompage limité aux nœuds)", "Économie métabolique majeure pour l'organisme"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c02_p5_ex1",
          type: "mcq",
          prompt: "Pourquoi un axone est-il rigoureusement incapable de générer un deuxième potentiel d'action pendant sa période réfractaire absolue (PRA) ?",
          options: [
            "Parce que les canaux à Na+ voltage-dépendants sont temporairement inactivés",
            "Parce que la membrane a épuisé la totalité de ses phospholipides",
            "Parce que le potentiel d'action s'est propagé vers le corps cellulaire",
            "Parce que les ions calcium ont déserté la fente synaptique"
          ],
          correctAnswerIndex: 0,
          explanation: "Pendant la PRA, les canaux Na+ voltage-dépendants sont inactivés : leur porte d'inactivation fermée empêche toute nouvelle ouverture, quelle que soit l'intensité du stimulus."
        },
        {
          id: "tle_d_svt_c02_p5_ex2",
          type: "mcq",
          prompt: "Quelle caractéristique différencie la période réfractaire relative (PRR) de la période réfractaire absolue (PRA) ?",
          options: [
            "Pendant la PRR, une réponse peut être obtenue si l'intensité du second stimulus est supérieure au seuil habituel",
            "La PRR dure dix fois plus longtemps que le potentiel de repos",
            "Pendant la PRR, le potentiel d'action atteint une amplitude négative",
            "La PRR s'observe uniquement sur les fibres musculaires striées"
          ],
          correctAnswerIndex: 0,
          explanation: "Durant la PRR, les canaux Na+ commencent à se réactiver mais des canaux K+ restent ouverts : une stimulation supraliminaire plus forte peut déclencher un second PA."
        },
        {
          id: "tle_d_svt_c02_p5_ex3",
          type: "mcq",
          prompt: "Sur une fibre nerveuse isolée stimulée électriquement en son centre, comment se propage le message nerveux ?",
          options: [
            "De façon bidirectionnelle vers les deux extrémités de la fibre",
            "Strictement vers la droite uniquement",
            "Exclusivement en direction du corps cellulaire d'origine",
            "Il reste stationnaire sans aucune propagation"
          ],
          correctAnswerIndex: 0,
          explanation: "In vitro, une fibre isolée excitée en son milieu conduit le message dans les deux sens de part et d'autre du point d'excitation car les deux côtés sont au repos et excitables."
        },
        {
          id: "tle_d_svt_c02_p5_ex4",
          type: "mcq",
          prompt: "Pourquoi la conduction saltatoire d'une fibre myélinisée est-elle beaucoup plus rapide que la conduction continue d'une fibre amyélinique ?",
          options: [
            "Parce que la dépolarisation saute d'un nœud de Ranvier au suivant sans dépolariser les zones myélinisées intermédiaires",
            "Parce que la myéline produit directement de l'électricité statique",
            "Parce que la température de la gaine de myéline est de 100 °C",
            "Parce que le diamètre de l'axone est divisé par cent sous la myéline"
          ],
          correctAnswerIndex: 0,
          explanation: "La myéline isole l'axone ; l'influx saute d'un nœud de Ranvier au suivant, réduisant drastiquement la surface membranaire à dépolariser et accélérant considérablement la conduction."
        },
        {
          id: "tle_d_svt_c02_p5_ex5",
          type: "mcq",
          prompt: "Deux électrodes réceptrices distantes de 5 cm (0,05 m) enregistrent deux potentiels d'action décalés de 2,5 ms (0,0025 s). Quelle est la vitesse de conduction ?",
          options: [
            "20 m/s",
            "2 m/s",
            "50 m/s",
            "125 m/s"
          ],
          correctAnswerIndex: 0,
          explanation: "v = Δd / Δt = 0,05 m / 0,0025 s = 20 m/s."
        },
        {
          id: "tle_d_svt_c02_p5_ex6",
          type: "mcq",
          prompt: "Quels sont les trois facteurs principaux qui augmentent la vitesse de conduction de l'influx nerveux ?",
          options: [
            "La présence de myéline, l'augmentation du diamètre axonal et l'élévation physiologique de la température",
            "L'absence de myéline, la réduction du diamètre et le froid",
            "La longueur des dendrites, le nombre de synapses et la lumière",
            "La concentration en urée, la tension artérielle et l'acidose"
          ],
          correctAnswerIndex: 0,
          explanation: "La vitesse augmente avec la myélinisation (conduction saltatoire), l'augmentation du diamètre de la fibre (diminution de la résistance interne axoplasmique) et la température."
        },
        {
          id: "tle_d_svt_c02_p5_ex7",
          type: "mcq",
          prompt: "Dans un réflexe in vivo chez l'Homme, qu'est-ce qui empêche l'influx nerveux de rebrousser chemin le long de l'axone vers le soma après avoir été généré au cône d'implantation ?",
          options: [
            "L'état réfractaire absolu de la zone membranaire qui vient immédiatement d'être traversée par le PA",
            "La présence de valvules mécaniques à l'intérieur de l'axoplasme",
            "L'attraction magnétique exercée par les boutons synaptiques terminaux",
            "La disparition complète des ions sodium dans le soma"
          ],
          correctAnswerIndex: 0,
          explanation: "La zone qui vient d'émettre le PA se trouve en période réfractaire absolue : elle est inexcitable et ne peut pas être ré-excitée par les courants locaux rétrogades, imposant un sens unique."
        },
        {
          id: "tle_d_svt_c02_p5_ex8",
          type: "mcq",
          prompt: "Dans la sclérose en plaques, le système immunitaire détruit localement la myéline de certains axones du système nerveux central. Quelle est la conséquence physiologique directe ?",
          options: [
            "Un ralentissement drastique voire un blocage complet de la conduction saltatoire de l'influx nerveux",
            "Une accélération anormale de la vitesse de conduction dépassant 300 m/s",
            "Une transformation de toutes les synapses en jonctions musculaires",
            "Une inversion spontanée du sens de circulation du sang cérébral"
          ],
          correctAnswerIndex: 0,
          explanation: "La démyélinisation fait fuir le courant électrique à travers la membrane axonale dénudée dépourvue de canaux Na+ suffisants, provoquant un ralentissement ou un blocage de l'influx."
        }
      ]
    },
    {
      id: "pt6_transmission_synaptique_neurotransmetteurs",
      order: 6,
      title: "Transmission synaptique du message nerveux et intégration",
      summary: "Organisation ultrastructurale des synapses (neuro-neuroniques et plaque motrice), séquence en 8 étapes, potentiels postsynaptiques (PPSE vs PPSI), élimination et pharmacologie.",
      conceptExplanation: "La synapse est la zone de contact fonctionnelle spécialisée permettant la transmission unidirectionnelle du message nerveux d'un neurone présynaptique vers une autre cellule excitable (neurone postsynaptique ou fibre musculaire).\n\n1. Classification morphologique des synapses :\n- Synapses neuro-neuroniques : selon le point d'impact sur le neurone récepteur, on distingue les synapses axo-dendritiques (sur une dendrite), axo-somatiques (sur le corps cellulaire) et axo-axoniques (sur l'axone ou le bouton d'un autre neurone, rôle modulateur).\n- Jonction neuro-musculaire ou plaque motrice : zone de contact entre la terminaison d'un motoneurone et la membrane repliée (appareil sous-neural) d'une fibre musculaire striée squelettique.\n\n2. Ultrastructure synaptique :\nToute synapse chimique comporte trois éléments anatomiques indissociables :\n- L'élément présynaptique : extrémité renflée de l'axone (bouton synaptique) contenant de nombreuses mitochondries et des vésicules synaptiques remplies de molécules de neurotransmetteur (ou médiateur chimique, ex : acétylcholine, GABA, glutamate, dopamine).\n- La fente synaptique : espace extracellulaire étroit de 20 à 30 nanomètres séparant les deux membranes.\n- L'élément postsynaptique : membrane de la cellule cible dépourvue de vésicules, mais portant une grande densité de récepteurs spécifiques chimiodépendants.\n\n3. Les 8 étapes chronologiques de la transmission synaptique :\n- Étape 1 : Arrivée du potentiel d'action (dépolarisation) au niveau du bouton présynaptique.\n- Étape 2 : Dépolarisation membranaire qui provoque l'ouverture des canaux $Ca^{2+}$ voltage-dépendants et l'entrée massive d'ions $Ca^{2+}$ dans le bouton synaptique.\n- Étape 3 : L'élévation de $[Ca^{2+}]_{\\text{int}}$ déclenche la migration et la fusion des vésicules synaptiques avec la membrane présynaptique, libérant le neurotransmetteur par exocytose dans la fente synaptique.\n- Étape 4 : Diffusion du neurotransmetteur à travers la fente et fixation spécifique sur les récepteurs de la membrane postsynaptique.\n- Étape 5 : La fixation ligand-récepteur déclenche l'ouverture de canaux ioniques chimiodépendants.\n- Étape 6 : Flux ionique postsynaptique et naissance d'un potentiel postsynaptique (PPS) :\n  * Synapse excitatrice (ex: acétylcholine, glutamate) : ouverture de canaux à $Na^+ \\to$ entrée massive d'ions $Na^+ \\to$ dépolarisation locale appelée Potentiel Postsynaptique Excitateur (PPSE). Si la sommation des PPSE franchit le seuil du cône d'implantation, un potentiel d'action postsynaptique est émis.\n  * Synapse inhibitrice (ex: GABA, glycine) : ouverture de canaux à $Cl^-$ (entrée de $Cl^-$) ou canaux à $K^+$ (sortie de $K^+) \\to$ hyperpolarisation locale appelée Potentiel Postsynaptique Inhibiteur (PPSI), qui éloigne le potentiel du seuil et bloque l'émission de PA.\n- Étape 7 : Inactivation rapide du neurotransmetteur dans la fente : dégradation enzymatique (ex : l'acétylcholinestérase hydrolyse l'acétylcholine en acétate + choline) ou recapture.\n- Étape 8 : Recapture des précurseurs (ex : choline) par endocytose dans le bouton présynaptique pour la resynthèse de nouvelles vésicules de neurotransmetteur.\n\n4. Pharmacologie et poisons synaptiques :\n- Le curare se fixe sur les récepteurs à l'acétylcholine de la plaque motrice sans ouvrir les canaux : blocage compétitif entraînant la paralysie musculaire flasque.\n- Les organophosphorés (insecticides, gaz sarin) bloquent l'acétylcholinestérase : l'acétylcholine n'est plus détruite, provoquant une tétanie musculaire convulsive permanente.\n- La morphine se fixe sur les récepteurs opiacés présynaptiques des voies de la douleur dans la corne dorsale de la moelle épinière, bloquant l'entrée de $Ca^{2+}$ et empêchant la libération de substance P (effet analgésique puissant).",
      keyRule: "L'arrivée du PA présynaptique déclenche l'entrée de Ca2+, provoquant l'exocytose du neurotransmetteur. L'ouverture de canaux Na+ chimiodépendants crée un PPSE (dépolarisation excitatrice) ; l'ouverture de canaux Cl- crée un PPSI (hyperpolarisation inhibitrice). L'inactivation enzymatique stoppe le signal.",
      formulas: [
        {
          name: "Hydrolyse synaptique de l'acétylcholine",
          formula: "\\text{Acétylcholine} + \\text{H}_2\\text{O} \\xrightarrow{\\text{Acétylcholinestérase}} \\text{Acétate} + \\text{Choline}",
          note: "Arrête la stimulation de la membrane postsynaptique et permet la recapture"
        }
      ],
      workedExample: {
        title: "Intégration neuronale : sommation d'un PPSE et d'un PPSI",
        statement: "Un neurone moteur spinal reçoit simultanément deux stimulations au niveau de son corps cellulaire : - Synapse 1 (excitatrice) : produit un PPSE d'amplitude +15 mV. - Synapse 2 (inhibitrice) : produit un PPSI d'amplitude -10 mV. Le potentiel de repos est de -70 mV et le seuil d'émission du PA au cône axonique est de -50 mV. Déterminer si un potentiel d'action sera déclenché dans l'axone du motoneurone.",
        methodSteps: [
          "Étape 1 : Calculer le potentiel résultant de la sommation algébrique spatiale des potentiels postsynaptiques au niveau du soma : V_résultant = V_repos + PPSE + PPSI.",
          "Étape 2 : Remplacer par les valeurs numériques : V_résultant = -70 mV + (+15 mV) + (-10 mV) = -70 mV + 5 mV = -65 mV.",
          "Étape 3 : Comparer le potentiel résultant avec le seuil d'excitabilité : Le seuil critique de déclenchement d'un potentiel d'action est de -50 mV.",
          "Étape 4 : Conclure sur le déclenchement du PA : -65 mV reste en dessous du seuil de -50 mV (dépolarisation insuffisante de 5 mV au lieu des 20 mV nécessaires). Aucun potentiel d'action n'est donc émis."
        ],
        conclusion: "Le potentiel résultant (-65 mV) n'atteint pas le seuil critique (-50 mV) : le motoneurone reste silencieux et n'émet aucun PA."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Chronologie synaptique et comparaison PPSE / PPSI",
        tableData: {
          headers: ["Type de synapse", "Neurotransmetteur type", "Canal postsynaptique activé", "Flux ionique déclenché", "Effet électrique postsynaptique"],
          rows: [
            ["Synapse excitatrice", "Acétylcholine, Glutamate", "Canal à Na+ chimiodépendant", "Entrée massive de Na+", "Dépolarisation locale = PPSE (stimule l'émission de PA)"],
            ["Synapse inhibitrice", "GABA, Glycine", "Canal à Cl- chimiodépendant", "Entrée de Cl- (ou sortie de K+)", "Hyperpolarisation locale = PPSI (freine l'émission de PA)"],
            ["Inactivation", "Acétylcholinestérase", "Fente synaptique", "Hydrolyse rapide en acétate + choline", "Fin du signal, prévention de la désensibilisation"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c02_p6_ex1",
          type: "mcq",
          prompt: "Quel ion déclenche directement l'exocytose des vésicules de neurotransmetteur lorsqu'il pénètre dans le bouton présynaptique ?",
          options: [
            "L'ion calcium (Ca2+)",
            "L'ion chlore (Cl-)",
            "L'ion potassium (K+)",
            "L'ion magnésium (Mg2+)"
          ],
          correctAnswerIndex: 0,
          explanation: "La dépolarisation présynaptique ouvre les canaux Ca2+ voltage-dépendants : l'entrée massive d'ions Ca2+ déclenche la fusion des vésicules synaptiques avec la membrane présynaptique."
        },
        {
          id: "tle_d_svt_c02_p6_ex2",
          type: "mcq",
          prompt: "Quelle est la nature électrique d'un Potentiel Postsynaptique Excitateur (PPSE) ?",
          options: [
            "Une dépolarisation locale résultant de l'entrée d'ions Na+ par des canaux chimiodépendants",
            "Une hyperpolarisation provoquée par la sortie de calcium",
            "Un potentiel d'action propageable de +100 mV d'amplitude fixe",
            "Une annulation définitive du potentiel de membrane à 0 mV"
          ],
          correctAnswerIndex: 0,
          explanation: "Un PPSE est une dépolarisation locale non propageable provoquée par l'entrée d'ions Na+ consécutive à l'ouverture de canaux ioniques activés par le neurotransmetteur excitateur."
        },
        {
          id: "tle_d_svt_c02_p6_ex3",
          type: "mcq",
          prompt: "Comment qualifie-t-on la synapse lorsque la fixation du neurotransmetteur provoque l'entrée d'ions Cl- et une hyperpolarisation de la membrane postsynaptique ?",
          options: [
            "Synapse inhibitrice produisant un PPSI",
            "Synapse excitatrice produisant un PPSE",
            "Synapse neuromusculaire produisant une secousse",
            "Synapse électrique bidirectionnelle"
          ],
          correctAnswerIndex: 0,
          explanation: "L'entrée d'ions négatifs Cl- hyperpolarise la membrane postsynaptique, l'éloignant du seuil d'excitation : c'est un Potentiel Postsynaptique Inhibiteur (PPSI) propre aux synapses inhibitrices (ex: GABA)."
        },
        {
          id: "tle_d_svt_c02_p6_ex4",
          type: "mcq",
          prompt: "Quel est le rôle fondamental de l'acétylcholinestérase dans la fente synaptique de la plaque motrice ?",
          options: [
            "Hydrolyser l'acétylcholine pour interrompre la stimulation et permettre la relaxation musculaire",
            "Activer la synthèse d'ATP dans les vésicules présynaptiques",
            "Transporter les ions calcium à l'intérieur de la fibre musculaire",
            "Bloquer les récepteurs nicotiniques postsynaptiques"
          ],
          correctAnswerIndex: 0,
          explanation: "L'acétylcholinestérase détruit immédiatement l'acétylcholine en acétate et choline, mettant fin à la dépolarisation et évitant une contraction musculaire permanente."
        },
        {
          id: "tle_d_svt_c02_p6_ex5",
          type: "mcq",
          prompt: "Le curare est une substance qui bloque les récepteurs de l'acétylcholine sur la membrane de la plaque motrice sans ouvrir les canaux à sodium. Quel est son effet ?",
          options: [
            "Il empêche la dépolarisation postsynaptique et provoque une paralysie musculaire flasque",
            "Il déclenche des convulsions musculaires violentes et continues",
            "Il accélère la dégradation enzymatique de l'acétylcholine",
            "Il détruit les fibres nerveuses sensitives dans la moelle épinière"
          ],
          correctAnswerIndex: 0,
          explanation: "En occupant les récepteurs sans activer les canaux Na+, le curare empêche l'acétylcholine d'agir : aucun PPSE n'est généré et le muscle ne peut plus se contracter (paralysie)."
        },
        {
          id: "tle_d_svt_c02_p6_ex6",
          type: "mcq",
          prompt: "Pourquoi la transmission du message à travers une synapse chimique est-elle strictement UNIDIRECTIONNELLE ?",
          options: [
            "Parce que les vésicules de neurotransmetteur sont exclusivement situées dans l'élément présynaptique et les récepteurs dans l'élément postsynaptique",
            "Parce que le potentiel d'action se déplace plus vite que la lumière",
            "Parce que la fente synaptique est fermée par une membrane de myéline",
            "Parce que les ions calcium ne peuvent pas circuler vers l'arrière"
          ],
          correctAnswerIndex: 0,
          explanation: "La dissymétrie structurale impose le sens unique : seul l'élément présynaptique possède le stock de médiateur chimique, et seul l'élément postsynaptique possède les récepteurs adaptés."
        },
        {
          id: "tle_d_svt_c02_p6_ex7",
          type: "mcq",
          prompt: "Sur une préparation de laboratoire, on applique de la morphine au niveau d'une synapse véhiculant la douleur dans la moelle épinière. Que constate-t-on ?",
          options: [
            "Une diminution drastique de la libération de neurotransmetteur algogène et l'atténuation de la douleur",
            "Une augmentation explosive des potentiels postsynaptiques excitateurs",
            "La contraction immédiate de tous les muscles squelettiques",
            "La nécrose instantanée des corps cellulaires spinaux"
          ],
          correctAnswerIndex: 0,
          explanation: "La morphine se fixe sur les récepteurs opiacés présynaptiques, inhibant l'entrée de Ca2+ et bloquant la libération de neurotransmetteurs de la douleur (comme la substance P)."
        },
        {
          id: "tle_d_svt_c02_p6_ex8",
          type: "mcq",
          prompt: "Quelle structure du neurone effectue la sommation spatio-temporelle des potentiels postsynaptiques (PPSE et PPSI) pour décider de l'émission d'un potentiel d'action ?",
          options: [
            "Le cône d'implantation de l'axone (zone gâchette)",
            "L'extrémité distale des boutons synaptiques",
            "L'endonèvre fasciculaire",
            "La gaine de Schwann périnerveuse"
          ],
          correctAnswerIndex: 0,
          explanation: "Le cône d'implantation possède la plus forte densité de canaux Na+ voltage-dépendants et le seuil d'excitabilité le plus bas : c'est là que la sommation algébrique des PPS déclenche ou non le PA."
        }
      ]
    }
  ]
};

