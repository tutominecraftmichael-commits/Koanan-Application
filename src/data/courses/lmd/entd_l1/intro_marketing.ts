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
  // CHAPITRE 1 : DÉFINITIONS, ORIGINES, ÉVOLUTION ET RÔLE DU MARKETING
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch1',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Définitions, origines, évolution et rôle du marketing',
    summary:
      "Étymologie et définitions du marketing (Kotler, AMA, Mercator), historique et écoles de pensée (crise de 1929, Borden & McCarthy, Prahalad), distinction Marketing / Communication / Vente, marketing stratégique vs opérationnel et rôle dans l'entreprise.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'COURS INTRO AU MARKETING — ENTD 1 (Dr HIEN Sié Clotaire, ESATIC 2025-2026, Chapitre 1)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch1_p1',
        order: 1,
        title: 'Définitions, étymologie et grandes écoles de pensée du marketing',
        summary:
          "Maîtriser les définitions académiques du marketing (Kotler, AMA, Mercator), son origine historique après la crise de 1929 et les apports des principaux théoriciens (Alderson, Borden, McCarthy, Prahalad).",
        conceptExplanation:
          "Le terme « marketing » vient du latin mercari (« commercer ») et de l'anglais to market (« faire son marché ») ; le terme français recommandé est « mercatique » (ou « marchéage »). Sur le plan financier, on résume souvent : « Le marketing, c'est la conquête profitable des marchés ».\n\nTrois définitions de référence figurent au programme :\n- Philip Kotler : ensemble des techniques et études ayant pour but de prévoir, constater, susciter, renouveler ou stimuler les besoins des consommateurs et d'adapter de manière continue l'appareil productif et commercial aux besoins ainsi déterminés.\n- Définition américaine (AMA) : processus visant à planifier et mettre en œuvre la conception, la fixation du prix, la promotion et la distribution d'idées, de biens et de services afin de créer des échanges satisfaisant les objectifs d'individus et d'organisations.\n- Mercator (8e éd., 2006) : effort d'adaptation des organisations à des marchés concurrentiels, pour influencer en leur faveur le comportement de leurs publics, par une offre dont la valeur perçue est durablement supérieure à celle des concurrents.\nAvant tout, le marketing est un état d'esprit consistant à se placer du point de vue du consommateur.\n\nOrigine et évolution :\nNé en réaction à l'économie classique face à la croissance rapide et intensifié par la crise de 1929 (passage d'une économie de production à une concurrence forte), le marketing se structure :\n- 1937 : naissance de l'American Marketing Association (AMA) et du Journal of Marketing ;\n- Années 1950 : Wroe Alderson place le consommateur au centre de l'approche ;\n- Années 1960 : Philip Kotler fonde l'école du Marketing Management (co-écrit en France avec Bernard Dubois) ; Neil Borden et Jerome McCarthy popularisent la segmentation et le marketing mix (les 4P : Product, Price, Place, Promotion) ;\n- Écoles contemporaines : consumer research (Morris B. Holbrook), école postmoderne (Stephen Brown, critique de l'excès d'études de marché), modélisation (DeSarbo), école de l'échange (Richard Bagozzi) et théorie des compétences clés / core competences de C. K. Prahalad (avantage compétitif durable fondé sur le cœur de compétences de l'entreprise).",
        formulas: [
          {
            name: 'Les 4P du Marketing Mix (Borden & McCarthy)',
            formula: 'Product (Produit)  ·  Price (Prix)  ·  Place (Distribution)  ·  Promotion (Communication)',
            note: 'Appelé en français plan de marchéage : les 4 leviers d’action du marketing opérationnel.',
          },
        ],
        keyRule:
          "Retiens les grandes étapes : Crise de 1929 (essor) → 1937 AMA → Années 50 Alderson (consommateur au centre) → Années 60 Kotler (Marketing Management) et Borden & McCarthy (4P) → Prahalad (core competences). Le marketing est d'abord un état d'esprit orienté client.",
        workedExample: {
          title: "Lire une stratégie d'entreprise à travers Mercator et Prahalad",
          statement:
            "Une plateforme de paiement mobile en Côte d'Ivoire (ex. Wave) s'appuie sur son expertise technologique interne ultra-rapide et ses coûts opérationnels très bas pour offrir des transferts à 1 % avec une interface très simple. Analyser cette réussite avec Mercator et la théorie de Prahalad.",
          methodSteps: [
            "Étape 1 (Définition du Mercator) : L'entreprise influence favorablement le comportement des utilisateurs en proposant une valeur perçue durablement supérieure à celle des concurrents (simplicité + frais réduits).",
            "Étape 2 (Théorie des core competences de Prahalad) : Son avantage compétitif durable repose sur la concentration sur son cœur de compétences (infrastructure logicielle légère et expérience utilisateur mobile).",
            "Étape 3 (État d'esprit marketing) : L'offre est conçue à partir des attentes concrètes du consommateur (rapidité, transparence tarifaire), et non à partir des seules habitudes internes de l'entreprise.",
          ],
          conclusion:
            "Le succès marketing associe connaissance fine des besoins clients (Mercator/Kotler) et maîtrise d'un cœur de compétences difficile à imiter (Prahalad).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étymologie & Définition',
            stepTheme: 'Mercatique et état d’esprit',
            stepTitle: 'Quel est le sens fondamental du marketing ?',
            paragraphText:
              "Issu du latin mercari (« commercer ») et traduit officiellement par « mercatique », le marketing est défini financièrement comme « la conquête profitable des marchés ». Plus profondément, c'est un état d'esprit qui consiste à se placer du point de vue du consommateur pour répondre durablement à ses besoins.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quel terme français est officiellement recommandé pour traduire le mot « marketing » ?',
              options: [
                'La comptabilité analytique',
                'La mercatique',
                'La bureaucratie',
                'La logistique inversée',
              ],
              correctAnswerIndex: 1,
              explanation:
                "« Mercatique » est le terme français recommandé (même si « marketing » reste le plus usité en entreprise), issu de la même racine que marché/mercante.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Définition Mercator',
            stepTheme: 'Valeur perçue durablement supérieure',
            stepTitle: 'Comment Mercator définit-il le marketing ?',
            paragraphText:
              "Selon le Mercator (8e édition, 2006), le marketing est « l'effort d'adaptation des organisations à des marchés concurrentiels, pour influencer en leur faveur le comportement de leurs publics, par une offre dont la valeur perçue est durablement supérieure à celle des concurrents ».",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Selon la définition du Mercator (2006), par quel levier central une organisation influence-t-elle favorablement le comportement de ses publics sur un marché concurrentiel ?',
              options: [
                'En imposant un monopole légal',
                'En réduisant systématiquement la qualité des produits',
                'Par une offre dont la valeur perçue est durablement supérieure à celle des concurrents',
                'En supprimant toute communication commerciale',
              ],
              correctAnswerIndex: 2,
              explanation:
                "La notion clé du Mercator est la « valeur perçue durablement supérieure » à l'offre concurrente aux yeux du public ciblé.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Histoire',
            stepTheme: 'Crise de 1929 et structuration académique',
            stepTitle: 'Retracer la naissance du marketing moderne',
            paragraphText:
              "La crise économique de 1929 intensifie la concurrence (il ne suffit plus de produire pour vendre) et accélère le développement du marketing : création de l'American Marketing Association (AMA) en 1937, centrage sur le consommateur par Alderson dans les années 1950, puis fondation académique par Kotler dans les années 1960.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quel événement économique majeur du XXe siècle a fortement intensifié la concurrence et accéléré l’essor du marketing moderne ?',
              options: [
                'La crise économique de 1929',
                'La découverte de l’imprimerie au XVe siècle',
                'La création de l’euro en 1999',
                'La signature du traité de Rome en 1957',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Face à la surproduction et à l'intensification de la concurrence provoquées par la crise de 1929, les entreprises ont dû étudier et conquérir la demande.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Les 4P',
            stepTheme: 'Borden et McCarthy',
            stepTitle: 'Associer les 4P à leur équivalent en français',
            paragraphText:
              "Neil Borden et Jerome McCarthy introduisent la segmentation et le marketing mix (plan de marchéage), découpé en 4 variables opérationnelles : Product (Produit), Price (Prix), Place (Distribution) et Promotion (Communication).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans le modèle des 4P de Borden et McCarthy, que signifie le terme « Place » ?',
              options: [
                'La publicité sur le lieu de vente uniquement',
                'La place de la marque dans le classement mondial',
                'Le prix psychologique du produit',
                'La distribution (canaux permettant de rendre le produit accessible au client)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Attention au faux ami anglais ! « Place » désigne la politique de distribution (où et comment vendre) et « Promotion » désigne la communication.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Écoles contemporaines',
            stepTheme: 'Théorie des core competences (Prahalad)',
            stepTitle: 'Comprendre l’apport de C. K. Prahalad',
            paragraphText:
              "Parmi les écoles récentes, C. K. Prahalad développe la théorie des compétences clés (core competences) : les entreprises qui réussissent durablement sont celles qui se concentrent sur leur cœur de compétences distinctif pour bâtir un avantage compétitif solide.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quel auteur est à l’origine de la théorie des compétences clés (« core competences ») citée dans le cours ?',
              options: [
                'C. K. Prahalad',
                'Max Weber',
                'Elton Mayo',
                'Henri Fayol',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Prahalad montre qu’un cœur de compétences durable confère à l’entreprise un avantage concurrentiel décisif sur son marché.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Controverses',
            stepTheme: 'École postmoderne (Stephen Brown)',
            stepTitle: 'Connaître la critique formulée par Stephen Brown',
            paragraphText:
              "Le marketing est une discipline riche en débats : par exemple, Stephen Brown (école postmoderne) critique l'excès de dépendance aux études de marché et estime que les responsables marketing doivent aussi faire confiance à leur créativité et à leurs propres compétences.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle thèse originale soutient Stephen Brown (école postmoderne du marketing) ?',
              options: [
                'Le marketing doit être remplacé par la comptabilité générale',
                'Les responsables marketing s’appuient parfois trop sur les études de marché et doivent davantage se fier à leur créativité et compétences propres',
                'Les 4P doivent être réduits au seul levier du prix',
                'Il faut interdire la publicité digitale',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Stephen Brown souligne que les consommateurs n'imaginent pas toujours les innovations de rupture et invite les marketeurs à mobiliser aussi leur propre vision créative.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch1_p2',
        order: 2,
        title: 'Marketing, Communication, Vente et complémentarité Stratégique / Opérationnel',
        summary:
          "Distinguer rigoureusement marketing, communication et vente, et articuler le marketing stratégique (vision long terme) avec le marketing opérationnel (mise en œuvre court/moyen terme).",
        conceptExplanation:
          "Dans le langage courant, on confond souvent marketing, communication et vente. Le cours établit une frontière très nette entre ces trois notions complémentaires :\n1) Le Marketing : c'est tout le travail d'analyse et de stratégie réalisé EN AMONT de la vente (études de marché, compréhension des besoins, planification, définition de l'offre, du prix, de la distribution et de la promotion : quoi, comment et à qui vendre).\n2) La Communication : c'est UN OUTIL du marketing (le 4e P : Promotion). Elle consiste à transmettre des messages à un public cible via des canaux traditionnels (TV, affichage, presse) ou numériques (réseaux sociaux, internet) pour faire connaître le produit, bâtir la notoriété et l'image de marque, attirer et fidéliser.\n3) La Vente : c'est la DERNIÈRE ÉTAPE du processus commercial, consistant à convertir concrètement les prospects identifiés par le marketing en clients payants, générant ainsi le chiffre d'affaires.\n\nPar ailleurs, la démarche marketing se déploie sur deux horizons complémentaires :\n- Le Marketing Stratégique : orientation à LONG TERME et vision globale. Objectif : définir les grandes orientations, le positionnement et les objectifs de croissance. Actions : analyse des marchés, segmentation des clients, étude de la concurrence, choix des cibles (ex. décider de se positionner sur le haut de gamme ou d'entrer sur un nouveau segment).\n- Le Marketing Opérationnel : orientation à COURT ET MOYEN TERME, mise en œuvre quotidienne sur le terrain. Objectif : réaliser des actions concrètes pour augmenter les ventes ou la notoriété. Actions : gestion des 4P du marketing mix, campagnes publicitaires, e-mailing, flyers, événements promotionnels, gestion des réseaux sociaux, fidélisation.\n\nLes deux volets sont indissociables : le marketing stratégique fixe le cap, et le marketing opérationnel exécute les actions sur le terrain pour atteindre ce cap.",
        formulas: [
          {
            name: 'Enchaînement commercial complet',
            formula: 'Marketing (stratégie en amont) → Communication (outil de visibilité) → Vente (conversion en revenus)',
            note: 'La communication est une composante du marketing mix, pas un synonyme du marketing.',
          },
          {
            name: 'Dualité Marketing Stratégique / Opérationnel',
            formula: 'Stratégique (Long terme : analyse, segmentation, ciblage, positionnement)  +  Opérationnel (Court terme : 4P, campagnes, terrain)',
            note: 'Stratégie sans opérationnel = théorie ; Opérationnel sans stratégie = agitation sans cap.',
          },
        ],
        keyRule:
          "Marketing = travail global en amont (4P + analyse). Communication = un seul des 4P (transmettre un message). Vente = conversion finale du prospect en client payant. Stratégique = long terme (le cap) ; Opérationnel = court terme (l'action).",
        workedExample: {
          title: "Distinguer les rôles dans le lancement d'une école de code en ligne",
          statement:
            "Une EdTech ivoirienne lance une formation certifiante en Data Analytics. Classer les 4 actions suivantes selon qu'elles relèvent du marketing stratégique, du marketing opérationnel, de la communication ou de la vente : (1) analyser le marché ouest-africain et cibler les jeunes diplômés Bac+3 avec un positionnement premium, (2) lancer une campagne sponsorisée Instagram/LinkedIn et des e-mails, (3) fixer un tarif d'abonnement mensuel et un paiement Mobile Money, (4) appeler les inscrits au webinaire pour finaliser leur inscription payante.",
          methodSteps: [
            "Étape 1 — (1) relève du Marketing Stratégique : analyse de marché, ciblage et positionnement à long terme.",
            "Étape 2 — (2) relève de la Communication (qui est un outil du Marketing Opérationnel) : diffusion de messages sur les médias numériques pour attirer la cible.",
            "Étape 3 — (3) relève du Marketing Opérationnel (variables Prix et Distribution/Paiement du mix 4P).",
            "Étape 4 — (4) relève de la Vente : dernière étape qui convertit les prospects qualifiés en clients payants.",
          ],
          conclusion:
            "Chaque métier (chargé de marketing, chargé de communication, commercial) intervient à un maillon précis et complémentaire de la création de valeur.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'Marketing vs Communication',
            stepTheme: 'Ne pas confondre le tout et la partie',
            stepTitle: 'Quel est le lien exact entre marketing et communication ?',
            paragraphText:
              "Le marketing englobe toute la démarche d'analyse du marché, de planification et de gestion des 4P (produit, prix, distribution, communication). La communication n'est qu'une des quatre composantes (un outil) du marketing, dédiée à la diffusion de messages vers le public cible.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle affirmation résume le mieux la différence entre marketing et communication ?',
              options: [
                'Le marketing est un petit outil à l’intérieur de la communication',
                'Marketing et communication désignent exactement la même activité',
                'Le marketing est tout le travail stratégique et analytique en amont (4P), tandis que la communication est un outil du marketing servant à diffuser des messages',
                'La communication fixe les prix et conçoit les produits',
              ],
              correctAnswerIndex: 2,
              explanation:
                "La communication correspond au 4e P (« Promotion ») : c'est un outil au service de la stratégie marketing globale définie en amont.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Rôle de la vente',
            stepTheme: 'Dernière étape du processus',
            stepTitle: 'Situer la vente par rapport au marketing et à la communication',
            paragraphText:
              "Si le marketing étudie le marché et bâtit l'offre, et si la communication informe et construit l'image de marque, la vente constitue l'étape finale qui transforme concrètement les prospects identifiés en clients payants générant les revenus.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Dans la chaîne Marketing → Communication → Vente, quel est le rôle spécifique de la vente ?',
              options: [
                'Convertir les prospects identifiés par le marketing en clients payants générant des revenus',
                'Réaliser uniquement des enquêtes démographiques à 10 ans',
                'Créer le logotype et la charte graphique',
                'Définir la structure juridique de l’entreprise',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La vente est l’acte final de concrétisation commerciale qui transforme l’intérêt suscité par le marketing en chiffre d’affaires encaissé.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Marketing stratégique',
            stepTheme: 'Horizon long terme',
            stepTitle: 'Identifier une décision de marketing stratégique',
            paragraphText:
              "Le marketing stratégique s'inscrit dans le long terme : il comprend l'analyse des marchés, la segmentation de la clientèle, l'étude de la concurrence, le choix des cibles et le positionnement (par exemple, choisir de se positionner sur un marché haut de gamme).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Parmi les actions suivantes, laquelle relève du MARKETING STRATÉGIQUE (et non du marketing opérationnel) ?',
              options: [
                'Imprimer des flyers pour une promotion de week-end',
                'Choisir de se positionner durablement sur le segment haut de gamme ou d’entrer sur un nouveau marché',
                'Envoyer une campagne d’e-mailing promotionnelle',
                'Publier un post hebdomadaire sur les réseaux sociaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Choisir un positionnement ou pénétrer un nouveau segment engage l’entreprise sur le long terme : c’est une décision de marketing stratégique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Marketing opérationnel',
            stepTheme: 'Mise en œuvre quotidienne (court/moyen terme)',
            stepTitle: 'Identifier les leviers du marketing opérationnel',
            paragraphText:
              "Le marketing opérationnel traduit concrètement sur le terrain, à court et moyen terme, les choix du marketing stratégique via le pilotage des 4P : campagnes publicitaires, promotions, e-mailing, gestion des réseaux sociaux et actions de fidélisation.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle action illustre typiquement le MARKETING OPÉRATIONNEL ?',
              options: [
                'Définir la mission décennale du groupe',
                'Réaliser une étude macroéconomique à horizon 15 ans',
                'Racheter un concurrent international',
                'Lancer une campagne d’e-mailing et animer les réseaux sociaux pour stimuler les ventes du mois',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les campagnes d’e-mailing, promotions, flyers et l’animation des réseaux sociaux relèvent de l’exécution terrain à court terme (marketing opérationnel).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Cycle de vie',
            stepTheme: 'Périmètre global du marketing',
            stepTitle: 'Le marketing intervient-il seulement après la fabrication ?',
            paragraphText:
              "Non ! Le cours souligne que le marketing englobe TOUT le cycle de vie d'un produit ou service : dès la Création (étude de marché, design, R&D), pendant la Fabrication (contrôle qualité), lors de la Commercialisation (distribution, prix, communication, satisfaction) et tout au long de sa Durée de vie.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'À quel moment du cycle de vie d’un produit le marketing commence-t-il réellement à intervenir ?',
              options: [
                'Dès la phase de création (étude de marché, design, recherche et développement)',
                'Uniquement après la fabrication, quand le stock est déjà plein',
                'Seulement lorsque les ventes commencent à chuter',
                'Exclusivement lors du service après-vente',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un produit bien pensé intègre le marketing dès l’amont (étude des besoins, design, R&D) afin de garantir son adéquation au marché avant même sa fabrication.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Métiers',
            stepTheme: 'Chargé de marketing vs Chargé de communication',
            stepTitle: 'Comparer les missions des deux postes',
            paragraphText:
              "Le chargé de marketing étudie le marché, les concurrents et les besoins clients pour élaborer la stratégie et l'offre ; le chargé de communication sélectionne la meilleure combinaison de canaux (médias traditionnels et digitaux) et conçoit les messages pour faire rayonner cette stratégie.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle mission revient prioritairement au chargé de communication plutôt qu’au chargé de marketing ?',
              options: [
                'Calculer le coût de production industriel en atelier',
                'Sélectionner la meilleure combinaison de canaux médias et diffuser les messages pour renforcer la notoriété',
                'Déterminer le taux de TVA applicable aux factures',
                'Négocier les contrats d’approvisionnement en matières premières',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Le chargé de communication conçoit les messages et choisit les médias (TV, affichage, réseaux sociaux, presse) pour exécuter le volet promotionnel du plan marketing.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : L'ENVIRONNEMENT DU MARKETING (MICRO ET MACRO-ENVIRONNEMENT)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch2',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: "Chapitre 2 — L'environnement du marketing : micro-environnement et macro-environnement",
    summary:
      "Acteurs du micro-environnement (entreprise, fournisseurs, intermédiaires, concurrents, 7 types de publics, 5 types de marchés clients) et grandes forces du macro-environnement (démographique, économique, technologique, politico-légal, socioculturel).",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'COURS INTRO AU MARKETING — ENTD 1 (Dr HIEN Sié Clotaire, Chapitre 2)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch2_p1',
        order: 1,
        title: 'Le micro-environnement marketing : acteurs, 7 types de publics et 5 marchés clients',
        summary:
          "Identifier les six composantes du micro-environnement marketing, classer les sept catégories de publics influençant l'entreprise et distinguer les cinq types de marchés clients cibles.",
        conceptExplanation:
          "L'environnement marketing regroupe l'ensemble des facteurs internes et externes qui influencent les décisions commerciales d'une entreprise. Le micro-environnement comprend les acteurs proches directement impliqués dans la capacité de l'entreprise à créer et livrer de la valeur à ses clients :\n1) L'entreprise elle-même (ses ressources, sa culture, ses autres services : R&D, finance, achats, production) ;\n2) Les fournisseurs (leur fiabilité et leurs coûts conditionnent directement la disponibilité et le prix final des offres) ;\n3) Les intermédiaires en marketing (distributeurs, grossistes, détaillants, agences, logisticiens) qui ajoutent de la valeur et assurent le contact direct avec les acheteurs ;\n4) Les concurrents (dont l'analyse des forces et faiblesses permet de se différencier) ;\n5) Les publics : tout groupe ayant un intérêt légitime et un impact réel ou potentiel sur l'entreprise. Le cours distingue 7 types de publics :\n   - Public financier (banques, investisseurs) ;\n   - Public des médias (journaux, TV, blogs, influenceurs) ;\n   - Public gouvernemental (autorités, lois et normes) ;\n   - Public d'action citoyenne (associations de consommateurs, écologistes) ;\n   - Public local (riverains, associations communautaires) ;\n   - Grand public (opinion publique générale) ;\n   - Public interne (les employés, premiers ambassadeurs de l'image de l'entreprise).\n6) Les clients : acteur central du marketing, répartis en 5 types de marchés cibles :\n   - Marchés des consommateurs (B2C : individus et ménages pour usage personnel) ;\n   - Marchés des entreprises (B2B : achètent pour transformer en un autre produit) ;\n   - Marchés des revendeurs (achètent pour revendre avec marge) ;\n   - Marchés publics (administrations et agences étatiques pour les services publics) ;\n   - Marchés internationaux (tous les marchés ci-dessus situés à l'étranger).",
        formulas: [
          {
            name: 'Les 5 types de marchés clients cibles',
            formula: 'Consommateurs (B2C) · Entreprises (B2B) · Revendeurs · Marchés publics · Marchés internationaux',
            note: 'Chaque marché possède ses propres comportements d’achat et critères de décision.',
          },
        ],
        keyRule:
          "Micro-environnement = 6 acteurs (Entreprise, Fournisseurs, Intermédiaires, Concurrents, 7 Publics, 5 Marchés clients). Retiens en particulier les 7 publics (dont le public interne et les groupes d'action citoyenne) et les 5 marchés clients.",
        workedExample: {
          title: "Cartographie du micro-environnement d'un éditeur de logiciels ivoirien",
          statement:
            "La société AbidjanSoft vend son logiciel de facturation à la fois à des PME industrielles, à un ministère (appel d'offres) et à des revendeurs informatiques au Sénégal. Elle dépend de serveurs cloud (fournisseur) et reçoit des critiques d'une association de consommateurs sur ses tarifs. Qualifier chacun de ces acteurs selon le cours.",
          methodSteps: [
            "Étape 1 (Types de marchés clients) : Les PME industrielles = Marché des entreprises (B2B) ; le ministère = Marché public ; les revendeurs au Sénégal = Marché des revendeurs ET Marché international.",
            "Étape 2 (Fournisseur) : L'hébergeur cloud est un fournisseur clé dont la disponibilité et le coût conditionnent la qualité du service.",
            "Étape 3 (Public) : L'association de consommateurs relève du Public d'action citoyenne, capable de remettre en cause les décisions tarifaires et d'impacter la réputation.",
          ],
          conclusion:
            "Une entreprise numérique opère simultanément sur plusieurs marchés clients et doit gérer proactivement tous les publics de son micro-environnement.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Micro-environnement',
            stepTheme: 'Rôle des intermédiaires marketing',
            stepTitle: 'Pourquoi les intermédiaires sont-ils essentiels ?',
            paragraphText:
              "Les intermédiaires marketing (distributeurs, revendeurs, marketplaces, agences) ajoutent de la valeur au produit en assurant sa mise à disposition, sa promotion et le contact direct avec les acheteurs finaux.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les acteurs suivants du micro-environnement, lequel est en contact direct avec les acheteurs pour acheminer et promouvoir les produits de l’entreprise ?',
              options: [
                'Les intermédiaires marketing (distributeurs, détaillants, plateformes)',
                'Le taux de natalité national',
                'Le changement climatique mondial',
                'Les lois fiscales votées au Parlement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les intermédiaires marketing relient le producteur aux acheteurs, créent de la valeur de proximité et participent activement à la promotion.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Les 7 publics',
            stepTheme: 'Public d’action citoyenne',
            stepTitle: 'Identifier le public d’action citoyenne',
            paragraphText:
              "Parmi les 7 catégories de publics du cours (action citoyenne, financier, grand public, gouvernemental, interne, local, médias), le public d'action citoyenne rassemble les associations de consommateurs, ONG et mouvements écologistes susceptibles d'interpeller l'entreprise sur ses pratiques.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Une association de défense des consommateurs critique publiquement les frais cachés d’un opérateur mobile. De quel type de public s’agit-il ?',
              options: [
                'Le public financier',
                'Le public d’action citoyenne',
                'Le public interne',
                'Le public gouvernemental',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Les associations de consommateurs et organisations écologistes composent le public d'action citoyenne.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Public interne',
            stepTheme: 'Les salariés comme ambassadeurs',
            stepTitle: 'Pourquoi les employés forment-ils un public marketing ?',
            paragraphText:
              "Le public interne désigne les salariés de l'entreprise elle-même : des collaborateurs satisfaits et fiers de leur entreprise diffusent une image positive à l'extérieur (bouche-à-oreille, qualité d'accueil), renforçant la réputation commerciale.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Selon le cours, quel impact positif a un « public interne » satisfait sur la performance marketing de l’entreprise ?',
              options: [
                'Il dispense l’entreprise de toute concurrence',
                'Il supprime le besoin d’avoir des fournisseurs',
                'Il répand une image favorable de l’entreprise vers l’extérieur et améliore la réputation',
                'Il fixe le taux de change des devises',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Les employés heureux de travailler dans l'entreprise deviennent ses meilleurs ambassadeurs auprès des clients et partenaires extérieurs.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Marchés clients',
            stepTheme: 'Marché des entreprises vs revendeurs',
            stepTitle: 'Distinguer les 5 types de marchés cibles',
            paragraphText:
              "Il ne faut pas confondre le marché des entreprises (achètent des biens/matières pour les TRANSFORMER en un autre produit) et le marché des revendeurs (achètent des produits finis pour les REVENDRE en l'état à un prix supérieur afin de réaliser un bénéfice).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Un supermarché qui achète des packs d’eau minérale pour les revendre en l’état avec une marge bénéficiaire appartient à quel type de marché client ?',
              options: [
                'Le marché des consommateurs finaux',
                'Le marché public gouvernemental',
                'Le marché des entreprises transformatrices',
                'Le marché des revendeurs',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Le marché des revendeurs regroupe les commerçants et distributeurs qui achètent des biens pour les revendre plus cher sans les transformer.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Marchés publics',
            stepTheme: 'Achats des administrations',
            stepTitle: 'Reconnaître un marché public',
            paragraphText:
              "Le marché public est constitué par les agences, ministères, collectivités locales et organismes gouvernementaux qui achètent des biens ou des services (ordinateurs, logiciels, infrastructures) pour assurer des missions de service public.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Lorsque l’ESATIC ou un ministère lance un appel d’offres pour acquérir 200 ordinateurs destinés aux salles de TP, à quel type de marché client le fournisseur s’adresse-t-il ?',
              options: [
                'Aux marchés publics',
                'Aux marchés des consommateurs individuels',
                'Aux marchés des revendeurs',
                'Aux marchés boursiers',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les achats réalisés par l’État, les universités publiques ou les collectivités pour les besoins du service public relèvent des marchés publics.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Concurrence',
            stepTheme: 'Se différencier face aux grands groupes',
            stepTitle: 'Comment un petit détaillant peut-il résister à une grande chaîne ?',
            paragraphText:
              "L'analyse des forces et faiblesses des concurrents permet de trouver un positionnement défendable : comme l'illustre le cours, un petit détaillant local ne peut pas battre une grande chaîne sur les prix de gros, mais peut se différencier par un service personnalisé et des produits uniques.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Selon l’exemple du cours, comment un petit commerce local peut-il se positionner efficacement face aux grandes chaînes de magasins ?',
              options: [
                'En copiant exactement les mêmes produits standards sans service',
                'En offrant un service personnalisé et des produits uniques (différenciation)',
                'En ignorant totalement l’existence des concurrents',
                'En vendant durablement en dessous de son coût d’achat',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La différenciation par la proximité, le conseil personnalisé et l'originalité de l'assortiment constitue l'atout majeur des petits acteurs face aux géants de la distribution.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch2_p2',
        order: 2,
        title: 'Le macro-environnement marketing et la veille stratégique (démographie, PESTEL, SWOT)',
        summary:
          "Analyser les forces incontrôlables du macro-environnement (démographie, économie, technologie, politico-légal, culture, écologie) et les synthétiser dans une matrice SWOT.",
        conceptExplanation:
          "Contrairement au micro-environnement sur lequel l'entreprise peut négocier ou agir partiellement, le macro-environnement rassemble les grandes forces sociétales externes qui échappent largement au contrôle de l'entreprise mais façonnent profondément la demande et les règles du jeu :\n\n1) Environnement démographique : qualifié par le cours de facteur le plus important du marketing (car ce sont des personnes qui forment les marchés). Il s'analyse par la taille et la croissance de la population, la densité, la structure par âge (ex. jeunesse africaine ultra-connectée), le niveau d'éducation, le revenu et la localisation urbaine/rurale.\n2) Environnement économique : pouvoir d'achat, inflation, taux d'intérêt, croissance du PIB, répartition des revenus et taux de chômage, qui conditionnent la propension à dépenser.\n3) Environnement technologique : innovations rapides (mobile money, 4G/5G, intelligence artificielle, e-commerce) qui créent de nouveaux marchés tout en rendant obsolètes d'anciens produits.\n4) Environnement politique et légal : lois de protection du consommateur, droit de la concurrence, réglementation des données personnelles (Loi 2013-450 / ARTCI), fiscalité, stabilité institutionnelle.\n5) Environnement socioculturel : valeurs collectives, modes de vie, traditions, langues, sensibilité religieuse ou esthétique qui orientent les préférences de consommation.\n6) Environnement naturel / écologique : rareté des ressources, coûts énergétiques, transition écologique et attentes de durabilité.\n\nPour synthétiser son environnement interne et externe avant d'agir, le responsable marketing utilise la matrice SWOT (Forces / Faiblesses internes ; Opportunités / Menaces externes).",
        formulas: [
          {
            name: 'Synthèse diagnostique SWOT',
            formula: 'Interne : Forces (Strengths) & Faiblesses (Weaknesses)  |  Externe : Opportunités (Opportunities) & Menaces (Threats)',
            note: 'Relie le diagnostic interne de l’entreprise à l’analyse micro/macro-environnementale.',
          },
        ],
        keyRule:
          "Macro-environnement = forces globales externes hors du contrôle direct de l'entreprise (démographie en tête !). SWOT = Interne (Forces/Faiblesses) + Externe (Opportunités/Menaces).",
        workedExample: {
          title: "Analyse macro-environnementale du marché du Mobile Money en Côte d'Ivoire",
          statement:
            "Identifier trois forces du macro-environnement expliquant le succès massif des services financiers mobiles en Côte d'Ivoire et les traduire en opportunités/menaces SWOT.",
          methodSteps: [
            "Étape 1 (Démographique) : Population jeune (majorité de moins de 30 ans) et urbanisation rapide → forte adoption des services mobiles (Opportunité).",
            "Étape 2 (Technologique) : Taux élevé de pénétration du téléphone mobile et extension de la 4G → accès immédiat à des millions de clients non bancarisés (Opportunité).",
            "Étape 3 (Politico-légal & Économique) : Réglementation BCEAO / ARTCI sur la monnaie électronique et fiscalité sur les transferts → encadrement strict pouvant peser sur les marges (Menace/contrainte à anticiper).",
          ],
          conclusion:
            "La veille macro-environnementale permet d'anticiper les moteurs de croissance (démographie, technologie) tout en intégrant les contraintes réglementaires.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Démographie',
            stepTheme: 'Premier facteur du macro-environnement',
            stepTitle: 'Pourquoi la démographie est-elle centrale en marketing ?',
            paragraphText:
              "Le cours rappelle que la population est le facteur le plus déterminant de l'environnement marketing : ses caractéristiques (âge, densité, revenu, éducation, localisation) façonnent directement le volume et la nature de la demande sur chaque territoire.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Selon le cours d’Introduction au Marketing, quel facteur externe est qualifié de « plus important » car ce sont des personnes qui constituent les marchés ?',
              options: [
                'L’environnement démographique (taille, âge, densité, éducation, localisation de la population)',
                'La couleur des locaux de l’entreprise',
                'Le nombre de fournisseurs de papier',
                'La comptabilité analytique des concurrents',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sans population, il n’y a pas de marché : la structure démographique (âge, densité, éducation, urbanisation) détermine directement la demande.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Économique',
            stepTheme: 'Pouvoir d’achat et conjoncture',
            stepTitle: 'Mesurer l’impact de l’environnement économique',
            paragraphText:
              "L'environnement économique (pouvoir d'achat des ménages, inflation, croissance du PIB, taux d'intérêt) conditionne non seulement le volume global des achats, mais aussi l'arbitrage des consommateurs entre produits de première nécessité et biens de loisir ou haut de gamme.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Une forte hausse de l’inflation qui réduit le pouvoir d’achat des ménages relève de quelle composante du macro-environnement ?',
              options: [
                'L’environnement technologique',
                'L’environnement économique',
                'L’environnement démographique',
                'L’environnement écologique',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'inflation, le pouvoir d'achat, les taux d'intérêt et le chômage sont les variables clés de l'environnement économique.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Technologique',
            stepTheme: 'Innovation et obsolescence',
            stepTitle: 'Comprendre le double visage de la technologie',
            paragraphText:
              "Les avancées technologiques (smartphones, paiement mobile, IA générative) sont à la fois source d'opportunités majeures (nouveaux services, baisse des coûts) et de menaces mortelles pour les acteurs qui ne s'adaptent pas (obsolescence des cabines téléphoniques ou des DVD).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quel effet paradoxal les ruptures technologiques exercent-elles sur les marchés existants ?',
              options: [
                'Elles figent définitivement les parts de marché des anciens leaders',
                'Elles suppriment le besoin d’étudier les consommateurs',
                'Elles créent de nouvelles opportunités de marché tout en pouvant rendre obsolètes d’anciennes offres',
                'Elles concernent uniquement les entreprises agricoles',
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'innovation technologique (« destruction créatrice ») ouvre de nouveaux marchés tout en menaçant les modèles traditionnels qui tardent à se transformer.",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Socioculturel',
            stepTheme: 'Valeurs, croyances et modes de vie',
            stepTitle: 'Adapter son offre à l’environnement socioculturel',
            paragraphText:
              "L'environnement socioculturel regroupe les valeurs, traditions, croyances, habitudes alimentaires, langues et styles de vie d'une société. Une campagne marketing internationale qui ignore les codes culturels locaux risque un rejet immédiat.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Une marque adapte ses publicités et ses formats de produits aux langues locales et aux grandes fêtes culturelles en Côte d’Ivoire. Quelle dimension du macro-environnement prend-elle en compte ?',
              options: [
                'L’environnement financier bancaire',
                'L’environnement technique d’atelier',
                'L’environnement purement comptable',
                'L’environnement socioculturel',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les langues, traditions, valeurs et habitudes de vie appartiennent à l’environnement socioculturel.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Matrice SWOT',
            stepTheme: 'Interne vs Externe dans SWOT',
            stepTitle: 'Ne jamais confondre Force et Opportunité dans un SWOT',
            paragraphText:
              "Dans une matrice SWOT : les Forces (S) et Faiblesses (W) sont strictement INTERNES à l'entreprise (marque forte, trésorerie faible, équipe compétente), tandis que les Opportunités (O) et Menaces (T) sont strictement EXTERNES (issues du micro et du macro-environnement).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans une analyse SWOT, comment classe-t-on « un taux de pénétration rapide de la 5G dans le pays » pour une startup qui crée des applications de streaming ?',
              options: [
                'Une Opportunité (facteur externe favorable issu du macro-environnement)',
                'Une Force interne de la startup',
                'Une Faiblesse interne',
                'Un coût fixe comptable',
              ],
              correctAnswerIndex: 0,
              explanation:
                "La startup ne contrôle pas le déploiement national de la 5G : c'est un facteur externe favorable, donc une Opportunité (et non une Force interne).",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Veille marketing',
            stepTheme: 'Anticiper les évolutions',
            stepTitle: 'Pourquoi la veille environnementale est-elle vitale ?',
            paragraphText:
              "Certains changements du macro-environnement sont prévisibles (vieillissement ou rajeunissement démographique, entrée en vigueur d'une loi), d'autres sont soudains (crise sanitaire, choc pétrolier). Une veille continue permet d'adapter le plan marketing avant les concurrents.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de la veille sur le macro-environnement en marketing ?',
              options: [
                'Contrôler directement les décisions du gouvernement',
                'Anticiper les évolutions du marché pour saisir les opportunités et réduire l’exposition aux menaces',
                'Empêcher définitivement tout progrès technologique',
                'Remplacer la force de vente',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Ne pouvant contrôler le macro-environnement, l'entreprise doit le surveiller en permanence pour anticiper les ruptures et ajuster sa stratégie.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : DÉMARCHE MARKETING — ÉTUDE DE MARCHÉ, STP ET MIX (4P)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_marketing_ch3',
    subjectId: 'lmd_intro_marketing',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Démarche marketing : étude de marché, STP et plan de marchéage (4P)',
    summary:
      "Besoins, désirs et demande, études de marché qualitatives et quantitatives, démarche stratégique STP (Segmentation, Ciblage, Positionnement) et déclinaison opérationnelle des 4P à l'ère du marketing digital.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'COURS INTRO AU MARKETING — ENTD 1 (Dr HIEN Sié Clotaire — Démarche et Mix Marketing)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch3_p1',
        order: 1,
        title: 'Comportement du consommateur, étude de marché et démarche STP',
        summary:
          "Distinguer besoin, désir et demande, choisir entre étude qualitative et quantitative, et appliquer rigoureusement la séquence Segmentation → Ciblage → Positionnement (STP).",
        conceptExplanation:
          "La démarche marketing commence par la compréhension fine du consommateur et du marché :\n1) Besoin, Désir et Demande :\n   - Le besoin est un sentiment de manque (physiologique, sécurité, estime...) — le marketing ne « crée » pas les besoins fondamentaux, il les détecte et les révèle.\n   - Le désir est un moyen spécifique façonné par la culture pour satisfaire un besoin (ex. besoin de communiquer → désir d'un smartphone précis).\n   - La demande est un désir soutenu par un pouvoir d'achat et une volonté d'acheter.\n\n2) L'étude de marché combine deux approches complémentaires :\n   - Études qualitatives (entretiens individuels, focus groups, observation) : sur de petits échantillons, elles répondent au « Pourquoi ? » et au « Comment ? » (motivations, freins, perceptions).\n   - Études quantitatives (questionnaires structurés / sondages sur grands échantillons représentatifs) : elles répondent au « Combien ? » et mesurent des proportions chiffrées (intentions d'achat, notoriété, prix accepté).\n\n3) La démarche stratégique STP (Segmentation – Ciblage – Positionnement) :\n   - Segmentation : découper un marché hétérogène en sous-groupes homogènes de consommateurs (segments) selon des critères géographiques, démographiques, socio-économiques ou comportementaux.\n   - Ciblage : évaluer l'attractivité des segments et choisir celui ou ceux que l'entreprise va servir (stratégie indifférenciée, différenciée ou concentrée/de niche).\n   - Positionnement : concevoir et ancrer dans l'esprit des consommateurs cibles une image claire, distinctive et crédible de l'offre par rapport aux concurrents (ex. « le paiement mobile simple et le moins cher »).",
        formulas: [
          {
            name: 'Séquence stratégique STP',
            formula: '1. Segmentation (découper)  →  2. Ciblage (choisir)  →  3. Positionnement (se différencier dans l’esprit du client)',
            note: 'Le STP précède toujours la construction du marketing mix (4P).',
          },
        ],
        keyRule:
          "Demande = Désir + Pouvoir d'achat. Qualitatif = Pourquoi ? (petits groupes, motivations) ; Quantitatif = Combien ? (grands échantillons, statistiques). STP = Segmentation → Ciblage → Positionnement.",
        workedExample: {
          title: "Démarche STP d'une marque ivoirienne de jus naturels bio",
          statement:
            "Une jeune entreprise agroalimentaire lance des jus pressés à froid (bissap, gingembre, ananas) sans sucre ajouté à Abidjan. Dérouler sa démarche d'étude de marché et de STP.",
          methodSteps: [
            "Étape 1 (Étude de marché) : Organiser 2 focus groups (étude qualitative) pour tester le goût et les freins, puis un questionnaire en ligne auprès de 500 habitants d'Abidjan (étude quantitative) pour estimer le prix psychologique et la fréquence d'achat.",
            "Étape 2 (Segmentation) : Découper le marché des boissons selon le mode de vie et le revenu (étudiants à petit budget, jeunes cadres soucieux de leur santé, familles, hôtels/restaurants).",
            "Étape 3 (Ciblage — stratégie concentrée) : Cibler prioritairement les jeunes actifs urbains et sportifs des communes de Cocody, Plateau et Marcory.",
            "Étape 4 (Positionnement) : « Le jus 100 % naturel ivoirien, pressé à froid, sain et énergisant pour les actifs exigeants ».",
          ],
          conclusion:
            "Le positionnement découle directement de la cible choisie et guidera ensuite le packaging, le prix, les points de vente et la communication (4P).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Besoin / Désir / Demande',
            stepTheme: 'Conditions de la demande solvable',
            stepTitle: 'Quand un désir devient-il une demande ?',
            paragraphText:
              "En marketing, tout désir ne constitue pas une demande : un étudiant peut désirer une voiture de luxe sans pouvoir l'acheter. La demande n'existe que lorsque le désir est accompagné d'un pouvoir d'achat et d'une volonté effective d'achat.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle condition transforme un simple désir de consommation en une véritable « demande » sur le marché ?',
              options: [
                'L’existence d’une publicité télévisée',
                'Un pouvoir d’achat et une volonté d’acheter le produit',
                'La production en grande série par l’entreprise',
                'L’absence de tout concurrent',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La demande est un désir solvable, c’est-à-dire soutenu par un pouvoir d’achat suffisant et la volonté d’acquérir le produit.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Études de marché',
            stepTheme: 'Qualitative vs Quantitative',
            stepTitle: 'Choisir la bonne méthode d’étude de marché',
            paragraphText:
              "Les études qualitatives (entretiens, focus groups) explorent en profondeur les motivations, freins et attitudes (le « Pourquoi ? »). Les études quantitatives (sondages par questionnaire sur grands échantillons) mesurent des données chiffrées fiables (le « Combien ? »).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Une entreprise réunit un groupe de 10 clients autour d’un animateur (focus group) pour comprendre pourquoi ils abandonnent leur panier sur son application mobile. De quel type d’étude s’agit-il ?',
              options: [
                'Une étude quantitative statistique',
                'Un recensement démographique national',
                'Une étude qualitative',
                'Un bilan comptable provisoire',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le focus group (réunion de petit groupe explorant les freins et motivations en profondeur) est un outil typique de l’étude qualitative.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Segmentation',
            stepTheme: 'Homogénéité intra-segment',
            stepTitle: 'Quel est le but de la segmentation du marché ?',
            paragraphText:
              "Un marché global est hétérogène : tous les clients n'ont pas les mêmes attentes ni le même budget. La segmentation découpe ce marché en sous-groupes (segments) homogènes à l'intérieur et distincts entre eux, afin de proposer des offres adaptées.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'En quoi consiste exactement la phase de « Segmentation » dans la démarche STP ?',
              options: [
                'Découper un marché hétérogène en groupes homogènes de consommateurs aux besoins similaires',
                'Vendre exactement le même produit au même prix à toute la planète sans distinction',
                'Calculer le seuil de rentabilité comptable',
                'Choisir les couleurs du logotype',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Segmenter consiste à regrouper les consommateurs partageant des caractéristiques ou attentes communes au sein de segments exploitables.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Ciblage',
            stepTheme: 'Stratégies de couverture de marché',
            stepTitle: 'Reconnaître une stratégie de niche (concentrée)',
            paragraphText:
              "Après avoir segmenté, l'entreprise choisit sa stratégie de ciblage : indifférenciée (un seul mix pour tout le marché), différenciée (un mix spécifique pour plusieurs segments) ou concentrée / de niche (concentrer toutes ses ressources sur un seul segment très précis, idéal pour une PME ou startup).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Une startup aux ressources limitées décide de se consacrer exclusivement à un seul segment très spécifique (les logiciels de gestion pour pharmacies de quartier). Quelle stratégie de ciblage adopte-t-elle ?',
              options: [
                'Un marketing indifférencié de masse',
                'Une stratégie de diversification conglomérale',
                'Une absence totale de segmentation',
                'Une stratégie de ciblage concentré (stratégie de niche)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le ciblage concentré (ou niche) permet à une entreprise aux moyens limités de dominer un segment précis grâce à une forte spécialisation.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Positionnement',
            stepTheme: 'Dans l’esprit du consommateur',
            stepTitle: 'Où se situe véritablement le positionnement ?',
            paragraphText:
              "Le positionnement n'est pas ce que l'entreprise fait physiquement au produit, mais la place distinctive et mémorable que la marque occupe dans l'ESPRIT du consommateur cible par rapport aux offres concurrentes.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle définition correspond exactement au « Positionnement » marketing ?',
              options: [
                'La place claire, distinctive et crédible que l’offre occupe dans l’esprit des clients cibles face à la concurrence',
                'L’adresse postale du siège social de l’entreprise',
                'Le numéro de rayon attribué au produit dans l’entrepôt',
                'Le classement du bilan comptable par ordre de liquidité',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le positionnement exprime la proposition de valeur unique perçue par le consommateur comparativement aux concurrents.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Ordre logique',
            stepTheme: 'Articulation STP → 4P',
            stepTitle: 'Respecter la chronologie de la démarche marketing',
            paragraphText:
              "On ne commence jamais par faire de la publicité ou fixer un prix au hasard : on mène d'abord l'analyse (étude de marché / SWOT), puis la stratégie STP (Segmentation → Ciblage → Positionnement), et enfin la déclinaison cohérente des 4P du marketing mix.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Dans quel ordre logique se déroule une démarche marketing rigoureuse ?',
              options: [
                'Publicité → Fixation du prix → Étude de marché → Segmentation',
                'Analyse du marché → Segmentation, Ciblage, Positionnement (STP) → Marketing Mix (4P)',
                'Vente → Fabrication → Étude des besoins',
                'Positionnement → Création d’entreprise → Comptabilité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’analyse éclaire le STP (marketing stratégique), qui dicte ensuite la cohérence des 4 variables du marketing mix (marketing opérationnel).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_marketing_ch3_p2',
        order: 2,
        title: 'Le Marketing Mix (4P) : Produit, Prix, Distribution et Communication digitale',
        summary:
          "Maîtriser les décisions clés de chaque P du plan de marchéage : cycle de vie du produit, stratégies de tarification (écrémage, pénétration, alignement), circuits de distribution et mix communication traditionnel et digital.",
        conceptExplanation:
          "Une fois le positionnement fixé, le marketing opérationnel le traduit de façon parfaitement cohérente sur les 4P du plan de marchéage :\n\n1) Politique de Produit (Product) : caractéristiques techniques, design, marque, conditionnement/packaging, gamme et services associés. Tout produit traverse un Cycle de Vie en 4 phases : Lancement (ventes lentes, forts investissements), Croissance (décollage des ventes et profits), Maturité (marché saturé, forte concurrence, guerre des prix/promotions) et Déclin (baisse des ventes, relance ou retrait).\n\n2) Politique de Prix (Price) : seule variable du mix qui génère directement des revenus (les trois autres engendrent des coûts). Trois stratégies de fixation de prix au lancement :\n   - Écrémage : prix élevé pour maximiser la marge unitaire et affirmer une image haut de gamme/innovante ;\n   - Pénétration : prix bas pour conquérir rapidement une large part de marché et décourager les concurrents ;\n   - Alignement : prix proche de celui des concurrents directs.\nOn tient compte des coûts (prix plancher), de la concurrence et du prix psychologique accepté par le client.\n\n3) Politique de Distribution (Place) : choix des canaux (circuit direct producteur→client sans intermédiaire, circuit court avec 1 détaillant, circuit long avec grossiste + détaillant) et de l'intensité de couverture : distribution intensive (partout, biens courants), sélective (points de vente choisis selon critères de qualité) ou exclusive (un seul distributeur par zone, luxe).\n\n4) Politique de Communication (Promotion) : combine médias traditionnels (TV, radio, affichage, presse) et leviers digitaux (réseaux sociaux, SEO/SEA, e-mailing, marketing d'influence), ainsi que le hors-média (promotion des ventes, relations publiques, parrainage/sponsoring) dans une logique omnicanale.",
        formulas: [
          {
            name: 'Les 4 phases du cycle de vie d’un produit',
            formula: 'Lancement → Croissance → Maturité → Déclin',
            note: 'Les objectifs marketing et le mix 4P doivent être adaptés à chaque phase.',
          },
          {
            name: 'Les 3 stratégies de prix au lancement',
            formula: 'Écrémage (prix élevé)  ·  Pénétration (prix bas, volume)  ·  Alignement (prix du marché)',
            note: 'La politique de prix doit toujours rester cohérente avec le positionnement choisi.',
          },
        ],
        keyRule:
          "Cohérence absolue des 4P ! Exemple : un positionnement luxe implique Produit irréprochable + Prix d'écrémage + Distribution sélective/exclusive + Communication prestigieuse. Le Prix est le seul P qui crée directement du chiffre d'affaires.",
        workedExample: {
          title: 'Cohérence du Marketing Mix 4P pour une marque de smartphones premium vs entrée de gamme',
          statement:
            "Comparer le plan de marchéage (4P) d'un smartphone très haut de gamme lancé à 750 000 FCFA et celui d'un smartphone d'entrée de gamme lancé à 55 000 FCFA sur le marché ivoirien.",
          methodSteps: [
            "Étape 1 (Produit) : Haut de gamme = matériaux nobles, innovation photo/IA, garantie étendue ; Entrée de gamme = fonctions essentielles robustes, batterie longue durée.",
            "Étape 2 (Prix) : Haut de gamme = stratégie d'écrémage (forte marge unitaire) ; Entrée de gamme = stratégie de pénétration (prix accessible pour maximiser les volumes).",
            "Étape 3 (Distribution / Place) : Haut de gamme = distribution sélective (boutiques agréées, showrooms officiels) ; Entrée de gamme = distribution intensive (tous revendeurs, opérateurs, e-commerce).",
            "Étape 4 (Communication / Promotion) : Haut de gamme = image aspirationnelle, événements exclusifs, créateurs premium ; Entrée de gamme = affichage de masse, radio, réseaux sociaux grand public et promotions.",
          ],
          conclusion:
            "Un marketing mix efficace se reconnaît à la parfaite harmonie entre ses quatre variables et le positionnement visé.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Politique de Produit',
            stepTheme: 'Cycle de vie du produit',
            stepTitle: 'Reconnaître la phase de Maturité',
            paragraphText:
              "Le cycle de vie d'un produit comporte 4 phases : Lancement, Croissance, Maturité et Déclin. En phase de Maturité, les ventes atteignent leur pic puis se stabilisent, la concurrence est très intense et l'entreprise mise sur la fidélisation et les promotions pour défendre ses parts de marché.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle phase du cycle de vie d’un produit se caractérise par un plafonnement des ventes, une saturation du marché et une vive concurrence ?',
              options: [
                'La phase de lancement',
                'La phase de recherche en laboratoire',
                'La phase de maturité',
                'La phase de pré-étude',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En phase de maturité, le taux d’équipement est élevé, les ventes plafonnent et la bataille concurrentielle s’intensifie.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Politique de Prix',
            stepTheme: 'Écrémage vs Pénétration',
            stepTitle: 'Choisir entre stratégie d’écrémage et stratégie de pénétration',
            paragraphText:
              "Lors du lancement d'un produit nouveau, la stratégie de pénétration consiste à fixer un prix volontairement bas afin de conquérir rapidement de grandes parts de marché et de freiner les concurrents ; la stratégie d'écrémage fixe au contraire un prix élevé pour dégager de fortes marges sur une clientèle prête à payer cher.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Un nouvel opérateur fibre optique lance ses abonnements à un tarif nettement inférieur à ses concurrents afin de capter rapidement un maximum d’abonnés. Quelle stratégie de prix applique-t-il ?',
              options: [
                'Une stratégie de pénétration',
                'Une stratégie d’écrémage',
                'Une stratégie de prestige exclusif',
                'Une stratégie de déclin',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Fixer un prix d’appel bas pour gagner vite du volume et des parts de marché définit la stratégie de pénétration.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Spécificité du Prix',
            stepTheme: 'Revenus vs Coûts dans les 4P',
            stepTitle: 'Pourquoi le prix a-t-il un rôle unique dans les 4P ?',
            paragraphText:
              "Parmi les quatre variables du marketing mix, le Produit, la Distribution et la Communication génèrent d'abord des coûts d'investissement et de fonctionnement, tandis que le Prix est la seule variable qui produit directement des recettes (chiffre d'affaires).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle variable du marketing mix (4P) est la SEULE à générer directement des revenus pour l’entreprise ?',
              options: [
                'Le Produit (Product)',
                'Le Prix (Price)',
                'La Distribution (Place)',
                'La Communication (Promotion)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Prix détermine directement la recette encaissée par unité vendue et la rentabilité, tandis que les trois autres P constituent des centres de coûts créateurs de valeur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Distribution (Place)',
            stepTheme: 'Intensive, sélective, exclusive',
            stepTitle: 'Associer un type de produit à sa stratégie de distribution',
            paragraphText:
              "On distingue trois stratégies de couverture de marché : la distribution intensive (présence dans un maximum de points de vente — boissons, cartes prépayées), la distribution sélective (points de vente choisis selon des critères de compétence/image — parfums, informatique haut de gamme) et la distribution exclusive (un seul distributeur agréé par zone — luxe, concessionnaires).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle stratégie de distribution une marque de montres de grand luxe choisit-elle généralement pour préserver son prestige et son niveau de conseil ?',
              options: [
                'La distribution intensive dans toutes les épiceries et stations-service',
                'La distribution en vrac sans intermédiaire qualifié',
                'La distribution par distributeurs automatiques de rue',
                'La distribution sélective ou exclusive via des boutiques agréées',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Les marques de luxe limitent volontairement le nombre de points de vente (distribution exclusive ou sélective) pour garantir l'expérience client et la rareté perçue.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Circuits de distribution',
            stepTheme: 'Direct, court, long',
            stepTitle: 'Reconnaître un circuit de distribution direct',
            paragraphText:
              "Un circuit de distribution se mesure à son nombre d'intermédiaires : circuit direct = 0 intermédiaire (du producteur directement au consommateur, ex. vente sur le site e-commerce officiel de la marque) ; circuit court = 1 intermédiaire (détaillant) ; circuit long = 2 intermédiaires ou plus (grossiste + détaillant).",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Un artisan ivoirien vend ses créations directement aux clients finaux via sa propre boutique en ligne, sans passer ni par un grossiste ni par un détaillant. Quel type de circuit utilise-t-il ?',
              options: [
                'Un circuit long',
                'Un circuit direct (sans intermédiaire)',
                'Un circuit à trois niveaux',
                'Une franchise internationale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’absence totale d’intermédiaire commercial entre le producteur et le consommateur final caractérise le circuit direct (ou ultra-court).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Cohérence du mix',
            stepTheme: 'Harmonisation des 4P',
            stepTitle: 'Repérer une incohérence dans un plan de marchéage',
            paragraphText:
              "La force d'un marketing mix repose sur la cohérence interne des 4P. Vendre un parfum de luxe à 120 000 FCFA (prix d'écrémage) dans un emballage plastique bas de gamme sur un étalage de marché détruit immédiatement la crédibilité du positionnement.",
            exercise: {
              id: 'lmd_entd_l1_intro_marketing_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Pourquoi une marque positionnée « haut de gamme » doit-elle veiller à la cohérence entre son prix, son packaging, ses points de vente et sa communication ?',
              options: [
                'Parce que la loi interdit de vendre cher dans un supermarché',
                'Parce que les 4P sont indépendants et n’influencent pas l’image de marque',
                'Parce qu’une incohérence sur un seul des 4P affaiblit la valeur perçue et détruit la crédibilité du positionnement',
                'Parce que le marketing opérationnel remplace le produit',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Les 4P forment un système cohérent : chaque variable envoie un signal au client et doit renforcer le même positionnement.",
            },
          },
        ],
      }),
    ],
  },
];
