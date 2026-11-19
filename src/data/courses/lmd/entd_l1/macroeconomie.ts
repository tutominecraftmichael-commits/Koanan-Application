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
  // CHAPITRE 1 : CIRCUIT ÉCONOMIQUE, AGRÉGATS ET MESURE DE L'ACTIVITÉ (MACRO 1)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch1',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: "Chapitre 1 : Circuit économique, agrégats et mesure de l'activité (Macro 1)",
    summary:
      "Maîtriser le circuit économique, l'équilibre emplois-ressources, les trois optiques du PIB (nominal/réel/déflateur), le PNB, l'IPC/inflation et les indicateurs du marché du travail.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch1_p1',
        order: 1,
        title: 'Circuit économique, opérations et équilibre emplois-ressources',
        summary:
          "Démarche macroéconomique (positive vs normative), comptabilité nationale, 3 catégories d'opérations et identité d'équilibre emplois-ressources.",
        conceptExplanation:
          "La macroéconomie étudie le fonctionnement global de l'économie à travers des grandeurs agrégées (PIB, consommation, investissement, inflation, chômage) afin de comprendre les cycles et guider les politiques économiques. Elle distingue l'analyse positive (décrire et expliquer scientifiquement les faits sans jugement de valeur) de l'analyse normative (prescrire ce que l'économie devrait être selon des choix de valeurs).\n\nLa comptabilité nationale donne une représentation chiffrée du circuit économique reliant les 6 secteurs institutionnels (Ménages, SNF, SF, APu, ISBLSM, RDM) à travers trois types d'opérations :\n1. Opérations sur biens et services : ressources = Production (P) + Importations (M) ; emplois = Consommation Intermédiaire (CI) + Consommation Finale (CF) + Formation Brute de Capital Fixe (FBCF) + Variations de Stocks (ΔS) + Exportations (X).\n2. Opérations de répartition : partage des revenus (salaires, revenus du capital), prélèvements obligatoires par l'État et redistribution.\n3. Opérations financières : relations de créances/dettes entre Agents à Capacité de Financement (ACF) et Agents à Besoin de Financement (ABF).\n\nÀ l'équilibre emplois-ressources (en produits finaux, hors CI) : P + M = C + FBCF + X + ΔS, ce qui donne Production nationale = Dépense interne + Solde externe (X − M).",
        keyRule:
          "Retiens l'identité comptable fondamentale : Ressources (P + M) = Emplois (CI + CF + FBCF + ΔS + X). Les opérations financières relient toujours les ACF aux ABF.",
        formulas: [
          {
            name: 'Équilibre emplois-ressources (biens finaux)',
            formula: 'P + M = C + FBCF + X + ΔS  ⇔  P = C + I + (X − M)',
            note: 'Offre globale (P + M) = Demande globale ; Production = Dépense interne + Solde externe.',
          },
          {
            name: 'Rôle des opérations financières',
            formula: 'ACF (excédent d’épargne)  →  Créances/Dettes  →  ABF (besoin de financement)',
            note: 'Complète les opérations sur biens/services et les opérations de répartition.',
          },
        ],
        workedExample: {
          title: 'Vérifier l’équilibre emplois-ressources d’une économie ouverte',
          statement:
            "Dans une économie nationale (en milliards FCFA), on observe : Consommation finale C = 6 000, FBCF = 1 800, Variation de stocks ΔS = +200, Exportations X = 2 500 et Importations M = 2 100. Calculez le solde externe et la production finale (PIB).",
          methodSteps: [
            'Calcul du solde externe : X − M = 2 500 − 2 100 = +400 milliards FCFA (excédent commercial).',
            'Calcul de l’investissement total : I = FBCF + ΔS = 1 800 + 200 = 2 000 milliards FCFA.',
            'Application de l’équilibre emplois-ressources : P = C + I + (X − M) = 6 000 + 2 000 + 400 = 8 400 milliards FCFA.',
            'Vérification : Ressources (P + M = 8 400 + 2 100 = 10 500) = Emplois (6 000 + 1 800 + 200 + 2 500 = 10 500).',
          ],
          conclusion:
            'La production finale s’élève à 8 400 milliards FCFA et l’égalité Ressources = Emplois est rigoureusement vérifiée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Méthode',
            stepTheme: 'Positive vs Normative',
            stepTitle: 'Distinguer analyse macroéconomique positive et normative',
            paragraphText:
              "L'économie positive analyse le monde tel qu'il est de façon objective et scientifique (ex. mesurer l'effet d'une hausse des dépenses publiques sur le PIB). L'économie normative définit le monde tel qu'il devrait être en formulant des recommandations fondées sur des jugements de valeur.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q1',
              type: 'mcq',
              prompt:
                "Laquelle de ces propositions relève de l'analyse économique NORMATIVE plutôt que positive ?",
              options: [
                'Une hausse du taux d’intérêt réduit généralement l’investissement privé',
                "L'État devrait taxer davantage les plateformes numériques pour financer des bourses étudiantes",
                'Le PIB nominal est calculé aux prix courants de l’année en cours',
                'Le taux de chômage se calcule en rapportant les chômeurs à la population active',
              ],
              correctAnswerIndex: 1,
              explanation:
                "Le verbe « devrait » exprime une prescription fondée sur un jugement de valeur : c'est une proposition normative.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Opérations',
            stepTheme: 'Comptabilité nationale',
            stepTitle: 'Les trois catégories d’opérations entre agents économiques',
            paragraphText:
              "La comptabilité nationale regroupe l'ensemble des flux économiques en trois familles : les opérations sur biens et services (création et utilisation des produits), les opérations de répartition (revenus primaires, impôts, transferts) et les opérations financières (créances/dettes entre ACF et ABF).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Entre quels types d’agents s’effectuent les opérations financières en comptabilité nationale ?',
              options: [
                'Uniquement entre les ménages et les administrations publiques',
                'Uniquement entre les importateurs et les douanes',
                'Entre les Agents à Capacité de Financement (ACF) et les Agents à Besoin de Financement (ABF)',
                'Uniquement entre les entreprises agricoles',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les opérations financières couvrent le financement des ABF par les excédents des ACF à travers des créances et dettes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Emplois',
            stepTheme: 'Biens et services',
            stepTitle: 'Distinguer CI, CF, FBCF, ΔS et X',
            paragraphText:
              "Un produit issu de la production (P) ou des importations (M) a cinq emplois possibles : Consommation Intermédiaire (CI : incorporée/détruite dans la production), Consommation Finale (CF), Formation Brute de Capital Fixe (FBCF : investissement matériel et logiciels ; pour les ménages, limitée à l'achat de logements), Variation de Stocks (ΔS, pouvant être négative en cas de déstockage) et Exportations (X).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q3',
              type: 'mcq',
              prompt:
                "En comptabilité nationale, à quel type d'achat est limitée la FBCF (investissement) des ménages ?",
              options: [
                "À l'achat de logements",
                "À l'achat de produits alimentaires",
                "À l'achat de vêtements et chaussures",
                "À l'achat d'actions en bourse",
              ],
              correctAnswerIndex: 0,
              explanation:
                'En pratique, la FBCF des ménages se limite à l’acquisition de logements (les biens durables courants sont de la consommation finale).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Équilibre',
            stepTheme: 'Emplois-Ressources',
            stepTitle: "Appliquer l'identité emplois-ressources",
            paragraphText:
              "En biens finaux, l'égalité offre globale = demande globale s'écrit P + M = C + FBCF + ΔS + X, soit P = C + I + (X − M). Si X < M, le solde externe est déficitaire et les importations complètent la production nationale pour satisfaire la dépense interne.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans une économie où C = 400, I = 150, X = 120 et M = 170, quelle est la valeur de la production nationale P ?',
              options: ['670', '550', '840', '500'],
              correctAnswerIndex: 3,
              explanation:
                'P = C + I + (X − M) = 400 + 150 + (120 − 170) = 550 − 50 = 500.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Variation de stocks',
            stepTitle: 'Une variation de stocks (ΔS) peut être négative',
            paragraphText:
              "Contrairement à la FBCF ou à la consommation finale qui sont toujours positives, la variation de stocks (ΔS) peut être négative lorsqu'une économie puise dans ses stocks de l'année précédente (déstockage).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Que signifie économiquement une variation de stocks (ΔS) négative dans l’équilibre emplois-ressources ?',
              options: [
                'Les entreprises ont produit plus qu’elles n’ont vendu',
                'Les entreprises ont déstocké (vendu une partie de stocks constitués antérieurement)',
                'Les importations sont devenues nulles',
                'La comptabilité nationale contient une erreur de calcul',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une variation de stocks négative (ΔS < 0) traduit un déstockage : les ventes dépassent la production courante en puisant dans les stocks existants.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch1_p2',
        order: 2,
        title: 'Le PIB (3 optiques, nominal vs réel, déflateur) et le PNB',
        summary:
          "Calculer le PIB selon les optiques production, dépense et revenu, distinguer PIB nominal et réel, calculer le déflateur et relier PIB et PNB.",
        conceptExplanation:
          "Le Produit Intérieur Brut (PIB) mesure la valeur totale des biens et services finaux produits sur un territoire donné pendant une période donnée (an ou trimestre). Il se mesure selon trois optiques équivalentes :\n1. Optique production : PIB = Σ Valeurs Ajoutées + Impôts sur les produits − Subventions sur les produits.\n2. Optique dépense : PIB = C + FBCF + ΔS + X − M.\n3. Optique revenu : PIB = Rémunération des salariés + Excédent Brut d'Exploitation (EBE) + Revenu mixte + Impôts sur la production et importations − Subventions.\n\nPour mesurer la véritable croissance en volume, il faut distinguer :\n- PIB nominal (aux prix courants de l'année en cours) : Σ P_t · Q_t ;\n- PIB réel (en volume / aux prix constants de l'année de base 0) : Σ P_0 · Q_t.\nLe taux de croissance réel vaut [(PIB réel_t − PIB réel_{t-1}) / PIB réel_{t-1}] × 100. Le déflateur du PIB = (PIB nominal / PIB réel) × 100 mesure l'évolution générale des prix de la production intérieure.\n\nEnfin, le Produit National Brut (PNB) se déduit du PIB en ajoutant les revenus reçus du reste du monde et en retranchant les revenus versés au reste du monde : PNB = PIB + Revenus reçus du RDM − Revenus versés au RDM.",
        keyRule:
          "Le PIB nominal varie à la fois avec les prix et les quantités ; seul le PIB réel (aux prix constants d'une année de base) mesure la vraie croissance économique en volume.",
        formulas: [
          {
            name: 'PIB nominal, PIB réel et Déflateur',
            formula: 'PIB_nom = Σ P_t·Q_t  |  PIB_réel = Σ P_0·Q_t  |  Déflateur = (PIB_nom / PIB_réel) × 100',
            note: 'À l’année de base, PIB nominal = PIB réel et Déflateur = 100.',
          },
          {
            name: 'Relation PIB — PNB',
            formula: 'PNB = PIB + Revenus reçus du RDM − Revenus versés au RDM',
            note: 'L’écart PIB/PNB peut être important dans les pays en développement accueillant de nombreuses firmes étrangères.',
          },
        ],
        workedExample: {
          title: 'Calcul du PIB nominal, PIB réel et taux de croissance',
          statement:
            "Dans une économie, on produit en 2023 (année de base) : 100 biens A à 10 € et 150 biens B à 20 €. En 2024 : 110 biens A à 12 € et 160 biens B à 22 €. Calculez le PIB nominal 2023 et 2024, le PIB réel 2024, le taux de croissance réel et le déflateur 2024.",
          methodSteps: [
            'PIB nominal 2023 (= PIB réel 2023) = (100 × 10) + (150 × 20) = 1 000 + 3 000 = 4 000 €.',
            'PIB nominal 2024 = (110 × 12) + (160 × 22) = 1 320 + 3 520 = 4 840 €.',
            'PIB réel 2024 (aux prix 2023) = (110 × 10) + (160 × 20) = 1 100 + 3 200 = 4 300 €.',
            'Taux de croissance du PIB réel = [(4 300 − 4 000) / 4 000] × 100 = +7,5 %.',
            'Déflateur du PIB 2024 = (4 840 / 4 300) × 100 ≈ 112,56 (soit +12,56 % de hausse des prix).',
          ],
          conclusion:
            "Alors que le PIB nominal bondit de +21 %, la croissance réelle en volume est de +7,5 %, le reste provenant de l'inflation mesurée par le déflateur.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '3 optiques',
            stepTheme: 'Mesure du PIB',
            stepTitle: 'Les trois optiques de calcul du PIB',
            paragraphText:
              "Le PIB peut être calculé de trois manières équivalentes : l'optique production (somme des valeurs ajoutées + impôts nets de subventions sur les produits), l'optique dépense (C + FBCF + ΔS + X − M) et l'optique revenu (salaires + EBE + revenu mixte + impôts nets sur la production).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle formule correspond à la mesure du PIB selon l’optique de la dépense ?',
              options: [
                'PIB = Rémunération des salariés + EBE + Revenu mixte',
                'PIB = C + FBCF + ΔS + X − M',
                'PIB = Billets + Pièces + Dépôts à vue',
                'PIB = Exportations + Importations',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’optique dépense additionne la consommation finale (C), l’investissement (FBCF + ΔS) et le solde extérieur (X − M).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Volume vs Valeur',
            stepTheme: 'PIB réel vs nominal',
            stepTitle: 'Pourquoi le PIB réel est meilleur pour mesurer la croissance',
            paragraphText:
              "Le PIB nominal utilise les prix courants de l'année en cours : il peut augmenter uniquement à cause de l'inflation. Le PIB réel (en Francs CFA constants) fige les prix sur une année de base pour isoler la véritable variation des quantités produites.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Pourquoi les économistes utilisent-ils le PIB réel plutôt que le PIB nominal pour évaluer la croissance économique ?',
              options: [
                'Parce que le PIB réel exclut toujours les exportations',
                'Parce que le PIB nominal est impossible à calculer',
                'Parce que le PIB réel corrige l’effet de l’inflation en utilisant les prix constants d’une année de base',
                'Parce que le PIB réel ne compte que les salaires des fonctionnaires',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le PIB réel neutralise la hausse des prix afin de ne mesurer que l’évolution réelle du volume de production.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Calcul PIB réel',
            stepTitle: 'Calculer un PIB réel et son taux de croissance',
            paragraphText:
              "Pour calculer le PIB réel d'une année t, on multiplie les quantités produites en année t par les prix unitaires de l'année de base (0), puis on calcule le taux de croissance : (PIB réel_t − PIB réel_0) / PIB réel_0 × 100.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q3',
              type: 'mcq',
              prompt:
                "Avec 2023 base : 100 A à 10 € et 150 B à 20 € ; 2024 : 110 A à 12 € et 160 B à 22 €, quel est le PIB réel de 2024 ?",
              options: ['4 300 €', '4 840 €', '4 000 €', '5 100 €'],
              correctAnswerIndex: 0,
              explanation:
                'PIB réel 2024 = (110 × 10) + (160 × 20) = 1 100 + 3 200 = 4 300 € (aux prix constants de 2023).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Déflateur',
            stepTheme: 'Niveau des prix',
            stepTitle: 'Calcul et interprétation du déflateur du PIB',
            paragraphText:
              "Le déflateur du PIB se définit comme le rapport (PIB nominal / PIB réel) × 100. Il mesure le niveau moyen des prix de l'ensemble des biens et services produits sur le territoire par rapport à l'année de base (où il vaut 100).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Si le PIB nominal d’un pays vaut 5 500 milliards FCFA et son PIB réel vaut 5 000 milliards FCFA, quelle est la valeur du déflateur du PIB ?',
              options: ['90,9', '105', '100', '110'],
              correctAnswerIndex: 3,
              explanation:
                'Déflateur = (5 500 / 5 000) × 100 = 110, ce qui traduit une hausse de 10 % du niveau général des prix depuis l’année de base.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'PIB vs PNB',
            stepTheme: 'Revenus de facteurs',
            stepTitle: 'Passer du PIB au PNB',
            paragraphText:
              "La formule de passage est : PNB = PIB + revenus reçus du RDM − revenus versés au RDM. Dans les pays en développement où les entreprises étrangères rapatrient d'importants bénéfices vers l'étranger (revenus versés > revenus reçus), le PNB est souvent sensiblement inférieur au PIB.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Si un pays a un PIB de 45 000 Mds FCFA, reçoit 1 200 Mds FCFA de revenus du RDM et verse 3 200 Mds FCFA au RDM, quel est son PNB ?',
              options: [
                '47 000 Mds FCFA',
                '43 000 Mds FCFA',
                '49 400 Mds FCFA',
                '45 000 Mds FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PNB = 45 000 + 1 200 − 3 200 = 43 000 Mds FCFA.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch1_p3',
        order: 3,
        title: "Inflation (IPC) et indicateurs du marché du travail",
        summary:
          "Calculer l'Indice des Prix à la Consommation (IPC), le taux d'inflation, et maîtriser taux de chômage, taux d'activité et taux d'emploi à partir des exercices de TD.",
        conceptExplanation:
          "Deux autres agrégats clés permettent de diagnostiquer la santé macroéconomique : l'inflation et le chômage.\n\n1. L'inflation est la hausse générale et continue du niveau général des prix. Elle se mesure couramment via l'Indice des Prix à la Consommation (IPC), qui suit le coût d'un panier fixe représentatif de la consommation des ménages :\nIPC_t = (Coût du panier en t / Coût du panier année de base) × 100.\nLe taux d'inflation entre t−1 et t vaut : π_t = [(IPC_t − IPC_{t-1}) / IPC_{t-1}] × 100.\n\n2. Le marché du travail distingue la population totale, la population en âge de travailler (PAT), la population active (PA = Actifs occupés/Emploi + Chômeurs) et les inactifs (élèves, étudiants, retraités, personnes au foyer ne cherchant pas d'emploi).\nTrois taux sont fondamentaux :\n- Taux de chômage = (Chômeurs / Population active) × 100 ;\n- Taux d'activité (ou de participation) = (Population active / Population en âge de travailler) × 100 ;\n- Taux d'emploi = (Personnes en emploi / Population en âge de travailler) × 100.\nOn distingue le chômage frictionnel (transition entre deux emplois), structurel (inadéquation des qualifications) et conjoncturel (ralentissement de l'activité).",
        keyRule:
          "Piège classique d'examen : le taux de chômage se divise par la Population ACTIVE (occupés + chômeurs), jamais par la population totale ni par la population en âge de travailler !",
        formulas: [
          {
            name: 'IPC et Taux d’inflation',
            formula: 'IPC_t = (Coût panier_t / Coût panier_0) × 100   |   π_t = [(IPC_t − IPC_{t-1}) / IPC_{t-1}] × 100',
            note: 'Mesure l’évolution du coût de la vie pour les ménages.',
          },
          {
            name: 'Ratios du marché du travail',
            formula: 'u = Chômeurs / PA   |   Taux d’activité = PA / PAT   |   Taux d’emploi = Emploi / PAT',
            note: 'Avec PA (Population active) = Emploi + Chômeurs et PAT = PA + Inactifs en âge de travailler.',
          },
        ],
        workedExample: {
          title: 'Calcul de l’IPC et des taux du marché du travail',
          statement:
            "A) Panier 2023 : 50 pains (2 € -> 2,2 € en 2024), 30 laits (1,5 € -> 1,8 €), 10 locations voiture (150 € -> 160 €). Calculez l'IPC 2024.\nB) Économie de 1 000 personnes : 800 en âge de travailler, dont 650 travaillent, 50 cherchent un emploi et 100 sont inactives. Calculez les trois taux.",
          methodSteps: [
            'Coût du panier 2023 = (50 × 2) + (30 × 1,5) + (10 × 150) = 100 + 45 + 1 500 = 1 645 €.',
            'Coût du panier 2024 = (50 × 2,2) + (30 × 1,8) + (10 × 160) = 110 + 54 + 1 600 = 1 764 €.',
            'IPC 2024 = (1 764 / 1 645) × 100 ≈ 107,23 ⇒ taux d’inflation = +7,23 %.',
            'Population active PA = 650 + 50 = 700 personnes (les 100 inactives sont exclues de la PA).',
            'Taux de chômage = (50 / 700) × 100 ≈ 7,14 % ; Taux d’activité = (700 / 800) × 100 = 87,5 % ; Taux d’emploi = (650 / 800) × 100 = 81,25 %.',
          ],
          conclusion:
            'Le coût de la vie a augmenté de 7,23 % et le marché du travail affiche 7,14 % de chômage pour 87,5 % de participation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Inflation',
            stepTheme: 'IPC',
            stepTitle: 'Définition de l’inflation et rôle de l’IPC',
            paragraphText:
              "L'inflation est une hausse générale et continue du niveau général des prix. L'Indice des Prix à la Consommation (IPC) mesure l'évolution du coût d'un panier représentatif de biens et services consommés par les ménages.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q1',
              type: 'mcq',
              prompt: "Que mesure précisément l'Indice des Prix à la Consommation (IPC) ?",
              options: [
                'La variation des prix d’un panier représentatif de biens et services consommés par les ménages',
                'Le total des dépenses militaires de l’État',
                'Le bénéfice net des banques commerciales',
                'Le nombre d’entreprises créées dans l’année',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’IPC suit l’évolution du prix d’un panier fixe représentatif de la consommation des ménages pour mesurer l’inflation.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul IPC',
            stepTheme: 'Taux d’inflation',
            stepTitle: "Calculer le taux d'inflation à partir de l'IPC",
            paragraphText:
              "Connaissant l'IPC en année t−1 et en année t, le taux d'inflation vaut [(IPC_t − IPC_{t-1}) / IPC_{t-1}] × 100. Si l'IPC passe de 100 (année de base) à 107,23, l'inflation est de 7,23 %.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q2',
              type: 'mcq',
              prompt:
                "Si l'IPC d'un pays passe de 120 en 2023 à 126 en 2024, quel est le taux d'inflation entre 2023 et 2024 ?",
              options: ['6 %', '5 %', '4,76 %', '26 %'],
              correctAnswerIndex: 1,
              explanation:
                'π = [(126 − 120) / 120] × 100 = (6 / 120) × 100 = 5 %. Attention à ne pas faire simplement 126 − 120 = 6 % !',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Emploi',
            stepTheme: 'Population active',
            stepTitle: 'Qui appartient à la population active ?',
            paragraphText:
              "La population active regroupe les personnes occupant un emploi (salariés, indépendants) et les chômeurs (capables, disponibles et en recherche active d'emploi). Les étudiants, retraités, élèves et personnes au foyer ne cherchant pas d'emploi sont classés comme inactifs.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q3',
              type: 'mcq',
              prompt:
                "Lesquels de ces individus appartiennent à la population active ?",
              options: [
                'Un retraité et un élève de seconde',
                'Une mère au foyer ne cherchant pas d’emploi et un étudiant en master',
                'Un salarié et un chômeur en recherche active d’emploi',
                'Tous les habitants d’un pays dès la naissance',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La population active = Emploi (salariés/indépendants) + Chômeurs. Étudiants, élèves, retraités et personnes au foyer sont inactifs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Taux de chômage',
            stepTitle: "Calculer taux de chômage et taux d'activité",
            paragraphText:
              "Avec 800 personnes en âge de travailler : 650 en emploi, 50 chômeurs, 100 inactifs, la population active vaut 650 + 50 = 700. Donc taux de chômage = 50 / 700 ≈ 7,14 % et taux d'activité = 700 / 800 = 87,5 %.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Dans une économie comptant 1 000 personnes en âge de travailler, dont 720 occupent un emploi, 80 sont au chômage et 200 sont inactives, quel est le taux de chômage ?',
              options: ['8 %', '11,1 %', '20 %', '10 %'],
              correctAnswerIndex: 3,
              explanation:
                'Population active = 720 + 80 = 800. Taux de chômage = (80 / 800) × 100 = 10 %.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Typologie',
            stepTheme: 'Types de chômage',
            stepTitle: 'Frictionnel, structurel et conjoncturel',
            paragraphText:
              "Le chômage frictionnel est court et lié aux transitions normales entre deux emplois ; le chômage structurel vient d'une inadéquation durable des qualifications ou rigidités du marché ; le chômage conjoncturel (keynésien) résulte d'une insuffisance temporaire de la demande globale en période de récession.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Un chômage causé par un ralentissement brutal de la demande globale pendant une récession économique est qualifié de :',
              options: [
                'Chômage frictionnel',
                'Chômage conjoncturel',
                'Chômage volontaire de transition',
                'Chômage déflationniste de base',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le chômage conjoncturel est directement lié aux fluctuations de la conjoncture (récession / insuffisance de demande).',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : CONSOMMATION, INVESTISSEMENT ET MODÈLE KEYNÉSIEN (MACRO 1 & 2)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch2',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Consommation, investissement et modèle keynésien',
    summary:
      "Maîtriser la fonction de consommation keynésienne, Friedman et Modigliani, les critères VAN/TRI et l'accélérateur d'investissement, ainsi que l'équilibre keynésien et les multiplicateurs.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Macro 1 & Macro 2 Dr Assandé KADJO',
    points: [
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch2_p1',
        order: 1,
        title: 'Fonctions de consommation : Keynes, Friedman et Modigliani',
        summary:
          "Loi psychologique fondamentale de Keynes (C = cYd + C0), PMC/PmC/épargne, revenu permanent (Friedman) et cycle de vie (Modigliani-Brumberg).",
        conceptExplanation:
          "La consommation est l'usage d'un bien ou service pour satisfaire un besoin (finale vs intermédiaire, individuelle vs collective).\n\n1. Approche keynésienne : selon la loi psychologique fondamentale de J.M. Keynes, lorsque le revenu disponible (Y_d) augmente, la consommation augmente, mais moins que proportionnellement : C = c·Y_d + C_0 avec 0 < c < 1 et C_0 > 0 (consommation autonome/incompressible).\n- Propension marginale à consommer : PmC = c = ΔC / ΔY_d (pente de la droite) ;\n- Propension moyenne à consommer : PMC = C / Y_d = c + C_0 / Y_d (décroît quand Y_d augmente) ;\n- Épargne (résidu chez Keynes) : S = Y_d − C = (1 − c)Y_d − C_0 = s·Y_d − C_0, avec PmS = s = 1 − c et PMC + PMS = 1.\n\n2. Fondements microéconomiques (l'épargne est une consommation différée) :\n- Théorie du revenu permanent (Milton Friedman, 1957) : la consommation dépend du revenu permanent Y_p (revenu moyen anticipé à long terme) et non du revenu transitoire Y_t (Y = Y_p + Y_t), avec C_p = k·Y_p.\n- Théorie du cycle de vie (Modigliani & Brumberg) : les ménages lissent leur consommation sur toute leur vie (emprunt/désépargne jeune -> épargne en activité -> désépargne à la retraite).",
        keyRule:
          "Chez Keynes : C = cYd + C0 (0 < c < 1), PMC > PmC tant que C0 > 0, et PmC + PmS = 1. Chez Friedman : on consomme selon son revenu permanent Yp = Y − Yt.",
        formulas: [
          {
            name: 'Fonction de consommation et d’épargne keynésienne',
            formula: 'C = c·Y_d + C_0   |   S = (1 − c)Y_d − C_0   |   PMC = c + C_0/Y_d',
            note: '0 < c < 1 ; PmC + PmS = 1 et PMC + PMS = 1.',
          },
          {
            name: 'Revenu permanent (Friedman, 1957)',
            formula: 'Y = Y_p + Y_t   ⇒   Y_p = Y − Y_t   |   C_p = k · Y_p',
            note: 'Si Y_t > 0 (gain temporaire), la PMC de court terme baisse sous k ; si Y_t < 0, elle dépasse k.',
          },
        ],
        workedExample: {
          title: 'Fonction keynésienne et revenu permanent',
          statement:
            "A) Soit C = 0,8Y + 100 (en Mds €). Calculez la PmC, la consommation pour Y = 1 400 et le PIB Y pour C = 1 000.\nB) Selon Friedman (PMC de long terme k = 0,8), calculez Y_p et C_p pour Y = 700 et Y_t = −100.",
          methodSteps: [
            'A1) PmC = c = 0,8 (pente de la droite) ; C_0 = 100 représente la consommation incompressible (autonome) même si Y = 0.',
            'A2) Pour Y = 1 400 : C = 0,8(1 400) + 100 = 1 120 + 100 = 1 220 Mds € (PMC = 1 220 / 1 400 ≈ 0,871).',
            'A3) Pour C = 1 000 : 1 000 = 0,8Y + 100 ⇒ 0,8Y = 900 ⇒ Y = 1 125 Mds €.',
            'B) Y = Y_p + Y_t ⇒ Y_p = Y − Y_t = 700 − (−100) = 800 ; C_p = 0,8 × 800 = 640 (PMC de court terme = 640 / 700 ≈ 0,91 > 0,8 car Y_t < 0).',
          ],
          conclusion:
            "Le lissage de la consommation explique pourquoi la PMC observée à court terme grimpe au-dessus de la PMC de long terme lors d'une chute temporaire de revenu (Y_t < 0).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Keynes',
            stepTheme: 'Loi psychologique',
            stepTitle: 'La loi psychologique fondamentale de Keynes',
            paragraphText:
              "Keynes énonce que, lorsque le revenu augmente, les ménages accroissent leur consommation mais d'un montant inférieur à la hausse du revenu : la propension marginale à consommer vérifie 0 < c < 1, ce qui implique aussi que l'épargne augmente avec le revenu.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle inégalité fondamentale sur la propension marginale à consommer (c) découle de la loi psychologique de Keynes ?',
              options: ['c < 0', '0 < c < 1', 'c > 1', 'c = 0'],
              correctAnswerIndex: 1,
              explanation:
                'La consommation croît avec le revenu (c > 0) mais moins vite que le revenu (c < 1), donc 0 < c < 1.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'C = 0,8Y + 100',
            stepTitle: 'Lire et calculer avec C = cY + C0',
            paragraphText:
              "Dans C = 0,8Y + 100, 0,8 est la propension marginale à consommer (pente graphique de la fonction) et 100 est la consommation autonome (incompressible). Pour trouver Y connaissant C, on résout Y = (C − C_0) / c.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Avec la fonction de consommation C = 0,8Y + 100, quelle est la valeur du PIB Y lorsque la consommation vaut C = 1 000 ?',
              options: ['900', '1 250', '1 125', '1 000'],
              correctAnswerIndex: 2,
              explanation:
                '0,8Y + 100 = 1 000 ⇒ 0,8Y = 900 ⇒ Y = 900 / 0,8 = 1 125.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Épargne',
            stepTheme: 'PMC et PmS',
            stepTitle: 'Lien entre propensions à consommer et à épargner',
            paragraphText:
              "Tout franc de revenu disponible est soit consommé, soit épargné (Y_d = C + S). Par conséquent, PMC + PMS = 1 et PmC + PmS = 1. Si C = 0,75Y_d + 50, alors la fonction d'épargne est S = 0,25Y_d − 50.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Si la fonction de consommation est C = 0,75Y_d + 50, quelle est la fonction d’épargne S correspondante ?',
              options: [
                'S = 0,25Y_d − 50',
                'S = 0,25Y_d + 50',
                'S = 0,75Y_d − 50',
                'S = 1,75Y_d + 50',
              ],
              correctAnswerIndex: 0,
              explanation:
                'S = Y_d − C = Y_d − (0,75Y_d + 50) = 0,25Y_d − 50.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Friedman',
            stepTheme: 'Revenu permanent',
            stepTitle: 'Interpréter la PMC de court terme chez Milton Friedman',
            paragraphText:
              "Selon Milton Friedman (1957), C = k·Y_p avec Y = Y_p + Y_t. Si la PMC de long terme vaut 0,8 mais qu'on observe une PMC courante de 0,78 (< 0,8), cela signifie que Y > Y_p, donc le revenu transitoire Y_t est positif (l'excédent temporaire est épargné). Inversement, une PMC de 0,82 (> 0,8) révèle Y_t < 0.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Dans la théorie de Friedman (k = 0,8), si un ménage a un revenu disponible observé Y = 1 000 avec un revenu transitoire Y_t = +100, quelle est sa consommation permanente C_p ?',
              options: ['800', '880', '900', '720'],
              correctAnswerIndex: 3,
              explanation:
                'Y_p = Y − Y_t = 1 000 − 100 = 900 ; donc C_p = 0,8 × 900 = 720 (et PMC observée = 720/1000 = 0,72 < 0,8).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Modigliani',
            stepTheme: 'Cycle de vie',
            stepTitle: 'Lissage de la consommation sur le cycle de vie',
            paragraphText:
              "Modigliani et Brumberg montrent que les individus cherchent à maintenir un niveau de consommation stable tout au long de leur existence : ils empruntent/désépargnent jeunes, épargnent durant leur vie active pour accumuler un patrimoine, puis désépargnent à la retraite.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Selon la théorie du cycle de vie de Modigliani et Brumberg, quel est le comportement d’épargne d’un individu après la cessation d’activité (retraite) ?',
              options: [
                'Il maximise son taux d’épargne en accumulant du capital',
                'Il désépargne en puisant dans le patrimoine accumulé pour maintenir sa consommation',
                'Sa consommation tombe immédiatement à zéro',
                'Son revenu salarial double automatiquement',
              ],
              correctAnswerIndex: 1,
              explanation:
                "La retraite correspond à la phase de désépargne du cycle de vie afin de préserver un niveau de consommation stable.",
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch2_p2',
        order: 2,
        title: "Investissement : VAN, TRI et principe de l'accélérateur",
        summary:
          "Distinguer investissement brut/net/amortissement, évaluer un projet par la VAN et le TRI, et calculer l'investissement induit par l'accélérateur de Clark.",
        conceptExplanation:
          "En macroéconomie, l'investissement (I = FBCF + ΔStocks) accroît le stock de capital physique ou immatériel (il exclut les achats d'actions/obligations et la revente de biens anciens). On distingue :\n- Investissement net : I_n = K_t − K_{t-1} ;\n- Investissement de remplacement (amortissement) : A_t = δ·K_{t-1} ;\n- Investissement brut : I_b = I_n + A_t = (K_t − K_{t-1}) + δ·K_{t-1}.\n\nDécision d'investir (taux d'intérêt r = coût d'opportunité du capital) :\n1. Valeur Actuelle Nette (VAN) : VAN = Σ [RN_t / (1 + r)^t] + VR / (1 + r)^n − I_0. Le projet est rentable si VAN > 0.\n2. Taux de Rendement Interne (TRI ou ρ) : taux d'actualisation qui annule la VAN (efficacité marginale du capital). Le projet est rentable si TRI > r. Plus r baisse, plus le nombre de projets rentables augmente (I est une fonction décroissante de r).\n\n3. Principe de l'accélérateur (J.M. Clark, 1917) : une variation de la demande finale entraîne une variation plus que proportionnelle de l'investissement. Dans l'accélérateur fixe, K_t = v·Y_t (v ou α = coefficient de capital), d'où I_{nt} = v·(Y_t − Y_{t-1}) = v·ΔY_t.",
        keyRule:
          "Projet rentable ⇔ VAN > 0 ⇔ TRI > r. Pour l'accélérateur fixe : I_net = v·ΔY et I_brut = I_net + δ·K_{t-1}.",
        formulas: [
          {
            name: 'Investissement brut et net',
            formula: 'I_b = I_n + A_t = (K_t − K_{t-1}) + δ·K_{t-1}',
            note: 'δ est le taux de dépréciation (amortissement) du capital.',
          },
          {
            name: 'VAN et TRI',
            formula: 'VAN = Σ_{t=1}^n RN_t/(1+r)^t + VR/(1+r)^n − I_0   |   VAN(TRI) = 0',
            note: 'Décision : accepter si VAN > 0 ou TRI > taux d’intérêt r.',
          },
          {
            name: 'Accélérateur fixe de Clark',
            formula: 'K_t = v·Y_t   ⇒   I_{nt} = v·(Y_t − Y_{t-1}) = v·ΔY_t',
            note: 'v (ou α) = K/Y est le coefficient de capital.',
          },
        ],
        workedExample: {
          title: 'Critère du TRI et effet accélérateur',
          statement:
            "A) Cinq projets ont pour coûts (en FCFA) et TRI : P1 (75 000 ; 9 %), P2 (30 000 ; 11 %), P3 (50 000 ; 14 %), P4 (105 000 ; 10,5 %), P5 (80 000 ; 8 %). Quel montant investir si r = 10 % ?\nB) Dans une économie : v = 2,5, Y_t = 2 000, Y_{t-1} = 1 800, δ = 10 %, K_{t-1} = 4 000. Calculez I_net et I_brut.",
          methodSteps: [
            'A) Règle TRI > r (= 10 %) : seuls P2 (11 %), P3 (14 %) et P4 (10,5 %) sont rentables.',
            'Montant total investi à r = 10 % : 30 000 + 50 000 + 105 000 = 185 000 FCFA. (À r = 12 %, seul P3 est retenu : 50 000 FCFA.)',
            'B1) Variation du revenu : ΔY = 2 000 − 1 800 = 200 ⇒ Investissement net I_n = v·ΔY = 2,5 × 200 = 500.',
            'B2) Amortissement : A = δ·K_{t-1} = 0,10 × 4 000 = 400 ⇒ Investissement brut I_b = 500 + 400 = 900.',
          ],
          conclusion:
            'La hausse de r de 10 % à 12 % réduit l’investissement de 185 000 à 50 000 FCFA (relation décroissante), et l’accélérateur amplifie de 2,5 fois toute variation de la demande.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Capital',
            stepTheme: 'Brut vs Net',
            stepTitle: 'Investissement brut, net et amortissement',
            paragraphText:
              "L'investissement brut (I_b) englobe l'investissement net (I_n = K_t − K_{t-1}, accroissement réel du capital) et l'investissement de remplacement ou amortissement (A = δ·K_{t-1}, compensation de l'usure). L'achat d'actions en bourse n'est pas un investissement au sens macroéconomique.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Lequel de ces achats est EXCLU de la définition macroéconomique de l’investissement (I) ?',
              options: [
                "L'achat de nouvelles machines industrielles par une entreprise",
                'La construction d’un nouvel entrepôt logistique',
                "L'acquisition d'actions ou d'obligations sur le marché financier",
                'Les dépenses en logiciels professionnels',
              ],
              correctAnswerIndex: 2,
              explanation:
                "En macroéconomie, l'achat de titres financiers (actions, obligations) ou la revente d'actifs anciens sont des placements/transferts, pas une création de capital productif.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'VAN',
            stepTheme: 'Actualisation',
            stepTitle: 'Critère de la Valeur Actuelle Nette (VAN)',
            paragraphText:
              "La VAN compare la dépense initiale I_0 à la somme actualisée des recettes nettes futures : VAN = Σ RN_t / (1 + r)^t + VR / (1 + r)^n − I_0. Si VAN > 0, le projet crée de la valeur et est rentable ; entre deux projets exclusifs, on choisit la VAN la plus élevée.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Un projet coûte I_0 = 100 000 FCFA et rapporte une recette nette unique de 121 000 FCFA dans 2 ans. Au taux d’actualisation r = 10 %, quelle est sa VAN ?',
              options: ['0 FCFA', '+21 000 FCFA', '+10 000 FCFA', '−10 000 FCFA'],
              correctAnswerIndex: 0,
              explanation:
                'VAN = 121 000 / (1,10)² − 100 000 = 121 000 / 1,21 − 100 000 = 100 000 − 100 000 = 0 FCFA (le TRI vaut donc exactement 10 %).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'TRI ()',
            stepTheme: 'Taux d’intérêt',
            stepTitle: 'Utiliser le TRI face au taux d’intérêt de marché',
            paragraphText:
              "Le TRI (taux annulant la VAN) représente le taux d'intérêt maximal supportable par le projet. On retient tous les projets dont TRI > r. Avec P1=9 %, P2=11 %, P3=14 %, P4=10,5 %, P5=8 %, si r = 12 %, seul P3 (50 000 FCFA) reste rentable.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Soient les projets (P1 : 75 000 à 9 %, P2 : 30 000 à 11 %, P3 : 50 000 à 14 %, P4 : 105 000 à 10,5 %, P5 : 80 000 à 8 %). quel est le montant total investi si le taux d’intérêt vaut r = 10 % ?',
              options: ['50 000 FCFA', '185 000 FCFA', '260 000 FCFA', '340 000 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'Projets tels que TRI > 10 % : P2 (30 000) + P3 (50 000) + P4 (105 000) = 185 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Accélérateur',
            stepTheme: 'Modèle de Clark',
            stepTitle: 'Calculer l’investissement net et brut avec l’accélérateur',
            paragraphText:
              "Dans l'accélérateur fixe, K_t = v·Y_t donc I_{nt} = v·(Y_t − Y_{t-1}). Si v = 2,5, Y passe de 1 800 à 2 000, δ = 10 % et K_{t-1} = 4 000, alors I_n = 2,5 × 200 = 500, A = 0,10 × 4 000 = 400 et I_b = 900.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Dans une économie où il faut un capital de 200 pour produire 100, quel est le coefficient de capital v et quel est l’investissement net si la demande passe de 300 à 400 ?',
              options: [
                'v = 0,5 et I_n = 50',
                'v = 2 et I_n = 100',
                'v = 5 et I_n = 500',
                'v = 2 et I_n = 200',
              ],
              correctAnswerIndex: 3,
              explanation:
                'v = K / Y = 200 / 100 = 2. Pour ΔY = 400 − 300 = 100, I_n = v·ΔY = 2 × 100 = 200.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Accélérateur flexible',
            stepTitle: 'Limites de l’accélérateur fixe et apport de l’accélérateur flexible',
            paragraphText:
              "Attention : dans l'accélérateur fixe, un simple ralentissement de la croissance de la demande (ΔY plus faible bien que toujours positive) suffit à faire chuter l'investissement ! L'accélérateur flexible (ajustement partiel) corrige le modèle fixe en intégrant délais de mise en œuvre, anticipations imparfaites et contraintes financières ou capacités oisives.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans le modèle d’accélérateur fixe (v = 2), que devient l’investissement net si la demande passe de 400 à 450 (+50) après avoir augmenté de 300 à 400 (+100) ?',
              options: [
                'Il augmente de 200 à 300',
                'Il baisse de 200 à 100 bien que la demande continue d’augmenter',
                'Il reste constant à 200',
                'Il devient négatif (−100)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En période 1 : I_n = 2 × 100 = 200. En période 2 : I_n = 2 × 50 = 100. Le ralentissement de la hausse de demande provoque une chute de l’investissement net.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch2_p3',
        order: 3,
        title: 'Modèle keynésien simplifié, multiplicateurs et politique budgétaire',
        summary:
          "Principe de la demande effective, diagramme à 45°, équilibre Y = C + I + G, multiplicateurs (investissement, dépenses publiques, fiscal, budget équilibré) et freins.",
        conceptExplanation:
          "Dans le modèle keynésien simplifié (court terme, prix rigides), l'ajustement sur le marché des biens se fait par les quantités. Keynes inverse la loi de Say (« l'offre crée sa propre demande ») : c'est la demande effective (demande anticipée par les entrepreneurs) qui détermine la production et l'emploi, permettant l'existence durable d'un équilibre de sous-emploi.\n\nEn économie fermée avec État (C = c(Y − T) + C_0, I = I_0, G = G_0, T = T_0), l'équilibre Y = C + I + G (intersection de la demande globale avec la bissectrice à 45° de Samuelson, ou égalité S + T = I + G) donne :\nY* = [1 / (1 − c)] · (C_0 + I_0 + G_0 − c·T_0).\n\nOn en déduit quatre multiplicateurs clés :\n- Multiplicateur d'investissement : k_I = ΔY / ΔI = 1 / (1 − c) ;\n- Multiplicateur des dépenses publiques : k_G = ΔY / ΔG = 1 / (1 − c) ;\n- Multiplicateur fiscal (impôts forfaitaires T) : k_T = ΔY / ΔT = −c / (1 − c) ;\n- Multiplicateur du budget équilibré (théorème d'Haavelmo : ΔG = ΔT) : k_BE = k_G + k_T = (1 − c) / (1 − c) = 1.\n\nTrois freins limitent l'effet multiplicateur en pratique : les fuites (épargne, importations), les rigidités productives (capacités saturées) et l'effet d'éviction (la hausse des taux d'intérêt liée à l'emprunt public freine l'investissement privé).",
        keyRule:
          "Retiens les 4 multiplicateurs : k_I = k_G = 1/(1−c), k_T = −c/(1−c) (toujours inférieur en valeur absolue à k_G), et budget équilibré (ΔG = ΔT) ⇒ k = 1.",
        formulas: [
          {
            name: 'Revenu d’équilibre keynésien (avec État)',
            formula: 'Y* = [1 / (1 − c)] · (C_0 + I_0 + G_0 − c·T_0)',
            note: 'Obtenu graphiquement à l’intersection de la demande globale et de la droite à 45° (Y = DG).',
          },
          {
            name: 'Les quatre multiplicateurs keynésiens',
            formula: 'k_I = k_G = 1/(1−c)   |   k_T = −c/(1−c)   |   k_BE (ΔG = ΔT) = 1',
            note: 'En économie ouverte avec propension à importer m : k = 1 / (1 − c + m).',
          },
        ],
        workedExample: {
          title: 'Calculer l’équilibre keynésien et l’impact d’une relance budgétaire',
          statement:
            "Dans une économie fermée : C = 0,8(Y − T) + 100, I = 200, G = 300, T = 250. Calculez le revenu d'équilibre Y*, l'effet d'une hausse ΔG = +50, puis l'effet si cette hausse est financée par ΔT = +50.",
          methodSteps: [
            'Équilibre Y = 0,8(Y − 250) + 100 + 200 + 300 ⇒ Y = 0,8Y − 200 + 600 ⇒ 0,2Y = 400 ⇒ Y* = 2 000.',
            'Multiplicateur des dépenses publiques : k_G = 1 / (1 − 0,8) = 1 / 0,2 = 5 ⇒ pour ΔG = +50, ΔY = 5 × 50 = +250 (nouveau Y = 2 250).',
            'Multiplicateur fiscal : k_T = −0,8 / 0,2 = −4 ⇒ pour ΔT = +50, ΔY_T = −4 × 50 = −200.',
            'Effet net à budget équilibré (ΔG = ΔT = +50) : ΔY = +250 − 200 = +50 = 1 × ΔG (théorème du budget équilibré : k_BE = 1).',
          ],
          conclusion:
            "Même financée intégralement par l'impôt, une hausse des dépenses publiques reste expansionniste d'un montant égal à ΔG car les ménages auraient épargné une fraction (1 − c) de l'impôt.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Demande effective',
            stepTheme: 'Inversion loi de Say',
            stepTitle: 'Principe de la demande effective et équilibre de sous-emploi',
            paragraphText:
              "Keynes inverse la loi de Say (« l'offre crée sa propre demande ») : les entrepreneurs produisent uniquement ce qu'ils anticipent pouvoir vendre (demande effective). L'ajustement s'effectuant par les quantités, une demande insuffisante peut maintenir l'économie dans un équilibre durable de sous-emploi (chômage involontaire).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Comment le modèle keynésien simplifié se positionne-t-il par rapport à la loi de Say ?',
              options: [
                'Il confirme que toute offre crée automatiquement sa propre demande de plein emploi',
                'Il inverse la loi de Say : la demande effective anticipée détermine l’offre et l’emploi, rendant possible un équilibre de sous-emploi',
                'Il suppose que les prix varient instantanément pour éliminer tout chômage',
                'Il affirme que l’État ne peut jamais influencer la demande globale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chez Keynes, la demande cause l’offre et l’ajustement se fait par les quantités, ce qui autorise un équilibre de sous-emploi.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Multiplicateur',
            stepTheme: 'k = 1 / (1 − c)',
            stepTitle: 'Calculer le multiplicateur d’investissement et de dépenses publiques',
            paragraphText:
              "Une hausse ΔI ou ΔG engendre des vagues successives de revenus et de consommation. L'effet total sur le revenu vaut ΔY = [1 / (1 − c)] · ΔG. Plus la propension marginale à consommer c est élevée, plus le multiplicateur est fort.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Si la propension marginale à consommer vaut c = 0,75, de combien augmente le PIB d’équilibre à la suite d’une hausse d’investissement ΔI = +100 milliards FCFA ?',
              options: ['+75 milliards FCFA', '+133 milliards FCFA', '+400 milliards FCFA', '+100 milliards FCFA'],
              correctAnswerIndex: 2,
              explanation:
                'k_I = 1 / (1 − 0,75) = 1 / 0,25 = 4. Donc ΔY = 4 × 100 = +400 milliards FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Fiscalité',
            stepTheme: 'Multiplicateur fiscal',
            stepTitle: 'Comparer multiplicateur des dépenses et multiplicateur fiscal',
            paragraphText:
              "Le multiplicateur fiscal vaut k_T = −c / (1 − c). En valeur absolue, il est toujours inférieur de 1 au multiplicateur des dépenses publiques k_G = 1 / (1 − c), car une baisse d'impôt n'est consommée qu'à hauteur de c (le reste 1 − c est épargné).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Si c = 0,8 et que l’État réduit les impôts forfaitaires de ΔT = −50 milliards FCFA, quelle est la variation ΔY du revenu d’équilibre ?',
              options: [
                '+200 milliards FCFA',
                '+250 milliards FCFA',
                '−200 milliards FCFA',
                '+40 milliards FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'k_T = −0,8 / (1 − 0,8) = −4. Donc ΔY = (−4) × (−50) = +200 milliards FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Haavelmo',
            stepTheme: 'Budget équilibré',
            stepTitle: 'Le multiplicateur du budget équilibré vaut 1',
            paragraphText:
              "Si l'État augmente simultanément ses dépenses publiques et ses impôts du même montant (ΔG = ΔT), le solde budgétaire reste inchangé mais l'effet net sur le PIB est expansionniste : ΔY = [1/(1−c) − c/(1−c)] · ΔG = 1 · ΔG.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Si l’État augmente à la fois ses dépenses publiques et les impôts forfaitaires de 80 milliards FCFA (ΔG = ΔT = +80, quelle que soit la valeur de c ∈ ]0;1[), quel est l’effet net sur le PIB ?',
              options: ['0 milliard FCFA', '+40 milliards FCFA', '−80 milliards FCFA', '+80 milliards FCFA'],
              correctAnswerIndex: 3,
              explanation:
                'Le multiplicateur du budget équilibré vaut toujours exactement 1 : ΔY = +80 milliards FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Freins',
            stepTheme: 'Limites du multiplicateur',
            stepTitle: 'Les trois freins à l’effet multiplicateur',
            paragraphText:
              "En pratique, l'effet multiplicateur est réduit par trois mécanismes : les fuites (épargne élevée, importations qui bénéficient aux producteurs étrangers), les rigidités d'offre (capacités productives déjà saturées -> inflation) et l'effet d'éviction (l'emprunt public fait monter les taux d'intérêt et décourage l'investissement privé).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch2_p3_q5',
              type: 'mcq',
              prompt:
                "Qu'appelle-t-on « l'effet d'éviction » parmi les freins au multiplicateur keynésien ?",
              options: [
                'La baisse des impôts sur les entreprises exportatrices',
                'La hausse des taux d’intérêt provoquée par l’emprunt public, qui freine l’investissement privé',
                'La destruction des billets de banque par la banque centrale',
                'La hausse de la propension marginale à consommer des ménages',
              ],
              correctAnswerIndex: 1,
              explanation:
                "L'effet d'éviction désigne le recul de l'investissement privé induit par la montée des taux d'intérêt quand l'État finance son déficit par emprunt.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : MARCHÉ DE LA MONNAIE ET MARCHÉ DU TRAVAIL (MACRO 2)
  // ==========================================================================
  {
    id: 'lmd_entd_l1_macroeconomie_ch3',
    subjectId: 'lmd_macroeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Marché de la monnaie et marché du travail (Macro 2)',
    summary:
      "Maîtriser les fonctions de la monnaie, M1/M2/M3, base monétaire, multiplicateur/diviseur, équilibre monétaire (LM), ainsi que le marché du travail classique et keynésien.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch3_p1',
        order: 1,
        title: 'Monnaie, agrégats M1/M2/M3, base monétaire et équilibre LM',
        summary:
          "Trois fonctions de la monnaie, agrégats M1/M2/M3, relation BM = k·M (multiplicateur m = 1/k et diviseur d = k), motifs de Keynes et équilibre du marché monétaire.",
        conceptExplanation:
          "La monnaie est l'ensemble des moyens de paiement immédiatement utilisables (fiduciaire, scripturale, électronique/mobile money/MNBC). Elle remplit trois fonctions : instrument d'échange (évite le troc), unité de compte (mesure et compare les valeurs) et réserve de valeur (conserve du pouvoir d'achat dans le temps).\n\n1. Agrégats monétaires (masse monétaire détenue par les agents non financiers) :\n- M1 (disponibilités monétaires) = Billets et pièces + Dépôts à vue (DAV) ;\n- M2 = M1 + Quasi-monnaie (dépôts à terme, dépôts d'épargne, certificats de dépôt) ;\n- M3 = M2 + épargne logement, comptes sur livrets caisses d'épargne, bons du Trésor, obligations/emprunts > 1 an.\n\n2. Base monétaire (BM = monnaie centrale contrôlée par la BCEAO) : BM = B + RO (billets + réserves obligatoires). En notant b = B/M (préférence pour les billets) et r = RO/D (taux de réserves obligatoires), on obtient :\nBM = (b + r − br)·M = k·M  ⇔  M = (1/k)·BM.\nAinsi le diviseur de crédit vaut d = k = b + r − br et le multiplicateur de crédit vaut m = 1/k = 1 / (b + r − br).\n\n3. Offre et demande de monnaie (courbe LM) : l'offre réelle M^0/P est exogène (pilotée par la banque centrale via réescompte et réserves obligatoires). Selon Keynes, la demande de monnaie répond à trois motifs : transaction et précaution (L_1(Y), croissante avec Y) et spéculation (L_2(i), décroissante avec le taux d'intérêt i). À l'équilibre : L_1(Y) + L_2(i) = M^0/P.",
        keyRule:
          "Retiens BM = (b + r − br)·M, donc multiplicateur m = 1/(b + r − br) et diviseur d = b + r − br. À l'équilibre monétaire LM : L1(Y) + L2(i) = M0/P.",
        formulas: [
          {
            name: 'Agrégats monétaires et Base monétaire',
            formula: 'M1 = B + DAV   |   M2 = M1 + Quasi-monnaie   |   BM = B + RO',
            note: 'La base monétaire (monnaie centrale) est le passif monétaire de la banque centrale.',
          },
          {
            name: 'Multiplicateur et diviseur de crédit',
            formula: 'k = b + r − b·r   |   d = k   |   m = 1 / k   |   M = m · BM',
            note: 'Avec b = B/M (préférence pour les billets) et r = RO/D (taux de réserves obligatoires).',
          },
          {
            name: 'Équilibre du marché monétaire (LM)',
            formula: 'L_1(Y) + L_2(i) = M^0 / P',
            note: 'L_1 croît avec Y (transaction/précaution) ; L_2 décroît avec i (spéculation).',
          },
        ],
        workedExample: {
          title: 'Multiplicateur monétaire et équilibre LM',
          statement:
            "A) Données : Billets = 500, DAV = 300, Dépôts d'épargne = 200, Dépôts à terme = 100. Calculez M1 et M2.\nB) Avec r = 10 % et b = 1/6 (soit 300/1800), calculez d et m.\nC) Équilibre LM : L_1 = 0,2Y, L_2 = 500 − 5 000i, M^0/P = 400. Trouvez i pour Y = 1 000, puis pour M^0/P = 500.",
          methodSteps: [
            'A) M1 = 500 + 300 = 800 ; M2 = M1 + 200 + 100 = 1 100.',
            'B) d = k = b + r − br = (1/6) + 0,1 − (1/6)(0,1) = 0,1667 + 0,1 − 0,0167 = 0,25 ; donc m = 1 / 0,25 = 4.',
            'C1) Équilibre LM : 0,2Y + 500 − 5 000i = 400 ⇒ 5 000i = 0,2Y + 100 ⇒ i = 0,00004Y + 0,02.',
            'C2) Pour Y = 1 000 : i = 0,04 + 0,02 = 0,06 = 6 %.',
            'C3) Si M^0/P passe à 500 (politique expansive) avec Y = 1 000 : 200 + 500 − 5 000i = 500 ⇒ 5 000i = 200 ⇒ i = 0,04 = 4 % (baisse du taux d’intérêt).',
          ],
          conclusion:
            "Une politique monétaire expansive (hausse de l'offre de monnaie de 400 à 500) fait baisser le taux d'intérêt d'équilibre de 6 % à 4 %.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Monnaie',
            stepTheme: '3 fonctions',
            stepTitle: 'Les trois fonctions économiques de la monnaie',
            paragraphText:
              "La monnaie assure trois fonctions indissociables : instrument d'échange (facilite les transactions sans troc), unité de compte (étalon permettant de comparer les prix) et réserve de valeur (conservation du pouvoir d'achat pour des dépenses futures).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Comparer le prix d’un sac de riz (25 000 FCFA) et d’un téléphone (100 000 FCFA) illustre quelle fonction de la monnaie ?',
              options: [
                'La fonction d’unité de compte',
                'La fonction de réserve de valeur',
                'La fonction de création fiscale',
                'La fonction de réserves obligatoires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La fonction d’unité de compte sert à mesurer et comparer la valeur relative de biens et services différents.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Agrégats ()',
            stepTheme: 'M1 et M2',
            stepTitle: 'Calculer M1 et M2 à partir des actifs monétaires',
            paragraphText:
              "M1 regroupe uniquement les disponibilités immédiatement utilisables (Billets et pièces + Dépôts à vue). M2 ajoute à M1 la quasi-monnaie (dépôts d'épargne, dépôts à terme, certificats de dépôt).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Dans une économie : billets et pièces = 500, dépôts à vue = 300, dépôts d’épargne = 200, dépôts à terme = 100. Que valent M1 et M2 ?',
              options: [
                'M1 = 500 et M2 = 800',
                'M1 = 800 et M2 = 1 100',
                'M1 = 1 000 et M2 = 1 100',
                'M1 = 300 et M2 = 600',
              ],
              correctAnswerIndex: 1,
              explanation:
                'M1 = 500 + 300 = 800 ; M2 = 800 + 200 + 100 = 1 100.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Multiplicateur',
            stepTheme: 'k = b + r − br',
            stepTitle: 'Calculer le multiplicateur et le diviseur de crédit',
            paragraphText:
              "En notant b la préférence pour les billets (B/M) et r le taux de réserves obligatoires (RO/D), on a BM = k·M avec k = b + r − b·r. Le diviseur vaut d = k et le multiplicateur vaut m = 1 / k.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Si le taux de préférence pour les billets est b = 10 % (0,10) et le taux de réserves obligatoires est r = 10 % (0,10), quelle est la valeur exacte du diviseur k ?',
              options: ['0,20', '0,10', '0,19', '0,21'],
              correctAnswerIndex: 2,
              explanation:
                'k = b + r − b·r = 0,10 + 0,10 − (0,10 × 0,10) = 0,20 − 0,01 = 0,19 (et m = 1/0,19 ≈ 5,26).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Keynes',
            stepTheme: 'Motifs de monnaie',
            stepTitle: 'Les trois motifs de détention de monnaie chez Keynes',
            paragraphText:
              "Keynes identifie trois motifs de demande de monnaie : (1) transaction (dépenses courantes), (2) précaution (faire face aux imprévus : maladie, réparation) et (3) spéculation (profiter des variations du taux d'intérêt et du cours des obligations).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Attendre une baisse des taux d’intérêt (ou arbitrer entre liquidités et obligations selon les taux) correspond à quel motif keynésien de détention de monnaie ?',
              options: [
                'Le motif de transaction',
                'Le motif de précaution',
                'Le motif d’amortissement',
                'Le motif de spéculation',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le motif de spéculation dépend négativement du taux d’intérêt i : lorsque i est bas, les agents préfèrent garder des liquidités en anticipant une hausse future des taux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Courbe LM ()',
            stepTheme: 'Équilibre monétaire',
            stepTitle: "Déterminer le taux d'intérêt d'équilibre i",
            paragraphText:
              "À l'équilibre du marché monétaire, L_1(Y) + L_2(i) = M^0/P. Une politique monétaire expansive (hausse de M^0) abaisse le taux d'intérêt d'équilibre i ; une hausse du revenu Y accroît la demande de transaction et fait monter i.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Avec L_1 = 0,2Y, L_2 = 500 − 5 000i, Y = 1 000 et M^0/P = 400, quel est le taux d’intérêt d’équilibre i ?',
              options: ['4 %', '6 %', '8 %', '2 %'],
              correctAnswerIndex: 1,
              explanation:
                '0,2(1 000) + 500 − 5 000i = 400 ⇒ 700 − 5 000i = 400 ⇒ 5 000i = 300 ⇒ i = 0,06 = 6 %.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_macroeconomie_ch3_p2',
        order: 2,
        title: 'Marché du travail classique et keynésien',
        summary:
          "Calculer le salaire réel w/P, la productivité marginale PmL, l'équilibre classique de plein-emploi, l'arbitrage travail-loisir et le chômage involontaire keynésien.",
        conceptExplanation:
          "Sur le marché du travail, les travailleurs offrent leur force de travail (L^o) et les entreprises demandent du travail (L^d) en fonction du salaire réel w_r = W / P (pouvoir d'achat du salaire nominal W rapporté au niveau général des prix P).\n\n1. Approche classique :\n- Demande de travail des entreprises : pour maximiser son profit, la firme embauche tant que la productivité marginale du travail dépasse le salaire réel, jusqu'à la condition d'équilibre PmL = ∂Y/∂L = W/P = w_r (demande décroissante de w_r).\n- Offre de travail des salariés : issue de l'arbitrage consommation-loisir (maximisation de U(C, L) sous contrainte C = (W/P)·L^o et temps total H = L + L^o). L'offre L^o est fonction croissante de w_r.\n- Équilibre classique : L^o(w_r*) = L^d(w_r*). La flexibilité parfaite du salaire réel assure le plein emploi : il n'existe aucun chômage involontaire (uniquement du chômage volontaire).\n\n2. Approche keynésienne :\n- Les salaires nominaux sont rigides à la baisse et l'emploi effectif L* est dicté par la demande effective sur le marché des biens (via Y* = F(L*)).\n- Si le niveau d'emploi L* nécessaire pour produire Y* est inférieur à l'emploi de plein emploi L_p, il apparaît un chômage involontaire : U_inv = L_p − L*, que seule une stimulation de la demande effective (politique budgétaire/monétaire) peut résorber.",
        keyRule:
          "Modèle classique : PmL = W/P et L^o = L^d ⇒ plein emploi (pas de chômage involontaire). Modèle keynésien : la demande effective fixe Y* ⇒ L* < L_p ⇒ chômage involontaire = L_p − L*.",
        formulas: [
          {
            name: 'Salaire réel et condition d’embauche',
            formula: 'w_r = W / P   |   Équilibre firme : PmL = ∂Y / ∂L = w_r',
            note: 'Si PmL > w_r, la firme embauche ; si PmL < w_r, elle réduit ses effectifs.',
          },
          {
            name: 'Chômage involontaire keynésien',
            formula: 'Y* = F(L*)   ⇒   Chômage involontaire = L_p − L*  (si L* < L_p)',
            note: 'Nécessite une relance de la demande effective pour se résorber.',
          },
        ],
        workedExample: {
          title: 'Résoudre les exercices clés du marché du travail',
          statement:
            "A) Salaire nominal W = 150 000 FCFA, indice des prix P = 1,25 : calculez w_r.\nB) Offre L^o = 20 + 2w_r, Demande L^d = 100 − 3w_r : trouvez l'équilibre classique.\nC) Économie keynésienne : Y* = 500, Y = 10L et plein emploi L_p = 60 : trouvez L* et le chômage involontaire.",
          methodSteps: [
            'A) Salaire réel : w_r = W / P = 150 000 / 1,25 = 120 000 FCFA réels.',
            'B) Équilibre classique L^o = L^d : 20 + 2w_r = 100 − 3w_r ⇒ 5w_r = 80 ⇒ w_r* = 16 ; emploi d’équilibre L* = 20 + 2(16) = 52.',
            'C) Emploi déterminé par la demande effective : 10L* = 500 ⇒ L* = 50.',
            'Chômage involontaire = L_p − L* = 60 − 50 = 10 unités de travail.',
          ],
          conclusion:
            "Dans le modèle classique, le salaire réel flexible (w_r* = 16) équilibre exactement le marché à L* = 52 ; chez Keynes, l'insuffisance de demande effective laisse 10 travailleurs au chômage involontaire.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Salaire réel',
            stepTheme: 'w_r = W / P',
            stepTitle: 'Calculer le salaire réel et l’effet d’une hausse des prix',
            paragraphText:
              "Le salaire réel mesure le pouvoir d'achat du travailleur : w_r = W / P. À salaire nominal W constant, une hausse du niveau général des prix P réduit le salaire réel w_r, ce qui diminue l'offre de travail dans l'approche classique.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Un salarié perçoit 3 000 FCFA/heure et le niveau général des prix est P = 1,5. Quel est son salaire réel horaire ?',
              options: ['4 500 FCFA', '2 000 FCFA', '1 500 FCFA', '3 000 FCFA'],
              correctAnswerIndex: 1,
              explanation:
                'w_r = W / P = 3 000 / 1,5 = 2 000 FCFA réels par heure.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Productivité',
            stepTheme: 'PmL = w_r',
            stepTitle: 'Décision d’embauche d’une entreprise',
            paragraphText:
              "L'entreprise maximise son profit en égalisant la productivité marginale du travail PmL = ∂Y/∂L au salaire réel w_r = W/P. Si PmL > w_r, le travailleur supplémentaire rapporte plus qu'il ne coûte : l'entreprise embauche.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Avec Y = 100·L^{0,5}, P = 2 000 FCFA et W = 4 000 FCFA, que vaut le salaire réel w_r et que vaut PmL pour L = 160 (sachant √160 ≈ 12,65) ?',
              options: [
                'w_r = 2 et PmL ≈ 3,95 ⇒ PmL > w_r, donc l’entreprise embauche',
                'w_r = 0,5 et PmL ≈ 0,10 ⇒ l’entreprise licencie',
                'w_r = 2 000 et PmL = 50 ⇒ l’entreprise ferme',
                'w_r = 2 et PmL = 1,0 ⇒ l’entreprise licencie',
              ],
              correctAnswerIndex: 0,
              explanation:
                'w_r = 4 000 / 2 000 = 2. PmL = 50 / √L = 50 / 12,65 ≈ 3,95 > 2 : la firme a intérêt à embaucher davantage (jusqu’à L* = 625 où PmL = 2).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Classiques',
            stepTheme: 'Équilibre L^o = L^d',
            stepTitle: "Calculer l'équilibre classique du marché du travail",
            paragraphText:
              "À l'équilibre classique, on résout L^o(w_r) = L^d(w_r). Comme le salaire réel s'ajuste librement, toute personne disposée à travailler au salaire réel d'équilibre trouve un emploi : il n'y a pas de chômage involontaire.",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Avec L^o = 2w_r et L^d = 100 − 3w_r, quels sont le salaire réel d’équilibre w_r* et l’emploi d’équilibre L* ?',
              options: [
                'w_r* = 10 et L* = 20',
                'w_r* = 25 et L* = 50',
                'w_r* = 20 et L* = 40',
                'w_r* = 40 et L* = 80',
              ],
              correctAnswerIndex: 2,
              explanation:
                '2w_r = 100 − 3w_r ⇒ 5w_r = 100 ⇒ w_r* = 20 ; puis L* = 2 × 20 = 40.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Arbitrage',
            stepTheme: 'Travail-Loisir',
            stepTitle: 'Arbitrage consommation-loisir du salarié',
            paragraphText:
              "Pour une fonction d'utilité Cobb-Douglas symétrique U(C, L) = C^{1/2}·L^{1/2} avec temps total L̄ = 20 h = L + L^o et contrainte C = (W/P)·L^o, les exposants égaux (1/2 et 1/2) conduisent toujours à partager le temps total en deux parts égales : L* = L̄ / 2 = 10 h de loisir et L^o = 10 h de travail !",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Pour U(C, L) = C^{1/2}·L^{1/2} avec L̄ = 20 h, W = 1 000 et P = 2, quelles sont l’offre de travail L^o et la consommation optimale C* ?',
              options: [
                'L^o = 5 h et C* = 2 500',
                'L^o = 20 h et C* = 10 000',
                'L^o = 15 h et C* = 7 500',
                'L^o = 10 h et C* = 5 000',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Condition TMS = w_r ⇒ C / L = w_r = 500 ⇒ C = 500L. Avec C = 500(20 − L), on obtient 500L = 10 000 − 500L ⇒ L* = 10 h, L^o = 10 h et C* = 5 000.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Keynes',
            stepTheme: 'Chômage involontaire',
            stepTitle: 'Pourquoi Keynes rejette le plein emploi automatique',
            paragraphText:
              "Pour Keynes, le niveau d'emploi ne se fixe pas par une simple baisse des salaires sur le marché du travail, mais dépend de la demande effective sur le marché des biens. Baisser les salaires risque même de réduire le pouvoir d'achat et la demande globale ! Il faut stimuler la demande effective (dépenses publiques, investissement, baisse d'impôts).",
            exercise: {
              id: 'lmd_entd_l1_macroeconomie_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Dans une économie keynésienne où Y = 10L, le plein emploi vaut L_p = 60 et la demande effective fixe Y* = 500, quel est le volume de chômage involontaire ?',
              options: ['50 unités', '10 unités', '0 unité', '60 unités'],
              correctAnswerIndex: 1,
              explanation:
                'L* = Y* / 10 = 500 / 10 = 50. Le chômage involontaire vaut L_p − L* = 60 − 50 = 10 unités.',
            },
          },
        ],
      }),
    ],
  },
];
