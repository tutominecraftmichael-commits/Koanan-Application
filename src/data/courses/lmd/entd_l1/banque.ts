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
// BANQUE — ENTD LICENCE 1 (MASTERCLASS)
// 4 chapitres • 13 mini-leçons • 79 étapes • 9 schémas graphiques
// ============================================================================

export const BANQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : HISTOIRE, RÔLES ÉCONOMIQUES ET ARCHITECTURE DU SYSTÈME BANCAIRE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch1',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Banque',
    title: 'Chapitre 1 — Histoire, rôles économiques et architecture du système bancaire',
    summary:
      'Genèse historique de la banque, définition légale UEMOA (art. 4, 2007), intermédiation financière, asymétries d’information (sélection adverse et aléa moral) et architecture BCEAO, banques commerciales et SFD.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_banque_ch1_p1',
        order: 1,
        title: 'Histoire de la banque, définition légale UEMOA et fonctions essentielles',
        summary:
          'De Babylone et Venise (1151) aux paiements numériques, article 4 de la loi bancaire UEMOA (2007) et 4 fonctions économiques majeures.',
        conceptExplanation:
          'Les banques constituent le cœur du financement économique : en Côte d’Ivoire, elles détiennent environ 90 % des actifs financiers et assurent la quasi-totalité des crédits au secteur privé.\n\n' +
          '1. **Évolution historique** : les premiers prêts sur céréales apparaissent dans les temples de Babylone (IIe millénaire av. J.-C.), puis se laïcisent avec la monnaie (VIIe s. av. J.-C.) et les banquiers romains. Au Moyen Âge, le terme « banque » provient de *bankiz* (table des changeurs) ; la première banque moderne naît à Venise en 1151 avec la lettre de change et les foires européennes. La révolution industrielle généralise la monnaie fiduciaire, la monnaie scripturale et les grands réseaux (Société Générale, Deutsche Bank, Barclays). Après le krach de 1929, Roosevelt sépare banques de dépôts et banques d’affaires ; dès les années 1960, cartes bancaires, DAB/GAB et services en ligne démocratisent l’accès bancaire.\n\n' +
          '2. **Définition légale (article 4 de la loi bancaire uniforme de 2007 de l’UEMOA)** : est considérée comme banque toute entreprise effectuant à titre de profession habituelle la réception de fonds du public, les opérations de crédit et la mise à disposition ou la gestion de moyens de paiement.\n\n' +
          '3. **Quatre grandes fonctions** : création monétaire (dépôts/crédits), gestion des moyens de paiement et service de caisse, gestion des risques et sécurisation de l’épargne, conseil et accompagnement financier.',
        formulas: [
          {
            name: 'Triple critère légal UEMOA (Art. 4, 2007)',
            formula: '\\text{Banque} \\iff \\text{Dépôts du public} + \\text{Crédits} + \\text{Moyens de paiement}',
            note: 'Critères cumulatifs exercés à titre de profession habituelle sous agrément.',
          },
        ],
        keyRule:
          'Une institution n’est juridiquement une banque dans l’UEMOA que si elle exerce cumulativement réception de fonds du public, octroi de crédits et gestion de moyens de paiement.',
        workedExample: {
          title: 'Qualifier juridiquement un acteur financier dans l’UEMOA',
          statement:
            'Une société de transfert rapide permet d’envoyer des espèces entre Abidjan et Bouaké contre commission, sans ouvrir de comptes de dépôt rémunérés ni accorder de crédits. Est-elle une banque au sens de l’article 4 de la loi bancaire UEMOA ?',
          methodSteps: [
            'Rappeler les trois opérations cumulatives exigées par l’article 4 de la loi bancaire uniforme de 2007 : réception de fonds du public, opérations de crédit, gestion de moyens de paiement.',
            'Observer que la société se limite aux transferts d’argent : elle n’accorde aucun crédit et ne collecte pas de dépôts bancaires durables.',
            'Qualifier l’entité de prestataire de services de paiement / transfert de fonds, et non d’établissement bancaire de plein exercice.',
          ],
          conclusion:
            'L’entreprise n’est pas une banque : elle relève d’un agrément spécifique de paiement ou de transfert d’argent.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Antiquité & Moyen Âge',
            stepTheme: 'blue',
            stepTitle: 'Des temples de Babylone à la banque de Venise (1151)',
            paragraphText:
              'L’activité bancaire est née bien avant les pièces frappées pour sécuriser les réserves agricoles et faciliter le commerce à longue distance.\n' +
              '• **Antiquité** : dès le IIe millénaire av. J.-C., les prêtres de Babylone pratiquent le prêt de céréales dans les temples ; à partir du VIIe s. av. J.-C., l’apparition de la monnaie transfère dépôts et prêts avec intérêt (usure) aux banquiers civils, notamment sous l’Empire romain.\n' +
              '• **Étymologie et essor européen** : le mot « banque » dérive de l’allemand *bankiz* (banc ou table sur lequel opéraient les changeurs italiens au XIe siècle).\n' +
              '• **Acte fondateur moderne** : la première banque au sens moderne est fondée à Venise en **1151**, suivie par Florence et l’usage de la lettre de change dans les foires de Champagne et de Lyon.\n' +
              'Exemple : un marchand de tissus évite de transporter de l’or sur des routes risquées grâce à une lettre de change payable sur une foire.',
            keyRule:
              'Retiens deux repères fondateurs : Babylone (prêts sur marchandises dès le IIe millénaire av. J.-C.) et Venise en **1151** (première banque moderne).',
            konanTip:
              'Pour ne jamais confondre : *bankiz* désignait la table en bois du changeur, d’où vient aussi « banqueroute » (table rompue en cas de faillite).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'En quelle année et dans quelle ville a été créée la première banque au sens moderne du terme, accompagnant l’essor des lettres de change ?',
              options: [
                'En 1151 à Venise',
                'En 1789 à Paris',
                'En 1492 à Londres',
                'En 1929 à New York',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À partir du XIe siècle, les banquiers italiens structurent le commerce européen et créent la première banque au sens moderne à Venise en 1151.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Époque moderne',
            stepTheme: 'violet',
            stepTitle: 'Révolution industrielle, crise de 1929 et innovations du XXe siècle',
            paragraphText:
              'L’industrialisation et les crises financières ont transformé de petites maisons familiales en réseaux bancaires mondiaux strictement supervisés.\n' +
              '• **XIXe siècle** : essor simultané de la monnaie fiduciaire (billets/pièces), de la monnaie scripturale (chèques, virements), des actions et de grands établissements (Société Générale, Crédit Lyonnais, Deutsche Bank, Barclays), soutenus par le télégraphe (1840) et le téléphone (1870).\n' +
              '• **Rupture de 1929** : après le krach boursier, le président Roosevelt impose aux États-Unis la séparation stricte entre **banques de dépôts** (particuliers/PME) et **banques d’affaires** (marchés/grandes entreprises).\n' +
              '• **Années 1960–2000** : généralisation des comptes bancaires (femmes, jeunes), invention des cartes bancaires, DAB/GAB, banque en ligne et paiements internationaux.\n' +
              'Exemple : un virement électronique télégraphique permet dès la fin du XIXe siècle de régler un fournisseur à l’étranger sans expédier de lingots.',
            keyRule:
              'La crise de **1929** a déclenché la séparation juridique entre banques de dépôts (protégeant l’épargne du public) et banques d’affaires (exposées aux marchés).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle réforme structurelle a été décidée aux États-Unis après la crise boursière de 1929 pour protéger l’épargne des déposants ?',
              options: [
                'La suppression totale des billets de banque au profit du troc',
                'La séparation stricte entre banques de dépôts et banques d’affaires',
                'L’interdiction des virements électroniques et des cartes bancaires',
                'Le transfert de tous les crédits privés vers les temples religieux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour éviter que la spéculation boursière ne mette en danger les dépôts des ménages, l’État américain a séparé banques de dépôts et banques d’affaires.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Cadre UEMOA',
            stepTheme: 'blue',
            stepTitle: 'Définition légale de la banque dans l’espace UEMOA (Art. 4, 2007)',
            paragraphText:
              'Dans les huit pays de l’UEMOA (dont la Côte d’Ivoire), l’exercice du métier bancaire est réservé aux établissements agréés répondant à une définition légale précise.\n' +
              '• **Article 4 de la loi bancaire uniforme de 2007** : est considérée comme banque toute entreprise qui effectue, à titre de profession habituelle, trois opérations fondamentales.\n' +
              '• **Les 3 opérations** : (1) la réception de fonds du public (dépôts), (2) les opérations de crédit, et (3) la mise à disposition ou la gestion de moyens de paiement.\n' +
              '• **Poids économique en Côte d’Ivoire** : les banques détiennent environ **90 % des actifs financiers** et assurent la quasi-totalité du financement formel du secteur privé.\n' +
              'Exemple : une banque commerciale d’Abidjan collecte les salaires sur comptes courants, délivre des cartes Visa et finance les équipements d’une PME.',
            formula: {
              name: 'Définition UEMOA de la banque (Art. 4, 2007)',
              formula: '\\text{Établissement bancaire} = \\text{Dépôts du public} + \\text{Crédits} + \\text{Moyens de paiement}',
              note: 'L’exercice habituel et professionnel de ces trois activités requiert un agrément.',
            },
            keyRule:
              'Sans l’exercice habituel des **trois** opérations de l’article 4 (dépôts, crédits, moyens de paiement), une entité ne peut porter le statut juridique de banque.',
            konanTip:
              'Mémorise les 3 mots-clés de l’article 4 : **Dépôts — Crédits — Paiements**, et le poids de **90 %** des actifs financiers en Côte d’Ivoire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Selon l’article 4 de la loi bancaire uniforme de 2007 de l’UEMOA, quelles sont les trois activités habituelles qui caractérisent une banque ?',
              options: [
                'L’audit fiscal, l’assurance agricole et la cotation en bourse',
                'La réception de fonds du public, les opérations de crédit et la mise à disposition/gestion de moyens de paiement',
                'La fabrication de billets, le transport de marchandises et le change manuel uniquement',
                'Le financement exclusif de l’État sans collecte de dépôts privés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’article 4 de la loi bancaire uniforme de 2007 définit la banque par l’exercice habituel de ces trois opérations indissociables.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Fonctions clés',
            stepTheme: 'violet',
            stepTitle: 'Création monétaire et gestion des moyens de paiement (service de caisse)',
            paragraphText:
              'Au-delà de la simple garde d’espèces, la banque assure deux fonctions monétaires vitales pour la fluidité des échanges quotidiens.\n' +
              '• **Création monétaire** : lorsqu’une banque accorde un prêt, elle crédite le compte de l’emprunteur et augmente immédiatement la masse monétaire en circulation (sous contrôle de la banque centrale).\n' +
              '• **Service de caisse** : obligation de conserver les fonds déposés, d’exécuter les retraits d’espèces, de faciliter les dépenses et d’encaisser les règlements.\n' +
              '• **Moyens de paiement** : ensemble des supports techniques (chèques, cartes de débit/crédit, virements, prélèvements, paiements mobiles) permettant le transfert de fonds.\n' +
              'Exemple : lorsqu’un employeur paie ses 120 salariés par virement bancaire, la banque exécute son service de caisse sans manipulation de billets.',
            keyRule:
              'Le **service de caisse** regroupe la conservation des dépôts, les retraits/encaissements et la délivrance des instruments de paiement.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'En technique bancaire, que recouvre précisément l’obligation de « service de caisse » due par une banque à ses clients ?',
              options: [
                'L’obligation de prêter gratuitement à tout demandeur sans garantie',
                'La conservation des fonds déposés, l’exécution des retraits/encaissements et la délivrance de moyens de paiement',
                'La prise de participation majoritaire dans le capital des clients entreprises',
                'La fixation des prix des matières premières agricoles exportées',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le service de caisse consiste à garder les dépôts, assurer retraits et encaissements, et mettre à disposition des moyens de paiement fiables.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Sécurité & Conseil',
            stepTheme: 'violet',
            stepTitle: 'Gestion des risques, mutualisation et accompagnement stratégique',
            paragraphText:
              'Une économie moderne repose sur la confiance : les banques jouent un rôle actif d’évaluation des risques et de conseil auprès des ménages et des entreprises.\n' +
              '• **Sécurisation de l’épargne** : la banque protège les dépôts contre le vol physique et bénéficie de dispositifs de garantie et de supervision prudentielle.\n' +
              '• **Mutualisation et analyse de solvabilité** : en diversifiant ses prêts sur des milliers d’emprunteurs et de secteurs, elle réduit le risque global et surveille la capacité de remboursement.\n' +
              '• **Fonction de conseil et d’accompagnement** : montage de plans de financement, gestion de patrimoine, couverture de change (produits dérivés) et bancassurance.\n' +
              'Exemple : avant de financer une usine de transformation de cajou à Korhogo, le chargé d’affaires évalue les flux de trésorerie et propose une couverture contre le risque de change USD/FCFA.',
            konanTip:
              'Retiens les 4 piliers de l’activité bancaire : (1) Création monétaire, (2) Moyens de paiement, (3) Gestion des risques, (4) Conseil.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Comment la diversification d’un portefeuille de crédits contribue-t-elle à la fonction bancaire de gestion des risques ?',
              options: [
                'Elle supprime l’obligation de vérifier la solvabilité des emprunteurs',
                'Elle mutualise le risque de défaut sur de nombreux secteurs et emprunteurs plutôt que de tout concentrer sur un seul client',
                'Elle permet à la banque de ne plus constituer de fonds propres',
                'Elle garantit un taux d’intérêt nul sur tous les prêts accordés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En diversifiant ses crédits entre ménages, PME et secteurs variés, la banque mutualise les risques et évite qu’une défaillance isolée ne la mette en péril.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'slate',
            stepTitle: 'Distinguer banque agréée, prestataire de paiement et fintech de crédit',
            paragraphText:
              'L’écosystème financier numérique multiplie les acteurs spécialisés ; savoir appliquer les trois critères de l’article 4 permet d’éviter toute confusion juridique.\n' +
              '• **Cas A (Banque universelle)** : collecte les dépôts à vue et à terme, accorde des crédits immobiliers/PME et émet des cartes Visa → **Banque** au sens plein.\n' +
              '• **Cas B (Émetteur de monnaie électronique pur)** : gère des portefeuilles mobiles et des paiements marchands sans accorder de crédits sur dépôts → **Établissement de paiement / EME**.\n' +
              '• **Cas C (Plateforme de mise en relation P2P)** : met en contact prêteurs et emprunteurs sans recevoir les fonds au bilan → **Intermédiaire participatif**, pas une banque.\n' +
              'Exemple : si une start-up ivoirienne lance uniquement une application d’envoi d’argent sans activité de crédit, elle ne peut pas utiliser la dénomination « banque » sans partenariat bancaire ou agrément complet.',
            keyRule:
              'Une fintech qui ne collecte pas de dépôts du public ou n’accorde pas de crédits en propre n’est pas juridiquement une banque dans l’UEMOA.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Une start-up propose une application permettant d’acheter du crédit téléphonique et de payer des factures CIE/SODECI via un porte-monnaie électronique, sans accorder de prêts. Peut-elle être qualifiée de banque selon la loi UEMOA ?',
              options: [
                'Oui, dès qu’elle dépasse 10 000 téléchargements',
                'Oui, car la facturation en ligne constitue une opération de crédit',
                'Non, car elle n’effectue pas d’opérations de crédit ni de réception de dépôts bancaires classiques',
                'Oui, à condition d’avoir un site web sécurisé en HTTPS',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La qualification de banque requiert cumulativement réception de fonds du public, opérations de crédit et gestion de moyens de paiement.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_banque_ch1_p2',
        order: 2,
        title: 'Intermédiation financière et asymétries d’information (sélection adverse, aléa moral)',
        summary:
          'Finance directe vs indirecte, transformation des échéances/risques, sélection adverse ex ante, aléa moral ex post et outils de réduction.',
        conceptExplanation:
          'L’intermédiation financière met en relation les agents à capacité de financement (ACF, épargnants) et les agents à besoin de financement (ABF : entreprises, ménages, État). Contrairement à la finance directe sur les marchés financiers (émission d’actions ou d’obligations directement achetées par les investisseurs), la banque s’interpose en inscrivant les dépôts à son passif et les crédits à son actif.\n\n' +
          '1. **Triple transformation bancaire** : transformation des **échéances** (dépôts à vue courts $\\to$ crédits longs), transformation des **montants** (petits dépôts collectés $\\to$ grands projets industriels) et transformation des **risques** (l’épargnant détient une créance sûre sur la banque tandis que la banque assume le risque des emprunteurs).\n\n' +
          '2. **Asymétries d’information** : l’emprunteur connaît mieux sa solvabilité et ses intentions que le banquier.\n' +
          '• **Sélection adverse (anti-sélection, *ex ante*)** : avant la signature, si la banque fixe un taux d’intérêt trop élevé pour compenser le risque moyen, les bons emprunteurs se retirent et seuls les projets les plus risqués restent.\n' +
          '• **Aléa moral (*moral hazard*, *ex post*)** : après obtention du prêt, l’emprunteur peut détourner les fonds vers des projets plus risqués ou relâcher ses efforts, car la banque supporte une part du risque de perte.\n\n' +
          '3. **Solutions** : *credit scoring*, analyse des états financiers, garanties (hypothèques, nantissements, cautions), centrales des risques BCEAO et clauses restrictives (*covenants*).',
        formulas: [
          {
            name: 'Chaîne de l’intermédiation bancaire',
            formula: '\\text{ACF (Épargne)} \\longrightarrow \\text{Banque (Transformation)} \\longrightarrow \\text{ABF (Crédits)}',
            note: 'Finance indirecte : la banque porte le risque de contrepartie à son bilan.',
          },
        ],
        keyRule:
          'Sélection adverse = risque *ex ante* (avant signature : mauvais dossiers attirés par des taux élevés). Aléa moral = risque *ex post* (après octroi : comportement opportuniste de l’emprunteur).',
        workedExample: {
          title: 'Identifier et corriger une asymétrie d’information sur un crédit PME',
          statement:
            'Une banque observe que les entreprises les plus fiables refusent ses prêts à 16 %, tandis que des porteurs de projets très risqués acceptent ce taux. De plus, un client financé pour acheter des machines utilise l’argent pour spéculer sur des marchandises. Qualifiez ces deux phénomènes et proposez deux remèdes.',
          methodSteps: [
            'Premier phénomène (avant signature) : éviction des bons emprunteurs par un taux élevé ne laissant que les mauvais risques → **Sélection adverse** (*ex ante*).',
            'Second phénomène (après versement) : changement d’usage des fonds augmentant le risque de défaut à l’insu de la banque → **Aléa moral** (*ex post*).',
            'Remèdes : (1) pratiquer un scoring fin avec taux différenciés et consulter le Bureau d’Information sur le Crédit (BIC) ; (2) décaisser directement auprès du fournisseur des machines et exiger des sûretés réelles.',
          ],
          conclusion:
            'La combinaison du filtrage *ex ante* (scoring, BIC) et du contrôle *ex post* (décaissement ciblé, garanties) sécurise le portefeuille de crédits.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Intermédiation',
            stepTheme: 'blue',
            stepTitle: 'Finance directe (marchés) vs finance indirecte (intermédiation bancaire)',
            paragraphText:
              'Toute économie doit transférer les ressources des agents disposant d’excédents de liquidités vers ceux qui doivent investir ou consommer.\n' +
              '• **Agents à Capacité de Financement (ACF)** : ménages épargnants ou entreprises excédentaires.\n' +
              '• **Agents à Besoin de Financement (ABF)** : entreprises qui investissent, ménages qui achètent un logement, État en déficit.\n' +
              '• **Finance directe vs indirecte** : sur le marché financier (BRVM en UEMOA), l’épargnant achète directement l’action ou l’obligation d’une entreprise ; dans l’**intermédiation bancaire**, la banque collecte les dépôts des ACF puis prête à ses propres risques aux ABF.\n' +
              'Exemple : un fonctionnaire dépose 1 500 000 FCFA à la banque ; la banque utilise cette ressource pour prêter à un atelier de couture sans que le fonctionnaire ne connaisse l’atelier.',
            keyRule:
              'Dans la finance **indirecte**, l’épargnant détient une créance sur la banque, et non directement sur l’emprunteur final.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Qu’est-ce qui distingue fondamentalement l’intermédiation bancaire (finance indirecte) du marché financier (finance directe) ?',
              options: [
                'Sur le marché financier, seules les banques centrales peuvent emprunter',
                'Dans l’intermédiation bancaire, la banque collecte les dépôts et assume à son propre bilan le risque des crédits accordés',
                'L’intermédiation bancaire interdit toute rémunération des épargnants',
                'Les marchés financiers sont réservés aux paiements en espèces',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Contrairement aux marchés où prêteur et emprunteur traitent directement via des titres, la banque s’interpose en transformant les dépôts collectés en crédits portés à son bilan.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Transformation',
            stepTheme: 'violet',
            stepTitle: 'La triple transformation des échéances, des montants et des risques',
            paragraphText:
              'Les préférences des épargnants et celles des emprunteurs sont naturellement opposées ; le cœur du métier bancaire consiste à concilier ces contraires.\n' +
              '• **Transformation des échéances (maturités)** : les déposants veulent retirer leur argent à tout moment (court terme), tandis que les entreprises ont besoin de financements sur 5 à 15 ans (long terme).\n' +
              '• **Transformation des montants (tailles)** : la banque agrège des milliers de petits dépôts (ex. 50 000 FCFA) pour financer un crédit industriel de 500 millions FCFA.\n' +
              '• **Transformation des risques** : le déposant profite d’un actif liquide et quasi sans risque, pendant que la banque mutualise et gère le risque de défaut des emprunteurs.\n' +
              'Exemple : en mutualisant les dépôts de 20 000 clients, une banque sait statistiquement que seule une petite fraction est retirée chaque jour, ce qui permet d’immobiliser le reste en crédits à moyen terme.',
            konanTip:
              'Retiens la « règle des 3 T » de la transformation bancaire : transformation de **Taille** (montants), de **Terme** (échéances) et de **Tolérance au risque**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on le mécanisme par lequel une banque utilise des dépôts à vue retirables à tout moment pour financer des prêts immobiliers sur 10 ans ?',
              options: [
                'La transformation des échéances',
                'La dématérialisation fiscale',
                'La déflation monétaire',
                'Le blanchiment de capitaux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Convertir des ressources liquides à court terme (dépôts à vue) en emplois longs (crédits d’investissement ou immobiliers) s’appelle la transformation des échéances.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Asymétrie ex ante',
            stepTheme: 'orange',
            stepTitle: 'La sélection adverse (anti-sélection) avant la signature du crédit',
            paragraphText:
              'Avant de signer un contrat de prêt, l’emprunteur connaît bien mieux la solidité réelle de son projet que le conseiller bancaire : c’est une asymétrie d’information *ex ante*.\n' +
              '• **Mécanisme de Stiglitz-Weiss** : faute de pouvoir distinguer les « bons » des « mauvais » dossiers, la banque applique un taux d’intérêt moyen élevé intégrant une prime de risque.\n' +
              '• **Effet pervers** : les emprunteurs prudents aux projets rentables mais modérés trouvent le taux trop cher et renoncent au crédit, tandis que les emprunteurs très risqués (qui savent qu’ils ne rembourseront peut-être pas) acceptent n’importe quel taux.\n' +
              '• **Conséquence** : plus la banque monte son taux, plus la qualité moyenne de ses candidats au crédit se dégrade ; elle préfère alors rationner le crédit.\n' +
              'Exemple : à 18 % d’intérêt, un commerçant sérieux renonce à emprunter, mais un spéculateur prêt à tout accepte le prêt.',
            keyRule:
              'La **sélection adverse** survient **avant** la signature du contrat (*ex ante*) : le prix élevé chasse les bons clients et attire les profils les plus risqués.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Pourquoi une banque évite-t-elle souvent de monter indéfiniment son taux d’intérêt face à une forte demande de crédit, selon le phénomène de sélection adverse ?',
              options: [
                'Parce que la loi interdit tout taux d’intérêt supérieur à 1 %',
                'Parce qu’un taux trop élevé décourage les emprunteurs fiables et n’attire plus que les projets très risqués',
                'Parce que les intérêts perçus ne figurent jamais dans le PNB',
                'Parce qu’une hausse de taux supprime automatiquement les dépôts à vue',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La sélection adverse (anti-sélection) explique qu’au-delà d’un certain seuil, hausser le taux chasse les bons emprunteurs et dégrade la qualité du portefeuille.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Asymétrie ex post',
            stepTheme: 'orange',
            stepTitle: 'L’aléa moral après le déblocage des fonds',
            paragraphText:
              'Une fois le crédit versé sur le compte, le banquier ne peut pas observer en permanence chaque décision de l’emprunteur : c’est l’asymétrie d’information *ex post*.\n' +
              '• **Définition de l’aléa moral** : modification opportuniste du comportement de l’emprunteur après obtention du financement, au détriment du prêteur.\n' +
              '• **Manifestations concrètes** : détournement de l’objet du prêt (argent destiné à une machine utilisé pour des dépenses personnelles), prise de risque excessive en pariant sur un coup spéculatif, ou moindre effort de gestion.\n' +
              '• **Asymétrie des gains** : si le pari risqué réussit, l’emprunteur garde tout le surplus ; s’il échoue, la banque subit la perte du capital prêté.\n' +
              'Exemple : un gérant obtient un crédit de trésorerie pour payer ses fournisseurs et choisit finalement d’investir la somme dans un actif très volatil.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Asymétries d’information bancaires : Sélections adverse vs Aléa moral',
              caption: 'Comparaison chronologique (avant vs après contrat), nature du risque et remèdes bancaires.',
              matrix2x2: {
                topAxis: ['Risque principal', 'Outils de contrôle bancaire'],
                leftAxis: ['Ex ante (Avant octroi)', 'Ex post (Après octroi)'],
                topLeft: {
                  title: 'Sélection adverse (Anti-sélection)',
                  color: 'orange',
                  items: [
                    'Information cachée sur la qualité du dossier',
                    'Éviction des bons emprunteurs par un taux uniforme élevé',
                  ],
                },
                topRight: {
                  title: 'Filtrage & Screening',
                  color: 'blue',
                  items: [
                    'Credit scoring et analyse des bilans',
                    'Consultation Bureau d’Information sur le Crédit (BIC)',
                  ],
                },
                bottomLeft: {
                  title: 'Aléa moral (Moral hazard)',
                  color: 'violet',
                  items: [
                    'Action cachée après versement des fonds',
                    'Détournement d’objet ou prise de risque excessive',
                  ],
                },
                bottomRight: {
                  title: 'Incitations & Suivi',
                  color: 'green',
                  items: [
                    'Sûretés (hypothèque, caution) & apport personnel',
                    'Décaissement direct fournisseur & covenants',
                  ],
                },
              },
            },
            keyRule:
              'L’**aléa moral** apparaît **après** le déblocage du prêt (*ex post*) lorsque l’emprunteur prend des risques excessifs ou détourne les fonds.',
            konanTip:
              'Astuce chronologique : **S**élection adverse = **S**ignature pas encore faite (*ex ante*) ; **A**léa moral = **A**rgent déjà versé (*ex post*).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Un entrepreneur obtient un prêt pour moderniser sa boulangerie, mais utilise la moitié des fonds pour spéculer sur des marchandises sans en informer sa banque. De quel phénomène s’agit-il ?',
              options: [
                'D’un effet multiplicateur monétaire',
                'D’un aléa moral (asymétrie d’information ex post)',
                'D’une politique monétaire restrictive',
                'D’une transformation des échéances',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le détournement de l’usage des fonds après la signature et le déblocage du crédit caractérise l’aléa moral (*ex post*).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Outils de maîtrise',
            stepTheme: 'green',
            stepTitle: 'Scoring, garanties, BIC/Centrale des risques et clauses restrictives',
            paragraphText:
              'Pour prêter sans subir de pertes massives, les banques déploient un arsenal technique combinant analyse des données et incitations contractuelles.\n' +
              '• **Credit scoring & états financiers** : note statistique attribuée au demandeur selon son historique de compte, ses revenus, son endettement et sa stabilité.\n' +
              '• **Centrale des risques BCEAO & BIC** : partage interbancaire de l’endettement et des incidents de paiement d’un client pour éviter le surendettement caché.\n' +
              '• **Garanties (sûretés) et apport personnel** : hypothèque immobilière, nantissement d’équipement ou caution personnelle ; en exigeant 20 % d’apport, la banque aligne l’intérêt de l’emprunteur sur le sien.\n' +
              '• **Clauses restrictives (*covenants*) et décaissement ciblé** : régler directement la facture du fournisseur de machines plutôt que verser du cash.\n' +
              'Exemple : dans l’UEMOA, la consultation du Bureau d’Information sur le Crédit (BIC) permet à une banque de repérer immédiatement si un demandeur cumule déjà trois crédits impayés ailleurs.',
            keyRule:
              'Exiger un **apport personnel** et des **garanties** responsabilise l’emprunteur et réduit simultanément la sélection adverse et l’aléa moral.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quel outil partagé entre établissements de crédit de l’UEMOA permet à une banque de vérifier l’endettement total et les incidents passés d’un demandeur avant d’accorder un prêt ?',
              options: [
                'La lettre de change du Moyen Âge',
                'Le Bureau d’Information sur le Crédit (BIC) / Centrale des risques',
                'Le coefficient d’exploitation',
                'Le guichet automatique de billets (GAB)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Bureau d’Information sur le Crédit (BIC) et la Centrale des risques centralisent les engagements et historiques de paiement pour réduire la sélection adverse.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Diagnostic',
            stepTheme: 'slate',
            stepTitle: 'Cas pratique : sécuriser le financement d’une PME agro-industrielle',
            paragraphText:
              'Appliquons l’analyse des asymétries d’information au dossier réel d’une PME souhaitant acheter une décortiqueuse de riz de 40 millions FCFA.\n' +
              '• **Risque ex ante** : la PME pourrait masquer des dettes fiscales ou surestimer ses ventes passées → la banque exige 3 bilans certifiés et interroge le BIC.\n' +
              '• **Risque ex post** : une fois les 40 millions versés, le dirigeant pourrait financer autre chose → la banque impose un apport de 20 % (8 millions), prête 32 millions en réglant directement le fournisseur de la machine, et prend un nantissement sur l’équipement.\n' +
              '• **Suivi continu** : domiciliation du chiffre d’affaires sur le compte de la banque pour observer les flux mensuels.\n' +
              'Exemple : la domiciliation des recettes permet à la banque de détecter dès le 2e mois toute baisse anormale d’activité.',
            konanTip:
              'En examen, face à un cas d’octroi de crédit PME, associe toujours une mesure **avant** déblocage (BILAN + BIC) et une mesure **après** (décaissement fournisseur + domiciliation des flux).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Pourquoi une banque choisit-elle de verser le montant d’un crédit d’équipement directement sur le compte du fournisseur de la machine plutôt que sur le compte courant de l’emprunteur ?',
              options: [
                'Pour augmenter artificiellement le taux de réserves obligatoires',
                'Pour neutraliser l’aléa moral en garantissant que les fonds servent exactement à l’investissement prévu',
                'Pour éviter de payer des impôts sur le PNB',
                'Pour transformer le crédit d’investissement en découvert bancaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le décaissement direct au fournisseur empêche tout détournement des fonds après l’accord de prêt (lutte contre l’aléa moral).',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_banque_ch1_p3',
        order: 3,
        title: 'Architecture du système bancaire : BCEAO, banques commerciales, développement et SFD',
        summary:
          'Rôles de la Banque Centrale (BCEAO), banques commerciales, banques d’investissement, banques de développement (BOAD, BNI), SFD/microfinance et néobanques.',
        conceptExplanation:
          'Le système financier de la zone UEMOA est hiérarchisé autour d’une autorité monétaire supranationale et d’acteurs spécialisés répondant à des besoins complémentaires.\n\n' +
          '1. **La Banque Centrale (BCEAO)** : banque des banques pour les 8 pays de l’UEMOA. Elle détient le monopole d’émission du franc CFA (XOF), conduit la politique monétaire (stabilité des prix, taux directeur, réserves obligatoires), assure le refinancement des banques (prêteur en dernier ressort) et veille à la stabilité financière avec la **Commission Bancaire de l’UMOA**.\n\n' +
          '2. **Les banques commerciales (universelles / de détail)** : collectent les dépôts des ménages/entreprises et distribuent des crédits (ex. Société Générale Côte d’Ivoire, NSIA Banque, Ecobank).\n\n' +
          '3. **Les banques d’investissement (ou d’affaires) et banques de développement** : les banques d’investissement accompagnent les grandes entreprises sur les marchés financiers (fusions-acquisitions, émissions obligataires) ; les banques de développement (ex. **BOAD**, **BAD**, **BNI** en Côte d’Ivoire) financent les infrastructures publiques, l’agriculture et les projets structurants à long terme.\n\n' +
          '4. **Les Systèmes Financiers Décentralisés (SFD / Microfinance)** : institutions de proximité accordant microcrédits et petite épargne aux populations exclues du circuit bancaire classique (secteur informel, coopératives).\n\n' +
          '5. **Néobanques et Fintechs** (ex. Djamo) : offres 100 % mobiles ergonomiques, souvent adossées à une banque partenaire agréée.',
        formulas: [
          {
            name: 'Hiérarchie du système financier UEMOA',
            formula: '\\text{BCEAO + Commission Bancaire} \\longrightarrow \\text{Banques (Commerciales / Dev.)} \\longrightarrow \\text{SFD \\& Étab. Paiement}',
            note: 'La BCEAO supervise la monnaie et le refinancement ; la Commission Bancaire contrôle la solidité.',
          },
        ],
        keyRule:
          'Ne confonds pas banque centrale (BCEAO : émission monétaire et politique monétaire), banque commerciale (dépôts/crédits au public), banque de développement (BOAD/BNI : infrastructures long terme) et SFD (microfinance de proximité).',
        workedExample: {
          title: 'Classifier cinq institutions financières opérant en Côte d’Ivoire',
          statement:
            'Classez dans la bonne catégorie et justifiez : (1) BCEAO, (2) Société Générale Côte d’Ivoire (SGCI), (3) BNI (Banque Nationale d’Investissement), (4) BOAD, (5) Djamo.',
          methodSteps: [
            'BCEAO → **Banque Centrale** : émet le franc CFA, fixe le taux directeur et régule la liquidité de l’UEMOA.',
            'SGCI → **Banque commerciale** : collecte les dépôts du public et finance ménages et entreprises.',
            'BNI → **Banque d’investissement / publique de développement** : finance les grands projets publics et l’économie nationale.',
            'BOAD → **Banque régionale de développement** : institution spécialisée de l’UEMOA finançant infrastructures et intégration régionale.',
            'Djamo → **Néobanque / Fintech** : application mobile offrant carte et services bancaires numériques sans agences physiques (adossée à un partenaire bancaire).',
          ],
          conclusion:
            'Chaque catégorie remplit un rôle précis et complémentaire dans le financement de l’économie ivoirienne.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Banque Centrale',
            stepTheme: 'blue',
            stepTitle: 'La BCEAO : émission monétaire, politique monétaire et prêteur en dernier ressort',
            paragraphText:
              'Au sommet de la pyramide financière de l’UEMOA siège la **Banque Centrale des États de l’Afrique de l’Ouest (BCEAO)**, institution commune aux huit États membres.\n' +
              '• **Monopole d’émission** : elle seule émet la monnaie légale (billets et pièces en franc CFA / XOF) et gère les réserves de change communes.\n' +
              '• **Politique monétaire** : elle pilote la liquidité et lutte contre l’inflation via ses **taux directeurs** et le taux de **réserves obligatoires** imposé aux banques.\n' +
              '• **Banque des banques et prêteur en dernier ressort** : elle gère les comptes de règlement des banques commerciales et les refinance en cas de tension de liquidité.\n' +
              'Exemple : si une banque commerciale manque temporairement de liquidités en fin de journée, elle peut obtenir un refinancement au guichet de la BCEAO contre des titres publics en garantie.',
            keyRule:
              'La BCEAO ne reçoit pas les dépôts des particuliers : c’est la « banque des banques » chargée de la stabilité monétaire et financière de l’UEMOA.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle mission relève exclusivement de la Banque Centrale (BCEAO) et non des banques commerciales ?',
              options: [
                'Ouvrir des comptes chèques pour les étudiants et commerçants',
                'Accorder des découverts aux PME locales',
                'Détenir le monopole d’émission de la monnaie fiduciaire et fixer les taux directeurs',
                'Commercialiser des cartes de débit Visa',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La BCEAO détient le monopole d’émission du franc CFA, conduit la politique monétaire (taux directeurs, réserves obligatoires) et agit comme banque des banques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Banques commerciales vs d’affaires',
            stepTheme: 'blue',
            stepTitle: 'Banques commerciales (de détail) vs banques d’investissement',
            paragraphText:
              'La majorité des opérations financières quotidiennes transitent par les banques commerciales, tandis que les opérations de marché complexes relèvent des banques d’investissement.\n' +
              '• **Banques commerciales (ou de détail)** : reçoivent les dépôts des particuliers, artisans et entreprises, gèrent les paiements courants et octroient des crédits à la consommation, immobiliers ou de trésorerie (ex. SGCI, Ecobank, Coris Bank).\n' +
              '• **Banques d’investissement (d’affaires)** : ne collectent généralement pas de dépôts de détail ; elles conseillent les grands groupes et États sur les fusions-acquisitions, introductions en bourse (BRVM), levées obligataires et financements structurés.\n' +
              '• **Banques universelles** : grands groupes regroupant les deux métiers dans des filiales ou pôles séparés.\n' +
              'Exemple : une PME empruntant 25 millions FCFA pour son stock s’adresse à une banque commerciale ; un État levant 150 milliards d’euro-obligations mandate des banques d’investissement.',
            konanTip:
              'Astuce d’examen : « Dépôts de ménages + crédits courants » = **banque commerciale** ; « Levées de capitaux / fusions / marchés » = **banque d’investissement**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Une grande entreprise souhaite réaliser une augmentation de capital en bourse et acquérir un concurrent régional. Quel type d’établissement l’accompagne prioritairement ?',
              options: [
                'Un Système Financier Décentralisé (SFD) de quartier',
                'Une banque d’investissement (ou banque d’affaires)',
                'Un guichet automatique de billets',
                'Une caisse d’épargne scolaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les banques d’investissement conseillent les grandes entreprises et États pour les fusions-acquisitions, introductions en bourse et émissions de titres.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Développement',
            stepTheme: 'violet',
            stepTitle: 'Les banques de développement : BOAD, BAD et BNI',
            paragraphText:
              'Certains projets indispensables au développement (routes, barrages, énergie, agriculture) ont une rentabilité trop lointaine pour les banques commerciales privées.\n' +
              '• **Mission des banques de développement** : institutions publiques ou multilatérales finançant à long terme et à taux concessionnels les infrastructures et secteurs stratégiques.\n' +
              '• **Exemples clés en Afrique de l’Ouest** : la **BOAD** (Banque Ouest-Africaine de Développement, institution spécialisée de l’UEMOA), la **BAD** (Banque Africaine de Développement, basée à Abidjan) et la **BNI** (Banque Nationale d’Investissement en Côte d’Ivoire).\n' +
              '• **Effet catalyseur** : leurs financements rassurent les banques privées et attirent des co-investisseurs.\n' +
              'Exemple : la BOAD accorde un prêt sur 20 ans pour construire une centrale solaire ou réhabiliter un corridor routier régional.',
            keyRule:
              'La **BOAD** (échelle UEMOA) et la **BAD** (échelle continentale) financent les infrastructures et projets structurants à long terme ; la **BNI** joue un rôle clé de banque d’investissement et de développement en Côte d’Ivoire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle est la vocation principale d’une banque de développement telle que la BOAD ou la BAD ?',
              options: [
                'Gérer les découverts à court terme des cartes bancaires étudiantes',
                'Financer à long terme les infrastructures et projets structurants stratégiques pour la croissance',
                'Remplacer la BCEAO pour l’impression des billets de banque',
                'Spéculer à très court terme sur les cryptomonnaies',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les banques de développement (BOAD, BAD) apportent des financements longs et concessionnels aux projets d’infrastructure, d’énergie, d’agriculture et d’intégration économique.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Microfinance',
            stepTheme: 'blue',
            stepTitle: 'Les Systèmes Financiers Décentralisés (SFD) et l’inclusion de proximité',
            paragraphText:
              'Dans les économies en développement, une large part de la population active évolue dans le secteur informel sans fiches de paie ni garanties immobilières.\n' +
              '• **Définition des SFD** : institutions de microfinance (coopératives d’épargne et de crédit, mutuelles, sociétés de microfinance) agréées sous une loi spécifique UEMOA pour offrir des services financiers de proximité.\n' +
              '• **Public cible** : commerçantes des marchés, artisans, petits exploitants agricoles et micro-entreprises souvent exclus des banques classiques.\n' +
              '• **Mécanismes adaptés** : microcrédits de faibles montants, remboursements hebdomadaires ou mensuels souples, caution solidaire de groupe.\n' +
              'Exemple : une coopérative de femmes transformatrices de manioc obtient un microcrédit solidaire de 1 200 000 FCFA auprès d’un SFD sans hypothèque foncière.',
            keyRule:
              'Les **SFD** complètent le secteur bancaire en offrant micro-épargne et microcrédits de proximité au secteur informel et rural.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Quel avantage majeur les Systèmes Financiers Décentralisés (SFD) apportent-ils par rapport aux banques commerciales traditionnelles ?',
              options: [
                'L’émission de monnaie fiduciaire nationale',
                'Un accès de proximité au microcrédit et à la micro-épargne pour les travailleurs informels et ruraux sans garanties classiques',
                'L’exemption totale de tout contrôle réglementaire dans l’UEMOA',
                'La cotation directe des PME sur les marchés internationaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les SFD adaptent montants, garanties (caution solidaire) et proximité géographique pour inclure les populations non bancarisées.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Architecture globale',
            stepTheme: 'violet',
            stepTitle: 'Néobanques, Fintechs et vue pyramidale du système financier UEMOA',
            paragraphText:
              'La vague numérique a introduit de nouveaux acteurs agiles qui s’insèrent dans l’architecture régulée sans remplacer la banque centrale ni la supervision.\n' +
              '• **Néobanques et Fintechs (ex. Djamo)** : proposent une ouverture de compte en quelques minutes via smartphone, des cartes virtuelles/physiques, des frais transparents et des coffres d’épargne automatisés, souvent en partenariat avec une banque agréée qui héberge les fonds.\n' +
              '• **Architecture à 3 niveaux** : au sommet, la **BCEAO** et la **Commission Bancaire** assurent stabilité monétaire et supervision ; au niveau intermédiaire, les **banques commerciales, d’investissement et de développement** financent ménages, entreprises et États ; à la base de proximité, les **SFD** et **établissements de paiement / Mobile Money** assurent l’inclusion financière de masse.\n' +
              'Exemple : un jeune salarié ivoirien peut combiner un compte bancaire classique pour son prêt immobilier et une néobanque comme Djamo pour ses paiements internationaux en ligne.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture à 3 étages du système financier de l’UEMOA',
              caption: 'De l’autorité monétaire et prudentielle supranationale jusqu’aux acteurs de proximité numérique.',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  {
                    badge: 'Niveau 1 — Régulation',
                    title: 'BCEAO & Commission Bancaire UMOA',
                    subtitle: 'Émission du FCFA, taux directeurs, réserves obligatoires et supervision',
                    color: 'violet',
                  },
                  {
                    badge: 'Niveau 2 — Intermédiation',
                    title: 'Banques commerciales, d’investissement & de développement',
                    subtitle: 'Dépôts, crédits PME/ménages, marchés (SGCI, BNI, BOAD)',
                    color: 'blue',
                  },
                  {
                    badge: 'Niveau 3 — Proximité & Digital',
                    title: 'SFD (Microfinance), Néobanques & Mobile Money',
                    subtitle: 'Inclusion financière, microcrédits et paiements mobiles (Djamo, EME)',
                    color: 'green',
                  },
                ],
              },
            },
            konanTip:
              'Retiens que dans l’UEMOA, même une néobanque innovante reste soumise indirectement ou directement aux règles de la BCEAO et de la Commission Bancaire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Comment une néobanque telle que Djamo fonctionne-t-elle généralement vis-à-vis de l’architecture réglementaire bancaire classique ?',
              options: [
                'Elle imprime ses propres billets sans autorisation de la BCEAO',
                'Elle offre une interface 100 % mobile et des cartes en s’appuyant sur un partenariat avec une banque agréée ou une licence dédiée',
                'Elle ne traite que les prêts d’infrastructures routières sur 25 ans',
                'Elle interdit toute opération de paiement en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les néobanques misent sur une expérience mobile fluide et s’adossent fréquemment à une banque agréée partenaire pour héberger les fonds et respecter la régulation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'slate',
            stepTitle: 'Cas pratique : associer chaque besoin économique à la bonne institution',
            paragraphText:
              'Un diagnostic institutionnel rigoureux permet d’orienter chaque acteur économique vers le bon guichet de financement.\n' +
              '• **Augmenter le taux directeur pour freiner l’inflation** → **BCEAO** (Banque Centrale).\n' +
              '• **Financer un pont autoroutier régional entre deux États UEMOA** → **BOAD** (Banque de développement).\n' +
              '• **Obtenir un crédit de trésorerie pour une PME formelle et payer ses salariés** → **SGCI** (Banque commerciale).\n' +
              '• **Accorder 150 000 FCFA à une vendeuse de vivriers sans fiche de paie** → **SFD** (Institution de microfinance).\n' +
              'Exemple : orienter une vendeuse du marché d’Adjamé vers un SFD évite le rejet automatique qu’elle subirait dans une banque d’investissement.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Parmi ces associations institution / rôle en Côte d’Ivoire et en zone UEMOA, laquelle est parfaitement exacte ?',
              options: [
                'BCEAO = banque commerciale de détail ; BOAD = néobanque mobile',
                'BNI = Banque Nationale d’Investissement ; BOAD = banque régionale de développement ; BCEAO = banque centrale',
                'SGCI = institution de microfinance rurale ; Djamo = banque centrale',
                'BOAD = autorité de contrôle disciplinaire des cartes bancaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La BCEAO est la banque centrale, la BOAD est la banque régionale de développement, la BNI est la Banque Nationale d’Investissement, la SGCI est une banque commerciale et Djamo une néobanque.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : OPÉRATIONS BANCAIRES, MATHÉMATIQUES FINANCIÈRES ET PERFORMANCE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch2',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Banque',
    title: 'Chapitre 2 — Opérations bancaires, calcul financier et performance (PNB, ROA, ROE)',
    summary:
      'Collecte de dépôts (à vue/à terme), crédits court/moyen/long terme, intérêts simples/composés, TAEG, échéancier d’emprunt, taux et marge d’intermédiation, PNB, ROA, ROE, coefficient d’exploitation et NPL.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p1',
        order: 1,
        title: 'Collecte de dépôts, moyens de paiement et typologie des crédits bancaires',
        summary:
          'Dépôts à vue vs dépôts à terme, instruments de paiement, crédits à court terme (exploitation) vs moyen/long terme (investissement/immobilier).',
        conceptExplanation:
          'Les opérations de clientèle d’une banque commerciale s’organisent autour de la collecte de ressources (dépôts), de la gestion des règlements et de la distribution de financements adaptés à chaque horizon.\n\n' +
          '1. **Collecte des dépôts** :\n' +
          '• **Dépôts à vue (comptes courants / chèques)** : fonds disponibles immédiatement à tout moment via guichet, chèque, carte ou virement ; généralement non rémunérés.\n' +
          '• **Dépôts à terme (DAT) et comptes d’épargne** : fonds immobilisés ou épargnés sur une durée convenue (3 mois, 1 an, etc.) contre versement d’un intérêt créditeur.\n\n' +
          '2. **Typologie des crédits** :\n' +
          '• **Crédits à court terme ($\\le 2$ ans) — Crédits d’exploitation** : financent le cycle courant d’exploitation (stocks, salaires, créances clients) via facilité de caisse, découvert bancaire, escompte de traites ou crédit de campagne.\n' +
          '• **Crédits à moyen terme ($2$ à $7$ ans) et long terme ($> 7$ ans) — Crédits d’investissement & immobiliers** : financent l’acquisition d’actifs durables (machines, véhicules, usines, logements) ou le crédit-bail (*leasing*).',
        formulas: [
          {
            name: 'Adéquation durée du crédit / nature du besoin',
            formula: '\\text{Actif circulant (stocks)} \\leftrightarrow \\text{Crédit CT} \\quad ; \\quad \\text{Immobilisations} \\leftrightarrow \\text{Crédit MLT}',
            note: 'Règle d’équilibre financier : un investissement durable se finance à moyen ou long terme.',
          },
        ],
        keyRule:
          'Un crédit finançant des stocks ou des salaires est un **crédit d’exploitation (court terme)** ; un crédit finançant des machines, bâtiments ou véhicules durables est un **crédit d’investissement (moyen/long terme)**.',
        workedExample: {
          title: 'Analyser un crédit d’exploitation pour un commerçant',
          statement:
            'Un commerçant sollicite un prêt de 10 000 000 FCFA sur 2 ans au taux annuel simple de 6 % pour renouveler son stock de marchandises, avec remboursement annuel de la moitié du capital et des intérêts. Calculez les intérêts annuels, le montant total remboursé et justifiez sa nature.',
          methodSteps: [
            'Sur un crédit à taux simple sur le capital initial de 10 000 000 FCFA à 6 % : Intérêt annuel = 10 000 000 × 6 % = 600 000 FCFA/an.',
            'Sur 2 ans : Intérêts totaux = 600 000 × 2 = 1 200 000 FCFA (ou en capital restant dû dégressif : 600 000 FCFA l’an 1 + 300 000 FCFA l’an 2 = 900 000 FCFA).',
            'Montant total remboursé (intérêt constant sur nominal) = 10 000 000 + 1 200 000 = 11 200 000 FCFA.',
            'Nature : comme il finance des stocks (actif circulant renouvelé dans le cycle commercial) sur courte durée, c’est un **crédit d’exploitation** et non un crédit d’investissement.',
          ],
          conclusion:
            'Intérêts annuels : 600 000 FCFA ; total remboursé : 11 200 000 FCFA ; nature : crédit d’exploitation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Ressources clients',
            stepTheme: 'blue',
            stepTitle: 'Dépôts à vue (comptes courants) vs Dépôts à terme et livrets d’épargne',
            paragraphText:
              'La ressource première d’une banque commerciale provient des fonds confiés par sa clientèle, qui se distinguent selon leur degré de disponibilité et de rémunération.\n' +
              '• **Dépôts à vue (DAV)** : logés sur un compte courant, ils sont retirables sans préavis à tout instant par chèque, carte ou virement ; cette liquidité totale explique qu’ils soient rarement rémunérés.\n' +
              '• **Comptes d’épargne (livrets)** : offrent une rémunération réglementée (ex. 3,5 % minimum dans l’UEMOA sur les livrets jusqu’à un plafond) avec une disponibilité souple.\n' +
              '• **Dépôts à terme (DAT)** : sommes bloquées pour une durée contractuelle (6 mois, 1 an, 2 ans) offrant à la banque une ressource stable et au client un taux négocié plus élevé.\n' +
              'Exemple : une entreprise place 50 millions FCFA de trésorerie excédentaire sur un DAT à 12 mois rémunéré à 4,5 % plutôt que de les laisser dormir sur un compte courant à 0 %.',
            keyRule:
              'Plus un dépôt est **bloqué dans le temps** (DAT), plus la banque dispose de visibilité et offre une **rémunération élevée**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle caractéristique distingue principalement un Dépôt à Terme (DAT) d’un Dépôt à Vue (compte courant) ?',
              options: [
                'Le DAT permet d’émettre des chèques à tout moment sans pénalité',
                'Le DAT bloque les fonds pendant une durée convenue en échange d’une rémunération plus élevée',
                'Le dépôt à vue est interdit aux particuliers salariés',
                'Le DAT ne figure jamais au passif du bilan de la banque',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Contrairement au dépôt à vue immédiatement disponible, le DAT immobilise les fonds sur une durée définie et génère des intérêts créditeurs pour le client.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Moyens de paiement',
            stepTheme: 'blue',
            stepTitle: 'Panorama des instruments de paiement scripturaux et électroniques',
            paragraphText:
              'La circulation de la monnaie scripturale repose sur des supports normalisés permettant de débiter le compte du payeur et de créditer celui du bénéficiaire.\n' +
              '• **Chèque et effets de commerce** : ordre écrit donné à la banque de payer une somme ; tend à être supplanté par les solutions digitales en raison des délais et risques d’impayés.\n' +
              '• **Virement et prélèvement** : transfert de compte à compte initié par le débiteur (virement de salaire) ou autorisé par mandat au profit du créancier (prélèvement d’abonnement).\n' +
              '• **Carte bancaire** : carte de débit immédiat/différé ou carte de crédit adossée à une réserve, utilisable sur Terminal de Paiement Électronique (TPE), GAB/DAB et e-commerce.\n' +
              'Exemple : une facture fournisseur réglée par virement RTGS/SICA dans l’UEMOA évite les risques de chèque sans provision.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle différence existe-t-il entre un virement bancaire et un prélèvement automatique ?',
              options: [
                'Le virement est initié par le payeur (débiteur), tandis que le prélèvement est initié par le créancier sur autorisation préalable',
                'Le virement se fait toujours en billets et le prélèvement toujours par chèque',
                'Le prélèvement est réservé aux banques centrales',
                'Il n’existe aucune différence technique entre les deux',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans le virement, le titulaire du compte donne l’ordre de payer ; dans le prélèvement, il signe un mandat autorisant un fournisseur (électricité, télécom) à initier le débit.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Crédits CT',
            stepTheme: 'blue',
            stepTitle: 'Crédits à court terme : découvert, facilité de caisse, escompte et stocks',
            paragraphText:
              'Les besoins de trésorerie liés au décalage entre paiements fournisseurs et encaissements clients sont couverts par les crédits à court terme (généralement inférieurs à 2 ans).\n' +
              '• **Facilité de caisse et découvert bancaire** : autorisations permettant au compte de devenir temporairement débiteur (quelques jours pour la facilité de caisse, plusieurs semaines pour le découvert).\n' +
              '• **Escompte commercial** : la banque avance à l’entreprise le montant d’une facture à échoir (traite/effet de commerce) avant son échéance, moyennant agios.\n' +
              '• **Crédit d’exploitation / de campagne** : financement ponctuel des achats de stocks ou d’une campagne agricole (cacao, anacarde).\n' +
              'Exemple : une coopérative de cacao obtient un crédit de campagne sur 6 mois pour payer les planteurs avant de vendre sa récolte à l’exportateur.',
            konanTip:
              'Retiens la nuance : **facilité de caisse** = quelques jours en fin de mois ; **découvert** = plusieurs semaines ou mois de besoin saisonnier.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Comment s’appelle l’opération par laquelle une banque avance à une entreprise le montant d’une créance client matérialisée par une traite avant sa date d’échéance ?',
              options: [
                'Le crédit immobilier amortissable',
                'L’escompte commercial',
                'Le dépôt à terme',
                'La réserve obligatoire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’escompte commercial permet à l’entreprise de mobiliser immédiatement sa créance à terme contre remise de l’effet à la banque moyennant agios.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Crédits MLT',
            stepTheme: 'blue',
            stepTitle: 'Crédits à moyen et long terme : investissement, immobilier et crédit-bail',
            paragraphText:
              'Pour financer des biens durables qui produisent des revenus sur plusieurs années, la durée du prêt doit correspondre à la durée d’amortissement du bien.\n' +
              '• **Crédit à moyen terme ($2$ à $7$ ans)** : finance l’outillage industriel, les véhicules utilitaires, le matériel informatique ou l’aménagement de locaux.\n' +
              '• **Crédit à long terme ($> 7$ ans, souvent $10$ à $20$ ans)** : finance l’acquisition immobilière des ménages, la construction d’usines ou les grands équipements.\n' +
              '• **Crédit-bail (*leasing*)** : la banque (ou société de leasing) achète le matériel et le loue à l’entreprise avec une option d’achat à prix résiduel en fin de contrat.\n' +
              'Exemple : une société de transport abidjanaise finance 5 camions neufs via un crédit-bail sur 5 ans sans immobiliser toute sa trésorerie au départ.',
            keyRule:
              'Dans un **crédit-bail (leasing)**, la banque reste propriétaire juridique du bien pendant toute la location jusqu’à la levée de l’option d’achat.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle particularité caractérise le crédit-bail (leasing) par rapport à un crédit bancaire classique d’équipement ?',
              options: [
                'L’emprunteur devient propriétaire dès le premier jour sans rien payer',
                'L’établissement financier reste propriétaire du bien et le loue à l’entreprise avec une option d’achat en fin de bail',
                'Le crédit-bail sert exclusivement à payer les salaires mensuels',
                'Il n’y a jamais de loyer périodique à verser',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En crédit-bail, le bailleur achète l’équipement, en conserve la propriété juridique (garantie forte) et le loue avec option d’achat finale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Distinguer crédit d’exploitation et crédit d’investissement',
            paragraphText:
              'En finance d’entreprise et en examen bancaire, qualifier un prêt d’après le seul montant est une erreur fréquente : c’est la **destination économique** des fonds qui tranche.\n' +
              '• **Crédit d’exploitation** : finance le cycle court d’exploitation (achat de marchandises destinées à être revendues rapidement, matières premières, salaires, besoin en fonds de roulement).\n' +
              '• **Crédit d’investissement** : finance une immobilisation durable conservée plus d’un an dans l’entreprise (machine, entrepôt, terrain, serveur).\n' +
              '• **Conséquence financière** : financer un stock avec un crédit sur 10 ans ou acheter une usine à découvert fragilise gravement l’équilibre financier.\n' +
              'Exemple : un prêt de 10 millions FCFA sur 2 ans pour acheter du riz destiné à la revente en boutique est un **crédit d’exploitation**, même s’il dure 24 mois.',
            keyRule:
              'Critère absolu : **Stocks / cycle courant** = Crédit d’exploitation ; **Immobilisation durable** = Crédit d’investissement.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Un commerçant emprunte 10 millions FCFA sur 2 ans à 6 % pour acheter des stocks de marchandises destinées à la revente. Pourquoi s’agit-il d’un crédit d’exploitation et non d’investissement ?',
              options: [
                'Parce que le taux de 6 % est inférieur à 10 %',
                'Parce que les fonds financent le cycle courant (des stocks rapidement revendus) et non une immobilisation durable',
                'Parce que tout prêt supérieur à 5 millions FCFA est un crédit d’exploitation',
                'Parce qu’il est accordé par une banque centrale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La distinction repose sur l’objet financé : les stocks relèvent du cycle d’exploitation courant (actif circulant), contrairement aux machines ou locaux (immobilisations).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Calcul de crédit',
            stepTheme: 'slate',
            stepTitle: 'Application chiffrée : calcul des intérêts et du remboursement total',
            paragraphText:
              'Un commerçant sollicite un crédit d’exploitation de $C_0 = 10\\,000\\,000\\text{ FCFA}$ sur $n = 2\\text{ ans}$ au taux d’intérêt annuel fixe de $i = 6\\,\\%$.\n' +
              '• **Calcul de l’intérêt annuel (base capital initial)** : $I_{\\text{an}} = C_0 \\times i = 10\\,000\\,000 \\times 0{,}06 = 600\\,000\\text{ FCFA}$.\n' +
              '• **Intérêts cumulés sur 2 ans** : $I_{\\text{total}} = 600\\,000 \\times 2 = 1\\,200\\,000\\text{ FCFA}$.\n' +
              '• **Montant total remboursé** : $\\text{Total} = \\text{Capital} + I_{\\text{total}} = 10\\,000\\,000 + 1\\,200\\,000 = 11\\,200\\,000\\text{ FCFA}$.\n' +
              '• **Remarque actuarielle** : si la moitié du capital ($5\\,000\\,000\\text{ FCFA}$) est remboursée dès la fin de l’année 1, l’intérêt de l’année 2 calculé sur le capital restant dû tombe à $5\\,000\\,000 \\times 6\\,\\% = 300\\,000\\text{ FCFA}$ (total = $10\\,900\\,000\\text{ FCFA}$).',
            formula: {
              name: 'Coût total d’un crédit à taux fixe',
              formula: 'I_{\\text{total}} = \\sum_{t=1}^{n} \\text{CRD}_t \\times i \\quad ; \\quad \\text{Total remboursé} = C_0 + I_{\\text{total}}',
              note: 'À taux simple constant sur le nominal : I_an = C_0 × i.',
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Pour un crédit d’exploitation de 10 000 000 FCFA sur 2 ans à 6 % l’an (intérêts annuels constants sur le nominal), quel est le montant des intérêts annuels et le montant total remboursé au bout des 2 ans ?',
              options: [
                'Intérêts annuels = 300 000 FCFA ; Total remboursé = 10 600 000 FCFA',
                'Intérêts annuels = 600 000 FCFA ; Total remboursé = 11 200 000 FCFA',
                'Intérêts annuels = 1 200 000 FCFA ; Total remboursé = 12 400 000 FCFA',
                'Intérêts annuels = 60 000 FCFA ; Total remboursé = 10 120 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Intérêt annuel = 10 000 000 × 6 % = 600 000 FCFA. Sur 2 ans : 1 200 000 FCFA d’intérêts + 10 000 000 FCFA de capital = 11 200 000 FCFA.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p2',
        order: 2,
        title: 'Calcul financier bancaire : intérêts simples, composés, TAEG et échéancier',
        summary:
          'Intérêts simples (base 360 jours), intérêts composés, distinction Taux nominal vs TAEG, annuité constante, amortissement constant et tableau d’amortissement.',
        conceptExplanation:
          'Toute opération bancaire de placement ou de crédit repose sur la valeur temporelle de l’argent : un franc aujourd’hui vaut plus qu’un franc demain.\n\n' +
          '1. **Intérêts simples (court terme $\\le 1$ an)** : calculés uniquement sur le capital initial $C_0$, avec l’année commerciale bancaire de **360 jours** : $I = C_0 \\times i \\times \\frac{j}{360}$.\n\n' +
          '2. **Intérêts composés (moyen et long terme)** : à chaque période, les intérêts acquis s’ajoutent au capital pour produire eux-mêmes des intérêts : $C_n = C_0 (1 + i)^n$.\n\n' +
          '3. **Taux nominal vs TAEG (Taux Annuel Effectif Global)** : le taux nominal ne mesure que l’intérêt pur ; le **TAEG** intègre obligatoirement tous les coûts liés à l’octroi du crédit (intérêts, frais de dossier, commissions, assurance emprunteur obligatoire) afin de permettre au client de comparer fidèlement deux offres.\n\n' +
          '4. **Échéancier d’emprunt** :\n' +
          '• **Annuités constantes** : chaque mensualité ou annuité $A = C_0 \\cdot \\frac{i}{1 - (1+i)^{-n}}$ est identique ; la part d’intérêts diminue au fil du temps tandis que la part d’amortissement du capital augmente.\n' +
          '• **Amortissements constants** : le capital remboursé chaque période vaut $\\frac{C_0}{n}$ fixe, donc les intérêts et l’annuité totale décroissent d’une période à l’autre.',
        formulas: [
          {
            name: 'Intérêts simples (base 360 jours)',
            formula: 'I = C_0 \\times i \\times \\frac{j}{360}',
            note: 'Utilisé pour les découverts, escomptes et placements à court terme (< 1 an).',
          },
          {
            name: 'Intérêts composés',
            formula: 'C_n = C_0 (1 + i)^n',
            note: 'Capitalisation des intérêts à chaque période.',
          },
          {
            name: 'Annuité constante d’emprunt',
            formula: 'A = C_0 \\times \\frac{i}{1 - (1 + i)^{-n}}',
            note: 'Où C_0 est le capital emprunté, i le taux périodique et n le nombre d’échéances.',
          },
        ],
        keyRule:
          'En banque commerciale, le court terme utilise les **intérêts simples** sur **360 jours**, le moyen/long terme utilise les **intérêts composés**, et le coût réel d’un prêt se compare toujours via le **TAEG**.',
        workedExample: {
          title: 'Établir la première ligne et l’échéancier d’un emprunt amortissable',
          statement:
            'Une entreprise emprunte 10 000 000 FCFA sur 4 ans au taux annuel de 8 %. Comparez la 1re année et la charge totale d’intérêts entre amortissement constant et annuité constante.',
          methodSteps: [
            'En amortissement constant : capital amorti chaque année = 10 000 000 / 4 = 2 500 000 FCFA. Année 1 : intérêt = 10 000 000 × 8 % = 800 000 FCFA, annuité = 3 300 000 FCFA. Total intérêts sur 4 ans = 800k + 600k + 400k + 200k = 2 000 000 FCFA.',
            'En annuité constante : A = 10 000 000 × 0,08 / (1 − 1,08⁻⁴) ≈ 3 019 208 FCFA/an. Année 1 : intérêt = 800 000 FCFA, amortissement = 2 219 208 FCFA.',
            'Total remboursé en annuité constante = 4 × 3 019 208 = 12 076 832 FCFA, soit 2 076 832 FCFA d’intérêts.',
          ],
          conclusion:
            'L’amortissement constant coûte moins cher en intérêts totaux (2 000 000 vs 2 076 832 FCFA) car le capital est remboursé plus vite au début.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Court terme',
            stepTheme: 'violet',
            stepTitle: 'Intérêts simples et convention bancaire de l’année à 360 jours',
            paragraphText:
              'Pour les crédits de trésorerie, découverts et escomptes de moins d’un an, les intérêts ne sont pas capitalisés : ils restent proportionnels à la durée exacte en jours.\n' +
              '• **Formule** : $I = C_0 \\times i \\times \\frac{j}{360}$, où $C_0$ est le capital, $i$ le taux annuel décimal et $j$ le nombre de jours.\n' +
              '• **Base 360 jours** : l’usage bancaire retient l’année commerciale de 360 jours (12 mois de 30 jours), ce qui renchérit légèrement le coût par rapport à 365 jours.\n' +
              '• **Valeur acquise** : $V_a = C_0 + I = C_0 \\left(1 + i \\cdot \\frac{j}{360}\\right)$.\n' +
              'Exemple : une PME utilise un découvert de 6 000 000 FCFA pendant 45 jours à 12 % l’an : $I = 6\\,000\\,000 \\times 0{,}12 \\times \\frac{45}{360} = 90\\,000\\text{ FCFA}$.',
            formula: {
              name: 'Intérêts simples bancaires',
              formula: 'I = C_0 \\times i \\times \\frac{j}{360}',
              note: 'Convention commerciale bancaire de 360 jours par an.',
            },
            keyRule:
              'Pour une durée exprimée en jours $j$, divise toujours par **360** (année commerciale) dans les calculs d’agios et d’escompte bancaire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une entreprise est à découvert de 6 000 000 FCFA pendant 45 jours au taux annuel de 12 % (base 360 jours). Quel est le montant des intérêts débiteurs ?',
              options: ['45 000 FCFA', '90 000 FCFA', '180 000 FCFA', '720 000 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'I = 6 000 000 × 0,12 × (45 / 360) = 6 000 000 × 0,12 × 0,125 = 90 000 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Moyen & Long terme',
            stepTheme: 'violet',
            stepTitle: 'Intérêts composés et effet boule de neige de la capitalisation',
            paragraphText:
              'Sur plusieurs années, les intérêts non retirés génèrent eux-mêmes des intérêts lors des périodes suivantes : c’est la capitalisation.\n' +
              '• **Formule fondamentale** : $C_n = C_0 (1 + i)^n$, où $n$ est le nombre de périodes.\n' +
              '• **Écart avec l’intérêt simple** : dès $n \\ge 2$, les intérêts composés dépassent strictement l’intérêt simple grâce aux « intérêts sur les intérêts ».\n' +
              '• **Taux périodique** : si la capitalisation est mensuelle, on adapte le taux et le nombre de périodes (ex. $n = 12 \\times \\text{années}$).\n' +
              'Exemple : un dépôt à terme de 2 000 000 FCFA placé à intérêts composés à 5 % pendant 3 ans rapporte $2\\,000\\,000 \\times (1{,}05)^3 = 2\\,315\\,250\\text{ FCFA}$ (contre 2 300 000 FCFA en simple).',
            formula: {
              name: 'Capitalisation à intérêts composés',
              formula: 'C_n = C_0 \\times (1 + i)^n',
              note: 'Les intérêts de chaque année s’incorporent au capital productif.',
            },
            konanTip:
              'Pour vérifier rapidement : en intérêts simples, $2\\,000\\,000 + 3 \\times 100\\,000 = 2\\,300\\,000$ ; en composés, tu obtiens toujours un peu plus ($2\\,315\\,250$).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel capital obtient-on au bout de 3 ans en plaçant 2 000 000 FCFA à intérêts composés au taux annuel de 5 % ?',
              options: ['2 100 000 FCFA', '2 300 000 FCFA', '2 315 250 FCFA', '2 500 000 FCFA'],
              correctAnswerIndex: 2,
              explanation:
                'C_3 = 2 000 000 × (1,05)^3 = 2 000 000 × 1,157625 = 2 315 250 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Transparence crédit',
            stepTheme: 'blue',
            stepTitle: 'Taux nominal affiché vs Taux Annuel Effectif Global (TAEG)',
            paragraphText:
              'Un taux d’intérêt affiché à 7 % peut dissimuler des frais annexes lourds ; la réglementation UEMOA impose donc l’affichage d’un taux complet comparable.\n' +
              '• **Taux nominal (ou débiteur)** : sert uniquement à calculer les intérêts purs sur le capital restant dû.\n' +
              '• **TAEG (Taux Annuel Effectif Global)** : intègre les intérêts **plus** tous les frais obligatoires imposés par la banque (frais de dossier, commissions de gestion, prime d’assurance emprunteur obligatoire, frais de garantie).\n' +
              '• **Plafond d’usure BCEAO** : dans l’UEMOA, le TEG/TAEG ne doit jamais dépasser le taux d’usure légal fixé par la banque centrale pour protéger les emprunteurs.\n' +
              'Exemple : la banque A propose 7,5 % nominal avec 2 % de frais de dossier (TAEG ≈ 9,2 %), tandis que la banque B propose 8 % sans aucun frais (TAEG = 8,0 %) : l’offre B est en réalité moins chère.',
            keyRule:
              'Pour comparer deux offres de prêt, ne regarde jamais le seul taux nominal : compare toujours le **TAEG**, qui inclut frais de dossier, commissions et assurance obligatoire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Pourquoi la réglementation bancaire impose-t-elle d’indiquer le Taux Annuel Effectif Global (TAEG) en plus du taux nominal ?',
              options: [
                'Pour permettre aux banques de doubler leurs bénéfices sans prévenir le client',
                'Pour refléter le coût réel total du crédit en intégrant frais de dossier, commissions et assurances obligatoires',
                'Pour remplacer la signature du contrat de prêt',
                'Pour calculer uniquement les intérêts sur les dépôts à vue',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le TAEG agrège intérêts et frais annexes obligatoires afin d’offrir une base transparente et légale de comparaison entre banques (et de vérifier le respect du taux d’usure).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Remboursement',
            stepTheme: 'green',
            stepTitle: 'Annuité constante vs Amortissement constant du capital',
            paragraphText:
              'Lorsqu’un emprunt est remboursé par échéances régulières, deux grands schémas d’amortissement coexistent en pratique bancaire.\n' +
              '• **Annuités (ou mensualités) constantes** : le client paie la même somme totale $A = C_0 \\cdot \\frac{i}{1 - (1+i)^{-n}}$ à chaque échéance ; idéal pour les ménages ayant un salaire fixe.\n' +
              '• **Dynamique interne** : au début, la part d’intérêts domine et l’amortissement du capital est faible ; à la fin, c’est l’inverse.\n' +
              '• **Amortissements constants** : l’entreprise rembourse une fraction fixe $\\frac{C_0}{n}$ du capital chaque année ; l’annuité est plus lourde au début mais diminue ensuite, et le coût total d’intérêts est plus bas.\n' +
              'Exemple : pour un crédit immobilier de 15 ans, les particuliers privilégient la mensualité constante pour budgéter facilement leur loyer mensuel.',
            formula: {
              name: 'Annuité constante vs Amortissement constant',
              formula: 'A_{\\text{cte}} = C_0 \\cdot \\frac{i}{1 - (1+i)^{-n}} \\quad \\text{vs} \\quad M_{\\text{cte}} = \\frac{C_0}{n}',
              note: 'Chaque échéance vérifie toujours : Annuité = Intérêt sur CRD début + Amortissement du capital.',
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Dans un prêt remboursé par annuités (ou mensualités) constantes, comment évoluent la part d’intérêts et la part d’amortissement du capital au fil du temps ?',
              options: [
                'Les intérêts augmentent et l’amortissement du capital diminue',
                'Les intérêts restent identiques jusqu’à la dernière échéance',
                'Les intérêts diminuent progressivement (car le capital restant dû baisse) tandis que la part d’amortissement augmente',
                'L’amortissement du capital est nul jusqu’à la fin du prêt',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme le capital restant dû diminue après chaque échéance, les intérêts baissent ; l’annuité totale étant constante, la fraction consacrée au remboursement du capital augmente mécaniquement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Tableau d’amortissement',
            stepTheme: 'green',
            stepTitle: 'Construire et lire un échéancier d’emprunt comparatif',
            paragraphText:
              'Le tableau d’amortissement détaille année par année le capital restant dû (CRD), les intérêts, le capital amorti et la somme totale à verser.\n' +
              '• **Colonne Intérêt** : toujours égale au **CRD de début de période** multiplié par le taux $i$.\n' +
              '• **Colonne Amortissement** : égale à $\\text{Annuité} - \\text{Intérêt}$ (en annuité constante) ou fixée à $C_0 / n$ (en amortissement constant).\n' +
              '• **Colonne CRD fin** : égale à $\\text{CRD début} - \\text{Amortissement}$, qui devient le CRD début de la ligne suivante.\n' +
              'Exemple : pour $10\\,000\\,000\\text{ FCFA}$ sur 4 ans à $8\\,\\%$ en amortissement constant ($2\\,500\\,000$/an), les intérêts passent de $800\\,000$ (an 1) à $600\\,000$ (an 2), $400\\,000$ (an 3) et $200\\,000$ (an 4).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau d’amortissement : 10 000 000 FCFA sur 4 ans à 8 % (Amortissement constant)',
              caption: 'Chaque année amortit 2 500 000 FCFA de capital ; les intérêts et l’annuité décroissent régulièrement.',
              tableData: {
                headers: ['Année', 'CRD Début', 'Intérêts (8 %)', 'Amortissement', 'Annuité totale', 'CRD Fin'],
                rows: [
                  ['1', '10 000 000', '800 000', '2 500 000', '3 300 000', '7 500 000'],
                  ['2', '7 500 000', '600 000', '2 500 000', '3 100 000', '5 000 000'],
                  ['3', '5 000 000', '400 000', '2 500 000', '2 900 000', '2 500 000'],
                  ['4', '2 500 000', '200 000', '2 500 000', '2 700 000', '0'],
                  ['Total', '—', '2 000 000', '10 000 000', '12 000 000', '—'],
                ],
              },
            },
            keyRule:
              'La somme de la colonne **Amortissement** sur toute la durée du tableau doit toujours être exactement égale au capital initial $C_0$, ramenant le CRD final à $0$.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Pour un emprunt de 10 000 000 FCFA sur 4 ans à 8 % remboursé par amortissements constants, quel est le montant de l’annuité versée à la fin de l’année 2 ?',
              options: ['2 500 000 FCFA', '2 900 000 FCFA', '3 100 000 FCFA', '3 300 000 FCFA'],
              correctAnswerIndex: 2,
              explanation:
                'Amortissement annuel = 10 000 000 / 4 = 2 500 000 FCFA. Début année 2, CRD = 7 500 000 FCFA, donc intérêts = 7 500 000 × 8 % = 600 000 FCFA. Annuité 2 = 2 500 000 + 600 000 = 3 100 000 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'orange',
            stepTitle: 'Attention à la cohérence des périodes (taux annuel vs mensualité)',
            paragraphText:
              'L’erreur la plus fréquente en mathématiques bancaires consiste à injecter un taux annuel dans une formule d’échéances mensuelles sans conversion.\n' +
              '• **Règle d’homogénéité** : si $n$ est exprimé en **mois** (ex. 36 mois pour 3 ans), le taux $i$ doit obligatoirement être un **taux mensuel**.\n' +
              '• **Conversion proportionnelle vs actuarielle** : en pratique bancaire courante on utilise souvent le taux mensuel proportionnel $i_m = i_{\\text{annuel}} / 12$, alors que le calcul actuariel exact du TAEG utilise $(1 + i_{\\text{annuel}})^{1/12} - 1$.\n' +
              '• **Second piège** : ne jamais calculer les intérêts d’un prêt amortissable sur le capital initial jusqu’à la fin alors qu’une partie du capital a déjà été remboursée.\n' +
              'Exemple : pour un prêt de 24 mois au taux nominal annuel de 9 %, le taux périodique mensuel proportionnel vaut $9\\,\\% / 12 = 0{,}75\\,\\%$ par mois (et non $9\\,\\%$ !).',
            konanTip:
              'Vérifie systématiquement deux réflexes avant de cliquer sur la calculatrice : (1) même unité de temps entre $n$ et $i$, et (2) intérêts calculés sur le **capital restant dû**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Pour calculer la mensualité d’un crédit auto de 3 ans au taux nominal annuel de 9 % (méthode proportionnelle), quelles valeurs de n et i faut-il utiliser ?',
              options: [
                'n = 3 et i = 0,09',
                'n = 36 et i = 0,09',
                'n = 36 et i = 0,0075 (soit 0,75 % par mois)',
                'n = 12 et i = 0,03',
              ],
              correctAnswerIndex: 2,
              explanation:
                '3 ans = 36 mensualités (n = 36) ; le taux mensuel proportionnel correspondant à 9 % annuel est 9 % / 12 = 0,75 % = 0,0075.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Exercice synthèse',
            stepTheme: 'slate',
            stepTitle: 'Comparer deux modes de remboursement sur le coût total du crédit',
            paragraphText:
              'Un chef d’entreprise hésite entre deux propositions pour un emprunt de 12 000 000 FCFA sur 3 ans à 10 % l’an.\n' +
              '• **Option 1 (Amortissement constant)** : amortissement de $12\\,000\\,000 / 3 = 4\\,000\\,000\\text{ FCFA}$/an ; intérêts successifs = $1\\,200\\,000 + 800\\,000 + 400\\,000 = 2\\,400\\,000\\text{ FCFA}$.\n' +
              '• **Option 2 (Remboursement *in fine*)** : aucun capital remboursé avant la fin de l’an 3 ; intérêts de $1\\,200\\,000\\text{ FCFA}$ chaque année, soit $3\\,600\\,000\\text{ FCFA}$ au total.\n' +
              '• **Arbitrage** : l’option *in fine* préserve la trésorerie durant les années 1 et 2, mais coûte $1\\,200\\,000\\text{ FCFA}$ d’intérêts en plus et impose de décaisser $13\\,200\\,000\\text{ FCFA}$ d’un bloc à l’échéance.',
            keyRule:
              'Plus le remboursement du capital est tardif (*in fine* > annuité constante > amortissement constant), plus la somme totale d’intérêts payés à la banque est élevée.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q7',
              type: 'mcq',
              prompt:
                'Sur un emprunt de 12 000 000 FCFA à 10 % sur 3 ans, combien d’intérêts totaux paie-t-on en amortissement constant par rapport à un crédit remboursé in fine (capital intégralement remboursé à la fin) ?',
              options: [
                '2 400 000 FCFA en amortissement constant contre 3 600 000 FCFA in fine',
                '3 600 000 FCFA en amortissement constant contre 2 400 000 FCFA in fine',
                '1 200 000 FCFA dans les deux cas',
                '4 000 000 FCFA en amortissement constant contre 1 200 000 FCFA in fine',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En amortissement constant (4 M/an), les intérêts valent 1,2 M + 0,8 M + 0,4 M = 2,4 M FCFA. In fine, le CRD reste 12 M pendant 3 ans : 3 × 1,2 M = 3,6 M FCFA.',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p3',
        order: 3,
        title: 'Taux d’intermédiation, marge d’intermédiation et Produit Net Bancaire (PNB)',
        summary:
          'Mesurer l’efficacité de transformation (taux d’intermédiation, refinancement interbancaire), la marge nette d’intérêts et le Produit Net Bancaire (PNB).',
        conceptExplanation:
          'Pour piloter sa rentabilité et son équilibre de trésorerie, une banque suit trois indicateurs financiers centraux.\n\n' +
          '1. **Taux d’intermédiation bancaire** : $\\text{Taux d’intermédiation} = \\frac{\\text{Crédits distribués}}{\\text{Dépôts collectés}} \\times 100$.\n' +
          '• Un taux élevé (ex. 80–90 %) traduit une forte transformation de l’épargne en crédits à l’économie.\n' +
          '• Un taux supérieur à 100 % signifie que les crédits excèdent les dépôts : la banque doit combler le déficit en se refinançant sur le **marché interbancaire** ou auprès de la BCEAO.\n\n' +
          '2. **Marge d’intermédiation (ou marge nette d’intérêts)** : différence entre les **produits d’intérêts** perçus sur les crédits accordés et les **charges d’intérêts** versées pour rémunérer les dépôts.\n\n' +
          '3. **Produit Net Bancaire (PNB)** : équivalent bancaire de la **valeur ajoutée** (ou chiffre d’affaires net d’activité). Il additionne la marge d’intermédiation, les **commissions nettes** (tenue de compte, cartes, virements, ingénierie) et le résultat des **opérations de marché**.',
        formulas: [
          {
            name: 'Taux d’intermédiation bancaire',
            formula: '\\text{Taux d’intermédiation} = \\frac{\\text{Crédits distribués}}{\\text{Dépôts collectés}} \\times 100',
            note: 'Si > 100 %, la banque doit se refinancer (marché interbancaire ou BCEAO).',
          },
          {
            name: 'Marge d’intermédiation & Produit Net Bancaire (PNB)',
            formula: '\\text{Marge} = \\text{Produits d’intérêts} - \\text{Charges d’intérêts} \\quad ; \\quad \\text{PNB} = \\text{Marge} + \\text{Commissions nettes} + \\text{Opérations de marché}',
            note: 'Le PNB mesure la richesse brute créée par l’activité bancaire.',
          },
        ],
        keyRule:
          'Le **PNB** est l’indicateur de revenu global de la banque : il ne se résume pas aux intérêts car il inclut aussi les commissions sur services et les gains de marché.',
        workedExample: {
          title: 'Calculer taux d’intermédiation et marge d’intérêts',
          statement:
            'Une banque affiche 850 milliards FCFA de dépôts et 680 milliards FCFA de crédits. Par ailleurs, une autre banque prête 200 milliards à 8 % et collecte 150 milliards de dépôts rémunérés à 3 %. Calculez le taux d’intermédiation de la première (et l’effort pour atteindre 90 %), puis la marge d’intermédiation de la seconde.',
          methodSteps: [
            'Taux d’intermédiation = (680 / 850) × 100 = 80 %.',
            'Objectif 90 % à dépôts constants : Crédits cibles = 850 × 0,90 = 765 milliards ; crédits supplémentaires à distribuer = 765 − 680 = 85 milliards FCFA.',
            'Banque 2 — Produits d’intérêts = 200 × 8 % = 16 milliards FCFA.',
            'Charges d’intérêts = 150 × 3 % = 4,5 milliards FCFA.',
            'Marge d’intermédiation = 16 − 4,5 = 11,5 milliards FCFA.',
          ],
          conclusion:
            'Taux d’intermédiation = 80 % (soit +85 milliards de crédits pour atteindre 90 %) ; marge d’intermédiation = 11,5 milliards FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Indicateur clé',
            stepTheme: 'violet',
            stepTitle: 'Calculer et interpréter le taux d’intermédiation bancaire',
            paragraphText:
              'Le taux d’intermédiation mesure l’intensité avec laquelle une banque recycle l’épargne collectée en financement productif de l’économie.\n' +
              '• **Formule** : $\\text{Taux d’intermédiation} = \\frac{\\text{Encours de crédits}}{\\text{Encours de dépôts}} \\times 100$.\n' +
              '• **Taux faible (ex. 50 %)** : la moitié des dépôts reste inutilisée en trésorerie ou en bons du Trésor ; faible contribution au financement du secteur privé.\n' +
              '• **Taux élevé (ex. 80–90 %)** : forte efficacité d’intermédiation tout en conservant un coussin de liquidité.\n' +
              'Exemple : avec 680 milliards de crédits pour 850 milliards de dépôts, le taux vaut $\\frac{680}{850} \\times 100 = 80\\,\\%$.',
            formula: {
              name: 'Taux d’intermédiation',
              formula: '\\text{TI} = \\frac{\\text{Crédits}}{\\text{Dépôts}} \\times 100',
              note: 'Mesure la part des dépôts effectivement transformée en crédits.',
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Une banque collecte 850 milliards FCFA de dépôts et distribue 680 milliards FCFA de crédits. Quel est son taux d’intermédiation et quel volume de crédits supplémentaires doit-elle octroyer pour atteindre 85 % à dépôts constants ?',
              options: [
                '75 % et +35 milliards FCFA',
                '80 % et +42,5 milliards FCFA',
                '85 % et +85 milliards FCFA',
                '125 % et −42,5 milliards FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TI = (680 / 850) × 100 = 80 %. Pour atteindre 85 % : 850 × 0,85 = 722,5 milliards, soit 722,5 − 680 = +42,5 milliards FCFA de crédits supplémentaires.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Refinancement',
            stepTheme: 'orange',
            stepTitle: 'Que se passe-t-il quand le taux d’intermédiation dépasse 100 % ?',
            paragraphText:
              'Une banque dynamique peut accorder plus de crédits qu’elle ne détient de dépôts clientèle ; ce déséquilibre crée aussitôt un besoin de financement externe.\n' +
              '• **Cas $\\text{Crédits} > \\text{Dépôts}$** : le taux d’intermédiation est strictement supérieur à 100 %.\n' +
              '• **Calcul du besoin de refinancement** : $\\text{Besoin} = \\text{Crédits accordés} - \\text{Dépôts collectés}$.\n' +
              '• **Sources de refinancement** : marché interbancaire (emprunt auprès d’autres banques en excédent de liquidité), guichet de refinancement de la **BCEAO** ou émissions obligataires.\n' +
              'Exemple : si une banque accorde 520 millions FCFA de crédits alors qu’elle n’a que 400 millions FCFA de dépôts, son taux d’intermédiation est de 130 % et elle doit se refinancer à hauteur de 120 millions FCFA.',
            keyRule:
              'Un taux d’intermédiation **supérieur à 100 %** impose obligatoirement de recourir au **refinancement interbancaire** ou à la **banque centrale** pour couvrir l’écart.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Une banque possède 400 millions FCFA de dépôts et a octroyé 520 millions FCFA de crédits. Quel est son taux d’intermédiation et de combien doit-elle se refinancer ?',
              options: [
                '76,9 % — aucun refinancement nécessaire',
                '130 % — refinancement de 120 millions FCFA sur le marché interbancaire ou auprès de la BCEAO',
                '120 % — refinancement de 400 millions FCFA',
                '100 % — refinancement de 520 millions FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'TI = (520 / 400) × 100 = 130 %. L’excédent de crédits sur les dépôts vaut 520 − 400 = 120 millions FCFA à refinancer.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Marge d’intérêts',
            stepTheme: 'violet',
            stepTitle: 'Calculer la marge d’intermédiation (Produits − Charges d’intérêts)',
            paragraphText:
              'Le métier historique de transformation génère un revenu net issu de l’écart entre les taux prêteurs (actifs) et les taux payés sur les dépôts ou emprunts (passifs).\n' +
              '• **Produits d’intérêts** : intérêts reçus sur les crédits distribués et titres obligataires détenus.\n' +
              '• **Charges d’intérêts** : intérêts versés aux épargnants (DAT, livrets) et sur les emprunts interbancaires.\n' +
              '• **Marge d’intermédiation** : $\\text{Produits d’intérêts} - \\text{Charges d’intérêts}$.\n' +
              'Exemple : 200 milliards de crédits à 8 % génèrent $16\\text{ Md}$ de produits ; 150 milliards de dépôts rémunérés à 3 % coûtent $4{,}5\\text{ Md}$ de charges → marge nette d’intérêts = $11{,}5\\text{ milliards FCFA}$.',
            formula: {
              name: 'Marge d’intermédiation bancaire',
              formula: '\\text{Marge} = (\\text{Crédits} \\times i_{\\text{crédit}}) - (\\text{Dépôts rémunérés} \\times i_{\\text{dépôt}})',
              note: 'Ne pas soustraire les taux bruts directement lorsque les volumes diffèrent !',
            },
            konanTip:
              'Piège fréquent : ne calcule jamais $(8\\% - 3\\%) \\times 200$ quand les montants de crédits (200 Md) et de dépôts (150 Md) sont différents ! Calcule d’abord chaque flux en FCFA.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Une banque accorde 200 milliards FCFA de crédits à 8 % et collecte 150 milliards FCFA de dépôts rémunérés à 3 %. Quelle est sa marge d’intermédiation ?',
              options: [
                '5 milliards FCFA',
                '10 milliards FCFA',
                '11,5 milliards FCFA',
                '20,5 milliards FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Produits d’intérêts = 200 × 8 % = 16 Md. Charges d’intérêts = 150 × 3 % = 4,5 Md. Marge = 16 − 4,5 = 11,5 milliards FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Revenu global',
            stepTheme: 'blue',
            stepTitle: 'Le Produit Net Bancaire (PNB) : les trois moteurs de revenu',
            paragraphText:
              'Le **Produit Net Bancaire (PNB)** mesure la richesse globale générée par l’activité courante d’une banque, à l’image de la valeur ajoutée d’une entreprise industrielle.\n' +
              '• **Composante 1 — Marge nette d’intérêts** : revenu de l’activité d’intermédiation traditionnelle.\n' +
              '• **Composante 2 — Commissions nettes** : frais de tenue de compte, cotisations cartes, commissions de change, virements internationaux et conseil.\n' +
              '• **Composante 3 — Résultat des opérations de marché** : plus-values et dividendes sur portefeuilles de titres.\n' +
              'Exemple : si une banque réalise 48 Md de marge d’intérêts, 24 Md de commissions nettes et 8 Md sur les marchés, son PNB atteint $48 + 24 + 8 = 80\\text{ milliards FCFA}$.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Décomposition type du Produit Net Bancaire (PNB = 80 Md FCFA)',
              caption: 'Contribution des trois sources de revenus nets à la formation du PNB bancaire.',
              barChart: {
                yLabel: 'Montant (Milliards FCFA)',
                unit: 'Md',
                bars: [
                  { label: 'Marge d’intérêts', value: 48, color: 'blue', annotation: '60 %' },
                  { label: 'Commissions nettes', value: 24, color: 'green', annotation: '30 %' },
                  { label: 'Opérations de marché', value: 8, color: 'violet', annotation: '10 %' },
                  { label: 'PNB Total', value: 80, color: 'slate', annotation: '100 %' },
                ],
              },
            },
            keyRule:
              'Le **PNB** se situe avant déduction des charges d’exploitation (salaires, loyers, IT) et du coût du risque (provisions sur créances douteuses).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'À quel agrégat de la comptabilité générale des entreprises classiques correspond le Produit Net Bancaire (PNB) ?',
              options: [
                'Aux charges de personnel',
                'À la valeur ajoutée (ou marge brute d’activité bancaire)',
                'Au montant total des dépôts à vue',
                'Aux réserves obligatoires bloquées à la BCEAO',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le PNB additionne la marge d’intérêts, les commissions nettes et les résultats de marché : il joue le rôle de valeur ajoutée bancaire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Stratégie revenus',
            stepTheme: 'violet',
            stepTitle: 'Diversification du PNB : montée en puissance des commissions',
            paragraphText:
              'Lorsque la concurrence ou la baisse des taux comprime la marge d’intermédiation, les banques modernes cherchent à accroître la part des commissions dans leur PNB.\n' +
              '• **Avantage des commissions** : elles consomment peu de fonds propres et ne créent pas directement de risque de crédit dans le bilan.\n' +
              '• **Sources de commissions** : abonnements de banque digitale, paiements marchands, change, bancassurance, structuration financière et transferts internationaux.\n' +
              '• **Équilibre client** : une facturation excessive des commissions favorise toutefois la migration des clients vers les néobanques et le Mobile Money.\n' +
              'Exemple : de nombreuses banques ouest-africaines développent des offres packagées (compte + carte + appli mobile + micro-assurance) pour stabiliser leurs revenus de commissions.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Pourquoi les banques cherchent-elles à augmenter la part des commissions de services (paiements, change, bancassurance) dans leur PNB ?',
              options: [
                'Pour diversifier leurs revenus au-delà des intérêts sans alourdir proportionnellement leur risque de crédit',
                'Parce que les commissions sont exclues du calcul du PNB',
                'Pour réduire à zéro le nombre de clients utilisant les services digitaux',
                'Pour remplacer les fonds propres réglementaires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les commissions stabilisent le PNB lorsque les marges d’intérêt se resserrent et génèrent du revenu hors risque de crédit direct.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas complet',
            stepTheme: 'slate',
            stepTitle: 'Synthèse : passer d’un objectif d’intermédiation à 90 % au PNB',
            paragraphText:
              'Une banque détient 850 milliards FCFA de dépôts et 680 milliards FCFA de crédits (taux d’intermédiation = 80 %). Elle souhaite porter son taux d’intermédiation à 90 %.\n' +
              '• **Volume cible de crédits** : $850 \\times 90\\,\\% = 765\\text{ milliards FCFA}$.\n' +
              '• **Crédits supplémentaires** : $765 - 680 = 85\\text{ milliards FCFA}$.\n' +
              '• **Impact sur le PNB** : si ces 85 milliards de nouveaux crédits rapportent 7 % nets de coût de refinancement, la marge d’intérêts progresse de $85 \\times 7\\,\\% = 5{,}95\\text{ milliards FCFA}$, augmentant d’autant le PNB (sous réserve du coût du risque).\n' +
              'Exemple : augmenter le taux d’intermédiation tout en maîtrisant la qualité des emprunteurs dope directement la marge bancaire.',
            konanTip:
              'Toujours poser l’équation : $\\text{Nouveaux crédits} = (\\text{TI}_{\\text{cible}} \\times \\text{Dépôts}) - \\text{Crédits}_{\\text{initiaux}}$.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Une banque possède 850 milliards FCFA de dépôts et 680 milliards FCFA de crédits. Quel volume de crédits supplémentaires doit-elle accorder (à dépôts inchangés) pour porter son taux d’intermédiation à 90 % ?',
              options: [
                '42,5 milliards FCFA',
                '85 milliards FCFA',
                '170 milliards FCFA',
                '765 milliards FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Volume cible à 90 % = 850 × 0,90 = 765 milliards FCFA. Supplément nécessaire = 765 − 680 = 85 milliards FCFA.',
            },
          },
        ],
      }),

      // POINT 2.4
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p4',
        order: 4,
        title: 'Indicateurs de performance (ROA, ROE, Coefficient d’exploitation) et qualité des actifs (NPL)',
        summary:
          'Rentabilité des actifs (ROA), rentabilité des capitaux propres (ROE), efficacité opérationnelle (coefficient d’exploitation) et taux de créances douteuses (NPL ratio).',
        conceptExplanation:
          'Une banque peut afficher un PNB élevé tout en étant peu rentable ou fragile si ses coûts de structure explosent ou si ses crédits deviennent impayés. Quatre ratios permettent d’évaluer sa santé financière :\n\n' +
          '1. **ROA (*Return On Assets*) — Rentabilité des actifs** : $\\text{ROA} = \\frac{\\text{Résultat Net}}{\\text{Total Actif}} \\times 100$. Mesure le rendement global de chaque franc d’actif engagé (en banque, un ROA autour de $1\\,\\%$ à $2\\,\\%$ est courant).\n\n' +
          '2. **ROE (*Return On Equity*) — Rentabilité financière des actionnaires** : $\\text{ROE} = \\frac{\\text{Résultat Net}}{\\text{Fonds Propres}} \\times 100$. Mesure le rendement du capital apporté par les actionnaires (souvent supérieur au ROA grâce à l’effet de levier).\n\n' +
          '3. **Coefficient d’exploitation (*Cost-to-Income Ratio*)** : $\\text{Coeff. d’exploitation} = \\frac{\\text{Charges d’exploitation}}{\\text{PNB}} \\times 100$. Indique quelle part du PNB est absorbée par les frais généraux (salaires, loyers, IT). Plus il est bas (idéalement $< 55\\text{–}60\\,\\%$), plus la banque est efficace.\n\n' +
          '4. **NPL Ratio (*Non-Performing Loans*) — Taux de créances douteuses** : $\\text{NPL} = \\frac{\\text{Créances douteuses ou litigieuses}}{\\text{Encours total de crédits}} \\times 100$. Un NPL élevé menace les résultats (provisions) et les fonds propres.',
        formulas: [
          {
            name: 'ROA et ROE bancaires',
            formula: '\\text{ROA} = \\frac{\\text{Résultat Net}}{\\text{Total Actif}} \\times 100 \\quad ; \\quad \\text{ROE} = \\frac{\\text{Résultat Net}}{\\text{Fonds Propres}} \\times 100',
            note: 'Le ROE est amplifié par le levier financier (Total Actif / Fonds Propres).',
          },
          {
            name: 'Coefficient d’exploitation et NPL Ratio',
            formula: '\\text{Coeff. exploit.} = \\frac{\\text{Charges d’exploitation}}{\\text{PNB}} \\times 100 \\quad ; \\quad \\text{NPL} = \\frac{\\text{Créances douteuses}}{\\text{Encours total de crédits}} \\times 100',
            note: 'Plus ces deux ratios sont faibles, meilleure est l’efficacité opérationnelle et la qualité des crédits.',
          },
        ],
        keyRule:
          'En analyse bancaire, on vise un **ROA** et un **ROE** élevés, mais un **coefficient d’exploitation** et un **NPL ratio** les plus bas possibles.',
        workedExample: {
          title: 'Diagnostic complet de performance et de qualité d’actifs',
          statement:
            'En fin d’exercice, une banque présente : Résultat net = 20 Md, Fonds propres = 55 Md, Total Actif = 600 Md, Charges d’exploitation = 20 Md, PNB = 80 Md, Encours de crédits = 400 Md dont 20 Md de créances douteuses. Calculez ROA, ROE, coefficient d’exploitation et NPL ratio.',
          methodSteps: [
            'ROA = (20 / 600) × 100 = 3,33 % (excellente rentabilité des actifs).',
            'ROE = (20 / 55) × 100 = 36,36 % (très forte rentabilité pour les actionnaires).',
            'Coefficient d’exploitation = (20 / 80) × 100 = 25 % (efficacité opérationnelle exceptionnelle).',
            'NPL ratio = (20 / 400) × 100 = 5 % (qualité de portefeuille maîtrisée, à surveiller par un bon scoring et recouvrement).',
          ],
          conclusion:
            'La banque affiche une rentabilité et une maîtrise des coûts remarquables, avec un taux de créances douteuses contenu à 5 %.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Rentabilité Actifs',
            stepTheme: 'violet',
            stepTitle: 'Le ROA (Return On Assets) : efficacité économique du bilan',
            paragraphText:
              'Le **ROA** évalue la capacité d’une banque à transformer l’ensemble de son bilan (crédits, titres, liquidités) en bénéfice net.\n' +
              '• **Formule** : $\\text{ROA} = \\frac{\\text{Résultat Net}}{\\text{Total Actif}} \\times 100$.\n' +
              '• **Ordre de grandeur bancaire** : comme le bilan d’une banque est très volumineux (dépôts + crédits), un ROA compris entre **1 % et 2 %** est déjà considéré comme solide (3,33 % est exceptionnel).\n' +
              '• **Facteurs d’amélioration** : accroître les marges/commissions, maîtriser les charges et limiter les provisions pour impayés.\n' +
              'Exemple : avec un Résultat Net de 20 Md FCFA et un Total Actif de 600 Md FCFA, $\\text{ROA} = \\frac{20}{600} \\times 100 = 3{,}33\\,\\%$.',
            formula: {
              name: 'Return On Assets (ROA)',
              formula: '\\text{ROA} = \\frac{\\text{Résultat Net}}{\\text{Total Actif}} \\times 100',
              note: 'Mesure la rentabilité globale de tous les actifs utilisés.',
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p4_q1',
              type: 'mcq',
              prompt:
                'Une banque réalise un résultat net de 20 milliards FCFA avec un total d’actif de 600 milliards FCFA. Quel est son ROA ?',
              options: ['1,20 %', '3,33 %', '12,00 %', '30,00 %'],
              correctAnswerIndex: 1,
              explanation:
                'ROA = (20 / 600) × 100 = 1/30 × 100 ≈ 3,33 %.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Rentabilité Actionnaires',
            stepTheme: 'violet',
            stepTitle: 'Le ROE (Return On Equity) et l’effet de levier bancaire',
            paragraphText:
              'Les actionnaires évaluent leur investissement à travers le **ROE**, qui rapporte le profit net aux capitaux propres qu’ils ont immobilisés.\n' +
              '• **Formule** : $\\text{ROE} = \\frac{\\text{Résultat Net}}{\\text{Fonds Propres}} \\times 100$.\n' +
              '• **Lien avec le ROA (levier)** : $\\text{ROE} = \\text{ROA} \\times \\frac{\\text{Total Actif}}{\\text{Fonds Propres}}$ ; une banque travaillant beaucoup avec les dépôts des clients a un levier élevé.\n' +
              '• **Vigilance prudentielle** : un ROE dopé uniquement par un manque de fonds propres rend la banque fragile en cas de crise.\n' +
              'Exemple : avec 20 Md FCFA de résultat net pour 55 Md FCFA de fonds propres, $\\text{ROE} = \\frac{20}{55} \\times 100 \\approx 36{,}36\\,\\%$.',
            formula: {
              name: 'Return On Equity (ROE)',
              formula: '\\text{ROE} = \\frac{\\text{Résultat Net}}{\\text{Fonds Propres}} \\times 100',
              note: 'Mesure le rendement des capitaux apportés par les actionnaires.',
            },
            keyRule:
              'Ne confonds jamais le dénominateur : **ROA** divise par le **Total Actif** (Assets), tandis que **ROE** divise par les **Fonds Propres** (Equity).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p4_q2',
              type: 'mcq',
              prompt:
                'Avec un résultat net de 20 milliards FCFA et 55 milliards FCFA de fonds propres, quel est le ROE de la banque ?',
              options: ['3,33 %', '25,00 %', '36,36 %', '55,00 %'],
              correctAnswerIndex: 2,
              explanation:
                'ROE = (20 / 55) × 100 ≈ 36,36 %. Il mesure la rentabilité financière des fonds propres.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Efficacité',
            stepTheme: 'green',
            stepTitle: 'Le coefficient d’exploitation (Cost-to-Income Ratio)',
            paragraphText:
              'Générer un fort PNB ne suffit pas si l’appareil bancaire (agences, masse salariale, informatique) consomme la quasi-totalité des revenus.\n' +
              '• **Formule** : $\\text{Coefficient d’exploitation} = \\frac{\\text{Charges générales d’exploitation}}{\\text{PNB}} \\times 100$.\n' +
              '• **Interprétation** : un coefficient de 25 % signifie que sur 100 FCFA de PNB, seulement 25 FCFA paient les frais de fonctionnement et 75 FCFA restent disponibles (Résultat Brut d’Exploitation).\n' +
              '• **Impact du numérique** : la digitalisation (mobile banking, automatisation) vise précisément à abaisser le coefficient d’exploitation sous la barre des 50–55 %.\n' +
              'Exemple : charges d’exploitation = 20 Md et PNB = 80 Md → $\\text{Coeff.} = \\frac{20}{80} \\times 100 = 25\\,\\%$.',
            formula: {
              name: 'Coefficient d’exploitation',
              formula: '\\text{Coeff. d’exploitation} = \\frac{\\text{Charges d’exploitation}}{\\text{PNB}} \\times 100',
              note: 'Plus il est faible, plus la banque est opérationnellement performante.',
            },
            konanTip:
              'Attention au sens d’interprétation : contrairement au ROA/ROE, un **petit** coefficient d’exploitation est une **bonne** nouvelle !',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p4_q3',
              type: 'mcq',
              prompt:
                'Une banque affiche un PNB de 80 milliards FCFA et des charges d’exploitation de 20 milliards FCFA. Que vaut son coefficient d’exploitation et comment l’interpréter ?',
              options: [
                '400 % — la banque est en déficit grave',
                '25 % — excellente efficacité opérationnelle (seulement 25 % du PNB est absorbé par les coûts de fonctionnement)',
                '60 % — les charges dépassent le PNB',
                '20 % — le PNB est inférieur aux charges',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Coefficient d’exploitation = (20 / 80) × 100 = 25 %, signe d’une maîtrise remarquable des coûts de structure.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Qualité actifs',
            stepTheme: 'violet',
            stepTitle: 'Le taux de créances douteuses (NPL Ratio)',
            paragraphText:
              'La santé d’une banque dépend directement de la capacité de ses emprunteurs à rembourser leurs échéances dans les délais.\n' +
              '• **Définition** : les créances douteuses ou litigieuses (*Non-Performing Loans*, NPL) regroupent les crédits présentant un retard de paiement avéré (généralement $> 90$ jours dans les normes prudentielles) ou un risque probable de non-remboursement.\n' +
              '• **Formule** : $\\text{NPL Ratio} = \\frac{\\text{Créances douteuses}}{\\text{Encours total de crédits}} \\times 100$.\n' +
              '• **Seuil de vigilance** : en zone UEMOA, un NPL supérieur à 10–15 % signale une dégradation sérieuse du portefeuille.\n' +
              'Exemple : sur 400 milliards FCFA d’encours totaux dont 20 milliards de créances douteuses, $\\text{NPL} = \\frac{20}{400} \\times 100 = 5\\,\\%$.',
            formula: {
              name: 'Taux de créances douteuses (NPL Ratio)',
              formula: '\\text{NPL Ratio} = \\frac{\\text{Créances douteuses}}{\\text{Encours total de crédits}} \\times 100',
              note: 'Indicateur clé de qualité du portefeuille de crédit surveillé par la Commission Bancaire.',
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p4_q4',
              type: 'mcq',
              prompt:
                'Une banque possède un encours total de crédits de 400 milliards FCFA, dont 20 milliards sont classés en créances douteuses. Quel est son NPL ratio ?',
              options: ['2 %', '5 %', '10 %', '20 %'],
              correctAnswerIndex: 1,
              explanation:
                'NPL ratio = (20 / 400) × 100 = 5 %.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Conséquences NPL',
            stepTheme: 'orange',
            stepTitle: 'Risques d’un NPL élevé et leviers d’assainissement du portefeuille',
            paragraphText:
              'Laisser dériver le taux de créances douteuses déclenche un effet domino destructeur sur la rentabilité et la solvabilité bancaire.\n' +
              '• **Érosion des bénéfices et fonds propres** : la banque doit passer des **provisions pour dépréciation** qui réduisent son résultat net ; si les pertes dépassent les profits, elles amputent ses fonds propres.\n' +
              '• **Assèchement du crédit** : immobilisée par des créances gelées, la banque manque de liquidités recyclables et freine les nouveaux prêts à l’économie.\n' +
              '• **Solutions d’assainissement** : (1) durcir la sélection *ex ante* (scoring, BIC, garanties liquides), (2) renforcer le recouvrement amiable/judiciaire ou céder les créances en souffrance (titrisation/sociétés de recouvrement).\n' +
              'Exemple : un suivi automatisé des impayés dès le 15e jour de retard réduit fortement le passage en créances irrécouvrables.',
            keyRule:
              'Un **NPL élevé** entraîne hausse des provisions, baisse du résultat net, crise de liquidité potentielle et érosion des fonds propres.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p4_q5',
              type: 'mcq',
              prompt:
                'Quelle conséquence directe entraîne une hausse brutale du taux de créances douteuses (NPL) sur les comptes d’une banque ?',
              options: [
                'Une augmentation automatique du ROE et des dividendes',
                'Une hausse obligatoire des provisions qui réduit le résultat net et fragilise les fonds propres et la liquidité',
                'La suppression des réserves obligatoires à la BCEAO',
                'La transformation des créances impayées en dépôts à vue',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les créances douteuses obligent la banque à enregistrer des provisions (coût du risque), ce qui réduit le bénéfice net et peut menacer sa solvabilité.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Audit complet',
            stepTheme: 'slate',
            stepTitle: 'Comparer la performance de deux banques concurrentes (Alpha vs Bêta)',
            paragraphText:
              'Comparons deux banques ayant le même PNB de 100 milliards FCFA :\n' +
              '• **Banque Alpha** : Charges = 42 Md (Coeff. = 42 %), NPL = 3 %, Résultat Net = 30 Md sur 200 Md de FP (ROE = 15 %).\n' +
              '• **Banque Bêta** : Charges = 72 Md (Coeff. = 72 %), NPL = 16 %, Résultat Net = 4 Md sur 100 Md de FP (ROE = 4 %).\n' +
              '• **Diagnostic** : bien que le PNB soit identique (100 Md), Alpha maîtrise ses coûts grâce au digital et sélectionne bien ses emprunteurs ; Bêta souffre à la fois d’une structure trop lourde et de lourdes provisions sur impayés.\n' +
              'Exemple : pour redresser Bêta, la direction doit digitaliser les processus (baisser le coefficient d’exploitation) et réviser son modèle d’octroi de crédit.',
            konanTip:
              'En étude de cas, ne juge jamais une banque sur son seul PNB : croise toujours **Coeff. d’exploitation** (coûts) + **NPL** (risque crédit) + **ROE/ROA** (rentabilité finale).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p4_q6',
              type: 'mcq',
              prompt:
                'Deux banques ont exactement le même PNB (100 Md FCFA), mais la banque A a un coefficient d’exploitation de 42 % et un NPL de 3 %, contre 72 % et 16 % pour la banque B. Que conclure ?',
              options: [
                'La banque B est plus performante car ses charges et ses impayés sont plus élevés',
                'La banque A est nettement plus efficace et saine (coûts maîtrisés et portefeuille de crédits de bonne qualité)',
                'Les deux banques ont exactement le même résultat net',
                'La banque A doit augmenter son NPL à 16 % pour rattraper la banque B',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un coefficient d’exploitation plus faible (42 % < 72 %) et un NPL plus bas (3 % < 16 %) démontrent une meilleure maîtrise opérationnelle et un moindre coût du risque pour la banque A.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : CRÉATION MONÉTAIRE, MULTIPLICATEUR DE CRÉDIT, BILAN ET RISQUES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch3',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Banque',
    title: 'Chapitre 3 — Création monétaire, multiplicateur de crédit, bilan et risques bancaires',
    summary:
      'Mécanisme « les crédits font les dépôts », réserves obligatoires et multiplicateur 1/r, structure Actif/Passif en partie double, typologie des risques (crédit, liquidité, marché, opérationnel), Bâle III et politique monétaire BCEAO.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_banque_ch3_p1',
        order: 1,
        title: 'Création monétaire (« les crédits font les dépôts »), réserves et multiplicateur',
        summary:
          'Création ex nihilo de monnaie scripturale, réserves obligatoires r, multiplicateur de crédit m = 1/r, capacité maximale de crédit et destruction monétaire.',
        conceptExplanation:
          'Contrairement à l’intuition courante, une banque commerciale ne se contente pas de prêter des billets déjà existants dans ses coffres : en accordant un crédit, elle **crée de la monnaie scripturale**.\n\n' +
          '1. **Principe « les crédits font les dépôts »** : lorsqu’une banque accorde un prêt de 10 millions FCFA à une entreprise, elle inscrit simultanément une créance de 10 millions à l’**actif** et crédite le compte de l’entreprise de 10 millions au **passif** (nouveau dépôt). La masse monétaire augmente immédiatement de 10 millions.\n\n' +
          '2. **Multiplicateur de crédit ($m$)** : à partir d’un dépôt initial $D_0$, la banque conserve une fraction $r$ en **réserves obligatoires** auprès de la banque centrale (taux fixé par la BCEAO, ex. $r = 2\\,\\%$) et prête le surplus $D_0 (1 - r)$. Ce prêt devient un dépôt dans une autre banque, qui prête à son tour $(1-r)$ du montant reçu, en chaîne :\n' +
          '• Multiplicateur monétaire : $m = \\frac{1}{r}$ (ex. pour $r = 2\\,\\% = 0{,}02$, $m = 50$).\n' +
          '• Capacité maximale de création de crédit supplémentaire à partir d’un dépôt initial : $C_{\\max} = D_0 \\times (1 - r) \\times m = D_0 \\times \\frac{1 - r}{r}$ (tandis que la masse monétaire totale finale incluant $D_0$ atteint $D_0 \\times m$).\n\n' +
          '3. **Limites et destruction monétaire** : la création est freinée par les réserves obligatoires, les retraits en billets (fuites hors circuit bancaire) et la demande de crédit ; inversement, le **remboursement du capital** d’un prêt détruit de la monnaie.',
        formulas: [
          {
            name: 'Multiplicateur de crédit',
            formula: 'm = \\frac{1}{r}',
            note: 'Où r est le taux de réserves obligatoires (en décimal, ex. r = 0,02 pour 2 %).',
          },
          {
            name: 'Capacité maximale de création de crédit',
            formula: 'C_{\\max} = D_0 \\times (1 - r) \\times m',
            note: 'La masse monétaire totale (dépôt initial inclus) atteint D_0 × m.',
          },
        ],
        keyRule:
          'Les banques commerciales créent la monnaie scripturale par l’octroi de crédits (« les crédits font les dépôts ») et la détruisent lors du remboursement du principal ; cette capacité est bornée par le taux de réserves obligatoires $r$.',
        workedExample: {
          title: 'Calculer l’effet multiplicateur d’un dépôt initial de 200 millions FCFA',
          statement:
            'La BCEAO fixe le taux de réserves obligatoires à r = 2 %. Un client dépose D_0 = 200 millions FCFA dans une banque. Calculez la part bloquée en réserves, le premier prêt possible, le multiplicateur et la capacité maximale de création de crédit.',
          methodSteps: [
            'Part bloquée en réserves obligatoires (banque 1) = 200 × 2 % = 4 millions FCFA.',
            'Montant maximal que la banque 1 peut prêter = 200 − 4 = 196 millions FCFA (soit 200 × (1 − 0,02)).',
            'Multiplicateur de crédit : m = 1 / 0,02 = 50.',
            'Capacité maximale de création de crédit dans le système : C_max = 200 × (1 − 0,02) × 50 = 196 × 50 = 9 800 millions FCFA (soit 9,8 milliards FCFA ; dépôts totaux finaux = 200 × 50 = 10 000 millions).',
          ],
          conclusion:
            'Réserves initiales = 4 M, premier crédit = 196 M, multiplicateur = 50, création maximale de crédit = 9 800 millions FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mécanisme clé',
            stepTheme: 'blue',
            stepTitle: 'Pourquoi dit-on que « les crédits font les dépôts » ?',
            paragraphText:
              'Dans la conception naïve, une banque attendrait passivement des dépôts avant de prêter des billets ; la réalité comptable moderne fonctionne à l’envers.\n' +
              '• **Création ex nihilo** : quand une banque accorde un prêt de 10 millions FCFA à une PME, elle ne retire pas 10 millions du compte d’un autre client.\n' +
              '• **Double écriture simultanée** : elle inscrit **+10 M de créance** (crédit client) à son Actif et **+10 M de dépôt à vue** sur le compte de la PME à son Passif.\n' +
              '• **Nouvelle monnaie scripturale** : la PME peut aussitôt payer ses fournisseurs par virement ou chèque avec ces 10 millions qui n’existaient pas la veille.\n' +
              'Exemple : le simple jeu d’écriture comptable augmente immédiatement l’agrégat monétaire M1 en circulation dans l’économie.',
            keyRule:
              'Tout nouveau crédit accordé par une banque commerciale crée instantanément un **dépôt équivalent** et accroît la masse monétaire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Que signifie l’adage bancaire fondamental « les crédits font les dépôts » ?',
              options: [
                'Les banques ne peuvent prêter que les pièces d’or déposées dans leurs coffres',
                'En accordant un crédit, la banque crée de la monnaie scripturale en créditant directement le compte de dépôt de l’emprunteur',
                'Les clients doivent déposer le double du prêt souhaité avant toute demande',
                'Les dépôts bancaires disparaissent dès qu’un crédit est accordé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lors de l’octroi d’un prêt, la banque crée simultanément une créance à l’actif et un dépôt scriptural utilisable au passif : le crédit engendre le dépôt.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Réserves obligatoires',
            stepTheme: 'blue',
            stepTitle: 'Le rôle des réserves obligatoires imposées par la BCEAO',
            paragraphText:
              'Si les banques peuvent créer de la monnaie par le crédit, elles ne peuvent pas en créer à l’infini : la banque centrale encadre étroitement ce pouvoir.\n' +
              '• **Définition** : les **réserves obligatoires** sont une fraction $r$ des dépôts collectés que chaque banque commerciale doit conserver bloquée sur son compte à la BCEAO.\n' +
              '• **Double fonction** : (1) assurer un matelas minimal de liquidité et (2) servir d’instrument de politique monétaire pour freiner ou stimuler l’expansion du crédit.\n' +
              '• **Autres limites** : les fuites en billets (clients retirant du cash) et le besoin de se refinancer en monnaie centrale limitent également le crédit.\n' +
              'Exemple : avec un dépôt de $200\\text{ M FCFA}$ et un taux $r = 2\\,\\%$, la banque bloque $200 \\times 0{,}02 = 4\\text{ M FCFA}$ en réserves et dispose de $196\\text{ M FCFA}$ prêtables.',
            keyRule:
              'Augmenter le taux de réserves obligatoires $r$ réduit la liquidité disponible des banques et freine la création monétaire.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'La BCEAO impose un taux de réserves obligatoires de 2 %. Si un client dépose 200 millions FCFA, quelle somme est bloquée en réserves et combien la banque peut-elle prêter au premier tour ?',
              options: [
                '20 millions bloqués ; 180 millions prêtables',
                '4 millions bloqués ; 196 millions prêtables',
                '2 millions bloqués ; 198 millions prêtables',
                '100 millions bloqués ; 100 millions prêtables',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Part bloquée = 200 × 2 % = 4 millions FCFA. Montant prêtable initial = 200 − 4 = 196 millions FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Multiplicateur',
            stepTheme: 'violet',
            stepTitle: 'Le multiplicateur de crédit (m = 1/r) et l’effet en cascade',
            paragraphText:
              'Les crédits accordés par une banque A servent à payer des fournisseurs clients d’une banque B, qui à son tour garde $r$ en réserve et prête $(1-r)$ vers une banque C.\n' +
              '• **Série géométrique infinie** : un dépôt initial $D_0$ engendre une suite de dépôts $D_0 + D_0(1-r) + D_0(1-r)^2 + \\dots = \\frac{D_0}{r}$.\n' +
              '• **Formule du multiplicateur** : $m = \\frac{1}{r}$ (exprimé en pourcentage si multiplié par 100, ou en coefficient pur : pour $r = 2\\,\\% = 0{,}02$, $m = \\frac{1}{0{,}02} = 50$).\n' +
              '• **Sensibilité** : si $r$ passe de $2\\,\\%$ à $5\\,\\%$, le multiplicateur chute de $50$ à $20$.\n' +
              'Exemple : chaque franc de monnaie centrale supplémentaire peut soutenir théoriquement jusqu’à 50 francs de dépôts scripturaux quand $r = 2\\,\\%$.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Circuit en cascade de la création monétaire (multiplicateur de crédit)',
              caption: 'À chaque cycle bancaire, une fraction r est bloquée en réserves obligatoires et (1−r) alimente un nouveau crédit puis un nouveau dépôt.',
              cycle: {
                centerLabel: 'm = 1 / r',
                centerSublabel: 'Effet multiplicateur',
                nodes: [
                  {
                    title: '1. Dépôt reçu (D)',
                    subtitle: 'Nouvelle ressource au passif',
                    color: 'blue',
                  },
                  {
                    title: '2. Réserves (r × D)',
                    subtitle: 'Fraction bloquée à la BCEAO',
                    color: 'orange',
                  },
                  {
                    title: '3. Crédit ((1−r) × D)',
                    subtitle: 'Prêt accordé à un emprunteur',
                    color: 'green',
                  },
                  {
                    title: '4. Paiement & Nouveau Dépôt',
                    subtitle: 'Fonds virés chez une autre banque',
                    color: 'violet',
                  },
                ],
              },
            },
            formula: {
              name: 'Multiplicateur monétaire / de crédit',
              formula: 'm = \\frac{1}{r}',
              note: 'Plus le taux de réserves obligatoires r est faible, plus le multiplicateur m est grand.',
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Si le taux de réserves obligatoires imposé par la banque centrale est de r = 2 % (0,02), quelle est la valeur du multiplicateur monétaire m ?',
              options: ['2', '20', '50', '100'],
              correctAnswerIndex: 2,
              explanation:
                'm = 1 / r = 1 / 0,02 = 50.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Capacité maximale',
            stepTheme: 'green',
            stepTitle: 'Calculer la capacité maximale de création de crédit C_max',
            paragraphText:
              'Il faut bien distinguer la masse monétaire totale finale (dépôt initial inclus) et le volume total de **nouveaux crédits** créés par le système bancaire.\n' +
              '• **Dépôts totaux finaux** : $D_{\\text{total}} = D_0 \\times m = \\frac{D_0}{r}$.\n' +
              '• **Capacité maximale de création de crédit** : $C_{\\max} = D_0 \\times (1 - r) \\times m = D_{\\text{total}} - D_0$.\n' +
              '• **Vérification arithmétique** : avec $D_0 = 200\\text{ M}$, $r = 2\\,\\%$ et $m = 50$, le premier prêt vaut $196\\text{ M}$ ; la somme de tous les crédits successifs vaut $196 \\times 50 = 9\\,800\\text{ M FCFA}$ ($9{,}8\\text{ Md}$), et $200 + 9\\,800 = 10\\,000\\text{ M}$ de dépôts totaux.\n' +
              'Exemple : au-delà de $9\\,800\\text{ M}$, la totalité des $200\\text{ M}$ initiaux est absorbée par les réserves obligatoires ($2\\,\\% \\times 10\\,000 = 200\\text{ M}$).',
            formula: {
              name: 'Capacité maximale de création de crédit',
              formula: 'C_{\\max} = D_0 \\times (1 - r) \\times m = \\frac{D_0 (1 - r)}{r}',
              note: 'S’arrête lorsque la somme des réserves obligatoires égale le dépôt initial D_0.',
            },
            konanTip:
              'Vérifie toujours ton calcul avec l’astuce des réserves finales : $r \\times \\text{Dépôts totaux} = D_0$. Ici $2\\,\\% \\times 10\\,000\\text{ M} = 200\\text{ M}$ : le compte est bon !',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'À partir d’un dépôt initial de 200 millions FCFA avec un taux de réserves obligatoires de 2 % (multiplicateur m = 50), quelle est la capacité maximale de création de crédit dans tout le système bancaire ?',
              options: [
                '400 millions FCFA',
                '4 000 millions FCFA',
                '9 800 millions FCFA',
                '10 200 millions FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'C_max = D_0 × (1 − r) × m = 200 × 0,98 × 50 = 196 × 50 = 9 800 millions FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Destruction monétaire',
            stepTheme: 'orange',
            stepTitle: 'Le remboursement d’un prêt entraîne une destruction monétaire',
            paragraphText:
              'La création monétaire est un processus symétrique : la monnaie née d’un crédit disparaît lorsqu’il est remboursé.\n' +
              '• **Mécanisme comptable inverse** : quand l’emprunteur rembourse 10 millions FCFA de capital, la banque débite son compte de dépôt (**−10 M au Passif**) et annule sa créance (**−10 M à l’Actif**).\n' +
              '• **Évolution de la masse monétaire** : la masse monétaire augmente si le flux de nouveaux crédits dépasse les remboursements, et se contracte dans le cas contraire.\n' +
              '• **Distinction capital vs intérêts** : seul le remboursement du **capital principal** détruit de la monnaie ; les intérêts versés restent en circulation sous forme de revenus bancaires (salaires, dividendes, impôts).\n' +
              'Exemple : en période de récession, si les ménages remboursent leurs prêts plus vite que les banques n’en accordent de nouveaux, l’économie souffre d’une contraction monétaire.',
            keyRule:
              'Octroi de crédit = **création monétaire** ; remboursement du principal = **destruction monétaire**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Que se passe-t-il sur le plan monétaire lorsqu’un emprunteur rembourse intégralement le capital de son crédit bancaire ?',
              options: [
                'Une nouvelle quantité équivalente de monnaie scripturale est créée',
                'Une destruction monétaire équivalente s’opère car le dépôt et la créance s’annulent au bilan',
                'La BCEAO imprime aussitôt le double en billets',
                'Les fonds propres de la banque tombent à zéro',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le remboursement du principal réduit simultanément les dépôts au passif et les crédits à l’actif : c’est une destruction de monnaie scripturale.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Simulation : impact d’un relèvement du taux de réserves obligatoires',
            paragraphText:
              'Supposons que la banque centrale relève le taux de réserves obligatoires de $r_1 = 2\\,\\%$ à $r_2 = 5\\,\\%$ pour freiner une surchauffe du crédit, sur un dépôt initial $D_0 = 500\\text{ M FCFA}$.\n' +
              '• **Avant relèvement ($r_1 = 2\\,\\%$)** : $m_1 = \\frac{1}{0{,}02} = 50$ ; $C_{\\max,1} = 500 \\times 0{,}98 \\times 50 = 24\\,500\\text{ M FCFA}$.\n' +
              '• **Après relèvement ($r_2 = 5\\,\\%$)** : $m_2 = \\frac{1}{0{,}05} = 20$ ; $C_{\\max,2} = 500 \\times 0{,}95 \\times 20 = 9\\,500\\text{ M FCFA}$.\n' +
              '• **Effet net** : un relèvement de seulement 3 points de réserves obligatoires réduit la capacité maximale de création de crédit de $15\\,000\\text{ M FCFA}$ (plus de 61 % de contraction potentielle).',
            konanTip:
              'Retiens cet effet amplificateur : une petite variation de $r$ provoque une énorme variation du multiplicateur $1/r$ !',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Si la banque centrale fait passer le taux de réserves obligatoires de 2 % à 5 %, comment évolue le multiplicateur de crédit m = 1/r ?',
              options: [
                'Il augmente de 20 à 50',
                'Il passe de 50 à 20, réduisant fortement la capacité de création de crédit',
                'Il reste constant à 50',
                'Il devient nul',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour r = 2 %, m = 1/0,02 = 50. Pour r = 5 %, m = 1/0,05 = 20 : la hausse des réserves obligatoires contracte fortement le multiplicateur.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_banque_ch3_p2',
        order: 2,
        title: 'Structure du bilan bancaire (Actif / Passif) et comptabilité en partie double',
        summary:
          'Composition de l’Actif (trésorerie, crédits, titres, immobilisations) et du Passif (dépôts, emprunts interbancaires/obligataires, fonds propres), équilibre comptable et écriture d’un crédit.',
        conceptExplanation:
          'Le bilan d’une banque photographie son patrimoine à une date donnée selon le principe de la **comptabilité en partie double** : chaque flux financier a une origine (ressource au Passif) et une utilisation (emploi à l’Actif), d’où l’égalité mécanique $\\text{Total Actif} = \\text{Total Passif}$.\n\n' +
          '1. **ACTIF (Emplois — ce que la banque possède ou ce qu’on lui doit)** :\n' +
          '• **Liquidités / Trésorerie & Réserves** : encaisse en billets et avoirs disponibles auprès de la BCEAO.\n' +
          '• **Crédits (Prêts à la clientèle & découverts accordés)** : créances sur les ménages, entreprises et État.\n' +
          '• **Titres financiers** : actions, obligations, bons du Trésor détenus en portefeuille.\n' +
          '• **Actifs immobilisés** : terrains, immeubles d’agences, serveurs informatiques, brevets.\n\n' +
          '2. **PASSIF (Ressources — d’où vient l’argent et ce que la banque doit)** :\n' +
          '• **Dépôts de la clientèle** : ressource majeure, exigible à vue ou à terme.\n' +
          '• **Dettes financières** : emprunts sur le marché interbancaire, découverts reçus d’autres banques, emprunts obligataires.\n' +
          '• **Fonds propres (Capitaux propres)** : capital social apporté par les actionnaires, réserves accumulées et résultat net.',
        formulas: [
          {
            name: 'Équilibre comptable du bilan bancaire',
            formula: '\\text{Total Actif (Emplois)} = \\text{Total Passif (Ressources)}',
            note: 'Tout nouvel actif (ex. crédit accordé) trouve sa contrepartie au passif (ex. dépôt créé ou emprunt).',
          },
        ],
        keyRule:
          'À l’Actif figurent **ce que la banque détient et les crédits qu’elle accorde** (emplois) ; au Passif figurent **les dépôts collectés, les emprunts contractés et les capitaux propres** (ressources).',
        workedExample: {
          title: 'Construire un bilan bancaire et enregistrer un nouveau crédit',
          statement:
            'Une banque présente : Liquidité 10 M, Capitaux propres 5 M, Crédits accordés 10 M, Emprunts interbancaires 5 M, Dépôts clientèle 15 M, Actions détenues 8 M, Découvert reçu d’une banque 5 M, Terrain 2 M. Dressez le bilan initial puis le nouveau bilan après l’octroi d’un crédit de 100 000 FCFA financé par dépôt.',
          methodSteps: [
            'Classer l’Actif : Liquidité (10 M) + Crédits (10 M) + Actions (8 M) + Terrain (2 M) = 30 M FCFA.',
            'Classer le Passif : Dépôts (15 M) + Emprunts interbancaires (5 M) + Découvert bancaire reçu (5 M) + Capitaux propres (5 M) = 30 M FCFA. Égalité Actif = Passif = 30 M vérifiée.',
            'Enregistrer le nouveau crédit de 0,1 M (100 000 FCFA) financé par dépôt : Crédits à l’Actif passe de 10 M à 10,1 M ; Dépôts au Passif passe de 15 M à 15,1 M.',
            'Nouveau Total Bilan : Actif = 30,1 M FCFA = Passif.',
          ],
          conclusion:
            'Bilan initial équilibré à 30 M FCFA ; après création monétaire du nouveau crédit, le bilan s’équilibre à 30,1 M FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Comptabilité double',
            stepTheme: 'blue',
            stepTitle: 'Principe de la partie double : Actif (Emplois) = Passif (Ressources)',
            paragraphText:
              'La lecture d’un bilan bancaire paraît parfois contre-intuitive pour un débutant car les dépôts des clients sont des dettes pour la banque, tandis que les crédits sont des actifs.\n' +
              '• **Colonne de gauche — ACTIF (Emplois)** : indique *où* l’argent a été utilisé (trésorerie, prêts consentis, titres achetés, immeubles).\n' +
              '• **Colonne de droite — PASSIF (Ressources)** : indique *d’où* vient l’argent (épargne déposée par les clients, emprunts auprès d’autres banques, capital des actionnaires).\n' +
              '• **Égalité permanente** : grâce à la partie double, $\\text{Total Actif} = \\text{Total Passif}$ est toujours strictement vérifiée, même en cas de bénéfice ou de perte.\n' +
              'Exemple : si des actionnaires apportent 800 000 FCFA de capital déposés en trésorerie, +800 000 s’inscrivent en Capitaux propres (Passif) et +800 000 en Liquidités (Actif).',
            keyRule:
              'Un **dépôt client** est une **dette** de la banque envers le client (donc au **Passif**) ; un **crédit accordé** est une **créance** détenue par la banque (donc à l’**Actif**).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Dans le bilan d’une banque commerciale, pourquoi les dépôts de la clientèle figurent-ils au PASSIF et les crédits accordés à l’ACTIF ?',
              options: [
                'Parce que la banque devra restituer les dépôts aux clients (dette/ressource), tandis que les crédits sont des créances que les clients lui doivent (emploi/patrimoine)',
                'Parce que les dépôts constituent une perte comptable immédiate',
                'Par erreur historique depuis la banque de Venise',
                'Parce que les crédits ne sont jamais remboursés',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Au passif figurent les ressources dues aux déposants, créanciers et actionnaires ; à l’actif figurent les créances (crédits), liquidités, titres et immobilisations détenus par la banque.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Postes d’Actif',
            stepTheme: 'blue',
            stepTitle: 'Les quatre rubriques de l’Actif bancaire',
            paragraphText:
              'L’Actif regroupe tout le patrimoine de la banque, classé généralement du plus liquide (ou interbancaire) au moins liquide (immobilisations).\n' +
              '• **Liquidités / Trésorerie & Réserves** : billets en caisse et avoirs sur le compte de règlement à la BCEAO.\n' +
              '• **Prêts et créances sur la clientèle** : crédits d’exploitation, d’investissement, crédits immobiliers et découverts accordés aux clients (poste principal d’une banque commerciale).\n' +
              '• **Titres de placement et de participation** : bons du Trésor, obligations d’État ou d’entreprises, actions détenues.\n' +
              '• **Actifs immobilisés** : terrains, sièges sociaux, agences, équipements informatiques et logiciels.\n' +
              'Exemple : une banque détenant 10 M en liquidités, 10 M en crédits, 8 M en actions et 2 M en terrain totalise 30 M FCFA à l’Actif.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants d’une banque, lequel appartient exclusivement à l’ACTIF du bilan ?',
              options: [
                'Les dépôts à vue des particuliers',
                'Le capital social apporté par les actionnaires',
                'Les bons du Trésor et actions détenus par la banque ainsi que les crédits accordés aux clients',
                'Les emprunts obligataires émis par la banque pour se financer',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les titres acquis (bons du Trésor, actions) et les crédits accordés aux clients sont des emplois/avoirs de la banque, donc inscrits à l’Actif.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Postes de Passif',
            stepTheme: 'blue',
            stepTitle: 'Les trois blocs du Passif bancaire et le bilan équilibré',
            paragraphText:
              'Le Passif retrace l’origine des financements qui ont permis à la banque d’acquérir ses actifs.\n' +
              '• **Dépôts de la clientèle** : comptes courants, comptes d’épargne et dépôts à terme (généralement 65 % à 80 % du passif d’une banque de détail).\n' +
              '• **Dettes interbancaires et obligataires** : emprunts auprès d’autres banques, découverts obtenus sur le marché monétaire, emprunts obligataires émis par la banque.\n' +
              '• **Fonds propres** : capital social, réserves légales et résultat net (matelas de sécurité absorbant d’éventuelles pertes).\n' +
              'Exemple : avec 15 M de dépôts, 5 M d’emprunts interbancaires, 5 M de découvert reçu et 5 M de capitaux propres, le Passif vaut exactement 30 M FCFA, équilibrant les 30 M d’Actif.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Bilan comptable simplifié d’une banque commerciale (en millions FCFA)',
              caption: 'Illustration exacte de l’équilibre Actif (Emplois) = Passif (Ressources) = 30 M FCFA.',
              tableData: {
                headers: ['ACTIF (Emplois)', 'Montant (M)', 'PASSIF (Ressources)', 'Montant (M)'],
                rows: [
                  ['Liquidités / Trésorerie', '10', 'Dépôts de la clientèle', '15'],
                  ['Crédits à la clientèle', '10', 'Emprunts interbancaires', '5'],
                  ['Titres (Actions / Obligations)', '8', 'Découvert bancaire reçu', '5'],
                  ['Actifs immobilisés (Terrain)', '2', 'Capitaux propres (Fonds propres)', '5'],
                  ['TOTAL ACTIF', '30', 'TOTAL PASSIF', '30'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Une banque possède à l’actif : Liquidités 10 M, Crédits 10 M, Actions 8 M, Terrain 2 M. Au passif : Dépôts 15 M, Emprunts interbancaires 5 M, Capitaux propres 5 M et un poste manquant de Dettes financières. Quel est le montant du poste manquant ?',
              options: ['2 millions FCFA', '5 millions FCFA', '10 millions FCFA', '15 millions FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'Total Actif = 10 + 10 + 8 + 2 = 30 M. Passif connu = 15 + 5 + 5 = 25 M. Par équilibre Actif = Passif, le poste manquant vaut 30 − 25 = 5 M FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Écriture dynamique',
            stepTheme: 'green',
            stepTitle: 'Variation du bilan lors de l’octroi d’un crédit financé par dépôt',
            paragraphText:
              'Voyons concrètement comment le bilan équilibré à 30 000 000 FCFA évolue lorsqu’une banque accorde un nouveau crédit.\n' +
              '• **Opération** : la banque accorde un prêt de 100 000 FCFA (0,1 M) à un client en créditant son compte de dépôt dans la même banque.\n' +
              '• **Impact à l’Actif** : le poste *Crédits à la clientèle* passe de 10 000 000 à **10 100 000 FCFA** (+100 000).\n' +
              '• **Impact au Passif** : le poste *Dépôts de la clientèle* passe de 15 000 000 à **15 100 000 FCFA** (+100 000).\n' +
              '• **Nouvel équilibre** : Total Actif = Total Passif = **30 100 000 FCFA** — le bilan gonfle par création monétaire !',
            konanTip:
              'Retiens que l’octroi d’un crédit crédité sur compte augmente **les deux côtés du bilan** du même montant (et ne diminue pas la caisse tant que le client n’effectue pas de retrait externe).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Si la banque dont le bilan est équilibré à 30 000 000 FCFA (10 M de crédits, 15 M de dépôts) octroie un nouveau crédit de 100 000 FCFA versé sur le compte de dépôt du client, quel devient le total du bilan ?',
              options: [
                '29 900 000 FCFA',
                '30 000 000 FCFA (inchangé)',
                '30 100 000 FCFA (Crédits = 10,1 M et Dépôts = 15,1 M)',
                '30 200 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le crédit accroît l’Actif (Crédits : 10,1 M) et crée un dépôt équivalent au Passif (Dépôts : 15,1 M), portant le total du bilan à 30 100 000 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Équilibre sans dépôt',
            stepTheme: 'green',
            stepTitle: 'Financer un crédit par emprunt interbancaire et réserves obligatoires',
            paragraphText:
              'Une banque qui démarre sans dépôts clientèle peut tout de même prêter en mobilisant des capitaux propres et des emprunts financiers.\n' +
              '• **Exemple chiffré** : une entité B accorde un prêt de **10 000 000 FCFA** à une entreprise E et conserve **1 000 000 FCFA** en réserves (Total Actif = **11 000 000 FCFA**).\n' +
              '• **Ressources au Passif (0 dépôt)** : apport des actionnaires = 800 000 FCFA ; emprunt auprès des autres banques = 7 000 000 FCFA ; emprunt obligataire = 1 200 000 FCFA ; soit 9 000 000 FCFA.\n' +
              '• **Équilibrage** : pour atteindre 11 000 000 FCFA au Passif, il manque 2 000 000 FCFA (par ex. refinancement complémentaire BCEAO ou dépôt à terme initial).\n' +
              'Exemple : ce schéma montre que les ressources non-dépôts (fonds propres + dettes interbancaires/obligataires) jouent un rôle crucial en banque de financement.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Une banque accorde un prêt de 10 000 000 FCFA et détient 1 000 000 FCFA de réserves (Actif = 11 000 000 FCFA). Au Passif, elle a 800 000 FCFA de capital, 7 000 000 FCFA d’emprunt interbancaire et 1 200 000 FCFA d’emprunt obligataire. Quel complément de ressource manque-t-il pour équilibrer le bilan ?',
              options: ['500 000 FCFA', '1 000 000 FCFA', '2 000 000 FCFA', '3 000 000 FCFA'],
              correctAnswerIndex: 2,
              explanation:
                'Actif total = 10 000 000 + 1 000 000 = 11 000 000 FCFA. Passif recensé = 800 000 + 7 000 000 + 1 200 000 = 9 000 000 FCFA. Il manque 2 000 000 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'slate',
            stepTitle: 'Bilan après collecte de 5 dépôts et octroi d’un crédit de 800 000 FCFA',
            paragraphText:
              'Cinq clients déposent chacun $200\\,000\\text{ FCFA}$ en espèces à la banque : total des dépôts collectés = $5 \\times 200\\,000 = 1\\,000\\,000\\text{ FCFA}$.\n' +
              '• **Étape 1 (Collecte des dépôts)** : Actif = Liquidités ($1\\,000\\,000$) ; Passif = Dépôts clientèle ($1\\,000\\,000$).\n' +
              '• **Étape 2 (Octroi d’un crédit de 800 000 FCFA versé en espèces sur ces liquidités)** : les Liquidités restantes en caisse passent à $1\\,000\\,000 - 800\\,000 = 200\\,000\\text{ FCFA}$, et le poste *Crédits accordés* s’élève à $800\\,000\\text{ FCFA}$.\n' +
              '• **Vérification du bilan** : Actif = Liquidités ($200\\,000$) + Crédits ($800\\,000$) = **$1\\,000\\,000\\text{ FCFA}$** = Passif (Dépôts $1\\,000\\,000\\text{ FCFA}$).',
            keyRule:
              'Quand un crédit est décaissé en espèces ou viré hors de la banque, les **Liquidités** baissent à l’Actif exactement du montant du **Crédit** inscrit à l’Actif (le total du bilan reste inchangé).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Une banque reçoit 5 dépôts en espèces de 200 000 FCFA chacun (1 000 000 FCFA) puis décaisse un crédit de 800 000 FCFA en espèces. Quelle est la composition finale de son Actif ?',
              options: [
                'Liquidités = 1 000 000 FCFA et Crédits = 800 000 FCFA',
                'Liquidités = 200 000 FCFA et Crédits = 800 000 FCFA (Total = 1 000 000 FCFA)',
                'Liquidités = 800 000 FCFA et Crédits = 200 000 FCFA',
                'Liquidités = 0 FCFA et Crédits = 1 000 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur 1 000 000 FCFA d’espèces reçues, 800 000 FCFA sont prêtés et sortent de caisse : il reste 200 000 FCFA de liquidités + 800 000 FCFA de créance crédit = 1 000 000 FCFA, égal aux dépôts au Passif.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_banque_ch3_p3',
        order: 3,
        title: 'Risques bancaires, ratios prudentiels (Bâle III / BCEAO) et politique monétaire',
        summary:
          'Risques de crédit, liquidité, marché et opérationnel, exigences de solvabilité Bâle III / UMOA (11,5 %) et impact du taux directeur de la BCEAO.',
        conceptExplanation:
          'L’intermédiation financière expose les banques à quatre risques majeurs que la régulation prudentielle et la politique monétaire cherchent à encadrer.\n\n' +
          '1. **Les quatre grands risques bancaires** :\n' +
          '• **Risque de crédit (ou de contrepartie)** : probabilité qu’un emprunteur ne rembourse pas son prêt à l’échéance (mesuré notamment par le NPL ratio).\n' +
          '• **Risque de liquidité** : incapacité temporaire d’honorer des retraits massifs de dépôts (*bank run*) ou des échéances à court terme faute d’actifs liquides suffisants.\n' +
          '• **Risque de marché** : pertes liées aux variations des **taux d’intérêt**, des **taux de change** (devises) ou des cours boursiers.\n' +
          '• **Risque opérationnel** : pertes résultant de défaillances internes (erreurs humaines, fraude interne, pannes informatiques) ou d’événements externes (cyberattaques, sinistres).\n\n' +
          '2. **Régulation prudentielle (Bâle III et dispositif BCEAO/UMOA)** : impose des fonds propres minimums proportionnés aux risques pondérés (**ratio de solvabilité $\\ge 11{,}5\\,\\%$** dans l’UMOA en régime Bâle II/III) et un ratio de liquidité à court terme (LCR $\\ge 100\\,\\%$).\n\n' +
          '3. **Politique monétaire de la BCEAO** :\n' +
          '• **Politique restrictive** (hausse du taux directeur, ex. de 2,75 % à 4 %) : renchérit le crédit pour freiner l’inflation, au prix d’un ralentissement possible de la croissance.\n' +
          '• **Politique expansionniste** (baisse du taux directeur) : facilite le crédit pour relancer l’investissement et l’activité.',
        formulas: [
          {
            name: 'Ratio de solvabilité bancaire (Fonds propres / Risques pondérés)',
            formula: '\\text{Ratio de solvabilité} = \\frac{\\text{Fonds propres réglementaires}}{\\text{Actifs pondérés par les risques (RWA)}} \\ge 11{,}5\\,\\% \\text{ (UMOA)}',
            note: 'Couvre les risques de crédit, de marché et opérationnels.',
          },
        ],
        keyRule:
          'Distingue les 4 risques : **Crédit** (défaut client), **Liquidité** (manque de cash face aux retraits), **Marché** (taux/change/actions) et **Opérationnel** (fraude, panne IT, erreur humaine, cyberattaque).',
        workedExample: {
          title: 'Analyser une hausse du taux directeur de la BCEAO de 2,75 % à 4 %',
          statement:
            'La BCEAO décide de relever son taux directeur de 2,75 % à 4 %. S’agit-il d’une politique expansionniste ou restrictive ? Quel est son objectif principal et quel impact attendre sur les crédits bancaires, l’inflation et la croissance ?',
          methodSteps: [
            'Nature : le relèvement du taux directeur renchérit le coût de refinancement des banques → **politique monétaire restrictive** (resserrement monétaire).',
            'Objectif principal : maîtriser l’**inflation** (freiner la hausse des prix) et préserver la stabilité monétaire et les réserves de change de l’UEMOA.',
            'Impacts attendus : (1) **Crédits bancaires** : hausse des taux débiteurs des banques et ralentissement du volume de crédits ; (2) **Inflation** : refroidissement de la demande globale freinant la hausse des prix ; (3) **Croissance** : modération à court terme de l’investissement et de la consommation.',
          ],
          conclusion:
            'Politique restrictive visant à contenir l’inflation en freinant le crédit, au prix d’un léger ralentissement conjoncturel de la croissance.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Crédit & Liquidité',
            stepTheme: 'blue',
            stepTitle: 'Risque de crédit vs Risque de liquidité (le danger du bank run)',
            paragraphText:
              'Une banque peut être solvable sur le papier tout en manquant de trésorerie immédiate, ou inversement perdre ses capitaux à cause de mauvais emprunteurs.\n' +
              '• **Risque de crédit** : défaut partiel ou total d’un emprunteur ou d’un émetteur d’obligations (affecte directement le résultat net via les provisions et le NPL).\n' +
              '• **Risque de liquidité** : résulte de la transformation d’échéances (dépôts à vue courts transformés en prêts longs) ; si trop de clients retirent simultanément leur argent (*bank run*), la banque ne peut pas liquider ses crédits à 10 ans instantanément.\n' +
              '• **Couverture** : réserves de liquidité mobilisables (bons du Trésor, ligne BCEAO) et suivi du ratio LCR (*Liquidity Coverage Ratio*).\n' +
              'Exemple : même si ses prêts immobiliers sont sains, une banque sans encaisse suffisante face à une rumeur de faillite subit une crise de liquidité.',
            keyRule:
              'Le **risque de crédit** menace la **solvabilité** (pertes définitives sur prêts) ; le **risque de liquidité** menace la **trésorerie immédiate** (incapacité de payer les retraits).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Une banque possède des crédits sains remboursés normalement sur 10 ans, mais une vague de panique pousse 40 % de ses déposants à réclamer leurs fonds le même jour. À quel risque est-elle confrontée ?',
              options: [
                'Un risque de change',
                'Un risque de liquidité',
                'Un risque opérationnel de panne logicielle',
                'Un excédent d’intermédiation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’incapacité à convertir rapidement des actifs longs en monnaie liquide pour honorer des retraits massifs à court terme constitue le risque de liquidité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Marché & Opérationnel',
            stepTheme: 'blue',
            stepTitle: 'Risque de marché et Risque opérationnel (dont cyber-risque)',
            paragraphText:
              'Au-delà des emprunteurs et des déposants, la banque subit les fluctuations financières externes et les failles de ses propres systèmes.\n' +
              '• **Risque de marché** : pertes dues aux variations des **taux d’intérêt** (ex. banque financée à taux variable qui prête à taux fixe), des **taux de change** (devises EUR/USD) ou du prix des actions/obligations.\n' +
              '• **Risque opérationnel** : pertes liées à l’inadéquation ou défaillance des processus internes, des personnes (erreur de saisie, fraude interne), des systèmes informatiques (panne serveur, cyberattaque) ou d’événements extérieurs (incendie).\n' +
              'Exemple : un virus bloquant les serveurs de compensation monétique ou un employé détournant des fonds relèvent du **risque opérationnel**.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Cartographie des 4 grands risques bancaires',
              caption: 'Classification selon l’origine (financière vs structurelle/opérationnelle) et les instruments de maîtrise.',
              matrix2x2: {
                topAxis: ['Risques de bilan & contrepartie', 'Risques de prix & d’exécution'],
                leftAxis: ['Facteur principal', 'Couverture & Ratio'],
                topLeft: {
                  title: 'Risque de Crédit & Liquidité',
                  color: 'orange',
                  items: [
                    'Crédit : défaut de remboursement (NPL)',
                    'Liquidité : retraits massifs / transformation',
                  ],
                },
                topRight: {
                  title: 'Risque de Marché & Opérationnel',
                  color: 'violet',
                  items: [
                    'Marché : variations taux, change, titres',
                    'Opérationnel : pannes SI, fraudes, cyberattaques',
                  ],
                },
                bottomLeft: {
                  title: 'Boucliers Crédit / Liquidité',
                  color: 'green',
                  items: [
                    'Scoring, BIC, garanties, provisionnement',
                    'Coussin liquide LCR ≥ 100 % & refinancement BCEAO',
                  ],
                },
                bottomRight: {
                  title: 'Boucliers Marché / Opérationnel',
                  color: 'blue',
                  items: [
                    'Couverture (swaps, options) & limites de position',
                    'Contrôle interne, PCA/PRA, MFA et cybersécurité',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Une panne majeure du système informatique paralyse pendant 48 heures les virements et cartes d’une banque, générant des pertes financières. Dans quelle catégorie classer cet incident ?',
              options: [
                'Risque de marché',
                'Risque opérationnel',
                'Risque de taux de change',
                'Risque d’inflation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les pannes IT, cyberattaques, erreurs humaines et fraudes internes ou externes relèvent du risque opérationnel.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Bâle III & UMOA',
            stepTheme: 'violet',
            stepTitle: 'Normes prudentielles de Bâle III et ratio de solvabilité UMOA (≥ 11,5 %)',
            paragraphText:
              'Pour éviter qu’une faillite bancaire ne contamine toute l’économie (risque systémique), le Comité de Bâle et les autorités de l’UMOA imposent des coussins de sécurité stricts.\n' +
              '• **Accords de Bâle III** : relèvent la qualité et le niveau des fonds propres exigés et introduisent deux ratios de liquidité (LCR à 30 jours et NSFR à 1 an).\n' +
              '• **Ratio de solvabilité dans l’UMOA** : les fonds propres réglementaires doivent couvrir au moins **11,5 %** des risques pondérés (crédit, marché, opérationnel).\n' +
              '• **Pondération des risques (RWA)** : un bon du Trésor UEMOA est pondéré à 0 %, un crédit immobilier résidentiel moins risqué qu’un crédit non garanti.\n' +
              'Exemple : si une banque porte 200 milliards FCFA d’actifs pondérés par les risques, elle doit détenir au minimum $200 \\times 11{,}5\\,\\% = 23\\text{ milliards FCFA}$ de fonds propres réglementaires.',
            formula: {
              name: 'Exigence minimale de solvabilité UMOA',
              formula: '\\text{Fonds Propres} \\ge 11{,}5\\,\\% \\times \\text{Actifs Pondérés par les Risques (RWA)}',
              note: 'Protège les déposants en absorbant les pertes inattendues avant toute défaillance.',
            },
            keyRule:
              'Dans l’espace UMOA (cadre Bâle II/III), le ratio global de solvabilité minimal est fixé à **11,5 %** des risques pondérés.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Une banque de l’UMOA affiche 200 milliards FCFA d’actifs pondérés par les risques (RWA). Quel est le montant minimal de fonds propres réglementaires qu’elle doit détenir pour respecter la norme de solvabilité de 11,5 % ?',
              options: [
                '11,5 milliards FCFA',
                '20 milliards FCFA',
                '23 milliards FCFA',
                '40 milliards FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                '200 milliards × 11,5 % = 23 milliards FCFA de fonds propres réglementaires minimums.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Politique monétaire',
            stepTheme: 'violet',
            stepTitle: 'Politique monétaire restrictive vs expansionniste de la BCEAO',
            paragraphText:
              'La BCEAO pilote le loyer de l’argent à travers son **taux directeur** (taux auquel elle prête la liquidité aux banques commerciales).\n' +
              '• **Politique restrictive (hausse du taux directeur)** : rend le refinancement plus cher pour les banques → elles remontent les taux des crédits → moins d’emprunts et de consommation → ralentissement de l’**inflation**, mais frein temporaire à la croissance.\n' +
              '• **Politique expansionniste ou accommodante (baisse du taux directeur)** : rend le refinancement bon marché → baisse des taux de crédit → relance de l’investissement des PME et de la croissance économique.\n' +
              'Exemple : en période de flambée des prix alimentaires et énergétiques, la BCEAO remonte son taux directeur pour ancrer les anticipations d’inflation.',
            konanTip:
              'Mémo rapide : **Hausse taux = Restrictive** (frein à l’inflation et au crédit) ; **Baisse taux = Expansionniste** (relance du crédit et de la croissance).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Lorsqu’une banque centrale décide d’abaisser son taux directeur de 4,5 % à 3 %, quel est l’objectif principal de cette politique monétaire ?',
              options: [
                'Freiner brutalement les crédits et provoquer une récession',
                'Mener une politique expansionniste afin de réduire le coût du crédit, stimuler l’investissement et soutenir la croissance',
                'Interdire les dépôts à terme dans les banques commerciales',
                'Doubler le taux d’imposition des sociétés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La baisse du taux directeur caractérise une politique expansionniste (accommodante) destinée à alléger le coût du crédit et relancer l’activité économique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Étude de cas BCEAO',
            stepTheme: 'green',
            stepTitle: 'Analyser une hausse du taux directeur de 2,75 % à 4 %',
            paragraphText:
              'Analysons étape par étape la décision de la BCEAO de relever son taux directeur de **2,75 % à 4 %** (+125 points de base).\n' +
              '• **Qualification** : politique monétaire **restrictive**.\n' +
              '• **Objectif prioritaire** : juguler l’**inflation** et défendre la valeur externe du franc CFA (réserves de change).\n' +
              '• **Transmission aux variables économiques** : (1) **Crédits bancaires** : baisse de la demande et sélection plus stricte face à des taux plus chers ; (2) **Inflation** : baisse progressive des tensions sur les prix ; (3) **Croissance** : tassement à court terme du PIB en raison du coût accru du financement des entreprises.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'La BCEAO augmente son taux directeur de 2,75 % à 4 %. Quel triplet d’effets attendus est économiquement cohérent ?',
              options: [
                'Politique expansionniste → explosion du crédit, hausse de l’inflation, baisse du coût des emprunts',
                'Politique restrictive → ralentissement des crédits bancaires, maîtrise de l’inflation, modération de la croissance à court terme',
                'Politique neutre → aucun impact sur les banques ni sur les prix',
                'Politique budgétaire → suppression de la TVA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le relèvement du taux directeur est une politique restrictive visant à contenir l’inflation en freinant le crédit, ce qui modère temporairement la croissance.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Diagnostic risques',
            stepTheme: 'slate',
            stepTitle: 'Qualifier quatre incidents réels au sein d’une banque commerciale',
            paragraphText:
              'Un comité des risques examine quatre événements survenus au trimestre dernier :\n' +
              '• **Incident 1** : dépréciation de 15 % d’un portefeuille d’obligations suite à une remontée des taux → **Risque de marché (risque de taux)**.\n' +
              '• **Incident 2** : défaut simultané de trois gros clients importateurs → **Risque de crédit**.\n' +
              '• **Incident 3** : ruée de retraits en agence obligeant à emprunter en urgence au jour le jour à taux élevé → **Risque de liquidité**.\n' +
              '• **Incident 4** : détournement informatique effectué par un prestataire externe via une faille de sécurité → **Risque opérationnel**.',
            keyRule:
              'Savoir rattacher chaque incident bancaire à son risque exact (**Crédit / Liquidité / Marché / Opérationnel**) dicte immédiatement l’outil de prévention adapté.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Une banque subit une perte importante parce que le dollar s’est fortement déprécié par rapport à ses créances libellées en USD non couvertes. De quel risque s’agit-il ?',
              options: [
                'Risque de marché (risque de change)',
                'Risque opérationnel interne',
                'Risque de liquidité immédiate',
                'Risque de sous-assurance incendie',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les pertes engendrées par les variations de devises (change), de taux d’intérêt ou de cours boursiers constituent le risque de marché.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : TRANSFORMATION DIGITALE, FINTECHS, MOBILE MONEY ET RÉGULATION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch4',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ENTD L1 — Banque',
    title: 'Chapitre 4 — Transformation digitale, Fintechs, Mobile Money et conformité',
    summary:
      'Banque digitale et néobanques, Open Banking et API, Fintechs (BaaS, coopétition), Mobile Money et interopérabilité UEMOA (PI-SPI), blockchain/CBDC, LBC/FT, e-KYC, Commission Bancaire et cybersécurité.',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_banque_ch4_p1',
        order: 1,
        title: 'Banque digitale, néobanques, Open Banking (API) et modèle Fintech',
        summary:
          'Comparaison banque traditionnelle vs néobanque/Fintech, Open Banking par API, typologie des Fintechs et modèles de coopétition (BaaS, marque blanche).',
        conceptExplanation:
          'La révolution numérique transforme la distribution bancaire en remplaçant les lourds réseaux d’agences par des architectures ouvertes et des parcours 100 % mobiles.\n\n' +
          '1. **Banque digitale vs Néobanque** : les banques traditionnelles se digitalisent (*e-banking*, applications mobiles, agences « phygitales »), tandis que les **néobanques** (acteurs nativement numériques sans agences) misent sur l’ouverture de compte en 5 minutes, une UX fluide et des frais réduits.\n\n' +
          '2. **Open Banking et API** : l’*Open Banking* consiste pour une banque à ouvrir de façon sécurisée (via des **API** — *Application Programming Interfaces*) l’accès aux données de comptes et à l’initiation de paiements à des tiers agréés, avec le consentement du client.\n\n' +
          '3. **Fintechs et coopétition** : les Fintechs couvrent paiements, néobanques, financement participatif (*crowdfunding*), scoring alternatif et gestion d’épargne. Plutôt qu’une guerre frontale, banques et Fintechs adoptent souvent la **coopétition** via le **BaaS (*Banking as a Service*)** : la banque fournit sa licence, sa conformité et son bilan en marque blanche à la Fintech qui gère l’interface client.',
        formulas: [
          {
            name: 'Modèle Banking as a Service (BaaS)',
            formula: '\\text{Licence \\& Bilan Banque} + \\text{API} + \\text{Interface UX Fintech} = \\text{Service bancaire digital}',
            note: 'Permet aux néobanques et super-apps de lancer rapidement des comptes et cartes conformes.',
          },
        ],
        keyRule:
          'L’**Open Banking** repose sur des **API sécurisées** permettant le partage de données bancaires et l’initiation de paiements avec le **consentement explicite** du client.',
        workedExample: {
          title: 'Structurer un partenariat Open Banking / BaaS en Côte d’Ivoire',
          statement:
            'Une Fintech ivoirienne possède une excellente application de gestion budgétaire pour jeunes actifs, mais ne détient pas de licence bancaire complète. Comment peut-elle légalement émettre des cartes Visa et héberger des comptes ?',
          methodSteps: [
            'Éviter d’exercer illégalement l’activité bancaire sans agrément (violation de l’article 4 de la loi bancaire UEMOA).',
            'Nouer un partenariat **BaaS (Banking as a Service)** avec une banque commerciale agréée dans l’UEMOA.',
            'Connecter l’application mobile aux systèmes de la banque via des **API** sécurisées : la banque porte les dépôts, émet les cartes et supervise la conformité LBC/FT ; la Fintech gère l’acquisition et l’expérience utilisateur.',
          ],
          conclusion:
            'La coopétition via BaaS/API combine la rapidité d’innovation de la Fintech et la solidité réglementaire de la banque agréée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Banque digitale',
            stepTheme: 'blue',
            stepTitle: 'Du guichet physique à la banque omnicanale et 100 % mobile',
            paragraphText:
              'La transformation digitale a profondément modifié le rapport entre le client et son conseiller bancaire.\n' +
              '• **Banque en ligne (e-banking) et mobile banking** : consultation du solde, virements, téléchargement de RIB et blocage de carte 24h/24 depuis un smartphone.\n' +
              '• **Modèle omnicanal / « phygital »** : combine autonomie digitale pour les opérations simples du quotidien et accompagnement humain en agence pour les projets complexes (crédit immobilier, financement PME).\n' +
              '• **Gain économique** : un virement réalisé sur application mobile coûte une fraction infime du coût d’une opération traitée au guichet physique, abaissant le coefficient d’exploitation.\n' +
              'Exemple : un client n’a plus besoin de faire la queue en agence pour éditer un relevé d’identité bancaire ou faire opposition à sa carte.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quel avantage opérationnel majeur la digitalisation des opérations courantes (virements, relevés, oppositions) procure-t-elle à une banque commerciale ?',
              options: [
                'Elle supprime l’obligation de respecter le ratio de solvabilité',
                'Elle réduit les coûts unitaires de traitement et améliore la disponibilité 24h/24 tout en abaissant le coefficient d’exploitation',
                'Elle augmente le nombre d’erreurs de saisie manuelle au guichet',
                'Elle rend inutiles les fonds propres',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le self-service digital fluidifie l’expérience client 24h/24 et réduit fortement les charges de traitement par opération.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Comparatif',
            stepTheme: 'violet',
            stepTitle: 'Banque traditionnelle vs Néobanque / Fintech : forces et limites',
            paragraphText:
              'Les banques traditionnelles et les néobanques/Fintechs présentent des modèles économiques complémentaires plutôt que strictement interchangeables.\n' +
              '• **Banques traditionnelles** : disposent d’un agrément bancaire complet, d’une large capacité de bilan pour accorder de gros crédits (immobilier, entreprises), d’un réseau d’agences et d’une confiance historique, mais supportent des coûts fixes lourds et des systèmes informatiques parfois anciens (*legacy*).\n' +
              '• **Néobanques / Fintechs** : n’ont pas d’agences physiques, offrent une ouverture de compte en quelques minutes, une tarification transparente et une ergonomie mobile supérieure, mais leur gamme de crédits longs et leur rentabilité initiale sont plus limitées.\n' +
              'Exemple : en Côte d’Ivoire, de nombreux étudiants utilisent une néobanque mobile pour leurs achats en ligne tout en gardant un compte bancaire classique pour recevoir un prêt d’équipement.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparaison : Banque traditionnelle vs Néobanque / Fintech',
              caption: 'Positionnement structurel, agrément, offre de produits et structure de coûts.',
              tableData: {
                headers: ['Critère', 'Banque traditionnelle', 'Néobanque / Fintech'],
                rows: [
                  ['Statut juridique', 'Agrément bancaire complet (Art. 4 UEMOA)', 'Étab. paiement / EME ou partenariat BaaS'],
                  ['Réseau physique', 'Agences physiques + canaux digitaux', '100 % mobile / sans agence (ou points partenaires)'],
                  ['Gamme de crédit', 'Complète (CT, MLT, immobilier, PME)', 'Limitée (microcrédit, avance, paiement) ou absente'],
                  ['Structure de coûts', 'Coûts fixes élevés (agences, SI legacy)', 'Coûts fixes faibles, architecture cloud agile'],
                  ['Point fort client', 'Conseil complexe, gros dépôts & financements', 'Ouverture rapide, UX fluide, frais transparents'],
                ],
              },
            },
            keyRule:
              'Les **banques traditionnelles** dominent sur les **crédits complexes et gros dépôts** grâce à leur bilan, tandis que les **néobanques** excellent sur la **rapidité d’usage et les coûts fixes réduits**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle limite structurelle caractérise généralement une néobanque pure par rapport à une grande banque commerciale traditionnelle ?',
              options: [
                'L’impossibilité de proposer une application mobile',
                'Une offre plus restreinte en crédits longs complexes (immobilier, grands projets PME) et une dépendance fréquente à une banque partenaire',
                'Des délais de plusieurs semaines pour ouvrir un simple compte',
                'L’obligation d’entretenir des centaines d’agences en marbre',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans bilan massif ni réseau de chargés d’affaires, les néobanques excellent sur les paiements et la gestion quotidienne mais restent moins armées sur les financements longs complexes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Open Banking',
            stepTheme: 'blue',
            stepTitle: 'L’Open Banking et le rôle technique des API bancaires',
            paragraphText:
              'Autrefois fermées sur leurs systèmes centraux, les banques s’ouvrent désormais à un écosystème de partenaires via des interfaces normalisées.\n' +
              '• **Définition de l’Open Banking** : modèle d’ouverture des données et services bancaires à des prestataires tiers agréés grâce à des **API (*Application Programming Interfaces*)** sécurisées.\n' +
              '• **Consentement du client** : aucun accès aux comptes ne peut avoir lieu sans autorisation explicite et révocable du titulaire.\n' +
              '• **Cas d’usage concrets** : agrégation multi-banques dans une seule appli, initiation directe d’un paiement e-commerce depuis le compte bancaire sans saisir de numéro de carte, ou partage instantané des relevés pour obtenir un scoring de crédit en 2 minutes.\n' +
              'Exemple : un site e-commerce ivoirien intègre une API bancaire permettant au client de valider son paiement directement dans son application bancaire.',
            keyRule:
              'En Open Banking, les **API** permettent d’échanger des données ou d’initier des paiements de manière chiffrée, normalisée et uniquement avec le **consentement du client**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Dans le cadre de l’Open Banking, quel outil technique permet à une application tierce autorisée par le client de consulter de façon sécurisée ses soldes bancaires ou d’initier un paiement ?',
              options: [
                'Un fax envoyé à l’agence',
                'Une API (Application Programming Interface) sécurisée',
                'La remise physique des billets au coursier',
                'Le numéro imprimé au dos de la carte communiqué en clair par SMS',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les API standardisées et chiffrées constituent le pont technique de l’Open Banking, garantissant la sécurité et la maîtrise du consentement client.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Fintechs',
            stepTheme: 'blue',
            stepTitle: 'Typologie des Fintechs : paiement, crédit alternatif, crowdfunding et RegTech',
            paragraphText:
              'Le terme **Fintech** (*Financial Technology*) désigne les entreprises innovantes utilisant le numérique pour repenser un segment précis de la chaîne de valeur financière.\n' +
              '• **PayTech / Paiement** : portefeuilles mobiles, passerelles de paiement en ligne pour marchands (ex. intégration cartes + Mobile Money).\n' +
              '• **Lending & Scoring alternatif** : octroi rapide de microcrédits en analysant des données alternatives (historique de recharges téléphoniques, factures d’eau/électricité, flux marchands).\n' +
              '• **Crowdfunding (financement participatif)** : plateformes mettant directement en relation porteurs de projets et épargnants (don, prêt, investissement en capital).\n' +
              '• **RegTech** : outils automatisant la conformité réglementaire (vérification d’identité et détection de fraude).\n' +
              'Exemple : une boutique en ligne d’Abidjan utilise un agrégateur PayTech unique pour accepter simultanément Visa, Orange Money, MTN MoMo et Wave.',
            konanTip:
              'Retiens que « Fintech » ne veut pas dire uniquement « néobanque » : cela englobe PayTech, Crowdfunding, Scoring alternatif, InsurTech et RegTech.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Comment une Fintech de crédit alternatif parvient-elle à évaluer la solvabilité d’un micro-entrepreneur qui ne possède aucun bilan comptable certifié ?',
              options: [
                'En tirant au sort les dossiers acceptés',
                'En utilisant des algorithmes de scoring sur données alternatives (flux Mobile Money, historique de factures, régularité des encaissements)',
                'En exigeant obligatoirement une hypothèque sur un immeuble de dix étages',
                'En demandant l’accord unanime de tous les commerçants du quartier par écrit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le scoring alternatif exploite des traces numériques fiables (historique de transactions mobiles, paiements de factures, flux de caisse) pour pallier l’absence de comptabilité formelle.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Coopétition',
            stepTheme: 'violet',
            stepTitle: 'De la confrontation à la coopétition : BaaS et marque blanche',
            paragraphText:
              'Après une phase initiale perçue comme une menace existentielle pour les banques, l’industrie financière a basculé vers des alliances stratégiques gagnant-gagnant.\n' +
              '• **Coopétition** : combinaison de coopération et de compétition entre banques historiques et Fintechs.\n' +
              '• **Banking as a Service (BaaS)** : une banque agréée met son infrastructure réglementaire, ses comptes et ses cartes à disposition d’une Fintech ou d’un acteur non financier (télécom, e-commerce) via API.\n' +
              '• **Intérêt mutuel** : la banque gagne de nouveaux flux et des commissions sans frais d’acquisition lourds ; la Fintech accède immédiatement au marché légal sans attendre des années d’agrément bancaire.\n' +
              'Exemple : plusieurs banques commerciales de l’UEMOA hébergent les comptes de cantonnement des émetteurs de monnaie électronique et des néobanques locales.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Qu’est-ce que le modèle BaaS (Banking as a Service) dans les relations entre banques et Fintechs ?',
              options: [
                'La fermeture définitive de toutes les applications mobiles bancaires',
                'La mise à disposition par une banque agréée de son infrastructure, de ses comptes et de sa conformité via API à des Fintechs ou entreprises tierces',
                'Le remplacement de la BCEAO par une entreprise privée étrangère',
                'L’interdiction faite aux Fintechs d’utiliser Internet',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le BaaS permet à des Fintechs ou marques tierces d’intégrer des services bancaires régulés via API en s’appuyant sur l’agrément d’une banque partenaire.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas stratégique',
            stepTheme: 'slate',
            stepTitle: 'Stratégie digitale d’une banque universelle face à une Fintech',
            paragraphText:
              'Une banque commerciale établie perd des jeunes clients qui préfèrent les frais transparents et l’instantanéité des applications mobiles concurrentes.\n' +
              '• **Erreur à éviter** : bloquer les transferts vers les portefeuilles mobiles ou ignorer le canal smartphone.\n' +
              '• **Stratégie gagnante en 3 axes** : (1) lancer une offre digitale native à ouverture instantanée (e-KYC), (2) connecter ses comptes au Mobile Money via passerelles API *Bank-to-Wallet*, et (3) nouer des partenariats BaaS avec des Fintechs de scoring PME.\n' +
              'Exemple : en intégrant des API d’interopérabilité, la banque capte les dépôts issus du commerce informel et élargit son PNB par le volume.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Face à la montée des néobanques et portefeuilles mobiles, quelle stratégie permet le mieux à une banque commerciale d’élargir sa base de clientèle tout en maîtrisant ses coûts ?',
              options: [
                'Fermer son site web et exiger une présence physique pour toute opération de 1 000 FCFA',
                'Déployer l’ouverture de compte digitale (e-KYC), des passerelles API Bank-to-Wallet et des partenariats Fintech',
                'Supprimer les comptes courants de tous les jeunes de moins de 35 ans',
                'Doubler le prix des cartes de débit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adoption du e-KYC, des passerelles API vers le Mobile Money et de la coopétition Fintech permet de capter une clientèle jeune et d’accroître les flux à faible coût marginal.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_banque_ch4_p2',
        order: 2,
        title: 'Mobile Money, inclusion financière en zone UEMOA et blockchain / CBDC',
        summary:
          'Modèle du Mobile Money en Côte d’Ivoire, passerelles Bank-to-Wallet, interopérabilité régionale (GIM-UEMOA, PI-SPI BCEAO), blockchain et Monnaies Numériques de Banque Centrale (CBDC).',
        conceptExplanation:
          'En Afrique de l’Ouest, la téléphonie mobile a réalisé en une décennie ce que les réseaux d’agences physiques n’avaient pas atteint en cinquante ans : l’**inclusion financière de masse**.\n\n' +
          '1. **Mobile Money en zone UEMOA** : repose sur la **monnaie électronique** (*e-money*), valeur monétaire stockée sous forme électronique (téléphone/USSD ou appli) émise contre remise de fonds d’un montant égal. Les acteurs majeurs en Côte d’Ivoire (Orange Money, MTN MoMo, Moov Money, Wave) s’appuient sur un maillage dense d’**agents agréés** (*cash-in / cash-out*).\n\n' +
          '2. **Passerelles et interopérabilité régionale** : les liaisons *Bank-to-Wallet* et *Wallet-to-Bank* relient comptes bancaires et portefeuilles mobiles. Au niveau régional, **GIM-UEMOA** et le système de paiement instantané interopérable de la BCEAO (**PI-SPI**) permettent à tout compte bancaire, SFD ou portefeuille Mobile Money de transférer de l’argent instantanément d’un acteur à un autre.\n\n' +
          '3. **Blockchain et CBDC (MNBC)** : la **blockchain** offre un registre distribué infalsifiable utile aux paiements transfrontaliers et à la traçabilité via *smart contracts*. Les **CBDC / MNBC** (Monnaies Numériques de Banque Centrale) sont des monnaies numériques officielles émises par une banque centrale, à la différence des cryptomonnaies privées non garanties et très volatiles.',
        formulas: [
          {
            name: 'Garantie d’émission de monnaie électronique (UEMOA)',
            formula: '\\text{Monnaie électronique en circulation} = \\text{Fonds de cantonnement en banque}',
            note: 'Chaque franc mobile émis doit être couvert à 100 % par des dépôts sécurisés dans une banque partenaire.',
          },
        ],
        keyRule:
          'Le **Mobile Money** a propulsé l’inclusion financière en zone UEMOA grâce au réseau d’agents ; l’interopérabilité **PI-SPI (BCEAO)** permet les paiements instantanés entre banques, SFD et portefeuilles mobiles.',
        workedExample: {
          title: 'Parcours d’inclusion financière numérique pour un commerçant informel',
          statement:
            'Une commerçante de vivriers à Yopougon encaisse 80 000 FCFA/jour en espèces sans compte bancaire, et se voit refuser un prêt bancaire faute d’historique financier. Proposez un parcours d’inclusion financière en 3 étapes.',
          methodSteps: [
            'Étape 1 — Encaissement digital : adopter un QR code Mobile Money marchand pour réduire le risque de vol d’espèces et constituer un historique vérifiable des recettes.',
            'Étape 2 — Passerelle & Épargne : relier son portefeuille à un compte d’épargne SFD ou bancaire simplifié via *Wallet-to-Bank* pour sécuriser ses excédents.',
            'Étape 3 — Accès au crédit scoré : utiliser 6 mois d’historique de flux digitaux pour obtenir un microcrédit de trésorerie (scoring alternatif) sans hypothèque foncière.',
          ],
          conclusion:
            'La traçabilité des flux Mobile Money transforme un travailleur informel « invisible » en client bancarisable et finançable.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mobile Money',
            stepTheme: 'blue',
            stepTitle: 'Fonctionnement de la monnaie électronique et des réseaux d’agents en UEMOA',
            paragraphText:
              'En Côte d’Ivoire et dans l’UEMOA, le Mobile Money repose sur un statut réglementé d’**Établissement de Monnaie Électronique (EME)** ou sur un partenariat entre opérateur télécom/fintech et banque.\n' +
              '• **Principe de base** : le client dépose des billets chez un **agent de proximité** (*cash-in*), qui crédite son portefeuille numérique d’un montant exact de monnaie électronique, utilisable par code **USSD** (sans Internet) ou application.\n' +
              '• **Cantonnement prudentiel** : 100 % des fonds reçus du public sont obligatoirement logés sur un compte de cantonnement dans une banque agréée pour garantir le remboursement intégral des utilisateurs.\n' +
              '• **Usages clés** : transferts P2P, paiement de factures (CIE/SODECI), salaires agricoles, paiements marchands.\n' +
              'Exemple : un planteur à Soubré reçoit le paiement de sa récolte de cacao directement sur son téléphone sans parcourir 40 km vers une agence bancaire.',
            keyRule:
              'La monnaie électronique n’est **pas** une création monétaire ex nihilo : chaque unité émise est couverte à 100 % par des fonds déposés en banque.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle règle prudentielle stricte encadre l’émission de monnaie électronique (Mobile Money) dans l’espace UEMOA ?',
              options: [
                'Les émetteurs peuvent créer 50 fois plus de monnaie mobile que les espèces reçues',
                'La monnaie électronique en circulation doit être adossée à 100 % à des fonds cantonnés auprès de banques agréées',
                'Le Mobile Money fonctionne uniquement avec des cartes bancaires en or',
                'Il est interdit d’utiliser le Mobile Money en zone rurale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Contrairement aux crédits bancaires soumis à des réserves fractionnaires, la monnaie électronique est une contrepartie à 100 % des fonds reçus et cantonnés en banque.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Inclusion financière',
            stepTheme: 'violet',
            stepTitle: 'Passerelles Bank-to-Wallet et inclusion des populations non bancarisées',
            paragraphText:
              'L’inclusion financière consiste à offrir à chaque adulte et TPE des services financiers adaptés, abordables et sûrs.\n' +
              '• **Complémentarité banque / mobile** : le compte bancaire apporte la sécurité des gros montants, le crédit long et l’épargne rémunérée ; le portefeuille mobile offre l’accessibilité immédiate à chaque coin de rue.\n' +
              '• **Passerelles *Bank-to-Wallet* et *Wallet-to-Bank*** : permettent de transférer instantanément de l’argent de son compte bancaire vers son mobile (et inversement) sans passer par un guichet.\n' +
              '• **Micro-épargne et nano-crédit** : des produits digitaux permettent d’épargner dès 500 FCFA ou d’emprunter sur 30 jours selon l’historique de transactions.\n' +
              'Exemple : un salarié reçoit sa paie sur son compte bancaire et pousse 50 000 FCFA vers son portefeuille mobile pour ses dépenses hebdomadaires.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Quel est le rôle principal des passerelles techniques « Bank-to-Wallet » et « Wallet-to-Bank » ?',
              options: [
                'Empêcher tout transfert entre une banque et un opérateur mobile',
                'Permettre la circulation fluide et instantanée des fonds entre comptes bancaires et portefeuilles Mobile Money',
                'Remplacer le franc CFA par une monnaie étrangère',
                'Supprimer les comptes d’épargne dans les banques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces passerelles relient le monde bancaire classique et l’écosystème Mobile Money, renforçant l’inclusion et la liquidité des usagers.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Interopérabilité',
            stepTheme: 'blue',
            stepTitle: 'Interopérabilité régionale : GIM-UEMOA et système PI-SPI de la BCEAO',
            paragraphText:
              'Pendant longtemps, les portefeuilles mobiles fonctionnaient en « silos fermés » (difficile d’envoyer directement d’un opérateur A vers un opérateur B ou une banque).\n' +
              '• **GIM-UEMOA** : assure l’interopérabilité des cartes bancaires et guichets automatiques dans les 8 pays de l’Union.\n' +
              '• **PI-SPI (Plateforme Interopérable du Système de Paiement Instantané)** : infrastructure lancée par la BCEAO permettant des virements et paiements **instantanés (24h/24, 7j/7)** entre tous les participants (banques, SFD, émetteurs de monnaie électronique).\n' +
              '• **Bénéfices** : baisse des coûts de transaction, fin de la fragmentation des réseaux et accélération des paiements marchands par QR code unifié.\n' +
              'Exemple : un commerçant doté d’un QR code interopérable accepte indifféremment un client payant depuis sa banque, son SFD ou son Mobile Money.',
            keyRule:
              'Le système **PI-SPI de la BCEAO** unifie les paiements instantanés entre banques, institutions de microfinance (SFD) et acteurs Mobile Money dans toute l’UEMOA.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Quel problème majeur résout la plateforme interopérable PI-SPI pilotée par la BCEAO dans la zone UEMOA ?',
              options: [
                'Elle interdit les paiements par QR code chez les commerçants',
                'Elle brise les silos en permettant des paiements instantanés 24h/24 entre banques, SFD et portefeuilles Mobile Money différents',
                'Elle supprime l’usage du franc CFA au profit du troc',
                'Elle réserve les virements aux seules grandes entreprises cotées',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PI-SPI permet à tout client d’une banque, d’un SFD ou d’un EME de payer ou transférer instantanément vers n’importe quel autre acteur raccordé dans l’UEMOA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Blockchain',
            stepTheme: 'blue',
            stepTitle: 'Blockchain bancaire : registre distribué, smart contracts et virements',
            paragraphText:
              'Au-delà des cryptomonnaies spéculatives, les banques s’intéressent à la technologie sous-jacente de la **blockchain** (*chaîne de blocs*) pour automatiser le règlement-livraison.\n' +
              '• **Registre distribué et immuable** : base de données partagée entre participants où chaque transaction validée est horodatée et quasi infalsifiable.\n' +
              '• **Paiements transfrontaliers** : réduit les chaînes coûteuses de banques correspondantes (*SWIFT*) en accélérant le règlement de plusieurs jours à quelques secondes.\n' +
              '• **Smart contracts (contrats intelligents)** : programmes auto-exécutables déclenchant automatiquement un paiement dès qu’une condition vérifiable est remplie (ex. livraison portuaire validée).\n' +
              'Exemple : en financement du commerce international (*trade finance*), un smart contract libère le paiement à l’exportateur dès la validation numérique du connaissement maritime.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quel intérêt principal présente la technologie blockchain (et les smart contracts) pour les opérations bancaires interbancaires ou internationales ?',
              options: [
                'Augmenter volontairement les délais de virement à deux semaines',
                'Offrir un registre partagé infalsifiable accélérant les règlements transfrontaliers et automatisant l’exécution conditionnelle des contrats',
                'Supprimer toute trace comptable des transactions',
                'Rendre les mots de passe publics à tous les internautes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La blockchain apporte traçabilité immuable, désintermédiation de chaînes correspondantes lentes et automatisation sécurisée via les smart contracts.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'CBDC vs Crypto',
            stepTheme: 'orange',
            stepTitle: 'Monnaies Numériques de Banque Centrale (CBDC) vs cryptomonnaies privées',
            paragraphText:
              'Il est essentiel de ne pas confondre un actif numérique spéculatif privé avec une monnaie numérique émise par une banque centrale.\n' +
              '• **Cryptomonnaies privées (ex. Bitcoin)** : émises de manière décentralisée sans garantie d’État, sans cours légal dans l’UEMOA et sujettes à une volatilité extrême.\n' +
              '• **CBDC / MNBC (*Central Bank Digital Currency*)** : forme numérique de la monnaie officielle ayant cours légal, émise et garantie directement par la **banque centrale** (1 unité numérique = 1 unité fiduciaire).\n' +
              '• **Objectifs des CBDC** : moderniser les règlements interbancaires (CBDC de gros) ou offrir un cash numérique souverain sans risque de faillite d’émetteur privé (CBDC de détail).\n' +
              'Exemple : l’e-Naira au Nigeria illustre les expérimentations africaines de CBDC souveraine.',
            keyRule:
              'Une **CBDC (MNBC)** est une **monnaie légale garantie par la banque centrale** (stable à parité 1:1 avec la devise nationale), à l’opposé d’une cryptomonnaie privée volatile.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle différence fondamentale distingue une Monnaie Numérique de Banque Centrale (CBDC / MNBC) d’une cryptomonnaie privée comme le Bitcoin ?',
              options: [
                'La CBDC est plus volatile que le Bitcoin',
                'La CBDC a cours légal, est émise et garantie à parité 1:1 par la banque centrale souveraine, contrairement au Bitcoin',
                'Le Bitcoin est émis par la BCEAO',
                'La CBDC ne peut fonctionner que sans informatique sur papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CBDC est un passif direct de la banque centrale bénéficiant du cours légal et de la stabilité de la devise officielle, contrairement aux crypto-actifs privés non garantis.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas terrain CI',
            stepTheme: 'slate',
            stepTitle: 'Inclusion financière d’un commerçant : du cash au crédit digital',
            paragraphText:
              'Un tailleur du marché de Treichville encaisse uniquement en espèces et peine à financer l’achat de deux nouvelles machines à coudre (600 000 FCFA).\n' +
              '• **Diagnostic** : absence de fiche de paie et de relevés bancaires → rejeté par les banques classiques.\n' +
              '• **Parcours numérique** : (1) adoption d’un compte marchand Mobile Money pour recevoir les paiements clients et payer ses fournisseurs de tissus ; (2) constitution d’une micro-épargne automatisée chaque semaine ; (3) après 6 mois de flux réguliers, obtention d’un nano/micro-crédit digital via un partenariat Fintech-SFD.\n' +
              '• **Résultat** : transformation du chiffre d’affaires informel en « identité financière » bancarisable.',
            konanTip:
              'Dans les études de cas d’inclusion en Côte d’Ivoire, retiens le triptyque gagnant : **Paiement Mobile → Historique de flux → Micro-épargne & Crédit scoré**.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Comment l’utilisation régulière du Mobile Money aide-t-elle un artisan du secteur informel à obtenir plus tard un financement auprès d’un SFD ou d’une banque ?',
              options: [
                'Elle supprime l’obligation de rembourser le prêt',
                'Elle génère un historique traçable et vérifiable de recettes et de dépenses servant de base au scoring de crédit',
                'Elle permet à l’artisan de fixer lui-même le taux directeur de la BCEAO',
                'Elle transforme automatiquement son atelier en banque d’investissement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La traçabilité des transactions mobiles fournit aux établissements financiers une preuve objective de l’activité et de la capacité de remboursement.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_banque_ch4_p3',
        order: 3,
        title: 'Conformité réglementaire (LBC/FT, KYC), Commission Bancaire et cybersécurité',
        summary:
          'Lutte contre le blanchiment (LBC/FT, 3 phases, CENTIF), KYC et e-KYC, supervision de la Commission Bancaire de l’UMOA, cybermenaces et dispositifs de défense.',
        conceptExplanation:
          'L’innovation bancaire ne peut prospérer sans confiance, sécurité juridique et protection contre la criminalité financière et les cyberattaques.\n\n' +
          '1. **Lutte contre le Blanchiment de Capitaux et le Financement du Terrorisme (LBC/FT)** : le blanchiment vise à dissimuler l’origine illicite de fonds (drogue, corruption, fraude) en trois phases : **placement** (introduction dans le système financier), **empilage/dissimulation** (multiples virements complexes) et **intégration** (réinvestissement dans l’économie légale). Les banques doivent déclarer toute opération suspecte à la **CENTIF** (Cellule Nationale de Traitement des Informations Financières).\n\n' +
          '2. **Connaissance Client — KYC (*Know Your Customer*) et e-KYC** : obligation légale d’identifier et de vérifier le client (pièce d’identité, justificatif de domicile, origine des fonds, bénéficiaire effectif) et de surveiller l’évolution de ses transactions ; l’**e-KYC** réalise cette vérification à distance par biométrie et reconnaissance documentaire.\n\n' +
          '3. **Commission Bancaire de l’UMOA** : organe supranational chargé du contrôle sur pièces et sur place des banques et grands SFD, avec pouvoir d’injonction et de sanction disciplinaire.\n\n' +
          '4. **Cybersécurité bancaire** : face au *phishing*, *ransomware*, usurpation d’identité et piratage d’API, les banques déploient l’authentification forte (MFA/2FA), le chiffrement de bout en bout, la détection comportementale de fraude par IA et des Plans de Continuité d’Activité (PCA/PRA).',
        formulas: [
          {
            name: 'Les 3 phases du blanchiment de capitaux',
            formula: '\\text{1. Placement} \\longrightarrow \\text{2. Empilage (Dissimulation)} \\longrightarrow \\text{3. Intégration}',
            note: 'Toute anomalie suspecte impose une déclaration de soupçon confidentielle à la CENTIF.',
          },
        ],
        keyRule:
          'La conformité repose sur le **KYC/e-KYC** (vérifier qui est le client et d’où viennent ses fonds) et la vigilance **LBC/FT** (déclaration de soupçon à la CENTIF) ; la **Commission Bancaire de l’UMOA** sanctionne les manquements prudentiels.',
        workedExample: {
          title: 'Appliquer la chaîne KYC / LBC-FT lors d’une demande d’ouverture de compte et de crédit',
          statement:
            'Un client demande l’ouverture express d’un compte professionnel en ligne suivie d’un crédit de 30 millions FCFA, en versant d’abord 25 millions en billets fractionnés sur 5 jours sans justificatif d’activité. Quelle procédure doit suivre la banque ?',
          methodSteps: [
            'Vérification **e-KYC** : contrôler la validité de la pièce d’identité, l’adresse et identifier le bénéficiaire effectif réel de l’entreprise.',
            'Analyse **LBC/FT** : repérer le fractionnement d’espèces sans justification économique (*smurfing* / phase de placement suspecte).',
            'Décision de conformité : suspendre l’octroi du crédit, demander des pièces justificatives d’origine des fonds et, si le doute persiste, transmettre une **déclaration de soupçon confidentielle à la CENTIF** sans alerter le client (*no tipping-off*).',
          ],
          conclusion:
            'Le contrôle KYC/LBC-FT prime sur la rapidité commerciale et protège la banque contre les sanctions de la Commission Bancaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'LBC/FT',
            stepTheme: 'blue',
            stepTitle: 'Les trois phases du blanchiment de capitaux et le rôle de la CENTIF',
            paragraphText:
              'Les établissements financiers sont en première ligne pour empêcher que l’argent criminel ne contamine le circuit économique légal.\n' +
              '• **Phase 1 — Placement (Prélavage)** : introduire des espèces illicites dans le circuit financier (fractionnement de dépôts sur plusieurs comptes ou portefeuilles mobiles).\n' +
              '• **Phase 2 — Empilage (Brassage)** : multiplier les virements nationaux/internationaux, sociétés écrans et changes pour brouiller la piste d’audit.\n' +
              '• **Phase 3 — Intégration (Essorage)** : réinjecter les fonds « propres » dans l’immobilier, le commerce ou des titres financiers.\n' +
              '• **Déclaration à la CENTIF** : dès qu’un mouvement paraît incohérent avec le profil du client, la banque transmet une déclaration de soupçon strictement confidentielle à la **CENTIF**.\n' +
              'Exemple : un compte étudiant recevant soudainement 45 millions FCFA puis les revirant vers trois pays le lendemain déclenche une alerte LBC/FT immédiate.',
            keyRule:
              'Ne jamais prévenir un client qu’il fait l’objet d’une déclaration de soupçon à la CENTIF (interdiction absolue du *tipping-off*).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Dans le processus de blanchiment de capitaux, à quoi correspond la phase dite d’« empilage » (ou dissimulation) ?',
              options: [
                'À déposer physiquement les billets pour la toute première fois au guichet',
                'À multiplier les transferts complexes entre comptes et juridictions pour masquer l’origine illicite des fonds',
                'À acheter un immeuble en fin de circuit comme investissement légal',
                'À payer les impôts sur le revenu de la banque',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les trois phases sont : Placement (entrée des fonds), Empilage (multiplication des mouvements pour brouiller la piste) et Intégration (réinvestissement apparent légitime).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'KYC & e-KYC',
            stepTheme: 'green',
            stepTitle: 'Connaissance client (KYC / e-KYC) et processus d’octroi conforme',
            paragraphText:
              'Toute relation bancaire ou transaction significative exige une identification fiable appelée **KYC (*Know Your Customer*)**.\n' +
              '• **KYC classique** : vérification de la pièce d’identité officielle, du justificatif de domicile, de la profession/source de revenus et du bénéficiaire effectif pour les sociétés.\n' +
              '• **e-KYC (numérique)** : capture photo du document officiel couplée à un selfie vidéo avec détection de vivacité (*liveness check*) et interrogation des bases d’état civil, permettant un accueil client à distance sécurisé.\n' +
              '• **Surveillance continue** : mise à jour périodique des dossiers et filtrage des listes de sanctions internationales et Personnes Politiquement Exposées (PPE).\n' +
              'Exemple : un processus structuré combine vérification e-KYC, criblage LBC/FT, scoring de solvabilité et validation finale.',
            visualSchema: {
              type: 'flowchart',
              title: 'Circuit conforme d’octroi de crédit digital & contrôle KYC / LBC-FT',
              caption: 'Articulation entre identification e-KYC, filtrage conformité CENTIF et décision financière.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1. Demande client & e-KYC',
                    sublabel: 'Pièce d’identité + biométrie + justificatif revenus',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: '2. Filtrage LBC/FT & BIC',
                    sublabel: 'Listes sanctions, cohérence flux, endettement BIC',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Alerte suspecte ?',
                    branchTarget: 'Rejet & Déclaration CENTIF',
                  },
                  {
                    label: '3. Scoring & Garanties',
                    sublabel: 'Calcul capacité de remboursement et sûretés',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: '4. Octroi & Suivi continu',
                    sublabel: 'Déblocage ciblé + surveillance des échéances',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Quelle avancée majeure apporte le dispositif e-KYC par rapport au KYC papier traditionnel ?',
              options: [
                'Il dispense totalement la banque de vérifier l’identité de ses clients',
                'Il permet de vérifier l’identité et la vivacité d’un client à distance en quelques minutes via biométrie et contrôle documentaire automatisé',
                'Il autorise les dépôts anonymes sans limite de montant',
                'Il supprime les contrôles de la Commission Bancaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le e-KYC digitalise l’identification réglementaire (vérification de document + reconnaissance faciale/vivacité) tout en respectant les exigences LBC/FT.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Supervision UMOA',
            stepTheme: 'blue',
            stepTitle: 'Rôle et pouvoirs de la Commission Bancaire de l’UMOA',
            paragraphText:
              'Si la BCEAO conduit la politique monétaire, la surveillance directe de la bonne gestion de chaque banque revient à un organe dédié.\n' +
              '• **Mission de la Commission Bancaire de l’UMOA** : veiller au respect de la réglementation bancaire, des ratios prudentiels (solvabilité, liquidité) et des règles LBC/FT dans les huit pays membres.\n' +
              '• **Moyens d’action** : **contrôle sur pièces** (analyse périodique des états financiers transmis par les banques) et **contrôle sur place** (missions d’inspection dans les établissements).\n' +
              '• **Pouvoirs de sanction** : avertissement, blâme, amendes pécuniaires, suspension de dirigeants, nomination d’administrateur provisoire et retrait d’agrément en cas de défaillance grave.\n' +
              'Exemple : une banque dont le ratio de solvabilité tombe durablement sous 11,5 % reçoit une injonction de recapitalisation sous délai impératif.',
            keyRule:
              'La **BCEAO** gère la monnaie et le refinancement ; la **Commission Bancaire de l’UMOA** contrôle et sanctionne les banques et SFD.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Quel organe de l’UMOA est spécifiquement chargé d’inspecter les banques (sur pièces et sur place) et de prononcer des sanctions disciplinaires en cas de non-respect des normes prudentielles ?',
              options: [
                'La BOAD',
                'La Commission Bancaire de l’UMOA',
                'L’association des néobanques',
                'Les agences de transfert d’argent',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Commission Bancaire de l’UMOA assure la supervision prudentielle et disciplinaire des établissements de crédit de la zone.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Cybermenaces',
            stepTheme: 'orange',
            stepTitle: 'Principales menaces de cybersécurité dans la banque numérique',
            paragraphText:
              'L’ouverture des canaux mobiles et des API expose les établissements financiers et leurs clients à des attaques sophistiquées.\n' +
              '• **Phishing (hameçonnage) et ingénierie sociale** : faux SMS, e-mails ou appels se faisant passer pour le support de la banque afin de voler identifiants et codes OTP.\n' +
              '• **Ransomware (rançongiciel)** : logiciel malveillant chiffrant les serveurs critiques de la banque et bloquant l’activité.\n' +
              '• **Fraude au virement et piratage d’API** : exploitation de failles d’authentification sur des interfaces connectées ou compromission de boîtes mail professionnelles.\n' +
              'Exemple : un fraudeur appelle un client Mobile Money en prétextant une erreur de transfert pour lui soutirer son code PIN ou son code de validation OTP.',
            konanTip:
              'Règle d’or de sécurité numérique : une banque ou un opérateur légitime ne demande **jamais** par téléphone ou SMS votre code PIN ou code OTP à usage unique.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Un client reçoit un faux SMS imitant parfaitement sa banque et l’invitant à cliquer sur un lien pour « débloquer son compte » en saisissant son mot de passe et son code OTP. De quelle attaque s’agit-il ?',
              options: [
                'D’un contrôle de la Commission Bancaire',
                'D’une attaque de phishing (hameçonnage / smishing)',
                'D’une politique monétaire expansionniste',
                'D’un calcul de TAEG',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’usurpation d’identité par message pour soutirer des identifiants bancaires et codes OTP est une attaque de phishing (ou smishing par SMS).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Cyberdéfense',
            stepTheme: 'green',
            stepTitle: 'Authentification forte (MFA), chiffrement, IA antifraude et PCA/PRA',
            paragraphText:
              'Pour protéger l’actif des clients et la continuité des paiements, les banques combinent barrières préventives, détection temps réel et plans de secours.\n' +
              '• **Authentification forte (MFA / 2FA)** : exige au moins deux facteurs indépendants (ce que je sais : PIN ; ce que je possède : smartphone/carte ; ce que je suis : empreinte/visage).\n' +
              '• **Chiffrement et sécurité des API** : protocole TLS, jetons OAuth2 et limitation de débit (*rate limiting*) pour sécuriser l’Open Banking.\n' +
              '• **Détection de fraude par IA** : algorithmes scorant chaque paiement en millisecondes (géolocalisation inhabituelle, montant atypique).\n' +
              '• **PCA / PRA** : Plan de Continuité et de Reprise d’Activité permettant de basculer sur un datacenter miroir en cas de sinistre ou cyberattaque.\n' +
              'Exemple : une tentative de connexion depuis un pays étranger à 3h du matin déclenche un blocage temporaire et une validation biométrique.',
            keyRule:
              'La **MFA (authentification multifacteur)** repose sur au moins 2 des 3 piliers : **Connaissance** (mot de passe) + **Possession** (téléphone) + **Inhérence** (biométrie).',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Pourquoi l’authentification multifacteur (MFA) associant code PIN et empreinte digitale (ou code OTP sur téléphone enregistré) réduit-elle fortement le piratage de compte ?',
              options: [
                'Parce qu’elle rend inutiles les pare-feu et sauvegardes',
                'Parce que le vol du seul mot de passe ne suffit plus au fraudeur pour valider une transaction',
                'Parce qu’elle supprime l’obligation de vérifier le KYC',
                'Parce qu’elle augmente le taux d’intérêt créditeur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En combinant au moins deux facteurs indépendants (savoir + possession ou biométrie), la MFA bloque les attaquants disposant uniquement d’un mot de passe volé.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Audit sécurité',
            stepTheme: 'slate',
            stepTitle: 'Cas pratique : plan de réponse à un incident hybride conformité + cyber',
            paragraphText:
              'Une néobanque constate qu’un réseau de faux comptes ouverts avec des cartes d’identité falsifiées sert à recevoir des fonds issus d’arnaques en ligne puis à les transférer instantanément.\n' +
              '• **Cause identifiée** : faiblesse du contrôle **e-KYC** initial et absence de plafonds progressifs.\n' +
              '• **Actions immédiates** : (1) geler les comptes frauduleux et bloquer les API suspectes, (2) déposer une déclaration de soupçon à la **CENTIF**, (3) renforcer l’e-KYC avec détection de vivacité 3D et contrôle IA des anomalies de vélocité.\n' +
              '• **Gouvernance** : informer le régulateur conformément aux exigences de la **Commission Bancaire** et du dispositif LBC/FT.',
            exercise: {
              id: 'lmd_entd_l1_banque_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Lorsqu’une banque ou Fintech détecte des comptes frauduleux ouverts sous fausse identité réalisant des transferts suspects en série, quelle combinaison d’actions est réglementairement exigée ?',
              options: [
                'Prévenir discrètement les titulaires pour qu’ils retirent leurs fonds avant enquête',
                'Geler/restreindre les comptes concernés, transmettre une déclaration de soupçon à la CENTIF et renforcer les contrôles e-KYC',
                'Effacer tous les journaux informatiques pour éviter un contrôle',
                'Convertir les fonds suspects en actions de la banque',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La conformité impose la conservation des traces, la restriction des flux frauduleux, la déclaration confidentielle à la CENTIF et la correction des failles e-KYC.',
            },
          },
        ],
      }),
    ],
  },
];
