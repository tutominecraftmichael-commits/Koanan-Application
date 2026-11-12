import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L09_INFECTION_VIH_SIDA: CurriculumChapter = {
  id: "terminale_d_svt_ch15_infection_organisme_par_le_vih",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 15,
  title: "L'infection de l'organisme par le VIH (Structure du rétrovirus, cycle de réplication, évolution clinique et SIDA)",
  summary: "Étude complète et approfondie de l'infection par le Virus de l'Immunodéficience Humaine (VIH) selon le programme officiel de SVT Terminale D de Côte d'Ivoire : organisation ultrastructurale d'un rétrovirus enveloppé (ARN, gp120, gp41, capside p24, transcriptase inverse, intégrase, protéase), cycle réplicatif complet dans le lymphocyte T4 (CD4) de l'adsorption au bourgeonnement lytique, dynamique biologique et clinique des trois phases (primo-infection et séroconversion, phase asymptomatique de latence, phase symptomatique du SIDA avéré), effondrement de la coopération immunitaire, genèse des maladies opportunistes (tuberculose, sarcome de Kaposi) et stratégies médicales de prévention (PTME, préservatifs, trithérapies ARV).",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_structure_organisation_moleculaire_vih",
      order: 1,
      title: "Structure moléculaire et ultrastructure du VIH (un rétrovirus à ARN)",
      summary: "Enveloppe lipidique dérivée de l'hôte, spicules glycoprotéiques gp120 et gp41, capside conique p24, génome formé de 2 brins d'ARN monocaténaire et complexe enzymatique (transcriptase inverse, intégrase, protéase).",
      conceptExplanation: "Le VIH (Virus de l'Immunodéficience Humaine) est l'agent étiologique du SIDA (Syndrome d'Immuno-Déficience Acquise). Il appartient à la famille des Retroviridae (genre Lentivirus).\n\n1. L'enveloppe externe membranique :\n- Bicouche lipidique : Dérivée directement de la membrane plasmique de la cellule hôte humaine lors du bourgeonnement du virus.\n- Spicules de glycoprotéines membranaires :\n  * La gp120 (glycoprotéine de surface de 120 kDa) : Forme la tête globulaire externe du spicule ; c'est la molécule clé de reconnaissance qui se lie avec une affinité extrême au récepteur membranaire CD4 présent à la surface de certaines cellules immunitaires humaines.\n  * La gp41 (glycoprotéine transmembranaire de 41 kDa) : Forme le pied d'ancrage transmembranaire du spicule ; elle joue le rôle d'agent fusogène et perforateur lors de l'entrée du virus dans la cellule.\n\n2. Les structures protéiques internes :\n- Matrice interne protéique (p17) : Tapisse la face interne de la bicouche lipidique et assure la cohésion architecturale de la particule virale.\n- Capside protéique conique ou icosaédrique (p24) : Coque protéique dense au centre du virion, protégeant le génome viral.\n\n3. Le matériel génétique et le complexe enzymatique :\n- Génome viral à ARN : Le VIH ne possède pas d'ADN dans sa particule libre ; son génome est constitué de deux brins d'ARN identiques (monocaténaires de polarité positive) : c'est un virus diploïde à ARN.\n- L'équipement enzymatique viral spécifique indispensable :\n  * La transcriptase inverse (ou rétrotranscriptase) : Enzyme polymérase capable de synthétiser une molécule d'ADN double brin (provirus) à partir d'une matrice d'ARN viral (violation du dogme central traditionnel ADN -> ARN).\n  * La intégrase : Enzyme qui catalyse la coupure de l'ADN de la cellule hôte et y insère de manière covalente l'ADN proviral du VIH.\n  * La protéase virale : Enzyme qui clive les précurseurs polyprotéiques viraux immatures lors de l'assemblage final des virions pour les rendre infectieux.",
      keyRule: "Le VIH est un rétrovirus à ARN diploïde. La gp120 assure la reconnaissance et l'adsorption au récepteur CD4, la gp41 la fusion membranaire. La transcriptase inverse copie l'ARN en ADN proviral, l'intégrase l'insère dans l'ADN cellulaire, et la protéase mature les virions.",
      formulas: [
        {
          name: "Dogme inversé de la réplication rétrovirale",
          formula: "\\text{ARN viral monocaténaire} \\xrightarrow{\\text{Transcriptase Inverse}} \\text{ADN proviral bicaténaire} \\xrightarrow{\\text{Intégrase}} \\text{Intégration au génome de l'hôte}",
          note: "Base moléculaire de l'infection permanente par le rétrovirus"
        }
      ],
      workedExample: {
        title: "Identification des composants ultrastructuraux du VIH sur électronographie",
        statement: "On observe au microscope électronique à transmission une coupe ultra-fine d'un virion du VIH mûr. On repère : une enveloppe externe hérissée de spicules, une coque sombre tronconique interne et deux filaments intérieurs associés à des macromolécules globulaires. 1. Nommer les constituants du spicule. 2. Identifier la coque sombre et le contenu intime du cœur viral.",
        methodSteps: [
          "Étape 1 : Analyser les spicules externes. Chaque spicule est un trimère composé d'une protéine de surface gp120 ancrée sur une protéine transmembranaire gp41.",
          "Étape 2 : Identifier la coque sombre. Il s'agit de la capside protéique p24 qui protège le génome.",
          "Étape 3 : Identifier le contenu central. Les filaments correspondent aux 2 molécules d'ARN simple brin identiques, associées aux enzymes virales : la transcriptase inverse, l'intégrase et la protéase."
        ],
        conclusion: "Le virion associe une enveloppe lipidique à spicules gp120/gp41, une capside interne p24 et un complexe génomique ARN-transcriptase inverse."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Organisation ultrastructurale et moléculaire du virion VIH",
        tableData: {
          headers: ["Composant structural", "Nature biochimique", "Masse moléculaire / Marqueur", "Fonction biologique majeure"],
          rows: [
            ["Spicule externe (tête)", "Glycoprotéine de surface", "gp120", "Fixation spécifique au récepteur CD4 de la cellule hôte"],
            ["Spicule interne (pied)", "Glycoprotéine transmembranaire", "gp41", "Perforation et fusion de l'enveloppe avec la membrane du LT4"],
            ["Enveloppe externe", "Bicouche lipidique", "Membrane cellulaire détournée", "Protection du virion et support d'ancrage des spicules"],
            ["Matrice protéique interne", "Protéine structurale", "p17", "Tapisse la membrane et stabilise la géométrie du virion"],
            ["Capside centrale", "Protéines assemblées en cône", "p24", "Enferme et isole le matériel génétique et les enzymes"],
            ["Génome viral", "Acide ribonucléique simple brin", "2 brins d'ARN identiques", "Contient l'information génétique (gènes Gag, Pol, Env)"],
            ["Transcriptase inverse", "ADN polymérase ARN-dépendante", "Enzyme rétrotranscriptase", "Synthèse d'ADN proviral bicaténaire à partir d'ARN"],
            ["Intégrase & Protéase", "Enzymes virales spécifiques", "Enzymes de coupure / maturation", "Intégration chromosomique et clivage polyprotéique"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c15_p1_ex1",
          type: "mcq",
          prompt: "Quelle est la nature exacte du matériel génétique contenu dans la capside d'un virion du VIH libre ?",
          options: [
            "Deux molécules d'ARN simple brin identiques",
            "Une molécule d'ADN bicaténaire circulaire",
            "Une double hélice d'ADN linéaire associée à des histones",
            "Un mélange équimolaire d'ADN et d'acides aminés libres"
          ],
          correctAnswerIndex: 0,
          explanation: "Le VIH est un rétrovirus dont le génome est formé de deux molécules identiques d'ARN monocaténaire de polarité positive associées à la transcriptase inverse."
        },
        {
          id: "tle_d_svt_c15_p1_ex2",
          type: "mcq",
          prompt: "Quel est le rôle physiologique fondamental de la glycoprotéine gp120 située à la surface de l'enveloppe du VIH ?",
          options: [
            "Elle catalyse la synthèse d'anticorps dans le foie",
            "Elle assure la reconnaissance spécifique et l'attachement (adsorption) au récepteur CD4 du lymphocyte hôte",
            "Elle détruit immédiatement l'enveloppe nucléaire des globules blancs",
            "Elle produit l'hémoglobine nécessaire au transport d'oxygène"
          ],
          correctAnswerIndex: 1,
          explanation: "La gp120 constitue la tête du spicule d'enveloppe virale. Elle possède un domaine de liaison spécifique qui s'arrime au récepteur CD4 exprimé principalement par les lymphocytes T4 et les macrophages."
        },
        {
          id: "tle_d_svt_c15_p1_ex3",
          type: "mcq",
          prompt: "Quelle réaction biochimique spécifique la transcriptase inverse (rétrotranscriptase) catalyse-t-elle au sein de la cellule hôte ?",
          options: [
            "La digestion des acides gras de la membrane plasmique",
            "La synthèse d'un brin d'ADN proviral complémentaire à partir de l'ARN viral",
            "La multiplication par mitose du virus",
            "La dégradation de l'ATP en acide lactique"
          ],
          correctAnswerIndex: 1,
          explanation: "La transcriptase inverse est une ADN polymérase ARN-dépendante qui effectue la transcription inverse (ou rétrotranscription), fabriquant de l'ADN proviral double brin à partir de l'ARN génomique viral."
        },
        {
          id: "tle_d_svt_c15_p1_ex4",
          type: "mcq",
          prompt: "Quelle est la fonction biologique de la glycoprotéine transmembranaire gp41 du spicule viral lors de l'infection ?",
          options: [
            "Elle sert de perforateur et d'agent de fusion entre la membrane du virus et la membrane plasmique de la cellule hôte",
            "Elle stocke les réserves d'amidon du virus",
            "Elle neutralise les globules rouges dans la rate",
            "Elle synthétise la capside p24"
          ],
          correctAnswerIndex: 0,
          explanation: "Une fois la gp120 arrimée au récepteur CD4, la gp41 change de conformation, s'ancre dans la membrane de la cellule hôte et induit la fusion des deux membranes lipidiques, libérant le cœur viral dans le cytoplasme."
        },
        {
          id: "tle_d_svt_c15_p1_ex5",
          type: "mcq",
          prompt: "Quelle fonction biologique indispensable remplit l'enzyme intégrase apportée par le VIH ?",
          options: [
            "Elle insère de façon covalente l'ADN proviral néosynthétisé dans le génome chromosomique de la cellule hôte",
            "Elle expulse le virus hors de l'organisme par voie urinaire",
            "Elle répare les parois bactériennes",
            "Elle stimule la phagocytose par les polynucléaires"
          ],
          correctAnswerIndex: 0,
          explanation: "L'intégrase virale coupe l'ADN cellulaire dans le noyau du lymphocyte T4 et y ligature l'ADN proviral double brin du VIH, rendant l'infection cellulaire permanente et transmissible lors des divisions cellulaires."
        },
        {
          id: "tle_d_svt_c15_p1_ex6",
          type: "mcq",
          prompt: "Quelle protéine majeure constitue la capside interne en forme de cône tronqué qui abrite le génome du VIH ?",
          options: [
            "La protéine p24",
            "La protéine d'actine musculaire",
            "La thrombine plasmatique",
            "L'insuline pancréatique"
          ],
          correctAnswerIndex: 0,
          explanation: "La protéine p24 s'assemble pour former la capside interne icosaédrique/conique protégeant l'ARN viral. La détection de l'antigène p24 dans le sang est d'ailleurs utilisée pour le dépistage très précoce de l'infection."
        }
      ]
    },
    {
      id: "pt2_cycle_replicatif_dans_lt4",
      order: 2,
      title: "Le cycle de réplication intracellulaire du VIH dans le lymphocyte T4",
      summary: "Étapes ordonnées du parasitisme intracellulaire du LT4 : adsorption (gp120-CD4), fusion (gp41), décapsidation, transcription inverse, intégration nucléaire, transcription/traduction et bourgeonnement lytique.",
      conceptExplanation: "Le VIH est un parasite intracellulaire obligatoire strict : incapable de se reproduire de manière autonome, il détourne toute la machinerie enzymatique et transcriptionnelle de la cellule hôte.\n\n1. Les cellules-cibles du VIH (le tropisme cellulaire) :\n- La molécule CD4 : Le VIH cible exclusivement les cellules humaines qui expriment à leur surface le récepteur membranaire CD4, principalement les lymphocytes T4 (LT4 ou auxiliaires/helpers), mais aussi les monocytes, les macrophages tissulaires et les cellules dendritiques.\n- Les corécepteurs : L'entrée virale requiert en plus un corécepteur chimiokinique membranaire (CCR5 sur les macrophages/LT mémoires, ou CXCR4 sur les LT naïfs).\n\n2. Les étapes chronologiques du cycle réplicatif intracellulaire :\n- 1. Adsorption (ou fixation) : La gp120 du virion se fixe au récepteur CD4 du lymphocyte T4, ce qui induit un changement de conformation facilitant la liaison au corécepteur (CCR5 ou CXCR4).\n- 2. Fusion membranaire et pénétration : La gp41 se déploie et fusionne la membrane lipidique virale avec la membrane plasmique lymphocytaire. Le contenu de la capside est injecté dans le cytoplasme de la cellule hôte.\n- 3. Décapsidation : La capside p24 se désagrège partiellement dans le cytosol, libérant les deux brins d'ARN viral et les enzymes (complexe de pré-intégration).\n- 4. Rétrotranscription (Transcription inverse) : Dans le cytoplasme, la transcriptase inverse copie l'ARN viral monocaténaire en un premier brin d'ADN, dégrade la matrice d'ARN (activité RNase H), puis synthétise le brin complémentaire pour former une molécule d'ADN proviral double brin.\n- 5. Translocation nucléaire et intégration : L'ADN proviral pénètre dans le noyau du LT4 à travers les pores nucléaires. L'intégrase insère de façon irréversible cet ADN proviral au sein d'un chromosome cellulaire hôte : le provirus est désormais partie intégrante du génome de la cellule.\n- 6. Transcription : Lors de l'activation du LT4 par une réponse immunitaire, l'ARN polymérase II de la cellule hôte transcrit l'ADN proviral en molécules d'ARN viral (servant à la fois d'ARN messagers et de génomes pour les futurs virions).\n- 7. Traduction : Dans le cytoplasme, les ribosomes cellulaires traduisent les ARNm viraux en longues polyprotéines virales précurseurs (Gag, Pol, Env).\n- 8. Clivage protéolytique et maturation : La protéase virale clive les polyprotéines en unités fonctionnelles (capside p24, enzymes actives, protéines d'enveloppe gp120/gp41 transportées à la membrane plasmique).\n- 9. Assemblage et bourgeonnement : Les deux brins d'ARN s'associent aux enzymes et à la capside sous la membrane plasmique hérissée de spicules gp120/gp41. Le virion bourgeonne en emportant un lambeau de membrane plasmique de la cellule hôte.\n\n3. Conséquence cytopathogène : La destruction du LT4 :\nLe bourgeonnement massif de milliers de virions épuise la membrane plasmique et provoque la lyse cellulaire du LT4 infecté. D'autres mécanismes détruisent également les LT4 : la formation de syncytia (fusion de dizaines de LT4 sains avec des cellules infectées), l'apoptose induite et la destruction des LT4 par les lymphocytes T8 cytotoxiques.",
      keyRule: "Le cycle comprend 9 étapes indissociables : Fixation -> Fusion -> Décapsidation -> Rétrotranscription -> Intégration -> Transcription -> Traduction -> Clivage/Maturation -> Bourgeonnement. La réplication virale aboutit inéluctablement à la mort du LT4.",
      formulas: [
        {
          name: "Séquence réplicative du VIH dans la cellule hôte",
          formula: "\\text{Adsorption (CD4)} \\rightarrow \\text{Fusion (gp41)} \\rightarrow \\text{Rétrotranscription} \\rightarrow \\text{Intégration} \\rightarrow \\text{Transcription/Traduction} \\rightarrow \\text{Bourgeonnement}",
          note: "Cycle complet réalisant la prolifération virale aux dépens du LT4"
        }
      ],
      workedExample: {
        title: "Chronologie et remise en ordre des étapes de l'infection du lymphocyte T4",
        statement: "On donne dans le désordre six étapes de l'infection d'un LT4 par le VIH : A. Bourgeonnement des nouveaux virions ; B. Fixation de la gp120 sur le récepteur CD4 ; C. Synthèse d'ADN proviral par la transcriptase inverse ; D. Intégration de l'ADN proviral dans le chromosome par l'intégrase ; E. Fusion membranaire assurée par la gp41 ; F. Traduction des protéines virales par les ribosomes. Reclasser ces étapes selon leur ordre chronologique réel.",
        methodSteps: [
          "Étape 1 : Phase d'entrée : La fixation spécifique gp120-CD4 (B) précède la fusion membranaire par gp41 (E).",
          "Étape 2 : Phase de synthèse provirale : La transcription inverse cytoplasmique de l'ARN en ADN (C) précède l'intégration de cet ADN proviral dans le noyau (D).",
          "Étape 3 : Phase d'expression et sortie : La traduction des polyprotéines virales (F) précède l'assemblage et le bourgeonnement membranaire (A)."
        ],
        conclusion: "L'ordre chronologique exact est : B -> E -> C -> D -> F -> A."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Étapes du cycle de réplication du VIH dans le lymphocyte T4",
        tableData: {
          headers: ["Numéro d'étape", "Nom de l'étape", "Compartiment cellulaire", "Acteurs moléculaires / Enzymes"],
          rows: [
            ["Étape 1", "Adsorption spécifique", "Membrane externe du LT4", "gp120 virale et récepteur CD4 (+ corécepteur CCR5/CXCR4)"],
            ["Étape 2", "Pénétration et fusion", "Membrane plasmique", "gp41 perforatrice, fusion des bicouches lipidiques"],
            ["Étape 3", "Décapsidation", "Cytoplasme du LT4", "Libération de l'ARN viral et de la transcriptase inverse"],
            ["Étape 4", "Rétrotranscription", "Cytoplasme du LT4", "Transcriptase inverse virale (ARN -> ADN proviral double brin)"],
            ["Étape 5", "Intégration génomique", "Noyau cellulaire", "Intégrase virale insérant l'ADN viral dans un chromosome"],
            ["Étape 6", "Transcription & Traduction", "Noyau puis Cytoplasme", "ARN polymérase cellulaire hôte et ribosomes du LT4"],
            ["Étape 7", "Maturation et assemblage", "Sous la membrane plasmique", "Protéase virale clivant les polyprotéines en protéines actives"],
            ["Étape 8", "Bourgeonnement lytique", "Membrane plasmique du LT4", "Libération des virions infectieux et lyse du LT4"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c15_p2_ex1",
          type: "mcq",
          prompt: "Quelle est la cellule immunitaire cible préférentielle dont la destruction par le VIH provoque l'effondrement immunitaire ?",
          options: [
            "Le lymphocyte T4 (porteur du marqueur CD4)",
            "L'érythrocyte (globule rouge anucléé)",
            "Le thrombocyte (plaquette sanguine)",
            "L'ostéoblaste des os longs"
          ],
          correctAnswerIndex: 0,
          explanation: "Le lymphocyte T4 (CD4) est la cible majeure du VIH. Sa glycoprotéine de surface CD4 présente une affinité moléculaire très forte pour la gp120 du virion."
        },
        {
          id: "tle_d_svt_c15_p2_ex2",
          type: "mcq",
          prompt: "Quel est l'ordre chronologique exact des trois premières étapes du cycle infectieux du VIH dans le lymphocyte T4 ?",
          options: [
            "Bourgeonnement -> Intégration -> Traduction",
            "Adsorption (fixation) -> Fusion/Pénétration -> Décapsidation",
            "Traduction -> Transcription -> Décapsidation",
            "Caryogamie -> Mitose -> Éclosion"
          ],
          correctAnswerIndex: 1,
          explanation: "Le virus commence par s'amarrer sur les récepteurs membranaires (adsorption), fait fusionner les membranes lipidiques pour injecter son contenu (fusion/pénétration), puis sa capside se dissout dans le cytoplasme (décapsidation)."
        },
        {
          id: "tle_d_svt_c15_p2_ex3",
          type: "mcq",
          prompt: "À quel moment et dans quel compartiment cellulaire l'enzyme intégrase du VIH intervient-elle ?",
          options: [
            "Dans le suc digestif de l'estomac avant l'infection",
            "Dans le noyau cellulaire, pour insérer l'ADN proviral dans l'ADN chromosomique du lymphocyte T4",
            "Dans le flagelle du spermatozoïde pour stimuler sa nage",
            "Dans le ribosome pour synthétiser les lipides"
          ],
          correctAnswerIndex: 1,
          explanation: "Après translocation de l'ADN proviral du cytoplasme vers le noyau à travers les pores nucléaires, l'intégrase clive l'ADN lymphocytaire et y insère définitivement le provirus viral."
        },
        {
          id: "tle_d_svt_c15_p2_ex4",
          type: "mcq",
          prompt: "Quel est le rôle déterminant de la protéase virale lors de la phase finale d'assemblage des nouveaux virions ?",
          options: [
            "Elle découpe les longues polyprotéines précurseurs immatures en protéines structurales et enzymes actives fonctionnelles",
            "Elle fabrique l'enveloppe lipidique de novo à partir du glucose",
            "Elle empêche le virus de quitter la cellule hôte",
            "Elle attire les globules blancs sains pour les nourrir"
          ],
          correctAnswerIndex: 0,
          explanation: "La protéase virale est indispensable à la maturation virale : elle clive spécifiquement les polyprotéines précurseurs (Gag-Pol) pour libérer les enzymes actives et les sous-unités de capside du virion mature infectieux."
        },
        {
          id: "tle_d_svt_c15_p2_ex5",
          type: "mcq",
          prompt: "Comment les nouveaux virions formés quittent-ils le lymphocyte T4 à la fin du cycle réplicatif ?",
          options: [
            "Par bourgeonnement à travers la membrane plasmique du LT4, emportant un morceau de cette membrane enrichie en gp120/gp41",
            "Par phagocytose inversée par les globules rouges",
            "En traversant les glandes sudoripares sans léser la cellule",
            "Par contraction musculaire des ganglions lymphatiques"
          ],
          correctAnswerIndex: 0,
          explanation: "Les particules virales néoformées s'assemblent sous la membrane plasmique de la cellule hôte et sont libérées par bourgeonnement, emportant un lambeau de membrane lymphocytaire qui constitue la bicouche lipidique de l'enveloppe virale."
        },
        {
          id: "tle_d_svt_c15_p2_ex6",
          type: "mcq",
          prompt: "Quelle est la conséquence inéluctable pour le lymphocyte T4 après une phase active de réplication et de bourgeonnement viral massif ?",
          options: [
            "Il se multiplie à l'infini et protège l'organisme",
            "Il subit l'épuisement membranaire, la lyse cellulaire ou l'apoptose, conduisant à sa destruction complète",
            "Il se transforme en bactérie inoffensive",
            "Il migre dans les os pour fabriquer du calcium"
          ],
          correctAnswerIndex: 1,
          explanation: "La production et le bourgeonnement de milliers de virions détruisent l'intégrité de la membrane plasmique et épuisent le métabolisme du lymphocyte T4, provoquant sa mort par lyse cellulaire ou apoptose programmée."
        }
      ]
    },
    {
      id: "pt3_evolution_clinique_trois_phases_vih",
      order: 3,
      title: "Évolution clinique et dynamique biologique de l'infection (les 3 phases du VIH)",
      summary: "Cinétique couplée des 3 paramètres sanguins (charge virale, LT4, anticorps anti-VIH) au cours de la primo-infection (séroconversion), de la phase asymptomatique de latence et du SIDA déclaré.",
      conceptExplanation: "L'évolution naturelle de l'infection par le VIH en l'absence de traitement antirétroviral s'étend sur plusieurs années et se subdivise classiquement en trois grandes phases successives caractérisées par la cinétique couplée de trois paramètres sanguins : la charge virale (virémie), le taux de lymphocytes T4 et le taux d'anticorps anti-VIH.\n\n1. Phase 1 : La primo-infection (de la contamination à environ 6 mois) :\n- Événements biologiques :\n  * Dès l'entrée du virus dans l'organisme, le VIH se dissémine rapidement dans les organes lymphoïdes (ganglions, rate, tissu lymphoïde associé au tube digestif) et se multiplie de façon explosive dans les LT4.\n  * La charge virale (virémie) s'élève à des niveaux extrêmement élevés en quelques semaines.\n  * Le taux de lymphocytes T4 subit une chute transitoire spectaculaire sous l'effet de la lyse virale massive.\n- Réponse immunitaire et séroconversion :\n  * Les LT4 survivants activent les lymphocytes B qui se différencient en plasmocytes sécrétant des anticorps anti-VIH dirigés contre gp120, gp41 et p24. Parallèlement, des LT8 cytotoxiques détruisent les cellules infectées.\n  * L'apparition des anticorps anti-VIH dans le sérum sanguin est appelée la séroconversion (détectable généralement entre 3 et 12 semaines post-infection). L'individu est alors qualifié de séropositif pour le VIH.\n  * L'action neutralisante des anticorps et des LT8 cytotoxiques fait chuter drastiquement la virémie ; le taux de LT4 remonte partiellement sans toutefois retrouver son niveau initial normal (800-1200 LT4/mm³ de sang).\n- Signes cliniques : Souvent asymptomatique, ou syndrome pseudo-grippal bénin et transitoire (fièvre, céphalées, adénopathies, éruption cutanée, fatigue).\n\n2. Phase 2 : La phase asymptomatique (latence clinique de 6 mois à 5-10 ans) :\n- Équilibre biologique précaire : Une bataille permanente s'installe entre la réplication continue du virus et le renouvellement par la moelle osseuse de milliards de LT4 chaque jour. La virémie reste faible et relativement stable (point d'équilibre ou set-point viral) ; le taux d'anticorps anti-VIH demeure très élevé.\n- Érosion insidieuse : Lentement mais inexorablement, le virus accumule des mutations (forte infidélité de la transcriptase inverse) qui lui permettent d'échapper aux anticorps. Le système immunitaire s'épuise progressivement : le taux de lymphocytes T4 diminue régulièrement de 50 à 100 cellules/mm³ par an.\n- État clinique : Le sujet ne présente aucun signe clinique visible de maladie ; il se sent en parfaite santé, mais il est séropositif et très contagieux (par voies sexuelle et sanguine).\n\n3. Phase 3 : La phase symptomatique ou SIDA déclaré (au-delà de 5 à 10 ans) :\n- Effondrement biologique :\n  * Le taux de lymphocytes T4 s'effondre en dessous du seuil critique de 200 cellules/mm³ de sang (taux normal : > 500-1000/mm³).\n  * Faute de LT4 pour stimuler les LB et maintenir les clones mémoires, la production d'anticorps anti-VIH s'effondre à son tour.\n  * Libéré de toute contrainte immunitaire, le virus explose : la charge virale augmente de façon vertigineuse.\n- Traduction clinique : C'est le stade du SIDA (Syndrome d'Immuno-Déficience Acquise). L'organisme sans défense est la proie d'infections et de tumeurs malignes opportunistes qui conduisent inévitablement au décès du patient en l'absence de prise en charge.",
      keyRule: "La séroconversion signe l'apparition des anticorps anti-VIH (séropositivité). La phase asymptomatique masque un déclin régulier des LT4. Le passage au SIDA déclaré intervient quand le taux de LT4 descend en dessous de 200/mm³.",
      formulas: [
        {
          name: "Seuil immunologique critique de définition du SIDA",
          formula: "[\\text{LT4}] < 200\\text{ cellules / mm}^3 \\text{ de sang} \\iff \\text{Stade SIDA avéré et maladies opportunistes}",
          note: "Taux physiologique sain : 600 à 1 200 LT4 / mm³"
        }
      ],
      workedExample: {
        title: "Interprétation d'un profil sérologique et immunologique de patient",
        statement: "Le bilan sanguin d'un patient contaminé par le VIH il y a 7 ans indique : Charge virale : 350 000 copies d'ARN/mL de plasma ; Taux de lymphocytes T4 : 110 cellules/mm³ ; Taux d'anticorps anti-VIH : en chute rapide. Le patient présente un zona étendu et une toux fébrile productive depuis un mois. 1. Déterminer la phase de l'infection dans laquelle se trouve ce patient. 2. Justifier la flambée de la charge virale à ce stade.",
        methodSteps: [
          "Étape 1 : Diagnostiquer la phase de la maladie. Le taux de LT4 est de 110/mm³, soit strictement inférieur au seuil de 200/mm³. Le patient se trouve donc au stade 3 : la phase symptomatique ou SIDA déclaré.",
          "Étape 2 : Justifier la flambée virale. La disparition quasi complète des LT4 prive les lymphocytes B de toute stimulation (plus d'interleukines), ce qui effondre la production d'anticorps neutralisants. Le virus, n'étant plus freiné par les défenses immunitaires, se multiplie sans restriction."
        ],
        conclusion: "Le patient est au stade de SIDA déclaré. L'effondrement des LT4 et des anticorps explique l'explosion de la charge virale et les symptômes opportunistes."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Dynamique biologique des trois phases de l'infection par le VIH",
        tableData: {
          headers: ["Paramètre biologique", "Phase 1 : Primo-infection (0-6 mois)", "Phase 2 : Asymptomatique (6 m - 8 ans)", "Phase 3 : SIDA déclaré (> 8 ans)"],
          rows: [
            ["Charge virale (ARN VIH)", "Pic aigu très élevé puis chute rapide", "Faible et stabilisée (état d'équilibre)", "Explosion vertigineuse continue"],
            ["Taux de LT4", "Chute brutale puis remontée partielle", "Déclin lent, progressif et insidieux", "Effondrement critique sous 200 / mm³"],
            ["Taux d'anticorps anti-VIH", "Nul au départ -> apparition (séroconversion)", "Très élevé et persistant dans le sang", "Chute progressive et quasi-disparition"],
            ["État clinique du sujet", "Pseudo-grippe bénigne ou rien", "Aucun signe visible (en apparente santé)", "Maladies opportunistes graves et cachexie"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c15_p3_ex1",
          type: "mcq",
          prompt: "Que signifie précisément l'affirmation 'Un individu est séropositif pour le VIH' ?",
          options: [
            "Le sérum sanguin du patient contient des anticorps spécifiques dirigés contre les antigènes du VIH, attestant d'une infection",
            "Le patient est définitivement guéri et immunisé contre le VIH",
            "Le patient est atteint d'un cancer du foie sans rapport avec un virus",
            "Le patient a un groupe sanguin O positif"
          ],
          correctAnswerIndex: 0,
          explanation: "La séropositivité au VIH signifie que des anticorps dirigés contre les protéines du virus (gp120, gp41, p24) ont été détectés dans le sérum du patient (par test ELISA confirmé par Western Blot), prouvant la présence du virus dans son organisme."
        },
        {
          id: "tle_d_svt_c15_p3_ex2",
          type: "mcq",
          prompt: "Combien de temps peut durer en moyenne la phase asymptomatique chez un patient séropositif non traité ?",
          options: [
            "Entre 2 et 10 ans (parfois davantage selon les individus)",
            "Strictement 24 heures",
            "Moins de 7 jours",
            "Plus de 150 ans"
          ],
          correctAnswerIndex: 0,
          explanation: "La phase asymptomatique (latence clinique) est longue : elle dure généralement entre 5 et 10 ans. L'individu se sent bien mais son pool de lymphocytes T4 est insidieusement décimé chaque jour."
        },
        {
          id: "tle_d_svt_c15_p3_ex3",
          type: "mcq",
          prompt: "À partir de quel seuil critique de lymphocytes T4 dans le sang considère-t-on que le patient bascule dans la phase de SIDA déclaré ?",
          options: [
            "En dessous de 200 LT4 par mm³ de sang (ou microlitre)",
            "Au-dessus de 10 000 LT4 par mm³",
            "Exactement 5 000 LT4 par mm³",
            "Quand les globules rouges disparaissent entièrement"
          ],
          correctAnswerIndex: 0,
          explanation: "Le seuil clinique universel marquant l'entrée dans le stade SIDA avéré est une baisse des lymphocytes T4 sous les 200 cellules/mm³ de sang (taux normal sain : > 600-1200/mm³)."
        },
        {
          id: "tle_d_svt_c15_p3_ex4",
          type: "mcq",
          prompt: "Au cours de la primo-infection (premières semaines après contamination), comment évolue la charge virale (virémie) ?",
          options: [
            "Elle augmente de façon explosive jusqu'à un pic aigu, puis diminue fortement dès l'apparition des anticorps et des LT8 cytotoxiques",
            "Elle reste strictement nulle pendant 10 ans",
            "Elle baisse immédiatement et disparaît pour toujours",
            "Elle se transforme en vitamine D"
          ],
          correctAnswerIndex: 0,
          explanation: "Au cours des premières semaines, le virus se réplique à grande vitesse en l'absence initiale de défenses immunitaires spécifiques. Dès que les anticorps et les cellules T cytotoxiques apparaissent (séroconversion), la virémie chute fortement."
        },
        {
          id: "tle_d_svt_c15_p3_ex5",
          type: "mcq",
          prompt: "Quelle différence fondamentale de concept existe-t-il entre le VIH et le SIDA ?",
          options: [
            "Le VIH est l'agent pathogène viral causal, tandis que le SIDA est le stade terminal de la maladie caractérisé par l'effondrement immunitaire et les maladies opportunistes",
            "Le VIH est une maladie et le SIDA est un vaccin préventif",
            "Le SIDA est une bactérie et le VIH est un champignon microscopique",
            "Il n'y a aucune différence, ce sont deux synonymes parfaits désignant le même microbe"
          ],
          correctAnswerIndex: 0,
          explanation: "Le VIH est le virus (l'agent biologique causal). Le SIDA (Syndrome d'Immuno-Déficience Acquise) est le stade ultime de l'infection où les défenses immunitaires sont anéanties, laissant place aux affections opportunistes."
        },
        {
          id: "tle_d_svt_c15_p3_ex6",
          type: "mcq",
          prompt: "Pourquoi observe-t-on une chute du taux d'anticorps anti-VIH lors de la phase 3 de SIDA déclaré ?",
          options: [
            "Parce que la quasi-disparition des LT4 (qui sécrètent les interleukines indispensables) paralyse la stimulation et la différenciation des lymphocytes B en plasmocytes",
            "Parce que tous les anticorps se changent spontanément en graisse",
            "Parce que le foie cesse de fabriquer des globules rouges",
            "Parce que le virus détruit directement la moelle osseuse entière en 2 heures"
          ],
          correctAnswerIndex: 0,
          explanation: "Les LT4 sont les pivots de la coopération cellulaire : sans interleukines produites par les LT4 helpers, les lymphocytes B ne peuvent plus se multiplier ni se différencier en plasmocytes producteurs d'anticorps, entraînant la chute des anticorps circulants."
        }
      ]
    },
    {
      id: "pt4_maladies_opportunistes_diagnostic_prevention",
      order: 4,
      title: "Dysfonctionnement immunitaire, maladies opportunistes, dépistage et prévention",
      summary: "Rupture de la coopération immunitaire par déficit en interleukines, infections opportunistes (tuberculose, candidose, sarcome de Kaposi), diagnostic néonatal (IgG maternelles vs PCR) et trithérapies ARV.",
      conceptExplanation: "L'anéantissement de la population de lymphocytes T4 prive l'organisme de son coordinateur immunitaire central et le rend vulnérable à des germes habituellement inoffensifs.\n\n1. Le dysfonctionnement global de la réponse immunitaire :\n- Rôle central du LT4 : Le lymphocyte T4 est le 'chef d'orchestre' de l'immunité adaptative. Par sa sécrétion de cytokines (notamment l'interleukine-2 ou IL-2), il stimule :\n  * La prolifération et la différenciation des lymphocytes B en plasmocytes sécréteurs d'anticorps (immunité humorale) ;\n  * La prolifération et la différenciation des lymphocytes T8 en lymphocytes T cytotoxiques tueurs (immunité à médiation cellulaire) ;\n  * L'activation accrue des macrophages et des cellules NK.\n- Conséquence de la déplétion des LT4 : La perte des LT4 paralyse simultanément l'immunité humorale ET l'immunité cellulaire. L'organisme entre en état d'anergie immunitaire complète.\n\n2. Les maladies opportunistes associées au SIDA :\n- Définition : Maladies provoquées par des micro-organismes (bactéries, virus, champignons microscopiques, parasites) couramment présents dans l'environnement ou dans notre microbiote, mais incapables de déclencher une pathologie chez un individu dont le système immunitaire est compétent.\n- Principales affections opportunistes majeures en Côte d'Ivoire et en Afrique :\n  * Tuberculose pulmonaire et extrapulmonaire (due à Mycobacterium tuberculosis) : Première cause de mortalité chez les personnes vivant avec le VIH en Afrique subsaharienne ;\n  * Candidoses digestives (muguet buccal, candidose œsophagienne due à Candida albicans) rendant la déglutition douloureuse et impossible ;\n  * Pneumocystose pulmonaire (pneumonie grave à Pneumocystis jirovecii) ;\n  * Cryptococcose neuro-méningée (méningite fongique à Cryptococcus neoformans) ;\n  * Toxoplasmose cérébrale (abcès cérébraux dus à Toxoplasma gondii) ;\n  * Sarcome de Kaposi : Tumeur vasculaire cutanéo-muqueuse induite par le virus HHV-8, formant des nodules et plaques violacées caractéristiques sur la peau et le palais ;\n  * Diarrhées chroniques rebelles et syndrome d'émaciation ('slim disease') entraînant une dénutrition cachectique rapide.\n\n3. Dépistage et diagnostic néonatal :\n- Tests sérologiques de dépistage (ELISA rapide confirmé par Western Blot) : Détectent les anticorps anti-VIH et l'antigène p24.\n- Diagnostic précoce chez l'enfant né de mère séropositive :\n  * Problème immunologique fondamental : Les anticorps maternels de type IgG anti-VIH traversent la barrière placentaire pendant la grossesse. Tous les enfants nés de mères séropositives sont donc séropositifs à la naissance (test ELISA positif), sans être obligatoirement infectés par le virus !\n  * Solution diagnostique : Il faut doser la charge virale par PCR (recherche directe de l'ARN viral ou de l'ADN proviral du VIH dans les cellules sanguines de l'enfant) et suivre la disparition progressive des anticorps maternels sur 12 à 18 mois pour statuer sur le statut réel du nourrisson.\n\n4. Prévention et prise en charge thérapeutique :\n- Voies de transmission : Voie sexuelle (sécrétions séminales et vaginales lors de rapports non protégés), voie sanguine (transfusion non contrôlée, partage de seringues, matériel souillé) et transmission materno-fœtale (grossesse, accouchement, allaitement maternel).\n- Moyens préventifs :\n  * Préservatifs masculin et féminin lors de chaque rapport sexuel ;\n  * Dépistage volontaire régulier et fidélité au sein du couple séronégatif ;\n  * Matériel à usage unique stérile (seringues, aiguilles, instruments traditionnels d'excision/scarification) ;\n  * Prévention de la Transmission Mère-Enfant (PTME) : Traitement antirétroviral de la mère enceinte, accouchement médicalisé et allaitement artificiel sécurisé ou encadré sous ARV.\n- Traitement médical : Les trithérapies antirétrovirales (association de 3 molécules inhibant différentes enzymes du virus : transcriptase inverse, intégrase, protéase). Elles ne guérissent pas définitivement le VIH (le provirus reste tapi dans les réservoirs cellulaires latents), mais elles bloquent sa réplication, rendent la charge virale indétectable dans le sang (I=I : Indétectable = Intransmissible) et permettent la reconstitution du pool de LT4, offrant une espérance et une qualité de vie quasi normales aux patients.",
      keyRule: "La destruction des LT4 paralyse l'immunité humorale (LB) et cellulaire (LT8). Les maladies opportunistes (tuberculose, candidoses, Kaposi) causent le décès. Chez le nouveau-né, la séropositivité initiale est due aux IgG maternelles placentaires : seule la PCR tranche l'infection réelle. La trithérapie assure I=I.",
      formulas: [
        {
          name: "Coopération cellulaire orchestrée par le LT4",
          formula: "\\text{LT4 activé} \\xrightarrow{\\text{Interleukine-2 (IL-2)}} \\begin{cases} \\text{LB} \\rightarrow \\text{Plasmocytes} \\rightarrow \\text{Anticorps neutralisants} \\\\ \\text{LT8} \\rightarrow \\text{LT cytotoxiques (perforines/granzymes)} \\end{cases}",
          note: "Sans LT4, l'ensemble des réponses spécifiques est inhibé"
        }
      ],
      workedExample: {
        title: "Interprétation des résultats sérologiques chez un enfant né de mère séropositive",
        statement: "Une mère séropositive pour le VIH (test ELISA positif, charge virale 15 000 copies/mL) donne naissance à un enfant E. À la naissance, le test ELISA de l'enfant est positif mais sa charge virale plasmatique par PCR est strictement égale à 0. À l'âge de 14 mois, un nouveau test ELISA chez l'enfant se révèle négatif. 1. Expliquer pourquoi l'enfant était séropositif à la naissance sans être infecté. 2. Justifier la négativation du test à 14 mois et conclure sur son état de santé.",
        methodSteps: [
          "Étape 1 : Expliquer la séropositivité néonatale. Durant la vie intra-utérine, les anticorps maternels de classe IgG traversent activement le placenta. L'enfant possède donc les anticorps anti-VIH de sa mère, ce qui rend le test ELISA positif. L'absence de virus (PCR = 0) prouve que le VIH n'a pas franchi la barrière fœto-placentaire.",
          "Étape 2 : Expliquer l'évolution à 14 mois. Les anticorps maternels passifs ne sont pas renouvelés par l'enfant et se dégradent spontanément au cours de la première année de vie.",
          "Étape 3 : Conclure sur le statut de l'enfant. L'enfant n'a jamais été infecté par le VIH : il est indemne et parfaitement séronégatif."
        ],
        conclusion: "L'enfant était simplement porteur des anticorps maternels transplacentaires. Sa charge virale nulle et sa séronégativité à 14 mois confirment qu'il n'est pas contaminé."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Panorama des maladies opportunistes et stratégies de lutte contre le VIH",
        tableData: {
          headers: ["Type d'agent pathogène", "Maladie opportuniste", "Organe touché / Symptôme clé", "Moyen thérapeutique / Prévention"],
          rows: [
            ["Bactérie (bacille de Koch)", "Tuberculose", "Poumons, toux sanglante, fièvre, amaigrissement", "Antibiotiques antituberculeux (Rifampicine, Isoniazide)"],
            ["Champignon microscopique", "Candidose œsophagienne", "Bouche, gorge, dysphagie douloureuse", "Antifongiques (Fluconazole)"],
            ["Parasite protozoaire", "Toxoplasmose cérébrale", "Cerveau, céphalées, paralysies focales", "Antiparasitaires spécifiques"],
            ["Virus oncogène (HHV-8)", "Sarcome de Kaposi", "Peau, muqueuse buccale, taches violacées", "Restauration immunitaire par trithérapie ARV"],
            ["Transmission sexuelle", "Contamination par rapports", "Organes génitaux et sang", "Préservatifs systématiques, dépistage régulier"],
            ["Transmission materno-fœtale", "Infection du nouveau-né", "In utero, accouchement, allaitement", "Protocole PTME sous ARV dès la grossesse"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c15_p4_ex1",
          type: "mcq",
          prompt: "Pourquoi qualifie-t-on couramment le lymphocyte T4 de 'chef d'orchestre' du système immunitaire adaptatif ?",
          options: [
            "Parce qu'il produit à lui seul tous les globules rouges de la moelle",
            "Parce qu'il sécrète des interleukines stimulant à la fois la différenciation des lymphocytes B (anticorps) et des lymphocytes T8 (cellules tueuses)",
            "Parce qu'il digère physiquement les os pour les renouveler",
            "Parce qu'il contrôle la fréquence cardiaque"
          ],
          correctAnswerIndex: 1,
          explanation: "Le lymphocyte T4 coordonne l'ensemble des réponses spécifiques grâce à l'interleukine qu'il libère, indispensable à l'amplification clonale et à la différenciation des LB en plasmocytes et des LT8 en cellules cytotoxiques."
        },
        {
          id: "tle_d_svt_c15_p4_ex2",
          type: "mcq",
          prompt: "Quelle est la définition scientifique rigoureuse d'une maladie opportuniste au cours du SIDA ?",
          options: [
            "Une infection par un germe habituellement peu dangereux pour un sujet sain, mais qui devient grave ou mortel en profitant de la défaillance des défenses immunitaires",
            "Une maladie causée exclusivement par une carence alimentaire en vitamine C",
            "Une allergie printanière au pollen des graminées",
            "Une fracture osseuse survenue lors d'un effort intense"
          ],
          correctAnswerIndex: 0,
          explanation: "Une maladie opportuniste tire parti de la faiblesse des défenses immunitaires (taux de LT4 effondré) pour proliférer et infecter des organes vitaux, alors que l'organisme sain l'élimine sans difficulté."
        },
        {
          id: "tle_d_svt_c15_p4_ex3",
          type: "mcq",
          prompt: "Pourquoi un nouveau-né issu d'une mère séropositive au VIH présente-t-il systématiquement un test sérologique ELISA positif à la naissance sans être forcément infecté ?",
          options: [
            "Parce qu'il produit ses propres anticorps dès le 2e mois de grossesse",
            "Parce que les anticorps maternels de classe IgG anti-VIH traversent librement la barrière placentaire et circulent dans le sang du fœtus",
            "Parce que le test ELISA réagit avec le lait maternel absorbé",
            "Parce que les nouveau-nés n'ont jamais de système immunitaire"
          ],
          correctAnswerIndex: 1,
          explanation: "Les anticorps maternels IgG franchissent le placenta pendant la grossesse pour protéger le fœtus. L'enfant possède donc les anticorps de sa mère à la naissance (ELISA positif), ce qui ne prouve pas qu'il a contracté le virus. Seule la recherche directe du virus (PCR) le confirmera."
        },
        {
          id: "tle_d_svt_c15_p4_ex4",
          type: "mcq",
          prompt: "Quelle infection bactérienne opportuniste constitue la première cause de morbidité et de mortalité chez les personnes vivant avec le VIH en Afrique subsaharienne ?",
          options: [
            "La tuberculose pulmonaire ou disséminée (Mycobacterium tuberculosis)",
            "Le tétanos néonatal",
            "La grippe saisonnière",
            "Le rhume banal"
          ],
          correctAnswerIndex: 0,
          explanation: "La tuberculose est la principale maladie opportuniste associée au VIH en Afrique. La baisse des lymphocytes T4 réactive les bacilles tuberculeux quiescents, causant des formes sévères et rapidement mortelles."
        },
        {
          id: "tle_d_svt_c15_p4_ex5",
          type: "mcq",
          prompt: "Comment les combinaisons de traitements antirétroviraux (trithérapies ARV) agissent-elles contre le VIH dans l'organisme ?",
          options: [
            "Elles bloquent simultanément plusieurs enzymes virales clés (transcriptase inverse, intégrase, protéase), arrêtant la réplication du virus",
            "Elles détruisent tous les lymphocytes T4 du corps pour affamer le virus",
            "Elles remplacent l'ADN du patient par de l'ARN synthétique",
            "Elles dissolvent les poumons du malade"
          ],
          correctAnswerIndex: 0,
          explanation: "Les trithérapies combinent des molécules ciblant différentes étapes enzymatiques du virus (inhibiteurs de la transcriptase inverse, de l'intégrase ou de la protéase), empêchant le virus de se répliquer sans détruire les cellules de l'hôte."
        },
        {
          id: "tle_d_svt_c15_p4_ex6",
          type: "mcq",
          prompt: "Que désigne le concept médical moderne universellement reconnu 'I = I' (Indétectable = Intransmissible) concernant le VIH ?",
          options: [
            "Une personne séropositive sous ARV efficace avec une charge virale sanguine indétectable depuis plus de 6 mois ne peut pas transmettre le VIH par voie sexuelle",
            "Un virus indétectable a muté en bactérie inoffensive",
            "Toute infection indétectable entraîne l'immunité définitive de toute la population",
            "Le virus disparaît spontanément du corps sans aucun médicament"
          ],
          correctAnswerIndex: 0,
          explanation: "Le consensus médical international I=I établit qu'une personne séropositive sous traitement antirétroviral bien conduit, dont la charge virale est indétectable dans le sang, ne transmet plus le virus à ses partenaires sexuels."
        }
      ]
    }
  ]
};
