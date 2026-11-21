import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: [],
});

// ============================================================================
// ASSURANCE — ENTD LICENCE 1 (MASTERCLASS)
// 4 chapitres • 13 mini-leçons • 80 étapes • 8 schémas graphiques
// ============================================================================

export const ASSURANCE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : FONDEMENTS ÉCONOMIQUES DE L'ASSURANCE ET RISQUES ASSURABLES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch1',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Assurance',
    title: 'Chapitre 1 — Fondements économiques de l’assurance et risques assurables',
    summary:
      'Contrat aléatoire, inversion du cycle de production, parties prenantes (souscripteur, assuré, bénéficiaire, assureur), fonctions économiques, taux de pénétration en Côte d’Ivoire (2 %), critères du risque assurable, anti-sélection et aléa moral.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_assurance_ch1_p1',
        order: 1,
        title: 'Contrat d’assurance, parties prenantes, rôles et fonctions économiques',
        summary:
          'Définition du contrat aléatoire, distinction souscripteur/assuré/bénéficiaire/assureur, 4 rôles majeurs et 3 fonctions (prévoyance, crédit, épargne).',
        conceptExplanation:
          'L’assurance est un contrat aléatoire par lequel une partie s’engage, moyennant le paiement régulier d’une **prime** (société anonyme) ou **cotisation** (mutuelle), à verser une prestation en argent ou en nature en cas de réalisation d’un événement incertain appelé **sinistre**.\n\n' +
          '1. **Inversion du cycle de production** : contrairement à une entreprise industrielle qui connaît ses coûts avant de fixer son prix de vente, l’assureur encaisse la prime **avant** de connaître le coût réel des sinistres futurs.\n\n' +
          '2. **Les 4 parties au contrat** : le **souscripteur** (ou preneur, qui signe et paie la prime), l’**assuré** (personne ou bien exposé au risque), le **bénéficiaire** (qui reçoit l’indemnité ou le capital en cas de sinistre) et l’**assureur** (compagnie qui garantit le risque).\n\n' +
          '3. **Rôles et fonctions économiques** : l’assurance remplit 4 rôles (sécurisation, stabilité sociale, facilitation de la prise de risque entrepreneuriale, mobilisation de capitaux longs) et 3 fonctions clés : **prévoyance sociale**, **outil de crédit** (garantie exigée par les banques) et **dispositif d’épargne** (assurance vie).',
        formulas: [
          {
            name: 'Logique économique du transfert de risque',
            formula: '\\text{Prime certaine (faible)} \\longrightarrow \\text{Transfert} \\longrightarrow \\text{Couverture d’un sinistre incertain (coûteux)}',
            note: 'Cycle inversé : encaissement préalable de la prime puis règlement ultérieur des sinistres.',
          },
        ],
        keyRule:
          'Distingue rigoureusement le **souscripteur** (paie la prime), l’**assuré** (porte le risque) et le **bénéficiaire** (reçoit la prestation) : ces trois qualités peuvent être réunies sur une même personne ou distinctes.',
        workedExample: {
          title: 'Identifier les acteurs et fonctions d’une assurance emprunteur',
          statement:
            'Une entreprise souscrit une assurance décès-invalidité sur la tête de son dirigeant afin de garantir le remboursement d’un prêt bancaire de 50 millions FCFA auprès de la banque prêteuse. Identifiez les 4 acteurs et la fonction économique illustrée.',
          methodSteps: [
            'Souscripteur (preneur) : l’entreprise, qui signe le contrat et paie les primes.',
            'Assuré : le dirigeant, car sa santé et sa vie constituent l’objet du risque garanti.',
            'Bénéficiaire : la banque prêteuse, qui percevra le capital restant dû en cas de décès.',
            'Assureur : la compagnie d’assurance qui porte le risque.',
            'Fonction économique : **outil de crédit**, car cette garantie sécurise la banque et rend l’octroi du prêt possible.',
          ],
          conclusion:
            'Cet exemple illustre la séparation possible entre souscripteur, assuré et bénéficiaire, ainsi que le rôle de l’assurance comme levier de crédit.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Contrat aléatoire et inversion du cycle de production',
            paragraphText:
              'L’assurance repose sur une promesse financière conditionnée par la survenance d’un événement futur incertain.\n' +
              '• **Définition** : contrat par lequel l’assureur s’engage, moyennant une prime ou cotisation, à indemniser l’assuré (ou un tiers/bénéficiaire) si un risque incertain (accident, maladie, incendie, décès) se réalise.\n' +
              '• **Contrat aléatoire** : l’exécution de la prestation de l’assureur dépend d’un événement incertain ; aucune des deux parties ne connaît au départ le gain ou la perte nette finale.\n' +
              '• **Inversion du cycle de production** : l’assureur fixe son tarif et encaisse la prime *avant* de connaître le coût définitif des sinistres de l’exercice.\n' +
              'Exemple : un automobiliste paie sa prime annuelle le 1er janvier, alors que son accident éventuel peut survenir en novembre.',
            keyRule:
              'L’**inversion du cycle de production** oblige l’assureur à évaluer statistiquement ses risques à l’avance et à constituer des provisions techniques.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Que signifie l’expression « inversion du cycle de production » dans le secteur de l’assurance ?',
              options: [
                'L’assureur indemnise d’abord tous les clients avant de fixer le tarif de la prime',
                'L’assureur encaisse les primes avant de connaître le coût réel des sinistres qu’il devra indemniser',
                'Les assurés fabriquent eux-mêmes leurs contrats sans passer par un assureur',
                'Les compagnies d’assurance ne payent les sinistres qu’après 50 ans',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Contrairement à un fabricant qui connaît son coût de revient avant de vendre, l’assureur vend sa couverture et encaisse la prime avant de connaître la charge finale des sinistres.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Acteurs du contrat',
            stepTheme: 'blue',
            stepTitle: 'Souscripteur, assuré, bénéficiaire et assureur',
            paragraphText:
              'Un même contrat d’assurance met en jeu quatre rôles juridiques distincts qu’il faut identifier avec précision.\n' +
              '• **L’assureur** : entreprise agréée (société anonyme ou mutuelle) qui collecte les primes et verse les prestations.\n' +
              '• **Le souscripteur (ou preneur d’assurance)** : personne physique ou morale qui conclut le contrat et s’engage à payer la prime.\n' +
              '• **L’assuré** : personne dont la vie, la santé, les biens ou la responsabilité sont exposés au risque garanti.\n' +
              '• **Le bénéficiaire** : personne qui reçoit l’indemnité ou le capital en cas de sinistre (par ex. les enfants en assurance décès, ou la victime tiers en responsabilité civile).\n' +
              'Exemple : un père (souscripteur et assuré) signe une temporaire décès désignant sa fille étudiante comme bénéficiaire.',
            konanTip:
              'Pose toujours 3 questions simples sur un énoncé : Qui paie ? (**Souscripteur**) ; Qui subit le risque ? (**Assuré**) ; Qui touche l’argent ? (**Bénéficiaire**).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Une mère souscrit et paie un contrat d’assurance décès sur sa propre vie afin qu’un capital soit versé à son fils en cas de décès. Quel est le rôle exact du fils ?',
              options: [
                'Souscripteur',
                'Assureur',
                'Bénéficiaire',
                'Réassureur',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La mère est à la fois souscriptrice (elle signe et paie) et assurée (le risque porte sur sa vie) ; son fils qui recevra le capital est le bénéficiaire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Rôles majeurs',
            stepTheme: 'violet',
            stepTitle: 'Les quatre rôles socio-économiques de l’assurance',
            paragraphText:
              'Au-delà de la protection individuelle, l’assurance constitue un stabilisateur fondamental de la vie économique et sociale.\n' +
              '• **Sécurisation** : protège le patrimoine des ménages et des entreprises contre les chocs brutaux (incendie, vol, maladie).\n' +
              '• **Stabilité sociale** : évite qu’un accident ou un décès prématuré ne fasse basculer toute une famille dans la pauvreté.\n' +
              '• **Facilitation de la prise de risque** : un entrepreneur ose lancer une usine, exporter des marchandises ou innover parce que ses risques majeurs sont couverts.\n' +
              '• **Mobilisation de ressources** : les primes accumulées (notamment en assurance vie) forment une épargne longue injectée dans l’économie.\n' +
              'Exemple : un transporteur investit dans trois camions neufs parce qu’une assurance marchandises et dommages le protège en cas d’accident sur l’autoroute du Nord.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Pourquoi dit-on que l’assurance facilite la prise de risque et l’entrepreneuriat ?',
              options: [
                'Parce qu’elle interdit aux entreprises de déposer des brevets',
                'Parce qu’en transférant les risques catastrophiques (incendie, transport, responsabilité), l’entrepreneur ose investir et innover',
                'Parce que l’assureur garantit automatiquement que les ventes vont doubler',
                'Parce qu’elle dispense les entreprises de tenir une comptabilité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans couverture contre les sinistres majeurs (incendie d’usine, perte de cargaison), de nombreux entrepreneurs renonceraient à investir par aversion au risque.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: '3 fonctions',
            stepTheme: 'violet',
            stepTitle: 'Prévoyance sociale, outil de crédit et dispositif d’épargne',
            paragraphText:
              'L’analyse économique regroupe l’utilité des produits d’assurance autour de trois grandes fonctions complémentaires.\n' +
              '• **Mécanisme de prévoyance sociale** : complète la protection publique en couvrant maladie, invalidité, obsèques, retraite et protection familiale.\n' +
              '• **Outil de crédit** : sécurise les créanciers (banques) via l’assurance emprunteur (décès/invalidité) ou l’assurance-crédit sur les factures commerciales, débloquant ainsi l’accès aux prêts.\n' +
              '• **Dispositif d’épargne** : l’assurance vie capitalisation permet de constituer progressivement un capital rémunéré à moyen/long terme.\n' +
              'Exemple : pour accorder un prêt immobilier sur 15 ans, une banque ivoirienne exige systématiquement une assurance temporaire décès couvrant le capital emprunté.',
            keyRule:
              'Retiens les 3 fonctions : **Prévoyance sociale** (protection), **Outil de crédit** (garantie bancaire) et **Dispositif d’épargne** (capitalisation).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Laquelle de ces situations illustre directement la fonction de l’assurance comme « outil de crédit » ?',
              options: [
                'Un particulier ouvre un contrat d’épargne retraite sur 20 ans',
                'Une banque accepte d’accorder un prêt immobilier de 25 millions FCFA grâce à la souscription d’une assurance décès emprunteur',
                'Un automobiliste paie un constat amiable après un accrochage',
                'Un commerçant place sa trésorerie dans un coffre-fort physique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance emprunteur rassure la banque sur le remboursement en cas de décès ou d’invalidité de l’emprunteur, facilitant l’accès au crédit.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Macroéconomie',
            stepTheme: 'violet',
            stepTitle: 'Contribution au développement financier et aux infrastructures UEMOA',
            paragraphText:
              'Dans les pays en développement et en zone UEMOA, les compagnies d’assurance sont des investisseurs institutionnels de premier plan.\n' +
              '• **Transformation de l’épargne longue** : contrairement aux banques commerciales financées surtout par des dépôts à court terme, les assureurs vie disposent de ressources stables à 10–25 ans.\n' +
              '• **Financement du marché financier et des États** : ces capitaux achètent des obligations d’État, des titres de la BOAD et des actions à la BRVM pour financer routes, énergie et télécoms.\n' +
              '• **Formalisation des entreprises** : l’exigence d’assurances (RC professionnelle, accidents du travail, flotte) accompagne l’intégration des PME dans l’économie formelle.\n' +
              'Exemple : les provisions techniques placées par les assureurs ivoiriens constituent un acheteur majeur des emprunts obligataires publics de l’UEMOA.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi les compagnies d’assurance (notamment en assurance vie) jouent-elles un rôle clé dans le financement des infrastructures à long terme ?',
              options: [
                'Parce qu’elles impriment directement des billets de banque',
                'Parce qu’elles mobilisent une épargne contractuelle de long terme qu’elles placent en obligations d’État et titres financiers',
                'Parce qu’elles prêtent uniquement à 24 heures sur le marché interbancaire',
                'Parce qu’elles ne paient jamais aucun sinistre',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les engagements longs des assureurs (notamment en vie/retraite) leur permettent d’investir durablement sur les marchés obligataires finançant les infrastructures.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Entretien client',
            stepTheme: 'slate',
            stepTitle: 'Cas pratique : expliquer l’assurance vie à un client novice',
            paragraphText:
              'Un artisan vous demande : « Je n’y connais rien. À quoi me sert concrètement une assurance vie ? » Voici comment structurer la réponse pédagogique.\n' +
              '• **Image simple** : c’est une « double tirelire intelligente » qui protège votre famille dès aujourd’hui tout en faisant grandir votre épargne pour demain.\n' +
              '• **Volet Prévoyance (Protection)** : s’il vous arrive un décès prématuré, vos enfants ou votre conjoint reçoivent un capital immédiat pour financer études et logement.\n' +
              '• **Volet Épargne (Projet)** : si tout va bien, votre argent travaille grâce aux intérêts garantis et à la participation aux bénéfices pour financer votre retraite ou un projet futur.\n' +
              '• **Transmission** : le capital est versé directement aux bénéficiaires désignés avec un cadre fiscal avantageux.',
            konanTip:
              'Pour vulgariser à un client novice, oppose toujours les deux usages : **« Si je pars tôt → protéger ma famille ; si je vis longtemps → préparer mes projets/ma retraite. »**',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle formulation explique le plus fidèlement et simplement l’assurance vie à un client novice ?',
              options: [
                'C’est uniquement une taxe obligatoire sur les voitures',
                'C’est un contrat à double vocation : constituer et faire fructifier une épargne à long terme ou garantir la transmission d’un capital à vos proches en cas de décès',
                'C’est un compte courant pour payer le loyer chaque semaine',
                'C’est une loterie où l’on perd tout ce qu’on verse même en contrat d’épargne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance vie combine constitution/valorisation d’un capital à long terme et protection financière des bénéficiaires désignés.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_assurance_ch1_p2',
        order: 2,
        title: 'Marché de l’assurance en Côte d’Ivoire (2 % de pénétration) et leviers de croissance',
        summary:
          'Analyse du taux de pénétration de 2 % en Côte d’Ivoire (OHCA 2024), conséquences économiques et sociaux, et trois leviers de développement (éducation, micro-assurance, digital).',
        conceptExplanation:
          'En Afrique subsaharienne francophone, le potentiel de croissance du secteur assurantiel reste considérable face à une couverture encore très faible.\n\n' +
          '1. **Constat chiffré (OHCA, 2024)** : seulement **2 % de la population** est assurée en Côte d’Ivoire. Sur une population de **29 millions d’habitants**, cela représente environ $29\\,000\\,000 \\times 2\\,\\% = 580\\,000$ personnes couvertes, laissant **98 %** ($28{,}42\\text{ millions}$) sans protection assurantielle formelle.\n\n' +
          '2. **Causes structurelles** : prédominance du secteur informel aux revenus irréguliers, faible pouvoir d’achat, déficit d’éducation financière, méfiance liée aux lenteurs passées d’indemnisation et offres traditionnelles jugées trop complexes ou chères.\n\n' +
          '3. **Conséquences économiques** : forte vulnérabilité des ménages face aux chocs de santé ou climatiques, fragilité des PME après sinistre, et faible volume d’épargne longue disponible pour financer l’économie.\n\n' +
          '4. **Leviers de croissance** : (1) éducation financière et transparence/rapidité des indemnisations ; (2) micro-assurance à primes fractionnées adaptée à l’informel ; (3) distribution digitale via smartphones et **Mobile Money**.',
        formulas: [
          {
            name: 'Population couverte en Côte d’Ivoire (OHCA, 2024)',
            formula: '\\text{Personnes assurées} = 2\\,\\% \\times 29\\,000\\,000 = 580\\,000\\text{ personnes}',
            note: '98 % de la population (28,42 millions) reste encore à couvrir.',
          },
        ],
        keyRule:
          'Chiffre repère indispensable : **2 %** de la population assurée en Côte d’Ivoire (OHCA, 2024), soit **580 000 personnes** sur 29 millions d’habitants.',
        workedExample: {
          title: 'Évaluer l’impact d’un passage de 2 % à 10 % de couverture en Côte d’Ivoire',
          statement:
            'Sur 29 millions d’habitants en Côte d’Ivoire, seuls 2 % sont actuellement assurés. Calculez le nombre actuel d’assurés, le gain de personnes protégées si le taux atteint 10 %, et citez trois leviers pour y parvenir.',
          methodSteps: [
            'Assurés actuels (2 %) = 29 000 000 × 0,02 = 580 000 personnes.',
            'Cible à 10 % = 29 000 000 × 0,10 = 2 900 000 personnes, soit +2 320 000 nouveaux assurés.',
            'Trois leviers majeurs : (1) pédagogie et indemnisation rapide pour restaurer la confiance ; (2) micro-assurance santé/agricole à cotisation hebdomadaire ou mensuelle modique ; (3) souscription et paiement simplifiés via Mobile Money.',
          ],
          conclusion:
            'Passer de 2 % à 10 % multiplierait par 5 le nombre de personnes protégées (+2,32 millions) et démultiplierait l’épargne longue nationale.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Chiffre clé CI',
            stepTheme: 'blue',
            stepTitle: 'Taux de pénétration de 2 % en Côte d’Ivoire : calcul et réalité démographique',
            paragraphText:
              'La mesure du développement assurantiel d’un pays passe par la part de la population couverte (ou le poids des primes dans le PIB).\n' +
              '• **Donnée de référence (OHCA, 2024)** : seuls **2 %** de la population ivoirienne disposent d’une couverture d’assurance.\n' +
              '• **Traduction démographique** : sur **29 millions d’habitants**, cela correspond à $29\\,000\\,000 \\times 0{,}02 = 580\\,000\\text{ personnes}$ assurées.\n' +
              '• **Écart de protection** : plus de 28,4 millions de personnes restent exposées sans filet assurantiel formel face à la maladie, aux accidents ou aux aléas climatiques.\n' +
              'Exemple : même l’assurance automobile obligatoire laisse de nombreux deux-roues et biens informels non couverts hors des grands axes.',
            formula: {
              name: 'Effectif assuré (base 29 millions)',
              formula: 'N_{\\text{assurés}} = 29\\,000\\,000 \\times 2\\,\\% = 580\\,000',
              note: 'Source de référence : OHCA, 2024.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Si la population de la Côte d’Ivoire est estimée à 29 millions d’habitants et que 2 % seulement sont assurés (OHCA, 2024), combien de personnes sont couvertes ?',
              options: [
                '58 000 personnes',
                '580 000 personnes',
                '2 900 000 personnes',
                '5 800 000 personnes',
              ],
              correctAnswerIndex: 1,
              explanation:
                '29 000 000 × (2 / 100) = 580 000 personnes assurées.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Freins structurels',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi la pénétration assurantielle reste-t-elle faible ?',
            paragraphText:
              'Comprendre la faiblesse du taux de 2 % exige d’analyser simultanément les contraintes économiques et psychologiques du marché.\n' +
              '• **Poids du secteur informel** : revenus quotidiens fluctuants peu compatibles avec des primes annuelles élevées versées en une fois.\n' +
              '• **Déficit de culture assurantielle et de confiance** : perception de l’assurance comme une « dépense à fonds perdus » s’il n’y a pas de sinistre, aggravée par la lenteur passée de certains règlements.\n' +
              '• **Complexité des contrats** : exclusions peu lisibles en petits caractères décourageant les ménages modestes.\n' +
              'Exemple : un artisan gagne 5 000 FCFA par jour ; il ne peut pas payer 120 000 FCFA d’un coup en janvier, mais peut payer 500 FCFA par semaine via son téléphone.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quel facteur freine le plus directement l’adoption des assurances classiques par les travailleurs du secteur informel ?',
              options: [
                'Des primes annuelles élevées exigées en un seul versement et un manque de confiance ou de lisibilité des contrats',
                'L’interdiction légale faite aux commerçants de s’assurer',
                'Un excès de remboursements trop rapides',
                'L’absence totale de téléphones mobiles dans le pays',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les revenus irréguliers du secteur informel s’accommodent mal de primes annuelles forfaitaires lourdes et de démarches papier complexes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Impacts macro',
            stepTheme: 'violet',
            stepTitle: 'Conséquences économiques d’une sous-assurance généralisée',
            paragraphText:
              'Un taux de couverture limité à 2 % fragilise autant les familles individuelles que la croissance nationale.\n' +
              '• **Vulnérabilité des ménages** : en cas d’hospitalisation grave ou de décès du soutien de famille, le ménage doit vendre ses biens ou s’endetter dans l’urgence.\n' +
              '• **Fragilité des TPE/PME** : un incendie de boutique ou une perte de récolte non assurés entraîne la faillite immédiate de l’activité.\n' +
              '• **Faible mobilisation de l’épargne longue** : l’économie dispose de moins de capitaux institutionnels locaux pour financer les infrastructures et les entreprises.\n' +
              'Exemple : après l’incendie d’un marché urbain non assuré, des centaines de commerçants perdent l’intégralité de leur capital de travail en une nuit.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Couverture assurantielle en Côte d’Ivoire : situation actuelle vs objectifs',
              caption: 'Nombre de personnes couvertes (en millions) sur 29 M d’habitants selon différents taux de pénétration.',
              barChart: {
                yLabel: 'Population couverte (Millions)',
                unit: 'M',
                bars: [
                  { label: 'Actuel (2 %)', value: 0.58, color: 'orange', annotation: '0,58 M' },
                  { label: 'Cible court terme (5 %)', value: 1.45, color: 'blue', annotation: '1,45 M' },
                  { label: 'Cible moyen terme (10 %)', value: 2.9, color: 'green', annotation: '2,90 M' },
                  { label: 'Non couverts actuels (98 %)', value: 28.42, color: 'slate', annotation: '28,42 M' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle conséquence macroéconomique directe résulte d’un taux de pénétration de l’assurance bloqué à 2 % ?',
              options: [
                'Une surabondance d’épargne longue disponible pour les autoroutes',
                'Une forte vulnérabilité des ménages/PME aux chocs et un déficit de capitaux longs mobilisables pour l’investissement',
                'La disparition totale des risques d’incendie et de maladie',
                'Une hausse automatique du taux directeur de la BCEAO',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La sous-assurance expose les ménages et PME à la ruine lors de sinistres et prive le marché financier de ressources longues collectées par les assureurs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Leviers de croissance',
            stepTheme: 'green',
            stepTitle: 'Trois leviers pour développer la culture assurantielle en zone UEMOA',
            paragraphText:
              'Pour dépasser le seuil des 2 %, les assureurs et régulateurs actionnent trois leviers complémentaires.\n' +
              '• **Levier 1 — Éducation financière & confiance** : vulgariser les garanties en langues locales, simplifier les contrats et **accélérer le paiement des sinistres** (la preuve par l’exemple reste la meilleure publicité).\n' +
              '• **Levier 2 — Micro-assurance adaptée** : concevoir des produits simples (santé, décès, agricole) à primes hebdomadaires ou mensuelles de quelques centaines de FCFA.\n' +
              '• **Levier 3 — Distribution digitale & Mobile Money** : souscription par USSD/application sans papier, prélèvement fractionné sur portefeuille mobile et indemnisation instantanée sur téléphone.\n' +
              'Exemple : un produit couvrant les frais d’hospitalisation à 1 000 FCFA/mois prélevé via Mobile Money rend l’assurance accessible à des millions d’actifs.',
            keyRule:
              'Les 3 leviers de croissance en Afrique : **Confiance & pédagogie** + **Micro-assurance fractionnée** + **Distribution Mobile Money**.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quel trio de leviers permet le plus efficacement aux assureurs de relever le taux de pénétration en Côte d’Ivoire ?',
              options: [
                'Multiplier par trois les primes et fermer les canaux mobiles',
                'Éducation financière & rapidité d’indemnisation, micro-assurance abordable, et distribution digitale via Mobile Money',
                'Exiger 10 pages de justificatifs notariés pour chaque contrat',
                'Réserver l’assurance aux seules multinationales étrangères',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Adapter le prix/fractionnement (micro-assurance), simplifier l’accès (Mobile Money) et prouver la fiabilité des indemnisations lèvent les trois freins principaux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Formalisation',
            stepTheme: 'violet',
            stepTitle: 'Assurance, inclusion financière et formalisation des PME',
            paragraphText:
              'L’extension de l’assurance accompagne directement la structuration du tissu productif en zone UEMOA.\n' +
              '• **Lien banque-assurance** : une PME assurée contre l’incendie, le bris de machine et le décès du dirigeant obtient plus facilement un crédit bancaire pour grandir.\n' +
              '• **Protection sociale inclusive** : les travailleurs indépendants accèdent progressivement à une couverture santé et retraite par capitalisation.\n' +
              '• **Résilience agricole** : la sécurisation des récoltes encourage les banques et coopératives à financer engrais et semences améliorées.\n' +
              'Exemple : un groupement de producteurs d’anacarde assuré contre les feux de brousse peut nantir sa récolte auprès d’une banque locale.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Comment l’assurance contribue-t-elle à la formalisation et à la croissance des PME en zone UEMOA ?',
              options: [
                'En remplaçant tous les impôts de la PME',
                'En protégeant leur capital contre les sinistres et en facilitant l’accès au crédit bancaire grâce aux garanties exigées par les prêteurs',
                'En interdisant aux PME d’embaucher des salariés',
                'En obligeant les PME à rester dans le secteur informel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En sécurisant les actifs et en apportant les garanties exigées par les banques, l’assurance renforce la pérennité et la bancabilité des PME.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Simulation chiffrée',
            stepTheme: 'slate',
            stepTitle: 'Cas pratique : projeter la croissance d’un portefeuille via le Mobile Money',
            paragraphText:
              'Une compagnie lance une offre santé mobile à 1 500 FCFA/mois en visant 2 % des personnes actuellement non assurées en Côte d’Ivoire.\n' +
              '• **Population non assurée** : $29\\,000\\,000 - 580\\,000 = 28\\,420\\,000\\text{ habitants}$.\n' +
              '• **Nouveaux clients captés (2 % des non-assurés)** : $28\\,420\\,000 \\times 0{,}02 = 568\\,400\\text{ personnes}$.\n' +
              '• **Collecte annuelle brute** : $568\\,400 \\times 1\\,500 \\times 12 = 10\\,231\\,200\\,000\\text{ FCFA}$ (plus de 10,2 milliards FCFA de primes supplémentaires par an).\n' +
              'Exemple : ce calcul montre la puissance économique du modèle « petits montants × grands volumes » grâce à l’inclusion digitale.',
            konanTip:
              'En micro-assurance digitale, le volume compense la faible prime unitaire — à condition que les frais de gestion par contrat soient quasi nuls grâce à l’automatisation mobile.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Si une offre digitale à 1 000 FCFA/mois convainc 500 000 nouveaux assurés issus du secteur informel pendant un an complet, quel volume annuel total de primes génère-t-elle ?',
              options: [
                '500 millions FCFA',
                '1,5 milliard FCFA',
                '6 milliards FCFA',
                '12 milliards FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                '500 000 assurés × 1 000 FCFA/mois × 12 mois = 6 000 000 000 FCFA (6 milliards FCFA).',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_assurance_ch1_p3',
        order: 3,
        title: 'Critères du risque assurable et asymétries d’information (anti-sélection, aléa moral)',
        summary:
          'Les 3 critères techniques du risque assurable (incertitude, aléa, indépendance), risques exclus, anti-sélection ex ante et aléa moral ex post.',
        conceptExplanation:
          'Tout danger ou perte financière ne peut pas être couvert par un contrat d’assurance. Pour qu’un risque soit techniquement **assurable**, il doit respecter trois critères cumulatifs :\n\n' +
          '1. **Incertitude** : la survenance de l’événement doit être incertaine (il peut se produire ou non, ou sa date doit être inconnue dans le cas du décès).\n' +
          '2. **Aléa** : la date, la fréquence ou l’intensité doivent être **indépendantes de la volonté de l’assuré** (une faute intentionnelle ou un défaut de gestion interne ne sont pas assurables).\n' +
          '3. **Indépendance (mutualisabilité)** : les sinistres ne doivent pas frapper simultanément l’ensemble des assurés, sauf à recourir à la réassurance ou à des dispositifs paramétriques dédiés (risques systémiques).\n\n' +
          'Par ailleurs, l’assureur affronte deux asymétries d’information :\n' +
          '• **Anti-sélection (sélection adverse, *ex ante*)** : si le tarif est unique, les personnes les plus risquées souscrivent massivement tandis que les faibles risques fuient. Réponse : questionnaire médical/risque, segmentation tarifaire.\n' +
          '• **Aléa moral (*moral hazard*, *ex post*)** : une fois assuré, le client relâche sa vigilance. Réponse : **franchise**, plafond de garantie et système **bonus-malus**.',
        formulas: [
          {
            name: 'Triple condition d’assurabilité du risque',
            formula: '\\text{Risque assurable} \\iff \\text{Incertitude} + \\text{Aléa (hors volonté)} + \\text{Indépendance relative}',
            note: 'Les fautes intentionnelles et l’incompétence managériale sont exclues.',
          },
        ],
        keyRule:
          'Un risque dépendant de la volonté ou de la compétence de l’assuré (baisse de motivation du personnel, perte de clients par mauvaise gestion) n’est **jamais assurable**.',
        workedExample: {
          title: 'Tester l’assurabilité de quatre situations professionnelles',
          statement:
            'Indiquez lesquels de ces 4 événements sont assurables et justifiez : (1) baisse de motivation des employés ; (2) accident de la circulation ; (3) sécheresse agricole ; (4) perte de clients due à l’incompétence du commerçant.',
          methodSteps: [
            '(1) Baisse de motivation des employés : **Non assurable** — dépend de facteurs managériaux internes, pas d’un aléa objectif indépendant de l’entreprise.',
            '(2) Accident de la circulation : **Assurable** — événement futur, incertain, indépendant de la volonté de l’assuré et mutualisable.',
            '(3) Sécheresse agricole : **Assurable via des mécanismes adaptés** (assurance agricole / indicielle paramétrique soutenue par la réassurance, malgré la corrélation régionale du climat).',
            '(4) Perte de clients par incompétence : **Non assurable** — relève du risque commercial courant et de la faute de gestion, sans aléa externe.',
          ],
          conclusion:
            'Seuls l’accident de circulation (assurance auto classique) et la sécheresse (assurance agricole paramétrique) sont assurables.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Critères techniques',
            stepTheme: 'blue',
            stepTitle: 'Les trois critères fondamentaux du risque assurable',
            paragraphText:
              'Un assureur ne peut tarifer un contrat que si l’événement redouté obéit à des lois probabilistes et échappe à la manipulation de l’assuré.\n' +
              '• **1. Incertitude** : le sinistre n’est pas certain au moment de la signature (on ne peut pas assurer une maison déjà en flammes).\n' +
              '• **2. Aléa (extériorité à la volonté)** : la survenance, la date ou l’ampleur échappent au contrôle volontaire de l’assuré.\n' +
              '• **3. Indépendance des risques** : les sinistres ne doivent pas toucher tous les assurés le même jour (sinon la mutualisation échoue, comme lors d’une guerre générale ou d’un krach systémique non réassuré).\n' +
              'Exemple : l’incendie accidentel d’un entrepôt remplit les trois conditions ; le fait d’y mettre volontairement le feu est exclu pour défaut d’aléa.',
            keyRule:
              'Les 3 critères cumulatifs du risque assurable sont : **Incertitude**, **Aléa** (indépendant de la volonté) et **Indépendance** (mutualisable).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quel ensemble rassemble exactement les trois caractéristiques techniques d’un risque assurable ?',
              options: [
                'Certitude absolue, rentabilité garantie et contrôle par l’assuré',
                'Incertitude, aléa (indépendance vis-à-vis de la volonté de l’assuré) et indépendance relative des sinistres',
                'Gratuité, absence de prime et simultanéité pour tous les clients',
                'Faute intentionnelle, fraude fiscale et incompétence commerciale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance exige un événement futur incertain, aléatoire (hors volonté de l’assuré) et suffisamment indépendant pour permettre la mutualisation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Exclusions',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi l’incompétence ou le manque de motivation ne sont pas assurables',
            paragraphText:
              'Certains entrepreneurs souhaiteraient transférer à un assureur les pertes commerciales liées à une mauvaise gestion : c’est techniquement et économiquement impossible.\n' +
              '• **Absence d’aléa** : la perte de clients due à un mauvais accueil ou à des prix non compétitifs découle des décisions de l’entrepreneur.\n' +
              '• **Aléa moral extrême** : si un assureur garantissait le chiffre d’affaires contre l’incompétence ou la démotivation des salariés, l’entreprise n’aurait plus aucune incitation à bien gérer.\n' +
              '• **Frontière avec le risque d’entreprise** : le risque commercial ordinaire appartient à l’entrepreneur (rémunéré par le profit) ; l’assureur ne couvre que les accidents externes (incendie, vol, bris de machine).\n' +
              'Exemple : un restaurateur ne peut pas s’assurer contre une baisse de clientèle due à une mauvaise cuisine, mais peut s’assurer contre la fermeture temporaire causée par un incendie accidentel.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Parmi les situations suivantes, laquelle ne peut PAS faire l’objet d’un contrat d’assurance ?',
              options: [
                'Un accident de la circulation causé involontairement',
                'L’incendie accidentel d’un magasin',
                'La perte de clients d’un commerçant due à sa propre incompétence de gestion',
                'Le décès prématuré d’un chef de famille',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’incompétence ou la mauvaise gestion relève du comportement interne de l’assuré et non d’un aléa externe indépendant : c’est un risque entrepreneurial non assurable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Risques climatiques',
            stepTheme: 'violet',
            stepTitle: 'Le cas particulier des risques corrélés (sécheresse agricole)',
            paragraphText:
              'Un aléa climatique comme la sécheresse pose un défi technique car il touche simultanément des milliers d’agriculteurs d’une même région.\n' +
              '• **Défi d’indépendance** : les sinistres ne sont pas indépendants localement (risque covariant ou systémique régional).\n' +
              '• **Pourquoi reste-t-elle assurable ?** : la sécheresse est incertaine et totalement indépendante de la volonté du planteur (aléa naturel pur).\n' +
              '• **Solution technique** : l’assureur utilise une **tarification indicielle (paramétrique)** adossée à la **réassurance internationale** (ex. CICA-RE) pour disperser le risque à l’échelle multi-pays.\n' +
              'Exemple : des planteurs de cacao ivoiriens sont assurés contre un déficit pluviométrique critique grâce à des polices agricoles réassurées.',
            konanTip:
              'Attention en QCM : une **sécheresse agricole** EST assurable (via l’assurance indicielle/agricole + réassurance), alors qu’une **baisse de motivation du personnel** NE L’EST PAS !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Pourquoi la sécheresse agricole constitue-t-elle un risque techniquement assurable (moyennant réassurance ou modèle paramétrique), contrairement à une baisse de motivation des employés ?',
              options: [
                'Parce que la sécheresse est provoquée volontairement par l’agriculteur',
                'Parce que la sécheresse est un événement aléatoire naturel, incertain et indépendant de la volonté de l’assuré',
                'Parce que les assureurs peuvent empêcher la sécheresse avec des drones',
                'Parce que la sécheresse ne touche jamais qu’une seule plante',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La sécheresse obéit au critère d’aléa externe indépendant de la volonté de l’assuré ; la corrélation géographique est gérée par la réassurance et l’assurance indicielle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Anti-sélection',
            stepTheme: 'orange',
            stepTitle: 'L’anti-sélection (sélection adverse) et la segmentation tarifaire',
            paragraphText:
              'Avant la souscription (*ex ante*), le candidat à l’assurance connaît souvent mieux son état de santé ou sa conduite que la compagnie.\n' +
              '• **Mécanisme d’anti-sélection** : si l’assureur fixe une prime moyenne unique pour tous, les personnes à faible risque jugent le prix trop cher et n’adhèrent pas, tandis que les personnes à très haut risque souscrivent massivement.\n' +
              '• **Spirale destructrice** : la sinistralité réelle dépasse les prévisions, obligeant l’assureur à monter encore la prime et à chasser le reste des bons risques.\n' +
              '• **Parades techniques** : questionnaires de santé/sinistralité (obligation de déclaration sincère), segmentation en classes de risques homogènes et délais de carence.\n' +
              'Exemple : en assurance maladie, imposer un délai de carence de 3 mois empêche un patient déjà malade de souscrire uniquement la veille d’une opération coûteuse.',
            keyRule:
              'Pour combattre l’**anti-sélection (*ex ante*)**, l’assureur segmente son portefeuille par profils de risque et applique questionnaires médicaux et délais de carence.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'En assurance santé, quel risque pousse une compagnie à instaurer un questionnaire médical et un délai de carence à la souscription ?',
              options: [
                'L’effet multiplicateur de crédit',
                'L’anti-sélection (les personnes se sachant malades souscrivent en priorité si aucun tri n’est fait)',
                'La déflation monétaire',
                'Le risque de change sur le franc CFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le questionnaire médical et le délai de carence préviennent l’anti-sélection, c’est-à-dire l’entrée massive de risques déjà avérés ou très élevés au tarif moyen.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Aléa moral',
            stepTheme: 'orange',
            stepTitle: 'L’aléa moral en assurance et ses garde-fous (franchise, bonus-malus)',
            paragraphText:
              'Une fois le contrat signé (*ex post*), la certitude d’être remboursé peut modifier le comportement de l’assuré.\n' +
              '• **Définition** : l’**aléa moral** désigne le relâchement des précautions (moins de prudence au volant, porte mal verrouillée, surconsommation de soins médicaux) parce que le coût du sinistre est supporté par l’assureur.\n' +
              '• **Outil 1 — La franchise** : part fixe ou proportionnelle du dommage restant toujours à la charge de l’assuré (ex. 100 000 FCFA), l’incitant à éviter même les petits accrochages.\n' +
              '• **Outil 2 — Ticket modérateur & Bonus-Malus** : en santé (ex. remboursement à 80 %, 20 % à charge du patient) ou en auto (réduction de prime sans sinistre, majoration après sinistre responsable).\n' +
              'Exemple : un conducteur perdant son bonus de 20 % en cas d’accident responsable adopte une conduite plus prudente.',
            konanTip:
              'Retiens la symétrie parfaite avec la banque : **Anti-sélection** = avant signature (*ex ante* → segmentation, carence) ; **Aléa moral** = après signature (*ex post* → franchise, bonus-malus).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'À quoi servent principalement la franchise et le système de bonus-malus dans un contrat d’assurance automobile ?',
              options: [
                'À encourager les assurés à provoquer davantage de petits accidents',
                'À réduire l’aléa moral en laissant une part de responsabilité financière à l’assuré pour l’inciter à la prudence',
                'À calculer le taux de réserves obligatoires de la BCEAO',
                'À remplacer la garantie Responsabilité Civile obligatoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En laissant une fraction du sinistre (franchise) ou une évolution du tarif (malus) à la charge de l’assuré, l’assureur responsabilise son comportement après souscription.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'slate',
            stepTitle: 'Audit d’assurabilité : quatre demandes soumises à un souscripteur',
            paragraphText:
              'Un souscripteur examine quatre dossiers d’entreprise en une matinée :\n' +
              '• **Dossier A** : un dirigeant veut assurer son usine contre la baisse de motivation de ses salariés → **Refus** (pas d’aléa objectif, gestion interne).\n' +
              '• **Dossier B** : un gérant de flotte veut assurer 20 camions contre les accidents de la route → **Acceptation** (risque aléatoire et mutualisable, avec franchise et bonus-malus).\n' +
              '• **Dossier C** : un commerçant veut assurer ses bénéfices contre le départ de ses clients dû à son incompétence → **Refus** (risque commercial/managérial non assurable).\n' +
              '• **Dossier D** : une coopérative de planteurs de cacao veut se couvrir contre la sécheresse → **Acceptation** via une police agricole indicielle réassurée.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Un entrepreneur demande à s’assurer contre (1) une baisse de motivation de ses employés et (2) les accidents de la circulation de ses véhicules commerciaux. Quelle décision technique prend l’assureur ?',
              options: [
                'Il accepte les deux demandes aux mêmes conditions',
                'Il refuse les deux demandes',
                'Il refuse la baisse de motivation (absence d’aléa externe, gestion interne) et accepte les accidents de circulation (risque aléatoire assurable)',
                'Il accepte la baisse de motivation et refuse les accidents de circulation',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les accidents de circulation sont incertains, aléatoires et mutualisables ; la motivation interne des salariés relève du management et n’est pas assurable.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : TECHNIQUE ACTUARIELLE — MUTUALISATION ET TARIFICATION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch2',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Assurance',
    title: 'Chapitre 2 — Technique actuarielle : mutualisation, lois statistiques et tarification',
    summary:
      'Loi des grands nombres, espérance E(S), écart-type σ et taux de dispersion TS, modélisation Binomiale et loi de Poisson, construction de la prime (Prime pure → Chargements → Prime HT → TCA → Prime TTC) et actualisation actuarielle.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p1',
        order: 1,
        title: 'Mutualisation, loi des grands nombres, espérance, écart-type et taux de sinistre',
        summary:
          'Principe de mutualisation, espérance mathématique E(S), écart-type σ pour sinistres indépendants, taux de dispersion TS = σ / E(S) et effet de taille n.',
        conceptExplanation:
          'L’assurance transforme une incertitude individuelle catastrophique en une charge collective stable et prévisible grâce à la **mutualisation**.\n\n' +
          '1. **Loi des grands nombres** : plus le nombre $n$ d’assurés indépendants exposés à un risque homogène augmente, plus la fréquence observée des sinistres converge vers la probabilité théorique $p$, réduisant la probabilité de ruine de l’assureur.\n\n' +
          '2. **Espérance mathématique ($E(X)$ ou $E(S)$)** : montant moyen que la compagnie s’attend à payer. Pour $n$ assurés indépendants exposés chacun à un sinistre de montant $C$ avec probabilité $p$ : $E(S) = n \\cdot p \\cdot C$.\n\n' +
          '3. **Écart-type ($\\sigma$)** : mesure la dispersion (volatilité) des sinistres autour de la moyenne. Pour $n$ risques binaires indépendants : $\\sigma(S) = \\sqrt{n \\cdot p(1 - p)} \\cdot C$. Plus $\\sigma$ est élevé relativement à la moyenne, plus la mutualisation est incertaine.\n\n' +
          '4. **Taux de sinistre / dispersion ($TS$)** : $TS = \\frac{\\sigma}{E(S)} \\times 100$. En technique actuarielle simplifiée, un seuil $TS < 50\\,\\%$ traduit une charge très prévisible (rentabilité maîtrisée), tandis qu’un $TS \\ge 50\\,\\%$ signale une forte volatilité des sinistres par rapport aux primes attendues.',
        formulas: [
          {
            name: 'Espérance et écart-type d’un portefeuille indépendant',
            formula: 'E(S) = n \\cdot p \\cdot C \\quad ; \\quad \\sigma(S) = \\sqrt{n \\cdot p(1 - p)} \\cdot C',
            note: 'Lorsque n croît, E(S) croît comme n tandis que σ(S) croît seulement comme √n.',
          },
          {
            name: 'Taux de dispersion / de sinistre (TS)',
            formula: 'TS = \\frac{\\sigma(S)}{E(S)} \\times 100',
            note: 'Si TS < 50 %, le risque est bien mutualisé et prévisible ; si TS ≥ 50 %, volatilité excessive.',
          },
        ],
        keyRule:
          'Grâce à la mutualisation sur un grand nombre $n$ d’assurés indépendants, le risque relatif $\\frac{\\sigma(S)}{E(S)}$ diminue proportionnellement à $\\frac{1}{\\sqrt{n}}$.',
        workedExample: {
          title: 'Analyser la mutualisation sur un portefeuille de 10 000 assurés',
          statement:
            'Une compagnie couvre n = 10 000 assurés indépendants contre un sinistre de C = 100 000 FCFA avec une probabilité annuelle p = 2 %. Calculez la perte totale espérée E(S), l’écart-type σ(S) et le taux de sinistre TS.',
          methodSteps: [
            'Perte totale espérée : E(S) = 10 000 × 0,02 × 100 000 = 200 × 100 000 = 20 000 000 FCFA.',
            'Écart-type (loi binomiale de coût C) : σ(S) = √(10 000 × 0,02 × 0,98) × 100 000 = √196 × 100 000 = 14 × 100 000 = 1 400 000 FCFA.',
            'Taux de dispersion : TS = (1 400 000 / 20 000 000) × 100 = 7 %.',
            'Interprétation : TS = 7 % est très inférieur à 50 % ; la mutualisation sur 10 000 contrats rend la charge annuelle très stable et prévisible autour de 20 millions FCFA.',
          ],
          conclusion:
            'E(S) = 20 000 000 FCFA, σ(S) = 1 400 000 FCFA et TS = 7 % (< 50 %) : excellente mutualisation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Pilier technique',
            stepTheme: 'blue',
            stepTitle: 'Principe de mutualisation et loi des grands nombres',
            paragraphText:
              'Un individu isolé ne peut supporter seul un sinistre de plusieurs millions FCFA, mais un groupe vaste partage aisément cette perte.\n' +
              '• **Mutualisation** : mise en commun de risques similaires au sein d’une communauté d’assurés (la mutualité) afin que les primes versées par tous indemnisent les quelques sinistrés.\n' +
              '• **Loi des grands nombres** : théorème probabiliste garantissant que, sur un grand échantillon d’assurés indépendants, la proportion observée de sinistres se stabilise autour de la probabilité théorique $p$.\n' +
              '• **Condition** : les risques regroupés doivent être suffisamment nombreux, homogènes et indépendants.\n' +
              'Exemple : sur 5 000 automobilistes assurés au même tarif, les cotisations de tous financent les réparations des ~150 conducteurs accidentés dans l’année.',
            keyRule:
              'Sans **loi des grands nombres**, l’assureur ferait face à des écarts financiers imprévisibles ; la mutualisation transforme l’aléa individuel en moyenne collective stable.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quel théorème mathématique justifie qu’en assurant 10 000 personnes plutôt que 10, l’assureur stabilise la charge moyenne des sinistres et réduit son risque de ruine ?',
              options: [
                'Le théorème de Pythagore',
                'La loi des grands nombres (fondement de la mutualisation)',
                'La séparation des banques de dépôts',
                'La règle proportionnelle de sous-assurance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loi des grands nombres assure la convergence de la fréquence empirique vers l’espérance mathématique lorsque la taille du portefeuille augmente.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Espérance E(S)',
            stepTheme: 'violet',
            stepTitle: 'Calculer l’espérance mathématique du coût total des sinistres',
            paragraphText:
              'L’**espérance mathématique** représente le montant moyen total que la compagnie s’attend à décaisser pour indemniser son portefeuille sur la période.\n' +
              '• **Formule générale discrète** : $E(X) = \\sum x_i \\cdot P(x_i)$.\n' +
              '• **Formule portefeuille homogène** : pour $n$ assurés ayant chacun une probabilité $p$ de subir un sinistre de coût moyen $C$, $E(S) = n \\cdot p \\cdot C$.\n' +
              '• **Utilité tarifaire** : divisée par $n$, cette espérance donne exactement la perte attendue par contrat ($p \\cdot C$), base de la prime pure.\n' +
              'Exemple : avec $n = 10\\,000$ assurés, $p = 2\\,\\%$ et $C = 100\\,000\\text{ FCFA}$, $E(S) = 10\\,000 \\times 0{,}02 \\times 100\\,000 = 20\\,000\\,000\\text{ FCFA}$.',
            formula: {
              name: 'Espérance de perte d’un portefeuille',
              formula: 'E(S) = \\sum x_i P(x_i) = n \\times p \\times C',
              note: 'Représente le budget moyen attendu de sinistres à couvrir par les primes pures.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Une compagnie couvre 5 000 automobilistes contre un sinistre de coût moyen 1 200 000 FCFA dont la probabilité annuelle est de 3 %. Quel est le coût total attendu E(S) des sinistres ?',
              options: [
                '18 000 000 FCFA',
                '60 000 000 FCFA',
                '180 000 000 FCFA',
                '360 000 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Nombre attendu de sinistres = 5 000 × 0,03 = 150 sinistres. E(S) = 150 × 1 200 000 = 180 000 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Écart-type σ',
            stepTheme: 'violet',
            stepTitle: 'Mesurer la dispersion du risque par l’écart-type (σ)',
            paragraphText:
              'Connaître la moyenne $E(S)$ ne suffit pas : l’assureur doit mesurer l’ampleur des écarts possibles autour de cette moyenne les mauvaises années.\n' +
              '• **Rôle de l’écart-type ($\\sigma$)** : quantifie l’incertitude et la volatilité de la charge de sinistres.\n' +
              '• **Formule pour $n$ sinistres indépendants de coût $C$** : la variance du nombre de sinistres vaut $n p (1-p)$, donc $\\sigma(N) = \\sqrt{n p (1-p)}$ et $\\sigma(S) = C \\sqrt{n p (1-p)}$.\n' +
              '• **Lecture** : $\\sigma$ élevé signale une mutualisation plus risquée nécessitant des fonds propres ou un chargement de sécurité plus forts.\n' +
              'Exemple : pour $n = 10\\,000$, $p = 0{,}02$, $C = 100\\,000\\text{ FCFA}$ : $\\sigma(S) = 100\\,000 \\sqrt{10\\,000 \\times 0{,}02 \\times 0{,}98} = 100\\,000 \\times \\sqrt{196} = 100\\,000 \\times 14 = 1\\,400\\,000\\text{ FCFA}$.',
            formula: {
              name: 'Écart-type du coût total (sinistres binaires indépendants)',
              formula: '\\sigma(S) = C \\times \\sqrt{n \\cdot p \\cdot (1 - p)}',
              note: 'Note : √(10 000 × 0,02 × 0,98) = √196 = 14 exactement.',
            },
            konanTip:
              'Astuce calcul mental : sors toujours $C$ hors de la racine carrée ! Calcule d’abord $n p (1-p)$, prends sa racine $\\sqrt{196} = 14$, puis multiplie par $C$.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Pour un portefeuille de 10 000 assurés indépendants (probabilité p = 2 %, coût par sinistre C = 100 000 FCFA), que vaut l’écart-type σ(S) de la perte totale ?',
              options: [
                '196 000 FCFA',
                '1 400 000 FCFA',
                '2 000 000 FCFA',
                '14 000 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'n·p·(1−p) = 10 000 × 0,02 × 0,98 = 196, dont la racine carrée vaut 14. Donc σ(S) = 14 × 100 000 = 1 400 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Taux TS',
            stepTheme: 'green',
            stepTitle: 'Calculer et interpréter le taux de dispersion / sinistre (TS)',
            paragraphText:
              'Pour savoir si les sinistres restent maîtrisables relativement à l’espérance des encaissements, l’actuaire rapporte l’écart-type à l’espérance.\n' +
              '• **Formule** : $TS = \\frac{\\sigma(S)}{E(S)} \\times 100$.\n' +
              '• **Critère d’interprétation ($< 50\\,\\%$ vs $\\ge 50\\,\\%$)** : si $TS < 50\\,\\%$, la dispersion reste faible et la mutualisation est fiable et rentable ; si $TS \\ge 50\\,\\%$, la variabilité est dangereusement élevée par rapport à l’espérance de collecte.\n' +
              '• **Application** : avec $\\sigma(S) = 1\\,400\\,000$ et $E(S) = 20\\,000\\,000$, $TS = \\frac{1\\,400\\,000}{20\\,000\\,000} \\times 100 = 7\\,\\% \\ll 50\\,\\%$.',
            formula: {
              name: 'Taux de dispersion / de sinistre (TS)',
              formula: 'TS = \\frac{\\sigma}{E(X)} \\times 100',
              note: 'Seuil de pilotage : TS < 50 % (prévisible et sain) vs TS ≥ 50 % (risque élevé).',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Avec E(S) = 20 000 000 FCFA et σ(S) = 1 400 000 FCFA, que vaut le taux de sinistre TS et comment l’interpréter ?',
              options: [
                'TS = 7 % (< 50 %) : la mutualisation est très efficace et la charge des sinistres est stable et prévisible',
                'TS = 70 % (≥ 50 %) : la compagnie risque la faillite immédiate',
                'TS = 14 % : les primes doivent être divisées par dix',
                'TS = 0,7 % : aucun sinistre n’aura jamais lieu',
              ],
              correctAnswerIndex: 0,
              explanation:
                'TS = (1 400 000 / 20 000 000) × 100 = 7 %. Comme 7 % est largement inférieur au seuil de 50 %, le portefeuille est bien mutualisé.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Effet d’échelle',
            stepTheme: 'violet',
            stepTitle: 'Pourquoi multiplier le nombre d’assurés par 100 divise le risque relatif par 10',
            paragraphText:
              'Regardons algébriquement comment évolue $TS$ lorsque la compagnie passe d’un petit portefeuille à un grand portefeuille national.\n' +
              '• **Simplification de $TS$** : $TS = \\frac{C\\sqrt{np(1-p)}}{npC} = \\sqrt{\\frac{1-p}{np}}$.\n' +
              '• **Loi en $1/\\sqrt{n}$** : le montant $C$ s’annule et $TS$ est inversement proportionnel à $\\sqrt{n}$.\n' +
              '• **Conséquence stratégique** : si un portefeuille passe de $n = 100$ assurés à $n = 10\\,000$ assurés ($\\times 100$), le taux de dispersion relatif est divisé par $\\sqrt{100} = 10$ (passant par exemple de $70\\,\\%$ dangereux à $7\\,\\%$ très sûr !).\n' +
              'Exemple : voilà pourquoi les petits assureurs fusionnent ou cèdent une part en réassurance pour atteindre une taille critique.',
            keyRule:
              'Doubler $n$ réduit le risque relatif d’un facteur $\\sqrt{2}$ ; **centupler $n$ divise la dispersion relative par $10$**.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Si une compagnie multiplie par 100 le nombre n d’assurés indépendants et homogènes dans son portefeuille, comment évolue son taux de dispersion relatif TS = σ / E(S) ?',
              options: [
                'Il est multiplié par 100',
                'Il reste strictement identique',
                'Il est divisé par 10 (facteur √100)',
                'Il est divisé par 100',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme E(S) est proportionnel à n et σ(S) à √n, le rapport σ/E(S) varie comme 1/√n : multiplier n par 100 divise TS par √100 = 10.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Comparaison',
            stepTheme: 'slate',
            stepTitle: 'Cas pratique : comparer deux portefeuilles (n = 100 vs n = 10 000)',
            paragraphText:
              'Une mutuelle couvre d’abord seulement $n_1 = 100$ conducteurs ($p = 2\\,\\%$, $C = 100\\,000\\text{ FCFA}$), puis grandit à $n_2 = 10\\,000$.\n' +
              '• **À $n_1 = 100$** : $E(S_1) = 200\\,000\\text{ FCFA}$, $\\sigma(S_1) = 100\\,000 \\sqrt{100 \\times 0{,}02 \\times 0{,}98} = 100\\,000 \\times 1{,}4 = 140\\,000\\text{ FCFA}$, donc $TS_1 = \\frac{140\\,000}{200\\,000} \\times 100 = 70\\,\\% \\ge 50\\,\\%$ !\n' +
              '• **Diagnostic à $n_1 = 100$** : portefeuille trop étroit et trop volatil ; la mutualisation n’opère pas encore de manière sûre.\n' +
              '• **À $n_2 = 10\\,000$** : $TS_2 = 7\\,\\% < 50\\,\\%$, démontrant mathématiquement que la taille critique est la condition vitale de l’assureur.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Pour le même risque (p = 2 %, C = 100 000 FCFA), si la mutuelle ne compte que 100 assurés (E(S) = 200 000 FCFA et σ(S) = 140 000 FCFA), que vaut TS et que conclure ?',
              options: [
                'TS = 7 % — le risque est parfaitement stabilisé',
                'TS = 70 % (≥ 50 %) — la taille du portefeuille est insuffisante et la volatilité est trop élevée',
                'TS = 2 % — il n’y a aucun risque de perte',
                'TS = 14 % — la mutuelle peut supprimer ses réserves',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TS = (140 000 / 200 000) × 100 = 70 % ≥ 50 % : avec seulement 100 assurés, la loi des grands nombres ne joue pas encore assez.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p2',
        order: 2,
        title: 'Modélisation du nombre de sinistres : loi Binomiale et loi de Poisson',
        summary:
          'Nombre total de sinistres Ns, limites de la loi Binomiale (hétérogénéité, rareté, dépendance), propriétés de la loi de Poisson P(λ) et calcul de probabilités de sinistres rares.',
        conceptExplanation:
          'Pour tarifer avec précision, l’actuaire modélise séparément la **fréquence** (nombre de sinistres $N_S = k_1 + \\dots + k_n$) et la **sévérité** (coût d’un sinistre).\n\n' +
          '1. **Loi Binomiale $\\mathcal{B}(n, p)$** : adaptée pour compter combien d’assurés parmi $n$ subissent un sinistre (0 ou 1 par contrat), mais elle devient insuffisante quand :\n' +
          '• les assurés sont **hétérogènes** $\\to$ nécessité de **segmentation** ;\n' +
          '• les sinistres sont **rares** ($p$ très faible, $n$ grand) $\\to$ approximation par la **loi de Poisson** ;\n' +
          '• il existe des **dépendances** (catastrophes, pandémies) ou surdispersion $\\to$ loi binomiale négative.\n\n' +
          '2. **Loi de Poisson $\\mathcal{P}(\\lambda)$** : modèle de référence pour les événements rares ou le comptage annuel de sinistres par contrat/portefeuille :\n' +
          '• Probabilité d’observer exactement $k$ sinistres : $P(K = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}$.\n' +
          '• Propriété fondamentale : l’espérance et la variance sont toutes deux égales au paramètre $\\lambda$ ($E(K) = \\text{Var}(K) = \\lambda$, écart-type $\\sigma = \\sqrt{\\lambda}$).',
        formulas: [
          {
            name: 'Loi de Poisson P(λ)',
            formula: 'P(K = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!} \\quad ; \\quad E(K) = \\operatorname{Var}(K) = \\lambda',
            note: 'Avec 0! = 1 et e⁻¹ ≈ 0,3679, e⁻² ≈ 0,1353, e⁻⁰·⁰³ ≈ 0,9704.',
          },
        ],
        keyRule:
          'En loi de Poisson $\\mathcal{P}(\\lambda)$ : $P(K=0) = e^{-\\lambda}$, $P(K=1) = \\lambda e^{-\\lambda}$, et surtout **Espérance = Variance = $\\lambda$**.',
        workedExample: {
          title: 'Modéliser des sinistres catastrophiques rares par Poisson(λ = 2)',
          statement:
            'Une compagnie observe en moyenne λ = 2 sinistres catastrophiques par an (inondation, glissement de terrain) modélisés par K ~ Poisson(2). Calculez P(K = 0), P(K ≥ 3), E(K) et Var(K), puis justifiez ce choix de loi.',
          methodSteps: [
            'Aucun sinistre : P(K = 0) = e⁻² × 2⁰ / 0! = e⁻² ≈ 0,1353 (soit 13,53 %).',
            'P(K = 1) = 2 × e⁻² ≈ 0,2707 ; P(K = 2) = (2²/2!) × e⁻² = 2 e⁻² ≈ 0,2707.',
            'Au moins 3 sinistres : P(K ≥ 3) = 1 − [P(0) + P(1) + P(2)] = 1 − 5 e⁻² ≈ 1 − 0,6767 = 0,3233 (soit 32,33 %).',
            'Espérance et variance : E(K) = Var(K) = λ = 2 (écart-type √2 ≈ 1,414).',
            'Justification : la loi de Poisson est idéale pour modéliser des événements rares, discrets et indépendants survenant à un taux moyen constant λ sur une période donnée.',
          ],
          conclusion:
            'P(K = 0) ≈ 13,53 %, P(K ≥ 3) ≈ 32,33 %, E(K) = Var(K) = 2.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fréquence Ns',
            stepTheme: 'blue',
            stepTitle: 'Modélisation par la loi Binomiale et ses trois limites actuarielles',
            paragraphText:
              'Dans un portefeuille de $n$ assurés, chaque contrat $i$ génère $k_i$ sinistres, donnant un total annuel $N_S = k_1 + k_2 + \\dots + k_n$.\n' +
              '• **Loi Binomiale $\\mathcal{B}(n, p)$** : suppose des assurés identiques, indépendants et un seul sinistre possible (0 ou 1) par contrat.\n' +
              '• **Limite 1 — Hétérogénéité** : jeunes conducteurs et conducteurs expérimentés n’ont pas la même probabilité $p$ → on segmente le tarif.\n' +
              '• **Limite 2 — Rareté des sinistres** : quand $n$ est grand et $p$ très petit, la loi de Poisson remplace avantageusement la Binomiale.\n' +
              '• **Limite 3 — Dépendances et multi-sinistres** : catastrophes naturelles ou assurés ayant 2–3 sinistres/an exigent d’autres lois (Poisson, binomiale négative).\n' +
              'Exemple : sur une flotte auto, un même véhicule peut causer deux accrochages dans l’année, ce que la loi Binomiale simple (0 ou 1) ne capture pas.',
            keyRule:
              'Les 3 limites de la Binomiale en actuariat : **hétérogénéité** (→ segmentation), **rareté** (→ Poisson) et **dépendances** (→ lois composées / binomiale négative).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle action technique l’actuaire entreprend-il lorsque les assurés d’un portefeuille ne sont pas homogènes (par exemple conducteurs novices vs expérimentés) ?',
              options: [
                'Il applique la même prime à tout le monde sans distinction',
                'Il procède à la segmentation du portefeuille en groupes de risque homogènes',
                'Il supprime les contrats des bons conducteurs',
                'Il remplace la statistique par un tirage au sort',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’hétérogénéité des assurés rend la loi binomiale simple insuffisante et impose la segmentation tarifaire selon les profils de risque.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Loi de Poisson',
            stepTheme: 'violet',
            stepTitle: 'Formule et propriétés remarquables de la loi de Poisson P(λ)',
            paragraphText:
              'La **loi de Poisson** de paramètre $\\lambda > 0$ (appelée « loi des événements rares ») est l’outil phare du comptage de sinistres.\n' +
              '• **Loi de probabilité** : pour tout entier $k \\ge 0$, $P(K = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}$.\n' +
              '• **Moyenne et variance** : fait unique et très pratique en examen, $E(K) = \\lambda$ et $\\operatorname{Var}(K) = \\lambda$.\n' +
              '• **Cas $k = 0$ et $k = 1$** : $P(K=0) = e^{-\\lambda}$ (aucun sinistre) et $P(K=1) = \\lambda e^{-\\lambda}$ (exactement 1 sinistre).\n' +
              'Exemple : pour $\\lambda = 2$, $P(K=0) = e^{-2} \\approx 13{,}53\\,\\%$, $P(K=1) = 2e^{-2} \\approx 27{,}07\\,\\%$, et $P(K=2) = 2e^{-2} \\approx 27{,}07\\,\\%$.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Distribution de probabilité de la loi de Poisson P(λ = 2)',
              caption: 'Probabilités en % d’observer k = 0 à 5 sinistres catastrophiques par an lorsque la moyenne vaut λ = 2.',
              barChart: {
                yLabel: 'Probabilité (%)',
                unit: '%',
                bars: [
                  { label: 'k = 0', value: 13.5, color: 'green', annotation: '13,5 %' },
                  { label: 'k = 1', value: 27.1, color: 'blue', annotation: '27,1 %' },
                  { label: 'k = 2', value: 27.1, color: 'blue', annotation: '27,1 %' },
                  { label: 'k = 3', value: 18.0, color: 'violet', annotation: '18,0 %' },
                  { label: 'k = 4', value: 9.0, color: 'orange', annotation: '9,0 %' },
                  { label: 'k = 5', value: 3.6, color: 'slate', annotation: '3,6 %' },
                ],
              },
            },
            formula: {
              name: 'Loi de Poisson P(λ)',
              formula: 'P(K = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!} \\quad ; \\quad E(K) = \\operatorname{Var}(K) = \\lambda',
              note: 'Parfaitement adaptée aux sinistres rares ou indépendants sur une durée fixe.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Si le nombre annuel de sinistres majeurs suit une loi de Poisson de paramètre λ = 2, quelles sont respectivement son espérance et sa variance ?',
              options: [
                'Espérance = 2 et Variance = 4',
                'Espérance = 2 et Variance = 2',
                'Espérance = 4 et Variance = 2',
                'Espérance = 1 et Variance = 0,5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Propriété fondamentale de la loi de Poisson P(λ) : E(K) = λ et Var(K) = λ. Ici les deux valent exactement 2.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul portefeuille',
            stepTheme: 'green',
            stepTitle: 'Nombre moyen de sinistres et probabilités individuelles (λ = 0,03)',
            paragraphText:
              'Appliquons la loi de Poisson à un portefeuille de $n = 5\\,000$ assurés générant en moyenne $\\lambda = 0{,}03$ sinistre par assuré et par an.\n' +
              '• **Nombre moyen annuel sur le portefeuille** : $E(N_S) = 5\\,000 \\times 0{,}03 = 150\\text{ sinistres/an}$.\n' +
              '• **Probabilité de 0 sinistre pour un assuré** : $P(K = 0) = e^{-0{,}03} \\approx 0{,}9704$ (soit **97,04 %**).\n' +
              '• **Probabilité de 1 sinistre pour un assuré** : $P(K = 1) = 0{,}03 \\times e^{-0{,}03} \\approx 0{,}0291$ (soit **2,91 %**).\n' +
              '• **Vérification** : $P(K \\ge 2) = 1 - 0{,}9704 - 0{,}0291 = 0{,}0005$ (0,05 % de chance de subir 2 sinistres ou plus).',
            konanTip:
              'Pour petit $\\lambda$ (comme $0{,}03$), $e^{-\\lambda} \\approx 1 - \\lambda = 0{,}97$ donne une estimation mentale instantanée !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un portefeuille de 5 000 assurés génère en moyenne 0,03 sinistre par assuré (modèle de Poisson). Quel est le nombre moyen annuel de sinistres du portefeuille et la probabilité d’avoir 0 sinistre pour un assuré ?',
              options: [
                '15 sinistres ; P(0) ≈ 3,00 %',
                '150 sinistres ; P(0) = e⁻⁰·⁰³ ≈ 97,04 %',
                '300 sinistres ; P(0) ≈ 50,00 %',
                '150 sinistres ; P(0) ≈ 2,91 %',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Moyenne portefeuille = 5 000 × 0,03 = 150 sinistres. Pour un assuré (λ = 0,03), P(K = 0) = e⁻⁰·⁰³ ≈ 0,9704 soit 97,04 %.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Événement complémentaire',
            stepTheme: 'green',
            stepTitle: 'Calculer la probabilité d’« au moins 3 sinistres » : P(K ≥ 3)',
            paragraphText:
              'En loi de Poisson, $K$ peut prendre toutes les valeurs entières jusqu’à $+\\infty$ ; pour calculer $P(K \\ge 3)$, on passe toujours par l’événement complémentaire !\n' +
              '• **Astuce du complémentaire** : $P(K \\ge 3) = 1 - P(K \\le 2) = 1 - [P(0) + P(1) + P(2)]$.\n' +
              '• **Calcul avec $\\lambda = 2$** : $P(0) = e^{-2} \\approx 0{,}1353$ ; $P(1) = 2e^{-2} \\approx 0{,}2707$ ; $P(2) = \\frac{2^2}{2!} e^{-2} = 2e^{-2} \\approx 0{,}2707$.\n' +
              '• **Somme cumulée** : $P(K \\le 2) = 5 e^{-2} \\approx 0{,}6767$ (67,67 %).\n' +
              '• **Résultat** : $P(K \\ge 3) = 1 - 0{,}6767 = 0{,}3233$, soit **32,33 %**.',
            formula: {
              name: 'Passage par l’événement complémentaire',
              formula: 'P(K \\ge 3) = 1 - \\bigl[P(K=0) + P(K=1) + P(K=2)\\bigr]',
              note: 'Évite une somme infinie impossible à calculer terme à terme.',
            },
            keyRule:
              'Face à « **au moins $k$ sinistres** » ($K \\ge k$), passe **toujours** par $1 - P(K \\le k-1)$.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Pour K ~ Poisson(λ = 2) modélisant des catastrophes annuelles (e⁻² ≈ 0,1353), quelle est la probabilité qu’au moins 3 sinistres majeurs surviennent dans l’année ?',
              options: ['13,53 %', '27,07 %', '32,33 %', '67,67 %'],
              correctAnswerIndex: 2,
              explanation:
                'P(K ≤ 2) = e⁻²(1 + 2 + 2²/2) = 5e⁻² ≈ 0,6767. Donc P(K ≥ 3) = 1 − 0,6767 = 0,3233 soit 32,33 %.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Choix de modèle',
            stepTheme: 'orange',
            stepTitle: 'Quand la loi de Poisson est-elle pertinente (et ses limites) ?',
            paragraphText:
              'Savoir justifier le choix d’une loi statistique est une compétence clé de l’actuaire.\n' +
              '• **Pertinence de Poisson** : idéale pour des événements **rares**, **discrets** ($0, 1, 2, \\dots$), **indépendants** les uns des autres et survenant à un taux moyen constant $\\lambda$ sur un intervalle donné (inondations majeures annuelles, glissements de terrain, accidents rares).\n' +
              '• **Quand elle converge depuis la Binomiale** : lorsque $n$ est grand ($n \\ge 30$) et $p$ petit ($p \\le 0{,}05$), $\\mathcal{B}(n, p) \\approx \\mathcal{P}(np)$.\n' +
              '• **Limite (surdispersion)** : si $\\operatorname{Var}(K) > E(K)$ (ex. assurés très hétérogènes ou grappes de sinistres), on préfère la loi binomiale négative.\n' +
              'Exemple : 2 catastrophes naturelles en moyenne par an s’accordent parfaitement avec $\\mathcal{P}(2)$ car ce sont des événements rares, ponctuels et comptables sur une année.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Pourquoi la loi de Poisson est-elle particulièrement pertinente pour modéliser le nombre annuel de glissements de terrain ou d’inondations majeures dans une région ?',
              options: [
                'Parce qu’elle prédit toujours des montants négatifs',
                'Parce qu’elle modélise fidèlement le comptage d’événements rares, discrets et indépendants survenant sur une période fixe à un taux moyen λ',
                'Parce que sa variance est toujours égale à zéro',
                'Parce qu’elle s’applique uniquement aux variables continues comme la taille',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loi de Poisson est la loi canonique des comptages d’événements rares et indépendants sur un intervalle temporel donné.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Calculer P(K = 1) pour un assuré avec λ = 0,03',
            paragraphText:
              'Revenons au portefeuille de 5 000 assurés avec une fréquence moyenne $\\lambda = 0{,}03$ sinistre par assuré ($e^{-0{,}03} \\approx 0{,}9704$).\n' +
              '• **Probabilité d’exactement 1 sinistre** : $P(K = 1) = e^{-0{,}03} \\cdot \\frac{0{,}03^1}{1!} = 0{,}9704 \\times 0{,}03 \\approx 0{,}0291$ (**2,91 %**).\n' +
              '• **Nombre approximatif d’assurés à 1 sinistre** : $5\\,000 \\times 2{,}91\\,\\% \\approx 146\\text{ assurés}$.\n' +
              '• **Nombre approximatif d’assurés sans sinistre** : $5\\,000 \\times 97{,}04\\,\\% \\approx 4\\,852\\text{ assurés}$, et seulement ~2 assurés subiront 2 sinistres ou plus.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Si le nombre annuel de sinistres par assuré suit Poisson(λ = 0,03) avec e⁻⁰·⁰³ ≈ 0,9704, quelle est la probabilité qu’un assuré subisse exactement 1 sinistre dans l’année ?',
              options: ['0,03 %', '2,91 %', '3,00 %', '97,04 %'],
              correctAnswerIndex: 1,
              explanation:
                'P(K = 1) = λ · e⁻λ = 0,03 × 0,9704 = 0,029112 ≈ 2,91 %.',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p3',
        order: 3,
        title: 'Tarification actuarielle : Prime pure, Chargements, Prime HT et Prime TTC',
        summary:
          'Calcul de la prime pure (fréquence × coût moyen), chargements (sécurité, gestion, marge), Prime commerciale HT, Taxe sur les Conventions d’Assurance (TCA) et Prime TTC.',
        conceptExplanation:
          'Fixer le bon prix (la **prime**) est l’étape décisive de l’assureur : trop bas, la compagnie fait faillite ; trop haut, les clients partent chez la concurrence.\n\n' +
          '1. **Prime pure (ou prime de risque)** : espérance du coût des sinistres par assuré, sans frais ni profit :\n' +
          '$P_{\\text{pure}} = \\text{Probabilité (ou fréquence)} \\times \\text{Coût moyen du sinistre}$.\n\n' +
          '2. **Chargements techniques et commerciaux** : pour couvrir la volatilité des sinistres (**chargement de sécurité**), les salaires/commissions d’apporteurs/informatique (**frais de gestion et d’acquisition**) et la rémunération des fonds propres (**marge bénéficiaire**), on applique un taux de chargement total $c$ sur la prime pure.\n\n' +
          '3. **Prime commerciale Hors Taxes (HT)** : $\\text{Prime HT} = P_{\\text{pure}} \\times (1 + c_{\\text{sécurité}} + c_{\\text{gestion}} + c_{\\text{marge}})$.\n\n' +
          '4. **Prime commerciale TTC (payée par le client)** : on ajoute la **Taxe sur les Conventions d’Assurance (TCA)** : $\\text{Prime TTC} = \\text{Prime HT} \\times (1 + \\text{TCA})$.',
        formulas: [
          {
            name: 'Cascade complète de tarification',
            formula: 'P_{\\text{pure}} = p \\times C \\quad ; \\quad P_{\\text{HT}} = P_{\\text{pure}}(1 + \\sum \\text{chargements}) \\quad ; \\quad P_{\\text{TTC}} = P_{\\text{HT}}(1 + \\text{TCA})',
            note: 'Attention : la TCA s’applique sur la Prime commerciale HT, jamais uniquement sur la prime pure.',
          },
        ],
        keyRule:
          'Respecte impérativement l’ordre multiplicatif en deux étages : d’abord $\\text{Prime pure} \\xrightarrow{\\text{+ chargements}} \\text{Prime HT}$, puis $\\text{Prime HT} \\xrightarrow{\\text{+ TCA}} \\text{Prime TTC}$.',
        workedExample: {
          title: 'Tarification complète maladie : de la prime pure à la prime TTC',
          statement:
            'Un contrat d’assurance maladie prévoit une indemnisation moyenne de 300 000 FCFA avec une probabilité de sinistre de 8 %. L’assureur applique : chargement de sécurité 10 %, frais de gestion 25 %, marge bénéficiaire 5 % et TCA de 14,5 %. Calculez Prime pure, Prime commerciale HT et Prime TTC.',
          methodSteps: [
            'Prime pure = 8 % × 300 000 = 0,08 × 300 000 = 24 000 FCFA.',
            'Total des chargements = 10 % + 25 % + 5 % = 40 % (= 9 600 FCFA).',
            'Prime commerciale HT = 24 000 × (1 + 0,40) = 24 000 × 1,40 = 33 600 FCFA.',
            'Prime commerciale TTC = 33 600 × (1 + 0,145) = 33 600 × 1,145 = 38 472 FCFA.',
          ],
          conclusion:
            'Prime pure = 24 000 FCFA, Prime commerciale HT = 33 600 FCFA et Prime TTC = 38 472 FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Prime pure',
            stepTheme: 'blue',
            stepTitle: 'Calculer la prime pure (fréquence × coût moyen)',
            paragraphText:
              'La **prime pure** représente le montant exact strictement nécessaire pour indemniser en moyenne les sinistres attendus, sans aucun frais administratif ni taxe.\n' +
              '• **Formule** : $P_{\\text{pure}} = p \\times C = \\text{Fréquence moyenne} \\times \\text{Coût moyen d’un sinistre}$.\n' +
              '• **Calcul sur historique** : si sur une période on observe $N$ sinistres pour $A$ assurés et un coût total $S_{\\text{total}}$, alors $\\text{Fréquence} = \\frac{N}{A}$, $\\text{Coût moyen} = \\frac{S_{\\text{total}}}{N}$, et donc $P_{\\text{pure}} = \\frac{S_{\\text{total}}}{A}$.\n' +
              'Exemple : un contrat auto avec $p = 3\\,\\%$ et coût moyen $1\\,200\\,000\\text{ FCFA}$ donne $P_{\\text{pure}} = 0{,}03 \\times 1\\,200\\,000 = 36\\,000\\text{ FCFA}$.',
            formula: {
              name: 'Prime pure d’assurance',
              formula: 'P_{\\text{pure}} = p \\times C = \\frac{\\text{Coût total des sinistres}}{\\text{Nombre d’assurés}}',
              note: 'Égale aussi E(S) / n sur l’ensemble du portefeuille.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Une police d’assurance maladie prévoit un coût moyen de sinistre de 300 000 FCFA avec une probabilité annuelle de 8 %. Quelle est la prime pure par assuré ?',
              options: ['12 000 FCFA', '24 000 FCFA', '30 000 FCFA', '37 500 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'Prime pure = p × C = 0,08 × 300 000 = 24 000 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Chargements',
            stepTheme: 'blue',
            stepTitle: 'Rôle des trois chargements : sécurité, gestion/acquisition et marge',
            paragraphText:
              'Si une compagnie vendait ses contrats à la seule prime pure, elle ferait faillite dès le paiement du premier loyer ou salaire !\n' +
              '• **Chargement de sécurité** : coussin technique couvrant les fluctuations aléatoires des sinistres au-delà de l’espérance.\n' +
              '• **Chargement de gestion et d’acquisition** : couvre salaires, informatique, loyers, gestion des sinistres et commissions des courtiers/agents.\n' +
              '• **Marge bénéficiaire** : rémunère les capitaux immobilisés par les actionnaires.\n' +
              '• **Prime commerciale HT** : $P_{\\text{HT}} = P_{\\text{pure}} \\times (1 + c_{\\text{sec}} + c_{\\text{gest}} + c_{\\text{marge}})$.\n' +
              'Exemple : avec $P_{\\text{pure}} = 36\\,000\\text{ FCFA}$ en auto et $20\\,\\%$ de frais et marge, $P_{\\text{HT}} = 36\\,000 \\times 1{,}20 = 43\\,200\\text{ FCFA}$.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'En assurance automobile, la prime pure vaut 36 000 FCFA et les frais de gestion + marge représentent 20 % de la prime pure. Quel est le montant de la prime commerciale HT ?',
              options: ['38 000 FCFA', '40 000 FCFA', '43 200 FCFA', '45 000 FCFA'],
              correctAnswerIndex: 2,
              explanation:
                'Prime commerciale HT = 36 000 × (1 + 0,20) = 36 000 × 1,20 = 43 200 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Cascade Prime TTC',
            stepTheme: 'green',
            stepTitle: 'Passage de la Prime pure à la Prime commerciale HT puis TTC (TCA)',
            paragraphText:
              'Le tarif final facturé sur l’avis d’échéance du client intègre en dernier ressort la fiscalité spécifique du secteur.\n' +
              '• **Étape 1** : calculer la **Prime pure** ($p \\times C$).\n' +
              '• **Étape 2** : appliquer la somme des **chargements** pour obtenir la **Prime commerciale HT**.\n' +
              '• **Étape 3** : appliquer la **Taxe sur les Conventions d’Assurance (TCA)** sur la Prime HT pour obtenir la **Prime commerciale TTC** : $P_{\\text{TTC}} = P_{\\text{HT}} \\times (1 + \\text{TCA})$.\n' +
              'Exemple complet : $P_{\\text{pure}} = 24\\,000\\text{ FCFA}$, chargements = $10\\% + 25\\% + 5\\% = 40\\%$ → $P_{\\text{HT}} = 33\\,600\\text{ FCFA}$ ; avec $\\text{TCA} = 14{,}5\\,\\%$, $P_{\\text{TTC}} = 33\\,600 \\times 1{,}145 = 38\\,472\\text{ FCFA}$.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Construction en cascade d’une prime d’assurance (Exemple 38 472 FCFA TTC)',
              caption: 'Empilement progressif : Prime pure → Chargements → Prime commerciale HT → TCA → Prime TTC.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Base technique',
                    title: 'Prime pure = p × C = 24 000 FCFA',
                    subtitle: 'Couverture stricte du risque espéré (8 % × 300 000 FCFA)',
                    color: 'blue',
                  },
                  {
                    badge: '+ 40 % Chargements',
                    title: 'Sécurité (10 %) + Gestion (25 %) + Marge (5 %) = +9 600 FCFA',
                    subtitle: 'Donne la Prime commerciale HT = 33 600 FCFA',
                    color: 'violet',
                  },
                  {
                    badge: '+ 14,5 % TCA',
                    title: 'Taxe sur les Conventions d’Assurance = +4 872 FCFA',
                    subtitle: 'Prime commerciale TTC payée par l’assuré = 38 472 FCFA',
                    color: 'green',
                  },
                ],
              },
            },
            keyRule:
              'Attention au piège : on n’additionne **jamais** les 40 % de chargements et les 14,5 % de TCA (ce qui ferait 54,5 % faux) ! On multiplie successivement par $1{,}40$ puis par $1{,}145$ ($1{,}40 \\times 1{,}145 = 1{,}603$).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Avec une prime pure de 24 000 FCFA, des chargements totaux de 40 % (10 % sécurité + 25 % gestion + 5 % marge) et une TCA de 14,5 %, quels sont les montants exacts de la Prime commerciale HT et de la Prime TTC ?',
              options: [
                'Prime HT = 33 600 FCFA ; Prime TTC = 37 080 FCFA',
                'Prime HT = 33 600 FCFA ; Prime TTC = 38 472 FCFA',
                'Prime HT = 27 480 FCFA ; Prime TTC = 38 472 FCFA',
                'Prime HT = 30 000 FCFA ; Prime TTC = 34 350 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Prime HT = 24 000 × 1,40 = 33 600 FCFA. Prime TTC = 33 600 × 1,145 = 38 472 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Facteurs de tarif',
            stepTheme: 'violet',
            stepTitle: 'Les déterminants individuels influençant le calcul des primes',
            paragraphText:
              'Deux assurés souscrivant le même type de contrat paient rarement la même prime car la tarification est personnalisée.\n' +
              '• **Profil de l’assuré** : âge, état de santé, profession, ancienneté de permis, historique de sinistres (bonus-malus).\n' +
              '• **Caractéristiques du bien ou de l’activité** : puissance/valeur du véhicule, zone géographique (ville dense vs campagne), dispositifs de prévention (alarme, extincteurs).\n' +
              '• **Paramètres du contrat** : niveau des plafonds d’indemnisation, étendue des garanties et montant de la franchise choisie.\n' +
              'Exemple : accepter une franchise plus élevée en dommages collision abaisse immédiatement la prime pure attendue et donc la prime TTC.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quel choix contractuel de l’assuré permet directement de diminuer le montant de sa prime annuelle ?',
              options: [
                'Supprimer toute franchise et doubler tous les plafonds de garantie',
                'Accepter une franchise plus élevée (laissant les petits dommages à sa charge) ou installer des dispositifs de prévention (alarme, traceur GPS)',
                'Déclarer une fausse adresse lors de la souscription',
                'Payer la prime uniquement après la survenance du sinistre',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une franchise plus élevée réduit la charge espérée de l’assureur (surtout sur les petits sinistres fréquents) et les équipements de prévention baissent la probabilité de sinistre.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Étude statistique 3 ans',
            stepTheme: 'green',
            stepTitle: 'Simulation tarifaire sur 3 ans d’historique santé',
            paragraphText:
              'Une compagnie analyse 3 années de statistiques pour tarifer un nouveau produit santé :\n' +
              '• Année 1 : 1 000 assurés, 80 sinistres, coût total 24 000 000 FCFA.\n' +
              '• Année 2 : 1 200 assurés, 100 sinistres, coût total 30 000 000 FCFA.\n' +
              '• Année 3 : 1 500 assurés, 120 sinistres, coût total 36 000 000 FCFA.\n' +
              '• **Calcul cumulé (méthode exacte pondérée)** : Total assurés-années = $1\\,000 + 1\\,200 + 1\\,500 = 3\\,700$ ; Total sinistres = $80 + 100 + 120 = 300$ ; Coût total = $90\\,000\\,000\\text{ FCFA}$.\n' +
              '• **Résultats** : Fréquence moyenne = $\\frac{300}{3\\,700} \\approx 8{,}11\\,\\%$ ; Coût moyen par sinistre = $\\frac{90\\,000\\,000}{300} = 300\\,000\\text{ FCFA}$ ; Prime pure moyenne = $\\frac{90\\,000\\,000}{3\\,700} \\approx 24\\,324\\text{ FCFA}$.',
            konanTip:
              'Sur un tableau multi-annuel, cumule toujours les totaux ($\\sum \\text{assurés}$, $\\sum \\text{sinistres}$, $\\sum \\text{coûts}$) avant de diviser : cela pondère automatiquement chaque année selon sa taille !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Sur l’historique de 3 ans totalisant 3 700 assurés-années, 300 sinistres et 90 000 000 FCFA de coûts totaux, quelle est la prime pure moyenne et la prime commerciale HT avec un chargement global de 35 % ?',
              options: [
                'Prime pure ≈ 24 324 FCFA ; Prime HT ≈ 32 838 FCFA',
                'Prime pure = 30 000 FCFA ; Prime HT = 40 500 FCFA',
                'Prime pure ≈ 24 324 FCFA ; Prime HT ≈ 27 000 FCFA',
                'Prime pure = 300 000 FCFA ; Prime HT = 405 000 FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Prime pure moyenne = 90 000 000 / 3 700 ≈ 24 324,32 FCFA. Avec +35 % de chargement : 24 324,32 × 1,35 ≈ 32 837,84 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas auto complet',
            stepTheme: 'slate',
            stepTitle: 'Synthèse : tarifer un portefeuille automobile de 5 000 clients',
            paragraphText:
              'Vérifions le passage du global à l’individuel sur une flotte de $n = 5\\,000$ véhicules ($p = 3\\,\\%$, coût moyen $1\\,200\\,000\\text{ FCFA}$, chargements = $20\\,\\%$ de la prime pure).\n' +
              '• **Coût total attendu** : $5\\,000 \\times 0{,}03 \\times 1\\,200\\,000 = 180\\,000\\,000\\text{ FCFA}$.\n' +
              '• **Prime pure par assuré** : $\\frac{180\\,000\\,000}{5\\,000} = 36\\,000\\text{ FCFA}$ (identique à $0{,}03 \\times 1\\,200\\,000$).\n' +
              '• **Prime commerciale HT** : $36\\,000 \\times 1{,}20 = 43\\,200\\text{ FCFA}$ par an (soit $216\\,000\\,000\\text{ FCFA}$ encaissés sur le portefeuille, dont $36\\,000\\,000\\text{ FCFA}$ pour frais et marge).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Dans une police auto couvrant 5 000 assurés (p = 3 %, coût moyen 1 200 000 FCFA, chargements 20 %), quelle part de la prime commerciale individuelle (43 200 FCFA) sert strictement aux frais de gestion et à la marge ?',
              options: ['3 600 FCFA', '7 200 FCFA', '12 000 FCFA', '36 000 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'Prime commerciale HT (43 200) − Prime pure (36 000) = 7 200 FCFA (= 20 % × 36 000).',
            },
          },
        ],
      }),

      // POINT 2.4
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p4',
        order: 4,
        title: 'Base actuarielle simplifiée : actualisation multi-périodes et calcul de rentes',
        summary:
          'Valeur temporelle de l’argent au taux technique i, prime pure actualisée avec probabilités variables ou constantes, valeur actuelle d’une rente éducation et périodicité mensuelle.',
        conceptExplanation:
          'Dès qu’un contrat d’assurance couvre plusieurs années (assurance vie, rente éducation, rente de conjoint), les flux futurs doivent être **actualisés** à la date d’aujourd’hui à l’aide d’un **taux technique $i$**.\n\n' +
          '1. **Actualisation avec probabilités variables ($p_t, C_t$)** :\n' +
          '$P = \\sum_{t=1}^{T} \\frac{p_t \\times C_t}{(1 + i)^t} = \\sum_{t=1}^{T} p_t C_t (1 + i)^{-t}$.\n\n' +
          '2. **Actualisation avec probabilité et coût constants ($p, c$)** :\n' +
          '$P = p \\cdot c \\cdot \\frac{1 - (1 + i)^{-T}}{i}$, et la cotisation moyenne actualisée par assuré sur $n$ participants vaut $\\text{CM} = \\frac{p \\cdot c}{n}$ (ou multipliée par le facteur d’annuité sur $T$ périodes).\n\n' +
          '3. **Valeur actuelle d’une rente ($VA$)** : capital à constituer aujourd’hui pour verser une rente périodique $R$ pendant $n$ périodes au taux périodique $i$ : $VA = R \\cdot \\frac{1 - (1 + i)^{-n}}{i}$. Pour une rente mensuelle sur $A$ années, on convertit en $n = 12A$ mois et taux mensuel $i_m = (1+i)^{1/12}-1$ (ou $i/12$).',
        formulas: [
          {
            name: 'Prime pure actualisée (cas général & cas constant)',
            formula: 'P = \\sum_{t=1}^{T} p_t C_t (1 + i)^{-t} \\quad ; \\quad P_{\\text{cte}} = p \\cdot c \\cdot \\frac{1 - (1 + i)^{-T}}{i}',
            note: 'Le taux technique i reflète le rendement prudent des placements financiers.',
          },
          {
            name: 'Valeur actuelle d’une rente certaine',
            formula: 'VA = R \\times \\frac{1 - (1 + i)^{-n}}{i}',
            note: 'Donne le capital constitutif nécessaire pour servir n versements égaux de R.',
          },
        ],
        keyRule:
          'Actualiser consiste à diviser chaque flux futur de date $t$ par $(1+i)^t$ : plus le taux technique $i$ est élevé, moins le capital à immobiliser aujourd’hui est grand.',
        workedExample: {
          title: 'Calculer le capital d’une rente éducation (4 ans) et d’une rente conjoint (10 ans)',
          statement:
            'Cas 1 : Un parent veut garantir une rente éducation de 500 000 FCFA/an pendant 4 ans au taux technique annuel i = 2 %. Cas 2 : Une épouse veut garantir une rente mensuelle de 200 000 FCFA/mois pendant 10 ans (120 mois) au taux technique annuel de 2 %. Calculez les deux valeurs actuelles.',
          methodSteps: [
            'Cas 1 (annuel) : VA = 500 000 × [1 − (1,02)⁻⁴] / 0,02.',
            'Comme (1,02)⁻⁴ ≈ 0,923845, facteur = (1 − 0,923845) / 0,02 = 3,80773 → VA ≈ 500 000 × 3,80773 ≈ 1 903 864 FCFA.',
            'Cas 2 (mensuel, 120 mois) : taux mensuel actuariel i_m = (1,02)^(1/12) − 1 ≈ 0,0016516 (ou proportionnel 0,02/12 ≈ 0,0016667).',
            'Avec i_m = (1,02)^(1/12) − 1 : VA = 200 000 × [1 − (1,02)⁻¹⁰] / i_m ≈ 200 000 × 108,789 ≈ 21 757 860 FCFA (ou ≈ 21 739 800 FCFA en taux proportionnel).',
          ],
          conclusion:
            'Il faut constituer environ 1 903 864 FCFA pour la rente éducation de 4 ans et environ 21,75 millions FCFA pour la rente mensuelle de 10 ans.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Taux technique',
            stepTheme: 'blue',
            stepTitle: 'Pourquoi actualiser les engagements longs au taux technique i ?',
            paragraphText:
              'Un euro ou un franc CFA promis dans 10 ans ne coûte pas 1 franc aujourd’hui à l’assureur car les sommes provisionnées sont placées entre-temps.\n' +
              '• **Définition du taux technique $i$** : taux d’intérêt prudentiel que l’assureur garantit par avance sur les placements financiers couvrant ses engagements futurs (souvent $2\\,\\%$ à $3{,}5\\,\\%$ en zone CIMA).\n' +
              '• **Principe d’actualisation** : pour disposer d’un sinistre ou capital $C_t$ à l’année $t$, il suffit de provisionner aujourd’hui $\\frac{C_t}{(1 + i)^t} = C_t (1+i)^{-t}$.\n' +
              '• **Prudence réglementaire** : un taux technique trop élevé serait dangereux si les marchés financiers rapportaient moins que prévu.\n' +
              'Exemple : pour payer $1\\,000\\,000\\text{ FCFA}$ dans 5 ans avec $i = 2\\,\\%$, il suffit de placer $\\frac{1\\,000\\,000}{(1{,}02)^5} \\approx 905\\,731\\text{ FCFA}$ aujourd’hui.',
            formula: {
              name: 'Facteur d’actualisation à la date t',
              formula: 'V_0 = C_t \\times (1 + i)^{-t} = \\frac{C_t}{(1 + i)^t}',
              note: 'Mécanisme inverse de la capitalisation (1 + i)^t.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p4_q1',
              type: 'mcq',
              prompt:
                'Quelle est l’utilité principale du taux technique i dans la tarification actuarielle des contrats à long terme ?',
              options: [
                'Multiplier artificiellement les frais de gestion de la compagnie',
                'Actualiser les flux futurs (sinistres ou rentes) en tenant compte du rendement financier des primes placées',
                'Remplacer la taxe sur les conventions d’assurance (TCA)',
                'Calculer le nombre d’accidents de la route dans une ville',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assureur place les primes en attente de règlement : le taux technique actualise les engagements futurs pour déterminer la valeur présente exacte nécessaire.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Probabilités variables',
            stepTheme: 'violet',
            stepTitle: 'Prime pure actualisée lorsque p_t et C_t varient dans le temps',
            paragraphText:
              'Sur un contrat pluriannuel (ex. temporaire décès où le risque augmente avec l’âge ou prêt amortissable où le capital restant dû baisse), chaque année $t$ possède sa propre espérance.\n' +
              '• **Formule générale** : $P = \\sum_{t=1}^{T} \\frac{p_t \\times C_t}{(1 + i)^t} = \\sum_{t=1}^{T} p_t C_t (1 + i)^{-t}$.\n' +
              '• **Lecture terme à terme** : à chaque date $t$, on multiplie la probabilité de sinistre $p_t$ par l’indemnité $C_t$, puis on actualise par $(1+i)^{-t}$ et on additionne.\n' +
              'Exemple : sur 2 ans ($i = 4\\,\\%$), si l’an 1 a $p_1 C_1 = 10\\,000$ et l’an 2 a $p_2 C_2 = 15\\,000$, alors $P = \\frac{10\\,000}{1{,}04} + \\frac{15\\,000}{(1{,}04)^2} \\approx 9\\,615 + 13\\,868 = 23\\,483\\text{ FCFA}$.',
            formula: {
              name: 'Prime pure actualisée multi-périodes',
              formula: 'P = \\sum_{t=1}^{T} p_t \\cdot C_t \\cdot (1 + i)^{-t}',
              note: 'Somme des pertes espérées actualisées année par année.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p4_q2',
              type: 'mcq',
              prompt:
                'Lorsque les probabilités p_t et capitaux C_t varient à chaque période t = 1, ..., T, comment calcule-t-on la prime pure unique actualisée au taux technique i ?',
              options: [
                'P = ∑ (p_t × C_t) × (1 + i)^t',
                'P = ∑ [p_t × C_t × (1 + i)⁻ᵗ]',
                'P = (p_1 × C_1) / T',
                'P = p_T × C_T × i',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque perte espérée p_t × C_t de la période t est ramenée à aujourd’hui en la multipliant par le facteur d’actualisation (1 + i)⁻ᵗ.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Probabilités constantes',
            stepTheme: 'violet',
            stepTitle: 'Formule fermée quand p et c sont constants + cotisation moyenne',
            paragraphText:
              'Lorsque la probabilité $p$ et le montant $c$ du sinistre restent identiques chaque année pendant $T$ ans, la somme géométrique se simplifie.\n' +
              '• **Formule fermée** : $P = p \\cdot c \\cdot \\frac{1 - (1 + i)^{-T}}{i}$.\n' +
              '• **Cotisation moyenne annuelle (CM)** pour un groupe de $n$ assurés mutualisant une perte annuelle $p \\cdot c$ : $\\text{CM} = \\frac{p \\cdot c}{n}$.\n' +
              '• **Cohérence** : quand $i \\to 0$, $\\frac{1 - (1+i)^{-T}}{i} \\to T$, on retrouve simplement $P = T \\times p \\times c$ (absence d’actualisation).\n' +
              'Exemple : avec $p \\cdot c = 50\\,000\\text{ FCFA}/\\text{an}$ sur $T = 3\\text{ ans}$ à $i = 5\\,\\%$, $\\frac{1 - 1{,}05^{-3}}{0{,}05} \\approx 2{,}7232$, donc $P \\approx 136\\,162\\text{ FCFA}$ (contre 150 000 FCFA sans actualisation).',
            formula: {
              name: 'Prime pure actualisée à risque annuel constant',
              formula: 'P = p \\cdot c \\cdot \\frac{1 - (1 + i)^{-T}}{i}',
              note: 'Toujours inférieure à T × p × c dès que i > 0 grâce aux produits financiers.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p4_q3',
              type: 'mcq',
              prompt:
                'Un risque annuel constant a une perte espérée p · c = 50 000 FCFA/an pendant 3 ans (taux technique 5 %, facteur d’actualisation (1 − 1,05⁻³)/0,05 ≈ 2,7232). Que vaut la prime pure actualisée sur les 3 ans ?',
              options: [
                '50 000 FCFA',
                '136 160 FCFA',
                '150 000 FCFA',
                '165 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'P = 50 000 × 2,7232 ≈ 136 160 FCFA (inférieure à 3 × 50 000 = 150 000 FCFA grâce à l’actualisation).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Rente éducation',
            stepTheme: 'green',
            stepTitle: 'Calculer la valeur actuelle d’une rente éducation annuelle',
            paragraphText:
              'Pour protéger la scolarité d’un enfant en cas de décès du parent, les assureurs constituent un capital exactement égal à la **valeur actuelle de la rente**.\n' +
              '• **Énoncé type** : verser $R = 500\\,000\\text{ FCFA/an}$ pendant $n = 4\\text{ ans}$ au taux technique $i = 2\\,\\%$.\n' +
              '• **Formule** : $VA = R \\cdot \\frac{1 - (1 + i)^{-n}}{i} = 500\\,000 \\cdot \\frac{1 - (1{,}02)^{-4}}{0{,}02}$.\n' +
              '• **Calcul pas à pas** : $(1{,}02)^{-4} \\approx 0{,}923845$ → $1 - 0{,}923845 = 0{,}076155$ → $\\frac{0{,}076155}{0{,}02} \\approx 3{,}80773$ → $VA \\approx 1\\,903\\,864\\text{ FCFA}$.\n' +
              '• **Interprétation** : $1\\,903\\,864\\text{ FCFA}$ placés à 2 % permettent de payer exactement 4 versements de 500 000 FCFA (= 2 000 000 FCFA au total) grâce aux intérêts produits.',
            konanTip:
              'Vérification rapide : la valeur actuelle d’une rente de 4 fois 500 000 FCFA doit être **légèrement inférieure** à $4 \\times 500\\,000 = 2\\,000\\,000\\text{ FCFA}$ (ici $1\\,903\\,864\\text{ FCFA}$). Si tu trouves plus de 2 millions, il y a une erreur de signe dans l’exposant !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p4_q4',
              type: 'mcq',
              prompt:
                'Un parent veut garantir à son enfant une rente éducation de 500 000 FCFA/an pendant 4 ans au taux technique de 2 % (avec (1,02)⁻⁴ ≈ 0,923845). Quel capital doit être constitué ?',
              options: [
                '1 500 000 FCFA',
                '1 903 865 FCFA',
                '2 000 000 FCFA',
                '2 080 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'VA = 500 000 × (1 − 0,923845) / 0,02 = 500 000 × 3,80773 ≈ 1 903 865 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Périodicité 12 mois',
            stepTheme: 'orange',
            stepTitle: 'Attention aux rentes mensuelles : convertir taux annuel et durée en mois',
            paragraphText:
              'Lorsqu’une rente est versée tous les mois pendant plusieurs années, utiliser le taux annuel $i$ avec $n = 120$ mois serait une erreur majeure.\n' +
              '• **Données** : rente de conjoint survivant $R_m = 200\\,000\\text{ FCFA/mois}$ pendant 10 ans ($n = 10 \\times 12 = 120\\text{ mois}$) au taux technique annuel $i = 2\\,\\%$.\n' +
              '• **Conversion actuarielle exacte** : $i_m = (1{,}02)^{1/12} - 1 \\approx 0{,}0016516$ (soit $0{,}16516\\,\\%$/mois). Alors $VA = 200\\,000 \\times \\frac{1 - (1 + i_m)^{-120}}{i_m} \\approx 21\\,757\\,860\\text{ FCFA}$.\n' +
              '• **Approximation proportionnelle** ($i_m = 0{,}02 / 12 \\approx 0{,}0016667$) : donne $VA \\approx 21\\,739\\,800\\text{ FCFA}$ (très proche, utile pour vérifier l’ordre de grandeur sous les 24 millions nominaux).',
            keyRule:
              'Toujours accorder la périodicité de la rente ($n = 120$ mois) et celle du taux ($i_m$ mensuel) ; le résultat reste inférieur au total nominal $120 \\times 200\\,000 = 24\\,000\\,000\\text{ FCFA}$.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p4_q5',
              type: 'mcq',
              prompt:
                'Pour calculer la valeur actuelle d’une rente de conjoint survivant de 200 000 FCFA/mois pendant 10 ans au taux technique annuel de 2 %, quel ordre de grandeur et quels paramètres sont cohérents ?',
              options: [
                'n = 10 et i = 2 % → VA ≈ 1,8 million FCFA',
                'n = 120 mois et taux mensuel équivalent ≈ 0,165 % → VA ≈ 21,75 millions FCFA (inférieur aux 24 M nominaux)',
                'n = 120 mois et i = 2 % par mois → VA ≈ 2,4 millions FCFA',
                'VA = 24 millions FCFA exactement quelle que soit la valeur du taux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur 120 mensualités de 200 000 FCFA (total nominal = 24 M), l’actualisation à 2 % l’an ramène le capital constitutif autour de 21,75 millions FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Capitalisation',
            stepTheme: 'slate',
            stepTitle: 'Cas inverse : calculer la valeur acquise de primes épargnées sur 3 ans',
            paragraphText:
              'Opposons actualisation (ramener le futur au présent) et **capitalisation** (projeter des versements réguliers dans le futur).\n' +
              '• **Énoncé** : un assuré verse $300\\,000\\text{ FCFA}$ au début de chaque année pendant 3 ans (Année 1, Année 2, Année 3) sur un contrat rapportant $r = 4\\,\\%$ par an.\n' +
              '• **Capitalisation flux par flux (versements en début d’année)** :\n' +
              '  - Versement 1 (placé 3 ans) : $300\\,000 \\times (1{,}04)^3 = 337\\,459\\text{ FCFA}$.\n' +
              '  - Versement 2 (placé 2 ans) : $300\\,000 \\times (1{,}04)^2 = 324\\,480\\text{ FCFA}$.\n' +
              '  - Versement 3 (placé 1 an) : $300\\,000 \\times (1{,}04)^1 = 312\\,000\\text{ FCFA}$.\n' +
              '• **Valeur acquise totale au bout de 3 ans** : $337\\,459 + 324\\,480 + 312\\,000 = 973\\,939\\text{ FCFA}$ (pour $900\\,000\\text{ FCFA}$ versés ; si versements en fin d’année : $936\\,480\\text{ FCFA}$).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p4_q6',
              type: 'mcq',
              prompt:
                'Un contrat reçoit 300 000 FCFA en début de chaque année pendant 3 ans au taux annuel de 4 %. Quelle est la valeur acquise au bout des 3 ans ?',
              options: ['900 000 FCFA', '936 480 FCFA', '973 939 FCFA', '1 012 000 FCFA'],
              correctAnswerIndex: 2,
              explanation:
                '300 000 × (1,04³ + 1,04² + 1,04) = 337 459 + 324 480 + 312 000 = 973 939 FCFA.',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 3 : BRANCHES D'ASSURANCE — ASSURANCE VIE VS ASSURANCE DOMMAGES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch3',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Assurance',
    title: 'Chapitre 3 — Branches d’assurance : Assurance Vie vs Assurance Dommages',
    summary:
      'Distinction Assurance Vie (principe forfaitaire : temporaire décès, épargne-capitalisation, valeur acquise, rachat avant 8 ans, rente éducation) et Assurance Non-Vie / Dommages (principe indemnitaire : RC obligatoire, dommages collision, franchise, règle proportionnelle de sous-assurance, coassurance et réassurance).',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_assurance_ch3_p1',
        order: 1,
        title: 'Assurance Vie : temporaire décès, épargne-capitalisation, valeur de rachat et rente éducation',
        summary:
          'Définition de l’assurance vie, produits (temporaire décès, épargne, mixte, rente éducation), calcul du capital restant dû, valeur acquise, frais de rachat avant 8 ans et fiscalité avantageuse.',
        conceptExplanation:
          'L’**assurance vie** est un contrat de prévoyance et de placement financier à long terme permettant de **constituer et faire fructifier un capital** tout en **protégeant et transmettant** un patrimoine à des bénéficiaires désignés en cas de décès.\n\n' +
          '1. **Principe forfaitaire** : contrairement à l’assurance dommages, la prestation versée (capital ou rente) est fixée à l’avance par le contrat (pas d’évaluation d’un préjudice matériel) ; il est donc possible de cumuler plusieurs contrats vie.\n\n' +
          '2. **Grandes familles de produits** :\n' +
          '• **Temporaire décès** : garantit un capital aux proches uniquement si l’assuré décède pendant une durée déterminée (ex. durée d’un prêt immobilier, capital ajusté au **capital restant dû**).\n' +
          '• **Assurance vie épargne / capitalisation** : accumule des primes revalorisées par un taux garanti + une participation aux bénéfices (PB). En cas de retrait anticipé (**rachat avant 8 ans**), des frais de rachat s’appliquent.\n' +
          '• **Rente éducation / rente de conjoint** : verse un revenu périodique garanti pour financer les études des enfants ou le train de vie du conjoint survivant.\n\n' +
          '3. **Atout fiscal et successoral** : les gains bénéficient d’une fiscalité très favorable, particulièrement **après 8 ans** de détention, et le capital est transmis hors succession aux bénéficiaires désignés.',
        formulas: [
          {
            name: 'Valeur acquise et valeur de rachat nette (avant 8 ans)',
            formula: 'VA_n = C_0 (1 + r_{\\text{garanti}} + r_{\\text{PB}})^n \\quad ; \\quad VR_{\\text{nette}} = VA_n \\times (1 - f_{\\text{rachat}})',
            note: 'Avec r_garanti le taux minimum garanti, r_PB la participation aux bénéfices et f_rachat les frais de rachat anticipé.',
          },
        ],
        keyRule:
          'L’assurance vie obéit au **principe forfaitaire** (capital fixé au contrat, cumulable) et offre trois fonctions complémentaires : **épargner** (capitalisation), **protéger** (temporaire décès, rente éducation) et **transmettre** (fiscalité allégée après 8 ans).',
        workedExample: {
          title: 'Calculer une valeur acquise et une valeur de rachat nette après 6 ans',
          statement:
            'Un assuré détient un contrat d’assurance vie épargne ouvert depuis 6 ans avec un versement unique de 2 000 000 FCFA. Le taux garanti annuel est de 2,5 %, la participation aux bénéfices moyenne est de 1,5 % et les frais de rachat avant 8 ans s’élèvent à 3 %. Calculez la valeur acquise avant frais puis la valeur de rachat nette.',
          methodSteps: [
            'Taux de rendement annuel global : r = 2,5 % + 1,5 % = 4 % (soit 0,04).',
            'Valeur acquise avant frais au bout de 6 ans : VA₆ = 2 000 000 × (1,04)⁶ ≈ 2 000 000 × 1,265319 = 2 530 638 FCFA.',
            'Frais de rachat anticipé (3 % avant 8 ans) : 2 530 638 × 0,03 = 75 919 FCFA.',
            'Valeur de rachat nette perçue par l’assuré : 2 530 638 − 75 919 = 2 454 719 FCFA.',
          ],
          conclusion:
            'Valeur acquise brute = 2 530 638 FCFA ; valeur de rachat nette après 3 % de frais = 2 454 719 FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Vie vs Non-Vie',
            stepTheme: 'blue',
            stepTitle: 'Panorama des produits d’assurance vie et principe forfaitaire',
            paragraphText:
              'L’assurance vie répond à des événements liés à la durée de la vie humaine (survie à une échéance ou décès prématuré) selon un **principe forfaitaire**.\n' +
              '• **Principe forfaitaire** : la vie humaine n’a pas de prix marchand ; le capital ou la rente est librement fixé au contrat et plusieurs contrats peuvent se cumuler.\n' +
              '• **Assurance en cas de décès (temporaire décès, vie entière)** : protège la famille ou un créancier contre la disparition prématurée de l’assuré.\n' +
              '• **Assurance en cas de vie (épargne, retraite, capitalisation)** : constitue un capital progressif versé si l’assuré est en vie au terme.\n' +
              '• **Contrats mixtes et rente éducation** : combinent protection décès et constitution d’un financement scolaire ou familial.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Comparaison stratégique : Assurance Vie vs Assurance Non-Vie (Dommages)',
              caption: 'Opposition entre logique forfaitaire (personnes & épargne) et logique indemnitaire (biens & responsabilités).',
              matrix2x2: {
                topAxis: ['Assurance VIE (Personnes)', 'Assurance NON-VIE (Dommages)'],
                leftAxis: ['Principe & Durée', 'Produits & Exemples'],
                topLeft: {
                  title: 'Principe forfaitaire — Long terme',
                  color: 'blue',
                  items: [
                    'Prestation fixée librement au contrat',
                    'Cumul possible de plusieurs contrats',
                    'Horizon long (épargne, retraite, décès)',
                  ],
                },
                topRight: {
                  title: 'Principe indemnitaire — Court terme',
                  color: 'orange',
                  items: [
                    'Indemnité ≤ préjudice réel subi',
                    'Interdiction d’enrichissement sans cause',
                    'Contrats annuels renouvelables',
                  ],
                },
                bottomLeft: {
                  title: 'Produits Vie phares',
                  color: 'green',
                  items: [
                    'Temporaire décès (emprunteur)',
                    'Épargne-capitalisation & Retraite',
                    'Rente éducation / conjoint survivant',
                  ],
                },
                bottomRight: {
                  title: 'Produits Non-Vie phares',
                  color: 'violet',
                  items: [
                    'Auto (RC obligatoire + Dommages)',
                    'Multirisque habitation / Incendie',
                    'RC Professionnelle, Santé, Transport',
                  ],
                },
              },
            },
            keyRule:
              'Retiens la frontière fondamentale : **Assurance Vie = principe forfaitaire** (capital convenu, cumulable) vs **Assurance Non-Vie = principe indemnitaire** (réparation exacte du dommage).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les situations suivantes, laquelle relève spécifiquement de la branche Assurance Vie ?',
              options: [
                'Un conducteur souhaite réparer sa voiture après une collision responsable',
                'Un commerçant veut couvrir les dommages causés à ses clients dans sa boutique',
                'Un jeune salarié souhaite épargner progressivement pour préparer sa retraite et garantir un capital à sa famille',
                'Une famille souhaite protéger sa maison contre l’incendie',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La préparation de la retraite par épargne-capitalisation et la garantie d’un capital décès relèvent de l’assurance vie, tandis que l’auto, la RC commerçant et l’incendie habitation sont des assurances dommages (Non-Vie).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Temporaire décès',
            stepTheme: 'green',
            stepTitle: 'Dimensionner le capital assuré en temporaire décès (emprunteur)',
            paragraphText:
              'La **temporaire décès** est le contrat de prévoyance le plus efficace pour protéger un foyer endetté à coût maîtrisé.\n' +
              '• **Cas concret** : un client de 40 ans veut couvrir pendant 15 ans un prêt immobilier initial de $25\\,000\\,000\\text{ FCFA}$ dont $5\\,000\\,000\\text{ FCFA}$ sont déjà remboursés.\n' +
              '• **Capital à assurer** : uniquement le **capital restant dû**, soit $25\\,000\\,000 - 5\\,000\\,000 = 20\\,000\\,000\\text{ FCFA}$.\n' +
              '• **Pourquoi ne pas assurer les 25 millions initiaux ?** Parce que la tranche de 5 millions déjà remboursée n’est plus une dette ; la surassurer ferait payer inutilement une prime plus élevée sans besoin réel de couverture de dette.',
            formula: {
              name: 'Capital assuré en temporaire décès emprunteur',
              formula: 'C_{\\text{assuré}} = \\text{Prêt initial} - \\text{Capital déjà remboursé} = \\text{Capital restant dû}',
              note: 'Beaucoup de contrats emprunteurs utilisent un capital décroissant qui suit exactement le tableau d’amortissement.',
            },
            konanTip:
              'En temporaire décès pure, si l’assuré est toujours en vie au terme des 15 ans, les primes restent acquises à la mutualité (« fonds perdus »), ce qui explique pourquoi la prime est très abordable !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Un emprunteur a contracté un prêt immobilier de 25 000 000 FCFA et a déjà remboursé 5 000 000 FCFA. Quel capital doit-il assurer en temporaire décès pour solder exactement sa dette en cas de décès ?',
              options: [
                '5 000 000 FCFA',
                '20 000 000 FCFA (le capital restant dû)',
                '25 000 000 FCFA obligatoirement',
                '30 000 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le risque financier à couvrir correspond uniquement au capital restant dû : 25 000 000 − 5 000 000 = 20 000 000 FCFA. Assurer davantage génère un surcoût de prime inutile.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Conseil patrimonial',
            stepTheme: 'green',
            stepTitle: 'Analyser les besoins d’un ménage : épargne scolaire vs temporaire décès',
            paragraphText:
              'Un conseiller en assurance doit distinguer deux objectifs souvent confondus par les parents : **épargner** progressivement vs **protéger immédiatement** contre un décès prématuré.\n' +
              '• **Assurance épargne scolaire** : accumule un capital au fil des années ; si le parent décède dès l’année 1, le capital épargné est encore très faible.\n' +
              '• **Temporaire décès / Rente éducation** : garantit immédiatement dès le premier jour un capital ou une rente annuelle suffisante pour payer l’intégralité des études en cas de décès.\n' +
              '• **Cas d’un couple** (revenus 650 000 + 450 000 = 1 100 000 FCFA/mois ; charges fixes : prêt 350 000 + scolarité 120 000 + vie courante 300 000 = 770 000 FCFA) : si le père disparaît, le salaire restant (450 000 FCFA) ne couvre plus les 770 000 FCFA de charges ! Il faut prioritairement une **temporaire décès** (pour solder le prêt) + une **rente éducation** pour les enfants.',
            keyRule:
              'Si l’objectif prioritaire est de **garantir les études en cas de décès du parent**, recommande la **temporaire décès / rente éducation** (protection immédiate), et non une simple épargne scolaire.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Un couple veut garantir que les études universitaires de sa fille seront financées même si l’un des parents décède dès l’an prochain. Quel produit est le plus adapté ?',
              options: [
                'Une assurance automobile au tiers',
                'Une assurance temporaire décès ou rente éducation, qui garantit immédiatement le financement en cas de décès prématuré',
                'Une simple épargne bancaire sans couverture décès',
                'Une assurance incendie habitation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’épargne simple ne produit qu’un faible capital les premières années. Seule une temporaire décès ou une rente éducation couvre immédiatement le risque de décès prématuré.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Rachat avant 8 ans',
            stepTheme: 'green',
            stepTitle: 'Calculer la valeur acquise et la valeur de rachat nette',
            paragraphText:
              'Sur un contrat d’assurance vie épargne, l’épargne placée fructifie chaque année grâce à deux composantes cumulées :\n' +
              '• **Taux de rendement total ($r$)** : somme du **taux minimum garanti** (ex. $2{,}5\\,\\%$) et de la **participation aux bénéfices (PB)** redistribuée par l’assureur (ex. $1{,}5\\,\\%$), soit $r = 4\\,\\%$.\n' +
              '• **Valeur acquise brute après $n$ années** : $VA_n = C_0 (1 + r)^n$. Pour $C_0 = 2\\,000\\,000\\text{ FCFA}$ sur 6 ans : $VA_6 = 2\\,000\\,000 \\times (1{,}04)^6 \\approx 2\\,530\\,638\\text{ FCFA}$.\n' +
              '• **Frais de rachat anticipé** : en cas de retrait avant 8 ans (ex. $3\\,\\%$), la valeur de rachat nette vaut $VR = VA_6 \\times (1 - 0{,}03) \\approx 2\\,454\\,719\\text{ FCFA}$.',
            formula: {
              name: 'Capitalisation et rachat net',
              formula: 'VA_6 = 2\\,000\\,000 \\times (1 + 0{,}025 + 0{,}015)^6 \\approx 2\\,530\\,638 \\quad ; \\quad VR_{\\text{net}} = VA_6 \\times 0{,}97 \\approx 2\\,454\\,719',
              note: 'Les frais de rachat s’appliquent sur la valeur acquise au moment de la sortie anticipée.',
            },
            konanTip:
              'Ne confonds pas le taux garanti seul (2,5 %) avec le rendement global servi : additionne toujours **taux garanti + participation aux bénéfices** avant de capitaliser !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Un contrat d’assurance vie reçoit 2 000 000 FCFA et sert 2,5 % de taux garanti + 1,5 % de participation aux bénéfices pendant 6 ans ((1,04)⁶ ≈ 1,26532). Avec 3 % de frais de rachat avant 8 ans, quelle est la valeur de rachat nette ?',
              options: [
                '2 000 000 FCFA',
                '2 454 719 FCFA',
                '2 530 638 FCFA',
                '2 606 557 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Taux global = 4 %. Valeur acquise = 2 000 000 × 1,265319 = 2 530 638 FCFA. Après 3 % de frais de rachat (75 919 FCFA), la valeur de rachat nette vaut 2 454 719 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Fiscalité 8 ans',
            stepTheme: 'violet',
            stepTitle: 'Avantages fiscaux après 8 ans et transmission du capital',
            paragraphText:
              'Pourquoi les États et le cadre CIMA accordent-ils un régime fiscal privilégié à l’assurance vie ? Pour encourager l’épargne longue qui finance les infrastructures et l’économie nationale.\n' +
              '• **Seuil des 8 ans** : les gains (intérêts et participation aux bénéfices) générés sur un contrat d’assurance vie bénéficient d’une **fiscalité particulièrement avantageuse après 8 ans** de détention (exonération ou abattement fort sur les produits).\n' +
              '• **Clause bénéficiaire** : l’assuré désigne librement un ou plusieurs bénéficiaires (conjoint, enfants, tiers) qui reçoivent le capital directement en cas de décès.\n' +
              '• **Transmission facilitée** : le versement s’effectue rapidement et dans un cadre successoral allégé, évitant le blocage financier des proches au moment du décès.',
            keyRule:
              'L’assurance vie est à la fois un **placement à fiscalité allégée après 8 ans** et un **outil de transmission privilégié** grâce à la clause bénéficiaire.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'À partir de quelle durée de détention la fiscalité sur les gains d’un contrat d’assurance vie devient-elle généralement la plus avantageuse ?',
              options: [
                'Après 6 mois',
                'Après 2 ans',
                'Après 8 ans',
                'Uniquement après 30 ans',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les gains générés sur les contrats d’assurance vie bénéficient d’une fiscalité particulièrement avantageuse après 8 ans de détention, ce qui incite à l’épargne de long terme.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Pédagogie client',
            stepTheme: 'slate',
            stepTitle: 'Expliquer l’assurance vie simplement à un client novice',
            paragraphText:
              'En entretien commercial, un client qui dit « Je n’y connais rien, c’est quoi une assurance vie ? » attend une explication claire, sans jargon actuariel.\n' +
              '• **Image simple** : « C’est une **tirelire intelligente** doublée d’un **bouclier familial** ».\n' +
              '• **1. Vous épargnez à votre rythme** : votre argent est placé en sécurité et rapporte des intérêts chaque année pour vos projets (retraite, études, immobilier).\n' +
              '• **2. Vous protégez vos proches** : en cas de décès, le capital constitué (ou garanti) est versé directement aux personnes que vous avez choisies.\n' +
              '• **3. Votre argent reste disponible** : contrairement à une idée reçue, l’épargne n’est pas bloquée jusqu’au décès — vous pouvez effectuer un rachat partiel ou total en cas de besoin.',
            konanTip:
              'Idée reçue n° 1 à déconstruire en entretien : « L’assurance vie ne sert que quand on meurt ! » Faux : c’est avant tout un placement dont l’assuré profite **de son vivant** grâce aux rachats ou au terme du contrat.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle affirmation corrige le mieux l’idée reçue selon laquelle « l’assurance vie ne profite jamais au souscripteur de son vivant » ?',
              options: [
                'L’assurance vie interdit tout retrait avant 90 ans',
                'Un contrat d’assurance vie épargne permet de récupérer son capital et ses gains de son vivant (au terme ou par rachat), tout en protégeant des bénéficiaires en cas de décès',
                'L’assurance vie rembourse uniquement les réparations automobiles',
                'Les primes versées sont automatiquement confisquées par la banque',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance vie épargne est un contrat de placement dont le souscripteur profite directement de son vivant (rachat ou échéance), tout en assurant la transmission en cas de décès.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_assurance_ch3_p2',
        order: 2,
        title: 'Assurance Non-Vie (Dommages) : RC obligatoire, Dommages collision et franchise',
        summary:
          'Définition de l’assurance dommages, mécanisme de la Responsabilité Civile (RC) automobile obligatoire, garantie Dommages collision avec franchise, et Responsabilité Civile Professionnelle (RCP).',
        conceptExplanation:
          'L’**assurance non-vie** (ou **assurance dommages**) est un contrat par lequel l’assureur s’engage, moyennant une prime, à indemniser l’assuré ou un tiers en cas de survenance d’un événement aléatoire affectant un **bien**, une **personne** (frais médicaux/accidents) ou une **responsabilité**.\n\n' +
          '1. **Deux grandes catégories en Non-Vie** :\n' +
          '• **Assurances de biens (choses)** : protègent le patrimoine propre de l’assuré (incendie, vol, bris de machine, dommages au véhicule de l’assuré).\n' +
          '• **Assurances de responsabilité (RC)** : indemnisent les **tiers** (victimes) auxquels l’assuré a causé un dommage corporel ou matériel par sa faute ou par les choses dont il a la garde.\n\n' +
          '2. **Cas emblématique de l’assurance automobile** :\n' +
          '• **RC obligatoire (« au tiers »)** : couvre **uniquement les dommages causés aux tiers** (piéton, motocycliste, autre conducteur, passagers). Elle n’indemnise **jamais** les dommages au véhicule du conducteur responsable.\n' +
          '• **Garantie Dommages collision (ou Tous Risques)** : garantie facultative qui indemnise le propre véhicule de l’assuré même s’il est responsable, déduction faite de la **franchise** contractuelle.\n\n' +
          '3. **Responsabilité Civile Professionnelle (RCP)** : protège les professionnels (médecin, avocat, architecte, ESN) contre les conséquences financières d’une faute ou erreur causant un préjudice à un client ou patient.',
        formulas: [
          {
            name: 'Indemnisation automobile (RC + Dommages collision)',
            formula: 'I_{\\text{RC}} = \\sum \\text{Dommages corporels et matériels des tiers} \\quad ; \\quad I_{\\text{véhicule assuré}} = \\max(0,\\; D_{\\text{assuré}} - \\text{Franchise})',
            note: 'La franchise ne s’applique pas aux victimes tierces en RC obligatoire : les tiers sont indemnisés intégralement.',
          },
        ],
        keyRule:
          'La **Responsabilité Civile (RC)** indemnise **uniquement les tiers victimes** ; pour faire réparer son propre véhicule après un accident responsable, l’assuré doit détenir une garantie **Dommages collision** ou **Tous risques** (souvent avec franchise).',
        workedExample: {
          title: 'Régler un sinistre automobile responsable impliquant un piéton',
          statement:
            'Un assuré heurte un piéton à un carrefour. Bilan : soins médicaux du piéton = 300 000 FCFA ; téléphone du piéton = 120 000 FCFA ; dommages au véhicule de l’assuré = 450 000 FCFA. Le contrat comporte RC obligatoire + Dommages collision avec franchise de 100 000 FCFA. Calculez les indemnisations.',
          methodSteps: [
            'Identifier les dommages causés au tiers (le piéton) : 300 000 FCFA (corporel) + 120 000 FCFA (matériel) = 420 000 FCFA.',
            'Montant indemnisé par la RC obligatoire : 420 000 FCFA intégralement versés au piéton (aucune franchise opposable à la victime).',
            'Vérifier la garantie du véhicule de l’assuré : le contrat inclut bien « Dommages collision », donc le véhicule est pris en charge.',
            'Appliquer la franchise de 100 000 FCFA : indemnité véhicule = 450 000 − 100 000 = 350 000 FCFA (les 100 000 FCFA restent à charge de l’assuré).',
          ],
          conclusion:
            'RC = 420 000 FCFA pour le piéton ; Dommages collision = 350 000 FCFA pour le véhicule de l’assuré (total déboursé par l’assureur : 770 000 FCFA).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Assurance Dommages',
            stepTheme: 'blue',
            stepTitle: 'Structure de la branche Non-Vie : biens vs responsabilité',
            paragraphText:
              'L’assurance Non-Vie protège le patrimoine des ménages et des entreprises contre les coups durs qui réduisent un actif ou créent une dette de réparation.\n' +
              '• **Assurances de biens (de choses)** : indemnisent la perte ou la détérioration d’un bien appartenant à l’assuré (incendie d’un bâtiment, vol de marchandises, bris de glace, dommages collision auto).\n' +
              '• **Assurances de responsabilité (RC)** : prennent en charge les sommes que l’assuré est légalement tenu de verser à un tiers victime d’un préjudice.\n' +
              '• **Assurances de personnes non-vie** : remboursement de frais de santé (maladie) et garanties accidents corporels à court terme.',
            keyRule:
              'En Non-Vie, demande-toi toujours **qui subit la perte** : le bien de l’assuré (assurance de choses) ou un tiers lésé par l’assuré (assurance de responsabilité civile).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Un commerçant souhaite se couvrir contre les dommages corporels qu’un client pourrait subir en glissant dans son magasin. De quelle garantie s’agit-il ?',
              options: [
                'Assurance vie épargne-retraite',
                'Assurance de Responsabilité Civile (exploitation / professionnelle)',
                'Assurance temporaire décès',
                'Assurance bris de machine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le dommage est subi par un tiers (le client) dans le magasin du commerçant : c’est la garantie Responsabilité Civile qui intervient pour indemniser la victime.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'RC obligatoire',
            stepTheme: 'slate',
            stepTitle: 'Sinistre auto responsable avec un motocycliste : le périmètre exact de la RC',
            paragraphText:
              'Analysons un accident de circulation très fréquent à Abidjan : un automobiliste assuré uniquement en **Responsabilité Civile (RC) obligatoire** heurte un motocycliste.\n' +
              '• **Dommages du tiers (motocycliste)** : dommages matériels sur la moto = $350\\,000\\text{ FCFA}$ ; frais médicaux du motocycliste = $420\\,000\\text{ FCFA}$.\n' +
              '• **Indemnisation par la RC** : la compagnie paie l’intégralité des dommages causés au tiers, soit $350\\,000 + 420\\,000 = 770\\,000\\text{ FCFA}$.\n' +
              '• **Véhicule de l’assuré ($500\\,000\\text{ FCFA}$)** : **non indemnisé** ! La RC obligatoire ne couvre jamais les dommages subis par le véhicule du conducteur responsable.',
            keyRule:
              'Avec la seule **RC obligatoire**, l’assureur indemnise **100 % des dommages corporels et matériels des tiers** ($770\\,000\\text{ FCFA}$ ici), mais **0 FCFA** pour le propre véhicule de l’assuré responsable.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Un conducteur assuré uniquement en RC obligatoire percute un motocycliste (moto : 350 000 FCFA ; soins du motocycliste : 420 000 FCFA ; voiture du conducteur : 500 000 FCFA). Quel montant verse la RC et la voiture du conducteur est-elle prise en charge ?',
              options: [
                'RC = 770 000 FCFA ; la voiture de l’assuré n’est pas indemnisée',
                'RC = 1 270 000 FCFA ; tout est pris en charge',
                'RC = 350 000 FCFA ; seuls les dégâts matériels sont couverts',
                'RC = 500 000 FCFA ; seule la voiture du conducteur est réparée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La RC couvre tous les dommages corporels et matériels causés au tiers (350 000 + 420 000 = 770 000 FCFA), jamais le véhicule du conducteur responsable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Dommages + Franchise',
            stepTheme: 'green',
            stepTitle: 'Combiner RC obligatoire et garantie Dommages collision avec franchise',
            paragraphText:
              'Ajoutons maintenant une garantie **Dommages collision** assortie d’une **franchise de $100\\,000\\text{ FCFA}$** lors d’un accident responsable impliquant un piéton.\n' +
              '• **Bilan du sinistre** : soins médicaux du piéton = $300\\,000\\text{ FCFA}$, téléphone cassé du piéton = $120\\,000\\text{ FCFA}$, dommages au véhicule de l’assuré = $450\\,000\\text{ FCFA}$.\n' +
              '• **Volet 1 — Garantie RC** : indemnise intégralement le piéton (tiers), soit $300\\,000 + 120\\,000 = 420\\,000\\text{ FCFA}$.\n' +
              '• **Volet 2 — Garantie Dommages collision** : le tiers étant identifié (collision avec un piéton), le véhicule de l’assuré est couvert à hauteur de $450\\,000 - 100\\,000 = 350\\,000\\text{ FCFA}$.',
            visualSchema: {
              type: 'flowchart',
              title: 'Circuit de règlement d’un sinistre auto responsable (RC + Dommages Collision)',
              caption: 'Séparation stricte entre l’indemnisation intégrale du tiers (RC) et la réparation du véhicule assuré sous franchise.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1. Déclaration du sinistre responsable',
                    sublabel: 'Tiers identifié (piéton / véhicule) + dommages propres',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: '2. Volet RC obligatoire → Tiers victime',
                    sublabel: 'Soins (300k) + Téléphone (120k) = 420 000 FCFA (sans franchise)',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    label: '3. Garantie Dommages Collision souscrite ?',
                    sublabel: 'Vérification des conditions particulières du contrat',
                    kind: 'decision',
                    color: 'violet',
                    branchLabel: 'Non (RC seule) → 0 FCFA pour le véhicule',
                  },
                  {
                    label: '4. Calcul indemnité véhicule assuré',
                    sublabel: 'Dommages (450k) − Franchise (100k) = 350 000 FCFA versés',
                    kind: 'end',
                    color: 'orange',
                  },
                ],
              },
            },
            konanTip:
              'Piège fréquent : n’applique **jamais** la franchise dommages collision sur l’indemnité versée au piéton ! La franchise ne s’impute que sur la réparation du véhicule de l’assuré.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Un assuré (RC + Dommages collision, franchise 100 000 FCFA) heurte un piéton : soins piéton 300 000 FCFA, téléphone piéton 120 000 FCFA, voiture de l’assuré 450 000 FCFA. Quelles indemnités verse l’assureur ?',
              options: [
                '320 000 FCFA en RC et 450 000 FCFA pour la voiture',
                '420 000 FCFA en RC pour le piéton et 350 000 FCFA pour la voiture de l’assuré',
                '420 000 FCFA en RC et 0 FCFA pour la voiture',
                '300 000 FCFA en RC et 350 000 FCFA pour la voiture',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le piéton reçoit 300 000 + 120 000 = 420 000 FCFA par la RC (sans franchise). La voiture de l’assuré est indemnisée par la garantie Dommages collision : 450 000 − 100 000 = 350 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'RC Professionnelle',
            stepTheme: 'blue',
            stepTitle: 'La Responsabilité Civile Professionnelle (RCP) : le cas du médecin',
            paragraphText:
              'Dans l’exercice de leur métier, certains professionnels peuvent causer un préjudice grave par une faute, une négligence ou une erreur technique.\n' +
              '• **Cas pratique** : un médecin commet une erreur de diagnostic entraînant des soins supplémentaires et une perte financière pour son patient.\n' +
              '• **Type d’assurance concerné** : **Assurance de Responsabilité Civile Professionnelle (RCP)** médicale (branche Non-Vie).\n' +
              '• **Bénéficiaire de l’indemnisation** : le **patient** (tiers victime), et non le médecin.\n' +
              '• **Base légale** : l’obligation de réparer tout dommage causé à autrui par sa faute (responsabilité civile contractuelle ou délictuelle du Code civil, qui impose la preuve d’une faute, d’un dommage et d’un lien de causalité).',
            keyRule:
              'En **RC Professionnelle**, les trois conditions de mise en jeu sont la **faute** (erreur professionnelle), le **préjudice** subi par le client/patient et le **lien de causalité** entre les deux.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Un médecin commet une erreur de diagnostic causant un préjudice financier à son patient. Quelle assurance intervient et qui en est le bénéficiaire ?',
              options: [
                'L’assurance vie du patient ; bénéficiaire : l’hôpital',
                'La Responsabilité Civile Professionnelle (RCP) du médecin ; bénéficiaire : le patient victime',
                'L’assurance incendie du cabinet ; bénéficiaire : le médecin',
                'La garantie dommages collision ; bénéficiaire : le pharmacien',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La RCP médicale couvre les conséquences financières des fautes professionnelles du praticien ; l’indemnité est versée au patient lésé sur le fondement de la responsabilité civile.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Collision vs Tous risques',
            stepTheme: 'orange',
            stepTitle: 'Condition clé de la garantie Dommages collision : le tiers identifié',
            paragraphText:
              'Une confusion fréquente consiste à croire que « Dommages collision » et « Tous risques » sont identiques.\n' +
              '• **Garantie Dommages collision (ou tierce collision)** : indemnise le véhicule de l’assuré même responsable, **à condition qu’il y ait collision avec un tiers identifié** (autre véhicule, piéton, animal appartenant à un propriétaire identifié).\n' +
              '• **Limite** : si le conducteur heurte seul un arbre, un mur, ou subit un délit de fuite d’un tiers non identifié, la Dommages collision **ne joue pas** — seule une garantie **Tous risques** (dommages tous accidents) couvre ce cas.\n' +
              '• **Types de sinistres** : un même accident peut être **mixte** (à la fois **corporel** si un piéton/passager est blessé et **matériel** pour les véhicules et objets).',
            konanTip:
              'Moyen mnémotechnique : Dommages **COLLISION** exige un choc avec un **tiers identifié** ; **TOUS RISQUES** couvre même si tu heurtes un poteau tout seul !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle différence essentielle sépare une garantie « Dommages collision » d’une garantie « Tous risques » ?',
              options: [
                'La Dommages collision indemnise uniquement les piétons',
                'La Dommages collision exige une collision avec un tiers identifié, alors que la Tous risques couvre aussi les chocs seuls contre un obstacle fixe (arbre, mur)',
                'La Tous risques est gratuite et obligatoire pour tous les véhicules',
                'La Dommages collision relève de l’assurance vie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La garantie Dommages collision ne s’active que face à un tiers identifié (véhicule, piéton), contrairement à la garantie Tous accidents (Tous risques).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Classification',
            stepTheme: 'slate',
            stepTitle: 'Synthèse pratique : associer chaque risque à la bonne branche',
            paragraphText:
              'Savoir classer immédiatement un besoin client entre Vie et Non-Vie est la base de tout métier de l’assurance.\n' +
              '• **Assurer les études d’une fille en cas de décès du parent** → **Assurance Vie** (rente éducation / temporaire décès).\n' +
              '• **Réparer sa propre voiture accidentée** → **Assurance Non-Vie** (dommages collision / tous risques).\n' +
              '• **Épargner pour la retraite** → **Assurance Vie** (épargne-retraite / capitalisation).\n' +
              '• **Couvrir les dommages causés aux clients d’un magasin** → **Assurance Non-Vie** (RC exploitation).\n' +
              '• **Protéger sa maison contre l’incendie** → **Assurance Non-Vie** (multirisque habitation / incendie).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Parmi les cinq besoins suivants, combien relèvent de l’assurance Non-Vie (Dommages) : (1) retraite par capitalisation, (2) incendie maison, (3) RC magasin, (4) réparation de sa voiture accidentée, (5) rente éducation décès ?',
              options: [
                '1 seul besoin',
                '2 besoins',
                '3 besoins (incendie maison, RC magasin, dommages véhicule)',
                'Les 5 besoins',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Incendie maison (2), RC magasin (3) et dommages véhicule (4) sont des assurances Non-Vie (3 besoins). Retraite (1) et rente éducation décès (5) sont des assurances Vie.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_assurance_ch3_p3',
        order: 3,
        title: 'Principe indemnitaire, sous-assurance (règle proportionnelle), coassurance et réassurance',
        summary:
          'Application du principe indemnitaire, calcul de la règle proportionnelle de capitaux en cas de sous-assurance, rôle des franchises et plafonds, partage des grands risques par coassurance et réassurance.',
        conceptExplanation:
          'En assurance dommages, la rigueur financière repose sur deux garde-fous techniques : **encadrer l’indemnisation** (principe indemnitaire, règle proportionnelle, franchises) et **partager les très gros risques** (coassurance et réassurance).\n\n' +
          '1. **Principe indemnitaire** : l’assurance dommages ne peut jamais être une source d’enrichissement pour l’assuré ; l’indemnité versée est au maximum égale au montant réel du préjudice (et limitée au capital assuré).\n\n' +
          '2. **Règle proportionnelle de capitaux (sous-assurance)** : si un assuré déclare un capital assuré $C$ inférieur à la valeur réelle $V$ du bien au jour du sinistre (afin de payer une prime réduite), il devient son propre assureur pour la différence et son indemnité est réduite au prorata :\n' +
          '$I = D \\times \\frac{C_{\\text{assuré}}}{V_{\\text{réelle}}}$ (avec $D$ le montant du dommage).\n\n' +
          '3. **Coassurance (partage horizontal)** : plusieurs compagnies se répartissent directement un risque énorme (usine, port, raffinerie) sur une même police unique pilotée par un **apériteur** ; chaque coassureur n’est engagé que pour sa quote-part.\n\n' +
          '4. **Réassurance (partage vertical)** : « l’assurance des assureurs ». La compagnie directe (la **cédante**) transfère une partie de ses risques à un **réassureur** (ex. **CICA-RE**, Munich Re, Swiss Re) moyennant une prime de réassurance, tout en restant seule responsable vis-à-vis de l’assuré.',
        formulas: [
          {
            name: 'Règle proportionnelle de capitaux (sous-assurance)',
            formula: 'I = D \\times \\frac{C_{\\text{assuré}}}{V_{\\text{réelle}}} \\qquad (\\text{si } C_{\\text{assuré}} < V_{\\text{réelle}})',
            note: 'Si l’assuré n’a assuré que 50 % de la valeur réelle, il ne reçoit que 50 % de tout sinistre partiel.',
          },
        ],
        keyRule:
          'En cas de **sous-assurance** ($C_{\\text{assuré}} < V_{\\text{réelle}}$), la **règle proportionnelle** réduit l’indemnité dans exactement la même proportion : $I = D \\times \\frac{C}{V}$.',
        workedExample: {
          title: 'Appliquer la règle proportionnelle de sous-assurance sur un incendie industriel',
          statement:
            'Une entreprise a assuré son entrepôt pour 100 millions FCFA. Un incendie provoque un dommage estimé à 40 millions FCFA, mais l’expertise révèle que la valeur réelle du bâtiment était de 200 millions FCFA. Calculez l’indemnité versée.',
          methodSteps: [
            'Vérifier la sous-assurance : capital assuré C = 100 M FCFA < valeur réelle V = 200 M FCFA (taux de couverture = 100 / 200 = 50 %).',
            'Appliquer la règle proportionnelle : I = Dommage × (C / V) = 40 M × (100 M / 200 M) = 40 M × 0,5 = 20 millions FCFA.',
            'Interprétation : même si 40 M < 100 M, l’assureur ne verse pas 40 M car la prime payée ne correspondait qu’à la moitié du risque réel ; l’entreprise supporte les 20 M restants.',
          ],
          conclusion:
            'L’indemnité versée s’élève à 20 millions FCFA (au lieu de 40 millions FCFA).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Principe indemnitaire',
            stepTheme: 'blue',
            stepTitle: 'Principe indemnitaire : pourquoi l’assurance ne doit jamais enrichir',
            paragraphText:
              'En assurance dommages, le **principe indemnitaire** est une règle d’ordre public destinée à préserver la moralité du contrat et l’équilibre de la mutualité.\n' +
              '• **Règle absolue** : l’indemnité due par l’assureur ne peut jamais dépasser le montant réel du dommage subi au jour du sinistre (ni le plafond assuré).\n' +
              '• **Prévention de l’aléa moral** : si un assuré pouvait toucher 20 millions FCFA pour un véhicule qui n’en vaut que 8 millions, il aurait un intérêt financier direct à provoquer volontairement un incendie ou un vol.\n' +
              '• **Conséquence sur la surassurance** : assurer un bien au-delà de sa valeur réelle est inutile (en cas de bonne foi, l’indemnité reste plafonnée à la valeur réelle ; en cas de fraude, le contrat est nul).',
            keyRule:
              'Le principe indemnitaire limite strictement la prestation au **préjudice réel**, interdisant tout enrichissement à l’occasion d’un sinistre et empêchant le cumul d’indemnisations.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Un véhicule dont la valeur réelle est de 8 000 000 FCFA est assuré par erreur pour 12 000 000 FCFA et subit une perte totale. En vertu du principe indemnitaire, quel montant maximal l’assureur versera-t-il ?',
              options: [
                '12 000 000 FCFA (le capital déclaré)',
                '8 000 000 FCFA (la valeur réelle du préjudice)',
                '20 000 000 FCFA (la somme des deux)',
                '4 000 000 FCFA (la différence)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En vertu du principe indemnitaire, l’assuré ne peut jamais s’enrichir grâce à un sinistre : l’indemnisation maximale est la valeur réelle du bien détruit (8 000 000 FCFA).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Sous-assurance',
            stepTheme: 'green',
            stepTitle: 'Calculer l’indemnité avec la règle proportionnelle de capitaux',
            paragraphText:
              'À l’inverse, que se passe-t-il si une entreprise sous-estime volontairement ou par négligence la valeur de son bâtiment pour payer une prime plus faible ?\n' +
              '• **Situation** : bâtiment assuré pour $C = 100\\text{ M FCFA}$, valeur réelle expertisée $V = 200\\text{ M FCFA}$, dommage partiel d’incendie $D = 40\\text{ M FCFA}$.\n' +
              '• **Formule** : $I = D \\times \\frac{C}{V} = 40 \\times \\frac{100}{200} = 20\\text{ M FCFA}$.\n' +
              '• **Piège à éviter** : beaucoup croient que puisque le dommage ($40\\text{ M}$) est inférieur au capital assuré ($100\\text{ M}$), il sera remboursé à $100\\,\\%$. C’est faux ! L’entreprise n’ayant payé une prime que pour la moitié du bâtiment, elle reste son propre assureur pour l’autre moitié.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau de synthèse : Formules clés d’indemnisation et d’actuariat',
              caption: 'Récapitulatif opérationnel des formules à maîtriser en Vie, Non-Vie et tarification.',
              tableData: {
                headers: ['Mécanisme', 'Formule clé', 'Condition / Usage'],
                rows: [
                  ['Règle proportionnelle', 'I = D × (C_assuré / V_réelle)', 'Si C_assuré < V_réelle (sous-assurance)'],
                  ['Franchise absolue', 'I = max(0 ; D − Franchise)', 'Déduite de tout sinistre garanti'],
                  ['Prime commerciale TTC', 'P_TTC = P_pure × (1 + c) × (1 + TCA)', 'Tarification Non-Vie & Santé'],
                  ['Valeur acquise (Vie)', 'VA = C₀ × (1 + r_gar + r_PB)ⁿ', 'Épargne / capitalisation'],
                  ['Rachat net (< 8 ans)', 'VR = VA × (1 − f_rachat)', 'Sortie anticipée assurance vie'],
                ],
              },
            },
            formula: {
              name: 'Règle proportionnelle de sous-assurance',
              formula: 'I = D \\times \\frac{C_{\\text{assuré}}}{V_{\\text{réelle}}}',
              note: 'Équitable pour la mutualité : à prime divisée par 2, indemnité divisée par 2.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Une entreprise assure un bâtiment de valeur réelle 200 millions FCFA pour seulement 100 millions FCFA. Un incendie cause 40 millions FCFA de dégâts. Quelle indemnité l’assureur verse-t-il ?',
              options: [
                '40 millions FCFA',
                '20 millions FCFA',
                '100 millions FCFA',
                '10 millions FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par application de la règle proportionnelle de capitaux : I = 40 M × (100 M / 200 M) = 20 millions FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Franchises',
            stepTheme: 'violet',
            stepTitle: 'Franchise absolue vs franchise relative et lutte contre l’aléa moral',
            paragraphText:
              'La **franchise** est la somme qui reste systématiquement à la charge de l’assuré en cas de sinistre ; elle joue un double rôle économique majeur.\n' +
              '• **Franchise absolue (ou déductible)** : la plus courante ; on soustrait toujours la franchise du dommage ($I = D - F$). Pour $F = 100\\,000\\text{ FCFA}$ et $D = 350\\,000\\text{ FCFA}$, l’assureur paie $250\\,000\\text{ FCFA}$.\n' +
              '• **Franchise relative (ou simple)** : si $D \\le F$, l’assureur ne paie rien ; mais si $D > F$, il paie **100 % du dommage** sans déduction.\n' +
              '• **Double utilité** : élimine les micro-sinistres très coûteux à gérer administrativement (baissant la prime) et responsabilise l’assuré contre l’**aléa moral**.',
            konanTip:
              'Moyen mnémotechnique : franchise **ABSOLUE** = déduite **absolument tout le temps** ; franchise **RELATIVE** = simple seuil de déclenchement (0 si dessous, 100 % si dessus).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Un contrat comporte une franchise absolue de 100 000 FCFA. Si l’assuré subit un dommage garanti de 280 000 FCFA, quel montant reçoit-il ?',
              options: [
                '280 000 FCFA',
                '180 000 FCFA',
                '100 000 FCFA',
                '0 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec une franchise absolue (déductible), on retranche toujours la franchise du dommage : 280 000 − 100 000 = 180 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Coassurance',
            stepTheme: 'blue',
            stepTitle: 'La coassurance : partage horizontal d’un grand risque',
            paragraphText:
              'Comment assurer une raffinerie, un port autonome ou une flotte aérienne de plusieurs centaines de milliards FCFA lorsqu’une seule compagnie ne peut absorber un tel sinistre ? Premier mécanisme : la **coassurance**.\n' +
              '• **Principe** : plusieurs compagnies d’assurance acceptent ensemble de couvrir un même risque via un contrat unique, chacune pour un pourcentage fixé (ex. Assureur A : 40 %, Assureur B : 35 %, Assureur C : 25 %).\n' +
              '• **Rôle de l’apériteur** : l’un des coassureurs (souvent celui qui a la plus grande part) gère le contrat, encaisse les primes et règle les sinistres au nom du pool.\n' +
              '• **Absence de solidarité** : chaque coassureur n’est engagé qu’à hauteur de sa propre quote-part (si l’un fait faillite, les autres ne paient pas sa part).',
            keyRule:
              'En **coassurance** (partage horizontal), l’assuré connaît tous ses assureurs, un **apériteur** pilote la police, et il n’y a **pas de solidarité** entre coassureurs.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Dans un contrat de coassurance couvrant une usine industrielle, comment appelle-t-on la compagnie chargée de négocier, gérer la police et encaisser les primes pour le compte des coassureurs ?',
              options: [
                'Le réassureur',
                'L’apériteur',
                'Le bénéficiaire',
                'Le régulateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’apériteur est le coassureur chef de file mandaté pour établir et gérer la police unique au nom de l’ensemble des coassureurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Réassurance',
            stepTheme: 'blue',
            stepTitle: 'La réassurance : « l’assurance des assureurs » (partage vertical)',
            paragraphText:
              'Second mécanisme de dispersion des grands risques : la **réassurance**, qui permet à un assureur de s’assurer lui-même auprès d’un spécialiste international ou régional.\n' +
              '• **Mécanisme** : la compagnie directe (la **cédante**) cède une fraction de son portefeuille ou de ses sinistres extrêmes à un **réassureur** (ex. **CICA-RE** en zone CIMA, Africa Re, Swiss Re).\n' +
              '• **Invisibilité pour l’assuré** : l’assuré ne traite qu’avec son assureur direct, qui reste **seul juridiquement responsable** de l’indemnisation à 100 %.\n' +
              '• **Formes principales** : réassurance **proportionnelle** (quote-part des primes et sinistres) et **non-proportionnelle** (excédent de sinistre : le réassureur intervient uniquement au-delà d’un seuil catastrophique appelé priorité).',
            keyRule:
              'En **réassurance** (partage vertical), la cédante transfère une partie du risque au réassureur mais reste **seule responsable** devant le client final.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle différence juridique majeure oppose la réassurance à la coassurance vis-à-vis de l’assuré ?',
              options: [
                'En réassurance, l’assuré doit poursuivre directement le réassureur en cas de sinistre',
                'En réassurance, la compagnie directe (cédante) reste seule engagée à 100 % envers l’assuré, qui ignore le contrat de réassurance',
                'La réassurance est interdite dans la zone CIMA',
                'La coassurance est réservée aux particuliers uniquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le traité de réassurance lie exclusivement la cédante et le réassureur : l’assuré n’a aucun lien juridique avec le réassureur et est indemnisé à 100 % par son assureur direct.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Exemple chiffré : réassurance en quote-part vs excédent de sinistre',
            paragraphText:
              'Comparons concrètement les deux grandes formes de réassurance sur un sinistre industriel de $500\\text{ millions FCFA}$.\n' +
              '• **Traité proportionnel (quote-part 40 % cédés)** : la cédante conserve $60\\,\\%$ des primes et paie $60\\,\\% \\times 500 = 300\\text{ M FCFA}$ ; le réassureur reçoit $40\\,\\%$ des primes et rembourse $40\\,\\% \\times 500 = 200\\text{ M FCFA}$ à la cédante.\n' +
              '• **Traité non-proportionnel (excédent de sinistre avec priorité de $200\\text{ M}$)** : la cédante garde tous les petits sinistres jusqu’à $200\\text{ M}$, et le réassureur prend en charge tout ce qui dépasse, soit $500 - 200 = 300\\text{ M FCFA}$.\n' +
              '• **Bénéfice** : protège les fonds propres de l’assureur local contre les chocs extrêmes tout en augmentant sa capacité de souscription.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Une compagnie locale souscrit un traité de réassurance en « excédent de sinistre » avec une priorité (seuil de rétention) de 200 millions FCFA. Si un incendie coûte 500 millions FCFA, combien le réassureur rembourse-t-il à la cédante ?',
              options: [
                '200 millions FCFA',
                '300 millions FCFA',
                '500 millions FCFA',
                '0 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La cédante supporte la tranche jusqu’à sa priorité de 200 millions FCFA, et le réassureur rembourse l’excédent au-delà : 500 − 200 = 300 millions FCFA.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : ASSURANCE DIGITALE (INSURTECH), MICROASSURANCE ET CIMA
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch4',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Assurance',
    title: 'Chapitre 4 — Assurance digitale (InsurTech), microassurance et régulation CIMA',
    summary:
      'Innovations InsurTech (IA, Big Data, Blockchain, IoT, télématique PAYD/PHYD, drones, RPA), assurance paramétrique/indicielle agricole (cacao/sécheresse), microassurance mobile, et cadre prudentiel de la CIMA (Traité de Yaoundé, Code CIMA, CMA, CRCA, CICA-RE).',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_assurance_ch4_p1',
        order: 1,
        title: 'Transformation digitale (InsurTech) : IA, Big Data, IoT, Blockchain et modèles UBI',
        summary:
          'Digitalisation du parcours client, Intelligence Artificielle, RPA, vision par ordinateur, drones, IoT/télématique, Blockchain et nouveaux modèles d’assurance basés sur l’usage (PAYD, PHYD, On-Demand).',
        conceptExplanation:
          'L’**InsurTech** (contraction d’*Insurance* et *Technology*) désigne l’ensemble des innovations numériques qui transforment toute la chaîne de valeur de l’assurance — de la conception du produit jusqu’à la gestion des sinistres.\n\n' +
          '1. **Parcours client et automatisation** : comparaison et souscription 100 % en ligne avec **signature électronique**, self-service via applications mobiles (déclaration et suivi temps réel), **chatbots/voicebots 24h/24** et **RPA** (Robotic Process Automation) pour automatiser quittances, relances et renouvellements.\n\n' +
          '2. **Data, IA et gestion de sinistres** : **Big Data & Machine Learning** pour affiner la tarification et **détecter les fraudes** ; **vision par ordinateur** pour estimer instantanément les dégâts auto/habitation sur simple photo ; **drones** pour inspecter les zones sinistrées ou dangereuses.\n\n' +
          '3. **IoT, Blockchain et nouveaux modèles UBI** :\n' +
          '• **IoT** : trackers de santé connectés en Assurance Vie ; capteurs habitat et boîtiers télématiques en Non-Vie.\n' +
          '• **Blockchain** : registre sécurisé et transparent réduisant la fraude et permettant l’exécution automatique par *smart contracts*.\n' +
          '• **Usage-Based Insurance (UBI)** : **PAYD** (*Pay As You Drive*, tarif au kilomètre), **PHYD** (*Pay How You Drive*, tarif selon le style de conduite) et **On-Demand Insurance** (activation à la demande).',
        formulas: [
          {
            name: 'Tarification personnalisée par télématique (UBI)',
            formula: 'P_{\\text{UBI}} = P_{\\text{base}} \\times f(\\text{Kilométrage PAYD},\\; \\text{Score de conduite PHYD})',
            note: 'Les conducteurs prudents et faibles rouleurs obtiennent une réduction immédiate de leur prime.',
          },
        ],
        keyRule:
          'L’InsurTech fait évoluer l’assureur d’un simple **payeur après sinistre** vers un **partenaire de prévention en temps réel** (IoT, IA, télématique) offrant des parcours mobiles fluides et ultra-personnalisés.',
        workedExample: {
          title: 'Déployer une offre automobile connectée (UBI) à Abidjan',
          statement:
            'Un assureur souhaite lancer une offre auto digitale pour les jeunes conducteurs urbains. Quelles technologies InsurTech doit-il combiner pour la souscription, la tarification et la gestion d’un accrochage ?',
          methodSteps: [
            'Souscription : application mobile avec scan de la carte grise, signature électronique et paiement par Mobile Money.',
            'Tarification UBI : capteur télématique ou smartphone mesurant le kilométrage (PAYD) et la souplesse de freinage/vitesse (PHYD) pour récompenser la bonne conduite.',
            'Sinistre : déclaration 24h/24 via chatbot, envoi de photos analysées par vision par ordinateur pour chiffrer la carrosserie et détection anti-fraude par IA.',
          ],
          conclusion:
            'Cette combinaison réduit les frais de gestion, limite l’aléa moral (les conducteurs deviennent plus prudents) et accélère l’indemnisation de plusieurs semaines à quelques heures.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Parcours digital',
            stepTheme: 'blue',
            stepTitle: 'Digitalisation du parcours client : souscription mobile et self-service',
            paragraphText:
              'Traditionnellement lourde en paperasse et en déplacements en agence, l’assurance est profondément simplifiée par le numérique.\n' +
              '• **Comparateurs et plateformes web** : permettent de comparer les garanties et tarifs en quelques clics avant de choisir.\n' +
              '• **Souscription en ligne et signature électronique** : le contrat est émis instantanément sur smartphone avec attestation numérique infalsifiable (QR code vérifiable).\n' +
              '• **Self-service mobile** : l’assuré déclare un sinistre directement depuis l’application, joint ses pièces justificatives et suit l’avancement de son indemnisation en temps réel.\n' +
              '• **Impact économique** : baisse drastique des frais d’acquisition et de gestion, rendant rentables des polices à faible prime.',
            keyRule:
              'La digitalisation du parcours client (comparaison, signature électronique, self-service mobile) réduit les coûts de gestion et améliore la satisfaction client.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quel avantage opérationnel majeur apporte la souscription mobile avec signature électronique et self-service aux compagnies d’assurance ?',
              options: [
                'Elle supprime l’obligation d’indemniser les sinistres',
                'Elle réduit les coûts administratifs, accélère l’émission des contrats et permet de déclarer et suivre un sinistre en temps réel',
                'Elle remplace la loi des grands nombres',
                'Elle interdit les paiements par Mobile Money',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La digitalisation fluidifie le parcours client (souscription instantanée, suivi transparent) tout en abaissant fortement les frais de gestion.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'IA & RPA',
            stepTheme: 'violet',
            stepTitle: 'Intelligence Artificielle, détection de fraude et automatisation RPA',
            paragraphText:
              'Au cœur du back-office des assureurs modernes, l’**Intelligence Artificielle (IA)** et la **RPA** transforment la productivité et la rentabilité technique.\n' +
              '• **Tarification et personnalisation (Machine Learning & Big Data)** : analyse de milliers de variables comportementales pour proposer une police ajustée au profil réel de risque.\n' +
              '• **Détection automatique des fraudes** : les algorithmes repèrent les incohérences de déclarations, les sinistres répétitifs suspects ou les réseaux organisés de fausses factures.\n' +
              '• **Chatbots et voicebots** : assistance continue 24h/24 pour orienter l’assuré lors d’un sinistre.\n' +
              '• **RPA (Robotic Process Automation)** : robots logiciels automatisant les tâches répétitives (édition de quittances, relances d’impayés, renouvellements annuels).',
            konanTip:
              'Distingue bien **IA** (apprend et décide sur des données complexes : fraude, tarification) et **RPA** (exécute automatiquement des tâches administratives répétitives selon des règles fixes : quittances, relances).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Dans une compagnie d’assurance digitalisée, à quoi sert principalement la RPA (Robotic Process Automation) ?',
              options: [
                'À remplacer physiquement les mécaniciens automobiles',
                'À automatiser les tâches administratives répétitives telles que la gestion des quittances, les relances et les renouvellements de contrats',
                'À créer des catastrophes naturelles artificielles',
                'À fixer le taux de la TCA à la place de l’État',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La RPA automatise les processus de back-office répétitifs (quittances, relances, renouvellements), libérant les équipes humaines pour le conseil et les sinistres complexes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Sinistres 4.0',
            stepTheme: 'violet',
            stepTitle: 'Gestion digitalisée des sinistres : vision par ordinateur et drones',
            paragraphText:
              'L’expertise physique d’un sinistre prenait autrefois plusieurs jours ou semaines ; les technologies visuelles divisent ce délai de manière spectaculaire.\n' +
              '• **Vision par ordinateur (Computer Vision)** : l’assuré photographie son véhicule accidenté ou son dégât des eaux avec son smartphone ; l’algorithme identifie les pièces endommagées et estime automatiquement le coût de réparation en quelques secondes.\n' +
              '• **Drones d’inspection** : utilisés après une inondation, un incendie industriel ou sur des toitures inaccessibles pour évaluer rapidement et en toute sécurité l’ampleur des dommages.\n' +
              '• **Double bénéfice** : réduction des coûts d’expertise et indemnisation quasi instantanée pour les petits sinistres matériels.',
            keyRule:
              'La **vision par ordinateur** automatise l’estimation des dommages sur photo, tandis que les **drones** sécurisent et accélèrent l’expertise dans les zones dangereuses ou vastes.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle technologie permet à un assureur d’estimer automatiquement le coût de réparation d’un véhicule accidenté à partir de simples photos envoyées sur smartphone ?',
              options: [
                'La vision par ordinateur (Computer Vision)',
                'La règle proportionnelle de capitaux',
                'La réassurance en quote-part',
                'Le télégramme postal',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La vision par ordinateur analyse automatiquement les clichés pris par l’assuré pour reconnaître les dommages et chiffrer la réparation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'IoT & Prévention',
            stepTheme: 'blue',
            stepTitle: 'Internet des objets (IoT) : de l’indemnisation à la prévention active',
            paragraphText:
              'Les capteurs connectés (**IoT — Internet of Things**) fournissent des données en temps réel qui révolutionnent à la fois l’Assurance Vie et l’Assurance Non-Vie.\n' +
              '• **En Assurance Vie & Santé** : montres connectées et trackers d’activité encouragent un mode de vie sain (activité physique, suivi cardiaque) et permettent des tarifs ou récompenses personnalisés.\n' +
              '• **En Assurance Habitation & Entreprise** : détecteurs de fumée, capteurs de fuite d’eau ou de température déclenchent une alerte immédiate sur le smartphone avant que le sinistre ne s’aggrave.\n' +
              '• **En Assurance Automobile** : boîtiers télématiques détectant un choc violent et appelant automatiquement les secours (eCall).',
            keyRule:
              'Grâce à l’**IoT**, l’assurance passe d’une logique purement curative (indemniser après coup) à une logique **préventive** (alerter avant ou limiter la gravité du sinistre).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Comment les objets connectés (IoT) tels que capteurs de fuite d’eau ou trackers d’activité transforment-ils le métier d’assureur ?',
              options: [
                'Ils empêchent toute collecte de données en temps réel',
                'Ils permettent la prévention en temps réel des sinistres et la personnalisation des polices selon le comportement effectif de l’assuré',
                'Ils suppriment la nécessité de payer une prime',
                'Ils servent uniquement à imprimer les polices papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’IoT fournit des données en temps réel utiles à la fois pour prévenir les dommages (alertes précoces) et pour personnaliser la tarification.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Blockchain',
            stepTheme: 'blue',
            stepTitle: 'Blockchain et smart contracts : transparence, confiance et automatisation',
            paragraphText:
              'La **Blockchain** est un registre distribué, horodaté et infalsifiable qui répond directement à deux défis majeurs de l’assurance : la fraude et la lourdeur des règlements.\n' +
              '• **Sécurité et transparence** : chaque police, sinistre ou certificat (ex. attestation auto) enregistré sur la chaîne est vérifiable sans falsification possible.\n' +
              '• **Lutte anti-fraude** : empêche la double déclaration d’un même sinistre auprès de plusieurs compagnies grâce au partage crypté d’empreintes de dossiers.\n' +
              '• **Smart contracts (contrats intelligents)** : programmes auto-exécutables qui déclenchent automatiquement le virement de l’indemnité dès qu’une condition externe vérifiée (ex. vol retardé de plus de 2 h, indice météo) est remplie.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Quel rôle joue un « smart contract » sur Blockchain dans une police d’assurance digitale ?',
              options: [
                'Il déclenche automatiquement le versement de l’indemnité dès qu’une condition objective prédéfinie est vérifiée, sans intervention manuelle',
                'Il augmente artificiellement les frais de dossier de l’assureur',
                'Il supprime toute traçabilité des transactions',
                'Il remplace le Code CIMA par une loi privée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un smart contract exécute automatiquement les clauses d’indemnisation dès que les données certifiées (oracle) confirment la réalisation de l’événement garanti.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Modèles UBI',
            stepTheme: 'blue',
            stepTitle: 'Nouveaux modèles basés sur l’usage : PAYD, PHYD et On-Demand',
            paragraphText:
              'Fini le tarif annuel figé identique pour un conducteur qui parcourt 3 000 km prudents et un autre qui en roule 40 000 de manière agressive ! L’**UBI (Usage-Based Insurance)** adapte la prime à l’usage réel.\n' +
              '• **PAYD (Pay As You Drive)** : la prime dépend directement du **kilométrage parcouru** (facturation au kilomètre).\n' +
              '• **PHYD (Pay How You Drive)** : la prime dépend du **style de conduite** mesuré par télématique (accélérations, freinages brusques, respect des vitesses, conduite nocturne).\n' +
              '• **On-Demand Insurance (assurance à la demande)** : l’assuré active et désactive sa couverture à l’heure ou à la journée depuis son smartphone (ex. assurance voyage, appareil photo, véhicule prêté).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture technologique d’une compagnie InsurTech moderne',
              caption: 'Empilement des quatre couches reliant l’expérience mobile client aux données temps réel et au socle actuariel.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Couche 4',
                    title: 'Interface Client & Distribution Mobile',
                    subtitle: 'Apps mobiles, USSD, signature électronique, chatbots 24h/24, Mobile Money',
                    color: 'blue',
                  },
                  {
                    badge: 'Couche 3',
                    title: 'Modèles Innovants (UBI & Paramétrique)',
                    subtitle: 'PAYD (km), PHYD (conduite), On-Demand, assurance indicielle auto-déclenchée',
                    color: 'green',
                  },
                  {
                    badge: 'Couche 2',
                    title: 'Intelligence & Automatisation',
                    subtitle: 'IA tarification & anti-fraude, Vision par ordinateur, RPA, Smart Contracts',
                    color: 'violet',
                  },
                  {
                    badge: 'Couche 1',
                    title: 'Collecte de Données & Socle Réglementaire',
                    subtitle: 'Capteurs IoT, satellites météo, télématique, Blockchain, conformité CIMA',
                    color: 'orange',
                  },
                ],
              },
            },
            konanTip:
              'Repère la lettre clé : PAY**D** = Pay **As** You Drive (distance/km) vs PH**Y**D = Pay **How** You Drive (manière de conduire).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle formule d’assurance automobile basée sur l’usage (UBI) ajuste la prime en fonction du style de conduite mesuré par capteur (freinages, accélérations, vitesse) ?',
              options: [
                'PAYD (Pay As You Drive)',
                'PHYD (Pay How You Drive)',
                'La temporaire décès',
                'La coassurance apéritrice',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PHYD (Pay How You Drive) module la prime selon la qualité de conduite, tandis que PAYD (Pay As You Drive) la base sur le kilométrage parcouru.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_assurance_ch4_p2',
        order: 2,
        title: 'Assurance paramétrique (indicielle) et microassurance mobile en Afrique',
        summary:
          'Fonctionnement de l’assurance paramétrique (indices météo/satellitaires cacao et sécheresse), risque de base, microassurance via Mobile Money, telco-assurance et leviers pour dépasser les 2 % de pénétration.',
        conceptExplanation:
          'En Afrique subsaharienne, où la pénétration de l’assurance reste très faible (environ **2 % de la population en Côte d’Ivoire**), l’assurance classique sur papier échoue souvent face aux coûts de distribution et aux petits revenus irréguliers. Deux innovations majeures changent la donne.\n\n' +
          '1. **L’assurance paramétrique (ou indicielle)** :\n' +
          '• Au lieu d’envoyer un expert constater et chiffrer une perte individuelle, l’indemnisation est **déclenchée automatiquement** dès qu’un **indice objectif mesurable** (pluviométrie en millimètres, température, vitesse du vent, retard d’avion) franchit un seuil fixé au contrat.\n' +
          '• **Usage agricole clé (cacao, coton, vivriers)** : si les capteurs satellites enregistrent moins de $X\\text{ mm}$ de pluie pendant la floraison du cacao (sécheresse avérée), tous les planteurs assurés de la zone reçoivent automatiquement leur indemnité par Mobile Money en quelques jours.\n' +
          '• **Limite technique — le risque de base (*basis risk*)** : possibilité d’un décalage entre l’indice mesuré dans la zone et le dommage réel subi sur une parcelle précise.\n\n' +
          '2. **La microassurance mobile et les leviers de pénétration** :\n' +
          '• Produits simples à **micro-primes** (ex. 500 à 2 000 FCFA/mois), souscrits par smartphone ou USSD et payés via **Mobile Money**.\n' +
          '• Partenariats stratégiques avec les opérateurs télécoms (**telco-assurance**), coopératives agricoles et institutions de microfinance, couplés à l’éducation financière.',
        formulas: [
          {
            name: 'Déclenchement d’une assurance paramétrique (sécheresse)',
            formula: '\\text{Indemnité} > 0 \\iff \\text{Indice mesuré (ex. Pluie)} < \\text{Seuil contractuel } S',
            note: 'Aucune expertise terrain individuelle requise : rapidité maximale et quasi-absence d’aléa moral.',
          },
        ],
        keyRule:
          'L’**assurance paramétrique** indemnise automatiquement sur dépassement d’un **indice objectif** (ex. pluviométrie satellitaire), supprimant l’expertise coûteuse mais exposant au **risque de base**.',
        workedExample: {
          title: 'Protéger une coopérative de planteurs de cacao contre la sécheresse',
          statement:
            'Une coopérative de 5 000 planteurs de cacao dans l’ouest ivoirien souscrit une assurance paramétrique sécheresse : prime 10 000 FCFA/saison via Mobile Money ; seuil de déclenchement = moins de 80 mm de pluie cumulés sur 30 jours mesurés par satellite ; indemnité forfaitaire = 150 000 FCFA. Expliquez le déroulement si le satellite mesure 55 mm.',
          methodSteps: [
            'Vérifier l’indice objectif : 55 mm mesurés < seuil contractuel de 80 mm → le sinistre paramétrique est automatiquement caractérisé.',
            'Déclenchement sans expertise : aucun expert n’a besoin de visiter les 5 000 plantations ; le smart contract / système valide le paiement pour toute la zone.',
            'Indemnisation rapide : chaque planteur reçoit 150 000 FCFA directement sur son compte Mobile Money sous quelques jours, lui permettant de sauvegarder sa récolte ou ses revenus.',
          ],
          conclusion:
            'L’assurance indicielle rend assurable des milliers de petits agriculteurs autrefois exclus en raison des coûts d’expertise prohibitifs.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Paramétrique',
            stepTheme: 'blue',
            stepTitle: 'Principe de l’assurance paramétrique (indicielle)',
            paragraphText:
              'L’**assurance paramétrique** rompt avec le modèle traditionnel de constatation individuelle des dommages pour offrir une indemnisation ultra-rapide.\n' +
              '• **Mécanisme** : le contrat définit à l’avance un **paramètre objectif indépendant** (pluviométrie, séisme, température, retard de vol) mesuré par une source fiable tierce (satellite météo, station officielle) et un **seuil de déclenchement**.\n' +
              '• **Paiement automatique** : dès que l’indice franchit le seuil, le montant forfaitaire convenu est versé sans expertise terrain ni litige sur l’évaluation de la perte.\n' +
              '• **Domaines privilégiés** : agriculture, événements climatiques, transport/logistique et aviation.',
            keyRule:
              'En assurance paramétrique, on n’indemnise pas la perte constatée par un expert, mais le **franchissement d’un indice mesurable indépendant**.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui déclenche le versement de l’indemnité dans un contrat d’assurance paramétrique (indicielle) ?',
              options: [
                'La visite obligatoire de trois experts judiciaires sur place',
                'Le franchissement automatique d’un seuil prédéfini sur un indice objectif mesurable (pluie, vent, température, retard)',
                'Un vote majoritaire des actionnaires de la compagnie',
                'La présentation de factures papier originales uniquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance paramétrique déclenche automatiquement une indemnité prédéfinie dès qu’un indice externe mesurable franchit le seuil contractuel.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Agri-InsurTech',
            stepTheme: 'slate',
            stepTitle: 'Application agricole en zone UEMOA : cacao, sécheresse et satellites',
            paragraphText:
              'En Côte d’Ivoire, premier producteur mondial de cacao, le dérèglement climatique menace directement les revenus de centaines de milliers de petits planteurs.\n' +
              '• **Pourquoi l’assurance agricole classique échoue** : envoyer un expert vérifier chaque petite parcelle rurale coûterait parfois plus cher que la prime elle-même !\n' +
              '• **Solution indicielle** : des satellites d’observation mesurent en continu la pluviométrie et l’humidité des sols par zone géographique.\n' +
              '• **Paiement Mobile Money** : en cas de déficit pluviométrique avéré pendant la période critique, l’indemnité est créditée en quelques jours sur le téléphone du planteur, sans compte bancaire requis.',
            konanTip:
              'L’alliance **Satellite météo + Assurance paramétrique + Mobile Money** est l’exemple phare d’innovation InsurTech adaptée aux réalités agricoles africaines !',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi l’assurance indicielle par données satellitaires est-elle particulièrement adaptée aux petits planteurs de cacao en zone rurale ?',
              options: [
                'Parce qu’elle supprime les coûts prohibitifs d’expertise individuelle sur chaque parcelle et permet un versement rapide via Mobile Money',
                'Parce qu’elle empêche physiquement la sécheresse de se produire',
                'Parce qu’elle exige que chaque planteur possède un compte bancaire à l’étranger',
                'Parce qu’elle n’a besoin d’aucune donnée météorologique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’absence d’expertise terrain individuelle divise les frais de gestion et permet d’indemniser rapidement des milliers de petits agriculteurs via Mobile Money.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Risque de base',
            stepTheme: 'orange',
            stepTitle: 'Forces et limite majeure de l’indiciel : le risque de base (basis risk)',
            paragraphText:
              'Malgré ses immenses qualités, l’assurance paramétrique présente une imperfection technique spécifique qu’il faut savoir nommer et atténuer.\n' +
              '• **Forces majeures** : quasi-disparition de l’**aléa moral** (un planteur ne peut pas truquer la pluie mesurée par satellite !), transparence totale, frais de gestion très bas et règlement ultra-rapide.\n' +
              '• **Limite — le risque de base (*basis risk*)** : c’est le risque de décalage entre l’indice mesuré sur la zone et la réalité d’une parcelle précise. Un agriculteur peut subir une perte locale (ex. ravageur ou sécheresse très localisée) sans que l’indice régional ne se déclenche — ou inversement recevoir une indemnité sans perte réelle.\n' +
              '• **Atténuation** : multiplier les stations météo locales et affiner la résolution des grilles satellitaires.',
            keyRule:
              'Le **risque de base (basis risk)** est la principale limite de l’assurance indicielle : un écart possible entre l’indice régional mesuré et le dommage effectivement subi par l’assuré.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'En assurance paramétrique agricole, qu’appelle-t-on le « risque de base » (basis risk) ?',
              options: [
                'Le risque que l’assureur oublie son mot de passe',
                'Le décalage possible entre l’indice météo mesuré dans la zone et la perte réelle subie sur la parcelle individuelle d’un agriculteur',
                'Le risque de fraude volontaire de l’agriculteur sur la météo',
                'Le montant de la taxe sur les conventions d’assurance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le basis risk désigne l’imparfaite corrélation entre l’indice déclencheur (mesuré sur une maille géographique) et le sinistre réel vécu sur une parcelle donnée.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Microassurance',
            stepTheme: 'blue',
            stepTitle: 'Microassurance mobile et inclusion financière face aux 2 % de pénétration',
            paragraphText:
              'Dans un pays comme la Côte d’Ivoire (~29 millions d’habitants dont seulement ~2 %, soit ~580 000 personnes, sont assurées), la **microassurance** cible les populations à revenus modestes ou informels.\n' +
              '• **Principes de la microassurance** : primes fractionnées très accessibles (quotidiennes, hebdomadaires ou mensuelles dès quelques centaines de FCFA), exclusions réduites au strict minimum et langage simple.\n' +
              '• **Distribution mobile & USSD** : accessible même sur téléphone basique sans Internet via menus USSD et paiement automatique par **Mobile Money**.\n' +
              '• **Produits phares** : micro-santé hospitalisation (indemnité journalière), micro-obsèques/décès familial, micro-assurance agricole et protection de stock pour commerçants du secteur informel.',
            keyRule:
              'La **microassurance mobile** lève simultanément trois barrières à l’inclusion : le **prix** (micro-primes), la **distance** (souscription USSD/appli) et la **non-bancarisation** (Mobile Money).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quel trio de caractéristiques définit le mieux un produit de microassurance mobile adapté au secteur informel en Afrique de l’Ouest ?',
              options: [
                'Prime annuelle unique élevée, signature chez notaire et virement SWIFT',
                'Micro-primes fractionnées abordables, souscription simplifiée par mobile/USSD et paiement/indemnisation via Mobile Money',
                'Couverture réservée aux multinationales cotées en bourse',
                'Contrat de 80 pages en latin sans possibilité de rachat',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La microassurance mobile adapte le prix (fractionnement), le canal (USSD/smartphone) et le paiement (Mobile Money) aux revenus irréguliers des ménages non bancarisés.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Culture assurantielle',
            stepTheme: 'green',
            stepTitle: 'Trois leviers stratégiques pour développer la culture assurantielle',
            paragraphText:
              'Comment les compagnies d’assurance et les pouvoirs publics peuvent-ils faire passer le taux de pénétration de 2 % à plus de 10 % en zone UEMOA ?\n' +
              '• **Levier 1 — Digitalisation et partenariats de masse (Telco & Bancassurance)** : intégrer l’assurance directement dans les usages quotidiens (opérateurs télécoms, fintechs Mobile Money, banques, coopératives).\n' +
              '• **Levier 2 — Transparence et rapidité d’indemnisation** : restaurer la **confiance du public** en payant les sinistres rapidement et sans tracasseries — un assuré vite indemnisé devient le meilleur ambassadeur.\n' +
              '• **Levier 3 — Éducation financière et produits sur mesure** : vulgariser le fonctionnement de l’assurance dans les langues locales, écoles et médias, et concevoir des produits simples (microassurance santé, agricole, épargne scolaire).',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Quel levier est le plus décisif pour briser la méfiance du grand public envers l’assurance dans un marché à faible taux de pénétration ?',
              options: [
                'Rallonger les délais de remboursement des sinistres à deux ans',
                'Garantir une indemnisation rapide et transparente, couplée à l’éducation financière et à des produits mobiles simples',
                'Supprimer toute communication sur les garanties couvertes',
                'Multiplier les clauses d’exclusion illisibles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La confiance est le socle de l’assurance : payer vite et de façon transparente, tout en simplifiant l’accès via le mobile et la pédagogie, est le levier le plus puissant.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Comparatif délais',
            stepTheme: 'slate',
            stepTitle: 'Comparer l’assurance traditionnelle et l’assurance paramétrique InsurTech',
            paragraphText:
              'Mesurons concrètement l’écart de performance opérationnelle entre une indemnisation dommages classique et un parcours paramétrique digitalisé.\n' +
              '• **Délai moyen d’indemnisation** : 30 à 90 jours en parcours papier classique (déclaration, attente d’expert, rapport, validation, chèque) contre **1 à 3 jours** en assurance paramétrique + Mobile Money.\n' +
              '• **Frais de gestion** : souvent 25 % à 35 % de la prime en modèle traditionnel, ramenés sous les 10 % à 15 % grâce à l’automatisation.\n' +
              '• **Complémentarité** : l’assurance classique reste indispensable pour les dommages complexes sur mesure (incendie d’usine, RC médicale), tandis que le paramétrique excelle sur les risques climatiques et de masse.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Délai moyen d’indemnisation (en jours) selon le modèle d’assurance',
              caption: 'Illustration de l’accélération permise par la digitalisation et l’assurance paramétrique.',
              barChart: {
                yLabel: 'Délai moyen (jours)',
                unit: ' j',
                bars: [
                  { label: 'Dommages papier', value: 45, color: 'orange', annotation: '45 j' },
                  { label: 'Auto digital (IA)', value: 5, color: 'blue', annotation: '5 j' },
                  { label: 'Microassurance', value: 3, color: 'violet', annotation: '3 j' },
                  { label: 'Paramétrique', value: 1, color: 'green', annotation: '1 j' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Pourquoi l’assurance paramétrique ne remplace-t-elle pas totalement l’assurance indemnitaire classique ?',
              options: [
                'Parce que l’assurance paramétrique est toujours plus lente',
                'Parce que certains risques complexes (incendie d’usine, responsabilité civile médicale) exigent une évaluation précise du préjudice réel qu’un indice simple ne peut mesurer',
                'Parce que les satellites ne fonctionnent pas en Afrique',
                'Parce que la CIMA interdit l’usage d’Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les deux modèles sont complémentaires : le paramétrique est idéal pour les risques standardisés liés à un indice externe, tandis que l’indemnitaire reste indispensable pour les sinistres complexes sur mesure.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_assurance_ch4_p3',
        order: 3,
        title: 'Régulation, supervision prudentielle et solvabilité en zone CIMA',
        summary:
          'Rôle de la Conférence Interafricaine des Marchés d’Assurances (CIMA — Traité de Yaoundé, 10 juillet 1992), 4 objectifs spécifiques, organes (Code CIMA, CMA, CRCA, CICA-RE), provisions techniques et marge de solvabilité.',
        conceptExplanation:
          'Parce que l’assurance repose sur un **cycle de production inversé** et sur la **confiance du public**, une faillite d’assureur laisserait des milliers d’assurés et de victimes sans indemnisation. Le secteur est donc strictement encadré.\n\n' +
          '1. **La CIMA (Conférence Interafricaine des Marchés d’Assurances)** :\n' +
          '• Créée par le **Traité de Yaoundé signé le 10 juillet 1992**, elle regroupe 14 États membres d’Afrique francophone (dont les 8 pays de l’UEMOA et les 6 pays de la CEMAC).\n' +
          '• **Mission** : harmoniser les règles, superviser la solvabilité des compagnies et développer un marché régional sain et équilibré.\n' +
          '• **4 objectifs spécifiques** : **Unifier** (un Code unique), **Contrôler** (santé financière), **Protéger** (garantir l’indemnisation des assurés) et **Développer** (dynamiser le marché).\n\n' +
          '2. **Les 4 piliers et organes de la CIMA** :\n' +
          '• **Code CIMA** : législation unique des assurances applicable dans tous les États membres.\n' +
          '• **Conseil des Ministres des Assurances (CMA)** : organe suprême qui adopte et révise la législation.\n' +
          '• **Commission Régionale de Contrôle des Assurances (CRCA)** : autorité supranationale de régulation et de contrôle (agréments, inspections, sanctions, retrait d’agrément).\n' +
          '• **CICA-RE** : Compagnie Commune de Réassurance des États membres de la CIMA (renforce la capacité de rétention régionale).\n\n' +
          '3. **Exigences de solvabilité** : constitution obligatoire de **provisions techniques** (couvertes par des actifs sûrs et liquides), respect d’une **marge de solvabilité** (coussin de fonds propres) et d’un **capital social minimum** relevé par la CIMA pour solidifier les compagnies.',
        formulas: [
          {
            name: 'Équilibre prudentiel de solvabilité',
            formula: '\\text{Actifs représentatifs} \\ge \\text{Provisions techniques} \\quad \\text{et} \\quad \\text{Fonds propres} \\ge \\text{Marge de solvabilité réglementaire}',
            note: 'La CRCA contrôle en permanence ces deux ratios pour prévenir toute insolvabilité.',
          },
        ],
        keyRule:
          'Retiens les 4 organes/outils clés de la **CIMA (Traité de Yaoundé, 10 juillet 1992)** : **Code CIMA** (loi unique), **CMA** (législateur), **CRCA** (contrôle & sanctions) et **CICA-RE** (réassurance régionale).',
        workedExample: {
          title: 'Identifier l’organe CIMA compétent face à une compagnie en difficulté',
          statement:
            'Une compagnie d’assurance opérant en Côte d’Ivoire présente une insuffisance grave de provisions techniques et ne respecte plus sa marge de solvabilité. Quel organe supranational intervient, sur quelle base juridique, et quelles mesures peut-il prendre ?',
          methodSteps: [
            'Base juridique : le Code CIMA (applicable directement dans tous les États membres).',
            'Organe de supervision compétent : la Commission Régionale de Contrôle des Assurances (CRCA).',
            'Mesures prudentielles : mise en demeure, plan de redressement/financement exigé des actionnaires, placement sous administration provisoire, voire retrait d’agrément et transfert de portefeuille pour protéger les assurés.',
          ],
          conclusion:
            'La CRCA agit comme gendarme régional indépendant pour garantir que les engagements envers les assurés soient honorés.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Pourquoi réguler ?',
            stepTheme: 'blue',
            stepTitle: 'Justification économique de la régulation prudentielle des assurances',
            paragraphText:
              'Pourquoi l’assurance est-elle beaucoup plus surveillée qu’un commerce ordinaire ? Trois raisons fondamentales l’expliquent.\n' +
              '• **Cycle de production inversé** : l’assureur encaisse les primes aujourd’hui mais paiera les sinistres ou les retraites dans 1, 10 ou 20 ans — il faut s’assurer qu’il sera encore solvable au moment de payer.\n' +
              '• **Asymétrie d’information** : un particulier ne peut pas auditer seul la solidité financière d’une compagnie ni comprendre toutes les clauses techniques.\n' +
              '• **Risque systémique et confiance** : la faillite d’un assureur majeur détruit la confiance dans tout le secteur et laisse des victimes d’accidents ou des épargnants sans ressources.',
            keyRule:
              'La régulation prudentielle protège les assurés et préserve la **confiance du public** face au cycle de production inversé de l’assurance.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle caractéristique économique propre à l’assurance rend indispensable un contrôle strict de la solvabilité des compagnies ?',
              options: [
                'L’inversion du cycle de production : l’assureur encaisse les primes d’avance et doit rester solvable longtemps après pour payer les sinistres futurs',
                'Le fait que les assureurs vendent des denrées périssables',
                'L’absence totale de contrats écrits',
                'Le fait que l’assurance soit toujours gratuite',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Parce que les primes sont encaissées avant que les engagements (sinistres, épargne) ne soient réglés, l’autorité doit garantir que les compagnies conservent des réserves suffisantes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Traité de Yaoundé',
            stepTheme: 'blue',
            stepTitle: 'La CIMA : création (10 juillet 1992), rôle et 4 objectifs spécifiques',
            paragraphText:
              'En zone Franc CFA, la supervision des assurances est intégrée à l’échelle régionale au sein de la **Conférence Interafricaine des Marchés d’Assurances (CIMA)**.\n' +
              '• **Acte fondateur** : créée par le **Traité de Yaoundé du 10 juillet 1992**, regroupant 14 États membres d’Afrique francophone subsaharienne (dont la Côte d’Ivoire).\n' +
              '• **Rôle central** : harmoniser les règles d’assurance et éviter les pratiques divergentes entre pays.\n' +
              '• **Les 4 objectifs spécifiques** :\n' +
              '  1. **Unifier** : appliquer un Code unique des assurances dans tous les États membres.\n' +
              '  2. **Contrôler** : surveiller rigoureusement la santé financière des compagnies.\n' +
              '  3. **Protéger** : garantir que les assurés et victimes seront effectivement indemnisés.\n' +
              '  4. **Développer** : stimuler l’émergence d’un marché régional dynamique et compétitif.',
            keyRule:
              'La **CIMA** (Traité de Yaoundé, **10 juillet 1992**) poursuit 4 objectifs spécifiques : **Unifier, Contrôler, Protéger et Développer** le marché des assurances.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Par quel traité et à quelle date la Conférence Interafricaine des Marchés d’Assurances (CIMA) a-t-elle été créée ?',
              options: [
                'Le Traité de Dakar du 1er janvier 2000',
                'Le Traité de Yaoundé du 10 juillet 1992',
                'Les Accords de Bretton Woods de 1944',
                'Le Traité de Rome de 1957',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CIMA a été instituée par le Traité de Yaoundé signé le 10 juillet 1992 par les États africains de la zone Franc.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: '4 Organes CIMA',
            stepTheme: 'violet',
            stepTitle: 'Les quatre piliers et organes institutionnels de la CIMA',
            paragraphText:
              'Pour accomplir sa mission, l’architecture institutionnelle de la CIMA s’appuie sur quatre piliers complémentaires qu’il faut connaître avec précision.\n' +
              '• **1. Le Code CIMA** : le cadre juridique unique régissant le contrat d’assurance, les compagnies, les intermédiaires et la comptabilité dans les 14 pays.\n' +
              '• **2. Le Conseil des Ministres des Assurances (CMA)** : organe directeur suprême réunissant les ministres des Finances/Économie ; il adopte et modifie la législation.\n' +
              '• **3. La Commission Régionale de Contrôle des Assurances (CRCA)** : l’autorité de régulation et de supervision chargée du contrôle sur pièces et sur place, des agréments et des sanctions.\n' +
              '• **4. La CICA-RE** : Compagnie Commune de Réassurance des États membres de la CIMA, dédiée à la réassurance régionale pour conserver davantage de primes en Afrique.',
            konanTip:
              'Retiens le rôle exact de chaque sigle : **CMA** = adopte la loi ; **Code CIMA** = la loi ; **CRCA** = contrôle et sanctionne ; **CICA-RE** = réassure les compagnies.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Au sein de l’architecture CIMA, quel organe est spécifiquement chargé de la régulation, du contrôle de la solvabilité des compagnies et du prononcé des sanctions ?',
              options: [
                'La CICA-RE',
                'La Commission Régionale de Contrôle des Assurances (CRCA)',
                'L’Organisation Mondiale du Commerce',
                'Le Tribunal de commerce municipal',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CRCA (Commission Régionale de Contrôle des Assurances) est l’organe régulateur qui surveille la santé financière des compagnies et prononce les sanctions éventuelles.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Solvabilité',
            stepTheme: 'blue',
            stepTitle: 'Provisions techniques, couverture par les actifs et marge de solvabilité',
            paragraphText:
              'Comment la CRCA vérifie-t-elle concrètement qu’une compagnie pourra honorer tous ses engagements envers ses assurés ? Par trois garde-fous financiers.\n' +
              '• **Provisions techniques** : dettes estimées de l’assureur envers les assurés (provisions pour sinistres à payer, provisions mathématiques en assurance vie). Elles doivent être évaluées avec prudence.\n' +
              '• **Représentation (couverture) par des actifs réglementés** : chaque franc de provision technique doit être adossé à des placements sûrs, rentables et liquides (obligations d’États UEMOA, dépôts bancaires, immobilier plafonné).\n' +
              '• **Marge de solvabilité** : coussin supplémentaire de **fonds propres** exigé au-delà des provisions techniques pour absorber un choc imprévu (catastrophe, dérive de sinistralité).',
            formula: {
              name: 'Double règle prudentielle de solvabilité',
              formula: '\\text{Actifs admis} \\ge \\text{Provisions techniques} \\qquad \\text{et} \\qquad \\text{Marge disponible} \\ge \\text{Marge minimale exigée}',
              note: 'En complément, la CIMA a relevé le capital social minimum (ex. 5 milliards FCFA pour les SA) pour renforcer la solidité financière des acteurs.',
            },
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'À quoi correspond la « marge de solvabilité » exigée par la réglementation CIMA ?',
              options: [
                'À la commission versée aux agents commerciaux',
                'Au coussin supplémentaire de fonds propres libres dont doit disposer l’assureur au-delà de ses provisions techniques pour absorber les aléas imprévus',
                'Au montant total de la TCA payée à l’État',
                'À la remise commerciale accordée aux bons conducteurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La marge de solvabilité constitue un matelas de fonds propres supplémentaires destiné à absorber les chocs exceptionnels au-delà des provisions techniques normales.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'CICA-RE',
            stepTheme: 'violet',
            stepTitle: 'Rôle stratégique de la CICA-RE et règles de réassurance en zone CIMA',
            paragraphText:
              'Sans réassurance régionale, une part massive des primes collectées en Afrique partirait définitivement vers des réassureurs étrangers hors continent.\n' +
              '• **Mission de la CICA-RE** : créée par les États membres, la Compagnie Commune de Réassurance offre une capacité de réassurance africaine solide et mutualise les risques entre les 14 pays.\n' +
              '• **Cession légale** : les compagnies opérant en zone CIMA sont tenues de céder une quote-part légale de leurs affaires à la CICA-RE, renforçant ainsi la rétention financière régionale.\n' +
              '• **Effet macroéconomique** : maintient l’épargne et les devises dans la zone Franc pour financer les économies locales tout en protégeant les compagnies nationales.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Quel est le rôle principal de la CICA-RE dans l’écosystème des assurances de la zone CIMA ?',
              options: [
                'Vendre directement des polices auto aux particuliers',
                'Assurer la réassurance des compagnies des États membres afin de renforcer la solidité et la rétention financière régionale',
                'Collecter les impôts sur le revenu des salariés',
                'Réguler les opérateurs de téléphonie mobile',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CICA-RE est la Compagnie Commune de Réassurance des États membres de la CIMA : elle réassure les compagnies locales et retient une part des primes dans la région.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Enjeux digitaux CIMA',
            stepTheme: 'orange',
            stepTitle: 'Adapter la supervision CIMA aux défis de l’InsurTech et de la microassurance',
            paragraphText:
              'La montée en puissance de l’assurance digitale et de la microassurance mobile impose à la régulation CIMA d’évoluer sans sacrifier la protection des assurés.\n' +
              '• **Cadre dédié à la microassurance** : le Code CIMA a intégré un livre spécifique permettant l’agrément d’entreprises de microassurance avec des règles proportionnées (contrats simplifiés, distribution via télécoms et microfinance).\n' +
              '• **Validité juridique du digital** : reconnaissance de la souscription électronique, de la signature numérique et du paiement préalable des primes via Mobile Money (règle CIMA du paiement comptant de la prime : « pas de prime, pas de garantie »).\n' +
              '• **Protection des données et cybersécurité** : encadrement strict de l’usage du Big Data, de l’IA et des données de santé/IoT pour éviter les discriminations abusives et les fuites de données.',
            keyRule:
              'En zone CIMA, la règle du paiement comptant (**article 13 du Code CIMA** : prise d’effet conditionnée au paiement de la prime) s’harmonise parfaitement avec le paiement instantané par **Mobile Money**.',
            exercise: {
              id: 'lmd_entd_l1_assurance_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Comment le paiement par Mobile Money facilite-t-il le respect de la règle CIMA du paiement comptant de la prime (article 13) ?',
              options: [
                'En permettant de payer la prime cinq ans après le sinistre',
                'En permettant un encaissement instantané et traçable de la prime au moment de la souscription, conditionnant immédiatement la prise d’effet de la garantie',
                'En supprimant toute trace comptable de la transaction',
                'En dispensant la compagnie de constituer des provisions techniques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Mobile Money garantit un règlement immédiat, sécurisé et traçable dès la souscription, assurant la conformité stricte avec le principe CIMA de prise d’effet après encaissement de la prime.',
            },
          },
        ],
      }),
    ],
  },
];
