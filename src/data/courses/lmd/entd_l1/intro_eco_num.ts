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

export const INTRO_ECO_NUM_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : AGENTS, SECTEURS INSTITUTIONNELS ET FONDEMENTS DU NUMÉRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch1',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Agents, secteurs institutionnels et fondements de l’économie numérique',
    summary:
      'Maîtriser les définitions modernes de la science économique, les 6 secteurs institutionnels, les 3 marchés, la distinction entre le numérique (brique) et l’économie numérique (édifice), ainsi que les 4 catégories TIC et les propriétés des biens numériques.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction à l’Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch1_p1',
        order: 1,
        title: 'Objet de la science économique, disciplines et systèmes économiques',
        summary:
          'De l’économie politique aux définitions de Robbins et Malinvaud, les 3 fonctions économiques, les branches de la discipline et les 3 grands systèmes d’organisation.',
        conceptExplanation:
          'La science économique s’est construite par strates successives : moralisation de la monnaie et des échanges aux XVe-XVIe siècles, économie politique centrée sur la puissance de l’État au XVIe siècle, étude globale de la richesse chez les mercantilistes et classiques (XVIIe-XIXe siècles), puis microéconomie des choix individuels avec la révolution marginaliste.\n\n' +
          'Deux définitions modernes font référence : **Lionel Robbins (1932)** définit l’économie comme la science qui étudie le comportement humain face à l’usage alternatif de ressources rares pour atteindre des fins ordonnées ; **Edmond Malinvaud** souligne l’emploi de ressources rares à usages alternatifs pour satisfaire les besoins humains. Elle analyse la **production**, la **distribution (répartition)** et la **consommation**, ainsi que les institutions qui facilitent ces opérations.\n\n' +
          'Elle se décline en plusieurs branches complémentaires (microéconomie, macroéconomie, économie internationale, économie publique, mésoéconomie, économie industrielle, économie du développement, économie comportementale et économie de la connaissance/numérique) et s’organise selon trois grands systèmes : le libéralisme, le communisme (planification centrale) et l’économie mixte.',
        keyRule:
          'La rareté des ressources à usages alternatifs (Robbins / Malinvaud) fonde l’analyse économique, qui étudie la production, la répartition et la consommation.',
        formulas: [
          {
            name: 'Définition de Lionel Robbins (1932)',
            formula: '\\text{Économie} = \\text{Allocation de ressources rares à usages alternatifs} \\longrightarrow \\text{Fins ordonnées}',
            note: 'Reprise et précisée par Edmond Malinvaud (1923-2015) autour de la satisfaction des besoins humains.',
          },
          {
            name: 'Trilogie des fonctions économiques',
            formula: '\\text{Circuit réel} : \\text{Production} \\longrightarrow \\text{Distribution (Répartition)} \\longrightarrow \\text{Consommation}',
            note: 'S’y ajoutent les institutions financières, juridiques et publiques qui facilitent ces opérations.',
          },
        ],
        workedExample: {
          title: 'Qualifier une décision dans une entreprise numérique ivoirienne',
          statement:
            'Une start-up de livraison à Abidjan dispose d’un budget mensuel limité de 3 000 000 FCFA. Elle hésite entre recruter deux développeurs mobiles ou financer une campagne marketing, tout en observant l’inflation nationale et la fiscalité sur les services numériques. Identifiez les concepts et disciplines mobilisés.',
          methodSteps: [
            'Le budget limité de 3 000 000 FCFA face à deux projets concurrents illustre la rareté des ressources à usages alternatifs (définition de Robbins).',
            'Le choix interne d’allocation entre recrutement et publicité relève de la microéconomie (décision d’un agent individuel).',
            'L’analyse de l’inflation nationale relève de la macroéconomie.',
            'L’étude de la fiscalité sur les services digitaux relève de l’économie publique.',
          ],
          conclusion:
            'Une même situation concrète mobilise à la fois le principe de rareté et plusieurs branches complémentaires de la science économique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Histoire',
            stepTheme: 'Évolution de la pensée',
            stepTitle: 'Des approches morales et classiques à la révolution marginaliste',
            paragraphText:
              'Comment est née la science économique moderne ? Pendant des siècles, la réflexion portait avant tout sur la morale ou la puissance du souverain avant de devenir une science analytique.\n' +
              '• **XVe–XVIe siècles** : approche morale visant à encadrer l’usage de la monnaie et des échanges pour préserver la cohésion sociale, puis économie politique centrée sur la richesse de l’État.\n' +
              '• **XVIIe–XIXe siècles** : mercantilistes et classiques analysent globalement la production, la monnaie et le chômage.\n' +
              '• **XXe siècle (marginalisme)** : passage à l’analyse des choix individuels des ménages et des entreprises.\n' +
              '• **Exemple** : étudier pourquoi un consommateur choisit un forfait Internet de 5 000 FCFA plutôt qu’un autre relève du raisonnement marginaliste individuel.',
            keyRule:
              'La pensée économique a basculé d’une approche globale de la richesse nationale (classiques) vers l’analyse des arbitrages individuels (marginalistes).',
            konanTip:
              'Repère chronologique simple : Morale (XVe) → Puissance de l’État (XVIe) → Lois globales de production (XVIIe-XIXe) → Choix individuels (XXe).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle rupture méthodologique caractérise l’approche marginaliste du XXe siècle par rapport aux économistes classiques du XVIIIe–XIXe siècle ?',
              options: [
                'L’abandon total de l’étude des prix et des marchés',
                'Le centrage sur les comportements et choix individuels des agents économiques',
                'L’interdiction de la propriété privée des moyens de production',
                'La réduction de l’économie à la seule morale religieuse',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Alors que les mercantilistes et classiques raisonnaient de manière globale, l’approche marginaliste (microéconomie) place les décisions individuelles des agents au cœur de l’analyse.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Rareté',
            stepTheme: 'Robbins & Malinvaud',
            stepTitle: 'Les définitions de référence : Lionel Robbins et Edmond Malinvaud',
            paragraphText:
              'Pourquoi devons-nous sans cesse choisir entre plusieurs dépenses ? Parce que nos ressources (argent, temps, serveurs, bande passante) sont limitées face à des besoins multiples.\n' +
              '• **Lionel Robbins (1932)** : science qui étudie le comportement humain comme une relation entre des fins ordonnées et des moyens rares à usages alternatifs.\n' +
              '• **Edmond Malinvaud (1923-2015)** : science étudiant comment les humains emploient des ressources rares à usages alternatifs pour satisfaire leurs besoins.\n' +
              '• **Exemple** : un étudiant disposant de 2 heures libres arbitre entre réviser son algorithmique, travailler sur un projet web ou se reposer : le temps est une ressource rare à usage alternatif.',
            formula: {
              name: 'Cœur de la définition moderne',
              formula: '\\text{Besoins illimités} \\;+\\; \\text{Ressources rares à usages alternatifs} \\;\\Longrightarrow\\; \\text{Arbitrage}',
              note: 'Sans rareté ni usages alternatifs possibles, il n’y a pas de problème économique.',
            },
            keyRule:
              'Deux mots-clés résument Robbins et Malinvaud : ressources RARES et usages ALTERNATIFS.',
            konanTip:
              'En dissertation ou QCM, si une ressource n’a qu’un seul usage possible ou existe en quantité infinie (comme l’air ambiant non pollué), elle ne pose pas de problème d’allocation économique.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Selon la formulation d’Edmond Malinvaud inspirée de Lionel Robbins (1932), qu’étudie fondamentalement la science économique ?',
              options: [
                'Uniquement l’émission des billets de banque par la banque centrale',
                'La façon dont les humains utilisent des ressources rares à usages alternatifs pour satisfaire leurs besoins',
                'La comptabilité fiscale des sociétés multinationales',
                'La suppression progressive des échanges marchands',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Robbins et Malinvaud définissent l’économie par l’allocation de ressources rares susceptibles d’usages alternatifs afin de satisfaire les besoins humains.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Fonctions',
            stepTheme: 'Opérations économiques',
            stepTitle: 'Production, distribution, consommation et institutions',
            paragraphText:
              'Comment s’articulent les activités concrètes au sein d’une économie ? Toute richesse suit un cycle en trois grandes opérations encadrées par des institutions.\n' +
              '• **La production** : création de biens et de services destinés à satisfaire des besoins (ex. développement d’une application de paiement).\n' +
              '• **La distribution (ou répartition)** : partage des revenus créés (salaires, intérêts, dividendes, impôts) et acheminement des biens.\n' +
              '• **La consommation** : utilisation finale des biens et services pour satisfaire un besoin.\n' +
              '• **Les institutions facilitatrices** : banques, systèmes juridiques, places de marché et infrastructures de paiement qui fluidifient ces trois étapes.',
            keyRule:
              'L’économie étudie simultanément les trois opérations (production, distribution, consommation) et les institutions qui les rendent possibles.',
            konanTip:
              'Ne confonds pas « distribution » au sens commercial (logistique) et « répartition » des revenus (salaires, profits) : la science économique couvre les deux dimensions.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Au-delà de la production, de la distribution et de la consommation, à quoi s’intéresse également la science économique ?',
              options: [
                'Aux seules recettes artisanales agricoles',
                'Aux institutions et activités visant à faciliter ces trois opérations économiques',
                'Exclusivement aux systèmes politiques non démocratiques',
                'Uniquement à l’extraction des métaux précieux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’économie analyse aussi bien les opérations réelles (produire, répartir, consommer) que les institutions (monnaie, banques, droit, marchés) qui les facilitent.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Disciplines',
            stepTheme: 'Branches de l’économie',
            stepTitle: 'Microéconomie, macroéconomie et branches spécialisées',
            paragraphText:
              'La science économique est trop vaste pour être observée sous un seul angle ; elle se subdivise en disciplines spécialisées selon l’échelle et l’objet d’étude.\n' +
              '• **Microéconomie** : comportements individuels des consommateurs et entreprises, formation des prix, théorie des jeux.\n' +
              '• **Macroéconomie** : phénomènes globaux nationaux ou régionaux (croissance du PIB, inflation, chômage, politiques monétaire et budgétaire).\n' +
              '• **Économie internationale & publique** : commerce extérieur, taux de change, balance des paiements d’une part ; fiscalité, dépenses publiques et régulation d’autre part.\n' +
              '• **Autres branches** : mésoéconomie (secteurs/filières), économie industrielle, du développement, comportementale et de la connaissance.',
            keyRule:
              'Micro = échelle de l’agent et du marché ; Macro = échelle des agrégats nationaux ; Méso = échelle intermédiaire d’une filière ou d’un secteur.',
            konanTip:
              'Pour classer rapidement un sujet d’examen : « prix d’un abonnement mobile » → Micro ; « taux de chômage en zone UEMOA » → Macro ; « filière fintech » → Méso/Industrielle.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle discipline économique étudie spécifiquement la balance des paiements, les taux de change, les flux de capitaux et les accords commerciaux entre pays ?',
              options: [
                'La microéconomie comportementale',
                'L’économie internationale',
                'La comptabilité analytique',
                'L’économie domestique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’économie internationale analyse les échanges entre pays : commerce international, flux de capitaux, taux de change et balance des paiements.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Systèmes',
            stepTheme: 'Organisation économique',
            stepTitle: 'Libéralisme, communisme et économie mixte',
            paragraphText:
              'Comment une société coordonne-t-elle ses millions de décisions économiques ? Trois grands systèmes d’organisation existent dans l’histoire économique.\n' +
              '• **Libéralisme économique** : promeut la propriété privée, l’initiative individuelle et le capitalisme, associés politiquement à la démocratie.\n' +
              '• **Communisme (économie planifiée)** : promeut la propriété collective et la planification centrale par l’État, avec pour expression politique le socialisme.\n' +
              '• **Économie mixte** : modèle moderne dominant faisant cohabiter les mécanismes de marché (initiative privée) et l’intervention régulatrice de l’État.\n' +
              '• **Exemple** : dans l’économie numérique, des opérateurs privés déploient la fibre optique et les services cloud tandis que l’État régule les fréquences et protège les données.',
            keyRule:
              'La quasi-totalité des économies contemporaines sont des économies mixtes articulant libre marché et régulation publique.',
            konanTip:
              'Attention à la nuance : le libéralisme repose sur les signaux de prix décentralisés, le communisme sur les quotas du plan central, et l’économie mixte combine les deux leviers.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on le système économique contemporain dominant qui associe mécanismes de marché capitalistes et régulation/services publics de l’État ?',
              options: [
                'L’économie autarcique',
                'L’économie mixte',
                'Le troc institutionnel',
                'Le mercantilisme pur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’économie mixte est la tendance moderne de cohabitation entre les mécanismes du libéralisme de marché et l’intervention régulatrice ou redistributive de l’État.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Émergence',
            stepTheme: 'Économie de la connaissance',
            stepTitle: 'De l’économie de la connaissance à l’économie numérique',
            paragraphText:
              'À côté des branches classiques est apparue une nouvelle spécialité désignée sous plusieurs termes voisins : nouvelle économie, économie d’Internet, économie digitale ou économie de la connaissance.\n' +
              '• **Économie de la connaissance (Foray, 2009)** : économie où la création, la diffusion et l’exploitation des savoirs deviennent le moteur principal de la croissance.\n' +
              '• **Économie numérique** : branche analysant comment les technologies de l’information transforment les marchés, les entreprises et les échanges.\n' +
              '• **Exemple** : une plateforme de formation en ligne à Abidjan crée de la valeur non pas en extrayant des matières premières, mais en produisant, structurant et distribuant du savoir codé numériquement.',
            keyRule:
              'L’économie numérique prolonge l’économie de la connaissance en faisant du savoir et des données codées le principal levier de valeur ajoutée.',
            konanTip:
              'Dans la littérature économique, « économie digitale », « économie d’Internet » et « économie du numérique » désignent globalement le même champ d’analyse.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quel est le point commun entre les appellations « nouvelle économie », « économie digitale » et « économie de la connaissance » ?',
              options: [
                'Elles renvoient toutes au retour à l’agriculture vivrière',
                'Elles désignent l’émergence d’activités où l’information, le savoir et les TIC deviennent le cœur de la création de valeur',
                'Elles concernent uniquement la fabrication de papier et d’imprimerie',
                'Elles excluent totalement les entreprises privées du circuit économique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ces expressions qualifient la transition vers une économie centrée sur l’information, les technologies numériques et l’intensité en connaissances.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch1_p2',
        order: 2,
        title: 'Les 6 secteurs institutionnels et les 3 marchés du circuit économique',
        summary:
          'Définir l’agent économique et la notion de résidence, distinguer les 6 secteurs institutionnels (Ménages, SNF, SF, APu, ISBLSM, RdM) et comprendre leur interaction sur les 3 marchés.',
        conceptExplanation:
          'En comptabilité nationale, un **agent économique** (ou unité institutionnelle) est une personne physique ou morale constituant un centre indépendant de décision économique. Les agents résidents — c’est-à-dire exerçant une activité économique sur le territoire national pendant **au moins un an** — sont regroupés avec le reste du monde en **six secteurs institutionnels**.\n\n' +
          '1. **Ménages** : fonction principale de consommation.\n' +
          '2. **Sociétés non financières (SNF)** : production de biens et services marchands non financiers.\n' +
          '3. **Sociétés financières (SF)** : production de services financiers marchands (paiement, placement, crédit, assurance/couverture de risque).\n' +
          '4. **Administrations publiques (APu)** : production de services non marchands financés par prélèvements obligatoires (impôts, taxes, cotisations).\n' +
          '5. **Institutions sans but lucratif au service des ménages (ISBLSM / ISBL)** : services non marchands financés par dons, cotisations volontaires et subventions (ONG, églises, mosquées, syndicats, partis).\n' +
          '6. **Reste du Monde (RdM)** : secteur fictif regroupant les non-résidents en relation avec le territoire.\n\n' +
          'Ces six secteurs interagissent via un **circuit économique** sur trois grands marchés : le marché des biens et services, le marché du travail et le marché des capitaux.',
        keyRule:
          'Chaque secteur institutionnel se définit par deux critères : sa fonction économique principale (consommer, produire marchand, produire non-marchand, financer) et la nature de ses ressources.',
        formulas: [
          {
            name: 'Critère de résidence économique',
            formula: '\\text{Agent résident} \\iff \\text{Centre d’intérêt économique sur le territoire} \\ge 1\\text{ an}',
            note: 'Les agents ne remplissant pas ce critère forment le secteur fictif du Reste du Monde (RdM).',
          },
          {
            name: 'Financement des services non marchands',
            formula: '\\text{APu} \\rightarrow \\text{Prélèvements obligatoires} \\quad|\\quad \\text{ISBLSM} \\rightarrow \\text{Dons \\& cotisations volontaires}',
            note: 'C’est le mode de financement qui distingue nettement une APu d’une ISBLSM.',
          },
        ],
        workedExample: {
          title: 'Cartographier les flux d’une plateforme de e-commerce en Côte d’Ivoire',
          statement:
            'Une plateforme e-commerce abidjanaise vend des téléphones achetés à un grossiste chinois, accepte des paiements via une banque locale, verse la TVA à la Direction Générale des Impôts, recrute des livreurs (foyers locaux) et collabore avec une ONG d’alphabétisation numérique. Classez chaque acteur dans les 6 secteurs.',
          methodSteps: [
            'La plateforme e-commerce et les livreurs en tant que salariés consommateurs : la plateforme est une SNF (service marchand non financier) ; les foyers des livreurs sont des Ménages.',
            'La banque locale gérant les paiements et le crédit : Société Financière (SF).',
            'L’État / Direction Générale des Impôts collectant la TVA et fournissant des services publics : Administration Publique (APu).',
            'L’ONG d’alphabétisation financée par des dons : ISBLSM.',
            'Le grossiste situé en Chine (non-résident) : Reste du Monde (RdM).',
          ],
          conclusion:
            'Les 6 secteurs institutionnels coexistent au sein d’un même écosystème numérique et forment un circuit complet de flux réels et monétaires.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Agent & Résidence',
            stepTheme: 'Unité institutionnelle',
            stepTitle: 'Agent économique et critère de résidence d’un an',
            paragraphText:
              'Avant de classer les acteurs d’une économie numérique, la comptabilité nationale fixe deux règles simples d’identification.\n' +
              '• **Agent économique (unité institutionnelle)** : personne physique (un individu) ou morale (entreprise, association, ministère) qui possède l’autonomie de décision pour détenir des actifs, s’endetter et réaliser des opérations économiques.\n' +
              '• **Critère de résidence** : un agent est considéré comme résident s’il exerce une activité économique sur le territoire national pendant **au moins un an** (indépendamment de sa nationalité).\n' +
              '• **Exemple** : une filiale de cloud implantée à Abidjan depuis 3 ans est résidente ; un consultant étranger en mission de 2 mois relève du Reste du Monde.',
            keyRule:
              'La résidence économique dépend de la durée d’implantation et d’activité (≥ 1 an sur le territoire), et non du passeport.',
            konanTip:
              'Piège classique d’examen : une entreprise à capitaux étrangers installée durablement à Marcory est une société RÉSIDENTE (SNF ou SF), pas le Reste du Monde !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Selon la comptabilité nationale, à quelle condition une personne physique ou morale est-elle considérée comme « résidente » d’un territoire ?',
              options: [
                'Détenir obligatoirement la nationalité du pays concerné',
                'Exercer une activité économique sur le territoire national pendant au moins un an',
                'Payer uniquement des impôts indirects à l’étranger',
                'Réaliser au moins 50 % de son chiffre d’affaires à l’exportation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La comptabilité nationale retient le critère de centre d’intérêt économique durable : au moins un an d’activité sur le territoire.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Secteurs 1 & 2',
            stepTheme: 'Ménages & SNF',
            stepTitle: 'Les Ménages et les Sociétés Non Financières (SNF)',
            paragraphText:
              'Les deux premiers secteurs forment le socle de la production et de la demande finale de biens et services courants.\n' +
              '• **Les Ménages** : individus ou groupes vivant sous un même toit dont la fonction principale est la **consommation** finale (ils offrent aussi leur force de travail et épargnent).\n' +
              '• **Les Sociétés Non Financières (SNF)** : entreprises publiques ou privées qui produisent des **biens et services marchands non financiers** (pain, acier, logiciels, télécommunications, e-commerce).\n' +
              '• **Exemple** : Orange Côte d’Ivoire en tant qu’opérateur télécom est une SNF (production de services marchands), tandis que l’étudiant qui achète un pass Internet appartient au secteur Ménages.',
            keyRule:
              'Un bien ou service est dit « marchand » lorsqu’il est vendu sur un marché à un prix couvrant au moins la moitié de son coût de production.',
            konanTip:
              'Attention : les entrepreneurs individuels (ex. un vendeur en ligne non constitué en société) sont rattachés au secteur des Ménages en comptabilité nationale.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Dans quel secteur institutionnel classe-t-on une entreprise privée qui développe et vend des logiciels de gestion commerciale ?',
              options: [
                'Les Administrations publiques (APu)',
                'Les Sociétés non financières (SNF)',
                'Les Sociétés financières (SF)',
                'Les ISBLSM',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une entreprise qui produit des biens ou services marchands (ici des logiciels) autres que financiers appartient aux Sociétés non financières (SNF).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Secteur 3',
            stepTheme: 'Sociétés Financières',
            stepTitle: 'Les Sociétés Financières (SF) et le financement de l’économie',
            paragraphText:
              'Sans intermédiaires capables de faire circuler la monnaie et le capital, aucun écosystème numérique ne peut fonctionner à grande échelle.\n' +
              '• **Fonction des SF** : produire des **services financiers marchands**, c’est-à-dire émettre, faire circuler et échanger des instruments de paiement, de placement, de crédit et de couverture de risque.\n' +
              '• **Acteurs concernés** : banques commerciales, compagnies d’assurance, établissements de microfinance, émetteurs de monnaie électronique agréés et sociétés de bourse.\n' +
              '• **Exemple** : lorsqu’une banque d’Abidjan accorde un prêt de trésorerie de 15 millions FCFA à une start-up ou gère les terminaux de paiement d’un site marchand, elle agit en tant que SF.',
            keyRule:
              'Les Sociétés Financières regroupent les banques, assurances et établissements financiers qui assurent paiement, crédit, placement et gestion du risque.',
            konanTip:
              'Ne confonds pas une fintech purement logicielle (éditeur d’outil comptable = SNF) avec un établissement agréé de paiement ou une banque (= SF).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle est la fonction économique principale des Sociétés Financières (SF) ?',
              options: [
                'Fournir des services gratuits financés par l’impôt',
                'Produire des services financiers marchands (paiement, placement, crédit, couverture de risque)',
                'Fabriquer des composants électroniques pour serveurs',
                'Réguler uniquement les associations caritatives',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les SF produisent des services d’intermédiation financière marchands : moyens de paiement, épargne/placement, octroi de crédit et assurance.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Secteurs 4 & 5',
            stepTheme: 'APu & ISBLSM',
            stepTitle: 'Administrations Publiques (APu) vs ISBLSM',
            paragraphText:
              'Certains services essentiels ne sont pas vendus à un prix de marché : ils sont dits « non marchands » mais relèvent de deux secteurs bien distincts selon leur financement.\n' +
              '• **Administrations Publiques (APu)** : État central, collectivités locales et sécurité sociale ; elles produisent des services non marchands financés par des **prélèvements obligatoires** (impôts, taxes, cotisations sociales).\n' +
              '• **ISBLSM (anciennement APr)** : Institutions sans but lucratif au service des ménages (ONG, églises, mosquées, syndicats, partis politiques) ; financées par **dons, cotisations volontaires et subventions**.\n' +
              '• **Exemple** : une université publique relève des APu, tandis qu’une ONG offrant des formations gratuites au codage pour jeunes filles relève des ISBLSM.',
            keyRule:
              'APu = non marchand financé par prélèvements OBLIGATOIRES ; ISBLSM = non marchand financé par dons et cotisations VOLONTAIRES.',
            konanTip:
              'L’astuce mnémotechnique infaillible : « Obligatoire = APu ; Volontaire = ISBLSM ».',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Quel critère permet de distinguer une Administration Publique (APu) d’une ISBLSM (ONG, syndicat, association) ?',
              options: [
                'Les APu ne produisent que des biens industriels exportés',
                'Les APu sont financées par des prélèvements obligatoires, tandis que les ISBLSM sont financées par des dons et cotisations volontaires',
                'Les ISBLSM ont pour but principal de maximiser le dividende des actionnaires',
                'Les APu regroupent exclusivement les entreprises étrangères non résidentes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toutes deux produisent des services non marchands, mais les APu tirent leurs ressources des prélèvements obligatoires alors que les ISBLSM dépendent de contributions volontaires et de subventions.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Secteur 6 & Synthèse',
            stepTheme: 'Reste du Monde',
            stepTitle: 'Le Reste du Monde (RdM) et tableau complet des 6 secteurs',
            paragraphText:
              'Aucune économie nationale ne fonctionne en vase clos, surtout dans le secteur numérique où les serveurs, licences et clients franchissent les frontières en millisecondes.\n' +
              '• **Reste du Monde (RdM)** : secteur institutionnel fictif regroupant tous les agents **non-résidents** (établis hors du territoire depuis plus d’un an ou présents moins d’un an) qui effectuent des échanges avec les résidents.\n' +
              '• **Opérations clés** : importations/exportations de biens et services numériques, flux de capitaux, investissements directs étrangers.\n' +
              '• **Exemple** : lorsqu’une PME ivoirienne paie un hébergement AWS en Europe ou Irlande, le flux monétaire sort vers le Reste du Monde (importation de service numérique).',
            keyRule:
              'Le Reste du Monde n’est pas un pays étranger précis : c’est l’ensemble comptable des unités non-résidentes en relation économique avec le pays étudié.',
            konanTip:
              'Mémorise le tableau comparatif ci-dessous : à l’examen, il permet de justifier instantanément le classement de n’importe quel acteur économique.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Les 6 secteurs institutionnels de la comptabilité nationale',
              caption: 'Classification officielle selon la fonction économique principale et l’origine des ressources.',
              tableData: {
                headers: ['Secteur institutionnel', 'Fonction économique principale', 'Ressources / Financement principal', 'Exemples concrets'],
                rows: [
                  ['Ménages', 'Consommation finale (et offre de travail)', 'Salaires, revenus de propriété, transferts', 'Foyers d’Abidjan, étudiants, entrepreneurs individuels'],
                  ['Sociétés Non Financières (SNF)', 'Production de biens & services marchands non financiers', 'Vente de biens et services sur le marché', 'Opérateurs télécoms, ESN, sites e-commerce, usines'],
                  ['Sociétés Financières (SF)', 'Services financiers marchands (paiement, crédit, risque)', 'Marges d’intérêt, commissions, primes d’assurance', 'Banques commerciales, assureurs, microfinances'],
                  ['Administrations Publiques (APu)', 'Services non marchands d’intérêt général & redistribution', 'Prélèvements obligatoires (impôts, taxes, cotisations)', 'État, ministères, mairies, ARTCI, universités publiques'],
                  ['ISBLSM (ISBL)', 'Services non marchands à destination des ménages', 'Dons, cotisations volontaires, subventions', 'ONG tech, associations, églises, mosquées, syndicats'],
                  ['Reste du Monde (RdM)', 'Secteur fictif retraçant les échanges avec l’extérieur', 'Recettes d’exportations / importations et capitaux', 'Fournisseurs cloud étrangers, clients hors territoire'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Une start-up basée à Abidjan achète pour 600 000 FCFA de licences logicielles auprès d’un éditeur américain sans filiale en Côte d’Ivoire. Avec quel secteur institutionnel réalise-t-elle cette transaction ?',
              options: [
                'Les Administrations publiques (APu)',
                'Le Reste du Monde (RdM)',
                'Les ISBLSM',
                'Les Ménages résidents',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’éditeur américain n’exerce pas d’activité durable sur le territoire national : il est non-résident et appartient comptablement au Reste du Monde (RdM).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Marchés',
            stepTheme: 'Circuit économique',
            stepTitle: 'Les trois marchés et la logique du circuit économique',
            paragraphText:
              'Comment ces six secteurs se coordonnent-ils chaque jour ? Leurs décisions se rencontrent sur trois grands marchés reliés par des flux réels (biens, travail) et monétaires (revenus, dépenses).\n' +
              '• **Marché des biens et services** : rencontre entre l’offre des entreprises (SNF, RdM) et la demande des ménages, entreprises, APu.\n' +
              '• **Marché du travail** : rencontre entre l’offre de travail des ménages et la demande de compétences des employeurs contre un salaire.\n' +
              '• **Marché des capitaux** : mise en relation des agents à capacité de financement (épargnants) et des agents à besoin de financement (investisseurs, start-ups).\n' +
              '• **Exemple** : un développeur (Ménage) vend son travail à une fintech (SNF), perçoit un salaire, achète des données mobiles et épargne via une banque (SF).',
            keyRule:
              'Tout flux réel (travail fourni, service livré) a pour contrepartie un flux monétaire de sens opposé (salaire, prix payé) à travers les trois marchés.',
            konanTip:
              'Retiens la symétrie du circuit : sur le marché du travail, ce sont les MÉNAGES qui sont offreurs (ils offrent leur force de travail) et les ENTREPRISES qui sont demandeuses !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Sur les trois grands marchés du circuit économique, quel rôle jouent les ménages sur le marché du travail ?',
              options: [
                'Ils sont demandeurs de travail et versent les salaires aux SNF',
                'Ils sont offreurs de travail et perçoivent des salaires en contrepartie',
                'Ils fixent seuls le taux directeur de la banque centrale',
                'Ils n’interviennent jamais sur le marché du travail',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les ménages offrent leur force de travail et leurs compétences aux entreprises et administrations, qui forment la demande de travail.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch1_p3',
        order: 3,
        title: '« Le numérique » vs « l’économie numérique » et les 4 catégories TIC',
        summary:
          'Distinguer la brique technique (codage binaire) de l’édifice économique, analyser l’écosystème technologique et classer les 4 catégories d’activités TIC.',
        conceptExplanation:
          'Une distinction conceptuelle fondamentale sépare deux notions souvent confondues dans le langage courant :\n' +
          '• **Le numérique (la brique élémentaire)** : tout ce qui est représenté par des données ou informations codées sous forme binaire ($0$ et $1$). C’est l’outil et le socle de toute technologie informatique.\n' +
          '• **L’économie numérique (l’édifice)** : l’ensemble des activités économiques qui reposent sur les technologies numériques pour créer, distribuer et capturer de la valeur, ainsi que les transformations qu’elles induisent sur les marchés et les entreprises.\n\n' +
          'Cet édifice s’appuie sur un écosystème composé d’Internet, des appareils connectés, du Web, de l’Intelligence Artificielle (IA), de la Blockchain, de l’Internet des Objets (IoT) et de l’analytique Big Data, irriguant tous les domaines (éducation, commerce, santé, agriculture, sécurité, gestion, politique).\n\n' +
          'Sur le plan sectoriel, les activités TIC se répartissent en **quatre grandes catégories** : la **production des TIC**, la **distribution des TIC**, les **services liés aux TIC** et les **contenus et supports de TIC**.',
        keyRule:
          'Le numérique est la brique binaire (0 et 1) ; l’économie numérique est l’édifice économique et organisationnel bâti avec ces briques.',
        formulas: [
          {
            name: 'Métaphore brique / édifice',
            formula: '\\text{Le numérique (Codage binaire } 0/1\\text{)} \\;\\xrightarrow{\\text{Usage économique}}\\; \\text{Économie numérique (Création de valeur)}',
            note: 'La technologie seule ne fait pas l’économie numérique : c’est son intégration dans les modèles d’affaires et les échanges qui crée la valeur.',
          },
        ],
        workedExample: {
          title: 'Classer quatre entreprises d’Abidjan dans les 4 catégories TIC',
          statement:
            'Classez ces quatre entreprises dans la typologie officielle des activités TIC : (A) une usine d’assemblage de cartes électroniques et routeurs ; (B) un grossiste B2B vendant des serveurs et périphériques aux entreprises ; (C) un studio développant des applications mobiles et hébergeant des données cloud ; (D) une maison d’édition musicale et vidéo diffusant des contenus en ligne.',
          methodSteps: [
            'Entreprise A (fabrication de cartes et routeurs) : Production des TIC (fabrication de composants, ordinateurs et équipements de communication).',
            'Entreprise B (commerce de gros B2B informatique) : Distribution des TIC (vente interentreprises de matériel et logiciels).',
            'Entreprise C (développement logiciel et hébergement) : Services liés aux TIC (programmation, édition logicielle, traitement et hébergement de données).',
            'Entreprise D (édition musicale et vidéo) : Contenus et supports de TIC (création et diffusion de messages organisés destinés aux humains).',
          ],
          conclusion:
            'La distinction entre matériel produit, négoce B2B, service technique et contenu informationnel évite toute erreur de classification sectorielle.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fondamentaux',
            stepTheme: 'Brique vs Édifice',
            stepTitle: 'Le numérique (brique binaire) vs l’économie numérique (édifice)',
            paragraphText:
              'Confondre « informatique » et « économie numérique » conduit à réduire une transformation économique majeure à de simples appareils.\n' +
              '• **Le numérique (la brique)** : ensemble des informations, textes, sons et images codés sous forme **binaire ($0$ et $1$)** ; c’est le socle technique élémentaire.\n' +
              '• **L’économie numérique (l’édifice)** : l’ensemble des activités économiques utilisant ces briques numériques pour produire, échanger et créer de la valeur.\n' +
              '• **Exemple** : un fichier MP3 codé en bits est du numérique (la brique) ; une plateforme de streaming musical vendant des abonnements et rémunérant les artistes grâce à ces fichiers appartient à l’économie numérique (l’édifice).',
            keyRule:
              'Le numérique est l’outil technique (codage 0 et 1) ; l’économie numérique est l’organisation économique et marchande construite grâce à cet outil.',
            konanTip:
              'Cette analogie « brique vs édifice » est très appréciée à l’examen : cite toujours le codage binaire pour « le numérique » et la création de valeur/transformation des marchés pour « l’économie numérique ».',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle proposition exprime le plus exactement la différence entre « le numérique » et « l’économie numérique » ?',
              options: [
                'Le numérique concerne uniquement les téléphones mobiles, l’économie numérique uniquement les ordinateurs',
                'Le numérique est la brique élémentaire (données codées en binaire 0 et 1), tandis que l’économie numérique est l’édifice des activités économiques créant de la valeur avec ces technologies',
                'Le numérique est réservé au secteur public et l’économie numérique au secteur privé',
                'Il n’existe aucune différence entre les deux notions',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le numérique désigne la représentation binaire de l’information (0 et 1), tandis que l’économie numérique englobe l’ensemble des activités et transformations économiques fondées sur ces technologies.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Écosystème',
            stepTheme: 'Architecture en couches',
            stepTitle: 'L’édifice technologique : infrastructures, plateformes et usages',
            paragraphText:
              'L’économie numérique ne repose pas sur une technologie isolée mais sur un empilement cohérent de couches technologiques et économiques.\n' +
              '• **Couche 1 — Socle binaire & infrastructures** : réseaux fibre/4G/5G, câbles sous-marins, datacenters, terminaux et objets connectés (IoT).\n' +
              '• **Couche 2 — Technologies & plateformes** : Web, Cloud, IA, Blockchain et analytique Big Data permettant de traiter la donnée à grande échelle.\n' +
              '• **Couche 3 — Usages sectoriels** : e-commerce, edtech, e-santé, agritech, fintech, sécurité et e-administration.\n' +
              '• **Exemple** : en agriculture ivoirienne, des capteurs IoT (couche 1) alimentent une IA météo (couche 2) qui conseille les planteurs de cacao par SMS/app (couche 3).',
            keyRule:
              'Sans infrastructure réseau et énergétique (couche basse), les plateformes (couche intermédiaire) et applications sectorielles (couche haute) ne peuvent fonctionner.',
            konanTip:
              'Observe bien le schéma en couches ci-dessous : il permet de situer instantanément n’importe quelle entreprise tech dans la pile de l’économie numérique.',
            visualSchema: {
              type: 'layered_stack',
              title: 'L’édifice de l’économie numérique en trois strates',
              caption: 'De la brique binaire et des infrastructures jusqu’aux usages sectoriels créateurs de valeur.',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Sommet',
                    title: 'Services, Modèles d’affaires & Usages sectoriels',
                    subtitle: 'Fintech, E-commerce, Edtech, E-santé, Agritech, E-gouvernement',
                    color: 'green',
                  },
                  {
                    badge: 'Milieu',
                    title: 'Plateformes, Données & Technologies émergentes',
                    subtitle: 'Web, Cloud Computing, Big Data, IA, Blockchain, Matching algorithmique',
                    color: 'violet',
                  },
                  {
                    badge: 'Socle',
                    title: 'Brique numérique (0/1) & Infrastructures physiques',
                    subtitle: 'Semi-conducteurs, smartphones, IoT, fibre optique, 4G/5G, datacenters',
                    color: 'blue',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants, lequel appartient à la couche intermédiaire des technologies émergentes et de traitement au sein de l’écosystème numérique ?',
              options: [
                'L’analytique Big Data, l’Intelligence Artificielle et la Blockchain',
                'La récolte manuelle du café sans capteur',
                'Le transport routier de marchandises sans suivi GPS',
                'Le paiement exclusif en pièces de monnaie métalliques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’écosystème numérique s’appuie sur l’Internet et les appareils, enrichis par les technologies émergentes (IA, Blockchain, IoT, Big Data) qui rendent possibles les usages sectoriels.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Catégorie 1',
            stepTheme: 'Production TIC',
            stepTitle: 'Secteurs producteurs de TIC : le matériel et les composants',
            paragraphText:
              'La première grande famille de l’économie numérique concerne la fabrication physique des équipements sans lesquels aucune donnée ne circule.\n' +
              '• **Composants et cartes** : fabrication de semi-conducteurs, puces électroniques et cartes assemblées.\n' +
              '• **Matériel informatique et réseaux** : fabrication d’ordinateurs, périphériques et équipements de communication (routeurs, antennes, modems).\n' +
              '• **Électronique grand public & supports** : fabrication de téléviseurs, smartphones et supports magnétiques ou optiques.\n' +
              '• **Exemple** : les usines asiatiques ou européennes produisant des processeurs, cartes mères et bornes Wi-Fi constituent le pôle « Production des TIC ».',
            keyRule:
              'La catégorie « Production des TIC » regroupe exclusivement les activités industrielles de fabrication de matériel électronique, informatique et télécom.',
            konanTip:
              'Attention à ne pas y ranger les logiciels ! La création de logiciels appartient aux « Services liés aux TIC », pas à la production matérielle.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Laquelle de ces activités relève de la catégorie « Production des TIC » ?',
              options: [
                'L’édition d’un jeu vidéo mobile',
                'La fabrication de composants électroniques, d’ordinateurs et d’équipements de communication',
                'Le commerce de gros de licences bureautiques',
                'La diffusion de séries sur une chaîne de télévision',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La production des TIC recouvre la fabrication matérielle : composants électroniques, cartes assemblées, ordinateurs, périphériques, équipements télécoms et supports.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Catégorie 2',
            stepTheme: 'Distribution TIC',
            stepTitle: 'Distribution des TIC : le commerce interentreprises (B2B)',
            paragraphText:
              'Entre les usines qui fabriquent les équipements TIC et les organisations qui les utilisent opèrent des acteurs spécialisés dans l’acheminement commercial.\n' +
              '• **Définition** : activités de vente et de commerce de gros (interentreprises / B2B) de matériel informatique et télécom.\n' +
              '• **Périmètre matériel & logiciel** : gros d’ordinateurs, périphériques, logiciels standards, composants électroniques et équipements de télécommunication.\n' +
              '• **Exemple** : un distributeur agréé à Abidjan qui importe et revend en gros 500 ordinateurs portables et 50 switchs réseau à des banques et universités exerce une activité de distribution des TIC.',
            keyRule:
              'La distribution des TIC vise essentiellement le commerce de gros interentreprises (B2B) d’équipements informatiques, électroniques et logiciels.',
            konanTip:
              'Repère le mot-clé « commerce de gros / interentreprises » pour identifier immédiatement la catégorie Distribution des TIC.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Que regroupe principalement la catégorie « Distribution des TIC » ?',
              options: [
                'La programmation de moteurs d’intelligence artificielle',
                'Le commerce de gros (interentreprises) d’ordinateurs, périphériques, composants, logiciels et équipements télécoms',
                'La réparation artisanale de téléphones pour particuliers',
                'La production cinématographique et musicale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La distribution des TIC correspond au commerce de gros (B2B) des équipements informatiques, logiciels, composants électroniques et matériels de télécommunication.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Catégorie 3',
            stepTheme: 'Services TIC',
            stepTitle: 'Les services liés aux TIC : logiciels, télécoms et cloud',
            paragraphText:
              'C’est aujourd’hui le segment le plus dynamique en création d’emplois qualifiés dans les économies africaines et mondiales.\n' +
              '• **Édition & programmation** : édition de logiciels système, réseau, applicatifs, outils de développement et jeux électroniques ; programmation sur mesure.\n' +
              '• **Télécommunications** : services filaires, sans fil (4G/5G), par satellite.\n' +
              '• **Conseil, hébergement & maintenance** : traitement de données, hébergement cloud, infogérance, conseil informatique et réparation d’équipements.\n' +
              '• **Exemple** : une ESN (Entreprise de Services du Numérique) d’Abidjan qui développe un ERP et héberge les bases de données de ses clients relève des services liés aux TIC.',
            keyRule:
              'Logiciels + Télécoms + Programmation + Conseil + Hébergement/Traitement de données + Réparation = Services liés aux TIC.',
            konanTip:
              'Rappelle-toi que l’édition de jeux vidéo ou de logiciels applicatifs est classée dans les « Services liés aux TIC » (et non dans les contenus éditoriaux classiques).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Laquelle de ces prestations appartient à la catégorie « Services liés aux TIC » ?',
              options: [
                'L’édition de logiciels, les télécommunications, la programmation et l’hébergement de données',
                'La fabrication de cartes électroniques en usine',
                'L’édition de journaux imprimés sur papier uniquement',
                'La culture vivrière non connectée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les services liés aux TIC couvrent l’édition logicielle, les télécommunications, la programmation, le conseil, le traitement/hébergement de données et la réparation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Catégorie 4 & Synthèse',
            stepTheme: 'Contenus TIC',
            stepTitle: 'Activités de contenus et matrice des 4 catégories TIC',
            paragraphText:
              'Une infrastructure informatique sans messages ni créations culturelles reste une coquille vide : la quatrième catégorie rassemble les industries de contenus.\n' +
              '• **Définition du contenu** : message organisé destiné à des êtres humains, créé et diffusé via des supports numériques ou médiatiques.\n' +
              '• **Métiers concernés** : édition (livres, presse, revues), production cinématographique, vidéo et télévision, enregistrement sonore et édition musicale, services d’information.\n' +
              '• **Exemple** : une web-TV ivoirienne ou un label musical distribuant ses œuvres sur les plateformes numériques relève de la catégorie « Contenus et supports ».',
            keyRule:
              'Les quatre piliers sectoriels de l’économie numérique sont : Production matérielle, Distribution B2B, Services TIC (logiciels/télécoms/cloud) et Contenus.',
            konanTip:
              'Utilise la matrice 2×2 ci-dessous pour retenir les quatre catégories en un coup d’œil et vérifier leur rôle respectif.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Typologie des 4 grandes catégories d’activités TIC',
              caption: 'Croisement entre nature de l’offre (Matériel vs Immatériel) et rôle dans la filière (Infrastructure vs Marché/Usage).',
              matrix2x2: {
                topAxis: ['Pôle MATÉRIEL & NÉGOCE', 'Pôle IMMATÉRIEL & LOGICIEL'],
                leftAxis: ['SOCLE TECHNIQUE', 'SERVICES & CRÉATION'],
                topLeft: {
                  title: '1. Production des TIC',
                  color: 'blue',
                  items: [
                    'Composants et cartes électroniques',
                    'Ordinateurs et périphériques',
                    'Équipements télécoms & supports optiques',
                  ],
                },
                topRight: {
                  title: '3. Services liés aux TIC',
                  color: 'violet',
                  items: [
                    'Édition logicielle & programmation',
                    'Télécoms (filaire, mobile, satellite)',
                    'Cloud, traitement de données & maintenance',
                  ],
                },
                bottomLeft: {
                  title: '2. Distribution des TIC',
                  color: 'orange',
                  items: [
                    'Commerce de gros B2B d’ordinateurs',
                    'Négoce de composants & équipements réseau',
                    'Distribution B2B de logiciels standards',
                  ],
                },
                bottomRight: {
                  title: '4. Contenus et supports TIC',
                  color: 'green',
                  items: [
                    'Édition (livres, presse, revues)',
                    'Cinéma, vidéo, télévision & streaming',
                    'Musique, son & services d’information',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Comment définit-on la 4e catégorie d’activités liées aux « contenus et supports de TIC » ?',
              options: [
                'La fabrication de câbles sous-marins en fibre optique',
                'La création et la diffusion de messages organisés destinés à des êtres humains (édition, cinéma, vidéo, musique, information)',
                'La maintenance des serveurs de datacenters',
                'La vente en gros de microprocesseurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les activités de contenus et supports de TIC participent à la création et à la diffusion de messages organisés pour les humains (livres, presse, vidéo, TV, musique, information).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.4
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch1_p4',
        order: 4,
        title: 'Révolutions industrielles, propriétés des biens numériques et grandes lois',
        summary:
          'Retracer les quatre révolutions industrielles jusqu’à l’Industrie 4.0, comprendre le coût marginal quasi nul et la non-rivalité, puis appliquer les lois de Moore, Metcalfe et Reed.',
        conceptExplanation:
          'L’économie numérique s’inscrit dans la continuité de grandes ruptures technologiques :\n' +
          '• **1re Révolution industrielle (XVIIIe–XIXe s.)** : machine à vapeur, chemin de fer, mécanisation.\n' +
          '• **2e Révolution industrielle (XIXe–XXe s.)** : électricité, moteur électrique, Organisation Scientifique du Travail (OST), production puis consommation de masse.\n' +
          '• **3e Révolution industrielle (NTIC)** : téléphone (Bell, 1876), radio (Marconi, 1898), tube à vide (De Forest, 1906), premier ordinateur (1946), transistor (1947), microprocesseur (1970) et Internet.\n' +
          '• **4e Révolution (Industrie 4.0)** : automatisation avancée, 5G, Cloud Computing, IoT, Big Data, IA, réalité augmentée et FabLabs.\n\n' +
          'Les biens numériques obéissent à des propriétés économiques singulières : **coût marginal quasi nul** de reproduction, **non-rivalité** (la consommation par l’un ne prive pas l’autre), difficulté d’exclusion et **rendements croissants d’adoption**. Ces dynamiques sont formalisées par trois lois : **loi de Moore (1965)**, **loi de Metcalfe (1980)** et **loi de Reed (1988)**.',
        keyRule:
          'Trois propriétés définissent le bien numérique : coût marginal quasi nul, non-rivalité et rendements croissants d’adoption pilotés par les lois de Moore, Metcalfe et Reed.',
        formulas: [
          {
            name: 'Loi de Metcalfe (1980)',
            formula: 'V_{\\text{Metcalfe}}(n) \\propto n(n - 1) \\approx n^2',
            note: 'La valeur d’un réseau croît approximativement comme le carré du nombre d’utilisateurs connectés.',
          },
          {
            name: 'Loi de Reed (1988)',
            formula: 'V_{\\text{Reed}}(n) \\propto 2^n - n - 1 \\approx 2^n',
            note: 'La valeur d’un réseau formant des groupes et communautés croît de façon exponentielle en puissance de 2.',
          },
        ],
        workedExample: {
          title: 'Comparer la valeur d’un réseau de 10 vs 100 utilisateurs selon Metcalfe',
          statement:
            'Une messagerie professionnelle interne passe de 10 à 100 collaborateurs connectés. Évaluez la progression du nombre de connexions bilatérales possibles selon la loi de Metcalfe.',
          methodSteps: [
            'Formule exacte du nombre de paires distinctes entre n utilisateurs : C(n) = n(n - 1) / 2.',
            'Pour n = 10 utilisateurs : C(10) = (10 × 9) / 2 = 45 connexions possibles.',
            'Pour n = 100 utilisateurs : C(100) = (100 × 99) / 2 = 4 950 connexions possibles.',
            'Le nombre d’utilisateurs a été multiplié par 10, mais le potentiel de connexions (et donc la valeur du réseau) a été multiplié par 4 950 / 45 = 110 (soit environ 10² = 100).',
          ],
          conclusion:
            'C’est cette croissance quadratique qui déclenche une course à la taille critique et favorise la concentration des marchés numériques.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Révolutions 1 & 2',
            stepTheme: 'Histoire industrielle',
            stepTitle: 'Des systèmes pré-industriels aux deux premières révolutions',
            paragraphText:
              'Avant l’informatique, l’économie mondiale a connu une lente mutation depuis le troc et le monnayage des échanges jusqu’à la grande industrie.\n' +
              '• **1re Révolution industrielle (XVIIIe–XIXe)** : passage d’une économie agricole et artisanale à l’industrie mécanisée grâce à la machine à vapeur et au chemin de fer.\n' +
              '• **2e Révolution industrielle (XIXe–XXe)** : essor de l’électricité (ampoule, moteur électrique), organisation scientifique du travail (OST) et production de masse.\n' +
              '• **Jalons macroéconomiques du XXe** : crise de surproduction (1929), Trente Glorieuses et consommation de masse (1945-1975), chocs pétroliers (1973, 1979).',
            keyRule:
              '1re RI = vapeur & mécanisation ; 2e RI = électricité, OST & production de masse.',
            konanTip:
              'Retiens les trois dates économiques associées : 1929 (crise de surproduction), 1945-1975 (Trente Glorieuses) et 1973/1979 (chocs pétroliers).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p4_q1',
              type: 'mcq',
              prompt:
                'Quelles innovations caractérisent principalement la deuxième révolution industrielle (fin XIXe – début XXe siècle) ?',
              options: [
                'L’usage de l’électricité, le moteur électrique, l’OST et la production de masse',
                'La 5G, le cloud computing et la blockchain',
                'Le troc et le commerce triangulaire',
                'Le premier microprocesseur et les FabLabs',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La 2e révolution industrielle s’appuie sur l’électricité, l’organisation scientifique du travail (OST) et la production de masse.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Révolutions 3 & 4',
            stepTheme: 'NTIC & Industrie 4.0',
            stepTitle: 'De la 3e révolution (NTIC) à l’Industrie 4.0',
            paragraphText:
              'La troisième et la quatrième révolutions industrielles placent l’information, la connectivité et l’automatisation intelligente au centre de la production.\n' +
              '• **3e Révolution (NTIC)** : jalonnée par le téléphone (Bell, 1876), la radio (Marconi, 1898), le tube à vide (De Forest, 1906), le premier ordinateur (1946), le transistor (1947), le microprocesseur (1970) et l’essor d’Internet.\n' +
              '• **4e Révolution (Industrie 4.0)** : intégration de l’automatisation, de la 5G, du cloud computing, de l’IoT, du Big Data, de l’IA, de la réalité augmentée et des FabLabs sur toute la chaîne de valeur.\n' +
              '• **Exemple** : une usine connectée pilotant ses stocks en temps réel via capteurs IoT et maintenance prédictive par IA incarne l’Industrie 4.0.',
            keyRule:
              '3e RI = ordinateurs, semi-conducteurs et Internet ; 4e RI (Industrie 4.0) = interconnexion cyber-physique (5G, Cloud, IoT, IA, Big Data).',
            konanTip:
              'Mémorise les deux inventions clés d’après-guerre : ordinateur (1946), transistor (1947), puis microprocesseur (1970).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p4_q2',
              type: 'mcq',
              prompt:
                'Quelle combinaison technologique définit spécifiquement l’Industrie 4.0 (4e révolution industrielle) ?',
              options: [
                'Machine à vapeur et rail en fonte',
                'Automatisation, 5G, cloud computing, IoT, Big Data, IA et systèmes d’intégration',
                'Tube à vide et télégraphe mécanique',
                'Ampoule à incandescence et chaîne d’assemblage sans capteurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Industrie 4.0 prolonge la 3e révolution en connectant toute la chaîne de valeur via 5G, cloud, IoT, Big Data, IA et automatisation.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Coût marginal ≈ 0',
            stepTheme: 'Structure de coûts',
            stepTitle: 'Coûts fixes initiaux élevés et coût marginal quasi nul',
            paragraphText:
              'Contrairement à une boulangerie qui doit payer de la farine et du travail pour chaque baguette supplémentaire, un éditeur logiciel présente une structure de coûts radicalement différente.\n' +
              '• **Coût fixe élevé** : concevoir, coder et tester la première copie d’un logiciel, d’un film ou d’une plateforme demande un investissement lourd.\n' +
              '• **Coût marginal quasi nul** : dupliquer et distribuer l’unité supplémentaire via Internet coûte presque zéro franc.\n' +
              '• **Exemple** : développer un cours interactif en ligne coûte 10 000 000 FCFA, mais l’inscrire pour le 1 000e ou le 50 000e étudiant ne coûte que quelques francs de bande passante.',
            formula: {
              name: 'Coût moyen décroissant avec le volume',
              formula: 'CM(Q) = \\frac{CF}{Q} + Cm \\;\\xrightarrow{\\;Cm \\approx 0\\;}\\; CM(Q) \\approx \\frac{CF}{Q}',
              note: 'Plus le volume d’utilisateurs Q augmente, plus le coût moyen unitaire tend vers zéro (économies d’échelle massives).',
            },
            keyRule:
              'Un coût marginal quasi nul engendre des rendements d’échelle croissants et explique la rentabilité explosive des acteurs numériques leaders.',
            konanTip:
              'Retiens ce calcul réflexe : si $CF = 10\\text{ M}$ et $Cm \\approx 0$, pour $1\\ 000$ clients $CM = 10\\ 000\\text{ FCFA}$, mais pour $100\\ 000$ clients $CM = 100\\text{ FCFA}$ !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p4_q3',
              type: 'mcq',
              prompt:
                'Pourquoi le coût moyen unitaire d’un logiciel ou d’un média numérique chute-t-il drastiquement lorsque le nombre d’utilisateurs augmente ?',
              options: [
                'Parce que les coûts fixes disparaissent après le lancement',
                'Parce que le coût fixe initial est amorti sur un volume croissant alors que le coût marginal de reproduction est quasi nul',
                'Parce que l’État rembourse systématiquement les serveurs',
                'Parce que les développeurs travaillent bénévolement après la sortie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec un coût marginal proche de zéro, les coûts fixes initiaux se divisent par un nombre toujours plus grand d’utilisateurs, réduisant fortement le coût moyen.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bien numérique',
            stepTheme: 'Non-rivalité & Exclusion',
            stepTitle: 'Non-rivalité et difficulté d’exclusion des biens informationnels',
            paragraphText:
              'Un bien matériel (un téléphone, un plat) s’use et ne peut être consommé que par une personne à la fois. Un bien numérique (fichier, logiciel, vidéo) se comporte tout autrement.\n' +
              '• **Non-rivalité** : la consommation d’un fichier ou d’une base de données par un utilisateur n’en diminue ni la quantité ni la qualité pour les autres.\n' +
              '• **Non-exclusion naturelle (ou coût d’exclusion)** : sans verrous techniques (DRM, authentification, abonnements) ou juridiques (droit d’auteur), il est très facile de copier et partager le bien gratuitement.\n' +
              '• **Exemple** : si 5 000 étudiants téléchargent le même support PDF de révision, le fichier original reste intact pour le 5 001e étudiant.',
            keyRule:
              'Les biens numériques sont non-rivaux par nature ; les entreprises doivent donc créer artificiellement l’exclusion (comptes payants, chiffrement, cloud) pour les monétiser.',
            konanTip:
              'C’est exactement la non-rivalité et la facilité de copie qui expliquent à la fois le piratage et le succès du modèle par abonnement authentifié (SaaS, streaming).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p4_q4',
              type: 'mcq',
              prompt:
                'Que signifie la propriété de « non-rivalité » appliquée à un bien numérique comme un logiciel ou une vidéo en ligne ?',
              options: [
                'Le bien ne peut pas être copié techniquement',
                'La consommation du bien par un usager n’empêche pas d’autres usagers d’en profiter simultanément sans l’épuiser',
                'Le prix du bien double automatiquement à chaque nouveau téléchargement',
                'Un seul producteur détient le monopole mondial du secteur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un bien non-rival peut être consommé par une multitude d’utilisateurs sans diminution de la disponibilité pour autrui.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Loi de Moore',
            stepTheme: 'Puissance de calcul',
            stepTitle: 'La loi de Moore (1965) et l’effondrement des coûts de calcul',
            paragraphText:
              'Comment les smartphones actuels peuvent-ils être des millions de fois plus puissants que les ordinateurs ayant envoyé l’homme sur la Lune ? Gordon Moore en a formulé la loi empirique dès 1965.\n' +
              '• **Énoncé de la loi de Moore** : le nombre de transistors intégrés dans un semi-conducteur (microprocesseur) **double environ tous les 2 ans** (18 à 24 mois).\n' +
              '• **Lois connexes** : si la densité doublait en laissant le coût et la consommation électrique exploser, la technologie serait intenable ; en pratique, la puissance progresse de manière exponentielle tandis que le **coût unitaire s’effondre**.\n' +
              '• **Exemple** : la démocratisation des smartphones à moins de 50 000 FCFA en Afrique de l’Ouest découle directement de cette baisse tendancielle du coût du calcul et de la mémoire.',
            formula: {
              name: 'Progression exponentielle (Loi de Moore)',
              formula: 'N(t) = N_0 \\cdot 2^{t / 2}',
              note: 'Où t est exprimé en années : tous les 2 ans, la capacité d’intégration double.',
            },
            keyRule:
              'La loi de Moore explique la croissance exponentielle des performances matérielles et l’effondrement simultané du coût unitaire de traitement de l’information.',
            konanTip:
              'Ne confonds pas : Moore (1965) porte sur le HARDWARE (transistors / puissance de calcul), tandis que Metcalfe (1980) et Reed (1988) portent sur les RÉSEAUX !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p4_q5',
              type: 'mcq',
              prompt:
                'Selon la loi formulée par Gordon Moore en 1965, quelle grandeur double environ tous les deux ans ?',
              options: [
                'Le prix de vente des ordinateurs personnels',
                'Le nombre de transistors dans un semi-conducteur (microprocesseur)',
                'La durée légale des brevets logiciels',
                'Le nombre de secteurs institutionnels nationaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Gordon Moore a observé que le nombre de transistors sur une puce double environ tous les 2 ans, entraînant une explosion de puissance et une chute des coûts unitaires.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Metcalfe & Reed',
            stepTheme: 'Rendements croissants',
            stepTitle: 'Rendements croissants d’adoption : lois de Metcalfe et de Reed',
            paragraphText:
              'Dans l’économie classique, les rendements finissent par décroître ; dans les réseaux numériques, c’est l’inverse : chaque nouvel arrivant rend le service plus précieux pour tous les autres.\n' +
              '• **Loi de Metcalfe (1980)** : la valeur d’un réseau augmente proportionnellement au **carré du nombre de ses utilisateurs** ($n^2$), créant une course à la taille, un avantage au pionnier et une concentration des marchés.\n' +
              '• **Loi de Reed (1988)** : Metcalfe sous-estime la création de **sous-groupes et communautés** (groupes WhatsApp, forums, équipes) ; la valeur croît alors encore plus vite ($2^n$).\n' +
              '• **Exemple** : sur un réseau de transfert d’argent mobile, l’utilité pour un commerçant d’Abidjan explose lorsque ses fournisseurs et ses clients forment des groupes d’échange actifs.',
            keyRule:
              'Metcalfe ($\\propto n^2$) mesure la valeur des connexions individuelles ; Reed ($\\propto 2^n$) y ajoute la puissance des communautés et sous-groupes.',
            konanTip:
              'Les quatre conséquences de Metcalfe à citer ensemble : (1) marché à effets de réseau, (2) avantage du pionnier, (3) effet d’entraînement rapide, (4) marché concentré.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch1_p4_q6',
              type: 'mcq',
              prompt:
                'En quoi la loi de David Reed (1988) prolonge-t-elle et dépasse-t-elle la loi de Robert Metcalfe (1980) ?',
              options: [
                'Elle montre que la valeur d’un réseau diminue lorsque trop d’utilisateurs s’inscrivent',
                'Elle montre que la valeur d’un réseau est décuplée par la formation de sous-groupes et de communautés collaboratives, croissant encore plus vite que n²',
                'Elle s’applique exclusivement au prix des processeurs en silicium',
                'Elle affirme que seul le secteur public peut créer un réseau rentable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'David Reed souligne qu’un membre n’est pas seulement relié à d’autres individus un par un (Metcalfe), mais aussi à de multiples sous-ensembles et communautés, démultipliant la valeur du réseau.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : TENDANCES MONDIALES, CHAÎNE DE VALEUR ET ÉCONOMIE DES DONNÉES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch2',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Tendances mondiales, chaîne de valeur et économie des données',
    summary:
      'Analyser le poids macroéconomique du numérique (rapports CNUCED, UIT, OCDE) et l’asymétrie géographique mondiale, comprendre les données et l’attention comme ressources stratégiques, et maîtriser la chaîne de valeur de Porter (cas Apple).',
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction à l’Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 2.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch2_p1',
        order: 1,
        title: 'Tendances mondiales (CNUCED, OCDE) et asymétrie géographique GAFAM / BATX',
        summary:
          'Mesurer la part du numérique dans le PIB, les services et le e-commerce mondial, et analyser la fracture géopolitique entre États-Unis, Chine et Afrique.',
        conceptExplanation:
          'Les rapports internationaux (CNUCED, UIT, OMC, OCDE) démontrent que l’économie numérique n’est plus un secteur marginal mais le moteur central de la croissance mondiale.\n\n' +
          'Selon la CNUCED (2019), le seul secteur des TIC représente **4,5 % du PIB mondial**, mais en incluant les secteurs transformationnels utilisant le numérique, la contribution grimpe à **15,5 % du PIB mondial**. Les services numériques pèsent **50 % des exportations mondiales de services**, et le secteur a créé plus de **5 millions d’emplois** entre 2010 et 2015. Le e-commerce mondial atteint environ **26 700 milliards USD en 2019** (+4 % sur un an), avec une accélération de la part des ventes au détail en ligne de **16 % à 19 %** durant la crise COVID-19.\n\n' +
          'Toutefois, cette richesse est marquée par une profonde **asymétrie géographique** : États-Unis (**GAFAM** : Google, Apple, Facebook/Meta, Amazon, Microsoft) et Chine (**BATX** : Baidu, Alibaba, Tencent, Xiaomi) concentrent l’essentiel des plateformes mondiales, des datacenters et de la capitalisation boursière, laissant l’Afrique et de nombreux pays en développement en position de consommateurs nets exposés à une fuite de valeur.',
        keyRule:
          'Distingue bien le secteur TIC pur (4,5 % du PIB mondial) de l’économie numérique élargie (15,5 % du PIB mondial), et retiens l’hyper-concentration géographique entre États-Unis et Chine.',
        formulas: [
          {
            name: 'Contribution élargie au PIB mondial (CNUCED)',
            formula: '4{,}5\\% \\text{ (TIC purs)} + 11{,}0\\% \\text{ (Secteurs transformés)} = 15{,}5\\% \\text{ du PIB mondial}',
            note: 'Les effets indirects du numérique sur les autres industries sont plus de deux fois supérieurs au poids du seul secteur TIC.',
          },
        ],
        workedExample: {
          title: 'Interpréter l’écart entre TIC purs et économie numérique élargie',
          statement:
            'Un décideur déclare que « le numérique ne pèse que 4,5 % du PIB mondial et reste donc secondaire par rapport au commerce ou à la finance ». Réfutez ou nuancez ce propos à l’aide des données de la CNUCED.',
          methodSteps: [
            'Le chiffre de 4,5 % mesure uniquement la valeur ajoutée directe du secteur producteur et distributeur de TIC.',
            'En intégrant les secteurs traditionnels transformés par les TIC (commerce en ligne, banque digitale, logistique connectée, médias), la contribution atteint 15,5 % du PIB mondial.',
            'De plus, 50 % des exportations mondiales de services reposent désormais sur des services délivrés numériquement.',
            'Le numérique est donc une technologie transversale (« General Purpose Technology ») qui irrigue toute l’économie.',
          ],
          conclusion:
            'Limiter le poids du numérique aux seuls producteurs de TIC revient à ignorer plus des deux tiers de son impact macroéconomique réel.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'PIB & Emplois',
            stepTheme: 'Indicateurs CNUCED',
            stepTitle: 'Part des TIC et des secteurs transformationnels dans le PIB mondial',
            paragraphText:
              'Comment mesurer le véritable poids de l’économie numérique dans la richesse mondiale ? Les statistiques internationales distinguent deux périmètres complémentaires.\n' +
              '• **Périmètre restreint (secteur TIC pur)** : représente environ **4,5 % du PIB mondial** (fabrication, télécoms, édition logicielle).\n' +
              '• **Périmètre élargi (TIC + secteurs transformationnels)** : atteint **15,5 % du PIB mondial** en intégrant la valeur créée grâce au numérique dans le commerce, la finance ou l’industrie.\n' +
              '• **Emplois & services** : plus de **5 millions d’emplois** créés sur 2010-2015 et **50 % des exportations mondiales de services** sont désormais numériques.',
            keyRule:
              'TIC purs = 4,5 % du PIB mondial ; économie numérique élargie = 15,5 % du PIB mondial ; services numériques = 50 % des exportations mondiales de services.',
            konanTip:
              'Retiens ces trois pourcentages clés de la CNUCED : 4,5 % (TIC), 15,5 % (élargi) et 50 % (exportations de services). Ils tombent très fréquemment en QCM.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Indicateurs clés de l’économie numérique mondiale (CNUCED)',
              caption: 'Part relative en % des principaux agrégats mondiaux (PIB, services, commerce de détail en ligne).',
              barChart: {
                yLabel: 'Part en %',
                unit: '%',
                bars: [
                  { label: 'TIC purs / PIB', value: 4.5, color: 'blue', annotation: '4,5 %' },
                  { label: 'Éco. num. / PIB', value: 15.5, color: 'violet', annotation: '15,5 %' },
                  { label: 'Détail en ligne pré-COVID', value: 16, color: 'slate', annotation: '16 %' },
                  { label: 'Détail en ligne COVID', value: 19, color: 'green', annotation: '19 %' },
                  { label: 'Services num. / Exports', value: 50, color: 'orange', annotation: '50 %' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Selon les données de la CNUCED, quelle proportion des exportations mondiales de services correspond aux exportations de services numériques ?',
              options: ['4,5 %', '15,5 %', '50 %', '85 %'],
              correctAnswerIndex: 2,
              explanation:
                'La CNUCED estime que 50 % des exportations mondiales de services concernent des services livrés par voie numérique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'E-commerce',
            stepTheme: 'Ventes mondiales',
            stepTitle: 'Essor du e-commerce B2B, B2C et accélération post-COVID',
            paragraphText:
              'Le commerce électronique ne se limite pas aux achats des particuliers : son volume global est tiré avant tout par les échanges interentreprises (B2B).\n' +
              '• **Volume global** : le e-commerce mondial représente environ **26 700 milliards USD en 2019** (+4 % par rapport à 2018), incluant massivement le B2B et le B2C (déjà plus de 1 298 milliards USD dès 2013).\n' +
              '• **Choc de la pandémie COVID-19** : les confinements ont fait bondir la part des ventes au détail en ligne de **16 % à 19 %** du commerce de détail mondial.\n' +
              '• **Exemple** : durant la crise sanitaire, commerçants, restaurants et établissements d’enseignement ivoiriens ont accéléré le passage aux commandes WhatsApp, paiements mobiles et cours en ligne.',
            keyRule:
              'Le e-commerce mondial pèse ~26 700 milliards USD et la crise COVID-19 a fait passer la part du détail en ligne de 16 % à 19 %.',
            konanTip:
              'Ne confonds pas le e-commerce total (~26 700 Md$, dominé par le B2B) avec le seul e-commerce B2C (grand public), qui n’en est qu’une fraction.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle évolution la part des ventes au détail en ligne dans le commerce de détail mondial a-t-elle connue lors de la période COVID-19 ?',
              options: [
                'Elle a chuté de 19 % à 4 %',
                'Elle a progressé de 16 % à 19 %',
                'Elle est restée bloquée à 1 %',
                'Elle a dépassé 95 % du commerce mondial',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les rapports de la CNUCED montrent que la part des ventes au détail en ligne est passée de 16 % à 19 % pendant la pandémie.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Asymétrie Nord-Sud',
            stepTheme: 'Duopole USA-Chine',
            stepTitle: 'Hyper-concentration géopolitique : GAFAM et BATX face à l’Afrique',
            paragraphText:
              'Si Internet est techniquement mondial, la captation économique de la valeur numérique est extrêmement concentrée dans deux pôles géographiques.\n' +
              '• **Pôle américain (GAFAM)** : Google (Alphabet), Apple, Facebook (Meta), Amazon, Microsoft dominent les OS, le cloud mondial, la recherche et les réseaux sociaux.\n' +
              '• **Pôle chinois (BATX)** : Baidu, Alibaba, Tencent, Xiaomi structurent un écosystème numérique souverain de plus d’un milliard d’utilisateurs.\n' +
              '• **Position de l’Afrique** : faible part des datacenters mondiaux et de la R&D en IA, générant une dépendance technologique et une sortie nette de devises vers les plateformes étrangères.',
            keyRule:
              'Les États-Unis (GAFAM) et la Chine (BATX) captent l’écrasante majorité de la capitalisation boursière et des revenus des plateformes mondiales.',
            konanTip:
              'En analyse géopolitique, cite toujours les acronymes complets : GAFAM (USA) et BATX (Chine), et souligne l’enjeu de rattrapage pour l’Europe et l’Afrique.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Que met en évidence l’analyse géographique de l’économie numérique mondiale menée par la CNUCED ?',
              options: [
                'Une répartition parfaitement égalitaire des plateformes entre tous les continents',
                'Une forte concentration de la valeur et des plateformes entre les États-Unis (GAFAM) et la Chine (BATX), accentuant le risque d’asymétrie pour l’Afrique',
                'La disparition totale des géants américains au profit des pays africains',
                'L’interdiction du e-commerce dans les pays de l’OCDE',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CNUCED souligne la polarisation extrême de l’économie des plateformes et des données entre deux puissances, les États-Unis et la Chine, face au reste du monde.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'OCDE vs Émergents',
            stepTheme: 'Fractures d’adoption',
            stepTitle: 'Écarts entre pays de l’OCDE et économies en développement',
            paragraphText:
              'Pourquoi la productivité tirée du numérique progresse-t-elle plus vite dans les pays de l’OCDE que dans de nombreux pays en développement ? Trois goulets d’étranglement l’expliquent.\n' +
              '• **Infrastructure très haut débit** : déploiement massif de la fibre et de la 5G dans l’OCDE contre une connectivité encore inégale entre capitales et zones rurales en Afrique.\n' +
              '• **Numérisation des PME** : usage avancé des ERP, du cloud et du e-commerce dans l’OCDE, alors que de nombreuses TPE africaines restent dans l’informel.\n' +
              '• **Capital humain & financement** : écart d’accès au capital-risque et aux compétences spécialisées (data science, cybersécurité).',
            keyRule:
              'La fracture numérique mondiale n’est pas qu’une question d’accès au smartphone : elle touche le haut débit fixe, l’adoption en PME et les infrastructures cloud.',
            konanTip:
              'Distingue « fracture d’accès » (avoir Internet) et « fracture d’usage » (savoir produire de la valeur économique avec le numérique).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Au-delà de la simple possession d’un téléphone, qu’est-ce qui explique l’écart de performance numérique entre pays de l’OCDE et pays en développement ?',
              options: [
                'L’absence de jeunes diplômés dans les pays en développement',
                'Les écarts d’infrastructures haut débit/cloud, la numérisation inégale des PME et l’accès au financement de l’innovation',
                'Le fait que l’OCDE interdise les téléphones mobiles',
                'La gratuité totale de l’électricité dans les pays émergents',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fracture repose sur des facteurs structurels : infrastructures réseau et cloud, maturité digitale des PME, compétences avancées et financement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Dépendance',
            stepTheme: 'Risques macroéconomiques',
            stepTitle: 'Risque d’importation nette et fuite de valeur numérique',
            paragraphText:
              'Pour un pays africain, se connecter à Internet sans développer d’acteurs locaux peut produire un effet macroéconomique paradoxal sur sa balance des paiements.\n' +
              '• **Importation nette de services** : achats massifs de publicité en ligne (Meta/Google Ads), abonnements SaaS étrangers, licences cloud et commissions de plateformes internationales.\n' +
              '• **Érosion de l’assiette fiscale** : les géants étrangers génèrent du chiffre d’affaires local sans présence physique imposable classique.\n' +
              '• **Exemple** : lorsque 1 000 PME ivoiriennes paient chacune 200 000 FCFA/mois en publicité et logiciels étrangers, ce sont 2,4 milliards FCFA/an qui sortent de l’écosystème local.',
            keyRule:
              'Sans champions locaux ni fiscalité adaptée sur les services numériques transfrontaliers, la digitalisation peut creuser le déficit de la balance des services.',
            konanTip:
              'Ce constat explique pourquoi l’UEMOA et les États africains travaillent sur la taxation des services numériques et l’émergence de clouds souverains.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quel risque macroéconomique court un pays qui numérise sa consommation en recourant exclusivement à des plateformes et clouds étrangers ?',
              options: [
                'Une disparition immédiate de toute connexion Internet',
                'Une fuite de valeur ajoutée, un déficit accru de la balance des services et une perte de recettes fiscales',
                'Une surproduction nationale de microprocesseurs',
                'Une hausse automatique du salaire minimum agricole',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’importation massive de services numériques étrangers (publicité, cloud, SaaS) entraîne des sorties de capitaux et complique la collecte fiscale locale.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Opportunité',
            stepTheme: 'Rattrapage numérique',
            stepTitle: 'Comment l’Afrique peut capter une part croissante de la valeur',
            paragraphText:
              'L’asymétrie actuelle n’est pas une fatalité : le numérique permet aussi des sauts technologiques (« leapfrogging ») dans plusieurs secteurs clés.\n' +
              '• **Fintech & Mobile Money** : l’Afrique de l’Ouest est déjà pionnière mondiale dans les paiements mobiles accessibles sans compte bancaire classique.\n' +
              '• **Externalisation & talents** : grâce à la démographie jeune et francophone/anglophone, les services B2B (développement, support, data annotation) sont exportables à coût marginal faible.\n' +
              '• **Adaptation hyper-locale** : logistique du dernier kilomètre, langues locales et agritech donnent un avantage aux start-ups ancrées dans les réalités du terrain.',
            keyRule:
              'Le levier de rattrapage africain repose sur l’innovation d’usage locale (Mobile Money, agritech) et la montée en compétences exportables.',
            konanTip:
              'Le terme « leapfrogging » (saut de grenouille) désigne le fait de passer directement à la technologie mobile moderne sans avoir eu à généraliser la ligne fixe ou la carte bancaire.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Que désigne le phénomène de « leapfrogging » (saut technologique) illustré par le Mobile Money en Afrique ?',
              options: [
                'Le retour volontaire aux échanges par troc rural',
                'L’adoption directe de solutions numériques mobiles modernes en sautant des infrastructures traditionnelles peu déployées (téléphonie fixe, réseau bancaire dense)',
                'L’obligation de construire une usine de semi-conducteurs dans chaque commune',
                'Le blocage des applications étrangères aux frontières',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le leapfrogging permet à une économie d’adopter directement une innovation mobile de pointe sans passer par les étapes intermédiaires coûteuses (réseau filaire, agences bancaires partout).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch2_p2',
        order: 2,
        title: 'Les données comme facteur de production et l’économie de l’attention',
        summary:
          'Distinguer donnée, information et connaissance, analyser la donnée comme capital immatériel non-rival et comprendre l’économie de l’attention d’Herbert Simon.',
        conceptExplanation:
          'Dans l’économie traditionnelle, les facteurs de production classiques sont le travail et le capital physique. L’économie numérique y ajoute un intrant décisif : **les données (data)**.\n\n' +
          'Une donnée brute (un clic, une position GPS, un montant de transaction) devient une **information** lorsqu’elle est contextualisée, puis une **connaissance actionnable** lorsqu’elle permet d’entraîner un algorithme de prédiction ou d’optimiser une décision. Contrairement au pétrole — ressource rivale qui disparaît lorsqu’on la brûle —, la donnée est un actif **non-rival et réutilisable** dont la valeur augmente par croisement et agrégation.\n\n' +
          'Parallèlement, l’abondance gratuite de contenus et d’informations crée une nouvelle rareté mise en évidence par **Herbert Simon (1971)** : l’**attention humaine**. Comme une journée ne compte que 24 heures, les plateformes se livrent une concurrence féroce pour capter notre temps de cerveau disponible afin de collecter davantage de données et de vendre du ciblage publicitaire ou des abonnements.',
        keyRule:
          'Lorsque l’information devient abondante et quasi gratuite, la ressource rare devient l’attention humaine (Herbert Simon), et les données deviennent un facteur de production stratégique.',
        formulas: [
          {
            name: 'Pyramide de la valeur de la donnée (DIKW)',
            formula: '\\text{Données brutes} \\longrightarrow \\text{Information structurée} \\longrightarrow \\text{Connaissance / Prédiction} \\longrightarrow \\text{Valeur économique}',
            note: 'La valeur économique ne réside pas dans le stockage brut mais dans l’analyse et la capacité prédictive.',
          },
          {
            name: 'Principe d’Herbert Simon (1971)',
            formula: '\\text{Richesse d’information} \\;\\Longrightarrow\\; \\text{Pauvreté d’attention}',
            note: 'L’attention humaine limitée devient le goulot d’étranglement et le bien le plus disputé des plateformes.',
          },
        ],
        workedExample: {
          title: 'Transformer des traces de paiement mobile en actif productif',
          statement:
            'Un opérateur de Mobile Money enregistre chaque jour 2 millions de micro-transactions (recharges, paiements de factures, transferts). Expliquez comment ces données brutes deviennent un facteur de production générateur de nouveaux services.',
          methodSteps: [
            'Données brutes : horodatage, montant et fréquence des transactions individuelles (sans valeur directe isolément).',
            'Information structurée : calcul de la régularité des flux mensuels d’un commerçant sur 6 mois.',
            'Connaissance / Modèle de scoring : un algorithme évalue la solvabilité réelle d’un vendeur pourtant dépourvu de fiche de paie ou de compte bancaire.',
            'Valeur économique : octroi de micro-crédits instantanés à faible taux de défaut, créant une nouvelle source de revenus.',
          ],
          conclusion:
            'La donnée réutilisée en continu génère un avantage concurrentiel cumulatif (« data network effect »).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Donnée → Savoir',
            stepTheme: 'Chaîne DIKW',
            stepTitle: 'De la donnée brute à la connaissance actionnable',
            paragraphText:
              'On entend souvent dire que « la donnée est le nouveau pétrole », mais la comparaison est trompeuse : le pétrole brûle une seule fois, la donnée s’enrichit par l’usage.\n' +
              '• **Donnée brute** : fait élémentaire non interprété (ex. « 14:03 — clic sur fiche smartphone — 120 000 FCFA »).\n' +
              '• **Information** : donnée organisée dans un contexte (ex. « hausse de 35 % des recherches de smartphones entre 12h et 15h à Abidjan »).\n' +
              '• **Connaissance** : règle ou modèle prédictif permettant d’ajuster les stocks, les prix ou la recommandation en temps réel.',
            keyRule:
              'Une donnée brute n’a de valeur économique qu’une fois nettoyée, croisée et transformée en information puis en décision.',
            konanTip:
              'Ne confonds pas « Big Data » (volume, vélocité, variété de données brutes) et « Smart Data » (données qualifiées réellement utiles à la décision).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'En quoi la comparaison entre les données numériques et le pétrole comporte-t-elle une limite économique majeure ?',
              options: [
                'Le pétrole ne nécessite aucune infrastructure de transport',
                'Contrairement au pétrole qui est rival et détruit par la consommation, la donnée est non-rivale et réutilisable simultanément pour de multiples usages',
                'Les données numériques perdent toute valeur dès qu’on les analyse',
                'Les données ne peuvent être utilisées que par les administrations publiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un baril de pétrole consommé disparaît (bien rival), alors qu’un même jeu de données peut nourrir simultanément l’amélioration produit, la logistique et le marketing sans s’épuiser.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Facteur productif',
            stepTheme: 'Data Network Effects',
            stepTitle: 'Les données comme facteur de production et boucle d’apprentissage',
            paragraphText:
              'En économie numérique, les données ne sont pas seulement un sous-produit de l’activité : elles deviennent un intrant central au même titre que le capital et le travail.\n' +
              '• **Boucle d’apprentissage algorithmique** : plus d’utilisateurs génèrent plus de données → l’algorithme devient plus pertinent → le service attire encore plus d’utilisateurs.\n' +
              '• **Réduction des coûts et risques** : prévision de la demande, détection des fraudes en temps réel, maintenance prédictive.\n' +
              '• **Exemple** : plus les passagers et chauffeurs utilisent une application VTC à Abidjan, plus l’algorithme estime précisément les temps de trajet aux heures de pointe sur les ponts.',
            keyRule:
              'Les données créent un effet d’apprentissage cumulatif : le leader accumule davantage d’observations et creuse l’écart de qualité avec ses concurrents.',
            konanTip:
              'On parle d’« effet de réseau indirect lié aux données » (data network effect) : chaque utilisateur améliore l’intelligence du produit pour tous les autres.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Quel mécanisme décrit l’effet d’apprentissage lié aux données (« data network effect ») sur une plateforme numérique ?',
              options: [
                'Plus la plateforme a de données d’usage, plus ses algorithmes s’améliorent, attirant de nouveaux utilisateurs qui produisent encore plus de données',
                'Plus il y a d’utilisateurs, plus les serveurs effacent les données anciennes',
                'La qualité du service baisse dès que les données sont analysées',
                'Les concurrents reçoivent automatiquement une copie des algorithmes du leader',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’accumulation de données d’usage permet d’affiner la pertinence algorithmique (recherche, recommandation, tarification), ce qui renforce l’attractivité du service.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Attention',
            stepTheme: 'Rareté cognitive',
            stepTitle: 'L’économie de l’attention selon Herbert Simon',
            paragraphText:
              'Lorsque des milliards de vidéos, d’articles et de messages sont accessibles gratuitement en un clic, qu’est-ce qui reste véritablement rare au sens de Lionel Robbins ?\n' +
              '• **Rareté de l’attention** : dès 1971, le prix Nobel Herbert Simon notait qu’« une richesse d’information crée une pauvreté d’attention ».\n' +
              '• **Budget temps inélastique** : aucun individu ne peut consommer plus de 24 heures d’information par jour ; l’attention humaine est un bien strictement limité.\n' +
              '• **Exemple** : YouTube, TikTok, Instagram et la télévision ne se concurrencent pas uniquement sur le prix (souvent nul), mais sur chaque minute du temps libre des utilisateurs.',
            keyRule:
              'Dans l’économie numérique gratuite, la monnaie d’échange implicite payée par l’utilisateur est son attention et ses données personnelles.',
            konanTip:
              'Si un service numérique est totalement gratuit sans être un commun/don, pose-toi la question : « Comment mon attention et mes données financent-elles ce service ? ».',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Selon l’analyse d’Herbert Simon (1971), quelle ressource devient rare dans une économie caractérisée par une abondance quasi illimitée d’informations ?',
              options: [
                'La capacité à dupliquer un fichier texte',
                'L’attention humaine disponible pour traiter cette information',
                'Le nombre de caractères dans l’alphabet',
                'La quantité d’informations publiées en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Face à la surabondance informationnelle, la capacité cognitive et le temps d’attention des individus constituent la ressource rare que les acteurs cherchent à capter.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Monétisation',
            stepTheme: 'Captologie & Ciblage',
            stepTitle: 'Comment l’attention captée est transformée en revenus',
            paragraphText:
              'Capter l’attention n’est que la première étape ; encore faut-il la convertir en flux financiers durables pour financer les infrastructures et générer du profit.\n' +
              '• **Design persuasif (captologie)** : défilement infini (infinite scroll), lecture automatique, notifications ciblées maximisent le temps passé sur la plateforme.\n' +
              '• **Ciblage comportemental** : l’historique de visionnage et d’interactions permet de segmenter finement les audiences et de vendre des espaces publicitaires à fort taux de conversion.\n' +
              '• **Conversion vers le payant** : une attention élevée augmente aussi la probabilité qu’un utilisateur achète un produit recommandé ou passe à un abonnement sans publicité.',
            keyRule:
              'Le modèle attentionnel repose sur une chaîne précise : Interface addictive → Temps d’attention → Données comportementales → Ciblage ou conversion marchande.',
            konanTip:
              'Retiens le double rôle de l’attention : elle augmente le volume d’impressions publicitaires affichables ET elle enrichit la précision du profilage.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Pourquoi les plateformes financées par la publicité utilisent-elles des mécanismes comme le défilement infini et les notifications push ?',
              options: [
                'Pour réduire volontairement la durée d’utilisation de leurs applications',
                'Pour maximiser le temps d’attention capté, multiplier les impressions publicitaires et collecter davantage de signaux de ciblage',
                'Pour supprimer totalement la collecte de données utilisateur',
                'Pour rendre le service exclusivement payant dès le premier clic',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Maximiser le temps passé sur l’application augmente à la fois le nombre de publicités affichées et la qualité des données comportementales vendues aux annonceurs.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Risques & Éthique',
            stepTheme: 'Asymétrie & Biais',
            stepTitle: 'Dérives éthiques : vie privée, biais et asymétrie d’information',
            paragraphText:
              'L’exploitation intensive des données et de l’attention soulève des problématiques économiques et sociales majeures.\n' +
              '• **Asymétrie d’information** : la plateforme connaît précisément les habitudes et la disposition à payer du client, alors que ce dernier ignore comment ses données sont vendues ou utilisées.\n' +
              '• **Biais algorithmiques et bulles de filtre** : les algorithmes optimisant l’engagement favorisent souvent les contenus polarisants ou reproduisent des discriminations présentes dans les données historiques.\n' +
              '• **Atteinte à la vie privée** : collecte opaque, revente à des courtiers en données (data brokers) et risque de fuite ou de cyberattaque.',
            keyRule:
              'L’asymétrie d’information entre la plateforme (qui sait tout des usages) et l’utilisateur (qui ignore l’usage réel de ses traces) appelle une régulation publique.',
            konanTip:
              'Attention au piège : un algorithme n’est pas neutre par nature ; s’il est entraîné sur des données biaisées ou optimisé pour l’émotion forte, il amplifie ces biais.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'En économie des plateformes, que caractérise l’asymétrie d’information liée aux données personnelles ?',
              options: [
                'L’utilisateur connaît le code source complet de la plateforme mais pas son propre nom',
                'La plateforme détient une connaissance fine des comportements et préférences des usagers, qui ignorent souvent l’ampleur réelle de la collecte et de l’exploitation',
                'Les annonceurs n’ont jamais accès aux résultats de leurs campagnes',
                'Tous les utilisateurs reçoivent exactement le même prix et le même contenu',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’asymétrie d’information vient du déséquilibre massif entre les capacités d’observation et de profilage de la plateforme et la faible visibilité de l’utilisateur.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Régulation',
            stepTheme: 'Souveraineté des données',
            stepTitle: 'Protection des données, consentement et souveraineté numérique',
            paragraphText:
              'Pour rééquilibrer le rapport de force entre géants des données et citoyens/États, des cadres juridiques spécifiques encadrent désormais la circulation des données.\n' +
              '• **Droits des personnes** : consentement éclairé, finalité limitée de la collecte, droit d’accès, de rectification, d’effacement et de portabilité des données.\n' +
              '• **Cadre africain et ivoirien** : lois nationales sur la protection des données à caractère personnel (en Côte d’Ivoire sous la supervision de l’ARTCI) et principes comparables au RGPD européen.\n' +
              '• **Souveraineté** : contrôle de la localisation et du traitement des données stratégiques nationales (santé, fiscalité, identité biométrique).',
            keyRule:
              'La régulation des données vise à concilier innovation économique (circulation utile de la donnée) et protection des droits fondamentaux et de la souveraineté.',
            konanTip:
              'En Côte d’Ivoire, l’ARTCI (Autorité de Régulation des Télécommunications/TIC) joue également le rôle d’autorité de protection des données personnelles.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quel principe permet à un utilisateur de récupérer l’historique de ses données auprès d’une plateforme pour les transférer vers un service concurrent ?',
              options: [
                'La non-rivalité tarifaire',
                'Le droit à la portabilité des données',
                'La loi de Moore',
                'Le subventionnement croisé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le droit à la portabilité permet à l’usager de récupérer ses données dans un format structuré et lisible afin de réduire son enfermement (lock-in) sur une plateforme.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch2_p3',
        order: 3,
        title: 'Chaîne de valeur numérique (Porter) et captation de la valeur',
        summary:
          'Appliquer la chaîne de valeur de Michael Porter (1985) à l’économie numérique, analyser le cas Apple (courbe du sourire) et identifier les maillons à forte marge.',
        conceptExplanation:
          'Développée par **Michael Porter (1985)**, la **chaîne de valeur** décompose l’entreprise en activités stratégiques (activités principales : logistique, production, commercialisation, services ; et activités de soutien : infrastructure, RH, R&D, achats) afin d’identifier comment chaque étape contribue à la valeur perçue par le client et à la **marge** dégagée.\n\n' +
          'Un modèle économique intègre directement cette création de valeur. L’étude du modèle **Apple** illustre parfaitement la captation asymétrique de la valeur dans le numérique : Apple **conserve en interne** les maillons intensifs en connaissances et à **forte valeur ajoutée** (R&D, design, système d’exploitation iOS, marketing, analyse des données et services numériques à très forte marge comme iCloud ou Apple Music), tout en **sous-traitant / délocalisant** l’assemblage matériel à faible marge.\n\n' +
          'À l’échelle mondiale, cette logique dessine la « courbe du sourire » (Smiling Curve) : les marges les plus élevées se situent en amont (R&D, logiciels, propriété intellectuelle) et en aval (marque, distribution digitale, services cloud), et non dans l’assemblage physique.',
        keyRule:
          'Selon Porter (1985), l’avantage concurrentiel naît de la capacité à concentrer ses ressources sur les maillons de la chaîne de valeur générant le plus de satisfaction client et de marge.',
        formulas: [
          {
            name: 'Valeur et Marge chez Porter (1985)',
            formula: '\\text{Marge} = \\text{Valeur perçue par le client (Prix accepté)} - \\text{Coût cumulé des activités de la chaîne}',
            note: 'Les firmes numériques maximisent cette marge en externalisant les tâches à faible marge et en gardant les actifs immatériels.',
          },
        ],
        workedExample: {
          title: 'Décomposer la captation de valeur sur un smartphone vendu 600 000 FCFA',
          statement:
            'Un smartphone haut de gamme vendu 600 000 FCFA est conçu aux États-Unis (R&D, OS, design), assemblé en Asie pour un coût d’assemblage de 15 000 FCFA par appareil, puis génère 80 000 FCFA/an d’abonnements cloud et applications. Où la valeur est-elle captée ?',
          methodSteps: [
            'Maillon assemblage physique : activité standardisée à faible marge (~15 000 FCFA de valeur d’assemblage), externalisée auprès de sous-traitants.',
            'Maillon conception & marque (amont) : R&D, puces propres, OS et design protégés par brevets et image de marque captent la majorité de la marge sur le matériel.',
            'Maillon services post-vente (aval) : iCloud, App Store et streaming génèrent des revenus récurrents à coût marginal quasi nul.',
          ],
          conclusion:
            'La maîtrise du logiciel, de la connaissance et de la relation client finale prime largement sur la fabrication matérielle.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Porter (1985)',
            stepTheme: 'Chaîne de valeur',
            stepTitle: 'Généralités sur la chaîne de valeur et avantage concurrentiel',
            paragraphText:
              'Pourquoi deux entreprises vendant un produit similaire n’ont-elles pas la même rentabilité ? Michael Porter (1985) propose d’ouvrir la boîte noire de l’entreprise grâce à la chaîne de valeur.\n' +
              '• **Principe** : l’entreprise est un enchaînement d’activités qui augmentent progressivement l’utilité et l’attrait du produit pour le client.\n' +
              '• **Objectif** : chaque étape doit contribuer directement ou indirectement à la création de valeur et forger un **avantage concurrentiel** (soit par différenciation, soit par maîtrise des coûts).\n' +
              '• **Lien au modèle économique** : le modèle économique représente la façon dont l’entreprise devient viable en captant une part de la valeur créée sur cette chaîne.',
            keyRule:
              'La valeur d’un produit se mesure par la satisfaction du client et sa démarcation face aux concurrents ; chaque maillon doit créer plus de valeur qu’il ne coûte.',
            konanTip:
              'Retiens l’auteur et l’année : Michael Porter (1985). Distingue bien « activités principales » (cœur métier) et « activités de soutien » (R&D, RH, SI).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Selon Michael Porter (1985), quel est l’objectif fondamental de l’analyse par la chaîne de valeur ?',
              options: [
                'Supprimer toute activité de recherche et développement',
                'Identifier comment chaque activité contribue à l’utilité client et à la marge afin de bâtir un avantage concurrentiel durable',
                'Nationaliser les sous-traitants étrangers',
                'Imposer le même prix à tous les concurrents du secteur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La chaîne de valeur de Porter décompose les activités de l’entreprise pour repérer celles qui créent le plus de valeur client et de différenciation à moindre coût.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Étude de cas',
            stepTheme: 'Modèle Apple',
            stepTitle: 'Le modèle Apple : conserver la connaissance et les fortes marges',
            paragraphText:
              'Apple offre l’illustration la plus célèbre de pilotage stratégique de la chaîne de valeur à l’ère numérique.\n' +
              '• **Ce qu’Apple conserve en interne** : les activités à **haut niveau de connaissance**, à **forte valeur ajoutée** et à **fortes marges** — R&D, architecture des puces, design, système d’exploitation, marketing et analyse des données.\n' +
              '• **Ce qu’Apple sous-traite/délocalise** : l’assemblage industriel et les tâches manufacturières répétitives à faible marge.\n' +
              '• **Services à marge élevée** : prolongation du matériel par des services numériques récurrents (iCloud, Apple Music, App Store) qui accroissent la marge globale.',
            keyRule:
              'Stratégie Apple : externaliser les maillons manufacturiers à faible marge et verrouiller en interne la R&D, le design, le logiciel, la marque et les services récurrents.',
            konanTip:
              'Dans un devoir sur Apple, cite les trois verbes d’action : CONSERVER (connaissance/R&D/marketing), SOUS-TRAITER (assemblage), PROLONGER (services cloud/musique à forte marge).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Dans la chaîne de valeur d’Apple, pourquoi l’entreprise sous-traite-t-elle l’assemblage physique tout en gardant la R&D, le design, le marketing et iCloud ?',
              options: [
                'Parce que l’assemblage est l’activité la plus rentable au monde',
                'Parce qu’elle concentre ses ressources sur les maillons intensifs en connaissances qui génèrent les marges les plus élevées',
                'Parce qu’elle n’a pas le droit de posséder des brevets logiciels',
                'Parce qu’elle vend ses smartphones à perte pour ne faire que de la publicité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Apple externalise les tâches manufacturières à faible valeur ajoutée et conserve les actifs immatériels (R&D, design, OS, données, services) à très haute marge.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Courbe du sourire',
            stepTheme: 'Répartition des marges',
            stepTitle: 'La « courbe du sourire » (Smiling Curve) dans le numérique',
            paragraphText:
              'Pourquoi l’assemblage rapporte-t-il si peu face au logiciel et à la distribution digitale ? Le phénomène est visualisé par la courbe du sourire de la valeur ajoutée.\n' +
              '• **Amont (gauche de la courbe)** : R&D, brevets, architecture logicielle, design conceptuel — marges très élevées.\n' +
              '• **Milieu (creux de la courbe)** : fabrication standardisée et assemblage physique — forte concurrence mondiale par les coûts, marges faibles.\n' +
              '• **Aval (droite de la courbe)** : marque, distribution directe, relation client, maintenance et services cloud/data — marges à nouveau très élevées.',
            keyRule:
              'La « courbe du sourire » montre que dans les filières mondialisées, la valeur ajoutée se concentre aux deux extrémités immatérielles (conception en amont, services/marque en aval).',
            konanTip:
              'Visualise un « U » ou un sourire : haut à gauche (R&D/Code), bas au centre (Assemblage), haut à droite (Marque/Services/Data).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Selon la logique de la « courbe du sourire » dans les industries numériques, quels maillons dégagent les marges les plus faibles ?',
              options: [
                'La R&D et la propriété intellectuelle en amont',
                'La fabrication standardisée et l’assemblage physique au milieu de la chaîne',
                'Le marketing de marque et la relation client en aval',
                'Les services cloud et abonnements logiciels post-vente',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assemblage matériel standardisé subit une concurrence intense par les prix et se situe au creux de la courbe, tandis que l’amont (R&D) et l’aval (services/marque) captent les marges.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Modularité',
            stepTheme: 'Chaîne ouverte',
            stepTitle: 'Des chaînes verticales fermées aux écosystèmes modulaires',
            paragraphText:
              'Le numérique ne fait pas qu’optimiser la chaîne de valeur interne d’une entreprise : il transforme l’architecture même des filières industrielles.\n' +
              '• **Chaîne verticale traditionnelle** : une entreprise intègre la majorité des étapes de la matière première au client final.\n' +
              '• **Écosystème modulaire via API et standards** : chaque bloc (paiement, hébergement cloud, cartographie, authentification, logistique) peut être fourni par un spécialiste externe connecté via API.\n' +
              '• **Exemple** : une start-up ivoirienne d’e-commerce peut démarrer en quelques semaines en branchant AWS/OVH (hébergement), Wave/Orange Money (paiement) et Google Maps (géolocalisation).',
            keyRule:
              'La modularité numérique (cloud + API) abaisse considérablement le capital initial requis pour lancer une entreprise sur un maillon précis.',
            konanTip:
              'Retiens le mot « API » (Interface de Programmation) : c’est la colle technique qui permet d’assembler des maillons de valeur externes en un temps record.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Comment les API et le cloud computing transforment-ils la chaîne de valeur d’une jeune entreprise numérique ?',
              options: [
                'Ils l’obligent à construire ses propres centrales électriques et réseaux de fibre',
                'Ils permettent d’assembler rapidement des briques spécialisées externes (paiement, hébergement, cartographie) sans tout développer en interne',
                'Ils interdisent toute collaboration entre entreprises',
                'Ils suppriment totalement le besoin de proposition de valeur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les API et services cloud permettent une chaîne de valeur modulaire : la start-up se concentre sur son cœur de différenciation et intègre des partenaires spécialisés.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Captation',
            stepTheme: 'Pouvoir de négociation',
            stepTitle: 'Créer de la valeur vs Capter la valeur : le piège des intermédiaires',
            paragraphText:
              'Attention à une erreur fréquente d’analyse stratégique : créer beaucoup de valeur pour les utilisateurs ne garantit pas que votre entreprise va capter cette valeur en profits !\n' +
              '• **Création de valeur** : utilité totale apportée au marché (ex. un blog d’information agricole très utile).\n' +
              '• **Captation de valeur** : part de cette utilité transformée en marge nette durable pour l’entreprise (dépend du pouvoir de négociation, des barrières à l’entrée et du contrôle de l’accès client).\n' +
              '• **Exemple** : un restaurateur d’Abidjan crée la valeur culinaire, mais s’il dépend d’une application de livraison prenant 25 % de commission et contrôlant les coordonnées clients, la plateforme capte une large part de la marge.',
            keyRule:
              'Créer de la valeur est nécessaire, mais seul le contrôle d’un actif rare (marque, base clients, donnée propriétaire, technologie clé) permet de la capter durablement.',
            konanTip:
              'Pose-toi toujours cette double question devant un business model : « Qui crée l’utilité ? » et « Qui contrôle la relation finale avec le payeur ? ».',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Pourquoi une entreprise qui crée une grande utilité pour les consommateurs peut-elle malgré tout dégager de faibles profits ?',
              options: [
                'Parce que la création de valeur garantit toujours 100 % de marge',
                'Parce que la captation de valeur peut être détournée par un acteur contrôlant le goulot d’étranglement (plateforme, distribution, standard technique) ou par une concurrence pure sur les prix',
                'Parce que les clients refusent systématiquement les services numériques utiles',
                'Parce que le coût marginal nul empêche toute facturation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Créer de la valeur (utilité) et capter de la valeur (profit) sont deux mécanismes distincts ; le pouvoir de captation dépend du contrôle de la relation client et des actifs stratégiques.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Stratégie locale',
            stepTheme: 'Montée en gamme',
            stepTitle: 'Enjeux de montée en gamme dans la chaîne de valeur en Côte d’Ivoire',
            paragraphText:
              'Comment les entreprises et talents de Côte d’Ivoire peuvent-ils appliquer les enseignements de Porter et de la courbe du sourire à leur propre développement ?\n' +
              '• **Sortir de la simple revente matérielle** : l’import-revente de téléphones ou ordinateurs dégage des marges comprimées par la concurrence.\n' +
              '• **Monter vers le logiciel, le conseil et la donnée** : développement d’applications métiers adaptées à l’UEMOA, cybersécurité, intégration cloud et agritech.\n' +
              '• **Maîtriser l’aval local** : bâtir des marques de confiance, des réseaux logistiques fiables et des systèmes de paiement intégrés.',
            keyRule:
              'Pour maximiser la valeur retenue localement, il faut passer de la simple distribution matérielle à l’édition logicielle, à l’intégration de services et à la maîtrise des données locales.',
            konanTip:
              'Sur un marché émergent, l’adaptation aux contraintes locales (paiement fractionné, Mobile Money, faible bande passante) constitue un véritable actif immatériel difficile à copier.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Conformément à la logique de la chaîne de valeur numérique, quelle orientation permet à une entreprise TIC ivoirienne d’améliorer durablement ses marges ?',
              options: [
                'Se limiter uniquement à la revente brute de matériel importé sans service associé',
                'Développer des services logiciels à forte valeur ajoutée, maîtriser la relation client locale et valoriser des solutions adaptées aux besoins régionaux',
                'Augmenter ses coûts fixes sans aucune différenciation produit',
                'Supprimer toute activité de support client et de marketing',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les services logiciels, l’intégration, la marque et la relation client locale se situent sur les segments les plus rémunérateurs de la chaîne de valeur.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : MODÈLES D’AFFAIRES NUMÉRIQUES ET PLATEFORMES BIFACES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch3',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Modèles d’affaires numériques et plateformes bifaces',
    summary:
      'Maîtriser le fonctionnement des plateformes bifaces, les effets de réseau directs et croisés, la masse critique, le subventionnement croisé, les principaux modèles de monétisation (commission, freemium, SaaS, publicité, appât, rachat) et le triptyque PMF – Traction – Pivot.',
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction à l’Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 3.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch3_p1',
        order: 1,
        title: 'Plateformes bifaces, désintermédiation et effets de réseau croisés',
        summary:
          'Comprendre les marchés bifaces (B2C, C2C, G2C), la désintermédiation algorithmique, les effets de réseau directs et indirects, la masse critique et le subventionnement croisé.',
        conceptExplanation:
          'Une **plateforme biface** (ou marché à deux versants) est une infrastructure économique et technique qui met directement en relation **au moins deux groupes d’utilisateurs distincts et interdépendants** (acheteurs et vendeurs, passagers et chauffeurs, lecteurs et annonceurs) selon deux logiques tarifaires différenciées.\n\n' +
          'Elle opère une **désintermédiation** des circuits traditionnels (B2C, C2C, G2C) tout en devenant un intermédiaire algorithmique central. Sa croissance est tirée par deux types d’**effets de réseau** : les **effets directs** (plus il y a d’utilisateurs d’un même groupe, plus chacun en retire d’utilité, ex. messagerie) et les **effets croisés / indirects** (plus il y a d’acheteurs d’un côté, plus les vendeurs affluent de l’autre, et réciproquement).\n\n' +
          'Pour surmonter le problème de l’œuf et de la poule et atteindre la **masse critique**, les plateformes pratiquent le **subventionnement croisé** : l’un des versants (le plus sensible au prix, souvent les consommateurs) bénéficie d’un accès gratuit ou subventionné, financé par l’autre versant (vendeurs, entreprises, annonceurs).',
        keyRule:
          'Un marché biface réunit deux faces interdépendantes reliées par des effets de réseau croisés et deux politiques de prix distinctes (face subventionnée vs face payante).',
        formulas: [
          {
            name: 'Condition d’équilibre d’un marché biface',
            formula: '\\text{Subvention (Face A : Prix } \\approx 0\\text{)} \\;\\Longrightarrow\\; \\text{Masse critique A} \\;\\Longrightarrow\\; \\text{Monétisation (Face B : Prix } > 0\\text{)}',
            note: 'La structure des prix (qui paie et combien) compte autant que le niveau moyen du prix.',
          },
        ],
        workedExample: {
          title: 'Concevoir la tarification d’une marketplace agricole en Côte d’Ivoire',
          statement:
            'Une start-up lance une plateforme reliant les coopératives de producteurs de vivriers (Face A) et les restaurants/supermarchés d’Abidjan (Face B). Au lancement, aucun restaurateur ne veut payer d’abonnement car il y a peu de produits, et peu de coopératives s’inscrivent car il y a peu d’acheteurs. Quelle stratégie appliquer ?',
          methodSteps: [
            'Diagnostic : blocage classique de « l’œuf et de la poule » avant d’atteindre la masse critique sur un marché biface.',
            'Subventionnement croisé : offrir l’inscription gratuite et un accompagnement terrain aux coopératives (Face A) pour constituer rapidement un catalogue abondant.',
            'Activation des effets de réseau croisés : la variété du catalogue attire les restaurateurs (Face B), qui paient une commission modérée sur chaque livraison réussie.',
            'Atteinte de la masse critique : au-delà d’un seuil de volume quotidien, la liquidité s’auto-entretient et les coûts d’acquisition chutent.',
          ],
          conclusion:
            'Le subventionnement temporaire ou permanent d’une face débloque l’effet de réseau croisé et stabilise le marché biface.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Marché biface',
            stepTheme: 'Deux versants',
            stepTitle: 'Définition d’un modèle biface : cibles interdépendantes et prix asymétriques',
            paragraphText:
              'Contrairement à une boutique classique qui achète un stock pour le revendre à un seul type de client, une plateforme biface orchestre deux marchés à la fois.\n' +
              '• **Deux faces interdépendantes** : deux groupes distincts qui ont besoin l’un de l’autre (ex. passagers et chauffeurs VTC, candidats et recruteurs, acheteurs et marchands).\n' +
              '• **Deux logiques de tarification** : il est optimal de facturer peu (voire zéro) à la face qui attire le plus l’autre, et de monétiser la face qui tire le plus de profit de cette rencontre.\n' +
              '• **Exemple** : les plateformes de réservation de restaurants sont gratuites pour les convives mais facturent une commission par couvert réservé aux restaurateurs.',
            keyRule:
              'Trois critères définissent le modèle biface : au moins deux cibles distinctes, une interdépendance mutuelle et deux logiques de tarification séparées.',
            konanTip:
              'Pour vérifier si un business est biface, demande-toi : « Si l’un des deux groupes quitte le service, l’autre perd-il immédiatement son intérêt à rester ? ».',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelles sont les caractéristiques structurelles d’un modèle économique biface ?',
              options: [
                'Un seul segment client et un prix unique fixé par l’État',
                'Au moins deux cibles différentes et interdépendantes soumises à deux logiques distinctes de tarification',
                'Une entreprise qui fabrique en interne 100 % des biens vendus sans aucun partenaire',
                'Une activité exclusivement non marchande financée par l’impôt',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un marché biface connecte au moins deux groupes d’acteurs distincts et interdépendants grâce à des tarifs asymétriques adaptés à chaque versant.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Désintermédiation',
            stepTheme: 'B2C, C2C, G2C',
            stepTitle: 'Désintermédiation traditionnelle et réintermédiation numérique (B2C, C2C, G2C)',
            paragraphText:
              'Le déploiement des plateformes bouleverse les chaînes commerciales classiques en supprimant certains maillons physiques coûteux.\n' +
              '• **Désintermédiation** : suppression d’intermédiaires traditionnels (agences de voyages physiques, grossistes locaux, courtiers papier) grâce à la mise en relation directe en ligne.\n' +
              '• **Nouveaux flux d’échange** : **B2C** (entreprises vers consommateurs), **C2C** (particuliers vers particuliers, ex. vente d’occasion ou covoiturage) et **G2C** (administrations vers citoyens, ex. e-impôts).\n' +
              '• **Exemple** : deux particuliers à Abidjan échangent un ordinateur d’occasion sur une place de marché C2C sans passer par un magasin physique.',
            keyRule:
              'Les plateformes suppriment les intermédiaires physiques traditionnels (désintermédiation) mais deviennent elles-mêmes le nouvel intermédiaire numérique central (réintermédiation).',
            konanTip:
              'Maîtrise les sigles d’examen : B2C (Business to Consumer), C2C (Consumer to Consumer), B2B (Business to Business) et G2C (Government to Citizen).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'À quel modèle d’échange correspond une plateforme permettant à des particuliers de louer directement leurs logements ou véhicules à d’autres particuliers ?',
              options: [
                'Un échange B2B (Business to Business)',
                'Un échange C2C (Consumer to Consumer)',
                'Un échange G2G (Government to Government)',
                'Une production industrielle lourde',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le C2C (Consumer to Consumer) désigne les échanges directs entre consommateurs facilités par une plateforme numérique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Réseaux directs',
            stepTheme: 'Même face',
            stepTitle: 'Effets de réseau directs et force d’entraînement',
            paragraphText:
              'Pourquoi presque tout le monde utilise-t-il les mêmes applications de messagerie dans un pays donné ? À cause des effets de réseau directs.\n' +
              '• **Définition** : l’utilité qu’un utilisateur retire d’un service augmente directement avec le nombre d’autres utilisateurs **du même groupe**.\n' +
              '• **Mécanisme** : conformément à la loi de Metcalfe, chaque nouvel inscrit apporte de nouvelles possibilités d’interaction à tous les inscrits existants.\n' +
              '• **Exemple** : sur WhatsApp ou Wave en Côte d’Ivoire, si 90 % de vos contacts utilisent déjà l’application, votre incitation à l’adopter devient quasi irrésistible.',
            keyRule:
              'Effet de réseau direct (intra-groupe) : l’utilité pour un utilisateur croît avec le nombre d’utilisateurs appartenant au même versant.',
            konanTip:
              'Retiens le contraste : messagerie ou téléphone = effet DIRECT (même groupe) ; marketplace ou Uber = effet CROISÉ (d’un groupe vers l’autre).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces services illustre le mieux un « effet de réseau direct » ?',
              options: [
                'Une application de prise de notes strictement personnelle hors ligne',
                'Une messagerie instantanée dont l’utilité augmente à mesure que vos proches et collègues l’utilisent aussi',
                'Une usine de fabrication de câbles électriques',
                'Un livre papier lu seul chez soi',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans une messagerie instantanée, chaque nouvel utilisateur augmente directement l’utilité du réseau pour tous les autres utilisateurs du même groupe.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Réseaux croisés',
            stepTheme: 'Boucle de rétroaction',
            stepTitle: 'Effets de réseau croisés (indirects) entre acheteurs et vendeurs',
            paragraphText:
              'Sur une place de marché ou une application VTC, un vendeur ne veut pas voir d’autres vendeurs concurrents : il veut voir des acheteurs ! C’est l’effet de réseau croisé.\n' +
              '• **Définition** : la valeur perçue par un groupe (Face A) dépend du nombre et de la qualité des acteurs présents sur l’autre groupe (Face B).\n' +
              '• **Boucle vertueuse** : plus de vendeurs offrent plus de choix et de meilleurs prix → davantage d’acheteurs rejoignent la plateforme → la hausse du volume de commandes attire encore plus de vendeurs.\n' +
              '• **Exemple** : sur Jumia ou Glovo à Abidjan, l’arrivée de nouveaux restaurants partenaires attire de nouveaux clients affamés, ce qui incite d’autres restaurants à rejoindre l’application.',
            keyRule:
              'L’effet de réseau croisé (ou indirect) crée une boucle auto-renforçante entre les deux versants d’une plateforme biface.',
            konanTip:
              'Analyse bien le schéma circulaire ci-dessous : c’est la mécanique cœur de toute marketplace prospère.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Boucle d’effet de réseau croisé sur une plateforme biface',
              caption: 'Interaction positive continue entre le versant acheteurs et le versant vendeurs.',
              cycle: {
                centerLabel: 'Effet Croisé',
                centerSublabel: 'Liquidité & Confiance',
                nodes: [
                  { title: 'Plus d’acheteurs', subtitle: 'Demande solvable abondante', color: 'blue' },
                  { title: 'Plus de vendeurs', subtitle: 'Attractivité commerciale accrue', color: 'green' },
                  { title: 'Meilleur choix & prix', subtitle: 'Concurrence et disponibilité', color: 'violet' },
                  { title: 'Expérience supérieure', subtitle: 'Livraison rapide & confiance', color: 'orange' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Comment définit-on un « effet de réseau croisé » (ou indirect) sur une plateforme de e-commerce ?',
              options: [
                'La hausse du nombre de vendeurs attire davantage d’acheteurs, et la hausse du nombre d’acheteurs attire en retour davantage de vendeurs',
                'Les utilisateurs refusent d’interagir avec des vendeurs locaux',
                'Les prix des serveurs augmentent proportionnellement au carré des clients',
                'Un acheteur ne peut commander qu’auprès d’un seul vendeur à vie',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans un effet de réseau croisé, la croissance d’un côté du marché (les acheteurs) augmente directement la valeur de la plateforme pour l’autre côté (les vendeurs), et inversement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Masse critique',
            stepTheme: 'Seuil d’amorçage',
            stepTitle: 'Problème de l’œuf et de la poule, masse critique et concentration',
            paragraphText:
              'Si les effets de réseau rendent le leader quasi imbattable, comment une nouvelle plateforme parvient-elle à décoller à partir de zéro utilisateur ?\n' +
              '• **Problème de l’œuf et de la poule** : sans chauffeurs, pas de passagers ; sans passagers, aucun chauffeur ne se connecte.\n' +
              '• **Masse critique** : nombre minimal d’utilisateurs sur chaque face au-delà duquel la valeur perçue dépasse le coût d’adoption et la croissance devient auto-entretenue.\n' +
              '• **Concentration (Winner-Takes-All)** : une fois la masse critique dépassée par le pionnier, l’effet d’entraînement rapide tend à concentrer le marché autour d’un ou deux géants dominants.',
            keyRule:
              'Les quatre grands principes des marchés de plateformes sont : effets de réseau, avantage du pionnier, entraînement rapide au-delà de la masse critique et forte concentration.',
            konanTip:
              'Piège classique : croire qu’une plateforme peut démarrer partout à la fois. Les leaders réussissent en atteignant d’abord la masse critique dans une niche ou une seule ville (ex. Abidjan) avant d’étendre.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Qu’appelle-t-on la « masse critique » dans le développement d’une plateforme biface ?',
              options: [
                'Le poids physique maximal des serveurs d’un datacenter',
                'Le seuil minimal d’utilisateurs sur chaque face à partir duquel la plateforme génère suffisamment de valeur pour croître de manière autonome',
                'Le montant maximal d’impôts versé par une start-up',
                'Le moment où tous les clients quittent la plateforme simultanément',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La masse critique correspond au volume minimum d’utilisateurs permettant aux effets de réseau d’enclencher une dynamique auto-entretenue.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Subventionnement',
            stepTheme: 'Stratégie tarifaire',
            stepTitle: 'Le subventionnement croisé entre face gratuite et face payante',
            paragraphText:
              'Pour franchir rapidement la masse critique, les plateformes bifaces pratiquent une tarification asymétrique appelée subventionnement croisé.\n' +
              '• **Face subventionnée** : on attire le groupe le plus sensible au prix ou le plus générateur d’externalités positives grâce à la gratuité, des primes ou des réductions (ex. utilisateurs gratuits des moteurs de recherche ou passagers recevant des codes promo).\n' +
              '• **Face monétisée (« money side »)** : l’autre versant paie un tarif intégrant le coût de la face gratuite car il profite d’un accès massif à des clients qualifiés (annonceurs, vendeurs, recruteurs).\n' +
              '• **Exemple** : les portails d’offres d’emploi sont gratuits pour les candidats (Face A) afin d’attirer un maximum de CV, puis facturent les entreprises qui publient des annonces ou consultent la CVthèque (Face B).',
            keyRule:
              'Dans un marché biface, subventionner la face sensible au prix maximise l’utilité de la face payante et donc la rentabilité globale de la plateforme.',
            konanTip:
              'Ne dis jamais « c’est gratuit donc il n’y a pas de modèle économique » : dans une plateforme biface, la gratuité d’un côté est l’arme commerciale qui valorise le côté payant !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Pourquoi une plateforme de recrutement en ligne choisit-elle généralement d’être totalement gratuite pour les chercheurs d’emploi tout en facturant les entreprises ?',
              options: [
                'Parce que la loi interdit de faire payer des entreprises',
                'Parce qu’elle applique un subventionnement croisé : attirer gratuitement un grand vivier de candidats rend l’accès très précieux pour les recruteurs payants',
                'Parce que les entreprises ne paient jamais pour recruter',
                'Parce que les candidats génèrent des coûts marginaux supérieurs aux recettes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le subventionnement croisé rend le service gratuit pour la face la plus élastique au prix (candidats) afin de maximiser la valeur captée sur l’autre face (entreprises recruteuses).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch3_p2',
        order: 2,
        title: 'Les grands modèles économiques numériques et de monétisation',
        summary:
          'Maîtriser les six grands modèles de revenus (commission, freemium/premium, abonnement, vente de produit, publicité, rachat stratégique) ainsi que le modèle de l’appât et l’achat/revente.',
        conceptExplanation:
          'Un modèle économique est une représentation simplifiée de la manière dont l’entreprise va être viable économiquement et capter la valeur créée.\n\n' +
          'L’économie numérique mobilise six modèles dominants auxquels s’ajoutent deux variantes commerciales fréquentes :\n' +
          '1. **La commission** : prélèvement d’un pourcentage sur les transactions mises en relation (Airbnb, Uber, Amazon Marketplace) ; les revenus croissent sans produire physiquement le service.\n' +
          '2. **Le Freemium / Premium** : offre d’appel gratuite ouverte à un large public et monétisation de fonctionnalités avancées grâce à la scalabilité (Dropbox, Spotify, Clash Royale).\n' +
          '3. **L’abonnement** : fidélisation avec revenus réguliers autour d’un service ou d’une box (Netflix, Office 365, Xbox Game Pass, Adobe).\n' +
          '4. **La vente de produit** : vente unique d’un bien matériel ou logiciel sous licence (Apple iPhone, iMac), qui tend aujourd’hui vers l’abonnement.\n' +
          '5. **La publicité** : monétisation de l’audience auprès d’annonceurs sur un marché biface, pilier de la gratuité du web mais questionné sur le plan éthique.\n' +
          '6. **Le rachat stratégique (Exit)** : création de valeur par acquisition d’une grande base d’utilisateurs/données ou d’une innovation (ex. WhatsApp, ou banques historiques rachetant des fintechs).\n\n' +
          'On rencontre également le **modèle de l’appât** (« rasoir et lames » : produit d’appel abordable puis achats secondaires rentables comme consoles de jeu ou Amazon Prime) et l’**achat/revente** e-commerce.',
        keyRule:
          'Chaque modèle numérique arbitre entre volume gratuit d’acquisition, récurrence des revenus (abonnement/commission) et coût marginal de service.',
        formulas: [
          {
            name: 'Revenu net d’une plateforme à commission',
            formula: '\\text{Revenu plateforme} = \\tau \\times \\text{GMV (Volume brut des transactions)}',
            note: 'Avec τ le taux de commission (take rate). L’entreprise peut augmenter τ ou le volume GMV sans produire elle-même le bien échangé.',
          },
        ],
        workedExample: {
          title: 'Calculer le revenu mensuel d’une marketplace et d’un modèle Freemium',
          statement:
            'Une plateforme e-commerce locale génère 80 000 000 FCFA de volume de ventes mensuel (GMV) avec une commission de 8 %. Parallèlement, une appli de gestion de stock compte 20 000 utilisateurs gratuits et convertit 3 % d’entre eux en abonnés Premium à 5 000 FCFA/mois. Comparez les deux revenus mensuels.',
          methodSteps: [
            'Revenu de la marketplace (commission) : 8 % × 80 000 000 FCFA = 6 400 000 FCFA/mois, sans détenir de stock physique.',
            'Nombre d’abonnés payants du Freemium : 3 % × 20 000 = 600 abonnés Premium.',
            'Revenu mensuel du Freemium : 600 × 5 000 FCFA = 3 000 000 FCFA/mois, servant à couvrir l’hébergement des 19 400 comptes gratuits et les coûts fixes.',
          ],
          conclusion:
            'Les deux modèles s’appuient sur la scalabilité : une faible proportion payante ou un taux de commission modéré génère des revenus importants dès que le volume suit.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Commission',
            stepTheme: 'Intermédiation marchande',
            stepTitle: 'Le modèle de la commission sur transactions',
            paragraphText:
              'Comment Airbnb ou Uber génèrent-ils des milliards sans posséder ni hôtels ni flottes de taxis ? Grâce au prélèvement d’une commission sur chaque échange.\n' +
              '• **Principe** : la plateforme met en relation fournisseurs et clients et prélève un pourcentage (ou un montant fixe) sur chaque transaction effectuée.\n' +
              '• **Scalabilité** : la plateforme peut accroître ses commissions et ses revenus en élargissant les échanges sans supporter les coûts directs de production du service.\n' +
              '• **Exemple** : si une appli de livraison à Abidjan réalise 15 000 commandes par mois à 4 000 FCFA en moyenne avec 15 % de commission, elle encaisse 9 000 000 FCFA sans cuisiner un seul plat.',
            keyRule:
              'La commission permet d’augmenter les revenus proportionnellement au volume de transactions facilitées sans augmenter proportionnellement la production physique.',
            konanTip:
              'Le grand défi de la commission est d’éviter la « désintermédiation hors plateforme » (un client et un artisan qui échangent leurs numéros pour éviter la commission au 2e achat).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quel avantage économique caractérise le modèle de la commission utilisé par Airbnb, Uber ou Amazon Marketplace ?',
              options: [
                'L’entreprise doit fabriquer en usine tous les produits vendus sur son site',
                'La plateforme peut augmenter ses revenus de commissions en multipliant les mises en relation sans supporter la production directe du service',
                'Les utilisateurs ne paient jamais aucune somme d’argent',
                'Le modèle supprime tout besoin de confiance entre acheteurs et vendeurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La commission rémunère la mise en relation et la sécurisation de la transaction sans nécessiter d’investir dans la production physique des biens ou services échangés.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Freemium',
            stepTheme: 'Gratuit + Premium',
            stepTitle: 'Le modèle Freemium / Premium et la conversion par scalabilité',
            paragraphText:
              'Contraction de « Free » et « Premium », ce modèle très répandu dans les logiciels et applications mobiles combine acquisition gratuite massive et monétisation ciblée.\n' +
              '• **Offre d’appel gratuite** : ouverte à un très large public avec fonctionnalités de base, quota limité ou publicités (ex. Dropbox, Spotify, Canva, jeux mobiles).\n' +
              '• **Conversion Premium** : une minorité d’utilisateurs (souvent 2 % à 5 %) paie pour débloquer des fonctions avancées, supprimer les pubs ou obtenir plus de stockage.\n' +
              '• **Condition de viabilité** : le modèle repose impérativement sur la **scalabilité** et un coût marginal par utilisateur gratuit quasi nul.',
            keyRule:
              'Le Freemium n’est rentable que si le coût marginal d’un utilisateur gratuit est proche de zéro et que le revenu des payants couvre l’ensemble de la base.',
            konanTip:
              'Ne confonds pas « essai gratuit limité à 14 jours » (Free Trial) et « Freemium » (version gratuite utilisable indéfiniment avec des limites fonctionnelles).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Sur quelle propriété technique et économique le modèle Freemium (Dropbox, Spotify, Canva) repose-t-il fondamentalement ?',
              options: [
                'Un coût marginal de production physique très élevé pour chaque inscrit',
                'La scalabilité du service numérique et un coût marginal quasi nul permettant de supporter une large base gratuite financée par les convertis Premium',
                'L’interdiction légale de vendre des abonnements payants',
                'L’absence totale de fonctionnalités payantes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Grâce à la scalabilité et au coût marginal quasi nul, servir des millions d’utilisateurs gratuits coûte très peu tout en créant un large entonnoir de conversion vers le Premium.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Abonnement',
            stepTheme: 'Revenus récurrents',
            stepTitle: 'L’abonnement : fidélisation, qualité de l’offre et effet de réseau',
            paragraphText:
              'L’abonnement consiste à fidéliser une clientèle en échange d’un paiement périodique régulier donnant accès à un service numérique ou à une box.\n' +
              '• **Exemples phares** : Netflix, Office 365, Adobe Creative Cloud, Xbox Game Pass (passage des logiciels en boîte à l’abonnement SaaS).\n' +
              '• **Avantage économique** : il est bien moins coûteux et plus facile de **fidéliser** un abonné existant que de recruter sans cesse de nouveaux clients ponctuels.\n' +
              '• **Exigence de qualité** : pour éviter le désabonnement, l’entreprise exploite les données d’usage, les mises à jour continues et les effets de réseau.',
            keyRule:
              'L’abonnement transforme une vente unique incertaine en flux de trésorerie récurrent et prévisible, à condition de maintenir une qualité d’offre irréprochable.',
            konanTip:
              'Pour retenir l’intérêt financier de l’abonnement : « Fidéliser un client coûte 5 fois moins cher qu’en conquérir un nouveau ! ».',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Pourquoi le modèle de l’abonnement (Netflix, Office 365, Adobe) prend-il autant d’ampleur par rapport à la vente unique de logiciels sous licence ?',
              options: [
                'Parce qu’il empêche toute mise à jour du logiciel après l’achat',
                'Parce qu’il génère des revenus réguliers prévisibles et qu’il est plus rentable de fidéliser une base abonnée que de recruter sans cesse de nouveaux acheteurs',
                'Parce que les clients préfèrent payer 10 fois plus cher dès le premier jour',
                'Parce qu’il supprime le besoin d’authentification',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’abonnement assure des flux récurrents et capitalise sur la fidélisation, moins coûteuse que l’acquisition perpétuelle de nouveaux clients.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Publicité',
            stepTheme: 'Modèle biface du Web',
            stepTitle: 'La publicité en ligne : moteur de gratuité et limites éthiques',
            paragraphText:
              'Comment expliquer que les moteurs de recherche, les réseaux sociaux et la majorité des médias en ligne soient accessibles sans payer un franc ?\n' +
              '• **Principe** : l’éditeur monétise l’audience captée auprès d’annonceurs souhaitant promouvoir leurs produits ou marques.\n' +
              '• **Logique biface** : c’est le modèle historique dominant du Web qui a financé son incroyable expansion gratuite pour les internautes.\n' +
              '• **Remises en question** : très rentable pour les géants captant les données, mais de plus en plus critiqué pour des **raisons éthiques** (surveillance comportementale, addiction, désinformation, bloqueurs de pub).',
            keyRule:
              'La publicité ciblée a permis la gratuité massive du Web, mais elle expose les plateformes à des critiques éthiques liées à la captation des données personnelles.',
            konanTip:
              'En dissertation, nuance toujours : la publicité démocratise l’accès au savoir et aux outils (gratuité), au prix d’une exposition publicitaire et d’une collecte de traces.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel rôle historique le modèle publicitaire a-t-il joué dans le développement d’Internet tout en soulevant aujourd’hui des débats éthiques ?',
              options: [
                'Il a rendu tous les sites web obligatoirement payants par carte bancaire',
                'Il a permis l’expansion et la gratuité d’usage de nombreux services et médias, mais suscite des critiques sur le profilage et l’économie de l’attention',
                'Il a interdit l’émergence des marchés bifaces',
                'Il a supprimé les dépenses marketing des entreprises',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le modèle publicitaire a financé la gratuité des services web via les annonceurs, tout en posant des questions éthiques majeures autour de la vie privée et du ciblage.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Vente & Appât',
            stepTheme: 'Hardware & E-commerce',
            stepTitle: 'Vente de produit, modèle de l’appât (« razor & blades ») et achat/revente',
            paragraphText:
              'Tous les modèles numériques ne reposent pas sur l’immatériel pur : plusieurs stratégies articulent vente physique et revenus numériques secondaires.\n' +
              '• **Vente unique de produit** : vente d’un bien matériel ou logiciel sous licence (Apple iPhone/iMac) ; augmenter les revenus implique ici de produire plus, d’où la maîtrise de la chaîne de valeur.\n' +
              '• **Modèle de l’appât** : produit d’appel vendu à prix très abordable (ou à marge nulle) suivi d’achats récurrents très rentables (consoles de jeux + jeux, imprimantes + cartouches, Amazon Prime).\n' +
              '• **Achat / revente** : acquisition en gros puis revente en ligne via un site e-commerce avec marge commerciale.',
            keyRule:
              'Dans le modèle de l’appât, le premier équipement verrouille le client dans un écosystème où les consommables et services ultérieurs génèrent l’essentiel du profit.',
            konanTip:
              'L’exemple type du modèle de l’appât en tech : une console de jeux vendue à prix coûtant pour vendre ensuite des jeux et abonnements en ligne à forte marge.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'En quoi consiste le « modèle de l’appât » (ou modèle rasoir et lames) dans l’économie numérique ?',
              options: [
                'Vendre un produit d’appel abordable pour générer ensuite des achats secondaires ou récurrents très rentables (jeux, cartouches, abonnements)',
                'Offrir uniquement des logiciels libres sans aucune source de revenus',
                'Racheter tous ses fournisseurs avant d’avoir des clients',
                'Supprimer toute vente après le premier contact client',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le modèle de l’appât attire le client avec un produit initial peu coûteux afin de capter la marge sur les consommables, contenus ou services complémentaires.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Rachat / Exit',
            stepTheme: 'Stratégie M&A',
            stepTitle: 'La création de valeur par rachat stratégique (Exit)',
            paragraphText:
              'Certaines start-ups numériques ne génèrent presque aucun profit pendant leurs premières années, et pourtant leurs fondateurs et investisseurs réalisent une immense plus-value. Comment ?\n' +
              '• **Principe du rachat** : construire rapidement une **grande base d’utilisateurs et de données qualifiées** ou une technologie de rupture pour être racheté à prix d’or.\n' +
              '• **Deux profils d’acheteurs** : les **géants du numérique** qui rachètent leurs concurrents potentiels (ex. rachat de WhatsApp par Facebook/Meta) et les entreprises historiques (**« legacy »**) comme les banques traditionnelles qui rachètent des **fintechs** pour importer l’innovation.\n' +
              '• **Exemple** : une start-up africaine de paiement mobile peut être acquise par un groupe bancaire régional cherchant à moderniser instantanément son offre digitale.',
            keyRule:
              'Le modèle du rachat valorise l’actif stratégique accumulé (base d’utilisateurs, données qualifiées, technologie) plutôt que la rentabilité immédiate.',
            konanTip:
              'Retiens le terme « legacy » : il désigne les acteurs traditionnels historiques (banques, assureurs, médias papier) qui rachètent des start-ups innovantes pour accélérer leur transformation.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Pourquoi des acteurs traditionnels (« legacy ») comme les banques rachètent-ils parfois des start-ups fintech qui ne sont pas encore rentables ?',
              options: [
                'Uniquement pour payer moins d’électricité',
                'Pour acquérir rapidement une base d’utilisateurs, des données qualifiées ou une technologie innovante et neutraliser une menace concurrentielle',
                'Parce que les banques n’ont pas le droit de créer de sites web',
                'Pour fermer définitivement leurs propres agences dès le lendemain',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le rachat permet aux entreprises établies d’intégrer rapidement une innovation, des talents et une base d’utilisateurs déjà conquise.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch3_p3',
        order: 3,
        title: 'Pilotage de la croissance : Product-Market Fit, Traction, Pivot et TIC internes',
        summary:
          'Maîtriser les trois leviers de réussite d’une start-up numérique (PMF, Traction rapide, Pivot) et comprendre comment les TIC transforment toutes les fonctions internes de l’entreprise.',
        conceptExplanation:
          'Disposer d’un bon code ou d’une belle idée ne garantit jamais la survie d’une entreprise numérique. Pour réussir durablement, une jeune pousse doit s’adosser à trois étapes stratégiques complémentaires :\n' +
          '1. **Le Product-Market Fit (PMF)** : faire correspondre précisément son produit au besoin réel du marché. Avec le PMF, la demande croît naturellement (bouche-à-oreille), la satisfaction et la rétention sont élevées et le coût d’acquisition client (CAC) baisse ; sans PMF, dépenser en marketing reste stérile.\n' +
          '2. **La Traction rapide** : gagner vite l’attention et l’adoption du public, ce qui attire les investisseurs, accélère les itérations grâce aux retours terrain et crée un avantage face aux acteurs établis.\n' +
          '3. **La stratégie de Pivot** : modifier rapidement et stratégiquement le produit, le segment cible ou le modèle économique (ex. passer du B2C au B2B) lorsqu’une hypothèse échoue, évitant de gaspiller temps et capital.\n\n' +
          'Parallèlement, les TIC deviennent un levier de transformation interne pour **toutes les fonctions de l’entreprise** : finances, facturation, commerce, ressources humaines, production, logistique, gestion client (CRM) et marketing.',
        keyRule:
          'PMF = clé du succès à long terme ; Traction rapide = confirmation de l’adéquation produit-marché ; Pivot rapide = évite de gaspiller temps et argent sur une mauvaise hypothèse.',
        formulas: [
          {
            name: 'Séquence de validation d’une start-up numérique',
            formula: '\\text{Hypothèse} \\;\\xrightarrow{\\text{Tests / Pivot}}\\text{ Product-Market Fit (PMF)} \\;\\xrightarrow{\\text{Scalabilité}}\\text{ Traction rapide}',
            note: 'Chercher à scaler (acheter de la traction) avant d’avoir atteint le PMF est la première cause d’échec des start-ups.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer la trajectoire d’une EdTech en Côte d’Ivoire',
          statement:
            'Une start-up lance une appli de soutien scolaire B2C à 10 000 FCFA/mois pour les lycéens, mais après 6 mois et 5 millions FCFA de publicité, 85 % des inscrits se désabonnent dès le 2e mois. En revanche, trois écoles privées demandent à acheter l’outil en marque blanche pour leurs enseignants. Quelle décision prendre ?',
          methodSteps: [
            'Constat : le fort taux de désabonnement (85 %) malgré de lourdes dépenses publicitaires prouve l’absence de Product-Market Fit sur la cible B2C grand public à ce tarif.',
            'Signal de marché : la demande spontanée d’écoles privées indique un besoin fort et solvable sur le segment B2B.',
            'Décision stratégique : opérer un Pivot du B2C vers le B2B (vente de licences annuelles aux établissements scolaires) et adapter les fonctionnalités aux enseignants.',
            'Mesure post-pivot : vérifier la rétention et le bouche-à-oreille entre écoles (PMF) avant d’accélérer la traction commerciale.',
          ],
          conclusion:
            'Le pivot précoce sauve la trésorerie et réoriente l’entreprise vers un véritable Product-Market Fit.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'PMF',
            stepTheme: 'Adéquation marché',
            stepTitle: 'Le Product-Market Fit (PMF) : fondement du succès durable',
            paragraphText:
              'Pourquoi certaines applications décollent-elles presque sans publicité tandis que d’autres s’effondrent malgré des budgets marketing colossaux ? Tout repose sur le Product-Market Fit.\n' +
              '• **Définition** : adéquation exacte entre un produit/service et un besoin réel, urgent et solvable d’un segment de marché.\n' +
              '• **Signaux du PMF** : croissance organique par bouche-à-oreille, satisfaction client élevée (les usagers reviennent et recommandent) et baisse du coût d’acquisition client.\n' +
              '• **Risque sans PMF** : brûler sa trésorerie en publicité pour attirer des utilisateurs qui repartent aussitôt (« panier percé »).',
            keyRule:
              'Le PMF est la clé du succès à long terme : on ne doit jamais investir massivement dans la croissance avant d’avoir prouvé que le produit retient naturellement ses premiers clients.',
            konanTip:
              'Retiens le symptôme n°1 d’absence de PMF : tu dois « pousser » chaque vente au prix d’efforts publicitaires croissants et les clients ne reviennent pas.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Quel indicateur révèle qu’une entreprise numérique a atteint le « Product-Market Fit » (PMF) ?',
              options: [
                'Les dépenses publicitaires explosent alors que les utilisateurs ne reviennent pas après la première visite',
                'La demande augmente naturellement par bouche-à-oreille, les clients reviennent régulièrement et les coûts d’acquisition diminuent',
                'L’entreprise refuse de recueillir les avis de ses clients',
                'Le produit est changé toutes les semaines sans aucun retour utilisateur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le PMF se manifeste par une forte rétention, un bouche-à-oreille naturel et une baisse relative des coûts d’acquisition client.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Traction',
            stepTheme: 'Adoption rapide',
            stepTitle: 'La traction rapide : attirer investisseurs et itérer plus vite',
            paragraphText:
              'Une fois l’adéquation produit-marché trouvée, l’entreprise numérique cherche à capter rapidement l’attention et les parts de marché.\n' +
              '• **Preuve de potentiel** : une traction rapide (croissance soutenue des utilisateurs actifs ou des revenus) rassure et attire les investisseurs pour financer l’expansion.\n' +
              '• **Itération accélérée** : plus il y a d’utilisateurs précoces, plus les retours terrain sont abondants pour corriger et améliorer le produit.\n' +
              '• **Avantage concurrentiel** : prendre de vitesse les acteurs traditionnels avant qu’ils ne réagissent.',
            keyRule:
              'Sans traction mesurable, il devient très difficile de lever des financements et de passer à l’échelle (« scaler »).',
            konanTip:
              'Distingue les « métriques de vanité » (ex. nombre total de téléchargements jamais ouverts) de la vraie traction (utilisateurs actifs réguliers, transactions payées).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est le rôle stratégique de la « traction rapide » pour une jeune entreprise numérique ?',
              options: [
                'Empêcher les premiers utilisateurs de donner leur avis sur le produit',
                'Confirmer l’adéquation produit-marché, attirer les investisseurs, accélérer les itérations et créer un avantage face aux acteurs établis',
                'Augmenter volontairement le coût marginal de chaque service rendu',
                'Remplacer la comptabilité par des estimations intuitives',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La traction rapide prouve la pertinence commerciale du projet, facilite la levée de fonds pour scaler et nourrit l’amélioration continue du produit.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Pivot',
            stepTheme: 'Agilité stratégique',
            stepTitle: 'La stratégie de Pivot : réorienter produit, cible ou modèle',
            paragraphText:
              'Persévérer aveuglément sur une idée qui ne rencontre pas son marché conduit droit à la faillite : c’est là qu’intervient le pivot.\n' +
              '• **Définition** : changement stratégique rapide et structuré de direction tout en conservant les acquis technologiques et les apprentissages.\n' +
              '• **Trois formes principales** : modifier le produit pour mieux coller au besoin, cibler un autre segment client, ou changer de modèle économique (ex. passer du **B2C au B2B**).\n' +
              '• **Exemple** : une appli de covoiturage peinant à convaincre le grand public pivote vers les flottes de transport d’entreprises (B2B) à Abidjan.',
            keyRule:
              'Un pivot réussi n’est pas un échec : c’est une correction rationnelle qui évite de gaspiller temps et capitaux sur une mauvaise hypothèse de départ.',
            konanTip:
              'De nombreux géants mondiaux sont nés d’un pivot : YouTube (site de rencontres vidéo → hébergement vidéo), Slack (outil interne d’un studio de jeu → messagerie d’entreprise).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle action illustre le mieux une « stratégie de pivot » dans une entreprise numérique ?',
              options: [
                'Dépenser tout son capital restant sur la même publicité inefficace pendant trois ans',
                'Réorienter rapidement son offre, changer de segment client ou passer d’un modèle B2C à un modèle B2B suite aux retours du marché',
                'Couper tout contact avec les utilisateurs insatisfaits',
                'Augmenter ses prix de 300 % sans changer le produit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le pivot consiste à ajuster stratégiquement le produit, la cible ou le modèle économique (ex. B2C → B2B) pour trouver un marché porteur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Fonctions internes',
            stepTheme: 'Digitalisation métier',
            stepTitle: 'Impact stratégique des TIC sur toutes les fonctions de l’entreprise',
            paragraphText:
              'L’économie numérique ne transforme pas que les start-ups tech : elle modifie en profondeur la structure productive de toutes les entreprises traditionnelles.\n' +
              '• **Fonctions support** : automatisation des **finances**, de la **facturation** électronique et des **ressources humaines** (SIRH, paie digitale).\n' +
              '• **Fonctions opérationnelles** : pilotage de la **production-fabrication**, traçabilité de la **logistique** et des stocks en temps réel.\n' +
              '• **Fonctions commerciales** : **commerce** multicanal, **gestion de la relation client (CRM)** et **marketing** ciblé mesurable.',
            keyRule:
              'Les TIC deviennent un levier transversal modifiant la structure productive : chaque maillon (finance, RH, logistique, production, CRM, marketing) gagne en réactivité.',
            konanTip:
              'Retiens la liste complète des fonctions impactées : finances, facturation, RH, production, logistique, commerce, gestion client et marketing.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Dans une entreprise existante, sur quelles activités de gestion les TIC exercent-elles un impact transformateur ?',
              options: [
                'Uniquement sur la gestion des réseaux sociaux grand public',
                'Sur l’ensemble des activités : finances, facturation, RH, production, logistique, commerce, gestion client et marketing',
                'Exclusivement sur le nettoyage des locaux',
                'Uniquement sur l’envoi de courriers postaux papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les TIC restructurent la totalité de la chaîne de gestion interne de l’entreprise, du back-office (finances, RH, production, logistique) au front-office (commerce, CRM, marketing).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Erreur classique',
            stepTheme: 'Premature Scaling',
            stepTitle: 'Le piège du passage à l’échelle prématuré (« premature scaling »)',
            paragraphText:
              'Quelle est l’une des causes de mortalité les plus fréquentes des jeunes entreprises numériques qui ont levé des fonds ? Vouloir aller trop vite avant d’avoir validé le PMF.\n' +
              '• **Erreur type** : recruter une grande force de vente, ouvrir plusieurs pays ou dépenser des millions en publicité alors que la rétention produit reste faible.\n' +
              '• **Conséquence** : multiplication des pertes proportionnellement au volume de nouveaux inscrits qui abandonnent rapidement.\n' +
              '• **Bonne pratique** : valider d’abord l’adéquation produit-marché à petite échelle (PMF), puis seulement activer les moteurs de traction et de scalabilité.',
            keyRule:
              'L’ordre impératif est : Validation du besoin (PMF) → Stabilisation de l’expérience → Accélération de la traction (Scaling).',
            konanTip:
              'Ne confonds pas croissance (ajouter des revenus même à perte) et scalabilité rentable (augmenter les revenus bien plus vite que les coûts sur un produit validé).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Pourquoi le « passage à l’échelle prématuré » (recruter et investir massivement en marketing avant d’avoir le PMF) est-il dangereux pour une start-up ?',
              options: [
                'Parce que cela multiplie les coûts d’acquisition pour des clients qui ne restent pas fidèles au produit',
                'Parce que les clients refusent les produits qui font de la publicité',
                'Parce que les logiciels deviennent plus lents lorsqu’il y a des revenus',
                'Parce que le pivot est interdit une fois qu’on a des clients',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sans Product-Market Fit, les dépenses marketing attirent des utilisateurs qui se désengagent vite, accélérant l’épuisement de la trésorerie.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Synthèse',
            stepTheme: 'Boussole entrepreneuriale',
            stepTitle: 'Articuler modèle économique, PMF, traction et pivot',
            paragraphText:
              'En résumé, la réussite d’une entreprise numérique repose sur l’équilibre dynamique entre la conception du modèle économique et la discipline d’exécution sur le marché.\n' +
              '• **Modèle économique clair** : savoir qui paie (client direct, annonceur, vendeur via commission, abonné) et pourquoi.\n' +
              '• **Boussole PMF / Traction / Pivot** : le PMF assure la rétention à long terme, la traction prouve le potentiel de croissance aux partenaires, et le pivot protège le capital si le marché répond négativement.\n' +
              '• **Exemple** : une fintech ivoirienne combine modèle à commission sur transferts marchands, itérations rapides avec les commerçants (PMF) et extension progressive vers l’UEMOA (traction).',
            keyRule:
              'Un modèle économique numérique n’est jamais figé au premier jour : il s’affine par itérations successives entre retours clients, métriques de traction et ajustements tarifaires.',
            konanTip:
              'Pour toute étude de cas d’entreprise tech, vérifie ces 4 points : (1) Qui est le payeur ? (2) Quel est le PMF ? (3) Quelle est la preuve de traction ? (4) Quel pivot éventuel a été opéré ?',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Comment s’articulent les trois notions clés PMF, Traction rapide et Pivot dans la trajectoire d’une start-up numérique ?',
              options: [
                'Le Pivot permet d’ajuster la trajectoire si besoin, le PMF assure la solidité durable sur le marché, et la Traction rapide confirme l’adoption pour financer l’expansion',
                'Le Pivot remplace définitivement le besoin d’avoir des clients',
                'La Traction doit précéder la conception même du produit',
                'Ces trois notions ne concernent que les usines métallurgiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pivoter aide à corriger le tir pour atteindre le Product-Market Fit (clé du succès durable), que la traction rapide vient ensuite confirmer auprès du marché et des investisseurs.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : MODÈLES ALTERNATIFS, TRANSFORMATION DIGITALE ET CÔTE D’IVOIRE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_eco_num_ch4',
    subjectId: 'lmd_intro_eco_num',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 : Modèles alternatifs, transformation digitale et enjeux en Côte d’Ivoire',
    summary:
      'Explorer les modèles alternatifs (économie des communs, Creative Commons, Open Source, Crowdsourcing/Crowdfunding/Crowdlending, don et coopératives de plateforme) puis analyser les dynamiques et défis de la transformation digitale en Côte d’Ivoire (Mobile Money, e-commerce, fracture numérique et souveraineté).',
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction à l’Économie Numérique',
    points: [
      // ----------------------------------------------------------------------
      // POINT 4.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch4_p1',
        order: 1,
        title: 'L’économie des communs, Creative Commons, le libre et l’Open Source',
        summary:
          'Comprendre les communs numériques (Creative Commons, Wikonomics), les libertés du logiciel libre et le poids économique de l’Open Source dans l’infrastructure mondiale.',
        conceptExplanation:
          'À côté des modèles capitalistes centrés sur la propriété intellectuelle fermée et le profit actionnarial se développent des **modèles alternatifs** fondés sur la coopération, le partage et l’intérêt collectif.\n\n' +
          'L’**économie des communs** s’appuie sur la nature intangible du numérique et son coût de reproduction quasi nul pour remettre en question l’exclusivité absolue de la propriété intellectuelle : licences **Creative Commons** et dynamique de co-création ouverte (**Wikonomics**).\n\n' +
          'Le mouvement du **logiciel libre et de l’Open Source**, aussi ancien que le Web mais souvent méconnu du grand public, irrigue en réalité l’ensemble de l’infrastructure numérique mondiale : navigateurs (**Firefox**, **Chromium**), systèmes de serveurs réseau (**Linux**), bases de données et bibliothèques d’IA. Loin d’interdire toute activité marchande, l’Open Source génère de solides revenus via l’intégration, le support entreprise, l’hébergement managé et les licences doubles.',
        keyRule:
          'Les communs et l’Open Source tirent parti du coût de copie quasi nul pour organiser une production collaborative partagée tout en permettant des modèles économiques de services viables.',
        formulas: [
          {
            name: 'Les 4 libertés fondamentales du logiciel libre',
            formula: '\\text{Libre} = \\text{Utiliser} + \\text{Étudier} + \\text{Modifier} + \\text{Redistribuer}',
            note: 'Un logiciel libre n’est pas nécessairement « gratuit » : il est avant tout ouvert dans son code source et modifiable.',
          },
        ],
        workedExample: {
          title: 'Choisir une licence et un modèle économique Open Source pour une start-up ivoirienne',
          statement:
            'Une équipe d’ingénieurs d’Abidjan développe un logiciel de gestion scolaire sous licence Open Source. Comment peut-elle rester économiquement viable tout en ouvrant son code source ?',
          methodSteps: [
            'Le code de base est publié en Open Source : n’importe quelle école ou université peut l’auditer, l’installer gratuitement et contribuer à corriger des bogues (effet communauté).',
            'Monétisation par l’hébergement cloud managé (SaaS) : les écoles préférant ne pas gérer leurs propres serveurs paient un abonnement mensuel clé en main.',
            'Monétisation par les services B2B : facturation de l’installation, de la formation des équipes, du support technique prioritaire et des développements spécifiques.',
          ],
          conclusion:
            'Dans l’Open Source professionnel, la valeur commerciale ne porte plus sur la rareté artificielle du code, mais sur la fiabilité, l’hébergement et l’expertise de service.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Communs',
            stepTheme: 'Bien partagé',
            stepTitle: 'L’économie des communs numériques et la remise en cause de la clôture',
            paragraphText:
              'Pourquoi enfermer un savoir ou un fichier derrière des brevets stricts alors que sa copie ne coûte presque rien et profite à toute la collectivité ? C’est l’idée fondatrice des communs numériques.\n' +
              '• **Trois piliers d’un commun** : une ressource partagée (code, encyclopédie, carte géographique), une communauté de contributeurs et des règles de gouvernance collectives.\n' +
              '• **Spécificité numérique** : caractère intangible et **coût de copiage quasi nul**, remettant en question les monopoles rigides de propriété intellectuelle.\n' +
              '• **Exemple** : OpenStreetMap fournit une cartographie mondiale librement enrichie et utilisée par des ONG, des chercheurs et des services de livraison locaux.',
            keyRule:
              'Un commun numérique associe une ressource immatérielle non-rivale, une communauté ouverte et une gouvernance empêchant son accaparement exclusif.',
            konanTip:
              'Retiens le contraste : propriété privée exclusive (accès verrouillé) vs communs numériques (accès partagé régi par des licences ouvertes).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle propriété économique du numérique favorise particulièrement l’émergence de l’économie des communs ?',
              options: [
                'L’épuisement physique immédiat d’un fichier dès qu’il est lu une fois',
                'Le caractère immatériel des ressources numériques et leur coût de reproduction quasi nul',
                'L’interdiction technique de copier un document informatique',
                'Le coût exorbitant de chaque copie numérique supplémentaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Parce que les biens numériques sont intangibles et reproductibles à coût quasi nul, ils se prêtent au partage collectif et à l’enrichissement collaboratif.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Creative Commons',
            stepTheme: 'Licences & Wikonomics',
            stepTitle: 'Licences Creative Commons et dynamique de la Wikonomics',
            paragraphText:
              'Entre le « tous droits réservés » strict et le domaine public sans aucune règle, les licences Creative Commons offrent un spectre souple de partage légal.\n' +
              '• **Creative Commons (CC)** : permet à un auteur (enseignant, musicien, photographe) d’autoriser à l’avance certains usages gratuits selon des clauses combinables : **BY** (attribution), **NC** (pas d’usage commercial), **ND** (pas de modification), **SA** (partage à l’identique).\n' +
              '• **Wikonomics** : modèle de production par les pairs à grande échelle (« peer production ») illustré par Wikipédia ou les projets scientifiques ouverts.\n' +
              '• **Exemple** : publier un cours universitaire sous licence CC BY-SA permet à tout étudiant ou professeur d’Afrique de l’Ouest de le diffuser et l’améliorer en citant l’auteur.',
            keyRule:
              'Les licences Creative Commons encadrent juridiquement le partage ouvert en combinant attribution (BY), usage non commercial (NC), absence de modification (ND) ou partage à l’identique (SA).',
            konanTip:
              'Astuce mémo sur les sigles CC : BY = « par » (citer l’auteur) ; SA = « Share Alike » (partager sous la même licence) ; NC = Non-Commercial ; ND = No Derivatives.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Que permet concrètement une licence « Creative Commons » à un créateur de contenus numériques ?',
              options: [
                'D’interdire définitivement toute lecture de son œuvre sur Internet',
                'De définir précisément les droits de partage, de réutilisation et de modification accordés gratuitement au public tout en gardant la paternité de l’œuvre',
                'De transférer automatiquement les droits d’auteur à une banque commerciale',
                'De rendre le code source binaire illisible',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les licences Creative Commons facilitent la circulation légale des œuvres en précisant à l’avance ce que les utilisateurs peuvent faire (copier, adapter, diffuser commercialement ou non).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Logiciel Libre',
            stepTheme: 'Open Source',
            stepTitle: 'Le libre et l’Open Source : omniprésence dans l’infrastructure du Web',
            paragraphText:
              'Le monde du logiciel libre est aussi ancien que le Web ; bien que souvent peu visible pour le grand public, il fait tourner l’immense majorité des infrastructures mondiales.\n' +
              '• **Navigateurs & outils** : **Firefox**, **Chromium** (socle technique de Google Chrome et Edge), LibreOffice, VLC.\n' +
              '• **Serveurs & Cloud** : le noyau **Linux** propulse la quasi-totalité des serveurs Internet, supercalculateurs, conteneurs cloud et systèmes Android.\n' +
              '• **Composants logiciels** : des milliers de briques Open Source se retrouvent à l’intérieur des applications commerciales et bancaires du monde entier.',
            keyRule:
              'Sans les briques Open Source (Linux, Chromium, serveurs Web, langages Python/PHP), l’économie numérique commerciale mondiale n’existerait tout simplement pas sous sa forme actuelle.',
            konanTip:
              'Retiens ces exemples incontournables : Linux (serveurs), Firefox et Chromium (navigateurs), Thunderbird (messagerie).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Parmi les composants suivants, lesquels illustrent l’omniprésence du logiciel libre et de l’Open Source dans l’infrastructure numérique ?',
              options: [
                'Le noyau Linux sur les serveurs réseau et les moteurs de navigateurs Firefox et Chromium',
                'Les câbles en cuivre des télégraphes du XIXe siècle',
                'Les logiciels propriétaires fermés sans code consultable',
                'Uniquement les jeux sur console à cartouche',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Linux domine l’infrastructure serveur mondiale, tandis que Firefox et Chromium sont des piliers libres/open source de la navigation Web.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Libre ≠ Gratuit',
            stepTheme: 'Distinction clé',
            stepTitle: 'Piège classique : distinguer « logiciel libre » et « logiciel gratuit »',
            paragraphText:
              'En français, l’ambiguïté entre « libre » et « gratuit » (comme « free speech » vs « free beer » en anglais) provoque de fréquentes erreurs d’analyse économique.\n' +
              '• **Logiciel gratuit (Freeware)** : ne coûte pas d’argent à télécharger (ex. une application propriétaire gratuite), mais son code source reste fermé et interdit de modification.\n' +
              '• **Logiciel libre / Open Source** : garantit l’accès au code source et la liberté d’utiliser, étudier, modifier et redistribuer, même si des services ou licences commerciales y sont associés.\n' +
              '• **Exemple** : Red Hat génère des milliards de dollars de chiffre d’affaires en vendant du support entreprise et des certifications autour de Linux, pourtant Open Source.',
            keyRule:
              '« Libre » renvoie à la liberté d’accès, de modification et de redistribution du code source ; un logiciel libre peut parfaitement être commercialisé.',
            konanTip:
              'Piège d’examen garanti : une application mobile gratuite mais à code fermé N’EST PAS un logiciel libre ! C’est un freeware propriétaire.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle affirmation distingue correctement un « logiciel libre » d’un simple « logiciel gratuit » (freeware) ?',
              options: [
                'Un logiciel libre est toujours payant et son code est secret',
                'Un logiciel libre donne accès à son code source et autorise son étude, sa modification et sa redistribution, contrairement à un freeware fermé',
                'Un freeware est obligatoirement développé par une administration publique',
                'Il n’existe aucune différence juridique ou technique entre les deux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La liberté du logiciel porte sur les droits techniques et juridiques sur le code source (utiliser, étudier, modifier, partager), et non sur le prix zéro.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Business Open Source',
            stepTheme: 'Monétisation ouverte',
            stepTitle: 'Comment les entreprises gagnent-elles de l’argent avec l’Open Source ?',
            paragraphText:
              'Si le code source est public, pourquoi de grandes sociétés investissent-elles des millions en développement Open Source ? Quatre modèles économiques l’expliquent.\n' +
              '• **Services & support entreprise** : vente de maintenance garantie (SLA), formation, audit et intégration sur mesure.\n' +
              '• **Cloud managé (Open SaaS)** : le code est libre mais l’entreprise facture l’hébergement sécurisé, les sauvegardes et la montée en charge en un clic.\n' +
              '• **Open Core & Dual-Licensing** : cœur Open Source gratuit combiné à des modules professionnels payants ou à une licence commerciale pour intégration fermée.',
            keyRule:
              'Dans l’économie de l’Open Source, le code joue le rôle de produit d’appel et de standard partagé, tandis que la marge se capte sur le service, le cloud et le support.',
            konanTip:
              'Les trois mots clés de la monétisation Open Source : Support (SLA), Hébergement Cloud (SaaS managé) et Open Core (fonctions pro).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Par quel mécanisme une entreprise éditrice d’un logiciel Open Source assure-t-elle principalement sa rentabilité ?',
              options: [
                'En vendant des services d’intégration, de support entreprise, de formation ou d’hébergement cloud managé autour du logiciel',
                'En poursuivant en justice toute personne qui lit le code source',
                'En interdisant aux entreprises d’utiliser le logiciel',
                'En facturant chaque copier-coller de ligne de code par les étudiants',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les modèles économiques Open Source s’appuient sur la vente de services professionnels (support, déploiement, cloud managé, extensions Open Core).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Enjeu Afrique',
            stepTheme: 'Autonomie technologique',
            stepTitle: 'Intérêt stratégique de l’Open Source pour l’Afrique et la Côte d’Ivoire',
            paragraphText:
              'Pour les universités, PME et administrations publiques d’Afrique de l’Ouest, l’Open Source représente un levier économique et de souveraineté décisif.\n' +
              '• **Économie de devises** : réduction massive des coûts de licences étrangères facturées en dollars ou en euros.\n' +
              '• **Montée en compétences locales** : accès libre au code pour former ingénieurs, développeurs et administrateurs systèmes ivoiriens aux meilleurs standards mondiaux.\n' +
              '• **Sécurité et souveraineté** : possibilité d’auditer le code des applications publiques pour éviter les portes dérobées et adapter les outils aux langues et contextes locaux.',
            keyRule:
              'L’Open Source transforme une dépense d’importation de licences étrangères en investissement local dans les compétences et l’adaptation métier.',
            konanTip:
              'Pense à relier Open Source et souveraineté : auditer son code critique permet à un État ou une banque de ne pas dépendre aveuglément d’une « boîte noire » étrangère.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Quel avantage stratégique majeur l’adoption de solutions Open Source offre-t-elle aux administrations et PME ivoiriennes ?',
              options: [
                'Elle supprime tout besoin de connexion électrique ou réseau',
                'Elle réduit la sortie de devises en licences propriétaires, facilite l’audit de sécurité et permet d’adapter localement les logiciels',
                'Elle garantit qu’aucun développeur local n’aura à apprendre à programmer',
                'Elle interdit toute création d’entreprise informatique locale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Open Source abaisse la facture de licences importées, renforce la maîtrise technique locale (audit, adaptation) et favorise la souveraineté numérique.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch4_p2',
        order: 2,
        title: 'Crowdsourcing, Crowdfunding, Don et Coopératives de plateforme',
        summary:
          'Distinguer crowdsourcing, crowdfunding et crowdlending pour le financement des TPE-PME, analyser l’économie du don (Wikipédia, Mozilla) et les principes démocratiques des coopératives de plateforme.',
        conceptExplanation:
          'Au-delà des communs logiciels, l’économie numérique a fait émerger de nouveaux mécanismes participatifs de production, de financement et de gouvernance :\n\n' +
          '1. **Le Crowdsourcing** : mobilisation de l’intelligence, du temps ou des micro-contributions d’une large communauté en ligne pour résoudre un problème ou collecter des données.\n' +
          '2. **Le Crowdfunding et le Crowdlending** : plateformes de financement participatif permettant aux **TPE-PME** et porteurs de projets d’obtenir des financements directs auprès du public sous forme de dons avec contrepartie, d’**actionnariat** (equity) ou de **prêts** rémunérés (crowdlending), contournant les obstacles du crédit bancaire classique.\n' +
          '3. **L’économie du don** : financement par les dons des usagers ou adhérents et participation bénévole, illustré par de grandes structures numériques comme **Wikipédia** ou la fondation **Mozilla** (Firefox, Thunderbird).\n' +
          '4. **La coopérative de plateforme** : entreprise numérique démocratique (**1 personne = 1 voix**), développant une solution technique « ad hoc » financée directement par les acteurs qui utilisent le service, **sans captation exagérée de données** ni asymétrie d’information abusive entre plateforme et utilisateurs.',
        keyRule:
          'Les 5 grands modèles alternatifs sont : économie des communs, libre/Open Source, crowdsourcing & financement participatif, économie du don et coopératives de plateforme.',
        formulas: [
          {
            name: 'Gouvernance coopérative vs Plateforme capitaliste',
            formula: '\\text{Coopérative} : 1\\text{ membre} = 1\\text{ voix} \\quad|\\quad \\text{Société par actions} : 1\\text{ action} = 1\\text{ voix}',
            note: 'Dans une coopérative de plateforme, le pouvoir décisionnel est dissocié du montant de capital détenu.',
          },
        ],
        workedExample: {
          title: 'Choisir un financement alternatif pour une coopérative agricole digitale',
          statement:
            'Une association de jeunes développeurs veut lancer une encyclopédie libre des cultures vivrières africaines, tandis qu’une PME agro-alimentaire cherche 12 millions FCFA pour acquérir une machine de transformation sans réussir à obtenir de prêt bancaire classique. Quel modèle alternatif recommander à chacun ?',
          methodSteps: [
            'Encyclopédie libre des cultures : bien d’intérêt général sans visée commerciale → économie des communs (licence Creative Commons) + économie du don et bénévolat (modèle Wikipédia).',
            'PME agro-alimentaire cherchant 12 millions FCFA remboursables : financement participatif par prêt → Crowdlending (prêt direct par une foule de prêteurs contre intérêt, avec amortissement mensuel).',
            'Si la PME souhaite plutôt ouvrir son capital à des petits investisseurs : Equity Crowdfunding (actionnariat participatif).',
          ],
          conclusion:
            'Chaque besoin (bien public informationnel vs financement productif d’une PME) correspond à un instrument alternatif précis.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Crowdsourcing',
            stepTheme: 'Intelligence collective',
            stepTitle: 'Le Crowdsourcing : mobiliser la foule connectée pour produire',
            paragraphText:
              'Une organisation ne possède jamais en interne toutes les compétences ou observations de terrain nécessaires ; le crowdsourcing consiste à ouvrir une tâche à une foule connectée.\n' +
              '• **Définition** : externalisation d’une activité (collecte de données, traduction, cartographie, idéation, test logiciel) vers une communauté d’internautes.\n' +
              '• **Avantages** : rapidité d’exécution, diversité des idées et couverture géographique impossible pour une équipe restreinte.\n' +
              '• **Exemple** : signaler en temps réel les embouteillages et travaux sur les axes d’Abidjan via une application collaborative alimentée par les conducteurs eux-mêmes.',
            keyRule:
              'Crowdsourcing = externalisation collaborative de tâches ou d’idées vers la foule (« crowd ») ; Crowdfunding = collecte de fonds auprès de la foule.',
            konanTip:
              'Ne confonds pas « sourcing » (ressources, idées, données, travail) et « funding » (argent, financement) !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle pratique correspond exactement au concept de « crowdsourcing » ?',
              options: [
                'L’emprunt obligataire auprès d’une banque centrale',
                'Le recours à une large communauté en ligne pour co-produire des contenus, collecter des données ou résoudre des problèmes',
                'La fermeture complète d’une entreprise aux avis extérieurs',
                'La vente exclusive de matériel informatique en gros',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le crowdsourcing mobilise les contributions (données, idées, traductions, vérifications) d’un grand nombre d’utilisateurs connectés.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Crowdfunding',
            stepTheme: 'Financement direct',
            stepTitle: 'Crowdfunding et Crowdlending : financer directement les TPE-PME',
            paragraphText:
              'En Afrique comme ailleurs, de nombreuses TPE-PME rentables peinent à obtenir un crédit bancaire faute de garanties matérielles lourdes. Les plateformes participatives comblent ce vide.\n' +
              '• **Crowdfunding (don / contrepartie / equity)** : collecte de petits montants auprès de nombreux particuliers ou investisseurs, soit contre une récompense (prévente), soit sous forme d’**actionnariat**.\n' +
              '• **Crowdlending (prêt participatif)** : des particuliers ou investisseurs prêtent directement de l’argent aux **TPE-PME** via une plateforme en échange d’un remboursement avec intérêts.\n' +
              '• **Exemple** : 200 investisseurs contribuent chacun 50 000 FCFA sur une plateforme de crowdlending pour réunir 10 millions FCFA permettant à un atelier textile ivoirien d’honorer une commande.',
            keyRule:
              'Le crowdfunding (actionnariat ou contrepartie) et le crowdlending (prêt rémunéré) désintermédient le financement des TPE-PME grâce au numérique.',
            konanTip:
              'Retiens les trois formes de financement participatif : Don/Contrepartie (récompense), Crowdlending (prêt + intérêt) et Equity Crowdfunding (actions).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle est la spécificité d’une plateforme de « crowdlending » pour les TPE-PME ?',
              options: [
                'Elle impose un don à fonds perdus sans aucun remboursement possible',
                'Elle permet à une foule de financeurs d’accorder directement des prêts rémunérés (ou avec contreparties) aux TPE-PME',
                'Elle réserve ses services uniquement aux États souverains',
                'Elle supprime l’usage d’Internet dans le processus de financement',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le crowdlending met en relation des prêteurs et des TPE-PME pour un financement direct par prêt, complétant l’offre bancaire classique.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Économie du don',
            stepTheme: 'Wikipédia & Mozilla',
            stepTitle: 'L’économie du don et du bénévolat : cas Wikipédia et Mozilla',
            paragraphText:
              'Peut-on gérer des infrastructures numériques consultées par des centaines de millions de personnes chaque jour sans publicité ciblée ni actionnaires ? Oui, grâce à l’économie du don.\n' +
              '• **Double ressource** : financement financier par les **dons** des usagers ou adhérents + participation directe à la vie du projet par le **bénévolat**.\n' +
              '• **Wikipédia (Wikimedia Foundation)** : l’une des 10 plateformes les plus visitées au monde fonctionne sans publicité grâce aux micro-dons des lecteurs et à des milliers de rédacteurs bénévoles.\n' +
              '• **Mozilla (Firefox, Thunderbird)** : organisation à but non lucratif défendant un Web ouvert grâce aux dons et partenariats éthiques.',
            keyRule:
              'L’économie du don combine contributions financières volontaires des usagers et travail bénévole communautaire pour préserver l’indépendance du service.',
            konanTip:
              'Cite toujours le duo emblématique de l’économie du don numérique : Wikipédia (encyclopédie) et Mozilla (Firefox / Thunderbird).',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Sur quels deux piliers reposent de grandes structures numériques comme Wikipédia ou Mozilla dans le modèle du don ?',
              options: [
                'La revente secrète des données bancaires et la publicité intrusive',
                'Les dons financiers des usagers/adhérents et la participation directe bénévole à la vie du projet',
                'Des droits de douane prélevés sur chaque ordinateur vendu',
                'Un monopole d’État imposant un abonnement obligatoire à chaque foyer',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Wikipédia et Mozilla s’appuient sur la générosité financière des usagers/adhérents et sur l’engagement bénévole des contributeurs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Coopératives',
            stepTheme: 'Platform Cooperativism',
            stepTitle: 'Les coopératives de plateforme : démocratie et zéro prédation',
            paragraphText:
              'Face aux critiques visant les géants capitalistes (commissions jugées excessives, opacité algorithmique, précarité), le modèle de la **coopérative de plateforme** propose une gouvernance partagée.\n' +
              '• **Démocratie interne** : principe **« 1 personne = 1 voix »** où travailleurs, producteurs et usagers codétiennent la plateforme.\n' +
              '• **Outil ad hoc et financement direct** : développement sur mesure financé directement par les acteurs bénéficiaires du service.\n' +
              '• **Éthique de la donnée** : **pas de captation exagérée des données** et **pas d’asymétrie d’information** entre la plateforme et ses utilisateurs.',
            keyRule:
              'Une coopérative de plateforme réconcilie efficacité numérique et gouvernance démocratique (1 personne = 1 voix, transparence des données, partage équitable de la valeur).',
            konanTip:
              'Retiens les 5 marqueurs d’une coopérative de plateforme : (1) 1 personne = 1 voix, (2) développement ad hoc, (3) financement par les bénéficiaires, (4) sobriété sur les données, (5) réduction de l’asymétrie d’information.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quel principe fondamental distingue une « coopérative de plateforme » d’une plateforme capitaliste classique ?',
              options: [
                'La vente des données personnelles au plus offrant',
                'Une gouvernance démocratique (1 personne = 1 voix), un financement par les bénéficiaires et l’absence de captation exagérée des données ou d’asymétrie d’information',
                'L’interdiction d’utiliser des développeurs pour créer l’application',
                'L’attribution de 100 % des droits de vote à un seul investisseur extérieur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La coopérative de plateforme applique la règle démocratique (1 personne = 1 voix) au service de ses membres, en évitant l’exploitation asymétrique de leurs données.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Limites',
            stepTheme: 'Défis des alternatifs',
            stepTitle: 'Limites et conditions de survie des modèles alternatifs',
            paragraphText:
              'Malgré leurs vertus éthiques et sociales, les modèles alternatifs affrontent des obstacles économiques bien réels face aux géants du numérique.\n' +
              '• **Défi du financement de la R&D** : sans accès massif au capital-risque, il est plus difficile de financer des campagnes marketing coûteuses ou d’absorber plusieurs années de pertes.\n' +
              '• **Effets de réseau adverses** : les utilisateurs préfèrent souvent rester sur la plateforme dominante (même opaque) parce que tout le monde y est déjà.\n' +
              '• **Gouvernance parfois lente** : la prise de décision collective (1 personne = 1 voix) peut ralentir les pivots stratégiques urgents.',
            keyRule:
              'Pour concurrencer les plateformes dominantes, un modèle alternatif doit offrir une expérience utilisateur (UX) au moins équivalente tout en valorisant sa différence éthique.',
            konanTip:
              'En analyse critique, évite l’angélisme : explique toujours les atouts d’un modèle coopératif ou libre ET ses contraintes de financement et d’adoption face aux effets de réseau.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Quel obstacle économique freine fréquemment l’expansion rapide d’une coopérative de plateforme face à un concurrent financé par capital-risque ?',
              options: [
                'L’interdiction légale d’avoir un site web performant',
                'Une capacité d’investissement initial plus limitée pour subventionner la croissance et franchir la masse critique face aux effets de réseau du leader',
                'Le refus des membres d’utiliser des smartphones',
                'L’obligation de pratiquer des prix dix fois plus élevés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans capital-risque prêt à financer des années de subventionnement croisé à perte, les coopératives peinent parfois à égaler la vitesse d’acquisition des géants capitalistes.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Comparatif',
            stepTheme: '5 modèles alternatifs',
            stepTitle: 'Tableau comparatif des 5 modèles économiques alternatifs',
            paragraphText:
              'Pour ne jamais confondre ces cinq approches lors d’une étude de cas ou d’un examen, il faut savoir comparer leur logique de propriété, de financement et d’exemple phare.\n' +
              '• **Économie des communs** : partage ouvert du savoir (Creative Commons, Wikonomics).\n' +
              '• **Libre & Open Source** : code ouvert et services associés (Linux, Firefox).\n' +
              '• **Crowdsourcing / Crowdfunding** : contribution et financement directs des projets et TPE-PME.\n' +
              '• **Économie du don** : gratuité soutenue par dons et bénévolat (Wikipédia, Mozilla).\n' +
              '• **Coopérative de plateforme** : gouvernance « 1 personne = 1 voix » et protection des données membres.',
            keyRule:
              'Chaque modèle alternatif répond à un besoin spécifique : partage de connaissance (Communs/Don), infrastructure ouverte (Open Source), capital (Crowdfunding) ou gouvernance équitable (Coopérative).',
            konanTip:
              'Apprends à lire et reproduire ce tableau récapitulatif : il synthétise en quelques lignes l’ensemble des modèles alternatifs du numérique.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Synthèse des 5 modèles économiques alternatifs du numérique',
              caption: 'Comparaison selon la ressource partagée, le mode de financement et les exemples de référence.',
              tableData: {
                headers: ['Modèle alternatif', 'Principe central', 'Financement / Gouvernance', 'Exemples de référence'],
                rows: [
                  ['Économie des communs', 'Ressources immatérielles partagées (coût copie ≈ 0)', 'Licences Creative Commons, co-création ouverte (Wikonomics)', 'OpenStreetMap, ressources éducatives libres'],
                  ['Libre & Open Source', 'Code source ouvert, modifiable et redistribuable', 'Services B2B, support entreprise, cloud managé, fondations', 'Linux, Firefox, Chromium, LibreOffice'],
                  ['Crowdsourcing & Crowdfunding', 'Mobilisation de tâches ou de capitaux auprès de la foule', 'Dons, contreparties, prêts (crowdlending), equity TPE-PME', 'Plateformes de prêts PME et campagnes locales'],
                  ['Économie du don', 'Service gratuit sans publicité invasive', 'Dons des usagers/adhérents + travail bénévole', 'Wikipédia (Wikimedia), Mozilla (Thunderbird)'],
                  ['Coopérative de plateforme', 'Outil ad hoc sans captation abusive de données', '1 personne = 1 voix ; financé par les acteurs bénéficiaires', 'Coopératives de livreurs, VTC ou producteurs locaux'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle association entre modèle alternatif et exemple emblématique est rigoureusement exacte ?',
              options: [
                'Économie du don → Wikipédia et Mozilla ; Open Source → Linux et Firefox ; Communs → Creative Commons',
                'Open Source → vente fermée sans code source ; Coopérative → 1 dollar = 10 voix',
                'Crowdlending → encyclopédie gratuite sans prêt d’argent',
                'Creative Commons → interdiction de citer l’auteur d’un texte',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Wikipédia et Mozilla incarnent l’économie du don, Linux et Firefox le logiciel libre/Open Source, et Creative Commons l’outillage juridique des communs.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_intro_eco_num_ch4_p3',
        order: 3,
        title: 'Transformation digitale, Mobile Money, e-commerce et souveraineté en Côte d’Ivoire',
        summary:
          'Analyser l’essor du numérique en Côte d’Ivoire (données ARTCI/CIRES), le rôle du Mobile Money dans l’inclusion financière, le e-commerce et social commerce, la fracture numérique et la souveraineté.',
        conceptExplanation:
          'En Côte d’Ivoire et dans l’espace UEMOA, la transformation numérique suit une trajectoire originale portée par le **téléphone mobile** plutôt que par l’ordinateur de bureau ou la ligne fixe.\n\n' +
          'Les études nationales (ARTCI, CIRES) soulignent la progression continue du taux de pénétration de la téléphonie mobile, de l’Internet mobile (3G/4G) et du poids croissant des services numériques dans le PIB national. Le **Mobile Money** (Orange Money, MTN MoMo, Wave, Moov Money) constitue la véritable colonne vertébrale de l’économie digitale ivoirienne : il permet aux populations non bancarisées d’accéder aux paiements instantanés, aux transferts, au règlement de factures et au micro-crédit.\n\n' +
          'Parallèlement se développent le **e-commerce**, le **social commerce** (ventes via WhatsApp, Facebook, TikTok) et l’e-administration (impôts, état civil, bourses). Toutefois, la Côte d’Ivoire doit relever des défis structurels majeurs : **fracture numérique** (territoires ruraux, coût de la data, compétences, genre), logistique du dernier kilomètre (adressage urbain, paiement à la livraison), cybersécurité et **souveraineté numérique** (hébergement local des données et émergence de champions nationaux).',
        keyRule:
          'En Côte d’Ivoire, le Mobile Money est l’infrastructure de paiement qui rend possibles le e-commerce, le social commerce et l’inclusion financière de millions de citoyens.',
        formulas: [
          {
            name: 'Équation de l’inclusion digitale en Afrique de l’Ouest',
            formula: '\\text{Smartphone / USSD} + \\text{Mobile Money} \\;\\Longrightarrow\\; \\text{Inclusion financière \\& E-commerce local}',
            note: 'Contrairement à l’Europe ou aux États-Unis, le paiement digital repose ici majoritairement sur le mobile plutôt que sur la carte bancaire.',
          },
        ],
        workedExample: {
          title: 'Structurer la digitalisation d’une coopérative commerciale à Bouaké',
          statement:
            'Une boutique de pagnes et accessoires à Bouaké vend aujourd’hui uniquement en espèces sur place. Elle souhaite toucher des clients à Abidjan et dans la sous-région. Quelles briques numériques doit-elle déployer étape par étape ?',
          methodSteps: [
            'Étape 1 — Connectivité et présence : smartphone 4G + catalogue visuel structuré sur WhatsApp Business et réseaux sociaux (social commerce).',
            'Étape 2 — Paiement inclusif : intégration de comptes marchands Mobile Money (Wave, Orange Money, MTN MoMo) pour encaisser à distance sans exiger de carte Visa.',
            'Étape 3 — Logistique et confiance : partenariat avec un réseau de livraison interurbain fiable et politique claire de retour ou paiement sécurisé (escrow / paiement à la livraison).',
            'Étape 4 — Gestion par la donnée : suivi des commandes, gestion des stocks sur tableur/logiciel et fidélisation client.',
          ],
          conclusion:
            'La transformation digitale d’une PME ivoirienne repose sur l’enchaînement pragmatique : connectivité → paiement mobile → logistique → pilotage par la donnée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Usages CI',
            stepTheme: 'Mobile-first',
            stepTitle: 'Paysage numérique ivoirien : croissance mobile et contribution au PIB',
            paragraphText:
              'Comment le numérique s’est-il diffusé en Côte d’Ivoire au cours de la dernière décennie ? Par un basculement massif vers les usages mobiles.\n' +
              '• **Accès mobile dominant** : l’immense majorité des internautes ivoiriens accèdent au Web via leur smartphone et les réseaux cellulaires (3G/4G) plutôt que par fibre fixe à domicile.\n' +
              '• **Poids économique croissant** : les analyses nationales (CIRES, ARTCI) confirment une contribution grandissante du secteur télécoms/TIC à la richesse nationale et aux recettes fiscales.\n' +
              '• **Exemple** : à Abidjan comme dans les chefs-lieux de région, l’équipement en smartphones d’entrée de gamme a transformé l’accès à l’information, à la musique et aux services bancaires.',
            keyRule:
              'L’économie numérique ivoirienne est fondamentalement « mobile-first » : toute solution digitale doit d’abord être pensée pour fonctionner fluidement sur smartphone et réseau mobile.',
            konanTip:
              'Pense toujours au critère « légèreté de l’application » et compatibilité USSD/mobile en Afrique de l’Ouest : une plateforme trop lourde exclut les utilisateurs à forfait data limité.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle caractéristique décrit le mieux l’accès des populations à l’économie numérique en Côte d’Ivoire ?',
              options: [
                'Une domination écrasante de la fibre optique résidentielle et des ordinateurs de bureau fixes',
                'Une dynamique « mobile-first » tirée par les smartphones et la connectivité Internet mobile',
                'L’absence totale de téléphonie mobile dans les centres urbains',
                'L’usage exclusif de cartes bancaires à puce pour tous les achats quotidiens',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En Côte d’Ivoire, l’accès à Internet et aux services digitaux passe très majoritairement par le téléphone mobile et les réseaux cellulaires.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Mobile Money',
            stepTheme: 'Inclusion financière',
            stepTitle: 'Le Mobile Money : moteur d’inclusion financière en zone UEMOA',
            paragraphText:
              'Alors que le taux de bancarisation classique est longtemps resté limité en Afrique de l’Ouest, le Mobile Money a provoqué une révolution financière sans équivalent.\n' +
              '• **Accessibilité** : ouverture d’un compte électronique rattaché à un simple numéro de téléphone (USSD ou application), sans salaire minimum ni paperasse lourde.\n' +
              '• **Usages économiques** : transferts d’argent instantanés urbain-rural, paiement des factures (CIE, SODECI), règlement des frais scolaires, paiements marchands et micro-épargne.\n' +
              '• **Concurrence et baisse des coûts** : l’arrivée de nouveaux acteurs (ex. Wave face aux opérateurs télécoms historiques) a fortement réduit les frais de transfert et stimulé l’interopérabilité.',
            keyRule:
              'Le Mobile Money est l’outil central de l’inclusion financière en Côte d’Ivoire, permettant d’intégrer des millions d’acteurs informels dans le circuit des paiements numériques.',
            konanTip:
              'Retiens le rôle de la BCEAO dans l’UEMOA : elle régule l’émission de monnaie électronique et impulse l’interopérabilité pour que les paiements circulent entre différents opérateurs.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le Mobile Money constitue-t-il un levier majeur de développement économique en Côte d’Ivoire et dans l’UEMOA ?',
              options: [
                'Parce qu’il est réservé uniquement aux grandes multinationales cotées en bourse',
                'Parce qu’il permet aux populations non bancarisées et au secteur informel d’accéder facilement aux paiements, transferts et services financiers via un téléphone',
                'Parce qu’il supprime l’usage du franc CFA au profit du troc',
                'Parce qu’il nécessite obligatoirement une connexion par câble sous-marin privé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Mobile Money lève les barrières d’accès de la banque traditionnelle et digitalise les échanges quotidiens des ménages et des TPE.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'E-commerce local',
            stepTheme: 'Social commerce & Logistique',
            stepTitle: 'E-commerce, social commerce (WhatsApp) et défis logistiques',
            paragraphText:
              'En Côte d’Ivoire, le commerce en ligne revêt une forme hybride mêlant grandes places de marché et vente conversationnelle de proximité.\n' +
              '• **Social commerce** : des milliers de commerçants vendent directement via WhatsApp Business, Facebook et TikTok grâce à la confiance interpersonnelle et au paiement Mobile Money.\n' +
              '• **Défis du dernier kilomètre** : absence d’adressage postal uniforme dans certains quartiers (recours au partage de position GPS et aux repères vocaux) et préférence fréquente pour le **paiement à la livraison** (« cash on delivery »).\n' +
              '• **Exemple** : un vendeur de chaussures à Adjamé expédie ses colis partout à Abidjan par livreur moto et à l’intérieur du pays via les gares de transport, encaissant par Wave ou à la remise du colis.',
            keyRule:
              'Le succès du e-commerce ivoirien dépend de trois maillons : la confiance client, l’adaptation logistique du dernier kilomètre et la fluidité du paiement mobile.',
            konanTip:
              'Le « cash on delivery » (paiement à la livraison) rassure l’acheteur méfiant, mais coûte cher au vendeur en cas de colis refusé à l’arrivée — d’où l’essor des solutions de séquestre mobile.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Quel défi opérationnel spécifique pèse fortement sur la rentabilité des acteurs du e-commerce en Côte d’Ivoire ?',
              options: [
                'L’absence totale d’utilisateurs de téléphones mobiles à Abidjan',
                'La logistique du dernier kilomètre (adressage complexe) et la gestion du paiement à la livraison (« cash on delivery »)',
                'L’interdiction légale de livrer des colis par moto',
                'Le refus des commerçants d’utiliser WhatsApp',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’adressage parfois imprécis et la préférence des clients pour le paiement en espèces à la livraison renchérissent les coûts logistiques et les taux d’annulation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'E-gouvernement',
            stepTheme: 'Service public digital',
            stepTitle: 'Transformation digitale des services publics et des PME',
            paragraphText:
              'L’État et les administrations publiques (APu) investissent également le numérique pour améliorer l’efficacité administrative et le climat des affaires.\n' +
              '• **E-administration** : télédéclaration et télépaiement des impôts (e-impôts), demandes en ligne de documents administratifs, inscriptions universitaires et suivi des bourses.\n' +
              '• **Bénéfices économiques** : réduction des délais, baisse de la corruption de guichet, meilleure traçabilité des recettes publiques et gain de temps pour les PME.\n' +
              '• **Parcours PME** : comme l’illustre le schéma ci-dessous, une PME ivoirienne passe progressivement de la simple connectivité au pilotage complet par la donnée.',
            keyRule:
              'La digitalisation publique (e-gouvernement) réduit les coûts de transaction entre citoyens, entreprises et État tout en renforçant la transparence.',
            konanTip:
              'Relie ce point au Chapitre 1 : l’e-gouvernement incarne les échanges G2C (État → Citoyens) et G2B (État → Entreprises).',
            visualSchema: {
              type: 'flowchart',
              title: 'Parcours de transformation digitale d’une PME en Côte d’Ivoire',
              caption: 'Étapes progressives de montée en maturité numérique dans le contexte UEMOA.',
              flowchart: {
                direction: 'horizontal',
                steps: [
                  { label: '1. Connectivité', sublabel: 'Smartphone 4G & présence web', kind: 'start', color: 'blue' },
                  { label: '2. Mobile Money', sublabel: 'Encaissement digital inclusif', kind: 'process', color: 'green' },
                  { label: '3. Social / E-commerce', sublabel: 'Catalogue & logistique livraison', kind: 'process', color: 'violet' },
                  { label: '4. Gestion & Données', sublabel: 'Compta cloud, CRM & crédit', kind: 'end', color: 'orange' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Quel bénéfice économique direct la dématérialisation des démarches publiques (e-impôts, guichets en ligne) apporte-t-elle aux entreprises ?',
              options: [
                'Elle multiplie les déplacements physiques obligatoires vers la capitale',
                'Elle réduit les coûts administratifs, raccourcit les délais de traitement et renforce la transparence et la traçabilité',
                'Elle supprime toute obligation comptable des sociétés',
                'Elle réserve l’accès aux services publics aux seules entreprises étrangères',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’e-administration abaisse les coûts de transaction, accélère les procédures (déclarations, certificats) et limite les risques de fraude ou de perte de dossiers.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Fracture numérique',
            stepTheme: 'Inégalités d’accès',
            stepTitle: 'La fracture numérique multidimensionnelle : accès, coût et compétences',
            paragraphText:
              'Si le numérique crée d’immenses opportunités, il risque aussi de creuser les inégalités entre ceux qui maîtrisent les outils digitaux et ceux qui en restent exclus.\n' +
              '• **Fracture territoriale** : concentration des réseaux fibre/4G et des services de livraison dans le Grand Abidjan et les grandes villes par rapport aux zones rurales.\n' +
              '• **Fracture économique & de genre** : prix du smartphone et du gigaoctet de données par rapport au revenu médian ; écart persistant d’équipement et d’usage chez les femmes dans certaines zones.\n' +
              '• **Fracture cognitive (illectronisme)** : posséder un smartphone ne suffit pas si l’on ne sait ni lire une interface, ni détecter une arnaque en ligne, ni utiliser des outils productifs.',
            keyRule:
              'La fracture numérique comporte trois dimensions indissociables : infrastructure (couverture), pouvoir d’achat (coût d’équipement/data) et littératie (compétences d’usage).',
            konanTip:
              'Attention au piège : réduire la fracture numérique ne consiste pas juste à distribuer des tablettes, mais aussi à baisser le coût de la data, électrifier les zones rurales et former aux usages.',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Pourquoi la simple couverture réseau 4G d’une localité rurale ne suffit-elle pas à supprimer totalement la fracture numérique ?',
              options: [
                'Parce que la 4G ne fonctionne pas pour les sites web éducatifs',
                'Parce que la fracture dépend aussi du coût des terminaux et de la data, de l’accès à l’électricité et du niveau de compétences numériques (littératie)',
                'Parce que les habitants ruraux n’ont aucun besoin d’information ou de paiement',
                'Parce que seule la technologie filaire permet de recevoir du Mobile Money',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fracture numérique est multidimensionnelle : elle englobe l’accès physique, l’accessibilité financière (terminaux et forfaits) et la maîtrise des compétences d’usage.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Souveraineté',
            stepTheme: 'Cybersécurité & Talents',
            stepTitle: 'Souveraineté numérique, cybersécurité et formation des talents',
            paragraphText:
              'Pour que la transformation digitale profite durablement à la Côte d’Ivoire et à l’Afrique, trois chantiers stratégiques conditionnent l’avenir de l’écosystème.\n' +
              '• **Souveraineté sur les données et infrastructures** : développement de datacenters locaux et de points d’échange Internet (IXP) pour garder le trafic et les données critiques sur le territoire national.\n' +
              '• **Cybersécurité et confiance** : lutte contre la cybercriminalité, les fraudes au Mobile Money et le piratage, via des lois adaptées et des équipes de réponse aux incidents.\n' +
              '• **Capital humain** : formation massive d’ingénieurs, d’analystes de données, de juristes du numérique et d’entrepreneurs capables de bâtir des champions locaux exportables.',
            keyRule:
              'La souveraineté numérique repose sur un triptyque : infrastructures locales (datacenters/IXP), cadre juridique et cybersécurité fiables, et vivier de talents nationaux qualifiés.',
            konanTip:
              'Retiens le rôle d’un IXP (Internet Exchange Point) : il permet au trafic Internet local entre deux opérateurs ivoiriens de rester en Côte d’Ivoire au lieu de transiter coûteusement par l’Europe !',
            exercise: {
              id: 'lmd_entd_l1_intro_eco_num_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Quel trio d’actions renforce directement la souveraineté numérique d’un pays comme la Côte d’Ivoire ?',
              options: [
                'Fermer toutes les filières universitaires informatiques et interdire le Mobile Money',
                'Développer des infrastructures locales (datacenters, IXP), sécuriser le cyberespace/les données et former des talents technologiques nationaux',
                'Héberger 100 % des registres d’état civil sur des serveurs gratuits non chiffrés à l’étranger',
                'Supprimer toute autorité de régulation des télécommunications',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La souveraineté numérique exige la maîtrise locale des infrastructures critiques (datacenters, points d’échange IXP), la cybersécurité/protection des données et des compétences locales de haut niveau.',
            },
          },
        ],
      }),
    ],
  },
];

