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
  // CHAPITRE 1 : L'ENTREPRISE — DÉFINITIONS, FINALITÉS, SYSTÈME ET CYCLE D'EXPLOITATION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch1',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — L’entreprise : définitions, finalités, approche systémique et cycle d’exploitation',
    summary:
      'Maîtriser la définition économique et sociale de l’entreprise, ses finalités et parties prenantes, la création et la répartition de la valeur ajoutée, l’approche systémique, la culture et le cycle d’exploitation.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Organisation et Gestion des Entreprises',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch1_p1',
        order: 1,
        title: 'Définition économique, finalités et parties prenantes de l’entreprise',
        summary:
          'Comprendre ce qui distingue une entreprise des autres organisations, ses finalités économiques, sociales et sociétales, ainsi que le rôle de ses acteurs internes et externes.',
        conceptExplanation:
          "L’entreprise est une unité économique autonome qui combine des moyens humains, matériels, financiers et technologiques (facteurs travail et capital) pour produire des biens ou des services destinés à être vendus sur un marché afin de réaliser un profit et d’assurer sa pérennité.\n\nElle poursuit trois finalités complémentaires : économique (produire et satisfaire la clientèle), sociale (créer des emplois et améliorer les conditions de vie des travailleurs) et sociétale/financière (garantir la rentabilité tout en respectant l’environnement et l’intérêt général). Pour fonctionner, elle interagit avec des parties prenantes internes (actionnaires, direction, cadres, salariés) et externes (clients, fournisseurs, banques, État, syndicats, ordres professionnels et chambres consulaires).",
        formulas: [
          {
            name: 'Équation économique de base',
            formula: '\\text{Résultat} = \\text{Chiffre d’affaires (Ventes)} - \\text{Coûts totaux engagés}',
            note: 'La survie de l’entreprise exige à terme que les produits couvrent les charges et dégagent un excédent.',
          },
        ],
        keyRule:
          'Une entreprise vend une production marchande sur un marché dans un but lucratif et autonome, en articulant finalité économique, sociale et sociétale.',
        workedExample: {
          title: 'Cartographie des finalités et parties prenantes d’une fintech à Abidjan',
          statement:
            'Une jeune entreprise ivoirienne développe une application de paiement mobile pour les commerçants de Treichville. Identifiez sa nature économique, ses trois finalités et classez ses parties prenantes (fondateurs, développeurs salariés, commerçants clients, banque partenaire, ARTCI/État).',
          methodSteps: [
            '1) Nature économique : elle combine capital (serveurs, fonds propres) et travail (développeurs, commerciaux) pour vendre un service marchand de paiement.',
            '2) Finalités : économique (simplifier les encaissements des commerçants et générer des commissions), sociale (offrir des emplois qualifiés et une couverture CNPS), sociétale (favoriser l’inclusion financière tout en réduisant le papier).',
            '3) Parties prenantes : internes = fondateurs/actionnaires et développeurs salariés ; externes = commerçants clients, banque partenaire et pouvoirs publics/régulateur.',
          ],
          conclusion:
            'La pérennité de la fintech repose sur l’équilibre entre la satisfaction des commerçants, la motivation des équipes et le respect du cadre réglementaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Identité économique',
            stepTitle: 'Qu’est-ce qu’une entreprise au sens économique ?',
            paragraphText:
              'Dans toute économie moderne, la création de richesses repose sur des unités spécialisées capables de transformer des ressources rares en offres utiles. L’entreprise se distingue ainsi d’une administration publique ou d’une association caritative par trois traits décisifs.\n• **Autonomie de décision** : elle choisit librement ses produits, ses prix et ses investissements.\n• **Production marchande** : ses biens ou services sont destinés à être vendus sur un marché.\n• **Recherche de profit et de pérennité** : l’excédent dégagé finance sa survie et sa croissance.\nExemple : une boulangerie artisanale à Yopougon qui achète farine et énergie pour vendre du pain dégage un bénéfice pour renouveler ses fours.',
            keyRule:
              'Autonomie + combinaison des facteurs (travail et capital) + vente marchande à but lucratif définissent l’entreprise.',
            konanTip:
              'Ne confonds pas entreprise et administration : une mairie fournit des services non marchands financés par l’impôt, alors qu’une entreprise vend ses prestations sur un marché.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quel critère permet de distinguer fondamentalement une entreprise d’une administration publique ?',
              options: [
                'L’utilisation d’ordinateurs et de logiciels de gestion',
                'L’emploi de personnel salarié soumis à une hiérarchie',
                'La production de biens ou services marchands vendus sur un marché pour réaliser un profit',
                'L’existence d’un bâtiment administratif et d’un organigramme',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Administrations et entreprises emploient du personnel et utilisent des équipements, mais seule l’entreprise produit des biens ou services marchands destinés à être vendus sur un marché dans un but lucratif.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Finalités',
            stepTheme: 'Buts et objectifs',
            stepTitle: 'Articuler finalités économique, sociale et sociétale',
            paragraphText:
              'Réduire l’entreprise à la seule recherche de profit immédiat conduit souvent à des impasses stratégiques : clients mécontents ou salariés démotivés. Les dirigeants doivent piloter trois finalités interdépendantes sur le long terme.\n• **Finalité économique** : satisfaire les besoins des clients, gagner des parts de marché et dégager une rentabilité durable.\n• **Finalité sociale** : créer des emplois stables, verser des salaires justes et améliorer les conditions de travail.\n• **Finalité sociétale** : contribuer à l’intérêt général (écologie, éthique, formation locale).\nExemple : un opérateur télécom ivoirien investit dans la 4G rurale (économique), forme ses techniciens (sociale) et alimente ses pylônes au solaire (sociétale).',
            keyRule:
              'La rentabilité financière est le carburant de l’entreprise, mais la satisfaction client et la cohésion sociale garantissent sa survie durable.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Lorsqu’une entreprise industrielle finance des équipements moins polluants et soutient l’insertion professionnelle des jeunes de sa commune, quelle finalité illustre-t-elle prioritairement ?',
              options: [
                'La finalité purement spéculative',
                'La finalité sociétale',
                'La finalité comptable de court terme',
                'La finalité fiscale obligatoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Au-delà du profit (économique) et de la gestion de son personnel (sociale), l’engagement volontaire pour l’environnement et la communauté locale relève de la finalité sociétale.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Acteurs internes',
            stepTheme: 'Parties prenantes internes',
            stepTitle: 'Distinguer actionnaires, direction, cadres et salariés',
            paragraphText:
              'Au cœur de l’entreprise coexistent plusieurs groupes d’acteurs dont les intérêts convergent sur la pérennité mais peuvent diverger à court terme sur le partage des revenus.\n• **Actionnaires (associés)** : apportent le capital en numéraire ou en nature et attendent dividendes et valorisation.\n• **Direction générale** : fixe la stratégie, les politiques globales et arbitre les ressources.\n• **Cadres** : assurent l’encadrement intermédiaire, la réflexion technique et le pilotage des équipes.\n• **Salariés d’exécution** : réalisent les opérations quotidiennes de production, vente ou support.\nExemple : dans une PME de logistique au Plateau, le fondateur (actionnaire-dirigeant) s’appuie sur un chef d’exploitation (cadre) pour superviser 20 livreurs.',
            konanTip:
              'Attention au piège : dans les petites entreprises, le fondateur cumule souvent les casquettes d’actionnaire et de dirigeant, alors que les grandes sociétés séparent propriété et direction.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Dans la répartition des rôles internes, quelle est la mission spécifique des cadres par rapport aux salariés de base ?',
              options: [
                'Apporter uniquement des capitaux sans participer à la gestion',
                'Exécuter exclusivement des tâches manuelles répétitives',
                'Mobiliser la réflexion et l’expertise pour encadrer et diriger les équipes opérationnelles',
                'Contrôler la conformité fiscale au nom de l’État',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les cadres se situent entre la direction générale et les exécutants : ils traduisent les objectifs stratégiques en consignes opérationnelles et dirigent les équipes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Acteurs externes',
            stepTheme: 'Parties prenantes externes',
            stepTitle: 'Cartographier clients, fournisseurs, banques, État et syndicats',
            paragraphText:
              'Aucune entreprise n’opère en vase clos : sa survie dépend de la qualité des échanges noués avec ses partenaires externes (stakeholders).\n• **Clients et fournisseurs** : forment le circuit commercial amont (intrants) et aval (débouchés).\n• **Banquiers et investisseurs** : sécurisent les dépôts et financent la trésorerie ou les investissements.\n• **Pouvoirs publics** : fixent les lois, prélèvent impôts/cotisations et délivrent les agréments.\n• **Syndicats** : défendent les intérêts matériels et moraux des travailleurs face à la direction.\nExemple : une usine d’anacarde à Bouaké négocie ses prix d’achat avec les coopératives agricoles (fournisseurs) et son crédit de campagne avec sa banque.',
            keyRule:
              'Les parties prenantes externes (clients, fournisseurs, banques, État, syndicats) influencent directement les décisions et la marge de manœuvre de l’entreprise.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Parmi les couples suivants, lequel ne regroupe QUE des parties prenantes externes de l’entreprise ?',
              options: [
                'Les cadres et les clients',
                'Les fournisseurs et les banquiers',
                'Les actionnaires et les syndicats',
                'La direction générale et les pouvoirs publics',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Fournisseurs et banquiers sont externes à l’entreprise. Les cadres, les actionnaires et la direction générale sont des parties prenantes internes.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'Groupements professionnels',
            stepTitle: 'Différencier ordres professionnels et chambres consulaires',
            paragraphText:
              'Parmi les parties prenantes externes, les groupements professionnels jouent un rôle d’encadrement et de représentation souvent confondu lors des évaluations.\n• **Ordres professionnels** (médecins, avocats, experts-comptables, pharmaciens) : régulent l’accès à une profession réglementée et sanctionnent les manquements à la déontologie.\n• **Chambres consulaires** (Chambre de Commerce et d’Industrie, Chambre des Métiers) : élues par les chefs d’entreprise pour former, informer et accompagner les démarches administratives.\nExemple : un jeune expert-comptable ivoirien doit s’inscrire à l’Ordre des Experts-Comptables pour signer des audits, tandis qu’un commerçant sollicite la CCI-CI pour participer à un salon export.',
            keyRule:
              'Ordre professionnel = accès réglementé + discipline/déontologie ; Chambre consulaire (CCI) = formation, appui administratif et promotion économique.',
            konanTip:
              'Retiens le mot-clé : « Ordre » rime avec « déontologie et autorisation d’exercer », tandis que « Chambre (CCI) » rime avec « appui et formation des commerçants ».',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quel organisme veille prioritairement au respect des règles déontologiques et contrôle l’accès à certaines professions libérales ?',
              options: [
                'La Chambre de Commerce et d’Industrie (CCI)',
                'L’ordre professionnel (ex. : ordre des experts-comptables ou des médecins)',
                'Le syndicat des transporteurs',
                'La banque centrale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les ordres professionnels gèrent l’accès à la profession, garantissent le respect du code de déontologie et défendent la probité de leurs membres.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Synthèse',
            stepTheme: 'Arbitrage des parties prenantes',
            stepTitle: 'Résoudre les tensions entre parties prenantes',
            paragraphText:
              'Les attentes des parties prenantes sont parfois contradictoires : les actionnaires veulent des dividendes élevés, les salariés des hausses de salaires, les clients des prix bas et l’État des recettes fiscales.\n• **Identifier les priorités** : cartographier le pouvoir et l’intérêt de chaque groupe.\n• **Rechercher des compromis durables** : éviter qu’une exigence de court terme ne détruise la valeur à long terme.\n• **Communiquer avec transparence** : négocier via le dialogue social et la fidélisation client.\nExemple : plutôt que d’augmenter les prix de 15 % au risque de perdre ses clients, une PME optimise ses achats fournisseurs et partage une prime de productivité avec ses équipes.',
            formula: {
              name: 'Équilibre de création de valeur',
              formula: '\\text{Pérennité} = \\text{Satisfaction client} + \\text{Adhésion sociale} + \\text{Rentabilité}',
              note: 'Le dirigeant arbitre entre les parties prenantes pour préserver l’équilibre global.',
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi le dirigeant doit-il arbitrer entre les attentes des actionnaires, des salariés et des clients ?',
              options: [
                'Parce que privilégier exclusivement un seul acteur à court terme fragilise la pérennité de l’entreprise',
                'Parce que la loi interdit aux entreprises de réaliser des bénéfices',
                'Parce que les clients fixent directement les salaires des dirigeants',
                'Parce que les banques gèrent la production quotidienne de l’entreprise',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comprimer abusivement les salaires démotive le personnel, augmenter excessivement les prix fait fuir les clients, et supprimer toute rentabilité décourage les investisseurs. L’arbitrage équilibré assure la survie.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch1_p2',
        order: 2,
        title: 'Unité de production, création de richesse et répartition de la valeur ajoutée',
        summary:
          'Maîtriser les facteurs de production (travail, capital fixe, capital circulant, capital humain), le calcul de la Valeur Ajoutée et son partage entre les acteurs économiques.',
        conceptExplanation:
          "En tant qu’unité de production, l’entreprise transforme des intrants (inputs) en extrants (outputs : biens et services). Les intrants regroupent le travail (manuel ou intellectuel) et le capital (financier, technique fixe comme les machines, technique circulant ou consommations intermédiaires comme les matières premières et l’énergie, et capital humain).\n\nLa richesse réellement créée par l’entreprise est mesurée par la Valeur Ajoutée (VA = Production − Consommations intermédiaires). En tant qu’unité de répartition, l’entreprise distribue cette VA entre les salariés (salaires), l’État et les organismes sociaux (impôts, cotisations CNPS), les prêteurs (intérêts), les actionnaires (dividendes) et elle-même (autofinancement).",
        formulas: [
          {
            name: 'Valeur Ajoutée (VA)',
            formula: '\\text{VA} = \\text{Valeur de la production (Extrants)} - \\text{Consommations intermédiaires}',
            note: 'Les consommations intermédiaires correspondent aux biens et services détruits ou incorporés durant le cycle de production.',
          },
          {
            name: 'Taux de marge salariale',
            formula: '\\text{Part des salariés} = \\frac{\\text{Masse salariale}}{\\text{Valeur Ajoutée}} \\times 100',
            note: 'Permet de mesurer le poids de la rémunération du facteur travail dans la richesse créée.',
          },
        ],
        keyRule:
          'La Valeur Ajoutée mesure la richesse nette produite par l’entreprise, avant d’être partagée entre travail, État, créanciers, associés et autofinancement.',
        workedExample: {
          title: 'Calcul et répartition de la Valeur Ajoutée d’une unité de transformation de cacao',
          statement:
            'Une PME ivoirienne achète des fèves de cacao, emballages et électricité (consommations intermédiaires) pour 42 000 000 FCFA. Elle vend sa production de beurre et poudre de cacao pour 78 000 000 FCFA. Elle verse 16 000 000 FCFA de salaires, 5 000 000 FCFA d’impôts et cotisations, 2 000 000 FCFA d’intérêts bancaires et 4 000 000 FCFA de dividendes. Calculez la VA et l’autofinancement conservé.',
          methodSteps: [
            '1) Calcul de la VA : 78 000 000 − 42 000 000 = 36 000 000 FCFA.',
            '2) Somme déjà distribuée aux tiers : 16 000 000 (salariés) + 5 000 000 (État/CNPS) + 2 000 000 (banques) + 4 000 000 (actionnaires) = 27 000 000 FCFA.',
            '3) Part conservée par l’entreprise (autofinancement brut) : 36 000 000 − 27 000 000 = 9 000 000 FCFA.',
          ],
          conclusion:
            'L’entreprise a créé 36 000 000 FCFA de richesse nouvelle, dont 25 % restent investis en autofinancement pour ses futurs projets.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Intrants',
            stepTheme: 'Facteurs de production',
            stepTitle: 'Classer travail, capital fixe, circulant et humain',
            paragraphText:
              'Produire un bien ou un service exige de combiner intelligemment des intrants complémentaires qui ne créent aucune valeur s’ils restent isolés.\n• **Facteur travail** : effort manuel ou intellectuel apporté par les salariés.\n• **Capital technique fixe** : biens durables utilisés sur plusieurs cycles (machines, bâtiments, serveurs).\n• **Capital technique circulant** : consommations intermédiaires détruites ou transformées en un cycle (matières premières, carburant, électricité).\n• **Capital humain et financier** : savoir-faire des équipes et fonds disponibles.\nExemple : dans une imprimerie à Marcory, les presses constituent le capital fixe, tandis que le papier et l’encre forment le capital circulant.',
            keyRule:
              'Distingue bien capital fixe (durable, amortissable sur plusieurs années) et capital circulant (consommé en un seul cycle de production).',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Pour une société de transport urbain, comment classe-t-on le carburant consommé par les bus et les bus eux-mêmes ?',
              options: [
                'Tous deux sont du capital fixe durable',
                'Le carburant est du capital circulant (consommation intermédiaire) et les bus sont du capital fixe',
                'Les bus sont du capital circulant et le carburant est du capital humain',
                'Tous deux sont des extrants finis',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les bus servent durablement sur plusieurs années (capital fixe), alors que le carburant est détruit au cours du trajet (capital circulant / consommation intermédiaire).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Formule clé',
            stepTheme: 'Valeur Ajoutée',
            stepTitle: 'Calculer la Valeur Ajoutée créée par l’entreprise',
            paragraphText:
              'Le chiffre d’affaires seul surestime la richesse réellement créée par une entreprise car il inclut la valeur des biens achetés à d’autres entreprises. Pour mesurer la contribution propre de l’organisation à l’économie nationale (et au PIB), on calcule la Valeur Ajoutée.\n• **Principe** : on retranche de la production vendue ou stockée l’ensemble des consommations intermédiaires achetées à des tiers.\n• **Portée économique** : plus l’entreprise transforme et apporte du savoir-faire, plus son taux de valeur ajoutée est élevé.\nExemple : une agence web qui facture 12 000 000 FCFA un portail e-commerce en achetant 1 500 000 FCFA d’hébergement et licences crée 10 500 000 FCFA de VA.',
            formula: {
              name: 'Valeur Ajoutée (VA)',
              formula: '\\text{VA} = \\text{Production (Extrants)} - \\text{Consommations intermédiaires}',
              note: 'Ne jamais retrancher les salaires ni les achats de machines durables (immobilisations) pour calculer la VA.',
            },
            konanTip:
              'Piège fréquent d’examen : les salaires et les machines neuves ne sont PAS des consommations intermédiaires ! Seuls les biens et services consommés immédiatement (matières, énergie, sous-traitance, transport) sont déduits.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Une entreprise textile réalise une production de 65 000 000 FCFA. Elle achète du tissu, des colorants et de l’électricité pour 28 000 000 FCFA, verse 15 000 000 FCFA de salaires et achète une machine durable de 10 000 000 FCFA. Quelle est sa Valeur Ajoutée ?',
              options: [
                '22 000 000 FCFA',
                '12 000 000 FCFA',
                '37 000 000 FCFA',
                '50 000 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'VA = Production (65 000 000) − Consommations intermédiaires (28 000 000) = 37 000 000 FCFA. Les salaires sont une répartition de la VA et la machine est un investissement (capital fixe), non une consommation intermédiaire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Répartition',
            stepTheme: 'Partage de la richesse',
            stepTitle: 'Associer chaque bénéficiaire de la Valeur Ajoutée à son revenu',
            paragraphText:
              'Une fois la richesse créée, l’entreprise agit comme une véritable plaque tournante financière en redistribuant la Valeur Ajoutée à tous les acteurs ayant contribué à son activité.\n• **Salariés** : perçoivent les salaires et primes.\n• **État et organismes sociaux (CNPS)** : perçoivent impôts, taxes et cotisations sociales.\n• **Prêteurs (banques)** : reçoivent des intérêts.\n• **Actionnaires / associés** : reçoivent des dividendes.\n• **Entreprise elle-même** : conserve l’autofinancement (dotations aux amortissements et bénéfices non distribués).\nExemple : sur 100 F de VA, une entreprise industrielle peut verser 45 F aux salariés, 18 F à l’État/CNPS, 7 F aux banques, 10 F aux actionnaires et garder 20 F pour investir.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Répartition de la Valeur Ajoutée entre parties prenantes',
              caption: 'Chaque acteur ayant contribué à la production reçoit une part spécifique de la richesse créée.',
              tableData: {
                headers: ['Acteur / Bénéficiaire', 'Nature de la contribution', 'Revenu perçu sur la VA'],
                rows: [
                  ['Salariés', 'Facteur travail (manuel ou intellectuel)', 'Salaires et primes'],
                  ['État & organismes sociaux', 'Infrastructures, sécurité, protection sociale', 'Impôts, taxes & cotisations (CNPS)'],
                  ['Prêteurs (Banques)', 'Apport de capitaux empruntés', 'Intérêts financiers'],
                  ['Actionnaires / Associés', 'Apport de capital social (risque)', 'Dividendes'],
                  ['Entreprise elle-même', 'Maintien et renouvellement productif', 'Autofinancement (Amortissements + Réserves)'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle part de la Valeur Ajoutée revient spécifiquement aux actionnaires qui ont pris le risque d’apporter le capital social ?',
              options: [
                'Les intérêts',
                'Les cotisations sociales',
                'Les dividendes',
                'Les consommations intermédiaires',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les prêteurs (banques) perçoivent des intérêts fixes, tandis que les actionnaires (propriétaires) reçoivent des dividendes prélevés sur le bénéfice net distribuable.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Autofinancement',
            stepTheme: 'Surplus interne',
            stepTitle: 'Comprendre le rôle du cash-flow et de l’autofinancement',
            paragraphText:
              'Tout le surplus de Valeur Ajoutée n’est pas distribué à l’extérieur : l’entreprise doit conserver une réserve vitale pour renouveler ses équipements usés et financer sa croissance future sans dépendre uniquement des banques.\n• **Amortissements** : constatent l’usure du capital fixe et permettent de reconstituer les fonds de remplacement.\n• **Réserves (bénéfices non distribués)** : renforcent les fonds propres.\n• **Capacité d’autofinancement (CAF / cash-flow)** : flux de trésorerie potentiel dégagé par l’activité.\nExemple : une entreprise de BTP qui garde 30 % de son résultat en réserves peut acheter un nouveau camion sans emprunter.',
            formula: {
              name: 'Autofinancement',
              formula: '\\text{Autofinancement} = \\text{CAF (Cash-flow)} - \\text{Dividendes versés}',
              note: 'L’autofinancement préserve l’indépendance financière de l’entreprise.',
            },
            keyRule:
              'L’autofinancement constitue la part de richesse conservée par l’entreprise après rémunération de tous les partenaires externes et internes.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Une entreprise dégage une Capacité d’Autofinancement (CAF) de 24 000 000 FCFA et décide de distribuer 6 000 000 FCFA de dividendes à ses associés. Quel est son autofinancement ?',
              options: [
                '30 000 000 FCFA',
                '18 000 000 FCFA',
                '6 000 000 FCFA',
                '4 000 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Autofinancement = CAF − Dividendes distribués = 24 000 000 − 6 000 000 = 18 000 000 FCFA conservés dans l’entreprise.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Vigilance',
            stepTheme: 'Coût de revient vs Prix de vente',
            stepTitle: 'Éviter la confusion entre chiffre d’affaires, VA et profit',
            paragraphText:
              'Beaucoup de jeunes entrepreneurs confondent encaissement commercial et richesse réelle, ce qui provoque des crises de trésorerie dès les premiers mois d’activité.\n• **Chiffre d’affaires (CA)** : montant total des ventes hors taxes facturées aux clients.\n• **Valeur Ajoutée (VA)** : CA moins les consommations intermédiaires.\n• **Bénéfice (Profit)** : ce qui reste après paiement de toutes les charges (y compris salaires, loyers, intérêts et impôts).\nExemple : un revendeur informatique qui réalise 100 M FCFA de CA avec 92 M FCFA d’achats de matériels et 9 M FCFA de charges salariales et loyers affiche un gros CA mais subit en réalité une perte de 1 M FCFA !',
            konanTip:
              'Un chiffre d’affaires élevé ne garantit jamais la rentabilité : vérifie toujours la marge dégagée après déduction des achats et des frais fixes.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Parmi les situations suivantes, laquelle traduit le mieux une entreprise qui vend beaucoup mais perd de l’argent ?',
              options: [
                'Chiffre d’affaires de 80 M FCFA, consommations intermédiaires de 30 M FCFA et charges totales de 55 M FCFA',
                'Chiffre d’affaires de 120 M FCFA, consommations intermédiaires de 95 M FCFA et salaires + frais fixes de 32 M FCFA',
                'Valeur Ajoutée de 40 M FCFA et charges de personnel de 15 M FCFA',
                'Production vendue de 50 M FCFA et coût total de 38 M FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans le second cas, le total des charges vaut 95 + 32 = 127 M FCFA pour 120 M FCFA de ventes, soit une perte nette de 7 M FCFA malgré un CA important.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Diagnostic de productivité',
            stepTitle: 'Comparer la création de valeur de deux modèles économiques',
            paragraphText:
              'L’analyse par la Valeur Ajoutée permet de comparer efficacement des entreprises de métiers différents au sein d’une même filière économique.\n• **Modèle de négoce pur** : forte rotation des ventes mais faible taux de VA (souvent 10 à 20 %).\n• **Modèle industriel ou logiciel** : forte transformation ou innovation générant un taux de VA élevé (50 à 85 %).\nExemple : un éditeur de logiciel SaaS à Abidjan réalisant 50 M FCFA de CA avec seulement 8 M FCFA d’achats cloud crée 42 M FCFA de VA (84 %), soit plus de richesse nette qu’un grossiste à 150 M FCFA de CA ayant 125 M FCFA d’achats marchandises (25 M FCFA de VA).',
            formula: {
              name: 'Taux de Valeur Ajoutée',
              formula: '\\text{Taux de VA} = \\frac{\\text{VA}}{\\text{Production (ou CA HT)}} \\times 100',
              note: 'Mesure le degré d’intégration et de transformation interne de l’entreprise.',
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Une startup SaaS facture 60 000 000 FCFA d’abonnements et consomme 9 000 000 FCFA de services cloud et d’électricité. Quel est son taux de valeur ajoutée ?',
              options: [
                '15 %',
                '60 %',
                '85 %',
                '91 %',
              ],
              correctAnswerIndex: 2,
              explanation:
                'VA = 60 000 000 − 9 000 000 = 51 000 000 FCFA. Taux de VA = (51 / 60) × 100 = 85 %.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch1_p3',
        order: 3,
        title: 'Approche systémique, culture d’entreprise et cycle d’exploitation',
        summary:
          'Analyser l’entreprise comme système ouvert, finalisé, structuré et régulé, comprendre sa culture/identité/projet et maîtriser les phases du cycle d’exploitation.',
        conceptExplanation:
          "L’approche systémique envisage l’entreprise comme un ensemble d’éléments en interaction dynamique : un système ouvert (échangeant ressources et informations avec son environnement), finalisé (orienté vers des buts : pérennité, croissance, rentabilité), structuré/organisé (relié par des flux d’ordres, d’informations et de capitaux autour d’un centre de commande) et régulé (capable de corriger ses écarts par rétroaction).\n\nElle est aussi un centre de décision, une cellule sociale et une communauté culturelle dotée d’une culture (héros, mythes, valeurs, symboles, tabous), d’une identité (logo, locaux, produits) et d’un projet d’entreprise. Sur le plan opérationnel, son activité quotidienne suit un cycle d’exploitation continu : approvisionnement, stockage, production/prestation, vente et encaissement.",
        formulas: [
          {
            name: 'Durée du cycle d’exploitation',
            formula: '\\text{Cycle d’exploitation} = \\text{Durée stockage} + \\text{Durée production} + \\text{Délai crédit clients}',
            note: 'Plus ce cycle est court, moins l’entreprise immobilise de trésorerie dans son Besoin en Fonds de Roulement (BFR).',
          },
        ],
        keyRule:
          'En approche systémique, l’entreprise est un système ouvert, finalisé, structuré et régulé qui pilote un cycle d’exploitation continu.',
        workedExample: {
          title: 'Lecture systémique et culturelle d’un acteur du e-commerce en Côte d’Ivoire',
          statement:
            'Une plateforme ivoirienne de livraison de repas connecte restaurants, livreurs à moto et clients via smartphone. Montrez qu’elle forme un système ouvert et régulé, identifiez deux éléments de sa culture d’entreprise et décrivez son cycle d’exploitation.',
          methodSteps: [
            '1) Système ouvert et régulé : elle capte des données de trafic, des commandes clients et des paiements Mobile Money (environnement), et ajuste automatiquement ses tarifs ou zones en cas de pluie ou de saturation (régulation par rétroaction).',
            '2) Culture d’entreprise : valeurs de ponctualité et de service, symboles visibles (vestes et casques aux couleurs de la marque), héros (premiers livreurs devenus superviseurs).',
            '3) Cycle d’exploitation : réception de la commande digitale → préparation chez le partenaire → enlèvement et livraison → encaissement et reversement au restaurateur.',
          ],
          conclusion:
            'La performance naît de la synchronisation entre le système technologique ouvert, la culture partagée et la rapidité du cycle d’exploitation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Systémique',
            stepTheme: 'Système ouvert et finalisé',
            stepTitle: 'Pourquoi l’entreprise est-elle un système ouvert et finalisé ?',
            paragraphText:
              'Inspirée de la biologie et de la cybernétique, l’analyse systémique dépasse la simple addition des services pour étudier leurs interactions permanentes avec le milieu extérieur.\n• **Système ouvert** : l’entreprise puise ressources, capitaux et informations dans son environnement et y déverse biens, services, revenus et innovations.\n• **Système finalisé** : elle poursuit des buts précis (pérennité, parts de marché, rentabilité, autonomie) qui orientent chaque décision.\nExemple : lorsque la demande de paiements sans contact explose à Abidjan, une banque adapte ses terminaux (ouverture) pour préserver sa part de marché (finalité).',
            keyRule:
              'Système ouvert = échanges constants avec l’environnement ; Système finalisé = orientation vers des objectifs stratégiques explicites.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Que signifie l’affirmation selon laquelle l’entreprise est un « système ouvert » ?',
              options: [
                'Ses portes restent ouvertes 24h/24 au public sans contrôle',
                'Elle est en interaction continue avec son environnement, dont elle reçoit des ressources/contraintes et sur lequel elle agit',
                'Elle n’a aucune règle de hiérarchie ni de confidentialité',
                'Elle distribue gratuitement sa production sans facturation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un système ouvert échange en permanence des flux physiques, financiers et informationnels avec son environnement externe, s’y adapte et l’influence.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Régulation',
            stepTheme: 'Système structuré et régulé',
            stepTitle: 'Comprendre la structure et la boucle de régulation',
            paragraphText:
              'Un système ouvert sans pilotage ni correction d’erreurs se désagrège rapidement face aux aléas du marché. L’entreprise doit donc être à la fois structurée et régulée.\n• **Système structuré (organisé)** : des sous-systèmes spécialisés (production, finance, commercial, RH) sont reliés par des flux d’ordres, d’informations et de capitaux autour d’un centre de commande.\n• **Système régulé** : grâce aux boucles de rétroaction (feedback), les écarts entre prévisions et réalisations déclenchent des actions correctives.\nExemple : si le stock d’un produit phare tombe sous le seuil d’alerte, le logiciel déclenche automatiquement une commande fournisseur.',
            konanTip:
              'Dans une copie d’examen, cite toujours les 4 adjectifs du système entreprise : ouvert, finalisé, organisé (structuré) et régulé.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Lorsqu’une direction commerciale constate une baisse des ventes de 12 % au trimestre et lance aussitôt une offre promotionnelle ciblée pour corriger l’écart, quel caractère du système illustre-t-elle ?',
              options: [
                'Le caractère fermé et statique',
                'La régulation par boucle de rétroaction',
                'La dissolution juridique',
                'L’absence de centre de commande',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Détecter un écart par rapport à l’objectif et ajuster l’action pour rétablir l’équilibre définit exactement la régulation d’un système.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Cycle d’exploitation',
            stepTheme: 'Opérations courantes',
            stepTitle: 'Visualiser le cycle d’exploitation et le circuit systémique',
            paragraphText:
              'L’activité courante de l’entreprise se répète en boucle continue : c’est le cycle d’exploitation, véritable moteur de trésorerie au quotidien.\n• **Phase 1 — Approvisionnement** : achat des matières premières ou marchandises auprès des fournisseurs.\n• **Phase 2 — Production / Stockage** : transformation technique ou mise en rayon.\n• **Phase 3 — Commercialisation** : vente et livraison aux clients.\n• **Phase 4 — Encaissement & Réinjection** : recouvrement des créances et financement du cycle suivant.\nExemple : une usine de jus d’ananas achète les fruits, les presse et les embouteille, les vend aux supermarchés puis encaisse à 30 jours pour racheter de nouvelles récoltes.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Approche systémique & Cycle d’exploitation de l’entreprise',
              caption: 'L’entreprise capte des intrants de l’environnement, les transforme, vend des extrants et réinjecte le flux encaissé par régulation.',
              cycle: {
                centerLabel: 'Entreprise',
                centerSublabel: 'Système ouvert & régulé',
                nodes: [
                  {
                    title: '1. Approvisionnement',
                    subtitle: 'Intrants : matières, énergie, données',
                    color: 'blue',
                  },
                  {
                    title: '2. Production',
                    subtitle: 'Combinaison Capital + Travail → VA',
                    color: 'violet',
                  },
                  {
                    title: '3. Commercialisation',
                    subtitle: 'Extrants vendus sur le marché',
                    color: 'green',
                  },
                  {
                    title: '4. Encaissement & Régulation',
                    subtitle: 'Cash-flow, feedback & réinvestissement',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Dans quel ordre logique se succèdent les phases fondamentales du cycle d’exploitation d’une entreprise industrielle ?',
              options: [
                'Vente → Encaissement → Approvisionnement → Destruction des stocks',
                'Approvisionnement → Stockage/Production → Commercialisation → Encaissement',
                'Encaissement → Répartition des dividendes → Achat de machines → Production',
                'Recrutement → Dissolution → Approvisionnement → Audit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le cycle d’exploitation suit l’enchaînement : achats d’intrants (approvisionnement), transformation (production/stockage), vente aux clients (commercialisation) et règlement (encaissement).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Cellule sociale',
            stepTheme: 'Besoins des membres',
            stepTitle: 'Remplir la double fonction économique et sociale envers le personnel',
            paragraphText:
              'L’entreprise est également une communauté humaine : négliger la dimension sociale engendre absentéisme, conflits et rotation élevée du personnel.\n• **Fonction économique** : fournir un revenu régulier permettant au salarié de subvenir à ses besoins.\n• **Fonction sociale** : offrir un statut stable, un sentiment d’utilité, des relations de travail saines et des prestations (transport, mutuelle santé, assistance familiale).\nExemple : à Abidjan, les grandes entreprises proposent souvent des bus de ramassage et une assurance maladie complémentaire pour fidéliser leurs talents.',
            keyRule:
              'En tant que cellule sociale, l’entreprise assure à la fois un revenu (fonction économique) et l’épanouissement/protection (fonction sociale).',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'La mise en place d’une couverture médicale complémentaire et d’un car de transport pour le personnel relève de quelle fonction de l’entreprise ?',
              options: [
                'La fonction purement spéculative',
                'La fonction de cellule sociale (prestations sociales et climat de travail)',
                'La fonction d’exportation douanière',
                'La fonction d’endettement bancaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En tant que cellule sociale, l’entreprise répond aux besoins matériels et moraux de ses membres via l’emploi stable, les conditions de travail et les prestations sociales.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Culture',
            stepTheme: 'Mémoire collective',
            stepTitle: 'Identifier les cinq piliers de la culture d’entreprise',
            paragraphText:
              'La culture d’entreprise désigne l’ensemble des valeurs, croyances et pratiques professionnelles partagées par les membres de l’organisation. Elle s’appuie sur cinq repères collectifs :\n• **Héros** : figures fondatrices ou pionniers servant de modèles.\n• **Mythes** : récits et anecdotes marquantes (le premier grand contrat gagné dans un garage).\n• **Valeurs** : principes moraux et professionnels guidant les conduites (intégrité, excellence).\n• **Symboles et rites** : logo, code vestimentaire, réunions rituelles.\n• **Interdits et tabous** : comportements proscrits nuisant à l’image interne ou externe.\nExemple : une startup tech célèbre chaque vendredi les « démos produits » (rite) et honore son premier ingénieur (héros).',
            konanTip:
              'Mémorise les 5 piliers avec l’acronyme « H-M-V-S-I » : Héros, Mythes, Valeurs, Symboles, Interdits.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Lorsqu’une entreprise raconte régulièrement aux nouveaux arrivants l’histoire héroïque de son premier client décroché malgré un budget quasi nul, de quel élément de culture s’agit-il ?',
              options: [
                'D’un interdit comptable',
                'D’un mythe fondateur',
                'D’une consommation intermédiaire',
                'D’un capital fixe',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les anecdotes et récits marquants qui circulent durablement pour transmettre l’esprit de l’organisation constituent les mythes de la culture d’entreprise.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Ambivalence',
            stepTheme: 'Performance vs Inertie',
            stepTitle: 'Comprendre le double effet de la culture d’entreprise',
            paragraphText:
              'On a souvent tendance à présenter la culture d’entreprise uniquement comme un atout, mais elle peut aussi devenir un frein majeur lors des transitions.\n• **Facteur de performance** : renforce la cohésion, la solidarité, la motivation commune et accélère l’intégration des nouveaux.\n• **Facteur de résistance au changement** : une culture trop rigide (« on a toujours fait ainsi ») bloque l’adoption du numérique, l’innovation ou une fusion avec une autre société.\nExemple : une banque traditionnelle très hiérarchique peut rencontrer de fortes résistances internes au moment de lancer un service 100 % mobile agile.',
            keyRule:
              'La culture d’entreprise est ambivalente : ciment de cohésion et de performance en période stable, mais source potentielle d’inertie face aux innovations.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Dans quelle situation la culture d’entreprise devient-elle un handicap pour l’organisation ?',
              options: [
                'Lorsqu’elle favorise la solidarité entre services',
                'Lorsqu’elle facilite l’accueil des nouveaux recrutés',
                'Lorsqu’elle crée une inertie et un rejet face à une transformation numérique ou organisationnelle nécessaire',
                'Lorsqu’elle renforce la fierté d’appartenance des équipes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une culture figée sur des habitudes anciennes génère une résistance au changement qui freine l’adaptation stratégique de l’entreprise.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'methode',
            stepBadge: 'Identité & Projet',
            stepTheme: 'Projet d’entreprise',
            stepTitle: 'Construire l’identité et le projet d’entreprise',
            paragraphText:
              'Dans le prolongement de sa culture, l’entreprise affirme son identité (logo, charte graphique, locaux, équipements, dirigeants, produits) pour exprimer son prestige, communiquer et se différencier des concurrents.\n• **Projet d’entreprise** : document fédérateur exposant les ambitions économiques et sociales futures et les moyens pour y parvenir.\n• **Trois volets** : la Mission (rôle voulu), les Valeurs (principes d’action) et les Plans d’actions (engagements concrets).\n• **Intérêt et limite** : il aligne les comportements et facilite les fusions, mais échoue s’il paraît irréaliste ou n’obtient pas l’adhésion du personnel.',
            formula: {
              name: 'Trilogie du Projet d’entreprise',
              formula: '\\text{Projet d’entreprise} = \\text{Mission} + \\text{Valeurs partagées} + \\text{Plans d’action}',
              note: 'Un projet crédible doit être compris et adopté par l’ensemble des salariés.',
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch1_p3_q7',
              type: 'mcq',
              prompt:
                'Quels sont les trois volets constitutifs d’un projet d’entreprise ?',
              options: [
                'Le bilan, le compte de résultat et l’annexe fiscale',
                'La mission de l’entreprise, ses valeurs et ses plans d’actions',
                'Le logo, la couleur des locaux et la taille du parking',
                'Les statuts juridiques, le découvert bancaire et les congés payés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le projet d’entreprise articule la mission (cap stratégique), les valeurs (repères comportementaux) et les plans d’actions concrets qui traduisent ces ambitions.',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 2 : CLASSIFICATION DES ENTREPRISES, FORMES JURIDIQUES ET ENVIRONNEMENT
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch2',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Classification des entreprises, formes juridiques et environnement',
    summary:
      'Classer les entreprises selon leur taille en Côte d’Ivoire (critères effectif CNPS et chiffre d’affaires), leur secteur économique, leur statut juridique OHADA ou public, et analyser leur environnement (PESTEL, micro-environnement, stratégies).',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Organisation et Gestion des Entreprises',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch2_p1',
        order: 1,
        title: 'Critères dimensionnels (Côte d’Ivoire / CNPS) et classification sectorielle',
        summary:
          'Distinguer Micro, Petite, Moyenne et Grande Entreprise selon les seuils ivoiriens (effectif déclaré à la CNPS et chiffre d’affaires) et classer par secteur et objet d’activité.',
        conceptExplanation:
          "Pour comparer les tissus productifs, on classe d’abord les entreprises selon des critères économiques : la taille (dimension), l’objet de l’activité et le secteur économique (Colin Clark).\n\nEn Côte d’Ivoire, la classification des PME repose sur deux critères cumulatifs : le nombre de salariés permanents à temps plein bénéficiant d’un contrat de travail et déclarés à la CNPS (Caisse Nationale de Prévoyance Sociale), et le chiffre d’affaires annuel hors taxes (Micro-entreprise : 0–9 salariés et CA ≤ 30 M FCFA ; Petite Entreprise : 10–49 salariés et 30 M < CA ≤ 150 M FCFA ; Moyenne Entreprise : 50–200 salariés et 150 M < CA ≤ 1 Md FCFA ; au-delà : Grande Entreprise).\n\nSelon les secteurs économiques, on distingue : le secteur primaire (extraction, agriculture, pêche, sylviculture), le secteur secondaire (industrie, transformation, BTP), le secteur tertiaire (commerce, services, transport, banque) et le secteur quaternaire (économie numérique, recherche, conseil haute technologie).",
        formulas: [
          {
            name: 'Règle de rattachement PME (Côte d’Ivoire)',
            formula: '\\text{Catégorie PME} = \\min / \\text{combinaison}(\\text{Effectif déclaré CNPS},\\ \\text{CA annuel HT})',
            note: 'Les travailleurs journaliers informels ou non déclarés à la CNPS ne sont pas comptabilisés dans l’effectif permanent.',
          },
        ],
        keyRule:
          'En Côte d’Ivoire, l’effectif PME ne retient que les salariés engagés à temps plein sous contrat et déclarés à la CNPS ; les seuils de CA séparent 30 M, 150 M et 1 milliard FCFA.',
        workedExample: {
          title: 'Classement dimensionnel et sectoriel d’une agro-industrie digitale',
          statement:
            'Une entreprise basée à Yamoussoukro emploie 32 salariés sous contrat déclarés à la CNPS et 15 journaliers occasionnels. Son chiffre d’affaires annuel s’élève à 120 000 000 FCFA. Elle collecte du manioc pour le transformer industriellement en attiéké déshydraté vendu via une application mobile. Classez-la selon sa taille et son secteur.',
          methodSteps: [
            '1) Effectif retenu : seuls les 32 salariés permanents déclarés à la CNPS comptent (les 15 occasionnels sont exclus) → tranche 10 à 49 salariés.',
            '2) Chiffre d’affaires : 120 000 000 FCFA → tranche 30 M < CA ≤ 150 M FCFA.',
            '3) Conclusion dimensionnelle : c’est une Petite Entreprise (PE).',
            '4) Secteur économique : son cœur de métier étant la transformation industrielle du manioc, elle relève du secteur secondaire (avec une composante commerciale tertiaire).',
          ],
          conclusion:
            'Cette société est une Petite Entreprise (PE) du secteur secondaire agro-alimentaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Seuils ivoiriens',
            stepTheme: 'Micro, PE, ME et GE',
            stepTitle: 'Maîtriser les seuils de taille des entreprises en Côte d’Ivoire',
            paragraphText:
              'La politique publique d’appui aux entreprises et d’accès aux marchés publics repose sur une grille précise distinguant quatre catégories selon l’effectif salarié et le chiffre d’affaires annuel.\n• **Micro-entreprise** : 0 à 9 salariés et CA ≤ 30 millions FCFA.\n• **Petite Entreprise (PE)** : 10 à 49 salariés et 30 M < CA ≤ 150 millions FCFA.\n• **Moyenne Entreprise (ME)** : 50 à 200 salariés et 150 M < CA ≤ 1 milliard FCFA.\n• **Grande Entreprise (GE)** : plus de 200 salariés ou CA > 1 milliard FCFA.\nExemple : une agence de cybersécurité à Abidjan comptant 65 ingénieurs CNPS et 480 M FCFA de CA est classée Moyenne Entreprise.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Classification des entreprises par taille en Côte d’Ivoire',
              caption: 'Seuils officiels combinant effectif salarié permanent déclaré à la CNPS et chiffre d’affaires annuel HT.',
              tableData: {
                headers: ['Catégorie', 'Effectif (temps plein CNPS)', 'Chiffre d’affaires annuel (FCFA)'],
                rows: [
                  ['Micro-entreprise', '0 à 9 salariés', 'CA ≤ 30 Millions'],
                  ['Petite Entreprise (PE)', '10 à 49 salariés', '30 Millions < CA ≤ 150 Millions'],
                  ['Moyenne Entreprise (ME)', '50 à 200 salariés', '150 Millions < CA ≤ 1 Milliard'],
                  ['Grande Entreprise (GE)', 'Plus de 200 salariés', 'CA > 1 Milliard'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Comment classe-t-on une entreprise ivoirienne employant 85 salariés permanents déclarés à la CNPS et réalisant un chiffre d’affaires annuel de 620 millions FCFA ?',
              options: [
                'Une micro-entreprise',
                'Une petite entreprise',
                'Une moyenne entreprise',
                'Une grande entreprise',
              ],
              correctAnswerIndex: 2,
              explanation:
                '85 salariés se situe entre 50 et 200 salariés, et 620 M FCFA se situe entre 150 M et 1 milliard FCFA : il s’agit donc d’une moyenne entreprise (ME).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Règle CNPS',
            stepTheme: 'Décompte des effectifs',
            stepTitle: 'Quels travailleurs comptent dans l’effectif légal PME ?',
            paragraphText:
              'Lors d’un audit de qualification PME, le simple décompte physique de toutes les personnes présentes sur un site conduit souvent à une erreur de catégorie.\n• **Trois conditions cumulatives** : le travailleur doit être engagé à temps plein, disposer d’un contrat de travail écrit/valide et être déclaré à la CNPS.\n• **Exclusions** : les stagiaires non salariés, les prestataires externes indépendants et les travailleurs informels non déclarés n’entrent pas dans l’effectif légal PME.\nExemple : un atelier employant 12 personnes dont 5 stagiaires et 7 salariés déclarés CNPS (CA de 25 M FCFA) reste juridiquement une micro-entreprise.',
            keyRule:
              'Effectif PME = salariés à temps plein + contrat de travail + déclaration effective à la CNPS.',
            konanTip:
              'En étude de cas, soustrais toujours les journaliers occasionnels non déclarés et les prestataires externes avant de comparer l’effectif aux seuils 10, 50 et 200 !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Pour qu’un salarié soit pris en compte dans l’effectif d’une PME en Côte d’Ivoire, quelles conditions doivent être réunies ?',
              options: [
                'Travailler au moins deux jours par mois à titre bénévole',
                'Être engagé à temps plein, titulaire d’un contrat de travail et déclaré à la CNPS',
                'Détenir au minimum 10 % du capital social de l’entreprise',
                'Être exclusivement de nationalité étrangère avec un visa d’affaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La réglementation PME exige des salariés engagés à temps plein, liés par un contrat de travail et régulièrement déclarés à la Caisse Nationale de Prévoyance Sociale (CNPS).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Indicateurs',
            stepTheme: 'Critères dimensionnels',
            stepTitle: 'Comparer effectif, chiffre d’affaires, valeur ajoutée et capitaux',
            paragraphText:
              'La taille d’une entreprise ne se résume pas au nombre d’employés : selon l’objectif de l’analyse (social, commercial ou financier), plusieurs indicateurs se complètent.\n• **Effectif salarié** : mesure le poids social et la complexité humaine à manager.\n• **Chiffre d’affaires** : reflète la puissance commerciale et les parts de marché.\n• **Valeur Ajoutée** : évalue la richesse réelle produite (préférable au CA pour comparer deux secteurs).\n• **Capitaux propres** : traduisent l’assise financière et la solvabilité.\nExemple : une plateforme cloud automatisée avec seulement 15 ingénieurs peut générer 2 milliards FCFA de CA : petite par l’effectif, mais grande par la dimension économique.',
            keyRule:
              'L’effectif est le critère le plus courant, mais la Valeur Ajoutée et le CA corrigent les biais liés à l’automatisation ou au négoce.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Pourquoi le seul critère du chiffre d’affaires peut-il être trompeur pour comparer la taille réelle d’un grossiste et d’un éditeur de logiciels ?',
              options: [
                'Parce que les éditeurs de logiciels ne paient jamais d’impôts',
                'Parce que le grossiste a un CA gonflé par la revente de marchandises alors que sa Valeur Ajoutée peut être plus faible que celle du logiciel',
                'Parce que le chiffre d’affaires ne s’exprime jamais en monnaie',
                'Parce que seul le nombre de bureaux loués mesure la taille économique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le négoce génère un CA élevé avec une faible marge de transformation, tandis que le logiciel crée une très forte Valeur Ajoutée avec moins d’achats intermédiaires.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Secteurs',
            stepTheme: 'Classification de Colin Clark',
            stepTitle: 'Distinguer secteurs primaire, secondaire, tertiaire et quaternaire',
            paragraphText:
              'L’économiste Colin Clark a proposé une classification célèbre selon la nature de l’activité principale, complétée aujourd’hui par l’économie du savoir.\n• **Secteur primaire** : exploitation directe des ressources naturelles (agriculture, élevage, pêche, forêt, extraction minière).\n• **Secteur secondaire** : transformation des matières premières en produits manufacturés (industrie, agro-industrie, BTP, énergie).\n• **Secteur tertiaire** : prestations de services marchands et commerce (banques, transport, hôtellerie, distribution).\n• **Secteur quaternaire** (extension moderne) : technologies de l’information, R&D, IA et conseil.\nExemple : la culture du cacao est primaire ; sa transformation en chocolat est secondaire ; son transport et sa vente en boutique sont tertiaires.',
            konanTip:
              'Raisonnement simple : « Extraire/Cultiver » = Primaire ; « Transformer/Construire » = Secondaire ; « Vendre/Servir » = Tertiaire ; « Innover/Digitaliser » = Quaternaire.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'À quel secteur économique appartient principalement une entreprise spécialisée dans le raffinage du pétrole brut et la fabrication de plastiques ?',
              options: [
                'Le secteur primaire',
                'Le secteur secondaire',
                'Le secteur tertiaire traditionnel',
                'Le secteur associatif non marchand',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’extraction du pétrole brut relève du secteur primaire, mais son raffinage et sa transformation industrielle en plastiques relèvent du secteur secondaire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Objet d’activité',
            stepTheme: 'Typologie par métier',
            stepTitle: 'Classer selon l’objet économique (agricole, industrielle, commerciale, service)',
            paragraphText:
              'Au-delà des grands secteurs macroéconomiques, la gestion distingue précisément les entreprises selon leur objet opérationnel, car leurs contraintes financières et logistiques diffèrent.\n• **Entreprises agricoles** : soumises aux aléas climatiques et aux cycles biologiques.\n• **Entreprises industrielles** : gèrent des stocks de matières, des chaînes de production et d’importants investissements en machines.\n• **Entreprises commerciales (négoce)** : achètent pour revendre en l’état sans transformation (grossistes, détaillants).\n• **Entreprises de services et financières** : produisent des prestations immatérielles non stockables (télécoms, banques, assurances, ESN).\nExemple : un supermarché est une entreprise commerciale ; une ESN qui développe des ERP est une entreprise de services numériques.',
            keyRule:
              'Contrairement au négoce (achat-revente en l’état), l’entreprise industrielle transforme physiquement des matières, et le service produit de l’immatériel.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle caractéristique distingue une entreprise purement commerciale d’une entreprise industrielle ?',
              options: [
                'L’entreprise commerciale achète des marchandises pour les revendre en l’état sans transformation physique majeure',
                'L’entreprise commerciale n’a pas besoin de clients ni de fournisseurs',
                'L’entreprise industrielle ne vend jamais ses produits finis',
                'L’entreprise commerciale ne paie pas de loyers ni de salaires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’entreprise commerciale assure une fonction de distribution (achat puis revente en l’état), tandis que l’entreprise industrielle transforme des matières premières en produits finis.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'Filières et branches',
            stepTitle: 'Distinguer secteur d’activité, branche et filière',
            paragraphText:
              'En comptabilité nationale et en stratégie, trois termes proches ne doivent pas être confondus lorsqu’on étudie une entreprise diversifiée.\n• **Secteur** : regroupe les entreprises ayant la même activité principale (ex. : secteur des télécommunications).\n• **Branche** : regroupe les unités produisant exactement le même bien ou service (une entreprise multi-produits appartient à plusieurs branches mais à un seul secteur).\n• **Filière** : chaîne complète d’activités complémentaires de l’amont (matière première) à l’aval (client final).\nExemple : la filière anacarde en Côte d’Ivoire relie planteurs (amont), usines de décorticage (transformation), transporteurs et exportateurs (aval).',
            konanTip:
              'Retiens : une entreprise diversifiée appartient à UN seul secteur (son activité dominante) mais peut appartenir à PLUSIEURS branches.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Comment nomme-t-on la chaîne complète des opérations et entreprises reliant la production de fèves de cacao jusqu’à la tablette de chocolat vendue au consommateur ?',
              options: [
                'Une filière économique',
                'Une chambre consulaire',
                'Un organigramme matriciel',
                'Une consommation intermédiaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une filière rassemble l’ensemble des maillons successifs et complémentaires (de la matière première brute jusqu’au produit fini distribué) autour d’un même produit.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch2_p2',
        order: 2,
        title: 'Formes juridiques : entreprises privées (OHADA), coopératives et secteur public',
        summary:
          'Comparer Entreprise Individuelle, SARL, SA, SAS, Coopératives et entreprises publiques/parapubliques selon la responsabilité, le capital, le pouvoir et l’accès au financement.',
        conceptExplanation:
          "La classification juridique repose sur la propriété du capital et le régime de responsabilité des dirigeants et associés. On distingue trois grands ensembles :\n1) Les entreprises privées : l’Entreprise Individuelle (EI, sans personnalité morale distincte, responsabilité illimitée sauf statut d’entreprenant encadré) et les sociétés commerciales régies en Afrique de l’Ouest par l’Acte Uniforme OHADA : SARL (Société à Responsabilité Limitée, 1 ou plusieurs associés, responsabilité limitée aux apports), SA (Société Anonyme, adaptée aux grands projets et à la cotation en bourse, capital divisé en actions), SAS (Société par Actions Simplifiée, grande souplesse statutaire idéale pour les startups et levées de fonds), SNC (Société en Nom Collectif, responsabilité solidaire et illimitée).\n2) L’économie sociale et solidaire : les coopératives et mutuelles (principe démocratique « 1 personne = 1 voix », finalité de service aux membres).\n3) Les entreprises publiques et parapubliques : sociétés d’État (capital 100 % public), EPIC et sociétés d’économie mixte (partenariat État-privé).",
        formulas: [
          {
            name: 'Critère de responsabilité limitée',
            formula: '\\text{Risque financier de l’associé (SARL / SA / SAS)} \\le \\text{Montant de son apport au capital}',
            note: 'Dans une EI ou SNC, le patrimoine personnel de l’entrepreneur peut être saisi par les créanciers.',
          },
        ],
        keyRule:
          'Choisir une forme juridique (EI, SARL, SA, SAS, Coopérative) consiste à arbitrer entre simplicité de création, protection du patrimoine personnel, gouvernance et capacité à lever des fonds.',
        workedExample: {
          title: 'Choix de forme juridique pour trois projets entrepreneuriaux ivoiriens',
          statement:
            'Conseillez la forme juridique la plus adaptée pour : (A) un graphiste freelance travaillant seul avec un ordinateur et peu de dettes, (B) deux développeurs créant une fintech et voulant faire entrer rapidement des business angels avec des pactes souples, (C) 120 producteurs de mangues à Korhogo souhaitant mutualiser un entrepôt frigorifique.',
          methodSteps: [
            '1) Projet A : Entreprise Individuelle (EI / statut de l’entreprenant) — formalités légères, coût minimal, gestion autonome.',
            '2) Projet B : Société par Actions Simplifiée (SAS) — protège les patrimoines personnels, permet d’émettre différentes catégories d’actions et d’intégrer facilement des investisseurs sans la lourdeur d’une SA.',
            '3) Projet C : Société Coopérative — gouvernance démocratique (« 1 membre = 1 voix ») et partage des excédents au prorata des apports de mangues.',
          ],
          conclusion:
            'Il n’existe pas de statut universel parfait : chaque projet appelle une structure juridique alignée sur son risque et son besoin en capitaux.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'EI vs Société',
            stepTheme: 'Personnalité morale',
            stepTitle: 'Distinguer Entreprise Individuelle (EI) et Société commerciale',
            paragraphText:
              'Avant de lancer une activité, le créateur doit décider s’il exerce en son nom propre ou s’il crée une entité juridique distincte.\n• **Entreprise Individuelle (EI)** : l’entrepreneur et l’entreprise ne forment qu’une seule personne juridique ; formalités simples, mais responsabilité illimitée sur ses biens personnels.\n• **Société** : création d’une personne morale distincte dotée de son propre patrimoine, d’un nom (raison sociale) et d’un capital social.\nExemple : si un commerçant en EI fait faillite avec 15 M FCFA de dettes, sa maison personnelle peut être saisie ; en SARL ou SASU, sa perte est en principe limitée à son apport.',
            keyRule:
              'La société crée une personne morale autonome qui sépare (en SARL, SA, SAS) le patrimoine de l’entreprise du patrimoine privé des fondateurs.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est le principal risque juridique de l’Entreprise Individuelle (EI) par rapport à une SARL unipersonnelle ?',
              options: [
                'L’EI est interdite dans le secteur du commerce',
                'L’absence de séparation juridique des patrimoines expose les biens personnels de l’entrepreneur aux créanciers professionnels',
                'L’EI oblige à nommer au moins sept administrateurs',
                'L’EI interdit d’embaucher des salariés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En Entreprise Individuelle classique, il n’y a pas de personne morale distincte : les patrimoines personnel et professionnel sont confondus (responsabilité illimitée).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'SARL vs SA vs SAS',
            stepTheme: 'Sociétés de capitaux (OHADA)',
            stepTitle: 'Comparer SARL, SA et SAS en droit des affaires OHADA',
            paragraphText:
              'Dans l’espace OHADA (dont la Côte d’Ivoire), trois sociétés à responsabilité limitée dominent l’entrepreneuriat formel.\n• **SARL** : société fermée adaptée aux PME familiales (1 à N associés, parts sociales peu cessibles sans agrément, gérant désigné).\n• **SA (Société Anonyme)** : conçue pour les grands capitaux (capital minimum 10 M FCFA dans l’espace OHADA, actions librement négociables, Conseil d’Administration ou Administrateur Général, accès possible à la bourse BRVM).\n• **SAS (Société par Actions Simplifiée)** : introduite par la réforme OHADA de 2014 ; liberté statutaire maximale et aucun capital minimum imposé, très prisée des startups.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparatif des statuts juridiques privés (espace OHADA)',
              caption: 'Critères clés pour orienter le choix juridique d’un créateur ou d’une startup.',
              tableData: {
                headers: ['Forme', 'Associés', 'Responsabilité', 'Gouvernance & Souplesse'],
                rows: [
                  ['Entreprise Individuelle', '1 seul entrepreneur', 'Illimitée (patrimoine confondu)', 'Très simple, pas de statuts'],
                  ['SARL', '1 ou plusieurs associés', 'Limitée aux apports', 'Encadrée, gérant, cession soumise à agrément'],
                  ['SA', '1 ou plusieurs actionnaires', 'Limitée aux apports', 'Lourde (CA / PDG ou AG), accès bourse (BRVM)'],
                  ['SAS', '1 ou plusieurs associés', 'Limitée aux apports', 'Très souple (président), idéale pour levées de fonds'],
                  ['Coopérative', 'Membres coopérateurs', 'Limitée aux parts souscrites', 'Démocratique (« 1 personne = 1 voix »)'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle forme juridique de l’espace OHADA offre la plus grande liberté statutaire pour organiser l’entrée d’investisseurs dans une startup tech sans capital minimum imposé ?',
              options: [
                'La Société en Nom Collectif (SNC)',
                'La Société par Actions Simplifiée (SAS)',
                'L’établissement public administratif',
                'L’entreprise individuelle sans personnalité morale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La SAS (réforme OHADA 2014) combine responsabilité limitée, absence de capital minimum légal et liberté quasi totale dans la rédaction des statuts et pactes d’actionnaires.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Sociétés de personnes',
            stepTheme: 'SNC et solidarité',
            stepTitle: 'Comprendre la spécificité risquée de la SNC',
            paragraphText:
              'Certaines formes sociétaires reposent avant tout sur la confiance mutuelle absolue entre associés (intuitu personae fort) plutôt que sur les capitaux apportés.\n• **SNC (Société en Nom Collectif)** : tous les associés ont la qualité de commerçant et sont tenus **indéfiniment et solidairement** des dettes sociales.\n• **Conséquence majeure** : un créancier peut réclamer la totalité de la dette de l’entreprise à un seul associé solvable sur ses biens propres.\nExemple : deux frères créent une SNC ; si l’un contracte une dette professionnelle impayée de 20 M FCFA, le fournisseur peut saisir les biens personnels de l’autre frère.',
            konanTip:
              'Ne confonds jamais SARL (responsabilité limitée aux apports) et SNC (responsabilité indéfinie et solidaire) : c’est un classique des QCM de droit/OGE !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Que signifie la responsabilité « indéfinie et solidaire » des associés dans une Société en Nom Collectif (SNC) ?',
              options: [
                'Chaque associé ne risque que le montant initial de son apport',
                'L’État garantit personnellement toutes les pertes de l’entreprise',
                'Chaque associé répond des dettes de la société sur l’ensemble de son patrimoine personnel et peut être poursuivi pour la totalité',
                'Les associés n’ont pas le droit de voter en assemblée',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans une SNC, l’écran de la personnalité morale ne protège pas le patrimoine privé des associés : ils sont indéfiniment et solidairement responsables du passif.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Économie sociale',
            stepTheme: 'Coopératives et mutuelles',
            stepTitle: 'Identifier les principes de l’entreprise coopérative',
            paragraphText:
              'À côté des sociétés capitalistes où le pouvoir dépend du nombre d’actions détenues, le secteur coopératif occupe une place décisive dans l’agriculture, l’artisanat et la microfinance en Afrique de l’Ouest.\n• **Finalité de service** : satisfaire les besoins économiques et sociaux des membres plutôt que maximiser le dividende d’actionnaires externes.\n• **Gouvernance démocratique** : règle « une personne = une voix », quel que soit le nombre de parts sociales.\n• **Répartition des excédents** : ristournes proportionnelles aux opérations réalisées avec la coopérative.\nExemple : une coopérative de planteurs d’hévéa à Soubré vend ensemble sa récolte pour négocier de meilleurs prix à l’usine.',
            keyRule:
              'Société de capitaux = « 1 action = 1 voix » ; Coopérative = « 1 membre = 1 voix ».',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle règle de gouvernance caractérise spécifiquement une société coopérative par rapport à une Société Anonyme (SA) ?',
              options: [
                'Le droit de vote proportionnel au nombre d’actions détenues',
                'Le principe démocratique « une personne = une voix » lors des assemblées',
                'L’obligation d’être cotée à la bourse régionale (BRVM)',
                'L’interdiction d’avoir plus de deux membres',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans une coopérative, le pouvoir est attaché à la personne du coopérateur (« 1 homme = 1 voix ») et non à l’importance du capital détenu.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Secteur public',
            stepTheme: 'Entreprises publiques et parapubliques',
            stepTitle: 'Distinguer société d’État, EPIC et société d’économie mixte',
            paragraphText:
              'Pour gérer des infrastructures stratégiques ou assurer des missions d’intérêt général, l’État intervient aussi comme entrepreneur ou actionnaire.\n• **Société d’État** : capital détenu à 100 % par l’État, fonctionnant selon des règles commerciales (ex. : port autonome, société nationale d’hydrocarbures).\n• **EPIC (Établissement Public à caractère Industriel et Commercial)** : organisme public doté d’une autonomie financière fournissant un service marchand ou semi-marchand.\n• **Société d’économie mixte (parapublique)** : associe capitaux publics et capitaux privés.\nExemple : dans une société d’économie mixte de télécommunications ou d’énergie, l’État conserve une minorité de blocage tandis qu’un partenaire privé apporte l’expertise technique.',
            keyRule:
              'Société d’État = 100 % capital public ; Société d’économie mixte = partenariat capitalistique entre puissance publique et investisseurs privés.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on une entreprise dont le capital est détenu conjointement par l’État (49 %) et des investisseurs privés (51 %) ?',
              options: [
                'Une entreprise individuelle',
                'Une société d’économie mixte (entreprise parapublique)',
                'Une coopérative agricole',
                'Une association à but non lucratif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’association de capitaux publics (État ou collectivités) et de capitaux privés au sein d’une même société définit une société d’économie mixte (secteur parapublic).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Gouvernance SA',
            stepTheme: 'Séparation propriété / direction',
            stepTitle: 'Comprendre la gouvernance des grandes sociétés par actions',
            paragraphText:
              'Lorsque la taille de l’entreprise grandit (SA cotée ou filiale de groupe), les actionnaires sont trop nombreux pour gérer les opérations quotidiennes et délèguent le pouvoir à des organes spécialisés.\n• **Assemblée Générale (AG)** : réunit les actionnaires pour approuver les comptes, voter les dividendes et nommer les administrateurs.\n• **Conseil d’Administration (CA)** : fixe les orientations stratégiques et contrôle la direction générale (avec soit un PDG, soit une séparation Président du CA / Directeur Général).\n• **Commissaires aux comptes** : auditeurs légaux indépendants certifiant la sincérité des états financiers.\nExemple : une banque cotée à la BRVM réunit son AG annuelle pour valider ses comptes certifiés et élire son CA.',
            konanTip:
              'En SA (droit OHADA), dès qu’il y a 3 actionnaires ou moins, on peut opter pour un Administrateur Général ; au-delà, le Conseil d’Administration est obligatoire.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Dans une grande Société Anonyme (SA), quel organe représente les actionnaires entre deux assemblées générales pour contrôler la direction et définir la stratégie ?',
              options: [
                'Le comité des stagiaires',
                'Le Conseil d’Administration (CA)',
                'La Chambre de Commerce et d’Industrie',
                'Le service après-vente',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Élu par l’Assemblée Générale des actionnaires, le Conseil d’Administration définit les orientations stratégiques, nomme les dirigeants exécutifs et contrôle leur gestion.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Formalisation',
            stepTheme: 'Secteur formel vs informel',
            stepTitle: 'Mesurer les enjeux du passage de l’informel au formel',
            paragraphText:
              'Dans les économies africaines, une part importante de l’activité démarre dans le secteur informel, mais la croissance exige tôt ou tard la formalisation juridique et fiscale.\n• **Avantages du formel** : accès au crédit bancaire, réponse aux appels d’offres publics et grands comptes, protection sociale (CNPS) des salariés, sécurisation juridique de la marque.\n• **Dispositifs facilitants** : guichet unique de création d’entreprise (CEPICI en Côte d’Ivoire), statut de l’entreprenant à fiscalité simplifiée.\nExemple : un développeur freelance formalisé en SARLU ou Entreprise Individuelle immatriculée au RCCM peut enfin facturer officiellement les banques et télécoms de la place.',
            keyRule:
              'La formalisation (immatriculation RCCM, identifiant fiscal, CNPS) ouvre l’accès au financement bancaire, aux grands contrats et à la protection juridique.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p2_q7',
              type: 'mcq',
              prompt:
                'Quel avantage décisif la formalisation juridique procure-t-elle à une jeune entreprise de services numériques ?',
              options: [
                'Être dispensée à vie de payer ses fournisseurs',
                'Pouvoir contracter avec des grands comptes, soumissionner aux marchés publics et accéder aux financements bancaires',
                'Éviter toute comptabilité même en cas de croissance',
                'Garantir automatiquement un bénéfice sans clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans immatriculation officielle (RCCM, numéro de compte contribuable), une entreprise ne peut ni émettre de factures conformes aux grands groupes/État, ni obtenir facilement un prêt bancaire.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch2_p3',
        order: 3,
        title: 'L’entreprise et son environnement : PESTEL, micro-environnement et stratégies',
        summary:
          'Distinguer macro-environnement (PESTEL) et micro-environnement (5 forces), qualifier contrainte/risque/opportunité et choisir une stratégie adaptée (franchise, spécialisation, diversification).',
        conceptExplanation:
          "En tant que système ouvert, l’entreprise évolue sous l’influence de deux cercles environnementaux :\n1) Le macro-environnement (environnement général que l’entreprise subit sans pouvoir le modifier directement), analysé par la grille PESTEL : Politique (stabilité, aides), Économique (inflation, pouvoir d’achat, taux d’intérêt), Socioculturel (démographie, habitudes numériques), Technologique (IA, fibre optique, mobile money), Écologique (normes vertes, climat) et Légal (droit du travail, OHADA, protection des données).\n2) Le micro-environnement (environnement immédiat avec lequel l’entreprise interagit directement : clients, fournisseurs, concurrents directs, entrants potentiels, produits de substitution, intermédiaires).\n\nFace aux évolutions, le dirigeant distingue contrainte interne, menace/risque externe et opportunité externe, puis choisit ses axes stratégiques : spécialisation, diversification, intégration, externalisation ou développement en réseau comme la franchise.",
        formulas: [
          {
            name: 'Grille PESTEL du macro-environnement',
            formula: '\\text{PESTEL} = \\text{Politique} + \\text{Économique} + \\text{Socioculturel} + \\text{Technologique} + \\text{Écologique} + \\text{Légal}',
            note: 'Chaque facteur PESTEL doit être traduit en opportunité ou menace concrète pour l’entreprise.',
          },
        ],
        keyRule:
          'PESTEL analyse le macro-environnement global sur lequel l’entreprise a peu de prise ; le micro-environnement regroupe les acteurs proches avec lesquels elle négocie directement.',
        workedExample: {
          title: 'Diagnostic et stratégie d’une entreprise de livraison urbaine',
          statement:
            'Une entreprise de livraison à Abidjan fait face à quatre événements : (1) grève interne de ses livreurs, (2) hausse du prix du carburant, (3) essor rapide du e-commerce local, (4) arrivée d’un concurrent international. Identifiez une contrainte interne, une menace externe et une opportunité, puis proposez deux réponses stratégiques.',
          methodSteps: [
            '1) Contrainte interne : la grève des livreurs (facteur interne bloquant immédiatement les opérations).',
            '2) Menace (risque) externe : la hausse du carburant (alourdit les coûts) et la concurrence accrue (pression sur les prix).',
            '3) Opportunité externe : l’essor du e-commerce (augmente fortement la demande de livraison du dernier kilomètre).',
            '4) Stratégies : signer des contrats exclusifs avec des boutiques en ligne pour grouper les tournées ; moderniser progressivement la flotte (motos électriques) et déployer une application de suivi en temps réel.',
          ],
          conclusion:
            'Une bonne décision stratégique transforme une opportunité externe (e-commerce) en relais de croissance tout en neutralisant les vulnérabilités internes et externes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Macro-environnement',
            stepTheme: 'Modèle PESTEL',
            stepTitle: 'Analyser l’environnement global avec la grille PESTEL',
            paragraphText:
              'Avant d’investir sur un marché, la direction doit scruter les grandes tendances macroéconomiques et réglementaires qui s’imposent à tous les acteurs.\n• **P (Politique)** : stabilité institutionnelle, subventions publiques, politique fiscale.\n• **E (Économique)** : croissance du PIB, inflation, taux d’intérêt, pouvoir d’achat.\n• **S (Socioculturel)** : jeunesse de la population, urbanisation, essor du mobile.\n• **T (Technologique)** : couverture 4G/5G, cloud, paiement mobile, cybersécurité.\n• **E (Écologique)** : transition énergétique, gestion des déchets.\n• **L (Légal)** : Code du travail, droit OHADA, loi sur les données personnelles.\nExemple : l’essor de l’interopérabilité Mobile Money en UEMOA est un facteur Technologique et Légal majeur pour les fintechs.',
            keyRule:
              'Le modèle PESTEL porte exclusivement sur le macro-environnement global, et non sur l’organisation interne de l’entreprise.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'À quel niveau d’analyse correspond l’outil PESTEL (Politique, Économique, Socioculturel, Technologique, Écologique, Légal) ?',
              options: [
                'À l’analyse des compétences internes de chaque salarié',
                'À l’analyse du macro-environnement global de l’entreprise',
                'À la répartition comptable de la Valeur Ajoutée',
                'Au calcul du Besoin en Fonds de Roulement (BFR)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PESTEL recense les six grandes dimensions du macro-environnement global qui génèrent des opportunités ou des menaces externes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Micro-environnement',
            stepTheme: 'Acteurs immédiats',
            stepTitle: 'Distinguer le micro-environnement du macro-environnement',
            paragraphText:
              'À la différence des lois ou de l’inflation qu’elle subit, l’entreprise entretient des rapports directs et réciproques avec son micro-environnement.\n• **Clients** : imposent des exigences de prix, qualité et délais (pouvoir de négociation).\n• **Fournisseurs** : fournissent intrants et équipements critiques.\n• **Concurrents directs et entrants potentiels** : se disputent les mêmes segments de clientèle.\n• **Intermédiaires et partenaires** : distributeurs, banques locales, prestataires logistiques.\nExemple : un restaurant à Cocody subit le coût général de l’électricité (macro), mais négocie directement le prix de ses vivriers avec son fournisseur (micro).',
            konanTip:
              'Test simple pour ne pas confondre : si l’entreprise peut négocier directement avec l’acteur (client, fournisseur, distributeur), c’est du micro-environnement !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants, lesquels composent le micro-environnement immédiat de l’entreprise ?',
              options: [
                'Le taux d’inflation national et la démographie du pays',
                'Les clients, les fournisseurs, les concurrents et les intermédiaires commerciaux',
                'Les réformes fiscales votées par le Parlement',
                'Le réchauffement climatique mondial',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le micro-environnement rassemble les acteurs proches (clients, fournisseurs, concurrents, intermédiaires) en interaction directe et quotidienne avec l’entreprise.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Qualification',
            stepTheme: 'Contrainte vs Risque vs Opportunité',
            stepTitle: 'Ne pas confondre contrainte interne, menace et opportunité',
            paragraphText:
              'Lors d’une étude de cas, bien qualifier la nature d’un événement conditionne la pertinence des solutions managériales proposées.\n• **Contrainte (facteur limitant interne ou structurel)** : élément qui restreint immédiatement la capacité d’action (ex. : grève interne du personnel, panne serveur, manque de trésorerie).\n• **Risque / Menace (externe)** : évolution défavorable de l’environnement (ex. : hausse du carburant, arrivée d’un concurrent agressif).\n• **Opportunité (externe)** : tendance favorable à saisir (ex. : essor du e-commerce, nouveau décret exonérant les startups).\nExemple : face à une grève interne (contrainte), la solution passe par le dialogue social ; face à la hausse du carburant (risque), elle passe par l’optimisation des tournées.',
            keyRule:
              'Distingue l’origine (interne vs externe) et l’impact (favorable vs défavorable) avant de formuler une recommandation stratégique.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Pour une entreprise de livraison, comment qualifier respectivement (1) une grève de ses propres chauffeurs et (2) la croissance rapide des achats en ligne dans le pays ?',
              options: [
                '(1) Opportunité externe et (2) Contrainte interne',
                '(1) Contrainte interne limitante et (2) Opportunité externe à saisir',
                '(1) Facteur écologique PESTEL et (2) Menace fatale',
                '(1) Actif immobilisé et (2) Passif circulant',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La grève des salariés paralyse l’activité de l’intérieur (contrainte interne), tandis que l’essor du e-commerce ouvre un marché croissant de livraisons (opportunité externe).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Croissance',
            stepTheme: 'Spécialisation vs Diversification',
            stepTitle: 'Arbitrer entre spécialisation et diversification',
            paragraphText:
              'Pour assurer son développement, l’entreprise dispose de deux grandes voies stratégiques concernant son portefeuille d’activités.\n• **Spécialisation** : concentrer toutes les ressources sur un seul métier ou produit pour atteindre une expertise supérieure et des économies d’échelle (risque : dépendance à un seul marché).\n• **Diversification** : lancer de nouveaux produits sur de nouveaux marchés pour répartir les risques et capter de nouveaux relais de croissance (risque : dispersion des ressources).\nExemple : un acteur des paiements mobiles qui reste concentré sur le transfert d’argent suit une spécialisation ; s’il lance en plus une plateforme e-commerce et de la micro-assurance, il se diversifie.',
            keyRule:
              'Spécialisation = approfondir son cœur de métier (effet d’expérience) ; Diversification = conquérir de nouveaux couples produits/marchés (répartition des risques).',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quel est le principal risque d’une stratégie de spécialisation totale sur un produit unique ?',
              options: [
                'Une forte vulnérabilité si la technologie change ou si ce marché unique s’effondre',
                'Une impossibilité d’acquérir de l’expérience dans ce métier',
                'Une dispersion immédiate des capitaux dans dix secteurs différents',
                'L’obligation de transformer l’entreprise en administration publique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La spécialisation optimise les coûts et l’expertise, mais expose l’entreprise à un risque majeur en cas d’obsolescence ou de crise du secteur unique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Franchise',
            stepTheme: 'Développement en réseau',
            stepTitle: 'Comprendre la stratégie de franchise',
            paragraphText:
              'Lorsqu’une enseigne souhaite se développer rapidement sur tout un territoire ou à l’international sans mobiliser des capitaux colossaux pour ouvrir chaque point de vente, elle recourt souvent à la franchise.\n• **Mécanisme contractuel** : le **franchiseur** cède au **franchisé** le droit d’exploiter sa marque, son enseigne et son savoir-faire éprouvé, assorti d’une assistance technique.\n• **Contrepartie** : le franchisé reste juridiquement indépendant mais paie un droit d’entrée et des redevances (royalties) tout en respectant les standards.\nExemple : une chaîne de restauration rapide ou de boulangeries abidjanaises ouvre 15 boutiques en province via des entrepreneurs locaux franchisés.',
            keyRule:
              'Franchise = collaboration entre deux entreprises juridiquement indépendantes : transfert de marque et de savoir-faire contre redevances et respect des normes.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quel avantage stratégique majeur la franchise procure-t-elle au franchiseur ?',
              options: [
                'Supprimer toute exigence de qualité sur les produits vendus',
                'Étendre rapidement son réseau commercial avec les capitaux des franchisés tout en percevant des redevances',
                'Devenir propriétaire du patrimoine personnel de chaque franchisé',
                'Éviter de créer une marque ou un savoir-faire reproductible',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La franchise permet au franchiseur d’accélérer son maillage territorial sans financer lui-même chaque nouveau local ni supporter le risque d’exploitation directe.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Faire ou faire faire',
            stepTheme: 'Externalisation vs Intégration',
            stepTitle: 'Décider entre internalisation et externalisation (outsourcing)',
            paragraphText:
              'Aucune entreprise ne peut exceller dans toutes les activités de sa chaîne de valeur : elle doit arbitrer entre « faire en interne » (intégration) et « faire faire » à un partenaire spécialisé (externalisation).\n• **Externalisation** : confier une fonction périphérique (sécurité, nettoyage, hébergement cloud, paie, livraison) à un prestataire expert pour réduire les coûts fixes et se recentrer sur son cœur de métier.\n• **Risque de l’externalisation** : perte de maîtrise technique ou dépendance envers le sous-traitant.\nExemple : une banque préfère souvent externaliser le gardiennage de ses agences, mais garde en interne le contrôle des risques crédits (cœur de métier).',
            konanTip:
              'Règle d’or stratégique : n’externalise jamais ce qui constitue ton avantage concurrentiel central ou tes données les plus critiques sans clause de réversibilité.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi une startup de commerce électronique choisit-elle souvent d’externaliser l’hébergement de ses serveurs auprès d’un fournisseur cloud spécialisé ?',
              options: [
                'Pour transformer des investissements fixes lourds en coûts variables, bénéficier d’une haute expertise et se concentrer sur son cœur de métier',
                'Pour interdire l’accès à ses clients pendant la nuit',
                'Pour perdre le contrôle de sa relation client commerciale',
                'Parce que la loi interdit aux entreprises d’acheter des ordinateurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’externalisation (outsourcing) du cloud permet d’éviter d’acheter et maintenir des serveurs coûteux tout en profitant de l’expertise et de la flexibilité du prestataire.',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 3 : STRUCTURES ORGANISATIONNELLES, COORDINATION ET DIRECTION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch3',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Structures organisationnelles, coordination et direction',
    summary:
      'Concevoir un organigramme, maîtriser la division du travail et les mécanismes de coordination de Mintzberg, comparer les structures (hiérarchique, fonctionnelle, staff & line, divisionnelle, matricielle), et piloter centralisation, délégation et niveaux de décision.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Organisation et Gestion des Entreprises',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch3_p1',
        order: 1,
        title: 'Division du travail, organigramme et mécanismes de coordination de Mintzberg',
        summary:
          'Comprendre comment une organisation répartit les tâches (spécialisation horizontale et verticale), représente ses liens sur un organigramme et coordonne ses membres selon Henry Mintzberg.',
        conceptExplanation:
          "Selon Henry Mintzberg, toute structure organisationnelle répond à deux impératifs complémentaires : diviser le travail en tâches distinctes puis coordonner ces tâches pour atteindre l’objectif commun.\n\n1) La division du travail s’opère selon deux axes : la division horizontale (spécialisation par métier ou fonction : marketing, finance, production) et la division verticale (séparation entre conception/décision au sommet et exécution à la base).\n2) L’organigramme est la représentation graphique schématique de cette structure : il visualise les services, les niveaux hiérarchiques et les liaisons (hiérarchiques en trait plein, fonctionnelles ou de conseil en pointillé).\n3) Pour éviter le chaos, Mintzberg identifie 6 mécanismes de coordination : ajustement mutuel (communication informelle directe), supervision directe (ordres d’un chef), standardisation des procédés (procédures strictes), standardisation des résultats (objectifs chiffrés), standardisation des qualifications (formation préalable identique) et standardisation des normes (valeurs partagées).",
        formulas: [
          {
            name: 'Équation structurante de Mintzberg',
            formula: '\\text{Structure efficace} = \\text{Division du travail} + \\text{Mécanismes de coordination}',
            note: 'Plus la division du travail est poussée, plus l’effort de coordination doit être rigoureux.',
          },
        ],
        keyRule:
          'La structure repose sur la double dynamique division/coordination ; Mintzberg distingue 6 mécanismes allant de l’ajustement mutuel (petites équipes) aux quatre formes de standardisation et à la supervision directe.',
        workedExample: {
          title: 'Évolution de la coordination dans une ESN en forte croissance',
          statement:
            'Trois étudiants lancent une agence web à Abidjan et se parlent directement autour d’une table. Trois ans plus tard, l’entreprise compte 45 salariés répartis en pôles Design, Développement, Commercial et Finance. Quels mécanismes de coordination dominent à chaque stade ?',
          methodSteps: [
            '1) Stade initial (3 fondateurs) : l’ajustement mutuel domine grâce à la communication informelle immédiate.',
            '2) Stade croissance (10–15 salariés) : la supervision directe apparaît avec un chef de projet qui donne les consignes et contrôle.',
            '3) Stade structuré (45 salariés) : on combine standardisation des qualifications (recrutement d’ingénieurs certifiés), standardisation des procédés (protocoles Git/tests) et standardisation des résultats (CA trimestriel des commerciaux).',
          ],
          conclusion:
            'Les mécanismes de coordination évoluent naturellement avec la taille et la complexité technique de l’entreprise.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Division du travail',
            stepTheme: 'Spécialisation horizontale et verticale',
            stepTitle: 'Distinguer division horizontale et division verticale du travail',
            paragraphText:
              'Dès qu’une entreprise dépasse quelques personnes, tout le monde ne peut plus tout faire : il faut organiser la répartition des rôles selon deux dimensions complémentaires.\n• **Division horizontale** : découpage des activités au même niveau en fonctions ou postes spécialisés (achats, production, vente, comptabilité) pour gagner en dextérité et productivité.\n• **Division verticale** : répartition du pouvoir de décision entre niveaux hiérarchiques (direction qui conçoit et décide, encadrement qui supervise, opérateurs qui exécutent).\nExemple : dans une usine de conditionnement d’eau, séparer l’embouteillage de la livraison est horizontal ; confier la planification au directeur d’usine est vertical.',
            keyRule:
              'Division horizontale = spécialisation par métier ou tâche ; Division verticale = hiérarchie entre conception/contrôle et exécution.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'À quoi correspond la « division verticale » du travail dans une organisation ?',
              options: [
                'À la séparation entre les tâches de conception/décision au sommet et les tâches d’exécution à la base',
                'À la création de deux succursales dans deux villes différentes',
                'Au partage des tâches entre le service marketing et le service informatique au même niveau',
                'À la pause déjeuner prise simultanément par tous les salariés',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La division verticale instaure la ligne hiérarchique en distinguant ceux qui décident et supervisent de ceux qui exécutent.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Organigramme',
            stepTheme: 'Lecture de structure',
            stepTitle: 'Lire et construire un organigramme d’entreprise',
            paragraphText:
              'L’organigramme est la carte d’identité visuelle d’une organisation : il permet à tout nouvel arrivant ou partenaire de comprendre rapidement qui décide et qui rend compte à qui.\n• **Cases (postes/services)** : indiquent les fonctions ou unités et parfois les noms des responsables.\n• **Traits pleins verticaux** : matérialisent l’autorité hiérarchique directe (lien de subordination).\n• **Traits pointillés ou horizontaux** : représentent les liaisons fonctionnelles (expertise transverse) ou de conseil (état-major / staff).\nExemple : sur un organigramme, le Directeur Financier est relié au PDG par un trait plein, tandis que le juriste conseil rattaché au PDG est en dérivation latérale.',
            konanTip:
              'Un bon organigramme montre la structure formelle officielle, mais n’oublie jamais qu’il existe aussi des relations informelles (affinités, leadership naturel) invisibles sur le schéma !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Que représente généralement un trait plein reliant verticalement deux postes sur un organigramme ?',
              options: [
                'Une simple amitié informelle hors de l’entreprise',
                'Un lien d’autorité hiérarchique directe entre supérieur et subordonné',
                'Une relation commerciale avec un client externe',
                'Un contrat de location de matériel informatique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le trait plein vertical symbolise la voie hiérarchique formelle (transmission des ordres du supérieur vers le subordonné et remontée du reporting).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Mintzberg (1/2)',
            stepTheme: 'Ajustement mutuel & Supervision directe',
            stepTitle: 'Maîtriser les mécanismes humains directs de Mintzberg',
            paragraphText:
              'Dans les petites équipes ou les contextes très innovants, la coordination ne passe pas d’abord par des règlements écrits, mais par l’interaction humaine directe.\n• **Ajustement mutuel** : les travailleurs se coordonnent par simple communication informelle (dialogue direct, messagerie instantanée), sans chef intermédiaire ; idéal dans les très petites structures ou les équipes R&D.\n• **Supervision directe** : une seule personne (le responsable) endosse la responsabilité du travail des autres, donne des instructions et contrôle leur exécution.\nExemple : deux développeurs ajustant leur code à l’oral pratiquent l’ajustement mutuel ; un chef de chantier dirigeant 15 maçons applique la supervision directe.',
            keyRule:
              'Ajustement mutuel = coordination horizontale informelle entre pairs ; Supervision directe = coordination verticale par un supérieur.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Dans un studio de création graphique de 4 personnes où chacun ajuste son travail en échangeant directement avec ses collègues sans passer par des procédures écrites ni un chef autoritaire, quel mécanisme domine ?',
              options: [
                'La standardisation des procédés',
                'L’ajustement mutuel',
                'La bureaucratie mécaniste',
                'La division divisionnelle par pays',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ajustement mutuel assure la coordination par la communication directe et informelle entre opérateurs, typique des petites structures et équipes agiles.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Mintzberg (2/2)',
            stepTheme: 'Les quatre standardisations',
            stepTitle: 'Distinguer les quatre formes de standardisation de Mintzberg',
            paragraphText:
              'Lorsque la taille augmente, le dialogue direct ou un seul chef ne suffisent plus : l’organisation coordonne le travail à l’avance grâce à la standardisation.\n• **Des procédés de travail** : on spécifie exactement comment exécuter la tâche (check-lists, modes opératoires).\n• **Des résultats** : on fixe les objectifs chiffrés à atteindre (CA, délais) en laissant le choix de la méthode.\n• **Des qualifications** : les professionnels savent exactement quoi faire grâce à leur formation/diplôme identique (chirurgiens, auditeurs).\n• **Des normes** : adhésion forte à des valeurs et croyances communes.\nExemple : un fast-food standardise les procédés (recette chronométrée), alors qu’une banque fixe à ses directeurs d’agence des objectifs de résultats annuels.',
            keyRule:
              'Procédés = on prescrit le « comment » ; Résultats = on fixe le « quoi/combien » ; Qualifications = on s’appuie sur l’expertise acquise ; Normes = culture partagée.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Une direction fixe à ses chefs d’agences commerciales un objectif de 50 nouveaux clients par trimestre en leur laissant toute liberté sur les méthodes de prospection. De quel mécanisme de Mintzberg s’agit-il ?',
              options: [
                'Standardisation des procédés de travail',
                'Standardisation des résultats',
                'Ajustement mutuel informel',
                'Supervision directe pas à pas',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsqu’on impose la performance finale attendue sans dicter la procédure détaillée pour y parvenir, on pratique la standardisation des résultats.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Départementalisation',
            stepTheme: 'Regroupement des unités',
            stepTitle: 'Choisir les critères de regroupement en départements',
            paragraphText:
              'Pour bâtir l’organigramme, il faut regrouper les postes en services cohérents : c’est la départementalisation. Quatre critères principaux existent selon la stratégie.\n• **Par fonctions** : regrouper selon les compétences (Production, Commercial, Finance, RH).\n• **Par produits ou services** : chaque gamme possède ses propres ressources (ex. : pôle Mobile Money vs pôle Fibre).\n• **Par zones géographiques** : directions régionales (Abidjan, Bouaké, San-Pédro, Export).\n• **Par types de clients** : pôle Particuliers, pôle PME, pôle Grands Comptes.\nExemple : une banque divise souvent ses agences par clientèle (Particuliers vs Entreprises) pour offrir un accompagnement sur mesure.',
            konanTip:
              'Une grande entreprise combine presque toujours plusieurs critères : fonctions au siège, zones géographiques pour le réseau commercial et produits dans ses usines.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Une société d’assurance organise ses directions commerciales en trois pôles : « Particuliers », « PME-PMI » et « Grands Comptes institutionnels ». Quel critère de départementalisation utilise-t-elle ?',
              options: [
                'La départementalisation géographique',
                'La départementalisation par segments de clientèle',
                'La départementalisation par procédés chimiques',
                'L’ajustement mutuel aléatoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Structurer les unités selon les catégories d’acheteurs (particuliers, PME, grands comptes) correspond à une départementalisation par types de clients.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Éventail de subordination',
            stepTheme: 'Taille des équipes',
            stepTitle: 'Arbitrer l’éventail de subordination et le nombre de niveaux',
            paragraphText:
              'L’éventail de subordination (span of control) désigne le nombre de subordonnés placés directement sous l’autorité d’un même manager. Ce choix détermine la forme aplatie ou pyramidale de la structure.\n• **Éventail étroit (3–5 personnes)** : contrôle rapproché, mais multiplie les échelons hiérarchiques (structure haute, lenteur décisionnelle, coûts d’encadrement).\n• **Éventail large (10–20 personnes)** : structure plate, communication rapide et responsabilisation accrue, mais risque de surcharge du manager.\nExemple : une startup numérique adopte un éventail large et peu de niveaux hiérarchiques pour décider vite face au marché.',
            keyRule:
              'Plus l’éventail de subordination est large, plus la pyramide hiérarchique est plate et réactive ; plus il est étroit, plus l’organisation est verticale.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle conséquence entraîne un éventail de subordination très étroit dans une grande entreprise ?',
              options: [
                'La suppression totale de tous les cadres intermédiaires',
                'L’allongement de la ligne hiérarchique, une communication plus lente et des coûts d’encadrement plus élevés',
                'L’augmentation immédiate de l’autonomie des exécutants sans contrôle',
                'La fusion automatique avec un concurrent',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si chaque chef n’encadre que très peu de personnes, il faut multiplier les échelons intermédiaires, ce qui allonge la pyramide et ralentit la circulation de l’information.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch3_p2',
        order: 2,
        title: 'Typologie des structures : hiérarchique, fonctionnelle, staff & line, divisionnelle et matricielle',
        summary:
          'Maîtriser les cinq grandes architectures organisationnelles (Fayol, Taylor, Staff & Line, Divisionnelle, Matricielle), leurs avantages, leurs risques et leurs critères de choix.',
        conceptExplanation:
          "Chaque entreprise adopte une architecture adaptée à sa taille, sa diversité de produits et la stabilité de son environnement :\n1) Structure hiérarchique (Henri Fayol) : fondée sur l’unité de commandement — chaque salarié ne reçoit d’ordres que d’un seul supérieur. Simple et claire, mais rigide et lente en cas de croissance.\n2) Structure fonctionnelle (F. W. Taylor) : fondée sur la spécialisation des chefs — un subordonné dépend de plusieurs chefs spécialistes chacun dans leur domaine (qualité, maintenance, planning). Favorise l’expertise, mais crée des conflits d’ordres.\n3) Structure hiérarchico-fonctionnelle (Staff & Line) : concilie les deux — des opérationnels décident (Line) avec unité de commandement, assistés par des conseillers experts sans pouvoir d’ordre (Staff : juriste, audit, R&D).\n4) Structure divisionnelle : découpe l’entreprise en divisions autonomes par produit, marché ou zone géographique, adaptées aux groupes diversifiés.\n5) Structure matricielle : croise deux axes de commandement (fonctionnel et projet/produit) ; très agile pour l’innovation, mais exigeante car elle rompt l’unité de commandement.",
        formulas: [
          {
            name: 'Arbitrage d’architecture organisationnelle',
            formula: '\\text{Choix de structure} = f(\\text{Taille},\\ \\text{Diversité produits/marchés},\\ \\text{Stabilité de l’environnement})',
            note: 'Mono-activité PME → fonctionnelle/hiérarchique ; Multi-produits/multi-pays → divisionnelle ; Grands projets complexes → matricielle.',
          },
        ],
        keyRule:
          'Fayol (Hiérarchique) privilégie l’unité de commandement ; Taylor (Fonctionnelle) privilégie la spécialisation ; Staff & Line combine ligne hiérarchique et état-major ; Divisionnelle s’adapte aux multi-marchés ; Matricielle croise fonctions et projets.',
        workedExample: {
          title: 'Diagnostic et refonte structurelle d’un groupe agro-tech ivoirien',
          statement:
            'Une entreprise née avec un seul logiciel de gestion agricole connaît aujourd’hui trois activités distinctes : (1) Logiciels agricoles, (2) Capteurs IoT industriels, (3) Conseil export Europe. Sous sa structure fonctionnelle initiale, les décisions prennent 3 mois et les équipes se rejettent la faute. Quelle nouvelle structure recommander ?',
          methodSteps: [
            '1) Diagnostic : l’entreprise est devenue multi-produits et multi-marchés ; la structure fonctionnelle centralisée crée des goulots d’étranglement.',
            '2) Solution recommandée : passer à une structure divisionnelle (3 divisions autonomes : Logiciels, Capteurs IoT, Conseil Export), chacune ayant son compte de résultat et sa réactivité marché.',
            '3) Alternative projet : pour lancer un nouveau produit combinant capteurs et logiciel, utiliser temporairement une équipe projet matricielle.',
          ],
          conclusion:
            'Le passage à une structure divisionnelle restaure la réactivité par produit tout en responsabilisant chaque directeur de division sur sa rentabilité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fayol',
            stepTheme: 'Structure hiérarchique',
            stepTitle: 'Comprendre la structure hiérarchique et l’unité de commandement',
            paragraphText:
              'Inspirée de l’armée et formalisée par Henri Fayol, la structure hiérarchique repose sur un principe absolu : l’**unité de commandement**.\n• **Principe** : chaque collaborateur ne reçoit d’ordres que d’un seul supérieur hiérarchique direct, du sommet jusqu’à la base.\n• **Avantages** : clarté totale des responsabilités, discipline, simplicité de fonctionnement.\n• **Limites** : cloisonnement entre services, lenteur de transmission sur de longues lignes hiérarchiques et risque de déformation de l’information.\nExemple : dans une PME de bâtiment, le maçon obéit uniquement au chef d’équipe, qui répond au conducteur de travaux, lui-même rattaché au directeur.',
            keyRule:
              'Structure hiérarchique (Fayol) = un seul chef par subordonné (unité de commandement), garantissant clarté mais risquant la rigidité.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quel principe fondamental caractérise la structure hiérarchique théorisée par Henri Fayol ?',
              options: [
                'La multiplicité des chefs spécialisés pour chaque ouvrier',
                'L’unité de commandement : chaque subordonné ne dépend que d’un seul supérieur',
                'L’absence totale de direction générale',
                'La rotation aléatoire des postes chaque matin',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La structure hiérarchique garantit qu’aucun salarié ne reçoive d’instructions contradictoires grâce à l’unité de commandement.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Taylor',
            stepTheme: 'Structure fonctionnelle',
            stepTitle: 'Identifier avantages et risques de la structure fonctionnelle',
            paragraphText:
              'À l’opposé de Fayol, Frederick Taylor privilégie l’expertise technique sur l’unicité du chef : c’est la structure fonctionnelle pure (ou par fonctions dans sa version moderne).\n• **Principe** : l’autorité est découpée par spécialités (comptabilité, marketing, production, RH) ; un même opérateur peut recevoir des consignes de plusieurs chefs spécialistes.\n• **Avantages** : haute spécialisation des compétences, clarté des missions par domaine, économies d’échelle.\n• **Limites** : conflits d’ordres contradictoires (en version taylorienne pure) et vision en silos peu orientée client global.\nExemple : un responsable d’atelier reçoit des instructions du chef de maintenance pour ses machines et du chef qualité pour les normes.',
            keyRule:
              'Structure fonctionnelle = forte spécialisation des compétences par domaine et clarté des missions, idéale pour les entreprises mono-activité.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quels sont les deux avantages principaux généralement reconnus à une structure par fonctions ?',
              options: [
                'L’absence totale de règles et la suppression des experts',
                'La spécialisation pointue des compétences et la clarté des responsabilités par domaine',
                'L’autonomie complète de dix usines concurrentes entre elles',
                'La suppression de la comptabilité et du marketing',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Regrouper les spécialistes par fonction (marketing, finance, production, RH) développe l’expertise métier et délimite clairement les responsabilités.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Staff & Line',
            stepTheme: 'Structure hiérarchico-fonctionnelle',
            stepTitle: 'Concilier décision et conseil avec le modèle Staff & Line',
            paragraphText:
              'Pour bénéficier de l’expertise technique sans sacrifier l’unité de commandement, les entreprises combinent deux lignes complémentaires : le **Line** et le **Staff**.\n• **Line (ligne hiérarchique opérationnelle)** : décideurs et exécutants (DG, directeurs opérationnels, chefs de service) qui détiennent seuls le pouvoir d’ordonner.\n• **Staff (état-major / fonctionnel)** : conseillers et experts (direction juridique, contrôle de gestion, audit, stratégie) qui analysent, conseillent et préparent les décisions sans pouvoir de commandement direct.\nExemple : le contrôleur de gestion (Staff) alerte le Directeur Général sur une dérive des coûts, et c’est le DG (Line) qui donne l’ordre de correction au chef d’usine.',
            konanTip:
              'Moyen mnémotechnique : « Line » = pouvoir de commander en ligne directe ; « Staff » = conseil d’état-major sans ordre direct sur les opérateurs.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Dans une structure hiérarchico-fonctionnelle (Staff & Line), quel est le rôle exact d’un service « Staff » comme le service juridique rattaché à la direction générale ?',
              options: [
                'Donner directement des ordres disciplinaires aux ouvriers de production',
                'Conseiller, étudier et éclairer les décideurs hiérarchiques sans exercer d’autorité de commandement direct',
                'Remplacer les clients dans l’acte d’achat',
                'Supprimer les chefs d’équipe opérationnels',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Staff apporte une expertise de conseil et d’aide à la décision, tandis que le pouvoir de commandement reste exclusivement entre les mains de la ligne hiérarchique (Line).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Divisionnelle',
            stepTheme: 'Multi-produits / Multi-marchés',
            stepTitle: 'Quand adopter une structure divisionnelle ?',
            paragraphText:
              'Dès qu’une entreprise se diversifie dans plusieurs métiers, gammes de produits ou zones géographiques très différentes, une structure fonctionnelle unique devient ingérable.\n• **Principe** : l’entreprise est découpée en **divisions** semi-autonomes (par produit, par marché ou par région), disposant chacune de ses propres fonctions (production, marketing, RH) sous l’œil stratégique de la direction générale.\n• **Avantages** : forte réactivité locale/produit, mesure claire de la rentabilité de chaque division.\n• **Limites** : duplication coûteuse des fonctions (plusieurs services RH ou compta) et risque de concurrence interne.\nExemple : un grand groupe ivoirien présent dans l’agro-alimentaire, le BTP et les télécoms crée une division autonome par pôle.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Comparatif des 4 grandes structures organisationnelles',
              caption: 'Positionnement selon la complexité des activités (mono vs multi-activités) et l’unité de commandement.',
              matrix2x2: {
                topAxis: ['Unité de commandement préservée', 'Commandement partagé / spécialisé'],
                leftAxis: ['Mono-activité / Simple', 'Multi-activités / Complexe'],
                topLeft: {
                  title: 'Structure Hiérarchique (Fayol)',
                  items: ['1 seul chef par salarié', 'Clarté et discipline', 'Idéale PME simple et stable'],
                  color: 'blue',
                },
                topRight: {
                  title: 'Structure Fonctionnelle (Taylor)',
                  items: ['Regroupement par métiers', 'Expertise technique élevée', 'Risque de silos / conflits d’ordres'],
                  color: 'violet',
                },
                bottomLeft: {
                  title: 'Structure Divisionnelle',
                  items: ['Autonomie par produit/marché', 'Forte réactivité stratégique', 'Coût de duplication des fonctions'],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Structure Matricielle',
                  items: ['Double axe Fonction × Projet', 'Agilité et innovation élevées', 'Double subordination exigeante'],
                  color: 'orange',
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'À quel type d’entreprise la structure divisionnelle est-elle la mieux adaptée ?',
              options: [
                'À un artisan indépendant travaillant seul sur un produit unique',
                'À une grande entreprise diversifiée gérant plusieurs gammes de produits ou marchés géographiques distincts',
                'À une association étudiante de cinq membres',
                'À une entreprise souhaitant supprimer toute autonomie locale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque division gérant un produit, un marché ou une zone de façon quasi autonome, la structure divisionnelle répond parfaitement aux défis des groupes diversifiés.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Matricielle',
            stepTheme: 'Double commandement Fonction × Projet',
            stepTitle: 'Maîtriser le fonctionnement et les défis de la structure matricielle',
            paragraphText:
              'Très répandue dans l’ingénierie, le conseil, l’aéronautique et les grandes ESN numériques, la structure matricielle croise durablement deux axes d’autorité.\n• **Principe** : un collaborateur dépend simultanément d’un **responsable fonctionnel** (ex. : Directeur Technique IT) et d’un **chef de projet ou de produit** (ex. : Projet Déploiement Mobile Banking).\n• **Avantages** : mutualisation optimale des experts rares, transversalité et forte capacité d’innovation.\n• **Limites** : rupture de l’unité de commandement, tensions sur les priorités et réunions fréquentes.\nExemple : un ingénieur cybersécurité à Abidjan reste rattaché à son département Sécurité mais travaille 6 mois sous l’autorité d’un chef de projet bancaire.',
            keyRule:
              'Structure matricielle = croisement d’une ligne fonctionnelle (métier) et d’une ligne opérationnelle (projet/produit) ; puissante mais génératrice de conflits de priorités si mal arbitrée.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quel est le principal point de vigilance managérial d’une structure matricielle ?',
              options: [
                'L’impossibilité de travailler en équipe pluridisciplinaire',
                'La rupture de l’unité de commandement (double subordination pouvant créer des conflits de priorités)',
                'L’absence de tout responsable fonctionnel',
                'L’obligation de vendre un seul produit identique pendant 50 ans',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque salarié répondant à la fois à son chef métier et à son chef de projet, la structure matricielle exige une excellente communication pour éviter les conflits d’autorité.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Critères de choix',
            stepTheme: 'Facteurs de contingence',
            stepTitle: 'Choisir la structure adaptée selon taille, stratégie et environnement',
            paragraphText:
              'Il n’existe pas de structure idéale valable partout : les travaux sur la contingence montrent qu’une structure performante doit s’ajuster à quatre facteurs clés.\n• **Taille et âge** : informelle et hiérarchique au démarrage, puis fonctionnelle, puis divisionnelle.\n• **Stratégie** : la structure suit la stratégie (Alfred Chandler) — une diversification appelle souvent la divisionnalisation.\n• **Environnement** : stable → bureaucratie mécaniste ; turbulent et innovant → structure organique, matricielle ou par projets.\n• **Technologie** : production unitaire sur mesure ou continue modifie le niveau de formalisation.\nExemple : une startup fintech en environnement instable privilégie une structure souple par équipes produits plutôt qu’une lourde pyramide.',
            konanTip:
              'Retiens la célèbre formule d’Alfred Chandler : « La structure suit la stratégie » (Structure follows strategy).',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Selon la thèse classique d’Alfred Chandler confirmée par les théories de la contingence, comment s’articulent stratégie et structure ?',
              options: [
                'La structure juridique empêche toute évolution stratégique',
                'La structure organisationnelle doit s’adapter et évoluer pour servir la stratégie de l’entreprise',
                'Toutes les entreprises doivent copier la structure militaire quelle que soit leur activité',
                'Plus l’environnement est instable, plus il faut multiplier les échelons hiérarchiques rigides',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chandler a montré que lorsqu’une entreprise change de stratégie (ex. : diversification), elle doit adapter sa structure organisationnelle sous peine d’inefficacité.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Nouvelles formes',
            stepTheme: 'Entreprise en réseau & plateformes',
            stepTitle: 'Identifier les structures modernes en réseau et par projets',
            paragraphText:
              'À l’ère numérique, de nombreuses entreprises dépassent les frontières rigides de la pyramide classique pour gagner en agilité et en vitesse.\n• **Structure par projets / équipes agiles** : petites équipes autonomes pluridisciplinaires (squads) dédiées à une fonctionnalité ou un client.\n• **Entreprise en réseau (virtuelle)** : cœur stratégique léger coordonnant un écosystème de partenaires externes (sous-traitants industriels, logistique, développeurs).\nExemple : une marque de commerce électronique conçoit ses produits et gère sa marque en interne, mais s’appuie en réseau sur des ateliers partenaires, des prestataires cloud et des flottes de livraison externes.',
            keyRule:
              'L’entreprise en réseau conserve en interne son cœur de valeur (design, marque, pilotage) et coordonne des partenaires spécialisés.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p2_q7',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui caractérise une « entreprise en réseau » moderne ?',
              options: [
                'Elle refuse toute collaboration avec des partenaires extérieurs',
                'Elle recentre ses ressources internes sur son cœur de métier et coordonne un écosystème de partenaires et sous-traitants spécialisés',
                'Elle fonctionne sans aucun contrat ni objectif commercial',
                'Elle possède obligatoirement 10 000 salariés en usine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’entreprise en réseau combine une structure centrale agile et des partenariats externes durables pour produire, livrer ou innover rapidement.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch3_p3',
        order: 3,
        title: 'Direction, centralisation vs décentralisation, délégation et niveaux de décision',
        summary:
          'Maîtriser les trois niveaux de décision (stratégique, tactique, opérationnel), différencier centralisation et décentralisation, réussir la délégation et choisir un style de direction.',
        conceptExplanation:
          "Diriger une entreprise consiste à orienter ses choix, mobiliser ses membres et arbitrer l’allocation des ressources. Igor Ansoff classe les décisions selon trois niveaux hiérarchiques et temporels : décisions stratégiques (long terme, sommet, irréversibles, ex. lancement d’une filiale), décisions tactiques/administratives (moyen terme, encadrement, organisation des moyens, ex. campagne de recrutement ou plan de formation) et décisions opérationnelles (court terme, quotidien, réversibles, ex. réapprovisionnement d’un stock).\n\nL’exercice du pouvoir oscille entre centralisation (concentration des décisions au sommet : cohérence mais lenteur) et décentralisation (transfert de pouvoir de décision aux unités inférieures : réactivité et motivation mais exigence de contrôle). La délégation d’autorité confie une mission, les moyens et le pouvoir de décider à un subordonné, tout en laissant au délégant la responsabilité finale. Enfin, les styles de direction (Likert : autoritaire, paternaliste, consultatif, participatif) s’adaptent au contexte et à la maturité des équipes.",
        formulas: [
          {
            name: 'Règle d’or de la délégation',
            formula: '\\text{Délégation efficace} = \\text{Mission claire} + \\text{Moyens adaptés} + \\text{Pouvoir d’action} + \\text{Contrôle}',
            note: 'On délègue l’exécution et une marge de décision, jamais la responsabilité morale ultime vis-à-vis de l’organisation.',
          },
        ],
        keyRule:
          'Centraliser assure la cohérence ; décentraliser accélère la réactivité. Déléguer implique de confier pouvoir et moyens tout en assumant la responsabilité finale du suivi.',
        workedExample: {
          title: 'Réorganisation décisionnelle d’un réseau d’agences bancaires',
          statement:
            'Une banque ivoirienne exigeait jusqu’ici la signature du Directeur Général au siège d’Abidjan pour tout crédit PME supérieur à 2 M FCFA, causant 4 semaines d’attente à San-Pédro et Korhogo. Quelle évolution organisationnelle recommander, et comment la sécuriser ?',
          methodSteps: [
            '1) Diagnostic : centralisation excessive des décisions tactiques/opérationnelles, provoquant lenteur et perte de clients.',
            '2) Action recommandée : décentraliser par délégation encadrée — autoriser les directeurs régionaux à valider les crédits jusqu’à 25 M FCFA selon une grille de risque standardisée.',
            '3) Contrôle : instaurer un reporting hebdomadaire et des audits aléatoires pour préserver la cohérence et maîtriser le risque d’impayés.',
          ],
          conclusion:
            'Une décentralisation contrôlée réduit les délais de réponse à 48 heures tout en protégeant la qualité du portefeuille de crédits.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Niveaux de décision',
            stepTheme: 'Typologie d’Igor Ansoff',
            stepTitle: 'Classer décisions stratégiques, tactiques et opérationnelles',
            paragraphText:
              'Toutes les décisions prises dans une entreprise n’ont ni la même portée dans le temps ni le même niveau de risque. Igor Ansoff distingue trois strates hiérarchiques.\n• **Décisions stratégiques** (Direction Générale, long terme) : engagent l’avenir et la survie, peu réversibles (ex. : fusion, implantation dans un autre pays UEMOA).\n• **Décisions tactiques / administratives** (cadres, moyen terme) : organisent les ressources et structurent les moyens (ex. : achat d’un progiciel ERP, recrutement annuel).\n• **Décisions opérationnelles** (agents de maîtrise / terrain, court terme) : assurent l’exploitation courante, répétitives et réversibles (ex. : planning hebdomadaire, remise ponctuelle).\nExemple : ouvrir une usine est stratégique ; choisir son fournisseur de machines est tactique ; commander les cartons du mois est opérationnel.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Pyramide des niveaux de décision (Ansoff)',
              caption: 'Du sommet stratégique (long terme, fort risque) à la base opérationnelle (court terme, quotidien).',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: 'Long terme',
                    title: 'Décisions Stratégiques',
                    subtitle: 'Direction Générale — Orientations globales, peu réversibles',
                    color: 'violet',
                  },
                  {
                    badge: 'Moyen terme',
                    title: 'Décisions Tactiques (Gestion)',
                    subtitle: 'Cadres intermédiaires — Allocation et organisation des ressources',
                    color: 'blue',
                  },
                  {
                    badge: 'Court terme',
                    title: 'Décisions Opérationnelles',
                    subtitle: 'Équipes terrain — Exploitation quotidienne, répétitive et réversible',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Parmi les décisions suivantes prises dans une entreprise de télécoms, laquelle est une décision STRATÉGIQUE ?',
              options: [
                'Accorder trois jours de congé exceptionnel à un technicien',
                'Commander 200 ramettes de papier pour le siège',
                'Investir plusieurs milliards FCFA pour acquérir une licence 5G et entrer sur le marché d’un pays voisin',
                'Fixer les horaires de pause de l’équipe d’accueil pour la semaine',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’acquisition d’une licence 5G et l’expansion internationale engagent l’entreprise à long terme avec un risque financier majeur et difficilement réversible : c’est une décision stratégique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Pouvoir',
            stepTheme: 'Centralisation vs Décentralisation',
            stepTitle: 'Comparer centralisation et décentralisation des décisions',
            paragraphText:
              'Répartir le pouvoir de décision entre le siège et le terrain est l’un des arbitrages les plus délicats de la gouvernance.\n• **Centralisation** : l’essentiel des décisions reste concentré au sommet (Direction Générale). Garantit une cohérence d’ensemble et un contrôle strict, mais ralentit l’action et démotive parfois les cadres locaux.\n• **Décentralisation** : transfert réel du pouvoir de décision vers les niveaux inférieurs ou filiales. Accroît la réactivité, l’adaptation locale et la motivation, mais exige des outils de contrôle rigoureux.\nExemple : une chaîne de supermarchés centralise les achats nationaux (pour négocier les prix) mais décentralise les promotions locales auprès des directeurs de magasin.',
            keyRule:
              'Centralisation = cohérence maximale mais risque de lenteur ; Décentralisation = réactivité et responsabilisation mais nécessité d’un contrôle de gestion solide.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est l’avantage principal de la décentralisation des décisions dans un réseau multi-sites ?',
              options: [
                'Supprimer tout besoin de reporting financier',
                'Accélérer la réactivité face aux spécificités locales et responsabiliser les équipes de terrain',
                'Empêcher les directeurs d’agence de prendre la moindre initiative',
                'Réduire l’entreprise à un seul dirigeant qui signe chaque facture',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La décentralisation rapproche la décision du terrain, ce qui améliore la rapidité de réponse aux clients et renforce la motivation des responsables locaux.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Délégation',
            stepTheme: 'Pouvoir et responsabilité',
            stepTitle: 'Distinguer délégation de tâches et abandon de responsabilité',
            paragraphText:
              'Beaucoup de managers hésitent à déléguer par peur de perdre le contrôle, ou au contraire se déchargent totalement d’un dossier sans suivi.\n• **Véritable délégation** : confier à un collaborateur des objectifs précis, l’autorité pour décider et les moyens nécessaires (budget, temps, équipe).\n• **Principe fondamental** : le déléguant reste toujours responsable en dernier ressort du résultat final devant la direction ou le client.\n• **Différence avec la décentralisation** : la décentralisation est structurelle et durable dans l’organigramme, tandis que la délégation peut être ciblée sur une mission ou un projet.\nExemple : un directeur marketing délègue l’organisation d’un salon tech à son chef de projet avec un budget validé et des points d’étape hebdomadaires.',
            konanTip:
              'Piège classique : déléguer une tâche sans donner les moyens ni l’autorité de décider voue le collaborateur à l’échec (et reste une faute du manager) !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Lorsqu’un directeur délègue une mission importante à un cadre de son équipe, qui demeure responsable en dernier ressort du résultat vis-à-vis de la direction générale ?',
              options: [
                'Uniquement les clients externes',
                'Le directeur qui a délégué reste responsable en dernier ressort, même s’il doit suivre et accompagner son cadre',
                'Aucun des deux : la responsabilité disparaît par la délégation',
                'Le service comptable exclusivement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On peut déléguer l’exécution et une autorité d’action, mais le supérieur conserve toujours la responsabilité ultime du résultat global et du contrôle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Styles de direction',
            stepTheme: 'Typologie de Rensis Likert',
            stepTitle: 'Identifier les quatre styles de direction selon Rensis Likert',
            paragraphText:
              'La façon dont le dirigeant exerce son autorité influence directement le climat social, la créativité et la productivité de l’entreprise. Rensis Likert distingue quatre styles :\n• **Autoritaire exploiteur** : décisions imposées par la crainte et la sanction, communication uniquement descendante.\n• **Autoritaire paternaliste** : décisions centralisées mais accompagnées de récompenses et d’une protection bienveillante (« le père de famille »).\n• **Consultatif** : le chef consulte les équipes avant de trancher seul ; communication bidirectionnelle.\n• **Participatif** : prise de décision collective, responsabilisation forte et travail en groupe.\nExemple : face à une crise sociale (menace de grève), le style participatif/consultatif permet d’écouter les griefs terrain et de co-construire des solutions.',
            keyRule:
              'Likert identifie 4 styles : autoritaire exploiteur, paternaliste, consultatif et participatif (le plus mobilisateur pour des équipes qualifiées).',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Un dirigeant écoute systématiquement les avis et suggestions de ses chefs de service lors d’une réunion avant de prendre la décision finale. Quel style de direction (Likert) pratique-t-il ?',
              options: [
                'Le style autoritaire exploiteur',
                'Le style consultatif',
                'L’anarchie totale',
                'La bureaucratie sans contact humain',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans le style consultatif, le dirigeant sollicite les idées et avis de ses collaborateurs tout en conservant le pouvoir de décision final.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Crise & Changement',
            stepTheme: 'Adaptation du style',
            stepTitle: 'Adapter le style de direction au contexte et à la crise',
            paragraphText:
              'Aucun style de direction n’est optimal dans 100 % des cas : l’efficacité dépend de l’urgence, du niveau de qualification des salariés et du climat social.\n• **Urgence critique (incendie, cyberattaque immédiate)** : une direction directive rapide s’impose pour sécuriser l’activité dans l’heure.\n• **Conflit social, grève ou innovation** : le style participatif ou consultatif est bien plus efficace car il désamorce les tensions et libère les idées de terrain.\n• **Piège du laisser-faire en crise** : l’absence de cap aggrave la désorganisation.\nExemple : lors d’une grève de chauffeurs-livreurs, imposer des sanctions autoritaires durcit le blocage, tandis qu’ouvrir des ateliers participatifs sur les tournées restaure le dialogue.',
            konanTip:
              'En cas pratique d’examen : justifie toujours ton choix de style (souvent participatif/consultatif face à une crise humaine ou un projet d’innovation) par ses effets sur la motivation et la qualité des solutions.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Face à un conflit social interne et à une forte concurrence exigeant des idées nouvelles, pourquoi le style participatif est-il préférable au style autoritaire ?',
              options: [
                'Parce qu’il supprime tous les objectifs de l’entreprise',
                'Parce qu’il implique les collaborateurs dans les solutions, réduit les tensions sociales et valorise leur expertise terrain',
                'Parce qu’il permet au dirigeant de ne plus jamais venir travailler',
                'Parce qu’il interdit toute discussion avec les salariés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le management participatif favorise l’adhésion, apaise le climat social par l’écoute et capte les améliorations concrètes proposées par ceux qui vivent le terrain.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Direction par objectifs',
            stepTheme: 'DPO / DPPO',
            stepTitle: 'Piloter les équipes par la Direction Par Objectifs (DPO)',
            paragraphText:
              'Popularisée par Peter Drucker et Octave Gélinier (DPPO : Direction Participative Par Objectifs), cette méthode remplace le contrôle permanent des gestes par un contrat d’objectifs négociés.\n• **Principe** : supérieur et collaborateur fixent ensemble des objectifs clairs, mesurables et datés, alignés sur la stratégie globale.\n• **Autonomie et évaluation** : le collaborateur choisit ses moyens dans son périmètre et fait l’objet d’une évaluation périodique basée sur les résultats atteints.\nExemple : un responsable commercial s’engage avec son directeur sur 25 nouveaux clients PME signés au semestre, avec un point d’avancement mensuel et une prime sur objectif.',
            keyRule:
              'La DPO / DPPO concilie autonomie d’action des équipes et rigueur du pilotage par résultats mesurables.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Quel est le principe fondateur de la Direction Participative Par Objectifs (DPPO) ?',
              options: [
                'Négocier des objectifs précis avec chaque responsable, lui laisser une autonomie de moyens et évaluer les résultats atteints',
                'Dicter chaque geste minute par minute sans jamais expliquer le but final',
                'Éliminer toute évaluation de performance dans l’entreprise',
                'Laisser chaque salarié choisir librement son propre salaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La DPPO associe les collaborateurs à la fixation de leurs objectifs mesurables, leur accorde l’autonomie d’exécution et fonde le suivi sur les résultats.',
            },
          },
        ],
      }),
    ],
  },
  // ==========================================================================
  // CHAPITRE 4 : GRANDES FONCTIONS, FINANCEMENT ET TRANSFORMATION DIGITALE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_oge_ch4',
    subjectId: 'lmd_oge',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 — Grandes fonctions de l’entreprise, financement et transformation digitale',
    summary:
      'Maîtriser les fonctions opérationnelles et support (Direction, Production/Logistique, Commerciale, RH), la gestion financière (rentabilité, solvabilité, FRNG/BFR, autofinancement, emprunt, capital-risque, leasing) et l’impact des SI/ERP et du e-business.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Organisation et Gestion des Entreprises',
    points: [
      makePoint({
        id: 'lmd_entd_l1_oge_ch4_p1',
        order: 1,
        title: 'Cartographie des fonctions clés : Direction, Production/Logistique, Commerciale et RH',
        summary:
          'Comprendre le rôle et la complémentarité des grandes fonctions de l’entreprise : pilotage général, chaîne logistique et production, marketing/vente et gestion des ressources humaines.',
        conceptExplanation:
          "Pour accomplir son objet économique sans heurts, l’entreprise répartit ses activités en grandes fonctions spécialisées mais interdépendantes :\n1) La fonction Direction Générale : prévoit, organise, coordonne et contrôle l’ensemble des politiques stratégiques.\n2) La fonction Production et Logistique (Supply Chain) : assure l’approvisionnement, la gestion optimale des stocks (éviter ruptures et surstockage), la fabrication et l’acheminement vers le client dans les meilleurs coûts et délais.\n3) La fonction Commerciale et Marketing : étudie le marché, conçoit l’offre (produit, prix, distribution, communication — les 4P) et pilote les équipes de vente et la fidélisation.\n4) La fonction Ressources Humaines (RH) : gère le recrutement, l’intégration, la rémunération, la formation, le climat social et la GPEC (Gestion Prévisionnelle des Emplois et des Compétences).",
        formulas: [
          {
            name: 'Arbitrage coût du stock (modèle de Wilson)',
            formula: '\\text{Coût total de stockage} = \\text{Coût de passation des commandes} + \\text{Coût de possession du stock}',
            note: 'Commander trop souvent augmente les frais de livraison ; commander en trop grande quantité immobilise de la trésorerie et risque la péremption.',
          },
        ],
        keyRule:
          'Les fonctions de l’entreprise forment une chaîne solidaire : une promesse commerciale brillante échoue si la logistique ne livre pas ou si les RH ne forment pas les équipes.',
        workedExample: {
          title: 'Coordination inter-fonctionnelle lors d’un pic commercial (Black Friday / Fêtes)',
          statement:
            'Un site e-commerce ivoirien lance une grande campagne promotionnelle de fin d’année (+250 % de commandes prévues). Expliquez ce que doivent anticiper les fonctions Commerciale, Logistique/Approvisionnement, RH et Direction Générale.',
          methodSteps: [
            '1) Commercial/Marketing : calibrer les promotions, prévoir les volumes de demande et préparer le service client.',
            '2) Production/Logistique : sécuriser les stocks de sécurité auprès des fournisseurs et renforcer les tournées de livraison.',
            '3) Ressources Humaines : recruter et former à l’avance des préparateurs de commandes et conseillers temporaires.',
            '4) Direction Générale : coordonner le calendrier entre ces pôles et débloquer le budget de trésorerie nécessaire.',
          ],
          conclusion:
            'Le succès d’une campagne dépend de la synchronisation amont entre prévisions commerciales, capacités logistiques et renforts humains.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fonction Direction',
            stepTheme: 'Pilotage global',
            stepTitle: 'Cerner le rôle de la fonction Direction Générale',
            paragraphText:
              'Héritière de la « fonction administrative » identifiée par Henri Fayol dès 1916, la Direction Générale joue le rôle de chef d’orchestre de toute l’organisation.\n• **Vision et stratégie** : définir la mission, les objectifs pluriannuels et les grands investissements.\n• **Organisation et coordination** : concevoir la structure, arbitrer les budgets entre services et résoudre les conflits inter-fonctionnels.\n• **Contrôle et représentation** : suivre les indicateurs de performance et représenter l’entreprise devant les actionnaires, banques et pouvoirs publics.\nExemple : lorsque la production réclame plus de stocks et que la finance exige moins de dépenses, la Direction Générale tranche en fonction de la stratégie globale.',
            keyRule:
              'La Direction Générale ne produit pas et ne vend pas directement : elle donne le cap, alloue les ressources et assure la cohérence entre toutes les fonctions.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle mission incombe spécifiquement à la fonction Direction Générale au sein de l’entreprise ?',
              options: [
                'Saisir manuellement chaque écriture comptable quotidienne',
                'Fixer la stratégie globale, arbitrer les ressources entre services et assurer la coordination d’ensemble',
                'Assurer uniquement la maintenance des imprimantes de bureau',
                'Effectuer personnellement toutes les livraisons clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Direction Générale pilote l’entreprise dans sa globalité : vision stratégique, allocation budgétaire, coordination des fonctions et contrôle des résultats.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Production',
            stepTheme: 'Approvisionnement et fabrication',
            stepTitle: 'Piloter la fonction Production et Approvisionnement',
            paragraphText:
              'La fonction Production transforme les matières et composants en biens ou services conformes aux attentes du marché, en optimisant trois critères : qualité, coût et délai.\n• **Approvisionnement (Achats)** : sélectionner les fournisseurs fiables, négocier prix et délais de paiement, garantir la continuité des flux.\n• **Méthodes et ordonnancement** : planifier les gammes opératoires et l’utilisation des machines.\n• **Contrôle qualité** : prévenir les défauts (démarche Zéro Défaut / normes ISO) plutôt que réparer après coup.\nExemple : une usine d’assemblage d’ordinateurs optimise ses achats de composants et planifie les lots pour livrer ses clients sans retard.',
            konanTip:
              'Ne réduis pas la fonction Production aux seules usines : dans une société de services numériques, « produire » consiste à développer, tester et héberger les logiciels !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quels sont les trois impératifs permanents que cherche à concilier la fonction Production ?',
              options: [
                'Publicité, fiscalité et dividendes',
                'Qualité, maîtrise des coûts et respect des délais',
                'Recrutement, syndicats et bilans juridiques',
                'Emprunt bancaire, leasing et bourse',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La performance productive repose sur le triptyque Qualité – Coût – Délai (QCD) : livrer un produit conforme, au coût le plus compétitif et dans les temps promis.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Logistique & Stocks',
            stepTheme: 'Gestion des stocks',
            stepTitle: 'Éviter rupture de stock et surstockage dans la Supply Chain',
            paragraphText:
              'La logistique (Supply Chain) pilote l’ensemble des flux physiques et informationnels depuis les fournisseurs jusqu’au client final, avec un enjeu critique sur les stocks.\n• **Risque de rupture (stock insuffisant)** : arrêt de fabrication, ventes manquées, perte de clients mécontents.\n• **Risque de surstockage (stock excessif)** : immobilisation inutile de trésorerie, frais d’entrepôt, risque de vol, d’obsolescence ou de péremption.\n• **Solutions modernes** : stock de sécurité, méthode ABC (suivre prioritairement les 20 % d’articles qui pèsent 80 % de la valeur) et flux tendus (Juste-à-Temps).\nExemple : un distributeur de smartphones suit chaque jour ses modèles phares (classe A) pour ne jamais rater une vente ni stocker d’invendus obsolètes.',
            keyRule:
              'La bonne gestion des stocks maintient un niveau juste suffisant pour éviter les ruptures tout en libérant un maximum de trésorerie.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Pourquoi le surstockage excessif constitue-t-il un danger financier pour une entreprise de distribution informatique ?',
              options: [
                'Parce qu’il augmente les ventes trop rapidement',
                'Parce qu’il immobilise la trésorerie et expose les produits à l’obsolescence technologique et aux coûts de stockage',
                'Parce qu’il supprime automatiquement les impôts',
                'Parce qu’il oblige les clients à payer plus cher',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un stock dormant consomme du cash (augmente le BFR), coûte cher en entreposage et perd rapidement de la valeur (obsolescence ou péremption).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Commerciale',
            stepTheme: 'Marketing et Vente',
            stepTitle: 'Articuler marketing stratégique et force de vente',
            paragraphText:
              'Produire efficacement ne sert à rien si l’offre ne rencontre pas sa clientèle solvable : la fonction Commerciale et Marketing crée et capte la demande.\n• **Marketing d’études et stratégique** : analyser les besoins clients, segmenter le marché, cibler et positionner l’offre.\n• **Marketing opérationnel (Mix 4P)** : ajuster Produit, Prix, Distribution (Place) et Communication (Promotion).\n• **Action commerciale (Vente)** : prospecter, négocier, conclure les ventes et fidéliser via le CRM et le service après-vente.\nExemple : pour lancer un forfait data étudiant, l’équipe marketing fixe un prix accessible et des canaux de vente Mobile Money, puis les commerciaux animent les campus.',
            konanTip:
              'Retiens que vendre coûte souvent 5 à 7 fois moins cher auprès d’un client déjà conquis et fidélisé que de conquérir un nouveau prospect !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Dans la fonction commerciale, quel ensemble correspond aux « 4P » du marketing opérationnel ?',
              options: [
                'Planification, Production, Paie, Profit',
                'Produit, Prix, Distribution (Place), Communication (Promotion)',
                'Pouvoir, Prêt, Patrimoine, Partenariat',
                'Personnel, Procédure, Projet, Prévention',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le marketing mix repose sur quatre leviers d’action : Product (Produit), Price (Prix), Place (Distribution) et Promotion (Communication).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Ressources Humaines',
            stepTheme: 'Gestion du capital humain',
            stepTitle: 'Maîtriser les missions stratégiques de la fonction RH',
            paragraphText:
              'Longtemps réduite à l’administration administrative de la paie et des congés, la fonction Ressources Humaines (RH) est devenue un levier stratégique majeur.\n• **Acquisition des talents** : définir les fiches de poste, recruter et intégrer (onboarding).\n• **Développement des compétences** : formation continue, évaluation annuelle et gestion des carrières.\n• **Rémunération et climat social** : politique salariale motivante et équitable, dialogue avec les syndicats, santé/sécurité au travail.\n• **GPEC (Gestion Prévisionnelle des Emplois et des Compétences)** : anticiper les métiers de demain (ex. : cybersécurité, data) pour former ou recruter à temps.',
            keyRule:
              'La GPEC permet d’anticiper les écarts entre les compétences actuelles de l’entreprise et ses besoins stratégiques futurs.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de la GPEC (Gestion Prévisionnelle des Emplois et des Compétences) ?',
              options: [
                'Calculer uniquement les intérêts bancaires sur 10 ans',
                'Anticiper l’évolution des métiers et adapter les compétences du personnel aux besoins futurs de l’entreprise',
                'Remplacer tous les salariés par des prestataires externes chaque mois',
                'Supprimer les entretiens annuels et la formation continue',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La GPEC aligne à moyen terme le capital humain sur la stratégie (plans de formation, reconversion, recrutements ciblés) face aux mutations technologiques et de marché.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synergie',
            stepTheme: 'Chaîne de valeur',
            stepTitle: 'Identifier les fonctions principales et fonctions de support',
            paragraphText:
              'Michael Porter propose de classer les activités d’une entreprise dans une « chaîne de valeur » pour repérer où naît l’avantage concurrentiel.\n• **Activités principales** : participent directement à la création physique ou commerciale du produit (logistique amont, production, logistique aval, commercialisation/vente, services après-vente).\n• **Activités de soutien (support)** : permettent aux activités principales de fonctionner efficacement (direction/infrastructure, RH, R&D/technologie, achats).\nExemple : pour une plateforme de transport VTC, le développement algorithmique (technologie) et le recrutement des chauffeurs (RH) soutiennent directement la réalisation des trajets (activité principale).',
            konanTip:
              'Si un conflit éclate entre deux services (ex. : commerciaux promettant des délais impossibles à l’atelier), c’est un défaut d’interface dans la chaîne de valeur !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Dans la chaîne de valeur de Michael Porter, comment classe-t-on la Gestion des Ressources Humaines et la Recherche & Développement ?',
              options: [
                'Comme des consommations intermédiaires détruites',
                'Comme des activités de soutien (support) qui appuient l’ensemble des activités principales',
                'Comme des parties prenantes externes',
                'Comme des financements à court terme',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans le modèle de Porter, l’infrastructure, les RH, le développement technologique et les approvisionnements sont des fonctions de soutien transversales.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch4_p2',
        order: 2,
        title: 'Fonction comptable et financière : équilibre financier et modes de financement',
        summary:
          'Maîtriser les objectifs de la fonction financière (rentabilité, solvabilité, liquidité), la règle d’équilibre financier (FRNG/BFR) et le choix entre autofinancement, capital, emprunt et leasing.',
        conceptExplanation:
          "La fonction comptable et financière enregistre les flux économiques, pilote la trésorerie et procure à l’entreprise les capitaux nécessaires au meilleur coût. Elle poursuit trois objectifs permanents : assurer la **rentabilité** (rémunérer les capitaux investis), garantir la **solvabilité** (capacité à honorer toutes ses dettes à moyen/long terme) et préserver la **liquidité** (capacité à payer ses échéances immédiates sans blocage).\n\nEn vertu de la règle d’équilibre financier, les emplois durables (immobilisations) doivent être financés par des ressources durables (capitaux propres + emprunts long terme : Fonds de Roulement Net Global positif), tandis que le Besoin en Fonds de Roulement (BFR) et la trésorerie ajustent le cycle court. Les principales sources de financement comprennent : l’autofinancement (interne), l’augmentation de capital et le capital-risque/business angels (fonds propres externes), l’emprunt bancaire ou obligataire, le crédit-bail/leasing (location avec option d’achat), les subventions publiques et les crédits court terme (escompte, découvert).",
        formulas: [
          {
            name: 'Équilibre fondamental de trésorerie',
            formula: '\\text{Trésorerie Nette (TN)} = \\text{FRNG} - \\text{BFR}',
            note: 'FRNG = Ressources stables − Actif immobilisé ; BFR = Stocks + Créances clients − Dettes fournisseurs.',
          },
        ],
        keyRule:
          'Un investissement durable (machine, serveur, bâtiment) se finance par des ressources durables (autofinancement, capital, emprunt LT, leasing), jamais par un découvert bancaire à court terme !',
        workedExample: {
          title: 'Plan de financement d’une extension d’atelier de transformation digitale',
          statement:
            'Une PME souhaite acquérir un parc de serveurs et équipements de 30 000 000 FCFA amortissables sur 5 ans. Elle dispose de 10 000 000 FCFA d’autofinancement, refuse de diluer son capital familial et hésite entre un découvert bancaire, un emprunt à 5 ans ou un crédit-bail (leasing). Quelle combinaison recommander ?',
          methodSteps: [
            '1) Règle d’équilibre : les équipements étant durables (5 ans), le découvert bancaire (très court terme, coûteux et révocable) est formellement à proscrire.',
            '2) Autofinancement partiel : mobiliser 10 000 000 FCFA en apport interne sans entamer toute la trésorerie courante.',
            '3) Complément de 20 000 000 FCFA : emprunt bancaire à moyen terme (5 ans) si l’entreprise a des garanties et une capacité de remboursement solide, OU crédit-bail (leasing) pour louer les serveurs avec option d’achat sans immobiliser de garantie lourde.',
          ],
          conclusion:
            'Combiner 10 M FCFA d’autofinancement et 20 M FCFA d’emprunt moyen terme (ou crédit-bail) respecte l’équilibre financier et préserve le contrôle des fondateurs.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Objectifs financiers',
            stepTheme: 'Rentabilité, Solvabilité, Liquidité',
            stepTitle: 'Distinguer rentabilité, solvabilité et liquidité',
            paragraphText:
              'La fonction financière ne se limite pas à la tenue des comptes : elle protège la santé vitale de l’entreprise sur trois horizons complémentaires.\n• **Rentabilité** : rapport entre le résultat dégagé et les moyens engagés (capitaux ou chiffre d’affaires) ; indispensable pour rémunérer les investisseurs.\n• **Solvabilité** : aptitude de l’entreprise à payer l’ensemble de ses dettes sur la durée grâce à la valeur de ses actifs.\n• **Liquidité** : disponibilité immédiate de cash (banque, caisse) pour régler salaires, loyers et fournisseurs à l’échéance du jour.\nExemple : une entreprise très rentable sur le papier mais dont tous les clients paient à 120 jours peut manquer de liquidité et se retrouver en cessation de paiements !',
            keyRule:
              'On peut être rentable comptablement mais illiquide en trésorerie : la liquidité assure la survie à court terme, la solvabilité et la rentabilité assurent la solidité à long terme.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle notion financière désigne précisément la capacité de l’entreprise à faire face à ses dépenses et dettes exigibles immédiatement grâce à ses disponibilités ?',
              options: [
                'La liquidité',
                'La notoriété de marque',
                'L’organigramme matriciel',
                'La segmentation marketing',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La liquidité mesure la capacité à honorer les engagements financiers à très court terme (trésorerie disponible). La solvabilité porte sur l’ensemble du passif à terme.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Équilibre financier',
            stepTheme: 'FRNG, BFR et Trésorerie',
            stepTitle: 'Appliquer la relation FRNG − BFR = Trésorerie Nette',
            paragraphText:
              'L’analyse du bilan fonctionnel permet d’anticiper les crises de trésorerie avant qu’elles ne paralysent l’exploitation quotidienne.\n• **FRNG (Fonds de Roulement Net Global)** = Ressources stables − Actif immobilisé. S’il est positif, le haut de bilan finance tous les investissements et laisse un coussin de sécurité.\n• **BFR (Besoin en Fonds de Roulement)** = Stocks + Créances clients − Dettes fournisseurs. Il représente le décalage de cash lié au cycle d’exploitation.\n• **Trésorerie Nette (TN)** = FRNG − BFR. Si le BFR dépasse le FRNG, la trésorerie devient négative (recours au découvert).\nExemple : si FRNG = 25 M FCFA et BFR = 18 M FCFA, la Trésorerie Nette est saine (+7 M FCFA).',
            formula: {
              name: 'Relation fondamentale de trésorerie',
              formula: '\\text{TN} = \\text{FRNG} - \\text{BFR}',
              note: 'Réduire les délais clients ou les stocks dormants diminue le BFR et améliore immédiatement la trésorerie.',
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Une PME affiche un Fonds de Roulement Net Global (FRNG) de 15 000 000 FCFA et un Besoin en Fonds de Roulement (BFR) de 21 000 000 FCFA. Quelle est sa Trésorerie Nette ?',
              options: [
                '+36 000 000 FCFA (excédent large)',
                '+6 000 000 FCFA',
                '−6 000 000 FCFA (déficit de trésorerie)',
                '0 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'TN = FRNG − BFR = 15 000 000 − 21 000 000 = −6 000 000 FCFA. Le BFR excédant le FRNG, l’entreprise doit recourir à des concours bancaires courants (découvert).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Choix financier',
            stepTheme: 'Arbre de décision du financement',
            stepTitle: 'Sélectionner le bon mode de financement selon le besoin',
            paragraphText:
              'Choisir un financement ne se résume pas à comparer les taux d’intérêt : le dirigeant doit aligner la durée du besoin, la capacité d’endettement et le souhait de garder le contrôle du capital.\n• **Besoin ponctuel (trésorerie CT)** : escompte de traites, affacturage, facilité de caisse ou découvert autorisé.\n• **Investissement durable avec CAF suffisante** : autofinancement (zéro intérêt, indépendance totale).\n• **Investissement durable sans dilution souhaitée** : emprunt bancaire moyen/long terme ou crédit-bail (leasing).\n• **Projet innovant risqué (startup)** : augmentation de capital, business angels ou capital-risque (pas de mensualité fixe, mais partage du pouvoir).',
            visualSchema: {
              type: 'flowchart',
              title: 'Arbre décisionnel : choisir son mode de financement',
              caption: 'Toujours apparier la durée de la ressource à la durée de l’emploi à financer.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: 'Nature du besoin à financer ?',
                    sublabel: 'Cycle d’exploitation (CT) ou Investissement durable (MLT)',
                    kind: 'decision',
                    color: 'blue',
                    branchLabel: 'Court terme (BFR)',
                    branchTarget: 'Escompte, affacturage, découvert autorisé',
                  },
                  {
                    label: 'Autofinancement disponible suffisant ?',
                    sublabel: 'Vérifier la CAF et préserver un coussin de trésorerie',
                    kind: 'decision',
                    color: 'violet',
                    branchLabel: 'Oui',
                    branchTarget: 'Financement interne (indépendance, 0 intérêt)',
                  },
                  {
                    label: 'Projet risqué / startup ou actif matériel ?',
                    sublabel: 'Arbitrer entre endettement et ouverture du capital',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Actif matériel garanti',
                    branchTarget: 'Emprunt bancaire MLT ou Crédit-bail (Leasing)',
                  },
                  {
                    label: 'Ouverture de capital (Fonds propres externes)',
                    sublabel: 'Business angels, capital-risque ou augmentation de capital',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Quel mode de financement est le PLUS risqué et inadapté pour financer la construction d’un entrepôt amortissable sur 15 ans ?',
              options: [
                'Un emprunt bancaire à long terme',
                'Un découvert bancaire à très court terme',
                'Une augmentation de capital',
                'Un crédit-bail immobilier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Financer un actif immobilier durable (15 ans) par un découvert bancaire révocable à tout moment et très coûteux viole la règle d’équilibre financier.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Fonds propres',
            stepTheme: 'Autofinancement vs Augmentation de capital',
            stepTitle: 'Comparer autofinancement, capital-risque et augmentation de capital',
            paragraphText:
              'Les financements par fonds propres n’imposent aucune échéance fixe de remboursement, ce qui protège les jeunes entreprises contre l’asphyxie financière.\n• **Autofinancement** : utilise les réserves et amortissements générés en interne ; zéro coût d’intérêt et aucune perte de pouvoir, mais limité par les bénéfices passés.\n• **Augmentation de capital / Capital-risque / Business angels** : apporte des fonds importants et parfois du réseau/conseil (smart money), mais provoque une **dilution** (réduction du pourcentage de parts et partage des décisions avec les nouveaux actionnaires).\nExemple : une startup fintech lève 200 M FCFA auprès d’un fonds de capital-risque en échange de 20 % de son capital.',
            keyRule:
              'Autofinancement = indépendance mais montant limité ; Ouverture de capital = montant élevé sans dette mais dilution du contrôle des fondateurs.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quel effet principal entraîne l’entrée d’un fonds de capital-risque lors d’une augmentation de capital d’une startup ?',
              options: [
                'L’obligation de rembourser chaque mois des intérêts fixes à la banque',
                'Le renforcement des fonds propres sans dette, accompagné d’une dilution du pourcentage de contrôle des fondateurs',
                'La transformation automatique en coopérative agricole',
                'L’interdiction d’embaucher de nouveaux salariés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’augmentation de capital renforce l’assise financière sans remboursement obligatoire, mais réduit mécaniquement la quote-part de capital et de vote des anciens associés (dilution).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Crédit-bail',
            stepTheme: 'Leasing',
            stepTitle: 'Maîtriser le fonctionnement du crédit-bail (leasing)',
            paragraphText:
              'Très utilisé pour financer véhicules, engins de chantier ou équipements informatiques, le crédit-bail (leasing) permet d’utiliser un bien neuf sans en payer immédiatement le prix total.\n• **Mécanisme** : une société financière achète le bien choisi par l’entreprise et le lui loue moyennant des loyers périodiques.\n• **Triple issue en fin de contrat** : lever l’option d’achat à un prix résiduel faible pour devenir propriétaire, restituer le bien, ou renouveler le contrat avec un matériel plus récent.\n• **Avantages** : préserve la trésorerie initiale (souvent sans gros apport) et évite l’obsolescence rapide du matériel tech.\nExemple : une société de livraison loue 10 utilitaires en leasing sur 4 ans avant de racheter ceux en bon état.',
            konanTip:
              'Définition canonique à retenir : Crédit-bail (leasing) = contrat de location d’un bien professionnel assorti d’une option d’achat en fin de bail.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Qu’est-ce que le crédit-bail (ou leasing) pour une entreprise ?',
              options: [
                'Une subvention publique non remboursable réservée aux micro-entreprises',
                'Une location d’équipement ou d’immeuble avec option d’achat à l’issue du contrat',
                'Une vente définitive d’actions en bourse',
                'Un découvert bancaire sur 48 heures',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le crédit-bail est une technique de financement par laquelle l’entreprise loue un actif professionnel et dispose d’une promesse unilatérale de vente (option d’achat) au terme du contrat.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Endettement',
            stepTheme: 'Emprunt et effet de levier',
            stepTitle: 'Comprendre l’emprunt bancaire et l’effet de levier financier',
            paragraphText:
              'Contracter un emprunt bancaire ou obligataire permet de financer de grands projets sans diluer les fondateurs, à condition de maîtriser le coût de la dette.\n• **Avantages de l’emprunt** : pas de perte de contrôle du capital ; les intérêts sont en principe déductibles fiscalement.\n• **Risque** : échéances fixes obligatoires même si les ventes baissent, exigence de garanties (hypothèques, cautions).\n• **Effet de levier** : si la rentabilité économique du projet (ex. 18 %) dépasse le taux d’intérêt de l’emprunt (ex. 9 %), l’endettement augmente la rentabilité des capitaux propres ! Dans le cas inverse, c’est l’effet de massue.',
            formula: {
              name: 'Condition de l’effet de levier positif',
              formula: '\\text{Rentabilité économique (ROA)} > \\text{Taux d’intérêt de la dette } (i)',
              note: 'Si ROA < i, l’endettement dégrade la rentabilité financière (effet de massue).',
            },
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Dans quelle situation l’emprunt bancaire génère-t-il un « effet de levier » positif pour les actionnaires ?',
              options: [
                'Lorsque le taux d’intérêt de la banque est supérieur à la rentabilité économique de l’investissement',
                'Lorsque la rentabilité économique dégagée par le projet financé est supérieure au taux d’intérêt de l’emprunt',
                'Lorsque l’entreprise réalise uniquement des pertes d’exploitation',
                'Lorsque la banque interdit tout remboursement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’emprunt amplifie la rentabilité des fonds propres dès que l’actif financé rapporte davantage (en pourcentage) que le coût de l’intérêt payé à la banque.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Court terme',
            stepTheme: 'Escompte et affacturage',
            stepTitle: 'Mobiliser les créances clients avec l’escompte et l’affacturage',
            paragraphText:
              'Lorsqu’une PME vend à crédit (paiement à 60 ou 90 jours) à de grands donneurs d’ordre, elle peut manquer de cash alors même que son carnet de commandes est plein. Deux outils transforment ces factures en liquidités immédiates :\n• **Escompte commercial** : la banque avance le montant d’un effet de commerce (lettre de change / billet à ordre) avant son échéance, moyennant des agios.\n• **Affacturage (factoring)** : l’entreprise cède ses factures à un organisme spécialisé (factor) qui avance la trésorerie et se charge souvent du recouvrement et du risque d’impayé.\nExemple : un prestataire IT qui attend 45 M FCFA d’un grand groupe à 60 jours cède sa facture en affacturage pour payer ses développeurs dès fin de mois.',
            keyRule:
              'Escompte et affacturage mobilisent le poste clients à court terme pour combler un décalage de trésorerie d’exploitation.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p2_q7',
              type: 'mcq',
              prompt:
                'Quel outil permet à une PME de céder ses factures clients à un organisme spécialisé afin d’obtenir du cash immédiat et de lui déléguer le recouvrement ?',
              options: [
                'Le crédit-bail immobilier',
                'L’affacturage (factoring)',
                'L’augmentation de capital en bourse',
                'La standardisation des qualifications',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’affacturage (factoring) transforme immédiatement des créances clients à terme en trésorerie disponible tout en externalisant leur gestion et parfois la garantie contre l’impayé.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_oge_ch4_p3',
        order: 3,
        title: 'Systèmes d’information (SI), ERP, e-business et gouvernance numérique',
        summary:
          'Comprendre le rôle du Système d’Information et des ERP dans la coordination, analyser les modèles e-business (B2B, B2C, C2C), la cybersécurité et la gouvernance d’entreprise.',
        conceptExplanation:
          "À l’ère de l’économie numérique, l’information est devenue une ressource stratégique aussi décisive que le capital ou le travail. Le **Système d’Information (SI)** est l’ensemble organisé des ressources (matériels, logiciels, données, procédures, personnel) permettant de collecter, stocker, traiter et diffuser l’information dans l’entreprise.\n\nLes **ERP (Enterprise Resource Planning / Progiciels de Gestion Intégrés)** unifient toutes les fonctions (achats, stocks, production, ventes, RH, comptabilité) autour d’une base de données unique en temps réel, supprimant les doubles saisies et les silos. Parallèlement, le **e-business** et le **e-commerce** transforment la distribution (B2B, B2C, B2G, C2C, marketplaces), tandis que la **cybersécurité** (confidentialité, intégrité, disponibilité — triade CID), la protection des données personnelles et la **gouvernance d’entreprise** (transparence, contrôle interne, RSE) conditionnent la confiance des marchés et la pérennité de l’organisation.",
        formulas: [
          {
            name: 'Triade fondamentale de la sécurité de l’information',
            formula: '\\text{Sécurité SI} = \\text{Confidentialité} + \\text{Intégrité} + \\text{Disponibilité}',
            note: 'Complétée par la traçabilité et le respect réglementaire sur les données personnelles.',
          },
        ],
        keyRule:
          'Un ERP intègre tous les services sur une base de données unique pour fiabiliser la décision en temps réel ; la transformation digitale exige conjointement agilité commerciale (e-business) et maîtrise des risques (cybersécurité & gouvernance).',
        workedExample: {
          title: 'Déploiement d’un ERP et sécurisation d’une PME de distribution à Abidjan',
          statement:
            'Une entreprise multi-boutiques gère aujourd’hui ses ventes sur des cahiers papier, ses stocks sur Excel et sa comptabilité dans un logiciel isolé, ce qui génère 15 % d’erreurs de facturation et des ruptures fréquentes. Comment la mise en place d’un ERP et de règles de gouvernance SI résout-elle ces problèmes ?',
          methodSteps: [
            '1) Unification par l’ERP : chaque vente en caisse décrémente automatiquement le stock central et génère l’écriture comptable correspondante sans double saisie.',
            '2) Pilotage en temps réel : la direction consulte chaque soir la marge par boutique et les alertes de réapprovisionnement.',
            '3) Sécurité et gouvernance : gestion stricte des droits d’accès par rôle (caissier vs comptable vs DG), sauvegardes cloud chiffrées et traçabilité (logs) de chaque modification.',
          ],
          conclusion:
            'L’ERP transforme le Système d’Information en véritable colonne vertébrale de contrôle, de rapidité et de fiabilité financière.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Système d’Information',
            stepTheme: 'Collecte, stockage, traitement, diffusion',
            stepTitle: 'Maîtriser les quatre fonctions d’un Système d’Information (SI)',
            paragraphText:
              'Un Système d’Information (SI) ne se réduit pas aux ordinateurs ou au Wi-Fi : c’est l’architecture sociotechnique qui irrigue toutes les décisions de l’entreprise.\n• **Collecter** : capter les données brutes internes (ventes, pointages) et externes (veilles marché).\n• **Stocker** : conserver durablement et de façon structurée (bases de données, cloud).\n• **Traiter** : transformer les données en indicateurs utiles (calcul de marges, prévisions, tableaux de bord).\n• **Diffuser** : transmettre la bonne information, au bon décideur, au bon moment.\nExemple : un terminal de paiement Mobile Money collecte la transaction, la stocke dans le serveur, calcule la commission et envoie un reçu instantané au commerçant.',
            keyRule:
              'Un SI performant transforme la donnée brute en information décisionnelle fiable grâce au cycle : Collecter → Stocker → Traiter → Diffuser.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle affirmation décrit le plus exactement un Système d’Information (SI) d’entreprise ?',
              options: [
                'Uniquement le parc physique d’imprimantes et de câbles réseau',
                'L’ensemble organisé des ressources humaines, matérielles, logicielles et des données permettant de collecter, stocker, traiter et diffuser l’information',
                'Une simple page publicitaire sur un réseau social',
                'Le règlement disciplinaire des pauses déjeuner',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le SI englobe technologie, données, procédures et acteurs humains pour capter, mémoriser, traiter et distribuer l’information utile au pilotage.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'ERP / PGI',
            stepTheme: 'Intégration des processus',
            stepTitle: 'Comprendre l’apport décisif d’un ERP (Progiciel de Gestion Intégré)',
            paragraphText:
              'Lorsque chaque service utilise son propre fichier Excel ou logiciel isolé, les chiffres de la comptabilité, des stocks et des ventes finissent toujours par diverger.\n• **Base de données unique** : l’ERP (ex. : Odoo, SAP, Sage X3) relie modules Commercial, Achats, Stocks, Production, RH et Comptabilité sur un référentiel partagé.\n• **Suppression des doubles saisies** : une commande client validée met instantanément à jour les stocks, la facturation et la trésorerie prévisionnelle.\n• **Traçabilité et contrôle** : chaque opération est horodatée et rattachée à un utilisateur.\nExemple : grâce à un ERP, le commercial sur le terrain vérifie sur sa tablette le stock réel disponible avant de promettre une livraison sous 24 heures.',
            konanTip:
              'Attention à l’échec classique des projets ERP : déployer un ERP sans former les équipes ni adapter les procédures métier provoque rejet et contournements sur Excel !',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le principal bénéfice de la mise en place d’un ERP (Progiciel de Gestion Intégré) dans une entreprise ?',
              options: [
                'Isoler totalement la comptabilité du service commercial',
                'Unifier les différentes fonctions autour d’une base de données unique en temps réel, en supprimant les doubles saisies',
                'Remplacer tous les clients par des robots automatiques',
                'Empêcher la direction de consulter les stocks',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ERP intègre l’ensemble des processus de gestion sur une base de données commune, assurant cohérence, rapidité d’information et élimination des ressaisies manuelles.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'E-business',
            stepTheme: 'Modèles numériques B2B, B2C, C2C',
            stepTitle: 'Distinguer e-business, e-commerce et modèles d’échanges digitaux',
            paragraphText:
              'La digitalisation ne se limite pas à ouvrir une boutique en ligne : elle redessine les modèles d’affaires et les relations entre acteurs.\n• **E-commerce vs E-business** : le e-commerce désigne la vente/achat en ligne de biens ou services, tandis que le e-business englobe l’usage du numérique dans toute l’entreprise (CRM, facturation électronique, collaboration, SAV).\n• **Modèles d’échanges** : **B2C** (entreprise vers particulier), **B2B** (entreprise vers entreprise), **C2C** (particuliers via une plateforme comme les petites annonces), **B2G** (marchés publics dématérialisés).\nExemple : une plateforme d’approvisionnement digital reliant directement des usines agro-alimentaires à des boutiques de quartier fonctionne en B2B.',
            keyRule:
              'E-commerce = transaction commerciale en ligne ; E-business = digitalisation globale des processus internes et externes de l’entreprise.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Une plateforme numérique qui permet exclusivement à des grossistes et fabricants de vendre leurs stocks en gros à des supermarchés et hôtels relève de quel modèle ?',
              options: [
                'C2C (Consumer to Consumer)',
                'B2B (Business to Business)',
                'Administration non marchande',
                'Coopérative fermée sans facturation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les échanges commerciaux numériques réalisés entre entreprises professionnelles (fournisseurs, grossistes, distributeurs) relèvent du modèle B2B.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Cybersécurité',
            stepTheme: 'Risques numériques et triade CID',
            stepTitle: 'Protéger l’entreprise : Confidentialité, Intégrité, Disponibilité',
            paragraphText:
              'Plus l’entreprise dépend de ses outils numériques et de ses données clients, plus une cyberattaque ou une panne peut bloquer l’activité et ruiner sa réputation.\n• **Confidentialité** : seules les personnes autorisées accèdent aux données sensibles (bases clients, brevets, paie).\n• **Intégrité** : garantir que les données (factures, RIB, soldes) n’ont pas été altérées ou falsifiées.\n• **Disponibilité** : assurer l’accès continu aux serveurs et applications (sauvegardes, plan de reprise d’activité).\nExemple : un rançongiciel (ransomware) qui chiffre les serveurs d’une clinique compromet la Disponibilité ; une fuite de numéros de cartes bancaires viole la Confidentialité.',
            keyRule:
              'La cybersécurité n’est pas qu’un sujet technique IT : c’est un enjeu majeur de continuité d’activité, de conformité légale et de gouvernance.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Lorsqu’un pirate informatique modifie frauduleusement le montant et le bénéficiaire d’un ordre de virement dans le système comptable, quel pilier de la sécurité est prioritairement atteint ?',
              options: [
                'L’intégrité des données',
                'L’ergonomie des locaux',
                'La division horizontale du travail',
                'La standardisation des qualifications',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’intégrité garantit que l’information reste exacte, complète et non altérée sans autorisation. La modifier frauduleusement porte atteinte à son intégrité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Gouvernance',
            stepTheme: 'Contrôle interne et éthique',
            stepTitle: 'Relier gouvernance d’entreprise, contrôle interne et conformité',
            paragraphText:
              'La gouvernance d’entreprise désigne l’ensemble des règles, organes et pratiques qui encadrent la direction et le contrôle de l’organisation pour protéger l’intérêt social et les parties prenantes.\n• **Contrôle interne** : séparation des tâches incompatibles (celui qui signe un paiement ne doit pas être celui qui saisit le fournisseur fictif), pistes d’audit, validation à double signature.\n• **Conformité (Compliance) et protection des données** : respect de la loi sur les données personnelles, lutte anti-blanchiment, transparence financière.\nExemple : dans une fintech, le responsable conformité vérifie l’identité des clients (KYC) et l’ERP interdit qu’un même employé crée un fournisseur et valide seul le virement.',
            konanTip:
              'En contrôle interne, retiens le principe d’or de séparation des fonctions : « Autoriser ≠ Enregistrer ≠ Payer ≠ Contrôler ».',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Dans une entreprise bien gouvernée, pourquoi sépare-t-on strictement la personne qui valide une facture fournisseur de celle qui exécute le virement bancaire ?',
              options: [
                'Pour ralentir volontairement les paiements de plusieurs mois',
                'Pour appliquer le principe de contrôle interne (séparation des tâches) et prévenir les fraudes et erreurs',
                'Pour éviter d’utiliser un progiciel de gestion intégré',
                'Pour supprimer le rôle du Conseil d’Administration',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La séparation des fonctions incompatibles (engagement, validation, paiement, contrôle) est un pilier du contrôle interne qui réduit drastiquement les risques de fraude ou de détournement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Data & IA',
            stepTheme: 'Entreprise pilotée par la donnée',
            stepTitle: 'Exploiter les données et tableaux de bord (BI) pour décider',
            paragraphText:
              'La dernière étape de la transformation digitale consiste à passer d’une gestion intuitive à un pilotage par la donnée (Data-Driven Management) grâce aux outils de Business Intelligence (BI) et d’IA.\n• **Tableaux de bord et KPI** : suivre en temps réel le taux de rotation des stocks, le coût d’acquisition client (CAC) et la marge nette par produit.\n• **Analyse prédictive** : anticiper les pannes machines (maintenance prédictive), la demande saisonnière ou le risque de résiliation client (churn).\nExemple : un opérateur télécom analyse les habitudes de consommation data pour détecter les clients prêts à partir et leur proposer automatiquement une offre personnalisée.',
            keyRule:
              'La donnée n’a de valeur que si elle est fiable, gouvernée et traduite en indicateurs d’action (KPI) au service des décisions stratégiques et opérationnelles.',
            exercise: {
              id: 'lmd_entd_l1_oge_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Comment la Business Intelligence (BI) et les tableaux de bord numériques améliorent-ils la gouvernance d’une entreprise ?',
              options: [
                'En remplaçant totalement la stratégie par le hasard',
                'En transformant les données opérationnelles en indicateurs clés (KPI) fiables permettant de décider vite et d’anticiper les dérives',
                'En supprimant toute confidentialité des salaires sur Internet',
                'En empêchant les managers de communiquer avec leurs équipes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les outils décisionnels (BI) consolident les données issues de l’ERP et des canaux digitaux en indicateurs clairs pour piloter la performance et corriger les écarts.',
            },
          },
        ],
      }),
    ],
  },
];
