import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L05_SYSTEME_DEFENSE_ORGANISME: CurriculumChapter = {
  id: "terminale_d_svt_ch06_le_systeme_de_defense_de_l_organisme",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 6,
  title: "Le système de défense de l'organisme (Immunologie : Soi et non-soi, RIMC, RIMH, coopération cellulaire et vaccination)",
  summary: "Étude exhaustive des mécanismes de l'immunité selon le programme officiel de Côte d'Ivoire (Leçon 6 SVT Tle D) : défenses innées non spécifiques (barrières anatomiques, réaction inflammatoire aiguë, phagocytose et système du complément), bases moléculaires du soi et du non-soi (système ABO, CMH/HLA de classe I et II, immunologie des greffes et rejets), réponse spécifique humorale (RIMH, LB, plasmocytes, immunoglobulines et complexes immuns), réponse spécifique cellulaire (RIMC, LT8, perforine et cytolyse), coopération cellulaire indispensable orchestrée par les LT4, dysfonctionnements du système immunitaire (infection à VIH/SIDA) et applications médicales (vaccination et sérothérapie).",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_defense_innee_barrieres_inflammation_phagocytose",
      order: 1,
      title: "L'immunité innée non spécifique : Barrières naturelles, réaction inflammatoire et phagocytose",
      summary: "Organisation des barrières anatomiques mécaniques, chimiques et écologiques, étapes et médiateurs de la réaction inflammatoire locale, mécanisme séquentiel de la phagocytose et cascade du complément.",
      conceptExplanation: "L'organisme humain vit dans un environnement peuplé de micro-organismes potentiellement pathogènes (bactéries, virus, champignons, parasites). Dès leur contact, une première ligne de défense innée, immédiate, non spécifique et sans mémoire immunitaire se mobilise pour préserver l'intégrité corporelle.\n\n1. Les barrières naturelles anatomiques (1ère ligne de défense) :\n- Les barrières mécaniques : La peau intacte avec sa couche cornée kératinisée imperméable en perpétuelle desquamation, et les muqueuses tapissant les cavités ouvertes (voies respiratoires, digestives, urogénitales) munies de cils vibratiles qui refoulent les poussières et microbes vers l'extérieur.\n- Les barrières chimiques : Des sécrétions riches en substances microbicides ou bactériostatiques :\n  - Le sébum et la sueur acide (pH compris entre 3,5 et 5,0) qui créent un milieu défavorable à la prolifération microbienne.\n  - Les larmes, la salive et le mucus nasal contenant le lysozyme, enzyme détruisant la paroi peptidoglycane des bactéries.\n  - Le suc gastrique très acide (pH 1 à 2) détruisant la majorité des germes ingérés.\n  - Les sécrétions alcalines pancréatiques et biliaires du duodénum (pH ~8) provoquant un choc osmotique et enzymatique brutal.\n  - La spermine du liquide séminal masculin et l'acidité des sécrétions vaginales chez la femme.\n- La barrière écologique ou biologique : Le microbiote commensal (flore intestinale, cutanée et vaginale) composé de milliards de bactéries non pathogènes qui occupent les niches écologiques et sécrètent des bactériocines, empêchant l'implantation d'espèces invasives.\n\n2. La réaction inflammatoire aiguë (2ème ligne de défense) :\nLorsqu'une brèche cutanée survient (piqûre d'épine, plaie), des bactéries pénètrent dans le tissu conjonctif du derme. Une réaction locale stéréotypée s'enclenche, caractérisée par quatre signes cardinaux décrits par Celse :\n- La rougeur (érythème) et la chaleur locale : dues à une vasodilatation artériolaire intense sous l'effet de médiateurs chimiques vasoactifs.\n- Le gonflement (œdème ou enflure) : causé par une augmentation de la perméabilité des capillaires sanguins, permettant la fuite d'un liquide riche en protéines plasmatiques (exsudat inflammatoire) vers le tissu interstitiel.\n- La douleur : provoquée par la compression mécanique des terminaisons nerveuses sensitives libres et par la stimulation chimique directe par des algogènes (bradykinine, histamine, prostaglandines).\n- La perte de fonction du tissu atteint (signe de Virchow).\n- Acteurs cellulaires de l'inflammation : Les mastocytes tissulaires et les cellules dendritiques sentinelles détectent les motifs moléculaires associés aux pathogènes (PAMP) et dégranulent massivement de l'histamine, des kinines, des cytokines pro-inflammatoires (TNF-alpha, IL-1) et des chimiokines attirant les leucocytes sanguins par chimiotactisme.\n\n3. La phagocytose et les phagocytes :\nLes leucocytes circulants (polynucléaires neutrophiles d'abord, puis monocytes sanguins qui se transforment en volumineux macrophages très mobiles) adhèrent à l'endothélium vasculaire, s'aplatissent et traversent la paroi capillaire par diapédèse pour converger vers le foyer infectieux. La phagocytose se déroule en quatre étapes ordonnées :\n- Étape 1 : Adhésion (reconnaissance et fixation) : La membrane plasmique du phagocyte s'attache à la surface du microbe grâce à ses récepteurs de reconnaissance de motifs (PRR) ou par l'intermédiaire d'opsonines (anticorps IgG ou fractions C3b du complément qui recouvrent l'antigène : opsonisation).\n- Étape 2 : Ingestion / Absorption : Le phagocyte émet des prolongements cytoplasmiques (pseudopodes) qui englobent la bactérie dans une vacuole intracellulaire appelée phagosome.\n- Étape 3 : Digestion : Les lysosomes du phagocyte fusionnent avec le phagosome pour former un phagolysosome. Leurs enzymes hydrolytiques (lysozyme, protéases, hydrolases acides) et les dérivés réactifs cytotoxiques de l'oxygène détruisent et digèrent la bactérie en 15 à 30 minutes.\n- Étape 4 : Rejet des déchets (exocytose) : Les débris solubles inoffensifs sont expulsés à l'extérieur de la cellule.\n- Évolution possible : Si l'infection est virulente, les phagocytes meurent en grand nombre au combat, formant un amas de débris cellulaires et de germes appelé le pus. Si les microbes franchissent la zone de la plaie, ils gagnent les vaisseaux lymphatiques vers les ganglions (adénite, lymphangite) et peuvent atteindre la circulation générale, causant une septicémie mortelle ou une toxémie (diffusion de toxines bactériennes).\n\n4. Le système du complément :\nEnsemble d'une trentaine de protéines plasmatiques synthétisées par le foie, inactives au repos. Activées en cascade (voie classique déclenchée par le complexe immun ou voie alterne), elles exercent trois actions majeures : la stimulation de l'inflammation (chimiotactisme), l'opsonisation des germes facilitant leur phagocytose, et la destruction directe par cytolyse osmotique grâce au Complexe d'Attaque Membranaire (CAM) perforant la membrane microbienne.",
      keyRule: "L'immunité innée non spécifique comprend les barrières naturelles, la réaction inflammatoire locale et la phagocytose assurée par les polynucléaires neutrophiles et les macrophages. Les 4 étapes de la phagocytose sont : Adhésion -> Ingestion -> Digestion -> Excrétion des débris.",
      formulas: [
        {
          name: "Séquence dynamique de la phagocytose",
          formula: "\\text{Chimiotactisme} \\longrightarrow \\text{Diapédèse} \\longrightarrow \\text{Adhésion (Opsonisation)} \\longrightarrow \\text{Phagosome} \\longrightarrow \\text{Phagolysosome (Digestion)} \\longrightarrow \\text{Exocytose}",
          note: "Assure l'élimination immédiate des corps étrangers sans apprentissage préalable"
        }
      ],
      workedExample: {
        title: "Analyse des conséquences d'une piqûre d'épine septique sur la peau",
        statement: "Un élève se pique profondément le doigt avec une épine souillée de terre. Quelques heures plus tard, la région entourant la piqûre devient rouge, tuméfiée, chaude et très douloureuse. Le lendemain, un ganglion lymphatique au pli du coude devient palpable et douloureux. Expliquer la genèse de ces symptômes et l'intervention des lignes de défense.",
        methodSteps: [
          "Étape 1 : Analyser le franchissement de la 1ère barrière. L'épine a perforé la couche cornée de l'épiderme, rompant la barrière mécanique cutanée et introduisant des bactéries dans le derme.",
          "Étape 2 : Expliquer les signes locaux de l'inflammation. Les mastocytes activés libèrent de l'histamine et des kinines qui provoquent une vasodilatation (responsable de la rougeur et de la chaleur), augmentent la perméabilité capillaire (sortie d'exsudat formant l'œdème/tuméfaction) et stimulent les terminaisons nerveuses sensitives (douleur).",
          "Étape 3 : Décrire la réponse cellulaire locale. Les polynucléaires neutrophiles et les monocytes arrivent par diapédèse et réalisent la phagocytose des bactéries.",
          "Étape 4 : Expliquer la tuméfaction ganglionnaire. Les bactéries n'ayant pas été toutes détruites localement ont migré dans les vaisseaux lymphatiques jusqu'au ganglion régional. Les lymphocytes et macrophages du ganglion se multiplient activement pour former un filtre de sécurité : c'est l'adénite réactionnelle."
        ],
        conclusion: "Les symptômes traduisent la mise en jeu successive de la réaction inflammatoire locale d'abord, puis de la barrière ganglionnaire lymphoïde secondaire."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Les acteurs et mécanismes de l'immunité innée non spécifique",
        caption: "La phagocytose se déroule en 4 étapes séquentielles : adhésion du phagocyte, ingestion par pseudopodes, digestion enzymatique dans le phagolysosome et rejet des déchets.",
        svgContent: `<svg viewBox="0 0 620 220" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Les 4 étapes de la phagocytose">
  <rect x="5" y="5" width="610" height="210" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  <g transform="translate(15, 15)">
    <rect x="0" y="0" width="135" height="180" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" />
    <text x="67" y="22" font-size="11" font-weight="900" text-anchor="middle" fill="#15803D">1. ADHÉSION</text>
    <path d="M 10 145 Q 40 95 70 115 Q 100 135 125 145 L 125 170 L 10 170 Z" fill="#BBF7D0" stroke="#16A34A" stroke-width="1.5" />
    <ellipse cx="68" cy="100" rx="14" ry="8" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5" transform="rotate(-15, 68, 100)" />
    <text x="67" y="165" font-size="9.5" text-anchor="middle" fill="#166534">Reconnaissance</text>
  </g>
  <path d="M 155 105 L 168 105" stroke="#16A34A" stroke-width="2.5" />
  <g transform="translate(170, 15)">
    <rect x="0" y="0" width="135" height="180" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" />
    <text x="67" y="22" font-size="11" font-weight="900" text-anchor="middle" fill="#15803D">2. INGESTION</text>
    <path d="M 10 145 C 25 75, 50 55, 55 80 C 60 105, 75 105, 80 80 C 85 55, 110 75, 125 145 Z" fill="#BBF7D0" stroke="#16A34A" stroke-width="1.5" />
    <ellipse cx="67" cy="87" rx="13" ry="7" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5" />
    <text x="67" y="165" font-size="9.5" text-anchor="middle" fill="#166534">Pseudopodes</text>
  </g>
  <path d="M 310 105 L 323 105" stroke="#16A34A" stroke-width="2.5" />
  <g transform="translate(325, 15)">
    <rect x="0" y="0" width="135" height="180" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" />
    <text x="67" y="22" font-size="11" font-weight="900" text-anchor="middle" fill="#15803D">3. DIGESTION</text>
    <ellipse cx="67" cy="110" rx="55" ry="42" fill="#BBF7D0" stroke="#16A34A" stroke-width="1.5" />
    <circle cx="67" cy="110" r="22" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5" stroke-dasharray="2,2" />
    <circle cx="62" cy="107" r="3.5" fill="#EF4444" />
    <circle cx="72" cy="111" r="3" fill="#EF4444" />
    <circle cx="66" cy="117" r="2.5" fill="#EF4444" />
    <circle cx="50" cy="93" r="4.5" fill="#F59E0B" />
    <circle cx="84" cy="93" r="4.5" fill="#F59E0B" />
    <text x="67" y="165" font-size="9.5" text-anchor="middle" fill="#166534">Phagolysosome</text>
  </g>
  <path d="M 465 105 L 478 105" stroke="#16A34A" stroke-width="2.5" />
  <g transform="translate(480, 15)">
    <rect x="0" y="0" width="125" height="180" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" />
    <text x="62" y="22" font-size="11" font-weight="900" text-anchor="middle" fill="#15803D">4. REJET</text>
    <path d="M 10 145 Q 30 105 50 110 C 60 113, 65 113, 75 110 Q 95 105, 115 145 Z" fill="#BBF7D0" stroke="#16A34A" stroke-width="1.5" />
    <circle cx="62" cy="80" r="3" fill="#94A3B8" />
    <circle cx="56" cy="69" r="2.5" fill="#94A3B8" />
    <circle cx="68" cy="65" r="2" fill="#94A3B8" />
    <path d="M 62 100 L 62 73" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="2,2" />
    <text x="62" y="165" font-size="9.5" text-anchor="middle" fill="#166534">Exocytose</text>
  </g>
</svg>`,
        tableData: {
          headers: ["Ligne de défense", "Éléments constitutifs", "Mécanisme d'action", "Finalité physiologique"],
          rows: [
            ["1ère barrière (Mécanique)", "Peau cornée, kératine, mucus, cils", "Arrêt physique et évacuation continue", "Empêcher la pénétration des microbes"],
            ["1ère barrière (Chimique)", "Sueur (pH 3,5), lysozyme, suc gastrique (pH 1-2)", "Destruction de la paroi bactérienne, choc acido-basique", "Bactéricide et bactériostatique immédiat"],
            ["2ème ligne (Inflammation)", "Mastocytes, histamine, kinines, prostaglandines", "Vasodilatation, diapédèse et afflux leucocytaire", "Mobiliser les défenses sanguines au foyer infectieux"],
            ["2ème ligne (Cellulaire)", "Polynucléaires neutrophiles et macrophages", "Phagocytose en 4 étapes (phagolysosome)", "Englober et digérer les agents pathogènes"],
            ["2ème ligne (Humorale innée)", "Protéines du complément (voie alterne / CAM)", "Perforation membranaire et opsonisation", "Lyse osmotique directe des bactéries"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c06_p1_ex1",
          type: "mcq",
          prompt: "Quelle substance enzymatique présente dans la salive, les larmes et le mucus nasal est capable de lyser la paroi cellulaire des bactéries ?",
          options: [
            "Le lysozyme",
            "L'amylase",
            "L'acide chlorhydrique",
            "L'insuline"
          ],
          correctAnswerIndex: 0,
          explanation: "Le lysozyme est une enzyme bactéricide puissante hydrolysant les liaisons peptidoglycanes de la paroi bactérienne, constituant une barrière chimique essentielle de l'immunité innée."
        },
        {
          id: "tle_d_svt_c06_p1_ex2",
          type: "mcq",
          prompt: "Par quel mécanisme les globules blancs (polynucléaires et monocytes) franchissent-ils la paroi des capillaires sanguins pour gagner le tissu infecté ?",
          options: [
            "La diapédèse",
            "L'opsonisation",
            "La cytolyse",
            "La mitose"
          ],
          correctAnswerIndex: 0,
          explanation: "La diapédèse est le processus actif par lequel les leucocytes déforment leur cytoplasme et s'insinuent entre les cellules endothéliales des vaisseaux sanguins dilatés pour rejoindre le foyer inflammatoire."
        },
        {
          id: "tle_d_svt_c06_p1_ex3",
          type: "mcq",
          prompt: "Quel est l'ordre chronologique exact des étapes de la phagocytose d'une bactérie ?",
          options: [
            "Adhésion -> Ingestion (formation du phagosome) -> Digestion enzymatique -> Exocytose des débris",
            "Digestion -> Adhésion -> Excrétion -> Ingestion",
            "Ingestion -> Diapédèse -> Opsonisation -> Lyse",
            "Fixation du complément -> Mitose -> Dégranulation -> Adhésion"
          ],
          correctAnswerIndex: 0,
          explanation: "La phagocytose débute obligatoirement par la fixation/adhésion à la particule, suivie de l'ingestion par les pseudopodes dans un phagosome, de la fusion avec les lysosomes pour la digestion, et de l'excrétion finale des résidus."
        },
        {
          id: "tle_d_svt_c06_p1_ex4",
          type: "mcq",
          prompt: "Quelle cellule sanguine se différencie en macrophage volumineux une fois arrivée dans les tissus conjonctifs infectés ?",
          options: [
            "Le monocyte",
            "L'hématie (globule rouge)",
            "Le lymphocyte B",
            "Le thrombocyte (plaquette)"
          ],
          correctAnswerIndex: 0,
          explanation: "Les monocytes circulants quittent le torrent circulatoire au cours de l'inflammation et s'hypertrophient dans les tissus pour devenir des macrophages résidents hautement phagocytaires."
        },
        {
          id: "tle_d_svt_c06_p1_ex5",
          type: "mcq",
          prompt: "Comment nomme-t-on le gonflement douloureux des ganglions lymphatiques régionaux drainant un foyer d'infection microbienne persistant ?",
          options: [
            "L'adénite",
            "La lymphangite",
            "La septicémie",
            "La toxémie"
          ],
          correctAnswerIndex: 0,
          explanation: "L'adénite est l'inflammation des ganglions lymphatiques, qui gonflent sous l'effet de la prolifération des phagocytes et lymphocytes luttant contre l'extension de l'infection. La lymphangite concerne l'inflammation des vaisseaux lymphatiques."
        },
        {
          id: "tle_d_svt_c06_p1_ex6",
          type: "mcq",
          prompt: "Quelle est l'action destructrice directe exercée par les protéines activées du système du complément sur les micro-organismes ?",
          options: [
            "La constitution d'un complexe d'attaque membranaire (CAM) perforant la membrane et provoquant la cytolyse osmotique",
            "La coagulation immédiate de tout le plasma environnant",
            "La destruction de la moelle osseuse hématopoïétique",
            "La transformation irréversible des bactéries en cellules eucaryotes"
          ],
          correctAnswerIndex: 0,
          explanation: "Le complexe d'attaque membranaire (CAM) s'insère dans la bicouche lipidique de la membrane bactérienne, y formant des pores à travers lesquels l'eau s'engouffre massivement, entraînant l'éclatement (cytolyse) de la cellule microbienne."
        }
      ]
    },
    {
      id: "pt2_soi_non_soi_cmh_hla_immunologie_greffes",
      order: 2,
      title: "Le Soi, le Non-Soi, le CMH/HLA et l'immunologie des greffes",
      summary: "Définition biologique du soi et du non-soi, marqueurs génétiques membranaires (système ABO, Rhésus et complexe majeur d'histocompatibilité CMH de classe I et II), typologie des greffes et mécanismes immunitaires de tolérance et de rejet.",
      conceptExplanation: "Pour maintenir son intégrité biologique, le système immunitaire doit être capable de distinguer parfaitement ce qui lui appartient en propre (le Soi) de tout élément étranger à neutraliser (le Non-Soi).\n\n1. Définition et marqueurs du 'Soi' biologique :\nLe Soi représente l'ensemble des molécules et cellules propres à un individu résultant de l'expression de son patrimoine génétique unique (génome). Ces molécules sont exposées à la surface des membranes plasmiques comme des cartes d'identité moléculaires :\n- Les marqueurs érythrocytaires (globules rouges) :\n  - Le système ABO : Présence ou absence d'agglutinogènes glucidiques membranaires (antigène A, antigène B, ou aucun pour le groupe O), en relation avec des agglutinines naturelles circulant dans le sérum (anticorps anti-B chez A, anti-A chez B, anti-A et anti-B chez O, aucun chez AB). Une transfusion incompatible déclenche l'agglutination et la lyse des globules rouges par les anticorps du receveur.\n  - Le système Rhésus : Présence de l'antigène D (Rhésus positif Rh+) ou absence (Rhésus négatif Rh-).\n- Le Complexe Majeur d'Histocompatibilité (CMH) ou système HLA (Human Leukocyte Antigen) :\n  - Situé sur le bras court du chromosome 6 chez l'homme, le locus CMH comprend une famille de gènes hautement polymorphes (gènes A, B, C pour la classe I ; DP, DQ, DR pour la classe II) transmis de façon codominante. La diversité allélique est telle qu'en dehors de deux vrais jumeaux (monozygotes), la probabilité que deux individus aient un CMH parfaitement identique est quasi nulle.\n  - Molécules de CMH de classe I (HLA-A, HLA-B, HLA-C) : Présentes à la surface de TOUTES les cellules nucléées de l'organisme et des plaquettes (absentes des globules rouges qui n'ont pas de noyau). Elles présentent des peptides endogènes (peptides du soi ou peptides viraux synthétisés par une cellule infectée) aux lymphocytes T8 cytotoxiques (CD8+).\n  - Molécules de CMH de classe II (HLA-DP, HLA-DQ, HLA-DR) : Présentes exclusivement sur les cellules présentatrices d'antigènes spécialisées (CPA : macrophages, cellules dendritiques, lymphocytes B). Elles présentent des peptides exogènes (peptides microbiens phagocytés et apprêtés) aux lymphocytes T4 auxiliaires (CD4+).\n\n2. Le 'Non-Soi' et la notion d'antigène :\n- Le Non-Soi : Tout élément biologique ou chimique non toléré par l'organisme dont la présence déclenche une réponse immunitaire spécifique : corps étrangers exogènes (microbes, virus, toxines, cellules d'un greffon) ou cellules du soi modifiées endogènes (cellules cancéreuses, cellules infectées présentant des antigènes viraux).\n- L'antigène (Ag) : Toute substance capable d'induire une réaction immunitaire spécifique et de réagir spécifiquement avec les effecteurs produits (anticorps ou lymphocytes T). Un antigène porte à sa surface une ou plusieurs régions moléculaires reconnues par les récepteurs immunitaires, appelées déterminants antigéniques ou épitopes.\n\n3. Typologie des greffes et mécanismes du rejet de greffon :\nUne greffe est un transfert de cellules, de tissu ou d'un fragment d'organe (transplantation si l'organe entier est anastomosé aux vaisseaux) d'un donneur vers un receveur. On distingue quatre catégories expérimentales :\n- L'autogreffe : Le donneur et le receveur sont le même individu (ex: greffe de peau de la cuisse vers le bras). Résultat : Intégration parfaite et tolérance à 100% (identité absolue du CMH).\n- L'isogreffe : Réalisée entre deux individus génétiquement identiques (vrais jumeaux monozygotes ou animaux d'une lignée pure hautement consanguine). Résultat : Intégration parfaite à 100% sans aucun rejet (mêmes allèles du CMH).\n- L'allogreffe (ou homogreffe) : Réalisée entre deux individus de la même espèce mais génétiquement différents (ex: rein d'un parent ou d'un donneur compatible). Résultat : Rejet inéluctable du greffon en l'absence de traitement immunosuppresseur, car les molécules de CMH du donneur sont reconnues comme du non-soi par les lymphocytes du receveur.\n- La xénogreffe (ou hétérogreffe) : Réalisée entre deux individus d'espèces différentes (ex: cœur de porc vers un être humain). Résultat : Rejet suraigu immédiat et fulgurant par les anticorps préexistants et le complément.\n- Mécanisme cellulaire du rejet de greffe : Le rejet est médié par l'immunité à médiation cellulaire (RIMC). Les lymphocytes T du receveur infiltrent le greffon, reconnaissent les allèles étrangers du CMH et déclenchent la destruction cytotoxique des cellules de l'organe greffé.",
      keyRule: "Le CMH de classe I est présent sur toutes les cellules nucléées et présente les peptides aux LT8. Le CMH de classe II est réservé aux CPA (macrophages, LB) et présente les peptides aux LT4. Les autogreffes et isogreffes réussissent (même CMH) ; les allogreffes et xénogreffes sont rejetées (CMH différent).",
      formulas: [
        {
          name: "Classification des greffes selon la compatibilité tissulaire",
          formula: "\\text{Autogreffe / Isogreffe (CMH identique)} \\implies \\text{Tolérance (Succès)} \\quad \\Longleftrightarrow \\quad \\text{Allogreffe / Xénogreffe (CMH différent)} \\implies \\text{Rejet (RIMC)}",
          note: "Le rejet de greffe met en jeu la reconnaissance du non-soi par les lymphocytes T cytotoxiques"
        }
      ],
      workedExample: {
        title: "Interprétation d'expériences de greffes de peau chez la souris",
        statement: "On dispose de 3 souches de souris consanguines : Souche A (CMH a), Souche B (CMH b) et leurs descendants hybrides F1 (issus du croisement A × B, portant le CMH a/b). 1. Que se passe-t-il si l'on greffe de la peau de souris A sur une souris A ? 2. De la souris A sur la souris B ? 3. De la souris A sur un hybride F1 ? 4. D'un hybride F1 sur une souris A ?",
        methodSteps: [
          "Étape 1 : Greffe A vers A. Même patrimoine génétique et même CMH a. C'est une isogreffe : intégration et succès de la greffe sans rejet.",
          "Étape 2 : Greffe A vers B. Les molécules de CMH a sont absentes chez B et sont donc reconnues comme du non-soi étranger. Allogreffe : rejet complet de la greffe en 10 à 12 jours.",
          "Étape 3 : Greffe A vers F1 (a/b). L'organisme F1 exprime les allèles a et b sur ses propres cellules. Les antigènes du greffon A (allèle a) font donc partie du 'Soi' de l'hybride F1 : tolérance et acceptation du greffon.",
          "Étape 4 : Greffe F1 (a/b) vers A. Le greffon porte les molécules de CMH b (héritées du parent B). Le receveur A ne possède pas l'allèle b dans son génome et le considère comme du non-soi : rejet du greffon F1 par la souris A."
        ],
        conclusion: "Une greffe est acceptée uniquement si le receveur possède tous les antigènes du CMH portés par le greffon."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Caractéristiques comparées des molécules du Complexe Majeur d'Histocompatibilité (CMH)",
        tableData: {
          headers: ["Caractéristique", "CMH de Classe I (HLA-A, B, C)", "CMH de Classe II (HLA-DP, DQ, DR)"],
          rows: [
            ["Distribution tissulaire", "Toutes les cellules nucléées de l'organisme et plaquettes", "Uniquement sur les cellules présentatrices d'antigènes (CPA : macrophages, LB, cellules dendritiques)"],
            ["Origine des peptides présentés", "Endogène (peptides cellulaires normaux du soi ou protéines virales intracellulaires)", "Exogène (peptides issus de la phagocytose et dégradation d'antigènes extracellulaires)"],
            ["Cellule effectrice stimulée", "Lymphocytes T8 cytotoxiques (récepteurs TCR + corécepteur CD8)", "Lymphocytes T4 auxiliaires / helpers (récepteurs TCR + corécepteur CD4)"],
            ["Rôle biologique principal", "Surveillance de l'intégrité cellulaire (destruction des cellules infectées ou tumorales)", "Déclenchement et coordination générale de la réponse immunitaire spécifique"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c06_p2_ex1",
          type: "mcq",
          prompt: "Sur quel chromosome humain se trouve le locus de gènes codant pour les molécules du complexe majeur d'histocompatibilité (CMH/HLA) ?",
          options: [
            "Le chromosome 6",
            "Le chromosome 21",
            "Le chromosome sexuel X",
            "Le chromosome 1"
          ],
          correctAnswerIndex: 0,
          explanation: "Chez l'homme, les gènes du système HLA (CMH de classe I et de classe II) sont regroupés sur le bras court du chromosome 6."
        },
        {
          id: "tle_d_svt_c06_p2_ex2",
          type: "mcq",
          prompt: "Quelles cellules de l'organisme expriment à leur surface les molécules du CMH de classe II ?",
          options: [
            "Uniquement les cellules présentatrices d'antigènes (macrophages, lymphocytes B, cellules dendritiques)",
            "Toutes les cellules anucléées comme les hématies",
            "Uniquement les neurones moteurs de la moelle épinière",
            "Les cellules des parois musculaires de l'estomac exclusivement"
          ],
          correctAnswerIndex: 0,
          explanation: "Le CMH de classe II est restreint aux cellules présentatrices d'antigènes (CPA) spécialisées qui présentent les fragments d'antigènes phagocytés aux lymphocytes T4 auxiliaires."
        },
        {
          id: "tle_d_svt_c06_p2_ex3",
          type: "mcq",
          prompt: "Comment appelle-t-on une greffe de tissu réalisée entre deux vrais jumeaux (monozygotes) génétiquement identiques ?",
          options: [
            "Une isogreffe",
            "Une autogreffe",
            "Une allogreffe",
            "Une xénogreffe"
          ],
          correctAnswerIndex: 0,
          explanation: "L'isogreffe est une greffe entre deux individus génétiquement identiques (jumeaux monozygotes ou animaux de même lignée pure consanguine). Elle est tolérée sans aucun rejet."
        },
        {
          id: "tle_d_svt_c06_p2_ex4",
          type: "mcq",
          prompt: "Quel type de réponse immunitaire est principalement responsable du rejet aigu d'un greffon allogénique (allogreffe) ?",
          options: [
            "La réponse immunitaire à médiation cellulaire (RIMC) faisant intervenir les lymphocytes T cytotoxiques",
            "La production massive d'insuline par le pancréas",
            "Une baisse de la sécrétion d'aldostérone par la surrénale",
            "Une fuite mécanique de liquide synovial articulaire"
          ],
          correctAnswerIndex: 0,
          explanation: "Le rejet d'allogreffe est avant tout une réaction immunitaire à médiation cellulaire (RIMC) où les lymphocytes T8 cytotoxiques détruisent les cellules du greffon dont le CMH est perçu comme du non-soi."
        },
        {
          id: "tle_d_svt_c06_p2_ex5",
          type: "mcq",
          prompt: "Pourquoi les hématies (globules rouges) humaines ne possèdent-elles pas de molécules du complexe CMH de classe I à leur surface ?",
          options: [
            "Parce qu'elles sont anucléées (dépourvues de noyau) à maturité",
            "Parce qu'elles sont situées en dehors du corps humain",
            "Parce que leur membrane ne contient pas de lipides",
            "Parce qu'elles transportent de l'urée et non des protéines"
          ],
          correctAnswerIndex: 0,
          explanation: "Les hématies matures perdent leur noyau et leurs organites lors de l'érythropoïèse, et ne peuvent pas synthétiser ni exprimer de molécules de CMH. Leur identité membranaire repose sur les glycoprotéines des systèmes ABO et Rhésus."
        },
        {
          id: "tle_d_svt_c06_p2_ex6",
          type: "mcq",
          prompt: "Un individu de groupe sanguin O négatif (O-) peut donner ses globules rouges à n'importe quel receveur (donneur universel) parce que :",
          options: [
            "Ses hématies ne possèdent ni agglutinogène A, ni agglutinogène B, ni facteur Rhésus à leur surface",
            "Son sang ne contient aucun globule blanc",
            "Son plasma est saturé d'anticorps qui neutralisent instantanément le receveur",
            "Ses hématies possèdent tous les antigènes A, B et Rhésus simultanément"
          ],
          correctAnswerIndex: 0,
          explanation: "Le groupe O- ne porte aucun antigène A, B ou Rhésus sur la membrane de ses hématies. Elles ne peuvent donc pas être reconnues ni agglutinées par les anticorps anti-A, anti-B ou anti-Rh du receveur."
        }
      ]
    },
    {
      id: "pt3_rimh_organes_lymphoides_anticorps_plasmocytes",
      order: 3,
      title: "Organes lymphoïdes et Réponse Immunitaire à Médiation Humorale (RIMH)",
      summary: "Différenciation et maturation des lymphocytes (moelle osseuse vs thymus), structure et classes d'immunoglobulines, sélection clonale des lymphocytes B, formation des plasmocytes et neutralisation par le complexe immun.",
      conceptExplanation: "Lorsque les barrières innées sont débordées par des antigènes solubles (toxines bactériennes) ou des bactéries extracellulaires circulantes, l'organisme déploie une réponse immunitaire adaptative humorale (RIMH) hautement spécifique, médiée par des anticorps circulants dans le sang et la lymphe.\n\n1. Organes lymphoïdes et différenciation des cellules immunitaires :\n- Organes lymphoïdes primaires ou centraux : Lieux de naissance (hématopoïèse) et de maturation des lymphocytes où ils acquièrent leur immunocompétence (capacité à reconnaître un antigène unique) sans contact préalable avec l'antigène :\n  - La moelle osseuse rouge : Siège de la formation de toutes les cellules sanguines à partir des cellules souches pluripotentes. C'est également le lieu de maturation des lymphocytes B (B pour Bone marrow, ou bourse de Fabricius chez les oiseaux). Les LB y acquièrent leurs récepteurs membranaires d'antigènes : les BCR (immunoglobulines membranaires de type IgM et IgD).\n  - Le thymus : Organe bilobé situé dans le médiastin antérieur supérieur. C'est le lieu de maturation des lymphocytes T (T pour Thymus) issus des cellules pré-T de la moelle. Les LT y acquièrent leur récepteur TCR spécifique et leurs corécepteurs CD4 (futurs LT4) ou CD8 (futurs LT8) tout en subissant une sélection éliminant les clones autoréactifs (tolérance au soi).\n- Organes lymphoïdes secondaires ou périphériques : Lieux de stockage, de rencontre avec l'antigène drainé et d'amplification de la réponse immunitaire : la rate (filtre immunitaire du sang), les ganglions lymphatiques (filtres immunitaires de la lymphe), les amygdales et les plaques de Peyer du tube digestif.\n\n2. Les trois étapes fondamentales de la RIMH :\n- 1ère étape : Phase de reconnaissance ou d'induction :\n  - Le lymphocyte B possède à sa surface environ 100 000 récepteurs BCR identiques spécifiques d'un seul déterminant antigénique. Il peut fixer directement un antigène libre soluble circulant, ou être stimulé par une cellule présentatrice d'antigène (CPA / macrophage).\n  - Cette liaison spécifique déclenche la sélection clonale du lymphocyte B compétent.\n- 2ème étape : Phase d'amplification (multiplication) et de différenciation :\n  - Sous l'effet des interleukines (IL-2, IL-4) sécrétées par les lymphocytes T4 auxiliaires activés par la même CPA (coopération cellulaire), le lymphocyte B sélectionné se multiplie activement par mitoses successives dans les centres germinatifs des ganglions (expansion clonale).\n  - Les cellules du clone se différencient en deux populations distinctes :\n    - Les lymphocytes B mémoires : Petits lymphocytes à longue durée de vie (plusieurs années voire décennies), circulant dans l'organisme, prêts à déclencher une réponse secondaire fulgurante en cas de nouveau contact avec le même antigène.\n    - Les plasmocytes : Véritables usines cellulaires à synthèse de protéines. La cellule subit une profonde métamorphose : augmentation du volume cytoplasmique, développement gigantesque du réticulum endoplasmique granuleux (ergastoplasme), appareil de Golgi très hypertrophié et abondance de ribosomes. Les plasmocytes ne possèdent plus d'anticorps membranaires, mais sécrètent dans le sang et la lymphe jusqu'à 2 000 molécules d'anticorps libres par seconde pendant leur courte durée de vie (quelques jours).\n- 3ème étape : Phase effectrice (Neutralisation de l'antigène) :\n  - Les anticorps sécrétés spécifiques se lient aux déterminants antigéniques pour former un réseau macromoléculaire insoluble : le complexe immun (ou complexe antigène-anticorps).\n  - Conséquences de la formation du complexe immun :\n    - Neutralisation immédiate : Masquage des sites infectieux des virus ou des sites actifs des toxines bactériennes.\n    - Agglutination ou précipitation : Les antigènes particulaires (bactéries) sont immobilisés en amas.\n    - Opsonisation : La partie constante des anticorps (fragment Fc) est reconnue par les récepteurs des macrophages, ce qui décuple l'efficacité de la phagocytose finale.\n    - Activation du complément (voie classique par les IgG et IgM) : Déclenchement de la cascade lytique et destruction de la membrane bactérienne.\n\n3. Structure et classes des anticorps (Immunoglobulines - Ig) :\n- Structure quaternaire : Protéine en forme de 'Y' constituée de quatre chaînes polypeptidiques identiques deux à deux, reliées par des ponts disulfures (-S-S-) :\n  - Deux chaînes lourdes (Heavy - H) et deux chaînes légères (Light - L).\n  - Chaque chaîne comprend une région constante (Fc) déterminant les propriétés biologiques (liaison aux macrophages, fixation du complément, passage placentaire) et une région variable (Fab) à l'extrémité des bras du 'Y'.\n  - Les régions variables des chaînes H et L forment ensemble deux sites de fixation identiques pour l'antigène : les paratopes, dont la configuration tridimensionnelle est parfaitement complémentaire de l'épitope.\n- Les 5 classes d'immunoglobulines :\n  - IgG (70 à 75% des Ig sériques) : Principaux anticorps de la réponse secondaire, les seuls à traverser la barrière placentaire pour protéger le fœtus et le nouveau-né, puissants activateurs du complément et de la phagocytose.\n  - IgM (10%) : Présents sous forme de pentamères (10 sites de liaison), sécrétés précocement lors de la réponse primaire, très efficaces dans l'agglutination.\n  - IgA (15 à 20%) : Présents sous forme de dimères dans les sécrétions muqueuses (salive, larmes, colostrum et lait maternel, mucus intestinal), assurant l'immunité locale des muqueuses.\n  - IgE (traces) : Se fixent par leur fragment Fc sur la membrane des mastocytes et des basophiles ; responsables du déclenchement des réactions allergiques et de la défense contre les parasites helminthes.\n  - IgD (< 1%) : Récepteurs membranaires des lymphocytes B naïfs matures.",
      keyRule: "La RIMH repose sur les lymphocytes B qui se différencient en plasmocytes sous l'action des interleukines des LT4. Les plasmocytes sécrètent des anticorps (IgG, IgM, IgA, IgE, IgD) formant le complexe immun pour neutraliser les antigènes extracellulaires et toxines.",
      formulas: [
        {
          name: "Formation du complexe immun et neutralisation",
          formula: "n \\cdot \\text{Antigène (Épitopes)} + m \\cdot \\text{Anticorps (Paratopes)} \\rightleftharpoons [\\text{Ag} - \\text{Ac}]_{\\text{complexe immun}} \\xrightarrow{\\text{Opsonisation}} \\text{Phagocytose}",
          note: "Le complexe antigène-anticorps active également la cascade du complément sérique"
        }
      ],
      workedExample: {
        title: "Interprétation des expériences d'immunisation antitétanique chez la souris",
        statement: "On injecte à une souris A de l'anatoxine tétanique (toxine chauffée et formolée ayant perdu sa toxicité mais conservé son pouvoir antigénique). 15 jours plus tard : 1. On injecte à A de la toxine tétanique mortelle : elle survit. 2. On injecte à A de la toxine diphtérique : elle meurt. 3. On prélève le sérum de A que l'on injecte à une souris neuve B, puis on injecte de la toxine tétanique à B : B survit. 4. On prélève des lymphocytes de A que l'on injecte à une souris C, puis toxine tétanique à C : C meurt. Interpréter rigoureusement ces résultats.",
        methodSteps: [
          "Étape 1 : Analyser l'effet de l'anatoxine (Exp. 1 et 2). L'anatoxine tétanique a conféré une immunité acquise protectrice contre la toxine tétanique, mais pas contre la toxine diphtérique. Cela prouve la haute spécificité de la réponse immunitaire.",
          "Étape 2 : Analyser le transfert de sérum (Exp. 3). Le sérum de la souris immunisée protège immédiatement la souris receveuse B contre la toxine tétanique. Les molécules effectrices protectrices sont donc des substances chimiques solubles circulant dans le sérum : les anticorps.",
          "Étape 3 : Analyser le transfert de lymphocytes seuls (Exp. 4). Les lymphocytes transférés n'ont pas protégé l'animal contre la toxine libre, car l'action directe contre les toxines solubles nécessite des anticorps circulants déjà formés.",
          "Étape 4 : Conclure sur la nature de la réponse. La défense contre la toxine tétanique est une réponse immunitaire à médiation humorale (RIMH), et le transfert de sérum correspond au principe de la sérothérapie."
        ],
        conclusion: "L'immunité contre le tétanos est spécifique et à médiation humorale (anticorps antitétaniques circulants dans le sérum)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Structure moléculaire d'un anticorps (IgG) et complexe immun",
        caption: "L'anticorps possède une forme en Y constituée de 2 chaînes lourdes (H) et 2 chaînes légères (L) reliées par des ponts disulfures. Les 2 paratopes variables fixent spécifiquement les épitopes antigéniques.",
        svgContent: `<svg viewBox="0 0 620 280" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Structure moléculaire de l'anticorps">
  <rect x="10" y="10" width="600" height="260" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  <path d="M 280 220 L 280 140 L 220 80" stroke="#7C3AED" stroke-width="7" stroke-linecap="round" fill="none" />
  <path d="M 300 220 L 300 140 L 360 80" stroke="#7C3AED" stroke-width="7" stroke-linecap="round" fill="none" />
  <line x1="280" y1="150" x2="300" y2="150" stroke="#D97706" stroke-width="3" />
  <line x1="280" y1="160" x2="300" y2="160" stroke="#D97706" stroke-width="3" />
  <text x="315" y="158" font-size="9" font-weight="700" fill="#D97706">Ponts -S-S-</text>
  <path d="M 200 125 L 245 80" stroke="#2563EB" stroke-width="6" stroke-linecap="round" fill="none" />
  <path d="M 380 125 L 335 80" stroke="#2563EB" stroke-width="6" stroke-linecap="round" fill="none" />
  <line x1="210" y1="115" x2="228" y2="97" stroke="#D97706" stroke-width="2.5" />
  <line x1="370" y1="115" x2="352" y2="97" stroke="#D97706" stroke-width="2.5" />
  <circle cx="232" cy="80" r="9" fill="#F43F5E" fill-opacity="0.3" stroke="#E11D48" stroke-width="2" stroke-dasharray="2,2" />
  <text x="180" y="65" font-size="11" font-weight="900" fill="#E11D48">PARATOPE 1</text>
  <path d="M 215 68 L 225 75" stroke="#E11D48" stroke-width="1.5" />
  <circle cx="348" cy="80" r="9" fill="#F43F5E" fill-opacity="0.3" stroke="#E11D48" stroke-width="2" stroke-dasharray="2,2" />
  <text x="400" y="65" font-size="11" font-weight="900" fill="#E11D48">PARATOPE 2</text>
  <path d="M 360 68 L 352 75" stroke="#E11D48" stroke-width="1.5" />
  <polygon points="232,45 224,65 240,65" fill="#10B981" stroke="#047857" stroke-width="1.5" />
  <text x="232" y="38" font-size="10" font-weight="700" text-anchor="middle" fill="#047857">Épitope Ag</text>
  <g transform="translate(25, 75)">
    <rect x="0" y="0" width="135" height="120" rx="8" fill="currentColor" fill-opacity="0.04" stroke="#CBD5E1" stroke-width="1.2" />
    <text x="10" y="20" font-size="10" font-weight="800" fill="currentColor">STRUCTURE :</text>
    <rect x="10" y="32" width="14" height="6" fill="#7C3AED" rx="2" />
    <text x="30" y="39" font-size="9.5" font-weight="600" fill="currentColor">Chaîne lourde (H)</text>
    <rect x="10" y="52" width="14" height="6" fill="#2563EB" rx="2" />
    <text x="30" y="59" font-size="9.5" font-weight="600" fill="currentColor">Chaîne légère (L)</text>
    <rect x="10" y="72" width="14" height="6" fill="#F43F5E" rx="2" />
    <text x="30" y="79" font-size="9.5" font-weight="600" fill="currentColor">Site variable (V)</text>
    <text x="10" y="103" font-size="8.5" font-weight="600" fill="#64748B">2 paratopes identiques</text>
  </g>
  <g transform="translate(455, 90)">
    <rect x="0" y="0" width="140" height="95" rx="8" fill="currentColor" fill-opacity="0.04" stroke="#CBD5E1" stroke-width="1.2" />
    <text x="10" y="20" font-size="10.5" font-weight="800" fill="#0284C7">FRAGMENTS :</text>
    <text x="10" y="40" font-size="10" font-weight="700" fill="#0284C7">1. Fab (x 2) :</text>
    <text x="10" y="54" font-size="9" fill="#64748B">Fixation de l'antigène</text>
    <text x="10" y="72" font-size="10" font-weight="700" fill="#7C3AED">2. Fc (tige constante) :</text>
    <text x="10" y="86" font-size="9" fill="#64748B">Fixation aux phagocytes</text>
  </g>
  <text x="290" y="248" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">Monomère bivalent (2 sites de liaison) : Complexe immun = Neutralisation + Opsonisation</text>
</svg>`,
        tableData: {
          headers: ["Classe d'Ig", "Structure spatiale", "Pourcentage sérique", "Propriétés et fonctions majeures"],
          rows: [
            ["IgG", "Monomère (2 paratopes)", "70 - 75%", "Réponse secondaire, traversent le placenta, activation du complément et opsonisation"],
            ["IgM", "Pentamère étoilé (10 paratopes)", "10%", "Première classe sécrétée lors de la réponse primaire, agglutination puissante"],
            ["IgA", "Dimère avec pièce sécrétoire", "15 - 20%", "Protection des muqueuses (larmes, salive, lait maternel, voies respiratoires)"],
            ["IgE", "Monomère", "< 0,01% (traces)", "Fixation sur mastocytes/basophiles, hypersensibilité immédiate (allergies) et parasitoses"],
            ["IgD", "Monomère", "< 1%", "Récepteur membranaire des lymphocytes B naïfs (avec les IgM membranaires)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c06_p3_ex1",
          type: "mcq",
          prompt: "Où s'effectuent respectivement la naissance et la maturation des lymphocytes B chez les mammifères ?",
          options: [
            "Naissance dans la moelle osseuse et maturation dans la moelle osseuse",
            "Naissance dans le thymus et maturation dans la rate",
            "Naissance dans la moelle osseuse et maturation dans le thymus",
            "Naissance dans le foie et maturation dans les ganglions lymphatiques"
          ],
          correctAnswerIndex: 0,
          explanation: "Chez les mammifères, les lymphocytes B naissent et effectuent l'intégralité de leur maturation (acquisition des récepteurs BCR) dans la moelle osseuse rouge (Bone marrow)."
        },
        {
          id: "tle_d_svt_c06_p3_ex2",
          type: "mcq",
          prompt: "Quelle modification cytologique majeure caractérise la différenciation d'un lymphocyte B activé en plasmocyte sécréteur ?",
          options: [
            "Un développement gigantesque du réticulum endoplasmique granuleux et de l'appareil de Golgi pour la synthèse des anticorps",
            "La perte totale de son noyau et de ses mitochondries",
            "La division par méiose pour former 4 gamètes immunitaires",
            "L'acquisition de cils vibratiles pour nager dans la circulation"
          ],
          correctAnswerIndex: 0,
          explanation: "Le plasmocyte est une cellule hautement spécialisée dans la biosynthèse et l'exportation massive de protéines (immunoglobulines), ce qui se traduit par une hypertrophie massive du REG (ergastoplasme) et du Golgi."
        },
        {
          id: "tle_d_svt_c06_p3_ex3",
          type: "mcq",
          prompt: "Quelle est la seule classe d'immunoglobulines capable de traverser la barrière foeto-placentaire pour conférer une immunité passive naturelle au fœtus ?",
          options: [
            "Les IgG",
            "Les IgM",
            "Les IgE",
            "Les IgA"
          ],
          correctAnswerIndex: 0,
          explanation: "Les IgG sont les seules immunoglobulines possédant un fragment Fc reconnu par les récepteurs de transport du placenta maternel, protégeant ainsi le fœtus et le nouveau-né pendant ses premiers mois de vie."
        },
        {
          id: "tle_d_svt_c06_p3_ex4",
          type: "mcq",
          prompt: "Comment appelle-t-on le site de liaison spécifique situé sur les régions variables d'un anticorps qui s'associe à l'épitope de l'antigène ?",
          options: [
            "Le paratope",
            "Le phagosome",
            "L'interleukine",
            "Le complexe majeur d'histocompatibilité"
          ],
          correctAnswerIndex: 0,
          explanation: "Le paratope est le site de reconnaissance et de fixation de l'antigène situé à l'extrémité des régions variables des chaînes lourdes et légères de l'anticorps, parfaitement complémentaire de l'épitope antigénique."
        },
        {
          id: "tle_d_svt_c06_p3_ex5",
          type: "mcq",
          prompt: "Lors d'une réponse immunitaire humorale secondaire (second contact avec le même antigène), comment se caractérise la production d'anticorps par rapport à la réponse primaire ?",
          options: [
            "Elle est beaucoup plus rapide, immédiate, plus durable et atteint un taux d'IgG considérablement plus élevé",
            "Elle est plus lente et ne produit que des IgM en faible quantité",
            "Elle disparaît totalement en raison de la fatigue de la moelle osseuse",
            "Elle provoque obligatoirement la destruction de tous les globules rouges"
          ],
          correctAnswerIndex: 0,
          explanation: "Grâce aux lymphocytes B mémoires générés lors du premier contact, la réponse secondaire ne présente presque aucun temps de latence, produit un titre d'anticorps (principalement IgG) beaucoup plus élevé et persiste pendant des mois ou années."
        },
        {
          id: "tle_d_svt_c06_p3_ex6",
          type: "mcq",
          prompt: "Qu'est-ce qu'une anatoxine découverte par Gaston Ramon (ex: anatoxine tétanique) ?",
          options: [
            "Une toxine microbienne atténuée qui a perdu sa virulence pathogène mais conserve son pouvoir immunogène (antigénique)",
            "Un venin de serpent mortel extrait de la vipère",
            "Un antibiotique de synthèse détruisant les lysosomes",
            "Un virus vivant génétiquement modifié pour infecter les bactéries"
          ],
          correctAnswerIndex: 0,
          explanation: "Une anatoxine est obtenue par traitement d'une toxine bactérienne par le formol et la chaleur. Elle n'est plus toxique pour l'organisme, mais conserve ses épitopes intacts, permettant la vaccination protectrice."
        }
      ]
    },
    {
      id: "pt4_rimc_cooperation_cellulaire_vih_vaccination",
      order: 4,
      title: "Réponse Spécifique Cellulaire (RIMC), Coopération cellulaire, VIH/SIDA et Applications",
      summary: "Mécanismes d'action des lymphocytes T cytotoxiques (perforine, baiser de la mort, apoptose), rôle central chef d'orchestre des LT4 et interleukines, immunopathologie de l'infection par le VIH/SIDA, et principes comparés vaccination vs sérothérapie.",
      conceptExplanation: "Certains agents pathogènes pénètrent et se développent à l'intérieur même des cellules de l'hôte (virus, bactéries intracellulaires comme Mycobacterium tuberculosis ou Bacille de Koch BK, cellules cancéreuses). Dans ce cas, les anticorps circulants sont impuissants car ils ne traversent pas les membranes plasmiques. L'organisme fait alors appel à l'immunité à médiation cellulaire (RIMC).\n\n1. Les étapes et acteurs de la RIMC (Réponse Immunitaire à Médiation Cellulaire) :\n- 1ère étape : Induction et reconnaissance double :\n  - Une cellule présentatrice d'antigène (CPA) présente le peptide antigénique associé à une molécule du CMH de classe I.\n  - Un lymphocyte T8 naïf portant le récepteur TCR spécifique de cet antigène et le corécepteur CD8 reconnaît le complexe [CMH I - Antigène] : c'est la double reconnaissance (le LT8 reconnaît simultanément le non-soi antigénique et le soi altéré du CMH).\n- 2ème étape : Amplification et différenciation :\n  - En présence d'interleukine-2 (IL-2) fournie par les lymphocytes T4 auxiliaires activés, les lymphocytes T8 sélectionnés prolifèrent intensément par mitoses dans les organes lymphoïdes secondaires.\n  - Ils se différencient en deux populations :\n    - Les lymphocytes T8 mémoires : Cellules quiescentes à longue durée de vie assurant la mémoire immunitaire cellulaire.\n    - Les lymphocytes T cytotoxiques (LTc ou cellules tueuses CD8+) : Cellules effectrices armées de granules cytoplasmiques lytiques.\n- 3ème étape : Phase effectrice : Le 'baiser de la mort' et la cytolyse :\n  - Le LTc quitte les organes lymphoïdes et patrouille dans l'organisme. Lorsqu'il rencontre une cellule cible (cellule infectée par un virus, cellule cancéreuse ou cellule de greffon) présentant le même épitope sur son CMH I, il s'y colle étroitement (contact direct membranaire).\n  - Le LTc exocyte le contenu de ses granules vers la membrane de la cellule cible :\n    - La perforine : Protéine qui polymérise dans la membrane plasmique de la cellule cible en présence de Ca2+, y forant des pores transmembranaires cylindriques larges.\n    - Les granzymes : Sérine-protéases qui pénètrent par ces pores et déclenchent la cascade des caspases, conduisant à l'autodestruction programmée de la cellule infectée (apoptose).\n    - Cytolyse osmotique : L'eau et les ions du milieu interstitiel s'engouffrent massivement par les pores de perforine. La cellule cible gonfle, éclate et meurt. Le LTc se détache, intact, et peut aller détruire d'autres cellules cibles consécutives.\n\n2. La coopération cellulaire : Le rôle pivot indispensable des lymphocytes T4 :\n- Aucune réponse immunitaire adaptative efficace (ni RIMH, ni RIMC) ne peut se développer sans la coopération étroite entre trois types cellulaires : les Macrophages (CPA), les Lymphocytes T4 (LT4 ou auxiliaires / helpers) et les cellules effectrices (Lymphocytes B ou Lymphocytes T8).\n- Rôle chef d'orchestre des LT4 : La CPA phagocyte l'antigène, l'apprête et expose les épitopes sur son CMH de classe II. Le LT4 reconnaît le complexe [CMH II - Antigène] grâce à son TCR et son corécepteur CD4. Le macrophage sécrète de l'interleukine-1 (IL-1) qui active le LT4.\n- Le LT4 activé se différencie en LT4 auxiliaire (Th) et sécrète des médiateurs solubles indispensables : les interleukines (principalement l'IL-2) et des lymphokines. L'IL-2 agit par voie autocrine sur le LT4 lui-même et par voie paracrine comme le signal chimique obligatoire déclenchant la prolifération et la différenciation des lymphocytes B (en plasmocytes) et des lymphocytes T8 (en LT cytotoxiques).\n\n3. Dysfonctionnement du système immunitaire : Le cas du VIH et du SIDA :\n- Le Virus de l'Immunodéficience Humaine (VIH) est un rétrovirus (virus à ARN possédant une transcriptase inverse) enveloppé, dont la glycoprotéine de surface gp120 possède une affinité sélective pour la protéine membranaire CD4.\n- Cibles cellulaires principales : Les lymphocytes T4 (CD4+), ainsi que les macrophages et cellules dendritiques.\n- Évolution de l'infection : Le virus pénètre dans le LT4, transcrit son ARN en ADN proviral qui s'intègre au génome de l'hôte, puis détourne la machinerie cellulaire pour fabriquer de nouveaux virions, provoquant la mort par lyse du lymphocyte T4 hôte.\n- Conséquence immunitaire : Au cours de la phase symptomatique du SIDA, le taux de lymphocytes T4 s'effondre en dessous du seuil critique (moins de 200 LT4/mm³ de sang contre 800 à 1 200 normalement). Privés d'interleukines, ni les lymphocytes B ni les lymphocytes T8 ne peuvent être stimulés : tout le système immunitaire adaptatif s'effondre. Le patient succombe alors à des maladies opportunistes (tuberculose, pneumocystose, sarcome de Kaposi, toxoplasmose, candidoses sévères).\n\n4. Applications médicales : Vaccination vs Sérothérapie :\n- La vaccination (prévention) : Consiste à injecter un antigène rendu inoffensif (anatoxine, microbe tué, microbe vivant atténué ou fragment d'antigène/ARN messager). Elle stimule le système immunitaire pour créer des lymphocytes mémoires spécifiques. Caractéristiques : Immunité active, différée (temps de latence de 10 à 15 jours), hautement spécifique et durable (plusieurs années, entretenue par des rappels).\n- La sérothérapie (urgence curative) : Consiste à injecter un sérum contenant des anticorps spécifiques déjà formés prélevés chez un donneur ou un animal immunisé. Caractéristiques : Immunité passive, immédiate (action instantanée pour neutraliser un poison ou une toxine tétanique aiguë), mais temporaire (les anticorps injectés sont dégradés en 2 à 3 semaines sans création de mémoire immunitaire).",
      keyRule: "La RIMC fait intervenir les LT8 devenant LT cytotoxiques qui détruisent les cellules cibles par contact direct (perforine et granzymes). Les LT4 sont les pivots de la coopération cellulaire via l'interleukine-2. Le VIH cible les LT4 (CD4), provoquant la paralysie immunitaire du SIDA.",
      formulas: [
        {
          name: "Schéma de la coopération cellulaire immunitaire",
          formula: "\\text{CPA (Macrophage)} \\xrightarrow{\\text{CMH II + IL-1}} \\text{LT4 (Helper)} \\xrightarrow{\\text{IL-2 (Interleukine)}} \\begin{cases} \\text{LB} \\longrightarrow \\text{Plasmocytes} \\longrightarrow \\text{Anticorps (RIMH)} \\\\ \\text{LT8} \\longrightarrow \\text{LTc (Cytotoxiques)} \\longrightarrow \\text{Cytolyse (RIMC)} \\end{cases}",
          note: "La destruction des LT4 par le VIH bloque l'ensemble des branches humorale et cellulaire"
        }
      ],
      workedExample: {
        title: "Analyse des expériences de transfert d'immunité contre le Bacille de Koch (BK)",
        statement: "On immunise un cobaye A avec le vaccin BCG (Bacille de Calmette et Guérin, souche atténuée de BK). Un mois plus tard, on réalise deux prélèvements sur A : du sérum d'une part, et des lymphocytes vivants d'autre part. On injecte le sérum à un cobaye témoin B, et les lymphocytes à un cobaye C. Puis on inocule à tous les cobayes une dose mortelle de Bacille de Koch virulent. Résultats : Le cobaye A survit ; le cobaye B meurt de tuberculose ; le cobaye C survit. Interpréter rigoureusement.",
        methodSteps: [
          "Étape 1 : Analyser le cobaye B (reçu du sérum). Le sérum n'a apporté aucune protection contre le BK, car les anticorps circulants ne peuvent pas atteindre les bactéries qui se multiplient à l'intérieur des macrophages et des cellules de l'hôte.",
          "Étape 2 : Analyser le cobaye C (reçu des lymphocytes vivants). Les lymphocytes vivants de A ont conféré une protection totale à C contre la tuberculose. Le support effecteur de l'immunité contre le BK est donc de nature cellulaire.",
          "Étape 3 : Déduire le type de réponse. Il s'agit d'une réponse immunitaire à médiation cellulaire (RIMC) impliquant les lymphocytes T sensibilisés capables de détruire les cellules hôtes infectées par le BK."
        ],
        conclusion: "La défense antituberculeuse repose exclusivement sur l'immunité cellulaire (RIMC) portée par les lymphocytes T cytotoxiques."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Tableau comparatif officiel : Vaccination versus Sérothérapie",
        tableData: {
          headers: ["Critère comparatif", "Vaccination (Prévention active)", "Sérothérapie (Traitement d'urgence passif)"],
          rows: [
            ["Produit injecté", "Antigène affaibli ou inactivé (anatoxine, germe atténué)", "Sérum riche en anticorps spécifiques préformés"],
            ["Origine de l'immunité", "Active : l'organisme produit ses propres défenses", "Passive : l'organisme reçoit des anticorps extérieurs tout faits"],
            ["Délai d'action", "Différé : nécessite 10 à 15 jours pour se développer", "Immédiat : protection instantanée dès l'injection"],
            ["Durée de la protection", "Durable : plusieurs années ou décennies (mémoire immunitaire)", "Temporaire et brève : quelques semaines (dégradation des Ig)"],
            ["Mémoire immunitaire", "Présente (lymphocytes B et T mémoires formés)", "Absente (aucune cellule immunocompétente stimulée)"],
            ["Usage clinique", "Prévention collective et individuelle à long terme", "Urgence curative (morsure de serpent, tétanos déclaré)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c06_p4_ex1",
          type: "mcq",
          prompt: "Quelle protéine lytique sécrétée par les lymphocytes T cytotoxiques s'insère dans la membrane de la cellule cible pour y percer des pores géants ?",
          options: [
            "La perforine",
            "L'albumine",
            "La myosine",
            "L'hémoglobine"
          ],
          correctAnswerIndex: 0,
          explanation: "La perforine polymérise dans la membrane plasmique de la cellule cible en présence de calcium, créant des pores à travers lesquels les granzymes pénètrent et l'eau s'engouffre pour provoquer la cytolyse."
        },
        {
          id: "tle_d_svt_c06_p4_ex2",
          type: "mcq",
          prompt: "Pourquoi qualifie-t-on les lymphocytes T4 de 'chefs d'orchestre' ou pivots centraux de l'immunité adaptative ?",
          options: [
            "Parce qu'ils sécrètent l'interleukine-2 indispensable à la prolifération et différenciation des lymphocytes B et des lymphocytes T8",
            "Parce qu'ils fabriquent directement toutes les classes d'anticorps",
            "Parce qu'ils phagocytent les globules rouges sénescents dans la rate",
            "Parce qu'ils filtrent mécaniquement le sang au niveau des reins"
          ],
          correctAnswerIndex: 0,
          explanation: "Sans les signaux chimiques solubles (interleukine-2) libérés par les lymphocytes T4 auxiliaires, ni les lymphocytes B ne peuvent se transformer en plasmocytes producteurs d'anticorps, ni les lymphocytes T8 ne peuvent devenir des cellules cytotoxiques."
        },
        {
          id: "tle_d_svt_c06_p4_ex3",
          type: "mcq",
          prompt: "Quelle molécule membranaire spécifique sert de récepteur d'entrée principal au virus du VIH à la surface des lymphocytes T4 ?",
          options: [
            "La molécule CD4",
            "La molécule CD8",
            "L'agglutinogène Rhésus D",
            "La chaîne lourde des IgE"
          ],
          correctAnswerIndex: 0,
          explanation: "La glycoprotéine d'enveloppe gp120 du VIH reconnaît avec une très haute affinité la protéine CD4 présente à la surface des lymphocytes T4, permettant l'ancrage et la pénétration du virus."
        },
        {
          id: "tle_d_svt_c06_p4_ex4",
          type: "mcq",
          prompt: "Quelle différence fondamentale distingue la vaccination de la sérothérapie ?",
          options: [
            "La vaccination injecte un antigène pour susciter une immunité active durable avec mémoire, alors que la sérothérapie injecte des anticorps pour une protection passive immédiate mais temporaire",
            "La vaccination ne s'applique qu'aux animaux, la sérothérapie aux humains",
            "La sérothérapie stimule la moelle osseuse pendant plusieurs décennies",
            "La vaccination neutralise instantanément les venins en moins de 5 secondes"
          ],
          correctAnswerIndex: 0,
          explanation: "La vaccination est active, préventive, lente à s'installer mais durable grâce à la mémoire immunitaire. La sérothérapie est passive, curative, d'action immédiate mais de courte durée (les anticorps disparaissent après quelques semaines)."
        },
        {
          id: "tle_d_svt_c06_p4_ex5",
          type: "mcq",
          prompt: "Contre quel type d'agent pathogène la réponse immunitaire à médiation cellulaire (RIMC) est-elle impérativement requise ?",
          options: [
            "Les micro-organismes à développement intracellulaire comme le Bacille de Koch (tuberculose) ou les cellules infectées par des virus",
            "Les toxines tétaniques libres dissoutes dans le plasma",
            "Les venins de scorpion circulant dans la lymphe",
            "Les particules de poussière inorganiques inhalées"
          ],
          correctAnswerIndex: 0,
          explanation: "Les agents intracellulaires (virus cachés dans les cellules hôtes, BK dans les macrophages, cellules tumorales) échappent aux anticorps circulants et ne peuvent être éliminés que par la RIMC via les LT cytotoxiques."
        },
        {
          id: "tle_d_svt_c06_p4_ex6",
          type: "mcq",
          prompt: "Que se passe-t-il lors de la phase terminale du SIDA (Syndrome d'Immuno-Déficience Acquise) lorsque le taux de LT4 chute sous 200 par mm³ de sang ?",
          options: [
            "L'effondrement de la coopération cellulaire empêche toute réponse immunitaire et l'organisme succombe à des infections opportunistes",
            "Une hypersécrétion incontrôlable d'anticorps neutralise tous les tissus de l'organisme",
            "Une régénération spontanée et totale de la moelle osseuse",
            "Une guérison spontanée par suppression de la charge virale"
          ],
          correctAnswerIndex: 0,
          explanation: "La disparition des LT4 bloque la stimulation des LB et des LT8. L'organisme devient sans défense face à des agents pathogènes habituellement bénins (maladies opportunistes) qui entraînent la mort du patient."
        }
      ]
    }
  ]
};

