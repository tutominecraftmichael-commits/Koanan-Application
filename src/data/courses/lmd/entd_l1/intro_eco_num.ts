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

export const INTRO_ECO_NUM_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : FONDEMENTS DE L'ÉCONOMIE ET INTRODUCTION À L'ÉCONOMIE NUMÉRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch1',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: "Chapitre 1 : Fondements de l'économie et naissance de l'économie numérique",
    summary:
      "Comprendre l'évolution de la définition de la science économique, le fonctionnement du circuit économique traditionnel et les bases conceptuelles du numérique et de l'économie numérique.",
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ESATIC — UP Management — Intro à l’Éco Numérique (CHAPITRE 1.pptx)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch1_p1',
        order: 1,
        title: "Définitions de l'économie et acteurs du circuit économique",
        summary:
          "De l'économie politique à Lionel Robbins et Edmond Malinvaud, puis les 6 secteurs institutionnels, les 3 marchés et les grands systèmes économiques.",
        conceptExplanation:
          "La définition de l'économie a évolué au fil des siècles : morale des échanges (XVe-XVIe s.), économie politique centrée sur la puissance de l'État (XVIe s.), science globale de la production et de la monnaie chez les mercantilistes et classiques (XVIIe-XIXe s.), puis science des choix individuels avec l'approche marginaliste (XXe s.).\n\nDeux formulations modernes font consensus : Lionel Robbins (1932) définit l'économie comme la science étudiant le comportement humain face à l'usage alternatif de ressources rares afin d'atteindre des fins ordonnées ; Edmond Malinvaud souligne l'emploi de ressources rares à usages alternatifs pour satisfaire les besoins humains. Elle étudie la production, la distribution (répartition) et la consommation, ainsi que les institutions qui les facilitent.\n\nDans la comptabilité nationale, les agents économiques (centres indépendants de décision économique) sont regroupés en 6 secteurs institutionnels : Ménages (consommation), Sociétés non financières (biens/services marchands non financiers), Sociétés financières (services financiers marchands), Administrations publiques — APu (services non marchands financés par prélèvements obligatoires), ISBL (services non marchands financés par dons, cotisations volontaires et subventions) et Reste du Monde — RDM (non-résidents). Ils interagissent sur 3 marchés (biens et services, travail, capitaux) selon trois systèmes possibles : libéralisme, communisme (planification centrale) ou économie mixte.",
        keyRule:
          "Retiens les deux piliers : rareté des ressources (Robbins/Malinvaud) et les 6 secteurs institutionnels (Ménages, SNF, SF, APu, ISBL, RDM) reliés sur 3 marchés.",
        formulas: [
          {
            name: 'Définition de Robbins (1932)',
            formula: 'Économie = Arbitrage sur des ressources rares à usages alternatifs pour des fins ordonnées',
            note: 'Reprise et popularisée en français par Edmond Malinvaud (1923-2015).',
          },
          {
            name: 'Critère de résidence (RDM)',
            formula: 'Résident = Exercice d’une activité économique sur le territoire national ≥ 1 an',
            note: 'Les agents non-résidents en relation avec le pays forment le Reste du Monde (RDM).',
          },
        ],
        workedExample: {
          title: 'Classer des acteurs ivoiriens par secteur institutionnel',
          statement:
            "Classez les acteurs suivants dans les 6 secteurs institutionnels de la comptabilité nationale : un foyer d'Abidjan, la CIE, une banque commerciale, l'ESATIC (établissement public), une ONG locale et un fournisseur étranger basé en France.",
          methodSteps: [
            "Foyer d'Abidjan : fonction principale de consommation -> Ménages.",
            'CIE : production de biens/services marchands non financiers -> Sociétés non financières (SNF).',
            'Banque commerciale : services de crédit, dépôt et paiement -> Sociétés financières (SF).',
            'ESATIC : service public non marchand financé par prélèvements obligatoires -> Administrations publiques (APu).',
            'ONG locale : service non marchand financé par dons et cotisations volontaires -> ISBL.',
            'Fournisseur basé en France : agent non-résident -> Reste du Monde (RDM).',
          ],
          conclusion:
            'Chaque acteur appartient à un secteur institutionnel défini par sa fonction économique principale et son mode de financement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Science économique',
            stepTitle: "Évolution et définition moderne de l'économie",
            paragraphText:
              "Des classiques (qui raisonnaient de manière globale sur la richesse, la production et les échanges) aux marginalistes du XXe siècle (science des choix individuels), la définition contemporaine s'est stabilisée avec Lionel Robbins (1932) et Edmond Malinvaud : l'économie étudie comment les humains allouent des ressources rares à usages alternatifs pour satisfaire leurs besoins.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q1',
              type: 'mcq',
              prompt:
                "Selon la définition moderne de Lionel Robbins (1932) reprise par Edmond Malinvaud, quel est l'objet central de la science économique ?",
              options: [
                "Uniquement la moralisation de l'usage de la monnaie",
                "L'étude de l'utilisation de ressources rares à usages alternatifs pour atteindre des fins ordonnées",
                "La maximisation des recettes fiscales de l'État",
                "La suppression de la propriété privée des moyens de production",
              ],
              correctAnswerIndex: 1,
              explanation:
                'Robbins (1932) et Malinvaud fondent la définition moderne sur la rareté des ressources à usages alternatifs face aux besoins humains.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Acteurs',
            stepTheme: 'Secteurs institutionnels',
            stepTitle: 'Les six secteurs institutionnels',
            paragraphText:
              "Un agent économique (ou unité institutionnelle) est un centre indépendant de décision économique. La comptabilité nationale distingue 6 secteurs : Ménages, Sociétés non financières (SNF), Sociétés financières (SF), Administrations publiques (APu), ISBL (ONG, syndicats, églises, partis politiques) et Reste du Monde (RDM).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'À quel secteur institutionnel appartiennent les ONG, les syndicats et les associations religieuses financés par des dons et cotisations volontaires ?',
              options: [
                'Les Sociétés non financières (SNF)',
                'Les Administrations publiques (APu)',
                'Les Institutions sans but lucratif au service des ménages (ISBL)',
                'Le Reste du Monde (RDM)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les ISBL (anciennement administrations privées) produisent des services non marchands financés par des dons, des cotisations volontaires et des subventions.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Marchés',
            stepTheme: 'Circuit économique',
            stepTitle: 'Fonctions économiques et trois grands marchés',
            paragraphText:
              "L'économie s'intéresse à trois opérations fondamentales — production, distribution (répartition) et consommation — qui s'articulent dans le circuit économique à travers trois grands marchés : le marché des biens et services, le marché du travail et le marché des capitaux.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quels sont les trois grands marchés qui structurent le circuit économique traditionnel ?',
              options: [
                'Marché des biens et services, marché du travail et marché des capitaux',
                'Marché agricole, marché industriel et marché artisanal',
                'Marché public, marché privé et marché informel',
                'Marché local, marché régional et marché numérique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le cours synthétise le fonctionnement du circuit économique autour du marché des biens et services, du marché du travail et du marché des capitaux.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'APu vs ISBL et RDM',
            stepTitle: 'Distinguer APu, ISBL et critère de résidence',
            paragraphText:
              "Attention à ne pas confondre APu et ISBL : les deux produisent des services non marchands, mais les APu sont financées par des prélèvements obligatoires (impôts, taxes, cotisations sociales) alors que les ISBL reposent sur des dons et cotisations volontaires. Par ailleurs, le RDM désigne les non-résidents : est résident tout agent exerçant une activité économique sur le territoire national pendant au moins un an.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q4',
              type: 'mcq',
              prompt:
                "Quelle durée minimale d'activité économique sur le territoire national définit un agent résident en comptabilité nationale ?",
              options: ['Un mois', 'Trois mois', 'Six mois', 'Au moins un an'],
              correctAnswerIndex: 3,
              explanation:
                'Le critère de résidence économique est une présence ou activité économique sur le territoire national d’au moins un an, quelle que soit la nationalité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Systèmes',
            stepTheme: 'Organisation économique',
            stepTitle: 'Libéralisme, communisme et économie mixte',
            paragraphText:
              "Le fonctionnement de l'économie peut être organisé selon trois grands systèmes : le libéralisme économique (capitalisme, démocratie), le communisme (planification centrale, socialisme) et l'économie mixte, tendance moderne qui combine mécanismes de marché et intervention de l'État.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quel système économique correspond à la tendance moderne combinant initiatives privées de marché et intervention publique ?',
              options: [
                'Le mercantilisme intégral',
                "L'économie mixte",
                'La planification centrale exclusive',
                'Le troc communautaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'économie mixte est la cohabitation moderne entre les mécanismes du marché (secteur privé) et la régulation/intervention de l'État.",
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch1_p2',
        order: 2,
        title: "Disciplines de l'économie, numérique et économie numérique",
        summary:
          "Situer l'économie numérique parmi les branches économiques et distinguer le numérique (la brique binaire) de l'économie numérique (l'édifice de création de valeur).",
        conceptExplanation:
          "La science économique se décline en plusieurs grandes disciplines : la microéconomie (comportements individuels, demande, prix, théorie des jeux), la macroéconomie (phénomènes globaux : croissance, inflation, chômage, politiques monétaires et budgétaires), l'économie internationale (commerce mondial, taux de change, balance des paiements), l'économie publique (fiscalité, dépenses publiques, redistribution), ainsi que des branches spécialisées (mésoéconomie, économie du développement, industrielle, comportementale et économie numérique).\n\nLe numérique désigne tout ce qui est représenté par des données et informations codées sous forme binaire (0 et 1) : c'est la base de toute technologie informatique.\n\nL'économie numérique (aussi appelée économie digitale, nouvelle économie, économie d'internet ou économie de la connaissance) désigne l'ensemble des activités économiques qui reposent sur les technologies numériques pour créer de la valeur économique. Elle analyse les transformations induites par ces technologies sur les échanges, les entreprises et les marchés, grâce à l'écosystème Internet/appareils/Web, aux technologies émergentes (IA, Blockchain) et à l'IoT / analytique des Big Data.",
        keyRule:
          "Retiens la métaphore du cours : le numérique est la brique élémentaire (l'outil binaire), tandis que l'économie numérique est l'édifice (la création de valeur construite avec ces briques).",
        formulas: [
          {
            name: 'Distinction fondamentale',
            formula: 'Numérique = Codage binaire (0 et 1)  |  Économie numérique = Création de valeur par les TIC',
            note: 'S’applique à tous les secteurs : éducation, commerce, santé, agriculture, sécurité, gestion, politique.',
          },
        ],
        workedExample: {
          title: 'Distinguer brique numérique et économie numérique dans le secteur agricole',
          statement:
            "Une coopérative cacaoyère ivoirienne utilise des capteurs IoT et une application mobile de paiement pour vendre ses fèves en ligne. Identifiez ce qui relève du « numérique » et ce qui relève de « l'économie numérique ».",
          methodSteps: [
            "Les données météo/humidité codées en binaire (0 et 1) par les capteurs et transmises par les circuits informatiques constituent la brique « numérique ».",
            "La plateforme de commercialisation en ligne, la réduction des intermédiaires, le paiement mobile et l'augmentation des marges des producteurs constituent « l'économie numérique ».",
            "L'interaction combine ainsi un secteur traditionnel (agriculture) et un écosystème numérique (mobile, Internet, IoT, Big Data).",
          ],
          conclusion:
            "L'économie numérique ne se limite pas aux entreprises purement informatiques : elle transforme les secteurs traditionnels en créant de nouveaux modes de production et d'échange.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Disciplines',
            stepTheme: "Branches de l'économie",
            stepTitle: 'Microéconomie, macroéconomie et autres branches',
            paragraphText:
              "La microéconomie analyse les comportements individuels (demande, fixation des prix, théorie des jeux). La macroéconomie étudie les phénomènes globaux (croissance, inflation, chômage, politiques monétaires et budgétaires). L'économie internationale traite du commerce mondial et des taux de change, tandis que l'économie publique examine le rôle de l'État (fiscalité, redistribution).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q1',
              type: 'mcq',
              prompt:
                "Quelle discipline économique étudie plus spécifiquement la balance des paiements, les accords commerciaux et les taux de change ?",
              options: [
                'La microéconomie',
                "L'économie publique",
                "L'économie internationale",
                "L'économie comportementale",
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'économie internationale analyse les échanges entre pays : commerce international, flux de capitaux, taux de change et balance des paiements.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Concept clé',
            stepTheme: 'Le numérique',
            stepTitle: 'Définition du numérique comme base binaire',
            paragraphText:
              "Au sens fondamental, le numérique recouvre tout ce qui est représenté par des données et informations codées sous forme binaire (0 et 1). C'est le socle technique sur lequel reposent tous les ordinateurs, smartphones, logiciels et réseaux de communication.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Comment le cours définit-il « le numérique » en tant que base technologique ?',
              options: [
                'Tout ce qui est représenté par des données codées sous forme binaire (0 et 1)',
                'Uniquement les réseaux sociaux et sites de e-commerce',
                'Les lois fiscales appliquées aux entreprises de télécommunication',
                "L'ensemble des usines fabriquant des câbles électriques",
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le numérique est fondé sur la représentation binaire (0 et 1) des données et informations, base de toute technologie informatique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Application',
            stepTheme: 'Économie numérique',
            stepTitle: "De l'outil numérique à la création de valeur",
            paragraphText:
              "L'économie numérique (ou économie digitale, nouvelle économie, économie de la connaissance) désigne l'ensemble des activités économiques qui s'appuient sur les technologies numériques pour créer de la valeur. Elle étudie les transformations des échanges, des entreprises et des marchés.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q3',
              type: 'mcq',
              prompt:
                "Selon la synthèse du cours, quelle est l'image juste reliant « le numérique » et « l'économie du numérique » ?",
              options: [
                'Les deux termes sont strictement synonymes sans aucune nuance',
                "L'économie numérique est le code binaire et le numérique est le commerce",
                'Le numérique remplace totalement la production agricole et industrielle',
                "Le numérique est la brique élémentaire (l'outil) et l'économie du numérique est l'édifice bâti avec ces briques",
              ],
              correctAnswerIndex: 3,
              explanation:
                "Le cours résume la distinction par cette métaphore : le numérique est la brique élémentaire, l'économie du numérique est la construction qui crée de la valeur.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Écosystème',
            stepTheme: 'Moteurs technologiques',
            stepTitle: 'Les trois piliers de la transformation numérique',
            paragraphText:
              "La transformation numérique de l'économie repose sur trois grands leviers : (1) un écosystème numérique associant Internet, appareils connectés et Web ; (2) des technologies émergentes comme l'Intelligence Artificielle (IA) et la Blockchain ; (3) le développement de l'Internet des Objets (IoT) et de l'analytique des Big Data.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q4',
              type: 'mcq',
              prompt:
                "Lequel de ces couples appartient aux technologies émergentes citées comme catalyseurs de l'économie numérique ?",
              options: [
                'Machine à vapeur et métier à tisser',
                'Intelligence artificielle (IA) et Blockchain',
                'Télégraphe optique et charbon',
                'Comptabilité manuscrite et chèque papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'écosystème Internet/Web/appareils est amplifié par l'IA, la Blockchain, l'IoT et l'analytique des Big Data.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Transversalité',
            stepTitle: 'Ne pas réduire l’économie numérique au seul e-commerce',
            paragraphText:
              "Une erreur fréquente est de croire que l'économie numérique ne concerne que la vente en ligne. En réalité, elle transforme transversalement l'éducation, le commerce, la santé, l'agriculture, la sécurité, la gestion d'entreprise et même la vie politique.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q5',
              type: 'mcq',
              prompt:
                "Parmi les affirmations suivantes sur le champ d'application de l'économie numérique, laquelle est exacte ?",
              options: [
                'Elle se limite exclusivement aux fabricants de smartphones',
                "Elle ne concerne ni la santé ni l'agriculture",
                "Elle s'applique transversalement à l'éducation, la santé, l'agriculture, le commerce, la sécurité et la gestion",
                "Elle n'existe que dans les pays membres de l'OCDE",
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'économie numérique irrigue tous les secteurs traditionnels (santé, agriculture, éducation, commerce, gestion, politique).",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : ÉVOLUTION, CARACTÉRISTIQUES ET LOIS DE L'ÉCONOMIE NUMÉRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch2',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: "Chapitre 2 : Évolution, poids mondial et grandes lois de l'économie numérique",
    summary:
      "Retracer les quatre révolutions industrielles jusqu'à l'Industrie 4.0, mesurer le poids des TIC et maîtriser les lois de Moore, Metcalfe et Reed ainsi que la désintermédiation.",
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ESATIC — UP Management — Intro à l’Éco Numérique (CHAPITRE 2.pptx)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch2_p1',
        order: 1,
        title: "Des révolutions industrielles à l'Industrie 4.0 et périmètre des TIC",
        summary:
          "Les 4 révolutions industrielles, les 3 pôles du secteur des TIC (production, distribution, services) et les chiffres clés mondiaux (CNUCED).",
        conceptExplanation:
          "L'histoire économique est scandée par quatre révolutions industrielles :\n1. Première RI (XVIIIe-XIXe s.) : machine à vapeur, chemin de fer, mécanisation, consécration du capitalisme.\n2. Deuxième RI (XIXe-XXe s.) : électricité (ampoule, moteur électrique), organisation scientifique du travail, production de masse, suivie de la crise de 1929, des Trente Glorieuses (1945-1975) et des chocs pétroliers (1973, 1979).\n3. Troisième RI — ère des NTIC / révolution Internet : téléphone (Bell, 1876), radio (Marconi, 1898), tube à vide (De Forest, 1906), premier ordinateur (1946), transistor (1947), microprocesseur (1970), ordinateur personnel et Internet.\n4. Quatrième RI — Industrie 4.0 : automatisation avancée, 5G, cloud computing, IoT, Big Data, IA, réalité augmentée et contrôle intégré de toute la chaîne de valeur.\n\nL'économie numérique s'organise autour de trois grands pôles TIC — production (composants, ordinateurs, équipements télécoms), distribution (commerce de gros informatique/électronique) et services (édition de logiciels, télécommunications, programmation, conseil, hébergement/traitement de données) — auxquels s'ajoutent les activités de contenus et supports (édition, cinéma, musique, médias). Selon la CNUCED (2019), le seul secteur des TIC représente 4,5 % du PIB mondial, et l'ensemble incluant les secteurs transformés atteint 15,5 % du PIB mondial ; les services numériques représentent 50 % des exportations mondiales de services et le e-commerce mondial environ 26 700 milliards USD.",
        keyRule:
          "Associe chaque révolution industrielle à son moteur : 1re = vapeur ; 2e = électricité/production de masse ; 3e = informatique/Internet ; 4e (Industrie 4.0) = IoT, IA, 5G, Cloud, Big Data.",
        formulas: [
          {
            name: 'Poids mondial du numérique (CNUCED, 2019)',
            formula: 'Secteur TIC seul = 4,5 % du PIB mondial  |  Économie numérique élargie = 15,5 % du PIB mondial',
            note: '50 % des exportations mondiales de services sont numériques ; e-commerce mondial ≈ 26 700 Mds USD.',
          },
        ],
        workedExample: {
          title: 'Ventiler des activités numériques selon les pôles TIC et contenus',
          statement:
            "Classez les entreprises suivantes dans les catégories du cours (Production TIC, Distribution TIC, Services TIC, Contenus et supports) : un assembleur de cartes électroniques, un grossiste en serveurs, un opérateur télécom / hébergeur cloud et un studio de production vidéo diffusant sur le Web.",
          methodSteps: [
            'Assembleur de cartes électroniques : fabrication matérielle -> Production des TIC.',
            'Grossiste en serveurs (B2B) : commerce de gros informatique -> Distribution des TIC.',
            'Opérateur télécom / hébergeur cloud : télécommunications et traitement de données -> Services liés aux TIC.',
            'Studio vidéo diffusant en ligne : création/diffusion de messages destinés à des humains -> Contenus et supports des TIC.',
          ],
          conclusion:
            "Le périmètre de l'économie numérique dépasse la seule fabrication matérielle pour englober la distribution, les services logiciels/cloud et l'industrie des contenus.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Histoire',
            stepTheme: 'Révolutions industrielles',
            stepTitle: 'Les quatre révolutions industrielles',
            paragraphText:
              "La 1re révolution industrielle repose sur la machine à vapeur et le chemin de fer ; la 2e sur l'électricité et la production de masse ; la 3e sur l'informatique, le transistor (1947), le microprocesseur (1970) et Internet ; la 4e (Industrie 4.0) combine 5G, cloud computing, IoT, Big Data et IA.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q1',
              type: 'mcq',
              prompt:
                "Quelles technologies caractérisent spécifiquement la 4e révolution industrielle (Industrie 4.0) ?",
              options: [
                'La machine à vapeur et le métier à tisser mécanique',
                "L'ampoule électrique et la chaîne de montage fordiste",
                "L'automatisation avancée, la 5G, le cloud computing, l'IoT et le Big Data",
                'Le troc et le commerce triangulaire',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'Industrie 4.0 prolonge la 3e révolution industrielle grâce à la 5G, au cloud computing, à l'IoT, au Big Data, à l'IA et à l'automatisation intégrée.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Repères',
            stepTheme: 'Jalons des NTIC',
            stepTitle: 'Inventions clés de la 3e révolution industrielle',
            paragraphText:
              "La 3e révolution industrielle s'appuie sur une série d'inventions fondatrices : le téléphone (Bell, 1876), la radio (Marconi, 1898), le tube à vide (De Forest, 1906), le premier ordinateur (1946), le transistor (1947) et le microprocesseur (1970), débouchant sur l'usage massif des ordinateurs et d'Internet.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'En quelle année le microprocesseur, composant central de la révolution micro-informatique, a-t-il été inventé selon le cours ?',
              options: ['1876', '1929', '1947', '1970'],
              correctAnswerIndex: 3,
              explanation:
                'Le cours rappelle les dates repères : premier ordinateur (1946), transistor (1947) et microprocesseur (1970).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Périmètre',
            stepTheme: 'Filière TIC',
            stepTitle: 'Production, distribution, services et contenus TIC',
            paragraphText:
              "Le secteur des TIC s'articule autour de la production (composants électroniques, ordinateurs, équipements télécoms), de la distribution (commerce de gros interentreprises), des services liés aux TIC (édition de logiciels, télécoms, programmation, hébergement, réparation) et des activités de contenus et supports (édition, cinéma, musique, médias).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q3',
              type: 'mcq',
              prompt:
                "L'édition de logiciels, l'hébergement de données et les services de télécommunications relèvent de quel pôle de l'économie numérique ?",
              options: [
                'Les services liés aux TIC',
                'La production matérielle de TIC',
                'La distribution de gros des TIC',
                'Le secteur agricole primaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                "L'édition logicielle, la programmation, les télécommunications, le conseil et l'hébergement appartiennent aux services liés aux TIC.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Chiffres clés',
            stepTheme: 'Poids mondial',
            stepTitle: 'Contribution du numérique au PIB et au commerce (CNUCED)',
            paragraphText:
              "Selon les données CNUCED (2019) présentées en cours : le seul secteur des TIC contribue à 4,5 % du PIB mondial, et jusqu'à 15,5 % en incluant les secteurs transformés par le numérique. Les services numériques représentent 50 % des exportations mondiales de services, et le e-commerce mondial avoisine 26 700 milliards USD (les ventes au détail en ligne passant de 16 % à 19 % pendant le COVID-19).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Selon le rapport CNUCED (2019) cité en cours, quelle part du PIB mondial représentent ensemble le secteur des TIC et les secteurs transformés par le numérique ?',
              options: ['4,5 %', '15,5 %', '35 %', '50 %'],
              correctAnswerIndex: 1,
              explanation:
                'Le secteur TIC seul vaut 4,5 % du PIB mondial, tandis que le secteur TIC + secteurs transformationnels atteint 15,5 % du PIB mondial.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Distinction de périmètre',
            stepTitle: 'Ne pas confondre part des TIC dans le PIB et part dans les exportations de services',
            paragraphText:
              "Attention aux ordres de grandeur en examen : 4,5 % = secteur TIC seul dans le PIB mondial ; 15,5 % = économie numérique élargie dans le PIB mondial ; 50 % = part des services numériques dans les exportations mondiales de services (et non 50 % du PIB !).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Que représente le chiffre de 50 % dans les tendances mondiales CNUCED (2019) du cours ?',
              options: [
                'La part du secteur TIC dans le PIB de la Côte d’Ivoire',
                'La part des ventes B2C dans le PIB mondial',
                'La part des services numériques dans les exportations mondiales de services',
                'La part de la population mondiale travaillant dans la programmation',
              ],
              correctAnswerIndex: 2,
              explanation:
                '50 % correspond exactement à la part des exportations de services numériques dans le total des exportations mondiales de services.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch2_p2',
        order: 2,
        title: "Les trois grandes lois de l'économie numérique (Moore, Metcalfe, Reed)",
        summary:
          "Maîtriser la loi de Moore (puissance matérielle), la loi de Metcalfe (valeur d'un réseau en n²) et la loi de Reed (valeur des sous-groupes et communautés en 2^n).",
        conceptExplanation:
          "L'économie numérique obéit à trois lois structurantes qui expliquent sa croissance exponentielle et la concentration des marchés :\n\n1. Loi de Moore (Gordon Moore, 1965) : le nombre de transistors sur une puce semi-conductrice double environ tous les 2 ans. Ses lois connexes montrent que la puissance de calcul progresse exponentiellement tandis que les coûts unitaires et la consommation par opération s'effondrent (sinon coût et consommation exploseraient de façon intenable).\n\n2. Loi de Metcalfe (Robert Metcalfe, 1980) : la valeur (ou utilité) d'un réseau de communication croît proportionnellement au carré du nombre de ses utilisateurs (V ∝ n², ou plus précisément n(n-1)/2 connexions possibles). Conséquences économiques majeures : course à la taille, avantage décisif au premier entrant (pionnier) et forte concentration des marchés.\n\n3. Loi de Reed (David Reed, 1988) : Metcalfe sous-estime la valeur des réseaux capables de former des groupes et communautés. Un membre n'est pas seulement relié à d'autres individus un à un, mais à une multitude de sous-ensembles significatifs (groupes WhatsApp, forums, communautés d'intérêt). La valeur d'un réseau collaboratif croît alors encore plus vite, proportionnellement à 2^n.",
        keyRule:
          "Trois lois, trois croissances : Moore = doublement des transistors tous les 2 ans (coûts unitaires en baisse) ; Metcalfe = valeur en n² (effets de réseau) ; Reed = valeur en 2^n (communautés/sous-groupes).",
        formulas: [
          {
            name: 'Loi de Moore (1965)',
            formula: 'N_transistors(t + 2 ans) ≈ 2 × N_transistors(t)',
            note: 'Progression exponentielle de la puissance de calcul et chute des coûts unitaires.',
          },
          {
            name: 'Loi de Metcalfe (1980)',
            formula: 'V_Metcalfe ∝ n²  (connexions possibles = n(n - 1) / 2)',
            note: 'Engendre course à la taille, avantage du pionnier et concentration.',
          },
          {
            name: 'Loi de Reed (1988)',
            formula: 'V_Reed ∝ 2^n',
            note: 'Prend en compte la création de sous-ensembles et communautés au sein du réseau.',
          },
        ],
        workedExample: {
          title: 'Comparer la valeur potentielle selon Metcalfe et Reed',
          statement:
            "Une messagerie étudiante passe de n = 4 utilisateurs à n = 10 utilisateurs. Comparez le nombre de connexions bilatérales n(n-1)/2 (logique de Metcalfe) et le nombre total de sous-groupes non vides de taille ≥ 2 (2^n - n - 1, logique de Reed).",
          methodSteps: [
            'Pour n = 4 : connexions bilatérales = 4 × 3 / 2 = 6 ; sous-groupes (≥ 2 membres) = 2⁴ - 4 - 1 = 11.',
            'Pour n = 10 : connexions bilatérales = 10 × 9 / 2 = 45 (multiplié par 7,5 alors que n n’a été multiplié que par 2,5).',
            'Pour n = 10 (Reed) : sous-groupes (≥ 2 membres) = 2¹⁰ - 10 - 1 = 1 024 - 11 = 1 013 (multiplié par plus de 92 !).',
          ],
          conclusion:
            "Alors que la taille du réseau est multipliée par 2,5, sa valeur d'usage explose en n² (Metcalfe) et encore plus spectaculairement en 2^n (Reed) dès que des groupes collaboratifs peuvent se former.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Loi de Moore',
            stepTheme: 'Puissance matérielle',
            stepTitle: 'Énoncé et conséquences de la loi de Moore (1965)',
            paragraphText:
              "Formulé par Gordon Moore en 1965, ce principe observe que le nombre de transistors dans un semi-conducteur double environ tous les deux ans. Combiné aux lois connexes, il entraîne une progression exponentielle de la puissance de calcul et un effondrement des coûts unitaires.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Que prédit la loi de Moore (1965) et ses lois connexes ?',
              options: [
                'Le doublement du prix des ordinateurs tous les deux ans',
                'Le doublement du nombre de transistors dans un semi-conducteur tous les 2 ans, avec chute des coûts unitaires',
                "La disparition complète de l'électricité dans les centres de données",
                'La croissance linéaire de la valeur des réseaux sociaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loi de Moore prédit le doublement de la densité des transistors tous les 2 ans, entraînant une explosion de la puissance de calcul et une baisse des coûts unitaires.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Loi de Metcalfe',
            stepTheme: 'Effets de réseau',
            stepTitle: "La valeur d'un réseau proportionnelle au carré de ses membres",
            paragraphText:
              "Selon Robert Metcalfe (1980), l'utilité ou la valeur d'un réseau croît proportionnellement au carré du nombre de ses utilisateurs (n²). Plus un réseau est grand, plus chaque nouvel arrivant le rend utile pour tous les autres.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q2',
              type: 'mcq',
              prompt:
                "Si un réseau passe de 100 à 300 utilisateurs, par combien sa valeur théorique est-elle approximativement multipliée selon la loi de Metcalfe ?",
              options: ['Par 3', 'Par 6', 'Par 9', 'Par 30'],
              correctAnswerIndex: 2,
              explanation:
                'La valeur étant proportionnelle à n², tripler le nombre d’utilisateurs (× 3) multiplie la valeur théorique par 3² = 9.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Conséquences',
            stepTheme: 'Structure de marché',
            stepTitle: 'Les implications économiques de la loi de Metcalfe',
            paragraphText:
              "La loi de Metcalfe explique trois traits typiques des marchés numériques : (1) une course à la taille critique ; (2) un avantage décisif accordé au premier entrant (pionnier) ; (3) une forte concentration des marchés (tendance oligopolistique ou monopolistique).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q3',
              type: 'mcq',
              prompt:
                "Laquelle de ces conséquences économiques découle directement de la loi de Metcalfe sur les marchés de plateformes ?",
              options: [
                'Course à la taille, avantage du premier entrant et concentration des marchés',
                'Fragmentation infinie en millions de micro-réseaux isolés',
                "Baisse de l'utilité d'une messagerie lorsque de nouveaux amis la rejoignent",
                'Impossibilité pour un pionnier de conserver ses utilisateurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les effets de réseau en n² poussent les plateformes à grossir vite, favorisent le premier entrant et conduisent à la concentration.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Loi de Reed',
            stepTheme: 'Communautés',
            stepTitle: 'L’apport de David Reed (1988) : la puissance des sous-groupes',
            paragraphText:
              "David Reed estime que Metcalfe sous-estime la valeur des réseaux en ne comptant que les connexions individuelles. Dans un réseau social ou collaboratif, les utilisateurs forment de nombreux sous-groupes et communautés significatifs, ce qui décuple exponentiellement la valeur du réseau (en 2^n).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q4',
              type: 'mcq',
              prompt:
                "En quoi la loi de Reed (1988) dépasse-t-elle la loi de Metcalfe dans l'évaluation d'un réseau ?",
              options: [
                'Elle affirme que la valeur dépend uniquement du nombre de transistors',
                'Elle stipule que la valeur diminue dès que des groupes se forment',
                "Elle ne s'applique qu'aux téléphones fixes sans Internet",
                'Elle intègre la valeur décuplée par les collaborations, communautés et sous-ensembles créés au sein du réseau',
              ],
              correctAnswerIndex: 3,
              explanation:
                'David Reed montre que la formation de sous-groupes et communautés (2^n combinaisons) multiplie encore plus vite la valeur que les seules paires d’utilisateurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Synthèse des lois',
            stepTitle: 'Associer correctement auteur, année et objet',
            paragraphText:
              "Ne mélange pas les trois lois en contrôle : Gordon Moore (1965) porte sur le matériel (transistors/puissance de calcul) ; Robert Metcalfe (1980) porte sur les connexions du réseau (n²) ; David Reed (1988) porte sur les communautés/sous-groupes du réseau (2^n).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle association « auteur — objet de la loi » est totalement exacte ?',
              options: [
                'Metcalfe — nombre de transistors sur une puce',
                'Moore — puissance matérielle des semi-conducteurs ; Metcalfe — utilité du réseau en n² ; Reed — valeur des communautés',
                'Reed — effondrement du coût des semi-conducteurs',
                'Moore — valeur des sous-groupes collaboratifs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Moore concerne les semi-conducteurs, Metcalfe la taille du réseau (n²) et Reed les communautés/sous-ensembles (2^n).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch2_p3',
        order: 3,
        title: 'Impact sur les entreprises, modèles bifaces et désintermédiation',
        summary:
          "Comprendre comment les TIC transforment la gestion des entreprises, créent les échanges B2C/C2C/G2C, structurent les marchés bifaces et opèrent la désintermédiation.",
        conceptExplanation:
          "L'économie numérique impacte l'entreprise sur deux plans : la modification de sa structure productive et la transformation de ses modèles d'affaires.\n\n1. Usages stratégiques des TIC : les outils numériques irriguent toutes les fonctions de gestion (finances, facturation, commerce, ressources humaines, production-fabrication, logistique, gestion client CRM, marketing).\n\n2. Économie des plateformes : elle repose sur quatre principes clés — un marché à effets de réseau, l'avantage du pionnier, un effet d'entraînement rapide et un marché concentré — et multiplie les formes d'échanges : B2C (entreprises vers consommateurs), C2C (consommateurs entre eux), G2C (gouvernement vers citoyens/consommateurs), sans oublier le B2B.\n\n3. Marchés bifaces (ou multifaces) : une plateforme réunit au minimum deux cibles distinctes et interdépendantes (ex. utilisateurs gratuits d'un côté, annonceurs payants de l'autre ; ou passagers et chauffeurs) en appliquant deux logiques de tarification différentes afin de maximiser les effets de réseau croisés.\n\n4. Désintermédiation : les plateformes numériques suppriment ou contournent des intermédiaires traditionnels (agences de voyages, distributeurs physiques, courtiers) pour connecter plus directement producteurs et consommateurs, tout en créant parfois de nouveaux intermédiaires numériques (réintermédiation).",
        keyRule:
          "Un marché biface combine toujours deux cibles interdépendantes + deux logiques de tarification différentes (souvent une face subventionnée/gratuite pour attirer l'autre face payante).",
        formulas: [
          {
            name: '4 principes d’une plateforme numérique',
            formula: 'Effets de réseau + Avantage du pionnier + Effet d’entraînement rapide + Concentration',
            note: 'Expliquent pourquoi peu de plateformes dominent chaque segment (ex. recherche, VTC, streaming).',
          },
        ],
        workedExample: {
          title: 'Analyser un média en ligne gratuit comme marché biface',
          statement:
            "Un portail d'actualités numériques ivoirien offre ses articles gratuitement aux lecteurs et vend des bannières publicitaires aux entreprises locales. Identifiez les deux faces, leur interdépendance et les logiques de tarification.",
          methodSteps: [
            'Face 1 : les lecteurs (utilisateurs), attirés par un accès gratuit (prix = 0 FCFA).',
            'Face 2 : les annonceurs (entreprises), qui paient pour diffuser leurs publicités ciblées.',
            'Interdépendance : plus il y a de lecteurs sur la face 1, plus la plateforme a de la valeur pour les annonceurs de la face 2 (effet de réseau croisé).',
            'Tarification différenciée : la face lecteurs est subventionnée par la face annonceurs.',
          ],
          conclusion:
            "La gratuité pour l'utilisateur n'est pas une absence de modèle économique : c'est une stratégie tarifaire biface financée par l'autre versant du marché.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Entreprise',
            stepTheme: 'Transformation interne',
            stepTitle: 'Les deux grands effets du numérique sur les entreprises',
            paragraphText:
              "Au niveau microéconomique de l'entreprise, les TIC agissent comme un levier de transformation qui produit deux effets majeurs : la modification de la structure productive (finances, RH, logistique, CRM, marketing, facturation) et la transformation des modèles d'affaires.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q1',
              type: 'mcq',
              prompt:
                "Par quels deux changements majeurs se traduit l'impact de l'économie numérique sur l'entreprise ?",
              options: [
                'La hausse des stocks physiques et la fin du marketing',
                'La modification de la structure productive et la transformation des modèles d’affaires',
                'La suppression des services financiers et des ressources humaines',
                "L'abandon de toute relation avec les clients",
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les TIC réorganisent l’ensemble des fonctions productives/de gestion et renouvellent profondément les modèles d’affaires.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Typologie',
            stepTheme: 'Échanges numériques',
            stepTitle: 'Distinguer B2C, C2C et G2C',
            paragraphText:
              "Les modèles numériques déploient divers types d'échanges : le B2C (Business to Consumer : entreprises vers consommateurs), le C2C (Consumer to Consumer : échanges directs entre particuliers, ex. revente d'objets ou covoiturage) et le G2C (Government to Citizen/Consumer : services publics numériques entre autorités gouvernementales et citoyens).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Une plateforme permettant aux citoyens de demander en ligne leur extrait de naissance auprès de la mairie relève de quel type d’échange ?',
              options: ['C2C', 'B2B', 'G2C', 'B2C'],
              correctAnswerIndex: 2,
              explanation:
                'G2C (Government to Citizen/Consumer) désigne les échanges et services numériques entre les autorités gouvernementales et les citoyens/consommateurs.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Marché biface',
            stepTheme: 'Plateformes',
            stepTitle: 'Les caractéristiques clés des modèles bifaces',
            paragraphText:
              "Un modèle biface repose sur deux côtés (faces) du marché réunissant au minimum deux cibles différentes et interdépendantes, avec deux logiques de tarification distinctes. Par exemple, un moteur de recherche est gratuit pour les internautes mais facturé aux annonceurs.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle caractéristique définit le mieux un marché biface dans l’économie numérique ?',
              options: [
                'Deux cibles au moins, différentes et interdépendantes, avec deux logiques de tarification distinctes',
                'Un unique tarif fixe identique pour tous les acteurs du marché',
                'Uniquement des ventes de biens physiques en magasin',
                "L'absence totale de dépendance entre les groupes d'utilisateurs",
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les marchés bifaces connectent deux groupes interdépendants via une structure de prix asymétrique (deux logiques de tarification).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Désintermédiation',
            stepTheme: 'Chaîne de distribution',
            stepTitle: 'Comprendre la désintermédiation numérique',
            paragraphText:
              "La désintermédiation consiste à supprimer un ou plusieurs intermédiaires traditionnels dans la chaîne de distribution afin de rapprocher directement l'offreur du demandeur (ex. réserver directement son billet d'avion ou un logement via une plateforme en ligne sans passer par une agence classique).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quel exemple illustre le mieux le phénomène de désintermédiation dans l’économie numérique ?',
              options: [
                'Ajouter trois grossistes supplémentaires entre le fabricant et le client',
                'Imprimer des catalogues papier distribués par courrier postal',
                'Fermer un site web pour vendre uniquement en boutique physique',
                "Permettre à un voyageur de réserver directement auprès d'un hôte sans agence immobilière traditionnelle",
              ],
              correctAnswerIndex: 3,
              explanation:
                "La désintermédiation raccourcit la chaîne d'échange en contournant les intermédiaires physiques traditionnels.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Principes des plateformes',
            stepTitle: 'Les quatre grands principes de l’économie des plateformes',
            paragraphText:
              "L'économie des plateformes s'adosse à quatre grands principes indissociables : (1) effets de réseau, (2) avantage du pionnier, (3) effet d'entraînement rapide et (4) marché concentré. Ne crois pas que le numérique garantit automatiquement une concurrence parfaitement atomisée : les effets de réseau favorisent au contraire la concentration !",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q5',
              type: 'mcq',
              prompt:
                "Parmi les éléments suivants, lequel NE fait PAS partie des quatre grands principes de l'économie des plateformes cités en cours ?",
              options: [
                'Un marché à effets de réseau',
                'Une atomisation durable empêchant toute concentration',
                "L'avantage du pionnier",
                "Un effet d'entraînement rapide",
              ],
              correctAnswerIndex: 1,
              explanation:
                "Au contraire d'une atomisation durable, le quatrième principe des plateformes est un marché concentré dû aux effets de réseau.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : CHAÎNE DE VALEUR, MODÈLES ÉCONOMIQUES ET MODÈLES ALTERNATIFS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch3',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Chaîne de valeur, modèles économiques et modèles alternatifs',
    summary:
      "Maîtriser la chaîne de valeur de Porter (cas Apple), les 6 grands modèles économiques numériques, les leviers PMF/traction/pivot et les modèles alternatifs (communs, open source, crowdfunding, don, coopérative).",
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ESATIC — UP Management — Intro à l’Éco Numérique (CHAPITRE 3.pptx)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch3_p1',
        order: 1,
        title: 'Chaîne de valeur de Porter (1985) et stratégie de marge (cas Apple)',
        summary:
          "Comprendre la notion de chaîne de valeur, son lien avec le modèle économique et la répartition de la valeur ajoutée illustrée par Apple.",
        conceptExplanation:
          "Introduite par Michael Porter (1985), la chaîne de valeur décompose les activités d'une entreprise qui contribuent directement ou indirectement à augmenter l'utilité et l'attrait d'un produit ou service pour le client, en vue de bâtir un avantage concurrentiel.\n\nLe modèle économique est la représentation simplifiée de la façon dont l'entreprise est viable économiquement : il intègre la création de valeur tout au long de sa chaîne d'activité.\n\nL'étude de cas Apple illustre parfaitement la captation de valeur dans l'économie numérique : Apple sous-traite/délocalise les activités industrielles à faible valeur ajoutée (assemblage), mais conserve rigoureusement en interne les activités qui concentrent la connaissance, la forte valeur ajoutée et les fortes marges (R&D, design, marketing, étude des données). En parallèle, Apple complète la vente matérielle (iPhone, iMac) par des services numériques à marge élevée (iCloud, Apple Music), ce qui fait croître ses marges à mesure que son parc de smartphones s'étend.",
        keyRule:
          "Pour maximiser sa marge sur la chaîne de valeur (cas Apple), l'entreprise conserve la R&D, le design, le marketing, les données et les services, et sous-traite l'assemblage à faible valeur ajoutée.",
        formulas: [
          {
            name: 'Logique de la chaîne de valeur (Porter, 1985)',
            formula: 'Avantage concurrentiel = Optimisation des activités créatrices de valeur > Coûts',
            note: 'Chez Apple : internalisation de la connaissance (R&D, design, données, services) + sous-traitance de l’assemblage.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer la chaîne de valeur d’une marque de terminaux connectés',
          statement:
            "Une entreprise conçoit des tablettes éducatives, développe son système logiciel et ses abonnements de contenus pédagogiques, mais confie l'assemblage physique à un sous-traitant industriel. Pourquoi cette stratégie renforce-t-elle sa rentabilité ?",
          methodSteps: [
            "Identifier les activités à faible marge : l'assemblage standardisé, soumis à une forte concurrence par les coûts, est externalisé.",
            'Identifier les activités à forte connaissance : la conception (R&D), le design, le marketing et la donnée utilisateur restent internes.',
            "Identifier le relais de marge récurrente : les services numériques (abonnements de contenus, stockage cloud) génèrent une marge élevée sur chaque terminal vendu.",
          ],
          conclusion:
            "À l'instar d'Apple, l'entreprise concentre ses ressources sur les maillons les plus rentables de la chaîne de valeur.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Porter (1985)',
            stepTheme: 'Chaîne de valeur',
            stepTitle: 'Définition et finalité de la chaîne de valeur',
            paragraphText:
              "Selon Michael Porter (1985), la chaîne de valeur recense l'ensemble des activités d'une entreprise qui augmentent l'utilité ou l'attrait du produit pour le client. Chaque étape doit contribuer directement ou indirectement à créer de la valeur pour construire un avantage concurrentiel.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de l’analyse par la chaîne de valeur développée par Michael Porter (1985) ?',
              options: [
                'Calculer le PIB nominal d’un pays',
                'Identifier les activités créatrices de valeur afin de bâtir un avantage concurrentiel',
                'Remplacer la comptabilité générale par un réseau social',
                'Fixer le taux de réserves obligatoires des banques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La chaîne de valeur de Porter (1985) vise à repérer comment chaque activité crée de la valeur client pour obtenir un avantage concurrentiel.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Lien clé',
            stepTheme: 'Modèle économique',
            stepTitle: 'Chaîne de valeur et viabilité du modèle économique',
            paragraphText:
              "Le modèle économique est une représentation simplifiée de la manière dont une entreprise assure sa viabilité économique. La création de valeur y est directement intégrée et se décline sur une chaîne propre à chaque secteur d'activité.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Comment le cours définit-il le « modèle économique » ?',
              options: [
                'Un logiciel de traitement de texte collaboratif',
                'La liste des impôts payés aux administrations publiques',
                "La représentation simplifiée de la façon dont l'entreprise va être viable économiquement",
                'Le contrat de travail des développeurs informatiques',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un modèle économique décrit de manière synthétique comment une organisation crée de la valeur et reste économiquement viable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Cas Apple',
            stepTheme: 'Activités internalisées',
            stepTitle: 'Les activités à forte valeur ajoutée conservées par Apple',
            paragraphText:
              "Dans le modèle économique d'Apple, l'entreprise conserve en interne les activités qui concentrent la connaissance et génèrent les plus fortes marges : R&D, design, marketing et étude des données. Elle y ajoute des services à marge élevée comme iCloud et Apple Music.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quelles activités Apple choisit-elle de conserver en interne pour sécuriser de hautes marges ?',
              options: [
                'La R&D, le design, le marketing, l’étude des données et les services (iCloud, Apple Music)',
                "Uniquement l'assemblage manuel des composants en usine",
                "L'extraction minière des métaux rares",
                'Le transport maritime des conteneurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Apple garde les activités intensives en connaissance (R&D, design, marketing, données) et les services numériques à forte marge.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Sous-traitance',
            stepTheme: 'Délocalisation',
            stepTitle: 'Pourquoi sous-traiter les maillons à faible valeur ajoutée ?',
            paragraphText:
              "À l'inverse, Apple sous-traite et délocalise les activités industrielles d'assemblage à faible valeur ajoutée. Cette division du travail lui permet de maîtriser ses coûts tout en pratiquant des prix élevés, garantissant un haut niveau de marge.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pourquoi une firme numérique comme Apple externalise-t-elle l’assemblage matériel de ses appareils ?',
              options: [
                'Parce que la loi interdit de fabriquer des smartphones dans son pays',
                'Parce que l’assemblage est la seule activité à forte valeur ajoutée',
                'Pour éviter de vendre des services numériques comme iCloud',
                'Parce que c’est une activité à faible valeur ajoutée qu’il est plus rentable de sous-traiter pour maîtriser les coûts',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Externaliser les tâches à faible valeur ajoutée réduit les coûts fixes industriels et concentre le capital sur l'innovation et la marque.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Valeur client',
            stepTitle: 'Mesurer la valeur par le client et non par le seul coût',
            paragraphText:
              "Attention : la valeur d'un produit ne se résume pas à son coût de fabrication ! Elle se mesure par la satisfaction apportée au client et par la démarcation par rapport aux concurrents. C'est cette valeur perçue qui justifie un prix premium.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q5',
              type: 'mcq',
              prompt:
                "Selon le cours sur la chaîne de valeur, comment se mesure fondamentalement la valeur d'un produit ?",
              options: [
                'Uniquement par son poids en matières premières',
                'Par une meilleure satisfaction du client et une démarcation par rapport aux concurrents',
                'Par le nombre de salariés dans le service administratif',
                "Par la durée de transport entre l'usine et le magasin",
              ],
              correctAnswerIndex: 1,
              explanation:
                'La valeur se mesure par le supplément de satisfaction client et la différenciation concurrentielle obtenue.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch3_p2',
        order: 2,
        title: 'Les 6 modèles économiques numériques et les clés du succès (PMF, Traction, Pivot)',
        summary:
          "Maîtriser commission, freemium/premium, abonnement, vente de produit, publicité et rachat, ainsi que le trio Product Market Fit, traction rapide et stratégie de pivot.",
        conceptExplanation:
          "Six grands modèles économiques dominent l'économie numérique :\n1. La commission : mise en relation fournisseurs/clients avec prélèvement sur chaque transaction (Airbnb, Uber, Amazon Marketplace) — les revenus croissent sans augmenter la production interne.\n2. Le freemium/premium : offre d'appel gratuite à grande échelle puis conversion vers des fonctionnalités payantes (Dropbox, Spotify, Clash Royale), adossée à la scalabilité.\n3. L'abonnement : revenus récurrents et fidélisation (Netflix, Office 365, Adobe, Xbox Game Pass) — plus facile de fidéliser que de recruter.\n4. La vente de produit : vente unique d'un bien ou logiciel (Apple iPhone/iMac, licences classiques, qui migrent toutefois vers l'abonnement).\n5. La publicité : monétisation de l'audience auprès d'annonceurs (marché biface dominant du Web, mais questionné sur le plan éthique).\n6. Le rachat : créer de la valeur (base d'utilisateurs, données ciblées ou technologie innovante) pour être racheté par un géant ou une entreprise historique (« legacy ») — ex. WhatsApp ou startups fintech rachetées par des banques.\nOn rencontre aussi le modèle de l'appât (console/jeux, Amazon Prime) et l'achat/revente e-commerce.\n\nPour réussir durablement, une startup numérique s'appuie sur trois leviers : le Product Market Fit (PMF : adéquation parfaite produit-marché qui réduit le coût d'acquisition par bouche-à-oreille), la Traction rapide (adoption prouvant le potentiel aux investisseurs et accélérant les itérations) et le Pivot rapide (changement stratégique de produit, cible ou modèle économique, ex. B2C vers B2B, pour ne pas gaspiller temps et capitaux).",
        keyRule:
          "Retiens l'équation de survie d'une startup numérique : PMF (clé du long terme) + Traction rapide (confirme l'adéquation) + Pivot rapide (évite de s'entêter sur une mauvaise voie).",
        formulas: [
          {
            name: 'Trio stratégique de croissance',
            formula: 'PMF (Adéquation) + Traction rapide (Adoption) + Pivot (Adaptation stratégique)',
            note: 'Sans PMF, les dépenses marketing ne génèrent aucune croissance durable.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer le modèle économique et le pivot d’une application éducative',
          statement:
            "Une application de révision propose des fiches gratuites à tous les étudiants et un accès illimité aux exercices corrigés pour 2 000 FCFA/mois. Après 6 mois, la conversion individuelle reste faible, mais les écoles privées demandent des licences pour leurs classes. Quel est le modèle initial et quelle décision stratégique prendre ?",
          methodSteps: [
            'Modèle initial : Freemium (offre gratuite ouverte) couplé à un Abonnement mensuel (fonctionnalités premium).',
            "Diagnostic : faible traction payante en B2C (PMF non atteint sur les particuliers), mais forte demande naturelle en B2B (écoles).",
            "Décision : opérer un Pivot stratégique de modèle économique en passant du B2C vers le B2B (vente d'abonnements institutionnels aux établissements).",
          ],
          conclusion:
            'Le pivot rapide permet de réorienter la cible et le modèle économique vers le segment où le Product Market Fit existe réellement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Modèles',
            stepTheme: 'Commission & Freemium',
            stepTitle: 'Distinguer commission et freemium/premium',
            paragraphText:
              "Le modèle à la commission prélève un pourcentage sur les transactions mises en relation (Airbnb, Uber, Amazon Marketplace), permettant d'augmenter les revenus sans produire soi-même le service. Le modèle freemium/premium attire un vaste public gratuit pour en convertir une partie vers des options payantes (Dropbox, Spotify) grâce à la scalabilité.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quel modèle économique utilisent principalement Uber, Airbnb et Amazon Marketplace ?',
              options: [
                'Le don bénévole',
                'La commission sur les transactions mises en relation',
                'La vente unique de matériel informatique',
                'La coopérative financée par impôts',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces plateformes mettent en relation offreurs et clients et prélèvent une commission sur chaque transaction réalisée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Monétisation',
            stepTheme: 'Abonnement, publicité et rachat',
            stepTitle: 'Abonnement récurrent, publicité biface et stratégie de rachat',
            paragraphText:
              "L'abonnement fidélise avec des revenus réguliers (Netflix, Office 365, Adobe), car il est plus facile de fidéliser que de recruter. La publicité monétise l'audience auprès d'annonceurs (modèle biface dominant mais débattu sur l'éthique). Le rachat consiste à bâtir une base d'utilisateurs ou une innovation pour être acquis par un géant ou une entreprise « legacy » (ex. WhatsApp, fintech rachetée par une banque).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q2',
              type: 'mcq',
              prompt:
                "Dans le modèle du « rachat », pourquoi une banque traditionnelle (« legacy ») rachète-t-elle une startup fintech parfois non encore rentable ?",
              options: [
                'Uniquement pour revendre ses ordinateurs d’occasion',
                'Pour fermer son propre réseau bancaire',
                "Pour acquérir une innovation technologique, une grande base d'utilisateurs ou des données qualifiées",
                'Parce que la loi interdit aux banques de créer des comptes',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Les entreprises historiques (« legacy ») et les géants numériques rachètent des startups pour capter leur innovation, leurs données ciblées ou neutraliser un concurrent potentiel.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Autres modèles',
            stepTheme: 'Modèle de l’appât',
            stepTitle: "Le modèle de l'appât et l'achat/revente",
            paragraphText:
              "Au-delà des 6 grands modèles, le numérique exploite aussi le « modèle de l'appât » (proposer un produit d'appel abordable puis vendre des achats secondaires rentables : consoles de jeu + jeux, rasoirs + lames, Amazon Prime) et « l'achat/revente » (acheter en gros puis revendre en ligne via un site e-commerce).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q3',
              type: 'mcq',
              prompt:
                "Vendre une console de jeu à prix abordable puis réaliser l'essentiel des marges sur les jeux et services associés illustre quel modèle ?",
              options: [
                "Le modèle de l'appât",
                'Le modèle du don',
                'Le modèle de la coopérative',
                'Le modèle de la commission C2C',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Le modèle de l'appât repose sur un produit d'appel accessible qui déclenche des achats complémentaires très rentables.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Croissance',
            stepTheme: 'PMF & Traction',
            stepTitle: 'Product Market Fit (PMF) et traction rapide',
            paragraphText:
              "Le Product Market Fit (PMF) signifie que le produit correspond parfaitement au besoin du marché : la demande croît naturellement (bouche-à-oreille), la satisfaction est élevée et les coûts d'acquisition client baissent. La traction rapide prouve ce potentiel aux investisseurs, accélère les itérations et crée un avantage concurrentiel.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q4',
              type: 'mcq',
              prompt:
                "Quelle conséquence directe observe-t-on lorsqu'une entreprise numérique atteint véritablement son Product Market Fit (PMF) ?",
              options: [
                'Les coûts d’acquisition client explosent sans hausse de la demande',
                'Les utilisateurs quittent immédiatement le produit',
                'Les investisseurs refusent tout financement',
                "La demande augmente naturellement par bouche-à-oreille et les coûts d'acquisition client diminuent",
              ],
              correctAnswerIndex: 3,
              explanation:
                "Avec le PMF, la satisfaction élevée génère rétention et recommandation naturelle, ce qui abaisse les coûts d'acquisition.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Stratégie',
            stepTheme: 'Pivot',
            stepTitle: 'Quand et comment opérer une stratégie de Pivot ?',
            paragraphText:
              "Un pivot consiste à modifier stratégiquement et rapidement le produit, le segment de clients ciblé ou le modèle économique (par exemple passer du B2C au B2B). L'erreur fatale est de dépenser massivement en marketing sans PMF au lieu de pivoter rapidement.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q5',
              type: 'mcq',
              prompt:
                "Quelle situation illustre correctement une stratégie de « Pivot » dans l'économie numérique ?",
              options: [
                'Maintenir un produit qui ne se vend pas en doublant simplement les dépenses publicitaires',
                'Passer du B2C au B2B ou modifier son offre pour mieux répondre au besoin réel du marché',
                'Arrêter toute amélioration logicielle dès le premier mois',
                'Refuser les retours des premiers utilisateurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Le pivot consiste à ajuster rapidement produit, cible ou modèle économique (ex. B2C -> B2B) pour éviter de gaspiller temps et argent sur une mauvaise hypothèse.",
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch3_p3',
        order: 3,
        title: "Les modèles alternatifs de l'économie numérique",
        summary:
          "Analyser l'économie des communs, le libre et l'open source, le crowdsourcing/crowdfunding, le don et la coopérative de plateforme.",
        conceptExplanation:
          "À côté des modèles capitalistes classiques, l'économie numérique favorise cinq grands modèles alternatifs basés sur la collaboration, le partage et des modes de gouvernance ou de financement inédits :\n\n1. L'économie des communs : le numérique étant intangible avec un coût de copiage quasi nul, les communs remettent en question la propriété intellectuelle stricte au profit de licences de partage (Creative Commons, Wikinomics).\n\n2. Le libre et l'open source : omniprésents dans l'infrastructure du Web — navigateurs (Firefox, Chromium), serveurs réseaux (Linux) et bibliothèques de code — ils permettent d'étudier, modifier et redistribuer le code.\n\n3. Le crowdsourcing et financement participatif (crowdfunding / crowdlending) : mobilisation de la foule pour contribuer ou financer directement des TPE-PME sous forme de prêts (crowdlending) ou d'actionnariat/contreparties (crowdfunding).\n\n4. Le don : financement volontaire par les usagers et adhérents, complété par le bénévolat, à l'image de grandes structures numériques comme Wikipédia ou la fondation Mozilla (Firefox, Thunderbird).\n\n5. La coopérative numérique : entreprise démocratique (« 1 personne = 1 voix »), financée directement par les bénéficiaires du service, développant des solutions techniques ad hoc sans captation excessive de données ni asymétrie d'information entre la plateforme et ses membres.",
        keyRule:
          "Retiens les 5 modèles alternatifs du cours : Communs (Creative Commons), Libre/Open Source (Linux, Firefox), Crowdsourcing/Crowdfunding-Crowdlending, Don (Wikipédia, Mozilla) et Coopérative (1 personne = 1 voix).",
        formulas: [
          {
            name: 'Principe démocratique de la coopérative',
            formula: 'Gouvernance coopérative : 1 personne = 1 voix (indépendamment du capital détenu)',
            note: 'Limite la captation exagérée de données et l’asymétrie d’information.',
          },
        ],
        workedExample: {
          title: 'Choisir un modèle alternatif pour une plateforme éducative africaine',
          statement:
            "Des enseignants et étudiants veulent créer une encyclopédie libre de cours universitaires sans publicité intrusive ni revente de données personnelles. Quels modèles alternatifs du cours peuvent-ils combiner ?",
          methodSteps: [
            "Licence de contenu : adopter l'économie des communs avec des licences Creative Commons pour autoriser le partage légal (coût de copie nul).",
            'Infrastructure logicielle : bâtir la plateforme sur des technologies libres et open source (ex. serveurs Linux) pour réduire les coûts.',
            'Financement et gouvernance : financer l’hébergement par le don des usagers (modèle Wikipédia) ou le crowdfunding, avec une gouvernance en coopérative (1 personne = 1 voix).',
          ],
          conclusion:
            'Les modèles alternatifs offrent des réponses viables lorsque la mission prioritaire est le partage de la connaissance et la protection des données plutôt que la maximisation de la rente publicitaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Communs',
            stepTheme: 'Propriété intellectuelle',
            stepTitle: "L'économie des communs et les licences Creative Commons",
            paragraphText:
              "Parce que les biens numériques sont intangibles et ont un coût de copiage quasi nul, l'économie des communs questionne la propriété intellectuelle exclusive et développe des formes de partage encadrées comme les licences Creative Commons et la Wikinomics.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q1',
              type: 'mcq',
              prompt:
                "Quelle caractéristique économique du numérique favorise particulièrement l'essor de l'économie des communs ?",
              options: [
                'Le coût de copiage exorbitant des fichiers numériques',
                'Son caractère immatériel et un coût de copiage quasi nul',
                "L'obligation d'acheter un brevet pour lire un site web",
                'La rareté physique des chiffres binaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’immatérialité et le coût marginal de reproduction quasi nul rendent le partage à grande échelle possible via des licences comme Creative Commons.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Open Source',
            stepTheme: 'Logiciel libre',
            stepTitle: 'Omniprésence du libre et de l’open source sur le Web',
            paragraphText:
              "Vieux comme le Web, le logiciel libre et open source est présent partout dans l'infrastructure numérique : dans les navigateurs (Firefox, Chromium), dans les serveurs réseaux (Linux) et dans le code de très nombreux logiciels modernes.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q2',
              type: 'mcq',
              prompt:
                "Parmi les exemples suivants cités dans le cours, lequel appartient à l'écosystème du libre et de l'open source ?",
              options: [
                'Un logiciel propriétaire au code secret sous licence fermée',
                'Une banque centrale',
                'Linux (serveurs réseaux) et Firefox / Chromium (navigateurs)',
                'Un contrat d’assurance automobile classique',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le cours cite précisément Linux pour les serveurs réseaux et Firefox/Chromium pour les navigateurs comme piliers du libre.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Financement',
            stepTheme: 'Crowdsourcing',
            stepTitle: 'Crowdfunding et crowdlending au service des TPE-PME',
            paragraphText:
              "Le crowdsourcing mobilise les contributions de la foule. En finance numérique, les plateformes de crowdfunding et de crowdlending permettent le financement direct des TPE-PME sous forme de prêts (crowdlending) ou d'actionnariat / dons avec contreparties (crowdfunding).",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle est la fonction principale des plateformes de crowdfunding et de crowdlending présentées dans le cours ?',
              options: [
                'Financer directement des TPE-PME par des prêts ou de l’actionnariat en échange de contreparties',
                'Collecter les impôts sur le revenu pour le Trésor public',
                'Fabriquer des semi-conducteurs en usine',
                'Imposer une taxe publicitaire aux navigateurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Crowdfunding et crowdlending organisent le financement participatif direct de projets et de TPE-PME en dehors des circuits bancaires classiques.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Modèle du don',
            stepTheme: 'Wikipédia & Mozilla',
            stepTitle: 'Le financement par les dons et le bénévolat',
            paragraphText:
              "Le modèle du don repose sur les contributions volontaires des usagers et adhérents ainsi que sur la participation directe (bénévolat). De grandes structures numériques mondiales telles que Wikipédia ou Mozilla (Firefox, Thunderbird) fonctionnent en partie sur ce modèle.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Quelles grandes structures numériques le cours cite-t-il comme exemples emblématiques du modèle économique fondé sur le don ?',
              options: [
                'Uber et Airbnb',
                'Apple et Amazon',
                'Netflix et Canal+',
                'Wikipédia et Mozilla (Firefox, Thunderbird)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Wikipédia et Mozilla reposent sur les dons de leurs usagers et le bénévolat de leur communauté.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Coopérative',
            stepTheme: 'Gouvernance démocratique',
            stepTitle: 'Les atouts du modèle coopératif numérique',
            paragraphText:
              "La coopérative est un modèle d'entreprise démocratique (« 1 personne = 1 voix »), financé directement par les acteurs qui bénéficient du service. Elle évite la captation exagérée de données et réduit l'asymétrie d'information entre la plateforme et ses utilisateurs.",
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle règle de gouvernance et quel avantage informationnel caractérisent la coopérative numérique ?',
              options: [
                '1 action = 100 voix et vente maximale des données personnelles',
                '1 personne = 1 voix, pas de captation exagérée de données et pas d’asymétrie d’information',
                'Direction exclusive par un fonds spéculatif étranger',
                'Tarification exclusivement publicitaire obligatoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La coopérative garantit une gouvernance démocratique (1 personne = 1 voix), un financement par les bénéficiaires et le respect des données sans asymétrie d’information.',
            },
          },
        ],
      }),
    ],
  },
];
