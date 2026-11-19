import type { CurriculumChapter, CurriculumPoint, StructuredLessonStep } from '../../../../lib/curriculum/types';

// Cours authentique rédigé à partir des supports officiels ESATIC ENTD 1 :
// - Compta G1 : COURS DE COMPTABILITE 2025-2026 (M. SILUE YACOUBA)
// - Compta G2 : COMPTABILITE GENERALE ENTD 1 ESATIC 2026 + Corrigés d'examen G&B Sarl / BROU

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

export const COMPTA_GENERALE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : Fondements de la comptabilité, Bilan et Organisation comptable
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch1',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Fondements de la comptabilité, Bilan et Organisation comptable (Compta G1)',
    summary:
      'Notion d’entreprise et flux économiques, structure du Bilan et calcul de la situation nette, fonctionnement des comptes (partie double), Livre-Journal, Grand-Livre, Balance et Compte de Résultat selon le SYSCOHADA.',
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Compta G1 — COURS DE COMPTABILITE 2025-2026 (M. SILUE YACOUBA).pdf',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch1_p1',
        order: 1,
        title: 'L’entreprise, les flux économiques et le Bilan patrimonial',
        summary:
          'Définir l’entreprise, distinguer flux réels et flux financiers, structurer le Bilan (Actif/Passif) et calculer la situation nette.',
        conceptExplanation:
          "Selon le professeur **Claude Perochon**, une entreprise est « un organisme financièrement indépendant produisant pour le marché des biens ou des services » dans le but principal de réaliser un profit.\n\n" +
          "Ses relations avec les tiers génèrent deux catégories de flux économiques : les **flux réels** (mouvements de biens ou de services) et les **flux financiers** (mouvements de monnaie, créances ou dettes).\n\n" +
          "Le **Bilan** est un tableau de synthèse établi à une date donnée (en général le **31 décembre**) qui décrit le **patrimoine** de l'entreprise :\n" +
          "- **À l'Actif** (emplois, classés par ordre croissant de **liquidité**) : Actif immobilisé (corporel, incorporel, financier conservé plus d'un an), Actif circulant (stocks, créances clients) et Trésorerie-Actif (banque, caisse).\n" +
          "- **Au Passif** (ressources, classées par ordre croissant d'**exigibilité**) : Capitaux propres (capital social, réserves, résultat net de l'exercice), Dettes financières (emprunts), Dettes d'exploitation (fournisseurs, État, personnel) et Trésorerie-Passif.\n\n" +
          "La **Situation nette** (ou patrimoine net) mesure la richesse réelle de l'entreprise et respecte l'égalité fondamentale **Actif = Passif**.",
        keyRule:
          'Patrimoine net (Situation nette) = Total Actif − Total Dettes = Capitaux propres. À tout moment, Total Actif = Total Passif : un bénéfice figure en positif aux capitaux propres, une perte en négatif.',
        formulas: [
          {
            name: 'Patrimoine net (Situation nette)',
            formula: '\\text{Patrimoine} = \\text{Biens} + \\text{Cr\\acute{e}ances} + \\text{Tr\\acute{e}sorerie} - \\text{Dettes}',
            note: 'Égalité fondamentale : Total Actif = Total Passif',
          },
          {
            name: 'Résultat net au Bilan',
            formula: '\\text{R\\acute{e}sultat net} = \\text{Situation nette} - \\text{Capital social}',
            note: 'Bénéfice si > 0 (enrichissement), perte si < 0 (appauvrissement)',
          },
        ],
        workedExample: {
          title: 'Évaluation du patrimoine et du résultat — Société SORO et BONI (Cours G1)',
          statement:
            'Au 1er janvier N, la société SORO et BONI dispose de : Bâtiments 12 500 000 F, Matériel de transport 2 500 000 F, Marchandises 5 000 000 F, Clients 4 000 000 F, Banque 4 000 000 F, Caisse 1 000 000 F, Emprunt (3 ans) 10 000 000 F, Fournisseurs 3 500 000 F. Calculer le patrimoine net puis le résultat si le capital initial était de 10 000 000 F.',
          methodSteps: [
            '1) Total Actif = 12 500 000 + 2 500 000 + 5 000 000 + 4 000 000 + 4 000 000 + 1 000 000 = 29 000 000 F.',
            '2) Total Dettes = Emprunt (10 000 000) + Fournisseurs (3 500 000) = 13 500 000 F.',
            '3) Patrimoine (Situation nette) = 29 000 000 − 13 500 000 = 15 500 000 F.',
            '4) Si le capital est de 10 000 000 F : Résultat = 15 500 000 − 10 000 000 = +5 500 000 F (bénéfice).',
          ],
          conclusion:
            'Le Total Bilan s’équilibre à 29 000 000 F à l’Actif et au Passif, avec un bénéfice net de 5 500 000 F.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Flux',
            stepTheme: 'Flux économiques',
            stepTitle: 'Distinguer flux réel et flux financier',
            paragraphText:
              'Toute transaction entre l’entreprise et ses partenaires (clients, fournisseurs, banques) se traduit par des mouvements de biens/services (flux réels) et des mouvements de monnaie ou créances (flux financiers).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Lorsqu’une entreprise commerciale livre des marchandises à un client et reçoit un virement bancaire en contrepartie, comment qualifie-t-on ces deux mouvements ?',
              options: [
                'Deux flux financiers simultanés',
                'Un flux réel (livraison de marchandises) et un flux financier (virement bancaire)',
                'Deux flux réels internes sans incidence patrimoniale',
                'Un flux fiscal et un flux social',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La livraison de marchandises est un mouvement physique de bien (flux réel) tandis que le virement bancaire est un mouvement de monnaie (flux financier).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Actif',
            stepTheme: 'Classement de l’Actif',
            stepTitle: 'Ordre de classement des postes de l’Actif',
            paragraphText:
              'À l’Actif du bilan, les emplois sont rangés du moins liquide (bâtiments, terrains, brevets) au plus liquide (banque, caisse).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Selon quel critère les éléments de l’Actif du bilan sont-ils classés ?',
              options: [
                'Par ordre décroissant d’exigibilité',
                'Par ordre alphabétique des comptes',
                'Par ordre croissant de liquidité (de l’actif immobilisé vers la trésorerie)',
                'Par ordre décroissant de valeur monétaire',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’Actif est classé par ordre croissant de liquidité : Actif immobilisé (durable > 1 an), Actif circulant (stocks, créances), puis Trésorerie-Actif (disponibilités immédiates).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Passif',
            stepTheme: 'Classement du Passif',
            stepTitle: 'Ordre de classement des postes du Passif',
            paragraphText:
              'Le Passif regroupe les ressources mises à disposition de l’entreprise, rangées des ressources les plus stables (capitaux propres) aux dettes les plus rapidement exigibles.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Comment les éléments du Passif du bilan sont-ils ordonnés ?',
              options: [
                'Par ordre croissant d’exigibilité (des capitaux propres vers les dettes à court terme)',
                'Par ordre croissant de liquidité',
                'Uniquement par date de création de l’entreprise',
                'En plaçant toujours les dettes fournisseurs au-dessus du capital social',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Passif est classé par origine et par ordre croissant d’exigibilité : Capitaux propres (non exigibles), Dettes financières (long terme), puis Dettes d’exploitation et Trésorerie-Passif.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Situation nette',
            stepTitle: 'Calculer le patrimoine net et le résultat',
            paragraphText:
              'La situation nette s’obtient par différence entre Total Actif et Total Dettes. Si le capital apporté au départ est supérieur à cette situation nette, l’entreprise a subi une perte.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Dans le cas SORO & BONI (Total Actif = 29 000 000 F, Dettes = 13 500 000 F), quel est le résultat de l’exercice si le capital social apporté était de 20 000 000 F ?',
              options: [
                'Un bénéfice de 5 500 000 F',
                'Un bénéfice de 4 500 000 F',
                'Un résultat nul',
                'Une perte de 4 500 000 F (portée en négatif aux capitaux propres)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Situation nette = 29 000 000 − 13 500 000 = 15 500 000 F. Comme le capital est de 20 000 000 F, Résultat = 15 500 000 − 20 000 000 = −4 500 000 F (perte).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Actif incorporel vs circulant',
            stepTitle: 'Identifier correctement les actifs immobilisés incorporels',
            paragraphText:
              'Attention à ne pas confondre les immobilisations incorporelles (brevets, licences, fonds commercial) avec les stocks ou créances de l’actif circulant.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Parmi ces éléments, lequel appartient à l’Actif immobilisé incorporel ?',
              options: [
                'Un stock de marchandises destiné à la revente immédiate',
                'Un brevet ou une licence logicielle acquise durablement',
                'Une créance sur un client payable à 30 jours',
                'Un camion de livraison',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un brevet ou une licence est un actif durable sans substance physique : c’est une immobilisation incorporelle (contrairement au camion qui est corporel et aux stocks/créances qui sont circulants).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch1_p2',
        order: 2,
        title: 'Le compte, le principe de la partie double et le Livre-Journal',
        summary:
          'Maîtriser les notions de débit, crédit, solde et appliquer la règle de la partie double au journal SYSCOHADA.',
        conceptExplanation:
          "Le **compte** est un tableau à deux colonnes (souvent schématisé en **T**) identifié par son numéro SYSCOHADA et son intitulé (ex. `101` Capital social, `411` Clients, `521` Banques, `601` Achats de marchandises, `701` Ventes de marchandises) :\n" +
          "- **Débit (côté gauche)** : enregistre les **emplois** (arrivée des flux).\n" +
          "- **Crédit (côté droit)** : enregistre les **ressources** (origine des flux).\n" +
          "- **Solde** : différence entre le total Débit et le total Crédit. Il est **débiteur (SD)** si Débit > Crédit (placé au crédit pour arrêter le compte) et **créditeur (SC)** si Crédit > Débit (placé au débit pour arrêter le compte).\n\n" +
          "Le **Livre-Journal** est un registre obligatoire, coté et paraphé, **conservé au moins 10 ans**, sans blanc ni rature, où les opérations sont enregistrées chronologiquement avec leur pièce justificative selon le **principe de la partie double** : dans chaque article, **Total Débit = Total Crédit**.",
        keyRule:
          'Principe de la partie double : toute écriture comptable implique au moins un compte débité et un compte crédité tels que Total Débit = Total Crédit. Les comptes d’actif et de charges augmentent au Débit ; ceux de passif et de produits augmentent au Crédit.',
        formulas: [
          {
            name: 'Équilibre d’un article de journal',
            formula: '\\sum \\text{Montants d\\acute{e}bit\\acute{e}s} = \\sum \\text{Montants cr\\acute{e}dit\\acute{e}s}',
            note: 'Règle universelle de la partie double',
          },
        ],
        workedExample: {
          title: 'Arrêter un compte en T et déterminer son solde',
          statement:
            'Le compte 521 Banques enregistre au débit 4 000 000 F (apport) et 850 000 F (encaissement client), et au crédit 1 200 000 F (paiement fournisseur) et 25 000 F (frais de transport). Déterminer la nature et le montant du solde.',
          methodSteps: [
            '1) Total Débit = 4 000 000 + 850 000 = 4 850 000 F.',
            '2) Total Crédit = 1 200 000 + 25 000 = 1 225 000 F.',
            '3) Débit > Crédit : le solde est débiteur (SD) = 4 850 000 − 1 225 000 = 3 625 000 F.',
            '4) Pour équilibrer le tableau en T à 4 850 000 F de chaque côté, on inscrit « Solde débiteur : 3 625 000 F » dans la colonne Crédit.',
          ],
          conclusion:
            'L’entreprise dispose d’un avoir en banque (solde débiteur) de 3 625 000 F.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Compte',
            stepTheme: 'Débit et Crédit',
            stepTitle: 'Associer emploi/ressource à débit/crédit',
            paragraphText:
              'L’imputation consiste à inscrire une somme au débit ou au crédit d’un compte selon la nature du flux.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Dans un compte comptable en T, que représente le côté gauche (Débit) ?',
              options: [
                'L’emploi, c’est-à-dire la destination ou l’arrivée du flux',
                'La ressource, c’est-à-dire l’origine du flux',
                'Uniquement les dettes fiscales envers l’État',
                'Les bénéfices distribués aux actionnaires',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par convention comptable, la colonne de gauche (Débit) enregistre les emplois et la colonne de droite (Crédit) enregistre les ressources.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Placement du solde',
            stepTitle: 'Savoir où inscrire un solde débiteur à l’arrêté du compte',
            paragraphText:
              'Lorsqu’on arrête un compte dont le Débit dépasse le Crédit, le solde est dit débiteur, mais on l’inscrit du côté le plus faible (le Crédit) pour égaliser les deux colonnes.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Un compte présente un total Débit de 2 500 000 F et un total Crédit de 1 800 000 F. Quelle est la nature de son solde et dans quelle colonne l’inscrit-on pour arrêter le compte ?',
              options: [
                'Solde créditeur de 700 000 F inscrit au Débit',
                'Solde débiteur de 700 000 F inscrit au Crédit',
                'Solde débiteur de 4 300 000 F inscrit au Débit',
                'Solde nul car le compte est soldé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Débit (2 500 000) > Crédit (1 800 000) donc le solde est débiteur de 700 000 F ; pour égaliser les totaux à 2 500 000 F, un solde débiteur se porte au Crédit.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Journal',
            stepTheme: 'Obligations légales',
            stepTitle: 'Connaître les règles légales de tenue du Livre-Journal',
            paragraphText:
              'Le Livre-Journal a une valeur probante devant les tribunaux et l’administration fiscale ; sa tenue obéit à des exigences strictes de forme et de durée de conservation.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Pendant combien d’années au minimum le Livre-Journal doit-il être conservé selon les règles comptables étudiées ?',
              options: [
                '2 ans',
                '5 ans',
                '10 ans au moins',
                '25 ans obligatoirement',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le Livre-Journal (coté, paraphé, sans blanc ni rature) doit être conservé pendant au moins 10 ans avec ses pièces justificatives.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'SYSCOHADA',
            stepTheme: 'Numéros de comptes',
            stepTitle: 'Identifier les principaux comptes du plan SYSCOHADA',
            paragraphText:
              'Chaque classe de comptes correspond à une grande famille patrimoniale ou de gestion : classe 1 (ressources durables), 2 (immobilisations), 3 (stocks), 4 (tiers), 5 (trésorerie), 6 (charges), 7 (produits), 8 (HAO).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q4',
              type: 'mcq',
              prompt: 'À quels intitulés correspondent respectivement les comptes 411, 521 et 701 dans le plan SYSCOHADA ?',
              options: [
                'Fournisseurs, Caisse, Achats de marchandises',
                'Capital social, Emprunts, Primes d’assurance',
                'Clients, Caisse, Variation de stocks',
                'Clients, Banques, Ventes de marchandises',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Dans le SYSCOHADA : 411 = Clients, 521 = Banques (571 = Caisse) et 701 = Ventes de marchandises (601 = Achats de marchandises).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Partie double',
            stepTheme: 'Contrôle d’une écriture',
            stepTitle: 'Vérifier le respect de la partie double',
            paragraphText:
              'Dans une comptabilité informatisée, une écriture est d’abord saisie en brouillard (modifiable) puis validée de manière définitive dès que l’équilibre Débit = Crédit est respecté.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Que devient une écriture comptable une fois qu’elle a été validée dans un logiciel de comptabilité ?',
              options: [
                'Elle ne peut plus être modifiée ni supprimée directement (toute correction exige une contre-passation)',
                'Elle peut être effacée librement jusqu’à la fin de l’exercice',
                'Elle disparaît du Grand-Livre mais reste dans la Balance',
                'Elle n’a plus besoin d’être équilibrée en partie double',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une écriture saisie en brouillard peut être corrigée, mais une fois validée au journal définitif, elle est intangible (intangibilité des écritures comptables).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch1_p3',
        order: 3,
        title: 'Grand-Livre, Balance et passage au Compte de Résultat & Bilan',
        summary:
          'Comprendre la chaîne comptable (Journal → Grand-Livre → Balance → États financiers) et ventiler les classes 1 à 8.',
        conceptExplanation:
          "Les écritures du Livre-Journal sont reportées dans le **Grand-Livre** (qui regroupe tous les comptes individuels de l'entreprise), puis synthétisées dans la **Balance**, véritable **instrument de contrôle et de synthèse**.\n\n" +
          "On distingue trois présentations de la balance : **à 2 colonnes** (soldes SD/SC), **à 4 colonnes** (sommes D/C et soldes SD/SC, avec les égalités $\\sum D = \\sum C$ et $\\sum SD = \\sum SC$), et **à 6 colonnes** (soldes d'ouverture, mouvements de la période, soldes de clôture).\n\n" +
          "À partir des soldes de la balance, on établit les deux états de synthèse :\n" +
          "- **Le Bilan** (classes **1 à 5**) : Actif = classes 2, 3, et soldes débiteurs des classes 4 et 5 ; Passif = classe 1, et soldes créditeurs des classes 4 et 5 (les comptes débiteurs de classe 1 comme `12` report à nouveau débiteur ou `13` perte s'inscrivent au Passif avec le signe `−`).\n" +
          "- **Le Compte de Résultat** (classes **6, 7 et 8**) : retrace la formation du résultat de l'exercice sur la période (**Produits − Charges**). Charges = classe 6 + comptes **8 impairs** (charges HAO) ; Produits = classe 7 + comptes **8 pairs** (produits HAO). Attention : `603` (variation de stocks) créditeur s'inscrit en charges avec le signe `−`, et `73` débiteur en produits avec le signe `−`.",
        keyRule:
          'Classes 1 à 5 → Bilan (photographie à une date donnée, « au 31/12/N »). Classes 6, 7 et 8 → Compte de Résultat (film de la période, « de l’année N ») : 8 impair = Charge HAO, 8 pair = Produit HAO.',
        formulas: [
          {
            name: 'Égalités de contrôle de la Balance à 4 colonnes',
            formula: '\\sum \\text{D\\acute{e}bits} = \\sum \\text{Cr\\acute{e}dits} \\quad \\text{et} \\quad \\sum \\text{SD} = \\sum \\text{SC}',
            note: 'De plus, le total des mouvements de la Balance égale le total du Livre-Journal',
          },
          {
            name: 'Résultat de l’exercice (Compte de Résultat)',
            formula: '\\text{R\\acute{e}sultat} = \\text{Produits (cl. 7 + 8 pairs)} - \\text{Charges (cl. 6 + 8 impairs)}',
            note: 'Identique au résultat net dégagé au Bilan',
          },
        ],
        workedExample: {
          title: 'Ventiler des comptes de la balance entre Bilan et Compte de Résultat',
          statement:
            'Dans la balance au 31/12/N figurent : 101 Capital (SC 10 000 000), 411 Clients (SD 2 400 000), 601 Achats (SD 8 000 000), 701 Ventes (SC 12 500 000), 812 Valeur comptable des cessions d’immobilisations (SD 500 000), 822 Produits des cessions (SC 900 000). Où classer chacun et quel est le résultat ?',
          methodSteps: [
            '1) Bilan : 101 Capital au Passif (classe 1) ; 411 Clients à l’Actif (classe 4, SD).',
            '2) Compte de Résultat — Charges : 601 Achats (8 000 000) + 812 VCCI (classe 8, 2e chiffre impair = 1 → charge HAO : 500 000) = 8 500 000 F.',
            '3) Compte de Résultat — Produits : 701 Ventes (12 500 000) + 822 Produits de cessions (2e chiffre pair = 2 → produit HAO : 900 000) = 13 400 000 F.',
            '4) Résultat net = 13 400 000 − 8 500 000 = +4 900 000 F (bénéfice).',
          ],
          conclusion:
            'Les classes 1 à 5 alimentent le Bilan et les classes 6, 7 et 8 déterminent un bénéfice de 4 900 000 F.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Chaîne',
            stepTheme: 'Rôle de la Balance',
            stepTitle: 'Identifier la double fonction de la Balance',
            paragraphText:
              'La Balance récapitule l’ensemble des comptes du Grand-Livre dans l’ordre du plan comptable pour vérifier les reports et donner une vue globale.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Quel document comptable sert à la fois d’instrument de contrôle des reports du Grand-Livre et d’instrument de synthèse préalable aux états financiers ?',
              options: [
                'La facture d’avoir',
                'La Balance générale des comptes',
                'Le devis fournisseur',
                'Le bon de livraison',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Balance vérifie l’exactitude arithmétique des reports (Total D = Total C et Total SD = Total SC) et résume tous les comptes avant l’établissement du Bilan et du Compte de Résultat.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'HAO',
            stepTheme: 'Classe 8 SYSCOHADA',
            stepTitle: 'Distinguer charges HAO et produits HAO dans la classe 8',
            paragraphText:
              'En comptabilité SYSCOHADA, la classe 8 regroupe les opérations Hors Activités Ordinaires (HAO) selon la parité du deuxième chiffre du compte.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Dans le plan SYSCOHADA, comment distingue-t-on une charge HAO d’un produit HAO dans la classe 8 ?',
              options: [
                'Tous les comptes de la classe 8 sont des charges',
                'Les comptes à 2e chiffre pair sont des charges et les impairs sont des produits',
                'Les comptes à 2e chiffre impair (81, 83, 85…) sont des charges HAO et ceux à 2e chiffre pair (82, 84, 86…) sont des produits HAO',
                'Les comptes de la classe 8 figurent uniquement à l’Actif du Bilan',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Règle SYSCOHADA : en classe 8, 2e chiffre impair = Charge HAO (ex. 812 VCCI) ; 2e chiffre pair = Produit HAO (ex. 822 Produits des cessions).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Compte 603',
            stepTitle: 'Traiter un solde créditeur du compte 603 Variation de stocks',
            paragraphText:
              'Contrairement aux autres comptes de charges, le compte 603 (Variation de stocks) peut être créditeur lorsque le stock final dépasse le stock initial.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Au Compte de Résultat, comment présente-t-on le compte 603 (Variation de stocks) lorsqu’il présente un solde créditeur ?',
              options: [
                'On le supprime de la comptabilité',
                'On l’inscrit à l’Actif immobilisé du Bilan',
                'On l’ajoute en positif aux charges de classe 6',
                'On le présente du côté des charges avec le signe négatif (−)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un solde créditeur du compte 603 correspond à un stockage (diminution de la consommation) : il reste dans la colonne Charges mais avec un signe moins (−).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'États financiers',
            stepTheme: 'Bilan vs Compte de Résultat',
            stepTitle: 'Distinguer date du Bilan et période du Compte de Résultat',
            paragraphText:
              'Le Bilan est un état statique (photographie du patrimoine à une date précise), tandis que le Compte de Résultat est un état dynamique (flux sur tout l’exercice).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Quelle formulation est comptablement exacte pour intituler les deux documents de synthèse d’un exercice clos le 31/12/2025 ?',
              options: [
                'Bilan au 31/12/2025 et Compte de Résultat de l’exercice 2025',
                'Bilan de l’année 2025 et Compte de Résultat au 31/12/2025',
                'Les deux documents s’intitulent « au 31/12/2025 » car ils mesurent des stocks',
                'Aucun des deux ne comporte de date',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Bilan décrit le patrimoine à un instant T (« au 31/12/2025 »), tandis que le Compte de Résultat récapitule les produits et charges accumulés sur toute la période (« de l’année 2025 »).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Bilan',
            stepTheme: 'Ventilation des tiers',
            stepTitle: 'Positionner les comptes de tiers (classe 4) au Bilan',
            paragraphText:
              'Les comptes de la classe 4 (clients, fournisseurs, État, personnel) peuvent présenter un solde débiteur (créance) ou créditeur (dette).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Où place-t-on au Bilan un compte de tiers de classe 4 présentant un solde créditeur (SC) ?',
              options: [
                'À l’Actif circulant',
                'Au Passif (dettes envers les tiers)',
                'En Produits HAO au Compte de Résultat',
                'Dans l’Actif immobilisé financier',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un compte de tiers à solde débiteur est une créance (Actif) ; un compte de tiers à solde créditeur (ex. 401 Fournisseurs) est une dette inscrite au Passif.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : Facturation commerciale — Doit, Réductions, TVA, Port & Avoir
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch2',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Opérations d’achats-ventes — Factures de Doit, Réductions, TVA, Port & Avoir (Compta G2)',
    summary:
      'Mentions obligatoires de la facture, calcul en cascade des RRR, escompte (673/773), TVA 18 % (4431/4452), distinction port facturé vs port débours et comptabilisation des factures d’avoir.',
    officialVolumeHours: 18,
    contentVersion: 2,
    source: 'Compta G2 — COMPTABILITE GENERALE ENTD 1 ESATIC 2026.pdf (Chapitre 1)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch2_p1',
        order: 1,
        title: 'Facture de Doit et réductions commerciales en cascade (RRR)',
        summary:
          'Calculer rabais, remises et ristournes en cascade et enregistrer la facture de Doit chez le fournisseur et chez le client.',
        conceptExplanation:
          "La **facture** (établie obligatoirement par le fournisseur) est la pièce justificative de preuve d'une opération d'achat-vente, exigée par l'administration fiscale. Elle comporte les mentions obligatoires : identité du fournisseur et du client, date, numéro, détails de la transaction, arrêté du **Net à Payer (NAP)** et signature.\n\n" +
          "Les **réductions à caractère commercial (RRR)** sont :\n" +
          "- **Rabais** : défaut de qualité, non-conformité ou retard de livraison.\n" +
          "- **Remise** : qualité du client ou importance de la quantité commandée.\n" +
          "- **Ristourne** : réduction périodique calculée sur l'ensemble du chiffre d'affaires réalisé avec un client.\n\n" +
          "**Règles SYSCOHADA sur une facture de Doit** :\n" +
          "1. Les réductions commerciales se calculent **en cascade** (jamais en additionnant les pourcentages !).\n" +
          "2. Les RRR portés sur une facture de Doit **ne s'enregistrent pas dans un compte spécifique** : on comptabilise directement le **dernier Net Commercial** dans `601 Achats de marchandises` (client) et `701 Ventes de marchandises` (fournisseur).",
        keyRule:
          'Sur une facture de Doit, les RRR se calculent en cascade et NE SE COMPTABILISENT PAS séparément : 601 et 701 enregistrent directement le dernier Net Commercial.',
        formulas: [
          {
            name: 'Remises successives en cascade (taux r₁ puis r₂)',
            formula: '\\text{NC}_2 = \\text{Brut HT} \\times (1 - r_1) \\times (1 - r_2)',
            note: 'Attention : deux remises de 5 % et 10 % donnent (0,95 × 0,90) = 0,855 et NON 0,85 !',
          },
        ],
        workedExample: {
          title: 'Facture N°00M21 — Établissement SERY & Cie vers IIT (Cours G2)',
          statement:
            'SERY & Cie vend 100 sacs de riz à 10 000 F l’unité à crédit au client IIT avec une 1re remise de 5 % puis une 2e remise de 10 % (hors TVA). Calculer le Net Commercial et passer l’écriture chez les deux parties.',
          methodSteps: [
            '1) Montant brut = 100 × 10 000 = 1 000 000 F.',
            '2) 1re remise (5 %) = 50 000 F → 1er Net Commercial = 950 000 F.',
            '3) 2e remise (10 % sur 950 000) = 95 000 F → 2e Net Commercial (NAP) = 855 000 F.',
            '4) Chez le fournisseur SERY & Cie : Débit 411 Client (855 000) / Crédit 701 Vente de marchandises (855 000).',
            '5) Chez le client IIT : Débit 601 Achat de marchandises (855 000) / Crédit 401 Fournisseur (855 000).',
          ],
          conclusion:
            'Les remises n’apparaissent dans aucun compte de la facture de Doit : seul le dernier Net Commercial de 855 000 F est enregistré.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'RRR',
            stepTheme: 'Rabais vs Remise vs Ristourne',
            stepTitle: 'Distinguer les trois réductions commerciales',
            paragraphText:
              'Chaque lettre du sigle RRR correspond à un motif commercial précis accordé par le fournisseur.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Quelle réduction commerciale est accordée à un client en raison d’un défaut de qualité ou d’un retard de livraison ?',
              options: [
                'La remise',
                'La ristourne',
                'Le rabais',
                'L’escompte de règlement',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le rabais compense un défaut de qualité, une non-conformité ou un retard ; la remise récompense le volume/qualité du client et la ristourne porte sur le CA d’une période.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Calcul en cascade',
            stepTitle: 'Ne jamais additionner deux taux de remise',
            paragraphText:
              'Lorsque deux remises successives figurent sur une facture, la seconde s’applique sur le premier Net Commercial et non sur le montant brut.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Pour un montant brut de 1 000 000 F avec deux remises successives de 5 % puis 10 %, quel est le Net Commercial final ?',
              options: [
                '850 000 F',
                '900 000 F',
                '860 000 F',
                '855 000 F',
              ],
              correctAnswerIndex: 3,
              explanation:
                '1er NC = 1 000 000 × 0,95 = 950 000 F ; 2e NC = 950 000 × 0,90 = 855 000 F (et non 850 000 F).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Enregistrement',
            stepTheme: 'Traitement des RRR sur Doit',
            stepTitle: 'Comptabiliser le dernier Net Commercial',
            paragraphText:
              'Sur une facture de Doit, les RRR viennent simplement en déduction du prix de vente/d’achat pour déterminer la base enregistrée.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Comment comptabilise-t-on une remise de 5 % figurant sur une facture de Doit ?',
              options: [
                'Elle ne se comptabilise pas séparément : on enregistre directement le Net Commercial dans 601 (client) et 701 (fournisseur)',
                'Au débit du compte 673 chez le fournisseur',
                'Au crédit du compte 773 chez le client',
                'Au débit du compte 4431 TVA facturée',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les réductions commerciales sur facture de Doit ne font l’objet d’aucune écriture propre : seul le dernier Net Commercial est porté en 601/701.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Écriture',
            stepTheme: 'Achat au comptant vs à crédit',
            stepTitle: 'Choisir le bon compte de contrepartie (571/521 vs 401/411)',
            paragraphText:
              'Un règlement immédiat en espèces fait intervenir le compte 571 Caisse ; un achat à crédit fait intervenir 401 Fournisseur (ou 411 Client chez le vendeur).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q4',
              type: 'mcq',
              prompt: 'L’entreprise VI vend 500 000 F de marchandises réglées immédiatement en espèces par BA. Quelle écriture passe le vendeur VI ?',
              options: [
                'Débit 601 (500 000) / Crédit 571 Caisse (500 000)',
                'Débit 571 Caisse (500 000) / Crédit 701 Vente de marchandises (500 000)',
                'Débit 411 Client (500 000) / Crédit 571 Caisse (500 000)',
                'Débit 701 Vente (500 000) / Crédit 401 Fournisseur (500 000)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le vendeur encaisse des espèces (emploi : Débit 571 Caisse) grâce à sa vente (ressource : Crédit 701 Vente de marchandises).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Facture',
            stepTheme: 'Établissement de la facture',
            stepTitle: 'Identifier qui établit la facture et ses mentions',
            paragraphText:
              'La facture est une obligation commerciale et fiscale qui protège les deux parties.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Qui a la charge légale d’établir la facture lors d’une transaction commerciale ?',
              options: [
                'Le transporteur indépendant',
                'La banque du client',
                'Le fournisseur (vendeur)',
                'L’acheteur uniquement',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’établissement de la facture incombe toujours au fournisseur ; elle sert de pièce justificative comptable pour les deux parties.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch2_p2',
        order: 2,
        title: 'Escompte de règlement (673 / 773) et TVA (18 %)',
        summary:
          'Comptabiliser l’escompte financier, calculer le Net Financier et appliquer la TVA à 18 % (4431 / 4452).',
        conceptExplanation:
          "Contrairement aux RRR, l'**escompte de règlement** est une **réduction à caractère financier** accordée pour règlement au comptant ou anticipé. **Il est toujours comptabilisé**, même sur une facture de Doit :\n" +
          "- Chez le **fournisseur** : charge financière au **Débit du `673 Escomptes accordés`**.\n" +
          "- Chez le **client** : produit financier au **Crédit du `773 Escomptes obtenus`**.\n\n" +
          "La **TVA (Taxe sur la Valeur Ajoutée, 18 % en Côte d'Ivoire)** est un impôt indirect supporté par le consommateur final. L'entreprise assujettie la collecte sur ses ventes (**Crédit `4431 TVA facturée sur ventes`**) et récupère celle payée sur ses achats (**Débit `4452 TVA récupérable sur achats`**).\n\n" +
          "**Règle d'or de décompte** : Brut HT → − RRR → **Net Commercial** → − Escompte → **Net Financier** → + TVA (18 % sur le Net Financier) → **Net à Payer (NAP)**.",
        keyRule:
          '601 et 701 enregistrent toujours le dernier Net Commercial ; 673 (fournisseur) et 773 (client) enregistrent l’escompte ; la TVA (18 %) se calcule sur le Net Financier (et 401/411 reçoivent le Net à Payer TTC).',
        formulas: [
          {
            name: 'Net Financier et TVA (18 %)',
            formula: '\\text{NF} = \\text{NC} - \\text{Escompte}, \\quad \\text{TVA} = 0{,}18 \\times \\text{NF}, \\quad \\text{NAP} = \\text{NF} + \\text{TVA}',
            note: 'En l’absence de port facturé ou d’emballages consignés',
          },
        ],
        workedExample: {
          title: 'Facture BDP → TK avec remise 5 %, escompte 2 % et TVA 18 % (Cours G2, Exemple 5)',
          statement:
            'BDP vend à TK des marchandises pour 4 000 000 F HT, remise 5 %, escompte 2 %, TVA 18 %. Dresser le décompte et passer l’écriture chez le fournisseur BDP et chez le client TK.',
          methodSteps: [
            '1) Brut HT = 4 000 000 F ; Remise 5 % = 200 000 F → Net Commercial = 3 800 000 F.',
            '2) Escompte 2 % sur 3 800 000 = 76 000 F → Net Financier = 3 724 000 F.',
            '3) TVA 18 % sur 3 724 000 = 670 320 F → Net à Payer = 4 394 320 F.',
            '4) Fournisseur BDP : D 411 Client (4 394 320) + D 673 Escompte accordé (76 000) / C 701 Ventes (3 800 000) + C 4431 TVA/ventes (670 320).',
            '5) Client TK : D 601 Achats (3 800 000) + D 4452 TVA/achats (670 320) / C 401 Fournisseur (4 394 320) + C 773 Escompte obtenu (76 000).',
          ],
          conclusion:
            'Total Débit = Total Crédit = 4 470 320 F chez les deux parties : la partie double est parfaitement vérifiée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Escompte',
            stepTheme: 'Comptes 673 et 773',
            stepTitle: 'Enregistrer l’escompte chez le vendeur et l’acheteur',
            paragraphText:
              'L’escompte est une charge financière pour celui qui l’accorde (fournisseur) et un produit financier pour celui qui en bénéficie (client).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Dans quels comptes SYSCOHADA enregistre-t-on l’escompte de règlement respectivement chez le fournisseur et chez le client ?',
              options: [
                'Crédit 773 chez le fournisseur et Débit 673 chez le client',
                'Débit 673 (Escomptes accordés) chez le fournisseur et Crédit 773 (Escomptes obtenus) chez le client',
                'Débit 601 chez le fournisseur et Crédit 701 chez le client',
                'L’escompte ne se comptabilise jamais sur une facture de Doit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le fournisseur subit une charge financière (Débit 673) et le client réalise un produit financier (Crédit 773).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'TVA',
            stepTheme: 'Assiette de la TVA',
            stepTitle: 'Calculer la TVA sur le Net Financier',
            paragraphText:
              'Une erreur fréquente en examen consiste à calculer la TVA sur le Brut ou sur le Net Commercial en oubliant de déduire l’escompte.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Sur quelle base applique-t-on la TVA de 18 % lorsqu’une facture comporte une remise et un escompte (sans port facturé) ?',
              options: [
                'Sur le Montant Brut HT',
                'Sur le Net Commercial',
                'Sur le Net Financier (Net Commercial − Escompte)',
                'Sur le montant de l’escompte uniquement',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Règle impérative du cours : la TVA s’applique toujours sur le Net Financier (augmenté éventuellement du port facturé).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Montant en 601 / 701',
            stepTitle: 'Vérifier quel montant est porté en 601 / 701 en présence d’un escompte',
            paragraphText:
              'Même lorsqu’un escompte est accordé, les comptes 601 et 701 conservent le Net Commercial afin de ne pas mélanger résultat commercial et résultat financier.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Dans l’exemple BDP → TK (Brut 4 000 000 F, NC 3 800 000 F, NF 3 724 000 F, NAP 4 394 320 F), quel montant crédite-t-on dans 701 Ventes de marchandises ?',
              options: [
                '4 000 000 F (Brut HT)',
                '3 724 000 F (Net Financier)',
                '4 394 320 F (Net à Payer)',
                '3 800 000 F (dernier Net Commercial)',
              ],
              correctAnswerIndex: 3,
              explanation:
                '701 Ventes (et 601 Achats) enregistre toujours le dernier Net Commercial (3 800 000 F) ; l’escompte (76 000 F) est isolé dans 673/773.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'TVA',
            stepTheme: 'Comptes de TVA',
            stepTitle: 'Distinguer TVA facturée (4431) et TVA récupérable (4452)',
            paragraphText:
              'La TVA collectée par le fournisseur est une dette envers l’État (passif) ; la TVA payée par le client sur ses achats est une créance déductible sur l’État (actif).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Lors d’une vente de marchandises soumise à la TVA, quel compte de TVA est mouvementé chez le fournisseur et dans quel sens ?',
              options: [
                'Crédit du compte 4431 (TVA facturée sur ventes)',
                'Débit du compte 4431 (TVA facturée sur ventes)',
                'Crédit du compte 4452 (TVA récupérable sur achats)',
                'Débit du compte 673',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le fournisseur collecte la TVA pour la reverser à la DGI : il crédite le compte 4431. Le client débite 4452 (ou 4456) pour la récupérer.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Équilibre',
            stepTheme: 'Vérification Débit = Crédit',
            stepTitle: 'Contrôler une écriture d’achat avec escompte et TVA',
            paragraphText:
              'Chez le client, la somme (Achats NC + TVA récupérable) est toujours égale à la somme (Fournisseur NAP + Escompte obtenu).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Chez le client, si NC = 1 000 000 F, Escompte = 20 000 F et TVA (18 % sur 980 000) = 176 400 F, quel est le Net à Payer porté au crédit du 401 Fournisseur ?',
              options: [
                '1 176 400 F',
                '1 156 400 F',
                '1 180 000 F',
                '980 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'NF = 1 000 000 − 20 000 = 980 000 F. NAP = NF + TVA = 980 000 + 176 400 = 1 156 400 F (vérification : D 1 000 000 + 176 400 = C 1 156 400 + 20 000 = 1 176 400 F).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch2_p3',
        order: 3,
        title: 'Frais de transport (Port facturé vs Port débours) et Factures d’Avoir',
        summary:
          'Maîtriser l’incidence de la TVA sur les deux régimes de transport et comptabiliser les factures d’avoir.',
        conceptExplanation:
          "En matière de **frais de transport (port)** facturés au client, deux régimes strictement différents existent :\n" +
          "1. **Port facturé (forfaitaire)** : le fournisseur assure lui-même la livraison avec son propre camion. Activité accessoire à la vente, le port **suit la TVA de la marchandise (18 %)** et s'ajoute **AVANT la TVA** au Net Financier. Enregistrement : **Crédit `7071 Ports et frais facturés`** chez le fournisseur ; **Débit `6015 Frais sur achats`** chez le client.\n" +
          "2. **Port avancé / payé (débours)** : le fournisseur fait appel à un transporteur tiers (ex. SITARAIL), paie le transport (`D 613 Transport pour le compte de tiers / C 401 Transporteur`) puis refacture le montant exact à son client. Le transport étant exonéré de TVA, le port débours s'ajoute **APRÈS la TVA** pour ne pas l'y exposer.\n\n" +
          "Les **factures d'Avoir** constatent un retour de marchandises ou des **réductions hors facture** (accordées après la facture de Doit). Contrairement à la facture de Doit, **les RRR hors facture se comptabilisent** (diminution de `701`/`601` et de `411`/`401`). Pour un **escompte hors facture** accordé pour paiement anticipé, la TVA est régularisée sur le montant de l'escompte (`Escompte TTC = Escompte HT + TVA 18 %`).",
        keyRule:
          'Port facturé (camion du fournisseur) = soumis à TVA 18 % (placé AVANT la TVA, 7071 / 6015). Port avancé/débours (transporteur tiers) = exonéré de TVA (placé APRÈS la TVA, 613 puis refacturation).',
        formulas: [
          {
            name: 'Base TVA avec Port facturé vs Port débours',
            formula: '\\text{Base TVA (port factur\\acute{e})} = \\text{NF} + \\text{Port}, \\qquad \\text{NAP (port d\\acute{e}bours)} = \\text{NF} \\times 1{,}18 + \\text{Port}',
            note: 'Seul le port facturé entre dans la base de calcul de la TVA',
          },
        ],
        workedExample: {
          title: 'Port facturé (MAT-INFO → IIT) vs Port débours (SRIT 2 → TWIN via SITARAIL)',
          statement:
            'MAT-INFO vend des RAM pour 500 000 F HT, remise 1 %, escompte 2 %, port facturé 20 000 F HT, TVA 18 %. Calculer le NAP.',
          methodSteps: [
            '1) NC = 500 000 − 5 000 = 495 000 F.',
            '2) Escompte (2 %) = 9 900 F → Net Financier = 485 100 F.',
            '3) Port facturé (livraison par le fournisseur) ajouté AVANT TVA : Total HT = 485 100 + 20 000 = 505 100 F.',
            '4) TVA 18 % sur 505 100 = 90 918 F → NAP = 505 100 + 90 918 = 596 018 F.',
          ],
          conclusion:
            'Si le port de 20 000 F avait été un port débours (via un transporteur tiers), la TVA n’aurait porté que sur 485 100 F (87 318 F) et les 20 000 F auraient été ajoutés après la TVA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Port facturé',
            stepTheme: 'Livraison par le fournisseur',
            stepTitle: 'Traiter le port assuré par le fournisseur',
            paragraphText:
              'Lorsque le vendeur livre avec ses propres moyens, le port est un produit accessoire qui subit la même TVA que les marchandises.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Comment traite-t-on un « port facturé » (livraison assurée par le fournisseur lui-même) vis-à-vis de la TVA et dans quel compte le fournisseur l’enregistre-t-il ?',
              options: [
                'Exonéré de TVA, placé après la TVA, au débit du compte 613',
                'Soumis à la TVA de 18 % (placé avant la TVA), au crédit du compte 7071 (Ports et frais facturés)',
                'Soumis à la TVA, au débit du compte 6015 chez le fournisseur',
                'Non comptabilisé sur la facture de Doit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le port facturé est une activité accessoire soumise à TVA (18 %) : il s’ajoute avant la TVA et se crédite en 7071 chez le fournisseur (et se débite en 6015 chez le client).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Port débours',
            stepTheme: 'Transporteur tiers',
            stepTitle: 'Éviter d’exposer le port débours à la TVA',
            paragraphText:
              'Lorsque le fournisseur fait appel à un transporteur externe (ex. SITARAIL) et répercute le coût exact au client, il s’agit d’un port payé / débours.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q2',
              type: 'mcq',
              prompt: 'À quel endroit du décompte de la facture place-t-on le « port payé (débours) » afin de ne pas l’exposer à la TVA ?',
              options: [
                'Avant les remises commerciales',
                'Entre le Net Commercial et l’escompte',
                'Juste après la TVA (ajouté au TTC marchandises)',
                'Dans la colonne des réductions financières',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les activités de transport public étant exonérées de TVA dans le cours, le port débours s’ajoute après le calcul de la TVA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Avoir',
            stepTheme: 'RRR hors facture',
            stepTitle: 'Comptabiliser un rabais accordé sur facture d’Avoir',
            paragraphText:
              'Contrairement à la facture de Doit, un rabais ou une ristourne accordé ultérieurement par facture d’Avoir doit être comptabilisé pour réduire les ventes/achats et la créance/dette.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q3',
              type: 'mcq',
              prompt: 'IRANN adresse à son client G&B Sarl une facture d’avoir de 110 000 F pour rabais hors facture. Quelle écriture passe le client G&B Sarl ?',
              options: [
                'Débit 601 Achats (110 000) / Crédit 401 Fournisseur (110 000)',
                'Débit 521 Banque (110 000) / Crédit 701 Ventes (110 000)',
                'Aucune écriture car un rabais ne se comptabilise jamais',
                'Débit 401 Fournisseur IRANN (110 000) / Crédit 601 Achats de marchandises (110 000)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le rabais hors facture réduit la dette envers le fournisseur (Débit 401) et diminue le coût d’achat (Crédit 601, ou 6019 si non rattaché).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Avoir financier',
            stepTheme: 'Escompte hors facture TTC',
            stepTitle: 'Calculer un escompte de règlement hors facture avec TVA',
            paragraphText:
              'Un escompte accordé après facturation pour règlement anticipé porte sur le HT mais entraîne une régularisation de TVA à 18 %.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Sur une facture initiale de 3 000 000 F HT (TVA 18 %), SRIT accorde un escompte hors facture de 3 % à SIGL pour paiement anticipé. Quel est le montant de l’escompte TTC ?',
              options: [
                '106 200 F (90 000 HT + 16 200 TVA)',
                '90 000 F (sans TVA)',
                '180 000 F',
                '54 000 F',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Escompte HT = 3 % × 3 000 000 = 90 000 F ; TVA (18 %) = 16 200 F ; Escompte TTC = 90 000 + 16 200 = 106 200 F (Exemple 11 du cours G2).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Client',
            stepTheme: 'Compte de port chez l’acheteur',
            stepTitle: 'Enregistrer les frais de port supportés par le client',
            paragraphText:
              'Dans le SYSCOHADA révisé, les frais accessoires sur achats de marchandises (dont le port facturé au client) augmentent le coût d’achat.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Dans quel compte principal le client enregistre-t-il les frais de port sur ses achats de marchandises selon le SYSCOHADA révisé ?',
              options: [
                'Crédit 7071 Ports facturés',
                'Débit 6015 Frais sur achats (ou 611 Transports sur achats)',
                'Crédit 411 Clients',
                'Débit 101 Capital social',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chez l’acheteur, le transport sur achat est enregistré au débit du compte 6015 Frais sur achats (ou 611/6241 selon le plan de l’exercice).',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : Emballages commerciaux, Trésorerie & Effets de commerce
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch3',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Emballages commerciaux, Trésorerie et Effets de commerce (Compta G2)',
    summary:
      'Consignation, déconsignation et destruction d’emballages récupérables (cas SOLIBRA/DASI), règlements et opérations sur Lettres de change (création, renouvellement avec intérêts de retard, négociation/escompte).',
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Compta G2 — ESATIC 2026 & Examen Session 1 Corrigé (G&B Sarl / Entreprise BROU)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch3_p1',
        order: 1,
        title: 'Emballages commerciaux : consignation, déconsignation et mali',
        summary:
          'Comptabiliser la consignation d’emballages récupérables, leur retour normal ou à prix inférieur (mali) et leur non-restitution/destruction.',
        conceptExplanation:
          "Les **emballages récupérables non identifiables** (casiers de boissons, bouteilles de gaz, palettes) peuvent être **consignés** par le fournisseur au client : le client verse un dépôt de garantie qui lui sera remboursé au retour.\n\n" +
          "- **Consignation** (sur la facture de Doit, **non soumise à la TVA** car ce n'est pas une vente définitive) : créance conditionnelle chez le client (`Débit 4094 Fournisseurs, créances pour emballages à rendre` ou `4196` selon l'énoncé d'examen) et dette conditionnelle chez le fournisseur (`Crédit 4194 Clients, dettes pour emballages consignés`).\n" +
          "- **Déconsignation au prix de consignation** : l'écriture inverse solde la créance/dette d'emballages (aucun gain ni perte).\n" +
          "- **Déconsignation à un prix inférieur** (casiers abîmés ou retenue d'usage) : le client constate une **perte (mali sur emballages)** égale à `Prix consigné − Prix repris` (charge en classe 6) et le fournisseur réalise un **boni** (produit en `7074`).\n" +
          "- **Emballages détruits ou conservés** : la consignation se transforme en achat/charge définitive (ex. 40 casiers détruits chez G&B Sarl → `Débit charge / Crédit compte d'emballages consignés`).",
        keyRule:
          'La consignation d’emballages est un dépôt de garantie exonéré de TVA. Si le prix de reprise est inférieur au prix de consignation, la différence est un mali (charge) chez le client et un boni (produit) chez le fournisseur.',
        formulas: [
          {
            name: 'Mali sur déconsignation (chez le client)',
            formula: '\\text{Mali} = \\text{Prix de consignation} - \\text{Prix de reprise}',
            note: 'Enregistré au Débit d’un compte de charge (ex. 6224 Malis sur emballages)',
          },
        ],
        workedExample: {
          title: 'Consignation et déconsignation avec perte — Examen G&B Sarl (ESATIC 2025-2026)',
          statement:
            'Le 07/04/N, G&B Sarl achète 1 000 casiers de SODA à DASI avec consignation de 1 000 casiers à 900 F l’unité (900 000 F). Le 15/10/N, DASI déconsigne ces 1 000 casiers pour 800 000 F seulement (avoir AV5810). Passer les écritures chez G&B Sarl.',
          methodSteps: [
            '1) Consignation du 07/04/N : 1 000 × 900 F = 900 000 F portés au Débit du compte d’emballages consignés (en plus de 601, port et TVA) et inclus dans le NAP au Crédit de 401 DASI.',
            '2) Déconsignation du 15/10/N : DASI ne rembourse que 800 000 F (Débit 401 DASI : 800 000 F).',
            '3) Perte (mali) sur déconsignation = 900 000 − 800 000 = 100 000 F (Débit charge / mali : 100 000 F).',
            '4) Solde du compte d’emballages consignés au Crédit pour le montant initial de 900 000 F.',
          ],
          conclusion:
            'Total Débit (800 000 + 100 000) = Total Crédit (900 000 F) : le compte d’emballages consignés est soldé et la perte de 100 000 F est constatée.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'TVA',
            stepTheme: 'Régime TVA des emballages consignés',
            stepTitle: 'Savoir si la consignation supporte la TVA',
            paragraphText:
              'La consignation n’est pas un transfert de propriété mais un prêt garanti d’emballages récupérables.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Sur une facture de Doit, le montant des emballages consignés est-il soumis à la TVA de 18 % ?',
              options: [
                'Oui, toujours avant le calcul de l’escompte',
                'Oui, uniquement pour les boissons gazeuses',
                'Non, car il s’agit d’une créance/dette de garantie et non d’une vente définitive',
                'Oui, au taux réduit de 9 %',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La consignation d’emballages récupérables n’étant pas une vente, elle s’ajoute après la TVA et n’est pas soumise à la TVA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Mali',
            stepTheme: 'Déconsignation inférieure',
            stepTitle: 'Calculer une perte (mali) sur déconsignation',
            paragraphText:
              'Lorsque le fournisseur reprend les emballages à un prix inférieur au prix consigné, le client subit une charge appelée mali.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q2',
              type: 'mcq',
              prompt: 'G&B Sarl retourne 1 000 casiers consignés à 900 F l’unité, mais le fournisseur ne les reprend qu’à 800 F l’unité. Quel est le montant du mali enregistré en charge chez G&B Sarl ?',
              options: [
                '900 000 F',
                '800 000 F',
                '1 700 000 F',
                '100 000 F',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Mali = Prix consigné (900 000 F) − Prix de reprise (800 000 F) = 100 000 F.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Destruction',
            stepTheme: 'Emballages détruits',
            stepTitle: 'Comptabiliser des emballages consignés détruits chez le client',
            paragraphText:
              'Des casiers consignés qui sont cassés ou détruits ne pourront plus être rendus : la créance sur le fournisseur disparaît et devient une charge.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Dans l’examen G&B Sarl, 40 casiers consignés à 1 000 F sont détruits. Quel est l’effet comptable chez le client ?',
              options: [
                'On débite un compte de charge (40 000 F) et on crédite le compte d’emballages consignés (40 000 F)',
                'On crédite 701 Ventes de marchandises pour 40 000 F',
                'On débite 521 Banque pour 40 000 F',
                'On augmente le compte d’emballages consignés au débit',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La destruction transforme la consignation perdue en charge (Débit charge 40 000 F) et solde la créance d’emballages consignés correspondante (Crédit 40 000 F).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Boni',
            stepTheme: 'Point de vue fournisseur',
            stepTitle: 'Qualifier le gain du fournisseur en cas de reprise inférieure',
            paragraphText:
              'La différence qui constitue une perte (mali) pour le client représente symétriquement un produit accessoire pour le fournisseur.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Comment appelle-t-on, chez le fournisseur, la différence positive entre le prix de consignation et un prix de reprise inférieur ?',
              options: [
                'Un escompte accordé',
                'Un boni sur reprises d’emballages (produit accessoire 7074)',
                'Un rabais hors facture',
                'Une immobilisation corporelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le fournisseur conserve une partie de la consignation : c’est un boni sur reprises d’emballages consignés (Crédit 7074).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Acompte',
            stepTheme: 'Imputation d’avance fournisseur',
            stepTitle: 'Solder une avance versée lors de la réception de la facture',
            paragraphText:
              'Dans le cas DASI (examen G&B Sarl), un acompte de 500 000 F avait déjà été versé au fournisseur : il vient en déduction de la dette 401 lors de la facturation.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Lorsqu’un client impute un acompte de 500 000 F précédemment versé à son fournisseur, quelle écriture passe-t-il ?',
              options: [
                'Débit 521 Banque (500 000) / Crédit 401 Fournisseur (500 000)',
                'Débit 601 Achats (500 000) / Crédit 4091 Avances versées (500 000)',
                'Débit 401 Fournisseur (500 000) / Crédit compte d’Avances et acomptes versés (500 000)',
                'Débit 701 Ventes (500 000) / Crédit 411 Client (500 000)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’imputation de l’acompte réduit la dette 401 (Débit 401) et solde le compte d’avances et acomptes versés au fournisseur (Crédit 4091 / 4011).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch3_p2',
        order: 2,
        title: 'Effets de commerce : création, renouvellement et négociation',
        summary:
          'Maîtriser la Lettre de change (412 / 403), le calcul des intérêts de retard lors d’un renouvellement et la remise à l’escompte en banque.',
        conceptExplanation:
          "Les **effets de commerce** (notamment la **Lettre de change** ou traite, et le **Billet à ordre**) sont à la fois des instruments de paiement à échéance et des instruments de crédit mobilisables en banque.\n\n" +
          "1. **Création / Acceptation de la Lettre de change** :\n" +
          "   - Chez le fournisseur (tireur) : `Débit 412 Clients, effets à recevoir / Crédit 411 Clients`.\n" +
          "   - Chez le client (tiré) : `Débit 401 Fournisseurs / Crédit 403 Fournisseurs, effets à payer`.\n\n" +
          "2. **Prorogation / Renouvellement d'un effet** (le client prévient avant l'échéance qu'il ne pourra pas payer) :\n" +
          "   - **Annulation** de l'ancienne traite : `Débit 411 Client / Crédit 412 Effets à recevoir`.\n" +
          "   - **Création d'une nouvelle traite** majorée des **intérêts de retard** ($I = \\frac{V \\times t \\times n}{360}$), du timbre fiscal et des frais de correspondance : `Débit 412 / Crédit 411 + Produits financiers (intérêts) + Frais récupérés`.\n\n" +
          "3. **Remise à l'escompte (négociation bancaire)** : le fournisseur cède l'effet avant l'échéance à sa banque (`Débit 415 / 5114 Effets à l'escompte / Crédit 412`), puis à réception de l'avis de crédit encaisse le **Net** (`Débit 521 Banque + Débit 675/6732 Agios/Escompte bancaire / Crédit compte d'effet remis`).",
        keyRule:
          'Fournisseur = 412 (Effets à recevoir). Client = 403 (Effets à payer). Intérêts de retard d’un renouvellement (année commerciale 360 j) : I = (Nominal × taux × jours) / 360.',
        formulas: [
          {
            name: 'Intérêts de retard lors d’un renouvellement d’effet',
            formula: 'I = \\frac{V \\times t \\times n}{360}',
            note: 'V = nominal de l’ancien effet, t = taux annuel, n = nombre de jours de report',
          },
          {
            name: 'Nominal du nouvel effet renouvelé',
            formula: 'V_{\\text{nouveau}} = V_{\\text{ancien}} + I + \\text{Timbre} + \\text{Frais de correspondance}',
            note: 'Cas de l’exercice 2 BROU / Kouamé (Examen ESATIC 2025-2026)',
          },
        ],
        workedExample: {
          title: 'Renouvellement et négociation de traite — Exercice 2 BROU / Kouamé (Examen ESATIC)',
          statement:
            'BROU détient la LC N°104 de 708 000 F sur son client Kouamé (éch. 03/01/N+1). Le 21/12/N, Kouamé demande un report de 60 jours au taux de 12 % l’an, timbre 200 F, correspondance 100 F (nouvelle LC N°106). Le 30/12/N, BROU remet la LC N°106 à l’escompte à NSIA BANQUE et reçoit le 02/01/N+1 un avis de crédit de 700 000 F.',
          methodSteps: [
            '1) Annulation LC N°104 (21/12/N) : D 411 Kouamé (708 000) / C 412 Effets à recevoir (708 000).',
            '2) Intérêts de retard : I = 708 000 × 12 % × (60 / 360) = 14 160 F.',
            '3) Nominal LC N°106 (22/12/N) = 708 000 + 14 160 + 200 + 100 = 722 460 F → D 412 (722 460) / C 411 (708 000) + Intérêts (14 160) + Timbre (200) + Corresp. (100).',
            '4) Remise en banque (30/12/N) : D 5114 Effets remis (722 460) / C 412 (722 460).',
            '5) Avis de crédit (02/01/N+1) : D 521 Banque (700 000) + D Frais/escompte bancaire (22 460) / C 5114 (722 460).',
          ],
          conclusion:
            'BROU obtient immédiatement 700 000 F de liquidités moyennant 22 460 F d’agios bancaires.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Effets',
            stepTheme: 'Comptes 412 et 403',
            stepTitle: 'Distinguer Effets à recevoir et Effets à payer',
            paragraphText:
              'La création d’une lettre de change transforme une créance client ordinaire (411) en effet à recevoir (412) chez le vendeur, et une dette fournisseur (401) en effet à payer (403) chez l’acheteur.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q1',
              type: 'mcq',
              prompt: 'G&B Sarl accepte la lettre de change N°45 de 4 937 920 F tirée par son fournisseur DASI. Quelle écriture passe G&B Sarl (le client) ?',
              options: [
                'Débit 412 Effets à recevoir / Crédit 411 Clients',
                'Débit 403 Effets à payer / Crédit 401 Fournisseur DASI',
                'Débit 521 Banque / Crédit 403 Effets à payer',
                'Débit 401 Fournisseur DASI (4 937 920) / Crédit 403 Fournisseurs — Effets à payer (4 937 920)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Chez le client (tiré), la dette ordinaire 401 est soldée au débit et remplacée par la dette cambiaire 403 Effets à payer au crédit.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Intérêts',
            stepTheme: 'Calcul des intérêts de retard',
            stepTitle: 'Appliquer la formule d’intérêts simples sur 360 jours',
            paragraphText:
              'En comptabilité commerciale, l’année compte 360 jours pour le calcul des intérêts de report d’échéance.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Dans le cas BROU / Kouamé, un effet de 708 000 F est prorogé de 60 jours au taux annuel de 12 %. Quel est le montant des intérêts de retard ?',
              options: [
                '14 160 F',
                '84 960 F',
                '7 080 F',
                '22 460 F',
              ],
              correctAnswerIndex: 0,
              explanation:
                'I = 708 000 × 0,12 × (60 / 360) = 708 000 × 0,02 = 14 160 F.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Renouvellement',
            stepTheme: 'Nominal de la nouvelle traite',
            stepTitle: 'Additionner principal, intérêts et frais accessoires',
            paragraphText:
              'La nouvelle traite doit couvrir le principal initial plus l’ensemble des frais supportés par le tireur pour le renouvellement.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Quel est le montant nominal de la nouvelle LC N°106 comprenant le principal (708 000 F), les intérêts (14 160 F), le timbre fiscal (200 F) et les frais de correspondance (100 F) ?',
              options: [
                '708 300 F',
                '722 460 F',
                '722 160 F',
                '700 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                '708 000 + 14 160 + 200 + 100 = 722 460 F.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Escompte bancaire',
            stepTheme: 'Négociation d’un effet',
            stepTitle: 'Enregistrer la réception de l’avis de crédit bancaire',
            paragraphText:
              'Lorsqu’une banque escompte une traite avant son échéance, elle retient des frais/intérêts d’escompte (agios) et crédite le compte de l’entreprise du montant net.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q4',
              type: 'mcq',
              prompt: 'BROU remet la LC N°106 de 722 460 F à l’escompte et reçoit un avis de crédit bancaire net de 700 000 F. Que représente la différence de 22 460 F ?',
              options: [
                'Un produit financier au crédit du compte 773',
                'Un remboursement de TVA à la DGI',
                'Une charge financière (escompte/frais bancaires) enregistrée au Débit',
                'Une augmentation de la créance sur le client Kouamé',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les 22 460 F retenus par NSIA BANQUE constituent des frais/escompte bancaire (agios) comptabilisés au Débit d’un compte de charges financières (675/6732).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Impayé',
            stepTheme: 'Effet impayé à l’échéance',
            stepTitle: 'Traiter les frais bancaires sur effet impayé',
            paragraphText:
              'Lorsqu’un effet présenté à l’échéance revient impayé, la banque prélève des frais sur le compte bancaire du tireur, qui les impute au client défaillant.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Lorsqu’une banque débite 6 000 F de frais sur le compte 521 pour un effet impayé d’un client, dans quel sens le compte 521 Banque est-il mouvementé ?',
              options: [
                'Au Débit car l’entreprise reçoit de l’argent',
                'Dans aucun compte car les impayés sont hors bilan',
                'Au Débit du compte 101 Capital',
                'Au Crédit du compte 521 Banque (sortie de trésorerie)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un avis de débit bancaire diminue les disponibilités en banque : on crédite le compte 521 Banque (et on débite le compte d’effets impayés / frais imputés au client).',
            },
          },
        ],
      }),
    ],
  },
];
