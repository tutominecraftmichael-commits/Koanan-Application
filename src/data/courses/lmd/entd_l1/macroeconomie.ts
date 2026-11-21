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

export const MACROECONOMIE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : OBJET, CIRCUIT ÉCONOMIQUE ET ÉQUILIBRE EMPLOIS-RESSOURCES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch1',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Objet de la macroéconomie, circuit économique et équilibre emplois-ressources',
    summary:
      'Maîtriser les agrégats, le carré magique de Kaldor, les 6 secteurs institutionnels, le circuit économique à 5 agents, les 3 types d’opérations et l’identité emplois-ressources.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Macroéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 1.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch1_p1',
        order: 1,
        title: 'Objet de la macroéconomie, démarche positive/normative et carré magique de Kaldor',
        summary:
          'Distinguer macroéconomie et microéconomie, opposer analyse positive et normative, identifier les enjeux macroéconomiques et évaluer une économie via le carré magique de Kaldor.',
        conceptExplanation:
          'La **macroéconomie** étudie le fonctionnement d’une économie dans son ensemble à travers des grandeurs globales appelées **agrégats** (PIB, consommation agrégée $C$, investissement $I$, niveau général des prix $P$, emploi et chômage). Complémentaire de la microéconomie (centrée sur les décisions individuelles), elle poursuit quatre finalités : **comprendre** les interactions globales et les cycles, **expliquer** les crises et écarts de richesse, **guider** les politiques budgétaires et monétaires, et **prévoir** les évolutions conjoncturelles.\n\n' +
          'Elle sépare rigoureusement l’**analyse positive** (expliquer objectivement ce qui *est*, ex. mesurer l’impact d’une hausse de taux d’intérêt sur l’investissement) de l’**analyse normative** (prescrire ce qui *devrait être* selon des priorités sociales).\n\n' +
          'Pour synthétiser la performance conjoncturelle d’un pays, Nicholas Kaldor (1971) a conçu le **carré magique**, qui confronte quatre objectifs simultanés : forte **croissance du PIB**, **plein emploi** (chômage minimal), **stabilité des prix** (inflation maîtrisée) et **équilibre extérieur** (balance commerciale équilibrée).',
        keyRule:
          'Le carré magique de Kaldor évalue simultanément quatre objectifs : Croissance, Plein emploi, Stabilité des prix et Équilibre extérieur — qualifié de « magique » car il est quasi impossible de les maximiser tous en même temps.',
        formulas: [
          {
            name: 'Les quatre sommets du carré magique de Kaldor',
            formula: '\\text{Croissance } (g_{\\text{PIB}}\\uparrow) \\;\\leftrightarrow\\; \\text{Emploi } (u\\downarrow) \\;\\leftrightarrow\\; \\text{Prix } (\\pi\\downarrow) \\;\\leftrightarrow\\; \\text{Extérieur } (X - M \\approx 0)',
            note: 'Relancer fortement la croissance réduit le chômage mais tend à stimuler l’inflation et les importations (dilemme de politique économique).',
          },
        ],
        workedExample: {
          title: 'Évaluer la santé macroéconomique d’un pays avec le carré magique',
          statement:
            'Un pays de l’UEMOA enregistre cette année : croissance réelle du PIB $+6,5\\,\\%$, inflation $+2,4\\,\\%$, taux de chômage $7,8\\,\\%$ et solde commercial $-3,5\\,\\%$ du PIB. Diagnostiquez chaque sommet de Kaldor et qualifiez le caractère positif ou normatif de la recommandation « Il faut réduire les importations de luxe ».',
          methodSteps: [
            'Croissance ($+6,5\\,\\%$) : très dynamique (sommet solide du carré).',
            'Stabilité des prix ($+2,4\\,\\%$) : inflation maîtrisée sous la norme UEMOA de $3\\,\\%$.',
            'Emploi ($7,8\\,\\%$) et Équilibre extérieur ($-3,5\\,\\%$ du PIB) : points de fragilité nécessitant diversification exportatrice et création d’emplois formels.',
            'Recommandation « Il faut réduire... » : jugement de valeur prescriptif ⇒ analyse normative (par opposition à l’énoncé positif « Une taxe douanière réduit les importations »).',
          ],
          conclusion:
            'Le carré magique met immédiatement en évidence les déséquilibres prioritaires à corriger par la politique économique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Macro vs Micro',
            stepTheme: 'Agrégats globaux',
            stepTitle: 'Objet de la macroéconomie et complémentarité avec la microéconomie',
            paragraphText:
              'Alors que la microéconomie observe à la loupe un ménage ou une firme sur un marché précis, la **macroéconomie** prend de la hauteur pour analyser le système économique dans sa totalité.\n' +
              '• **Agrégats économiques** : grandeurs synthétiques regroupant des millions de décisions individuelles (PIB, consommation nationale $C$, investissement global $I$, niveau général des prix $P$, taux de chômage $u$).\n' +
              '• **Interactions globales** : une baisse générale des salaires semble réduire les coûts d’une entreprise isolée (vision micro), mais contracte le pouvoir d’achat et la demande nationale (effet de bouclage macro !).\n' +
              '• **Complémentarité** : la microéconomie fournit les fondements comportementaux ; la macroéconomie éclaire les équilibres globaux et les politiques publiques.',
            keyRule:
              'En macroéconomie, le tout n’est pas toujours la simple somme des parties (sophisme de composition : épargner individuellement enrichit un ménage, mais si tous épargnent en récession, le PIB chute !).',
            konanTip:
              'Repère d’examen : « prix du cacao » = microéconomie ; « niveau général des prix / inflation » = macroéconomie !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle thématique relève spécifiquement du champ d’étude de la MACROÉCONOMIE plutôt que de la microéconomie ?',
              options: [
                'La maximisation de l’utilité d’un étudiant entre repas et forfaits data',
                'Le calcul du coût marginal d’une boulangerie artisanale',
                'L’analyse des causes de l’inflation, du chômage national et de la croissance du PIB',
                'La tarification d’un monopole sur le marché des logiciels comptables',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La macroéconomie étudie les grands agrégats nationaux (PIB, inflation, chômage, politiques budgétaire et monétaire) et leurs interactions globales.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Finalités',
            stepTheme: '4 missions',
            stepTitle: 'Les quatre finalités majeures de l’analyse macroéconomique',
            paragraphText:
              'À quoi sert concrètement un macroéconomiste au ministère de l’Économie, à la BCEAO ou dans une grande entreprise numérique ? Son travail poursuit quatre objectifs complémentaires.\n' +
              '• **Comprendre** le fonctionnement global de l’économie, les liens entre agrégats et l’alternance des phases d’expansion et de récession.\n' +
              '• **Expliquer** les phénomènes majeurs : pourquoi certains pays croissent plus vite que d’autres, comment naissent les crises financières (ex. 2008).\n' +
              '• **Guider les politiques économiques** : fournir aux gouvernements et banques centrales les leviers budgétaires et monétaires adaptés.\n' +
              '• **Prévoir** les tendances futures (prévisions de croissance, d’inflation, de recettes fiscales) afin d’améliorer durablement le bien-être social.',
            konanTip:
              'Mémorise les 4 verbes d’action : Comprendre, Expliquer, Guider, Prévoir — un plan idéal pour toute question de dissertation introductive !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Lorsqu’un institut économique utilise un modèle IS-LM pour anticiper le taux de croissance du PIB ivoirien de l’année prochaine, quelle finalité de la macroéconomie illustre-t-il ?',
              options: [
                'La prévision des évolutions macroéconomiques futures',
                'La fixation administrative des prix de détail',
                'La suppression des échanges internationaux',
                'L’étude de la concurrence monopolistique d’un quartier',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’utilisation de modèles macroéconomiques pour estimer l’évolution future du PIB ou de l’inflation correspond à la mission de prévision.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Épistémologie',
            stepTheme: 'Positif vs Normatif',
            stepTitle: 'Séparer économie positive et économie normative dans le débat public',
            paragraphText:
              'Les débats sur les impôts, la dette ou l’inflation mélangent souvent constats scientifiques et opinions politiques. La rigueur impose de les séparer.\n' +
              '• **Économie positive** : décrit le monde **tel qu’il est** de manière objective et vérifiable (ex. « Une hausse du taux directeur de la BCEAO renchérit le crédit bancaire et freine l’investissement privé »).\n' +
              '• **Économie normative** : prescrit le monde **tel qu’il devrait être**, sur la base de valeurs morales ou idéologiques (ex. « La priorité absolue devrait être la réduction des inégalités plutôt que la réduction du déficit public »).\n' +
              '• **Complémentarité** : l’analyse positive éclaire les conséquences réelles de chaque option ; les citoyens et décideurs tranchent ensuite sur le plan normatif.',
            keyRule:
              'Analyse positive = relations de cause à effet testables par les données (Est). Analyse normative = jugements de valeur et recommandations politiques (Devrait être).',
            konanTip:
              'Repère immédiatement les verbes normatifs en QCM : « devrait », « il faut », « juste », « préférable », « injuste ».',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Laquelle de ces propositions relève de l’analyse macroéconomique NORMATIVE ?',
              options: [
                'Une augmentation des dépenses publiques financée par emprunt tend à accroître la demande globale à court terme',
                'Le taux d’inflation mesure la variation relative de l’indice des prix à la consommation',
                'Le gouvernement devrait consacrer au moins 20 % du budget national aux infrastructures numériques et à l’éducation',
                'En économie ouverte, la hausse des importations réduit la valeur du multiplicateur keynésien',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’énoncé contenant « devrait » formule une prescription politique fondée sur des choix de valeurs prioritaires : c’est une proposition normative.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Enjeux',
            stepTheme: 'Défis contemporains',
            stepTitle: 'Les grands enjeux macroéconomiques du XXIe siècle',
            paragraphText:
              'La macroéconomie contemporaine ne se limite plus au duo classique inflation/chômage : elle intègre de nouveaux défis structurels décisifs pour les économies africaines et mondiales.\n' +
              '• **Stabilité et croissance inclusive** : stimuler la croissance réelle du PIB tout en réduisant la pauvreté et en créant des emplois formels décents.\n' +
              '• **Soutenabilité budgétaire et financière** : maîtriser les déficits publics, la dette souveraine et prévenir les risques bancaires systémiques.\n' +
              '• **Innovation, productivité et transition verte** : réussir l’adoption technologique (économie numérique, IA), la transition écologique et la résilience face aux chocs exogènes (climat, crises sanitaires, géopolitique).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Lequel de ces enjeux associe directement performance macroéconomique de long terme et transformation digitale ?',
              options: [
                'L’adoption technologique et l’innovation pour élever la productivité globale des facteurs',
                'La suppression de la monnaie scripturale au profit du troc',
                'Le maintien d’un taux d’inflation supérieur à 50 % par an',
                'La fermeture totale des frontières aux importations d’équipements informatiques',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’innovation et l’adoption numérique relèvent la productivité globale, principal moteur durable de la croissance du PIB par habitant à long terme.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Kaldor',
            stepTheme: 'Carré magique',
            stepTitle: 'Le carré magique de Nicholas Kaldor et les dilemmes d’objectifs',
            paragraphText:
              'En 1971, l’économiste britannique **Nicholas Kaldor** a proposé un diagramme synthétique — le **carré magique** — pour visualiser simultanément les quatre grands objectifs de la politique économique.\n' +
              '• **Quatre sommets** : (1) Croissance du PIB réel la plus élevée possible, (2) Plein emploi (taux de chômage proche de 0 %), (3) Stabilité des prix (taux d’inflation faible), (4) Équilibre extérieur (solde courant équilibré ou excédentaire).\n' +
              '• **Pourquoi « magique » ?** : parce que ces objectifs sont souvent **conflictuels** à court terme ! Une forte relance pour créer des emplois tend à provoquer des tensions inflationnistes (arbitrage de Phillips) et à creuser le déficit commercial par hausse des importations.\n' +
              '• **Lecture** : plus la surface du quadrilatère réel se rapproche du grand carré idéal, meilleure est la performance macroéconomique.',
            keyRule:
              'Les 4 sommets de Kaldor : Croissance (PIB), Emploi (chômage), Stabilité des prix (inflation) et Équilibre extérieur (balance commerciale/courante).',
            konanTip:
              'Piège classique : le « déficit budgétaire » N’EST PAS un des 4 sommets du carré magique de Kaldor ! L’équilibre budgétaire est un INSTRUMENT (ou critère de convergence), pas un sommet du carré.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Le Carré Magique de Nicholas Kaldor (4 objectifs macroéconomiques)',
              caption: 'Objectifs internes vs externes, réels vs nominaux : tout choix de politique économique arbitre entre ces quatre pôles.',
              matrix2x2: {
                topAxis: ['Sphère RÉELLE (Activité & Emploi)', 'Sphère NOMINALE & EXTÉRIEURE'],
                leftAxis: ['Dynamique d’expansion', 'Équilibres fondamentaux'],
                topLeft: {
                  title: '1. Croissance économique',
                  color: 'green',
                  items: [
                    'Indicateur : taux de croissance du PIB réel (%)',
                    'Cible : croissance soutenue et durable',
                    'Levier : investissement, innovation, productivité',
                  ],
                },
                topRight: {
                  title: '3. Stabilité des prix',
                  color: 'orange',
                  items: [
                    'Indicateur : taux d’inflation IPC (%)',
                    'Cible : inflation faible (≤ 3 % en UEMOA)',
                    'Risque opposé : déflation ou hyperinflation',
                  ],
                },
                bottomLeft: {
                  title: '2. Plein emploi',
                  color: 'blue',
                  items: [
                    'Indicateur : taux de chômage u (%)',
                    'Cible : chômage réduit au minimum frictionnel',
                    'Arbitrage court terme : courbe de Phillips',
                  ],
                },
                bottomRight: {
                  title: '4. Équilibre extérieur',
                  color: 'violet',
                  items: [
                    'Indicateur : solde commercial / courant (% PIB)',
                    'Cible : X − M ≥ 0 (compétitivité)',
                    'Contrainte : relance interne ⇒ hausse de M',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Parmi ces indicateurs, lequel NE figure PAS parmi les quatre sommets du carré magique de Nicholas Kaldor ?',
              options: [
                'Le taux de croissance du PIB réel',
                'Le taux de chômage',
                'Le taux d’inflation',
                'Le taux de fiscalité sur les sociétés (impôt sur les bénéfices)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les quatre sommets de Kaldor sont : croissance du PIB, emploi/chômage, stabilité des prix (inflation) et équilibre extérieur. La fiscalité est un instrument budgétaire, pas un sommet du carré.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Cycles',
            stepTheme: 'Fluctuations conjoncturelles',
            stepTitle: 'Cycles économiques et politiques contracycliques de stabilisation',
            paragraphText:
              'La croissance d’une économie n’est jamais une ligne droite : le PIB réel oscille autour de sa tendance de long terme (PIB potentiel) selon des **cycles conjoncturels**.\n' +
              '• **Quatre phases** : **expansion** (accélération de la production et de l’emploi), **pic / surchauffe** (tensions inflationnistes), **récession** (recul du PIB réel sur au moins deux trimestres consécutifs, montée du chômage), puis **creux et reprise**.\n' +
              '• **Écart de production (output gap)** : différence entre PIB effectif et PIB potentiel.\n' +
              '• **Politique contracyclique** : stimuler la demande en récession (relance) et la freiner en surchauffe (rigueur) afin de lisser les fluctuations.',
            keyRule:
              'Une récession technique est définie par deux trimestres consécutifs de contraction du PIB réel ; une politique contracyclique agit toujours à contre-courant du cycle.',
            konanTip:
              'Ne confonds pas « récession » (baisse du PIB réel, croissance négative) et « ralentissement » (croissance toujours positive, ex. passant de +6 % à +3 %).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Comment qualifie-t-on une politique économique qui augmente les dépenses publiques et baisse les taux d’intérêt pendant une récession, puis freine l’activité en période de surchauffe ?',
              options: [
                'Une politique procyclique',
                'Une politique contracyclique (de stabilisation conjoncturelle)',
                'Une politique autarcique',
                'Une politique de planification intégrale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une politique contracyclique compense les creux (relance en récession) et modère les pics (freinage en surchauffe) afin d’atténuer l’amplitude des cycles.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch1_p2',
        order: 2,
        title: 'Secteurs institutionnels, circuit économique et opérations des agents',
        summary:
          'Identifier les 6 secteurs institutionnels et leurs fonctions principales, construire le circuit économique à 5 agents (flux réels et monétaires) et classer les trois familles d’opérations.',
        conceptExplanation:
          'La **comptabilité nationale** est la représentation chiffrée du **circuit économique**, un schéma simplifié qui relie les flux réels (biens, services, travail) et leurs contreparties monétaires (prix, salaires, impôts) autour d’un noyau central : la **production**.\n\n' +
          'Un **agent économique** est un centre de décision autonome. La comptabilité nationale regroupe les agents en **6 secteurs institutionnels** selon leur fonction principale :\n' +
          '1. **Ménages** (consommer, et produire pour les entrepreneurs individuels) ;\n' +
          '2. **Sociétés Non Financières — SNF** (produire des biens et services marchands non financiers) ;\n' +
          '3. **Sociétés Financières — SF** (collecter, transformer et répartir des disponibilités financières : banques, assurances) ;\n' +
          '4. **Administrations Publiques — APu** (produire des services non marchands financés par prélèvements obligatoires et redistribuer les revenus) ;\n' +
          '5. **ISBLSM** (Institutions Sans But Lucratif au Service des Ménages : ONG, syndicats, associations financées par contributions volontaires) ;\n' +
          '6. **Reste du Monde — RDM** (agents non-résidents échangeant avec les résidents).\n\n' +
          'Tous leurs échanges se rangent en **3 catégories d’opérations** : opérations sur **biens et services**, opérations de **répartition** et opérations **financières** (entre Agents à Capacité de Financement — ACF — et Agents à Besoin de Financement — ABF).',
        keyRule:
          'Retiens les 6 secteurs institutionnels (Ménages, SNF, SF, APu, ISBLSM, RDM) et les 3 familles d’opérations (biens/services, répartition, opérations financières ACF → ABF).',
        formulas: [
          {
            name: 'Dualité des flux dans le circuit économique',
            formula: '\\text{Flux réel (Biens, Services, Travail)} \\;\\longleftrightarrow\\; \\text{Flux monétaire de sens opposé (Prix, Salaires, Impôts)}',
            note: 'Dans un circuit fermé complet, toute dépense d’un agent constitue un revenu pour un autre agent !',
          },
        ],
        workedExample: {
          title: 'Classer des acteurs réels en secteurs institutionnels et tracer leurs flux',
          statement:
            'Classez les acteurs suivants dans leur secteur institutionnel exact : (1) un salarié retraité, (2) une entreprise ivoirienne de développement logiciel, (3) une banque commerciale d’Abidjan, (4) le ministère de l’Éducation, (5) une ONG humanitaire locale, (6) un fournisseur chinois de smartphones.',
          methodSteps: [
            'Salarié retraité ⇒ **Ménages** (fonction principale : consommer ; ressource : pension de retraite / transfert).',
            'Entreprise de développement logiciel ⇒ **Société Non Financière (SNF)** (produit des services marchands non financiers).',
            'Banque commerciale ⇒ **Société Financière (SF)** (intermédiation financière entre épargnants ACF et emprunteurs ABF).',
            'Ministère de l’Éducation ⇒ **Administration Publique (APu)** (service non marchand financé par impôts).',
            'ONG humanitaire ⇒ **ISBLSM** (service non marchand financé par dons et cotisations volontaires).',
            'Fournisseur chinois non-résident ⇒ **Reste du Monde (RDM)** (flux d’importations $M$ contre paiement en devises).',
          ],
          conclusion:
            'Le critère de résidence (présence durable sur le territoire économique > 1 an) et la nature marchande ou non marchande de l’activité classent sans ambiguïté tout acteur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '6 secteurs',
            stepTheme: 'Comptabilité nationale',
            stepTitle: 'Agent économique et classification en six secteurs institutionnels',
            paragraphText:
              'La comptabilité nationale serait illisible si elle suivait séparément les 30 millions d’habitants et centaines de milliers d’entreprises d’un pays. Elle les regroupe par comportement économique homogène.\n' +
              '• **Agent économique** : unité décisionnelle autonome (individu, foyer, entreprise, ministère, banque) disposant de ressources et effectuant des opérations économiques.\n' +
              '• **Cinq secteurs résidents** : Ménages, Sociétés Non Financières (SNF), Sociétés Financières (SF), Administrations Publiques (APu) et ISBLSM (associations, ONG, syndicats, partis).\n' +
              '• **Sixième secteur (non-résident)** : le **Reste du Monde (RDM)**, qui retrace l’ensemble des relations économiques de la nation avec l’étranger.',
            keyRule:
              'Le critère d’appartenance à l’économie nationale est la **résidence** sur le territoire économique (en général ≥ 1 an), et NON la nationalité !',
            konanTip:
              'Piège classique : une filiale d’une multinationale étrangère installée durablement à Abidjan appartient aux SNF résidentes (pas au Reste du Monde !).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'À quel secteur institutionnel appartient une association caritative locale financée par les cotisations volontaires et dons des ménages ?',
              options: [
                'Aux Administrations Publiques (APu)',
                'Aux Sociétés Financières (SF)',
                'Aux Institutions Sans But Lucratif au Service des Ménages (ISBLSM)',
                'Aux Sociétés Non Financières (SNF)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Contrairement aux APu financées par prélèvements obligatoires (impôts), les ISBLSM fournissent des services non marchands financés par des contributions volontaires.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Fonctions',
            stepTheme: 'Rôles & Ressources',
            stepTitle: 'Fonction principale et source de financement de chaque secteur',
            paragraphText:
              'Chaque secteur institutionnel se définit par sa **fonction économique principale** et la nature de sa **ressource dominante**.\n' +
              '• **Ménages** : consommer (ressources : salaires, revenus du capital, prestations sociales). Attention : les entrepreneurs individuels sans société juridique sont rattachés aux ménages !\n' +
              '• **SNF** : produire des biens et services **marchands** non financiers (ressource : chiffre d’affaires des ventes).\n' +
              '• **SF** : produire des services financiers et d’assurance (collecter l’épargne, accorder des crédits, couvrir les risques).\n' +
              '• **APu** : produire des services **non marchands** (éducation, sécurité, justice) et redistribuer les revenus grâce aux **prélèvements obligatoires** (impôts, cotisations).',
            keyRule:
              'Marchand = vendu à un prix économiquement significatif (couvrant plus de 50 % des coûts de production) ; Non marchand = fourni gratuitement ou quasi gratuitement (APu et ISBLSM).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle est la différence fondamentale entre la ressource principale des Administrations Publiques (APu) et celle des Sociétés Non Financières (SNF) ?',
              options: [
                'Les APu se financent par prélèvements obligatoires (impôts et taxes), tandis que les SNF se financent par le produit de leurs ventes marchandes',
                'Les APu ne versent jamais de salaires',
                'Les SNF produisent uniquement des services gratuits',
                'Les APu dépendent exclusivement des exportations de matières premières',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les SNF tirent leurs ressources de la vente de biens et services marchands ; les APu financent leurs services non marchands par l’impôt et les contributions obligatoires.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Circuit',
            stepTheme: 'Flux réels & monétaires',
            stepTitle: 'Construire et lire le circuit économique à cinq pôles',
            paragraphText:
              'Dans le **circuit économique**, chaque transaction est représentée par deux flèches de **sens opposés** : un flux réel et sa contrepartie monétaire.\n' +
              '• **Sens opposé des flèches** : lorsque les ménages livrent leur force de travail aux entreprises (flux réel), les entreprises leur versent des salaires en sens inverse (flux monétaire). De même, l’achat d’un smartphone crée un flux réel de la firme vers le ménage et un flux monétaire en FCFA du ménage vers la firme.\n' +
              '• **Injections et fuites** : l’épargne confiée aux banques, les impôts payés à l’État et les importations sont des fuites du circuit ménages-entreprises, qui y sont réinjectées sous forme de crédits/investissement, dépenses publiques et exportations !',
            keyRule:
              'Pourquoi les flèches sont-elles opposées dans un circuit économique ? Parce que chaque flux physique (travail ou produit) a pour contrepartie un paiement monétaire qui circule en sens inverse.',
            konanTip:
              'Pour tracer un circuit complet en examen : place Ménages et Entreprises face à face, État en haut, Banques au centre/bas, et Reste du Monde sur le côté !',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Circuit économique simplifié à 5 grands agents',
              caption: 'La production crée des revenus qui financent consommation, épargne (via les banques), impôts (via l’État) et échanges extérieurs (RDM).',
              cycle: {
                centerLabel: 'PRODUCTION (PIB)',
                centerSublabel: 'Flux réels ↔ Flux monétaires',
                nodes: [
                  { title: 'Ménages', subtitle: 'Travail → Salaires · Consommation C & Épargne S', color: 'blue' },
                  { title: 'Entreprises (SNF)', subtitle: 'Biens & services · Salaires & Investissement I', color: 'green' },
                  { title: 'Sociétés Financières', subtitle: 'Collecte épargne (ACF) → Crédits (ABF)', color: 'violet' },
                  { title: 'État (APu)', subtitle: 'Impôts T → Services publics G & Transferts', color: 'orange' },
                  { title: 'Reste du Monde', subtitle: 'Exportations X ↔ Importations M', color: 'slate' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Dans la représentation graphique d’un circuit économique entre ménages et entreprises, pourquoi deux flèches de sens opposés relient-elles généralement ces deux agents pour une même opération ?',
              options: [
                'Parce que les entreprises et les ménages se font des dons gratuits mutuels',
                'Parce qu’un flux réel (biens, services ou force de travail) va dans un sens et sa contrepartie monétaire (paiement ou salaire) circule en sens inverse',
                'Parce que la moitié des opérations se fait en euros et l’autre moitié en FCFA',
                'Parce que les flux s’annulent toujours pour donner une production nulle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En économie monétaire, toute cession réelle (travail fourni, marchandise livrée) est compensée par un flux monétaire de sens opposé (salaire versé, prix payé).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: '3 opérations',
            stepTheme: 'ACF vs ABF',
            stepTitle: 'Les trois catégories d’opérations économiques (biens, répartition, finance)',
            paragraphText:
              'La comptabilité nationale classe l’ensemble des flux du circuit en trois grandes familles rigoureusement disjointes.\n' +
              '• **1. Opérations sur biens et services** : retracent l’origine des produits (ressources : production et importations) et leur destination (emplois : consommation, investissement, stocks, exportations).\n' +
              '• **2. Opérations de répartition** : décrivent la **répartition primaire** (salaires, loyers, dividendes issus de la production) puis la **redistribution secondaire** (impôts, cotisations et prestations sociales via l’État).\n' +
              '• **3. Opérations financières** : mettent en relation les **Agents à Capacité de Financement (ACF)** (dont l’épargne dépasse l’investissement, ex. ménages) et les **Agents à Besoin de Financement (ABF)** (entreprises qui investissent, État déficitaire) via créances et dettes.',
            keyRule:
              'ACF (excédent d’épargne) finance ABF (besoin de financement) soit par finance indirecte (banques), soit par finance directe (marchés financiers).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Une entreprise tech emprunte 50 millions FCFA auprès d’une banque qui a collecté l’épargne des ménages. À quelle catégorie d’opérations de la comptabilité nationale appartient ce financement ?',
              options: [
                'Aux opérations sur biens et services',
                'Aux opérations de consommation intermédiaire',
                'Aux opérations de variation de stocks',
                'Aux opérations financières (entre ACF et ABF)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’émission d’une créance/dette permettant à un ABF (entreprise) d’utiliser l’excédent d’épargne d’un ACF (ménages via la banque) relève des opérations financières.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Marchés',
            stepTheme: 'Typologie des marchés',
            stepTitle: 'Les grands marchés qui articulent le circuit macroéconomique',
            paragraphText:
              'Dans les modèles macroéconomiques, les agents ne s’échangent pas directement au hasard : leurs décisions se confrontent sur plusieurs grands marchés interconnectés.\n' +
              '• **Marché des biens et services** : échange des produits finaux (biens matériels et services) qui détermine la production $Y$ et le niveau général des prix $P$.\n' +
              '• **Marché du travail** : confrontation entre offre de travail des ménages et demande de travail des firmes, déterminant l’emploi $L$ et le salaire réel $W/P$.\n' +
              '• **Marché monétaire et des capitaux** : échange de liquidités à court terme (taux d’intérêt $i$) et de titres à moyen/long terme (actions, obligations pour financer l’investissement).\n' +
              '• **Marché des changes (FOREX)** et **marchés de matières premières** : détermination des taux de change entre devises et des cours mondiaux (pétrole, cacao, or).',
            konanTip:
              'Les grands modèles que nous verrons aux chapitres 4 et 5 (IS-LM et marché du travail) ne font rien d’autre que coupler ces trois marchés clés : Biens (IS), Monnaie (LM) et Travail !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Quel marché permet l’émission et la négociation d’instruments financiers à moyen et long terme (actions, obligations) destinés à financer les investissements productifs ?',
              options: [
                'Le marché des capitaux (marché financier)',
                'Le marché du travail',
                'Le marché des biens de consommation courante',
                'Le marché de la variation des stocks',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le marché des capitaux (actions et obligations) assure le financement à moyen et long terme des entreprises et des États, tandis que le marché monétaire concerne le court terme.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Égalité comptable',
            stepTheme: 'Fuites = Injections',
            stepTitle: 'Pourquoi les fuites égalent toujours les injections à l’équilibre du circuit',
            paragraphText:
              'Dans un circuit macroéconomique ouvert avec État, tout revenu $Y$ distribué aux ménages est affecté à quatre usages : consommation locale, épargne ($S$), impôts ($T$) et importations ($M$).\n' +
              '• **Trois fuites** : $S + T + M$ sortent du flux immédiat de consommation intérieure.\n' +
              '• **Trois injections** : investissement des firmes ($I$), dépenses publiques ($G$) et exportations ($X$) réinjectent de la demande dans la production nationale.\n' +
              '• **Identité d’équilibre** : $S + T + M = I + G + X \\iff (S - I) + (T - G) = (X - M)$ ! Un déficit public ($T < G$) et un manque d’épargne privée ($S < I$) se traduisent mécaniquement par un **déficit extérieur** ($X < M$) financé par le Reste du Monde.',
            formula: {
              name: 'Identité des trois soldes macroéconomiques',
              formula: '(S - I) + (T - G) = X - M',
              note: 'Déficit jumeaux : si l’épargne privée couvre tout juste l’investissement (S = I), tout déficit public (G > T) génère un déficit extérieur (M > X) !',
            },
            keyRule:
              'Retiens la magnifique identité $(S - I) + (T - G) = X - M$ : elle relie d’un seul trait l’épargne privée, le budget de l’État et la balance extérieure !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Dans une économie ouverte où l’épargne privée vaut $S = 1\\,200$, l’investissement $I = 1\\,000$, les impôts $T = 800$ et les dépenses publiques $G = 1\\,100$, que vaut le solde extérieur $(X - M)$ ?',
              options: [
                '$+500$ (excédent)',
                '$-100$ (déficit extérieur)',
                '$+100$ (excédent)',
                '$-500$ (déficit extérieur)',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$(S - I) + (T - G) = (1\\,200 - 1\\,000) + (800 - 1\\,100) = +200 - 300 = -100 = X - M$. Le déficit public (−300) dépasse l’excédent privé (+200), créant un besoin de financement externe de 100.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 1.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch1_p3',
        order: 3,
        title: 'Équilibre emplois-ressources et identités comptables fondamentales',
        summary:
          'Distinguer les ressources (P + M) et les cinq emplois (CI, CF, FBCF, ΔS, X), comprendre le déstockage et vérifier l’égalité Production nationale = Dépense interne + Solde externe.',
        conceptExplanation:
          'L’**équilibre emplois-ressources** exprime une vérité comptable absolue : tout bien ou service disponible sur le territoire national pendant une année (**Ressources**) a nécessairement reçu une affectation précise (**Emplois**).\n\n' +
          '• **Ressources** : Production nationale ($P$) + Importations ($M$).\n' +
          '• **Cinq Emplois** :\n' +
          '  1. **Consommation Intermédiaire ($CI$)** : biens ou services détruits ou incorporés dans le processus de production (matières premières, énergie, conseil IT) ;\n' +
          '  2. **Consommation Finale ($CF$)** : satisfaction directe des besoins par les ménages et les administrations ;\n' +
          '  3. **Formation Brute de Capital Fixe ($FBCF$)** : investissement durable en équipements, bâtiments et logiciels (pour les ménages, strictement limitée à l’**achat de logements**) ;\n' +
          '  4. **Variation de Stocks ($\\Delta S$)** : stockage ($> 0$) ou déstockage ($< 0$) ;\n' +
          '  5. **Exportations ($X$)** : ventes aux non-résidents.\n\n' +
          'En biens finaux (après élimination de $CI$, passant de la production brute au PIB $Y$), on obtient l’identité fondamentale : $Y + M = C + FBCF + \\Delta S + X \\iff Y = C + I + (X - M)$.',
        keyRule:
          'Ressources ($Y + M$) = Emplois finaux ($C + FBCF + \\Delta S + X$), soit : Production finale = Dépense interne ($C + I$) + Solde extérieur ($X - M$).',
        formulas: [
          {
            name: 'Équilibre emplois-ressources (tous produits puis biens finaux)',
            formula: 'P + M = CI + CF + FBCF + \\Delta S + X \\iff Y = C + (FBCF + \\Delta S) + (X - M)',
            note: 'En retranchant CI des deux membres, P − CI = Valeur Ajoutée totale = PIB (Y) hors impôts/subventions sur produits.',
          },
        ],
        workedExample: {
          title: 'Vérifier l’équilibre emplois-ressources d’une économie ouverte',
          statement:
            'En milliards de FCFA : Consommation finale $C = 18\\,000$, $FBCF = 5\\,400$, Variation de stocks $\\Delta S = -300$ (déstockage), Exportations $X = 7\\,500$, Importations $M = 6\\,600$. Calculez l’investissement total $I$, le solde externe, le PIB $Y$ et vérifiez Ressources = Emplois.',
          methodSteps: [
            'Investissement total : $I = FBCF + \\Delta S = 5\\,400 + (-300) = 5\\,100$ Mds FCFA.',
            'Solde extérieur : $X - M = 7\\,500 - 6\\,600 = +900$ Mds FCFA (excédent commercial).',
            'Production finale (PIB) : $Y = C + I + (X - M) = 18\\,000 + 5\\,100 + 900 = 24\\,000$ Mds FCFA.',
            'Contrôle comptable : Ressources ($Y + M = 24\\,000 + 6\\,600 = 30\\,600$) = Emplois ($18\\,000 + 5\\,400 - 300 + 7\\,500 = 30\\,600$).',
          ],
          conclusion:
            'L’économie affiche une dépense interne de 23 100 Mds FCFA complétée par un excédent extérieur de 900 Mds FCFA, pour un PIB de 24 000 Mds FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Ressources / Emplois',
            stepTheme: '5 emplois',
            stepTitle: 'Recenser les deux ressources et les cinq emplois des biens et services',
            paragraphText:
              'Où vont tous les ordinateurs, tonnes de riz et prestations numériques présents dans un pays au cours d’une année ? La comptabilité nationale ne perd jamais la trace d’un seul produit.\n' +
              '• **Deux sources de disponibilité (Ressources)** : ce qui est fabriqué sur le territoire (**Production $P$**) et ce qui arrive de l’étranger (**Importations $M$**).\n' +
              '• **Cinq destinations possibles (Emplois)** : Consommation Intermédiaire ($CI$), Consommation Finale ($CF$), Formation Brute de Capital Fixe ($FBCF$), Variation de Stocks ($\\Delta S$) et Exportations ($X$).\n' +
              '• **Exemple** : de la farine produite ou importée est soit consommée par un ménage ($CF$), soit transformée par une boulangerie ($CI$), soit stockée ($\\Delta S$), soit exportée ($X$).',
            keyRule:
              'Un même produit physique peut être classé en $CI$, $CF$ ou $FBCF$ selon l’USAGE économique qu’en fait son acheteur !',
            konanTip:
              'Exemple classique : un ordinateur acheté par un étudiant pour ses loisirs = $CF$ ; le même ordinateur acheté par une entreprise pour 4 ans = $FBCF$ ; des puces achetées pour assembler l’ordinateur = $CI$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Une agence web achète de l’électricité pour faire tourner ses bureaux et un logiciel de comptabilité utilisable pendant 5 ans. Comment classe-t-on ces deux achats en comptabilité nationale ?',
              options: [
                'Électricité = Consommation Intermédiaire ($CI$) ; Logiciel durable = Formation Brute de Capital Fixe ($FBCF$)',
                'Les deux sont des Consommations Finales ($CF$)',
                'Électricité = $FBCF$ ; Logiciel = Exportation ($X$)',
                'Les deux sont des Variations de Stocks ($\\Delta S$)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’électricité est détruite immédiatement au cours de la production ($CI$), alors qu’un logiciel utilisé durablement sur plusieurs exercices est un investissement immatériel ($FBCF$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'FBCF Ménages',
            stepTheme: 'Logement vs Durables',
            stepTitle: 'Distinction fine entre CF et FBCF : le cas particulier des ménages',
            paragraphText:
              'De nombreux étudiants pensent qu’une voiture neuve ou un réfrigérateur acheté par un ménage compte comme un investissement ($FBCF$). La comptabilité nationale adopte une convention très précise !\n' +
              '• **Pour les entreprises (SNF/SF)** : machines, véhicules professionnels, bâtiments et logiciels durables relèvent de la $FBCF$.\n' +
              '• **Pour les ménages (hors entrepreneurs individuels)** : la $FBCF$ est strictement **limitée à l’achat ou la construction de logements neufs** !\n' +
              '• **Biens durables courants des ménages** : voitures personnelles, téléviseurs, smartphones et électroménager sont tous comptabilisés en **Consommation Finale ($CF$)**.',
            keyRule:
              'Convention incontournable : chez les ménages, seul l’achat de **logements** constitue de la $FBCF$ ; tous les autres biens durables (voiture, smartphone, frigo) relèvent de la $CF$ !',
            konanTip:
              'Cette distinction tombe très régulièrement en QCM de comptabilité nationale : garde en tête « FBCF ménages = Logement uniquement ».',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Lequel de ces achats effectués par un ménage salarié est comptabilisé en Formation Brute de Capital Fixe ($FBCF$) en comptabilité nationale ?',
              options: [
                'L’achat d’un smartphone haut de gamme',
                'L’achat d’un appartement neuf pour y habiter',
                'L’achat d’une voiture de tourisme personnelle',
                'L’achat d’actions cotées à la BRVM',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En comptabilité nationale, la FBCF des ménages se limite à l’acquisition de logements (les biens durables courants sont de la CF, et les actions sont des placements financiers hors FBCF).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Stocks ΔS',
            stepTheme: 'Stockage vs Déstockage',
            stepTitle: 'Interpréter une variation de stocks positive ou négative',
            paragraphText:
              'Parmi les cinq emplois, la **variation de stocks** ($\\Delta S = S_{\\text{fin}} - S_{\\text{début}}$) est la seule grandeur qui puisse être **négative** — et son signe est un précieux thermomètre conjoncturel !\n' +
              '• **$\\Delta S > 0$ (stockage)** : la production courante a dépassé les ventes ; les invendus s’accumulent en entrepôt (positif dans le PIB car ces biens ont bien été produits cette année).\n' +
              '• **$\\Delta S < 0$ (déstockage)** : les ventes ont dépassé la production de l’année en puisant dans des stocks fabriqués lors d’exercices antérieurs.\n' +
              '• **Pourquoi retrancher le déstockage ?** : pour éviter de compter deux fois dans le PIB de 2026 un téléviseur déjà produit et comptabilisé en stock en 2025 !',
            keyRule:
              'Une variation de stocks négative ($\\Delta S < 0$) traduit un **déstockage** et non une erreur comptable : elle ajuste les ventes à la véritable production de l’année.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Une entreprise fabrique 1 000 tablettes en année N mais en vend 1 200 grâce à ses réserves de l’année N−1. Quel est le signe de sa variation de stocks ($\\Delta S$) en année N ?',
              options: [
                'Négative ($\\Delta S = -200$ tablettes : déstockage)',
                'Positive ($\\Delta S = +200$ tablettes : stockage)',
                'Strictement nulle',
                'Égale à $+1\\,200$ tablettes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Puisque les ventes (1 200) excèdent la production de l’année (1 000), l’entreprise a réduit ses stocks de 200 unités ($\\Delta S = -200$), assurant que $C + \\Delta S = 1\\,200 - 200 = 1\\,000$ = production réelle de l’année N.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Identité Y',
            stepTheme: 'Offre = Demande globale',
            stepTitle: 'Écrire et manipuler l’équilibre emplois-ressources en biens finaux',
            paragraphText:
              'En retirant les consommations intermédiaires ($CI$) pour ne garder que la création nette de richesse (les biens et services finaux), l’équilibre comptable prend sa forme la plus célèbre en macroéconomie.\n' +
              '• **Offre globale = Demande globale** : $Y + M = C + FBCF + \\Delta S + X$.\n' +
              '• **En regroupant l’investissement** $I = FBCF + \\Delta S$ et en passant $M$ à droite : $Y = C + I + (X - M)$ (ou $Y = C + I + G + X - M$ lorsqu’on sépare la consommation publique $G$).\n' +
              '• **Exemple** : si $C = 500$, $I = 180$, $X = 140$ et $M = 170$, alors $Y = 500 + 180 + (140 - 170) = 650$.',
            formula: {
              name: 'Équilibre emplois-ressources fondamental',
              formula: 'Y + M = C + I + X \\iff Y = \\underbrace{C + I}_{\\text{Dépense interne}} + \\underbrace{(X - M)}_{\\text{Solde extérieur}}',
              note: 'Notez que $M$ est soustrait car les importations sont incluses dans les dépenses $C$ et $I$, mais n’ont pas été produites sur le territoire national.',
            },
            konanTip:
              'Pourquoi soustrait-on $M$ dans $Y = C + I + X - M$ ? Si un ménage achète un iPhone importé de 500 000 FCFA, $C$ augmente de $+500\\,000$ et $M$ de $+500\\,000$ : l’effet net sur le PIB local $Y$ est bien $0$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans une économie ouverte : $C = 6\\,500$, $FBCF = 2\\,100$, $\\Delta S = -100$, $X = 1\\,900$ et $M = 2\\,400$. Quelle est la valeur de la production finale $Y$ ?',
              options: [
                '9 000',
                '8 200',
                '8 000',
                '10 400',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$I = 2\\,100 - 100 = 2\\,000$ ; solde externe $= 1\\,900 - 2\\,400 = -500$. Donc $Y = 6\\,500 + 2\\,000 - 500 = 8\\,000$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Absorption',
            stepTheme: 'Solde extérieur',
            stepTitle: 'Relier dépense interne (absorption) et solde commercial (X − M)',
            paragraphText:
              'Réécrivons l’équilibre comptable sous la forme $X - M = Y - (C + I)$ : cette écriture révèle le sens macroéconomique profond d’un déficit ou d’un excédent commercial !\n' +
              '• **Dépense interne (ou absorption $A = C + I$)** : total des biens et services utilisés à l’intérieur du pays.\n' +
              '• **Excédent extérieur ($X > M$)** : le pays produit PLUS qu’il ne dépense sur place ($Y > A$) et exporte son surplus (prêteur net envers l’étranger).\n' +
              '• **Déficit extérieur ($X < M$)** : la dépense interne dépasse la production nationale ($A > Y$) ; le pays doit recourir aux importations nettes et s’endetter vis-à-vis du Reste du Monde.',
            keyRule:
              'Un déficit commercial ($X - M < 0$) signifie rigoureusement que la nation dépense plus qu’elle ne produit ($C + I > Y$).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Un pays affiche une production nationale $Y = 30\\,000$ Mds FCFA et une dépense interne totale ($C + I$) de $31\\,800$ Mds FCFA. Que peut-on en déduire sur son solde extérieur $(X - M)$ ?',
              options: [
                'Un excédent commercial de $+1\\,800$ Mds FCFA',
                'Un solde commercial exactement équilibré',
                'Un déficit commercial de $-1\\,800$ Mds FCFA ($M > X$)',
                'Des exportations nulles',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$X - M = Y - (C + I) = 30\\,000 - 31\\,800 = -1\\,800$ Mds FCFA : les importations excèdent les exportations de 1 800 Mds FCFA pour couvrir le surplus de demande interne.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Contrôle complet',
            stepTitle: 'Retrouver une composante manquante dans le tableau emplois-ressources',
            paragraphText:
              'Dans les études de cas de comptabilité nationale, une composante (souvent $FBCF$, $\\Delta S$ ou $M$) est laissée inconnue et se déduit immédiatement de l’égalité Ressources = Emplois.\n' +
              '• **Méthode systématique** : écris d’abord la colonne Ressources ($P + M$, ou $Y + M$ hors $CI$) et la colonne Emplois ($C + FBCF + \\Delta S + X$).\n' +
              '• **Contrôle des unités et signes** : vérifie si $G$ (dépense publique) est déjà incluse dans $CF$ ou donnée séparément, et conserve toujours le signe algébrique de $\\Delta S$.\n' +
              '• **Exemple** : si $Y = 10\\,000$, $M = 2\\,500$, $C = 7\\,000$, $FBCF = 2\\,800$, $X = 2\\,300$, alors Ressources $= 12\\,500$, emplois hors stocks $= 12\\,100 \\implies \\Delta S = +400$ (stockage).',
            konanTip:
              'Avant de calculer, repère toujours si l’énoncé donne la Production brute $P$ (avec $CI$ à inclure dans les emplois) OU le PIB $Y$ (qui exclut déjà $CI$) !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'On donne (en Mds FCFA) : $Y = 15\\,000$, $M = 4\\,000$, $C = 11\\,500$, $FBCF = 3\\,800$ et $X = 3\\,900$. Quelle est la valeur de la variation de stocks $\\Delta S$ ?',
              options: [
                '$+200$ Mds FCFA (stockage)',
                '$-200$ Mds FCFA (déstockage)',
                '$+400$ Mds FCFA',
                '$0$ Mds FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ressources $= Y + M = 19\\,000$. Emplois $= 11\\,500 + 3\\,800 + 3\\,900 + \\Delta S = 19\\,200 + \\Delta S$. Donc $\\Delta S = 19\\,000 - 19\\,200 = -200$ Mds FCFA (déstockage).',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : MESURE DE L’ACTIVITÉ ÉCONOMIQUE : PIB, INFLATION ET CHÔMAGE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch2',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Mesure de l’activité : PIB, déflateur, inflation et chômage',
    summary:
      'Calculer le PIB selon les trois optiques, distinguer PIB nominal, PIB réel et déflateur, relier PIB, PNB et IDH, mesurer l’inflation par l’IPC et maîtriser les taux du marché du travail.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Macroéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 2.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch2_p1',
        order: 1,
        title: 'Le PIB selon les trois optiques, le PNB et l’IDH',
        summary:
          'Maîtriser les optiques production (Valeurs Ajoutées), dépense et revenu du PIB, distinguer PIB (territorialité) et PNB (nationalité), et analyser les limites du PIB face à l’IDH.',
        conceptExplanation:
          'Le **Produit Intérieur Brut (PIB)** est l’agrégat phare qui mesure la valeur monétaire de tous les **biens et services finaux** produits sur le territoire économique d’un pays pendant une période donnée (an ou trimestre), quelle que soit la nationalité des producteurs.\n\n' +
          'Par cohérence du circuit économique, il se calcule selon **trois optiques rigoureusement équivalentes** :\n' +
          '1. **Optique production** : $PIB = \\sum VA + \\text{Impôts sur les produits} - \\text{Subventions sur les produits}$, où la **Valeur Ajoutée** d’une firme vaut $VA = \\text{Production} - \\text{Consommation Intermédiaire}$ (évitant tout double comptage !).\n' +
          '2. **Optique dépense** : $PIB = C + FBCF + \\Delta S + X - M$.\n' +
          '3. **Optique revenu** : $PIB = \\text{Rémunération des salariés} + \\text{EBE} + \\text{Revenu mixte} + \\text{Impôts sur la production/importations} - \\text{Subventions}$.\n\n' +
          'Le **Produit National Brut (PNB)** (ou RNB) applique le critère de **nationalité** : $PNB = PIB + \\text{Revenus reçus du RDM} - \\text{Revenus versés au RDM}$. Enfin, l’**Indice de Développement Humain (IDH)** du PNUD complète le PIB en agrégeant trois dimensions : niveau de vie (RNB/hab.), santé (espérance de vie) et éducation (scolarisation).',
        keyRule:
          'PIB = critère de TERRITOIRE (somme des Valeurs Ajoutées, jamais des chiffres d’affaires !). PNB = PIB + revenus reçus du RDM − revenus versés au RDM.',
        formulas: [
          {
            name: 'Les trois optiques du PIB',
            formula: 'PIB = \\sum VA + T_p - Sub_p = C + FBCF + \\Delta S + X - M = W + EBE + RMix + T - Sub',
            note: 'Avec VA = Production − Consommations Intermédiaires (CI).',
          },
          {
            name: 'Passage du PIB au PNB',
            formula: 'PNB = PIB + \\text{Revenus de facteurs reçus du RDM} - \\text{Revenus de facteurs versés au RDM}',
            note: 'Dans un pays accueillant de nombreuses filiales étrangères qui rapatrient leurs dividendes, PNB < PIB.',
          },
        ],
        workedExample: {
          title: 'Éviter le double comptage : du blé au pain (optique VA) et calcul du PNB',
          statement:
            'A) Un agriculteur vend du blé à 100 FCFA (CI = 0) à un meunier qui vend la farine à 220 FCFA au boulanger, lequel vend le pain final aux ménages à 400 FCFA. Calculez la contribution au PIB.\nB) Un pays a un PIB de 48 000 Mds FCFA, reçoit 1 500 Mds FCFA de revenus de l’étranger et verse 4 000 Mds FCFA au Reste du Monde. Calculez son PNB.',
          methodSteps: [
            'A1) Valeurs ajoutées : $VA_{\\text{agriculteur}} = 100 - 0 = 100$ ; $VA_{\\text{meunier}} = 220 - 100 = 120$ ; $VA_{\\text{boulanger}} = 400 - 220 = 180$.',
            'A2) Somme des VA : $100 + 120 + 180 = 400$ FCFA — exactement égal à la valeur du bien final (pain = 400 FCFA), et NON à la somme des ventes $100 + 220 + 400 = 720$ !',
            'B) $PNB = 48\\,000 + 1\\,500 - 4\\,000 = 45\\,500$ Mds FCFA (inférieur au PIB de 2 500 Mds FCFA en raison des revenus de facteurs nets versés à l’étranger).',
          ],
          conclusion:
            'Sommer les valeurs ajoutées élimine rigoureusement les doubles comptages et coïncide exactement avec l’optique de la dépense finale.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition PIB',
            stepTheme: 'Biens finaux & Territoire',
            stepTitle: 'Ce que le PIB mesure — et ce qu’il exclut pour éviter le double comptage',
            paragraphText:
              'Le **PIB** comptabilise la richesse **nouvellement créée** sur un territoire pendant une période donnée (flux annuel ou trimestriel).\n' +
              '• **Critère des biens finaux** : on n’additionne jamais les ventes intermédiaires (blé + farine + pain) afin de ne pas compter trois fois le même blé.\n' +
              '• **Exclusions strictes** : la revente de biens d’occasion (ex. voiture d’occasion déjà comptée lors de sa production), les achats purement financiers (actions, obligations) et les transferts publics sans production (bourses, pensions) n’entrent **pas** dans le PIB.\n' +
              '• **Services non marchands** : la police, l’école publique ou la justice sont intégrés au PIB, évalués à leur **coût de production** (principalement les salaires des fonctionnaires).',
            keyRule:
              'Le PIB mesure un FLUX de production nouvelle de l’année : sont exclus les biens d’occasion, les échanges d’actions/obligations et les simples transferts sociaux.',
            konanTip:
              'Piège classique : la vente d’une maison construite il y a 10 ans n’entre PAS dans le PIB de cette année, MAIS la commission perçue par l’agent immobilier aujourd’hui Y ENTRE car c’est un service nouveau !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces transactions est INCLUSE dans le calcul du PIB de l’année en cours ?',
              options: [
                'La revente entre particuliers d’un ordinateur portable acheté il y a trois ans',
                'L’achat sur la BRVM de 100 actions d’une banque cotée',
                'La rémunération facturée cette année par une start-up ivoirienne pour développer une application mobile',
                'Le versement d’une bourse universitaire par l’État à un étudiant',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le développement d’une nouvelle application est une création de service final au cours de l’année ; biens d’occasion, achats d’actions et transferts sont exclus du PIB.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Optique VA',
            stepTheme: 'Production',
            stepTitle: 'Calculer le PIB par l’optique de la production (somme des Valeurs Ajoutées)',
            paragraphText:
              'La **Valeur Ajoutée (VA)** mesure la richesse réellement créée par une entreprise au-delà des biens et services qu’elle a achetés à ses fournisseurs.\n' +
              '• **Formule** : $VA = \\text{Valeur de la Production (CA)} - \\text{Consommations Intermédiaires (CI)}$.\n' +
              '• **Passage au PIB** : $PIB = \\sum VA + \\text{Impôts sur les produits (TVA, droits de douane)} - \\text{Subventions sur les produits}$.\n' +
              '• **Exemple** : une chocolaterie d’Abidjan achète 150 M FCFA de fèves et d’énergie ($CI$) et vend pour 420 M FCFA de tablettes ⇒ sa contribution directe au PIB est $VA = 420 - 150 = 270\\text{ M FCFA}$.',
            formula: {
              name: 'Optique de la production',
              formula: 'VA = P - CI \\quad \\implies \\quad PIB = \\sum VA + \\text{Impôts sur les produits} - \\text{Subventions sur les produits}',
              note: 'La TVA et les droits de douane ne figurent pas dans les VA hors taxes des firmes : on les rajoute au niveau global pour passer aux prix du marché.',
            },
            keyRule:
              'Pour calculer la contribution d’une filière entière au PIB, additionne les Valeurs Ajoutées de chaque maillon (ou prends directement la valeur finale vendue aux ménages).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Une filière comprend une scierie (ventes = 200, CI = 0), un menuisier (ventes = 550, CI = 200) et un distributeur (ventes = 750, CI = 550). Hors taxes, quelle est la contribution totale de cette filière au PIB ?',
              options: ['1 500', '750', '550', '950'],
              correctAnswerIndex: 1,
              explanation:
                '$VA_1 = 200$, $VA_2 = 550 - 200 = 350$, $VA_3 = 750 - 550 = 200$. Somme des VA $= 200 + 350 + 200 = 750$ (= valeur du produit final vendu au consommateur).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Dépense & Revenu',
            stepTheme: '3 optiques égales',
            stepTitle: 'Maîtriser l’optique de la dépense et l’optique du revenu',
            paragraphText:
              'La richesse créée (optique production) est nécessairement dépensée par des acheteurs (optique dépense) et distribuée en revenus aux acteurs qui ont participé à sa fabrication (optique revenu).\n' +
              '• **Optique de la dépense** : $PIB = C + FBCF + \\Delta S + X - M$ (consommation finale, investissement global et exportations nettes).\n' +
              '• **Optique du revenu** : la Valeur Ajoutée se partage entre **Rémunération des salariés** (salaires bruts + cotisations), **Excédent Brut d’Exploitation — EBE** (rémunération du capital des sociétés), **Revenu mixte** (entrepreneurs individuels) et **Impôts nets de subventions** sur la production.\n' +
              '• **Cohérence** : aux erreurs statistiques près, les trois méthodes aboutissent au même FCFA près au même PIB !',
            konanTip:
              'Pour retenir l’optique revenu, demande-toi qui se partage la Valeur Ajoutée d’une entreprise : (1) les travailleurs (salaires), (2) l’entreprise/actionnaires (EBE + revenu mixte), et (3) l’État (impôts nets).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle formule correspond exactement au calcul du PIB selon l’optique du REVENU ?',
              options: [
                '$PIB = C + FBCF + \\Delta S + X - M$',
                '$PIB = \\sum VA + \\text{Impôts sur les produits} - \\text{Subventions}$',
                '$PIB = \\text{Rémunération des salariés} + \\text{EBE} + \\text{Revenu mixte} + \\text{Impôts nets sur la production et importations}$',
                '$PIB = M1 + M2 + \\text{Réserves obligatoires}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’optique revenu additionne l’ensemble des revenus primaires distribués lors de la production : travail (salaires), capital (EBE et revenu mixte) et État (impôts nets).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'PIB vs PNB',
            stepTheme: 'Territoire vs Nationalité',
            stepTitle: 'Passer du PIB (territorial) au PNB (national)',
            paragraphText:
              'Si une entreprise française fabrique des produits à Abidjan, ou si un ingénieur ivoirien travaille à Paris, dans quel pays compte leur richesse ? Deux agrégats répondent à deux questions différentes.\n' +
              '• **PIB (critère de territorialité)** : tout ce qui est produit **à l’intérieur des frontières** du pays, que les producteurs soient nationaux ou étrangers.\n' +
              '• **PNB / RNB (critère de nationalité)** : tous les revenus primaires perçus par les **ressortissants / agents nationaux**, où qu’ils produisent dans le monde.\n' +
              '• **Formule de passage** : $PNB = PIB + \\text{Revenus reçus du RDM} - \\text{Revenus versés au RDM}$.',
            formula: {
              name: 'Relation entre PIB et PNB',
              formula: 'PNB = PIB + R_{\\text{reçus du RDM}} - R_{\\text{versés au RDM}}',
              note: 'R_reçus − R_versés est appelé « solde des revenus primaires avec le Reste du Monde ».',
            },
            keyRule:
              'PIB = « Intérieur » (lieu géographique de production). PNB = « National » (appartenance nationale des facteurs de production).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Les bénéfices réalisés par une filiale européenne de télécoms opérant en Côte d’Ivoire et rapatriés vers sa maison mère à Paris sont comptabilisés dans :',
              options: [
                'Le PIB de la Côte d’Ivoire et le PNB de la France',
                'Le PNB de la Côte d’Ivoire et le PIB de la France',
                'Uniquement le PIB de la France',
                'Aucun des deux agrégats',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La production a lieu sur le territoire ivoirien (⇒ PIB ivoirien), mais le revenu est versé à un propriétaire français (⇒ retranché du PNB ivoirien et ajouté au PNB français).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Écart PIB/PNB',
            stepTheme: 'Pays en développement',
            stepTitle: 'Pourquoi l’écart PIB − PNB est souvent marqué dans les économies en développement',
            paragraphText:
              'Dans la plupart des pays développés, le PIB et le PNB sont très proches (flux croisés presque équilibrés). Qu’en est-il dans des économies émergentes ou en développement comme en Afrique de l’Ouest ?\n' +
              '• **Forte présence d’Investissements Directs Étrangers (IDE)** : mines, pétrole, télécoms, banques et agro-industrie accueillent d’importants capitaux étrangers.\n' +
              '• **Rapatriement de revenus** : les dividendes et intérêts de la dette extérieure versés au RDM dépassent souvent les revenus reçus de l’étranger ($R_{\\text{versés}} > R_{\\text{reçus}}$), rendant le **PNB sensiblement inférieur au PIB**.\n' +
              '• **Nuance** : les transferts de la diaspora (envois de fonds) relèvent des revenus secondaires (Revenu National Disponible) et soutiennent fortement la consommation locale.',
            konanTip:
              'Ne confonds pas $PNB < PIB$ (rapatriement net de profits/intérêts vers l’étranger) avec un déficit commercial ($X < M$) : ce sont deux postes distincts de la balance des paiements !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Dans un pays où le PIB vaut 40 000 Mds FCFA, les revenus primaires reçus du RDM valent 900 Mds FCFA et les revenus primaires versés au RDM valent 2 700 Mds FCFA, que vaut le PNB ?',
              options: [
                '41 800 Mds FCFA',
                '38 200 Mds FCFA',
                '43 600 Mds FCFA',
                '37 300 Mds FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$PNB = 40\\,000 + 900 - 2\\,700 = 38\\,200$ Mds FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limites & IDH',
            stepTheme: 'Au-delà du PIB',
            stepTitle: 'Limites du PIB et apport de l’Indice de Développement Humain (IDH)',
            paragraphText:
              'Le PIB mesure la production marchande et administrative, mais il n’est **pas** un indicateur parfait du bien-être collectif ! Quatre angles morts majeurs doivent être connus.\n' +
              '• **Économie informelle et travail domestique** : une part majeure des activités informelles et tout le travail domestique non rémunéré échappent aux statistiques officielles.\n' +
              '• **Externalités négatives et dégâts** : une marée noire ou des embouteillages augmentent le PIB (dépenses de dépollution, carburant brûlé) alors qu’ils dégradent la qualité de vie !\n' +
              '• **Inégalités** : un PIB par habitant élevé peut masquer de profondes disparités sociales.\n' +
              '• **IDH (PNUD, Amartya Sen)** : indice compris entre $0$ et $1$ combinant trois piliers — **santé** (espérance de vie), **éducation** (durées de scolarisation) et **niveau de vie** (RNB/hab. en PPA).',
            keyRule:
              'L’IDH $\\in [0 ; 1]$ complète le PIB en évaluant trois dimensions du développement humain : espérance de vie (santé), niveau d’instruction (éducation) et RNB par habitant.',
            konanTip:
              'Retiens les 3 composantes de l’IDH par le sigle S-E-R : Santé, Éducation, Revenu (en Parité de Pouvoir d’Achat).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Quelles sont les trois dimensions combinées dans le calcul de l’Indice de Développement Humain (IDH) publié par le PNUD ?',
              options: [
                'Le taux d’inflation, le déficit budgétaire et les exportations de matières premières',
                'La masse monétaire M2, le taux directeur et le cours de la bourse',
                'La santé (espérance de vie), l’éducation (scolarisation) et le niveau de vie (RNB par habitant en PPA)',
                'Uniquement le PIB nominal divisé par la population active',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Créé en 1990 sous l’impulsion d’Amartya Sen et Mahbub ul Haq, l’IDH synthétise santé, éducation et revenu par habitant sur une échelle de 0 à 1.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch2_p2',
        order: 2,
        title: 'PIB nominal, PIB réel, taux de croissance et déflateur du PIB',
        summary:
          'Calculer le PIB nominal (prix courants) et le PIB réel (prix constants d’une année de base), mesurer la vraie croissance en volume et calculer le déflateur du PIB.',
        conceptExplanation:
          'Si le PIB exprimé en FCFA augmente de 12 % cette année, le pays a-t-il vraiment produit 12 % de biens en plus, ou les prix ont-ils simplement flambé de 12 % ? Pour séparer l’**effet volume** de l’**effet prix**, la macroéconomie distingue deux mesures :\n\n' +
          '• **PIB nominal (en valeur / aux prix courants)** : valorise les quantités de l’année $t$ aux prix de la même année $t$ : $PIB_{\\text{nom},t} = \\sum P_{i,t} \\cdot Q_{i,t}$.\n' +
          '• **PIB réel (en volume / aux prix constants)** : valorise les quantités de l’année $t$ aux prix figés d’une **année de base $0$** : $PIB_{\\text{réel},t} = \\sum P_{i,0} \\cdot Q_{i,t}$. Seul le PIB réel mesure la véritable croissance économique !\n\n' +
          'Le **taux de croissance économique réel** vaut $g_t = \\frac{PIB_{\\text{réel},t} - PIB_{\\text{réel},t-1}}{PIB_{\\text{réel},t-1}} \\times 100$.\n' +
          'Le **déflateur du PIB** $= \\frac{PIB_{\\text{nom},t}}{PIB_{\\text{réel},t}} \\times 100$ mesure l’évolution moyenne du niveau des prix de toute la production intérieure (il vaut exactement $100$ à l’année de base).',
        keyRule:
          'À l’année de base $0$ : $PIB_{\\text{nom},0} = PIB_{\\text{réel},0}$ et Déflateur $= 100$. En général : $\\text{Croissance nominale} \\approx \\text{Croissance réelle} + \\text{Inflation (déflateur)}$.',
        formulas: [
          {
            name: 'PIB nominal, PIB réel et Déflateur du PIB',
            formula: 'PIB_{\\text{nom},t} = \\sum P_{i,t} Q_{i,t}, \\quad PIB_{\\text{réel},t} = \\sum P_{i,0} Q_{i,t}, \\quad \\text{Déflateur}_t = \\frac{PIB_{\\text{nom},t}}{PIB_{\\text{réel},t}} \\times 100',
            note: 'En inversant la formule du déflateur : PIB_réel = (PIB_nom / Déflateur) × 100.',
          },
          {
            name: 'Taux de croissance réel et Règle de 70',
            formula: 'g_t = \\frac{PIB_{\\text{réel},t} - PIB_{\\text{réel},t-1}}{PIB_{\\text{réel},t-1}} \\times 100 \\quad | \\quad T_{\\text{doublement}} \\approx \\frac{70}{g\\text{ (en \\%)}}',
            note: 'À 7 % de croissance réelle par an, un pays double son PIB réel en seulement ~10 ans !',
          },
        ],
        workedExample: {
          title: 'Isoler croissance réelle et inflation sur une économie à deux biens',
          statement:
            'En 2023 (année de base) : 100 unités du bien A à 10 € et 150 unités du bien B à 20 €. En 2024 : 110 unités de A à 12 € et 160 unités de B à 22 €. Calculez $PIB_{\\text{nom}}$ 2023 et 2024, $PIB_{\\text{réel}}$ 2024, le taux de croissance réel et le déflateur 2024.',
          methodSteps: [
            'PIB nominal 2023 (= PIB réel 2023 car année de base) : $(100 \\times 10) + (150 \\times 20) = 1\\,000 + 3\\,000 = 4\\,000\\text{ €}$.',
            'PIB nominal 2024 (prix 2024 × quantités 2024) : $(110 \\times 12) + (160 \\times 22) = 1\\,320 + 3\\,520 = 4\\,840\\text{ €}$ (+21 % nominal !).',
            'PIB réel 2024 (prix 2023 × quantités 2024) : $(110 \\times 10) + (160 \\times 20) = 1\\,100 + 3\\,200 = 4\\,300\\text{ €}$.',
            'Taux de croissance réel 2023–2024 : $\\frac{4\\,300 - 4\\,000}{4\\,000} \\times 100 = +7,5\\,\\%$.',
            'Déflateur du PIB 2024 : $\\frac{4\\,840}{4\\,300} \\times 100 \\approx 112,56$ (hausse des prix intérieurs de $+12,56\\,\\%$).',
          ],
          conclusion:
            'Vérification rapide : $1,075 \\times 1,1256 = 1,210 = +21\\,\\%$ nominal. Sur les +21 % de hausse en valeur, seuls +7,5 % correspondent à une croissance réelle en volume !',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Nominal vs Réel',
            stepTheme: 'Effet prix vs volume',
            stepTitle: 'Distinguer PIB nominal (valeur) et PIB réel (volume)',
            paragraphText:
              'Un PIB nominal qui explose peut être un simple mirage inflationniste ! Seul le **PIB réel** neutralise les variations de prix pour révéler l’augmentation effective des quantités produites.\n' +
              '• **PIB nominal** ($\\sum P_t Q_t$) : calculé aux prix courants de l’année observée ; il varie si les prix montent, si les quantités montent, ou les deux.\n' +
              '• **PIB réel** ($\\sum P_0 Q_t$) : calculé en FCFA constants d’une année de référence $0$ ; il ne varie **que** si les volumes produits changent.\n' +
              '• **Lecture graphique** : sur le diagramme ci-dessous, en 2022 (année de base) les deux barres sont égales (4 000) ; en 2024, l’écart grandissant (5 200 vs 4 400) matérialise visuellement l’inflation cumulée !',
            keyRule:
              'En période d’inflation positive après l’année de base, le PIB nominal est toujours SUPÉRIEUR au PIB réel ; avant l’année de base, il lui est inférieur.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Comparaison PIB nominal vs PIB réel (Base 2022 = prix constants)',
              caption: 'L’écart croissant entre PIB nominal (prix courants) et PIB réel (en volume) mesure l’effet prix (inflation).',
              barChart: {
                yLabel: 'Milliards FCFA',
                unit: ' Mds',
                bars: [
                  { label: '2022 Nom.', value: 4000, color: 'blue', annotation: 'Base' },
                  { label: '2022 Réel', value: 4000, color: 'green', annotation: '= Nom.' },
                  { label: '2023 Nom.', value: 4550, color: 'blue', annotation: '+13,8%' },
                  { label: '2023 Réel', value: 4200, color: 'green', annotation: '+5,0%' },
                  { label: '2024 Nom.', value: 5200, color: 'blue', annotation: '+14,3%' },
                  { label: '2024 Réel', value: 4400, color: 'green', annotation: '+4,8%' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Entre 2023 et 2024, les quantités produites dans un pays restent strictement identiques, mais tous les prix augmentent de 8 %. Que deviennent le PIB nominal et le PIB réel ?',
              options: [
                'Le PIB nominal augmente de 8 % et le PIB réel reste strictement inchangé (+0 %)',
                'Le PIB nominal et le PIB réel augmentent tous les deux de 8 %',
                'Le PIB réel augmente de 8 % et le PIB nominal reste inchangé',
                'Les deux diminuent de 8 %',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le PIB nominal intègre la hausse de 8 % des prix courants, tandis que le PIB réel garde les prix constants de l’année de base et ne change donc pas quand les quantités sont fixes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul PIB réel',
            stepTheme: 'Prix de base × Q_t',
            stepTitle: 'Calculer un PIB réel à partir d’un tableau quantités/prix',
            paragraphText:
              'La formule du PIB réel est redoutablement simple, à condition de ne jamais mélanger la colonne des prix de l’année de base et celle des prix courants !\n' +
              '• **Réflexe mécanique** : pour le **PIB nominal** de l’année $t$, multiplie la ligne $Q_t$ par la ligne $P_t$. Pour le **PIB réel** de l’année $t$, multiplie la ligne $Q_t$ par la ligne **$P_0$** (année de base).\n' +
              '• **Exemple** : année de base 2020 (riz : 500 FCFA, téléphones : 50 000 FCFA). En 2024, on produit 200 sacs de riz (à 650 FCFA) et 10 téléphones (à 60 000 FCFA). PIB réel 2024 $= 200(500) + 10(50\\,000) = 600\\,000$ FCFA (contre $730\\,000$ FCFA en nominal).',
            konanTip:
              'Entoure au crayon la colonne des PRIX DE L’ANNÉE DE BASE sur ton brouillon d’examen : c’est celle que tu utiliseras pour TOUS les PIB réels !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Année de base 2022 : prix du bien X = 5 €, prix du bien Y = 10 €. En 2024, on produit 40 unités de X (vendues 8 €) et 30 unités de Y (vendues 12 €). Quel est le PIB réel de 2024 (base 2022) ?',
              options: ['680 €', '500 €', '560 €', '620 €'],
              correctAnswerIndex: 1,
              explanation:
                '$PIB_{\\text{réel},2024} = (40 \\times 5) + (30 \\times 10) = 200 + 300 = 500\\text{ €}$ (alors que le PIB nominal vaut $40\\times 8 + 30\\times 12 = 680\\text{ €}$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Croissance',
            stepTheme: 'Taux g & Règle de 70',
            stepTitle: 'Calculer le taux de croissance réel et le temps de doublement',
            paragraphText:
              'La croissance économique est le taux de variation relatif du PIB réel (en volume) d’une période à la suivante.\n' +
              '• **Formule exacte** : $g_t = \\frac{PIB_{\\text{réel},t} - PIB_{\\text{réel},t-1}}{PIB_{\\text{réel},t-1}} \\times 100$.\n' +
              '• **Effet exponentiel (Règle de 70)** : un écart de 2 ou 3 points de croissance paraît faible sur un an, mais bouleverse un pays sur une génération ! Le nombre d’années pour doubler le PIB vaut approximativement $70 / g$.\n' +
              '• **Exemple** : à $+7\\,\\%$ de croissance par an, le PIB double en $\\approx 10$ ans (multiplié par 8 en 30 ans !) ; à $+2\\,\\%$, il faut $\\approx 35$ ans pour simplement doubler.',
            keyRule:
              'Le taux de croissance se divise TOUJOURS par la valeur de DÉPART ($t-1$), jamais par la valeur d’arrivée ($t$).',
            konanTip:
              'La Règle de 70 ($T \\approx 70/g$) permet d’estimer de tête le doublement de n’importe quelle grandeur composée (PIB, prix, population, capital bancaire) !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Le PIB réel d’une économie passe de 25 000 Mds FCFA en 2023 à 26 750 Mds FCFA en 2024. Quel est son taux de croissance réel, et en combien d’années environ doublerait-il si ce rythme se maintenait ?',
              options: [
                '$+6,5\\,\\%$ et doublement en ~20 ans',
                '$+7\\,\\%$ et doublement en ~10 ans',
                '$+17,5\\,\\%$ et doublement en ~4 ans',
                '$+7\\,\\%$ et doublement en ~70 ans',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$g = \\frac{26\\,750 - 25\\,000}{25\\,000} \\times 100 = \\frac{1\\,750}{25\\,000} \\times 100 = +7\\,\\%$. Par la règle de 70 : $70 / 7 = 10$ ans.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Déflateur',
            stepTheme: 'Indice implicite',
            stepTitle: 'Calculer et utiliser le déflateur du PIB (indice de Paasche)',
            paragraphText:
              'Le **déflateur du PIB** est l’indice implicite des prix de toute la production intérieure. Il sert à deux usages essentiels.\n' +
              '• **Calculer le niveau général des prix** : $\\text{Déflateur}_t = \\frac{PIB_{\\text{nom},t}}{PIB_{\\text{réel},t}} \\times 100$. Un déflateur de $115$ signifie que les prix intérieurs ont crû de $+15\\,\\%$ depuis l’année de base.\n' +
              '• **Déflater un PIB nominal** : si l’on connaît le PIB nominal et le déflateur, on retrouve immédiatement le PIB réel : $PIB_{\\text{réel}} = \\frac{PIB_{\\text{nom}}}{\\text{Déflateur}} \\times 100$.\n' +
              '• **Taux d’inflation par le déflateur** : $\\pi_t = \\frac{\\text{Déflateur}_t - \\text{Déflateur}_{t-1}}{\\text{Déflateur}_{t-1}} \\times 100$.',
            formula: {
              name: 'Déflater un agrégat nominal',
              formula: 'PIB_{\\text{réel},t} = \\frac{PIB_{\\text{nom},t}}{\\text{Déflateur}_t} \\times 100',
              note: 'Le déflateur est un indice de type Paasche (pondéré par les quantités courantes Q_t).',
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Un pays affiche en 2024 un PIB nominal de 6 600 Mds FCFA et un déflateur du PIB égal à 120 (base 100 en 2020). Quel est son PIB réel en FCFA constants de 2020 ?',
              options: [
                '7 920 Mds FCFA',
                '5 400 Mds FCFA',
                '5 500 Mds FCFA',
                '6 480 Mds FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$PIB_{\\text{réel}} = (6\\,600 / 120) \\times 100 = 55 \\times 100 = 5\\,500$ Mds FCFA. Vérification : $(6\\,600 / 5\\,500) \\times 100 = 120$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Décomposition',
            stepTheme: 'Approximation rapide',
            stepTitle: 'Relier croissance nominale, croissance réelle et inflation',
            paragraphText:
              'Puisque $PIB_{\\text{nom}} = \\frac{\\text{Déflateur}}{100} \\times PIB_{\\text{réel}}$, les taux de croissance des produits suivent une relation extrêmement pratique pour vérifier ses calculs de tête !\n' +
              '• **Relation exacte** : $(1 + g_{\\text{nom}}) = (1 + g_{\\text{réel}})(1 + \\pi)$.\n' +
              '• **Approximation linéaire** (pour de petits taux) : $g_{\\text{nom}} \\approx g_{\\text{réel}} + \\pi \\iff g_{\\text{réel}} \\approx g_{\\text{nom}} - \\pi$.\n' +
              '• **Exemple** : si le PIB nominal progresse de $+9\\,\\%$ et que le déflateur augmente de $+3\\,\\%$, la croissance réelle vaut approximativement $9 - 3 = +6\\,\\%$ (exactement $1,09 / 1,03 - 1 = +5,83\\,\\%$).',
            formula: {
              name: 'Décomposition de la croissance nominale',
              formula: '1 + g_{\\text{nom}} = (1 + g_{\\text{réel}})(1 + \\pi) \\implies g_{\\text{réel}} \\approx g_{\\text{nom}} - \\pi',
              note: 'Très utile pour détecter immédiatement une erreur de calcul en examen !',
            },
            konanTip:
              'Si $g_{\\text{nom}} = +4\\,\\%$ mais que l’inflation vaut $+6\\,\\%$, le pays est en RÉCESSION réelle ($g_{\\text{réel}} \\approx -2\\,\\%$) malgré un PIB nominal en hausse !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans un pays, le PIB nominal augmente de $+5\\,\\%$ au cours de l’année tandis que le déflateur du PIB augmente de $+8\\,\\%$. Quelle conclusion s’impose sur la croissance réelle ?',
              options: [
                'L’économie a connu une forte croissance réelle d’environ $+13\\,\\%$',
                'L’économie s’est contractée en volume (croissance réelle négative d’environ $-2,8\\,\\%$)',
                'La croissance réelle est exactement de $+3\\,\\%$',
                'Les prix ont baissé de 3 %',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$1 + g_{\\text{réel}} = 1,05 / 1,08 \\approx 0,9722 \\implies g_{\\text{réel}} \\approx -2,78\\,\\%$ (approximation : $5\\% - 8\\% = -3\\%$). L’inflation dépasse la hausse nominale : le volume produit a reculé.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Déflateur vs Niveau de prix',
            stepTitle: 'Calculer l’inflation entre deux années hors année de base',
            paragraphText:
              'Attention à un piège très courant lorsqu’on passe d’une année $t-1$ (qui n’est PAS l’année de base) à une année $t$ !\n' +
              '• **Erreur classique** : si le déflateur passe de $120$ en 2023 à $126$ en 2024, beaucoup d’étudiants écrivent $126 - 120 = 6\\,\\%$ — c’est **FAUX** ! $6$ est une variation en *points d’indice*, pas en pourcentage !\n' +
              '• **Calcul exact** : $\\pi_{2024} = \\frac{126 - 120}{120} \\times 100 = \\frac{6}{120} \\times 100 = +5,0\\,\\%$.\n' +
              '• **Règle absolue** : la simple soustraction $(\\text{Indice}_t - 100)$ ne donne le pourcentage d’inflation **que** par rapport à l’année de base (où l’indice vaut 100).',
            keyRule:
              'Entre deux années quelconques $t-1$ et $t$, le taux d’inflation vaut toujours $\\frac{I_t - I_{t-1}}{I_{t-1}} \\times 100$, JAMAIS simplement $I_t - I_{t-1}$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Le déflateur du PIB (base 100 en 2020) vaut 125 en 2023 et 135 en 2024. Quel est le taux d’inflation entre 2023 et 2024 ?',
              options: [
                '$10\\,\\%$',
                '$7,4\\,\\%$',
                '$35\\,\\%$',
                '$8\\,\\%$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$\\pi = \\frac{135 - 125}{125} \\times 100 = \\frac{10}{125} \\times 100 = 8\\,\\%$ (et non $10\\,\\%$ !).',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 2.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch2_p3',
        order: 3,
        title: 'Inflation (IPC) et indicateurs du marché du travail (population active et chômage)',
        summary:
          'Calculer l’IPC et le taux d’inflation, distinguer IPC et déflateur, inflation totale et sous-jacente, décomposer la population totale et calculer taux de chômage, d’activité et d’emploi.',
        conceptExplanation:
          'Aux côtés du PIB, deux indicateurs pilotent quotidiennement les politiques économiques : l’**inflation** (pouvoir d’achat) et le **chômage** (emploi).\n\n' +
          '1. **Inflation et IPC** : l’inflation est une hausse générale, auto-entretenue et durable du niveau général des prix (à distinguer de la **désinflation** — ralentissement de la hausse — et de la **déflation** — baisse générale des prix). L’**Indice des Prix à la Consommation (IPC)** (indice de Laspeyres à panier fixe $Q_0$) mesure le coût de la vie des ménages :\n' +
          '$$IPC_t = \\frac{\\sum P_{i,t} Q_{i,0}}{\\sum P_{i,0} Q_{i,0}} \\times 100, \\qquad \\pi_t = \\frac{IPC_t - IPC_{t-1}}{IPC_{t-1}} \\times 100$$\n' +
          'L’**inflation sous-jacente (*core*)** exclut les prix très volatils (produits frais, énergie) pour révéler la tendance profonde.\n\n' +
          '2. **Marché du travail** : au sein de la **Population en Âge de Travailler ($PAT$)**, on distingue les **inactifs** (étudiants, retraités, personnes au foyer) et la **Population Active ($PA = \\text{Emploi } E + \\text{Chômeurs } U$)**. On calcule trois ratios clés :\n' +
          '• **Taux de chômage** $u = \\frac{U}{PA} \\times 100$ ; **Taux d’activité** $= \\frac{PA}{PAT} \\times 100$ ; **Taux d’emploi** $= \\frac{E}{PAT} \\times 100$.',
        keyRule:
          'Piège n°1 d’examen : le taux de chômage a pour dénominateur la **Population ACTIVE ($E + U$)**, tandis que les taux d’activité et d’emploi ont pour dénominateur la **Population en Âge de Travailler ($PAT$)** !',
        formulas: [
          {
            name: 'Indice des Prix à la Consommation (IPC) et Inflation',
            formula: 'IPC_t = \\frac{\\text{Coût panier}_t}{\\text{Coût panier}_0} \\times 100, \\qquad \\pi_t = \\frac{IPC_t - IPC_{t-1}}{IPC_{t-1}} \\times 100',
            note: 'Contrairement au déflateur du PIB, l’IPC inclut les biens de consommation IMPORTÉS mais exclut les biens d’équipement industriels.',
          },
          {
            name: 'Les trois taux du marché du travail',
            formula: 'u = \\frac{U}{PA}, \\qquad \\text{Taux d’activité} = \\frac{PA}{PAT}, \\qquad \\text{Taux d’emploi} = \\frac{E}{PAT}',
            note: 'Avec PA = E + U (Actifs occupés + Chômeurs) et PAT = PA + Inactifs en âge de travailler.',
          },
        ],
        workedExample: {
          title: 'Calculer l’IPC d’un panier et les trois taux du marché du travail',
          statement:
            'A) Panier fixe 2023 : 50 pains (2 € → 2,2 € en 2024), 30 laits (1,5 € → 1,8 €), 10 locations voiture (150 € → 160 €). Calculez l’IPC 2024.\nB) Économie de 1 000 habitants : 800 en âge de travailler, dont 650 en emploi, 50 chômeurs et 100 inactifs. Calculez les trois taux.',
          methodSteps: [
            'A1) Coût du panier 2023 $= 50(2) + 30(1,5) + 10(150) = 100 + 45 + 1\\,500 = 1\\,645\\text{ €}$.',
            'A2) Coût du panier 2024 $= 50(2,2) + 30(1,8) + 10(160) = 110 + 54 + 1\\,600 = 1\\,764\\text{ €}$.',
            'A3) $IPC_{2024} = (1\\,764 / 1\\,645) \\times 100 \\approx 107,23 \\implies$ inflation $= +7,23\\,\\%$.',
            'B1) Population active : $PA = 650 + 50 = 700$ (les 100 inactifs sont exclus de la PA).',
            'B2) Taux de chômage $u = 50/700 \\approx 7,14\\,\\%$ ; Taux d’activité $= 700/800 = 87,5\\,\\%$ ; Taux d’emploi $= 650/800 = 81,25\\,\\%$.',
          ],
          conclusion:
            'On vérifie l’identité utile : $\\text{Taux d’emploi} = \\text{Taux d’activité} \\times (1 - u) = 0,875 \\times (650/700) = 81,25\\,\\%$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Régimes de prix',
            stepTheme: 'Inflation / Déflation',
            stepTitle: 'Distinguer inflation, désinflation, déflation et inflation sous-jacente',
            paragraphText:
              'Le vocabulaire des prix recèle quatre notions distinctes qu’un économiste ne confond jamais dans un diagnostic conjoncturel.\n' +
              '• **Inflation ($\\pi > 0$)** : hausse générale, durable et auto-entretenue des prix, qui érode le pouvoir d’achat de la monnaie.\n' +
              '• **Désinflation ($\\pi > 0$ mais en baisse)** : les prix continuent d’augmenter, mais moins vite (ex. inflation passant de $+6\\,\\%$ à $+2\\,\\%$).\n' +
              '• **Déflation ($\\pi < 0$)** : baisse générale et persistante des prix — dangereuse car les ménages reportent leurs achats et le poids réel des dettes augmente !\n' +
              '• **Inflation totale vs sous-jacente (*core*)** : l’inflation *core* retire l’alimentation fraîche et l’énergie (très volatiles) pour guider la banque centrale sur la tendance durable des prix.',
            keyRule:
              'Désinflation = les prix montent moins vite ($\\pi$ reste positif) ; Déflation = les prix baissent ($\\pi < 0$).',
            konanTip:
              'En zone UEMOA, la norme communautaire vise une inflation annuelle inférieure ou égale à 3 % (IHPC — Indice Harmonisé des Prix à la Consommation).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Si le taux d’inflation annuel d’un pays passe de $+7\\,\\%$ en 2023 à $+3\\,\\%$ en 2024, comment qualifie-t-on ce phénomène ?',
              options: [
                'Une déflation',
                'Une désinflation (ralentissement de la hausse des prix, qui restent toutefois en hausse)',
                'Une hyperinflation',
                'Une baisse du niveau général des prix de 4 %',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Puisque l’inflation reste positive (+3 %), le niveau général des prix continue de monter, mais à un rythme ralenti : c’est exactement la désinflation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul IPC',
            stepTheme: 'Panier fixe',
            stepTitle: 'Construire et calculer l’IPC d’un panier de consommation',
            paragraphText:
              'Pour mesurer le coût de la vie, l’institut statistique fixe les quantités $Q_0$ d’un panier représentatif (alimentation, logement, transport, télécoms) et suit son coût dans le temps.\n' +
              '• **Étape 1** : calculer le coût du panier à l’année de base ($\\sum P_0 Q_0$).\n' +
              '• **Étape 2** : recalculer le coût du **même panier $Q_0$** aux prix de l’année $t$ ($\\sum P_t Q_0$).\n' +
              '• **Étape 3** : diviser le coût en $t$ par le coût en $0$ et multiplier par 100.\n' +
              '• **Biais de substitution** : comme les quantités $Q_0$ restent figées, l’IPC tend légèrement à surestimer la hausse du coût de la vie (les ménages remplacent un produit devenu trop cher par un substitut !).',
            formula: {
              name: 'Indice de Laspeyres (IPC)',
              formula: 'IPC_t = \\frac{\\sum P_{i,t} \\cdot Q_{i,0}}{\\sum P_{i,0} \\cdot Q_{i,0}} \\times 100',
              note: 'À la différence du déflateur (quantités courantes Q_t), l’IPC fige les quantités à l’année de base Q_0.',
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Un panier fixe contient 10 sacs de riz et 5 forfaits data. En 2023 (base), le riz coûte 15 000 FCFA et le forfait 10 000 FCFA. En 2024, le riz passe à 18 000 FCFA et le forfait baisse à 8 000 FCFA. Quel est l’IPC 2024 ?',
              options: ['110', '100', '105', '120'],
              correctAnswerIndex: 0,
              explanation:
                'Coût 2023 $= 10(15\\,000) + 5(10\\,000) = 150\\,000 + 50\\,000 = 200\\,000$. Coût 2024 $= 10(18\\,000) + 5(8\\,000) = 180\\,000 + 40\\,000 = 220\\,000$. $IPC = (220\\,000/200\\,000)\\times 100 = 110$ (+10 %).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'IPC vs Déflateur',
            stepTheme: 'Différences clés',
            stepTitle: 'Comparer l’IPC et le déflateur du PIB face à un choc importé',
            paragraphText:
              'Pourquoi l’IPC et le déflateur du PIB n’affichent-ils pas exactement le même taux d’inflation ? Deux différences structurelles majeures les séparent.\n' +
              '• **Champ des produits (importations vs équipements)** : une hausse du prix des **smartphones importés** ou du carburant importé fait grimper l’**IPC** (les ménages en consomment), mais n’impacte PAS directement le **déflateur du PIB** (non produits localement !). Inversement, une hausse du prix d’une machine industrielle produite localement impacte le déflateur du PIB, pas l’IPC.\n' +
              '• **Pondération** : panier fixe $Q_0$ pour l’IPC (Laspeyres) contre quantités courantes $Q_t$ pour le déflateur (Paasche).',
            keyRule:
              'Bien de consommation importé qui renchérit ⇒ hausse de l’IPC, effet nul sur le déflateur du PIB ! Bien d’équipement local qui renchérit ⇒ hausse du déflateur du PIB, effet nul sur l’IPC !',
            konanTip:
              'Cette question comparative (IPC vs Déflateur) est un grand classique des QCM de Licence 1 en macroéconomie.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Le prix des téléviseurs entièrement fabriqués en Asie et importés pour les ménages ivoiriens augmente brutalement de 25 %. Quel indicateur enregistre directement cette hausse ?',
              options: [
                'Uniquement le déflateur du PIB ivoirien',
                'L’IPC (Indice des Prix à la Consommation) en Côte d’Ivoire, mais pas directement le déflateur du PIB ivoirien',
                'Aucun des deux indices',
                'Uniquement le PIB réel',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’IPC suit le panier consommé par les ménages (y compris les biens importés), alors que le déflateur du PIB ne porte que sur les biens et services produits sur le territoire national.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Population active',
            stepTheme: 'Actifs vs Inactifs',
            stepTitle: 'Classer les habitants : PAT, Population active, Emploi et Inactifs',
            paragraphText:
              'Pour mesurer le chômage selon les critères internationaux du BIT (Bureau International du Travail), on emboîte quatre ensembles démographiques précis.\n' +
              '• **Population totale** = enfants/mineurs hors âge légal + **Population en Âge de Travailler ($PAT$)** (typiquement 15–64 ans ou 15 ans et plus).\n' +
              '• **Population Active ($PA$)** = **Actifs occupés (Emploi $E$)** + **Chômeurs ($U$)** (sans emploi, disponibles pour travailler et effectuant des démarches actives de recherche).\n' +
              '• **Inactifs** : élèves, étudiants à temps plein, retraités, personnes au foyer ne cherchant pas d’emploi, et travailleurs découragés ayant cessé de chercher.',
            keyRule:
              'Un chômeur BIT réunit trois critères cumulatifs : (1) sans emploi, (2) disponible rapidement, (3) en recherche active d’un emploi.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Parmi ces quatre personnes, laquelle est comptabilisée parmi les INACTIFS (hors population active) selon les normes du BIT ?',
              options: [
                'Un salarié travaillant 20 heures par semaine en temps partiel',
                'Un jeune diplômé sans emploi qui envoie chaque semaine des candidatures et est prêt à commencer demain',
                'Un étudiant en Licence 1 à temps plein qui ne travaille pas et ne cherche pas d’emploi',
                'Une commerçante indépendante tenant une boutique au marché',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les salariés et indépendants sont actifs occupés ; le diplômé en recherche active est chômeur (actif) ; l’étudiant à temps plein ne cherchant pas d’emploi est inactif.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: '3 ratios emploi',
            stepTheme: 'Calculs clés',
            stepTitle: 'Calculer taux de chômage, taux d’activité et taux d’emploi',
            paragraphText:
              'Une erreur de dénominateur fausse immédiatement toute analyse du marché du travail. Vérifie systématiquement la hiérarchie $E \\le PA \\le PAT$.\n' +
              '• **Taux de chômage ($u$)** : $u = \\frac{U}{PA} \\times 100 = \\frac{U}{E + U} \\times 100$.\n' +
              '• **Taux d’activité (participation)** : $\\frac{PA}{PAT} \\times 100$.\n' +
              '• **Taux d’emploi** : $\\frac{E}{PAT} \\times 100$.\n' +
              '• **Paradoxe statistique** : si 50 chômeurs se découragent et arrêtent de chercher, ils deviennent **inactifs** ⇒ $U$ et $PA$ diminuent tous les deux et le taux de chômage officiel **baisse** sans qu’un seul emploi n’ait été créé !',
            konanTip:
              'D’où l’importance de regarder le TAUX D’EMPLOI ($E/PAT$) en complément du taux de chômage : les travailleurs découragés ne faussent pas le taux d’emploi !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Dans une économie, $PAT = 2\\,000$, l’emploi vaut $E = 1\\,350$, le nombre de chômeurs vaut $U = 150$ et les inactifs en âge de travailler sont $500$. Quels sont le taux de chômage et le taux d’activité ?',
              options: [
                'Taux de chômage = 7,5 % ; Taux d’activité = 67,5 %',
                'Taux de chômage = 11,1 % ; Taux d’activité = 75 %',
                'Taux de chômage = 10 % ; Taux d’activité = 67,5 %',
                'Taux de chômage = 10 % ; Taux d’activité = 75 %',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$PA = E + U = 1\\,350 + 150 = 1\\,500$. Taux de chômage $= 150 / 1\\,500 = 10\\,\\%$. Taux d’activité $= 1\\,500 / 2\\,000 = 75\\,\\%$ (et taux d’emploi $= 1\\,350 / 2\\,000 = 67,5\\,\\%$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Typologie',
            stepTheme: '3 formes de chômage',
            stepTitle: 'Distinguer chômage frictionnel, structurel et conjoncturel',
            paragraphText:
              'Tous les chômeurs ne sont pas sans emploi pour la même raison, et les remèdes de politique économique diffèrent totalement selon la cause !\n' +
              '• **Chômage frictionnel** : chômage de courte durée, incompressible, lié au temps normal de recherche et de transition entre deux emplois ou à l’entrée sur le marché après un diplôme.\n' +
              '• **Chômage structurel** : chômage durable provoqué par une **inadéquation** entre les qualifications offertes et les besoins des entreprises (ex. manque de compétences numériques), ou par des rigidités institutionnelles.\n' +
              '• **Chômage conjoncturel (keynésien)** : chômage temporaire dû à une **insuffisance de la demande globale** lors d’une récession.',
            keyRule:
              'Chômage conjoncturel ⇒ relance de la demande (politique budgétaire/monétaire). Chômage structurel ⇒ réformes d’offre (formation, numérique, mobilité).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Des milliers de postes en cybersécurité et analyse de données restent vacants alors que des milliers de travailleurs peu qualifiés d’anciennes industries sont au chômage longue durée. De quel type de chômage s’agit-il ?',
              options: [
                'Chômage structurel (inadéquation des qualifications)',
                'Chômage conjoncturel',
                'Chômage frictionnel de quelques jours',
                'Chômage déflationniste',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La coexistence durable d’emplois non pourvus et de chômeurs dont les compétences ne correspondent pas aux besoins technologiques définit exactement le chômage structurel.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : CONSOMMATION, ÉPARGNE ET INVESTISSEMENT
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch3',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Comportements macroéconomiques : Consommation, Épargne et Investissement',
    summary:
      'Maîtriser la fonction de consommation keynésienne et l’épargne, les théories du revenu permanent (Friedman) et du cycle de vie (Modigliani), les critères VAN/TRI et le principe de l’accélérateur.',
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Macroéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 3.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch3_p1',
        order: 1,
        title: 'La fonction de consommation keynésienne et la fonction d’épargne',
        summary:
          'Distinguer les formes de consommation, appliquer la loi psychologique fondamentale de Keynes (C = cYd + C0), calculer PMC, PmC, PmS et déduire la fonction d’épargne.',
        conceptExplanation:
          'La **consommation** (60 % à 75 % du PIB dans la plupart des économies) désigne l’utilisation d’un bien ou d’un service en vue de satisfaire un besoin : on distingue la consommation **finale** (biens non durables détruits immédiatement vs biens durables utilisés sur plusieurs années) de la consommation **intermédiaire**, et la consommation **individuelle** (rivale et excluable) de la consommation **collective** (services publics gratuits financés par l’impôt).\n\n' +
          'John Maynard Keynes (1936) modélise la consommation agrégée en fonction du **revenu disponible** $Y_d = Y - T + TR$ à partir de sa **loi psychologique fondamentale** : lorsque le revenu disponible croît, la consommation augmente, mais d’un montant inférieur à la hausse du revenu :\n' +
          '$$C = c\\,Y_d + C_0 \\qquad \\text{avec} \\quad 0 < c < 1 \\quad \\text{et} \\quad C_0 > 0$$\n' +
          '• **$C_0$** : consommation autonome (incompressible), financée par désépargne même si $Y_d = 0$.\n' +
          '• **$c = PmC = \\Delta C / \\Delta Y_d$** : propension marginale à consommer (pente de la droite).\n' +
          '• **$PMC = C / Y_d = c + C_0 / Y_d$** : propension moyenne à consommer, toujours **supérieure à $c$** et **décroissante** lorsque $Y_d$ augmente.\n' +
          '• **Épargne (résidu)** : $S = Y_d - C = (1 - c)Y_d - C_0 = s\\,Y_d - C_0$, avec $s = PmS = 1 - c$ et $PMC + PMS = 1$.',
        keyRule:
          'Chez Keynes : $0 < c < 1$, $PMC > PmC$ dès que $C_0 > 0$, et $PmC + PmS = 1$. L’épargne est un résidu croissant avec le revenu : $S = (1 - c)Y_d - C_0$.',
        formulas: [
          {
            name: 'Fonctions de consommation et d’épargne keynésiennes',
            formula: 'C = c\\,Y_d + C_0 \\quad \\iff \\quad S = Y_d - C = (1 - c)Y_d - C_0',
            note: 'Le seuil de rupture (où l’épargne s’annule, S = 0 et C = Y_d) vaut Y_d* = C_0 / (1 − c).',
          },
          {
            name: 'Propensions moyennes et marginales',
            formula: 'PMC = \\frac{C}{Y_d} = c + \\frac{C_0}{Y_d}, \\qquad PmC = c = \\frac{dC}{dY_d}, \\qquad PMC + PMS = 1, \\quad PmC + PmS = 1',
            note: 'Puisque C_0 > 0, PMC décroît continûment vers c lorsque Y_d augmente.',
          },
        ],
        workedExample: {
          title: 'Étudier la fonction de consommation C = 0,8Y + 100',
          statement:
            'Dans une économie (en Mds FCFA), la fonction de consommation est $C = 0,8Y + 100$. 1) Identifiez $c$ et $C_0$. 2) Déterminez la fonction d’épargne $S$ et le seuil de rupture ($S = 0$). 3) Calculez $C$ et $PMC$ pour $Y = 1\\,400$, puis $Y$ lorsque $C = 1\\,000$.',
          methodSteps: [
            'Propension marginale à consommer $c = 0,8$ (pente graphique : 80 % de chaque franc supplémentaire est consommé) ; consommation autonome $C_0 = 100$ Mds FCFA.',
            'Fonction d’épargne : $S = Y - (0,8Y + 100) = 0,2Y - 100$ ($PmS = 0,2$).',
            'Seuil de rupture ($S = 0$) : $0,2Y = 100 \\implies Y = 500$ Mds FCFA (en dessous, les ménages désépargnent ; au-dessus, ils épargnent).',
            'Pour $Y = 1\\,400$ : $C = 0,8(1\\,400) + 100 = 1\\,220$ ; $PMC = 1\\,220 / 1\\,400 \\approx 0,871 > 0,8$ ($S = 180$, taux d’épargne $PMS = 12,9\\,\\%$).',
            'Pour $C = 1\\,000$ : $0,8Y + 100 = 1\\,000 \\implies 0,8Y = 900 \\implies Y = 1\\,125$ Mds FCFA.',
          ],
          conclusion:
            'Plus le revenu s’élève au-dessus du seuil de rupture (500), plus le taux d’épargne ($PMS$) augmente et la $PMC$ se rapproche de $0,8$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Typologies',
            stepTheme: 'Formes de consommation',
            stepTitle: 'Distinguer consommation finale/intermédiaire et individuelle/collective',
            paragraphText:
              'Avant de modéliser la consommation nationale, il faut maîtriser les quatre grandes distinctions conceptuelles qui structurent la demande des ménages et de la collectivité.\n' +
              '• **Consommation finale vs intermédiaire** : la consommation finale satisfait directement un besoin (biens **non durables** détruits dès le 1er usage comme le pain ; biens **durables** comme un réfrigérateur), tandis que la consommation intermédiaire disparaît par incorporation ou destruction dans la production (matières premières, énergie).\n' +
              '• **Consommation individuelle vs collective** : la consommation individuelle d’un bien par un individu exclut tout autre consommateur ; la consommation collective (éducation nationale, sécurité publique, routes) profite simultanément à tous et est financée par l’impôt.',
            keyRule:
              'Consommation collective = produite par les administrations publiques, financée par l’impôt et mise gratuitement (ou quasi gratuitement) à disposition des ménages.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces dépenses relève de la consommation COLLECTIVE non marchande ?',
              options: [
                'L’achat d’une paire de chaussures par un étudiant',
                'L’éclairage public et la sécurité assurée par la police nationale',
                'L’achat de farine par une boulangerie industrielle',
                'L’abonnement individuel à une plateforme de streaming vidéo',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La sécurité publique et l’éclairage profitent simultanément à l’ensemble des citoyens (non-exclusion) et sont financés par les impôts.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Keynes',
            stepTheme: 'Loi psychologique',
            stepTitle: 'La loi psychologique fondamentale de Keynes (0 < c < 1)',
            paragraphText:
              'Pourquoi la consommation n’absorbe-t-elle pas 100 % d’une augmentation de salaire ? John Maynard Keynes (1936) formule une régularité comportementale appelée **loi psychologique fondamentale**.\n' +
              '• **Énoncé exact** : « En moyenne, et la plupart du temps, les hommes tendent à accroître leur consommation à mesure que leur revenu croît, mais non d’une quantité aussi grande que l’accroissement du revenu. »\n' +
              '• **Traduction mathématique** : dans $C = c\\,Y_d + C_0$, la propension marginale à consommer vérifie **$0 < c < 1$** ($c > 0$ car $C$ croît avec $Y_d$ ; $c < 1$ car $\\Delta C < \\Delta Y_d$).\n' +
              '• **Conséquence immédiate** : la fraction non consommée $(1 - c) > 0$ va à l’épargne, qui est donc **elle aussi une fonction croissante du revenu disponible**.',
            formula: {
              name: 'Loi psychologique fondamentale',
              formula: '0 < \\frac{dC}{dY_d} = c < 1 \\implies 0 < \\frac{dS}{dY_d} = 1 - c < 1',
              note: 'Chez Keynes, le déterminant principal de la consommation est le revenu courant disponible Y_d (et non le taux d’intérêt !).',
            },
            keyRule:
              'La loi psychologique de Keynes se résume par l’encadrement strict $0 < PmC < 1$ : consommer davantage quand le revenu monte, mais toujours moins que la hausse du revenu.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Un salarié reçoit une hausse de revenu disponible mensuel de $+50\\,000$ FCFA et augmente sa consommation de $+35\\,000$ FCFA. Que valent sa $PmC$ et sa $PmS$ ?',
              options: [
                '$PmC = 0,30$ et $PmS = 0,70$',
                '$PmC = 0,70$ et $PmS = 0,30$',
                '$PmC = 1,43$ et $PmS = -0,43$',
                '$PmC = 0,70$ et $PmS = 0,70$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$PmC = \\Delta C / \\Delta Y_d = 35\\,000 / 50\\,000 = 0,70 \\in ]0;1[$. L’épargne supplémentaire vaut $15\\,000$ FCFA, soit $PmS = 1 - 0,70 = 0,30$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'PMC vs PmC',
            stepTheme: 'Décroissance de PMC',
            stepTitle: 'Pourquoi la PMC dépasse toujours la PmC et décroît avec le revenu',
            paragraphText:
              'Ne confonds jamais la **propension moyenne ($PMC = C / Y_d$)** — part totale du revenu consommée — avec la **propension marginale ($PmC = \\Delta C / \\Delta Y_d$)** — part du dernier franc consommée !\n' +
              '• **Relation algébrique** : en divisant $C = c\\,Y_d + C_0$ par $Y_d$, on obtient $PMC = c + \\frac{C_0}{Y_d}$.\n' +
              '• **Deux théorèmes keynésiens** : puisque $C_0 > 0$, (1) **$PMC > PmC$** pour tout revenu positif, et (2) quand $Y_d$ augmente, le terme $C_0/Y_d$ diminue ⇒ la **$PMC$ décroît** (les ménages riches consomment une plus faible *part* de leur revenu que les ménages modestes, et épargnent une plus forte *part* !).\n' +
              '• **Exemple** : pour $C = 0,75 Y_d + 200$, à $Y_d = 1\\,000$, $PMC = 0,95$ ; à $Y_d = 4\\,000$, $PMC = 0,80$.',
            konanTip:
              'Conséquence sociale directe : une redistribution de revenus des ménages aisés (faible $PmC$) vers les ménages modestes (forte $PmC$) tend à stimuler la consommation globale !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Pour la fonction de consommation keynésienne $C = 0,75 Y_d + 100$, que vaut la $PMC$ lorsque $Y_d = 500$, et comment évolue-t-elle si $Y_d$ passe à $2\\,000$ ?',
              options: [
                '$PMC = 0,95$ à $Y_d = 500$, puis elle décroît à $0,80$ à $Y_d = 2\\,000$',
                '$PMC = 0,75$ quel que soit le revenu',
                '$PMC = 0,80$ à $Y_d = 500$, puis elle augmente à $0,95$ à $Y_d = 2\\,000$',
                '$PMC = 0,25$ à $Y_d = 500$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À $Y_d = 500$ : $PMC = 0,75 + 100/500 = 0,95$. À $Y_d = 2\\,000$ : $PMC = 0,75 + 100/2\\,000 = 0,80$ (décroissante vers $c = 0,75$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Épargne',
            stepTheme: 'Résidu & Seuil S = 0',
            stepTitle: 'Déduire la fonction d’épargne et calculer le seuil de rupture',
            paragraphText:
              'Chez les classiques, les ménages décident d’abord combien épargner en fonction du taux d’intérêt. Keynes renverse la logique : les ménages décident d’abord de **consommer** selon leur revenu, et l’**épargne est un simple résidu** ($S = Y_d - C$).\n' +
              '• **Passage immédiat** : $C = c\\,Y_d + C_0 \\implies S = (1 - c)Y_d - C_0$. Note bien le signe **moins** devant $C_0$ !\n' +
              '• **Seuil de rupture ($S = 0 \\iff C = Y_d$)** : $Y_{d,\\text{seuil}} = \\frac{C_0}{1 - c}$.\n' +
              '• **Trois zones** : si $Y_d < Y_{d,\\text{seuil}}$, $S < 0$ (**désépargne** : emprunt ou puisage dans l’épargne passée pour financer le minimum vital $C_0$) ; si $Y_d > Y_{d,\\text{seuil}}$, $S > 0$ (épargne positive).',
            keyRule:
              'Attention au signe de la constante ! Si $C = c Y_d + C_0$, alors $S = (1 - c) Y_d - C_0$ : l’ordonnée à l’origine de l’épargne est NÉGATIVE ($-C_0$).',
            konanTip:
              'Test éclair : à $Y_d = 0$, $C + S = C_0 + (-C_0) = 0$. Si tu trouves $+C_0$ dans $S$, c’est que tu as oublié de distribuer le signe « − » dans $Y_d - (cY_d + C_0)$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Si la fonction de consommation est $C = 0,8 Y_d + 120$, quelle est la fonction d’épargne $S$ et à quel niveau de revenu disponible l’épargne est-elle exactement nulle ($S = 0$) ?',
              options: [
                '$S = 0,2 Y_d + 120$ et seuil à $Y_d = 600$',
                '$S = 0,8 Y_d - 120$ et seuil à $Y_d = 150$',
                '$S = 0,2 Y_d - 120$ et seuil de rupture à $Y_d = 600$',
                '$S = 0,2 Y_d - 120$ et seuil de rupture à $Y_d = 120$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$S = Y_d - (0,8 Y_d + 120) = 0,2 Y_d - 120$. $S = 0 \\iff 0,2 Y_d = 120 \\iff Y_d = 120 / 0,2 = 600$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Revenu disponible',
            stepTheme: 'Impôts & Transferts',
            stepTitle: 'Intégrer impôts (T) et transferts (TR) dans la fonction de consommation',
            paragraphText:
              'Les ménages ne consomment pas sur leur revenu brut $Y$, mais sur ce qu’il leur reste en poche après intervention de l’État : le **revenu disponible** $Y_d$.\n' +
              '• **Formule complète** : $Y_d = Y - T + TR$ (revenu national moins impôts directs, plus prestations sociales / bourses).\n' +
              '• **Avec impôt proportionnel** $T = t\\,Y$ (ex. taux marginal d’imposition $t = 20\\,\\%$) : $Y_d = (1 - t)Y$, donc $C = c(1 - t)Y + C_0$. La pente de la consommation par rapport au PIB devient $c(1 - t) < c$ !\n' +
              '• **Exemple** : si $c = 0,8$, $C_0 = 50$, $Y = 1\\,000$, $T = 200$ et $TR = 50$, alors $Y_d = 850$ et $C = 0,8(850) + 50 = 730$.',
            formula: {
              name: 'Consommation avec fiscalité forfaitaire ou proportionnelle',
              formula: 'Y_d = Y - T + TR \\quad | \\quad \\text{Si } T = tY : C = c(1 - t)Y + C_0',
              note: 'L’impôt proportionnel réduit la pente de la consommation et joue le rôle de stabilisateur automatique.',
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Soit $C = 0,8 Y_d + 100$ avec un impôt proportionnel $T = 0,25 Y$ (sans transferts). Quelle est la consommation $C$ exprimée directement en fonction du PIB $Y$ ?',
              options: [
                '$C = 0,55 Y + 100$',
                '$C = 0,60 Y + 100$',
                '$C = 0,80 Y + 75$',
                '$C = 0,20 Y + 100$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$Y_d = Y - 0,25Y = 0,75Y$. Donc $C = 0,8(0,75Y) + 100 = 0,60Y + 100$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Équation complète',
            stepTheme: 'Calcul inverse',
            stepTitle: 'Résoudre un problème complet sur C = cY + C0',
            paragraphText:
              'En examen, on demande souvent de reconstruire la fonction de consommation à partir de **deux observations empiriques** $(Y_1, C_1)$ et $(Y_2, C_2)$.\n' +
              '• **Étape 1 (trouver la pente $c$)** : $c = \\frac{C_2 - C_1}{Y_2 - Y_1}$.\n' +
              '• **Étape 2 (trouver l’ordonnée $C_0$)** : substituer le premier couple dans $C_0 = C_1 - c\\,Y_1$.\n' +
              '• **Exemple chiffré** : si pour $Y_1 = 500$ on a $C_1 = 480$, et pour $Y_2 = 900$ on a $C_2 = 780$, alors $c = (780 - 480)/(900 - 500) = 300/400 = 0,75$, et $C_0 = 480 - 0,75(500) = 105 \\implies C = 0,75Y + 105$.',
            konanTip:
              'Vérifie toujours ton équation reconstruite sur le SECOND point ($0,75 \\times 900 + 105 = 675 + 105 = 780$) : c’est une preuve infaillible de justesse !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Dans un pays, quand le revenu disponible passe de $Y_d = 1\\,000$ à $Y_d = 1\\,500$, la consommation passe de $C = 900$ à $C = 1\\,300$. Quelle est l’équation de la fonction de consommation ?',
              options: [
                '$C = 0,8 Y_d + 100$',
                '$C = 0,9 Y_d + 100$',
                '$C = 0,8 Y_d + 200$',
                '$C = 0,75 Y_d + 150$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$c = (1\\,300 - 900)/(1\\,500 - 1\\,000) = 400/500 = 0,8$. Puis $C_0 = 900 - 0,8(1\\,000) = 100$. Vérification : $0,8(1\\,500) + 100 = 1\\,300$.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch3_p2',
        order: 2,
        title: 'Fondements microéconomiques : Revenu permanent (Friedman) et Cycle de vie (Modigliani)',
        summary:
          'Résoudre l’énigme de Kuznets, maîtriser la théorie du revenu permanent (Friedman) et la théorie du cycle de vie (Modigliani-Brumberg), et évaluer l’impact des relances fiscales temporaires vs permanentes.',
        conceptExplanation:
          'Dans les années 1940, Simon Kuznets découvre un paradoxe empirique majeur : sur des données de **court terme**, la $PMC$ décroît quand le revenu augmente (confirmant Keynes), mais sur **longue période** (un siècle de croissance), la $PMC$ reste étonnamment **constante** ! Deux prix Nobel ont résolu cette énigme en donnant à la consommation des **fondements microéconomiques intertemporels** (l’épargne n’est plus un résidu passif, mais une **consommation différée**).\n\n' +
          '1. **Théorie du revenu permanent (Milton Friedman, 1957)** : le revenu courant se décompose en une part structurelle anticipée à long terme (**revenu permanent $Y_p$**) et des chocs aléatoires temporaires (**revenu transitoire $Y_t$**) : $Y = Y_p + Y_t$. Les ménages consomment une proportion constante de leur revenu permanent : $C_p = k \\cdot Y_p$, et **épargnent (ou absorbent par l’épargne) le revenu transitoire**.\n\n' +
          '2. **Théorie du cycle de vie (Franco Modigliani & Richard Brumberg)** : les individus souhaitent **lisser** leur consommation sur toute leur existence : ils empruntent/désépargnent pendant la jeunesse, épargnent et accumulent un patrimoine durant la vie active, puis **désépargnent à la retraite**.',
        keyRule:
          'Chez Friedman : $Y = Y_p + Y_t$ et $C_p = k Y_p$ (on consomme selon son revenu de long terme, pas selon une prime ponctuelle). Chez Modigliani : on lisse sa consommation sur toute sa vie via l’emprunt, l’épargne active et la désépargne à la retraite.',
        formulas: [
          {
            name: 'Modèle du revenu permanent (Friedman, 1957)',
            formula: 'Y = Y_p + Y_t \\implies Y_p = Y - Y_t, \\qquad C_p = k \\cdot Y_p, \\qquad PMC_{\\text{observée}} = \\frac{C_p}{Y} = k \\cdot \\frac{Y_p}{Y_p + Y_t}',
            note: 'Si Y_t > 0 (prime exceptionnelle), PMC_observée < k ; si Y_t < 0 (chute temporaire), PMC_observée > k !',
          },
          {
            name: 'Lissage de Modigliani sur T années de vie (R années d’activité)',
            formula: 'C_{\\text{annuelle}} = \\frac{W_0 + R \\cdot Y_{\\text{actif}}}{T}',
            note: 'La consommation dépend à la fois du revenu du travail futur ET du patrimoine initial W₀.',
          },
        ],
        workedExample: {
          title: 'Diagnostiquer le revenu transitoire et calculer la consommation permanente',
          statement:
            'Dans la théorie de Friedman, la PMC de long terme vaut $k = 0,8$. A) On observe successivement deux PMC de court terme : $0,82$ puis $0,76$. Quel est le signe du revenu transitoire $Y_t$ dans chaque cas ? B) Calculez $Y_p$ et $C_p$ pour $Y = 700$ avec $Y_t = -100$, puis pour $Y = 1\\,000$ avec $Y_t = +100$.',
          methodSteps: [
            'A1) $PMC_{\\text{obs}} = 0,82 > k = 0,80 \\implies \\frac{Y_p}{Y} > 1 \\implies Y < Y_p \\implies Y_t < 0$ (baisse temporaire de revenu ; le ménage maintient son train de vie).\n',
            'A2) $PMC_{\\text{obs}} = 0,76 < k = 0,80 \\implies \\frac{Y_p}{Y} < 1 \\implies Y > Y_p \\implies Y_t > 0$ (gain exceptionnel temporaire largement épargné).',
            'B1) $Y = 700, Y_t = -100 \\implies Y_p = Y - Y_t = 700 - (-100) = 800 \\implies C_p = 0,8 \\times 800 = 640$ ($PMC_{\\text{obs}} = 640/700 \\approx 0,91 > 0,8$).',
            'B2) $Y = 1\\,000, Y_t = +100 \\implies Y_p = 1\\,000 - 100 = 900 \\implies C_p = 0,8 \\times 900 = 720$ ($PMC_{\\text{obs}} = 720/1\\,000 = 0,72 < 0,8$).',
          ],
          conclusion:
            'La distinction entre chocs transitoires et revenus durables explique parfaitement pourquoi la PMC fluctue à court terme tout en restant constante à long terme.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Kuznets',
            stepTheme: 'Court vs Long terme',
            stepTitle: 'L’énigme de Kuznets et la remise en cause de la fonction keynésienne',
            paragraphText:
              'Pourquoi la fonction de consommation keynésienne $C = cY + C_0$ a-t-elle dû être approfondie après la Seconde Guerre mondiale ?\n' +
              '• **Prédiction keynésienne** : puisque $PMC = c + C_0/Y$, la croissance séculaire du PIB aurait dû provoquer une chute continue de la $PMC$ et une hausse massive de l’épargne (risque de stagnation).\n' +
              '• **Constat empirique de Kuznets (1946)** : sur près d’un siècle de données, la $PMC$ de long terme est restée remarquablement **stable** (environ 0,85–0,90), comme si la courbe de long terme passait par l’origine ($C = k\\,Y$, sans $C_0$) !\n' +
              '• **Réconciliation** : les théories de **Friedman** et **Modigliani** montrent que les ménages raisonnent sur un **horizon intertemporel** et non sur le seul revenu du mois courant.',
            keyRule:
              'Énigme de Kuznets : $PMC$ décroissante en coupe instantanée / court terme, mais $PMC$ constante sur longue période ($C_0 = 0$ à long terme).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle observation empirique de Simon Kuznets a contredit la prédiction de long terme de la fonction de consommation keynésienne simple ?',
              options: [
                'Sur longue période, la propension moyenne à consommer (PMC) reste globalement constante au lieu de décroître avec la hausse du revenu national',
                'Les ménages ne consomment plus rien lorsque leur revenu double',
                'L’épargne est toujours strictement négative dans tous les pays',
                'La consommation ne dépend que des exportations',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Kuznets a démontré que la PMC de long terme est stable (droite passant par l’origine), ce qui a motivé les théories intertemporelles de Friedman et Modigliani.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Friedman',
            stepTheme: 'Revenu permanent',
            stepTitle: 'La théorie du revenu permanent de Milton Friedman (1957)',
            paragraphText:
              'Si vous gagnez 5 millions FCFA à la loterie aujourd’hui, allez-vous tout dépenser dans la semaine, ou placer l’essentiel pour améliorer durablement votre niveau de vie ? C’est toute l’intuition de **Milton Friedman**.\n' +
              '• **Décomposition du revenu** : $Y = Y_p + Y_t$, où $Y_p$ est le **revenu permanent** (revenu moyen régulier anticipé compte tenu du diplôme, du métier et du patrimoine) et $Y_t$ est le **revenu transitoire** (prime exceptionnelle, mauvaise récolte ponctuelle, chômage bref).\n' +
              '• **Comportement de consommation** : la consommation permanente est proportionnelle au seul revenu permanent : $C_p = k \\cdot Y_p$. Un revenu transitoire positif est quasi intégralement **épargné** ; un choc transitoire négatif est amorti par l’épargne existante.',
            formula: {
              name: 'Équations de Milton Friedman',
              formula: 'Y = Y_p + Y_t \\quad \\text{et} \\quad C_p = k \\cdot Y_p \\quad (0 < k < 1)',
              note: 'Chez Friedman, la PmC par rapport au revenu transitoire est proche de zéro !',
            },
            konanTip:
              'Pour calculer $Y_p$, ne te trompe pas de signe : $Y = Y_p + Y_t \\implies Y_p = Y - Y_t$ ! Si $Y_t = -100$ et $Y = 700$, alors $Y_p = 700 - (-100) = 800$ (ton revenu habituel est plus élevé que cette mauvaise année !).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Selon la théorie du revenu permanent de Friedman (avec $k = 0,8$), un planteur subit une mauvaise récolte ponctuelle : son revenu observé cette année est $Y = 600$ avec un choc transitoire $Y_t = -150$. Quels sont son revenu permanent $Y_p$ et sa consommation $C_p$ ?',
              options: [
                '$Y_p = 450$ et $C_p = 360$',
                '$Y_p = 750$ et $C_p = 600$',
                '$Y_p = 600$ et $C_p = 480$',
                '$Y_p = 750$ et $C_p = 480$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$Y_p = Y - Y_t = 600 - (-150) = 750$. Sa consommation permanente s’établit à $C_p = 0,8 \\times 750 = 600$ (il maintient sa consommation en réduisant son épargne cette année).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Diagnostic PMC',
            stepTheme: 'Signe de Y_t',
            stepTitle: 'Déduire le signe du revenu transitoire à partir de la PMC observée',
            paragraphText:
              'La théorie de Friedman fournit une règle de diagnostic instantanée dès que l’on compare la **PMC observée à court terme** ($C_p / Y$) à la **PMC de long terme** ($k$).\n' +
              '• **Si $PMC_{\\text{obs}} > k$** (ex. $0,83 > 0,80$) : puisque $C_p / Y = k(Y_p/Y) > k$, on a nécessairement $Y < Y_p$, donc **$Y_t < 0$** (le ménage traverse un creux temporaire de revenu).\n' +
              '• **Si $PMC_{\\text{obs}} < k$** (ex. $0,76 < 0,80$) : on a $Y > Y_p$, donc **$Y_t > 0$** (le ménage profite d’un surplus temporaire qu’il épargne).\n' +
              '• **Si $PMC_{\\text{obs}} = k$** : le revenu transitoire est nul ($Y_t = 0$, $Y = Y_p$).',
            keyRule:
              'Règle inverse : $PMC_{\\text{obs}} > k \\iff Y_t < 0$ ; $PMC_{\\text{obs}} < k \\iff Y_t > 0$.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Sachant que la PMC permanente d’un ménage vaut $k = 0,80$, on mesure cette année une PMC observée de $0,74$. Que diagnostique la théorie de Friedman ?',
              options: [
                'Le ménage bénéficie d’un revenu transitoire POSITIF ($Y_t > 0$) dont il épargne la majeure partie',
                'Le ménage subit un revenu transitoire NÉGATIF ($Y_t < 0$)',
                'Le revenu permanent du ménage est tombé à zéro',
                'La loi de l’offre ne s’applique plus',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$PMC_{\\text{obs}} = 0,74 < k = 0,80 \\implies Y > Y_p \\implies Y_t = Y - Y_p > 0$ : le revenu courant est temporairement au-dessus de la normale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Modigliani',
            stepTheme: 'Cycle de vie',
            stepTitle: 'La théorie du cycle de vie de Modigliani et Brumberg',
            paragraphText:
              'Pourquoi un jeune diplômé, un cadre de 45 ans et un retraité de 70 ans n’ont-ils pas du tout le même taux d’épargne ? **Franco Modigliani** montre que l’âge structure le profil de revenus et de patrimoine.\n' +
              '• **Objectif de lissage** : un individu désire maintenir un niveau de consommation relativement stable tout au long de sa vie, alors que ses revenus forment une courbe en cloche.\n' +
              '• **Phase 1 — Jeunesse (études / début de carrière)** : revenus faibles ⇒ **emprunt ou désépargne** pour consommer et se former.\n' +
              '• **Phase 2 — Vie active (maturité)** : revenus élevés dépassant la consommation ⇒ forte **épargne** et **accumulation de patrimoine** (remboursement des dettes + préparation de la retraite).\n' +
              '• **Phase 3 — Retraite (cessation d’activité)** : chute des revenus du travail ⇒ **désépargne** en consommant progressivement le patrimoine accumulé.',
            keyRule:
              'Cycle de vie (Modigliani) : Désépargne / Emprunt (jeunesse) → Épargne & accumulation de patrimoine (vie active) → Désépargne (retraite).',
            konanTip:
              'Sur le graphique célèbre de Modigliani, la courbe du PATRIMOINE monte pendant toute la vie active, atteint son pic exact à l’âge de la retraite, puis redescend durant la retraite !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Dans la théorie du cycle de vie de Modigliani et Brumberg, à quel moment de l’existence le patrimoine accumulé par un individu atteint-il typiquement son MAXIMUM ?',
              options: [
                'À la naissance',
                'À la fin des études universitaires',
                'Au moment de la cessation d’activité (entrée à la retraite)',
                'Juste avant le décès',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’individu accumule de l’épargne durant toute sa vie active pour culminer au départ à la retraite, puis consomme (désépargne) ce patrimoine pendant sa retraite.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Démographie',
            stepTheme: 'Patrimoine & Âge',
            stepTitle: 'Impact de la pyramide des âges et du patrimoine sur l’épargne nationale',
            paragraphText:
              'La théorie du cycle de vie relie directement la **démographie** et la **bourse/immobilier** à la macroéconomie nationale !\n' +
              '• **Effet de richesse (patrimoine)** : une hausse durable de la valeur immobilière ou boursière accroît le patrimoine $W_0$ et stimule la consommation (même sans hausse de salaire).\n' +
              '• **Structure démographique** : un pays jeune en plein « dividende démographique » (forte proportion d’actifs qui épargnent, ex. économies africaines en croissance) tend à voir son taux d’épargne global progresser ; inversement, un pays vieillissant (forte part de retraités qui désépargnent) voit son taux d’épargne global diminuer.\n' +
              '• **Exemple chiffré** : un ménage actif pendant 40 ans avec un revenu annuel de 6 M FCFA et vivant 60 ans adultes lissera sa consommation à $(40 \\times 6) / 60 = 4\\text{ M FCFA/an}$ (épargnant 2 M/an pendant 40 ans = 80 M de patrimoine, puis consommant 4 M/an durant ses 20 ans de retraite !).',
            konanTip:
              'Vérifie l’exemple chiffré : $40 \\times 2\\text{ M}$ épargnés $= 80\\text{ M} = 20 \\times 4\\text{ M}$ consommés à la retraite ! C’est l’équation exacte du lissage de Modigliani.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Sans patrimoine initial et à taux d’intérêt nul, un travailleur prévoit 30 ans de vie active à 10 millions FCFA/an suivis de 20 ans de retraite (revenu nul). Selon Modigliani, quelle consommation annuelle constante choisit-il ?',
              options: [
                '10 millions FCFA/an',
                '6 millions FCFA/an (épargnant 4 M/an en activité pour financer sa retraite)',
                '5 millions FCFA/an',
                '8 millions FCFA/an',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Ressources totales sur la vie $= 30 \\times 10 = 300$ millions FCFA à répartir sur $30 + 20 = 50$ ans ⇒ $C = 300 / 50 = 6$ millions FCFA/an.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Politique fiscale',
            stepTheme: 'Temporaire vs Permanent',
            stepTitle: 'Conséquence politique : pourquoi une baisse d’impôt temporaire relance peu !',
            paragraphText:
              'La théorie du revenu permanent a bouleversé la politique budgétaire des États face aux récessions.\n' +
              '• **Baisse d’impôt TEMPORAIRE** (ex. chèque exceptionnel versé une seule fois) : perçue comme un simple **revenu transitoire** ($\\Delta Y_t > 0$). Selon Friedman, les ménages l’épargnent majoritairement (ou remboursent leurs dettes) ⇒ faible effet de relance sur la consommation !\n' +
              '• **Baisse d’impôt PERMANENTE** (réforme fiscale durable) : relève directement le **revenu permanent** ($\\Delta Y_p > 0$) ⇒ forte hausse immédiate et durable de la consommation.\n' +
              '• **Nuance réelle (contraintes de liquidité)** : pour les ménages modestes qui n’ont pas accès au crédit bancaire, même un transfert temporaire est très vite consommé !',
            keyRule:
              'Chez Friedman, une relance fiscale a un fort effet sur la consommation uniquement si les ménages la jugent PERMANENTE (sauf pour les ménages contraints par la liquidité).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Selon la théorie du revenu permanent de Milton Friedman, pourquoi un gouvernement qui annonce une réduction d’impôt valable pour UNE SEULE année risque-t-il d’observer un faible rebond de la consommation ?',
              options: [
                'Parce que les ménages considèrent ce gain comme un revenu transitoire et préfèrent l’épargner plutôt que de relever durablement leur consommation',
                'Parce que toute baisse d’impôt détruit le pouvoir d’achat',
                'Parce que les prix doublent immédiatement le lendemain',
                'Parce que les ménages n’ont aucune anticipation de l’avenir',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une baisse fiscale explicitement ponctuelle accroît $Y_t$ sans changer significativement $Y_p$ : les ménages rationnels lissent leur consommation et épargnent l’essentiel du gain temporaire.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 3.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch3_p3',
        order: 3,
        title: 'Investissement : accumulation du capital, critères VAN/TRI et accélérateur de Clark',
        summary:
          'Distinguer investissement brut, net et amortissement, évaluer un projet par la VAN et le TRI, relier investissement et taux d’intérêt, et calculer l’effet accélérateur fixe et flexible.',
        conceptExplanation:
          'L’**investissement ($I = FBCF + \\Delta S$)** joue un double rôle vital en macroéconomie : à **court terme**, c’est la composante la plus volatile de la demande globale ; à **long terme**, il accumule le stock de capital productif ($K$) et tire la croissance potentielle. Il peut être privé ou public, matériel (machines, bâtiments) ou immatériel (R&D, logiciels), mais **exclut** les achats de titres financiers (actions/obligations) et la revente d’actifs anciens.\n\n' +
          '1. **Dynamique du capital** : $I_b = I_n + A_t = (K_t - K_{t-1}) + \\delta K_{t-1}$, où $I_n$ est l’investissement net et $A_t = \\delta K_{t-1}$ l’amortissement (remplacement du capital usé).\n' +
          '2. **Critères de décision** face au taux d’intérêt $r$ (coût d’opportunité du capital) :\n' +
          '• **Valeur Actuelle Nette ($VAN$)** : $VAN = \\sum_{t=1}^n \\frac{RN_t}{(1+r)^t} + \\frac{VR}{(1+r)^n} - I_0$. Projet rentable $\\iff VAN > 0$.\n' +
          '• **Taux de Rendement Interne ($TRI$ ou $\\rho$)** : taux qui annule la $VAN$ (efficacité marginale du capital). Projet rentable $\\iff TRI > r$. Donc l’investissement agrégé est une **fonction décroissante de $r$**.\n' +
          '3. **Principe de l’accélérateur (J.M. Clark, 1917)** : si $K_t = v\\,Y_t$ ($v$ = coefficient de capital), alors $I_{nt} = v\\,\\Delta Y_t = v(Y_t - Y_{t-1})$. Une variation de la demande provoque une variation **amplifiée** de l’investissement.',
        keyRule:
          'Projet rentable $\\iff VAN > 0 \\iff TRI > r$. Accélérateur fixe : $I_n = v\\,\\Delta Y$ et $I_b = v\\,\\Delta Y + \\delta K_{t-1}$.',
        formulas: [
          {
            name: 'Dynamique du stock de capital (Investissement brut et net)',
            formula: 'K_t = (1 - \\delta)K_{t-1} + I_{b,t} \\iff I_{b,t} = \\underbrace{(K_t - K_{t-1})}_{I_{n,t}} + \\underbrace{\\delta K_{t-1}}_{A_t}',
            note: 'Si I_b < δK_{t-1}, l’investissement net est négatif : le stock de capital national se contracte.',
          },
          {
            name: 'Critères VAN, TRI et Accélérateur de Clark',
            formula: 'VAN = \\sum_{t=1}^n \\frac{RN_t}{(1+r)^t} + \\frac{VR}{(1+r)^n} - I_0 \\quad | \\quad VAN(TRI) = 0 \\quad | \\quad I_{n,t} = v\\,(Y_t - Y_{t-1})',
            note: 'v (ou α) = K / Y est le coefficient de capital (nombre d’unités de capital nécessaires pour 1 unité de PIB).',
          },
        ],
        workedExample: {
          title: 'Arbitrer des projets par le TRI et calculer l’accélérateur',
          statement:
            'A) Un investisseur évalue 5 projets : P1 (75 000 ; TRI 9 %), P2 (30 000 ; 11 %), P3 (50 000 ; 14 %), P4 (105 000 ; 10,5 %), P5 (80 000 ; 8 %). Quel est le montant investi si $r = 10\\,\\%$, puis si $r = 12\\,\\%$ ?\nB) Économie à $v = 2,5$, $Y_{t-1} = 1\\,800$, $Y_t = 2\\,000$, $\\delta = 10\\,\\%$, $K_{t-1} = 4\\,000$. Calculez $I_n$ et $I_b$.',
          methodSteps: [
            'A1) À $r = 10\\,\\%$, on retient tous les projets vérifiant $TRI > 10\\,\\%$ : P2 (11 %), P3 (14 %) et P4 (10,5 %). Montant investi $= 30\\,000 + 50\\,000 + 105\\,000 = 185\\,000$ FCFA.',
            'A2) À $r = 12\\,\\%$, seul P3 (14 %) reste rentable ⇒ investissement ramené à $50\\,000$ FCFA (confirmation que $I(r)$ décroît avec $r$).',
            'B1) Investissement net induit par l’accélérateur : $I_n = v(Y_t - Y_{t-1}) = 2,5 \\times (2\\,000 - 1\\,800) = 2,5 \\times 200 = 500$.',
            'B2) Amortissement : $A = \\delta K_{t-1} = 0,10 \\times 4\\,000 = 400 \\implies$ Investissement brut $I_b = 500 + 400 = 900$.',
          ],
          conclusion:
            'Une hausse de 2 points du taux d’intérêt divise l’investissement par près de 4, tandis qu’une hausse de 200 de la demande génère un besoin de 500 en investissement net.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Typologies',
            stepTheme: 'Matériel, immatériel, exclusions',
            stepTitle: 'Définition macroéconomique de l’investissement et exclusions strictes',
            paragraphText:
              'Dans le langage courant, acheter des actions à la bourse s’appelle « investir ». En macroéconomie, c’est un **piège classique** : seul compte ce qui agrandit le stock de capital productif du pays !\n' +
              '• **Investissement productif** : achat de capital physique durable (machines, serveurs, usines, infrastructures) ou immatériel (logiciels, R&D, brevets), qu’il soit privé (SNF/ménages) ou public (APu).\n' +
              '• **Exclusions formelles** : l’acquisition de valeurs mobilières (actions, obligations = simple placement financier) et l’achat de bâtiments ou machines d’occasion (simple transfert de propriété entre agents).\n' +
              '• **Double rôle** : dépense de soutien de la demande globale à court terme, ET moteur de la capacité productive à long terme.',
            keyRule:
              'Investissement macroéconomique = $FBCF + \\Delta S$ (création de capital neuf) — exclut les achats d’actions/obligations et la revente de biens d’occasion.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces opérations constitue un véritable INVESTISSEMENT au sens de la macroéconomie ?',
              options: [
                'L’achat d’obligations d’État sur le marché financier de l’UEMOA',
                'Le rachat d’un entrepôt existant construit dix ans plus tôt',
                'L’acquisition de serveurs neufs et le développement d’un logiciel propriétaire par une fintech',
                'Le dépôt de 10 millions FCFA sur un compte à terme bancaire',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’achat d’équipements neufs (matériel) et la création de logiciels durables (immatériel) accroissent le stock de capital productif (FBCF).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Capital',
            stepTheme: 'Brut, net, amortissement',
            stepTitle: 'Calculer investissement net, amortissement et investissement brut',
            paragraphText:
              'Les machines, routes et serveurs s’usent ou deviennent obsolètes chaque année (au taux de dépréciation $\\delta$). Il faut donc distinguer maintenir le capital existant et l’agrandir.\n' +
              '• **Investissement de remplacement (amortissement)** : $A_t = \\delta K_{t-1}$, destiné à compenser l’usure du capital.\n' +
              '• **Investissement net** : $I_{n,t} = K_t - K_{t-1}$, mesure l’augmentation réelle de la capacité productive.\n' +
              '• **Investissement brut** : $I_{b,t} = I_{n,t} + A_t$. Si $I_b = 1\\,000$ mais que l’amortissement vaut $A = 1\\,200$, alors $I_n = -200$ : le pays s’appauvrit en capital productif !',
            formula: {
              name: 'Équation d’accumulation du capital',
              formula: 'I_b = I_n + \\delta K_{t-1} \\iff K_t = K_{t-1} + I_b - \\delta K_{t-1}',
              note: 'Lorsque le capital a une durée de vie de d années en amortissement linéaire, δ = 1/d.',
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Une entreprise possède un stock de capital initial $K_{t-1} = 5\\,000$ M FCFA qui se déprécie au taux $\\delta = 8\\,\\%$ par an. Elle réalise un investissement brut de $I_b = 700$ M FCFA. Quel est son investissement net $I_n$ et son nouveau stock $K_t$ ?',
              options: [
                '$I_n = 700$ et $K_t = 5\\,700$',
                '$I_n = 300$ et $K_t = 5\\,300$',
                '$I_n = 400$ et $K_t = 5\\,400$',
                '$I_n = -100$ et $K_t = 4\\,900$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Amortissement $A = 0,08 \\times 5\\,000 = 400$. Donc $I_n = I_b - A = 700 - 400 = 300$, et $K_t = 5\\,000 + 300 = 5\\,300$ M FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Critère VAN',
            stepTheme: 'Actualisation',
            stepTitle: 'Calculer la Valeur Actuelle Nette (VAN) d’un projet d’investissement',
            paragraphText:
              'Un franc perçu dans 3 ans vaut moins qu’un franc disponible aujourd’hui (car on pourrait le placer au taux $r$). La **technique d’actualisation** ramène tous les flux futurs à leur valeur d’aujourd’hui.\n' +
              '• **Formule** : $VAN = \\frac{RN_1}{1+r} + \\frac{RN_2}{(1+r)^2} + \\dots + \\frac{RN_n + VR}{(1+r)^n} - I_0$, où $RN_t$ sont les cash-flows nets annuels et $VR$ la valeur résiduelle en fin de vie.\n' +
              '• **Règle de décision** : $VAN > 0 \\implies$ projet rentable (crée de la valeur nette) ; $VAN < 0 \\implies$ projet rejeté. Entre deux projets mutuellement exclusifs, choisir celui de **VAN la plus élevée**.\n' +
              '• **Exemple** : $I_0 = 100\\,000$, cash-flows $RN_1 = 66\\,000$, $RN_2 = 60\\,500$ à $r = 10\\,\\%$ : $VAN = \\frac{66\\,000}{1,1} + \\frac{60\\,500}{1,21} - 100\\,000 = 60\\,000 + 50\\,000 - 100\\,000 = +10\\,000 > 0$.',
            keyRule:
              'Actualiser = diviser par $(1 + r)^t$ (ramener le futur vers aujourd’hui) ; Capitaliser = multiplier par $(1 + r)^t$ (projeter aujourd’hui vers le futur).',
            konanTip:
              'N’oublie jamais de rajouter la valeur résiduelle $VR$ (si l’énoncé en donne une) au flux de la DERNIÈRE année $n$, actualisée par $(1 + r)^n$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Un projet coûte $I_0 = 400$ M FCFA et génère $RN_1 = 110$ M FCFA en année 1, $RN_2 = 121$ M FCFA en année 2 et une valeur résiduelle $VR = 242$ M FCFA en fin d’année 2. Au taux d’actualisation $r = 10\\,\\%$, que vaut sa VAN ?',
              options: [
                '$+73$ M FCFA',
                '$0$ M FCFA (le TRI vaut donc exactement 10 %)',
                '$-100$ M FCFA',
                '$+40$ M FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Flux actualisés : $\\frac{110}{1,1} + \\frac{121 + 242}{(1,1)^2} = 100 + \\frac{363}{1,21} = 100 + 300 = 400$. Donc $VAN = 400 - 400 = 0$ M FCFA !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Critère TRI',
            stepTheme: 'Fonction I(r)',
            stepTitle: 'Taux de Rendement Interne (TRI) et relation décroissante I(r)',
            paragraphText:
              'Le **TRI** (noté $\\rho$, que Keynes appelle l’**efficacité marginale du capital — EMC**) est le taux d’actualisation exact qui annule la $VAN$.\n' +
              '• **Signification financière** : c’est le taux d’intérêt maximal que l’entreprise peut supporter sur son emprunt sans perdre d’argent.\n' +
              '• **Règle de décision** : si **$TRI > r$** ⇒ projet rentable ($VAN > 0$) ; si **$TRI < r$** ⇒ projet non rentable ($VAN < 0$).\n' +
              '• **Agrégation macroéconomique** : lorsque le taux d’intérêt $r$ baisse, de plus en plus de projets franchissent le seuil $TRI > r$ ⇒ l’investissement agrégé $I(r)$ est une **fonction décroissante du taux d’intérêt** (sans oublier le rôle des anticipations / « esprits animaux » chez Keynes).',
            keyRule:
              'Si $r$ augmente, le dénominateur $(1+r)^t$ grossit ⇒ la $VAN$ de tous les projets baisse ⇒ moins de projets vérifient $TRI > r$ ⇒ l’investissement global $I$ recule.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Une entreprise compare quatre projets : A ($I_0 = 40\\text{ M}$, $TRI = 13\\,\\%$), B ($60\\text{ M}$, $9\\,\\%$), C ($50\\text{ M}$, $11\\,\\%$), D ($80\\text{ M}$, $7\\,\\%$). Quel montant total investit-elle si le taux d’intérêt de marché est $r = 10\\,\\%$ ?',
              options: [
                '90 M FCFA (projets A et C uniquement)',
                '150 M FCFA',
                '40 M FCFA',
                '230 M FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Seuls les projets dont $TRI > 10\\,\\%$ sont rentables : A (13 %) et C (11 %), soit $40 + 50 = 90$ M FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Accélérateur',
            stepTheme: 'Modèle de Clark',
            stepTitle: 'Le principe de l’accélérateur fixe de J.M. Clark (1917)',
            paragraphText:
              'En observant les commandes de wagons de chemin de fer en 1917, John Maurice Clark a découvert un mécanisme spectaculaire d’amplification des cycles économiques.\n' +
              '• **Hypothèse** : plein emploi des équipements (pas de capital oisif) et proportionnalité fixe entre stock de capital requis et production : $K_t = v \\cdot Y_t$, où $v = K / Y > 1$ est le **coefficient de capital**.\n' +
              '• **Équation de l’accélérateur** : $I_{n,t} = K_t - K_{t-1} = v\\,(Y_t - Y_{t-1}) = v\\,\\Delta Y_t$.\n' +
              '• **Paradoxe conjoncturel** : l’investissement dépend de la **variation** ($\\Delta Y$) et non du niveau de la demande ! Dès que la croissance de la demande **ralentit** (ex. $+100$ puis $+50$), l’investissement net **chute de moitié** ($200 \\to 100$), amplifiant violemment les retournements conjoncturels !',
            formula: {
              name: 'Accélérateur fixe de Clark',
              formula: 'K_t = v\\,Y_t \\implies I_{n,t} = v\\,\\Delta Y_t, \\qquad I_{b,t} = v\\,\\Delta Y_t + A_t',
              note: 'Un simple ralentissement de la hausse de la demande (ΔY₂ < ΔY₁ tout en restant > 0) suffit à provoquer une baisse absolue de l’investissement !',
            },
            konanTip:
              'Vérifie le calcul du coefficient de capital : s’il faut 200 de capital pour produire 100, alors $v = K / Y = 200 / 100 = 2$ (toujours Capital AU NUMÉRATEUR !).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Dans une économie sans capital oisif où $v = 3$, la demande passe de $300$ (période 0) à $400$ (période 1), puis à $440$ (période 2). Comment évolue l’investissement net $I_n$ entre la période 1 et la période 2 ?',
              options: [
                'Il augmente de 300 à 420',
                'Il chute de 300 à 120 bien que la demande continue d’augmenter',
                'Il reste constant à 300',
                'Il passe de 100 à 40',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Période 1 : $\\Delta Y_1 = 100 \\implies I_{n,1} = 3 \\times 100 = 300$. Période 2 : $\\Delta Y_2 = 40 \\implies I_{n,2} = 3 \\times 40 = 120$. Le ralentissement de la demande contracte brutalement l’investissement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Accélérateur flexible',
            stepTheme: 'Limites & Modigliani-Miller',
            stepTitle: 'Accélérateur flexible, capacités oisives et structure financière',
            paragraphText:
              'Le modèle d’accélérateur fixe repose sur des hypothèses très rigides que les économistes ont rendues plus réalistes.\n' +
              '• **Existence de capital oisif** : si les usines ne tournent qu’à 75 % de leur capacité, une hausse de la demande est d’abord absorbée par les machines inoccupées sans déclencher immédiatement d’investissement net !\n' +
              '• **Accélérateur flexible (ajustement partiel)** : en raison des délais de livraison, des anticipations prudentes et des contraintes financières, l’entreprise ne comble chaque année qu’une fraction $\\lambda \\in ]0;1[$ de l’écart entre son capital désiré $K_t^*$ et son capital existant : $I_{n,t} = \\lambda(K_t^* - K_{t-1})$.\n' +
              '• **Financement (Modigliani-Miller)** : sur des marchés parfaits sans impôts ni coûts de faillite, la valeur d’une firme et son investissement sont indépendants du partage dette/fonds propres ; en réalité, les imperfections bancaires rendent l’autofinancement décisif pour les PME.',
            keyRule:
              'L’accélérateur flexible $I_{n,t} = \\lambda(v Y_t - K_{t-1})$ lisse l’ajustement du capital dans le temps face aux délais, incertitudes et contraintes financières.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi la présence de « capacités de production oisives » (machines sous-utilisées) atténue-t-elle l’effet accélérateur fixe en début de reprise économique ?',
              options: [
                'Parce que les entreprises peuvent d’abord répondre à la hausse de demande en remettant en service leurs équipements déjà disponibles sans acheter de nouvelles machines',
                'Parce que les machines oisives réduisent le coefficient de capital à l’infini',
                'Parce que le taux d’intérêt devient automatiquement négatif',
                'Parce que les entreprises arrêtent définitivement de produire',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’accélérateur fixe suppose le plein usage du capital existant ; s’il existe des capacités oisives, la production augmente d’abord par hausse du taux d’utilisation sans nécessiter d’investissement net immédiat.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : ÉQUILIBRE REVENU-DÉPENSE, MULTIPLICATEURS, MONNAIE ET IS-LM
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch4',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 : Équilibre revenu-dépense, multiplicateurs, monnaie et modèle IS-LM',
    summary:
      'Maîtriser le diagramme à 45° keynésien, les quatre multiplicateurs (dont Haavelmo), la monnaie (M1/M2/M3, base monétaire, multiplicateur de crédit) et l’équilibre simultané IS-LM.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Macroéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 4.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch4_p1',
        order: 1,
        title: 'Modèle keynésien simplifié, demande effective et diagramme à 45°',
        summary:
          'Comprendre l’inversion de la loi de Say, l’équilibre revenu-dépense Y = C + I + G, le diagramme à 45° de Samuelson, les variations involontaires de stocks et le paradoxe de l’épargne.',
        conceptExplanation:
          'Dans le **modèle keynésien simplifié** (court terme, prix rigides, capacités productives sous-employées), l’ajustement sur le marché des biens s’effectue **par les quantités produites** et non par les prix.\n\n' +
          'Keynes renverse la **loi de Say** (« toute offre crée sa propre demande ») grâce au **principe de la demande effective** : ce sont les anticipations de demande globale formulées par les entrepreneurs qui déterminent le niveau de production $Y$ et donc le volume d’emploi $L$. Une demande effective insuffisante peut maintenir durablement l’économie dans un **équilibre de sous-emploi**.\n\n' +
          'En économie fermée avec État ($C = c(Y - T) + C_0$, $I = I_0$, $G = G_0$, $T = T_0$), l’équilibre macroéconomique s’écrit :\n' +
          '$$Y = DG = C + I + G \\iff Y^* = \\frac{1}{1 - c}\\big(C_0 + I_0 + G_0 - c\\,T_0\\big)$$\n' +
          'Graphiquement, dans le **diagramme à 45°** de Paul Samuelson (1948), l’équilibre $E^*$ est l’intersection entre la droite de **demande globale** $DG(Y) = cY + A_0$ (pente $c < 1$) et la **première bissectrice** $DG = Y$ (offre globale).',
        keyRule:
          'Dans le diagramme à 45° : si $DG > Y$, les entreprises subissent un déstockage involontaire et AUGMENTENT leur production ; si $DG < Y$, les stocks s’accumulent et elles RÉDUISENT leur production.',
        formulas: [
          {
            name: 'Équilibre revenu-dépense (avec État)',
            formula: 'Y = C + I + G \\iff S + T = I + G \\iff Y^* = \\frac{1}{1 - c}\\,(C_0 + I_0 + G_0 - c\\,T_0)',
            note: 'A₀ = C₀ + I₀ + G₀ − cT₀ représente la dépense autonome totale (ordonnée à l’origine de DG).',
          },
        ],
        workedExample: {
          title: 'Résoudre un équilibre keynésien et vérifier Fuites = Injections',
          statement:
            'Dans une économie fermée : $C = 0,6(Y - T) + 100$, $I = 160$, $G = 200$ et $T = 100$ (en Mds FCFA). 1) Calculez le revenu d’équilibre $Y^*$, $C^*$ et $S^*$. 2) Vérifiez $S^* + T = I + G$. 3) Que se passe-t-il si les entreprises produisent $Y_1 = 800$ ?',
          methodSteps: [
            'Écrire la demande globale : $DG(Y) = 0,6(Y - 100) + 100 + 160 + 200 = 0,6Y + 400$.',
            'Résoudre $Y = DG(Y)$ : $Y^* = 0,6Y^* + 400 \\implies 0,4Y^* = 400 \\implies Y^* = 1\\,000$ Mds FCFA.',
            'Calculer $C^*$ et $S^*$ : $Y_d^* = 1\\,000 - 100 = 900 \\implies C^* = 0,6(900) + 100 = 640$ ; $S^* = 900 - 640 = 260$.',
            'Vérifier fuites = injections : $S^* + T = 260 + 100 = 360$ et $I + G = 160 + 200 = 360$ (égalité exacte !).',
            'À $Y_1 = 800 < Y^*$ : $DG(800) = 0,6(800) + 400 = 880 > 800$ ⇒ déstockage involontaire de $-80$, incitant les firmes à accroître leur production vers $1\\,000$.',
          ],
          conclusion:
            'L’économie converge par ajustement des quantités vers l’unique équilibre stable $Y^* = 1\\,000$ Mds FCFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Demande effective',
            stepTheme: 'Inversion loi de Say',
            stepTitle: 'Principe de la demande effective et équilibre de sous-emploi',
            paragraphText:
              'Avant la Grande Dépression des années 1930, les économistes classiques s’appuyaient sur la **loi de Say** : toute production distribue des revenus qui achètent cette production, rendant les crises de surproduction générales impossibles.\n' +
              '• **Rupture keynésienne** : les ménages peuvent **thésauriser** (garder de la monnaie liquide) au lieu de tout dépenser. Ce n’est donc pas l’offre qui crée sa demande, mais la **demande effective** (demande anticipée par les firmes) qui détermine l’offre et l’emploi !\n' +
              '• **Équilibre de sous-emploi** : si les entrepreneurs sont pessimistes, ils produisent peu et embauchent peu. L’économie s’équilibre alors sur le marché des biens ($Y^* = DG$) **tout en laissant des millions de chômeurs involontaires** !',
            keyRule:
              'Loi de Say (Classiques) : Offre → Demande (plein emploi). Principe de la demande effective (Keynes) : Demande anticipée → Offre → Emploi (sous-emploi possible).',
            konanTip:
              'Retiens l’expression exacte : « équilibre de sous-emploi » signifie qu’il y a équilibre sur le marché des BIENS ($Y = DG$), mais déséquilibre (chômage) sur le marché du TRAVAIL !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Selon le principe keynésien de la demande effective, quelle est la relation de causalité qui détermine le niveau de production et d’emploi à court terme ?',
              options: [
                'L’offre de travail des salariés force automatiquement les entreprises à tout produire',
                'Ce sont les anticipations de demande globale des entrepreneurs qui déterminent la production et donc le volume d’emploi',
                'La baisse des prix élimine instantanément tout stock invendu sans toucher aux quantités',
                'Les exportations fixent toujours 100 % du niveau d’emploi',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Keynes inverse la loi de Say : les entreprises n’embauchent et ne produisent qu’à hauteur des débouchés qu’elles anticipent (la demande effective).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Équilibre simple',
            stepTheme: 'Y = C + I ⇔ S = I',
            stepTitle: 'Équilibre revenu-dépense en économie fermée sans État',
            paragraphText:
              'Dans le modèle le plus épuré (ménages + entreprises uniquement), la demande globale se réduit à $DG = C + I$, avec $C = cY + C_0$ et $I = I_0$ (exogène).\n' +
              '• **Condition 1 (Offre = Demande)** : $Y = cY + C_0 + I_0 \\implies (1 - c)Y = C_0 + I_0 \\implies Y^* = \\frac{C_0 + I_0}{1 - c}$.\n' +
              '• **Condition 2 équivalente (Épargne = Investissement)** : puisque $S = Y - C$, écrire $Y = C + I$ équivaut rigoureusement à **$S(Y^*) = I_0$**, soit $(1 - c)Y^* - C_0 = I_0$ !\n' +
              '• **Exemple** : si $C = 0,75Y + 100$ et $I_0 = 150$, alors $Y^* = (100 + 150)/(1 - 0,75) = 250 / 0,25 = 1\\,000$ (et $S^* = 0,25(1\\,000) - 100 = 150 = I_0$).',
            formula: {
              name: 'Équilibre keynésien élémentaire',
              formula: 'Y^* = C + I \\iff S(Y^*) = I_0 \\iff Y^* = \\frac{C_0 + I_0}{1 - c}',
              note: 'Chez Keynes, c’est la variation du REVENU Y (et non du taux d’intérêt) qui ajuste l’épargne S jusqu’à égaler l’investissement I !',
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Dans une économie fermée sans État, on donne $C = 0,8Y + 50$ et $I = 150$. Quel est le revenu d’équilibre $Y^*$ ?',
              options: ['1 000', '800', '250', '1 200'],
              correctAnswerIndex: 0,
              explanation:
                '$Y^* = (C_0 + I_0)/(1 - c) = (50 + 150)/(1 - 0,8) = 200 / 0,2 = 1\\,000$. Vérification : $C = 850$, $C + I = 1\\,000$ et $S = 150 = I$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Diagramme 45°',
            stepTheme: 'Samuelson',
            stepTitle: 'Construire et lire le diagramme à 45° (croix keynésienne)',
            paragraphText:
              'Proposé par Paul Samuelson en 1948, le **diagramme à 45°** offre une lecture géométrique immédiate de l’équilibre et de l’effet multiplicateur.\n' +
              '• **Première bissectrice ($DG = Y$, pente = 1)** : ensemble des points où la dépense globale égale exactement la production.\n' +
              '• **Droite de demande globale ($DG = A_0 + cY$)** : coupe l’axe vertical à la dépense autonome $A_0 > 0$ et possède une pente **$c < 1$** (donc moins raide que la bissectrice !).\n' +
              '• **Lecture du graphique ci-dessous** : $DG_1 = 2 + 0,6Y$ coupe la bissectrice en $E_1(5 ; 5)$. Si l’investissement augmente de $\\Delta I = +1,2$, la droite monte parallèlement en $DG_2 = 3,2 + 0,6Y$ et le nouvel équilibre bondit à $E_2(8 ; 8)$, soit $\\Delta Y = +3 = 2,5 \\times 1,2$ !',
            keyRule:
              'Sur le diagramme à 45°, l’équilibre est unique et stable parce que la pente de la demande globale ($c$) est STRICTEMENT INFÉRIEURE à 1 (pente de la bissectrice).',
            visualSchema: {
              type: 'function_plot',
              title: 'Diagramme à 45° de Samuelson et effet multiplicateur',
              caption: 'Bissectrice Y = DG (gris), Demande initiale DG₁ = 2 + 0,6Y (bleu) ⇒ E₁(5 ; 5). Après choc ΔI = +1,2 : DG₂ = 3,2 + 0,6Y (vert) ⇒ E₂(8 ; 8), soit ΔY = +3.',
              plot: {
                xMin: 0,
                xMax: 10,
                yMin: 0,
                yMax: 10,
                xStep: 2,
                yStep: 2,
                curves: [
                  {
                    label: 'Bissectrice 45° : DG = Y',
                    color: 'slate',
                    pieces: [{ expr: 'x', from: 0, to: 10 }],
                  },
                  {
                    label: 'DG₁ = 2 + 0,6·Y',
                    color: 'blue',
                    pieces: [{ expr: '2 + 0.6*x', from: 0, to: 10 }],
                  },
                  {
                    label: 'DG₂ = 3,2 + 0,6·Y (après ΔI = +1,2)',
                    color: 'green',
                    pieces: [{ expr: '3.2 + 0.6*x', from: 0, to: 10 }],
                  },
                ],
                points: [
                  { x: 5, y: 5, label: 'E₁ (5 ; 5)', filled: true, color: 'blue' },
                  { x: 8, y: 8, label: 'E₂ (8 ; 8)', filled: true, color: 'orange' },
                ],
                verticalLines: [
                  { x: 5, label: 'Y₁* = 5', color: 'blue' },
                  { x: 8, label: 'Y₂* = 8', color: 'green' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Dans le diagramme à 45° de Samuelson, que représente géométriquement la pente de la droite de demande globale $DG(Y) = A_0 + cY$ ?',
              options: [
                'Le taux d’intérêt de la Banque Centrale',
                'La propension marginale à consommer $c$ (comprise entre 0 et 1)',
                'La consommation autonome $C_0$',
                'Le multiplicateur keynésien $1/(1-c)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ordonnée à l’origine est la dépense autonome $A_0$ et le coefficient directeur (pente) de $DG(Y)$ est la propension marginale à consommer $c \\in ]0;1[$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Avec État',
            stepTheme: 'G, T et TR',
            stepTitle: 'Introduire les dépenses publiques, impôts et transferts dans l’équilibre',
            paragraphText:
              'En ajoutant le secteur public, la demande globale devient $DG = C + I + G$, où la consommation dépend du revenu disponible $Y_d = Y - T + TR$.\n' +
              '• **Équation développée** : $Y = c(Y - T_0 + TR_0) + C_0 + I_0 + G_0$.\n' +
              '• **Isolement de $Y^*$** : $(1 - c)Y^* = C_0 + I_0 + G_0 - c T_0 + c TR_0 \\implies Y^* = \\frac{C_0 + I_0 + G_0 - c T_0 + c TR_0}{1 - c}$.\n' +
              '• **Équilibre fuites-injections** : $S + (T - TR) = I + G$, où $T - TR - G$ est le solde budgétaire de l’État (excédent si $> 0$, déficit si $< 0$).',
            konanTip:
              'Attention au coefficient devant $T_0$ et $TR_0$ ! Les dépenses publiques $G_0$ entrent avec un poids $1$, tandis que les impôts $-T_0$ et transferts $+TR_0$ entrent multipliés par **$c$** !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Dans une économie avec $C = 0,75(Y - T) + 100$, $I = 200$, $G = 250$ et $T = 200$, quel est le revenu d’équilibre $Y^*$ ?',
              options: ['1 400', '1 600', '2 200', '1 200'],
              correctAnswerIndex: 1,
              explanation:
                '$Y = 0,75(Y - 200) + 100 + 200 + 250 = 0,75Y - 150 + 550 = 0,75Y + 400 \\implies 0,25Y^* = 400 \\implies Y^* = 1\\,600$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Ajustement',
            stepTheme: 'Stocks involontaires',
            stepTitle: 'Le rôle moteur des variations involontaires de stocks hors équilibre',
            paragraphText:
              'Comment l’économie rejoint-elle concrètement le point $E^*$ si les entrepreneurs se sont trompés dans leurs prévisions de production $Y$ ? Par le signal des **stocks involontaires** !\n' +
              '• **Si $Y < Y^*$** (à gauche de $E^*$, la courbe $DG$ est AU-DESSUS de la bissectrice) : la demande dépasse la production ($DG > Y$). Les rayons se vident (**déstockage involontaire** $\\Delta S_{\\text{inv}} < 0$) ⇒ les firmes embauchent et **augmentent $Y$** vers $Y^*$.\n' +
              '• **Si $Y > Y^*$** (à droite de $E^*$, $DG < Y$) : les invendus s’empilent (**stockage involontaire** $\\Delta S_{\\text{inv}} > 0$) ⇒ les firmes réduisent leur production vers $Y^*$.',
            keyRule:
              'Hors équilibre : $Y - DG = \\Delta S_{\\text{involontaire}}$. L’équilibre est atteint lorsque les stocks involontaires sont exactement nuls !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Si la production courante vaut $Y = 1\\,200$ et que la demande globale planifiée vaut $DG = 1\\,050$, que se passe-t-il sur le marché des biens selon le modèle keynésien ?',
              options: [
                'Les entreprises subissent un déstockage involontaire de 150 et augmentent leur production',
                'L’économie est déjà en équilibre parfait',
                'Les entreprises subissent une accumulation involontaire de stocks de $+150$ et réduisent leur production',
                'Le taux d’épargne devient immédiatement nul',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$Y > DG$ laisse $1\\,200 - 1\\,050 = +150$ d’invendus non désirés (stockage involontaire), incitant les producteurs à contracter leur production.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Paradoxe épargne',
            stepTheme: 'Sophisme de composition',
            stepTitle: 'Le paradoxe de l’épargne (ou paradoxe de la frugalité) chez Keynes',
            paragraphText:
              'Voici l’un des résultats les plus contre-intuitifs de la macroéconomie : si, par crainte d’une crise, tous les ménages décident simultanément d’épargner davantage (baisse de $C_0$ ou hausse de $s = 1 - c$), l’épargne totale du pays augmente-t-elle ? **NON !**\n' +
              '• **Mécanisme** : la baisse de la consommation déplace la courbe $DG$ vers le bas ⇒ le PIB d’équilibre $Y^*$ **chute fortement** (et le chômage grimpe).\n' +
              '• **Effet sur l’épargne réalisée** : dans le modèle à investissement fixe $I = I_0$, l’équilibre exige toujours $S^* = I_0$ ! Les ménages veulent épargner plus, mais leur revenu $Y^*$ baisse tellement que **l’épargne agrégée finale reste strictement inchangée** (ou baisse même si $I$ dépend de $Y$ !).\n' +
              '• **Leçon** : une vertu individuelle (la prudence/épargne) peut devenir un vice collectif en période de récession !',
            keyRule:
              'Paradoxe de l’épargne : en sous-emploi, une hausse collective de la volonté d’épargner contracte la demande globale, réduit le PIB $Y^*$ et laisse l’épargne globale inchangée (voire plus faible).',
            konanTip:
              'C’est l’illustration parfaite du sophisme de composition en macroéconomie : ce qui enrichit un individu isolé peut appauvrir la collectivité si tous le font en même temps pendant une crise.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Dans le modèle keynésien simple ($I = I_0$ fixe, économie fermée sans État), que provoque une baisse brutale de la consommation autonome $C_0$ (hausse du désir d’épargner des ménages) ?',
              options: [
                'Une baisse du revenu d’équilibre $Y^*$ tandis que l’épargne agrégée finale $S^*$ reste inchangée et égale à $I_0$',
                'Une forte hausse du revenu $Y^*$ et de l’épargne $S^*$',
                'Une hausse de l’investissement $I_0$ sans effet sur $Y^*$',
                'Aucune variation du revenu $Y^*$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$Y^* = (C_0 + I_0)/(1-c)$ diminue quand $C_0$ baisse, tandis qu’à l’équilibre $S^* = I_0$ demeure strictement inchangée : c’est le paradoxe de l’épargne.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch4_p2',
        order: 2,
        title: 'Multiplicateurs keynésiens, théorème d’Haavelmo et freins à la relance',
        summary:
          'Démontrer et calculer les multiplicateurs d’investissement, de dépenses publiques, fiscal, des transferts, du budget équilibré (Haavelmo) et d’économie ouverte, et analyser leurs freins.',
        conceptExplanation:
          'Lorsqu’un État investit 100 Mds FCFA dans des routes ou réseaux fibre, l’impact final sur le PIB dépasse largement 100 Mds FCFA : les salaires versés aux ouvriers sont consommés à hauteur de $c$, générant des revenus pour les commerçants, qui consomment à leur tour $c$ de ce revenu, etc. La somme de la série géométrique $1 + c + c^2 + \\dots = \\frac{1}{1 - c}$ fonde le **multiplicateur keynésien**.\n\n' +
          'En économie fermée à impôts forfaitaires, on retient quatre formules incontournables :\n' +
          '• **Multiplicateur d’investissement et de dépenses publiques** : $k_I = k_G = \\frac{1}{1 - c} > 1$.\n' +
          '• **Multiplicateur fiscal** : $k_T = \\frac{-c}{1 - c}$ (toujours inférieur de $1$ en valeur absolue à $k_G$).\n' +
          '• **Multiplicateur des transferts** : $k_{TR} = \\frac{+c}{1 - c}$.\n' +
          '• **Théorème du budget équilibré (Trygve Haavelmo, 1945)** : si $\\Delta G = \\Delta T$, l’effet net vaut $k_{BE} = k_G + k_T = \\frac{1 - c}{1 - c} = +1$ (toujours expansionniste !).\n\n' +
          'En pratique, trois **freins** amortissent le multiplicateur : les **fuites** (épargne, impôts proportionnels $t$, importations $m$ donnant $k_{\\text{ouv}} = \\frac{1}{1 - c(1 - t) + m}$), les **rigidités productives** (goulots d’étranglement → inflation) et l’**effet d’éviction** (hausse des taux d’intérêt).',
        keyRule:
          'Retiens par cœur : $k_I = k_G = \\frac{1}{1-c}$, $k_T = \\frac{-c}{1-c}$, $k_{BE} = 1$ (Haavelmo), et en économie ouverte $k_{\\text{ouv}} = \\frac{1}{1 - c(1 - t) + m}$.',
        formulas: [
          {
            name: 'Tableau analytique des multiplicateurs keynésiens',
            formula: 'k_I = k_G = \\frac{1}{1 - c}, \\quad k_T = \\frac{-c}{1 - c}, \\quad k_{TR} = \\frac{c}{1 - c}, \\quad k_{BE} = 1',
            note: 'Remarquer que |k_G| − |k_T| = 1/(1−c) − c/(1−c) = 1 pour tout c ∈ ]0 ; 1[ !',
          },
          {
            name: 'Multiplicateur généralisé (impôt proportionnel t et importations M = mY)',
            formula: 'k_{\\text{ouv}} = \\frac{1}{1 - c(1 - t) + m}',
            note: 'Plus les fuites (1−c), t et m sont fortes, plus le dénominateur grandit et plus le multiplicateur diminue.',
          },
        ],
        workedExample: {
          title: 'Comparer trois stratégies budgétaires (G, T et Haavelmo)',
          statement:
            'Soit une économie où $c = 0,8$. Le gouvernement souhaite relancer le PIB de $+200$ Mds FCFA. Comparez le coût budgétaire de trois options : (1) hausse des dépenses publiques $\\Delta G$, (2) baisse des impôts $\\Delta T$, (3) relance à budget équilibré $\\Delta G = \\Delta T$.',
          methodSteps: [
            'Calculer les multiplicateurs : $k_G = 1 / (1 - 0,8) = 5$ ; $k_T = -0,8 / 0,2 = -4$ ; $k_{BE} = 1$.',
            'Option 1 (dépenses publiques) : $\\Delta Y = 5\\,\\Delta G = 200 \\implies \\Delta G = +40$ Mds FCFA (déficit de 40 Mds).',
            'Option 2 (baisse d’impôts) : $\\Delta Y = -4\\,\\Delta T = 200 \\implies \\Delta T = -50$ Mds FCFA (déficit plus lourd de 50 Mds, car les ménages épargnent 20 % de la baisse d’impôt dès la 1re vague !).',
            'Option 3 (budget équilibré de Haavelmo) : $\\Delta Y = 1 \\times \\Delta G = 200 \\implies \\Delta G = \\Delta T = +200$ Mds FCFA (aucun déficit, mais alourdit fortement la taille de l’État).',
          ],
          conclusion:
            'À franc public dépensé égal, la dépense directe ($k_G = 5$) stimule davantage le PIB à court terme qu’une baisse fiscale ($|k_T| = 4$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Série géométrique',
            stepTheme: 'Vagues du multiplicateur',
            stepTitle: 'Comprendre le mécanisme en cascade et le tableau des multiplicateurs',
            paragraphText:
              'Pourquoi une injection initiale $\\Delta G = 100$ crée-t-elle $\\Delta Y = 500$ lorsque $c = 0,8$ ? Suis l’argent qui circule de main en main !\n' +
              '• **Vague 1** : l’État commande 100 d’infrastructures ⇒ $+100$ de revenus.\n' +
              '• **Vague 2** : les salariés dépensent $0,8 \\times 100 = +80$ (et épargnent 20).\n' +
              '• **Vague 3** : les commerçants qui reçoivent 80 dépensent $0,8 \\times 80 = +64$, puis $+51,2$, etc.\n' +
              '• **Somme infinie** : $\\Delta Y = 100(1 + 0,8 + 0,8^2 + \\dots) = 100 \\times \\frac{1}{1 - 0,8} = 500$. Le tableau ci-dessous rassemble toutes les formules à maîtriser.',
            keyRule:
              'Plus la propension marginale à consommer $c$ est élevée (et donc plus la fuite d’épargne $1 - c$ est faible), plus le multiplicateur $1/(1 - c)$ est puissant !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Synthèse des multiplicateurs keynésiens',
              caption: 'Formules, valeurs numériques pour c = 0,8 (et t = 0,2 ; m = 0,2 en économie ouverte) et interprétation.',
              tableData: {
                headers: ['Multiplicateur', 'Formule', 'Si $c = 0,8$', 'Effet sur le PIB ($\\Delta Y$)'],
                rows: [
                  ['Investissement ($k_I$)', '$\\frac{1}{1-c}$', '$+5$', 'Fort effet direct dès la 1re vague'],
                  ['Dépenses publiques ($k_G$)', '$\\frac{1}{1-c}$', '$+5$', 'Identique à $k_I$ (dépense directe)'],
                  ['Fiscal forfaitaire ($k_T$)', '$\\frac{-c}{1-c}$', '$-4$', 'Impôt $\\downarrow \\Rightarrow Y\\uparrow$, mais $|k_T| = k_G - 1$'],
                  ['Transferts ($k_{TR}$)', '$\\frac{+c}{1-c}$', '$+4$', 'Symétrique de $k_T$ (via $Y_d$)'],
                  ['Budget équilibré ($k_{BE}$)', '$\\frac{1-c}{1-c} = 1$', '$+1$', 'Théorème d’Haavelmo ($\\Delta G = \\Delta T$)'],
                  ['Économie ouverte ($k_{\\text{ouv}}$)', '$\\frac{1}{1-c(1-t)+m}$', '$+1,79$', 'Amorti par les fuites $t$ et $m$'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Dans une économie fermée où la propension marginale à épargner vaut $s = 0,25$, de combien varie le PIB d’équilibre suite à une hausse d’investissement $\\Delta I = +60$ Mds FCFA ?',
              options: [
                '$+15$ Mds FCFA',
                '$+80$ Mds FCFA',
                '$+240$ Mds FCFA',
                '$+180$ Mds FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Puisque $s = 1 - c = 0,25$, le multiplicateur vaut $k_I = 1/s = 1/0,25 = 4$. Donc $\\Delta Y = 4 \\times 60 = +240$ Mds FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Fiscalité',
            stepTheme: 'Pourquoi |k_T| < k_G',
            stepTitle: 'Multiplicateur fiscal et multiplicateur des transferts',
            paragraphText:
              'Pourquoi une baisse d’impôts de 100 Mds FCFA (ou une hausse des bourses/transferts de 100 Mds) relance-t-elle un peu **moins** le PIB qu’une commande publique directe de 100 Mds ?\n' +
              '• **Dépense publique ($\\Delta G = +100$)** : 100 % des 100 Mds achètent directement des biens et services dès la vague 1 ⇒ $\\Delta Y = \\frac{1}{1-c}\\Delta G$.\n' +
              '• **Baisse d’impôt ($\\Delta T = -100$) ou transfert ($\\Delta TR = +100$)** : elle augmente d’abord le revenu disponible $Y_d$, mais les ménages en **épargnent immédiatement une fraction $(1 - c)$** et ne dépensent que $c \\times 100$ dès la vague 1 ! D’où $k_T = \\frac{-c}{1-c}$ et $k_{TR} = \\frac{+c}{1-c}$.',
            konanTip:
              'Vérifie le signe de $k_T$ : une HAUSSE d’impôt ($\\Delta T > 0$) FREINE le PIB ($\\Delta Y < 0$), et une BAISSE d’impôt ($\\Delta T < 0$) STIMULE le PIB ($\\Delta Y > 0$) !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Si $c = 0,75$ et que l’État augmente simultanément les impôts forfaitaires de $\\Delta T = +40$ Mds FCFA (sans changer $G$), quelle est la variation $\\Delta Y$ du PIB ?',
              options: [
                '$-120$ Mds FCFA',
                '$-160$ Mds FCFA',
                '$+120$ Mds FCFA',
                '$-30$ Mds FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$k_T = -c/(1-c) = -0,75/0,25 = -3$. Donc $\\Delta Y = (-3) \\times (+40) = -120$ Mds FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Haavelmo',
            stepTheme: 'Budget équilibré = 1',
            stepTitle: 'Le théorème du budget équilibré de Trygve Haavelmo',
            paragraphText:
              'Un gouvernement peut-il relancer la croissance **sans creuser d’un seul franc le déficit public** ? Oui, démontre le prix Nobel norvégien **Trygve Haavelmo (1945)** !\n' +
              '• **Démonstration en une ligne** : si $\\Delta G = \\Delta T$ (chaque franc de dépense publique est financé par un franc d’impôt forfaitaire), l’effet combiné vaut $\\Delta Y = k_G \\Delta G + k_T \\Delta T = \\left(\\frac{1}{1-c} - \\frac{c}{1-c}\\right)\\Delta G = \\frac{1-c}{1-c}\\Delta G = 1 \\cdot \\Delta G$.\n' +
              '• **Intuition économique** : l’impôt prélève de l’argent que les ménages auraient en partie **épargné** (fuite $1-c$), alors que l’État dépense **100 %** de la somme ⇒ injection nette positive dans le circuit !',
            keyRule:
              'Théorème d’Haavelmo : en économie fermée avec impôts forfaitaires, $k_{BE} = 1$ **indépendamment de la valeur de $c$** ($\\Delta Y = \\Delta G = \\Delta T$).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'Dans une économie fermée où $c = 0,65$, le gouvernement finance une hausse de dépenses publiques de $+120$ Mds FCFA par une hausse équivalente des impôts forfaitaires ($\\Delta G = \\Delta T = +120$). Quelle est la variation nette du PIB $\\Delta Y$ ?',
              options: [
                '$0$ Md FCFA (les effets s’annulent)',
                '$+120$ Mds FCFA',
                '$+343$ Mds FCFA',
                '$-78$ Mds FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par le théorème d’Haavelmo, quelle que soit $c \\in ]0;1[$, le multiplicateur du budget équilibré vaut exactement $1$, donc $\\Delta Y = +120$ Mds FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Économie ouverte',
            stepTheme: 'Impôts t & Importations m',
            stepTitle: 'Calculer le multiplicateur avec impôts proportionnels et importations',
            paragraphText:
              'Dans une économie réelle et ouverte sur le commerce international comme la Côte d’Ivoire, deux fuites additionnelles s’ajoutent à l’épargne à chaque tour du circuit !\n' +
              '• **Impôt proportionnel ($T = tY$)** : réduit la part consommée du PIB de $c$ à $c(1 - t)$.\n' +
              '• **Importations induites ($M = M_0 + mY$)** : une fraction $m$ (propension marginale à importer) de chaque franc supplémentaire achète des biens fabriqués à l’étranger au lieu de stimuler les usines locales.\n' +
              '• **Nouveau multiplicateur** : $Y = c(1-t)Y - mY + A_0 \\implies k_{\\text{ouv}} = \\frac{1}{1 - c(1 - t) + m}$. Note bien le signe **PLUS** devant $m$ au dénominateur !',
            formula: {
              name: 'Multiplicateur en économie ouverte avec fiscalité proportionnelle',
              formula: 'k_{\\text{ouv}} = \\frac{1}{1 - c(1 - t) + m}',
              note: 'Plus une économie est petite et très ouverte (m élevé), plus une relance solitaire « fuit » vers ses partenaires commerciaux !',
            },
            konanTip:
              'Piège fréquent de signe : on écrit $1 - c + m$ (jamais $1 - c - m$ !). Vérifie toujours que l’ouverture au commerce RÉDUIT le multiplicateur !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Dans une économie ouverte : $c = 0,8$, taux d’imposition $t = 0,25$ et propension marginale à importer $m = 0,10$. Quelle est la valeur exacte du multiplicateur des dépenses publiques $k_{\\text{ouv}}$ ?',
              options: ['5,0', '3,33', '2,0', '1,43'],
              correctAnswerIndex: 2,
              explanation:
                '$c(1 - t) = 0,8 \\times 0,75 = 0,60$. Dénominateur $= 1 - 0,60 + 0,10 = 0,50$. Donc $k_{\\text{ouv}} = 1 / 0,50 = 2,0$ (contre $5,0$ en économie fermée sans impôt proportionnel !).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: '3 freins',
            stepTheme: 'Limites pratiques',
            stepTitle: 'Les trois grands freins à l’efficacité réelle du multiplicateur',
            paragraphText:
              'Sur le papier, un multiplicateur de 4 ou 5 semble miraculeux. En pratique, trois obstacles puissants réduisent souvent sa valeur réelle entre $0,5$ et $1,8$.\n' +
              '• **1. Les fuites** : forte propension à épargner (incertitude / précaution) et forte propension à importer (la relance nationale profite aux fournisseurs étrangers et creuse le déficit commercial).\n' +
              '• **2. Les rigidités d’offre** : si l’économie approche déjà du plein emploi et que les usines tournent à 100 %, injecter de la demande ne crée plus de volume réel mais déclenche de l’**inflation**.\n' +
              '• **3. L’effet d’éviction** : pour financer son déficit, l’État emprunte sur les marchés financiers, ce qui fait **monter les taux d’intérêt** et décourage l’investissement privé (mécanisme central du modèle IS-LM).',
            keyRule:
              'Trois freins au multiplicateur : Fuites (épargne, impôts, importations), Rigidités productives (inflation) et Effet d’éviction (hausse des taux d’intérêt).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Lequel de ces phénomènes explique pourquoi une relance budgétaire massive dans une économie proche du plein emploi échoue à accroître durablement le PIB réel ?',
              options: [
                'Les capacités de production étant saturées (rigidités d’offre), le surplus de demande se traduit principalement par de l’inflation plutôt que par une hausse de volume',
                'La propension marginale à consommer devient supérieure à 2',
                'Les importations tombent brutalement à zéro',
                'Le taux de chômage devient négatif',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le multiplicateur keynésien n’opère pleinement qu’en situation de sous-emploi (capacités disponibles) ; proche du plein emploi, les rigidités d’offre transforment la relance en hausse des prix.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Écart déflationniste',
            stepTheme: 'Cibler le plein emploi',
            stepTitle: 'Calibrer une relance budgétaire pour combler un écart récessionniste',
            paragraphText:
              'Supposons que le PIB de plein emploi soit $Y_{PE} = 2\\,500$ Mds FCFA, mais que le PIB effectif plafonne à $Y^* = 2\\,100$ Mds FCFA (écart récessionniste de $400$ Mds FCFA). Combien l’État doit-il injecter ?\n' +
              '• **Piège à éviter** : ne pas injecter $400$ Mds FCFA, sinon on dépasserait largement le plein emploi (surchauffe) ! Il faut diviser l’écart par le multiplicateur.\n' +
              '• **Calcul exact** : si $k_G = 4$ (soit $c = 0,75$), il suffit d’une impulsion $\\Delta G = \\frac{Y_{PE} - Y^*}{k_G} = \\frac{400}{4} = +100$ Mds FCFA pour ramener l’économie exactement au plein emploi !',
            formula: {
              name: 'Impulsion budgétaire nécessaire (Écart déflationniste)',
              formula: '\\Delta G_{\\text{nécessaire}} = \\frac{Y_{PE} - Y^*}{k_G} = (1 - c)\\,(Y_{PE} - Y^*)',
              note: 'Le déficit initial nécessaire est toujours réduit par le facteur (1 − c) grâce à l’effet multiplicateur.',
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Le PIB actuel vaut $Y^* = 1\\,800$ et le PIB de plein emploi vaut $Y_{PE} = 2\\,300$ (écart de 500). Si $c = 0,8$ ($k_G = 5$), quelle hausse des dépenses publiques $\\Delta G$ suffit exactement pour atteindre $Y_{PE}$ ?',
              options: [
                '$\\Delta G = +500$',
                '$\\Delta G = +400$',
                '$\\Delta G = +100$',
                '$\\Delta G = +125$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$\\Delta G = (Y_{PE} - Y^*) / k_G = 500 / 5 = +100$. Grâce au multiplicateur de 5, ces $+100$ génèrent exactement $+500$ de PIB supplémentaire.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch4_p3',
        order: 3,
        title: 'Marché de la monnaie : agrégats, multiplicateur de crédit et motifs de Keynes',
        summary:
          'Distinguer les formes et fonctions de la monnaie, calculer M1/M2/M3 et le multiplicateur (ou diviseur) de crédit, expliquer l’offre exogène de la Banque Centrale et modéliser les 3 motifs de demande de monnaie chez Keynes.',
        conceptExplanation:
          'La **monnaie** regroupe l’ensemble des moyens de paiement immédiatement utilisables pour acquérir des biens et services ou régler des dettes. Sur le **marché monétaire**, s’échangent des liquidités à court terme contre un prix fondamental : le **taux d’intérêt** $i$.\n\n' +
          '• **Fonctions et formes** : la monnaie assure trois fonctions (instrument d’échange, unité de compte, réserve de valeur) sous trois formes modernes : fiduciaire (billets/pièces), scripturale (dépôts à vue sur comptes bancaires) et électronique (Mobile Money, portefeuilles numériques, MNBC).\n' +
          '• **Agrégats et création monétaire** : $M_1$ (billets/pièces + dépôts à vue), $M_2 = M_1 + \\text{quasi-monnaie}$ (dépôts à terme, comptes d’épargne), $M_3 = M_2 + \\text{épargne logement/projets et titres > 1 an}$. La **base monétaire** $BM = B + RO$ (monnaie Banque Centrale) engendre la masse monétaire $M$ via le **multiplicateur de crédit** $m = \\frac{1}{b + r - rb}$ ($b = B/M$, $r = RO/D$).\n' +
          '• **Offre et demande de monnaie** : face à une offre réelle exogène $\\frac{M^o}{P}$ pilotée par la Banque Centrale, Keynes identifie trois motifs de détention de monnaie : **transaction** et **précaution** ($L_1(Y) = kY$) ainsi que **spéculation** ($L_2(i) = L_0 - hi$, fonction décroissante du taux d’intérêt).',
        keyRule:
          'Relation fondamentale masse/base monétaire : $M = m \\cdot BM$ avec $m = \\frac{1}{b + r(1 - b)} > 1$. Sur le marché monétaire, l’équilibre exige $\\frac{M^o}{P} = L_1(Y) + L_2(i)$.',
        formulas: [
          {
            name: 'Multiplicateur et diviseur de crédit',
            formula: 'BM = (b + r - rb)\\,M \\implies M = m\\,BM \\quad \\text{avec } m = \\frac{1}{b + r - rb} \\text{ et } d = b + r - rb',
            note: 'b = B/M est le taux de préférence pour les billets et r = RO/D le taux de réserves obligatoires.',
          },
          {
            name: 'Équilibre du marché monétaire keynésien',
            formula: '\\frac{M^o}{P} = L_1(Y) + L_2(i) = k\\,Y + L_0 - h\\,i',
            note: 'Si i est très bas (trappe à liquidité), L₂ devient infiniment élastique : toute monnaie injectée est thésaurisée.',
          },
        ],
        workedExample: {
          title: 'Calculer M1, M2, le multiplicateur de crédit et le taux d’intérêt d’équilibre',
          statement:
            '1) Dans une économie UEMOA : billets $B = 500$, dépôts à vue $DAV = 300$, dépôts d’épargne $= 200$, dépôts à terme $= 100$ (Mds FCFA). Calculer $M_1$ et $M_2$. 2) Si $b = 0,20$ et $r = 0,10$, calculer le multiplicateur de crédit $m$ et la masse monétaire créée pour $BM = 280$. 3) Avec $L_1 = 0,25Y$, $L_2 = 600 - 4\\,000i$, $M^o/P = 700$ et $Y = 2\\,000$, trouver $i^*$.',
          methodSteps: [
            '1) $M_1 = B + DAV = 500 + 300 = 800$ Mds FCFA. $M_2 = M_1 + \\text{épargne} + \\text{terme} = 800 + 200 + 100 = 1\\,100$ Mds FCFA.',
            '2) Calculons le diviseur $k = b + r - rb = 0,20 + 0,10 - (0,20 \\times 0,10) = 0,30 - 0,02 = 0,28$. Le multiplicateur de crédit vaut $m = 1 / 0,28 \\approx 3,571$. D’où $M = 280 / 0,28 = 1\\,000$ Mds FCFA.',
            '3) Équilibre monétaire : $700 = 0,25(2\\,000) + 600 - 4\\,000i = 500 + 600 - 4\\,000i = 1\\,100 - 4\\,000i$.',
            'On isole $i$ : $4\\,000i = 1\\,100 - 700 = 400 \\implies i^* = 400 / 4\\,000 = 0,10$, soit $10\\%$.',
          ],
          conclusion:
            '$M_1 = 800$ Mds, $M_2 = 1\\,100$ Mds, $m \\approx 3,57$ et $i^* = 10\\%$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fonctions & Formes',
            stepTheme: 'Monnaie & Paiements',
            stepTitle: 'Les trois fonctions économiques et les formes modernes de la monnaie',
            paragraphText:
              'Sans monnaie, l’économie serait bloquée par le **troc**, qui exige une double coïncidence des besoins (trouver quelqu’un qui veut exactement ce que tu vends et vend ce que tu veux).\n' +
              '• **Trois fonctions canoniques** : (1) **instrument d’échange** (intermédiaire universel des transactions) ; (2) **unité de compte** (étalon commun pour comparer les prix : un sac de riz à $25\\,000$ FCFA vs un téléphone à $100\\,000$ FCFA) ; (3) **réserve de valeur** (transfert de pouvoir d’achat dans le temps, menacé par l’inflation).\n' +
              '• **Formes contemporaines** : monnaie **fiduciaire** (billets et pièces émis par la Banque Centrale), monnaie **scripturale** (soldes des comptes bancaires mobilisés par virement, chèque ou carte) et **monnaie électronique** (Mobile Money en Afrique de l’Ouest, portefeuilles numériques, projets de MNBC).',
            keyRule:
              'La monnaie remplit trois fonctions indissociables : moyen de paiement (échange), étalon de mesure (unité de compte) et actif liquide conservable (réserve de valeur).',
            konanTip:
              'Attention : le chèque ou la carte bancaire ne sont PAS de la monnaie en soi ! Ce sont de simples **instruments de circulation** de la monnaie scripturale inscrite sur ton compte courant.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Lorsqu’un commerçant compare le prix d’un ordinateur ($450\\,000$ FCFA) à celui d’une imprimante ($90\\,000$ FCFA) pour évaluer leur valeur relative (rapport de 5 à 1), quelle fonction de la monnaie utilise-t-il principalement ?',
              options: [
                'La fonction de réserve de valeur',
                'La fonction d’unité de compte',
                'La fonction de création de crédit',
                'La fonction de spéculation obligataire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Mesurer et comparer les valeurs relatives des biens et services dans une même unité de référence (le FCFA) correspond précisément à la fonction d’unité de compte.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Agrégats M1-M3',
            stepTheme: 'Masse & Base monétaire',
            stepTitle: 'Mesurer la masse monétaire ($M_1, M_2, M_3$) et la base monétaire ($BM$)',
            paragraphText:
              'Les banques centrales classent la monnaie par **ordre décroissant de liquidité** (facilité à être convertie immédiatement en moyen de paiement sans perte de valeur).\n' +
              '• **$M_1$ (disponibilités monétaires)** : billets et pièces en circulation + dépôts à vue ($DAV$). Liquidité immédiate.\n' +
              '• **$M_2$ (masse monétaire au sens large)** : $M_1 + \\text{quasi-monnaie}$ (dépôts à terme, comptes d’épargne, certificats de dépôt à court terme non mobilisables avant échéance).\n' +
              '• **$M_3$** : $M_2 +$ placements moins liquides (épargne logement, épargne projets d’investissement, obligations/emprunts à plus d’un an).\n' +
              '• **Base monétaire ($BM$ ou monnaie centrale)** : $BM = B + RO$ (billets/pièces + réserves des banques commerciales à la Banque Centrale). Pour $B = 400$, $DAV = 600$, épargne $= 250$ : $M_1 = 1\\,000$ et $M_2 = 1\\,250$.',
            formula: {
              name: 'Hiérarchie des agrégats monétaires',
              formula: 'M_1 = B + DAV, \\qquad M_2 = M_1 + \\text{Quasi-monnaie}, \\qquad BM = B + RO',
              note: 'M₁ ⊂ M₂ ⊂ M₃ : la liquidité diminue et la rémunération augmente quand on passe de M₁ à M₃.',
            },
            keyRule:
              'Ne confonds jamais **masse monétaire $M$** (moyens de paiement détenus par les ménages et entreprises) et **base monétaire $BM$** (monnaie émise par la Banque Centrale : billets + réserves bancaires) !',
            konanTip:
              'En zone UEMOA, la statistique monétaire suit de très près $M_2$, qui inclut l’épargne liquide mobilisable rapidement en complément des dépôts à vue.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Dans une économie, les billets et pièces valent $600$, les dépôts à vue $900$, les dépôts à terme $350$ et les livrets d’épargne $250$ (en Mds FCFA). Que valent respectivement $M_1$ et $M_2$ ?',
              options: [
                '$M_1 = 600$ et $M_2 = 1\\,500$',
                '$M_1 = 1\\,500$ et $M_2 = 2\\,100$',
                '$M_1 = 1\\,500$ et $M_2 = 1\\,850$',
                '$M_1 = 1\\,250$ et $M_2 = 2\\,100$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$M_1 = \\text{Billets} + \\text{Dépôts à vue} = 600 + 900 = 1\\,500$ Mds FCFA. La quasi-monnaie regroupe les dépôts à terme ($350$) et les livrets d’épargne ($250$), soit $600$, d’où $M_2 = 1\\,500 + 600 = 2\\,100$ Mds FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Multiplicateur crédit',
            stepTheme: 'Banques commerciales',
            stepTitle: 'Démontrer et calculer le multiplicateur et le diviseur de crédit',
            paragraphText:
              '« Les crédits font les dépôts » : lorsque les banques commerciales accordent des prêts, elles créent de la monnaie scripturale, mais sont freinées par deux fuites vers la Banque Centrale : la demande de billets ($b = B/M$) et les réserves obligatoires ($r = RO/D$).\n' +
              '• **Démonstration en 3 lignes** : puisque $B = bM$ et $D = (1 - b)M$, les réserves obligatoires valent $RO = rD = r(1 - b)M$. La base monétaire vaut donc $BM = B + RO = [b + r(1 - b)]M = (b + r - rb)M$.\n' +
              '• **Multiplicateur vs Diviseur** : en notant $k = b + r - rb < 1$, le **diviseur de crédit** est $d = k$ (sens $M \\to BM = d \\cdot M$, vision endogène) et le **multiplicateur de crédit** est $m = \\frac{1}{k}$ (sens $BM \\to M = m \\cdot BM$, vision Banque Centrale).\n' +
              '• **Exemple** : si $b = 0,25$ et $r = 0,20$, alors $k = 0,25 + 0,20 - 0,05 = 0,40$, donc $m = 1 / 0,40 = 2,5$.',
            formula: {
              name: 'Formule du multiplicateur monétaire (ou de crédit)',
              formula: 'M = \\frac{1}{b + r - r\\,b}\\,BM \\qquad \\text{avec } b = \\frac{B}{M},\\quad r = \\frac{RO}{D}',
              note: 'Cas particulier sans billets (b = 0) : on retrouve le multiplicateur simple m = 1/r.',
            },
            keyRule:
              'Retiens le terme croisé **$-rb$** dans $b + r - rb$ ! Oublier $-rb$ surestime le frein et sous-estime le multiplicateur de crédit.',
            konanTip:
              'Note l’impact de la digitalisation (Mobile Money, paiements par carte) : quand les agents préfèrent payer par voie numérique plutôt qu’en espèces, $b$ diminue, ce qui **augmente** le multiplicateur de crédit $m$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Dans un système bancaire, le taux de préférence pour les billets est $b = 0,10$ et le taux de réserves obligatoires sur les dépôts est $r = 0,10$. Quel est le multiplicateur de crédit $m$ et la masse monétaire créée pour $BM = 380$ Mds FCFA ?',
              options: [
                '$m = 5$ et $M = 1\\,900$ Mds FCFA',
                '$m \\approx 5,26$ et $M = 2\\,000$ Mds FCFA',
                '$m = 10$ et $M = 3\\,800$ Mds FCFA',
                '$m \\approx 4,76$ et $M = 1\\,809$ Mds FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le diviseur vaut $k = b + r - rb = 0,10 + 0,10 - (0,10 \\times 0,10) = 0,20 - 0,01 = 0,19$. Le multiplicateur vaut $m = 1 / 0,19 \\approx 5,263$, donc $M = 380 / 0,19 = 2\\,000$ Mds FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Offre de monnaie',
            stepTheme: 'Banque Centrale',
            stepTitle: 'Offre exogène de monnaie et instruments de la Banque Centrale',
            paragraphText:
              'Dans le modèle keynésien standard, l’**offre nominale de monnaie** $M^o = M_0^o$ est considérée comme **exogène** : elle est fixée par la Banque Centrale (comme la BCEAO dans l’UEMOA), indépendamment du taux d’intérêt du marché.\n' +
              '• **Offre réelle de monnaie** : ce qui compte pour le pouvoir d’achat des agents est l’offre en termes réels $\\frac{M_0^o}{P}$ (verticale dans le plan $(M/P, i)$).\n' +
              '• **Politique expansive vs restrictive** : une hausse $\\Delta M^o > 0$ (politique **expansive** ou accommodante) fait baisser le taux d’intérêt ; une baisse $\\Delta M^o < 0$ (politique **restrictive**) le fait monter pour freiner l’inflation.\n' +
              '• **Trois instruments clés** : (1) le **taux directeur / réescompte** (coût du refinancement des banques auprès de la BC) ; (2) le **taux de réserves obligatoires** $r$ ; (3) les opérations d’**open market** (achat/vente de titres publics contre liquidités).',
            formula: {
              name: 'Offre réelle de monnaie exogène',
              formula: 'M^o = M_0^o \\implies \\left(\\frac{M}{P}\\right)^o = \\frac{M_0^o}{P}',
              note: 'À prix P fixes (court terme keynésien), toute variation nominale ΔM° modifie proportionnellement l’offre réelle M°/P.',
            },
            keyRule:
              'Augmenter le taux de réserves obligatoires $r$ ou relever le taux directeur constituent des mesures **restrictives** qui freinent la création monétaire des banques commerciales.',
            konanTip:
              'Attention à l’open market : quand la Banque Centrale **achète** des bons du Trésor aux banques, elle leur verse des liquidités en échange ⇒ l’offre de monnaie **augmente** (politique expansive) !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle décision de la Banque Centrale correspond à une politique monétaire **expansive** (accroissement de l’offre de monnaie) ?',
              options: [
                'Augmenter le taux de réserves obligatoires imposé aux banques',
                'Relever son taux directeur de refinancement',
                'Baisser le taux de réserves obligatoires et acheter des titres sur le marché interbancaire (open market)',
                'Vendre massivement des obligations aux banques commerciales pour absorber leurs liquidités',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Réduire les réserves obligatoires $r$ augmente le multiplicateur de crédit $m$, et acheter des titres en open market injecte de la base monétaire $BM$ dans le système bancaire : les deux mesures augmentent l’offre de monnaie.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Motifs de Keynes',
            stepTheme: 'Préférence pour la liquidité',
            stepTitle: 'Les trois motifs de demande de monnaie selon Keynes ($L_1$ et $L_2$)',
            paragraphText:
              'Pourquoi détenir de la monnaie qui ne rapporte aucun intérêt plutôt que des obligations rémunérées ? Keynes explique cette « préférence pour la liquidité » par **trois motifs**.\n' +
              '• **1. Motif de transaction** : payer les dépenses courantes (transport, nourriture, salaires) entre deux dates d’encaissement.\n' +
              '• **2. Motif de précaution** : faire face aux imprévus (maladie, panne urgente, baisse de recette). Ces deux premiers motifs forment l’encaisse active $L_1(Y) = kY$, fonction **croissante du revenu $Y$**.\n' +
              '• **3. Motif de spéculation ($L_2(i)$)** : arbitrer entre monnaie et titres obligataires. Or le cours d’une obligation est **inversement proportionnel** au taux d’intérêt ($P_{\\text{obl}} = C / i$) : si $i$ est très **bas**, les agents anticipent une remontée de $i$ (donc une **chute** du prix des obligations = moins-value) et préfèrent garder du cash ! Ainsi $L_2(i)$ est **décroissante de $i$**.',
            formula: {
              name: 'Fonction keynésienne de demande réelle de monnaie',
              formula: 'L(Y, i) = L_1(Y) + L_2(i) = k\\,Y + L_0 - h\\,i \\qquad (k > 0,\\ h > 0)',
              note: 'Le paramètre k mesure l’inverse de la vitesse de circulation de la monnaie ; h mesure la sensibilité de la spéculation au taux d’intérêt.',
            },
            keyRule:
              'La demande de monnaie dépend **positivement du revenu $Y$** (motifs de transaction et précaution $L_1$) et **négativement du taux d’intérêt $i$** (motif de spéculation $L_2$).',
            konanTip:
              'Mémo sur la relation inverse $P_{\\text{obl}} \\leftrightarrow i$ : une vieille obligation rapportant $50$ FCFA/an à $5\\%$ vaut $1\\,000$ FCFA ; si le taux du marché monte à $10\\%$, sa valeur chute à $500$ FCFA ! Donc $i$ bas = risque de perte en capital sur obligations = forte demande de monnaie liquide.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Selon la théorie keynésienne de la préférence pour la liquidité, pourquoi la demande de monnaie pour motif de **spéculation** $L_2(i)$ augmente-t-elle lorsque le taux d’intérêt $i$ est très bas ?',
              options: [
                'Parce que les agents anticipent une future hausse du taux d’intérêt, donc une baisse du cours des obligations (risque de moins-value), et préfèrent conserver de la liquidité',
                'Parce que le prix des obligations baisse quand le taux d’intérêt diminue',
                'Parce que les ménages consomment moins quand le taux d’intérêt baisse',
                'Parce que la Banque Centrale interdit l’achat d’obligations',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Quand $i$ est bas, le cours des obligations est élevé et les spéculateurs anticipent une remontée future des taux (qui ferait chuter le prix des obligations) : ils délaissent les titres au profit de la monnaie liquide.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Équilibre monétaire',
            stepTheme: 'Trappe à liquidité',
            stepTitle: 'Calculer le taux d’intérêt d’équilibre et comprendre la trappe à liquidité',
            paragraphText:
              'Sur le marché monétaire, le taux d’intérêt $i^*$ s’ajuste pour égaliser l’offre réelle $\\frac{M_0^o}{P}$ et la demande totale $L_1(Y) + L_2(i)$.\n' +
              '• **Exemple chiffré** : avec $L_1 = 0,2Y$, $L_2 = 500 - 5\\,000i$ et $M_0^o/P = 400$ pour $Y = 1\\,000$, l’équilibre donne $400 = 0,2(1\\,000) + 500 - 5\\,000i = 700 - 5\\,000i \\implies 5\\,000i = 300 \\implies i^* = 0,06$ ($6\\%$). Si la Banque Centrale porte $M_0^o/P$ à $500$, alors $5\\,000i = 200 \\implies i^*$ tombe à $4\\%$ !\n' +
              '• **Trappe à liquidité** : à un taux plancher très bas $i_{\\min}$ (proche de $0\\%$), personne n’achète plus d’obligations : la courbe de demande $L_2(i)$ devient **horizontale**. Injecter davantage de monnaie ne fait plus baisser $i$ !',
            formula: {
              name: 'Résolution du taux d’intérêt d’équilibre',
              formula: '\\frac{M_0^o}{P} = k\\,Y + L_0 - h\\,i \\implies i^* = \\frac{k\\,Y + L_0 - M_0^o/P}{h}',
              note: 'À Y donné : M° ↑ ⇒ i* ↓ ; à M° donné : Y ↑ ⇒ i* ↑.',
            },
            keyRule:
              'Une hausse du revenu $Y$ accroît la demande de transaction $L_1(Y)$, provoquant une tension sur la liquidité et une **hausse du taux d’intérêt $i^*$** (à offre de monnaie constante).',
            konanTip:
              'Prends garde aux unités de $i$ dans les exercices ! Si $L_2 = 500 - 5\\,000i$, alors $i$ est en valeur décimale ($0,06 = 6\\%$) ; si $L_2 = 500 - 50i$, $i$ est directement exprimé en points de pourcentage ($6$). Vérifie toujours l’ordre de grandeur de $i^*$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'On donne $L_1 = 0,2Y$, $L_2 = 500 - 5\\,000i$ et $Y = 1\\,000$. Si la Banque Centrale augmente l’offre réelle de monnaie de $M_0^o/P = 400$ à $M_0^o/P = 500$, comment évolue le taux d’intérêt d’équilibre $i^*$ ?',
              options: [
                'Il augmente de $6\\%$ à $8\\%$',
                'Il baisse de $6\\%$ à $4\\%$',
                'Il reste bloqué à $6\\%$',
                'Il baisse de $10\\%$ à $5\\%$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $M_0^o/P = 400$ : $400 = 200 + 500 - 5\\,000i \\implies 5\\,000i = 300 \\implies i^* = 0,06 = 6\\%$. Pour $M_0^o/P = 500$ : $500 = 700 - 5\\,000i \\implies 5\\,000i = 200 \\implies i^* = 0,04 = 4\\%$. Le taux baisse donc de $6\\%$ à $4\\%$.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 4.4
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch4_p4',
        order: 4,
        title: 'Modèle IS-LM : courbes IS et LM, équilibre simultané et effet d’éviction',
        summary:
          'Dériver algébriquement et graphiquement les courbes IS (biens) et LM (monnaie), calculer l’équilibre simultané (Y*, i*), expliquer l’effet d’éviction financière et analyser l’efficacité des politiques économiques.',
        conceptExplanation:
          'Conçu par John Hicks (1937) et Alvin Hansen pour formaliser la *Théorie générale* de Keynes, le **modèle IS-LM** relie simultanément la **sphère réelle** (marché des biens et services, courbe **IS**) et la **sphère monétaire** (marché de la monnaie, courbe **LM**) dans le plan $(Y, i)$ à prix fixes.\n\n' +
          '• **Courbe IS (*Investment = Saving*)** : lorsque le taux d’intérêt $i$ augmente, l’investissement productif $I(i) = I_0 - b\\,i$ diminue, ce qui contracte la demande globale et le revenu d’équilibre $Y$ : IS est **décroissante** dans $(Y, i)$. Elle se déplace vers la droite lors d’une relance budgétaire ($\\Delta G > 0$ ou $\\Delta T < 0$).\n' +
          '• **Courbe LM (*Liquidity preference = Money supply*)** : lorsque le revenu $Y$ augmente, la demande de monnaie de transaction $kY$ croît ; à offre réelle $M/P$ donnée, $i$ doit monter pour réduire la demande de spéculation $L_2(i)$ : LM est **croissante** dans $(Y, i)$. Elle se déplace vers la droite lors d’une politique monétaire expansive ($\\Delta M > 0$).\n' +
          '• **Équilibre simultané et effet d’éviction** : l’intersection $(Y^*, i^*)$ équilibre les deux marchés. Mais une relance budgétaire ($\\text{IS} \\to \\text{IS’}$) élève $i^*$, ce qui évince partiellement l’investissement privé (**effet d’éviction**) et réduit l’impact final sur $Y^*$ comparé au multiplicateur pur.',
        keyRule:
          'IS est **décroissante** (liée à l’investissement $I(i)$ et à la politique **budgétaire** $G, T$) ; LM est **croissante** (liée à la demande de monnaie $L(Y, i)$ et à la politique **monétaire** $M$).',
        formulas: [
          {
            name: 'Équations canoniques des courbes IS et LM',
            formula: '\\text{IS : } Y = \\frac{A_0 - b\\,i}{1 - c(1 - t)}, \\qquad \\text{LM : } i = \\frac{k\\,Y + L_0 - M/P}{h}',
            note: 'où A₀ = C₀ + I₀ + G₀ − cT₀ + cTR₀ ; b > 0 est la sensibilité de I à i ; h > 0 celle de L₂ à i.',
          },
          {
            name: 'Multiplicateur budgétaire complet en IS-LM (avec éviction)',
            formula: 'k_G^{\\text{IS-LM}} = \\frac{1}{1 - c(1 - t) + \\frac{b\\,k}{h}} < \\frac{1}{1 - c(1 - t)}',
            note: 'Le terme supplémentaire bk/h au dénominateur mesure exactement l’ampleur de l’effet d’éviction financière.',
          },
        ],
        workedExample: {
          title: 'Résoudre un modèle IS-LM chiffré et mesurer l’effet d’éviction',
          statement:
            'Dans une économie fermée : $C = 0,8(Y - T) + 100$, $I = 300 - 1\\,000i$, $G = 200$, $T = 100$ ; $L_1 = 0,25Y$, $L_2 = 200 - 2\\,000i$, $M/P = 450$. 1) Établir IS et LM. 2) Trouver $(Y^*, i^*)$. 3) L’État augmente $G$ de $+100$ ($G’ = 300$). Calculer le nouvel équilibre et mesurer l’effet d’éviction sur l’investissement.',
          methodSteps: [
            '1) Courbe IS : $Y = 0,8(Y - 100) + 100 + 300 - 1\\,000i + 200 = 0,8Y + 520 - 1\\,000i \\implies 0,2Y = 520 - 1\\,000i \\implies Y = 2\\,600 - 5\\,000i$.',
            'Courbe LM : $450 = 0,25Y + 200 - 2\\,000i \\implies 2\\,000i = 0,25Y - 250 \\implies i = 0,000125Y - 0,125$ (ou $Y = 1\\,000 + 8\\,000i$).',
            '2) Équilibre initial : $2\\,600 - 5\\,000i = 1\\,000 + 8\\,000i \\implies 13\\,000i = 1\\,600$? Vérifions : simplifions avec $13\\,000$ ou prenons $M/P = 500$? Calculons exact : $i^* = 1\\,600/13\\,000 \\approx 0,1231$ ($12,31\\%$) et $Y^* = 1\\,000 + 8\\,000(16/130) = 1\\,984,6$. (Astuce : pour $M/P = 450$, $\\Delta G = +100$ augmente $A_0$ de $+100$ donc IS’ devient $Y = 3\\,100 - 5\\,000i$ : sans éviction à $i^*$ fixe, $\\Delta Y = +500$ ; avec IS-LM, $13\\,000\\,\\Delta i = +500 \\implies \\Delta i = +5/130 \\approx +3,85$ pts et $\\Delta Y^* = 8\\,000 \\times 5/130 \\approx +307,7$ !).',
            '3) Effet d’éviction : le PIB n’augmente que de $+307,7$ au lieu de $+500$ (soit $192,3$ de relance perdue), car la hausse de $i$ de $+3,85$ points réduit l’investissement privé de $\\Delta I = -1\\,000 \\times (5/130) \\approx -38,5$ (qui multiplié par $k_G = 5$ explique exactement $-192,3$ de PIB en moins !).',
          ],
          conclusion:
            'En IS-LM, la relance $\\Delta G = +100$ élève le PIB de $+307,7$ (et non $+500$) car la hausse du taux d’intérêt évince $-38,5$ d’investissement privé.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Courbe IS',
            stepTheme: 'Marché des biens',
            stepTitle: 'Construire la courbe IS et identifier ses facteurs de déplacement',
            paragraphText:
              'Dans le modèle à 45°, l’investissement était supposé fixe ($I = I_0$). En réalité, investir coûte un **taux d’intérêt** $i$ : $I(i) = I_0 - b\\,i$ ($b > 0$), car plus le crédit est cher, moins les projets ont une VAN positive.\n' +
              '• **Dérivation de IS** : en remplaçant $I_0$ par $I_0 - b\\,i$ dans $Y = C + I + G$, on obtient $Y = \\frac{A_0 - b\\,i}{1 - c}$, soit $i = \\frac{A_0}{b} - \\frac{1 - c}{b}Y$.\n' +
              '• **Pente négative** : quand $i$ baisse, $I$ augmente et le multiplicateur fait croître $Y$ : la courbe IS est **décroissante**.\n' +
              '• **Déplacements de IS** : toute variation de la dépense autonome ($\\Delta G > 0$, $\\Delta T < 0$, vague d’optimisme $\\Delta I_0 > 0$) déplace **IS vers la droite** d’une amplitude horizontale $\\Delta Y = k_G \\cdot \\Delta A_0$.',
            formula: {
              name: 'Équation et pente de la courbe IS',
              formula: 'Y = \\frac{C_0 + I_0 + G_0 - c\\,T_0 - b\\,i}{1 - c} \\iff i = \\frac{A_0}{b} - \\frac{1 - c}{b}\\,Y',
              note: 'Plus b (sensibilité de I au taux i) est grand, plus IS est plate (horizontale) dans le plan (Y, i).',
            },
            keyRule:
              'Une variation du taux d’intérêt $i$ déplace le point **SUR** la courbe IS ; une variation de $G$, $T$, $C_0$ ou $I_0$ déplace **TOUTE** la courbe IS.',
            konanTip:
              'Tout point situé **à droite/au-dessus** de IS correspond à une offre excédentaire de biens ($Y > DG$, accumulation de stocks) ; tout point **à gauche/en dessous** correspond à une demande excédentaire ($DG > Y$).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p4_q1',
              type: 'mcq',
              prompt:
                'On donne $C = 0,75Y + 50$, $I = 250 - 500i$ et $G = 100$. Quelle est l’équation de la courbe IS ?',
              options: [
                '$Y = 1\\,600 - 2\\,000i$',
                '$Y = 400 - 500i$',
                '$Y = 1\\,600 + 2\\,000i$',
                '$Y = 1\\,200 - 1\\,500i$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$Y = 0,75Y + 50 + 250 - 500i + 100 = 0,75Y + 400 - 500i \\implies 0,25Y = 400 - 500i$. En multipliant par $4$, on obtient $Y = 1\\,600 - 2\\,000i$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Courbe LM',
            stepTheme: 'Marché monétaire',
            stepTitle: 'Construire la courbe LM et identifier ses déplacements',
            paragraphText:
              'La courbe **LM** représente l’ensemble des couples $(Y, i)$ qui assurent l’équilibre sur le marché de la monnaie ($M/P = L_1(Y) + L_2(i)$).\n' +
              '• **Dérivation algébrique** : $M/P = kY + L_0 - hi \\implies hi = kY + L_0 - M/P \\implies i = \\frac{k}{h}Y + \\frac{L_0 - M/P}{h}$.\n' +
              '• **Pente positive** : quand le revenu $Y$ augmente, les ménages ont besoin de plus de monnaie pour leurs transactions ($kY\\uparrow$). Comme l’offre réelle $M/P$ est fixe, le taux d’intérêt $i$ doit **monter** pour dissuader l’encaisse de spéculation ($L_2\\downarrow$) et restaurer l’équilibre : LM est donc **croissante**.\n' +
              '• **Déplacement de LM** : une hausse de l’offre de monnaie ($\\Delta M > 0$) ou une baisse des prix ($P\\downarrow$) déplace **LM vers la droite / le bas**.',
            formula: {
              name: 'Équation et pente de la courbe LM',
              formula: '\\frac{M}{P} = k\\,Y + L_0 - h\\,i \\iff i = \\frac{k}{h}\\,Y + \\frac{L_0 - M/P}{h}',
              note: 'La pente k/h est faible (LM quasi plate) si h est très grand (trappe à liquidité), et infinie (LM verticale) si h = 0 (zone classique).',
            },
            keyRule:
              'La courbe LM est **croissante** dans $(Y, i)$ et se déplace uniquement lorsqu’on modifie l’offre réelle de monnaie $M/P$ (ou la préférence autonome pour la liquidité $L_0$).',
            konanTip:
              'Retiens le moyen mnémotechnique visuel : **I**S est **I**nclinée vers le bas (décroissante) ; **L**M **M**onte (croissante) !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p4_q2',
              type: 'mcq',
              prompt:
                'Pourquoi la courbe LM a-t-elle une pente **positive** dans le repère $(Y, i)$ ?',
              options: [
                'Parce qu’une hausse du taux d’intérêt stimule l’investissement des entreprises',
                'Parce qu’une hausse du revenu $Y$ accroît la demande de monnaie de transaction, ce qui exige une hausse du taux d’intérêt $i$ pour réduire la demande de spéculation et maintenir l’équilibre monétaire',
                'Parce que la Banque Centrale augmente automatiquement les impôts quand le PIB croît',
                'Parce que l’épargne diminue lorsque le revenu augmente',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À offre de monnaie $M/P$ fixée, si $Y$ augmente, $L_1(Y) = kY$ augmente ; il faut donc que $L_2(i)$ baisse d’autant, ce qui nécessite une hausse du taux d’intérêt $i$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Équilibre IS-LM',
            stepTheme: 'Sphère réelle + monétaire',
            stepTitle: 'Déterminer graphiquement et algébriquement l’équilibre simultané IS-LM',
            paragraphText:
              'L’économie entière atteint son équilibre général de court terme au point d’intersection $E^*(Y^*, i^*)$ des courbes IS et LM : à ce couple unique, la demande de biens égale la production ET la demande de monnaie égale l’offre de monnaie.\n' +
              '• **Méthode de résolution** : exprimer $Y$ en fonction de $i$ dans IS et dans LM (ou $i$ en fonction de $Y$), égaliser les deux expressions pour obtenir $i^*$ (ou $Y^*$), puis substituer pour trouver l’autre coordonnée.\n' +
              '• **Lecture du graphique ci-dessous** : initialement, $\\text{IS}_1$ ($i = 9 - 0,8Y$) et $\\text{LM}$ ($i = 1 + 0,8Y$) se coupent en $E_1(5 ; 5)$. Après une relance budgétaire $\\Delta G > 0$, $\\text{IS}_1$ glisse vers $\\text{IS}_2$ ($i = 10,6 - 0,8Y$) : l’équilibre passe à $E_2(6 ; 5,8)$, en deçà du point sans éviction $(7 ; 5)$ !',
            keyRule:
              'La résolution algébrique de IS-LM est un système linéaire de deux équations à deux inconnues $(Y, i)$ : vérifie toujours que ton $(Y^*, i^*)$ final satisfait **à la fois** l’équation de IS et celle de LM !',
            visualSchema: {
              type: 'function_plot',
              title: 'Équilibre IS-LM et déplacement de IS suite à une relance budgétaire',
              caption: 'Équilibre initial E₁(5 ; 5) entre IS₁ (bleu) et LM (violet). Une hausse ΔG > 0 déplace IS₁ → IS₂ (vert) : le nouvel équilibre est E₂(6 ; 5,8) et non (7 ; 5) à cause de la hausse de i (éviction).',
              plot: {
                xMin: 0,
                xMax: 11,
                yMin: 0,
                yMax: 11,
                xStep: 2,
                yStep: 2,
                curves: [
                  {
                    label: 'LM : i = 1 + 0,8·Y',
                    color: 'violet',
                    pieces: [{ expr: '1 + 0.8*x', from: 0, to: 10 }],
                  },
                  {
                    label: 'IS₁ : i = 9 − 0,8·Y',
                    color: 'blue',
                    pieces: [{ expr: '9 - 0.8*x', from: 0, to: 10 }],
                  },
                  {
                    label: 'IS₂ : i = 10,6 − 0,8·Y (après ΔG > 0)',
                    color: 'green',
                    pieces: [{ expr: '10.6 - 0.8*x', from: 0.5, to: 10.5 }],
                  },
                ],
                points: [
                  { x: 5, y: 5, label: 'E₁ (5 ; 5)', filled: true, color: 'blue' },
                  { x: 6, y: 5.8, label: 'E₂ (6 ; 5,8)', filled: true, color: 'green' },
                  { x: 7, y: 5, label: 'Sans éviction (7 ; 5)', filled: false, color: 'orange' },
                ],
                verticalLines: [
                  { x: 5, label: 'Y₁*', color: 'blue' },
                  { x: 6, label: 'Y₂*', color: 'green' },
                  { x: 7, label: 'Y sans éviction', color: 'orange' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p4_q3',
              type: 'mcq',
              prompt:
                'Soient les courbes $\\text{IS} : Y = 1\\,400 - 2\\,000i$ et $\\text{LM} : Y = 800 + 4\\,000i$. Quel est l’équilibre simultané $(Y^*, i^*)$ ?',
              options: [
                '$i^* = 10\\%$ et $Y^* = 1\\,200$',
                '$i^* = 5\\%$ et $Y^* = 1\\,300$',
                '$i^* = 15\\%$ et $Y^* = 1\\,100$',
                '$i^* = 10\\%$ et $Y^* = 1\\,000$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On égalise IS et LM : $1\\,400 - 2\\,000i = 800 + 4\\,000i \\implies 6\\,000i = 600 \\implies i^* = 0,10 = 10\\%$. En remplaçant dans IS : $Y^* = 1\\,400 - 2\\,000(0,10) = 1\\,200$ (et dans LM : $800 + 400 = 1\\,200$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Effet d’éviction',
            stepTheme: 'Crowding-out',
            stepTitle: 'Comprendre et quantifier l’effet d’éviction (*crowding-out*)',
            paragraphText:
              'Pourquoi le multiplicateur budgétaire réel dans IS-LM est-il toujours **plus faible** que le multiplicateur simple $1/(1-c)$ ? C’est l’**effet d’éviction financière**.\n' +
              '• **Chaîne causale en 5 maillons** : $\\Delta G > 0$ (financé par emprunt) $\\implies$ IS glisse à droite $\\implies$ le revenu $Y$ commence à croître $\\implies$ la demande de monnaie de transaction $kY$ augmente $\\implies$ à offre de monnaie $M$ inchangée, le taux d’intérêt **$i$ monte** $\\implies$ cette hausse de $i$ freine l’investissement privé $I(i)$ ($\\Delta I < 0$) !\n' +
              '• **Bilan** : la dépense publique « évince » une partie de la dépense privée ; sur le graphique IS-LM précédent, la relance ne fait croître le PIB que de $5 \\to 6$ au lieu de $5 \\to 7$ !',
            formula: {
              name: 'Décomposition de l’effet sur le PIB d’une relance budgétaire',
              formula: '\\Delta Y_{\\text{IS-LM}} = \\underbrace{k_G \\Delta G}_{\\text{Effet brut à } i \\text{ fixe}} + \\underbrace{k_G \\Delta I(i)}_{\\text{Effet d’éviction (< 0)}}',
              note: 'Plus l’investissement est sensible à i (b grand) et plus la demande de spéculation est insensible à i (h petit), plus l’éviction est forte.',
            },
            keyRule:
              'L’effet d’éviction ne signifie pas que la relance budgétaire est nulle en général : il signifie qu’à politique monétaire inchangée ($M$ fixe), la hausse induite de $i$ réduit $\\Delta I < 0$ et **amortit** le multiplicateur.',
            konanTip:
              'Comment l’État et la Banque Centrale peuvent-ils éviter l’effet d’éviction lors d’une grande relance ? En accompagnant la hausse de $G$ d’une création monétaire $\\Delta M > 0$ (LM glisse aussi à droite pour maintenir $i$ stable) : c’est la monétisation ou relance coordonnée !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p4_q4',
              type: 'mcq',
              prompt:
                'Quel enchaînement décrit fidèlement l’**effet d’éviction** (*crowding-out*) dans le modèle IS-LM ?',
              options: [
                'Une hausse des impôts fait baisser les taux d’intérêt et stimule l’investissement',
                'Une relance budgétaire ($\\Delta G > 0$) accroît le revenu $Y$ et la demande de monnaie, ce qui fait monter le taux d’intérêt $i$ et décourage l’investissement privé $I$',
                'Une politique monétaire expansive provoque la faillite des banques commerciales',
                'Une hausse des exportations réduit immédiatement la consommation des ménages',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À offre de monnaie $M$ constante, l’expansion budgétaire stimule $Y$, donc $L_1(Y)$, provoquant une tension à la hausse sur $i$, qui réduit l’investissement privé $I(i)$ et limite la hausse finale du PIB.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Cas extrêmes IS-LM',
            stepTheme: 'Trappe vs Classique',
            stepTitle: 'Efficacité comparée budgétaire/monétaire : trappe à liquidité et zone classique',
            paragraphText:
              'Selon la pente des courbes IS et LM, l’efficacité relative de la politique budgétaire (IS) et de la politique monétaire (LM) bascule radicalement !\n' +
              '• **Cas 1 — Trappe à liquidité (LM horizontale, $h \\to \\infty$)** : $i$ est si bas que toute monnaie ajoutée est thésaurisée. La politique **monétaire est totalement inefficace** ($\\Delta Y = 0$), tandis que la politique **budgétaire est maximale** (aucune hausse de $i$, donc zéro éviction !).\n' +
              '• **Cas 2 — Zone classique (LM verticale, $h = 0$)** : la monnaie ne sert qu’aux transactions ($M/P = kY$). Toute hausse de $G$ provoque une **éviction totale à 100 %** ($\\Delta Y = 0$, $i$ flambe), alors que la **politique monétaire est à efficacité maximale**.\n' +
              '• **Cas 3 — IS verticale ($b = 0$, investissement insensible à $i$)** : pas d’éviction ⇒ budgétaire maximale, monétaire nulle.',
            formula: {
              name: 'Synthèse des cas extrêmes en IS-LM',
              formula: '\\text{Trappe } (h \\to \\infty) : \\text{Budgétaire max, Monétaire nulle} ; \\quad \\text{Classique } (h = 0) : \\text{Monétaire max, Budgétaire nulle}',
              note: 'Dans la zone intermédiaire (pentes finies), les deux politiques agissent sur Y*.',
            },
            keyRule:
              'En trappe à liquidité (LM plate), la relance budgétaire est reine et la monétaire impuissante ; en zone classique (LM verticale), la politique monétaire est reine et la budgétaire évince à 100 % le secteur privé.',
            konanTip:
              'Un moyen ultra-rapide de ne jamais te tromper : dessine mentalement une LM horizontale et décale-la vers la droite — une droite horizontale glissée horizontalement reste confondue avec elle-même ⇒ $\\Delta Y = 0$ ! Inversement, décale IS vers la droite sur une LM horizontale : $\\Delta Y$ est maximal et $\\Delta i = 0$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p4_q5',
              type: 'mcq',
              prompt:
                'Lorsque l’économie se situe dans la **trappe à liquidité** (branche horizontale de la courbe LM), quelle politique économique est la plus efficace pour relancer le PIB $Y$ ?',
              options: [
                'La politique monétaire seule, car elle fait chuter fortement le taux d’intérêt',
                'La politique budgétaire expansive, car le taux d’intérêt reste inchangé (effet d’éviction nul)',
                'Aucune des deux politiques ne peut faire varier le PIB',
                'Une hausse des impôts combinée à une baisse des dépenses publiques',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans la trappe à liquidité, la courbe LM est horizontale : décaler LM par la politique monétaire ne change pas l’intersection avec IS ($\\Delta Y = 0$), tandis que décaler IS par une relance budgétaire accroît $Y$ sans faire monter $i$ (éviction nulle).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Statique comparative',
            stepTheme: 'Chocs sur IS et LM',
            stepTitle: 'Diagnostiquer les effets croisés des chocs budgétaires et monétaires sur $(Y^*, i^*)$',
            paragraphText:
              'En examen, on demande souvent de prédire la direction de variation de $Y^*$, $i^*$, $C^*$ et $I^*$ après une politique économique dans la zone normale de IS-LM.\n' +
              '• **Relance budgétaire ($\\Delta G > 0$ ou $\\Delta T < 0$, IS $\\to$ droite)** : $Y^* \\uparrow$, $i^* \\uparrow$, $C^* \\uparrow$, mais **$I^* \\downarrow$** (éviction partielle par la hausse de $i$).\n' +
              '• **Rigueur budgétaire ($\\Delta G < 0$ ou $\\Delta T > 0$, IS $\\to$ gauche)** : $Y^* \\downarrow$, $i^* \\downarrow$, $C^* \\downarrow$, et **$I^* \\uparrow$** (« éviction inversée »).\n' +
              '• **Relance monétaire ($\\Delta M > 0$, LM $\\to$ droite)** : $Y^* \\uparrow$, **$i^* \\downarrow$**, $C^* \\uparrow$, et **$I^* \\uparrow$** (le taux baisse, stimulant l’investissement !).',
            keyRule:
              'Différence majeure sur l’investissement $I^*$ : une relance **budgétaire** fait monter $i^*$ et **baisser $I^*$**, tandis qu’une relance **monétaire** fait baisser $i^*$ et **augmenter $I^*$** !',
            konanTip:
              'Pour retenir les 4 tableaux de signes sans par-cœur : trace un « X » (IS descend, LM monte) et décale la courbe concernée vers la droite (expansion) ou la gauche (restriction) : les nouvelles coordonnées $(Y^*, i^*)$ sautent aux yeux !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch4_p4_q6',
              type: 'mcq',
              prompt:
                'Dans un modèle IS-LM standard (zone intermédiaire), quelle est la conséquence d’une **politique monétaire expansive** ($\\Delta M > 0$) sur le revenu $Y^*$, le taux d’intérêt $i^*$ et l’investissement privé $I^*$ ?',
              options: [
                '$Y^* \\uparrow$, $i^* \\uparrow$, $I^* \\downarrow$',
                '$Y^* \\uparrow$, $i^* \\downarrow$, $I^* \\uparrow$',
                '$Y^* \\downarrow$, $i^* \\downarrow$, $I^* \\uparrow$',
                '$Y^* \\uparrow$, $i^*$ inchangé, $I^*$ inchangé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une hausse de l’offre de monnaie déplace LM vers la droite : le taux d’intérêt d’équilibre $i^*$ diminue, ce qui relance l’investissement privé $I^*(i)$ et accroît le PIB d’équilibre $Y^*$.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 5 : MARCHÉ DU TRAVAIL, INFLATION ET POLITIQUES ÉCONOMIQUES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch5',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 5,
    title: 'Chapitre 5 : Marché du travail, inflation et politiques économiques',
    summary:
      'Maîtriser le marché du travail (salaire réel, demande PmL = wr, arbitrage travail-loisir), opposer chômage classique et keynésien, analyser la courbe de Phillips et le NAIRU, et concevoir le policy mix (budgétaire et monétaire BCEAO).',
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Macroéconomie',
    points: [
      // ----------------------------------------------------------------------
      // POINT 5.1
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch5_p1',
        order: 1,
        title: 'Marché du travail : salaire réel, demande de travail et arbitrage travail-loisir',
        summary:
          'Distinguer salaire nominal et salaire réel, dériver la demande de travail (PmL = wr), résoudre le programme d’arbitrage consommation-loisir par Lagrangien et comparer l’équilibre classique à la vision keynésienne.',
        conceptExplanation:
          'Sur le **marché du travail**, les ménages offrent leur force de travail ($L^o$) et les entreprises expriment une demande de travail ($L^d$) en fonction d’un prix fondamental : le **salaire réel** $w_r = \\frac{W}{P}$ (pouvoir d’achat du salaire nominal $W$ mesuré par rapport au niveau général des prix $P$).\n\n' +
          '• **Demande de travail des entreprises ($L^d$)** : à court terme ($K$ fixe, $Y = F(K, L)$ à productivité marginale décroissante), une firme maximisant son profit $\\Pi = P\\,F(L) - W\\,L$ embauche jusqu’à égaliser la **productivité marginale du travail** au salaire réel : $Pm_L(L) = \\frac{W}{P} = w_r$. Comme $Pm_L$ décroît avec $L$, $L^d$ est une fonction **décroissante de $w_r$**.\n' +
          '• **Offre de travail des ménages ($L^o$)** : chaque individu partage son temps total disponible $\\overline{H}$ entre loisir $\\ell$ et travail $L^o = \\overline{H} - \\ell$ pour maximiser son utilité $U(C, \\ell)$ sous contrainte budgétaire $P\\,C = W\\,L^o \\iff C = w_r(\\overline{H} - \\ell)$. Au maximum, $TMS_{\\ell, C} = \\frac{U’_\\ell}{U’_C} = w_r$.\n' +
          '• **Classiques vs Keynes** : chez les Classiques, la flexibilité de $w_r$ garantit le plein emploi ($L^o = L^d$) sans chômage involontaire ; chez Keynes, les salariés négocient le salaire nominal $W$ (rigidité à la baisse) et l’emploi effectif $L^*$ est dicté par la demande effective $Y^*$ sur le marché des biens.',
        keyRule:
          'Condition optimale d’embauche de l’entreprise : $Pm_L(L) = w_r = \\frac{W}{P}$. En l’absence d’illusion monétaire, offre et demande de travail dépendent du salaire **réel** $w_r$ (et non du seul salaire nominal $W$).',
        formulas: [
          {
            name: 'Salaire réel et condition d’embauche optimale',
            formula: 'w_r = \\frac{W}{P}, \\qquad \\Pi(L) = P\\,F(L) - W\\,L \\implies \\frac{d\\Pi}{dL} = 0 \\iff Pm_L(L) = \\frac{W}{P} = w_r',
            note: 'Si PmL > wr, l’entreprise augmente son profit en embauchant davantage ; si PmL < wr, elle licencie.',
          },
          {
            name: 'Arbitrage consommation-loisir du ménage (Lagrangien)',
            formula: '\\max_{C, \\ell} U(C, \\ell) \\text{ s.c. } C + w_r\\,\\ell = w_r\\,\\overline{H} \\implies \\frac{\\partial U / \\partial \\ell}{\\partial U / \\partial C} = w_r \\text{ et } L^o = \\overline{H} - \\ell^*',
            note: 'Le salaire réel w_r représente le coût d’opportunité d’une heure de loisir !',
          },
        ],
        workedExample: {
          title: 'Calculer l’embauche optimale d’une firme et l’offre de travail par Lagrangien',
          statement:
            '1) Une entreprise e-commerce à Abidjan produit $Y = 100\\,L^{0,5}$ avec $P = 2\\,000$ FCFA et $W = 4\\,000$ FCFA. Quelle quantité de travail $L^d$ maximise son profit ? 2) Un salarié maximise $U(C, \\ell) = C^{1/2}\\ell^{1/2}$ avec $\\overline{H} = 20$ h, $W = 1\\,000$ FCFA et $P = 2$. Trouver $\\ell^*$, $L^o$ et $C^*$.',
          methodSteps: [
            '1) Salaire réel : $w_r = W / P = 4\\,000 / 2\\,000 = 2$. Productivité marginale : $Pm_L = \\frac{dY}{dL} = 100 \\times 0,5\\,L^{-0,5} = \\frac{50}{\\sqrt{L}}$.',
            'Condition d’optimalité $Pm_L = w_r$ : $\\frac{50}{\\sqrt{L}} = 2 \\implies \\sqrt{L} = 25 \\implies L^d = 625$ unités de travail (pour $L = 160$, $Pm_L = 50/\\sqrt{160} \\approx 3,95 > 2$, donc l’entreprise a intérêt à embaucher davantage).',
            '2) Pour le salarié : $w_r = 1\\,000 / 2 = 500$. Contrainte budgétaire : $C = 500(20 - \\ell) \\iff C + 500\\ell = 10\\,000$.',
            'Lagrangien $\\mathcal{Z} = C^{1/2}\\ell^{1/2} + \\lambda(10\\,000 - C - 500\\ell)$ ⇒ CPO : $\\frac{U’_\\ell}{U’_C} = \\frac{C}{\\ell} = 500 \\implies C = 500\\ell$.',
            'On injecte dans la contrainte : $500\\ell + 500\\ell = 10\\,000 \\implies 1\\,000\\ell^* = 10\\,000 \\implies \\ell^* = 10$ heures de loisir, $L^o = 20 - 10 = 10$ heures de travail et $C^* = 5\\,000$.',
          ],
          conclusion:
            'L’entreprise embauche $L^d = 625$ ; avec une utilité Cobb-Douglas symétrique $C^{1/2}\\ell^{1/2}$, le salarié consacre exactement la moitié de son temps disponible au travail ($L^o = 10$ h).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Salaire réel',
            stepTheme: 'Illusion monétaire',
            stepTitle: 'Salaire nominal $W$, salaire réel $w_r = W/P$ et illusion monétaire',
            paragraphText:
              'Recevoir une augmentation de salaire de $+5\\%$ alors que les prix à la consommation grimpent de $+8\\%$ vous rend en réalité **plus pauvre** ! C’est pourquoi l’analyse économique distingue rigoureusement deux notions.\n' +
              '• **Salaire nominal ($W$)** : rémunération exprimée en unités monétaires courantes (ex. $150\\,000$ FCFA/mois).\n' +
              '• **Salaire réel ($w_r = W/P$)** : quantité réelle de biens et services que ce salaire permet d’acheter. Si $W = 150\\,000$ FCFA et l’indice des prix $P = 1,25$, alors $w_r = 150\\,000 / 1,25 = 120\\,000$ FCFA constants !\n' +
              '• **Absence d’illusion monétaire (Classiques)** : les agents rationnels réagissent uniquement à $w_r$ ; si $P$ monte sans hausse de $W$, $w_r$ baisse et l’offre de travail $L^o$ diminue.',
            formula: {
              name: 'Définition du salaire réel et variation approchée',
              formula: 'w_r = \\frac{W}{P} \\implies \\frac{\\Delta w_r}{w_r} \\approx \\frac{\\Delta W}{W} - \\frac{\\Delta P}{P}',
              note: 'Le pouvoir d’achat progresse ssi la hausse du salaire nominal dépasse le taux d’inflation.',
            },
            keyRule:
              'L’**illusion monétaire** consiste à raisonner sur le salaire nominal $W$ en oubliant l’évolution des prix $P$ : les classiques la supposent nulle, tandis que Keynes observe que les travailleurs s’y accrochent à court terme lors des négociations salariales.',
            konanTip:
              'Si un énoncé te donne $W = 3\\,000$ FCFA/h et $P = 1,5$, le salaire réel horaire vaut $3\\,000 / 1,5 = 2\\,000$ FCFA constants. Pour $16$ h de travail par jour, le revenu réel quotidien vaut $16 \\times 2\\,000 = 32\\,000$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p1_q1',
              type: 'mcq',
              prompt:
                'Un salarié perçoit un salaire nominal $W = 180\\,000$ FCFA par mois tandis que l’indice général des prix passe de $P_0 = 1,0$ à $P_1 = 1,20$. Quel est son nouveau salaire réel $w_r$ ?',
              options: [
                '$216\\,000$ FCFA constants',
                '$150\\,000$ FCFA constants',
                '$180\\,000$ FCFA constants',
                '$144\\,000$ FCFA constants',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$w_r = W / P_1 = 180\\,000 / 1,20 = 150\\,000$ FCFA constants. Une inflation de $20\\%$ à salaire nominal figé ampute le pouvoir d’achat d’un sixième.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Demande de travail',
            stepTheme: 'PmL = W/P',
            stepTitle: 'Maximisation du profit et courbe de demande de travail ($Pm_L = w_r$)',
            paragraphText:
              'Combien de salariés une entreprise concurrentielle décide-t-elle d’embaucher ? Elle compare ce que rapporte le dernier travailleur embauché (sa productivité marginale en valeur $P \\cdot Pm_L$) à ce qu’il coûte (le salaire nominal $W$).\n' +
              '• **Règle d’arrêt de l’embauche** : $\\max_L \\Pi(L) = P\\,F(L) - W\\,L \\implies P\\,F’(L) - W = 0 \\iff Pm_L(L) = \\frac{W}{P} = w_r$.\n' +
              '• **Décroissance de $L^d(w_r)$** : par la loi des rendements marginaux décroissants ($F’’(L) < 0$), plus une entreprise embauche, plus $Pm_L$ diminue. Elle n’accepte donc d’embaucher plus que si le salaire réel $w_r$ **baisse** !\n' +
              '• **Exemple** : si $Y = 200\\,L^{0,5}$, alors $Pm_L = 100 / \\sqrt{L}$. Si $w_r = 5$, alors $\\sqrt{L} = 20 \\implies L^d = 400$.',
            formula: {
              name: 'Condition de premier ordre de la demande de travail',
              formula: 'Pm_L(L) = \\frac{\\partial F(K, L)}{\\partial L} = \\frac{W}{P} = w_r \\quad (\\text{avec } Pm_L’ < 0)',
              note: 'Équivalent en valeur nominale : PmL × P (productivité marginale en valeur) = W.',
            },
            keyRule:
              'Tant que $Pm_L > w_r$, chaque nouveau salarié rapporte plus qu’il ne coûte : l’entreprise **embauche**. L’embauche s’arrête exactement quand $Pm_L = w_r$.',
            konanTip:
              'En présence d’une fonction Cobb-Douglas $Y = A\\,K^\\alpha L^\\beta$ (à capital $K$ fixe à court terme), dérive par rapport à $L$ : $Pm_L = \\beta\\,A\\,K^\\alpha L^{\\beta - 1} = \\beta\\,\\frac{Y}{L}$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p1_q2',
              type: 'mcq',
              prompt:
                'Une entreprise utilise la fonction de production $Y = 120\\,L^{0,5}$. Le prix du bien est $P = 1\\,000$ FCFA et le salaire nominal est $W = 3\\,000$ FCFA. Quel niveau d’emploi $L^d$ maximise son profit ?',
              options: [
                '$L^d = 20$',
                '$L^d = 400$',
                '$L^d = 1\\,600$',
                '$L^d = 100$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$w_r = W/P = 3\\,000 / 1\\,000 = 3$. La productivité marginale vaut $Pm_L = 120 \\times 0,5\\,L^{-0,5} = 60 / \\sqrt{L}$. On résout $60 / \\sqrt{L} = 3 \\implies \\sqrt{L} = 20 \\implies L^d = 400$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Arbitrage loisir',
            stepTheme: 'Programme du salarié',
            stepTitle: 'Offre de travail des ménages : arbitrage consommation-loisir et effets substitution/revenu',
            paragraphText:
              'Pourquoi travaille-t-on $8$ heures par jour plutôt que $2$ ou $16$ ? Parce que le travail procure un revenu réel permettant de consommer ($C$), mais sacrifie du temps de loisir ($\ell = \\overline{H} - L^o$).\n' +
              '• **Programme microéconomique** : maximiser $U(C, \\ell)$ sous la contrainte $C = w_r(\\overline{H} - \\ell)$ (en l’absence de revenu non salarial). Par le Lagrangien, l’optimum vérifie $TMS_{\\ell, C} = \\frac{U’_\\ell}{U’_C} = w_r$.\n' +
              '• **Double effet d’une hausse de $w_r$** : (1) **effet de substitution** ($L^o \\uparrow$ : chaque heure de loisir devient plus coûteuse en manque à gagner) ; (2) **effet de revenu** ($L^o \\downarrow$ : plus riche, le salarié achète plus de biens ET plus de loisir !).\n' +
              '• **Forme de $L^o$** : tant que l’effet de substitution domine, $L^o(w_r)$ est **croissante** (à très hauts salaires, elle peut se retourner en arrière).',
            formula: {
              name: 'Équation d’optimalité de l’arbitrage travail-loisir',
              formula: '\\frac{\\partial U / \\partial \\ell}{\\partial U / \\partial C} = w_r \\quad \\text{avec } \\ell + L^o = \\overline{H} \\text{ et } C = w_r L^o',
              note: 'Pour U(C, ℓ) = C^α ℓ^β, on obtient directement ℓ* = [β/(α+β)]·H̄ si le revenu non salarial est nul.',
            },
            keyRule:
              'Le salaire réel $w_r$ est le **coût d’opportunité du loisir** : l’offre de travail $L^o(w_r)$ est normalement croissante quand l’effet de substitution l’emporte sur l’effet de revenu.',
            konanTip:
              'Astuce rapide pour le Lagrangien avec $U(C, \\ell) = C^{1/2}\\ell^{1/2}$ et $C = w_r(\\overline{H} - \\ell)$ : le rapport $U’_\\ell / U’_C$ vaut simplement $C / \\ell = w_r \\implies C = w_r\\ell$, ce qui donne aussitôt $\\ell^* = \\overline{H}/2$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p1_q3',
              type: 'mcq',
              prompt:
                'Lors d’une hausse du salaire réel $w_r$, que mesure l’**effet de substitution** sur l’offre de travail d’un ménage ?',
              options: [
                'L’incitation à travailler moins car on atteint plus vite le revenu souhaité',
                'L’incitation à travailler davantage parce que le coût d’opportunité d’une heure de loisir a augmenté',
                'La baisse de la productivité marginale du capital',
                'La hausse automatique du niveau général des prix',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Quand $w_r$ augmente, renoncer à une heure de travail coûte plus cher en consommation perdue : l’effet de substitution pousse donc à substituer du travail au loisir ($L^o \\uparrow$), à l’opposé de l’effet de revenu.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Équilibre classique',
            stepTheme: 'Plein emploi',
            stepTitle: 'Équilibre concurrentiel classique du marché du travail et chômage volontaire',
            paragraphText:
              'Dans le modèle néoclassique de référence, le salaire réel $w_r$ est parfaitement **flexible** à la hausse comme à la baisse : le marché du travail s’équilibre exactement comme n’importe quel marché de biens.\n' +
              '• **Détermination de $(w_r^*, L^*)$** : l’intersection $L^o(w_r^*) = L^d(w_r^*)$ fixe simultanément le salaire réel d’équilibre $w_r^*$ et l’emploi de plein emploi $L^* = L_{PE}$, qui détermine ensuite le PIB potentiel $Y_{PE} = F(K, L_{PE})$ (**dichotomie réel/monétaire**).\n' +
              '• **Exemple** : si $L^o = 20 + 2w_r$ et $L^d = 100 - 3w_r$, alors $20 + 2w_r = 100 - 3w_r \\implies 5w_r = 80 \\implies w_r^* = 16$ et $L^* = 52$.\n' +
              '• **Nature du chômage** : tous ceux qui acceptent le salaire $w_r^*$ trouvent un emploi ; il n’y a **aucun chômage involontaire** (les sans-emploi refusent simplement de travailler à $w_r^*$ : chômage **volontaire** ou **frictionnel**).',
            formula: {
              name: 'Équilibre concurrentiel du marché du travail',
              formula: 'L^o(w_r^*) = L^d(w_r^*) = L_{PE} \\implies Y_{PE} = F(K, L_{PE})',
              note: 'Chez les Classiques, c’est le marché du travail qui fixe l’emploi L_PE, puis la fonction de production qui fixe Y_PE.',
            },
            keyRule:
              'Dans le modèle classique pur à salaires réels flexibles, tout excès d’offre de travail fait baisser $w_r$ jusqu’à résorber le chômage : le chômage involontaire est impossible.',
            konanTip:
              'Compare le sens de causalité entre Classiques et Keynes : Classiques : Marché du travail ($w_r^*$) $\\to$ Emploi $L^*$ $\\to$ Production $Y^*$. Keynes : Demande effective ($Y^*$) $\\to$ Emploi $L^*$ !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p1_q4',
              type: 'mcq',
              prompt:
                'Sur un marché du travail concurrentiel, l’offre est $L^o = 10 + 2w_r$ et la demande est $L^d = 130 - 4w_r$. Quels sont le salaire réel d’équilibre $w_r^*$ et le niveau d’emploi $L^*$ ?',
              options: [
                '$w_r^* = 20$ et $L^* = 50$',
                '$w_r^* = 24$ et $L^* = 58$',
                '$w_r^* = 15$ et $L^* = 40$',
                '$w_r^* = 20$ et $L^* = 70$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À l’équilibre, $L^o = L^d \\implies 10 + 2w_r = 130 - 4w_r \\implies 6w_r = 120 \\implies w_r^* = 20$. On en déduit $L^* = 10 + 2(20) = 50$ (et $130 - 4(20) = 50$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Rigidités salariales',
            stepTheme: 'Chômage involontaire',
            stepTitle: 'Rigidités du salaire réel (SMIG, syndicats, salaire d’efficience) et rationnement',
            paragraphText:
              'Pourquoi observe-t-on dans la réalité un chômage durable ? Dès que le salaire réel reste bloqué **au-dessus** du niveau d’équilibre ($\\overline{w_r} > w_r^*$), l’ajustement par les prix est bloqué.\n' +
              '• **Rationnement sur le côté court** : à $\\overline{w_r} > w_r^*$, davantage de personnes souhaitent travailler ($L^o(\\overline{w_r})$ élevé), mais les firmes réduisent leurs embauches ($L^d(\\overline{w_r})$ faible). L’emploi effectif est plafonné à $L_{\\text{eff}} = L^d(\\overline{w_r})$ et la différence $U = L^o(\\overline{w_r}) - L^d(\\overline{w_r}) > 0$ mesure le **chômage involontaire**.\n' +
              '• **Trois sources de rigidités** : (1) planchers légaux (**salaire minimum / SMIG**) ; (2) pouvoir de négociation des **syndicats** (*insiders vs outsiders*) ; (3) **salaire d’efficience** (les firmes paient volontairement au-dessus de $w_r^*$ pour motiver la productivité, limiter le *turnover* et attirer les meilleurs profils).',
            formula: {
              name: 'Chômage issu d’un salaire réel rigide supérieur à l’équilibre',
              formula: '\\overline{w_r} > w_r^* \\implies L_{\\text{eff}} = L^d(\\overline{w_r}) < L^o(\\overline{w_r}) \\implies U = L^o(\\overline{w_r}) - L^d(\\overline{w_r}) > 0',
              note: 'Inversement, un salaire fixé sous w_r* créerait une pénurie de main-d’œuvre (postes vacants non pourvus).',
            },
            keyRule:
              'Lorsque $\\overline{w_r} > w_r^*$, le marché est rationné par la **demande de travail** des entreprises (côté court) : l’écart $L^o(\\overline{w_r}) - L^d(\\overline{w_r})$ constitue un chômage involontaire.',
            konanTip:
              'Dans la théorie du **salaire d’efficience** (Shapiro-Stiglitz), même sans SMIG ni syndicats, les entreprises refusent de baisser les salaires en récession de peur que leurs meilleurs talents démissionnent ou relâchent leurs efforts !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p1_q5',
              type: 'mcq',
              prompt:
                'Reprenons $L^o = 10 + 2w_r$ et $L^d = 130 - 4w_r$ (équilibre $w_r^* = 20, L^* = 50$). Si un salaire minimum réel est fixé à $\\overline{w_r} = 25$, quel est le volume d’emploi effectif et le nombre de chômeurs involontaires ?',
              options: [
                'Emploi $= 60$ et chômage $= 0$',
                'Emploi $= 30$ et chômage $= 30$',
                'Emploi $= 50$ et chômage $= 10$',
                'Emploi $= 30$ et chômage $= 20$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À $\\overline{w_r} = 25$, la demande des entreprises tombe à $L^d(25) = 130 - 4(25) = 30$ et l’offre des ménages monte à $L^o(25) = 10 + 2(25) = 60$. L’emploi effectif est le minimum (côté court), soit $30$, et le chômage vaut $60 - 30 = 30$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Emploi keynésien',
            stepTheme: 'Contrainte de débouchés',
            stepTitle: 'Chez Keynes : l’emploi dicté par la demande effective sur le marché des biens',
            paragraphText:
              'Keynes va plus loin que la simple rigidité salariale : même si les salaires étaient flexibles, baisser les salaires réduit les revenus et donc la consommation, ce qui peut **aggraver** le chômage !\n' +
              '• **Mécanisme de la demande effective** : si la demande globale équilibre le marché des biens à un PIB $Y^* < Y_{PE}$ (par exemple $Y^* = 500$ alors que le plein emploi permet $Y_{PE} = 600$ avec la fonction $Y = 10\\,L$), les entreprises n’ont besoin que de $L^* = 500 / 10 = 50$ travailleurs, laissant $L_{PE} - L^* = 60 - 50 = 10$ chômeurs involontaires.\n' +
              '• **Implication** : dans ce cas, baisser les salaires ne crée pas de clients supplémentaires ; il faut **relancer la demande effective** (dépenses publiques, baisse d’impôts ou baisse des taux d’intérêt) !',
            formula: {
              name: 'Chômage keynésien par insuffisance de demande effective',
              formula: 'Y^* < Y_{PE} \\implies L^* = F^{-1}(Y^*) < L_{PE} \\implies U_{\\text{involontaire}} = L_{PE} - L^*',
              note: 'Le marché du travail est alors soumis à la contrainte de débouchés provenant du marché des biens.',
            },
            keyRule:
              'Chez Keynes, on ne résout pas le chômage uniquement sur le marché du travail : l’emploi dépend avant tout du niveau de production $Y^*$ fixé par la **demande effective**.',
            konanTip:
              'Vérifie toujours de quel modèle relève l’énoncé : si on te donne $Y^*$ et $Y = f(L)$ avec $L_{PE}$, calcule d’abord $L^* = f^{-1}(Y^*)$ puis soustrais-le de $L_{PE}$ pour trouver le chômage involontaire keynésien !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p1_q6',
              type: 'mcq',
              prompt:
                'Dans une économie keynésienne, la fonction de production est $Y = 12\\,L$. Le PIB d’équilibre issu de la demande effective vaut $Y^* = 720$ tandis que le niveau d’emploi de plein emploi est $L_{PE} = 75$. Quel est le nombre de chômeurs involontaires ?',
              options: [
                '$0$ chômeur (plein emploi automatique)',
                '$15$ chômeurs involontaires',
                '$60$ chômeurs involontaires',
                '$12$ chômeurs involontaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour produire la demande effective $Y^* = 720$, les entreprises embauchent $L^* = 720 / 12 = 60$ travailleurs. Le chômage involontaire vaut donc $L_{PE} - L^* = 75 - 60 = 15$ personnes.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 5.2
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch5_p2',
        order: 2,
        title: 'Chômage classique vs chômage keynésien, courbe de Phillips et NAIRU',
        summary:
          'Diagnostiquer un chômage classique vs keynésien (et le double rôle du salaire), tracer l’arbitrage inflation-chômage de Phillips, expliquer la critique de Friedman-Phelps (NAIRU) et analyser la stagflation.',
        conceptExplanation:
          'Face à une montée du chômage, prescrire le mauvais remède peut aggraver la crise ! La théorie du déséquilibre (Edmond Malinvaud) distingue rigoureusement le **chômage classique** (manque de rentabilité / salaire réel trop élevé) du **chômage keynésien** (manque de débouchés / demande globale insuffisante).\n\n' +
          '• **Double nature du salaire** : le salaire est à la fois un **coût de production** pour l’entreprise (vision classique) et un **revenu qui alimente la consommation** (vision keynésienne). Augmenter les salaires aggrave le chômage classique mais peut réduire le chômage keynésien !\n' +
          '• **Courbe de Phillips (1958) et Samuelson-Solow** : relation empirique décroissante à **court terme** entre le taux de chômage $u$ et le taux d’inflation $\\pi$ : $\\pi = \\pi^e - \\beta(u - u_n) + \\varepsilon$.\n' +
          '• **Critique monétariste (Friedman-Phelps) et NAIRU** : à **long terme**, les anticipations s’adaptent ($\\pi^e = \\pi$) : il n’y a plus d’arbitrage et la courbe de Phillips devient **verticale** au taux de chômage naturel / d’équilibre **NAIRU** ($u_n$). Un choc d’offre négatif (choc pétrolier) provoque une **stagflation** ($\pi\\uparrow$ et $u\\uparrow$ simultanés).',
        keyRule:
          'Chômage **classique** $\\to$ coût salarial excessif $\\to$ baisser $w_r$ / alléger les charges. Chômage **keynésien** $\\to$ demande insuffisante $\\to$ relance budgétaire/monétaire. À long terme, seul le traitement structurel réduit le NAIRU $u_n$.',
        formulas: [
          {
            name: 'Courbe de Phillips augmentée des anticipations (Friedman-Phelps)',
            formula: '\\pi_t = \\pi_t^e - \\beta\\,(u_t - u_n) + \\varepsilon_t \\qquad (\\beta > 0)',
            note: 'À long terme, π_t^e = π_t ⇒ u_t = u_n (NAIRU : Non-Accelerating Inflation Rate of Unemployment).',
          },
          {
            name: 'Loi d’Okun (lien croissance du PIB ↔ variation du chômage)',
            formula: '\\Delta u_t = -\\gamma\\,(g_Y - \\bar{g}) \\qquad (\\gamma > 0)',
            note: 'Le chômage ne baisse que si la croissance effective g_Y dépasse la croissance potentielle ḡ (productivité + population active).',
          },
        ],
        workedExample: {
          title: 'Arbitrage de Phillips à court terme vs dérive inflationniste à long terme',
          statement:
            'Soit une courbe de Phillips $\\pi_t = \\pi_t^e - 0,5(u_t - 6\\%)$ avec des anticipations adaptatives $\\pi_t^e = \\pi_{t-1}$ et un NAIRU $u_n = 6\\%$. Initialement à $t=0$, $u_0 = 6\\%$ et $\\pi_0 = 2\\%$. Le gouvernement maintient $u_t = 4\\%$ pendant deux ans ($t=1, 2$) par une relance permanente. Calculer $\\pi_1$ et $\\pi_2$.',
          methodSteps: [
            'En $t = 1$, les agents anticipent encore $\\pi_1^e = \\pi_0 = 2\\%$.',
            'On applique la formule : $\\pi_1 = 2\\% - 0,5(4\\% - 6\\%) = 2\\% - 0,5(-2\\%) = 2\\% + 1\\% = 3\\%$.',
            'En $t = 2$, les salariés révisent leurs anticipations à $\\pi_2^e = \\pi_1 = 3\\%$ et réclament des hausses de salaires.',
            'Alors $\\pi_2 = 3\\% - 0,5(4\\% - 6\\%) = 3\\% + 1\\% = 4\\%$. Chaque année sous le NAIRU ajoute $+1$ point d’inflation supplémentaire (**accélérationnisme**) !',
          ],
          conclusion:
            'Maintenir $u < u_n$ fait accélérer continuellement l’inflation ($2\\% \\to 3\\% \\to 4\\% \\to \\dots$) sans gain durable sur le chômage.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Matrice Malinvaud',
            stepTheme: 'Classique vs Keynésien',
            stepTitle: 'Diagnostiquer le chômage classique face au chômage keynésien',
            paragraphText:
              'Pourquoi deux économistes peuvent-ils proposer des remèdes totalement opposés face au chômage ? Parce qu’ils ne diagnostiquent pas la même origine du déséquilibre !\n' +
              '• **Chômage classique** : les entreprises ont des carnets de commandes pleins, mais produire et embaucher davantage n’est **pas rentable** car le salaire réel dépasse la productivité marginale ($w_r > Pm_L$). Relancer la demande crée juste de l’inflation ; il faut **baisser le coût du travail** ou stimuler l’offre.\n' +
              '• **Chômage keynésien** : les entreprises sont rentables mais les entrepôts sont pleins faute de clients ($DG < Y_{PE}$). Baisser les salaires aggrave la contraction des débouchés ; il faut **soutenir la demande globale** ($G\\uparrow, T\\downarrow, i\\downarrow$). La matrice ci-dessous compare ces deux régimes.',
            keyRule:
              'Critère de diagnostic : si les firmes manquent de **clients**, c’est du chômage keynésien ; si elles manquent de **rentabilité / capacités**, c’est du chômage classique.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Chômage Classique vs Chômage Keynésien : diagnostic et politiques',
              caption: 'Opposition des causes, des mécanismes, du rôle du salaire et des remèdes adaptés.',
              matrix2x2: {
                topAxis: ['Chômage CLASSIQUE (Offre / Rentabilité)', 'Chômage KEYNÉSIEN (Demande / Débouchés)'],
                leftAxis: ['Diagnostic & Mécanisme', 'Effet des politiques économiques'],
                topLeft: {
                  title: 'Causes (Classique)',
                  color: 'orange',
                  items: [
                    'Salaire réel trop élevé (w_r > w_r*)',
                    'Profitabilité et capacités insuffisantes',
                    'Les entreprises pourraient vendre mais refusent d’embaucher à perte',
                  ],
                },
                topRight: {
                  title: 'Causes (Keynésien)',
                  color: 'blue',
                  items: [
                    'Demande effective insuffisante (DG < Y_PE)',
                    'Capacités productives sous-utilisées',
                    'Rationnement par manque de débouchés commerciaux',
                  ],
                },
                bottomLeft: {
                  title: 'Remèdes (Classique)',
                  color: 'violet',
                  items: [
                    'Modération salariale / baisse des charges',
                    'Gains de productivité et réformes d’offre',
                    '⚠️ Relancer la demande ⇒ inflation sans emploi',
                  ],
                },
                bottomRight: {
                  title: 'Remèdes (Keynésien)',
                  color: 'green',
                  items: [
                    'Relance budgétaire (G↑, T↓) & monétaire (i↓)',
                    'Soutien au pouvoir d’achat des ménages',
                    '⚠️ Baisser les salaires ⇒ chute de C et crise aggravée',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p2_q1',
              type: 'mcq',
              prompt:
                'Une entreprise dispose de machines inutilisées et pourrait embaucher, mais n’a pas assez de clients pour écouler sa production. Quel type de chômage subit l’économie et quel remède est adapté ?',
              options: [
                'Chômage classique : il faut réduire fortement les salaires et freiner la demande',
                'Chômage keynésien : il faut stimuler la demande effective (relance budgétaire ou monétaire)',
                'Chômage frictionnel : il faut supprimer toutes les allocations et les contrats',
                'Inflation contenue : il faut relever les impôts pour refroidir la demande',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’existence de capacités productives inemployées face à une insuffisance de débouchés caractérise exactement le chômage keynésien, qui appelle un soutien à la demande globale.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Double rôle du salaire',
            stepTheme: 'Coût vs Revenu',
            stepTitle: 'Le paradoxe du salaire : coût pour l’entreprise mais revenu pour la demande',
            paragraphText:
              'Pourquoi une baisse généralisée des salaires peut-elle être salvatrice au niveau d’une entreprise isolée mais catastrophique pour le pays entier ? C’est un piège macroéconomique majeur.\n' +
              '• **Optique microéconomique (Coût)** : si UNE firme baisse ses salaires, ses coûts unitaires chutent, sa compétitivité augmente et elle gagne des parts de marché.\n' +
              '• **Optique macroéconomique (Revenu)** : si TOUTES les firmes baissent les salaires simultanément, la masse salariale nationale s’effondre ⇒ la consommation des ménages (à forte propension $c$) chute brutalement ⇒ la demande globale recule et les entreprises licencient encore plus (**spirale déflationniste**) !',
            keyRule:
              'Le salaire possède un statut dual : il est un **coût** (qui pèse sur l’offre) et un **revenu** (qui nourrit la demande globale). Dans un pays peu ouvert où le chômage est keynésien, baisser tous les salaires aggrave la récession.',
            konanTip:
              'Distingue bien le cas d’une petite économie très tournée vers l’export (où les coûts salariaux pèsent surtout sur la compétitivité externe) d’une grande économie tirée par sa consommation intérieure.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi Keynes s’oppose-t-il à une baisse généralisée des salaires nominaux pour sortir d’une récession ?',
              options: [
                'Parce que les entreprises n’utilisent jamais le travail comme facteur de production',
                'Parce que la baisse des salaires réduit le revenu et la consommation des ménages, contractant encore davantage la demande effective',
                'Parce que baisser les salaires augmente automatiquement les importations',
                'Parce que la baisse des salaires fait exploser le taux d’intérêt directeur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si tous les salaires baissent ensemble, le pouvoir d’achat et la demande de consommation des ménages (qui ont une forte PMC) reculent, entraînant une spirale déflationniste de contraction de l’activité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Courbe de Phillips',
            stepTheme: 'Arbitrage court terme',
            stepTitle: 'La courbe de Phillips originelle et l’arbitrage inflation-chômage à court terme',
            paragraphText:
              'En 1958, l’économiste néo-zélandais Alban Phillips observe sur près d’un siècle de données britanniques une relation statistique **inverse et non linéaire** entre le taux de chômage $u$ et le taux de croissance des salaires nominaux.\n' +
              '• **Formulation de Samuelson et Solow (1960)** : en liant les salaires aux prix, on obtient un **arbitrage de court terme** entre chômage $u$ et inflation $\\pi$ : quand $u$ est faible (tension sur le marché du travail), les salariés obtiennent de fortes hausses de salaires que les entreprises répercutent dans leurs prix ($\\pi\\uparrow$).\n' +
              '• **Lecture politique (années 1960)** : les gouvernements pensaient pouvoir choisir un point sur ce « menu » — accepter un peu plus d’inflation pour obtenir moins de chômage.',
            formula: {
              name: 'Courbe de Phillips statique (court terme)',
              formula: '\\pi = \\bar{\\pi} - \\beta\\,(u - u_n) \\qquad (\\beta > 0)',
              note: 'À court terme (anticipations d’inflation figées), toute baisse de u sous u_n s’accompagne d’une hausse de π.',
            },
            keyRule:
              'À court terme, la courbe de Phillips est **décroissante** dans le plan $(u, \\pi)$ : il existe un arbitrage (*trade-off*) entre lutte contre le chômage et lutte contre l’inflation.',
            konanTip:
              'Attention aux axes du graphique de Phillips : le **taux de chômage $u$** est en abscisse ($x$) et le **taux d’inflation $\\pi$** est en ordonnée ($y$).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p2_q3',
              type: 'mcq',
              prompt:
                'Que traduit la pente négative de la courbe de Phillips à court terme ?',
              options: [
                'Une baisse du chômage s’accompagne en général d’une hausse de l’inflation (tensions salariales et sur les prix)',
                'Plus l’inflation est élevée, plus le chômage augmente automatiquement',
                'Le taux d’intérêt n’a aucun lien avec l’investissement',
                'La croissance économique réduit toujours simultanément l’inflation et le chômage',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque l’économie surchauffe et que le chômage $u$ baisse fortement, les entreprises peinent à recruter, les salaires augmentent plus vite que la productivité et les prix accélèrent ($\\pi$ monte).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Friedman & NAIRU',
            stepTheme: 'Courbe verticale LT',
            stepTitle: 'Critique monétariste (Friedman-Phelps), anticipations et courbe verticale au NAIRU',
            paragraphText:
              'À la fin des années 1960, Milton Friedman et Edmund Phelps prédisent que l’arbitrage de Phillips est une **illusion temporaire** qui s’effondre dès que les agents ajustent leurs anticipations d’inflation !\n' +
              '• **Mécanisme** : si l’État relance pour abaisser $u$ sous le taux naturel $u_n$, l’inflation $\\pi$ monte. Au début, les salariés croient à une hausse de pouvoir d’achat et travaillent plus (illusion monétaire temporaire). Mais bientôt, ils comprennent que les prix ont monté ($\\pi^e \\uparrow$), exigent des salaires indexés, la rentabilité retombe et le chômage **remonte à $u_n$** — mais avec une inflation durablement plus élevée !\n' +
              '• **Long terme** : la courbe de Phillips devient **verticale** en $u = u_n$ (**NAIRU** : taux de chômage n’accélérant pas l’inflation).',
            formula: {
              name: 'Équilibre de long terme sur la courbe de Phillips augmentée',
              formula: '\\pi_t = \\pi_t^e - \\beta\\,(u_t - u_n) \\xrightarrow{\\text{LT } (\\pi^e = \\pi)} u_t = u_n \\quad (\\text{courbe verticale})',
              note: 'Le NAIRU u_n dépend des facteurs structurels (formation, appariement, fiscalité du travail), pas de la création monétaire.',
            },
            keyRule:
              'À **long terme**, la courbe de Phillips est **verticale** au niveau du NAIRU $u_n$ : une relance de la demande ne peut pas maintenir durablement le chômage en dessous de $u_n$ sans déclencher une spirale hyperinflationniste.',
            konanTip:
              'Distinction d’examen capitale : court terme = courbe de Phillips **décroissante** (prix/anticipations rigides) ; long terme = courbe de Phillips **verticale** en $u_n$ (anticipations ajustées).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p2_q4',
              type: 'mcq',
              prompt:
                'Selon Milton Friedman et Edmund Phelps, pourquoi n’existe-t-il **aucun arbitrage durable** entre inflation et chômage à long terme ?',
              options: [
                'Parce que les travailleurs et entreprises finissent par intégrer l’inflation dans leurs anticipations ($\\pi^e = \\pi$), ramenant le chômage à son niveau naturel $u_n$ (NAIRU)',
                'Parce que les banques centrales interdisent toute hausse des salaires',
                'Parce que le chômage est toujours égal à $0\\%$ à long terme',
                'Parce que la courbe de Phillips devient horizontale à long terme',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dès que les anticipations d’inflation $\\pi^e$ rattrapent l’inflation effective $\\pi$, les revendications salariales annulent l’effet stimulant de la relance et l’économie revient au NAIRU $u_n$ sur une courbe verticale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Stagflation',
            stepTheme: 'Chocs d’offre',
            stepTitle: 'Chocs d’offre négatifs et stagflation : quand inflation et chômage montent ensemble',
            paragraphText:
              'Dans les années 1970, les chocs pétroliers brisent le schéma keynésien simple : les pays connaissent à la fois une **stagnation** (chômage en hausse) et une **inflation** à deux chiffres (**stagflation**).\n' +
              '• **Explication par la courbe de Phillips** : un choc d’offre négatif ($\varepsilon_t > 0$ : flambée du pétrole, du fret maritime ou des intrants agricoles) alourdit les coûts de production de toutes les entreprises.\n' +
              '• **Déplacement de la courbe** : la courbe de Phillips se déplace **vers le haut et la droite** ! Pour un même taux de chômage, l’inflation est plus forte ; et la baisse des marges pousse les firmes à réduire la production ($Y\\downarrow, u\\uparrow$) tout en augmentant leurs prix ($\\pi\\uparrow$).',
            formula: {
              name: 'Modélisation d’un choc d’offre sur l’inflation',
              formula: '\\pi_t = \\pi_t^e - \\beta\\,(u_t - u_n) + \\varepsilon_t \\qquad (\\varepsilon_t > 0 \\implies \\text{courbe déplacée vers le haut})',
              note: 'Un choc de demande déplace l’économie LE LONG de la courbe de Phillips ; un choc d’offre déplace TOUTE la courbe !',
            },
            keyRule:
              'La **stagflation** (stagnation + inflation) résulte d’un **choc d’offre négatif** ($\varepsilon > 0$) ou d’un désancrage des anticipations inflationnistes ($\pi^e \\uparrow$), mettant les politiques de demande face à un dilemme douloureux.',
            konanTip:
              'Dilemme du banquier central face à la stagflation : s’il relance pour sauver l’emploi, il aggrave l’inflation ; s’il resserre les taux pour casser l’inflation, il creuse la récession ! Seules des politiques d’offre (productivité, énergie, concurrence) résolvent le choc à la racine.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle situation macroéconomique désigne le terme **stagflation** et quelle en est la cause typique ?',
              options: [
                'Une croissance forte sans aucune inflation, due à une baisse du prix du pétrole',
                'La coexistence d’un ralentissement économique (chômage élevé) et d’une forte inflation, généralement déclenchée par un choc d’offre négatif (ex. choc énergétique)',
                'Une baisse simultanée des prix et du chômage grâce à la transformation digitale',
                'Un excédent budgétaire accompagné d’une déflation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La stagflation combine stagnation (croissance faible et montée du chômage) et inflation élevée, typiquement provoquée par un choc d’offre négatif qui renchérit les coûts de production.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Baisser le NAIRU',
            stepTheme: 'Politiques structurelles',
            stepTitle: 'Comment réduire durablement le NAIRU grâce aux politiques structurelles et au numérique',
            paragraphText:
              'Puisque la relance budgétaire ou monétaire ne peut pas abaisser durablement le chômage sous le **NAIRU** $u_n$, comment faire baisser le chômage structurel sans créer d’inflation ? En déplaçant la courbe de Phillips verticale **vers la gauche** !\n' +
              '• **1. Formation et adéquation compétences-emplois** : réduire le chômage d’inadéquation (*mismatch*) en formant les jeunes aux métiers en tension (développement logiciel, data, e-commerce, maintenance industrielle).\n' +
              '• **2. Efficacité de l’appariement** : plateformes numériques de mise en relation offres/demandes d’emploi qui raccourcissent le chômage frictionnel.\n' +
              '• **3. Coût du travail et concurrence** : allègement ciblé des cotisations sur les bas salaires et levée des barrières à l’entrée sur les marchés de biens (baisse des marges monopolistiques $\\implies$ hausse du salaire réel d’équilibre).',
            keyRule:
              'Les politiques **conjoncturelles** (budgétaire, monétaire) ramènent $u$ vers $u_n$ en cas de récession ; seules les politiques **structurelles** (éducation, appariement, productivité, concurrence) abaissent durablement le NAIRU $u_n$.',
            konanTip:
              'Pour une économie émergente en transformation digitale, l’investissement dans le capital humain numérique et la connectivité produit un double dividende : hausse de la productivité globale et baisse du chômage structurel !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle mesure permet d’abaisser durablement le **NAIRU** (taux de chômage structurel de long terme) sans déclencher d’accélération de l’inflation ?',
              options: [
                'Imprimer massivement de la monnaie chaque année pour maintenir le taux d’intérêt sous l’inflation',
                'Améliorer la formation professionnelle (notamment numérique), fluidifier l’appariement sur le marché du travail et alléger le coût du travail peu qualifié',
                'Doubler les dépenses publiques courantes chaque trimestre à capacité productive constante',
                'Fixer un salaire minimum réel très supérieur à la productivité marginale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le NAIRU $u_n$ est déterminé par les frictions d’appariement, l’inadéquation des qualifications et la formation des salaires/prix : seules des réformes structurelles (capital humain, appariement, productivité, concurrence) réduisent $u_n$ durablement.',
            },
          },
        ],
      }),

      // ----------------------------------------------------------------------
      // POINT 5.3
      // ----------------------------------------------------------------------
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch5_p3',
        order: 3,
        title: 'Politique budgétaire, politique monétaire (BCEAO), triangle de Mundell et policy mix',
        summary:
          'Maîtriser les outils et contraintes de la politique budgétaire (UEMOA, équivalence ricardienne), le cadre monétaire de la BCEAO, les canaux de transmission, le triangle d’incompatibilité de Mundell et le policy mix.',
        conceptExplanation:
          'Pour piloter la conjoncture autour des sommets du carré magique de Kaldor, les autorités publiques disposent de deux grands leviers qu’il faut savoir **coordonner** : c’est le **policy mix**.\n\n' +
          '• **Politique budgétaire (Gouvernement)** : agit par les dépenses publiques ($G$) et la fiscalité ($T$) via deux mécanismes : les **stabilisateurs automatiques** (en récession, recettes fiscales baissent et dépenses sociales montent sans vote) et les **plans discrétionnaires**. Elle est encadrée dans l’UEMOA par des critères de convergence (déficit budgétaire $\\leqslant 3\\%$ du PIB, dette publique $\\leqslant 70\\%$ du PIB) et discutée par l’**équivalence ricardienne** (Barro : un déficit financé par emprunt annonce des impôts futurs que les ménages épargnent aujourd’hui).\n' +
          '• **Politique monétaire (BCEAO en zone UEMOA)** : mandat prioritaire de **stabilité des prix** (inflation cible $\\leqslant 3\\%$) et défense de la parité fixe FCFA/Euro via les taux directeurs, les réserves obligatoires et l’open market.\n' +
          '• **Triangle d’incompatibilité de Mundell** : impossible de réunir simultanément **change fixe**, **libre circulation des capitaux** et **autonomie monétaire**. La zone FCFA, en régime de change fixe sur l’Euro, privilégie la stabilité cambiaire et s’appuie fortement sur la politique budgétaire nationale et les réformes structurelles.',
        keyRule:
          'Dans le **Policy Mix**, la coordination optimale face à une récession sans inflation est la **relance coordonnée** ($G\\uparrow$ et $M\\uparrow$) qui neutralise l’effet d’éviction ; face à une surchauffe inflationniste, c’est la **rigueur coordonnée** ($G\\downarrow$ et $M\\downarrow$).',
        formulas: [
          {
            name: 'Critères budgétaires et monétaires clés de l’UEMOA',
            formula: '\\text{Déficit public} \\leqslant 3\\%\\text{ du PIB}, \\qquad \\text{Dette publique} \\leqslant 70\\%\\text{ du PIB}, \\qquad \\text{Inflation} \\leqslant 3\\%',
            note: 'La BCEAO veille en priorité à la stabilité des prix et à la couverture extérieure de la monnaie.',
          },
          {
            name: 'Règle de Taylor (pilotage du taux directeur par la Banque Centrale)',
            formula: 'i_t = r^* + \\pi_t + 0,5(\\pi_t - \\pi^*) + 0,5\\,(\\text{Output gap})',
            note: 'La Banque Centrale relève son taux directeur dès que l’inflation dépasse la cible π* ou que le PIB dépasse son potentiel.',
          },
        ],
        workedExample: {
          title: 'Choisir le policy mix optimal face à un choc conjoncturel en Côte d’Ivoire',
          statement:
            'Suite à un ralentissement mondial, les exportations ivoiriennes reculent, la croissance fléchit sous son potentiel et l’inflation reste modérée à $1,8\\%$ (sous le plafond UEMOA de $3\\%$). Parallèlement, l’État veut financer un vaste plan d’infrastructures numériques sans provoquer de hausse des taux d’intérêt qui freinerait les PME privées. Analyser le policy mix adapté.',
          methodSteps: [
            '1) Diagnostic : choc de demande négatif avec capacités disponibles et inflation maîtrisée ($1,8\\% < 3\\%$). Le chômage conjoncturel est de nature keynésienne.',
            '2) Action budgétaire seule ($\\Delta G > 0$) : déplace IS à droite, soutient le PIB $Y$, mais tend à faire monter $i$ (effet d’éviction sur les PME) et creuse le déficit public (à surveiller sous le seuil UEMOA de $3\\%$).',
            '3) Coordination avec la BCEAO (relance monétaire / accommodement modéré) : en assouplissant les conditions de refinancement bancaire (LM glisse à droite), la hausse du taux d’intérêt est contenue, évitant l’éviction des PME privées tout en maintenant l’inflation sous $3\\%$.',
          ],
          conclusion:
            'Un policy mix modérément expansionniste et ciblé sur l’investissement productif (infrastructures digitales) soutient la croissance immédiate tout en élevant le PIB potentiel de long terme.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Politique budgétaire',
            stepTheme: 'UEMOA & Ricardo-Barro',
            stepTitle: 'Stabilisateurs automatiques, soutenabilité UEMOA et équivalence ricardienne',
            paragraphText:
              'La **politique budgétaire** utilise le budget de l’État ($G$ et $T$) pour lisser les cycles économiques, mais elle se heurte à la contrainte de la dette publique.\n' +
              '• **Stabilisateurs automatiques vs discrétionnaire** : même sans nouvelle loi, en récession, les recettes fiscales (TVA, impôt sur les sociétés) baissent et les aides sociales augmentent, amortissant mécaniquement la chute du revenu. La politique **discrétionnaire** y ajoute des plans de relance ou de rigueur votés.\n' +
              '• **Règles UEMOA** : pour éviter le surendettement en union monétaire, les États membres visent un déficit global $\\leqslant 3\\%$ du PIB et un encours de dette publique $\\leqslant 70\\%$ du PIB.\n' +
              '• **Équivalence ricardienne (Barro, 1974)** : si les ménages sont rationnels à horizon infini, ils savent qu’une baisse d’impôt financée par emprunt devra être remboursée par des impôts futurs $\\implies$ ils épargnent ce gain au lieu de le consommer ($k_T \\approx 0$ !).',
            formula: {
              name: 'Dynamique du ratio dette publique / PIB',
              formula: '\\Delta b_t = \\frac{i - g}{1 + g}\\,b_{t-1} - s_{\\text{primaire}} \\qquad \\text{avec } b = \\frac{\\text{Dette}}{\\text{PIB}}',
              note: 'Effet boule de neige : si le taux d’intérêt réel i dépasse la croissance g (i > g), il faut un excédent primaire pour stabiliser la dette !',
            },
            keyRule:
              'Pour que la dette publique reste soutenable sans excédent primaire massif, il faut que la croissance nominale $g$ reste supérieure ou proche du coût de la dette $i$ et que les dépenses financent des investissements productifs.',
            konanTip:
              'En pratique, l’équivalence ricardienne est imparfaite (contraintes de liquidité des ménages, myopie, générations finies), mais elle explique pourquoi les ménages épargnent une partie des baisses d’impôts temporaires.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p3_q1',
              type: 'mcq',
              prompt:
                'Selon le théorème de l’**équivalence ricardienne** (Barro-Ricardo), que font les ménages lorsque l’État réduit les impôts aujourd’hui en finançant cette baisse par de l’emprunt public ?',
              options: [
                'Ils consomment $100\\%$ de cette baisse d’impôts dès le premier mois',
                'Ils épargnent intégralement ce surplus de revenu disponible en prévision des hausses d’impôts futures nécessaires au remboursement de la dette, rendant la relance fiscale inefficace',
                'Ils exigent immédiatement une baisse du taux directeur de la Banque Centrale',
                'Ils réduisent leur épargne à zéro pour acheter des biens importés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour Barro et Ricardo, dette aujourd’hui = impôts futurs actualisés : des contribuables parfaitement rationnels et altruistes envers leurs descendants épargnent l’intégralité de la baisse d’impôts financée par déficit, annulant le multiplicateur fiscal.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'BCEAO & UEMOA',
            stepTheme: 'Politique monétaire',
            stepTitle: 'Mandat de stabilité des prix, taux directeurs et spécificités de la BCEAO',
            paragraphText:
              'Contrairement à la politique budgétaire gérée par chaque État (Côte d’Ivoire, Sénégal, etc.), la **politique monétaire** de l’UEMOA est **supranationale** et conduite de manière indépendante par la **BCEAO** (Banque Centrale des États de l’Afrique de l’Ouest).\n' +
              '• **Mandat prioritaire** : garantir la **stabilité des prix** (cible d’inflation annuelle $\\leqslant 3\\%$) et assurer la parité fixe entre le Franc CFA et l’Euro tout en soutenant, sans compromettre ce mandat, les économies de l’Union.\n' +
              '• **Outils opérationnels de la BCEAO** : (1) le **taux minimum de soumission aux appels d’offres** (principal taux directeur) et le **taux du guichet de prêt marginal** ; (2) le coefficient de **réserves obligatoires** imposé aux banques commerciales ; (3) l’injection ou la reprise de liquidités sur le marché interbancaire.',
            keyRule:
              'En union monétaire (UEMOA), la politique monétaire est **unique** (fixée par la BCEAO pour les 8 pays), tandis que les politiques budgétaires restent **nationales** (sous contrainte des critères de convergence).',
            konanTip:
              'Pourquoi la Banque Centrale est-elle indépendante du pouvoir politique ? Pour éviter le biais inflationniste à la veille des élections (problème d’incohérence temporelle mis en évidence par Kydland et Prescott) !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p3_q2',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal assigné en priorité à la BCEAO dans la conduite de la politique monétaire au sein de l’UEMOA ?',
              options: [
                'Financer directement l’intégralité des déficits budgétaires nationaux par création monétaire illimitée',
                'Assurer la stabilité des prix (maîtrise de l’inflation) et la stabilité de la monnaie commune',
                'Fixer le montant des salaires dans le secteur privé de chaque pays',
                'Supprimer les réserves obligatoires des banques commerciales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À l’instar des banques centrales modernes (BCE, Fed), le mandat prioritaire de la BCEAO est la stabilité des prix et de la monnaie, condition indispensable à une croissance durable.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Canaux transmission',
            stepTheme: 'Du taux au PIB',
            stepTitle: 'Les quatre canaux de transmission de la politique monétaire vers l’économie réelle',
            paragraphText:
              'Comment une décision prise au siège de la BCEAO (ex. baisser le taux directeur de $-0,50$ point) finit-elle par créer des emplois et influencer le PIB plusieurs trimestres plus tard ? Par **quatre canaux complémentaires**.\n' +
              '• **1. Canal du taux d’intérêt** : $i_{\\text{dir}} \\downarrow \\implies$ coût du crédit baisse $\\implies I \\uparrow$ et consommation de biens durables $\\uparrow$.\n' +
              '• **2. Canal du crédit bancaire** : les réserves des banques augmentent, l’offre de prêts aux PME et startups s’élargit (desserrement du rationnement du crédit).\n' +
              '• **3. Canal du prix des actifs (q de Tobin / effet richesse)** : la baisse des taux valorise les actions et l’immobilier, encourageant l’investissement et la consommation.\n' +
              '• **4. Canal du taux de change** (en régime de change flexible) : $i\\downarrow \\implies$ sorties de capitaux $\\implies$ dépréciation de la monnaie $\\implies X\\uparrow$.',
            keyRule:
              'En zone UEMOA (taux de change fixe FCFA/Euro), le canal du taux de change vis-à-vis de l’Euro est inopérant : la politique monétaire agit surtout via les **canaux du taux d’intérêt et du crédit bancaire**.',
            konanTip:
              'N’oublie jamais les **délais de transmission** : la politique budgétaire a un délai de décision politique long mais un impact rapide sur le PIB ; la politique monétaire décide vite mais met $12$ à $18$ mois pour diffuser pleinement ses effets.',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p3_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces mécanismes correspond au **canal du crédit** (ou bilan bancaire) de la transmission monétaire ?',
              options: [
                'Une baisse du taux directeur augmente les liquidités disponibles des banques commerciales et la valeur des garanties des PME, les incitant à accorder davantage de prêts',
                'L’État augmente directement les salaires des fonctionnaires',
                'La dévaluation brutale du FCFA double le prix des exportations',
                'Les ménages thésaurisent davantage sous forme de billets',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le canal du crédit souligne que l’assouplissement monétaire accroît la capacité de prêt des banques et renforce les bilans des emprunteurs (PME), réduisant la prime de financement externe.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Policy Mix',
            stepTheme: 'Coordination IS + LM',
            stepTitle: 'Combiner budgétaire et monétaire : les quatre configurations du Policy Mix',
            paragraphText:
              'Le **policy mix** désigne l’articulation entre la politique budgétaire (gouvernement, courbe IS) et la politique monétaire (Banque Centrale, courbe LM). Selon la conjoncture, quatre combinaisons classiques apparaissent.\n' +
              '• **Relance coordonnée ($G\\uparrow + M\\uparrow$)** : double déplacement à droite de IS et LM ⇒ forte hausse de $Y^*$ avec taux d’intérêt $i^*$ stable (zéro éviction !).\n' +
              '• **Rigueur coordonnée ($G\\downarrow + M\\downarrow$)** : freine une surchauffe inflationniste.\n' +
              '• **Mix expansion budgétaire / rigueur monétaire ($G\\uparrow + M\\downarrow$, ex. Reagan-Volcker 1981)** : hausse explosive de $i^*$, forte éviction de l’investissement privé et appréciation du change.\n' +
              '• **Mix rigueur budgétaire / soutien monétaire ($G\\downarrow + M\\uparrow$, ex. consolidation des années 1990)** : réduit le déficit public tout en abaissant $i^*$ pour soutenir l’investissement privé ! La matrice ci-dessous résume ces 4 scénarios.',
            keyRule:
              'Pour consolider les finances publiques ($G\\downarrow$ ou $T\\uparrow$) **sans casser la croissance**, le policy mix idéal consiste à accompagner l’austérité budgétaire d’une **politique monétaire accommodante** ($M\\uparrow, i\\downarrow$) !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Matrice des 4 configurations du Policy Mix (IS-LM)',
              caption: 'Combinaison de l’orientation budgétaire (IS) et monétaire (LM) et effets sur le PIB Y*, le taux i* et l’investissement I*.',
              matrix2x2: {
                topAxis: ['Politique MONÉTAIRE Expansive (M↑ / i↓)', 'Politique MONÉTAIRE Restrictive (M↓ / i↑)'],
                leftAxis: ['BUDGÉTAIRE Expansive (G↑ / T↓)', 'BUDGÉTAIRE Restrictive (G↓ / T↑)'],
                topLeft: {
                  title: '1. Relance coordonnée',
                  color: 'green',
                  items: [
                    'IS à droite + LM à droite',
                    'PIB Y* ↑↑ très fortement, taux i* quasi stable',
                    'Zéro effet d’éviction ; risque inflationniste si proche de Y_PE',
                  ],
                },
                topRight: {
                  title: '2. Mix conflictuel (ex. 1981)',
                  color: 'orange',
                  items: [
                    'IS à droite + LM à gauche',
                    'Taux d’intérêt i* ↑↑ explose ; effet sur Y* ambigu',
                    'Forte éviction de I privé et appréciation du change',
                  ],
                },
                bottomLeft: {
                  title: '3. Désendettement soutenu',
                  color: 'blue',
                  items: [
                    'IS à gauche + LM à droite',
                    'Taux d’intérêt i* ↓↓ baisse fortement',
                    'L’investissement privé I* ↑ prend le relais de l’État',
                  ],
                },
                bottomRight: {
                  title: '4. Rigueur coordonnée',
                  color: 'violet',
                  items: [
                    'IS à gauche + LM à gauche',
                    'PIB Y* ↓↓ recule fortement, taux i* stable',
                    'Utilisée pour casser une surchauffe ou une crise inflationniste',
                  ],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p3_q4',
              type: 'mcq',
              prompt:
                'Un gouvernement doit réduire son déficit budgétaire ($\\Delta G < 0$) pour respecter les critères de convergence, mais craint une récession. Quel accompagnement monétaire la Banque Centrale doit-elle adopter pour soutenir le PIB et l’investissement privé ?',
              options: [
                'Relever brutalement ses taux directeurs pour renforcer la rigueur',
                'Mener une politique monétaire accommodante (baisse des taux / hausse de liquidité) afin que la baisse de $i^*$ stimule l’investissement privé $I^*$',
                'Augmenter le taux de réserves obligatoires des banques',
                'Interdire l’accès au crédit aux entreprises privées',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans le quadrant (Budgétaire restrictive + Monétaire expansive), le recul de IS est compensé par le glissement à droite de LM : le taux d’intérêt baisse nettement, ce qui relance l’investissement privé et amortit le choc récessif.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Triangle de Mundell',
            stepTheme: 'Économie ouverte',
            stepTitle: 'Le triangle d’incompatibilité de Mundell et les contraintes du régime de change fixe',
            paragraphText:
              'En économie ouverte, Robert Mundell (prix Nobel 1999) démontre qu’un pays ou une union monétaire ne peut **jamais** réunir simultanément ces trois objectifs : (1) un **taux de change fixe** ; (2) la **libre circulation des capitaux** ; (3) une **politique monétaire autonome**.\n' +
              '• **Preuve intuitive** : si le taux de change est fixe (ex. $1\\text{ EUR} = 655,957\\text{ FCFA}$) et que les capitaux circulent librement, baisser le taux d’intérêt local bien en dessous du taux européen déclencherait une fuite massive des capitaux vers l’Euro, épuisant les réserves de change et menaçant la parité !\n' +
              '• **Application à la zone UEMOA** : en choisissant la **stabilité du change fixe** (arrimage à l’Euro) et l’ouverture financière progressive, la zone renonce à une autonomie monétaire totale — ce qui renforce le rôle des **politiques budgétaires nationales** (avec discipline) et de la compétitivité-coût.',
            formula: {
              name: 'Modèle Mundell-Fleming : efficacité comparée selon le régime de change (capitaux mobiles)',
              formula: '\\text{Change FIXE} \\implies \\text{Budgétaire EFFICACE, Monétaire INEFFICACE} ; \\quad \\text{Change FLEXIBLE} \\implies \\text{Monétaire EFFICACE}',
              note: 'En change fixe avec mobilité parfaite des capitaux, toute création monétaire fuit à l’étranger pour défendre la parité.',
            },
            keyRule:
              'Triangle de Mundell : on ne peut choisir au maximum que **2 sommets sur 3** parmi *Change fixe*, *Mobilité des capitaux* et *Autonomie monétaire*.',
            konanTip:
              'Note pourquoi la BCEAO conserve des réserves de change centralisées et une réglementation des mouvements de capitaux extra-UEMOA : cela préserve précisément une marge d’autonomie monétaire tout en garantissant la parité fixe !',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p3_q5',
              type: 'mcq',
              prompt:
                'D’après le **triangle d’incompatibilité de Mundell**, quelles sont les trois propriétés dont au plus deux peuvent être obtenues simultanément ?',
              options: [
                'Croissance du PIB, plein emploi et équilibre budgétaire',
                'Taux de change fixe, libre circulation des capitaux et autonomie de la politique monétaire',
                'Inflation nulle, déficit nul et exportations illimitées',
                'Taux d’intérêt bas, salaires élevés et épargne maximale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le trilemme de Mundell établit l’incompatibilité entre fixité du change, mobilité parfaite des capitaux et indépendance monétaire (le modèle Mundell-Fleming montre qu’en change fixe et capitaux mobiles, le taux domestique doit s’aligner sur le taux étranger).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Stratégie ENTD',
            stepTheme: 'Chocs & Digitalisation',
            stepTitle: 'Articuler politiques conjoncturelles et transformation digitale pour une croissance durable',
            paragraphText:
              'Comment synthétiser l’ensemble du programme face aux défis d’une économie émergente comme la Côte d’Ivoire ? En reliant stabilisation de **court terme** et croissance potentielle de **long terme**.\n' +
              '• **Court terme (IS-LM et Phillips)** : face à un choc conjoncturel négatif, éviter les coupes pro-cycliques dans l’investissement public, activer les stabilisateurs automatiques et coordonner la relance avec la BCEAO sans franchir les plafonds UEMOA ($3\\%$ déficit, $3\\%$ inflation).\n' +
              '• **Long terme (Offre & Économie Numérique)** : les infrastructures télécoms, le Mobile Money (qui accroît le multiplicateur monétaire $m$ en réduisant $b$ et inclut financièrement les PME), l’e-gouvernement (élargissement de l’assiette fiscale et baisse de la fraude) et le capital humain élèvent la productivité globale des facteurs et déplacent la courbe d’offre vers la droite !',
            keyRule:
              'Une bonne politique économique ne se contente pas de lisser le cycle (demande de court terme) : elle oriente la dépense publique vers des **investissements productifs et numériques** qui augmentent le PIB potentiel $Y_{PE}$ et réduisent le NAIRU $u_n$.',
            konanTip:
              'En dissertation ou étude de cas d’examen, structure toujours ta recommandation en trois étages : (1) Diagnostic du choc (offre vs demande, classique vs keynésien) ; (2) Policy mix de court terme (IS-LM, UEMOA) ; (3) Réformes structurelles de long terme (productivité, formation, numérique).',
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch5_p3_q6',
              type: 'mcq',
              prompt:
                'Pourquoi le développement des paiements numériques (Mobile Money, banque digitale) et de l’e-administration fiscale renforce-t-il simultanément la politique monétaire et la politique budgétaire ?',
              options: [
                'Il augmente le taux de préférence pour les billets $b$ et supprime les recettes fiscales',
                'Il accroît l’inclusion financière et bancarise les dépôts (baisse de $b \\implies$ meilleure transmission monétaire) tout en élargissant l’assiette fiscale et en améliorant la productivité',
                'Il supprime totalement le besoin d’une Banque Centrale',
                'Il impose un taux de change flexible immédiat vis-à-vis de toutes les devises',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La digitalisation des paiements réduit la détention d’espèces ($b$ baisse, multiplicateur $m$ augmente, canal du crédit élargi) tandis que la numérisation fiscale sécurise les recettes publiques ($T$) et soutient la productivité de long terme.',
            },
          },
        ],
      }),
    ],
  },
];
