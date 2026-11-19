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

export const OGE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : PRÉSENTATION, CULTURE, IDENTITÉ ET CLASSIFICATION DES ENTREPRISES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch1',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: "Chapitre 1 — L'entreprise : définition, approches, culture, projet et classifications",
    summary:
      "Définition, buts, objectifs et parties prenantes de l'entreprise, cinq approches d'analyse (production, répartition de la VA, système, décision, cellule sociale), culture, identité, projet d'entreprise et typologie économique en Côte d'Ivoire.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'OGE 2025-2026',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch1_p1',
        order: 1,
        title: "Définition, objectifs, parties prenantes et 5 approches d'analyse de l'entreprise",
        summary:
          "Maîtriser la définition économique de l'entreprise, ses trois objectifs, ses acteurs internes et externes, et les cinq angles d'analyse économique et sociale.",
        conceptExplanation:
          "L'entreprise est une unité économique autonome réunissant des moyens humains, matériels, financiers et technologiques (facteurs travail et capital) pour produire des biens ou services destinés à être vendus sur un marché afin d'en tirer profit. Elle poursuit trois objectifs essentiels : un objectif économique (satisfaire les besoins des clients), un objectif social (création d'emplois, amélioration du cadre de vie et des conditions de travail) et un objectif financier (rentabilité et équilibre financier).\n\nL'entreprise interagit avec de nombreuses parties prenantes :\n- Internes : actionnaires (apporteurs de capital), direction générale (politique et stratégie), cadres (encadrement et réflexion) et salariés de base (exécution).\n- Externes : clients, fournisseurs, banquiers, pouvoirs publics, syndicats et groupements professionnels (ordres professionnels gérant la déontologie comme l'ordre des médecins ou des experts-comptables ; chambres de commerce et d'industrie élues par leurs pairs).\n\nL'approche économique et sociale analyse l'entreprise sous 5 dimensions complémentaires :\n1) Unité de production : transforme des intrants (inputs : travail, capital financier, capital technique fixe/circulant, capital humain) en extrants (outputs : biens/services) en créant de la Valeur Ajoutée (VA).\n2) Unité de répartition : répartit la VA entre salariés (salaires), État/organismes sociaux (impôts, cotisations), prêteurs (intérêts), actionnaires (dividendes) et entreprise elle-même (autofinancement / cash-flow).\n3) Système : à la fois ouvert (en échange constant avec l'environnement), organisé et régulé (unités reliées par des flux autour d'un centre de commande) et finalisé (orienté vers des buts : pérennité, parts de marché, rentabilité).\n4) Centre de décision : fixe ses objectifs et arbitre face aux opportunités et menaces.\n5) Cellule sociale : communauté humaine remplissant une fonction économique (revenu) et sociale (motivation, appartenance, prestations sociales).",
        formulas: [
          {
            name: 'Création de richesse (Valeur ajoutée)',
            formula: 'Valeur Ajoutée (VA) = Production (Extrants) − Consommations intermédiaires (Capital circulant)',
            note: 'La VA est ensuite répartie entre salariés, État, prêteurs, associés et autofinancement.',
          },
        ],
        keyRule:
          "Retiens les 5 dimensions de l'approche économique et sociale : Unité de production (inputs → outputs + VA), Unité de répartition (partage de la VA), Système (ouvert, organisé, finalisé), Centre de décision et Cellule sociale.",
        workedExample: {
          title: "Analyse systémique et répartition de la richesse d'une entreprise agro-industrielle",
          statement:
            "Une entreprise ivoirienne de transformation de cacao achète des fèves (consommations intermédiaires) pour 40 000 000 FCFA, emploie 45 salariés et vend sa poudre de cacao pour 75 000 000 FCFA. Identifier son rôle comme unité de production, calculer la valeur ajoutée créée et indiquer ses bénéficiaires en tant qu'unité de répartition.",
          methodSteps: [
            "Étape 1 (Unité de production) : Elle combine travail, machines (capital fixe), fèves/énergie (capital circulant) et savoir-faire (capital humain) pour produire un extrant de 75 000 000 FCFA.",
            'Étape 2 (Calcul de la Valeur Ajoutée) : VA = 75 000 000 − 40 000 000 = 35 000 000 FCFA de richesse réellement créée.',
            "Étape 3 (Unité de répartition) : Ces 35 000 000 FCFA rémunèrent les salariés (salaires), l'État et la CNPS (impôts et cotisations), les banques (intérêts), les actionnaires (dividendes), le surplus alimentant l'autofinancement.",
          ],
          conclusion:
            "L'entreprise crée 35 000 000 FCFA de valeur ajoutée qui irrigue l'ensemble de ses parties prenantes internes et externes.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: "Objectifs de l'entreprise",
            stepTitle: 'Identifier les trois objectifs essentiels de l’entreprise',
            paragraphText:
              "Au-delà de la recherche du profit et de la pérennité, l'entreprise poursuit trois objectifs fondamentaux : économique (satisfaction des besoins clients), social (emploi, amélioration des conditions matérielles et morales) et financier (rentabilité et équilibre financier).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'À quel objectif de l’entreprise correspond la contribution à la création d’emplois et à l’amélioration des conditions de travail des salariés ?',
              options: [
                "L'objectif fiscal",
                "L'objectif social",
                "L'objectif technique",
                "L'objectif financier",
              ],
              correctAnswerIndex: 1,
              explanation:
                "La création d'emplois et l'amélioration des conditions morales et matérielles des travailleurs relèvent de l'objectif social de l'entreprise.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Parties prenantes',
            stepTheme: 'Acteurs internes et externes',
            stepTitle: 'Distinguer ordres professionnels et chambres de commerce',
            paragraphText:
              "Parmi les parties prenantes externes, les groupements professionnels comprennent les ordres (médecins, avocats, experts-comptables) qui contrôlent l'accès à la profession et la déontologie, et les chambres de commerce et d'industrie (CCI) qui forment et accompagnent les entreprises dans leurs démarches.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Parmi les acteurs suivants, lequel est une partie prenante INTERNE de l’entreprise ?',
              options: [
                'Les fournisseurs',
                'Les banquiers',
                'Les actionnaires et les cadres',
                'Les pouvoirs publics',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les parties prenantes internes sont les actionnaires, la direction générale, les cadres et les salariés de base. Fournisseurs, banquiers, clients, syndicats et pouvoirs publics sont des acteurs externes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Unité de production',
            stepTheme: 'Capital fixe vs Capital circulant',
            stepTitle: 'Classer les composantes du capital technique',
            paragraphText:
              "En tant qu'unité de production, l'entreprise distingue dans le capital technique : le capital fixe (équipements durables : machines, bâtiments) et le capital circulant ou consommations intermédiaires (matières premières, énergie, transport, publicité incorporés ou détruits dans le processus productif).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Dans la classification des intrants (facteurs de production), les matières premières et l’énergie consommées lors de la fabrication relèvent :',
              options: [
                'Du capital circulant (consommations intermédiaires)',
                'Du capital fixe',
                'Du capital humain',
                'Des extrants (outputs)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les matières premières, produits semi-finis et énergie incorporés dans le processus de production constituent le capital circulant (consommations intermédiaires).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Unité de répartition',
            stepTheme: 'Partage de la Valeur Ajoutée',
            stepTitle: 'Qui reçoit les dividendes, intérêts et autofinancement ?',
            paragraphText:
              "La valeur ajoutée (richesse créée) est répartie entre les salariés (salaires), l'État et les collectivités (impôts et taxes), les prêteurs (intérêts), les associés/actionnaires (dividendes), et l'entreprise elle-même qui conserve un surplus (cash-flow) pour son autofinancement.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Lors de la répartition de la valeur ajoutée, quelle rémunération perçoivent les actionnaires (associés) pour leur apport en capital ?',
              options: [
                'Des salaires',
                'Des impôts directs',
                'Des intérêts bancaires',
                'Des dividendes',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les prêteurs (banques) perçoivent des intérêts, tandis que les associés/actionnaires propriétaires du capital reçoivent des dividendes.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Approche systémique',
            stepTheme: 'Système ouvert, organisé et finalisé',
            stepTitle: 'Pourquoi dit-on que l’entreprise est un système finalisé ?',
            paragraphText:
              "Selon l'approche systémique, l'entreprise est : (1) un système ouvert (interactions permanentes avec l'environnement), (2) un système organisé et régulé (unités reliées par des flux autour d'un centre de commande), et (3) un système finalisé parce qu'elle est créée pour atteindre des buts précis (profit, pérennité, croissance, légitimité sociale).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Que signifie précisément l’expression « l’entreprise est un système finalisé » ?',
              options: [
                "Elle est créée en vue de réaliser des buts déterminés qui guident ses choix et décisions",
                'Elle fonctionne en circuit fermé sans contact avec son environnement',
                'Elle cesse automatiquement d’exister après un an d’activité',
                'Elle ne comporte aucun organe de commande',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Un système finalisé poursuit des finalités précises (pérennité, profit, croissance, parts de marché) qui orientent ses décisions stratégiques.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cellule sociale',
            stepTheme: 'Fonctions vis-à-vis du personnel',
            stepTitle: 'Distinguer les deux fonctions envers les salariés',
            paragraphText:
              "En tant que cellule sociale (communauté humaine), l'entreprise remplit deux fonctions auprès de son personnel : une fonction économique (verser un revenu permettant de subvenir aux besoins) et une fonction sociale (offrir motivation, communication, sentiment d'utilité et prestations sociales).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Dans l’approche de l’entreprise comme cellule sociale, quelle est sa fonction sociale vis-à-vis des travailleurs ?',
              options: [
                'Maximiser uniquement les dividendes des actionnaires',
                'Permettre aux salariés d’être motivés, de communiquer, de se sentir utiles et d’exprimer leurs capacités',
                'Remplacer entièrement l’État dans la collecte des impôts',
                'Fixer les prix sur le marché mondial',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La fonction économique procure un revenu ; la fonction sociale favorise l'épanouissement, la communication, la motivation et l'intégration dans la communauté de travail.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_oge_ch1_p2',
        order: 2,
        title: "Culture, identité, projet d'entreprise et classification des entreprises",
        summary:
          "Identifier les 5 composantes de la culture d'entreprise, ses effets ambivalents, l'identité et le projet d'entreprise, ainsi que les seuils officiels de classification des PME en Côte d'Ivoire.",
        conceptExplanation:
          "Au-delà de ses ressources matérielles, la performance d'une entreprise dépend de trois leviers immatériels :\n1) La culture d'entreprise : ensemble de valeurs, croyances et pratiques professionnelles partagées par tous les membres. Elle repose sur une mémoire collective composée de 5 éléments : les héros (pionniers, modèles), les mythes (anecdotes fondatrices), les valeurs (éthique, esprit d'équipe), les symboles (rites, uniformes, fêtes, codes) et les interdits/tabous. La culture est ambivalente : elle est un facteur de performance (cohésion, motivation, efficacité stratégique), mais peut aussi devenir un facteur de résistance au changement (inertie face à l'innovation).\n2) L'identité de l'entreprise : ensemble des caractères constitutifs de sa spécificité (logo, codes graphiques, locaux, équipements, dirigeants, produits). Elle remplit trois fonctions : publicité, prestige et différenciation.\n3) Le projet d'entreprise : document volontariste prolongeant la culture, exposant les ambitions économiques et sociales futures et les moyens pour y parvenir. Il comporte 3 volets : la mission, les valeurs et les plans d'actions. Ses limites sont l'exigence d'adhésion totale des salariés et le risque d'être parfois irréaliste.\n\nEnfin, les entreprises sont classées selon trois critères économiques (taille, secteur/objet, domaine) et leur statut juridique. En Côte d'Ivoire (critère taille/PME — salariés à temps plein déclarés à la CNPS) :\n- Micro-entreprise : 0 à 9 salariés et CA ≤ 30 millions FCFA ;\n- Petite entreprise : 10 à 49 salariés et 30 millions < CA ≤ 150 millions FCFA ;\n- Moyenne entreprise : 50 à 200 salariés et 150 millions < CA ≤ 1 milliard FCFA ;\n- Grande entreprise : au-delà de 200 salariés ou CA > 1 milliard FCFA.",
        formulas: [
          {
            name: "Seuils officiels des PME en Côte d'Ivoire",
            formula: 'Micro : 0–9 sal. (≤ 30 M) | Petite : 10–49 sal. (≤ 150 M) | Moyenne : 50–200 sal. (≤ 1 Md FCFA)',
            note: 'Les salariés pris en compte doivent être à temps plein, sous contrat et déclarés à la CNPS.',
          },
        ],
        keyRule:
          "Culture = 5 piliers (héros, mythes, valeurs, symboles, tabous) ; Projet d'entreprise = 3 volets (mission, valeurs, plans d'actions) ; PME ivoiriennes = 30 M (micro), 150 M (petite), 1 Md FCFA (moyenne).",
        workedExample: {
          title: "Diagnostic culturel et classification d'une entreprise numérique ivoirienne",
          statement:
            "La société IvoireCloud emploie 32 salariés à temps plein déclarés à la CNPS et réalise un chiffre d'affaires annuel de 110 millions FCFA. Chaque vendredi, les équipes portent un polo aux couleurs du logo et célèbrent les « pionniers » ayant décroché le premier contrat bancaire. Classer cette entreprise selon sa taille et identifier les éléments de culture et d'identité présents.",
          methodSteps: [
            "Étape 1 (Classification par taille) : Effectif = 32 salariés (entre 10 et 49) et CA = 110 M FCFA (compris entre 30 M et 150 M FCFA) → c'est une Petite Entreprise (PE).",
            "Étape 2 (Éléments de culture d'entreprise) : Les « pionniers » = héros ; l'histoire du premier contrat bancaire = mythe ; le port du polo le vendredi = symbole / rite.",
            "Étape 3 (Élément d'identité) : Le logo et les couleurs graphiques relèvent de l'identité de l'entreprise (fonctions de différenciation et de prestige).",
          ],
          conclusion:
            "IvoireCloud est une Petite Entreprise (10–49 salariés, CA ≤ 150 M FCFA) dotée d'une culture forte (héros, mythe, rite) et d'une identité visuelle structurée.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: "Culture d'entreprise",
            stepTheme: 'Les 5 composantes culturelles',
            stepTitle: 'Reconnaître héros, mythes, valeurs, symboles et tabous',
            paragraphText:
              "La culture d'entreprise s'appuie sur cinq éléments constitutifs : les héros (modèles/pionniers), les mythes (anecdotes fondatrices durables), les valeurs (croyances guidant les comportements), les symboles (rites, uniformes, fêtes, codes de conduite) et les interdits/tabous.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Dans la culture d’entreprise, comment appelle-t-on les anecdotes fondatrices qui circulent durablement (comme les circonstances de la création ou l’obtention du premier grand marché) ?',
              options: [
                'Les tabous',
                'Les symboles',
                'Les mythes',
                'Les plans d’actions',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les mythes sont les histoires, maximes et anecdotes fondatrices transmises dans la mémoire collective de l’entreprise.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Double effet',
            stepTheme: 'Performance vs Résistance au changement',
            stepTitle: 'Pourquoi la culture peut-elle freiner une entreprise ?',
            paragraphText:
              "Bien qu'elle renforce la cohésion, la solidarité et la motivation, une culture d'entreprise trop rigide peut devenir un facteur de blocage et d'inertie (résistance au changement) lorsqu'il faut adopter de nouvelles technologies ou réorganiser l'entreprise.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle limite majeure présente une culture d’entreprise très ancrée face aux mutations technologiques ?',
              options: [
                'Elle peut constituer un facteur d’inertie et de résistance au changement',
                'Elle empêche l’entreprise de déposer un logo',
                'Elle interdit toute embauche de nouveaux cadres',
                'Elle supprime les obligations fiscales de l’entreprise',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La culture d'entreprise est ambivalente : source de cohésion et de performance, mais aussi source potentielle de blocage et de résistance face aux innovations.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Identité',
            stepTheme: 'Éléments et fonctions de l’identité',
            stepTitle: 'Connaître les trois fonctions de l’identité d’entreprise',
            paragraphText:
              "L'identité d'une entreprise (logotype, charte graphique, locaux, équipements, dirigeants, produits) exprime sa spécificité à l'interne comme à l'externe. Elle remplit trois fonctions : la publicité, l'expression du prestige de l'entreprise et la différenciation face aux concurrents.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelles sont les trois fonctions de l’identité de l’entreprise ?',
              options: [
                'Recrutement, comptabilité et fiscalité',
                'Publicité, prestige et différenciation',
                'Production, distribution et autofinancement',
                'Centralisation, délégation et contrôle',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'identité (logo, codes graphiques, locaux, produits...) remplit trois fonctions clés : la publicité, l'expression du prestige et la différenciation.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: "Projet d'entreprise",
            stepTheme: 'Les 3 volets du projet d’entreprise',
            stepTitle: 'Structurer un projet d’entreprise',
            paragraphText:
              "Le projet d'entreprise est un document volontariste prolongeant la culture, qui expose les ambitions économiques et sociales futures. Il comprend trois volets : la mission (rôle que l'entreprise veut remplir), les valeurs et les plans d'actions (liste d'engagements concrets).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quel intérêt particulier le projet d’entreprise présente-t-il lors d’une fusion entre entreprises de nationalités différentes ?',
              options: [
                'Il dispense les entreprises de publier un bilan',
                'Il remplace le contrat de travail des salariés',
                'Il garantit une exemption de TVA',
                'Il facilite le brassage de cultures différentes autour de valeurs et d’objectifs communs',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Le projet d'entreprise fédère le personnel, modélise les comportements et facilite l'intégration culturelle lors des fusions internationales.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Classification PME',
            stepTheme: "Seuils en Côte d'Ivoire",
            stepTitle: 'Classer une entreprise selon effectif et chiffre d’affaires',
            paragraphText:
              "En Côte d'Ivoire, la classification officielle des PME repose sur l'effectif (salariés temps plein déclarés à la CNPS) et le CA : Micro-entreprise (0–9 sal., CA ≤ 30 M), Petite entreprise (10–49 sal., 30 M < CA ≤ 150 M), Moyenne entreprise (50–200 sal., 150 M < CA ≤ 1 milliard FCFA).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q5',
              type: 'mcq',
              prompt:
                "Selon la classification officielle des PME en Côte d’Ivoire, dans quelle catégorie classe-t-on une entreprise ivoirienne employant 85 salariés déclarés à la CNPS pour un chiffre d'affaires annuel de 600 millions FCFA ?",
              options: [
                'Micro-entreprise',
                'Petite entreprise',
                'Moyenne entreprise',
                'Grande entreprise',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Entre 50 et 200 salariés et un CA compris entre 150 millions et 1 milliard FCFA, l’entreprise est une Moyenne entreprise.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Condition CNPS',
            stepTheme: 'Décompte de l’effectif des PME',
            stepTitle: 'Quels travailleurs comptent dans l’effectif PME ?',
            paragraphText:
              "Dans le décompte officiel de la taille d'une PME, tous les intervenants ne sont pas retenus : seuls les salariés engagés à temps plein, titulaires d'un contrat de travail et déclarés à la Caisse Nationale de Prévoyance Sociale (CNPS) sont comptabilisés.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Dans la classification des PME en Côte d’Ivoire, quelle condition doivent remplir les salariés pris en compte dans l’effectif ?',
              options: [
                'Être engagés à temps plein, titulaires d’un contrat de travail et déclarés à la CNPS',
                'Être exclusivement de nationalité ivoirienne et cadres supérieurs',
                'Travailler uniquement en tant que prestataires journaliers non déclarés',
                'Détenir des actions de l’entreprise',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le cours précise explicitement : temps plein + contrat de travail + déclaration à la CNPS.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : ENVIRONNEMENT, DIAGNOSTIC ET STRUCTURES ORGANISATIONNELLES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch2',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: "Chapitre 2 — L'entreprise dans son environnement et les structures organisationnelles",
    summary:
      "Micro-environnement (5 forces de Porter) et macro-environnement (PESTEL), diagnostic contrainte / risque / opportunité, structures fonctionnelle, divisionnelle et matricielle, centralisation vs décentralisation et stratégie de franchise.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'OGE 2025-2026 & Corrigé Examen Session 1 2025-2026',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch2_p1',
        order: 1,
        title: 'Micro-environnement, macro-environnement (PESTEL) et diagnostic stratégique',
        summary:
          "Distinguer macro-environnement (PESTEL) et micro-environnement (5 forces de Porter) et qualifier une contrainte interne, un risque externe et une opportunité sur un cas pratique d'examen.",
        conceptExplanation:
          "En tant que système ouvert, l'entreprise évolue dans un environnement à deux niveaux :\n1) Le macro-environnement (environnement global) : ensemble des grandes forces sociétales sur lesquelles l'entreprise a peu de prise directe. On l'analyse grâce à la grille PESTEL :\n   - Politique (stabilité gouvernementale, politique fiscale) ;\n   - Économique (croissance, inflation, prix du carburant, pouvoir d'achat) ;\n   - Socioculturel (démographie, habitudes de consommation) ;\n   - Technologique (innovations, digitalisation, e-commerce) ;\n   - Écologique (normes environnementales, climat) ;\n   - Légal (droit du travail, réglementations sectorielles).\n\n2) Le micro-environnement (environnement immédiat ou concurrentiel) : regroupe les acteurs proches qui influencent directement l'activité quotidienne de l'entreprise : clients, fournisseurs, concurrents, intermédiaires commerciaux et partenaires. Il s'analyse notamment par le modèle des 5 forces de Porter (rivalité entre concurrents, pouvoir de négociation des clients, pouvoir des fournisseurs, menace des nouveaux entrants, menace des produits de substitution).\n\nEn diagnostic stratégique (cas pratique de l'Examen OGE 2025-2026), il faut savoir qualifier précisément chaque événement :\n- Contrainte (facteur interne limitant) : paralyse l'organisation de l'intérieur (ex. grève des chauffeurs).\n- Risque / Menace (facteur externe défavorable) : alourdit les coûts ou réduit les parts de marché (ex. hausse du prix du carburant, concurrence accrue).\n- Opportunité (facteur externe favorable à saisir) : ouvre un nouveau potentiel de croissance (ex. essor du commerce électronique).",
        formulas: [
          {
            name: 'Grille d’analyse du macro-environnement',
            formula: 'PESTEL = Politique · Économique · Social · Technologique · Écologique · Légal',
            note: 'S’applique à l’environnement global ; le micro-environnement utilise les 5 forces de Porter.',
          },
        ],
        keyRule:
          "PESTEL = Macro-environnement (global). 5 forces de Porter = Micro-environnement (clients, fournisseurs, concurrents). Contrainte = interne ; Risque et Opportunité = externes.",
        workedExample: {
          title: "Cas pratique de l'Examen OGE 2025-2026 — L'entreprise de livraison",
          statement:
            "Une entreprise de livraison fait face à : (1) hausse du carburant, (2) concurrence accrue, (3) grève des chauffeurs, (4) développement du commerce électronique. Identifier une contrainte, un risque et une opportunité, puis proposer deux stratégies d'adaptation.",
          methodSteps: [
            "Étape 1 (Contrainte interne) : La grève des chauffeurs — facteur interne qui paralyse directement l'activité opérationnelle et provoque retards et perte de revenus.",
            "Étape 2 (Risque / menace externe) : La hausse du carburant (ou la concurrence accrue) — pèse sur les charges d'exploitation et comprime les marges bénéficiaires.",
            "Étape 3 (Opportunité externe) : Le développement du commerce électronique — crée une forte demande de livraisons dernier kilomètre à capter.",
            "Étape 4 (Stratégies d'adaptation) : (1) Nouer des partenariats/contrats avec les plateformes e-commerce pour sécuriser le volume et optimiser les tournées groupées ; (2) Moderniser la flotte (véhicules hybrides/électriques économes) et digitaliser le suivi en temps réel pour se différencier.",
          ],
          conclusion:
            "Contrainte = grève des chauffeurs ; Risque = hausse du carburant ; Opportunité = essor du e-commerce ; Réponse = partenariats e-commerce + flotte moderne et digitalisation.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'PESTEL',
            stepTheme: 'Macro-environnement global',
            stepTitle: 'Quel niveau d’environnement le modèle PESTEL analyse-t-il ?',
            paragraphText:
              "Le modèle PESTEL (Politique, Économique, Social, Technologique, Écologique, Légal) est l'outil de référence pour analyser le macro-environnement (environnement global) dans lequel évoluent toutes les entreprises d'un pays ou d'un secteur.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q1',
              type: 'mcq',
              prompt: "Le modèle PESTEL analyse (Question 1 — Examen OGE 2025-2026) :",
              options: [
                'Le climat social interne uniquement',
                "L'environnement global (macro-environnement)",
                'La solvabilité comptable des fournisseurs',
                "L'organigramme hiérarchique de l'entreprise",
              ],
              correctAnswerIndex: 1,
              explanation:
                "PESTEL analyse les six grandes dimensions du macro-environnement (environnement global) qui s'imposent à l'entreprise.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Micro-environnement',
            stepTheme: 'Acteurs proches et 5 forces de Porter',
            stepTitle: 'Identifier les acteurs du micro-environnement',
            paragraphText:
              "Le micro-environnement (ou environnement immédiat) rassemble tous les acteurs en relation directe avec l'entreprise : clients, fournisseurs, concurrents, intermédiaires commerciaux et partenaires. Il s'analyse notamment grâce aux 5 forces de Porter.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Lequel de ces éléments appartient au micro-environnement (et non au macro-environnement) de l’entreprise ?',
              options: [
                'La réforme nationale du Code du travail',
                'Le taux d’inflation national',
                'Les clients, fournisseurs et concurrents directs',
                'Le réchauffement climatique',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Clients, fournisseurs, concurrents et intermédiaires forment le micro-environnement immédiat ; inflation, loi et climat relèvent du macro-environnement (PESTEL).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Cas pratique',
            stepTheme: 'Qualification Contrainte vs Risque',
            stepTitle: 'Distinguer contrainte interne et menace externe',
            paragraphText:
              "Dans le cas pratique de l'examen OGE 2025-2026 (entreprise de livraison), la grève des chauffeurs est une contrainte INTERNE (elle provient du personnel de l'entreprise), tandis que la hausse du carburant et la concurrence accrue sont des risques/menaces EXTERNES.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q3',
              type: 'mcq',
              prompt:
                "Dans le cas de l'entreprise de livraison (Examen OGE 2025-2026), quelle situation constitue une contrainte INTERNE ?",
              options: [
                'La grève des chauffeurs de l’entreprise',
                'La hausse mondiale du prix du carburant',
                'Le développement du commerce électronique',
                'L’arrivée de nouveaux concurrents sur le marché',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La grève des chauffeurs est un blocage interne issu des salariés de l'entreprise elle-même ; les trois autres facteurs proviennent de l'environnement externe.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Opportunité',
            stepTheme: 'Transformer une tendance en levier de croissance',
            stepTitle: 'Identifier une opportunité externe dans PESTEL',
            paragraphText:
              "L'essor du commerce électronique (dimension Technologique et Sociale de PESTEL) représente une opportunité majeure pour un prestataire logistique, car les boutiques en ligne et marketplaces génèrent un flux croissant de colis à livrer.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'À quelle dimension de l’analyse PESTEL correspond prioritairement l’essor des applications mobiles et du commerce électronique ?',
              options: [
                'Politique',
                'Écologique',
                'Légale',
                'Technologique',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Les innovations numériques, applications mobiles et plateformes e-commerce relèvent en premier lieu de la dimension Technologique (T) du PESTEL.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: '5 forces de Porter',
            stepTheme: 'Analyse de l’intensité concurrentielle',
            stepTitle: 'Connaître les cinq forces concurrentielles',
            paragraphText:
              "Le modèle de Michael Porter évalue l'attractivité d'un secteur via 5 forces : l'intensité de la rivalité entre concurrents existants, le pouvoir de négociation des clients, le pouvoir de négociation des fournisseurs, la menace des nouveaux entrants et la menace des produits de substitution.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Laquelle de ces propositions NE fait PAS partie des 5 forces concurrentielles de Michael Porter ?',
              options: [
                'Le pouvoir de négociation des fournisseurs',
                'La menace des produits de substitution',
                'La structure du capital social de l’entreprise',
                'La menace des nouveaux entrants',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La structure du capital social est une donnée interne et financière ; les 5 forces de Porter portent sur la rivalité, les clients, les fournisseurs, les nouveaux entrants et les substituts.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Stratégie',
            stepTheme: 'Adaptation stratégique',
            stepTitle: 'Choisir une stratégie cohérente face à la hausse du carburant',
            paragraphText:
              "Face à la hausse du carburant et à la concurrence accrue, deux réponses stratégiques complémentaires sont recommandées : optimiser les tournées via des contrats e-commerce (livraisons groupées) et investir dans des véhicules économes (hybrides/électriques) couplés au suivi numérique en temps réel.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle action stratégique répond simultanément à la hausse du carburant et à la concurrence accrue dans la livraison ?',
              options: [
                'Augmenter les délais de livraison pour rouler moins souvent',
                'Moderniser la flotte (véhicules moins énergivores) et optimiser les tournées par un outil numérique',
                'Supprimer tout suivi client pour réduire les coûts informatiques',
                'Refuser les contrats avec les plateformes e-commerce',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La modernisation de la flotte réduit la facture énergétique et l'optimisation/suivi digital améliore la productivité ainsi que la qualité perçue face aux concurrents.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_oge_ch2_p2',
        order: 2,
        title: 'Structures organisationnelles, centralisation/décentralisation et stratégie de franchise',
        summary:
          "Comparer les grandes structures d'entreprise (fonctionnelle, divisionnelle, matricielle), maîtriser l'arbitrage centralisation/décentralisation et expliquer le mécanisme contractuel de la franchise.",
        conceptExplanation:
          "La structure organisationnelle (représentée par un organigramme) définit la répartition des tâches, des pouvoirs et des mécanismes de coordination. Les principaux modèles sont :\n1) La structure fonctionnelle : découpe l'entreprise par grandes fonctions spécialisées (Production, Marketing, Finance, RH). Ses deux avantages clés (Examen OGE 2025-2026) sont la spécialisation des compétences (regroupement d'experts) et la clarté des responsabilités par service. Limite : cloisonnement entre fonctions.\n2) La structure divisionnelle : découpe l'entreprise en divisions autonomes par produit, marché ou zone géographique. Elle est particulièrement adaptée aux grandes entreprises diversifiées gérant plusieurs produits ou marchés.\n3) La structure matricielle : croise un axe fonctionnel et un axe projet/produit (double commandement), adaptée aux projets complexes mais pouvant créer des conflits d'autorité.\n\nPar ailleurs, le degré de partage du pouvoir oppose :\n- La centralisation : les décisions sont concentrées au sommet hiérarchique (direction générale). Avantage : cohérence d'ensemble ; limite : lenteur et faible réactivité terrain.\n- La décentralisation : le pouvoir de décision est délégué aux niveaux inférieurs ou unités opérationnelles. Avantage : réactivité, autonomie et motivation ; limite : nécessite un contrôle rigoureux pour préserver la cohérence stratégique.\n\nEnfin, parmi les stratégies de développement commercial, la franchise est un accord contractuel par lequel un franchiseur concède à un franchisé (juridiquement indépendant) le droit d'exploiter sa marque, son savoir-faire et ses méthodes commerciales moyennant des redevances (royalties). Elle permet une croissance rapide sans engager ses propres capitaux (ex. McDonald's, Yango).",
        formulas: [
          {
            name: 'Arbitrage structurel',
            formula: 'Mono-activité ⇒ Structure fonctionnelle  |  Multi-produits / Multi-marchés ⇒ Structure divisionnelle',
            note: 'La structure doit toujours s’adapter à la stratégie et à la taille de l’entreprise (Chandler).',
          },
        ],
        keyRule:
          "Fonctionnelle = spécialisation + clarté des responsabilités. Divisionnelle = plusieurs produits ou marchés autonomes. Franchise = marque + savoir-faire contre royalties (franchisé juridiquement indépendant).",
        workedExample: {
          title: "Choix de structure et d'expansion pour un groupe ouest-africain",
          statement:
            "Une entreprise ivoirienne de restauration rapide réussit à Abidjan avec une structure fonctionnelle. Elle souhaite lancer deux nouvelles gammes distinctes (traiteur événementiel et plats surgelés) et s'implanter dans 5 pays de la CEDEAO sans immobiliser tous ses capitaux. Quelle structure interne et quelle stratégie d'expansion recommander ?",
          methodSteps: [
            "Étape 1 (Évolution de la structure) : Le passage à plusieurs métiers/produits et zones géographiques rend la structure fonctionnelle trop rigide ; il faut adopter une structure divisionnelle (une division par gamme ou par pays).",
            'Étape 2 (Mode de gouvernance) : Introduire une décentralisation contrôlée afin que chaque directeur de division réagisse vite aux spécificités locales tout en respectant les standards du siège.',
            "Étape 3 (Stratégie d'expansion internationale) : Utiliser la franchise : des partenaires locaux indépendants financent leurs points de vente et paient des royalties en échange de la marque et du savoir-faire.",
          ],
          conclusion:
            'Structure divisionnelle décentralisée en interne, couplée à une stratégie de franchise pour accélérer le déploiement régional.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Structure divisionnelle',
            stepTheme: 'Adaptation à la diversification',
            stepTitle: 'Quand choisir une structure divisionnelle ?',
            paragraphText:
              "Dans une structure divisionnelle, chaque division gère de manière quasi autonome un produit, une gamme ou une zone géographique (avec ses propres ressources). Elle est donc idéale pour les grandes entreprises diversifiées opérant sur plusieurs produits ou marchés.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'La structure divisionnelle est particulièrement adaptée (Question 2 — Examen OGE 2025-2026) :',
              options: [
                'Aux micro-entreprises familiales mono-produit',
                'Aux entreprises gérant plusieurs produits ou marchés distincts',
                'Uniquement aux administrations sans but lucratif',
                'Aux organisations qui refusent toute autonomie des unités',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque division pilote un produit ou un marché de manière autonome : cette structure convient parfaitement aux entreprises diversifiées.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Structure fonctionnelle',
            stepTheme: 'Avantages majeurs',
            stepTitle: 'Citer les deux avantages de la structure fonctionnelle',
            paragraphText:
              "La structure fonctionnelle regroupe les activités par métiers (marketing, finance, production, RH). Ses deux avantages essentiels (corrigé d'examen OGE) sont : la spécialisation des compétences (expertise élevée) et la clarté des responsabilités au sein de chaque service.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quels sont les deux avantages classiques de la structure fonctionnelle ?',
              options: [
                'Spécialisation des compétences et clarté des responsabilités par fonction',
                'Absence totale de hiérarchie et double commandement',
                'Autonomie financière de chaque produit et duplication des services',
                'Suppression des chefs de service et décisions aléatoires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La structure fonctionnelle excelle par la spécialisation technique des experts et la délimitation claire des missions par département.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Structure matricielle',
            stepTheme: 'Double ligne hiérarchique',
            stepTitle: 'Identifier le risque principal de la structure matricielle',
            paragraphText:
              "La structure matricielle croise deux autorités : un responsable fonctionnel (métier) et un chef de projet/produit. Si elle favorise la transversalité et l'innovation, elle remet en cause le principe d'unité de commandement et peut générer des conflits de priorité.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quel inconvénient caractérise principalement une structure matricielle ?',
              options: [
                'Elle interdit toute collaboration entre métiers',
                'Elle ne permet pas de gérer des projets innovants',
                'Elle expose les salariés à un double commandement pouvant créer des conflits d’autorité',
                'Elle supprime complètement les départements fonctionnels',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans une matrice, un collaborateur dépend simultanément d’un chef fonctionnel et d’un chef de projet, ce qui peut entraîner des tensions de priorités.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Pouvoir de décision',
            stepTheme: 'Centralisation vs Décentralisation',
            stepTitle: 'Comparer centralisation et décentralisation',
            paragraphText:
              "La centralisation concentre les décisions au sommet (direction générale) : forte cohérence, mais réactivité plus lente. La décentralisation délègue la prise de décision vers les unités opérationnelles : meilleure réactivité et autonomie, mais nécessité d'un contrôle rigoureux pour éviter l'éclatement stratégique.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quel est le principal avantage de la décentralisation du pouvoir de décision ?',
              options: [
                'Concentrer toutes les signatures entre les mains du seul PDG',
                'Supprimer tout besoin de contrôle de gestion',
                'Réduire l’autonomie des managers de terrain',
                'Accroître la réactivité locale et l’autonomie des unités opérationnelles',
              ],
              correctAnswerIndex: 3,
              explanation:
                'En rapprochant la décision du terrain, la décentralisation accélère la réactivité et responsabilise les cadres, tout en nécessitant un suivi de cohérence.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Stratégie de franchise',
            stepTheme: 'Contrat, savoir-faire et royalties',
            stepTitle: 'Expliquer le fonctionnement de la franchise',
            paragraphText:
              "La franchise est un contrat par lequel un franchiseur cède à un franchisé juridiquement indépendant le droit d'exploiter sa marque, son savoir-faire et ses méthodes commerciales, en échange d'une redevance (royalties). Elle permet une expansion rapide avec un investissement en capital limité (ex. McDonald's, Yango).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans un contrat de franchise, quelle est la situation juridique du franchisé par rapport au franchiseur ?',
              options: [
                'Il est salarié du franchiseur sans autonomie juridique',
                'Il reste une entreprise juridiquement indépendante tout en respectant les normes du franchiseur',
                'Il devient automatiquement propriétaire de la marque mondiale',
                'Il ne verse aucune redevance ni droit d’entrée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le franchisé est un entrepreneur juridiquement indépendant qui paie des royalties pour exploiter la marque et le savoir-faire selon les standards du franchiseur.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Organigramme',
            stepTheme: 'Rôle de l’organigramme',
            stepTitle: 'Ce que montre (et ne montre pas) un organigramme',
            paragraphText:
              "L'organigramme est la représentation graphique de la structure formelle de l'entreprise : il visualise les postes, services et liens hiérarchiques ou fonctionnels. En revanche, il ne reflète pas les relations informelles ni la culture réelle au quotidien.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle information un organigramme permet-il de lire directement ?',
              options: [
                'Le chiffre d’affaires mensuel par client',
                'Les relations amicales informelles entre collègues',
                'La répartition formelle des services et les liens hiérarchiques d’autorité',
                'Le montant détaillé de la TVA due à la DGI',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'organigramme schématise la structure officielle : directions, départements, niveaux hiérarchiques et rattachements d'autorité.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : DIRECTION DE L'ENTREPRISE ET FINANCEMENT
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch3',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: "Chapitre 3 — Direction de l'entreprise, motivation, leadership et financement",
    summary:
      "Théories X et Y de McGregor, pyramide des besoins de Maslow, styles de direction (Likert / Hersey-Blanchard), objectifs de la fonction financière (rentabilité, solvabilité, liquidité) et modes de financement (autofinancement, capital, emprunt, leasing).",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'OGE 2025-2026 & Corrigé Examen Session 1 2025-2026',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch3_p1',
        order: 1,
        title: 'Direction de l’entreprise : théories de motivation (McGregor, Maslow) et styles de direction',
        summary:
          "Opposer les théories X et Y de McGregor, situer la pyramide de Maslow et choisir le style de direction adapté (autoritaire, paternaliste, consultatif, participatif) en contexte de crise.",
        conceptExplanation:
          "Diriger une entreprise consiste à orienter, coordonner et motiver les équipes humaines pour atteindre les objectifs fixés. La conception qu'un dirigeant a de l'homme au travail détermine directement son style de commandement.\n\n1) Les théories X et Y de Douglas McGregor :\n- Théorie X (vision négative/classique) : l'individu moyen n'aime pas travailler, évite les responsabilités, préfère être dirigé et doit être contraint, contrôlé et sanctionné.\n- Théorie Y (vision positive/moderne) : l'homme peut trouver de la satisfaction dans le travail, est créatif, capable d'autocontrôle et peut être motivé et responsabilisé si les conditions managériales sont favorables.\n\n2) La pyramide des besoins d'Abraham Maslow hiérarchise 5 niveaux de motivation : (1) besoins physiologiques, (2) sécurité, (3) appartenance sociale, (4) estime et reconnaissance, (5) accomplissement de soi.\n\n3) Les 4 styles de direction selon Rensis Likert :\n- Style autoritaire (exploiteur) : décisions imposées d'en haut, contrôle strict, sanctions, peu de confiance (cohérent avec la théorie X).\n- Style paternaliste (autoritaire bienveillant) : décisions centralisées mais accompagnées d'une protection sociale et de récompenses.\n- Style consultatif : le dirigeant sollicite l'avis des collaborateurs avant de trancher.\n- Style participatif : prise de décision collégiale, forte délégation, confiance mutuelle et responsabilisation (cohérent avec la théorie Y). Dans le cas pratique d'examen OGE (grève des chauffeurs + concurrence), le style participatif/consultatif est le plus efficace pour restaurer le dialogue social, libérer les idées terrain et stimuler l'engagement.",
        formulas: [
          {
            name: 'Pyramide de Maslow (de la base au sommet)',
            formula: '1. Physiologiques → 2. Sécurité → 3. Appartenance → 4. Estime → 5. Accomplissement',
            note: 'Un besoin supérieur devient moteur dès que les besoins inférieurs sont raisonnablement satisfaits.',
          },
        ],
        keyRule:
          "Théorie X = contrainte et contrôle (homme paresseux). Théorie Y = autonomie, créativité et motivation (homme responsabilisable). En crise sociale (grève), privilégier le style participatif/consultatif, jamais l'autoritarisme pur ni le laissez-faire.",
        workedExample: {
          title: "Choix du style de direction en situation de crise (Examen OGE 2025-2026 — Q3)",
          statement:
            "Dans l'entreprise de livraison confrontée à une grève des chauffeurs, à la concurrence accrue et à la hausse du carburant, quel style de direction serait le plus efficace et pourquoi ?",
          methodSteps: [
            'Étape 1 (Identifier le style recommandé) : Le style participatif (ou consultatif), selon Likert / Hersey-Blanchard.',
            'Étape 2 (Mobilisation sociale) : Impliquer les chauffeurs dans l’organisation des tournées et l’amélioration des conditions de travail désamorce la grève et restaure la confiance.',
            'Étape 3 (Intelligence terrain et motivation) : Les chauffeurs connaissent les réalités quotidiennes (embouteillages, zones) ; les associer satisfait leurs besoins d’estime et d’accomplissement (Maslow) et active la théorie Y (McGregor).',
            'Étape 4 (Écarter les extrêmes) : Le style autoritaire aggraverait le conflit social ; le laissez-faire priverait l’entreprise de coordination en pleine crise.',
          ],
          conclusion:
            'Le style participatif/consultatif combine cohésion sociale, créativité terrain et discipline collective pour sortir durablement de la crise.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Théorie Y',
            stepTheme: 'Vision de l’homme selon McGregor',
            stepTitle: 'Que postule la théorie Y de McGregor ?',
            paragraphText:
              "Contrairement à la théorie X qui voit le salarié comme paresseux et réticent aux responsabilités, la théorie Y de Douglas McGregor considère que l'homme peut aimer son travail, faire preuve de créativité, s'autocontrôler et être motivé par la responsabilisation.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'La théorie Y de McGregor considère que (Question 4 — Examen OGE 2025-2026) :',
              options: [
                "L'homme déteste naturellement le travail et fuit toute responsabilité",
                "L'homme peut être motivé, créatif et responsabilisé",
                'Seule la peur de la sanction permet d’obtenir de la productivité',
                'Les salaires doivent être supprimés au profit du bénévolat',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Selon la théorie Y, l'individu est capable d'engagement, d'initiative et d'autocontrôle lorsqu'on lui accorde confiance et responsabilités.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Théorie X',
            stepTheme: 'Style de management associé',
            stepTitle: 'Quel style de direction découle de la théorie X ?',
            paragraphText:
              "Un dirigeant convaincu par la théorie X (salariés peu motivés, évitant l'effort) mettra naturellement en place un management autoritaire fondé sur des ordres stricts, un contrôle permanent et un système de sanctions.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Un dirigeant qui adhère aux postulats de la théorie X de McGregor adopte généralement un style de direction :',
              options: [
                'Autoritaire et fortement contrôlant',
                'Participatif et collégial',
                'Laissez-faire total',
                'Fondé uniquement sur l’autogestion des équipes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La théorie X suppose que les travailleurs doivent être contraints et surveillés étroitement, ce qui conduit au style autoritaire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Pyramide de Maslow',
            stepTheme: 'Hiérarchie des 5 besoins',
            stepTitle: 'Situer les besoins d’estime et d’accomplissement',
            paragraphText:
              "Dans la pyramide d'Abraham Maslow, les besoins sont hiérarchisés du plus basique au plus élevé : (1) physiologiques, (2) sécurité, (3) appartenance, (4) estime (reconnaissance, statut) et (5) accomplissement de soi (réalisation de son potentiel).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Dans la pyramide des besoins de Maslow, quel besoin se situe tout au sommet (niveau 5) ?',
              options: [
                'Le besoin de sécurité de l’emploi',
                'Le besoin d’appartenance au groupe',
                'Le besoin d’accomplissement de soi',
                'Les besoins physiologiques',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'accomplissement de soi (développer son potentiel, relever des défis créatifs) occupe le 5e et dernier niveau au sommet de la pyramide de Maslow.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Typologie de Likert',
            stepTheme: 'Les 4 styles de direction',
            stepTitle: 'Distinguer style consultatif et style participatif',
            paragraphText:
              "Dans le style consultatif, le dirigeant demande l'avis des collaborateurs mais garde seul la décision finale. Dans le style participatif, les collaborateurs participent activement à l'élaboration et à la prise de décision en équipe dans un climat de haute confiance.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Quel style de Likert consiste à écouter les propositions des salariés tout en conservant la décision finale au niveau du dirigeant ?',
              options: [
                'Le style autoritaire exploiteur',
                'Le style laissez-faire',
                'Le style bureaucratique pur',
                'Le style consultatif',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Le style consultatif instaure un dialogue ascendant (on recueille les avis), mais la décision ultime reste prise par le responsable hiérarchique.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Gestion de crise',
            stepTheme: 'Éviter les deux extrêmes en cas de grève',
            stepTitle: 'Pourquoi écarter le style autoritaire et le laissez-faire en crise ?',
            paragraphText:
              "Face à une grève des chauffeurs et à une forte concurrence, le style autoritaire braque le personnel et risque de durcir la grève, tandis que le style laissez-faire (absence de pilotage) empêche toute coordination stratégique. Le style participatif associe écoute, responsabilisation et cap clair.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi le style « laissez-faire » est-il déconseillé dans le cas de crise de l’entreprise de livraison (Examen OGE 2025-2026) ?',
              options: [
                'Parce qu’il est trop autoritaire envers les syndicats',
                'Parce qu’une situation de crise exige une coordination forte et une vision directrice',
                'Parce qu’il interdit toute utilisation d’applications numériques',
                'Parce qu’il est illégal dans le droit OHADA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un management totalement laissez-faire abandonne les équipes sans arbitrage ni cap, ce qui est inadapté en période de crise nécessitant coordination et décisions rapides.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Leadership situationnel',
            stepTheme: 'Modèle de Hersey-Blanchard',
            stepTitle: 'Adapter son style à la maturité de l’équipe',
            paragraphText:
              "Selon Paul Hersey et Ken Blanchard, il n'existe pas un style unique valable en toute circonstance : le manager efficace adapte son leadership (directif, persuasif, participatif, délégatif) au niveau de compétence et de motivation (maturité professionnelle) de ses collaborateurs.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Selon le modèle du leadership situationnel (Hersey-Blanchard), en fonction de quel critère principal le manager doit-il adapter son style de direction ?',
              options: [
                'Du niveau de compétence et de motivation (maturité) des collaborateurs',
                'Uniquement de l’ancienneté juridique de la société',
                'Du nombre de véhicules possédés par l’entreprise',
                'Du seul taux de TVA en vigueur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le leadership situationnel adapte le degré de directivité et de soutien à la maturité (compétences + engagement) de chaque collaborateur face à une tâche donnée.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_oge_ch3_p2',
        order: 2,
        title: 'Fonction financière et modes de financement de l’entreprise (autofinancement, emprunt, leasing)',
        summary:
          "Maîtriser les objectifs de la fonction financière (rentabilité, solvabilité, liquidité) et distinguer les financements internes (autofinancement) et externes (capital, emprunt bancaire, crédit-bail / leasing).",
        conceptExplanation:
          "Pour investir (acheter des machines, locaux, logiciels) et financer son cycle d'exploitation (stocks, créances clients), l'entreprise s'appuie sur la fonction financière. Celle-ci poursuit deux objectifs majeurs (Examen OGE 2025-2026) :\n1) Assurer la rentabilité : optimiser l'utilisation des ressources financières afin de dégager des profits durables par rapport aux capitaux investis.\n2) Garantir la solvabilité et la liquidité : assurer la capacité de l'entreprise à honorer ses engagements financiers (dettes fournisseurs, salaires, échéances d'emprunts) à court terme (liquidité / trésorerie) comme à moyen et long terme (solvabilité globale).\n\nLes sources de financement se répartissent en deux grandes familles :\n- Le financement interne : l'autofinancement, alimenté par les bénéfices non distribués et les dotations aux amortissements (capacité d'autofinancement / cash-flow). Avantage : préserve l'indépendance financière et n'entraîne aucun intérêt ; limite : montant parfois insuffisant pour de gros investissements.\n- Le financement externe :\n  • Financement par fonds propres : augmentation de capital (apports des associés existants ou nouveaux investisseurs, capital-risque).\n  • Financement par endettement : emprunts bancaires à moyen/long terme (avec intérêts et garanties), emprunts obligataires (grandes entreprises), crédits de trésorerie à court terme (découvert, escompte).\n  • Le crédit-bail (ou leasing) : contrat de location d'un bien mobilier ou immobilier assorti d'une option d'achat au terme du contrat moyennant une valeur résiduelle fixée d'avance. Il permet de financer un équipement à 100 % sans immobiliser immédiatement sa trésorerie.",
        formulas: [
          {
            name: 'Arbitrage financier fondamental',
            formula: 'Rentabilité (générer du profit)  +  Solvabilité & Liquidité (payer ses dettes à temps)',
            note: 'Une entreprise rentable peut faire faillite si elle manque de liquidités à court terme !',
          },
        ],
        keyRule:
          "Deux objectifs financiers à connaître par cœur : Rentabilité + Solvabilité/Liquidité. Leasing (crédit-bail) = location avec option d'achat en fin de contrat. Autofinancement = financement interne sans endettement ni perte d'indépendance.",
        workedExample: {
          title: "Choix de financement d'une flotte de véhicules pour une PME",
          statement:
            "Une PME logistique veut acquérir 5 véhicules électriques pour 75 000 000 FCFA. Sa trésorerie disponible est de 20 000 000 FCFA et ses associés ne souhaitent pas ouvrir le capital à des tiers. Comparer l'autofinancement, l'emprunt bancaire et le leasing (crédit-bail).",
          methodSteps: [
            "Étape 1 (Autofinancement) : Insuffisant seul (20 M < 75 M) et viderait la trésorerie de sécurité, menaçant la liquidité à court terme.",
            "Étape 2 (Emprunt bancaire) : Permet de financer une grande partie tout en gardant l'indépendance du capital, mais exige des garanties bancaires et un apport initial.",
            "Étape 3 (Crédit-bail / Leasing) : L'établissement financier achète les 5 véhicules et les loue à la PME contre des loyers mensuels, avec option d'achat en fin de contrat. Aucun apport massif immédiat : la liquidité est préservée et la flotte est modernisée rapidement.",
          ],
          conclusion:
            "Le crédit-bail (leasing) est particulièrement adapté pour financer intégralement la flotte tout en préservant la liquidité et l'indépendance capitalistique de la PME.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Leasing / Crédit-bail',
            stepTheme: 'Définition exacte',
            stepTitle: "Qu'est-ce que le leasing ?",
            paragraphText:
              "Le leasing (ou crédit-bail) est un mode de financement externe dans lequel une société financière acquiert un équipement ou un véhicule et le loue à l'entreprise utilisatrice pendant une durée déterminée, avec une option d'achat permettant de devenir propriétaire en fin de contrat.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Le leasing (crédit-bail) est (Question 3 — Examen OGE 2025-2026) :',
              options: [
                'Une subvention publique non remboursable',
                'Une location avec option d’achat en fin de contrat',
                'Une émission d’actions en bourse',
                'Un découvert bancaire à 48 heures',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Le crédit-bail (leasing) combine une location d'équipement et une option d'achat à prix résiduel au terme du contrat.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Fonction financière',
            stepTheme: 'Les deux grands objectifs',
            stepTitle: 'Rentabilité et solvabilité / liquidité',
            paragraphText:
              "La fonction financière poursuit deux objectifs essentiels : assurer la rentabilité (optimiser l'utilisation des ressources pour maximiser les profits) et garantir la solvabilité ainsi que la liquidité (honorer les engagements à court, moyen et long terme).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quels sont les deux objectifs fondamentaux de la fonction financière de l’entreprise ?',
              options: [
                'Assurer la rentabilité et garantir la solvabilité / liquidité',
                'Recruter les commerciaux et concevoir le logo',
                'Définir les normes de qualité technique et le packaging',
                'Fixer le taux directeur de la banque centrale',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La fonction financière arbitre en permanence entre la création de profits (rentabilité) et la capacité à payer les dettes aux échéances (liquidité et solvabilité).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Solvabilité vs Liquidité',
            stepTheme: 'Différence d’horizon temporel',
            stepTitle: 'Distinguer liquidité à court terme et solvabilité globale',
            paragraphText:
              "La liquidité mesure la capacité immédiate de l'entreprise à payer ses dettes exigibles à court terme grâce à sa trésorerie et ses actifs rapidement convertibles. La solvabilité mesure sa capacité globale à rembourser l'ensemble de ses dettes (y compris à long terme) avec la totalité de son actif.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on spécifiquement la capacité d’une entreprise à faire face immédiatement à ses échéances de paiement à court terme ?',
              options: [
                'La décentralisation',
                'La capitalisation',
                'La liquidité',
                'La diversification',
              ],
              correctAnswerIndex: 2,
              explanation:
                "La liquidité traduit la disponibilité immédiate de trésorerie pour régler les dettes exigibles à court terme (salaires, fournisseurs, loyers).",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Autofinancement',
            stepTheme: 'Financement interne par cash-flow',
            stepTitle: 'Avantages et limites de l’autofinancement',
            paragraphText:
              "L'autofinancement consiste à financer les investissements grâce aux ressources générées par l'activité elle-même (bénéfices mis en réserve et amortissements). Il évite les frais financiers et préserve l'indépendance vis-à-vis des banques, mais reste limité à la capacité de profit de l'entreprise.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel est le principal avantage de l’autofinancement par rapport à l’emprunt bancaire ?',
              options: [
                'Il est toujours illimité quel que soit le bénéfice',
                'Il permet de transférer la propriété des machines à la banque',
                'Il augmente les charges d’intérêts déductibles',
                'Il préserve l’indépendance financière et n’entraîne aucune charge d’intérêts',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Financer ses projets par ses propres excédents de trésorerie évite l'endettement, les intérêts bancaires et la dilution du capital.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Fonds propres',
            stepTheme: 'Augmentation de capital',
            stepTitle: 'Impact d’une ouverture de capital à de nouveaux investisseurs',
            paragraphText:
              "L'augmentation de capital est un financement externe par fonds propres (sans obligation de remboursement à échéance fixe). En revanche, l'entrée de nouveaux actionnaires dilue le pourcentage de détention et le pouvoir de vote des fondateurs historiques.",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle conséquence entraîne l’entrée de nouveaux investisseurs lors d’une augmentation de capital ?',
              options: [
                'Une dilution du pouvoir de contrôle des anciens associés',
                'Une obligation de rembourser des mensualités fixes chaque mois',
                'La transformation automatique de la société en entreprise publique',
                'La suppression de tous les dividendes futurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Faire entrer de nouveaux actionnaires renforce les fonds propres sans dette, mais partage le pouvoir de vote et les futurs dividendes (dilution).",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Horizon financier',
            stepTheme: 'Règle d’équilibre financier',
            stepTitle: 'Associer un besoin de financement au bon outil',
            paragraphText:
              "En bonne gestion financière, un investissement durable (bâtiment, flotte de véhicules, serveur) doit être financé par des ressources durables (autofinancement, capital, emprunt long terme, crédit-bail), tandis qu'un décalage ponctuel de trésorerie est couvert par un crédit court terme (escompte, découvert).",
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quel mode de financement est le PLUS inadapté (dangereux) pour financer la construction d’un entrepôt amortissable sur 15 ans ?',
              options: [
                'Un emprunt bancaire à long terme',
                'Un découvert bancaire à très court terme',
                'Une augmentation de capital',
                'Un autofinancement combiné à un crédit-bail immobilier',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Financer un actif immobilier durable par un découvert bancaire à court terme (coûteux et révocable à tout moment) viole la règle d'équilibre financier et expose l'entreprise à la cessation de paiements.",
            },
          },
        ],
      }),
    ],
  },
];
