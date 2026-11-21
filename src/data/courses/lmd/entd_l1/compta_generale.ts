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

export const COMPTA_GENERALE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : Fondements, partie double, Bilan, Compte de résultat et SYSCOHADA
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch1',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Fondements, Bilan patrimonial, Compte de résultat et SYSCOHADA',
    summary:
      'Définition de l’entreprise et des flux économiques, principe de la partie double, structure du Bilan (Actif/Passif et situation nette), Compte de résultat et architecture des 8 classes du Plan Comptable SYSCOHADA révisé.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Générale',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch1_p1',
        order: 1,
        title: 'L’entreprise, les flux économiques et le rôle de la comptabilité générale',
        summary:
          'Comprendre la nature économique de l’entreprise, distinguer flux réels et flux financiers, et identifier les principes et destinataires de l’information comptable.',
        conceptExplanation:
          'Une entreprise est une organisation financièrement indépendante qui combine des moyens humains, matériels et financiers pour produire des biens ou des services destinés au marché dans le but principal de dégager un profit.\n\n' +
          'Ses échanges avec son environnement engendrent deux types de mouvements : les flux réels (biens ou prestations de services) et les flux financiers (monnaie, créances ou dettes).\n\n' +
          'La comptabilité générale est le système d’information normalisé qui codifie, enregistre chronologiquement et synthétise ces flux en valeur monétaire afin d’informer les dirigeants, les banquiers, les associés et l’administration fiscale.',
        formulas: [
          {
            name: 'Équilibre d’un échange économique',
            formula: '\\text{Flux r\\acute{e}el (bien / service)} \\iff \\text{Flux financier (monnaie / cr\\acute{e}ance / dette)}',
            note: 'Chaque opération marchande lie un emploi et une ressource de même valeur.',
          },
        ],
        keyRule:
          'La comptabilité générale enregistre chaque opération à partir d’une pièce justificative datée et probante (facture, chèque, pièce de caisse) selon les normes du SYSCOHADA révisé.',
        workedExample: {
          title: 'Analyse des flux d’une vente à crédit — Entreprise Lagune Distribution',
          statement:
            'Le 10 mars N, Lagune Distribution (Abidjan) vend à crédit des fournitures informatiques à un client pour 1 500 000 FCFA (règlement prévu à 30 jours). Identifier les deux flux générés et les utilisateurs intéressés par cette information.',
          methodSteps: [
            '1) Flux réel sortant : livraison de fournitures informatiques par Lagune Distribution vers le client (valeur 1 500 000 FCFA).',
            '2) Flux financier entrant différé : naissance d’une créance client de 1 500 000 FCFA, qui se transformera en flux monétaire lors du règlement à 30 jours.',
            '3) Destinataires internes et externes : le service commercial suit l’encours client, le service financier suit la trésorerie attendue et l’administration fiscale contrôle le chiffre d’affaires déclaré.',
          ],
          conclusion:
            'Toute transaction à crédit crée simultanément un flux réel immédiat et une créance (ou dette) matérialisée ensuite par un flux monétaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Entreprise',
            stepTheme: 'Classification des entreprises',
            stepTitle: 'Définir l’entreprise et ses trois critères de classement',
            paragraphText:
              'Avant de traduire l’activité en écritures, il faut cerner ce qu’est une entreprise : une entité économiquement autonome produisant pour le marché afin de créer de la valeur.\n' +
              '• **Selon le domaine d’activité** : entreprises commerciales (achat-revente en l’état), industrielles (transformation de matières premières en produits finis), de services, agricoles ou de BTP.\n' +
              '• **Selon la taille et la nature juridique** : PME ou grandes entreprises (chiffre d’affaires, effectif, capitaux) ; entreprises privées, publiques ou mixtes.\n' +
              '• **Exemple** : un distributeur de smartphones à Treichville est une PME commerciale, tandis qu’une usine de transformation de cacao à San-Pédro est une entreprise industrielle.',
            keyRule:
              'Une entreprise commerciale achète des marchandises (compte 601) pour les revendre sans transformation, alors qu’une entreprise industrielle achète des matières premières (compte 602) pour fabriquer des produits finis.',
            konanTip:
              'Vérifie toujours si l’entreprise transforme le bien acheté : ce détail change immédiatement les numéros de comptes utilisés au journal.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Une société achète des tablettes numériques auprès d’un fabricant et les revend telles quelles à des lycées et entreprises. Dans quelle catégorie se classe-t-elle ?',
              options: [
                'Une entreprise industrielle',
                'Une entreprise commerciale',
                'Une entreprise agricole',
                'Une administration publique',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Acheter des biens (marchandises) pour les revendre sans transformation physique caractérise l’entreprise commerciale.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Flux',
            stepTheme: 'Flux économiques',
            stepTitle: 'Distinguer flux réel et flux financier dans un échange',
            paragraphText:
              'Chaque transaction avec un partenaire extérieur met en jeu une double circulation de valeur entre l’entreprise et le tiers.\n' +
              '• **Flux réel (physique)** : mouvement portant sur un bien matériel (marchandise, machine) ou une prestation de service (transport, conseil, maintenance).\n' +
              '• **Flux financier (monétaire ou de créance/dette)** : mouvement de trésorerie immédiat (espèces, chèque, virement) ou engagement de paiement différé (créance sur un client, dette envers un fournisseur).\n' +
              '• **Exemple** : lors d’un achat de 800 000 FCFA payé par virement, l’entreprise reçoit un flux réel (marchandises) et émet un flux financier sortant (virement bancaire).',
            formula: {
              name: 'Dualité des flux',
              formula: '\\text{Emploi (destination)} = \\text{Ressource (origine)}',
              note: 'La valeur du flux réel égale toujours celle du flux financier en contrepartie.',
            },
            keyRule:
              'Un échange au comptant oppose un flux réel à un flux monétaire immédiat ; un échange à crédit oppose un flux réel à une créance ou une dette.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Une entreprise paie 350 000 FCFA en espèces pour une prestation de maintenance réseau déjà réalisée. Quel flux représente le versement des 350 000 FCFA ?',
              options: [
                'Un flux réel entrant',
                'Un flux réel sortant',
                'Un flux financier sortant',
                'Un flux interne sans contrepartie',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La maintenance est un flux réel de service reçu ; la sortie d’espèces de la caisse constitue un flux financier sortant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Finalités',
            stepTheme: 'Utilisateurs et missions',
            stepTitle: 'Identifier les missions et destinataires de la comptabilité générale',
            paragraphText:
              'La comptabilité générale ne sert pas uniquement à calculer l’impôt : c’est le langage commun de la confiance financière dans l’espace OHADA.\n' +
              '• **Mémoire juridique et fiscale** : elle conserve la preuve des créances, dettes et opérations afin d’établir les déclarations fiscales (TVA, BIC) auprès de la DGI.\n' +
              '• **Outil de décision externe** : les banques et investisseurs analysent le Bilan et le Compte de résultat pour apprécier la solvabilité et la rentabilité.\n' +
              '• **Exemple** : pour obtenir un crédit d’équipement de 25 millions FCFA auprès d’une banque à Abidjan, l’entreprise doit présenter des états financiers certifiés.',
            konanTip:
              'Retiens que la comptabilité générale est obligatoire, normalisée et tournée vers la preuve juridique et l’information des tiers.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Lequel des utilisateurs suivants s’appuie directement sur les états financiers de la comptabilité générale pour évaluer la capacité de remboursement d’un emprunt ?',
              options: [
                'Le banquier prêteur',
                'Le logiciel de messagerie interne',
                'Le transporteur routier occasionnel',
                'Un concurrent anonyme sans accès aux comptes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les banquiers et investisseurs utilisent le Bilan et le Compte de résultat pour mesurer la solidité financière et la solvabilité de l’entreprise.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Principes',
            stepTheme: 'Postulats et conventions',
            stepTitle: 'Maîtriser les principes directeurs du référentiel SYSCOHADA',
            paragraphText:
              'Pour que deux entreprises d’Abidjan et de Dakar produisent des comptes comparables, le SYSCOHADA révisé impose des règles strictes.\n' +
              '• **Principe de prudence** : on comptabilise toute perte probable dès qu’elle est envisagée (provision), mais on n’enregistre jamais un gain simplement espéré.\n' +
              '• **Spécialisation des exercices et continuité d’exploitation** : chaque exercice (du 1er janvier au 31 décembre) ne rattache que les charges et produits qui le concernent, en supposant la poursuite normale de l’activité.\n' +
              '• **Exemple** : une facture d’électricité de décembre N reçue en janvier N+1 doit être rattachée aux charges de l’exercice N.',
            keyRule:
              'Selon le principe du coût historique et de prudence, les biens entrent à leur coût d’acquisition et les risques probables sont immédiatement provisionnés.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Un client conteste une créance et risque de devenir insolvable à 50 %. Quel principe oblige l’entreprise à constater dès la clôture cette perte probable ?',
              options: [
                'Le principe de permanence des méthodes',
                'Le principe de prudence',
                'Le principe de l’entité',
                'Le principe du nominalisme monétaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le principe de prudence impose d’anticiper les pertes probables (dépréciations, provisions) sans jamais anticiper les gains latents.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Preuve',
            stepTheme: 'Pièces justificatives',
            stepTitle: 'Associer chaque écriture comptable à sa pièce justificative',
            paragraphText:
              'En comptabilité, une écriture sans justificatif est juridiquement nulle et fiscalement rejetée lors d’un contrôle.\n' +
              '• **Pièces d’origine externe** : factures fournisseurs, relevés bancaires, avis de débit/crédit, quittances d’assurance ou reçus de paiement.\n' +
              '• **Pièces d’origine interne** : doubles des factures de vente émises, bulletins de paie, pièces de caisse, bordereaux de remise de chèques.\n' +
              '• **Exemple** : une sortie de 50 000 FCFA en caisse pour acheter du carburant est justifiée par un ticket de caisse agrafé à un bon de caisse signé.',
            keyRule:
              'Pas de pièce justificative, pas d’enregistrement comptable : toute pièce doit être classée et conservée pendant au moins 10 ans.',
            konanTip:
              'Lors d’un examen de journal comptable, recopie toujours dans le libellé le numéro de la pièce justificative (Fre n°..., Chèque n°..., Avis de crédit n°...).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle est la durée légale minimale de conservation des livres comptables et pièces justificatives dans l’espace OHADA ?',
              options: [
                '2 ans',
                '5 ans',
                '10 ans',
                '25 ans',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’Acte uniforme OHADA impose la conservation des livres comptables obligatoires et des pièces justificatives pendant au moins 10 ans.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Patrimoine privé vs entreprise',
            stepTitle: 'Séparer le patrimoine de l’entreprise de celui du dirigeant',
            paragraphText:
              'L’un des pièges classiques chez les jeunes créateurs d’entreprise consiste à confondre la caisse de la société et le portefeuille personnel du propriétaire.\n' +
              '• **Principe de l’entité** : l’entreprise possède une personnalité comptable et patrimoniale distincte de celle de ses associés ou de son fondateur.\n' +
              '• **Conséquence pratique** : si le gérant prélève de l’argent en caisse pour payer les frais scolaires de son enfant, ce n’est pas une charge d’exploitation mais un prélèvement affectant son compte courant d’associé ou de l’exploitant (compte 104 / 462).\n' +
              '• **Exemple** : un retrait personnel de 200 000 FCFA n’augmente jamais les charges de classe 6 de la société.',
            keyRule:
              'Seules les opérations engagées dans l’intérêt et pour l’activité de l’entreprise constituent des charges déductibles et enregistrables en classe 6.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Le gérant d’une SARL utilise la caisse de l’entreprise pour régler son loyer personnel d’habitation (250 000 FCFA). Comment analyser cette opération ?',
              options: [
                'C’est une charge locative normale de l’entreprise (compte 622)',
                'C’est un prélèvement personnel à imputer au compte du gérant/associé, pas une charge de l’entreprise',
                'C’est un produit financier pour l’entreprise',
                'C’est une immobilisation corporelle de classe 2',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En vertu du principe de l’entité, une dépense strictement privée du dirigeant ne peut pas être comptabilisée en charge d’exploitation de la société.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch1_p2',
        order: 2,
        title: 'Le Bilan patrimonial, l’Actif, le Passif et la Situation nette',
        summary:
          'Construire le Bilan SYSCOHADA à une date donnée, classer les emplois et ressources selon leur liquidité et exigibilité, et calculer la situation nette ainsi que le résultat.',
        conceptExplanation:
          'Le Bilan est une photographie du patrimoine de l’entreprise à une date donnée (généralement le 31 décembre).\n\n' +
          'À gauche figure l’Actif (ce que l’entreprise possède et utilise : emplois), classé par ordre croissant de liquidité : Actif immobilisé, Actif circulant (stocks et créances) et Trésorerie-Actif.\n\n' +
          'À droite figure le Passif (origine des financements : ressources), classé par ordre croissant d’exigibilité : Capitaux propres, Dettes financières, Passif circulant et Trésorerie-Passif. L’équilibre Actif = Passif est assuré par le Résultat net intégré aux Capitaux propres.',
        formulas: [
          {
            name: 'Patrimoine net (Situation nette)',
            formula: '\\text{Situation nette} = \\text{Total Actif} - \\text{Total Dettes}',
            note: 'Mesure la richesse réelle appartenant aux propriétaires.',
          },
          {
            name: 'Résultat net au Bilan',
            formula: '\\text{R\\acute{e}sultat net} = \\text{Situation nette} - \\text{Capital social}',
            note: 'En l’absence de réserves ou de prélèvements : positif = bénéfice, négatif = perte.',
          },
        ],
        keyRule:
          'Actif = Passif est une identité comptable inviolable : si le patrimoine net dépasse le capital apporté, la différence est un bénéfice inscrit en positif au Passif ; s’il est inférieur, la perte figure avec un signe moins (−) dans les capitaux propres.',
        workedExample: {
          title: 'Bilan et calcul du résultat — Société SORO et BONI',
          statement:
            'Au 1er janvier N, la société SORO et BONI recense : Bâtiments 12 500 000 F, Matériel de transport 2 500 000 F, Marchandises 5 000 000 F, Clients 4 000 000 F, Banque 4 000 000 F, Caisse 1 000 000 F, Emprunt à 3 ans 10 000 000 F, Fournisseurs 3 500 000 F. Déterminer la situation nette puis le résultat si le capital social est de 10 000 000 F.',
          methodSteps: [
            '1) Calcul du Total Actif : 12 500 000 + 2 500 000 + 5 000 000 + 4 000 000 + 4 000 000 + 1 000 000 = 29 000 000 F.',
            '2) Calcul du Total Dettes : Emprunt (10 000 000) + Fournisseurs (3 500 000) = 13 500 000 F.',
            '3) Situation nette = 29 000 000 − 13 500 000 = 15 500 000 F.',
            '4) Résultat net = 15 500 000 − 10 000 000 (Capital) = +5 500 000 F (bénéfice).',
          ],
          conclusion:
            'Le Bilan s’équilibre à 29 000 000 F de part et d’autre, faisant apparaître un enrichissement (bénéfice) de 5 500 000 F.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Actif',
            stepTheme: 'Structure de l’Actif',
            stepTitle: 'Classer l’Actif par ordre croissant de liquidité',
            paragraphText:
              'L’Actif du bilan regroupe les biens durables et les droits détenus par l’entreprise, rangés du moins liquide (en haut) au plus liquide (en bas).\n' +
              '• **Actif immobilisé (classe 2)** : biens destinés à rester durablement (> 1 an) — immobilisations incorporelles (brevets, licences), corporelles (terrains, bâtiments, matériel) et financières (cautions, titres à long terme).\n' +
              '• **Actif circulant (classes 3 et 4)** : stocks de marchandises/matières et créances sur les clients destinés à tourner rapidement.\n' +
              '• **Trésorerie-Actif (classe 5)** : disponibilités en banque (521) et en caisse (571).',
            keyRule:
              'La liquidité mesure la rapidité avec laquelle un actif peut se transformer en monnaie : terrain (faible liquidité) → stock → créance client → caisse (liquidité immédiate).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Parmi les éléments suivants du Bilan, lequel est classé en haut de l’Actif car il est le moins liquide ?',
              options: [
                'Les disponibilités en caisse',
                'Les créances sur les clients à 30 jours',
                'Un logiciel métier acquis pour 5 ans et un bâtiment d’exploitation',
                'Le stock de marchandises destinées à la vente immédiate',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’Actif étant classé par ordre croissant de liquidité, les immobilisations durables (logiciel, bâtiment) figurent tout en haut dans l’Actif immobilisé.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Passif',
            stepTheme: 'Structure du Passif',
            stepTitle: 'Classer le Passif par origine et exigibilité croissante',
            paragraphText:
              'Le Passif décrit l’origine des fonds ayant financé l’Actif, classés des ressources les plus stables aux dettes les plus urgentes à rembourser.\n' +
              '• **Capitaux propres (classe 1)** : apports des associés (capital social 101), bénéfices conservés (réserves 11) et résultat net de l’exercice (13).\n' +
              '• **Dettes financières (16)** : emprunts bancaires à moyen et long terme.\n' +
              '• **Passif circulant (classe 4) et Trésorerie-Passif (56)** : dettes fournisseurs, dettes fiscales et sociales, découverts bancaires à très court terme.',
            konanTip:
              'Ne confonds jamais « Passif » et « Dettes » : le Passif comprend les Capitaux propres (ressources internes non exigibles immédiatement) PLUS les Dettes (ressources externes).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Selon quel critère les postes du Passif sont-ils ordonnés de haut en bas dans le Bilan SYSCOHADA ?',
              options: [
                'Par ordre décroissant de valeur monétaire',
                'Par ordre croissant d’exigibilité (du moins exigible au plus exigible)',
                'Par ordre alphabétique des créanciers',
                'Par ordre croissant de liquidité',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Passif est ordonné par exigibilité croissante : Capitaux propres (stables) en haut, puis Dettes financières à long terme, puis Dettes circulantes et Trésorerie-Passif en bas.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Formule',
            stepTheme: 'Situation nette',
            stepTitle: 'Calculer la Situation nette (patrimoine réel)',
            paragraphText:
              'Pour connaître la richesse réelle d’une entreprise à un instant t, il ne suffit pas d’additionner ses biens : il faut en retrancher tout ce qu’elle doit aux tiers.\n' +
              '• **Approche patrimoniale** : $\\text{Situation nette} = \\text{Biens} + \\text{Cr\\acute{e}ances} + \\text{Tr\\acute{e}sorerie-Actif} - \\text{Dettes}$.\n' +
              '• **Approche par les ressources internes** : $\\text{Situation nette} = \\text{Capital} + \\text{R\\acute{e}serves} \\pm \\text{R\\acute{e}sultat net}$.\n' +
              '• **Exemple** : avec 29 000 000 F d’Actif et 13 500 000 F de dettes (emprunt + fournisseurs), la situation nette vaut 15 500 000 FCFA.',
            formula: {
              name: 'Double détermination de la Situation nette',
              formula: '\\text{SN} = \\text{Total Actif} - \\text{Total Dettes} = \\text{Capitaux propres}',
              note: 'Les deux méthodes donnent rigoureusement le même montant.',
            },
            keyRule:
              'Lorsque la Situation nette devient négative (Total Dettes > Total Actif), l’entreprise est en situation nette déficitaire (insolvabilité patrimoniale).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Une start-up possède 18 000 000 FCFA d’actifs totaux et doit 6 500 000 FCFA à la banque ainsi que 2 500 000 FCFA à ses fournisseurs. Quelle est sa situation nette ?',
              options: [
                '9 000 000 FCFA',
                '11 500 000 FCFA',
                '15 500 000 FCFA',
                '27 000 000 FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Total Dettes = 6 500 000 + 2 500 000 = 9 000 000 FCFA. Situation nette = Total Actif − Total Dettes = 18 000 000 − 9 000 000 = 9 000 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Équilibre',
            stepTheme: 'Bénéfice ou perte au Bilan',
            stepTitle: 'Déterminer le résultat de l’exercice par le Bilan',
            paragraphText:
              'Au cours d’un exercice, l’activité enrichit ou appauvrit l’entreprise. Pour maintenir l’égalité Actif = Passif, cette variation est isolée sur la ligne « Résultat net » des capitaux propres.\n' +
              '• **Cas d’enrichissement** : si la situation nette (15 500 000 F) dépasse le capital initial (10 000 000 F), le résultat est un bénéfice de +5 500 000 F inscrit en positif au Passif.\n' +
              '• **Cas d’appauvrissement** : si le capital initial était de 20 000 000 F pour la même situation nette de 15 500 000 F, le résultat est une perte de −4 500 000 F.\n' +
              '• **Règle SYSCOHADA** : une perte figure toujours au Passif dans les capitaux propres avec le signe moins (−), jamais à l’Actif.',
            formula: {
              name: 'Équation d’équilibre du Bilan',
              formula: '\\text{Total Actif} = \\text{Capital} + \\text{R\\acute{e}serves} + \\text{R\\acute{e}sultat} + \\text{Dettes}',
              note: 'Le signe du Résultat est positif en cas de bénéfice et négatif en cas de perte.',
            },
            konanTip:
              'Dans le plan SYSCOHADA révisé, une perte ne se met JAMAIS à l’Actif : elle vient en déduction (−) des capitaux propres au Passif.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Le Bilan de clôture affiche un Total Actif de 29 000 000 F, un Total Dettes de 13 500 000 F et un Capital social de 20 000 000 F (sans réserves). Quel est le résultat net ?',
              options: [
                'Un bénéfice de +4 500 000 F inscrit à l’Actif',
                'Une perte de −4 500 000 F inscrite au Passif dans les capitaux propres',
                'Un bénéfice de +5 500 000 F inscrit au Passif',
                'Une perte de −5 500 000 F inscrite à l’Actif',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Situation nette = 29 000 000 − 13 500 000 = 15 500 000 F. Résultat = 15 500 000 − 20 000 000 = −4 500 000 F (perte), portée en négatif dans les capitaux propres au Passif.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Tableau Bilan',
            stepTheme: 'Présentation SYSCOHADA',
            stepTitle: 'Lire un Bilan SYSCOHADA complet et équilibré',
            paragraphText:
              'Le tableau ci-dessous présente la structure complète du Bilan d’application (cas SORO et BONI avec un capital initial de 10 000 000 FCFA).\n' +
              '• **Colonne Actif** : les postes sont ventilés en Actif immobilisé (15 M), Actif circulant (9 M) et Trésorerie-Actif (5 M), totalisant 29 000 000 FCFA.\n' +
              '• **Colonne Passif** : les capitaux propres atteignent 15 500 000 FCFA (Capital 10 M + Bénéfice 5,5 M) et les dettes 13 500 000 FCFA (Emprunt 10 M + Fournisseurs 3,5 M).\n' +
              '• **Vérification** : Total Actif (29 000 000) = Total Passif (29 000 000).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Bilan SYSCOHADA équilibré (en FCFA)',
              caption: 'Classement par liquidité croissante à l’Actif et par exigibilité croissante au Passif.',
              tableData: {
                headers: ['ACTIF (Emplois)', 'Montant', 'PASSIF (Ressources)', 'Montant'],
                rows: [
                  ['Bâtiments (Actif immobilisé)', '12 500 000', 'Capital social (Capitaux propres)', '10 000 000'],
                  ['Matériel de transport (Actif immo.)', '2 500 000', 'Résultat net : Bénéfice (+)', '5 500 000'],
                  ['Marchandises (Stocks / Circulant)', '5 000 000', 'Emprunt à 3 ans (Dettes fin.)', '10 000 000'],
                  ['Clients (Créances / Circulant)', '4 000 000', 'Fournisseurs (Passif circulant)', '3 500 000'],
                  ['Banques & Caisse (Trésorerie-Actif)', '5 000 000', 'Trésorerie-Passif', '0'],
                  ['TOTAL ACTIF', '29 000 000', 'TOTAL PASSIF', '29 000 000'],
                ],
              },
            },
            keyRule:
              'Dans tout bilan régulier, la somme des trois grandes masses de l’Actif égale exactement la somme des quatre grandes masses du Passif.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'D’après le tableau du Bilan ci-dessus, quel est le montant total de l’Actif circulant (hors trésorerie) ?',
              options: [
                '5 000 000 FCFA',
                '9 000 000 FCFA',
                '14 000 000 FCFA',
                '15 000 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Actif circulant regroupe ici les stocks de marchandises (5 000 000 F) et les créances clients (4 000 000 F), soit 9 000 000 FCFA (la trésorerie de 5 000 000 F formant la Trésorerie-Actif).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Impact d’une opération sur le Bilan',
            stepTitle: 'Vérifier qu’une opération au comptant ne modifie pas le total du Bilan',
            paragraphText:
              'Une erreur fréquente consiste à croire que tout achat augmente automatiquement le total du Bilan.\n' +
              '• **Échange actif contre actif** : acheter un ordinateur à 600 000 FCFA par chèque bancaire augmente les immobilisations (+600 000 F) et diminue la banque (−600 000 F). Le total du Bilan reste strictement inchangé.\n' +
              '• **Opération modifiant le total** : contracter un emprunt de 5 000 000 FCFA augmente à la fois la Banque (+5 M à l’Actif) et les Emprunts (+5 M au Passif).\n' +
              '• **Règle d’or** : quelle que soit l’opération, l’égalité Actif = Passif est préservée à chaque instant.',
            konanTip:
              'Teste toujours mentalement les deux faces d’une opération : si les deux mouvements touchent uniquement l’Actif en sens opposé (+ et −), le total du Bilan ne varie pas.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Une entreprise paie 1 200 000 FCFA par virement bancaire pour régler intégralement une dette fournisseur. Quel est l’effet sur le Total du Bilan ?',
              options: [
                'Le Total du Bilan augmente de 1 200 000 FCFA',
                'Le Total du Bilan diminue de 1 200 000 FCFA',
                'Le Total du Bilan reste inchangé',
                'Le Résultat net diminue de 1 200 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le paiement diminue la Trésorerie-Actif (−1 200 000 F) et diminue simultanément la dette Fournisseur au Passif (−1 200 000 F) : les deux côtés du Bilan baissent de 1 200 000 FCFA.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch1_p3',
        order: 3,
        title: 'Le Compte de résultat et le Plan comptable SYSCOHADA (classes 1 à 8)',
        summary:
          'Distinguer Bilan et Compte de résultat, maîtriser l’architecture des 8 classes du SYSCOHADA (AO vs HAO) et comprendre les variations de stocks (603 et 73).',
        conceptExplanation:
          'Alors que le Bilan décrit l’état du patrimoine à une date précise (« au 31/12/N »), le Compte de résultat retrace l’activité de toute une période (« exercice N ») en confrontant les Produits (enrichissements) et les Charges (appauvrissements).\n\n' +
          'Le Plan comptable SYSCOHADA classe les comptes en 8 grandes familles : les classes 1 à 5 forment les comptes de Bilan (situation patrimoniale), les classes 6 et 7 regroupent les charges et produits des Activités Ordinaires (AO), et la classe 8 rassemble les charges (8 impair) et produits (8 pair) Hors Activités Ordinaires (HAO).\n\n' +
          'Le Résultat net calculé au Compte de résultat ($\text{Produits} - \text{Charges}$) est rigoureusement identique à celui inscrit dans les Capitaux propres du Bilan.',
        formulas: [
          {
            name: 'Résultat net par le Compte de résultat',
            formula: '\\text{R\\acute{e}sultat net} = \\sum \\text{Produits (cl. 7 + cl. 8 pair)} - \\sum \\text{Charges (cl. 6 + cl. 8 impair)}',
            note: 'Bénéfice si Produits > Charges ; Perte si Charges > Produits.',
          },
          {
            name: 'Variation de stock de marchandises (6031)',
            formula: '\\Delta \\text{Stock} = \\text{Stock initial (SI)} - \\text{Stock final (SF)}',
            note: 'Si SF > SI (stockage), le solde de 603 est créditeur et vient en déduction (−) des charges.',
          },
        ],
        keyRule:
          'Classes 1 à 5 = Bilan ; Classes 6 à 8 = Compte de résultat. Dans la classe 8 (HAO), le 2e chiffre impair (81, 83, 85, 87, 89) désigne une charge et le 2e chiffre pair (82, 84, 86, 88) désigne un produit.',
        workedExample: {
          title: 'Calcul du résultat avec variation de stock et opération HAO',
          statement:
            'Au titre de l’exercice N, une PME enregistre : Ventes de marchandises (701) = 45 000 000 F, Achats de marchandises (601) = 28 000 000 F, Stock initial = 3 000 000 F, Stock final = 4 500 000 F, Autres charges AO (61 à 66) = 9 500 000 F, Valeur comptable d’un véhicule cédé (812) = 1 200 000 F, Prix de cession du véhicule (822) = 1 800 000 F. Calculer le résultat net.',
          methodSteps: [
            '1) Variation de stock (6031) = SI − SF = 3 000 000 − 4 500 000 = −1 500 000 F (solde créditeur venant en diminution des achats consommés).',
            '2) Total Charges = Achats (28 000 000) + Variation 6031 (−1 500 000) + Autres charges AO (9 500 000) + Charge HAO 812 (1 200 000) = 37 200 000 F.',
            '3) Total Produits = Ventes 701 (45 000 000) + Produit HAO 822 (1 800 000) = 46 800 000 F.',
            '4) Résultat net = 46 800 000 − 37 200 000 = +9 600 000 F (bénéfice).',
          ],
          conclusion:
            'Le bénéfice net de l’exercice N s’élève à 9 600 000 FCFA (dont 9 000 000 F sur les Activités Ordinaires et 600 000 F de plus-value HAO).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Compte de résultat',
            stepTheme: 'Bilan vs Compte de résultat',
            stepTitle: 'Distinguer l’instant du Bilan et le film du Compte de résultat',
            paragraphText:
              'En analyse financière, on oppose souvent ces deux états de synthèse complémentaires.\n' +
              '• **Le Bilan** est un état statique de stocks patrimoniaux établi à une date précise (ex. : « Bilan au 31/12/N »).\n' +
              '• **Le Compte de résultat** est un état dynamique de flux couvrant une durée (ex. : « Compte de résultat de l’exercice N ») : il remet à zéro les charges et produits au début de chaque nouvel exercice.\n' +
              '• **Lien organique** : le Résultat net calculé au Compte de résultat vient s’inscrire au Passif du Bilan dans les capitaux propres (compte 13).',
            keyRule:
              'On dit toujours « Bilan au 31 décembre N » (photo à une date), mais « Compte de résultat de l’exercice N » (film d’une année).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle affirmation distingue correctement le Compte de résultat du Bilan ?',
              options: [
                'Le Compte de résultat décrit le patrimoine à une date précise, le Bilan décrit les flux d’une période',
                'Le Compte de résultat récapitule les charges et produits d’une période pour expliquer la formation du résultat',
                'Le Compte de résultat ne concerne que les entreprises publiques',
                'Le Bilan et le Compte de résultat donnent des résultats nets différents',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Compte de résultat explique la formation du résultat sur toute la durée de l’exercice (Produits − Charges), résultat qui s’inscrit ensuite au Bilan.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Classes 1 à 8',
            stepTheme: 'Plan SYSCOHADA',
            stepTitle: 'Maîtriser l’architecture des 8 classes du SYSCOHADA révisé',
            paragraphText:
              'Le Plan Comptable Général OHADA (PCGO) attribue à chaque compte un numéro dont le premier chiffre indique la classe.\n' +
              '• **Classes 1 à 5 (Comptes de Bilan)** : 1 Ressources durables (Passif), 2 Actif immobilisé, 3 Stocks, 4 Tiers (clients/fournisseurs/État), 5 Trésorerie.\n' +
              '• **Classes 6 et 7 (Gestion AO)** : 6 Charges des Activités Ordinaires, 7 Produits des Activités Ordinaires.\n' +
              '• **Classe 8 (Gestion HAO)** : opérations exceptionnelles ou non récurrentes (cessions d’immobilisations, subventions d’équilibre, participation des travailleurs, impôts sur le résultat).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Architecture des 8 classes du Plan Comptable SYSCOHADA',
              caption: 'Séparation stricte entre comptes patrimoniaux (classes 1 à 5) et comptes de gestion (classes 6 à 8).',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'Bilan — Passif', title: 'Classe 1 : Comptes de ressources durables', subtitle: 'Capital (101), Réserves (11), Résultat (13), Emprunts (16)', color: 'blue' },
                  { badge: 'Bilan — Actif', title: 'Classes 2 et 3 : Actif immobilisé & Stocks', subtitle: 'Immobilisations (21-27), Marchandises & Matières (31-36)', color: 'violet' },
                  { badge: 'Bilan — Tiers/Trés.', title: 'Classes 4 et 5 : Tiers & Trésorerie', subtitle: 'Fournisseurs (401), Clients (411), État/TVA (44), Banque (521), Caisse (571)', color: 'slate' },
                  { badge: 'Résultat — AO', title: 'Classes 6 et 7 : Charges et Produits AO', subtitle: 'Achats/Services/Personnel (60-67) & Ventes/Produits fin. (70-77)', color: 'green' },
                  { badge: 'Résultat — HAO', title: 'Classe 8 : Autres Charges (impair) et Produits (pair)', subtitle: '81/83/85/87/89 (Charges HAO & IS) vs 82/84/86/88 (Produits HAO)', color: 'orange' },
                ],
              },
            },
            konanTip:
              'Un coup d’œil au premier chiffre du compte te donne immédiatement sa destination : 1 à 5 → Bilan ; 6 à 8 → Compte de résultat !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'À quelle grande catégorie appartiennent respectivement les comptes « 245 Matériel de transport » et « 701 Ventes de marchandises » ?',
              options: [
                'Tous deux au Compte de résultat',
                '245 au Bilan (Actif immobilisé) et 701 au Compte de résultat (Produits AO)',
                '245 au Bilan (Passif) et 701 au Bilan (Actif circulant)',
                '245 au Compte de résultat (Charges) et 701 au Bilan (Ressources)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La classe 2 regroupe l’Actif immobilisé du Bilan (245) et la classe 7 regroupe les Produits des Activités Ordinaires au Compte de résultat (701).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'AO vs HAO',
            stepTheme: 'Classe 8 paire et impaire',
            stepTitle: 'Distinguer Activités Ordinaires (AO) et Hors Activités Ordinaires (HAO)',
            paragraphText:
              'Le SYSCOHADA révisé isole la performance courante (AO) des événements exceptionnels (HAO) afin de ne pas fausser l’analyse de rentabilité.\n' +
              '• **Activités Ordinaires (classes 6 et 7)** : opérations récurrentes liées à l’exploitation normale (achats, salaires, loyers, ventes) et à la gestion financière courante.\n' +
              '• **Classe 8 — règle de parité du 2e chiffre** : terminaison IMPAIRE = Charge HAO (81 Valeurs comptables des cessions, 83 Charges HAO, 89 Impôts sur le résultat) ; terminaison PAIRE = Produit HAO (82 Produits des cessions, 84 Produits HAO).\n' +
              '• **Exemple** : si une entreprise commerciale revend un camion de livraison, la vente est en 822 (HAO) et non en 701.',
            keyRule:
              'En classe 8, retiens le moyen mnémotechnique : IMPAIR = Impôt/Charge (81, 83, 85, 87, 89) ; PAIR = Produit (82, 84, 86, 88).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Une agence de communication vend un ancien véhicule utilitaire qui lui appartenait. Dans quel compte enregistre-t-elle le prix de vente de ce véhicule ?',
              options: [
                '701 Ventes de marchandises',
                '812 Valeurs comptables des cessions d’immobilisations',
                '822 Produits des cessions d’immobilisations corporelles',
                '601 Achats de marchandises',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La cession d’une immobilisation relève du HAO (hors activité courante) : le prix de cession est un produit HAO enregistré en 822 (2e chiffre pair = produit).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Variations 603/73',
            stepTheme: 'Signe des variations de stocks',
            stepTitle: 'Interpréter le solde des comptes 603 et 73 au Compte de résultat',
            paragraphText:
              'Deux comptes de gestion ont un comportement particulier qui déroute souvent les débutants lors de l’établissement du Compte de résultat.\n' +
              '• **Compte 603 (Variations des stocks de biens achetés)** : calculé par $\\text{SI} - \\text{SF}$. S’il est créditeur ($\\text{SF} > \\text{SI}$, stockage), il vient en diminution (−) des charges d’achats car tout ce qui a été acheté n’a pas été consommé.\n' +
              '• **Compte 73 (Variations des stocks de biens produits)** : calculé par $\\text{SF} - \\text{SI}$. S’il est débiteur ($\\text{SF} < \\text{SI}$, déstockage), il figure avec le signe (−) dans les produits.\n' +
              '• **Exemple** : achats = 10 M, SI = 2 M, SF = 3,5 M → 603 = −1,5 M (créditeur) → achats consommés = 8,5 M.',
            formula: {
              name: 'Achats consommés de marchandises',
              formula: '\\text{Achats consomm\\acute{e}s} = \\text{Achats (601)} + (\\text{SI} - \\text{SF})',
              note: 'Le compte 6031 est créditeur lorsque SF > SI et débiteur lorsque SI > SF.',
            },
            konanTip:
              'Souviens-toi de la logique économique : en fin d’année, ce qui reste en stock (SF) n’a pas encore été vendu ou consommé, il faut donc le soustraire des charges !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Une entreprise a acheté pour 12 000 000 F de marchandises durant l’année. Son stock initial était de 1 500 000 F et son stock final est de 2 500 000 F. Quel est le montant des achats consommés ?',
              options: [
                '13 000 000 FCFA',
                '11 000 000 FCFA',
                '14 500 000 FCFA',
                '9 500 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Variation de stock 6031 = SI − SF = 1 500 000 − 2 500 000 = −1 000 000 F (stockage, solde créditeur). Achats consommés = 12 000 000 − 1 000 000 = 11 000 000 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Ventilation',
            stepTheme: 'Soldes au Bilan vs Résultat',
            stepTitle: 'Ventiler les soldes de la balance vers le Bilan et le Compte de résultat',
            paragraphText:
              'Pour dresser les états financiers à partir d’une balance, il faut savoir affecter chaque classe de comptes au bon document.\n' +
              '• **Classes 2 et 3** : toujours à l’Actif du Bilan (soldes débiteurs nets).\n' +
              '• **Classe 1** : toujours au Passif du Bilan (ressources durables). Attention : certains comptes de classe 1 à solde débiteur (129 Report à nouveau débiteur, 139 Perte nette, 109 Actionnaires capital non appelé) restent au Passif avec le signe (−).\n' +
              '• **Classes 4 et 5** : à l’Actif si le solde est débiteur (clients, banque positive, caisse) ; au Passif si le solde est créditeur (fournisseurs, TVA due, découvert bancaire).',
            keyRule:
              'Un solde débiteur des classes 4 ou 5 va à l’Actif ; un solde créditeur des classes 4 ou 5 va au Passif. Les comptes 12, 13 ou 109 débiteurs restent au Passif en négatif (−).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'À la clôture, le compte « 521 Banque » présente exceptionnellement un solde créditeur de 850 000 FCFA (découvert bancaire). Où ce solde figure-t-il au Bilan ?',
              options: [
                'À l’Actif en Trésorerie-Actif',
                'Au Passif en Trésorerie-Passif',
                'En Charges financières au Compte de résultat',
                'En Capitaux propres avec le signe moins',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un découvert bancaire (solde créditeur de banque) est une dette à très court terme envers la banque : il se classe au Passif dans la rubrique Trésorerie-Passif.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'Calcul du Résultat',
            stepTitle: 'Calculer les Soldes intermédiaires essentiels (AO et HAO)',
            paragraphText:
              'Le Compte de résultat SYSCOHADA met en évidence plusieurs paliers de performance avant le Résultat net final.\n' +
              '• **Marge commerciale** : Ventes de marchandises (701) − Achats consommés de marchandises (601 ± 6031).\n' +
              '• **Résultat des Activités Ordinaires (RAO)** : différence entre tous les produits de classe 7 et toutes les charges de classe 6.\n' +
              '• **Résultat HAO + Impôt** : produits HAO (82, 84) − charges HAO (81, 83) − participation (87) − Impôt sur le résultat (89).\n' +
              '• **Exemple** : si RAO = +7 000 000 F, résultat HAO = −500 000 F et IS (891) = 1 625 000 F, alors Résultat net = 4 875 000 F.',
            formula: {
              name: 'Formation du Résultat net SYSCOHADA',
              formula: '\\text{R\\acute{e}sultat net} = \\text{RAO} + \\text{RHAO} - \\text{Imp\\^ot sur le r\\acute{e}sultat (89)}',
              note: 'Permet de distinguer la rentabilité courante des éléments exceptionnels et fiscaux.',
            },
            konanTip:
              'N’oublie jamais que l’impôt sur les sociétés (compte 891) est comptabilisé en classe 8 et se soustrait tout en bas du Compte de résultat !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Une entreprise réalise un Résultat des Activités Ordinaires (RAO) de +10 000 000 F, un Résultat HAO de +1 000 000 F et supporte un Impôt sur les sociétés (891) de 2 750 000 F. Quel est son Résultat net ?',
              options: [
                '11 000 000 FCFA',
                '8 250 000 FCFA',
                '6 250 000 FCFA',
                '13 750 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Résultat net = RAO (10 000 000) + RHAO (1 000 000) − IS (2 750 000) = 8 250 000 FCFA.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : Organisation comptable et mécanisme des comptes
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch2',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Organisation comptable, mécanisme des comptes et Balance',
    summary:
      'Fonctionnement du compte en T (Débit/Crédit et calcul du solde), principe de la partie double au Livre-Journal, report au Grand-Livre et contrôles par la Balance à 2, 4 et 6 colonnes.',
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Générale',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch2_p1',
        order: 1,
        title: 'Le compte en T, le mécanisme Débit/Crédit et le calcul du solde',
        summary:
          'Comprendre la convention Débit (gauche) / Crédit (droite), appliquer le sens d’augmentation et de diminution de chaque classe de comptes et calculer un solde débiteur ou créditeur.',
        conceptExplanation:
          'Le compte est l’unité de base d’enregistrement des mouvements affectant un poste du patrimoine ou de gestion. Il comporte deux colonnes : la partie gauche s’appelle le Débit (emplois / destinations) et la partie droite s’appelle le Crédit (ressources / origines).\n\n' +
          'Les comptes d’Actif (classes 2, 3, 4 actif, 5 actif) et de Charges (classe 6, 8 impair) augmentent au Débit et diminuent au Crédit. À l’inverse, les comptes de Passif (classe 1, 4 passif) et de Produits (classe 7, 8 pair) augmentent au Crédit et diminuent au Débit.\n\n' +
          'Le solde d’un compte est la différence entre le total des débits et le total des crédits : il est débiteur si Total Débit > Total Crédit, et créditeur si Total Crédit > Total Débit.',
        formulas: [
          {
            name: 'Calcul du solde d’un compte',
            formula: '\\text{Solde} = \\sum \\text{D\\acute{e}bits} - \\sum \\text{Cr\\acute{e}dits}',
            note: 'SD (Solde Débiteur) si > 0 ; SC (Solde Créditeur) si < 0 ; Solde nul (compte soldé) si = 0.',
          },
        ],
        keyRule:
          'Pour arrêter (équilibrer) un compte en T : un solde débiteur (SD) s’inscrit du côté droit (Crédit) pour égaliser les deux colonnes ; un solde créditeur (SC) s’inscrit du côté gauche (Débit).',
        workedExample: {
          title: 'Tenue et arrêt du compte 571 Caisse — Période du 1er au 15 mai N',
          statement:
            'Au 01/05/N, la caisse contient 450 000 F (solde à nouveau débiteur). Opérations : 04/05 encaissement d’une vente au comptant 320 000 F ; 08/05 paiement facture d’eau 85 000 F ; 12/05 versement d’espèces à la banque 400 000 F. Calculer le solde au 15/05/N.',
          methodSteps: [
            '1) Total Débit (entrées d’espèces) = 450 000 + 320 000 = 770 000 F.',
            '2) Total Crédit (sorties d’espèces) = 85 000 + 400 000 = 485 000 F.',
            '3) Solde = 770 000 − 485 000 = +285 000 F → Solde Débiteur (SD) de 285 000 F.',
            '4) Pour présenter le compte équilibré à 770 000 F, on écrit « Solde débiteur : 285 000 » du côté Crédit.',
          ],
          conclusion:
            'Il reste physiquement 285 000 FCFA en caisse au 15 mai N (un compte de caisse ne peut jamais être créditeur).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Compte en T',
            stepTheme: 'Débit, Crédit et imputation',
            stepTitle: 'Définir le Débit, le Crédit et l’imputation comptable',
            paragraphText:
              'Tout compte comptable fonctionne comme une balance à deux plateaux identifiée par un numéro et un intitulé normalisé (ex. : « 411 Clients », « 521 Banques »).\n' +
              '• **Débit (côté gauche)** : il enregistre la destination du flux ou l’emploi des fonds ; « débiter un compte » signifie inscrire une somme à gauche.\n' +
              '• **Crédit (côté droit)** : il enregistre l’origine du flux ou la ressource ; « créditer un compte » signifie inscrire une somme à droite.\n' +
              '• **Imputation** : action d’affecter une somme au débit ou au crédit d’un compte précis selon les règles du plan SYSCOHADA.',
            keyRule:
              'Ne prête jamais de sens moral aux mots « Débit » et « Crédit » : Débit signifie simplement colonne de gauche et Crédit colonne de droite.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Que signifie précisément l’expression « créditer le compte 401 Fournisseurs de 600 000 F » ?',
              options: [
                'Inscrire 600 000 F dans la colonne de gauche du compte 401',
                'Inscrire 600 000 F dans la colonne de droite du compte 401',
                'Effacer une dette de 600 000 F envers le fournisseur',
                'Verser immédiatement 600 000 F en espèces au fournisseur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Créditer un compte consiste toujours à porter une somme dans sa colonne de droite (Crédit). Pour le compte 401 (Passif), cela traduit une augmentation de la dette fournisseur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Bilan en T',
            stepTheme: 'Actif vs Passif',
            stepTitle: 'Appliquer le sens de variation des comptes d’Actif et de Passif',
            paragraphText:
              'Les comptes de Bilan (classes 1 à 5) obéissent à une symétrie parfaite entre l’Actif et le Passif.\n' +
              '• **Comptes d’Actif (2, 3, 411, 521, 571)** : situés à gauche du Bilan, ils augmentent au Débit (+) et diminuent au Crédit (−). Ex. : un encaissement client débite 521 Banque et crédite 411 Client.\n' +
              '• **Comptes de Passif (101, 16, 401, 44)** : situés à droite du Bilan, ils augmentent au Crédit (+) et diminuent au Débit (−). Ex. : rembourser un emprunt débite le compte 162.\n' +
              '• **Astuce** : le côté d’augmentation d’un compte de Bilan correspond exactement à sa place dans le Bilan (Actif à gauche → Débit ; Passif à droite → Crédit).',
            konanTip:
              'Quand tu encaisses de l’argent en banque (521), tu DÉBITES la banque (+). Quand tu paies par chèque, tu CRÉDITES la banque (−) — c’est l’inverse de ton SMS bancaire qui raisonne du point de vue de la banque !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Une entreprise reçoit un virement bancaire de 2 000 000 F correspondant à un nouvel emprunt accordé par sa banque. Comment enregistre-t-elle cette opération ?',
              options: [
                'Débit 162 Emprunts / Crédit 521 Banque',
                'Débit 521 Banque / Crédit 162 Emprunts',
                'Débit 521 Banque / Crédit 701 Ventes',
                'Débit 401 Fournisseurs / Crédit 521 Banque',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La Banque (Actif) augmente → Débit 521. L’Emprunt (Passif, ressource externe) augmente → Crédit 162 Emprunts.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Gestion en T',
            stepTheme: 'Charges vs Produits',
            stepTitle: 'Maîtriser le fonctionnement des comptes de Charges et de Produits',
            paragraphText:
              'Les comptes de gestion (classes 6, 7 et 8) traduisent la consommation ou la création de richesse au cours de l’exercice.\n' +
              '• **Comptes de Charges (classe 6 et 8 impair)** : ils représentent des emplois définitifs ; ils augmentent au Débit (et diminuent exceptionnellement au Crédit lors d’un rabais hors facture ou d’une annulation).\n' +
              '• **Comptes de Produits (classe 7 et 8 pair)** : ils représentent des ressources générées par l’activité ; ils augmentent au Crédit (et diminuent au Débit en cas de retour sur vente).\n' +
              '• **Exemple** : payer un loyer de 300 000 F débite le compte 622 Locations ; facturer une prestation de 900 000 F crédite le compte 706 Services vendus.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Règle universelle de fonctionnement des comptes en T',
              caption: 'Sens d’augmentation (+) et de diminution (−) des comptes de Bilan et de Gestion.',
              tableData: {
                headers: ['Catégorie de compte', 'Côté Débit (Gauche)', 'Côté Crédit (Droite)', 'Solde normal'],
                rows: [
                  ['Actif (cl. 2, 3, 411, 521, 571)', '+ Augmentations (Entrées)', '− Diminutions (Sorties)', 'Solde Débiteur (SD)'],
                  ['Passif (cl. 1, 401, 42, 44)', '− Diminutions (Règlements)', '+ Augmentations (Dettes/Cap.)', 'Solde Créditeur (SC)'],
                  ['Charges (cl. 6 et 8 impair)', '+ Constatation des charges', '− Retours / Rabais hors fact.', 'Solde Débiteur (SD)'],
                  ['Produits (cl. 7 et 8 pair)', '− Retours / Rabais accordés', '+ Constatation des produits', 'Solde Créditeur (SC)'],
                ],
              },
            },
            keyRule:
              'Actif et Charges s’enregistrent au Débit quand ils augmentent ; Passif et Produits s’enregistrent au Crédit quand ils augmentent.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Lequel de ces comptes présente normalement un solde créditeur en fin d’exercice ?',
              options: [
                '601 Achats de marchandises',
                '245 Matériel de transport',
                '706 Services vendus',
                '571 Caisse',
              ],
              correctAnswerIndex: 2,
              explanation:
                '706 Services vendus est un compte de Produits (classe 7) : il augmente au Crédit et présente donc normalement un solde créditeur (SC).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Solde',
            stepTheme: 'Calcul et clôture',
            stepTitle: 'Calculer un solde et arrêter correctement un compte',
            paragraphText:
              'À la fin d’une journée, d’un mois ou d’un exercice, le comptable « arrête » chaque compte pour connaître sa situation nette.\n' +
              '• **Solde débiteur (SD)** : lorsque $\\sum \\text{D\\acute{e}bits} > \\sum \\text{Cr\\acute{e}dits}$. Pour égaliser les deux colonnes lors de l’arrêt, le SD s’écrit au Crédit (côté le plus faible), puis est reporté à nouveau au Débit à la réouverture.\n' +
              '• **Solde créditeur (SC)** : lorsque $\\sum \\text{Cr\\acute{e}dits} > \\sum \\text{D\\acute{e}bits}$. Pour égaliser lors de l’arrêt, le SC s’écrit au Débit, puis est reporté au Crédit à la réouverture.\n' +
              '• **Exemple** : un compte Client totalisant 1 200 000 F au Débit et 850 000 F au Crédit a un SD de 350 000 F (le client doit encore 350 000 F).',
            formula: {
              name: 'Égalité d’arrêt d’un compte débiteur',
              formula: '\\sum \\text{D\\acute{e}bits} = \\sum \\text{Cr\\acute{e}dits} + \\text{SD}',
              note: 'Inversement, pour un compte créditeur : Σ Crédits = Σ Débits + SC.',
            },
            konanTip:
              'Piège classique : quand un solde est écrit du côté Crédit pour fermer le tableau, c’est bien un solde DÉBITEUR (car c’est le total Débit qui l’emporte) !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Le compte 401 Fournisseur Yao présente 1 900 000 F au Crédit (factures reçues) et 1 150 000 F au Débit (règlements effectués). Quel est son solde et que signifie-t-il ?',
              options: [
                'Solde débiteur de 750 000 F : Yao nous doit 750 000 F',
                'Solde créditeur de 750 000 F : l’entreprise doit encore 750 000 F à Yao',
                'Solde débiteur de 3 050 000 F',
                'Solde nul car le compte est soldé',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Total Crédit (1 900 000) > Total Débit (1 150 000) : le solde est créditeur de 750 000 F, ce qui représente la dette restant à payer au fournisseur Yao.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Tracés',
            stepTheme: 'Formes du compte',
            stepTitle: 'Reconnaître les quatre présentations usuelles d’un compte',
            paragraphText:
              'Si le compte schématique en T est idéal pour raisonner rapidement, la pratique comptable et les logiciels utilisent des tracés plus détaillés.\n' +
              '• **Compte à colonnes séparées** : deux blocs juxtaposés (Date, Libellé, Montant) pour le Débit à gauche et le Crédit à droite.\n' +
              '• **Compte à colonnes mariées (ou jumelées)** : une seule colonne Date et Libellé suivie de deux colonnes de montants (Débit, Crédit).\n' +
              '• **Compte à colonnes mariées avec solde** : ajoute deux colonnes de solde (SD, SC) recalculé après chaque opération — c’est le format standard des logiciels comptables et relevés de tiers.\n' +
              '• **Compte en T** : forme simplifiée pédagogique réservée à l’analyse.',
            keyRule:
              'Le compte à colonnes mariées avec solde permet de lire immédiatement le solde après chaque ligne sans attendre la clôture de la période.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle présentation du compte permet de connaître instantanément le nouveau solde après chaque opération enregistrée ?',
              options: [
                'Le compte schématique en T',
                'Le compte à colonnes séparées',
                'Le compte à colonnes mariées avec colonnes de solde (D/C)',
                'La balance à deux colonnes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le tracé à colonnes mariées avec solde comporte les colonnes Sommes (D/C) et Solde (SD/SC) mises à jour à chaque écriture.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Compte de caisse et solde impossible',
            stepTitle: 'Détecter une anomalie sur un solde de caisse ou de tiers',
            paragraphText:
              'Vérifier la vraisemblance d’un solde est un réflexe indispensable de contrôle interne.\n' +
              '• **Compte 571 Caisse** : il est matériellement impossible de sortir plus d’espèces qu’il n’en existe dans le tiroir-caisse. Un solde créditeur de caisse révèle obligatoirement une erreur (omission d’un apport en caisse, erreur d’imputation entre banque et caisse ou oubli de saisie).\n' +
              '• **Compte 411 Client créditeur** : sauf avance/acompte reçu ou avoir non encore remboursé, un solde créditeur indique souvent une erreur de lettrage ou un double encaissement.\n' +
              '• **Exemple** : si le compte 571 affiche Crédit = 500 000 F et Débit = 420 000 F, il faut rechercher l’écriture manquante de 80 000 F avant de clôturer.',
            konanTip:
              'Règle de contrôle rapide : le compte 571 Caisse est TOUJOURS débiteur ou nul — jamais créditeur !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'À la fin de la semaine, votre compte « 571 Caisse » affiche un solde créditeur de 45 000 FCFA. Que devez-vous en conclure ?',
              options: [
                'La caisse bénéficie d’un découvert autorisé normal',
                'Il y a une anomalie ou une erreur d’enregistrement, car une caisse ne peut pas être créditrice',
                'L’entreprise a réalisé un bénéfice de 45 000 FCFA',
                'Il faut virer 45 000 FCFA au compte 701 Ventes',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On ne peut pas décaisser physiquement plus d’espèces qu’on n’en détient : un solde créditeur en caisse signale nécessairement une omission d’entrée ou une erreur d’imputation.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch2_p2',
        order: 2,
        title: 'Le principe de la partie double et le Livre-Journal',
        summary:
          'Appliquer la règle de la partie double à toute écriture comptable, structurer un article au Livre-Journal et respecter les obligations légales de tenue et de conservation.',
        conceptExplanation:
          'Le principe de la partie double, fondement de la comptabilité moderne, stipule que toute opération affecte au moins deux comptes en sens opposé pour des montants strictement égaux : dans chaque article, le total des sommes portées au Débit doit égaler le total des sommes portées au Crédit.\n\n' +
          'Le Livre-Journal est le registre obligatoire dans lequel toutes les opérations sont enregistrées jour par jour, dans l’ordre chronologique, avec référence à la pièce justificative.\n\n' +
          'Côté et paraphé par le tribunal compétent (ou tenu sur logiciel certifié inaltérable après validation), le journal ne doit comporter ni blanc, ni rature, ni surcharge, et doit être conservé au moins 10 ans.',
        formulas: [
          {
            name: 'Égalité fondamentale de la partie double',
            formula: '\\sum \\text{Montants d\\acute{e}bit\\acute{e}s} = \\sum \\text{Montants cr\\acute{e}dit\\acute{e}s}',
            note: 'Valable pour chaque article du journal et pour le total général du journal.',
          },
        ],
        keyRule:
          'Chaque article du Livre-Journal comporte obligatoirement : la date, les numéros et intitulés des comptes débités (à gauche), les numéros et intitulés des comptes crédités (décalés à droite), les montants équilibrés et un libellé explicatif citant la pièce justificative.',
        workedExample: {
          title: 'Enregistrement d’un achat réglé moitié au comptant, moitié à crédit',
          statement:
            'Le 18 mai N, l’entreprise Abidjan Tech achète du mobilier de bureau (2444) pour 1 000 000 FCFA (exonéré de TVA pour l’exemple), facture n°F42. Elle règle 400 000 FCFA immédiatement par chèque bancaire et le solde à crédit à 45 jours. Passer l’article au Livre-Journal.',
          methodSteps: [
            '1) Emploi (Débit) : entrée d’un bien durable → Débit 2444 Mobilier de bureau : 1 000 000 F.',
            '2) Ressources (Crédit) : sortie de banque (Crédit 521 Banques : 400 000 F) et dette envers le fournisseur d’investissement (Crédit 481 Fournisseurs d’investissements : 600 000 F).',
            '3) Contrôle partie double : Débit (1 000 000) = Crédit (400 000 + 600 000).',
            '4) Libellé : « Fre n°F42 — Achat mobilier, chèque 400 000 F et solde à crédit ».',
          ],
          conclusion:
            'Un même article peut comporter plusieurs comptes au Débit et/ou au Crédit dès lors que la somme des débits égale la somme des crédits.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Partie double',
            stepTheme: 'Règle d’équilibre',
            stepTitle: 'Comprendre la logique emploi = ressource de la partie double',
            paragraphText:
              'Pourquoi enregistre-t-on chaque opération à deux endroits ? Parce qu’aucune richesse ne se crée ou ne disparaît sans origine ni destination.\n' +
              '• **Ressource (Crédit)** : c’est le point de départ, le moyen qui permet l’opération (vente, emprunt, caisse, crédit fournisseur).\n' +
              '• **Emploi (Débit)** : c’est le point d’arrivée, l’utilisation qui en est faite (achat, machine, créance client, dépôt en banque).\n' +
              '• **Équilibre systématique** : dans tout article simple (1 compte débité, 1 compte crédité) ou composé (plusieurs comptes), $\\sum \\text{D\\acute{e}bit} = \\sum \\text{Cr\\acute{e}dit}$.',
            formula: {
              name: 'Principe de la partie double',
              formula: '\\text{Total D\\acute{e}bit (Emplois)} = \\text{Total Cr\\acute{e}dit (Ressources)}',
              note: 'Ce contrôle empêche qu’une demi-écriture soit enregistrée isolément.',
            },
            keyRule:
              'Un article du journal n’est jamais valide tant que le total de sa colonne Débit ne correspond pas exactement au total de sa colonne Crédit.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une facture d’achat de marchandises de 750 000 F est réglée pour 250 000 F en espèces et le reste à crédit. Si on débite 601 pour 750 000 F et on crédite 571 Caisse pour 250 000 F, quel compte complète l’article ?',
              options: [
                'Débit 401 Fournisseurs : 500 000 F',
                'Crédit 401 Fournisseurs : 500 000 F',
                'Crédit 411 Clients : 500 000 F',
                'Crédit 701 Ventes : 500 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour équilibrer le Débit (750 000 F), il manque 500 000 F au Crédit : la dette envers le fournisseur augmente, donc Crédit 401 Fournisseurs pour 500 000 F.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Livre-Journal',
            stepTheme: 'Structure d’un article',
            stepTitle: 'Présenter un article conforme au Livre-Journal SYSCOHADA',
            paragraphText:
              'Le Livre-Journal obéit à un formalisme rigoureux qui facilite la relecture et l’audit des comptes.\n' +
              '• **En-tête de date** : centrée entre deux traits (ex. : —— 15/04/N —— ; ou « d° » pour « dito » si plusieurs opérations ont lieu le même jour).\n' +
              '• **Corps de l’article** : d’abord les comptes débités (numéro à gauche, intitulé aligné à gauche, montant dans la colonne Débit), puis les comptes crédités (numéro et intitulé décalés vers la droite, montant dans la colonne Crédit).\n' +
              '• **Libellé** : bref et précis sous l’écriture, mentionnant la nature de l’opération et le numéro de la pièce justificative.',
            konanTip:
              'En bas de chaque page du journal papier, on calcule le total « À reporter » (Total Débit = Total Crédit) que l’on inscrit en haut de la page suivante (« Report »).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Dans un article du Livre-Journal, que signifie l’abréviation « d° » (dito) placée à la place de la date ?',
              options: [
                'Que l’opération est annulée',
                'Que l’opération a été réalisée à la même date que l’article précédent',
                'Que le montant est provisoire',
                'Que la facture est réglée en devises étrangères',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« d° » (dito) indique que l’écriture comptabilisée s’est produite exactement à la même date que l’article juste au-dessus.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Chaîne comptable',
            stepTheme: 'Organisation du traitement',
            stepTitle: 'Visualiser le circuit complet de l’information comptable',
            paragraphText:
              'L’enregistrement comptable suit un flux logique immuable depuis la pièce d’origine jusqu’aux états de synthèse annuels.\n' +
              '• **Étape 1 — Collecte** : réception et vérification des pièces justificatives (factures, chèques, pièces de caisse).\n' +
              '• **Étape 2 — Enregistrement chronologique** : imputation dans le Livre-Journal selon la partie double.\n' +
              '• **Étape 3 — Classement thématique et contrôle** : report dans le Grand-Livre (compte par compte) puis contrôle dans la Balance avant d’établir le Bilan et le Compte de résultat.',
            visualSchema: {
              type: 'flowchart',
              title: 'Chaîne de traitement comptable SYSCOHADA',
              caption: 'Du document commercial brut aux états financiers certifiés.',
              flowchart: {
                direction: 'horizontal',
                steps: [
                  { label: 'Pièces justificatives', sublabel: 'Factures, chèques, reçus', kind: 'start', color: 'slate' },
                  { label: 'Livre-Journal', sublabel: 'Chronologique (D = C)', kind: 'process', color: 'blue' },
                  { label: 'Grand-Livre', sublabel: 'Classement par compte', kind: 'process', color: 'violet' },
                  { label: 'Balance générale', sublabel: 'Contrôle des reports', kind: 'decision', color: 'orange' },
                  { label: 'États financiers', sublabel: 'Bilan & Résultat', kind: 'end', color: 'green' },
                ],
              },
            },
            keyRule:
              'Le Livre-Journal classe les opérations par DATE, le Grand-Livre les classe par COMPTE, et la Balance en vérifie la cohérence numérique.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Quel est l’ordre chronologique exact de la chaîne comptable depuis la transaction jusqu’à la synthèse annuelle ?',
              options: [
                'Balance → Journal → Grand-Livre → Pièce justificative → Bilan',
                'Pièce justificative → Livre-Journal → Grand-Livre → Balance → États financiers',
                'Grand-Livre → Pièce justificative → Balance → Livre-Journal → Bilan',
                'États financiers → Balance → Grand-Livre → Journal',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tout part de la pièce justificative, enregistrée chronologiquement au Livre-Journal, reportée compte par compte au Grand-Livre, contrôlée via la Balance, puis synthétisée dans le Bilan et le Compte de résultat.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Régularité',
            stepTheme: 'Règles légales de tenue',
            stepTitle: 'Respecter les règles d’inaltérabilité et de rectification',
            paragraphText:
              'Pour garantir la force probante du Livre-Journal devant un juge ou l’administration fiscale, la loi interdit toute falsification a posteriori.\n' +
              '• **Cotation et paraphe** : les pages du journal papier sont numérotées sans interruption, cotées et paraphées par l’autorité compétente ; aucun blanc, aucune rature, aucun grattage ni blanc correcteur n’est toléré.\n' +
              '• **En comptabilité informatisée** : les écritures sont d’abord saisies en mode « brouillard » (modifiables), puis deviennent définitivement figées après validation.\n' +
              '• **Correction d’erreur** : on ne supprime jamais une écriture validée ; on passe une écriture de contrepassation ou de complément (en négatif ou en sens inverse).',
            keyRule:
              'Une écriture comptable validée est irréversible : toute erreur détectée après validation se corrige exclusivement par une nouvelle écriture datée du jour de la constatation.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Dans un logiciel comptable conforme au SYSCOHADA, comment doit-on corriger une écriture erronée qui a déjà été définitivement validée ?',
              options: [
                'En la supprimant directement dans la base de données',
                'En modifiant le montant d’origine avec un éditeur de texte',
                'En enregistrant une écriture de contrepassation / régularisation à la date de découverte de l’erreur',
                'En laissant l’erreur jusqu’à l’exercice suivant sans rien faire',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le principe d’inaltérabilité interdit de supprimer ou modifier une écriture validée ; on passe une nouvelle écriture rectificative (contrepassation ou complément).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Méthode 4 étapes',
            stepTheme: 'Traduire une opération',
            stepTitle: 'Passer de l’énoncé français à l’article de journal sans hésiter',
            paragraphText:
              'Face à n’importe quelle opération commerciale ou financière, applique systématiquement la méthode en 4 questions.\n' +
              '• **Question 1 (Qui sommes-nous ?)** : vérifier si l’on tient la comptabilité de l’acheteur ou du vendeur !\n' +
              '• **Question 2 (Nature du flux)** : s’agit-il d’un achat/vente (classes 6/7), d’un investissement (classe 2) ou d’un règlement (classe 5) ?\n' +
              '• **Question 3 (Mode de règlement)** : au comptant (521 Banque / 571 Caisse) ou à crédit (401 Fournisseur / 411 Client) ?\n' +
              '• **Question 4 (Équilibre)** : vérifier que $\\sum \\text{D\\acute{e}bit} = \\sum \\text{Cr\\acute{e}dit}$.',
            konanTip:
              'Ne commence JAMAIS à écrire des numéros de comptes avant d’avoir identifié chez QUI tu passes l’écriture (client ou fournisseur) : c’est la source n°1 d’inversion entre 601/401 et 701/411 !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'La société KOFFI règle par chèque bancaire une dette de 450 000 F envers son fournisseur DIALLO. Quelle écriture passe-t-on dans la comptabilité de KOFFI ?',
              options: [
                'Débit 521 Banque 450 000 / Crédit 401 Diallo 450 000',
                'Débit 401 Diallo 450 000 / Crédit 521 Banque 450 000',
                'Débit 411 Diallo 450 000 / Crédit 521 Banque 450 000',
                'Débit 601 Achats 450 000 / Crédit 521 Banque 450 000',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chez KOFFI, le paiement par chèque diminue sa trésorerie (Crédit 521 Banque) et éteint sa dette envers le fournisseur Diallo (Débit 401 Diallo).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Double enregistrement d’un achat à crédit',
            stepTitle: 'Ne pas confondre la facture d’achat et son règlement ultérieur',
            paragraphText:
              'Lorsque l’achat et le paiement interviennent à des dates différentes, deux écritures distinctes sont obligatoires.\n' +
              '• **À la date de facture** : on constate la charge (Débit 601) et la dette fournisseur (Crédit 401) — aucun compte de trésorerie (521/571) n’est encore touché.\n' +
              '• **À la date du règlement** : on ne débite SURTOUT PAS une deuxième fois le compte 601 ! On solde simplement la dette fournisseur (Débit 401) par la sortie de trésorerie (Crédit 521 ou 571).\n' +
              '• **Exemple** : facture du 01/03 réglée le 31/03 → 601 est mouvementé le 01/03 uniquement, 521 est mouvementé le 31/03 uniquement.',
            keyRule:
              'La charge (classe 6) ou le produit (classe 7) naît à la date de facturation/livraison, jamais une seconde fois lors du paiement.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Le 02/04, une entreprise achète des marchandises à crédit (800 000 F). Le 02/05, elle règle cette facture par virement. Quel compte est débité le 02/05 ?',
              options: [
                '601 Achats de marchandises',
                '521 Banques',
                '401 Fournisseurs',
                '411 Clients',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le compte 601 a déjà été débité le 02/04 lors de la réception de la facture. Le 02/05, le paiement solde la dette en débitant 401 Fournisseurs par le crédit de 521 Banques.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch2_p3',
        order: 3,
        title: 'Le Grand-Livre et la Balance des comptes (2, 4 et 6 colonnes)',
        summary:
          'Comprendre le report du Journal vers le Grand-Livre, maîtriser les trois formes de Balance et vérifier les égalités de contrôle arithmétique.',
        conceptExplanation:
          'Le Grand-Livre est le registre obligatoire qui regroupe l’ensemble des comptes ouverts par l’entreprise. Toutes les écritures du Livre-Journal y sont reportées compte par compte (soit manuellement par période, soit instantanément dans un progiciel comptable).\n\n' +
          'La Balance est un tableau récapitulatif périodique listant tous les comptes du Grand-Livre dans l’ordre des classes 1 à 8 avec leurs totaux de mouvements et leurs soldes.\n\n' +
          'Elle joue un double rôle : instrument de contrôle arithmétique (vérification de l’égalité des débits et des crédits) et instrument de synthèse de gestion (base directe d’établissement du Bilan et du Compte de résultat provisoires ou définitifs).',
        formulas: [
          {
            name: 'Égalités de contrôle d’une Balance à 6 colonnes',
            formula: '\\sum \\text{SD}_0 = \\sum \\text{SC}_0 \\quad ; \\quad \\sum \\text{Mvt D} = \\sum \\text{Mvt C} = \\text{Total Journal} \\quad ; \\quad \\sum \\text{SD}_1 = \\sum \\text{SC}_1',
            note: 'Triple égalité garantissant l’absence d’erreur arithmétique de report.',
          },
        ],
        keyRule:
          'Dans une Balance à 4 ou 6 colonnes, la somme des mouvements Débit et Crédit doit être rigoureusement égale au total général du Livre-Journal de la période.',
        workedExample: {
          title: 'Vérification d’une Balance à 6 colonnes avant clôture',
          statement:
            'Sur le mois de mars N, une PME relève dans sa Balance à 6 colonnes : Soldes initiaux SD = 12 000 000 F et SC = 12 000 000 F ; Mouvements de mars Débit = 8 450 000 F et Crédit = 8 450 000 F ; Soldes finaux SD = 14 200 000 F et SC = 14 150 000 F. Que révèle ce contrôle ?',
          methodSteps: [
            '1) Les soldes initiaux sont équilibrés (12 000 000 = 12 000 000).',
            '2) Les mouvements de la période sont équilibrés (8 450 000 = 8 450 000) — reste à vérifier qu’ils égalent le total du Journal de mars.',
            '3) Les soldes finaux présentent un écart de 50 000 F (14 200 000 ≠ 14 150 000) : il y a donc une erreur de calcul de solde ou de report d’un solde dans au moins un compte !',
          ],
          conclusion:
            'La Balance détecte immédiatement l’erreur de 50 000 F dans le calcul des soldes finaux avant l’établissement des états financiers.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Grand-Livre',
            stepTheme: 'Report du Journal',
            stepTitle: 'Passer du Livre-Journal au Grand-Livre compte par compte',
            paragraphText:
              'Le Livre-Journal mélange toutes les natures d’opérations au fil des jours ; pour connaître la situation d’un client précis ou le niveau de la caisse, il faut regrouper les écritures par compte.\n' +
              '• **Rôle du Grand-Livre** : document légal obligatoire réunissant tous les comptes (en T ou à colonnes) ouverts dans l’entreprise.\n' +
              '• **Mécanisme du report** : chaque montant débité au Journal est reporté au Débit du même compte dans le Grand-Livre ; chaque montant crédité au Journal est reporté au Crédit du même compte.\n' +
              '• **Exemple** : les 12 ventes du mois au client KONAN figurant à des dates diverses du Journal sont toutes rassemblées sur la fiche « 411 KONAN » du Grand-Livre.',
            keyRule:
              'Le Grand-Livre contient exactement la même information que le Livre-Journal, mais réorganisée par numéro de compte croissant (de la classe 1 à la classe 8).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle est la différence majeure entre le Livre-Journal et le Grand-Livre ?',
              options: [
                'Le Livre-Journal est facultatif, le Grand-Livre est facultatif aussi',
                'Le Livre-Journal classe les opérations par ordre chronologique, alors que le Grand-Livre les regroupe compte par compte',
                'Le Grand-Livre ne contient que les comptes de charges et produits',
                'Le Livre-Journal ne mentionne pas les montants',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tous deux sont des livres obligatoires contenant les mêmes écritures : le Journal suit la chronologie des dates, tandis que le Grand-Livre regroupe les mouvements par compte.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Balance 2 & 4 col.',
            stepTheme: 'Types de balances',
            stepTitle: 'Distinguer la balance à 2 colonnes et la balance à 4 colonnes',
            paragraphText:
              'À partir des comptes du Grand-Livre, on dresse la Balance dans l’ordre numérique croissant des comptes (classes 1 à 8).\n' +
              '• **Balance à 2 colonnes (balance des soldes)** : N° compte, Intitulé, puis 2 colonnes de soldes (SD, SC). Elle sert directement à construire le Bilan et le Compte de résultat, avec l’égalité $\\sum \\text{SD} = \\sum \\text{SC}$.\n' +
              '• **Balance à 4 colonnes** : ajoute deux colonnes pour les sommes cumulées (Débit, Crédit) avant les deux colonnes de soldes (SD, SC).\n' +
              '• **Double contrôle de la 4 colonnes** : $\\sum \\text{D\\acute{e}bit} = \\sum \\text{Cr\\acute{e}dit}$ ET $\\sum \\text{SD} = \\sum \\text{SC}$.',
            formula: {
              name: 'Double égalité de la balance à 4 colonnes',
              formula: '\\sum D = \\sum C \\quad \\text{et} \\quad \\sum SD = \\sum SC',
              note: 'Vérifie à la fois l’équilibre des reports et l’exactitude des soldes.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quelles colonnes chiffrées composent une balance comptable à 4 colonnes ?',
              options: [
                'Actif, Passif, Charges, Produits',
                'Soldes initiaux (SD, SC) et Soldes finaux (SD, SC)',
                'Sommes (Débit, Crédit) et Soldes (Débiteur, Créditeur)',
                'Date, Libellé, Montant HT, TVA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La balance à 4 colonnes présente pour chaque compte les sommes totales (Débit et Crédit) suivies des soldes résultants (SD et SC).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Balance 6 colonnes',
            stepTheme: 'Structure complète',
            stepTitle: 'Lire et contrôler une Balance à 6 colonnes',
            paragraphText:
              'La Balance à 6 colonnes est l’outil professionnel complet utilisé en comptabilité mensuelle et en révision d’exercice.\n' +
              '• **Colonnes 1–2 (Soldes d’ouverture)** : soldes débiteurs et créditeurs au début de la période.\n' +
              '• **Colonnes 3–4 (Mouvements de la période)** : flux enregistrés uniquement durant la période (dont la somme égale le total du Journal de la période).\n' +
              '• **Colonnes 5–6 (Soldes de clôture)** : soldes finaux obtenus en combinant le solde d’ouverture et les mouvements.\n' +
              '• **Exemple ci-dessous** : observe comment les trois paires de colonnes s’équilibrent rigoureusement.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Extrait de Balance à 6 colonnes (en milliers de FCFA)',
              caption: 'Chaque paire de colonnes (Ouverture, Mouvements, Clôture) vérifie Total Débit = Total Crédit.',
              tableData: {
                headers: ['N° Cpte', 'Intitulé', 'Ouv. SD', 'Ouv. SC', 'Mvt D', 'Mvt C', 'Clôt. SD', 'Clôt. SC'],
                rows: [
                  ['101', 'Capital social', '0', '5 000', '0', '0', '0', '5 000'],
                  ['401', 'Fournisseurs', '0', '1 200', '800', '1 500', '0', '1 900'],
                  ['411', 'Clients', '1 500', '0', '2 400', '1 800', '2 100', '0'],
                  ['521', 'Banques', '4 700', '0', '1 800', '800', '5 700', '0'],
                  ['601', 'Achats marchandises', '0', '0', '1 500', '0', '1 500', '0'],
                  ['701', 'Ventes marchandises', '0', '0', '0', '2 400', '0', '2 400'],
                  ['TOTAUX', 'Équilibre des 3 paires', '6 200', '6 200', '6 500', '6 500', '9 300', '9 300'],
                ],
              },
            },
            keyRule:
              'Dans la balance à 6 colonnes, le solde final d’un compte d’Actif/Charges s’obtient par : $\\text{SD}_1 = \\text{SD}_0 + \\text{Mvt D} - \\text{Mvt C}$ (et symétriquement pour SC).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Dans la balance à 6 colonnes ci-dessus, comment retrouve-t-on le solde final créditeur de 1 900 (en milliers) du compte 401 Fournisseurs ?',
              options: [
                '1 200 + 800 − 1 500 = 500',
                '1 200 (SC ouv.) + 1 500 (Mvt C) − 800 (Mvt D) = 1 900',
                '1 500 + 800 = 2 300',
                '1 500 − 1 200 = 300',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour un compte à solde d’ouverture créditeur, le nouveau solde créditeur vaut SC_initial + Mouvement Crédit − Mouvement Débit = 1 200 + 1 500 − 800 = 1 900.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Bilan provisoire',
            stepTheme: 'Passage aux états',
            stepTitle: 'Établir un Bilan et un Compte de résultat à partir de la Balance',
            paragraphText:
              'Une fois les trois égalités de la Balance vérifiées, la construction des deux états de synthèse devient quasi automatique.\n' +
              '• **Vers le Compte de résultat** : on extrait uniquement les soldes des classes 6, 7 et 8 ; la différence Produits − Charges donne le Résultat net de la période.\n' +
              '• **Vers le Bilan** : on extrait les soldes des classes 1 à 5 (SD à l’Actif, SC au Passif), puis on inscrit le Résultat net calculé au Compte de résultat dans les capitaux propres au Passif pour équilibrer le Bilan.\n' +
              '• **Exemple** : sur la balance précédente, Résultat = Ventes (2 400) − Achats (1 500) = +900 ; au Bilan, Actif (2 100 + 5 700 = 7 800) = Passif (5 000 + 1 900 + 900 = 7 800).',
            konanTip:
              'Vérification instantanée en examen : le Résultat net trouvé dans le Compte de résultat DOIT exactement combler l’écart entre Total Actif et Total Passif (avant résultat) !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'À partir d’une balance, la somme des soldes des classes 1 à 5 donne : Actif = 25 000 000 F et Passif (hors résultat) = 21 500 000 F. Que doit afficher le Compte de résultat (classes 6 à 8) ?',
              options: [
                'Une perte de −3 500 000 F',
                'Un bénéfice de +3 500 000 F',
                'Un résultat nul de 0 F',
                'Un bénéfice de +46 500 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’Actif excède le Passif avant résultat de 3 500 000 F : l’entreprise s’est enrichie de +3 500 000 F (bénéfice), que l’on doit retrouver exactement par Produits − Charges au Compte de résultat.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Limites',
            stepTheme: 'Erreurs non détectées',
            stepTitle: 'Identifier les erreurs que la Balance NE détecte PAS',
            paragraphText:
              'Bien qu’indispensable, une balance parfaitement équilibrée ne garantit pas à 100 % l’absence d’erreur comptable !\n' +
              '• **Erreur d’imputation de compte** : débiter 601 Achats au lieu de 244 Matériel de bureau garde Débit = Crédit, donc la balance reste équilibrée.\n' +
              '• **Omission totale d’une pièce ou double saisie** : si une facture entière est oubliée ou saisie deux fois, les débits et crédits restent égaux mais le total Journal ≠ réalité.\n' +
              '• **Erreurs compensées** : +10 000 F d’erreur au Débit d’un compte et +10 000 F au Crédit d’un autre.\n' +
              '• **Parade** : compléter la balance par le lettrage des comptes de tiers (401/411) et le rapprochement bancaire (521).',
            keyRule:
              'La Balance prouve l’équilibre arithmétique des reports, mais seule la révision (lettrage et rapprochement bancaire) détecte les erreurs d’imputation ou les omissions.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Laquelle de ces erreurs passe INAPERÇUE lors du simple contrôle d’égalité des colonnes de la Balance ?',
              options: [
                'Reporter 50 000 F au Débit du Grand-Livre au lieu de 500 000 F',
                'Oublier de reporter le Crédit d’une écriture du Journal',
                'Enregistrer une facture d’entretien (624) dans le compte d’assurance (625) pour le même montant',
                'Additionner incorrectement la colonne Débit de la Balance',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Confondre deux comptes de même sens (624 et 625) pour le même montant laisse Σ Débits = Σ Crédits et Σ Mouvements = Total Journal : la Balance reste parfaitement équilibrée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Lettrage',
            stepTheme: 'Suivi des tiers',
            stepTitle: 'Pratiquer le lettrage des comptes Clients et Fournisseurs',
            paragraphText:
              'Dans la gestion quotidienne, la Balance ne suffit pas pour savoir quelles factures précises restent impayées : on utilise le lettrage.\n' +
              '• **Principe du lettrage** : on associe par une même lettre (A, B, C...) une facture enregistrée au Débit d’un client (411) et le ou les règlements correspondants enregistrés au Crédit.\n' +
              '• **Intérêt** : les lignes non lettrées forment exactement le détail des factures encore dues composant le solde du compte !\n' +
              '• **Exemple** : si le compte 411 Client Koné présente 3 factures (400 000 F, 600 000 F, 250 000 F) et deux chèques lettrés A (400 000 F) et B (600 000 F), le solde débiteur de 250 000 F correspond exactement à la 3e facture.',
            konanTip:
              'Le lettrage est la première technique demandée en stage comptable pour relancer les clients en retard et justifier les soldes en fin d’année.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Sur la fiche du client Bamba (411), les factures F1 (300 000 F) et F2 (450 000 F) sont au Débit ; un virement de 300 000 F et un avoir de 50 000 F sur F2 sont au Crédit. Après lettrage de F1 avec le virement (lettre A), quel est le reste dû sur F2 ?',
              options: [
                '450 000 FCFA',
                '400 000 FCFA',
                '700 000 FCFA',
                '100 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'F1 (300 000 F) est soldée par le virement (lettre A). Sur F2 (450 000 F), l’avoir de 50 000 F vient en déduction : il reste 400 000 FCFA à encaisser.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : Opérations courantes d’achat-vente et facturation SYSCOHADA
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch3',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Opérations courantes et facturation (Doit, TVA, Port, Avoir)',
    summary:
      'Établissement et comptabilisation des factures de Doit et d’Avoir selon le SYSCOHADA : cascade des RRR, escompte financier, TVA à 18 %, port facturé vs port débours, avances et retours.',
    officialVolumeHours: 18,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Générale',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch3_p1',
        order: 1,
        title: 'Factures de Doit simples et cascade des réductions commerciales (RRR)',
        summary:
          'Identifier les mentions obligatoires d’une facture, calculer des réductions commerciales en cascade (rabais, remise, ristourne) et enregistrer une facture de Doit simple.',
        conceptExplanation:
          'Toute transaction commerciale entre fournisseur et client donne lieu à l’émission par le vendeur d’une facture de « Doit », pièce justificative indispensable sur les plans comptable et fiscal.\n\n' +
          'Les réductions à caractère commercial sont de trois ordres : le rabais (défaut de qualité, non-conformité ou retard), la remise (importance de la commande ou qualité du client) et la ristourne (calculée sur le chiffre d’affaires global d’une période).\n\n' +
          'Règle fondamentale du SYSCOHADA : sur une facture de Doit, les RRR se calculent successivement en cascade (chacun sur le net précédent) et ne sont JAMAIS comptabilisés séparément ; les comptes 601 (acheteur) et 701 (vendeur) enregistrent directement le dernier Net Commercial.',
        formulas: [
          {
            name: 'Calcul en cascade des remises',
            formula: '\\text{Net Commercial}_k = \\text{Brut} \\times (1 - r_1) \\times (1 - r_2) \\times \\dots \\times (1 - r_k)',
            note: 'Les taux ne s’additionnent jamais : 5 % puis 10 % ≠ 15 % !',
          },
        ],
        keyRule:
          'Sur une facture de Doit, les réductions commerciales (RRR) ne font l’objet d’aucune écriture spécifique : seul le dernier Net Commercial est porté en 601 (chez l’acheteur) et en 701 (chez le vendeur).',
        workedExample: {
          title: 'Facture de Doit avec rabais et deux remises en cascade — SERY & Cie',
          statement:
            'SERY & Cie vend à crédit 100 sacs de riz à 10 000 FCFA le sac (Brut = 1 000 000 F) avec un rabais de 50 000 F pour livraison tardive, suivi d’une remise de 10 %. Calculer le Net Commercial final et comptabiliser chez les deux parties (hors TVA).',
          methodSteps: [
            '1) Montant Brut = 100 × 10 000 = 1 000 000 F ; moins rabais (50 000 F) → 1er Net Commercial = 950 000 F.',
            '2) Remise de 10 % sur 950 000 F = 95 000 F → Dernier Net Commercial (Net à Payer ici) = 950 000 − 95 000 = 855 000 F.',
            '3) Chez le vendeur SERY : Débit 411 Client 855 000 / Crédit 701 Ventes 855 000.',
            '4) Chez l’acheteur : Débit 601 Achats 855 000 / Crédit 401 Fournisseur 855 000.',
          ],
          conclusion:
            'Le rabais et la remise n’apparaissent pas dans les comptes : seul le Net Commercial final de 855 000 FCFA est enregistré.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mentions légales',
            stepTheme: 'La facture commerciale',
            stepTitle: 'Connaître les mentions obligatoires d’une facture en Côte d’Ivoire',
            paragraphText:
              'La facture de Doit matérialise la créance du fournisseur sur le client (« le client DOIT au fournisseur ») et constitue une pièce exigée par la Direction Générale des Impôts (DGI).\n' +
              '• **Mentions d’identification** : nom/raison sociale, adresse, Numéro de Compte Contribuable (NCC), Registre du Commerce (RC), régime d’imposition (Réel Normal/Simplifié) et coordonnées bancaires de l’émetteur.\n' +
              '• **Mentions de transaction** : date, numéro chronologique unique, identité du client, désignation/quantité/prix unitaire, taux et montant de TVA, Net à Payer (NAP) en chiffres et arrêté en lettres, signature.',
            keyRule:
              'Pour le fournisseur, une facture émise est une facture de VENTE (classe 7) ; pour le destinataire, le même document est une facture d’ACHAT (classe 6).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'À qui incombe légalement l’établissement et l’envoi de la facture commerciale lors d’une vente ?',
              options: [
                'Au client acheteur',
                'Au fournisseur vendeur',
                'Au transporteur routier',
                'À la banque du client',
              ],
              correctAnswerIndex: 1,
              explanation:
                'C’est toujours le vendeur (fournisseur) qui établit la facture de Doit (ou d’Avoir) et en remet l’original au client tout en conservant le double.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Comptant / Crédit',
            stepTheme: 'Facture simple',
            stepTitle: 'Enregistrer une facture simple au comptant ou à crédit',
            paragraphText:
              'Sans réduction ni majoration, l’écriture de facture de Doit ne diffère que par le mode de règlement.\n' +
              '• **Vente au comptant (espèces 571 ou chèque/virement 521)** : chez l’acheteur, Débit 601 / Crédit 571 (ou 521) ; chez le vendeur, Débit 571 (ou 521) / Crédit 701.\n' +
              '• **Vente à crédit** : chez l’acheteur, Débit 601 Achats / Crédit 401 Fournisseurs ; chez le vendeur, Débit 411 Clients / Crédit 701 Ventes.\n' +
              '• **Exemple** : vente de 200 000 F à crédit → le vendeur débite 411 (200 000) et crédite 701 (200 000).',
            konanTip:
              'Même si un chèque est remis le jour même, passe toujours par un compte de tiers (401/411) si l’entreprise suit individuellement ses fournisseurs et clients, ou directement en 521/571 pour les ventes comptoir.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'L’entreprise VI vend 500 000 FCFA de marchandises à BA, réglés immédiatement en espèces (sans TVA). Quelle écriture passe l’acheteur BA ?',
              options: [
                'Débit 571 Caisse 500 000 / Crédit 701 Ventes 500 000',
                'Débit 601 Achats de marchandises 500 000 / Crédit 571 Caisse 500 000',
                'Débit 601 Achats de marchandises 500 000 / Crédit 401 Fournisseurs 500 000',
                'Débit 411 Clients 500 000 / Crédit 571 Caisse 500 000',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chez l’acheteur BA, l’achat augmente ses charges (Débit 601) et le règlement immédiat en espèces diminue sa caisse (Crédit 571).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Les 3 R',
            stepTheme: 'Rabais, Remise, Ristourne',
            stepTitle: 'Distinguer précisément Rabais, Remise et Ristourne',
            paragraphText:
              'Bien que regroupées sous le sigle RRR, les trois réductions commerciales répondent à des motifs économiques différents.\n' +
              '• **Rabais** : réduction exceptionnelle accordée pour compenser un défaut de qualité, une non-conformité ou un retard de livraison.\n' +
              '• **Remise** : réduction habituelle liée à la fidélité, au statut du client (grossiste, revendeur) ou au volume important d’une commande (ex. : −5 % dès 1 000 unités).\n' +
              '• **Ristourne** : réduction périodique calculée en fin de mois, trimestre ou année sur le chiffre d’affaires total réalisé avec le client (ex. : 2 % si le CA annuel dépasse 2,5 M FCFA).',
            keyRule:
              'Rabais = défaut ou retard ; Remise = quantité ou qualité de l’acheteur ; Ristourne = volume cumulé sur une période donnée.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Un grossiste accorde en fin d’année 3 % de réduction à son client fidèle parce que le chiffre d’affaires cumulé de l’année a dépassé 10 000 000 FCFA. De quelle réduction s’agit-il ?',
              options: [
                'Un rabais',
                'Une remise',
                'Une ristourne',
                'Un escompte de règlement',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une réduction calculée a posteriori sur l’ensemble des opérations (chiffre d’affaires cumulé) d’une période est une ristourne.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Cascade',
            stepTheme: 'Calcul successif',
            stepTitle: 'Calculer des réductions commerciales en cascade sans additionner les taux',
            paragraphText:
              'Attention au piège arithmétique classique sur les remises multiples : deux remises successives de 10 % et 20 % ne font JAMAIS 30 % !\n' +
              '• **Méthode de la cascade** : la 1re remise s’applique sur le Brut pour donner le 1er Net Commercial ; la 2e remise s’applique uniquement sur ce 1er Net Commercial pour donner le 2e Net Commercial.\n' +
              '• **Exemple chiffré** : sur un Brut de 1 000 000 F avec remises de 10 % puis 20 % : Net 1 = $1\,000\,000 \\times 0{,}90 = 900\,000$ F ; Net 2 = $900\,000 \\times 0{,}80 = 720\,000$ F (taux global réel = 28 %, et non 30 % !).',
            formula: {
              name: 'Taux de réduction équivalent à deux remises',
              formula: 'r_{\\text{eq}} = 1 - (1 - r_1)(1 - r_2) = r_1 + r_2 - r_1 r_2',
              note: 'Pour 10 % et 20 % : 0,10 + 0,20 − 0,02 = 0,28 soit 28 %.',
            },
            konanTip:
              'Pour vérifier rapidement ton calcul en cascade, multiplie le Brut par $(1-r_1)(1-r_2)\\dots$ : tu obtiens directement le dernier Net Commercial !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Un lot de matelas de 900 000 FCFA brut bénéficie d’une première remise de 5 % et d’une deuxième remise de 3 %. Quel est le Net Commercial final ?',
              options: [
                '828 000 FCFA',
                '829 350 FCFA',
                '855 000 FCFA',
                '873 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                '1er Net = 900 000 × (1 − 0,05) = 855 000 F. 2e Net = 855 000 × (1 − 0,03) = 855 000 − 25 650 = 829 350 FCFA (et non 900 000 × 0,92 = 828 000 F).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Traitement Doit',
            stepTheme: 'Enregistrement des RRR',
            stepTitle: 'Appliquer la règle de non-comptabilisation des RRR sur facture de Doit',
            paragraphText:
              'Pourquoi ne crée-t-on pas de compte « Rabais ou Remise » lorsqu’ils figurent directement sur la facture de Doit ?\n' +
              '• **Règle SYSCOHADA** : les réductions commerciales portées sur la facture initiale diminuent directement la valeur d’achat ou de vente : elles ne s’enregistrent dans aucun compte particulier.\n' +
              '• **Montant enregistré** : chez le vendeur, on crédite 701 pour le dernier Net Commercial ; chez l’acheteur, on débite 601 pour ce même Net Commercial.\n' +
              '• **Attention** : cette règle ne vaut que pour les RRR figurant sur la facture de Doit ; les RRR accordés après coup sur facture d’Avoir seront, eux, comptabilisés.',
            keyRule:
              'Sur facture de Doit : RRR = non comptabilisés (on retient uniquement le dernier Net Commercial).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Une facture de Doit indique : Brut 2 000 000 F, remise 10 % (200 000 F), Net Commercial 1 800 000 F (exonéré de TVA). Quel montant le vendeur inscrit-il au Crédit du compte 701 ?',
              options: [
                '2 000 000 F (avec 200 000 F au Débit d’un compte de remise)',
                '1 800 000 F directement, sans comptabiliser la remise de 200 000 F',
                '200 000 F',
                '2 200 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les réductions commerciales figurant sur la facture de Doit ne se comptabilisent jamais séparément : le compte 701 (et 601 chez l’acheteur) enregistre directement le Net Commercial de 1 800 000 F.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas complet',
            stepTheme: 'Fournitures vs Marchandises',
            stepTitle: 'Choisir le bon compte d’achat ou de charge selon le bien acheté',
            paragraphText:
              'Attention à ne pas utiliser 601 Achats de marchandises pour tout ce que l’entreprise achète !\n' +
              '• **601 Achats de marchandises** : biens achetés pour être revendus en l’état (activité commerciale).\n' +
              '• **602 Achats de matières premières** : biens destinés à être transformés en produits finis.\n' +
              '• **604 / 605 Autres achats** : fournitures de bureau non stockables (6055), carburant (6053), électricité (6052), petit matériel.\n' +
              '• **Exemple** : si une société informatique achète des rames de papier pour ses imprimantes internes (67 000 F), elle débite 6055 Fournitures de bureau non stockables, et non 601.',
            konanTip:
              'Pose-toi toujours la question : « Ce bien va-t-il être revendu au client (601), transformé (602), consommé en interne (605) ou utilisé durablement > 1 an (classe 2) ? »',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Un cabinet de conseil achète à crédit 67 000 FCFA de rames de papier et stylos destinés à l’usage interne de ses bureaux. Quel compte débite-t-il ?',
              options: [
                '601 Achats de marchandises',
                '6055 Fournitures de bureau (ou 6047)',
                '701 Ventes de marchandises',
                '244 Matériel de bureau',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Des rames de papier et stylos consommés en interne ne sont ni destinés à la revente (601) ni des immobilisations durables (244) : ce sont des fournitures de bureau enregistrées en 6055 (ou 6047 si stockées).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch3_p2',
        order: 2,
        title: 'Escompte de règlement et Taxe sur la Valeur Ajoutée (TVA 18 %)',
        summary:
          'Distinguer l’escompte financier (673 / 773) des RRR, maîtriser la cascade jusqu’au Net Financier puis à la TVA à 18 % (4431 / 4452) et calculer la TVA due.',
        conceptExplanation:
          'Contrairement aux réductions commerciales, l’escompte de règlement est une réduction à caractère financier accordée au client qui paie au comptant ou avant l’échéance convenue. Il est TOUJOURS comptabilisé même sur facture de Doit : au Débit du 673 (Escomptes accordés) chez le vendeur, et au Crédit du 773 (Escomptes obtenus) chez l’acheteur.\n\n' +
          'L’ordre de calcul est strict : Brut − RRR = Net Commercial ; Net Commercial − Escompte = Net Financier ; Net Financier (+ port facturé éventuel) = Base HT ; Base HT × 18 % = TVA ; Base HT + TVA = TTC (Net à Payer).\n\n' +
          'La TVA (taux normal 18 % en Côte d’Ivoire) est neutre pour l’entreprise assujettie : elle collecte la TVA sur ses ventes (4431), déduit la TVA récupérable sur ses achats (4452) et reverse uniquement la différence (TVA due) à la DGI.',
        formulas: [
          {
            name: 'Cascade Escompte et TVA (18 %)',
            formula: '\\text{NF} = \\text{NC} \\times (1 - e) \\quad ; \\quad \\text{TVA} = 0{,}18 \\times \\text{Base HT} \\quad ; \\quad \\text{TTC} = \\text{Base HT} \\times 1{,}18',
            note: 'Sans port, Base HT = Net Financier (NF).',
          },
          {
            name: 'TVA à décaisser (reversée à l’État)',
            formula: '\\text{TVA due} = \\text{TVA collect\\acute{e}e (443)} - \\text{TVA d\\acute{e}ductible (445)}',
            note: 'Si TVA déductible > TVA collectée, l’entreprise détient un crédit de TVA (4449).',
          },
        ],
        keyRule:
          'Sur une facture de Doit, l’escompte se calcule TOUJOURS après les réductions commerciales (sur le dernier Net Commercial), et la TVA se calcule TOUJOURS après l’escompte (sur le Net Financier).',
        workedExample: {
          title: 'Facture avec remise, escompte et TVA 18 % — Cas BDP / TK',
          statement:
            'La société BDP adresse à son client TK une facture : Marchandises HT 4 000 000 F, remise 5 %, escompte 2 %, TVA 18 %. Présenter le décompte et enregistrer chez les deux parties.',
          methodSteps: [
            '1) Remise 5 % × 4 000 000 = 200 000 F → Net Commercial (NC) = 3 800 000 F.',
            '2) Escompte 2 % × 3 800 000 = 76 000 F → Net Financier (NF) = 3 800 000 − 76 000 = 3 724 000 F.',
            '3) TVA 18 % × 3 724 000 = 670 320 F → Net à Payer (TTC) = 3 724 000 + 670 320 = 4 394 320 F.',
            '4) Chez BDP (vendeur) : Débit 411 Client (4 394 320) + Débit 673 Escompte accordé (76 000) / Crédit 701 Ventes (3 800 000) + Crédit 4431 TVA facturée (670 320).',
            '5) Chez TK (acheteur) : Débit 601 Achats (3 800 000) + Débit 4452 TVA récupérable (670 320) / Crédit 401 Fournisseur (4 394 320) + Crédit 773 Escompte obtenu (76 000).',
          ],
          conclusion:
            'Le compte 601/701 porte le Net Commercial (3 800 000), l’escompte est isolé en 673/773 (76 000), la TVA (670 320) est calculée sur le Net Financier et le compte de tiers (411/401) reçoit le Net à Payer TTC (4 394 320).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Escompte',
            stepTheme: 'Réduction financière',
            stepTitle: 'Distinguer l’escompte de règlement des RRR commerciaux',
            paragraphText:
              'Pourquoi une entreprise qui vend à 60 jours accorde-t-elle 2 % d’escompte si le client paie comptant ? Pour accélérer ses rentrées de trésorerie et réduire son risque d’impayé.\n' +
              '• **Nature financière** : l’escompte récompense le paiement anticipé, ce qui en fait une opération financière (et non un rabais sur le prix de la marchandise).\n' +
              '• **Comptabilisation systématique** : contrairement aux RRR sur facture de Doit, l’escompte est toujours enregistré : en charge financière **673 Escomptes accordés** chez le fournisseur et en produit financier **773 Escomptes obtenus** chez le client.\n' +
              '• **Exemple** : sur 3 800 000 F de Net Commercial avec 2 % d’escompte, le fournisseur enregistre 76 000 F au Débit du 673.',
            keyRule:
              '673 = Escompte accordé (charge financière du vendeur, au Débit) ; 773 = Escompte obtenu (produit financier de l’acheteur, au Crédit).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Sur une facture de Doit comportant un escompte de règlement de 15 000 FCFA, dans quel compte et de quel côté le client acheteur enregistre-t-il cet escompte ?',
              options: [
                'Il ne le comptabilise pas',
                'Au Débit du compte 673 Escomptes accordés',
                'Au Crédit du compte 773 Escomptes obtenus',
                'En diminution directe du compte 601 Achats',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour l’acheteur qui paie plus tôt, l’escompte obtenu est un gain financier comptabilisé au Crédit du compte 773 Escomptes obtenus.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Cascade complète',
            stepTheme: 'Ordre de facturation',
            stepTitle: 'Respecter la pyramide de calcul du Brut jusqu’au TTC',
            paragraphText:
              'Une facture complète suit une hiérarchie de calcul incontournable : chaque étage sert d’assiette à l’étage suivant.\n' +
              '• **Étage 1 — Commercial** : Prix Brut HT − RRR en cascade = **Net Commercial** (enregistré en 601 / 701).\n' +
              '• **Étage 2 — Financier** : Net Commercial − Escompte = **Net Financier**.\n' +
              '• **Étage 3 — Fiscal (TVA)** : (Net Financier + frais accessoires taxables) × 18 % = **TVA**.\n' +
              '• **Étage 4 — Règlement** : Base HT + TVA (+ débours/consignations éventuels) = **Net à Payer TTC** (enregistré en 401 / 411).',
            visualSchema: {
              type: 'layered_stack',
              title: 'Pyramide de calcul d’une facture de Doit SYSCOHADA',
              caption: 'De haut en bas : chaque palier détermine la base de calcul du palier suivant.',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: '1. Prix Brut HT', title: 'Quantités × Prix unitaire HT', subtitle: 'Point de départ avant toute réduction', color: 'slate' },
                  { badge: '2. Net Commercial', title: 'Brut − Rabais, Remises, Ristournes (en cascade)', subtitle: 'Montant imputé en 601 (Achats) et 701 (Ventes) — RRR non comptabilisés', color: 'blue' },
                  { badge: '3. Net Financier', title: 'Net Commercial − Escompte de règlement', subtitle: 'Escompte enregistré en 673 (vendeur) et 773 (acheteur)', color: 'violet' },
                  { badge: '4. Base HT taxable', title: 'Net Financier + Port facturé (forfaitaire)', subtitle: 'Assiette exacte soumise à la TVA à 18 %', color: 'orange' },
                  { badge: '5. Net à Payer (TTC)', title: 'Base HT + TVA 18 % (+ Port débours + Consignations)', subtitle: 'Montant imputé en 401 (Fournisseur) et 411 (Client)', color: 'green' },
                ],
              },
            },
            keyRule:
              'Vérifie toujours l’égalité : Net Commercial − Escompte + TVA = Net à Payer (en l’absence de port et d’emballages).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Une facture présente un Brut HT de 1 000 000 F, une remise de 10 %, un escompte de 2 % et une TVA de 18 %. Quel est le montant du Net Financier ?',
              options: [
                '880 000 F',
                '882 000 F',
                '900 000 F',
                '1 040 760 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Net Commercial = 1 000 000 × 0,90 = 900 000 F. Escompte = 900 000 × 0,02 = 18 000 F. Net Financier = 900 000 − 18 000 = 882 000 F.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Mécanisme TVA',
            stepTheme: 'Collectée vs déductible',
            stepTitle: 'Comprendre la neutralité de la TVA pour l’entreprise assujettie',
            paragraphText:
              'La Taxe sur la Valeur Ajoutée (18 % en Côte d’Ivoire) est un impôt indirect supporté en dernier ressort par le consommateur final : l’entreprise joue simplement le rôle de collecteur pour l’État.\n' +
              '• **TVA facturée / collectée (4431)** : perçue auprès des clients lors des ventes, elle représente une dette envers l’État (Crédit du 4431).\n' +
              '• **TVA récupérable / déductible (4452 sur achats, 4454 sur services)** : payée aux fournisseurs sur les achats professionnels, elle représente une créance sur l’État (Débit du 4452).\n' +
              '• **Liquidation mensuelle** : l’entreprise reverse à la DGI uniquement $\\text{TVA due} = 443 - 445$ (compte 4441).',
            formula: {
              name: 'Déclaration mensuelle de TVA',
              formula: '\\text{TVA à payer (4441)} = \\text{TVA collect\\acute{e}e (443)} - \\text{TVA r\\acute{e}cup\\acute{e}rable (445)}',
              note: 'Les achats (601) et les ventes (701) sont donc toujours comptabilisés Hors Taxes (HT).',
            },
            konanTip:
              'La TVA n’est ni une charge (classe 6) ni un produit (classe 7) pour une entreprise assujettie : elle transite uniquement par les comptes de tiers de classe 4 (443 et 445).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Au cours du mois de juin, une société assujettie a facturé 2 160 000 F de TVA à ses clients et supporté 1 350 000 F de TVA sur ses achats. Quel montant doit-elle reverser à la DGI ?',
              options: [
                '2 160 000 FCFA',
                '1 350 000 FCFA',
                '810 000 FCFA',
                '3 510 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'TVA due = TVA collectée (2 160 000) − TVA déductible (1 350 000) = 810 000 FCFA à reverser à l’administration fiscale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Écritures symétriques',
            stepTheme: 'Vendeur vs Acheteur',
            stepTitle: 'Passer l’écriture complète d’une facture avec escompte et TVA',
            paragraphText:
              'La symétrie entre la comptabilité du fournisseur et celle du client permet de vérifier instantanément chaque écriture.\n' +
              '• **Chez le vendeur** : Débit `411 Client` (Net à Payer TTC) + Débit `673 Escompte accordé` = Crédit `701 Ventes` (Net Commercial) + Crédit `4431 TVA facturée` (18 % du NF).\n' +
              '• **Chez l’acheteur** : Débit `601 Achats` (Net Commercial) + Débit `4452 TVA récupérable` (18 % du NF) = Crédit `401 Fournisseur` (Net à Payer TTC) + Crédit `773 Escompte obtenu`.\n' +
              '• **Contrôle** : dans les deux journaux, $\\text{NC} + \\text{TVA} = \\text{NAP} + \\text{Escompte}$.',
            keyRule:
              'Vérifie toujours que les comptes 601/701 enregistrent le Net Commercial (et non le Net Financier), car l’escompte est isolé dans 673/773.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Pour une vente de Net Commercial 1 000 000 F, escompte 2 % (20 000 F), Net Financier 980 000 F, TVA 18 % (176 400 F), NAP = 1 156 400 F, quels montants figurent au Débit chez le vendeur ?',
              options: [
                '411 Client (980 000) et 673 Escompte (20 000)',
                '411 Client (1 156 400) et 673 Escompte (20 000)',
                '411 Client (1 176 400) uniquement',
                '601 Achats (1 000 000) et 4452 TVA (176 400)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chez le vendeur : Débit 411 Client = 1 156 400 F (NAP) + Débit 673 Escompte = 20 000 F (total 1 176 400 F) = Crédit 701 (1 000 000) + Crédit 4431 (176 400).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège TVA',
            stepTheme: 'Assiette de la TVA',
            stepTitle: 'Éviter l’erreur de calculer la TVA sur le Net Commercial au lieu du Net Financier',
            paragraphText:
              'Une erreur fréquente en examen consiste à calculer la TVA à 18 % sur le Net Commercial puis à soustraire l’escompte après.\n' +
              '• **Pourquoi c’est faux ?** L’escompte financier réduit le prix effectivement payé par le client ; fiscalement, la base imposable à la TVA est donc diminuée de cet escompte !\n' +
              '• **Calcul exact** : avec NC = 722 000 F (760 000 − 5 %) et escompte 5 % (36 100 F), NF = 685 900 F ; la TVA vaut $685\,900 \\times 18\\,\\% = 123\,462$ F (et non $722\,000 \\times 18\\,\\% = 129\,960$ F).\n' +
              '• **Exception** : les entreprises non assujetties à la TVA enregistrent leurs achats directement TTC en classe 6.',
            konanTip:
              'Retiens la formule express : $\\text{Base TVA} = \\text{Net Financier}$ (plus port facturé s’il y en a). Jamais le Net Commercial lorsqu’il y a un escompte !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Une facture affiche Net Commercial = 500 000 F, escompte = 10 000 F (2 %), TVA = 18 %. Quel est le montant exact de la TVA ?',
              options: [
                '90 000 F',
                '88 200 F',
                '91 800 F',
                '86 400 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Net Financier = 500 000 − 10 000 = 490 000 F. TVA = 18 % × 490 000 = 88 200 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Retrouver le HT',
            stepTheme: 'Passage TTC → HT',
            stepTitle: 'Retrouver le montant HT et la TVA à partir d’un prix TTC',
            paragraphText:
              'Sur les tickets de caisse ou certaines pièces commerciales, seul le montant TTC figure : il faut savoir extraire le HT et la TVA.\n' +
              '• **Formule de conversion** : puisque $\\text{TTC} = \\text{HT} \\times (1 + 0{,}18) = 1{,}18 \\times \\text{HT}$, on retrouve $\\text{HT} = \\text{TTC} / 1{,}18$.\n' +
              '• **Piège mortel** : ne JAMAIS calculer 18 % du TTC pour trouver la TVA ! $18\\,\\%$ s’applique au HT, pas au TTC.\n' +
              '• **Exemple** : pour une réparation informatique réglée 23 600 F TTC en espèces : $\\text{HT} = 23\,600 / 1{,}18 = 20\,000$ F et $\\text{TVA} = 23\,600 - 20\,000 = 3\,600$ F.',
            formula: {
              name: 'Extraction du HT à partir du TTC (TVA 18 %)',
              formula: '\\text{HT} = \\frac{\\text{TTC}}{1{,}18} \\quad ; \\quad \\text{TVA} = \\text{TTC} - \\text{HT}',
              note: 'Vérification : 20 000 × 18 % = 3 600 F ; 20 000 + 3 600 = 23 600 F.',
            },
            keyRule:
              'Pour passer du TTC au HT au taux de 18 %, on divise par 1,18 (on ne multiplie jamais par 0,82 !).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Une prestation d’entretien d’ordinateur est facturée 59 000 FCFA TTC (TVA 18 %). Quel est son montant Hors Taxes (HT) ?',
              options: [
                '48 380 FCFA',
                '50 000 FCFA',
                '49 560 FCFA',
                '10 620 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'HT = TTC / 1,18 = 59 000 / 1,18 = 50 000 FCFA (et TVA = 50 000 × 18 % = 9 000 FCFA).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch3_p3',
        order: 3,
        title: 'Majorations de transport : port facturé vs port payé (débours) et acomptes',
        summary:
          'Distinguer le port forfaitaire assuré par le vendeur (soumis à TVA) du port payé/débours récupéré à l’euro près (exonéré de TVA), et comptabiliser les acomptes versés/reçus.',
        conceptExplanation:
          'Les frais de transport facturés au client obéissent à deux régimes fiscaux et comptables distincts selon qui réalise la livraison.\n\n' +
          '1) Port facturé (forfaitaire) : le fournisseur livre par ses propres moyens (camion propre). Ce service accessoire suit le sort fiscal du bien vendu : il s’ajoute au Net Financier AVANT la TVA à 18 %, et s’enregistre au Crédit du compte 7071 (Ports et frais accessoires facturés) chez le vendeur.\n\n' +
          '2) Port payé (port avancé / débours) : le fournisseur recourt à un transporteur tiers (ex. transporteur routier ou ferroviaire), paie la facture du transporteur (en 613 Transports pour le compte de tiers, exonéré de TVA dans les transports de marchandises courants ou refacturé à l’identique) puis récupère ce montant exact APRÈS la TVA (en 7071 / 7061 ou crédit de 613). Chez l’acheteur, les frais accessoires d’achat s’enregistrent au Débit du compte 6015 (Frais sur achats) ou 611.',
        formulas: [
          {
            name: 'Base TVA selon la nature du port',
            formula: '\\text{Base TVA (port factur\\acute{e})} = \\text{NF} + \\text{Port} \\quad | \\quad \\text{Base TVA (port d\\acute{e}bours)} = \\text{NF}',
            note: 'Le port débours s’ajoute après la TVA pour éviter une double taxation.',
          },
        ],
        keyRule:
          'Port assuré par le fournisseur (port facturé) → placé AVANT la TVA (soumis à 18 %). Port payé à un tiers (débours) → placé APRÈS la TVA (non soumis à TVA sur la facture client).',
        workedExample: {
          title: 'Comparaison Port facturé vs Port débours sur une même vente',
          statement:
            'Soit un Net Financier de 485 100 F (Brut 500 000 F, remise 1 % = 5 000 F, NC = 495 000 F, escompte 2 % = 9 900 F) et un transport de 20 000 F. Calculer le Net à Payer dans les deux cas (TVA 18 %).',
          methodSteps: [
            'Cas A (Port facturé par le vendeur) : Base HT = 485 100 + 20 000 = 505 100 F ; TVA 18 % = 90 918 F ; NAP = 505 100 + 90 918 = 596 018 F.',
            'Cas B (Port débours payé à un transporteur tiers) : Base HT = 485 100 F ; TVA 18 % = 87 318 F ; TTC marchandises = 572 418 F ; + Port débours 20 000 F → NAP = 592 418 F.',
          ],
          conclusion:
            'La différence entre les deux factures est exactement de 3 600 F, soit 18 % de TVA sur les 20 000 F de port.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Port facturé',
            stepTheme: 'Livraison par le vendeur',
            stepTitle: 'Comptabiliser un transport assuré par le fournisseur (port facturé)',
            paragraphText:
              'Lorsque le vendeur livre la marchandise avec son propre véhicule et facture un forfait de transport à son client, ce transport est une prestation accessoire à la vente.\n' +
              '• **Incidence fiscale** : l’accessoire suit le principal — le port facturé s’ajoute au Net Financier et supporte la TVA à 18 %.\n' +
              '• **Chez le vendeur** : Crédit `7071 Ports, emballages perdus et autres frais facturés` (et TVA collectée 4431 calculée sur NF + Port).\n' +
              '• **Chez l’acheteur** : Débit `6015 Frais sur achats` (ou `611` / `6241` selon le plan de comptes retenu) pour le montant HT du transport.',
            keyRule:
              'Port facturé (forfaitaire) = avant la TVA sur la facture, compte 7071 chez le vendeur et 6015 (ou 611) chez l’acheteur.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Une entreprise vend des marchandises (Net Financier 2 592 810 F) et livre avec son propre camion en facturant 100 000 F de port forfaitaire (TVA 18 %). Quel est le montant de la TVA ?',
              options: [
                '466 706 F (18 % de 2 592 810)',
                '484 706 F (18 % de 2 692 810)',
                '18 000 F uniquement',
                '448 706 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le port est assuré par le vendeur (port facturé) : il intègre la base taxable = 2 592 810 + 100 000 = 2 692 810 F. TVA = 18 % × 2 692 810 = 484 705,8 ≈ 484 706 F.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Port débours',
            stepTheme: 'Recours à un transporteur',
            stepTitle: 'Traiter un port avancé (débours) en deux temps sans TVA',
            paragraphText:
              'Lorsque le vendeur ne dispose pas de camion et confie l’expédition à un transporteur externe (société de fret ou rail), l’opération se déroule en deux étapes distinctes.\n' +
              '• **Étape 1 (Facture du transporteur)** : le vendeur paie ou reçoit la facture du transporteur et la débite en `613 Transports pour le compte de tiers` (Crédit 401 Transporteur ou 521/571).\n' +
              '• **Étape 2 (Refacturation au client)** : sur la facture de Doit du client, le port débours figure APRÈS la TVA (non soumis à TVA) et le vendeur crédite `7061 / 7071` ou solde `613` pour le même montant exact.\n' +
              '• **Chez l’acheteur** : le port est toujours enregistré en `6015 Frais sur achats` (ou `611`).',
            konanTip:
              'Pour l’acheteur, que le port soit facturé ou débours, il va au Débit de `6015 Frais sur achats` (ou 611/6241) ! C’est surtout chez le VENDEUR et sur l’assiette de la TVA que la distinction est capitale.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Un fournisseur engage 300 000 F auprès d’un transporteur ferroviaire pour livrer un client à Bouaké, puis lui refacture ce port avancé (débours) sur sa facture de vente. Quel compte le fournisseur débite-t-il lorsqu’il reçoit la facture du transporteur ?',
              options: [
                '601 Achats de marchandises',
                '613 Transports pour le compte de tiers',
                '7071 Ports facturés',
                '411 Clients',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le fournisseur paie un transport qui incombe au client : il enregistre d’abord la charge avancée au Débit du compte 613 Transports pour le compte de tiers.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Comparatif',
            stepTheme: 'Port facturé vs débours',
            stepTitle: 'Comparer la présentation des deux types de port sur une facture',
            paragraphText:
              'Le tableau ci-dessous confronte pas à pas les deux présentations pour un même Net Financier de 9 030 700 F et un transport de 300 000 F (TVA 18 %).\n' +
              '• **Colonne Port facturé** : les 300 000 F s’ajoutent avant la ligne TVA, portant la base imposable à 9 330 700 F et la TVA à 1 679 526 F.\n' +
              '• **Colonne Port débours** : la TVA (1 625 526 F) est calculée sur le seul Net Financier de 9 030 700 F, puis les 300 000 F sont ajoutés après le TTC.\n' +
              '• **Écart sur le NAP** : exactement 54 000 F ($18\\,\\% \\times 300\,000$).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Position du transport sur la facture de Doit (en FCFA)',
              caption: 'Le port facturé entre dans la base TVA ; le port débours s’ajoute après la TVA.',
              tableData: {
                headers: ['Rubrique de la facture', 'Cas 1 : Port facturé (forfait)', 'Cas 2 : Port payé (débours)'],
                rows: [
                  ['Net Commercial', '9 310 000', '9 310 000'],
                  ['− Escompte 3 %', '− 279 300', '− 279 300'],
                  ['= Net Financier', '9 030 700', '9 030 700'],
                  ['+ Port facturé (avant TVA)', '+ 300 000', '—'],
                  ['= Base HT soumise à TVA', '9 330 700', '9 030 700'],
                  ['+ TVA 18 %', '+ 1 679 526', '+ 1 625 526'],
                  ['+ Port débours (après TVA)', '—', '+ 300 000'],
                  ['= Net à Payer (NAP)', '11 010 226', '10 956 226'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'D’après le tableau comparatif ci-dessus, pourquoi le Net à Payer du Cas 2 (10 956 226 F) est-il inférieur de 54 000 F à celui du Cas 1 ?',
              options: [
                'Parce que le client bénéficie d’une remise supplémentaire de 54 000 F',
                'Parce que le port débours de 300 000 F placé après la TVA n’a pas supporté les 18 % de TVA (54 000 F)',
                'Parce que l’escompte a été doublé dans le Cas 2',
                'Parce que le fournisseur paie le port à perte',
              ],
              correctAnswerIndex: 1,
              explanation:
                '18 % × 300 000 = 54 000 F. Dans le Cas 2, le port avancé est refacturé après la TVA, économisant 54 000 F de TVA par rapport au port forfaitaire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Acomptes',
            stepTheme: 'Avances et acomptes',
            stepTitle: 'Comptabiliser une avance versée puis son imputation sur la facture finale',
            paragraphText:
              'Il est courant qu’un fournisseur exige une avance à la commande avant d’expédier la marchandise.\n' +
              '• **Lors du versement de l’avance** : chez le client, Débit `4091 Fournisseurs, avances et acomptes versés` / Crédit `521 Banque` ; chez le vendeur, Débit `521 Banque` / Crédit `4191 Clients, avances et acomptes reçus`.\n' +
              '• **Lors de la facture finale** : la facture est comptabilisée normalement pour son montant total TTC, puis l’avance antérieure est imputée (soldée) en diminution de la dette ou créance finale !\n' +
              '• **Exemple** : facture NAP = 4 937 920 F dont 500 000 F déjà versés en avance → on débite `401` de 500 000 F par le crédit de `4091` (reste à payer : 4 437 920 F).',
            keyRule:
              'Attention au numéro : 4091 (Fournisseurs, avances versées) est un compte d’ACTIF (solde débiteur), et 4191 (Clients, avances reçues) est un compte de PASSIF (solde créditeur) — le « 9 » en 3e position signale le sens inversé !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Un client verse 500 000 F d’acompte par chèque à la commande. Sur la facture définitive, le total TTC s’élève à 2 500 000 F. Quel reste net le client doit-il encore payer ?',
              options: [
                '3 000 000 F',
                '2 500 000 F',
                '2 000 000 F',
                '500 000 F',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’acompte déjà versé de 500 000 F vient en déduction du total TTC (2 500 000 F) : le solde restant dû au fournisseur 401 est de 2 000 000 F.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Port et escompte',
            stepTitle: 'Ne jamais appliquer l’escompte financier sur les frais de port',
            paragraphText:
              'Un piège classique dans les sujets de facturation consiste à calculer l’escompte de règlement après avoir additionné les frais de transport.\n' +
              '• **Règle commerciale** : l’escompte porte uniquement sur le prix des marchandises (le Net Commercial), jamais sur les frais accessoires de port ni sur les consignations d’emballages.\n' +
              '• **Vérification** : si NC marchandises = 495 000 F, escompte = 2 % et port facturé = 20 000 F, l’escompte vaut $2\\,\\% \\times 495\,000 = 9\,900$ F (et non $2\\,\\% \\times 515\,000 = 10\,300$ F).\n' +
              '• Le port n’intervient qu’après le calcul du Net Financier.',
            konanTip:
              'Ordre immuable : Net Commercial → Escompte → Net Financier → Port facturé → Base HT → TVA → Port débours → Net à Payer !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Une facture comporte : Marchandises NC = 2 000 000 F, Port facturé = 100 000 F, Escompte = 2 %. Quel est le montant de l’escompte ?',
              options: [
                '42 000 F (2 % de 2 100 000)',
                '40 000 F (2 % de 2 000 000)',
                '2 000 F (2 % de 100 000)',
                '38 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’escompte de règlement se calcule exclusivement sur le Net Commercial des marchandises (2 000 000 × 2 % = 40 000 F), avant d’ajouter le port.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Compte 6015',
            stepTheme: 'Coût d’achat comptable',
            stepTitle: 'Distinguer 6015 Frais sur achats et 624 Transports généraux',
            paragraphText:
              'En comptabilité générale SYSCOHADA, tous les frais de transport ne vont pas dans le même compte de charges.\n' +
              '• **6015 Frais sur achats (ou 611)** : frais de transport, transit ou douane directement liés à l’achat de marchandises (figurant sur la facture fournisseur ou payés pour acheminer les marchandises achetées).\n' +
              '• **612 Transports sur ventes** : frais payés à un transporteur par le fournisseur pour livrer ses clients à sa charge (port franco).\n' +
              '• **614 / 618 Autres transports** : déplacements du personnel ou transport administratif sans lien avec un lot acheté ou vendu.',
            keyRule:
              'À l’achat, les frais accessoires facturés s’imputent en 6015 Frais sur achats afin de reconstituer le coût d’achat des marchandises.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Un commerçant reçoit la facture d’un fournisseur mentionnant 1 500 000 F de marchandises et 45 000 F de port facturé HT. Dans quel compte enregistre-t-il les 45 000 F ?',
              options: [
                '7071 Ports facturés',
                '6015 Frais sur achats (ou 611 Transport sur achats)',
                '612 Transport sur ventes',
                '4452 TVA récupérable',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour l’acheteur, les frais de transport liés à l’acquisition des marchandises constituent des frais accessoires enregistrés en 6015 (ou 611).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch3_p4',
        order: 4,
        title: 'Les factures d’Avoir : retours de marchandises et réductions hors facture',
        summary:
          'Comptabiliser un retour total ou partiel de marchandises, enregistrer les RRR hors facture (6019 / 7019 ou 601 / 701) et traiter un escompte accordé après facturation.',
        conceptExplanation:
          'Lorsqu’un événement vient diminuer la créance du fournisseur après l’émission de la facture de Doit, le vendeur établit une facture d’« Avoir » (ou note de crédit).\n\n' +
          'Deux grands cas se présentent : 1) Le retour de marchandises (total ou partiel) : on contre-passe proportionnellement l’écriture de vente/achat initiale aux mêmes conditions de remises, d’escompte et de TVA.\n\n' +
          '2) Les réductions accordées hors facture : contrairement à la facture de Doit, les RRR hors facture SONT COMPTABILISÉS ! Rattachés à une facture précise, ils viennent diminuer 701 (Débit) et 4431 chez le vendeur, et 601 (Crédit) et 4452 chez l’acheteur (ou via les comptes spécifiques 7019/6019 si non rattachés à une facture déterminée). L’escompte hors facture affecte 673/773 et régularise la TVA.',
        formulas: [
          {
            name: 'Base de retour partiel sur facture avec RRR et escompte',
            formula: '\\text{Avoir HT} = \\text{Brut retourn\\acute{e}} \\times (1 - r_1)\\dots(1 - r_k) \\times (1 - e)',
            note: 'Les mêmes taux de remise et d’escompte que la facture de Doit d’origine s’appliquent au lot retourné.',
          },
        ],
        keyRule:
          'RRR sur facture de Doit = NON comptabilisés ; RRR sur facture d’Avoir (hors facture) = TOUJOURS comptabilisés en diminution des ventes (701/7019) et des achats (601/6019).',
        workedExample: {
          title: 'Escompte conditionnel accordé après facturation — Cas SRIT / SIGL',
          statement:
            'Le 01/03/N, SRIT vend à SIGL 3 000 000 F HT (+ TVA 18 % = 540 000 F, soit 3 540 000 F TTC) à 3 mois. SIGL propose un paiement immédiat le 05/03/N moyennant un escompte de 3 %. Calculer l’avoir d’escompte TTC et enregistrer le règlement.',
          methodSteps: [
            '1) Escompte HT = 3 % × 3 000 000 = 90 000 F.',
            '2) Régularisation TVA 18 % = 18 % × 90 000 = 16 200 F → Escompte TTC = 90 000 + 16 200 = 106 200 F.',
            '3) Chèque net versé par SIGL = 3 540 000 − 106 200 = 3 433 800 F.',
            '4) Chez SRIT (vendeur) : Débit 521 Banque (3 433 800) + Débit 673 Escompte (90 000) + Débit 4431 TVA (16 200) / Crédit 411 Client (3 540 000).',
            '5) Chez SIGL (acheteur) : Débit 401 Fournisseur (3 540 000) / Crédit 521 Banque (3 433 800) + Crédit 773 Escompte (90 000) + Crédit 4452 TVA (16 200).',
          ],
          conclusion:
            'L’escompte hors facture s’accompagne obligatoirement d’une régularisation de la TVA (16 200 F) pour que le compte de tiers (3 540 000 F) soit intégralement soldé.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Facture d’Avoir',
            stepTheme: 'Objet de l’avoir',
            stepTitle: 'Comprendre la logique comptable de la facture d’Avoir',
            paragraphText:
              'La facture d’Avoir est émise par le fournisseur pour reconnaître une diminution de sa créance envers le client (ou une dette s’il doit rembourser).\n' +
              '• **Sens comptable** : c’est exactement l’inverse de la facture de Doit : chez le vendeur, `411 Client` est CRÉDITÉ ; chez l’acheteur, `401 Fournisseur` est DÉBITÉ.\n' +
              '• **Trois motifs principaux** : retour de marchandises non conformes, réduction commerciale hors facture (rabais ou ristourne périodique), escompte financier pour règlement anticipé, ou déconsignation d’emballages.',
            keyRule:
              'Sur une facture d’Avoir, les comptes de tiers fonctionnent en sens inverse de la facture de Doit : Crédit 411 chez le vendeur, Débit 401 chez l’acheteur.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p4_q1',
              type: 'mcq',
              prompt:
                'Lorsque le fournisseur envoie une facture d’Avoir à son client, dans quel sens le compte 411 Client est-il mouvementé chez le fournisseur ?',
              options: [
                'Au Débit, car la créance augmente',
                'Au Crédit, car la créance sur le client diminue',
                'Dans aucun sens, car un avoir est hors bilan',
                'Au Débit du compte 601',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une facture d’Avoir réduit ce que le client doit au fournisseur : chez ce dernier, le compte 411 Client (Actif) diminue donc au Crédit.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Retour',
            stepTheme: 'Retour de marchandises',
            stepTitle: 'Enregistrer un retour partiel de marchandises aux conditions initiales',
            paragraphText:
              'Si un client retourne une partie de la livraison, l’avoir doit neutraliser exactement les montants facturés à l’origine pour ces articles.\n' +
              '• **Calcul** : on applique au prix brut des articles retournés les mêmes RRR en cascade et le même escompte éventuel que sur la facture de Doit, puis la TVA à 18 %.\n' +
              '• **Chez le vendeur** : Débit `701 Ventes` (NC retourné) + Débit `4431 TVA facturée` / Crédit `411 Client` (TTC) + Crédit `673 Escompte` (si escompte il y avait).\n' +
              '• **Chez l’acheteur** : Débit `401 Fournisseur` (TTC) + Débit `773 Escompte` / Crédit `601 Achats` (NC) + Crédit `4452 TVA récupérable`.',
            konanTip:
              'Pour ne jamais te tromper sur l’écriture d’un retour, écris d’abord mentalement la facture de Doit pour le lot retourné, puis retourne simplement le Débit et le Crédit !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p4_q2',
              type: 'mcq',
              prompt:
                'Un client avait acheté des marchandises avec 10 % de remise et 18 % de TVA. Il retourne un lot de 200 000 F prix brut. Quel est le montant Net Commercial HT à créditer dans son compte 601 Achats ?',
              options: [
                '200 000 F',
                '180 000 F',
                '212 400 F',
                '162 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le retour s’effectue aux conditions initiales : 200 000 − 10 % = 180 000 F de Net Commercial HT (plus 32 400 F de TVA = 212 400 F TTC sur le compte 401).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'RRR hors facture',
            stepTheme: 'Rabais et ristournes après coup',
            stepTitle: 'Comptabiliser les rabais, remises et ristournes hors facture',
            paragraphText:
              'Contrairement aux RRR de la facture de Doit, les réductions commerciales accordées sur facture d’Avoir doivent impérativement être enregistrées.\n' +
              '• **Rattachés à une facture précise** : on diminue directement les comptes d’origine : Débit `701` (+ Débit `4431` si TVA applicable) / Crédit `411` chez le vendeur ; Débit `401` / Crédit `601` (+ Crédit `4452`) chez l’acheteur.\n' +
              '• **Non rattachés à une facture précise (ex. ristourne globale annuelle)** : le SYSCOHADA préconise les comptes dédiés `7019` (ou `701` débité) chez le vendeur et `6019 Rabais, remises et ristournes obtenus (non ventilés)` au Crédit chez l’acheteur.',
            keyRule:
              'Retiens le chiffre « 9 » en 4e position : 6019 (RRR obtenus non ventilés, solde créditeur venant en baisse des achats) et 7019 (RRR accordés, solde débiteur venant en baisse des ventes).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p4_q3',
              type: 'mcq',
              prompt:
                'En fin d’exercice, un fournisseur accorde à son client une ristourne annuelle de 250 000 F HT (non rattachée à une facture précise, hors TVA). Quel compte le client peut-il créditer en SYSCOHADA ?',
              options: [
                '773 Escomptes obtenus',
                '6019 RRR obtenus (ou 601 Achats en diminution)',
                '411 Clients',
                '673 Escomptes accordés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une ristourne commerciale hors facture obtenue vient réduire les achats : elle est enregistrée au Crédit du compte 6019 (ou 601 s’il s’agit d’une facture précise) par le Débit de 401 Fournisseur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Escompte postérieur',
            stepTheme: 'Escompte hors facture',
            stepTitle: 'Enregistrer un escompte obtenu lors d’un paiement anticipé',
            paragraphText:
              'Un client qui paie comptant une facture initialement prévue à 90 jours peut négocier un escompte de règlement après réception de la facture de Doit.\n' +
              '• **Double impact** : l’escompte réduit la somme à verser et nécessite, lorsque la vente initiale était soumise à TVA, une régularisation proportionnelle de la TVA.\n' +
              '• **Calcul** : si la facture initiale valait 3 000 000 F HT (+ 540 000 F TVA = 3 540 000 F TTC), un escompte de 3 % représente 90 000 F HT + 16 200 F de TVA = 106 200 F TTC.\n' +
              '• **Règlement** : le client verse 3 433 800 F et crédite `773` (90 000) et `4452` (16 200).',
            formula: {
              name: 'Escompte TTC hors facture',
              formula: '\\text{Escompte TTC} = \\text{Escompte HT} \\times (1 + t_{\\text{TVA}})',
              note: 'L’escompte HT va en 673/773 et la TVA correspondante régularise 4431/4452.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p4_q4',
              type: 'mcq',
              prompt:
                'Une facture s’élève à 1 000 000 F HT + 180 000 F TVA = 1 180 000 F TTC. Le client obtient un escompte hors facture de 2 % sur le HT pour règlement anticipé. Quel montant paie-t-il réellement par chèque ?',
              options: [
                '1 160 000 F',
                '1 156 400 F',
                '1 180 000 F',
                '980 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Escompte HT = 2 % × 1 000 000 = 20 000 F. TVA sur escompte = 18 % × 20 000 = 3 600 F. Escompte TTC = 23 600 F. Chèque à verser = 1 180 000 − 23 600 = 1 156 400 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège TVA Avoir',
            stepTheme: 'Port non remboursé et TVA',
            stepTitle: 'Vérifier le sort du port lors d’un retour de marchandises',
            paragraphText:
              'Un piège d’examen classique porte sur les frais de transport lorsqu’un client retourne des marchandises défectueuses.\n' +
              '• **Retour partiel ou faute du client** : en principe, le transport aller déjà consommé n’est pas remboursé sur l’avoir (sauf accord commercial explicite si toute la livraison était non conforme par la faute du vendeur).\n' +
              '• **Frais de retour à la charge du vendeur** : si le client paie le transport de retour pour le compte du fournisseur fautif, il lui refacture en débours.\n' +
              '• **Attention** : en cas de rabais hors facture de 110 000 F sur un lot précis, la TVA est ajustée dans la même proportion que l’opération d’origine (sauf convention contraire exonérée).',
            konanTip:
              'Lis toujours attentivement l’énoncé de l’avoir : vérifie si les réductions commerciales initiales s’appliquent au lot retourné et si le montant annoncé est HT ou TTC !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p4_q5',
              type: 'mcq',
              prompt:
                'Un acheteur reçoit une facture d’avoir n°221 pour un rabais de 110 000 F HT (opération exonérée de TVA) rattaché à une facture d’achat de marchandises antérieure. Quelle écriture passe-t-il ?',
              options: [
                'Débit 601 Achats 110 000 / Crédit 401 Fournisseur 110 000',
                'Débit 401 Fournisseur 110 000 / Crédit 601 Achats 110 000',
                'Débit 411 Client 110 000 / Crédit 701 Ventes 110 000',
                'Aucune écriture car les rabais ne se comptabilisent jamais',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un rabais hors facture diminue la dette envers le fournisseur (Débit 401) et réduit le montant des achats (Crédit 601 Achats).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'Doit vs Avoir',
            stepTitle: 'Récapituler le traitement des RRR et de l’escompte (Doit vs Avoir)',
            paragraphText:
              'La maîtrise de la facturation repose sur la comparaison directe entre facture de Doit et facture d’Avoir.\n' +
              '• **RRR commerciaux** : ignorés en comptabilité sur facture de Doit (seul le dernier Net Commercial est saisi) ; comptabilisés obligatoirement sur facture d’Avoir (601/6019 et 701/7019).\n' +
              '• **Escompte financier** : comptabilisé dans les deux cas (673 chez le vendeur, 773 chez l’acheteur), mais nécessite en plus une régularisation de TVA lorsqu’il intervient après la facture de Doit.\n' +
              '• **TVA** : 4431 collectée au Crédit à la vente (Débit à l’avoir) ; 4452 récupérable au Débit à l’achat (Crédit à l’avoir).',
            keyRule:
              'Sur Doit : 411/401 = TTC ; 701/601 = Net Commercial ; 673/773 = Escompte. Sur Avoir : même logique exactement en sens inverse, y compris pour les RRR qui deviennent alors comptabilisables !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch3_p4_q6',
              type: 'mcq',
              prompt:
                'Quelle affirmation résume exactement la différence de traitement comptable des RRR entre facture de Doit et facture d’Avoir ?',
              options: [
                'Ils sont comptabilisés sur la facture de Doit, mais jamais sur la facture d’Avoir',
                'Ils ne sont pas comptabilisés séparément sur la facture de Doit, mais doivent être comptabilisés sur la facture d’Avoir',
                'Ils vont toujours dans le compte 673 Escomptes accordés',
                'Ils ne modifient jamais la dette fournisseur ou la créance client',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur la facture de Doit, on enregistre directement le Net Commercial sans isoler les RRR ; sur une facture d’Avoir (hors facture), les RRR doivent être comptabilisés.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : Emballages commerciaux et Effets de commerce
  // ==========================================================================
  {
    id: 'lmd_entd_l1_compta_generale_ch4',
    subjectId: 'lmd_compta_generale',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    title: 'Chapitre 4 : Emballages commerciaux et Effets de commerce',
    summary:
      'Traitement des emballages perdus vs récupérables (consignation, déconsignation, mali/boni, non-retour), effets de commerce (lettre de change, billet à ordre), remise à l’encaissement et à l’escompte (agios), impayés et renouvellement de traite.',
    officialVolumeHours: 18,
    contentVersion: 2,
    source: 'ENTD L1 — Comptabilité Générale',
    points: [
      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch4_p1',
        order: 1,
        title: 'Emballages commerciaux : perdus vs récupérables, consignation et malis/bonis',
        summary:
          'Distinguer les emballages perdus des emballages récupérables (identifiables ou non), enregistrer la consignation (4094/4194), la déconsignation, le mali/boni et la destruction ou conservation.',
        conceptExplanation:
          'Les emballages commerciaux se divisent en deux grandes familles :\n' +
          '1) Les emballages perdus (cartons, sachets, bouteilles jetables) : vendus définitivement avec la marchandise et inclus dans le prix ou facturés en 6081 (acheteur) / 7071 (vendeur).\n' +
          '2) Les emballages récupérables (casiers, bouteilles de gaz, palettes, fûts) : destinés à être prêtés ou consignés aux clients puis restitués. Ils sont soit identifiables (immobilisations 243 Matériel d’emballage récupérable), soit non identifiables (achats stockés 6082).\n\n' +
          'Lors de la consignation, le fournisseur reste propriétaire de l’emballage mais reçoit un dépôt de garantie qui constitue pour lui une dette conditionnelle (Crédit 4194 Clients, dettes pour emballages et matériels consignés) et pour le client une créance conditionnelle (Débit 4094 Fournisseurs, créances pour emballages à rendre — ou 4196 selon plan interne). Si le prix de reprise est inférieur au prix de consignation, l’écart est un mali (charge 6224 / 6599) pour le client et un boni (produit 7074) pour le fournisseur.',
        formulas: [
          {
            name: 'Mali (chez le client) / Boni (chez le fournisseur) sur déconsignation',
            formula: '\\text{Mali / Boni} = \\text{Prix de consignation} - \\text{Prix de reprise}',
            note: 'Lorsque Prix de reprise < Prix de consignation : charge 6224 (mali) chez le client, produit 7074 (boni) chez le fournisseur.',
          },
        ],
        keyRule:
          'La consignation d’emballages récupérables n’est NI un achat NI une vente : elle s’enregistre sans TVA (sauf non-restitution) dans les comptes 4094 (chez le client) et 4194 (chez le fournisseur), et s’ajoute au bas de la facture après la TVA.',
        workedExample: {
          title: 'Consignation puis déconsignation avec mali — Cas G&B Sarl / SOLIBRA',
          statement:
            'Le 07/04/N, G&B Sarl achète des boissons auprès de DASI avec consignation de 1 000 casiers à 900 FCFA pièce (900 000 F). Le 15/10/N, G&B Sarl restitue les 1 000 casiers, mais DASI ne les reprend qu’à 800 FCFA pièce (800 000 F). Passer les écritures chez le client G&B Sarl.',
          methodSteps: [
            '1) Le 07/04/N (Consignation) : Débit 4094 (ou 4196) Fournisseurs, emballages à rendre : 900 000 F / Crédit 401 DASI : 900 000 F (intégré au Net à Payer de la facture).',
            '2) Le 15/10/N (Déconsignation à prix inférieur) : la créance sur DASI s’éteint pour 900 000 F (Crédit 4094 : 900 000 F).',
            '3) Le fournisseur ne déduit de la dette que 800 000 F (Débit 401 DASI : 800 000 F).',
            '4) La différence de 100 000 F (900 000 − 800 000) constitue un mali sur emballages (Débit 6224 Malis sur emballages : 100 000 F).',
          ],
          conclusion:
            'L’écriture de déconsignation chez G&B Sarl solde intégralement la consignation de 900 000 F tout en constatant la perte de 100 000 F en charge d’exploitation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Typologie',
            stepTheme: 'Perdus vs récupérables',
            stepTitle: 'Classer les emballages perdus et les emballages récupérables',
            paragraphText:
              'La comptabilité SYSCOHADA distingue soigneusement le traitement d’un emballage selon sa durée d’usage et son identification.\n' +
              '• **Emballages perdus (6081 / 3351)** : livrés définitivement avec le produit (cartons, boîtes, sachets) ; ils ne sont pas restitués.\n' +
              '• **Emballages récupérables identifiables (243)** : numérotés ou immatriculés individuellement (conteneurs, cuves, bouteilles de gaz numérotées) et conservés > 1 an → immobilisations corporelles.\n' +
              '• **Emballages récupérables non identifiables (6082 / 3352)** : fongibles et non numérotés (casiers en plastique, bouteilles consignées, palettes) → achats d’emballages stockés.',
            keyRule:
              'Un emballage récupérable identifiable va en classe 2 (243 Immobilisation) ; un emballage récupérable non identifiable ou perdu va en 608 (Achats d’emballages).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Une brasserie achète 5 000 casiers en plastique standard (non numérotés individuellement) destinés à être consignés puis repris auprès des distributeurs. Dans quel compte enregistre-t-elle cet achat ?',
              options: [
                '601 Achats de marchandises',
                '6082 Achats d’emballages récupérables non identifiables',
                '4194 Clients, emballages consignés',
                '7074 Bonis sur reprises d’emballages',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les casiers en plastique non numérotés individuellement sont des emballages récupérables non identifiables (compte 6082, suivi en stock 3352).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Consignation',
            stepTheme: 'Écriture de consignation',
            stepTitle: 'Comptabiliser la consignation d’emballages sur la facture de Doit',
            paragraphText:
              'Consigner un emballage signifie que le fournisseur demande au client une somme d’argent en garantie jusqu’au retour du matériel.\n' +
              '• **Chez le vendeur (fournisseur)** : la somme reçue en garantie devra être remboursée au retour des casiers ; c’est donc une dette conditionnelle portée au Crédit du `4194 Clients, dettes pour emballages et matériels consignés` (inclus dans le Débit du `411 Client`).\n' +
              '• **Chez l’acheteur (client)** : c’est une créance conditionnelle portée au Débit du `4094 Fournisseurs, créances pour emballages et matériels à rendre` (inclus dans le Crédit du `401 Fournisseur`).\n' +
              '• **Exemple** : 4 000 casiers consignés à 1 000 F = 4 000 000 F ajoutés en bas de facture sans TVA.',
            konanTip:
              'Retiens le « 9 » en 3e position qui inverse le sens du tiers : 4094 est un compte à solde DÉBITEUR (créance sur le fournisseur), et 4194 est un compte à solde CRÉDITEUR (dette envers le client) !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Lors d’une livraison, SOLIBRA consigne 4 000 casiers à 1 000 F l’unité (4 000 000 F) à son client G&B Sarl. Comment G&B Sarl enregistre-t-il cette consignation ?',
              options: [
                'Débit 6082 (4 000 000) / Crédit 401 (4 000 000)',
                'Débit 4094 Fournisseurs, emballages à rendre (4 000 000) / Crédit 401 (4 000 000)',
                'Débit 401 (4 000 000) / Crédit 4194 (4 000 000)',
                'Débit 4452 TVA (720 000) et Débit 4094 (4 000 000)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour l’acheteur G&B Sarl, la consignation est une créance de restitution d’emballages sur le fournisseur : Débit 4094 (4 000 000) et intégration dans la dette globale Crédit 401.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Déconsignation',
            stepTheme: 'Reprise au prix normal',
            stepTitle: 'Enregistrer une restitution au prix de consignation exact',
            paragraphText:
              'Lorsque le client restitue les emballages en parfait état dans les délais convenus, le fournisseur les reprend au prix exact de consignation et émet une facture d’Avoir.\n' +
              '• **Chez le vendeur** : on annule la dette conditionnelle et on réduit la créance client → Débit `4194` / Crédit `411 Client`.\n' +
              '• **Chez l’acheteur** : on réduit la dette fournisseur et on annule la créance sur emballages → Débit `401 Fournisseur` / Crédit `4094`.\n' +
              '• **Exemple** : restitution de 2 000 casiers consignés à 1 000 F → Débit 401 (2 000 000) / Crédit 4094 (2 000 000) chez l’acheteur.',
            keyRule:
              'Une déconsignation au prix exact de consignation est une simple opération de contrepassation sans aucun impact sur le résultat (ni charge, ni produit).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Un client retourne en bon état 500 palettes consignées à 2 000 F pièce (1 000 000 F), reprises au même prix de 2 000 F. Quelle écriture passe le fournisseur à la réception ?',
              options: [
                'Débit 411 Client 1 000 000 / Crédit 7074 Bonis 1 000 000',
                'Débit 4194 Clients, emballages consignés 1 000 000 / Crédit 411 Client 1 000 000',
                'Débit 6082 Emballages 1 000 000 / Crédit 411 Client 1 000 000',
                'Débit 4194 (1 000 000) / Crédit 701 Ventes (1 000 000)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le fournisseur éteint sa dette de consignation (Débit 4194) et diminue d’autant la créance sur son client (Crédit 411) pour 1 000 000 F.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Mali & Boni',
            stepTheme: 'Reprise à prix inférieur',
            stepTitle: 'Comptabiliser le mali (client) et le boni (fournisseur) sur déconsignation',
            paragraphText:
              'Souvent, pour couvrir l’usure ou un retard de restitution, le fournisseur reprend les emballages à un prix inférieur au prix de consignation.\n' +
              '• **Chez le client (mali = perte)** : la différence entre le prix de consignation et le prix repris est une charge enregistrée au Débit du `6224 Malis sur emballages` (ou `6599` selon le plan retenu).\n' +
              '• **Chez le fournisseur (boni = gain)** : cette même différence retenue constitue un produit accessoire enregistré au Crédit du `7074 Bonis sur reprises et cessions d’emballages` (soumis à TVA si applicable sur la prestation de location/boni).\n' +
              '• **Exemple** : 1 000 casiers consignés à 900 F (900 000 F) repris à 800 F (800 000 F) → Mali/Boni = 100 000 F.',
            formula: {
              name: 'Différence de déconsignation',
              formula: '\\text{Diff\\acute{e}rence} = \\text{Prix consign\\acute{e}} - \\text{Prix repris} \\;\\;\\Rightarrow\\;\\; \\text{6224 (Client)} \\;/\\; \\text{7074 (Fournisseur)}',
              note: 'Chez le client, Débit 401 (reprise) + Débit 6224 (mali) = Crédit 4094 (consignation).',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Des casiers consignés pour 900 000 F sont repris par le fournisseur pour 800 000 F seulement. Comment le client comptabilise-t-il l’écart de 100 000 F ?',
              options: [
                'Au Crédit du compte 7074 Bonis sur emballages',
                'Au Débit du compte 6224 Malis sur emballages (charge)',
                'Au Crédit du compte 4094 sans autre compte',
                'En augmentation du compte 601 Achats de marchandises',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le client récupère 100 000 F de moins que sa caution versée : il subit une perte (mali) portée au Débit du 6224 Malis sur emballages.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Non-retour',
            stepTheme: 'Emballages détruits ou conservés',
            stepTitle: 'Traiter les emballages consignés détruits ou définitivement conservés',
            paragraphText:
              'Que se passe-t-il si le client casse des casiers ou décide de ne jamais les rendre ? La consignation se transforme alors en cession ferme !\n' +
              '• **Chez le client (destruction / perte)** : les casiers détruits ne peuvent plus être rendus ; on solde `4094` (Crédit) en constatant une charge en `6224` ou `6599` (ou en `6082` si le client décide de les conserver comme emballages utiles).\n' +
              '• **Chez le fournisseur (non-restitution)** : la consignation devient une vente d’emballages (`4194` débité, `7074` crédité pour le HT et `4431` pour la TVA exigible sur cession).',
            keyRule:
              'Dès que l’emballage consigné n’est pas restitué, la somme consignée passe de simple caution hors TVA à une véritable vente (fournisseur) / perte ou achat (client).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Un détaillant casse accidentellement 40 casiers consignés à 1 000 F pièce (40 000 F TTC) qu’il ne pourra donc pas restituer à son fournisseur. Comment régularise-t-il son compte 4094 ?',
              options: [
                'Débit 4094 (40 000) / Crédit 401 (40 000)',
                'Débit 6224 / 6599 Charges sur emballages détruits (40 000) / Crédit 4094 (40 000)',
                'Débit 521 Banque (40 000) / Crédit 4094 (40 000)',
                'Il laisse les 40 000 F indéfiniment en 4094',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La créance de restitution en 4094 devient irrécouvrable suite à la casse : on solde 4094 au Crédit par le Débit d’une charge (6224/6599) de 40 000 F.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'Calcul complet de facture',
            stepTitle: 'Intégrer la consignation d’emballages dans une facture complète',
            paragraphText:
              'Vérifions l’emplacement exact des emballages consignés sur une facture comportant tous les éléments.\n' +
              '• **Données** : Marchandises Net Commercial = 2 800 000 F, Escompte 2 % = 56 000 F → Net Financier = 2 744 000 F ; TVA 18 % = 493 920 F ; Port avancé (débours) = 300 000 F ; Consignation 1 000 casiers × 900 F = 900 000 F.\n' +
              '• **Calcul du Net à Payer** : $2\,744\,000 + 493\,920 + 300\,000 + 900\,000 = 4\,437\,920$ F.\n' +
              '• **Imputation chez l’acheteur** : 601 (2 800 000), 6015 (300 000), 4452 (493 920), 4094 (900 000) au Débit ; 773 (56 000) et 401 (4 437 920) au Crédit.',
            konanTip:
              'Additionne toujours les colonnes de ton écriture : Débit (2 800 000 + 300 000 + 493 920 + 900 000 = 4 493 920) = Crédit (56 000 + 4 437 920 = 4 493 920) !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Dans l’exemple ci-dessus (NF = 2 744 000 F, TVA = 493 920 F, port débours = 300 000 F, consignation = 900 000 F), pourquoi la TVA de 493 920 F n’inclut-elle pas les 900 000 F d’emballages ?',
              options: [
                'Parce que les casiers consignés sont prêtés et restent la propriété du fournisseur (pas une vente)',
                'Parce que les emballages sont taxés à 50 %',
                'Parce que le client a payé un acompte',
                'Par erreur de calcul du fournisseur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La consignation étant une simple garantie remboursable et non une vente définitive, elle n’est pas soumise à la TVA et s’ajoute après la TVA.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch4_p2',
        order: 2,
        title: 'Effets de commerce : Lettre de change, Billet à ordre et création',
        summary:
          'Distinguer lettre de change et billet à ordre, identifier les intervenants (tireur, tiré, bénéficiaire, domiciliataire) et comptabiliser la création, l’acceptation et l’endossement.',
        conceptExplanation:
          'Un effet de commerce est un titre négociable constatant au profit du porteur une créance de somme d’argent exigible à une date déterminée (l’échéance).\n\n' +
          'Les deux principaux effets sont : 1) La Lettre de change (ou traite), écrit par lequel le fournisseur (tireur) donne l’ordre à son client (tiré) de payer une somme à l’échéance à un bénéficiaire (souvent le tireur lui-même) ; 2) Le Billet à ordre, écrit par lequel le client (souscripteur) s’engage lui-même à payer son fournisseur (bénéficiaire).\n\n' +
          'À la création (après acceptation par le tiré), la créance ordinaire (411) est transférée en « 412 Clients, effets à recevoir » chez le fournisseur, et la dette ordinaire (401) devient « 402 Fournisseurs, effets à payer » chez le client.',
        formulas: [
          {
            name: 'Transfert comptable à la création d’un effet',
            formula: '\\text{Fournisseur : } 411 \\longrightarrow 412 \\text{ (Effets à recevoir)} \\quad | \\quad \\text{Client : } 401 \\longrightarrow 402 \\text{ (Effets à payer)}',
            note: 'Dans certains plans d’entreprise, on rencontre également 403/413 pour les effets à payer/recevoir d’exploitation.',
          },
        ],
        keyRule:
          'La création d’un effet de commerce ne change pas le montant dû ni ne constate de produit/charge : elle remplace simplement une créance/dette ordinaire (411/401) par une créance/dette mobilisable (412/402).',
        workedExample: {
          title: 'Tirage et acceptation d’une Lettre de change — Cas BROU / Kouamé',
          statement:
            'Le 05/12/N, BROU vend à Kouamé des marchandises pour 600 000 F HT (+ TVA 18 % = 108 000 F, soit 708 000 F TTC). Le 07/12/N, BROU tire sur Kouamé la lettre de change LC n°104 de 708 000 F, échéance 03/01/N+1, domiciliée à la SGCI. Kouamé l’accepte le jour même. Passer l’écriture du 07/12/N chez BROU et chez Kouamé.',
          methodSteps: [
            '1) Chez BROU (tireur / bénéficiaire) : Débit 412 Clients, effets à recevoir (LC n°104) : 708 000 F / Crédit 411 Client Kouamé : 708 000 F.',
            '2) Chez Kouamé (tiré) : Débit 401 Fournisseur BROU : 708 000 F / Crédit 402 Fournisseurs, effets à payer (LC n°104) : 708 000 F.',
            '3) Contrôle : le compte 411 Kouamé chez BROU (et 401 BROU chez Kouamé) est soldé et remplacé par l’engagement cambiaire en 412 / 402.',
          ],
          conclusion:
            'Grâce à cette acceptation, BROU dispose désormais d’un titre négociable qu’il peut conserver jusqu’au 03/01/N+1, endosser ou escompter à sa banque.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Fonctions des effets',
            stepTitle: 'Comprendre les trois fonctions économiques d’un effet de commerce',
            paragraphText:
              'Pourquoi les entreprises préfèrent-elles souvent une lettre de change à une simple facture à crédit ?\n' +
              '• **Instrument de paiement** : l’effet précise la banque domiciliataire où le règlement sera prélevé automatiquement à l’échéance.\n' +
              '• **Instrument de garantie juridique (droit cambiaire)** : la signature d’acceptation du tiré rend la dette rigoureusement exigible à date fixe avec recours rapides en cas d’impayé.\n' +
              '• **Instrument de crédit (mobilisation)** : le fournisseur peut vendre (escompter) la traite à sa banque avant l’échéance pour obtenir du cash immédiat, ou l’endosser pour payer son propre fournisseur.',
            keyRule:
              'Un effet de commerce transforme un simple crédit commercial immobilisé en un titre financier liquide et négociable.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quel avantage majeur offre une lettre de change acceptée par rapport à une simple facture à crédit à 60 jours ?',
              options: [
                'Elle supprime la TVA de 18 %',
                'Elle permet au fournisseur de mobiliser sa créance avant l’échéance (escompte bancaire ou endossement)',
                'Elle dispense le client de payer à l’échéance',
                'Elle annule les remises commerciales',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’effet de commerce est négociable : il permet au bénéficiaire d’obtenir des liquidités immédiatement via l’escompte bancaire ou de régler un tiers par endossement.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'LC vs BO',
            stepTheme: 'Acteurs de l’effet',
            stepTitle: 'Distinguer la Lettre de change du Billet à ordre et leurs acteurs',
            paragraphText:
              'Bien que leur traitement comptable soit identique (412 / 402), la lettre de change et le billet à ordre diffèrent par la personne qui rédige le document.\n' +
              '• **Lettre de change (traite)** : rédigée à l’initiative du créancier (le **tireur**), qui ordonne au débiteur (le **tiré**) de payer à une échéance au **bénéficiaire** (souvent le tireur lui-même).\n' +
              '• **Billet à ordre** : rédigé à l’initiative du débiteur (le **souscripteur**), qui s’engage fermement à payer son créancier (le **bénéficiaire**).\n' +
              '• **Domiciliation et aval** : le **domiciliataire** est la banque du tiré chargée de payer ; l’**aval** est la garantie apportée par un tiers (banque ou dirigeant) qui se porte caution.',
            konanTip:
              'Moyen mnémotechnique : le tirEUR écrit la traite (c’est le vendeur) ; le tirÉ doit payer (c’est le client). Dans le Billet à ordre, le client « souscrit » sa propre promesse de payer.',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Dans une lettre de change tirée par la société SOLIBRA sur son client DASI et domiciliée à la SGCI, qui est le « tiré » ?',
              options: [
                'La société SOLIBRA',
                'Le client DASI qui doit payer à l’échéance',
                'La banque SGCI',
                'L’administration fiscale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le tireur est SOLIBRA (créancier qui émet l’ordre), le tiré est DASI (client débiteur qui accepte de payer) et la SGCI est le domiciliataire (banque payeuse).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Cycle de vie',
            stepTheme: 'Parcours d’un effet',
            stepTitle: 'Visualiser le cycle de vie complet d’une lettre de change',
            paragraphText:
              'Entre son émission et son dénouement, un effet de commerce peut suivre trois voies différentes selon les besoins de trésorerie du porteur.\n' +
              '• **1. Création & Acceptation** : transfert en `412 Effets à recevoir` / `402 Effets à payer`.\n' +
              '• **2. Utilisation avant ou à l’échéance** : le porteur peut soit attendre l’échéance et remettre à l’**encaissement** (`512` / `5113`), soit négocier à l’**escompte** avant terme (`415` / `5114`), soit **endosser** l’effet au profit d’un fournisseur.\n' +
              '• **3. Dénouement** : paiement normal à l’échéance, ou incident (impayé et renouvellement).',
            visualSchema: {
              type: 'flowchart',
              title: 'Cycle de vie d’une Lettre de change (de la création à l’échéance)',
              caption: 'Trois issues possibles pour le porteur entre la date d’acceptation et la date d’échéance.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Création & Acceptation', sublabel: 'Tireur : Débit 412 / Crédit 411 | Tiré : Débit 401 / Crédit 402', kind: 'start', color: 'blue' },
                  { label: '2. Choix du porteur', sublabel: 'Selon le besoin de trésorerie', kind: 'decision', color: 'violet', branchLabel: 'Paiement fournisseur →', branchTarget: 'Endossement (Débit 401 / Crédit 412)' },
                  { label: '3A. Remise à l’encaissement (à l’échéance)', sublabel: 'Débit 512 / Crédit 412 puis Crédit 521 net de commission', kind: 'process', color: 'green' },
                  { label: '3B. Remise à l’escompte (avant échéance)', sublabel: 'Crédit immédiat en 521 net d’agios (escompte + comm. + TOB)', kind: 'process', color: 'orange' },
                  { label: '4. Dénouement ou Incident', sublabel: 'Payée à l’échéance OU Impayée → Annulation & Renouvellement', kind: 'end', color: 'slate' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'À la réception de la lettre de change acceptée par le client, quel compte est débité chez le fournisseur ?',
              options: [
                '521 Banques',
                '412 Clients, effets à recevoir',
                '402 Fournisseurs, effets à payer',
                '675 Escompte des effets de commerce',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tant que l’effet est en portefeuille dans l’entreprise, la créance est enregistrée au Débit du compte 412 Clients, effets à recevoir (par le Crédit de 411).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Création',
            stepTheme: 'Écritures de tirage',
            stepTitle: 'Comptabiliser la création et l’acceptation chez les deux parties',
            paragraphText:
              'La comptabilisation de la création n’intervient en principe qu’après l’accord du tiré (acceptation de la traite ou remise du billet à ordre).\n' +
              '• **Chez le tireur (fournisseur)** : Débit `412 Clients, effets à recevoir` / Crédit `411 Client` pour le montant nominal (TTC de la facture ou solde dû).\n' +
              '• **Chez le tiré (client)** : Débit `401 Fournisseur` / Crédit `402 Fournisseurs, effets à payer` (ou `403` selon plan comptable interne).\n' +
              '• **À l’échéance chez le tiré** : lorsque la banque paie la traite domiciliée, le tiré passe Débit `402` / Crédit `521 Banque`.',
            keyRule:
              'Chez le client (tiré), que le fournisseur conserve la traite, l’endosse ou l’escompte ne change RIEN : sa dette reste en 402 jusqu’au jour de l’échéance où elle est soldée par 521 !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'G&B Sarl accepte la lettre de change n°234 de 1 500 000 F tirée sur elle par son fournisseur SCOMCI. Quelle écriture passe G&B Sarl ?',
              options: [
                'Débit 412 Effets à recevoir 1 500 000 / Crédit 411 (1 500 000)',
                'Débit 401 SCOMCI 1 500 000 / Crédit 402 (ou 403) Effets à payer 1 500 000',
                'Débit 521 Banque 1 500 000 / Crédit 401 SCOMCI 1 500 000',
                'Débit 402 Effets à payer 1 500 000 / Crédit 521 Banque 1 500 000',
              ],
              correctAnswerIndex: 1,
              explanation:
                'G&B Sarl est le client (tiré) : sa dette fournisseur ordinaire 401 disparaît (Débit 401) pour être remplacée par un effet à payer (Crédit 402/403).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Endossement',
            stepTheme: 'Circulation d’un effet',
            stepTitle: 'Utiliser un effet en portefeuille pour régler un fournisseur (endossement)',
            paragraphText:
              'Au lieu d’attendre l’échéance, le porteur d’un effet (appelé l’endosseur) peut transmettre la propriété de cet effet à l’un de ses propres fournisseurs (l’endossataire) en signant au dos : c’est l’endossement.\n' +
              '• **Chez l’endosseur (qui paie avec la traite)** : sa dette fournisseur s’éteint (Débit `401 Fournisseur`) et l’effet sort de son portefeuille (Crédit `412 Effets à recevoir`).\n' +
              '• **Chez le bénéficiaire final (endossataire)** : il reçoit l’effet en portefeuille (Débit `412`) et solde la créance sur son client (Crédit `411`).',
            konanTip:
              'En cas d’endossement, l’effet passe directement du Crédit 412 de l’endosseur au Débit 412 de son fournisseur — sans toucher la banque 521 !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'L’entreprise KONE détient une traite de 900 000 F sur un client et l’endosse à l’ordre de son fournisseur DIABY pour régler une dette de 900 000 F. Quelle écriture passe KONE ?',
              options: [
                'Débit 412 Effets à recevoir 900 000 / Crédit 521 Banque 900 000',
                'Débit 401 Fournisseur Diaby 900 000 / Crédit 412 Effets à recevoir 900 000',
                'Débit 521 Banque 900 000 / Crédit 412 Effets à recevoir 900 000',
                'Débit 402 Effets à payer 900 000 / Crédit 401 Diaby 900 000',
              ],
              correctAnswerIndex: 1,
              explanation:
                'KONE règle son fournisseur Diaby (Débit 401) en lui cédant la traite qu’elle détenait en portefeuille (Crédit 412).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Acompte sur effet ou solde',
            stepTitle: 'Calculer le montant exact d’un effet lorsque existe un acompte ou un avoir',
            paragraphText:
              'Un piège fréquent dans les journaux d’examen consiste à tirer une lettre de change pour le montant brut de la facture en oubliant un acompte antérieur ou une facture d’avoir.\n' +
              '• **Règle de bon sens** : le montant nominal d’une traite correspond toujours au **solde net restant dû** par le client au moment du tirage.\n' +
              '• **Exemple** : facture DASI = 4 437 920 F après acompte imputé de 500 000 F (total 4 937 920 F) ; si un avoir de 110 000 F intervient avant le tirage, la traite est établie pour le solde net restant dû uniquement.',
            keyRule:
              'Vérifie toujours le solde exact du compte 411 (ou 401) avant de fixer le nominal de la lettre de change : le tirage doit solder le compte ordinaire !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Un client doit 1 200 000 F suite à une facture de Doit, mais reçoit le lendemain un avoir de 150 000 F pour retour de marchandises. Pour quel montant le fournisseur tire-t-il la lettre de change pour solde ?',
              options: [
                '1 200 000 F',
                '1 350 000 F',
                '1 050 000 F',
                '150 000 F',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le solde restant dû par le client après l’avoir est 1 200 000 − 150 000 = 1 050 000 F : c’est exactement le montant de la lettre de change à tirer.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_entd_l1_compta_generale_ch4_p3',
        order: 3,
        title: 'Encaissement, escompte bancaire (agios) et renouvellement d’effet impayé',
        summary:
          'Enregistrer la remise à l’encaissement et la négociation à l’escompte avec calcul des agios (escompte commercial, commissions, TOB/TVA), gérer un impayé et calculer la nouvelle traite de renouvellement.',
        conceptExplanation:
          'À l’approche de l’échéance, le porteur remet l’effet à sa banque pour encaissement (compte intermédiaire `512 Effets à l’encaissement`) : la banque crédite le compte `521` du nominal diminué d’une simple commission d’encaissement (`6312` + TVA/TOB).\n\n' +
          'Si le porteur a besoin de liquidités AVANT l’échéance, il négocie (escompte) l’effet à sa banque (`415 Clients, effets escomptés non échus` ou `5114` en remise puis `521` / `565 Escompte de crédits ordinaires` + `675 Escompte des effets de commerce`). La banque retient des agios composés de l’escompte commercial ($e = V \\times t \\times n / 36\,000$), de commissions bancaires (`6312`) et de la TOB/TVA sur services bancaires.\n\n' +
          'Si le client prévient qu’il ne pourra payer à l’échéance (ou si l’effet revient impayé), le fournisseur annule l’ancienne traite (reconstitution en `411`), récupère les frais bancaires et tire une nouvelle traite majorée des intérêts de retard ($I = V \\times t \\times n / 36\,000$), du timbre fiscal et des frais de correspondance.',
        formulas: [
          {
            name: 'Agios bancaires à l’escompte d’un effet',
            formula: '\\text{Escompte} = \\frac{V_n \\times t \\times n}{36\,000} \\quad ; \\quad \\text{Agios TTC} = \\text{Escompte} + \\text{Commissions} + \\text{TOB / TVA}',
            note: 'Net porté en banque = Valeur nominale (Vn) − Agios TTC (n = jours restant jusqu’à l’échéance).',
          },
          {
            name: 'Nominal d’une traite de renouvellement',
            formula: 'V_{\\text{nouv}} = V_{\\text{anc}} + \\text{Int\\acute{e}r\\^ets de retard} + \\text{Timbre} + \\text{Frais de correspondance / impay\\acute{e}}',
            note: 'Intérêts de retard = V_anc × taux × jours de prorogation / 36 000.',
          },
        ],
        keyRule:
          'Remise à l’encaissement = attente de l’échéance, simple commission de service (6312). Remise à l’escompte = avance de trésorerie avant l’échéance, agios incluant intérêts financiers (675/6732) + commissions (6312).',
        workedExample: {
          title: 'Impayé anticipé et renouvellement de traite — Cas BROU / Kouamé',
          statement:
            'Kouamé informe BROU qu’il ne pourra honorer la LC n°104 de 708 000 F échéant le 03/01/N+1 et sollicite un report de 60 jours au 03/03/N+1. BROU accepte moyennant 12 % d’intérêts l’an, 200 F de timbre fiscal et 100 F de frais de correspondance. Calculer la nouvelle LC n°106 puis l’avis de crédit si NSIA BANQUE l’escompte pour 700 000 F net.',
          methodSteps: [
            '1) Annulation de la LC n°104 : Débit 411 Kouamé 708 000 / Crédit 412 Effets à recevoir 708 000.',
            '2) Intérêts de retard = 708 000 × 12 % × (60 / 360) = 14 160 F.',
            '3) Nominal nouvelle LC n°106 = 708 000 + 14 160 + 200 + 100 = 722 460 F.',
            '4) Création LC n°106 : Débit 412 (722 460) / Crédit 411 (708 000), 771/763 Intérêts (14 160), 646/6354 Timbre (200), 628/6232 Correspondance (100).',
            '5) Escompte NSIA BANQUE : Débit 521 Banque (700 000) + Débit 675/6732 Escompte & frais (22 460) / Crédit 5114/415 (722 460).',
          ],
          conclusion:
            'Le renouvellement permet au fournisseur de récupérer intégralement le principal majoré des intérêts de prorogation et frais engagés, puis de mobiliser immédiatement la nouvelle traite à la banque.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Encaissement',
            stepTheme: 'Remise à l’échéance',
            stepTitle: 'Enregistrer une remise à l’encaissement en deux temps',
            paragraphText:
              'Quelques jours avant l’échéance, le fournisseur dépose l’effet à sa banque uniquement pour qu’elle en perçoive le montant à la date prévue.\n' +
              '• **Étape 1 (Dépôt du bordereau à la banque)** : l’effet sort du portefeuille de l’entreprise pour transiter par un compte d’attente → Débit `512 Effets à l’encaissement` / Crédit `412 Effets à recevoir`.\n' +
              '• **Étape 2 (Réception de l’avis de crédit après l’échéance)** : la banque verse le net et prélève une commission bancaire → Débit `521 Banque` (net) + Débit `6312 Frais sur effets` (+ `4454` TVA/TOB si applicable) / Crédit `512 Effets à l’encaissement` (nominal).',
            keyRule:
              'À l’encaissement simple (à l’échéance), il n’y a PAS d’intérêt d’escompte (675), uniquement une commission de service bancaire (6312).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Une entreprise remet une traite de 1 000 000 F à l’encaissement à son échéance. La banque lui envoie un avis de crédit net de 995 000 F (commission 5 000 F). Quel compte de charges enregistre les 5 000 F ?',
              options: [
                '675 Escompte des effets de commerce',
                '6312 Frais sur effets (services bancaires)',
                '601 Achats de marchandises',
                '773 Escomptes obtenus',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Il s’agit d’une simple remise à l’encaissement à l’échéance (sans avance de fonds) : les frais retenus par la banque sont des services bancaires (6312 Frais sur effets).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Escompte & Agios',
            stepTheme: 'Calcul des agios',
            stepTitle: 'Calculer l’escompte commercial, les commissions et le net négocié',
            paragraphText:
              'Lorsque l’entreprise a besoin de trésorerie 30, 45 ou 60 jours avant l’échéance, elle négocie la traite auprès de sa banque : cette opération s’appelle l’escompte d’effet.\n' +
              '• **Escompte bancaire (intérêt financier)** : $e = \\frac{V_n \\times t \\times n}{36\,000}$ où $V_n$ est le nominal, $t$ le taux annuel en % et $n$ le nombre exact de jours séparant la date de négociation de la date d’échéance.\n' +
              '• **Agios totaux** : $\\text{Agios} = \\text{Escompte} + \\text{Commissions bancaires} + \\text{TOB / TVA sur services}$.\n' +
              '• **Exemple** : effet de 1 200 000 F négocié 45 jours avant échéance à 10 % + 6 000 F de frais = escompte $15\,000$ F + $6\,000$ F = $21\,000$ F d’agios → Net = 1 179 000 F.',
            formula: {
              name: 'Escompte bancaire et Net de négociation',
              formula: 'e = \\frac{V_n \\times t \\times n}{36\,000} \\quad ; \\quad \\text{Net en banque} = V_n - \\text{Agios}',
              note: 'En année commerciale OHADA, le dénominateur est 36 000 (soit 360 jours × 100).',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Une traite de 1 800 000 F est remise à l’escompte 60 jours avant son échéance au taux de 9 % l’an, avec 5 000 F de commissions fixes (sans taxe). Quel est le montant net crédité en banque ?',
              options: [
                '1 773 000 F',
                '1 768 000 F',
                '1 795 000 F',
                '1 638 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Escompte = (1 800 000 × 9 × 60) / 36 000 = 27 000 F. Agios totaux = 27 000 + 5 000 = 32 000 F. Net porté en banque = 1 800 000 − 32 000 = 1 768 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Négociation',
            stepTheme: 'Comptabilisation de l’escompte',
            stepTitle: 'Comptabiliser la remise à l’escompte et la réception de l’avis de crédit',
            paragraphText:
              'Dans le SYSCOHADA révisé, l’effet escompté reste juridiquement sous la garantie de l’entreprise jusqu’à son paiement final par le tiré à l’échéance.\n' +
              '• **Lors de la remise à l’escompte** : on transfère `412` vers `415 Clients, effets escomptés non échus` (ou compte d’attente de négociation `5114`).\n' +
              '• **Lors de l’avis de crédit bancaire** : Débit `521 Banque` (net reçu), Débit `675 Escompte des effets de commerce` (intérêts), Débit `6312` (commissions éventuelles) / Crédit `565 Escompte de crédits ordinaires` (ou `5114`).\n' +
              '• **À l’échéance (bonne fin)** : si le client paie normalement, on solde `565` par `415`.',
            konanTip:
              'Dans de nombreux sujets synthétiques, lorsque les frais ne sont pas dissociés entre intérêts et commissions, l’écart global ($V_n - \\text{Net en banque}$) est débité en charges financières (`675` / `6732`).',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Lorsqu’une banque escompte une traite de 722 460 F et crédite le compte de l’entreprise de 700 000 F net, que représente l’écart de 22 460 F ?',
              options: [
                'Un produit financier au Crédit du 773',
                'Une charge financière / agios bancaires enregistrée au Débit (675 / 6732)',
                'Une augmentation de la créance client en 411',
                'Une dette fournisseur en 401',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La différence de 22 460 F retenue par la banque correspond au coût du crédit d’escompte (agios), comptabilisé en charge financière au Débit.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Impayé',
            stepTheme: 'Incident à l’échéance',
            stepTitle: 'Gérer un effet impayé et imputer les frais bancaires au client',
            paragraphText:
              'Lorsque la banque présente l’effet à l’échéance et que le compte du tiré n’est pas approvisionné, l’effet revient impayé.\n' +
              '• **1. Frais d’impayé débités par la banque** : la banque adresse un avis de débit prélevant des frais de retour/intérêts sur le compte `521` du tireur (Crédit `521 Banque` / Débit `6312` ou `4162` selon l’imputation).\n' +
              '• **2. Reconstitution de la créance client** : le titre cambiaire ayant échoué, on annule l’effet (`412` ou `512` / `565`) pour réinscrire l’intégralité de la créance (principal + frais d’impayé récupérés) au Débit du compte `411 Client` (ou `4162 Créances douteuses/impayées`).',
            keyRule:
              'Les frais d’impayé prélevés par la banque diminuent la trésorerie (Crédit 521) et sont finalement répercutés au Débit du client défaillant !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Un effet revient impayé à l’échéance et la banque prélève 6 000 F de frais sur le compte bancaire de l’entreprise (avis de débit). Quel compte est crédité lors du prélèvement bancaire ?',
              options: [
                '411 Clients',
                '521 Banque (sortie de trésorerie)',
                '771 Intérêts reçus',
                '402 Effets à payer',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’avis de débit bancaire diminue les avoirs en banque de 6 000 F : le compte 521 Banque est donc crédité de 6 000 F.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Renouvellement',
            stepTheme: 'Prorogation d’échéance',
            stepTitle: 'Calculer les intérêts de retard et tirer une traite de renouvellement',
            paragraphText:
              'Si le client prévient AVANT l’échéance qu’il ne pourra payer à temps, le fournisseur peut accepter de proroger (repousser) l’échéance en échange d’une nouvelle traite.\n' +
              '• **Étape 1 (Annulation de l’ancien effet)** : si l’effet était en portefeuille, Débit `411 Client` / Crédit `412 Effets à recevoir` pour l’ancien nominal $V_{\\text{anc}}$.\n' +
              '• **Étape 2 (Calcul des frais de prorogation)** : Intérêts de retard = $\\frac{V_{\\text{anc}} \\times t \\times n}{36\,000}$, plus timbre fiscal et frais de correspondance.\n' +
              '• **Étape 3 (Émission de la nouvelle traite)** : Débit `412` (nouveau nominal) / Crédit `411` ($V_{\\text{anc}}$), Crédit `771` (intérêts), Crédit `646` (timbre récupéré), Crédit `628` (frais de correspondance).',
            formula: {
              name: 'Calcul de la nouvelle traite prorogée',
              formula: 'V_{\\text{nouv}} = V_{\\text{anc}} + \\frac{V_{\\text{anc}} \\times t \\times n}{36\,000} + \\text{Timbre} + \\text{Frais}',
              note: 'Exemple : 708 000 + 14 160 (60 j à 12 %) + 200 + 100 = 722 460 F.',
            },
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Une traite de 1 200 000 F est prorogée de 30 jours au taux de 12 % l’an, avec 500 F de timbre fiscal et 500 F de frais de correspondance. Quel est le montant de la nouvelle traite ?',
              options: [
                '1 212 000 F',
                '1 213 000 F',
                '1 201 000 F',
                '1 344 000 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Intérêts = (1 200 000 × 12 × 30) / 36 000 = 12 000 F. Nouveau nominal = 1 200 000 + 12 000 + 500 + 500 = 1 213 000 FCFA.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Journal complet',
            stepTheme: 'Séquence complète d’impayé',
            stepTitle: 'Suivre le journal complet du tirage, renouvellement et escompte (cas BROU)',
            paragraphText:
              'Le tableau récapitulatif ci-dessous retrace la séquence complète chez le fournisseur BROU : vente initiale TTC, tirage de LC n°104, annulation suite à l’impossibilité de payer de Kouamé, émission de la nouvelle traite LC n°106 majorée des intérêts de retard (14 160 F) et frais (300 F), puis remise à l’escompte à NSIA BANQUE.\n' +
              '• **Vérification des comptes** : `411 Kouamé` est intégralement soldé après l’émission de LC n°106, et `412 Effets à recevoir` est soldé lors de la remise à l’escompte.\n' +
              '• **Trésorerie finale** : BROU encaisse 700 000 F dès le 02/01/N+1.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Journal complet : Vente, Renouvellement d’effet et Escompte (en FCFA)',
              caption: 'Séquence chronologique chez le fournisseur BROU (client Kouamé, taux retard 12 % sur 60 jours).',
              tableData: {
                headers: ['Date', 'Compte Débit', 'Compte Crédit', 'Libellé de l’opération', 'Montant'],
                rows: [
                  ['05/12/N', '411 Kouamé', '701 (600k) / 4431 (108k)', 'Vente 600 000 HT + TVA 18 %', '708 000'],
                  ['07/12/N', '412 Effets à rec.', '411 Kouamé', 'Tirage & acceptation LC n°104', '708 000'],
                  ['21/12/N', '411 Kouamé', '412 Effets à rec.', 'Annulation LC n°104 (prorogation)', '708 000'],
                  ['22/12/N', '412 Effets à rec.', '411 (708k) / 771 (14 160) / 646-628 (300)', 'Nouvelle LC n°106 (+60 j à 12 %)', '722 460'],
                  ['30/12/N', '5114 Effets esc.', '412 Effets à rec.', 'Remise à l’escompte NSIA BANQUE', '722 460'],
                  ['02/01/N+1', '521 (700k) / 675 (22 460)', '5114 Effets esc.', 'Avis de crédit net + agios', '722 460'],
                ],
              },
            },
            konanTip:
              'Dans une séquence de renouvellement d’effet, vérifie toujours que le compte 411 et le compte 412 finissent soldés à zéro à la fin des opérations !',
            exercise: {
              id: 'lmd_entd_l1_compta_generale_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'D’après le journal ci-dessus, quel est l’impact net sur le résultat financier de BROU entre les intérêts facturés au client (14 160 F) et les agios prélevés par NSIA BANQUE (22 460 F) ?',
              options: [
                'Un gain financier net de +14 160 F',
                'Une charge financière nette de −8 300 F (14 160 − 22 460)',
                'Une charge financière nette de −22 460 F',
                'Un gain financier net de +36 620 F',
              ],
              correctAnswerIndex: 1,
              explanation:
                'BROU enregistre 14 160 F en produits financiers (intérêts de retard facturés à Kouamé) et 22 460 F en charges financières (escompte/agios bancaires), soit un solde net de 14 160 − 22 460 = −8 300 FCFA.',
            },
          },
        ],
      }),
    ],
  },
];
