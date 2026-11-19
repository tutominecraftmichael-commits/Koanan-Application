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
  // CHAPITRE 1 : PRÉSENTATION DE LA COMPTA ANALYTIQUE ET VALORISATION DES STOCKS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch1',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 — Présentation de la comptabilité analytique et valorisation des stocks',
    summary:
      "Définition et objectifs de la comptabilité analytique (CAGE), comparaison avec la comptabilité générale, valorisation des entrées et sorties de stocks (CUMP, FIFO, LIFO, NIFO) et différences d'inventaire (bonis et malis).",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'FASCICULE COMPTABILITE ANALYTIQUE & TD',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch1_p1',
        order: 1,
        title: "Objectifs de la comptabilité analytique (CAGE) et valorisation des entrées en stock",
        summary:
          "Distinguer la comptabilité analytique de la comptabilité générale et calculer le coût d'entrée en stock (coût d'achat des matières et coût de production des produits).",
        conceptExplanation:
          "La comptabilité analytique — appelée aussi comptabilité d'exploitation ou comptabilité de gestion (CAGE) — est un mode de traitement de données interne permettant de reclasser par destination ou par fonction (approvisionnement, production, distribution, administration) les charges et produits enregistrés par nature en comptabilité générale.\n\nSes objectifs essentiels sont :\n- connaître les coûts des différentes fonctions et activités de l'entreprise ;\n- déterminer les bases d'évaluation de certains éléments d'actif du bilan (les stocks) ;\n- expliquer les résultats par secteur ou produit en comparant le coût de revient au prix de vente ;\n- établir des prévisions (coûts préétablis, budgets) et éclairer la prise de décision.\n\nContrairement à la comptabilité générale (obligatoire, normalisée, juridique/fiscale, tournée vers les tiers, donnant un résultat global annuel), la comptabilité analytique est facultative, non normalisée, essentiellement économique, interne à l'entreprise, et fournit des résultats détaillés par produit.\n\nS'agissant de la valorisation des entrées en stock :\n- Les matières premières et marchandises entrent en stock à leur Coût d'achat = Prix d'achat + Charges d'approvisionnement (transport, manutention, frais de douane export/import, assurance, installation).\n- Les produits fabriqués entrent en stock à leur Coût de production = Coût d'achat des matières premières consommées + Charges de production.",
        formulas: [
          {
            name: "Coût d'achat (entrée en stock des matières / marchandises)",
            formula: "Coût d'achat = Prix d'achat + Charges d'approvisionnement",
            note: 'Inclut transport, manutention, droits de douane et assurance en cas d’importation.',
          },
          {
            name: 'Coût de production (entrée en stock des produits finis)',
            formula: "Coût de production = Coût d'achat des matières consommées + Charges de production",
            note: 'Inclut la main-d’œuvre directe et les frais indirects d’atelier.',
          },
        ],
        keyRule:
          "Comptabilité générale = classement par NATURE (obligatoire, externe, résultat global). Comptabilité analytique = classement par DESTINATION ou FONCTION (interne, facultative, coûts et résultats par produit).",
        workedExample: {
          title: "Coût d'achat et coût de production — Cas ENTD (rames et cahiers)",
          statement:
            "La société ENTD importe 1 000 paquets de rames de France à 1 500 FCFA le paquet pour fabriquer 3 000 cahiers. Frais : transport jusqu'au port 50 F/paquet, manutention 200 000 F, douane export 100 000 F, transport navire 400 000 F, douane import 200 000 F, autres frais jusqu'à ENTD 200 000 F. Les frais de fabrication des 3 000 cahiers s'élèvent à 350 000 FCFA. Calculer le coût d'entrée en stock des rames et celui des cahiers.",
          methodSteps: [
            "Étape 1 : Prix d'achat des 1 000 paquets = 1 000 × 1 500 = 1 500 000 FCFA.",
            "Étape 2 : Total des charges d'approvisionnement = (1 000 × 50) + 200 000 + 100 000 + 400 000 + 200 000 + 200 000 = 50 000 + 1 100 000 = 1 150 000 FCFA.",
            "Étape 3 : Coût d'entrée en stock des rames (= Coût d'achat) = 1 500 000 + 1 150 000 = 2 650 000 FCFA, soit 2 650 FCFA par paquet.",
            "Étape 4 : Coût d'entrée en stock des 3 000 cahiers (= Coût de production) = 2 650 000 + 350 000 = 3 000 000 FCFA, soit 1 000 FCFA par cahier.",
          ],
          conclusion:
            "Les rames entrent en stock au coût d'achat de 2 650 000 FCFA (2 650 F/paquet) et les cahiers au coût de production de 3 000 000 FCFA (1 000 F/cahier).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Reclassement des charges en CAGE',
            stepTitle: 'Comment la comptabilité analytique classe-t-elle les charges ?',
            paragraphText:
              "La comptabilité analytique (CAGE) reprend les données de la comptabilité générale — enregistrées par nature (achats, salaires, loyers) — et les reclasse par destination ou par fonction (approvisionnement, atelier, distribution) ou par produit afin d'analyser l'origine interne du résultat.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Comment la comptabilité analytique reclasse-t-elle les charges qui ont été enregistrées par nature en comptabilité générale ?',
              options: [
                'Par ordre chronologique uniquement',
                'Par destination ou par fonction',
                'Par ordre alphabétique des fournisseurs',
                'Par taux de TVA applicable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La comptabilité analytique reclasse les charges par destination (produits, commandes) ou par fonction (approvisionnement, production, distribution) pour calculer les coûts.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Comparaison',
            stepTheme: 'Compta Générale vs Compta Analytique',
            stepTitle: 'Caractère obligatoire ou facultatif de la CAGE',
            paragraphText:
              "La comptabilité générale est imposée par la loi, normalisée (SYSCOHADA), constitue un moyen de preuve pour les tiers et fournit un résultat global. La comptabilité analytique n'est pas imposée par la loi ni normalisée : c'est un outil interne d'aide à la décision et de contrôle de gestion.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle affirmation caractérise correctement la comptabilité analytique par rapport à la comptabilité générale ?',
              options: [
                "Elle est imposée par l'administration fiscale et strictement normalisée",
                'Elle sert exclusivement à informer les banquiers et les actionnaires externes',
                "Elle est interne, non imposée par la loi, et détermine des coûts et résultats élémentaires par produit",
                'Elle ne permet pas d’analyser l’origine du résultat',
              ],
              correctAnswerIndex: 2,
              explanation:
                "La comptabilité analytique est un outil interne de gestion, d'ordre économique, qui calcule les coûts et résultats par produit ou secteur d'activité.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Notion de coût',
            stepTheme: 'Entrées en stock de matières',
            stepTitle: "De quoi se compose le coût d'achat ?",
            paragraphText:
              "Le coût d'achat d'une matière première ou d'une marchandise regroupe l'ensemble des charges supportées depuis l'achat jusqu'à l'entrée en stock : prix d'achat net majoré de toutes les charges d'approvisionnement (transport, manutention, droits de douane, assurance).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q3',
              type: 'mcq',
              prompt:
                "À quelle valeur évalue-t-on l'entrée en stock de matières premières importées ?",
              options: [
                "Au coût d'achat (prix d'achat + ensemble des frais d'approvisionnement et d'importation)",
                "Au prix d'achat catalogue hors frais de transport et de douane",
                'Au prix de vente prévisionnel du produit fini',
                'Au coût de distribution uniquement',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Toute matière achetée entre en stock à son coût d'achat complet : prix d'achat + charges d'approvisionnement (manutention, transport, douanes, assurances).",
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: "Coût d'achat d'importation",
            stepTitle: "Calculer le coût d'entrée en stock des rames (Cas ENTD)",
            paragraphText:
              "Dans le cas ENTD, 1 000 paquets sont achetés à 1 500 FCFA (1 500 000 F). On ajoute 50 000 F (port d'embarquement) + 200 000 F (manutention) + 100 000 F (douane export) + 400 000 F (navire) + 200 000 F (douane import) + 200 000 F (autres frais) = 1 150 000 F de charges d'approvisionnement.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q4',
              type: 'mcq',
              prompt:
                "Dans le cas ENTD (1 000 paquets achetés à 1 500 FCFA + 1 150 000 FCFA de frais d'approvisionnement), quel est le coût d'achat unitaire d'un paquet de rames ?",
              options: [
                '1 500 FCFA',
                '2 150 FCFA',
                '3 000 FCFA',
                '2 650 FCFA',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Coût d'achat total = 1 500 000 + 1 150 000 = 2 650 000 FCFA pour 1 000 paquets, soit 2 650 FCFA par paquet.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Production',
            stepTheme: 'Coût de production des produits fabriqués',
            stepTitle: 'Calculer le coût de production unitaire des cahiers',
            paragraphText:
              "Les 1 000 paquets de rames (2 650 000 F) sont intégralement transformés en 3 000 cahiers avec 350 000 F de charges de production. Le coût d'entrée en stock des cahiers correspond à leur coût de production : 2 650 000 + 350 000 = 3 000 000 F.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q5',
              type: 'mcq',
              prompt:
                "Si 3 000 cahiers consomment 2 650 000 FCFA de rames et 350 000 FCFA de frais de fabrication, quel est le coût de production d'un cahier ?",
              options: [
                '883,33 FCFA',
                '1 000 FCFA',
                '1 166,67 FCFA',
                '3 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Coût de production total = 2 650 000 + 350 000 = 3 000 000 FCFA pour 3 000 cahiers → 3 000 000 ÷ 3 000 = 1 000 FCFA par cahier.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège conceptuel',
            stepTheme: 'Coût vs Prix',
            stepTitle: 'Ne pas confondre un prix et un coût',
            paragraphText:
              "En comptabilité analytique, un « prix » concerne exclusivement une transaction avec l'extérieur (prix d'achat au fournisseur, prix de vente au client), alors qu'un « coût » est une accumulation de charges internes calculée à un stade donné (coût d'achat, coût de production, coût de revient).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Laquelle de ces expressions désigne une accumulation de charges internes jusqu’au stade final de vente et non un montant facturé au client ?',
              options: [
                'Le prix de vente HT',
                'Le prix catalogue fournisseur',
                'Le coût de revient',
                'Le chiffre d’affaires',
              ],
              correctAnswerIndex: 2,
              explanation:
                "Le coût de revient accumule l'ensemble des charges supportées jusqu'à la livraison au client ; la différence entre le prix de vente et le coût de revient donne le résultat analytique.",
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch1_p2',
        order: 2,
        title: "Valorisation des sorties de stocks (CUMP, FIFO, LIFO, NIFO) et différences d'inventaire",
        summary:
          "Tenir un compte d'inventaire permanent selon les trois familles de méthodes (CUMP, épuisement des lots FIFO/LIFO, coûts conventionnels NIFO) et traiter les bonis et malis d'inventaire.",
        conceptExplanation:
          "Lorsque les lots entrés en stock au cours d'une période ont des coûts unitaires différents, il faut choisir une méthode pour valoriser les sorties de stock dans le compte d'inventaire permanent (qui suit constamment les quantités et valeurs : SI + Entrées = Sorties + SF).\n\nOn distingue trois familles de méthodes :\n1) Les méthodes du Coût Unitaire Moyen Pondéré (CUMP) :\n   - CUMP de fin de période : CUMP = (Valeur SI + Valeur des Entrées) ÷ (Qté SI + Qté Entrées). Simple, mais oblige à attendre la fin de période pour valoriser les sorties.\n   - CUMP après chaque entrée : recalculé après chaque réception pour valoriser immédiatement les sorties suivantes.\n2) Les méthodes d'épuisement des lots (valorisation immédiate) :\n   - FIFO (First In, First Out) ou PEPS (Premier Entré, Premier Sorti) : les sorties sont prélevées sur les lots les plus anciens ; le stock final est donc composé des lots les plus récents.\n   - LIFO (Last In, First Out) ou DEPS (Dernier Entré, Premier Sorti) : les sorties sont prélevées sur les lots les plus récents ; le stock final reste valorisé aux lots les plus anciens (non admis en comptabilité financière OHADA mais étudié en gestion).\n3) Les méthodes des coûts conventionnels :\n   - NIFO (Next In, First Out / coût de remplacement) : sorties valorisées au coût probable de renouvellement et SF au CUMP, faisant apparaître une différence d'incorporation.\n   - Coûts approchés ou coûts standards.\n\nEnfin, à la clôture, l'inventaire physique (SF réel) peut différer du SF théorique (erreurs de mesure, vols, casse) :\n- Si SF réel < SF théorique : Mali d'inventaire (perte), enregistré comme une sortie fictive au CRÉDIT du compte de stock.\n- Si SF réel > SF théorique : Boni d'inventaire (gain), enregistré comme une entrée fictive au DÉBIT du compte de stock.",
        formulas: [
          {
            name: 'CUMP de fin de période',
            formula: 'CUMP = (Valeur SI + Valeur totale des Entrées) ÷ (Qté SI + Qté totale des Entrées)',
            note: 'Toutes les sorties et le stock final de la période sont valorisés à ce CUMP unique.',
          },
          {
            name: 'Équation d’inventaire permanent',
            formula: 'Stock Initial + Entrées = Sorties + Stock Final théorique',
            note: 'Valable aussi bien en quantités qu’en valeurs.',
          },
          {
            name: "Différence d'inventaire",
            formula: 'SF réel < SF théorique ⇒ Mali (Crédit) ;   SF réel > SF théorique ⇒ Boni (Débit)',
            note: 'Valorisée au CUMP sans modifier les coûts déjà calculés.',
          },
        ],
        keyRule:
          "FIFO = on sort les lots les plus ANCIENS (il reste les plus récents). LIFO = on sort les lots les plus RÉCENTS (il reste les plus anciens). SF réel < SF théorique = MALI (Crédit) ; SF réel > SF théorique = BONI (Débit).",
        workedExample: {
          title: 'Application standard : CUMP, FIFO, LIFO et Mali d’inventaire',
          statement:
            "Stock au 01/01 : 30 unités à 120 F. Entrées : 10/01 (20 u à 150 F), 17/01 (35 u à 110 F), 26/01 (15 u à 180 F). Sorties : 06/01 (15 u), 12/01 (25 u), 28/01 (35 u). L'inventaire physique au 31/01 constate 23 unités réelles. Calculer le CUMP de fin de période, le stock final en FIFO, en LIFO, et la différence d'inventaire.",
          methodSteps: [
            'Étape 1 (Quantités) : Total disponible = 30 + 20 + 35 + 15 = 100 unités. Total sorties = 15 + 25 + 35 = 75 unités → SF théorique = 100 − 75 = 25 unités.',
            'Étape 2 (CUMP fin de période) : Valeur totale disponible = (30×120) + (20×150) + (35×110) + (15×180) = 3 600 + 3 000 + 3 850 + 2 700 = 13 150 F. CUMP = 13 150 ÷ 100 = 131,50 F.',
            'Étape 3 (FIFO) : Les 75 unités sorties épuisent 30 u à 120 F + 20 u à 150 F + 25 u à 110 F (= 9 350 F). Il reste en stock final les lots les plus récents : 10 u à 110 F + 15 u à 180 F = 1 100 + 2 700 = 3 800 F.',
            'Étape 4 (LIFO) : Sorties au 06/01 (15×120), 12/01 (20×150 + 5×120), 28/01 (15×180 + 20×110) = 10 300 F → SF = 10 u à 120 F + 15 u à 110 F = 2 850 F.',
            "Étape 5 (Différence d'inventaire au CUMP) : SF réel (23) < SF théorique (25) → Mali d'inventaire de 2 unités × 131,50 F = 263 F (au Crédit).",
          ],
          conclusion:
            'CUMP = 131,50 F ; Stock final FIFO = 3 800 F ; Stock final LIFO = 2 850 F ; Mali d’inventaire = 2 unités (263 F au Crédit).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'CUMP fin de période',
            stepTheme: 'Formule et calcul du CUMP',
            stepTitle: 'Calculer le CUMP de fin de période',
            paragraphText:
              "Le CUMP de fin de période divise la somme (Valeur du Stock Initial + Valeur des Entrées) par la somme des quantités (Qté SI + Qté Entrées). Par exemple : 13 150 F ÷ 100 unités = 131,50 F par unité.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Un stock initial comprend 40 kg à 100 F/kg. Une entrée unique de 60 kg est enregistrée à 150 F/kg. Quel est le CUMP de fin de période ?',
              options: [
                '125 F/kg',
                '130 F/kg',
                '120 F/kg',
                '140 F/kg',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Valeur totale = (40 × 100) + (60 × 150) = 4 000 + 9 000 = 13 000 F pour 40 + 60 = 100 kg → CUMP = 13 000 ÷ 100 = 130 F/kg (moyenne pondérée, pas moyenne simple).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Limite du CUMP',
            stepTheme: 'CUMP fin de période vs CUMP après chaque entrée',
            stepTitle: 'Pourquoi préférer le CUMP après chaque entrée ?',
            paragraphText:
              "Le principal reproche adressé au CUMP de fin de période est qu'il faut attendre la clôture de la période pour connaître la valeur des sorties, ce qui contredit l'objectif de l'inventaire permanent (connaître la valeur du stock à tout instant). Le CUMP après chaque entrée corrige cette limite.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quel est le principal inconvénient de la méthode du CUMP de fin de période par rapport au CUMP après chaque entrée ?',
              options: [
                'Elle est interdite par le droit comptable OHADA',
                'Elle ne tient pas compte du stock initial',
                "Elle oblige à attendre la fin de la période pour valoriser les sorties de stock",
                'Elle valorise les sorties au prix du mois suivant',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le CUMP de fin de période ne peut être calculé qu’une fois toutes les entrées du mois connues, retardant la valorisation des sorties et le calcul des coûts en cours de mois.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode FIFO',
            stepTheme: 'Premier Entré, Premier Sorti (PEPS)',
            stepTitle: 'Valoriser une sortie selon la méthode FIFO',
            paragraphText:
              "Avec FIFO (First In, First Out / PEPS), chaque sortie prélève d'abord dans les lots les plus anciens jusqu'à leur épuisement complet, puis passe au lot suivant. Par conséquent, le stock final est composé des lots les plus récemment achetés.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'On dispose au 01/05 de 30 unités à 120 F, puis le 10/05 entrent 20 unités à 150 F. On sort 15 unités le 06/05 puis 25 unités le 12/05. En méthode FIFO, quelle est la valeur de la sortie du 12/05 (25 unités) ?',
              options: [
                '3 300 FCFA (15 × 120 + 10 × 150)',
                '3 750 FCFA (25 × 150)',
                '3 600 FCFA (20 × 150 + 5 × 120)',
                '3 000 FCFA (25 × 120)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Après la sortie de 15 u du 06/05, il reste 15 u du lot ancien (120 F) et 20 u du lot neuf (150 F). La sortie de 25 u du 12/05 épuise les 15 u à 120 F (1 800 F) + 10 u à 150 F (1 500 F) = 3 300 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode LIFO',
            stepTheme: 'Dernier Entré, Premier Sorti (DEPS)',
            stepTitle: 'Valoriser une sortie selon la méthode LIFO',
            paragraphText:
              "Avec LIFO (Last In, First Out / DEPS), les sorties prélèvent prioritairement dans les lots les plus récents. Sur la même situation au 12/05 (15 u à 120 F + 20 u à 150 F), une sortie de 25 u prendra d'abord les 20 u à 150 F puis 5 u à 120 F.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Avec les mêmes stocks au 12/05 (15 u à 120 F entrées le 01/05 et 20 u à 150 F entrées le 10/05), quelle est la valeur de la sortie de 25 unités en méthode LIFO ?',
              options: [
                '3 300 FCFA',
                '3 000 FCFA',
                '3 750 FCFA',
                '3 600 FCFA (20 × 150 + 5 × 120)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'En LIFO, on épuise d’abord le dernier lot entré : 20 × 150 = 3 000 F, puis on complète avec 5 unités du lot précédent (5 × 120 = 600 F), soit 3 600 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Méthode NIFO',
            stepTheme: 'Coût de remplacement',
            stepTitle: 'Comprendre la méthode NIFO (Next In, First Out)',
            paragraphText:
              "La méthode NIFO valorise les sorties au coût probable d'achat du prochain réapprovisionnement (coût de remplacement conventionnel), tandis que le stock final est valorisé au CUMP de fin de période. L'écart dégagé constitue une différence d'incorporation sur matières.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'À quelle valeur la méthode NIFO (Next In, First Out) valorise-t-elle les sorties de stock ?',
              options: [
                'Au coût du lot le plus ancien en magasin',
                'Au coût probable de remplacement (prochaine entrée attendue)',
                'Au prix de vente HT aux clients',
                'À zéro pour minimiser les charges',
              ],
              correctAnswerIndex: 1,
              explanation:
                "NIFO (coût de remplacement) évalue les sorties au prix conventionnel probable d'achat de la période suivante.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: "Différences d'inventaire",
            stepTheme: "Boni et Mali d'inventaire",
            stepTitle: 'Enregistrer un mali ou un boni en inventaire permanent',
            paragraphText:
              "Lorsque le comptage physique (SF réel) révèle moins d'unités que le stock comptable (SF théorique), il s'agit d'un mali d'inventaire (vol, casse, évaporation) inscrit au CRÉDIT comme sortie fictive. Si SF réel > SF théorique, c'est un boni d'inventaire inscrit au DÉBIT comme entrée fictive.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch1_p2_q6',
              type: 'mcq',
              prompt:
                "En fin de mois, le stock final théorique est de 25 kg et l'inventaire physique réel trouve 21 kg (CUMP = 1 080 F/kg). Comment qualifie-t-on et où inscrit-on cet écart ?",
              options: [
                "Un boni d'inventaire de 4 kg inscrit au débit",
                "Un mali d'inventaire de 4 kg inscrit au débit",
                "Un mali d'inventaire de 4 kg inscrit au crédit (sortie fictive)",
                "Une erreur qui impose de recalculer tout le CUMP",
              ],
              correctAnswerIndex: 2,
              explanation:
                "SF réel (21 kg) < SF théorique (25 kg) → il manque 4 kg : c'est un mali d'inventaire, enregistré comme une sortie fictive au crédit du compte de stock, sans recalculer les coûts unitaires.",
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : TRAITEMENT DES CHARGES ET MÉTHODE DES COÛTS COMPLETS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch2',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 — Traitement des charges et méthode des coûts complets',
    summary:
      "Passage des charges de la comptabilité générale aux charges incorporables (charges non incorporables et supplétives), traitement des charges directes/indirectes et hiérarchie complète des coûts (CAMPA, CAMPC, CPPF, CPPV, Coût de revient, Résultat analytique).",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'FASCICULE COMPTABILITE ANALYTIQUE (Chapitres III & IV) & TD ENTD 1 (Exercices 1 et 3)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch2_p1',
        order: 1,
        title: 'Typologie des charges : charges incorporables, non incorporables et supplétives',
        summary:
          "Déterminer le montant exact des charges de la comptabilité de gestion à partir de la comptabilité générale en retranchant les charges non incorporables et en ajoutant les charges supplétives.",
        conceptExplanation:
          "Les charges enregistrées en classe 6 (et 8 impair) de la comptabilité générale ne sont pas toutes reprises telles quelles dans le calcul des coûts en comptabilité analytique. Un retraitement économique est indispensable :\n\n1) Charges non incorporables (CNI) : ce sont des charges comptabilisées en comptabilité générale mais exclues des coûts analytiques car elles n'ont pas de lien normal avec l'exploitation courante ou présentent un caractère fiscal/exceptionnel. Exemples classiques du TD ENTD 1 : Valeur nette d'amortissement (VNA) des immobilisations cédées, dotations non courantes / HAO, impôts sur les résultats (BIC/IS), dotations aux amortissements des immobilisations en non-valeurs (frais d'établissement), dotations pour créances douteuses à caractère exceptionnel.\n\n2) Charges supplétives (CS) : ce sont des coûts économiques réels NON enregistrés en comptabilité générale (pour raisons juridiques ou fiscales), mais ajoutés en comptabilité analytique afin de refléter le vrai coût économique des ressources mobilisées et de permettre la comparaison entre entreprises. Les deux exemples emblématiques sont :\n   - la rémunération conventionnelle des capitaux propres (Capitaux propres × taux du marché) ;\n   - la rémunération fictive du travail de l'exploitant individuel (non salarié).\n\n3) Formule fondamentale de passage :\n   Charges incorporées aux coûts (CAGE) = Charges de la Comptabilité Générale − Charges non incorporables + Charges supplétives.",
        formulas: [
          {
            name: 'Passage Comptabilité Générale → Comptabilité Analytique',
            formula: 'Charges CAGE = Charges CG − Charges non incorporables + Charges supplétives',
            note: 'Les différences d’incorporation assurent la concordance entre les deux comptabilités.',
          },
          {
            name: 'Rémunération conventionnelle des capitaux propres',
            formula: 'Charge supplétive = Capitaux propres × Taux d’intérêt annuel (× n/12 si période infra-annuelle)',
            note: 'Intègre le coût d’opportunité des fonds propres dans les coûts complets.',
          },
        ],
        keyRule:
          "Retiens l'équation vitale : Charges analytiques = Charges CG − Non incorporables (HAO, impôt sur bénéfice, non-valeurs) + Supplétives (rémunération capitaux propres et exploitant).",
        workedExample: {
          title: 'Retraitement des charges — Exercice 1 du TD ENTD 1 (Entreprise industrielle ENTD)',
          statement:
            "Au 31/12/2024, les charges de la comptabilité financière d'ENTD totalisent 1 955 000 FCFA, comprenant notamment : VNA des immobilisations cédées 66 000 F, dotations non courantes 14 000 F, impôts sur les résultats 35 000 F, dotations des immobilisations en non-valeur 12 500 F, dotations pour créances douteuses 7 500 F. Capitaux propres = 4 650 000 FCFA au taux du marché de 10 %. (Un achat de carburant de 1 600 F a été omis en comptabilité générale.) Déterminer CNI, CS et Charges de CAGE.",
          methodSteps: [
            'Étape 1 : Total des charges de comptabilité générale enregistrées = 1 200 000 + 20 000 + 40 000 + 400 000 + 20 000 + 90 000 + 44 000 + 26 000 + 66 000 + 14 000 + 35 000 = 1 955 000 FCFA (+ 1 600 F de carburant omis à régulariser → 1 956 600 F).',
            'Étape 2 : Charges non incorporables (CNI) = 66 000 (VNA) + 14 000 (dotations non courantes) + 35 000 (impôt sur les résultats) + 12 500 (immob. en non-valeur) + 7 500 (créances douteuses) = 135 000 FCFA.',
            'Étape 3 : Charges supplétives (CS) = Rémunération des capitaux propres = 4 650 000 × 10 % = 465 000 FCFA.',
            'Étape 4 : Charges de la comptabilité de gestion = 1 956 600 − 135 000 + 465 000 = 2 286 600 FCFA (ou 2 285 000 FCFA hors carburant omis).',
          ],
          conclusion:
            'CNI = 135 000 FCFA, CS = 465 000 FCFA et Charges de la comptabilité analytique = 2 286 600 FCFA (incluant la régularisation du carburant).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Non incorporables',
            stepTheme: 'Exclusions économiques de la CAGE',
            stepTitle: "Qu'est-ce qu'une charge non incorporable ?",
            paragraphText:
              "Une charge non incorporable est enregistrée en comptabilité générale mais écartée du calcul des coûts en comptabilité analytique, car elle ne reflète pas les conditions normales d'exploitation (ex. impôt sur les bénéfices, charges HAO/non courantes, VNA d'immobilisations cédées, amortissement de frais d'établissement).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Parmi les charges suivantes extraites du TD ENTD 1, laquelle est une charge NON incorporable ?',
              options: [
                'Les achats consommés de matières premières',
                'Les charges de personnel de production',
                'Les impôts sur les résultats (impôt BIC/IS)',
                "Les dotations aux amortissements d'exploitation des machines",
              ],
              correctAnswerIndex: 2,
              explanation:
                "L'impôt sur les résultats dépend du bénéfice global et ne constitue pas un coût de production ou de distribution : c'est une charge non incorporable.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Charges supplétives',
            stepTheme: 'Coûts économiques fictifs',
            stepTitle: 'Pourquoi ajouter des charges supplétives ?',
            paragraphText:
              "Les charges supplétives n'apparaissent pas en comptabilité générale, mais représentent un vrai coût économique d'opportunité : la rémunération fictive des capitaux propres et la rémunération du travail de l'exploitant individuel. Les intégrer permet de comparer équitablement une entreprise financée par emprunt et une entreprise financée par fonds propres.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Quel élément constitue une charge supplétive classique en comptabilité analytique ?',
              options: [
                'La rémunération conventionnelle des capitaux propres au taux du marché',
                'Les intérêts versés aux banques sur un emprunt',
                'La valeur nette comptable d’un camion vendu',
                'Les amendes et pénalités fiscales',
              ],
              correctAnswerIndex: 0,
              explanation:
                "Les intérêts bancaires sont déjà en classe 6 ; en revanche, la rémunération théorique des capitaux propres n'existe pas en comptabilité générale et constitue une charge supplétive.",
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul CS',
            stepTheme: 'Rémunération des capitaux propres',
            stepTitle: 'Calculer une charge supplétive annuelle ou mensuelle',
            paragraphText:
              "Dans l'Exercice 1 du TD ENTD 1, les capitaux propres s'élèvent à 4 650 000 FCFA et le taux annuel du marché est de 10 %. La charge supplétive annuelle vaut 4 650 000 × 10 % = 465 000 FCFA. Si la période étudiée était d'un mois, on diviserait ce montant par 12.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Une entreprise possède 6 000 000 FCFA de capitaux propres rémunérés conventionnellement à 8 % l’an. Quelle est la charge supplétive pour un trimestre (3 mois) ?',
              options: [
                '480 000 FCFA',
                '120 000 FCFA',
                '40 000 FCFA',
                '240 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Charge annuelle = 6 000 000 × 8 % = 480 000 FCFA. Pour 1 trimestre (3/12 = 1/4 d’année) : 480 000 ÷ 4 = 120 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Formule de passage',
            stepTheme: 'Calcul des charges incorporées',
            stepTitle: 'Déterminer le total des charges de la CAGE',
            paragraphText:
              "Pour passer de la comptabilité générale à la comptabilité analytique : Charges CAGE = Charges CG − Charges non incorporables + Charges supplétives.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Une entreprise relève 5 000 000 FCFA de charges en comptabilité générale, dont 400 000 FCFA de charges non incorporables, et évalue ses charges supplétives à 300 000 FCFA. Quel est le montant des charges incorporées aux coûts ?',
              options: [
                '5 700 000 FCFA',
                '4 300 000 FCFA',
                '5 100 000 FCFA',
                '4 900 000 FCFA',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Charges CAGE = 5 000 000 − 400 000 + 300 000 = 4 900 000 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Directes vs Indirectes',
            stepTheme: 'Affectation et imputation',
            stepTitle: 'Distinguer charges directes et charges indirectes',
            paragraphText:
              "Parmi les charges incorporables, on distingue :\n- les charges directes : rattachables immédiatement et sans ambiguïté à un seul coût ou produit (ex. matières premières consommées, main-d'œuvre directe de l'atelier) → on parle d'AFFECTATION ;\n- les charges indirectes : communes à plusieurs produits ou fonctions (ex. loyer, électricité, administration) → elles nécessitent un calcul intermédiaire dans des centres d'analyse avant leur IMPUTATION aux coûts via des unités d'œuvre.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q5',
              type: 'mcq',
              prompt:
                "Comment appelle-t-on le rattachement d'une charge indirecte (après répartition dans les centres d'analyse) au coût d'un produit à l'aide d'unités d'œuvre ?",
              options: [
                "L'imputation",
                "L'affectation directe",
                "La consignation",
                "L'escompte",
              ],
              correctAnswerIndex: 0,
              explanation:
                "On AFFECTE les charges directes directement à un produit, tandis qu'on IMPUTE les charges indirectes aux coûts via les centres d'analyse et les unités d'œuvre.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Centres auxiliaires',
            stepTheme: 'Répartition primaire et secondaire',
            stepTitle: 'Comprendre le tableau de répartition des charges indirectes',
            paragraphText:
              "Le traitement des charges indirectes suit deux étapes : la répartition primaire ventile les charges indirectes entre tous les centres (auxiliaires et principaux) grâce à des clés de répartition ; la répartition secondaire vide totalement les centres auxiliaires (ex. Entretien, Administration) dans les centres principaux (Approvisionnement, Production, Distribution), avec parfois des prestations réciproques.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'À la fin de la répartition secondaire dans un tableau de répartition des charges indirectes, quel doit être le solde de chaque centre auxiliaire ?',
              options: [
                'Égal au chiffre d’affaires',
                'Égal au total de la répartition primaire',
                'Strictement égal à zéro (totalement déversé dans les centres principaux)',
                'Toujours négatif',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La répartition secondaire transfère 100 % des charges des centres auxiliaires vers les centres principaux : le total après répartition secondaire de chaque centre auxiliaire est donc nul (0).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch2_p2',
        order: 2,
        title: 'Hiérarchie des coûts complets : du coût d’achat au résultat analytique',
        summary:
          "Enchaîner rigoureusement les étapes de la méthode des coûts complets : CAMPA, CAMPC, CPPF, CPPV, coût hors production, coût de revient et résultat analytique.",
        conceptExplanation:
          "Dans une entreprise industrielle, les coûts se forment par étapes successives qui suivent fidèlement le cycle d'exploitation (processus technico-commercial) :\n\n1) Coût d'achat des matières premières achetées (CAMPA) = Prix d'achat (PAMPA) + Charges directes et indirectes d'approvisionnement.\n2) Passant par le compte de stock de matières premières, on obtient le Coût d'achat des matières premières consommées (CAMPC) = CAMPA + Stock Initial MP − Stock Final MP (ou Quantités consommées × CUMP).\n3) Coût de production des produits fabriqués (CPPF) = CAMPC + Main-d'œuvre directe de fabrication + Charges indirectes des ateliers de production (+ encours initiaux − encours finals, et ajustements des déchets/rebuts ou produits dérivés).\n4) Passant par le compte de stock de produits finis, on obtient le Coût de production des produits vendus (CPPV) = CPPF + Stock Initial PF − Stock Final PF (ou Quantités vendues × CUMP des produits finis).\n5) Coût de revient (des produits vendus uniquement !) = CPPV + Coûts hors production (coûts de distribution : commissions commerciaux, publicité, facturation + quote-part d'administration générale).\n6) Résultat analytique = Chiffre d'affaires (Prix de vente) − Coût de revient.\n\nDans une entreprise purement commerciale, il n'y a pas de phase de production : on passe directement du Coût d'achat des marchandises vendues au Coût de revient en ajoutant les coûts de distribution.",
        formulas: [
          {
            name: 'Coût des matières consommées (CAMPC)',
            formula: 'CAMPC = CAMPA + SI(MP) − SF(MP)',
            note: 'Représente le coût des seules matières effectivement entrées en fabrication.',
          },
          {
            name: 'Coût de production des produits vendus (CPPV)',
            formula: 'CPPV = CPPF + SI(PF) − SF(PF)',
            note: 'Ne jamais calculer le coût de revient sur les quantités fabriquées si elles diffèrent des quantités vendues !',
          },
          {
            name: 'Coût de revient et Résultat analytique',
            formula: 'Coût de revient = CPPV + Coûts hors production ;   Résultat analytique = PV − CR',
            note: 'Calculé produit par produit pour identifier les produits rentables ou déficitaires.',
          },
        ],
        keyRule:
          "Règle d'or absolue : le Coût de Revient et le Résultat Analytique se calculent TOUJOURS sur les quantités VENDUES (CPPV + Coûts hors production), jamais sur les quantités simplement produites ou achetées.",
        workedExample: {
          title: 'Hiérarchie des coûts commerciaux — Exercice 3 du TD (Tissu Velours)',
          statement:
            "Une entreprise achète en décembre 500 m de tissu velours à 450 F/m, avec 5 F/m de transport et 1 F/m de réception/contrôle. Le stock initial est de 1 200 m à 590 F/m. Elle vend 900 m de tissu velours. Les représentants reçoivent 5 F/m vendu et les autres frais de distribution représentent 2 % du coût d'achat des achats du mois (ou du coût d'achat vendu selon l'énoncé). Calculer le coût d'achat, le CUMP et le coût de revient des 900 m vendus (frais de distribution = 2 % du coût d'achat des 900 m vendus).",
          methodSteps: [
            "Étape 1 (Coût d'achat des 500 m achetés) : Prix d'achat = 500 × 450 = 225 000 F ; Transport = 500 × 5 = 2 500 F ; Réception = 500 × 1 = 500 F → Coût d'achat = 228 000 F (soit 456 F/m).",
            'Étape 2 (Inventaire permanent au CUMP) : SI = 1 200 × 590 = 708 000 F ; Entrée = 500 × 456 = 228 000 F → Total = 1 700 m pour 936 000 F → CUMP = 936 000 ÷ 1 700 ≈ 550,59 F/m.',
            "Étape 3 (Coût d'achat des 900 m vendus) : 900 × 550,59 ≈ 495 529 F.",
            'Étape 4 (Coûts de distribution et Coût de revient) : Commissions = 900 × 5 = 4 500 F ; Frais pub/facturation (2 % de 495 529) ≈ 9 911 F → Coût de revient ≈ 495 529 + 4 500 + 9 911 = 509 940 FCFA (≈ 566,60 F/m).',
          ],
          conclusion:
            "Le coût d'achat des 500 m est de 228 000 FCFA (456 F/m), le CUMP de stock est de 550,59 F/m et le coût de revient unitaire des 900 m vendus atteint 566,60 F/m.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'CAMPC',
            stepTheme: 'Matières achetées vs consommées',
            stepTitle: 'Passer du CAMPA au CAMPC',
            paragraphText:
              "Le coût d'achat des matières premières consommées (CAMPC) tient compte de la variation de stock de matières premières : CAMPC = CAMPA + SI(MP) − SF(MP). Si le stock diminue (SI > SF), l'entreprise a consommé plus que ses achats de la période.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q1',
              type: 'mcq',
              prompt:
                "Pour une période donnée, CAMPA = 850 000 FCFA, SI matières = 1 500 000 FCFA et SF matières = 450 000 FCFA (cas GTHOM). Quel est le coût d'achat des matières consommées (CAMPC) ?",
              options: [
                '1 900 000 FCFA',
                '2 800 000 FCFA',
                '850 000 FCFA',
                '200 000 FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'CAMPC = CAMPA + SI − SF = 850 000 + 1 500 000 − 450 000 = 1 900 000 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'CPPF',
            stepTheme: 'Coût de production des produits fabriqués',
            stepTitle: 'Calculer le coût de production unitaire (Cas GTHOM)',
            paragraphText:
              "Dans le cas de l'entreprise GTHOM, les matières consommées valent 1 900 000 FCFA et les frais de fabrication (« processing ») pour 500 produits P s'élèvent à 500 000 FCFA. Le CPPF vaut 1 900 000 + 500 000 = 2 400 000 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q2',
              type: 'mcq',
              prompt:
                "Dans le cas GTHOM (CAMPC = 1 900 000 FCFA, frais de production = 500 000 FCFA pour 500 produits P fabriqués), quel est le coût de production unitaire d'un produit P ?",
              options: [
                '3 800 FCFA',
                '4 800 FCFA',
                '5 200 FCFA',
                '2 400 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'CPPF total = 1 900 000 + 500 000 = 2 400 000 FCFA. Coût unitaire = 2 400 000 ÷ 500 = 4 800 FCFA par produit P.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'CPPF vs CPPV',
            stepTheme: 'Ne pas confondre produits fabriqués et produits vendus',
            stepTitle: 'Sur quelle quantité calcule-t-on le coût de revient ?',
            paragraphText:
              "Un piège fréquent en examen consiste à additionner directement le CPPF (coût des produits fabriqués) et les frais de distribution alors qu'une partie de la production est restée en stock ! Il faut toujours calculer d'abord le CPPV (coût de production des seuls produits VENDUS).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q3',
              type: 'mcq',
              prompt:
                "Une usine fabrique 1 000 unités à un coût de production unitaire de 5 000 FCFA (SI = 0) et n'en vend que 800 unités, avec 400 000 FCFA de frais de distribution. Quel est le coût de revient des 800 unités vendues ?",
              options: [
                '5 400 000 FCFA',
                '4 000 000 FCFA',
                '4 400 000 FCFA',
                '5 000 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'CPPV des 800 unités vendues = 800 × 5 000 = 4 000 000 FCFA. Coût de revient = CPPV + Distribution = 4 000 000 + 400 000 = 4 400 000 FCFA (les 200 unités invendues restent en stock final pour 1 000 000 FCFA).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Coûts hors production',
            stepTheme: 'Distribution et administration',
            stepTitle: 'Que comprennent les coûts hors production ?',
            paragraphText:
              "Les coûts hors production regroupent les coûts de distribution (frais commerciaux, commissions des vendeurs, publicité, emballage de livraison, facturation) ainsi que les charges d'administration générale non spécifiques à la fabrication.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Parmi les charges suivantes, laquelle appartient aux coûts hors production ?',
              options: [
                'Les frais de douane sur les matières premières importées',
                'Le salaire des ouvriers de la chaîne d’assemblage',
                'L’amortissement des machines d’atelier',
                'Les commissions des représentants commerciaux et frais de publicité',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les commissions commerciales et la publicité sont des coûts de distribution (coûts hors production), ajoutés au CPPV pour obtenir le coût de revient.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Résultat analytique',
            stepTheme: 'Rentabilité par produit',
            stepTitle: 'Calculer le résultat analytique et son taux de rentabilité',
            paragraphText:
              "Le résultat analytique d'un produit est la différence entre son chiffre d'affaires (Prix de vente × Quantité vendue) et son Coût de revient. Dans GTHOM : si les 500 produits P (CR total = 2 400 000 + 150 000 + 50 000 = 2 600 000 F) sont vendus à 6 000 F l'unité (CA = 3 000 000 F), le résultat analytique est de +400 000 F.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Dans le cas GTHOM, le coût de revient total des 500 produits P vendus est de 2 600 000 FCFA. Si chaque produit est vendu 6 000 FCFA, quel est le résultat analytique unitaire ?',
              options: [
                '+800 FCFA par produit',
                '−800 FCFA par produit',
                '+1 200 FCFA par produit',
                '+400 FCFA par produit',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Coût de revient unitaire = 2 600 000 ÷ 500 = 5 200 FCFA. Résultat unitaire = 6 000 − 5 200 = +800 FCFA (soit +400 000 FCFA au total).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Produits particuliers',
            stepTheme: 'Encours et produits dérivés',
            stepTitle: 'Traiter les encours de production et les sous-produits',
            paragraphText:
              "En fin de période, certains produits ne sont pas encore achevés (encours de production) : le coût des produits terminés vaut Charges de la période + Encours initial − Encours final. Quant aux déchets vendables ou sous-produits, leur valeur nette récupérée vient en diminution du coût de production du produit principal.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Pour une période, les charges de production totalisent 3 000 000 FCFA, l’encours initial vaut 200 000 FCFA et l’encours final vaut 350 000 FCFA. Quel est le coût de production des produits finis achevés ?',
              options: [
                '3 550 000 FCFA',
                '2 850 000 FCFA',
                '3 150 000 FCFA',
                '2 450 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Coût de production des produits achevés = Charges de la période + Encours initial − Encours final = 3 000 000 + 200 000 − 350 000 = 2 850 000 FCFA.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : COÛTS PARTIELS, SEUIL DE RENTABILITÉ, IR ET COÛTS PRÉÉTABLIS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_analytique_ch3',
    subjectId: 'lmd_compta_analytique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 — Coûts partiels, seuil de rentabilité, imputation rationnelle et coûts préétablis',
    summary:
      "Distinction charges variables / charges fixes, marge sur coût variable, seuil de rentabilité et point mort, direct costing évolué, imputation rationnelle des charges fixes, coût marginal et analyse des écarts sur coûts standards.",
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'FASCICULE COMPTABILITE ANALYTIQUE',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch3_p1',
        order: 1,
        title: 'Méthode des coûts partiels : marge sur coût variable, seuil de rentabilité et coûts spécifiques',
        summary:
          "Classer les charges selon leur comportement (variables vs fixes), calculer la marge sur coût variable, le seuil de rentabilité (en valeur, en quantité et en date) et appliquer le direct costing évolué.",
        conceptExplanation:
          "Pour éclairer les décisions de gestion à court terme (accepter une commande, abandonner un produit, mesurer le risque d'exploitation), la comptabilité analytique classe les charges selon leur variabilité par rapport au niveau d'activité :\n- Les charges variables (ou opérationnelles) varient proportionnellement au volume d'activité (matières premières, énergie machine, commissions commerciales). Le coût variable unitaire est constant.\n- Les charges fixes (ou de structure) restent stables quel que soit le niveau d'activité dans une structure donnée (loyer, amortissements linéaires, salaires administratifs). Le coût fixe unitaire décroît quand la production augmente.\n\nDans la méthode du direct costing simple (coûts variables) :\n- Marge sur Coût Variable (MCV) = Chiffre d'affaires (CA) − Charges variables (CV).\n- Taux de marge sur coût variable (TMCV) = MCV ÷ CA.\n- Résultat = MCV − Charges fixes (CF).\n- Seuil de rentabilité (SR ou chiffre d'affaires critique) : niveau de chiffre d'affaires pour lequel le résultat est nul (MCV = CF), soit SR = CF ÷ TMCV. Au-delà du SR, l'entreprise dégage un bénéfice ; la Marge de sécurité vaut CA − SR et l'Indice de sécurité vaut (CA − SR) ÷ CA. Le Point mort est la date à laquelle le SR est atteint : (SR ÷ CA) × 12 mois (ou 360 jours).\n\nDans la méthode des coûts spécifiques (direct costing évolué), on affine l'analyse en soustrayant de la MCV de chaque produit ses charges fixes propres (spécifiques) pour obtenir une Marge sur Coût Spécifique (MCS), qui mesure la contribution réelle du produit à la couverture des charges fixes communes.",
        formulas: [
          {
            name: 'Marge et Taux de marge sur coût variable',
            formula: 'MCV = CA − CV ;   TMCV = MCV ÷ CA',
            note: 'Résultat = MCV − Charges fixes.',
          },
          {
            name: 'Seuil de rentabilité (en valeur et en quantités)',
            formula: 'SR (FCFA) = CF ÷ TMCV ;   SR (quantités) = CF ÷ MCV unitaire',
            note: 'Au seuil de rentabilité, CA = CV + CF donc Résultat = 0.',
          },
          {
            name: 'Point mort et Indice de sécurité',
            formula: 'Point mort (mois) = (SR ÷ CA) × 12 ;   Indice de sécurité = (CA − SR) ÷ CA',
            note: 'Plus l’indice de sécurité est élevé, moins l’entreprise est vulnérable à une baisse des ventes.',
          },
        ],
        keyRule:
          "Au seuil de rentabilité, la Marge sur Coût Variable couvre exactement les Charges Fixes (MCV = CF ⇒ Résultat = 0). En direct costing évolué, on ne supprime un produit que si sa Marge sur Coût Spécifique (MCV − CF propres) est négative.",
        workedExample: {
          title: 'Calcul du seuil de rentabilité, du point mort et de la marge de sécurité',
          statement:
            "Une PME numérique réalise un chiffre d'affaires annuel régulier de 10 000 000 FCFA avec 6 000 000 FCFA de charges variables et 2 400 000 FCFA de charges fixes. Calculer la MCV, le TMCV, le résultat, le seuil de rentabilité, le point mort (sur 12 mois) et l'indice de sécurité.",
          methodSteps: [
            'Étape 1 : MCV = CA − CV = 10 000 000 − 6 000 000 = 4 000 000 FCFA. Taux de MCV = 4 000 000 ÷ 10 000 000 = 0,40 (soit 40 %).',
            'Étape 2 : Résultat = MCV − CF = 4 000 000 − 2 400 000 = +1 600 000 FCFA.',
            'Étape 3 : Seuil de rentabilité SR = CF ÷ TMCV = 2 400 000 ÷ 0,40 = 6 000 000 FCFA.',
            'Étape 4 : Point mort = (6 000 000 ÷ 10 000 000) × 12 mois = 7,2 mois (soit 7 mois et 6 jours → 6 août).',
            'Étape 5 : Marge de sécurité = 10 000 000 − 6 000 000 = 4 000 000 FCFA ; Indice de sécurité = 4 000 000 ÷ 10 000 000 = 40 %.',
          ],
          conclusion:
            "L'entreprise atteint son seuil de rentabilité à 6 000 000 FCFA (le 6 août) et dispose d'un indice de sécurité confortable de 40 %.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Comportement des charges',
            stepTheme: 'Charges variables vs Charges fixes',
            stepTitle: 'Comment évoluent les charges fixes unitaires ?',
            paragraphText:
              "Les charges fixes totales (loyer, amortissement linéaire) restent constantes quelle que soit la production (à capacité inchangée). En revanche, lorsqu'on produit davantage d'unités, le coût fixe UNITAIRE (CF ÷ Q) diminue : ce sont les économies d'échelle.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q1',
              type: 'mcq',
              prompt:
                "Lorsque le volume de production double (sans changer la structure de l'usine), comment évolue le coût fixe unitaire ?",
              options: [
                'Il double également',
                'Il est divisé par deux',
                'Il reste strictement constant',
                'Il devient nul',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les charges fixes totales (CF) restent constantes, donc CF ÷ (2Q) = (1/2) × (CF ÷ Q) : le coût fixe unitaire diminue de moitié.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Seuil de rentabilité',
            stepTheme: 'Calcul en valeur (FCFA)',
            stepTitle: 'Déterminer le chiffre d’affaires critique',
            paragraphText:
              "Le seuil de rentabilité (SR) est le chiffre d'affaires minimum permettant de couvrir toutes les charges (Résultat = 0). On le calcule par la formule : SR = Charges fixes ÷ Taux de marge sur coût variable.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q2',
              type: 'mcq',
              prompt:
                "Une entreprise supporte 3 000 000 FCFA de charges fixes et dégage un taux de marge sur coût variable de 25 % (0,25). Quel est son seuil de rentabilité ?",
              options: [
                '750 000 FCFA',
                '3 750 000 FCFA',
                '12 000 000 FCFA',
                '9 000 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'SR = CF ÷ TMCV = 3 000 000 ÷ 0,25 = 12 000 000 FCFA (vérification : MCV = 25 % × 12 000 000 = 3 000 000 = CF ⇒ Résultat = 0).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'SR en quantités',
            stepTheme: 'Nombre minimal d’unités à vendre',
            stepTitle: 'Calculer le seuil de rentabilité en unités',
            paragraphText:
              "Pour connaître le nombre d'articles à vendre afin d'être à l'équilibre, on divise les charges fixes totales par la marge sur coût variable unitaire (Prix de vente unitaire − Coût variable unitaire).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q3',
              type: 'mcq',
              prompt:
                "Un produit est vendu 5 000 FCFA avec un coût variable unitaire de 3 000 FCFA. Les charges fixes sont de 1 600 000 FCFA. Combien d'unités faut-il vendre pour atteindre le seuil de rentabilité ?",
              options: [
                '800 unités',
                '320 unités',
                '534 unités',
                '1 600 unités',
              ],
              correctAnswerIndex: 0,
              explanation:
                'MCV unitaire = 5 000 − 3 000 = 2 000 FCFA. SR en quantités = 1 600 000 ÷ 2 000 = 800 unités.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Point mort',
            stepTheme: 'Date d’atteinte de la rentabilité',
            stepTitle: 'Calculer le point mort sur 12 mois',
            paragraphText:
              "Lorsque les ventes sont régulières sur l'année (12 mois), le point mort exprime la durée nécessaire pour atteindre le seuil de rentabilité : Point mort = (SR ÷ CA annuel) × 12 mois.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pour un CA annuel régulier de 20 000 000 FCFA et un seuil de rentabilité de 15 000 000 FCFA, au bout de combien de mois le point mort est-il atteint ?',
              options: ['6 mois', '8 mois', '10 mois', '9 mois'],
              correctAnswerIndex: 3,
              explanation:
                'Point mort = (15 000 000 ÷ 20 000 000) × 12 = 0,75 × 12 = 9 mois (fin septembre).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Sécurité',
            stepTheme: 'Marge et indice de sécurité',
            stepTitle: 'Interpréter l’indice de sécurité',
            paragraphText:
              "L'indice de sécurité IS = (CA − SR) ÷ CA indique le pourcentage maximal de baisse du chiffre d'affaires que l'entreprise peut subir sans tomber en perte.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q5',
              type: 'mcq',
              prompt:
                "Si un CA est de 10 000 000 FCFA et le seuil de rentabilité de 8 000 000 FCFA, que signifie l'indice de sécurité obtenu ?",
              options: [
                "L'entreprise peut supporter une baisse de CA de 20 % avant de devenir déficitaire",
                "L'entreprise réalise une perte de 20 %",
                "Les charges fixes représentent 80 % du chiffre d'affaires",
                "L'entreprise doit augmenter ses prix de 20 %",
              ],
              correctAnswerIndex: 0,
              explanation:
                'Marge de sécurité = 10 000 000 − 8 000 000 = 2 000 000 FCFA. Indice de sécurité = 2 000 000 ÷ 10 000 000 = 20 % : le CA peut baisser jusqu’à 20 % sans perte.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Direct costing évolué',
            stepTheme: 'Décision d’abandon d’un produit',
            stepTitle: 'Pourquoi regarder la Marge sur Coût Spécifique (MCS) ?',
            paragraphText:
              "En direct costing évolué, un produit dont le résultat en coût complet est déficitaire peut pourtant avoir une Marge sur Coût Spécifique (MCS = MCV − Charges fixes propres) POSITIVE. S'il est supprimé, les charges fixes communes subsistent et le résultat global de l'entreprise diminue !",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Un produit A génère une MCV de 1 200 000 FCFA, des charges fixes propres de 900 000 FCFA et supporte 500 000 FCFA de charges fixes communes (résultat complet = −200 000 F). Que se passe-t-il si on supprime le produit A ?',
              options: [
                'Le résultat global de l’entreprise augmente de 200 000 FCFA',
                'Le résultat global de l’entreprise baisse de 300 000 FCFA (perte de sa MCS positive)',
                'Les charges fixes communes disparaissent automatiquement',
                'Le résultat global reste inchangé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'MCS du produit A = 1 200 000 − 900 000 = +300 000 FCFA. Le produit A contribuait à hauteur de 300 000 F à couvrir les charges fixes communes : le supprimer aggraverait le résultat global de 300 000 FCFA !',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_analytique_ch3_p2',
        order: 2,
        title: 'Imputation rationnelle des charges fixes, coût marginal et coûts préétablis (écarts)',
        summary:
          "Neutraliser les variations d'activité par l'imputation rationnelle, utiliser le coût marginal (optimum technique et économique) et contrôler la performance par les écarts sur coûts standards.",
        conceptExplanation:
          "Trois outils avancés complètent le programme d'ENTD 1 (Chapitres VII, VIII et IX du fascicule de) :\n\n1) L'Imputation Rationnelle des Charges Fixes (IRCF) : dans les coûts complets classiques, une baisse saisonnière d'activité fait grimper artificiellement le coût unitaire à cause des charges fixes. L'IRCF neutralise cet effet en imputant aux coûts seulement une fraction des charges fixes proportionnelle au Coefficient d'Imputation Rationnelle (CIR = Activité réelle ÷ Activité normale) :\n - CF imputées = CF réelles × CIR.\n - Différence d'imputation rationnelle = CF réelles − CF imputées.\n - Si Activité réelle < Activité normale (CIR < 1) : on constate un coût de sous-activité (mali de sous-activité), exclu du coût unitaire.\n - Si Activité réelle > Activité normale (CIR > 1) : on constate un boni de suractivité.\n\n2) Le Coût Marginal (Cm) : c'est le coût supplémentaire engendré par la production d'une unité (ou d'un lot) additionnelle : Cm = ΔCT ÷ ΔQ. Deux optima majeurs guident le gestionnaire :\n - L'Optimum technique : quantité où le Coût Moyen (CM) est minimum (atteint lorsque Cm = CM).\n - L'Optimum économique : quantité qui maximise le profit total (atteint lorsque Recette Marginale Rm = Coût Marginal Cm ; en concurrence pure, Prix de vente = Cm).\n\n3) Les Coûts Préétablis (Coûts Standards) : calculés a priori sur une fiche standard (quantités standards × prix standards), ils servent de référence pour mesurer les écarts en fin de période : Écart global = Coût Réel − Coût Préétabli de la production réelle. Un écart positif (Réel > Standard) est DÉFAVORABLE ; un écart négatif (Réel < Standard) est FAVORABLE. L'écart sur charges directes se décompose en écart sur quantité et écart sur prix.",
        formulas: [
          {
            name: "Imputation rationnelle des charges fixes",
            formula: 'CIR = Activité réelle ÷ Activité normale ;   CF imputées = CF réelles × CIR',
            note: 'CIR < 1 ⇒ coût de sous-activité ; CIR > 1 ⇒ boni de suractivité.',
          },
          {
            name: 'Coût marginal et optima',
            formula: 'Cm = ΔCT ÷ ΔQ ;   Optimum technique : Cm = CM ;   Optimum économique : Cm = Rm',
            note: 'Permet de décider d’accepter ou non une commande supplémentaire.',
          },
          {
            name: 'Écart sur coût préétabli',
            formula: 'Écart = Coût Réel − Coût Préétabli (pour la production réelle)',
            note: 'Écart > 0 : Défavorable (coût réel trop élevé) ; Écart < 0 : Favorable (économie).',
          },
        ],
        keyRule:
          "IRCF : CIR = Activité réelle / Activité normale (CIR < 1 = sous-activité). Coût marginal : Optimum technique quand Cm = CM ; Optimum économique quand Cm = Recette marginale. Coûts standards : Écart = Réel − Préétabli (> 0 défavorable, < 0 favorable).",
        workedExample: {
          title: 'Application d’imputation rationnelle et d’analyse d’écart standard',
          statement:
            "Partie A (IRCF) : Un atelier a une activité normale de 1 000 heures et des charges fixes réelles de 500 000 FCFA. En février, l'activité réelle est de 800 heures. Calculer le CIR, les CF imputées et le coût de sous-activité.\nPartie B (Coûts préétablis) : Pour 100 unités produites, le standard prévoit 2 kg/unité à 1 000 F/kg (soit 200 000 F). En réalité, on consomme 210 kg à 1 050 F/kg (220 500 F). Calculer et qualifier l'écart global.",
          methodSteps: [
            'Partie A — CIR = Activité réelle ÷ Activité normale = 800 ÷ 1 000 = 0,80 (80 %).',
            'Partie A — Charges fixes imputées = 500 000 × 0,80 = 400 000 FCFA.',
            'Partie A — Différence d’imputation rationnelle = 500 000 − 400 000 = +100 000 FCFA : c’est un coût de sous-activité (chômage de 20 % de la capacité).',
            'Partie B — Coût réel = 210 × 1 050 = 220 500 F ; Coût préétabli de la production réelle = 100 × 2 × 1 000 = 200 000 F.',
            'Partie B — Écart global = 220 500 − 200 000 = +20 500 FCFA (Défavorable, dû à la fois à une surconsommation de 10 kg et à une hausse de prix de 50 F/kg).',
          ],
          conclusion:
            "Le coût de sous-activité est de 100 000 FCFA (IRCF) et l'écart global sur matières est défavorable de +20 500 FCFA.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Imputation rationnelle',
            stepTheme: 'Objectif de la méthode IRCF',
            stepTitle: 'Pourquoi utiliser l’imputation rationnelle des charges fixes ?',
            paragraphText:
              "La méthode de l'imputation rationnelle (IRCF) rend le coût de revient unitaire indépendant des fluctuations d'activité (périodes creuses ou pics saisonniers) en n'imputant que la part des charges fixes correspondant au taux d'utilisation réel de la capacité normale.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est le but principal de la méthode de l’imputation rationnelle des charges fixes ?',
              options: [
                'Supprimer totalement les charges variables du coût de revient',
                'Neutraliser l’incidence des variations du niveau d’activité sur les coûts unitaires',
                'Augmenter artificiellement la valeur des stocks en période de mévente',
                'Remplacer la comptabilité générale',
              ],
              correctAnswerIndex: 1,
              explanation:
                "En imputant les charges fixes proportionnellement au CIR, l'IRCF stabilise le coût unitaire et isole explicitement le coût de sous-activité ou le boni de suractivité.",
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul IRCF',
            stepTheme: 'CIR et coût de sous-activité',
            stepTitle: 'Calculer les charges fixes imputées et le mali de sous-activité',
            paragraphText:
              "Avec Activité normale = 1 000 h, Activité réelle = 800 h et CF réelles = 500 000 F : CIR = 800 ÷ 1 000 = 0,80. CF imputées = 400 000 F. Les 100 000 F non imputés représentent le coût de sous-activité.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Un atelier a une activité normale de 500 heures et des charges fixes réelles de 1 000 000 FCFA. Si l’activité réelle est de 600 heures, que constate-t-on ?',
              options: [
                'Un coût de sous-activité de 200 000 FCFA (CIR = 0,80)',
                'Un coût de sous-activité de 1 200 000 FCFA',
                'Un boni de suractivité de 200 000 FCFA (CIR = 1,20 ; CF imputées = 1 200 000 FCFA)',
                'Aucune différence d’imputation rationnelle',
              ],
              correctAnswerIndex: 2,
              explanation:
                'CIR = 600 ÷ 500 = 1,20 (> 1). CF imputées = 1 000 000 × 1,20 = 1 200 000 FCFA, soit un boni de suractivité de 200 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Coût marginal',
            stepTheme: 'Définition et calcul du coût marginal',
            stepTitle: 'Calculer le coût marginal d’une commande supplémentaire',
            paragraphText:
              "Le coût marginal mesure la variation du coût total provoquée par la production d'une unité ou d'une série supplémentaire : Cm = ΔCT ÷ ΔQ. S'il n'y a pas d'investissement nouveau (capacité disponible), le coût marginal se réduit au coût variable supplémentaire.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'La production de 100 unités coûte 2 000 000 FCFA. La production de 120 unités coûte 2 300 000 FCFA. Quel est le coût marginal unitaire de cette tranche supplémentaire ?',
              options: [
                '15 000 FCFA par unité',
                '20 000 FCFA par unité',
                '19 167 FCFA par unité',
                '300 000 FCFA par unité',
              ],
              correctAnswerIndex: 0,
              explanation:
                'ΔCT = 2 300 000 − 2 000 000 = 300 000 FCFA pour ΔQ = 120 − 100 = 20 unités → Cm = 300 000 ÷ 20 = 15 000 FCFA par unité.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Optima',
            stepTheme: 'Optimum technique vs Optimum économique',
            stepTitle: 'Distinguer les deux optima du coût marginal',
            paragraphText:
              "Graphiquement, la courbe du coût marginal coupe celle du coût moyen en son minimum : ce point est l'Optimum technique (coût unitaire minimal). En revanche, l'Optimum économique (profit total maximal) est atteint quand le coût marginal égale la recette marginale (Cm = Rm).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Par quelle égalité est caractérisé l’optimum économique (maximisation du bénéfice total) ?',
              options: [
                'Coût fixe = Coût variable',
                'Coût marginal = Coût moyen',
                'Chiffre d’affaires = Coût total',
                'Coût marginal = Recette marginale (Cm = Rm)',
              ],
              correctAnswerIndex: 3,
              explanation:
                "Tant qu'une unité supplémentaire rapporte plus qu'elle ne coûte (Rm > Cm), le profit augmente ; le profit total est maximal exactement lorsque Cm = Rm.",
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Coûts préétablis',
            stepTheme: 'Convention de signe des écarts',
            stepTitle: 'Interpréter un écart positif ou négatif sur coût',
            paragraphText:
              "Attention au sens conventionnel ! En analyse des écarts sur coûts : Écart = Coût Réel − Coût Préétabli (adapté à la production réelle). Un écart POSITIF signifie que le coût réel a dépassé le standard : c'est donc un écart DÉFAVORABLE ! Un écart NÉGATIF est FAVORABLE.",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q5',
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
                'Écart = Réel − Préétabli = 1 420 000 − 1 500 000 = −80 000 FCFA. L’entreprise a dépensé moins que prévu : l’écart est favorable.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Analyse des écarts',
            stepTheme: 'Décomposition prix et quantité',
            stepTitle: 'Identifier les deux sous-écarts d’une charge directe',
            paragraphText:
              "Pour diagnostiquer l'origine d'un dépassement sur matières premières ou main-d'œuvre directe, on décompose l'écart global en deux sous-écarts : un écart sur quantité = (Qr − Qp) × Pp (mesurant le rendement / gaspillage) et un écart sur prix = (Pr − Pp) × Qr (mesurant la négociation d'achat).",
            exercise: {
              id: 'lmd_entd_l1_compta_analytique_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Pour un standard de 200 kg à 1 000 F/kg, l’entreprise consomme réellement 210 kg à 1 050 F/kg. Quelle est la valeur de l’écart sur quantité = (Qr − Qp) × Pp ?',
              options: [
                '+10 500 FCFA (défavorable)',
                '−10 000 FCFA (favorable)',
                '+10 000 FCFA (défavorable)',
                '+20 500 FCFA (défavorable)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Écart sur quantité = (210 − 200) × 1 000 = +10 000 FCFA (défavorable). L’écart sur prix vaut (1 050 − 1 000) × 210 = +10 500 F ; leur somme redonne l’écart global (+20 500 F).',
            },
          },
        ],
      }),
    ],
  },
];
