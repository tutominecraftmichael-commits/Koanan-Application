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
  // CHAPITRE 1 : MODÈLES ÉCONOMIQUES NUMÉRIQUES ET PROPOSITION DE VALEUR
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch1',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Modèles économiques numériques et proposition de valeur',
    summary:
      "Définir un modèle économique numérique (Osterwalder & Pigneur), ses 5 spécificités, l'alignement stratégique avec la proposition de valeur et la typologie des 8 sources de revenus.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1',
        order: 1,
        title: "Définition et spécificités d'un modèle économique numérique",
        summary:
          "Les 4 questions d'Osterwalder & Pigneur (2010), les 5 spécificités économiques du numérique et les enjeux stratégiques du choix du modèle.",
        conceptExplanation:
          "Selon Osterwalder & Pigneur (2010), un modèle économique décrit la manière dont une organisation crée, délivre et capture de la valeur. Il répond à quatre questions fondamentales :\n- Qui ? la cible (segments de clients) ;\n- Quoi ? la proposition de valeur (offre) ;\n- Comment ? la chaîne de valeur (ressources, activités, partenariats) ;\n- Combien ? la structure de revenus et de coûts.\n\nUn modèle économique numérique présente cinq spécificités majeures :\n1. Biens informationnels : non-rivalité (plusieurs personnes consomment le bien sans l'épuiser) et non-exclusion (difficulté à rendre le contenu exclusif).\n2. Coût marginal proche de zéro : permet de scaler (passer à l'échelle) sans hausse proportionnelle des coûts et rend viables les modèles freemium.\n3. Effets de réseau : la valeur du service croît avec le nombre d'utilisateurs, créant une forte concentration.\n4. Désintermédiation : connexion directe entre offreurs et demandeurs modifiant coûts et marges.\n5. Données comme actif stratégique : ciblage publicitaire, amélioration produit, revente agrégée.\n\nLe choix du modèle économique est stratégique : il conditionne la structure de financement, la trajectoire de croissance, la valorisation financière ainsi que les risques et la résilience.",
        keyRule:
          "Retiens Osterwalder & Pigneur (Qui, Quoi, Comment, Combien) et les 5 spécificités numériques : biens informationnels (non-rivaux), coût marginal ≈ 0, effets de réseau, désintermédiation et données stratégiques.",
        formulas: [
          {
            name: 'Les 4 piliers d’Osterwalder & Pigneur (2010)',
            formula: 'Modèle économique = Qui (cible) + Quoi (offre) + Comment (chaîne) + Combien (revenus/coûts)',
            note: 'Décrit la création, la délivrance et la capture de valeur.',
          },
          {
            name: 'Condition de scalabilité numérique',
            formula: 'Coût fixe initial élevé  +  Coût marginal ≈ 0  ⇒  Rendements croissants à l’échelle',
            note: 'Autorise le modèle freemium et une croissance rapide du nombre d’utilisateurs.',
          },
        ],
        workedExample: {
          title: 'Analyser la scalabilité d’un logiciel SaaS éducatif',
          statement:
            "Une plateforme SaaS d'apprentissage en ligne coûte 20 millions FCFA à développer la première année, mais l'ajout d'un nouvel abonné ne coûte que 200 FCFA de serveur par an. Analysez ce cas à l'aide des spécificités du modèle économique numérique.",
          methodSteps: [
            "Coût marginal proche de zéro : servir 1 000 ou 50 000 étudiants n'augmente presque pas le coût unitaire de reproduction du contenu.",
            'Bien informationnel non-rival : plusieurs milliers d’étudiants peuvent consulter le même cours simultanément sans l’épuiser.',
            'Actif stratégique données : les statistiques de réussite des étudiants permettent d’améliorer l’algorithme de recommandation.',
            'Viabilité freemium : le coût marginal quasi nul autorise d’offrir une version gratuite financée par les abonnés payants.',
          ],
          conclusion:
            "Les spécificités numériques permettent un passage à l'échelle (« scaling ») rapide impossible pour une entreprise industrielle classique.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Osterwalder & Pigneur',
            stepTheme: 'Modèle économique',
            stepTitle: 'Les quatre questions fondamentales du modèle économique',
            paragraphText:
              "Selon Osterwalder & Pigneur (2010), un modèle économique explique comment une organisation crée, délivre et capture de la valeur en répondant à quatre questions : Qui ? (cible), Quoi ? (proposition de valeur), Comment ? (chaîne de valeur) et Combien ? (structure de revenus et de coûts).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q1',
              type: 'mcq',
              prompt:
                "Selon Osterwalder & Pigneur (2010), à quelle question fondamentale correspond la « structure de revenus et de coûts » ?",
              options: ['Qui ?', 'Quoi ?', 'Combien ?', 'Où ?'],
              correctAnswerIndex: 2,
              explanation:
                'Qui = cible, Quoi = proposition de valeur, Comment = chaîne de valeur, Combien = structure de revenus et de coûts.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Spécificité 1',
            stepTheme: 'Biens informationnels',
            stepTitle: 'Non-rivalité et non-exclusion des biens informationnels',
            paragraphText:
              "Un bien informationnel (logiciel, musique numérique, article) se distingue d'un bien physique par deux traits : la non-rivalité (sa consommation par un utilisateur n'empêche pas un autre de le consommer) et la non-exclusion (il est difficile techniquement d'empêcher son accès ou sa copie).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q2',
              type: 'mcq',
              prompt:
                "Que signifie la « non-rivalité » d'un bien informationnel dans l'économie numérique ?",
              options: [
                'Un bien numérique peut être consommé par plusieurs personnes sans s’épuiser',
                "Il n'existe aucun concurrent sur le marché des logiciels",
                'Le bien numérique ne peut être acheté que par un seul client',
                'Le prix du bien numérique est toujours fixé par décret',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La non-rivalité signifie que la consommation du bien par un individu ne réduit pas la quantité disponible pour les autres.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Spécificité 2',
            stepTheme: 'Coût marginal',
            stepTitle: 'Coût marginal proche de zéro et scalabilité',
            paragraphText:
              "Dans le numérique, reproduire et distribuer une unité supplémentaire coûte presque zéro. Ce coût marginal quasi nul permet de scaler (croître massivement) sans augmentation proportionnelle des coûts et rend viables des modèles comme le freemium.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle implication directe découle d’un coût marginal proche de zéro dans les services numériques ?',
              options: [
                "L'obligation de limiter la clientèle à un petit quartier",
                'La possibilité de scaler sans hausse proportionnelle des coûts et de rendre le freemium viable',
                'La disparition complète des coûts fixes de développement',
                "L'impossibilité de proposer des offres gratuites",
              ],
              correctAnswerIndex: 1,
              explanation:
                "Un coût marginal quasi nul permet d'absorber un afflux d'utilisateurs (y compris gratuits en freemium) sans explosion des coûts variables.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Enjeu stratégique',
            stepTheme: 'Choix du modèle',
            stepTitle: 'Ce que conditionne le choix du modèle économique',
            paragraphText:
              "Le modèle économique dépasse la simple question « comment gagner de l'argent ». Il conditionne quatre dimensions stratégiques : la structure de financement, la trajectoire de croissance, la valorisation financière et les risques/résilience de l'entreprise.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q4',
              type: 'mcq',
              prompt:
                "Parmi les quatre dimensions suivantes, lesquelles sont directement conditionnées par le choix du modèle économique ?",
              options: [
                'Uniquement la couleur du logo et le nom de domaine',
                'Uniquement le salaire du comptable',
                'Uniquement la taille des bureaux physiques',
                'La structure de financement, la trajectoire de croissance, la valorisation financière et la résilience',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le modèle économique structure le financement, la croissance, la valorisation financière et le profil de risque/résilience.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Mauvais alignement',
            stepTitle: 'Les trois causes fréquentes d’échec par mauvais alignement',
            paragraphText:
              "De nombreux échecs numériques proviennent d'un décalage entre le modèle économique et : (1) la nature du marché (ex. freemium sur une niche à coût d'acquisition trop élevé) ; (2) la proposition de valeur (ex. monétiser par la pub un service promettant la confidentialité) ; (3) la maturité de l'entreprise (ex. abonnement lancé sans Product Market Fit solide).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Monétiser par de la publicité ciblée une messagerie chiffrée qui promet une confidentialité absolue illustre quel type d’échec ?',
              options: [
                'Un décalage entre le modèle économique et la proposition de valeur',
                'Un excès d’effets de réseau positifs',
                'Un problème de coût marginal trop faible',
                'Un manque de non-rivalité du logiciel',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La publicité ciblée repose sur l'exploitation des données utilisateur, ce qui contredit frontalement une promesse de confidentialité.",
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2',
        order: 2,
        title: 'Alignement avec la proposition de valeur et typologie des 8 sources de revenus',
        summary:
          "Maîtriser les 3 types d'alignement (fonctionnel, temporel, incitatif) et les 8 grandes sources de revenus de l'économie numérique.",
        conceptExplanation:
          "La proposition de valeur est la promesse concrète faite au client : le bénéfice qui répond à « Pourquoi choisir cette offre plutôt qu'une autre ? ». Elle est orientée client (fonctionnalités, UX, marque, confiance — le « quoi » et le « pour qui »), tandis que le modèle économique est orienté entreprise/actionnaires (tarification, coûts, revenus — le « comment capturer la valeur »).\n\nLeur cohérence exige trois types d'alignement :\n1. Alignement fonctionnel : le modèle économique ne doit pas entraver la proposition de valeur.\n2. Alignement temporel : la temporalité de la création de valeur doit correspondre à celle de la capture de valeur.\n3. Alignement incitatif : le modèle économique doit aligner les intérêts de l'entreprise avec ceux des utilisateurs.\n\nLe cours classe les sources de revenus numériques en 8 catégories : Publicité (Google, Meta), Abonnement (Netflix, Spotify, Salesforce), Freemium (Dropbox, LinkedIn Premium, Canva), Commission/Transaction (Uber, Airbnb, Amazon Marketplace), Licence/API (OpenAI API, Stripe, Twilio), Données agrégées (Bloomberg, Experian, fintechs), Vente de biens/services (Amazon retail, Apple hardware) et Modèles hybrides (Amazon : retail + Prime + pub + AWS cloud).",
        keyRule:
          "Vérifie toujours les 3 alignements entre proposition de valeur et modèle économique : Fonctionnel (ne pas gêner l'usage), Temporel (payer quand la valeur est reçue) et Incitatif (intérêts convergents).",
        formulas: [
          {
            name: 'Grille de cohérence stratégique',
            formula: 'Alignement global = Alignement fonctionnel + Alignement temporel + Alignement incitatif',
            note: 'Condition indispensable pour convertir la valeur créée en revenus durables.',
          },
        ],
        workedExample: {
          title: 'Identifier les sources de revenus d’un modèle hybride (Amazon)',
          statement:
            "Amazon combine boutique en ligne, place de marché pour vendeurs tiers, abonnement Prime, publicités sponsorisées et services cloud AWS. Identifiez les sources de revenus mobilisées selon la typologie des modèles de revenus.",
          methodSteps: [
            'Vente directe de produits (Amazon retail) -> Vente de biens/services.',
            'Amazon Marketplace (prélèvement sur vendeurs tiers) -> Commission / Transaction.',
            'Amazon Prime (paiement récurrent pour livraison + vidéo) -> Abonnement.',
            'Produits sponsorisés dans la recherche -> Publicité.',
            'AWS (infrastructure cloud à l’usage / API) -> Licence / API & services cloud.',
          ],
          conclusion:
            "Amazon est l'archétype du modèle hybride : combiner plusieurs sources de revenus renforce la résilience financière et la capture de valeur.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Proposition de valeur',
            stepTheme: 'Promesse client',
            stepTitle: 'Opposer proposition de valeur et modèle économique',
            paragraphText:
              "La proposition de valeur répond à « Quel problème résolvons-nous et pour qui ? » : elle est orientée client (fonctionnalités, UX, marque, confiance). Le modèle économique répond à « Comment capturons-nous la valeur créée ? » : il est orienté entreprise/actionnaires (tarification, coûts, canaux de revenus).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle différence d’orientation distingue la proposition de valeur du modèle économique ?',
              options: [
                'La proposition de valeur est orientée client ; le modèle économique est orienté entreprise / actionnaires',
                'La proposition de valeur fixe les impôts ; le modèle économique crée le design',
                'Les deux visent exclusivement les actionnaires sans tenir compte du client',
                'La proposition de valeur ne concerne que les entreprises industrielles',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La proposition de valeur exprime le bénéfice client (« quoi / pour qui »), tandis que le modèle économique organise la capture de valeur (« comment / combien ») pour l’entreprise.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Alignements',
            stepTheme: '3 alignements clés',
            stepTitle: 'Alignement fonctionnel, temporel et incitatif',
            paragraphText:
              "Trois alignements garantissent la solidité du business model : (1) fonctionnel (la monétisation n'entrave pas l'usage) ; (2) temporel (on capture la valeur au rythme où elle est créée) ; (3) incitatif (les intérêts de l'entreprise convergent avec ceux de l'utilisateur).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q2',
              type: 'mcq',
              prompt:
                "Une plateforme de covoiturage ne perçoit une commission que lorsque le trajet est effectivement réservé et réalisé. Quel alignement cela illustre-t-il particulièrement ?",
              options: [
                "L'absence de modèle économique",
                "L'alignement temporel et incitatif (la plateforme gagne uniquement quand le client obtient son service)",
                'Un modèle de vente de biens physiques',
                'Un désalignement fonctionnel majeur',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La capture de valeur (commission) coïncide dans le temps avec le service rendu (alignement temporel) et aligne les intérêts de la plateforme et des usagers (alignement incitatif).",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Revenus API',
            stepTheme: 'Licence / API',
            stepTitle: 'Le modèle Licence / API dans l’écosystème tech',
            paragraphText:
              "La source de revenus « Licence / API » consiste à facturer un accès payant à une brique technologique intégrée par d'autres entreprises : c'est le cas d'OpenAI API (intelligence artificielle), Stripe (paiement en ligne) ou Twilio (messagerie/téléphonie cloud).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Parmi les entreprises suivantes citées en cours, lesquelles illustrent le modèle de revenus « Licence / API » ?',
              options: [
                'Netflix et Canal+',
                'Airbnb et Uber',
                'OpenAI API, Stripe et Twilio',
                'Meta et les journaux gratuits',
              ],
              correctAnswerIndex: 2,
              explanation:
                'OpenAI API, Stripe et Twilio vendent un accès technologique programmatique (API) à d’autres entreprises.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Typologie',
            stepTheme: 'Données & Freemium',
            stepTitle: 'Monétisation des données agrégées et modèles hybrides',
            paragraphText:
              "Certaines entreprises monétisent directement des données agrégées et analyses financières ou de crédit (Bloomberg, Experian, fintechs). D'autres, comme Amazon, déploient un modèle hybride combinant retail, abonnement (Prime), commission (Marketplace), publicité et cloud (AWS).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle source de revenus est illustrée par Bloomberg et Experian ?',
              options: [
                'Le modèle du don',
                'La commission sur covoiturage',
                'La vente de matériel informatique grand public',
                'La monétisation des données agrégées',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Bloomberg et Experian sont cités en cours comme références de la monétisation des données agrégées à haute valeur ajoutée.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Freemium vs Abonnement',
            stepTitle: 'Distinguer abonnement pur et freemium',
            paragraphText:
              "Attention : dans l'abonnement pur (ex. Netflix, Salesforce), tout accès nécessite un paiement récurrent ; dans le freemium (ex. Dropbox, Canva, LinkedIn Premium), une version de base gratuite coexiste durablement avec des options payantes.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quel trio d’exemples illustre spécifiquement le modèle « Freemium » (gratuit + options payantes) ?',
              options: [
                'Dropbox, LinkedIn Premium et Canva',
                'Bloomberg, Experian et Stripe',
                'Uber, Airbnb et Amazon Marketplace',
                'Apple hardware et ventes en gros',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dropbox, LinkedIn Premium et Canva offrent un cœur gratuit permanent complété par des fonctionnalités avancées payantes.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : MODÈLES PUBLICITAIRES ET MODÈLES D'ABONNEMENT
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch2',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: "Chapitre 2 : Modèles publicitaires et modèles basés sur l'abonnement",
    summary:
      "Maîtriser l'écosystème, les formats et les indicateurs tarifaires (CPM, CPV, CPC, CPE, CPA, CPL, CPI) de la publicité en ligne, ainsi que l'économie et les enjeux de l'abonnement.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1',
        order: 1,
        title: 'Écosystème, formats et tarifications de la publicité en ligne',
        summary:
          "Marché biface de l'attention, 5 acteurs de l'écosystème, formats Search/Display/Vidéo et 7 modèles de tarification (CPM, CPV, CPC, CPE, CPA, CPL, CPI).",
        conceptExplanation:
          "La publicité est une communication payante visant à influencer l'attitude et le comportement d'une cible envers un produit, service ou cause. En ligne, le modèle publicitaire s'inscrit dans un marché biface : les internautes accèdent gratuitement au service mais « paient » avec leur attention et leurs données, tandis que les annonceurs financent la plateforme grâce au ciblage.\n\nL'écosystème rassemble cinq acteurs : les annonceurs, les agences, les intermédiaires technologiques (adtech), les éditeurs et les internautes.\n\nTrois grandes catégories de formats dominent :\n- Search (Recherche) : liens sponsorisés et Shopping Ads déclenchés par mots-clés (Google Ads, Bing Ads) ;\n- Display (Affichage) : bannières, rich media et native ads (qui imitent le design du site) ;\n- Vidéo : pre-roll, mid-roll, out-stream et bumpers très courts (YouTube, TikTok).\n\nLes modèles de tarification se classent en 3 familles selon l'objectif marketing :\n1. Visibilité / notoriété : CPM (Coût Pour Mille impressions), CPV (Coût Par Vue vidéo).\n2. Engagement / trafic : CPC (Coût Par Clic), CPE (Coût Par Engagement : like, partage, commentaire).\n3. Performance / résultats : CPA (Coût Par Action/Acquisition : achat, inscription), CPL (Coût Par Lead : contact commercial/devis) et CPI (Coût Par Installation d'application mobile).",
        keyRule:
          "Relie chaque indicateur à son objectif : Notoriété = CPM / CPV ; Trafic & Engagement = CPC / CPE ; Performance & Conversion = CPA / CPL / CPI.",
        formulas: [
          {
            name: 'Coût Pour Mille (CPM)',
            formula: 'CPM = (Budget dépensé / Nombre d’impressions) × 1 000',
            note: 'Privilégie la portée maximale et la notoriété de marque.',
          },
          {
            name: 'Coût Par Clic (CPC) & Coût Par Acquisition (CPA)',
            formula: 'CPC = Budget / Nombre de clics   |   CPA = Budget / Nombre de conversions',
            note: 'Variantes du CPA : CPL (lead/contact) et CPI (installation mobile).',
          },
        ],
        workedExample: {
          title: 'Choisir et calculer le bon modèle tarifaire pour une campagne digitale',
          statement:
            "Une fintech ivoirienne dépense 500 000 FCFA sur une campagne mobile qui génère 250 000 impressions, 5 000 clics et 1 000 installations de son application. Calculez le CPM, le CPC et le CPI équivalents, puis indiquez quel modèle privilégier pour maximiser les téléchargements.",
          methodSteps: [
            'CPM = (500 000 / 250 000) × 1 000 = 2 000 FCFA pour 1 000 impressions.',
            'CPC = 500 000 / 5 000 = 100 FCFA par clic.',
            'CPI = 500 000 / 1 000 = 500 FCFA par installation.',
            "Pour une application mobile cherchant des téléchargements effectifs, le modèle CPI (performance) est le mieux aligné avec l'objectif commercial.",
          ],
          conclusion:
            'Le choix du modèle de facturation (CPM, CPC ou CPI) déplace le risque de performance entre éditeur et annonceur selon l’objectif de la campagne.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Marché biface',
            stepTheme: 'Économie de l’attention',
            stepTitle: 'Comment fonctionne le modèle économique publicitaire en ligne ?',
            paragraphText:
              "Dans le modèle publicitaire numérique, la plateforme opère sur un marché biface : les internautes accèdent gratuitement au service en « payant » avec leur attention et leurs données, tandis que les annonceurs financent la plateforme pour diffuser des publicités ciblées. Cinq acteurs composent l'écosystème : annonceurs, agences, intermédiaires technologiques, éditeurs et internautes.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Dans un modèle économique numérique basé sur la publicité, avec quoi l’utilisateur gratuit « paie-t-il » réellement le service ?',
              options: [
                'Avec un abonnement mensuel obligatoire',
                'Avec son attention et ses données personnelles',
                'Avec une commission bancaire sur chaque page consultée',
                'Avec des droits de douane numériques',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Sur un marché biface publicitaire, l'utilisateur paie indirectement par son attention et ses données, qui permettent le ciblage vendu aux annonceurs.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Formats',
            stepTheme: 'Search, Display, Vidéo',
            stepTitle: 'Identifier les trois grandes familles de formats publicitaires',
            paragraphText:
              "Les formats se répartissent en : Search (liens sponsorisés et Shopping Ads déclenchés par mots-clés sur Google/Bing), Display (bannières, rich media, native ads imitant le design du site) et Vidéo (pre-roll avant la vidéo, mid-roll pendant, out-stream et bumpers très courts sur YouTube ou TikTok).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle catégorie de format publicitaire comprend les « Native Ads » (annonces imitant le design éditorial du site) et les bannières ?',
              options: ['Le Search', 'Le CPI', 'Le Display (affichage)', 'Le Pre-roll uniquement'],
              correctAnswerIndex: 2,
              explanation:
                'Les bannières, le rich media et les native ads appartiennent à la famille du Display (affichage).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Notoriété',
            stepTheme: 'CPM & CPV',
            stepTitle: 'Tarification à la visibilité : CPM et CPV',
            paragraphText:
              "Pour développer la notoriété d'une marque, on privilégie le CPM (Coût Pour Mille impressions, idéal pour la portée maximale) ou le CPV (Coût Par Vue, spécifique à la vidéo, facturé uniquement si l'internaute regarde une durée définie comme 30 secondes ou la totalité).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Une entreprise lance une nouvelle marque de jus et souhaite maximiser le nombre d’affichages de sa bannière auprès du grand public. Quel modèle tarifaire est le plus adapté ?',
              options: [
                'Le CPM (Coût Pour Mille impressions)',
                'Le CPI (Coût Par Installation)',
                'Le CPL (Coût Par Lead)',
                'Le modèle coopératif',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le CPM facture chaque tranche de 1 000 affichages et vise la visibilité/notoriété maximale d’une marque.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Trafic & Performance',
            stepTheme: 'CPC, CPE, CPA, CPL, CPI',
            stepTitle: 'Tarification à l’engagement et à la performance',
            paragraphText:
              "Pour le trafic et l'engagement, on utilise le CPC (Coût Par Clic, standard de Google Ads) et le CPE (Coût Par Engagement : like, partage, commentaire). Pour la performance pure, on recourt au CPA (Coût Par Action/Acquisition : achat, inscription), au CPL (Coût Par Lead : formulaire de devis/contact commercial) et au CPI (Coût Par Installation d'app mobile).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Une compagnie d’assurance paie uniquement lorsqu’un prospect remplit un formulaire complet de demande de devis en ligne. De quel modèle tarifaire s’agit-il ?',
              options: ['CPM', 'CPV', 'CPE', 'CPL (Coût Par Lead)'],
              correctAnswerIndex: 3,
              explanation:
                'Le CPL (variante du CPA) consiste à rémunérer spécifiquement la génération d’un contact commercial qualifié (formulaire de devis).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Calcul CPM / CPC',
            stepTitle: 'Bien manipuler le facteur 1 000 dans le CPM',
            paragraphText:
              "En examen, ne confonds pas le coût d'une impression avec le CPM ! Pour 400 000 FCFA dépensés et 200 000 impressions, une impression coûte 2 FCFA, mais le CPM (pour 1 000 impressions) vaut (400 000 / 200 000) × 1 000 = 2 000 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Une campagne coûte 300 000 FCFA et génère 150 000 impressions ainsi que 3 000 clics. Quelles sont les valeurs respectives du CPM et du CPC ?',
              options: [
                'CPM = 2 FCFA et CPC = 10 FCFA',
                'CPM = 2 000 FCFA et CPC = 100 FCFA',
                'CPM = 500 FCFA et CPC = 50 FCFA',
                'CPM = 20 000 FCFA et CPC = 1 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CPM = (300 000 / 150 000) × 1 000 = 2 000 FCFA ; CPC = 300 000 / 3 000 = 100 FCFA.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2',
        order: 2,
        title: "Logique économique et avantages du modèle d'abonnement",
        summary:
          "Passage de la propriété à l'accès (transactionnel vs récurrent) et bénéfices respectifs pour l'entreprise, le consommateur et l'écosystème numérique.",
        conceptExplanation:
          "Le modèle basé sur l'abonnement implique que les utilisateurs paient régulièrement pour accéder à un contenu ou service numérique pendant une durée déterminée sans en devenir propriétaires. Dans l'économie numérique, l'abonnement transfère la propriété du bien vers la location du service.\n\nOn distingue :\n- le modèle transactionnel (achat définitif, ex. téléchargement d'un morceau sur iTunes) ;\n- le modèle récurrent (accès temporaire, ex. abonnement Spotify).\n\nCe modèle offre des avantages majeurs aux trois niveaux :\n1. Pour l'entreprise : revenus prévisibles (meilleure trésorerie et valorisation boursière), réduction du piratage (authentification requise), données clients continues (personnalisation), mises à jour continues (fin des cycles de versions coûteux) et amortissement du coût d'acquisition client sur la durée.\n2. Pour le consommateur : coût d'entrée faible, accès à un catalogue large (mutualisation des coûts), flexibilité de résiliation et absence d'obsolescence (mises à jour automatiques).\n3. Pour l'écosystème : standardisation des usages, baisse des coûts de distribution physique et meilleure allocation des serveurs et de la bande passante.",
        keyRule:
          "L'abonnement fait passer l'économie numérique de la propriété du bien (transactionnel) à l'accès récurrent au service, créant de la prévisibilité pour l'entreprise et un faible coût d'entrée pour le client.",
        formulas: [
          {
            name: 'Valeur vie client (LTV) simplifiée en abonnement',
            formula: 'Revenu cumulé d’un abonné = Abonnement mensuel × Durée moyenne de rétention',
            note: 'Rentable si le revenu cumulé amortit largement le Coût d’Acquisition Client (CAC).',
          },
        ],
        workedExample: {
          title: 'Comparer modèle transactionnel et abonnement pour un éditeur logiciel',
          statement:
            "Un éditeur vendait sa suite bureautique 300 000 FCFA en licence perpétuelle (renouvelée tous les 5 ans). Il passe à un abonnement de 7 500 FCFA/mois (90 000 FCFA/an). Comparez les flux sur 5 ans pour l'entreprise et l'accessibilité pour le client.",
          methodSteps: [
            'Coût initial pour le client : passe de 300 000 FCFA d’un coup à 7 500 FCFA le premier mois (barrière à l’entrée divisée par 40).',
            'Revenu cumulé sur 5 ans pour l’éditeur : 90 000 × 5 = 450 000 FCFA contre 300 000 FCFA en licence unique (+50 %).',
            'Stabilité et lutte contre le piratage : flux mensuel prévisible, mises à jour continues et contrôle par authentification cloud.',
          ],
          conclusion:
            "L'abonnement élargit la clientèle en abaissant le prix d'entrée tout en augmentant la valeur cumulée et la prévisibilité financière de l'éditeur.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Transition',
            stepTheme: 'Propriété vs Accès',
            stepTitle: 'Du modèle transactionnel au modèle récurrent',
            paragraphText:
              "Contrairement au modèle transactionnel (achat définitif d'un fichier ou logiciel), le modèle par abonnement repose sur un paiement récurrent donnant un accès temporaire sans transfert de propriété : on passe de la propriété du bien à la location du service.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q1',
              type: 'mcq',
              prompt:
                "Quelle mutation fondamentale opère le modèle d'abonnement dans l'économie numérique ?",
              options: [
                'Le passage de la location du service à la propriété physique définitive',
                'Le transfert de la propriété du bien vers la location (accès temporaire) du service',
                'La suppression de toute authentification utilisateur',
                'Le retour exclusif aux supports CD et DVD physiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'abonné paie régulièrement un accès temporaire sans devenir propriétaire définitif du contenu ou du logiciel.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Entreprise',
            stepTheme: 'Avantages éditeur',
            stepTitle: 'Pourquoi les entreprises numériques plébiscitent l’abonnement',
            paragraphText:
              "Pour l'entreprise, l'abonnement apporte cinq atouts : revenus prévisibles (meilleure valorisation boursière), réduction du piratage (accès authentifié), données d'usage pour personnaliser l'offre, mises à jour continues et amortissement du coût d'acquisition sur la durée.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q2',
              type: 'mcq',
              prompt:
                "Pourquoi le modèle d'abonnement réduit-il fortement le piratage par rapport à la vente de logiciels hors ligne ?",
              options: [
                'Parce que les abonnements sont toujours gratuits',
                'Parce que le logiciel ne fonctionne pas sur Internet',
                "Parce que l'accès au service cloud nécessite une authentification difficile à contourner massivement",
                'Parce que les consommateurs ne connaissent pas la copie numérique',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'authentification continue sur les serveurs du prestataire limite la duplication illégale du service.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Consommateur',
            stepTheme: 'Avantages client',
            stepTitle: 'Les quatre bénéfices de l’abonnement pour le consommateur',
            paragraphText:
              "Côté consommateur, l'abonnement offre un coût d'entrée faible, l'accès à un catalogue large (coûts mutualisés), la flexibilité de résiliation (hors engagement) et l'absence d'obsolescence grâce aux mises à jour automatiques.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q3',
              type: 'mcq',
              prompt:
                "Quel avantage concret permet à un abonné de profiter d'un vaste catalogue de films ou musiques pour un prix mensuel modeste ?",
              options: [
                'La mutualisation des coûts entre tous les abonnés et le faible coût d’entrée',
                'Le fait que l’abonné devienne propriétaire des studios de cinéma',
                "L'absence de droits d'auteur sur Internet",
                'La suppression des serveurs de stockage',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La mutualisation entre millions d’abonnés rend accessible un catalogue très large pour un coût mensuel faible.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Écosystème',
            stepTheme: 'Effets systémiques',
            stepTitle: 'Impact sur l’écosystème numérique',
            paragraphText:
              "À l'échelle de l'écosystème, la généralisation de l'abonnement favorise la standardisation des usages, la réduction des coûts de distribution physique et une meilleure allocation des ressources techniques (serveurs, bande passante).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q4',
              type: 'mcq',
              prompt:
                "Lequel de ces effets relève des avantages de l'abonnement pour l'écosystème numérique dans son ensemble ?",
              options: [
                'Augmentation des coûts de distribution physique',
                'Fragmentation totale des formats techniques',
                'Interdiction des mises à jour logicielles',
                'Standardisation des usages, baisse des coûts de distribution physique et meilleure allocation des serveurs',
              ],
              correctAnswerIndex: 3,
              explanation:
                "L'abonnement dématérialisé réduit la distribution physique et optimise la planification des infrastructures cloud.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'Choix de modèle',
            stepTitle: 'Distinguer achat transactionnel et abonnement dans les cas réels',
            paragraphText:
              "Télécharger définitivement un album sur iTunes relève du modèle transactionnel. S'abonner chaque mois à Spotify pour écouter tout le catalogue en streaming relève du modèle récurrent par abonnement.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Parmi les services suivants, lequel relève d’un modèle transactionnel plutôt que d’un modèle par abonnement ?',
              options: [
                'Un forfait mensuel Spotify',
                "L'achat définitif à l'unité d'un morceau téléchargé sur iTunes",
                'Un accès mensuel à Netflix',
                'Un abonnement annuel à Adobe Creative Cloud',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'achat définitif d'un titre sur iTunes illustre parfaitement le modèle transactionnel, opposé au streaming récurrent de Spotify.",
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3',
        order: 3,
        title: "Stratégies tarifaires d'abonnement et enjeux critiques (lock-in, fatigue, inclusion)",
        summary:
          "Maîtriser les 5 stratégies de tarification (flat rate, freemium, versioning, pay-per-use, hybride) et les 6 enjeux économiques et sociaux de l'abonnement.",
        conceptExplanation:
          "Cinq grandes stratégies de tarification structurent l'économie de l'abonnement :\n1. Abonnement pur (flat rate) : prix fixe pour accès illimité (Netflix, Disney+, Canal+ Séries) ; coût marginal quasi nul malgré un risque de sur-utilisation.\n2. Freemium : version gratuite limitée + version payante complète ; convertir seulement 2 à 5 % d'utilisateurs suffit souvent à subventionner la masse gratuite (Spotify, Zoom 40 min, Dropbox, LinkedIn).\n3. Tarification à plusieurs niveaux (versioning) : formules Basic, Standard, Premium aux caractéristiques croissantes (qualité vidéo, écrans, stockage) afin de capturer le surplus des différents segments (étudiants, familles, pros).\n4. Pay-per-use (à l'usage) : paiement selon la consommation réelle (AWS à l'heure machine, cloud gaming) — équitable mais facture incertaine.\n5. Modèles hybrides : abonnement + achats intégrés, ou abonnement annuel remisé (ancrage sur le prix mensuel).\n\nSix enjeux majeurs accompagnent cette économie :\n- Fatigue de l'abonnement (cumul de prélèvements -> satiété -> regroupement en bouquets comme Apple One / Google One) ;\n- Coûts de changement (lock-in : perdre ses playlists Spotify ou configurations) ;\n- Barrières à l'entrée (les géants comme Amazon Prime ajoutent des services à moindre coût marginal) ;\n- Inclusion numérique (besoin d'un compte bancaire/carte et connexion régulière -> exclusion des non-bancarisés) ;\n- Dépossession (perte d'accès en cas de non-paiement ou fermeture du service) ;\n- Sobriété numérique (incitation à consommer en continu pour « rentabiliser » -> hausse du trafic et de l'énergie).",
        keyRule:
          "Mémorise les 5 tarifications (Flat rate, Freemium 2-5 %, Versioning, Pay-per-use, Hybride) et les 6 enjeux critiques : Fatigue, Lock-in, Barrières à l'entrée, Inclusion, Dépossession, Sobriété.",
        formulas: [
          {
            name: 'Seuil typique de conversion Freemium',
            formula: 'Taux de conversion cible ≈ 2 % à 5 % d’utilisateurs payants',
            note: 'Suffit à subventionner les utilisateurs gratuits grâce au coût marginal proche de zéro.',
          },
        ],
        workedExample: {
          title: 'Concevoir une grille tarifaire de versioning pour une plateforme de streaming',
          statement:
            "Une plateforme SVOD africaine veut maximiser ses revenus face à trois segments : étudiants à petit budget, ménages standards et familles exigeantes en 4K multi-écrans. Quelle tarification adopter et comment prévenir la « fatigue de l'abonnement » ?",
          methodSteps: [
            'Adopter une tarification à plusieurs niveaux (versioning) : Essentiel (1 écran SD à prix étudiant), Standard (2 écrans HD), Premium (4 écrans 4K) afin de capturer le surplus de chaque segment.',
            "Intégrer le paiement par Mobile Money (Orange Money, MTN MoMo, Wave) pour lever l'enjeu d'inclusion numérique lié à la faible bancarisation par carte.",
            "Lutter contre la fatigue de l'abonnement en proposant un bouquet (musique + vidéo + presse) ou un tarif annuel remisé.",
          ],
          conclusion:
            "Le versioning segmente finement la disposition à payer, tandis que l'adaptation aux paiements mobiles répond au défi spécifique d'inclusion en zone UEMOA.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Versioning',
            stepTheme: 'Tarification multiniveau',
            stepTitle: 'Pourquoi utiliser le versioning (Basic, Standard, Premium) ?',
            paragraphText:
              "La tarification à plusieurs niveaux (versioning) propose des formules différenciées par qualité vidéo, nombre d'écrans ou stockage (ex. Netflix Essentiel / Standard / Premium). Son objectif économique est de capturer le surplus des différents segments (étudiants, familles, professionnels).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Quel est l’objectif économique principal de la tarification à plusieurs niveaux (versioning) ?',
              options: [
                'Obliger tous les clients à payer exactement le même prix unique',
                'Capturer le surplus de différents segments (étudiants, familles, professionnels) via des formules différenciées',
                'Supprimer toute option payante sur la plateforme',
                'Facturer uniquement à la seconde de calcul serveur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le versioning (discrimination par la qualité/fonctionnalités) permet d’adapter l’offre à la disposition à payer de chaque segment.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Freemium & Pay-per-use',
            stepTheme: 'Comparaison tarifaire',
            stepTitle: 'Taux de conversion freemium et logique du pay-per-use',
            paragraphText:
              "En freemium (Spotify, Zoom, Dropbox), convertir seulement 2 à 5 % d'utilisateurs vers la version payante suffit souvent à financer la base gratuite. Le pay-per-use (ex. AWS à l'heure machine) offre une équité parfaite basée sur la consommation réelle, mais crée une incertitude sur la facture finale.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le principal inconvénient pour l’utilisateur du modèle « Pay-per-use » (paiement à l’usage, comme AWS) ?',
              options: [
                'Il est injuste car les petits utilisateurs paient pour les gros',
                'Il interdit toute utilisation professionnelle',
                "L'incertitude sur le montant final de la facture",
                'Il empêche toute mesure de la consommation réelle',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Si le pay-per-use assure une équité parfaite (on paie exactement ce qu'on consomme), il expose le client à une imprévisibilité de sa facture.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Lock-in',
            stepTheme: 'Coûts de changement',
            stepTitle: 'Effet de verrouillage (lock-in) et fatigue de l’abonnement',
            paragraphText:
              "Le lock-in (coûts de changement) rend l'utilisateur captif car quitter la plateforme lui fait perdre le temps investi (playlists Spotify, historiques, configurations). La fatigue de l'abonnement résulte du cumul des prélèvements mensuels et pousse aux bouquets groupés (Apple One, Google One).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Un abonné hésite à quitter Spotify pour un concurrent moins cher car il perdrait ses années de playlists et recommandations personnalisées. Quel concept économique cela illustre-t-il ?',
              options: [
                'Les coûts de changement (lock-in)',
                'La sobriété numérique',
                'La non-rivalité',
                'La désintermédiation',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les coûts de changement (lock-in) traduisent la difficulté psychologique ou technique de quitter une plateforme où l’on a accumulé données et habitudes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Enjeux sociaux',
            stepTheme: 'Inclusion & Dépossession',
            stepTitle: 'Inclusion numérique, dépossession et sobriété numérique',
            paragraphText:
              "Trois enjeux critiques pèsent sur les abonnements : (1) l'inclusion numérique (les non-bancarisés ou zones blanches sont exclus si une carte bancaire est exigée) ; (2) la dépossession (en cas de non-paiement ou fermeture du service, l'utilisateur perd tout accès) ; (3) la sobriété numérique (l'illimité pousse à surconsommer pour « rentabiliser », alourdissant l'empreinte énergétique).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q4',
              type: 'mcq',
              prompt:
                "Pourquoi l'abonnement illimité (flat rate) pose-t-il un enjeu de « sobriété numérique » ?",
              options: [
                'Parce qu’il bloque totalement l’accès à Internet le week-end',
                'Parce qu’il supprime l’usage des centres de données',
                'Parce qu’il réduit le nombre d’abonnés à zéro',
                'Parce qu’il incite à une consommation continue pour « rentabiliser » son forfait, augmentant trafic et énergie',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Le forfait illimité favorise la consommation intensive (streaming continu, stockage massif), ce qui augmente la charge réseau et la consommation énergétique.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Réponse marché',
            stepTheme: 'Bouquets & Barrières',
            stepTitle: 'Bouquets (Apple One, Google One) et barrières à l’entrée',
            paragraphText:
              "Face à la fatigue de l'abonnement, les géants répondent par des regroupements en bouquets (Apple One, Google One) et exploitent leurs bases d'abonnés existantes (ex. Amazon Prime) pour ajouter de nouveaux services à moindre coût marginal, créant de fortes barrières à l'entrée pour les nouveaux concurrents.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle réponse stratégique des géants numériques vise directement à contrer la « fatigue de l’abonnement » ?',
              options: [
                'Augmenter séparément le prix de dix petits abonnements isolés',
                'Les regroupements en bouquets multi-services comme Apple One ou Google One',
                'Supprimer toute offre numérique au profit du papier',
                'Rendre chaque logiciel incompatible avec Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les bouquets (bundling) comme Apple One ou Google One simplifient la facturation et améliorent la valeur perçue face à la saturation des prélèvements.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : ÉCONOMIE DE LA PLATEFORME ET THÉORIE DE L'AGRÉGATION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_modele_dev_eco_num_ch3',
    subjectId: 'lmd_modele_dev_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: "Chapitre 3 : Économie de la plateforme et théorie de l'agrégation",
    summary:
      "Opposer entreprise linéaire et plateforme, analyser les effets de réseau, le cas Google vs Yahoo, le renversement de chaîne de valeur par l'agrégation et les enjeux de régulation.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1',
        order: 1,
        title: 'Entreprise linéaire vs plateforme numérique et marchés bifaces',
        summary:
          "Comprendre la définition d'une plateforme, la rupture par rapport à l'entreprise linéaire et l'architecture des marchés bifaces/multifaces.",
        conceptExplanation:
          "Avant Internet, la distribution était rare, les coûts de transaction élevés et les relations clients fragmentées. Internet, le mobile, le cloud et les données ont automatisé les transactions et donné un accès direct aux utilisateurs, plaçant les plateformes au cœur de l'économie.\n\nUne plateforme numérique est une infrastructure économique et technique qui met en relation plusieurs groupes d'acteurs (producteurs/offreurs et consommateurs/utilisateurs) via des règles, données, interface, paiement et mécanismes de confiance.\n\nElle s'oppose radicalement à l'entreprise linéaire :\n- Entreprise linéaire : produit ou achète un bien/service, le vend directement au client, croît selon ses ressources internes et contrôle sa chaîne de valeur en interne.\n- Plateforme numérique : ne possède pas toujours l'offre (ex. Uber sans flotte de taxis, Airbnb sans hôtels), met en relation plusieurs groupes, croît grâce aux effets de réseau et tire sa valeur de son écosystème.\n\nSur un marché biface ou multiface, la plateforme coordonne deux ou plusieurs groupes interdépendants (utilisateurs, fournisseurs, annonceurs) grâce à son interface, ses règles et ses algorithmes.",
        keyRule:
          "L'entreprise linéaire crée de la valeur en interne (produire puis vendre) ; la plateforme crée de la valeur en orchestrant un écosystème externe (mettre en relation et capter les effets de réseau).",
        formulas: [
          {
            name: 'Rupture de logique de croissance',
            formula: 'Linéaire : Croissance ∝ Ressources internes   |   Plateforme : Croissance ∝ Effets de réseau de l’écosystème',
            note: 'Permet une scalabilité rapide sans immobiliser d’actifs physiques lourds.',
          },
        ],
        workedExample: {
          title: 'Comparer un groupe hôtelier classique (Accor) et une plateforme (Airbnb)',
          statement:
            "Comparez un groupe hôtelier construisant ses propres immeubles et Airbnb selon trois critères (propriété de l'offre, moteur de croissance, cœur opérationnel).",
          methodSteps: [
            "Propriété de l'offre : le groupe hôtelier possède ou loue les chambres (entreprise linéaire) ; Airbnb ne possède pas les logements et met en relation hôtes et voyageurs.",
            'Moteur de croissance : le groupe hôtelier croît en investissant du capital physique (ressources internes) ; Airbnb croît par effets de réseau croisés (plus de voyageurs attirent plus d’hôtes et inversement).',
            'Cœur opérationnel de la plateforme : interface, paiement sécurisé, algorithmes de matching et système d’avis (confiance).',
          ],
          conclusion:
            "La plateforme déplace la source d'avantage concurrentiel de la possession d'actifs physiques vers l'orchestration de la confiance et des interactions.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Plateforme',
            stepTheme: 'Définition centrale',
            stepTitle: "Qu'est-ce qu'une plateforme numérique ?",
            paragraphText:
              "Une plateforme numérique est une infrastructure économique et technique qui met en relation plusieurs groupes d'acteurs (producteurs/offreurs et consommateurs/utilisateurs) autour de cinq piliers : règles, données, interface, paiement et confiance.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle définition correspond le plus fidèlement à une plateforme numérique ?',
              options: [
                'Une usine qui fabrique et vend directement ses propres biens sans écosystème',
                'Une infrastructure économique et technique qui met en relation plusieurs groupes d’acteurs via des règles, données, interface, paiement et confiance',
                'Un simple ordinateur personnel non connecté à Internet',
                'Un organisme public chargé uniquement de collecter la TVA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La plateforme organise l’interaction entre plusieurs groupes d’acteurs en fournissant interface, règles, données, paiement et confiance.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Comparaison',
            stepTheme: 'Linéaire vs Plateforme',
            stepTitle: 'Différence de création de valeur entre entreprise linéaire et plateforme',
            paragraphText:
              "L'entreprise linéaire produit ou achète un bien pour le revendre directement, avec une croissance limitée par ses ressources internes. La plateforme numérique ne possède pas toujours l'offre : elle met en relation des groupes et sa croissance est portée par les effets de réseau de l'écosystème.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui caractérise fondamentalement une entreprise linéaire par opposition à une plateforme numérique ?',
              options: [
                'Elle ne possède jamais de stock et croît uniquement par effets de réseau',
                'Elle fonctionne uniquement grâce aux algorithmes de matching C2C',
                'Elle produit ou achète un bien/service et le vend directement au client en contrôlant sa chaîne de valeur en interne',
                'Elle interdit toute facturation directe aux clients',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La logique linéaire suit une chaîne interne (produire/acheter -> vendre) dont la croissance dépend des ressources propres de l’entreprise.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Contexte',
            stepTheme: 'Coûts de transaction',
            stepTitle: 'Pourquoi les plateformes sont devenues centrales avec Internet',
            paragraphText:
              "Avant Internet, la distribution était rare, les coûts de transaction élevés et les relations clients fragmentées. Le triptyque Internet + mobile + cloud/données a permis la distribution numérique, les transactions automatisées et l'accès direct aux utilisateurs, concentrant la demande sur des plateformes globales.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q3',
              type: 'mcq',
              prompt:
                "Quel effet majeur d'Internet, du mobile et du cloud a rendu possible l'essor mondial des plateformes numériques ?",
              options: [
                'La forte réduction des coûts de transaction, la distribution numérique et l’automatisation des échanges',
                'La hausse massive des coûts de transaction et la fragmentation des marchés',
                'La disparition des paiements électroniques',
                'La rareté croissante des canaux de distribution physique',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En abaissant drastiquement les coûts de recherche, de mise en relation et de transaction, le numérique a permis l’émergence de plateformes scalables.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Marché multiface',
            stepTheme: 'Groupes d’acteurs',
            stepTitle: 'Identifier les faces d’une plateforme biface ou multiface',
            paragraphText:
              "Un marché biface réunit deux groupes qui ont besoin l'un de l'autre (ex. passagers et chauffeurs sur Uber, acheteurs et vendeurs sur Jumia). Lorsque le modèle est publicitaire, une troisième face s'ajoute : les annonceurs, formant un marché multiface.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Sur une marketplace comme Jumia ou Amazon Marketplace, quels sont les deux groupes principaux reliés par la plateforme ?',
              options: [
                'Les banques centrales et les tribunaux',
                'Les employés internes et les actionnaires uniquement',
                'Les ministères et les fournisseurs d’électricité',
                'Les vendeurs (fournisseurs) et les acheteurs (utilisateurs)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Une marketplace connecte des vendeurs tiers (offreurs) et des acheteurs (demandeurs) via une infrastructure commune.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Technologie vs Modèle',
            stepTitle: 'La technologie soutient le modèle, elle ne le remplace pas',
            paragraphText:
              "Point clé : une infrastructure technique scalable (cloud, API, algorithmes) est indispensable au passage à l'échelle, mais « la technologie soutient le modèle économique, elle ne le remplace pas ». Sans unité de valeur claire ni confiance, la meilleure technique échoue.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p1_q5',
              type: 'mcq',
              prompt:
                "Quelle formule résume le juste rôle de l'infrastructure technique dans une plateforme ?",
              options: [
                'Une bonne technologie remplace totalement la nécessité d’un modèle de revenus',
                'La technologie soutient le modèle économique, elle ne le remplace pas',
                'Une plateforme performante n’a besoin ni de données ni de confiance',
                'Les plateformes doivent éviter toute infrastructure cloud',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La scalabilité technique est un moyen au service d’un modèle économique viable fondé sur une vraie unité de valeur.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2',
        order: 2,
        title: 'Effets de réseau, cas Google vs Yahoo et cœur opérationnel (données, matching, confiance)',
        summary:
          "Analyser le moteur de croissance par effets de réseau, la victoire de Google sur Yahoo et le trio opérationnel données-matching-confiance.",
        conceptExplanation:
          "Le moteur de croissance d'une plateforme est l'effet de réseau : plus le réseau est dense, plus la plateforme devient utile, jusqu'à atteindre la taille critique qui enclenche une boucle de croissance auto-entretenue.\n\nLe cœur opérationnel d'une plateforme performante repose sur trois piliers indissociables :\n- Les données : captées à chaque interaction pour comprendre préférences et comportements ;\n- Le matching (appariement algorithmique) : relier instantanément le bon offreur au bon demandeur (bon chauffeur, bon résultat de recherche, bon produit) ;\n- La confiance : systèmes de notation, avis vérifiés, séquestre de paiement, modération.\n\nL'étude de cas Google vs Yahoo montre l'impact décisif du modèle économique sur des services proches :\n- Yahoo fonctionnait comme un portail média classique : bannières publicitaires, coûts élevés de production de contenu et logique d'audience globale.\n- Google a privilégié une recherche simple et rapide, financée par des mots-clés vendus aux enchères, facturés au Coût Par Clic (CPC) et offrant une publicité hautement mesurable. Ce modèle scalable, léger en coûts de contenu et aligné sur l'intention de l'utilisateur a écrasé le modèle portail.",
        keyRule:
          "Une plateforme gagne sur la durée grâce à trois rouages opérationnels : Données + Matching précis + Confiance, illustrés par la victoire du CPC mesurable de Google sur le portail média de Yahoo.",
        formulas: [
          {
            name: 'Cœur opérationnel d’une plateforme',
            formula: 'Performance = Données + Algorithme de Matching + Confiance',
            note: 'Plus les interactions augmentent, plus les données affinent le matching et renforcent la rétention.',
          },
        ],
        workedExample: {
          title: 'Expliquer la divergence stratégique entre Google et Yahoo',
          statement:
            "Au début des années 2000, Yahoo et Google dominaient l'accès au Web. En analysant leurs modèles économiques, expliquez pourquoi Google a surclassé Yahoo.",
          methodSteps: [
            "Interface et coûts : Yahoo supportait des coûts éditoriaux élevés (portail média rempli de contenus et bannières) ; Google proposait une page de recherche épurée à coût marginal quasi nul.",
            'Modèle publicitaire : Yahoo vendait des bannières en logique d’audience (peu ciblées) ; Google vendait des mots-clés aux enchères liés à l’intention exacte de recherche.',
            'Facturation et performance : Google facturait au Coût Par Clic (CPC) avec une mesurabilité précise du retour sur investissement pour les annonceurs.',
          ],
          conclusion:
            'Un modèle publicitaire automatisé, ciblé sur l’intention et mesurable au CPC offre une scalabilité et une rentabilité nettement supérieures à un portail média traditionnel.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Croissance',
            stepTheme: 'Effets de réseau',
            stepTitle: 'Densité du réseau et taille critique',
            paragraphText:
              "Sur une plateforme, les effets de réseau constituent le moteur de la croissance : plus le réseau est dense (offreurs + demandeurs), plus la plateforme devient utile. Une fois la taille critique franchie, la boucle de croissance s'auto-alimente.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Que désigne la « taille critique » dans la dynamique de croissance d’une plateforme numérique ?',
              options: [
                'Le seuil minimal d’utilisateurs à partir duquel les effets de réseau enclenchent une boucle de croissance auto-entretenue',
                'La taille maximale au-delà de laquelle la plateforme doit fermer',
                'Le nombre maximal de salariés autorisé par la loi',
                'Le poids en kilogrammes des serveurs informatiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                "En deçà de la taille critique, la plateforme peine à satisfaire offreurs et demandeurs ; au-delà, les effets de réseau entretiennent spontanément l'expansion.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Cas d’école',
            stepTheme: 'Google vs Yahoo',
            stepTitle: 'Les quatre atouts du modèle Google face au portail Yahoo',
            paragraphText:
              "Contrairement à Yahoo (portail média, bannières, coûts élevés de contenu, logique d'audience), Google s'est appuyé sur quatre piliers : recherche simple, mots-clés vendus aux enchères, tarification au Coût Par Clic (CPC) et publicité mesurable.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Dans la comparaison entre Google et Yahoo, quels éléments caractérisaient le modèle de Yahoo ?',
              options: [
                'Recherche minimaliste et enchères sur mots-clés au CPC',
                'Portail média, bannières publicitaires, coûts élevés de contenu et logique d’audience',
                'Abonnement mensuel sans aucune publicité',
                'Commission C2C sur la location de logements',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Yahoo fonctionnait comme un portail média coûteux monétisé par des bannières en logique d’audience, bien moins scalable que les enchères CPC de Google.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Cœur opérationnel',
            stepTheme: 'Données, Matching, Confiance',
            stepTitle: 'Le triptyque opérationnel des plateformes performantes',
            paragraphText:
              "Le cœur opérationnel d'une plateforme repose sur trois éléments complémentaires : les données (comprendre l'offre et la demande), le matching (mettre en correspondance pertinente via des algorithmes) et la confiance (avis, garanties, sécurité de paiement).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quel trio constitue le « cœur opérationnel d’une plateforme performante » ?',
              options: [
                'Usines, entrepôts et camions de livraison',
                'Imprimerie, courrier postal et affichage urbain',
                'Données, matching (appariement) et confiance',
                'Brevets miniers, matières premières et douanes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sans données de qualité, sans algorithme de matching pertinent et sans mécanisme de confiance, les acteurs désertent la plateforme.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Unité de valeur',
            stepTheme: 'Rémunération',
            stepTitle: 'Identifier l’unité de valeur justifiant la rémunération',
            paragraphText:
              "Pour monétiser durablement, une plateforme doit identifier « l'unité de valeur » qui justifie sa rémunération (un clic qualifié chez Google, une course réalisée chez Uber, une nuitée réservée chez Airbnb, une commande livrée sur Jumia).",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est l’« unité de valeur » principale qui justifie la facturation publicitaire de Google Search aux annonceurs ?',
              options: [
                'Le temps de fabrication du smartphone',
                'Le nombre de pages imprimées par l’utilisateur',
                'La durée d’abonnement téléphonique de l’internaute',
                'Le clic qualifié sur une annonce déclenchée par un mot-clé précis',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Google monétise l'intention exprimée par le mot-clé à travers le clic qualifié (CPC), directement mesurable pour l'annonceur.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Confiance plateforme',
            stepTitle: 'Pourquoi la confiance est indispensable sur un marché biface',
            paragraphText:
              "Sur une plateforme mettant en relation des inconnus (conducteurs/passagers, vendeurs/acheteurs), l'absence de confiance bloque immédiatement les transactions : c'est pourquoi les systèmes d'avis, de vérification d'identité et de paiement sécurisé sont au cœur du modèle.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quel mécanisme renforce directement le pilier « confiance » d’une marketplace e-commerce comme Jumia ?',
              options: [
                'Les avis clients vérifiés, le paiement sécurisé (ou à la livraison) et la politique de retour',
                'La suppression de toute fiche descriptive des produits',
                'L’impossibilité de contacter le service client',
                'Le masquage du prix jusqu’après le paiement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les évaluations, la sécurisation des paiements et les garanties de retour réduisent le risque perçu entre acheteurs et vendeurs inconnus.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3',
        order: 3,
        title: "Théorie de l'agrégation et enjeux de régulation des plateformes",
        summary:
          "Comprendre le renversement de la chaîne de valeur (contrôle de la demande), le cycle vertueux de l'agrégateur et les 8 enjeux économiques et numériques de régulation.",
        conceptExplanation:
          "La théorie de l'agrégation (Ben Thompson) explique le renversement de la chaîne de valeur provoqué par Internet :\n- Avant Internet : Fournisseurs -> Distributeurs -> Consommateurs. Le pouvoir économique venait du contrôle de la distribution rare (chaînes TV, grandes surfaces, journaux).\n- Avec Internet : Fournisseurs modularisés -> Agrégateur -> Utilisateurs. La distribution étant abondante et quasi gratuite, le pouvoir bascule vers celui qui contrôle la demande et l'expérience utilisateur à grande échelle : l'agrégateur (Google, Netflix, Amazon, Uber, Airbnb).\n\nL'agrégateur bénéficie d'un cycle vertueux qui abaisse son coût d'acquisition client : Bonne expérience utilisateur -> Plus d'utilisateurs -> Plus de fournisseurs -> Plus de choix + meilleures données -> Meilleure expérience utilisateur.\n\nCette puissance engendre des risques économiques et institutionnels nécessitant une régulation publique sur deux fronts :\n1. Enjeux économiques : concurrence et abus de position dominante, fiscalité des activités numériques transfrontalières, conditions de travail des travailleurs de plateforme, accès équitable aux marchés pour les PME.\n2. Enjeux numériques : protection des données personnelles, transparence des algorithmes, modération des contenus et responsabilité, souveraineté numérique et dépendance aux grandes plateformes.",
        keyRule:
          "Théorie de l'agrégation : le pouvoir passe du contrôle de la distribution (avant Internet) au contrôle de la demande et de l'expérience utilisateur (agrégateur), ce qui appelle une régulation économique et numérique.",
        formulas: [
          {
            name: 'Cycle vertueux de l’agrégation',
            formula: 'Bonne UX ⇒ + Utilisateurs ⇒ + Fournisseurs ⇒ + Choix & Données ⇒ Encore meilleure UX',
            note: 'Réduit le coût d’acquisition de nouveaux utilisateurs et renforce la position dominante.',
          },
        ],
        workedExample: {
          title: 'Analyser la dépendance des PME face à un agrégateur',
          statement:
            "Des restaurants d'Abidjan dépendent d'une grande application de livraison de repas pour 70 % de leurs commandes. Identifiez la logique d'agrégation à l'œuvre et deux enjeux de régulation publique associés.",
          methodSteps: [
            "Logique d'agrégation : les restaurants sont des fournisseurs modularisés ; l'application contrôle la relation client finale et l'expérience de commande.",
            "Pouvoir de marché : l'agrégateur peut imposer des commissions élevées ou modifier son algorithme de classement, mettant les PME en situation de dépendance.",
            'Enjeux de régulation : accès équitable des PME au marché, transparence des algorithmes de classement, concurrence (abus de position dominante) et conditions de travail des livreurs.',
          ],
          conclusion:
            "Le succès d'un agrégateur profite aux consommateurs par la commodité, mais impose un encadrement réglementaire pour protéger les PME, les travailleurs et la concurrence.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Agrégateur',
            stepTheme: 'Théorie de l’agrégation',
            stepTitle: 'Le renversement de la chaîne de valeur avec Internet',
            paragraphText:
              "Avant Internet, le pouvoir économique appartenait à ceux qui contrôlaient l'accès à la distribution rare (Fournisseurs -> Distributeurs -> Consommateurs). Avec Internet, les fournisseurs sont modularisés et l'agrégateur détient le pouvoir en contrôlant directement la demande et l'expérience utilisateur à grande échelle.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q1',
              type: 'mcq',
              prompt:
                "Selon la théorie de l'agrégation, où réside principalement le pouvoir économique à l'ère d'Internet ?",
              options: [
                'Dans le contrôle exclusif des imprimeries papier',
                "Dans le contrôle de la demande et de l'expérience utilisateur à grande échelle",
                'Dans la suppression de tout fournisseur tiers',
                'Dans la multiplication des intermédiaires physiques locaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La distribution numérique étant abondante, la ressource rare devient l’attention et la relation directe avec l’utilisateur final (la demande).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Boucle',
            stepTheme: 'Cycle vertueux',
            stepTitle: "Les quatre étapes du cycle vertueux de l'agrégation",
            paragraphText:
              "L'agrégateur enclenche un cercle vertueux : une bonne expérience utilisateur attire plus d'utilisateurs -> cela attire plus de fournisseurs -> cela crée plus de choix et de meilleures données -> ce qui améliore encore l'expérience utilisateur et réduit le coût d'acquisition client.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Dans le cycle vertueux de l’agrégation, quel effet direct l’arrivée de plus d’utilisateurs et de fournisseurs produit-elle sur la croissance ?',
              options: [
                'Une explosion du coût d’acquisition de chaque nouvel utilisateur',
                'La diminution immédiate du choix disponible',
                'Plus de choix, de meilleures données et une réduction du coût d’acquisition de nouveaux utilisateurs',
                'La perte de contrôle sur l’expérience utilisateur',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'accumulation de choix et de données rend le service plus attractif organiquement, abaissant le coût d'acquisition client.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Régulation 1',
            stepTheme: 'Enjeux économiques',
            stepTitle: 'Les quatre enjeux économiques de régulation des plateformes',
            paragraphText:
              "La concentration du pouvoir économique des plateformes soulève quatre grands enjeux économiques : (1) concurrence et abus de position dominante ; (2) fiscalité des activités numériques transfrontalières ; (3) conditions de travail des travailleurs de plateforme ; (4) accès équitable aux marchés pour les PME.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces thèmes fait partie des enjeux ÉCONOMIQUES de régulation des plateformes identifiés ?',
              options: [
                'Fiscalité transfrontalière, abus de position dominante, statut des travailleurs de plateforme et accès équitable des PME',
                'Uniquement la couleur des interfaces mobiles',
                'La suppression de la concurrence entre plateformes',
                'L’interdiction du e-commerce pour toutes les PME',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les autorités publiques doivent réguler la concurrence, la fiscalité transfrontalière, la protection des travailleurs de plateforme et l’accès des PME.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Régulation 2',
            stepTheme: 'Enjeux numériques',
            stepTitle: 'Les quatre enjeux numériques et de souveraineté',
            paragraphText:
              "Sur le plan numérique et institutionnel, quatre autres défis s'imposent : (1) protection des données personnelles ; (2) transparence des algorithmes ; (3) modération des contenus et responsabilité ; (4) souveraineté numérique et dépendance aux grandes plateformes étrangères.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Parmi les enjeux NUMÉRIQUES de politique publique cités en cours, lequel concerne l’autonomie stratégique d’un pays face aux géants étrangers ?',
              options: [
                'Le versioning des forfaits vidéo',
                'Le Coût Par Clic (CPC)',
                'La vente de produits physiques',
                'La souveraineté numérique et la dépendance aux grandes plateformes',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La souveraineté numérique vise à limiter la dépendance excessive d’une économie vis-à-vis de quelques plateformes étrangères dominantes.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Synthèse',
            stepTheme: 'Nuances conceptuelles',
            stepTitle: 'Ne pas confondre plateforme, marketplace et agrégateur',
            paragraphText:
              "Bien que proches, ces trois notions ne sont pas identiques : toute marketplace (mise en relation vendeurs/acheteurs pour des transactions) est une plateforme, et un agrégateur est une plateforme particulière qui contrôle directement la relation utilisateur à grande échelle en modularisant ses fournisseurs.",
            exercise: {
              id: 'lmd_entd_l1_modele_dev_eco_num_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle nuance distingue précisément un « agrégateur » au sein de la famille des plateformes numériques ?',
              options: [
                'Il ne possède aucun utilisateur final',
                'Il contrôle directement la relation utilisateur à grande échelle tout en modularisant les fournisseurs',
                'Il fonctionne uniquement sans algorithmes ni données',
                'Il ne peut jamais opérer sur Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'agrégateur se distingue par son contrôle direct de la demande et de l'expérience utilisateur à grande échelle face à des fournisseurs rendus interchangeables.",
            },
          },
        ],
      }),
    ],
  },
];
