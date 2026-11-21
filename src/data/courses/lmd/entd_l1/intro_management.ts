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

export const INTRO_MANAGEMENT_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : FONDEMENTS DU MANAGEMENT, ORGANISATION ET RÔLES DU MANAGER
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch1',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Fondements du management, organisation et rôles du manager',
    summary:
      'Comprendre l’organisation et ses trois approches, le management comme science et art, la distinction Administration / Management / Gestion, le triangle de performance (Efficacité, Efficience, Pertinence), le cycle PODC et les 10 rôles de Mintzberg.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Management',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch1_p1',
        order: 1,
        title: 'L’organisation, ses approches et la double nature du management (Science et Art)',
        summary:
          'Identifier les six caractéristiques de toute organisation, croiser les approches structurelle, fonctionnelle et systémique, et comprendre pourquoi le management unit rigueur scientifique et talent humain.',
        conceptExplanation:
          "Management et organisation sont indissociables : de la qualité du management dépend la performance collective.\n\n1) Une **organisation** est une entité structurée de moyens, de ressources et de personnes réunis de façon délibérée et coordonnée pour atteindre un objectif commun. Elle se reconnaît à six caractéristiques : un but commun partagé, une structure formelle stable, la division du travail et la spécialisation, un système d’autorité et de pouvoir, la coordination des efforts et la mobilisation de ressources. Elle s’analyse selon trois approches : **structurelle** (répartition des tâches et responsabilités), **fonctionnelle** (pilotage d’activités coordonnées) et **systémique** (système social en interaction avec son environnement interne et externe).\n\n2) Le **management** (Crener & Monteil, 1979) est une façon rationnelle de diriger, organiser, fixer des buts et bâtir des stratégies. Il est à la fois une **Science** (corpus de méthodes, théories et outils analytiques éprouvés) et un **Art** (qualités humaines, intuition, leadership et sens relationnel développés par l’expérience).",
        formulas: [
          {
            name: 'Équation du management complet',
            formula: '\\text{Management} = \\text{Science (Méthodes \\& Outils)} + \\text{Art (Leadership \\& Intuition)}',
            note: 'Les outils techniques seuls échouent sans écoute, jugement et capacité à entraîner les équipes.',
          },
        ],
        keyRule:
          'Toute organisation réunit personnes, ressources et structure coordonnée vers un but commun ; le management la pilote en combinant science (méthodes) et art (qualités humaines).',
        workedExample: {
          title: 'Analyse organisationnelle d’une startup d’économie numérique',
          statement:
            'Une jeune pousse à Abidjan réunit 12 personnes (développeurs, designers, commerciaux, comptable) autour d’une plateforme de télé-éducation. Identifiez quatre caractéristiques prouvant qu’il s’agit d’une organisation et montrez en quoi sa fondatrice exerce le management comme science et comme art.',
          methodSteps: [
            '1) Caractéristiques d’organisation : objectif partagé (démocratiser la formation en ligne), division du travail (code vs vente vs finance), système d’autorité (fondatrice et chefs de pôle), coordination hebdomadaire et ressources (serveurs, capital).',
            '2) Management comme Science : elle suit ses indicateurs de rétention, son budget prévisionnel et applique la méthode Agile.',
            '3) Management comme Art : elle sent les tensions dans l’équipe, arbitre avec tact lors d’une panne serveur et inspire confiance aux investisseurs.',
          ],
          conclusion:
            'L’organisation fournit le cadre collectif structuré ; le management allie rigueur scientifique et leadership humain pour faire réussir ce collectif.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Organisation',
            stepTheme: 'Six critères d’identification',
            stepTitle: 'Qu’est-ce qu’une organisation et comment la reconnaître ?',
            paragraphText:
              'Une entreprise privée, un ministère, un hôpital ou une association étudiante ont un point commun : ce sont toutes des organisations. Pour ne pas confondre organisation et simple foule spontanée, six critères doivent être réunis.\n• **Objectif commun et structure stable** : les membres poursuivent un but partagé dans un cadre durable.\n• **Division du travail et coordination** : chacun a un rôle spécialisé articulé avec celui des autres.\n• **Autorité et ressources** : des règles de pouvoir assurent le pilotage des moyens humains, matériels et financiers.\nExemple : une équipe de football de quartier improvisée le dimanche n’est pas une organisation formelle, contrairement à un club structuré avec statuts, entraîneur, trésorier et calendrier.',
            keyRule:
              'Six marqueurs d’une organisation : but commun, structure stable, division/spécialisation du travail, autorité, coordination et mobilisation de ressources.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants, lequel permet le mieux de distinguer une véritable organisation d’un simple rassemblement spontané de personnes ?',
              options: [
                'La présence simultanée de plus de dix individus dans une même salle',
                'Une entité structurée dotée d’un but commun, d’une division du travail, d’un système d’autorité et d’une coordination délibérée',
                'L’utilisation exclusive de réseaux sociaux grand public',
                'L’absence totale de règles et de hiérarchie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une organisation réunit de manière délibérée et coordonnée des ressources et des personnes autour d’un objectif commun via une structure stable, une spécialisation et une autorité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Trois approches',
            stepTheme: 'Structurelle, fonctionnelle, systémique',
            stepTitle: 'Croiser les trois approches d’analyse de l’organisation',
            paragraphText:
              'Pour comprendre le fonctionnement réel d’une organisation sans angle mort, le manager mobilise trois grilles de lecture complémentaires.\n• **Approche structurelle** : examine l’architecture des postes, la répartition des tâches, les responsabilités et la hiérarchie.\n• **Approche fonctionnelle** : étudie les activités coordonnées et pilotées par des responsables pour atteindre les résultats (produire, vendre, financer).\n• **Approche systémique** : voit l’organisation comme un système social dynamique en interaction permanente avec son environnement interne et externe.\nExemple : analyser l’organigramme relève du structurel ; optimiser la chaîne logistique du fonctionnel ; s’adapter à l’essor de l’IA du systémique.',
            konanTip:
              'Moyen rapide : Structurelle = « qui fait quoi / qui commande » ; Fonctionnelle = « quelles activités sont gérées » ; Systémique = « interactions internes et environnement ».',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle approche définit l’organisation comme un système social composé de règles, de relations, de ressources et d’individus en interaction avec son environnement ?',
              options: [
                'L’approche strictement arithmétique',
                'L’approche systémique',
                'L’approche purement immobilière',
                'L’approche mécaniste fermée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’approche systémique envisage l’organisation comme un système social ouvert qui interagit constamment avec ses environnements interne et externe pour atteindre ses buts.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Science et Art',
            stepTheme: 'Double nature du management',
            stepTitle: 'Articuler le management comme Science et comme Art',
            paragraphText:
              'Peut-on devenir un excellent manager uniquement en lisant des manuels, ou uniquement au « feeling » ? En réalité, le management exige la maîtrise conjointe de deux dimensions.\n• **Le management comme Science** : repose sur un corpus de savoirs systématiques, de modèles économiques, de statistiques, de budgets et d’outils éprouvés.\n• **Le management comme Art** : mobilise les qualités personnelles, l’intuition, l’écoute, le leadership, la créativité et le tact dans des situations humaines singulières.\nExemple : calculer le seuil de rentabilité d’un projet relève de la Science ; convaincre une équipe fatiguée de relever un défi urgent relève de l’Art.',
            keyRule:
              'Sans la science, le manager improvise et commet des erreurs de gestion ; sans l’art, ses outils rationnels restent froids et peinent à mobiliser les humains.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'À quoi correspond précisément la dimension « Art » du management ?',
              options: [
                'À la décoration esthétique des bureaux de la direction',
                'À l’application mécanique de formules financières identiques dans toute situation',
                'Aux qualités personnelles, à l’intuition, au leadership et à l’intelligence relationnelle développés par l’expérience',
                'À la tenue obligatoire des journaux comptables',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La science apporte les méthodes et théories rationnelles, tandis que l’art managérial repose sur l’intuition, le leadership et le savoir-être relationnel.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Rôle du manager',
            stepTheme: 'Faire faire plutôt que faire soi-même',
            stepTitle: 'Comprendre la posture fondamentale du manager',
            paragraphText:
              'Devenir manager marque un changement profond de métier : passer d’expert technique individuel à pilote d’un collectif.\n• **Position charnière** : le manager assure le lien vital entre la direction stratégique (qui fixe les grands objectifs) et les équipes opérationnelles (qui exécutent sur le terrain).\n• **Mission essentielle** : définir les priorités, organiser les méthodes de travail, animer et contrôler, afin d’obtenir les résultats **avec et par les autres**.\nExemple : un brillant développeur promu chef d’équipe échoue s’il continue à coder tout seul tard le soir au lieu de répartir les tâches, débloquer ses juniors et garantir les délais.',
            konanTip:
              'Piège fréquent du jeune manager : vouloir tout faire soi-même par peur que ce soit moins bien fait. Manager, c’est réussir PAR l’action de son équipe !',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle erreur commet fréquemment un technicien talentueux tout juste promu manager d’équipe ?',
              options: [
                'Clarifier les priorités et accompagner ses collaborateurs',
                'Continuer à exécuter lui-même toutes les tâches techniques au lieu d’organiser et faire agir son équipe',
                'Assurer le lien entre la direction et l’équipe terrain',
                'Établir un calendrier de suivi des projets',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le manager n’exécute pas toutes les tâches à la place des autres : son rôle est de définir les méthodes, fixer les priorités et obtenir des résultats par et avec son équipe.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Universalité',
            stepTheme: 'Champ d’application du management',
            stepTitle: 'Savoir que le management dépasse le seul cadre marchand',
            paragraphText:
              'On associe spontanément le mot « management » aux grandes multinationales privées, mais ses principes s’appliquent à toute organisation humaine structurée.\n• **Entreprises privées** : recherche de rentabilité, parts de marché et innovation.\n• **Organisations publiques** (ministères, universités, hôpitaux) : optimisation de la qualité du service public sous contrainte budgétaire.\n• **Associations et ONG** : maximisation de l’impact social avec des dons et bénévoles.\nExemple : une ONG de santé rurale en Côte d’Ivoire doit planifier ses campagnes de vaccination, organiser sa logistique du froid et motiver ses équipes tout comme une entreprise.',
            keyRule:
              'Le management est universel : il concerne les entreprises lucratives autant que les administrations publiques, hôpitaux, universités et ONG.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Parmi ces affirmations sur le champ d’application du management, laquelle est exacte ?',
              options: [
                'Le management s’applique uniquement aux banques cotées en bourse',
                'Le management concerne toute organisation structurée (entreprise, administration publique, hôpital, ONG, association)',
                'Les associations à but non lucratif n’ont aucun besoin de management',
                'Seules les usines industrielles utilisent les méthodes managériales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès qu’une organisation réunit des personnes et des ressources pour atteindre un objectif commun, le management est indispensable, dans le secteur marchand comme non marchand.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Compétences de Katz',
            stepTheme: 'Trois compétences du manager',
            stepTitle: 'Dosage des compétences techniques, humaines et conceptuelles',
            paragraphText:
              'Le chercheur Robert Katz a montré que tout manager mobilise trois types de compétences, dont le poids varie selon le niveau hiérarchique.\n• **Compétences techniques** : maîtrise des outils et savoir-faire du métier (indispensables au manager de proximité).\n• **Compétences humaines** : écoute, communication, empathie, gestion des conflits (cruciales à TOUS les niveaux).\n• **Compétences conceptuelles** : vision globale, analyse stratégique, compréhension de l’environnement (prépondérantes chez les dirigeants).\nExemple : un chef d’équipe réseau doit maîtriser les routeurs (technique), tandis que le DG doit surtout anticiper les mutations du marché (conceptuel).',
            keyRule:
              'Plus on monte dans la hiérarchie, plus les compétences conceptuelles prennent le pas sur la technique pure ; les compétences humaines restent vitales à tous les échelons.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Selon Robert Katz, quelle catégorie de compétences prend une importance prépondérante au sommet stratégique (Direction Générale) ?',
              options: [
                'La saisie rapide sur clavier',
                'Les compétences conceptuelles (vision globale, pensée stratégique et systémique)',
                'La réparation manuelle des machines d’atelier',
                'L’archivage physique des factures papier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les dirigeants de haut niveau ont avant tout besoin de compétences conceptuelles pour appréhender l’organisation dans sa globalité et anticiper les évolutions stratégiques.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch1_p2',
        order: 2,
        title: 'Triptyque Administration / Management / Gestion et triangle de performance',
        summary:
          'Distinguer rigoureusement Administration (« Pourquoi ? »), Management (« Comment ? ») et Gestion (« Combien ? »), puis mesurer la performance à travers l’efficacité, l’efficience et la pertinence.',
        conceptExplanation:
          "En sciences des organisations, trois termes souvent employés comme synonymes renvoient en réalité à trois niveaux hiérarchiques et logiques distinctes :\n• **Administration (« Pourquoi ? »)** — Sommet stratégique : Penser et décider. Elle fixe la raison d’être, la vision, les objectifs ultimes, les grandes politiques et le cadre juridique de l’ensemble de l’organisation.\n• **Management (« Comment ? »)** — Niveau intermédiaire : Conduire et mobiliser. Il anime les équipes, motive, coordonne les efforts et pilote les processus pour concrétiser les objectifs.\n• **Gestion (« Combien ? »)** — Niveau opérationnel : Exécuter et contrôler. Elle applique les règles techniques et optimise quotidiennement les ressources (comptabilité, paie, stocks, budgets).\n\nParallèlement, la performance du manager s’évalue selon le **triangle de performance** de Gilbert : la **Pertinence** (adéquation entre objectifs et moyens), l’**Efficacité** (degré d’atteinte des objectifs fixés) et l’**Efficience** (rapport entre résultats obtenus et ressources consommées).",
        formulas: [
          {
            name: 'Indicateurs d’Efficacité et d’Efficience',
            formula: '\\text{Efficacité} = \\frac{\\text{Résultat obtenu}}{\\text{Objectif visé}} \\qquad \\text{Efficience} = \\frac{\\text{Résultat obtenu}}{\\text{Moyens consommés}}',
            note: 'Être performant signifie être à la fois efficace (atteindre la cible) et efficient (sans gaspillage de coûts, de temps ou d’énergie).',
          },
        ],
        keyRule:
          'Administration = Pourquoi ? (penser la stratégie) ; Management = Comment ? (mobiliser les équipes) ; Gestion = Combien ? (optimiser les ressources). Performance = Efficacité + Efficience + Pertinence.',
        workedExample: {
          title: 'Diagnostic hiérarchique et évaluation de performance d’une startup ENTD',
          statement:
            'Dans une startup digitale, (a) le Conseil décide de s’implanter au Sénégal en 2027, (b) la responsable commerciale motive son équipe pour signer 40 PME avec un budget de 4 M FCFA, (c) le comptable règle les factures fournisseurs et suit la paie. Finalement, l’équipe signe 42 PME en ne dépensant que 3,2 M FCFA. Classez (a), (b), (c) et évaluez la performance commerciale.',
          methodSteps: [
            '1) (a) Administration (« Pourquoi ? ») : décision stratégique globale au sommet.',
            '2) (b) Management (« Comment ? ») : conduite, animation et mobilisation des personnes et processus.',
            '3) (c) Gestion (« Combien ? ») : exécution technique quotidienne et contrôle des ressources.',
            '4) Performance : objectif dépassé (42/40 = 105 % → Efficace) avec moins de budget que prévu (3,2 M au lieu de 4 M → Efficiente).',
          ],
          conclusion:
            'L’équipe a combiné efficacité (cible atteinte et dépassée) et efficience (économies de ressources), sous une gouvernance clairement répartie entre Administration, Management et Gestion.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Triptyque clé',
            stepTheme: 'Administration vs Management vs Gestion',
            stepTitle: 'Maîtriser la distinction Administration, Management et Gestion',
            paragraphText:
              'Bien que complémentaires au quotidien, Administration, Management et Gestion répondent à trois questions fondamentales et se situent à trois étages de l’organisation.\n• **Administration (« Pourquoi ? »)** : au plus haut niveau, elle pense et décide le cap stratégique, les valeurs et le cadre légal global.\n• **Management (« Comment ? »)** : au niveau intermédiaire, il conduit, motive et coordonne les femmes, les hommes et les processus.\n• **Gestion (« Combien ? »)** : au niveau opérationnel, elle exécute techniquement et contrôle l’utilisation optimale des moyens (stocks, factures, paie).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparatif : Administration vs Management vs Gestion',
              caption: 'Trois fonctions hiérarchiques complémentaires pour piloter toute organisation.',
              tableData: {
                headers: ['Critère', 'Administration', 'Management', 'Gestion'],
                rows: [
                  ['Question clé', 'Pourquoi ?', 'Comment ?', 'Combien ?'],
                  ['Focus principal', 'Ensemble de l’organisation', 'Personnes & processus', 'Ressources & techniques'],
                  ['Niveau hiérarchique', 'Sommet stratégique (DG / CA)', 'Niveau intermédiaire (Cadres)', 'Niveau opérationnel'],
                  ['Verbes d’action', 'Penser et décider', 'Conduire et mobiliser', 'Exécuter et contrôler'],
                  ['Exemple concret', 'Décider de lancer une nouvelle app', 'Animer l’équipe pour atteindre 15 M FCFA de CA', 'Payer les fournisseurs et suivre les stocks'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Lorsqu’un comptable vérifie les bons de commande, règle les factures fournisseurs et suit quotidiennement la trésorerie et la paie, de quel domaine relève principalement son action ?',
              options: [
                'L’Administration stratégique',
                'La Gestion opérationnelle (« Combien ? »)',
                'Le leadership politique',
                'La stratégie de fusion internationale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’application des règles techniques, le contrôle des dépenses, la paie et le suivi des ressources au quotidien relèvent de la Gestion (« Combien ? »).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Administration',
            stepTheme: 'Sommet stratégique',
            stepTitle: 'Identifier les actes relevant de l’Administration',
            paragraphText:
              'Au sommet de l’organisation, l’Administration fixe les fondations et le cap de long terme sans se perdre dans les détails techniques du jour le jour.\n• **Raison d’être et objectifs ultimes** : définir la mission, les valeurs et les grandes orientations politiques.\n• **Cadre structurel et juridique** : arrêter la forme sociétaire, la gouvernance et les alliances majeures.\nExemple : lorsque la Direction Générale et les associés d’une startup décident d’ouvrir une filiale au Burkina Faso et de lever des fonds, ils exercent la fonction d’Administration (« Pourquoi ? »).',
            konanTip:
              'Ne confonds pas « Administration » (au sens de Fayol : gouvernance suprême du sommet) avec « paperasserie administrative » de secrétariat !',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Le Conseil d’Administration et la Direction Générale d’une banque décident d’orienter leur stratégie vers le financement des PME numériques sur les 5 prochaines années. Quel niveau ce choix illustre-t-il ?',
              options: [
                'La Gestion des fournitures de bureau',
                'L’Administration (niveau le plus élevé : penser et décider le cap)',
                'L’exécution manuelle des guichets',
                'Le contrôle de caisse quotidien',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Définir les grandes orientations stratégiques et les objectifs ultimes de l’ensemble de l’organisation au sommet relève de l’Administration.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Performance',
            stepTheme: 'Efficacité vs Efficience',
            stepTitle: 'Distinguer Efficacité et Efficience sans jamais les confondre',
            paragraphText:
              'Un manager qui atteint ses objectifs en brûlant le double du budget ou en épuisant son équipe met l’entreprise en danger : c’est pourquoi le management distingue deux critères clés.\n• **Efficacité** : capacité à atteindre les objectifs fixés (mesure l’écart entre résultat obtenu et objectif visé, indépendamment des moyens).\n• **Efficience** : capacité à atteindre ces résultats en optimisant les ressources consommées (argent, temps, énergie, matière) — « faire mieux avec moins ».\nExemple : livrer 100 colis dans les délais en utilisant 2 livreurs au lieu de 4 (tout en respectant la qualité) est à la fois efficace et efficient.',
            formula: {
              name: 'Distinction Efficacité / Efficience',
              formula: '\\text{Efficacité} \\rightarrow \\text{Atteindre le but} \\qquad | \\qquad \\text{Efficience} \\rightarrow \\text{Optimiser les ressources}',
              note: 'Un chirurgien qui réussit une opération en gaspillant le triple de matériel stérile est efficace mais peu efficient.',
            },
            keyRule:
              'Efficacité = atteindre la cible ; Efficience = optimiser le ratio résultats / ressources consommées.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Une équipe marketing devait acquérir 500 nouveaux clients avec un budget de 2 000 000 FCFA. Elle acquiert exactement 500 clients, mais dépense 3 800 000 FCFA. Comment qualifier sa performance ?',
              options: [
                'Efficace et très efficiente',
                'Efficace (objectif atteint), mais non efficiente (dépassement massif des ressources)',
                'Inefficace mais très efficiente',
                'Ni efficace ni pertinente sur le volume clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’objectif quantitatif de 500 clients est atteint (efficacité = 100 %), mais le budget consommé a presque doublé (défaut majeur d’efficience).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Pertinence',
            stepTheme: 'Triangle de Gilbert',
            stepTitle: 'Compléter le triangle de performance avec la Pertinence',
            paragraphText:
              'Être efficace et efficient sur le mauvais objectif conduit droit à l’échec stratégique : le triangle de Gilbert ajoute donc un troisième sommet indispensable, la **Pertinence**.\n• **Pertinence** : adéquation entre les objectifs fixés et les moyens disponibles / les attentes réelles du marché.\n• **Cohérence du triangle** : Objectifs ↔ Moyens (Pertinence) ; Objectifs ↔ Résultats (Efficacité) ; Moyens ↔ Résultats (Efficience).\nExemple : produire avec une efficience record des disquettes informatiques en 2026 est parfaitement inutile : l’objectif manque totalement de pertinence !',
            keyRule:
              'Performance globale = Pertinence (choisir les bons objectifs adaptés aux moyens et au marché) + Efficacité (les atteindre) + Efficience (au moindre coût).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Dans le triangle de la performance organisationnelle, que mesure précisément la « pertinence » ?',
              options: [
                'Le montant brut des ventes sans tenir compte des charges',
                'L’adéquation entre les objectifs fixés, les moyens mobilisables et les besoins réels de l’environnement',
                'Le nombre d’heures supplémentaires effectuées par les cadres',
                'La vitesse de saisie d’une facture comptable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La pertinence vérifie que l’organisation s’est fixé des objectifs réalistes et adaptés aux moyens disponibles ainsi qu’aux attentes du marché.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'Économie vs Efficience',
            stepTitle: 'Ne pas confondre réduction aveugle des coûts et efficience',
            paragraphText:
              'Certains gestionnaires croient être efficients simplement en coupant toutes les dépenses, mais une économie mal placée détruit souvent la qualité et l’efficacité.\n• **Couper les coûts à l’aveugle** : baisser la qualité des serveurs ou supprimer toute formation réduit la facture immédiate, mais provoque pannes, départs de talents et perte de clients.\n• **Véritable efficience** : produire au moins la même valeur (ou plus) en éliminant les gaspillages, doublons et temps morts.\nExemple : automatiser la génération des factures PDF réduit le coût et les erreurs tout en accélérant le service client.',
            konanTip:
              'L’efficience n’est jamais « dépenser le moins possible à n’importe quel prix », c’est maximiser le rapport Valeur créée / Ressources engagées.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Parmi les actions suivantes d’un directeur informatique, laquelle illustre une véritable démarche d’efficience ?',
              options: [
                'Couper Internet deux jours par semaine pour économiser sur la facture télécom',
                'Automatiser les sauvegardes et tests logiciels pour réduire les pannes de 60 % sans augmenter le budget',
                'Supprimer les antivirus pour économiser les licences',
                'Doubler le budget sans améliorer aucun service',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’automatisation améliore fortement la fiabilité et libère du temps ingénieur à budget constant : c’est un gain réel d’efficience.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas comparatif',
            stepTheme: 'Calcul d’efficience comparée',
            stepTitle: 'Comparer la productivité et l’efficience de deux équipes',
            paragraphText:
              'Les tableaux de bord managériaux traduisent l’efficience en ratios concrets pour allouer les ressources de façon objective entre unités.\n• **Équipe A (Yopougon)** : réalise 120 installations fibre en un mois avec 6 techniciens (coût total 3 000 000 FCFA) → 20 installations/technicien et 25 000 FCFA/installation.\n• **Équipe B (Cocody)** : réalise 140 installations fibre avec 10 techniciens (coût total 4 900 000 FCFA) → 14 installations/technicien et 35 000 FCFA/installation.\n• **Verdict** : B a un volume brut plus élevé, mais A est nettement plus efficiente et mérite d’être prise comme modèle d’organisation.',
            formula: {
              name: 'Coût unitaire d’efficience',
              formula: '\\text{Coût par unité produite} = \\frac{\\text{Coût total engagé}}{\\text{Volume de résultats conformes}}',
              note: 'Plus le coût unitaire à qualité égale est bas, plus l’efficience est forte.',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Un centre d’appels A traite 900 tickets clients résolus avec 6 conseillers. Un centre B traite 1 000 tickets résolus avec 10 conseillers. Lequel est le plus efficient sur la productivité par conseiller ?',
              options: [
                'Le centre B (100 tickets par conseiller)',
                'Le centre A (150 tickets par conseiller)',
                'Ils ont exactement la même efficience',
                'Impossible à comparer sans connaître la couleur des locaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Centre A : 900 / 6 = 150 tickets résolus par conseiller ; Centre B : 1 000 / 10 = 100 tickets par conseiller. Le centre A est donc plus efficient.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch1_p3',
        order: 3,
        title: 'Les 4 piliers PODC, les 10 rôles de Mintzberg et la distinction Manager / Leader',
        summary:
          'Maîtriser la boucle PODC (Planifier, Organiser, Diriger, Contrôler), connaître les 10 rôles du manager selon Henry Mintzberg et différencier manager et leader.',
        conceptExplanation:
          "Le travail concret du manager s’articule autour d’un cycle continu en quatre piliers appelé **PODC** :\n1) **Planifier** : fixer les objectifs (SMART) et choisir les stratégies et plans d’action.\n2) **Organiser** : répartir les tâches, structurer les équipes et allouer les ressources.\n3) **Diriger** : motiver, communiquer, guider et exercer le leadership au quotidien.\n4) **Contrôler** : mesurer les réalisations, détecter les écarts et corriger l’action (rétroaction).\n\nSur le terrain réel, Henry Mintzberg (1973) a observé des dirigeants et identifié **10 rôles** regroupés en 3 familles : **Interpersonnels** (Symbole, Leader, Agent de liaison), **Informationnels** (Observateur actif, Diffuseur, Porte-parole) et **Décisionnels** (Entrepreneur, Régulateur, Distributeur de ressources, Négociateur). Enfin, il distingue le **Manager** (centré sur la gestion rationnelle d’un périmètre et des résultats) du **Leader** (qui inspire et donne aux autres l’envie volontaire de le suivre).",
        formulas: [
          {
            name: 'Boucle du processus managérial',
            formula: '\\text{Planifier} \\longrightarrow \\text{Organiser} \\longrightarrow \\text{Diriger} \\longrightarrow \\text{Contrôler} \\longrightarrow \\text{Ajuster}',
            note: 'Le contrôle alimente la planification suivante dans une boucle d’amélioration continue.',
          },
        ],
        keyRule:
          'PODC structure le cycle managérial ; Mintzberg décrit la réalité quotidienne du manager à travers 10 rôles (3 interpersonnels, 3 informationnels, 4 décisionnels).',
        workedExample: {
          title: 'Rôles du manager et cycle PODC pour organiser une Journée de l’Innovation',
          statement:
            'Vous êtes désigné(e) responsable de l’organisation d’une Journée de l’Innovation sur votre campus avec un budget de 1 500 000 FCFA. Illustrez les 4 étapes du cycle PODC et donnez un exemple de chacun des 3 groupes de rôles de Mintzberg.',
          methodSteps: [
            '1) PODC : Planifier (fixer date, thème et budget prévisionnel), Organiser (créer les commissions logistique, communication, jury), Diriger (motiver les bénévoles lors des répétitions), Contrôler (vérifier les dépenses et évaluer la satisfaction après l’événement).',
            '2) Rôle Interpersonnel : accueillir officiellement les parrains d’entreprise (Symbole) et nouer des contacts avec des startups externes (Agent de liaison).',
            '3) Rôle Informationnel : collecter les confirmations des intervenants (Observateur) et les relayer aux équipes (Diffuseur) ou à la presse étudiante (Porte-parole).',
            '4) Rôle Décisionnel : arbitrer le budget entre sonorisation et prix gagnants (Distributeur de ressources) et gérer une panne de projecteur le jour J (Régulateur).',
          ],
          conclusion:
            'Un événement réussi mobilise simultanément la logique séquentielle PODC et les 10 rôles relationnels, informationnels et décisionnels du manager.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cycle PODC',
            stepTheme: 'Les 4 fonctions managériales',
            stepTitle: 'Visualiser et maîtriser la boucle PODC',
            paragraphText:
              'Issu des travaux fondateurs d’Henri Fayol (POCCC) puis modernisé en quatre temps universels, le cycle **PODC** décrit la démarche logique de tout projet ou pilotage d’équipe.\n• **Planifier** : définir où l’on veut aller (objectifs) et comment y parvenir (plans, budgets).\n• **Organiser** : bâtir la structure, répartir les missions et affecter les moyens humains, financiers et techniques.\n• **Diriger (Impulser)** : communiquer, motiver, former et animer les équipes.\n• **Contrôler** : comparer les résultats obtenus aux prévisions et déclencher les corrections nécessaires.',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Boucle dynamique du processus managérial (PODC)',
              caption: 'Le contrôle ne termine pas le cycle : il fournit les retours d’expérience pour planifier le cycle suivant.',
              cycle: {
                centerLabel: 'PODC',
                centerSublabel: 'Pilotage continu',
                nodes: [
                  {
                    title: '1. Planifier',
                    subtitle: 'Fixer les objectifs et anticiper les moyens',
                    color: 'blue',
                  },
                  {
                    title: '2. Organiser',
                    subtitle: 'Structurer, répartir les tâches et allouer',
                    color: 'violet',
                  },
                  {
                    title: '3. Diriger',
                    subtitle: 'Motiver, communiquer et animer les équipes',
                    color: 'green',
                  },
                  {
                    title: '4. Contrôler',
                    subtitle: 'Mesurer les écarts et ajuster l’action',
                    color: 'orange',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Dans quel ordre logique se déploient les quatre piliers du processus managérial PODC ?',
              options: [
                'Contrôler → Diriger → Planifier → Organiser',
                'Planifier → Organiser → Diriger → Contrôler',
                'Organiser → Contrôler → Planifier → Diriger',
                'Diriger → Planifier → Contrôler → Organiser',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On commence par définir les objectifs et stratégies (Planifier), puis on met en place les ressources et tâches (Organiser), on anime les équipes (Diriger) et on vérifie/corrige les résultats (Contrôler).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Mintzberg (1/3)',
            stepTheme: 'Rôles interpersonnels',
            stepTitle: 'Maîtriser les 3 rôles interpersonnels : Symbole, Leader, Agent de liaison',
            paragraphText:
              'En observant cinq dirigeants pendant plusieurs semaines, Henry Mintzberg a constaté que le manager passe l’essentiel de son temps à interagir plutôt qu’à planifier seul dans son bureau. Trois rôles découlent de son autorité formelle :\n• **Symbole (Figurehead)** : accomplir les obligations protocolaires, légales ou cérémoniales (signer un contrat officiel, remettre un prix).\n• **Leader** : guider, former, encourager et motiver ses collaborateurs.\n• **Agent de liaison** : tisser et entretenir un réseau de contacts utiles à l’intérieur comme à l’extérieur de l’entreprise.\nExemple : le directeur d’une ESN qui représente sa société au salon digital d’Abidjan et y noue des partenariats agit comme Symbole et Agent de liaison.',
            keyRule:
              'Les 3 rôles interpersonnels (Symbole, Leader, Agent de liaison) s’appuient sur le statut et le réseau humain du manager.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Un responsable technique entretient régulièrement des relations avec des fournisseurs cloud externes et d’autres départements pour faciliter les futurs projets. Quel rôle de Mintzberg exerce-t-il ?',
              options: [
                'Le rôle de régulateur de crise',
                'Le rôle d’agent de liaison',
                'Le rôle de comptable analytique',
                'Le rôle de porte-parole boursier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Créer et entretenir un réseau de contacts internes et externes pour fluidifier le fonctionnement de l’organisation correspond exactement au rôle d’agent de liaison.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Mintzberg (2/3)',
            stepTheme: 'Rôles informationnels',
            stepTitle: 'Maîtriser les 3 rôles informationnels : Observateur, Diffuseur, Porte-parole',
            paragraphText:
              'Grâce à son réseau d’agent de liaison, le manager devient le centre nerveux de l’information dans son unité et joue trois rôles complémentaires :\n• **Observateur actif (Monitor)** : capter en continu les informations internes (remontées terrain) et externes (veille concurrentielle, évolutions réglementaires).\n• **Diffuseur (Disseminator)** : filtrer et transmettre aux membres de son équipe les informations utiles à leur travail.\n• **Porte-parole (Spokesman)** : communiquer les résultats, projets et positions de son unité vers l’extérieur (direction générale, conseil, clients, médias).\nExemple : un chef de projet qui lit une nouvelle directive UEMOA (Observateur), l’explique à son équipe (Diffuseur) et présente l’avancement au comité de direction (Porte-parole).',
            konanTip:
              'Retiens le sens du flux d’information : Observateur = « vers moi » ; Diffuseur = « vers mon équipe interne » ; Porte-parole = « vers l’extérieur ».',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Lorsqu’un manager présente aux journalistes et aux partenaires externes le bilan annuel et la stratégie de son organisation, quel rôle informationnel de Mintzberg assume-t-il ?',
              options: [
                'Observateur actif',
                'Diffuseur interne',
                'Porte-parole',
                'Distributeur de ressources',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le porte-parole transmet l’information officielle de l’organisation ou de son unité vers des interlocuteurs extérieurs (conseil d’administration, public, médias, partenaires).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Mintzberg (3/3)',
            stepTheme: 'Rôles décisionnels',
            stepTitle: 'Maîtriser les 4 rôles décisionnels : Entrepreneur, Régulateur, Distributeur, Négociateur',
            paragraphText:
              'L’information collectée n’a d’intérêt que si elle débouche sur des actes : c’est la dimension décisionnelle de Mintzberg, qui regroupe quatre rôles majeurs.\n• **Entrepreneur** : initier le changement, saisir des opportunités, lancer de nouveaux projets.\n• **Régulateur (Disturbance handler)** : intervenir à chaud pour résoudre les crises, conflits sociaux ou pannes imprévues.\n• **Distributeur de ressources** : arbitrer qui reçoit quel budget, quel temps et quels effectifs.\n• **Négociateur** : représenter l’organisation lors des négociations clés (contrats clients majeurs, accords syndicaux).\nExemple : face à une grève soudaine ou à un serveur critique tombé en panne, le manager endosse le rôle de Régulateur.',
            keyRule:
              'Total des 10 rôles de Mintzberg : 3 interpersonnels + 3 informationnels + 4 décisionnels (Entrepreneur, Régulateur, Distributeur de ressources, Négociateur).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Un serveur principal tombe en panne en pleine journée commerciale et le responsable IT réorganise immédiatement les équipes pour rétablir le service et calmer les clients. Quel rôle de Mintzberg exerce-t-il prioritairement ?',
              options: [
                'Symbole cérémonial',
                'Régulateur (gestionnaire de perturbations)',
                'Porte-parole publicitaire',
                'Observateur passif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Faire face aux incidents graves, crises imprévues et conflits qui menacent la continuité de l’activité relève du rôle décisionnel de Régulateur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Manager vs Leader',
            stepTheme: 'Autorité statutaire vs Influence inspirante',
            stepTitle: 'Distinguer rigoureusement le Manager et le Leader',
            paragraphText:
              'Dans la vie des organisations, tous les managers ne sont pas de vrais leaders, et certains leaders inspirants n’ont aucun titre hiérarchique officiel.\n• **Le Manager** : occupe une fonction formelle (secteur, projet, entreprise) ; il est comptable des résultats atteints avec et par son équipe grâce aux méthodes du management (planifier, budgéter, contrôler).\n• **Le Leader** : inspire par sa vision et son charisme ; il donne aux autres l’envie sincère et volontaire de le suivre, parfois même au-delà de ce qu’ils croyaient possible.\nExemple : un cadre qui applique strictement les budgets sans inspirer personne est un manager sans leadership ; l’idéal moderne consiste à unir les deux.',
            keyRule:
              'On obéit au manager par l’autorité de son poste ; on suit le leader par adhésion volontaire et confiance.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle différence fondamentale distingue un Leader d’un simple Manager ?',
              options: [
                'Le leader refuse toujours de travailler avec une équipe',
                'Le manager tire son autorité de sa fonction et pilote les résultats/processus, tandis que le leader inspire et donne aux autres l’envie volontaire de le suivre',
                'Le leader s’occupe uniquement de payer les factures comptables',
                'Il n’existe aucune différence entre les deux termes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le management regroupe les outils et responsabilités liés à la fonction de direction ; le leadership repose sur la capacité d’influence, de vision et d’entraînement humain.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Boucle de contrôle',
            stepTheme: 'Préventif, concomitant et rétroactif',
            stepTitle: 'Savoir pratiquer le contrôle avant, pendant et après l’action',
            paragraphText:
              'Le pilier « Contrôler » du cycle PODC est souvent réduit à tort à une sanction après coup. Un bon manager déploie le contrôle à trois moments stratégiques.\n• **Contrôle préalable (proactif)** : vérifier ressources, compétences et sécurité avant le démarrage (ex. : test d’intrusion avant lancement d’une app).\n• **Contrôle concomitant (en cours d’action)** : suivre les jalons et tableaux de bord pendant le projet pour corriger à temps.\n• **Contrôle rétroactif (a posteriori)** : analyser l’écart final après livraison pour tirer des leçons pour le cycle suivant.\nExemple : vérifier la solvabilité d’un client avant d’accorder un crédit est un contrôle préalable.',
            konanTip:
              'En management moderne, « contrôler » ne veut pas dire « fliquer » mais « mesurer les écarts pour aider l’équipe à corriger la trajectoire ».',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Vérifier les qualifications techniques des candidats et tester la capacité des serveurs AVANT le lancement officiel d’une plateforme e-learning relève de quel type de contrôle ?',
              options: [
                'Du contrôle rétroactif uniquement',
                'Du contrôle préalable (préventif)',
                'Du rôle de porte-parole',
                'De l’abandon de responsabilité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le contrôle préalable intervient en amont de l’action pour prévenir les incidents en s’assurant de la conformité des ressources et des conditions.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'Diagnostic managérial',
            stepTitle: 'Repérer un maillon défaillant dans le cycle PODC',
            paragraphText:
              'Face à un échec de projet, la grille PODC permet au manager d’identifier immédiatement où la chaîne s’est brisée.\n• **Planification défaillante** : objectifs flous, irréalistes ou délais impossibles.\n• **Organisation défaillante** : tâches chevauchantes (« qui fait quoi ? » flou), manque d’outils ou de budget.\n• **Direction défaillante** : conflits non traités, silence managérial, démotivation.\n• **Contrôle défaillant** : aucun suivi intermédiaire jusqu’au constat trop tardif de l’échec.\nExemple : si deux services développent la même fonctionnalité sans le savoir et manquent d’un chef désigné, le défaut vient prioritairement du pilier « Organiser ».',
            keyRule:
              'Diagnostic rapide d’un échec : objectif flou = Planifier ; doublons/manque de moyens = Organiser ; démotivation = Diriger ; dérive tardive = Contrôler.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch1_p3_q7',
              type: 'mcq',
              prompt:
                'Dans un projet de développement logiciel, deux équipes codent exactement le même module sans le savoir car personne n’a réparti les responsabilités ni défini d’organigramme de projet. Quel pilier du PODC a failli ?',
              options: [
                'Planifier uniquement',
                'Organiser',
                'Contrôler financièrement',
                'Communiquer avec la presse',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Répartir clairement les tâches, éviter les doublons et définir les responsabilités et interactions entre équipes relève directement du pilier « Organiser ».',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 2 : LES GRANDES ÉCOLES DE PENSÉE EN MANAGEMENT
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch2',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Les grandes écoles de pensée en management',
    summary:
      'Retracer l’évolution historique de la pensée managériale : école classique (Taylor, Ford, Fayol, Weber), école des relations humaines (Mayo, Maslow, Herzberg, McGregor), école néoclassique (Drucker), approche systémique, théorie de la contingence et qualité totale.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Management',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch2_p1',
        order: 1,
        title: 'L’École classique : Taylor (OST), Fayol (administration) et Weber (bureaucratie)',
        summary:
          'Maîtriser les fondements mécanistes et rationalistes de l’école classique, l’Organisation Scientifique du Travail de Taylor, les 6 fonctions et principes de Fayol ainsi que la bureaucratie rationnelle-légale de Max Weber.',
        conceptExplanation:
          "Née dans le sillage de la révolution industrielle pour intégrer une main-d’œuvre nombreuse dans les grandes usines, l’**école classique** repose sur deux postulats implicites : le **postulat mécaniste** (l’entreprise est une grande machine dont les hommes sont des pièces) et le **postulat rationaliste** (le salarié cherche la sécurité, évite les responsabilités et travaille surtout pour le salaire). Elle s’appuie sur quatre principes fondateurs : organisation hiérarchique pyramidale, principe d’exception (la hiérarchie traite les cas inhabituels), unité de commandement et spécialisation poussée.\n\nTrois auteurs majeurs la structurent : **Frederick W. Taylor** (Organisation Scientifique du Travail : séparation conception/exécution, étude scientifique temps-mouvements, salaire au rendement), prolongé par **Henry Ford** (chaîne d’assemblage, standardisation, Five Dollars Day) ; **Henri Fayol** (approche administrative globale : 6 fonctions de l’entreprise et fonction administrative POCCC — Prévoir, Organiser, Commander, Coordonner, Contrôler) ; et **Max Weber** (organisation bureaucratique fondée sur l’autorité rationnelle-légale, des règles écrites impersonnelles et la sélection par la compétence).",
        formulas: [
          {
            name: 'Fonction administrative selon Henri Fayol (POCCC)',
            formula: '\\text{Administrer} = \\text{Prévoir} + \\text{Organiser} + \\text{Commander} + \\text{Coordonner} + \\text{Contrôler}',
            note: 'Fayol est le précurseur direct du cycle moderne PODC et des 14 principes de gestion.',
          },
        ],
        keyRule:
          'Taylor rationalise l’atelier (le bas de la pyramide), Fayol rationalise la direction générale (le haut de la pyramide) et Weber rationalise les règles et la légitimité de l’autorité.',
        workedExample: {
          title: 'Identifier les principes classiques dans un centre de traitement bancaire',
          statement:
            'Une banque traite 10 000 dossiers de crédit par mois : un service « Méthodes » chronomètre chaque étape, les agents exécutent une seule vérification précise, chaque agent ne rend compte qu’à un seul chef d’équipe, et les dossiers litigieux remontent au directeur. Reliez chaque pratique à un concept classique.',
          methodSteps: [
            '1) Service « Méthodes » chronométrant les tâches + séparation conception/exécution → OST de Frederick Taylor.',
            '2) Agent affecté à une seule vérification répétitive → Principe de spécialisation (division horizontale).',
            '3) Un seul chef par agent → Principe d’unité de commandement (Henri Fayol).',
            '4) Remontée des seuls dossiers litigieux au directeur → Principe d’exception.',
          ],
          conclusion:
            'Même dans les services modernes, les apports classiques restent utiles pour les processus standardisés à fort volume, à condition d’en corriger la rigidité humaine.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Postulats classiques',
            stepTheme: 'Mécanisme et 4 principes',
            stepTitle: 'Comprendre les postulats et les 4 principes de l’école classique',
            paragraphText:
              'Face à l’essor des grandes usines industrielles, les premiers théoriciens ont cherché une méthode unique et universelle (*One Best Way*) pour maximiser la productivité.\n' +
              '• **Postulat mécaniste** : l’entreprise fonctionne comme une horloge ; chaque salarié est un rouage remplaçable.\n' +
              '• **Postulat rationaliste** : les processus techniques sont parfaitement maîtrisables et le travailleur est supposé motivé avant tout par le gain financier.\n' +
              '• **Les 4 principes fondateurs** : organisation hiérarchique pyramidale, principe d’exception (seuls les problèmes inhabituels remontent aux chefs), unité de commandement et spécialisation des tâches.',
            keyRule:
              'L’école classique privilégie l’ordre, la discipline, la standardisation et le rendement matériel, mais néglige la dimension psychologique et sociale du travail.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Dans l’école classique des organisations, que signifie exactement le « principe d’exception » ?',
              options: [
                'Les règles ne s’appliquent jamais aux cadres supérieurs',
                'Les subordonnés gèrent les tâches routinières tandis que seuls les problèmes exceptionnels sont soumis à la hiérarchie',
                'Chaque salarié peut choisir librement ses propres horaires sans prévenir',
                'L’entreprise ne recrute que des profils exceptionnels',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le principe d’exception libère les dirigeants des opérations courantes afin qu’ils se concentrent uniquement sur les écarts et situations inhabituelles.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'F. W. Taylor',
            stepTheme: 'Organisation Scientifique du Travail',
            stepTitle: 'Maîtriser l’Organisation Scientifique du Travail (OST) de Taylor',
            paragraphText:
              'Ingénieur américain, **Frederick Winslow Taylor** (1856–1915) veut éliminer le gaspillage et la « flânerie systématique » en remplaçant l’improvisation par la science.\n' +
              '• **Division verticale** : séparation stricte entre ceux qui pensent (le bureau des méthodes / ingénieurs) et ceux qui exécutent (les ouvriers).\n' +
              '• **Division horizontale** : parcellisation du travail en gestes élémentaires chronométrés pour trouver la méthode optimale (*One Best Way*).\n' +
              '• **Salaire au rendement** : rémunération aux pièces censée réconcilier patron et ouvrier par un partage des gains de productivité.\n' +
              'Exemple : un atelier de montage où chaque geste est standardisé et chronométré à la seconde près.',
            konanTip:
              'Retiens le duo indissociable de Taylor : Division verticale (conception ≠ exécution) + Division horizontale (tâches simples et répétitives).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Quel pilier est au cœur de l’Organisation Scientifique du Travail (OST) élaborée par Frederick Taylor ?',
              options: [
                'L’autonomie complète des équipes sans aucune procédure écrite',
                'La séparation stricte entre conception (ingénieurs) et exécution (ouvriers), accompagnée de l’étude scientifique des temps et mouvements',
                'La suppression de toute rémunération liée au rendement',
                'La rotation aléatoire des postes chaque heure',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’OST repose sur l’étude scientifique des gestes et temps par le bureau des méthodes, la séparation conception/exécution, la spécialisation et le salaire au rendement.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Ford & Critiques',
            stepTheme: 'Fordisme et limites de l’OST',
            stepTitle: 'Relier le fordisme au taylorisme et identifier leurs limites humaines',
            paragraphText:
              'L’industriel **Henry Ford** prolonge Taylor dans l’automobile (Ford T) en ajoutant trois innovations majeures : le **travail à la chaîne** (convoyeur mécanique imposant la cadence), la **standardisation** de masse et le *Five Dollars Day* (salaires doublés pour stabiliser les ouvriers et créer des consommateurs).\n' +
              '• **Succès économique** : baisse spectaculaire des coûts et accès des masses aux biens industriels.\n' +
              '• **Critiques sévères** : travail répétitif et aliénant, perte de sens, absentéisme, turn-over élevé, défauts de qualité et vision réductrice de l’homme motivé uniquement par l’argent.\n' +
              'Exemple : dans un centre d’appels hyper-taylorisé où chaque phrase est scriptée et chronométrée, le taux de démission explose rapidement.',
            keyRule:
              'Limites clés de l’OST : aliénation par la monotonie, sous-utilisation de l’intelligence des salariés et incapacité à innover rapidement.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Quelle critique fondamentale a été adressée au taylorisme et au fordisme dès la première moitié du XXe siècle ?',
              options: [
                'Ils donnaient trop d’autonomie créative aux ouvriers',
                'La division excessive et répétitive du travail déshumanise l’activité et réduit la motivation humaine au seul salaire',
                'Ils empêchaient toute production en grande série',
                'Ils interdisaient l’usage des machines en usine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En privant les exécutants d’initiative et en réduisant l’homme à un exécutant motivé par le seul argent, le taylorisme engendre monotonie, absentéisme et désengagement.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Henri Fayol',
            stepTheme: 'Les 6 fonctions de l’entreprise',
            stepTitle: 'Connaître les 6 fonctions et la fonction administrative de Fayol',
            paragraphText:
              'Alors que Taylor observait l’atelier, l’ingénieur et dirigeant français **Henri Fayol** (1841–1925) s’intéresse à la direction générale de toute l’entreprise.\n' +
              '• **Les 6 groupes d’opérations** : Technique (produire), Commerciale (acheter/vendre), Financière (capitaux), Sécurité (biens et personnes), Comptable (bilan/coûts) et **Administrative** (diriger l’ensemble).\n' +
              '• **La fonction administrative (POCCC)** : *Prévoir, Organiser, Commander, Coordonner, Contrôler*.\n' +
              '• **Apport majeur** : Fayol montre que le management s’enseigne et s’apprend — ce n’est pas un don réservé à quelques privilégiés.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Selon Henri Fayol, quelles sont les cinq activités qui composent la fonction administrative (POCCC) ?',
              options: [
                'Produire, Offrir, Comptabiliser, Commercialiser, Certifier',
                'Prévoir, Organiser, Commander, Coordonner, Contrôler',
                'Planifier, Observer, Classer, Calculer, Clôturer',
                'Prospecter, Optimiser, Communiquer, Convertir, Conclure',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Fayol définit la fonction administrative par les cinq verbes : Prévoir, Organiser, Commander, Coordonner et Contrôler (POCCC).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Principes de Fayol',
            stepTheme: 'Unité de commandement et passerelle',
            stepTitle: 'Appliquer les principes clés de Fayol sans confondre unité de commandement et de direction',
            paragraphText:
              'Fayol a formulé **14 principes généraux d’administration** conçus comme des repères souples pour tout dirigeant.\n' +
              '• **Unité de commandement** : un subordonné ne doit recevoir d’ordres que d’un seul supérieur hiérarchique (contrairement à Taylor qui admettait plusieurs chefs fonctionnels).\n' +
              '• **Unité de direction** : un seul chef et un seul programme pour un ensemble d’opérations visant le même but.\n' +
              '• **Autorité et responsabilité** : le droit de commander s’accompagne toujours de l’obligation de rendre compte.\n' +
              '• **Passerelle de Fayol** : autoriser deux services de même niveau à communiquer directement pour gagner en rapidité, avec l’accord de leurs chefs.',
            konanTip:
              'Piège classique : « Unité de commandement » concerne l’individu (un seul chef par salarié) ; « Unité de direction » concerne le projet (un seul plan d’action cohérent).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Sur quel point précis Henri Fayol s’oppose-t-il directement au modèle de maîtrise fonctionnelle de Frederick Taylor ?',
              options: [
                'Fayol rejette toute division du travail',
                'Fayol défend l’unité de commandement (un seul chef par salarié), alors que Taylor fait dépendre l’ouvrier de plusieurs contremaîtres spécialisés',
                'Fayol interdit toute planification financière',
                'Fayol propose de supprimer la hiérarchie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour Fayol, recevoir des ordres contradictoires de plusieurs chefs ruine la discipline : il érige donc l’unité de commandement en principe fondamental.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Max Weber',
            stepTheme: 'Autorité et bureaucratie',
            stepTitle: 'Distinguer les 3 formes d’autorité légitime et la bureaucratie wébérienne',
            paragraphText:
              'Le sociologue allemand **Max Weber** (1864–1920) analyse ce qui fonde la légitimité du pouvoir dans une organisation et identifie trois types idéaux d’autorité :\n' +
              '• **Autorité traditionnelle** : fondée sur la coutume et l’héritage (ex. entreprise familiale transmise de père en fils).\n' +
              '• **Autorité charismatique** : liée aux qualités personnelles exceptionnelles d’un leader (instable à sa disparition).\n' +
              '• **Autorité rationnelle-légale** : fondée sur des règles écrites, impersonnelles et des compétences vérifiées → c’est le modèle de la **bureaucratie**.\n' +
              '• **Vertu initiale** : éliminer l’arbitraire et le favoritisme grâce à la règle écrite, la hiérarchie claire et le recrutement par concours/diplômes.',
            keyRule:
              'Chez Weber, « bureaucratie » n’est pas une insulte : c’est l’idéal d’une organisation juste, prévisible et impartiale fondée sur le droit et la compétence.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Sur quel type d’autorité légitime repose le modèle de la « bureaucratie » défini par Max Weber ?',
              options: [
                'L’autorité charismatique personnelle',
                'L’autorité traditionnelle héréditaire',
                'L’autorité rationnelle-légale (règles écrites impersonnelles et compétence)',
                'L’autorité informelle des groupes d’amis',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour Weber, la bureaucratie s’appuie sur l’autorité rationnelle-légale : on obéit à la fonction et aux règles écrites, non à la personne arbitraire du chef.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Bilan classique',
            stepTheme: 'Forces et dérives',
            stepTitle: 'Évaluer les apports durables et les dérives de la bureaucratie',
            paragraphText:
              'L’école classique a légué des outils toujours indispensables (organigrammes, fiches de poste, procédures qualité, contrôle), mais poussée à l’extrême elle génère des blocages.\n' +
              '• **Dérive bureaucratique** : lorsque le respect mécanique de la procédure passe avant le service au client (lenteur, paperasserie, résistance au changement).\n' +
              '• **Environnement stable vs turbulent** : le modèle classique fonctionne bien dans un environnement stable et répétitif, mais échoue dans les métiers créatifs ou numériques en mutation rapide.\n' +
              'Exemple : exiger 5 signatures papier pour valider une dépense urgente de 10 000 FCFA illustre la dérive bureaucratique.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p1_q7',
              type: 'mcq',
              prompt: 'Quelle dérive menace une organisation bureaucratique lorsqu’elle évolue dans un marché numérique en évolution très rapide ?',
              options: [
                'Un excès de créativité incontrôlée',
                'La rigidité, la lenteur décisionnelle et le formalisme excessif qui freinent l’adaptation',
                'L’absence totale de règles écrites',
                'La disparition de la hiérarchie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La lourdeur procédurale et la stricte hiérarchie de la bureaucratie deviennent contre-productives lorsque l’environnement exige agilité et réactivité.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch2_p2',
        order: 2,
        title: 'L’École des relations humaines : Mayo, Maslow, Herzberg et McGregor',
        summary:
          'Comprendre l’effet Hawthorne découvert par Elton Mayo, la pyramide des besoins de Maslow, la théorie bifactorielle de Herzberg et l’opposition entre Théorie X et Théorie Y de McGregor.',
        conceptExplanation:
          "En réaction à la vision purement mécanique de l’école classique, l’**école des relations humaines** (à partir des années 1930) place l’individu, ses besoins psychologiques et la dynamique de groupe au cœur de la performance.\n\n**Elton Mayo** lance le mouvement grâce aux expériences de **Hawthorne** (Western Electric, 1927–1932) : la productivité des ouvrières augmente non pas seulement grâce à l’éclairage ou aux primes, mais parce qu’on s’intéresse à elles et qu’elles forment un groupe soudé (**effet Hawthorne**). **Abraham Maslow** hiérarchise ensuite les motivations humaines en une **pyramide de 5 besoins** (physiologiques, sécurité, appartenance, estime, accomplissement). **Frederick Herzberg** affine l’analyse en distinguant les **facteurs d’hygiène** (salaire, conditions matérielles : leur absence crée l’insatisfaction, mais leur présence ne suffit pas à motiver durablement) des **facteurs moteurs/de motivation** (reconnaissance, autonomie, intérêt du travail). Enfin, **Douglas McGregor** oppose deux visions managériales : la **Théorie X** (contrôle strict d’un salarié supposé paresseux) et la **Théorie Y** (confiance et responsabilisation d’un collaborateur capable d’initiative).",
        formulas: [
          {
            name: 'Dualité de Herzberg (Théorie bifactorielle)',
            formula: '\\text{Facteurs d’hygiène} \\rightarrow \\text{Évitent l’insatisfaction} \\qquad | \\qquad \\text{Facteurs moteurs} \\rightarrow \\text{Créent la motivation}',
            note: 'Améliorer uniquement la climatisation ou le salaire de base ne suffit pas à générer un fort engagement si le travail reste dénué de sens.',
          },
        ],
        keyRule:
          'L’école des relations humaines démontre que la productivité dépend autant du climat social, de la reconnaissance et du sens donné au travail que des conditions matérielles.',
        workedExample: {
          title: 'Diagnostiquer la démotivation d’une équipe de développeurs selon Herzberg et McGregor',
          statement:
            'Une agence digitale paie correctement ses développeurs dans de beaux bureaux, mais le dirigeant contrôle chaque minute de présence (Théorie X) et ne leur laisse aucune autonomie technique. Malgré de bons salaires, deux développeurs démissionnent. Analysez la situation.',
          methodSteps: [
            '1) Selon Herzberg : les facteurs d’hygiène (salaire, bureaux) sont satisfaits, mais les facteurs moteurs (autonomie, reconnaissance, responsabilités) sont absents.',
            '2) Selon Maslow : les besoins physiologiques et de sécurité sont couverts, mais les besoins d’estime et d’accomplissement sont bloqués.',
            '3) Selon McGregor : le dirigeant applique une Théorie X rigide inadaptée à des métiers intellectuels qui requièrent une approche Théorie Y (objectifs clairs + confiance).',
          ],
          conclusion:
            'Restaurer l’autonomie technique, la reconnaissance et la participation aux choix d’architecture (Théorie Y) relancera l’engagement durable.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Elton Mayo',
            stepTheme: 'Expériences de Hawthorne',
            stepTitle: 'Comprendre l’effet Hawthorne et le rôle des groupes informels',
            paragraphText:
              'Entre 1927 et 1932, le psychologue **Elton Mayo** mène une série d’expériences dans l’usine Western Electric de Hawthorne (près de Chicago) sur l’impact de l’éclairage sur la productivité.\n' +
              '• **Résultat surprenant** : la productivité augmente quand on accroît l’éclairage… mais continue aussi d’augmenter quand on le diminue !\n' +
              '• **Effet Hawthorne** : le simple fait que la direction observe, écoute et manifeste de l’attention aux salariés améliore leur motivation et leur rendement.\n' +
              '• **Groupe informel** : au-delà de l’organigramme officiel, les liens d’amitié et normes collectives influencent puissamment les comportements au travail.',
            keyRule:
              'Effet Hawthorne : les salariés travaillent mieux lorsqu’ils se sentent écoutés, considérés et intégrés dans un collectif bienveillant.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Qu’ont principalement révélé les expériences de Hawthorne conduites par Elton Mayo ?',
              options: [
                'Que seul le niveau d’éclairage détermine la productivité ouvrière',
                'Que l’attention portée aux salariés, la qualité des relations sociales et la dynamique de groupe influencent fortement la productivité',
                'Que le travail en équipe réduit toujours le rendement',
                'Que les salariés doivent être isolés les uns des autres',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mayo a démontré que les facteurs psychosociaux (sentiment d’être considéré, climat relationnel, cohésion du groupe) pèsent plus lourd que les seules variables physiques.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Abraham Maslow',
            stepTheme: 'Pyramide des besoins',
            stepTitle: 'Maîtriser les 5 étages de la pyramide des besoins de Maslow',
            paragraphText:
              'Pour **Abraham Maslow** (1943), la motivation humaine suit une hiérarchie ascendante de cinq niveaux de besoins : un besoin supérieur ne devient prioritaire que lorsque les besoins inférieurs sont raisonnablement satisfaits.\n' +
              '• **1. Physiologiques** : se nourrir, se loger (salaire décent, pauses).\n' +
              '• **2. Sécurité** : stabilité de l’emploi, protection sociale, environnement sûr.\n' +
              '• **3. Appartenance** : intégration dans l’équipe, esprit de corps, ambiance.\n' +
              '• **4. Estime** : reconnaissance des réussites, statut, confiance accordée.\n' +
              '• **5. Accomplissement de soi** : autonomie créative, apprentissage, dépassement de soi.',
            visualSchema: {
              type: 'layered_stack',
              title: 'Pyramide des besoins d’Abraham Maslow',
              caption: 'Du socle vital (en bas) au sommet de l’épanouissement professionnel (en haut).',
              layeredStack: {
                style: 'pyramid',
                layers: [
                  { badge: '5', title: 'Accomplissement de soi', subtitle: 'Créativité, sens, autonomie, dépassement', color: 'violet' },
                  { badge: '4', title: 'Besoin d’estime', subtitle: 'Reconnaissance, statut, responsabilités', color: 'blue' },
                  { badge: '3', title: 'Besoin d’appartenance', subtitle: 'Esprit d’équipe, lien social, cohésion', color: 'green' },
                  { badge: '2', title: 'Besoin de sécurité', subtitle: 'Stabilité d’emploi, contrat clair, santé', color: 'orange' },
                  { badge: '1', title: 'Besoins physiologiques', subtitle: 'Salaire de subsistance, repos, conditions de base', color: 'slate' },
                ],
              },
            },
            keyRule:
              'Un besoin déjà pleinement satisfait cesse d’être un moteur puissant : pour motiver un salarié bien payé et en CDI, le manager doit activer l’appartenance, l’estime et l’accomplissement.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Dans la pyramide de Maslow, un collaborateur bénéficiant déjà d’un bon salaire, d’un CDI sûr et d’une équipe chaleureuse cherche désormais à voir son expertise officiellement reconnue et valorisée. Quel niveau de besoin exprime-t-il ?',
              options: [
                'Le besoin physiologique',
                'Le besoin de sécurité',
                'Le besoin d’estime',
                'Le besoin de contrôle bureaucratique',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La recherche de reconnaissance, de respect professionnel et de valorisation de ses compétences correspond au 4e niveau : le besoin d’estime.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'F. Herzberg',
            stepTheme: 'Hygiène vs Motivation',
            stepTitle: 'Distinguer facteurs d’hygiène et facteurs moteurs selon Herzberg',
            paragraphText:
              'Le psychologue **Frederick Herzberg** montre que la satisfaction et l’insatisfaction au travail ne sont pas les deux extrêmes d’une même règle, mais dépendent de deux familles distinctes de facteurs.\n' +
              '• **Facteurs d’hygiène (contexte du travail)** : salaire de base, locaux, sécurité, règlement, relations hiérarchiques. S’ils manquent → **insatisfaction** ; s’ils sont corrects → neutralité (pas d’insatisfaction, mais pas d’enthousiasme durable).\n' +
              '• **Facteurs moteurs (contenu du travail)** : intérêt des missions, autonomie, reconnaissance, responsabilités, évolution de carrière → eux seuls génèrent une **vraie motivation**.\n' +
              'Exemple : Herzberg recommande l’*enrichissement des tâches* (donner davantage de responsabilité et de sens) plutôt que la simple répétition.',
            konanTip:
              'Pense à l’hygiène corporelle : se laver évite les maladies (évite l’insatisfaction), mais ne te fait pas gagner un marathon (seuls les facteurs moteurs te propulsent !).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Selon la théorie bifactorielle de Frederick Herzberg, lequel des éléments suivants constitue un véritable « facteur moteur » (facteur de motivation intrinsèque) ?',
              options: [
                'La qualité de la climatisation dans les bureaux',
                'L’autonomie, la reconnaissance et l’intérêt des responsabilités confiées',
                'Le règlement intérieur sur les horaires de pause',
                'La propreté du parking de l’entreprise',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Climatisation, règlement et parking sont des facteurs d’hygiène (évitent le mécontentement) ; autonomie, reconnaissance et contenu valorisant sont des facteurs moteurs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'D. McGregor',
            stepTheme: 'Théorie X vs Théorie Y',
            stepTitle: 'Comparer les visions managériales de la Théorie X et de la Théorie Y',
            paragraphText:
              '**Douglas McGregor** (1960) démontre que la manière dont un manager dirige son équipe dépend directement des croyances implicites qu’il entretient sur la nature humaine — souvent sous forme de prophétie autoréalisatrice.\n' +
              '• **Théorie X** : suppose que l’homme déteste le travail, fuit les responsabilités et doit être contraint, surveillé et sanctionné.\n' +
              '• **Théorie Y** : suppose que l’effort au travail est naturel si l’objectif a du sens, que l’individu recherche les responsabilités et fait preuve de créativité quand on lui fait confiance.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparaison Théorie X vs Théorie Y (Douglas McGregor)',
              caption: 'Les croyances du manager façonnent son style de direction et provoquent en retour le comportement attendu.',
              tableData: {
                headers: ['Dimension', 'Théorie X (Vision classique)', 'Théorie Y (Vision participative)'],
                rows: [
                  ['Rapport au travail', 'Aversion naturelle, paresse', 'Effort naturel si travail porteur de sens'],
                  ['Responsabilités', 'Les fuit, préfère être dirigé', 'Les recherche et s’auto-contrôle'],
                  ['Levier principal', 'Contrainte, contrôle, sanction', 'Confiance, autonomie, objectifs partagés'],
                  ['Style managérial', 'Autoritaire et centralisé', 'Participatif et délégatif'],
                  ['Contexte adapté', 'Urgence extrême, tâches très simples', 'Équipes qualifiées, tech, innovation'],
                ],
              },
            },
            keyRule:
              'Effet prophétie autoréalisatrice : traiter des collaborateurs compétents selon la Théorie X les rend passifs et méfiants, confirmant à tort les craintes du chef.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Un manager estime que ses collaborateurs sont capables d’autocontrôle, d’initiative et de créativité dès lors qu’ils adhèrent à des objectifs clairs. À quelle théorie de McGregor adhère-t-il ?',
              options: [
                'La Théorie X',
                'La Théorie Y',
                'Le postulat mécaniste de Taylor',
                'La bureaucratie coercitive',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Théorie Y postule que les individus peuvent s’impliquer volontairement, assumer des responsabilités et faire preuve d’initiative dans un climat de confiance.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Lewin & Likert',
            stepTheme: 'Styles de direction',
            stepTitle: 'Relier les expériences de Kurt Lewin et les 4 systèmes de Rensis Likert',
            paragraphText:
              'D’autres chercheurs des relations humaines ont testé l’impact concret du style de commandement sur l’ambiance et la performance collective.\n' +
              '• **Kurt Lewin** compare 3 styles : **Autoritaire** (bon rendement à court terme mais tensions et arrêt dès que le chef s’absente), **Laisser-faire** (faible performance et désorganisation) et **Démocratique** (meilleure qualité, créativité et autonomie durable).\n' +
              '• **Rensis Likert** définit 4 systèmes : Autoritaire exploiteur (1), Autoritaire paternaliste (2), Consultatif (3) et **Participatif par groupe** (4, jugé le plus performant à long terme).\n' +
              'Exemple : dans une équipe projet informatique, le style participatif/démocratique favorise la remontée rapide des bugs et l’innovation.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Selon les expériences de Kurt Lewin, quel style de leadership combine le mieux qualité du travail, esprit d’initiative et continuité de l’effort même en l’absence du chef ?',
              options: [
                'Le style laisser-faire',
                'Le style autoritaire strict',
                'Le style démocratique (participatif)',
                'L’absence totale d’objectifs',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Lewin a observé que le style démocratique produit un meilleur climat social, une qualité supérieure et un engagement qui perdure même sans surveillance directe.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limites RH',
            stepTheme: 'Équilibre humain et rigueur',
            stepTitle: 'Éviter l’angélisme : limites de l’école des relations humaines',
            paragraphText:
              'Si l’école des relations humaines a humanisé le management, elle présente aussi certaines limites lorsque l’on néglige la structure et les contraintes économiques.\n' +
              '• **Sous-estimation de la stratégie et de l’environnement** : un climat social excellent ne sauve pas une entreprise dont le produit est obsolète ou les finances déficitaires.\n' +
              '• **Diversité des profils** : tous les individus ne réagissent pas identiquement à l’autonomie ou aux mêmes étages de Maslow au même moment.\n' +
              '• **Équilibre moderne** : concilier bienveillance humaine, clarté des objectifs et exigence de résultats.',
            konanTip:
              'Un bon manager n’oppose pas « être humain » et « être exigeant » : la clarté des règles et des résultats protège aussi l’équipe.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Quelle limite principale reproche-t-on parfois à une application naïve de l’école des relations humaines ?',
              options: [
                'Elle ignore totalement l’existence des individus',
                'Elle peut négliger les contraintes économiques, technologiques et structurelles en pensant qu’un bon climat social suffit à tout résoudre',
                'Elle interdit toute communication entre collègues',
                'Elle repose uniquement sur le chronométrage des gestes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le bien-être humain est nécessaire mais non suffisant : la survie de l’organisation dépend aussi de sa stratégie, de sa structure et de son adéquation au marché.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch2_p3',
        order: 3,
        title: 'Approches néoclassique, systémique, contingence et qualité totale',
        summary:
          'Maîtriser la Direction Par Objectifs de Peter Drucker, la vision de l’entreprise comme système ouvert, les facteurs de contingence (Burns & Stalker, Mintzberg) et la roue PDCA de la qualité totale.',
        conceptExplanation:
          "À partir des années 1950, la pensée managériale dépasse l’opposition classique/relations humaines grâce à quatre courants majeurs :\n1) **L’école néoclassique (empirique)** : portée par **Peter Drucker** (Direction Par Objectifs — DPO : fixer des objectifs clairs et mesurables en laissant l’autonomie sur les moyens) et **Alfred Sloan** (décentralisation coordonnée par divisions).\n2) **L’approche systémique** : inspirée de Von Bertalanffy, elle conçoit l’entreprise comme un **système ouvert** composé de sous-systèmes interdépendants qui échange des flux (entrées/sorties) avec son environnement, s’autorégule par rétroaction (*feedback*) et recherche la **synergie** ($1 + 1 > 2$).\n3) **L’école de la contingence** : abandonne définitivement le *One Best Way* ! Il n’existe pas de structure idéale universelle : la meilleure organisation dépend des **facteurs de contingence** (taille, âge, technologie, environnement stable ou turbulent — Burns & Stalker opposent ainsi structures **mécaniques** et **organiques**).\n4) **Le management par la qualité totale (TQM) et le Lean** : amélioration continue (roue **PDCA** de Deming : Plan–Do–Check–Act) et élimination des gaspillages.",
        formulas: [
          {
            name: 'Principe de synergie systémique',
            formula: '\\text{Performance du système global} > \\sum \\text{Performances des unités isolées} \\quad (1 + 1 > 2)',
            note: 'La coordination efficace entre services crée plus de valeur que la somme de leurs efforts séparés.',
          },
          {
            name: 'Roue d’amélioration continue de Deming (PDCA)',
            formula: '\\text{Plan (Planifier)} \\longrightarrow \\text{Do (Réaliser)} \\longrightarrow \\text{Check (Vérifier)} \\longrightarrow \\text{Act (Ajuster)}',
            note: 'Socle universel du management de la qualité (normes ISO 9001) et de l’amélioration continue (Kaizen).',
          },
        ],
        keyRule:
          'Message central de la théorie de la contingence : « Il n’existe pas une seule bonne manière d’organiser ; tout dépend du contexte (taille, technologie, stabilité du marché). »',
        workedExample: {
          title: 'Choisir entre structure mécanique et structure organique (Burns & Stalker)',
          statement:
            'Comparez deux organisations : (A) une usine de fabrication standardisée de bouteilles en verre dans un marché très stable ; (B) une startup d’intelligence artificielle dont le marché change chaque trimestre. Quelle structure recommander à chacune ?',
          methodSteps: [
            '1) Entreprise A (environnement stable, production de masse) → Structure MÉCANIQUE : procédures précises, hiérarchie claire, spécialisation et contrôle rigoureux.',
            '2) Entreprise B (environnement turbulent et innovant) → Structure ORGANIQUE : hiérarchie plate, équipes pluridisciplinaires autonomes, communication horizontale rapide.',
          ],
          conclusion:
            'Selon la théorie de la contingence, la performance naît de l’alignement entre la structure choisie et la turbulence de l’environnement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Peter Drucker',
            stepTheme: 'École néoclassique et DPO',
            stepTitle: 'Appliquer la Direction Par Objectifs (DPO) de Peter Drucker',
            paragraphText:
              'Surnommé le père du management moderne, **Peter Drucker** et les néoclassiques (Alfred Sloan, Octave Gélinier) réconcilient rigueur des résultats et autonomie humaine.\n' +
              '• **Principe de la DPO** : la direction fixe avec chaque responsable des objectifs précis, chiffrés et datés, puis lui laisse la liberté d’organiser ses moyens pour les atteindre.\n' +
              '• **Décentralisation coordonnée (Sloan)** : découper les grands groupes en divisions autonomes évaluées sur leurs résultats financiers.\n' +
              '• **Exigence** : les objectifs doivent être réalistes, mesurables et déclinés de la stratégie globale vers chaque équipe.\n' +
              'Exemple : fixer à un chef d’agence un objectif de +15 % de nouveaux comptes en 6 mois tout en le laissant choisir ses actions locales.',
            keyRule:
              'La DPO déplace le contrôle du « comment le salarié travaille minute par minute » vers « quels résultats concrets il atteint ».',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Quel est le principe fondamental de la Direction Par Objectifs (DPO) popularisée par Peter Drucker ?',
              options: [
                'Dicter chaque geste physique de l’employé sans lui expliquer le but',
                'Fixer des objectifs clairs et mesurables avec le collaborateur tout en lui laissant de l’autonomie sur les moyens pour les atteindre',
                'Supprimer toute mesure de performance',
                'Interdire toute décentralisation des décisions',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La DPO repose sur la responsabilisation : on convient d’objectifs précis et mesurables, puis on évalue les résultats obtenus plutôt que le contrôle tatillon des gestes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Systémique',
            stepTheme: 'Système ouvert et synergie',
            stepTitle: 'Concevoir l’entreprise comme un système ouvert en interaction',
            paragraphText:
              'L’**approche systémique** (Ludwig von Bertalanffy) rompt avec la vision cloisonnée des services en montrant que tout est relié dans l’organisation.\n' +
              '• **Système ouvert** : l’entreprise puise des *entrées* (capitaux, données, compétences, matières), les transforme et délivre des *sorties* (produits, services, valeur) vers son environnement.\n' +
              '• **Interdépendance** : une décision du service marketing impacte immédiatement la production, la logistique et la trésorerie.\n' +
              '• **Rétroaction (Feedback)** : les retours clients et indicateurs permettent au système de s’autoréguler.\n' +
              '• **Synergie** : la coopération bien orchestrée des sous-systèmes produit plus de valeur que leur simple addition ($1+1>2$).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Pourquoi l’approche systémique qualifie-t-elle l’entreprise de « système ouvert » ?',
              options: [
                'Parce que ses bureaux n’ont pas de portes',
                'Parce qu’elle échange en permanence des flux (ressources, informations, produits) avec son environnement externe et s’adapte par rétroaction',
                'Parce qu’elle ne possède aucune frontière juridique',
                'Parce que ses décisions sont toujours prises au hasard',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un système ouvert interagit continuellement avec son environnement (clients, fournisseurs, État, concurrents) et ajuste son fonctionnement grâce aux boucles de rétroaction.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Contingence',
            stepTheme: 'Structure mécanique vs organique',
            stepTitle: 'Maîtriser la théorie de la contingence : fin du « One Best Way »',
            paragraphText:
              'À la fin des années 1950, les théoriciens de la **contingence** (Woodward, Burns & Stalker, Lawrence & Lorsch) prouvent qu’aucun modèle d’organisation n’est supérieur dans l’absolu.\n' +
              '• **Facteurs de contingence** : taille et âge de l’entreprise, système technique, stabilité de l’environnement, stratégie.\n' +
              '• **Structure mécanique** (Burns & Stalker) : formalisée, hiérarchique, spécialisée → efficace en environnement **stable**.\n' +
              '• **Structure organique** : souple, peu formalisée, communication latérale, équipes polyvalentes → indispensable en environnement **turbulent et innovant**.\n' +
              'Exemple : un studio de création d’applications mobiles adopte une structure organique pour itérer vite face aux tendances du marché.',
            keyRule:
              'Contingence = « Tout dépend du contexte ». Environnement stable → structure mécanique ; environnement incertain et rapide → structure organique.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Selon Burns et Stalker (école de la contingence), quel type de structure convient le mieux à une entreprise technologique évoluant dans un marché très instable et innovant ?',
              options: [
                'Une structure mécanique très rigide et hyper-centralisée',
                'Une structure organique, souple, décentralisée et favorisant la communication horizontale',
                'Une bureaucratie pure sans communication latérale',
                'Une organisation sans aucun objectif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Face à un environnement turbulent, seule une structure organique (souple, rapide, collaborative) permet d’innover et de s’adapter à temps.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'H. Mintzberg',
            stepTheme: 'Les 5 parties de l’organisation',
            stepTitle: 'Identifier les 5 composantes de toute organisation selon Mintzberg',
            paragraphText:
              'En synthétisant la théorie de la contingence, **Henry Mintzberg** décrit toute organisation comme l’assemblage de cinq composantes fondamentales :\n' +
              '• **1. Sommet stratégique** : direction générale qui fixe la vision et la stratégie.\n' +
              '• **2. Ligne hiérarchique** : cadres intermédiaires reliant le sommet au terrain.\n' +
              '• **3. Centre opérationnel** : opérateurs qui fabriquent les biens ou délivrent directement les services.\n' +
              '• **4. Technostructure** : analystes qui conçoivent les méthodes, normes et plannings (ex. contrôle de gestion, qualité).\n' +
              '• **5. Support logistique** : services d’appui indirects (juridique, paie, informatique interne, restauration).',
            konanTip:
              'Ne confonds pas « Technostructure » (ceux qui standardisent et planifient les méthodes de travail) et « Support logistique » (ceux qui fournissent des services annexes).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Dans le modèle des 5 composantes organisationnelles de Mintzberg, quelle partie regroupe les techniciens, développeurs ou vendeurs qui produisent directement le bien ou le service vendu aux clients ?',
              options: [
                'La technostructure',
                'Le centre opérationnel',
                'Le support logistique',
                'Le sommet stratégique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le centre opérationnel constitue la base productive qui assure directement la fabrication des produits ou la prestation des services destinés aux clients.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Qualité & Lean',
            stepTheme: 'Roue PDCA et amélioration continue',
            stepTitle: 'Piloter la qualité totale avec la roue PDCA de Deming et le Lean',
            paragraphText:
              'À partir de l’essor industriel japonais (Toyota, Deming, Ishikawa), la qualité cesse d’être un simple tri en fin de chaîne pour devenir l’affaire de tous.\n' +
              '• **Qualité Totale (TQM)** : viser le « zéro défaut » et la satisfaction totale du client à chaque étape.\n' +
              '• **Roue de Deming (PDCA)** : *Plan* (préparer), *Do* (exécuter), *Check* (mesurer les résultats), *Act* (corriger et standardiser le progrès).\n' +
              '• **Lean Management** : éliminer systématiquement les gaspillages (*Muda* : surproduction, attentes, stocks excessifs, défauts, déplacements inutiles) pour maximiser la valeur client.\n' +
              'Exemple : améliorer chaque mois le délai de réponse du support client en mesurant les tickets et en supprimant les étapes redondantes.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Dans la roue d’amélioration continue PDCA de Deming, à quoi correspond l’étape « Check » ?',
              options: [
                'Recruter de nouveaux actionnaires',
                'Contrôler et mesurer les résultats obtenus par rapport aux objectifs prévus afin d’identifier les écarts',
                'Abandonner le projet sans analyse',
                'Lancer immédiatement la production sans planification',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Après avoir planifié (Plan) et mis en œuvre (Do), l’étape Check vérifie les résultats mesurés avant d’ajuster et standardiser (Act).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse écoles',
            stepTheme: 'Boîte à outils du manager',
            stepTitle: 'Combiner intelligemment les apports de chaque école de pensée',
            paragraphText:
              'Les écoles de management ne s’annulent pas : elles forment une **boîte à outils cumulative** où le manager moderne pioche selon la situation.\n' +
              '• **De l’école classique** : clarté des responsabilités, procédures fiables, rigueur organisationnelle.\n' +
              '• **Des relations humaines** : écoute, reconnaissance, motivation intrinsèque, cohésion d’équipe.\n' +
              '• **Du néoclassique & systémique** : objectifs mesurables (DPO), vision transversale et synergie entre métiers.\n' +
              '• **De la contingence & qualité** : adaptation souple au marché et amélioration continue (PDCA).',
            keyRule:
              'Le manager accompli n’est pas dogmatique : il combine rigueur des processus, humanité du leadership et agilité face au contexte.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Comment un manager moderne doit-il aborder les différentes écoles de pensée (classique, relations humaines, systémique, contingence) ?',
              options: [
                'Appliquer exclusivement Taylor dans toutes les entreprises sans exception',
                'Les considérer comme complémentaires et mobiliser leurs apports selon la nature des tâches et le contexte de l’organisation',
                'Rejeter toutes les théories antérieures à l’an 2020',
                'Ne jamais fixer d’objectifs ni de règles écrites',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque courant éclaire une facette réelle de l’organisation (processus, humain, système, adaptation) : le manager les combine de manière contingente.',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 3 : PROCESSUS DÉCISIONNEL, DIAGNOSTIC ET MANAGEMENT STRATÉGIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch3',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Processus décisionnel, diagnostic et management stratégique',
    summary:
      'Maîtriser la prise de décision (typologie d’Ansoff, rationalité limitée et modèle IMC d’Herbert Simon), conduire un diagnostic stratégique complet (PESTEL, 5 forces de Porter, chaîne de valeur, SWOT) et choisir un avantage concurrentiel durable.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Management',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch3_p1',
        order: 1,
        title: 'La prise de décision : typologie d’Ansoff et modèle IMC d’Herbert Simon',
        summary:
          'Classer les décisions selon leur horizon (Ansoff : stratégiques, tactiques, opérationnelles), comprendre la rationalité limitée d’Herbert Simon, dérouler le modèle IMC et déjouer les biais cognitifs.',
        conceptExplanation:
          "Décider — c’est-à-dire choisir une ligne d’action parmi plusieurs alternatives face à un problème ou une opportunité — est l’acte central du manager. **Igor Ansoff** classe les décisions en trois niveaux hiérarchiques : les décisions **stratégiques** (long terme, direction générale, peu réversibles, ex. conquérir un nouveau pays), les décisions **tactiques ou administratives** (moyen terme, cadres intermédiaires, allocation des ressources) et les décisions **opérationnelles** (court terme, routinières, réversibles, ex. réapprovisionner un stock).\n\nPrix Nobel d’économie, **Herbert Simon** montre que le décideur humain ne dispose jamais d’une information parfaite ni d’un temps infini : il agit en **rationalité limitée** et retient la première solution **satisfaisante** (*satisficing*) plutôt que l’optimum théorique absolu. Il modélise toute décision structurée par le processus **IMC** : **Intelligence** (identifier et comprendre le problème), **Modélisation** (concevoir les scénarios possibles) et **Choix** (sélectionner la meilleure option, suivie de l’évaluation des résultats).",
        formulas: [
          {
            name: 'Processus décisionnel IMC d’Herbert Simon',
            formula: '\\text{Intelligence (Comprendre)} \\longrightarrow \\text{Modélisation (Concevoir)} \\longrightarrow \\text{Choix (Décider)} \\longrightarrow \\text{Évaluation}',
            note: 'Les allers-retours entre étapes sont fréquents si aucune solution modélisée n’est satisfaisante.',
          },
          {
            name: 'Espérance mathématique en univers risqué',
            formula: 'E(X) = \\sum_{i=1}^{n} p_i \\cdot G_i \\quad \\text{avec } \\sum_{i=1}^{n} p_i = 1',
            note: 'Permet de comparer rationnellement des options lorsque les probabilités des scénarios sont connues.',
          },
        ],
        keyRule:
          'Selon Herbert Simon, le manager réel ne « maximise » pas dans un monde parfait : il cherche une décision « satisfaisante » sous contraintes de temps, de coût et d’information (rationalité limitée).',
        workedExample: {
          title: 'Appliquer le modèle IMC de Simon au choix d’un logiciel ERP',
          statement:
            'Une PME de distribution à Abidjan souffre de ruptures de stock fréquentes et de retards de facturation. Appliquez les étapes du modèle IMC d’Herbert Simon pour prendre la bonne décision.',
          methodSteps: [
            '1) Intelligence : auditer les délais, constater que les fichiers Excel séparés causent 18 % d’erreurs de stock et chiffrer le manque à gagner.',
            '2) Modélisation : recenser trois options (A : conserver Excel amélioré ; B : adopter un ERP SaaS local à 250 000 FCFA/mois ; C : développer un logiciel interne sur mesure).',
            '3) Choix : comparer sur une grille multicritère (coût, délai, fiabilité, support local) et retenir l’option B comme solution satisfaisante sous contrainte de budget et délai.',
            '4) Évaluation : mesurer après 3 mois la baisse réelle des ruptures de stock et ajuster la formation.',
          ],
          conclusion:
            'Le modèle IMC évite les décisions impulsives tout en restant pragmatique grâce à la rationalité limitée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Igor Ansoff',
            stepTheme: '3 niveaux de décisions',
            stepTitle: 'Classer les décisions selon la typologie d’Igor Ansoff',
            paragraphText:
              'Toutes les décisions n’ont ni le même impact financier ni le même degré d’irréversibilité : **Igor Ansoff** les organise en trois niveaux complémentaires.\n' +
              '• **Décisions stratégiques** : engagent l’avenir global à long terme (3–5 ans), prises par la Direction Générale, complexes et difficilement réversibles (ex. racheter un concurrent, lancer un nouveau métier).\n' +
              '• **Décisions tactiques (administratives)** : moyen terme (6 mois–2 ans), prises par les directeurs de département pour organiser les ressources (ex. recruter une équipe commerciale, choisir un fournisseur cloud).\n' +
              '• **Décisions opérationnelles** : court terme (jour/semaine), répétitives et réversibles, prises sur le terrain (ex. planifier les congés ou passer une commande de papier).',
            keyRule:
              'Stratégique = long terme & difficilement réversible ; Tactique = moyen terme & organisation des moyens ; Opérationnelle = court terme & exploitation courante.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q1',
              type: 'mcq',
              prompt: 'La Direction Générale d’une entreprise ivoirienne décide d’ouvrir deux filiales au Sénégal et au Ghana sur un horizon de 5 ans. À quel niveau de la typologie d’Ansoff cette décision appartient-elle ?',
              options: [
                'Une décision opérationnelle',
                'Une décision stratégique',
                'Une décision routinière programmable',
                'Une décision purement comptable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’expansion internationale engage l’entreprise à long terme, mobilise des ressources majeures et est difficilement réversible : c’est une décision stratégique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Programmation',
            stepTheme: 'Décisions programmables et univers de décision',
            stepTitle: 'Distinguer décisions programmables, non programmables et degrés d’incertitude',
            paragraphText:
              'Herbert Simon complète Ansoff en distinguant deux natures de problèmes et trois univers informationnels.\n' +
              '• **Décisions programmables** : répétitives, bien structurées, pouvant suivre une règle ou un algorithme (ex. réapprovisionner dès que le stock passe sous 50 unités).\n' +
              '• **Décisions non programmables** : inédites, complexes, sans recette toute faite (ex. réagir à une crise sanitaire ou à une rupture technologique).\n' +
              '• **Univers de décision** : *certain* (conséquences connues), *risqué* (probabilités estimables) ou *incertain* (aucune probabilité objective disponible).',
            konanTip:
              'Dans la transformation digitale, les logiciels et l’IA automatisent d’abord les décisions programmables, libérant les managers pour les décisions non programmables.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Un système informatique déclenche automatiquement une commande fournisseur dès que le stock d’un article descend sous le seuil de sécurité. De quel type de décision s’agit-il ?',
              options: [
                'Une décision non programmable et stratégique',
                'Une décision programmable et opérationnelle',
                'Une décision en univers totalement incertain',
                'Une décision charismatique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une règle claire, répétitive et automatisable portant sur l’exploitation courante est une décision programmable et opérationnelle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Rationalité limitée',
            stepTheme: 'Le principe de satisficing',
            stepTitle: 'Comprendre la rationalité limitée d’Herbert Simon',
            paragraphText:
              'La théorie économique classique imaginait un décideur « parfaitement rationnel » connaissant toutes les options et choisissant toujours l’optimum mathématique. **Herbert Simon** démontre que c’est irréaliste.\n' +
              '• **Trois limites réelles** : information incomplète et coûteuse, temps de réflexion limité et capacités cognitives humaines finies.\n' +
              '• **Principe de *satisficing*** : le manager ne cherche pas indéfiniment la solution parfaite (inatteignable), mais s’arrête à la première solution jugée **satisfaisante** par rapport à son seuil d’exigence.\n' +
              'Exemple : pour recruter un développeur en urgence, on ne peut pas interviewer les 5 000 ingénieurs du pays ; on retient le premier candidat qui remplit tous les critères clés.',
            keyRule:
              'Rationalité limitée (Simon) = information imparfaite + temps limité + capacité cognitive bornée ⇒ recherche d’une solution satisfaisante (*satisficing*).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Selon le concept de « rationalité limitée » formulé par Herbert Simon, comment un manager prend-il réellement ses décisions complexes ?',
              options: [
                'En analysant 100 % des alternatives possibles dans le monde entier avec une information parfaite',
                'En choisissant la première solution jugée satisfaisante compte tenu du temps, de l’information et des capacités cognitives limités',
                'En tirant systématiquement ses choix à pile ou face',
                'En refusant toute information chiffrée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La rationalité limitée explique que les décideurs remplacent l’optimisation absolue (impossible en pratique) par la recherche d’une solution satisfaisante (*satisficing*).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Modèle IMC',
            stepTheme: 'Processus de Simon',
            stepTitle: 'Déployer les étapes du processus décisionnel IMC de Simon',
            paragraphText:
              'Pour structurer malgré tout une décision rigoureuse en rationalité limitée, Herbert Simon propose le modèle **IMC** (complété par l’évaluation).\n' +
              '• **1. Intelligence** : repérer le problème ou l’opportunité, collecter les faits et poser le bon diagnostic.\n' +
              '• **2. Modélisation (Design)** : inventer, recenser et simuler plusieurs scénarios d’action envisageables.\n' +
              '• **3. Choix** : comparer les scénarios selon des critères explicites et sélectionner la solution retenue.\n' +
              '• **4. Évaluation (Revue)** : suivre l’exécution et tirer les leçons pour corriger si nécessaire.',
            visualSchema: {
              type: 'flowchart',
              title: 'Processus décisionnel IMC d’Herbert Simon',
              caption: 'Un cheminement structuré en trois phases centrales, bouclé par l’évaluation des résultats sur le terrain.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Intelligence', sublabel: 'Identifier le problème, analyser les données et causes', kind: 'start', color: 'blue' },
                  { label: '2. Modélisation', sublabel: 'Concevoir et simuler plusieurs options d’action', kind: 'process', color: 'violet' },
                  { label: '3. Choix', sublabel: 'Comparer les options et retenir la solution satisfaisante', kind: 'decision', color: 'green' },
                  { label: '4. Mise en œuvre & Évaluation', sublabel: 'Mesurer les effets réels et ajuster (rétroaction)', kind: 'end', color: 'orange' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Dans le modèle IMC d’Herbert Simon, quelle phase consiste à élaborer et comparer plusieurs scénarios possibles avant de trancher ?',
              options: [
                'La phase d’Intelligence uniquement',
                'La phase de Modélisation (conception des alternatives)',
                'La phase de liquidation',
                'La phase de bureaucratisation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Intelligence identifie et comprend le problème ; la Modélisation conçoit les pistes et scénarios ; le Choix sélectionne la meilleure option.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Biais cognitifs',
            stepTheme: 'Pièges psychologiques',
            stepTitle: 'Déjouer les biais cognitifs qui faussent les décisions managériales',
            paragraphText:
              'Même avec de bons chiffres, le cerveau humain tombe dans des pièges récurrents que le manager averti doit savoir repérer.\n' +
              '• **Biais de confirmation** : ne retenir que les informations qui confirment son idée initiale et ignorer les signaux d’alerte contraires.\n' +
              '• **Escalade d’engagement (coûts irrécupérables)** : continuer d’injecter de l’argent dans un projet voué à l’échec simplement parce qu’on a déjà beaucoup dépensé.\n' +
              '• **Pensée de groupe (*Groupthink*)** : s’aligner par conformisme sur l’avis du chef sans oser exprimer une critique constructive.\n' +
              'Exemple : désigner un « avocat du diable » en réunion stratégique aide à casser la pensée de groupe et le biais de confirmation.',
            konanTip:
              'L’argent déjà dépensé dans le passé est perdu (*sunk cost*) : une décision rationnelle doit toujours juger les coûts et gains FUTURS.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Une entreprise continue de financer une application que personne n’utilise uniquement parce qu’elle y a déjà investi 80 millions FCFA l’an dernier. Quel biais cognitif commet-elle ?',
              options: [
                'La rationalité parfaite',
                'L’escalade d’engagement (piège des coûts irrécupérables)',
                'L’effet Hawthorne',
                'La synergie systémique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Poursuivre un projet perdant pour ne pas « gâcher » des investissements passés déjà irrécupérables est le biais classique d’escalade d’engagement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Outil chiffré',
            stepTheme: 'Espérance mathématique',
            stepTitle: 'Arbitrer entre deux projets en univers risqué par l’espérance de gain',
            paragraphText:
              'Lorsque les probabilités des états de marché sont estimables (univers risqué), le calcul de l’**espérance mathématique** objective le choix entre deux projets.\n' +
              '• **Projet A** : 60 % de chance de gagner 10 M FCFA et 40 % de chance de gagner 2 M FCFA → $E(A) = 0{,}6 \\times 10 + 0{,}4 \\times 2 = 6{,}8$ M FCFA.\n' +
              '• **Projet B** : 30 % de chance de gagner 25 M FCFA et 70 % de chance de perdre 1 M FCFA → $E(B) = 0{,}3 \\times 25 + 0{,}7 \\times (-1) = 6{,}8$ M FCFA.\n' +
              '• **Analyse du risque** : à espérance égale, un dirigeant prudent préfère le Projet A (aucun scénario de perte) au Projet B plus risqué.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Un projet de lancement digital a 70 % de probabilité de générer un bénéfice de 20 M FCFA et 30 % de probabilité d’engendrer une perte de 10 M FCFA. Quelle est son espérance mathématique de gain ?',
              options: [
                '17 M FCFA',
                '11 M FCFA',
                '10 M FCFA',
                '5 M FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'E(X) = 0,70 × 20 + 0,30 × (−10) = 14 − 3 = 11 M FCFA.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch3_p2',
        order: 2,
        title: 'Diagnostic stratégique externe et interne : PESTEL, 5 Forces de Porter et SWOT',
        summary:
          'Formuler Mission, Vision et objectifs SMART, analyser le macroenvironnement (PESTEL), évaluer l’attractivité sectorielle par les 5 forces de Porter, explorer la chaîne de valeur interne et synthétiser le diagnostic dans une matrice SWOT.',
        conceptExplanation:
          "Avant de choisir une stratégie, l’organisation doit clarifier son identité (**Mission** = raison d’être, **Vision** = cap futur souhaité, **Valeurs** = principes éthiques) et conduire un **diagnostic stratégique** rigoureux à double détente :\n1) **Diagnostic externe** : étudier d’abord le macroenvironnement via la grille **PESTEL** (Politique, Économique, Socioculturel, Technologique, Écologique, Légal), puis la structure concurrentielle du secteur via le modèle des **5 (+1) forces de Michael Porter** (intensité de la rivalité directe, menace des nouveaux entrants, menace des produits de substitution, pouvoir de négociation des clients, pouvoir de négociation des fournisseurs, plus le rôle de l’État).\n2) **Diagnostic interne** : identifier les ressources (financières, humaines, technologiques), les **compétences distinctives** et analyser la **chaîne de valeur de Porter** (activités principales créant directement le produit + activités de soutien).\n\nL’ensemble est synthétisé dans la **matrice SWOT** (Forces/Faiblesses internes × Opportunités/Menaces externes), qui débouche sur des options stratégiques concrètes.",
        formulas: [
          {
            name: 'Critères d’un objectif managérial SMART',
            formula: '\\text{SMART} = \\text{Spécifique} + \\text{Mesurable} + \\text{Atteignable} + \\text{Réaliste} + \\text{Temporellement défini}',
            note: '« Augmenter les ventes » est vague ; « Augmenter le CA B2B de 20 % d’ici le 31 décembre » est SMART.',
          },
        ],
        keyRule:
          'PESTEL analyse le macroenvironnement global ; les 5 Forces de Porter mesurent la rentabilité potentielle d’un secteur précis ; la Chaîne de valeur identifie où l’entreprise crée sa marge en interne.',
        workedExample: {
          title: 'Diagnostic 5 Forces de Porter + SWOT d’un service de livraison à Abidjan',
          statement:
            'Évaluez les forces de Porter pour le secteur de la livraison express de repas à Abidjan et classez : (1) barrières à l’entrée faibles ; (2) algorithme maison optimisant les trajets ; (3) hausse rapide des commandes mobiles.',
          methodSteps: [
            '1) Barrières à l’entrée faibles → Menace forte des nouveaux entrants (Force de Porter) → Menace externe (SWOT).',
            '2) Algorithme maison optimisant les trajets → Ressource technologique interne → Force interne (SWOT).',
            '3) Hausse rapide des commandes mobiles → Tendance externe du marché → Opportunité externe (SWOT).',
          ],
          conclusion:
            'Dans un secteur où l’entrée est facile, l’avantage durable repose sur l’algorithme logistique (Force) et la fidélisation rapide des clients.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cap stratégique',
            stepTheme: 'Mission, Vision, Valeurs et SMART',
            stepTitle: 'Distinguer Mission, Vision, Valeurs et formuler un objectif SMART',
            paragraphText:
              'Toute démarche stratégique commence par répondre à trois questions identitaires avant de fixer des cibles chiffrées.\n' +
              '• **Mission** : raison d’être actuelle de l’organisation (pourquoi existons-nous et quel besoin servons-nous ?).\n' +
              '• **Vision** : projection ambitieuse de ce que l’entreprise veut devenir dans 5 à 10 ans.\n' +
              '• **Valeurs** : principes moraux et comportementaux guidant les décisions quotidiennes (intégrité, innovation, solidarité).\n' +
              '• **Objectifs SMART** : Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini (avec une échéance précise).',
            keyRule:
              'Mission = présent (notre métier) ; Vision = futur (notre ambition) ; Objectif SMART = cible chiffrée et datée permettant de mesurer le succès.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Parmi les formulations suivantes, laquelle respecte intégralement les cinq critères d’un objectif SMART ?',
              options: [
                '« Devenir rapidement beaucoup plus connus sur Internet »',
                '« Augmenter le nombre d’abonnés actifs de notre plateforme de 1 000 à 1 500 d’ici le 30 juin en lançant 2 campagnes ciblées »',
                '« Faire de notre mieux pour satisfaire tout le monde un jour »',
                '« Multiplier notre chiffre d’affaires par 100 dès demain matin sans budget »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La deuxième option est Spécifique (abonnés actifs), Mesurable (1 000 → 1 500), Atteignable/Réaliste (+50 % avec 2 campagnes) et Temporellement définie (30 juin).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Macroenvironnement',
            stepTheme: 'Analyse PESTEL',
            stepTitle: 'Scanner les grandes tendances externes avec le modèle PESTEL',
            paragraphText:
              'Pour ne pas être prise par surprise par des mutations politiques, économiques ou technologiques, la direction passe son environnement au crible des six dimensions **PESTEL**.\n' +
              '• **P (Politique)** & **L (Légal)** : stabilité institutionnelle, fiscalité, droit du travail, protection des données.\n' +
              '• **E (Économique)** : croissance du PIB, inflation, taux d’intérêt, pouvoir d’achat.\n' +
              '• **S (Socioculturel)** : démographie, éducation, modes de vie et usages numériques.\n' +
              '• **T (Technologique)** & **E (Écologique)** : IA, cloud, transition énergétique et normes environnementales.\n' +
              'Exemple : le déploiement de la 5G (Technologique) et l’essor d’une jeunesse connectée (Socioculturel) ouvrent des opportunités majeures en Côte d’Ivoire.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Une nouvelle loi impose à toutes les entreprises numériques d’héberger certaines données sensibles selon des normes strictes de cybersécurité. Quelle dimension PESTEL est directement concernée ?',
              options: [
                'La dimension socioculturelle',
                'La dimension légale (et politique)',
                'La dimension écologique',
                'La chaîne de valeur interne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une obligation issue d’une loi ou d’un décret réglementaire relève directement de la dimension Légale (et Politique) du modèle PESTEL.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Michael Porter',
            stepTheme: 'Les 5 (+1) forces concurrentielles',
            stepTitle: 'Évaluer l’intensité concurrentielle d’un secteur par les 5 forces de Porter',
            paragraphText:
              'Selon **Michael Porter** (1979), la rentabilité moyenne d’un secteur ne dépend pas seulement des rivaux directs, mais de **cinq forces structurelles** (souvent complétées par une 6e : les pouvoirs publics).\n' +
              '• **1. Rivalité entre concurrents existants** : nombre d’acteurs, croissance du secteur, guerre des prix.\n' +
              '• **2. Menace des nouveaux entrants** : d’autant plus forte que les barrières à l’entrée (capital, brevets, licences) sont faibles.\n' +
              '• **3. Menace des produits de substitution** : solutions alternatives répondant au même besoin (ex. visioconférence vs voyage d’affaires).\n' +
              '• **4. Pouvoir de négociation des clients** : fort si clients concentrés ou coûts de changement faibles.\n' +
              '• **5. Pouvoir de négociation des fournisseurs** : fort si fournisseur en quasi-monopole.',
            keyRule:
              'Plus les 5 forces de Porter sont intenses dans un secteur, plus les marges des entreprises sont comprimées et plus le secteur est difficile.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Un secteur ne possède qu’un seul fournisseur mondial capable de livrer un microprocesseur indispensable, qui impose ses tarifs aux fabricants d’ordinateurs. Quelle force de Porter est ici très élevée ?',
              options: [
                'La menace des produits de substitution',
                'Le pouvoir de négociation des fournisseurs',
                'Le pouvoir de négociation des clients finals',
                'La faiblesse des barrières à l’entrée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsqu’un fournisseur détient une position quasi monopolistique sur un composant critique sans remplaçant facile, son pouvoir de négociation est maximal.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Diagnostic interne',
            stepTheme: 'Chaîne de valeur et compétences clés',
            stepTitle: 'Repérer les sources de valeur interne grâce à la chaîne de valeur de Porter',
            paragraphText:
              'Le diagnostic interne examine les forces et faiblesses propres à l’organisation à travers ses ressources, ses **compétences distinctives** (difficiles à imiter) et la **chaîne de valeur de Porter**.\n' +
              '• **Activités principales (5)** : logistique interne, production/opérations, logistique externe, commercialisation/ventes et services (SAV).\n' +
              '• **Activités de soutien (4)** : infrastructure de la firme, gestion des ressources humaines, développement technologique et approvisionnements.\n' +
              '• **Objectif** : repérer les maillons où l’entreprise crée le plus de valeur ou maîtrise le mieux ses coûts, et envisager d’externaliser les maillons non stratégiques.',
            konanTip:
              'Selon le modèle VRIO, une ressource crée un avantage durable si elle a de la Valeur, est Rare, difficile à Imiter et bien exploitée par l’Organisation.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Dans la chaîne de valeur de Michael Porter, laquelle des activités suivantes appartient aux « activités de soutien » plutôt qu’aux activités principales ?',
              options: [
                'La production directe du bien',
                'La commercialisation et la vente',
                'La gestion des ressources humaines (recrutement, formation)',
                'Le service après-vente',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La GRH, les approvisionnements, le développement technologique et l’infrastructure constituent les 4 activités de soutien qui appuient les 5 activités principales.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Matrice SWOT',
            stepTheme: 'Synthèse stratégique',
            stepTitle: 'Construire et lire une matrice SWOT sans erreur de classement',
            paragraphText:
              'La **matrice SWOT** (*Strengths, Weaknesses, Opportunities, Threats* — MOFF en français) synthétise en un tableau clair les conclusions du diagnostic interne et du diagnostic externe.\n' +
              '• **Interne (contrôlable)** : Forces (atouts propres) et Faiblesses (manques internes).\n' +
              '• **Externe (environnement)** : Opportunités (tendances favorables du marché/PESTEL) et Menaces (risques concurrentiels, légaux ou économiques).\n' +
              '• **Utilité** : servir de tremplin direct vers les choix stratégiques, jamais de simple liste descriptive.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice SWOT — Synthèse du diagnostic stratégique',
              caption: 'Croisement des facteurs internes (maîtrisés par l’organisation) et des facteurs externes (issus de l’environnement).',
              matrix2x2: {
                topAxis: ['Facteurs FAVORABLES (+)', 'Facteurs DÉFAVORABLES (−)'],
                leftAxis: ['INTERNE (Entreprise)', 'EXTERNE (Environnement)'],
                topLeft: {
                  title: 'Forces (Strengths)',
                  items: ['Savoir-faire unique, brevets', 'Marque forte, équipe qualifiée', 'Trésorerie solide'],
                  color: 'green',
                },
                topRight: {
                  title: 'Faiblesses (Weaknesses)',
                  items: ['Manque de notoriété', 'Coûts fixes trop élevés', 'Outils techniques obsolètes'],
                  color: 'orange',
                },
                bottomLeft: {
                  title: 'Opportunités (Opportunities)',
                  items: ['Marché en forte croissance', 'Essor du mobile / 5G', 'Aides publiques au numérique'],
                  color: 'blue',
                },
                bottomRight: {
                  title: 'Menaces (Threats)',
                  items: ['Arrivée d’un rival puissant', 'Inflation / baisse pouvoir d’achat', 'Durcissement fiscal ou légal'],
                  color: 'violet',
                },
              },
            },
            keyRule:
              'Interne = Forces & Faiblesses ; Externe = Opportunités & Menaces. Ne place jamais une tendance du marché dans les Forces !',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Dans le diagnostic SWOT d’une PME informatique, où doit-on classer « la pénurie de financements bancaires dans le pays » et « le manque de formation commerciale de son équipe actuelle » ?',
              options: [
                'Respectivement une Menace (externe) et une Faiblesse (interne)',
                'Respectivement une Faiblesse (interne) et une Menace (externe)',
                'Deux Forces internes',
                'Deux Opportunités externes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La pénurie de crédit bancaire dans le pays est subie depuis l’environnement (Menace externe) ; le manque de formation de l’équipe propre à la PME est une Faiblesse interne.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Matrice TOWS',
            stepTheme: 'Du diagnostic à l’action',
            stepTitle: 'Transformer le SWOT en options stratégiques concrètes (logique TOWS)',
            paragraphText:
              'Un diagnostic SWOT ne sert à rien s’il reste accroché au mur : il faut croiser ses quatre cases pour générer des décisions stratégiques (méthode **TOWS**).\n' +
              '• **Forces × Opportunités (Stratégie offensive)** : utiliser ses meilleurs atouts pour capter une opportunité forte.\n' +
              '• **Forces × Menaces (Stratégie défensive)** : s’appuyer sur ses atouts pour contrer une menace externe.\n' +
              '• **Faiblesses × Opportunités (Stratégie de réorientation)** : corriger une faiblesse (ex. par un partenariat) pour ne pas rater une opportunité.\n' +
              '• **Faiblesses × Menaces (Stratégie de survie/retrait)** : réduire les risques, se recentrer ou céder une activité vulnérable.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Une startup possède une excellente équipe technique (Force) mais manque de réseau commercial (Faiblesse) face à un marché régional en plein essor (Opportunité). Signer un partenariat avec un distributeur établi illustre quel croisement stratégique ?',
              options: [
                'Croiser une Faiblesse avec une Opportunité pour surmonter le frein interne et capter la croissance',
                'Une stratégie de liquidation immédiate',
                'Une négligence totale du diagnostic interne',
                'Une simple décision opérationnelle de bureau',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Compenser une faiblesse interne (réseau commercial) par une alliance afin de saisir une opportunité externe correspond au croisement Faiblesse × Opportunité.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Cas ENTD',
            stepTheme: 'Diagnostic intégré',
            stepTitle: 'Articuler PESTEL, 5 Forces et SWOT sur une ESN en Côte d’Ivoire',
            paragraphText:
              'Voici comment les trois outils de diagnostic s’enchaînent sur le cas réel d’une Entreprise de Services du Numérique (ESN) basée à Abidjan.\n' +
              '• **PESTEL** : plan national de digitalisation (P), croissance économique UEMOA (E), essor du cloud/IA (T).\n' +
              '• **5 Forces de Porter** : rivalité moyenne sur les projets simples, mais faible sur la cybersécurité spécialisée ; fort pouvoir des ingénieurs rares.\n' +
              '• **SWOT** : Force = certifications cybersécurité ; Faiblesse = petite taille ; Opportunité = besoins des banques ; Menace = fuite des talents.\n' +
              '• **Décision** : se spécialiser en cybersécurité bancaire et bâtir une académie interne de fidélisation des talents.',
            konanTip:
              'En étude de cas, montre toujours le fil conducteur : PESTEL + 5 Forces → alimentent O/M du SWOT ; Chaîne de valeur → alimente F/W du SWOT → Décision stratégique.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p2_q7',
              type: 'mcq',
              prompt: 'Dans une démarche rigoureuse de diagnostic stratégique, quels outils alimentent directement les cases « Opportunités » et « Menaces » de la matrice SWOT ?',
              options: [
                'Le modèle PESTEL et les 5 forces concurrentielles de Porter',
                'Uniquement l’organigramme interne et la paie des salariés',
                'La pyramide de Maslow et la roue PDCA',
                'Le bilan comptable des exercices passés',
              ],
              correctAnswerIndex: 0,
              explanation:
                'PESTEL (macroenvironnement) et les 5 Forces de Porter (environnement sectoriel) constituent le diagnostic externe qui révèle les Opportunités et Menaces du SWOT.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch3_p3',
        order: 3,
        title: 'Avantage concurrentiel, stratégies génériques et voies de développement',
        summary:
          'Choisir un avantage concurrentiel parmi les 3 stratégies génériques de Porter, distinguer spécialisation, diversification, intégration et externalisation, comparer les modes de croissance et piloter par le Balanced Scorecard.',
        conceptExplanation:
          "À l’issue du diagnostic, l’entreprise formule ses choix stratégiques à deux niveaux : la **stratégie par domaine d’activité (business strategy)** pour obtenir un avantage concurrentiel, et la **stratégie globale (corporate strategy)** pour définir le périmètre de ses métiers.\n\nAu niveau métier, **Michael Porter** identifie trois **stratégies génériques** : la **domination par les coûts** (produire moins cher grâce aux économies d’échelle et à l’effet d’expérience), la **différenciation** (offrir un produit perçu comme unique justifiant un prix supérieur) et la **focalisation / niche** (concentrer ses forces sur un segment très précis). Au niveau global, l’entreprise arbitre entre **spécialisation** et **diversification**, **intégration verticale** (faire soi-même en amont/aval) et **externalisation** (*outsourcing*), puis choisit son mode de croissance (**interne**, **externe** par rachat, ou **conjointe** par alliance). Enfin, la stratégie est pilotée grâce au **Tableau de Bord Prospectif (Balanced Scorecard)** de Kaplan et Norton.",
        formulas: [
          {
            name: 'Les 4 axes du Tableau de Bord Prospectif (Balanced Scorecard)',
            formula: '\\text{BSC} = \\text{Financier} + \\text{Clients} + \\text{Processus internes} + \\text{Apprentissage organisationnel}',
            note: 'Évite de piloter l’entreprise uniquement par les chiffres comptables passés en intégrant les moteurs de performance future.',
          },
        ],
        keyRule:
          'Attention à « l’enlisement dans la voie médiane » (Porter) : vouloir être à la fois le moins cher sans volume et le plus différencié sans budget mène souvent à perdre sur les deux tableaux.',
        workedExample: {
          title: 'Choisir la stratégie générique et le mode de croissance d’une EdTech',
          statement:
            'Une EdTech ivoirienne veut s’étendre dans trois pays voisins. Comparez : (1) sa stratégie générique si elle propose un tuteur IA personnalisé unique ; (2) croissance interne vs alliance avec des écoles locales.',
          methodSteps: [
            '1) Stratégie générique : DIFFÉRENCIATION (offre innovante à forte valeur perçue, difficile à copier sur le seul prix).',
            '2) Croissance interne (ouvrir des bureaux seule) : contrôle total mais lente et coûteuse en trésorerie.',
            '3) Croissance conjointe (alliance/partenariat avec des établissements locaux) : accès rapide aux étudiants, partage des coûts et crédibilité locale immédiate.',
          ],
          conclusion:
            'Associer différenciation technologique et croissance conjointe accélère l’expansion régionale en limitant le risque financier.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Porter',
            stepTheme: '3 stratégies génériques',
            stepTitle: 'Maîtriser les 3 stratégies génériques de Michael Porter',
            paragraphText:
              'Pour surperformer durablement ses concurrents sur un marché, **Michael Porter** montre qu’une entreprise doit choisir clairement l’une des trois grandes voies d’avantage concurrentiel :\n' +
              '• **Domination par les coûts** : obtenir les coûts de revient les plus bas du secteur (économies d’échelle, standardisation, effet d’expérience) pour pratiquer des prix bas ou dégager de fortes marges.\n' +
              '• **Différenciation** : proposer une offre nettement distincte (qualité, design, marque, innovation, service) pour laquelle le client accepte un surprix.\n' +
              '• **Focalisation (stratégie de niche)** : se concentrer sur un segment très étroit (clientèle ou zone géographique spécifique) que les généralistes servent mal.',
            keyRule:
              'Domination par les coûts = volume et efficience ; Différenciation = valeur unique perçue ; Focalisation = expertise pointue sur une niche.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p3_q1',
              type: 'mcq',
              prompt: 'Une marque technologique investit massivement dans le design, la simplicité d’usage et un écosystème exclusif lui permettant de vendre ses appareils 40 % plus cher que la moyenne du marché. Quelle stratégie générique de Porter déploie-t-elle ?',
              options: [
                'La domination par les coûts',
                'La différenciation',
                'L’externalisation totale',
                'L’intégration amont',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Créer une offre perçue comme unique et supérieure afin de justifier un prix premium et fidéliser les clients définit la stratégie de différenciation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Périmètre global',
            stepTheme: 'Spécialisation vs Diversification',
            stepTitle: 'Arbitrer entre spécialisation et diversification des activités',
            paragraphText:
              'Au niveau du groupe (*corporate strategy*), les dirigeants décident s’ils doivent approfondir un seul métier ou en investir plusieurs.\n' +
              '• **Spécialisation** : concentrer toutes les ressources sur un métier unique pour devenir le meilleur expert (effet d’expérience fort, mais dépendance à un seul marché en cas de crise).\n' +
              '• **Diversification liée (concentrique)** : entrer dans un nouveau métier partageant des synergies technologiques ou commerciales avec l’activité historique (ex. un opérateur télécom lançant du Mobile Money).\n' +
              '• **Diversification conglomérale** : investir dans des secteurs sans aucun lien pour répartir le risque financier (ex. agroalimentaire + immobilier + médias).',
            konanTip:
              'La diversification liée réussit généralement mieux que la diversification conglomérale car elle capitalise sur la marque, la clientèle ou la technologie existante.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p3_q2',
              type: 'mcq',
              prompt: 'Un opérateur de téléphonie mobile utilise sa base d’abonnés et son réseau de distributeurs pour lancer un service de paiement mobile et de micro-assurance. De quelle stratégie globale s’agit-il ?',
              options: [
                'Une spécialisation stricte',
                'Une diversification liée (exploitant des synergies commerciales et techniques)',
                'Un désinvestissement total',
                'Une liquidation judiciaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lancer de nouvelles activités financières en s’appuyant sur des synergies existantes (réseau d’agents, marque, clients mobiles) constitue une diversification liée.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Make or Buy',
            stepTheme: 'Intégration verticale vs Externalisation',
            stepTitle: 'Choisir entre « faire soi-même » (intégration) et « faire faire » (externalisation)',
            paragraphText:
              'Faut-il tout réaliser en interne ou confier certaines activités à des partenaires spécialisés ? C’est le choix classique *Make or Buy*.\n' +
              '• **Intégration verticale** : absorber des activités en **amont** (fournisseurs/matières premières) ou en **aval** (distribution/boutiques) pour sécuriser l’approvisionnement, capter plus de marge et contrôler la qualité.\n' +
              '• **Externalisation (*Outsourcing*)** : confier durablement une activité hors cœur de métier (hébergement cloud, paie, nettoyage, livraison, centre d’appels) à un prestataire spécialisé pour gagner en flexibilité et réduire les coûts fixes.\n' +
              'Exemple : une startup fintech externalise ses serveurs sur le cloud plutôt que de construire son propre datacenter.',
            keyRule:
              'Règle d’or : garder en interne son « cœur de compétence » créateur d’avantage concurrentiel et externaliser les activités annexes non différenciantes.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p3_q3',
              type: 'mcq',
              prompt: 'Une entreprise de e-commerce confie l’intégralité de sa comptabilité et de la livraison de ses colis à des prestataires spécialisés afin de se concentrer sur sa plateforme et son marketing. Quelle manœuvre stratégique met-elle en œuvre ?',
              options: [
                'Une intégration verticale en amont',
                'Une externalisation (outsourcing) avec recentrage sur le cœur de métier',
                'Une diversification conglomérale',
                'Une fusion-acquisition hostile',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Transférer des fonctions supports ou logistiques à des partenaires externes spécialisés pour concentrer ses ressources sur son cœur de métier est l’externalisation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Modes de croissance',
            stepTheme: 'Interne, externe, conjointe',
            stepTitle: 'Comparer croissance interne, croissance externe et croissance conjointe',
            paragraphText:
              'Une fois la direction choisie, l’entreprise dispose de trois modalités concrètes pour grandir.\n' +
              '• **Croissance interne (organique)** : développer ses propres capacités (recrutement, R&D, ouverture d’agences) → maîtrise culturelle totale, mais plus lente.\n' +
              '• **Croissance externe** : racheter ou fusionner avec une autre entreprise (fusions-acquisitions) → gain rapide de parts de marché et de brevets, mais coût financier élevé et risque de choc culturel.\n' +
              '• **Croissance conjointe (alliances & partenariats)** : coopérer avec un autre acteur (alliance stratégique, *joint-venture* / coentreprise) tout en restant indépendant → partage des risques et des coûts.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Deux entreprises technologiques restent juridiquement indépendantes mais créent ensemble une filiale commune à 50/50 pour développer une plateforme de paiement transfrontalier. Quel mode de croissance utilisent-elles ?',
              options: [
                'La croissance interne pure',
                'La croissance conjointe (coentreprise / joint-venture)',
                'La liquidation d’actifs',
                'La domination par les coûts',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La création d’une entité commune (joint-venture) ou d’un partenariat entre entreprises indépendantes relève de la croissance conjointe.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Océan Bleu',
            stepTheme: 'Innovation de valeur',
            stepTitle: 'Sortir de la guerre concurrentielle grâce à la stratégie Océan Bleu',
            paragraphText:
              'Proposée par W. Chan Kim et Renée Mauborgne, la **stratégie Océan Bleu** invite les entreprises à cesser de se battre dans des marchés saturés.\n' +
              '• **Océan Rouge** : marché existant hyper-concurrentiel où les rivaux se disputent la même demande à coups de guerres de prix (eau « rougie » par la lutte).\n' +
              '• **Océan Bleu** : créer un nouvel espace de marché encore inexploré en combinant **différenciation et maîtrise des coûts** (*innovation de valeur*) : on élimine les critères jugés inutiles par le client et on crée de nouveaux bénéfices décisifs.\n' +
              'Exemple : le Mobile Money en Afrique a créé un immense Océan Bleu en rendant les services financiers accessibles à des millions de « non-clients » des banques classiques.',
            konanTip:
              'Pour trouver un Océan Bleu, observe les « non-clients » : pourquoi certaines personnes n’utilisent-elles pas encore les offres existantes du secteur ?',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p3_q5',
              type: 'mcq',
              prompt: 'Quel est le principe fondamental d’une « stratégie Océan Bleu » par opposition à un « Océan Rouge » ?',
              options: [
                'Baisser ses prix de 50 % pour détruire ses rivaux sur un marché déjà saturé',
                'Créer un nouvel espace de marché inexploré en innovant sur la valeur pour attirer des non-clients et rendre la concurrence hors-jeu',
                'Vendre uniquement des produits maritimes',
                'Copier exactement l’offre du leader historique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La stratégie Océan Bleu sort de l’affrontement frontal (Océan Rouge) en inventant une proposition de valeur nouvelle qui ouvre une demande inédite.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Balanced Scorecard',
            stepTheme: 'Contrôle stratégique',
            stepTitle: 'Piloter l’exécution stratégique avec le Tableau de Bord Prospectif (BSC)',
            paragraphText:
              'La meilleure stratégie échoue sans suivi rigoureux : Robert Kaplan et David Norton ont conçu le **Balanced Scorecard (Tableau de Bord Prospectif)** pour piloter la performance sur quatre axes équilibrés.\n' +
              '• **1. Axe Financier** : rentabilité, trésorerie, croissance du chiffre d’affaires.\n' +
              '• **2. Axe Clients** : satisfaction, fidélisation, part de marché, délai de livraison.\n' +
              '• **3. Axe Processus internes** : qualité, taux de bugs, productivité, innovation.\n' +
              '• **4. Axe Apprentissage organisationnel** : formation des équipes, climat social, maîtrise des outils numériques.\n' +
              'Logique causale : former les équipes (4) → améliore les processus (3) → satisfait les clients (2) → génère les profits (1).',
            keyRule:
              'Les résultats financiers ne sont que le rétroviseur du passé ; les axes Clients, Processus et Apprentissage sont le pare-brise de la performance future.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch3_p3_q6',
              type: 'mcq',
              prompt: 'Quels sont les quatre axes du Tableau de Bord Prospectif (Balanced Scorecard) de Kaplan et Norton ?',
              options: [
                'Produit, Prix, Distribution, Communication',
                'Financier, Clients, Processus internes et Apprentissage organisationnel',
                'Forces, Faiblesses, Opportunités, Menaces',
                'Politique, Économique, Social, Technologique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Balanced Scorecard équilibre le pilotage autour de quatre perspectives liées : Financière, Clients, Processus internes et Apprentissage/Innovation.',
            },
          },
        ],
      }),
    ],
  },


  // ==========================================================================
  // CHAPITRE 4 : LEADERSHIP, MOTIVATION, GESTION D’ÉQUIPE ET MANAGEMENT DIGITAL
  // ==========================================================================
  {
    id: 'lmd_entd_l1_intro_management_ch4',
    subjectId: 'lmd_intro_management',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 — Leadership, motivation, gestion d’équipe et management digital',
    summary:
      'Maîtriser les styles de leadership (French & Raven, grille de Blake et Mouton, leadership situationnel d’Hersey et Blanchard), les théories de la motivation (Équité d’Adams, VIE de Vroom), la dynamique de groupe et la gestion des conflits, ainsi que les enjeux contemporains (agilité Scrum, travail hybride, conduite du changement, IA et RSE).',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Introduction au Management',
    points: [
      makePoint({
        id: 'lmd_entd_l1_intro_management_ch4_p1',
        order: 1,
        title: 'Leadership et styles de direction : Blake & Mouton et leadership situationnel',
        summary:
          'Identifier les 5 sources de pouvoir du leader, positionner les styles managériaux sur la grille de Blake et Mouton, adapter son style au niveau de maturité des collaborateurs (Hersey & Blanchard) et pratiquer une délégation efficace.',
        conceptExplanation:
          "Le **leadership** est la capacité d’influencer, d’inspirer et de mobiliser volontairement des individus autour d’une vision commune. Selon **French et Raven**, l’influence d’un manager s’appuie sur cinq sources de pouvoir : trois pouvoirs de position (**légitime**, de **récompense**, **coercitif**) et deux pouvoirs personnels beaucoup plus durables (**pouvoir d’expertise** et **pouvoir charismatique / de référence**).\n\nDeux modèles majeurs guident le style de direction au quotidien :\n1) La **grille managériale de Blake et Mouton** croise l’intérêt pour la **production / tâches** (axe horizontal, 1 à 9) et l’intérêt pour les **hommes / relations** (axe vertical, 1 à 9), identifiant cinq styles dont le style **intégrateur / d’équipe (9,9)** comme idéal.\n2) Le **leadership situationnel d’Hersey et Blanchard** prouve qu’un même manager doit adapter son style (**Directif**, **Persuasif**, **Participatif** ou **Délégatif**) au niveau de maturité (compétence + motivation) de chaque collaborateur sur une tâche précise.",
        formulas: [
          {
            name: 'Les 4 styles du Leadership Situationnel (Hersey & Blanchard)',
            formula: 'M_1 \\rightarrow \\text{Directif} \\quad | \\quad M_2 \\rightarrow \\text{Persuasif} \\quad | \\quad M_3 \\rightarrow \\text{Participatif} \\quad | \\quad M_4 \\rightarrow \\text{Délégatif}',
            note: 'Plus la compétence et l’engagement du collaborateur progressent (M1 → M4), plus le manager réduit les consignes détaillées pour accorder de l’autonomie.',
          },
        ],
        keyRule:
          'Un bon leader n’a pas un style unique figé : il adapte son degré de directivité et de soutien à la compétence et à la confiance de chaque collaborateur.',
        workedExample: {
          title: 'Adapter son style managérial à deux profils d’une même équipe IT',
          statement:
            'Dans votre équipe de développement, Awa est stagiaire débutante (très motivée mais ne maîtrise pas encore le framework) et Yao est développeur senior autonome et engagé depuis 4 ans. Quel style d’Hersey et Blanchard adopter pour chacun ?',
          methodSteps: [
            '1) Pour Awa (faible compétence technique, forte envie d’apprendre → profil M1/M2) : adopter un style DIRECTIF puis PERSUASIF (consignes claires, démonstrations, suivi rapproché et encouragements).',
            '2) Pour Yao (haute compétence + haute motivation → profil M4) : adopter un style DÉLÉGATIF (fixer l’objectif final et le délai, lui laisser le choix des solutions techniques et faire des points d’étape légers).',
          ],
          conclusion:
            'Traiter un senior en mode directif le démotive (micro-management), tandis que déléguer sans cadre à un débutant le met en échec.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Sources de pouvoir',
            stepTheme: 'French & Raven',
            stepTitle: 'Distinguer les 5 sources de pouvoir du manager-leader',
            paragraphText:
              'Pourquoi une équipe suit-elle son responsable ? **French et Raven** (1959) identifient cinq bases de pouvoir aux effets très différents sur l’engagement.\n' +
              '• **Pouvoir légitime** : lié au titre officiel dans l’organigramme.\n' +
              '• **Pouvoir de récompense** : capacité à accorder primes, promotions ou félicitations.\n' +
              '• **Pouvoir coercitif** : capacité à sanctionner ou blâmer (crée l’obéissance par peur, jamais l’engagement).\n' +
              '• **Pouvoir d’expertise** : légitimité fondée sur la compétence technique et la maîtrise reconnue.\n' +
              '• **Pouvoir de référence (charisme)** : admiration, confiance et exemplarité éthique.\n' +
              'Exemple : un chef de projet respecté pour son expertise et sa droiture mobilise durablement même sans menace de sanction.',
            keyRule:
              'Les pouvoirs de position (légitime, récompense, coercition) obtiennent la conformité ; les pouvoirs personnels (expertise, référence) suscitent l’adhésion sincère.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p1_q1',
              type: 'mcq',
              prompt: 'Une ingénieure cybersécurité n’a pas encore de titre de directrice, mais toute l’équipe suit volontiers ses recommandations grâce à sa maîtrise technique exceptionnelle. Quelle source de pouvoir de French et Raven exerce-t-elle ?',
              options: [
                'Le pouvoir coercitif',
                'Le pouvoir d’expertise',
                'Le pouvoir bureaucratique légal',
                'Le pouvoir de sanction financière',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’influence fondée sur la compétence reconnue et le savoir-faire pointu correspond au pouvoir d’expertise.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Blake & Mouton',
            stepTheme: 'Grille managériale',
            stepTitle: 'Positionner les styles de direction sur la grille de Blake et Mouton',
            paragraphText:
              'Robert Blake et Jane Mouton évaluent tout style managérial sur deux axes notés de 1 à 9 : l’intérêt porté aux **résultats/tâches** et l’intérêt porté aux **relations humaines**.\n' +
              '• **Style laxiste / appauvri (1,1)** : faible souci des résultats et des personnes (laisser-faire).\n' +
              '• **Style autoritaire (9,1)** : obsession de la tâche au détriment du climat humain.\n' +
              '• **Style social / club de vacances (1,9)** : ambiance chaleureuse mais objectifs négligés.\n' +
              '• **Style intégrateur / d’équipe (9,9)** : forte exigence de résultats alliée à une forte attention humaine (style idéal).',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Grille managériale de Blake et Mouton (4 pôles majeurs)',
              caption: 'Au centre (5,5) se situe le style de compromis ; le style intégrateur (9,9) concilie performance élevée et engagement humain.',
              matrix2x2: {
                topAxis: ['Intérêt FAIBLE pour la tâche', 'Intérêt FORT pour la tâche'],
                leftAxis: ['Intérêt FORT pour l’humain', 'Intérêt FAIBLE pour l’humain'],
                topLeft: {
                  title: 'Style Social (1,9)',
                  items: ['Priorité absolue à la bonne ambiance', 'Conflits évités, faible exigence', 'Risque : résultats insuffisants'],
                  color: 'blue',
                },
                topRight: {
                  title: 'Style Intégrateur / Équipe (9,9)',
                  items: ['Objectifs ambitieux partagés', 'Confiance, écoute et responsabilisation', 'Style le plus performant durablement'],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Style Laxiste / Appauvri (1,1)',
                  items: ['Effort minimal du manager', 'Ni suivi des tâches ni soutien humain', 'Risque : désorganisation et dérive'],
                  color: 'slate',
                },
                bottomRight: {
                  title: 'Style Autoritaire (9,1)',
                  items: ['Exigence maximale de rendement', 'Contrôle strict, peu d’écoute', 'Risque : stress, conflits et turn-over'],
                  color: 'orange',
                },
              },
            },
            keyRule:
              'Le style (9,9) de Blake et Mouton prouve qu’exigence sur les résultats et bienveillance envers les personnes se renforcent mutuellement au lieu de s’opposer.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p1_q2',
              type: 'mcq',
              prompt: 'Sur la grille managériale de Blake et Mouton, quel profil caractérise un manager qui combine une forte exigence de performance (9) et une forte attention au bien-être et à la participation de son équipe (9) ?',
              options: [
                'Le style laxiste (1,1)',
                'Le style autoritaire centré sur la tâche (9,1)',
                'Le style intégrateur / management d’équipe (9,9)',
                'Le style social / club de vacances (1,9)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les coordonnées (9,9) représentent le style intégrateur (management d’équipe), qui associe objectifs ambitieux et climat de confiance participatif.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Hersey & Blanchard',
            stepTheme: 'Leadership situationnel',
            stepTitle: 'Adapter son style au niveau de maturité (Directif, Persuasif, Participatif, Délégatif)',
            paragraphText:
              'Paul Hersey et Ken Blanchard montrent que le style idéal dépend du degré de maturité professionnelle du collaborateur face à une tâche donnée :\n' +
              '• **Directif (M1 : faible compétence)** : le manager structure, explique pas à pas et contrôle de près.\n' +
              '• **Persuasif (M2 : compétence en cours, besoin de repères)** : le manager explique le *pourquoi*, vend le sens et encourage fortement.\n' +
              '• **Participatif (M3 : compétent mais doute ou manque de confiance)** : le manager co-construit les décisions, écoute et valorise.\n' +
              '• **Délégatif (M4 : très compétent et très motivé)** : le manager fixe le cap et laisse pleine autonomie d’exécution.',
            konanTip:
              'Un même salarié peut être M4 sur une tâche qu’il maîtrise depuis 5 ans (style délégatif) et M1 sur un nouveau logiciel qu’il découvre aujourd’hui (style directif) !',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p1_q3',
              type: 'mcq',
              prompt: 'Selon le modèle du leadership situationnel d’Hersey et Blanchard, quel style adopter avec un collaborateur très compétent sur son métier mais temporairement hésitant et en manque de confiance ?',
              options: [
                'Le style directif strict (contrôle pas à pas)',
                'Le style participatif (écoute, co-décision et soutien relationnel)',
                'Le style coercitif par sanctions',
                'Le style laxiste sans aucun contact',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour un profil M3 (compétent mais manquant d’assurance ou d’élan), le style participatif réduit les directives techniques tout en apportant un fort soutien relationnel.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Leaders modernes',
            stepTheme: 'Transactionnel vs Transformationnel',
            stepTitle: 'Opposer leadership transactionnel et leadership transformationnel',
            paragraphText:
              'La recherche contemporaine distingue deux grandes postures de leadership selon l’ambition de changement portée par l’organisation.\n' +
              '• **Leadership transactionnel** : fondé sur un échange rationnel clair (« tu atteins cet objectif, tu reçois cette prime ou reconnaissance ») → efficace pour stabiliser les opérations courantes.\n' +
              '• **Leadership transformationnel** : inspire par une vision ambitieuse, stimule la créativité, incarne l’exemplarité et fait grandir chaque collaborateur au-delà de ses limites.\n' +
              '• **Servant leadership (leader serviteur)** : le manager se met au service de la réussite de son équipe en levant les obstacles qui la freinent.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p1_q4',
              type: 'mcq',
              prompt: 'Qu’est-ce qui caractérise principalement un « leader transformationnel » par rapport à un leader purement transactionnel ?',
              options: [
                'Il se contente de distribuer des primes en échange d’heures supplémentaires',
                'Il fédère autour d’une vision inspirante, stimule l’innovation et développe le potentiel de ses collaborateurs pour conduire le changement',
                'Il refuse tout objectif de performance',
                'Il interdit toute initiative individuelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le leadership transformationnel dépasse le simple échange récompense/tâche pour inspirer, transformer les pratiques et faire évoluer les personnes.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Délégation',
            stepTheme: 'Déléguer sans abdiquer',
            stepTitle: 'Réussir une délégation efficace sans tomber dans l’abandon',
            paragraphText:
              'Beaucoup de jeunes managers échouent soit par **micro-management** (tout faire soi-même par peur de l’erreur), soit par **abdication** (lâcher une tâche sans cadre ni suivi).\n' +
              '• **Règle d’or de la délégation** : on délègue une *mission*, les *moyens* et le *droit de décider*, mais le manager reste co-responsable du résultat final devant sa hiérarchie.\n' +
              '• **4 étapes clés** : clarifier l’objectif SMART et les marges de manœuvre → vérifier la compréhension et les ressources → fixer des points d’étape (jalons) → reconnaître le succès ou débriefer de façon constructive.\n' +
              'Exemple : déléguer l’organisation d’un webinaire avec un budget défini et un point d’étape 7 jours avant l’événement.',
            keyRule:
              'Déléguer ≠ se débarrasser d’une corvée : c’est confier une responsabilité claire avec des moyens, des jalons de contrôle et un droit à l’erreur encadré.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p1_q5',
              type: 'mcq',
              prompt: 'Lorsqu’un manager délègue un projet important à un collaborateur, quelle affirmation reste toujours vraie ?',
              options: [
                'Le manager n’est plus du tout responsable du résultat final si le projet échoue',
                'Le manager confie l’exécution et les moyens avec des jalons de suivi, tout en restant ultimement garant du résultat devant sa direction',
                'Le manager ne doit donner aucun objectif ni aucun budget',
                'Déléguer consiste à refaire secrètement le travail soi-même la nuit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La délégation responsabilise le collaborateur dans un cadre clair, mais le délégant conserve toujours la responsabilité globale finale.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Feedback',
            stepTheme: 'Communication managériale',
            stepTitle: 'Pratiquer un feedback constructif (méthode DESC) pour faire progresser',
            paragraphText:
              'Un leadership crédible repose sur des retours réguliers, factuels et respectueux — tant pour féliciter que pour recadrer un écart.\n' +
              '• **Méthode DESC** : **D**écrire les faits précis et objectifs (sans juger la personne) ; **E**xprimer l’impact constaté ; **S**pécifier la solution attendue ensemble ; **C**onclure sur les bénéfices positifs.\n' +
              '• **Règle de forme** : on félicite en public, on recadre toujours en privé et rapidement après les faits.\n' +
              'Exemple : « Sur les 3 derniers rapports, la synthèse chiffrée manquait (D), ce qui retarde le comité (E) ; utilisons ce modèle dès lundi (S) pour gagner 2 heures par semaine (C). »',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p1_q6',
              type: 'mcq',
              prompt: 'Quelle règle de base garantit qu’un feedback de recadrage soit constructif et bien reçu par un collaborateur ?',
              options: [
                'Critiquer la personnalité du salarié devant toute l’équipe',
                'S’appuyer sur des faits précis et observables en entretien individuel, puis co-construire une solution d’amélioration',
                'Attendre 11 mois avant de signaler une erreur répétée',
                'Envoyer un reproche vague sans proposer d’axe de progrès',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un feedback factuel, rapide, réalisé en privé et orienté vers les solutions (méthode DESC) corrige l’écart sans humilier ni démotiver.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch4_p2',
        order: 2,
        title: 'Théories de la motivation (Équité, Vroom) et gestion des conflits',
        summary:
          'Distinguer motivation intrinsèque et extrinsèque, maîtriser la théorie de l’équité de Stacy Adams, la théorie VIE de Victor Vroom, les stades de Tuckman et les 5 postures de gestion des conflits de Thomas-Kilmann.',
        conceptExplanation:
          "Au-delà des besoins (Maslow, Herzberg), les théories dites « de processus » expliquent comment un individu décide d’investir son énergie au travail :\n1) **Théorie de l’équité de Stacy Adams** : chaque salarié compare son ratio $\\frac{\\text{Rétributions (salaire, reconnaissance)}}{\\text{Contributions (efforts, diplômes, temps)}}$ à celui de ses collègues de référence. Un sentiment d’iniquité provoque aussitôt baisse d’effort, absentéisme ou départ.\n2) **Théorie des attentes (VIE) de Victor Vroom** : la motivation est le produit de trois facteurs — **Valence** (valeur personnelle de la récompense), **Instrumentalité** (certitude que la performance mène bien à la récompense) et **Expectation** (confiance en sa capacité à réussir). Si l’un des trois vaut zéro, la motivation s’effondre ($M = V \\times I \\times E$).\n\nEnfin, toute équipe traverse des phases de développement (**Tuckman** : Forming, Storming, Norming, Performing) et des désaccords. Pour gérer efficacement les conflits, le modèle de **Thomas-Kilmann** distingue cinq postures : compétition, évitement, accommodement, compromis et **collaboration (gagnant-gagnant)**.",
        formulas: [
          {
            name: 'Équation de la motivation de Victor Vroom (Modèle VIE)',
            formula: 'M = V \\times I \\times E \\quad (\\text{Valence} \\times \\text{Instrumentalité} \\times \\text{Expectation})',
            note: 'Relation multiplicative : si un seul des trois facteurs est nul (ex. objectif jugé impossible, E = 0), la motivation totale est nulle !',
          },
          {
            name: 'Ratio d’équité perçue de Stacy Adams',
            formula: '\\frac{\\text{Rétributions}_{\\text{moi}}}{\\text{Contributions}_{\\text{moi}}} \\stackrel{?}{=} \\frac{\\text{Rétributions}_{\\text{collègue}}}{\\text{Contributions}_{\\text{collègue}}}',
            note: 'L’équité perçue compte autant que le niveau absolu du salaire.',
          },
        ],
        keyRule:
          'Dans le modèle VIE de Vroom ($M = V \\times I \\times E$), trois conditions sont simultanément indispensables : se sentir capable (E), croire que la promesse sera tenue (I) et désirer réellement la récompense (V).',
        workedExample: {
          title: 'Diagnostiquer une perte de motivation avec Adams et Vroom',
          statement:
            'Un commercial très performant apprend qu’un collègue produisant deux fois moins de ventes perçoit exactement la même prime, et que son nouvel objectif annuel est triplé sans aucun moyen supplémentaire. Expliquez sa démotivation par Adams et Vroom.',
          methodSteps: [
            '1) Selon Stacy Adams (Équité) : son ratio Rétributions/Contributions est nettement inférieur à celui de son collègue → fort sentiment d’injustice qui pousse au désengagement.',
            '2) Selon Victor Vroom (VIE) : objectif triplé sans moyens → l’Expectation (E, croyance de pouvoir réussir) tombe à zéro, donc M = V × I × 0 = 0.',
          ],
          conclusion:
            'Rétablir des critères de prime transparents et équitables ainsi que des objectifs ambitieux mais atteignables restaure immédiatement la motivation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '2 moteurs',
            stepTheme: 'Motivation intrinsèque vs extrinsèque',
            stepTitle: 'Distinguer motivation intrinsèque et motivation extrinsèque',
            paragraphText:
              'La motivation au travail repose sur deux moteurs complémentaires que le manager doit savoir doser avec finesse.\n' +
              '• **Motivation extrinsèque** : déclenchée par un élément extérieur à la tâche elle-même (salaire, prime, bonus, promotion, crainte d’une sanction).\n' +
              '• **Motivation intrinsèque** : née du plaisir, de la curiosité, du sentiment de compétence, d’autonomie et du sens trouvé directement dans l’activité.\n' +
              '• **Enseignement clé** : les incitations financières attirent et retiennent, mais seule la motivation intrinsèque nourrit la créativité, la qualité et l’engagement sur le long terme.',
            keyRule:
              'Un salaire juste est indispensable, mais dans les métiers créatifs et numériques, le sens du projet et l’autonomie sont les plus puissants moteurs de performance.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Une développeuse s’investit avec passion dans un projet open-source parce qu’elle adore résoudre des défis algorithmiques et apprendre de nouvelles technologies, même sans prime financière. Quel type de motivation l’anime ?',
              options: [
                'Une motivation purement extrinsèque',
                'Une motivation intrinsèque',
                'Une contrainte coercitive',
                'Une iniquité négative',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lorsque l’engagement vient directement de l’intérêt, du plaisir d’apprendre et du sens de l’activité elle-même, il s’agit de motivation intrinsèque.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Stacy Adams',
            stepTheme: 'Théorie de l’équité',
            stepTitle: 'Prévenir le désengagement grâce à la théorie de l’équité d’Adams',
            paragraphText:
              'Pour **Stacy Adams** (1963), la motivation ne dépend pas seulement de ce que l’on gagne, mais de la **justice perçue** en se comparant aux autres.\n' +
              '• **Comparaison sociale** : chacun évalue ses *Contributions* (efforts, diplômes, ancienneté, résultats) face à ses *Rétributions* (salaire, statut, reconnaissance, avantages).\n' +
              '• **Effets de l’iniquité négative** : si un salarié s’estime moins récompensé qu’un collègue à effort égal, il réduit ses efforts, demande une augmentation ou quitte l’entreprise.\n' +
              '• **Rôle du manager** : garantir la transparence des critères d’évaluation, de primes et de promotions.',
            konanTip:
              'Équité ne signifie pas « donner exactement la même chose à tout le monde » (égalitarisme), mais récompenser proportionnellement aux contributions réelles de chacun.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p2_q2',
              type: 'mcq',
              prompt: 'Selon la théorie de l’équité de Stacy Adams, quelle réaction risque d’adopter un salarié qui constate que son ratio Rétributions/Contributions est nettement inférieur à celui d’un collègue occupant un poste similaire ?',
              options: [
                'Doubler gratuitement ses heures de travail par reconnaissance',
                'Réduire son niveau d’effort, se démotiver ou chercher un autre employeur pour rétablir l’équilibre',
                'Ne jamais se comparer à personne dans l’entreprise',
                'Demander une baisse de sa propre rémunération',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Face à une iniquité perçue, l’individu cherche à réduire la tension en diminuant ses contributions (freinage, désengagement), en négociant ses rétributions ou en partant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Victor Vroom',
            stepTheme: 'Théorie VIE (Attentes)',
            stepTitle: 'Activer les trois leviers du modèle VIE de Victor Vroom',
            paragraphText:
              'Selon **Victor Vroom** (1964), un collaborateur ne s’engage pleinement que si trois conditions cognitives sont réunies simultanément ($M = V \\times I \\times E$) :\n' +
              '• **E — Expectation (Attente)** : « Si je fais un effort, suis-je capable d’atteindre l’objectif ? » (rôle de la formation et des moyens).\n' +
              '• **I — Instrumentalité** : « Si j’atteins l’objectif, aurai-je vraiment la récompense promise ? » (rôle de la confiance et de la parole tenue).\n' +
              '• **V — Valence** : « Cette récompense a-t-elle réellement de la valeur à mes yeux ? » (prime, formation, télétravail, promotion).\n' +
              'Exemple : promettre une prime non versée l’année précédente détruit l’Instrumentalité ($I = 0$) et annule toute motivation.',
            formula: {
              name: 'Formule multiplicative de Vroom',
              formula: '\\text{Motivation} = \\text{Valence } (V) \\times \\text{Instrumentalité } (I) \\times \\text{Expectation } (E)',
              note: 'Un manager doit renforcer les trois maillons : moyens/coaching (E), promesses tenues (I) et récompenses personnalisées (V).',
            },
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p2_q3',
              type: 'mcq',
              prompt: 'Un manager fixe un objectif réaliste (E élevé) et promet une prime attractive (V élevée), mais l’entreprise n’a jamais respecté ses promesses de primes les années passées. Quel facteur du modèle VIE de Vroom bloque la motivation ?',
              options: [
                'L’Expectation (E)',
                'L’Instrumentalité (I : confiance dans le lien performance → récompense)',
                'La Valence (V)',
                'La segmentation comportementale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Instrumentalité mesure la croyance que la réussite entraînera effectivement la récompense promise : des promesses non tenues font chuter I à zéro.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Edwin Locke',
            stepTheme: 'Goal Setting Theory',
            stepTitle: 'Stimuler la performance par des objectifs clairs et stimulants (Locke)',
            paragraphText:
              'Les travaux d’**Edwin Locke** (*Goal Setting Theory*) confirment qu’un objectif précis et stimulant produit une performance nettement supérieure à une consigne vague du type « faites de votre mieux ».\n' +
              '• **Clarté et défi** : un objectif spécifique et légèrement ambitieux focalise l’attention et mobilise l’énergie.\n' +
              '• **Engagement partagé** : associer le collaborateur à la fixation de son objectif renforce son adhésion.\n' +
              '• **Feedback continu** : informer régulièrement la personne de sa progression permet d’ajuster l’effort en temps réel.\n' +
              'Exemple : viser « réduire le temps de réponse client de 24 h à 6 h d’ici 2 mois » mobilise bien mieux que « répondez plus vite ».',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p2_q4',
              type: 'mcq',
              prompt: 'Selon la théorie de la fixation des objectifs (Edwin Locke), quel type d’objectif génère la meilleure performance chez une équipe ?',
              options: [
                'Un objectif vague du type « essayez de faire de votre mieux »',
                'Un objectif spécifique, mesurable, ambitieux mais atteignable, accompagné de retours réguliers',
                'Un objectif secret que seul le directeur connaît',
                'Un objectif impossible à atteindre pour maintenir la pression',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Locke démontre que des objectifs précis, stimulants mais réalistes, combinés à un feedback régulier, maximisent l’effort et la persévérance.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Dynamique d’équipe',
            stepTheme: 'Modèle de Tuckman',
            stepTitle: 'Accompagner les 4 stades de maturité d’une équipe (Tuckman)',
            paragraphText:
              'Une équipe nouvellement formée n’est jamais immédiatement au sommet de son efficacité : **Bruce Tuckman** identifie quatre étapes naturelles de construction collective.\n' +
              '• **1. Forming (Formation)** : découverte polie, attentes prudentes, besoin d’un cadre clair du manager.\n' +
              '• **2. Storming (Confrontation / Turbulence)** : premiers désaccords sur les méthodes et les rôles — étape normale et nécessaire si elle est bien régulée.\n' +
              '• **3. Norming (Normalisation)** : règles communes acceptées, confiance mutuelle et entraide.\n' +
              '• **4. Performing (Performance)** : haute synergie, autonomie collective et créativité au service des résultats.',
            konanTip:
              'Ne panique pas face au stade « Storming » (tensions initiales) : c’est en clarifiant les rôles et règles à ce moment que l’équipe accède au stade « Performing ».',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p2_q5',
              type: 'mcq',
              prompt: 'Dans le modèle de Tuckman, quelle phase désigne le moment où les membres d’une nouvelle équipe s’opposent sur les méthodes de travail et les responsabilités avant de trouver leurs règles communes ?',
              options: [
                'Forming (Formation)',
                'Storming (Confrontation / Turbulence)',
                'Performing (Performance)',
                'Adjourning (Dissolution)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Storming est l’étape normale de friction et d’ajustement des rôles qui précède la normalisation (Norming) et la haute performance (Performing).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Gestion des conflits',
            stepTheme: '5 postures de Thomas-Kilmann',
            stepTitle: 'Résoudre les conflits professionnels avec le modèle de Thomas-Kilmann',
            paragraphText:
              'Les conflits sont inévitables dans toute organisation (désaccords d’objectifs, de ressources ou de personnalités). Bien gérés, ils deviennent source d’amélioration ; mal gérés, ils paralysent l’équipe. **Thomas et Kilmann** distinguent cinq stratégies :\n' +
              '• **Évitement (Perdant–Perdant)** : ignorer le conflit (utile seulement si le sujet est mineur ou pour laisser retomber l’émotion).\n' +
              '• **Accommodement** : céder pour préserver la relation.\n' +
              '• **Compétition (Gagnant–Perdant)** : imposer sa décision par autorité (utile en cas d’urgence critique).\n' +
              '• **Compromis** : chacun fait une concession partielle pour trancher vite.\n' +
              '• **Collaboration (Gagnant–Gagnant)** : chercher ensemble une solution créative satisfaisant pleinement les besoins des deux parties.',
            keyRule:
              'Sur un enjeu stratégique ou relationnel durable, la Collaboration (gagnant-gagnant) est la posture privilégiée : elle traite le problème sur le fond tout en renforçant la confiance.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p2_q6',
              type: 'mcq',
              prompt: 'Deux responsables de service en désaccord sur un planning prennent le temps d’analyser leurs contraintes respectives pour inventer une nouvelle organisation qui satisfait pleinement les objectifs des deux équipes. Quelle posture de Thomas-Kilmann adoptent-ils ?',
              options: [
                'L’évitement',
                'La compétition autoritaire',
                'La collaboration (gagnant-gagnant)',
                'La soumission passive',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Co-construire une solution intégrant pleinement les intérêts légitimes des deux parties correspond à la posture de collaboration (gagnant-gagnant).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_intro_management_ch4_p3',
        order: 3,
        title: 'Enjeux contemporains : Management agile, travail hybride, IA et RSE',
        summary:
          'Comprendre la transformation digitale du management, les principes de l’agilité et de Scrum, le pilotage des équipes hybrides par objectifs (OKR), la conduite du changement (Lewin/Kotter), l’impact de l’IA et les piliers de la RSE.',
        conceptExplanation:
          "Les organisations du XXIe siècle évoluent dans un monde **VUCA** (Volatil, Incertain, Complexe, Ambigu) transformé par le numérique, l’intelligence artificielle et les exigences environnementales. Cinq mutations redessinent le métier de manager :\n1) **Management agile (Scrum)** : livrer de la valeur par itérations courtes (**sprints** de 1 à 4 semaines), favoriser la collaboration directe avec le client, l’adaptation rapide au changement et l’amélioration continue (rôles : Product Owner, Scrum Master, Équipe).\n2) **Travail hybride et management à distance** : passer du contrôle de présence au management par la confiance et les résultats (méthode **OKR** : Objectives & Key Results), tout en préservant le lien social et le droit à la déconnexion.\n3) **Conduite du changement** : surmonter les résistances humaines grâce au modèle en 3 temps de **Kurt Lewin** (Dégel – Transition – Regel) ou aux 8 étapes de **John Kotter**.\n4) **Management augmenté par l’IA** : utiliser l’IA pour l’analyse de données et l’automatisation tout en cultivant l’esprit critique, l’éthique et la protection des données.\n5) **Responsabilité Sociétale des Entreprises (RSE)** : concilier performance économique, équité sociale et préservation environnementale (triple bilan *People, Planet, Profit*).",
        formulas: [
          {
            name: 'Triple performance de la RSE (Triple Bottom Line)',
            formula: '\\text{Performance durable} = \\text{Économique (Profit)} + \\text{Sociale (People)} + \\text{Environnementale (Planet)}',
            note: 'La norme internationale ISO 26000 fournit le cadre de référence volontaire de la responsabilité sociétale.',
          },
        ],
        keyRule:
          'L’agilité ne signifie pas « travailler sans méthode » : c’est une discipline rigoureuse d’itérations courtes, de transparence, de tests clients rapides et d’amélioration continue.',
        workedExample: {
          title: 'Piloter un projet numérique en Scrum plutôt qu’en cycle rigide',
          statement:
            'Une banque digitale doit créer une application de micro-épargne en 4 mois. Pourquoi la méthode agile Scrum réduit-elle le risque d’échec par rapport à un cycle traditionnel rigide (en cascade) ?',
          methodSteps: [
            '1) Découpage en sprints de 2 semaines : dès la fin du 1er mois, une version fonctionnelle minimale (MVP) est testée par de vrais utilisateurs à Abidjan.',
            '2) Rôles clairs : le Product Owner priorise les fonctionnalités à plus forte valeur client, le Scrum Master lève les blocages, l’équipe auto-organisée développe.',
            '3) Rétrospective à chaque fin de sprint : l’équipe ajuste immédiatement ses pratiques sans attendre le 4e mois.',
          ],
          conclusion:
            'L’agilité détecte les erreurs tôt, intègre les retours réels du marché et maximise la valeur livrée à budget maîtrisé.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Transformation digitale',
            stepTheme: 'Management data-driven',
            stepTitle: 'Mesurer l’impact de la transformation digitale sur le management',
            paragraphText:
              'La transformation digitale ne se résume pas à acheter des ordinateurs : elle refond la culture, les processus et le modèle d’affaires de l’entreprise.\n' +
              '• **Décision *data-driven*** : tableaux de bord temps réel et analytique remplacent les décisions prises uniquement à l’instinct.\n' +
              '• **Structures plus plates** : les outils collaboratifs accélèrent la circulation horizontale de l’information entre métiers.\n' +
              '• **Apprentissage permanent** : la durée de vie des compétences techniques se raccourcit → le manager devient un coach qui organise la montée en compétences (*upskilling*).\n' +
              'Exemple : un directeur commercial suit en direct sur son tableau de bord CRM les taux de conversion par région.',
            keyRule:
              'La technologie n’est qu’un accélérateur : une transformation digitale réussit par l’accompagnement humain et la culture d’entreprise.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q1',
              type: 'mcq',
              prompt: 'Qu’entend-on par un management « data-driven » (piloté par la donnée) dans une organisation moderne ?',
              options: [
                'Remplacer tous les managers par des robots sans supervision humaine',
                'Appuyer les décisions stratégiques et opérationnelles sur l’analyse objective de données fiables en temps réel, en complément du jugement humain',
                'Interdire tout échange oral dans les bureaux',
                'Archiver uniquement des dossiers papier en sous-sol',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un management data-driven combine l’analyse rigoureuse des données mesurées et le discernement humain pour réduire l’incertitude des décisions.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Agilité & Scrum',
            stepTheme: 'Itérations et rôles agiles',
            stepTitle: 'Maîtriser les principes du management agile et du cadre Scrum',
            paragraphText:
              'Né dans le génie logiciel puis étendu à tous les secteurs, le **Manifeste Agile** (2001) valorise les individus et interactions, un produit fonctionnel, la collaboration client et l’adaptation au changement.\n' +
              '• **Sprint** : itération courte (1 à 4 semaines) produisant un incrément concret et testable.\n' +
              '• **3 rôles Scrum** : le **Product Owner** (porte la vision client et priorise le *backlog*), le **Scrum Master** (garant de la méthode agile et facilitateur qui lève les obstacles) et l’**Équipe de développement** (pluridisciplinaire et auto-organisée).\n' +
              '• **Rituels clés** : *Daily Stand-up* (15 min quotidiennes), *Sprint Review* (démo client) et *Rétrospective* (amélioration continue).',
            konanTip:
              'Piège fréquent : le Scrum Master n’est PAS un « chef hiérarchique autoritaire » qui donne des ordres ; c’est un coach facilitateur au service de l’équipe.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q2',
              type: 'mcq',
              prompt: 'Dans la méthode agile Scrum, quel rôle a pour mission principale de représenter la voix du client et de prioriser la liste des fonctionnalités à développer (Product Backlog) ?',
              options: [
                'Le Product Owner',
                'Le commissaire aux comptes',
                'Le contrôleur bureaucratique',
                'Le fournisseur d’électricité',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Product Owner maximise la valeur du produit en définissant et priorisant le Product Backlog selon les besoins clients et les enjeux métier.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Travail hybride',
            stepTheme: 'Confiance et méthode OKR',
            stepTitle: 'Manager efficacement une équipe hybride ou à distance',
            paragraphText:
              'La généralisation du travail hybride (alternance présentiel / télétravail) rend obsolète le management fondé sur le « présentéisme » (surveiller qui reste le plus tard au bureau).\n' +
              '• **Management par résultats (OKR)** : aligner chaque équipe sur des *Objectives* ambitieux et des *Key Results* chiffrés et transparents.\n' +
              '• **Rituels de cohésion** : points vidéo courts, règles claires d’usage des outils (chat, visio, asynchrone) et moments conviviaux en présentiel.\n' +
              '• **Prévention de l’isolement et droit à la déconnexion** : protéger l’équilibre vie pro / vie perso pour éviter l’épuisement numérique (*burn-out*).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q3',
              type: 'mcq',
              prompt: 'Quelle évolution managériale est indispensable pour réussir le pilotage d’une équipe en travail hybride ou à distance ?',
              options: [
                'Exiger que la webcam reste allumée 9 heures par jour pour surveiller chaque geste',
                'Passer du contrôle visuel de présence à un management fondé sur la confiance, la clarté des résultats (OKR) et des rituels de communication',
                'Supprimer toute réunion et tout objectif collectif',
                'Envoyer des messages professionnels à 23 h chaque soir',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le travail hybride réussit grâce à des objectifs clairs et mesurables, une communication structurée, la confiance et le respect du droit à la déconnexion.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Changement',
            stepTheme: 'Modèles de Lewin et Kotter',
            stepTitle: 'Conduire le changement et lever les résistances (Lewin et Kotter)',
            paragraphText:
              'La majorité des projets de transformation échouent non pour des raisons techniques, mais à cause de la **résistance humaine au changement** (peur de l’inconnu, perte de repères ou de pouvoir).\n' +
              '• **Modèle en 3 étapes de Kurt Lewin** : (1) **Dégel** (faire comprendre l’urgence et remettre en question l’existant), (2) **Transition / Changement** (former, accompagner, tester les nouvelles pratiques), (3) **Regel** (ancrer durablement les nouvelles habitudes dans la culture).\n' +
              '• **Apport de John Kotter** : créer un sentiment d’urgence, bâtir une coalition d’ambassadeurs, communiquer la vision et célébrer rapidement des « victoires à court terme » (*quick wins*).',
            keyRule:
              'On n’impose pas un changement durable par décret : il faut expliquer le sens (Dégel), former et impliquer (Transition), puis célébrer et consolider (Regel).',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q4',
              type: 'mcq',
              prompt: 'Dans le modèle de conduite du changement en trois phases de Kurt Lewin, à quoi sert la première étape appelée « Dégel » (Unfreeze) ?',
              options: [
                'À sanctionner immédiatement les employés réticents',
                'À préparer les esprits, expliquer pourquoi le statu quo n’est plus tenable et susciter l’adhésion au besoin de changement',
                'À figer définitivement les anciennes procédures',
                'À clôturer le projet après sa mise en œuvre',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La phase de Dégel vise à lever l’inertie initiale en démontrant le sens et l’urgence du changement avant d’introduire les nouvelles pratiques.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'IA & Management',
            stepTheme: 'Intelligence Artificielle responsable',
            stepTitle: 'Intégrer l’Intelligence Artificielle avec éthique et discernement',
            paragraphText:
              'L’IA générative et prédictive transforme le travail quotidien des managers : rédaction de synthèses, analyse de risques, prévisions de ventes, assistance client.\n' +
              '• **Gains majeurs** : automatisation des tâches répétitives à faible valeur ajoutée et aide à la décision plus rapide.\n' +
              '• **Vigilances éthiques indispensables** : biais algorithmiques (ex. discrimination involontaire en recrutement), confidentialité des données d’entreprise, hallucinations factuelles et responsabilité humaine finale.\n' +
              '• **Principe de supervision humaine** : l’IA propose et éclaire, mais c’est toujours le manager humain qui décide et assume la responsabilité éthique.',
            konanTip:
              'Ne saisis jamais de données confidentielles clients ou financières dans un outil d’IA public non sécurisé : la gouvernance des données fait partie de la responsabilité managériale.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q5',
              type: 'mcq',
              prompt: 'Quelle règle de gouvernance éthique un manager doit-il impérativement respecter lorsqu’il intègre des outils d’Intelligence Artificielle dans son équipe ?',
              options: [
                'Déléguer aveuglément toutes les décisions de licenciement à un algorithme sans contrôle',
                'Maintenir une supervision humaine critique, vérifier l’absence de biais et protéger la confidentialité des données sensibles',
                'Partager librement les données privées des clients sur des outils non sécurisés',
                'Interdire toute formation des salariés aux nouveaux outils',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’usage responsable de l’IA en entreprise impose le contrôle humain final, la lutte contre les biais et le strict respect de la confidentialité des données.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'RSE & Éthique',
            stepTheme: 'Triple performance durable',
            stepTitle: 'Déployer la Responsabilité Sociétale des Entreprises (RSE)',
            paragraphText:
              'La performance d’une organisation moderne ne se mesure plus uniquement à son bénéfice financier de court terme : la **RSE** intègre les préoccupations sociales et environnementales au cœur de la stratégie.\n' +
              '• **Pilier économique** : viabilité financière, gouvernance transparente, lutte contre la corruption, relations équitables avec les fournisseurs.\n' +
              '• **Pilier social** : santé et sécurité au travail, égalité des chances, diversité, formation et dialogue social.\n' +
              '• **Pilier environnemental** : sobriété énergétique (*Green IT*), réduction des déchets électroniques et de l’empreinte carbone.\n' +
              'Exemple : une entreprise tech qui optimise la consommation énergétique de ses serveurs et promeut l’insertion de jeunes diplômés renforce simultanément son impact et sa marque employeur.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q6',
              type: 'mcq',
              prompt: 'Quels sont les trois piliers indissociables de la performance durable promue par la Responsabilité Sociétale des Entreprises (RSE) ?',
              options: [
                'Publicité, Prix et Distribution',
                'Économique, Social et Environnemental',
                'Hiérarchie, Spécialisation et Chronométrage',
                'Fiscalité, Douanes et Trésorerie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La RSE repose sur la triple performance (Triple Bottom Line) : viabilité économique, progrès social et respect de l’environnement.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Manager du XXIe siècle',
            stepTheme: 'Synthèse des compétences',
            stepTitle: 'Incarner le profil du manager numérique : analytique, agile, humain et éthique',
            paragraphText:
              'Au terme de ce parcours, le manager d’une organisation numérique réunit quatre familles de compétences complémentaires :\n' +
              '• **Rigueur analytique et stratégique** : diagnostiquer (PESTEL, Porter, SWOT), décider (Simon), piloter les KPI et l’efficience.\n' +
              '• **Agilité opérationnelle** : animer le cycle PODC/PDCA, conduire le changement et travailler en mode projet agile.\n' +
              '• **Intelligence relationnelle (*Soft Skills*)** : écouter, motiver avec équité, adapter son leadership et résoudre les conflits en mode gagnant-gagnant.\n' +
              '• **Exemplarité éthique et RSE** : agir avec intégrité, responsabilité numérique et vision durable.',
            keyRule:
              'Les compétences techniques (Hard Skills) font obtenir le premier poste ; l’alliance entre rigueur stratégique, leadership humain (Soft Skills) et éthique fait les grands dirigeants.',
            exercise: {
              id: 'lmd_entd_l1_intro_management_ch4_p3_q7',
              type: 'mcq',
              prompt: 'Quelle combinaison de compétences définit le mieux le profil attendu d’un manager performant dans l’économie numérique actuelle ?',
              options: [
                'Autoritarisme strict, refus des données et isolement du marché',
                'Alliance de rigueur stratégique/analytique, d’agilité digitale, d’intelligence relationnelle (leadership humain) et d’éthique RSE',
                'Maîtrise exclusive de la comptabilité papier sans dialogue avec l’équipe',
                'Improvisation permanente sans aucun objectif mesurable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le management contemporain combine science analytique (stratégie, données, processus), art relationnel (motivation, leadership, gestion des conflits) et responsabilité éthique.',
            },
          },
        ],
      }),
    ],
  },
];
