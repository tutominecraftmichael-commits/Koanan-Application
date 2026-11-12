import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L08_DEVENIR_CELLULES_SEXUELLES: CurriculumChapter = {
  id: "terminale_d_svt_ch10_devenir_cellules_sexuelles_mammiferes",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 10,
  title: "Le devenir des cellules sexuelles chez les mammifères (Fécondation, segmentation, migration et nidation)",
  summary: "Étude complète du devenir des gamètes chez les mammifères selon le programme officiel de Côte d'Ivoire : migration et sélection tubaire des gamètes, capacitation épididymaire et utérine des spermatozoïdes, réaction acrosomique, pénétration monospérmique et réaction corticale anti-polyspermie, reprise de la méiose II et émission du 2e globule polaire, caryogamie (amphimixie), segmentation de la cellule-œuf (morula, blastocyste), migration tubaire, nidation trophoblastique dans la dentelle utérine et sécrétion précoce de l'HCG.",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_migration_capacitation_selection_gametes",
      order: 1,
      title: "Migration, sélection et capacitation des gamètes",
      summary: "Transit de l'ovocyte II vers l'ampoule tubaire, sélection draconienne des spermatozoïdes par la glaire cervicale et acquisition du pouvoir fécondant par capacitation utéro-tubaire.",
      conceptExplanation: "Chez les mammifères, la rencontre des gamètes n'est pas immédiate : elle exige une migration active et orientée, ainsi qu'une maturation physiologique rigoureuse.\n\n1. Migration du gamète femelle (ovocyte II) :\n- Expulsion : Lors de l'ovulation, l'ovocyte II bloqué en métaphase II est expulsé hors du follicule mûr déhiscent.\n- Captage : Les franges du pavillon de la trompe de Fallope (oviducte) captent l'ovocyte entouré de sa zone pellucide et de cellules folliculaires (corona radiata).\n- Transit vers l'ampoule tubaire : L'ovocyte chemine dans le tiers supérieur de la trompe grâce à deux mécanismes moteurs synchronisés :\n  * Les battements coordonnés des cils vibratiles de l'épithélium tubaire ;\n  * Les contractions péristaltiques des fibres musculaires lisses de la paroi de la trompe.\n- Durée de vie utile : L'ovocyte II séjourne environ 48 à 72 heures au niveau de l'ampoule tubaire où il attend les spermatozoïdes.\n\n2. Migration et sélection draconienne des spermatozoïdes :\n- Émission : Lors du coït, 100 à 400 millions de spermatozoïdes sont déposés dans le cul-de-sac vaginal (chez l'Homme et la majorité des mammifères) ou directement dans l'utérus (rongeurs, truie).\n- Filtre cervical (Glaire cervicale) : Au niveau du col utérin, le maillage glycoprotéique de la glaire et l'acidité vaginale détruisent plus de 99 % des spermatozoïdes (anormaux, immobiles ou sénescents).\n- Propulsion utéro-tubaire : Les quelques centaines de milliers de spermatozoïdes survivants traversent la cavité utérine grâce aux mouvements de leur flagelle et aux contractions myométriales induites par les prostaglandines du sperme et l'ocytocine féminine.\n- Deuxième filtre : Le sphincter de la jonction utéro-tubaire réduit encore le contingent : seuls quelques centaines de spermatozoïdes parviennent à l'ampoule tubaire.\n\n3. La capacitation des spermatozoïdes :\n- Définition : Les spermatozoïdes stockés dans l'épididyme sont munis d'un manteau de glycoprotéines protectrices qui inhibe leur pouvoir fécondant.\n- Mécanisme : Au contact des sécrétions enzymatiques du tractus génital féminin (utérus et trompes), cet enduit protéique superficiel est décapé et la membrane plasmique de la tête spermatique devient fluide (lessivage du cholestérol membranaire).\n- Conséquences : Le spermatozoïde acquiert une hypermotilité vigoureuse (mouvements flagellaires en fouet) et la capacité d'accomplir la réaction acrosomique indispensable pour traverser la zone pellucide.",
      keyRule: "L'ovocyte expulsé est un ovocyte II bloqué en métaphase II. La glaire cervicale élimine 99% des spermatozoïdes. La capacitation dans les voies génitales femelles confère le pouvoir fécondant et l'aptitude à la réaction acrosomique.",
      formulas: [
        {
          name: "Sélection des gamètes mâles",
          formula: "\\text{Taux d'élimination cervicale} > 99\\% \\quad (\\approx 200\\text{ à }1000\\text{ survivants dans l'ampoule})",
          note: "Glaire cervicale + acidité vaginale = barrière protectrice et sélective majeure"
        }
      ],
      workedExample: {
        title: "Calcul du rendement de la migration spermatique chez la femme",
        statement: "Lors d'une éjaculation normale, un homme dépose 300 millions de spermatozoïdes dans le vagin. À l'entrée de l'ampoule tubaire, on ne dénombre qu'environ 300 spermatozoïdes viables et capacités. 1. Calculer le pourcentage de spermatozoïdes parvenus au lieu de fécondation. 2. Indiquer les deux barrières anatomiques et physiologiques responsables de cette réduction.",
        methodSteps: [
          "Étape 1 : Calculer le pourcentage de survie. Taux = (300 / 300 000 000) × 100 = 0,0001 % (soit un sur un million).",
          "Étape 2 : Identifier la première barrière : le col utérin avec sa glaire cervicale et le pH acide du vagin, qui bloquent et lysent 99 % des spermatozoïdes anormaux ou lents.",
          "Étape 3 : Identifier la deuxième barrière : la traversée de la cavité utérine et le passage étroit du sphincter de la jonction utéro-tubaire, où l'épuisement métabolique et les macrophages éliminent la quasi-totalité du reste."
        ],
        conclusion: "Seulement 0,0001 % des spermatozoïdes atteignent l'ampoule tubaire, garantissant une sélection extrême des gamètes les plus vigoureux."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Trajet et sélection des gamètes dans l'appareil génital féminin",
        tableData: {
          headers: ["Étape anatomique", "Gamète concerné", "Événement physiologique", "Conséquence biologique"],
          rows: [
            ["Pavillon de la trompe", "Ovocyte II", "Captage à l'ovulation", "Aspiration vers la lumière tubaire par les cils"],
            ["Ampoule tubaire (tiers sup.)", "Ovocyte II & Spz", "Rencontre des gamètes", "Lieu précis et exclusif de la fécondation"],
            ["Col utérin (glaire cervicale)", "Spermatozoïdes", "Filtration sélective", "Élimination de plus de 99 % des spermatozoïdes"],
            ["Cavité utérine & trompes", "Spermatozoïdes", "Capacitation enzymatique", "Décapage de l'enduit protéique, hypermotilité"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c10_p1_ex1",
          type: "mcq",
          prompt: "Dans l'appareil génital féminin, à quel niveau précis s'effectue normalement la fécondation chez l'Homme et les mammifères ?",
          options: [
            "Dans le tiers supérieur de la trompe de Fallope (ampoule tubaire)",
            "Directement à la surface de l'ovaire au moment de l'expulsion",
            "Dans la cavité utérine au contact de la dentelle utérine",
            "Au niveau du canal cervical en traversant la glaire"
          ],
          correctAnswerIndex: 0,
          explanation: "La fécondation se produit impérativement dans le tiers supérieur de la trompe de Fallope (l'ampoule tubaire). L'ovocyte y est maintenu par les cils vibratiles et attend les spermatozoïdes capacités."
        },
        {
          id: "tle_d_svt_c10_p1_ex2",
          type: "mcq",
          prompt: "En quoi consiste la capacitation des spermatozoïdes et où se déroule-t-elle principalement ?",
          options: [
            "En une multiplication mitotique au sein de la prostate",
            "En un décapage de l'enduit protéique superficiel dans les voies génitales femelles, rendant le spermatozoïde apte à la réaction acrosomique",
            "En l'acquisition de la queue flagellaire dans la lumière du tube séminifère",
            "En la perte du noyau haploïde au profit d'un noyau diploïde"
          ],
          correctAnswerIndex: 1,
          explanation: "La capacitation correspond au retrait du manteau glycoprotéique épididymaire inhibiteur par les sécrétions utéro-tubaires de la femelle, fluidifiant la membrane de la tête et conférant au spermatozoïde son plein pouvoir fécondant."
        },
        {
          id: "tle_d_svt_c10_p1_ex3",
          type: "mcq",
          prompt: "Quel rôle physiologique majeur joue la glaire cervicale lors de la migration des gamètes mâles ?",
          options: [
            "Elle attire tous les spermatozoïdes sans exception vers la vessie",
            "Elle stimule la méiose des spermatozoïdes",
            "Elle élimine plus de 99 % des spermatozoïdes (malformés, peu mobiles) et ne laisse passer que les plus vigoureux",
            "Elle neutralise définitivement la motilité de tous les flagelles"
          ],
          correctAnswerIndex: 2,
          explanation: "La glaire cervicale constitue le premier filtre sélectif : elle élimine la quasi-totalité des spermatozoïdes atypiques, sénescents ou peu vigoureux, protégeant ainsi l'utérus et sélectionnant les gamètes d'élite."
        },
        {
          id: "tle_d_svt_c10_p1_ex4",
          type: "mcq",
          prompt: "Comment l'ovocyte II, dépourvu d'organite de locomotion propre, parvient-il à migrer de l'ovaire vers l'ampoule tubaire ?",
          options: [
            "Grâce à des cils vibratiles de l'épithélium tubaire et aux contractions péristaltiques de la trompe",
            "Par l'aspiration créée par les battements du myocarde",
            "Par les flagelles des spermatozoïdes qui le tirent en avant",
            "Par un flux gazeux continu provenant de la cavité abdominale"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ovocyte II progresse dans l'oviducte grâce à l'action combinée des contractions musculaires de la paroi tubaire et des battements orientés des cils vibratiles de la muqueuse."
        },
        {
          id: "tle_d_svt_c10_p1_ex5",
          type: "mcq",
          prompt: "Combien de temps l'ovocyte II conserve-t-il sa capacité à être fécondé après l'ovulation ?",
          options: [
            "Environ 24 à 48 heures (au maximum 72 heures selon les espèces)",
            "Strictement 10 minutes",
            "Près de 28 jours",
            "Jusqu'à la ménopause"
          ],
          correctAnswerIndex: 0,
          explanation: "La survie d'un ovocyte II apte à être fécondé est brève : de 24 à 48 heures (maximum 72 heures). Passé ce délai, il dégénère et subit l'autolyse par les macrophages tubaires."
        },
        {
          id: "tle_d_svt_c10_p1_ex6",
          type: "mcq",
          prompt: "À quel stade précis de division nucléaire se trouve le gamète femelle lors de la rencontre avec les spermatozoïdes dans l'ampoule ?",
          options: [
            "Cellule diploïde à 46 chromosomes en anaphase I",
            "Ovule mûr avec émission déjà faite des deux globules polaires",
            "Ovocyte II bloqué en métaphase de la 2e division de méiose (métaphase II)",
            "Follicule primordial contenant une ovogonie"
          ],
          correctAnswerIndex: 2,
          explanation: "Au moment de la rencontre, le gamète femelle n'a pas achevé sa méiose : c'est un ovocyte II bloqué en métaphase II, flanqué de son premier globule polaire sous la zone pellucide."
        }
      ]
    },
    {
      id: "pt2_etapes_fecondation_caryogamie",
      order: 2,
      title: "La fécondation : Réaction acrosomique, activation et caryogamie",
      summary: "Reconnaissance de la zone pellucide, réaction acrosomique, pénétration, réaction corticale anti-polyspermie, reprise de méiose II (émission 2e globule polaire) et amphimixie rétablissant la diploïdie.",
      conceptExplanation: "La fécondation est l'union intime et irréversible de deux cellules haploïdes pour reconstituer l'équipement chromosomique diploïde caractéristique de l'espèce.\n\n1. Reconnaissance et réaction acrosomique :\n- Accolement : Plusieurs dizaines de spermatozoïdes capacités traversent la corona radiata et se lient aux récepteurs glycoprotéiques (ZP3) de la zone pellucide ovocytaire.\n- Réaction acrosomique : La liaison déclenche une entrée massive d'ions Ca²⁺ dans le spermatozoïde, provoquant l'exocytose de la vésicule acrosomiale.\n- Traversée enzymatique : Les enzymes lytiques (notamment la hyaluronidase et l'acrosine) digèrent localement la zone pellucide. Grâce aux poussées vigoureuses de son flagelle, un spermatozoïde traverse cette matrice gélatineuse et atteint l'espace péri-ovocytaire.\n\n2. Fusion membranaire et activation de l'ovocyte II :\n- Fusion : La membrane plasmique post-acrosomiale du spermatozoïde fusionne avec la membrane plasmique de l'ovocyte II.\n- Pénétration : Le noyau et le centriole proximal du spermatozoïde pénètrent dans le cytoplasme ovocytaire ; le flagelle et la pièce intermédiaire (mitochondries) restent en dehors ou dégénèrent.\n- Activation ovocytaire immédiate :\n  * Réaction corticale (blocage de la polyspermie) : Une vague d'ions Ca²⁺ intracellulaire provoque l'exocytose des granules corticaux situés sous la membrane plasmique ovocytaire. Leurs enzymes modifient irréversiblement les récepteurs ZP3 et durcissent la zone pellucide en une véritable membrane de fécondation imperméable à tout autre spermatozoïde.\n  * Reprise de la méiose II : Le réveil métabolique de l'ovocyte débloque la métaphase II. L'anaphase II et la télophase II s'achèvent par l'expulsion du deuxième globule polaire (contenant un lot haploïde n=23 et presque aucun cytoplasme). L'ovocyte II devient alors enfin un ovule mûr.\n\n3. Caryogamie (Amphimixie) :\n- Formation des pronucléus :\n  * Le noyau de l'ovule se reconstitue, gonfle et se réhydrate pour former le pronucléus femelle (n = 23 chromosomes à une chromatide).\n  * Le noyau du spermatozoïde décondense sa chromatine, remplace ses protamines par des histones, gonfle considérablement et forme le pronucléus mâle (n = 23 chromosomes).\n- Synthèse d'ADN : Chacun des deux pronucléus réplique son ADN (phase S) : les chromosomes passent de 1 à 2 chromatides sœurs.\n- Rapprochement et fusion : Guidés par le réseau de microtubules rayonnant du centriole spermatique (aster), les deux pronucléus migrent vers le centre de la cellule.\n- Amphimixie : Leurs membranes nucléaires respectives se résorbent. Les chromosomes paternels et maternels s'apparient sur la plaque équatoriale de la toute première mitose de segmentation. La cellule-œuf (zygote diploïde 2n) est constituée.",
      keyRule: "La réaction corticale durcit la zone pellucide en membrane de fécondation et bloque la polyspermie. L'activation spermatique déclenche l'expulsion du 2e globule polaire. La caryogamie est la fusion des pronucléus rétablissant 2n chromosomes.",
      formulas: [
        {
          name: "Rétablissement de la diploïdie par fécondation",
          formula: "\\text{Pronucléus mâle (n = 23)} + \\text{Pronucléus femelle (n = 23)} \\longrightarrow \\text{Cellule-œuf / Zygote (2n = 46 chromosomes)}",
          note: "Reconstitution du caryotype diploïde de l'espèce humaine"
        }
      ],
      workedExample: {
        title: "Interprétation de la présence de deux globules polaires",
        statement: "Dans une expérience de fécondation in vitro chez le lapin, un biologiste observe sous le microscope optique un ovocyte entouré de spermatozoïdes. Dans l'espace péri-ovocytaire situé sous la zone pellucide, il identifie deux petits corpuscules sphériques distincts. 1. Nommer ces deux corpuscules. 2. Déduire si la pénétration spermatique a déjà eu lieu ou non, en justifiant précisément.",
        methodSteps: [
          "Étape 1 : Identifier les corpuscules. Il s'agit du 1er globule polaire (émis à la fin de la 1re division de méiose juste avant l'ovulation) et du 2e globule polaire.",
          "Étape 2 : Justifier la présence du 2e globule polaire. L'ovocyte II expulsé était bloqué en métaphase II. Seule la pénétration du spermatozoïde et l'élévation du Ca²⁺ cytosolique débloquent la méiose II et provoquent l'anaphase/télophase II.",
          "Étape 3 : Conclure sur la pénétration. L'émission du 2e globule polaire prouve de façon irréfutable que la membrane spermatique a fusionné avec celle de l'ovocyte et que l'activation ovocytaire a commencé."
        ],
        conclusion: "La pénétration spermatique a effectivement eu lieu : elle a permis l'achèvement de la méiose II et l'expulsion du 2e globule polaire."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Chronologie cytologique de la fécondation",
        tableData: {
          headers: ["Phase", "Acteurs cellulaires", "Mécanisme clé", "Conséquence immédiate"],
          rows: [
            ["1. Traversée pellucide", "Acrosome du spz & ZP3", "Réaction acrosomique", "Digestion locale de la zone pellucide par acrosine"],
            ["2. Réaction corticale", "Granules corticaux de l'ovocyte", "Exocytose sous membrane", "Création membrane de fécondation anti-polyspermie"],
            ["3. Achèvement méiose", "Noyau ovocytaire bloqué", "Reprise métaphase II", "Expulsion du 2e globule polaire, ovocyte devient ovule"],
            ["4. Caryogamie", "Pronucléus mâle & femelle", "Amphimixie centrale", "Zygote diploïde 2n prêt pour la 1re mitose"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c10_p2_ex1",
          type: "mcq",
          prompt: "Quel est le déclencheur et la fonction principale de la réaction acrosomique du spermatozoïde ?",
          options: [
            "La fixation aux glycoprotéines de la zone pellucide, permettant la libération d'enzymes lytiques qui percent un passage vers l'ovocyte",
            "La baisse de température dans le vagin pour déclencher la division mitotique",
            "La fusion des deux pronucléus dans le noyau",
            "La production de testostérone pour immobiliser les globules polaires"
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction acrosomique est provoquée par le contact avec la zone pellucide (ZP3) : les enzymes hydrolytiques libérées digèrent la matrice glycoprotéique, permettant au spermatozoïde de franchir l'enveloppe protectrice."
        },
        {
          id: "tle_d_svt_c10_p2_ex2",
          type: "mcq",
          prompt: "Par quel mécanisme cytologique rigoureux l'ovocyte fécondé empêche-t-il la polyspermie (pénétration de plusieurs spermatozoïdes) ?",
          options: [
            "Par exocytose des granules corticaux durcissant la zone pellucide en membrane de fécondation",
            "Par sécrétion massive de progestérone dans la circulation sanguine",
            "En absorbant immédiatement l'utérus tout entier",
            "En rétractant tous ses cils vibratiles"
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction corticale consiste en l'exocytose du contenu des granules corticaux dans l'espace péri-ovocytaire. Ces enzymes modifient les protéines pellucides, empêchant tout spermatozoïde supplémentaire de s'attacher ou de pénétrer."
        },
        {
          id: "tle_d_svt_c10_p2_ex3",
          type: "mcq",
          prompt: "Que signifie concrètement sur le plan biologique l'expulsion du 2e globule polaire par la cellule reproductrice femelle ?",
          options: [
            "L'échec de la fécondation et le déclenchement immédiat des règles",
            "L'achèvement complet de la deuxième division de méiose par l'ovocyte sous l'effet de l'activation spermatique",
            "La destruction du noyau maternel",
            "La transformation de l'ovocyte en cellule cancéreuse"
          ],
          correctAnswerIndex: 1,
          explanation: "L'ovocyte II est bloqué en métaphase II. La pénétration du spermatozoïde active l'ovocyte, déclenchant l'anaphase II, la télophase II et l'expulsion du 2e globule polaire : la méiose est enfin terminée."
        },
        {
          id: "tle_d_svt_c10_p2_ex4",
          type: "mcq",
          prompt: "Qu'appelle-t-on exactement caryogamie ou amphimixie lors de la fécondation ?",
          options: [
            "La synthèse de la glaire cervicale au niveau du col utérin",
            "L'accolement physique du flagelle sur la corona radiata",
            "La fusion des pronucléus mâle et femelle conduisant à la réunion des patrimoines génétiques parentaux dans le zygote diploïde",
            "La première contraction des trompes de Fallope"
          ],
          correctAnswerIndex: 2,
          explanation: "La caryogamie (ou amphimixie) est la fusion des pronucléus mâle et femelle, rétablissant la diploïdie (2n) de l'espèce et marquant la constitution génétique définitive de la cellule-œuf."
        },
        {
          id: "tle_d_svt_c10_p2_ex5",
          type: "mcq",
          prompt: "Lors de la pénétration du spermatozoïde dans l'ovocyte, que deviennent le flagelle et les mitochondries spermatiques ?",
          options: [
            "Ils pénètrent tous et forment le système nerveux de l'embryon",
            "Ils restent à l'extérieur de l'ovocyte ou sont rapidement détruits dans le cytoplasme ovocytaire, l'ADN mitochondrial étant transmis quasi exclusivement par la mère",
            "Ils se transforment immédiatement en chromosomes surnuméraires",
            "Ils s'associent aux globules blancs pour fabriquer du pus"
          ],
          correctAnswerIndex: 1,
          explanation: "Le flagelle et la pièce intermédiaire contenant les mitochondries paternelles dégénèrent rapidement dans le cytoplasme ovocytaire ou ne pénètrent pas, expliquant l'hérédité strictement maternelle de l'ADN mitochondrial."
        },
        {
          id: "tle_d_svt_c10_p2_ex6",
          type: "mcq",
          prompt: "Sur une préparation microscopique d'ovocyte post-fécondation, quel indice cytologique prouve irréfutablement la pénétration spermatique réussie ?",
          options: [
            "La présence de deux globules polaires visibles dans l'espace péri-ovocytaire et de deux pronucléus",
            "La disparition de toute membrane plasmique",
            "L'absence totale de noyau dans le cytoplasme",
            "La présence d'un flagelle attaché au pavillon"
          ],
          correctAnswerIndex: 0,
          explanation: "L'émission du 2e globule polaire (qui s'ajoute au 1er) et le gonflement des deux pronucléus (mâle et femelle) signent indubitablement que la pénétration spermatique et l'activation ovocytaire ont eu lieu."
        }
      ]
    },
    {
      id: "pt3_segmentation_migration_morula_blastocyste",
      order: 3,
      title: "Segmentation et migration tubaire de la cellule-œuf",
      summary: "Mitoses de segmentation sans croissance volumique, formation de la morula à J4, différenciation du blastocyste (trophoblaste et bouton embryonnaire) et éclosion hors de la zone pellucide.",
      conceptExplanation: "Après la caryogamie, le zygote unicellulaire entame immédiatement une série de divisions cellulaires accélérées tout en descendant le long de la trompe vers la cavité utérine.\n\n1. Caractéristiques fondamentales de la segmentation :\n- Mitoses successives sans croissance : Les divisions cellulaires s'enchaînent sans interphase de croissance cellulaire G1/G2 ; le volume total de l'embryon n'augmente pas et reste confiné à l'intérieur de la zone pellucide rigide.\n- Blastocystes / Blastomères : Les cellules filles issues de ces divisions sont appelées blastomères. À chaque mitose, la taille unitaire des cellules diminue de moitié.\n- Chronologie des stades :\n  * Jour 1 (J1) : Stade 2 blastomères (environ 24 à 30 heures après fécondation).\n  * Jour 2 (J2) : Stade 4 blastomères (environ 40 à 50 heures).\n  * Jour 3 (J3) : Stade 8 blastomères, puis compactage cellulaire (adhérence forte par jonctions serrées).\n  * Jour 4 (J4) : Stade morula (16 à 64 cellules), petite sphère dense ressemblant à une mûre.\n\n2. Formation du blastocyste (Jour 5 - Jour 6) :\n- Cavitation : Au 4e ou 5e jour, les cellules périphériques de la morula pompent activement des ions sodium et de l'eau vers l'intérieur, créant une cavité remplie de liquide appelée blastocèle.\n- Différenciation de deux lignées cellulaires distinctes :\n  * Le trophoblaste (ou trophectoderme) : Couche périphérique de cellules aplaties qui donnera plus tard les annexes embryonnaires, notamment le placenta et le chorion.\n  * Le bouton embryonnaire (ou masse cellulaire interne) : Amas dense de cellules sphériques situé à un pôle de la cavité, qui donnera naissance à l'embryon proprement dit et à ses tissus.\n- Éclosion embryonnaire (Hatching) : Vers le 6e jour, sous la pression du blastocèle et l'action d'enzymes lytiques trophoblastiques, la zone pellucide se rompt et est éliminée. Le blastocyste 'éclot' et se retrouve dénudé dans la lumière utérine, condition indispensable pour pouvoir s'implanter.\n\n3. Migration tubaire de l'embryon :\n- Durée : Le transit dans la trompe dure environ 3 à 4 jours.\n- Moteurs du déplacement : Comme l'embryon ne possède aucun cil ni flagelle, il est propulsé par les contractions péristaltiques du muscle tubaire et par les battements continus des cils de la muqueuse.\n- Arrivée utérine : L'embryon entre dans l'utérus au stade morula (J4) et y flotte librement pendant 48 heures tout en se transformant en blastocyste expansé.",
      keyRule: "La segmentation s'effectue sans augmentation du volume total. La morula (J4) se creuse en blastocyste (J5-J6) formé du trophoblaste (futur placenta) et du bouton embryonnaire (futur individu). L'éclosion libère l'embryon pour la nidation.",
      formulas: [
        {
          name: "Progression géométrique des blastomères",
          formula: "N = 2^k \\quad (k = \\text{nombre de cycles de mitoses de segmentation})",
          note: "Stades : 1 -> 2 -> 4 -> 8 -> 16 -> 32 -> 64 blastomères"
        }
      ],
      workedExample: {
        title: "Calcul du volume individuel des blastomères au cours de la segmentation",
        statement: "On considère une cellule-œuf sphérique de rayon R = 60 µm emprisonnée dans sa zone pellucide. Au cours des premières 72 heures, l'œuf subit 3 cycles de mitoses successives sans que le volume total de l'embryon ne varie. 1. Déterminer le nombre de blastomères obtenus. 2. Calculer le volume moyen d'un blastomère par rapport au volume initial du zygote.",
        methodSteps: [
          "Étape 1 : Calculer le nombre de cellules après 3 mitoses. N = 2³ = 8 blastomères.",
          "Étape 2 : Établir la relation des volumes. Comme la zone pellucide est inextensible, le volume global reste constant : V_total = V_initial.",
          "Étape 3 : Calculer le volume unitaire. Chaque blastomère occupe en moyenne : V_blastomère = V_initial / 8 = 12,5 % du volume du zygote initial."
        ],
        conclusion: "Après 3 mitoses (stade 8 cellules), chaque blastomère possède un volume 8 fois plus faible que le zygote de départ."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Chronologie de la segmentation et de la formation du blastocyste",
        tableData: {
          headers: ["Stade embryonnaire", "Moment post-fécondation", "Localisation anatomique", "Caractéristiques cytologiques"],
          rows: [
            ["Zygote unicellulaire", "Jour 0 (H0)", "Ampoule tubaire", "Cellule diploïde 2n avec 2 pronucléus puis 1er fuseau"],
            ["Stade 2 à 8 blastomères", "Jour 1 à 3", "Trompe de Fallope", "Mitoses successives, cellules de plus en plus petites"],
            ["Morula (16-64 cellules)", "Jour 4", "Jonction utéro-tubaire", "Aspect de petite mûre compacte pleine"],
            ["Blastocyste expansé", "Jour 5 à 6", "Cavité utérine", "Blastocèle central, trophoblaste externe et bouton embryonnaire"],
            ["Éclosion (dénudation)", "Jour 6", "Cavité utérine", "Rupture et perte complète de la zone pellucide"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c10_p3_ex1",
          type: "mcq",
          prompt: "Quelle est la particularité biologique majeure des mitoses de segmentation de la cellule-œuf ?",
          options: [
            "Le volume global de l'embryon n'augmente pas car les blastomères deviennent de plus en plus petits à l'intérieur de la zone pellucide",
            "Chaque division entraîne un doublement du volume global de la matrice",
            "Les mitoses ne comportent aucune duplication d'ADN",
            "Les divisions produisent uniquement des globules blancs protecteurs"
          ],
          correctAnswerIndex: 0,
          explanation: "Pendant la segmentation, les divisions mitotiques s'enchaînent rapidement sans phase de croissance cellulaire. Emprisonné dans la zone pellucide inextensible, l'embryon conserve sa taille initiale (~100-120 µm) tout en augmentant son nombre de cellules."
        },
        {
          id: "tle_d_svt_c10_p3_ex2",
          type: "mcq",
          prompt: "À quel stade morphologique l'embryon ressemble-t-il à une petite mûre pleine de 16 à 64 cellules vers le 4e jour après la fécondation ?",
          options: [
            "Le stade morula",
            "Le stade gastrula",
            "Le stade ovocyte I",
            "Le stade neurula"
          ],
          correctAnswerIndex: 0,
          explanation: "La morula (du latin morum, mûre) est la sphère pleine de 16 à 64 blastomères compactés obtenue au 3e-4e jour post-fécondation, juste avant le creusement de la cavité blastocélique."
        },
        {
          id: "tle_d_svt_c10_p3_ex3",
          type: "mcq",
          prompt: "Quels sont les deux composants cellulaires majeurs qui structurent le blastocyste au 5e-6e jour ?",
          options: [
            "Le trophoblaste périphérique et le bouton embryonnaire (masse cellulaire interne)",
            "L'acrosome et le flagelle mobile",
            "La thyroïde embryonnaire et le rein primitif",
            "Le corps jaune gravidique et l'hypophyse"
          ],
          correctAnswerIndex: 0,
          explanation: "Le blastocyste comprend une couche cellulaire externe protectrice (le trophoblaste, précurseur du placenta) entourant une cavité liquidienne (blastocèle) et un groupe de cellules pluripotentes internes (le bouton embryonnaire)."
        },
        {
          id: "tle_d_svt_c10_p3_ex4",
          type: "mcq",
          prompt: "En quoi consiste l'éclosion (ou hatching) du blastocyste à la fin de sa vie libre dans la cavité utérine vers J6 ?",
          options: [
            "La sortie de l'embryon hors de la zone pellucide devenue trop étroite et digérée par des enzymes",
            "La sortie du fœtus lors de l'accouchement",
            "L'expulsion de l'ovocyte par le follicule de De Graaf",
            "La rupture de la poche des eaux au 9e mois"
          ],
          correctAnswerIndex: 0,
          explanation: "L'éclosion du blastocyste est l'expulsion de la masse cellulaire hors de sa gangue pellucide protectrice. Dénudé, le trophoblaste peut enfin adhérer physiquement aux cellules de l'endomètre utérin."
        },
        {
          id: "tle_d_svt_c10_p3_ex5",
          type: "mcq",
          prompt: "Quelle est la destinée embryonnaire exclusive du trophoblaste ?",
          options: [
            "Former le placenta et les annexes fœtales protectrices et nourricières",
            "Former le cerveau et la moelle épinière de l'embryon",
            "Donner les membres supérieurs et inférieurs",
            "Générer les globules rouges du nouveau-né"
          ],
          correctAnswerIndex: 0,
          explanation: "Le trophoblaste ne participe pas à la constitution des organes de l'embryon : il forme le placenta, le chorion et participe aux annexes indispensables aux échanges mère-fœtus."
        },
        {
          id: "tle_d_svt_c10_p3_ex6",
          type: "mcq",
          prompt: "Comment l'œuf fécondé puis la morula descendent-ils la trompe de Fallope en l'absence de flagelle ?",
          options: [
            "Par les battements des cils vibratiles de l'épithélium et les contractions péristaltiques de la musculeuse tubaire",
            "En nageant grâce à des tentacules cellulaires éphémères",
            "Par l'attraction gravitationnelle exclusive",
            "Par l'action corrosive du suc gastrique"
          ],
          correctAnswerIndex: 0,
          explanation: "Le transport passif du zygote dans l'oviducte repose sur le battement coordonné des cils de la muqueuse tubaire et le flux liquidien engendré par le péristaltisme des parois musculaires de la trompe."
        }
      ]
    },
    {
      id: "pt4_nidation_implantation_gestation_hcg",
      order: 4,
      title: "La nidation dans l'endomètre et le début de la gestation (sécrétion d'HCG)",
      summary: "Préparation de la dentelle utérine par la progestérone, étapes de la nidation (J6 à J11) par invasion trophoblastique, sécrétion d'HCG et maintien du corps jaune gravidique.",
      conceptExplanation: "La nidation (ou implantation) est l'enfouissement complet du blastocyste au sein de la muqueuse utérine maternelle préalablement préparée.\n\n1. Préparation de la muqueuse utérine d'accueil :\n- Rôle de la progestérone : Sous l'influence conjointe des œstrogènes et surtout de la progestérone sécrétée par le corps jaune ovarien en phase lutéale, l'endomètre subit des transformations décisives :\n  * Épaississement de la muqueuse (7 à 8 mm) ;\n  * Spiralisation intense des vaisseaux sanguins et hypervascularisation ;\n  * Développement des glandes utérines sécrétant un mucus riche en glycogène et lipides (dentelle utérine).\n- Fenêtre d'implantation : L'utérus n'est réceptif que pendant une période étroite (J20 à J24 du cycle de 28 jours, soit 6 à 8 jours post-ovulation).\n\n2. Les étapes cytologiques de la nidation (J6 à J11) :\n- Accolement (J6-J7) : Le blastocyste débarrassé de sa zone pellucide s'oriente et s'accole à l'épithélium utérin par son pôle embryonnaire (face au bouton embryonnaire).\n- Invasion enzymatique (J7-J9) : Les cellules du trophoblaste prolifèrent et se différencient en deux couches :\n  * Le cytotrophoblaste (couche interne de cellules individualisées) ;\n  * Le syncytiotrophoblaste (masse multinucléée externe sans limites cellulaires, très agressive).\n  Le syncytiotrophoblaste sécrète des enzymes protéolytiques qui détruisent localement les cellules épithéliales de la muqueuse et lysent la matrice extracellulaire, creusant une brèche où l'embryon s'enfonce.\n- Enfouissement complet (J10-J11) : L'embryon pénètre totalement dans le stroma utérin ; la brèche muqueuse se referme par un bouchon de fibrine puis se réépithélialise. La nidation est achevée à J11 : la gestation commence véritablement.\n\n3. Le signal hormonal de maintien gravidique (HCG) :\n- Sécrétion précoce : Dès son invasion, le syncytiotrophoblaste sécrète dans la circulation maternelle une hormone peptidique : l'HCG (Human Chorionic Gonadotropin ou hormone chorionique gonadotrope).\n- Rôle physiologique vital : L'HCG possède une action analogue à la LH hypophysaire. Elle stimule le corps jaune ovarien et l'empêche de régresser en corps blanc à la fin du cycle. Le corps jaune devient corps jaune gravidique (ou corps jaune de grossesse).\n- Maintien du blocage des règles : En restant actif, le corps jaune gravidique continue de sécréter des doses massives de progestérone et d'œstradiol. La dentelle utérine est maintenue, les règles n'apparaissent pas (aménorrhée gravidique, premier signe clinique de grossesse).\n- Test de grossesse : La présence d'HCG dans l'urine ou le sang maternel dès le 8e-10e jour post-fécondation constitue la base biologique de tous les tests de grossesse modernes.",
      keyRule: "La nidation s'achève à J11 après accolement (J6-J7) et enfouissement dans la dentelle utérine. L'HCG sécrétée par le syncytiotrophoblaste maintient le corps jaune gravidique, assurant la production continue de progestérone et l'aménorrhée gravidique.",
      formulas: [
        {
          name: "Régulation hormonale du maintien gravidique précoce",
          formula: "\\text{Syncytiotrophoblaste} \\xrightarrow{\\text{HCG}} \\text{Corps jaune gravidique} \\xrightarrow{\\text{Progestérone élevée}} \\text{Maintien dentelle utérine + Silence myomètre}",
          note: "Empêche la survenue des règles (absence de menstruation = aménorrhée)"
        }
      ],
      workedExample: {
        title: "Interprétation d'un test de grossesse immunologique urinaire",
        statement: "Une femme constate un retard de règles de 5 jours (au 33e jour d'un cycle habituel de 28 jours). Elle réalise un test de grossesse urinaire rapide qui affiche deux bandes colorées positives (réaction positive aux anticorps anti-HCG). 1. Expliquer la présence de l'HCG dans ses urines. 2. Déduire le rôle de cette hormone sur les ovaires et sur l'absence de ses règles.",
        methodSteps: [
          "Étape 1 : Identifier l'origine de l'HCG. L'HCG n'est produite par aucun tissu chez une femme non enceinte : elle est sécrétée exclusivement par les cellules du trophoblaste (syncytiotrophoblaste) de l'embryon dès la nidation dans l'endomètre.",
          "Étape 2 : Expliquer l'action sur l'ovaire. L'HCG mime la LH hypophysaire et stimule le corps jaune, l'empêchant de dégénérer en corpus albicans.",
          "Étape 3 : Expliquer l'absence de règles. Le corps jaune gravidique continue de sécréter de la progestérone à forte concentration, ce qui maintient intacte la dentelle utérine et interdit sa desquamation menstruelle."
        ],
        conclusion: "La présence d'HCG confirme l'implantation embryonnaire. Son action sur le corps jaune maintient la progestérone et explique le retard de règles (aménorrhée gravidique)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Étapes de la nidation et rétrocontrôle embryonnaire par l'HCG",
        tableData: {
          headers: ["Jour post-fécondation", "Événement de nidation", "Couche cellulaire motrice", "Statut hormonal maternel"],
          rows: [
            ["J6 - J7", "Accolement à la muqueuse", "Pôle embryonnaire du blastocyste", "Progestérone lutéale ovarienne élevée"],
            ["J7 - J9", "Invasion protéolytique", "Syncytiotrophoblaste lytique", "Apparition des premières molécules d'HCG dans le sang"],
            ["J10 - J11", "Enfouissement complet", "Épithélium utérin refermé", "Pic ascendant d'HCG stimulant le corps jaune gravidique"],
            ["Au-delà de J14", "Gestation établie", "Placenta primitif", "Aménorrhée gravidique (absence de règles)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c10_p4_ex1",
          type: "mcq",
          prompt: "Comment définit-on précisément la nidation chez la femme ?",
          options: [
            "L'enfouissement du blastocyste débarrassé de sa zone pellucide au sein de l'endomètre utérin maternel",
            "L'expulsion de l'ovocyte II dans le pavillon de la trompe",
            "La sortie du fœtus lors de l'accouchement naturel",
            "La fusion des deux pronucléus dans l'ampoule tubaire"
          ],
          correctAnswerIndex: 0,
          explanation: "La nidation (implantation) désigne le processus biologique par lequel le blastocyste pénètre et s'ancre profondément dans la muqueuse utérine (endomètre) préalablement transformée en dentelle utérine."
        },
        {
          id: "tle_d_svt_c10_p4_ex2",
          type: "mcq",
          prompt: "Quel est le rôle indispensable de la progestérone lutéale dans la réussite de la nidation ?",
          options: [
            "Elle provoque la contraction vigoureuse de l'utérus pour expulser tout corps étranger",
            "Elle stimule l'épaississement de l'endomètre, la formation de la dentelle utérine riche en glycogène et assure le silence myométrial",
            "Elle détruit le trophoblaste pour ne garder que le bouton embryonnaire",
            "Elle empêche le battement des cils tubaires"
          ],
          correctAnswerIndex: 1,
          explanation: "La progestérone prépare la dentelle utérine (glandes sécrétant du glycogène, riche vascularisation hélicoïdale) et inhibe les contractions musculaires du myomètre ('silence utérin'), offrant un lit d'accueil idéal à l'embryon."
        },
        {
          id: "tle_d_svt_c10_p4_ex3",
          type: "mcq",
          prompt: "Quelle structure cellulaire sécrète l'hormone HCG (Gonadotrophine Chorionique Humaine) dès le début de l'implantation ?",
          options: [
            "Le syncytiotrophoblaste embryonnaire",
            "L'adénohypophyse maternelle",
            "Le globule polaire résiduel",
            "Les cellules interstitielles de Leydig"
          ],
          correctAnswerIndex: 0,
          explanation: "C'est le trophoblaste embryonnaire (spécifiquement le syncytiotrophoblaste) qui sécrète l'HCG dès qu'il commence à envahir la paroi utérine maternelle."
        },
        {
          id: "tle_d_svt_c10_p4_ex4",
          type: "mcq",
          prompt: "Quelle est l'action physiologique essentielle de l'hormone HCG sécrétée par l'embryon au début de la grossesse ?",
          options: [
            "Elle détruit les trompes de Fallope pour bloquer toute nouvelle fécondation",
            "Elle maintient le corps jaune en activité (corps jaune gravidique), assurant la sécrétion continue de progestérone et empêchant les règles",
            "Elle déclenche l'ovulation de 10 nouveaux follicules",
            "Elle stimule la descente des testicules chez le fœtus"
          ],
          correctAnswerIndex: 1,
          explanation: "L'HCG mime l'action de la LH et empêche la lutéolyse (régression du corps jaune). Le corps jaune gravidique produit la progestérone nécessaire au maintien de la dentelle utérine et à la survie de la grossesse."
        },
        {
          id: "tle_d_svt_c10_p4_ex5",
          type: "mcq",
          prompt: "Sur quelle base immunochimique repose le fonctionnement des tests de grossesse urinaires rapides vendus en pharmacie ?",
          options: [
            "La détection spécifique de l'HCG fœto-placentaire excrétée dans les urines de la femme",
            "Le dosage de l'albumine salivaire du père",
            "La mesure du taux d'hémoglobine dans la sueur",
            "La détection de la testostérone ovarienne"
          ],
          correctAnswerIndex: 0,
          explanation: "Les tests urinaires de grossesse utilisent des anticorps monoclonaux anti-HCG. Comme l'HCG n'est sécrétée que par le tissu trophoblastique de l'embryon, sa présence dans les urines atteste indubitablement d'une grossesse débutante."
        },
        {
          id: "tle_d_svt_c10_p4_ex6",
          type: "mcq",
          prompt: "Chez une femelle mammifère au tout début de la gestation (J15), quelle conséquence immédiate entraîne l'ablation chirurgicale des ovaires (ou du corps jaune) ?",
          options: [
            "La poursuite normale de la grossesse sans aucune modification",
            "L'avortement immédiat (fausse couche) par effondrement brutal du taux de progestérone et desquamation de la muqueuse",
            "L'accélération du développement fœtal qui naît en 48 heures",
            "La transformation de l'embryon en jumeaux homozygotes"
          ],
          correctAnswerIndex: 1,
          explanation: "Au début de la gestation, le maintien de la dentelle utérine dépend exclusivement de la progestérone sécrétée par le corps jaune gravidique. Son ablation provoque la chute hormonale et l'expulsion immédiate de l'embryon (fausse couche)."
        }
      ]
    }
  ]
};
