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

export const INTRO_MARKETING_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : CONCEPT DE MARKETING, ÉVOLUTION ET ORIENTATION CLIENT
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch1',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Concept de marketing, évolution et orientation client',
    summary:
      'Fondements étymologiques et définitions de référence (Kotler, AMA, Mercator), histoire des écoles de pensée, concepts clés (besoin, désir, demande, valeur perçue, satisfaction), optiques de gestion marketing et articulation entre marketing stratégique, opérationnel, communication et vente.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Marketing',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch1_p1',
        order: 1,
        title: 'Définitions, étymologie et grandes écoles de pensée du marketing',
        summary:
          'Maîtriser les définitions académiques du marketing (Kotler, AMA, Mercator), son essor historique après la crise de 1929 et les apports des théoriciens majeurs (Alderson, Borden, McCarthy, Prahalad, Brown).',
        conceptExplanation:
          "Le terme « marketing » dérive du latin mercari (« commercer ») et du verbe anglais to market (« faire son marché ») ; le terme français officiel recommandé est « mercatique » (ou « marchéage » pour le mix). Sur le plan financier, on résume souvent le marketing comme « la conquête profitable des marchés ».\n\nTrois définitions de référence structurent la discipline :\n1) Philip Kotler : ensemble des techniques et études ayant pour but de prévoir, constater, susciter, renouveler ou stimuler les besoins des consommateurs et d’adapter de manière continue l’appareil productif et commercial aux besoins ainsi déterminés.\n2) American Marketing Association (AMA) : processus visant à planifier et mettre en œuvre la conception, la fixation du prix, la promotion et la distribution d’idées, de biens et de services afin de créer des échanges satisfaisant les objectifs d’individus et d’organisations.\n3) Mercator : effort d’adaptation des organisations à des marchés concurrentiels, pour influencer en leur faveur le comportement de leurs publics, par une offre dont la valeur perçue est durablement supérieure à celle des concurrents.\n\nSur le plan historique, né en réaction à l’économie classique incapable de gérer les déséquilibres d’une croissance rapide, le marketing prend son essor après la crise de 1929 (passage d’une économie de pénurie à une concurrence intense) : création de l’AMA en 1937, centrage sur le consommateur par Wroe Alderson dans les années 1950, formalisation du Marketing Management par Kotler et Dubois dans les années 1960, introduction de la segmentation et des 4P par Neil Borden et Jerome McCarthy, puis enrichissements contemporains (Holbrook sur la consommation expérientielle, DeSarbo sur la modélisation, Bagozzi sur l’échange, Stephen Brown sur la critique postmoderne et C. K. Prahalad sur les compétences clés / core competences).",
        formulas: [
          {
            name: 'Les 4P originels du plan de marchéage (Borden & McCarthy)',
            formula: '\\text{Marketing Mix} = \\{\\text{Product},\\; \\text{Price},\\; \\text{Place},\\; \\text{Promotion}\\}',
            note: 'En français : Produit, Prix, Distribution (Place) et Communication (Promotion).',
          },
        ],
        keyRule:
          'Le marketing est d’abord un état d’esprit consistant à se placer du point de vue du consommateur pour créer une valeur perçue durablement supérieure à celle des concurrents.',
        workedExample: {
          title: 'Analyser une fintech ouest-africaine avec Mercator et Prahalad',
          statement:
            'Une plateforme de transfert d’argent mobile en Côte d’Ivoire s’appuie sur une infrastructure logicielle ultra-légère et une tarification transparente à 1 % pour dépasser les acteurs historiques. Comment lire ce succès avec Mercator et Prahalad ?',
          methodSteps: [
            'Étape 1 (Mercator) : L’entreprise s’adapte à un marché concurrentiel en proposant une valeur perçue durablement supérieure (simplicité d’usage, rapidité et frais réduits).',
            'Étape 2 (Prahalad — core competences) : L’avantage compétitif repose sur la maîtrise d’un cœur de compétences technologiques et opérationnelles difficile à imiter.',
            'Étape 3 (État d’esprit client) : L’offre part d’une frustration réelle de l’usager (tarifs opaques et files d’attente) plutôt que des habitudes internes du secteur.',
          ],
          conclusion:
            'La performance durable unit compréhension fine des publics (Mercator) et maîtrise d’un cœur de compétences distinctif (Prahalad).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étymologie',
            stepTheme: 'Mercatique et conquête profitable',
            stepTitle: 'Comprendre la racine et le sens fondamental du marketing',
            paragraphText:
              'Avant d’être une boîte à outils publicitaires, le marketing répond à une exigence de rentabilité et d’adaptation au marché.\n' +
              '• **Étymologie** : issu du latin *mercari* (« commercer ») et de l’anglais *to market*, le mot admet « mercatique » comme équivalent français officiel.\n' +
              '• **Définition financière** : le marketing désigne « la conquête profitable des marchés ».\n' +
              '• **État d’esprit** : il impose de concevoir l’offre en se plaçant systématiquement du point de vue du consommateur.\n' +
              'Exemple : une boulangerie abidjanaise qui adapte ses horaires et recettes aux actifs matinaux applique la mercatique avant même d’acheter un panneau publicitaire.',
            keyRule:
              'Le terme français officiel recommandé est « mercatique » ; le marketing englobe tout le cycle de vie d’une offre, de sa conception jusqu’à la satisfaction après-vente.',
            konanTip:
              'Ne réduis jamais le marketing à la seule vente ou publicité : c’est d’abord une posture d’écoute du marché.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quel terme français est officiellement recommandé pour traduire le mot « marketing » et quelle en est la définition financière concise ?',
              options: [
                'La bureautique — la gestion des archives commerciales',
                'La mercatique — la conquête profitable des marchés',
                'La logistique — le transport physique des marchandises',
                'La mercuriale — le contrôle administratif des prix',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Mercatique » est l’équivalent français officiel issu du latin mercari, et sa formule financière synthétique est « la conquête profitable des marchés ».',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Références académiques',
            stepTheme: 'Kotler, AMA et Mercator',
            stepTitle: 'Maîtriser les trois définitions classiques du marketing',
            paragraphText:
              'Trois approches complémentaires permettent d’appréhender toute l’étendue de la discipline.\n' +
              '• **Philip Kotler** : prévoir, constater, susciter ou stimuler les besoins et adapter continuellement l’appareil productif et commercial.\n' +
              '• **AMA (American Marketing Association)** : planifier conception, prix, promotion et distribution d’idées, de biens et de services pour créer des échanges mutuellement satisfaisants.\n' +
              '• **Mercator** : influencer favorablement les publics grâce à une offre dont la valeur perçue est durablement supérieure à celle des concurrents.\n' +
              'Exemple : une application de VTC à Abidjan adapte son tarif et son temps d’attente pour offrir une valeur perçue supérieure aux taxis traditionnels.',
            formula: {
              name: 'Équation de l’offre selon Mercator',
              formula: '\\text{Avantage concurrentiel} \\iff \\text{Valeur perçue}_{\\text{offre}} > \\text{Valeur perçue}_{\\text{concurrents}}',
              note: 'La supériorité doit être durable et reconnue par le public visé.',
            },
            keyRule:
              'Le marketing ne concerne pas uniquement les biens matériels : selon l’AMA, il s’applique aussi aux services, aux idées et aux organisations non marchandes.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Selon la définition de référence du Mercator, par quel levier central une organisation influence-t-elle durablement le comportement de ses publics ?',
              options: [
                'En imposant un monopole réglementaire sur son secteur',
                'En supprimant toute forme de communication commerciale',
                'Par une offre dont la valeur perçue est durablement supérieure à celle des concurrents',
                'En réduisant systématiquement les salaires pour baisser les prix',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Mercator place la « valeur perçue durablement supérieure » à la concurrence au cœur de l’adaptation réussie à un marché concurrentiel.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Histoire',
            stepTheme: 'Crise de 1929 et institutionnalisation',
            stepTitle: 'Comprendre la naissance du marketing moderne au XXe siècle',
            paragraphText:
              'Le marketing moderne émerge lorsque l’abondance industrielle dépasse la capacité d’absorption spontanée des acheteurs.\n' +
              '• **Rupture de 1929** : la crise économique provoque une surproduction et intensifie la concurrence ; il ne suffit plus de fabriquer pour vendre.\n' +
              '• **1937 (AMA)** : fondation de l’American Marketing Association et du *Journal of Marketing* aux États-Unis.\n' +
              '• **Années 1950–1960** : Wroe Alderson replace le consommateur au centre, puis Philip Kotler fonde l’école du Marketing Management (diffusée en France avec Bernard Dubois).\n' +
              'Exemple : après 1945, les constructeurs automobiles passent d’un modèle unique standardisé à des gammes diversifiées adaptées aux familles.',
            keyRule:
              'Retiens la chronologie fondatrice : Crise de 1929 (essor concurrentiel) → 1937 (AMA) → Années 1950 (Alderson) → Années 1960 (Kotler, Borden & McCarthy).',
            konanTip:
              'En question d’examen, associe toujours la crise de 1929 au basculement d’une économie dominée par la production vers une économie tirée par la demande.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Quel événement économique du XXe siècle a provoqué une crise de surproduction qui a accéléré l’essor du marketing moderne ?',
              options: [
                'La crise économique de 1929',
                'La création de la zone euro en 1999',
                'L’invention de l’imprimerie au XVe siècle',
                'L’adoption du système métrique décimal',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La crise de 1929 a brisé l’illusion qu’il suffisait de produire pour écouler la marchandise, obligeant les firmes à analyser et conquérir la demande.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Les 4P',
            stepTheme: 'Borden et McCarthy',
            stepTitle: 'Identifier les 4 leviers du plan de marchéage',
            paragraphText:
              'Pour rendre la stratégie concrète, Neil Borden propose l’idée de marketing mix que Jerome McCarthy structure autour de quatre leviers mnémotechniques.\n' +
              '• **Product (Produit)** : caractéristiques techniques, qualité, marque, design, packaging et garantie.\n' +
              '• **Price (Prix)** : tarif facial, remises, conditions de paiement et valeur perçue.\n' +
              '• **Place (Distribution)** : canaux de vente, logistique, points de vente physiques et plateformes en ligne.\n' +
              '• **Promotion (Communication)** : publicité, promotion des ventes, relations publiques et marketing digital.\n' +
              'Exemple : lancer un forfait data étudiant à 1 500 FCFA (Price) avec 5 Go (Product), vendu via Mobile Money (Place) et promu sur TikTok (Promotion).',
            formula: {
              name: 'Correspondance exacte des 4P',
              formula: '\\text{Product (Produit)} \\cdot \\text{Price (Prix)} \\cdot \\text{Place (Distribution)} \\cdot \\text{Promotion (Communication)}',
              note: 'Piège fréquent : Place = Distribution (et non « lieu de publicité ») ; Promotion = Communication (et non seulement « rabais »).',
            },
            konanTip:
              'Méfie-toi des faux amis anglais : « Place » recouvre toute la distribution, et « Promotion » désigne l’ensemble de la communication marketing.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Dans le modèle des 4P de McCarthy, à quel levier opérationnel correspond exactement le terme « Place » ?',
              options: [
                'Le classement de la marque sur les moteurs de recherche',
                'Les réductions promotionnelles de fin d’année',
                'La politique de distribution (canaux et points d’accès pour le client)',
                'La conception esthétique de l’emballage du produit',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En anglais marketing, « Place » signifie la distribution (rendre l’offre accessible au bon endroit et au bon moment), tandis que « Promotion » recouvre la communication.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Compétences clés',
            stepTheme: 'Théorie de C. K. Prahalad',
            stepTitle: 'Relier avantage concurrentiel et cœur de compétences',
            paragraphText:
              'Les écoles contemporaines montrent que la performance marketing dépend aussi des ressources internes rares de l’organisation.\n' +
              '• **Théorie des core competences (Prahalad)** : les entreprises les plus performantes se concentrent sur leur cœur de compétences distinctif.\n' +
              '• **Durabilité** : lorsque cette compétence est difficile à copier et créatrice de valeur client, l’avantage concurrentiel devient pérenne.\n' +
              '• **Autres courants** : *consumer research* (Holbrook), modélisation mathématique (DeSarbo) et théorie de l’échange (Bagozzi).\n' +
              'Exemple : un opérateur télécom capitalise sur son maillage d’agents de proximité pour déployer rapidement des services financiers mobiles.',
            keyRule:
              'Selon C. K. Prahalad, un avantage compétitif durable naît de la concentration sur un cœur de compétences unique, plutôt que de la dispersion.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Quel apport stratégique majeur associe-t-on à C. K. Prahalad dans l’évolution de la pensée marketing ?',
              options: [
                'L’invention de la comptabilité en partie double',
                'La théorie des compétences clés (core competences) fondant un avantage compétitif durable',
                'La suppression de toute segmentation du marché',
                'L’interdiction des études qualitatives par entretien',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Prahalad démontre que les organisations les plus compétitives bâtissent leur supériorité sur un cœur de compétences durable et difficilement imitable.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Débats critiques',
            stepTheme: 'École postmoderne (Stephen Brown)',
            stepTitle: 'Nuancer le recours exclusif aux études de marché',
            paragraphText:
              'Le marketing n’est pas une science figée : plusieurs courants remettent en cause une vision trop mécaniste du client.\n' +
              '• **Critique de Stephen Brown** : l’école postmoderne reproche aux marketeurs de dépendre excessivement des études de marché traditionnelles.\n' +
              '• **Limite des sondages sur l’innovation** : les consommateurs peinent à imaginer des ruptures technologiques qu’ils n’ont jamais vues.\n' +
              '• **Place de la vision créative** : les dirigeants doivent aussi faire confiance à leur intuition, leur créativité et leurs compétences propres.\n' +
              'Exemple : avant l’essor du smartphone tactile, la majorité des répondants en sondage réclamaient seulement des claviers physiques plus petits.',
            konanTip:
              'Retiens l’équilibre : les études réduisent le risque d’erreur, mais l’intuition créative reste indispensable pour les innovations de rupture.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Quelle critique centrale formule Stephen Brown (école postmoderne) envers la pratique classique du marketing ?',
              options: [
                'Les marketeurs ignorent totalement le prix de revient des produits',
                'Les entreprises se fient parfois trop aux études de marché au détriment de la créativité et de leurs propres compétences',
                'Le marketing doit être fusionné avec le droit fiscal',
                'Les marques ne doivent jamais utiliser les médias numériques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Stephen Brown souligne que la soumission aveugle aux études de marché bride l’audace créative et les innovations véritablement originales.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch1_p2',
        order: 2,
        title: 'Besoin, désir, demande, valeur perçue, satisfaction et fidélisation',
        summary:
          'Distinguer rigoureusement besoin, désir et demande solvable, mobiliser la pyramide de Maslow, mesurer la valeur nette délivrée au client et comprendre le lien entre satisfaction et fidélisation.',
        conceptExplanation:
          "Au cœur de l’orientation client se trouvent cinq concepts interdépendants :\n1) Le besoin : état de manque ressenti (physiologique, sécurité, appartenance, estime, accomplissement selon Abraham Maslow). Le marketing ne « crée » pas les besoins fondamentaux préexistants ; il les détecte et oriente la manière d’y répondre.\n2) Le désir : moyen spécifique, façonné par la culture et la personnalité, de satisfaire un besoin (ex. besoin d’information → désir d’un smartphone précis).\n3) La demande : désir soutenu par un pouvoir d’achat et une volonté d’acheter.\n\n4) La valeur perçue par le client : différence entre la valeur globale perçue (bénéfices produit, service, personnel, image) et le coût total supporté (prix monétaire, temps, énergie, risque psychologique).\n5) La satisfaction : jugement comparatif entre la performance perçue après consommation et les attentes préalables du client. Si Performance < Attentes → insatisfaction ; si Performance = Attentes → satisfaction ; si Performance > Attentes → enchantement, moteur d’une fidélité durable (moins coûteuse que la conquête de nouveaux clients).",
        formulas: [
          {
            name: 'Valeur nette délivrée au client',
            formula: 'V_{\\text{nette}} = V_{\\text{globale perçue}} - C_{\\text{total client}}',
            note: 'Le coût total inclut le prix payé mais aussi le temps, les efforts et le risque perçu.',
          },
          {
            name: 'Équation de la satisfaction client',
            formula: 'S = \\text{Performance perçue} - \\text{Attentes préalables}',
            note: 'S < 0 : déception ; S = 0 : satisfaction ; S > 0 : enchantement et bouche-à-oreille positif.',
          },
        ],
        keyRule:
          'Besoin = manque fondamental ; Désir = objet culturel souhaité ; Demande = Désir + Pouvoir d’achat + Volonté d’achat. Acquérir un nouveau client coûte souvent 5 à 7 fois plus cher que fidéliser un client existant.',
        workedExample: {
          title: 'Calculer la valeur perçue et la satisfaction d’une commande e-commerce',
          statement:
            'Un client commande un casque audio à 35 000 FCFA (frais de livraison 2 000 FCFA, attente 24 h). Il estime les bénéfices (qualité sonore, garantie, prestige) à 50 000 FCFA et son coût total (prix + livraison + attente) à 40 000 FCFA. Analyser sa valeur nette et sa satisfaction si le colis arrive en 18 h avec un étui offert.',
          methodSteps: [
            'Étape 1 (Valeur nette) : V_nette = 50 000 − 40 000 = +10 000 FCFA. L’offre est fortement créatrice de valeur.',
            'Étape 2 (Comparaison attentes / performance) : La livraison en 18 h (au lieu de 24 h) et l’étui offert dépassent les attentes initiales.',
            'Étape 3 (Effet fidélisation) : S > 0 génère un enchantement client, favorisant le rachat et la recommandation.',
          ],
          conclusion:
            'Améliorer la valeur nette passe autant par l’augmentation des bénéfices perçus que par la réduction des coûts non monétaires (temps, friction).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Concepts fondateurs',
            stepTheme: 'Besoin, désir et demande',
            stepTitle: 'Distinguer besoin, désir et demande solvable',
            paragraphText:
              'Confondre un souhait abstrait et un marché réel conduit à de graves erreurs de prévision des ventes.\n' +
              '• **Besoin** : sentiment de manque naturel ou social (se nourrir, communiquer, être reconnu), indépendant d’une marque précise.\n' +
              '• **Désir** : forme culturelle que prend le besoin (vouloir tel plat d’attiéké ou tel modèle de téléphone).\n' +
              '• **Demande** : désir accompagné d’un pouvoir d’achat suffisant et d’une volonté effective d’acheter.\n' +
              'Exemple : 10 000 étudiants désirent un ordinateur portable haut de gamme à 900 000 FCFA, mais seuls 800 disposent du budget : la demande effective est de 800 unités.',
            formula: {
              name: 'Condition de la demande',
              formula: '\\text{Demande} = \\text{Désir} + \\text{Pouvoir d’achat} + \\text{Volonté d’achat}',
              note: 'Sans solvabilité, un désir ne constitue pas une demande économique.',
            },
            keyRule:
              'Le marketing ne crée pas les besoins fondamentaux ; il révèle des besoins latents et oriente les désirs vers une offre solvable.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Quelle condition précise transforme un simple désir de consommation en une « demande » exploitable sur le marché ?',
              options: [
                'Une campagne d’affichage urbain à grande échelle',
                'Un pouvoir d’achat et une volonté effective d’acheter le produit',
                'La fabrication du bien en très grande série industrielle',
                'L’absence totale d’entreprises concurrentes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un désir sans capacité financière ni intention d’achat reste un vœu ; la demande suppose désir, pouvoir d’achat et volonté d’acquérir.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Hiérarchie des besoins',
            stepTheme: 'Pyramide de Maslow',
            stepTitle: 'Appliquer la pyramide de Maslow au positionnement',
            paragraphText:
              'Abraham Maslow classe les besoins humains en cinq niveaux hiérarchiques, utiles pour comprendre les motivations d’achat.\n' +
              '• **Niveaux inférieurs** : besoins physiologiques (manger, dormir) et besoins de sécurité (protection, assurance, cybersécurité).\n' +
              '• **Niveaux sociaux** : besoin d’appartenance (communautés, réseaux sociaux) et d’estime (statut, marque prestigieuse).\n' +
              '• **Sommet** : besoin d’accomplissement de soi (formation, création, dépassement personnel).\n' +
              'Exemple : un même smartphone répond à la sécurité (géolocalisation), à l’appartenance (messageries) et à l’estime (modèle phare).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Pyramide des besoins de Maslow appliquée au numérique',
              caption: 'Un produit ou service digital peut activer plusieurs étages de motivation, de la survie à l’accomplissement.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  { badge: '5', title: 'Accomplissement de soi', subtitle: 'E-learning, création de contenu, entrepreneuriat', color: 'violet' },
                  { badge: '4', title: 'Estime & Statut', subtitle: 'Marques premium, badges, reconnaissance sociale', color: 'blue' },
                  { badge: '3', title: 'Appartenance sociale', subtitle: 'Réseaux sociaux, communautés en ligne, messageries', color: 'green' },
                  { badge: '2', title: 'Sécurité & Protection', subtitle: 'Paiement sécurisé, antivirus, assurance, épargne', color: 'orange' },
                  { badge: '1', title: 'Besoins physiologiques', subtitle: 'Livraison alimentaire, eau, énergie, santé de base', color: 'slate' },
                ],
              },
            },
            konanTip:
              'Dans un argumentaire produit, identifie toujours l’étage de Maslow prioritaire pour ta cible afin de choisir les bons mots.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Une application de certification professionnelle en ligne permettant de maîtriser de nouvelles compétences et réaliser son projet de carrière répond prioritairement à quel niveau de Maslow ?',
              options: [
                'Les besoins physiologiques',
                'Le besoin d’accomplissement de soi',
                'Le besoin de sécurité physique immédiate',
                'La simple contrainte fiscale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Se former, progresser et réaliser son potentiel personnel relève du sommet de la pyramide de Maslow : l’accomplissement de soi.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Valeur perçue',
            stepTheme: 'Bénéfices vs Coût total',
            stepTitle: 'Évaluer la valeur nette délivrée au consommateur',
            paragraphText:
              'Le client choisit l’offre qui lui procure la plus forte valeur perçue nette, et pas uniquement le prix facial le plus bas.\n' +
              '• **Valeur globale perçue** : somme des bénéfices liés au produit, aux services associés (SAV, livraison), au personnel et à l’image de marque.\n' +
              '• **Coût total client** : prix monétaire majoré du temps d’attente, de l’effort de déplacement et du risque perçu.\n' +
              '• **Décision d’achat** : l’acheteur compare le ratio valeur/coût entre offres concurrentes.\n' +
              'Exemple : un client paie 1 000 FCFA de plus sur une plateforme fiable plutôt que de risquer une arnaque ou 3 heures de trajet.',
            formula: {
              name: 'Décomposition de la valeur perçue',
              formula: 'V_{\\text{nette}} = (V_{\\text{produit}} + V_{\\text{service}} + V_{\\text{image}}) - (\\text{Prix} + C_{\\text{temps}} + C_{\\text{risque}})',
              note: 'On peut accroître l’attractivité soit en enrichissant les bénéfices, soit en réduisant le temps et le risque perçu.',
            },
            keyRule:
              'Un produit moins cher peut perdre face à un concurrent plus onéreux si son coût caché en temps, effort ou risque est trop élevé.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Une plateforme e-commerce facture 2 000 FCFA plus cher qu’un vendeur informel, mais garantit un paiement sécurisé, une livraison en 2 heures et un retour gratuit. Pourquoi les clients la choisissent-ils ?',
              options: [
                'Parce que le prix facial est le seul composant du coût client',
                'Parce qu’elle réduit les coûts de risque et de temps, augmentant ainsi la valeur perçue nette',
                'Parce que la loi interdit d’acheter moins cher',
                'Parce que les clients ignorent la notion de budget',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La valeur perçue nette compare tous les bénéfices (garantie, rapidité) à tous les coûts (prix + temps + risque). Réduire le risque accroît la valeur nette.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Satisfaction',
            stepTheme: 'Performance vs Attentes',
            stepTitle: 'Comprendre le mécanisme comparatif de la satisfaction',
            paragraphText:
              'La satisfaction n’est pas une note absolue de qualité technique : c’est un écart entre ce que le client espérait et ce qu’il ressent.\n' +
              '• **Insatisfaction (Performance < Attentes)** : promesse publicitaire exagérée ou défaut produit générant plaintes et abandon.\n' +
              '• **Satisfaction simple (Performance = Attentes)** : le contrat est rempli sans surprise.\n' +
              '• **Enchantement (Performance > Attentes)** : expérience supérieure aux promesses, créant un attachement émotionnel.\n' +
              'Exemple : promettre une livraison en 48 h et livrer en 24 h ravit le client ; promettre 1 h et livrer en 3 h le déçoit même si 3 h reste rapide.',
            keyRule:
              'Ne surenchéris jamais dans les promesses publicitaires : des attentes artificiellement gonflées provoquent mécaniquement de l’insatisfaction.',
            konanTip:
              'Stratégie gagnante : « Promettre avec réalisme et délivrer au-delà des attentes » (underpromise, overdeliver).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Un opérateur promet un débit de 100 Mb/s dans sa publicité mais fournit réellement 35 Mb/s, alors que son concurrent promet 30 Mb/s et fournit 35 Mb/s. Quel client sera le plus satisfait à débit réel égal ?',
              options: [
                'Le client du premier opérateur, car la promesse était plus ambitieuse',
                'Les deux clients ressentiront exactement la même déception',
                'Le client du second opérateur, car la performance perçue (35) dépasse ses attentes (30)',
                'Aucun des deux, car la satisfaction ne dépend pas des attentes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La satisfaction mesure Performance − Attentes. Avec 35 contre 100 promis, le premier client est déçu (−65) ; avec 35 contre 30 promis, le second est ravi (+5).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Fidélisation',
            stepTheme: 'Coût d’acquisition vs rétention',
            stepTitle: 'Mesurer l’enjeu économique de la fidélisation client',
            paragraphText:
              'Longtemps focalisé sur la conquête de nouveaux acheteurs, le marketing moderne accorde une priorité stratégique à la rétention.\n' +
              '• **Coût asymétrique** : conquérir un nouveau client coûte nettement plus cher (prospection, publicité, remises d’accueil) que de retenir un client satisfait.\n' +
              '• **Valeur vie client (CLV)** : un client fidèle achète plus souvent, accepte mieux les nouveaux produits et recommande la marque.\n' +
              '• **Outils de fidélisation** : cartes à points, programmes VIP, service client réactif, personnalisation des offres.\n' +
              'Exemple : si un client dépense 15 000 FCFA/mois pendant 3 ans (36 mois), sa valeur cumulée atteint 540 000 FCFA, justifiant un SAV exemplaire.',
            formula: {
              name: 'Valeur vie client simplifiée (CLV)',
              formula: '\\text{CLV} \\approx \\text{Panier moyen} \\times \\text{Fréquence d’achat} \\times \\text{Durée de rétention}',
              note: 'Chaque mois de rétention supplémentaire multiplie la rentabilité de l’acquisition initiale.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Un abonné à une plateforme de streaming dépense 5 000 FCFA par mois. Quel chiffre d’affaires brut génère-t-il sur 2 ans s’il reste fidèle grâce à une bonne expérience utilisateur ?',
              options: [
                '60 000 FCFA',
                '120 000 FCFA',
                '24 000 FCFA',
                '10 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur 2 ans = 24 mois, le revenu cumulé est de 5 000 × 24 = 120 000 FCFA. La fidélisation démultiplie la rentabilité par rapport à un achat unique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège courant',
            stepTheme: 'Client satisfait vs fidèle',
            stepTitle: 'Savoir pourquoi un client satisfait peut tout de même partir',
            paragraphText:
              'La satisfaction est une condition nécessaire mais pas toujours suffisante pour garantir la fidélité sur un marché concurrentiel.\n' +
              '• **Effet zapping et promotions** : un client satisfait peut tester un concurrent offrant une forte remise ponctuelle ou plus de praticité.\n' +
              '• **Fidélité réelle vs inertie** : ne pas changer par simple habitude (faute d’alternative) n’est pas une vraie fidélité attitudinale.\n' +
              '• **Bouclier relationnel** : seule une relation personnalisée et des coûts de sortie/bénéfices exclusifs verrouillent durablement la préférence.\n' +
              'Exemple : des clients satisfaits de leur banque traditionnelle migrent vers une néo-banque dès que celle-ci propose l’ouverture de compte en 3 minutes.',
            keyRule:
              'La satisfaction ne suffit plus face à des concurrents agiles : il faut viser l’attachement émotionnel, la commodité continue et l’innovation d’usage.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Pourquoi un client qui se déclare « satisfait » d’une marque peut-il néanmoins passer à un concurrent ?',
              options: [
                'Parce que la satisfaction est interdite par les règles de la concurrence',
                'Parce qu’un concurrent peut proposer une meilleure valeur perçue, plus de praticité ou une offre promotionnelle attractive',
                'Parce qu’un client satisfait n’a plus le droit de racheter le même produit',
                'Parce que la fidélisation ne fonctionne qu’en situation de monopole',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La satisfaction évite l’insatisfaction mais n’immunise pas contre une proposition de valeur encore supérieure ou plus fluide chez un concurrent.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch1_p3',
        order: 3,
        title: 'Les 5 optiques marketing, Marketing vs Vente/Communication et Stratégique vs Opérationnel',
        summary:
          'Maîtriser l’évolution des 5 optiques de gestion (production, produit, vente, marketing, sociétal), distinguer rigoureusement marketing, communication et vente, et articuler marketing stratégique et opérationnel.',
        conceptExplanation:
          "Les entreprises ont historiquement adopté cinq grandes optiques pour piloter leurs échanges avec le marché :\n1) Optique Production : le client privilégie les produits disponibles et bon marché → priorité à l’efficience industrielle et à la baisse des coûts (économies d’échelle).\n2) Optique Produit : le client préfère l’offre présentant la meilleure qualité ou performance technique → risque de « myopie marketing » (tomber amoureux de son produit en oubliant le besoin réel).\n3) Optique Vente : le consommateur n’achète pas spontanément assez → effort agressif de prospection et de persuasion pour écouler ce qui est déjà fabriqué.\n4) Optique Marketing : partir des besoins des clients cibles pour concevoir une offre intégrée et créer du profit par la satisfaction client.\n5) Optique Marketing Sociétal : concilier satisfaction du client, profit de l’entreprise et bien-être durable de la société (éthique, écologie, inclusion).\n\nParallèlement, il faut distinguer :\n- Marketing (travail stratégique et analytique en amont : quoi, pour qui, à quel prix, par quels canaux),\n- Communication (un des 4P : transmettre des messages pour informer, séduire, bâtir notoriété et image),\n- Vente (dernière étape opérationnelle : convertir le prospect en client payant).\nEt articuler deux horizons complémentaires : le Marketing Stratégique (long terme, analyse, STP) fixe le cap ; le Marketing Opérationnel (court/moyen terme, 4P sur le terrain) exécute ce cap.",
        formulas: [
          {
            name: 'Renversement entre Optique Vente et Optique Marketing',
            formula: '\\text{Vente : Produit existant} \\to \\text{Pression} \\to \\text{Volume} \\quad \\Big|\\quad \\text{Marketing : Besoins} \\to \\text{Offre intégrée} \\to \\text{Satisfaction}',
            note: 'L’optique vente part de l’usine ; l’optique marketing part du client.',
          },
          {
            name: 'Chaîne de valeur commerciale',
            formula: '\\text{Marketing Stratégique (Cap)} \\to \\text{Marketing Opérationnel (4P)} \\to \\text{Communication (Outil)} \\to \\text{Vente (Conversion)}',
            note: 'Chaque maillon est indispensable mais distinct.',
          },
        ],
        keyRule:
          'Optique Produit ≠ Optique Marketing : négliger les attentes clients par excès de confiance technique provoque la « myopie marketing ». Communication = outil du marketing ; Vente = conversion finale.',
        workedExample: {
          title: 'Distinguer les optiques et les fonctions dans une EdTech ivoirienne',
          statement:
            'Une EdTech lance une formation certifiante en Data Analytics. Classer les décisions : (A) imposer une application complexe car les ingénieurs la jugent brillante sans consulter les apprenants ; (B) étudier les débouchés d’emploi puis concevoir un parcours adapté avec paiement fractionné ; (C) diffuser des publicités ciblées sur LinkedIn ; (D) appeler les inscrits au webinaire pour finaliser le paiement.',
          methodSteps: [
            'Étape 1 — (A) illustre l’optique Produit poussée à la myopie marketing (centrée sur la prouesse interne, pas sur l’usage).',
            'Étape 2 — (B) relève de l’optique Marketing et du Marketing Stratégique/Opérationnel (partir des besoins clients et adapter l’offre).',
            'Étape 3 — (C) est une action de Communication (outil du 4e P).',
            'Étape 4 — (D) est l’étape finale de Vente (conversion en client payant).',
          ],
          conclusion:
            'Une organisation mature adopte l’optique marketing (voire sociétale) et coordonne stratégie, mix opérationnel, communication et force de vente.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Optiques 1 & 2',
            stepTheme: 'Optique Production vs Produit',
            stepTitle: 'Identifier l’optique Production et le piège de la myopie marketing',
            paragraphText:
              'Les deux premières optiques historiques privilégient l’offre interne avant l’écoute fine des attentes clients.\n' +
              '• **Optique Production** : vise l’efficacité des processus, la standardisation et la baisse des coûts unitaires pour vendre au plus grand nombre à prix bas.\n' +
              '• **Optique Produit** : mise tout sur la supériorité technique, la qualité ou l’innovation ingénieuriale.\n' +
              '• **Risque de myopie marketing** : perfectionner un produit dont le marché n’a plus ou pas besoin.\n' +
              'Exemple : perfectionner un lecteur MP3 dédié alors que le marché bascule vers l’écoute en streaming sur smartphone.',
            keyRule:
              'L’optique Production convient quand la demande dépasse l’offre ou que les coûts doivent chuter vite ; l’optique Produit expose à la myopie marketing si l’on ignore l’évolution des usages.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Une entreprise investit massivement pour rendre son logiciel techniquement parfait aux yeux de ses ingénieurs, sans vérifier si les utilisateurs comprennent son utilité. À quel biais de l’optique Produit succombe-t-elle ?',
              options: [
                'L’élasticité croisée positive',
                'La myopie marketing',
                'Le ciblage indifférencié sociétal',
                'L’effet de pénétration commerciale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La « myopie marketing » (théorisée par Levitt) consiste à se focaliser sur les caractéristiques techniques de son produit en perdant de vue le besoin réel du client.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Optiques 3 & 4',
            stepTheme: 'Optique Vente vs Optique Marketing',
            stepTitle: 'Opposer l’optique Vente à l’optique Marketing',
            paragraphText:
              'Bien que proches dans le langage courant, vendre à tout prix et pratiquer le marketing obéissent à deux logiques inverses.\n' +
              '• **Optique Vente** : point de départ = l’usine (produits déjà disponibles) ; moyen = pression commerciale et promotion agressive ; but = maximiser le volume à court terme.\n' +
              '• **Optique Marketing** : point de départ = marché cible ; moyen = marketing intégré (4P) ; but = profit durable par la satisfaction et la fidélisation client.\n' +
              'Exemple : forcer la vente d’un forfait inadapté crée du chiffre d’affaires immédiat mais provoque des résiliations dès le mois suivant.',
            konanTip:
              'Phrase clé de Peter Drucker : « Le but du marketing est de rendre la vente superflue », car un produit parfaitement adapté à la cible se vend presque de lui-même.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Quelle différence fondamentale distingue l’optique Vente de l’optique Marketing ?',
              options: [
                'L’optique Vente part des produits existants de l’entreprise pour pousser à l’achat, tandis que l’optique Marketing part des besoins du marché cible pour concevoir l’offre',
                'L’optique Vente s’applique uniquement aux services gratuits',
                'L’optique Marketing interdit toute prospection commerciale',
                'Elles sont strictement synonymes et interchangeables',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’optique Vente est orientée « intérieur vers extérieur » (écouler ce qui est produit) ; l’optique Marketing est orientée « extérieur vers intérieur » (partir des besoins clients).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Optique 5',
            stepTheme: 'Marketing Sociétal',
            stepTitle: 'Intégrer l’éthique et la durabilité dans l’optique sociétale',
            paragraphText:
              'Face aux crises écologiques et aux attentes citoyennes, satisfaire un désir individuel à court terme ne suffit plus.\n' +
              '• **Optique Marketing Sociétal** : exige d’équilibrer trois dimensions simultanées.\n' +
              '• **Les 3 piliers** : (1) profits de l’entreprise, (2) satisfaction des désirs des consommateurs et (3) intérêt collectif à long terme (environnement, santé, éthique des données).\n' +
              '• **Impact réputationnel** : les jeunes générations sanctionnent le *greenwashing* et valorisent les engagements vérifiables.\n' +
              'Exemple : un opérateur télécom qui recycle les anciens téléphones et limite la consommation énergétique de ses data centers.',
            formula: {
              name: 'Trépied du Marketing Sociétal',
              formula: '\\text{Marketing Sociétal} = \\text{Profit Entreprise} \\cap \\text{Satisfaction Client} \\cap \\text{Bien-être Collectif}',
              note: 'Prolonge l’optique marketing en intégrant la responsabilité sociale et environnementale (RSE).',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Quels trois intérêts l’optique du « marketing sociétal » cherche-t-elle à concilier simultanément ?',
              options: [
                'Uniquement le chiffre d’affaires, la trésorerie et la bourse',
                'Les profits de l’entreprise, la satisfaction des clients et le bien-être durable de la société',
                'La production industrielle, la fiscalité et les importations',
                'La publicité télévisée, la radio et l’affichage urbain',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le marketing sociétal élargit l’optique marketing classique en ajoutant l’intérêt général et la durabilité environnementale et sociale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Marketing vs Communication',
            stepTheme: 'Ne pas confondre le tout et l’outil',
            stepTitle: 'Situer la communication à l’intérieur du marketing',
            paragraphText:
              'Dans de nombreuses PME, on parle de « faire du marketing » alors qu’on réalise uniquement une affiche ou une publication sponsorisée.\n' +
              '• **Le Marketing** : englobe l’analyse complète du marché, le ciblage, la conception de l’offre, la fixation du prix, le choix des canaux de distribution et la communication.\n' +
              '• **La Communication** : constitue l’un des quatre outils du marketing (le 4e P, *Promotion*), chargé de concevoir et diffuser des messages vers les publics.\n' +
              '• **Rôles distincts** : le chargé de marketing définit quoi vendre, à qui et à quel prix ; le chargé de communication choisit les médias et messages les plus efficaces.\n' +
              'Exemple : concevoir un emballage recyclable et fixer un prix de 2 500 FCFA relève du marketing, pas de la communication.',
            keyRule:
              'La communication est une composante (un outil) du marketing mix ; le marketing représente tout le travail stratégique et opérationnel en amont et autour de la vente.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Quelle proposition traduit exactement la relation hiérarchique entre marketing et communication ?',
              options: [
                'La communication englobe le marketing, la finance et la logistique',
                'Le marketing et la communication sont deux mots identiques pour désigner la publicité',
                'La communication est l’un des outils du marketing mix (Promotion), alors que le marketing couvre l’ensemble de l’analyse et des 4P',
                'La communication précède toujours l’analyse des besoins et la création du produit',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La communication sert à exécuter le volet visibilité/message d’une stratégie marketing plus large incluant produit, prix et distribution.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Place de la vente',
            stepTheme: 'Conversion finale',
            stepTitle: 'Distinguer le rôle du marketing et celui de la vente',
            paragraphText:
              'La vente et le marketing travaillent main dans la main mais n’interviennent pas au même moment du parcours.\n' +
              '• **En amont (Marketing)** : comprendre les besoins, segmenter le marché, concevoir une offre attractive et générer des prospects qualifiés (*leads*).\n' +
              '• **En aval (Vente)** : dernière étape du processus commercial qui négocie, lève les objections et convertit le prospect en client payant.\n' +
              '• **Complémentarité** : sans bon marketing, le commercial peine à trouver des clients intéressés ; sans bonne vente, les prospects restent indécis.\n' +
              'Exemple : le marketing attire 300 dirigeants à un salon tech ; l’équipe commerciale réalise les démonstrations et signe 45 contrats.',
            konanTip:
              'Retiens l’image : le marketing prépare le terrain et amène le prospect à la porte ; la vente lui fait signer le bon de commande.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Quel rôle spécifique joue la « vente » dans le processus commercial global par rapport au marketing ?',
              options: [
                'Elle réalise uniquement les études qualitatives sur le marché',
                'Elle constitue l’étape finale de conversion des prospects identifiés en clients payants générant le chiffre d’affaires',
                'Elle définit les orientations macroéconomiques de l’entreprise sur 10 ans',
                'Elle remplace la conception du produit en laboratoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La vente intervient à l’issue du travail préparatoire du marketing pour conclure l’échange marchand et encaisser le revenu.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Deux horizons',
            stepTheme: 'Stratégique vs Opérationnel',
            stepTitle: 'Articuler marketing stratégique et marketing opérationnel',
            paragraphText:
              'Une action de terrain n’est performante que si elle s’inscrit dans une vision directrice claire.\n' +
              '• **Marketing Stratégique (Long terme)** : analyse du marché, veille concurrentielle, segmentation, ciblage et positionnement (choisir où et comment rivaliser).\n' +
              '• **Marketing Opérationnel (Court/moyen terme)** : déclinaison concrète des 4P sur le terrain (campagnes e-mailing, flyers, réseaux sociaux, remises, merchandising).\n' +
              '• **Interdépendance** : la stratégie fixe le cap ; l’opérationnel transforme le cap en ventes mesurables.\n' +
              'Exemple : décider de cibler les PME ouest-africaines avec un logiciel SaaS premium = stratégique ; lancer une campagne LinkedIn Ads de 15 jours = opérationnel.',
            keyRule:
              'Stratégie sans opérationnel = plan théorique sans ventes ; Opérationnel sans stratégie = agitation coûteuse sans cohérence.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q6',
              type: 'mcq',
              prompt: 'Parmi les décisions suivantes prises par une banque digitale, laquelle relève du « marketing stratégique » plutôt que du marketing opérationnel ?',
              options: [
                'Publier un carrousel Instagram pour la promotion de fin de mois',
                'Imprimer 5 000 flyers pour un stand dans un centre commercial',
                'Analyser le marché ouest-africain et décider de se positionner sur le segment des travailleurs indépendants sur 5 ans',
                'Envoyer un SMS de rappel pour un code promo expirant dans 48 heures',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’analyse de marché, le choix des cibles et le positionnement à long terme définissent le marketing stratégique ; les actions ponctuelles de communication/promo relèvent de l’opérationnel.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Rôle transversal',
            stepTheme: 'Le marketing tout au long du cycle',
            stepTitle: 'Comprendre que le marketing intervient avant et après la fabrication',
            paragraphText:
              'Contrairement à une idée tenace, le département marketing ne prend pas le relais une fois le produit sorti d’usine.\n' +
              '• **Création** : étude de marché, identification des spécifications attendues, design et tests de concept avec la R&D.\n' +
              '• **Commercialisation** : choix du prix final, des canaux de distribution et de la communication de lancement.\n' +
              '• **Suivi de vie** : mesure de la satisfaction, gestion des réclamations, mise à jour ou renouvellement de l’offre.\n' +
              'Exemple : pour une application mobile, les tests utilisateurs guident le design des écrans dès les premières maquettes.',
            konanTip:
              'Le marketing est la « courroie de transmission » permanente entre l’entreprise et son marché, de l’idée initiale au renouvellement du produit.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p3_q7',
              type: 'mcq',
              prompt: 'À quel stade de la vie d’un produit ou service l’intervention du marketing commence-t-elle ?',
              options: [
                'Uniquement lorsque les stocks invendus s’accumulent en entrepôt',
                'Dès la phase de création (études de marché, conception) et tout au long de sa fabrication, commercialisation et durée de vie',
                'Seulement après le dépôt de brevet par les avocats',
                'Uniquement lors de la phase de déclin des ventes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le marketing pilote l’adéquation offre-demande dès l’amont (création/design) jusqu’au suivi de satisfaction et au renouvellement.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : ENVIRONNEMENT MARKETING ET ÉTUDES DE MARCHÉ
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch2',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Environnement marketing, veille et études de marché',
    summary:
      'Analyse du microenvironnement (entreprise, fournisseurs, intermédiaires, concurrents, 7 publics, 5 types de marchés clients), du macroenvironnement (démographie et grille PESTEL), diagnostic SWOT et méthodologie complète des études de marché (SIM, documentaire, qualitative, quantitative par sondage).',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Marketing',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch2_p1',
        order: 1,
        title: 'Le microenvironnement : acteurs proches, 7 publics et 5 marchés clients',
        summary:
          'Cartographier les acteurs directs du microenvironnement (entreprise, fournisseurs, intermédiaires, concurrents), maîtriser la typologie des 7 publics et distinguer les 5 types de marchés clients.',
        conceptExplanation:
          "Le microenvironnement regroupe l’ensemble des acteurs proches de l’entreprise qui affectent directement sa capacité à créer de la valeur pour ses clients :\n1) L’entreprise elle-même : direction générale, finance, R&D, achats, production, ressources humaines (cohésion interne).\n2) Les fournisseurs : fournissent matières premières, composants, bande passante ou logiciels ; toute rupture ou hausse de coût affecte le prix et la disponibilité finale.\n3) Les intermédiaires marketing : revendeurs, distributeurs physiques, marketplaces, agences de communication, transporteurs et prestataires de paiement qui ajoutent de la valeur et assurent l’accès au client.\n4) Les concurrents : directs (même produit), indirects (autre solution au même besoin) ou de budget (autre dépense arbitrée par le client).\n5) Les 7 types de publics (toute partie prenante ayant un intérêt ou impact sur l’organisation) : financier, médias, gouvernemental, action citoyenne, local, grand public et public interne (les salariés).\n6) Les 5 marchés de clients : marché des consommateurs (B2C), marché des entreprises (B2B industriel), marché des revendeurs (négoce), marché public (administrations/collectivités) et marchés internationaux.",
        formulas: [
          {
            name: 'Les 6 piliers du microenvironnement',
            formula: '\\text{Microenvironnement} = \\{\\text{Entreprise},\\; \\text{Fournisseurs},\\; \\text{Intermédiaires},\\; \\text{Clients},\\; \\text{Concurrents},\\; \\text{Publics}\\}',
            note: 'Acteurs sur lesquels l’entreprise peut agir, négocier ou collaborer directement.',
          },
        ],
        keyRule:
          'Ne réduis jamais les publics aux seuls acheteurs : les salariés (public interne), les associations (action citoyenne), les banques (financier) et les médias influencent directement la réussite commerciale.',
        workedExample: {
          title: 'Cartographier le microenvironnement d’une fintech de paiement à Abidjan',
          statement:
            'Une fintech lance une solution de paiement par QR code pour commerçants. Identifier : (1) un fournisseur clé, (2) un intermédiaire, (3) le public gouvernemental, (4) deux types de marchés clients.',
          methodSteps: [
            'Étape 1 (Fournisseur) : L’hébergeur cloud et l’opérateur télécom fournissant les passerelles SMS/USSD.',
            'Étape 2 (Intermédiaire) : Le réseau d’agents agréés recrutant les boutiques et distribuant les kits QR code.',
            'Étape 3 (Public gouvernemental) : La BCEAO et l’autorité de régulation des télécoms fixant les plafonds et règles de conformité.',
            'Étape 4 (Marchés clients) : Particuliers payant leurs achats (marché des consommateurs B2C) et supermarchés/entreprises encaissant via API (marché des entreprises B2B).',
          ],
          conclusion:
            'Le succès dépend de l’alignement simultané de l’écosystème fournisseurs–intermédiaires–régulateur–clients.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Chaîne de valeur',
            stepTheme: 'Fournisseurs et intermédiaires',
            stepTitle: 'Mesurer le rôle stratégique des fournisseurs et intermédiaires',
            paragraphText:
              'Une entreprise dépend au quotidien de partenaires en amont et en aval pour livrer sa promesse client.\n' +
              '• **Fournisseurs** : procurent intrants, hébergement cloud, composants ou services ; un retard ou une flambée tarifaire dégrade la satisfaction client.\n' +
              '• **Intermédiaires marketing** : distributeurs, grossistes, marketplaces, transporteurs et agences qui rendent le produit accessible et en assurent la promotion sur le terrain.\n' +
              '• **Relation partenariale** : les traiter comme des alliés de valeur améliore délais, qualité et marge.\n' +
              'Exemple : un site e-commerce ivoirien perd des clients si son prestataire de livraison tarde ou traite mal les colis.',
            keyRule:
              'Les fournisseurs et les intermédiaires ne sont pas de simples exécutants : ils co-construisent la valeur perçue finale.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Pourquoi les intermédiaires de distribution occupent-ils une place critique dans le microenvironnement d’un producteur ?',
              options: [
                'Parce qu’ils fixent les taux directeurs de la banque centrale',
                'Parce qu’ils sont au contact direct des acheteurs, ajoutent de la valeur logistique/conseil et participent à la promotion des produits',
                'Parce qu’ils remplacent l’équipe de recherche et développement interne',
                'Parce qu’ils votent les lois sur la protection des données',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les intermédiaires rapprochent physiquement et commercialement l’offre du client final tout en assurant visibilité et conseil.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Jeu concurrentiel',
            stepTheme: 'Concurrents directs et indirects',
            stepTitle: 'Analyser la concurrence au-delà des produits identiques',
            paragraphText:
              'La menace concurrentielle vient rarement uniquement des entreprises proposant exactement le même objet.\n' +
              '• **Concurrence directe** : offres similaires répondant au même besoin avec la même technologie (ex. deux opérateurs mobiles).\n' +
              '• **Concurrence indirecte (substituts)** : solutions différentes satisfaisant le même besoin fondamental (ex. visioconférence face au billet d’avion d’affaires).\n' +
              '• **Différenciation locale** : un acteur de petite taille peut battre une grande chaîne grâce à la personnalisation et la proximité.\n' +
              'Exemple : pour envoyer un document urgent à Bouaké, un service de messagerie instantanée concurrence indirectement un transporteur express.',
            konanTip:
              'Pense toujours « besoin du client » avant « catégorie technique » : Netflix a un jour identifié le sommeil des utilisateurs comme un concurrent indirect !',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Comment une librairie indépendante de quartier peut-elle efficacement résister à une grande plateforme de vente en ligne généraliste ?',
              options: [
                'En vendant des livres deux fois plus cher sans aucun service additionnel',
                'En se différenciant par un accueil personnalisé, des conseils pointus et une sélection unique de proximité',
                'En supprimant son enseigne et tout contact avec le public local',
                'En copiant exactement le même catalogue sans spécialisation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’analyse des forces et faiblesses des concurrents permet au petit détaillant de miser sur la proximité, le conseil expert et des offres différenciées.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Les 7 publics',
            stepTheme: 'Parties prenantes du microenvironnement',
            stepTitle: 'Cartographier les 7 catégories de publics de l’entreprise',
            paragraphText:
              'En marketing, tout groupe ayant un intérêt réel ou potentiel et pouvant influencer l’atteinte des objectifs constitue un « public ».\n' +
              '• **7 publics recensés** : public financier, médias, gouvernemental, action citoyenne, public local, grand public et public interne.\n' +
              '• **Public interne** : des salariés engagés et fiers deviennent les premiers ambassadeurs de la marque à l’extérieur.\n' +
              '• **Action citoyenne** : associations de consommateurs ou ONG écologistes pouvant interpeller ou boycotter une marque.\n' +
              'Exemple : une campagne réussie auprès des médias spécialisés et des associations locales facilite l’acceptation d’un nouveau centre commercial.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Les 7 catégories de publics du microenvironnement',
              caption: 'Chaque public exerce un levier spécifique sur la légitimité, le financement ou la réputation de l’entreprise.',
              tableData: {
                headers: ['Catégorie de public', 'Acteurs représentatifs', 'Impact marketing principal'],
                rows: [
                  ['Public financier', 'Banques, investisseurs, actionnaires', 'Capacité de financement et d’expansion'],
                  ['Public des médias', 'Presse, TV, radios, blogs, créateurs', 'Notoriété, couverture médiatique, image'],
                  ['Public gouvernemental', 'Ministères, ARTCI, autorités fiscales', 'Conformité réglementaire et autorisations'],
                  ['Action citoyenne', 'Associations de consommateurs, ONG', 'Pression éthique, écologique ou boycott'],
                  ['Public local', 'Riverains, communautés locales', 'Acceptabilité sociale et réputation locale'],
                  ['Grand public', 'Opinion publique générale', 'Climat de confiance et image globale'],
                  ['Public interne', 'Salariés, managers, syndicats', 'Qualité de service et bouche-à-oreille'],
                ],
              },
            },
            keyRule:
              'Le marketing interne (motiver et informer ses propres collaborateurs) précède la réussite du marketing externe.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Une association nationale de défense des consommateurs critique publiquement les frais cachés d’une application financière. À quelle catégorie des 7 publics appartient-elle ?',
              options: [
                'Le public financier',
                'Le public interne',
                'Le public d’action citoyenne',
                'Le marché des revendeurs',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les associations de consommateurs, ONG environnementales et groupes de pression civiques composent le public d’action citoyenne.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Public interne',
            stepTheme: 'Salariés ambassadeurs',
            stepTitle: 'Comprendre pourquoi les employés forment un public marketing',
            paragraphText:
              'On oublie souvent que l’image externe d’une entreprise se fabrique d’abord dans ses propres bureaux et agences.\n' +
              '• **Effet miroir** : un salarié informé, formé et respecté traite mieux les clients et véhicule une image positive auprès de son entourage.\n' +
              '• **Risque inverse** : un personnel démotivé détruit les promesses d’une publicité coûteuse dès le premier contact en boutique.\n' +
              '• **Symétrie des attentions** : la qualité de la relation client reflète la qualité de la relation managériale interne.\n' +
              'Exemple : un téléconseiller bien accompagné résout les incidents avec empathie et transforme un client mécontent en promoteur.',
            konanTip:
              'Toujours distinguer le « public interne » (les collaborateurs de l’entreprise) du « public local » (les habitants du quartier autour du site).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Quel rôle marketing spécifique joue le « public interne » d’une organisation ?',
              options: [
                'Il vote les lois sur la concurrence au Parlement',
                'Des salariés satisfaits et impliqués améliorent l’expérience client et diffusent une image positive à l’extérieur',
                'Il fixe le taux de TVA applicable aux ventes en ligne',
                'Il achète exclusivement les matières premières agricoles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les employés constituent le public interne : leur satisfaction et leur adhésion rejaillissent directement sur la qualité de service et la réputation externe.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: '5 marchés clients',
            stepTheme: 'Typologie des acheteurs',
            stepTitle: 'Distinguer les 5 catégories de marchés clients cibles',
            paragraphText:
              'Selon la nature de l’acheteur et l’usage final du bien, les méthodes de prospection, de négociation et de tarification diffèrent profondément.\n' +
              '• **Marché des consommateurs (B2C)** : individus et ménages achetant pour leur usage personnel.\n' +
              '• **Marché des entreprises (B2B)** : organisations achetant des biens ou logiciels pour produire d’autres biens/services.\n' +
              '• **Marché des revendeurs** : grossistes et détaillants achetant pour revendre avec une marge.\n' +
              '• **Marchés publics** : administrations et collectivités achetant pour assurer des services publics (appels d’offres).\n' +
              '• **Marchés internationaux** : ces quatre catégories situées hors du territoire national.',
            keyRule:
              'Ne confonds pas marché des entreprises (achat pour transformer ou fonctionner) et marché des revendeurs (achat pour revendre en l’état avec bénéfice).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Un grossiste abidjanais achète 2 000 smartphones auprès d’un importateur uniquement pour les revendre aux boutiques des quartiers avec une marge. À quel type de marché client appartient-il ?',
              options: [
                'Le marché des consommateurs finals (B2C)',
                'Le marché public gouvernemental',
                'Le marché des revendeurs',
                'Le public financier',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Acheter des biens sans les transformer dans le seul but de les revendre à un prix supérieur pour réaliser un profit définit le marché des revendeurs.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Marchés publics',
            stepTheme: 'Spécificités B2G',
            stepTitle: 'Identifier le fonctionnement d’un marché public (B2G)',
            paragraphText:
              'Vendre à un ministère, une mairie ou un hôpital public obéit à des règles beaucoup plus formalisées que la vente grand public.\n' +
              '• **Finalité d’intérêt général** : les organismes publics acquièrent des équipements ou prestations pour servir les citoyens.\n' +
              '• **Procédures réglementées** : appels d’offres, cahiers des charges stricts, transparence budgétaire et délais administratifs.\n' +
              '• **Critères de choix** : conformité technique, solidité financière, références et rapport qualité-prix.\n' +
              'Exemple : une ESN ivoirienne qui répond à un appel d’offres pour numériser les registres d’état civil d’une commune.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Une entreprise informatique répond à un appel d’offres du ministère de la Santé pour équiper 50 centres hospitaliers en dossiers patients informatisés. Quel marché cible-t-elle ?',
              options: [
                'Le marché des consommateurs individuels',
                'Les marchés publics',
                'Le marché des revendeurs informels',
                'Le public des médias',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les achats réalisés par les administrations, ministères et organismes publics pour assurer des services publics constituent les marchés publics (B2G).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch2_p2',
        order: 2,
        title: 'Le macroenvironnement (démographie, PESTEL) et le diagnostic SWOT',
        summary:
          'Maîtriser les grandes forces sociétales incontrôlables du macroenvironnement (démographie + modèle PESTEL) et savoir classer rigoureusement les facteurs internes et externes dans une matrice SWOT.',
        conceptExplanation:
          "Le macroenvironnement désigne les grandes forces sociétales sur lesquelles l’entreprise n’a pratiquement aucun contrôle direct, mais qui créent des opportunités majeures ou des menaces critiques :\n1) La démographie (taille, taux de croissance, pyramide des âges, urbanisation, niveau d’éducation) : en Afrique de l’Ouest, la jeunesse et l’urbanisation rapide façonnent fortement la demande numérique.\n2) Le modèle PESTEL structure la veille macroéconomique en 6 dimensions :\n   - P (Politique) : stabilité institutionnelle, politiques publiques de numérisation, aides sectorielles ;\n   - É (Économique) : croissance du PIB, inflation, pouvoir d’achat, taux d’intérêt, taux de change ;\n   - S (Socioculturel) : valeurs, langues, habitudes alimentaires, adoption du mobile, rapports familiaux ;\n   - T (Technologique) : déploiement 4G/5G/fibre, intelligence artificielle, automatisation, obsolescence rapide ;\n   - É (Écologique) : transition énergétique, gestion des déchets électroniques, empreinte carbone ;\n   - L (Légal) : lois sur les données personnelles, fiscalité du e-commerce, droit du travail et propriété intellectuelle.\n\nEnfin, le diagnostic SWOT croise l’analyse interne (Forces / Faiblesses, maîtrisées par l’entreprise) et l’analyse externe (Opportunités / Menaces issues du micro et macroenvironnement).",
        formulas: [
          {
            name: 'Grille de veille macroenvironnementale PESTEL',
            formula: '\\text{PESTEL} = \\text{Politique} \\cdot \\text{Économique} \\cdot \\text{Socioculturel} \\cdot \\text{Technologique} \\cdot \\text{Écologique} \\cdot \\text{Légal}',
            note: 'Complétée systématiquement par l’analyse démographique (structure de la population).',
          },
          {
            name: 'Matrice SWOT (MOFF en français)',
            formula: '\\text{Interne : Forces (S) / Faiblesses (W)} \\quad \\times \\quad \\text{Externe : Opportunités (O) / Menaces (T)}',
            note: 'Interne = ce que l’entreprise contrôle ; Externe = ce que l’environnement lui impose.',
          },
        ],
        keyRule:
          'Règle d’or du SWOT : une Force ou Faiblesse est toujours INTERNE à l’entreprise (équipe, budget, brevet) ; une Opportunité ou Menace est toujours EXTERNE (loi, concurrence, croissance démographique).',
        workedExample: {
          title: 'Diagnostic PESTEL + SWOT d’un service de e-learning en Côte d’Ivoire',
          statement:
            'Classer les 4 éléments suivants pour une startup de cours en ligne basée à Abidjan : (1) 75 % de la population a moins de 35 ans ; (2) hausse de la couverture 4G/5G ; (3) l’équipe manque encore de notoriété nationale ; (4) adoption d’une nouvelle taxe sur les services numériques.',
          methodSteps: [
            'Étape 1 — (1) Jeunesse démographique → Macroenvironnement démographique/socioculturel = Opportunité (externe favorable).',
            'Étape 2 — (2) Couverture 4G/5G → Facteur Technologique (PESTEL) = Opportunité (externe favorable).',
            'Étape 3 — (3) Faible notoriété actuelle → Facteur Interne = Faiblesse (l’entreprise peut agir dessus).',
            'Étape 4 — (4) Nouvelle taxe sectorielle → Facteur Légal/Politique (PESTEL) = Menace (externe défavorable).',
          ],
          conclusion:
            'Distinguer rigoureusement interne et externe évite d’attribuer ses propres insuffisances au marché ou de surestimer son contrôle sur les lois.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Démographie',
            stepTheme: 'Poids de la population',
            stepTitle: 'Pourquoi la démographie est-elle le socle du macroenvironnement ?',
            paragraphText:
              'Un marché existe d’abord parce qu’il est composé d’êtres humains dotés de caractéristiques mesurables.\n' +
              '• **Variables clés** : volume de population, pyramide des âges, taux d’urbanisation, taille des ménages et niveau d’instruction.\n' +
              '• **Impact sur les offres** : une population très jeune stimule le streaming, l’éducation et la fintech mobile ; une population vieillissante demande santé et assistance.\n' +
              '• **Mobilité géographique** : la concentration urbaine facilite la livraison express et le déploiement de la fibre.\n' +
              'Exemple : la croissance démographique d’Abidjan et des villes secondaires élargit chaque année le bassin d’utilisateurs du commerce en ligne.',
            keyRule:
              'La démographie indique « combien » d’individus existent et « qui » ils sont, conditionnant le potentiel brut de tout marché.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Pourquoi la démographie est-elle considérée comme le premier facteur fondamental du macroenvironnement marketing ?',
              options: [
                'Parce que les marchés sont constitués de populations dont l’âge, la densité, l’éducation et la localisation façonnent directement la demande',
                'Parce que l’entreprise peut librement modifier l’âge de la population',
                'Parce qu’elle remplace le calcul des coûts de production',
                'Parce qu’elle ne concerne que les entreprises publiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’évolution de la taille, de l’âge, de l’urbanisation et du niveau d’instruction d’une population détermine la structure même de la demande.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'PESTEL : Économie',
            stepTheme: 'Pouvoir d’achat et conjoncture',
            stepTitle: 'Mesurer l’impact de l’environnement économique',
            paragraphText:
              'La volonté d’acheter ne se concrétise que si le contexte économique soutient le pouvoir d’achat des ménages et des entreprises.\n' +
              '• **Indicateurs surveillés** : croissance du PIB, inflation, niveau des salaires, chômage, taux d’intérêt et coût du crédit.\n' +
              '• **Arbitrages de consommation** : en période d’inflation, les ménages réduisent les achats superflus et privilégient les formats économiques ou fractionnés.\n' +
              '• **Adaptation du mix** : lancement de micro-abonnements hebdomadaires ou paiement échelonné.\n' +
              'Exemple : proposer des recharges data à 200 FCFA/jour plutôt qu’un engagement annuel unique répond à la contrainte budgétaire des ménages.',
            konanTip:
              'Dans les pays à fort pouvoir d’achat fractionné, les « formats mini » et micro-paiements transforment une contrainte économique en succès commercial.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Lors d’une période d’inflation réduisant le pouvoir d’achat des ménages, quelle adaptation marketing relève d’une réponse pertinente à l’environnement économique ?',
              options: [
                'Supprimer toute information sur les prix',
                'Proposer des formats fractionnés plus accessibles et renforcer le rapport qualité-prix perçu',
                'Doubler les prix des produits de première nécessité sans valeur ajoutée',
                'Fermer les canaux de distribution grand public',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Face à une baisse du pouvoir d’achat réel, fractionner les offres (micro-formats) et valoriser l’économie réalisée préserve l’accessibilité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'PESTEL : Technologie',
            stepTheme: 'Création et destruction créatrice',
            stepTitle: 'Comprendre le double visage de l’environnement technologique',
            paragraphText:
              'L’innovation technologique est la force macroenvironnementale la plus rapide et la plus disruptive de l’économie numérique.\n' +
              '• **Moteur d’opportunités** : elle crée de nouveaux marchés (Mobile Money, IA générative, cloud, télémédecine) et réduit les coûts de distribution.\n' +
              '• **Source de menaces** : chaque nouvelle technologie rend obsolètes d’anciens modèles économiques (destruction créatrice de Schumpeter).\n' +
              '• **Veille continue** : ne pas anticiper une rupture condamne même des leaders historiques.\n' +
              'Exemple : les transferts mobiles ont bouleversé les agences classiques de mandat postal papier.',
            keyRule:
              'Toute rupture technologique est simultanément une menace pour les acteurs figés et une opportunité pour les innovateurs agiles.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Pourquoi l’environnement technologique est-il qualifié de « force à double visage » pour les entreprises ?',
              options: [
                'Parce qu’il est entièrement gratuit et sans investissement',
                'Parce qu’il ouvre de nouveaux marchés et gains d’efficacité tout en rendant obsolètes les technologies et modèles anciens',
                'Parce qu’il ne touche que le secteur agricole',
                'Parce qu’il supprime le besoin de clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Selon le principe de destruction créatrice, la technologie génère de nouvelles offres rentables tout en menaçant de disparition les activités dépassées.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'PESTEL : Socioculturel & Légal',
            stepTheme: 'Valeurs, langues et réglementation',
            stepTitle: 'Adapter l’offre aux normes culturelles et légales',
            paragraphText:
              'Une offre technologiquement brillante échoue si elle heurte la culture locale ou viole le cadre juridique.\n' +
              '• **Socioculturel** : langues pratiquées, solidarité communautaire, habitudes alimentaires, confiance dans le paiement à la livraison.\n' +
              '• **Écologique** : exigences croissantes sur la recyclabilité et la sobriété énergétique.\n' +
              '• **Politico-légal** : protection des données personnelles, mentions légales, droit de rétractation, fiscalité.\n' +
              'Exemple : intégrer des instructions vocales en langues locales sur une application agricole et respecter la loi sur les données personnelles.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Une plateforme internationale de e-commerce intègre le paiement en espèces à la livraison et le Mobile Money pour s’adapter aux habitudes de confiance des acheteurs en Côte d’Ivoire. À quelle dimension PESTEL répond-elle principalement ?',
              options: [
                'L’environnement géologique',
                'L’environnement socioculturel (habitudes de confiance et d’usage)',
                'La comptabilité analytique interne',
                'L’environnement astronomique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les habitudes de consommation, le rapport à la confiance et les préférences d’usage appartiennent aux facteurs socioculturels du modèle PESTEL.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège SWOT',
            stepTheme: 'Interne vs Externe',
            stepTitle: 'Ne jamais confondre Force et Opportunité dans un SWOT',
            paragraphText:
              'L’erreur la plus fréquente aux examens consiste à inverser les facteurs internes (contrôlables) et externes (subis).\n' +
              '• **Forces (Strengths) & Faiblesses (Weaknesses)** : caractéristiques INTERNES propres à l’entreprise (compétences, trésorerie, marque, technologie interne).\n' +
              '• **Opportunités (Opportunities) & Menaces (Threats)** : tendances EXTERNES de l’environnement (essor du e-commerce, arrivée d’un géant étranger, nouvelle loi).\n' +
              '• **Test infaillible** : si le phénomène existe même sans l’entreprise, c’est externe (O ou T).\n' +
              'Exemple : « Notre brevet exclusif » = Force ; « La croissance de 25 % du marché ivoirien du cloud » = Opportunité.',
            formula: {
              name: 'Test rapide de classement SWOT',
              formula: '\\text{Propre à l’entreprise ?} \\implies \\text{Force / Faiblesse} \\quad | \\quad \\text{Vient du marché/État ?} \\implies \\text{Opportunité / Menace}',
              note: 'Ce test élimine 100 % des confusions entre Force et Opportunité.',
            },
            keyRule:
              'Force/Faiblesse = Interne. Opportunité/Menace = Externe. Une croissance du marché n’est jamais une « Force » de l’entreprise !',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Dans le diagnostic SWOT d’une agence digitale abidjanaise, où classer « l’augmentation de 30 % des budgets publicitaires numériques des PME ivoiriennes » ?',
              options: [
                'Une Force interne',
                'Une Faiblesse interne',
                'Une Opportunité externe',
                'Un coût fixe comptable',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cette hausse des budgets provient de l’évolution externe du marché (toutes les agences peuvent en bénéficier) : c’est donc une Opportunité externe.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Veille stratégique',
            stepTheme: 'Anticipation des ruptures',
            stepTitle: 'Transformer la veille environnementale en avantage concurrentiel',
            paragraphText:
              'Subir les mutations du macroenvironnement est le signe d’un marketing passif ; les anticiper permet de garder une longueur d’avance.\n' +
              '• **Veille active** : suivi continu des brevets, réglementations, évolutions sociales et mouvements concurrents.\n' +
              '• **Agilité stratégique** : ajuster l’offre avant que la menace ne devienne critique.\n' +
              '• **Passage à l’action** : croiser Forces + Opportunités (stratégie offensive) et limiter Faiblesses face aux Menaces (stratégie défensive).\n' +
              'Exemple : anticiper la généralisation de l’IA conversationnelle pour lancer un assistant client multilingue avant ses rivaux.',
            konanTip:
              'Le diagnostic PESTEL alimente directement la colonne externe (Opportunités et Menaces) du SWOT : les deux outils s’enchaînent logiquement.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Comment le modèle PESTEL et la matrice SWOT s’articulent-ils dans une démarche de diagnostic marketing ?',
              options: [
                'Le PESTEL analyse le macroenvironnement externe et alimente les Opportunités et Menaces du SWOT',
                'Le SWOT remplace totalement le PESTEL et analyse uniquement les salaires internes',
                'Le PESTEL sert uniquement à calculer la marge commerciale nette',
                'Les deux outils traitent exclusivement des ressources humaines internes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le modèle PESTEL explore les 6 forces externes du macroenvironnement afin d’identifier les Opportunités et Menaces intégrées ensuite dans le SWOT.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch2_p3',
        order: 3,
        title: 'Le SIM et les études de marché : documentaire, qualitative et quantitative',
        summary:
          'Structurer un Système d’Information Marketing (SIM), mobiliser les études documentaires (secondaires), choisir entre étude qualitative et quantitative par sondage, et concevoir un questionnaire sans biais.',
        conceptExplanation:
          "Pour décider sans naviguer à l’aveugle, l’entreprise s’appuie sur un Système d’Information Marketing (SIM) qui collecte, trie, analyse et diffuse des informations fiables issues de trois piliers : données internes (ventes, CRM, SAV), veille marketing (concurrents, PESTEL) et études de marché ponctuelles.\n\nUne étude de marché suit généralement trois approches complémentaires :\n1) L’étude documentaire (données secondaires) : exploiter des sources déjà existantes (statistiques nationales INS, rapports BCEAO, ARTCI, publications sectorielles, analytics internes). Rapide et peu coûteuse, elle précède toujours les enquêtes terrain.\n2) L’étude qualitative : sur de petits échantillons (8 à 30 personnes) via entretiens individuels semi-directifs, réunions de groupe (focus groups) ou observation ethnographique. Elle explore le « Pourquoi ? » et le « Comment ? » (motivations profondes, freins, vocabulaire, perceptions).\n3) L’étude quantitative : par sondage (questionnaire structuré administré face-à-face, téléphone, ou en ligne) sur un grand échantillon représentatif (probabiliste ou par quotas). Elle mesure le « Combien ? » (parts d’intention d’achat, fréquences, prix psychologique, corrélations statistiques).",
        formulas: [
          {
            name: 'Complémentarité des études de marché',
            formula: '\\text{Documentaire (Existant)} \\to \\text{Qualitative (Pourquoi ?)} \\to \\text{Quantitative (Combien ?)}',
            note: 'Toujours explorer qualitativement avant de quantifier statistiquement sur un grand échantillon.',
          },
        ],
        keyRule:
          'Qualitatif = petit échantillon, questions ouvertes, compréhension des motivations (« Pourquoi ? »). Quantitatif = grand échantillon représentatif, questions fermées/échelles, mesure statistique (« Combien ? »).',
        workedExample: {
          title: 'Plan d’étude de marché pour lancer une application de covoiturage urbain',
          statement:
            'Une équipe entrepreneure veut lancer une application de covoiturage Abidjan–Yamoussoukro. Comment combiner études documentaire, qualitative et quantitative ?',
          methodSteps: [
            'Étape 1 (Documentaire) : Consulter les statistiques de trafic routier, le taux d’équipement smartphone (ARTCI) et les tarifs des compagnies de cars.',
            'Étape 2 (Qualitative) : Mener 15 entretiens individuels et 2 focus groups avec des voyageurs et conducteurs pour identifier les peurs (sécurité, ponctualité) et attentes.',
            'Étape 3 (Quantitative) : Administrer un questionnaire en ligne à 600 voyageurs réguliers pour mesurer la fréquence de trajet, le prix acceptable et l’intention de téléchargement.',
          ],
          conclusion:
            'L’étude documentaire cadre le contexte, le qualitatif révèle les freins cachés et le quantitatif valide la viabilité économique par des chiffres.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Le SIM',
            stepTheme: 'Système d’Information Marketing',
            stepTitle: 'Organiser la circulation de l’information avec le SIM',
            paragraphText:
              'Un décideur marketing reçoit chaque jour des milliers de signaux ; sans système organisé, ces données restent inexploitées.\n' +
              '• **Définition du SIM** : réseau organisé de personnes, équipements et procédures destiné à collecter, analyser et diffuser à temps l’information utile aux décideurs.\n' +
              '• **Sources internes** : historique de facturation, CRM, retours du SAV et trafic web/application.\n' +
              '• **Sources externes** : veille concurrentielle et études de marché ad hoc.\n' +
              'Exemple : croiser les tickets de réclamation du SAV avec les données d’abandon de panier pour détecter un bug de paiement.',
            keyRule:
              'Avant de payer une étude externe coûteuse, il faut d’abord exploiter les données internes déjà disponibles dans le SIM (CRM, ventes, SAV).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Quelles sont les trois grandes sources d’alimentation d’un Système d’Information Marketing (SIM) ?',
              options: [
                'Les données internes de l’entreprise, la veille marketing et les études de marché',
                'Uniquement les rumeurs des réseaux sociaux et la météo',
                'Seulement les factures d’électricité et le cadastre foncier',
                'Exclusivement les bilans de l’entreprise concurrente',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un SIM performant combine les enregistrements internes (ventes, CRM), la veille permanente de l’environnement et les études de marché spécifiques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Données secondaires',
            stepTheme: 'L’étude documentaire',
            stepTitle: 'Démarrer par une étude documentaire (données secondaires)',
            paragraphText:
              'L’erreur du débutant est de rédiger un questionnaire avant même de vérifier ce qui a déjà été publié.\n' +
              '• **Données secondaires** : informations déjà collectées pour un autre objectif (rapports INS, BCEAO, ARTCI, Banque mondiale, études sectorielles).\n' +
              '• **Avantages** : coût très faible (souvent gratuit) et rapidité d’accès.\n' +
              '• **Limites** : données parfois anciennes ou trop générales, nécessitant ensuite une étude terrain (données primaires).\n' +
              'Exemple : vérifier le taux de pénétration d’Internet mobile en Côte d’Ivoire dans les rapports publics de l’ARTCI.',
            konanTip:
              'Dans la pratique professionnelle, on commence toujours par les données secondaires (documentaires) avant de financer des données primaires (terrain).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Quel type de données exploite-t-on lorsqu’on analyse les statistiques publiques de l’ARTCI ou de l’INS avant de lancer un sondage terrain ?',
              options: [
                'Des données primaires qualitatives',
                'Des données secondaires (étude documentaire)',
                'Un focus group expérimental',
                'Une enquête par quotas probabilistes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les statistiques et rapports déjà publiés par des organismes tiers constituent des données secondaires relevant de l’étude documentaire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Étude qualitative',
            stepTheme: 'Comprendre le « Pourquoi ? »',
            stepTitle: 'Maîtriser les outils de l’étude qualitative',
            paragraphText:
              'Lorsque l’on ignore les raisons profondes d’un comportement (freins, croyances, émotions), les chiffres bruts ne suffisent plus.\n' +
              '• **Objectif** : répondre au « Pourquoi ? » et au « Comment ? » en explorant perceptions et motivations inconscientes.\n' +
              '• **Outils principaux** : entretiens individuels semi-directifs (guide d’entretien ouvert), focus groups (6 à 12 participants animés ensemble) et observation.\n' +
              '• **Échantillon réduit** : non représentatif statistiquement, mais riche sur le plan psychologique.\n' +
              'Exemple : réunir 8 commerçants en focus group pour comprendre pourquoi ils hésitent à utiliser un terminal de paiement électronique.',
            keyRule:
              'On ne calcule jamais de pourcentage extrapolable à toute une population à partir d’un focus group de 10 personnes : le qualitatif explore, il ne mesure pas !',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Une équipe réunit 9 utilisateurs autour d’un modérateur pendant 90 minutes pour comprendre pourquoi ils abandonnent leur panier sur une application mobile. De quelle méthode s’agit-il ?',
              options: [
                'Un sondage quantitatif représentatif',
                'Un recensement national exhaustif',
                'Une étude qualitative par focus group (réunion de groupe)',
                'Une étude documentaire comptable',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le focus group (petit groupe animé par un modérateur pour explorer freins et motivations en profondeur) est un outil phare de l’étude qualitative.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Étude quantitative',
            stepTheme: 'Mesurer le « Combien ? »',
            stepTitle: 'Mener une étude quantitative par sondage et échantillonnage',
            paragraphText:
              'Pour chiffrer la taille d’un marché ou tester une hypothèse à grande échelle, l’étude quantitative s’impose.\n' +
              '• **Principe du sondage** : interroger un échantillon représentatif de la population mère avec un questionnaire standardisé.\n' +
              '• **Méthodes d’échantillonnage** : probabiliste (tirage aléatoire rigoureux) ou empirique (méthode des quotas reproduisant les proportions d’âge, sexe, zone).\n' +
              '• **Modes d’administration** : enquête en ligne (rapide, économique), téléphone, ou face-à-face (utile hors connexion).\n' +
              'Exemple : interroger 500 habitants d’Abidjan répartis par quotas d’âge et de commune sur leur budget mensuel de streaming.',
            formula: {
              name: 'Principe de représentativité par quotas',
              formula: '\\frac{n_{\\text{strate}}}{n_{\\text{échantillon}}} \\approx \\frac{N_{\\text{strate}}}{N_{\\text{population mère}}}',
              note: 'La structure de l’échantillon reproduit en miniature celle de la population cible.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Quelle méthode d’échantillonnage consiste à construire un modèle réduit de la population cible en respectant exactement les mêmes proportions d’âge, de sexe et de catégorie socioprofessionnelle ?',
              options: [
                'L’échantillonnage par quotas',
                'L’entretien clinique non directif',
                'L’étude documentaire secondaire',
                'Le tirage de convenance sans aucun critère',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La méthode des quotas reproduit dans l’échantillon la répartition connue de la population mère selon des critères sociodémographiques clés.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Rédaction du questionnaire',
            stepTheme: 'Éviter les biais de formulation',
            stepTitle: 'Rédiger un questionnaire neutre et exploitable',
            paragraphText:
              'Un questionnaire mal rédigé produit des statistiques trompeuses qui mènent à de mauvaises décisions commerciales.\n' +
              '• **Règle d’entonnoir** : aller des questions générales et simples vers les questions précises ou sensibles (revenu à la fin).\n' +
              '• **Neutralité absolue** : proscrire les questions orientées (« Ne pensez-vous pas que notre service est génial ? »).\n' +
              '• **Clarté et unicité** : une seule idée par question, vocabulaire accessible, pas de jargon technique.\n' +
              'Exemple : préférer « À quelle fréquence commandez-vous des repas en ligne ? » avec des modalités chiffrées plutôt que « Commandez-vous souvent ? ».',
            konanTip:
              'Toujours pré-tester un questionnaire auprès de 10 à 15 personnes avant le lancement massif pour repérer les ambiguïtés.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Parmi ces formulations destinées à un sondage, laquelle respecte les règles méthodologiques d’un questionnaire sans biais ?',
              options: [
                '« Comme tout client moderne, préférez-vous notre application ultra-rapide ? »',
                '« Combien de fois par mois utilisez-vous un service de paiement mobile ? (0, 1–3, 4–10, plus de 10) »',
                '« Utilisez-vous notre application souvent et la trouvez-vous chère ? »',
                '« Quel est votre taux d’amortissement fiscal marginal net ? »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La deuxième option est neutre, ne pose qu’une seule question précise à la fois et propose des tranches chiffrées objectives.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Choix méthodologique',
            stepTheme: 'Arbitrer Qualitatif vs Quantitatif',
            stepTitle: 'Associer chaque objectif d’étude à la bonne méthode',
            paragraphText:
              'Savoir choisir rapidement le bon protocole d’étude évite de gaspiller le budget marketing.\n' +
              '• **Besoin d’explorer des idées ou comprendre un blocage psychologique** → Étude qualitative.\n' +
              '• **Besoin de chiffrer une notoriété, estimer un volume de ventes ou tester un prix psychologique** → Étude quantitative.\n' +
              '• **Besoin de cadrer la taille démographique d’une ville** → Étude documentaire.\n' +
              'Exemple : savoir « combien d’étudiants sont prêts à payer 3 000 FCFA/mois » exige un questionnaire quantitatif, jamais un simple entretien de 5 personnes.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Une marque veut mesurer précisément quel pourcentage des habitants de Cocody connaît son nouveau slogan publicitaire. Quelle approche doit-elle retenir ?',
              options: [
                'Une étude qualitative par 4 entretiens individuels',
                'Une étude quantitative par sondage sur un échantillon représentatif',
                'Une observation silencieuse sans poser de questions',
                'Uniquement l’analyse de ses factures fournisseurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mesurer un pourcentage (taux de notoriété) sur une population donnée exige une étude quantitative représentative.',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 3 : COMPORTEMENT DU CONSOMMATEUR ET DÉMARCHE STP
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch3',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Comportement du consommateur et démarche stratégique STP',
    summary:
      'Décrypter le processus de décision d’achat en 5 étapes et les facteurs d’influence (culturels, sociaux, personnels, psychologiques), puis déployer la démarche stratégique STP : Segmentation, Ciblage et Positionnement.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Marketing',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch3_p1',
        order: 1,
        title: 'Le processus de décision d’achat en 5 étapes et les facteurs d’influence',
        summary:
          'Modéliser les cinq étapes du parcours d’achat, analyser les quatre grandes familles de facteurs d’influence du consommateur et maîtriser la gestion de la dissonance cognitive post-achat.',
        conceptExplanation:
          "Comprendre pourquoi et comment un client achète est la pierre angulaire de toute stratégie commerciale. Le processus de décision d’achat se décompose classiquement en cinq étapes séquentielles : (1) reconnaissance du problème (écart entre état actuel et état désiré), (2) recherche d’informations (sources personnelles, commerciales, publiques et liées à l’expérience), (3) évaluation des alternatives selon des critères pondérés, (4) décision d’achat (choix de la marque, du vendeur, du moment et du mode de paiement), et (5) comportement post-achat (satisfaction, fidélité ou dissonance cognitive).\n\nCe parcours est façonné par quatre familles de variables explicatives : les facteurs culturels (culture, sous-cultures, classe sociale), les facteurs sociaux (groupes de référence, famille, rôles et statuts), les facteurs personnels (âge, cycle de vie, profession, situation économique, style de vie) et les facteurs psychologiques (motivation, perception sélective, apprentissage, croyances et attitudes).",
        formulas: [
          {
            name: 'Séquence du processus d’achat',
            formula: '\\text{Besoin} \\rightarrow \\text{Recherche} \\rightarrow \\text{Évaluation} \\rightarrow \\text{Achat} \\rightarrow \\text{Post-achat}',
            note: 'Pour les achats courants à faible implication, les étapes 2 et 3 peuvent être fortement raccourcies.',
          },
        ],
        keyRule:
          'Le marketing ne s’arrête jamais au paiement : la phase post-achat conditionne le réachat, le bouche-à-oreille et la réduction de la dissonance cognitive.',
        workedExample: {
          title: 'Parcours d’achat d’un ordinateur portable par un étudiant à Abidjan',
          statement:
            'Un étudiant en L1 numérique décide d’acquérir un ordinateur portable de 350 000 FCFA. Décomposez son parcours selon les 5 étapes et identifiez deux facteurs d’influence majeurs.',
          methodSteps: [
            '1) Reconnaissance du besoin : ses travaux de programmation nécessitent un PC personnel fiable.',
            '2) Recherche d’informations : il consulte ses camarades (source personnelle), des vidéos YouTube de tests (source publique) et les sites de boutiques à Treichville et Plateau (source commerciale).',
            '3) Évaluation des alternatives : il compare RAM, autonomie batterie, garantie et prix entre trois marques.',
            '4) Décision d’achat : il choisit le modèle offrant 16 Go de RAM et une garantie locale de 12 mois avec paiement Mobile Money.',
            '5) Comportement post-achat : satisfait de la rapidité et rassuré par un message de bienvenue du SAV, il recommande la boutique à sa promotion.',
          ],
          conclusion:
            'Chaque étape offre un point de contact précis où la marque peut rassurer, informer et convertir le prospect.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Parcours client',
            stepTheme: 'Les 5 étapes de la décision',
            stepTitle: 'Modéliser le processus de décision d’achat en 5 étapes',
            paragraphText:
              'Avant de sortir sa carte ou son téléphone pour payer, l’acheteur traverse un cheminement mental structuré que le marketeur doit accompagner à chaque stade.\n' +
              '• **1. Reconnaissance du problème** : déclencheur interne (faim, besoin de mobilité) ou externe (publicité, recommandation).\n' +
              '• **2. Recherche d’informations** : collecte de renseignements auprès de l’entourage, d’avis en ligne ou de vendeurs.\n' +
              '• **3. Évaluation des alternatives** : comparaison des offres selon les attributs jugés décisifs (prix, fiabilité, SAV).\n' +
              '• **4. Décision d’achat & 5. Post-achat** : acte de transaction suivi du sentiment de satisfaction ou de regret.',
            visualSchema: {
              type: 'flowchart',
              title: 'Processus de décision d’achat en 5 étapes',
              caption: 'Chaque étape représente une opportunité d’action marketing ciblée, de la prise de conscience jusqu’à la fidélisation.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Reconnaissance du besoin', sublabel: 'Stimulus interne ou externe', kind: 'start', color: 'blue' },
                  { label: '2. Recherche d’informations', sublabel: 'Entourage, avis, comparateurs, boutiques', kind: 'process', color: 'violet' },
                  { label: '3. Évaluation des alternatives', sublabel: 'Comparaison des attributs clés', kind: 'decision', color: 'orange' },
                  { label: '4. Décision d’achat', sublabel: 'Marque, point de vente, mode de paiement', kind: 'process', color: 'green' },
                  { label: '5. Comportement post-achat', sublabel: 'Satisfaction, fidélité ou dissonance', kind: 'end', color: 'slate' },
                ],
              },
            },
            keyRule:
              'L’intervention marketing varie selon l’étape : visibilité en étape 1–2, preuves et comparatifs en étape 3, fluidité de paiement en étape 4, suivi SAV en étape 5.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Un consommateur compare l’autonomie, le prix et la garantie de trois smartphones avant de se décider. À quelle étape du processus d’achat se situe-t-il ?',
              options: [
                'La reconnaissance du besoin',
                'L’évaluation des alternatives',
                'Le comportement post-achat',
                'La dissonance cognitive',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comparer plusieurs marques candidates sur des critères précis (prix, autonomie, garantie) correspond exactement à la 3e étape : l’évaluation des alternatives.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Culture & Société',
            stepTheme: 'Facteurs culturels et sociaux',
            stepTitle: 'Mesurer l’influence de la culture, de la famille et des groupes de référence',
            paragraphText:
              'Aucun consommateur ne décide en vase clos : son environnement collectif oriente profondément ses goûts et ses arbitrages.\n' +
              '• **Facteurs culturels** : valeurs fondamentales, traditions, religions, sous-cultures régionales et classe sociale (revenu, éducation, prestige).\n' +
              '• **Groupes de référence** : groupes d’appartenance (amis, collègues) ou d’aspiration (entrepreneurs, sportifs) dont les normes influencent nos choix.\n' +
              '• **Rôles dans la famille** : initiateur, prescripteur (ex. enfants pour les céréales), décideur, acheteur et utilisateur final.\n' +
              'Exemple : en Côte d’Ivoire, les leaders d’opinion communautaires et les recommandations familiales pèsent fortement dans le choix d’une école ou d’une assurance.',
            konanTip:
              'En marketing B2C, pense toujours à distinguer le « prescripteur » (celui qui conseille ou réclame le produit) du « payeur » (celui qui règle la facture).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Un étudiant choisit une marque de baskets parce que ses coéquipiers de basketball et son joueur préféré la portent. Quel facteur d’influence domine ici ?',
              options: [
                'Un facteur purement macroéconomique',
                'Les groupes de référence (facteurs sociaux)',
                'La politique fiscale de l’État',
                'L’amortissement comptable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les coéquipiers (groupe d’appartenance) et le joueur admiré (groupe d’aspiration) constituent des groupes de référence au sein des facteurs sociaux.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Profil individuel',
            stepTheme: 'Facteurs personnels',
            stepTitle: 'Relier cycle de vie, situation économique et style de vie aux achats',
            paragraphText:
              'À culture et groupe social identiques, deux personnes achètent différemment selon leur trajectoire personnelle.\n' +
              '• **Âge et cycle de vie familial** : un étudiant célibataire, un jeune couple et une famille avec trois enfants n’ont ni les mêmes priorités ni les mêmes paniers.\n' +
              '• **Profession et situation économique** : revenu disponible, épargne, capacité d’endettement et stabilité financière.\n' +
              '• **Style de vie et personnalité** : activités, centres d’intérêt et opinions (AIO) traduisant la manière d’interagir avec le monde.\n' +
              'Exemple : un cadre urbain connecté privilégie la livraison rapide et les abonnements premium pour gagner du temps.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Parmi les variables suivantes, laquelle appartient spécifiquement aux « facteurs personnels » influençant le comportement du consommateur ?',
              options: [
                'Le taux directeur de la banque centrale',
                'L’étape du cycle de vie familial et le style de vie',
                'La réglementation douanière de l’UEMOA',
                'Le nombre de grossistes sur le marché',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’âge, le cycle de vie familial, la profession, la situation économique, le style de vie et la personnalité composent les facteurs personnels.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Psychologie',
            stepTheme: 'Motivation, perception et attitude',
            stepTitle: 'Décrypter les 4 leviers psychologiques de la décision',
            paragraphText:
              'Quatre mécanismes psychologiques internes gouvernent la manière dont un individu traite une offre commerciale.\n' +
              '• **Motivation** : force intérieure qui pousse à agir pour réduire une tension (hiérarchie des besoins de Maslow : physiologiques, sécurité, appartenance, estime, accomplissement).\n' +
              '• **Perception sélective** : chaque individu filtre les milliers de messages reçus par attention sélective, distorsion sélective et rétention sélective.\n' +
              '• **Apprentissage** : modification du comportement résultant de l’expérience passée (réachat si expérience positive).\n' +
              '• **Attitude** : prédisposition durable à évaluer favorablement ou défavorablement une marque (composantes cognitive, affective et conative).',
            keyRule:
              'À cause de la perception sélective, un consommateur ignore la majorité des publicités qui ne correspondent pas à ses besoins du moment : seul un message pertinent franchit le filtre.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Un consommateur exposé à 300 messages publicitaires par jour ne remarque et ne retient que les annonces liées aux motos électriques parce qu’il projette d’en acheter une. Quel mécanisme psychologique est à l’œuvre ?',
              options: [
                'La perception sélective',
                'La segmentation géographique',
                'L’élasticité croisée',
                'Le marketing indifférencié',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La perception sélective conduit l’individu à repérer et mémoriser en priorité les stimuli en lien direct avec ses besoins ou projets actuels.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Implication',
            stepTheme: 'Les 4 types de comportements d’achat',
            stepTitle: 'Adapter le marketing selon l’implication et la différenciation des marques',
            paragraphText:
              'On n’achète pas un sachet d’eau minérale comme on achète une voiture ou un abonnement fibre professionnel. Assael distingue 4 situations selon le degré d’implication et l’écart perçu entre marques.\n' +
              '• **Achat complexe** (forte implication + grandes différences) : PC, voiture, immobilier → forte recherche d’informations et besoin d’arguments détaillés.\n' +
              '• **Achat réduisant une dissonance** (forte implication + faibles différences) : assurance, matelas → rassurer après l’achat.\n' +
              '• **Achat routinier** (faible implication + faibles différences) : sel, pain, recharge crédit → disponibilité immédiate et visibilité.\n' +
              '• **Achat de diversité** (faible implication + grandes différences) : biscuits, snacks → innovation goût et promotions.',
            konanTip:
              'Retiens le réflexe : plus le prix et le risque perçu sont élevés, plus l’implication est forte et plus le client exige des preuves techniques et des avis fiables.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q5',
              type: 'mcq',
              prompt: 'L’achat hebdomadaire d’une bouteille d’eau minérale ou d’un paquet de sucre par habitude relève de quel type de comportement d’achat ?',
              options: [
                'Un achat complexe à très forte implication',
                'Un achat routinier (faible implication et faibles différences perçues)',
                'Un achat industriel B2B sur appel d’offres',
                'Un achat réduisant une dissonance majeure',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un bien peu coûteux, fréquemment acheté par habitude sans longue comparaison entre marques correspond à un comportement d’achat routinier.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Post-achat',
            stepTheme: 'Dissonance cognitive',
            stepTitle: 'Réduire la dissonance cognitive pour sécuriser la fidélité',
            paragraphText:
              'Juste après un achat important, le client ressent souvent un doute intérieur : « Ai-je payé trop cher ? L’autre modèle n’était-il pas meilleur ? » C’est la **dissonance cognitive**.\n' +
              '• **Cause** : tension psychologique entre les inconvénients du produit choisi et les avantages des alternatives écartées.\n' +
              '• **Risque** : annulation de commande, retour produit ou bouche-à-oreille négatif.\n' +
              '• **Antidotes marketing** : message de félicitation post-achat, guide de prise en main rapide, garantie claire, service après-vente réactif.\n' +
              'Exemple : après l’achat d’un smartphone en ligne, envoyer un tutoriel de transfert de données et une garantie vérifiable dissipe immédiatement le doute.',
            keyRule:
              'La communication post-achat rassure le client sur la justesse de sa décision et transforme l’acheteur ponctuel en ambassadeur fidèle.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Quelle action marketing permet le plus efficacement de réduire la dissonance cognitive juste après l’achat d’un équipement coûteux ?',
              options: [
                'Couper tout contact avec le client dès l’encaissement',
                'Envoyer un message de confirmation rassurant, un guide d’utilisation clair et assurer un SAV réactif',
                'Supprimer la facture et les conditions de garantie',
                'Augmenter immédiatement le prix pour les futurs acheteurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Accompagner l’acheteur après la vente (onboarding, garantie, SAV) confirme la pertinence de son choix et élimine l’anxiété post-achat.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch3_p2',
        order: 2,
        title: 'Segmentation du marché : critères et conditions d’efficacité',
        summary:
          'Découper un marché hétérogène en sous-ensembles homogènes à l’aide des quatre familles de critères (géographiques, sociodémographiques, psychographiques, comportementaux) et vérifier les 5 conditions de validité.',
        conceptExplanation:
          "Un marché global rassemble des acheteurs aux besoins, budgets et habitudes très hétérogènes : vouloir plaire à tout le monde avec une offre identique conduit souvent à ne satisfaire personne pleinement. La **segmentation** consiste à découper un marché hétérogène en sous-ensembles homogènes de consommateurs (segments) qui réagissent de manière similaire aux mêmes actions marketing.\n\nLes critères de segmentation se répartissent en quatre grandes catégories : géographiques (pays, région, ville, climat, urbain/rural), sociodémographiques (âge, sexe, revenu, CSP, niveau d’éducation, taille du foyer), psychographiques (style de vie, valeurs, personnalité) et comportementaux (occasion d’achat, avantages recherchés, statut d’utilisateur, taux d’utilisation, degré de fidélité). Pour être opérationnelle, une segmentation doit satisfaire cinq conditions cumulatives : mesurable, substantielle (taille rentable), accessible, différenciable et exploitable (actionnable).",
        formulas: [
          {
            name: 'Principe statistique de la segmentation',
            formula: '\\text{Homogénéité intra-segment maximale} \\quad + \\quad \\text{Hétérogénéité inter-segments maximale}',
            note: 'Les membres d’un même segment se ressemblent ; deux segments distincts réagissent différemment.',
          },
        ],
        keyRule:
          'Moyen mnémotechnique des 5 conditions d’un bon segment : Mesurable, Substantiel, Accessible, Différenciable, Exploitable.',
        workedExample: {
          title: 'Segmenter le marché d’une application de transport urbain à Abidjan',
          statement:
            'Une plateforme de VTC souhaite segmenter sa clientèle abidjanaise. Proposez trois segments pertinents en croisant critères sociodémographiques et comportementaux.',
          methodSteps: [
            'Segment 1 — Cadres pressés (Plateau/Cocody) : revenu élevé, trajets professionnels quotidiens, avantage recherché = ponctualité, confort climatisé et facturation entreprise.',
            'Segment 2 — Étudiants et jeunes actifs : budget contraint, trajets en groupe ou en soirée, avantage recherché = prix bas et partage de course.',
            'Segment 3 — Voyageurs aéroportuaires : usage occasionnel mais panier élevé, avantage recherché = réservation à l’avance, espace bagages et sécurité.',
          ],
          conclusion:
            'Chaque segment justifie une gamme de véhicules, une tarification et un message publicitaire spécifiques.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Principe clé',
            stepTheme: 'Pourquoi segmenter ?',
            stepTitle: 'Comprendre la logique de la segmentation de marché',
            paragraphText:
              'La segmentation est le premier pilier du marketing stratégique : elle part du constat réaliste que tous les clients n’attendent pas la même chose au même prix.\n' +
              '• **Définition** : découpage d’un marché global hétérogène en groupes homogènes appelés *segments*.\n' +
              '• **Double exigence** : forte ressemblance à l’intérieur de chaque segment (*homogénéité interne*) et vraies différences entre segments (*hétérogénéité externe*).\n' +
              '• **Bénéfices** : concevoir des offres mieux ajustées, éviter de gaspiller le budget publicitaire et repérer des niches mal servies.\n' +
              'Exemple : un opérateur télécom ne propose pas le même forfait à un étudiant de 19 ans et à une PME de 40 salariés.',
            keyRule:
              'Segmenter ne divise pas l’entreprise : cela lui permet de concentrer ses ressources là où son offre crée le maximum de valeur.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Quelle propriété caractérise deux segments de marché correctement construits ?',
              options: [
                'Les consommateurs d’un même segment ont des comportements totalement opposés',
                'Forte homogénéité à l’intérieur de chaque segment et forte hétérogénéité entre segments distincts',
                'Tous les segments doivent avoir exactement la même taille et le même prix',
                'Les segments ne tiennent jamais compte des besoins clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une bonne segmentation regroupe ensemble les clients aux attentes similaires (homogénéité intra-segment) et sépare nettement les groupes aux réponses marketing différentes (hétérogénéité inter-segments).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Critères objectifs',
            stepTheme: 'Géographique et sociodémographique',
            stepTitle: 'Utiliser les critères géographiques et sociodémographiques',
            paragraphText:
              'Les critères les plus faciles à mesurer et à collecter dans les statistiques officielles sont les variables géographiques et sociodémographiques.\n' +
              '• **Critères géographiques** : pays, zone UEMOA, ville, quartier, densité urbaine/rurale, climat.\n' +
              '• **Critères sociodémographiques** : âge, genre, taille du foyer, revenu, catégorie socioprofessionnelle (CSP), niveau d’instruction.\n' +
              '• **Limite** : deux personnes du même âge et du même revenu peuvent avoir des goûts totalement différents — d’où l’intérêt de compléter par des critères comportementaux.\n' +
              'Exemple : une banque segmente d’abord par tranche d’âge (18–25 ans « Jeunes », 26–55 ans « Actifs », +55 ans « Seniors ») et par niveau de revenu.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Une marque d’habillement classe sa clientèle selon la tranche d’âge, le revenu mensuel et la zone de résidence (Abidjan vs villes de l’intérieur). Quels types de critères utilise-t-elle ?',
              options: [
                'Uniquement des critères psychographiques',
                'Des critères sociodémographiques et géographiques',
                'Des critères comptables et fiscaux',
                'Des critères exclusivement comportementaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’âge et le revenu sont sociodémographiques ; la zone de résidence (Abidjan vs intérieur) est un critère géographique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Critères fins',
            stepTheme: 'Psychographique et comportemental',
            stepTitle: 'Affiner grâce aux critères psychographiques et comportementaux',
            paragraphText:
              'Dans l’économie numérique, les données d’usage permettent une segmentation beaucoup plus prédictive que le seul âge ou revenu.\n' +
              '• **Critères psychographiques** : style de vie, valeurs (écologie, innovation, tradition), personnalité.\n' +
              '• **Critères comportementaux** : avantages recherchés (prix bas, rapidité, prestige), fréquence d’utilisation (petits, moyens, gros utilisateurs — loi de Pareto 20/80), occasion d’achat et degré de fidélité.\n' +
              '• **Puissance digitale** : les plateformes e-commerce segmentent en temps réel selon l’historique de clics et de paniers (méthode RFM : Récence, Fréquence, Montant).\n' +
              'Exemple : sur une app de livraison de repas, distinguer les « gros utilisateurs du midi en semaine » des « commandes familiales du week-end ».',
            formula: {
              name: 'Segmentation comportementale RFM',
              formula: '\\text{Score RFM} = f(\\text{Récence du dernier achat},\\; \\text{Fréquence},\\; \\text{Montant dépensé})',
              note: 'Très utilisée en CRM et e-commerce pour identifier les meilleurs clients et les clients à risque de départ.',
            },
            konanTip:
              'La segmentation par « avantages recherchés » est souvent la plus rentable car elle relie directement le client à la promesse du produit.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Un site e-commerce classe ses clients selon leur fréquence de commande mensuelle, le montant moyen dépensé et leur fidélité. Quel type de critère de segmentation applique-t-il ?',
              options: [
                'Un critère géographique',
                'Un critère comportemental',
                'Un critère démographique pur',
                'Un critère politico-légal',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fréquence d’achat, le taux d’utilisation, le montant dépensé et le statut de fidélité relèvent de la segmentation comportementale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Validité',
            stepTheme: 'Les 5 conditions d’efficacité',
            stepTitle: 'Vérifier les 5 conditions d’une segmentation exploitable',
            paragraphText:
              'Tous les découpages imaginables ne méritent pas un budget marketing : un segment n’est valide que s’il remplit cinq critères rigoureux.\n' +
              '• **Mesurable** : on peut évaluer sa taille, son pouvoir d’achat et ses caractéristiques.\n' +
              '• **Substantiel** : assez vaste et rentable pour justifier un programme marketing dédié.\n' +
              '• **Accessible** : l’entreprise peut effectivement atteindre et servir ce groupe via des médias et canaux existants.\n' +
              '• **Différenciable** : les segments réagissent distinctement à des mix différents.\n' +
              '• **Exploitable (actionnable)** : l’entreprise dispose des ressources pour bâtir une offre adaptée.',
            keyRule:
              'Un segment trop petit (non substantiel) ou impossible à joindre (non accessible) doit être écarté ou fusionné.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Une startup identifie un segment de « collectionneurs gauchers passionnés par l’astronomie antique » qui ne compte que 15 personnes dans tout le pays. Quelle condition de segmentation n’est pas respectée ?',
              options: [
                'La condition de substantialité (taille suffisante pour être rentable)',
                'La condition de légalité fiscale',
                'La condition de concurrence directe',
                'La condition d’élasticité unitaire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec seulement 15 acheteurs potentiels, le segment n’est pas assez volumineux ni rentable pour couvrir les coûts d’une offre spécifique : il n’est pas substantiel.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège courant',
            stepTheme: 'Sur-segmentation vs sous-segmentation',
            stepTitle: 'Éviter les excès de sur-segmentation et de sous-segmentation',
            paragraphText:
              'Le choix du bon niveau de finesse est un arbitrage économique permanent entre personnalisation et économies d’échelle.\n' +
              '• **Sous-segmentation** : regrouper des clients trop différents dans un même panier → offre trop vague, faible satisfaction et perte face aux spécialistes.\n' +
              '• **Sur-segmentation** : multiplier à l’excès de minuscules segments → explosion des coûts de production, de stock et de campagnes publicitaires.\n' +
              '• **Juste équilibre** : ne créer un nouveau segment que si le surcroît de marge espéré dépasse le coût de l’adaptation.\n' +
              'Exemple : lancer 12 versions d’une application mobile pour une PME de 3 développeurs mène à l’éparpillement et à la dette technique.',
            konanTip:
              'Pose toujours la question : « Est-ce que ce segment justifie réellement un produit, un prix ou un message différent ? » Si non, fusionne !',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Quel risque financier majeur court une PME qui pratique une « sur-segmentation » excessive de son marché ?',
              options: [
                'L’explosion des coûts de conception, de logistique et de communication pour des segments trop étroits pour être rentables',
                'La disparition totale de ses concurrents en 24 heures',
                'Une réduction automatique de ses coûts fixes à zéro',
                'L’impossibilité légale de fixer un prix de vente',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Trop fragmenter le marché détruit les économies d’échelle et alourdit les coûts opérationnels sans garantir une rentabilité suffisante par segment.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Segmentation B2B',
            stepTheme: 'Segmenter les entreprises',
            stepTitle: 'Adapter les critères de segmentation au marché B2B',
            paragraphText:
              'Lorsque les clients sont des entreprises (B2B), on ne segmente pas par « âge ou foyer », mais par variables organisationnelles et opérationnelles.\n' +
              '• **Critères firmographiques** : secteur d’activité (banque, agro-industrie, commerce), taille (TPE, PME, ETI, grande entreprise), chiffre d’affaires et implantation géographique.\n' +
              '• **Critères d’exploitation** : maturité numérique, volumes commandés, fréquence de renouvellement.\n' +
              '• **Critères décisionnels** : processus d’achat (direct dirigeant en TPE vs comité technique et appel d’offres en grande entreprise).\n' +
              'Exemple : un éditeur de logiciel de facturation segmente en « Auto-entrepreneurs », « PME 10–100 salariés » et « Grands comptes multi-filiales ».',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Un fournisseur de solutions cloud B2B divise ses prospects selon leur secteur d’activité, leur effectif salarié et leur chiffre d’affaires annuel. Quels critères mobilise-t-il ?',
              options: [
                'Des critères de cycle de vie familial',
                'Des critères firmographiques adaptés au B2B',
                'Des critères purement psychologiques individuels',
                'Des critères climatiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En B2B, le secteur, la taille (effectif) et le chiffre d’affaires sont les variables firmographiques équivalentes aux critères sociodémographiques du B2C.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch3_p3',
        order: 3,
        title: 'Ciblage (Targeting) et Positionnement (Positioning)',
        summary:
          'Articuler la séquence STP complète, choisir entre ciblage indifférencié, différencié ou concentré, construire une carte perceptuelle et formuler un positionnement clair et crédible.',
        conceptExplanation:
          "Une fois le marché découpé en segments, l’entreprise déploie les deux étapes suivantes de la démarche stratégique **STP (Segmentation – Targeting – Positioning)** :\n1) **Le Ciblage (Targeting)** : évaluer l’attractivité de chaque segment (taille, croissance, intensité concurrentielle, adéquation aux ressources internes) puis sélectionner celui ou ceux que l’entreprise décide de servir. Trois grandes stratégies existent : le marketing **indifférencié** (une seule offre pour tout le marché), le marketing **différencié** (plusieurs offres sur mesure pour plusieurs segments) et le marketing **concentré** ou de niche (une offre spécialisée sur un seul segment très précis).\n2) **Le Positionnement (Positioning)** : concevoir l’offre et son image afin qu’elle occupe une place distincte, claire et valorisée dans l’esprit des clients cibles par rapport aux concurrents. Il se visualise souvent sur une **carte perceptuelle** (mapping) à deux axes (ex. prix vs qualité) et doit éviter quatre écueils : le sous-positionnement, le sur-positionnement, le positionnement confus et le positionnement douteux.",
        formulas: [
          {
            name: 'Séquence du marketing stratégique STP',
            formula: '\\text{Segmentation (Découper)} \\longrightarrow \\text{Ciblage (Choisir)} \\longrightarrow \\text{Positionnement (Différencier)} \\longrightarrow \\text{Mix 4P/7P}',
            note: 'Le mix opérationnel (4P/7P) est toujours la traduction concrète du positionnement choisi.',
          },
        ],
        keyRule:
          'Le positionnement n’est pas ce que vous faites au produit, mais la place unique que vous occupez dans l’esprit du consommateur face aux concurrents.',
        workedExample: {
          title: 'Démarche STP complète d’une néobanque étudiante',
          statement:
            'Une fintech lance une carte bancaire prépayée sans frais cachés en zone UEMOA. Définissez son ciblage et rédigez son énoncé de positionnement.',
          methodSteps: [
            '1) Segmentation : étudiants/jeunes actifs, commerçants informels, cadres salariés, entreprises exportatrices.',
            '2) Ciblage : stratégie concentrée (niche) dans un premier temps sur les étudiants et jeunes diplômés urbains (18–26 ans) non bancarisés.',
            '3) Positionnement : « La carte digitale instantanée à 0 FCFA de frais mensuels, rechargeable par Mobile Money en 10 secondes, conçue pour les achats en ligne et abonnements des jeunes africains. »',
          ],
          conclusion:
            'Un ciblage concentré couplé à un positionnement limpide permet à une jeune entreprise de rivaliser efficacement avec des banques traditionnelles.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Démarche STP',
            stepTheme: 'De l’analyse au mix',
            stepTitle: 'Maîtriser l’enchaînement logique de la démarche STP',
            paragraphText:
              'La démarche **STP** constitue la colonne vertébrale du marketing stratégique moderne, reliant l’étude de marché à l’action opérationnelle.\n' +
              '• **S — Segmentation** : identifier les groupes homogènes d’acheteurs sur le marché.\n' +
              '• **T — Ciblage (Targeting)** : évaluer ces segments et sélectionner ceux où l’entreprise dispose d’un réel avantage.\n' +
              '• **P — Positionnement (Positioning)** : définir la promesse différenciante dans l’esprit de la cible, avant de décliner les 4P/7P.\n' +
              'Exemple : découper le marché de la formation (S), choisir les cadres en reconversion digitale (T), se positionner comme l’école 100 % pratique en cours du soir (P).',
            visualSchema: {
              type: 'flowchart',
              title: 'Démarche stratégique STP vers le Mix Marketing',
              caption: 'Chaque étape filtre et précise la suivante : un mauvais ciblage ou positionnement rend le mix opérationnel inefficace.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Segmentation (S)', sublabel: 'Découper le marché en groupes homogènes', kind: 'start', color: 'blue' },
                  { label: '2. Ciblage (T)', sublabel: 'Évaluer et choisir 1 ou plusieurs segments', kind: 'decision', color: 'violet' },
                  { label: '3. Positionnement (P)', sublabel: 'Ancrer une promesse unique dans l’esprit client', kind: 'process', color: 'green' },
                  { label: '4. Déploiement du Mix (4P / 7P)', sublabel: 'Produit, Prix, Distribution, Communication cohérents', kind: 'end', color: 'orange' },
                ],
              },
            },
            keyRule:
              'On ne fixe jamais un prix ou une campagne publicitaire avant d’avoir validé la triade Segmentation → Ciblage → Positionnement.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q1',
              type: 'mcq',
              prompt: 'Dans quel ordre logique s’enchaînent les étapes de la démarche stratégique STP ?',
              options: [
                'Positionnement → Segmentation → Ciblage',
                'Segmentation → Ciblage → Positionnement',
                'Ciblage → Mix 4P → Segmentation',
                'Publicité → Positionnement → Étude de marché',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On découpe d’abord le marché (Segmentation), on sélectionne ensuite les segments visés (Ciblage), puis on définit l’image distinctive de l’offre (Positionnement).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Stratégies de ciblage',
            stepTheme: 'Indifférencié, différencié, concentré',
            stepTitle: 'Comparer les trois grandes stratégies de ciblage',
            paragraphText:
              'Selon sa taille, son budget et son ambition, une entreprise adopte l’une des trois grandes options de couverture du marché.\n' +
              '• **Ciblage indifférencié (marketing de masse)** : une seule offre et un seul mix pour l’ensemble du marché (économies d’échelle maximales, mais vulnérable aux spécialistes).\n' +
              '• **Ciblage différencié** : plusieurs offres et mix distincts pour plusieurs segments (ex. un constructeur auto proposant citadine, SUV et utilitaire).\n' +
              '• **Ciblage concentré (stratégie de niche)** : concentrer toutes ses ressources sur un seul segment très spécifique — idéal pour les startups et PME.\n' +
              'Exemple : une startup ivoirienne qui crée un ERP exclusivement pour les pharmacies pratique un ciblage concentré.',
            konanTip:
              'Pour une jeune entreprise aux ressources limitées, le ciblage concentré (niche) évite l’affrontement frontal avec les géants du marché.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q2',
              type: 'mcq',
              prompt: 'Une jeune entreprise tech concentre 100 % de ses ressources sur la création d’une plateforme de gestion dédiée exclusivement aux cliniques dentaires d’Afrique de l’Ouest. Quelle stratégie de ciblage applique-t-elle ?',
              options: [
                'Un ciblage indifférencié de masse',
                'Un ciblage concentré (stratégie de niche)',
                'Un ciblage différencié multi-marchés',
                'Une absence totale de segmentation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Focaliser l’ensemble de son offre et de ses moyens sur un unique segment très spécialisé définit la stratégie de ciblage concentré (niche).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Évaluation',
            stepTheme: 'Attractivité d’un segment',
            stepTitle: 'Sélectionner les segments les plus attractifs et compatibles',
            paragraphText:
              'Le plus gros segment d’un marché n’est pas toujours le meilleur choix s’il est déjà saturé par des géants puissants.\n' +
              '• **Taille et taux de croissance** : potentiel de chiffre d’affaires actuel et futur.\n' +
              '• **Intensité concurrentielle** : nombre de rivaux, guerre des prix, barrières à l’entrée et produits de substitution.\n' +
              '• **Adéquation interne** : le segment correspond-il aux compétences clés (core competencies), au budget et à l’image de l’entreprise ?\n' +
              'Exemple : un petit torréfacteur artisanal renonce au segment hyper-concurrentiel du café premier prix pour cibler les hôtels 4–5 étoiles à forte marge.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q3',
              type: 'mcq',
              prompt: 'Pourquoi une PME peut-elle rationnellement écarter le segment le plus volumineux d’un marché lors de son ciblage ?',
              options: [
                'Parce que les gros segments sont interdits aux PME',
                'Parce que ce segment peut être dominé par de puissants concurrents à faibles marges, hors de portée de ses ressources',
                'Parce que la taille d’un segment n’a jamais d’intérêt',
                'Parce que le ciblage se fait toujours par tirage au sort',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’attractivité d’un segment s’évalue en croisant volume, croissance, intensité concurrentielle et adéquation avec les ressources internes de l’entreprise.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Positionnement',
            stepTheme: 'Triangle d’or du positionnement',
            stepTitle: 'Construire un positionnement solide grâce au triangle d’or',
            paragraphText:
              'Un positionnement réussi repose sur l’équilibre entre trois sommets indissociables formant le **triangle d’or du positionnement**.\n' +
              '• **Attentes du public cible** : la promesse doit être réellement pertinente et désirée par le client.\n' +
              '• **Atouts réels de l’entreprise** : la promesse doit être crédible et prouvable techniquement (éviter les promesses creuses).\n' +
              '• **Positionnement des concurrents** : la promesse doit être distinctive pour ne pas être confondue avec un rival.\n' +
              'Exemple : se positionner comme « le transfert d’argent le plus rapide et transparent à 1 % de frais » répond à une attente forte, se distingue des tarifs complexes et se prouve à l’usage.',
            keyRule:
              'Un bon positionnement est à la fois Pertinent (pour le client), Crédible (prouvé par le produit) et Distinctif (par rapport aux concurrents).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Quels sont les trois piliers du « triangle d’or » permettant de définir un positionnement marketing efficace ?',
              options: [
                'Les attentes de la cible, les atouts réels de la marque et le positionnement des concurrents',
                'Le bilan comptable, la TVA et le taux de change',
                'Le logo, la police d’écriture et la couleur du site web',
                'Les fournisseurs, les douanes et la météo',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le positionnement se construit au croisement des attentes clients (pertinence), des capacités réelles de l’offre (crédibilité) et de l’espace laissé libre par la concurrence (différenciation).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Mapping',
            stepTheme: 'Carte perceptuelle',
            stepTitle: 'Lire et exploiter une carte perceptuelle (mapping)',
            paragraphText:
              'Pour visualiser comment les consommateurs perçoivent les marques en présence, le marketeur trace une **carte perceptuelle** (ou *mapping*).\n' +
              '• **Principe** : un repère à deux axes représentant deux critères déterminants d’achat (ex. Prix bas/élevé en abscisse, Innovation/Tradition en ordonnée).\n' +
              '• **Utilité stratégique** : repérer immédiatement les concurrents directs (très proches sur la carte) et les « espaces blancs » inoccupés représentant des opportunités de lancement.\n' +
              '• **Point de vigilance** : la carte reflète la *perception* des clients, pas nécessairement la réalité technique mesurée en laboratoire.\n' +
              'Exemple : découvrir sur un mapping que personne n’offre un smartphone robuste à prix moyen avec batterie 3 jours révèle une niche rentable.',
            konanTip:
              'Un « espace vide » sur une carte perceptuelle n’est une opportunité que s’il existe réellement des clients prêts à payer pour cette combinaison !',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q5',
              type: 'mcq',
              prompt: 'À quoi sert principalement une « carte perceptuelle » (mapping) en marketing stratégique ?',
              options: [
                'À calculer l’itinéraire GPS des camions de livraison',
                'À visualiser la position perçue des marques concurrentes sur deux axes clés et repérer des espaces de différenciation',
                'À enregistrer les écritures comptables mensuelles',
                'À fixer les horaires de travail des salariés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La carte perceptuelle projette la façon dont les consommateurs situent les marques selon deux critères majeurs, facilitant le choix d’un positionnement distinctif.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: '4 erreurs',
            stepTheme: 'Écueils du positionnement',
            stepTitle: 'Éviter les 4 erreurs classiques de positionnement',
            paragraphText:
              'Même avec un bon produit, une marque peut échouer si son positionnement souffre de l’un des quatre défauts identifiés par Kotler.\n' +
              '• **Sous-positionnement** : le consommateur n’a qu’une idée très vague de la marque et ne voit rien de spécial.\n' +
              '• **Sur-positionnement** : image trop étroite ou élitiste qui fait croire au public que la marque est hors de portée.\n' +
              '• **Positionnement confus** : la marque change trop souvent de promesse ou revendique des bénéfices contradictoires (ex. « ultra-luxe à prix discount »).\n' +
              '• **Positionnement douteux** : promesse trop belle pour être crue au vu du prix ou de l’historique de la marque.\n' +
              'Exemple : changer de slogan tous les 3 mois brouille l’esprit du client et crée un positionnement confus.',
            keyRule:
              'Un positionnement doit rester cohérent dans la durée ; s’il devient obsolète face au marché, l’entreprise engage un « repositionnement » planifié.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q6',
              type: 'mcq',
              prompt: 'Une marque de smartphones promet en même temps d’être « le téléphone le moins cher du marché » et « le symbole ultime du luxe prestigieux », puis change de slogan chaque trimestre. Quelle erreur de positionnement commet-elle ?',
              options: [
                'Un positionnement confus',
                'Un ciblage concentré parfait',
                'Une segmentation comportementale réussie',
                'Un avantage concurrentiel durable',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Additionner des promesses contradictoires et modifier sans cesse son discours crée un positionnement confus : le client ne sait plus ce que représente la marque.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Énoncé STP',
            stepTheme: 'Formuler la promesse',
            stepTitle: 'Rédiger un énoncé de positionnement professionnel',
            paragraphText:
              'En entreprise, le positionnement se formalise dans une phrase interne structurée qui sert de boussole à toutes les équipes (produit, design, pub, vente).\n' +
              '• **Structure canonique** : « Pour [cible], [Marque] est [univers de référence / catégorie] qui offre [promesse clé différenciante] parce que [preuve crédible]. »\n' +
              '• **Double composante** : l’*identification* (à quelle catégorie j’appartiens) et la *différenciation* (en quoi je suis meilleur ou unique).\n' +
              'Exemple : « Pour les commerçants de proximité ivoiriens, KassaPro est une application de caisse mobile qui sécurise leurs recettes quotidiennes sans erreur parce qu’elle fonctionne même hors connexion avec sauvegarde cloud automatique. »',
            formula: {
              name: 'Équation du positionnement',
              formula: '\\text{Positionnement} = \\text{Identification (Catégorie)} + \\text{Différenciation (Promesse + Preuve)}',
              note: 'Sans identification le client ne comprend pas ce que vous vendez ; sans différenciation il n’a aucune raison de vous choisir.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p3_q7',
              type: 'mcq',
              prompt: 'Dans un énoncé de positionnement bien construit, quelles sont les deux dimensions indispensables qui doivent apparaître clairement ?',
              options: [
                'L’identification (catégorie d’offre) et la différenciation (bénéfice unique prouvé face aux concurrents)',
                'Le numéro fiscal de l’entreprise et le nom de son banquier',
                'Le coût salarial horaire et le loyer du siège',
                'La liste exhaustive de tous les concurrents mondiaux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’énoncé de positionnement situe d’abord l’offre dans une catégorie compréhensible (identification) puis précise la promesse distinctive et sa preuve (différenciation).',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 4 : MIX MARKETING (4P → 7P) ET MARKETING DIGITAL
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch4',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 — Mix Marketing (4P → 7P) et Marketing Digital',
    summary:
      'Piloter les quatre variables classiques du marketing opérationnel — Produit (niveaux, gamme, cycle de vie, matrice BCG), Prix (coûts, élasticité, écrémage, pénétration, alignement), Distribution (canaux, omnicanal) et Communication — ainsi que l’extension aux 7P des services et les leviers du marketing digital (SEO/SEA, AARRR, KPI, réseaux sociaux).',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Marketing',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch4_p1',
        order: 1,
        title: 'Politique de Produit : niveaux, gamme, cycle de vie et matrice BCG',
        summary:
          'Décomposer un produit en trois niveaux, structurer une gamme (largeur, profondeur, longueur), piloter les 4 phases du cycle de vie et équilibrer un portefeuille d’activités avec la matrice BCG.',
        conceptExplanation:
          "Premier pilier du mix marketing, le **Produit** désigne tout bien matériel, service, expérience ou solution numérique proposé sur un marché pour satisfaire un besoin. On l’analyse sur trois niveaux : le **produit central** (bénéfice fondamental recherché), le **produit tangible** (caractéristiques, design, qualité, marque, conditionnement) et le **produit augmenté** (garantie, livraison, SAV, formation, mises à jour).\n\nL’ensemble des produits d’une entreprise s’organise en **gamme**, caractérisée par sa **largeur** (nombre de lignes de produits), sa **profondeur** (nombre de variantes par ligne) et sa **longueur** (nombre total de références). Chaque produit traverse un **cycle de vie** en quatre phases — Lancement, Croissance, Maturité, Déclin — exigeant des ajustements constants du mix. À l’échelle du portefeuille global, la **matrice BCG** (Boston Consulting Group) croise le taux de croissance du marché et la part de marché relative pour classer les produits en quatre catégories : Vedettes, Vaches à lait, Dilemmes et Poids morts.",
        formulas: [
          {
            name: 'Longueur totale d’une gamme',
            formula: '\\text{Longueur} = \\sum_{i=1}^{L} \\text{Profondeur}_i \\quad (\\text{avec } L = \\text{largeur de la gamme})',
            note: 'Si une marque a 3 lignes de 4 modèles chacune, largeur = 3, profondeur = 4 et longueur = 12 références.',
          },
          {
            name: 'Part de marché relative (axe BCG)',
            formula: '\\text{PDM relative} = \\frac{\\text{Chiffre d’affaires de l’entreprise}}{\\text{Chiffre d’affaires du principal concurrent}}',
            note: 'Si PDM relative > 1, l’entreprise est leader sur ce domaine d’activité.',
          },
        ],
        keyRule:
          'Dans un portefeuille BCG équilibré, les Vaches à lait financent les Dilemmes prometteurs et les Vedettes qui deviendront les Vaches à lait de demain.',
        workedExample: {
          title: 'Analyser la gamme et le portefeuille BCG d’un opérateur télécom',
          statement:
            'Un opérateur propose : (A) les forfaits SMS classiques en baisse de 15 %/an où il est 3e du marché ; (B) les forfaits voix/data 4G en croissance lente (3 %/an) où il est leader (PDM relative = 1,6) ; (C) la fibre optique résidentielle (+28 %/an, leader) ; (D) le cloud B2B (+35 %/an, PDM relative = 0,4). Classez A, B, C, D dans la matrice BCG.',
          methodSteps: [
            'A (marché en déclin, faible PDM relative) → Poids mort : à récolter ou désinvestir progressivement.',
            'B (croissance faible, leader PDM > 1) → Vache à lait : génère d’importantes liquidités sans gros investissements.',
            'C (forte croissance, leader) → Vedette : exige des investissements pour défendre le leadership.',
            'D (forte croissance, challenger PDM < 1) → Dilemme : investir massivement pour devenir Vedette ou abandonner.',
          ],
          conclusion:
            'Les excédents de trésorerie des forfaits 4G (Vache à lait) doivent financer l’extension de la fibre (Vedette) et la montée en puissance du cloud B2B (Dilemme).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '3 niveaux',
            stepTheme: 'Anatomie du produit',
            stepTitle: 'Décomposer toute offre en produit central, tangible et augmenté',
            paragraphText:
              'Un client n’achète jamais simplement un assemblage de plastique ou de code informatique : il achète une solution globale à trois couches.\n' +
              '• **Produit central (noyau)** : le bénéfice essentiel recherché (ex. pour un smartphone : communiquer et accéder à l’information partout).\n' +
              '• **Produit tangible** : attributs concrets (écran, autonomie, design, nom de marque, packaging).\n' +
              '• **Produit augmenté** : services périphériques qui font la différence concurrentielle (garantie 24 mois, SAV local, livraison rapide, tutoriels).\n' +
              'Exemple : sur un marché saturé d’ordinateurs similaires, la différenciation décisive se joue souvent sur le produit augmenté (garantie et assistance).',
            keyRule:
              'La concurrence de base porte sur le produit tangible, mais la fidélisation durable se gagne sur le produit augmenté.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q1',
              type: 'mcq',
              prompt: 'Une boutique informatique inclut gratuitement l’installation des logiciels, une garantie pièces et main-d’œuvre de 2 ans et une assistance WhatsApp 7j/7. À quel niveau du produit ces éléments appartiennent-ils ?',
              options: [
                'Le produit central uniquement',
                'Le produit augmenté',
                'Le macroenvironnement légal',
                'Le poids mort BCG',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La garantie, l’installation offerte et le support après-vente constituent les services périphériques du produit augmenté.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Gamme produit',
            stepTheme: 'Largeur, profondeur et longueur',
            stepTitle: 'Mesurer la structure d’une gamme de produits',
            paragraphText:
              'La politique de gamme permet à une entreprise de couvrir plusieurs segments tout en gardant une identité cohérente.\n' +
              '• **Largeur** : nombre de lignes de produits distinctes proposées par l’entreprise (ex. téléphones, tablettes, montres = largeur 3).\n' +
              '• **Profondeur** : nombre de versions, formats ou modèles au sein d’une même ligne (ex. 5 modèles de téléphones).\n' +
              '• **Longueur (étendue)** : somme totale de tous les articles offerts dans l’ensemble des lignes.\n' +
              'Exemple : une marque de jus locaux proposant 3 lignes (Bissap, Gingembre, Baobab) chacune en 2 formats (33 cl et 1 L) a une largeur de 3, une profondeur de 2 et une longueur de 6.',
            formula: {
              name: 'Dimensions de la gamme',
              formula: '\\text{Longueur totale} = \\text{Largeur} \\times \\text{Profondeur moyenne}',
              note: 'Attention au risque de cannibalisation lorsqu’une gamme devient trop profonde avec des modèles trop proches.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q2',
              type: 'mcq',
              prompt: 'Une marque de cosmétiques naturels propose 4 lignes de produits (savons, huiles, crèmes, shampoings), avec 5 variantes dans chaque ligne. Quelles sont la largeur et la longueur de sa gamme ?',
              options: [
                'Largeur = 5 ; Longueur = 9',
                'Largeur = 4 ; Longueur = 20',
                'Largeur = 20 ; Longueur = 4',
                'Largeur = 4 ; Longueur = 5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La largeur correspond au nombre de lignes (4) et la longueur au nombre total de références : 4 × 5 = 20 articles.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Cycle de vie',
            stepTheme: 'Les 4 phases du CVP',
            stepTitle: 'Visualiser l’évolution des ventes au fil du cycle de vie du produit',
            paragraphText:
              'Comme un organisme vivant, un produit naît, grandit, atteint sa maturité puis finit par décliner sous l’effet des innovations et des changements de goûts.\n' +
              '• **1. Lancement** : ventes faibles, coûts unitaires et dépenses marketing élevés, profits négatifs ou nuls.\n' +
              '• **2. Croissance** : adoption rapide par le marché, économies d’échelle, apparition des profits et entrée de nouveaux concurrents.\n' +
              '• **3. Maturité** : pic des ventes puis ralentissement, concurrence intense, profits maximaux puis sous pression.\n' +
              '• **4. Déclin** : chute durable des ventes et des marges face à des substituts plus modernes.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Volume indicatif des ventes selon les 4 phases du cycle de vie',
              caption: 'Le chiffre d’affaires démarre lentement au lancement, accélère en croissance, culmine à maturité puis recule en déclin.',
              barChart: {
                yLabel: 'Ventes (indice)',
                unit: 'pts',
                bars: [
                  { label: 'Lancement', value: 18, color: 'blue', annotation: 'Profits négatifs' },
                  { label: 'Croissance', value: 65, color: 'green', annotation: 'Forte hausse' },
                  { label: 'Maturité', value: 98, color: 'violet', annotation: 'Pic + concurrence' },
                  { label: 'Déclin', value: 35, color: 'orange', annotation: 'Substituts' },
                ],
              },
            },
            keyRule:
              'Un produit ne reste jamais éternellement en maturité : anticiper le déclin par l’innovation ou la relance (re-design, nouveaux usages) est vital.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q3',
              type: 'mcq',
              prompt: 'Durant quelle phase du cycle de vie du produit les ventes atteignent-elles leur niveau maximal tandis que la concurrence devient la plus intense ?',
              options: [
                'La phase de lancement',
                'La phase de maturité',
                'La phase de recherche en laboratoire',
                'La phase de déclin avancé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La phase de maturité correspond au plafond des ventes (marché équipé) et à une vive bataille concurrentielle pour défendre les parts de marché.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Pilotage CVP',
            stepTheme: 'Actions par phase',
            stepTitle: 'Adapter les objectifs marketing à chaque phase du cycle de vie',
            paragraphText:
              'Le mix marketing ne doit jamais rester figé : chaque phase du cycle de vie appelle une priorité stratégique distincte.\n' +
              '• **Lancement** : faire connaître et essayer le produit (notoriété, distribution sélective, éducation des pionniers).\n' +
              '• **Croissance** : conquérir des parts de marché, étendre la distribution et enrichir les versions du produit.\n' +
              '• **Maturité** : défendre sa part de marché, fidéliser, se différencier par le service ou lancer des promotions ciblées.\n' +
              '• **Déclin** : réduire les coûts marketing (« traire » le produit), repositionner sur une niche ou retirer proprement l’offre.',
            konanTip:
              'Ne confonds pas objectif de lancement (« faire connaître et tester ») et objectif de maturité (« fidéliser et défendre la marge »).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q4',
              type: 'mcq',
              prompt: 'Un produit technologique entre en phase de lancement sur un marché qui ne le connaît pas encore. Quelle doit être la priorité principale de la communication ?',
              options: [
                'Liquider les stocks avant retrait définitif',
                'Informer, faire connaître la catégorie de produit et inciter les premiers adopteurs à l’essayer',
                'Réduire toute communication à zéro pour économiser',
                'Engager une guerre des prix destructrice dès le premier jour',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En phase de lancement, le frein principal est la méconnaissance : il faut éduquer le marché, créer la notoriété et stimuler l’essai.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Matrice BCG',
            stepTheme: 'Portefeuille d’activités',
            stepTitle: 'Maîtriser les 4 quadrants de la matrice BCG',
            paragraphText:
              'Créée par le Boston Consulting Group, la **matrice BCG** aide les dirigeants à répartir leurs investissements entre leurs différents produits ou Domaines d’Activité Stratégique (DAS).\n' +
              '• **Axe horizontal** : Part de marché relative (position concurrentielle : forte à gauche, faible à droite).\n' +
              '• **Axe vertical** : Taux de croissance du marché (attractivité et besoin de liquidités : fort en haut, faible en bas).\n' +
              '• **4 quadrants** : Vedettes (Stars), Dilemmes (Question Marks), Vaches à lait (Cash Cows) et Poids morts (Dogs).',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice BCG — Gestion du portefeuille produits',
              caption: 'Croisement de la part de marché relative (génération de cash) et de la croissance du marché (besoin en investissements).',
              matrix2x2: {
                topAxis: ['PDM relative FORTE (> 1)', 'PDM relative FAIBLE (< 1)'],
                leftAxis: ['Croissance FORTE', 'Croissance FAIBLE'],
                topLeft: {
                  title: 'Vedettes (Stars)',
                  items: ['Leaders en forte croissance', 'Gros revenus mais gros besoins', 'Stratégie : Investir pour défendre'],
                  color: 'blue',
                },
                topRight: {
                  title: 'Dilemmes (?)',
                  items: ['Challengers en forte croissance', 'Consomment beaucoup de cash', 'Stratégie : Investir ou abandonner'],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'Vaches à lait',
                  items: ['Leaders sur marché mature', 'Fort excédent de trésorerie', 'Stratégie : Rentabiliser et financer'],
                  color: 'green',
                },
                bottomRight: {
                  title: 'Poids morts',
                  items: ['Faible PDM, marché stagnant', 'Rentabilité faible ou nulle', 'Stratégie : Désinvestir ou niche'],
                  color: 'slate',
                },
              },
            },
            keyRule:
              'Forte croissance = fort besoin de trésorerie pour suivre le marché ; Forte PDM relative = forte capacité à générer de la trésorerie (effet d’expérience).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q5',
              type: 'mcq',
              prompt: 'Dans la matrice BCG, comment qualifie-t-on un produit leader (part de marché relative > 1) évoluant sur un marché mature à faible croissance et dégageant d’importants flux de trésorerie ?',
              options: [
                'Un Dilemme',
                'Une Vache à lait',
                'Un Poids mort',
                'Une Vedette déficitaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une forte part de marché relative sur un marché à faible croissance caractérise la Vache à lait : elle nécessite peu d’investissements et génère le cash de l’entreprise.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Équilibre BCG',
            stepTheme: 'Dynamique de trésorerie',
            stepTitle: 'Piloter la trajectoire dynamique d’un portefeuille équilibré',
            paragraphText:
              'La matrice BCG ne sert pas seulement à photographier le présent : elle orchestre le renouvellement des revenus dans le temps.\n' +
              '• **Trajectoire de succès** : Dilemme (financé par les Vaches à lait) → devient Vedette → devient Vache à lait lorsque le marché mûrit.\n' +
              '• **Portefeuille déséquilibré (obèse)** : trop de Vaches à lait et aucune Vedette ni Dilemme → prospère aujourd’hui, menacé de disparition demain.\n' +
              '• **Portefeuille anémique** : trop de Dilemmes sans Vache à lait → crise de trésorerie imminente.\n' +
              'Exemple : une entreprise tech qui ne réinvestit pas les profits de son logiciel historique dans l’IA ou le mobile risque un déclin brutal.',
            konanTip:
              'Vérifie toujours si l’entreprise dispose à la fois d’une « pompe à cash » (Vache à lait) et de « moteurs de demain » (Vedettes / Dilemmes sélectionnés).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q6',
              type: 'mcq',
              prompt: 'Une entreprise dispose uniquement de trois produits en fin de maturité (Vaches à lait) et d’un Poids mort, sans aucune Vedette ni aucun Dilemme innovant. Quel est son principal risque ?',
              options: [
                'Un manque de trésorerie immédiat dès cette semaine',
                'L’absence de relais de croissance futurs lorsque ses Vaches à lait entreront en déclin',
                'Un excès d’investissements en recherche et développement',
                'Une croissance trop rapide impossible à financer',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un portefeuille composé uniquement de produits matures génère du cash à court terme mais n’a aucun relais d’avenir pour prendre la relève lors du déclin.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Marque & Packaging',
            stepTheme: 'Capital de marque',
            stepTitle: 'Valoriser le rôle stratégique de la marque et du conditionnement',
            paragraphText:
              'Au cœur de la politique produit, la **marque** et le **packaging** jouent un rôle décisif dans la différenciation et la fidélisation.\n' +
              '• **Fonctions de la marque** : repérage rapide en rayon, garantie de qualité constante, valorisation identitaire (statut) et protection juridique.\n' +
              '• **Fonctions du packaging** : fonction technique (protéger, conserver, transporter) et fonction marketing (« vendeur muet » qui attire l’œil et informe).\n' +
              '• **Équivalent digital** : pour une application ou un SaaS, l’interface utilisateur (UI/UX), l’icône et le nom de marque jouent exactement le rôle du packaging.\n' +
              'Exemple : un emballage refermable et coloré ou une interface mobile ultra-fluide augmente instantanément la valeur perçue.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p1_q7',
              type: 'mcq',
              prompt: 'Pourquoi qualifie-t-on souvent le packaging (conditionnement) de « vendeur muet » en marketing opérationnel ?',
              options: [
                'Parce qu’il est interdit d’y imprimer du texte',
                'Parce qu’au-delà de la protection physique, il attire l’attention, communique le positionnement et déclenche l’achat en rayon sans vendeur',
                'Parce qu’il ne coûte rien à fabriquer',
                'Parce qu’il remplace la comptabilité analytique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En libre-service comme en e-commerce, le packaging remplit une double mission : technique (protection) et commerciale (visibilité, information, séduction).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch4_p2',
        order: 2,
        title: 'Politique de Prix : méthodes de fixation et stratégies tarifaires',
        summary:
          'Calculer un prix à partir des coûts (taux de marge vs taux de marque), mesurer l’élasticité-prix de la demande, arbitrer entre écrémage, pénétration et alignement, et comprendre les modèles tarifaires du numérique.',
        conceptExplanation:
          "Le **Prix** est la seule variable du mix marketing qui génère directement du revenu — les trois autres (Produit, Distribution, Communication) engendrent des coûts. Il remplit un double rôle : levier direct de rentabilité et signal psychologique de qualité dans l’esprit du client.\n\nLa fixation du prix croise trois contraintes : (1) le **plancher des coûts** (coût de revient + marge commerciale), (2) le **plafond de la demande** (prix psychologique d’acceptabilité et **élasticité-prix** mesurant la sensibilité des quantités demandées aux variations de prix), et (3) le **repère concurrentiel**. Lors d’un lancement, l’entreprise choisit entre trois grandes stratégies tarifaires : l’**écrémage** (prix élevé au départ pour maximiser la marge unitaire et l’image haut de gamme), la **pénétration** (prix bas pour conquérir vite une forte part de marché) ou l’**alignement** (prix calé sur le marché). L’économie numérique enrichit ces choix avec le freemium, l’abonnement SaaS et la tarification dynamique.",
        formulas: [
          {
            name: 'Élasticité-prix de la demande',
            formula: 'e_p = \\frac{\\Delta Q / Q}{\\Delta P / P}',
            note: 'Généralement négative : si |e_p| > 1 la demande est élastique (très sensible au prix) ; si |e_p| < 1 elle est inélastique.',
          },
          {
            name: 'Taux de marge vs Taux de marque',
            formula: '\\text{Taux de marge} = \\frac{\\text{Marge}}{\\text{Coût d’achat}} \\qquad | \\qquad \\text{Taux de marque} = \\frac{\\text{Marge}}{\\text{Prix de vente HT}}',
            note: 'Le taux de marge rapporte la marge au coût ; le taux de marque rapporte la marge au prix de vente.',
          },
        ],
        keyRule:
          'Trois stratégies de lancement à connaître par cœur : Écrémage (prix élevé = marge + prestige), Pénétration (prix bas = volume + parts de marché), Alignement (prix proche des concurrents).',
        workedExample: {
          title: 'Calcul de marge et décision d’élasticité pour une boutique tech',
          statement:
            'Un revendeur achète un casque Bluetooth 20 000 FCFA HT et le vend 25 000 FCFA HT. (1) Calculez la marge, le taux de marge et le taux de marque. (2) S’il baisse le prix de 10 % et que ses ventes augmentent de 25 %, quelle est l’élasticité-prix ?',
          methodSteps: [
            '1) Marge unitaire = 25 000 − 20 000 = 5 000 FCFA.',
            '2) Taux de marge = 5 000 / 20 000 = 25 % ; Taux de marque = 5 000 / 25 000 = 20 %.',
            '3) Élasticité-prix : e_p = (+25 %) / (−10 %) = −2,5.',
            '4) Comme |e_p| = 2,5 > 1, la demande est fortement élastique : la baisse de prix augmente nettement le chiffre d’affaires global.',
          ],
          conclusion:
            'Maîtriser simultanément marge et élasticité évite de casser ses prix sur un bien inélastique ou de surestimer sa rentabilité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Double rôle',
            stepTheme: 'Revenu et signal de valeur',
            stepTitle: 'Comprendre les trois déterminants de la fixation d’un prix',
            paragraphText:
              'Fixer un prix au hasard est l’erreur la plus coûteuse en gestion commerciale : un prix trop bas détruit la marge et l’image, un prix trop haut bloque les ventes.\n' +
              '• **Les coûts (plancher)** : le prix de vente doit couvrir les coûts variables et contribuer aux coûts fixes pour dégager un bénéfice.\n' +
              '• **La demande (plafond)** : valeur perçue par le client, pouvoir d’achat et prix psychologique d’acceptabilité.\n' +
              '• **La concurrence (repère)** : tarifs pratiqués par les rivaux directs et les substituts.\n' +
              'Exemple : un parfum vendu trop bon marché éveille la méfiance sur sa qualité, alors qu’un prix cohérent renforce la valeur perçue.',
            keyRule:
              'Le prix est la seule variable des 4P qui génère directement du chiffre d’affaires : +5 % de prix sans perte de volume augmente directement le bénéfice net.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Parmi les quatre variables classiques du mix marketing (4P), quelle particularité distingue la politique de Prix ?',
              options: [
                'C’est la seule variable qui ne dépend jamais de la concurrence',
                'C’est la seule variable qui génère directement des recettes, tandis que les trois autres engendrent des coûts',
                'Elle est toujours fixée définitivement par l’État pour tous les produits',
                'Elle n’a aucun impact sur l’image perçue de la marque',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Concevoir un produit, le distribuer et communiquer coûtent de l’argent ; le prix est le levier qui capte la valeur créée et génère le revenu.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calculs de prix',
            stepTheme: 'Taux de marge, taux de marque et prix psychologique',
            stepTitle: 'Maîtriser taux de marge, taux de marque et prix psychologique',
            paragraphText:
              'Deux méthodes majeures guident le calcul tarifaire : partir des coûts internes ou partir de la perception du client.\n' +
              '• **Taux de marge** = Marge / Coût d’achat (utilisé par les industriels et grossistes).\n' +
              '• **Taux de marque** = Marge / Prix de vente HT (utilisé par la distribution pour savoir quelle part du CA reste en marge).\n' +
              '• **Prix psychologique (d’acceptabilité)** : prix maximisant le pourcentage d’acheteurs qui ne jugent le produit ni trop cher (frein budgétaire) ni trop bon marché (doute sur la qualité).\n' +
              'Exemple : un article acheté 10 000 FCFA et vendu 12 500 FCFA dégage 2 500 FCFA de marge → taux de marge = 25 %, mais taux de marque = 20 %.',
            formula: {
              name: 'Passage du coût au prix par le taux de marque',
              formula: '\\text{Prix de vente HT} = \\frac{\\text{Coût d’achat}}{1 - \\text{Taux de marque}}',
              note: 'Pour un coût de 10 000 FCFA et un taux de marque souhaité de 20 % : PV = 10 000 / 0,80 = 12 500 FCFA.',
            },
            konanTip:
              'Astuce infaillible : « MarGe » divise par le coût d’achat (G comme dépense engagée) ; « MarQue » divise par le prix de vente (étiquette de la marque).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p2_q2',
              type: 'mcq',
              prompt: 'Un commerçant achète un routeur Wi-Fi à 30 000 FCFA HT et le revend à 40 000 FCFA HT. Quel est son taux de marque ?',
              options: [
                '33,3 %',
                '25 %',
                '40 %',
                '10 %',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Marge = 40 000 − 30 000 = 10 000 FCFA. Taux de marque = Marge / Prix de vente HT = 10 000 / 40 000 = 0,25 soit 25 % (le taux de marge serait 10 000 / 30 000 = 33,3 %).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Élasticité',
            stepTheme: 'Sensibilité de la demande',
            stepTitle: 'Interpréter l’élasticité-prix de la demande',
            paragraphText:
              'Avant de modifier un tarif, le marketeur doit anticiper comment réagiront les quantités vendues grâce à l’**élasticité-prix** ($e_p$).\n' +
              '• **Demande élastique ($|e_p| > 1$)** : une hausse de 10 % du prix fait chuter les ventes de plus de 10 % (ex. billets d’avion loisirs, produits avec nombreux substituts).\n' +
              '• **Demande inélastique ($|e_p| < 1$)** : les quantités bougent peu malgré la hausse de prix (ex. médicaments essentiels, carburant, produits de première nécessité).\n' +
              '• **Effet Veblen ($e_p > 0$)** : exception rare du luxe où un prix plus élevé accroît le prestige et donc la demande.\n' +
              'Exemple : si $e_p = -0{,}3$, augmenter le prix de 10 % ne réduit les volumes que de 3 % et accroît donc le chiffre d’affaires.',
            formula: {
              name: 'Coefficient d’élasticité-prix',
              formula: 'e_p = \\frac{\\Delta Q / Q}{\\Delta P / P}',
              note: 'Signe négatif dans le cas normal : prix et quantités demandées varient en sens inverse.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p2_q3',
              type: 'mcq',
              prompt: 'Une plateforme de streaming augmente son abonnement mensuel de 20 % et constate une baisse de 5 % seulement du nombre d’abonnés. Quelle est son élasticité-prix et que signifie-t-elle ?',
              options: [
                'e_p = −4 : demande très élastique',
                'e_p = −0,25 : demande inélastique (peu sensible à la hausse de prix)',
                'e_p = +0,25 : effet Veblen de luxe pur',
                'e_p = −1 : élasticité parfaitement unitaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'e_p = (−5 %) / (+20 %) = −0,25. Comme |−0,25| < 1, la demande est inélastique : les abonnés restent fidèles malgré la hausse tarifaire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: '3 stratégies',
            stepTheme: 'Écrémage, pénétration, alignement',
            stepTitle: 'Choisir entre écrémage, pénétration et alignement au lancement',
            paragraphText:
              'Au moment d’introduire une nouvelle offre sur le marché, trois grandes politiques tarifaires s’offrent au décideur.\n' +
              '• **Stratégie d’écrémage** : fixer un prix élevé dès le départ pour cibler les clients peu sensibles au prix, rentabiliser vite la R&D et bâtir une image premium (ex. nouveau smartphone flagship).\n' +
              '• **Stratégie de pénétration** : fixer un prix volontairement bas pour conquérir rapidement un volume massif, bénéficier d’économies d’échelle et décourager les concurrents (ex. nouvel opérateur ou fintech mobile).\n' +
              '• **Stratégie d’alignement** : fixer un prix proche de celui des concurrents pour éviter une guerre des prix et rivaliser sur le produit ou le service.',
            keyRule:
              'Écrémage = forte innovation / image haut de gamme / faible concurrence immédiate ; Pénétration = marché vaste, sensible au prix, à fort effet de réseau.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p2_q4',
              type: 'mcq',
              prompt: 'Une nouvelle application de transfert d’argent lance son service en Côte d’Ivoire avec des frais à 1 % — nettement inférieurs aux acteurs historiques — afin d’acquérir très vite des millions d’utilisateurs. Quelle stratégie tarifaire applique-t-elle ?',
              options: [
                'Une stratégie d’écrémage',
                'Une stratégie de pénétration',
                'Une stratégie d’alignement strict',
                'Une tarification de luxe Veblen',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pratiquer un prix bas dès le lancement pour conquérir rapidement une large part de marché et activer les effets de réseau définit la stratégie de pénétration.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Pricing digital',
            stepTheme: 'Freemium, SaaS et tarification dynamique',
            stepTitle: 'Exploiter les modèles tarifaires propres à l’économie numérique',
            paragraphText:
              'Grâce à des coûts marginaux très faibles et à la donnée en temps réel, les entreprises numériques ont renouvelé la politique de prix.\n' +
              '• **Freemium** : version de base gratuite pour attirer massivement les utilisateurs, puis fonctionnalités avancées payantes (ex. Canva, Spotify, Dropbox).\n' +
              '• **Abonnement récurrent (SaaS)** : paiement mensuel ou annuel offrant des revenus prévisibles et un accès continu aux mises à jour.\n' +
              '• **Tarification dynamique (Yield Management)** : prix ajusté automatiquement selon la demande, l’heure ou la disponibilité (ex. compagnies aériennes, VTC aux heures de pointe).\n' +
              'Exemple : un logiciel de comptabilité en ligne gratuit jusqu’à 20 factures/mois puis facturé 15 000 FCFA/mois en version Pro.',
            konanTip:
              'En freemium, la version gratuite doit être assez utile pour séduire, mais laisser un vrai besoin d’upgrade vers la version payante (taux de conversion cible souvent de 2 à 5 %).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p2_q5',
              type: 'mcq',
              prompt: 'Une application de VTC majore automatiquement le tarif des courses de 30 % les soirs de forte pluie lorsque la demande dépasse largement le nombre de chauffeurs disponibles. De quel mécanisme tarifaire s’agit-il ?',
              options: [
                'Le modèle freemium',
                'La tarification dynamique (yield management)',
                'La stratégie d’alignement fixe',
                'Le prix psychologique statique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ajuster le prix en temps réel en fonction de l’équilibre instantané entre l’offre et la demande correspond à la tarification dynamique (yield management).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège tarifaire',
            stepTheme: 'Guerre des prix',
            stepTitle: 'Comprendre les dangers d’une guerre des prix',
            paragraphText:
              'Baisser son prix est la décision marketing la plus rapide à imiter par un concurrent — et la plus difficile à annuler.\n' +
              '• **Mécanisme destructeur** : si A baisse son prix de 15 %, B s’aligne dès le lendemain ; les parts de marché restent identiques mais toute la filière perd ses marges.\n' +
              '• **Dégradation d’image** : des promotions permanentes habituent le client à ne plus jamais acheter au prix normal.\n' +
              '• **Alternative saine** : plutôt que brader le prix, enrichir la valeur perçue (bonus, garantie, pack, fidélité, service rapide).\n' +
              'Exemple : offrir la livraison gratuite au-dessus de 25 000 FCFA d’achat préserve le prix facial et augmente le panier moyen.',
            keyRule:
              'Une baisse de prix est copiée en 24 heures ; une différenciation par la qualité, la marque ou le service protège durablement la marge.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p2_q6',
              type: 'mcq',
              prompt: 'Pourquoi les stratèges marketing déconseillent-ils généralement de déclencher une « guerre des prix » frontale contre un concurrent de taille équivalente ?',
              options: [
                'Parce que les baisses de prix sont interdites par la loi en toute circonstance',
                'Parce que le concurrent peut répliquer immédiatement, détruisant les marges de tout le secteur sans gain durable de part de marché',
                'Parce qu’une baisse de prix augmente toujours automatiquement les coûts fixes',
                'Parce que les clients n’aiment jamais payer moins cher',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La réplique immédiate des concurrents annule l’avantage volume tout en érodant durablement la rentabilité et la valeur perçue de l’ensemble du marché.',
            },
          },
        ],
      }),


      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch4_p3',
        order: 3,
        title: 'Politique de Distribution (Place) et extension aux 7P des services',
        summary:
          'Choisir la longueur des canaux (direct, court, long), arbitrer entre distribution intensive, sélective ou exclusive, piloter l’omnicanal et maîtriser les 3P supplémentaires du marketing des services (People, Process, Physical Evidence).',
        conceptExplanation:
          "La **Distribution (Place)** rassemble l’ensemble des circuits et opérations logistiques qui rendent le produit disponible au bon endroit, au bon moment et dans les bonnes quantités. On distingue trois longueurs de canal : le **canal direct** (Producteur → Consommateur, sans intermédiaire), le **canal court** (Producteur → Détaillant → Consommateur) et le **canal long** (Producteur → Grossiste → Détaillant → Consommateur). Selon le positionnement, l’entreprise opte pour une couverture **intensive** (maximum de points de vente), **sélective** (distributeurs choisis sur critères de qualité) ou **exclusive** (un seul distributeur par zone). À l’ère numérique, les marques passent du multicanal cloisonné à l’**omnicanal** (parcours unifié web + mobile + magasin, Click & Collect).\n\nEnfin, les services présentant quatre spécificités (Intangibilité, Inséparabilité, Variabilité, Périssabilité), Booms et Bitner ont étendu les 4P en **7P** en ajoutant : **People** (personnel en contact et clients), **Process** (fluidité des processus de service) et **Physical Evidence** (preuves matérielles : locaux, design d’interface, uniformes, factures).",
        formulas: [
          {
            name: 'Extension du Mix Marketing aux Services (7P)',
            formula: '\\text{7P} = \\underbrace{\\text{Product} + \\text{Price} + \\text{Place} + \\text{Promotion}}_{\\text{4P classiques}} + \\underbrace{\\text{People} + \\text{Process} + \\text{Physical Evidence}}_{\\text{3P des services}}',
            note: 'Indispensable dans les banques, télécoms, plateformes numériques, hôtellerie, éducation et santé.',
          },
        ],
        keyRule:
          'Distribution intensive = produits de grande consommation ; Sélective = produits techniques ou haut de gamme ; Exclusive = luxe ou franchises contrôlées.',
        workedExample: {
          title: 'Choisir le canal et les 7P d’une marque de laptops et d’une banque digitale',
          statement:
            'Comparez la stratégie de distribution pertinente pour : (1) une boisson rafraîchissante à 300 FCFA ; (2) un ordinateur haut de gamme à 1 200 000 FCFA ; puis citez les 3P additionnels d’une banque digitale.',
          methodSteps: [
            '1) Boisson à 300 FCFA : distribution INTENSIVE via canal long (grossistes, supermarchés, maquis, kiosques) pour être partout à portée de main.',
            '2) Ordinateur haut de gamme : distribution SÉLECTIVE (boutiques tech agréées + site direct) garantissant conseil expert et image soignée.',
            '3) 3P d’une banque digitale : People (conseillers chat/téléphone formés), Process (ouverture de compte en 3 minutes avec KYC mobile), Physical Evidence (ergonomie de l’app, design de la carte physique, reçus PDF clairs).',
          ],
          conclusion:
            'Le canal et les preuves de service doivent toujours refléter exactement le positionnement de l’offre.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Canaux',
            stepTheme: 'Direct, court et long',
            stepTitle: 'Distinguer canal direct, canal court et canal long',
            paragraphText:
              'Un **canal de distribution** est le chemin parcouru par un bien ou service du producteur jusqu’à l’utilisateur final.\n' +
              '• **Canal direct (0 intermédiaire)** : vente en boutique propre, site e-commerce officiel ou application mobile → marge préservée et maîtrise totale de la donnée client.\n' +
              '• **Canal court (1 intermédiaire)** : Producteur → Détaillant (ou marketplace) → Client → bon équilibre entre visibilité et contrôle.\n' +
              '• **Canal long (2+ intermédiaires)** : Producteur → Grossiste → Demi-grossiste → Détaillant → Client → couverture géographique massive (notamment en zones rurales).\n' +
              'Exemple : un éditeur SaaS vend en canal direct via son site web, tandis qu’un producteur de riz passe par un canal long.',
            keyRule:
              'Plus un canal est long, plus la couverture géographique s’élargit — mais plus le producteur partage sa marge et s’éloigne du client final.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p3_q1',
              type: 'mcq',
              prompt: 'Une marque ivoirienne de vêtements vend exclusivement sur son propre site web et dans son showroom de Cocody, sans aucun revendeur externe. Quel type de canal utilise-t-elle ?',
              options: [
                'Un canal long',
                'Un canal direct (ultra-court)',
                'Un canal de grossistes multiples',
                'Une distribution intensive de masse',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsqu’il n’existe aucun intermédiaire indépendant entre le producteur et le consommateur final, il s’agit d’un canal direct.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Couverture',
            stepTheme: 'Intensive, sélective, exclusive',
            stepTitle: 'Arbitrer entre distribution intensive, sélective et exclusive',
            paragraphText:
              'Le nombre de points de vente retenus dans une zone géographique traduit directement le positionnement de la marque.\n' +
              '• **Distribution intensive** : être présent dans le plus grand nombre possible de points de vente (produits d’achat courant : eau, savon, recharges télécom).\n' +
              '• **Distribution sélective** : choisir un nombre limité de revendeurs qualifiés répondant à des critères précis (électronique, cosmétiques, sport).\n' +
              '• **Distribution exclusive** : confier l’exclusivité territoriale à un seul distributeur agréé (automobile de prestige, luxe, franchises strictes).\n' +
              'Exemple : les cartes de recharge télécom visent une distribution intensive ; les concessionnaires automobiles de luxe optent pour la distribution exclusive.',
            konanTip:
              'Vérifie toujours la cohérence Prix ↔ Distribution : un produit de luxe vendu en distribution intensive perd immédiatement sa rareté et son prestige.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p3_q2',
              type: 'mcq',
              prompt: 'Un fabricant d’appareils photo professionnels ne sélectionne que 12 revendeurs spécialisés dans tout le pays capables d’offrir des démonstrations techniques et un SAV qualifié. Quelle stratégie de couverture applique-t-il ?',
              options: [
                'La distribution intensive',
                'La distribution sélective',
                'La vente directe exclusive en porte-à-porte',
                'L’absence de politique de distribution',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Limiter la distribution à des intermédiaires rigoureusement choisis selon leurs compétences techniques et leur image définit la distribution sélective.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Omnicanal',
            stepTheme: 'Du multicanal au phygital',
            stepTitle: 'Passer du multicanal cloisonné à l’expérience omnicanale',
            paragraphText:
              'Aujourd’hui, un même client découvre un produit sur Instagram, vérifie le stock sur mobile, l’essaie en boutique et se fait livrer au bureau.\n' +
              '• **Multicanal** : l’entreprise possède plusieurs canaux (site web, boutique, WhatsApp), mais ils fonctionnent en silos indépendants.\n' +
              '• **Omnicanal** : tous les canaux sont interconnectés autour d’un compte client unique et d’un stock partagé, offrant un parcours fluide sans rupture.\n' +
              '• **Phygital & Click & Collect** : commander en ligne et retirer en magasin 1 heure plus tard, ou commander sur borne en boutique un article en rupture de taille.\n' +
              'Exemple : un client qui commence un panier sur l’app mobile et finalise son achat en magasin avec les mêmes points de fidélité vit une expérience omnicanale.',
            keyRule:
              'Dans le multicanal, les canaux coexistent (et parfois se concurrencent) ; dans l’omnicanal, ils coopèrent pour offrir une expérience client unifiée.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p3_q3',
              type: 'mcq',
              prompt: 'Qu’est-ce qui différencie fondamentalement une stratégie « omnicanale » d’une simple stratégie « multicanale » ?',
              options: [
                'L’omnicanal supprime tous les magasins physiques',
                'L’omnicanal interconnecte tous les canaux (web, mobile, magasin) avec données et stocks unifiés pour un parcours client sans couture',
                'Le multicanal est réservé exclusivement aux administrations publiques',
                'L’omnicanal interdit les paiements mobiles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’omnicanal brise les silos entre canaux physiques et numériques afin que le client puisse passer librement de l’un à l’autre avec le même historique et le même service.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Mix 4P → 7P',
            stepTheme: 'Marketing des services',
            stepTitle: 'Maîtriser le passage des 4P classiques aux 7P des services',
            paragraphText:
              'Dans l’économie numérique et tertiaire (banques, télécoms, SaaS, formation, transport), les 4P historiques ne suffisent plus car le client consomme une expérience autant qu’un objet.\n' +
              '• **5e P — People (Personnel & Clients)** : compétence, empathie et présentation des équipes en contact.\n' +
              '• **6e P — Process (Processus)** : simplicité, rapidité et fiabilité du parcours (inscription, paiement, livraison, réclamation).\n' +
              '• **7e P — Physical Evidence (Preuves matérielles)** : éléments tangibles qui rassurent sur la qualité d’un service invisible (design UI/UX, locaux, certificats, avis vérifiés).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau synthétique du Mix Marketing : des 4P aux 7P',
              caption: 'Les 3P additionnels complètent les 4P traditionnels pour piloter la qualité perçue des services et plateformes numériques.',
              tableData: {
                headers: ['Variable (P)', 'Périmètre', 'Exemples concrets (ENTD / Digital)'],
                rows: [
                  ['1. Product (Produit)', '4P classique', 'Fonctionnalités, design, gamme, marque, SAV'],
                  ['2. Price (Prix)', '4P classique', 'Tarif, freemium, abonnement, remises, paiement'],
                  ['3. Place (Distribution)', '4P classique', 'App Store, site e-commerce, agences, omnicanal'],
                  ['4. Promotion (Comm.)', '4P classique', 'Publicité, SEO/SEA, réseaux sociaux, RP'],
                  ['5. People (Humain)', '+3P services', 'Support client, livreurs, formateurs, communauté'],
                  ['6. Process (Processus)', '+3P services', 'Tunnel de commande en 3 clics, délai de réponse'],
                  ['7. Physical Evidence', '+3P services', 'Interface UI soignée, reçu PDF, locaux, avis clients'],
                ],
              },
            },
            keyRule:
              'Pour un service immatériel, le client juge la qualité à travers les 3P visibles : l’attitude humaine (People), la fluidité (Process) et les signes tangibles (Physical Evidence).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p3_q4',
              type: 'mcq',
              prompt: 'Quels sont les trois « P » ajoutés au modèle classique des 4P pour constituer les 7P du marketing des services ?',
              options: [
                'Profit, Production et Partenariat',
                'People (Personnel), Process (Processus) et Physical Evidence (Preuves matérielles)',
                'Publicité, Packaging et Psychologie',
                'Politique, Population et Patrimoine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’extension aux services ajoute People (facteur humain), Process (déroulement du service) et Physical Evidence (supports matériels/visuels tangibilisant le service).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Spécificités IPIS',
            stepTheme: 'Nature des services',
            stepTitle: 'Comprendre les 4 caractéristiques spécifiques des services',
            paragraphText:
              'Pourquoi le marketing des services exige-t-il ces 3P supplémentaires ? En raison de quatre propriétés distinctives (souvent mémorisées par les initiales I–I–V–P).\n' +
              '• **Intangibilité** : impossible de toucher ou tester le service avant achat → besoin de preuves matérielles et d’avis clients.\n' +
              '• **Inséparabilité** : le service est produit et consommé en même temps, souvent en présence du client.\n' +
              '• **Variabilité (Hétérogénéité)** : la qualité dépend de qui délivre le service et à quel moment → besoin de formation et standards.\n' +
              '• **Périssabilité** : un service non vendu ne se stocke pas (un siège d’avion vide au décollage est définitivement perdu) → besoin de yield management.',
            konanTip:
              'Une chambre d’hôtel vide ce soir ou un créneau de consultation non réservé illustre parfaitement la « périssabilité » des services.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p3_q5',
              type: 'mcq',
              prompt: 'Un bus Abidjan–Yamoussoukro part avec 15 sièges vides : ces 15 places ne peuvent pas être mises en entrepôt pour être vendues demain. Quelle caractéristique spécifique des services cela illustre-t-il ?',
              options: [
                'L’intangibilité pure',
                'La périssabilité (impossibilité de stocker un service)',
                'La standardisation mécanique',
                'La distribution exclusive',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La périssabilité signifie qu’une capacité de service non consommée à l’instant T est définitivement perdue et ne peut être stockée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cohérence Mix',
            stepTheme: 'Aligner les 7P',
            stepTitle: 'Vérifier la cohérence globale entre tous les P du mix',
            paragraphText:
              'La force du mix marketing ne réside pas dans chaque P pris isolément, mais dans leur **harmonie d’ensemble** au service du positionnement.\n' +
              '• **Incohérence fatale** : facturer un abonnement SaaS premium (Prix élevé) tout en offrant une interface lente remplie de bugs (Process défaillant) et un support injoignable (People défaillant).\n' +
              '• **Synergie gagnante** : produit fiable + prix transparent + accès mobile fluide + support réactif + communication claire.\n' +
              'Exemple : une école d’excellence en numérique qui combine programmes modernes (Product), plateforme fluide (Process), enseignants experts (People) et campus moderne (Physical Evidence).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p3_q6',
              type: 'mcq',
              prompt: 'Une fintech se positionne sur « la simplicité et la rapidité absolues », mais oblige ses nouveaux utilisateurs à imprimer un dossier papier de 12 pages et à se déplacer en agence. Quel « P » des 7P crée ici une rupture de cohérence ?',
              options: [
                'Le Process (processus lourd en contradiction avec la promesse de rapidité)',
                'Le macroenvironnement démographique',
                'La matrice BCG',
                'L’élasticité croisée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un parcours d’inscription papier lourd contredit frontalement le positionnement de rapidité : c’est une défaillance du 6e P (Process).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch4_p4',
        order: 4,
        title: 'Politique de Communication (Promotion) et Marketing Digital (AARRR, SEO, Réseaux Sociaux)',
        summary:
          'Maîtriser les objectifs de communication (modèle AIDA), les stratégies Push/Pull, les leviers du marketing digital (Inbound, SEO/SEA, réseaux sociaux), le tunnel AARRR et les principaux KPI digitaux (CTR, CAC, LTV).',
        conceptExplanation:
          "La **Communication (Promotion)** vise à faire connaître l’offre (objectif cognitif), la faire aimer (objectif affectif) et faire agir le client (objectif conatif) — logique résumée par le modèle **AIDA** (Attention, Intérêt, Désir, Action). Elle combine communication **média** (TV, radio, presse, affichage, cinéma, médias digitaux) et **hors-média** (promotion des ventes, relations publiques, parrainage/sponsoring, marketing direct, événementiel). L’entreprise arbitre aussi entre stratégie **Push** (pousser le produit via les distributeurs et la force de vente) et stratégie **Pull** (attirer le consommateur final par la publicité pour qu’il réclame la marque).\n\nLe **Marketing Digital** transforme cette dynamique grâce à la mesure en temps réel et au ciblage fin : **Inbound Marketing** (attirer par des contenus utiles, SEO et réseaux sociaux) vs **Outbound** (publicité sortante, SEA), pilotage de la croissance par le tunnel **AARRR** (Acquisition, Activation, Rétention, Recommandation, Revenu) et suivi rigoureux des KPI tels que le taux de clic (CTR), le taux de conversion, le Coût d’Acquisition Client (CAC) et la Valeur Vie Client (LTV).",
        formulas: [
          {
            name: 'Taux de clic (CTR) et Taux de conversion',
            formula: '\\text{CTR} = \\frac{\\text{Clics}}{\\text{Impressions}} \\times 100 \\qquad | \\qquad \\text{Conversion} = \\frac{\\text{Achats ou Inscriptions}}{\\text{Visiteurs}} \\times 100',
            note: 'Le CTR mesure l’attractivité de l’annonce ; le taux de conversion mesure la performance de la page d’atterrissage et de l’offre.',
          },
          {
            name: 'Rentabilité d’acquisition digitale (Ratio LTV / CAC)',
            formula: '\\text{CAC} = \\frac{\\text{Budget Marketing + Ventes}}{\\text{Nombre de nouveaux clients}} \\qquad ; \\qquad \\text{Règle saine : } \\frac{\\text{LTV}}{\\text{CAC}} \\ge 3',
            note: 'Un client doit rapporter au moins 3 fois ce qu’il a coûté à acquérir pour assurer une croissance durable.',
          },
        ],
        keyRule:
          'SEO = référencement naturel gratuit mais progressif (contenus, technique, liens) ; SEA = liens sponsorisés payants à effet immédiat (enchères au clic CPC).',
        workedExample: {
          title: 'Évaluer la performance digitale d’une campagne e-commerce à Abidjan',
          statement:
            'Une boutique en ligne dépense 300 000 FCFA en publicités sociales : 50 000 impressions, 1 500 clics et 60 clients achetant en moyenne 25 000 FCFA sur l’année (marge nette 40 %, soit LTV = 10 000 FCFA). Calculez le CTR, le taux de conversion, le CAC et le ratio LTV/CAC.',
          methodSteps: [
            '1) CTR = (1 500 / 50 000) × 100 = 3 % (très bon taux de clic).',
            '2) Taux de conversion = (60 / 1 500) × 100 = 4 %.',
            '3) CAC = 300 000 / 60 = 5 000 FCFA par nouveau client acquis.',
            '4) Ratio LTV / CAC = 10 000 / 5 000 = 2 (rentable, mais encore sous le seuil idéal de 3 → travailler la rétention pour augmenter la LTV).',
          ],
          conclusion:
            'Les KPI digitaux permettent d’identifier précisément si le levier prioritaire est la publicité (CTR), le site (conversion) ou la fidélisation (LTV).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Modèle AIDA',
            stepTheme: 'Objectifs de communication',
            stepTitle: 'Structurer tout message persuasif avec le modèle AIDA',
            paragraphText:
              'Une campagne de communication réussie fait franchir au prospect quatre marches psychologiques successives résumées par l’acronyme **AIDA**.\n' +
              '• **A — Attention** : capter le regard dans un flux saturé (accroche visuelle, titre percutant, vidéo courte).\n' +
              '• **I — Intérêt** : montrer en quoi le sujet concerne directement le problème du prospect.\n' +
              '• **D — Désir** : projeter le client dans le bénéfice concret (preuves sociales, démonstration, témoignages).\n' +
              '• **A — Action** : conclure par un appel à l’action clair (*Call-To-Action* : « Essayez gratuitement », « Commandez sur WhatsApp »).',
            keyRule:
              'AIDA relie les trois niveaux d’objectifs de communication : Cognitif (Attention/Intérêt = faire savoir), Affectif (Désir = faire aimer) et Conatif (Action = faire agir).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p4_q1',
              type: 'mcq',
              prompt: 'Dans le modèle AIDA, à quelle étape correspond l’insertion d’un bouton visible « Télécharger l’application maintenant » à la fin d’une vidéo promotionnelle ?',
              options: [
                'Attention',
                'Intérêt',
                'Action (objectif conatif)',
                'Dissonance cognitive',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’appel à l’action (CTA) vise à déclencher le passage à l’acte concret du prospect : c’est le stade « Action » (dimension conative).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Push vs Pull',
            stepTheme: 'Média, hors-média et stratégies',
            stepTitle: 'Combiner communication média/hors-média et stratégies Push/Pull',
            paragraphText:
              'L’entreprise dispose d’un mix de communication varié qu’elle déploie selon deux logiques complémentaires.\n' +
              '• **Communication média vs hors-média** : les grands médias (TV, radio, affichage, presse, pub digitale) construisent vite la notoriété ; le hors-média (promotions, relations publiques, sponsoring, marketing direct, événements) stimule la proximité et l’achat immédiat.\n' +
              '• **Stratégie Push (Pousser)** : motiver les distributeurs et vendeurs (remises, primes, PLV) pour qu’ils poussent le produit vers le client.\n' +
              '• **Stratégie Pull (Tirer)** : communiquer massivement auprès du consommateur final pour qu’il réclame lui-même la marque en magasin.\n' +
              'Exemple : lancer une grande pub TV/TikTok (Pull) tout en offrant des présentoirs aux boutiquiers (Push).',
            konanTip:
              'Retiens le sens de la flèche : Push = Producteur → Distributeur → Client ; Pull = Producteur → Client qui « tire » le produit chez le distributeur.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p4_q2',
              type: 'mcq',
              prompt: 'Une marque de boissons offre une prime financière et des réfrigérateurs aux gérants de supérettes pour qu’ils mettent ses bouteilles bien en avant et les recommandent aux clients. Quelle stratégie de communication déploie-t-elle ?',
              options: [
                'Une stratégie Pull pure',
                'Une stratégie Push',
                'Du référencement naturel SEO',
                'Une stratégie d’écrémage',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Inciter les intermédiaires (distributeurs, détaillants) à pousser activement le produit vers le consommateur final caractérise la stratégie Push.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'SEO vs SEA',
            stepTheme: 'Inbound et moteurs de recherche',
            stepTitle: 'Distinguer Inbound Marketing, SEO et SEA sur les moteurs de recherche',
            paragraphText:
              'Sur Internet, la bataille de la visibilité repose sur l’équilibre entre contenu organique durable et publicité payante instantanée.\n' +
              '• **Inbound Marketing** : attirer naturellement les prospects vers soi en publiant des contenus utiles (articles, vidéos, guides, simulateurs) au lieu d’interrompre leur navigation (Outbound).\n' +
              '• **SEO (Search Engine Optimization)** : référencement naturel visant à apparaître en tête de Google sans payer par clic (qualité du contenu, mots-clés, vitesse technique, liens entrants).\n' +
              '• **SEA (Search Engine Advertising)** : annonces sponsorisées payées au clic (Google Ads) offrant une visibilité immédiate dès le jour 1.\n' +
              'Exemple : une école en ligne utilise le SEA pendant la période d’inscriptions (effet immédiat) et le SEO toute l’année (trafic durable gratuit).',
            keyRule:
              'SEA = résultats immédiats qui s’arrêtent dès qu’on coupe le budget ; SEO = investissement progressif qui génère un trafic durable à coût marginal nul.',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p4_q3',
              type: 'mcq',
              prompt: 'Quelle différence essentielle oppose le SEO au SEA dans une stratégie d’acquisition sur moteur de recherche ?',
              options: [
                'Le SEO est interdit aux PME alors que le SEA est obligatoire',
                'Le SEO optimise le positionnement naturel (gratuit au clic, effet moyen/long terme) tandis que le SEA achète des emplacements sponsorisés (payant au clic, effet immédiat)',
                'Le SEA sert uniquement à envoyer des courriers papier',
                'Le SEO et le SEA désignent exactement la même régie publicitaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le SEO (référencement naturel) bâtit une visibilité organique durable ; le SEA (liens sponsorisés) achète une visibilité instantanée facturée au clic (CPC).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Tunnel AARRR',
            stepTheme: 'Growth Marketing',
            stepTitle: 'Piloter la croissance digitale avec le framework pirate AARRR',
            paragraphText:
              'Popularisé par Dave McClure dans l’écosystème des startups, le tunnel **AARRR** (surnommé « métriques pirates ») décompose toute la vie d’un utilisateur numérique en cinq leviers mesurables.\n' +
              '• **Acquisition** : comment les visiteurs découvrent le site ou l’app (SEO, pubs, réseaux sociaux).\n' +
              '• **Activation** : première expérience réussie (« moment Aha ! », inscription complète, premier usage).\n' +
              '• **Rétention** : les utilisateurs reviennent-ils régulièrement ? (taux de rétention vs taux d’attrition/*churn*).\n' +
              '• **Recommandation (Referral)** : parrainent-ils leurs amis ? (bouche-à-oreille viral).\n' +
              '• **Revenu** : comment l’usage se transforme-t-il en chiffre d’affaires (abonnements, commissions, panier moyen) ?',
            konanTip:
              'Inutile d’injecter des millions en Acquisition si ta Rétention est mauvaise : c’est comme verser de l’eau dans un seau percé !',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p4_q4',
              type: 'mcq',
              prompt: 'Une application mobile attire 10 000 téléchargements par mois, mais 85 % des utilisateurs la désinstallent après 48 heures sans jamais revenir. Quelle étape du tunnel AARRR est prioritairement en difficulté ?',
              options: [
                'L’Acquisition',
                'La Rétention (et l’Activation initiale)',
                'La segmentation géographique',
                'La distribution physique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Acquisition fonctionne (10 000 téléchargements), mais l’incapacité à retenir les utilisateurs dans la durée révèle un défaut critique d’Activation et de Rétention.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'KPI digitaux',
            stepTheme: 'Mesurer la rentabilité',
            stepTitle: 'Calculer et interpréter les KPI clés : CTR, Conversion, CAC et LTV',
            paragraphText:
              'L’avantage décisif du marketing digital est sa traçabilité chiffrée : chaque franc investi peut être évalué par des indicateurs précis (*KPI*).\n' +
              '• **CTR (Click-Through Rate)** = Clics / Impressions × 100 (mesure l’attrait d’une publicité).\n' +
              '• **Taux de conversion** = Conversions / Visiteurs × 100 (mesure l’efficacité du site ou de l’offre).\n' +
              '• **CAC (Coût d’Acquisition Client)** = Budget marketing & commercial / Nouveaux clients acquis.\n' +
              '• **LTV (Lifetime Value)** = Marge totale générée par un client sur toute la durée de sa relation avec la marque.\n' +
              'Exemple : si CAC = 4 000 FCFA et LTV = 16 000 FCFA, le ratio LTV/CAC = 4 confirme un modèle très sain.',
            formula: {
              name: 'Équation de viabilité digitale',
              formula: '\\text{CAC} = \\frac{\\text{Dépenses d’acquisition}}{\\text{Nouveaux clients}} \\qquad \\text{et} \\qquad \\text{LTV} > 3 \\times \\text{CAC}',
              note: 'Si CAC > LTV, chaque nouveau client fait perdre de l’argent à l’entreprise.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p4_q5',
              type: 'mcq',
              prompt: 'Une startup dépense 500 000 FCFA en campagnes digitales et acquiert 100 nouveaux clients payants. Quel est son Coût d’Acquisition Client (CAC) ?',
              options: [
                '500 FCFA',
                '5 000 FCFA',
                '50 000 FCFA',
                '100 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CAC = Budget d’acquisition / Nombre de nouveaux clients = 500 000 / 100 = 5 000 FCFA par client.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Réseaux sociaux',
            stepTheme: 'Social Media & Commerce conversationnel',
            stepTitle: 'Choisir les bons réseaux sociaux et le marketing d’influence en Afrique de l’Ouest',
            paragraphText:
              'Une stratégie réseaux sociaux efficace ne consiste pas à être présent partout, mais à choisir les plateformes où se trouve réellement la cible avec des formats adaptés.\n' +
              '• **LinkedIn** : indispensable en B2B (décideurs, recrutement, expertise sectorielle).\n' +
              '• **TikTok, Instagram et Facebook** : idéaux en B2C pour la démonstration produit en vidéo courte, la notoriété et le ciblage local précis.\n' +
              '• **WhatsApp Business** : canal majeur du *commerce conversationnel* en Côte d’Ivoire (catalogue intégré, devis rapide, SAV et closing direct).\n' +
              '• **Micro-influenceurs** : créateurs spécialisés (5 000 à 50 000 abonnés) générant souvent un taux d’engagement et de confiance supérieur aux célébrités généralistes.',
            konanTip:
              'Toujours relier tes publications sociales à un objectif mesurable (clics, messages WhatsApp qualifiés, ventes) plutôt que de courir après de simples « likes » (*vanity metrics*).',
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch4_p4_q6',
              type: 'mcq',
              prompt: 'Une PME vend un logiciel de gestion RH destiné exclusivement aux Directeurs des Ressources Humaines (B2B). Quelle plateforme sociale doit-elle privilégier en priorité pour sa prospection de contenu ?',
              options: [
                'LinkedIn, réseau professionnel orienté décideurs B2B',
                'Une plateforme de jeux vidéo pour enfants',
                'Uniquement des affiches dans les écoles primaires',
                'Aucun canal digital n’est utile en B2B',
              ],
              correctAnswerIndex: 0,
              explanation:
                'LinkedIn concentre les décideurs professionnels (DRH, DAF, dirigeants) et permet un ciblage précis par fonction, secteur et taille d’entreprise.',
            },
          },
        ],
      }),
    ],
  },
];
