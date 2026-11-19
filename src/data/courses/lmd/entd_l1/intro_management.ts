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

export const INTRO_MANAGEMENT_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : LE CONCEPT DE MANAGEMENT, L'ORGANISATION ET LES RÔLES DU MANAGER
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch1',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: "Chapitre 1 — Le concept de management, l'organisation et les rôles du manager",
    summary:
      "Définition, approches et caractéristiques de l'organisation, management comme art et science, distinction Administration / Management / Gestion, les 10 rôles du manager selon Henry Mintzberg et différence manager / leader.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'INTRODUCTION AU MANAGEMENT ENTD 1 (Code 1MAN3152, Chapitre 1 & TD 1)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch1_p1',
        order: 1,
        title: "L'organisation, le management (art et science) et le triptyque Administration / Management / Gestion",
        summary:
          "Maîtriser les trois approches de l'organisation, le double caractère du management (science et art) et la distinction rigoureuse entre Administration, Management et Gestion.",
        conceptExplanation:
          "Management et organisation sont indissociables : de la qualité du management dépend la performance de l'organisation.\n\n1) L'organisation est une entité structurée de moyens, de ressources et de personnes réunis de façon délibérée et coordonnée afin d'atteindre un objectif commun. Elle s'appréhende selon trois approches :\n   - Approche structurelle : répartition et coordination des tâches, responsabilités et fonctions ;\n   - Approche fonctionnelle : ensemble d'activités coordonnées et pilotées par des responsables pour atteindre les objectifs ;\n   - Approche systémique : système social (règles, relations, ressources, individus) en interaction avec ses environnements interne et externe.\nElle se reconnaît à 6 caractéristiques : objectifs partagés, structure formelle stable, division du travail et spécialisation, système d'autorité et de pouvoir, coordination des efforts et mobilisation de ressources.\n\n2) Le management (Crener & Monteil, 1979) est une façon de diriger et de gérer rationnellement une organisation (entreprise, administration, association), d'organiser les activités, de fixer les buts et de bâtir des stratégies. Il est à la fois :\n   - une Science : corpus de connaissances systématiques, méthodes, outils et théories éprouvées ;\n   - un Art : qualités personnelles, intuition, leadership, expérience et sens relationnel du dirigeant.\n\n3) Distinction essentielle entre Administration, Management et Gestion :\n   - Administration (« Pourquoi ? » — niveau le plus élevé) : Penser et décider — définit la raison d'être, les objectifs ultimes, la stratégie globale et le cadre juridique (ex. la Direction Générale d'une startup décide de lancer une nouvelle application).\n   - Management (« Comment ? » — niveau intermédiaire) : Conduire et mobiliser — anime les équipes, motive, coordonne et pilote les processus pour atteindre les objectifs (ex. le responsable marketing mobilise son équipe pour atteindre 15 000 000 XOF de CA).\n   - Gestion (« Combien ? » — niveau opérationnel) : Exécuter et contrôler — applique les règles techniques et optimise les ressources au quotidien (ex. le comptable règle les factures fournisseurs, suit la paie et les stocks).",
        formulas: [
          {
            name: 'Triptyque hiérarchique du pilotage',
            formula: 'Administration (Pourquoi ? Penser/Décider) → Management (Comment ? Conduire/Mobiliser) → Gestion (Combien ? Exécuter/Contrôler)',
            note: 'Focus : Organisation globale (Administration) / Personnes et processus (Management) / Ressources (Gestion).',
          },
        ],
        keyRule:
          "Retiens les 3 questions-clés : Administration = Pourquoi ? (Direction générale, stratégie), Management = Comment ? (Cadres, mobilisation des équipes), Gestion = Combien ? (Opérationnel, ressources et contrôle).",
        workedExample: {
          title: 'TD 1 — Cas 1 : La startup numérique ENTD (Administration vs Management vs Gestion)',
          statement:
            "ENTD est une startup spécialisée dans la conception de solutions numériques pour les PME. En votre qualité de stagiaire, classez les activités suivantes entre Administration, Management et Gestion : (a) décider en conseil de direction de conquérir le marché de la fintech UEMOA, (b) motiver et coordonner l'équipe commerciale pour signer 50 PME en 6 mois, (c) tenir la comptabilité, payer les fournisseurs et suivre les factures clients.",
          methodSteps: [
            "Étape 1 — (a) Relève de l'Administration (« Pourquoi ? ») : fixation des grandes orientations stratégiques et de la vision globale au sommet.",
            "Étape 2 — (b) Relève du Management (« Comment ? ») : conduite, animation, motivation et coordination des équipes pour mettre en œuvre la stratégie.",
            "Étape 3 — (c) Relève de la Gestion (« Combien ? ») : exécution technique, application des règles comptables et optimisation quotidienne des ressources financières.",
          ],
          conclusion:
            "Administration = cap stratégique (a) ; Management = mobilisation des équipes et des processus (b) ; Gestion = exécution technique et contrôle des ressources (c).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Organisation',
            stepTheme: "Approches de l'organisation",
            stepTitle: 'Distinguer les trois approches de l’organisation',
            paragraphText:
              "Le cours présente trois lectures complémentaires d'une organisation : l'approche structurelle (répartition des tâches et responsabilités), l'approche fonctionnelle (coordination d'activités gérées par des responsables) et l'approche systémique (système social interagissant avec son environnement).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle approche définit l’organisation comme un système social composé de règles, relations, ressources et individus en interaction avec l’environnement interne et externe ?',
              options: [
                "L'approche comptable",
                "L'approche systémique",
                "L'approche purement juridique",
                "L'approche arithmétique",
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'approche systémique envisage l'organisation comme un système social ouvert en interaction constante avec son environnement interne et externe.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Art et Science',
            stepTheme: 'Double nature du management',
            stepTitle: 'Pourquoi le management est-il à la fois une science et un art ?',
            paragraphText:
              "Le management est une science parce qu'il s'appuie sur un corps organisé de théories, méthodes et outils rationnels ; il est aussi un art parce qu'il mobilise l'intuition, le leadership, le sens relationnel et l'expérience personnelle du manager dans des situations humaines uniques.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Que recouvre la dimension « Art » du management selon le cours ?',
              options: [
                'L’application mécanique de formules mathématiques immuables',
                'La rédaction exclusive des statuts juridiques de la société',
                'Les qualités personnelles, le leadership, l’intuition et le savoir-être relationnel développés par l’expérience',
                'La simple tenue des livres comptables',
              ],
              correctAnswerIndex: 2,
              explanation:
                "La science fournit les méthodes et théories ; l'art managérial renvoie aux qualités humaines, à l'intuition, au leadership et à la maîtrise relationnelle.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Administration',
            stepTheme: 'Niveau stratégique (« Pourquoi ? »)',
            stepTitle: 'Identifier le rôle spécifique de l’Administration',
            paragraphText:
              "Au sommet hiérarchique, l'Administration répond à la question « Pourquoi ? ». Son rôle est de penser et décider : fixer la raison d'être, la stratégie globale, les valeurs, les règles de haut niveau et le cadre juridique de l'ensemble de l'organisation.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'La Direction Générale d’une startup décide de lancer une nouvelle application mobile sur le marché ivoirien. De quel niveau relève cette décision ?',
              options: [
                "De l'Administration (penser et décider les grandes orientations)",
                'De la Gestion quotidienne des stocks',
                'De l’exécution purement technique',
                'Du contrôle de caisse',
              ],
              correctAnswerIndex: 0,
              explanation:
                "C'est l'exemple exact du cours : la Direction Générale qui fixe la grande orientation (lancement d'une application) agit au niveau de l'Administration.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Management vs Gestion',
            stepTheme: 'Comment vs Combien',
            stepTitle: 'Distinguer le manager marketing et le comptable',
            paragraphText:
              "Le Management (niveau intermédiaire, question « Comment ? ») se focalise sur les personnes et les processus pour conduire et mobiliser (ex. le responsable marketing qui pilote son équipe vers un objectif de 15 000 000 XOF). La Gestion (niveau opérationnel, question « Combien ? ») se focalise sur les ressources pour exécuter et contrôler (ex. le comptable qui paie les factures fournisseurs).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'À quelle question clé et à quel focus principal correspond la « Gestion » dans le tableau comparatif du cours ?',
              options: [
                '« Pourquoi ? » — L’ensemble de l’organisation',
                '« Comment ? » — Les personnes et les processus',
                '« Qui ? » — Les actionnaires uniquement',
                '« Combien ? » — Les ressources (exécuter et contrôler au quotidien)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La Gestion se situe au niveau opérationnel : elle répond à « Combien ? », se concentre sur les ressources et consiste à exécuter et contrôler (factures, stocks, paie).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Rôle du manager',
            stepTheme: 'Faire faire plutôt que tout faire soi-même',
            stepTitle: 'Quelle est la spécificité du travail d’un manager ?',
            paragraphText:
              "Un manager est un cadre en position de responsabilité qui relie la direction stratégique et les équipes opérationnelles. Sa caractéristique essentielle : il n'accomplit pas lui-même toutes les tâches techniques, mais obtient des résultats AVEC et PAR les personnes qu'il conduit.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle erreur fréquente commet un nouveau manager qui ne comprend pas sa véritable mission ?',
              options: [
                'Définir les priorités et accompagner son équipe',
                'Vouloir exécuter lui-même toutes les tâches opérationnelles au lieu de faire faire et de coordonner son équipe',
                'Assurer le lien entre la direction stratégique et les équipes opérationnelles',
                'Fixer des méthodes de travail claires',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Le rôle du manager est de faire réaliser les objectifs par et avec son équipe en définissant priorités, méthodes et coordination, non de se substituer aux exécutants.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Caractéristiques',
            stepTheme: 'Reconnaître une véritable organisation',
            stepTitle: 'Vérifier les 6 critères d’une organisation',
            paragraphText:
              "Un regroupement spontané de passants dans la rue n'est pas une organisation. Une organisation suppose : des objectifs partagés, une structure formelle stable, la division du travail/spécialisation, un système d'autorité, la coordination des efforts et la mobilisation de ressources.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Laquelle de ces caractéristiques est indispensable pour qualifier un groupe humain d’« organisation » au sens managérial ?',
              options: [
                'Une absence complète de règles et de division du travail',
                'Une rencontre fortuite et éphémère sans but défini',
                'Des objectifs communs, une structure stable, une division du travail et une coordination des efforts',
                'L’obligation de réaliser un chiffre d’affaires supérieur à un milliard FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Toute organisation (entreprise, association, université, administration) réunit buts partagés, structure, division du travail, autorité, coordination et ressources.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch1_p2',
        order: 2,
        title: 'Les 10 rôles du manager selon Henry Mintzberg et la distinction Manager / Leader',
        summary:
          "Classer et illustrer les 10 rôles managériaux de Mintzberg (interpersonnels, informationnels, décisionnels) et distinguer précisément le manager du leader.",
        conceptExplanation:
          "À la fin des années 1960, après avoir observé concrètement 5 dirigeants d'entreprise (The Nature of Managerial Work, 1973), Henry Mintzberg a montré que le travail réel du manager est fragmenté, varié et s'organise autour de 10 rôles répartis en 3 grandes catégories :\n\n1) Les 3 rôles interpersonnels (issus de l'autorité formelle) :\n   - Symbole (figurehead) : obligations cérémoniales, protocolaires ou légales (signer un diplôme, accueillir un ministre, inaugurer un événement).\n   - Leader : guider, orienter, encourager et motiver les subordonnés.\n   - Agent de liaison : créer et entretenir un réseau de contacts internes et externes utiles à l'organisation.\n\n2) Les 3 rôles informationnels (le manager au cœur des flux d'information) :\n   - Observateur actif (monitor) : collecter et veiller sur les informations internes et externes.\n   - Diffuseur (disseminator) : transmettre aux membres de son équipe les informations utiles recueillies.\n   - Porte-parole (spokesman) : communiquer vers l'extérieur (médias, partenaires, conseil d'administration) au nom de l'organisation.\n\n3) Les 4 rôles décisionnels (le manager comme centre de décision) :\n   - Entrepreneur : repérer des opportunités et initier de nouveaux projets ou améliorations.\n   - Régulateur (disturbance handler) : gérer les crises, conflits et imprévus majeurs pour redresser la situation.\n   - Distributeur de ressources (resource allocator) : arbitrer et allouer budgets, temps, matériels et personnels.\n   - Négociateur : représenter l'organisation dans les négociations importantes (contrats, partenaires, syndicats).\n\nEnfin, le cours distingue nettement :\n- Le Manager : investi d'une responsabilité formelle (secteur, projet, entreprise), engagé sur des résultats à atteindre avec et par son équipe. Le management regroupe les outils et méthodes pour accomplir ses tâches.\n- Le Leader : personne qui inspire et donne aux autres l'envie de la suivre volontairement (parfois là où ils ne seraient pas allés sans elle). Le leadership est un ensemble de talents et capacités que peut posséder tout individu, manager ou non.",
        formulas: [
          {
            name: 'Les 10 rôles de Mintzberg (3 + 3 + 4)',
            formula: 'Interpersonnels (3) : Symbole, Leader, Liaison  |  Informationnels (3) : Observateur, Diffuseur, Porte-parole  |  Décisionnels (4) : Entrepreneur, Régulateur, Distributeur, Négociateur',
            note: 'Chaque manager exerce ces 10 rôles à des degrés variables selon son poste.',
          },
        ],
        keyRule:
          "3 interpersonnels (Symbole, Leader, Agent de liaison) + 3 informationnels (Observateur, Diffuseur, Porte-parole) + 4 décisionnels (Entrepreneur, Régulateur, Distributeur de ressources, Négociateur) = 10 rôles de Mintzberg.",
        workedExample: {
          title: "TD 1 — Cas 2 : Manager de classe organisant une « Journée de l'innovation »",
          statement:
            "Vous êtes désigné manager de votre promotion ENTD 1 pour organiser une Journée de l'innovation à l'ESATIC. Donner un exemple concret pour chacune des 3 catégories de rôles de Mintzberg.",
          methodSteps: [
            "Étape 1 (Rôles interpersonnels) : Prononcer le discours d'ouverture (Symbole) ; motiver les camarades bénévoles (Leader) ; contacter d'anciens étudiants et des startups partenaires (Agent de liaison).",
            "Étape 2 (Rôles informationnels) : Recueillir les disponibilités des salles et intervenants (Observateur actif) ; partager le programme dans le groupe de classe (Diffuseur) ; présenter l'événement à la Direction de l'ESATIC et sur les réseaux sociaux (Porte-parole).",
            "Étape 3 (Rôles décisionnels) : Proposer un hackathon inédit (Entrepreneur) ; remplacer en urgence un conférencier absent ou gérer une panne de projecteur (Régulateur) ; répartir le budget entre sonorisation et rafraîchissements (Distributeur de ressources) ; négocier un sponsoring avec un opérateur télécom (Négociateur).",
          ],
          conclusion:
            "L'organisation d'un événement universitaire mobilise concrètement les 3 familles et les 10 rôles décrits par Henry Mintzberg.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Rôles interpersonnels',
            stepTheme: 'Symbole, Leader, Agent de liaison',
            stepTitle: 'Reconnaître le rôle de Symbole (figurehead)',
            paragraphText:
              "Parmi les trois rôles interpersonnels de Mintzberg, le rôle de Symbole consiste à accomplir des obligations protocolaires, légales ou cérémoniales liées au statut hiérarchique (remettre une médaille, présider une cérémonie, signer un document officiel).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q1',
              type: 'mcq',
              prompt:
                "Lorsqu'un directeur général préside la cérémonie de remise de prix aux meilleurs employés de l'année, quel rôle de Mintzberg exerce-t-il principalement ?",
              options: [
                'Régulateur',
                'Symbole (rôle interpersonnel)',
                'Distributeur de ressources',
                'Observateur actif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Présider une cérémonie protocolaire relève du rôle interpersonnel de Symbole (figurehead).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Rôles informationnels',
            stepTheme: 'Diffuseur vs Porte-parole',
            stepTitle: 'Ne pas confondre Diffuseur et Porte-parole',
            paragraphText:
              "Le Diffuseur transmet l'information vers l'INTÉRIEUR de l'organisation (à ses subordonnés et équipes), tandis que le Porte-parole transmet l'information officielle de l'organisation vers l'EXTÉRIEUR (presse, clients, conseil d'administration, partenaires).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle est la différence entre le rôle de Diffuseur et celui de Porte-parole chez Mintzberg ?',
              options: [
                'Le Diffuseur communique uniquement par écrit, le Porte-parole uniquement à l’oral',
                'Le Diffuseur est un rôle décisionnel, le Porte-parole est un rôle interpersonnel',
                'Le Diffuseur transmet l’information en interne aux membres de l’organisation ; le Porte-parole s’exprime vers l’extérieur',
                'Il n’existe aucune différence entre les deux',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Les deux sont des rôles informationnels, mais orientés différemment : interne pour le Diffuseur (disseminator), externe pour le Porte-parole (spokesman).",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Rôles décisionnels',
            stepTheme: 'Régulateur (disturbance handler)',
            stepTitle: 'Identifier le rôle face à une crise imprévue',
            paragraphText:
              "Parmi les quatre rôles décisionnels (Entrepreneur, Régulateur, Distributeur de ressources, Négociateur), le rôle de Régulateur intervient lorsque l'organisation subit un incident grave, un conflit interne ou une perturbation imprévue nécessitant des mesures correctives urgentes.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Un serveur informatique critique tombe en panne la veille d’un lancement commercial et le manager réorganise l’équipe en urgence pour corriger la crise. Quel rôle de Mintzberg joue-t-il ?',
              options: [
                'Régulateur (rôle décisionnel)',
                'Symbole (rôle interpersonnel)',
                'Porte-parole (rôle informationnel)',
                'Agent de liaison (rôle interpersonnel)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Gérer les perturbations, pannes, conflits et crises majeures pour redresser la situation correspond exactement au rôle décisionnel de Régulateur (disturbance handler).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Classification Mintzberg',
            stepTheme: 'Les 4 rôles décisionnels',
            stepTitle: 'Repérer les rôles décisionnels',
            paragraphText:
              "Mintzberg dénombre exactement 4 rôles décisionnels : Entrepreneur (initier des projets/changements), Régulateur (résoudre les crises), Distributeur de ressources (allouer budgets/effectifs/temps) et Négociateur (négocier des accords majeurs).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Parmi les rôles suivants de Mintzberg, lequel appartient à la catégorie des rôles DÉCISIONNELS ?',
              options: [
                'Agent de liaison',
                'Observateur actif',
                'Symbole',
                'Distributeur de ressources',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Allouer les budgets, le matériel et le temps de travail (Distributeur de ressources) fait partie des 4 rôles décisionnels avec Entrepreneur, Régulateur et Négociateur.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Manager vs Leader',
            stepTheme: 'Distinction statutaire et relationnelle',
            stepTitle: 'Peut-on être leader sans être manager ?',
            paragraphText:
              "Oui ! Selon le cours, le manager occupe une fonction formelle assortie d'objectifs de résultats, tandis que le leader est toute personne qui inspire et donne aux autres l'envie de la suivre. Le leadership est un ensemble de capacités que peut détenir un individu, qu'il soit manager ou non.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle affirmation traduit fidèlement la distinction entre Manager et Leader enseignée dans le cours ?',
              options: [
                'Le leader donne aux autres l’envie de le suivre grâce à son influence, même sans titre hiérarchique ; le manager a la charge formelle d’une unité et de ses résultats',
                'Seul le PDG peut faire preuve de leadership',
                'Un manager n’a jamais besoin de qualités de leadership',
                'Leader et gestionnaire comptable sont strictement synonymes',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Le leadership est un ensemble de talents d'influence accessible à tout individu (manager ou non), tandis que le manager détient une responsabilité formelle de résultats.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Rôle d’Agent de liaison',
            stepTitle: 'Illustrer le rôle d’Agent de liaison',
            paragraphText:
              "Dans son rôle d'Agent de liaison (catégorie interpersonnelle), le manager tisse et entretient un réseau de contacts aussi bien avec d'autres services internes qu'avec des partenaires extérieurs pour faciliter l'action de son unité.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Un chef de projet numérique participe à un forum professionnel à Abidjan pour nouer des contacts avec des développeurs et des partenaires bancaires. Quel rôle de Mintzberg exerce-t-il ?',
              options: [
                'Régulateur',
                'Agent de liaison',
                'Distributeur de ressources',
                'Comptable analytique',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Créer et entretenir un réseau de contacts externes et internes pour faciliter le fonctionnement de l'organisation correspond au rôle interpersonnel d'Agent de liaison.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : L'ÉCOLE CLASSIQUE DES ORGANISATIONS (TAYLOR, FAYOL, WEBER)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch2',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: "Chapitre 2 — Les grands courants du management : l'École Classique (Taylor, Fayol, Weber)",
    summary:
      "Contexte de la révolution industrielle, approche empirique et normative, postulats mécaniste et rationaliste, quatre principes classiques, OST de Taylor (et critiques), fonction administrative de Fayol et bureaucratie de Max Weber.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'INTRODUCTION AU MANAGEMENT ENTD 1 (Code 1MAN3152, Chapitre 2)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch2_p1',
        order: 1,
        title: "Contexte, fondements, postulats et principes fondamentaux de l'École Classique",
        summary:
          "Comprendre la naissance de l'école classique dans le sillage de la révolution industrielle, ses postulats mécaniste et rationaliste ainsi que ses quatre grands principes d'organisation.",
        conceptExplanation:
          "Les théories du management ne sont pas nées du hasard : chaque courant répond aux réalités économiques, sociales et technologiques de son époque. L'École Classique des organisations émerge dans le contexte de la révolution industrielle (concentration des moyens de production, essor industriel attirant une main-d'œuvre rurale nombreuse et peu qualifiée qu'il fallait encadrer et rationaliser).\n\nElle se développe selon deux branches : une inspiration managériale/industrielle (F. W. Taylor et H. Fayol) et une approche bureaucratique (Max Weber). Ses fondements reposent sur :\n1) Une approche empirique et normative : les règles découlent de l'expérience pratique des dirigeants et s'énoncent sous forme de recommandations, principes et commandements universels (« one best way »).\n2) Deux postulats implicites :\n   - Postulat mécaniste : l'entreprise est assimilée à une gigantesque machine dont les travailleurs sont des pièces interchangeables.\n   - Postulat rationaliste : le salarié recherche la sécurité, répugne aux responsabilités, est supposé naturellement paresseux (« flânerie ») et motivé uniquement par le salaire ; les processus industriels sont supposés parfaitement maîtrisables.\n\nL'École Classique obéit à 4 principes fondamentaux :\n1) L'organisation hiérarchique : structure pyramidale où les ouvriers à la base se bornent à exécuter les ordres ;\n2) Le principe d'exception : les subordonnés traitent les tâches routinières tandis que seuls les problèmes exceptionnels remontent à la hiérarchie ;\n3) Le principe de l'unité de commandement : chaque subordonné ne doit recevoir d'ordres que d'un seul supérieur hiérarchique ;\n4) Le principe de spécialisation : division du travail en tâches simples, spécifiques et répétitives pour accroître la productivité.",
        formulas: [
          {
            name: 'Les 4 principes fondamentaux de l’École Classique',
            formula: '1. Organisation hiérarchique  ·  2. Principe d’exception  ·  3. Unité de commandement  ·  4. Spécialisation',
            note: 'Adossés aux postulats mécaniste (entreprise-machine) et rationaliste.',
          },
        ],
        keyRule:
          "École classique = entreprise vue comme une machine (postulat mécaniste) + approche normative. Retiens surtout le principe d'exception (routine en bas, exceptions en haut) et l'unité de commandement (un seul chef par subordonné).",
        workedExample: {
          title: "Diagnostic classique d'un atelier industriel traditionnel",
          statement:
            "Dans une usine d'assemblage, chaque opérateur visse uniquement quatre boulons toute la journée, ne reçoit d'instructions que de son contremaître unique, et n'appelle le chef d'atelier qu'en cas de panne grave de la machine. Identifier les principes classiques à l'œuvre.",
          methodSteps: [
            "Étape 1 (Spécialisation) : L'opérateur effectue une tâche unique, simple et répétitive (visser quatre boulons) pour maximiser le rendement.",
            "Étape 2 (Unité de commandement) : Il ne dépend que d'un seul supérieur direct (son contremaître), évitant les ordres contradictoires.",
            "Étape 3 (Principe d'exception) : Les opérations normales restent à son niveau, tandis que l'incident exceptionnel (panne grave) remonte à la hiérarchie.",
          ],
          conclusion:
            "Cet atelier illustre fidèlement trois principes clés de l'École Classique : spécialisation, unité de commandement et principe d'exception.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Contexte historique',
            stepTheme: 'Révolution industrielle',
            stepTitle: 'Pourquoi l’École Classique apparaît-elle avec l’industrialisation ?',
            paragraphText:
              "L'École Classique répond aux défis de la révolution industrielle : concentration de grands ateliers et afflux d'une main-d'œuvre d'origine agricole peu habituée au travail technique en usine, rendant nécessaire la rationalisation et la discipline productive.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'À quel grand bouleversement historique répond principalement la naissance de l’École Classique des organisations ?',
              options: [
                'L’essor d’Internet et des réseaux sociaux au XXIe siècle',
                'La révolution industrielle et l’afflux d’une main-d’œuvre agricole vers les usines',
                'La chute du mur de Berlin en 1989',
                'L’invention de la blockchain',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'École Classique vise à organiser rationnellement les grandes usines issues de la révolution industrielle et à intégrer une main-d'œuvre rurale peu formée.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Postulat mécaniste',
            stepTheme: 'La métaphore de la machine',
            stepTitle: 'Comprendre le postulat mécaniste',
            paragraphText:
              "Selon le postulat mécaniste de l'École Classique, l'entreprise est conçue comme une gigantesque machine composée de rouages et de pièces, et les travailleurs eux-mêmes sont assimilés à des pièces de cette machine.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Selon le postulat mécaniste de l’École Classique, à quoi l’entreprise est-elle assimilée ?',
              options: [
                'À une grande famille informelle sans règles',
                'À un écosystème biologique imprévisible',
                'À une gigantesque machine dont les hommes constituent des pièces',
                'À une coopérative d’artistes indépendants',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le postulat mécaniste compare l’entreprise à une machine parfaitement réglée où chaque salarié est une pièce exécutant une fonction précise.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Postulat rationaliste',
            stepTheme: 'Vision classique du travailleur',
            stepTitle: 'Quelles hypothèses sur le salarié guident le postulat rationaliste ?',
            paragraphText:
              "Le postulat rationaliste présuppose que le salarié recherche avant tout la sécurité, répugne aux responsabilités, tend naturellement à la paresse ou à la fraude, et que les processus industriels sont entièrement connus et maîtrisables.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces énoncés correspond au postulat rationaliste de l’École Classique ?',
              options: [
                'Le travailleur est supposé naturellement réticent aux responsabilités et exige un encadrement strict',
                'Le travailleur est spontanément créatif et ne nécessite aucun contrôle',
                'Les processus industriels sont impossibles à mesurer ou standardiser',
                'Le salaire ne joue aucun rôle dans la motivation ouvrière',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Le postulat rationaliste classique rejoint la future théorie X : méfiance envers la flânerie ouvrière, besoin d'encadrement strict et confiance absolue dans la maîtrise technique.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: "Principe d'exception",
            stepTheme: 'Routine vs Situations exceptionnelles',
            stepTitle: 'Comment fonctionne le principe d’exception ?',
            paragraphText:
              "Le principe d'exception stipule que les subordonnés gèrent de façon autonome les tâches courantes et routinières définies par les procédures, tandis que la hiérarchie n'intervient que pour résoudre les problèmes exceptionnels ou imprévus.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Que stipule le « principe d’exception » dans l’École Classique ?',
              options: [
                'Les dirigeants doivent accomplir personnellement toutes les tâches routinières',
                'Aucune règle ne s’applique aux ouvriers de base',
                'Chaque salarié peut choisir librement son chef chaque matin',
                'Les subordonnés traitent les tâches routinières et seuls les problèmes exceptionnels sont soumis à la hiérarchie',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le principe d’exception libère les cadres supérieurs des tâches répétitives pour concentrer leur temps sur les anomalies et décisions exceptionnelles.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Unité de commandement',
            stepTheme: 'Clarté hiérarchique',
            stepTitle: 'Éviter les ordres contradictoires',
            paragraphText:
              "Le principe de l'unité de commandement impose que chaque subordonné ne reçoive d'ordres que d'un seul supérieur hiérarchique. Cela évite les conflits de loyauté, la confusion et les instructions contradictoires.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quel principe classique est directement violé si un employé reçoit simultanément des ordres contradictoires de deux chefs différents ?',
              options: [
                'Le principe de l’unité de commandement',
                'Le principe de spécialisation horizontale',
                'Le principe d’autofinancement',
                'Le principe de diversification commerciale',
              ],
              correctAnswerIndex: 0,
              explanation:
                "L'unité de commandement exige un seul chef par subordonné afin de garantir la cohérence des directives et la clarté de la responsabilité.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Deux branches',
            stepTheme: 'Taylor, Fayol et Weber',
            stepTitle: 'Situer les trois grands auteurs de l’École Classique',
            paragraphText:
              "L'École Classique combine deux branches complémentaires : une branche managériale/praticienne portée par Frederick Winslow Taylor (atelier/OST) et Henri Fayol (direction/administration), et une branche sociologique/bureaucratique portée par Max Weber (règles et droit).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Quels sont les trois auteurs fondateurs emblématiques de l’École Classique des organisations ?',
              options: [
                'Elton Mayo, Abraham Maslow et Douglas McGregor',
                'Frederick W. Taylor, Henri Fayol et Max Weber',
                'Philip Kotler, Michael Porter et Henry Mintzberg',
                'Karl Marx, John Maynard Keynes et Milton Friedman',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Taylor (OST), Fayol (administration industrielle) et Weber (bureaucratie rationnelle-légale) forment le triptyque fondateur de l’École Classique.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch2_p2',
        order: 2,
        title: 'F. W. Taylor (OST), Henri Fayol (fonction administrative) et Max Weber (bureaucratie)',
        summary:
          "Analyser l'Organisation Scientifique du Travail de Taylor et ses limites, les apports administratifs de Fayol (POCCC) et les trois types d'autorité légitime selon Max Weber.",
        conceptExplanation:
          "1) Frederick Winslow Taylor (1856–1915) et l'Organisation Scientifique du Travail (OST) :\nIngénieur américain, Taylor cherche à augmenter fortement le rendement tout en élevant les salaires grâce à la coopération encadrement–ouvriers fondée sur la science (scientisme) plutôt que sur l'arbitraire. L'OST repose sur :\n- l'étude scientifique des temps et des mouvements par un bureau des méthodes (ingénieurs) ;\n- la division verticale du travail : séparation stricte entre conception (ingénieurs) et exécution (ouvriers) ;\n- la division horizontale : parcellisation des tâches simples et répétitives ;\n- la sélection scientifique des ouvriers et le salaire au rendement (aux pièces) ;\n- un encadrement fonctionnel basé sur la compétence technique.\nCritiques majeures du taylorisme : séparation aliénante conception–exécution, monotonie et épuisement liés aux tâches répétitives, et vision réductrice selon laquelle l'homme ne serait motivé que par l'argent.\n\n2) Henri Fayol (1841–1925) et la fonction administrative :\nDirigeant français, Fayol s'intéresse au sommet de l'entreprise. Il identifie 6 fonctions (technique, commerciale, financière, sécurité, comptable, administrative) et définit la fonction administrative (manager) par le sigle POCCC : Prévoir, Organiser, Commander, Coordonner, Contrôler, assortie de 14 principes généraux (dont l'unité de commandement, la discipline, l'équité, l'union du personnel).\n\n3) Max Weber (1864–1920) et la bureaucratie rationnelle-légale :\nSociologue allemand, Weber distingue trois types d'autorité légitime :\n- Autorité traditionnelle (fondée sur la coutume et l'héritage) ;\n- Autorité charismatique (fondée sur la personnalité exceptionnelle d'un chef) ;\n- Autorité rationnelle-légale (fondée sur le droit, les règlements impersonnels et la compétence) : c'est le modèle de la bureaucratie wébérienne, censé garantir équité, prévisibilité et efficacité administrative (hiérarchie précise, règles écrites, recrutement par concours/compétence, séparation de la fonction et de la personne).",
        formulas: [
          {
            name: 'Les 5 fonctions administratives de Fayol (POCCC)',
            formula: 'Prévoir · Organiser · Commander · Coordonner · Contrôler',
            note: 'Devenu aujourd’hui le cycle moderne PODC (Planifier, Organiser, Diriger, Contrôler).',
          },
          {
            name: 'Les 3 types d’autorité selon Max Weber',
            formula: '1. Traditionnelle (coutume)  ·  2. Charismatique (personne)  ·  3. Rationnelle-légale (règles et droit = Bureaucratie)',
            note: 'Pour Weber, la bureaucratie est la forme la plus rationnelle et impersonnelle d’organisation.',
          },
        ],
        keyRule:
          "Taylor = Atelier / OST (chronométrage, séparation conception–exécution, salaire au rendement). Fayol = Direction générale / POCCC + unité de commandement. Weber = Bureaucratie (autorité rationnelle-légale fondée sur des règles écrites impersonnelles).",
        workedExample: {
          title: 'Comparer les apports de Taylor, Fayol et Weber dans une banque moderne',
          statement:
            "Dans une banque ivoirienne : (1) les guichetiers suivent un script minuté et standardisé pour encaisser un chèque, (2) le directeur général planifie, organise, coordonne et contrôle le réseau d'agences, (3) les promotions et décisions de crédit obéissent strictement à des procédures écrites impersonnelles et au mérite technique. Rattacher chaque pratique à Taylor, Fayol ou Weber.",
          methodSteps: [
            "Étape 1 (Script minuté au guichet) : Héritage de F. W. Taylor (OST) — standardisation des gestes et mesure des temps d'exécution.",
            "Étape 2 (Pilotage POCCC du directeur général) : Apport d'Henri Fayol — exercice de la fonction administrative au sommet.",
            "Étape 3 (Procédures écrites impersonnelles et recrutement par compétence) : Modèle bureaucratique rationnel-légal de Max Weber — élimination de l'arbitraire personnel par le droit et les règles.",
          ],
          conclusion:
            "Les grandes organisations contemporaines combinent encore au quotidien les trois piliers de l'École Classique : Taylor (standardisation), Fayol (pilotage) et Weber (procédures légales).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Taylorisme (OST)',
            stepTheme: 'Séparation conception / exécution',
            stepTitle: 'Quel rôle joue le bureau des méthodes chez Taylor ?',
            paragraphText:
              "Au cœur de l'Organisation Scientifique du Travail (OST), Taylor instaure une division verticale stricte : les ingénieurs du bureau des méthodes étudient scientifiquement les temps et mouvements pour concevoir la meilleure façon de travailler, tandis que les ouvriers se limitent à l'exécuter exactement.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle division caractérise l’Organisation Scientifique du Travail (OST) de Frederick W. Taylor ?',
              options: [
                'L’autogestion complète des ouvriers sans ingénieurs',
                'La séparation stricte entre le travail de conception (ingénieurs) et le travail d’exécution (ouvriers)',
                'La suppression de toute mesure des temps de fabrication',
                'Le paiement d’un salaire identique quel que soit le rendement',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Taylor confie l'analyse scientifique et la conception au bureau des méthodes (ingénieurs) et cantonne les ouvriers à l'exécution standardisée, récompensée par un salaire au rendement.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Critiques du taylorisme',
            stepTheme: 'Limites humaines de l’OST',
            stepTitle: 'Identifier les trois principales critiques du taylorisme',
            paragraphText:
              "Le cours retient trois grandes critiques contre le taylorisme : (1) la séparation rigide conception–exécution qui déqualifie l'ouvrier, (2) la division excessive en tâches répétitives et monotones génératrice d'aliénation, et (3) l'hypothèse erronée que le salarié n'est motivé que par l'argent.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Laquelle de ces critiques est classiquement adressée au taylorisme ?',
              options: [
                'Il accorde trop d’autonomie créative aux ouvriers',
                'Il néglige complètement la productivité industrielle',
                'La répétitivité des tâches est aliénante et l’individu n’est pas motivé uniquement par l’argent',
                'Il interdit toute spécialisation du travail',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le taylorisme déshumanise le travail par la monotonie, coupe l’exécutant de la réflexion et réduit la motivation humaine au seul gain financier.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Henri Fayol',
            stepTheme: 'La fonction administrative (POCCC)',
            stepTitle: 'Décomposer le sigle POCCC de Fayol',
            paragraphText:
              "Contrairement à Taylor centré sur l'atelier, Henri Fayol analyse le rôle de la direction générale et définit administrer (manager) par cinq verbes d'action : Prévoir, Organiser, Commander, Coordonner, Contrôler (POCCC).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Selon Henri Fayol, que signifie le sigle POCCC résumant la fonction administrative ?',
              options: [
                'Prévoir, Organiser, Commander, Coordonner, Contrôler',
                'Produire, Optimiser, Commercialiser, Comptabiliser, Clôturer',
                'Payer, Orienter, Classer, Calculer, Certifier',
                'Planifier, Observer, Consulter, Corriger, Consolider',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Fayol définit la fonction administrative par les cinq opérations fondamentales : Prévoir, Organiser, Commander, Coordonner et Contrôler.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Taylor vs Fayol',
            stepTheme: 'Encadrement fonctionnel vs Unité de commandement',
            stepTitle: 'Repérer la divergence entre Taylor et Fayol',
            paragraphText:
              "Alors que Taylor propose un « encadrement fonctionnel » où un ouvrier peut recevoir des directives de plusieurs contremaîtres spécialisés (un par compétence technique), Fayol défend fermement le principe d'unité de commandement (un seul supérieur hiérarchique par salarié).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Sur quel principe d’organisation Henri Fayol se distingue-t-il nettement de la structure fonctionnelle à plusieurs chefs spécialisés proposée par Taylor ?',
              options: [
                'Le rejet de toute division du travail',
                'La suppression de la fonction financière',
                'Le rejet de la prévision dans l’entreprise',
                'La défense stricte du principe d’unité de commandement (un seul chef par subordonné)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Fayol critique la pluralité de chefs fonctionnels chez Taylor et érige l’unité de commandement en principe cardinal de la direction.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Max Weber',
            stepTheme: 'La bureaucratie rationnelle-légale',
            stepTitle: 'Sur quoi repose la légitimité de la bureaucratie wébérienne ?',
            paragraphText:
              "Pour Max Weber, la bureaucratie n'a pas au départ de sens péjoratif : elle désigne une organisation fondée sur l'autorité rationnelle-légale, c'est-à-dire sur le droit, des règles écrites impersonnelles, une hiérarchie claire et des compétences vérifiées, à l'opposé du favoritisme ou de l'arbitraire.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Sur quel fondement repose la légitimité de l’autorité dans l’organisation bureaucratique idéale de Max Weber ?',
              options: [
                'Sur la coutume familiale et l’hérédité',
                'Sur le droit, les règlements écrits impersonnels et la compétence (autorité rationnelle-légale)',
                'Sur le seul charisme personnel du fondateur',
                'Sur le hasard et l’improvisation',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La bureaucratie wébérienne s'appuie sur l'autorité rationnelle-légale : on obéit à la règle et à la fonction officielle, non à la personne privée.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Typologie de Weber',
            stepTheme: 'Autorité charismatique vs traditionnelle',
            stepTitle: 'Reconnaître les trois légitimités d’autorité',
            paragraphText:
              "Weber identifie aussi l'autorité traditionnelle (ex. succession dynastique dans une entreprise familiale régie par les usages anciens) et l'autorité charismatique (ex. fondateur visionnaire d'une startup dont les équipes suivent l'aura personnelle, fragile lorsqu'il part).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Dans une jeune startup, les employés suivent avec enthousiasme la fondatrice uniquement en raison de sa personnalité exceptionnelle et de sa vision inspirante. De quel type d’autorité wébérienne s’agit-il ?',
              options: [
                'Autorité traditionnelle',
                'Autorité bureaucratique',
                'Autorité charismatique',
                'Autorité financière',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'autorité fondée sur le rayonnement et les qualités exceptionnelles attribuées à une personne précise est l'autorité charismatique selon Max Weber.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : COURANTS POST-CLASSIQUES, PROCESSUS MANAGÉRIAL ET ENJEUX ACTUELS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch3',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Courants post-classiques, processus managérial, leadership et enjeux contemporains',
    summary:
      "École des relations humaines (Mayo, Maslow, Herzberg), approches systémique et de la contingence, processus managérial (PODC), motivation, leadership et enjeux contemporains (transformation digitale, agilité, RSE).",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'INTRODUCTION AU MANAGEMENT ENTD 1 (Code 1MAN3152 — Sommaire Chapitres 2 à 5)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch3_p1',
        order: 1,
        title: 'École des relations humaines, approche systémique et théorie de la contingence',
        summary:
          "Comprendre la révolution humaine d'Elton Mayo (Hawthorne), les facteurs de motivation de Herzberg, l'entreprise comme système ouvert et l'abandon du « one best way » par l'école de la contingence.",
        conceptExplanation:
          "En réaction aux excès mécanistes du taylorisme, plusieurs courants majeurs ont renouvelé la pensée managériale au XXe siècle :\n\n1) L'École des Relations Humaines (années 1930–1960) :\n   - Elton Mayo et les expériences de Hawthorne (Western Electric, 1927–1932) : en faisant varier l'éclairage d'un atelier, Mayo découvre que la productivité augmente surtout parce que les ouvrières se sentent écoutées, valorisées et soudées en groupe (effet Hawthorne). La motivation ne dépend donc pas seulement du salaire ou des conditions matérielles, mais des relations humaines, de la reconnaissance et des groupes informels.\n   - Abraham Maslow (pyramide des 5 besoins) et Douglas McGregor (théories X et Y) approfondissent cette vision humaniste.\n   - Frederick Herzberg (théorie bi-factorielle) distingue : les facteurs d'hygiène (salaire de base, conditions matérielles, sécurité — leur absence crée de l'insatisfaction, mais leur présence ne suffit pas à motiver durablement) et les facteurs moteurs/de motivation (intérêt du travail, reconnaissance, responsabilités, évolution — seuls véritables déclencheurs de motivation).\n\n2) Le courant systémique : l'organisation est un ensemble complexe de sous-systèmes interdépendants (pilotage, information, opérationnel) ouvert sur son environnement, cherchant l'équilibre par rétroaction (feedback).\n\n3) La théorie de la contingence (Burns & Stalker, Lawrence & Lorsch, Mintzberg) : rejette le mythe classique du « one best way » (une seule bonne manière de gérer universelle). La structure et le style de management les plus efficaces dépendent de facteurs de contingence : la taille, l'âge, la technologie, la stratégie et la stabilité de l'environnement (structure mécaniste en environnement stable vs structure organique/souple en environnement turbulent).",
        formulas: [
          {
            name: 'Théorie bi-factorielle de Herzberg',
            formula: 'Facteurs d’hygiène (évitent l’insatisfaction)  ≠  Facteurs moteurs (créent la vraie motivation)',
            note: 'Enrichir les tâches et responsabiliser active les facteurs moteurs.',
          },
        ],
        keyRule:
          "Elton Mayo (Hawthorne) = la reconnaissance et le groupe social stimulent la productivité. Herzberg = hygiène (évite le mécontentement) vs facteurs moteurs (créent la motivation). Contingence = il n'y a PAS de « one best way », tout dépend du contexte !",
        workedExample: {
          title: 'Appliquer Herzberg et la contingence à une équipe de développeurs IT',
          statement:
            "Une entreprise tech d'Abidjan augmente les salaires et rénove les bureaux climatisés, mais ses développeurs restent peu engagés. Par ailleurs, son environnement technologique (IA, cloud) évolue très vite. Quel diagnostic tirer selon Herzberg et Burns & Stalker ?",
          methodSteps: [
            "Étape 1 (Diagnostic Herzberg) : Salaire et bureaux climatisés sont des facteurs d'hygiène — ils suppriment l'insatisfaction, mais ne créent pas de motivation intrinsèque. Il faut activer des facteurs moteurs : autonomie sur des projets innovants, reconnaissance, montée en compétences et responsabilités.",
            "Étape 2 (Diagnostic Contingence — Burns & Stalker) : Dans un environnement technologique instable et rapide, une structure bureaucratique/mécaniste est trop lente ; il faut adopter une structure organique (souple, transversale, communication horizontale).",
          ],
          conclusion:
            "Mobiliser les facteurs moteurs de Herzberg (enrichissement du travail) au sein d'une organisation organique adaptée à la turbulence numérique.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Elton Mayo',
            stepTheme: 'Expériences de Hawthorne',
            stepTitle: 'Quelle découverte majeure résulte des études de Hawthorne ?',
            paragraphText:
              "Lors des expériences de Hawthorne à la Western Electric, Elton Mayo constate que la productivité des ouvrières s'accroît dès lors qu'on s'intéresse à elles et qu'un bon climat de groupe existe, même quand on diminue l'éclairage. C'est la naissance de l'École des Relations Humaines.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle leçon fondamentale les expériences de Hawthorne (Elton Mayo) ont-elles mise en évidence ?',
              options: [
                'Seule l’intensité de l’éclairage détermine le rendement ouvrier',
                'L’attention portée aux salariés, la reconnaissance et les relations de groupe influencent fortement la productivité',
                'Les groupes informels doivent être interdits dans l’entreprise',
                'L’argent est l’unique source de motivation au travail',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'effet Hawthorne prouve l'importance décisive des facteurs psychosociaux (considération, appartenance, cohésion du groupe) sur la performance.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Frederick Herzberg',
            stepTheme: "Facteurs d'hygiène vs Facteurs moteurs",
            stepTitle: 'Pourquoi une hausse de salaire ne suffit-elle pas toujours ?',
            paragraphText:
              "Pour Frederick Herzberg, les facteurs d'hygiène (conditions matérielles, règlement, salaire de base) empêchent l'insatisfaction, mais seuls les facteurs moteurs (accomplissement, reconnaissance, contenu enrichissant du travail, autonomie, promotion) génèrent une motivation durable.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Dans la théorie bi-factorielle de Herzberg, lequel de ces éléments est un véritable facteur MOTEUR (et non un simple facteur d’hygiène) ?',
              options: [
                'La climatisation des locaux',
                'La conformité du règlement intérieur',
                'L’intérêt du travail, l’autonomie et la reconnaissance des réalisations',
                'La propreté de la cafétéria',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Les conditions matérielles sont des facteurs d'hygiène ; la motivation intrinsèque provient des facteurs moteurs (contenu du travail, responsabilités, reconnaissance, développement).",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Théorie de la contingence',
            stepTheme: 'Abandon du « one best way »',
            stepTitle: 'Comprendre le principe central de la contingence',
            paragraphText:
              "Contrairement à l'École Classique qui cherchait un modèle universel unique (« one best way »), l'école de la contingence démontre que la meilleure organisation dépend toujours de variables de contexte : taille, âge, technologie, stratégie et stabilité de l'environnement.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quel principe central défend l’école de la contingence face à l’École Classique ?',
              options: [
                'Il n’existe pas de modèle universel unique : la structure optimale dépend du contexte (taille, technologie, environnement)',
                'Toutes les entreprises doivent copier exactement l’OST de Taylor',
                'La taille de l’entreprise n’a aucun effet sur son organisation',
                'Seules les entreprises publiques ont besoin d’une structure',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La contingence rejette le « one best way » universel : l'efficacité résulte de l'adéquation entre la structure interne et ses facteurs de contingence.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Burns & Stalker',
            stepTheme: 'Structure mécaniste vs Structure organique',
            stepTitle: 'Adapter la structure à la turbulence de l’environnement',
            paragraphText:
              "Burns et Stalker opposent la structure mécaniste (rigide, très hiérarchisée, standardisée — efficace en environnement stable) et la structure organique (souple, décentralisée, communication transversale — indispensable en environnement instable et innovant).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Dans un secteur numérique très mouvant et innovant (intelligence artificielle, fintech), quel type de structure selon Burns et Stalker est le mieux adapté ?',
              options: [
                'Une structure mécaniste rigide et ultra-centralisée',
                'Une structure féodale traditionnelle',
                'Une absence totale d’objectifs communs',
                'Une structure organique, souple et décentralisée',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les environnements turbulents exigent rapidité, adaptation et coopération horizontale, caractéristiques de la structure organique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Approche systémique',
            stepTheme: 'Rétroaction (feedback) et synergie',
            stepTitle: 'Comprendre la rétroaction dans un système ouvert',
            paragraphText:
              "L'approche systémique insiste sur deux propriétés : la synergie (le tout produit plus que la somme isolée des parties) et la rétroaction ou feedback (les résultats de sortie fournissent une information qui permet de corriger et d'ajuster les décisions futures).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Dans l’approche systémique du management, à quoi sert le mécanisme de rétroaction (feedback) ?',
              options: [
                'À utiliser les informations issues des résultats obtenus pour corriger et réguler l’action future',
                'À isoler totalement l’entreprise de ses clients',
                'À supprimer toute communication entre services',
                'À empêcher toute évolution des objectifs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La rétroaction (feedback) permet à l’organisation de s’autoréguler en comparant les résultats réels aux objectifs fixés.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse historique',
            stepTheme: 'Évolution des courants managériaux',
            stepTitle: 'Relier chaque auteur à son courant',
            paragraphText:
              "De façon synthétique : Taylor/Fayol/Weber = École Classique (rationalisation, règles) ; Mayo/Maslow/Herzberg/McGregor = Relations Humaines (facteur humain, motivation) ; Lawrence & Lorsch / Burns & Stalker / Mintzberg = Contingence et systémique (adaptation au contexte).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Quel auteur est directement associé à l’École des Relations Humaines plutôt qu’à l’École Classique ?',
              options: [
                'Max Weber',
                'Elton Mayo',
                'Frederick W. Taylor',
                'Henri Fayol',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Elton Mayo est le fondateur de l’École des Relations Humaines (expériences de Hawthorne), alors que Taylor, Fayol et Weber fondent l’École Classique.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch3_p2',
        order: 2,
        title: 'Le processus managérial (PODC), leadership et enjeux contemporains du management',
        summary:
          "Maîtriser les quatre étapes du processus managérial (Planifier, Organiser, Diriger, Contrôler), les styles de leadership modernes et les grands enjeux contemporains (transformation digitale, agilité, RSE).",
        conceptExplanation:
          "1) Le processus managérial (PODC — héritier moderne du POCCC de Fayol) s'articule en 4 phases cycliques :\n   - Planifier (P) : analyser la situation, fixer des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis) et élaborer les plans d'actions.\n   - Organiser (O) : répartir les tâches, structurer les équipes, déléguer l'autorité et allouer les ressources.\n   - Diriger / Animer (D) : communiquer la vision, motiver, mobiliser et accompagner les collaborateurs (leadership).\n   - Contrôler (C) : mesurer les résultats réels via des indicateurs de performance (KPI), comparer aux objectifs, analyser les écarts et déclencher des actions correctives.\n\n2) Leadership moderne : on distingue classiquement le leadership transactionnel (fondé sur l'échange objectifs–récompenses et le respect des procédures) et le leadership transformationnel (qui inspire par une vision forte, stimule la créativité et accompagne le changement).\n\n3) Les enjeux contemporains du management (Chapitre 5 du programme ENTD 1) :\n   - La transformation digitale : intégration du cloud, de l'IA, de la data et des outils collaboratifs ; management à distance / hybride basé sur la confiance et les résultats plutôt que le seul présentéisme.\n   - Le management agile : cycles courts itératifs, proximité client, équipes pluridisciplinaires autonomes pour s'adapter vite aux incertitudes.\n   - La Responsabilité Sociétale des Entreprises (RSE) et le développement durable : concilier performance économique, équité sociale et préservation environnementale (triple bottom line : Profit, People, Planet), ainsi que la gestion de la diversité et de l'éthique.",
        formulas: [
          {
            name: 'Cycle du processus managérial (PODC)',
            formula: 'Planifier (objectifs SMART) → Organiser (ressources) → Diriger (motiver) → Contrôler (KPI & corrections)',
            note: 'Cycle continu bouclé par le contrôle et les actions correctives.',
          },
          {
            name: 'Critères d’un objectif SMART',
            formula: 'Spécifique · Mesurable · Atteignable · Réaliste · Temporellement défini',
            note: 'Permet un suivi objectif lors de la phase de contrôle.',
          },
        ],
        keyRule:
          "PODC = Planifier (objectifs SMART), Organiser (structurer), Diriger (motiver/animer), Contrôler (mesurer les écarts et corriger). Enjeux contemporains = Digitalisation, Agilité, Management hybride et RSE (économique, social, environnemental).",
        workedExample: {
          title: "Application du cycle PODC au lancement d'une plateforme e-commerce à Abidjan",
          statement:
            "Un manager doit lancer en 6 mois une application de vente en ligne avec un objectif de 5 000 utilisateurs actifs. Illustrer chacune des 4 étapes du processus PODC et formuler un objectif SMART.",
          methodSteps: [
            "Étape 1 (Planifier — objectif SMART) : « Atteindre 5 000 utilisateurs actifs mensuels en Côte d'Ivoire d'ici 6 mois » (Spécifique, Mesurable = 5 000, Atteignable, Réaliste, Temporel = 6 mois) et établir le calendrier et le budget.",
            "Étape 2 (Organiser) : Constituer une équipe agile (développeurs, designer UX, marketing digital), répartir les rôles et allouer le budget publicitaire.",
            "Étape 3 (Diriger) : Mobiliser l'équipe par des points hebdomadaires, partager la vision client et lever les blocages techniques.",
            "Étape 4 (Contrôler) : Suivre chaque mois le tableau de bord KPI (téléchargements, taux d'activation, coût d'acquisition) et ajuster les campagnes si l'objectif est en retard.",
          ],
          conclusion:
            "Le cycle PODC transforme une ambition générale en résultats mesurables et pilotables en temps réel.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Processus PODC',
            stepTheme: 'Les 4 fonctions du manager',
            stepTitle: 'Maîtriser l’ordre et le sens du cycle PODC',
            paragraphText:
              "Le processus managérial moderne se résume en quatre fonctions indissociables : Planifier (fixer objectifs et stratégies), Organiser (structurer tâches et ressources), Diriger (motiver et guider les équipes) et Contrôler (évaluer les performances et corriger les écarts).",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'À quelle étape du processus managérial (PODC) correspond la mesure des résultats par des indicateurs (KPI) suivie de la mise en place d’actions correctives ?',
              options: [
                'Planifier',
                'Organiser',
                'Contrôler',
                'Recruter',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La phase de Contrôle compare les réalisations aux objectifs planifiés à l’aide de KPI afin de déclencher des corrections si nécessaire.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Objectif SMART',
            stepTheme: 'Formuler un objectif opérationnel',
            stepTitle: 'Reconnaître un véritable objectif SMART',
            paragraphText:
              "Dans la phase de planification, un bon objectif doit être SMART : Spécifique (précis), Mesurable (chiffré), Atteignable, Réaliste et Temporellement défini (échéance claire). Dire simplement « augmenter les ventes » n'est pas SMART.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Parmi ces formulations, laquelle constitue un objectif véritablement SMART ?',
              options: [
                'Augmenter les ventes de 15 % sur le segment PME à Abidjan d’ici le 31 décembre 2026',
                'Faire beaucoup mieux que l’année dernière dès que possible',
                'Devenir la meilleure entreprise du monde un jour',
                'Essayer de satisfaire un peu plus nos clients',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Cet objectif est Spécifique (ventes PME Abidjan), Mesurable (+15 %), Atteignable/Réaliste et Temporellement défini (31 décembre 2026).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Leadership',
            stepTheme: 'Transactionnel vs Transformationnel',
            stepTitle: 'Distinguer leadership transactionnel et leadership transformationnel',
            paragraphText:
              "Le leadership transactionnel repose sur l'échange clair entre objectifs atteints et récompenses/sanctions (primes, contrôle des écarts). Le leadership transformationnel mobilise par une vision inspirante, développe le potentiel des collaborateurs et conduit les grandes transformations.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on un style de leadership qui fédère les équipes autour d’une vision inspirante, encourage l’innovation et accompagne le changement profond ?',
              options: [
                'Leadership purement bureaucratique',
                'Leadership transformationnel',
                'Leadership coercitif',
                'Leadership comptable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le leadership transformationnel transforme la motivation et les pratiques des équipes par la vision, l’exemplarité et la stimulation intellectuelle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Transformation digitale',
            stepTheme: 'Management hybride et outils numériques',
            stepTitle: 'Comment la digitalisation fait-elle évoluer le management ?',
            paragraphText:
              "La transformation digitale (cloud, IA, télétravail, outils collaboratifs) déplace le rôle du manager : au lieu d'un contrôle visuel permanent du temps de présence, le manager contemporain pilote par la confiance, la clarté des objectifs et l'autonomie responsable.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle évolution majeure le management hybride (travail sur site et à distance) impose-t-il au style de contrôle managérial ?',
              options: [
                'Supprimer tous les objectifs chiffrés',
                'Interdire l’usage des outils numériques collaboratifs',
                'Surveiller physiquement chaque employé derrière son écran',
                'Passer d’un contrôle fondé sur le présentéisme à un pilotage par la confiance et les résultats',
              ],
              correctAnswerIndex: 3,
              explanation:
                'En mode hybride ou distant, l’efficacité repose sur des objectifs clairs, une communication structurée et un management par les résultats et la confiance.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Agilité',
            stepTheme: 'Management agile',
            stepTitle: 'Principes clés du management agile',
            paragraphText:
              "Né dans les projets numériques, le management agile privilégie des cycles courts itératifs (sprints), une collaboration étroite avec le client, des équipes pluridisciplinaires responsabilisées et l'adaptation rapide au changement plutôt que la rigidité d'un plan figé sur plusieurs années.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle pratique est caractéristique du management agile dans les organisations numériques ?',
              options: [
                'Travailler par cycles courts itératifs avec des retours fréquents des utilisateurs',
                'Attendre trois ans avant de montrer le moindre prototype au client',
                'Interdire tout dialogue entre les développeurs et le marketing',
                'Refuser toute modification d’un cahier des charges initial',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’agilité repose sur l’itération rapide, les retours utilisateurs continus et la capacité d’ajustement permanent.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'RSE',
            stepTheme: 'Responsabilité Sociétale des Entreprises',
            stepTitle: 'Les trois piliers de la RSE (développement durable)',
            paragraphText:
              "La Responsabilité Sociétale des Entreprises (RSE) traduit la contribution volontaire des entreprises au développement durable. Elle intègre simultanément trois piliers indissociables : la performance économique, le progrès social (conditions de travail, inclusion) et la protection environnementale.",
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quels sont les trois piliers équilibrés par une démarche de Responsabilité Sociétale des Entreprises (RSE) ?',
              options: [
                'Marketing, publicité et distribution',
                'Économique, social et environnemental',
                'Hiérarchie, spécialisation et bureaucratie',
                'Autofinancement, emprunt et leasing',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La RSE (Triple Bottom Line : Profit, People, Planet) concilie viabilité économique, responsabilité sociale et respect de l'environnement.",
            },
          },
        ],
      }),
    ],
  },
];
