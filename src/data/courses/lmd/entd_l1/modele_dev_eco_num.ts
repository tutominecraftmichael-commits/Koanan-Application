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

export const MODELE_DEV_ECO_NUM_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : BUSINESS MODEL CANVAS ET CRÉATION DE VALEUR NUMÉRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch1',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Business Model Canvas et création de valeur numérique',
    summary:
      'Maîtriser les 4 questions et les 9 blocs d’Osterwalder & Pigneur, les 5 spécificités des modèles numériques, la cohérence entre proposition de valeur et capture de valeur (alignements fonctionnel, temporel, incitatif) et la typologie des 8 sources de revenus.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Modèles de Développement en Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1',
        order: 1,
        title: 'Les 9 blocs du Business Model Canvas et les 5 spécificités du numérique',
        summary:
          'Structurer un modèle économique autour d’Osterwalder & Pigneur (4 questions, 9 blocs) et comprendre les 5 propriétés distinctives des modèles numériques.',
        conceptExplanation:
          'Selon **Alexander Osterwalder & Yves Pigneur (2010)**, un modèle économique décrit la manière dont une organisation **crée, délivre et capture de la valeur**. Il répond à quatre questions fondamentales — **Qui ?** (segments de clients), **Quoi ?** (proposition de valeur), **Comment ?** (chaîne de valeur : ressources, activités, partenariats) et **Combien ?** (sources de revenus et structure de coûts) — déployées en **9 blocs** dans le **Business Model Canvas (BMC)**.\n\n' +
          'Dans l’économie numérique, ce canevas s’appuie sur **cinq spécificités économiques majeures** :\n' +
          '1. **Biens informationnels** : non-rivalité (consommation simultanée sans épuisement) et difficulté d’exclusion naturelle.\n' +
          '2. **Coût marginal proche de zéro** : capacité à passer à l’échelle (« scaler ») sans hausse proportionnelle des coûts.\n' +
          '3. **Effets de réseau** : la valeur du service augmente avec le nombre d’utilisateurs, générant de la concentration.\n' +
          '4. **Désintermédiation** : mise en relation directe modifiant coûts et marges.\n' +
          '5. **Données comme actif stratégique** : ciblage, personnalisation, amélioration continue ou monétisation agrégée.',
        keyRule:
          'Le Business Model Canvas articule 9 blocs autour de 4 questions (Qui, Quoi, Comment, Combien) et tire parti de 5 spécificités numériques (non-rivalité, coût marginal ≈ 0, effets de réseau, désintermédiation, données).',
        formulas: [
          {
            name: 'Architecture des 9 blocs d’Osterwalder & Pigneur',
            formula: '\\text{BMC} = \\underbrace{\\text{Segments, Valeur, Canaux, Relations}}_{\\text{Marché (Qui / Quoi)}} + \\underbrace{\\text{Partenaires, Activités, Ressources}}_{\\text{Infrastructure (Comment)}} + \\underbrace{\\text{Revenus, Coûts}}_{\\text{Viabilité (Combien)}}',
            note: 'Les 9 blocs doivent former un système cohérent où chaque bloc soutient les autres.',
          },
        ],
        workedExample: {
          title: 'Compléter le Business Model Canvas d’une fintech de paiement à Abidjan',
          statement:
            'Une start-up propose aux commerçants de quartier d’encaisser leurs clients par QR Code sans frais pour l’acheteur et avec 1 % de commission pour le marchand, via une appli mobile reliée aux opérateurs télécoms. Identifiez les 4 questions et les blocs principaux du BMC.',
          methodSteps: [
            'Qui ? Segments de clients : commerçants informels et PME (face payante) + particuliers équipés de smartphones (face gratuite) ; Canaux : application mobile, agents terrain ; Relations : support WhatsApp automatisé.',
            'Quoi ? Proposition de valeur : encaissement instantané sécurisé sans monnaie papier ni TPE coûteux.',
            'Comment ? Activités clés : développement appli, gestion conformité ; Ressources clés : plateforme cloud, base marchands ; Partenaires clés : opérateurs télécoms, banques partenaires.',
            'Combien ? Revenus : 1 % de commission sur transactions marchandes ; Coûts : serveurs cloud, salaires tech, acquisition commerciale.',
          ],
          conclusion:
            'Le BMC permet de vérifier d’un seul coup d’œil la cohérence entre promesse client, infrastructure technique et équilibre financier.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Osterwalder (2010)',
            stepTheme: '4 questions clés',
            stepTitle: 'Créer, délivrer et capturer la valeur : les 4 questions d’Osterwalder',
            paragraphText:
              'Un modèle économique ne se résume jamais à « comment facturer le client ? » : il décrit l’architecture globale de viabilité d’une organisation.\n' +
              '• **Définition (Osterwalder & Pigneur, 2010)** : manière dont une organisation crée, délivre et capture de la valeur.\n' +
              '• **Les 4 questions** : **Qui ?** (cible et segments de clients), **Quoi ?** (proposition de valeur), **Comment ?** (chaîne de valeur : ressources, activités, partenariats) et **Combien ?** (sources de revenus et structure de coûts).\n' +
              '• **Exemple** : pour une plateforme de livraison de repas à Abidjan, « Qui » = actifs urbains + restaurants ; « Quoi » = livraison en 30 min ; « Comment » = appli + livreurs ; « Combien » = commission + frais de course.',
            keyRule:
              'Tout modèle économique doit répondre avec précision aux quatre questions : Qui (cible), Quoi (offre), Comment (chaîne opérationnelle) et Combien (revenus/coûts).',
            konanTip:
              'Retiens les trois verbes d’Osterwalder dans l’ordre exact : CRÉER la valeur, DÉLIVRER la valeur, CAPTURER une part de cette valeur.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Selon Osterwalder & Pigneur (2010), à quelle question fondamentale du modèle économique correspondent les ressources, activités et partenariats clés ?',
              options: ['Qui ?', 'Quoi ?', 'Comment ?', 'Combien ?'],
              correctAnswerIndex: 2,
              explanation:
                'La question « Comment ? » recouvre la chaîne de valeur opérationnelle : ressources clés, activités clés et partenariats permettant de créer et délivrer l’offre.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'BMC — Marché',
            stepTheme: 'Blocs 1 à 4',
            stepTitle: 'Les quatre blocs côté marché : Segments, Valeur, Canaux, Relations',
            paragraphText:
              'La partie droite du Business Model Canvas décrit la rencontre entre l’entreprise et ses utilisateurs sur le marché.\n' +
              '• **1. Segments de clients** : groupes distincts ciblés (B2C, B2B, ou faces d’un marché biface).\n' +
              '• **2. Proposition de valeur** : problème résolu ou bénéfice concret apporté à chaque segment.\n' +
              '• **3. Canaux** : points de contact pour faire connaître, vendre et livrer l’offre (App Store, web, WhatsApp, force commerciale terrain).\n' +
              '• **4. Relations clients** : mode d’interaction et de fidélisation (self-service automatisé, communauté, conseiller dédié).',
            keyRule:
              'Dans le numérique, le canal de distribution (web, app mobile, API) est souvent confondu avec le support même du produit, réduisant les délais de livraison à quelques secondes.',
            konanTip:
              'Sur une plateforme biface, indique toujours les segments des DEUX faces en couleurs distinctes dans ton BMC afin de relier chaque proposition de valeur à son public.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Dans le Business Model Canvas, quel bloc décrit la manière dont l’entreprise atteint, livre et communique avec ses segments de clients (site web, application mobile, partenaires) ?',
              options: [
                'La structure de coûts',
                'Les canaux de distribution',
                'Les partenaires clés',
                'Les ressources clés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le bloc « Canaux » rassemble les vecteurs de communication, de vente et de livraison permettant d’acheminer la proposition de valeur aux clients.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'BMC — Infra',
            stepTheme: 'Blocs 5 à 7',
            stepTitle: 'Les trois blocs côté infrastructure : Ressources, Activités, Partenaires',
            paragraphText:
              'La partie gauche du Business Model Canvas révèle la machinerie interne et externe qui permet de tenir la promesse faite aux clients.\n' +
              '• **5. Ressources clés** : actifs indispensables (plateforme logicielle, propriété intellectuelle, bases de données, talents ingénieurs, marque).\n' +
              '• **6. Activités clés** : opérations critiques (développement et maintenance algorithmique, acquisition/curation sur plateforme, support).\n' +
              '• **7. Partenaires clés** : fournisseurs cloud, agrégateurs de paiement Mobile Money, logisticiens, régulateurs ou producteurs tiers.',
            keyRule:
              'Une entreprise numérique « asset-light » externalise ses actifs physiques lourds vers des partenaires clés (cloud, paiement, livraison) pour concentrer ses ressources sur le logiciel et la donnée.',
            konanTip:
              'Attention à ne pas tout lister dans « Activités clés » : ne retiens que les 2 ou 3 activités sans lesquelles le modèle s’effondre (ex. gestion de plateforme, matching, sécurité).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Pour une start-up SaaS ou une marketplace, à quel bloc du Business Model Canvas appartiennent les bases de données clients, le code propriétaire et la marque ?',
              options: [
                'Les sources de revenus',
                'Les ressources clés',
                'Les relations clients',
                'Les segments de marché',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les actifs stratégiques nécessaires au fonctionnement du modèle (code, données, talents, marque) relèvent des Ressources clés.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'BMC — Finance',
            stepTheme: 'Blocs 8 & 9 + Tableau',
            stepTitle: 'Structure de coûts, sources de revenus et tableau complet des 9 blocs',
            paragraphText:
              'La base du Business Model Canvas traduit la stratégie opérationnelle en équation financière durable.\n' +
              '• **8. Structure de coûts** : coûts fixes élevés (R&D logicielle, salaires tech, marketing d’acquisition) et coûts variables très faibles (hébergement cloud par utilisateur).\n' +
              '• **9. Sources de revenus** : mécanismes de capture de valeur (abonnement, commission, freemium, publicité, licence API).\n' +
              '• **Synthèse** : le tableau ci-dessous présente les 9 blocs appliqués concrètement à une plateforme numérique en Afrique de l’Ouest.',
            keyRule:
              'Le modèle numérique est économiquement viable lorsque les flux de revenus récurrents ou transactionnels dépassent durablement la structure de coûts fixes et d’acquisition.',
            konanTip:
              'Sers-toi du tableau des 9 blocs ci-dessous comme grille d’analyse universelle devant n’importe quelle étude de cas d’examen !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Les 9 blocs du Business Model Canvas (Osterwalder & Pigneur)',
              caption: 'Grille complète illustrée sur le cas d’une plateforme numérique africaine.',
              tableData: {
                headers: ['Pilier', 'Bloc du BMC', 'Rôle dans le modèle', 'Exemple plateforme UEMOA'],
                rows: [
                  ['Comment ?', '1. Partenaires clés', 'Alliances pour optimiser et réduire les risques', 'Opérateurs Mobile Money, livreurs indépendants, cloud'],
                  ['Comment ?', '2. Activités clés', 'Actions critiques pour faire tourner l’offre', 'Développement appli, matching, lutte anti-fraude'],
                  ['Comment ?', '3. Ressources clés', 'Actifs stratégiques indispensables', 'Algorithmes, base données, marque, équipe tech'],
                  ['Quoi ?', '4. Proposition de valeur', 'Bénéfice distinctif offert au client', 'Livraison rapide, paiement mobile sécurisé, choix large'],
                  ['Qui ?', '5. Relations clients', 'Acquisition, fidélisation et montée en gamme', 'Support chat automatisé, programmes de fidélité'],
                  ['Qui ?', '6. Canaux', 'Vecteurs de contact, vente et délivrance', 'Application Android/iOS, WhatsApp, web mobile'],
                  ['Qui ?', '7. Segments de clients', 'Groupes ciblés ou faces du marché', 'Acheteurs urbains + PME marchandes locales'],
                  ['Combien ?', '8. Structure de coûts', 'Charges fixes et variables principales', 'R&D logicielle, serveurs cloud, marketing CAC'],
                  ['Combien ?', '9. Sources de revenus', 'Modalités d’encaissement et tarification', 'Commission 10 %, mise en avant sponsorisée, SaaS pro'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle particularité caractérise généralement le bloc « Structure de coûts » d’une entreprise numérique logicielle par rapport à une usine industrielle ?',
              options: [
                'Des coûts fixes initiaux importants (R&D, ingénierie) combinés à un coût marginal de reproduction quasi nul',
                'L’absence totale de coûts de développement logiciel',
                'Des coûts de matières premières physiques proportionnels à chaque nouveau téléchargement',
                'L’impossibilité de connaître ses coûts d’hébergement cloud',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les modèles logiciels supportent d’importants coûts fixes de conception et d’acquisition, mais un coût variable quasi nul lors de l’ajout d’utilisateurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: '5 Spécificités',
            stepTheme: 'ADN numérique',
            stepTitle: 'Les cinq spécificités économiques d’un modèle numérique',
            paragraphText:
              'Pourquoi ne peut-on pas piloter une plateforme digitale exactement comme une entreprise de BTP ou une boulangerie ? À cause de cinq propriétés propres au numérique.\n' +
              '• **1. Biens informationnels** : non-rivalité (usage multiple sans épuisement) et non-exclusion naturelle.\n' +
              '• **2. Coût marginal proche de zéro** : scalabilité rapide rendant viables le gratuit et le freemium.\n' +
              '• **3. Effets de réseau** : valeur croissante avec la taille de la base utilisateurs, poussant à la concentration.\n' +
              '• **4. Désintermédiation** : lien direct entre offreurs et demandeurs modifiant marges et prix.\n' +
              '• **5. Données comme actif stratégique** : source de ciblage, d’amélioration produit et de monétisation.',
            keyRule:
              'Tout modèle économique numérique performant articule ces 5 leviers : non-rivalité, coût marginal ≈ 0, effets de réseau, désintermédiation et exploitation des données.',
            konanTip:
              'Mémorise ces 5 spécificités avec l’acronyme « B-C-E-D-D » : Biens info, Coût marginal ≈ 0, Effets de réseau, Désintermédiation, Données.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants, lequel figure parmi les cinq spécificités structurelles d’un modèle économique numérique ?',
              options: [
                'L’impossibilité totale d’automatiser les transactions',
                'Un coût marginal proche de zéro permettant de passer à l’échelle sans hausse proportionnelle des coûts',
                'La destruction définitive d’un fichier dès qu’un utilisateur le consulte',
                'L’obligation de multiplier les intermédiaires papier à chaque commande',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le coût marginal quasi nul, les biens informationnels non-rivaux, les effets de réseau, la désintermédiation et la donnée stratégique forment les 5 spécificités clés du numérique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Enjeu stratégique',
            stepTheme: 'Financement & Résilience',
            stepTitle: 'Pourquoi le choix du modèle économique est une décision stratégique majeure',
            paragraphText:
              'Choisir son modèle économique dépasse de loin une simple décision tarifaire : c’est un choix d’architecture qui engage toute la trajectoire de l’entreprise.\n' +
              '• **Structure de financement** : un modèle publicitaire exige de lever du capital-risque pour tenir avant d’atteindre des millions d’utilisateurs ; un modèle SaaS B2B peut s’autofinancer plus tôt.\n' +
              '• **Trajectoire de croissance & valorisation** : les marchés boursiers valorisent bien plus fortement les revenus récurrents prévisibles (SaaS) que les ventes ponctuelles volatiles.\n' +
              '• **Risques et résilience** : la diversification des revenus protège contre les retournements conjoncturels ou réglementaires.',
            keyRule:
              'Le modèle économique conditionne quatre variables critiques : le besoin de financement, la vitesse de croissance, la valorisation financière et la résilience face aux crises.',
            konanTip:
              'En entretien investisseur, on ne te demande pas seulement ton produit : on évalue si ton modèle économique est finançable et résilient à 3–5 ans.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quels éléments majeurs de l’entreprise sont directement conditionnés par le choix de son modèle économique ?',
              options: [
                'Uniquement la couleur du logo et la police du site web',
                'La structure de financement, la trajectoire de croissance, la valorisation financière ainsi que les risques et la résilience',
                'Exclusivement la marque des ordinateurs des salariés',
                'Uniquement la durée de la pause déjeuner',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le choix du modèle économique détermine les besoins en capitaux, le rythme de croissance, la valorisation par les investisseurs et la capacité de résistance aux chocs.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2',
        order: 2,
        title: 'Proposition de valeur et les trois alignements stratégiques',
        summary:
          'Distinguer proposition de valeur et modèle économique, appliquer les 3 types d’alignement (fonctionnel, temporel, incitatif) et diagnostiquer les échecs liés au mauvais alignement.',
        conceptExplanation:
          'La **proposition de valeur** est la promesse faite au client : le bénéfice concret qu’il retire de l’usage du produit ou service. Elle répond à la question : *« Pourquoi un client choisirait-il cette offre plutôt qu’une autre ? »*. Elle concerne le **« quoi »** et le **« pour qui »**, est orientée **client** et s’exprime par l’UX, les fonctionnalités, la marque et la confiance.\n\n' +
          'Le **modèle économique** concerne le **« comment capturer la valeur »**, est orienté **entreprise / actionnaires** et repose sur la tarification, la structure de coûts et les canaux de revenus. Leur **alignement** est impératif selon trois axes :\n' +
          '1. **Alignement fonctionnel** : le modèle économique ne doit pas entraver la proposition de valeur (ex. monétiser par la pub intrusive un service promettant la confidentialité).\n' +
          '2. **Alignement temporel** : la temporalité de la création de valeur pour le client doit coïncider avec celle de sa capture financière.\n' +
          '3. **Alignement incitatif** : le modèle économique doit faire converger les intérêts de l’entreprise et ceux de ses utilisateurs.',
        keyRule:
          'Proposition de valeur = promesse client (UX, confiance, bénéfice) ; Modèle économique = capture de valeur (prix, coûts). Tous deux doivent respecter les alignements fonctionnel, temporel et incitatif.',
        formulas: [
          {
            name: 'Trépied de cohérence stratégique',
            formula: '\\text{Viabilité} = \\text{Alignement Fonctionnel} \\cap \\text{Alignement Temporel} \\cap \\text{Alignement Incitatif}',
            note: 'La rupture d’un seul de ces trois alignements provoque rejet utilisateur, désabonnement ou perte financière.',
          },
        ],
        workedExample: {
          title: 'Auditer le défaut d’alignement d’une application de santé mentale',
          statement:
            'Une application promettant « une confidentialité médicale absolue et un apaisement sans distraction » décide de se financer en affichant des bannières publicitaires ciblées basées sur les mots-clés saisis par les patients. Analysez ce choix à l’aide des 3 alignements.',
          methodSteps: [
            'Proposition de valeur : confidentialité stricte et sérénité psychologique.',
            'Rupture d’alignement fonctionnel : le pistage publicitaire détruit la promesse même de confidentialité et les bannières nuisent à la sérénité.',
            'Rupture d’alignement incitatif : l’entreprise gagne plus en collectant des données sensibles et en retenant l’usager anxieux sur l’écran, à l’opposé de l’intérêt du patient.',
            'Solution corrective : adopter un modèle par abonnement payant (ou prise en charge B2B par les mutuelles/entreprises) qui aligne confidentialité et rémunération.',
          ],
          conclusion:
            'Le mode de monétisation doit toujours renforcer — et jamais contredire — la promesse de valeur faite au client.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Promesse client',
            stepTheme: 'Proposition de valeur',
            stepTitle: 'Définition de la proposition de valeur : le « quoi » et le « pour qui »',
            paragraphText:
              'Avant même de fixer un tarif, toute entreprise doit formuler clairement pourquoi un utilisateur accepterait de changer ses habitudes pour adopter son service.\n' +
              '• **Définition** : promesse de bénéfice concret (gain de temps, économie d’argent, statut, sécurité, plaisir) qu’un client retire de l’offre.\n' +
              '• **Question directrice** : *« Pourquoi un client choisirait-il cette offre plutôt qu’une alternative existante ? »*.\n' +
              '• **Exemple** : la proposition de valeur d’un service de transfert mobile rapide n’est pas « nous utilisons une base SQL », mais « envoyez de l’argent à votre famille en 5 secondes à frais réduits et sans file d’attente ».',
            keyRule:
              'Une bonne proposition de valeur parle des problèmes résolus et bénéfices vécus par le client, jamais uniquement des caractéristiques techniques internes.',
            konanTip:
              'Formule d’examen : Proposition de valeur = « Pour [segment cible], notre offre apporte [bénéfice mesurable] mieux que [alternative actuelle] ».',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'À quelle question centrale répond la « proposition de valeur » d’une entreprise numérique ?',
              options: [
                'Quel est le taux d’imposition des sociétés dans le pays ?',
                'Pourquoi un client choisirait-il cette offre plutôt qu’une autre, et quel bénéfice concret en retire-t-il ?',
                'Combien de serveurs physiques possède l’hébergeur cloud ?',
                'Quel langage de programmation utiliser pour le back-end ?',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La proposition de valeur exprime la promesse faite au client : le bénéfice distinctif qui motive sa préférence face aux concurrents.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Distinction clé',
            stepTheme: 'Valeur vs Modèle',
            stepTitle: 'Comparer proposition de valeur et modèle économique',
            paragraphText:
              'Bien qu’étroitement liés, la proposition de valeur et le modèle économique répondent à deux logiques distinctes qu’il faut savoir analyser séparément.\n' +
              '• **Proposition de valeur** : orientée **Client**, répond au *« Quel problème résolvons-nous et pour qui ? »*, s’appuie sur l’UX, les fonctionnalités, la marque et la confiance.\n' +
              '• **Modèle économique** : orienté **Entreprise / Actionnaires**, répond au *« Comment capturons-nous la valeur créée ? »*, s’appuie sur la tarification, la structure de coûts et les canaux de revenus.\n' +
              '• **Interdépendance** : une proposition de valeur brillante sans modèle économique rentable fait faillite ; un modèle économique agressif sans proposition de valeur ne trouve aucun client.',
            keyRule:
              'Proposition de valeur = « Quoi & Pour qui » (orientation client) ; Modèle économique = « Comment capturer la valeur » (orientation entreprise).',
            konanTip:
              'Mémorise ce tableau en 3 lignes : Question (problème vs capture), Orientation (client vs entreprise/actionnaires), Mécanismes (UX/marque/confiance vs prix/coûts/revenus).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle opposition résume fidèlement la différence entre « proposition de valeur » et « modèle économique » ?',
              options: [
                'La proposition de valeur est orientée client (UX, confiance, bénéfice), tandis que le modèle économique est orienté entreprise (tarification, coûts, capture de valeur)',
                'La proposition de valeur concerne uniquement la comptabilité fiscale et le modèle économique uniquement le design du logo',
                'Les deux expressions sont totalement synonymes en stratégie',
                'Le modèle économique s’adresse uniquement aux administrations publiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La proposition de valeur porte sur l’utilité délivrée au client (le quoi/pour qui), alors que le modèle économique organise la capture financière de cette valeur pour l’entreprise.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Alignement 1',
            stepTheme: 'Alignement fonctionnel',
            stepTitle: 'L’alignement fonctionnel : ne pas saboter sa promesse client',
            paragraphText:
              'Le premier pilier de cohérence consiste à vérifier que la façon dont vous gagnez de l’argent n’abîme pas l’expérience que vous promettez.\n' +
              '• **Définition** : le modèle économique ne doit jamais entraver ou contredire la proposition de valeur.\n' +
              '• **Contre-exemple classique** : vouloir monétiser par la publicité comportementale un service censé garantir la **confidentialité absolue** (type messagerie chiffrée ou coffre-fort numérique), ou imposer des pop-ups intrusifs dans une appli de méditation.\n' +
              '• **Exemple vertueux** : un outil de gestion sans publicité se finance par un abonnement transparent, préservant la fluidité et la confidentialité promise.',
            keyRule:
              'Alignement fonctionnel = compatibilité technique et morale entre le mécanisme de monétisation et l’expérience utilisateur promise.',
            konanTip:
              'Si un mode de paiement oblige à dégrader la qualité ou à trahir la confiance qui fait venir l’utilisateur, il y a rupture d’alignement fonctionnel !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces cas illustre une rupture grave d’« alignement fonctionnel » entre proposition de valeur et modèle économique ?',
              options: [
                'Une plateforme de streaming vidéo sans publicité financée par un abonnement mensuel',
                'Une messagerie promettant la confidentialité totale des échanges mais financée par le profilage publicitaire des messages',
                'Une API de paiement B2B facturée au pourcentage de chaque transaction réussie',
                'Un logiciel de comptabilité en ligne vendu par licence annuelle aux PME',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Financer par le pistage publicitaire un outil dont la promesse centrale est la confidentialité contredit directement la proposition de valeur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Alignement 2',
            stepTheme: 'Alignement temporel',
            stepTitle: 'L’alignement temporel : synchroniser valeur perçue et facturation',
            paragraphText:
              'Un client accepte volontiers de payer lorsqu’il a déjà perçu la valeur du service ou exactement au moment où il l’obtient ; lui demander de payer trop tôt ou à contretemps crée un blocage.\n' +
              '• **Définition** : la temporalité de la création de valeur pour le client doit correspondre à celle de la capture financière par l’entreprise.\n' +
              '• **Application pratique** : une plateforme de mise en relation qui facture des frais d’inscription avant même de prouver sa capacité à trouver des clients échoue ; en facturant à la transaction réussie (commission), paiement et valeur coïncident.\n' +
              '• **Exemple** : proposer un essai gratuit ou une version freemium permet au client d’expérimenter le gain de productivité avant de s’abonner.',
            keyRule:
              'Alignement temporel = faire coïncider le moment du paiement avec le moment où le client reçoit concrètement le bénéfice promis.',
            konanTip:
              'Dans les marchés africains sensibles au risque, le paiement à l’usage ou à la transaction réussie respecte souvent mieux l’alignement temporel qu’un gros engagement annuel d’avance.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Que vérifie l’« alignement temporel » entre proposition de valeur et modèle économique ?',
              options: [
                'Que tous les employés travaillent exactement aux mêmes horaires de bureau',
                'Que le moment où l’entreprise capture ses revenus correspond au moment où le client reçoit effectivement la valeur du service',
                'Que le prix double chaque trimestre automatiquement',
                'Que la publicité soit diffusée uniquement la nuit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’alignement temporel exige que la facturation intervienne en phase avec la réalisation concrète du bénéfice pour l’utilisateur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Alignement 3',
            stepTheme: 'Alignement incitatif',
            stepTitle: 'L’alignement incitatif : faire converger intérêts de la firme et des usagers',
            paragraphText:
              'Un modèle économique est particulièrement puissant lorsque l’entreprise gagne plus d’argent uniquement si ses utilisateurs obtiennent eux-mêmes de meilleurs résultats.\n' +
              '• **Définition** : convergence entre les incitations économiques de l’entreprise et l’intérêt réel des utilisateurs et partenaires.\n' +
              '• **Exemple vertueux (Stripe / Mobile Money marchand)** : un prestataire de paiement facturant 1,5 % par transaction réussie n’encaisse rien si le marchand ne vend pas ; il a donc tout intérêt à optimiser le taux de succès et la sécurité.\n' +
              '• **Contre-exemple** : une appli de rencontre facturant à l’abonnement mensuel long sans offrir de bons résultats pourrait être tentée de retenir artificiellement l’utilisateur célibataire.',
            keyRule:
              'Alignement incitatif = l’entreprise et ses clients s’enrichissent ou réussissent ensemble grâce aux mêmes mécanismes.',
            konanTip:
              'À l’examen, demande-toi toujours : « Si l’entreprise maximise son revenu à court terme, cela aide-t-il ou nuit-il à l’objectif du client ? ».',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle situation traduit un fort « alignement incitatif » entre une plateforme de paiement (ex. Stripe ou agrégateur Mobile Money) et un e-commerçant ?',
              options: [
                'La plateforme facture une amende fixe au marchand chaque fois qu’un paiement échoue',
                'La plateforme perçoit une commission uniquement sur les ventes réussies, ce qui l’incite à maximiser la fluidité et le taux de conversion du marchand',
                'La plateforme bloque les ventes du marchand dès qu’il dépasse 10 clients',
                'La plateforme revend les clients du marchand à son concurrent direct',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsque la rémunération est indexée sur les transactions réussies, la plateforme a directement intérêt à aider le marchand à vendre davantage.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Causes d’échec',
            stepTheme: 'Mauvais alignements',
            stepTitle: 'Trois erreurs fatales de désalignement dans les start-ups numériques',
            paragraphText:
              'De nombreux échecs d’entreprises numériques ne viennent pas d’un mauvais code informatique, mais d’un triple décalage stratégique autour du modèle économique.\n' +
              '• **1. Décalage avec la nature du marché** : vouloir faire du **freemium** sur une niche B2B très étroite où le coût d’acquisition (CAC) est trop élevé et le bassin d’utilisateurs trop faible.\n' +
              '• **2. Décalage avec la proposition de valeur** : monétiser par la pub intrusive un outil centré sur la discrétion ou la concentration.\n' +
              '• **3. Décalage avec la maturité** : lancer un abonnement payant rigide avant d’avoir atteint un **Product-Market Fit** solide.',
            keyRule:
              'Trois désalignements tuent les start-ups : Freemium sur niche à CAC élevé, monétisation contradictoire avec la promesse, et abonnement lancé avant le Product-Market Fit.',
            konanTip:
              'Retiens bien le piège du Freemium sur marché de niche : s’il n’y a que 2 000 clients potentiels dans tout le pays et que 3 % paient, cela ne fait que 60 clients payants — insuffisant pour survivre !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Pourquoi lancer un modèle Freemium sur un marché de niche étroit à coût d’acquisition client élevé conduit-il généralement à l’échec ?',
              options: [
                'Parce que les utilisateurs de niche refusent systématiquement les fonctionnalités gratuites',
                'Parce que la faible taille du marché et le faible taux de conversion ne permettent pas d’amortir le coût d’acquisition élevé des utilisateurs gratuits',
                'Parce que le Freemium est illégal sur les marchés B2B',
                'Parce que les serveurs ne supportent pas moins de 10 millions d’utilisateurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Freemium exige un très vaste marché adressable et un faible coût d’acquisition pour qu’un petit pourcentage de convertis (2–5 %) finance toute la base.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3',
        order: 3,
        title: 'Typologie des 8 sources de revenus dans l’économie numérique',
        summary:
          'Identifier et comparer les 8 grandes sources de revenus (publicité, abonnement, freemium, commission, licence/API, données, vente de biens, modèles hybrides comme Amazon) et choisir la combinaison adaptée.',
        conceptExplanation:
          'Une organisation numérique peut capturer de la valeur à travers **huit grandes sources de revenus** complémentaires :\n' +
          '1. **Publicité** : vente d’espaces ou de ciblage sur audience (Google, Meta, médias en ligne).\n' +
          '2. **Abonnement** : paiement récurrent pour un accès continu (Netflix, Spotify, SaaS type Salesforce).\n' +
          '3. **Freemium** : accès gratuit de base + options payantes (Dropbox, LinkedIn Premium, Canva).\n' +
          '4. **Commission / Transaction** : prélèvement sur chaque échange facilité (Uber, Airbnb, Amazon Marketplace).\n' +
          '5. **Licence / API** : accès payant à une brique technologique ou algorithmique à l’usage (OpenAI API, Stripe, Twilio).\n' +
          '6. **Données** : monétisation de données agrégées, de scores ou d’analyses financières (Bloomberg, Experian, fintechs de scoring).\n' +
          '7. **Vente de biens / services** : e-commerce et vente directe physique ou digitale (Amazon retail, Apple hardware).\n' +
          '8. **Modèles hybrides** : combinaison stratégique de plusieurs moteurs (ex. **Amazon** : retail + abonnement Prime + publicité Amazon Ads + cloud AWS + commission Marketplace).',
        keyRule:
          'Les leaders numériques combinent souvent plusieurs sources de revenus (modèles hybrides) pour amortir les coûts fixes et sécuriser l’écosystème client.',
        formulas: [
          {
            name: 'Équation de revenu hybride (cas Amazon)',
            formula: '\\text{Revenu Total} = R_{\\text{Retail}} + R_{\\text{Marketplace (Commission)}} + R_{\\text{Prime (Abonnement)}} + R_{\\text{Ads (Pub)}} + R_{\\text{AWS (Cloud/API)}}',
            note: 'Chaque moteur renforce les autres (ex. Prime fidélise les acheteurs retail et marketplace, générant des données qui nourrissent Amazon Ads).',
          },
        ],
        workedExample: {
          title: 'Structurer un modèle hybride pour une plateforme média-tech africaine',
          statement:
            'Un portail d’information économique ouest-africain souhaite réduire sa dépendance à la seule bannière publicitaire. Proposez une hybridation cohérente à partir des 8 sources de revenus.',
          methodSteps: [
            'Base gratuite financée par la Publicité ciblée et le sponsoring d’événements (acquisition d’une large audience).',
            'Freemium / Abonnement : accès payant mensuel aux dossiers sectoriels exclusifs et archives sans publicité pour les cadres.',
            'Données / B2B : vente de rapports de données agrégées et d’indices économiques aux banques et investisseurs (modèle type Bloomberg).',
            'API / Licence : flux d’actualités et données boursières UEMOA intégrables par API dans les applications des fintechs.',
          ],
          conclusion:
            'L’hybridation transforme un média fragile dépendant des clics en plateforme B2C/B2B diversifiée et à forte marge.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Revenus directs',
            stepTheme: 'Vente & Abonnement',
            stepTitle: 'Vente directe de biens/services et Abonnement récurrent',
            paragraphText:
              'Les deux premières sources de revenus reposent sur une transaction directe entre l’entreprise et l’acheteur final.\n' +
              '• **Vente de biens / services** : encaissement à l’acte sur des produits physiques ou digitaux (Apple vendant ses iPhone/Mac, boutiques e-commerce vendant des marchandises).\n' +
              '• **Abonnement** : paiement périodique (mensuel ou annuel) donnant accès continu à un catalogue de contenus ou à un logiciel en ligne SaaS (Netflix, Spotify, Salesforce).\n' +
              '• **Évolution actuelle** : de plus en plus d’éditeurs migrent de la vente de licence perpétuelle vers l’abonnement pour lisser leur trésorerie.',
            keyRule:
              'Vente directe = transfert de propriété ponctuel ; Abonnement = revenu récurrent lié à la continuité d’accès et de mise à jour.',
            konanTip:
              'Retiens les exemples de référence : Apple Hardware & Amazon Retail pour la vente ; Netflix, Spotify & Salesforce pour l’abonnement.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle différence essentielle distingue la « vente directe de biens/services » de « l’abonnement » dans le numérique ?',
              options: [
                'L’abonnement interdit toute mise à jour du service',
                'La vente directe repose sur un achat ponctuel, tandis que l’abonnement instaure un paiement récurrent pour un accès continu',
                'La vente directe est réservée aux services publics non marchands',
                'L’abonnement ne peut jamais s’appliquer aux logiciels B2B',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’abonnement substitue un flux récurrent d’accès temporaire à la transaction unique d’achat.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Intermédiation',
            stepTheme: 'Pub, Freemium, Commission',
            stepTitle: 'Publicité ciblée, Freemium et Commission sur transaction',
            paragraphText:
              'Trois autres sources dominent les services grand public et les places de marché en abaissant la barrière d’entrée pour l’utilisateur.\n' +
              '• **Publicité** : vente d’espaces ou de ciblage data aux annonceurs pendant que le service reste gratuit pour l’usager (Google, Meta, médias).\n' +
              '• **Freemium** : offre de base gratuite complétée par des options payantes de capacité, de productivité ou sans publicité (Dropbox, LinkedIn Premium, Canva).\n' +
              '• **Commission / Transaction** : prélèvement d’un pourcentage sur chaque transaction mise en relation (Uber, Airbnb, Amazon Marketplace).',
            keyRule:
              'Publicité, Freemium et Commission ont en commun d’offrir une entrée gratuite (ou sans coût initial) afin de maximiser l’adoption avant la monétisation.',
            konanTip:
              'Attention à ne pas confondre : dans le Freemium, c’est le même utilisateur qui peut payer pour passer en Premium ; dans la Publicité, un tiers (l’annonceur) paie pour toucher l’utilisateur gratuit.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Quels services numériques illustrent typiquement le modèle « Freemium » (gratuit de base + fonctionnalités payantes) ?',
              options: [
                'Dropbox, Canva et LinkedIn Premium',
                'Bloomberg Terminal et Stripe API uniquement',
                'La vente exclusive de smartphones en magasin',
                'Uniquement les banques centrales nationales',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dropbox, Canva et LinkedIn Premium proposent un socle gratuit utilisable durablement tout en monétisant des fonctions avancées (stockage, design pro, recrutement/réseau).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'B2B Tech & Data',
            stepTheme: 'Licence / API & Données',
            stepTitle: 'Monétisation par Licence / API et par Données agrégées',
            paragraphText:
              'Au-delà des applications grand public, certaines des entreprises numériques les plus rentables opèrent en B2B sur l’infrastructure technologique et l’information qualifiée.\n' +
              '• **Licence / API** : vente d’un accès programmable à une brique technologique facturée à l’usage ou au volume de requêtes (ex. **OpenAI API** au jeton, **Stripe** par transaction, **Twilio** par SMS/appel envoyé).\n' +
              '• **Données** : monétisation de bases de données agrégées, d’indices de marché ou de scores de solvabilité (ex. **Bloomberg**, **Experian**, fintechs de crédit scoring).\n' +
              '• **Exemple** : une PME ivoirienne intégrant une API d’envoi de SMS OTP et une API de paiement paie quelques francs par appel réussi sans recréer ces technologies.',
            keyRule:
              'Les modèles API (« API-as-a-Product ») et Données B2B transforment une capacité technique ou informationnelle complexe en service facturable à l’usage ou par licence.',
            konanTip:
              'Retiens le trio d’exemples API incontournable : OpenAI API (IA), Stripe (paiement) et Twilio (télécoms/SMS) ; et le duo Données : Bloomberg & Experian.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Comment des acteurs comme Bloomberg ou Experian créent-ils principalement leurs revenus numériques ?',
              options: [
                'Par la livraison de repas à domicile en scooter',
                'Par la monétisation de données agrégées, d’informations financières et de scores analytiques à forte valeur B2B',
                'Par la fabrication de téléviseurs grand public',
                'Par le don bénévole sans aucune facturation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Bloomberg (terminaux et données financières) et Experian (données et scoring de crédit) monétisent des données structurées, agrégées et exploitables par les décideurs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Modèles hybrides',
            stepTheme: 'Cas Amazon',
            stepTitle: 'Les modèles hybrides multi-moteurs : l’exemple d’Amazon',
            paragraphText:
              'Pourquoi se contenter d’une seule source de revenus quand les actifs numériques accumulés permettent d’en activer plusieurs en synergie ? Amazon en est le cas d’école mondial.\n' +
              '• **1. Retail (vente directe)** : vente en propre de produits sur son site e-commerce.\n' +
              '• **2. Marketplace (commission)** : prélèvement de commissions sur des millions de vendeurs tiers.\n' +
              '• **3. Abonnement (Amazon Prime)** : cotisation annuelle ou mensuelle fidélisant les clients (livraison + vidéo + musique).\n' +
              '• **4. Publicité (Amazon Ads)** + **5. Cloud & API (AWS)** : ventes sponsorisées sur les résultats de recherche et infrastructure cloud leader mondial.',
            keyRule:
              'Un modèle hybride réussi fait de chaque source de revenus un accélérateur pour les autres (volant de croissance multi-moteurs).',
            konanTip:
              'Sur Amazon, retiens que AWS (le cloud/API) a souvent généré la majorité du bénéfice opérationnel permettant de financer la logistique ultra-compétitive du e-commerce !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Pourquoi qualifie-t-on le modèle économique d’Amazon de « modèle hybride » ?',
              options: [
                'Parce qu’il combine au moins cinq moteurs de revenus synergiques : vente directe (retail), commissions marketplace, abonnement (Prime), publicité (Ads) et cloud/API (AWS)',
                'Parce qu’il vend uniquement des voitures hybrides électriques',
                'Parce qu’il refuse tout paiement électronique',
                'Parce qu’il change de secteur d’activité chaque matin',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Amazon combine e-commerce direct, commission de place de marché, abonnement Prime, publicité ciblée et services cloud B2B (AWS).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Critères de choix',
            stepTheme: 'Arbitrage tarifaire',
            stepTitle: 'Comment choisir la bonne source de revenus pour un projet numérique ?',
            paragraphText:
              'Devant une nouvelle idée de service numérique, quatre critères objectifs permettent de sélectionner la ou les sources de revenus pertinentes.\n' +
              '• **1. Volume du marché adressable** : grand public massif → Publicité ou Freemium envisageables ; niche B2B spécialisée → Abonnement SaaS ou Licence/API.\n' +
              '• **2. Fréquence d’usage et récurrence du besoin** : usage quotidien/mensuel continu → Abonnement ; achat ponctuel → Vente ou Commission.\n' +
              '• **3. Pouvoir d’achat et moyens de paiement locaux** : en zone UEMOA, micro-paiements fractionnés ou commission Mobile Money surpassent souvent l’abonnement carte bancaire élevé.\n' +
              '• **4. Effets de réseau** : si le service relie deux faces, privilégier la commission ou le subventionnement croisé.',
            keyRule:
              'Le choix de la source de revenus dépend de la taille du marché, de la fréquence d’usage, des moyens de paiement disponibles et de la présence d’effets de réseau.',
            konanTip:
              'Réflexe d’architecte business : en Afrique de l’Ouest, teste toujours si le client cible possède une carte bancaire internationale avant d’imposer un abonnement mensuel automatique en USD !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quel modèle de revenus est généralement le mieux adapté à un logiciel spécialisé destiné uniquement à 300 cliniques privées (niche B2B à fort enjeu métier) ?',
              options: [
                'La gratuité totale financée par des bannières publicitaires grand public',
                'L’abonnement SaaS B2B ou la licence professionnelle avec support dédié',
                'Le modèle de don bénévole type Wikipédia',
                'Un jeu mobile financé par des micro-achats de divertissement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur une niche B2B de 300 clients à forte valeur métier, ni la publicité ni le freemium grand public ne sont rentables ; l’abonnement SaaS ou la licence B2B assure la viabilité.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Résilience',
            stepTheme: 'Mono-dépendance',
            stepTitle: 'Le risque de mono-dépendance et la diversification progressive',
            paragraphText:
              'Dépendre d’une source de revenus unique expose l’entreprise numérique à une vulnérabilité critique en cas de choc technologique, concurrentiel ou réglementaire.\n' +
              '• **Risque mono-publicité** : chute des revenus si les annonceurs coupent leurs budgets en crise ou si les navigateurs bloquent les cookies tiers.\n' +
              '• **Risque mono-commission** : guerre des prix avec un nouvel entrant qui casse les taux de commission pour capter les vendeurs.\n' +
              '• **Stratégie de diversification** : démarrer avec un moteur principal clair pour ne pas se disperser, puis ajouter une 2e source complémentaire (ex. commission + services SaaS pour vendeurs ou pub sponsorisée).',
            keyRule:
              'Au démarrage, il faut concentrer ses efforts sur UN moteur de revenus principal prouvé ; à maturité, l’hybridation renforce la résilience et les marges.',
            konanTip:
              'Évite le piège inverse au lancement : proposer 5 modes de facturation compliqués dès le jour 1 trouble les clients. Commence simple, puis hybride avec la croissance !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle trajectoire est recommandée entre le lancement d’une start-up et sa phase de maturité concernant ses sources de revenus ?',
              options: [
                'Ne jamais facturer aucun client avant dix ans d’existence',
                'Valider d’abord un moteur de revenus principal simple et lisible, puis diversifier progressivement vers un modèle hybride résilient',
                'Imposer six tarifs différents incompatibles dès le premier jour',
                'Supprimer toute source de revenus dès que la base d’utilisateurs grandit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La simplicité initiale facilite la compréhension par le marché et les tests PMF, puis l’ajout progressif de revenus complémentaires réduit le risque de mono-dépendance.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : MODÈLES DE REVENUS ET MONÉTISATION DIGITALE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch2',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Modèles de revenus et monétisation digitale',
    summary:
      'Maîtriser le modèle publicitaire en ligne (écosystème, formats Search/Display/Vidéo, tarification CPM, CPV, CPC, CPE, CPA, CPL, CPI), le modèle par abonnement (propriété vs accès, tarification flat rate, freemium, versioning, pay-per-use) et ses enjeux (fatigue, lock-in, inclusion, sobriété).',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Modèles de Développement en Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 2.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1',
        order: 1,
        title: 'Écosystème et formats de la publicité en ligne',
        summary:
          'Comprendre le marché biface publicitaire (attention + données contre gratuité), les 5 acteurs de la chaîne adtech et les formats Search, Display et Vidéo.',
        conceptExplanation:
          'La **publicité** est une communication payante visant à influencer l’attitude et le comportement d’une cible envers un produit, un service ou une cause. Dans le numérique, le **modèle économique publicitaire** repose sur la monétisation de l’attention des utilisateurs auprès d’annonceurs sur un **marché biface** : l’utilisateur accède gratuitement au service et « paie » avec son attention et ses données, tandis que les annonceurs financent la plateforme grâce au ciblage.\n\n' +
          'L’écosystème réunit **cinq catégories d’acteurs** : les **annonceurs** (entreprises qui achètent la visibilité), les **agences** (conseil et création média), les **intermédiaires technologiques** (régies, DSP, SSP, ad exchanges), les **éditeurs** (sites, applications, plateformes offrant l’audience) et les **internautes**.\n\n' +
          'Trois grandes familles de formats structurent le marché : le **Search** (liens sponsorisés et Shopping Ads déclenchés par mots-clés sur Google/Bing Ads), le **Display** (bannières, rich media, Native Ads imitant le design du site) et la **Vidéo** (Pre-roll, Mid-roll, Out-stream et Bumpers très courts sur YouTube ou TikTok).',
        keyRule:
          'Dans le modèle publicitaire, l’internaute est le destinataire gratuit qui fournit son attention et ses données ; l’annonceur est le véritable client payeur.',
        formulas: [
          {
            name: 'Échange économique du modèle publicitaire',
            formula: '\\text{Internaute (Attention + Données)} \\xrightarrow{\\text{Éditeur / AdTech}} \\text{Annonceur (Budget Pub)} \\longrightarrow \\text{Gratuité du service}',
            note: 'La rentabilité dépend de la précision du ciblage et du volume d’audience qualifiée.',
          },
        ],
        workedExample: {
          title: 'Choisir les formats publicitaires pour lancer une école de code à Abidjan',
          statement:
            'Un institut de formation numérique à Abidjan souhaite recruter de nouveaux bacheliers pour sa rentrée. Comment doit-il combiner les formats Search, Display et Vidéo ?',
          methodSteps: [
            'Search (Google Ads) : acheter des mots-clés d’intention forte comme « licence informatique Abidjan » ou « école développement web Côte d’Ivoire » pour capter les candidats qui cherchent déjà activement.',
            'Vidéo (YouTube / TikTok) : diffuser des formats Pre-roll ou Bumpers courts montrant des témoignages d’étudiants et projets réalisés pour créer la notoriété.',
            'Display / Native Ads : afficher des bannières ciblées sur des portails d’orientation scolaire ou articles éducatifs pour rappeler l’ouverture des inscriptions (retargeting).',
          ],
          conclusion:
            'Le Search capte une demande existante intentionnelle, tandis que le Display et la Vidéo créent la notoriété auprès de prospects qui ne cherchaient pas encore.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Modèle Pub',
            stepTheme: 'Marché biface',
            stepTitle: 'Principe du modèle publicitaire : attention et données contre gratuité',
            paragraphText:
              'Pourquoi Google, YouTube ou les grands réseaux sociaux offrent-ils gratuitement des services qui coûtent des milliards de dollars à exploiter ? Grâce à la mécanique du marché biface publicitaire.\n' +
              '• **Côté utilisateur** : accès gratuit au moteur de recherche, à la vidéo ou au réseau social ; en contrepartie, l’utilisateur cède son **attention** et ses **données** de navigation.\n' +
              '• **Côté annonceur** : les marques paient la plateforme pour toucher des segments précis au moment opportun.\n' +
              '• **Exemple** : lorsqu’un internaute recherche « acheter téléphone Abidjan », son intention immédiate vaut très cher pour les boutiques e-commerce prêtes à enchérir pour apparaître en tête.',
            keyRule:
              'Le modèle publicitaire monétise l’attention et les données comportementales des utilisateurs gratuits auprès d’annonceurs ciblés.',
            konanTip:
              'Retiens la formule célèbre : dans un modèle purement publicitaire, l’utilisateur gratuit n’est pas le client — il apporte l’audience que la plateforme vend aux annonceurs !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Dans le modèle économique basé sur la publicité en ligne, avec quelles ressources l’utilisateur finance-t-il indirectement la gratuité du service ?',
              options: [
                'Par un prélèvement fiscal automatique sur son salaire',
                'Avec son attention et ses données d’usage exploitées pour le ciblage publicitaire auprès des annonceurs',
                'En fournissant gratuitement ses propres serveurs à la plateforme',
                'Par un abonnement mensuel obligatoire payé en espèces',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans un marché biface publicitaire, les internautes accèdent gratuitement au service tout en apportant leur attention et leurs données, que la plateforme monétise auprès des annonceurs.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: '5 Acteurs',
            stepTheme: 'Écosystème AdTech',
            stepTitle: 'Les cinq acteurs de la chaîne de la publicité en ligne',
            paragraphText:
              'Entre l’entreprise qui veut vendre un produit et l’écran de votre smartphone où s’affiche sa bannière intervient un écosystème structuré en cinq maillons.\n' +
              '• **1. Les annonceurs** : entreprises, marques ou institutions qui financent les campagnes.\n' +
              '• **2. Les agences** : conçoivent les créations publicitaires et planifient l’achat média.\n' +
              '• **3. Les intermédiaires technologiques (AdTech)** : plateformes automatisées (DSP côté acheteur, SSP côté éditeur, Ad Exchanges) réalisant les enchères en temps réel.\n' +
              '• **4. Les éditeurs** : sites d’actualité, blogs, applications mobiles, réseaux sociaux offrant l’espace publicitaire.\n' +
              '• **5. Les internautes** : audiences exposées aux messages.',
            keyRule:
              'La chaîne publicitaire numérique relie Annonceurs → Agences → Intermédiaires technologiques → Éditeurs → Internautes.',
            konanTip:
              'Retiens ces 5 maillons dans l’ordre de flux financier : l’argent part de l’Annonceur, traverse Agence & AdTech (qui prennent une commission), et rémunère l’Éditeur pour l’audience de l’Internaute.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Quel rôle jouent les « éditeurs » dans l’écosystème de la publicité en ligne ?',
              options: [
                'Ils fabriquent uniquement les écrans de smartphones',
                'Ils produisent des contenus ou services numériques attirant des internautes et mettent à disposition leurs espaces publicitaires pour se financer',
                'Ils interdisent aux annonceurs d’acheter de la visibilité',
                'Ils collectent exclusivement les impôts de l’État',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les éditeurs (médias, sites, applis, plateformes vidéo) attirent l’audience et vendent l’accès à leurs inventaires publicitaires.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Format Search',
            stepTheme: 'Intention directe',
            stepTitle: 'Publicité sur les moteurs de recherche (Search Ads & Shopping)',
            paragraphText:
              'Pourquoi la publicité sur moteur de recherche affiche-t-elle des taux de conversion bien supérieurs aux bannières classiques ? Parce qu’elle répond à une intention explicite immédiate.\n' +
              '• **Formats principaux** : liens sponsorisés (texte + lien) et **Shopping Ads** (avec photo, prix et avis client).\n' +
              '• **Déclenchement par mots-clés** : l’annonce s’affiche uniquement lorsqu’un internaute tape une requête ciblée (ex. « billet avion Abidjan Dakar »).\n' +
              '• **Supports majeurs** : **Google Ads**, Bing Ads.',
            keyRule:
              'Le Search capte une intention d’achat ou d’information exprimée à l’instant T par l’utilisateur via des mots-clés.',
            konanTip:
              'Distingue Search (pull : l’utilisateur cherche activement et clique) vs Display/Vidéo (push : on interrompt ou on accompagne sa navigation pour susciter l’intérêt).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quel mécanisme déclenche l’affichage d’une annonce publicitaire de type « Search » (Google Ads, Bing Ads) ?',
              options: [
                'Le hasard complet sans lien avec la page visitée',
                'La saisie de mots-clés spécifiques traduisant l’intention de recherche de l’internaute',
                'L’achat préalable d’un journal papier',
                'La fermeture du navigateur web',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les annonces Search (liens sponsorisés, Shopping Ads) sont déclenchées en temps réel par les mots-clés saisis dans le moteur de recherche.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Format Display',
            stepTheme: 'Bannières & Native',
            stepTitle: 'Publicité Display : bannières, rich media et Native Ads',
            paragraphText:
              'Le Display transpose et enrichit l’affichage publicitaire traditionnel sur l’ensemble des sites web et applications mobiles.\n' +
              '• **Bannières et Rich Media** : formats graphiques visuels (images, animations, formats interactifs) intégrés en haut, sur le côté ou au cœur des pages web (ex. Google Display Network).\n' +
              '• **Native Ads (publicité native)** : annonces conçues pour **imiter le design et le format éditorial** du site hôte (ex. un article sponsorisé dans un fil d’actualité) afin de moins perturber la lecture.\n' +
              '• **Usage stratégique** : idéal pour développer la notoriété visuelle d’une marque et recibler (« retargeting ») les visiteurs passés.',
            keyRule:
              'Le Display englobe bannières visuelles, formats interactifs (rich media) et Native Ads intégrées au design du média hôte.',
            konanTip:
              'Retiens la définition exacte du « Native Ad » : une publicité qui adopte la forme visuelle et éditoriale du support qui l’accueille (tout en devant légalement porter la mention « Sponsorisé »).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Qu’est-ce qu’une « Native Ad » (publicité native) dans la catégorie du Display ?',
              options: [
                'Une publicité qui bloque complètement l’écran pendant 60 secondes avec un son fort',
                'Une annonce qui imite la mise en page, le design et l’apparence des contenus éditoriaux du site qui l’héberge',
                'Une publicité réservée exclusivement aux moteurs de recherche textuels',
                'Une annonce distribuée uniquement par courrier postal',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La publicité native s’intègre esthétiquement et ergonomiquement au contenu du média (fil d’actualité, article sponsorisé) pour maximiser l’attention sans rupture visuelle brutale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Format Vidéo',
            stepTheme: 'Pre/Mid-roll & Bumpers',
            stepTitle: 'Publicité Vidéo et achats programmatiques en temps réel',
            paragraphText:
              'Avec l’explosion de la consommation mobile sur YouTube, TikTok et Instagram Reels, la vidéo est devenue le format publicitaire à plus forte croissance.\n' +
              '• **Pre-roll / Mid-roll** : annonces diffusées avant (**pre-roll**) ou pendant (**mid-roll**) une vidéo consultée par l’internaute.\n' +
              '• **Out-stream** : format vidéo apparaissant en dehors d’un lecteur vidéo (ex. au milieu d’un article texte).\n' +
              '• **Bumpers** : formats vidéo très courts (environ 6 secondes, non désactivables) pensés pour mémoriser un slogan ou un logo.\n' +
              '• **Programmatique (RTB)** : achat automatisé de ces espaces aux enchères en quelques millisecondes à chaque chargement de page.',
            keyRule:
              'La vidéo combine fort impact émotionnel (Pre-roll, Mid-roll, Out-stream, Bumpers) et ciblage automatisé en temps réel (programmatique).',
            konanTip:
              'Repère les préfixes anglais : PRE-roll (avant), MID-roll (au milieu), OUT-stream (hors lecteur vidéo), Bumper (très court).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on les formats publicitaires vidéo très courts (quelques secondes) diffusés notamment sur YouTube pour renforcer rapidement la mémorisation de marque ?',
              options: [
                'Les Shopping Ads textuels',
                'Les Bumpers',
                'Les licences API',
                'Les fichiers CSV',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les Bumpers sont des formats vidéo ultra-courts conçus pour une mémorisation rapide et efficace de la marque.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limites Pub',
            stepTheme: 'Adblockers & Cookies',
            stepTitle: 'Vulnérabilités du modèle publicitaire : adblockers et fin des cookies tiers',
            paragraphText:
              'Longtemps considéré comme infaillible, le modèle purement publicitaire montre aujourd’hui des fragilités techniques, économiques et réglementaires.\n' +
              '• **Saturation et Adblockers** : l’intrusion excessive pousse des centaines de millions d’internautes à installer des bloqueurs de publicité, réduisant les revenus des petits médias.\n' +
              '• **Durcissement sur les données** : restriction des cookies tiers (Safari, Firefox, régulations vie privée) et demande de consentement explicite réduisent la précision du ciblage.\n' +
              '• **Concentration du marché** : les géants (Google, Meta, TikTok) captent l’immense majorité des budgets grâce à leurs données internes (« first-party data »), fragilisant la presse en ligne indépendante.',
            keyRule:
              'La dépendance totale à la publicité devient risquée pour les éditeurs indépendants, qui se tournent de plus en plus vers l’abonnement, le sponsoring ou les modèles hybrides.',
            konanTip:
              'Distingue « First-party data » (données collectées directement par le site auprès de ses propres utilisateurs inscrits — très résilientes) et « Third-party cookies » (pisteurs tiers en voie de disparition).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi de nombreux médias en ligne cherchent-ils à compléter la publicité par des abonnements payants ?',
              options: [
                'Parce que la publicité en ligne est interdite pour les journaux',
                'En raison de la baisse de rendement liée aux bloqueurs de publicité, aux restrictions sur les cookies tiers et à la captation des budgets par les grandes plateformes',
                'Parce que les abonnements ne nécessitent aucune qualité éditoriale',
                'Pour réduire volontairement leur nombre de lecteurs à zéro',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’essor des adblockers, la restriction du pistage tiers et le duopole Google/Meta fragilisent la rentabilité publicitaire des éditeurs moyens.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2',
        order: 2,
        title: 'Tarification publicitaire (CPM au CPA) et monétisation des données B2B',
        summary:
          'Calculer et comparer les 7 modèles de tarification publicitaire (CPM, CPV, CPC, CPE, CPA, CPL, CPI), analyser le partage du risque éditeur/annonceur et étudier la monétisation directe de données.',
        conceptExplanation:
          'Dans la publicité en ligne, le prix payé par l’annonceur varie selon l’étape du tunnel marketing visée et le **partage du risque** entre annonceur et éditeur :\n' +
          '1. **Visibilité et notoriété (volume)** : **CPM** (Coût Pour Mille impressions/affichages) et **CPV** (Coût Par Vue vidéo, ex. 30 s ou vidéo complète).\n' +
          '2. **Engagement et trafic** : **CPC** (Coût Par Clic, facturé uniquement si l’internaute clique, standard du Search et des réseaux sociaux) et **CPE** (Coût Par Engagement : like, partage, commentaire, interaction).\n' +
          '3. **Performance et résultats** : **CPA** (Coût Par Action / Acquisition finale : achat, inscription), **CPL** (Coût Par Lead : contact commercial/devis qualifié) et **CPI** (Coût Par Installation d’application mobile).\n\n' +
          'Plus on descend vers la performance (du CPM au CPA), plus l’annonceur est protégé contre les clics inutiles, et plus la plateforme supporte le risque d’efficacité grâce à ses algorithmes de ciblage. En parallèle, des acteurs B2B comme **Bloomberg** ou **Experian** monétisent directement des données agrégées sans afficher de publicité.',
        keyRule:
          'Du CPM au CPA, la facturation se rapproche du résultat commercial réel : CPM/CPV (visibilité) → CPC/CPE (trafic/interaction) → CPA/CPL/CPI (conversion finale).',
        formulas: [
          {
            name: 'Taux de clic (CTR) et Coût Par Mille (CPM)',
            formula: 'CTR = \\frac{\\text{Clics}}{\\text{Impressions}} \\times 100 \\qquad;\\qquad CPM = \\frac{\\text{Coût total}}{\\text{Impressions}} \\times 1\\,000',
            note: 'Un CTR élevé réduit généralement le CPC effectif d’une campagne achetée au CPM.',
          },
          {
            name: 'Coût Par Clic (CPC) et Coût Par Acquisition (CPA)',
            formula: 'CPC = \\frac{\\text{Coût total}}{\\text{Nombre de clics}} \\qquad;\\qquad CPA = \\frac{\\text{Coût total}}{\\text{Conversions (achats/inscriptions)}}',
            note: 'Si le taux de conversion après clic est τ_conv, alors CPA = CPC / τ_conv.',
          },
        ],
        workedExample: {
          title: 'Évaluer une campagne d’acquisition d’une fintech ivoirienne',
          statement:
            'Une fintech dépense 300 000 FCFA en publicité en ligne. Sa campagne génère 200 000 impressions, 4 000 clics et 250 installations effectives de l’application mobile. Calculez le CPM, le CTR, le CPC et le CPI.',
          methodSteps: [
            'CPM = (300 000 / 200 000) × 1 000 = 1 500 FCFA pour 1 000 affichages.',
            'CTR (taux de clic) = (4 000 / 200 000) × 100 = 2 %.',
            'CPC effectif = 300 000 / 4 000 = 75 FCFA par clic.',
            'CPI (Coût Par Installation) = 300 000 / 250 = 1 200 FCFA par installation.',
          ],
          conclusion:
            'Ces quatre indicateurs permettent au responsable marketing d’arbitrer entre notoriété (CPM) et rentabilité d’acquisition (CPI ≤ valeur du client).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Notoriété',
            stepTheme: 'CPM & CPV',
            stepTitle: 'Modèles de visibilité : CPM (mille impressions) et CPV (vue vidéo)',
            paragraphText:
              'Lorsqu’une nouvelle marque veut se faire connaître massivement à l’occasion d’un lancement, elle achète avant tout du volume d’exposition.\n' +
              '• **CPM (Coût Pour Mille)** : l’annonceur paie un tarif fixe pour chaque tranche de **1 000 impressions** (affichages de l’annonce à l’écran), qu’il y ait clic ou non.\n' +
              '• **CPV (Coût Par Vue)** : spécifique au format vidéo ; la facturation se déclenche uniquement lorsqu’un utilisateur visionne une durée définie (ex. 30 secondes ou vidéo complète).\n' +
              '• **Exemple** : avec un budget de 200 000 FCFA et un CPM de 1 000 FCFA, l’annonce est affichée 200 000 fois.',
            formula: {
              name: 'Budget en fonction du CPM',
              formula: '\\text{Budget} = \\frac{\\text{Impressions}}{1\\,000} \\times CPM',
              note: 'Idéal pour les campagnes de notoriété (« brand awareness ») visant la portée maximale.',
            },
            keyRule:
              'CPM = facturation au volume d’affichages (par 1 000) ; CPV = facturation au visionnage vidéo effectif.',
            konanTip:
              'Attention au M de CPM : il signifie « Mille » (chiffre romain M = 1 000), et non « Million » !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une entreprise règle une campagne publicitaire 450 000 FCFA pour obtenir 300 000 affichages. Quel est son CPM (Coût Pour Mille) ?',
              options: ['150 FCFA', '1 500 FCFA', '3 000 FCFA', '15 000 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'CPM = (450 000 / 300 000) × 1 000 = 1,5 × 1 000 = 1 500 FCFA pour 1 000 impressions.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Trafic & Interaction',
            stepTheme: 'CPC & CPE',
            stepTitle: 'Modèles d’engagement et de trafic : CPC et CPE',
            paragraphText:
              'Si votre objectif n’est pas seulement d’être vu mais d’amener des visiteurs vers votre site ou de créer de l’interaction sociale, on passe au CPC ou au CPE.\n' +
              '• **CPC (Coût Par Clic)** : l’annonceur ne paie que lorsqu’un internaute **clique effectivement** sur l’annonce (standard de Google Ads et des réseaux sociaux pour générer du trafic qualifié).\n' +
              '• **CPE (Coût Par Engagement)** : la facturation se déclenche lors d’une interaction mesurable (like, partage, commentaire, déploiement d’une bannière interactive).\n' +
              '• **Exemple** : si une campagne au CPC coûte 150 FCFA/clic et génère 1 000 clics vers une fiche produit, l’annonceur paie 150 000 FCFA même si l’annonce a été vue 50 000 fois.',
            keyRule:
              'Au CPC, les impressions sans clic sont gratuites pour l’annonceur : il ne paie que le trafic effectivement envoyé sur sa page.',
            konanTip:
              'Retiens le modèle standard de Google Search : c’est le CPC couplé à un système d’enchères tenant compte aussi de la pertinence (Quality Score).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Dans quel modèle de tarification publicitaire l’annonceur est-il facturé uniquement lorsqu’un utilisateur « like », commente, partage ou interagit avec le format ?',
              options: [
                'Le CPM (Coût Pour Mille)',
                'Le CPE (Coût Par Engagement)',
                'Le CPI (Coût Par Installation)',
                'Le CPV (Coût Par Vue)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le CPE (Cost Per Engagement) déclenche le paiement lors d’une interaction spécifique de l’utilisateur avec l’annonce.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Performance',
            stepTheme: 'CPA, CPL, CPI',
            stepTitle: 'Modèles à la performance : CPA, CPL et CPI',
            paragraphText:
              'Comment réduire au maximum le gaspillage budgétaire quand on cherche des résultats commerciaux concrets ? Les modèles à la performance lient directement la facture à l’action finale.\n' +
              '• **CPA (Coût Par Action / Acquisition)** : paiement déclenché uniquement lors d’une conversion finale (achat validé, inscription payante, téléchargement).\n' +
              '• **CPL (Coût Par Lead)** : variante B2B/services où l’on paie pour chaque contact commercial qualifié généré (ex. formulaire de devis rempli).\n' +
              '• **CPI (Coût Par Installation)** : quasi exclusif aux applications mobiles, facturé à chaque installation générée par l’annonce.',
            keyRule:
              'CPA = action/achat final ; CPL = prospect qualifié (formulaire/devis) ; CPI = installation d’application mobile.',
            konanTip:
              'Retiens les trois lettres finales pour ne jamais les confondre : A = Action/Achat, L = Lead (prospect), I = Installation (mobile).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Une entreprise B2B de logiciels souhaite payer uniquement chaque fois qu’un directeur financier remplit un formulaire pour demander une démonstration. Quel modèle choisit-elle ?',
              options: [
                'Le CPL (Coût Par Lead)',
                'Le CPI (Coût Par Installation)',
                'Le CPM (Coût Pour Mille)',
                'Le CPV (Coût Par Vue)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le CPL (Coût Par Lead) est une variante du CPA dédiée à la génération de contacts commerciaux qualifiés (demandes de devis ou de démonstration).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Matrice & Calculs',
            stepTheme: 'Arbitrage objectifs',
            stepTitle: 'Matrice des objectifs publicitaires et calcul du coût d’acquisition',
            paragraphText:
              'Choisir entre CPM, CPC et CPA exige de croiser votre objectif marketing avec votre tolérance au risque budgétaire.\n' +
              '• **Haut de tunnel (Notoriété)** : CPM et CPV maximisent la portée pour faire connaître une marque.\n' +
              '• **Milieu de tunnel (Trafic & Engagement)** : CPC et CPE attirent des visiteurs et mesurent l’intérêt.\n' +
              '• **Bas de tunnel (Conversion)** : CPA, CPL et CPI optimisent le retour sur investissement (ROI) mesurable.\n' +
              '• **Relation mathématique** : si $CPC = 100\\text{ FCFA}$ et que $5\\%$ des visiteurs achètent, alors le coût d’acquisition effectif vaut $CPA = 100 / 0{,}05 = 2\\ 000\\text{ FCFA}$.',
            keyRule:
              'Plus le taux de clic (CTR) et le taux de conversion d’un site sont élevés, plus le CPA effectif diminue pour un même budget.',
            konanTip:
              'Utilise la matrice 2×2 ci-dessous pour relier immédiatement chaque acronyme publicitaire à son objectif marketing et au porteur du risque.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice de choix des modèles de tarification publicitaire',
              caption: 'Positionnement selon l’objectif du tunnel marketing et le transfert du risque de performance.',
              matrix2x2: {
                topAxis: ['Risque porté par l’ANNONCEUR', 'Risque partagé / porté par la PLATEFORME'],
                leftAxis: ['NOTORIÉTÉ & INTÉRÊT', 'CONVERSION & RÉSULTAT'],
                topLeft: {
                  title: 'CPM & CPV (Volume)',
                  color: 'blue',
                  items: [
                    'CPM : 1 000 impressions',
                    'CPV : vue vidéo effective',
                    'Idéal lancement de marque / portée',
                  ],
                },
                topRight: {
                  title: 'CPC & CPE (Engagement)',
                  color: 'violet',
                  items: [
                    'CPC : clic effectif (Search, Social)',
                    'CPE : like, partage, commentaire',
                    'Idéal trafic qualifié vers site web',
                  ],
                },
                bottomLeft: {
                  title: 'Sponsoring forfaitaire',
                  color: 'orange',
                  items: [
                    'Habillage de site ou newsletter',
                    'Coût fixe indépendant des clics',
                    'Association d’image éditoriale',
                  ],
                },
                bottomRight: {
                  title: 'CPA, CPL & CPI (Performance)',
                  color: 'green',
                  items: [
                    'CPA : achat ou inscription finale',
                    'CPL : formulaire / contact B2B',
                    'CPI : installation d’appli mobile',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Un e-commerçant paie ses annonces au CPC à 120 FCFA par clic. Si 4 % des visiteurs qui cliquent finalisent un achat, quel est son CPA (Coût Par Acquisition) effectif ?',
              options: ['480 FCFA', '1 200 FCFA', '3 000 FCFA', '4 800 FCFA'],
              correctAnswerIndex: 2,
              explanation:
                'Pour obtenir 1 achat avec un taux de conversion de 4 % (0,04), il faut en moyenne 1 / 0,04 = 25 clics. CPA = 25 × 120 = 3 000 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Partage du risque',
            stepTheme: 'Éditeur vs Annonceur',
            stepTitle: 'Répartition du risque financier entre annonceur et plateforme',
            paragraphText:
              'Pourquoi les petits blogs préfèrent-ils facturer au CPM tandis que les grandes plateformes d’affiliation ou moteurs intelligents proposent du CPA ? Tout est question de partage du risque.\n' +
              '• **Au CPM** : si personne ne clique ni n’achète, l’éditeur encaisse quand même pour les 1 000 affichages ; l’**annonceur porte le risque**.\n' +
              '• **Au CPC** : le risque est partagé (l’éditeur doit provoquer le clic, l’annonceur doit convertir sur son site).\n' +
              '• **Au CPA** : si le visiteur n’achète pas, la régie ne gagne rien ; la **plateforme porte le risque**, ce qu’elle n’accepte que si ses algorithmes prédisent très bien les acheteurs.',
            keyRule:
              'Plus on descend du CPM vers le CPC puis le CPA, plus le risque financier bascule de l’annonceur vers la plateforme publicitaire.',
            konanTip:
              'C’est grâce à la puissance prédictive de l’IA sur les données utilisateurs que Meta ou Google peuvent facturer au CPA/CPI tout en restant ultra-rentables !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans quel modèle de facturation publicitaire le risque financier d’inefficacité de la campagne pèse-t-il au maximum sur l’annonceur ?',
              options: [
                'Au CPA (Coût Par Acquisition)',
                'Au CPM (Coût Pour Mille impressions)',
                'Au CPL (Coût Par Lead qualifié)',
                'Au CPI (Coût Par Installation)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Au CPM, l’annonceur paie pour les affichages même s’il n’obtient ni clic ni vente ; il assume donc l’intégralité du risque de non-conversion.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Monétisation Data',
            stepTheme: 'Bloomberg & Experian',
            stepTitle: 'Monétiser les données sans publicité : les cas Bloomberg, Experian et fintechs',
            paragraphText:
              'La donnée n’alimente pas uniquement le ciblage publicitaire : elle peut être vendue directement comme produit d’aide à la décision B2B à très haute valeur.\n' +
              '• **Données financières (Bloomberg)** : vente d’abonnements coûteux (terminaux) donnant accès en temps réel aux cotations, flux macroéconomiques et analyses agrégées.\n' +
              '• **Scoring et risque (Experian)** : agrégation d’historiques de paiement pour vendre aux banques des scores de solvabilité réduisant les défauts de crédit.\n' +
              '• **Fintechs africaines** : valorisation anonymisée et conforme des historiques Mobile Money pour scorer les micro-entrepreneurs sans garantie bancaire.',
            keyRule:
              'La monétisation directe de données agrégées transforme la connaissance statistique en service B2B récurrent à marge très élevée.',
            konanTip:
              'Attention à l’éthique et à la loi : la monétisation des données doit toujours respecter l’anonymisation/agrégation et le consentement réglementaire, jamais la fuite de données brutes nominatives sans base légale.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'En quoi la stratégie de monétisation des données de Bloomberg ou d’Experian diffère-t-elle de celle d’un réseau social publicitaire ?',
              options: [
                'Ils vendent directement des analyses, terminaux et scores agrégés à haute valeur décisionnelle en B2B plutôt que des espaces publicitaires grand public',
                'Ils distribuent gratuitement leurs terminaux à tous les lycéens du monde',
                'Ils refusent de traiter des données chiffrées',
                'Ils dépendent exclusivement de vidéos divertissantes pour adolescents',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Bloomberg et Experian vendent directement l’accès à des données structurées, agrégées et analytiques indispensables aux décisions financières B2B.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3',
        order: 3,
        title: 'Économie de l’abonnement : de la propriété à l’accès et tarification',
        summary:
          'Comparer modèle transactionnel (iTunes) et modèle récurrent (Spotify), analyser les avantages pour l’entreprise, le consommateur et l’écosystème, et maîtriser les 5 architectures tarifaires.',
        conceptExplanation:
          'Le **modèle économique basé sur l’abonnement** implique que les utilisateurs paient régulièrement pour accéder à un contenu ou un service numérique pendant une durée déterminée **sans en devenir propriétaire**. Il marque un basculement historique : du **modèle transactionnel** (achat définitif d’un bien ou téléchargement à l’unité, ex. iTunes) vers le **modèle récurrent** (location de l’accès au service, ex. Spotify).\n\n' +
          'Ce transfert profite aux trois parties : l’**entreprise** gagne des revenus prévisibles (meilleure valorisation), réduit le piratage grâce à l’authentification, suit les usages clients, déploie des mises à jour continues et amortit son coût d’acquisition ; le **consommateur** profite d’un coût d’entrée faible, d’un catalogue immense mutualisé, de flexibilité et de zéro obsolescence ; l’**écosystème** gagne en standardisation et en allocation optimisée des serveurs.\n\n' +
          'Cinq architectures tarifaires se distinguent : **abonnement pur (flat rate)**, **freemium** (2–5 % de payants subventionnent la masse gratuite), **tarification à plusieurs niveaux (versioning)**, **paiement à l’usage (pay-per-use)** et **modèles hybrides**.',
        keyRule:
          'L’abonnement transfère l’économie numérique de la propriété d’une unité (transactionnel) vers la location continue d’un accès (récurrent).',
        formulas: [
          {
            name: 'Condition d’équilibre du modèle Freemium',
            formula: '\\tau_{\\text{conv}} \\times ARPU_{\\text{payant}} \\;>\\; c_{\\text{marginal}} + \\frac{CAC_{\\text{moyen}}}{\\text{Durée de vie}}',
            note: 'Avec seulement 2 % à 5 % de conversion (τ_conv), le revenu des abonnés Premium doit couvrir les coûts serveurs de tous les utilisateurs gratuits.',
          },
        ],
        workedExample: {
          title: 'Dimensionner un modèle Freemium vs Versioning pour une appli musicale',
          statement:
            'Une plateforme de streaming audio compte 100 000 utilisateurs actifs mensuels. Chaque utilisateur coûte 50 FCFA/mois en bande passante et droits minimaux. En modèle Freemium pur, 4 % paient 2 500 FCFA/mois. Quelle marge mensuelle directe dégage-t-elle, et comment le versioning peut-il l’augmenter ?',
          methodSteps: [
            'Coût total mensuel d’exploitation des 100 000 utilisateurs : 100 000 × 50 FCFA = 5 000 000 FCFA.',
            'Nombre d’abonnés payants (4 %) : 0,04 × 100 000 = 4 000 abonnés.',
            'Chiffre d’affaires mensuel : 4 000 × 2 500 FCFA = 10 000 000 FCFA.',
            'Marge directe mensuelle : 10 000 000 - 5 000 000 = 5 000 000 FCFA (les 4 % payants subventionnent les 96 % gratuits).',
            'Optimisation par Versioning : ajouter une offre Étudiant (1 500 FCFA), Standard (2 500 FCFA) et Famille 6 comptes (4 500 FCFA) afin de capturer le surplus de chaque segment.',
          ],
          conclusion:
            'La combinaison d’un tunnel Freemium efficace et d’une gamme à plusieurs niveaux (versioning) maximise la conversion et le revenu moyen.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Propriété → Accès',
            stepTheme: 'Transactionnel vs Récurrent',
            stepTitle: 'Du modèle transactionnel (iTunes) au modèle récurrent (Spotify)',
            paragraphText:
              'Pendant longtemps, consommer de la musique ou un logiciel signifiait acheter un objet ou un fichier qui nous appartenait pour toujours. L’abonnement renverse cette logique.\n' +
              '• **Modèle transactionnel** : achat définitif à l’unité (ex. acheter un morceau ou un album sur iTunes, ou une boîte de logiciel).\n' +
              '• **Modèle récurrent par abonnement** : paiement périodique pour un **accès temporaire** à un catalogue ou service tant que l’abonnement est actif (ex. Spotify, Netflix).\n' +
              '• **Transformation profonde** : la valeur se déplace de la **propriété du bien** vers l’**usage continu du service**.',
            keyRule:
              'L’abonnement transfère la logique économique de la propriété définitive d’un bien vers la location continue d’un service mis à jour.',
            konanTip:
              'L’exemple historique à retenir : iTunes (achat définitif à 0,99 $ par titre) supplanté par Spotify (abonnement mensuel donnant accès à tout le catalogue).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle opposition caractérise le passage du modèle transactionnel (iTunes) au modèle par abonnement (Spotify) ?',
              options: [
                'Le passage de la gratuité absolue à l’interdiction d’Internet',
                'Le transfert de la propriété définitive d’un bien acheté à l’unité vers la location d’un accès continu à un service',
                'Le passage du streaming en ligne à la gravure de CD physiques',
                'La suppression totale de toute rémunération des éditeurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le modèle transactionnel transfère la propriété d’une unité achetée définitivement, alors que l’abonnement donne un accès temporaire récurrent sans transfert de propriété.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Avantages Entreprise',
            stepTheme: 'Trésorerie & Piratage',
            stepTitle: 'Les cinq avantages de l’abonnement pour l’entreprise',
            paragraphText:
              'Pourquoi presque tous les éditeurs de logiciels (Adobe, Microsoft) et producteurs culturels préfèrent-ils aujourd’hui l’abonnement à la vente unique ?\n' +
              '• **1. Revenus prévisibles** : trésorerie régulière (MRR/ARR) permettant de mieux planifier et d’obtenir une valorisation boursière plus élevée.\n' +
              '• **2. Réduction du piratage** : l’accès cloud exige une authentification continue, difficile à pirater massivement.\n' +
              '• **3. Données clients & mises à jour continues** : suivi précis des usages pour personnaliser le produit et fin des cycles coûteux de sorties de versions.\n' +
              '• **4. Amortissement du CAC** : un abonné fidèle rapporte mois après mois.',
            keyRule:
              'L’abonnement apporte à l’entreprise : prévisibilité financière, lutte anti-piratage, données d’usage continues, déploiement agile et amortissement du coût d’acquisition.',
            konanTip:
              'Retiens en particulier l’argument anti-piratage : avant, il suffisait de pirater un DVD d’installation ; avec un service SaaS authentifié sur serveur, le piratage devient beaucoup plus complexe.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le passage au modèle SaaS par abonnement réduit-il fortement le piratage logiciel par rapport à la vente de licences sur support physique ?',
              options: [
                'Parce que les logiciels SaaS ne contiennent aucune ligne de code',
                'Parce que l’accès au service hébergé nécessite une authentification permanente côté serveur, limitant la copie illicite',
                'Parce que les prix sont multipliés par 100 dès l’inscription',
                'Parce que les ordinateurs refusent d’exécuter les programmes en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’exécution hébergée couplée à une authentification continue complique le contournement massif par rapport aux logiciels installés localement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Avantages Usager',
            stepTheme: 'Coût d’entrée & Écosystème',
            stepTitle: 'Les bénéfices pour le consommateur et l’écosystème numérique',
            paragraphText:
              'Si les consommateurs adhèrent massivement aux abonnements, c’est qu’ils y trouvent aussi des avantages concrets par rapport à l’achat initial élevé.\n' +
              '• **Pour le consommateur** : **coût d’entrée faible** (ex. 5 000 FCFA/mois au lieu de 300 000 FCFA pour une suite logicielle), **catalogue immense** grâce à la mutualisation des coûts entre abonnés, **flexibilité** de résiliation et **zéro obsolescence** (mises à jour automatiques).\n' +
              '• **Pour l’écosystème** : standardisation des usages, suppression des coûts de distribution physique (CD, boîtes) et meilleure allocation de la bande passante et des serveurs.',
            keyRule:
              'Pour l’usager, l’abonnement remplace une grosse barrière financière initiale par un accès immédiat, flexible, mutualisé et toujours à jour.',
            konanTip:
              'N’oublie jamais le troisième niveau d’analyse : l’écosystème numérique (standardisation, disparition du coût logistique physique, optimisation des serveurs).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quel avantage direct le modèle par abonnement procure-t-il au consommateur par rapport à l’achat initial d’une licence logicielle traditionnelle ?',
              options: [
                'Une interdiction d’utiliser le service sur plusieurs mois',
                'Un coût d’entrée faible, un accès mutualisé à un large catalogue et des mises à jour automatiques sans obsolescence',
                'La propriété physique permanente des serveurs de l’éditeur',
                'L’obligation de payer 500 € dès la première seconde d’essai',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’abonnement abaisse la barrière financière d’entrée, mutualise un vaste catalogue et garantit des mises à jour continues.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Freemium & Tunnel',
            stepTheme: 'Conversion 2–5 %',
            stepTitle: 'Abonnement pur (Flat Rate) et tunnel de conversion Freemium',
            paragraphText:
              'Comment structurer concrètement l’offre d’accès payant ? Deux modèles dominent : l’abonnement pur et le Freemium.\n' +
              '• **Abonnement pur (Flat Rate)** : prix fixe mensuel pour un accès illimité (Netflix, Disney+, Canal+ Séries) ; limite : certains usagers consomment énormément, mais le coût marginal reste quasi nul.\n' +
              '• **Freemium** : version gratuite limitée (pubs, fonctions réduites, 40 min gratuites sur Zoom) + version payante complète ; seuls **2 % à 5 %** d’utilisateurs convertis subventionnent toute la masse gratuite (Spotify, Dropbox, LinkedIn Premium).\n' +
              '• **Tunnel de conversion** : le schéma ci-dessous retrace l’entonnoir d’acquisition jusqu’à l’abonné fidélisé.',
            keyRule:
              'Dans le modèle Freemium, un taux de conversion de 2 % à 5 % suffit souvent à rentabiliser l’ensemble de la base gratuite grâce au coût marginal quasi nul.',
            konanTip:
              'Observe le tunnel ci-dessous : chaque friction (manque de valeur perçue en gratuit ou paiement complexe) réduit le taux de conversion vers le Premium !',
            visualSchema: {
              type: 'flowchart',
              title: 'Tunnel d’acquisition et de conversion Freemium → Abonné Payant',
              caption: 'Comment 100 % d’utilisateurs gratuits nourrissent les 2 à 5 % d’abonnés qui financent la plateforme.',
              flowchart: {
                direction: 'horizontal',
                steps: [
                  { label: '1. Acquisition Gratuite', sublabel: '100 % d’inscrits (CAC faible)', kind: 'start', color: 'blue' },
                  { label: '2. Activation Usage', sublabel: 'Découverte de la valeur (Aha!)', kind: 'process', color: 'violet' },
                  { label: '3. Limite / Paywall', sublabel: 'Quota, pubs ou fonctions Pro', kind: 'decision', color: 'orange', branchLabel: '95–98 % restent gratuits', branchTarget: 'Usage soutenu par pub / viralité' },
                  { label: '4. Abonné Premium', sublabel: '2–5 % convertis subventionnent tout', kind: 'end', color: 'green' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Dans un modèle Freemium typique (Spotify, Dropbox, Zoom), quelle proportion approximative d’utilisateurs payants permet généralement de subventionner la masse gratuite ?',
              options: [
                'Entre 2 % et 5 % des utilisateurs',
                'Au moins 95 % des utilisateurs',
                'Exactement 0 % des utilisateurs',
                'Strictement 75 % des utilisateurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans le Freemium, la conversion de 2 % à 5 % vers les offres payantes suffit généralement à financer l’ensemble du service lorsque le coût marginal est quasi nul.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Versioning & Usage',
            stepTheme: 'Discrimination tarifaire',
            stepTitle: 'Versioning (paliers), Pay-per-use et modèles hybrides',
            paragraphText:
              'Proposer un tarif unique laisse de l’argent sur la table : les étudiants ont un petit budget, tandis que les familles ou professionnels acceptent de payer plus pour davantage de confort.\n' +
              '• **Versioning (tarification à plusieurs niveaux)** : formules croissantes (Basic, Standard, Premium) variant selon la qualité vidéo, le nombre d’écrans ou le stockage (ex. Netflix Essentiel / Standard / Premium) pour **capturer le surplus** de chaque segment.\n' +
              '• **Pay-per-use (à l’usage)** : paiement selon la consommation réelle (AWS à l’heure machine, cloud gaming) — équitable mais facture incertaine pour le client.\n' +
              '• **Hybride** : abonnement + achats intégrés, ou abonnement annuel avec remise (ancrage psychologique sur le tarif mensuel).',
            keyRule:
              'Le versioning segmente l’offre en 3–4 paliers pour capter le maximum de surplus du consommateur sans exclure les petits budgets.',
            konanTip:
              'Astuce prix : afficher un abonnement annuel à « -20 % vs tarif mensuel » ancre le client sur le prix mensuel élevé et sécurise la trésorerie sur 12 mois.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quel est l’objectif économique principal du « versioning » (proposer des paliers Essentiel, Standard et Premium comme Netflix) ?',
              options: [
                'Empêcher tous les étudiants de s’abonner au service',
                'Capturer le surplus des différents segments de clientèle selon leur disposition à payer et leurs besoins',
                'Rendre la facturation impossible à comprendre pour la comptabilité',
                'Éliminer le coût fixe des serveurs informatiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En différenciant qualité, écrans ou capacités selon des paliers tarifaires, l’entreprise adapte le prix à la disposition à payer de chaque segment.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Bascule historique',
            stepTheme: 'iTunes vs Spotify',
            stepTitle: 'Étude de cas : pourquoi le streaming par abonnement a supplanté iTunes',
            paragraphText:
              'Au début des années 2000, iTunes d’Apple avait sauvé l’industrie musicale en vendant des titres à l’unité (0,99 $). Pourtant, dix ans plus tard, le modèle d’abonnement (Spotify, Apple Music) a écrasé le téléchargement payant.\n' +
              '• **Limite d’iTunes (transactionnel)** : acheter 1 000 chansons coûtait près de 1 000 $, incitant les jeunes au piratage, et chaque écoute restait limitée aux titres achetés.\n' +
              '• **Force de Spotify (abonnement + freemium)** : pour le prix d’un seul album par mois, accès illimité à des dizaines de millions de titres, découverte par algorithmes et écoute fluide sur mobile.\n' +
              '• **Leçon stratégique** : Apple elle-même a dû s’adapter en lançant Apple Music par abonnement et en fermant progressivement iTunes.',
            keyRule:
              'Quand le coût marginal de distribution tend vers zéro et que le catalogue est immense, l’accès illimité mutualisé surclasse la vente à l’unité.',
            konanTip:
              'Retiens ce cas pour l’examen : il démontre que même un leader historique (Apple iTunes) peut être dépassé par un nouveau modèle économique (l’abonnement streaming) s’il n’évolue pas.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle raison économique majeure explique pourquoi le streaming par abonnement (Spotify) a supplanté le téléchargement à l’unité (iTunes) ?',
              options: [
                'Le téléchargement à l’unité offrait plus de chansons pour moins cher',
                'Pour le prix mensuel d’un seul album, l’abonnement mutualisé offre un accès quasi illimité à tout le catalogue avec découverte personnalisée et faible piratage',
                'Les smartphones modernes ne peuvent plus lire aucun fichier audio en ligne',
                'Spotify interdisait l’écoute sur téléphone mobile',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En mutualisant un catalogue massif pour un forfait mensuel accessible, le streaming offre beaucoup plus de valeur perçue par franc dépensé que l’achat à l’unité.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.4
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4',
        order: 4,
        title: 'Enjeux critiques de l’abonnement : fatigue, lock-in, inclusion et sobriété',
        summary:
          'Évaluer les cinq défis économiques et sociaux de la généralisation des abonnements : fatigue de l’abonnement et bouquets, coûts de changement (lock-in), barrières à l’entrée, inclusion financière, dépossession et sobriété numérique.',
        conceptExplanation:
          'Si l’abonnement séduit entreprises et investisseurs, sa généralisation à tous les aspects de la vie numérique engendre **six enjeux critiques** :\n' +
          '1. **Fatigue de l’abonnement** : l’accumulation de prélèvements (SVOD, musique, cloud, presse, logiciels) mène à un seuil de satiété, provoquant une guerre des prix et le regroupement en **bouquets** (Apple One, Google One).\n' +
          '2. **Coûts de changement (Lock-in)** : plus l’usager accumule playlists, historiques et configurations, plus quitter le service devient coûteux.\n' +
          '3. **Barrières à l’entrée** : les géants déjà dotés d’une base abonnée (ex. Amazon Prime) ajoutent de nouveaux services à coût marginal faible.\n' +
          '4. **Inclusion numérique** : l’abonnement exige souvent carte bancaire et connexion régulière, excluant non-bancarisés et zones blanches (d’où l’enjeu du Mobile Money).\n' +
          '5. **Dépossession** : en cas d’arrêt de paiement ou de fermeture du service, l’utilisateur ne possède rien et perd l’accès à ses contenus ou créations.\n' +
          '6. **Sobriété numérique** : le forfait illimité incite à consommer en continu pour « rentabiliser », accroissant trafic réseau et consommation énergétique.',
        keyRule:
          'L’économie de l’abonnement crée de la prévisibilité financière mais engendre fatigue budgétaire, enfermement (lock-in), risque d’exclusion bancaire, dépossession et surconsommation énergétique.',
        formulas: [
          {
            name: 'Arbitrage du bouquet (« Bundling »)',
            formula: 'P_{\\text{Bouquet (A + B + C)}} < P_A + P_B + P_C \\quad\\Longrightarrow\\quad \\downarrow\\text{Churn} \\;\\&\\; \\uparrow\\text{Barrière à l’entrée}',
            note: 'Les bouquets type Apple One ou Amazon Prime réduisent la fatigue de facturation multiple tout en verrouillant le client dans un écosystème unique.',
          },
        ],
        workedExample: {
          title: 'Adapter une offre d’abonnement EdTech au contexte ivoirien',
          statement:
            'Une plateforme de cours vidéo par abonnement (9,99 €/mois par carte Visa uniquement) constate un très faible taux de souscription auprès des étudiants d’Abidjan et de l’intérieur du pays. Identifiez les enjeux en cause et proposez des solutions.',
          methodSteps: [
            'Diagnostic d’inclusion numérique : l’exigence d’une carte bancaire internationale exclut la grande majorité des étudiants non bancarisés.',
            'Solution paiement : intégrer le paiement fractionné à la semaine ou au mois via Mobile Money (Wave, Orange Money, MTN MoMo) sans renouvellement forcé opaque.',
            'Diagnostic sobriété & connectivité : le streaming vidéo lourd en illimité consomme trop de data mobile.',
            'Solution technique : mode hors-ligne compressé permettant de télécharger les fiches et cours en Wi-Fi pour les réviser sans data.',
          ],
          conclusion:
            'Lever les barrières d’inclusion (paiement mobile, mode hors-ligne) transforme un modèle d’abonnement excluant en solution accessible.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'Satiété client',
            stepTheme: 'Fatigue & Bouquets',
            stepTitle: 'Fatigue de l’abonnement et contre-offensive par les bouquets (bundles)',
            paragraphText:
              'Un ménage moyen accumule aujourd’hui des prélèvements pour le streaming vidéo, la musique, le stockage cloud, la presse, le jeu en ligne et les logiciels : à un certain point, l’addition devient insupportable.\n' +
              '• **Fatigue de l’abonnement** : atteinte d’un seuil de satiété budgétaire face aux prélèvements automatiques multiples, entraînant hausse des résiliations (« churn ») et arbitrage sévère entre plateformes.\n' +
              '• **Réponse stratégique — Les bouquets (« bundles »)** : regroupement de plusieurs services sous une seule facture réduite (ex. **Apple One**, **Google One**, **Amazon Prime**) pour retenir le client et écarter les petits concurrents isolés.',
            keyRule:
              'La fatigue de l’abonnement déclenche la concentration du marché autour de bouquets multi-services (« bundles ») proposés par les géants.',
            konanTip:
              'Cite toujours les deux exemples phares de bouquets : Apple One (musique + cloud + TV + jeux) et Google One (stockage + services IA/cloud).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4_q1',
              type: 'mcq',
              prompt:
                'Quelle stratégie les géants du numérique (Apple One, Google One, Amazon Prime) déploient-ils face à la « fatigue de l’abonnement » des consommateurs ?',
              options: [
                'Multiplier par dix le prix de chaque service séparément',
                'Regrouper plusieurs services numériques complémentaires en un bouquet unique (« bundle ») à tarif avantageux',
                'Supprimer tous leurs services cloud et musicaux',
                'Obliger les utilisateurs à payer chaque seconde d’écoute au guichet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les offres groupées (bouquets) réduisent la sensation de prélèvements éparpillés, augmentent la valeur perçue et freinent les résiliations.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Lock-in',
            stepTheme: 'Coûts de changement',
            stepTitle: 'Coûts de changement (Lock-in) et captivité de l’utilisateur',
            paragraphText:
              'Pourquoi hésitons-nous à quitter une plateforme d’abonnement même si un concurrent devient légèrement moins cher ? À cause des coûts de changement (« switching costs »).\n' +
              '• **Mécanisme du Lock-in** : plus l’utilisateur investit du temps et des données dans une plateforme (playlists soigneusement triées, historiques de projets, configurations, fichiers cloud), plus partir devient pénible.\n' +
              '• **Exemple** : quitter Spotify ou un logiciel de design collaboratif implique de perdre ses listes de lecture, recommandations affinées ou gabarits de travail.\n' +
              '• **Enjeu concurrentiel** : ces coûts de changement créent une rente de captivité qui incite le régulateur à exiger la portabilité des données.',
            keyRule:
              'Les coûts de changement (lock-in) enferment progressivement l’abonné dans l’écosystème où il a investi temps, historiques et données.',
            konanTip:
              'Distingue deux formes de lock-in : le lock-in technique/contractuel (format propriétaire, engagement 12 mois) et le lock-in psychologique/usage (historiques, playlists, habitudes).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4_q2',
              type: 'mcq',
              prompt:
                'Que désigne le « lock-in » (coût de changement / enfermement) dans l’économie de l’abonnement ?',
              options: [
                'La fermeture physique des magasins le dimanche',
                'La difficulté et le coût psychologique ou technique pour un usager de quitter une plateforme où il a accumulé historiques, playlists et configurations',
                'L’impossibilité de créer un mot de passe sécurisé',
                'La gratuité à vie d’un service public',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Plus l’usager personnalise le service et y accumule de données (playlists, historiques), plus le coût perçu de migration vers un concurrent augmente.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Barrières',
            stepTheme: 'Avantage d’échelle',
            stepTitle: 'Barrières à l’entrée et effet de levier des bases d’abonnés géantes',
            paragraphText:
              'Pour une petite start-up spécialisée, affronter un géant déjà installé sur le modèle de l’abonnement relève souvent du combat asymétrique.\n' +
              '• **Avantage du parc existant** : des groupes comme Amazon (Prime) ou Apple disposent déjà de centaines de millions d’abonnés ayant enregistré leurs moyens de paiement.\n' +
              '• **Coût marginal d’extension quasi nul** : ils peuvent intégrer un nouveau service (vidéo, jeu, fitness, IA) dans l’abonnement existant à un coût d’acquisition client presque nul.\n' +
              '• **Conséquence** : élévation des barrières à l’entrée pour les nouveaux acteurs mono-produit.',
            keyRule:
              'Posséder une large base d’abonnés payants déjà facturés permet aux géants de lancer de nouveaux services avec un CAC proche de zéro.',
            konanTip:
              'Face à une telle barrière à l’entrée, une start-up locale survit en ciblant un segment ultra-spécialisé ou des contenus locaux que le géant global néglige.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4_q3',
              type: 'mcq',
              prompt:
                'Pourquoi une base d’abonnés massive comme celle d’Amazon Prime constitue-t-elle une puissante barrière à l’entrée pour les nouveaux concurrents ?',
              options: [
                'Parce qu’elle permet au géant d’ajouter de nouveaux services à moindre coût marginal et sans devoir reconquérir ni ré-enregistrer le moyen de paiement des clients',
                'Parce qu’Amazon interdit l’accès à Internet aux autres entreprises',
                'Parce que les abonnés Prime n’ont pas le droit d’acheter d’autres produits ailleurs',
                'Parce que les serveurs ne fonctionnent que pour une seule entreprise par pays',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le géant amortit son coût d’acquisition sur plusieurs services et peut distribuer une nouvelle offre immédiatement à des millions d’abonnés déjà facturés.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Inclusion',
            stepTheme: 'Exclusion financière',
            stepTitle: 'Inclusion numérique : l’obstacle de la bancarisation et des zones blanches',
            paragraphText:
              'Importé des économies fortement bancarisées, le modèle d’abonnement mensuel automatique pose un défi d’inclusion sociale et géographique majeur.\n' +
              '• **Exigences techniques et financières** : l’abonnement classique suppose souvent une carte bancaire internationale, un compte bancaire actif, un revenu régulier et une connexion fiable.\n' +
              '• **Populations exclues** : personnes non bancarisées, jeunes sans carte bancaire, travailleurs aux revenus journaliers irréguliers et habitants de zones blanches.\n' +
              '• **Adaptation africaine** : intégration du **Mobile Money** et des pass à la journée ou à la semaine (micro-abonnements flexibles) en Côte d’Ivoire.',
            keyRule:
              'Un modèle d’abonnement exigeant uniquement une carte bancaire exclut une large partie de la population dans les pays émergents ; le Mobile Money rétablit l’inclusion.',
            konanTip:
              'Retiens ce parallèle concret : les pass journaliers ou hebdomadaires (200 FCFA / 1 000 FCFA) payés par Mobile Money sont l’adaptation africaine réussie de l’abonnement occidental mensuel.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4_q4',
              type: 'mcq',
              prompt:
                'Quel risque d’exclusion sociale le modèle d’abonnement numérique classique (prélèvement automatique par carte) engendre-t-il particulièrement dans les pays en développement ?',
              options: [
                'Il exclut les grandes entreprises cotées en bourse',
                'Il écarte les personnes non bancarisées, les jeunes sans carte bancaire, les revenus irréguliers et les habitants des zones mal connectées',
                'Il rend les smartphones gratuits pour tout le monde',
                'Il oblige les banques à fermer leurs systèmes informatiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’abonnement par carte et connexion permanente crée une barrière d’accès pour les populations non bancarisées ou vivant en zones mal desservies.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Dépossession',
            stepTheme: 'Accès révocable',
            stepTitle: 'Le risque de dépossession : ne plus rien posséder durablement',
            paragraphText:
              'Dans le modèle transactionnel, un livre acheté dans sa bibliothèque ou un fichier sauvegardé sur disque dur vous reste acquis pour toujours. L’abonnement change radicalement ce statut.\n' +
              '• **Accès conditionnel et révocable** : l’utilisateur **ne possède plus rien** ; en cas d’impayé passager, de hausse de tarif ou de fermeture du service par l’éditeur, tout accès disparaît du jour au lendemain.\n' +
              '• **Question critique sur les créations** : que deviennent vos projets, archives professionnelles, photos ou souvenirs stockés dans un logiciel SaaS propriétaire si vous cessez de payer l’abonnement ?\n' +
              '• **Bonne pratique** : toujours vérifier les formats d’export ouverts avant de confier ses archives critiques à une plateforme fermée.',
            keyRule:
              'L’abonnement expose l’utilisateur à la dépossession totale en cas d’arrêt de paiement ou de disparition du fournisseur, posant la question de la pérennité des productions personnelles.',
            konanTip:
              'Piège de dépendance : certains logiciels SaaS de création bloquent l’ouverture de vos anciens fichiers dès que vous arrêtez de payer — exigez toujours un export en format ouvert (PDF, CSV, PNG) !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4_q5',
              type: 'mcq',
              prompt:
                'Quel risque fondamental résume la notion de « dépossession » dans l’économie de l’abonnement ?',
              options: [
                'L’obligation de revendre ses disques vinyles en brocante',
                'Le fait que l’utilisateur perde immédiatement l’accès à ses contenus, outils ou productions en cas de non-paiement ou de fermeture de la plateforme',
                'L’impossibilité de résilier un abonnement gratuit',
                'Le paiement en double de la TVA par les opérateurs télécoms',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Puisque l’usager loue un accès plutôt qu’il n’acquiert un bien, toute interruption d’abonnement ou fermeture du service entraîne la perte d’accès.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Sobriété',
            stepTheme: 'Impact écologique',
            stepTitle: 'Sobriété numérique : quand le forfait illimité pousse à la surconsommation',
            paragraphText:
              'Enfin, l’économie de l’abonnement soulève un enjeu environnemental souvent sous-estimé : celui de la sobriété numérique.\n' +
              '• **Effet psychologique de « rentabilisation »** : ayant payé un forfait fixe illimité, l’abonné est incité à consommer davantage (lecture vidéo HD en continu, musique en fond permanent, stockage cloud non trié) pour « rentabiliser » sa dépense.\n' +
              '• **Impact physique caché** : cette consommation continue augmente le trafic réseau mondial, la sollicitation des serveurs et la consommation d’électricité et d’eau des datacenters.\n' +
              '• **Piste d’action** : modes éco-résolution par défaut, suppression de la lecture automatique et tarification responsable.',
            keyRule:
              'Bien que dématérialisé en apparence, l’abonnement illimité stimule le trafic de données et l’empreinte énergétique des réseaux et datacenters.',
            konanTip:
              'Retiens le paradoxe écologique : la dématérialisation réduit le papier/plastique (CD), mais l’illimité par abonnement peut provoquer un « effet rebond » faisant exploser la consommation énergétique des serveurs !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p4_q6',
              type: 'mcq',
              prompt:
                'Pourquoi le modèle d’abonnement « illimité à prix fixe » pose-t-il un défi en matière de sobriété numérique ?',
              options: [
                'Parce qu’il oblige les datacenters à fonctionner sans électricité',
                'Parce qu’il incite les usagers à consommer en continu pour « rentabiliser » leur forfait, accroissant le trafic de données et l’énergie consommée par les serveurs',
                'Parce qu’il interdit de regarder plus d’une vidéo par an',
                'Parce qu’il augmente le poids des livres en papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’illimité pousse à une consommation plus intensive (streaming continu, stockage massif), augmentant l’empreinte énergétique des infrastructures réseau et cloud.',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 3 : PIPELINE VS PLATEFORME, AGRÉGATION ET SCALABILITÉ TECHNIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch3',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Pipeline vs Plateforme, théorie de l’agrégation et scalabilité technique',
    summary:
      'Opposer l’entreprise linéaire (pipeline) à la plateforme numérique asset-light (Airbnb, Uber), maîtriser les marchés bifaces, les effets de réseau, la théorie de l’agrégation (volant de croissance, données, matching, gouvernance) et le rôle de l’infrastructure cloud/API qui soutient le modèle sans le remplacer.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Modèles de Développement en Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 3.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1',
        order: 1,
        title: 'Entreprise linéaire (pipeline) vs plateforme numérique et marchés bifaces',
        summary:
          'Comprendre pourquoi les plateformes se sont imposées, comparer le modèle linéaire hôtelier/taxi au modèle asset-light (Airbnb, Uber), analyser les marchés bifaces/multifaces et distinguer plateforme, marketplace et agrégateur.',
        conceptExplanation:
          'Avant Internet, la distribution était rare, les coûts de transaction élevés et les relations clients fragmentées. Avec Internet, le mobile, le cloud et les données, la **plateforme numérique** — une infrastructure économique et technique mettant en relation plusieurs groupes d’acteurs via des règles, des données, une interface, le paiement et la confiance — s’est imposée au cœur de l’économie.\n\n' +
          '1. **Entreprise linéaire (pipeline) vs Plateforme (asset-light)** :\n' +
          '• L’**entreprise linéaire** produit ou achète un bien/service (ex. un hôtel construit ses chambres, une compagnie de taxis achète ses voitures), contrôle sa chaîne de valeur en interne et vend directement au client. Sa croissance est plafonnée par ses investissements physiques (CAPEX).\n' +
          '• La **plateforme numérique** ne possède pas nécessairement l’offre (modèle **asset-light** : Airbnb ne possède aucun hôtel, Uber aucune voiture). Elle orchestre des échanges sur un écosystème et croît de façon exponentielle grâce aux **effets de réseau**.\n\n' +
          '2. **Marché biface ou multiface** : met en relation au moins deux groupes interdépendants (utilisateurs et fournisseurs, plus parfois annonceurs). Le défi initial est celui de la **taille critique** (« œuf et poule »).\n\n' +
          '3. **Nuance terminologique** : toute **marketplace** (mise en relation acheteurs/vendeurs comme Jumia ou Amazon Marketplace) et tout **agrégateur** (contrôle massif de la demande utilisateur comme Google ou Netflix) sont des plateformes, mais chaque forme a un degré différent de contrôle sur l’expérience et la transaction.',
        keyRule:
          'Une entreprise linéaire (pipeline) crée de la valeur en interne et grandit par ses actifs propres ; une plateforme (asset-light) orchestre un écosystème externe et grandit par effets de réseau.',
        formulas: [
          {
            name: 'Loi de Metcalfe (valeur d’un réseau)',
            formula: 'V_{\\text{réseau}} \\propto n(n - 1) \\approx n^2',
            note: 'Dans un marché biface à n_A acheteurs et n_V vendeurs, les interactions potentielles croissent comme n_A × n_V.',
          },
        ],
        workedExample: {
          title: 'Comparer un groupe hôtelier traditionnel et Airbnb sur leur capacité d’expansion',
          statement:
            'Un grand groupe hôtelier met 50 ans pour ouvrir 500 000 chambres dans le monde. Pourquoi Airbnb a-t-il dépassé 5 millions d’annonces en à peine dix ans ?',
          methodSteps: [
            'Modèle linéaire hôtelier : chaque chambre supplémentaire exige du foncier, de la construction (CAPEX lourds), des autorisations et du personnel salarié.',
            'Modèle plateforme asset-light (Airbnb) : la plateforme mobilise des logements déjà existants appartenant à des particuliers, avec un coût marginal quasi nul par nouvelle annonce.',
            'Effet de réseau croisé : plus il y a de voyageurs, plus les hôtes publient leurs biens ; plus il y a d’annonces variées, plus les voyageurs choisissent Airbnb.',
          ],
          conclusion:
            'La déconnexion entre la croissance du volume d’offre et l’investissement immobilier permet à la plateforme une scalabilité sans commune mesure avec le modèle pipeline.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Rupture numérique',
            stepTheme: 'Coûts de transaction',
            stepTitle: 'Pourquoi les plateformes numériques sont devenues centrales',
            paragraphText:
              'Les marchés physiques traditionnels étaient limités par des frictions coûteuses que le triptyque Internet + mobile + cloud a drastiquement réduites.\n' +
              '• **Avant Internet** : distribution physique rare (rayons de supermarché, agences locales), **coûts de transaction élevés** (recherche d’information, mise en relation, vérification) et relations clients fragmentées.\n' +
              '• **Avec Internet + mobile** : distribution numérique mondiale à coût quasi nul, transactions automatisées 24h/24 et accès direct aux utilisateurs sur leur smartphone.\n' +
              '• **Résultat** : concentration de la demande autour de plateformes globales capables d’apparier offre et demande en quelques secondes.',
            keyRule:
              'Les plateformes dominent l’économie moderne parce qu’Internet et le mobile ont effondré les coûts de recherche, de mise en relation et de transaction.',
            konanTip:
              'Relie cette évolution à la théorie des coûts de transaction (Ronald Coase) : quand coordonner des acteurs externes sur une appli coûte moins cher que tout produire en interne, la plateforme bat le pipeline !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quel facteur économique explique principalement l’essor mondial des plateformes numériques par rapport aux circuits traditionnels ?',
              options: [
                'L’augmentation massive des coûts de communication et de papier',
                'L’effondrement des coûts de transaction, de distribution et de mise en relation grâce à Internet, au mobile et au cloud',
                'La disparition complète de la demande des consommateurs',
                'L’interdiction légale des entreprises linéaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Internet, le mobile et le cloud ont réduit les coûts de distribution et de transaction, rendant possible la coordination automatisée à grande échelle.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Infrastructure',
            stepTitle: 'Qu’est-ce qu’une plateforme numérique ? Les cinq briques essentielles',
            paragraphText:
              'Une **plateforme numérique** n’est pas un simple site vitrine : c’est une **infrastructure économique et technique** qui met en relation plusieurs groupes d’acteurs (producteurs/offreurs et consommateurs/utilisateurs).\n' +
              '• **Cinq briques structurantes** : un cadre de **règles** (conditions d’accès et de gouvernance), des **données**, une **interface** ergonomique, un système de **paiement** intégré et des mécanismes de **confiance** (avis, vérifications).\n' +
              '• **Flux échangés** : les producteurs apportent des biens, services ou informations ; les utilisateurs échangent en retour des **unités de valeur** (argent, réputation/notes, visibilité/attention).\n' +
              '• **Exemple** : Yango ou Uber relie chauffeurs et passagers via GPS, tarification dynamique, paiement Mobile Money/carte et notation mutuelle.',
            keyRule:
              'Une plateforme repose sur cinq piliers opérationnels : Règles, Données, Interface, Paiement et Confiance.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quels sont les cinq piliers fonctionnels qu’une plateforme numérique combine pour orchestrer les échanges entre offreurs et utilisateurs ?',
              options: [
                'Usines, entrepôts, camions, vitrines papier et guichets postaux',
                'Règles, données, interface, paiement et confiance',
                'Uniquement un nom de domaine et un logo',
                'Exclusivement des contrats de travail à durée indéterminée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La plateforme met en relation producteurs et consommateurs en articulant règles, données, interface, paiement et mécanismes de confiance.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Pipeline vs Plateforme',
            stepTheme: 'Asset-light',
            stepTitle: 'Comparer l’entreprise linéaire (pipeline) et la plateforme asset-light',
            paragraphText:
              'La différence fondamentale entre une entreprise classique (dite « linéaire » ou *pipeline*) et une plateforme porte sur la **logique de création de valeur**.\n' +
              '• **Entreprise linéaire (hôtel, usine, distributeur classique)** : produit ou achète un stock, contrôle sa chaîne de valeur en interne et vend au client final ; sa croissance reste liée à ses ressources physiques internes.\n' +
              '• **Plateforme numérique (Airbnb, Uber, Jumia Marketplace)** : modèle **asset-light** (légère en actifs physiques) qui ne possède pas l’offre, met en relation des acteurs externes et croît grâce à son écosystème.\n' +
              '• **Conséquence financière** : rentabilité du capital investi beaucoup plus forte pour la plateforme une fois la taille critique atteinte.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau comparatif : Entreprise Linéaire (Pipeline) vs Plateforme Numérique',
              caption: 'Opposition structurelle entre chaîne de valeur interne et orchestration d’écosystème asset-light.',
              tableData: {
                headers: ['Critère', 'Entreprise linéaire (Pipeline)', 'Plateforme numérique (Asset-light)'],
                rows: [
                  ['Création de valeur', 'Production / achat en interne', 'Mise en relation d’acteurs externes'],
                  ['Actifs clés', 'Usines, hôtels, stocks, flottes (CAPEX)', 'Données, algorithmes, communauté, marque'],
                  ['Moteur de croissance', 'Investissements internes linéaires', 'Effets de réseau exponentiels'],
                  ['Coût marginal d’offre', 'Élevé (construire une chambre / acheter un taxi)', 'Quasi nul (inscrire un nouvel hôte / chauffeur)'],
                  ['Exemples', 'Groupe hôtelier, compagnie de taxis', 'Airbnb, Uber / Yango, Jumia Marketplace'],
                ],
              },
            },
            keyRule:
              'Le modèle pipeline contrôle la production en interne (CAPEX élevés) ; la plateforme asset-light orchestre une offre externe à coût marginal quasi nul.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Que signifie le caractère « asset-light » (léger en actifs) d’une plateforme comme Airbnb ou Uber par rapport à une entreprise linéaire ?',
              options: [
                'Elle n’a besoin d’aucun ingénieur informatique ni serveur',
                'Elle ne possède pas les actifs physiques de l’offre (chambres, véhicules), ce qui lui permet de croître très vite sans investissements immobiliers ou matériels lourds',
                'Elle vend exclusivement des produits pesant moins de 1 kilogramme',
                'Elle refuse tout paiement électronique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Asset-light signifie que la plateforme n’immobilise pas de capitaux dans la propriété des logements ou véhicules : elle mobilise la capacité déjà existante des offreurs partenaires.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Marché biface',
            stepTheme: 'Taille critique',
            stepTitle: 'Marchés bifaces/multifaces et le dilemme de l’œuf et de la poule',
            paragraphText:
              'Un **marché biface** réunit deux groupes distincts qui ont besoin l’un de l’autre (passagers ↔ chauffeurs ; acheteurs ↔ marchands ; lecteurs ↔ annonceurs). Lorsqu’un troisième groupe s’ajoute (ex. Uber Eats : clients + restaurants + livreurs), on parle de **marché multiface**.\n' +
              '• **Dilemme de l’œuf et de la poule** : au démarrage, pourquoi un chauffeur s’inscrirait-il s’il n’y a aucun passager, et pourquoi un passager téléchargerait-il l’appli s’il n’y a aucun chauffeur disponible ?\n' +
              '• **Subventionnement croisé** : pour franchir la **taille critique**, la plateforme subventionne souvent un côté (gratuité pour les acheteurs ou bonus d’inscription pour les premiers chauffeurs) et monétise l’autre côté (commissions marchands ou publicité annonceurs).',
            konanTip:
              'Pour résoudre le problème de l’œuf et de la poule au lancement, les plateformes commencent souvent **hyper-localement** (un seul quartier ou une seule ville comme Cocody/Plateau à Abidjan) afin d’y concentrer une liquidité immédiate !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle stratégie classique utilisent les plateformes bifaces pour surmonter le problème de l’œuf et de la poule et atteindre la taille critique ?',
              options: [
                'Facturer immédiatement des frais d’entrée très élevés aux deux côtés simultanément',
                'Subventionner ou rendre gratuit l’accès au côté le plus sensible au prix (ou lancer sur une zone géographique restreinte) pour attirer rapidement l’autre côté',
                'Interdire aux utilisateurs de laisser des avis',
                'Construire d’abord des magasins physiques dans chaque village',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le subventionnement croisé (gratuité d’un côté financée par l’autre) et le lancement hyper-local permettent de créer rapidement la liquidité nécessaire à la taille critique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Effets de réseau',
            stepTheme: 'Directs vs Croisés',
            stepTitle: 'Effets de réseau directs, croisés et effets de réseau négatifs',
            paragraphText:
              'Les **effets de réseau** constituent le véritable moteur de croissance et la principale barrière défensive d’une plateforme.\n' +
              '• **Effet de réseau direct (intragroupe)** : plus il y a d’utilisateurs sur le même côté, plus le service est utile (ex. WhatsApp : chaque nouveau contact rend la messagerie plus indispensable).\n' +
              '• **Effet de réseau croisé (intergroupe)** : plus le groupe A grandit, plus le service attire le groupe B, et réciproquement (ex. plus de marchands sur Jumia → plus d’acheteurs → encore plus de marchands).\n' +
              '• **Attention aux effets de réseau négatifs** : trop de vendeurs frauduleux, de spam ou de publicités intrusives dégradent la qualité et font fuir les utilisateurs !',
            formula: {
              name: 'Croissance des interactions bilatérales',
              formula: 'I_{\\text{croisées}} = n_{\\text{offreurs}} \\times n_{\\text{demandeurs}}',
              note: 'Doubler simultanément le nombre d’offreurs et de demandeurs multiplie par 4 les opportunités d’échange.',
            },
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Sur une plateforme de VTC comme Uber ou Yango, le fait que l’arrivée de nouveaux chauffeurs réduise le temps d’attente des passagers, attirant ainsi davantage de passagers, illustre :',
              options: [
                'Un coût fixe immobilier',
                'Un effet de réseau croisé (indirect) positif',
                'Une dépossession matérielle',
                'Une règle proportionnelle de sous-assurance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La croissance d’un versant (chauffeurs) augmente directement la valeur perçue par l’autre versant (passagers), ce qui définit l’effet de réseau croisé positif.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Synthèse concepts',
            stepTheme: '3 notions clés',
            stepTitle: 'Distinguer Plateforme, Marketplace et Agrégateur',
            paragraphText:
              'Bien que souvent employés comme synonymes dans le langage courant, trois termes clés recouvrent des réalités économiques précises :\n' +
              '• **Plateforme** (terme générique le plus large) : toute infrastructure numérique facilitant des interactions entre groupes d’acteurs (réseau social, OS mobile iOS/Android, paiement, marketplace).\n' +
              '• **Marketplace (place de marché)** : plateforme spécialisée dans la **mise en relation commerciale et la transaction** entre vendeurs tiers et acheteurs moyennant commission (ex. Amazon Marketplace, Jumia, Etsy).\n' +
              '• **Agrégateur** : plateforme qui **contrôle directement la relation utilisateur à très grande échelle** et **modularise/commoditise les fournisseurs** en les mettant en concurrence sous son interface unifiée (ex. Google, Uber, Netflix, Booking).',
            keyRule:
              'Toute marketplace et tout agrégateur sont des plateformes, mais l’agrégateur se distingue par son contrôle massif de la demande utilisateur face à des fournisseurs rendus interchangeables.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle notion désigne spécifiquement une plateforme qui contrôle la relation utilisateur à grande échelle et standardise/modularise l’offre de fournisseurs concurrents sous une interface unique ?',
              options: [
                'Une entreprise linéaire artisanale',
                'Un agrégateur',
                'Une coopérative agricole locale',
                'Un imprimeur traditionnel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un agrégateur (comme Google, Uber ou Booking) capte directement la relation client et modularise les fournisseurs en arrière-plan.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2',
        order: 2,
        title: 'Théorie de l’agrégation, volant de croissance, données, matching et gouvernance',
        summary:
          'Maîtriser le renversement de la chaîne de valeur (théorie de l’agrégation), le cycle vertueux réduisant le coût d’acquisition, les 3 niveaux d’agrégateurs, le matching algorithmique, la gouvernance/curation et la capture de valeur.',
        conceptExplanation:
          'Formulée par Ben Thompson, la **théorie de l’agrégation** explique pourquoi le pouvoir économique s’est déplacé des détenteurs de distribution physique vers les géants qui contrôlent la demande utilisateur.\n\n' +
          '1. **Le renversement de la chaîne de valeur** :\n' +
          '• **Avant Internet** : Fournisseurs → Distributeurs → Consommateurs. Le pouvoir appartenait à celui qui contrôlait la **distribution rare** (chaînes TV, kiosques, grande distribution).\n' +
          '• **Avec Internet** : Fournisseurs modularisés → **Agrégateur** → Utilisateurs. La distribution étant devenue gratuite et abondante, le pouvoir appartient désormais à celui qui **contrôle la demande et l’expérience utilisateur**.\n\n' +
          '2. **Le cycle vertueux (volant de croissance)** : une **bonne expérience utilisateur** attire **plus d’utilisateurs**, ce qui incite **plus de fournisseurs** à rejoindre la plateforme ; cela crée **plus de choix et de meilleures données**, améliorant encore l’expérience et **réduisant le coût d’acquisition** de chaque nouvel utilisateur.\n\n' +
          '3. **Données, matching, confiance et gouvernance** : le cœur opérationnel d’une plateforme repose sur la qualité du **matching** (appariement pertinent via algorithmes), les mécanismes de **confiance** (avis vérifiés, paiement séquestre) et la **curation/gouvernance** (filtrer les mauvais acteurs pour préserver la qualité du réseau).',
        keyRule:
          'À l’ère numérique, la rareté n’est plus la distribution mais l’attention de l’utilisateur : l’agrégateur capture le pouvoir en contrôlant la demande et en faisant tourner un cycle vertueux auto-renforçant.',
        formulas: [
          {
            name: 'Boucle vertueuse de l’agrégation',
            formula: '\\text{Bonne UX} \\to \\uparrow \\text{Utilisateurs} \\to \\uparrow \\text{Fournisseurs} \\to \\uparrow \\text{Choix + Données} \\to \\downarrow \\text{CAC}',
            note: 'Cette boucle explique pourquoi les leaders deviennent de plus en plus difficiles à déloger.',
          },
        ],
        workedExample: {
          title: 'Analyser une plateforme de livraison de repas à Abidjan via la théorie de l’agrégation',
          statement:
            'Comment une application de livraison de repas (type Glovo / Jumia Food) applique-t-elle la théorie de l’agrégation et quels mécanismes de gouvernance doit-elle mettre en place ?',
          methodSteps: [
            'Contrôle de la demande : le client n’appelle plus 10 restaurants différents ; il ouvre une seule application offrant menus, prix, temps de livraison estimé et paiement unifié.',
            'Modularisation des fournisseurs : les restaurants sont présentés selon une fiche standardisée et classés par note, distance et rapidité.',
            'Gouvernance et curation : notation transparente des restaurants et livreurs, déréférencement des partenaires en retard chronique, remboursement automatique en cas de commande incomplète.',
          ],
          conclusion:
            'Le contrôle de l’UX combiné à la curation stricte alimente le volant de croissance et limite la dégradation de la qualité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Agrégation',
            stepTheme: 'Renversement de valeur',
            stepTitle: 'Théorie de l’agrégation : du contrôle de la distribution au contrôle de la demande',
            paragraphText:
              'Comment expliquer qu’un hôtelier, un journal ou un chauffeur indépendant perde son pouvoir de négociation face à Booking, Google ou Uber ? Par le **renversement de la chaîne de valeur**.\n' +
              '• **Avant Internet (rareté de l’offre/distribution)** : les distributeurs (supermarchés, kiosques, chaînes TV) détenaient le pouvoir car les emplacements de diffusion étaient physiquement limités.\n' +
              '• **Avec Internet (abondance de la distribution)** : n’importe qui peut publier un site ou vendre en ligne à coût quasi nul ; la vraie rareté devient **l’attention et le temps du consommateur**.\n' +
              '• **Pouvoir de l’agrégateur** : en offrant une expérience gratuite ou ultra-fluide à l’utilisateur final, l’agrégateur capte la demande et force les fournisseurs modularisés à passer par lui.',
            keyRule:
              'Avant Internet : pouvoir = contrôler la distribution rare. Avec Internet : pouvoir = contrôler la demande et l’expérience utilisateur.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Selon la théorie de l’agrégation, où se situe désormais le principal levier de pouvoir économique sur Internet ?',
              options: [
                'Dans la possession exclusive d’imprimeries papier',
                'Dans le contrôle de la demande et de l’expérience utilisateur à grande échelle, qui permet de modulariser les fournisseurs',
                'Dans l’interdiction faite aux fournisseurs de créer un site web',
                'Dans l’augmentation manuelle des délais de livraison',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La distribution numérique étant devenue abondante, la valeur et le pouvoir migrent vers l’agrégateur qui contrôle la relation directe avec les utilisateurs.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Flywheel',
            stepTheme: 'Cycle vertueux',
            stepTitle: 'Le cycle vertueux (volant de croissance) de l’agrégation',
            paragraphText:
              'Contrairement à une entreprise traditionnelle dont les coûts d’acquisition augmentent souvent avec la taille, un agrégateur performant bénéficie d’un **volant de croissance** (*flywheel*) qui abaisse progressivement son coût d’acquisition client.\n' +
              '• **Étape 1** : une **bonne expérience utilisateur** (simplicité, rapidité, prix) attire les premiers utilisateurs.\n' +
              '• **Étape 2** : la hausse du nombre d’**utilisateurs** rend la plateforme incontournable et attire **plus de fournisseurs**.\n' +
              '• **Étape 3** : l’afflux de fournisseurs génère **plus de choix et de meilleures données** (avis, historiques, pertinence).\n' +
              '• **Étape 4** : ces données améliorent encore l’expérience utilisateur, créant du bouche-à-oreille organique qui réduit le coût d’acquisition.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Le cycle vertueux (volant de croissance) de l’agrégateur',
              caption: 'Boucle auto-renforçante expliquant la baisse du coût d’acquisition et la concentration du marché.',
              cycle: {
                centerLabel: 'Effet d’agrégation',
                centerSublabel: '↓ Coût d’acquisition',
                nodes: [
                  {
                    title: 'Bonne expérience (UX)',
                    subtitle: 'Simplicité, rapidité, confiance',
                    color: 'blue',
                  },
                  {
                    title: 'Plus d’utilisateurs',
                    subtitle: 'Demande agrégée massive',
                    color: 'green',
                  },
                  {
                    title: 'Plus de fournisseurs',
                    subtitle: 'Offreurs attirés par la demande',
                    color: 'violet',
                  },
                  {
                    title: 'Plus de choix + données',
                    subtitle: 'Matching & pertinence accrus',
                    color: 'orange',
                  },
                ],
              },
            },
            konanTip:
              'En examen, dessine ou cite toujours ces 4 maillons en boucle fermée : **Bonne UX → + Utilisateurs → + Fournisseurs → + Choix & Données → Bonne UX** !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quel effet économique majeur le cycle vertueux de l’agrégation produit-il sur le coût d’acquisition des nouveaux utilisateurs au fil du temps ?',
              options: [
                'Il fait exploser le coût d’acquisition vers l’infini',
                'Il tend à réduire le coût d’acquisition grâce à l’amélioration continue du choix, des données et du bouche-à-oreille organique',
                'Il oblige la plateforme à fermer son application mobile',
                'Il supprime tout besoin de qualité d’expérience utilisateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Plus l’agrégateur grandit, plus son offre et ses données améliorent l’UX, ce qui attire organiquement de nouveaux utilisateurs à moindre coût marketing.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: '3 Niveaux',
            stepTheme: 'Typologie agrégateurs',
            stepTitle: 'Les trois niveaux d’agrégateurs selon leur relation aux fournisseurs',
            paragraphText:
              'Tous les agrégateurs n’ont pas la même structure de coûts vis-à-vis de leurs fournisseurs ; on distingue classiquement **trois niveaux** :\n' +
              '• **Niveau 1 (Acquisition/production de l’offre)** : l’agrégateur achète ou produit les droits de l’offre (ex. **Netflix** qui finance ses séries originales) puis profite de son immense base d’abonnés pour amortir ces coûts fixes.\n' +
              '• **Niveau 2 (Coûts de transaction sur l’offre)** : l’agrégateur ne possède pas l’offre mais supporte des coûts d’intégration, de vérification ou d’assurance pour chaque fournisseur (ex. **Uber**, **Airbnb**).\n' +
              '• **Niveau 3 (Coût marginal d’offre quasi nul)** : les fournisseurs viennent d’eux-mêmes publier gratuitement leurs contenus ou pages (ex. **Google**, **Meta**, **TikTok**), offrant la scalabilité maximale.',
            keyRule:
              'Du Niveau 1 (Netflix) au Niveau 2 (Uber/Airbnb) puis au Niveau 3 (Google/Meta), le coût d’acquisition de l’offre diminue jusqu’à devenir quasi nul.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Pourquoi un agrégateur de Niveau 3 comme Google ou YouTube atteint-il une scalabilité encore plus rapide qu’un agrégateur de Niveau 1 comme Netflix ?',
              options: [
                'Parce que Google finance intégralement tous les sites web mondiaux',
                'Parce que l’offre (pages web, vidéos créateurs) est produite et mise en ligne par des tiers à un coût d’acquisition quasi nul pour la plateforme',
                'Parce que Google n’a aucun serveur informatique',
                'Parce que Netflix ne fonctionne pas sur Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En Niveau 3, les fournisseurs/créateurs publient spontanément leur offre gratuitement sur la plateforme, contrairement au Niveau 1 qui finance ou achète ses licences de contenu.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Matching & Confiance',
            stepTheme: 'Cœur opérationnel',
            stepTitle: 'Données, matching algorithmique et architecture de la confiance',
            paragraphText:
              'Réunir des millions d’offreurs et d’acheteurs serait chaotique sans deux moteurs invisibles qui forment le cœur opérationnel d’une plateforme performante :\n' +
              '• **Données et matching (appariement)** : les algorithmes utilisent la géolocalisation, l’historique, les prix et les préférences pour connecter instantanément la meilleure offre à la bonne demande (ex. chauffeur le plus proche, produit le plus pertinent, vidéo recommandée).\n' +
              '• **Architecture de la confiance** : comment accepter de monter dans la voiture d’un inconnu ou de payer un marchand jamais rencontré ? Grâce à la **notation bilatérale** (étoiles/avis), la **vérification d’identité (KYC)**, le **paiement séquestre (escrow)** (argent bloqué jusqu’à livraison confirmée) et les garanties/assurances intégrées.',
            konanTip:
              'Retiens le mécanisme d’**escrow (paiement séquestre)** : en e-commerce africain, c’est l’arme absolue contre la peur de l’arnaque en ligne !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel mécanisme de confiance numérique consiste pour une plateforme à bloquer temporairement l’argent de l’acheteur et à ne le libérer au vendeur qu’une fois la livraison confirmée ?',
              options: [
                'Le paiement séquestre (escrow)',
                'La publicité au CPM',
                'La tarification au forfait illimité',
                'Le blocage des cookies tiers',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le paiement séquestre (escrow) sécurise les transactions entre inconnus en conditionnant le versement au vendeur à la bonne réception du bien ou service.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Gouvernance',
            stepTheme: 'Curation & Règles',
            stepTitle: 'Gouvernance et curation : protéger la plateforme contre la congestion',
            paragraphText:
              'Une plateforme ouverte à tous sans aucun contrôle finit par être envahie par les contrefaçons, les faux avis et les mauvais prestataires, déclenchant un **effet de réseau négatif**.\n' +
              '• **Curation (filtrage qualité)** : fixer des critères d’entrée (documents légaux, contrôle véhicule, qualité des photos) et retirer automatiquement les acteurs dont la note tombe sous un seuil minimal.\n' +
              '• **Règles de gouvernance transparentes** : politique de remboursement claire, médiation des litiges, lutte contre les faux avis et la désintermédiation sauvage (contournement de la plateforme hors appli).\n' +
              '• **Équilibre délicat** : trop ouverte = perte de qualité ; trop fermée = manque de choix et croissance bridée.',
            keyRule:
              'La gouvernance et la curation sont vitales : une plateforme gagne non seulement par le volume de ses membres, mais surtout par la qualité et la fiabilité des interactions.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Pourquoi une marketplace doit-elle exercer une gouvernance active (curation, contrôle qualité, sanctions des vendeurs peu fiables) ?',
              options: [
                'Pour réduire volontairement son chiffre d’affaires',
                'Pour empêcher les effets de réseau négatifs (arnaques, contrefaçons, mauvais service) qui détruiraient la confiance et feraient fuir les acheteurs',
                'Pour interdire la concurrence entre les vendeurs honnêtes',
                'Parce que la curation remplace totalement le système de paiement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans curation ni gouvernance, les acteurs opportunistes dégradent l’expérience globale et brisent la confiance, provoquant la fuite des utilisateurs.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Monétisation',
            stepTheme: 'Unité de valeur',
            stepTitle: 'Identifier l’unité de valeur et choisir le modèle de revenus de la plateforme',
            paragraphText:
              'Pour monétiser durablement sans freiner ses effets de réseau, une plateforme doit identifier l’**unité de valeur** exacte qu’elle crée pour ses utilisateurs.\n' +
              '• **Commission sur transaction (Take rate)** : prélèvement d’un pourcentage (ex. 5 % à 25 %) sur chaque course, nuitée ou vente réussie (Uber, Airbnb, Jumia) — aligné sur la valeur créée.\n' +
              '• **Publicité / mise en avant sponsorisée** : facturer aux vendeurs ou annonceurs la visibilité en tête des résultats de recherche (Google, Amazon Ads).\n' +
              '• **Abonnement ou Freemium** : accès récurrent pour les vendeurs professionnels ou livraison illimitée pour les acheteurs (Amazon Prime).\n' +
              '• **Services annexes (Fintech & Logistique)** : micro-crédit aux marchands, assurance livraison, stockage (Fulfillment).',
            konanTip:
              'Attention au taux de commission (*take rate*) trop élevé : s’il dépasse la valeur perçue de la plateforme, vendeurs et acheteurs contournent l’application pour traiter directement hors plateforme !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quel risque majeur court une plateforme de mise en relation si elle fixe un taux de commission (take rate) excessif par rapport à la valeur qu’elle apporte ?',
              options: [
                'Les utilisateurs vont lui verser des dons supplémentaires',
                'Le contournement de la plateforme (désintermédiation sauvage : offreurs et clients concluent la transaction hors plateforme pour éviter la commission)',
                'La suppression automatique de ses coûts de serveurs',
                'La transformation immédiate en entreprise industrielle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une commission disproportionnée incite fortement les deux parties à se contacter hors plateforme après la première mise en relation.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3',
        order: 3,
        title: 'Scalabilité technique : Cloud, API et architecture au service du modèle économique',
        summary:
          'Comprendre pourquoi la technologie soutient le modèle économique sans le remplacer, maîtriser l’élasticité Cloud (CAPEX → OPEX), l’économie des API, la performance temps réel et les risques de dépendance technique.',
        conceptExplanation:
          'Une plateforme qui réussit peut passer de 1 000 à 1 000 000 d’utilisateurs en quelques mois. Sans une **infrastructure technique scalable**, le succès commercial provoque l’effondrement du service. Mais la règle d’or demeure : **la technologie soutient le modèle économique, elle ne le remplace pas**.\n\n' +
          '1. **Cloud Computing et passage du CAPEX à l’OPEX** : au lieu d’acheter des serveurs physiques coûteux dimensionnés pour le pic annuel (CAPEX rigide), le cloud (AWS, Azure, Google Cloud, cloud locaux) offre une **élasticité automatique** facturée à l’usage (OPEX variable), alignant les coûts techniques sur le volume réel d’activité.\n\n' +
          '2. **API et architecture composable** : plutôt que de tout programmer en interne, une start-up assemble des briques spécialisées via des **API** (paiement Mobile Money / Stripe, géolocalisation Maps, SMS/WhatsApp, vérification d’identité KYC), réduisant drastiquement le délai de mise sur le marché (*time-to-market*).\n\n' +
          '3. **Fiabilité, latence et risques** : une application lente ou en panne détruit immédiatement la confiance et le taux de conversion. À l’inverse, la dépendance excessive à un fournisseur unique crée un risque de **vendor lock-in** et de facture cloud hors de contrôle.',
        keyRule:
          'La technologie est un accélérateur indispensable de scalabilité (Cloud, API, temps réel), mais elle ne sauve jamais un modèle économique sans proposition de valeur ni demande solvable.',
        formulas: [
          {
            name: 'Élasticité économique du Cloud',
            formula: '\\text{Coût d’infrastructure Cloud} \\approx c_{\\text{variable}} \\times \\text{Volume de requêtes (OPEX)}',
            note: 'Remplace un investissement initial lourd (CAPEX) par une charge proportionnelle à la croissance réelle.',
          },
        ],
        workedExample: {
          title: 'Choisir l’architecture d’une start-up de billetterie en ligne à Abidjan',
          statement:
            'Une start-up lance une plateforme de vente de billets de concerts et matchs à Abidjan. Lors d’un grand événement, 50 000 personnes se connectent en 10 minutes. Comment concevoir une infrastructure scalable à moindre coût initial ?',
          methodSteps: [
            'Hébergement Cloud élastique (auto-scaling) : payer un coût minimal les jours calmes et multiplier automatiquement la capacité serveur pendant les 10 minutes de pic.',
            'Intégration d’API tierces : connecter les API d’agrégateurs Mobile Money (Wave, Orange Money, MTN MoMo) et d’envoi de billets QR Code par WhatsApp/SMS.',
            'Sécurité et fiabilité : file d’attente virtuelle, vérification anti-fraude des billets hors ligne (scan QR) et sauvegardes automatiques.',
          ],
          conclusion:
            'L’alliance Cloud élastique + API de paiement local permet d’encaisser 50 000 acheteurs sans acheter de datacenters propres ni développer sa propre banque.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'Principe cardinal',
            stepTheme: 'Tech ≠ Modèle',
            stepTitle: '« La technologie soutient le modèle économique, elle ne le remplace pas »',
            paragraphText:
              'Beaucoup de projets numériques échouent malgré une application techniquement brillante parce que leurs fondateurs confondent **outil technologique** et **modèle économique**.\n' +
              '• **Rôle de la technologie** : rendre la proposition de valeur plus rapide, moins chère, plus personnalisée et capable de passer à l’échelle (*scalable*).\n' +
              '• **Ce que la technologie ne peut pas faire seule** : créer un besoin client inexistant, compenser un prix inadapté au pouvoir d’achat local ou corriger un mauvais alignement incitatif.\n' +
              '• **Exemple** : ajouter de la Blockchain ou de l’IA sur un service dont personne n’a besoin ne crée aucune capture de valeur ; à l’inverse, un service très utile déployé sur simple USSD/WhatsApp peut devenir rentable très vite.',
            keyRule:
              'Toujours valider d’abord le problème client, la proposition de valeur et la monétisation, puis choisir la technologie qui les rend scalables.',
            konanTip:
              'Phrase d’or à retenir pour tes analyses stratégiques : « La technologie est un moyen au service du modèle économique, jamais une fin en soi. »',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Que signifie le principe « la technologie soutient le modèle économique, elle ne le remplace pas » ?',
              options: [
                'Qu’une plateforme numérique peut fonctionner sans aucun serveur ni logiciel',
                'Qu’une infrastructure technique avancée ne garantit pas le succès commercial si la proposition de valeur, la demande client et la monétisation ne sont pas solides',
                'Que les entreprises numériques doivent renoncer au Cloud',
                'Que les ingénieurs ne doivent pas travailler avec les économistes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La technologie permet d’exécuter et de scaler un modèle économique pertinent, mais ne peut se substituer à l’adéquation produit-marché ni à la capture de valeur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Cloud & Élasticité',
            stepTheme: 'CAPEX vs OPEX',
            stepTitle: 'Cloud computing : transformer les investissements lourds (CAPEX) en coûts variables (OPEX)',
            paragraphText:
              'L’un des plus grands catalyseurs des start-ups numériques modernes est le passage de l’hébergement sur serveurs propres au **Cloud computing**.\n' +
              '• **Avant le Cloud (CAPEX)** : acheter des serveurs physiques coûteux en avance ; si le trafic est faible, on paie pour rien ; si un pic soudain survient, le site plante.\n' +
              '• **Avec le Cloud (OPEX & Auto-scaling)** : les ressources de calcul et de stockage s’ajustent automatiquement en temps réel au nombre d’utilisateurs, facturées à l’usage (**pay-per-use**).\n' +
              '• **Impact financier** : abaisse considérablement la barrière financière de lancement d’une start-up tout en permettant d’encaisser une croissance mondiale.',
            keyRule:
              'Le Cloud convertit une charge fixe lourde (CAPEX) en charge variable élastique (OPEX), alignée sur la courbe de croissance de la plateforme.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Quel avantage financier majeur le Cloud computing (facturé à l’usage) procure-t-il à une jeune plateforme numérique en forte croissance ?',
              options: [
                'Il l’oblige à acheter immédiatement un immeuble de serveurs physiques',
                'Il remplace un investissement initial lourd (CAPEX) par des coûts variables élastiques (OPEX) capables d’absorber automatiquement les pics de trafic',
                'Il garantit que les concurrents ne pourront jamais utiliser Internet',
                'Il supprime l’obligation de payer les taxes locales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’élasticité du Cloud évite le surinvestissement initial (CAPEX) et adapte dynamiquement la capacité et la facture au trafic réel (OPEX).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Économie des API',
            stepTheme: 'Architecture composable',
            stepTitle: 'API et économie composable : assembler des briques prêtes à l’emploi',
            paragraphText:
              'Une **API** (*Application Programming Interface*) est une passerelle logicielle standardisée permettant à deux applications d’échanger des données ou des services automatiquement.\n' +
              '• **Ne pas réinventer la roue** : une plateforme africaine de e-commerce ou de VTC n’a pas besoin de créer sa propre carte GPS, son propre opérateur télécom ni sa propre banque.\n' +
              '• **Assemblage rapide** : elle connecte les API de **paiement** (agrégateurs Mobile Money, Stripe, Paystack, CinetPay), de **cartographie** (Google Maps / OpenStreetMap), de **communication** (Twilio / WhatsApp Business) et d’**IA** (OpenAI API).\n' +
              '• **Double visage** : les API sont à la fois un accélérateur technique pour les clients et un modèle de revenus B2B très rentable pour leurs éditeurs (facturation par appel API).',
            konanTip:
              'En zone UEMOA, les agrégateurs d’API de paiement (qui unifient Orange Money, MTN MoMo, Moov Money, Wave et cartes bancaires en une seule intégration) sont l’une des briques techniques les plus stratégiques !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Comment l’utilisation d’API tierces (paiement Mobile Money, cartographie GPS, SMS) accélère-t-elle le développement d’une plateforme numérique ?',
              options: [
                'En forçant la start-up à construire ses propres satellites GPS',
                'En lui permettant d’intégrer rapidement des briques spécialisées et fiables sans les redévelopper de zéro, réduisant coûts fixes et délais de lancement',
                'En supprimant toute connexion entre les logiciels',
                'En interdisant le paiement mobile aux utilisateurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les API permettent d’assembler des services externes spécialisés (paiement, cartes, messaging) à la demande, concentrant les efforts de l’équipe sur sa propre valeur ajoutée.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Performance & UX',
            stepTheme: 'Latence & Conversion',
            stepTitle: 'Latence, temps réel et disponibilité : quand la tech impacte directement le chiffre d’affaires',
            paragraphText:
              'Dans l’économie numérique, la performance technique n’est pas un détail d’ingénieur : elle se traduit immédiatement en revenus gagnés ou perdus.\n' +
              '• **Latence et taux de conversion** : chaque seconde de chargement supplémentaire sur mobile fait chuter drastiquement le taux de conversion e-commerce, particulièrement sur les réseaux mobiles 3G/4G à bande passante variable.\n' +
              '• **Temps réel** : sur une appli VTC ou de paiement, la mise à jour instantanée de la position du chauffeur ou du solde est essentielle à la confiance.\n' +
              '• **Outils clés** : réseaux de diffusion de contenu (**CDN**), applications légères adaptées aux smartphones d’entrée de gamme et modes dégradés hors connexion.',
            keyRule:
              'Une architecture rapide, légère et disponible en continu protège directement le taux de conversion et la rétention des utilisateurs.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Pourquoi l’optimisation du poids et de la vitesse de chargement d’une application mobile est-elle un levier économique majeur en Afrique de l’Ouest ?',
              options: [
                'Parce que les utilisateurs préfèrent les applications qui mettent 30 secondes à s’ouvrir',
                'Parce qu’une application rapide et légère réduit l’abandon en cours d’achat sur les réseaux mobiles variables et améliore directement le taux de conversion',
                'Parce que les opérateurs télécoms interdisent les applications rapides',
                'Parce que la latence augmente le prix unitaire des produits vendus',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Réduire la latence et la consommation de data mobile améliore l’expérience utilisateur, abaisse le taux d’abandon et augmente mécaniquement les transactions conclues.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Risques tech',
            stepTheme: 'Vendor lock-in & Cyber',
            stepTitle: 'Risques d’infrastructure : vendor lock-in, dérive des coûts cloud et cybersécurité',
            paragraphText:
              'S’appuyer entièrement sur des infrastructures cloud et des API externes comporte aussi des vulnérabilités stratégiques à anticiper.\n' +
              '• **Dépendance fournisseur (*vendor lock-in*)** : utiliser des services propriétaires trop imbriqués chez un seul géant cloud rend très coûteux tout changement ultérieur en cas de hausse tarifaire.\n' +
              '• **Dérive de la facture Cloud (FinOps)** : sans suivi, des requêtes mal optimisées ou un pic de trafic non monétisé peuvent faire exploser les coûts OPEX et détruire la marge.\n' +
              '• **Cybersécurité et pannes** : une fuite de données clients ou une panne de paiement en heure de pointe entraîne des pertes financières directes, des sanctions réglementaires et une crise de confiance.',
            konanTip:
              'Le pilotage **FinOps** consiste justement à suivre le coût cloud par utilisateur actif ou par transaction afin de vérifier que la marge unitaire reste positive en grandissant !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Qu’appelle-t-on le « vendor lock-in » (verrouillage fournisseur) dans l’infrastructure technique d’une plateforme ?',
              options: [
                'La fermeture automatique du magasin physique le dimanche',
                'Une dépendance technique si forte envers un fournisseur cloud ou API unique qu’il devient très difficile et coûteux de migrer vers une alternative',
                'Le blocage des achats par carte bancaire le week-end',
                'La protection gratuite contre toutes les cyberattaques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le vendor lock-in survient lorsque l’architecture d’une entreprise est trop dépendante des outils propriétaires d’un seul prestataire technique, réduisant son pouvoir de négociation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'MVP vs Scale',
            stepTheme: 'Démarche progressive',
            stepTitle: 'Étude pratique : du MVP léger à l’architecture scalable',
            paragraphText:
              'Une erreur classique des jeunes entrepreneurs est de dépenser tout leur budget dans une architecture complexe avant même d’avoir trouvé leurs 100 premiers clients payants.\n' +
              '• **Phase 1 — MVP (Minimum Viable Product)** : tester la demande réelle avec un coût minimal (formulaire, WhatsApp Business, base de données simple, paiement Mobile Money manuel ou via lien de paiement).\n' +
              '• **Phase 2 — Product-Market Fit** : une fois la récurrence prouvée, automatiser les paiements par API, lancer l’application mobile légère et structurer le matching.\n' +
              '• **Phase 3 — Scale (Passage à l’échelle)** : déployer l’auto-scaling cloud, l’analytique de données avancée, la détection anti-fraude et l’expansion multi-villes ou régionale.',
            keyRule:
              'Construis d’abord un MVP léger pour prouver la demande, puis investis dans la scalabilité technique à mesure que le volume de transactions le justifie.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Avant de financer une architecture cloud distribuée très coûteuse, quelle étape une start-up numérique doit-elle prioritairement réussir ?',
              options: [
                'Construire son propre datacenter privé',
                'Valider la demande client et le modèle économique à travers un Produit Minimum Viable (MVP) léger et peu coûteux',
                'Recruter 200 commerciaux avant d’avoir un produit',
                'Lancer une campagne publicitaire mondiale à la télévision',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un MVP permet de tester la proposition de valeur et la disposition à payer des clients à moindre risque avant d’investir lourdement dans l’infrastructure de passage à l’échelle.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : DYNAMIQUES CONCURRENTIELLES, ÉTUDES DE CAS ET STRATÉGIES AFRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch4',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 : Dynamiques concurrentielles, études de cas et stratégies en Afrique',
    summary:
      'Études de cas comparées (Google vs Yahoo, iTunes vs Spotify, Amazon vs Jumia), pilotage par les métriques SaaS/plateforme (CAC, LTV, Churn, ARPU), effet winner-takes-all, Mobile Money & super-apps africaines, et enjeux économiques et numériques de régulation.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Modèles de Développement en Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 4.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1',
        order: 1,
        title: 'Études de cas comparées : Google vs Yahoo, iTunes vs Spotify, Amazon vs Jumia',
        summary:
          'Analyser pourquoi Google a supplanté Yahoo, comment Spotify a dépassé iTunes (propriété → accès), et comment Amazon et Jumia adaptent le modèle marketplace hybride aux réalités logistiques locales.',
        conceptExplanation:
          'Comparer des duos historiques permet d’observer concrètement comment le **choix du modèle économique** l’emporte souvent sur l’ancienneté ou la notoriété initiale.\n\n' +
          '1. **Google vs Yahoo (deux services proches, deux trajectoires opposées)** :\n' +
          '• **Yahoo** a suivi une logique de **portail média** : bannières publicitaires vendues à l’audience (CPM), coûts élevés de production et d’éditorialisation de contenus.\n' +
          '• **Google** a choisi la **recherche minimaliste**, des **mots-clés vendus aux enchères**, une facturation au **Coût Par Clic (CPC)** et une publicité **mesurable** captant l’intention directe — sans coût éditorial interne.\n\n' +
          '2. **iTunes vs Spotify (bascule transactionnel → abonnement/freemium)** : iTunes vendait chaque morceau définitivement (modèle transactionnel) ; Spotify a imposé l’accès illimité à tout le catalogue via **freemium + abonnement** et fidélisé par les playlists personnalisées (fort coût de changement).\n\n' +
          '3. **Amazon vs Jumia (hybridation et adaptation africaine)** : Amazon empile 4 moteurs (e-commerce retail + marketplace + abonnement Prime + publicité/Cloud AWS). En Afrique, **Jumia** adapte la marketplace aux réalités locales : paiement à la livraison (*cash-on-delivery*), Mobile Money et réseaux de points relais.',
        keyRule:
          'Dans l’économie numérique, un modèle aligné sur l’intention utilisateur, les coûts marginaux faibles et la mesure précise du ROI (Google, Spotify) finit par dépasser un modèle plus ancien à coûts fixes lourds.',
        formulas: [
          {
            name: 'Grille d’analyse comparative d’une plateforme',
            formula: '\\text{Diagnostic} = \\bigl(\\text{Offre agrégée},\\; \\text{Relation utilisateur},\\; \\text{Effet de réseau},\\; \\text{Capture de valeur}\\bigr)',
            note: 'Grille universelle applicable à Google, Uber, Airbnb, Netflix, Spotify, Amazon et Jumia.',
          },
        ],
        workedExample: {
          title: 'Appliquer la grille d’analyse à Google vs Yahoo',
          statement:
            'Au début des années 2000, Yahoo dominait largement le trafic web mondial. À l’aide de 4 critères (positionnement, coûts, format publicitaire, mesurabilité), expliquez pourquoi Google a pris l’ascendant durablement.',
          methodSteps: [
            'Positionnement : Yahoo était un portail média encombré ; Google proposait une page de recherche épurée et ultra-rapide.',
            'Structure de coûts : Yahoo supportait des coûts élevés de contenus éditoriaux ; Google indexait automatiquement le web mondial (agrégateur Niveau 3).',
            'Format publicitaire : bannières Display génériques (logique d’audience) chez Yahoo vs liens sponsorisés par mots-clés aux enchères (logique d’intention) chez Google.',
            'Mesurabilité : Google facturait au CPC (Coût Par Clic) avec ROI mesurable en temps réel, attirant massivement les PME comme les grands annonceurs.',
          ],
          conclusion:
            'L’alignement entre simplicité UX, coût marginal d’offre quasi nul et publicité ciblée au CPC a donné à Google un avantage structurel décisif.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'exemple',
            stepBadge: 'Google vs Yahoo',
            stepTheme: 'Cas d’école',
            stepTitle: 'Étude de cas : pourquoi Google a supplanté Yahoo',
            paragraphText:
              'Au tournant des années 2000, **Yahoo** et **Google** offraient deux portes d’entrée proches vers Internet, mais leurs modèles économiques ont produit des destins radicalement différents.\n' +
              '• **Modèle Yahoo** : portail média généraliste (actualités, finance, sport) financé par des **bannières publicitaires** dans une **logique d’audience**, au prix de **coûts élevés de contenu**.\n' +
              '• **Modèle Google** : interface de **recherche simple**, **mots-clés vendus aux enchères** (Google Ads), facturation au **Coût Par Clic (CPC)** et **publicité mesurable** basée sur l’intention explicite.\n' +
              '• **Leçon stratégique** : les annonceurs préfèrent payer pour un clic intentionnel mesurable plutôt que pour une bannière noyée dans un portail.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Étude de cas comparée : Modèle Yahoo vs Modèle Google',
              caption: 'Deux architectures économiques opposées face à la monétisation du trafic web.',
              matrix2x2: {
                topAxis: ['YAHOO (Portail Média)', 'GOOGLE (Moteur Agrégateur)'],
                leftAxis: ['Produit & Coûts', 'Monétisation & ROI'],
                topLeft: {
                  title: 'Portail éditorial lourd',
                  color: 'orange',
                  items: [
                    'Page d’accueil dense (actu, annuaire)',
                    'Coûts élevés de production de contenu',
                    'Logique héritée des médias TV/presse',
                  ],
                },
                topRight: {
                  title: 'Recherche simple & algorithmique',
                  color: 'blue',
                  items: [
                    'Interface épurée et résultats rapides',
                    'Indexation automatisée (coût marginal ≈ 0)',
                    'Contrôle direct de la demande (Niveau 3)',
                  ],
                },
                bottomLeft: {
                  title: 'Bannières & Logique d’audience',
                  color: 'slate',
                  items: [
                    'Display vendu au volume (CPM)',
                    'Ciblage large peu intentionnel',
                    'ROI difficile à prouver pour les PME',
                  ],
                },
                bottomRight: {
                  title: 'Enchères mots-clés & CPC mesurable',
                  color: 'green',
                  items: [
                    'Mots-clés captant l’intention immédiate',
                    'Facturation au Coût Par Clic (CPC)',
                    'Publicité mesurable à fort ROI',
                  ],
                },
              },
            },
            keyRule:
              'Yahoo = portail média, bannières, coûts de contenu élevés, logique d’audience ; Google = recherche simple, mots-clés aux enchères, CPC, publicité mesurable.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle combinaison caractérise le modèle économique qui a permis à Google de dominer Yahoo ?',
              options: [
                'Portail média encombré, bannières au CPM et coûts éditoriaux élevés',
                'Recherche simple, vente de mots-clés aux enchères, facturation au CPC et publicité mesurable',
                'Vente de journaux papier par abonnement postal',
                'Suppression totale de toute publicité sur son moteur de recherche',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Google a combiné interface simple, enchères sur mots-clés intentionnels et facturation mesurable au CPC, tout en évitant les lourds coûts de production de contenu de Yahoo.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'iTunes vs Spotify',
            stepTheme: 'Propriété → Accès',
            stepTitle: 'Étude de cas : iTunes (transactionnel) face à Spotify (freemium + abonnement)',
            paragraphText:
              'L’industrie musicale illustre parfaitement la transition historique de la **propriété** vers l’**accès**.\n' +
              '• **iTunes (modèle transactionnel)** : l’utilisateur achetait définitivement chaque chanson (ex. 0,99 $) ou album. Avantage : propriété durable ; limite : coût élevé pour découvrir de nombreux artistes.\n' +
              '• **Spotify (modèle freemium + abonnement)** : accès gratuit financé par la publicité pour capter une masse critique d’auditeurs, puis conversion vers un abonnement mensuel illimité donnant accès à plus de 100 millions de titres.\n' +
              '• **Rétention par la donnée** : les playlists personnalisées (Découvertes de la semaine) créent un fort coût de changement (*lock-in*) qui fidélise les abonnés.',
            konanTip:
              'Note le rôle du **freemium** chez Spotify : la version gratuite avec pubs sert de tunnel d’acquisition permanent pour convertir les auditeurs en abonnés Premium !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle rupture de modèle économique explique le basculement massif des consommateurs d’iTunes vers Spotify ?',
              options: [
                'Le passage d’un achat définitif morceau par morceau (transactionnel) à un accès illimité par freemium et abonnement récurrent enrichi par la recommandation',
                'L’obligation d’acheter des CD physiques pour écouter Spotify',
                'La suppression totale des droits d’auteur sur Internet',
                'La vente exclusive de smartphones par Spotify',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Spotify a remplacé la logique transactionnelle unitaire par l’accès illimité en streaming (freemium + abonnement), réduisant le coût d’entrée et personnalisant la découverte.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Airbnb & Uber',
            stepTheme: 'Économie de partage',
            stepTitle: 'Étude de cas : Airbnb et Uber, puissance et limites du modèle asset-light',
            paragraphText:
              'Airbnb (hébergement) et Uber/Yango (mobilité) sont les symboles mondiaux des plateformes bifaces *asset-light* facturant une **commission** sur chaque transaction.\n' +
              '• **Points communs gagnants** : zéro actif physique possédé (ni hôtels ni flottes propres), appariement géolocalisé instantané, notation bilatérale et paiement intégré.\n' +
              '• **Différence d’effet de réseau** : Airbnb bénéficie d’un effet de réseau **mondial** (un voyageur d’Abidjan réserve à Paris ou Dakar), tandis qu’Uber/Yango repose sur un effet de réseau **local** (il faut reconstruire une flotte de chauffeurs dans chaque ville).\n' +
              '• **Défis structurels** : régulations locales (licences de taxis, fiscalité hôtelière) et statut social des chauffeurs indépendants.',
            keyRule:
              'Un effet de réseau **global** (Airbnb) est plus défendable qu’un effet de réseau **local** (VTC), où un concurrent bien financé peut attaquer ville par ville.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Pourquoi la concurrence entre applications VTC (Uber, Yango, Bolt) reste-t-elle souvent plus intense localement que celle autour d’Airbnb ?',
              options: [
                'Parce que les voitures n’ont pas de GPS',
                'Parce que les effets de réseau du VTC sont essentiellement locaux (ville par ville), permettant à un nouvel entrant de conquérir une ville sans être leader mondial',
                'Parce que le VTC est gratuit pour les passagers',
                'Parce qu’Airbnb possède tous les hôtels du monde',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans le VTC, un passager à Abidjan se soucie uniquement de la densité de chauffeurs à Abidjan (effet de réseau local), ce qui facilite l’entrée d’un challenger localement bien financé.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Amazon vs Jumia',
            stepTheme: 'Adaptation Afrique',
            stepTitle: 'Étude de cas : modèle hybride Amazon et adaptation africaine de Jumia',
            paragraphText:
              'Comment transposer le modèle de la marketplace e-commerce sur un continent où l’adressage postal, la logistique et la bancarisation restent des défis ?\n' +
              '• **Amazon (hybride multi-moteurs)** : combine vente directe (*retail*), **marketplace** à commission, abonnement fidélisant (**Prime**), **publicité** sponsorisée et infrastructure cloud (**AWS**, qui génère une part majeure des profits).\n' +
              '• **Jumia (adaptation africaine)** : pour surmonter la faible bancarisation et la méfiance en ligne, Jumia a déployé le **paiement à la livraison** (*cash-on-delivery*), les paiements **Mobile Money** (JumiaPay), un réseau de **points relais** de quartier et une flotte logistique dédiée.\n' +
              '• **Leçon clé** : un modèle numérique ne se copie pas tel quel — il doit s’adapter aux infrastructures physiques et financières locales.',
            konanTip:
              'Retiens les trois adaptations clés du e-commerce africain : **Cash-on-Delivery / Mobile Money** (paiement), **Points relais** (adressage) et **logistique intégrée** (confiance livraison).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle adaptation opérationnelle a été indispensable aux marketplaces africaines comme Jumia pour compenser la faible bancarisation et les difficultés d’adressage ?',
              options: [
                'Exiger uniquement des paiements par carte bancaire internationale',
                'Proposer le paiement à la livraison (cash-on-delivery), le Mobile Money et un réseau de points relais de proximité',
                'Supprimer toute livraison hors des aéroports',
                'Vendre uniquement des produits numériques sans colis physiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Adapter le paiement (cash-on-delivery + Mobile Money) et le dernier kilomètre (points relais) est vital pour instaurer la confiance et rendre le e-commerce accessible en Afrique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Grille d’analyse',
            stepTheme: 'Méthode 4 questions',
            stepTitle: 'Méthode : analyser n’importe quelle plateforme en quatre questions clés',
            paragraphText:
              'Face à n’importe quelle entreprise numérique en examen ou en étude de cas (Netflix, TikTok, Wave, Glovo, Airbnb), applique systématiquement cette grille en 4 étapes :\n' +
              '• **1. Quelle est l’offre agrégée ?** (contenus, logements, trajets, marchands, paiements).\n' +
              '• **2. Comment contrôle-t-elle la relation utilisateur ?** (application mobile, recherche, recommandation, habitude quotidienne).\n' +
              '• **3. Quel est son moteur de croissance ?** (effet de réseau direct/croisé, données, viralité, taille critique).\n' +
              '• **4. Quel est son mode de capture de valeur ?** (commission, publicité, abonnement, freemium, modèle hybride).',
            keyRule:
              'Maîtrise cette grille universelle en 4 points : **Offre agrégée → Relation utilisateur → Moteur d’effet de réseau → Mode de revenu**.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Selon la grille d’analyse des plateformes, quel duo associe correctement Netflix à son offre agrégée et son modèle de revenu principal ?',
              options: [
                'Offre : trajets urbains ; Revenu : commission par course',
                'Offre : catalogue de films/séries (licences et originaux) ; Revenu : abonnement récurrent à plusieurs niveaux (versioning) complété par une offre avec pub',
                'Offre : recherche de mots-clés ; Revenu : enchères au CPC',
                'Offre : logements de particuliers ; Revenu : frais de service par nuitée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Netflix agrège un catalogue vidéo (Niveau 1) contrôlé via son interface de recommandation et monétisé principalement par abonnement multi-niveaux.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Dilemme innovateur',
            stepTheme: 'Inertie stratégique',
            stepTitle: 'Pourquoi les géants historiques perdent souvent face aux nouveaux modèles numériques',
            paragraphText:
              'Comment des entreprises autrefois riches et dominantes (Blockbuster face à Netflix, Yahoo face à Google, taxis traditionnels face aux VTC) se laissent-elles dépasser ?\n' +
              '• **Peur de la cannibalisation** : adopter un abonnement illimité ou un modèle freemium menace à court terme leurs marges historiques confortables (ex. pénalités de retard chez Blockbuster).\n' +
              '• **Lourdeur des actifs fixes (pipeline)** : magasins, baux, flottes et structures hiérarchiques freinent les pivots rapides.\n' +
              '• **Sous-estimation de la croissance exponentielle** : au début, une plateforme semble petite et peu rentable ; quand ses effets de réseau explosent, il est déjà trop tard pour la rattraper.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi un leader historique rentable hésite-t-il souvent à adopter un nouveau modèle numérique (comme l’abonnement streaming ou la plateforme asset-light) ?',
              options: [
                'Parce qu’il ne dispose d’aucun client existant',
                'Par crainte de cannibaliser ses revenus historiques à court terme et en raison de l’inertie liée à ses actifs physiques lourds',
                'Parce que la loi interdit aux grandes entreprises de créer des sites web',
                'Parce que les modèles numériques sont toujours moins rentables à long terme',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le « dilemme de l’innovateur » pousse souvent les acteurs installés à protéger leurs marges traditionnelles plutôt que de se transformer avant qu’un entrant ne capte le marché.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2',
        order: 2,
        title: 'Métriques SaaS & Plateformes (CAC, LTV, Churn, ARPU), Winner-Takes-All et Super-Apps africaines',
        summary:
          'Calculer et interpréter CAC, ARPU, taux de churn, LTV, ratio LTV/CAC ≥ 3 et Payback Period ; comprendre l’effet winner-takes-all, le multi-homing et l’essor du Mobile Money et des super-apps en Afrique.',
        conceptExplanation:
          'Pour piloter une entreprise numérique (SaaS, abonnement, fintech ou plateforme) et convaincre des investisseurs, quatre **métriques financières unitaires (*unit economics*)** sont incontournables :\n\n' +
          '1. **CAC (Coût d’Acquisition Client)** : coût marketing et commercial moyen dépensé pour acquérir un nouveau client payant : $\\text{CAC} = \\frac{\\text{Dépenses marketing & ventes}}{\\text{Nombre de nouveaux clients}}$.\n' +
          '2. **ARPU (Average Revenue Per User)** : revenu moyen mensuel généré par utilisateur actif : $\\text{ARPU} = \\frac{\\text{Revenu mensuel total}}{\\text{Nombre d’utilisateurs actifs}}$.\n' +
          '3. **Churn Rate (taux de résiliation)** : pourcentage de clients qui quittent le service chaque mois. La durée de vie moyenne d’un client vaut $\\frac{1}{\\text{Churn}}$.\n' +
          '4. **LTV (Lifetime Value — Valeur Vie Client)** : marge totale générée par un client sur toute sa durée de relation : $\\text{LTV} = \\frac{\\text{ARPU} \\times \\text{Marge brute}}{\\text{Churn}}$.\n\n' +
          'Un modèle est jugé sain lorsque le ratio **$\\text{LTV} / \\text{CAC} \\ge 3$** et que le délai de récupération (**Payback Period** $= \\frac{\\text{CAC}}{\\text{ARPU} \\times \\text{Marge}}$) reste court (< 12 mois). Enfin, sur le continent africain, le **Mobile Money** (Wave, Orange Money, MTN MoMo) et les **super-apps** (Gozem) transforment ces métriques en abaissant drastiquement le CAC grâce à l’usage quotidien.',
        keyRule:
          'Règle d’or des métriques numériques : un modèle d’abonnement ou de plateforme est viable lorsque LTV / CAC ≥ 3 et que le taux de churn reste suffisamment bas pour amortir rapidement le CAC.',
        formulas: [
          {
            name: 'CAC, LTV et Ratio de rentabilité unitaire',
            formula: '\\text{CAC} = \\frac{\\text{Budget Acq.}}{\\text{Nouveaux clients}} \\quad ; \\quad \\text{LTV} = \\frac{\\text{ARPU} \\times m}{\\text{Churn}} \\quad ; \\quad \\frac{\\text{LTV}}{\\text{CAC}} \\ge 3',
            note: 'Avec m le taux de marge brute (ex. 80 % en SaaS) et Churn le taux mensuel de résiliation.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer la rentabilité d’une application SaaS éducative en Côte d’Ivoire',
          statement:
            'Une plateforme EdTech à Abidjan facture un abonnement mensuel ARPU = 5 000 FCFA avec une marge brute de 80 %. Son taux de churn mensuel est de 5 % et elle dépense 6 000 000 FCFA de marketing pour recruter 300 abonnés. Calculez CAC, durée de vie moyenne, LTV, ratio LTV/CAC et Payback Period.',
          methodSteps: [
            'CAC = 6 000 000 / 300 = 20 000 FCFA par nouvel abonné.',
            'Durée de vie moyenne d’un abonné = 1 / Churn = 1 / 0,05 = 20 mois.',
            'Marge mensuelle par abonné = ARPU × 80 % = 5 000 × 0,80 = 4 000 FCFA/mois.',
            'LTV = 4 000 × 20 = 80 000 FCFA (soit (5 000 × 0,80) / 0,05 = 80 000 FCFA).',
            'Ratio LTV / CAC = 80 000 / 20 000 = 4 (≥ 3 → très sain !). Payback Period = 20 000 / 4 000 = 5 mois.',
          ],
          conclusion:
            'Avec LTV/CAC = 4 et un retour sur investissement en 5 mois, le modèle est économiquement viable et prêt à passer à l’échelle.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'CAC & ARPU',
            stepTheme: 'Acquisition & Revenu',
            stepTitle: 'Mesurer le Coût d’Acquisition Client (CAC) et le Revenu Moyen (ARPU)',
            paragraphText:
              'Avant de dépenser des millions en publicité pour grandir, tout dirigeant numérique doit mesurer combien coûte un client et combien il rapporte chaque mois.\n' +
              '• **CAC (Customer Acquisition Cost)** : total des dépenses marketing et commerciales divisé par le nombre de nouveaux clients payants acquis sur la période.\n' +
              '• **ARPU (Average Revenue Per User)** : chiffre d’affaires mensuel divisé par le nombre d’utilisateurs actifs.\n' +
              '• **Exemple chiffré** : une fintech dépense $3\\ 000\\ 000\\text{ FCFA}$ en campagnes pour acquérir $1\\ 000$ nouveaux clients payants → $\\text{CAC} = 3\\ 000\\text{ FCFA}$. Si ses $5\\ 000$ clients actifs génèrent $10\\ 000\\ 000\\text{ FCFA/mois}$ → $\\text{ARPU} = 2\\ 000\\text{ FCFA/mois}$.',
            formula: {
              name: 'CAC et ARPU',
              formula: '\\text{CAC} = \\frac{\\text{Dépenses Marketing + Ventes}}{\\text{Nouveaux clients acquis}} \\qquad ; \\qquad \\text{ARPU} = \\frac{\\text{Revenu mensuel}}{\\text{Utilisateurs actifs}}',
              note: 'En SaaS, on suit aussi le MRR (Monthly Recurring Revenue = Utilisateurs × ARPU).',
            },
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Une start-up numérique dépense 4 500 000 FCFA en marketing et force de vente au cours d’un mois pour recruter 300 nouveaux clients payants. Quel est son CAC ?',
              options: ['1 500 FCFA', '15 000 FCFA', '45 000 FCFA', '150 000 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'CAC = 4 500 000 / 300 = 15 000 FCFA par nouveau client payant acquis.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Taux de Churn',
            stepTheme: 'Rétention vitale',
            stepTitle: 'Le taux de résiliation (Churn) : l’ennemi silencieux des modèles récurrents',
            paragraphText:
              'Un seau percé ne se remplit jamais, même si l’on ouvre le robinet à fond ! En économie numérique, le **Churn rate** mesure la taille des trous dans le seau.\n' +
              '• **Définition** : pourcentage de clients qui résilient ou cessent d’utiliser le service sur une période donnée ($\\text{Churn} = \\frac{\\text{Clients perdus}}{\\text{Clients début de période}}$).\n' +
              '• **Lien direct avec la durée de vie** : un churn mensuel de $10\\,\\%$ signifie une durée de vie moyenne de $1 / 0{,}10 = 10\\text{ mois}$ ; réduire ce churn à $2\\,\\%$ porte la durée de vie à $1 / 0{,}02 = 50\\text{ mois}$ ($\\times 5$ !).\n' +
              '• **Priorité stratégique** : fidéliser un abonné existant coûte généralement 5 à 7 fois moins cher que d’en acquérir un nouveau.',
            keyRule:
              'Diviser son taux de churn mensuel par 2 double mécaniquement la durée de vie moyenne client et la Lifetime Value (LTV).',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Si un service d’abonnement numérique affiche un taux de résiliation (churn) mensuel moyen de 4 %, quelle est la durée de vie moyenne estimée d’un abonné ?',
              options: ['4 mois', '10 mois', '25 mois', '40 mois'],
              correctAnswerIndex: 2,
              explanation:
                'Durée de vie moyenne = 1 / Churn = 1 / 0,04 = 25 mois.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'LTV & Ratio ≥ 3',
            stepTheme: 'Rentabilité unitaire',
            stepTitle: 'Calculer la Lifetime Value (LTV), le ratio LTV/CAC et le Payback Period',
            paragraphText:
              'La **LTV (Lifetime Value)** estime la marge totale qu’un client rapportera durant toute sa relation avec l’entreprise.\n' +
              '• **Formule** : $\\text{LTV} = \\frac{\\text{ARPU} \\times \\text{Marge brute}}{\\text{Churn mensuel}}$.\n' +
              '• **Ratio d’or $\\text{LTV} / \\text{CAC}$** :\n' +
              '  - Si $\\text{LTV} / \\text{CAC} < 1$ : chaque client acquis fait perdre de l’argent (modèle destructeur).\n' +
              '  - Si $\\text{LTV} / \\text{CAC} \\ge 3$ : équilibre sain et scalable.\n' +
              '• **Payback Period** : nombre de mois nécessaires pour rembourser le CAC grâce à la marge mensuelle ($\\text{Payback} = \\frac{\\text{CAC}}{\\text{ARPU} \\times m}$).',
            visualSchema: {
              type: 'bar_chart',
              title: 'Comparaison CAC vs LTV sur un modèle SaaS sain (en milliers FCFA)',
              caption: 'Exemple EdTech : CAC = 20 k FCFA, Marge annuelle = 48 k FCFA, LTV (20 mois) = 80 k FCFA → Ratio LTV/CAC = 4 (≥ 3).',
              barChart: {
                yLabel: 'Montant (k FCFA)',
                unit: ' k',
                bars: [
                  { label: 'CAC initial', value: 20, color: 'orange', annotation: '20 k' },
                  { label: 'Marge 5 mois', value: 20, color: 'blue', annotation: 'Payback' },
                  { label: 'Marge 12 mois', value: 48, color: 'violet', annotation: '48 k' },
                  { label: 'LTV totale', value: 80, color: 'green', annotation: '80 k (4×)' },
                ],
              },
            },
            formula: {
              name: 'LTV et Payback Period',
              formula: '\\text{LTV} = \\frac{\\text{ARPU} \\times m}{\\text{Churn}} \\qquad ; \\qquad \\text{Payback (mois)} = \\frac{\\text{CAC}}{\\text{ARPU} \\times m}',
              note: 'Un Payback < 12 mois évite d’asphyxier la trésorerie pendant une hyper-croissance.',
            },
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Une application SaaS a un ARPU de 5 000 FCFA/mois, une marge brute de 80 %, un churn mensuel de 5 % et un CAC de 20 000 FCFA. Que valent sa LTV et son ratio LTV/CAC ?',
              options: [
                'LTV = 20 000 FCFA ; ratio = 1',
                'LTV = 80 000 FCFA ; ratio = 4 (modèle très sain)',
                'LTV = 40 000 FCFA ; ratio = 2',
                'LTV = 100 000 FCFA ; ratio = 5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Marge mensuelle = 5 000 × 0,80 = 4 000 FCFA. Durée de vie = 1 / 0,05 = 20 mois. LTV = 4 000 × 20 = 80 000 FCFA. Ratio LTV/CAC = 80 000 / 20 000 = 4 ≥ 3.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Winner-Takes-All',
            stepTheme: 'Structure de marché',
            stepTitle: 'Effet Winner-Takes-All vs Multi-homing sur les marchés de plateformes',
            paragraphText:
              'Pourquoi certains marchés numériques n’ont-ils qu’un seul géant dominant (Google dans la recherche) tandis que d’autres tolèrent 2 ou 3 concurrents (Uber, Yango, Bolt) ?\n' +
              '• **Effet Winner-Takes-All (ou Winner-Takes-Most)** : lorsque les effets de réseau sont très forts, les coûts de changement élevés et la différenciation faible, le leader capte la quasi-totalité du marché et des profits.\n' +
              '• **Le contre-pouvoir du Multi-homing** : lorsque les utilisateurs et offreurs peuvent facilement utiliser **plusieurs plateformes en parallèle** (ex. un chauffeur inscrit sur Uber et Yango, un client qui compare les prix sur deux applis), le monopole total devient beaucoup plus difficile à maintenir.\n' +
              '• **Conséquence stratégique** : les plateformes créent des programmes de fidélité ou des bouquets pour réduire le multi-homing.',
            keyRule:
              'Effets de réseau forts + coûts de changement élevés → **Winner-Takes-All** ; facilité d’utiliser plusieurs applis en parallèle (**multi-homing**) → coexistence de plusieurs plateformes.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Qu’appelle-t-on le « multi-homing » sur un marché de plateformes numériques ?',
              options: [
                'L’achat de plusieurs maisons sur Airbnb par un même touriste',
                'Le fait pour les utilisateurs ou les fournisseurs d’utiliser simultanément plusieurs plateformes concurrentes (ex. un chauffeur connecté à la fois sur Uber et Yango)',
                'L’hébergement d’un site sur un seul serveur domestique',
                'La fermeture de toutes les applications sauf une seule',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le multi-homing désigne la multi-appartenance simultanée à plusieurs plateformes concurrentes, ce qui limite la tendance au monopole absolu (winner-takes-all).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Mobile Money & Super-Apps',
            stepTheme: 'Stratégies Afrique',
            stepTitle: 'Stratégies gagnantes en Afrique : Mobile Money et essor des Super-Apps',
            paragraphText:
              'En Afrique de l’Ouest, l’écosystème numérique a sauté directement l’étape de la carte bancaire classique (*leapfrogging*) pour bâtir des modèles originaux autour du téléphone mobile.\n' +
              '• **Révolution Mobile Money (Wave, Orange Money, MTN MoMo, Moov Money)** : transformation du téléphone en compte financier universel, permettant les micro-paiements, les factures et les abonnements sans compte bancaire. L’exemple de **Wave** montre la puissance d’une tarification radicalement simple (1 % sur transfert, dépôts/retraits gratuits) et d’une UX ultra-fluide.\n' +
              '• **Modèle Super-App (ex. Gozem en Afrique de l’Ouest)** : regrouper dans une **application unique** plusieurs usages quotidiens (transport, livraison repas/colis, e-commerce, paiement, crédit) afin de **mutualiser le CAC** une seule fois et maximiser la fréquence d’utilisation et la LTV.',
            konanTip:
              'Retiens la logique économique d’une **Super-App** : tu paies le **CAC une seule fois** pour acquérir l’utilisateur, puis tu empiles plusieurs sources de revenus (mobilité + livraison + paiement) pour faire exploser sa **LTV** !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Quel avantage économique majeur procure la stratégie de « Super-App » (regroupant mobilité, livraison et paiement dans une seule application) sur le plan des métriques CAC et LTV ?',
              options: [
                'Elle multiplie le CAC par 5 pour chaque nouveau service',
                'Elle permet d’amortir un CAC unique sur plusieurs services quotidiens complémentaires, augmentant fortement la rétention et la LTV',
                'Elle supprime l’usage du Mobile Money',
                'Elle impose un churn de 100 % chaque mois',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Super-App mutualise le coût d’acquisition client sur un écosystème multi-services, accroît la fréquence d’usage et augmente mécaniquement la LTV.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Diagnostic financier',
            stepTheme: 'Piège de la croissance',
            stepTitle: 'Piège fatal : financer une hyper-croissance avec LTV < CAC',
            paragraphText:
              'De nombreuses start-ups numériques ayant levé des millions font faillite parce qu’elles confondent **croissance du chiffre d’affaires** et **rentabilité unitaire**.\n' +
              '• **Scénario piège** : une appli dépense $\\text{CAC} = 30\\ 000\\text{ FCFA}$ en promotions et publicités pour recruter un client qui ne rapporte au total que $\\text{LTV} = 18\\ 000\\text{ FCFA}$ avant de désinstaller l’application.\n' +
              '• **Conséquence** : plus la start-up recrute de clients, plus elle perd d’argent ($-12\\ 000\\text{ FCFA}$ par client !).\n' +
              '• **Correction prioritaire** : avant d’accélérer le budget pub, il faut d’abord réduire le **churn**, augmenter l’**ARPU** (upsell/versioning) ou baisser le **CAC** (parrainage organique).',
            keyRule:
              'Ne jamais accélérer les dépenses publicitaires tant que la rentabilité unitaire ($\\text{LTV} > \\text{CAC}$, idéalement $\\ge 3$) n’est pas prouvée.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Une start-up constate que son CAC vaut 25 000 FCFA alors que sa LTV n’est que de 15 000 FCFA. Que doit-elle faire en priorité ?',
              options: [
                'Multiplier par dix son budget publicitaire pour perdre plus vite sur chaque client',
                'Freiner l’acquisition payante pour améliorer d’abord la rétention (réduire le churn), augmenter la valeur client (ARPU) et abaisser le CAC',
                'Supprimer toute mesure de ses indicateurs financiers',
                'Rendre son service payant totalement gratuit sans aucun autre revenu',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec LTV < CAC, chaque nouveau client creuse le déficit. Il faut impérativement assainir les unit economics (rétention, ARPU, acquisition organique) avant de scaler.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3',
        order: 3,
        title: 'Pouvoir économique des plateformes, régulation et souveraineté numérique',
        summary:
          'Analyser les risques liés au pouvoir de marché des plateformes (abus de position dominante, dépendance des PME, fiscalité, travailleurs de plateforme), les enjeux numériques (données, algorithmes, modération) et la souveraineté numérique en Afrique.',
        conceptExplanation:
          'Le succès spectaculaire des grandes plateformes crée des **risques économiques, sociaux et démocratiques** majeurs : la régulation numérique n’est plus seulement technologique, elle est devenue un enjeu central de **politique publique**.\n\n' +
          '1. **Quatre grands enjeux économiques** :\n' +
          '• **Concurrence et abus de position dominante** : risque d’auto-préférence (*self-preferencing*, quand une plateforme favorise ses propres produits face aux vendeurs tiers) et de rachat préventif de concurrents.\n' +
          '• **Fiscalité numérique transfrontalière** : difficulté pour les États de taxer des géants générant des milliards de revenus publicitaires ou d’abonnements sans présence physique locale.\n' +
          '• **Conditions de travail des travailleurs de plateforme** : statut juridique, protection sociale et rémunération des chauffeurs VTC et livreurs.\n' +
          '• **Accès équitable aux marchés pour les PME** : dépendance commerciale forte des petits marchands vis-à-vis des règles unilatérales de la plateforme.\n\n' +
          '2. **Quatre grands enjeux numériques** :\n' +
          '• **Protection des données personnelles** (consentement, sécurité, autorités locales comme l’ARTCI en Côte d’Ivoire).\n' +
          '• **Transparence des algorithmes** (classement, tarification dynamique, biais).\n' +
          '• **Modération des contenus et responsabilité** face à la désinformation et aux contenus illicites.\n' +
          '• **Souveraineté numérique** : réduire la dépendance technologique et infrastructurelle vis-à-vis des géants étrangers en développant cloud, talents et champions régionaux.',
        keyRule:
          'La régulation des plateformes vise un équilibre entre innovation et intérêt général sur deux axes : enjeux économiques (concurrence, fiscalité, travail, PME) et enjeux numériques (données, algorithmes, modération, souveraineté).',
        formulas: [
          {
            name: 'Double axe de la régulation des plateformes',
            formula: '\\text{Régulation} = \\underbrace{\\text{Concurrence, Fiscalité, Travail, PME}}_{\\text{Enjeux économiques}} + \\underbrace{\\text{Données, Algorithmes, Modération, Souveraineté}}_{\\text{Enjeux numériques}}',
            note: 'Complémentarité entre droit de la concurrence, droit fiscal, droit social et protection des données.',
          },
        ],
        workedExample: {
          title: 'Évaluer les risques de dépendance d’une PME ivoirienne vendant 100 % sur une plateforme',
          statement:
            'Une marque locale de cosmétiques réalise 95 % de son chiffre d’affaires via une unique marketplace et les publicités d’un seul réseau social. Quels risques économiques encourt-elle et comment les réduire ?',
          methodSteps: [
            'Risque 1 — Hausse unilatérale des commissions ou du CPC : la marge de la PME peut s’effondrer du jour au lendemain.',
            'Risque 2 — Opacité algorithmique ou suspension de compte : un changement d’algorithme peut diviser la visibilité par cinq sans recours rapide.',
            'Risque 3 — Perte de la relation client directe : c’est la plateforme qui possède la base de données clients.',
            'Stratégie de résilience : diversifier les canaux (site propre + WhatsApp Business + points de vente), collecter sa propre base client (first-party data) avec consentement.',
          ],
          conclusion:
            'Utiliser les plateformes comme levier de visibilité tout en construisant sa propre relation client directe protège l’indépendance de la PME.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Pouvoir de marché',
            stepTheme: 'Concurrence & PME',
            stepTitle: 'Abus de position dominante, auto-préférence et dépendance des PME',
            paragraphText:
              'Lorsqu’une plateforme devient à la fois l’**arbitre du marché** (la marketplace) et un **joueur** (elle vend ses propres produits sur cette même marketplace), un conflit d’intérêts économique apparaît.\n' +
              '• **Auto-préférence (*self-preferencing*)** : tentation pour une plateforme dominante de placer ses propres services en tête des résultats de recherche au détriment de ses concurrents.\n' +
              '• **Exploitation des données des vendeurs tiers** : repérer les produits les plus vendus par les PME pour lancer ensuite une copie en marque propre.\n' +
              '• **Dépendance des PME** : un commerçant qui dépend à 90 % d’une seule plateforme perd tout pouvoir de négociation face aux hausses de commissions ou aux suspensions automatiques de compte.',
            keyRule:
              'Les autorités de concurrence surveillent l’auto-préférence et garantissent un accès équitable aux marchés numériques pour les PME.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle pratique anticoncurrentielle appelle-t-on « auto-préférence » (self-preferencing) sur une grande plateforme numérique ?',
              options: [
                'Le fait pour un utilisateur de choisir son mot de passe préféré',
                'Le fait pour une plateforme dominante de favoriser algorithmiquement ses propres produits ou services au détriment des vendeurs tiers concurrents',
                'La baisse volontaire des commissions pour aider les petites entreprises',
                'L’obligation d’afficher le prix TTC',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’auto-préférence consiste pour une plateforme agissant comme intermédiaire dominant à avantager ses propres offres dans les résultats ou l’interface.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Fiscalité & Travail',
            stepTheme: 'Enjeux économiques',
            stepTitle: 'Fiscalité numérique transfrontalière et statut des travailleurs de plateforme',
            paragraphText:
              'Deux autres défis économiques majeurs mobilisent les gouvernements et organisations internationales.\n' +
              '• **Fiscalité des activités numériques transfrontalières** : une plateforme étrangère peut encaisser des milliards FCFA d’abonnements ou de publicités dans un pays africain sans y disposer de siège ni d’usine. Les États instaurent progressivement des taxes sur les services numériques (TVA sur services digitaux, règles OCDE) pour rétablir l’équité fiscale face aux entreprises locales.\n' +
              '• **Travailleurs de plateforme (livreurs, chauffeurs VTC)** : juridiquement indépendants mais souvent soumis aux tarifs, horaires et sanctions d’un algorithme, ils posent la question de la **protection sociale** (assurance accident, retraite, revenu décent).',
            keyRule:
              'La régulation économique des plateformes doit moderniser à la fois la fiscalité transfrontalière et la protection sociale des travailleurs indépendants pilotés par algorithme.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Pourquoi la fiscalité des grandes plateformes numériques internationales pose-t-elle un défi particulier aux États ?',
              options: [
                'Parce que les plateformes refusent d’utiliser des ordinateurs',
                'Parce qu’elles génèrent d’importants revenus dans un pays sans y avoir nécessairement d’établissement physique traditionnel, ce qui complique l’imposition classique',
                'Parce que le numérique est exonéré d’impôt par la Constitution mondiale',
                'Parce que les utilisateurs paient uniquement en troc',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La dématérialisation permet de monétiser des millions d’utilisateurs locaux depuis l’étranger sans présence physique, obligeant les États à adapter leurs règles fiscales.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Données & Algorithmes',
            stepTheme: 'Enjeux numériques',
            stepTitle: 'Protection des données, transparence algorithmique et modération des contenus',
            paragraphText:
              'Sur le plan numérique et éthique, la régulation encadre trois zones sensibles du fonctionnement quotidien des plateformes.\n' +
              '• **Protection des données personnelles** : obligation de consentement éclairé, finalité limitée, sécurisation et droits d’accès/suppression des utilisateurs.\n' +
              '• **Transparence des algorithmes** : expliquer les critères de classement, de recommandation ou de tarification dynamique pour prévenir les discriminations et manipulations cachées.\n' +
              '• **Modération des contenus et responsabilité** : obliger les réseaux sociaux et marketplaces à retirer rapidement les contenus illicites, arnaques, contrefaçons et campagnes de désinformation.',
            konanTip:
              'En Côte d’Ivoire, c’est l’**ARTCI** (Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire) qui veille notamment à la protection des données à caractère personnel !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Quel trio regroupe les principaux enjeux de régulation spécifiquement « numériques » applicables aux grandes plateformes ?',
              options: [
                'Construction d’autoroutes, fabrication d’acier et pêche maritime',
                'Protection des données personnelles, transparence des algorithmes et modération/responsabilité sur les contenus',
                'Suppression des smartphones, arrêt du Cloud et retour au télégraphe',
                'Fixation du prix du ciment, du cacao et du pétrole',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La régulation numérique encadre la protection des données, l’explicabilité des algorithmes et la responsabilité de modération des plateformes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Souveraineté',
            stepTheme: 'Enjeu africain',
            stepTitle: 'Souveraineté numérique et réduction de la dépendance technologique',
            paragraphText:
              'La **souveraineté numérique** désigne la capacité d’un État ou d’une région (comme l’UEMOA) à maîtriser ses infrastructures, ses données stratégiques et ses choix technologiques.\n' +
              '• **Risque de dépendance** : si toutes les données publiques, financières et commerciales sont hébergées hors du continent et que les plateformes dominantes sont toutes étrangères, la valeur ajoutée et le contrôle stratégique échappent à l’économie locale.\n' +
              '• **Quatre leviers concrets** : investir dans des **datacenters locaux** et la fibre optique, former des **talents numériques** (développeurs, data scientists, experts cyber), favoriser l’**interopérabilité** des paiements (comme les initiatives BCEAO dans l’UEMOA) et soutenir l’émergence de **champions numériques régionaux**.',
            keyRule:
              'La souveraineté numérique repose sur quatre piliers : infrastructures locales, maîtrise des données stratégiques, formation des talents et champions régionaux compétitifs.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Lequel des leviers suivants renforce directement la souveraineté numérique d’un pays ou d’une région comme l’UEMOA ?',
              options: [
                'Héberger toutes les données publiques sensibles sans aucun cadre juridique hors du continent',
                'Développer des infrastructures locales (datacenters, connectivité), former des talents numériques et soutenir l’interopérabilité régionale des paiements',
                'Interdire la création de start-ups locales',
                'Dépendre d’un unique fournisseur étranger sans alternative',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La souveraineté numérique se construit par les infrastructures locales, le capital humain, l’interopérabilité et le soutien aux entreprises innovantes locales.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Interopérabilité',
            stepTheme: 'Ouverture & Concurrence',
            stepTitle: 'Interopérabilité et portabilité des données : briser les monopoles fermés',
            paragraphText:
              'Comment permettre à de nouvelles start-ups innovantes d’exister face à des géants protégés par de puissants coûts de changement (*lock-in*) ? Grâce à deux outils réglementaires modernes :\n' +
              '• **Portabilité des données** : droit pour un utilisateur ou une PME d’exporter facilement son historique, ses fichiers ou ses avis vers un service concurrent.\n' +
              '• **Interopérabilité** : obligation technique permettant à différents systèmes de communiquer entre eux (exemple majeur en zone UEMOA : l’**interopérabilité des paiements mobiles** pilotée par la BCEAO, permettant d’envoyer instantanément de l’argent d’un opérateur Mobile Money ou d’une banque vers un autre).\n' +
              '• **Effet économique** : stimule la concurrence par la qualité et baisse les frais pour les citoyens et les PME.',
            konanTip:
              'L’interopérabilité est un levier pro-concurrence puissant : quand tu peux transférer ton argent ou tes données d’une appli à une autre sans friction, les plateformes doivent mériter ta fidélité par la qualité !',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Quel effet économique majeur produit l’interopérabilité des services de paiement mobile dans l’espace UEMOA ?',
              options: [
                'Elle empêche les utilisateurs de transférer de l’argent entre deux opérateurs différents',
                'Elle réduit les coûts de changement (lock-in), stimule la concurrence sur la qualité et les prix, et renforce l’inclusion financière',
                'Elle augmente artificiellement le coût marginal des transactions',
                'Elle oblige chaque citoyen à utiliser uniquement des chèques papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’interopérabilité supprime les silos fermés, facilite les paiements universels entre acteurs et encourage une concurrence saine au bénéfice des usagers.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Synthèse finale',
            stepTheme: 'Modèle durable',
            stepTitle: 'Synthèse : concevoir un modèle économique numérique viable et responsable en Afrique',
            paragraphText:
              'Pour réussir dans l’économie numérique contemporaine, un entrepreneur ou un manager digital doit aligner cinq exigences complémentaires :\n' +
              '• **1. Proposition de valeur réelle** : résoudre un problème concret et local (paiement, logistique, éducation, santé, agriculture).\n' +
              '• **2. Alignement économique** : choisir une monétisation (abonnement, commission, freemium, hybride) cohérente avec le pouvoir d’achat et le Mobile Money.\n' +
              '• **3. Scalabilité maîtrisée** : s’appuyer sur le Cloud et les API sans sur-investir avant le *product-market fit*.\n' +
              '• **4. Discipline sur les métriques** : piloter CAC, ARPU, Churn et viser $\\text{LTV} / \\text{CAC} \\ge 3$.\n' +
              '• **5. Confiance et conformité** : respecter la vie privée, la transparence et la sobriété numérique.',
            keyRule:
              'Un modèle numérique durable conjugue proposition de valeur locale forte, unit economics saines (LTV/CAC ≥ 3), scalabilité agile et éthique réglementaire.',
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle combinaison réunit les conditions indispensables pour bâtir un modèle économique numérique durable et scalable en zone UEMOA ?',
              options: [
                'Copier sans adaptation un modèle étranger par carte bancaire avec LTV < CAC',
                'Résoudre un besoin local fort, adapter le paiement au Mobile Money, piloter LTV/CAC ≥ 3, s’appuyer sur Cloud/API et respecter la protection des données',
                'Ignorer les utilisateurs gratuits et supprimer toute gouvernance qualité',
                'Acheter d’abord des serveurs physiques coûteux avant de tester la demande client',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le succès durable repose sur l’adéquation au contexte local (besoin + Mobile Money), la rigueur des métriques unitaires, une tech agile et la confiance réglementaire.',
            },
          },
        ],
      }),
    ],
  },
];
