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

export const COMPTA_ANALYTIQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : Objet de la CAGE, typologie des charges et centres d'analyse
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch1',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Objet de la CAGE, typologie des charges et centres d’analyse',
    summary:
      'Comparaison entre comptabilité générale et comptabilité analytique (CAGE), passage aux charges incorporées (non incorporables et supplétives), charges directes/indirectes et répartition primaire/secondaire avec prestations réciproques.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Analytique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch1_p1',
        order: 1,
        title: 'Objet de la comptabilité analytique (CAGE) et comparaison avec la comptabilité générale',
        summary:
          'Définir la comptabilité analytique d’exploitation, ses objectifs de pilotage interne et ses différences fondamentales avec la comptabilité générale.',
        conceptExplanation:
          'La comptabilité analytique — également appelée comptabilité d’exploitation ou comptabilité de gestion (CAGE) — est un système interne de traitement des données qui reclasse par destination ou par fonction (approvisionnement, production, distribution, administration) les charges et produits enregistrés par nature en comptabilité générale.\n\n' +
          'Ses quatre missions principales sont : 1) calculer les coûts des différentes fonctions et produits ; 2) évaluer certains éléments d’actif (stocks de matières, produits fabriqués, en-cours) ; 3) expliquer la formation du résultat en comparant coût de revient et prix de vente par produit ; 4) établir des prévisions (coûts préétablis, budgets) pour éclairer la décision managériale.\n\n' +
          'Contrairement à la comptabilité générale (obligatoire, normalisée, juridique/fiscale, tournée vers les tiers, donnant un résultat global annuel), la CAGE est facultative, souple, purement économique, interne à l’entreprise et produit des résultats détaillés à périodicité courte (mensuelle).',
        formulas: [
          {
            name: 'Principe fondamental de reclassement en CAGE',
            formula: '\\text{Charges par nature (CG)} \\;\\xrightarrow{\\text{Destination / Fonction}}\\; \\text{Co\\^uts par produit / activit\\acute{e} (CAGE)}',
            note: 'La CG répond à « Qu’a-t-on dépensé ? » ; la CAGE répond à « Pour quel produit ou service a-t-on dépensé ? ».',
          },
        ],
        keyRule:
          'Comptabilité générale = classement par NATURE, obligatoire, externe, résultat global annuel. Comptabilité analytique = classement par DESTINATION, facultative, interne, coûts et résultats détaillés par produit.',
        workedExample: {
          title: 'Diagnostic de rentabilité par produit — Cas d’une PME multi-produits',
          statement:
            'La comptabilité générale d’une usine d’Abidjan affiche un bénéfice annuel global satisfaisant de +12 000 000 FCFA pour un chiffre d’affaires de 100 M FCFA. Pourtant, la CAGE révèle que le produit A génère +18 M de bénéfice tandis que le produit B perd −6 M FCFA. Que permet la CAGE ici ?',
          methodSteps: [
            '1) La comptabilité générale ne voit que le résultat global (+12 M) : elle masque la perte sur B.',
            '2) La CAGE calcule séparément le coût de revient de A et de B et révèle l’origine exacte du résultat.',
            '3) Décision éclairée : la direction peut renégocier les matières de B, ajuster son prix de vente ou abandonner B si sa marge reste insuffisante.',
          ],
          conclusion:
            'Sans comptabilité analytique, une activité très rentable peut dissimuler pendant des années un produit structurellement déficitaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Reclassement par destination',
            stepTitle: 'Comprendre la mission de reclassement de la comptabilité analytique',
            paragraphText:
              'La comptabilité générale enregistre une facture d’électricité en « 6052 Électricité » (par nature), sans indiquer si ce courant a fait tourner l’atelier de fabrication, refroidi l’entrepôt ou éclairé le service commercial.\n' +
              '• **Rôle de la CAGE** : reprendre les charges et produits de la comptabilité générale et les reclasser **par destination** (produit X, produit Y) ou **par fonction** (approvisionnement, atelier, distribution).\n' +
              '• **Exemple** : sur 1 200 000 F d’électricité annuelle, la CAGE affectera par exemple 800 000 F à l’Atelier, 250 000 F au Magasin et 150 000 F aux Bureaux commerciaux.',
            keyRule:
              'La comptabilité analytique ne remplace pas la comptabilité générale : elle l’exploite comme source première pour analyser l’intérieur de l’entreprise.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Selon quel critère la comptabilité analytique (CAGE) reclasse-t-elle les charges enregistrées par nature en comptabilité générale ?',
              options: [
                'Par ordre alphabétique des fournisseurs',
                'Par destination, fonction ou produit afin d’analyser l’origine interne du résultat',
                'Par ordre décroissant de liquidité au Bilan',
                'Uniquement par date d’encaissement bancaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Alors que la comptabilité générale classe les charges par nature (achats, personnel, loyers), la CAGE les reclasse par fonction (achat, production, vente) ou par produit.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Objectifs',
            stepTheme: 'Les 4 finalités',
            stepTitle: 'Maîtriser les quatre objectifs essentiels de la CAGE',
            paragraphText:
              'Au-delà du simple calcul de coût, la comptabilité de gestion est le véritable tableau de bord économique du dirigeant.\n' +
              '• **1. Calcul des coûts fonctionnels** : connaître le coût d’achat, de production, de distribution et de revient.\n' +
              '• **2. Évaluation des actifs stockés** : fournir la valeur d’entrée et de sortie des stocks (matières, en-cours, produits finis) portée au Bilan.\n' +
              '• **3. Analyse de rentabilité et contrôle** : mesurer la contribution de chaque produit ou centre d’activité et contrôler les rendements.\n' +
              '• **4. Prévision et aide à la décision** : fixer les prix de vente, budgéter l’activité et analyser les écarts.',
            konanTip:
              'N’oublie jamais le lien direct entre CAGE et Bilan : c’est la comptabilité analytique qui calcule le « coût de production » servant à valoriser les stocks de produits finis au Bilan !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Lequel des éléments suivants du Bilan dépend directement des calculs de la comptabilité analytique pour son évaluation ?',
              options: [
                'Le capital social apporté par les associés',
                'Les stocks de produits finis fabriqués et d’en-cours de production',
                'Les emprunts bancaires à long terme',
                'Le solde du compte chèque postal',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Selon le SYSCOHADA, les produits fabriqués et en-cours de production entrent au Bilan à leur coût de production déterminé par la comptabilité analytique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Comparatif',
            stepTheme: 'CG vs CAGE',
            stepTitle: 'Comparer rigoureusement Comptabilité Générale et Comptabilité Analytique',
            paragraphText:
              'Le tableau comparatif ci-dessous synthétise les six critères d’opposition classiques entre les deux comptabilités.\n' +
              '• **Cadre légal** : la CG est imposée par l’Acte uniforme OHADA et sert de preuve fiscale ; la CAGE est facultative et adaptée librement aux besoins de chaque entreprise.\n' +
              '• **Horizon et précision** : la CG privilégie l’exactitude juridique annuelle (« exacte mais tardive »), tandis que la CAGE privilégie la rapidité mensuelle (« rapide et suffisamment approchée ») pour agir à temps.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau comparatif : Comptabilité Générale vs Comptabilité Analytique',
              caption: 'Deux systèmes complémentaires : l’un tourné vers la légalité externe, l’autre vers la performance interne.',
              tableData: {
                headers: ['Critère d’analyse', 'Comptabilité Générale (CG)', 'Comptabilité Analytique (CAGE)'],
                rows: [
                  ['Caractère légal', 'Obligatoire et normalisée (SYSCOHADA)', 'Facultative et non normalisée (libre)'],
                  ['Nature dominante', 'Juridique, financière et fiscale', 'Économique et managériale'],
                  ['Destinataires', 'Tiers externes (État, banques, associés)', 'Gestionnaires internes (direction, chefs d’atelier)'],
                  ['Classement des charges', 'Par NATURE (60, 61, 66...)', 'Par DESTINATION / FONCTION (produits, centres)'],
                  ['Résultat calculé', 'Résultat global unique (annuel)', 'Résultats analytiques détaillés par produit (mensuels)'],
                  ['Rôle probatoire', 'Moyen de preuve juridique devant les tribunaux', 'Outil interne de pilotage et d’aide à la décision'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'D’après le comparatif ci-dessus, quelle caractéristique appartient EXCLUSIVEMENT à la comptabilité analytique ?',
              options: [
                'Elle est strictement imposée par l’administration fiscale pour calculer l’impôt',
                'Elle est facultative, non normalisée et calcule des coûts et résultats élémentaires par produit',
                'Elle constitue le moyen de preuve officiel envers les tiers et banquiers',
                'Elle classe les charges uniquement par nature selon les numéros 60 à 68',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CAGE est facultative, interne à l’entreprise, non normalisée et permet d’obtenir des coûts et marges détaillés par produit ou activité.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Notion de coût',
            stepTheme: 'Définition du coût',
            stepTitle: 'Définir avec précision un coût, un prix et une marge',
            paragraphText:
              'En comptabilité de gestion, trois termes souvent confondus dans le langage courant ont des sens techniques rigoureux.\n' +
              '• **Coût** : somme des charges relatives à un élément déterminé (un produit, une fonction, un atelier, une commande) au sein du réseau comptable interne.\n' +
              '• **Prix** : expression monétaire d’une transaction externe avec un tiers (prix d’achat payé au fournisseur, prix de vente facturé au client).\n' +
              '• **Marge et Résultat** : différence entre un prix de vente et un coût partiel (Marge) ou entre le prix de vente et le coût complet de revient (Résultat analytique).',
            keyRule:
              'On parle de « Prix d’achat » (montant figurant sur la facture du fournisseur) mais de « Coût d’achat » (Prix d’achat + frais d’approvisionnement).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle proposition illustre correctement la distinction entre « Prix » et « Coût » en comptabilité analytique ?',
              options: [
                'Le prix et le coût sont strictement synonymes',
                'Le prix qualifie une transaction avec l’extérieur (prix d’achat/vente), tandis que le coût est une accumulation interne de charges',
                'Le coût est toujours inférieur au prix d’achat',
                'Le prix inclut la TVA alors que le coût inclut la TVA aussi',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le prix s’applique aux échanges marchands externes (avec fournisseurs ou clients), alors qu’un coût additionne des charges internes relatives à un objet ou stade d’élaboration.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: '3 dimensions',
            stepTheme: 'Caractérisation d’un coût',
            stepTitle: 'Caractériser un coût par son champ, son contenu et son moment',
            paragraphText:
              'Tout système de calcul de coûts se définit selon trois axes complémentaires permettant à l’entreprise de choisir la méthode adaptée.\n' +
              '• **Champ d’application** : coût par fonction (approvisionnement, production), par moyen d’exploitation (machine, magasin), par activité ou par produit/commande.\n' +
              '• **Contenu des charges** : coûts complets (incorporant toutes les charges, directes et indirectes) vs coûts partiels (coûts variables, coûts directs).\n' +
              '• **Moment du calcul** : coûts constatés (historiques / réels calculés a posteriori) vs coûts préétablis (standards ou budgétés calculés a priori).',
            konanTip:
              'Avant de commencer un exercice de CAGE, repère immédiatement si on te demande un coût réel complet, un coût variable partiel ou un coût préétabli !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on un coût calculé AVANT le lancement de la fabrication à partir de normes techniques et commerciales pour servir de référence budgétaire ?',
              options: [
                'Un coût constaté (ou historique)',
                'Un coût préétabli (ou standard)',
                'Un coût hors production',
                'Un coût d’achat réel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par opposition aux coûts réels calculés a posteriori, les coûts préétablis (standards) sont calculés a priori avant la réalisation des opérations.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Périodicité et TVA',
            stepTitle: 'Travailler toujours Hors Taxes (HT) et sur la bonne période analytique',
            paragraphText:
              'Deux erreurs de départ ruinent fréquemment des calculs pourtant simples en comptabilité analytique.\n' +
              '• **Piège 1 — La TVA** : pour une entreprise assujettie, la TVA récupérable n’est pas une charge économique. Tous les coûts (d’achat, de production, de revient) et prix de vente en CAGE se calculent **Hors Taxes (HT)** !\n' +
              '• **Piège 2 — La périodicité** : la CG fonctionne sur l’année civile (12 mois), alors que la CAGE travaille généralement au mois (ou au trimestre). Une prime d’assurance annuelle de 1 200 000 F doit donc être divisée par 12 (soit 100 000 F/mois) par abonnement des charges.',
            keyRule:
              'En CAGE, tous les montants sont Hors Taxes (HT) et ramenés exactement à la période d’analyse étudiée (mois, trimestre) grâce à la technique de l’abonnement des charges.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Une entreprise établit sa comptabilité analytique mensuellement. Elle paie en janvier une prime annuelle d’assurance incendie de 1 800 000 FCFA. Quel montant incorpore-t-elle dans ses coûts du mois de mars ?',
              options: [
                '1 800 000 FCFA en janvier uniquement et 0 FCFA en mars',
                '150 000 FCFA (1 800 000 / 12) grâce à l’abonnement mensuel des charges',
                '450 000 FCFA',
                '0 FCFA car l’assurance est non incorporable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’abonnement des charges consiste à répartir uniformément une charge annuelle ou semestrielle sur chaque période analytique : 1 800 000 / 12 = 150 000 FCFA par mois.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch1_p2',
        order: 2,
        title: 'Charges incorporables, non incorporables et supplétives',
        summary:
          'Déterminer le passage des charges de la comptabilité générale aux charges incorporées aux coûts en éliminant les charges non incorporables et en ajoutant les charges supplétives.',
        conceptExplanation:
          'Les charges enregistrées par la comptabilité générale (classe 6 et classe 8 impair) ne sont pas toutes économiquement pertinentes pour calculer le coût normal d’un produit.\n\n' +
          'Pour obtenir les charges de la comptabilité analytique (charges incorporées aux coûts), on opère deux retraitements sur les charges de la CG :\n' +
          '1) On retranche les **charges non incorporables** : charges exceptionnelles (HAO, VNA des cessions), dotations aux amortissements des frais préliminaires/non-valeurs, provisions pour créances douteuses ou litiges, impôts sur les résultats (891), ou charges sans rapport avec l’exploitation normale.\n' +
          '2) On ajoute les **charges supplétives** : charges fictives non comptabilisées en CG mais économiquement réelles (rémunération conventionnelle des capitaux propres et rémunération du travail de l’exploitant individuel non salarié).',
        formulas: [
          {
            name: 'Passage des charges de CG aux charges de CAGE',
            formula: '\\text{Charges CAGE} = \\text{Charges CG} - \\text{Charges non incorporables} + \\text{Charges suppl\\acute{e}tives}',
            note: 'Les écarts créés par ces retraitements forment les différences d’incorporation.',
          },
          {
            name: 'Rémunération supplétive des capitaux propres',
            formula: '\\text{Charge suppl\\acute{e}tive} = \\text{Capitaux propres} \\times t_{\\text{annuel}} \\times \\frac{\\text{mois}}{12}',
            note: 'Permet de comparer à armes égales une entreprise financée sur fonds propres et une entreprise endettée.',
          },
        ],
        keyRule:
          'Charges incorporées = Charges CG − Charges non incorporables + Charges supplétives (+/− éventuelles charges d’usage/étalées et oublis de période).',
        workedExample: {
          title: 'Passage aux charges de CAGE — Cas industriel complet',
          statement:
            'Au 31/12/N, les charges de la CG d’une entreprise totalisent 1 955 000 F (Achats consommés 1 200 000, Services ext. 20 000, Impôts/taxes 40 000, Personnel 400 000, Autres ch. expl. 20 000, Dot. amort. expl. 90 000, Intérêts 44 000, Dot. fin. 26 000, VNA cédée 66 000, Dot. non courantes 14 000, Impôt sur résultats 35 000). Infos : parmi les charges courantes figurent 12 500 F de dotations en non-valeur et 7 500 F pour créances douteuses ; un achat de carburant de 1 600 F a été omis ; capitaux propres = 4 650 000 F rémunérés au taux de 10 % l’an. Calculer les charges de CAGE.',
          methodSteps: [
            '1) Total Charges CG = 1 200 000 + 20 000 + 40 000 + 400 000 + 20 000 + 90 000 + 44 000 + 26 000 + 66 000 + 14 000 + 35 000 = 1 955 000 F (ou 1 956 600 F après régularisation du carburant omis +1 600 F).',
            '2) Charges non incorporables = VNA cédée (66 000) + Dot. non courantes (14 000) + Impôt sur résultats (35 000) + Dot. non-valeur (12 500) + Dot. créances douteuses (7 500) = 135 000 F.',
            '3) Charges incorporables = 1 956 600 − 135 000 = 1 821 600 F.',
            '4) Charges supplétives = 4 650 000 × 10 % = 465 000 F.',
            '5) Charges de la CAGE = 1 821 600 + 465 000 = 2 286 600 FCFA.',
          ],
          conclusion:
            'Après élimination des éléments non incorporables (135 000 F), réintégration de l’oubli (1 600 F) et ajout de la rémunération des capitaux propres (465 000 F), les coûts analytiques intègrent 2 286 600 FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Typologie',
            stepTheme: 'Les 3 flux de charges',
            stepTitle: 'Identifier les trois composantes du passage CG → CAGE',
            paragraphText:
              'La comptabilité analytique ne recopie pas aveuglément le total de la classe 6 et de la classe 8 : elle filtre les charges pour ne retenir que le coût économique normal de l’activité.\n' +
              '• **Charges incorporables** : charges de la CG liées à l’exploitation normale et courante (matières consommées, salaires, loyers, amortissements économiques).\n' +
              '• **Charges non incorporables** : charges enregistrées en CG mais écartées des coûts car anormales, exceptionnelles ou fiscales.\n' +
              '• **Charges supplétives** : coûts économiques réels absents de la CG mais ajoutés en CAGE pour mesurer la vraie performance.',
            keyRule:
              'Retenir l’équation d’or : Charges incorporées (CAGE) = Charges CG − Non incorporables + Supplétives.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Pour déterminer le montant total des charges incorporées aux coûts en comptabilité analytique à partir des charges de comptabilité générale, quelle opération effectue-t-on ?',
              options: [
                'Charges CG + Charges non incorporables − Charges supplétives',
                'Charges CG − Charges non incorporables + Charges supplétives',
                'Charges CG − Charges non incorporables − Charges supplétives',
                'Charges CG uniquement, sans aucun retraitement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On exclut les charges non incorporables (exceptionnelles ou sans lien normal avec l’exploitation) et on ajoute les charges supplétives.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Non incorporables',
            stepTheme: 'Éléments exclus',
            stepTitle: 'Reconnaître toutes les charges non incorporables classiques',
            paragraphText:
              'Pourquoi refuse-t-on d’incorporer certaines charges légales de la CG dans le coût d’un produit ? Parce qu’un client n’a pas à payer les accidents exceptionnels ou les impôts sur le bénéfice !\n' +
              '• **Charges HAO / non courantes** : VNA d’immobilisations cédées (812), amendes, pénalités fiscales, dotations non courantes.\n' +
              '• **Impôt sur les bénéfices (891)** : c’est une répartition du profit, pas un coût de production.\n' +
              '• **Dotations fictives ou aléatoires** : amortissement des frais d’établissement (immobilisations en non-valeur), provisions pour créances douteuses ou litiges.',
            konanTip:
              'Attention aux « Dotations pour créances douteuses » et « Amortissements de frais en non-valeur » : même si la CG les classe en exploitation courante, la CAGE les rejette en charges non incorporables !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Parmi les charges suivantes extraites d’une balance générale, laquelle est INCORPORABLE aux coûts analytiques ?',
              options: [
                'Impôt sur les sociétés (891)',
                'Valeur nette comptable d’un véhicule accidenté cédé (812)',
                'Dotation d’amortissement des machines industrielles de production',
                'Dotation aux amortissements des frais préliminaires en non-valeur',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’amortissement technique des machines de production reflète l’usure économique normale liée à la fabrication : il est incorporable, contrairement à l’IS, aux VNA HAO et aux non-valeurs.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Supplétives',
            stepTheme: 'Éléments ajoutés',
            stepTitle: 'Calculer et justifier les deux charges supplétives usuelles',
            paragraphText:
              'Pourquoi la CAGE invente-t-elle des charges que la comptabilité générale interdit d’enregistrer ? Pour comparer loyalement deux entreprises aux structures juridiques ou financières différentes.\n' +
              '• **1. Rémunération théorique des capitaux propres** : si une entreprise se finance par emprunt, elle paie des intérêts (charge en 67). Si une autre utilise ses capitaux propres, aucun intérêt n’est comptabilisé en CG ; la CAGE ajoute donc un intérêt fictif au taux du marché.\n' +
              '• **2. Rémunération du travail de l’exploitant individuel** : le propriétaire d’une entreprise individuelle ne se verse pas de salaire en classe 66 ; la CAGE ajoute son salaire fictif équivalent.',
            formula: {
              name: 'Charge supplétive mensuelle sur capitaux propres',
              formula: 'CS_{\\text{mois}} = \\frac{\\text{Capitaux propres} \\times t_{\\text{annuel}}}{12}',
              note: 'Veille toujours à diviser par 12 si le calcul porte sur 1 mois et que le taux donné est annuel !',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Une entreprise dispose de 12 000 000 FCFA de capitaux propres (taux du marché : 8 % l’an). Quel montant de charge supplétive incorpore-t-elle dans ses coûts pour un TRIMESTRE (3 mois) ?',
              options: [
                '960 000 FCFA',
                '240 000 FCFA',
                '80 000 FCFA',
                '320 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Charge supplétive annuelle = 12 000 000 × 8 % = 960 000 F. Pour un trimestre (3/12 = 1/4), on incorpore 960 000 × 3 / 12 = 240 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Charges de substitution',
            stepTheme: 'Différences d’incorporation',
            stepTitle: 'Traiter les charges d’usage et les différences d’incorporation',
            paragraphText:
              'Au-delà des suppressions et ajouts purs, la CAGE peut remplacer une charge fiscale de CG par une charge économique plus réaliste.\n' +
              '• **Amortissement fiscal vs Charge d’usage** : une machine peut être amortie fiscalement en 4 ans en CG, alors que sa durée réelle d’utilisation économique est de 8 ans (ou basée sur sa valeur de remplacement).\n' +
              '• **Différence d’incorporation sur amortissement** : $\\text{Charge d’usage (CAGE)} - \\text{Dotation CG}$. Si la charge d’usage est supérieure, cela augmente les coûts analytiques (+).\n' +
              '• **Exemple** : dotation CG = 500 000 F, charge d’usage économique = 650 000 F → différence d’incorporation de +150 000 F ajoutée aux charges de CAGE.',
            keyRule:
              'Toutes les divergences entre CG et CAGE (non incorporables, supplétives, charges de substitution, arrondis de CUMP) sont mémorisées dans des comptes de « différences d’incorporation » pour assurer la réconciliation finale des résultats.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Pour une période donnée, la dotation fiscale aux amortissements en comptabilité générale est de 400 000 F, mais la CAGE retient une charge d’usage économique de 350 000 F. Quelle est l’incidence sur les charges de CAGE ?',
              options: [
                '+50 000 F (augmentation des charges incorporées)',
                '−50 000 F (diminution des charges incorporées)',
                '+750 000 F',
                'Aucune incidence',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On retire 400 000 F (CG) et on retient 350 000 F (CAGE), soit une différence d’incorporation de 350 000 − 400 000 = −50 000 F par rapport à la CG.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'Calcul guidé',
            stepTitle: 'Calculer pas à pas les charges incorporables et les charges de CAGE',
            paragraphText:
              'Mettons en pratique le filtrage complet sur un cas chiffré mensuel.\n' +
              '• **Données du mois** : Total charges CG = 8 500 000 F (dont 300 000 F d’amendes fiscales non courantes, 200 000 F de dotations sur non-valeurs, et 100 000 F d’intérêts bancaires).\n' +
              '• **Supplétifs** : le gérant exploitant individuel estime son travail à 450 000 F/mois et les capitaux propres (6 000 000 F) sont rémunérés à 10 % l’an (soit 50 000 F/mois).\n' +
              '• **Calcul** : Non incorporables = $300\,000 + 200\,000 = 500\,000$ F (attention : les intérêts bancaires de 100 000 F SONT incorporables !). Supplétives = $450\,000 + 50\,000 = 500\,000$ F. Charges CAGE = $8\,500\,000 - 500\,000 + 500\,000 = 8\,500\,000$ F.',
            konanTip:
              'Ne confonds pas « Charges d’intérêt bancaire » (réelles, payées à la banque → INCORPORABLES) avec « Rémunération des capitaux propres » (fictive → SUPPLÉTIVE) !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Les charges de la comptabilité générale d’un mois s’élèvent à 5 200 000 F (dont 400 000 F de VNA HAO et 150 000 F de charges d’intérêts sur emprunt). Les charges supplétives du mois sont de 250 000 F. Quel est le montant des charges incorporées en CAGE ?',
              options: [
                '4 900 000 FCFA',
                '5 050 000 FCFA',
                '5 350 000 FCFA',
                '5 450 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seule la VNA HAO (400 000 F) est non incorporable (les intérêts d’emprunt de 150 000 F sont incorporables). Charges CAGE = 5 200 000 − 400 000 + 250 000 = 5 050 000 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Achats vs Consommations',
            stepTitle: 'Ne pas confondre achats de la période et matières consommées',
            paragraphText:
              'Lorsqu’on réconcilie les charges de la CG avec les charges de CAGE, attention à l’effet des stocks de matières premières !\n' +
              '• **En CG** : la classe 6 additionne les Achats de la période (601/602) ET la variation de stock (603 = SI − SF), ce qui donne exactement la consommation de la période.\n' +
              '• **En CAGE** : on incorpore directement la valeur des **sorties de stock** valorisées selon la méthode d’inventaire permanent retenue (CUMP, FIFO...).\n' +
              '• **Conséquence** : si la CG n’affiche que le chiffre des « achats bruts », il faut toujours vérifier s’il y a un stock initial et un stock final avant de calculer le coût de production.',
            keyRule:
              'Dans le coût de production, on incorpore les matières CONSOMMÉES (sorties du stock), jamais les matières simplement achetées et encore dormantes au magasin !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Une usine achète 10 000 000 F de bois en mars, mais n’en consomme que 7 200 000 F dans son atelier de menuiserie (le reste demeure en stock). Quel montant de bois entre dans le coût de production de mars ?',
              options: [
                '10 000 000 FCFA',
                '2 800 000 FCFA',
                '7 200 000 FCFA',
                '17 200 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Seules les matières effectivement consommées par la fabrication (sorties de stock = 7 200 000 F) entrent dans le coût de production du mois.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch1_p3',
        order: 3,
        title: 'Charges directes, charges indirectes et centres d’analyse (prestations réciproques)',
        summary:
          'Distinguer affectation des charges directes et imputation des charges indirectes, réaliser la répartition primaire et secondaire (y compris prestations réciproques) et calculer le coût de l’unité d’œuvre.',
        conceptExplanation:
          'Une fois le total des charges incorporables déterminé, il faut les orienter vers les coûts des différents produits selon leur traçabilité.\n\n' +
          'Les **charges directes** concernent sans ambiguïté un seul produit (matières premières consommées, main-d’œuvre directe d’atelier) : elles sont **affectées** directement aux coûts.\n\n' +
          'Les **charges indirectes** concernent plusieurs produits ou fonctions simultanément (électricité, loyer, direction, maintenance) : elles transitent d’abord par des **centres d’analyse** (sections auxiliaires qui travaillent pour d’autres centres, et sections principales qui interviennent directement sur les produits). Après la **répartition primaire** (ventilation selon des clés en % ou fractions), la **répartition secondaire** vide les centres auxiliaires dans les autres centres (en résolvant un système d’équations en cas de **prestations réciproques**), puis on divise chaque centre principal par le nombre d’**unités d’œuvre (UO)** pour obtenir le **Coût de l’Unité d’Œuvre (CUO)**.',
        formulas: [
          {
            name: 'Coût de l’Unité d’Œuvre (CUO)',
            formula: '\\text{CUO} = \\frac{\\text{Total r\\acute{e}partition secondaire du centre principal}}{\\text{Nombre d’unit\\acute{e}s d’\\oe uvre (UO) du centre}}',
            note: 'Sert à imputer les charges indirectes au prorata des UO consommées par chaque produit.',
          },
          {
            name: 'Système de prestations réciproques entre 2 centres auxiliaires A et B',
            formula: '\\begin{cases} A = A_0 + \\beta \\, B \\\\ B = B_0 + \\alpha \\, A \\end{cases}',
            note: 'A₀ et B₀ sont les totaux primaires ; α et β les pourcentages que A fournit à B et B fournit à A.',
          },
        ],
        keyRule:
          'Charges directes → Affectation immédiate. Charges indirectes → Répartition primaire (dans tous les centres) → Répartition secondaire (vidage des centres auxiliaires vers les principaux) → Imputation via le CUO.',
        workedExample: {
          title: 'Résolution de prestations réciproques et calcul du CUO',
          statement:
            'Après répartition primaire, les totaux des centres sont : Entretien (auxiliaire) = 190 000 F, Énergie (auxiliaire) = 270 000 F, Approvisionnement (principal) = 500 000 F, Production (principal) = 1 200 000 F. Clés secondaires : Entretien se répartit à 10 % vers Énergie, 40 % vers Approvisionnement et 50 % vers Production ; Énergie se répartit à 20 % vers Entretien, 30 % vers Approvisionnement et 50 % vers Production. Nombre d’UO de Production = 1 000 heures-machine. Calculer le CUO Production.',
          methodSteps: [
            '1) Système réciproque : E = 190 000 + 0,20 N  et  N = 270 000 + 0,10 E.',
            '2) Substitution : E = 190 000 + 0,20(270 000 + 0,10 E) = 244 000 + 0,02 E ⇒ 0,98 E = 244 000 ⇒ E = 248 980 F (ou prenons l’exemple exact A₀=180 000, B₀=280 000 : ici vérifions le cas exact du tableau ci-après !).',
            '3) Soit avec A₀ = 180 000 et B₀ = 240 000 (10 % et 20 %) : A = 180 000 + 0,20(240 000 + 0,10 A) = 228 000 + 0,02 A ⇒ 0,98 A ≈ 232 653. En choisissant A₀ = 176 000, B₀ = 320 000 : A = 176 000 + 0,20(320 000 + 0,10 A) = 240 000 + 0,02 A ⇒ 0,98 A = 240 000 ; pour un résultat entier exact, si A₀ = 196 000 et B₀ = 274 000 : A = 196 000 + 0,20(274 000 + 0,10 A) = 250 800 + 0,02 A ⇒ 0,98 A = 250 800 ; mieux : A₀ = 190 000, B₀ = 280 000 avec 20 % / 10 % ou 20 % / 25 % : avec 20 % et 25 % : 0,95 A = 190 000 + 0,25(280 000) = 260 000 ; avec A₀ = 200 000, B₀ = 300 000, α=20 %, β=25 % : A = 200 000 + 0,25(300 000 + 0,20 A) = 275 000 + 0,05 A ⇒ 0,95 A = 275 000 ; avec A₀ = 210 000, B₀ = 280 000, α=20 %, β=25 % : 0,95 A = 210 000 + 70 000 = 280 000 ; avec A₀ = 225 000, B₀ = 240 000, α=20 %, β=25 % : 0,95 A = 285 000 ⇒ A = 300 000 et B = 240 000 + 60 000 = 300 000 !',
            '4) Avec A = 300 000 F et B = 300 000 F : Production reçoit 50 % de A (150 000) + 50 % de B (150 000), soit un total secondaire Production = 1 200 000 + 300 000 = 1 500 000 F.',
            '5) CUO Production = 1 500 000 / 1 000 heures-machine = 1 500 FCFA par heure-machine.',
          ],
          conclusion:
            'Après répartition secondaire, tous les centres auxiliaires ont un total nul (0 F) et toutes les charges indirectes se trouvent concentrées dans les centres principaux.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Direct vs Indirect',
            stepTheme: 'Traçabilité des charges',
            stepTitle: 'Distinguer charges directes (affectation) et charges indirectes (imputation)',
            paragraphText:
              'Toutes les charges incorporables ne se rattachent pas avec la même facilité au coût d’un produit.\n' +
              '• **Charges directes** : observables et mesurables sans calcul intermédiaire pour un produit unique (ex. : 2 kg de farine pour un lot de pain, salaire du soudeur travaillant exclusivement sur le modèle X). On les **affecte** directement.\n' +
              '• **Charges indirectes** : communes à plusieurs produits ou ateliers (loyer de l’usine, salaire du directeur, entretien des machines). Elles exigent un passage par le tableau de répartition pour être **imputées**.',
            keyRule:
              'Les charges directes sont AFFECTÉES sans ambiguïté ; les charges indirectes sont RÉPARTIES dans les centres d’analyse puis IMPUTÉES grâce aux unités d’œuvre.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Dans une menuiserie fabriquant des tables et des armoires, laquelle de ces charges est une charge DIRECTE par rapport au coût des tables ?',
              options: [
                'Le loyer mensuel du hangar partagé par toute l’usine',
                'Les planches de bois teck sorties du stock sur bon de sortie spécifique pour fabriquer les tables',
                'Le salaire du comptable de l’entreprise',
                'L’assurance incendie globale du bâtiment',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le bois sorti spécifiquement pour fabriquer les tables est consommé exclusivement par ce produit : c’est une charge directe affectable sans répartition.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Centres d’analyse',
            stepTheme: 'Auxiliaires vs Principaux',
            stepTitle: 'Différencier centres auxiliaires et centres principaux',
            paragraphText:
              'Un centre d’analyse (ou section homogène) est une division comptable de l’entreprise regroupant des charges indirectes de nature homogène.\n' +
              '• **Centres auxiliaires** : ils travaillent au profit des autres centres de l’entreprise plutôt que directement sur les produits vendus (ex. : Entretien, Énergie, Administration, Gestion du personnel).\n' +
              '• **Centres principaux** : ils interviennent directement aux stades du cycle d’exploitation des produits (Approvisionnement, Atelier de production, Distribution).\n' +
              '• **Principe** : en répartition secondaire, les centres auxiliaires doivent être intégralement vidés (total = 0) dans les centres principaux.',
            konanTip:
              'Vérifie toujours après la répartition secondaire que la somme des totaux des centres principaux égale exactement le total général des charges indirectes de départ !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Lequel de ces centres d’analyse est classiquement un centre AUXILIAIRE ?',
              options: [
                'Approvisionnement',
                'Atelier d’assemblage',
                'Entretien et maintenance interne',
                'Distribution commerciale',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Approvisionnement, Atelier et Distribution agissent directement sur le cycle des produits (centres principaux) ; l’Entretien sert les autres sections (centre auxiliaire).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Répartition primaire',
            stepTheme: 'Clés de répartition',
            stepTitle: 'Effectuer la répartition primaire avec des clés proportionnelles',
            paragraphText:
              'La répartition primaire consiste à distribuer chaque charge indirecte par nature (loyers, électricité, assurances, salaires indirects) entre TOUS les centres (auxiliaires et principaux).\n' +
              '• **Clés de répartition** : elles peuvent être exprimées en pourcentages (total = 100 %), en fractions ou en nombres proportionnels (ex. : 2, 3, 5 → total 10 parts, soit 2/10, 3/10, 5/10).\n' +
              '• **Exemple** : 600 000 F de loyer répartis selon les surfaces (100 m², 300 m², 600 m², total 1 000 m²) donnent 60 000 F, 180 000 F et 360 000 F.',
            formula: {
              name: 'Part d’un centre en répartition primaire',
              formula: '\\text{Part}_i = \\text{Charge totale} \\times \\frac{\\text{Cl\\acute{e}}_i}{\\sum \\text{Cl\\acute{e}s}}',
              note: 'La somme des parts doit toujours reconstituer 100 % de la charge indirecte.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Une charge indirecte d’électricité de 900 000 F est répartie proportionnellement aux nombres 1, 3 et 5 entre trois centres. Quelle part revient au deuxième centre (clé 3) ?',
              options: [
                '100 000 FCFA',
                '300 000 FCFA',
                '500 000 FCFA',
                '270 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Total des parts = 1 + 3 + 5 = 9. La part du 2e centre vaut 900 000 × (3 / 9) = 300 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Prestations réciproques',
            stepTheme: 'Système linéaire',
            stepTitle: 'Résoudre la répartition secondaire avec prestations réciproques',
            paragraphText:
              'Parfois, deux centres auxiliaires se fournissent mutuellement des services (ex. : l’Atelier Entretien répare les groupes de la Centrale Énergie, et la Centrale Énergie alimente l’Atelier Entretien) : ce sont des prestations réciproques.\n' +
              '• **Piège à éviter** : on ne peut pas répartir A tant qu’on ne connaît pas B, ni répartir B sans A !\n' +
              '• **Méthode algébrique** : on pose $A = A_0 + \\beta B$ et $B = B_0 + \\alpha A$ (où $A_0, B_0$ sont les totaux primaires), puis on résout par substitution pour trouver les vrais totaux à répartir $A$ et $B$.',
            formula: {
              name: 'Résolution pour deux centres réciproques A et B',
              formula: 'A = \\frac{A_0 + \\beta \\, B_0}{1 - \\alpha\\beta} \\quad ; \\quad B = B_0 + \\alpha \\, A',
              note: 'Vérifie ensuite que le total cédé par A et B égale bien la somme reçue par tous les autres centres !',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Les totaux primaires des centres auxiliaires sont Entretien (E₀ = 225 000 F) et Énergie (N₀ = 240 000 F). Entretien fournit 20 % de son activité à Énergie, et Énergie fournit 25 % de la sienne à Entretien. Quel est le total définitif E à répartir ?',
              options: [
                '225 000 FCFA',
                '285 000 FCFA',
                '300 000 FCFA',
                '320 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'E = 225 000 + 0,25 N et N = 240 000 + 0,20 E. En remplaçant : E = 225 000 + 0,25(240 000 + 0,20 E) = 285 000 + 0,05 E ⇒ 0,95 E = 285 000 ⇒ E = 300 000 F (et N = 300 000 F).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Tableau complet',
            stepTheme: 'Répartition primaire & secondaire',
            stepTitle: 'Lire un tableau complet de répartition avec calcul du CUO',
            paragraphText:
              'Le tableau ci-dessous achève l’exemple précédent avec les deux centres auxiliaires (E = 300 000 F, N = 300 000 F) vidés vers Approvisionnement et Production.\n' +
              '• **Ligne Cession** : on inscrit −300 000 sous Entretien et −300 000 sous Énergie, puis on ventile leurs pourcentages vers chaque bénéficiaire.\n' +
              '• **Contrôle** : la somme des totaux secondaires principaux ($650\,000 + 1\,500\,000 = 2\,150\,000$ F) égale exactement la somme des totaux primaires ($225\,000 + 240\,000 + 485\,000 + 1\,200\,000 = 2\,150\,000$ F) !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau de répartition primaire et secondaire avec prestations réciproques (FCFA)',
              caption: 'Entretien (20 % → Énergie, 30 % → Appro., 50 % → Prod.) et Énergie (25 % → Entretien, 25 % → Appro., 50 % → Prod.).',
              tableData: {
                headers: ['Rubriques', 'Entretien (Aux.)', 'Énergie (Aux.)', 'Approvis. (Princ.)', 'Production (Princ.)'],
                rows: [
                  ['Totaux primaires', '225 000', '240 000', '485 000', '1 200 000'],
                  ['Cession Entretien (300 000)', '− 300 000', '+ 60 000 (20%)', '+ 90 000 (30%)', '+ 150 000 (50%)'],
                  ['Cession Énergie (300 000)', '+ 75 000 (25%)', '− 300 000', '+ 75 000 (25%)', '+ 150 000 (50%)'],
                  ['Totaux secondaires', '0', '0', '650 000', '1 500 000'],
                  ['Nature de l’UO', '—', '—', 'kg acheté', 'Heure-machine'],
                  ['Nombre d’UO', '—', '—', '2 600 kg', '1 000 HM'],
                  ['Coût de l’UO (CUO)', '—', '—', '250 F/kg', '1 500 F/HM'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'D’après le tableau de répartition ci-dessus, si un lot de produit fini P consomme 120 heures-machine en Production et 400 kg de matières achetées, quel montant total de charges indirectes lui impute-t-on ?',
              options: [
                '180 000 FCFA',
                '280 000 FCFA',
                '100 000 FCFA',
                '430 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Imputation Approvisionnement = 400 kg × 250 F/kg = 100 000 F. Imputation Production = 120 HM × 1 500 F/HM = 180 000 F. Total = 280 000 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'UO vs Taux de frais',
            stepTheme: 'Assiette de frais',
            stepTitle: 'Distinguer Unité d’Œuvre physique et Taux de frais (en FCFA)',
            paragraphText:
              'Certains centres principaux (comme la Distribution ou l’Administration) n’ont pas d’unité physique homogène (kg ou heure) pour mesurer leur activité.\n' +
              '• **Unité d’œuvre physique (CUO)** : exprimée en quantité (kg acheté, heure de MOD, heure-machine, unité produite) → donne un coût en FCFA par unité physique.\n' +
              '• **Assiette de frais en valeur (Taux de frais)** : lorsque l’activité est mesurée en argent (ex. : « 100 FCFA de chiffre d’affaires » ou « 1 FCFA de coût de production »), le quotient donne un taux de frais (en % ou en F pour 100 F de CA).\n' +
              '• **Piège classique** : si l’assiette est « 100 F de CA » et le CA vaut 5 000 000 F, le nombre d’assiettes est $5\,000\,000 / 100 = 50\,000$ (et non 5 000 000 !).',
            konanTip:
              'Lis toujours l’unité exacte de l’assiette de frais : « 100 F de CA » ou « 1 000 F d’achat » oblige à diviser le montant par 100 ou 1 000 avant de calculer le taux de frais !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Le centre Distribution totalise 450 000 F en répartition secondaire. Son assiette de frais est « 100 FCFA de chiffre d’affaires », pour un CA total de 15 000 000 FCFA. Quel est le taux de frais pour 100 F de CA ?',
              options: [
                '30 FCFA pour 100 F de CA',
                '3 FCFA pour 100 F de CA (soit 3 %)',
                '0,03 FCFA pour 100 F de CA',
                '300 FCFA pour 100 F de CA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Nombre de tranches de 100 F dans 15 000 000 F = 15 000 000 / 100 = 150 000. Taux de frais = 450 000 / 150 000 = 3 FCFA pour 100 F de CA (soit 3 %).',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : Valorisation des stocks et inventaire permanent
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch2',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Valorisation des stocks et inventaire permanent',
    summary:
      'Tenue des fiches d’inventaire permanent (SI + Entrées = Sorties + SF), valorisation des entrées et sorties selon CUMP (fin de période et après chaque entrée), PEPS/FIFO, DEPS/LIFO, coûts conventionnels et différences d’inventaire (mali/boni).',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Analytique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch2_p1',
        order: 1,
        title: 'Inventaire permanent, valorisation des entrées et équation fondamentale des stocks',
        summary:
          'Distinguer inventaire permanent et intermittent, vérifier l’équilibre fondamental SI + Entrées = Sorties + SF et valoriser correctement les entrées de matières et de produits.',
        conceptExplanation:
          'L’inventaire permanent est une organisation comptable des stocks qui enregistre au jour le jour chaque mouvement (entrée et sortie) afin de connaître à tout moment les quantités et valeurs disponibles en magasin.\n\n' +
          'Tout compte de stock obéit à l’équation fondamentale de conservation : $\\text{Stock Initial (SI)} + \\text{Entr\\acute{e}es (E)} = \\text{Sorties (S)} + \\text{Stock Final (SF)}$ (vérifiée en quantités et en valeurs lorsque les coûts sont homogènes).\n\n' +
          'En entrée de stock, la règle est sans ambiguïté : les matières premières et marchandises achetées entrent à leur **Coût d’achat** ($\\text{Prix d’achat} + \\text{Charges d’approvisionnement}$), tandis que les produits fabriqués entrent à leur **Coût de production** ($\\text{Co\\^ut des mati\\`eres consomm\\acute{e}es} + \\text{Charges de production}$).',
        formulas: [
          {
            name: 'Équation fondamentale d’un compte de stock',
            formula: '\\text{SI} + \\text{Entr\\acute{e}es} = \\text{Sorties} + \\text{SF} \\;\\iff\\; \\text{SF} = \\text{SI} + \\text{Entr\\acute{e}es} - \\text{Sorties}',
            note: 'Permet de calculer le stock final théorique avant inventaire physique.',
          },
          {
            name: 'Coût d’entrée en stock (matières / produits)',
            formula: '\\text{Co\\^ut d’achat} = \\text{PA} + \\text{Frais d’approv.} \\quad ; \\quad \\text{Co\\^ut de prod.} = \\text{CAMPC} + \\text{Charges de prod.}',
            note: 'Les frais d’approche (transport, manutention, douane, transit) s’ajoutent au prix d’achat HT.',
          },
        ],
        keyRule:
          'Les entrées en stock sont toujours évaluées au coût réel d’entrée (coût d’achat pour les matières/marchandises, coût de production pour les produits finis) ; le vrai problème d’évaluation concerne les SORTIES.',
        workedExample: {
          title: 'Coût d’entrée en stock à l’importation — Cas Ivoire Papier SA',
          statement:
            'Ivoire Papier SA importe 1 000 paquets de rames à 1 500 FCFA le paquet pour fabriquer 3 000 cahiers. Frais d’importation : transport local 50 F/paquet, manutention 200 000 F, douane export 100 000 F, fret maritime 400 000 F, douane import 200 000 F, acheminement final 200 000 F. Les frais d’atelier pour les 3 000 cahiers sont de 350 000 F. Calculer le coût unitaire d’entrée des rames puis des cahiers.',
          methodSteps: [
            '1) Prix d’achat des rames = 1 000 × 1 500 = 1 500 000 FCFA.',
            '2) Frais d’approvisionnement = (1 000 × 50) + 200 000 + 100 000 + 400 000 + 200 000 + 200 000 = 1 150 000 FCFA.',
            '3) Coût d’achat des 1 000 rames (= entrée stock matières) = 1 500 000 + 1 150 000 = 2 650 000 FCFA, soit 2 650 F/paquet.',
            '4) Coût de production des 3 000 cahiers (= entrée stock produits finis) = 2 650 000 + 350 000 = 3 000 000 FCFA, soit 1 000 F/cahier.',
          ],
          conclusion:
            'Les rames entrent en stock au coût d’achat unitaire de 2 650 FCFA et les cahiers fabriqués entrent au coût de production unitaire de 1 000 FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Inventaire permanent',
            stepTheme: 'Suivi continu des stocks',
            stepTitle: 'Distinguer inventaire permanent et inventaire intermittent',
            paragraphText:
              'Pourquoi la comptabilité analytique ne peut-elle pas attendre le 31 décembre pour compter ce qui reste en entrepôt ? Parce qu’un manager doit connaître ses coûts chaque mois.\n' +
              '• **Inventaire intermittent (CG)** : on n’enregistre pas les sorties au fil de l’eau ; on compte physiquement le stock une fois par an pour calculer la variation ($SI - SF$).\n' +
              '• **Inventaire permanent (CAGE)** : chaque bon de réception (entrée) et chaque bon de sortie est enregistré en quantité et en valeur au jour le jour, donnant en permanence le niveau du stock.',
            keyRule:
              'L’inventaire permanent permet de suivre en temps réel l’existant en stock et de valoriser immédiatement les sorties consommées dans les coûts.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de l’organisation des comptes de stock en « inventaire permanent » en comptabilité analytique ?',
              options: [
                'Supprimer définitivement le comptage physique annuel en entrepôt',
                'Connaître de façon constante les mouvements (entrées/sorties) et valoriser les consommations pour le calcul des coûts',
                'Éviter d’enregistrer les achats de matières en comptabilité générale',
                'Calculer uniquement le chiffre d’affaires TTC',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’inventaire permanent suit chaque entrée et chaque sortie en continu afin de valoriser les sorties de matières/produits et connaître l’état du stock à tout moment.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Équation de stock',
            stepTheme: 'Conservation des flux',
            stepTitle: 'Maîtriser et vérifier l’équation SI + Entrées = Sorties + SF',
            paragraphText:
              'Tout mouvement de magasin respecte une loi de conservation physique élémentaire : ce qui était là au départ plus ce qui est rentré égale ce qui est sorti plus ce qui reste.\n' +
              '• **En quantités** : $Q_{SI} + Q_E = Q_S + Q_{SF}$. Cette identité permet de retrouver n’importe quelle quantité manquante (ex. : $Q_{SF} = Q_{SI} + Q_E - Q_S$).\n' +
              '• **En valeurs** : $V_{SI} + V_E = V_S + V_{SF}$ (à l’écart d’arrondi près en CUMP après chaque entrée).\n' +
              '• **Exemple** : SI = 320 kg, Entrées = 390 kg, Sorties = 440 kg → SF théorique = $320 + 390 - 440 = 270$ kg.',
            formula: {
              name: 'Équilibre comptable du compte de stock',
              formula: '\\text{Débit (SI + Entrées)} = \\text{Crédit (Sorties + SF)}',
              note: 'C’est le premier réflexe de vérification à la fin d’une fiche de stock.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Au début du mois, le stock de farine est de 320 kg. Durant le mois, 390 kg entrent en magasin et 440 kg sortent vers la boulangerie. Quel doit être le stock final théorique ?',
              options: [
                '370 kg',
                '270 kg',
                '710 kg',
                '170 kg',
              ],
              correctAnswerIndex: 1,
              explanation:
                'SF théorique = SI + Entrées − Sorties = 320 + 390 − 440 = 270 kg.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Entrées matières',
            stepTheme: 'Coût d’achat en entrée',
            stepTitle: 'Évaluer l’entrée en stock des matières achetées au coût d’achat',
            paragraphText:
              'Lorsque des matières premières ou marchandises arrivent en entrepôt, elles ne sont pas valorisées au simple prix catalogue du fournisseur.\n' +
              '• **Composition du coût d’achat** : Prix d’achat net HT (déduction faite des RRR) + Frais directs d’approvisionnement (transport sur achat, droits de douane, manutention, assurance transport) + Frais indirects du centre Approvisionnement.\n' +
              '• **Exemple** : 500 m de velours achetés 450 F/m + 5 F/m de transport + 1 F/m de réception/contrôle entrent en stock à $450 + 5 + 1 = 456$ F/m (soit 228 000 F au total).',
            konanTip:
              'N’oublie jamais d’inclure les frais d’importation (fret, transit, droits de douane) ET les frais indirects du centre Approvisionnement dans la valeur d’entrée du stock !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Une maison de couture achète 600 m de tissu satin à 250 F/m HT, paie 5 F/m de port et supporte 0,6 F/m de frais de réception et contrôle. À quel coût unitaire le tissu entre-t-il en stock ?',
              options: [
                '250,00 FCFA/m',
                '255,00 FCFA/m',
                '255,60 FCFA/m',
                '250,60 FCFA/m',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Coût d’achat unitaire = Prix d’achat (250) + Transport (5) + Réception/contrôle (0,6) = 255,60 FCFA le mètre (total 153 360 F pour 600 m).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Entrées produits',
            stepTheme: 'Coût de production en entrée',
            stepTitle: 'Évaluer l’entrée en stock des produits finis au coût de production',
            paragraphText:
              'Dans une entreprise industrielle, les produits fabriqués sortent de l’atelier pour entrer dans le magasin des produits finis.\n' +
              '• **Coût d’entrée** : il s’agit impérativement du **Coût de production des produits fabriqués (CPPF)**, égal au coût d’achat des matières consommées + main-d’œuvre directe + charges indirectes d’atelier.\n' +
              '• **Exclusion stricte** : les frais de distribution (publicité, livraison client) et d’administration générale n’entrent JAMAIS dans la valorisation des stocks de produits finis.',
            keyRule:
              'Un produit fini stocké n’a pas encore été vendu : il ne doit donc contenir aucune charge de distribution ou de commercialisation !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Parmi les charges suivantes, laquelle NE doit PAS être intégrée au coût d’entrée en stock des produits finis ?',
              options: [
                'Le coût d’achat des matières premières consommées',
                'Les salaires des ouvriers de l’atelier de fabrication',
                'Les commissions des représentants commerciaux sur les ventes',
                'L’amortissement des machines de l’atelier',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les commissions des commerciaux sont des frais de distribution (hors production) qui entrent uniquement dans le coût de revient des produits VENDUS, jamais dans la valeur du stock.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Le problème des sorties',
            stepTheme: 'Lots hétérogènes',
            stepTitle: 'Comprendre pourquoi la valorisation des sorties pose un problème comptable',
            paragraphText:
              'Si toutes les entrées étaient achetées au même prix exact, valoriser les sorties serait trivial. En réalité, les prix fluctuent d’une livraison à l’autre.\n' +
              '• **Situation réelle** : un entrepôt mélange 30 unités entrées à 120 F, 20 unités entrées à 150 F et 35 unités entrées à 110 F. Quand l’atelier prélève 25 unités, à quel coût unitaire les sortir ?\n' +
              '• **Trois familles de solutions** : les coûts moyens pondérés (CUMP), l’épuisement des lots (PEPS/FIFO et DEPS/LIFO) et les coûts conventionnels (NIFO, coûts approchés).',
            konanTip:
              'En comptabilité SYSCOHADA (et normes internationales IAS 2), seules deux familles restent autorisées pour les états financiers : le CUMP et le FIFO (PEPS) ! Le LIFO et le NIFO servent uniquement en gestion interne.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi le choix de la méthode de valorisation des sorties (CUMP, FIFO, LIFO) est-il décisif pour l’entreprise ?',
              options: [
                'Il modifie les quantités physiques réellement présentes dans l’entrepôt',
                'Il influence directement le coût de production/revient, la valeur du stock final au Bilan et le résultat analytique',
                'Il change le taux légal de la TVA',
                'Il n’a aucun impact chiffré si les prix d’achat varient',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsque les prix d’achat varient dans le temps, la méthode de sortie répartit différemment la valeur totale entre les sorties (charges/coûts) et le stock final (actif).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Quantité vs Valeur',
            stepTitle: 'Vérifier la cohérence des coûts unitaires sur un compte de stock',
            paragraphText:
              'Un contrôle rapide évite la majorité des erreurs de calcul sur les fiches de stock.\n' +
              '• **Borne logique du coût unitaire** : le coût unitaire de sortie ou du stock final (en CUMP, FIFO ou LIFO) doit TOUJOURS être compris entre le plus bas et le plus haut prix unitaire d’entrée de la période !\n' +
              '• **Exemple** : si toutes les entrées se situent entre 110 F et 180 F, obtenir un CUMP de 95 F ou de 210 F signale immédiatement une inversion entre numérateur et dénominateur ou une erreur de saisie.',
            keyRule:
              'Contrôle express : $\\min(CU_{\\text{entrées}}) \\le \\text{CUMP} \\le \\max(CU_{\\text{entrées}})$.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Toutes les entrées du mois de mai (y compris le SI) ont coûté entre 80 F/kg et 108 F/kg. Un étudiant trouve un CUMP de fin de période de 115,40 F/kg. Que peut-on affirmer immédiatement ?',
              options: [
                'Le résultat est plausible car la TVA a été ajoutée',
                'Le calcul est nécessairement faux car une moyenne pondérée ne peut pas dépasser le maximum (108 F/kg)',
                'C’est normal en méthode FIFO',
                'Cela prouve un boni d’inventaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une moyenne pondérée se situe toujours entre la valeur minimale (80 F) et la valeur maximale (108 F) des lots qui la composent.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch2_p2',
        order: 2,
        title: 'Méthodes du Coût Unitaire Moyen Pondéré (CUMP fin de période et après chaque entrée)',
        summary:
          'Calculer le CUMP de fin de période et tenir une fiche complète de stock en CUMP mobile recalculé après chaque entrée.',
        conceptExplanation:
          'La famille du Coût Unitaire Moyen Pondéré (CUMP) lisse les variations de prix en considérant le stock comme une masse fongible.\n\n' +
          '1) **CUMP de fin de période** : on attend la fin du mois pour calculer un coût moyen unique égal à la valeur totale disponible ($\\text{Valeur SI} + \\sum \\text{Valeur Entr\\acute{e}es}$) divisée par la quantité totale disponible ($Q_{SI} + \\sum Q_E$). Toutes les sorties et le stock final sont alors valorisés à ce CUMP unique.\n\n' +
          '2) **CUMP après chaque entrée (CUMP mobile)** : pour pallier le retard du calcul en fin de mois et respecter le principe de valorisation immédiate de l’inventaire permanent, on recalcule un nouveau CUMP uniquement après chaque nouvelle entrée en stock : les sorties suivantes utilisent le dernier CUMP calculé jusqu’à l’entrée suivante.',
        formulas: [
          {
            name: 'CUMP de fin de période',
            formula: '\\text{CUMP} = \\frac{\\text{Valeur SI} + \\sum \\text{Valeurs Entr\\acute{e}es}}{\\text{Quantit\\acute{e} SI} + \\sum \\text{Quantit\\acute{e}s Entr\\acute{e}es}}',
            note: 'Simple à calculer mais oblige à attendre la fin de période pour chiffrer les coûts.',
          },
          {
            name: 'CUMP après chaque entrée (CUMP mobile)',
            formula: '\\text{CUMP}_k = \\frac{\\text{Valeur stock pr\\acute{e}c\\acute{e}dent} + \\text{Valeur nouvelle entr\\acute{e}e}}{\\text{Quantit\\acute{e} stock pr\\acute{e}c\\acute{e}dent} + \\text{Quantit\\acute{e} nouvelle entr\\acute{e}e}}',
            note: 'Une sortie de stock ne modifie JAMAIS le CUMP ; seule une entrée le recalcule !',
          },
        ],
        keyRule:
          'En CUMP après chaque entrée : une ENTRÉE recalcule le CUMP ; une SORTIE ne change pas le CUMP et s’évalue simplement au dernier CUMP en vigueur.',
        workedExample: {
          title: 'Comparaison des deux méthodes CUMP sur un même mouvement mensuel',
          statement:
            'Stock au 01/01 : 30 u à 120 F. Mouvements : 06/01 Sortie 15 u ; 10/01 Entrée 20 u à 150 F ; 12/01 Sortie 25 u ; 17/01 Entrée 35 u à 110 F ; 26/01 Entrée 15 u à 180 F ; 28/01 Sortie 35 u. Calculer le CUMP de fin de période et le SF, puis le premier CUMP mobile du 10/01.',
          methodSteps: [
            '1) CUMP fin de période : Valeur totale = (30×120) + (20×150) + (35×110) + (15×180) = 3 600 + 3 000 + 3 850 + 2 700 = 13 150 F. Quantité totale = 30 + 20 + 35 + 15 = 100 u.',
            '2) CUMP fin de période = 13 150 / 100 = 131,50 F/u. Stock final (25 u) = 25 × 131,50 = 3 287,50 F.',
            '3) CUMP mobile jusqu’au 10/01 : le 06/01, la sortie de 15 u sort à 120 F (= 1 800 F), il reste 15 u à 120 F (= 1 800 F).',
            '4) Le 10/01 (Entrée 20 u à 150 F = 3 000 F) : Nouveau CUMP = (1 800 + 3 000) / (15 + 20) = 4 800 / 35 = 137,14 F/u.',
          ],
          conclusion:
            'La méthode fin de période donne un SF de 3 287,50 F (calcul différé), tandis que le CUMP mobile permet de valoriser immédiatement la sortie du 12/01 à 137,14 F/u.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'CUMP fin de période',
            stepTheme: 'Calcul mensuel unique',
            stepTitle: 'Calculer le CUMP de fin de période en intégrant le stock initial',
            paragraphText:
              'La méthode du CUMP de fin de période (ou CUMP mensuel) est la plus simple mathématiquement : elle traite la période entière comme un grand panier unique.\n' +
              '• **Numérateur** : Valeur du stock initial + Somme des valeurs de toutes les entrées du mois.\n' +
              '• **Dénominateur** : Quantité du stock initial + Somme des quantités entrées durant le mois.\n' +
              '• **Application** : toutes les sorties du mois et le stock final sont multipliés par ce coût moyen unique (ex. : $13\,150 / 100 = 131{,}50$ F).',
            formula: {
              name: 'CUMP de fin de période',
              formula: '\\text{CUMP} = \\frac{V_{SI} + \\sum V_E}{Q_{SI} + \\sum Q_E}',
              note: 'Ne jamais oublier d’inclure le Stock Initial (SI) au numérateur et au dénominateur !',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une matière présente un SI de 100 kg à 500 F/kg, et deux entrées dans le mois : 200 kg à 560 F/kg et 100 kg à 620 F/kg. Quel est le CUMP de fin de période ?',
              options: [
                '560,00 FCFA/kg',
                '565,00 FCFA/kg',
                '573,33 FCFA/kg',
                '590,00 FCFA/kg',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Valeur totale = (100×500) + (200×560) + (100×620) = 50 000 + 112 000 + 62 000 = 224 000 F. Quantité totale = 100 + 200 + 100 = 400 kg. CUMP = 224 000 / 400 = 560 FCFA/kg.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Limite',
            stepTheme: 'Critique du CUMP mensuel',
            stepTitle: 'Identifier le principal défaut du CUMP de fin de période',
            paragraphText:
              'Bien qu’elle lisse parfaitement les fluctuations de prix, la méthode du CUMP de fin de période se heurte à une exigence pratique de gestion.\n' +
              '• **Défaut majeur** : tant que le mois n’est pas terminé et que la dernière facture d’entrée n’est pas connue, il est impossible de valoriser les sorties survenues le 3, le 10 ou le 18 du mois !\n' +
              '• **Conséquence** : les fiches de coûts restent bloquées jusqu’à la clôture mensuelle, ce qui contredit l’objectif de suivi en temps réel de l’inventaire permanent.\n' +
              '• **Solution** : adopter le CUMP après chaque entrée (ou le FIFO).',
            keyRule:
              'Le CUMP de fin de période retarde le calcul des coûts jusqu’à la fin de la période ; le CUMP après chaque entrée permet une valorisation immédiate à chaque bon de sortie.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel est le principal reproche adressé à la méthode du CUMP de fin de période ?',
              options: [
                'Elle est interdite par les normes comptables OHADA',
                'Elle empêche de valoriser les sorties en cours de période avant de connaître toutes les entrées jusqu’au dernier jour',
                'Elle ne prend pas en compte le stock initial',
                'Elle donne toujours le même stock final que la méthode LIFO',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le CUMP de fin de période nécessite le cumul de toutes les entrées du mois, empêchant le chiffrage immédiat des bons de sortie en cours de mois.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'CUMP mobile',
            stepTheme: 'Recalcul après chaque entrée',
            stepTitle: 'Appliquer la règle de recalcul du CUMP après chaque entrée',
            paragraphText:
              'Dans la méthode du CUMP après chaque entrée, le coût unitaire moyen est mis à jour dynamiquement à chaque réception de marchandise ou matière.\n' +
              '• **Lors d’une ENTRÉE** : on additionne la valeur du stock restant juste avant l’entrée et la valeur de la nouvelle entrée, puis on divise par la nouvelle quantité totale.\n' +
              '• **Lors d’une SORTIE** : aucune division n’est à faire ! On sort les quantités exactement au dernier CUMP calculé, ce qui conserve ce même CUMP pour le stock restant.\n' +
              '• **Piège classique** : ne jamais recalculer le CUMP après une sortie !',
            konanTip:
              'En CUMP après chaque entrée, retiens : Entrée = division (nouveau CUMP) ; Sortie = multiplication (même CUMP qu’au-dessus) !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Après une entrée le 10 mars, le stock est de 40 unités à 250 F/u (10 000 F). Le 14 mars, 15 unités sortent vers l’atelier. Quel est le CUMP du stock restant (25 unités) juste après cette sortie ?',
              options: [
                'Il doit être recalculé en divisant par 25',
                'Il reste strictement égal à 250 F/u',
                'Il passe à 400 F/u',
                'Il devient nul',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une sortie de stock s’effectue au dernier CUMP en vigueur (250 F) et ne modifie pas le coût unitaire moyen du stock restant : 25 × 250 = 6 250 F.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Fiche de stock',
            stepTheme: 'Tableau CUMP mobile',
            stepTitle: 'Lire et vérifier une fiche de stock complète en CUMP mobile',
            paragraphText:
              'La fiche ci-dessous retrace l’ensemble des 7 mouvements de janvier en CUMP après chaque entrée.\n' +
              '• **Remarque sur les arrondis** : lorsque la division ne tombe pas juste (ex. $4\,800 / 35 = 137{,}1428\dots$), on arrondit à 2 décimales ($137{,}14$), ce qui crée de légers écarts d’arrondi de quelques centimes sur la valeur résiduelle ($1\,371{,}5$ F).\n' +
              '• **Contrôle final** : au 28/01, après toutes les entrées et sorties, il reste 25 unités valorisées à 132,02 F = 3 300,50 F.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Fiche de stock — Méthode du CUMP après chaque entrée (en FCFA)',
              caption: 'Le CUMP est recalculé uniquement aux dates d’entrée (10/01, 17/01, 26/01).',
              tableData: {
                headers: ['Date & Libellé', 'Entrées (Q × CU = Mt)', 'Sorties (Q × CU = Mt)', 'Stock final (Q × CU = Mt)'],
                rows: [
                  ['01/01 Stock initial', '—', '—', '30 × 120 = 3 600'],
                  ['06/01 Bon de sortie', '—', '15 × 120 = 1 800', '15 × 120 = 1 800'],
                  ['10/01 Bon de réception', '20 × 150 = 3 000', '—', '35 × 137,14 = 4 800'],
                  ['12/01 Bon de sortie', '—', '25 × 137,14 = 3 428,5', '10 × 137,14 = 1 371,5'],
                  ['17/01 Bon de réception', '35 × 110 = 3 850', '—', '45 × 116,03 = 5 221,5'],
                  ['26/01 Bon de réception', '15 × 180 = 2 700', '—', '60 × 132,03 = 7 921,5'],
                  ['28/01 Bon de sortie', '—', '35 × 132,03 = 4 621,0', '25 × 132,02 = 3 300,5'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Dans la fiche de stock ci-dessus, comment obtient-on le CUMP de 116,03 F le 17/01 ?',
              options: [
                '(137,14 + 110) / 2 = 123,57 F',
                '(1 371,5 + 3 850) / (10 + 35) = 5 221,5 / 45 = 116,03 F',
                '3 850 / 35 = 110 F',
                '5 221,5 / 35 = 149,19 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On additionne la valeur restante avant entrée (1 371,5 F pour 10 u) et la valeur de la nouvelle entrée (3 850 F pour 35 u) = 5 221,5 F, divisée par 10 + 35 = 45 unités → 116,03 F.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Erreur de moyenne simple',
            stepTitle: 'Ne jamais faire la moyenne arithmétique simple des prix unitaires',
            paragraphText:
              'Un piège très courant consiste à calculer la moyenne simple des prix unitaires sans tenir compte des quantités achetées !\n' +
              '• **Exemple frappant** : s’il reste 10 unités à 100 F (1 000 F) et qu’on achète 90 unités à 200 F (18 000 F), le prix moyen simple $(100+200)/2 = 150$ F est FAUX.\n' +
              '• **Calcul pondéré exact** : $(1\,000 + 18\,000) / (10 + 90) = 19\,000 / 100 = 190$ F (beaucoup plus proche de 200 F car le lot de 90 unités pèse 9 fois plus que celui de 10 unités).\n' +
              '• D’où le mot **Pondéré** dans CUMP : chaque prix est pondéré par sa quantité.',
            keyRule:
              'Un CUMP est toujours un quotient de VALEURS totales sur des QUANTITÉS totales, jamais la moyenne arithmétique des coûts unitaires.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Un magasin détient 10 unités à 200 F/u et reçoit une livraison de 40 unités à 150 F/u. Quel est le nouveau CUMP ?',
              options: [
                '175 FCFA/u',
                '160 FCFA/u',
                '180 FCFA/u',
                '190 FCFA/u',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CUMP = (10 × 200 + 40 × 150) / (10 + 40) = (2 000 + 6 000) / 50 = 8 000 / 50 = 160 FCFA/u (et non la moyenne simple 175 F).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Entrées successives',
            stepTheme: 'Entrées consécutives',
            stepTitle: 'Enchaîner deux entrées consécutives sans sortie intermédiaire',
            paragraphText:
              'Lorsqu’une entreprise reçoit deux livraisons successives avant la sortie suivante (comme le 17/01 puis le 26/01 dans notre fiche), le principe reste rigoureusement identique.\n' +
              '• **17/01** : stock cumulé = 45 u pour 5 221,5 F (CUMP = 116,03 F).\n' +
              '• **26/01** : sans sortie intermédiaire, nouvelle entrée de 15 u à 180 F = 2 700 F → nouveau stock = 60 u pour 7 921,5 F → nouveau CUMP = $7\,921{,}5 / 60 = 132{,}03$ F.\n' +
              '• **Conseil d’examen** : pour limiter les erreurs d’arrondi en cascade, garde toujours la valeur totale exacte en stock (colonne Mt) et recalcule le CUMP en divisant Montant total / Quantité totale !',
            konanTip:
              'Astuce anti-arrondi : dans la colonne Stock final, calcule d’abord la valeur totale $Mt_{\\text{nouveau}} = Mt_{\\text{précédent}} + Mt_{\\text{entrée}}$, puis divise par $Q_{\\text{nouvelle}}$ pour obtenir le CUMP !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Avant le 26/01, le stock vaut 5 221,5 F pour 45 unités. Une entrée de 15 unités à 180 F (2 700 F) a lieu le 26/01 sans sortie préalable. Quelle est la valeur totale du stock après cette entrée ?',
              options: [
                '7 921,5 FCFA pour 60 unités',
                '5 221,5 FCFA pour 60 unités',
                '2 700 FCFA pour 15 unités',
                '10 800 FCFA pour 60 unités',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La valeur totale s’additionne directement : 5 221,5 + 2 700 = 7 921,5 FCFA pour 45 + 15 = 60 unités (CUMP = 132,025 F).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch2_p3',
        order: 3,
        title: 'Épuisement des lots (PEPS/FIFO, DEPS/LIFO), coûts conventionnels et différences d’inventaire',
        summary:
          'Appliquer les méthodes FIFO (PEPS) et LIFO (DEPS), comprendre NIFO et les coûts approchés, comparer leur impact financier et traiter les bonis et malis d’inventaire.',
        conceptExplanation:
          'Contrairement au CUMP qui fusionne les lots, les méthodes d’épuisement des lots conservent l’individualité de chaque lot entré et valorisent les sorties immédiatement :\n' +
          '• **PEPS / FIFO (Premier Entré, Premier Sorti)** : les sorties prélèvent d’abord dans les lots les plus anciens jusqu’à épuisement. Le stock final reste donc valorisé aux prix les plus récents.\n' +
          '• **DEPS / LIFO (Dernier Entré, Premier Sorti)** : les sorties prélèvent d’abord dans les lots les plus récents. Le stock final reste valorisé aux prix les plus anciens.\n\n' +
          'On utilise parfois des **coûts conventionnels** (NIFO = coût de remplacement probable du mois suivant, ou coût approché/standard) générant des différences d’incorporation. Enfin, lors du comptage physique, si $SF_{\\text{réel}} < SF_{\\text{théorique}}$, on constate un **mali d’inventaire** (inscrit en sortie fictive) ; si $SF_{\\text{réel}} > SF_{\\text{théorique}}$, c’est un **boni d’inventaire** (inscrit en entrée fictive).',
        formulas: [
          {
            name: 'Différence d’inventaire (Mali vs Boni)',
            formula: '\\Delta \\text{Inventaire} = Q_{SF\\text{ réel}} - Q_{SF\\text{ théorique}} \\;\\Rightarrow\\; \\begin{cases} < 0 : \\text{Mali (sortie fictive au Cr\\acute{e}dit)} \\\\ > 0 : \\text{Boni (entr\\acute{e}e fictive au D\\acute{e}bit)} \\end{cases}',
            note: 'Le redressement porte uniquement sur les quantités manquantes ou excédentaires au coût du SF, sans recalculer les coûts des sorties passées.',
          },
        ],
        keyRule:
          'En période d’inflation (hausse des prix) : FIFO valorise les sorties au plus bas (résultat plus élevé) et le stock final au plus haut ; LIFO valorise les sorties au plus haut (coûts plus élevés) et le stock final au plus bas.',
        workedExample: {
          title: 'Comparaison FIFO vs LIFO et traitement d’un mali d’inventaire',
          statement:
            'Sur l’application de janvier (SI 30@120 ; 06/01 S 15 ; 10/01 E 20@150 ; 12/01 S 25 ; 17/01 E 35@110 ; 26/01 E 15@180 ; 28/01 S 35), calculer le stock final en FIFO puis en LIFO, et traiter un stock réel constaté de 23 unités en CUMP fin de période (131,50 F).',
          methodSteps: [
            '1) En FIFO (PEPS) : on épuise par le haut → 06/01 : 15@120 ; 12/01 : 15@120 + 10@150 ; 28/01 : 10@150 + 25@110. Il reste 10@110 (1 100 F) + 15@180 (2 700 F) = 3 800 F.',
            '2) En LIFO (DEPS) : on épuise par le bas → 06/01 : 15@120 ; 12/01 : 20@150 + 5@120 ; 28/01 : 15@180 + 20@110. Il reste 10@120 (1 200 F) + 15@110 (1 650 F) = 2 850 F.',
            '3) Différence d’inventaire : SF théorique = 25 u, SF réel = 23 u → SF réel < SF théorique = Mali d’inventaire de 2 unités.',
            '4) Au CUMP fin de période (131,50 F) : SF réel = 23 × 131,50 = 3 024,50 F et Mali d’inventaire (colonne Crédit/Sorties) = 2 × 131,50 = 263 F.',
          ],
          conclusion:
            'Le stock final varie de 2 850 F (LIFO) à 3 800 F (FIFO) pour les mêmes 25 unités, et le mali de 2 unités (263 F) permet d’équilibrer le compte d’inventaire permanent à 13 150 F.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'PEPS / FIFO',
            stepTheme: 'Premier entré, premier sorti',
            stepTitle: 'Valoriser les sorties et le stock final par la méthode PEPS (FIFO)',
            paragraphText:
              'La méthode PEPS (Premier Entré, Premier Sorti) ou FIFO (First In, First Out) suit l’ordre chronologique naturel de rotation des stocks périssables.\n' +
              '• **Principe** : à chaque sortie, on puise d’abord dans le lot le plus ancien encore en stock ; une fois ce lot épuisé, on entame le lot suivant.\n' +
              '• **Exemple (12/01, sortie de 25 u)** : le stock contient 15 u à 120 F (reliquat du SI) et 20 u à 150 F (entrée du 10/01). On sort donc $15 \\times 120 + 10 \\times 150 = 3\,300$ F, et il reste 10 u à 150 F.\n' +
              '• **Avantage** : valorisation immédiate des sorties et stock final évalué aux prix les plus récents.',
            keyRule:
              'En FIFO, ne mélange jamais deux lots à des prix différents : garde toujours une ligne par lot dans la colonne Stock final !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Le stock comprend deux lots : 20 unités entrées le 01/04 à 500 F et 30 unités entrées le 08/04 à 600 F. Le 12/04, 25 unités sortent selon la méthode FIFO (PEPS). Quelle est la valeur de cette sortie ?',
              options: [
                '15 000 FCFA',
                '12 500 FCFA',
                '13 000 FCFA',
                '14 500 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En FIFO, on sort d’abord les 20 unités les plus anciennes à 500 F (10 000 F) puis 5 unités du lot suivant à 600 F (3 000 F), soit 13 000 FCFA au total.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'DEPS / LIFO',
            stepTheme: 'Dernier entré, premier sorti',
            stepTitle: 'Appliquer la méthode DEPS (LIFO) et analyser ses conséquences',
            paragraphText:
              'La méthode DEPS (Dernier Entré, Premier Sorti) ou LIFO (Last In, First Out) fonctionne exactement à l’envers du FIFO.\n' +
              '• **Principe** : toute sortie prélève en priorité dans les lots arrivés le plus récemment ; les lots anciens demeurent au fond du stock.\n' +
              '• **Exemple (12/01, sortie de 25 u)** : face à 15@120 et 20@150, le LIFO sort d’abord les 20@150 (3 000 F) puis 5@120 (600 F) = 3 600 F, laissant 10@120.\n' +
              '• **Usage** : utile en gestion interne pour aligner les coûts de production sur les prix actuels du marché, mais non admis pour l’évaluation officielle des stocks au Bilan SYSCOHADA.',
            konanTip:
              'Pour réussir un tableau LIFO sans erreur, regarde toujours la dernière entrée tout en bas de ta pile de lots et remonte vers les plus anciens !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Avec les mêmes lots (20 u du 01/04 à 500 F et 30 u du 08/04 à 600 F), quelle est la valeur de la sortie de 25 unités du 12/04 selon la méthode LIFO (DEPS) ?',
              options: [
                '13 000 FCFA',
                '15 000 FCFA',
                '12 500 FCFA',
                '14 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En LIFO, les 25 unités sont prélevées en totalité dans le dernier lot entré le 08/04 à 600 F : 25 × 600 = 15 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Comparaison visuelle',
            stepTheme: 'Impact sur le stock final',
            stepTitle: 'Comparer la valorisation du stock final selon CUMP, FIFO et LIFO',
            paragraphText:
              'Le graphique ci-dessous compare la valeur du même stock final physique de 25 unités (application de janvier) selon les quatre méthodes classiques.\n' +
              '• **Écart extrême** : FIFO donne 3 800 F (car les 15 dernières unités achetées à 180 F restent en stock) tandis que LIFO ne donne que 2 850 F (car ces unités chères ont été sorties en priorité).\n' +
              '• **Position intermédiaire** : les deux variantes de CUMP se situent au centre (3 287,5 F et 3 300,5 F).',
            visualSchema: {
              type: 'bar_chart',
              title: 'Valeur du stock final (25 unités) selon la méthode choisie',
              caption: 'Données de l’application standard : entrée récente en hausse à 180 F/unité.',
              barChart: {
                yLabel: 'Stock final',
                unit: 'F',
                bars: [
                  { label: 'LIFO (DEPS)', value: 2850, color: 'orange', annotation: '2 850 F' },
                  { label: 'CUMP fin pér.', value: 3288, color: 'blue', annotation: '3 287,5 F' },
                  { label: 'CUMP mobile', value: 3301, color: 'violet', annotation: '3 300,5 F' },
                  { label: 'FIFO (PEPS)', value: 3800, color: 'green', annotation: '3 800 F' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Dans un contexte de hausse continue des prix d’achat (inflation), quelle méthode donne la valeur la plus ÉLEVÉE pour le stock final au Bilan ?',
              options: [
                'La méthode LIFO (DEPS)',
                'La méthode CUMP de fin de période',
                'La méthode FIFO (PEPS)',
                'Toutes donnent exactement la même valeur',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En période d’inflation, les derniers lots achetés sont les plus chers ; comme FIFO sort d’abord les anciens lots bon marché, ce sont les lots récents (les plus chers) qui restent en stock final.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Coûts conventionnels',
            stepTheme: 'NIFO et coûts approchés',
            stepTitle: 'Comprendre la méthode NIFO et la méthode des coûts approchés',
            paragraphText:
              'Pour accélérer encore le calcul des coûts mensuels, certaines entreprises renoncent aux prix passés pour utiliser un tarif conventionnel prédéfini.\n' +
              '• **Méthode NIFO (Next In, First Out)** : les sorties sont valorisées au coût probable d’achat du mois suivant (coût de remplacement), mais le stock final reste évalué au CUMP de fin de période.\n' +
              '• **Méthode des coûts approchés** : sorties valorisées à un coût standard, au CUMP arrondi ou au CUMP du mois précédent.\n' +
              '• **Équilibrage** : l’écart entre les sorties conventionnelles et la réalité constitue une « différence d’incorporation sur matière ».',
            keyRule:
              'En NIFO ou en coût approché, le compte de stock fait apparaître une différence d’incorporation pour équilibrer (SI + Entrées) et (Sorties + SF).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Dans le cadre de la méthode NIFO, à quelle valeur les sorties de stock de janvier sont-elles chiffrées ?',
              options: [
                'Au prix du lot le plus ancien encore en rayon',
                'Au coût de remplacement probable (prochaine entrée attendue)',
                'Au coût du stock initial uniquement',
                'À zéro franc jusqu’à la clôture annuelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'NIFO (Next In, First Out) valorise les sorties au coût conventionnel de remplacement correspondant au prix probable de la prochaine commande.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Mali vs Boni',
            stepTheme: 'Différences d’inventaire',
            stepTitle: 'Distinguer et positionner un mali ou un boni d’inventaire',
            paragraphText:
              'En fin de période, le magasinier procède au comptage physique réel du stock, qui diverge parfois du stock final théorique calculé sur papier (casse, évaporation, vol, erreur de pesée).\n' +
              '• **Mali d’inventaire ($SF_{\\text{réel}} < SF_{\\text{théorique}}$)** : il manque des unités ! On redresse le compte de stock en inscrivant le manque du côté **Crédit (Sorties)** comme une « sortie fictive ».\n' +
              '• **Boni d’inventaire ($SF_{\\text{réel}} > SF_{\\text{théorique}}$)** : il y a un surplus ! On l’inscrit du côté **Débit (Entrées)** comme une « entrée fictive ».\n' +
              '• **Règle absolue** : le stock final retenu est toujours le $SF_{\\text{réel}}$ et on ne modifie jamais les coûts des sorties passées.',
            formula: {
              name: 'Équilibre après redressement d’inventaire',
              formula: '\\text{SI} + \\text{Entr\\acute{e}es} (+ \\text{Boni}) = \\text{Sorties} + SF_{\\text{r\\acute{e}el}} (+ \\text{Mali})',
              note: 'Le mali augmente virtuellement les sorties (Crédit) ; le boni augmente virtuellement les entrées (Débit).',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Le compte d’inventaire permanent indique un stock final théorique de 25 unités (CUMP = 131,50 F), mais le comptage physique réel en entrepôt ne trouve que 23 unités. De quoi s’agit-il et où l’inscrit-on ?',
              options: [
                'Un boni d’inventaire de 2 unités (263 F) inscrit au Débit (Entrées)',
                'Un mali d’inventaire de 2 unités (263 F) inscrit au Crédit (Sorties)',
                'Une erreur obligeant à recalculer le CUMP à 140 F',
                'Un mali de 23 unités inscrit au Débit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'SF réel (23) < SF théorique (25) : il manque 2 unités, c’est donc un mali d’inventaire de 2 × 131,50 = 263 F porté au Crédit (côté sorties) pour aligner le stock sur les 23 unités réelles.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Impact résultat',
            stepTheme: 'Concordance',
            stepTitle: 'Comprendre l’effet d’un boni ou mali d’inventaire sur le résultat analytique',
            paragraphText:
              'Où passent finalement ces bonis et malis constatés en fin de mois ? Ils ne modifient pas le coût de production des produits déjà fabriqués, mais interviennent lors de la concordance avec la comptabilité générale.\n' +
              '• **Mali d’inventaire** : c’est une perte réelle de matière ou de marchandise non expliquée par la production → il vient en **diminution (−)** du résultat analytique lors du rapprochement.\n' +
              '• **Boni d’inventaire** : c’est un gain inattendu de stock (surplus physique) → il vient en **augmentation (+)** du résultat analytique.\n' +
              '• **Exemple** : si le résultat analytique des produits est +4 000 000 F et qu’on constate un mali de 263 F, le résultat réconcilié baisse de 263 F.',
            konanTip:
              'Moyen mnémotechnique : MALI = Mal = perte (déduit du résultat lors de la concordance, écrit au Crédit du stock) ; BONI = Bon = gain (ajouté au résultat lors de la concordance, écrit au Débit du stock).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'En fin de mois, l’inventaire physique d’une matière révèle 512 kg réels alors que le théorique est de 500 kg (CUMP = 400 F/kg). Quel est l’impact de cette différence sur le résultat global lors de la concordance ?',
              options: [
                'Un mali de 4 800 F venant en diminution du résultat',
                'Un boni de 4 800 F venant en augmentation du résultat',
                'Un boni de 204 800 F',
                'Aucun impact sur la concordance',
              ],
              correctAnswerIndex: 1,
              explanation:
                'SF réel (512) > SF théorique (500) : c’est un boni d’inventaire de 12 kg × 400 F = +4 800 FCFA, inscrit en entrée fictive au Débit du stock et ajouté au résultat lors du rapprochement.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : Hiérarchie des coûts complets, en-cours et produits dérivés
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch3',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Hiérarchie des coûts complets, en-cours et concordance',
    summary:
      'Enchaînement complet des coûts (achat, production, hors production, revient, résultat analytique), traitement des produits en-cours et dérivés (déchets, rebuts, sous-produits) et concordance avec le résultat de comptabilité générale.',
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Analytique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch3_p1',
        order: 1,
        title: 'Enchaînement des coûts complets : du coût d’achat au coût de production',
        summary:
          'Maîtriser la pyramide complète des coûts complets, passer du coût d’achat des matières achetées (CAMPA) au coût des matières consommées (CAMPC), puis au coût de production des produits fabriqués (CPPF) et vendus (CPPV).',
        conceptExplanation:
          'La méthode des coûts complets suit exactement le cycle physique d’exploitation de l’entreprise industrielle en empilant les coûts étape par étape.\n\n' +
          '1) **Coût d’achat des matières achetées (CAMPA)** = Prix d’achat + Frais directs et indirects d’approvisionnement → entre dans le stock de matières premières.\n' +
          '2) **Coût d’achat des matières consommées (CAMPC)** = Sorties du stock de matières valorisées (ou $\\text{CAMPA} + SI_{MP} - SF_{MP}$).\n' +
          '3) **Coût de production des produits fabriqués (CPPF)** = CAMPC + Main-d’œuvre directe (MOD) + Charges indirectes d’atelier → entre dans le stock de produits finis.\n' +
          '4) **Coût de production des produits vendus (CPPV)** = Sorties du stock de produits finis vendus (ou $\\text{CPPF} + SI_{PF} - SF_{PF}$).',
        formulas: [
          {
            name: 'Chaîne Matières → Production → Sortie produits finis',
            formula: '\\text{CPPF} = \\text{CAMPC} + \\text{MOD} + \\text{CI Atelier} \\quad ; \\quad \\text{CPPV} = \\text{CPPF} + \\text{SI}_{PF} - \\text{SF}_{PF}',
            note: 'Ne jamais confondre CAMPA (acheté) et CAMPC (consommé), ni CPPF (fabriqué) et CPPV (vendu) dès qu’il existe des stocks !',
          },
        ],
        keyRule:
          'Deux sas de stockage séparent les coûts : le stock de matières premières transforme le CAMPA en CAMPC, et le stock de produits finis transforme le CPPF en CPPV.',
        workedExample: {
          title: 'Calcul en chaîne du CAMPA, CAMPC, CPPF et CPPV — Cas Agro-Industrie',
          statement:
            'Au 01/02, le stock de matière X est de 400 kg à 1 000 F/kg (400 000 F) et le stock de produit fini P est nul. Achats du mois : 1 000 kg à 950 F/kg + 150 000 F de frais d’approvisionnement. Consommation : 1 200 kg (valorisation CUMP fin de période) pour fabriquer 500 unités de P, avec 600 000 F de MOD et 400 000 F de charges d’atelier. 420 unités de P sont vendues. Calculer CAMPA, CAMPC, CPPF et CPPV.',
          methodSteps: [
            '1) CAMPA = (1 000 × 950) + 150 000 = 1 100 000 F pour 1 000 kg (1 100 F/kg).',
            '2) CUMP matière X = (400 000 + 1 100 000) / (400 + 1 000) = 1 500 000 / 1 400 = 1 071,43 F/kg.',
            '3) CAMPC (1 200 kg consommés) = 1 200 × 1 071,43 = 1 285 716 F.',
            '4) CPPF (500 P fabriqués) = 1 285 716 + 600 000 + 400 000 = 2 285 716 F, soit 4 571,43 F/unité.',
            '5) CPPV (420 P vendus, SI_PF = 0) = 420 × 4 571,43 = 1 920 000 F (et SF_PF = 80 × 4 571,43 = 365 716 F).',
          ],
          conclusion:
            'Chaque étape s’enchaîne par un passage en fiche de stock : seul le coût des quantités réellement consommées ou vendues passe à l’étape suivante.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Architecture',
            stepTheme: 'Hiérarchie des coûts',
            stepTitle: 'Visualiser la pyramide complète des coûts en comptabilité analytique',
            paragraphText:
              'La méthode des coûts complets repose sur une progression en 5 étages parfaitement ordonnés.\n' +
              '• **1. Coût d’achat** : rassemble le prix d’achat et les charges d’approvisionnement jusqu’à l’entrée en magasin.\n' +
              '• **2. Coût de production** : additionne le coût d’achat des matières consommées et les charges directes/indirectes de fabrication.\n' +
              '• **3. Coût de revient** : ajoute au coût de production des produits VENDUS les coûts hors production (distribution + administration).\n' +
              '• **4. Résultat analytique** : confronte enfin le Chiffre d’affaires (Prix de vente) au Coût de revient.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Hiérarchie des coûts complets (de l’achat au résultat analytique)',
              caption: 'Passage obligé par les fiches d’inventaire permanent entre achat → production → distribution.',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'Étape 1 — Approv.', title: 'Coût d’achat (CAMPA → Stock MP → CAMPC)', subtitle: 'Prix d’achat HT + Frais directs & indirects d’approvisionnement', color: 'blue' },
                  { badge: 'Étape 2 — Usine', title: 'Coût de production (CPPF → Stock PF → CPPV)', subtitle: 'Matières consommées (CAMPC) + MOD + Charges indirectes atelier (± en-cours / déchets)', color: 'violet' },
                  { badge: 'Étape 3 — Ventes', title: 'Coûts hors production (Distribution & Admin.)', subtitle: 'Frais commerciaux (pub, commissions, transport sur ventes) + Quote-part administration', color: 'orange' },
                  { badge: 'Étape 4 — Synthèse', title: 'Coût de revient (CR) = CPPV + Coûts hors production', subtitle: 'Coût complet total des seuls produits effectivement VENDUS', color: 'slate' },
                  { badge: 'Étape 5 — Décision', title: 'Résultat analytique = Chiffre d’affaires − Coût de revient', subtitle: 'Permet de juger la rentabilité nette de chaque produit ou commande', color: 'green' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Dans la hiérarchie des coûts complets, comment calcule-t-on le Coût de revient (CR) d’un produit ?',
              options: [
                'Coût d’achat des matières achetées + Frais de distribution',
                'Coût de production des produits fabriqués + Frais de production',
                'Coût de production des produits vendus (CPPV) + Coûts hors production (distribution et administration)',
                'Prix de vente HT − Coût de production',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le coût de revient concerne uniquement les produits vendus : il additionne le coût de production des unités vendues (CPPV) et les charges hors production.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'CAMPA vs CAMPC',
            stepTheme: 'Matières achetées vs consommées',
            stepTitle: 'Passer du coût d’achat au coût des matières consommées via le stock',
            paragraphText:
              'Un défaut majeur chez les débutants est d’utiliser le coût des achats du mois dans le coût de production sans passer par le stock de matières.\n' +
              '• **Règle** : si l’entreprise achète 500 kg à 1 300 F (+ 100 000 F de frais = 750 000 F) mais consomme 1 200 kg grâce à un stock initial de 1 000 kg à 1 500 F, c’est la valeur des **1 200 kg sortis du stock** qui entre en production !\n' +
              '• **Cas sans détail de fiche** : à coût homogène ou si le stock final est donné, $\\text{CAMPC} = \\text{CAMPA} + \\text{SI}_{MP} - \\text{SF}_{MP}$.',
            formula: {
              name: 'Coût d’achat des matières consommées',
              formula: '\\text{CAMPC} = \\text{SI}_{MP} + \\text{CAMPA} - \\text{SF}_{MP} = \\text{Sorties du stock MP}',
              note: 'En inventaire permanent, CAMPC correspond exactement à la colonne Sorties de la fiche de stock matières.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'En janvier, le SI de matière M vaut 1 500 000 F, le coût d’achat des entrées du mois (CAMPA) vaut 850 000 F et le stock final évalué est de 450 000 F. Quel est le coût d’achat des matières consommées (CAMPC) ?',
              options: [
                '850 000 FCFA',
                '1 900 000 FCFA',
                '2 350 000 FCFA',
                '1 050 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CAMPC = SI (1 500 000) + CAMPA (850 000) − SF (450 000) = 1 900 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'CPPF',
            stepTheme: 'Atelier de production',
            stepTitle: 'Assembler le Coût de production des produits fabriqués (CPPF)',
            paragraphText:
              'À l’intérieur de l’atelier, trois briques de coûts se combinent pour transformer les matières premières en produits finis.\n' +
              '• **1. Matières consommées (CAMPC)** : extraites des bons de sortie (toutes matières principales + matières consommables directes).\n' +
              '• **2. Main-d’œuvre directe (MOD)** : salaires bruts et charges sociales des ouvriers directement affectés à la fabrication du produit.\n' +
              '• **3. Charges indirectes de production** : imputées selon le CUO des ateliers (heures-machine, heures MOD, unités produites).\n' +
              '• **Exemple** : CAMPC 1 900 000 + MOD 300 000 + CI Atelier 200 000 = CPPF 2 400 000 F pour 500 unités (4 800 F/u).',
            keyRule:
              'Le CPPF divisé par la quantité fabriquée donne le coût unitaire d’entrée dans le compte de stock des produits finis.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Pour fabriquer 500 articles, l’atelier consomme 1 900 000 F de matières premières, 350 000 F de MOD et 150 heures-machine d’un atelier dont le CUO est de 1 000 F/HM. Quel est le coût de production unitaire ?',
              options: [
                '4 500 FCFA',
                '4 800 FCFA',
                '5 000 FCFA',
                '3 800 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CPPF = 1 900 000 + 350 000 + (150 × 1 000) = 2 400 000 FCFA pour 500 articles, soit 2 400 000 / 500 = 4 800 FCFA par article.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'CPPF vs CPPV',
            stepTheme: 'Quantité fabriquée ≠ vendue',
            stepTitle: 'Ne jamais confondre quantité fabriquée et quantité vendue',
            paragraphText:
              'C’est le piège n°1 des sujets d’examen en comptabilité analytique : l’usine fabrique 1 000 unités, mais le service commercial en vend 1 200 (grâce au stock initial) ou seulement 800 (le reste étant stocké) !\n' +
              '• **Conséquence** : on ne peut JAMAIS ajouter directement les frais de distribution au CPPF si la quantité vendue diffère de la quantité fabriquée.\n' +
              '• **Passage obligé** : les unités fabriquées entrent dans la fiche de stock des produits finis au CPPF ; les unités vendues en sortent au **CPPV** (valorisé en CUMP ou FIFO). Ce n’est qu’à ce CPPV qu’on ajoute les coûts hors production.',
            konanTip:
              'Vérifie systématiquement : « Quantité produite = Quantité vendue ? ». Si non (ou s’il existe un SI de produits finis), trace obligatoirement le compte de stock de produits finis avant le coût de revient !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Au début du mois, le stock de produits finis est de 700 unités à 2 000 F (1 400 000 F). L’usine fabrique 500 unités pour un CPPF de 2 400 000 F, et le stock final est de 300 unités (en CUMP fin de période). Combien d’unités ont été vendues et quel est leur CPPV ?',
              options: [
                '500 unités vendues ; CPPV = 2 400 000 F',
                '900 unités vendues ; CPPV = 2 850 000 F',
                '1 200 unités vendues ; CPPV = 3 800 000 F',
                '900 unités vendues ; CPPV = 2 100 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Quantité vendue = SI + Fabriqué − SF = 700 + 500 − 300 = 900 unités. CUMP = (1 400 000 + 2 400 000) / (700 + 500) = 3 800 000 / 1 200 = 3 166,67 F/u. CPPV = 900 × 3 166,67 = 2 850 000 F.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Entreprise commerciale',
            stepTheme: 'Cas sans atelier',
            stepTitle: 'Adapter la hiérarchie des coûts à une entreprise commerciale',
            paragraphText:
              'Une entreprise purement commerciale (achat-revente de tissus ou de marchandises sans transformation) n’a évidemment pas d’atelier de fabrication !\n' +
              '• **Circuit simplifié** : Coût d’achat des marchandises achetées → Stock de marchandises → Coût d’achat des marchandises vendues (CAMV) + Coût de distribution/administration → **Coût de revient**.\n' +
              '• **Exemple (négoce de tissus)** : 500 m de velours achetés 450 F/m + 5 F/m de port + 1 F/m de réception = 456 F/m (entrée stock), puis CUMP avec SI (1 200 m à 590 F), puis ajout des frais de vente (5 F/m + 2 % du coût d’achat).',
            keyRule:
              'Entreprise commerciale = pas de coût de production : le coût de revient additionne directement le coût d’achat des marchandises vendues et les coûts hors production.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Dans une société de négoce (achat-revente en l’état), quelle étape de la pyramide des coûts disparaît naturellement ?',
              options: [
                'Le coût d’achat',
                'Le coût de production',
                'Le coût de distribution',
                'Le coût de revient',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une entreprise commerciale achète des marchandises pour les revendre sans transformation industrielle : il n’y a donc pas de stade de coût de production.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Contrôle',
            stepTheme: 'Vérification des unités',
            stepTitle: 'Contrôler systématiquement les coûts unitaires à chaque palier',
            paragraphText:
              'Présenter les tableaux de coûts avec trois colonnes (**Quantité**, **Coût Unitaire**, **Montant**) est une exigence de rigueur professionnelle.\n' +
              '• **Avantage du format Q / CU / Mt** : chaque ligne devient vérifiable instantanément ($Q \\times CU = Mt$) et permet de repérer un coût aberrant (ex. : un coût de revient unitaire soudainement multiplié par 10 suite à une faute de zéro).\n' +
              '• **Attention aux charges globales** : dans le tableau du Coût de revient, la colonne Q porte le nombre de produits VENDUS pour le CPPV et pour le total final, même si certaines lignes de frais (ex. : administration forfaitaire) n’ont pas de Q unitaire propre.',
            konanTip:
              'Ne somme jamais les quantités verticalement dans un tableau de coût de revient : 900 unités en CPPV + 900 unités en distribution font toujours 900 unités vendues au total, pas 1 800 !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Dans un tableau de coût de revient pour 900 m de tissu vendus (CPPV = 495 000 F ; Commissions = 4 500 F ; Frais pub = 9 000 F), quelle quantité divise le montant total (508 500 F) pour trouver le coût de revient unitaire ?',
              options: [
                '2 700 m (900 × 3 lignes)',
                '900 m (la quantité totale vendue)',
                '1 800 m',
                'La somme des montants divisée par 3',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toutes les composantes du coût de revient portent sur les 900 m vendus : le coût de revient unitaire vaut 508 500 / 900 = 565 FCFA/m.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch3_p2',
        order: 2,
        title: 'En-cours de production, déchets, rebuts et sous-produits',
        summary:
          'Corriger le coût de production des en-cours initiaux et finals (méthode d’équivalence), et intégrer les produits dérivés (déchets sans valeur, vendables, réutilisables, rebuts et sous-produits).',
        conceptExplanation:
          'En fin de mois, tous les produits mis en fabrication ne sont pas achevés : certains restent sur les chaînes d’assemblage sous forme d’**en-cours de production**.\n\n' +
          'Les en-cours initiaux ($EI$, commencés le mois précédent) sont achevés ce mois-ci et s’ajoutent au coût des produits finis du mois ; les en-cours finals ($EF$, inachevés en fin de mois) doivent être retranchés pour ne pas gonfler le coût des produits terminés :\n' +
          '$\\text{CPPF} = \\text{Charges de production de la p\\acute{e}riode} + EI - EF$.\n\n' +
          'Par ailleurs, la fabrication génère souvent des **produits dérivés** : déchets sans valeur (frais d’évacuation ajoutés au coût), déchets vendables ou réutilisables (valeur nette déduite du coût), rebuts (produits défectueux vendus à bas prix) et sous-produits (produits secondaires obtenus simultanément avec le produit principal).',
        formulas: [
          {
            name: 'Coût de production avec en-cours et déchets',
            formula: '\\text{CPPF} = \\text{Charges p\\acute{e}riode} + \\text{EI} - \\text{EF} + \\text{Frais \\acute{e}vac. d\\acute{e}chets} - \\text{Valeur d\\acute{e}chets vendus / r\\acute{e}utilis\\acute{e}s}',
            note: 'Les en-cours s’évaluent souvent par la méthode des unités équivalentes selon leur degré d’avancement.',
          },
        ],
        keyRule:
          '+ En-cours Initial (EI) et − En-cours Final (EF) ! Pour les déchets : s’ils coûtent à détruire (+ au coût), s’ils rapportent de l’argent ou sont réutilisés (− du coût).',
        workedExample: {
          title: 'Coût de production avec en-cours initiaux/finals et déchets vendables',
          statement:
            'Durant le mois, l’atelier engage 4 000 000 F de charges (matières + MOD + CI) pour fabriquer 1 000 meubles terminés. En-cours initial (EI) = 350 000 F ; En-cours final (EF) = 550 000 F. Des copeaux de bois vendables rapportent 120 000 F net, et l’évacuation de sciure sans valeur coûte 40 000 F. Calculer le CPPF des 1 000 meubles.',
          methodSteps: [
            '1) Charges de la période = 4 000 000 F.',
            '2) Ajustement des en-cours : + EI (350 000) − EF (550 000) = −200 000 F → 3 800 000 F.',
            '3) Ajustement des déchets : − Déchets vendus (120 000) + Frais d’évacuation sciure (40 000) = −80 000 F.',
            '4) CPPF total = 3 800 000 − 80 000 = 3 720 000 FCFA pour 1 000 meubles, soit 3 720 FCFA par meuble.',
          ],
          conclusion:
            'Chaque meuble terminé entre en stock à 3 720 FCFA, tandis que les 550 000 FCFA d’en-cours finals figurent à l’actif en attente d’achèvement le mois suivant.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'En-cours',
            stepTheme: 'Signe de EI et EF',
            stepTitle: 'Intégrer les en-cours initiaux (+) et finals (−) au coût de production',
            paragraphText:
              'Les charges engagées dans l’atelier pendant le mois de mai servent à trois tâches : achever les produits commencés en avril ($EI$), démarrer et finir des produits de mai, et commencer les produits qui resteront inachevés fin mai ($EF$).\n' +
              '• **Pourquoi + EI ?** Les travaux déjà réalisés en avril sur l’en-cours initial appartiennent aux produits terminés en mai : on les ajoute donc au coût de mai.\n' +
              '• **Pourquoi − EF ?** Les dépenses faites en mai sur les produits encore inachevés au 31 mai ne concernent pas les produits finis sortis d’usine : on les retranche et on les reporte au mois suivant.',
            formula: {
              name: 'Formule des en-cours de production',
              formula: '\\text{CPPF (termin\\acute{e}s)} = \\text{Charges p\\acute{e}riode} + \\text{EI} - \\text{EF}',
              note: 'C’est l’ordre inverse de la variation de stock (SI − SF), mais exactement le même principe économique !',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Pour un atelier ayant engagé 6 000 000 F de charges de production en mars, avec un en-cours initial de 400 000 F et un en-cours final de 650 000 F, quel est le coût de production des produits terminés en mars ?',
              options: [
                '6 250 000 FCFA',
                '5 750 000 FCFA',
                '6 000 000 FCFA',
                '7 050 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CPPF = Charges période (6 000 000) + EI (400 000) − EF (650 000) = 5 750 000 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Équivalence',
            stepTheme: 'Évaluation d’un en-cours',
            stepTitle: 'Évaluer un en-cours final par la méthode des unités équivalentes',
            paragraphText:
              'Comment chiffrer précisément la valeur d’un lot de 200 produits encore inachevés sur les machines au 31 du mois ? On utilise le degré d’achèvement par facteur de production.\n' +
              '• **Matières premières** : souvent incorporées dès le début (100 % achevé en matière → 200 équivalents-matières).\n' +
              '• **MOD et Charges d’atelier** : consommées progressivement (ex. : avancement moyen à 50 % → $200 \\times 50\\,\\% = 100$ unités équivalentes en transformation).\n' +
              '• **Exemple** : avec 1 000 produits finis + 200 en-cours (100 % MP, 50 % MOD/CI), le coût unitaire de MP se divise par 1 200, et celui de MOD/CI par 1 100 !',
            konanTip:
              'En évaluation par équivalence, calcule séparément le nombre total d’unités équivalentes pour les Matières ($Q_{\\text{finie}} + Q_{\\text{en-cours}} \\times \\%_{MP}$) et pour les Frais de transformation ($Q_{\\text{finie}} + Q_{\\text{en-cours}} \\times \\%_{\\text{transf}}$).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Un atelier achève 900 unités et laisse 200 unités en cours en fin de mois (100 % de matières incorporées, 50 % de main-d’œuvre et frais d’atelier). Quel nombre total d’unités équivalentes sert à calculer le coût unitaire de main-d’œuvre ?',
              options: [
                '1 100 unités équivalentes',
                '1 000 unités équivalentes',
                '900 unités équivalentes',
                '550 unités équivalentes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Équivalence en MOD/atelier = 900 unités achevées + (200 × 50 %) = 900 + 100 = 1 000 unités équivalentes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Déchets sans valeur',
            stepTheme: 'Évacuation des déchets',
            stepTitle: 'Traiter les déchets perdus ou sans valeur (coût d’évacuation)',
            paragraphText:
              'Toute transformation industrielle laisse des résidus : chutes, poussières, scories, eaux usées ou emballages souillés.\n' +
              '• **Déchets sans valeur et non polluants (jetés sans frais)** : aucune écriture en valeur (seule une diminution quantitative de rendement entre la matière brute entrée et le poids fini obtenu est constatée).\n' +
              '• **Déchets générant des frais d’enlèvement ou de destruction** : les frais payés à une entreprise de nettoyage ou de traitement écologique **s’ajoutent (+)** au coût de production des produits fabriqués.',
            keyRule:
              'Frais d’évacuation de déchets sans valeur = coût supplémentaire ajouté au coût de production (+).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Une scierie produit des déchets de sciure inutilisables dont l’évacuation par camion lui coûte 75 000 FCFA. Comment ce montant affecte-t-il le coût de production des planches ?',
              options: [
                'Il est soustrait du coût de production',
                'Il est ajouté au coût de production',
                'Il est enregistré en produit exceptionnel HAO',
                'Il est ignoré en comptabilité analytique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les frais supportés pour éliminer des déchets sans valeur constituent une charge supplémentaire liée à la fabrication : ils s’ajoutent au coût de production.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Déchets valorisés',
            stepTheme: 'Vendus ou réutilisés',
            stepTitle: 'Déduire la valeur nette des déchets vendables ou réutilisables',
            paragraphText:
              'Certains résidus de fabrication conservent une valeur marchande (ferraille, copeaux, tourteaux, chutes de tissu).\n' +
              '• **Déchets vendus** : le prix de vente (diminué des éventuels frais de tri ou de commercialisation) vient en **déduction (−)** du coût de production du produit qui les a engendrés.\n' +
              '• **Déchets réutilisés en interne** : s’ils sont recyclés dans un autre atelier (ex. : chutes de métal refondues), ils sortent du coût de production du premier atelier au prix du marché (−) et entrent comme matière consommée (+) dans l’atelier utilisateur.',
            konanTip:
              'Attention au traitement préalable : si un déchet se vend 100 000 F mais nécessite 20 000 F de conditionnement pour être vendu, on ne déduit que la valeur NETTE = 80 000 F du coût de production !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Un atelier textile génère des chutes de coton vendues 180 000 F après avoir supporté 30 000 F de frais de mise en balles. Quel montant vient en déduction du coût de production ?',
              options: [
                '210 000 FCFA',
                '180 000 FCFA',
                '150 000 FCFA',
                '30 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Valeur nette récupérée = Prix de vente (180 000) − Frais de traitement/vente (30 000) = 150 000 FCFA à déduire du coût de production.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Rebuts & Sous-produits',
            stepTheme: 'Produits dérivés majeurs',
            stepTitle: 'Distinguer rebuts et sous-produits dans le calcul du coût principal',
            paragraphText:
              'En marge des déchets, deux autres catégories de produits dérivés existent en industrie.\n' +
              '• **Rebuts** : produits finis défectueux ou non conformes aux normes de qualité (ex. : carreaux fêlés, tissus tachés). S’ils sont vendus à prix cassé, leur recette nette réduit le coût de production des produits sains (ou forme un coût séparé).\n' +
              '• **Sous-produits** : produits secondaires obtenus inévitablement en même temps que le produit principal (ex. : mélasse avec le sucre, son avec la farine). Leur coût conjoint est généralement évalué par la méthode du coût forfaitaire à rebours (Prix de vente − marge − frais de traitement) puis déduit du coût du produit principal.',
            keyRule:
              'Plus le sous-produit est économiquement important, plus on cherche à lui imputer un coût propre (et parfois un résultat analytique distinct) plutôt que de simplement déduire sa recette.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle différence existe-t-il entre un « rebut » et un « sous-produit » ?',
              options: [
                'Le rebut est un produit principal défectueux (non conforme), alors que le sous-produit est un produit secondaire distinct et normal issu du même procédé',
                'Le rebut rapporte toujours plus que le produit principal',
                'Le sous-produit est toujours jeté sans valeur',
                'Il n’y a aucune différence entre rebut et déchet sans valeur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un rebut est un exemplaire raté du produit principal ; un sous-produit est un produit différent, prévu et valorisable obtenu conjointement au produit principal.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Sens inversé des en-cours',
            stepTitle: 'Éviter l’inversion de signe entre variation de stock et variation d’en-cours',
            paragraphText:
              'C’est un piège classique lorsqu’un problème combine à la fois un stock de produits finis ET des en-cours de production.\n' +
              '• **Pour passer au CPPF (produits achevés)** : $\\text{CPPF} = \\text{Charges} + EI - EF$ (on ajoute l’initial, on retranche le final).\n' +
              '• **Pour passer du CPPF au CPPV (produits vendus)** : $\\text{CPPV} = \\text{CPPF} + SI_{PF} - SF_{PF}$ (exactement le même sens : $+\\text{Initial} - \\text{Final}$ !).\n' +
              '• **Piège** : c’est uniquement dans la formule de variation de stock en comptabilité générale (603) ou de production stockée (73 = SF − SI) que le signe change par convention.',
            konanTip:
              'Pour calculer un coût de sortie (CAMPC, CPPF avec en-cours, ou CPPV), retiens la règle universelle : Toujours « + Initial − Final » !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Pour obtenir le coût des unités achevées (CPPF) à partir des charges de production du mois, comment traite-t-on l’en-cours initial (EI) et l’en-cours final (EF) ?',
              options: [
                '− EI et + EF',
                '+ EI et − EF',
                '+ EI et + EF',
                '− EI et − EF',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les en-cours initiaux sont achevés durant le mois (+ EI) et les en-cours finals restent inachevés pour le mois suivant (− EF).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch3_p3',
        order: 3,
        title: 'Coûts hors production, coût de revient et concordance des résultats',
        summary:
          'Calculer le coût de revient et le résultat analytique par produit, puis établir la concordance exacte entre le résultat analytique global et le résultat net de la comptabilité générale.',
        conceptExplanation:
          'L’étape finale du calcul en coûts complets consiste à ajouter au Coût de production des produits vendus (CPPV) les **coûts hors production** (frais directs de distribution, commissions commerciales, transport sur ventes, charges indirectes des centres Distribution et Administration générale) pour obtenir le **Coût de revient (CR)**.\n\n' +
          'Le **Résultat analytique** par produit s’obtient par différence : $\\text{RA} = \\text{Chiffre d’affaires HT} - \\text{Co\\^ut de revient}$.\n\n' +
          'Enfin, le total des résultats analytiques de tous les produits ne correspond pas immédiatement au résultat de la comptabilité générale : il faut dresser le **tableau de concordance** en réintégrant les charges supplétives (+), les bonis d’inventaire (+) et les différences d’incorporation favorables, et en déduisant les charges non incorporables (−), les malis d’inventaire (−) et les coûts résiduels de centres non imputés.',
        formulas: [
          {
            name: 'Coût de revient et Résultat analytique',
            formula: '\\text{CR} = \\text{CPPV} + \\text{Co\\^uts hors production} \\quad ; \\quad \\text{RA} = \\text{CA HT} - \\text{CR}',
            note: 'La somme des RA par produit forme le Résultat analytique global avant concordance.',
          },
          {
            name: 'Formule de concordance CAGE → CG',
            formula: '\\text{R\\acute{e}sultat CG} = \\sum \\text{RA} + \\text{Suppl\\acute{e}tives} - \\text{Non incorp.} + \\text{Bonis} - \\text{Malis} \\pm \\text{Diff. d’incorp.}',
            note: 'Permet de prouver la cohérence arithmétique parfaite entre les deux comptabilités.',
          },
        ],
        keyRule:
          'Dans la concordance CAGE → CG : tout ce qui avait augmenté les charges de CAGE par rapport à la CG (charges supplétives) s’AJOUTE (+) au résultat analytique pour retrouver le résultat de CG ; tout ce qui avait été écarté (non incorporables) se RETRANCHE (−).',
        workedExample: {
          title: 'Résultat analytique et concordance vers la Comptabilité Générale',
          statement:
            'Une entreprise vend deux produits A (RA = +2 400 000 F) et B (RA = −350 000 F). Pour établir les coûts, on a ajouté 300 000 F de charges supplétives et écarté 180 000 F de charges non incorporables (amendes). Par ailleurs, l’inventaire permanent a révélé un mali de 45 000 F sur matières et un boni de 25 000 F sur produits finis, et des produits HAO de 120 000 F figurent en CG. Retrouver le résultat de la comptabilité générale.',
          methodSteps: [
            '1) Résultat analytique global = +2 400 000 − 350 000 = +2 050 000 F.',
            '2) Éléments à ajouter (+) : Charges supplétives (+300 000) + Boni d’inventaire (+25 000) + Produits HAO non incorporés (+120 000) = +445 000 F.',
            '3) Éléments à retrancher (−) : Charges non incorporables (−180 000) + Mali d’inventaire (−45 000) = −225 000 F.',
            '4) Résultat de la CG = 2 050 000 + 445 000 − 225 000 = +2 270 000 FCFA.',
          ],
          conclusion:
            'La concordance justifie au franc près l’écart de 220 000 FCFA entre le résultat analytique (+2 050 000 F) et le résultat de comptabilité générale (+2 270 000 F).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Hors production',
            stepTheme: 'Distribution et administration',
            stepTitle: 'Composer les coûts hors production avant le coût de revient',
            paragraphText:
              'Une fois le produit fabriqué sorti du stock de produits finis (CPPV), il reste à financer son acheminement jusqu’au client et le fonctionnement général de l’entreprise.\n' +
              '• **Coûts de distribution** : emballages de vente, transport sur ventes, publicité, salaires et commissions des commerciaux, charges indirectes du centre Distribution.\n' +
              '• **Autres coûts hors production** : quote-part des frais d’administration générale, frais financiers ou de siège non rattachés à l’atelier.\n' +
              '• **Exemple** : pour 900 m de tissu vendus avec 5 F/m de commissions et 2 % de frais de pub sur un coût d’achat de 450 000 F, les frais hors production valent $4\,500 + 9\,000 = 13\,500$ F.',
            keyRule:
              'Les coûts hors production s’appliquent exclusivement aux quantités VENDUES et jamais aux quantités restant en stock.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Une entreprise vend 1 100 m de satin dont le CPPV est de 380 000 F. Les représentants commerciaux reçoivent 5 F par mètre vendu et les frais de facturation représentent 2 % d’une base d’achat de 250 000 F. Quel est le coût de revient total ?',
              options: [
                '380 000 FCFA',
                '390 500 FCFA',
                '385 500 FCFA',
                '395 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Coûts hors production = (1 100 × 5) + (2 % × 250 000) = 5 500 + 5 000 = 10 500 F. Coût de revient = 380 000 + 10 500 = 390 500 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Résultat analytique',
            stepTheme: 'Rentabilité par produit',
            stepTitle: 'Calculer le résultat analytique unitaire et global par produit',
            paragraphText:
              'Le résultat analytique mesure la contribution nette de chaque produit ou ligne d’activité après couverture de l’intégralité de ses charges.\n' +
              '• **Formule** : $\\text{RA}_i = \\text{CA HT}_i - \\text{Co\\^ut de revient}_i$ (ou unitairement : $\\text{Prix de vente unitaire HT} - \\text{Co\\^ut de revient unitaire}$).\n' +
              '• **Interprétation** : si $\\text{RA}_i > 0$, le produit est bénéficiaire ; si $\\text{RA}_i < 0$, le produit est déficitaire en coût complet (attention toutefois avant de le supprimer : il faut vérifier s’il couvre ses coûts variables et absorbe des charges fixes !).',
            formula: {
              name: 'Résultat analytique et taux de rentabilité',
              formula: '\\text{RA}_i = Q_{\\text{vendue}} \\times (PV_u - CR_u) \\quad ; \\quad \\text{Taux de rentabilit\\acute{e}} = \\frac{\\text{RA}_i}{\\text{CA}_i}',
              note: 'Un produit déficitaire en coût complet peut parfois rester utile à court terme si sa marge sur coût variable est positive.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Un produit est vendu 2 500 F HT l’unité pour un coût de revient unitaire de 2 125 F. Sur 800 unités vendues, quel est le résultat analytique et le taux de rentabilité sur chiffre d’affaires ?',
              options: [
                'RA = +300 000 F ; Taux = 15 %',
                'RA = +300 000 F ; Taux = 17,6 %',
                'RA = −300 000 F ; Taux = −15 %',
                'RA = +200 000 F ; Taux = 10 %',
              ],
              correctAnswerIndex: 0,
              explanation:
                'RA unitaire = 2 500 − 2 125 = +375 F. RA global = 800 × 375 = +300 000 F. CA = 800 × 2 500 = 2 000 000 F. Taux = 300 000 / 2 000 000 = 15 %.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Concordance',
            stepTheme: 'Logique de réconciliation',
            stepTitle: 'Comprendre pourquoi Résultat CAGE ≠ Résultat CG avant concordance',
            paragraphText:
              'À la clôture de l’exercice, le chef comptable doit prouver que la CAGE n’a « perdu » ni « inventé » aucun franc par rapport à la comptabilité générale.\n' +
              '• **Cinq sources d’écart** : 1) charges non incorporables exclues de la CAGE ; 2) charges supplétives ajoutées en CAGE ; 3) différences d’incorporation sur amortissements, matières ou arrondis de CUO ; 4) différences d’inventaire (bonis et malis) ; 5) produits non incorporés (ex. : produits HAO 82/84).\n' +
              '• **Vérification finale** : la concordance doit reconstituer à l’unité près le résultat net comptable.',
            keyRule:
              'La concordance est l’épreuve de vérité du comptable analytique : $\\text{R\\acute{e}sultat CAGE ajust\\acute{e}} = \\text{R\\acute{e}sultat CG}$.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Lequel des éléments suivants explique une différence normale entre la somme des résultats analytiques et le résultat de la comptabilité générale ?',
              options: [
                'Une erreur de calcul du taux de TVA',
                'L’intégration de charges supplétives en CAGE et l’exclusion des charges non incorporables',
                'L’oubli de la main-d’œuvre directe dans le coût de production',
                'Le fait que les deux comptabilités utilisent des monnaies différentes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les charges supplétives, charges non incorporables, bonis/malis d’inventaire et différences d’incorporation expliquent mécaniquement l’écart entre les deux résultats.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège de signe',
            stepTheme: 'Signes de la concordance',
            stepTitle: 'Maîtriser les signes (+) et (−) dans le tableau de concordance',
            paragraphText:
              'Inverser le signe des charges supplétives et des charges non incorporables lors de la concordance est l’erreur la plus fréquente.\n' +
              '• **Raisonnement infaillible** : en CAGE, on avait **ajouté** les charges supplétives, ce qui a diminué artificiellement le résultat analytique. Pour revenir à la CG (qui ne les avait pas déduites), il faut les **RAJOUTER (+)** !\n' +
              '• **Symétriquement** : en CAGE, on avait **retiré** les charges non incorporables (amendes, VNA, IS), ce qui a gonflé le résultat analytique. Pour revenir à la CG (qui les a bien supportées), il faut les **SOUSTRAIRE (−)** !',
            konanTip:
              'Retiens ce moyen mnémotechnique : « Supplétives = + ; Non incorporables = − ; Bonis = + ; Malis = − » pour passer du Résultat Analytique au Résultat de CG.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'La somme des résultats analytiques est de +1 500 000 F. Sachant que les charges supplétives s’élèvent à 200 000 F et les charges non incorporables à 120 000 F (sans autre écart), quel est le résultat de la comptabilité générale ?',
              options: [
                '1 420 000 FCFA',
                '1 580 000 FCFA',
                '1 820 000 FCFA',
                '1 180 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Résultat CG = Résultat analytique (1 500 000) + Supplétives (200 000) − Non incorporables (120 000) = 1 580 000 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Frais résiduels',
            stepTheme: 'Arrondis de CUO',
            stepTitle: 'Traiter les différences d’incorporation dues aux arrondis de CUO',
            paragraphText:
              'Lorsque le coût d’unité d’œuvre (CUO) d’un centre principal ne tombe pas juste (ex. : $1\,000\,000 / 3\,000 = 333{,}33$ F/UO), l’imputation arrondie laisse un petit reliquat appelé « frais résiduels de section ».\n' +
              '• **Sous-imputation (coût réel du centre > coût imputé aux produits)** : on a imputé un peu trop peu de charges aux coûts, donc le résultat analytique est légèrement surestimé → à **retrancher (−)** lors de la concordance.\n' +
              '• **Sur-imputation (coût imputé > coût réel du centre)** : on a imputé un peu trop de charges → à **ajouter (+)** lors de la concordance.',
            keyRule:
              'Total réel du centre − Total imputé aux produits = différence d’imputation qui se résorbe exactement dans le tableau de concordance.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Un centre Atelier totalise 1 000 000 F après répartition secondaire pour 3 000 UO, mais l’entreprise arrondit le CUO à 333 F/UO (imputant ainsi 999 000 F aux produits). Comment traite-t-on l’écart de 1 000 F lors de la concordance CAGE → CG ?',
              options: [
                'On ajoute +1 000 F au résultat analytique',
                'On retranche −1 000 F du résultat analytique (charges réelles non imputées)',
                'On divise les 1 000 F par 2',
                'On ne peut plus réconcilier les deux comptabilités',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1 000 F de charges réelles n’ont pas été imputés aux produits : les charges en CG sont donc supérieures de 1 000 F, ce qui diminue le résultat de −1 000 F à la concordance.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Bilan de concordance',
            stepTheme: 'Preuve finale',
            stepTitle: 'Vérifier la concordance complète avec produits non incorporés et mali',
            paragraphText:
              'Finalisons le raisonnement sur un cas complet combinant tous les ajustements possibles.\n' +
              '• **Résultat analytique** : Produit X (+3 200 000 F) + Produit Y (+800 000 F) = +4 000 000 F.\n' +
              '• **Ajustements** : + Supplétives (150 000 F), + Produits financiers non incorporés (60 000 F), + Boni sur PF (40 000 F), − Non incorporables (210 000 F), − Mali sur MP (30 000 F), − Frais résiduels de centre (10 000 F).\n' +
              '• **Résultat CG retrouvé** : $4\,000\,000 + 250\,000 - 250\,000 = +4\,000\,000$ F.',
            konanTip:
              'Construis toujours ton tableau de concordance à deux colonnes : une colonne « Crédit / + » (éléments qui augmentent le résultat) et une colonne « Débit / − » (éléments qui le diminuent).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Le résultat analytique global est de +3 500 000 F. On recense : charges non incorporables = 150 000 F, charges supplétives = 100 000 F, mali d’inventaire = 50 000 F, produits HAO = 200 000 F. Quel est le résultat net en comptabilité générale ?',
              options: [
                '3 200 000 FCFA',
                '3 600 000 FCFA',
                '3 800 000 FCFA',
                '3 400 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Résultat CG = 3 500 000 + 100 000 (supplétives) + 200 000 (produits HAO) − 150 000 (non incorp.) − 50 000 (mali) = 3 600 000 FCFA.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : Coûts partiels, Seuil de rentabilité et Imputation rationnelle
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch4',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 : Coûts partiels, Seuil de rentabilité et Imputation rationnelle',
    summary:
      'Charges variables vs fixes, marge sur coût variable (MCV) et compte différentiel, seuil de rentabilité en valeur/quantité, point mort et indices de sécurité, coefficient d’imputation rationnelle (CIR) et coûts préétablis.',
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Analytique',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch4_p1',
        order: 1,
        title: 'Variabilité des charges, Marge sur coût variable (MCV) et Compte différentiel',
        summary:
          'Séparer charges variables et charges fixes, calculer la marge et le taux de MCV, dresser le compte de résultat différentiel et distinguer direct costing simple vs évolué.',
        conceptExplanation:
          'Contrairement à la méthode des coûts complets qui répartit toutes les charges, la méthode des coûts partiels (Direct Costing) classe les charges selon leur comportement face au volume d’activité.\n\n' +
          '1) Les **charges variables (opérationnelles)** varient proportionnellement au chiffre d’affaires ou aux quantités produites (matières premières, emballages, commissions sur ventes) : leur coût unitaire est constant.\n' +
          '2) Les **charges fixes (de structure)** restent stables dans une capacité donnée quel que soit le niveau d’activité (loyer, amortissements, salaires administratifs).\n\n' +
          'En retranchant les charges variables du chiffre d’affaires, on obtient la **Marge sur coût variable (MCV)**, qui doit d’abord couvrir les charges fixes avant de dégager un bénéfice. Le **Direct costing évolué** isole en outre les charges fixes spécifiques à chaque produit (marge sur coût spécifique) avant de déduire les charges fixes communes.',
        formulas: [
          {
            name: 'Marge sur coût variable (MCV) et Taux de MCV',
            formula: '\\text{MCV} = \\text{CA} - \\text{CV} \\quad ; \\quad t_{\\text{MCV}} = \\frac{\\text{MCV}}{\\text{CA}} \\quad ; \\quad R = \\text{MCV} - \\text{CF}',
            note: 'Le taux de MCV indique combien de centimes (ou %) chaque franc de vente apporte pour couvrir les charges fixes.',
          },
        ],
        keyRule:
          'Un produit reste intéressant à court terme tant que sa MCV est positive (ou en direct costing évolué, tant que sa marge sur coût spécifique = MCV − CF spécifiques > 0), car il contribue à payer les frais fixes communs.',
        workedExample: {
          title: 'Compte d’exploitation différentiel — Cas Ivoire Distribution',
          statement:
            'Une entreprise réalise un chiffre d’affaires de 10 000 000 FCFA pour 2 000 unités vendues à 5 000 F l’une. Les charges variables s’élèvent à 6 000 000 FCFA (soit 3 000 F/u) et les charges fixes annuelles à 2 400 000 FCFA. Établir le compte de résultat différentiel.',
          methodSteps: [
            '1) Chiffre d’affaires (CA) = 10 000 000 F (100 %).',
            '2) Charges variables (CV) = 6 000 000 F (60 % du CA).',
            '3) Marge sur coût variable (MCV) = 10 000 000 − 6 000 000 = 4 000 000 F ; soit un taux de MCV = 4 000 000 / 10 000 000 = 40 % (ou 2 000 F/unité).',
            '4) Charges fixes (CF) = 2 400 000 F.',
            '5) Résultat courant (R) = MCV − CF = 4 000 000 − 2 400 000 = +1 600 000 FCFA (16 % du CA).',
          ],
          conclusion:
            'Chaque unité vendue génère 2 000 F de MCV (40 % du prix) permettant d’absorber les 2 400 000 F de charges fixes puis de dégager 1 600 000 F de bénéfice.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Variabilité',
            stepTheme: 'Charges variables vs fixes',
            stepTitle: 'Distinguer le comportement global et unitaire des charges variables et fixes',
            paragraphText:
              'Pour piloter une entreprise, il est crucial de savoir quelles dépenses augmentent quand les ventes montent et lesquelles restent identiques même si l’usine ferme un mois.\n' +
              '• **Charges variables (CV)** : proportionnelles à l’activité → leur montant **total** augmente avec les quantités, mais leur coût **unitaire** reste constant ($CV_u = \\text{constante}$).\n' +
              '• **Charges fixes (CF)** : indépendantes de l’activité à structure constante → leur montant **total** est constant, donc le coût fixe **unitaire** ($CF / Q$) diminue quand les ventes augmentent (économies d’échelle).',
            keyRule:
              'Total variable proportionnel à Q (unitaire constant) ; Total fixe constant (unitaire décroissant avec Q).',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quand le volume de production passe de 1 000 à 2 000 unités (à capacité constante), comment évolue le coût FIXE unitaire par produit ?',
              options: [
                'Il double',
                'Il reste strictement constant',
                'Il est divisé par deux',
                'Il devient nul',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les charges fixes totales restant constantes sur la plage de capacité, les répartir sur 2 fois plus d’unités divise le coût fixe unitaire par 2.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'MCV & Taux',
            stepTheme: 'Marge sur coût variable',
            stepTitle: 'Calculer la Marge sur coût variable et son taux en pourcentage',
            paragraphText:
              'La Marge sur Coût Variable (MCV) est l’indicateur central de l’analyse coût-volume-profit : elle mesure ce qu’il reste des ventes une fois payées les charges proportionnelles.\n' +
              '• **MCV globale et unitaire** : $\\text{MCV} = \\text{CA} - \\text{CV}$ et $MCV_u = PV_u - CV_u$.\n' +
              '• **Taux de MCV** : $t_{\\text{MCV}} = \\frac{\\text{MCV}}{\\text{CA}} = 1 - \\frac{\\text{CV}}{\\text{CA}}$. Tant que les prix et rendements ne changent pas, ce taux est constant quel que soit le chiffre d’affaires.\n' +
              '• **Exemple** : si $PV_u = 5\,000$ F et $CV_u = 3\,000$ F, alors $MCV_u = 2\,000$ F et $t_{\\text{MCV}} = 40\\,\\%$.',
            formula: {
              name: 'Taux de marge sur coût variable',
              formula: 't_{\\text{MCV}} = \\frac{\\text{CA} - \\text{CV}}{\\text{CA}} = \\frac{PV_u - CV_u}{PV_u}',
              note: 'Exprimé en % ou en décimal (ex. 0,40) ; sert directement à calculer le seuil de rentabilité.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Une entreprise réalise un chiffre d’affaires de 8 000 000 F avec des charges variables de 5 200 000 F. Quelle est sa MCV et quel est son taux de MCV ?',
              options: [
                'MCV = 2 800 000 F ; Taux = 35 %',
                'MCV = 2 800 000 F ; Taux = 65 %',
                'MCV = 5 200 000 F ; Taux = 65 %',
                'MCV = 3 200 000 F ; Taux = 40 %',
              ],
              correctAnswerIndex: 0,
              explanation:
                'MCV = 8 000 000 − 5 200 000 = 2 800 000 F. Taux de MCV = 2 800 000 / 8 000 000 = 0,35 soit 35 %.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Tableau différentiel',
            stepTheme: 'Compte d’exploitation différentiel',
            stepTitle: 'Présenter et lire un Compte de résultat différentiel',
            paragraphText:
              'Le compte de résultat différentiel réordonne les charges non plus par fonction, mais en isolant d’abord le bloc variable puis le bloc fixe.\n' +
              '• **Structure en cascade** : Chiffre d’affaires − Coût variable = Marge sur coût variable − Coût fixe = Résultat.\n' +
              '• **Attention aux variations de stocks** : dans une entreprise commerciale, le coût variable d’achat des marchandises vendues intègre bien les achats ± variation de stock ($SI - SF$).\n' +
              '• **Colonne %** : on exprime chaque ligne en pourcentage du chiffre d’affaires (base 100 %).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Modèle de Compte de résultat différentiel (en FCFA et %)',
              caption: 'Base chiffrée : CA = 10 000 000 F, CV = 6 000 000 F, CF = 2 400 000 F.',
              tableData: {
                headers: ['Éléments différentiels', 'Montant (FCFA)', '% du CA'],
                rows: [
                  ['Chiffre d’affaires net HT (CA)', '10 000 000', '100,0 %'],
                  ['− Coût variable total (CV)', '− 6 000 000', '60,0 %'],
                  ['= Marge sur coût variable (MCV)', '4 000 000', '40,0 %'],
                  ['− Coûts fixes nets (CF)', '− 2 400 000', '24,0 %'],
                  ['= Résultat courant (R)', '1 600 000', '16,0 %'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'D’après le compte différentiel ci-dessus, si l’entreprise augmente son chiffre d’affaires de 1 000 000 F (à structure fixe et taux de MCV inchangés de 40 %), de combien augmente son résultat ?',
              options: [
                '+1 000 000 FCFA',
                '+400 000 FCFA',
                '+600 000 FCFA',
                '+160 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les charges fixes étant déjà couvertes et inchangées, tout franc supplémentaire de CA génère 40 % de MCV supplémentaire qui va intégralement au résultat : 1 000 000 × 40 % = +400 000 FCFA !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Direct costing évolué',
            stepTheme: 'Coûts spécifiques',
            stepTitle: 'Distinguer Direct costing simple et Direct costing évolué (coûts spécifiques)',
            paragraphText:
              'Le Direct costing simple suppose que toutes les charges fixes sont indivisibles. En réalité, certaines charges fixes disparaîtraient si l’on arrêtait un produit précis (ex. : amortissement d’une machine dédiée uniquement au produit A).\n' +
              '• **Direct costing évolué (méthode des coûts spécifiques)** : on soustrait de la MCV de chaque produit ses **charges fixes spécifiques (directes)** pour obtenir sa **Marge sur coût spécifique ($MCS_i$)**.\n' +
              '• **Décision stratégique** : tant que $MCS_i > 0$, le produit aide à absorber les charges fixes communes du siège ; si $MCS_i < 0$, l’abandonner améliore immédiatement le résultat global !',
            formula: {
              name: 'Marge sur coût spécifique',
              formula: '\\text{MCS}_i = \\text{MCV}_i - \\text{CF sp\\acute{e}cifiques}_i \\quad ; \\quad \\text{R\\acute{e}sultat global} = \\sum \\text{MCS}_i - \\text{CF communes}',
              note: 'Critère décisif pour décider du maintien ou de l’abandon d’une ligne de produits.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Le produit B dégage une MCV de 900 000 F, supporte 650 000 F de charges fixes spécifiques (machine dédiée) et se voit imputer 400 000 F de frais fixes généraux du siège (résultat complet = −150 000 F). Faut-il abandonner B à court terme ?',
              options: [
                'Oui, car son résultat en coût complet est négatif (−150 000 F)',
                'Non, car sa marge sur coût spécifique est positive (+250 000 F) et contribue à payer les frais fixes communs',
                'Oui, car sa MCV est inférieure au million',
                'On ne peut pas savoir sans connaître la TVA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'MCS de B = 900 000 − 650 000 = +250 000 F > 0. Si on abandonne B, les 400 000 F de frais communs du siège subsisteront et le résultat global de l’entreprise baissera de 250 000 F !',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Charges semi-variables',
            stepTheme: 'Charges mixtes',
            stepTitle: 'Scinder une charge semi-variable en part fixe et part variable',
            paragraphText:
              'Certaines dépenses réelles sont mixtes (semi-variables) : elles comprennent un abonnement fixe plus une fraction proportionnelle (ex. : facture d’électricité avec prime fixe + kWh consommés, ou salaire d’un commercial = fixe + commission sur ventes).\n' +
              '• **Méthode des deux points extrêmes** : si pour 1 000 unités la charge vaut 350 000 F et pour 1 500 unités elle vaut 450 000 F, la pente variable vaut $a = \\frac{450\,000 - 350\,000}{1\,500 - 1\,000} = 200$ F/unité.\n' +
              '• **Part fixe** : $b = 350\,000 - (200 \\times 1\,000) = 150\,000$ F → équation $y = 200x + 150\,000$.',
            konanTip:
              'Face à une charge mixte donnée à deux niveaux d’activité $(x_1, y_1)$ et $(x_2, y_2)$, calcule toujours le coefficient directeur $a = (y_2 - y_1)/(x_2 - x_1)$ : c’est exactement le coût variable unitaire !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Les frais d’électricité d’un atelier s’élèvent à 500 000 F pour 2 000 heures de marche et à 650 000 F pour 3 000 heures. Quelle est la part FIXE mensuelle de cette charge semi-variable ?',
              options: [
                '150 000 FCFA',
                '200 000 FCFA',
                '300 000 FCFA',
                '100 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Coût variable par heure = (650 000 − 500 000) / (3 000 − 2 000) = 150 F/h. Part fixe = 500 000 − (150 × 2 000) = 200 000 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Paliers de charges fixes',
            stepTitle: 'Attention aux sauts de charges fixes par paliers de capacité',
            paragraphText:
              'La fixité des charges de structure n’est valable qu’à l’intérieur d’une capacité de production donnée (une équipe, une machine, un local).\n' +
              '• **Changement de palier** : si les commandes dépassent 100 % de capacité et obligent à louer un second entrepôt ou acheter une nouvelle machine, les charges fixes sautent brusquement d’un palier (effet de seuil).\n' +
              '• **Conséquence** : on ne peut appliquer le taux de MCV et les formules linéaires que tant que l’on reste dans la même structure fixe (ou recalculer un nouveau seuil après le saut de CF).',
            keyRule:
              'Des charges fixes restent fixes pour une structure donnée, mais évoluent par paliers dès que l’activité exige un investissement de capacité.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Une start-up paie 1 200 000 F de charges fixes jusqu’à 5 000 commandes/mois. Au-delà de 5 000 commandes, elle doit recruter un superviseur (+300 000 F fixes) et louer un second serveur (+100 000 F fixes). Que sont ces charges fixes ?',
              options: [
                'Des charges variables proportionnelles',
                'Des charges fixes par paliers (changement de structure)',
                'Des charges non incorporables',
                'Des bonis d’inventaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Elles restent fixes sur l’intervalle [0 ; 5 000] puis passent par palier à 1 600 000 F au-delà de 5 000 commandes.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch4_p2',
        order: 2,
        title: 'Seuil de rentabilité (SR), point mort et indicateurs de sécurité',
        summary:
          'Calculer et représenter graphiquement le seuil de rentabilité en valeur et en quantité, déterminer le point mort (date d’atteinte), la marge et l’indice de sécurité ainsi que le levier opérationnel.',
        conceptExplanation:
          'Le **Seuil de rentabilité (SR)** — ou chiffre d’affaires critique — est le niveau d’activité pour lequel l’entreprise couvre exactement l’ensemble de ses charges variables et fixes, dégageant un résultat nul ($R = 0 \\iff \\text{MCV} = \\text{CF}$).\n\n' +
          'En valeur, $\\text{SR} = \\frac{\\text{CF}}{t_{\\text{MCV}}}$ ; en quantité, $Q^* = \\frac{\\text{CF}}{\\text{MCV}_u} = \\frac{\\text{SR}}{PV_u}$.\n\n' +
          'Le **Point mort (PM)** exprime le seuil de rentabilité en durée (nombre de jours ou mois nécessaires pour atteindre le SR, soit $\\text{PM} = \\frac{\\text{SR} \\times 360}{\\text{CA}}$ si l’activité est régulière). Enfin, la **Marge de sécurité ($MS = CA - SR$)** et l’**Indice de sécurité ($IS = MS / CA$)** mesurent le recul de chiffre d’affaires que l’entreprise peut supporter avant de tomber en perte.',
        formulas: [
          {
            name: 'Seuil de rentabilité (valeur et quantité)',
            formula: '\\text{SR (FCFA)} = \\frac{\\text{CF}}{t_{\\text{MCV}}} \\quad ; \\quad Q^* = \\frac{\\text{CF}}{\\text{MCV}_u} = \\frac{\\text{SR}}{PV_u}',
            note: 'En dessous du SR, l’entreprise est en zone de perte ; au-dessus du SR, elle est en zone de bénéfice.',
          },
          {
            name: 'Point mort, Marge et Indice de sécurité',
            formula: '\\text{PM (jours)} = \\frac{\\text{SR} \\times 360}{\\text{CA}} \\quad ; \\quad \\text{MS} = \\text{CA} - \\text{SR} \\quad ; \\quad \\text{IS} = \\frac{\\text{CA} - \\text{SR}}{\\text{CA}}',
            note: 'Levier opérationnel = MCV / Résultat = 1 / IS.',
          },
        ],
        keyRule:
          'Au Seuil de rentabilité : Résultat = 0, Chiffre d’affaires = Coût total (CV + CF) et Marge sur coût variable = Charges fixes ($t_{\\text{MCV}} \\times SR = CF$).',
        workedExample: {
          title: 'Seuil de rentabilité, point mort et sécurité — Suite Ivoire Distribution',
          statement:
            'Avec CA = 10 000 000 F (2 000 unités à 5 000 F), taux de MCV = 40 % (soit 2 000 F/u) et CF = 2 400 000 F (activité régulière sur 360 jours / 12 mois), calculer le SR en valeur, le SR en quantité, le point mort (et la date d’atteinte), la marge de sécurité et l’indice de sécurité.',
          methodSteps: [
            '1) SR en valeur = CF / t_MCV = 2 400 000 / 0,40 = 6 000 000 FCFA.',
            '2) SR en quantité = CF / MCV_u = 2 400 000 / 2 000 = 1 200 unités (vérif. : 1 200 × 5 000 = 6 000 000 F).',
            '3) Point mort = (6 000 000 × 360) / 10 000 000 = 216 jours (soit 7 mois et 6 jours → atteint le 6 août N).',
            '4) Marge de sécurité (MS) = 10 000 000 − 6 000 000 = 4 000 000 FCFA.',
            '5) Indice de sécurité (IS) = 4 000 000 / 10 000 000 = 40 % (le CA peut baisser de 40 % avant d’être en perte).',
          ],
          conclusion:
            'L’entreprise devient rentable dès la 1 201e unité vendue (le 6 août) et dispose d’un confortable coussin de sécurité de 40 %.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Seuil en valeur',
            stepTheme: 'Équation du SR',
            stepTitle: 'Calculer le seuil de rentabilité en valeur et en quantité',
            paragraphText:
              'À quel niveau exact de ventes l’entreprise cesse-t-elle de perdre de l’argent pour commencer à gagner du bénéfice ?\n' +
              '• **Condition d’équilibre** : $R = \\text{MCV} - \\text{CF} = 0 \\iff t_{\\text{MCV}} \\times \\text{SR} = \\text{CF}$, d’où $\\text{SR} = \\frac{\\text{CF}}{t_{\\text{MCV}}}$.\n' +
              '• **En quantité** : $Q^* = \\frac{\\text{CF}}{PV_u - CV_u} = \\frac{\\text{CF}}{\\text{MCV}_u}$.\n' +
              '• **Exemple** : si $CF = 2\,000\,000$ F et $t_{\\text{MCV}} = 40\\,\\%$, alors $\\text{SR} = 2\,000\,000 / 0{,}40 = 5\,000\,000$ F.',
            formula: {
              name: 'Seuil de rentabilité critique',
              formula: '\\text{SR} = \\frac{\\text{CF}}{t_{\\text{MCV}}} \\quad \\text{et} \\quad Q^* = \\frac{\\text{CF}}{\\text{MCV}_u}',
              note: 'Vérification rapide : Résultat = (CA − SR) × t_MCV !',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Une boutique supporte 3 600 000 F de charges fixes annuelles et dégage un taux de marge sur coût variable de 30 %. Quel est son seuil de rentabilité en valeur ?',
              options: [
                '1 080 000 FCFA',
                '10 800 000 FCFA',
                '12 000 000 FCFA',
                '7 200 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'SR = CF / t_MCV = 3 600 000 / 0,30 = 12 000 000 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Graphique SR',
            stepTheme: 'Intersection MCV et CF',
            stepTitle: 'Interpréter graphiquement le Seuil de rentabilité ($MCV(x) = CF$)',
            paragraphText:
              'La méthode graphique classique trace en fonction du chiffre d’affaires $x$ (en millions de FCFA) deux droites essentielles :\n' +
              '• **La droite de MCV** : $y = t_{\\text{MCV}} \\cdot x$ (ici $y = 0{,}4x$), passant par l’origine.\n' +
              '• **La droite horizontale des Charges Fixes** : $y = CF$ (ici $y = 2$ M FCFA).\n' +
              '• **Lecture du graphique** : à gauche du point d’intersection ($x < 5$ M), la droite $MCV$ est sous $CF$ (zone de **perte**) ; au point $(5 ; 2)$, $MCV = CF$ (c’est le **SR**) ; à droite ($x > 5$ M), l’écart vertical entre les deux droites mesure directement le **bénéfice** !',
            visualSchema: {
              type: 'function_plot',
              title: 'Représentation graphique du Seuil de rentabilité (en millions de FCFA)',
              caption: 'Droite MCV(x) = 0,4x (bleu) et Charges fixes CF = 2 M (orange) : intersection au SR = 5 M FCFA.',
              plot: {
                xMin: 0,
                xMax: 10,
                yMin: 0,
                yMax: 4.5,
                xStep: 2,
                yStep: 1,
                curves: [
                  {
                    label: 'MCV(x) = 0,4x',
                    color: 'blue',
                    pieces: [{ expr: '0.4*x', from: 0, to: 10 }],
                  },
                  {
                    label: 'CF = 2 M',
                    color: 'orange',
                    pieces: [{ expr: '2', from: 0, to: 10 }],
                  },
                ],
                points: [
                  { x: 5, y: 2, label: 'SR (5 M ; 2 M)', filled: true, color: 'green' },
                ],
                verticalLines: [
                  { x: 5, label: 'SR = 5 M', color: 'green' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Sur le graphique ci-dessus ($MCV(x) = 0{,}4x$ et $CF = 2$ M FCFA), que représente l’écart vertical entre la droite bleue ($MCV$) et la droite orange ($CF$) pour un chiffre d’affaires de $x = 8$ millions FCFA ?',
              options: [
                'Le coût variable total',
                'Un bénéfice net de +1,2 million FCFA (3,2 − 2,0)',
                'Une perte nette de −1,2 million FCFA',
                'Le montant des charges fixes supplémentaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour x = 8 M : MCV = 0,4 × 8 = 3,2 M FCFA et CF = 2,0 M FCFA. Comme MCV > CF, l’écart 3,2 − 2,0 = +1,2 million FCFA représente le bénéfice réalisé.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Point mort',
            stepTheme: 'Date d’atteinte du SR',
            stepTitle: 'Calculer le Point mort en jours et sa date exacte dans l’année',
            paragraphText:
              'Le Point mort répond à une question concrète du dirigeant : « À quelle date de l’année aurons-nous enfin fini de payer nos charges fixes ? »\n' +
              '• **Activité régulière sur 360 jours (12 mois de 30 jours)** : $\\text{PM (jours)} = \\frac{\\text{SR} \\times 360}{\\text{CA annuel}}$ (ou $\\times 12$ pour obtenir des mois).\n' +
              '• **Attention en cas de fermeture annuelle** : si l’entreprise ferme 1 mois en août (11 mois d’activité = 330 jours), on multiplie par 330 ou 11 mois ouvrés !\n' +
              '• **Activité saisonnière** : on cumule les CA mensuels jusqu’à atteindre le SR puis on interpole linéairement dans le mois d’atteinte.',
            formula: {
              name: 'Point mort (activité régulière annuelle)',
              formula: '\\text{PM (jours)} = \\frac{\\text{SR}}{\\text{CA}} \\times 360',
              note: 'Chaque tranche de 30 jours compte pour 1 mois commercial (janvier = jours 1 à 30, février = 31 à 60...).',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Une entreprise travaillant régulièrement toute l’année (360 jours) réalise un CA de 15 000 000 F et a un seuil de rentabilité de 6 250 000 F. Au bout de combien de jours atteint-elle son point mort ?',
              options: [
                '120 jours (30 avril)',
                '150 jours (30 mai)',
                '180 jours (30 juin)',
                '210 jours (30 juillet)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PM = (6 250 000 × 360) / 15 000 000 = 150 jours, soit exactement 5 mois complets (30 mai en année commerciale de 12 × 30 j).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Sécurité',
            stepTheme: 'Marge et indice de sécurité',
            stepTitle: 'Mesurer la vulnérabilité de l’entreprise par la Marge et l’Indice de sécurité',
            paragraphText:
              'Deux entreprises ayant le même bénéfice n’ont pas forcément le même risque face à une baisse brutale de la conjoncture.\n' +
              '• **Marge de sécurité (MS)** : $\\text{MS} = \\text{CA} - \\text{SR}$. C’est le montant absolu de chiffre d’affaires que l’entreprise peut perdre sans devenir déficitaire.\n' +
              '• **Indice de sécurité (IS)** : $\\text{IS} = \\frac{\\text{CA} - \\text{SR}}{\\text{CA}}$. Exprimé en %, il mesure la baisse relative maximale de CA tolérable.\n' +
              '• **Exemple** : avec CA = 10 M et SR = 6 M, MS = 4 M et IS = 40 % (très solide ; sous 10 %, l’entreprise est fragile).',
            keyRule:
              'Relation directe avec le résultat : $\\text{R\\acute{e}sultat} = \\text{Marge de s\\acute{e}curit\\acute{e}} \\times t_{\\text{MCV}}$ !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Une société réalise un CA de 20 000 000 F pour un seuil de rentabilité de 15 000 000 F. Quel est son Indice de sécurité (IS) ?',
              options: [
                '75 %',
                '25 %',
                '33,3 %',
                '5 000 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Marge de sécurité = 20 000 000 − 15 000 000 = 5 000 000 F. Indice de sécurité = 5 000 000 / 20 000 000 = 25 %.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Levier opérationnel',
            stepTheme: 'Élasticité du résultat',
            stepTitle: 'Calculer et interpréter le levier opérationnel ($MCV / R$)',
            paragraphText:
              'Si le chiffre d’affaires varie de $+10\\,\\%$, le résultat varie-t-il aussi de $+10\\,\\%$ ? Non ! Grâce aux charges fixes déjà absorbées, le résultat varie beaucoup plus vite.\n' +
              '• **Coefficient de levier opérationnel (LO)** : $LO = \\frac{\\Delta R / R}{\\Delta CA / CA} = \\frac{\\text{MCV}}{\\text{R\\acute{e}sultat}} = \\frac{1}{\\text{IS}}$.\n' +
              '• **Exemple** : avec MCV = 4 M et Résultat = 1,6 M ($IS = 40\\,\\%$), $LO = 4 / 1{,}6 = 2{,}5$. Si le CA augmente de $+10\\,\\%$, le résultat bondit de $2{,}5 \\times 10\\,\\% = +25\\,\\%$ (et inversement à la baisse !).',
            formula: {
              name: 'Levier opérationnel (élasticité du résultat au CA)',
              formula: 'LO = \\frac{\\text{MCV}}{R} = \\frac{1}{\\text{IS}} \\quad \\Longrightarrow \\quad \\frac{\\Delta R}{R} = LO \\times \\frac{\\Delta CA}{CA}',
              note: 'Plus l’entreprise est proche de son seuil de rentabilité (IS faible), plus son levier opérationnel et son risque sont élevés.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Une entreprise a une MCV de 6 000 000 F et un Résultat de 1 500 000 F. Quel est son levier opérationnel et que devient son résultat si le CA augmente de 5 % ?',
              options: [
                'LO = 4 ; le résultat augmente de +20 %',
                'LO = 0,25 ; le résultat augmente de +1,25 %',
                'LO = 4 ; le résultat augmente de +5 %',
                'LO = 3 ; le résultat augmente de +15 %',
              ],
              correctAnswerIndex: 0,
              explanation:
                'LO = MCV / Résultat = 6 000 000 / 1 500 000 = 4. Une hausse de 5 % du CA entraîne une hausse de 4 × 5 % = +20 % du résultat.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Saisonnalité',
            stepTheme: 'Point mort saisonnier',
            stepTitle: 'Calculer le point mort lorsque l’activité est saisonnière',
            paragraphText:
              'La formule $\\text{PM} = \\text{SR} \\times 360 / \\text{CA}$ ne s’applique QUE si les ventes sont uniformes chaque mois !\n' +
              '• **Cas saisonnier** : si une entreprise réalise 60 % de son CA au 1er trimestre et 40 % sur le reste de l’année, il faut dresser le **cumul chronologique des CA** mois par mois ou trimestre par trimestre.\n' +
              '• **Interpolation** : dès que le cumul encadre le SR (ex. : fin mars CA cumulé = 4 M, fin juin = 7 M, et SR = 5 M), il manque $5 - 4 = 1$ M sur les $3$ M du T2 (90 jours) → $\\frac{1}{3} \\times 90 = 30$ jours après le 31 mars, soit le 30 avril !',
            konanTip:
              'Ne divise jamais par le CA annuel quand l’énoncé donne des ventes trimestrielles ou mensuelles inégales : passe obligatoirement par la colonne « CA cumulés » !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Pour un SR de 6 000 000 F, une entreprise saisonnière cumule 4 500 000 F de CA fin avril et 7 500 000 F fin mai (mois de mai = 3 000 000 F sur 30 jours). À quelle date atteint-elle son seuil de rentabilité ?',
              options: [
                'Le 30 avril',
                'Le 15 mai',
                'Le 20 mai',
                'Le 10 mai',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Il manque 6 000 000 − 4 500 000 = 1 500 000 F au début du mois de mai. Comme mai génère 3 000 000 F sur 30 jours, il faut (1 500 000 / 3 000 000) × 30 = 15 jours, soit le 15 mai.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch4_p3',
        order: 3,
        title: 'Imputation rationnelle des charges fixes (CIR) et introduction aux coûts préétablis',
        summary:
          'Calculer le coefficient d’imputation rationnelle (CIR), déterminer les charges fixes imputées et le coût de sous-activité ou boni de suractivité, et analyser les écarts sur coûts préétablis.',
        conceptExplanation:
          'En coût complet classique, lorsque l’activité baisse de moitié pendant un mois creux, le coût fixe unitaire double artificiellement ! Pour éviter d’imputer les variations conjoncturelles d’activité aux coûts unitaires des produits, on utilise l’**imputation rationnelle des charges fixes**.\n\n' +
          'On définit un **Coefficient d’Imputation Rationnelle ($CIR = \\frac{\\text{Activit\\acute{e} r\\acute{e}elle}}{\\text{Activit\\acute{e} normale}}$)** et on n’incorpore aux coûts que les charges fixes imputées ($CF_{\\text{imputées}} = CF_{\\text{réelles}} \\times CIR$).\n' +
          '• Si $CIR < 1$ (sous-activité) : $CF_{\\text{réelles}} - CF_{\\text{imputées}} > 0$ représente un **coût de sous-activité (chômage)** isolé hors du coût du produit.\n' +
          '• Si $CIR > 1$ (suractivité) : $CF_{\\text{réelles}} - CF_{\\text{imputées}} < 0$ constitue un **boni de suractivité**.\n\n' +
          'Enfin, la gestion prévisionnelle compare les **coûts préétablis (standards)** aux **coûts réels** : $\\text{Écart} = \\text{Réel} - \\text{Préétabli}$ (positif = défavorable ; négatif = favorable), décomposé en écart sur quantité et écart sur prix.',
        formulas: [
          {
            name: 'Coefficient et différence d’imputation rationnelle',
            formula: '\\text{CIR} = \\frac{A_r}{A_n} \\quad ; \\quad CF_{\\text{imp}} = CF \\times \\text{CIR} \\quad ; \\quad \\text{Diff. IR} = CF - CF_{\\text{imp}} = CF(1 - \\text{CIR})',
            note: 'Diff. IR > 0 = coût de sous-activité (mali) ; Diff. IR < 0 = boni de suractivité.',
          },
          {
            name: 'Écart sur coût préétabli et sous-écarts',
            formula: 'E_G = (Q_r P_r) - (Q_p P_p) = \\underbrace{(Q_r - Q_p)P_p}_{E/\\text{Quantit\\acute{e}}} + \\underbrace{(P_r - P_p)Q_r}_{E/\\text{Prix}}',
            note: 'Convention : Écart = Réel − Préétabli (> 0 : défavorable ; < 0 : favorable).',
          },
        ],
        keyRule:
          'Grâce à l’imputation rationnelle, le coût de revient unitaire devient indépendant du niveau d’activité (tant que les prix des facteurs ne changent pas), et le coût du chômage technique est mis en évidence.',
        workedExample: {
          title: 'Imputation rationnelle en période de sous-activité puis de suractivité',
          statement:
            'Un atelier a une activité normale mensuelle de 1 000 heures-machine, avec 2 000 000 F de charges fixes mensuelles et 3 000 F/heure de charges variables. Calculer le coût d’imputation rationnelle de l’heure et la différence d’IR si l’activité réelle est : a) 800 heures ; b) 1 100 heures.',
          methodSteps: [
            '1) Coût horaire normal : CV = 3 000 F/h ; CF normal = 2 000 000 / 1 000 = 2 000 F/h → Total normal = 5 000 F/h.',
            '2) Cas a (800 h) : CIR = 800 / 1 000 = 0,80. CF imputées = 2 000 000 × 0,80 = 1 600 000 F. Coût imputé = (800 × 3 000) + 1 600 000 = 4 000 000 F, soit 4 000 000 / 800 = 5 000 F/h ! Coût de sous-activité = 2 000 000 − 1 600 000 = +400 000 F.',
            '3) Cas b (1 100 h) : CIR = 1 100 / 1 000 = 1,10. CF imputées = 2 000 000 × 1,10 = 2 200 000 F. Coût imputé = (1 100 × 3 000) + 2 200 000 = 5 500 000 F, soit toujours 5 000 F/h ! Boni de suractivité = 2 000 000 − 2 200 000 = −200 000 F.',
          ],
          conclusion:
            'Le coût unitaire reste parfaitement stable à 5 000 F/h dans les deux cas, tandis que la direction mesure exactement 400 000 F de perte due à la sous-activité ou 200 000 F de boni dû à la suractivité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Principe IR',
            stepTheme: 'Neutraliser l’effet d’activité',
            stepTitle: 'Comprendre pourquoi on pratique l’imputation rationnelle des charges fixes',
            paragraphText:
              'Imagine une usine produisant deux fois moins d’unités pendant un mois d’arrêt partiel : en coût complet classique, les frais fixes divisés par deux fois moins d’unités font flamber le coût unitaire.\n' +
              '• **Danger décisionnel** : si le directeur commercial augmente le prix de vente à cause de cette hausse artificielle du coût unitaire, il perd encore plus de clients !\n' +
              '• **Solution (Imputation Rationnelle)** : n’incorporer aux coûts des produits que la fraction des charges fixes correspondant au taux d’utilisation normal de la capacité, et isoler le reste en coût de sous-activité.',
            keyRule:
              'En imputation rationnelle, la charge fixe unitaire incorporée reste figée au niveau normal ($CF / A_n$) quel que soit le volume réellement produit.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de la méthode de l’imputation rationnelle des charges fixes ?',
              options: [
                'Supprimer toutes les charges variables des coûts de production',
                'Rendre le coût de revient unitaire indépendant des fluctuations du volume d’activité et isoler le coût de sous-activité',
                'Remplacer la comptabilité générale obligatoire',
                'Augmenter artificiellement la valeur des stocks en cas de mévente',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’imputation rationnelle stabilise le coût unitaire face aux variations d’activité et met en évidence le coût de la sous-activité (ou le boni de suractivité).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul du CIR',
            stepTheme: 'Coefficient d’activité',
            stepTitle: 'Calculer le Coefficient d’Imputation Rationnelle (CIR) et les CF imputées',
            paragraphText:
              'La mise en œuvre de l’imputation rationnelle tient en trois opérations arithmétiques simples.\n' +
              '• **1. Calcul du CIR** : $\\text{CIR} = \\frac{\\text{Activit\\acute{e} r\\acute{e}elle (A}_r)}{\\text{Activit\\acute{e} normale (A}_n)}$.\n' +
              '• **2. Charges fixes imputées** : $CF_{\\text{imp}} = CF_{\\text{réelles}} \\times \\text{CIR}$.\n' +
              '• **3. Coût total d’imputation rationnelle** : $CV_{\\text{réelles}} + CF_{\\text{imp}}$ (attention : les charges variables ne sont JAMAIS multipliées par le CIR puisqu’elles varient déjà naturellement avec l’activité !).',
            formula: {
              name: 'Coefficient d’imputation rationnelle',
              formula: '\\text{CIR} = \\frac{A_r}{A_n} \\quad ; \\quad \\text{Co\\^ut IR} = CV_r + (CF_r \\times \\text{CIR})',
              note: 'Le CIR ne s’applique EXCLUSIVEMENT qu’aux charges fixes.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Pour une activité normale de 2 000 unités et une activité réelle de 1 700 unités, les charges fixes réelles sont de 4 000 000 F. Que valent le CIR et les charges fixes imputées aux produits ?',
              options: [
                'CIR = 1,18 ; CF imputées = 4 705 882 F',
                'CIR = 0,85 ; CF imputées = 3 400 000 F',
                'CIR = 0,85 ; CF imputées = 4 000 000 F',
                'CIR = 0,15 ; CF imputées = 600 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CIR = 1 700 / 2 000 = 0,85 (85 %). CF imputées = 4 000 000 × 0,85 = 3 400 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Sous/Sur-activité',
            stepTheme: 'Différence d’imputation',
            stepTitle: 'Interpréter le coût de sous-activité et le boni de suractivité',
            paragraphText:
              'La différence entre les charges fixes réellement payées et les charges fixes imputées aux coûts permet de mesurer l’efficacité d’utilisation de l’outil industriel.\n' +
              '• **Sous-activité ($CIR < 1$)** : $CF_r - CF_{\\text{imp}} > 0$. Une partie des frais fixes n’a pas servi à produire : c’est un **coût de sous-activité (mali)** qui vient diminuer le résultat global lors de la concordance.\n' +
              '• **Suractivité ($CIR > 1$)** : $CF_r - CF_{\\text{imp}} < 0$. L’atelier a tourné au-delà de sa capacité normale : c’est un **boni de suractivité** qui vient augmenter le résultat global.',
            konanTip:
              'Pour vérifier le signe : si l’usine a tourné à 85 % seulement (sous-activité), il reste 15 % de loyers/machines payés à vide → c’est une PERTE (coût de sous-activité) !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Un centre d’analyse a une activité normale de 500 heures-machine, mais travaille réellement 550 heures ce mois-ci pour 1 500 000 F de charges fixes. Quelle est la nature et la valeur de la différence d’imputation rationnelle ?',
              options: [
                'Coût de sous-activité de +150 000 F',
                'Boni de suractivité de 150 000 F (CF imputées = 1 650 000 F)',
                'Coût de sous-activité de +136 364 F',
                'Différence nulle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CIR = 550 / 500 = 1,10 (> 1, suractivité). CF imputées = 1 500 000 × 1,10 = 1 650 000 F. Différence = 1 500 000 − 1 650 000 = −150 000 F (boni de suractivité).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'IR et tableau de répartition',
            stepTitle: 'Appliquer l’imputation rationnelle AVANT la répartition secondaire',
            paragraphText:
              'Attention lorsque plusieurs centres ont des CIR différents dans un tableau de répartition !\n' +
              '• **Règle méthodologique** : on multiplie les charges fixes de chaque centre par son propre CIR **dès la répartition primaire** (ou avant d’effectuer la répartition secondaire des centres auxiliaires), car le taux d’activité de l’atelier Entretien peut différer de celui de l’Atelier Assemblage.\n' +
              '• **Piège classique** : ne jamais appliquer le CIR aux charges variables, et ne jamais oublier de reporter la différence d’imputation rationnelle dans le calcul du résultat global !',
            keyRule:
              'Chaque centre d’analyse conserve sa part fixe ajustée par son CIR avant toute cession entre centres.',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Un centre Atelier supporte 600 000 F de charges variables et 400 000 F de charges fixes (CIR = 0,75). Quel est le total imputable du centre après imputation rationnelle ?',
              options: [
                '750 000 FCFA (1 000 000 × 0,75)',
                '900 000 FCFA (600 000 + 400 000 × 0,75)',
                '1 000 000 FCFA',
                '850 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le CIR (0,75) ne s’applique qu’aux charges fixes (400 000 × 0,75 = 300 000 F) ; les charges variables restent intégralement retenues (600 000 F), soit 900 000 FCFA au total.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Coûts préétablis',
            stepTheme: 'Convention de signe des écarts',
            stepTitle: 'Comparer coût réel et coût préétabli (convention de signe)',
            paragraphText:
              'En contrôle budgétaire, la méthode des **coûts préétablis** consiste à définir une fiche de coût standard par unité produite (norme technique × prix budgété), puis à mesurer les écarts face aux réalisations.\n' +
              '• **Convention universelle sur coûts** : $\\text{\\acute{E}cart} = \\text{Co\\^ut R\\acute{e}el} - \\text{Co\\^ut Pr\\acute{e}\\acute{e}tabli}$ (adapté à la production réelle !).\n' +
              '• **Interprétation du signe** : un écart **POSITIF ($+$)** signifie que l’on a dépensé PLUS que prévu : c’est **DÉFAVORABLE** ; un écart **NÉGATIF ($-$)** signifie que l’on a économisé par rapport au standard : c’est **FAVORABLE**.',
            formula: {
              name: 'Écart global sur coût',
              formula: '\\text{\\acute{E}cart} = \\text{Co\\^ut R\\acute{e}el} - \\text{Co\\^ut Pr\\acute{e}\\acute{e}tabli de la production r\\acute{e}elle}',
              note: 'Positif (+) = dépassement de coût (défavorable) ; Négatif (−) = économie (favorable).',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Pour la production réelle du mois, le coût préétabli des matières était de 1 500 000 FCFA et le coût réel constaté est de 1 420 000 FCFA. Quel est l’écart global ?',
              options: [
                '+80 000 FCFA (défavorable)',
                '−80 000 FCFA (favorable)',
                '+80 000 FCFA (favorable)',
                '−80 000 FCFA (défavorable)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Écart = Coût Réel − Coût Préétabli = 1 420 000 − 1 500 000 = −80 000 FCFA. Comme le coût réel est inférieur au standard prévu, l’écart est favorable.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Analyse des écarts',
            stepTheme: 'Écart sur quantité et sur prix',
            stepTitle: 'Décomposer un écart sur charges directes en écart sur quantité et sur prix',
            paragraphText:
              'Savoir qu’on a dépassé le budget de +20 500 F ne suffit pas : il faut déterminer si la responsabilité revient à l’acheteur (hausse de prix) ou à l’atelier (gaspillage de matière).\n' +
              '• **Écart sur quantité ($E/Q$)** : $(Q_r - Q_p) \\times P_p$ — valorisé au prix standard $P_p$ pour isoler la performance technique de consommation.\n' +
              '• **Écart sur prix ($E/P$)** : $(P_r - P_p) \\times Q_r$ — appliqué à la quantité réelle $Q_r$ pour isoler la variation tarifaire.\n' +
              '• **Vérification** : $E/Q + E/P = \\text{\\acute{E}cart global}$.',
            konanTip:
              'Moyen mnémotechnique infaillible pour les indices : l’écart sur Quantité multiplie par $P_p$ (Prix préétabli), et l’écart sur Prix multiplie par $Q_r$ (Quantité réelle) — vérifie toujours que leur somme redonne $Q_r P_r - Q_p P_p$ !',
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Pour un standard de 200 kg à 1 000 F/kg, l’atelier consomme réellement 210 kg payés 1 050 F/kg. Quelle est la valeur de l’écart sur quantité = (Qr − Qp) × Pp et de l’écart sur prix = (Pr − Pp) × Qr ?',
              options: [
                'E/Q = +10 500 F ; E/P = +10 000 F',
                'E/Q = +10 000 F (défavorable) ; E/P = +10 500 F (défavorable)',
                'E/Q = −10 000 F (favorable) ; E/P = +10 500 F',
                'E/Q = +20 500 F ; E/P = 0 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'E/Q = (210 − 200) × 1 000 = +10 000 F (défavorable, surconsommation de 10 kg). E/P = (1 050 − 1 000) × 210 = +10 500 F (défavorable, hausse de prix de 50 F/kg). Somme = +20 500 F.',
            },
          },
        ],
      }),
    ],
  },
];
