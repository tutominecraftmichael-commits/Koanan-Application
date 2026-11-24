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

export const ANALYSE_ECONOMIQUE_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : INTRODUCTION À LA SCIENCE ÉCONOMIQUE ET CIRCUIT ÉCONOMIQUE
  // ============================================================================
  {
    id: 'lmd_srit_l1_anaeco_ch1',
    subjectId: 'lmd_analyse_economique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 1,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Programme LMD SRIT 1 — Analyse Économique (Circuit économique)',
    title: 'Introduction à la science économique et Circuit économique',
    summary:
      'Rareté, besoins et biens économiques, grands courants de la pensée économique, secteurs institutionnels et équilibre macroéconomique emplois-ressources.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_anaeco_c1_p1',
        order: 1,
        title: 'Rareté des ressources, besoins et typologie des biens économiques',
        summary:
          'Comprendre le problème économique fondamental : satisfaire des besoins illimités à partir de ressources rares grâce à différents types de biens et services.',
        conceptExplanation:
          "La science économique étudie la manière dont les individus et les sociétés allouent des ressources rares (travail, capital, matières premières, spectre de fréquences télécoms) qui ont des usages alternatifs pour produire des biens et services destinés à satisfaire des besoins humains illimités. Un bien n'est qualifié d'économique que s'il est à la fois utile, disponible et rare (par opposition aux biens libres comme l'air ambiant).",
        formulas: [
          {
            name: 'Coût d’opportunité d’un choix économique',
            formula: '\\text{Coût d’opportunité}(A) = \\text{Valeur de la meilleure alternative sacrifiée } (B)',
            note: 'Toute ressource rare affectée à un usage A ne peut plus servir à l’usage B.',
          },
        ],
        keyRule:
          'Un bien économique se définit par trois critères cumulatifs : utilité (aptitude à satisfaire un besoin), disponibilité et rareté (nécessitant un effort de production ou un prix).',
        workedExample: {
          title: 'Classification des biens dans un opérateur de télécommunications',
          statement:
            'Un opérateur mobile en Côte d’Ivoire achète des pylônes 5G, consomme de l’électricité pour alimenter ses antennes et vend des forfaits data aux étudiants. Qualifier économiquement chacun de ces trois éléments.',
          methodSteps: [
            'Pylônes 5G : utilisés pendant plusieurs années dans le processus productif sans être détruits → Bien de production durable (capital fixe).',
            'Électricité des antennes : détruite ou transformée immédiatement lors de la production du service réseau → Consommation intermédiaire (bien de production non durable).',
            'Forfait data étudiant : utilisé directement par le ménage pour satisfaire son besoin de connectivité sans servir à produire un autre bien marchand → Service de consommation finale.',
          ],
          conclusion:
            'La qualification d’un bien dépend de son usage économique (production durable, consommation intermédiaire ou consommation finale) et non uniquement de sa nature physique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Problème économique',
            stepTheme: 'blue',
            stepTitle: 'La rareté des ressources face à des besoins illimités',
            paragraphText:
              "Étymologiquement issu du grec *oikonomia* (administration de la maison), le terme « économie » désigne la science des choix sous contrainte de rareté. Selon la définition célèbre de Lionel Robbins (1932), l'économie est la science qui étudie le comportement humain en tant que relation entre des fins (besoins illimités) et des moyens rares à usages alternatifs. Sans rareté, il n'y aurait ni prix, ni arbitrage, ni calcul économique.",
            keyRule:
              'La tension fondamentale de l’économie oppose le caractère illimité et renouvelable des besoins humains au caractère limité (rare) des ressources disponibles.',
            konanTip:
              'En QCM, retiens l’auteur Lionel Robbins dès que l’énoncé mentionne « fins et moyens rares à usages alternatifs ».',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p1_ex1',
              type: 'mcq',
              prompt:
                'Quel économiste a défini la science économique comme l’étude du comportement humain en tant que relation entre des fins et des moyens rares à usages alternatifs ?',
              options: ['Lionel Robbins', 'François Quesnay', 'Karl Marx', 'Milton Friedman'],
              correctAnswerIndex: 0,
              explanation:
                'Dans son ouvrage de 1932, Lionel Robbins place la rareté des ressources et les choix d’allocation au cœur de la définition néoclassique de la science économique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Besoins humains',
            stepTheme: 'violet',
            stepTitle: 'Caractéristiques et hiérarchie des besoins économiques',
            paragraphText:
              "Un besoin est un sentiment de manque accompagné du désir de le faire disparaître. Un besoin devient économique lorsque sa satisfaction exige l'utilisation de biens rares. On distingue les **besoins primaires** (physiologiques, vitaux : se nourrir, se vêtir, se loger) et les **besoins secondaires ou de civilisation** (confort, culture, loisirs, smartphone haut de gamme). Les besoins sont multiples, satiables à court terme (l'intensité diminue au fur et à mesure de la satisfaction) et interdépendants.",
            keyRule:
              'Les besoins économiques sont illimités en nombre dans le temps, mais satiables en intensité à un instant donné (principe de satiété).',
            konanTip:
              'Ne confonds pas « besoin illimité en nombre » (de nouveaux besoins apparaissent avec le progrès technique) et « besoin limité en capacité » (boire un 5e verre d’eau apporte moins de satisfaction que le 1er).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p1_ex2',
              type: 'mcq',
              prompt:
                'Quelle propriété exprime le fait que l’intensité d’un besoin diminue au fur et à mesure qu’il est satisfait à un instant donné ?',
              options: [
                'La satiabilité des besoins',
                'L’incompressibilité absolue des besoins',
                'La fongibilité des ressources',
                'L’inélasticité-prix parfaite',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La satiabilité (première loi de Gossen) indique que chaque unité supplémentaire consommée réduit l’intensité du manque jusqu’à satiété.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Biens économiques',
            stepTheme: 'blue',
            stepTitle: 'Biens libres versus biens économiques, biens matériels versus services',
            paragraphText:
              "Tous les moyens permettant de satisfaire un besoin ne sont pas des biens économiques. Les **biens libres** (ou naturels, comme l'air que nous respirons ou la lumière du soleil) sont fournis gratuitement et en abondance par la nature sans travail humain. À l'inverse, les **biens économiques** sont rares, résultent d'une activité de production et s'échangent généralement à un prix positif. Ils comprennent des **biens matériels** (stockables, tangibles) et des **services** (immatériels, non stockables, consommés au moment même où ils sont produits).",
            keyRule:
              'Un service est une prestation immatérielle dont la production et la consommation sont simultanées (non stockable).',
            konanTip:
              'Un nuage informatique (Cloud computing) ou une consultation médicale est un service économique immatériel.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p1_ex3',
              type: 'mcq',
              prompt:
                'Parmi les propositions suivantes, laquelle caractérise spécifiquement un service par rapport à un bien matériel ?',
              options: [
                'Il est immatériel, non stockable et consommé simultanément à sa production',
                'Il est toujours gratuit et fourni par la nature sans effort humain',
                'Il ne contribue jamais au calcul du Produit Intérieur Brut (PIB)',
                'Il possède une durée de vie physique supérieure à cinq ans en entrepôt',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Contrairement aux biens matériels tangibles et stockables, un service (transport, télécoms, enseignement) est immatériel et sa consommation coïncide avec sa production.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Destination des biens',
            stepTheme: 'green',
            stepTitle: 'Consommation finale, consommation intermédiaire et biens d’équipement',
            paragraphText:
              "Selon leur destination économique, on distingue trois catégories : 1) Les **biens de consommation finale**, qui satisfont directement les besoins des ménages (pain, vêtements, téléviseur personnel) ; 2) Les **biens de consommation intermédiaire** (matières premières, énergie, composants électroniques), qui sont détruits ou incorporés au cours d'un cycle de production ; 3) Les **biens de production durables** (ou biens d'équipement / capital fixe : serveurs, machines-outils), qui servent pendant plusieurs cycles de production sans être détruits.",
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Classification croisée des biens économiques (Durabilité × Destination)',
              caption: 'Un même bien physique change de catégorie selon l’agent qui l’utilise et sa durée d’usage.',
              matrix2x2: {
                topAxis: ['Usage par les Ménages (Consommation finale)', 'Usage par les Entreprises (Production)'],
                leftAxis: ['Non durable (détruit à l’usage)', 'Durable (pluriannuel)'],
                topLeft: {
                  title: 'Consommation finale non durable',
                  items: ['Aliments, boissons', 'Carburant du véhicule familial', 'Électricité domestique'],
                  color: 'blue',
                },
                topRight: {
                  title: 'Consommation intermédiaire (CI)',
                  items: ['Matières premières, farine', 'Électricité de l’usine / data center', 'Composants électroniques intégrés'],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'Consommation finale durable',
                  items: ['Ordinateur portable personnel', 'Réfrigérateur, mobilier domestique', 'Voiture particulière d’un ménage'],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Bien de production (Capital fixe)',
                  items: ['Serveurs informatiques d’entreprise', 'Pylônes télécoms, machines-outils', 'Camion de livraison professionnel'],
                  color: 'violet',
                },
              },
            },
            keyRule:
              'Un même bien (ex: un ordinateur ou de l’électricité) est un bien de consommation finale s’il est utilisé par un ménage, mais un facteur de production (capital fixe ou CI) s’il est utilisé par une entreprise.',
            konanTip:
              'Regarde toujours QUI achète le bien et POUR QUOI FAIRE avant de cocher « consommation finale » ou « bien de production ».',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p1_ex4',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on la farine achetée par une boulangerie industrielle pour fabriquer du pain destiné à la vente ?',
              options: [
                'Un bien de consommation intermédiaire',
                'Un bien de consommation finale durable',
                'Un bien de production durable (capital fixe)',
                'Un bien libre non marchand',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La farine est transformée et disparaît en tant que telle au cours du cycle de fabrication du pain : c’est une consommation intermédiaire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Relations entre biens',
            stepTheme: 'violet',
            stepTitle: 'Biens substituables (concurrents) et biens complémentaires',
            paragraphText:
              "Deux biens sont dits **substituables** (ou concurrents) lorsqu'ils peuvent satisfaire le même besoin : la hausse du prix de l'un entraîne une hausse de la demande de l'autre (ex: café et thé, fibre optique et box 5G fixe, beurre et margarine). Deux biens sont dits **complémentaires** lorsque leur utilisation conjointe est nécessaire pour satisfaire un besoin : la hausse du prix de l'un réduit la demande des deux (ex: voiture et carburant, smartphone et carte SIM, matériel informatique et système d'exploitation).",
            formula: {
              name: 'Élasticité-prix croisée entre deux biens A et B',
              formula: 'e_{A/B} = \\frac{\\Delta Q_A / Q_A}{\\Delta P_B / P_B}',
              note: 'Si e_{A/B} > 0, les biens sont substituables ; si e_{A/B} < 0, ils sont complémentaires ; si e_{A/B} = 0, ils sont indépendants.',
            },
            keyRule:
              'Substituables = usage alternatif ($e_{A/B} > 0$) ; Complémentaires = usage simultané obligatoire ($e_{A/B} < 0$).',
            konanTip:
              'Si le prix de l’essence explose, la demande de voitures thermiques baisse : signe négatif $\\Rightarrow$ biens complémentaires.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p1_ex5',
              type: 'mcq',
              prompt:
                'Lorsque la hausse du prix du bien B provoque une augmentation de la quantité demandée du bien A ($e_{A/B} > 0$), quelle est la relation économique entre A et B ?',
              options: [
                'Les biens A et B sont substituables',
                'Les biens A et B sont complémentaires',
                'Les biens A et B sont indépendants',
                'Les biens A et B sont des biens collectifs purs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les consommateurs reportent leur achat du bien B devenu plus cher vers le bien A qui satisfait le même besoin : A et B sont substituables.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Coût d’opportunité',
            stepTheme: 'orange',
            stepTitle: 'Le coût d’opportunité et la distinction bien privé / bien collectif',
            paragraphText:
              "En économie, « rien n'est gratuit » (*there is no such thing as a free lunch*) : le véritable coût d'une décision est son **coût d'opportunité**, c'est-à-dire la valeur de la meilleure option à laquelle on renonce. Par ailleurs, on distingue les **biens privés** (rivaux et excluables par le prix, ex: un ordinateur) des **biens collectifs purs** (non-rivaux et non-excluables, ex: l'éclairage public, la défense nationale, un phare maritime), pour lesquels la consommation par un individu ne réduit pas celle disponible pour les autres.",
            keyRule:
              'Un bien collectif pur vérifie deux propriétés : non-rivalité (coût marginal d’un usager supplémentaire nul) et non-exclusion par les prix.',
            konanTip:
              'Attention au piège : l’éducation publique ou un hôpital saturé peut présenter une rivalité (places limitées) ; l’éclairage public ou la défense nationale sont les exemples types de biens collectifs purs.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p1_ex6',
              type: 'mcq',
              prompt:
                'Quelles sont les deux caractéristiques fondamentales qui définissent un bien collectif pur (comme l’éclairage public ou la défense nationale) ?',
              options: [
                'La non-rivalité et la non-exclusion',
                'La rivalité et l’excluabilité par le prix',
                'La gratuité naturelle et l’absence de coût de production',
                'La substituabilité parfaite et la destructibilité immédiate',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un bien collectif pur est non-rival (la consommation de l’un ne prive pas l’autre) et non-excluable (impossible d’en interdire l’accès à ceux qui ne paient pas, d’où le phénomène de passager clandestin).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_anaeco_c1_p2',
        order: 2,
        title: 'Les grands courants de la pensée économique',
        summary:
          'Distinguer les fondements analytiques des écoles Classique, Marxiste, Néoclassique et Keynésienne.',
        conceptExplanation:
          "L'histoire de la pensée économique s'articule autour de quatre grands paradigmes : les Classiques (libéralisme, valeur-travail, loi des débouchés), Karl Marx (critique du capitalisme, plus-value et lutte des classes), les Néoclassiques (utilité marginale, équilibre général sur des marchés concurrentiels) et John Maynard Keynes (analyse macroéconomique de la demande effective, possibilité de chômage involontaire durable et intervention régulatrice de l'État).",
        formulas: [
          {
            name: 'Taux de plus-value dans l’analyse marxiste',
            formula: 'e = \\frac{PL}{V}',
            note: 'PL = Plus-value accaparée par le capitaliste ; V = Capital variable (salaires versés à la force de travail).',
          },
        ],
        keyRule:
          'Classiques et Néoclassiques croient en l’autorégulation du marché par les prix (approche de l’offre), tandis que Keynes démontre que l’insuffisance de la demande effective justifie l’intervention de l’État.',
        workedExample: {
          title: 'Diagnostic d’une crise économique selon les écoles de pensée',
          statement:
            'Un pays subit une récession accompagnée d’un taux de chômage élevé. Comparer le diagnostic et les recommandations d’un économiste néoclassique et d’un économiste keynésien.',
          methodSteps: [
            'Diagnostic néoclassique : le chômage est volontaire ou dû à des rigidités sur le marché du travail (salaire réel trop élevé par rapport à la productivité marginale). Solution : flexibiliser les salaires et laisser jouer la concurrence.',
            'Diagnostic keynésien : le chômage est involontaire et résulte d’une insuffisance de la demande globale anticipée (consommation + investissement). Solution : politique budgétaire de relance (dépenses publiques, grands travaux) et baisse des taux d’intérêt.',
          ],
          conclusion:
            'L’opposition entre régulation par le marché (libéraux/néoclassiques) et régulation par l’État (keynésiens) structure tous les débats de politique économique contemporains.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'École Classique',
            stepTheme: 'blue',
            stepTitle: 'Adam Smith, la « main invisible » et la division du travail (XVIIIe–XIXe s.)',
            paragraphText:
              "Née avec la Révolution industrielle et l'ouvrage d'**Adam Smith** (*Recherches sur la nature et les causes de la richesse des nations*, 1776), l'école classique fonde le libéralisme économique. Smith montre que la **division technique du travail** (exemple de la manufacture d'épingles) accroît considérablement la productivité. Par la métaphore de la **« main invisible »**, il soutient que la poursuite par chaque individu de son intérêt personnel concourt spontanément, grâce au mécanisme des prix sur un marché libre, à l'intérêt général, ne laissant à l'État que ses fonctions régaliennes (**État-gendarme**).",
            keyRule:
              'Pour Adam Smith, les trois moteurs de la richesse des nations sont la division du travail, le libre fonctionnement du marché (main invisible) et le libre-échange.',
            konanTip:
              'L’État-gendarme des classiques assure uniquement la police, la justice, la défense nationale et certaines infrastructures non rentables pour le privé.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p2_ex1',
              type: 'mcq',
              prompt:
                'Que désigne la métaphore de la « main invisible » formulée par Adam Smith en 1776 ?',
              options: [
                'Le mécanisme par lequel la recherche de l’intérêt individuel sur un marché libre conduit spontanément à l’intérêt général',
                'L’intervention discrète de la Banque Centrale pour fixer administrativement les prix des biens de première nécessité',
                'La planification centralisée de la production industrielle par les ministères économiques de l’État',
                'L’entente secrète des monopoles pour éliminer la concurrence sur les marchés internationaux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chez Adam Smith, le système des prix sur un marché concurrentiel coordonne les égoïsmes individuels (le boucher, le brasseur, le boulanger) au bénéfice de la collectivité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Ricardo & Say',
            stepTheme: 'violet',
            stepTitle: 'Valeur-travail, avantages comparatifs (Ricardo) et loi des débouchés (J.-B. Say)',
            paragraphText:
              "Deux autres grands auteurs classiques prolongent l'œuvre de Smith : **David Ricardo** (1772–1823) développe la théorie de la **valeur-travail** (la valeur d'échange d'un bien dépend de la quantité de travail incorporée), la loi des rendements décroissants de la terre et la théorie des **avantages comparatifs** (chaque pays gagne au libre-échange en se spécialisant dans la production où son avantage relatif est le plus fort ou son désavantage le plus faible). **Jean-Baptiste Say** (1767–1832) énonce la **loi des débouchés** : « l'offre crée sa propre demande » (les revenus distribués lors de la production permettent d'acheter toute la production, rendant impossible toute crise générale de surproduction).",
            keyRule:
              'Loi de Jean-Baptiste Say : « Les produits s’échangent contre des produits » — toute offre distribue des revenus équivalents qui assurent ses propres débouchés.',
            konanTip:
              'Dans la loi de Say, la monnaie n’est qu’un simple « voile » neutre qui sert uniquement à faciliter les échanges.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p2_ex2',
              type: 'mcq',
              prompt:
                'Quel économiste classique est l’auteur de la célèbre « loi des débouchés » selon laquelle toute offre crée sa propre demande ?',
              options: ['Jean-Baptiste Say', 'David Ricardo', 'Thomas Robert Malthus', 'John Maynard Keynes'],
              correctAnswerIndex: 0,
              explanation:
                'Dans son Traité d’économie politique (1803), Jean-Baptiste Say affirme que la valeur produite génère un pouvoir d’achat égal, excluant toute crise durable de surproduction globale.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Courant Marxiste',
            stepTheme: 'blue',
            stepTitle: 'Karl Marx : critique du capitalisme, plus-value et baisse tendancielle du taux de profit',
            paragraphText:
              "Au XIXe siècle, **Karl Marx** (*Le Capital*, 1867) reprend la théorie classique de la valeur-travail pour démontrer l'exploitation capitaliste. La société est divisée en deux classes antagonistes : la **bourgeoisie** (propriétaire des moyens de production) et le **prolétariat** (qui ne possède que sa force de travail). Le salarié crée une valeur supérieure au salaire qu'il reçoit : cette différence non rémunérée est la **plus-value** ($PL$), source unique du profit capitaliste. Selon Marx, l'accumulation du capital (remplacement des ouvriers par des machines) entraîne une **baisse tendancielle du taux de profit** et des crises de surproduction récurrentes.",
            formula: {
              name: 'Taux de profit dans l’analyse marxiste',
              formula: '\\pi = \\frac{PL}{C + V}',
              note: 'C = Capital constant (machines, matières premières) ; V = Capital variable (salaires) ; PL = Plus-value.',
            },
            keyRule:
              'Pour Marx, seul le travail vivant ($V$) crée de la valeur nouvelle ; la mécanisation excessive ($C$ augmente plus vite que $V$) réduit le taux de profit $\\pi$.',
            konanTip:
              'Distingue bien chez Marx le taux d’exploitation ($PL / V$) et le taux de profit ($PL / (C + V)$).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p2_ex3',
              type: 'mcq',
              prompt:
                'Dans l’analyse économique de Karl Marx, comment appelle-t-on la différence entre la valeur créée par la force de travail de l’ouvrier et le salaire qui lui est versé ?',
              options: [
                'La plus-value',
                'L’utilité marginale',
                'La demande effective',
                'La rente différentielle',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La plus-value correspond au surtravail non payé à l’ouvrier et approprié par le détenteur des moyens de production.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'École Néoclassique',
            stepTheme: 'violet',
            stepTitle: 'La révolution marginaliste (Walras, Jevons, Menger) et l’optimum de Pareto',
            paragraphText:
              "Vers 1870, les économistes **néoclassiques** (Carl Menger, William Stanley Jevons, **Léon Walras**, puis **Vilfredo Pareto** et Alfred Marshall) opèrent la révolution marginaliste. Ils abandonnent la valeur-travail au profit de la **valeur-utilité** : la valeur d'un bien dépend de son **utilité marginale** (la satisfaction procurée par la dernière unité consommée, qui résout le paradoxe de l'eau et du diamant). L'agent économique est modélisé comme un *Homo œconomicus* rationnel qui maximise son utilité ou son profit à la marge. Walras démontre mathématiquement l'**équilibre général** sur des marchés en concurrence pure et parfaite (CPP).",
            keyRule:
              'Le raisonnement marginaliste compare le gain de la dernière unité produite ou consommée (recette/utilité marginale) à son coût supplémentaire (coût marginal).',
            konanTip:
              'Le paradoxe de l’eau et du diamant s’explique par l’utilité marginale : l’eau a une utilité totale énorme mais une utilité marginale faible (car abondante), alors que le diamant a une utilité marginale très élevée (car rare).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p2_ex4',
              type: 'mcq',
              prompt:
                'Sur quel concept fondamental les économistes néoclassiques (Walras, Jevons, Menger) fondent-ils la valeur d’un bien dès les années 1870 ?',
              options: [
                'L’utilité marginale (satisfaction procurée par la dernière unité consommée)',
                'La quantité totale d’heures de travail socialement nécessaire à sa fabrication',
                'La quantité d’or et d’argent accumulée dans les coffres du souverain',
                'La fertilité naturelle des terres agricoles selon la doctrine physiocratique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La révolution marginaliste néoclassique fonde la valeur sur la rareté et l’utilité marginale subjective ressentie par le consommateur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Révolution Keynésienne',
            stepTheme: 'green',
            stepTitle: 'John Maynard Keynes : demande effective, chômage involontaire et État-providence',
            paragraphText:
              "Face à la Grande Dépression de 1929, **John Maynard Keynes** publie sa *Théorie générale de l'emploi, de l'intérêt et de la monnaie* (1936) et fonde la macroéconomie moderne. Il réfute la loi de Say : à cause de l'incertitude et de la thésaurisation monétaire, **c'est la demande qui détermine l'offre**. Les entrepreneurs fixent le niveau de production et d'emploi en fonction de la **demande effective** (demande globale anticipée de consommation et d'investissement). Un équilibre durable de sous-emploi avec **chômage involontaire** est possible, ce qui impose l'intervention active de l'**État-providence** (politique budgétaire de relance par les dépenses publiques et politique monétaire).",
            keyRule:
              'Pour Keynes, le niveau de l’emploi dépend de la demande effective ($D_e = C_{\\text{anticipée}} + I_{\\text{anticipé}}$) ; en cas de récession, l’État doit soutenir la demande globale.',
            konanTip:
              'Retiens la citation célèbre de Keynes contre le laisser-faire de long terme des classiques : « À long terme, nous serons tous morts ».',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p2_ex5',
              type: 'mcq',
              prompt:
                'Selon John Maynard Keynes (1936), quelle est la cause principale du chômage involontaire de masse lors d’une dépression économique ?',
              options: [
                'L’insuffisance de la demande effective (consommation et investissement anticipés par les entrepreneurs)',
                'L’excès de dépenses publiques d’infrastructures financées par l’État',
                'La baisse tendancielle de la fertilité des terres agricoles',
                'La spécialisation internationale selon la loi des avantages comparatifs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans la Théorie générale, les entreprises n’embauchent qu’à hauteur des débouchés qu’elles anticipent (la demande effective). Si cette demande est insuffisante, le sous-emploi persiste sans intervention publique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse comparative',
            stepTheme: 'slate',
            stepTitle: 'Microéconomie versus Macroéconomie et tableau comparatif des écoles',
            paragraphText:
              "La science économique moderne se divise en deux niveaux d'analyse complémentaires : la **microéconomie**, issue du courant néoclassique, étudie les comportements individuels des agents (un consommateur, une entreprise) et la formation des prix sur un marché particulier ; la **macroéconomie**, impulsée par Keynes, étudie l'économie dans sa globalité à travers de grands agrégats nationaux (PIB, inflation, chômage, consommation nationale, masse monétaire) et les politiques conjoncturelles de l'État.",
            keyRule:
              'Microéconomie = choix individuels et prix relatifs sur un marché ; Macroéconomie = agrégats globaux (PIB, chômage, inflation) et équilibre national.',
            konanTip:
              'L’étude du tarif d’un abonnement fibre chez un opérateur relève de la microéconomie ; l’étude du taux d’inflation en Côte d’Ivoire relève de la macroéconomie.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p2_ex6',
              type: 'mcq',
              prompt:
                'Parmi les sujets d’étude suivants, lequel relève spécifiquement de l’analyse macroéconomique ?',
              options: [
                'L’évolution du Produit Intérieur Brut (PIB), du taux de chômage national et de l’inflation',
                'La maximisation du profit d’une boulangerie de quartier en fonction de son coût marginal',
                'L’arbitrage d’un étudiant entre l’achat d’un cahier et l’achat d’un stylo',
                'La fixation du prix d’équilibre sur le seul marché local de la tomate à Bouaké',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La macroéconomie étudie les grandeurs globales agrégées à l’échelle d’une nation (PIB, niveau général des prix, emploi total).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_anaeco_c1_p3',
        order: 3,
        title: 'Les secteurs institutionnels, le circuit économique et l’équilibre emplois-ressources',
        summary:
          'Maîtriser les 5 secteurs institutionnels résidents (+ Reste du Monde), les flux réels/monétaires et l’identité comptable $Y + M = C + I + G + X$.',
        conceptExplanation:
          "Pour représenter le fonctionnement global d'une économie nationale, la comptabilité nationale regroupe les agents économiques en cinq secteurs institutionnels résidents selon leur fonction économique principale et la nature de leurs ressources (plus un sixième pseudo-secteur, le Reste du Monde). Ces agents sont reliés par des flux réels (biens, services, travail) et des flux monétaires (revenus, dépenses, crédits, impôts) au sein du circuit économique, dont la cohérence globale repose sur l'équilibre emplois-ressources.",
        formulas: [
          {
            name: 'Équilibre macroéconomique Emplois-Ressources en économie ouverte',
            formula: 'Y + M = C + I + G + X',
            note: 'Y = PIB (Production) ; M = Importations ; C = Consommation privée ; I = Investissement (FBCF + ΔStocks) ; G = Dépenses publiques ; X = Exportations.',
          },
        ],
        keyRule:
          'En comptabilité nationale, le total des Ressources disponibles dans l’économie ($Y + M$) est toujours strictement égal au total des Emplois ($C + I + G + X$).',
        workedExample: {
          title: 'Vérification de l’équilibre emplois-ressources d’une économie nationale',
          statement:
            'Dans une économie ouverte (en milliards d’unités monétaires), on observe : Consommation finale privée $C = 4\\,200$, Dépenses publiques $G = 1\\,300$, Investissement brut $I = 1\\,500$, Exportations $X = 1\\,800$ et Importations $M = 1\\,600$. Calculer le PIB ($Y$) et le solde commercial extérieur.',
          methodSteps: [
            'Total des Emplois finals : $E = C + I + G + X = 4\\,200 + 1\\,500 + 1\\,300 + 1\\,800 = 8\\,800$.',
            'Équilibre Emplois-Ressources : $Y + M = 8\\,800 \\implies Y = 8\\,800 - 1\\,600 = 7\\,200$ milliards.',
            'Solde de la balance commerciale : $SC = X - M = 1\\,800 - 1\\,600 = +200$ milliards (excédent commercial).',
          ],
          conclusion:
            'On retrouve l’écriture équivalente du PIB par la demande : $Y = C + I + G + (X - M) = 7\\,200$ milliards.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Ménages & SNF',
            stepTheme: 'blue',
            stepTitle: 'Les Ménages et les Sociétés Non Financières (SNF)',
            paragraphText:
              "Un **agent économique** (ou unité institutionnelle) est un centre autonome de décision économique. La comptabilité nationale distingue d'abord : 1) Les **Ménages** (individus ou familles vivant sous un même toit, y compris les entrepreneurs individuels), dont la fonction principale est de **consommer** des biens et services finals (et éventuellement produire s'il s'agit d'entreprises individuelles), grâce aux revenus des facteurs de production (salaires, loyers, dividendes) et aux transferts sociaux ; 2) Les **Sociétés Non Financières (SNF)** (entreprises privées ou publiques hors finance : Orange CI, CIE, SODECI), dont la fonction principale est de **produire des biens et services marchands non financiers** et dont la ressource principale est le chiffre d'affaires issu de la vente.",
            keyRule:
              'Un bien ou service est dit marchand lorsqu’il est vendu sur un marché à un prix économiquement significatif (couvrant au moins $50\\%$ des coûts de production).',
            konanTip:
              'Une personne célibataire vivant seule dans un studio constitue un « ménage » au sens de la comptabilité nationale.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p3_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la fonction économique principale des Sociétés Non Financières (SNF) en comptabilité nationale ?',
              options: [
                'Produire des biens et des services marchands non financiers dans le but de les vendre sur un marché',
                'Collecter l’épargne et accorder des crédits bancaires aux autres agents économiques',
                'Redistribuer les revenus nationaux grâce au prélèvement des impôts et cotisations obligatoires',
                'Fournir gratuitement des services caritatifs aux adhérents grâce à des cotisations volontaires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les SNF regroupent les entreprises industrielles, commerciales, agricoles et de services (télécoms, BTP, etc.) qui produisent des biens et services marchands non financiers.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'SF, APU & ISBLSM',
            stepTheme: 'blue',
            stepTitle: 'Sociétés Financières (SF), Administrations Publiques (APU) et ISBLSM',
            paragraphText:
              "Les trois autres secteurs résidents sont : 3) Les **Sociétés Financières (SF)** (Banque Centrale BCEAO, banques commerciales, sociétés d'assurance), dont la fonction principale est de **financer l'économie** (intermédiation financière : collecter des dépôts, accorder des crédits) et de **couvrir les risques** (assurances) ; 4) Les **Administrations Publiques (APU)** (État central, collectivités locales, mairies, CNPS), qui **produisent des services non marchands** (éducation publique, sécurité, justice) et **redistribuent les revenus** grâce aux prélèvements obligatoires (impôts, taxes, cotisations sociales) ; 5) Les **Institutions Sans But Lucratif au Service des Ménages (ISBLSM)** (ONG, syndicats, partis politiques, communautés religieuses, associations sportives), qui fournissent des services non marchands aux ménages grâce à des cotisations volontaires et des dons.",
            keyRule:
              'APU et ISBLSM produisent toutes deux des services non marchands, mais les APU sont financées par des prélèvements obligatoires tandis que les ISBLSM sont financées par des contributions volontaires.',
            konanTip:
              'Les compagnies d’assurance font partie des Sociétés Financières (SF) dans le Système de Comptabilité Nationale (SCN) moderne.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p3_ex2',
              type: 'mcq',
              prompt:
                'À quel secteur institutionnel appartiennent un syndicat professionnel, une ONG humanitaire et une association sportive financés par les cotisations volontaires de leurs membres ?',
              options: [
                'Les Institutions Sans But Lucratif au Service des Ménages (ISBLSM)',
                'Les Administrations Publiques (APU)',
                'Les Sociétés Non Financières (SNF)',
                'Les Sociétés Financières (SF)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les associations, ONG, syndicats et partis politiques qui produisent des services non marchands financés par des dons ou cotisations volontaires relèvent du secteur des ISBLSM.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Reste du Monde',
            stepTheme: 'violet',
            stepTitle: 'Le Reste du Monde (RDM) et le critère de résidence économique',
            paragraphText:
              "Pour retracer les échanges extérieurs d'une économie ouverte, la comptabilité nationale ajoute un sixième ensemble appelé le **Reste du Monde (RDM)** (ou l'Extérieur). Ce n'est pas un véritable secteur institutionnel car il n'a pas de fonction principale unique : il regroupe simplement tous les **agents non-résidents** dans la mesure où ils effectuent des opérations économiques avec les unités résidentes (exportations $X$, importations $M$, transferts de fonds, investissements directs étrangers). Attention : la **résidence économique** (exercer une activité sur le territoire économique national pendant au moins un an) ne dépend pas de la nationalité juridique.",
            keyRule:
              'Une filiale étrangère implantée à Abidjan depuis plus d’un an est un agent RÉSIDENT en Côte d’Ivoire (classé en SNF ou SF), et non un agent du Reste du Monde.',
            konanTip:
              'Piège classique : un citoyen étranger qui vit et travaille en Côte d’Ivoire depuis 3 ans fait partie des Ménages résidents ivoiriens !',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p3_ex3',
              type: 'mcq',
              prompt:
                'En comptabilité nationale, sur quel critère distingue-t-on les agents économiques nationaux de ceux rattachés au « Reste du Monde » ?',
              options: [
                'Le critère de résidence économique (centre d’intérêt économique sur le territoire depuis au moins un an), indépendamment de la nationalité',
                'Le critère exclusif de la nationalité inscrite sur le passeport ou des actionnaires majoritaires',
                'La devise monétaire dans laquelle l’entreprise rédige ses contrats commerciaux',
                'Le chiffre d’affaires annuel réalisé hors du continent africain',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Est résidente toute unité institutionnelle qui possède un centre d’intérêt économique durable (un an ou plus) sur le territoire économique du pays, quelle que soit sa nationalité.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Circuit & Flux',
            stepTheme: 'green',
            stepTitle: 'Le circuit économique : flux réels (physiques) et flux monétaires (financiers)',
            paragraphText:
              "Initié dès 1758 par le physiocrate **François Quesnay** (*Tableau économique*), le **circuit économique** est une représentation schématique des relations d'interdépendance entre les secteurs institutionnels à travers des **flux**. Dans une transaction marchande, tout **flux réel** (prestation de travail, livraison d'un bien ou service) donne naissance en sens inverse à un **flux monétaire** de contrepartie (versement du salaire, paiement du prix d'achat). Il existe aussi des flux monétaires unilatéraux sans contrepartie directe immédiate (impôts versés aux APU, prestations sociales reçues par les ménages).",
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Le circuit macroéconomique global entre les secteurs institutionnels',
              caption: 'La production génère des revenus distribués aux agents, qui alimentent à leur tour la dépense globale.',
              cycle: {
                centerLabel: 'Circuit Économique',
                centerSublabel: 'Production = Revenu = Dépense',
                nodes: [
                  {
                    title: 'Entreprises (SNF)',
                    subtitle: 'Produisent biens/services & versent salaires/profits',
                    color: 'blue',
                  },
                  {
                    title: 'Ménages',
                    subtitle: 'Fournissent travail, consomment (C) & épargnent (S)',
                    color: 'green',
                  },
                  {
                    title: 'Banques (SF)',
                    subtitle: 'Collectent l’épargne (S) & financent l’investissement (I)',
                    color: 'violet',
                  },
                  {
                    title: 'État (APU) & RDM',
                    subtitle: 'Impôts (T), Dépenses publiques (G), Export (X) / Import (M)',
                    color: 'orange',
                  },
                ],
              },
            },
            keyRule:
              'Dans le circuit économique fondamental : $\\text{Production} \\longrightarrow \\text{Distribution de revenus} \\longrightarrow \\text{Dépense (Consommation + Investissement)} \\longrightarrow \\text{Production}$.',
            konanTip:
              'Quand un ingénieur SRIT travaille pour une entreprise télécom : son travail est le flux réel (Ménage $\\to$ SNF) et son salaire est le flux monétaire (SNF $\\to$ Ménage).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p3_ex4',
              type: 'mcq',
              prompt:
                'Lorsqu’un ménage travaille dans une entreprise de télécommunications et perçoit un salaire mensuel en fin de mois, comment qualifie-t-on respectivement la prestation de travail et le versement du salaire ?',
              options: [
                'La prestation de travail est un flux réel et le salaire est un flux monétaire en sens inverse',
                'La prestation de travail et le salaire sont tous deux des flux monétaires unilatéraux',
                'La prestation de travail est un flux financier et le salaire est un flux physique de consommation intermédiaire',
                'La prestation de travail est une importation et le salaire est une subvention publique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La force de travail fournie par le salarié à l’entreprise est un flux réel, tandis que la rémunération versée par l’entreprise au ménage en contrepartie est un flux monétaire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Équilibre macroéconomique',
            stepTheme: 'violet',
            stepTitle: 'L’identité comptable Emplois-Ressources : $Y + M = C + I + G + X$',
            paragraphText:
              "Sur le marché des biens et services d'une économie nationale, tout bien ou service utilisé (un **Emploi**) provient nécessairement soit de la production nationale ($Y$, mesurée par le PIB), soit de l'étranger via les importations ($M$). Les **Ressources** totales valent donc $R = Y + M$. Ces ressources sont affectées à quatre grands **Emplois** finals : la consommation finale privée ($C$), l'investissement brut ($I$, comprenant la Formation Brute de Capital Fixe et la variation des stocks), les dépenses publiques ($G$) et les exportations vers le Reste du Monde ($X$). L'égalité comptable emplois-ressources s'écrit donc toujours : $Y + M = C + I + G + X$.",
            formula: {
              name: 'Équation du PIB par la demande globale',
              formula: 'Y = C + I + G + (X - M)',
              note: 'C + I + G représente la demande intérieure (ou absorption domestique) et (X - M) le solde extérieur net.',
            },
            keyRule:
              'En économie fermée ($X = 0$ et $M = 0$), l’équilibre emplois-ressources se simplifie en $Y = C + I + G$, et sans État en $Y = C + I \\iff I = S$.',
            konanTip:
              'Ne place jamais les importations $M$ du côté des emplois ! Les importations sont une RESSOURCE pour l’économie nationale ($Y + M$) et viennent en soustraction dans le calcul du PIB.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans une économie ouverte, on donne : $C = 500$, $I = 200$, $G = 150$, $X = 120$ et $M = 170$. Quelle est la valeur de la production nationale $Y$ (PIB) selon l’équilibre emplois-ressources ?',
              options: ['800', '1 140', '970', '850'],
              correctAnswerIndex: 0,
              explanation:
                'D’après l’équilibre emplois-ressources $Y + M = C + I + G + X$, on a $Y = 500 + 200 + 150 + 120 - 170 = 800$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Injections & Fuites',
            stepTheme: 'orange',
            stepTitle: 'Équilibre du circuit par les injections et les fuites : $I + G + X = S + T + M$',
            paragraphText:
              "Le revenu national $Y$ distribué aux agents est soit consommé ($C$), soit payé en impôts nets des transferts ($T$), soit épargné ($S$), d'où l'égalité d'affectation du revenu $Y = C + S + T$. En égalisant cette expression avec celle de la demande globale $Y = C + I + G + X - M$ et en simplifiant par $C$, on obtient la condition d'équilibre du circuit économique en termes de **fuites** et d'**injections** : $S + T + M = I + G + X$. L'épargne ($S$), les impôts ($T$) et les importations ($M$) sont des **fuites** hors du flux de consommation intérieure ; l'investissement ($I$), les dépenses publiques ($G$) et les exportations ($X$) sont des **injections** qui relancent le circuit.",
            formula: {
              name: 'Égalité Fuites = Injections dans le circuit économique',
              formula: 'S + T + M = I + G + X \\iff (S - I) + (T - G) = (X - M)',
              note: 'Fuites = S (épargne) + T (impôts) + M (importations) ; Injections = I (investissement) + G (dépenses publiques) + X (exportations).',
            },
            keyRule:
              'Un circuit économique est en équilibre macroéconomique lorsque la somme des fuites ($S + T + M$) est égale à la somme des injections ($I + G + X$).',
            konanTip:
              'Moyen mnémotechnique : une FUITE retire du revenu à la demande intérieure ($S, T, M$), une INJECTION ajoute de la demande aux entreprises nationales ($I, G, X$).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c1_p3_ex6',
              type: 'mcq',
              prompt:
                'Dans l’analyse du circuit macroéconomique en économie ouverte avec État, quels éléments constituent les trois « fuites » du circuit ?',
              options: [
                'L’épargne ($S$), les impôts ($T$) et les importations ($M$)',
                'L’investissement ($I$), les dépenses publiques ($G$) et les exportations ($X$)',
                'La consommation ($C$), l’investissement ($I$) et les salaires ($W$)',
                'Les exportations ($X$), les subventions publiques et le crédit bancaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’épargne ($S$), les impôts ($T$) et les achats à l’étranger ($M$) sont des portions du revenu national qui ne sont pas immédiatement dépensées auprès des producteurs nationaux : ce sont les fuites du circuit, compensées à l’équilibre par les injections ($I + G + X$).',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : LA CONSOMMATION, L'ÉPARGNE ET L'INVESTISSEMENT
  // ============================================================================
  {
    id: 'lmd_srit_l1_anaeco_ch2',
    subjectId: 'lmd_analyse_economique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 2,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Programme LMD SRIT 1 — Analyse Économique (Consommation, Épargne et Investissement)',
    title: 'La Consommation, l’Épargne et l’Investissement',
    summary:
      'Fonctions keynésiennes de consommation et d’épargne, propensions moyennes et marginales, lois d’Engel, théories post-keynésiennes, FBCF et multiplicateur d’investissement.',
    prerequisiteChapterIds: ['lmd_srit_l1_anaeco_ch1'],
    points: [
      makePoint({
        id: 'lmd_srit_l1_anaeco_c2_p1',
        order: 1,
        title: 'Les fonctions keynésiennes de consommation et d’épargne',
        summary:
          'Calculer et interpréter $C = C_0 + cY_d$, $S = -C_0 + (1-c)Y_d$, les propensions $\\text{PMC}, \\text{PmC}, \\text{PMS}, \\text{PmS}$ et le seuil de rupture.',
        conceptExplanation:
          "Dans la théorie keynésienne, le revenu disponible courant $Y_d = Y - T + TR$ est le déterminant fondamental de la consommation et de l'épargne des ménages. L'épargne est définie comme un résidu : la partie non consommée du revenu disponible ($S = Y_d - C$). L'étude des propensions moyennes et marginales permet de quantifier la part du revenu consacrée à la consommation et l'impact d'une variation du revenu sur la dépense.",
        formulas: [
          {
            name: 'Fonction de consommation keynésienne et fonction d’épargne associée',
            formula: 'C = C_0 + cY_d \\quad \\text{et} \\quad S = Y_d - C = -C_0 + (1 - c)Y_d',
            note: 'C_0 > 0 est la consommation incompressible (autonome) ; c \\in ]0, 1[ est la propension marginale à consommer (PmC) ; s = 1 - c est la propension marginale à épargner (PmS).',
          },
          {
            name: 'Relations fondamentales entre propensions moyennes et marginales',
            formula: '\\text{PMC} + \\text{PMS} = \\frac{C}{Y_d} + \\frac{S}{Y_d} = 1 \\quad \\text{et} \\quad c + s = 1',
            note: 'Lorsque Y_d augmente, la PMC = C_0/Y_d + c diminue et tend asymptotiquement vers c, tandis que la PMS augmente.',
          },
        ],
        keyRule:
          'Loi psychologique fondamentale de Keynes : lorsque le revenu disponible augmente, la consommation augmente aussi, mais dans une proportion moindre ($0 < c = \\Delta C / \\Delta Y_d < 1$).',
        workedExample: {
          title: 'Étude complète d’une fonction de consommation keynésienne',
          statement:
            'Dans une économie, la fonction de consommation des ménages est donnée par $C = 150 + 0{,}75 Y_d$ (en milliards de FCFA). 1) Déterminer la fonction d’épargne $S$. 2) Calculer le revenu correspondant au seuil de rupture (épargne nulle). 3) Pour $Y_d = 1\\,000$, calculer $C$, $S$, la $\\text{PMC}$ et la $\\text{PMS}$.',
          methodSteps: [
            '1) Fonction d’épargne : $S = Y_d - C = Y_d - (150 + 0{,}75 Y_d) = -150 + 0{,}25 Y_d$, avec $s = 1 - c = 0{,}25$.',
            '2) Seuil de rupture ($S = 0 \\iff C = Y_d$) : $-150 + 0{,}25 Y_d = 0 \\implies Y_d^* = \\frac{150}{0{,}25} = 600$ milliards de FCFA.',
            '3) Pour $Y_d = 1\\,000$ : $C = 150 + 0{,}75(1\\,000) = 900$ et $S = 1\\,000 - 900 = 100$. On en déduit $\\text{PMC} = \\frac{900}{1\\,000} = 0{,}90$ ($90\\%$) et $\\text{PMS} = \\frac{100}{1\\,000} = 0{,}10$ ($10\\%$). On vérifie bien $\\text{PMC} + \\text{PMS} = 1$.',
          ],
          conclusion:
            'En dessous de $Y_d^* = 600$, les ménages désépargnent ($S < 0$) pour financer leur consommation incompressible ; au-dessus de $600$, ils dégagent une épargne positive ($S > 0$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Consommation & Revenu',
            stepTheme: 'blue',
            stepTitle: 'Consommation marchande, non marchande et revenu disponible $Y_d$',
            paragraphText:
              "La **consommation** est l'acte d'utiliser un bien ou un service qui entraîne sa destruction immédiate (biens non durables) ou progressive (biens durables) en vue de satisfaire directement un besoin humain. Elle comprend la consommation individuelle marchande des ménages, l'autoconsommation (produits du jardin familial) et la consommation collective de services non marchands fournis par les APU. Le déterminant macroéconomique majeur de la consommation et de l'épargne est le **revenu disponible brut** $Y_d$, défini comme les revenus primaires ($Y$) diminués des prélèvements obligatoires ($T$) et augmentés des prestations sociales reçues ($TR$) : $Y_d = Y - T + TR$.",
            formula: {
              name: 'Affectation du revenu disponible des ménages',
              formula: 'Y_d = C + S \\iff S = Y_d - C',
              note: 'Chez Keynes, l’épargne S est un résidu après décision de consommation, alors que chez les néoclassiques l’épargne dépend d’abord du taux d’intérêt.',
            },
            keyRule:
              'Pour les néoclassiques, les ménages choisissent d’abord leur épargne en fonction du taux d’intérêt réel $i$ (et la consommation est le résidu) ; pour Keynes, ils choisissent d’abord leur consommation en fonction du revenu $Y_d$ (et l’épargne est le résidu).',
            konanTip:
              'Retiens bien cette inversion entre Néoclassiques ($S(i)$ d’abord, $C$ résiduel) et Keynes ($C(Y_d)$ d’abord, $S$ résiduel).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p1_ex1',
              type: 'mcq',
              prompt:
                'Quelle différence fondamentale oppose l’analyse keynésienne et l’analyse néoclassique concernant le partage du revenu disponible entre consommation et épargne ?',
              options: [
                'Pour Keynes, la consommation dépend du revenu disponible et l’épargne est un résidu, tandis que pour les néoclassiques l’épargne dépend du taux d’intérêt et la consommation est résiduelle',
                'Pour Keynes, l’épargne dépend uniquement du taux d’intérêt directeur de la Banque Centrale et est toujours supérieure à la consommation',
                'Pour les néoclassiques, le taux d’intérêt n’a aucun impact sur l’arbitrage intertemporel des ménages entre consommation présente et future',
                'Pour Keynes comme pour les néoclassiques, le revenu disponible est intégralement épargné par les ménages à court terme',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chez les néoclassiques, le taux d’intérêt rémunère la renonciation à la consommation présente (arbitrage intertemporel) ; chez Keynes, c’est le niveau du revenu courant $Y_d$ qui détermine la consommation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Loi de Keynes',
            stepTheme: 'violet',
            stepTitle: 'La loi psychologique fondamentale de Keynes et la PmC ($c$)',
            paragraphText:
              "Dans la *Théorie générale* (1936), Keynes énonce sa **loi psychologique fondamentale** : « En moyenne et la plupart du temps, les hommes tendent à accroître leur consommation à mesure que leur revenu croît, mais non d'une quantité aussi grande que l'accroissement du revenu. » Mathématiquement, cela signifie que la **propension marginale à consommer** ($\\text{PmC} = c = \\frac{\\Delta C}{\\Delta Y_d}$ ou $\\frac{dC}{dY_d}$) est strictement comprise entre $0$ et $1$ : $0 < c < 1$. Le complément $s = 1 - c = \\frac{\\Delta S}{\\Delta Y_d}$ est la **propension marginale à épargner** ($\\text{PmS}$), également comprise entre $0$ et $1$.",
            formula: {
              name: 'Propensions marginales à consommer (c) et à épargner (s)',
              formula: 'c = \\text{PmC} = \\frac{\\Delta C}{\\Delta Y_d} \\in ]0, 1[ \\quad \\text{et} \\quad s = \\text{PmS} = \\frac{\\Delta S}{\\Delta Y_d} = 1 - c \\in ]0, 1[',
              note: 'Si c = 0,80, toute hausse de 100 FCFA du revenu disponible entraîne 80 FCFA de consommation supplémentaire et 20 FCFA d’épargne supplémentaire.',
            },
            keyRule:
              'La somme des propensions marginales à consommer et à épargner est toujours égale à $1$ : $c + s = 1$.',
            konanTip:
              'La traduction mathématique exacte de la loi psychologique de Keynes est : $0 < \\frac{\\Delta C}{\\Delta Y_d} < 1$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p1_ex2',
              type: 'mcq',
              prompt:
                'Comment se traduit mathématiquement la « loi psychologique fondamentale » de John Maynard Keynes ?',
              options: [
                '$0 < \\frac{\\Delta C}{\\Delta Y_d} < 1$',
                '$\\frac{\\Delta C}{\\Delta Y_d} > 1$',
                '$\\frac{\\Delta C}{\\Delta Y_d} = 0$',
                '$\\frac{C}{Y_d} < 0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque le revenu augmente ($\\Delta Y_d > 0$), la consommation augmente ($\\Delta C > 0$) mais moins vite que le revenu ($\\Delta C < \\Delta Y_d$), donc $0 < c = \\Delta C / \\Delta Y_d < 1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'PMC et PMS',
            stepTheme: 'violet',
            stepTitle: 'Les propensions moyennes à consommer (PMC) et à épargner (PMS)',
            paragraphText:
              "La **propension moyenne à consommer** ($\\text{PMC} = \\frac{C}{Y_d}$) mesure la part du revenu disponible total qui est consacrée à la consommation. La **propension moyenne à épargner** ($\\text{PMS} = \\frac{S}{Y_d}$, aussi appelée **taux d'épargne** lorsqu'elle est exprimée en pourcentage) mesure la part du revenu disponible consacrée à l'épargne. Comme $C + S = Y_d$, en divisant par $Y_d$ on obtient toujours $\\text{PMC} + \\text{PMS} = 1$. Avec une fonction affine $C = C_0 + cY_d$, on a $\\text{PMC} = \\frac{C_0}{Y_d} + c$ : on constate que $\\text{PMC} > c$ et que la $\\text{PMC}$ est une fonction décroissante du revenu $Y_d$.",
            formula: {
              name: 'Évolution de la PMC avec le revenu dans le modèle affine keynésien',
              formula: '\\text{PMC}(Y_d) = \\frac{C}{Y_d} = \\frac{C_0}{Y_d} + c > c',
              note: 'Comme C_0 > 0, plus le revenu Y_d s’élève, plus C_0/Y_d diminue : les ménages aisés ont une PMC plus faible et un taux d’épargne (PMS) plus élevé que les ménages modestes.',
            },
            keyRule:
              'Dans la fonction keynésienne affine $C = C_0 + cY_d$ avec $C_0 > 0$, la propension moyenne à consommer est toujours supérieure à la propension marginale ($\\text{PMC} > \\text{PmC}$) et décroît quand le revenu augmente.',
            konanTip:
              'Si un ménage désépargne ($C > Y_d$, donc $S < 0$), alors sa $\\text{PMC} > 1$ et sa $\\text{PMS} < 0$, mais la somme $\\text{PMC} + \\text{PMS}$ reste égale à $1$ !',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p1_ex3',
              type: 'mcq',
              prompt:
                'Un ménage dispose d’un revenu disponible $Y_d = 500\\,000\\text{ FCFA}$ et suit la fonction de consommation $C = 50\\,000 + 0{,}70 Y_d$. Quelles sont respectivement sa propension marginale à consommer ($\\text{PmC}$) et sa propension moyenne à consommer ($\\text{PMC}$) ?',
              options: [
                '$\\text{PmC} = 0{,}70$ et $\\text{PMC} = 0{,}80$',
                '$\\text{PmC} = 0{,}80$ et $\\text{PMC} = 0{,}70$',
                '$\\text{PmC} = 0{,}70$ et $\\text{PMC} = 0{,}70$',
                '$\\text{PmC} = 0{,}30$ et $\\text{PMC} = 0{,}20$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La propension marginale est la pente $c = 0{,}70$. La consommation totale vaut $C = 50\\,000 + 0{,}70 \\times 500\\,000 = 400\\,000\\text{ FCFA}$, d’où $\\text{PMC} = \\frac{400\\,000}{500\\,000} = 0{,}80$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Seuil de rupture',
            stepTheme: 'green',
            stepTitle: 'Consommation incompressible $C_0$, fonction d’épargne et seuil de rupture',
            paragraphText:
              "Dans $C = C_0 + cY_d$, le terme constant $C_0 > 0$ représente la **consommation incompressible** (ou consommation autonome) : c'est le minimum vital que le ménage doit consommer même si son revenu courant est nul ($Y_d = 0$), financé alors par la **désépargne** (puiser dans son patrimoine passé ou s'endetter : $S = -C_0 < 0$). Le **seuil de rupture** (ou seuil d'épargne) est le niveau de revenu disponible $Y_d^*$ pour lequel le revenu couvre exactement la consommation ($C = Y_d \\iff S = 0$). Graphiquement, c'est l'intersection entre la droite de consommation et la première bissectrice ($C = Y_d$).",
            visualSchema: {
              type: 'function_plot',
              title: 'Droite de consommation keynésienne et seuil de rupture (1re bissectrice)',
              caption: 'Pour Y < 4 (seuil de rupture), la droite C = 1 + 0,75Y est au-dessus de la bissectrice Y (désépargne) ; pour Y > 4, elle passe en dessous (épargne positive).',
              plot: {
                xMin: 0,
                xMax: 8,
                yMin: 0,
                yMax: 8,
                xStep: 2,
                yStep: 2,
                xLabel: 'Yd',
                yLabel: 'C',
                curves: [
                  {
                    label: 'Bissectrice C = Yd',
                    color: 'slate',
                    pieces: [{ expr: 'x', from: 0, to: 8 }],
                  },
                  {
                    label: 'C = 1 + 0,75 Yd',
                    color: 'blue',
                    pieces: [{ expr: '1 + 0.75*x', from: 0, to: 8 }],
                  },
                ],
                points: [
                  { x: 0, y: 1, label: 'C₀ = 1', filled: true, color: 'orange' },
                  { x: 4, y: 4, label: 'Seuil (S = 0)', filled: true, color: 'green' },
                ],
                verticalLines: [{ x: 4, label: 'Yd* = 4', color: 'green' }],
              },
            },
            formula: {
              name: 'Revenu au seuil de rupture (épargne nulle)',
              formula: 'C = Y_d \\iff C_0 + cY_d^* = Y_d^* \\iff Y_d^* = \\frac{C_0}{1 - c} = \\frac{C_0}{s}',
              note: 'Au seuil de rupture Y_d^*, on a S = 0, PMC = 1 et PMS = 0.',
            },
            keyRule:
              'Au seuil de rupture $Y_d^* = \\frac{C_0}{1-c}$, l’épargne est nulle ($S = 0$), la $\\text{PMC} = 1$ et la $\\text{PMS} = 0$.',
            konanTip:
              'Pour trouver rapidement le seuil de rupture, divise la consommation incompressible $C_0$ par la propension marginale à épargner $s = 1 - c$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p1_ex4',
              type: 'mcq',
              prompt:
                'Soit la fonction de consommation $C = 120 + 0{,}80 Y_d$. Quelle est la valeur du revenu disponible correspondant au seuil de rupture (seuil d’épargne nulle) ?',
              options: ['600', '150', '96', '1 200'],
              correctAnswerIndex: 0,
              explanation:
                'Au seuil de rupture, $S = 0 \\iff Y_d^* = \\frac{C_0}{1 - c} = \\frac{120}{1 - 0{,}80} = \\frac{120}{0{,}20} = 600$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Déterminants hors revenu',
            stepTheme: 'violet',
            stepTitle: 'Les déterminants microéconomiques, psychosociologiques et patrimoniaux',
            paragraphText:
              "Au-delà du revenu courant, la consommation dépend de facteurs **microéconomiques** (le prix du bien, le prix des biens substituables ou complémentaires, le taux d'intérêt du crédit à la consommation, le patrimoine ou effet de richesse) et de facteurs **psychosociologiques** : l'**effet d'imitation** ou de démonstration de **James Duesenberry** (1949, où les ménages imitent le mode de consommation du groupe social immédiatement supérieur et résistent à la baisse de leur niveau de vie passé : **effet de cliquet**), ainsi que la consommation ostentatoire de **Thorstein Veblen** (acheter un bien de luxe parce que son prix élevé confère un prestige social).",
            keyRule:
              'Effet de cliquet (Duesenberry) : lorsque le revenu d’un ménage baisse temporairement, sa consommation baisse beaucoup moins vite car il puise dans son épargne pour défendre son niveau de vie antérieur.',
            konanTip:
              'Associés clés à retenir : Veblen $\\leftrightarrow$ consommation ostentatoire (prestige du prix élevé) ; Duesenberry $\\leftrightarrow$ revenu relatif, effet d’imitation et effet de cliquet.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p1_ex5',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on le phénomène mis en évidence par James Duesenberry (1949) selon lequel les ménages maintiennent leur niveau de consommation antérieur en réduisant leur épargne lorsque leur revenu diminue temporairement ?',
              options: [
                'L’effet de cliquet (ou de crémaillère)',
                'L’illusion monétaire pure',
                'La loi des rendements factoriels décroissants',
                'L’équivalence ricardienne',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les habitudes de consommation acquises lors des périodes de prospérité agissent comme un cliquet qui empêche la consommation de redescendre proportionnellement au revenu en cas de baisse conjoncturelle.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Friedman & Modigliani',
            stepTheme: 'orange',
            stepTitle: 'Les théories post-keynésiennes : Revenu permanent (Friedman) et Cycle de vie (Modigliani)',
            paragraphText:
              "Des études empiriques (Simon Kuznets) ont montré qu'à long terme la $\\text{PMC}$ reste stable alors qu'elle diminue à court terme (énigme de la consommation). Deux théories post-keynésiennes résolvent ce paradoxe en élargissant l'horizon temporel du consommateur : 1) **Milton Friedman** (1957) formule la théorie du **revenu permanent** : le revenu courant $Y = Y_p + Y_t$ se compose d'un revenu permanent anticipé à long terme ($Y_p$, lié au capital humain et financier) et d'un revenu transitoire aléatoire ($Y_t$) ; la consommation ne dépend de façon stable que du revenu permanent ($C = k \\cdot Y_p$), tandis que les gains transitoires sont épargnés. 2) **Franco Modigliani** (1954) formule la théorie du **cycle de vie** : l'individu lisse sa consommation sur toute son existence en s'endettant dans sa jeunesse, en épargnant durant sa vie active pour accumuler un patrimoine, puis en désépargnant pendant sa retraite.",
            keyRule:
              'Friedman = la consommation est proportionnelle au revenu permanent ($Y_p$) ; Modigliani = l’épargne et l’endettement servent à lisser la consommation sur les 3 phases du cycle de vie (jeunesse, vie active, retraite).',
            konanTip:
              'Selon Friedman, une prime exceptionnelle inattendue (revenu transitoire positif $Y_t > 0$) sera majoritairement épargnée et non consommée.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p1_ex6',
              type: 'mcq',
              prompt:
                'Quel économiste a développé la théorie du « cycle de vie » selon laquelle les individus utilisent l’emprunt et l’épargne pour lisser leur consommation entre la jeunesse, la vie active et la retraite ?',
              options: [
                'Franco Modigliani',
                'Milton Friedman',
                'Ernst Engel',
                'David Ricardo',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Franco Modigliani (Prix Nobel 1985) explique le comportement d’épargne par la volonté de stabiliser le niveau de consommation sur l’ensemble des étapes de la vie (jeunesse : désépargne/emprunt ; maturité active : épargne ; vieillesse/retraite : désépargne).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_anaeco_c2_p2',
        order: 2,
        title: 'Structure de la consommation, élasticités et lois d’Engel',
        summary:
          'Calculer les coefficients budgétaires, les élasticités-prix et élasticités-revenu, et classer les biens selon les trois lois d’Ernst Engel.',
        conceptExplanation:
          "Lorsque le revenu des ménages augmente dans le temps, non seulement le volume global de la consommation s'accroît, mais la structure du budget de consommation se déforme profondément. L'analyse des coefficients budgétaires et de l'élasticité-revenu de la demande a permis au statisticien allemand Ernst Engel (1857) d'établir des lois empiriques universelles sur l'évolution des postes de dépenses des ménages.",
        formulas: [
          {
            name: 'Coefficient budgétaire d’un poste de dépense i',
            formula: 'CB_i = \\frac{D_i}{D_{\\text{totale}}} \\times 100',
            note: 'D_i est la dépense consacrée au bien ou groupe de biens i, et D_{totale} = C est la dépense totale de consommation.',
          },
          {
            name: 'Élasticité-revenu de la demande d’un bien i',
            formula: 'e_{R} = \\frac{\\Delta Q_i / Q_i}{\\Delta R / R}',
            note: 'Mesure la sensibilité en pourcentage de la quantité demandée Q_i à une variation de 1 % du revenu R.',
          },
        ],
        keyRule:
          'Si $e_R < 0$, le bien est inférieur ; si $0 \\le e_R \\le 1$, le bien est normal (nécessaire) ; si $e_R > 1$, le bien est supérieur (ou de luxe).',
        workedExample: {
          title: 'Calcul d’élasticité-revenu et classification selon les lois d’Engel',
          statement:
            'Le revenu mensuel d’un ingénieur passe de $400\\,000\\text{ FCFA}$ à $480\\,000\\text{ FCFA}$. Dans le même temps, ses dépenses alimentaires passent de $120\\,000\\text{ FCFA}$ à $132\\,000\\text{ FCFA}$, tandis que ses dépenses de loisirs numériques et voyages passent de $40\\,000\\text{ FCFA}$ à $56\\,000\\text{ FCFA}$. Calculer les élasticités-revenu de ces deux postes et les qualifier.',
          methodSteps: [
            'Taux de croissance du revenu : $\\frac{\\Delta R}{R} = \\frac{480\\,000 - 400\\,000}{400\\,000} = \\frac{80\\,000}{400\\,000} = +20\\%$ ($+0{,}20$).',
            'Alimentation : $\\frac{\\Delta D_{\\text{alim}}}{D_{\\text{alim}}} = \\frac{132\\,000 - 120\\,000}{120\\,000} = +10\\% \\implies e_{R,\\text{alim}} = \\frac{+10\\%}{+20\\%} = 0{,}5$. Comme $0 < 0{,}5 < 1$, c’est un bien normal de première nécessité (1re loi d’Engel : son coefficient budgétaire baisse).',
            'Loisirs numériques & voyages : $\\frac{\\Delta D_{\\text{loisirs}}}{D_{\\text{loisirs}}} = \\frac{56\\,000 - 40\\,000}{40\\,000} = +40\\% \\implies e_{R,\\text{loisirs}} = \\frac{+40\\%}{+20\\%} = 2{,}0$. Comme $e_R > 1$, c’est un bien supérieur (3e loi d’Engel : son coefficient budgétaire augmente).',
          ],
          conclusion:
            'Un poste dont l’élasticité-revenu est inférieure à $1$ voit son poids relatif (coefficient budgétaire) diminuer dans le budget lorsque le ménage s’enrichit, même si la dépense absolue augmente.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Coefficient budgétaire',
            stepTheme: 'blue',
            stepTitle: 'Le coefficient budgétaire et l’analyse de la structure des dépenses',
            paragraphText:
              "Pour étudier la structure de la consommation des ménages (alimentation, logement, transport, santé, télécommunications, loisirs), on calcule le **coefficient budgétaire** de chaque poste : c'est le rapport entre la dépense consacrée à un bien ou groupe de biens déterminé ($D_i$) et la dépense totale de consommation ($C$), généralement exprimé en pourcentage. La somme des coefficients budgétaires de tous les postes de consommation d'un ménage est toujours égale à $1$ (ou $100\\%$).Attention à ne pas confondre le coefficient budgétaire (divisé par la consommation totale $C$) et la propension moyenne à consommer (divisée par le revenu disponible $Y_d$).",
            keyRule:
              'Un coefficient budgétaire se calcule par rapport à la dépense totale de consommation ($CB_i = D_i / C$), et non par rapport au revenu total.',
            konanTip:
              'Si un poste augmente en valeur absolue (ex: de $100$ à $110$) mais moins vite que la consommation totale (qui passe de $500$ à $600$), son coefficient budgétaire DIMINUE (de $20\\%$ à $18{,}3\\%$).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p2_ex1',
              type: 'mcq',
              prompt:
                'Un ménage perçoit un revenu disponible de $400\\,000\\text{ FCFA}$, épargne $80\\,000\\text{ FCFA}$ et dépense $32\\,000\\text{ FCFA}$ en services de télécommunications (Internet et mobile). Quel est le coefficient budgétaire du poste télécommunications ?',
              options: ['10 %', '8 %', '40 %', '25 %'],
              correctAnswerIndex: 0,
              explanation:
                'La dépense totale de consommation vaut $C = Y_d - S = 400\\,000 - 80\\,000 = 320\\,000\\text{ FCFA}$. Le coefficient budgétaire du poste télécoms est donc $CB = \\frac{32\\,000}{320\\,000} \\times 100 = 10\\%$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Élasticité-prix',
            stepTheme: 'violet',
            stepTitle: 'L’élasticité-prix directe de la demande et l’exception de Giffen / Veblen',
            paragraphText:
              "L'**élasticité-prix directe de la demande** ($e_p = \\frac{\\Delta Q / Q}{\\Delta P / P}$) mesure la variation relative de la quantité demandée d'un bien rapportée à la variation relative de son prix. Pour la quasi-totalité des biens (dits **biens ordinaires** ou typiques), la demande est une fonction décroissante du prix ($e_p < 0$, loi de la demande) : si $|e_p| > 1$, la demande est dite **élastique** ; si $0 < |e_p| < 1$, elle est dite **inélastique** (ou rigide, cas des produits de première nécessité comme le sel ou le carburant) ; si $e_p = 0$, elle est parfaitement rigide. Par exception, $e_p > 0$ pour deux catégories atypiques : les **biens de Giffen** (biens alimentaires très pauvres comme la pomme de terre en Irlande au XIXe siècle) et les **biens de Veblen** (luxe ostentatoire).",
            formula: {
              name: 'Élasticité-prix directe de la demande',
              formula: 'e_p = \\frac{\\Delta Q / Q}{\\Delta P / P} = \\frac{\\Delta Q}{\\Delta P} \\times \\frac{P}{Q}',
              note: 'Pour un bien ordinaire, e_p < 0. Pour un bien de Giffen ou de Veblen, e_p > 0.',
            },
            keyRule:
              'Loi générale de la demande : $e_p < 0$. Deux seules exceptions où la quantité demandée augmente avec le prix ($e_p > 0$) : l’effet de Giffen (pauvreté/nécessité) et l’effet de Veblen (snobisme/prestige).',
            konanTip:
              'Fais attention au signe dans les calculs : si le prix baisse de $10\\%$ ($-10\\%$) et que la quantité demandée augmente de $25\\%$ ($+25\\%$), alors $e_p = \\frac{+25\\%}{-10\\%} = -2{,}5$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p2_ex2',
              type: 'mcq',
              prompt:
                'Lorsque le tarif d’un forfait Internet mobile baisse de $10\\%$, le nombre d’abonnés demandeurs augmente de $20\\%$. Quelle est la valeur de l’élasticité-prix de la demande et comment qualifie-t-on cette demande ?',
              options: [
                '$e_p = -2$ : la demande est élastique au prix',
                '$e_p = -0{,}5$ : la demande est inélastique (rigide) au prix',
                '$e_p = +2$ : il s’agit d’un bien de Giffen',
                '$e_p = 0$ : la demande est parfaitement rigide',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$e_p = \\frac{+20\\%}{-10\\%} = -2$. Comme $|e_p| = 2 > 1$, la quantité demandée réagit fortement à la baisse du tarif : la demande est élastique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Élasticité-revenu',
            stepTheme: 'violet',
            stepTitle: 'L’élasticité-revenu ($e_R$) : biens inférieurs, biens normaux et biens supérieurs',
            paragraphText:
              "L'**élasticité-revenu de la demande** ($e_R = \\frac{\\Delta Q / Q}{\\Delta R / R}$) permet de classer rigoureusement les biens économiques en trois catégories selon la réaction de leur demande à l'enrichissement des ménages : 1) Les **biens inférieurs** ($e_R < 0$) : leur consommation diminue en valeur absolue quand le revenu augmente, car les ménages les remplacent par des produits de meilleure qualité (ex: produits bas de gamme, friperie, transport collectif vétuste) ; 2) Les **biens normaux** ($0 \\le e_R \\le 1$) : leur consommation augmente avec le revenu, mais moins vite ou au même rythme que celui-ci (ex: alimentation courante, habillement, logement) ; 3) Les **biens supérieurs** ou de luxe ($e_R > 1$) : leur consommation augmente plus vite que le revenu (ex: santé, culture, loisirs, équipements numériques haut de gamme).",
            keyRule:
              '$e_R < 0 \\iff$ Bien inférieur ; $0 \\le e_R \\le 1 \\iff$ Bien normal ; $e_R > 1 \\iff$ Bien supérieur.',
            konanTip:
              'Un bien de Giffen est nécessairement un bien inférieur ($e_R < 0$), mais tous les biens inférieurs ne sont pas des biens de Giffen !',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p2_ex3',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on un bien économique dont l’élasticité-revenu de la demande est négative ($e_R < 0$) ?',
              options: [
                'Un bien inférieur',
                'Un bien normal de première nécessité',
                'Un bien supérieur (ou de luxe)',
                'Un bien libre non économique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque $e_R < 0$, une hausse du revenu entraîne une baisse de la consommation du bien, car les ménages l’abandonnent au profit de substituts de qualité supérieure : c’est la définition d’un bien inférieur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Les 3 lois d’Engel',
            stepTheme: 'green',
            stepTitle: 'Les trois lois d’Ernst Engel (1857) sur l’évolution des coefficients budgétaires',
            paragraphText:
              "En observant les budgets ouvriers, le statisticien allemand **Ernst Engel** (1857) a formulé trois lois relatives à l'évolution des coefficients budgétaires lorsque le revenu s'élève : **1re loi d'Engel** : la part des dépenses consacrées à l'**alimentation** (coefficient budgétaire alimentaire) diminue à mesure que le revenu augmente ($0 < e_R < 1$). **2e loi d'Engel** : la part des dépenses consacrées à l'**habillement, au logement, au chauffage et à l'éclairage** reste approximativement constante ($e_R \\approx 1$). **3e loi d'Engel** : la part des dépenses consacrées aux autres besoins (**santé, éducation, culture, loisirs, transports et communications**) augmente plus vite que le revenu ($e_R > 1$).",
            visualSchema: {
              type: 'bar_chart',
              title: 'Illustration des lois d’Engel : élasticité-revenu par poste budgétaire',
              caption: 'Le seuil e_R = 1 sépare les postes dont le coefficient budgétaire baisse (Alimentation) de ceux dont il augmente (Santé, Loisirs, Numérique).',
              barChart: {
                yLabel: 'Élasticité-revenu (e_R)',
                unit: '',
                bars: [
                  { label: 'Alimentation', value: 0.5, color: 'orange', annotation: '1re loi : CB baisse (< 1)' },
                  { label: 'Logement / Habit', value: 1.0, color: 'blue', annotation: '2e loi : CB stable (≈ 1)' },
                  { label: 'Santé / Éducation', value: 1.4, color: 'green', annotation: '3e loi : CB hausse (> 1)' },
                  { label: 'Loisirs / Télécoms', value: 1.8, color: 'violet', annotation: '3e loi : Bien supérieur' },
                ],
              },
            },
            keyRule:
              'Première loi d’Engel : plus un ménage (ou un pays) s’enrichit, plus le coefficient budgétaire de l’alimentation diminue, même si la dépense alimentaire en valeur absolue continue d’augmenter.',
            konanTip:
              'Un coefficient budgétaire alimentaire élevé (ex: $> 50\\%$) est un indicateur classique de faible niveau de vie en économie du développement.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p2_ex4',
              type: 'mcq',
              prompt:
                'Que stipule précisément la première loi d’Ernst Engel (1857) lorsque le revenu d’un ménage augmente ?',
              options: [
                'Le coefficient budgétaire consacré aux dépenses alimentaires diminue ($0 < e_R < 1$)',
                'La dépense alimentaire en valeur absolue devient nulle dès que le revenu dépasse le seuil de rupture',
                'Le coefficient budgétaire consacré à l’alimentation augmente plus rapidement que celui des loisirs',
                'Les dépenses de santé et d’éducation disparaissent au profit des dépenses de chauffage',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La 1re loi d’Engel établit que la dépense alimentaire croît moins vite que le revenu ($0 < e_R < 1$), ce qui fait baisser sa part relative (son coefficient budgétaire) dans le budget total.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Courbes d’Engel',
            stepTheme: 'slate',
            stepTitle: 'Interprétation géométrique des courbes d’Engel et mutation de la consommation',
            paragraphText:
              "Une **courbe d'Engel** représente l'évolution de la quantité consommée (ou de la dépense) d'un bien en fonction du revenu $R$. Pour un **bien normal de première nécessité** (alimentation), la courbe est croissante et concave (elle ralentit vers un niveau de satiété). Pour un **bien supérieur** (services numériques, voyages, culture), la courbe est croissante et convexe (elle accélère au-delà d'un certain seuil de revenu). Pour un **bien inférieur**, la courbe croît d'abord aux très bas revenus puis décroît lorsque le ménage accède à la classe moyenne. À long terme, cette dynamique explique la **tertiarisation** de la consommation au profit des services.",
            keyRule:
              'Sur le long terme, l’enrichissement des sociétés transfère le budget des ménages des biens primaires (alimentation) vers les biens manufacturés durables, puis vers les services (santé, numérique, loisirs).',
            konanTip:
              'Savoir relier la forme de la courbe d’Engel à $e_R$ : croissante concave $\\leftrightarrow 0 < e_R < 1$ ; croissante convexe $\\leftrightarrow e_R > 1$ ; décroissante $\\leftrightarrow e_R < 0$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p2_ex5',
              type: 'mcq',
              prompt:
                'Quelle tendance structurelle de long terme observe-t-on dans le budget des ménages à mesure que le niveau de vie moyen d’un pays progresse ?',
              options: [
                'Une baisse de la part de l’alimentation au profit d’une hausse de la part des services (santé, loisirs, télécommunications)',
                'Une hausse continue du coefficient budgétaire alimentaire jusqu’à atteindre 90 % du budget total',
                'Une disparition complète des dépenses de logement et de transport',
                'Un remplacement progressif des biens supérieurs par des biens inférieurs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Conformément aux trois lois d’Engel, la hausse séculaire du pouvoir d’achat réduit le poids relatif de l’alimentation et accroît fortement celui des services (santé, loisirs, numérique).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Ne pas confondre baisse du coefficient budgétaire et baisse de la dépense absolue',
            paragraphText:
              "L'erreur la plus fréquente en examen sur la première loi d'Engel consiste à croire que les ménages riches dépensent moins d'argent pour se nourrir que les ménages modestes. C'est faux ! Comme l'élasticité-revenu de l'alimentation est **positive** ($0 < e_R < 1$), lorsque le revenu augmente, la dépense alimentaire en **valeur absolue** (en FCFA) **augmente** (les ménages achètent davantage ou des produits plus élaborés). En revanche, comme elle augmente **moins vite** que le budget total ($e_R < 1$), sa **part relative** (son coefficient budgétaire en $\\%$) **diminue**. Seul un bien inférieur ($e_R < 0$) voit sa consommation diminuer en valeur absolue.",
            keyRule:
              'Si $0 < e_R < 1$ (bien normal nécessaire) : quand le revenu augmente, la dépense absolue AUGMENTE, mais le coefficient budgétaire DIMINUE.',
            konanTip:
              'Retiens ce tableau de signes quand le revenu $R$ augmente : $e_R < 0 \\implies$ dépense absolue $\\searrow$ et $CB \\searrow$ ; $0 < e_R < 1 \\implies$ dépense absolue $\\nearrow$ mais $CB \\searrow$ ; $e_R > 1 \\implies$ dépense absolue $\\nearrow$ et $CB \\nearrow$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p2_ex6',
              type: 'mcq',
              prompt:
                'Soit un bien dont l’élasticité-revenu est égale à $e_R = +0{,}4$. Lorsque le revenu et le budget total du ménage augmentent de $10\\%$, comment évoluent respectivement la dépense absolue consacrée à ce bien et son coefficient budgétaire ?',
              options: [
                'La dépense absolue augmente de 4 %, mais son coefficient budgétaire diminue',
                'La dépense absolue diminue de 4 % et son coefficient budgétaire augmente',
                'La dépense absolue et le coefficient budgétaire diminuent tous les deux',
                'La dépense absolue augmente de 40 % et son coefficient budgétaire augmente',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec $e_R = +0{,}4 > 0$, une hausse de $10\\%$ du revenu fait croître la demande de $0{,}4 \\times 10\\% = +4\\%$ (la dépense absolue augmente). Mais comme $+4\\% < +10\\%$, la part de ce bien dans le budget total (son coefficient budgétaire) diminue.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_anaeco_c2_p3',
        order: 3,
        title: 'L’Investissement (FBCF) et le multiplicateur keynésien',
        summary:
          'Distinguer les formes d’investissement (remplacement, capacité, productivité), analyser ses déterminants et calculer l’effet multiplicateur $\\Delta Y = k \\cdot \\Delta I$.',
        conceptExplanation:
          "L'investissement est l'opération par laquelle une entreprise ou une administration acquiert ou crée des biens de production durables (capital fixe) destinés à être utilisés pendant plus d'un an dans le processus productif. En comptabilité nationale, il est mesuré par la Formation Brute de Capital Fixe (FBCF). Au niveau macroéconomique, l'investissement exerce un effet d'entraînement puissant sur le revenu national par le mécanisme du multiplicateur keynésien.",
        formulas: [
          {
            name: 'Investissement brut (FBCF), amortissement et investissement net',
            formula: '\\text{FBCF (Investissement brut)} = \\text{Investissement net} + \\text{Amortissement (CCF)}',
            note: 'La Consommation de Capital Fixe (CCF ou amortissement) correspond à l’investissement de remplacement de l’usure et de l’obsolescence.',
          },
          {
            name: 'Multiplicateur keynésien d’investissement (économie fermée sans impôt proportionnel)',
            formula: 'k = \\frac{1}{1 - c} = \\frac{1}{s} \\quad \\text{et} \\quad \\Delta Y = k \\cdot \\Delta I',
            note: 'Comme 0 < c < 1, on a toujours k > 1 : une hausse initiale ΔI de l’investissement génère une hausse plus que proportionnelle ΔY du revenu national.',
          },
        ],
        keyRule:
          'Plus la propension marginale à consommer $c$ est élevée (et donc plus la propension marginale à épargner $s = 1-c$ est faible), plus le multiplicateur keynésien $k = \\frac{1}{1-c}$ est grand.',
        workedExample: {
          title: 'Calcul de l’effet multiplicateur d’un investissement dans le réseau fibre optique',
          statement:
            'Dans une économie fermée où la propension marginale à consommer des ménages est $c = 0{,}80$, un consortium télécom réalise un investissement autonome supplémentaire $\\Delta I = 50\\text{ milliards de FCFA}$ pour déployer un backbone en fibre optique. Calculer la valeur du multiplicateur keynésien $k$, l’accroissement total du revenu national $\\Delta Y$, la variation de la consommation $\\Delta C$ et la variation de l’épargne $\\Delta S$.',
          methodSteps: [
            'Calcul du multiplicateur : $k = \\frac{1}{1 - c} = \\frac{1}{1 - 0{,}80} = \\frac{1}{0{,}20} = 5$.',
            'Accroissement total du revenu national : $\\Delta Y = k \\times \\Delta I = 5 \\times 50 = 250\\text{ milliards de FCFA}$.',
            'Accroissement induit de la consommation : $\\Delta C = c \\times \\Delta Y = 0{,}80 \\times 250 = 200\\text{ milliards de FCFA}$ (on vérifie bien $\\Delta Y = \\Delta C + \\Delta I = 200 + 50 = 250$).',
            'Accroissement de l’épargne : $\\Delta S = s \\times \\Delta Y = 0{,}20 \\times 250 = 50\\text{ milliards de FCFA}$. À l’équilibre final, $\\Delta S = \\Delta I = 50\\text{ milliards}$.',
          ],
          conclusion:
            'En vision keynésienne, c’est l’investissement $\\Delta I$ qui engendre, par l’accroissement du revenu national $\\Delta Y$, une épargne additionnelle exactement égale ($\\Delta S = \\Delta I$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'FBCF & Capital',
            stepTheme: 'blue',
            stepTitle: 'Définition de l’investissement productif, FBCF et investissement immatériel',
            paragraphText:
              "Au sens strict, l'**investissement productif** consiste à acquérir ou produire des biens d'équipement durables (machines, bâtiments, serveurs, réseaux télécoms) qui accroissent ou maintiennent le stock de capital technique. En comptabilité nationale, il est mesuré par la **Formation Brute de Capital Fixe (FBCF)**, qui correspond à la valeur des actifs fixes (matériels ou immatériels comme les logiciels, brevets et dépenses de R&D) acquis moins les cessions, utilisés pendant au moins un an dans le processus de production. Pour les ménages, seul l'**achat de logements neufs** (et les gros travaux d'entretien immobilier) est comptabilisé dans la FBCF. En ajoutant la **variation des stocks** ($\\Delta \\text{Stocks}$) à la FBCF, on obtient la **Formation Brute de Capital (FBC)**.",
            formula: {
              name: 'Formation Brute de Capital (FBC) en comptabilité nationale',
              formula: '\\text{FBC (Investissement total } I) = \\text{FBCF} + \\Delta \\text{Stocks}',
              note: 'Un achat d’actions en Bourse est un placement financier (investissement financier) et NON une FBCF au sens de la comptabilité nationale.',
            },
            keyRule:
              'Pour les ménages, seul l’achat de logements (immobilier) fait partie de la FBCF ; l’achat d’une voiture ou d’un ordinateur par un ménage est une consommation finale durable.',
            konanTip:
              'Piège fréquent : acheter des actions déjà existantes en Bourse est un placement financier (transfert de propriété) et non un investissement productif (FBCF).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p3_ex1',
              type: 'mcq',
              prompt:
                'Laquelle des opérations suivantes est comptabilisée dans la Formation Brute de Capital Fixe (FBCF) par la comptabilité nationale ?',
              options: [
                'L’acquisition de nouveaux serveurs informatiques et de licences logicielles pluriannuelles par une entreprise de télécoms, ainsi que l’achat d’un logement neuf par un ménage',
                'L’achat d’un réfrigérateur et d’un téléviseur par un ménage pour son usage domestique',
                'Le paiement de la facture mensuelle d’électricité d’une usine textile',
                'L’achat en Bourse d’actions existantes par un épargnant particulier',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La FBCF regroupe les acquisitions d’actifs fixes durables (matériels et immatériels comme les logiciels/R&D) par les producteurs, ainsi que l’acquisition de logements par les ménages.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Typologie',
            stepTheme: 'violet',
            stepTitle: 'Investissement de remplacement, de capacité (expansion) et de productivité (modernisation)',
            paragraphText:
              "Selon son objectif économique dans l'entreprise, on distingue trois types d'investissements matériels : 1) L'**investissement de remplacement** (ou de renouvellement), qui sert uniquement à remplacer les équipements usés physiquement ou frappés d'obsolescence technologique afin de maintenir la capacité de production constante (il correspond à l'**amortissement** ou Consommation de Capital Fixe) ; 2) L'**investissement de capacité** (ou d'expansion), qui consiste à ajouter de nouvelles machines ou usines pour produire en plus grande quantité afin de répondre à une hausse de la demande ; 3) L'**investissement de productivité** (ou de modernisation / rationalisation), qui introduit des équipements plus performants (automatisation, robotisation, IA) pour réduire les coûts unitaires de production en substituant du capital au travail.",
            keyRule:
              '$\\text{Investissement brut (FBCF)} = \\text{Investissement de remplacement (Amortissement)} + \\text{Investissement net (Capacité + Productivité)}$.',
            konanTip:
              'L’investissement de capacité crée généralement des emplois (il faut des travailleurs pour faire tourner les nouvelles machines), tandis que l’investissement de productivité peut détruire des emplois à court terme (automatisation).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p3_ex2',
              type: 'mcq',
              prompt:
                'Une entreprise remplace ses anciens commutateurs manuels par un système automatisé piloté par intelligence artificielle afin de réduire ses coûts unitaires à volume de production inchangé. De quel type d’investissement s’agit-il principalement ?',
              options: [
                'Un investissement de productivité (ou de modernisation / rationalisation)',
                'Un simple investissement financier spéculatif',
                'Une consommation intermédiaire non durable',
                'Un investissement purement extensif de capacité sans progrès technique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’investissement de productivité (ou de modernisation) vise à améliorer l’efficacité productive et à abaisser les coûts en modernisant l’appareil de production.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Déterminants de I',
            stepTheme: 'violet',
            stepTitle: 'Les déterminants de l’investissement : demande anticipée, taux d’intérêt et efficacité marginale du capital',
            paragraphText:
              "Pourquoi une entreprise décide-t-elle d'investir ? Quatre déterminants majeurs interviennent : 1) La **demande anticipée** (principe de l'accélérateur : l'entreprise n'accroît sa capacité que si elle anticipe des débouchés croissants) ; 2) Le **taux d'intérêt** $i$ (coût de l'emprunt bancaire ou rendement d'un placement financier alternatif : l'investissement est une fonction décroissante du taux d'intérêt) ; 3) La **rentabilité attendue**, formalisée par Keynes sous le nom d'**Efficacité Marginale du Capital (EMC)** ou Taux de Rendement Interne ($\\text{TRI}$) et par la **Valeur Actuelle Nette ($\\text{VAN}$)** ; 4) La structure financière de l'entreprise (capacité d'**autofinancement** issue des profits mis en réserve et niveau d'endettement).",
            formula: {
              name: 'Critère keynésien de décision d’investissement (EMC vs taux d’intérêt) et VAN',
              formula: '\\text{Investir si } \\text{EMC} > i \\iff \\text{VAN} = -I_0 + \\sum_{t=1}^{n} \\frac{R_t}{(1 + i)^t} > 0',
              note: 'I_0 est le coût initial de l’investissement, R_t les flux nets de trésorerie attendus à la période t, et i le taux d’intérêt du marché.',
            },
            keyRule:
              'Un projet d’investissement est rentable et doit être réalisé si et seulement si son Efficacité Marginale du Capital est supérieure au taux d’intérêt ($\\text{EMC} > i$), ce qui équivaut à une Valeur Actuelle Nette positive ($\\text{VAN} > 0$).',
            konanTip:
              'Effet de levier financier : tant que la rentabilité économique de l’investissement est supérieure au taux d’intérêt de l’emprunt ($r_e > i$), l’endettement augmente la rentabilité des capitaux propres.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p3_ex3',
              type: 'mcq',
              prompt:
                'Selon l’analyse keynésienne, à quelle condition un entrepreneur rationnel décide-t-il de réaliser un projet d’investissement productif ?',
              options: [
                'Lorsque l’Efficacité Marginale du Capital ($\\text{EMC}$) est supérieure au taux d’intérêt $i$ du marché (soit $\\text{VAN} > 0$)',
                'Lorsque le taux d’intérêt $i$ de l’emprunt bancaire est strictement supérieur à l’Efficacité Marginale du Capital',
                'Lorsque la Valeur Actuelle Nette ($\\text{VAN}$) du projet est strictement négative',
                'Uniquement lorsque la demande globale anticipée est en baisse durable',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’entrepreneur compare le taux de rendement interne attendu de l’équipement (l’EMC) au coût du financement ou au rendement d’un placement sans risque (le taux d’intérêt $i$). Il investit si $\\text{EMC} > i$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Multiplicateur',
            stepTheme: 'green',
            stepTitle: 'Le mécanisme du multiplicateur keynésien d’investissement : $k = \\frac{1}{1-c}$',
            paragraphText:
              "Introduit par Richard Kahn (1931) puis généralisé par Keynes (1936), le **multiplicateur d'investissement** explique comment une dépense autonome initiale d'investissement $\\Delta I$ engendre une hausse finale du revenu national $\\Delta Y$ bien supérieure à $\\Delta I$. En effet, la dépense $\\Delta I$ devient immédiatement un revenu distribué aux fournisseurs et salariés du secteur des biens d'équipement (vague 1 : $+\\Delta I$). Ces agents en consomment une fraction $c$, ce qui génère un nouveau revenu $+c\\Delta I$ pour les producteurs de biens de consommation (vague 2), qui eux-mêmes en dépensent une fraction $c$, générant $+c^2\\Delta I$ (vague 3), et ainsi de suite. La somme de cette série géométrique de raison $c \\in ]0,1[$ converge vers $\\Delta Y = \\frac{1}{1-c} \\Delta I$.",
            visualSchema: {
              type: 'flowchart',
              title: 'Propagation en vagues successives du multiplicateur keynésien',
              caption: 'Chaque vague de revenu distribué génère une nouvelle vague de consommation proportionnelle à c.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: 'Vague 1 : Investissement autonome initial ΔI',
                    sublabel: 'Achat d’équipements → Revenu distribué ΔY₁ = ΔI',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: 'Vague 2 : 1re dépense de consommation induite',
                    sublabel: 'Les bénéficiaires consomment c·ΔI et épargnent s·ΔI → Revenu ΔY₂ = c·ΔI',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: 'Vagues 3 à ∞ : Propagation géométrique',
                    sublabel: 'ΔY₃ = c²·ΔI, ΔY₄ = c³·ΔI... (série géométrique de raison c < 1)',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: 'Effet total cumulé sur le PIB',
                    sublabel: 'ΔY = (1 + c + c² + ...)·ΔI = [1 / (1 − c)]·ΔI = k·ΔI',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            formula: {
              name: 'Série géométrique du multiplicateur keynésien',
              formula: '\\Delta Y = \\Delta I (1 + c + c^2 + c^3 + \\dots) = \\frac{1}{1 - c} \\Delta I = \\frac{1}{s} \\Delta I',
              note: 'Le multiplicateur k = 1/(1-c) = 1/s est d’autant plus fort que la fuite en épargne s est faible.',
            },
            keyRule:
              'Avec une fonction de consommation $C = C_0 + cY$, le multiplicateur d’investissement (ou de dépenses publiques $\\Delta G$) vaut $k = \\frac{1}{1-c} = \\frac{1}{s}$.',
            konanTip:
              'Vérifie toujours ton calcul : si $c = 0{,}75$, alors $s = 0{,}25$ et $k = \\frac{1}{0{,}25} = 4$. Si $c = 0{,}80$, alors $s = 0{,}20$ et $k = \\frac{1}{0{,}20} = 5$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p3_ex4',
              type: 'mcq',
              prompt:
                'Dans une économie fermée où la propension marginale à consommer est $c = 0{,}75$, quel est l’accroissement total du revenu national $\\Delta Y$ provoqué par une hausse autonome de l’investissement $\\Delta I = 40\\text{ milliards}$ ?',
              options: [
                '160 milliards',
                '30 milliards',
                '53,33 milliards',
                '40 milliards',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le multiplicateur vaut $k = \\frac{1}{1 - c} = \\frac{1}{1 - 0{,}75} = \\frac{1}{0{,}25} = 4$. L’augmentation totale du revenu national est donc $\\Delta Y = k \\times \\Delta I = 4 \\times 40 = 160\\text{ milliards}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Fuites & Ouverture',
            stepTheme: 'violet',
            stepTitle: 'Affaiblissement du multiplicateur par les fuites (épargne, impôts, importations)',
            paragraphText:
              "Le multiplicateur élémentaire $k = \\frac{1}{1-c} = \\frac{1}{s}$ suppose une économie fermée sans impôt proportionnel, où l'épargne $s$ est la seule fuite. Dans une **économie ouverte avec fiscalité**, une partie du revenu additionnel distribué à chaque vague s'échappe sous forme d'impôts (taux $t$) et d'achats de produits importés (propension marginale à importer $m = \\frac{\\Delta M}{\\Delta Y}$). En présence d'importations $M = M_0 + mY$, le multiplicateur devient $k_{\\text{ouvert}} = \\frac{1}{1 - c + m} = \\frac{1}{s + m}$, qui est strictement inférieur à $\\frac{1}{s}$ : une partie de la relance profite aux producteurs étrangers (c'est la **contrainte extérieure**).",
            formula: {
              name: 'Multiplicateur keynésien en économie ouverte',
              formula: 'k_{\\text{ouvert}} = \\frac{1}{1 - c + m} = \\frac{1}{s + m} < \\frac{1}{s}',
              note: 'm = ΔM/ΔY est la propension marginale à importer. Plus une économie dépend des importations (m élevé), plus son multiplicateur national est faible.',
            },
            keyRule:
              'Toute fuite supplémentaire hors du circuit intérieur (épargne $s$, fiscalité $t$, importations $m$) augmente le dénominateur et réduit la valeur du multiplicateur keynésien.',
            konanTip:
              'Si $c = 0{,}80$ ($s = 0{,}20$) et la propension marginale à importer vaut $m = 0{,}30$, le multiplicateur chute de $k = \\frac{1}{0{,}20} = 5$ (économie fermée) à $k_{\\text{ouvert}} = \\frac{1}{0{,}20 + 0{,}30} = \\frac{1}{0{,}50} = 2$ (économie ouverte) !',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans une économie ouverte où la propension marginale à consommer est $c = 0{,}80$ et la propension marginale à importer est $m = 0{,}20$ (sans impôt proportionnel), quelle est la valeur du multiplicateur d’investissement $k_{\\text{ouvert}} = \\frac{1}{1 - c + m}$ ?',
              options: ['2,5', '5', '1,25', '10'],
              correctAnswerIndex: 0,
              explanation:
                '$k_{\\text{ouvert}} = \\frac{1}{1 - c + m} = \\frac{1}{1 - 0{,}80 + 0{,}20} = \\frac{1}{0{,}40} = 2{,}5$. L’ouverture aux importations divise ici par deux la puissance du multiplicateur par rapport à une économie fermée ($k = 5$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Paradoxe de l’épargne',
            stepTheme: 'orange',
            stepTitle: 'Le paradoxe de la frugalité (paradoxe de l’épargne) et l’accélérateur',
            paragraphText:
              "Pour les économistes classiques et néoclassiques, l'épargne est toujours une vertu préalable nécessaire qui finance l'investissement ($S \\longrightarrow I$). Pour Keynes, au contraire, en situation de sous-emploi, c'est l'investissement autonome qui détermine le revenu national et génère à terme une épargne équivalente ($I \\longrightarrow \\Delta Y \\longrightarrow \\Delta S = \\Delta I$). Si tous les ménages décident simultanément d'épargner davantage (hausse de $s$, donc baisse de $c$), la demande de consommation s'effondre, ce qui réduit le multiplicateur $k = 1/s$, fait chuter la production $Y$ et décourage l'investissement : c'est le **paradoxe de l'épargne** (ou paradoxe de la frugalité). Inversement, l'effet de la variation de la demande $\\Delta Y$ sur le volume d'investissement induit s'appelle le **principe de l'accélérateur** (Albert Aftalion).",
            keyRule:
              'Multiplicateur (Keynes) : une variation de l’investissement $\\Delta I$ entraîne une variation amplifiée du revenu $\\Delta Y$. Accélérateur (Aftalion) : une variation de la demande $\\Delta Y$ entraîne une variation plus que proportionnelle de l’investissement induit.',
            konanTip:
              'Ne confonds jamais le sens de causalité : $\\Delta I \\longrightarrow \\Delta Y$ est le **multiplicateur** ; $\\Delta Y \\longrightarrow I$ est l’**accélérateur** (leur combinaison s’appelle l’oscillateur de Samuelson).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c2_p3_ex6',
              type: 'mcq',
              prompt:
                'Que démontre le « paradoxe de l’épargne » (ou paradoxe de la frugalité) dans la macroéconomie keynésienne de court terme ?',
              options: [
                'Une hausse générale de la propension à épargner des ménages déprime la demande de consommation, réduit le multiplicateur et fait baisser le revenu national et l’emploi',
                'Une hausse de l’épargne des ménages provoque automatiquement une hausse immédiate de l’inflation et du plein-emploi',
                'Il est mathématiquement impossible que l’épargne nationale soit égale à l’investissement à l’équilibre macroéconomique',
                'Plus la propension marginale à épargner $s$ est proche de $1$, plus le multiplicateur keynésien $k = 1/s$ tend vers l’infini',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En économie keynésienne de sous-emploi, vouloir épargner davantage au détriment de la consommation contracte les débouchés des entreprises, abaisse le multiplicateur $k = 1/s$ et provoque une récession qui réduit le revenu global.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : LA MONNAIE, LA CRÉATION MONÉTAIRE ET LES AGRÉGATS ÉCONOMIQUES
  // ============================================================================
  {
    id: 'lmd_srit_l1_anaeco_ch3',
    subjectId: 'lmd_analyse_economique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 3,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'Programme LMD SRIT 1 — Analyse Économique (Monnaie & Agrégats économiques)',
    title: 'La Monnaie, la Création monétaire et les Agrégats économiques',
    summary:
      'Fonctions et formes de la monnaie, agrégats monétaires M1/M2/M3, création monétaire et multiplicateur de crédit, calcul de la Valeur Ajoutée, du PIB (3 optiques), du RNB, de l’inflation et de l’IDH.',
    prerequisiteChapterIds: ['lmd_srit_l1_anaeco_ch1', 'lmd_srit_l1_anaeco_ch2'],
    points: [
      makePoint({
        id: 'lmd_srit_l1_anaeco_c3_p1',
        order: 1,
        title: 'Fonctions, formes historiques de la monnaie et agrégats monétaires',
        summary:
          'Identifier les 3 fonctions d’Aristote, la dématérialisation de la monnaie (fiduciaire, scripturale, électronique) et la hiérarchie $M_1 \\subset M_2 \\subset M_3$.',
        conceptExplanation:
          "La monnaie est l'ensemble des moyens de paiement directement utilisables pour régler les transactions et éteindre les dettes sur un territoire donné, acceptés par tous les agents en raison de la confiance qu'ils inspirent. Pour dépasser les limites du troc (qui exige la double coïncidence des besoins), la monnaie remplit trois fonctions économiques traditionnelles et s'est progressivement dématérialisée au fil de l'histoire jusqu'à la monnaie scripturale et au Mobile Money. La Banque Centrale mesure la masse monétaire en circulation par des agrégats emboîtés classés par ordre de liquidité décroissante.",
        formulas: [
          {
            name: 'Emboîtement des agrégats monétaires par liquidité décroissante',
            formula: 'M_1 = \\text{Billets et pièces} + \\text{Dépôts à vue} \\subset M_2 = M_1 + \\text{Dépôts à court terme} \\subset M_3',
            note: 'M_1 représente les moyens de paiement immédiatement utilisables (liquidité parfaite) ; M_2 ajoute la quasi-monnaie (comptes sur livret, dépôts à terme ≤ 2 ans) ; M_3 ajoute les instruments négociables du marché monétaire.',
          },
        ],
        keyRule:
          'La monnaie scripturale (soldes créditeurs des comptes bancaires courants ou dépôts à vue) représente aujourd’hui la part largement majoritaire (80 à 90 %) de la masse monétaire $M_1$ dans les économies modernes.',
        workedExample: {
          title: 'Calcul des agrégats monétaires $M_1$, $M_2$ et $M_3$ d’une zone monétaire',
          statement:
            'Dans une économie, on recense (en milliards de FCFA) : Billets et pièces en circulation hors banques = $1\\,200$ ; Dépôts à vue (comptes courants) dans les banques = $3\\,800$ ; Comptes sur livret et dépôts à terme $\\le 2\\text{ ans}$ = $2\\,500$ ; Titres d’OPCVM monétaires et pensions = $900$. Calculer $M_1$, $M_2$, $M_3$ et la part de la monnaie scripturale dans $M_1$.',
          methodSteps: [
            'Agrégat $M_1$ (disponibilités monétaires) : $M_1 = 1\\,200 + 3\\,800 = 5\\,000\\text{ milliards}$.',
            'Agrégat $M_2$ ($M_1$ + quasi-monnaie) : $M_2 = 5\\,000 + 2\\,500 = 7\\,500\\text{ milliards}$.',
            'Agrégat $M_3$ (masse monétaire au sens large) : $M_3 = 7\\,500 + 900 = 8\\,400\\text{ milliards}$.',
            'Part de la monnaie scripturale dans $M_1$ : $\\frac{3\\,800}{5\\,000} \\times 100 = 76\\%$ (contre $24\\%$ pour la monnaie fiduciaire).',
          ],
          conclusion:
            'Les agrégats monétaires sont emboîtés ($M_1 \\subset M_2 \\subset M_3$) et classent les actifs financiers du plus liquide ($M_1$) au moins liquide ($M_3$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '3 fonctions',
            stepTheme: 'blue',
            stepTitle: 'Du troc aux trois fonctions économiques de la monnaie (Aristote)',
            paragraphText:
              "Dans une économie de **troc** (échange direct d'un bien contre un autre bien), l'échange se heurte à l'obstacle majeur de la **double coïncidence des besoins**, à l'indivisibilité de certains biens et à la multiplication des prix relatifs ($\\frac{n(n-1)}{2}$ rapports d'échange pour $n$ biens). L'introduction de la **monnaie** lève ces blocages en remplissant trois fonctions définies dès l'Antiquité par Aristote : 1) **Intermédiaire des échanges** (équivalent général qui dissocie la vente de l'achat et possède un pouvoir libératoire immédiat) ; 2) **Unité de compte** (ou étalon de valeur / numéraire qui permet d'exprimer le prix des $n$ biens en une seule unité commune) ; 3) **Réserve de valeur** (elle permet de transférer du pouvoir d'achat du présent vers le futur en différant l'utilisation du revenu, sous réserve que l'inflation ne détruise pas sa valeur réelle).",
            keyRule:
              'Les trois fonctions traditionnelles de la monnaie sont : Intermédiaire des échanges, Unité de compte (mesure des valeurs) et Réserve de valeur.',
            konanTip:
              'Quand tu consultes l’étiquette de prix d’un ordinateur en FCFA sans encore l’acheter, la monnaie joue son rôle d’**unité de compte**. Quand tu paies à la caisse, elle joue son rôle d’**intermédiaire des échanges**.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p1_ex1',
              type: 'mcq',
              prompt:
                'Quelle fonction de la monnaie permet de transférer du pouvoir d’achat dans le temps en dissociant le moment où un agent perçoit son revenu et le moment où il le dépense ?',
              options: [
                'La fonction de réserve de valeur',
                'La fonction pure d’unité de compte',
                'La double coïncidence obligatoire du troc',
                'La fonction de consommation intermédiaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En tant que réserve de valeur, la monnaie est un actif liquide qui conserve le pouvoir d’achat entre le présent et le futur (pont entre le présent et l’avenir selon Keynes).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Évolution historique',
            stepTheme: 'violet',
            stepTitle: 'La dématérialisation de la monnaie : marchandise, métallique, fiduciaire et scripturale',
            paragraphText:
              "Au cours de l'histoire, la monnaie a connu un processus continu de **dématérialisation** : 1) La **monnaie marchandise** (bétail, sel, coquillages cauris), dotée d'une valeur d'usage propre ; 2) La **monnaie métallique** (or, argent, bronze : monnaie pesée, puis comptée, puis frappée), dont la valeur reposait sur le poids de métal précieux (systèmes du bimétallisme où s'applique la **loi de Gresham** : « la mauvaise monnaie chasse la bonne », puis de l'étalon-or) ; 3) La **monnaie fiduciaire** (du latin *fiducia*, confiance : billets de banque à cours forcé et pièces divisionnaires), dont la valeur faciale est très supérieure à la valeur intrinsèque du papier ou de l'alliage ; 4) La **monnaie scripturale**, constituée par de simples écritures dans les comptes courants bancaires (dépôts à vue).",
            keyRule:
              'La monnaie fiduciaire regroupe les billets de banque et la monnaie divisionnaire (pièces) ; la monnaie scripturale est constituée uniquement des soldes créditeurs des comptes bancaires à vue.',
            konanTip:
              'Loi de Gresham (XVIe siècle) : lorsque deux monnaies métalliques ont le même cours légal mais des teneurs en métal précieux différentes, les agents thésaurisent la « bonne monnaie » et utilisent la « mauvaise monnaie » pour leurs paiements (« la mauvaise monnaie chasse la bonne »).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p1_ex2',
              type: 'mcq',
              prompt:
                'Que désigne exactement la « monnaie fiduciaire » dans l’analyse monétaire contemporaine ?',
              options: [
                'L’ensemble des billets de banque et des pièces métalliques (monnaie divisionnaire) en circulation dont la valeur repose sur la confiance',
                'Uniquement les soldes créditeurs inscrits sur les comptes courants bancaires (dépôts à vue)',
                'Les lingots d’or pur détenus dans les coffres-forts des ménages pour une valeur égale à leur poids métallique',
                'Les cartes bancaires en plastique et les carnets de chèques vierges',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Du latin fiducia (confiance), la monnaie fiduciaire désigne les billets émis par la Banque Centrale et les pièces divisionnaires, acceptés à leur valeur faciale malgré une valeur intrinsèque quasi nulle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Monnaie vs Instruments',
            stepTheme: 'orange',
            stepTitle: 'Ne pas confondre la monnaie scripturale et ses instruments de mobilisation + Mobile Money',
            paragraphText:
              "Un piège classique d'examen consiste à confondre la **monnaie scripturale** avec les **instruments de circulation** qui permettent de la faire circuler d'un compte à un autre. La monnaie scripturale est **exclusivement le solde créditeur inscrit sur le compte à vue**. Le **chèque**, la **carte bancaire**, le **virement** ou le **prélèvement** ne sont PAS de la monnaie : ce sont de simples instruments techniques (supports) permettant de mobiliser et transférer la monnaie scripturale (un chéquier sur un compte vide ne vaut rien !). De même, la **monnaie électronique** (stockée sur un serveur ou un portefeuille **Mobile Money** en Côte d'Ivoire : Orange Money, Wave, MTN MoMo) est une valeur monétaire prépayée émise contre remise préalable de fonds (billets ou virement) : l'émetteur de monnaie électronique ne crée pas de monnaie *ex nihilo*.",
            keyRule:
              'Le chèque, la carte bancaire et le virement NE SONT PAS des formes de monnaie : ce sont des instruments de circulation de la monnaie scripturale.',
            konanTip:
              'Si un QCM te demande : « Le chèque est-il une monnaie ? », la réponse est toujours NON (c’est un instrument de mobilisation de la monnaie scripturale).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p1_ex3',
              type: 'mcq',
              prompt:
                'Quelle est la nature économique exacte d’une carte bancaire, d’un chèque ou d’un ordre de virement ?',
              options: [
                'Ce ne sont pas des monnaies en eux-mêmes, mais des instruments permettant de faire circuler la monnaie scripturale',
                'Ce sont les trois composantes principales de la monnaie fiduciaire émise par la Banque Centrale',
                'Ce sont des monnaies marchandises dotées d’une valeur intrinsèque égale à leur plafond de paiement',
                'Ce sont des titres de propriété du capital social des Sociétés Non Financières',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La monnaie scripturale est la somme inscrite au crédit du compte à vue. Le chèque, la carte bancaire et le virement ne sont que les véhicules techniques qui ordonnent le transfert de cette écriture d’un compte à un autre.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Agrégats M1, M2, M3',
            stepTheme: 'green',
            stepTitle: 'Les agrégats monétaires de la Banque Centrale ($M_1 \\subset M_2 \\subset M_3$)',
            paragraphText:
              "Pour surveiller la quantité de monnaie en circulation (la **masse monétaire**) détenue par les agents non financiers résidents, la Banque Centrale (comme la **BCEAO** dans l'espace UEMOA ou la BCE) calcule des **agrégats monétaires** emboîtés par ordre de **liquidité décroissante** (la liquidité est la capacité d'un actif à être utilisé immédiatement comme moyen de paiement sans coût ni risque de perte en capital) : **1) $M_1$** (masse monétaire au sens strict / disponibilités monétaires) = Billets et pièces en circulation + Dépôts à vue (comptes courants) ; **2) $M_2$** = $M_1$ + **Quasi-monnaie** (placements liquides rémunérés mais non directement utilisables par chèque/carte sans conversion préalable : comptes sur livret d'épargne, dépôts à terme $\\le 2\\text{ ans}$) ; **3) $M_3$** (masse monétaire au sens large) = $M_2$ + Instruments négociables du marché monétaire (titres d'OPCVM monétaires, pensions, titres de créances négociables $\\le 2\\text{ ans}$).",
            visualSchema: {
              type: 'layered_stack',
              title: 'Hiérarchie emboîtée des agrégats monétaires (Liquidité décroissante de M1 à M3)',
              caption: 'Chaque agrégat englobe le précédent en y ajoutant des placements financiers un peu moins liquides.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: 'M1',
                    title: 'M1 : Moyens de paiement immédiats (Liquidité maximale)',
                    subtitle: 'Billets & pièces (monnaie fiduciaire) + Dépôts à vue (monnaie scripturale)',
                    color: 'blue',
                  },
                  {
                    badge: 'M2',
                    title: 'M2 = M1 + Quasi-monnaie (Placements à court terme)',
                    subtitle: 'Comptes sur livret d’épargne + Dépôts à terme ≤ 2 ans',
                    color: 'green',
                  },
                  {
                    badge: 'M3',
                    title: 'M3 = M2 + Instruments négociables du marché monétaire',
                    subtitle: 'Titres d’OPCVM monétaires, pensions livrées, titres de créances ≤ 2 ans',
                    color: 'violet',
                  },
                ],
              },
            },
            keyRule:
              '$M_1 = \\text{Monnaie fiduciaire} + \\text{Monnaie scripturale (dépôts à vue)}$ ; $M_2 - M_1 = \\text{Quasi-monnaie (dépôts d’épargne à court terme)}$.',
            konanTip:
              'Un compte courant (dépôt à vue) est dans $M_1$ ; un livret d’épargne bancaire est dans $M_2 - M_1$ (quasi-monnaie) ; tous les éléments de $M_1$ appartiennent aussi à $M_2$ et à $M_3$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p1_ex4',
              type: 'mcq',
              prompt:
                'Que contient exactement l’agrégat monétaire $M_1$ (disponibilités monétaires au sens strict) ?',
              options: [
                'Les billets et pièces en circulation (monnaie fiduciaire) ainsi que les dépôts à vue (monnaie scripturale)',
                'Uniquement les comptes sur livret d’épargne et les dépôts à terme de plus de deux ans',
                'Les actions cotées à la BRVM et les obligations d’État à dix ans',
                'Uniquement l’or détenu dans les réserves internationales de la Banque Centrale',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$M_1$ regroupe les moyens de paiement immédiatement utilisables sans transformation préalable : la monnaie fiduciaire (billets et pièces) et la monnaie scripturale (soldes créditeurs des comptes à vue).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Motifs keynésiens',
            stepTheme: 'violet',
            stepTitle: 'Les trois motifs keynésiens de demande de monnaie et la théorie quantitative',
            paragraphText:
              "Pour les économistes classiques et **Irving Fisher** (théorie quantitative de la monnaie : $M \\cdot V = P \\cdot Y$, où $V$ est la vitesse de circulation de la monnaie et $P$ le niveau général des prix), la monnaie est neutre et n'est demandée que pour effectuer des transactions : toute création monétaire excessive par rapport à la production réelle $Y$ génère de l'**inflation**. À l'inverse, **Keynes** montre que la monnaie est recherchée pour elle-même (**préférence pour la liquidité**) selon trois motifs : 1) Le **motif de transaction** (régler les achats courants, croissant avec le revenu $Y$) ; 2) Le **motif de précaution** (faire face aux dépenses imprévues, croissant avec $Y$) ; 3) Le **motif de spéculation** (conserver des liquidités pour saisir des opportunités sur le marché des obligations, fonction décroissante du taux d'intérêt $i$).",
            formula: {
              name: 'Équation quantitative de la monnaie d’Irving Fisher',
              formula: 'M \\cdot V = P \\cdot Y',
              note: 'M = Masse monétaire ; V = Vitesse de circulation de la monnaie ; P = Niveau général des prix ; Y = Volume des transactions (PIB réel).',
            },
            keyRule:
              'Les trois motifs keynésiens de détention d’encaisses monétaires sont : Transaction ($L_1(Y)$), Précaution ($L_1(Y)$) et Spéculation ($L_2(i)$).',
            konanTip:
              'Chez Keynes, les motifs de transaction et de précaution augmentent avec le revenu $Y$, tandis que le motif de spéculation diminue quand le taux d’intérêt $i$ augmente (car le cours des obligations est alors bas et il vaut mieux acheter des titres que garder du cash).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p1_ex5',
              type: 'mcq',
              prompt:
                'Selon John Maynard Keynes, quels sont les trois motifs qui expliquent la préférence des agents économiques pour la liquidité (demande de monnaie) ?',
              options: [
                'Le motif de transaction, le motif de précaution et le motif de spéculation',
                'Le motif d’imitation, le motif d’ostentation et le motif fiscal',
                'Le motif d’amortissement, le motif d’importation et le motif de subvention',
                'Le motif de troc, le motif métallique et le motif divisionnaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Keynes distingue les encaisses actives détenues pour les motifs de transaction et de précaution (liées au revenu $Y$) et les encaisses oisives détenues pour le motif de spéculation (liées au taux d’intérêt $i$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application UEMOA',
            stepTheme: 'slate',
            stepTitle: 'Le Franc CFA et le rôle de la BCEAO dans l’Union Économique et Monétaire Ouest-Africaine',
            paragraphText:
              "La Côte d'Ivoire appartient à l'**Union Économique et Monétaire Ouest-Africaine (UEMOA)**, qui regroupe 8 États partageant une monnaie commune, le **Franc CFA (XOF)**, émise par un institut d'émission supranational unique : la **Banque Centrale des États de l'Afrique de l'Ouest (BCEAO)**, dont le siège est à Dakar et l'agence principale nationale à Abidjan. La BCEAO détient le monopole d'émission de la monnaie fiduciaire (billets et pièces), conduit la politique monétaire de l'Union (avec pour objectif prioritaire la **stabilité des prix**, soit une maîtrise de l'inflation autour de $2\\%$), gère les réserves officielles de change et supervise le système bancaire via la Commission Bancaire de l'UMOA.",
            keyRule:
              'Dans la zone UEMOA, la BCEAO est la « banque des banques » : elle seule émet la monnaie centrale (fiduciaire et comptes des banques commerciales auprès d’elle) et fixe les taux d’intérêt directeurs.',
            konanTip:
              'Retiens l’objectif principal de la politique monétaire de la BCEAO : assurer la stabilité du niveau général des prix (lutter contre l’inflation) tout en soutenant la croissance économique de l’Union.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p1_ex6',
              type: 'mcq',
              prompt:
                'Quelle institution détient le monopole légal d’émission des billets de banque et des pièces en Franc CFA (XOF) en Côte d’Ivoire et définit la politique monétaire de l’UEMOA ?',
              options: [
                'La Banque Centrale des États de l’Afrique de l’Ouest (BCEAO)',
                'L’ensemble des banques commerciales privées de la place d’Abidjan',
                'La Cour Commune de Justice et d’Arbitrage (CCJA) de l’OHADA',
                'La Bourse Régionale des Valeurs Mobilières (BRVM)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La BCEAO est l’institut d’émission commun aux huit États membres de l’UEMOA ; elle seule a le pouvoir d’émettre la monnaie fiduciaire ayant cours légal.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_anaeco_c3_p2',
        order: 2,
        title: 'La création monétaire et le multiplicateur de crédit',
        summary:
          'Comprendre l’adage « les crédits font les dépôts », les trois contreparties de la masse monétaire et calculer le multiplicateur de crédit $k_m = \\frac{1}{b + r - b\\cdot r}$.',
        conceptExplanation:
          "Contrairement à une idée reçue, les banques commerciales (banques de second rang) n'utilisent pas simplement l'épargne préalable de leurs déposants pour accorder des prêts : elles créent de la monnaie scripturale *ex nihilo* (par un simple jeu d'écritures comptables) chaque fois qu'elles octroient un nouveau crédit à un client, et le remboursement du crédit détruit cette monnaie. Ce pouvoir de création monétaire est toutefois strictement limité par les fuites en billets ($b$) et par les réserves obligatoires ($r$) imposées par la Banque Centrale.",
        formulas: [
          {
            name: 'Multiplicateur de crédit (avec fuites en billets b et réserves obligatoires r)',
            formula: 'k_m = \\frac{1}{b + r - b \\cdot r} \\quad \\text{(ou } k_m = \\frac{1}{b + r(1 - b)} \\text{)}',
            note: 'b est la part de la monnaie détenue sous forme de billets (fuite hors du circuit bancaire) et r est le coefficient de réserves obligatoires sur les dépôts. Si b = 0, alors k_m = 1/r.',
          },
        ],
        keyRule:
          'Adage fondamental de l’économie bancaire : « Les crédits font les dépôts » — l’octroi d’un crédit bancaire crée de la monnaie scripturale, tandis que le remboursement du principal du crédit détruit de la monnaie.',
        workedExample: {
          title: 'Calcul du multiplicateur de crédit et de la création monétaire maximale',
          statement:
            'Le système bancaire commercial dispose de réserves excédentaires en monnaie centrale égales à $\\Delta R_E = 100\\text{ milliards de FCFA}$. Le coefficient de préférence du public pour les billets est $b = 20\\%$ ($0{,}20$) et le taux de réserves obligatoires imposé par la Banque Centrale sur les dépôts à vue est $r = 10\\%$ ($0{,}10$). Calculer le multiplicateur de crédit $k_m$ et le montant maximal de nouveaux crédits $\\Delta C_r$ que le système bancaire peut accorder.',
          methodSteps: [
            'Formule du multiplicateur de crédit : $k_m = \\frac{1}{b + r - b \\cdot r}$.',
            'Application numérique au dénominateur : $b + r - b \\cdot r = 0{,}20 + 0{,}10 - (0{,}20 \\times 0{,}10) = 0{,}30 - 0{,}02 = 0{,}28$.',
            'Valeur du multiplicateur : $k_m = \\frac{1}{0{,}28} \\approx 3{,}5714$.',
            'Volume maximal de crédits nouveaux : $\\Delta C_r = k_m \\times \\Delta R_E = \\frac{100}{0{,}28} \\approx 357{,}14\\text{ milliards de FCFA}$.',
          ],
          conclusion:
            'Plus la préférence du public pour les billets ($b$) ou le taux de réserves obligatoires ($r$) est élevé, plus les fuites en monnaie centrale sont importantes et plus le multiplicateur de crédit $k_m$ diminue.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Crédits → Dépôts',
            stepTheme: 'blue',
            stepTitle: 'Le mécanisme de création de monnaie scripturale : « Les crédits font les dépôts »',
            paragraphText:
              "Lorsqu'une banque commerciale accorde un crédit de $10\\text{ millions de FCFA}$ à une entreprise ou à un ménage, elle inscrit simultanément $10\\text{ millions}$ à l'**actif** de son bilan (créance sur le client) et $10\\text{ millions}$ au **passif** de son bilan (crédit porté sur le compte courant à vue du client). Or, les dépôts à vue constituent la monnaie scripturale : la banque a donc créé $10\\text{ millions de FCFA}$ de monnaie nouvelle *ex nihilo* (à partir de rien, par simple jeu d'écriture), sans retirer un seul franc aux autres déposants ! C'est le sens du célèbre adage bancaire : **« Les crédits font les dépôts »** (et non l'inverse). Symétriquement, lorsque l'emprunteur **rembourse** son crédit, la banque annule la créance et débite le compte courant : il y a **destruction monétaire**.",
            keyRule:
              'Octroi d’un crédit par une banque = Création monétaire (+$M_1$) ; Remboursement du crédit par l’emprunteur = Destruction monétaire (-$M_1$).',
            konanTip:
              'Attention : lorsqu’un épargnant prête directement son argent déjà existant à un ami ou achète une obligation sur le marché financier, il y a simple transfert d’épargne préexistante SANS création monétaire.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p2_ex1',
              type: 'mcq',
              prompt:
                'Que signifie l’adage fondamental de la théorie monétaire « Les crédits font les dépôts » ?',
              options: [
                'Lorsqu’une banque commerciale accorde un prêt, elle crédite le compte à vue de l’emprunteur et crée ainsi ex nihilo une nouvelle monnaie scripturale',
                'Une banque ne peut prêter que le montant exact des billets de banque préalablement déposés dans ses coffres par les épargnants',
                'Le remboursement d’un crédit bancaire arrivé à échéance augmente la masse monétaire en circulation',
                'Seuls les ménages ont le pouvoir juridique de créer de la monnaie fiduciaire lorsqu’ils signent un chèque',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En créditant le compte à vue de son client lors de l’octroi d’un prêt, la banque commerciale augmente directement le stock de dépôts à vue (monnaie scripturale) de l’économie.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: '3 sources / contreparties',
            stepTheme: 'violet',
            stepTitle: 'Les trois sources (contreparties) de la création monétaire',
            paragraphText:
              "Au niveau macroéconomique, la création monétaire des banques (Banque Centrale et banques commerciales) intervient à l'occasion de trois types d'opérations appelées les **contreparties de la masse monétaire** : 1) Les **créances sur l'économie** (octroi de crédits bancaires aux ménages et aux entreprises SNF pour financer la consommation ou l'investissement : c'est la source principale) ; 2) Les **créances nettes sur l'État / le Trésor public** (lorsque les banques achètent des bons du Trésor nouvellement émis ou financent le déficit public) ; 3) Les **avoirs extérieurs nets en devises et en or** (lorsqu'un exportateur ivoirien vend du cacao en dollars ou en euros et cède ces devises à sa banque contre des FCFA nouvellement crédités sur son compte).",
            keyRule:
              'Les trois sources de création monétaire (contreparties de $M_3$) sont : 1) les crédits à l’économie (ménages/entreprises), 2) les créances sur le Trésor public (État), 3) les entrées nettes de devises étrangères (extérieur).',
            konanTip:
              'Un excédent de la balance des paiements (entrées nettes de devises étrangères converties en monnaie nationale) crée de la monnaie nationale ; un déficit extérieur (achats de devises pour payer des importations) détruit de la monnaie nationale.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p2_ex2',
              type: 'mcq',
              prompt:
                'Quelles sont les trois grandes sources (ou contreparties) de la création monétaire dans une économie ouverte ?',
              options: [
                'Les crédits à l’économie (entreprises et ménages), les créances sur l’État (Trésor public) et les entrées nettes de devises étrangères (avoirs extérieurs nets)',
                'L’impôt sur le revenu, la taxe sur la valeur ajoutée (TVA) et les cotisations sociales versées à la CNPS',
                'L’amortissement du capital fixe, la consommation intermédiaire et la désépargne des retraités',
                'Les prêts entre particuliers, les dons aux ONG et le troc de marchandises agricoles',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les banques créent de la monnaie scripturale lorsqu’elles accordent des crédits aux agents privés (créances sur l’économie), lorsqu’elles financent le Trésor public (créances sur l’État) et lorsqu’elles achètent des devises étrangères aux exportateurs (contrepartie extérieure).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Limites & Fuites',
            stepTheme: 'violet',
            stepTitle: 'Pourquoi une banque ne peut-elle pas créer de la monnaie à l’infini ? (Billets $b$ et Réserves $r$)',
            paragraphText:
              "Si les banques commerciales créent de la monnaie scripturale par simple jeu d'écritures, pourquoi ne peuvent-elles pas en créer sans limite ? Parce qu'elles subissent un **besoin de refinancement en monnaie centrale** (la seule monnaie émise par la Banque Centrale) dû à trois contraintes : 1) La **fuite en billets** (coefficient $b$) : les clients retirent une fraction $b$ de leurs dépôts aux guichets ou distributeurs (GAB) sous forme de billets de la Banque Centrale, que la banque commerciale ne peut pas imprimer elle-même ; 2) La **fuite vers les autres banques** (compensée sur le marché interbancaire en monnaie centrale lorsque les parts de marché diffèrent) ; 3) Les **réserves obligatoires** (coefficient $r$) : la Banque Centrale oblige chaque banque commerciale à bloquer sur son compte à la Banque Centrale une fraction $r$ des dépôts de ses clients.",
            keyRule:
              'Une banque commerciale crée sa propre monnaie scripturale, mais elle ne peut pas créer de la **monnaie centrale** (billets de banque + avoirs sur son compte à la Banque Centrale).',
            konanTip:
              'Distingue bien la **monnaie centrale** (émise par la seule BCEAO : billets $B$ + réserves des banques $R$) et la **monnaie scripturale** créée par les banques commerciales.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p2_ex3',
              type: 'mcq',
              prompt:
                'Quelles sont les deux fuites principales en monnaie centrale qui limitent le pouvoir de création monétaire de l’ensemble du système bancaire commercial ?',
              options: [
                'Les retraits de billets par le public (coefficient $b$) et la constitution de réserves obligatoires auprès de la Banque Centrale (coefficient $r$)',
                'La hausse des salaires des employés de banque et le prix du papier des carnets de chèques',
                'La propension moyenne à consommer des ménages et l’élasticité-prix des biens alimentaires',
                'La dépréciation physique des distributeurs automatiques et l’amortissement des ordinateurs bancaires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Chaque fois que les banques créent de la monnaie, une part $b$ est retirée par le public en billets (émis par la seule Banque Centrale) et une part $r$ des dépôts doit être immobilisée en réserves obligatoires à la Banque Centrale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Multiplicateur de crédit',
            stepTheme: 'green',
            stepTitle: 'Calcul du multiplicateur de crédit : $k_m = \\frac{1}{b + r - b\\cdot r}$',
            paragraphText:
              "Lorsqu'une banque (ou le système bancaire) dispose d'un supplément de réserves excédentaires en monnaie centrale $\\Delta R_E$, elle peut accorder des crédits nouveaux $\\Delta C_r$ jusqu'à ce que la totalité de $\\Delta R_E$ soit absorbée par les fuites en billets et en réserves obligatoires. Si $b$ désigne la part de monnaie détenue en billets par le public et $(1-b)$ la part laissée en dépôts à vue, sur chaque unité de crédit créée, la fuite en billets vaut $b$ et la fuite en réserves obligatoires sur les dépôts restants vaut $r(1-b) = r - b\\cdot r$. La fuite totale en monnaie centrale par unité de crédit est donc $b + r(1-b) = b + r - b\\cdot r$. Le **multiplicateur de crédit** vaut par conséquent $k_m = \\frac{1}{b + r - b\\cdot r}$ (et si l'énoncé néglige le produit croisé ou définit $b$ par rapport aux dépôts, on utilise parfois l'approximation $k_m \\approx \\frac{1}{b+r}$ ou $k_m = \\frac{1}{r}$ s'il n'y a pas de billets).",
            formula: {
              name: 'Formule exacte du multiplicateur de crédit bancaire',
              formula: 'k_m = \\frac{1}{b + r(1 - b)} = \\frac{1}{b + r - b \\cdot r} \\quad \\Longrightarrow \\quad \\Delta C_r = k_m \\cdot \\Delta R_E',
              note: 'Cas particulier sans fuite en billets (b = 0) : k_m = 1/r. Par exemple, si b = 0 et r = 10 % (0,10), alors k_m = 1/0,10 = 10.',
            },
            keyRule:
              'Avec $b$ (préférence pour les billets) et $r$ (taux de réserves obligatoires), le multiplicateur de crédit est $k_m = \\frac{1}{b + r - b\\cdot r}$.',
            konanTip:
              'Teste rapidement avec $b = 0{,}5$ et $r = 0{,}2$ : le dénominateur vaut $0{,}5 + 0{,}2 - (0{,}5 \\times 0{,}2) = 0{,}7 - 0{,}1 = 0{,}6$, donc $k_m = \\frac{1}{0{,}6} \\approx 1{,}67$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p2_ex4',
              type: 'mcq',
              prompt:
                'Dans un système bancaire où le coefficient de fuite en billets est $b = 0{,}50$ ($50\\%$) et le taux de réserves obligatoires est $r = 0{,}20$ ($20\\%$), quelle est la valeur exacte du multiplicateur de crédit $k_m = \\frac{1}{b + r - b\\cdot r}$ ?',
              options: [
                '$\\frac{1}{0{,}60} \\approx 1{,}67$',
                '$\\frac{1}{0{,}20} = 5{,}00$',
                '$\\frac{1}{0{,}80} = 1{,}25$',
                '$\\frac{1}{0{,}10} = 10{,}00$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On calcule le coefficient total de fuite en monnaie centrale : $b + r - b\\cdot r = 0{,}50 + 0{,}20 - (0{,}50 \\times 0{,}20) = 0{,}70 - 0{,}10 = 0{,}60$. D’où $k_m = \\frac{1}{0{,}60} \\approx 1{,}67$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Politique monétaire',
            stepTheme: 'green',
            stepTitle: 'Les instruments de contrôle de la Banque Centrale sur la création monétaire',
            paragraphText:
              "Pour réguler la création monétaire des banques commerciales et maîtriser l'inflation, la Banque Centrale (comme la BCEAO) dispose de trois grands instruments de **politique monétaire** : 1) La **manipulation des taux d'intérêt directeurs** (le coût auquel les banques commerciales se refinancent en monnaie centrale auprès de la Banque Centrale : une hausse du taux directeur renchérit le crédit bancaire et freine la création monétaire) ; 2) Les **opérations d'Open Market** (achats ou ventes de titres sur le marché interbancaire pour injecter ou retirer des liquidités en monnaie centrale) ; 3) La modification du **taux de réserves obligatoires ($r$)** (augmenter $r$ réduit directement le multiplicateur de crédit $k_m$ et bloque davantage de liquidités bancaires).",
            keyRule:
              'Politique monétaire restrictive (lutte contre l’inflation) : hausse des taux directeurs, hausse du coefficient de réserves obligatoires $r$, vente de titres sur l’open market. Politique expansionniste (relance) : mesures inverses.',
            konanTip:
              'Si la BCEAO veut freiner une surchauffe inflationniste, elle AUGMENTE ses taux directeurs et/ou le taux de réserves obligatoires $r$.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p2_ex5',
              type: 'mcq',
              prompt:
                'Quelle mesure de politique monétaire la Banque Centrale doit-elle adopter si elle souhaite freiner la création monétaire des banques commerciales pour lutter contre l’inflation ?',
              options: [
                'Augmenter ses taux d’intérêt directeurs et relever le coefficient de réserves obligatoires $r$',
                'Abaisser à zéro le taux de réserves obligatoires $r$ et baisser ses taux directeurs',
                'Injecter massivement des liquidités gratuites sur le marché interbancaire',
                'Supprimer toute limite de refinancement pour les banques de second rang',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une hausse du taux de réserves obligatoires $r$ réduit le multiplicateur de crédit $k_m$, et une hausse des taux directeurs augmente le coût du refinancement bancaire, ce qui freine la demande et l’octroi de nouveaux crédits.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Multiplicateur vs Diviseur',
            stepTheme: 'orange',
            stepTitle: 'Multiplicateur de crédit (approche exogène) versus Diviseur de crédit (approche endogène)',
            paragraphText:
              "En théorie monétaire, deux visions complémentaires décrivent la relation entre la base monétaire centrale ($B_M = \\text{Billets} + \\text{Réserves}$) et la création de crédits : 1) L'approche du **multiplicateur de crédit** suppose que les banques attendent d'abord de détenir des réserves excédentaires préalables ($\\Delta R_E$) avant d'accorder des crédits ($\\Delta C_r = k_m \\cdot \\Delta R_E$, offre de monnaie exogène contrôlée en amont par la Banque Centrale) ; 2) L'approche du **diviseur de crédit** (plus proche de la pratique bancaire contemporaine) montre que les banques commerciales accordent d'abord les crédits solvables demandés par l'économie ($\\Delta C_r$), puis se tournent *a posteriori* vers le marché interbancaire et la Banque Centrale pour obtenir le refinancement en monnaie centrale nécessaire ($\\Delta B_M = \\frac{\\Delta C_r}{k_m}$), la Banque Centrale contrôlant alors le **prix** de ce refinancement via ses taux directeurs.",
            keyRule:
              'Multiplicateur de crédit : $\\Delta R_E \\longrightarrow \\Delta C_r = k_m \\cdot \\Delta R_E$ (réserves préalables). Diviseur de crédit : $\\Delta C_r \\longrightarrow \\Delta B_M = \\frac{1}{k_m} \\cdot \\Delta C_r$ (refinancement a posteriori).',
            konanTip:
              'La formule mathématique du coefficient $k_m = \\frac{1}{b + r - b\\cdot r}$ est la même dans les deux cas ; seule la flèche de causalité s’inverse entre multiplicateur et diviseur.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p2_ex6',
              type: 'mcq',
              prompt:
                'Quelle est la différence conceptuelle entre l’approche du « multiplicateur de crédit » et celle du « diviseur de crédit » ?',
              options: [
                'Dans le multiplicateur, la détention préalable de réserves excédentaires en monnaie centrale précède l’octroi de crédits ; dans le diviseur, les banques accordent d’abord les crédits puis se refinancent a posteriori auprès de la Banque Centrale',
                'Dans le diviseur de crédit, les banques commerciales n’ont plus aucune obligation de détenir des billets ni des réserves obligatoires',
                'Le multiplicateur s’applique uniquement aux ménages tandis que le diviseur s’applique uniquement aux Sociétés Non Financières',
                'Le diviseur de crédit signifie que tout crédit bancaire accordé divise par deux la masse monétaire $M_1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’approche du diviseur (monnaie endogène) inverse la causalité temporelle : les banques commerciales répondent d’abord à la demande de crédit des agents économiques, puis se procurent la monnaie centrale nécessaire $(b + r - br)\\Delta C_r$ auprès de la Banque Centrale au taux directeur en vigueur.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_anaeco_c3_p3',
        order: 3,
        title: 'Les grands agrégats de la comptabilité nationale : VA, PIB, RNB, Inflation et IDH',
        summary:
          'Calculer la Valeur Ajoutée, le PIB selon les 3 optiques (Production, Demande, Revenus), le RNB, le PIB réel, le taux d’inflation (IPC) et analyser les limites du PIB.',
        conceptExplanation:
          "Les agrégats de la comptabilité nationale sont des grandeurs synthétiques qui mesurent le résultat de l'ensemble de l'activité économique d'un pays au cours d'une année. L'agrégat central est le Produit Intérieur Brut (PIB), qui mesure la richesse nouvelle créée par toutes les unités résidentes sur le territoire économique national en sommant leurs valeurs ajoutées (pour éviter tout double comptage des consommations intermédiaires).",
        formulas: [
          {
            name: 'Valeur Ajoutée (VA) d’une unité productive',
            formula: '\\text{VA} = \\text{Production} - \\text{Consommations Intermédiaires (CI)}',
            note: 'Pour une production marchande, la Production est évaluée au prix de vente hors taxes (Chiffre d’affaires corrigé de la variation des stocks).',
          },
          {
            name: 'Les 3 optiques équivalentes du calcul du PIB au prix du marché',
            formula: '\\text{PIB} = \\sum \\text{VA} + \\text{Impôts sur les produits} - \\text{Subventions} = C + I + G + (X - M) = \\text{Rémunérations} + \\text{EBE} + \\text{Impôts nets}',
            note: 'Optique Production (somme des VA + TVA + Droits de douane - Subventions) = Optique Demande (dépenses) = Optique Revenus (répartition).',
          },
          {
            name: 'Passage du PIB (critère territorial) au RNB / PNB (critère national)',
            formula: '\\text{RNB (ou PNB)} = \\text{PIB} + \\text{Revenus des facteurs reçus du RDM} - \\text{Revenus des facteurs versés au RDM}',
            note: 'Le PIB repose sur la résidence sur le territoire ; le Revenu National Brut (RNB, ancien PNB) repose sur la nationalité/résidence des détenteurs de facteurs.',
          },
        ],
        keyRule:
          'On ne somme JAMAIS les chiffres d’affaires des entreprises pour calculer le PIB (ce qui compterait plusieurs fois les matières premières) : on somme uniquement les Valeurs Ajoutées ($\\text{VA} = P - \\text{CI}$).',
        workedExample: {
          title: 'Calcul de la Valeur Ajoutée et du PIB par les optiques Production et Demande',
          statement:
            'Dans une filière agro-industrielle nationale : 1) Les planteurs produisent du blé pour $200$ (avec $30$ d’engrais importés comme CI) et le vendent à une minoterie ; 2) La minoterie produit de la farine pour $350$ (sa seule CI est le blé acheté $200$) et la vend à une boulangerie ; 3) La boulangerie produit et vend du pain aux ménages pour $600$ (sa seule CI est la farine achetée $350$). Les impôts sur les produits (TVA + droits de douane) valent $50$ et les subventions sur les produits valent $10$. Calculer la somme des chiffres d’affaires, la somme des valeurs ajoutées et le PIB de cette économie.',
          methodSteps: [
            'Somme des productions / chiffres d’affaires : $200 + 350 + 600 = 1\\,150$ (chiffre trompeur car le blé est compté 3 fois et la farine 2 fois !).',
            'Valeurs ajoutées : $\\text{VA}_{\\text{planteurs}} = 200 - 30 = 170$ ; $\\text{VA}_{\\text{minoterie}} = 350 - 200 = 150$ ; $\\text{VA}_{\\text{boulangerie}} = 600 - 350 = 250$.',
            'Somme des Valeurs Ajoutées : $\\sum \\text{VA} = 170 + 150 + 250 = 570$ (on retrouve bien : Pain final $600$ moins engrais importés $30 = 570$).',
            'Calcul du PIB au prix du marché : $\\text{PIB} = \\sum \\text{VA} + \\text{Impôts sur les produits} - \\text{Subventions} = 570 + 50 - 10 = 610$.',
          ],
          conclusion:
            'La somme des valeurs ajoutées ($\\sum \\text{VA} = 570$) élimine rigoureusement les doubles emplois liés aux consommations intermédiaires échangées entre entreprises.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Valeur Ajoutée',
            stepTheme: 'blue',
            stepTitle: 'La Valeur Ajoutée ($\\text{VA} = P - \\text{CI}$) et sa répartition primaire',
            paragraphText:
              "La richesse réellement créée par une entreprise au cours d'un cycle de production n'est pas son chiffre d'affaires (sa production vendue $P$), car elle a dû acheter et détruire des biens et services produits par d'autres entreprises : les **Consommations Intermédiaires (CI)** (matières premières, énergie, sous-traitance). La richesse nouvelle propre créée par l'entreprise est sa **Valeur Ajoutée Brute** : $\\text{VA} = P - \\text{CI}$. Cette Valeur Ajoutée sert ensuite à rémunérer les acteurs qui ont contribué à la production : les **salariés** (salaires et cotisations sociales), l'**État** (impôts sur la production), les **prêteurs** (intérêts bancaires), les **actionnaires** (dividendes) et l'**entreprise elle-même** (Excédent Brut d'Exploitation $\\text{EBE}$ et autofinancement).",
            keyRule:
              '$\\text{Valeur Ajoutée (VA)} = \\text{Valeur de la Production } (P) - \\text{Consommations Intermédiaires (CI)}$.',
            konanTip:
              'Pour les Administrations Publiques (APU) dont la production est non marchande (gratuite ou quasi gratuite), la production est conventionnellement évaluée par la somme de leurs coûts de production (salaires des fonctionnaires + CI + amortissements).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p3_ex1',
              type: 'mcq',
              prompt:
                'Une entreprise de services numériques réalise un chiffre d’affaires (production) de $800\\text{ millions de FCFA}$. Pour cela, elle a payé $250\\text{ millions}$ de consommations intermédiaires (électricité, bande passante, fournitures) et $300\\text{ millions}$ de salaires à ses ingénieurs. Quelle est sa Valeur Ajoutée ($\\text{VA}$) ?',
              options: [
                '550 millions de FCFA',
                '250 millions de FCFA',
                '800 millions de FCFA',
                '500 millions de FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\text{VA} = \\text{Production} - \\text{Consommations Intermédiaires} = 800 - 250 = 550\\text{ millions de FCFA}$. Attention au piège : les salaires ($300\\text{ millions}$) ne sont PAS une consommation intermédiaire, mais une répartition de la Valeur Ajoutée !',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: '3 optiques du PIB',
            stepTheme: 'green',
            stepTitle: 'Le calcul du PIB selon les trois optiques : Production, Demande et Revenus',
            paragraphText:
              "Le **Produit Intérieur Brut (PIB)** mesure la valeur totale de la richesse créée en un an par l'ensemble des agents économiques **résidents** sur le territoire national (PIB marchand + PIB non marchand). Il peut être calculé de trois manières strictement équivalentes : **1) Optique de la Production** : $\\text{PIB} = \\sum \\text{VA} + \\text{Impôts sur les produits (TVA + Droits de douane)} - \\text{Subventions sur les produits}$ ; **2) Optique de la Demande (ou des Dépenses)** : $\\text{PIB} = C + I + G + (X - M)$ (où $C + G$ est la consommation finale totale, $I = \\text{FBCF} + \\Delta \\text{Stocks}$ et $X - M$ le solde extérieur) ; **3) Optique des Revenus** : $\\text{PIB} = \\text{Rémunération des salariés} + \\text{EBE et revenus mixtes} + \\text{Impôts sur la production et les importations} - \\text{Subventions}$.",
            keyRule:
              'En économie, $\\text{PIB (Production)} = \\text{PIB (Demande)} = \\text{PIB (Revenus)}$ car toute valeur ajoutée produite est intégralement distribuée en revenus et dépensée en emplois finals.',
            konanTip:
              'Dans l’optique Production, n’oublie jamais de SOUSTRAIRE les subventions sur les produits après avoir ajouté la TVA et les droits de douane à la somme des valeurs ajoutées.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p3_ex2',
              type: 'mcq',
              prompt:
                'Dans un pays, la somme des valeurs ajoutées brutes est $\\sum \\text{VA} = 10\\,000$, la TVA et les droits de douane s’élèvent à $1\\,500$, et les subventions sur les produits versées par l’État valent $300$. Quelle est la valeur du PIB au prix du marché selon l’optique de la production ?',
              options: ['11 200', '11 800', '10 000', '8 800'],
              correctAnswerIndex: 0,
              explanation:
                'Selon l’optique de la production : $\\text{PIB} = \\sum \\text{VA} + \\text{TVA et Droits de douane} - \\text{Subventions sur les produits} = 10\\,000 + 1\\,500 - 300 = 11\\,200$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'PIB vs RNB (PNB)',
            stepTheme: 'violet',
            stepTitle: 'Du PIB (critère territorial) au Revenu National Brut RNB / PNB (critère national)',
            paragraphText:
              "Alors que le **PIB** est un agrégat **territorial** (il mesure la production réalisée *à l'intérieur* des frontières par les unités résidentes, quelle que soit leur nationalité), le **Revenu National Brut (RNB)** — anciennement appelé **Produit National Brut (PNB)** — est un agrégat **national** qui mesure les revenus primaires perçus par les agents d'un pays, y compris ceux qu'ils tirent de l'étranger. Pour passer du PIB au RNB, on ajoute au PIB les revenus des facteurs (salaires, dividendes, intérêts) reçus du Reste du Monde par les résidents, et on retranche les revenus des facteurs versés au Reste du Monde (par exemple les bénéfices rapatriés à l'étranger par les filiales de multinationales implantées dans le pays). Par ailleurs, en retranchant l'**amortissement** (Consommation de Capital Fixe) du PIB, on obtient le **Produit Intérieur Net (PIN)**.",
            formula: {
              name: 'Relation entre PIB, PIN et RNB (ancien PNB)',
              formula: '\\text{PIN} = \\text{PIB} - \\text{Amortissements (CCF)} \\quad ; \\quad \\text{RNB} = \\text{PIB} + \\text{Solde des revenus primaires avec le RDM}',
              note: 'Si les filiales étrangères rapatrient plus de profits hors du pays que les nationaux n’en reçoivent de l’étranger, alors RNB < PIB.',
            },
            keyRule:
              '$\\text{RNB (PNB)} = \\text{PIB} + \\text{Revenus primaires reçus du Reste du Monde} - \\text{Revenus primaires versés au Reste du Monde}$.',
            konanTip:
              'Dans de nombreux pays en développement accueillant des multinationales étrangères qui rapatrient leurs dividendes vers leur maison mère, le PIB est supérieur au RNB ($\\text{PIB} > \\text{RNB}$).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p3_ex3',
              type: 'mcq',
              prompt:
                'Un pays affiche un $\\text{PIB} = 25\\,000\\text{ milliards de FCFA}$. Ses résidents reçoivent $800\\text{ milliards}$ de revenus du travail et du capital en provenance du Reste du Monde, tandis que les facteurs étrangers présents dans le pays rapatrient $1\\,500\\text{ milliards}$ de revenus vers le Reste du Monde. Quel est le Revenu National Brut (RNB / PNB) de ce pays ?',
              options: [
                '24 300 milliards de FCFA',
                '25 700 milliards de FCFA',
                '27 300 milliards de FCFA',
                '25 000 milliards de FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\text{RNB} = \\text{PIB} + \\text{Revenus reçus du RDM} - \\text{Revenus versés au RDM} = 25\\,000 + 800 - 1\\,500 = 24\\,300\\text{ milliards de FCFA}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'PIB nominal vs réel',
            stepTheme: 'green',
            stepTitle: 'PIB nominal (en valeur), PIB réel (en volume), déflateur du PIB et taux de croissance',
            paragraphText:
              "Lorsque le PIB mesuré aux prix de l'année en cours — appelé **PIB nominal** (ou PIB en valeur / à prix courants) — augmente d'une année sur l'autre, cette hausse résulte à la fois d'une augmentation des quantités produites (effet volume) et d'une hausse des prix ou inflation (effet prix). Pour mesurer la véritable **croissance économique**, il faut éliminer l'effet de l'inflation en calculant le **PIB réel** (ou PIB en volume / à prix constants d'une année de base $0$). Le rapport entre le PIB nominal et le PIB réel s'appelle le **déflateur du PIB** (indice implicite des prix du PIB) : $\\text{Déflateur} = \\frac{\\text{PIB nominal}}{\\text{PIB réel}} \\times 100$.",
            formula: {
              name: 'Déflateur du PIB et Taux de croissance économique réelle',
              formula: '\\text{PIB réel} = \\frac{\\text{PIB nominal}}{\\text{Indice des prix}} \\times 100 \\quad ; \\quad g_t = \\frac{\\text{PIB réel}_t - \\text{PIB réel}_{t-1}}{\\text{PIB réel}_{t-1}} \\times 100',
              note: 'La croissance économique officielle d’un pays est toujours le taux de variation en pourcentage du PIB RÉEL (à prix constants).',
            },
            keyRule:
              'Si le PIB nominal augmente de $8\\%$ alors que les prix (inflation) ont augmenté de $8\\%$, le PIB réel n’a pas augmenté : la croissance économique réelle est nulle ($0\\%$).',
            konanTip:
              'Retiens les synonymes d’examen : **PIB nominal** = PIB en valeur = PIB aux prix courants ; **PIB réel** = PIB en volume = PIB aux prix constants (déflaté de l’inflation).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p3_ex4',
              type: 'mcq',
              prompt:
                'Entre l’année de base $0$ (indice des prix $= 100$) et l’année $1$ (indice des prix $= 125$, soit $25\\%$ d’inflation cumulée), le PIB nominal d’un pays est passé de $1\\,000$ à $1\\,500$. Quelle est la valeur du PIB réel de l’année $1$ (aux prix de l’année $0$) et quel est le taux de croissance économique réel ?',
              options: [
                '$\\text{PIB réel}_1 = 1\\,200$, soit une croissance économique réelle de $+20\\%$',
                '$\\text{PIB réel}_1 = 1\\,500$, soit une croissance économique réelle de $+50\\%$',
                '$\\text{PIB réel}_1 = 1\\,000$, soit une croissance économique réelle de $0\\%$',
                '$\\text{PIB réel}_1 = 1\\,875$, soit une croissance économique réelle de $+87{,}5\\%$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On déflate le PIB nominal de l’année 1 : $\\text{PIB réel}_1 = \\frac{1\\,500}{125} \\times 100 = 1\\,200$. Comparé au PIB de l’année de base ($1\\,000$), le taux de croissance réel est $\\frac{1\\,200 - 1\\,000}{1\\,000} \\times 100 = +20\\%$ (et non $+50\\%$ qui était la croissance nominale gonflée par l’inflation).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Inflation & IPC',
            stepTheme: 'violet',
            stepTitle: 'Mesure de l’inflation par l’Indice des Prix à la Consommation (IPC) et ses causes',
            paragraphText:
              "L'**inflation** est la hausse générale, durable et auto-entretenue du niveau général des prix des biens et services, qui entraîne une perte du pouvoir d'achat de la monnaie (à distinguer de la **désinflation**, qui est un ralentissement du rythme de hausse des prix avec un taux d'inflation toujours positif mais plus faible, et de la **déflation**, qui est une baisse durable du niveau général des prix, taux $< 0$). L'inflation est mesurée chaque mois par l'Institut National de la Statistique (INS) à l'aide du taux de variation de l'**Indice des Prix à la Consommation (IPC)** d'un panier représentatif des ménages. Ses trois causes classiques sont : l'**inflation par la monnaie** (excès de création monétaire selon Milton Friedman), l'**inflation par la demande** (demande globale supérieure à la capacité d'offre nationale) et l'**inflation par les coûts** (hausse du prix du pétrole, des matières premières importées ou des salaires supérieure aux gains de productivité).",
            formula: {
              name: 'Taux d’inflation annuel à partir de l’Indice des Prix à la Consommation (IPC)',
              formula: '\\pi_t = \\frac{\\text{IPC}_t - \\text{IPC}_{t-1}}{\\text{IPC}_{t-1}} \\times 100',
              note: 'Si le taux d’inflation passe de +6 % l’an dernier à +3 % cette année, les prix continuent d’augmenter : c’est de la désinflation (et non de la déflation !).',
            },
            keyRule:
              'Inflation ($\\pi > 0$ croissant ou élevé) $\\neq$ Désinflation ($\\pi > 0$ mais en baisse : les prix augmentent moins vite) $\\neq$ Déflation ($\\pi < 0$ : les prix baissent).',
            konanTip:
              'Ne tombe jamais dans le piège entre désinflation et déflation : si l’inflation passe de $5\\%$ à $2\\%$, c’est de la **désinflation** (les prix ont encore augmenté de $2\\%$).',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans un pays, le taux d’inflation annuel est passé de $+5{,}2\\%$ en 2023 à $+3{,}5\\%$ en 2024, puis à $+2{,}1\\%$ en 2025. Comment qualifie-t-on précisément cette évolution économique ?',
              options: [
                'Une désinflation (ralentissement du rythme de la hausse des prix)',
                'Une déflation (baisse généralisée du niveau des prix)',
                'Une hyperinflation galopante',
                'Une stagflation monétaire pure',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Tant que le taux de variation des prix reste positif ($+5{,}2\\% \\to +3{,}5\\% \\to +2{,}1\\%$), le niveau général des prix continue de monter, mais de moins en moins vite : c’est la définition exacte de la désinflation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limites du PIB & IDH',
            stepTheme: 'orange',
            stepTitle: 'Les limites du PIB comme indicateur de bien-être et l’Indice de Développement Humain (IDH)',
            paragraphText:
              "Bien que le **PIB par habitant** ($\\text{PIB} / \\text{Population}$) mesure le niveau de vie matériel moyen, le PIB présente d'importantes **limites** : 1) Il sous-estime ou ignore les activités non rémunérées qui créent pourtant du bien-être (**travail domestique** des ménages, bénévolat) et a du mal à capter l'**économie informelle** et souterraine ; 2) Il ne tient aucun compte des **inégalités de répartition** des revenus (mesurées par l'indice de Gini) ; 3) Il comptabilise positivement des activités destructrices ou réparatrices de nuisances (accidents de la route, embouteillages, pollution) sans déduire l'épuisement du **capital naturel et écologique**. Pour mesurer le **développement** (qualitatif) au-delà de la simple croissance (quantitative), le PNUD a créé en 1990 (sous l'impulsion d'**Amartya Sen** et Mahbub ul Haq) l'**Indice de Développement Humain (IDH)**, compris entre $0$ et $1$, qui combine trois dimensions : la **santé/longévité** (espérance de vie à la naissance), l'**éducation** (durée moyenne et attendue de scolarisation) et le **niveau de vie** (RNB par habitant en parité de pouvoir d'achat).",
            keyRule:
              'L’Indice de Développement Humain (IDH du PNUD, compris entre $0$ et $1$) repose sur 3 critères : 1) Santé/Longévité (espérance de vie), 2) Éducation (scolarisation), 3) Niveau de vie décent (RNB/hab en PPA).',
            konanTip:
              'Retiens la distinction fondamentale : la **croissance** est une hausse quantitative du PIB réel ; le **développement** est une transformation qualitative, sociale et humaine mesurée notamment par l’IDH.',
            exercise: {
              id: 'lmd_srit_l1_anaeco_c3_p3_ex6',
              type: 'mcq',
              prompt:
                'Quelles sont les trois dimensions combinées dans le calcul de l’Indice de Développement Humain (IDH) publié par le Programme des Nations Unies pour le Développement (PNUD) ?',
              options: [
                'La santé/longévité (espérance de vie à la naissance), le niveau d’éducation (durée de scolarisation) et le niveau de vie (RNB par habitant en PPA)',
                'La masse monétaire $M_3$, le taux d’intérêt directeur de la Banque Centrale et le solde de la balance commerciale',
                'Le chiffre d’affaires des entreprises minières, les dépenses militaires et la consommation d’énergie fossile',
                'La propension marginale à consommer, le multiplicateur de crédit et le taux de réserves obligatoires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Conçu à partir des travaux d’Amartya Sen, l’IDH (de $0$ à $1$) évalue le développement humain à travers la santé (espérance de vie), le savoir (années de scolarisation) et le niveau de vie matériel (RNB par habitant en parité de pouvoir d’achat).',
            },
          },
        ],
      }),
    ],
  },
];
