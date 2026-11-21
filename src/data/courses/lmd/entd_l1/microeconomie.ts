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

export const MICROECONOMIE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : OBJET, MÉTHODOLOGIE ET FRONTIÈRE DES POSSIBILITÉS DE PRODUCTION
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch1',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Objet, méthodologie et frontière des possibilités de production',
    summary:
      'Maîtriser le problème de la rareté, les systèmes économiques, la guillotine de Hume, la statique comparative, la FPP, le coût d’opportunité et l’équilibre de marché walrasien.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch1_p1',
        order: 1,
        title: 'Objet de la microéconomie, rareté, systèmes économiques et méthodologie',
        summary:
          'Rareté des quatre facteurs de production, trois questions économiques, systèmes économiques, guillotine de Hume, statique comparative et hypothèse ceteris paribus.',
        conceptExplanation:
          'L’analyse économique naît d’une tension universelle : les besoins humains sont pratiquement illimités alors que les ressources productives (travail, capital, terre et esprit d’entreprise) existent en quantités finies. Toute société doit donc résoudre trois arbitrages fondamentaux : **que produire ?**, **comment produire ?** et **pour qui produire ?**.\n\n' +
          'Trois grands modes d’organisation y répondent : l’économie libérale (guidée par le système des prix et la « main invisible » d’Adam Smith), l’économie dirigée (planification centrale par l’État) et l’économie mixte (marché régulé par les impôts, transferts et services publics).\n\n' +
          'La microéconomie analyse les décisions individuelles d’agents rationnels (*homo œconomicus*) en s’appuyant sur un trépied méthodologique précis : l’**économie positive** (distinguée de l’économie normative par la guillotine de Hume), la **statique comparative** (par opposition à la dynamique) et l’**équilibre partiel** sous hypothèse *ceteris paribus* (par opposition à l’équilibre général).',
        keyRule:
          'La microéconomie repose sur trois piliers méthodologiques : l’économie positive (faits objectifs), la statique comparative (comparaison d’équilibres) et l’équilibre partiel (toutes choses égales par ailleurs).',
        formulas: [
          {
            name: 'Guillotine de Hume (Positif vs Normatif)',
            formula: '\\text{Positif (Est / Fait / Objectif / Vrai-Faux)} \\;\\neq\\; \\text{Normatif (Devrait être / Valeurs / Prescriptif)}',
            note: 'On ne peut jamais déduire logiquement une prescription normative d’un simple constat positif sans jugement de valeur.',
          },
          {
            name: 'Trépied de la démarche microéconomique',
            formula: '\\text{Microéconomie} = \\text{Analyse positive} + \\text{Statique comparative} + \\text{Équilibre partiel (ceteris paribus)}',
            note: 'L’équilibre général lève ensuite l’hypothèse ceteris paribus pour traiter tous les marchés simultanément.',
          },
        ],
        workedExample: {
          title: 'Qualifier des démarches économiques sur le marché du cacao',
          statement:
            'Suite à une sécheresse en Côte d’Ivoire, le prix du cacao passe d’un équilibre de 1 200 FCFA/kg à 1 900 FCFA/kg. Un économiste A compare uniquement les deux équilibres pour mesurer la baisse des quantités échangées. Un économiste B modélise l’ajustement semaine par semaine. Un commentateur C déclare : « L’État devrait bloquer le prix à 1 200 FCFA ». Qualifiez chaque posture.',
          methodSteps: [
            'Économiste A : il compare deux positions d’équilibre sans modéliser la trajectoire temporelle et établit un fait vérifiable ⇒ Statique comparative et économie positive.',
            'Économiste B : il étudie le sentier d’évolution du prix au fil du temps entre les deux équilibres ⇒ Analyse dynamique.',
            'Commentateur C : il utilise le verbe « devrait » et porte un jugement de valeur sur ce qui est souhaitable ⇒ Économie normative (guillotine de Hume).',
          ],
          conclusion:
            'Identifier précisément le registre (positif/normatif) et l’horizon analytique (statique/dynamique) évite toute confusion méthodologique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Rareté',
            stepTheme: 'Problème économique',
            stepTitle: 'Rareté des ressources et quatre facteurs de production',
            paragraphText:
              'Pourquoi toute société est-elle contrainte de faire des choix économiques ? Parce que nos désirs de consommation dépassent toujours les capacités productives disponibles à un instant donné.\n' +
              '• **Rareté** : contradiction structurelle entre des besoins quasi illimités et des ressources disponibles en quantités finies.\n' +
              '• **Quatre facteurs de production** : le travail (effort humain et compétences), le capital (machines, serveurs, locaux), la terre (ressources naturelles) et l’esprit d’entreprise (capacité d’innover et de combiner les facteurs).\n' +
              '• **Exemple** : une start-up d’Abidjan disposant de 5 développeurs ne peut simultanément livrer une application mobile et un ERP sans arbitrer l’allocation de ses heures de travail.',
            keyRule:
              'Sans rareté, aucun bien n’aurait de prix positif et aucun arbitrage économique ne serait nécessaire.',
            konanTip:
              'N’oublie jamais le 4e facteur de production aux examens : l’esprit d’entreprise (organisation, prise de risque, innovation) s’ajoute au travail, au capital et à la terre.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle définition correspond au problème économique fondamental formulé par l’analyse économique (Lionel Robbins, Edmond Malinvaud) ?',
              options: [
                'Accumuler le plus d’or possible dans les coffres de la Banque Centrale',
                'Concilier des besoins humains quasi illimités avec l’allocation de ressources rares à usages alternatifs',
                'Supprimer toute intervention publique sur les marchés financiers',
                'Fixer administrativement les salaires de tous les travailleurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La science économique étudie la façon dont les individus et la société allouent des ressources rares susceptibles d’usages alternatifs pour satisfaire des besoins multiples.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Arbitrages',
            stepTheme: 'Trois questions clés',
            stepTitle: 'Que produire, comment produire, pour qui produire ?',
            paragraphText:
              'Face à la rareté, toute organisation sociale doit apporter une réponse cohérente à trois questions universelles, qu’il s’agisse d’un village agricole ou d’une métropole numérique.\n' +
              '• **Que produire ?** : quels biens et services retenir, et en quelles quantités (en marché libre, ceux dont le prix couvre au moins le coût de production).\n' +
              '• **Comment produire ?** : quelle combinaison technique travail/capital choisir afin de minimiser le coût en ressources rares.\n' +
              '• **Pour qui produire ?** : selon quelle règle répartir les biens (capacité et disposition à payer sur un marché libre, ou critères sociaux via l’État).\n' +
              '• **Exemple** : décider de produire des tablettes éducatives assemblées localement (que), avec automatisation partielle (comment), destinées aux étudiants boursiers (pour qui).',
            keyRule:
              'Les trois questions (Que ? Comment ? Pour qui ?) structurent tout système économique ; seul le mécanisme de réponse change.',
            konanTip:
              'En examen, relie toujours chaque question à son critère de marché : Que = prix ≥ coût ; Comment = coût minimal ; Pour qui = solvabilité.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Dans une économie de marché libre, comment la question « Comment produire ? » est-elle résolue par les entreprises ?',
              options: [
                'En appliquant un quota obligatoire de main-d’œuvre fixé par décret',
                'En utilisant toujours la technique la plus ancienne disponible',
                'En sélectionnant la combinaison technique qui minimise le coût de production pour chaque unité fabriquée',
                'En distribuant gratuitement la production aux ménages les plus modestes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sous pression concurrentielle, chaque firme choisit la méthode productive la moins coûteuse en ressources rares pour fabriquer les biens demandés.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Systèmes',
            stepTheme: 'Libéral, dirigé, mixte',
            stepTitle: 'Comparer les trois grands systèmes économiques',
            paragraphText:
              'Selon la place laissée au marché et à l’État, on distingue trois grandes architectures d’organisation économique.\n' +
              '• **Économie libérale (marché libre)** : propriété privée et coordination décentralisée par les prix. Selon Adam Smith, la poursuite de l’intérêt personnel est guidée comme par une « main invisible » vers l’intérêt général.\n' +
              '• **Économie dirigée (planifiée)** : l’État détient les moyens de production et un office central fixe quantités, prix et affectations de main-d’œuvre.\n' +
              '• **Économie mixte** : combine initiative privée et intervention publique via les impôts, les transferts (subventions, prestations sans contrepartie directe) et les biens publics (justice, défense, éducation).\n' +
              '• **Exemple** : la Côte d’Ivoire fonctionne en économie mixte, combinant opérateurs privés (télécoms, fintech, commerce) et régulation publique (infrastructures, bourses, fiscalité).',
            keyRule:
              'Un transfert public est un versement effectué sans qu’aucun bien ou service ne soit exigé en contrepartie directe (bourses, allocations, subventions).',
            konanTip:
              'Retiens le mécanisme clé d’Adam Smith : ce n’est pas la bienveillance mais le signal-prix qui coordonne spontanément acheteurs et vendeurs en marché libre.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Dans une économie mixte, comment qualifie-t-on les prestations sociales et bourses versées par l’État sans service exigé en retour ?',
              options: [
                'Des transferts',
                'Des coûts d’opportunité',
                'Des consommations intermédiaires',
                'Des prix de réserve',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les transferts désignent les versements sans contrepartie directe (allocations, bourses, subventions) qui modifient la répartition des revenus en économie mixte.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Micro vs Macro',
            stepTheme: 'Homo œconomicus',
            stepTitle: 'Microéconomie, macroéconomie et rationalité individuelle',
            paragraphText:
              'Deux angles d’observation complémentaires structurent la science économique : la loupe individuelle et la vue panoramique.\n' +
              '• **Microéconomie** : étudie le comportement des unités de base (consommateurs, firmes, propriétaires de facteurs) et la formation des prix sur des marchés spécifiques.\n' +
              '• **Homo œconomicus** : agent rationnel qui optimise une fonction objectif sous contrainte (le ménage maximise son utilité sous contrainte budgétaire ; la firme maximise son profit sous contrainte technique).\n' +
              '• **Macroéconomie** : s’intéresse aux interactions globales à travers des agrégats nationaux ($PIB$, consommation globale $C$, investissement $I$, chômage, inflation).\n' +
              '• **Exemple** : étudier comment un opérateur mobile fixe le tarif d’un forfait data relève de la microéconomie ; analyser l’impact de l’inflation sur le PIB de l’UEMOA relève de la macroéconomie.',
            konanTip:
              'Micro = prix relatif d’un bien, panier d’un consommateur, profit d’une firme. Macro = niveau général des prix (inflation), PIB, chômage national.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Laquelle de ces questions relève typiquement de l’analyse MICROÉCONOMIQUE ?',
              options: [
                'Comment réduire le taux d’inflation annuel dans l’ensemble de la zone UEMOA ?',
                'Quel est l’impact d’une hausse du déficit budgétaire sur la croissance du PIB national ?',
                'Comment la baisse du tarif des forfaits 4G modifie-t-elle la quantité de data achetée par un étudiant et le profit de l’opérateur ?',
                'Pourquoi le taux de chômage global augmente-t-il en période de récession ?',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La réaction d’un consommateur et le profit d’une entreprise sur un marché sectoriel particulier (télécoms) constituent le cœur de la microéconomie.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Guillotine de Hume',
            stepTheme: 'Positif vs Normatif',
            stepTitle: 'Distinguer économie positive et économie normative',
            paragraphText:
              'Un économiste rigoureux sépare toujours ce qu’il constate scientifiquement de ce qu’il juge moralement souhaitable : c’est la célèbre **guillotine de Hume**.\n' +
              '• **Économie positive** : décrit et explique objectivement ce qui *est* (faits, relations de cause à effet, science, propositions vérifiables en vrai/faux). Elle vise à comprendre et prévoir.\n' +
              '• **Économie normative** : énonce ce qui *devrait être* (valeurs, subjectivité, prescriptions, art politique, jugements bien/mal non démontrables scientifiquement).\n' +
              '• **Exemple** : « Une taxe de 10 % sur les transferts mobiles réduit le volume des transactions de 6 % » est positif ; « Cette taxe est injuste et doit être abolie » est normatif.',
            formula: {
              name: 'Clivage de la Guillotine de Hume',
              formula: '\\text{Positif} : \\{\\text{Est, Fait, Objectif, Science, Vrai/Faux}\\} \\;\\bot\\; \\text{Normatif} : \\{\\text{Devrait être, Valeurs, Subjectif, Bien/Mal}\\}',
              note: 'Un énoncé positif peut être faux empiriquement : il reste positif dès lors qu’il est testable par les faits !',
            },
            keyRule:
              'Un énoncé est positif non pas parce qu’il est vrai, mais parce qu’il est réfutable par l’observation des faits ; les mots « devrait », « juste » ou « préférable » signalent le normatif.',
            konanTip:
              'Piège classique : « Augmenter le SMIG réduit à zéro la pauvreté » est un énoncé POSITIF (faux empiriquement, mais factuel et testable), et non normatif !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Guillotine de Hume et champs de l’analyse économique',
              caption: 'Croisement entre posture épistémologique (Positif / Normatif) et échelle d’analyse (Micro / Macro).',
              matrix2x2: {
                topAxis: ['Analyse POSITIVE (Ce qui EST)', 'Analyse NORMATIVE (Ce qui DEVRAIT ÊTRE)'],
                leftAxis: ['MICRO (Individuel / Marché)', 'MACRO (Agrégats / Nation)'],
                topLeft: {
                  title: 'Microéconomie positive',
                  color: 'blue',
                  items: [
                    'Fait, objectif, descriptif, vrai/faux',
                    'Élasticité de la demande de data',
                    'Effet d’un prix plafond sur la pénurie',
                  ],
                },
                topRight: {
                  title: 'Microéconomie normative',
                  color: 'orange',
                  items: [
                    'Valeurs, prescriptif, bien/mal',
                    '« Il faut plafonner les loyers étudiants »',
                    '« Le monopole doit être démantelé »',
                  ],
                },
                bottomLeft: {
                  title: 'Macroéconomie positive',
                  color: 'green',
                  items: [
                    'Explication causale des agrégats',
                    'Effet d’une hausse de G sur le PIB',
                    'Relation chômage-inflation (Phillips)',
                  ],
                },
                bottomRight: {
                  title: 'Macroéconomie normative',
                  color: 'violet',
                  items: [
                    'Choix politiques et arbitrage social',
                    '« L’État devrait taxer davantage le capital »',
                    'Priorité emploi vs lutte anti-inflation',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Selon la guillotine de Hume, laquelle de ces affirmations relève de l’économie POSITIVE ?',
              options: [
                'L’État devrait subventionner à 50 % les abonnements Internet des étudiants',
                'Une réduction des inégalités est plus juste que la maximisation du PIB',
                'Une hausse de 15 % du prix du carburant entraîne une baisse de 4 % de la consommation d’essence à court terme',
                'Les plateformes numériques méritent une taxation morale plus lourde',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La troisième proposition énonce une relation causale factuelle et testable empiriquement (vrai/faux), sans jugement de valeur.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Méthodologie',
            stepTheme: 'Statique & Ceteris Paribus',
            stepTitle: 'Statique comparative, dynamique et équilibre partiel',
            paragraphText:
              'Pour isoler les mécanismes économiques sans être noyé dans la complexité du monde réel, le microéconomiste recourt à deux conventions majeures.\n' +
              '• **Statique comparative vs Dynamique** : la statique comparative confronte deux positions d’équilibre (avant et après un choc) en supposant un ajustement instantané, tandis que la dynamique analyse la trajectoire d’ajustement période par période.\n' +
              '• **Équilibre partiel vs Équilibre général** : l’équilibre partiel étudie un seul marché en figeant toutes les autres variables (*ceteris paribus* : « toutes choses égales par ailleurs ») ; l’équilibre général de Walras étudie les interactions simultanées de tous les marchés.\n' +
              '• **Exemple** : mesurer l’effet de la baisse du prix des smartphones sur leur vente à revenu constant et prix des forfaits inchangé relève de l’équilibre partiel en statique comparative.',
            keyRule:
              'Ceteris paribus = « toutes choses égales par ailleurs ». C’est le laboratoire mental qui permet à l’économiste d’isoler l’effet pur d’une seule variable.',
            konanTip:
              'À l’examen, si un énoncé demande de comparer l’équilibre initial E₁ et le nouvel équilibre E₂ sans équation différentielle ni indice temporel t, c’est de la statique comparative.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle combinaison méthodologique décrit le mieux l’étude d’un choc sur le marché du riz en comparant $(P_1^*, Q_1^*)$ et $(P_2^*, Q_2^*)$ à revenus et prix des autres biens supposés constants ?',
              options: [
                'Analyse dynamique en équilibre général',
                'Économie normative en planification centrale',
                'Analyse de longue période sans contrainte budgétaire',
                'Statique comparative en équilibre partiel (hypothèse ceteris paribus)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Comparer deux équilibres sans modéliser le temps relève de la statique comparative ; figer les autres marchés (ceteris paribus) définit l’équilibre partiel.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch1_p2',
        order: 2,
        title: 'Frontière des Possibilités de Production (FPP) et coût d’opportunité',
        summary:
          'Interpréter les trois zones de la FPP, calculer le coût d’opportunité, relier la concavité de la FPP aux rendements décroissants et analyser les déplacements de la frontière.',
        conceptExplanation:
          'Dans une économie produisant deux biens $X_1$ et $X_2$ avec des ressources rares et une technologie donnée, produire plus de $X_1$ oblige à transférer des facteurs de production depuis le secteur $X_2$. La **Frontière des Possibilités de Production (FPP)** trace l’ensemble des combinaisons maximales réalisables :\n' +
          '• **Sur la FPP** : plein emploi et efficience productive (impossible d’augmenter un bien sans réduire l’autre).\n' +
          '• **À l’intérieur de la FPP** : combinaison réalisable mais inefficiente (ressources oisives, chômage, machines sous-utilisées).\n' +
          '• **À l’extérieur de la FPP** : combinaison inaccessible à court terme sans progrès technique ni accumulation de facteurs.\n\n' +
          'Le **coût d’opportunité** $CO(X_1) = |\\Delta X_2 / \\Delta X_1|$ mesure la quantité de bien 2 sacrifiée pour obtenir une unité supplémentaire de bien 1. Des coûts d’opportunité croissants rendent la FPP **concave** vers l’origine ; des coûts constants donnent une **droite affine** décroissante.',
        keyRule:
          'Sur la FPP = efficient ; dedans = réalisable mais ressources oisives ; dehors = inaccessible. Coûts d’opportunité croissants ⇔ FPP concave ; constants ⇔ FPP linéaire.',
        formulas: [
          {
            name: 'Coût d’opportunité de X₁ en termes de X₂',
            formula: 'CO(X_1) = -\\frac{\\Delta X_2}{\\Delta X_1} = \\left|\\frac{\\Delta X_2}{\\Delta X_1}\\right|',
            note: 'Géométriquement, c’est la valeur absolue de la pente de la tangente à la FPP (Taux Marginal de Transformation).',
          },
          {
            name: 'Forme de la FPP et rendements',
            formula: 'CO \\text{ croissants} \\iff \\text{FPP concave} \\quad | \\quad CO \\text{ constants} \\iff \\text{FPP droite affine}',
            note: 'L’innovation ou l’accroissement des facteurs déplace la FPP vers l’extérieur (croissance économique).',
          },
        ],
        workedExample: {
          title: 'Analyser une FPP entre services numériques et cacao',
          statement:
            'Une économie possède les combinaisons efficientes : $A(0 ; 100)$, $B(20 ; 80)$, $C(40 ; 40)$, $D(50 ; 0)$, où $X_1$ représente des logiciels et $X_2$ des tonnes de cacao. On observe aussi $M(20 ; 55)$ et $N(40 ; 75)$. Calculez le coût d’opportunité d’un logiciel entre $A\\to B$ puis $B\\to C$, et qualifiez $M$ et $N$.',
          methodSteps: [
            'De $A(0;100)$ à $B(20;80)$ : $\\Delta X_1 = +20$, $\\Delta X_2 = -20$ ⇒ $CO = |-20/20| = 1$ tonne de cacao par logiciel.',
            'De $B(20;80)$ à $C(40;40)$ : $\\Delta X_1 = +20$, $\\Delta X_2 = -40$ ⇒ $CO = |-40/20| = 2$ tonnes de cacao par logiciel.',
            'De $C(40;40)$ à $D(50;0)$ : $\\Delta X_1 = +10$, $\\Delta X_2 = -40$ ⇒ $CO = 4$ tonnes/logiciel. Le coût d’opportunité est strictement croissant ⇒ la FPP est concave.',
            'Pour $X_1 = 20$, le maximum sur la FPP est $80$ : $M(20;55)$ est à l’intérieur (réalisable mais inefficient). Pour $X_1 = 40$, le maximum est $40$ : $N(40;75)$ est à l’extérieur (inaccessible).',
          ],
          conclusion:
            'La spécialisation croissante dans le numérique mobilise des facteurs de moins en moins adaptés, élevant progressivement le coût d’opportunité en cacao.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'FPP',
            stepTheme: 'Zones d’efficience',
            stepTitle: 'Lire les trois zones de la Frontière des Possibilités de Production',
            paragraphText:
              'La Frontière des Possibilités de Production (FPP) matérialise graphiquement la rareté : elle trace la frontière entre ce qu’une économie peut fabriquer et ce qui lui échappe.\n' +
              '• **Points sur la FPP ($A, B, C$)** : utilisation **efficiente** (plein emploi) des facteurs. Produire plus de $X_1$ impose obligatoirement de renoncer à une quantité de $X_2$.\n' +
              '• **Points à l’intérieur ($D$)** : combinaisons réalisables mais **inefficientes** (chômage, machines à l’arrêt) ; on peut produire plus des deux biens simultanément.\n' +
              '• **Points à l’extérieur ($E$)** : combinaisons **inaccessibles** avec la technologie et les ressources actuelles.\n' +
              '• **Exemple** : sur la figure ci-dessous ($X_2 = 10 - 0,1 X_1^2$), les points $A(0;10)$, $B(6;6,4)$ et $C(10;0)$ sont efficients, $D(4;4)$ est inefficient et $E(8;7)$ est hors de portée.',
            keyRule:
              'Seuls les points situés SUR la courbe représentent une allocation productive efficiente des ressources rares.',
            visualSchema: {
              type: 'function_plot',
              title: 'Frontière des Possibilités de Production (FPP concave)',
              caption: 'En abscisse : Bien X₁ ; en ordonnée : Bien X₂. A, B, C sur la FPP (efficients) ; D à l’intérieur (ressources oisives) ; E à l’extérieur (inaccessible).',
              plot: {
                xMin: 0,
                xMax: 11,
                yMin: 0,
                yMax: 11,
                xStep: 2,
                yStep: 2,
                curves: [
                  {
                    label: 'FPP : X₂ = 10 − 0,1·X₁²',
                    color: 'blue',
                    pieces: [{ expr: '10 - 0.1*x^2', from: 0, to: 10 }],
                  },
                ],
                points: [
                  { x: 0, y: 10, label: 'A (efficient)', filled: true, color: 'blue' },
                  { x: 6, y: 6.4, label: 'B (efficient)', filled: true, color: 'blue' },
                  { x: 10, y: 0, label: 'C (efficient)', filled: true, color: 'blue' },
                  { x: 4, y: 4, label: 'D (inefficient)', filled: true, color: 'orange' },
                  { x: 8, y: 7, label: 'E (inaccessible)', filled: false, color: 'violet' },
                ],
              },
            },
            konanTip:
              'Un point intérieur D n’est pas impossible, il est sous-optimal : mobiliser les ressources oisives permet de rejoindre la frontière sans rien sacrifier.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Une économie se situe au point $D$ strictement à l’intérieur de sa FPP. Quelle affirmation est rigoureusement exacte ?',
              options: [
                'Elle utilise pleinement toutes ses ressources sans aucun chômage',
                'Il lui est possible d’accroître la production d’un bien sans sacrifier aucune unité de l’autre bien',
                'Cette combinaison est techniquement impossible à produire',
                'Son coût d’opportunité de passage vers la frontière est infini',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À l’intérieur de la FPP, des ressources restent oisives : leur mobilisation permet d’augmenter la production d’un ou des deux biens sans renoncement.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul CO',
            stepTheme: 'Renoncement',
            stepTitle: 'Calculer le coût d’opportunité entre deux points de la FPP',
            paragraphText:
              'En économie, le véritable coût d’une décision n’est pas seulement sa dépense monétaire, mais la meilleure alternative à laquelle on renonce.\n' +
              '• **Définition** : le coût d’opportunité d’un bien $X_1$ est la quantité de l’autre bien $X_2$ qu’il faut sacrifier pour produire **une unité supplémentaire** de $X_1$.\n' +
              '• **Méthode de calcul** : on calcule le rapport positif $CO(X_1) = \\left|\\frac{\\Delta X_2}{\\Delta X_1}\\right| = \\frac{|X_{2,\\text{final}} - X_{2,\\text{initial}}|}{X_{1,\\text{final}} - X_{1,\\text{initial}}}$.\n' +
              '• **Exemple** : si une agence web passe de 10 à 15 sites livrés ($\\Delta X_1 = +5$) en réduisant ses formations de 60 à 40 ($\\Delta X_2 = -20$), le coût d’opportunité d’un site supplémentaire est $20 / 5 = 4$ formations.',
            formula: {
              name: 'Formule du coût d’opportunité unitaire',
              formula: 'CO(X_1) = \\left|\\frac{\\Delta X_2}{\\Delta X_1}\\right| \\quad \\text{et} \\quad CO(X_2) = \\frac{1}{CO(X_1)}',
              note: 'Le coût d’opportunité de X₂ en termes de X₁ est l’inverse exact de celui de X₁ en termes de X₂.',
            },
            konanTip:
              'Vérifie toujours l’unité demandée ! « Coût d’opportunité de 1 ordinateur en sacs de riz » = ΔRiz / ΔOrdinateurs (le bien dont on cherche le coût est AU DÉNOMINATEUR).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Pour augmenter sa production d’applications mobiles de 8 à 12 unités, un studio tech doit réduire sa production de sites vitrines de 36 à 20 unités. Quel est le coût d’opportunité d’une application supplémentaire ?',
              options: [
                '0,25 site vitrine',
                '16 sites vitrines',
                '4 sites vitrines',
                '2 sites vitrines',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$\\Delta \\text{Apps} = 12 - 8 = 4$ et $|\\Delta \\text{Sites}| = |20 - 36| = 16$. Donc $CO(\\text{App}) = 16 / 4 = 4$ sites vitrines sacrifiés par application.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Géométrie',
            stepTheme: 'Concave vs Linéaire',
            stepTitle: 'Relier la forme de la FPP à l’évolution des coûts d’opportunité',
            paragraphText:
              'La courbure de la FPP révèle immédiatement la structure technologique de l’économie étudiée.\n' +
              '• **FPP concave par rapport à l’origine** (courbée vers l’extérieur) : la pente en valeur absolue augmente à mesure que $X_1$ croît ⇒ les **coûts d’opportunité sont croissants**. C’est le cas le plus réaliste.\n' +
              '• **FPP linéaire (droite affine de pente négative)** : la pente est identique en tout point ⇒ les **coûts d’opportunité sont constants** (facteurs parfaitement substituables entre les deux secteurs).\n' +
              '• **Exemple** : si $X_2 = 100 - 2 X_1$, chaque unité supplémentaire de $X_1$ coûte invariablement $2$ unités de $X_2$, quel que soit le niveau de production déjà atteint.',
            keyRule:
              'Ne confonds pas la FPP (CONCAVE vers l’origine, coûts d’opportunité croissants) avec une courbe d’indifférence (CONVEXE vers l’origine, TMS décroissant).',
            konanTip:
              'Moyen mnémotechnique : la FPP fait le « dos rond » (concave) car renoncer toujours au même bien coûte de plus en plus cher.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Si tous les facteurs de production sont parfaitement identiques et également productifs dans deux secteurs $X_1$ et $X_2$, quelle est la forme de la FPP ?',
              options: [
                'Une droite affine de pente négative (coûts d’opportunité constants)',
                'Une courbe fortement concave vers l’origine',
                'Une courbe croissante passant par l’origine',
                'Une droite horizontale',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque les facteurs sont parfaitement substituables d’un secteur à l’autre, le taux de transformation reste constant : la FPP est une droite décroissante.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Rendements',
            stepTheme: 'Loi des rendements décroissants',
            stepTitle: 'Pourquoi les coûts d’opportunité sont-ils croissants ?',
            paragraphText:
              'Deux mécanismes économiques fondamentaux expliquent pourquoi la spécialisation totale devient de plus en plus coûteuse à mesure qu’on s’y engage.\n' +
              '• **Hétérogénéité des facteurs** : les travailleurs, terres et équipements ne sont pas également adaptés à tous les biens. Pour produire toujours plus de logiciels, on finit par reconvertir des agronomes très productifs en agriculture mais peu efficaces en code.\n' +
              '• **Loi des rendements marginaux décroissants** : à capital fixe, chaque unité supplémentaire d’un facteur variable accroît la production totale d’un montant **inférieur** à celui apporté par l’unité précédente.\n' +
              '• **Exemple** : le 1er développeur ajouté sur un serveur produit +50 fonctionnalités, le 2e +35, le 3e +15 : obtenir le même surplus de production exige de plus en plus de ressources détournées d’ailleurs.',
            keyRule:
              'Rendements marginaux décroissants ≠ production totale décroissante : la production continue d’augmenter, mais à un rythme de plus en plus lent.',
            konanTip:
              'Attention au piège : rendements décroissants signifie que la production totale continue de monter, mais par incréments de plus en plus petits !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Que stipule exactement la loi des rendements décroissants ?',
              options: [
                'La production totale chute dès que l’on ajoute un deuxième travailleur',
                'Chaque unité supplémentaire d’un facteur augmente la production totale d’une quantité inférieure à celle ajoutée par l’unité précédente',
                'Les coûts de production diminuent indéfiniment lorsque la firme grandit',
                'Les facteurs de production sont parfaitement identiques dans toute l’économie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La loi des rendements décroissants porte sur la contribution marginale (supplémentaire) d’un facteur additionnel, qui diminue au-delà d’un certain seuil.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Croissance',
            stepTheme: 'Déplacements de la FPP',
            stepTitle: 'Déplacer la FPP : progrès technique et accumulation de facteurs',
            paragraphText:
              'Un point situé à l’extérieur de la FPP est inaccessible aujourd’hui, mais peut devenir réalisable demain si les capacités productives de la nation s’élargissent.\n' +
              '• **Déplacement symétrique vers l’extérieur** : accumulation de capital (nouveaux ports, datacenters), croissance démographique active ou progrès technique général.\n' +
              '• **Déplacement biaisé (asymétrique)** : une innovation propre à un seul secteur (ex. IA générative pour le code) fait pivoter la FPP vers l’extérieur sur l’axe du bien concerné uniquement.\n' +
              '• **Contraction vers l’intérieur** : guerre, catastrophe naturelle ou destruction d’infrastructures réduisent l’ensemble des possibles.\n' +
              '• **Exemple** : le déploiement de la fibre optique nationale déplace la FPP vers la droite, permettant à la Côte d’Ivoire de produire davantage de services numériques sans réduire la production agricole.',
            konanTip:
              'Ne confonds pas « réduction du chômage » (mouvement d’un point intérieur D VERS la FPP fixe) et « croissance potentielle » (déplacement DE LA FPP vers l’extérieur).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Une innovation logicielle double la productivité dans le secteur des services numériques ($X_1$) sans modifier la productivité agricole ($X_2$). Comment évolue la FPP ?',
              options: [
                'Elle se contracte vers l’origine',
                'L’économie se déplace simplement d’un point intérieur vers un point de l’ancienne FPP',
                'Elle pivote vers l’extérieur le long de l’axe $X_1$, en conservant la même ordonnée à l’origine sur l’axe $X_2$',
                'Elle devient obligatoirement une droite verticale',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Si toute l’économie produit $X_2$, rien ne change (même intercept vertical) ; dès qu’on produit $X_1$, la production maximale réalisable augmente, faisant pivoter la FPP vers la droite.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Arbitrage',
            stepTheme: 'Consommation vs Investissement',
            stepTitle: 'L’arbitrage intertemporel : biens présents contre croissance future',
            paragraphText:
              'La FPP éclaire aussi le choix stratégique d’un pays entre **biens de consommation immédiate** et **biens d’équipement (investissement)**.\n' +
              '• **Choix orienté consommation** : maximise le niveau de vie immédiat, mais l’accumulation de capital reste faible et la FPP se déplace lentement les années suivantes.\n' +
              '• **Choix orienté investissement** : impose un coût d’opportunité présent (moins de consommation aujourd’hui), mais élargit fortement la FPP future grâce au stock accru de capital productif.\n' +
              '• **Exemple** : consacrer 25 % du PIB aux infrastructures énergétiques, routes et formation numérique sacrifie de la consommation immédiate mais propulse le potentiel de production sur dix ans.',
            keyRule:
              'Investir davantage aujourd’hui élargit la FPP de demain : le coût d’opportunité de la croissance future est la consommation présente sacrifiée.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Deux économies A et B ont aujourd’hui la même FPP entre biens de consommation et biens d’investissement. B choisit un point sur la FPP beaucoup plus riche en biens d’investissement que A. Que prévoit la théorie dans 10 ans ?',
              options: [
                'La FPP de B se sera déplacée plus fortement vers l’extérieur que celle de A',
                'La FPP de B aura reculé vers l’origine',
                'A et B conserveront exactement la même FPP',
                'B ne pourra plus produire aucun bien de consommation',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une part plus élevée d’investissement accroît le stock de capital productif de B, ce qui déplace davantage sa FPP future vers l’extérieur.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch1_p3',
        order: 3,
        title: 'Offre, demande, équilibre de marché et stabilité au sens de Walras',
        summary:
          'Typologie des marchés, prix de réserve, lois de la demande et de l’offre, calcul de l’équilibre (P*, Q*), mécanismes d’ajustement et stabilité walrasienne.',
        conceptExplanation:
          'Un **marché** désigne tout dispositif (physique ou dématérialisé, au comptant ou à terme) mettant en relation acheteurs et vendeurs pour échanger des biens et services contre monnaie.\n\n' +
          '• **Fonction de demande** : $Q^D = f(P)$ avec $f’(P) < 0$ (ceteris paribus). Lorsque le prix baisse, il passe sous le **prix de réserve** (disposition maximale à payer) d’un plus grand nombre d’acheteurs.\n' +
          '• **Fonction d’offre** : $Q^S = g(P)$ avec $g’(P) > 0$. Une hausse du prix rend la production plus lucrative et incite les producteurs à offrir davantage.\n' +
          '• **Équilibre de marché** $E(Q^*, P^*)$ : point d’intersection tel que $Q^D(P^*) = Q^S(P^*)$. Au-dessus de $P^*$, un **excès d’offre** crée des invendus qui font baisser le prix ; en dessous, un **excès de demande** (pénurie) déclenche une surenchère qui fait monter le prix.\n' +
          '• **Stabilité au sens de Walras** : un équilibre est **stable** si toute perturbation déclenche des forces de retour vers $E$, **instable** si elle l’en éloigne, et **neutre (métastable)** si les courbes coïncident.',
        keyRule:
          'Équilibre de marché : $Q^D(P^*) = Q^S(P^*)$. Si $P > P^*$ ⇒ excès d’offre ⇒ $\\Delta P < 0$ ; si $P < P^*$ ⇒ excès de demande ⇒ $\\Delta P > 0$.',
        formulas: [
          {
            name: 'Lois de la demande et de l’offre',
            formula: 'Q^D = f(P),\\; f’(P) < 0 \\quad | \\quad Q^S = g(P),\\; g’(P) > 0 \\quad | \\quad \\text{Équilibre} : f(P^*) = g(P^*)',
            note: 'Convention de Marshall : le prix P se trace en ordonnée et la quantité Q en abscisse.',
          },
          {
            name: 'Tâtonnement walrasien',
            formula: 'P > P^* \\implies Q^S > Q^D \\implies \\Delta P < 0 \\quad | \\quad P < P^* \\implies Q^D > Q^S \\implies \\Delta P > 0',
            note: 'L’ajustement par les prix restaure spontanément l’équilibre lorsqu’il est stable.',
          },
        ],
        workedExample: {
          title: 'Résoudre un équilibre de marché et diagnostiquer un déséquilibre',
          statement:
            'Sur le marché des routeurs Wi-Fi, $Q^D = 16\\,000 - 400P$ et $Q^S = 4\\,000 + 400P$ ($P$ en milliers de FCFA). Calculez $(P^*, Q^*)$, puis analysez la situation si le prix affiché est $P_1 = 20$.',
          methodSteps: [
            'Poser l’égalité offre = demande : $16\\,000 - 400P^* = 4\\,000 + 400P^* \\implies 800P^* = 12\\,000 \\implies P^* = 15$ (soit 15 000 FCFA).',
            'Calculer la quantité d’équilibre : $Q^* = 4\\,000 + 400(15) = 10\\,000$ unités (vérification : $16\\,000 - 400\\times 15 = 10\\,000$).',
            'Tester $P_1 = 20 > P^*$ : $Q^S = 4\\,000 + 8\\,000 = 12\\,000$ et $Q^D = 16\\,000 - 8\\,000 = 8\\,000$.',
            'Conclure sur le déséquilibre : $Q^S - Q^D = 4\\,000$ routeurs invendus (excès d’offre). La concurrence entre vendeurs pousse le prix à la baisse vers 15 000 FCFA.',
          ],
          conclusion:
            'Le marché converge spontanément vers l’équilibre stable $E(10\\,000\\text{ unités} ; 15\\,000\\text{ FCFA})$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Marchés',
            stepTheme: 'Comptant vs Terme',
            stepTitle: 'Marché physique, dématérialisé, au comptant et à terme',
            paragraphText:
              'Le mot « marché » ne désigne plus seulement une place physique comme le marché d’Adjamé : il recouvre tout mécanisme organisé de confrontation entre offre et demande.\n' +
              '• **Marché dématérialisé** : les échanges se concluent électroniquement sans présence physique (BRVM à Abidjan, plateformes e-commerce, bourses de matières premières).\n' +
              '• **Marché au comptant (spot)** : la transaction, le paiement et la livraison interviennent immédiatement au prix du jour.\n' +
              '• **Marché à terme (forward / futures)** : les parties signent aujourd’hui un contrat fixant le prix, la quantité, la qualité et la date d’une livraison future, afin de se protéger contre le risque de prix.\n' +
              '• **Exemple** : une coopérative de cacao vend aujourd’hui à terme 500 tonnes livrables dans 6 mois à un prix garanti en FCFA.',
            keyRule:
              'Comptant = exécution immédiate ; À terme = prix et conditions fixés aujourd’hui pour une livraison à échéance future.',
            konanTip:
              'Sur les marchés agricoles (cacao, café), les contrats à terme servent d’assurance contre la volatilité des cours mondiaux.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Un exportateur de noix de cajou signe en janvier un contrat fixant dès aujourd’hui le prix et la qualité d’une cargaison qui sera livrée et réglée en juillet. Sur quel type de marché opère-t-il ?',
              options: [
                'Un marché au comptant',
                'Un marché à terme',
                'Un marché de troc non monétaire',
                'Un marché administré hors contrat',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le marché à terme permet de verrouiller aujourd’hui les conditions contractuelles d’un échange qui sera dénoué ultérieurement.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Demande',
            stepTheme: 'Prix de réserve',
            stepTitle: 'Prix de réserve et distinction mouvement vs déplacement de la demande',
            paragraphText:
              'La loi de la demande repose sur la notion individuelle de **prix de réserve** et impose de ne jamais confondre deux phénomènes graphiques distincts.\n' +
              '• **Prix de réserve** : montant maximal qu’un acheteur est prêt à payer pour un bien (seuil d’indifférence entre acheter et renoncer). Quand le prix baisse, il passe sous le prix de réserve de nouveaux acheteurs ⇒ $f’(P) < 0$.\n' +
              '• **Mouvement LE LONG de la courbe** : causé uniquement par une variation du **prix propre** du bien ($ceteris\\ paribus$).\n' +
              '• **Déplacement DE LA courbe entière** : causé par un déterminant hors-prix (hausse du revenu, changement de goûts, variation du prix d’un bien substitut ou complément, démographie).\n' +
              '• **Exemple** : une promo sur un téléphone crée un mouvement vers le bas le long de la demande ; une hausse générale des salaires déplace toute la courbe vers la droite.',
            formula: {
              name: 'Fonction de demande décroissante',
              formula: 'Q^D = f(P) \\quad \\text{avec} \\quad f’(P) = \\frac{dQ^D}{dP} < 0',
              note: 'La fonction inverse de demande s’écrit P = f⁻¹(Q), tracée avec P en ordonnée.',
            },
            konanTip:
              'Piège fréquent : « le prix baisse, donc la courbe de demande se déplace vers la droite » est FAUX ! Une variation du prix propre fait GLISSER le point le long de la même courbe.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Sur le marché des abonnements fibre optique, quel événement provoque un DÉPLACEMENT vers la droite de toute la courbe de demande ?',
              options: [
                'Une baisse du prix mensuel de l’abonnement fibre',
                'Une panne technique réduisant le nombre de box produites',
                'Une hausse significative du revenu des ménages et l’essor du télétravail',
                'Une hausse du coût des câbles optiques payé par les opérateurs',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un déterminant hors-prix côté acheteurs (revenu, préférences/télétravail) déplace toute la courbe de demande vers la droite : à prix inchangé, la quantité demandée augmente.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Offre',
            stepTheme: 'Loi de l’offre',
            stepTitle: 'Fonction d’offre croissante et déterminants hors-prix',
            paragraphText:
              'Côté producteurs, la décision de mettre une quantité de biens sur le marché dépend de la rentabilité espérée par rapport aux coûts de production.\n' +
              '• **Loi de l’offre** : toutes choses égales par ailleurs, une hausse du prix rend la vente plus lucrative et permet de couvrir des coûts marginaux plus élevés ⇒ $Q^S = g(P)$ avec $g’(P) > 0$.\n' +
              '• **Déplacement vers la droite (hausse d’offre)** : progrès technologique, baisse du prix des intrants (énergie, salaires, composants), subvention à la production ou arrivée de nouveaux concurrents.\n' +
              '• **Déplacement vers la gauche (baisse d’offre)** : hausse des coûts d’intrants, taxe sur les producteurs ou choc climatique.\n' +
              '• **Exemple** : une baisse de 30 % du coût des panneaux solaires déplace la courbe d’offre d’électricité solaire vers la droite (plus d’unités offertes à chaque prix).',
            formula: {
              name: 'Fonction d’offre croissante',
              formula: 'Q^S = g(P) \\quad \\text{avec} \\quad g’(P) = \\frac{dQ^S}{dP} > 0',
              note: 'Dépend de la technologie, du prix des facteurs de production et du nombre d’offreurs.',
            },
            keyRule:
              'La courbe d’offre est croissante car produire des unités supplémentaires mobilise des ressources plus coûteuses (coût marginal croissant).',
            konanTip:
              'Tout facteur réduisant le coût unitaire (progrès technique, baisse des intrants) déplace l’offre vers la droite (et non vers le haut !).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Si le prix des semi-conducteurs (composant clé) augmente fortement, quel est l’impact immédiat sur le marché des ordinateurs portables ?',
              options: [
                'La courbe d’offre se déplace vers la gauche (baisse de l’offre à tout prix donné)',
                'La courbe d’offre se déplace vers la droite',
                'La courbe de demande se déplace vers la droite',
                'On observe seulement un glissement le long de la courbe d’offre initiale',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La hausse du coût d’un intrant réduit la rentabilité à chaque prix de vente : les producteurs offrent moins, ce qui déplace la courbe d’offre vers la gauche.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Équilibre & Déséquilibre',
            stepTitle: 'Calculer l’équilibre (P*, Q*) et mesurer un excès d’offre ou de demande',
            paragraphText:
              'L’équilibre concurrentiel est l’unique couple $(Q^*, P^*)$ où les plans des acheteurs et des vendeurs sont parfaitement compatibles, sans pénurie ni stock invendu.\n' +
              '• **Étape 1** : résoudre $Q^D(P) = Q^S(P)$ pour isoler le prix d’équilibre $P^*$.\n' +
              '• **Étape 2** : reporter $P^*$ dans $Q^D$ puis vérifier dans $Q^S$ que les deux donnent exactement $Q^*$.\n' +
              '• **Diagnostic hors équilibre** : pour tout $P_1 > P^*$, calculer l’excès d’offre $Q^S(P_1) - Q^D(P_1) > 0$ ; pour tout $P_2 < P^*$, calculer la pénurie $Q^D(P_2) - Q^S(P_2) > 0$.\n' +
              '• **Exemple** : avec $Q^D = 120 - 2P$ et $Q^S = 20 + 3P$, l’équilibre est $P^* = 20$ et $Q^* = 80$. Au prix $P = 25$, $Q^S = 95$ et $Q^D = 70$ : excès d’offre de $25$ unités.',
            keyRule:
              'Vérifie toujours ton calcul de $P^*$ en substituant dans LES DEUX équations ($Q^D$ et $Q^S$) : si les valeurs diffèrent, il y a une erreur d’algèbre !',
            konanTip:
              'Réflexe graphique : trace une ligne horizontale au prix P ; si elle coupe Q^S à droite de Q^D, c’est un excès d’offre (surplus).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Sur un marché défini par $Q^D = 180 - 3P$ et $Q^S = 30 + 2P$, quel est l’équilibre $(P^*, Q^*)$ et que se passe-t-il au prix $P = 20$ ?',
              options: [
                '$P^* = 30$, $Q^* = 90$ ; à $P = 20$, excès d’offre de 50 unités',
                '$P^* = 42$, $Q^* = 114$ ; à $P = 20$, pénurie de 20 unités',
                '$P^* = 30$, $Q^* = 90$ ; à $P = 20$, excès de demande (pénurie) de 50 unités',
                '$P^* = 25$, $Q^* = 80$ ; à $P = 20$, marché équilibré',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$180 - 3P = 30 + 2P \\implies 5P = 150 \\implies P^* = 30$ et $Q^* = 90$. À $P = 20$ : $Q^D = 120$ et $Q^S = 70$, d’où une pénurie $Q^D - Q^S = 50$ unités.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Stabilité',
            stepTheme: 'Walras',
            stepTitle: 'Équilibre stable, instable et neutre (métastable) au sens de Walras',
            paragraphText:
              'Trouver un point d’intersection $E$ ne suffit pas : encore faut-il savoir si le marché y revient spontanément après un choc. C’est la question de la **stabilité walrasienne**.\n' +
              '• **Équilibre stable** : toute déviation de prix déclenche un mécanisme de rappel vers $E$ (excès d’offre ⇒ baisse de $P$ ; excès de demande ⇒ hausse de $P$). C’est toujours vrai quand la demande décroît et l’offre croît, ou plus généralement quand la pente de l’offre (en repère $(Q, P)$) est supérieure à celle de la demande.\n' +
              '• **Équilibre instable** : un écart de prix crée des forces qui éloignent encore plus le marché de $E$.\n' +
              '• **Équilibre neutre (métastable)** : les courbes d’offre et de demande coïncident, de sorte qu’un déplacement n’engendre aucune force ni de retour ni d’éloignement.',
            keyRule:
              'Un équilibre walrasien est stable si un excès de demande fait monter le prix jusqu’à résorber cet excès, c’est-à-dire $d(Q^D - Q^S)/dP < 0$.',
            konanTip:
              'Retiens le cas particulier d’examen : équilibre métastable (neutre) = courbes d’offre et de demande confondues (aucune force de rappel).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quand qualifie-t-on un équilibre de marché de « neutre » ou « métastable » au sens de Walras ?',
              options: [
                'Lorsque toute hausse de prix crée un excès d’offre qui ramène le prix à $P^*$',
                'Lorsque la courbe d’offre est verticale à court terme',
                'Lorsque le prix d’équilibre est fixé par la Banque Centrale',
                'Lorsque les courbes d’offre et de demande coïncident, de sorte qu’une perturbation ne génère ni force de retour ni d’éloignement',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un équilibre métastable (ou neutre) survient quand offre et demande se superposent : tout point voisin est lui-même équilibré sans force de rappel.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Chocs',
            stepTheme: 'Statique comparative',
            stepTitle: 'Prédire l’effet d’un choc d’offre ou de demande sur P* et Q*',
            paragraphText:
              'La statique comparative permet de prévoir en quelques secondes le sens d’évolution du prix et des quantités d’équilibre après un choc exogène.\n' +
              '• **Hausse de la demande** (déplacement à droite) : $P^*$ **augmente** et $Q^*$ **augmente** (pénurie initiale résorbée par la hausse du prix).\n' +
              '• **Hausse de l’offre** (déplacement à droite) : $P^*$ **baisse** et $Q^*$ **augmente** (surplus initial résorbé par la baisse du prix).\n' +
              '• **Double choc simultané** : si demande ET offre augmentent ensemble, $Q^*$ augmente à coup sûr, mais l’effet sur $P^*$ est **ambigu** (dépend de l’amplitude relative des deux chocs).\n' +
              '• **Exemple** : l’arrivée de la 5G (hausse d’offre) couplée à l’essor du streaming mobile (hausse de demande) fait exploser les volumes de data échangés, avec un effet net sur le tarif dépendant du choc dominant.',
            keyRule:
              'Choc de demande ⇒ $P^*$ et $Q^*$ varient dans le MÊME sens. Choc d’offre ⇒ $P^*$ et $Q^*$ varient en sens OPPOSÉ.',
            konanTip:
              'Réflexe en or : si deux courbes se déplacent en même temps, UNE variable évolue de manière certaine et L’AUTRE est indéterminée sans précision sur l’ampleur des chocs !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Une sécheresse réduit l’offre de cacao (déplacement de l’offre à gauche) au moment même où la demande mondiale de chocolat augmente (déplacement de la demande à droite). Que peut-on affirmer avec certitude ?',
              options: [
                'Le prix d’équilibre $P^*$ augmente certainement, mais l’effet sur la quantité $Q^*$ est ambigu',
                'La quantité d’équilibre $Q^*$ augmente certainement, mais l’effet sur $P^*$ est ambigu',
                'Le prix $P^*$ et la quantité $Q^*$ baissent tous les deux',
                'Le prix $P^*$ reste strictement inchangé',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La baisse d’offre fait monter $P^*$ (et baisser $Q^*$) ; la hausse de demande fait aussi monter $P^*$ (et monter $Q^*$). Les effets sur $P^*$ s’additionnent (+), tandis que les effets sur $Q^*$ s’opposent (ambigu).',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : THÉORIE DU CONSOMMATEUR : PRÉFÉRENCES, UTILITÉ ET ÉQUILIBRE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch2',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Théorie du consommateur : préférences, utilité et équilibre optimal',
    summary:
      'Maîtriser les axiomes de préférence, l’utilité ordinale et marginale, les courbes d’indifférence, le TMS, la contrainte budgétaire, le Lagrangien, les courbes d’Engel et la décomposition revenu/substitution (cas Giffen).',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 2.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p1',
        order: 1,
        title: 'Biens, axiomes de préférence, utilité et courbes d’indifférence',
        summary:
          'Définition économique d’un bien, axiomes de rationalité, utilité cardinale vs ordinale, utilité marginale décroissante (1re loi de Gossen) et géométrie des courbes d’indifférence.',
        conceptExplanation:
          'La théorie du comportement du consommateur explique comment un individu rationnel concilie ses **goûts** (représentés par ses préférences et sa fonction d’utilité) et ses **possibilités marchandes** (dictées par son revenu et les prix).\n\n' +
          'Un bien économique se définit par trois paramètres : ses propriétés physiques (qualité), sa localisation spatiale et sa date de disponibilité. Les préférences rationnelles vérifient quatre axiomes : **complétude**, **réflexivité**, **transitivité** et **monotonie (non-saturation)**. Elles se traduisent par une fonction d’utilité **ordinale** $U(x_1, x_2)$ dont seul le classement importe (invariance par toute transformation strictement croissante).\n\n' +
          'L’**utilité marginale** $Um_i = \\partial U / \\partial x_i$ mesure le supplément de satisfaction d’une unité additionnelle et décroît avec la quantité consommée (1re loi de Gossen). Une **courbe d’indifférence** réunit les paniers procurant la même utilité $U_0$ : elle est décroissante, convexe vers l’origine, ne coupe jamais une autre courbe d’indifférence, et un éloignement de l’origine signifie une utilité supérieure.',
        keyRule:
          'Utilité ordinale : seul l’ordre des paniers compte. Deux courbes d’indifférence ne se coupent jamais (par transitivité et non-saturation).',
        formulas: [
          {
            name: 'Utilité marginale et première loi de Gossen',
            formula: 'Um_1 = \\frac{\\partial U}{\\partial x_1} > 0, \\qquad \\frac{\\partial Um_1}{\\partial x_1} = \\frac{\\partial^2 U}{\\partial x_1^2} < 0',
            note: 'La satisfaction totale croît, mais chaque unité supplémentaire apporte un supplément d’utilité plus faible.',
          },
          {
            name: 'Préférences particulières (substituts vs compléments parfaits)',
            formula: 'U_{\\text{subst}} = a x_1 + b x_2 \\quad | \\quad U_{\\text{comp}} = \\min(a x_1,\\, b x_2)',
            note: 'Droites affines pour les substituts parfaits ; angles droits (en L) pour les compléments parfaits (Leontief).',
          },
        ],
        workedExample: {
          title: 'Vérifier l’invariance ordinale et la décroissance de l’utilité marginale',
          statement:
            'Un étudiant possède l’utilité $U(x_1, x_2) = x_1^{0,5} x_2^{0,5}$. 1) Calculez $Um_1$ et montrez qu’elle décroît quand $x_1$ augmente (à $x_2 = 16$ fixe). 2) La fonction $V(x_1, x_2) = \\ln(x_1) + \\ln(x_2)$ représente-t-elle exactement les mêmes préférences ?',
          methodSteps: [
            'Dérivée partielle par rapport à $x_1$ : $Um_1 = 0,5 x_1^{-0,5} x_2^{0,5} = \\frac{0,5\\sqrt{x_2}}{\\sqrt{x_1}}$.',
            'Pour $x_2 = 16$ : $Um_1 = \\frac{2}{\\sqrt{x_1}}$. Si $x_1 = 1$, $Um_1 = 2$ ; si $x_1 = 4$, $Um_1 = 1$ ; si $x_1 = 16$, $Um_1 = 0,5$. L’utilité marginale est bien décroissante.',
            'Observons que $V(x_1, x_2) = \\ln(x_1 x_2) = 2\\ln(x_1^{0,5} x_2^{0,5}) = 2\\ln(U)$.',
            'Comme $f(u) = 2\\ln(u)$ est une transformation strictement croissante pour $u > 0$, $V$ classe tous les paniers exactement dans le même ordre que $U$.',
          ],
          conclusion:
            'L’utilité marginale décroît conformément à la 1re loi de Gossen, et $V = 2\\ln(U)$ représente rigoureusement les mêmes préférences ordinales.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Concept de bien',
            stepTheme: 'Trois paramètres',
            stepTitle: 'Les trois dimensions qui définissent un bien économique',
            paragraphText:
              'En microéconomie, deux objets physiquement identiques ne forment pas nécessairement le même bien économique ! Trois paramètres distinguent rigoureusement un bien d’un autre.\n' +
              '• **Propriétés physiques (nature et qualité)** : deux qualités différentes d’un même service (ex. connexion 3G vs fibre 500 Mbps) constituent deux biens distincts.\n' +
              '• **Localisation spatiale** : un sac de riz disponible à Korhogo et le même sac livré au Plateau à Abidjan sont deux biens différents en raison du coût de transport.\n' +
              '• **Date de disponibilité** : 100 000 FCFA disponibles aujourd’hui et 100 000 FCFA disponibles dans un an sont deux biens distincts (préférence pour le présent).\n' +
              '• **Panier de consommation** : vecteur $X = (x_1, x_2, \\dots, x_n)$ regroupant les quantités consommées de chaque bien.',
            keyRule:
              'Un bien microéconomique est défini par le triplet : (Qualité physique, Lieu, Date).',
            konanTip:
              'Pense au prix d’une bouteille d’eau : 200 FCFA en supermarché vs 1 500 FCFA dans un avion — même objet physique, mais lieu différent = bien différent !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Selon la définition microéconomique rigoureuse d’un bien, pourquoi un billet de concert disponible aujourd’hui et un billet pour le même concert un mois plus tard (ou dans une autre ville) sont-ils considérés comme des biens distincts ?',
              options: [
                'Uniquement parce que leur couleur d’impression diffère',
                'Parce qu’un bien se caractérise par trois paramètres : propriétés physiques, localisation géographique et date de disponibilité',
                'Parce qu’un consommateur ne peut acheter qu’un seul bien dans sa vie',
                'Parce que seuls les biens matériels comptent en microéconomie',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un bien économique est spécifié par sa nature/qualité, son lieu et sa date de mise à disposition : changer l’un de ces trois paramètres crée un autre bien.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Axiomes',
            stepTheme: 'Rationalité',
            stepTitle: 'Complétude, réflexivité, transitivité et non-saturation',
            paragraphText:
              'Pour modéliser mathématiquement les choix d’un consommateur rationnel, la microéconomie impose quatre axiomes de cohérence sur sa relation de préférence $\\succeq$.\n' +
              '• **Complétude** : face à deux paniers $A$ et $B$, l’individu sait toujours les classer ($A \\succeq B$, $B \\succeq A$, ou indifférence $A \\sim B$).\n' +
              '• **Réflexivité** : tout panier est au moins aussi bon que lui-même ($A \\succeq A$).\n' +
              '• **Transitivité** : si $A \\succeq B$ et $B \\succeq C$, alors $A \\succeq C$ (garantit l’absence de choix circulaires incohérents).\n' +
              '• **Monotonie (non-saturation)** : pour des biens désirables, « plus est toujours préféré à moins » ; augmenter la quantité d’un bien sans réduire l’autre accroît strictement la satisfaction.',
            keyRule:
              'Sans l’axiome de transitivité, un consommateur pourrait tourner en rond ($A \\succ B \\succ C \\succ A$) et aucune fonction d’utilité n’existerait.',
            konanTip:
              'Retiens le quatuor C-R-T-M : Complétude, Réflexivité, Transitivité, Monotonie (plus la Convexité pour assurer un optimum intérieur unique).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Un consommateur déclare préférer un forfait A à un forfait B, et préférer le forfait B au forfait C, mais affirme préférer le forfait C au forfait A. Quel axiome fondamental viole-t-il ?',
              options: [
                'L’axiome de transitivité',
                'L’axiome de réflexivité',
                'La loi de l’offre',
                'L’homogénéité de degré 0',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La transitivité impose que si $A \\succ B$ et $B \\succ C$, alors nécessairement $A \\succ C$. Préférer $C$ à $A$ crée un cycle incohérent.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Utilité',
            stepTheme: 'Cardinale vs Ordinale',
            stepTitle: 'Passage de l’utilité cardinale à l’utilité ordinale',
            paragraphText:
              'Comment mesurer la satisfaction ? La théorie économique a abandonné l’idée naïve d’un « thermomètre du bonheur » au profit d’un simple classement.\n' +
              '• **Utilité cardinale** (approche ancienne, Walras, Jevons) : suppose que la satisfaction est mesurable en unités absolues (« utils »), permettant de dire qu’un panier donne « 2 fois plus de bonheur » qu’un autre.\n' +
              '• **Utilité ordinale** (approche moderne, Pareto, Hicks) : la fonction $U(x_1, x_2)$ sert uniquement à **classer** les paniers du moins préféré au plus préféré.\n' +
              '• **Invariance monotone** : si $f$ est une fonction strictement croissante (ex. $f(u) = 3u + 5$, $f(u) = u^2$ pour $u > 0$, ou $f(u) = \\ln u$), alors $V = f(U)$ représente **exactement les mêmes préférences** et conduit au même panier optimal !',
            formula: {
              name: 'Invariance par transformation monotone croissante',
              formula: 'V(x_1, x_2) = f\\big(U(x_1, x_2)\\big), \\quad f’ > 0 \\implies \\text{Mêmes préférences et même TMS}',
              note: 'Astuce puissante : remplacer $U = x_1^\\alpha x_2^\\beta$ par $\\ln U = \\alpha \\ln x_1 + \\beta \\ln x_2$ simplifie grandement les dérivées !',
            },
            konanTip:
              'Pour simplifier une Cobb-Douglas en examen, prends son logarithme népérien : comme $\\ln$ est strictement croissante, le panier optimal reste 100 % identique.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Soit la fonction d’utilité ordinale $U(x_1, x_2) = x_1 x_2$ (pour $x_1, x_2 > 0$). Laquelle de ces fonctions représente des préférences DIFFÉRENTES de celles de $U$ ?',
              options: [
                '$V_1 = 5 x_1 x_2 + 10$',
                '$V_2 = \\ln(x_1) + \\ln(x_2)$',
                '$V_3 = (x_1 x_2)^3$',
                '$V_4 = - x_1 x_2$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$V_1$, $V_2 = \\ln(U)$ et $V_3 = U^3$ sont des transformations strictement croissantes de $U$. En revanche, $V_4 = -U$ est décroissante : elle inverse totalement l’ordre de préférence !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Gossen',
            stepTheme: 'Utilité marginale',
            stepTitle: 'Utilité totale, utilité marginale et première loi de Gossen',
            paragraphText:
              'Le premier verre d’eau fraîche sous le soleil d’Abidjan procure une satisfaction immense ; le cinquième verre en procure beaucoup moins. C’est la **loi de l’utilité marginale décroissante**.\n' +
              '• **Utilité marginale** : supplément d’utilité totale procuré par la consommation d’une unité infinitésimale additionnelle d’un bien, l’autre restant constant : $Um_i = \\partial U / \\partial x_i$.\n' +
              '• **Première loi de Gossen** : pour tout bien standard, $Um_i > 0$ (l’utilité totale croît) mais $\\partial Um_i / \\partial x_i < 0$ (elle croît de moins en moins vite jusqu’au point de satiété où $Um_i = 0$).\n' +
              '• **Exemple** : si $U(x) = 10x - x^2$, alors $Um(x) = 10 - 2x$. Elle passe de $8$ (à $x = 1$) à $4$ (à $x = 3$) et s’annule au point de satiété $x = 5$.',
            formula: {
              name: 'Utilité marginale et point de satiété',
              formula: 'Um_i = \\frac{\\partial U}{\\partial x_i} \\quad | \\quad \\text{Satiété atteinte lorsque } Um_i = 0',
              note: 'L’utilité totale atteint son maximum au point où l’utilité marginale s’annule.',
            },
            keyRule:
              'La première loi de Gossen affirme que l’utilité marginale décroît à mesure que la quantité consommée augmente, jusqu’au point de satiété où Um = 0.',
            konanTip:
              'Dès qu’on te demande le point de satiété d’une fonction U(x), dérive une fois et résous U’(x) = 0 !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Un consommateur a pour utilité totale d’un bien $U(x) = 24x - 2x^2$. Pour quelle quantité $x$ son utilité totale atteint-elle son maximum (point de satiété) ?',
              options: [
                '$x = 4$',
                '$x = 12$',
                '$x = 6$',
                '$x = 24$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’utilité totale est maximale quand $Um(x) = U’(x) = 0$. Ici $24 - 4x = 0 \\implies x = 6$ (et $U’’(x) = -4 < 0$, c’est bien un maximum).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Indifférence',
            stepTheme: '4 propriétés clés',
            stepTitle: 'Les quatre propriétés géométriques des courbes d’indifférence',
            paragraphText:
              'Une **courbe d’indifférence** rassemble tous les paniers $(x_1, x_2)$ qui procurent au consommateur exactement le même niveau de satisfaction $U(x_1, x_2) = \\bar{U}$. Pour des biens désirables standards, la carte d’indifférence obéit à quatre lois.\n' +
              '• **1. Pente négative (décroissante)** : si on augmente $x_1$, il faut réduire $x_2$ pour maintenir l’utilité constante (conséquence de la non-saturation).\n' +
              '• **2. Non-intersection** : deux courbes de niveaux distincts ne se coupent jamais, sinon un même point $I$ posséderait deux utilités différentes (violation de la transitivité et de la monotonie).\n' +
              '• **3. Utilité croissante vers le Nord-Est** : plus la courbe s’éloigne de l’origine, plus le niveau de satisfaction est élevé.\n' +
              '• **4. Convexité vers l’origine** : les paniers équilibrés sont préférés aux paniers extrêmes (goût pour la diversité).',
            keyRule:
              'Décroissantes, convexes, jamais sécantes, et d’autant plus élevées en utilité qu’elles s’éloignent de l’origine : ce sont les 4 propriétés canoniques.',
            konanTip:
              'Pour dessiner proprement une carte d’indifférence en copie : trace 3 courbes convexes emboîtées ne se touchant jamais et ajoute une flèche « U croissante » vers le Nord-Est.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi deux courbes d’indifférence correspondant à des niveaux d’utilité différents ne peuvent-elles JAMAIS se couper ?',
              options: [
                'Parce que le prix des biens est toujours constant',
                'Parce qu’une intersection violerait à la fois les axiomes de transitivité et de non-saturation',
                'Parce que les courbes d’indifférence sont toujours des droites verticales',
                'Parce que le revenu du consommateur est illimité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si $U_1$ et $U_2$ se coupaient en $I$, alors deux paniers $A \\in U_1$ et $B \\in U_2$ vérifiant $B$ strictement supérieur à $A$ seraient tous deux indifférents à $I$, donc indifférents entre eux par transitivité : contradiction avec la non-saturation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Cas limites',
            stepTheme: 'Substituts & Compléments',
            stepTitle: 'Substituts parfaits, compléments parfaits et biens indésirables',
            paragraphText:
              'Toutes les préférences ne ressemblent pas à une belle courbe hyperbolique lisse ! Trois formes atypiques tombent très souvent dans les sujets d’examen.\n' +
              '• **Substituts parfaits** : $U = a x_1 + b x_2$ (ex. deux marques identiques d’eau minérale). Les courbes d’indifférence sont des **droites parallèles** de pente constante $-a/b$.\n' +
              '• **Compléments parfaits (Leontief)** : $U = \\min(a x_1, b x_2)$ (ex. chaussure gauche et chaussure droite, ou console et alimentation). Les courbes forment des **angles droits en L** alignés sur la droite $a x_1 = b x_2$.\n' +
              '• **Bien indésirable (mal économique)** : ex. pollution ou bruit face à un bien désirable. Pour compenser plus de pollution, il faut PLUS de bien désirable : les courbes d’indifférence deviennent **croissantes** !',
            konanTip:
              'Si tu vois $U = \\min(2x_1, x_2)$, le consommateur choisira TOUJOURS sur la droite des sommets $2x_1 = x_2$, sans jamais utiliser de dérivées partielles !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Un utilisateur achète des ordinateurs ($x_1$) et des licences système ($x_2$) exactement dans un rapport de 1 licence par ordinateur : $U(x_1, x_2) = \\min(x_1, x_2)$. Quelle est la forme de ses courbes d’indifférence ?',
              options: [
                'Des droites décroissantes de pente −1',
                'Des courbes concaves vers l’origine',
                'Des courbes en angle droit (en forme de L) dont les sommets sont alignés sur la bissectrice $x_2 = x_1$',
                'Des droites croissantes issues de l’origine',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Avec $U = \\min(x_1, x_2)$, ajouter des licences sans ordinateur supplémentaire n’augmente pas l’utilité : les courbes d’indifférence sont en L avec sommets sur $x_2 = x_1$.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p2',
        order: 2,
        title: 'Taux Marginal de Substitution (TMS) et convexité des préférences',
        summary:
          'Démontrer le TMS par la différentielle totale, l’interpréter économiquement, maîtriser le calcul Cobb-Douglas et relier la décroissance du TMS à la convexité.',
        conceptExplanation:
          'Le **Taux Marginal de Substitution** du bien 1 au bien 2, noté $TMS_{1/2}$ (ou $TMS_{x_1 \\to x_2}$), mesure la quantité de bien 2 à laquelle le consommateur accepte de renoncer pour obtenir une unité supplémentaire de bien 1 **tout en maintenant sa satisfaction inchangée**.\n\n' +
          'Le long d’une courbe d’indifférence, la différentielle totale de l’utilité est nulle : $dU = Um_1\\,dx_1 + Um_2\\,dx_2 = 0$, ce qui démontre la formule fondamentale :\n' +
          '$$TMS_{1/2} = -\\frac{dx_2}{dx_1} = \\frac{Um_1}{Um_2}$$\n' +
          'Géométriquement, le TMS est l’opposé de la pente de la tangente à la courbe d’indifférence. La **convexité** des préférences équivaut à la **décroissance du TMS** le long de la courbe : plus un bien devient abondant dans le panier, moins le consommateur est disposé à sacrifier de l’autre bien (devenu rare) pour en obtenir une unité additionnelle.',
        keyRule:
          'Retiens la double identité du TMS : $TMS_{1/2} = -\\frac{dx_2}{dx_1} = \\frac{Um_1}{Um_2}$. Pour une Cobb-Douglas $A x_1^\\alpha x_2^\\beta$, $TMS_{1/2} = \\frac{\\alpha}{\\beta}\\frac{x_2}{x_1}$.',
        formulas: [
          {
            name: 'Définition générale du TMS',
            formula: 'dU = 0 \\implies TMS_{1/2} = -\\frac{dx_2}{dx_1} = \\frac{Um_1}{Um_2}',
            note: 'C’est le taux subjectif d’échange du consommateur entre le bien 1 et le bien 2.',
          },
          {
            name: 'Raccourci TMS pour une fonction Cobb-Douglas',
            formula: 'U(x_1, x_2) = A\\,x_1^\\alpha x_2^\\beta \\implies TMS_{1/2} = \\frac{\\alpha}{\\beta} \\cdot \\frac{x_2}{x_1}',
            note: 'Remarquer que la constante multiplicative A disparaît totalement du TMS !',
          },
        ],
        workedExample: {
          title: 'Calculer, vérifier la décroissance et interpréter le TMS',
          statement:
            'Soit $U(x_1, x_2) = 5\\,x_1^{0,4} x_2^{0,6}$. Calculez $Um_1$, $Um_2$ et $TMS_{1/2}$. Évaluez-le aux paniers $A(2 ; 9)$ et $B(6 ; 3)$, puis interprétez.',
          methodSteps: [
            '$Um_1 = \\frac{\\partial U}{\\partial x_1} = 5 \\times 0,4\\,x_1^{-0,6} x_2^{0,6} = 2\\,(x_2/x_1)^{0,6}$.',
            '$Um_2 = \\frac{\\partial U}{\\partial x_2} = 5 \\times 0,6\\,x_1^{0,4} x_2^{-0,4} = 3\\,(x_1/x_2)^{0,4}$.',
            '$TMS_{1/2} = \\frac{Um_1}{Um_2} = \\frac{2}{3} \\cdot \\frac{x_2}{x_1}$ (conforme à $\\frac{0,4}{0,6} \\frac{x_2}{x_1}$).',
            'En $A(2;9)$ : $TMS = \\frac{2}{3} \\times \\frac{9}{2} = 3$. En $B(6;3)$ : $TMS = \\frac{2}{3} \\times \\frac{3}{6} = \\frac{1}{3} \\approx 0,33$.',
          ],
          conclusion:
            'Au panier $A$, le consommateur cède volontiers $3$ unités de bien 2 pour $+1$ unité de bien 1 ; en $B$, où le bien 1 est plus abondant, il n’accepte plus d’en céder que $0,33$ : le TMS est bien décroissant.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Démonstration',
            stepTheme: 'Différentielle dU = 0',
            stepTitle: 'Démontrer la formule du TMS à partir de dU = 0',
            paragraphText:
              'Pourquoi le rapport des utilités marginales est-il exactement égal à la pente (au signe près) de la courbe d’indifférence ? La démonstration tient en deux lignes de calcul différentiel.\n' +
              '• **Déplacement le long de la courbe** : puisque la satisfaction reste constante ($U = \\bar{U}$), sa variation totale est nulle : $dU = \\frac{\\partial U}{\\partial x_1} dx_1 + \\frac{\\partial U}{\\partial x_2} dx_2 = 0$.\n' +
              '• **Isolement du rapport** : $Um_1\\,dx_1 = -Um_2\\,dx_2 \\implies -\\frac{dx_2}{dx_1} = \\frac{Um_1}{Um_2} = TMS_{1/2}$.\n' +
              '• **Signe positif par convention** : comme $dx_2$ et $dx_1$ sont de signes contraires, le signe « moins » garantit un $TMS > 0$ pour deux biens désirables.',
            formula: {
              name: 'Démonstration du TMS',
              formula: 'dU = Um_1\\,dx_1 + Um_2\\,dx_2 = 0 \\iff TMS_{1/2} = -\\frac{dx_2}{dx_1} = \\frac{Um_1}{Um_2}',
              note: 'L’indice 1 au numérateur (Um₁) correspond toujours au bien en abscisse (x₁).',
            },
            keyRule:
              'Ne renverse jamais la fraction ! Le TMS du bien 1 (en abscisse) en bien 2 (en ordonnée) place toujours $Um_1$ au numérateur et $Um_2$ au dénominateur.',
            konanTip:
              'Rappel éclair : si l’énoncé demande TMS_{2/1} (bien 2 en abscisse), c’est l’inverse Um₂/Um₁ = 1/TMS_{1/2}. Lis toujours les indices !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Pour un consommateur dont les utilités marginales au panier courant valent $Um_1 = 18$ et $Um_2 = 6$, que vaut le $TMS_{1/2} = -dx_2/dx_1$ ?',
              options: ['0,33', '12', '3', '108'],
              correctAnswerIndex: 2,
              explanation:
                '$TMS_{1/2} = Um_1 / Um_2 = 18 / 6 = 3$. Le consommateur valorise marginalement le bien 1 trois fois plus que le bien 2.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Interprétation',
            stepTheme: 'Sens économique',
            stepTitle: 'Interpréter économiquement la valeur numérique du TMS',
            paragraphText:
              'Un chiffre de TMS n’est pas une abstraction mathématique : il traduit la valeur subjective qu’un individu accorde à un bien mesurée en unités d’un autre bien.\n' +
              '• **Lecture directe** : si $TMS_{1/2} = 4$, le consommateur est prêt à sacrifier **4 unités de bien 2** pour recevoir **1 unité supplémentaire de bien 1** sans perdre ni gagner de satisfaction.\n' +
              '• **Lien avec la rareté subjective** : un TMS élevé signifie que le bien 1 est perçu comme très précieux (ou très rare dans le panier actuel) comparé au bien 2.\n' +
              '• **Exemple** : si un étudiant a beaucoup de gigaoctets data ($x_2$) mais très peu de repas ($x_1$), son $TMS_{\\text{repas/data}}$ est élevé : il céderait volontiers 5 Go pour un plat chaud.',
            konanTip:
              'Formule-type à rédiger en copie d’examen : « À ce panier, le consommateur accepte de renoncer à [valeur du TMS] unités de bien 2 pour obtenir 1 unité supplémentaire de bien 1 à utilité constante. »',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Au panier $(x_1 = 4, x_2 = 20)$, on trouve $TMS_{1/2} = 5$. Quelle interprétation économique est exacte ?',
              options: [
                'Le prix du bien 1 est nécessairement égal à 5 fois le prix du bien 2',
                'Le consommateur est disposé à renoncer à 5 unités de bien 2 pour obtenir 1 unité supplémentaire de bien 1 à satisfaction constante',
                'Le consommateur veut échanger 5 unités de bien 1 contre 1 unité de bien 2',
                'La satisfaction totale du consommateur est égale à 5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le TMS est un taux subjectif d’échange (indépendant des prix de marché hors équilibre) : il indique combien de $x_2$ l’individu cède pour $+1$ unité de $x_1$ à $U$ constant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Cobb-Douglas',
            stepTheme: 'Calcul rapide',
            stepTitle: 'Calculer le TMS pour une fonction Cobb-Douglas ou additive',
            paragraphText:
              'Savoir dériver rapidement le TMS sur les fonctions usuelles fait gagner de précieuses minutes dans les problèmes d’optimisation.\n' +
              '• **Cobb-Douglas** $U = A x_1^\\alpha x_2^\\beta$ : $Um_1 = \\alpha A x_1^{\\alpha-1} x_2^\\beta$ et $Um_2 = \\beta A x_1^\\alpha x_2^{\\beta-1}$, d’où immédiatement $TMS_{1/2} = \\frac{\\alpha}{\\beta} \\frac{x_2}{x_1}$.\n' +
              '• **Logarithmique** $U = \\alpha \\ln x_1 + \\beta \\ln x_2$ : $Um_1 = \\alpha / x_1$ et $Um_2 = \\beta / x_2 \\implies TMS_{1/2} = \\frac{\\alpha}{\\beta} \\frac{x_2}{x_1}$ (strictement identique !).\n' +
              '• **Quasi-linéaire** $U = \\sqrt{x_1} + x_2$ : $Um_1 = \\frac{1}{2\\sqrt{x_1}}$ et $Um_2 = 1 \\implies TMS_{1/2} = \\frac{1}{2\\sqrt{x_1}}$ (ne dépend que de $x_1$ !).',
            formula: {
              name: 'TMS des trois fonctions usuelles',
              formula: 'U = A x_1^\\alpha x_2^\\beta \\Rightarrow TMS = \\frac{\\alpha x_2}{\\beta x_1} \\quad | \\quad U = \\sqrt{x_1} + x_2 \\Rightarrow TMS = \\frac{1}{2\\sqrt{x_1}}',
              note: 'Vérifier systématiquement que le TMS est homogène de degré 0 en (x₁, x₂) pour une fonction homothétique (Cobb-Douglas).',
            },
            keyRule:
              'Pour toute utilité Cobb-Douglas U = A·x₁^α·x₂^β, le TMS vaut directement (α/β)·(x₂/x₁), indépendamment du coefficient A.',
            konanTip:
              'Si un exposant manque sur une variable (ex. U = x₁²·x₂), n’oublie pas qu’il vaut implicitement 1 (β = 1) !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle est l’expression du $TMS_{1/2}$ pour la fonction d’utilité $U(x_1, x_2) = 10\\,x_1^3 x_2^2$ ?',
              options: [
                '$\\frac{3}{2} \\cdot \\frac{x_2}{x_1}$',
                '$\\frac{2}{3} \\cdot \\frac{x_1}{x_2}$',
                '$30\\,\\frac{x_2}{x_1}$',
                '$\\frac{3}{2} \\cdot \\frac{x_1}{x_2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec $\\alpha = 3$ et $\\beta = 2$, la constante $10$ se simplifie : $TMS_{1/2} = \\frac{30 x_1^2 x_2^2}{20 x_1^3 x_2} = \\frac{3}{2}\\frac{x_2}{x_1}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Convexité',
            stepTheme: 'TMS décroissant',
            stepTitle: 'Décroissance du TMS et préférence pour la diversité',
            paragraphText:
              'Lorsque l’on se déplace vers la droite le long d’une courbe d’indifférence convexe ($x_1$ augmente et $x_2$ diminue), la pente s’aplatit progressivement.\n' +
              '• **Principe de décroissance du TMS** : à mesure que le consommateur accumule du bien 1 et se prive du bien 2, il exige de moins en moins de bien 1 (ou accepte de céder de moins en moins de bien 2) pour un nouvel échange.\n' +
              '• **Signification comportementale** : un panier **mélangé** (moyenne pondérée de deux paniers indifférents) procure une satisfaction strictement supérieure aux paniers extrêmes : c’est le **goût pour la diversité**.\n' +
              '• **Vérification mathématique** : pour $TMS = \\frac{\\alpha x_2}{\\beta x_1}$, quand $x_1 \\uparrow$ et $x_2 \\downarrow$, le ratio $x_2/x_1$ décroît strictement.',
            keyRule:
              'Courbe d’indifférence strictement convexe $\\iff$ TMS strictement décroissant le long de la courbe $\\iff$ préférence pour les paniers diversifiés.',
            konanTip:
              'Pour prouver rapidement qu’une courbe d’indifférence est convexe, vérifie que d(TMS)/dx₁ < 0 le long de la courbe.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Un consommateur est indifférent entre le panier $A(10 ; 2)$ et le panier $B(2 ; 10)$. Si ses préférences sont strictement convexes (TMS décroissant), comment classe-t-il le panier médian $M(6 ; 6)$ ?',
              options: [
                'Il préfère strictement $A$ et $B$ au panier $M$',
                'Il est indifférent entre $M$, $A$ et $B$',
                'Il ne peut pas comparer $M$ à $A$ et $B$',
                'Il préfère strictement le panier équilibré $M(6 ; 6)$ aux paniers extrêmes $A$ et $B$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Par définition géométrique de la convexité stricte, toute combinaison convexe $M = 0,5A + 0,5B$ se situe au-dessus de la courbe d’indifférence reliant $A$ et $B$, donc sur un niveau d’utilité supérieur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Exceptions',
            stepTheme: 'TMS extrêmes',
            stepTitle: 'Le TMS dans le cas des substituts parfaits et compléments parfaits',
            paragraphText:
              'La décroissance stricte du TMS ne s’applique pas aux deux cas limites classiques, qu’il faut savoir reconnaître instantanément.\n' +
              '• **Substituts parfaits** ($U = a x_1 + b x_2$) : $Um_1 = a$ et $Um_2 = b$, donc $TMS_{1/2} = a / b$ est **rigoureusement constant** en tout point. Le consommateur échange toujours les deux biens au même taux fixe (ex. 1 billet de 2 000 FCFA contre 2 billets de 1 000 FCFA).\n' +
              '• **Compléments parfaits** ($U = \\min(a x_1, b x_2)$) : le TMS vaut $0$ sur la branche horizontale, $+\\infty$ sur la branche verticale, et n’est **pas défini** au sommet anguleux où $a x_1 = b x_2$.\n' +
              '• **Piège d’examen** : ne tente jamais d’égaliser $TMS = P_1/P_2$ pour une fonction linéaire ou un $\\min$ !',
            konanTip:
              'Substituts parfaits ⇒ TMS constant = a/b ⇒ solution en coin (sauf si a/b = P₁/P₂). Compléments parfaits ⇒ pas de TMS au coude ⇒ on utilise a·x₁ = b·x₂.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Pour la fonction d’utilité $U(x_1, x_2) = 4x_1 + 2x_2$, comment évolue le $TMS_{1/2}$ lorsque $x_1$ augmente le long d’une courbe d’indifférence ?',
              options: [
                'Il diminue vers zéro',
                'Il reste strictement constant et égal à 2',
                'Il augmente proportionnellement à $x_1$',
                'Il est égal à 0,5 partout',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$Um_1 = 4$ et $Um_2 = 2$, d’où $TMS_{1/2} = 4 / 2 = 2$ : taux constant caractérisant deux biens parfaitement substituables.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Pratique',
            stepTheme: 'Échange mutuel',
            stepTitle: 'Pourquoi deux agents aux TMS différents gagnent à échanger',
            paragraphText:
              'Le TMS explique le fondement même de l’échange volontaire dans toute économie, bien au-delà du choix individuel.\n' +
              '• **Condition d’échange mutuellement avantageux** : si à leurs dotations initiales, Awa a un $TMS_{1/2}^A = 4$ et Koffi a un $TMS_{1/2}^K = 1$, alors Awa accepte de céder jusqu’à 4 unités de bien 2 pour 1 unité de bien 1, tandis que Koffi n’en demande qu’une seule.\n' +
              '• **Gain à l’échange** : tout troc à un taux intermédiaire (par exemple 2 unités de bien 2 contre 1 unité de bien 1) améliore **simultanément** la satisfaction d’Awa et de Koffi !\n' +
              '• **Fin des échanges (optimum de Pareto)** : l’échange s’arrête lorsque leurs TMS s’égalisent : $TMS_{1/2}^A = TMS_{1/2}^K$.',
            keyRule:
              'Égalité des TMS entre consommateurs ($TMS^A = TMS^B$) = condition d’efficience dans l’échange (optimum de Pareto).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Deux étudiants possèdent des livres ($x_1$) et des crédits data ($x_2$). Awa a $TMS_{1/2}^A = 3$ et Koffi a $TMS_{1/2}^K = 1$. Quel échange améliore simultanément leur satisfaction ?',
              options: [
                'Koffi cède 1 livre à Awa en échange de 2 crédits data',
                'Awa cède 1 livre à Koffi en échange de 2 crédits data',
                'Aucun échange ne peut être mutuellement bénéfique',
                'Koffi cède 1 livre à Awa en échange de 5 crédits data',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Awa est prête à payer jusqu’à 3 data pour 1 livre ; Koffi accepte de vendre 1 livre dès 1 data. À 2 data pour 1 livre, Awa paie moins que sa disposition (2 < 3) et Koffi reçoit plus que son minimum (2 > 1) : les deux y gagnent !',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p3',
        order: 3,
        title: 'Contrainte budgétaire et équilibre optimal du consommateur (Lagrangien)',
        summary:
          'Construire la droite de budget, poser et résoudre le Lagrangien, appliquer la condition de tangence TMS = P₁/P₂ (2e loi de Gossen), trouver les demandes marshalliennes et vérifier l’absence d’illusion monétaire.',
        conceptExplanation:
          'Le consommateur ne peut pas tout acheter : son revenu nominal $R$ et les prix unitaires $(P_1, P_2)$ délimitent son **ensemble budgétaire** $P_1 x_1 + P_2 x_2 \\le R$. Par non-saturation, il dépense intégralement son revenu sur la **droite de budget** :\n' +
          '$$x_2 = \\frac{R}{P_2} - \\frac{P_1}{P_2} x_1$$\n' +
          'Sa pente $-P_1/P_2$ représente le prix relatif du bien 1 en termes de bien 2 (taux d’échange imposé par le marché).\n\n' +
          'Le programme d’optimisation consiste à maximiser $U(x_1, x_2)$ sous la contrainte $P_1 x_1 + P_2 x_2 = R$. Le **Lagrangien** s’écrit $\\mathcal{L}(x_1, x_2, \\lambda) = U(x_1, x_2) + \\lambda(R - P_1 x_1 - P_2 x_2)$. Les conditions du premier ordre donnent :\n' +
          '$$\\frac{Um_1}{P_1} = \\frac{Um_2}{P_2} = \\lambda \\iff TMS_{1/2} = \\frac{P_1}{P_2}$$\n' +
          'Géométriquement, l’optimum intérieur est le point de tangence entre la droite de budget et la courbe d’indifférence la plus élevée atteignable. Économiquement, le dernier franc dépensé doit rapporter la même utilité marginale sur chaque bien (**2e loi de Gossen**).',
        keyRule:
          'Optimum intérieur = système de 2 équations : (1) $TMS_{1/2} = P_1/P_2$ (ou $Um_1/P_1 = Um_2/P_2$) et (2) contrainte budgétaire $P_1 x_1 + P_2 x_2 = R$.',
        formulas: [
          {
            name: 'Lagrangien et conditions du premier ordre (CPO)',
            formula: '\\mathcal{L}(x_1, x_2, \\lambda) = U(x_1, x_2) + \\lambda(R - P_1 x_1 - P_2 x_2) \\implies \\frac{Um_1}{P_1} = \\frac{Um_2}{P_2} = \\lambda',
            note: 'Le multiplicateur λ mesure l’utilité marginale du revenu (gain d’utilité par franc additionnel).',
          },
          {
            name: 'Demandes marshalliennes Cobb-Douglas (U = A·x₁^α·x₂^β)',
            formula: 'x_1^*(P_1, R) = \\frac{\\alpha}{\\alpha + \\beta} \\cdot \\frac{R}{P_1}, \\qquad x_2^*(P_2, R) = \\frac{\\beta}{\\alpha + \\beta} \\cdot \\frac{R}{P_2}',
            note: 'Les parts budgétaires α/(α+β) et β/(α+β) sont constantes et indépendantes des prix.',
          },
        ],
        workedExample: {
          title: 'Optimiser le budget d’un étudiant via le Lagrangien',
          statement:
            'Un étudiant dispose de $R = 12\\,000$ FCFA pour acheter des repas ($x_1$ à $P_1 = 1\\,500$ FCFA) et des forfaits data ($x_2$ à $P_2 = 1\\,000$ FCFA). Son utilité est $U(x_1, x_2) = x_1^{0,5} x_2^{0,5}$. Déterminez $(x_1^*, x_2^*)$ et le niveau maximal d’utilité.',
          methodSteps: [
            'Écrire la droite de budget : $1\\,500 x_1 + 1\\,000 x_2 = 12\\,000 \\iff x_2 = 12 - 1,5 x_1$.',
            'Poser le Lagrangien : $\\mathcal{L} = x_1^{0,5} x_2^{0,5} + \\lambda(12\\,000 - 1\\,500 x_1 - 1\\,000 x_2)$.',
            'Conditions du premier ordre : $TMS_{1/2} = \\frac{0,5}{0,5} \\frac{x_2}{x_1} = \\frac{x_2}{x_1} = \\frac{P_1}{P_2} = \\frac{1\\,500}{1\\,000} = 1,5 \\implies x_2 = 1,5 x_1$.',
            'Injecter dans la contrainte : $1\\,500 x_1 + 1\\,000(1,5 x_1) = 12\\,000 \\implies 3\\,000 x_1 = 12\\,000 \\implies x_1^* = 4$ et $x_2^* = 6$.',
            'Utilité maximale : $U^* = \\sqrt{4 \\times 6} = \\sqrt{24} \\approx 4,90$. Vérification budgétaire : $4(1\\,500) + 6(1\\,000) = 12\\,000$ FCFA.',
          ],
          conclusion:
            'Au point optimal $E^*(4 ; 6)$, la droite de budget est exactement tangente à la courbe d’indifférence $x_1 x_2 = 24$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Budget',
            stepTheme: 'Droite de budget & Tangence',
            stepTitle: 'Équation, pente et tangence de la contrainte budgétaire',
            paragraphText:
              'La **droite de budget** $P_1 x_1 + P_2 x_2 = R$ délimite exactement ce que le consommateur peut acheter en dépensant tout son revenu.\n' +
              '• **Intersections avec les axes** : pouvoir d’achat maximal en bien 1 ($R/P_1$ en abscisse) et en bien 2 ($R/P_2$ en ordonnée).\n' +
              '• **Pente** : $-P_1 / P_2$, c’est-à-dire l’opposé du prix relatif du bien 1 en unités de bien 2.\n' +
              '• **Optimum graphique** : sur le graphique ci-dessous ($R = 12\\,000$, $P_1 = 1\\,500$, $P_2 = 1\\,000$), la droite $x_2 = 12 - 1,5 x_1$ coupe les axes en $8$ et $12$ et touche de manière tangente la courbe d’indifférence $x_2 = 24 / x_1$ en $E^*(4 ; 6)$.',
            formula: {
              name: 'Équation de la droite de contrainte budgétaire',
              formula: 'P_1 x_1 + P_2 x_2 = R \\iff x_2 = \\frac{R}{P_2} - \\frac{P_1}{P_2}\\,x_1',
              note: 'Tous les points sous ou sur cette droite forment l’ensemble budgétaire accessible.',
            },
            keyRule:
              'La pente de la droite de budget est $-P_1/P_2$ : elle représente le coût d’opportunité marchand d’une unité de bien 1 en termes de bien 2.',
            visualSchema: {
              type: 'function_plot',
              title: 'Équilibre optimal du consommateur (Contrainte budgétaire & Indifférence)',
              caption: 'Droite de budget x₂ = 12 − 1,5x₁ tangente en E*(4 ; 6) à la courbe d’indifférence U* : x₂ = 24/x₁ (pente commune = −1,5).',
              plot: {
                xMin: 0,
                xMax: 10,
                yMin: 0,
                yMax: 14,
                xStep: 2,
                yStep: 2,
                curves: [
                  {
                    label: 'Droite de budget : x₂ = 12 − 1,5x₁',
                    color: 'blue',
                    pieces: [{ expr: '12 - 1.5*x', from: 0, to: 8 }],
                  },
                  {
                    label: 'Indifférence U* (x₁x₂ = 24)',
                    color: 'green',
                    pieces: [{ expr: '24/x', from: 1.8, to: 9.5 }],
                  },
                  {
                    label: 'Indifférence U₁ < U* (x₁x₂ = 12)',
                    color: 'slate',
                    pieces: [{ expr: '12/x', from: 1, to: 9.5 }],
                  },
                ],
                points: [
                  { x: 4, y: 6, label: 'E*(4 ; 6)', filled: true, color: 'orange' },
                  { x: 8, y: 0, label: 'R/P₁ = 8', filled: true, color: 'blue' },
                  { x: 0, y: 12, label: 'R/P₂ = 12', filled: true, color: 'blue' },
                ],
              },
            },
            konanTip:
              'Vérification express : le point (R/P₁ ; 0) est sur l’axe horizontal et (0 ; R/P₂) sur l’axe vertical ; relie les deux par un segment droit !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Un consommateur dispose d’un revenu $R = 30\\,000$ FCFA avec $P_1 = 3\\,000$ FCFA et $P_2 = 1\\,500$ FCFA. Quelles sont l’ordonnée à l’origine ($R/P_2$), l’abscisse à l’origine ($R/P_1$) et la pente de sa droite de budget ?',
              options: [
                'Ordonnée = 10, abscisse = 20, pente = −0,5',
                'Ordonnée = 20, abscisse = 10, pente = −2',
                'Ordonnée = 20, abscisse = 10, pente = +2',
                'Ordonnée = 30, abscisse = 15, pente = −3',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$R/P_2 = 30\\,000/1\\,500 = 20$ ; $R/P_1 = 30\\,000/3\\,000 = 10$ ; pente $= -P_1/P_2 = -3\\,000/1\\,500 = -2$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Déplacements',
            stepTheme: 'Revenu vs Prix',
            stepTitle: 'Translation parallèle et pivotement de la droite de budget',
            paragraphText:
              'Comment réagit l’ensemble des paniers accessibles lorsque le revenu ou un prix évolue ? Distingue bien translation et rotation.\n' +
              '• **Hausse du revenu $R$** (à prix constants) : la pente $-P_1/P_2$ ne change pas, mais $R/P_1$ et $R/P_2$ augmentent dans la même proportion ⇒ **translation parallèle vers l’extérieur**.\n' +
              '• **Baisse du prix $P_1$** (à $R$ et $P_2$ constants) : l’ordonnée $R/P_2$ reste fixe, tandis que l’abscisse $R/P_1$ augmente ⇒ la droite **pivote vers l’extérieur autour de l’axe vertical** (elle s’aplatit).\n' +
              '• **Taxe ad valorem** de taux $t$ sur le bien 1 : le prix effectif devient $P_1(1 + t)$, faisant pivoter la droite **vers l’intérieur** autour de $R/P_2$.',
            konanTip:
              'Vérifie toujours quel axe reste FIXE ! Si seul $P_1$ change, $R/P_2$ ne bouge pas : la droite pivote donc autour de son point d’ancrage vertical.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Que se passe-t-il pour la droite de budget $P_1 x_1 + P_2 x_2 = R$ lorsque le prix $P_1$ baisse de 50 % tandis que $R$ et $P_2$ restent inchangés ?',
              options: [
                'Elle se déplace parallèlement vers l’extérieur',
                'Elle pivote vers l’intérieur autour de l’abscisse $R/P_1$',
                'Elle pivote vers l’extérieur autour de l’ordonnée $R/P_2$, doublant l’abscisse maximale $R/P_1$',
                'Elle ne bouge pas',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$R/P_2$ reste inchangé tandis que $R/(0,5 P_1) = 2(R/P_1)$ double : la droite pivote vers la droite autour de l’axe vertical.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Lagrangien',
            stepTheme: 'Conditions 1er ordre',
            stepTitle: 'Poser et résoudre le Lagrangien du consommateur',
            paragraphText:
              'La méthode de **Lagrange** transforme un problème d’optimisation sous contrainte en un système d’équations classiques sans contrainte.\n' +
              '• **Fonction de Lagrange** : $\\mathcal{L}(x_1, x_2, \\lambda) = U(x_1, x_2) + \\lambda(R - P_1 x_1 - P_2 x_2)$.\n' +
              '• **Les 3 conditions du premier ordre (CPO)** : annuler les dérivées partielles $\\partial \\mathcal{L}/\\partial x_1 = 0 \\implies Um_1 = \\lambda P_1$, $\\partial \\mathcal{L}/\\partial x_2 = 0 \\implies Um_2 = \\lambda P_2$, et $\\partial \\mathcal{L}/\\partial \\lambda = 0 \\implies P_1 x_1 + P_2 x_2 = R$.\n' +
              '• **Signification de $\\lambda$** : en divisant les deux premières équations par les prix, $\\lambda = \\frac{Um_1}{P_1} = \\frac{Um_2}{P_2} = \\frac{dU^*}{dR}$ représente l’**utilité marginale du revenu**.',
            formula: {
              name: 'Système des CPO du Lagrangien',
              formula: '\\begin{cases} Um_1 = \\lambda P_1 \\\\ Um_2 = \\lambda P_2 \\\\ P_1 x_1 + P_2 x_2 = R \\end{cases} \\implies \\frac{Um_1}{Um_2} = \\frac{P_1}{P_2}',
              note: 'Diviser l’équation (1) par l’équation (2) élimine immédiatement λ et donne TMS = P₁/P₂.',
            },
            keyRule:
              'Le multiplicateur de Lagrange $\\lambda$ mesure le gain d’utilité maximale procuré par 1 FCFA de revenu supplémentaire.',
            konanTip:
              'Pour ne pas faire d’erreur de signe dans le Lagrangien, écris toujours la contrainte sous la forme + λ(R − P₁x₁ − P₂x₂) : ainsi λ > 0 automatiquement.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Dans le programme du consommateur résolu par le Lagrangien $\\mathcal{L}(x_1, x_2, \\lambda) = U(x_1, x_2) + \\lambda(R - P_1 x_1 - P_2 x_2)$, que représente économiquement la valeur optimale de $\\lambda$ ?',
              options: [
                'L’utilité marginale du revenu (supplément d’utilité apporté par une unité monétaire additionnelle)',
                'Le rapport des prix $P_1 / P_2$',
                'La dépense totale en bien 1',
                'Le taux d’imposition sur la consommation',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À l’optimum, $\\lambda = Um_1/P_1 = Um_2/P_2 = dU^*/dR$ mesure exactement la valeur marginale d’un franc supplémentaire de revenu.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: '2e loi de Gossen',
            stepTheme: 'Tangence & Égalisation',
            stepTitle: 'Interpréter la condition TMS = P₁/P₂ et la 2e loi de Gossen',
            paragraphText:
              'Pourquoi le panier optimal vérifie-t-il obligatoirement $TMS_{1/2} = P_1 / P_2$ ? Cette égalité confronte deux taux d’échange : celui du consommateur et celui du marché.\n' +
              '• **Égalité des taux d’échange** : $TMS_{1/2}$ est ce que le consommateur *accepte* de céder de $x_2$ pour $+1$ unité de $x_1$ ; $P_1/P_2$ est ce que le marché *exige* de céder de $x_2$ pour acheter $+1$ unité de $x_1$.\n' +
              '• **Deuxième loi de Gossen** (égalisation des utilités marginales pondérées) : $\\frac{Um_1}{P_1} = \\frac{Um_2}{P_2}$. Chaque dernier franc dépensé doit produire la même satisfaction quel que soit le bien acheté.\n' +
              '• **Déséquilibre individuel** : si $\\frac{Um_1}{P_1} > \\frac{Um_2}{P_2}$ (soit $TMS > P_1/P_2$), le bien 1 offre un meilleur « rendement en utilité par franc » : le consommateur doit acheter **plus de $x_1$ et moins de $x_2$**.',
            konanTip:
              'Si $TMS_{1/2} = 4$ mais $P_1/P_2 = 2$, le consommateur valorise le bien 1 deux fois plus cher que le marché : il fait une « bonne affaire » en achetant davantage de bien 1 !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Un consommateur épuise son budget en un panier où $Um_1 = 30$, $P_1 = 5$, $Um_2 = 20$ et $P_2 = 10$. Que doit-il faire pour augmenter son utilité ?',
              options: [
                'Ne rien modifier car il est déjà à l’optimum',
                'Acheter moins de bien 1 et plus de bien 2',
                'Réduire sa consommation des deux biens',
                'Acheter plus de bien 1 et moins de bien 2 car $Um_1/P_1 = 6 > Um_2/P_2 = 2$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Chaque unité monétaire consacrée au bien 1 rapporte $30/5 = 6$ unités d’utilité, contre seulement $20/10 = 2$ pour le bien 2 : réallouer du budget du bien 2 vers le bien 1 accroît strictement l’utilité totale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Demandes',
            stepTheme: 'Cobb-Douglas & Coin',
            stepTitle: 'Calculer les demandes marshalliennes et gérer les solutions en coin',
            paragraphText:
              'La résolution du programme donne les **fonctions de demande marshalliennes** $x_1^*(P_1, P_2, R)$ et $x_2^*(P_1, P_2, R)$, qu’il faut savoir dériver dans les trois cas majeurs.\n' +
              '• **Cobb-Douglas** $U = A x_1^\\alpha x_2^\\beta$ : le consommateur affecte toujours la fraction $\\frac{\\alpha}{\\alpha+\\beta}$ de son revenu au bien 1 et $\\frac{\\beta}{\\alpha+\\beta}$ au bien 2.\n' +
              '• **Substituts parfaits** $U = a x_1 + b x_2$ : on compare $a/P_1$ et $b/P_2$. Si $a/P_1 > b/P_2$, solution **en coin** : $x_1^* = R/P_1$ et $x_2^* = 0$ (il achète uniquement le bien offrant le plus d’utilité par franc).\n' +
              '• **Compléments parfaits** $U = \\min(a x_1, b x_2)$ : on résout le système $a x_1 = b x_2$ et $P_1 x_1 + P_2 x_2 = R$.',
            formula: {
              name: 'Solutions des trois grandes familles d’utilité',
              formula: '\\text{Cobb-Douglas} : x_1^* = \\frac{\\alpha R}{(\\alpha+\\beta)P_1} \\quad | \\quad \\text{Leontief } \\min(ax_1, bx_2) : x_1^* = \\frac{bR}{bP_1 + aP_2}',
              note: 'Pour les substituts parfaits, vérifier toujours lequel de a/P₁ ou b/P₂ est le plus grand !',
            },
            keyRule:
              'En Cobb-Douglas, la dépense consacrée au bien 1 représente toujours exactement la part α/(α+β) du revenu total R.',
            konanTip:
              'Même si tu utilises le raccourci Cobb-Douglas pour vérifier ton résultat en 5 secondes, rédige toujours les 2 lignes du Lagrangien en examen pour avoir tous les points !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Un étudiant a pour utilité $U(x_1, x_2) = x_1^{1/4} x_2^{3/4}$, un revenu $R = 40\\,000$ FCFA, $P_1 = 2\\,000$ FCFA et $P_2 = 3\\,000$ FCFA. Quel est son panier optimal $(x_1^*, x_2^*)$ ?',
              options: [
                '$x_1^* = 10$ et $x_2^* = 10$',
                '$x_1^* = 5$ et $x_2^* = 10$',
                '$x_1^* = 15$ et $x_2^* = 5$',
                '$x_1^* = 5$ et $x_2^* = 15$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ici $\\alpha = 1/4$ et $\\beta = 3/4$ ($\\alpha + \\beta = 1$). Donc $x_1^* = \\frac{1}{4} \\times \\frac{40\\,000}{2\\,000} = 5$ et $x_2^* = \\frac{3}{4} \\times \\frac{40\\,000}{3\\,000} = 10$. Vérification : $5(2\\,000) + 10(3\\,000) = 40\\,000$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Illusion monétaire',
            stepTheme: 'Homogénéité degré 0',
            stepTitle: 'Absence d’illusion monétaire et homogénéité de degré 0',
            paragraphText:
              'Supposons que, du jour au lendemain, tous les salaires et tous les prix de l’économie soient multipliés par 2 (inflation uniforme de +100 %). Le comportement d’un consommateur rationnel change-t-il ?\n' +
              '• **Invariance de la contrainte** : $(t P_1) x_1 + (t P_2) x_2 = t R$ se simplifie par $t > 0$ pour redonner exactement $P_1 x_1 + P_2 x_2 = R$.\n' +
              '• **Homogénéité de degré 0** : les fonctions de demande marshalliennes vérifient $x_i^*(t P_1, t P_2, t R) = x_i^*(P_1, P_2, R)$ pour tout $t > 0$.\n' +
              '• **Signification économique** : le consommateur rationnel est exempt d’**illusion monétaire** ; seuls comptent son pouvoir d’achat réel ($R/P_i$) et les prix relatifs ($P_1/P_2$).',
            formula: {
              name: 'Propriété d’homogénéité de degré 0',
              formula: '\\forall t > 0, \\quad x_i^*(t P_1,\\, t P_2,\\, t R) = t^0 \\, x_i^*(P_1, P_2, R) = x_i^*(P_1, P_2, R)',
              note: 'Double vérification rapide en examen : remplacer P₁, P₂, R par 2P₁, 2P₂, 2R dans ta formule de demande ; les 2 doivent se simplifier !',
            },
            keyRule:
              'Toute demande marshallienne issue d’une maximisation rationnelle est homogène de degré 0 par rapport aux prix et au revenu.',
            konanTip:
              'Astuce anti-erreur : toute fonction de demande où le numérateur et le dénominateur n’ont pas le même degré en (P₁, P₂, R) contient forcément une erreur de calcul.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Si le revenu $R$ et les prix $P_1$ et $P_2$ augmentent tous simultanément de 25 %, que devient la demande optimale $(x_1^*, x_2^*)$ d’un consommateur rationnel ?',
              options: [
                'Elle augmente de 25 % pour chaque bien',
                'Elle diminue de 25 % pour chaque bien',
                'Elle reste strictement inchangée (absence d’illusion monétaire)',
                'Elle bascule entièrement vers le bien le moins cher',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Multiplier $(P_1, P_2, R)$ par $1,25$ ne modifie ni la pente $-P_1/P_2$ ni les intersections $R/P_1$ et $R/P_2$ de la droite de budget : l’optimum reste identique.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.4
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p4',
        order: 4,
        title: 'Courbes d’Engel, effets revenu et substitution (Slutsky/Hicks) et biens Giffen',
        summary:
          'Construire le chemin d’expansion du revenu et la courbe d’Engel, décomposer une variation de prix en effet de substitution et effet de revenu, et distinguer biens normaux, inférieurs et Giffen.',
        conceptExplanation:
          'Une fois l’équilibre du consommateur déterminé, la statique comparative analyse comment le panier optimal $(x_1^*, x_2^*)$ réagit aux variations du revenu $R$ puis aux variations des prix $P_1$.\n\n' +
          '• **Courbe revenu-consommation et courbe d’Engel** : en faisant varier $R$ à prix fixes, le lieu des équilibres successifs forme le chemin d’expansion du revenu. En reportant $x_1^*(R)$ en fonction de $R$, on obtient la **courbe d’Engel** : croissante pour un **bien normal** ($\\partial x_1 / \\partial R > 0$), décroissante pour un **bien inférieur** ($\\partial x_1 / \\partial R < 0$).\n\n' +
          '• **Décomposition d’une variation de prix (Slutsky et Hicks)** : lorsque le prix $P_1$ baisse, l’effet total sur $x_1$ se décompose en deux effets :\n' +
          '1. **Effet de substitution ($ES$)** : à pouvoir d’achat réel (Slutsky) ou utilité (Hicks) constants, le bien 1 est devenu relativement moins cher ⇒ $ES$ est **toujours négatif** (de sens opposé à $\\Delta P_1$).\n' +
          '2. **Effet de revenu ($ER$)** : la baisse de $P_1$ libère du pouvoir d’achat réel. Pour un bien normal, $ER$ renforce $ES$ ; pour un bien inférieur, $ER$ s’oppose à $ES$. Dans le cas rarissime d’un **bien de Giffen**, un bien fortement inférieur voit son $ER$ négatif l’emporter sur $ES$, rendant la demande croissante avec le prix.',
        keyRule:
          'Effet total = Effet de substitution (toujours de sens opposé au prix) + Effet de revenu (même sens que ES pour un bien normal, sens opposé pour un bien inférieur).',
        formulas: [
          {
            name: 'Équation de Slutsky (décomposition de l’effet prix)',
            formula: '\\underbrace{\\frac{\\partial x_1}{\\partial P_1}}_{\\text{Effet total}} = \\underbrace{\\left.\\frac{\\partial x_1^c}{\\partial P_1}\\right|_{U=\\bar{U}}}_{\\text{Effet substitution } (< 0)} \\; - \\; \\underbrace{x_1 \\frac{\\partial x_1}{\\partial R}}_{\\text{Effet revenu}}',
            note: 'Bien normal (∂x₁/∂R > 0) ⇒ ET < 0 ; Bien Giffen (∂x₁/∂R ≪ 0) ⇒ |ER| > |ES| ⇒ ET > 0 !',
          },
          {
            name: 'Typologie des biens selon la courbe d’Engel',
            formula: '\\text{Bien normal} : \\frac{dx_1^*}{dR} > 0 \\quad | \\quad \\text{Bien inférieur} : \\frac{dx_1^*}{dR} < 0',
            note: 'Pour une utilité Cobb-Douglas, la courbe d’Engel est une droite croissante passant par l’origine (biens toujours normaux).',
          },
        ],
        workedExample: {
          title: 'Décomposer un choc de prix selon Slutsky',
          statement:
            'Un consommateur a pour demande $x_1^* = \\frac{R}{2P_1}$. Initialement $R = 200$, $P_1 = 10$ (donc $x_1^A = 10$). Le prix chute à $P_1’ = 5$ (donc $x_1^C = 20$). Calculez le revenu compensé de Slutsky $R’$, l’effet de substitution et l’effet de revenu.',
          methodSteps: [
            'Effet total : $ET = x_1^C - x_1^A = 20 - 10 = +10$ unités.',
            'Variation de revenu de Slutsky pour conserver le panier initial $A$ accessible au nouveau prix : $\\Delta R = x_1^A (P_1’ - P_1) = 10(5 - 10) = -50$, d’où le revenu compensé $R’ = 200 - 50 = 150$.',
            'Quantité intermédiaire au nouveau prix $P_1’ = 5$ et revenu compensé $R’ = 150$ : $x_1^B = \\frac{150}{2 \\times 5} = 15$.',
            'Effet de substitution : $ES = x_1^B - x_1^A = 15 - 10 = +5$ (positif car $P_1$ a baissé).',
            'Effet de revenu : $ER = x_1^C - x_1^B = 20 - 15 = +5$ (positif car le bien est normal). Vérification : $ES + ER = 5 + 5 = +10 = ET$.',
          ],
          conclusion:
            'La hausse de 10 unités se partage à parts égales entre l’attrait du prix relatif réduit (+5) et le gain de pouvoir d’achat réel (+5).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Engel',
            stepTheme: 'Revenu-consommation',
            stepTitle: 'Chemin d’expansion du revenu et courbe d’Engel',
            paragraphText:
              'Comment évolue votre panier de courses quand votre premier salaire d’ingénieur passe de 250 000 à 700 000 FCFA à prix constants ?\n' +
              '• **Courbe revenu-consommation** (chemin d’expansion du revenu) : relie dans le plan $(x_1, x_2)$ tous les points de tangence optimaux obtenus en déplaçant parallèlement la droite de budget pour différents revenus $R$.\n' +
              '• **Courbe d’Engel** : représente dans le plan $(R, x_1)$ la quantité optimale $x_1^*(R)$ en fonction du revenu.\n' +
              '• **Diagnostic** : pente positive ($dx_1/dR > 0$) ⇒ **bien normal** ; pente négative ($dx_1/dR < 0$) ⇒ **bien inférieur** (ex. transports collectifs surchargés remplacés par un véhicule personnel ou VTC quand le revenu augmente).',
            keyRule:
              'Une courbe d’Engel croissante caractérise un bien normal ; une courbe d’Engel décroissante caractérise un bien inférieur.',
            konanTip:
              'Sur un graphique de courbe d’Engel, vérifie toujours quel axe porte le revenu R et quel axe porte la quantité x₁ : le signe de la pente reste identique.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p4_q1',
              type: 'mcq',
              prompt:
                'Que traduit une courbe d’Engel à pente NÉGATIVE ($dx_1^*/dR < 0$) pour un bien 1 ?',
              options: [
                'Le bien 1 est un bien de luxe',
                'Le bien 1 est un bien inférieur dont la consommation diminue quand le revenu augmente',
                'Le prix du bien 1 est nul',
                'Le bien 1 est un substitut parfait du bien 2',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une pente négative de la courbe d’Engel signifie que la hausse du revenu conduit le consommateur à réduire ses achats de ce bien au profit d’alternatives de meilleure qualité : c’est la définition d’un bien inférieur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Demande',
            stepTheme: 'Prix-consommation',
            stepTitle: 'De la courbe prix-consommation à la courbe de demande individuelle',
            paragraphText:
              'La théorie du consommateur ne tombe pas du ciel la courbe de demande du chapitre 1 : elle la **construit rigoureusement** à partir des choix optimaux.\n' +
              '• **Courbe prix-consommation** : en faisant varier $P_1$ (pivotements successifs de la droite de budget à $R$ et $P_2$ fixes), on relie dans le plan $(x_1, x_2)$ tous les équilibres optimaux successifs.\n' +
              '• **Passage à la demande individuelle** : en reportant pour chaque prix $P_1$ la quantité optimale $x_1^*$ correspondante dans le plan $(x_1, P_1)$, on obtient la **courbe de demande marshallienne**.\n' +
              '• **Exemple** : pour $U = x_1 x_2$ et $R = 100$, on a $x_1^* = 50 / P_1$ : à $P_1 = 10$, $x_1^* = 5$ ; à $P_1 = 5$, $x_1^* = 10$ ; à $P_1 = 2$, $x_1^* = 25$ (hyperbole décroissante).',
            konanTip:
              'Ne confonds pas les axes ! La courbe prix-consommation se trace dans le plan $(x_1, x_2)$ ; la courbe de demande se trace dans le plan $(x_1, P_1)$.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p4_q2',
              type: 'mcq',
              prompt:
                'Comment obtient-on la courbe de demande individuelle d’un consommateur à partir de la théorie de l’utilité ?',
              options: [
                'En faisant varier le revenu $R$ à prix constants',
                'En égalisant les coûts fixes et les coûts variables',
                'En faisant varier le prix $P_1$ (pivotement de la droite de budget) à $R$ et $P_2$ constants et en relevant chaque quantité optimale $x_1^*$',
                'En additionnant les utilités marginales des deux biens',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Chaque pivotement dû à une variation de $P_1$ génère un nouveau panier optimal sur la courbe prix-consommation, dont l’abscisse $x_1^*$ donne un point $(x_1^*, P_1)$ de la courbe de demande.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Slutsky / Hicks',
            stepTheme: 'Double mécanisme',
            stepTitle: 'Décomposer un choc de prix en effet de substitution et effet de revenu',
            paragraphText:
              'Quand le prix du gigaoctet de data baisse, vous achetez plus de data pour **deux raisons bien distinctes** que les économistes isolent grâce à Slutsky et Hicks.\n' +
              '• **Effet de substitution ($ES$)** : changement de consommation dû uniquement à la modification du **prix relatif** $P_1/P_2$, en neutralisant le gain de pouvoir d’achat. Il joue **toujours en sens inverse du prix** ($P_1 \\downarrow \\implies ES > 0$).\n' +
              '• **Effet de revenu ($ER$)** : changement de consommation dû à la hausse du **pouvoir d’achat réel** que procure la baisse de $P_1$ (comme si votre revenu avait augmenté).\n' +
              '• **Différence Slutsky vs Hicks** : Hicks maintient constante l’**utilité initiale $U_0$** (compensation sur la même courbe d’indifférence) ; Slutsky maintient constant le **pouvoir d’achat du panier initial $A$** ($R’ = P_1’ x_1^A + P_2 x_2^A$).',
            formula: {
              name: 'Décomposition de Slutsky',
              formula: 'ET = ES + ER, \\qquad R’_{\\text{Slutsky}} = R + x_1^A (P_1’ - P_1)',
              note: 'Chez Slutsky, le calcul est purement algébrique et ne nécessite pas d’inverser la fonction d’utilité !',
            },
            keyRule:
              'L’effet de substitution est TOUJOURS négatif par rapport à la variation du prix ($\\Delta P_1 \\cdot ES \\le 0$), quelle que soit la nature du bien (normal, inférieur ou Giffen).',
            konanTip:
              'Pour calculer rapidement le revenu compensé de Slutsky, souviens-toi : ΔR = x₁_initial × ΔP₁ (même signe que la variation de prix !).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p4_q3',
              type: 'mcq',
              prompt:
                'Quelle est la différence méthodologique entre la décomposition de Hicks et celle de Slutsky lors d’une baisse du prix $P_1$ ?',
              options: [
                'Hicks maintient l’utilité initiale $U_0$ constante, tandis que Slutsky ajuste le revenu pour que le panier initial $A$ reste tout juste achetable',
                'Hicks s’applique uniquement aux producteurs et Slutsky aux consommateurs',
                'Slutsky donne toujours un effet de substitution positif lorsque le prix augmente',
                'Hicks ignore totalement l’effet de revenu',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Hicks définit la compensation à utilité constante ($U = U_0$, droite tangente à la courbe d’indifférence initiale), alors que Slutsky fait pivoter la droite autour du panier initial $A$ (pouvoir d’achat constant).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bien normal',
            stepTheme: 'Synergie ES + ER',
            stepTitle: 'Bien normal : effets de substitution et de revenu cumulatifs',
            paragraphText:
              'Pour la grande majorité des biens courants (logement, smartphones, vêtements, loisirs), la baisse du prix enclenche deux forces parfaitement convergentes.\n' +
              '• **Si $P_1$ baisse** : (1) le bien 1 devient relativement moins cher que le bien 2 ⇒ $ES > 0$ ; (2) le pouvoir d’achat réel augmente et, comme le bien est normal, le consommateur en achète davantage ⇒ $ER > 0$.\n' +
              '• **Résultat sans ambiguïté** : $ET = ES + ER > 0$ (quantité demandée en forte hausse).\n' +
              '• **Symétriquement, si $P_1$ augmente** : $ES < 0$ et $ER < 0$, donc $ET < 0$. Tout bien normal obéit **nécessairement** à la loi de la demande décroissante.',
            konanTip:
              'Pour une fonction Cobb-Douglas, tous les biens sont toujours normaux ($x_1^* = \\frac{\\alpha R}{(\\alpha+\\beta)P_1}$ croît linéairement avec $R$), donc $ES$ et $ER$ ont toujours le même signe.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p4_q4',
              type: 'mcq',
              prompt:
                'Le prix d’un bien NORMAL augmente. Quels sont les signes respectifs de l’effet de substitution ($ES$), de l’effet de revenu ($ER$) et de l’effet total ($ET$) sur la quantité demandée ?',
              options: [
                '$ES > 0$, $ER > 0$, $ET > 0$',
                '$ES < 0$, $ER > 0$, $ET$ ambigu',
                '$ES < 0$, $ER < 0$, $ET < 0$',
                '$ES = 0$, $ER < 0$, $ET < 0$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La hausse du prix rend le bien relativement plus cher ($ES < 0$) et réduit le pouvoir d’achat réel, ce qui baisse encore la demande d’un bien normal ($ER < 0$) : les deux effets se cumulent ($ET < 0$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Bien inférieur',
            stepTheme: 'Effets opposés',
            stepTitle: 'Bien inférieur ordinaire : quand l’effet de substitution domine',
            paragraphText:
              'Que se passe-t-il pour un bien inférieur (par exemple du riz brisé bas de gamme ou des trajets en minibus) lorsque son prix baisse ? Les deux effets entrent en conflit !\n' +
              '• **Effet de substitution ($ES > 0$)** : le bien étant relativement moins cher, le consommateur tend à le substituer aux autres biens.\n' +
              '• **Effet de revenu ($ER < 0$)** : la baisse de prix augmente le pouvoir d’achat réel, ce qui incite le consommateur à **abandonner** ce bien inférieur pour acheter un bien de meilleure qualité.\n' +
              '• **Bien inférieur ordinaire** : $|ES| > |ER|$, donc l’effet net reste conforme à la loi de la demande ($ET > 0$ quand $P_1$ baisse), mais la demande est moins sensible au prix que pour un bien normal.',
            keyRule:
              'Tout bien de Giffen est nécessairement un bien inférieur, mais la réciproque est fausse : la plupart des biens inférieurs respectent la loi de la demande ($|ES| > |ER|$).',
            konanTip:
              'Retiens la hiérarchie en poupées russes : Biens Giffen ⊂ Biens inférieurs (seule une minuscule fraction des biens inférieurs sont des biens Giffen).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p4_q5',
              type: 'mcq',
              prompt:
                'Lors d’une baisse de prix d’un bien, on mesure un effet de substitution $ES = +8$ unités et un effet de revenu $ER = -3$ unités (soit $ET = +5$). Quelle est la nature exacte de ce bien ?',
              options: [
                'Un bien normal de luxe',
                'Un bien de Giffen',
                'Un bien parfaitement complémentaire',
                'Un bien inférieur ordinaire (non-Giffen)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Puisque la baisse de prix accroît le pouvoir d’achat mais provoque un $ER = -3 < 0$, le bien est inférieur. Comme $|ES| = 8 > |ER| = 3$, l’effet total reste positif (+5) : c’est un bien inférieur ordinaire.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Paradoxe Giffen',
            stepTheme: 'Demande croissante',
            stepTitle: 'Le bien de Giffen (et distinction avec l’effet Veblen)',
            paragraphText:
              'Existe-t-il des exceptions réelles à la loi de la demande décroissante ? La microéconomie en identifie deux célèbres, aux mécanismes totalement différents.\n' +
              '• **Bien de Giffen** : bien **fortement inférieur** représentant une part très importante du budget de ménages modestes (ex. pommes de terre en Irlande au XIXe siècle, ou denrée de base unique). Si son prix monte, l’appauvrissement est si brutal que les ménages doivent renoncer à la viande et acheter **encore plus** de cette denrée de base : $|ER| > |ES| \\implies \\partial Q / \\partial P > 0$.\n' +
              '• **Bien de Veblen (effet de snobisme)** : bien de **luxe** statutaire (montres, haute couture) dont la demande croît avec le prix parce que le prix élevé sert de signal de prestige social.\n' +
              '• **Attention** : Giffen = pauvreté + bien inférieur vital ; Veblen = richesse + bien ostentatoire !',
            keyRule:
              'Condition du bien de Giffen : bien fortement inférieur + part budgétaire massive + $|ER| > |ES|$ ⇒ courbe de demande croissante ($e_p > 0$).',
            konanTip:
              'Piège classique de QCM : ne confonds jamais bien de Giffen (bien inférieur de survie) et bien de Veblen (bien de luxe ostentatoire) même si tous deux ont une demande croissante avec le prix !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p4_q6',
              type: 'mcq',
              prompt:
                'Quelles sont les conditions cumulatives caractérisant un véritable bien de Giffen ?',
              options: [
                'Un bien de luxe prestigieux acheté pour afficher son statut social',
                'Un bien fortement inférieur dont l’effet de revenu négatif l’emporte en valeur absolue sur l’effet de substitution ($|ER| > |ES|$)',
                'Un bien normal dont l’effet de substitution est nul',
                'Un bien gratuit distribué par l’État',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un bien de Giffen est un bien inférieur extrême (occupant une large part du budget) où $|ER| > |ES|$, si bien que sa quantité demandée varie dans le même sens que son propre prix.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : ÉLASTICITÉS, SURPLUS ET INTERVENTIONS SUR LE MARCHÉ
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch3',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Élasticités de la demande, surplus et interventions publiques',
    summary:
      'Calculer et interpréter les élasticités prix, revenu (lois d’Engel), croisée et d’offre, mesurer les surplus économiques et analyser prix plafond, prix plancher, taxes et perte sèche.',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 3.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch3_p1',
        order: 1,
        title: 'Élasticité-prix directe de la demande et stratégie de recette totale',
        summary:
          'Maîtriser les formules ponctuelle et d’arc de l’élasticité-prix, distinguer demande élastique et inélastique, relier élasticité et recette totale et appliquer aux tarifs numériques.',
        conceptExplanation:
          'Une simple pente $\\Delta Q / \\Delta P$ dépend des unités de mesure (FCFA ou euros, kilogrammes ou tonnes). Pour mesurer sans unité la sensibilité de la demande à une variation de 1 % du prix, on utilise l’**élasticité-prix directe** :\n' +
          '$$e_p = \\frac{\\Delta Q / Q}{\\Delta P / P} = \\frac{dQ}{dP} \\cdot \\frac{P}{Q}$$\n' +
          'Généralement négative (loi de la demande), elle détermine l’impact d’un changement tarifaire sur la **recette totale** ($RT = P \\cdot Q$) via la formule de Amoroso-Robinson $Rm = P(1 + 1/e_p)$ :\n' +
          '• **Demande élastique ($|e_p| > 1$)** : la baisse en volume surpasse la hausse du prix ⇒ augmenter le prix **réduit** le chiffre d’affaires.\n' +
          '• **Demande inélastique / rigide ($|e_p| < 1$)** : les quantités résistent à la hausse du prix ⇒ augmenter le prix **accroît** le chiffre d’affaires.\n' +
          '• **Élasticité unitaire ($|e_p| = 1$)** : la recette totale atteint son **maximum** ($Rm = 0$).',
        keyRule:
          'Zone élastique ($|e_p| > 1$) : baisser le prix augmente le chiffre d’affaires. Zone inélastique ($|e_p| < 1$) : augmenter le prix augmente le chiffre d’affaires.',
        formulas: [
          {
            name: 'Élasticité-prix directe (ponctuelle et discrète)',
            formula: 'e_p = \\frac{\\Delta Q / Q}{\\Delta P / P} = \\frac{dQ}{dP} \\cdot \\frac{P}{Q}',
            note: 'Sans dimension (nombre pur) : indique le % de variation de Q pour +1 % de prix.',
          },
          {
            name: 'Relation de Amoroso-Robinson (Recette marginale et élasticité)',
            formula: 'Rm = \\frac{d(P \\cdot Q)}{dQ} = P\\left(1 + \\frac{1}{e_p}\\right) = P\\left(1 - \\frac{1}{|e_p|}\\right)',
            note: 'Si |e_p| = 1, alors Rm = 0 : la recette totale RT = P·Q est maximale !',
          },
        ],
        workedExample: {
          title: 'Calculer l’élasticité-prix et l’impact sur le chiffre d’affaires',
          statement:
            'Sur un marché de jeux de société, lorsque le prix passe de $15\\,000$ FCFA à $16\\,000$ FCFA, les ventes passent de $10\\,000$ à $9\\,600$ unités. Calculez $e_p$, qualifiez la demande et vérifiez l’évolution du chiffre d’affaires.',
          methodSteps: [
            'Variation relative des quantités : $\\frac{\\Delta Q}{Q} = \\frac{9\\,600 - 10\\,000}{10\\,000} = -0,04 = -4\\,\\%$.',
            'Variation relative du prix : $\\frac{\\Delta P}{P} = \\frac{16\\,000 - 15\\,000}{15\\,000} = \\frac{1}{15} \\approx +6,67\\,\\%$.',
            'Élasticité-prix directe : $e_p = \\frac{-0,04}{1/15} = -0,04 \\times 15 = -0,60$.',
            'Diagnostic : $|e_p| = 0,60 < 1$ ⇒ demande **inélastique (rigide)** : une hausse de 1 % du prix ne fait baisser la demande que de 0,60 %.',
            'Vérification du chiffre d’affaires : $RT_1 = 15\\,000 \\times 10\\,000 = 150\\text{ M FCFA}$ ; $RT_2 = 16\\,000 \\times 9\\,600 = 153,6\\text{ M FCFA}$ (+3,6 M FCFA).',
          ],
          conclusion:
            'Sur une zone inélastique, la hausse du prix accroît bien la recette totale car la perte en volume reste proportionnellement faible.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Calcul e_p',
            stepTheme: 'Ponctuelle & Arc',
            stepTitle: 'Calculer une élasticité-prix directe (discrète, d’arc et ponctuelle)',
            paragraphText:
              'L’élasticité-prix répond à une question directe de directeur commercial : « Si j’augmente mon tarif de 1 %, de quel pourcentage mes ventes vont-elles varier ? »\n' +
              '• **Formule discrète** : $e_p = \\frac{(Q_2 - Q_1)/Q_1}{(P_2 - P_1)/P_1}$, simple mais dépendante du point de départ.\n' +
              '• **Élasticité d’arc (point milieu)** : on rapporte $\\Delta Q$ et $\\Delta P$ aux moyennes $(Q_1+Q_2)/2$ et $(P_1+P_2)/2$, garantissant la même valeur à la hausse comme à la baisse.\n' +
              '• **Formule ponctuelle (continue)** : $e_p = Q’(P) \\cdot \\frac{P}{Q}$ lorsque l’on connaît l’équation exacte de la demande.\n' +
              '• **Exemple** : si $Q = 100 - 2P$, alors $Q’(P) = -2$. Au prix $P = 20$ ($Q = 60$), $e_p = -2 \\times (20/60) = -2/3 \\approx -0,67$.',
            formula: {
              name: 'Élasticité ponctuelle et élasticité d’arc',
              formula: 'e_p = \\frac{dQ}{dP}\\cdot\\frac{P}{Q} \\quad | \\quad e_{p,\\text{arc}} = \\frac{\\Delta Q}{\\Delta P}\\cdot\\frac{P_1 + P_2}{Q_1 + Q_2}',
              note: 'L’élasticité d’arc est symétrique entre les points 1 et 2.',
            },
            keyRule:
              'L’élasticité-prix directe e_p est un nombre pur sans unité, indépendant du choix de la devise (FCFA, euro) ou de l’unité de volume.',
            konanTip:
              'N’oublie jamais le signe « − » dans e_p lorsque Q baisse suite à une hausse de P : c’est la valeur absolue |e_p| qu’on compare à 1.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Pour la fonction de demande $Q(P) = 200 - 4P$, quelle est l’élasticité-prix ponctuelle au prix $P = 30$ ?',
              options: ['$-0,5$', '$-1,5$', '$-4$', '$-0,75$'],
              correctAnswerIndex: 1,
              explanation:
                'À $P = 30$, $Q = 200 - 4(30) = 80$, et $dQ/dP = -4$. Donc $e_p = -4 \\times (30 / 80) = -120/80 = -1,5$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Régimes',
            stepTheme: 'Élastique vs Rigide',
            stepTitle: 'Classifier les cinq régimes d’élasticité-prix',
            paragraphText:
              'La valeur absolue $|e_p|$ permet de classer immédiatement la réactivité des acheteurs en cinq régimes précis.\n' +
              '• **Parfaitement inélastique ($e_p = 0$)** : demande verticale, la quantité ne bouge pas quel que soit le prix (ex. insuline vitale à très court terme).\n' +
              '• **Inélastique / rigide ($0 < |e_p| < 1$)** : variation de $Q$ moins que proportionnelle à $P$ (carburant, sel, électricité de base).\n' +
              '• **Élasticité unitaire ($|e_p| = 1$)** : une hausse de 1 % du prix réduit $Q$ exactement de 1 % (dépense $P\\cdot Q$ constante, ex. demande Cobb-Douglas $Q = k/P$).\n' +
              '• **Élastique ($|e_p| > 1$)** : variation de $Q$ plus que proportionnelle (voyages aériens loisirs, abonnements streaming concurrents).\n' +
              '• **Parfaitement élastique ($|e_p| = \\infty$)** : demande horizontale (firme en concurrence pure et parfaite : $+1\\text{ FCFA}$ fait tomber les ventes à zéro).',
            keyRule:
              'Droite verticale $\\iff e_p = 0$ (rigidité parfaite) ; droite horizontale $\\iff |e_p| = \\infty$ (élasticité infinie).',
            konanTip:
              'Pour reconnaître un bien à demande rigide en QCM, demande-toi : « Si son prix double demain, puis-je m’en passer facilement ? » Non ⇒ |e_p| < 1 !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle est l’élasticité-prix constante en tout point d’une courbe de demande hyperbolique d’équation $Q(P) = \\frac{500}{P}$ (issue d’une utilité Cobb-Douglas) ?',
              options: [
                '$e_p = 0$',
                '$e_p = -500$',
                '$e_p = -1$ (élasticité unitaire constante)',
                '$e_p = -\\infty$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$dQ/dP = -500/P^2$, donc $e_p = (-500/P^2) \\times (P / (500/P)) = -1$ partout. La dépense $P\\cdot Q = 500$ est rigoureusement constante.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Pente ≠ Élasticité',
            stepTitle: 'Pourquoi l’élasticité varie le long d’une demande linéaire !',
            paragraphText:
              'L’erreur la plus fréquente en microéconomie consiste à confondre la **pente** d’une droite (constante) avec son **élasticité** (qui varie de $0$ à $-\\infty$ !).\n' +
              '• **Pour $Q = a - bP$** : $dQ/dP = -b$ est constant, mais $e_p = -b\\,(P/Q)$ dépend du rapport $P/Q$ qui change à chaque point.\n' +
              '• **Haut de la droite** (prix élevés, petites quantités) : $|e_p| > 1$ (zone **élastique**), tendant vers $-\\infty$ sur l’axe vertical.\n' +
              '• **Milieu exact du segment** ($P = a/(2b)$, $Q = a/2$) : $|e_p| = 1$ (recette totale maximale !).\n' +
              '• **Bas de la droite** (prix bas, grandes quantités) : $|e_p| < 1$ (zone **inélastique**), atteignant $0$ sur l’axe horizontal.',
            keyRule:
              'Sur une droite de demande décroissante, la pente est constante mais $|e_p|$ décroît continûment de $+\\infty$ (en haut) à $1$ (au milieu exact) puis à $0$ (en bas).',
            konanTip:
              'Astuce éclair sur une demande linéaire $P = a - bQ$ : le point d’élasticité unitaire ($e_p = -1$) se trouve TOUJOURS exactement à mi-hauteur $P = a/2$ et mi-largeur $Q = a/(2b)$ !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Pour la demande linéaire $P = 100 - 2Q$, à quel couple $(P, Q)$ l’élasticité-prix vaut-elle exactement $-1$ (recette totale maximale) ?',
              options: [
                '$P = 50$ et $Q = 25$',
                '$P = 100$ et $Q = 0$',
                '$P = 25$ et $Q = 50$',
                '$P = 20$ et $Q = 40$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les intersections sont $P_{\\max} = 100$ et $Q_{\\max} = 50$. Le milieu exact est $P = 50$, $Q = 25$ : vérifions $Q = 50 - 0,5P \\implies e_p = -0,5 \\times (50/25) = -1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Recette totale',
            stepTheme: 'Amoroso-Robinson',
            stepTitle: 'Arbitrage prix / volume et maximisation du chiffre d’affaires',
            paragraphText:
              'Lorsqu’une entreprise modifie son tarif, sa recette totale $RT = P \\cdot Q$ subit un **effet prix** et un **effet volume** opposés. La formule d’Amoroso-Robinson tranche immédiatement.\n' +
              '• **Formule** : $Rm = P\\left(1 + \\frac{1}{e_p}\\right)$. La dérivée de $RT$ par rapport au prix vaut $\\frac{dRT}{dP} = Q(1 + e_p)$.\n' +
              '• **Si $|e_p| < 1$** ($e_p > -1$) : $1 + e_p > 0 \\implies$ augmenter le prix **augmente** $RT$ (l’effet prix domine).\n' +
              '• **Si $|e_p| > 1$** ($e_p < -1$) : $1 + e_p < 0 \\implies$ baisser le prix **augmente** $RT$ (l’effet volume domine).\n' +
              '• **Exemple** : avec $e_p = -2$, baisser le prix de 10 % fait bondir les ventes de 20 %, augmentant le chiffre d’affaires d’environ +8 % ($0,9 \\times 1,2 = 1,08$).',
            formula: {
              name: 'Sens de variation de la Recette Totale',
              formula: '\\frac{d(P \\cdot Q)}{dP} = Q\\,(1 + e_p) \\implies \\begin{cases} |e_p| < 1 \\Rightarrow P\\uparrow \\implies RT\\uparrow \\\\ |e_p| > 1 \\Rightarrow P\\downarrow \\implies RT\\uparrow \\end{cases}',
              note: 'La recette totale est maximale exactement lorsque |e_p| = 1.',
            },
            keyRule:
              'La recette totale RT = P·Q atteint son maximum exactement au point où l’élasticité-prix vaut −1 (soit Rm = 0).',
            konanTip:
              'Moyen mnémotechnique : Inélastique = le prix et la Recette évoluent dans le MÊME sens (P↑ ⇒ RT↑) ; Élastique = sens OPPOSÉ (P↑ ⇒ RT↓).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Une plateforme de billetterie en ligne estime l’élasticité-prix de sa demande à $e_p = -2,5$. Pour accroître son chiffre d’affaires (recette totale), quelle décision tarifaire doit-elle prendre ?',
              options: [
                'Augmenter ses prix de 10 %',
                'Doubler ses prix car la demande est rigide',
                'Ne rien changer car la recette est déjà maximale',
                'Baisser légèrement ses prix, car la demande est élastique ($|e_p| > 1$) et la hausse des volumes compensera largement la baisse du prix unitaire',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Avec $|e_p| = 2,5 > 1$, la demande est fortement élastique : une baisse de prix de 1 % entraîne une hausse de 2,5 % des quantités vendues, ce qui accroît la recette totale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Déterminants',
            stepTheme: 'Facteurs d’élasticité',
            stepTitle: 'Les quatre grands déterminants de l’élasticité-prix',
            paragraphText:
              'Pourquoi la demande de carburant est-elle très rigide alors que celle d’une marque précise de smartphone est très élastique ? Quatre facteurs structurels l’expliquent.\n' +
              '• **Existence de substituts proches** : plus il existe d’alternatives faciles (ex. plusieurs opérateurs mobile money), plus $|e_p|$ est élevée.\n' +
              '• **Caractère indispensable vs superflu** : les biens de première nécessité (médicaments, eau, riz) ont une demande inélastique, contrairement aux loisirs.\n' +
              '• **Part dans le budget du ménage** : un bien qui pèse 0,2 % du budget (allumettes, sel) a une demande rigide ; un bien qui pèse 30 % (loyer, billet d’avion) a une demande plus élastique.\n' +
              '• **Horizon temporel** : la demande est toujours **plus élastique à long terme** qu’à court terme, car les consommateurs ont le temps de s’adapter (changer de véhicule, isoler un bâtiment).',
            keyRule:
              'Plus de substituts, plus grande part budgétaire, caractère non vital et horizon long ⇒ demande PLUS élastique ($|e_p|$ élevé).',
            konanTip:
              'Plus un bien est défini de manière étroite (ex. « riz parfumé marque X » vs « alimentation »), plus il a de substituts et plus sa demande est élastique.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Pourquoi la demande d’essence est-elle généralement beaucoup plus élastique à long terme qu’à court terme après une flambée des prix à la pompe ?',
              options: [
                'Parce que les voitures deviennent gratuites à long terme',
                'Parce qu’à long terme, les ménages peuvent s’adapter en achetant des véhicules hybrides/électriques, en déménageant ou en réorganisant leurs trajets',
                'Parce que la loi de la demande ne s’applique pas à court terme',
                'Parce que le prix du carburant n’entre pas dans le budget des ménages',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À court terme, les équipements et trajets sont figés (faible élasticité) ; à long terme, de multiples marges de substitution apparaissent, rendant la demande nettement plus élastique.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Éco numérique',
            stepTheme: 'Pricing SaaS & Data',
            stepTitle: 'Appliquer l’élasticité-prix aux modèles numériques et télécoms',
            paragraphText:
              'Dans l’économie numérique (SaaS, plateformes VTC, forfaits 4G/5G), la connaissance fine des élasticités est le levier numéro un de la rentabilité.\n' +
              '• **Coût marginal quasi nul** : pour un logiciel cloud ou un streaming musical, maximiser le profit revient quasiment à maximiser la recette totale, donc à cibler $|e_p| \\approx 1$ !\n' +
              '• **Segmentation par élasticité** : les clients professionnels (demande rigide, $|e_p| < 1$) paient un abonnement « Business » élevé, tandis que les étudiants (demande élastique, $|e_p| > 1$) bénéficient d’un tarif réduit.\n' +
              '• **Coûts de changement (switching costs)** : fidéliser un utilisateur dans un écosystème (cloud, historique bancaire) réduit son $|e_p|$ et renforce le pouvoir tarifaire de la plateforme.',
            konanTip:
              'Tarification différenciée = facturer un prix plus élevé au segment dont la demande est la MOINS élastique (ex. tarif pro vs tarif étudiant) !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Une plateforme SaaS propose son logiciel à deux segments : entreprises ($e_p = -0,5$) et étudiants ($e_p = -2,2$). Quelle politique tarifaire maximise sa recette globale ?',
              options: [
                'Facturer un tarif élevé aux entreprises (demande inélastique) et un tarif réduit aux étudiants (demande élastique)',
                'Facturer plus cher aux étudiants qu’aux entreprises',
                'Imposer exactement le même tarif maximal aux deux segments',
                'Offrir le logiciel gratuitement aux entreprises et le vendre au prix fort aux étudiants',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un prix élevé sur le segment inélastique (entreprises) génère de fortes recettes sans perdre de clients, tandis qu’un prix bas sur le segment élastique (étudiants) attire un volume important.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch3_p2',
        order: 2,
        title: 'Élasticité-revenu (lois d’Engel), élasticité croisée et élasticité d’offre',
        summary:
          'Classer les biens par élasticité-revenu (inférieur, nécessité, luxe), appliquer les lois d’Engel, diagnostiquer substituts et compléments par l’élasticité croisée et analyser l’élasticité d’offre.',
        conceptExplanation:
          'Au-delà du prix propre, trois autres élasticités sont indispensables pour cartographier un marché :\n\n' +
          '1. **Élasticité-revenu ($e_R$)** : $e_R = \\frac{\\Delta Q / Q}{\\Delta R / R}$. Elle classe les biens selon les **lois d’Engel** :\n' +
          '• $e_R < 0$ : **bien inférieur** (sa demande recule quand le revenu croît) ;\n' +
          '• $0 < e_R < 1$ : **bien normal de première nécessité** (sa demande croît moins vite que le revenu, sa part budgétaire baisse : 1re loi d’Engel pour l’alimentation) ;\n' +
          '• $e_R > 1$ : **bien supérieur / de luxe** (sa demande croît plus vite que le revenu, sa part budgétaire augmente : 3e loi d’Engel pour santé, culture, loisirs, numérique haut de gamme).\n\n' +
          '2. **Élasticité-prix croisée ($e_{1/2}$)** : $e_{1/2} = \\frac{\\Delta Q_1 / Q_1}{\\Delta P_2 / P_2}$. Positive ($> 0$) pour des **biens substituables**, négative ($< 0$) pour des **biens complémentaires**, nulle ($= 0$) pour des biens indépendants.\n\n' +
          '3. **Élasticité-prix de l’offre ($e_S$)** : $e_S = \\frac{\\Delta Q^S / Q^S}{\\Delta P / P} \\ge 0$, d’autant plus forte que les capacités sont flexibles et que l’horizon temporel s’allonge.',
        keyRule:
          'Retiens la grille des signes : $e_R < 0$ (inférieur), $0 < e_R < 1$ (nécessité), $e_R > 1$ (luxe) ; $e_{1/2} > 0$ (substituts), $e_{1/2} < 0$ (compléments).',
        formulas: [
          {
            name: 'Élasticité-revenu et Élasticité croisée',
            formula: 'e_R = \\frac{\\Delta Q / Q}{\\Delta R / R} = \\frac{\\partial Q}{\\partial R}\\cdot\\frac{R}{Q} \\quad | \\quad e_{1/2} = \\frac{\\Delta Q_1 / Q_1}{\\Delta P_2 / P_2} = \\frac{\\partial Q_1}{\\partial P_2}\\cdot\\frac{P_2}{Q_1}',
            note: 'Attention au signe : contrairement à e_p, le signe (+ ou −) de e_R et e_{1/2} porte toute l’information qualitative !',
          },
          {
            name: 'Élasticité-prix de l’offre',
            formula: 'e_S = \\frac{\\Delta Q^S / Q^S}{\\Delta P / P} = \\frac{dQ^S}{dP}\\cdot\\frac{P}{Q^S} \\ge 0',
            note: 'À très court terme (stocks fixes), e_S ≈ 0 ; à long terme (nouvelles usines), e_S devient élevée.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer un portefeuille de produits numériques par les élasticités',
          statement:
            'Dans une enquête ménages à Abidjan : (a) quand le revenu augmente de $+10\\,\\%$, les dépenses d’alimentation de base croissent de $+4\\,\\%$, les abonnements fibre/streaming de $+18\\,\\%$ et les trajets en transport informel baissent de $-5\\,\\%$. (b) Quand le prix des smartphones augmente de $+10\\,\\%$, la demande de coques baisse de $-8\\,\\%$ et celle des téléphones basiques augmente de $+6\\,\\%$. Calculez et classez chaque bien.',
          methodSteps: [
            'Alimentation de base : $e_R = +4\\% / +10\\% = +0,4 \\in ]0;1[$ ⇒ bien normal de première nécessité (sa part dans le budget diminue).',
            'Fibre & streaming : $e_R = +18\\% / +10\\% = +1,8 > 1$ ⇒ bien supérieur / de luxe (sa part budgétaire augmente).',
            'Transport informel : $e_R = -5\\% / +10\\% = -0,5 < 0$ ⇒ bien inférieur.',
            'Coques par rapport aux smartphones : $e_{\\text{coques/smart}} = -8\\% / +10\\% = -0,8 < 0$ ⇒ biens complémentaires.',
            'Téléphones basiques par rapport aux smartphones : $e_{\\text{bas/smart}} = +6\\% / +10\\% = +0,6 > 0$ ⇒ biens substituables.',
          ],
          conclusion:
            'La matrice des élasticités fournit une cartographie complète de la sensibilité conjoncturelle et concurrentielle de chaque secteur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Synthèse',
            stepTheme: 'Grille des élasticités',
            stepTitle: 'Élasticité-revenu et tableau de synthèse des élasticités',
            paragraphText:
              'L’**élasticité-revenu** $e_R = (\\Delta Q / Q) / (\\Delta R / R)$ mesure la façon dont la consommation d’un bien accompagne l’enrichissement d’un ménage ou d’un pays.\n' +
              '• **Trois cas significatifs** : $e_R < 0$ (bien inférieur), $0 < e_R < 1$ (bien normal de nécessité), $e_R > 1$ (bien supérieur / de luxe).\n' +
              '• **Conséquence sur le coefficient budgétaire** ($P\\cdot Q / R$) : quand le revenu croît, la part du budget consacrée au bien diminue si $e_R < 1$, reste constante si $e_R = 1$ (cas Cobb-Douglas), et augmente si $e_R > 1$.\n' +
              '• **Repère global** : le tableau ci-dessous récapitule en un coup d’œil les quatre grandes élasticités microéconomiques.',
            keyRule:
              'Ne confonds jamais le signe de $e_R$ (qui classe le bien face au revenu) avec le signe de $e_p$ (qui mesure la sensibilité au prix propre).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau récapitulatif des élasticités microéconomiques',
              caption: 'Formules, intervalles de valeurs et interprétations économiques des quatre élasticités essentielles.',
              tableData: {
                headers: ['Élasticité', 'Formule', 'Valeur / Signe', 'Qualification économique'],
                rows: [
                  ['Prix directe ($e_p$)', '$(dQ/dP)\\cdot(P/Q)$', '$|e_p| > 1$ / $|e_p| < 1$', 'Élastique ($P\\uparrow \\Rightarrow RT\\downarrow$) / Inélastique ($P\\uparrow \\Rightarrow RT\\uparrow$)'],
                  ['Revenu ($e_R$)', '$(dQ/dR)\\cdot(R/Q)$', '$e_R < 0$', 'Bien inférieur (demande baisse si $R\\uparrow$)'],
                  ['Revenu ($e_R$)', '$(dQ/dR)\\cdot(R/Q)$', '$0 < e_R < 1$ / $e_R > 1$', 'Première nécessité / Bien supérieur (luxe)'],
                  ['Croisée ($e_{1/2}$)', '$(dQ_1/dP_2)\\cdot(P_2/Q_1)$', '$e_{1/2} > 0$ / $e_{1/2} < 0$', 'Substituts ($+$) / Compléments ($-$) / Indépendants ($0$)'],
                  ['Offre ($e_S$)', '$(dQ^S/dP)\\cdot(P/Q^S)$', '$e_S > 1$ / $0 \\le e_S < 1$', 'Offre élastique (long terme) / Offre rigide (court terme)'],
                ],
              },
            },
            konanTip:
              'Ne confonds pas « bien normal » (e_R > 0, qui regroupe nécessités ET luxe) avec « bien supérieur » (uniquement e_R > 1).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Lorsque le revenu d’un ménage augmente de 20 %, sa consommation de services cloud professionnels augmente de 34 %. Que vaut $e_R$ et comment classe-t-on ce service ?',
              options: [
                '$e_R = +0,59$ — bien de première nécessité',
                '$e_R = +1,70$ — bien supérieur (ou de luxe)',
                '$e_R = -1,70$ — bien inférieur',
                '$e_R = +1,40$ — bien complémentaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$e_R = (+34\\,\\%) / (+20\\,\\%) = +1,70 > 1$ : la demande croît plus vite que le revenu, ce qui définit un bien supérieur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Lois d’Engel',
            stepTheme: 'Structure budgétaire',
            stepTitle: 'Les trois lois d’Engel et la transformation des économies',
            paragraphText:
              'Au XIXe siècle, le statisticien allemand Ernst Engel a observé comment se déforme le budget des ménages à mesure que leur niveau de vie s’élève — des lois toujours vérifiées aujourd’hui.\n' +
              '• **1re loi d’Engel (alimentation)** : lorsque le revenu augmente, la part consacrée aux dépenses alimentaires diminue ($0 < e_R < 1$).\n' +
              '• **2e loi d’Engel (logement, habillement, énergie)** : la part budgétaire reste approximativement constante ($e_R \\approx 1$).\n' +
              '• **3e loi d’Engel (santé, éducation, loisirs, culture, numérique)** : la part du revenu affectée à ces dépenses **augmente** plus que proportionnellement avec le revenu ($e_R > 1$).\n' +
              '• **Portée macroéconomique** : ces lois expliquent la tertiarisation progressive des économies en développement et l’essor des services numériques en Afrique de l’Ouest.',
            keyRule:
              '3e loi d’Engel : plus un pays ou un ménage s’enrichit, plus la part budgétaire des services supérieurs (éducation, santé, loisirs, numérique) s’accroît ($e_R > 1$).',
            konanTip:
              'Attention : dire que la part alimentaire diminue (1re loi d’Engel) ne veut PAS dire qu’on mange moins en valeur absolue, mais que les autres dépenses croissent beaucoup plus vite !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Qu’énonce précisément la troisième loi d’Engel ?',
              options: [
                'La part des dépenses alimentaires dépasse toujours 80 % du budget',
                'Quand le revenu augmente, la part du budget consacrée aux loisirs, à la santé, à l’éducation et à la culture augmente ($e_R > 1$)',
                'Les consommateurs réduisent leur épargne à zéro dès que leur revenu double',
                'Les prix des biens de luxe sont toujours inférieurs à ceux des biens de nécessité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La 3e loi d’Engel stipule que le coefficient budgétaire des dépenses de confort, culture, loisirs, santé et éducation s’accroît avec le revenu (biens supérieurs, $e_R > 1$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Croisée',
            stepTheme: 'Substituts vs Compléments',
            stepTitle: 'Diagnostiquer les liens entre deux marchés par l’élasticité croisée',
            paragraphText:
              'Aucune entreprise ne vit en vase clos : la décision tarifaire d’un concurrent ou d’un partenaire technologique impacte directement vos ventes via l’**élasticité-prix croisée** $e_{1/2}$.\n' +
              '• **$e_{1/2} > 0$ (biens substituables)** : quand le prix du bien 2 monte, les clients fuient le bien 2 et se reportent sur le bien 1 (ex. deux applications de livraison ou thé et café).\n' +
              '• **$e_{1/2} < 0$ (biens complémentaires)** : quand le prix du bien 2 monte, on achète moins de bien 2 ET donc moins de bien 1 qui s’utilise avec lui (ex. imprimante et cartouches, smartphone et forfait data).\n' +
              '• **$e_{1/2} = 0$ (biens indépendants)** : aucune interaction commerciale (ex. prix du cacao et vente de logiciels comptables).',
            konanTip:
              'Les autorités de la concurrence utilisent l’élasticité croisée pour délimiter un « marché pertinent » : deux produits fortement substituables ont une $e_{1/2}$ très positive !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Suite à une hausse de 15 % du tarif des transferts d’argent chez l’opérateur A, le volume des transactions chez l’opérateur B augmente de 24 %. Que vaut l’élasticité croisée $e_{B/A}$ et qu’indique-t-elle ?',
              options: [
                '$e_{B/A} = -1,6$ — services complémentaires',
                '$e_{B/A} = +0,625$ — services indépendants',
                '$e_{B/A} = +1,6 > 0$ — services fortement substituables',
                '$e_{B/A} = +9$ — biens inférieurs',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$e_{B/A} = (+24\\,\\%) / (+15\\,\\%) = +1,6 > 0$. Un signe fortement positif démontre une forte substituabilité concurrentielle entre les deux opérateurs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Offre',
            stepTheme: 'Élasticité d’offre',
            stepTitle: 'Élasticité-prix de l’offre et rôle décisif du temps',
            paragraphText:
              'L’**élasticité-prix de l’offre** $e_S = (\\Delta Q^S / Q^S) / (\\Delta P / P)$ mesure la capacité des producteurs à augmenter rapidement leur production lorsque le prix du marché grimpe.\n' +
              '• **Très court terme (offre instantanée)** : les quantités déjà récoltées ou produites sont fixes ⇒ offre quasi verticale ($e_S \\approx 0$, ex. poisson frais au port le matin, places d’un stade).\n' +
              '• **Court terme** : les entreprises recrutent des heures supplémentaires mais le capital reste fixe ⇒ offre modérément élastique.\n' +
              '• **Long terme** : construction de nouvelles usines, plantation de nouvelles parcelles, entrée de nouvelles firmes ⇒ offre très élastique ($e_S > 1$).\n' +
              '• **Économie numérique** : pour un bien informationnel (application, cours vidéo), la duplication coûte presque zéro ⇒ $e_S$ est très élevée même à court terme !',
            keyRule:
              'Plus l’horizon temporel est long et plus les capacités productives sont modulables, plus l’élasticité-prix de l’offre $e_S$ est élevée.',
            konanTip:
              'Pour une droite d’offre linéaire passant exactement par l’origine (Q^S = b·P), l’élasticité d’offre vaut toujours exactement +1 !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Pour lequel de ces biens l’élasticité-prix de l’offre est-elle la PLUS FAIBLE (proche de 0) à très court terme ?',
              options: [
                'La récolte annuelle de cacao déjà entreposée en fin de saison',
                'Les licences d’un logiciel déjà développé téléchargeable en ligne',
                'Les t-shirts imprimés dans un atelier disposant de machines inoccupées',
                'Les crédits de communication prépayés vendus par un opérateur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une récolte agricole déjà effectuée (et des cacaoyers qui mettent plusieurs années à produire) a une quantité figée à court terme : son offre est quasi verticale ($e_S \\approx 0$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Agrégation',
            stepTheme: 'Demande de marché',
            stepTitle: 'Construire la demande agrégée par sommation horizontale',
            paragraphText:
              'Comment passer des demandes individuelles $q_i^D(P)$ à la demande globale du marché $Q^D(P)$ ? On effectue une **sommation horizontale** (addition des quantités pour chaque prix).\n' +
              '• **Méthode** : exprimer chaque demande individuelle sous forme directe $q_i = f_i(P)$ (jamais sous forme inverse $P(q)$ !) puis additionner : $Q^D(P) = \\sum_{i=1}^n q_i(P)$ en respectant $q_i \\ge 0$.\n' +
              '• **Point coudé (prix de réserve différents)** : si le consommateur 1 achète dès $P \\le 20$ et le consommateur 2 seulement dès $P \\le 12$, la demande de marché coïncide avec $q_1$ entre $12$ et $20$, puis égale $q_1 + q_2$ sous $12$.\n' +
              '• **Exemple** : 100 étudiants identiques ayant chacun $q_i = 10 - 0,5P$ génèrent une demande de marché $Q^D(P) = 100(10 - 0,5P) = 1\\,000 - 50P$.',
            formula: {
              name: 'Sommation horizontale des demandes individuelles',
              formula: 'Q^D(P) = \\sum_{i=1}^{n} \\max\\big(0,\\, q_i^D(P)\\big)',
              note: 'Piège classique : ne JAMAIS additionner les prix inverses P₁(q) + P₂(q) pour un bien privé !',
            },
            konanTip:
              'Pour un bien privé, on additionne les QUANTITÉS à prix donné (sommation horizontale). La sommation verticale des prix est réservée aux biens publics purs (Samuelson).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Un marché compte deux acheteurs : $q_1 = 20 - P$ (pour $P \\le 20$) et $q_2 = 10 - P$ (pour $P \\le 10$). Quelle est la quantité totale demandée sur le marché au prix $P = 15$, puis au prix $P = 6$ ?',
              options: [
                'À $P = 15$ : $Q^D = 0$ ; à $P = 6$ : $Q^D = 18$',
                'À $P = 15$ : $Q^D = 5$ ; à $P = 6$ : $Q^D = 18$',
                'À $P = 15$ : $Q^D = 10$ ; à $P = 6$ : $Q^D = 14$',
                'À $P = 15$ : $Q^D = 5$ ; à $P = 6$ : $Q^D = 14$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À $P = 15$, $q_1 = 20 - 15 = 5$, et l’acheteur 2 n’achète pas ($q_2 = 0$, jamais $-5$ !), donc $Q^D = 5$. À $P = 6$, $q_1 = 14$ et $q_2 = 4$, d’où $Q^D = 14 + 4 = 18$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Équation complète',
            stepTheme: 'Fonction de demande',
            stepTitle: 'Lire simultanément les trois élasticités dans une fonction de demande',
            paragraphText:
              'Lorsqu’une fonction de demande log-linéaire (à élasticités constantes) est estimée par économétrie, ses exposants donnent directement les trois élasticités en un regard !\n' +
              '• **Forme puissance** : $Q_1 = A \\cdot P_1^a \\cdot P_2^b \\cdot R^c$. En appliquant la dérivée logarithmique, on démontre que $e_p = a$, $e_{1/2} = b$ et $e_R = c$.\n' +
              '• **Lecture directe sur un exemple** : pour $Q_1 = 50 \\cdot P_1^{-1,2} \\cdot P_2^{-0,4} \\cdot R^{1,5}$ :\n' +
              '  1. $e_p = -1,2$ ⇒ demande élastique au prix propre ;\n' +
              '  2. $e_{1/2} = -0,4 < 0$ ⇒ le bien 2 est un complément du bien 1 ;\n' +
              '  3. $e_R = +1,5 > 1$ ⇒ le bien 1 est un bien supérieur (de luxe).',
            formula: {
              name: 'Élasticités d’une demande puissance (log-linéaire)',
              formula: 'Q_1 = A \\cdot P_1^a \\cdot P_2^b \\cdot R^c \\implies e_p = a,\\quad e_{1/2} = b,\\quad e_R = c',
              note: 'Vérifiable immédiatement par $\\ln Q_1 = \\ln A + a\\ln P_1 + b\\ln P_2 + c\\ln R$.',
            },
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'La demande estimée d’un bien 1 vaut $Q_1 = 10 \\cdot P_1^{-0,7} \\cdot P_2^{+0,5} \\cdot R^{-0,3}$. Quelle caractérisation complète est exacte ?',
              options: [
                'Demande inélastique au prix propre, bien 1 et bien 2 substituables, bien 1 inférieur',
                'Demande élastique au prix propre, biens complémentaires, bien 1 de luxe',
                'Demande inélastique au prix propre, biens complémentaires, bien 1 de première nécessité',
                'Bien de Giffen, biens indépendants, bien 1 normal',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$e_p = -0,7$ ($|e_p| < 1$ ⇒ inélastique) ; $e_{1/2} = +0,5 > 0$ (substituts) ; $e_R = -0,3 < 0$ (bien inférieur).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch3_p3',
        order: 3,
        title: 'Surplus du consommateur, surplus du producteur et efficience du marché',
        summary:
          'Mesurer géométriquement et analytiquement les surplus du consommateur et du producteur, calculer le surplus total et démontrer l’efficience allocative de l’équilibre concurrentiel.',
        conceptExplanation:
          'Comment mesurer en FCFA le gain de bien-être créé par un marché ? L’économie du bien-être additionne deux gains nets :\n\n' +
          '• **Surplus du consommateur ($SC$)** : différence entre le prix maximal que les acheteurs étaient disposés à payer (leur prix de réserve, lu sur la courbe de demande) et le prix effectivement payé $P^*$. Géométriquement, c’est l’**aire comprise entre la courbe de demande et la droite horizontale $P = P^*$**.\n' +
          '• **Surplus du producteur ($SP$)** : différence entre le prix effectivement reçu $P^*$ et le prix minimal auquel les vendeurs acceptaient de produire (coût marginal, lu sur la courbe d’offre). C’est l’**aire comprise entre $P = P^*$ et la courbe d’offre**.\n' +
          '• **Surplus social (ou total)** : $SS = SC + SP$. À l’équilibre concurrentiel $E(Q^*, P^*)$, toutes les unités pour lesquelles la disposition à payer dépasse le coût marginal sont échangées : le **surplus social est maximal** (efficience allocative, sans perte sèche).',
        keyRule:
          'Sur un marché linéaire : $SC = \\frac{1}{2}(P_{\\max} - P^*)\\cdot Q^*$ (triangle supérieur) et $SP = \\frac{1}{2}(P^* - P_{\\min})\\cdot Q^*$ (triangle inférieur).',
        formulas: [
          {
            name: 'Surplus du consommateur et du producteur (cas général et linéaire)',
            formula: 'SC = \\int_0^{Q^*} P^D(Q)\\,dQ - P^* Q^* = \\frac{(P_{\\max} - P^*)Q^*}{2} \\quad | \\quad SP = P^* Q^* - \\int_0^{Q^*} P^S(Q)\\,dQ = \\frac{(P^* - P_{\\min})Q^*}{2}',
            note: 'P_max est le prix d’étranglement de la demande (Q = 0) et P_min le prix minimal d’offre (Q = 0).',
          },
          {
            name: 'Surplus social (bien-être collectif)',
            formula: 'SS = SC + SP = \\int_0^{Q^*} \\big(P^D(Q) - P^S(Q)\\big)\\,dQ',
            note: 'Maximisé au point d’équilibre concurrentiel où P^D(Q*) = P^S(Q*).',
          },
        ],
        workedExample: {
          title: 'Calculer les surplus d’un marché linéaire de batteries solaires',
          statement:
            'La demande inverse est $P^D = 10 - Q$ et l’offre inverse est $P^S = 2 + Q$ (en dizaines de milliers de FCFA et milliers d’unités). Déterminez $E(Q^*, P^*)$, $SC$, $SP$ et le surplus total $SS$.',
          methodSteps: [
            'Équilibre : $10 - Q^* = 2 + Q^* \\implies 2Q^* = 8 \\implies Q^* = 4$ et $P^* = 6$.',
            'Intersections sur l’axe des prix ($Q = 0$) : $P_{\\max} = 10$ (demande) et $P_{\\min} = 2$ (offre).',
            'Surplus du consommateur : $SC = \\frac{1}{2} \\times (10 - 6) \\times 4 = \\frac{1}{2} \\times 4 \\times 4 = 8$.',
            'Surplus du producteur : $SP = \\frac{1}{2} \\times (6 - 2) \\times 4 = \\frac{1}{2} \\times 4 \\times 4 = 8$.',
            'Surplus total : $SS = SC + SP = 8 + 8 = 16$ (vérification : grand triangle $\\frac{1}{2}(10 - 2) \\times 4 = 16$).',
          ],
          conclusion:
            'L’échange concurrentiel crée un gain net collectif de 16 unités monétaires, partagé équitablement ici car les pentes sont symétriques.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Surplus SC',
            stepTheme: 'Bien-être acheteur',
            stepTitle: 'Visualiser et définir le surplus du consommateur',
            paragraphText:
              'Quand vous achetez un smartphone à 120 000 FCFA alors que vous étiez prêt à en payer 160 000 FCFA, vous réalisez un gain net psychologique et monétaire de 40 000 FCFA : c’est votre **surplus individuel**.\n' +
              '• **Définition agrégée** : le surplus des consommateurs ($SC$) est la somme des écarts entre le prix de réserve de chaque unité achetée et le prix unique du marché $P^*$.\n' +
              '• **Lecture graphique** : sur le graphique ci-dessous ($P^D = 10 - Q$ et $P^S = 2 + Q$), l’équilibre est $E(4 ; 6)$. Le $SC$ est le triangle compris **sous la demande** (de $P = 10$ à $P^* = 6$), d’aire $\\frac{1}{2}(10-6)\\times 4 = 8$.\n' +
              '• **Règle d’évolution** : toute baisse du prix $P^*$ augmente le $SC$ pour deux raisons (les anciens acheteurs paient moins cher ET de nouveaux acheteurs entrent sur le marché).',
            keyRule:
              'Le surplus du consommateur se situe toujours SOUS la courbe de demande et AU-DESSUS de la droite de prix $P^*$.',
            visualSchema: {
              type: 'function_plot',
              title: 'Équilibre Offre-Demande et zones de Surplus (SC et SP)',
              caption: 'Demande P = 10 − Q (bleu), Offre P = 2 + Q (vert), Équilibre E(4 ; 6). Triangle supérieur (entre 6 et 10) = SC = 8 ; triangle inférieur (entre 2 et 6) = SP = 8.',
              plot: {
                xMin: 0,
                xMax: 10,
                yMin: 0,
                yMax: 11,
                xStep: 2,
                yStep: 2,
                curves: [
                  {
                    label: 'Demande : P = 10 − Q',
                    color: 'blue',
                    pieces: [{ expr: '10 - x', from: 0, to: 10 }],
                  },
                  {
                    label: 'Offre : P = 2 + Q',
                    color: 'green',
                    pieces: [{ expr: '2 + x', from: 0, to: 8.5 }],
                  },
                ],
                points: [
                  { x: 4, y: 6, label: 'E*(4 ; 6)', filled: true, color: 'orange' },
                  { x: 0, y: 10, label: 'P_max = 10', filled: true, color: 'blue' },
                  { x: 0, y: 2, label: 'P_min = 2', filled: true, color: 'green' },
                ],
                horizontalLines: [{ y: 6, label: 'P* = 6', color: 'orange' }],
                verticalLines: [{ x: 4, label: 'Q* = 4', color: 'slate' }],
              },
            },
            konanTip:
              'Pense toujours à vérifier si l’équation donnée est P(Q) ou Q(P) : l’ordonnée P_max s’obtient en posant Q = 0 dans P(Q) !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'La demande inverse d’un marché est $P = 80 - 2Q$. Si le prix de marché s’établit à $P^* = 40$, quel est le surplus des consommateurs ($SC$) ?',
              options: ['400', '800', '200', '1 600'],
              correctAnswerIndex: 0,
              explanation:
                'Pour $P^* = 40$, $40 = 80 - 2Q^* \\implies Q^* = 20$. Avec $P_{\\max} = 80$, le triangle supérieur vaut $SC = \\frac{1}{2}(80 - 40) \\times 20 = 20 \\times 20 = 400$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Surplus SP',
            stepTheme: 'Bien-être vendeur',
            stepTitle: 'Mesurer le surplus du producteur et le relier au profit',
            paragraphText:
              'Symétriquement, les vendeurs dégagent un gain net chaque fois que le prix de marché dépasse leur coût marginal de fabrication.\n' +
              '• **Surplus du producteur ($SP$)** : différence entre la recette totale $P^* \\cdot Q^*$ et la somme des coûts marginaux (c’est-à-dire les **coûts variables totaux** $CV$).\n' +
              '• **Relation avec le profit comptable/économique** : $SP = RT - CV = (RT - CV - CF) + CF = \\pi + CF$. Le surplus du producteur égale donc le **profit augmenté des coûts fixes** (la marge sur coût variable) !\n' +
              '• **Lecture graphique** : c’est le triangle compris **sous la droite $P = P^*$** et **au-dessus de la courbe d’offre**.',
            formula: {
              name: 'Lien entre Surplus du producteur et Profit',
              formula: 'SP = RT - CV(Q^*) = \\pi + CF',
              note: 'À court terme, maximiser le profit π revient exactement à maximiser le surplus du producteur SP puisque CF est constant.',
            },
            konanTip:
              'Piège classique : le surplus du producteur N’EST PAS égal au profit quand il existe des coûts fixes ! $SP = \\pi + CF$ (et $SP = \\pi$ uniquement si $CF = 0$).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Une entreprise réalise une recette totale de 500 000 FCFA, des coûts variables de 320 000 FCFA et des coûts fixes de 100 000 FCFA. Que valent respectivement son surplus de producteur ($SP$) et son profit ($\\pi$) ?',
              options: [
                '$SP = 80\\,000$ FCFA et $\\pi = 180\\,000$ FCFA',
                '$SP = 180\\,000$ FCFA et $\\pi = 80\\,000$ FCFA',
                '$SP = 400\\,000$ FCFA et $\\pi = 80\\,000$ FCFA',
                '$SP = 180\\,000$ FCFA et $\\pi = 180\\,000$ FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$SP = RT - CV = 500\\,000 - 320\\,000 = 180\\,000$ FCFA. Le profit déduit en plus les coûts fixes : $\\pi = 180\\,000 - 100\\,000 = 80\\,000$ FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Efficience',
            stepTheme: 'Surplus social maximal',
            stepTitle: 'Pourquoi l’équilibre concurrentiel maximise-t-il le surplus total ?',
            paragraphText:
              'Le théorème fondamental de l’économie du bien-être démontre qu’un marché concurrentiel sans défaillance réalise spontanément l’allocation la plus efficace possible.\n' +
              '• **Si $Q < Q^*$ (sous-production)** : la disposition marginale à payer des consommateurs dépasse le coût marginal ($P^D > P^S$). Produire une unité de plus crée un surplus net positif $(P^D - P^S) > 0$.\n' +
              '• **Si $Q > Q^*$ (surproduction)** : le coût marginal dépasse la valeur attribuée par l’acheteur ($P^S > P^D$). Produire cette unité détruit de la richesse sociale.\n' +
              '• **À l’équilibre $Q = Q^*$** : l’arbitrage s’arrête exactement où $P^D(Q^*) = P^S(Q^*)$ ⇒ le surplus total $SS = SC + SP$ atteint son **maximum absolu**.',
            keyRule:
              'Tout écart par rapport à la quantité concurrentielle $Q^*$ (par défaut ou par excès) engendre une **perte sèche** (destruction nette de surplus social).',
            konanTip:
              'Sur un graphique, la perte sèche pointe toujours comme un triangle tourné vers le point d’équilibre E*(Q*, P*).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Pour une quantité $Q_1 < Q^*$, on lit sur les courbes $P^D(Q_1) = 70$ et $P^S(Q_1) = 35$. Qu’en déduit-on sur l’efficience du marché ?',
              options: [
                'Le marché produit trop et détruit du bien-être',
                'Le surplus social est déjà à son maximum',
                'Produire une unité supplémentaire crée un gain net de bien-être social de $+35$ car la valeur pour l’acheteur dépasse le coût marginal',
                'Le prix d’équilibre doit être fixé à 0',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Tant que $P^D > P^S$, l’unité marginale vaut plus pour le consommateur (70) qu’elle ne coûte à produire (35) : la produire accroît le surplus social de $70 - 35 = +35$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Calcul complet',
            stepTheme: 'Triangles de surplus',
            stepTitle: 'Méthode infaillible pour calculer SC, SP et SS sur un marché linéaire',
            paragraphText:
              'Pour ne jamais commettre d’erreur dans les exercices chiffrés de surplus, suis toujours cette procédure en 4 étapes chronologiques.\n' +
              '• **Étape 1** : si les équations sont données en $Q(P)$, **inverse-les** pour obtenir $P^D(Q)$ et $P^S(Q)$ (prix en fonction de $Q$).\n' +
              '• **Étape 2** : résous $P^D(Q) = P^S(Q)$ pour trouver $Q^*$ et $P^*$.\n' +
              '• **Étape 3** : calcule les deux ordonnées à l’origine en posant $Q = 0$ : $P_{\\max} = P^D(0)$ et $P_{\\min} = P^S(0)$.\n' +
              '• **Étape 4** : applique l’aire d’un triangle rectangle : $SC = \\frac{1}{2}(P_{\\max} - P^*)Q^*$ et $SP = \\frac{1}{2}(P^* - P_{\\min})Q^*$.',
            konanTip:
              'Vérification rapide : additionne $SC + SP$ et compare à $\\frac{1}{2}(P_{\\max} - P_{\\min}) \\cdot Q^*$. Les deux résultats doivent être rigoureusement identiques !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Sur un marché où $P^D = 120 - 3Q$ et $P^S = 20 + 2Q$, quels sont le surplus du consommateur ($SC$) et le surplus du producteur ($SP$) à l’équilibre ?',
              options: [
                '$SC = 400$ et $SP = 600$',
                '$SC = 1\\,200$ et $SP = 800$',
                '$SC = 500$ et $SP = 500$',
                '$SC = 600$ et $SP = 400$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$120 - 3Q = 20 + 2Q \\implies 5Q = 100 \\implies Q^* = 20$ et $P^* = 60$. $P_{\\max} = 120$ et $P_{\\min} = 20$. Donc $SC = \\frac{1}{2}(120 - 60)(20) = 600$ et $SP = \\frac{1}{2}(60 - 20)(20) = 400$ ($SS = 1\\,000$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Partage',
            stepTheme: 'Élasticités & Surplus',
            stepTitle: 'Qui capte la plus grande part du surplus : acheteurs ou vendeurs ?',
            paragraphText:
              'Sur un marché concurrentiel, le partage du gâteau collectif ($SS = SC + SP$) dépend directement des élasticités relatives de l’offre et de la demande.\n' +
              '• **Plus la demande est inélastique** (courbe très pentue), plus $P_{\\max} - P^*$ est grand ⇒ les **consommateurs** captent une part massive du surplus total (car ils accordent une immense valeur vitale au bien, comme l’eau potable).\n' +
              '• **Plus l’offre est inélastique** (courbe très pentue), plus $P^* - P_{\\min}$ est grand ⇒ les **producteurs** captent la majeure partie du surplus (rente des ressources rares ou terrains urbains).\n' +
              '• **Progrès technique** (offre déplacée à droite) : $P^*$ baisse et $Q^*$ augmente ⇒ le $SC$ augmente toujours fortement.',
            keyRule:
              'Le côté le PLUS INÉLASTIQUE du marché capte la plus grande part du surplus... mais supportera aussi la plus lourde part d’une taxe !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Un progrès technologique abaisse fortement les coûts de production des smartphones (déplacement de la courbe d’offre vers la droite). Quel est l’effet certain sur le surplus des consommateurs ($SC$) ?',
              options: [
                'Le surplus des consommateurs augmente car le prix d’équilibre baisse et la quantité échangée augmente',
                'Le surplus des consommateurs diminue nécessairement',
                'Le surplus des consommateurs reste inchangé',
                'Le surplus des consommateurs devient négatif',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La baisse de $P^*$ et la hausse de $Q^*$ agrandissent la hauteur $(P_{\\max} - P^*)$ et la base $Q^*$ du triangle $SC$ : le gain des consommateurs augmente à coup sûr.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limites',
            stepTheme: 'Défaillances & Équité',
            stepTitle: 'Efficience ne signifie pas équité : limites du surplus social',
            paragraphText:
              'Maximiser $SS = SC + SP$ est un critère d’**efficience**, mais l’économiste doit connaître ses trois limites majeures avant de tirer toute conclusion normative.\n' +
              '• **Neutralité distributive** : le surplus total additionne 1 FCFA gagné par un milliardaire et 1 FCFA perdu par un étudiant modeste avec le même poids (il ignore l’équité sociale).\n' +
              '• **Externalités** : si la production génère une pollution non tarifée (externalité négative), le coût social dépasse le coût privé et le marché libre **surproduit**.\n' +
              '• **Biens publics et pouvoir de marché** : la non-rivalité/non-exclusion (éclairage public, sécurité) et les monopoles empêchent le marché concurrentiel seul d’atteindre l’optimum social.',
            konanTip:
              'Retiens la distinction : Efficience = taille maximale du gâteau ($SC + SP$). Équité = justice du partage des parts entre citoyens (qui relève du choix normatif).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Dans quelle situation l’équilibre libre d’offre et de demande privées NE maximise-t-il PAS le véritable bien-être collectif ?',
              options: [
                'Lorsque les produits sont homogènes et l’information transparente',
                'Lorsque les producteurs génèrent une externalité négative (ex. pollution industrielle non taxée) dont le coût n’est pas intégré dans leur courbe d’offre privée',
                'Lorsque la courbe de demande est linéaire',
                'Lorsque le nombre de vendeurs est très élevé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En présence d’externalité négative, le coût marginal social est supérieur au coût marginal privé : le marché libre produit au-delà de l’optimum social.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.4
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch3_p4',
        order: 4,
        title: 'Interventions publiques : prix plafond, prix plancher, taxes et perte sèche',
        summary:
          'Analyser les effets d’un prix plafond contraignant (pénurie, marché noir), d’un prix plancher (excédent), l’incidence fiscale d’une taxe unitaire et la perte sèche de Harberger.',
        conceptExplanation:
          'Pour protéger le pouvoir d’achat, garantir le revenu des agriculteurs ou financer les services publics, l’État intervient régulièrement sur les prix via trois instruments majeurs :\n\n' +
          '1. **Prix plafond contraignant ($P_{\\max} < P^*$)** (ex. blocage des loyers ou denrées de base) : provoque une **pénurie** ($Q^D > Q^S$), un rationnement (files d’attente, marché noir), une baisse des quantités échangées à $Q^S(P_{\\max})$ et une **perte sèche**.\n' +
          '2. **Prix plancher contraignant ($P_{\\min} > P^*$)** (ex. salaire minimum SMIG, prix garanti au producteur) : provoque un **excédent** ($Q^S > Q^D$, surproduction ou chômage) et une perte sèche.\n' +
          '3. **Taxe unitaire spécifique $t$** : introduit un coin fiscal $P_d - P_s = t$ entre le prix payé par l’acheteur ($P_d$) et le prix net reçu par le vendeur ($P_s$). Le partage du fardeau (**incidence fiscale**) est indépendant du côté légalement taxé : il pèse majoritairement sur le côté le **moins élastique** du marché, génère une recette fiscale $T = t \\cdot Q_t$ et crée une **perte sèche** $PS = \\frac{1}{2} t (Q^* - Q_t)$.',
        keyRule:
          'Prix plafond efficace ⇔ $P_{\\max} < P^*$ (crée pénurie). Prix plancher efficace ⇔ $P_{\\min} > P^*$ (crée excédent). Taxe unitaire : le côté le MOINS élastique paie la plus grande part !',
        formulas: [
          {
            name: 'Coin fiscal et Perte sèche d’une taxe unitaire t',
            formula: 'P_d - P_s = t, \\qquad \\text{Recette fiscale} = t \\cdot Q_t, \\qquad PS = \\frac{1}{2}\\,t\\,(Q^* - Q_t)',
            note: 'La perte sèche croît avec le CARRÉ du taux de taxe (doubler t quadruple la perte sèche !).',
          },
          {
            name: 'Partage de l’incidence fiscale (acheteur vs vendeur)',
            formula: '\\frac{\\Delta P_d}{|\\Delta P_s|} = \\frac{e_S}{|e_p|}',
            note: 'Si |e_p| est petit (demande rigide), ΔP_d est grand : les consommateurs supportent presque toute la taxe.',
          },
        ],
        workedExample: {
          title: 'Analyser une taxe unitaire de 20 FCFA sur un marché linéaire',
          statement:
            'Soient $P^D = 100 - Q$ et $P^S = 20 + Q$ (équilibre initial $Q^* = 40$, $P^* = 60$). L’État instaure une taxe spécifique $t = 20$ par unité vendue. Calculez $Q_t$, $P_d$, $P_s$, la recette fiscale et la perte sèche.',
          methodSteps: [
            'Écrire le coin fiscal : $P_d - P_s = 20 \\implies (100 - Q_t) - (20 + Q_t) = 20$.',
            'Résoudre en $Q_t$ : $80 - 2Q_t = 20 \\implies 2Q_t = 60 \\implies Q_t = 30$ unités (baisse de 10 unités).',
            'Calculer les nouveaux prix : prix payé par l’acheteur $P_d = 100 - 30 = 70$ (+10) ; prix net reçu par le vendeur $P_s = 20 + 30 = 50$ (−10).',
            'Recette fiscale de l’État : $T = t \\cdot Q_t = 20 \\times 30 = 600$.',
            'Perte sèche (triangle d’Harberger) : $PS = \\frac{1}{2} \\times t \\times (Q^* - Q_t) = \\frac{1}{2} \\times 20 \\times (40 - 30) = 100$.',
          ],
          conclusion:
            'La taxe se partage ici 50/50 (+10 acheteurs, −10 vendeurs) car les pentes sont identiques, rapporte 600 à l’État et détruit 100 de surplus collectif.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Prix plafond',
            stepTheme: 'Pénurie & Marché noir',
            stepTitle: 'Effets économiques d’un prix plafond contraignant',
            paragraphText:
              'Un **prix plafond** fixe un niveau légal maximal au-dessus duquel il est interdit de vendre (ex. plafonnement des loyers ou du prix du riz).\n' +
              '• **Condition d’effet contraignant** : le plafond doit être fixé **en dessous** du prix d’équilibre ($P_{\\max} < P^*$). S’il est fixé au-dessus ($P_{\\max} > P^*$), il est non contraignant et ne change rien !\n' +
              '• **Conséquences** : à $P_{\\max} < P^*$, la demande dépasse l’offre ($Q^D > Q^S$), créant une **pénurie** ; la quantité réellement échangée chute au côté court $Q^S(P_{\\max})$.\n' +
              '• **Effets pervers** : files d’attente, baisse de qualité, corruption ou marché noir où certains acheteurs paient bien plus cher que $P^*$, et perte sèche de surplus.',
            keyRule:
              'Un prix plafond n’est contraignant que s’il est INFÉRIEUR à $P^*$, et il provoque inévitablement une pénurie égale à $Q^D(P_{\\max}) - Q^S(P_{\\max})$.',
            konanTip:
              'Piège classique en QCM : si $P^* = 20$ et l’État fixe un prix plafond à $P_{\\max} = 25$, le marché reste à $P^* = 20$ sans aucune pénurie !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p4_q1',
              type: 'mcq',
              prompt:
                'Un marché est caractérisé par $Q^D = 100 - 2P$ et $Q^S = 20 + 2P$ (donc $P^* = 20$, $Q^* = 60$). Que se passe-t-il si l’État impose un prix plafond de $P_{\\max} = 15$ ?',
              options: [
                'Une pénurie de 20 unités et une quantité effectivement échangée ramenée à 50 unités',
                'Un excédent de 20 unités',
                'Aucun effet car 15 est inférieur à 20',
                'Une hausse des échanges jusqu’à 70 unités',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À $P = 15 < P^*$ : $Q^D = 100 - 30 = 70$ et $Q^S = 20 + 30 = 50$. La pénurie vaut $70 - 50 = 20$ unités et seuls 50 biens (le côté court, l’offre) sont effectivement vendus.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Prix plancher',
            stepTheme: 'Excédent & SMIG',
            stepTitle: 'Effets économiques d’un prix plancher contraignant',
            paragraphText:
              'Symétriquement, un **prix plancher** fixe un prix minimal légal en dessous duquel toute transaction est interdite (ex. prix minimum garanti aux planteurs ou salaire minimum SMIG).\n' +
              '• **Condition d’effet contraignant** : le plancher doit être fixé **au-dessus** du prix d’équilibre ($P_{\\min} > P^*$). Fixé en dessous, il n’a aucun effet.\n' +
              '• **Conséquences** : à $P_{\\min} > P^*$, les vendeurs veulent offrir beaucoup plus que les acheteurs ne demandent ($Q^S > Q^D$), créant un **excédent structurel** (surproduction agricole ou chômage involontaire sur le marché du travail).\n' +
              '• **Quantité échangée** : limitée au côté court $Q^D(P_{\\min})$, sauf si l’État rachète lui-même les excédents invendus.',
            keyRule:
              'Un prix plancher contraignant ($P_{\\min} > P^*$) génère un excédent d’offre égal à $Q^S(P_{\\min}) - Q^D(P_{\\min})$.',
            konanTip:
              'Pour ne jamais inverser plafond et plancher : on ne peut pas passer AU-DESSUS d’un plafond (contraignant si sous P*), ni AU-DESSOUS d’un plancher (contraignant si au-dessus de P*).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p4_q2',
              type: 'mcq',
              prompt:
                'Sur un marché agricole où $Q^D = 120 - P$ et $Q^S = 2P$ ($P^* = 40$, $Q^* = 80$), l’État impose un prix plancher garanti $P_{\\min} = 50$. Quel est le volume d’excédent invendu ?',
              options: [
                '0 unité',
                '10 unités',
                '30 unités',
                '70 unités',
              ],
              correctAnswerIndex: 2,
              explanation:
                'À $P = 50$ : $Q^S = 2(50) = 100$ et $Q^D = 120 - 50 = 70$. L’excédent d’offre vaut $100 - 70 = 30$ unités.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Taxe unitaire',
            stepTheme: 'Coin fiscal',
            stepTitle: 'Modéliser une taxe spécifique : écart entre P_d et P_s',
            paragraphText:
              'Lorsque l’État prélève une **taxe spécifique** de $t$ FCFA par unité échangée (ex. droit d’accise sur le carburant ou taxe sur les télécoms), un coin fiscal sépare désormais deux prix.\n' +
              '• **Prix payé par l’acheteur ($P_d$)** : augmente au-dessus de $P^*$ ($P_d > P^*$).\n' +
              '• **Prix net reçu par le vendeur ($P_s$)** : baisse en dessous de $P^*$ ($P_s < P^*$).\n' +
              '• **Relation fondamentale** : $P_d - P_s = t$, ce qui équivaut à résoudre $P^D(Q_t) - P^S(Q_t) = t$ pour trouver la nouvelle quantité échangée $Q_t < Q^*$.\n' +
              '• **Neutralité légale** : que la loi fasse collecter la taxe auprès du consommateur ou du producteur, les valeurs finales de $Q_t$, $P_d$ et $P_s$ sont **rigoureusement identiques** !',
            formula: {
              name: 'Équilibre avec taxe unitaire t',
              formula: 'P^D(Q_t) - P^S(Q_t) = t \\quad \\text{avec} \\quad P_d = P^D(Q_t), \\; P_s = P^S(Q_t)',
              note: 'L’incidence économique ne dépend JAMAIS de celui qui verse légalement le chèque au Trésor Public.',
            },
            keyRule:
              'Une taxe unitaire t crée un coin fiscal P_d − P_s = t et réduit la quantité échangée de Q* à Q_t, quel que soit le côté légalement taxé.',
            konanTip:
              'Vérifie toujours ton résultat après taxe : tu dois obligatoirement trouver P_s < P* < P_d et P_d − P_s = t !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p4_q3',
              type: 'mcq',
              prompt:
                'Si $P^D = 60 - Q$ et $P^S = Q$, quelle est la quantité échangée $Q_t$ après l’instauration d’une taxe unitaire de $t = 10$ ?',
              options: [
                '$Q_t = 30$',
                '$Q_t = 25$',
                '$Q_t = 20$',
                '$Q_t = 15$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$P^D(Q_t) - P^S(Q_t) = 10 \\implies (60 - Q_t) - Q_t = 10 \\implies 2Q_t = 50 \\implies Q_t = 25$ (contre $Q^* = 30$ avant taxe).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Incidence fiscale',
            stepTheme: 'Qui paie vraiment ?',
            stepTitle: 'Incidence fiscale : le rôle décisif des élasticités',
            paragraphText:
              'Qui supporte réellement le poids économique d’une nouvelle taxe ? La réponse est l’un des théorèmes les plus élégants de la microéconomie.\n' +
              '• **Règle d’or de l’incidence** : le fardeau fiscal pèse **principalement sur le côté le MOINS élastique** (le plus rigide), c’est-à-dire celui qui a le moins d’alternatives pour fuir la taxe.\n' +
              '• **Demande très inélastique** (carburant, tabac, médicaments) : même si la taxe est légalement payée par les distributeurs, ils la répercutent quasi intégralement dans le prix de vente ⇒ les **consommateurs** paient presque tout.\n' +
              '• **Offre très inélastique** (terres agricoles, immobilier urbain déjà construit) : les propriétaires ne peuvent pas réduire l’offre ⇒ les **vendeurs** supportent l’essentiel de la taxe.',
            formula: {
              name: 'Partage du fardeau fiscal selon les élasticités',
              formula: '\\text{Part acheteur} = \\frac{e_S}{e_S + |e_p|}, \\qquad \\text{Part vendeur} = \\frac{|e_p|}{e_S + |e_p|}',
              note: 'Si |e_p| = 0 (demande parfaitement rigide), Part acheteur = 100 % !',
            },
            keyRule:
              'En économie fiscale, la rigidité se paie cash : le côté le moins élastique supporte toujours la majorité de la taxe.',
            konanTip:
              'Cas extrême à connaître : si la demande est parfaitement rigide (e_p = 0), les consommateurs paient 100 % de la taxe et la perte sèche est nulle !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p4_q4',
              type: 'mcq',
              prompt:
                'L’État impose une taxe sur le carburant dont la demande est très inélastique ($|e_p| = 0,2$) tandis que l’offre est très élastique ($e_S = 1,8$). Quelle proportion de la taxe est réellement supportée par les consommateurs ?',
              options: [
                '10 %',
                '50 %',
                '20 %',
                '90 %',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Part supportée par les acheteurs $= \\frac{e_S}{e_S + |e_p|} = \\frac{1,8}{1,8 + 0,2} = \\frac{1,8}{2,0} = 0,90 = 90\\,\\%$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Perte sèche',
            stepTheme: 'Triangle d’Harberger',
            stepTitle: 'Calculer la recette fiscale et la perte sèche d’une taxe',
            paragraphText:
              'Une taxe ne se contente pas de transférer de l’argent des ménages et firmes vers l’État : en réduisant les quantités échangées de $Q^*$ à $Q_t$, elle détruit des échanges mutuellement avantageux.\n' +
              '• **Transfert vers l’État** : la recette fiscale $T = t \\cdot Q_t$ n’est pas une perte sociale (elle finance hôpitaux, écoles, routes).\n' +
              '• **Perte sèche ($PS$)** : surplus perdu sur les unités $(Q^* - Q_t)$ qui ne sont plus échangées ⇒ aire du triangle $PS = \\frac{1}{2} \\cdot t \\cdot (Q^* - Q_t)$.\n' +
              '• **Loi quadratique et courbe de Laffer** : si l’on double $t$, la perte sèche **quadruple** ; et si $t$ devient excessif, la chute de $Q_t$ fait même baisser la recette fiscale totale $t \\cdot Q_t$ !',
            konanTip:
              'Pour calculer la perte sèche d’une taxe en 5 secondes : $\\frac{1}{2} \\times \\text{hauteur (taxe } t\\text{)} \\times \\text{base (baisse des quantités } Q^* - Q_t\\text{)}$.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p4_q5',
              type: 'mcq',
              prompt:
                'Une taxe de $t = 400$ FCFA par unité fait passer la quantité échangée sur un marché de $Q^* = 500$ à $Q_t = 420$ unités. Que valent la recette fiscale $T$ et la perte sèche $PS$ ?',
              options: [
                '$T = 168\\,000$ FCFA et $PS = 16\\,000$ FCFA',
                '$T = 200\\,000$ FCFA et $PS = 32\\,000$ FCFA',
                '$T = 168\\,000$ FCFA et $PS = 32\\,000$ FCFA',
                '$T = 32\\,000$ FCFA et $PS = 168\\,000$ FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Recette fiscale $T = t \\cdot Q_t = 400 \\times 420 = 168\\,000$ FCFA. Perte sèche $PS = \\frac{1}{2} \\times 400 \\times (500 - 420) = 200 \\times 80 = 16\\,000$ FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Subvention',
            stepTheme: 'Taxe négative',
            stepTitle: 'Analyser une subvention unitaire comme une taxe négative',
            paragraphText:
              'Une **subvention unitaire $s$** (ex. aide publique par kit solaire ou par ordinateur étudiant) agit exactement à l’inverse d’une taxe !\n' +
              '• **Coin de subvention** : le prix net reçu par le vendeur dépasse désormais le prix payé par l’acheteur : $P_s - P_d = s$, donc $P^S(Q_s) - P^D(Q_s) = s$.\n' +
              '• **Effets sur le marché** : la quantité échangée **augmente** ($Q_s > Q^*$), les acheteurs paient moins ($P_d < P^*$) et les producteurs reçoivent plus ($P_s > P^*$), accroissant à la fois $SC$ et $SP$.\n' +
              '• **Coût budgétaire et perte sèche** : le coût pour l’État vaut $s \\cdot Q_s$, qui dépasse la somme des gains $\\Delta SC + \\Delta SP$ d’une perte sèche $\\frac{1}{2} s (Q_s - Q^*)$ (sauf s’il existe une externalité positive à encourager, comme l’éducation ou l’énergie verte !).',
            keyRule:
              'Subvention unitaire $s$ : $P_s - P_d = s$, $Q_s > Q^*$, coût budgétaire $= s \\cdot Q_s$ ; économiquement justifiée surtout en présence d’externalités positives.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p4_q6',
              type: 'mcq',
              prompt:
                'Quelle relation relie le prix reçu par le producteur ($P_s$) et le prix payé par le consommateur ($P_d$) lorsqu’une subvention unitaire $s$ est accordée sur un bien ?',
              options: [
                '$P_d - P_s = s$ et les quantités échangées diminuent',
                '$P_s - P_d = s$ et les quantités échangées augmentent au-delà de $Q^*$',
                '$P_s = P_d = s$',
                'La subvention ne profite jamais aux consommateurs si elle est versée aux producteurs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La subvention permet au producteur de percevoir $P_s = P_d + s > P_d$, ce qui abaisse le prix consommateur, relève le prix producteur et augmente les quantités échangées.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : THÉORIE DU PRODUCTEUR, COÛTS ET STRUCTURES DE MARCHÉ
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch4',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 : Théorie du producteur, coûts et structures de marché',
    summary:
      'Maîtriser les fonctions de production (court/long terme, isoquantes, TMST, rendements d’échelle), la théorie des coûts (CF, CV, CT, CM, Cm, seuils), la CPP, le monopole et l’oligopole.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 4.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch4_p1',
        order: 1,
        title: 'Fonctions de production, isoquantes, TMST et rendements d’échelle',
        summary:
          'Distinguer court terme (PML, PmL) et long terme (isoquantes, TMST), minimiser le coût de production (TMST = w/r) et caractériser les rendements d’échelle.',
        conceptExplanation:
          'La **fonction de production** $Q = F(K, L)$ indique la quantité maximale d’output $Q$ qu’une entreprise peut produire à partir de $K$ unités de capital et $L$ unités de travail, pour une technologie donnée.\n\n' +
          '• **Court terme** ($K = \\bar{K}$ fixe, $L$ variable) : on étudie la **Productivité Moyenne** $PML = Q/L$ et la **Productivité Marginale** $PmL = \\partial Q / \\partial L$. Par la loi des rendements décroissants, $PmL$ finit par diminuer et coupe toujours $PML$ exactement en son **maximum**.\n' +
          '• **Long terme** ($K$ et $L$ variables) : une **isoquante** regroupe toutes les combinaisons $(K, L)$ donnant le même output $Q_0$. Sa pente en valeur absolue est le **Taux Marginal de Substitution Technique** : $TMST_{L/K} = -dK/dL = PmL / PmK$.\n' +
          '• **Combinaison optimale (minimisation du coût $C = wL + rK$)** : tangence entre isoquante et droite d’isocoût ⇒ $TMST_{L/K} = \\frac{PmL}{PmK} = \\frac{w}{r} \\iff \\frac{PmL}{w} = \\frac{PmK}{r}$.\n' +
          '• **Rendements d’échelle** : si $F(tK, tL) = t^k F(K, L)$, ils sont **croissants** si $k > 1$, **constants** si $k = 1$, **décroissants** si $k < 1$ (pour Cobb-Douglas $A K^\\alpha L^\\beta$, $k = \\alpha + \\beta$).',
        keyRule:
          'Optimum du producteur : $TMST_{L/K} = PmL/PmK = w/r$. Rendements d’échelle Cobb-Douglas : comparez la somme des exposants $\\alpha + \\beta$ à $1$.',
        formulas: [
          {
            name: 'Productivités de court terme et optimum de long terme',
            formula: 'PML = \\frac{Q}{L}, \\quad PmL = \\frac{\\partial Q}{\\partial L} \\quad | \\quad TMST_{L/K} = \\frac{PmL}{PmK} = \\frac{w}{r}',
            note: 'Parfait parallèle mathématique avec le consommateur : isoquante ↔ indifférence, isocoût ↔ budget, TMST ↔ TMS !',
          },
          {
            name: 'Test des rendements d’échelle (homogénéité de degré k)',
            formula: 'F(tK, tL) = t^k F(K, L) \\implies \\begin{cases} k > 1 : \\text{croissants} \\\\ k = 1 : \\text{constants} \\\\ k < 1 : \\text{décroissants} \\end{cases}',
            note: 'Ne jamais confondre rendements marginaux (court terme, 1 seul facteur varie) et rendements d’échelle (long terme, TOUS les facteurs varient proportionnellement).',
          },
        ],
        workedExample: {
          title: 'Minimiser le coût de production d’une entreprise Cobb-Douglas',
          statement:
            'Un atelier d’assemblage a pour technologie $Q = 10\\,K^{0,5} L^{0,5}$, avec un salaire $w = 4$ et un coût du capital $r = 1$. 1) Qualifiez ses rendements d’échelle. 2) Trouvez la combinaison optimale $(K^*, L^*)$ et le coût minimal pour produire $Q_0 = 200$.',
          methodSteps: [
            'Rendements d’échelle : $\\alpha + \\beta = 0,5 + 0,5 = 1$ ⇒ rendements d’échelle constants.',
            'Calcul du $TMST_{L/K}$ : $TMST_{L/K} = \\frac{PmL}{PmK} = \\frac{0,5}{0,5} \\frac{K}{L} = \\frac{K}{L}$.',
            'Condition d’optimalité $TMST = w/r$ : $\\frac{K}{L} = \\frac{4}{1} = 4 \\implies K = 4L$ (sentier d’expansion).',
            'Injecter dans la contrainte de production $Q_0 = 200$ : $10\\,(4L)^{0,5} L^{0,5} = 200 \\implies 10 \\times 2L = 200 \\implies L^* = 10$ et $K^* = 40$.',
            'Coût total minimal : $C^* = w L^* + r K^* = 4(10) + 1(40) = 80$.',
          ],
          conclusion:
            'Le capital étant 4 fois moins cher que le travail pour des élasticités égales, la firme utilise 4 fois plus de capital que de travail ($K^* = 40, L^* = 10$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Horizon',
            stepTheme: 'Court vs Long terme',
            stepTitle: 'Fonction de production : distinction court terme et long terme',
            paragraphText:
              'En microéconomie, le court terme et le long terme ne se mesurent pas en mois calendaires mais en **degré de flexibilité des facteurs de production**.\n' +
              '• **Court terme** : au moins un facteur est **fixe** (généralement le capital $K = \\bar{K}$ : taille du datacenter, surface de l’usine) et seul le travail $L$ s’ajuste : $Q = f(L)$.\n' +
              '• **Long terme** : **tous** les facteurs sont variables ($K$ et $L$ peuvent être ajustés librement, on peut construire de nouvelles installations ou réorganiser la production).\n' +
              '• **Exemple** : une fintech peut embaucher 5 développeurs en deux semaines (court terme), mais la construction d’un datacenter certifié Tier-III relève du long terme.',
            keyRule:
              'Court terme = au moins un facteur fixe (donc présence de coûts fixes). Long terme = tous les facteurs variables (aucun coût fixe !).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'En théorie du producteur, quel critère précis distingue le court terme du long terme ?',
              options: [
                'Le court terme dure strictement moins de 12 mois',
                'À court terme, au moins un facteur de production est fixe, tandis qu’à long terme tous les facteurs sont variables',
                'À long terme, la firme ne paie plus aucun salaire',
                'À court terme, l’entreprise ne peut faire aucun profit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La frontière court/long terme est purement technique et opérationnelle : l’existence d’au moins un facteur fixe définit le court terme.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Court terme',
            stepTheme: 'PML, PmL et 3 zones',
            stepTitle: 'Productivités moyenne et marginale et les trois phases de production',
            paragraphText:
              'À capital fixe $\\bar{K}$, comment évolue la production quand on ajoute progressivement des travailleurs ? Trois phases successives apparaissent.\n' +
              '• **Zone I (rendements croissants)** : $PmL > PML$, donc la productivité moyenne $PML = Q/L$ augmente grâce à la division du travail.\n' +
              '• **Zone II (zone économiquement rationnelle)** : commence au maximum de $PML$ (où **$PmL = PML$**) et s’achève lorsque $PmL = 0$ (maximum de la production totale $Q$). $PmL$ est positive et décroissante.\n' +
              '• **Zone III (saturation / congestion)** : $PmL < 0$ (les travailleurs supplémentaires se gênent et font baisser la production totale !).\n' +
              '• **Exemple** : si $Q(L) = 12L^2 - L^3$, alors $PML = 12L - L^2$ (max en $L = 6$) et $PmL = 24L - 3L^2$ ($PmL(6) = 36 = PML(6)$, et $PmL = 0$ en $L = 8$).',
            formula: {
              name: 'Intersection entre PmL et PML',
              formula: '\\max(PML) \\iff \\frac{d(Q/L)}{dL} = 0 \\iff PmL = PML',
              note: 'Une firme rationnelle opère TOUJOURS dans la Zone II : entre max(PML) et max(Q).',
            },
            keyRule:
              'La productivité marginale PmL coupe toujours la productivité moyenne PML exactement en son maximum (début de la zone rationnelle II).',
            konanTip:
              'Fais l’analogie avec tes notes : si ta nouvelle note (PmL) dépasse ta moyenne (PML), ta moyenne monte ; dès qu’elle passe dessous, ta moyenne baisse !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'À court terme, si la productivité marginale du travail est supérieure à la productivité moyenne ($PmL > PML$), comment évolue la productivité moyenne $PML$ ?',
              options: [
                'Elle est nécessairement croissante',
                'Elle est décroissante',
                'Elle est négative',
                'Elle atteint déjà son minimum',
              ],
              correctAnswerIndex: 0,
              explanation:
                'C’est la règle générale de la moyenne et de la marge (comme une nouvelle note supérieure à ta moyenne) : tant que $PmL > PML$, la moyenne $PML$ est tirée vers le haut.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Isoquante',
            stepTheme: 'TMST',
            stepTitle: 'Isoquantes de production et Taux Marginal de Substitution Technique',
            paragraphText:
              'À long terme, une entreprise peut fabriquer la même quantité $Q_0$ avec beaucoup de main-d’œuvre et peu de machines, ou inversement avec beaucoup de robots et peu de salariés.\n' +
              '• **Isoquante** : lieu géométrique de tous les couples $(L, K)$ produisant exactement le même volume $Q_0$ (décroissante, convexe vers l’origine, sans intersection).\n' +
              '• **TMST** : quantité de capital $K$ que l’entreprise peut économiser lorsqu’elle embauche une unité supplémentaire de travail $L$, à production constante ($dQ = 0$) :\n' +
              '• **Formule** : $dQ = PmL\\,dL + PmK\\,dK = 0 \\implies TMST_{L/K} = -\\frac{dK}{dL} = \\frac{PmL}{PmK}$. Pour $Q = A K^\\alpha L^\\beta$, $TMST_{L/K} = \\frac{\\beta}{\\alpha}\\frac{K}{L}$.',
            formula: {
              name: 'Taux Marginal de Substitution Technique',
              formula: 'TMST_{L/K} = -\\frac{dK}{dL} = \\frac{PmL}{PmK} \\quad \\Big(\\text{Cobb-Douglas } A K^\\alpha L^\\beta : \\frac{\\beta}{\\alpha}\\cdot\\frac{K}{L}\\Big)',
              note: 'Vérifier quel facteur est en abscisse (L) et en ordonnée (K) : ici β (exposant de L) est au numérateur.',
            },
            keyRule:
              'Le long d’une isoquante (dQ = 0), le TMST_{L/K} = −dK/dL vaut toujours le rapport des productivités marginales PmL / PmK.',
            konanTip:
              'Piège d’exposants : dans Q = A·K^α·L^β, vérifie bien quel exposant appartient à L (numérateur de TMST_{L/K}) et lequel appartient à K (dénominateur) !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Pour la fonction de production $Q(K, L) = 4\\,K^{0,25} L^{0,75}$, quelle est l’expression du $TMST_{L/K} = PmL / PmK$ ?',
              options: [
                '$\\frac{1}{3} \\cdot \\frac{K}{L}$',
                '$3 \\cdot \\frac{L}{K}$',
                '$3 \\cdot \\frac{K}{L}$',
                '$4 \\cdot \\frac{K}{L}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$PmL = 3 K^{0,25} L^{-0,25}$ et $PmK = K^{-0,75} L^{0,75}$. Le rapport vaut $TMST_{L/K} = \\frac{0,75}{0,25} \\cdot \\frac{K}{L} = 3 \\frac{K}{L}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Optimum',
            stepTheme: 'Isocoût & Tangence',
            stepTitle: 'Droite d’isocoût et minimisation du coût par le Lagrangien',
            paragraphText:
              'Pour produire un objectif $Q_0$ au coût total le plus bas possible $C = wL + rK$ ($w$ = taux de salaire, $r$ = coût d’usage du capital), la firme cherche la droite d’isocoût la plus proche de l’origine tangente à l’isoquante $Q_0$.\n' +
              '• **Droite d’isocoût** : $K = \\frac{C}{r} - \\frac{w}{r} L$, de pente $-w/r$.\n' +
              '• **Lagrangien** : $\\mathcal{L}(K, L, \\mu) = wL + rK + \\mu\\big(Q_0 - F(K, L)\\big)$.\n' +
              '• **Condition d’optimalité** : $TMST_{L/K} = \\frac{PmL}{PmK} = \\frac{w}{r} \\iff \\frac{PmL}{w} = \\frac{PmK}{r}$ (chaque dernier FCFA dépensé en travail ou en capital doit apporter exactement la même production supplémentaire !).',
            keyRule:
              'Si $PmL/w > PmK/r$, le travail est plus productif par franc dépensé : l’entreprise doit substituer du travail au capital jusqu’à rétablir l’égalité.',
            konanTip:
              'Même réflexe que pour le consommateur : compare immédiatement PmL/w et PmK/r et réalloue le budget vers le facteur ayant le ratio le plus élevé.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Une entreprise paie $w = 10$ et $r = 20$. Au point actuel, $PmL = 30$ et $PmK = 40$. Minimise-t-elle son coût ?',
              options: [
                'Oui, car $PmK > PmL$',
                'Non : $PmL/w = 3 > PmK/r = 2$, elle doit utiliser plus de travail et moins de capital',
                'Non : elle doit utiliser plus de capital et moins de travail',
                'Oui, car $w + r = 30 = PmL$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1 FCFA de travail produit $30/10 = 3$ unités contre $40/20 = 2$ unités pour 1 FCFA de capital : embaucher plus de $L$ et réduire $K$ abaisse le coût total à production inchangée.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Expansion',
            stepTheme: 'Sentier d’expansion',
            stepTitle: 'Sentier d’expansion et fonctions de demande conditionnelle de facteurs',
            paragraphText:
              'En faisant varier l’objectif de production $Q$ à prix des facteurs $(w, r)$ constants, on relie tous les points de tangence optimaux : c’est le **sentier d’expansion de la firme**.\n' +
              '• **Relation directe** : la condition $TMST(K, L) = w/r$ donne directement l’équation du sentier (ex. $K = \\frac{\\alpha w}{\\beta r} L$ pour une Cobb-Douglas, une droite issue de l’origine !).\n' +
              '• **Demandes conditionnelles** $L^*(w, r, Q)$ et $K^*(w, r, Q)$ : obtenues en injectant le sentier d’expansion dans $F(K, L) = Q$.\n' +
              '• **Fonction de coût total de long terme** : $CT(Q) = w L^*(w, r, Q) + r K^*(w, r, Q)$. C’est ainsi que la théorie de la production engendre la théorie des coûts !',
            konanTip:
              'Pour une Cobb-Douglas, le sentier d’expansion est toujours une droite $K = (\\text{constante})\\cdot L$, ce qui signifie que l’intensité capitalistique $K/L$ dépend uniquement du prix relatif $w/r$ !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Pour $Q = K^{0,5} L^{0,5}$ avec $w = 9$ et $r = 4$, quelle est l’équation du sentier d’expansion $K$ en fonction de $L$ ?',
              options: [
                '$K = \\frac{4}{9} L$',
                '$K = 36 L$',
                '$K = L$',
                '$K = \\frac{9}{4} L$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$TMST_{L/K} = K/L = w/r = 9/4 \\implies K = \\frac{9}{4} L$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Échelle',
            stepTheme: 'Rendements d’échelle',
            stepTitle: 'Tester les rendements d’échelle sans les confondre avec PmL',
            paragraphText:
              'Multiplier simultanément TOUS les facteurs par un même coefficient $t > 1$ (ex. doubler la taille de l’usine ET doubler les effectifs) définit les **rendements d’échelle**.\n' +
              '• **Rendements d’échelle croissants ($k > 1$)** : doubler $(K, L)$ fait PLUS que doubler la production (économies d’échelle : spécialisation, effets de taille, infrastructures numériques).\n' +
              '• **Rendements d’échelle constants ($k = 1$)** : doubler $(K, L)$ double exactement $Q$.\n' +
              '• **Rendements d’échelle décroissants ($k < 1$)** : doubler $(K, L)$ fait MOINS que doubler $Q$ (lourdeurs bureaucratiques, coûts de coordination).\n' +
              '• **Piège fatal** : une fonction $Q = K^{0,6} L^{0,6}$ a des rendements d’échelle **croissants** ($0,6 + 0,6 = 1,2 > 1$), tout en ayant des productivités marginales **décroissantes** à court terme (car chaque exposant individuel $< 1$) !',
            keyRule:
              'Rendements marginaux = court terme (1 seul facteur varie, regarder chaque exposant individuellement). Rendements d’échelle = long terme (K et L varient ensemble, regarder $\\alpha + \\beta$).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Soit la fonction de production $Q = 10\\,K^{0,7} L^{0,5}$. Que peut-on affirmer sur ses rendements marginaux (court terme) et ses rendements d’échelle (long terme) ?',
              options: [
                'Rendements marginaux décroissants ($0,7 < 1$ et $0,5 < 1$) et rendements d’échelle croissants ($0,7 + 0,5 = 1,2 > 1$)',
                'Rendements marginaux croissants et rendements d’échelle décroissants',
                'Rendements marginaux et rendements d’échelle tous deux constants',
                'Rendements marginaux décroissants et rendements d’échelle décroissants',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À court terme, chaque exposant est inférieur à 1 ⇒ dérivées secondes négatives (rendements marginaux décroissants). À long terme, $F(tK, tL) = t^{1,2} F(K, L)$ avec $1,2 > 1$ ⇒ rendements d’échelle croissants.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch4_p2',
        order: 2,
        title: 'Théorie des coûts de production (CF, CV, CT, CM, Cm) et seuils de décision',
        summary:
          'Calculer CF, CV, CT, CFM, CVM, CM et Cm, maîtriser la propriété d’intersection de Cm avec les minimums de CM et CVM, et déterminer seuil de rentabilité et seuil de fermeture.',
        conceptExplanation:
          'En microéconomie, le **coût économique** inclut les coûts explicites (salaires, loyers, achats) mais aussi les **coûts implicites** (coût d’opportunité du capital propre ou du temps de l’entrepreneur).\n\n' +
          'À court terme, le coût total se décompose en :\n' +
          '$$CT(Q) = CF + CV(Q)$$\n' +
          '• **Coûts fixes ($CF$)** : indépendants de $Q$ (loyer, amortissement des serveurs), à payer même si $Q = 0$.\n' +
          '• **Coûts variables ($CV(Q)$)** : augmentent avec $Q$ (matières premières, énergie, heures travaillées), nuls si $Q = 0$.\n' +
          '• **Coûts moyens** : $CM = CT/Q = CFM + CVM$, avec $CFM = CF/Q$ (toujours décroissant) et $CVM = CV/Q$.\n' +
          '• **Coût marginal ($Cm$)** : coût de la dernière unité produite, $Cm = dCT/dQ = dCV/dQ$ (**totalement indépendant de $CF$** !).\n\n' +
          'Propriété géométrique capitale : la courbe en U de $Cm$ coupe les courbes de $CVM$ et de $CM$ exactement en leurs minimums respectifs, définissant le **seuil de fermeture** ($\\min CVM$) et le **seuil de rentabilité** ($\\min CM$).',
        keyRule:
          '$Cm$ ne dépend jamais des coûts fixes $CF$. Il coupe $CM$ au **seuil de rentabilité** ($\\min CM$) et $CVM$ au **seuil de fermeture** ($\\min CVM$).',
        formulas: [
          {
            name: 'Famille complète des coûts de court terme',
            formula: 'CT = CF + CV(Q) \\quad | \\quad CM = \\frac{CT}{Q} = \\frac{CF}{Q} + \\frac{CV}{Q} \\quad | \\quad Cm = \\frac{dCT}{dQ} = \\frac{dCV}{dQ}',
            note: 'Si Cm < CM, alors CM baisse ; si Cm > CM, alors CM monte ; si Cm = CM, alors CM est minimum !',
          },
          {
            name: 'Seuils de rentabilité et de fermeture',
            formula: '\\text{Seuil de rentabilité} : P_{SR} = \\min CM \\;(Cm = CM) \\quad | \\quad \\text{Seuil de fermeture} : P_{SF} = \\min CVM \\;(Cm = CVM)',
            note: 'La courbe d’offre de court terme de la firme est la branche croissante de Cm située AU-DESSUS de P_SF.',
          },
        ],
        workedExample: {
          title: 'Étude complète d’une fonction de coût cubique / quadratique',
          statement:
            'Une entreprise tech a pour coût total de court terme $CT(Q) = Q^2 + 2Q + 16$ (en millions FCFA). Calculez $CF$, $CV$, $CM$, $CVM$, $Cm$, puis le seuil de rentabilité et le seuil de fermeture.',
          methodSteps: [
            'Décomposition : $CF = CT(0) = 16$ ; $CV(Q) = Q^2 + 2Q$.',
            'Coûts moyens : $CFM = 16/Q$ ; $CVM(Q) = CV/Q = Q + 2$ ; $CM(Q) = Q + 2 + 16/Q$.',
            'Coût marginal : $Cm(Q) = dCT/dQ = 2Q + 2$.',
            'Seuil de rentabilité ($\\min CM \\iff Cm = CM$) : $2Q + 2 = Q + 2 + 16/Q \\implies Q = 16/Q \\implies Q^2 = 16 \\implies Q_{SR} = 4$. Alors $P_{SR} = CM(4) = 4 + 2 + 4 = 10$ (et $Cm(4) = 10$).',
            'Seuil de fermeture ($\\min CVM$) : ici $CVM(Q) = Q + 2$ est croissant pour $Q \\ge 0$, donc son minimum est atteint quand $Q \\to 0$ : $P_{SF} = 2$.',
          ],
          conclusion:
            'Dès $P \\ge 10$, la firme réalise un profit positif ; entre $P = 2$ et $P = 10$, elle perd de l’argent mais continue à produire à court terme ; sous $P = 2$, elle ferme immédiatement.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Tableau coûts',
            stepTheme: 'CF, CV, CT & Économique',
            stepTitle: 'Coût économique, coûts fixes, coûts variables et tableau complet',
            paragraphText:
              'Ne confonds jamais le profit comptable avec le profit économique ! L’économiste intègre dans le coût total le **coût d’opportunité** de toutes les ressources mobilisées (même le local appartenant au dirigeant).\n' +
              '• **Coûts fixes ($CF$)** : restent identiques quel que soit $Q$ (ex. $CF = 100$). Ils pèsent de moins en moins par unité produite ($CFM = CF/Q$ tend vers 0 : « étalement des frais fixes »).\n' +
              '• **Coûts variables ($CV(Q)$)** : varient avec l’activité ($CV(0) = 0$).\n' +
              '• **Lecture numérique** : le tableau ci-dessous détaille toutes les colonnes pour $CT(Q) = Q^2 + 4Q + 100$ et fait apparaître le minimum exact de $CM$ en $Q = 10$ ($CM = Cm = 24$).',
            keyRule:
              'Un profit économique nul signifie que l’entreprise couvre tous ses coûts explicites ET rémunère son capital et son entrepreneur exactement à leur coût d’opportunité (« profit normal »).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau complet des coûts pour CT(Q) = Q² + 4Q + 100',
              caption: 'Observer que CF est constant (100), CFM baisse continûment, et Cm = CM = 24 exactement au minimum de CM (Q = 10).',
              tableData: {
                headers: ['$Q$', '$CF$', '$CV$', '$CT$', '$CFM$', '$CVM$', '$CM$', '$Cm = 2Q+4$'],
                rows: [
                  [0, 100, 0, 100, '—', '—', '—', 4],
                  [2, 100, 12, 112, 50, 6, 56, 8],
                  [5, 100, 45, 145, 20, 9, 29, 14],
                  [10, 100, 140, 240, 10, 14, '24 (min)', '24 (= CM)'],
                  [20, 100, 480, 580, 5, 24, 29, 44],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Pour la fonction de coût total $CT(Q) = 3Q^2 + 12Q + 75$, que valent les coûts fixes ($CF$), le coût variable moyen ($CVM$) et le coût moyen ($CM$) pour $Q = 5$ ?',
              options: [
                '$CF = 75$, $CVM = 27$ et $CM = 42$',
                '$CF = 12$, $CVM = 27$ et $CM = 30$',
                '$CF = 75$, $CVM = 15$ et $CM = 30$',
                '$CF = 75$, $CVM = 42$ et $CM = 27$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$CF = CT(0) = 75$. $CV(5) = 3(25) + 12(5) = 135 \\implies CVM(5) = 135/5 = 27$. $CT(5) = 210 \\implies CM(5) = 210/5 = 42$ (soit $CFM = 15 + CVM = 27$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Coût marginal',
            stepTheme: 'Dérivée de CT',
            stepTitle: 'Calculer le coût marginal et comprendre l’indépendance aux coûts fixes',
            paragraphText:
              'Toute décision rationnelle de production (« dois-je fabriquer cette 101e unité ? ») repose sur le **coût marginal** $Cm$, et jamais sur le coût fixe déjà engagé (coût irrécupérable).\n' +
              '• **Définition continue** : $Cm(Q) = \\frac{dCT}{dQ} = \\frac{d(CF + CV)}{dQ} = \\frac{dCV}{dQ}$ (car la dérivée d’une constante $CF$ est nulle !).\n' +
              '• **Définition discrète** : $Cm(Q) = CT(Q) - CT(Q - 1) = CV(Q) - CV(Q - 1)$.\n' +
              '• **Lien avec la productivité marginale** : $Cm = \\frac{w}{PmL}$. Quand les rendements marginaux décroissent ($PmL \\downarrow$), le coût marginal **augmente** automatiquement !',
            formula: {
              name: 'Dualité coût marginal / productivité marginale',
              formula: 'Cm = \\frac{dCT}{dQ} = \\frac{w}{PmL}',
              note: 'La forme en U de Cm est le reflet exact (en miroir) de la courbe en cloche de PmL !',
            },
            konanTip:
              'Piège fréquent : si le loyer d’une usine ($CF$) double, son $CM$ monte mais son coût marginal $Cm$ reste STRICTEMENT INCHANGÉ !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Une entreprise a pour coût total $CT(Q) = Q^3 - 6Q^2 + 20Q + 500$. Son loyer annuel augmente de 200 (soit $CF = 700$). Que devient son coût marginal $Cm(Q)$ ?',
              options: [
                '$3Q^2 - 12Q + 220$',
                '$3Q^2 - 12Q + 700$',
                '$3Q^2 - 12Q + 20$ (strictement inchangé)',
                '$Q^2 - 6Q + 20 + 700/Q$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La dérivée des coûts fixes est toujours nulle : $Cm(Q) = dCT/dQ = 3Q^2 - 12Q + 20$, totalement indépendant du loyer fixe.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Courbes en U',
            stepTheme: 'Intersection Cm = CM',
            stepTitle: 'Géométrie des courbes CM, CVM et Cm : le croisement aux minimums',
            paragraphText:
              'Observe sur le graphique ci-dessous les relations mathématiques universelles qui relient $Cm$, $CM$ et $CVM$ :\n' +
              '• **Zone décroissante** : tant que $Cm < CM$ (la dernière unité coûte moins cher que la moyenne), elle tire le coût moyen $CM$ vers le bas.\n' +
              '• **Minimum exact** : lorsque $Cm = CM$, la dérivée de $CM$ s’annule ($CM’ = 0$) ⇒ **$Cm$ coupe $CM$ exactement en son minimum** (ici en $Q = 4$, $CM = Cm = 10$).\n' +
              '• **Zone croissante** : dès que $Cm > CM$, chaque nouvelle unité coûte plus cher que la moyenne et fait remonter $CM$.\n' +
              '• **Écart vertical $CM - CVM$** : vaut $CFM = CF/Q$, qui rétrécit continuellement quand $Q$ grandit.',
            keyRule:
              'Pour trouver $\\min(CM)$, tu as deux méthodes équivalentes : annuler la dérivée $CM’(Q) = 0$ OU résoudre directement $Cm(Q) = CM(Q)$ (souvent beaucoup plus rapide !).',
            visualSchema: {
              type: 'function_plot',
              title: 'Courbes de Coût Moyen (CM), Coût Variable Moyen (CVM) et Coût Marginal (Cm)',
              caption: 'Pour CT(Q) = Q² + 2Q + 16 : Cm = 2Q + 2 (orange) coupe CM = Q + 2 + 16/Q (bleu) exactement à son minimum SR(4 ; 10). CVM = Q + 2 (vert).',
              plot: {
                xMin: 0,
                xMax: 8,
                yMin: 0,
                yMax: 22,
                xStep: 1,
                yStep: 4,
                curves: [
                  {
                    label: 'CM(Q) = Q + 2 + 16/Q',
                    color: 'blue',
                    pieces: [{ expr: 'x + 2 + 16/x', from: 0.9, to: 7.8 }],
                  },
                  {
                    label: 'Cm(Q) = 2Q + 2',
                    color: 'orange',
                    pieces: [{ expr: '2*x + 2', from: 0, to: 7.8 }],
                  },
                  {
                    label: 'CVM(Q) = Q + 2',
                    color: 'green',
                    pieces: [{ expr: 'x + 2', from: 0, to: 7.8 }],
                  },
                ],
                points: [
                  { x: 4, y: 10, label: 'SR (4 ; 10) = min CM', filled: true, color: 'orange' },
                  { x: 0, y: 2, label: 'SF (0 ; 2) = min CVM', filled: true, color: 'green' },
                ],
                horizontalLines: [{ y: 10, label: 'P_SR = 10', color: 'violet' }],
              },
            },
            konanTip:
              'Pour CT(Q) = aQ² + bQ + CF, retiens le raccourci magique du minimum de CM : Q_SR = √(CF / a) ! Vérifie : √(50/2) = √25 = 5 !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Pour un coût total $CT(Q) = 2Q^2 + 10Q + 50$, pour quelle quantité $Q$ le coût moyen $CM(Q)$ atteint-il son minimum, et combien vaut ce minimum ?',
              options: [
                '$Q = 10$ et $\\min CM = 35$',
                '$Q = 5$ et $\\min CM = 30$',
                '$Q = 25$ et $\\min CM = 62$',
                '$Q = 5$ et $\\min CM = 20$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$CM = 2Q + 10 + 50/Q$ et $Cm = 4Q + 10$. On pose $Cm = CM \\implies 4Q + 10 = 2Q + 10 + 50/Q \\implies 2Q^2 = 50 \\implies Q^2 = 25 \\implies Q = 5$. Alors $\\min CM = 4(5) + 10 = 30$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Seuils',
            stepTheme: 'Rentabilité vs Fermeture',
            stepTitle: 'Calculer seuil de rentabilité et seuil de fermeture sur un coût cubique',
            paragraphText:
              'Sur une fonction cubique standard $CT(Q) = aQ^3 - bQ^2 + cQ + CF$, les courbes $CVM$ et $CM$ sont toutes deux en U : leurs minimums définissent deux prix critiques.\n' +
              '• **Seuil de fermeture ($P_{SF} = \\min CVM$)** : s’obtient en résolvant $CVM’(Q) = 0$ (ou $Cm = CVM$). Sous ce prix, les recettes ne couvrent même pas les matières premières et salaires variables ⇒ fermer ($Q = 0$).\n' +
              '• **Seuil de rentabilité ($P_{SR} = \\min CM$)** : s’obtient en résolvant $Cm = CM$. À ce prix, le profit économique est exactement nul ($\\pi = 0$).\n' +
              '• **Exemple** : si $CT = Q^3 - 6Q^2 + 15Q + 32$, alors $CVM = Q^2 - 6Q + 15$. $CVM’ = 2Q - 6 = 0 \\implies Q_{SF} = 3$ et $P_{SF} = 9 - 18 + 15 = 6$.',
            formula: {
              name: 'Détermination analytique des deux seuils',
              formula: 'P_{SF} = \\min CVM \\;(CVM’ = 0) \\quad \\le \\quad P_{SR} = \\min CM \\;(CM’ = 0)',
              note: 'Le seuil de fermeture est TOUJOURS inférieur ou égal au seuil de rentabilité (égalité uniquement si CF = 0).',
            },
            keyRule:
              'Le seuil de fermeture est le minimum du CVM (CVM’ = 0) et le seuil de rentabilité est le minimum du CM (CM’ = 0).',
            konanTip:
              'Si le coût variable est purement quadratique CV = aQ² + bQ, alors CVM = aQ + b est croissant dès Q = 0 : le seuil de fermeture est simplement P_SF = b !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Une firme a pour coût variable $CV(Q) = Q^3 - 8Q^2 + 25Q$ (et $CF = 100$). Quel est son seuil de fermeture $P_{SF} = \\min CVM$ ?',
              options: [
                '$P_{SF} = 25$',
                '$P_{SF} = 16$',
                '$P_{SF} = 4$',
                '$P_{SF} = 9$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$CVM(Q) = Q^2 - 8Q + 25$. Sa dérivée $2Q - 8 = 0$ s’annule en $Q = 4$. D’où $P_{SF} = CVM(4) = 16 - 32 + 25 = 9$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège CT',
            stepTheme: 'Produire à perte',
            stepTitle: 'Pourquoi continuer à produire à court terme même si le profit est négatif ?',
            paragraphText:
              'Voici l’un des pièges préférés des examens de microéconomie : « Si une entreprise fait des pertes ($\\pi < 0$), doit-elle fermer immédiatement à court terme ? » **NON, pas nécessairement !**\n' +
              '• **Si la firme ferme ($Q = 0$)** : ses recettes sont nulles mais elle doit quand même payer ses coûts fixes engagés ⇒ sa perte vaut $-CF$.\n' +
              '• **Si $P_{SF} < P < P_{SR}$** (soit $\\min CVM < P < \\min CM$) : en produisant, sa recette dépasse ses coûts variables ($P\\cdot Q > CV$). L’excédent $(RT - CV > 0)$ rembourse une partie des coûts fixes ⇒ sa perte est **strictement inférieure à $CF$** !\n' +
              '• **Conclusion** : à court terme, produire minimise la perte tant que $P \\ge \\min CVM$ ; ce n’est qu’en dessous de $\\min CVM$ qu’il faut fermer ($Q = 0$).',
            keyRule:
              'Règle de court terme : $P < \\min CVM \\implies$ Fermer ; $\\min CVM \\le P < \\min CM \\implies$ Produire à perte ; $P \\ge \\min CM \\implies$ Produire avec profit $\\ge 0$.',
            konanTip:
              'Un hôtel de vacances à Assinie reste ouvert en basse saison tant que le tarif de la chambre couvre les frais variables (ménage, électricité, personnel journalier), même s’il ne couvre pas tout le crédit immobilier fixe !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Une PME a $\\min CVM = 15$, $\\min CM = 25$ et des coûts fixes $CF = 100$. Si le prix du marché tombe temporairement à $P = 20$, quelle décision est rationnelle à court terme ?',
              options: [
                'Continuer à produire (au niveau où $Cm = 20$), car elle couvre tous ses coûts variables et amortit une partie de ses coûts fixes, perdant moins que $-100$',
                'Fermer immédiatement l’usine afin de ramener sa perte à zéro',
                'Fermer immédiatement car le prix est inférieur au coût moyen minimum',
                'Doubler sa production quel que soit son coût marginal',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $15 = \\min CVM < P = 20 < \\min CM = 25$, chaque unité vendue dégage une marge positive sur coût variable qui réduit la perte en deçà de $-CF = -100$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Long terme',
            stepTheme: 'Courbe enveloppe',
            stepTitle: 'Coût moyen de long terme, économies et déséconomies d’échelle',
            paragraphText:
              'À long terme, l’entreprise choisit librement la taille optimale de son usine ($K$) pour chaque niveau de production $Q$. La courbe de **coût moyen de long terme ($CMLT$)** est la **courbe enveloppe** inférieure de toutes les courbes de coût moyen de court terme.\n' +
              '• **Zone décroissante de $CMLT$ (économies d’échelle)** : rendements d’échelle croissants ($k > 1$), le coût unitaire baisse quand l’entreprise grandit (spécialisation, remises achats, amortissement de la R&D logicielle).\n' +
              '• **Minimum de $CMLT$ (taille minimale efficace)** : rendements d’échelle constants ($k = 1$).\n' +
              '• **Zone croissante de $CMLT$ (déséconomies d’échelle)** : rendements d’échelle décroissants ($k < 1$) dus à la complexité managériale et aux coûts de coordination des géants.',
            keyRule:
              'Économies d’échelle $\\iff CMLT$ décroissant (rendements croissants) ; Déséconomies d’échelle $\\iff CMLT$ croissant (rendements décroissants).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Lorsque la production d’une entreprise augmente à long terme et que son coût moyen de long terme ($CMLT$) diminue continuellement, de quel phénomène bénéficie-t-elle ?',
              options: [
                'De déséconomies d’échelle',
                'D’économies d’échelle (liées à des rendements d’échelle croissants)',
                'D’une perte sèche de monopole',
                'De rendements d’échelle strictement décroissants',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La baisse du coût moyen de long terme lorsque la taille de production croît définit précisément les économies d’échelle.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch4_p3',
        order: 3,
        title: 'Concurrence Pure et Parfaite (CPP) : équilibre de court et long terme',
        summary:
          'Maîtriser les 5 hypothèses de la CPP, le comportement price-taker (P = Cm), l’offre individuelle et de branche, l’annulation du profit à long terme et l’optimum de Pareto.',
        conceptExplanation:
          'La **Concurrence Pure et Parfaite (CPP)** est le modèle de référence de la microéconomie, défini par cinq conditions cumulatives : **atomicité** (multitude de petits acheteurs et vendeurs sans pouvoir individuel), **homogénéité du produit**, **libre entrée et libre sortie (fluidité)**, **transparence parfaite** de l’information et **mobilité parfaite** des facteurs.\n\n' +
          '• **Comportement price-taker** : chaque firme prend le prix de marché $P$ comme une donnée ($RT = P \\cdot Q \\implies RM = Rm = P$). Elle maximise son profit $\\pi(Q) = P\\cdot Q - CT(Q)$ lorsque :\n' +
          '$$P = Cm(Q) \\quad \\text{avec} \\quad Cm’(Q) > 0 \\quad \\text{et} \\quad P \\ge \\min CVM$$\n' +
          '• **Offre de court terme** : la courbe d’offre individuelle coïncide avec la partie croissante de $Cm$ au-dessus du seuil de fermeture ; l’offre de branche s’obtient par sommation horizontale des offres individuelles.\n' +
          '• **Équilibre de long terme** : si $\\pi > 0$, de nouvelles firmes entrent, déplaçant l’offre de marché à droite et faisant baisser $P$ jusqu’à annuler les profits économiques :\n' +
          '$$P^*_{LT} = Cm(Q^*) = \\min CM(Q^*) \\implies \\pi^*_{LT} = 0$$',
        keyRule:
          'En CPP : Court terme $\\implies P = Cm$ (profit possiblement $>0$, $=0$ ou $<0$). Long terme (libre entrée) $\\implies P = Cm = \\min CM$ (profit économique nul et efficience maximale).',
        formulas: [
          {
            name: 'Maximisation du profit en CPP (court terme)',
            formula: '\\max_Q \\pi(Q) = P\\cdot Q - CT(Q) \\iff P = Cm(Q) \\;\\text{ et }\\; Cm’(Q) > 0',
            note: 'Condition de second ordre indispensable : si P = Cm sur la partie décroissante de Cm, c’est un minimum de profit !',
          },
          {
            name: 'Double efficience de l’équilibre de long terme en CPP',
            formula: 'P^*_{LT} = Cm(Q^*) = \\min CM(Q^*) \\implies \\pi^*_{LT} = 0',
            note: 'P = Cm assure l’efficience allocative ; P = min CM assure l’efficience productive (coût unitaire minimal).',
          },
        ],
        workedExample: {
          title: 'Déterminer les équilibres de court et long terme d’une branche en CPP',
          statement:
            'Chaque firme identique d’une branche en CPP a pour coût total $CT(q) = q^2 + 4q + 100$. La demande du marché est $Q^D = 1\\,200 - 10P$. 1) À court terme, il y a $N = 50$ firmes : calculez $P^*_{CT}$, $q^*$ et le profit $\\pi$. 2) À long terme, trouvez $P^*_{LT}$, $q^*_{LT}$ et le nombre final de firmes $N^*_{LT}$.',
          methodSteps: [
            'Offre individuelle : $P = Cm(q) = 2q + 4 \\implies q^s(P) = 0,5P - 2$ (pour $P \\ge P_{SF} = 4$).',
            'Offre de branche à court terme ($N = 50$) : $Q^S(P) = 50(0,5P - 2) = 25P - 100$.',
            'Équilibre CT ($Q^S = Q^D$) : $25P - 100 = 1\\,200 - 10P \\implies 35P = 1\\,300$... prenons $Q^D = 1\\,200 - 15P$ : non, gardons exact : $P^*_{CT} = 1\\,300/35 \\approx 37,14$, $q^* \\approx 16,57$, $\\pi = Pq^* - CT(q^*) \\approx 174,6 > 0$.',
            'Long terme : les profits positifs attirent de nouvelles firmes jusqu’à $P^*_{LT} = \\min CM$. Or $Cm = CM \\iff 2q + 4 = q + 4 + 100/q \\implies q^*_{LT} = 10$ et $P^*_{LT} = 2(10) + 4 = 24$.',
            'Quantité totale demandée à $P^*_{LT} = 24$ : $Q^*_{LT} = 1\\,200 - 10(24) = 960$. Nombre de firmes à long terme : $N^*_{LT} = Q^*_{LT} / q^*_{LT} = 960 / 10 = 96$ firmes.',
          ],
          conclusion:
            'À long terme, 46 nouvelles firmes entrent sur le marché, faisant chuter le prix jusqu’au minimum du coût moyen ($P^*_{LT} = 24$) où le profit économique s’annule.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '5 conditions',
            stepTheme: 'Hypothèses CPP',
            stepTitle: 'Les cinq conditions cumulatives de la Concurrence Pure et Parfaite',
            paragraphText:
              'La Concurrence Pure et Parfaite réunit trois conditions de « concurrence pure » et deux conditions de « concurrence parfaite » :\n' +
              '• **Atomicité** : grand nombre de petits acheteurs et vendeurs, aucun ne pouvant influencer seul le prix du marché.\n' +
              '• **Homogénéité du produit** : les biens vendus par toutes les firmes sont rigoureusement identiques aux yeux des clients (pas de marque ni différenciation).\n' +
              '• **Libre entrée et libre sortie (fluidité)** : aucune barrière réglementaire, financière ou technologique n’empêche une firme d’entrer ou de quitter le marché.\n' +
              '• **Transparence** (information parfaite et gratuite sur prix et qualités) et **Mobilité parfaite** des facteurs de production ($K$ et $L$ se déplacent instantanément).',
            keyRule:
              'Si UNE SEULE des 5 hypothèses de la CPP est violée, le marché bascule dans la concurrence imparfaite (monopole, oligopole ou concurrence monopolistique).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'L’imposition par l’État d’une licence coûteuse et limitée en nombre pour opérer un réseau de téléphonie mobile viole principalement quelle hypothèse de la CPP ?',
              options: [
                'L’homogénéité des produits',
                'La libre entrée et libre sortie (fluidité du marché)',
                'La rationalité du consommateur',
                'La loi des rendements décroissants',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une licence obligatoire et contingentée constitue une barrière légale à l’entrée, violant directement l’hypothèse de fluidité (libre entrée/sortie).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Price-taker',
            stepTheme: 'RM = Rm = P',
            stepTitle: 'La firme preneuse de prix (price-taker) et la demande horizontale',
            paragraphText:
              'Parce qu’elle est minuscule face au marché (atomicité) et vend un produit identique à ses rivales (homogénéité), la firme en CPP est **preneuse de prix** (*price-taker*).\n' +
              '• **Demande individuelle infiniment élastique** : au prix du marché $P$, elle peut vendre toute sa production ; si elle augmente son prix d’un seul franc, ses ventes tombent à zéro ; et elle n’a aucun intérêt à vendre en dessous de $P$.\n' +
              '• **Conséquence sur les recettes** : $RT(Q) = P \\cdot Q$ (droite passant par l’origine) ⇒ Recette Moyenne $RM = RT/Q = P$ et **Recette Marginale $Rm = dRT/dQ = P$**.\n' +
              '• **Condition du profit maximal** : la règle universelle $Rm = Cm$ devient donc spécifiquement **$P = Cm(Q)$** en CPP !',
            formula: {
              name: 'Identité des recettes en CPP',
              formula: 'RT = P \\cdot Q \\implies RM = Rm = P \\implies \\text{Optimum} : P = Cm(Q)',
              note: 'C’est uniquement en CPP que Rm = P ; en monopole, Rm < P !',
            },
            keyRule:
              'En CPP, la firme est preneuse de prix : sa recette moyenne et sa recette marginale sont toutes deux égales au prix P, d’où la règle d’équilibre P = Cm.',
            konanTip:
              'Ne résous jamais Rm = 0 pour maximiser un profit : Rm = 0 maximise la recette totale, tandis que Rm = Cm maximise le profit !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Pourquoi la recette marginale ($Rm$) d’une entreprise en Concurrence Pure et Parfaite est-elle toujours exactement égale au prix de marché $P$ ?',
              options: [
                'Parce que l’entreprise fixe librement son prix comme un monopole',
                'Parce que ses coûts fixes sont nuls',
                'Parce qu’elle est preneuse de prix (price-taker) et peut vendre chaque unité supplémentaire au prix constant $P$ sans devoir baisser le prix des unités précédentes',
                'Parce que la demande globale du marché est verticale',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Étant price-taker, $P$ est indépendant de sa quantité individuelle $q$ : chaque unité vendue en plus rapporte exactement $P$, donc $Rm = d(Pq)/dq = P$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul CPP',
            stepTheme: 'Quantité & Profit CT',
            stepTitle: 'Déterminer la quantité optimale et le profit de court terme en CPP',
            paragraphText:
              'Pour calculer le comportement optimal d’une firme concurrentielle face à un prix $P$ donné, applique cette check-list en trois temps.\n' +
              '• **Étape 1** : dérive $CT(Q)$ pour obtenir $Cm(Q)$ et résous $P = Cm(Q)$ (en vérifiant $Cm’(Q^*) > 0$).\n' +
              '• **Étape 2** : vérifie que $P \\ge P_{SF} = \\min CVM$ (sinon la réponse optimale est $Q^* = 0$ !).\n' +
              '• **Étape 3** : calcule le profit $\\pi^* = P\\cdot Q^* - CT(Q^*) = (P - CM(Q^*))\\cdot Q^*$.\n' +
              '• **Exemple** : si $CT(Q) = 2Q^2 + 6Q + 50$ et $P = 30$, alors $Cm = 4Q + 6 = 30 \\implies Q^* = 6$ ($P = 30 > P_{SF} = 6$). $RT = 180$, $CT(6) = 72 + 36 + 50 = 158 \\implies \\pi^* = +22$.',
            konanTip:
              'Pour une fonction quadratique $CT = aQ^2 + bQ + CF$, $P_{SF} = b$. Dès que $P > b$, résous simplement $2aQ + b = P \\implies Q^* = (P - b)/(2a)$ !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Une entreprise en CPP a pour coût total $CT(Q) = Q^2 + 10Q + 64$. Si le prix du marché vaut $P = 30$, quels sont sa quantité optimale $Q^*$ et son profit $\\pi^*$ ?',
              options: [
                '$Q^* = 10$ et $\\pi^* = +36$',
                '$Q^* = 15$ et $\\pi^* = +50$',
                '$Q^* = 10$ et $\\pi^* = -36$',
                '$Q^* = 8$ et $\\pi^* = 0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$Cm(Q) = 2Q + 10 = 30 \\implies 2Q = 20 \\implies Q^* = 10$ ($P = 30 > P_{SF} = 10$). $RT = 30 \\times 10 = 300$ ; $CT(10) = 100 + 100 + 64 = 264$. Profit $\\pi^* = 300 - 264 = +36$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Branche',
            stepTheme: 'Offre agrégée',
            stepTitle: 'Passer de l’offre individuelle à l’offre globale de la branche',
            paragraphText:
              'La fonction d’offre individuelle de court terme s’obtient en inversant $P = Cm(q)$ pour exprimer $q$ en fonction de $P$ (pour tout $P \\ge P_{SF}$).\n' +
              '• **Sommation horizontale** : si la branche compte $N$ firmes identiques, l’offre agrégée vaut $Q^S(P) = N \\cdot q^s(P)$.\n' +
              '• **Équilibre de la branche** : la confrontation de $Q^S(P)$ et de la demande de marché $Q^D(P)$ fixe le prix d’équilibre $P^*$ que chaque firme prend ensuite comme une donnée !\n' +
              '• **Exemple** : 100 producteurs d’ananas ayant chacun $q^s(P) = 0,5P - 10$ génèrent une offre globale $Q^S(P) = 50P - 1\\,000$ (pour $P \\ge 20$).',
            keyRule:
              'L’offre de branche à court terme s’obtient par sommation horizontale des offres individuelles : Q^S(P) = N·q^s(P) pour N firmes identiques.',
            konanTip:
              'N’oublie jamais de préciser le domaine de validité (P ≥ P_SF) quand tu écris la fonction d’offre de la branche !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Une branche en CPP rassemble 40 firmes identiques ayant chacune pour coût marginal $Cm(q) = 4q + 8$ (avec $P_{SF} = 8$). Quelle est l’équation de l’offre agrégée $Q^S(P)$ de la branche pour $P \\ge 8$ ?',
              options: [
                '$Q^S(P) = 40P - 8$',
                '$Q^S(P) = 10P - 80$',
                '$Q^S(P) = 160P + 320$',
                '$Q^S(P) = 10P - 20$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Offre individuelle : $P = 4q + 8 \\implies q^s(P) = 0,25P - 2$. En multipliant par $N = 40$ firmes : $Q^S(P) = 40(0,25P - 2) = 10P - 80$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Long terme',
            stepTheme: 'Libre entrée & π = 0',
            stepTitle: 'Dynamique de libre entrée/sortie et annulation du profit à long terme',
            paragraphText:
              'Pourquoi le profit économique (ou « surprofit ») disparaît-il inévitablement à long terme en Concurrence Pure et Parfaite ? Tout repose sur la libre entrée et sortie.\n' +
              '• **Si $\\pi > 0$ à court terme** : ces surprofits attirent de nouveaux entrepreneurs. L’offre de branche se déplace vers la droite ⇒ le prix $P$ baisse jusqu’à atteindre $\\min CM$, où $\\pi = 0$ et les entrées cessent.\n' +
              '• **Si $\\pi < 0$ à court terme** : les firmes déficitaires quittent le marché. L’offre recule vers la gauche ⇒ le prix $P$ remonte jusqu’à $\\min CM$, rétablissant $\\pi = 0$.\n' +
              '• **Équilibre stationnaire de long terme** : chaque firme produit à sa **taille minimale efficace** ($q^*_{LT}$ tel que $Cm = \\min CM$), et le nombre de firmes vaut $N^* = Q^D(P^*_{LT}) / q^*_{LT}$.',
            keyRule:
              'À long terme en CPP : $P^*_{LT} = \\min CM$, $\\pi^* = 0$ (profit normal uniquement), et la courbe d’offre de long terme d’une branche à coûts constants est horizontale au niveau $P = \\min CM$ !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Dans une branche en CPP à long terme, chaque firme a pour coût total $CT(q) = q^2 + 6q + 25$ et la demande de marché est $Q^D = 560 - 10P$. Quel est le prix de long terme $P^*_{LT}$ et combien de firmes $N^*$ opèrent à l’équilibre ?',
              options: [
                '$P^*_{LT} = 16$ et $N^* = 80$ firmes',
                '$P^*_{LT} = 25$ et $N^* = 50$ firmes',
                '$P^*_{LT} = 16$ et $N^* = 40$ firmes',
                '$P^*_{LT} = 11$ et $N^* = 90$ firmes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Minimum de $CM$ : $2q + 6 = q + 6 + 25/q \\implies q^*_{LT} = 5$, donc $P^*_{LT} = 2(5) + 6 = 16$. Quantité de marché : $Q^D(16) = 560 - 160 = 400$. Nombre de firmes : $N^* = 400 / 5 = 80$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Pareto',
            stepTheme: 'Double efficience',
            stepTitle: 'Optimum de Pareto : efficience allocative et efficience productive',
            paragraphText:
              'L’équilibre de long terme en CPP réalise simultanément les deux formes suprêmes d’efficience économique (Premier théorème du bien-être).\n' +
              '• **Efficience allocative ($P = Cm$)** : le prix payé par le consommateur (qui mesure la valeur sociale de la dernière unité) est exactement égal au coût marginal des ressources mobilisées pour la produire ⇒ **surplus social maximal**, perte sèche nulle.\n' +
              '• **Efficience productive ($P = \\min CM$)** : chaque unité est fabriquée au coût unitaire le plus bas techniquement réalisable ; aucun gaspillage de ressources n’est toléré par la concurrence.\n' +
              '• **Optimum de Pareto** : impossible d’améliorer le bien-être d’un agent sans détériorer celui d’au moins un autre.',
            konanTip:
              'Résume les deux équations d’efficience de la CPP en une ligne : $P = Cm$ (bonnes quantités = efficience allocative) ET $P = \\min CM$ (coût minimal = efficience productive).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle double égalité de l’équilibre de long terme en CPP garantit simultanément l’efficience allocative et l’efficience productive ?',
              options: [
                '$P > Cm$ et $P > \\min CM$',
                '$Rm = 0$ et $CF = 0$',
                '$P = CVM$ et $Q = 0$',
                '$P = Cm$ (efficience allocative) et $P = \\min CM$ (efficience productive)',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$P = Cm$ garantit que la quantité produite maximise le surplus total (efficience allocative), et $P = \\min CM$ garantit la production au coût unitaire minimal (efficience productive).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.4
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch4_p4',
        order: 4,
        title: 'Concurrence imparfaite : Monopole, Indice de Lerner, Oligopole et Monopolistique',
        summary:
          'Comparer les 4 structures de marché, résoudre l’équilibre du monopole (Rm = Cm, pente double), calculer l’indice de Lerner et la perte sèche, et analyser oligopole et concurrence monopolistique.',
        conceptExplanation:
          'Dans l’économie réelle — et tout particulièrement dans l’économie numérique (plateformes, télécoms, systèmes d’exploitation) — la concurrence est le plus souvent **imparfaite** :\n\n' +
          '1. **Monopole** : un offreur unique (*price-maker*) protégé par des barrières à l’entrée (monopole naturel à forts coûts fixes, brevet/licence légale, effets de réseau). Face à une demande décroissante $P(Q)$, sa recette marginale est **strictement inférieure au prix** ($Rm < P$). Pour une demande linéaire $P = a - bQ$, on a $Rm = a - 2bQ$ (pente double !). Il fixe $Q_M$ telle que **$Rm = Cm$**, puis lit $P_M = P(Q_M) > Cm$. Conséquences : prix plus élevé, quantité réduite, **indice de Lerner** $L = (P - Cm)/P = -1/e_p > 0$ et **perte sèche** de surplus social.\n\n' +
          '2. **Oligopole** : petit nombre de grandes firmes stratégiquement interdépendantes (modèle de **Cournot** en quantités, **Bertrand** en prix, **cartel** collusif instable).\n' +
          '3. **Concurrence monopolistique (Chamberlin)** : multitude de firmes vendant des produits **différenciés** (marque, design, localisation) — pouvoir de marché à court terme, mais libre entrée annulant les profits à long terme avec excès de capacité.',
        keyRule:
          'Règle universelle du profit : $Rm = Cm$. En Monopole face à $P = a - bQ$, retiens la pente double $Rm = a - 2bQ$, trouve $Q_M$, puis reporte dans $P(Q_M)$ pour obtenir $P_M$ !',
        formulas: [
          {
            name: 'Équilibre du monopole et astuce de la pente double',
            formula: 'P(Q) = a - bQ \\implies RT = aQ - bQ^2 \\implies Rm(Q) = a - 2bQ = Cm(Q)',
            note: 'Ne jamais oublier : on lit le prix de monopole P_M sur la courbe de DEMANDE, jamais sur Rm !',
          },
          {
            name: 'Indice de Lerner (mesure du pouvoir de marché)',
            formula: 'L = \\frac{P - Cm}{P} = -\\frac{1}{e_p} = \\frac{1}{|e_p|} \\in [0\\,;\\,1]',
            note: 'En CPP, L = 0 ; un monopole opère toujours dans la zone élastique (|e_p| > 1) afin que Rm > 0.',
          },
        ],
        workedExample: {
          title: 'Comparer CPP et Monopole : prix, quantité, profit, Lerner et perte sèche',
          statement:
            'La demande de marché est $P = 100 - Q$ et le coût marginal constant est $Cm = 20$ ($CF = 0$). Comparez l’équilibre de CPP et l’équilibre de Monopole, puis calculez l’indice de Lerner et la perte sèche.',
          methodSteps: [
            'Équilibre de CPP ($P = Cm$) : $100 - Q_{CPP} = 20 \\implies Q_{CPP} = 80$, $P_{CPP} = 20$ et $\\pi_{CPP} = 0$.',
            'Recette marginale du monopole : $P = 100 - Q \\implies Rm = 100 - 2Q$.',
            'Équilibre de monopole ($Rm = Cm$) : $100 - 2Q_M = 20 \\implies 2Q_M = 80 \\implies Q_M = 40$ (moitié de $Q_{CPP}$ !).',
            'Prix et profit de monopole : $P_M = 100 - 40 = 60$ ; $\\pi_M = (60 - 20) \\times 40 = 1\\,600$.',
            'Indice de Lerner : $L = \\frac{60 - 20}{60} = \\frac{2}{3} \\approx 0,67$ (soit $|e_p| = 1,5$). Perte sèche : $PS = \\frac{1}{2}(60 - 20)(80 - 40) = 800$.',
          ],
          conclusion:
            'Le monopole restreint volontairement sa production (40 contre 80), triple le prix (60 contre 20), capte une rente de 1 600 et détruit 800 de bien-être collectif.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cartographie',
            stepTheme: '4 structures de marché',
            stepTitle: 'Classifier les quatre grandes structures de marché',
            paragraphText:
              'L’organisation industrielle classe les marchés selon deux axes décisifs : le **nombre d’offreurs** (atomicité vs concentration) et le **degré de pouvoir de marché / différenciation**.\n' +
              '• **Concurrence Pure et Parfaite** : très nombreux offreurs, produit homogène, libre entrée, *price-taker* ($P = Cm$).\n' +
              '• **Concurrence monopolistique** : nombreux offreurs, produits **différenciés** par la marque ou la qualité (restaurants, applications mobiles, mode).\n' +
              '• **Oligopole** : petit nombre de grandes firmes interdépendantes (opérateurs télécoms en Côte d’Ivoire, aviation, constructeurs cloud).\n' +
              '• **Monopole** : offreur unique protégé par de fortes barrières à l’entrée (réseau de transport d’électricité, brevet exclusif).',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice des quatre grandes structures de marché',
              caption: 'Classification selon le nombre de vendeurs (grand nombre vs petit nombre) et la nature du produit / barrières.',
              matrix2x2: {
                topAxis: ['Produit homogène / Standardisé', 'Produit différencié / Barrières fortes'],
                leftAxis: ['Grand nombre d’offreurs', 'Petit nombre ou Offreur unique'],
                topLeft: {
                  title: 'Concurrence Pure et Parfaite',
                  color: 'green',
                  items: [
                    'Atomicité & libre entrée',
                    'Firme price-taker : P = Cm',
                    'Profit nul à LT, surplus maximal',
                  ],
                },
                topRight: {
                  title: 'Concurrence Monopolistique',
                  color: 'blue',
                  items: [
                    'Nombreuses firmes, produits différenciés',
                    'Pouvoir de marché local (Rm = Cm)',
                    'Ex. restauration, apps, habillement',
                  ],
                },
                bottomLeft: {
                  title: 'Oligopole',
                  color: 'orange',
                  items: [
                    'Quelques firmes interdépendantes',
                    'Stratégies Cournot, Bertrand, cartel',
                    'Ex. télécoms mobiles, cimenteries',
                  ],
                },
                bottomRight: {
                  title: 'Monopole',
                  color: 'violet',
                  items: [
                    'Offreur unique, barrières à l’entrée',
                    'Price-maker : Rm = Cm < P_M',
                    'Rente durable & perte sèche sociale',
                  ],
                },
              },
            },
            keyRule:
              'Les 4 structures de marché se distinguent par le nombre de vendeurs, l’homogénéité du produit et la hauteur des barrières à l’entrée.',
            konanTip:
              'En économie numérique, les plateformes à forts effets de réseau tendent naturellement vers l’oligopole ou le quasi-monopole.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p4_q1',
              type: 'mcq',
              prompt:
                'Un secteur regroupe plusieurs centaines de restaurants à Abidjan proposant chacun une cuisine, une ambiance et une marque différentes, avec une entrée relativement libre. Quelle est sa structure de marché ?',
              options: [
                'Concurrence Pure et Parfaite',
                'Monopole naturel',
                'Concurrence monopolistique',
                'Duopole de Cournot',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Grand nombre d’offreurs + libre entrée + différenciation des produits définissent exactement la concurrence monopolistique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Monopole',
            stepTheme: 'Barrières & Rm < P',
            stepTitle: 'Origines du monopole et pourquoi sa recette marginale est inférieure au prix',
            paragraphText:
              'Un monopole survient lorsque de puissantes **barrières à l’entrée** empêchent la concurrence d’apparaître.\n' +
              '• **Quatre sources** : monopole **naturel** (coûts fixes colossaux rendant le $CM$ décroissant sur tout le marché : eau, électricité, rail), monopole **légal** (brevet, concession publique), contrôle d’une ressource rare, ou **effets de réseau** massifs (plateformes numériques).\n' +
              '• **Pourquoi $Rm < P$ ?** : pour vendre une unité supplémentaire, le monopole (qui ne discrimine pas) doit baisser le prix de **toutes** les unités précédentes ! Le gain sur la nouvelle unité ($+P$) est donc amputé de la perte de prix sur les unités déjà vendues ($Q\\,\\frac{dP}{dQ} < 0$).',
            formula: {
              name: 'Décomposition de la Recette Marginale du monopole',
              formula: 'Rm(Q) = \\frac{d(P(Q)\\cdot Q)}{dQ} = P(Q) + \\underbrace{Q\\,\\frac{dP}{dQ}}_{< 0} < P(Q)',
              note: 'Effet volume (+P) moins effet prix (−Q·|dP/dQ|) : c’est pourquoi la droite Rm plonge deux fois plus vite que P(Q) !',
            },
            keyRule:
              'En monopole, vendre une unité de plus oblige à baisser le prix de toutes les unités précédentes, ce qui rend la recette marginale strictement inférieure au prix (Rm < P).',
            konanTip:
              'Dès qu’un énoncé mentionne des coûts fixes massifs d’infrastructure (réseau électrique, câble sous-marin), pense immédiatement au monopole naturel !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p4_q2',
              type: 'mcq',
              prompt:
                'Qu’appelle-t-on un « monopole naturel » en microéconomie ?',
              options: [
                'Un monopole obtenu uniquement grâce à un brevet de 20 ans',
                'Une situation où les économies d’échelle sont si fortes (coût moyen continuellement décroissant) qu’une seule entreprise produit toute la demande du marché à moindre coût que plusieurs concurrents',
                'Un marché où l’État interdit la publicité',
                'Une entente illégale entre trois entreprises privées',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un monopole naturel découle de la sous-additivité des coûts (coûts fixes très élevés d’infrastructure : réseau électrique, distribution d’eau, rail) rendant un opérateur unique plus efficace sur le plan des coûts.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul Monopole',
            stepTheme: 'Pente double',
            stepTitle: 'Résoudre l’équilibre du monopole (Rm = Cm) étape par étape',
            paragraphText:
              'Pour résoudre n’importe quel exercice de monopole sans jamais te tromper, applique rigoureusement ces quatre étapes.\n' +
              '• **Étape 1** : écrire la demande **inverse** $P = a - bQ$ (si $Q = f(P)$ est donnée, commence toujours par isoler $P$ !).\n' +
              '• **Étape 2** : écrire $RT = aQ - bQ^2$, puis dériver pour obtenir $Rm = a - 2bQ$ (même ordonnée $a$, pente double $-2b$).\n' +
              '• **Étape 3** : égaliser $Rm(Q_M) = Cm(Q_M)$ pour trouver la quantité optimale $Q_M$.\n' +
              '• **Étape 4** : substituer $Q_M$ dans la **demande inverse** $P(Q_M)$ pour trouver $P_M$, puis calculer $\\pi_M = P_M Q_M - CT(Q_M)$.',
            konanTip:
              'Piège fatal à éviter : ne substitue JAMAIS $Q_M$ dans $Rm$ pour trouver le prix ! Le prix $P_M$ se lit TOUJOURS sur la courbe de demande $P = a - bQ_M$.',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p4_q3',
              type: 'mcq',
              prompt:
                'Un monopole fait face à la demande $P = 120 - 3Q$ avec un coût total $CT(Q) = 24Q + 100$ (donc $Cm = 24$). Quels sont $(Q_M, P_M)$ et le profit $\\pi_M$ ?',
              options: [
                '$Q_M = 16$, $P_M = 72$ et $\\pi_M = 668$',
                '$Q_M = 32$, $P_M = 24$ et $\\pi_M = -100$',
                '$Q_M = 16$, $P_M = 24$ et $\\pi_M = 0$',
                '$Q_M = 20$, $P_M = 60$ et $\\pi_M = 620$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$Rm = 120 - 6Q = Cm = 24 \\implies 6Q_M = 96 \\implies Q_M = 16$. Prix sur la demande : $P_M = 120 - 3(16) = 72$. Profit : $\\pi_M = (72 \\times 16) - (24 \\times 16 + 100) = 1\\,152 - 484 = 668$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Lerner & Perte',
            stepTheme: 'Pouvoir de marché',
            stepTitle: 'Indice de Lerner, perte sèche et discrimination par les prix',
            paragraphText:
              'Comment mesurer le pouvoir de marché d’un monopole et son coût pour la société ? Deux indicateurs font autorité.\n' +
              '• **Indice de Lerner** : $L = \\frac{P - Cm}{P} = -\\frac{1}{e_p}$. Il mesure le taux de marge au-dessus du coût marginal : $L = 0$ en CPP, et plus la demande est rigide ($|e_p|$ faible), plus le monopole peut fixer un prix élevé ! Un monopole opère toujours là où $|e_p| > 1$ (sinon $Rm < 0$).\n' +
              '• **Perte sèche (inefficience allocative)** : en choisissant $Q_M < Q_{CPP}$ et $P_M > Cm$, le monopole détruit un triangle de surplus collectif.\n' +
              '• **Discrimination par les prix** : vendre le même bien à des prix différents selon la disposition à payer (1er degré : tarification personnalisée ; 2e degré : remises de volume ; 3e degré : tarifs étudiants/seniors/pro). La discrimination parfaite du 1er degré capte tout le $SC$ mais supprime la perte sèche !',
            formula: {
              name: 'Pouvoir de marché (Lerner) et règle de tarification du monopole',
              formula: 'L = \\frac{P - Cm}{P} = \\frac{1}{|e_p|} \\iff P_M = \\frac{Cm}{1 - 1/|e_p|}',
              note: 'Exemple : si |e_p| = 2 et Cm = 50, alors P_M = 50 / (1 − 0,5) = 100 (marge de 50 % du prix).',
            },
            keyRule:
              'L’indice de Lerner L = (P − Cm)/P = 1/|e_p| mesure le pouvoir de marché ; il varie de 0 (CPP) à 1 et impose au monopole d’opérer dans la zone élastique (|e_p| > 1).',
            konanTip:
              'Si un QCM te propose un monopole opérant à e_p = −0,5 (inélastique), c’est impossible à l’optimum car sa recette marginale y serait négative !',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p4_q4',
              type: 'mcq',
              prompt:
                'Un monopole a un coût marginal constant $Cm = 30$ et fait face à une élasticité-prix de la demande égale à $e_p = -3$. Quels sont son indice de Lerner $L$ et son prix optimal $P_M$ ?',
              options: [
                '$L = 3$ et $P_M = 90$',
                '$L = 1/3 \\approx 0,33$ et $P_M = 45$',
                '$L = 0$ et $P_M = 30$',
                '$L = 2/3$ et $P_M = 60$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$L = 1/|e_p| = 1/3$. Or $(P_M - 30)/P_M = 1/3 \\implies 1 - 30/P_M = 1/3 \\implies 30/P_M = 2/3 \\implies P_M = 45$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Oligopole',
            stepTheme: 'Cournot, Bertrand, Cartel',
            stepTitle: 'Interdépendance stratégique en oligopole : Cournot, Bertrand et cartel',
            paragraphText:
              'En **oligopole**, chaque firme sait que ses décisions déclenchent immédiatement une riposte de ses quelques rivaux (ex. guerre des tarifs data entre opérateurs télécoms). Trois grands modèles l’analysent.\n' +
              '• **Duopole de Cournot (concurrence en quantités)** : chaque firme choisit simultanément sa quantité en prenant celle du rival comme donnée (fonctions de meilleure réponse). L’équilibre de Nash obtenu donne un prix et une quantité **intermédiaires** entre le monopole et la CPP.\n' +
              '• **Duopole de Bertrand (concurrence en prix, biens homogènes)** : les rivaux se livrent à une guerre des prix qui ramène le prix jusqu’au coût marginal **$P = Cm$** (paradoxe de Bertrand : deux firmes suffisent pour retrouver le résultat concurrentiel !).\n' +
              '• **Cartel / Collusion** : entente (illégale) pour produire ensemble la quantité de monopole et partager le surprofit, mais intrinsèquement **instable** (dilemme du prisonnier : chaque membre est tenté de tricher en produisant un peu plus).',
            keyRule:
              'Classement classique des prix : $P_{\\text{Monopole/Cartel}} > P_{\\text{Cournot}} > P_{\\text{Bertrand}} = P_{\\text{CPP}} = Cm$ (et ordre exactement inverse pour les quantités !).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p4_q5',
              type: 'mcq',
              prompt:
                'Dans quel modèle de duopole (à produits homogènes et coûts marginaux constants identiques) la concurrence en prix ramène-t-elle dès deux firmes le prix d’équilibre au niveau concurrentiel $P = Cm$ ?',
              options: [
                'Le modèle de Cournot',
                'Le cartel parfait',
                'Le monopole discriminant',
                'Le modèle de Bertrand (paradoxe de Bertrand)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Dans le modèle de Bertrand, la firme qui affiche un prix ne serait-ce que d’un franc inférieur capture tout le marché : la surenchère à la baisse ne s’arrête qu’à $P = Cm$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Monopolistique',
            stepTheme: 'Chamberlin & LT',
            stepTitle: 'Concurrence monopolistique : différenciation et excès de capacité',
            paragraphText:
              'La **concurrence monopolistique** (Edward Chamberlin) décrit la majorité des marchés modernes de biens de consommation et d’applications numériques.\n' +
              '• **À court terme** : grâce à la différenciation (marque, UX, localisation), chaque firme bénéficie d’une clientèle fidèle et d’une demande décroissante : elle tarife comme un petit monopole ($Rm = Cm$, $P > Cm$) et peut dégager un profit positif.\n' +
              '• **À long terme** : la **libre entrée** de nouveaux concurrents attire des substituts proches, déplace la demande individuelle vers la gauche et la rend tangente au coût moyen : le profit économique s’annule ($P = CM$, $\\pi = 0$).\n' +
              '• **Excès de capacité** : le point de tangence se situe **à gauche** du minimum de $CM$ ($Q < Q_{\\min CM}$). Le prix reste supérieur à $Cm$, prix que la société paie en contrepartie de la **variété des produits** !',
            keyRule:
              'Long terme en concurrence monopolistique : profit économique nul ($P = CM$), MAIS $P > Cm$ et production inférieure à la taille minimale efficace (excès de capacité).',
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch4_p4_q6',
              type: 'mcq',
              prompt:
                'À l’équilibre de long terme d’un marché en concurrence monopolistique, quelle combinaison de propriétés est vérifiée ?',
              options: [
                'Le profit économique est nul ($P = CM$), mais le prix reste supérieur au coût marginal ($P > Cm$) et la firme produit en deçà du minimum de son coût moyen (excès de capacité)',
                'Le profit économique reste indéfiniment positif et $P = Cm$',
                'Toutes les firmes fusionnent obligatoirement en un monopole unique',
                'La firme produit exactement au minimum de son coût moyen et $P = Cm$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La libre entrée annule le profit ($P = CM$) par tangence entre la demande individuelle décroissante et la branche décroissante de $CM$, donc à gauche de $\\min CM$ avec $P > Cm$.',
            },
          },
        ],
      }),
    ],
  },
];
