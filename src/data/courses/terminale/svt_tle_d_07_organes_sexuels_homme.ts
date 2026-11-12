import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L07_ORGANES_SEXUELS_HOMME: CurriculumChapter = {
  id: "terminale_d_svt_ch09_fonctionnement_organes_sexuels_homme",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 9,
  title: "Le fonctionnement des organes sexuels chez l'Homme (Cycles ovarien et utérin, régulation neuro-hormonale et contraception)",
  summary: "Étude complète et approfondie de la physiologie de la reproduction humaine selon le programme officiel de Côte d'Ivoire (SVT Tle D) : fonctionnement cyclique des organes sexuels femelles (cycles ovarien, utérin, hormones ovariennes œstrogènes/progestérone et gonadostimulines hypophysaires FSH/LH), régulation neuro-hormonale de l'axe hypothalamo-hypophysaire chez la femme (rétrocontrôles négatif et positif du pic pré-ovulatoire de LH), régulation neuro-hormonale chez l'homme (cellules de Leydig, testostérone, cellules de Sertoli, inhibine, rétrocontrôle négatif exclusif), et maîtrise de la reproduction par les méthodes contraceptives hormonales (pilules combinées, séquentielles, microdosées et pilule du lendemain).",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_cycles_sexuels_femelle_ovarien_uterin_hormonal",
      order: 1,
      title: "Les cycles sexuels chez la femme : Cycles ovarien, utérin et hormonaux synchronisés",
      summary: "Description comparative des phases du cycle ovarien (folliculaire, ovulation, lutéale), des remaniements cycliques de l'endomètre utérin (menstruation, prolifération, dentelle utérine) et des cinétiques hormonales ovariennes et hypophysaires.",
      conceptExplanation: "Chez la femme, depuis la puberté jusqu'à la ménopause, l'appareil reproducteur fonctionne de manière cyclique sur une période moyenne de 28 jours. Cette activité résulte de la synchronisation étroite entre les événements ovariens, les modifications de la muqueuse utérine et les sécrétions hormonales.\n\n1. Le cycle ovarien (durée de référence : 28 jours) :\nIl comprend trois phases distinctes séparées par l'ovulation au 14e jour d'un cycle théorique :\n- La phase folliculaire (ou pré-ovulatoire, durée variable de 12 à 16 jours, moyenne 14 jours) :\n  - Sous l'effet de la FSH hypophysaire, un groupe de follicules cavitaires (antraux) reprend sa croissance, mais généralement un seul devient le follicule dominant (follicule mûr ou follicule de De Graaf), les autres dégénérant (atrésie folliculaire).\n  - L'ovocyte I bloqué en prophase I poursuit sa maturation au sein d'un antrum folliculaire gorgé de liquide. Les cellules de la thèque interne et de la granulosa prolifèrent activement et sécrètent des œstrogènes (principalement le 17β-œstradiol).\n- L'ovulation (survenant précisément 14 jours avant le début des prochaines règles) :\n  - Le follicule mûr fait saillie à la surface de l'ovaire, sa paroi s'amincit et se rompt sous l'effet du pic de LH.\n  - Quelques heures avant l'expulsion, la première division de méiose s'achève avec émission du premier globule polaire : l'ovocyte I devient un ovocyte II bloqué en métaphase II.\n  - L'ovocyte II entouré de sa corona radiata est expulsé de l'ovaire et capté par les franges du pavillon de la trompe de Fallope.\n- La phase lutéale (ou lutéinique ou post-ovulatoire, durée constante et fixe de 14 jours) :\n  - Après ovulation, la paroi du follicule rompu s'effondre et se transforme en une glande endocrine temporaire riche en pigments caroténoïdes : le corps jaune (lutéinisation des cellules de la granulosa et de la thèque interne).\n  - Le corps jaune sécrète massivement de la progestérone et des œstrogènes en quantité modérée.\n  - Évolution en absence de fécondation : Au 24e-25e jour, le corps jaune régresse spontanément (lutéolyse), s'involue en un tissu cicatriciel blanchâtre inactif (corpus albicans ou corps blanc). Les sécrétions de progestérone et d'œstrogènes s'effondrent.\n\n2. Le cycle utérin (Endomètre et myomètre) :\nL'utérus est un organe creux constitué d'un muscle épais (le myomètre) et d'une muqueuse interne hautement vascularisée (l'endomètre). L'endomètre subit des métamorphoses cycliques calquées sur les hormones ovariennes :\n- La phase menstruelle (les règles ou menstrues, du 1er au 5e jour du cycle) :\n  - Marque conventionnellement le jour 1 (J1) de tout nouveau cycle sexuel.\n  - Consécutive à la chute brutale de progestérone et d'œstradiol en fin de cycle précédent. Les artérioles spiralées subissent de violents spasmes vasoconstricteurs entraînant l'ischémie, la nécrose et la desquamation de la zone superficielle (couche fonctionnelle) de l'endomètre. Les débris de muqueuse mêlés à du sang incoagulable sont éliminés par le vagin.\n- La phase proliférative (du 6e au 14e jour, synchrone de la phase folliculaire) :\n  - Sous la stimulation des œstrogènes sécrétés par les follicules en croissance, la muqueuse utérine se régénère à partir de la couche basale résiduelle. Son épaisseur passe de 1 mm à plus de 4 mm. Des glandes tubulaires rectilignes se développent et les artérioles s'allongent.\n- La phase sécrétoire (du 15e au 28e jour, synchrone de la phase lutéale) :\n  - Sous l'action conjointe de la progestérone et des œstrogènes du corps jaune, l'endomètre s'épaissit encore (jusqu'à 7-8 mm), les glandes deviennent extrêmement tortueuses, ramifiées et dilatées, sécrétant un mucus riche en glycogène. La muqueuse prend l'aspect caractéristique de 'dentelle utérine'. Les artérioles se spiralisent intensément entre les glandes. L'utérus est parfaitement préparé pour accueillir et nourrir un éventuel embryon (fenêtre d'implantation/nidation). Parallèlement, la progestérone bloque les contractions du myomètre : c'est le 'silence utérin'.\n\n3. Les cinétiques hormonales comparées (Ovariennes vs Hypophysaires) :\n- Hormones ovariennes :\n  - Œstrogènes (Œstradiol) : Faible au début, augmente progressivement au cours de la phase folliculaire pour former un premier pic très élevé à J12-J13 (environ 250 à 400 pg/mL, 24 à 48h avant l'ovulation), chute brièvement à l'ovulation, puis remonte pour un second pic plus modéré au milieu de la phase lutéale (sécrété par le corps jaune) avant de s'effondrer à J28.\n  - Progestérone : Quasiment indétectable (proche de 0) durant toute la phase folliculaire. Elle apparaît après l'ovulation, grimpe en flèche pour atteindre un pic unique important au milieu de la phase lutéale (J21-J22, environ 15 à 20 ng/mL) puis s'effondre à la fin du cycle en cas de non-fécondation.\n- Hormones hypophysaires (Gonadostimulines) :\n  - FSH (Hormone Folliculostimulante) : Taux modéré mais déterminant en tout début de cycle pour recruter la cohorte folliculaire, puis décroît légèrement avant de présenter un pic transitoire à l'ovulation.\n  - LH (Hormone Lutéinisante) : Taux de base très bas durant la phase folliculaire, puis subit une décharge massive, explosive et brève (le 'pic de LH' ou décharge ovulante) à J13, atteignant des valeurs 5 à 10 fois supérieures au niveau basal. Ce pic de LH est le signal biologique déclencheur absolu de l'ovulation (32 à 36 heures plus tard) et de la transformation du follicule en corps jaune.",
      keyRule: "L'ovulation (libération de l'ovocyte II bloqué en métaphase II) a toujours lieu 14 jours avant les prochaines règles. Les œstrogènes assurent la prolifération de l'endomètre ; la progestérone transforme l'endomètre en dentelle utérine sécrétoire et impose le silence du myomètre.",
      formulas: [
        {
          name: "Calcul déterministe de la date d'ovulation selon la durée du cycle",
          formula: "\\text{Date d'ovulation (Jour du cycle)} = \\text{Durée totale du cycle (Jours)} - 14",
          note: "Exemple : Pour un cycle régulier de 32 jours, ovulation à 32 - 14 = Jour 18"
        }
      ],
      workedExample: {
        title: "Calcul de la période fertile d'une femme ayant un cycle de 30 jours",
        statement: "Une jeune femme présente des cycles menstruels réguliers d'une durée de 30 jours. Le premier jour de ses dernières règles est le 4 octobre. 1. Déterminer la date de sa prochaine ovulation. 2. En tenant compte de la durée de vie des spermatozoïdes (3 à 4 jours) et de l'ovocyte II (24 heures), préciser sa période de fécondité pour ce cycle.",
        methodSteps: [
          "Étape 1 : Calculer le jour de l'ovulation dans le cycle. La phase lutéale étant constante de 14 jours, l'ovulation a lieu au jour : 30 - 14 = 16e jour du cycle.",
          "Étape 2 : Déterminer la date civile de l'ovulation. J1 = 4 octobre. J16 = 4 + (16 - 1) = 19 octobre.",
          "Étape 3 : Calculer la période fertile. Les spermatozoïdes survivent environ 3 à 4 jours dans les voies génitales féminines, et l'ovocyte II survit environ 24 heures après son expulsion.",
          "Étape 4 : Délimiter l'intervalle. Début de la période fertile : 16 - 4 = 12e jour du cycle (15 octobre). Fin de la période fertile : 16 + 1 = 17e jour du cycle (20 octobre)."
        ],
        conclusion: "Ovulation le 19 octobre (J16) ; Période de fécondité du 15 au 20 octobre (J12 à J17)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Synchronisation chronologique des cycles ovarien, utérin et hormonaux (cycle type de 28 jours)",
        tableData: {
          headers: ["Phase temporelle", "Événement ovarien", "Statut de l'endomètre", "Profil hormonal dominant"],
          rows: [
            ["Jours 1 à 5", "Recrutement des follicules primordiaux / primaires", "Menstruation (desquamation de la zone superficielle)", "Taux effondrés d'œstrogènes et progestérone (levée de frein)"],
            ["Jours 6 à 13 (Pré-ovulatoire)", "Maturation du follicule de De Graaf", "Prolifération : épaississement, glandes en tube", "FSH active, hausse majeure d'œstradiol (progestérone = 0)"],
            ["Jour 14 (Ovulation)", "Rupture folliculaire et expulsion ovocyte II", "Endomètre haut de 4-5 mm vascularisé", "Pic massif ovulatoire de LH (+ pic associé de FSH)"],
            ["Jours 15 à 27 (Post-ovulatoire)", "Corps jaune actif sécréteur", "Dentelle utérine sécrétoire de glycogène (silence myomètre)", "Pic élevé de progestérone + second pic d'œstradiol"],
            ["Jour 28 (Pré-menstruel)", "Régression du corps jaune (lutéolyse)", "Ischémie des artérioles spiralées", "Chute brutale de la progestérone et de l'œstradiol"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c09_p1_ex1",
          type: "mcq",
          prompt: "Quel événement biologique marque conventionnellement le premier jour (J1) de tout cycle sexuel chez la femme ?",
          options: [
            "Le premier jour d'apparition des règles (menstruations)",
            "Le jour de l'expulsion de l'ovocyte par le follicule",
            "Le pic maximal de sécrétion de la progestérone",
            "La cicatrisation complète de la muqueuse utérine"
          ],
          correctAnswerIndex: 0,
          explanation: "Par convention médicale et biologique universelle, le jour 1 du cycle est défini par l'apparition du premier écoulement menstruel (règles)."
        },
        {
          id: "tle_d_svt_c09_p1_ex2",
          type: "mcq",
          prompt: "Quelle structure ovarienne assure la sécrétion massive de progestérone pendant la phase post-ovulatoire (phase lutéale) du cycle ?",
          options: [
            "Le corps jaune",
            "La thèque externe du follicule primordial",
            "La zone pellucide de l'ovocyte",
            "L'albuginée ovarienne"
          ],
          correctAnswerIndex: 0,
          explanation: "Après l'expulsion de l'ovocyte, le follicule déhiscent se transforme en corps jaune dont les cellules lutéinisées sécrètent de la progestérone en grande quantité et des œstrogènes."
        },
        {
          id: "tle_d_svt_c09_p1_ex3",
          type: "mcq",
          prompt: "Quelle hormone hypophysaire est directement responsable du déclenchement de l'ovulation grâce à sa décharge brève et massive (pic) ?",
          options: [
            "L'hormone lutéinisante (LH)",
            "L'hormone folliculostimulante (FSH)",
            "La prolactine",
            "L'hormone antidiurétique (ADH)"
          ],
          correctAnswerIndex: 0,
          explanation: "Le pic ovulatoire de LH (décharge de gonadostimuline environ 36h avant l'ovulation) déclenche la rupture de la paroi folliculaire et la libération de l'ovocyte II."
        },
        {
          id: "tle_d_svt_c09_p1_ex4",
          type: "mcq",
          prompt: "Quel est l'effet physiologique majeur de la progestérone sur le muscle utérin (myomètre) durant la phase lutéale ?",
          options: [
            "Elle inhibe les contractions rythmiques du myomètre, assurant le 'silence utérin' indispensable à la nidation",
            "Elle provoque des spasmes et contractions musculaires intenses",
            "Elle détruit les fibres musculaires lisses de l'utérus",
            "Elle transforme le myomètre en tissu adipeux"
          ],
          correctAnswerIndex: 0,
          explanation: "La progestérone a un effet myorelaxant : elle bloque les contractions spontanées du myomètre ('silence utérin'), empêchant l'expulsion mécanique précoce d'un éventuel œuf implanté."
        },
        {
          id: "tle_d_svt_c09_p1_ex5",
          type: "mcq",
          prompt: "Pour une femme ayant des cycles réguliers de 35 jours, à quel jour du cycle l'ovulation se produit-elle théoriquement ?",
          options: [
            "Au 21e jour du cycle (35 - 14 = 21)",
            "Au 14e jour du cycle",
            "Au 28e jour du cycle",
            "Au 7e jour du cycle"
          ],
          correctAnswerIndex: 0,
          explanation: "La phase lutéale post-ovulatoire a une durée biologique rigoureusement constante de 14 jours. L'ovulation a donc lieu au : 35 - 14 = 21e jour du cycle."
        },
        {
          id: "tle_d_svt_c09_p1_ex6",
          type: "mcq",
          prompt: "Quelle est la cause directe du déclenchement des menstruations (règles) à la fin d'un cycle sans fécondation ?",
          options: [
            "La chute brutale des taux sanguins d'œstrogènes et de progestérone consécutive à la régression du corps jaune",
            "Une hypersécrétion brutale de progestérone par le placenta",
            "L'activation du système rénine-angiotensine rénal",
            "La fixation massive d'anticorps sur l'endomètre"
          ],
          correctAnswerIndex: 0,
          explanation: "En l'absence de nidation embryonnaire, le corps jaune dégénère. L'effondrement concomitant des taux de progestérone et d'œstrogènes prive l'endomètre de soutien trophique, provoquant sa nécrose et sa desquamation."
        }
      ]
    },
    {
      id: "pt2_regulation_axe_hypothalamo_hypophysaire_femelle_retrocontroles",
      order: 2,
      title: "Régulation neuro-hormonale chez la femme : L'axe hypothalamo-hypophysaire et les rétrocontrôles",
      summary: "Rôle de la GnRH hypothalamique et des gonadostimulines hypophysaires (FSH et LH), mécanismes de rétrocontrôle négatif en phase folliculaire/lutéale et inversion en rétrocontrôle positif déclenchant le pic ovulatoire de LH.",
      conceptExplanation: "Le fonctionnement des ovaires n'est pas autonome : il est placé sous la dépendance hiérarchique du complexe hypothalamo-hypophysaire, tout en exerçant en retour un contrôle régulateur en boucle fermée (rétrocontrôles ovariens).\n\n1. L'axe hypothalamo-hypophysaire chez la femme :\n- L'hypothalamus : Des neurones neurosécrétoires spécialisés élaborent une neurohormone peptidique : la GnRH (Gonadotropin Releasing Hormone ou gonadolibérine). La sécrétion de GnRH est obligatoirement pulsatile (un pulse toutes les 60 à 90 minutes). Une administration continue de GnRH désensibilise les récepteurs hypophysaires et bloque totalement la reproduction.\n- Le système porte hypothalamo-hypophysaire : La GnRH est déversée dans les capillaires primaires de l'éminence médiane, puis chemine par les vaisseaux portes jusqu'au lit capillaire secondaire de l'antéhypophyse (adénohypophyse).\n- L'antéhypophyse : Sous la stimulation pulsatile de la GnRH, les cellules gonadotropes antéhypophysaires sécrètent deux glycoprotéines dimériques : les gonadostimulines ou gonadotrophines :\n  - La FSH : Stimule la multiplication des cellules de la granulosa et l'expression des récepteurs à la LH, favorisant la maturation folliculaire et la synthèse d'œstrogènes.\n  - La LH : Agit sur la thèque interne (stéroïdogenèse), déclenche l'ovulation lors de sa décharge massive, et assure la lutéinisation des cellules folliculaires en corps jaune.\n\n2. Les expériences de mise en évidence de la régulation endocrine :\n- Ablation de l'hypophyse (hypophysectomie chez la rate adulte) -> Atrophie immédiate des ovaires et de l'utérus, arrêt définitif des cycles (anovulation et aménorrhée). L'injection d'extraits hypophysaires ou de FSH/LH rétablit le développement ovarien et utérin.\n- Lésion de l'hypothalamus ou section de la tige pituitaire (vaisseaux portes) -> Atrophie ovarienne identique, prouvant que l'hypophyse a impérativement besoin des signaux neurohormonaux de la GnRH hypothalamique.\n- Ovariectomie bilatérale (castration chez la femelle adulte) -> Arrêt des cycles utérins (atrophie de l'utérus par absence d'œstrogènes/progestérone), mais hypertrophie de l'antéhypophyse et augmentation spectaculaire des taux sanguins de FSH et LH (multipliés par 5 à 10). L'injection d'œstrogènes à faible dose ramène immédiatement les gonadostimulines à leur niveau basal.\n\n3. La dynamique des rétrocontrôles ovariens sur l'axe hypothalamo-hypophysaire :\n- Rétrocontrôle négatif au début et au milieu de la phase folliculaire (J1 à J11) :\n  - Les follicules en croissance précoce sécrètent des quantités modérées d'œstradiol.\n  - Ce taux modéré d'œstradiol exerce un rétrocontrôle négatif (feed-back négatif) sur l'hypothalamus et l'antéhypophyse : il freine la libération de GnRH et de FSH.\n  - But physiologique : Ce freinage sélectif de la FSH empêche le recrutement anarchique de nouveaux follicules et permet la sélection d'un follicule unique dominant (le follicule de De Graaf).\n- Rétrocontrôle positif en fin de phase folliculaire (J12-J13, déclencheur de l'ovulation) :\n  - En parvenant à maturité, le follicule de De Graaf volumineux sécrète une quantité colossale d'œstradiol. Le taux plasmatique dépasse le seuil critique d'environ 200 pg/mL et se maintient au-dessus de ce seuil pendant plus de 36 à 48 heures.\n  - Ce signal hormonal intense inverse le fonctionnement du centre hypothalamo-hypophysaire : le rétrocontrôle devient positif (feed-back positif).\n  - L'hypothalamus accélère la fréquence des pulses de GnRH, et l'antéhypophyse devient hypersensible à la GnRH, libérant une décharge explosive de LH (le pic de LH) et un pic secondaire de FSH.\n  - Conséquence : Le pic de LH déclenche l'ovulation environ 32 à 36 heures plus tard et la transformation du follicule en corps jaune.\n- Rétrocontrôle négatif puissant en phase lutéale (J15 à J27) :\n  - Le corps jaune sécrète simultanément de fortes doses de progestérone associées à de l'œstradiol.\n  - L'action combinée de la progestérone et de l'œstradiol exerce un rétrocontrôle négatif puissant et continu sur le complexe hypothalamo-hypophysaire, bloquant totalement la sécrétion de GnRH, de FSH et de LH.\n  - But physiologique : Aucune nouvelle maturation folliculaire ne peut s'enclencher tant que le corps jaune est actif. Si un embryon s'implante, la gestation est protégée contre toute nouvelle ovulation.\n- Levée de rétrocontrôle en fin de cycle (J28) : La régression du corps jaune fait chuter la progestérone et les œstrogènes, ce qui lève l'inhibition hypophysaire : le taux de FSH recommence à monter, initiant le cycle suivant.",
      keyRule: "Un taux modéré d'œstradiol exerce un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire. Un taux d'œstradiol supérieur à 200 pg/mL pendant 48h déclenche un rétrocontrôle positif (pic de LH ovulatoire). En phase lutéale, la progestérone associée à l'œstradiol exerce un rétrocontrôle négatif puissant.",
      formulas: [
        {
          name: "Bascule du rétrocontrôle ovarien selon la concentration d'œstradiol",
          formula: "[\\text{Œstradiol}] < 200\\text{ pg/mL} \\implies \\text{Rétrocontrôle Négatif (Frein FSH/LH)} \\quad \\Longleftrightarrow \\quad [\\text{Œstradiol}] > 200\\text{ pg/mL (pendant 48h)} \\implies \\text{Rétrocontrôle Positif (Pic de LH)}",
          note: "En phase lutéale : [Progestérone élevée + Œstradiol] -> Rétrocontrôle négatif absolu"
        }
      ],
      workedExample: {
        title: "Interprétation d'un dosage hormonal post-ménopausique chez la femme",
        statement: "Chez une femme de 52 ans présentant des bouffées de chaleur et un arrêt complet de ses menstruations depuis un an (ménopause confirmée), le médecin fait réaliser un bilan hormonal sanguin. Les résultats montrent : Œstradiol plasmatique = effondré (< 10 pg/mL) ; Progestérone = indétectable (0 ng/mL) ; FSH plasmatique = 85 mUI/mL (valeur normale en phase folliculaire : 3 à 10 mUI/mL) ; LH plasmatique = 60 mUI/mL (normale : 2 à 8 mUI/mL). Expliquer les valeurs anormalement élevées des gonadostimulines hypophysaires.",
        methodSteps: [
          "Étape 1 : Analyser l'état des ovaires. À la ménopause, le stock de follicules ovariens primordiaux est totalement épuisé. En l'absence de follicules et de corps jaune, les ovaires ne produisent plus d'œstradiol ni de progestérone.",
          "Étape 2 : Analyser l'impact sur les rétrocontrôles. Physiologiquement, les hormones ovariennes exercent un rétrocontrôle négatif freinateur permanent sur le complexe hypothalamo-hypophysaire.",
          "Étape 3 : Déduire la conséquence sur l'hypophyse. L'absence définitive d'œstrogènes et de progestérone supprime totalement le rétrocontrôle négatif (levée permanente de l'inhibition).",
          "Étape 4 : Conclure sur les taux de FSH et LH. Privées de frein rétroactif, les cellules gonadotropes de l'antéhypophyse sécrètent des quantités maximales et continues de FSH et de LH."
        ],
        conclusion: "L'élévation massive de FSH et LH à la ménopause est la conséquence directe de la levée définitive du rétrocontrôle négatif ovarien."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Régulation neuro-endocrine de la fonction ovarienne et boucles de rétrocontrôle",
        caption: "L'axe gonadotrope féminin : rétrocontrôle négatif permanent alternant avec un rétrocontrôle positif déclencheur du pic de LH au 14e jour.",
        svgContent: `<svg viewBox="0 0 620 310" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Axe hypothalamo-hypophyso-ovarien">
  <defs>
    <marker id="arrow-ov" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#475569" />
    </marker>
  </defs>
  <rect x="10" y="10" width="600" height="290" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Hypothalamus -->
  <rect x="230" y="25" width="160" height="42" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5" />
  <text x="310" y="42" font-size="10" font-weight="bold" fill="#B45309" text-anchor="middle">HYPOTHALAMUS</text>
  <text x="310" y="56" font-size="9" fill="#78350F" text-anchor="middle">GnRH pulsatile</text>

  <!-- Flèche GnRH -->
  <path d="M 310 67 L 310 95" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow-ov)" />

  <!-- Antéhypophyse -->
  <rect x="220" y="100" width="180" height="45" rx="8" fill="#E0E7FF" stroke="#6366F1" stroke-width="1.5" />
  <text x="310" y="118" font-size="10" font-weight="bold" fill="#4338CA" text-anchor="middle">ANTÉHYPOPHYSE</text>
  <text x="310" y="133" font-size="9" fill="#312E81" text-anchor="middle">FSH (croissance) &amp; LH (ovulation)</text>

  <!-- Flèches FSH et LH vers ovaire -->
  <path d="M 270 145 L 270 190" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow-ov)" />
  <text x="250" y="170" font-size="9" font-weight="bold" fill="#2563EB">FSH</text>
  <path d="M 350 145 L 350 190" stroke="#8B5CF6" stroke-width="2" marker-end="url(#arrow-ov)" />
  <text x="370" y="170" font-size="9" font-weight="bold" fill="#7C3AED">LH</text>

  <!-- Ovaires -->
  <rect x="210" y="195" width="200" height="50" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.5" />
  <text x="310" y="214" font-size="10" font-weight="bold" fill="#BE185D" text-anchor="middle">OVAIRES (Follicule &amp; Corps jaune)</text>
  <text x="310" y="231" font-size="9" fill="#9D174D" text-anchor="middle">Œstrogènes &amp; Progestérone</text>

  <!-- Rétrocontrôle négatif (gauche, rouge) -->
  <path d="M 210 220 C 100 220, 100 80, 225 45" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arrow-ov)" />
  <rect x="65" y="125" width="105" height="34" rx="6" fill="#FEE2E2" stroke="#EF4444" />
  <text x="117" y="139" font-size="8" font-weight="bold" fill="#B91C1C" text-anchor="middle">Rétrocontrôle (-)</text>
  <text x="117" y="151" font-size="7" fill="#7F1D1D" text-anchor="middle">Phase folliculaire précoce</text>

  <!-- Rétrocontrôle positif (droite, vert) -->
  <path d="M 410 220 C 520 220, 520 80, 395 45" fill="none" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-ov)" />
  <rect x="450" y="125" width="120" height="38" rx="6" fill="#ECFDF5" stroke="#10B981" />
  <text x="510" y="139" font-size="8" font-weight="bold" fill="#047857" text-anchor="middle">Rétrocontrôle (+)</text>
  <text x="510" y="150" font-size="7" fill="#065F46" text-anchor="middle">Seuil œstrogènes dépassé</text>
  <text x="510" y="159" font-size="7" font-weight="bold" fill="#047857" text-anchor="middle">→ PIC DE LH (Ovulation)</text>
</svg>`,
        tableData: {
          headers: ["Période du cycle", "Hormones ovariennes émises", "Type de rétrocontrôle", "Conséquence sur l'axe gonadotrope"],
          rows: [
            ["Phase folliculaire précoce (J1 - J10)", "Œstradiol à concentration faible à modérée", "Rétrocontrôle Négatif (-)", "Freinage de la FSH, sélection du follicule dominant unique"],
            ["Phase folliculaire tardive (J12 - J13)", "Œstradiol très élevé (> 200 pg/mL pendant 48h)", "Rétrocontrôle Positif (+)", "Décharge ovulante explosive de LH (pic de LH) déclenchant l'ovulation"],
            ["Phase lutéale (J15 - J26)", "Progestérone abondante + Œstradiol modéré", "Rétrocontrôle Négatif puissant (-)", "Inhibition totale de GnRH, FSH et LH, blocage de toute nouvelle folliculogenèse"],
            ["Castration / Ménopause", "Absence d'œstrogènes et de progestérone", "Levée de tout rétrocontrôle (absence de frein)", "Hypersécrétion permanente de gonadostimulines (taux de FSH et LH très élevés)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c09_p2_ex1",
          type: "mcq",
          prompt: "Quelle neurohormone peptidique sécrétée de façon pulsatile par l'hypothalamus stimule la libération de FSH et LH par l'antéhypophyse ?",
          options: [
            "La GnRH (gonadolibérine)",
            "L'ocytocine",
            "L'aldostérone",
            "L'adrénaline"
          ],
          correctAnswerIndex: 0,
          explanation: "La GnRH (Gonadotropin-Releasing Hormone) est sécrétée par les neurones hypothalamiques dans le système porte hypothalamo-hypophysaire pour commander la synthèse et la libération de FSH et LH."
        },
        {
          id: "tle_d_svt_c09_p2_ex2",
          type: "mcq",
          prompt: "À quelle condition biologique précise l'œstradiol exerce-t-il un rétrocontrôle positif déclenchant le pic pré-ovulatoire de LH ?",
          options: [
            "Lorsque son taux dépasse un seuil critique d'environ 200 pg/mL maintenu pendant au moins 36 à 48 heures",
            "Lorsque son taux chute à zéro pendant les menstruations",
            "Uniquement en présence d'un taux très élevé de progestérone",
            "Dès la puberté de façon continue et ininterrompue"
          ],
          correctAnswerIndex: 0,
          explanation: "L'inversion du rétrocontrôle de négatif en positif nécessite le franchissement d'un seuil critique de concentration en œstradiol (> 200 pg/mL) pendant une durée suffisante (environ 48h en fin de phase folliculaire)."
        },
        {
          id: "tle_d_svt_c09_p2_ex3",
          type: "mcq",
          prompt: "Qu'observe-t-on sur les taux sanguins de FSH et de LH chez une rate adulte ayant subi une ovariectomie bilatérale (ablation des deux ovaires) ?",
          options: [
            "Une augmentation très importante et durable des taux sanguins de FSH et de LH (hypersécrétion par levée de rétrocontrôle)",
            "Une chute immédiate et irréversible de la FSH et de la LH à zéro",
            "La transformation de l'hypophyse en tissu ovarien",
            "Une absence totale de modification des hormones hypophysaires"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ablation des ovaires supprime la source d'œstrogènes et de progestérone, éliminant le rétrocontrôle négatif freinateur : l'antéhypophyse libère alors de très grandes quantités de FSH et LH."
        },
        {
          id: "tle_d_svt_c09_p2_ex4",
          type: "mcq",
          prompt: "Quel est l'effet de la progestérone associée aux œstrogènes sur le complexe hypothalamo-hypophysaire pendant la phase lutéale ?",
          options: [
            "Elle exerce un rétrocontrôle négatif puissant bloquant la sécrétion de GnRH, FSH et LH",
            "Elle déclenche un second pic de LH provoquant une deuxième ovulation",
            "Elle stimule la destruction des vaisseaux sanguins de l'hypothalamus",
            "Elle accélère la maturation de 10 nouveaux follicules"
          ],
          correctAnswerIndex: 0,
          explanation: "La progestérone freine puissamment l'axe hypothalamo-hypophysaire pendant la phase lutéale, empêchant toute nouvelle ovulation et protégeant une éventuelle gestation."
        },
        {
          id: "tle_d_svt_c09_p2_ex5",
          type: "mcq",
          prompt: "Quelle anomalie survient si la sécrétion de GnRH par l'hypothalamus est administrée à une rate de manière continue plutôt que sous forme de pulses ?",
          options: [
            "L'antéhypophyse se désensibilise et cesse de sécréter la FSH et la LH, entraînant l'arrêt des cycles ovariens",
            "L'ovaire grossit démesurément et libère 50 ovocytes par jour",
            "Les règles deviennent permanentes sans interruption",
            "Les spermatozoïdes se développent dans les ovaires"
          ],
          correctAnswerIndex: 0,
          explanation: "La pulsatilité de la GnRH est indispensable au maintien de la sensibilité des récepteurs hypophysaires. Une perfusion continue entraîne l'internalisation des récepteurs et la mise au repos complet de l'antéhypophyse."
        },
        {
          id: "tle_d_svt_c09_p2_ex6",
          type: "mcq",
          prompt: "Sur quelles cellules ovariennes cibles l'hormone FSH agit-elle principalement pour stimuler la maturation folliculaire ?",
          options: [
            "Les cellules de la granulosa des follicules ovariens",
            "Les cellules interstitielles du stroma ovarien",
            "Les fibres musculaires du col de l'utérus",
            "Les neurones du bulbe rachidien"
          ],
          correctAnswerIndex: 0,
          explanation: "La FSH se fixe sur les récepteurs membranaires des cellules de la granulosa, stimulant leur prolifération et l'activité de l'aromatase qui convertit les androgènes thécaux en œstrogènes."
        }
      ]
    },
    {
      id: "pt3_regulation_fonction_testiculaire_mâle_axe_glandulaire",
      order: 3,
      title: "Régulation neuro-hormonale chez l'homme : L'axe hypothalamo-hypophyso-testiculaire",
      summary: "Organisation fonctionnelle du testicule (tubes séminifères, cellules de Sertoli, cellules interstitielles de Leydig), action différentielle de la FSH et de la LH, biosynthèse de la testostérone et de l'inhibine, et mécanisme de rétrocontrôle négatif permanent.",
      conceptExplanation: "Contrairement à la femme dont le fonctionnement reproducteur est cyclique, l'appareil reproducteur mâle fonctionne de manière continue depuis la puberté jusqu'à un âge avancé, sous le contrôle régulateur rigoureux de l'axe hypothalamo-hypophysaire.\n\n1. Double fonction du testicule adulte :\nLe testicule est une glande mixte assurant simultanément deux fonctions complémentaires au sein de deux compartiments tissulaires distincts :\n- La fonction exocrine (spermatogenèse) : Assurée par les tubes séminifères pelotonnés (environ 800 mètres de longueur cumulée par testicule).\n  - Les cellules germinales à différents stades de maturation : spermatogonies (périphérie), spermatocytes I, spermatocytes II, spermatides et spermatozoïdes matures libérés dans la lumière tubulaire.\n  - Les cellules de Sertoli : Grosses cellules nourricières somatiques s'étendant de la membrane basale à la lumière. Rôles : soutien physique et nutrition des cellules germinales, constitution de la barrière hémato-testiculaire étanche protégeant les spermatozoïdes des attaques immunitaires, synthèse de l'Androgen Binding Protein (ABP ou protéine de liaison des androgènes) qui concentre la testostérone dans les tubes séminifères, et sécrétion de l'inhibine (hormone peptidique régulatrice).\n- La fonction endocrine (sécrétion d'hormones mâles) : Assurée par le tissu interstitiel situé entre les tubes séminifères.\n  - Les cellules de Leydig (cellules interstitielles) : Synthétisent et déversent directement dans les capillaires sanguins la testostérone, principale hormone androgène mâle (environ 5 à 7 mg/jour chez l'adulte).\n  - Rôles de la testostérone : Indispensable au déroulement complet de la spermatogenèse (agissant de concert avec la FSH), développement et maintien des caractères sexuels primaires (développement du pénis, des bourses, de la prostate et des vésicules séminales) et secondaires (pilosité corporelle et faciale, voix grave par mue du larynx, développement de la masse musculaire et squelettique, comportement agressif/libido).\n\n2. Contrôle par le complexe hypothalamo-hypophysaire :\n- L'hypothalamus émet des pulses réguliers de GnRH (un pulse toutes les 90 à 120 minutes) qui stimulent l'antéhypophyse.\n- L'antéhypophyse sécrète deux gonadostimulines agissant sur des cibles testiculaires spécifiques distinctes :\n  - La LH (chez l'homme anciennement appelée ICSH : Interstitial Cell Stimulating Hormone) : Se fixe spécifiquement sur les récepteurs membranaires des cellules de Leydig du tissu interstitiel et stimule la biosynthèse enzymatique de la testostérone à partir du cholestérol.\n  - La FSH : Se fixe spécifiquement sur les cellules de Sertoli à l'intérieur des tubes séminifères. Elle stimule la spermatogenèse en activant la synthèse de l'ABP (qui piège la testostérone nécessaire à la méiose des spermatocytes) et déclenche la synthèse d'inhibine.\n\n3. Les expériences de mise en évidence chez le mammifère mâle (rat/bélier) :\n- Expérience 1 (Hypophysectomie) : L'ablation de l'hypophyse entraîne l'atrophie complète des testicules, l'arrêt absolu de la spermatogenèse (stérilité) et la régression des caractères sexuels secondaires (atrophie de la prostate et des vésicules séminales par effondrement de la testostérone).\n- Expérience 2 (Injections de FSH ou LH seules à des animaux hypophysectomisés) :\n  - L'injection de FSH seule augmente le volume des tubes séminifères mais la spermatogenèse reste bloquée au stade spermatocyte ; les caractères sexuels secondaires ne sont pas rétablis (les cellules de Leydig restent au repos, pas de testostérone).\n  - L'injection de LH seule rétablit l'activité des cellules de Leydig, la sécrétion de testostérone et restaure les caractères sexuels secondaires, mais la spermatogenèse ne s'achève pas sans FSH.\n  - L'injection simultanée de FSH + LH restaure intégralement et parfaitement la spermatogenèse normale et les caractères sexuels.\n- Expérience 3 (Castration bilatérale) : L'ablation des testicules entraîne la régression des caractères sexuels secondaires et provoque une hypersécrétion massive de FSH et de LH par l'antéhypophyse. L'injection d'extraits testiculaires ou de testostérone corrige cette hypersécrétion.\n\n4. Mécanisme de rétrocontrôle négatif chez l'homme :\nContrairement à la femme, le fonctionnement mâle ne comporte JAMAIS de rétrocontrôle positif : il repose sur un rétrocontrôle négatif permanent (feed-back négatif) assurant une homéostasie hormonale remarquablement stable :\n- La testostérone exerce un rétrocontrôle négatif à double niveau : elle freine la libération de GnRH au niveau de l'hypothalamus et freine directement la sécrétion de LH par l'antéhypophyse dès que sa concentration plasmatique dépasse la valeur consigne (~5 ng/mL). Si la testostérone baisse, le frein est levé, la LH remonte et relance la testostérone. Cependant, la testostérone n'a que peu d'effet direct sur la FSH.\n- L'inhibine sécrétée par les cellules de Sertoli exerce un rétrocontrôle négatif spécifique et direct sur l'antéhypophyse pour freiner exclusivement la sécrétion de FSH lorsque la spermatogenèse est abondante, stabilisant ainsi la production de spermatozoïdes.",
      keyRule: "La LH stimule les cellules de Leydig qui sécrètent la testostérone ; la FSH stimule les cellules de Sertoli qui activent la spermatogenèse et sécrètent l'inhibine. La testostérone freine la LH et la GnRH par rétrocontrôle négatif ; l'inhibine freine la FSH. Il n'y a aucun rétrocontrôle positif chez l'homme.",
      formulas: [
        {
          name: "Régulation endocrinienne de la fonction testiculaire",
          formula: "\\text{Hypothalamus (GnRH)} \\longrightarrow \\text{Antéhypophyse} \\begin{cases} \\xrightarrow{\\text{LH}} \\text{Cellules de Leydig} \\longrightarrow \\text{Testostérone} \\xrightarrow{\\text{Rétrocontrôle } (-)} \\text{LH et GnRH} \\\\ \\xrightarrow{\\text{FSH}} \\text{Cellules de Sertoli (Spermatogenèse)} \\longrightarrow \\text{Inhibine} \\xrightarrow{\\text{Rétrocontrôle } (-)} \\text{FSH} \\end{cases}",
          note: "Système autorégulé maintenant constants les taux hormonaux et la production de gamètes"
        }
      ],
      workedExample: {
        title: "Analyse des effets de l'administration abusive d'androgènes anabolisants (dopage)",
        statement: "Un athlète s'injecte de fortes doses régulières de testostérone de synthèse (stéroïdes anabolisants) pour accroître sa masse musculaire. Après 6 mois de prise, un spermogramme et des dosages hormonaux sanguins révèlent : Une azoospermie complète (zéro spermatozoïde dans l'éjaculat), une atrophie bilatérale nette des testicules et des taux plasmatiques de LH et de FSH quasiment nuls. Expliquer comment l'apport excessif de testostérone exogène a pu paradoxalement rendre cet athlète stérile.",
        methodSteps: [
          "Étape 1 : Analyser l'impact de la testostérone exogène sur l'axe gonadotrope. Les concentrations sanguines massives de testostérone injectée exercent un rétrocontrôle négatif puissant et continu sur l'hypothalamus et l'antéhypophyse.",
          "Étape 2 : Analyser les répercussions hypophysaires. Sous ce freinage permanent, l'antéhypophyse bloque totalement la sécrétion de LH et de FSH (taux indétectables).",
          "Étape 3 : Expliquer l'atrophie et l'arrêt de la spermatogenèse. Privées de LH, les cellules de Leydig endogènes se mettent au repos et s'atrophient. Privées de FSH et de testostérone intratesticulaire locale sécrétée par les cellules de Leydig, les cellules de Sertoli cessent de fonctionner : la spermatogenèse s'interrompt totalement.",
          "Étape 4 : Conclure sur la stérilité. L'absence de spermatozoïdes (azoospermie) est la conséquence directe de l'inhibition de l'axe gonadotrope par rétrocontrôle négatif excessif."
        ],
        conclusion: "L'excès de testostérone bloque la sécrétion hypophysaire de FSH et LH par rétrocontrôle négatif, entraînant l'atrophie testiculaire et la stérilité anabolisante."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Compartiments testiculaires et régulation endocrine chez l'homme",
        caption: "Axe hypothalamo-hypophyso-testiculaire : régulation à double compartiment (cellules de Leydig productrices de testostérone et cellules de Sertoli régulatrices de la spermatogenèse).",
        svgContent: `<svg viewBox="0 0 620 310" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Axe gonadotrope masculin">
  <defs>
    <marker id="arrow-test" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#475569" />
    </marker>
  </defs>
  <rect x="10" y="10" width="600" height="290" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Hypothalamus -->
  <rect x="230" y="25" width="160" height="40" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5" />
  <text x="310" y="42" font-size="10" font-weight="bold" fill="#B45309" text-anchor="middle">HYPOTHALAMUS</text>
  <text x="310" y="55" font-size="9" fill="#78350F" text-anchor="middle">GnRH pulsatile</text>

  <!-- Flèche GnRH -->
  <path d="M 310 65 L 310 95" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow-test)" />

  <!-- Antéhypophyse -->
  <rect x="220" y="95" width="180" height="42" rx="8" fill="#E0E7FF" stroke="#6366F1" stroke-width="1.5" />
  <text x="310" y="112" font-size="10" font-weight="bold" fill="#4338CA" text-anchor="middle">ANTÉHYPOPHYSE</text>
  <text x="310" y="127" font-size="9" fill="#312E81" text-anchor="middle">Sécrétion de LH et FSH</text>

  <!-- Voie LH (gauche) -->
  <path d="M 260 137 L 170 185" stroke="#EF4444" stroke-width="2" marker-end="url(#arrow-test)" />
  <text x="195" y="155" font-size="9" font-weight="bold" fill="#DC2626">LH</text>

  <!-- Voie FSH (droite) -->
  <path d="M 360 137 L 450 185" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow-test)" />
  <text x="425" y="155" font-size="9" font-weight="bold" fill="#2563EB">FSH</text>

  <!-- Compartiment Leydig (gauche) -->
  <rect x="70" y="190" width="200" height="52" rx="8" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.5" />
  <text x="170" y="208" font-size="10" font-weight="bold" fill="#B91C1C" text-anchor="middle">CELLULES DE LEYDIG</text>
  <text x="170" y="222" font-size="8" fill="#7F1D1D" text-anchor="middle">(Tissu interstitiel)</text>
  <text x="170" y="234" font-size="9" font-weight="bold" fill="#DC2626" text-anchor="middle">→ Sécrétion de Testostérone</text>

  <!-- Compartiment Sertoli (droite) -->
  <rect x="350" y="190" width="200" height="52" rx="8" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5" />
  <text x="450" y="208" font-size="10" font-weight="bold" fill="#1D4ED8" text-anchor="middle">CELLULES DE SERTOLI</text>
  <text x="450" y="222" font-size="8" fill="#1E3A8A" text-anchor="middle">(Tubes séminifères)</text>
  <text x="450" y="234" font-size="9" font-weight="bold" fill="#2563EB" text-anchor="middle">→ Spermatogenèse + Inhibine</text>

  <!-- Synergie testostérone vers Sertoli -->
  <path d="M 270 216 L 345 216" stroke="#059669" stroke-width="2" marker-end="url(#arrow-test)" />
  <text x="307" y="210" font-size="7" font-weight="bold" fill="#059669" text-anchor="middle">Synergie locale</text>

  <!-- Rétrocontrôle testostérone sur Hypothalamus/Hypophyse -->
  <path d="M 120 190 C 40 160, 40 60, 225 40" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arrow-test)" />
  <text x="55" y="100" font-size="8" font-weight="bold" fill="#DC2626">RC (-) Testostérone</text>

  <!-- Rétrocontrôle Inhibine sur FSH hypophyse -->
  <path d="M 500 190 C 580 160, 580 115, 405 115" fill="none" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arrow-test)" />
  <text x="560" y="145" font-size="8" font-weight="bold" fill="#2563EB">RC (-) Inhibine</text>
</svg>`,
        tableData: {
          headers: ["Compartiment testiculaire", "Types cellulaires majeurs", "Hormone hypophysaire stimulante", "Produit / Hormone sécrété", "Rôle physiologique et rétrocontrôle"],
          rows: [
            ["Tissu interstitiel", "Cellules de Leydig", "LH (Lutéinisante)", "Testostérone (hormone stéroïde)", "Maintien des caractères sexuels, stimule spermatogenèse, rétrocontrôle négatif sur LH et GnRH"],
            ["Tubes séminifères", "Cellules de Sertoli", "FSH (Folliculostimulante)", "ABP (Androgen Binding Protein) et Inhibine", "Soutien et nutrition des gamètes, barrière hémato-testiculaire, rétrocontrôle négatif sur FSH"],
            ["Tubes séminifères", "Cellules germinales (spermatogonies à spz)", "Testostérone locale + FSH", "Spermatozoïdes matures mobiles", "Production continue d'environ 100 à 200 millions de spermatozoïdes par jour"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c09_p3_ex1",
          type: "mcq",
          prompt: "Quelle population cellulaire du testicule assure la synthèse et la sécrétion de la testostérone sous la stimulation de la LH ?",
          options: [
            "Les cellules interstitielles de Leydig",
            "Les cellules de Sertoli",
            "Les spermatogonies souches",
            "Les cellules de la prostate"
          ],
          correctAnswerIndex: 0,
          explanation: "Les cellules de Leydig, situées dans le tissu conjonctif interstitiel entre les tubes séminifères, sont stimulées par la LH pour sécréter la testostérone."
        },
        {
          id: "tle_d_svt_c09_p3_ex2",
          type: "mcq",
          prompt: "Quel est le rôle physiologique principal de l'inhibine sécrétée par les cellules de Sertoli ?",
          options: [
            "Exercer un rétrocontrôle négatif direct sur l'antéhypophyse pour freiner spécifiquement la sécrétion de FSH",
            "Déclencher l'érection et l'éjaculation",
            "Neutraliser les acides sécrétés par l'estomac",
            "Provoquer l'expulsion des spermatozoïdes dans la vessie"
          ],
          correctAnswerIndex: 0,
          explanation: "L'inhibine est une hormone polypeptidique produite par les cellules de Sertoli qui exerce un rétrocontrôle négatif spécifique sur l'antéhypophyse pour moduler la libération de FSH."
        },
        {
          id: "tle_d_svt_c09_p3_ex3",
          type: "mcq",
          prompt: "Quelle protéine de transport synthétisée par les cellules de Sertoli sous l'effet de la FSH permet de piéger la testostérone dans les tubes séminifères ?",
          options: [
            "L'ABP (Androgen Binding Protein)",
            "L'albumine humaine",
            "La perforine",
            "L'hémoglobine fœtale"
          ],
          correctAnswerIndex: 0,
          explanation: "L'ABP (protéine liant les androgènes) fixe la testostérone lipophile et maintient une concentration intratesticulaire très élevée de testostérone indispensable au bon déroulement de la méiose des spermatocytes."
        },
        {
          id: "tle_d_svt_c09_p3_ex4",
          type: "mcq",
          prompt: "Existe-t-il un mécanisme de rétrocontrôle positif chez l'homme comparable au pic ovulatoire de la femme ?",
          options: [
            "Non, chez l'homme, le système fonctionne exclusivement par rétrocontrôle négatif permanent pour stabiliser les taux hormonaux",
            "Oui, tous les 28 jours le taux de testostérone subit un pic explosif",
            "Oui, uniquement pendant le sommeil paradoxal",
            "Oui, la testostérone stimule en permanence la GnRH"
          ],
          correctAnswerIndex: 0,
          explanation: "Chez l'homme, il n'y a aucun rétrocontrôle positif : la testostérone et l'inhibine exercent uniquement des rétrocontrôles négatifs, assurant une production continue et stable d'hormones et de gamètes."
        },
        {
          id: "tle_d_svt_c09_p3_ex5",
          type: "mcq",
          prompt: "Qu'observe-t-on sur les caractères sexuels secondaires d'un rat adulte après une castration bilatérale (ablation des deux testicules) ?",
          options: [
            "Une régression progressive et nette des caractères sexuels secondaires (atrophie de la prostate et des vésicules séminales)",
            "Un développement hypertrophique de la prostate",
            "Une apparition immédiate de cycles ovulatoires",
            "Une absence totale d'effet morphologique"
          ],
          correctAnswerIndex: 0,
          explanation: "La testostérone testiculaire est indispensable au maintien trophique des glandes annexes mâles (prostate, vésicules séminales) et des caractères sexuels secondaires. Sa disparition entraîne leur régression."
        },
        {
          id: "tle_d_svt_c09_p3_ex6",
          type: "mcq",
          prompt: "Comment réagit l'axe hypothalamo-hypophysaire si la concentration sanguine de testostérone descend temporairement en dessous de sa valeur de consigne ?",
          options: [
            "Le frein du rétrocontrôle négatif est levé, augmentant la sécrétion pulsatile de GnRH et de LH, ce qui relance la production testiculaire de testostérone",
            "L'hypophyse s'arrête définitivement de fonctionner",
            "Les testicules sont détruits par les lymphocytes cytotoxiques",
            "La posthypophyse sécrète immédiatement de l'insuline"
          ],
          correctAnswerIndex: 0,
          explanation: "La baisse de testostérone lève l'inhibition sur l'hypothalamus et l'hypophyse : la LH remonte rapidement et stimule les cellules de Leydig pour restaurer la natrémie androgénique normale."
        }
      ]
    },
    {
      id: "pt4_contraception_hormonale_chimique_modes_action",
      order: 4,
      title: "Maîtrise de la reproduction : Méthodes contraceptives hormonales et modes d'action",
      summary: "Composition pharmacologique et mécanismes d'action des pilules combinées oestroprogestatives, séquentielles, microdosées (progestatifs purs) et de la contraception d'urgence (pilule du lendemain), bénéfices pour la santé et le planning familial.",
      conceptExplanation: "La connaissance précise de la régulation neuro-endocrine de la reproduction a permis le développement des méthodes contraceptives hormonales chimiques, offrant aux couples la maîtrise choisie et responsable de leur fécondité (planning familial).\n\n1. Typologie et composition des contraceptifs oraux hormonaux :\nLes pilules contraceptives sont formulées à partir de molécules de synthèse dérivées des hormones ovariennes naturelles (œstrogènes de synthèse comme l'éthinylœstradiol, et progestatifs de synthèse comme le lévonorgestrel ou le désogestrel), qui présentent une demi-vie plasmatique plus longue et une biodisponibilité orale supérieure aux hormones naturelles.\n- 1. Les pilules combinées (ou oestroprogestatives) :\n  - Composition : Chaque comprimé associe un œstrogène de synthèse et un progestatif de synthèse.\n  - Types de dosage : Pilules normodosées (50 µg d'œstrogène), minidosées (15 à 30 µg d'œstrogène, les plus prescrites aujourd'hui).\n  - Schéma de prise : Prise quotidienne régulière pendant 21 jours consécutifs, suivie d'un arrêt de 7 jours (ou prise de 7 comprimés placebos inactifs). Durant cette fenêtre d'arrêt de 7 jours, la baisse des hormones de synthèse déclenche une hémorragie de privation mimant les règles naturelles (règles artificielles non ovulatoires).\n- 2. Les pilules séquentielles :\n  - Comprennent deux ou trois phases de comprimés colorés au cours de la plaquette de 21 jours : œstrogènes seuls au début, puis association œstroprogestative progressive pour mimer plus fidèlement les variations physiologiques naturelles du cycle.\n- 3. Les pilules microdosées (ou micropilules à progestatif seul) :\n  - Composition : Ne contiennent qu'un progestatif de synthèse à très faible dose (aucun œstrogène).\n  - Schéma de prise : Prise continue sans aucun jour d'arrêt, tous les jours à la même heure stricte.\n  - Indications privilégiées : Femmes présentant des contre-indications vasculaires aux œstrogènes (tabagisme > 35 ans, antécédents de phlébite ou d'AVC, hypertension artérielle) et femmes allaitantes.\n- 4. La contraception d'urgence hormonale ('Pilule du lendemain') :\n  - Composition : Comprimé unique contenant une forte dose de progestatif pur (Lévonorgestrel à 1,5 mg) ou un modulateur sélectif des récepteurs de la progestérone (Acétate d'Ulipristal à 30 mg).\n  - Utilisation : Méthode d'urgence exceptionnelle à prendre le plus tôt possible (idéalement dans les 12 à 24 heures, au maximum dans les 72 à 120 heures) après un rapport sexuel non ou mal protégé (rupture de préservatif, oubli de pilule, viol).\n\n2. Les modes d'action biologiques des pilules contraceptives :\nLes pilules combinées oestroprogestatives exercent une remarquable triple action synergique protectrice garantissant une efficacité théorique supérieure à 99% (indice de Pearl < 0,3) :\n- Action 1 : Blocage central de l'ovulation (Action anovulatoire sur le complexe hypothalamo-hypophysaire) :\n  - L'absorption quotidienne d'œstrogènes et de progestatifs de synthèse maintient dans le sang un taux hormonal artificiel constant modéré.\n  - Ce taux plasmatique constant exerce en permanence un puissant rétrocontrôle négatif sur l'hypothalamus et l'antéhypophyse.\n  - La sécrétion de GnRH, de FSH et de LH est verrouillée : la maturation folliculaire est inhibée et le pic ovulatoire pré-ovulatoire de LH ne peut jamais se produire. Les ovaires sont mis au repos complet : absence totale d'ovulation.\n- Action 2 : Modification défavorable de la muqueuse utérine (Action anti-nidation) :\n  - La présence continue de progestatif empêche le développement cyclique harmonieux de l'endomètre : la dentelle utérine ne se forme pas, les glandes sécrétoires restent atrophiées et le chorion devient impropre à l'accueil et à l'implantation d'un éventuel blastocyste.\n- Action 3 : Imperméabilisation de la glaire cervicale (Action barrière anti-migration) :\n  - Sous l'effet du progestatif, la glaire cervicale sécrétée par les glandes du col de l'utérus reste en permanence épaisse, dense, peu abondante, visqueuse et son maillage de filaments protéiques est extrêmement serré (au lieu de devenir filante et claire comme en période ovulatoire).\n  - Cette glaire forme un bouchon infranchissable qui bloque l'ascension des spermatozoïdes vers la cavité utérine.\n- Cas particulier de la pilule microdosée : Agit principalement sur la glaire cervicale et l'endomètre (l'ovulation n'est bloquée que dans environ 50% des cycles).\n- Cas de la pilule du lendemain : Sa forte dose bloque brutalement ou retarde l'ovulation si elle n'a pas encore eu lieu, perturbe la motilité des trompes de Fallope et modifie l'endomètre pour empêcher la nidation.\n\n3. Enjeux médicaux, sociétaux et planning familial :\n- Avantages de la contraception : Permet le planning familial (choix éclairé du nombre d'enfants et de l'espacement des naissances), la réduction drastique de la mortalité maternelle et infantile liée aux grossesses précoces (chez les adolescentes) ou trop rapprochées, la diminution des avortements clandestins dangereux, et la poursuite des études et de l'autonomie socio-professionnelle des jeunes filles.\n- Rappel sanitaire fondamental : Les pilules contraceptives protègent uniquement contre les grossesses non désirées ; elles ne protègent AUCUNEMENT contre les Infections Sexuellement Transmissibles (IST) ni contre le VIH/SIDA. Seul le préservatif (masculin ou féminin) assure la double protection (contraception + protection contre les IST).",
      keyRule: "La pilule combinée oestroprogestative bloque l'ovulation par rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire (suppression du pic de LH), atrophie l'endomètre (anti-nidation) et rend la glaire cervicale imperméable aux spermatozoïdes. Elle ne protège pas contre le VIH.",
      formulas: [
        {
          name: "Mécanisme d'action de la pilule combinée oestroprogestative",
          formula: "\\text{Hormones de synthèse (Œstrogène + Progestatif)} \\xrightarrow{\\text{Rétrocontrôle } (-)} \\text{Axe Hypothalamo-Hypophyse} \\implies \\begin{cases} \\text{Pas de pic de LH} \\implies \\text{Anovulation} \\\\ \\text{Glaire cervicale imperméable} \\\\ \\text{Endomètre impropre à la nidation} \\end{cases}",
          note: "Triple verrou biologique assurant une sécurité contraceptive maximale"
        }
      ],
      workedExample: {
        title: "Analyse du profil hormonal d'une femme sous pilule combinée oestroprogestative",
        statement: "On réalise un suivi hormonal complet sur 28 jours chez une femme prenant régulièrement une pilule combinée minidosée (21 comprimés actifs du J1 au J21, puis 7 jours d'arrêt). Les dosages révèlent : Taux de FSH et LH stables et très bas tout au long des 28 jours (aucun pic de LH observé) ; Folliculogenèse arrêtée (aucun follicule mûr à l'échographie pelvienne) ; Au 24e jour survient un écoulement sanguin vaginal. 1. Expliquer pourquoi aucun pic de LH n'apparaît. 2. Expliquer l'origine de l'écoulement sanguin survenant pendant la semaine d'arrêt.",
        methodSteps: [
          "Étape 1 : Expliquer l'absence de pic de LH. Les hormones de synthèse absorbées quotidiennement maintiennent un taux circulant suffisant pour exercer un rétrocontrôle négatif continu sur l'hypothalamus et l'antéhypophyse. La sécrétion de gonadostimulines est freinée, empêchant la croissance folliculaire terminale et annulant tout rétrocontrôle positif : il n'y a donc aucun pic de LH et aucune ovulation.",
          "Étape 2 : Analyser l'arrêt des comprimés à J21. Durant les 7 jours d'arrêt, la femme ne prend plus d'hormones de synthèse : les concentrations sanguines de progestatif et d'œstrogène de synthèse chutent brutalement.",
          "Étape 3 : Expliquer le saignement. La chute brutale des hormones de synthèse prive la muqueuse utérine de soutien hormonal. Une desquamation superficielle de l'endomètre se produit : c'est l'hémorragie de privation mimant les règles (règles artificielles)."
        ],
        conclusion: "L'absence de pic de LH est due au rétrocontrôle négatif continu exercé par la pilule ; le saignement est une hémorragie de privation consécutive à l'arrêt temporaire de la prise."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparatif des principales méthodes contraceptives hormonales chimiques",
        tableData: {
          headers: ["Type de pilule", "Composition hormonale", "Protocole d'utilisation", "Mode d'action principal", "Délai d'action / Remarques"],
          rows: [
            ["Pilule combinée (minidosée)", "Œstrogène + Progestatif de synthèse", "21 jours de prise + 7 jours d'arrêt", "Blocage ovulation (rétrocontrôle -), glaire imperméable, endomètre impropre", "Efficacité > 99%, retour de règles artificielles"],
            ["Pilule séquentielle", "Doses variables selon les phases de la plaquette", "21 jours de prise + 7 jours d'arrêt", "Mime les variations du cycle tout en bloquant l'ovulation", "Contrôle régulier des hémorragies de privation"],
            ["Pilule microdosée", "Progestatif pur à très faible dose", "Prise continue quotidienne 365j/365 à heure fixe", "Imperméabilisation de la glaire cervicale et modification endomètre", "Indiquée en cas d'allaitement ou contre-indication aux œstrogènes"],
            ["Pilule du lendemain", "Forte dose de lévonorgestrel ou ulipristal", "Comprimé unique d'urgence", "Retardement de l'ovulation et perturbation de la nidation", "Urgence : à prendre dans les 72h (ne remplace pas la contraception régulière)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c09_p4_ex1",
          type: "mcq",
          prompt: "Par quel mécanisme principal la pilule contraceptive combinée (œstroprogestative) empêche-t-elle l'ovulation chez la femme ?",
          options: [
            "En exerçant un rétrocontrôle négatif continu sur l'axe hypothalamo-hypophysaire, ce qui supprime le pic pré-ovulatoire de LH",
            "En détruisant directement les ovaires par voie enzymatique",
            "En provoquant la contraction permanente des trompes de Fallope",
            "En neutralisant le sperme par une réaction acide dans le vagin"
          ],
          correctAnswerIndex: 0,
          explanation: "Les hormones ovariennes de synthèse contenues dans la pilule combinée freinent en permanence l'hypophyse par rétrocontrôle négatif : le pic de LH ne peut jamais se produire, bloquant l'ovulation."
        },
        {
          id: "tle_d_svt_c09_p4_ex2",
          type: "mcq",
          prompt: "Quelle modification de la glaire cervicale est induite par les progestatifs de synthèse contenus dans les pilules contraceptives ?",
          options: [
            "Elle devient épaisse, visqueuse et son maillage serré forme une barrière infranchissable pour les spermatozoïdes",
            "Elle devient très abondante, aqueuse et transparente",
            "Elle disparaît totalement de l'appareil génital",
            "Elle attire les spermatozoïdes par chimiotactisme positif"
          ],
          correctAnswerIndex: 0,
          explanation: "Sous l'effet des progestatifs, la glaire cervicale sécrétée par le col utérin s'épaissit et devient un filtre mécanique étanche qui empêche la progression des spermatozoïdes vers l'utérus."
        },
        {
          id: "tle_d_svt_c09_p4_ex3",
          type: "mcq",
          prompt: "Dans quel délai maximal après un rapport sexuel non protégé la pilule du lendemain à base de lévonorgestrel doit-elle être prise pour une efficacité optimale ?",
          options: [
            "Le plus tôt possible, idéalement dans les 12 à 24 heures et au maximum dans les 72 heures (3 jours)",
            "Exactement 14 jours après le rapport",
            "Au moment de l'apparition des prochaines règles",
            "Un mois après le rapport sexuel"
          ],
          correctAnswerIndex: 0,
          explanation: "L'efficacité de la pilule du lendemain décroît avec le temps : elle doit être prise le plus rapidement possible, son efficacité diminuant au-delà de 72 heures (3 jours) pour le lévonorgestrel."
        },
        {
          id: "tle_d_svt_c09_p4_ex4",
          type: "mcq",
          prompt: "À quoi correspondent les saignements qui surviennent chez une femme durant la semaine d'arrêt entre deux plaquettes de pilule combinée ?",
          options: [
            "À une hémorragie de privation artificielle causée par l'arrêt temporaire de l'apport d'hormones de synthèse",
            "À une véritable menstruation consécutive à l'expulsion d'un ovocyte",
            "À une infection bactérienne grave de la trompe",
            "À la rupture d'un kyste ovarien"
          ],
          correctAnswerIndex: 0,
          explanation: "Ces saignements sont des règles artificielles (hémorragie de privation hormonale) déclenchées par l'interruption des hormones de synthèse, sans qu'aucune ovulation n'ait eu lieu."
        },
        {
          id: "tle_d_svt_c09_p4_ex5",
          type: "mcq",
          prompt: "Laquelle de ces affirmations est strictement VRAIE concernant les pilules contraceptives hormonales ?",
          options: [
            "Elles protègent contre les grossesses non désirées mais ne protègent absolument pas contre le VIH ni les autres IST",
            "Elles protègent à la fois contre les grossesses et contre le VIH/SIDA",
            "Elles rendent les femmes définitivement stériles après un an d'utilisation",
            "Elles doivent être obligatoirement prises par l'homme pour être efficaces"
          ],
          correctAnswerIndex: 0,
          explanation: "La pilule contraceptive est une méthode de régulation des naissances purement reproductive : elle n'offre aucune protection contre la transmission du VIH ou des infections sexuellement transmissibles (seul le préservatif protège des IST)."
        },
        {
          id: "tle_d_svt_c09_p4_ex6",
          type: "mcq",
          prompt: "Pourquoi la pilule microdosée (ne contenant que des progestatifs purs) est-elle recommandée chez les femmes qui allaitent ou présentant des contre-indications aux œstrogènes ?",
          options: [
            "Parce qu'elle ne contient aucun œstrogène et n'altère ni la lactation ni le système cardiovasculaire et veineux",
            "Parce qu'elle contient des vitamines accélérant la croissance du nouveau-né",
            "Parce qu'elle s'élimine instantanément par la transpiration",
            "Parce qu'elle transforme le lait maternel en sérum thérapeutique"
          ],
          correctAnswerIndex: 0,
          explanation: "Les œstrogènes peuvent inhiber la lactation et augmentent le risque de thrombose veineuse. Les pilules microprogestatives sont dépourvues d'œstrogènes et conviennent donc aux mères allaitantes et aux femmes à risque vasculaire."
        }
      ]
    }
  ]
};

