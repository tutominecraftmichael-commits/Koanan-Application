/**
 * Comptabilité générale II (ENTD L1, semestre 2) — Chapitre 5 : les opérations de trésorerie.
 * Rédigé d'après le support de Comptabilité générale ENTD 1 (chap. 3, « Les opérations de trésorerie »)
 * et l'examen de session 1 (pièces de caisse, avis de débit / de crédit, chèques).
 * Erreurs du support corrigées : les chèques postaux sont le compte 531 (et non 513, qui est « Chèques à encaisser ») ;
 * un compte de chèques postaux ne peut pas devenir CRÉDITEUR (pas de découvert), le support écrivait « débiteur ».
 */
import type { CurriculumChapter, CurriculumPoint, StructuredLessonStep } from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

const ID = 'lmd_entd_l1_compta_generale_ch5';

export const COMPTA_TRESORERIE_ENTD_L1_CHAPTER: CurriculumChapter = {
  id: ID,
  subjectId: 'lmd_compta_generale',
  gradeLevel: 'lmd_entd_l1',
  order: 5,
  semesters: [2],
  title: 'Chapitre 5 : Opérations de trésorerie (Caisse, Banque, chèques, titres de placement, monnaie électronique)',
  summary:
    'Enregistrer les règlements de l’entreprise : compte 571 Caisse, compte 521 Banque (avis de débit et de crédit), chèques à encaisser et à l’encaissement, cartes bancaires, virements, titres de placement et monnaie électronique (Mobile Money).',
  officialVolumeHours: 8,
  contentVersion: 2,
  source: 'ENTD L1 — Comptabilité générale II',
  points: [
    // ------------------------------------------------------------------------
    // 5.1 LE COMPTE CAISSE
    // ------------------------------------------------------------------------
    makePoint({
      id: `${ID}_p1`,
      order: 1,
      title: 'Le compte 571 Caisse : entrées, sorties et solde toujours débiteur',
      summary: 'Fonctionnement du compte Caisse, tenue du compte, pièce de caisse et mouvements entre la caisse et la banque.',
      conceptExplanation:
        'Toutes les opérations commerciales finissent par un règlement : en espèces, par chèque, par virement ou par effet de commerce. Les comptes de trésorerie (classe 5) enregistrent ces mouvements de fonds.\n\n' +
        'Le compte **571 Caisse** enregistre les espèces : au **débit** les entrées (ventes au comptant, règlements de clients en espèces, retraits de la banque), au **crédit** les sorties (achats au comptant, règlements de fournisseurs, versements en banque, charges payées en espèces). On ne peut pas sortir plus d’espèces qu’il n’y en a : le solde de la caisse est **toujours débiteur** (ou nul).',
      keyRule: 'Caisse : débit = entrée d’espèces, crédit = sortie d’espèces ; un solde créditeur est impossible et signale une erreur.',
      formulas: [
        { name: 'Solde du compte Caisse', formula: '\\text{Solde} = \\text{Situation initiale} + \\sum \\text{entrées} - \\sum \\text{sorties} \\;\\geq\\; 0' },
      ],
      workedExample: {
        title: 'Tenir le compte Caisse du mois de février',
        statement:
          'Le 01/02/N, la caisse contient 675 000 F. Opérations : achat au comptant de marchandises 500 000 F ; vente au comptant 1 500 000 F ; salaires payés en espèces 1 300 000 F ; avance en espèces au fournisseur KOFFI 200 000 F ; règlement d’un fournisseur 100 000 F ; le client FOFANA règle 400 000 F en espèces ; dépôt en banque 300 000 F ; retrait en banque 3 000 000 F ; loyer payé en espèces 150 000 F. Quel est le solde au 28/02/N ?',
        methodSteps: [
          'Total des débits (entrées) : 675 000 + 1 500 000 + 400 000 + 3 000 000 = 5 575 000 F.',
          'Total des crédits (sorties) : 500 000 + 1 300 000 + 200 000 + 100 000 + 300 000 + 150 000 = 2 550 000 F.',
          'Solde : 5 575 000 − 2 550 000 = 3 025 000 F, solde débiteur.',
        ],
        conclusion: 'La caisse contient 3 025 000 F au 28/02/N. Le solde reste débiteur à chaque date : la tenue est cohérente.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Trésorerie',
          stepTheme: 'Règlements',
          stepTitle: 'Les opérations de trésorerie',
          paragraphText:
            'Une vente ou un achat crée une créance ou une dette ; le **règlement** l’éteint. Il se fait :\n' +
            '• en **espèces** (compte 571 Caisse) ;\n' +
            '• par **chèque** ou **virement** (compte 521 Banque, 531 Chèques postaux) ;\n' +
            '• par **effet de commerce** (lettre de change, billet à ordre, voir chapitre 4) ;\n' +
            '• par **monnaie électronique** (Orange Money, MTN MoMo, Wave…, compte 55).\n' +
            'Ces comptes de trésorerie sont tous dans la **classe 5** du plan SYSCOHADA.',
          keyRule: 'Classe 5 = trésorerie : tout ce qui est espèces, banque, chèques, titres de placement et monnaie électronique.',
          exercise: {
            id: `${ID}_p1_q1`,
            type: 'mcq',
            prompt: 'Dans le plan comptable SYSCOHADA, dans quelle classe se trouvent les comptes Caisse (571), Banque (521) et Chèques postaux (531) ?',
            options: ['Classe 4 : comptes de tiers', 'Classe 5 : comptes de trésorerie', 'Classe 6 : comptes de charges', 'Classe 2 : comptes d’immobilisations'],
            correctAnswerIndex: 1,
            explanation: 'Caisse, banque, chèques postaux, titres de placement et monnaie électronique sont des comptes de trésorerie : classe 5.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: '571 Caisse',
          stepTheme: 'Fonctionnement',
          stepTitle: 'Débit = entrées d’espèces, crédit = sorties',
          paragraphText:
            '• **Débit (entrées)** : ventes au comptant, règlements des clients en espèces, retraits d’espèces à la banque ou au CCP, autres recettes en espèces.\n' +
            '• **Crédit (sorties)** : achats au comptant, règlements aux fournisseurs, versements d’espèces à la banque, charges payées au comptant (eau, électricité, loyer, salaires).\n' +
            '• **Solde** : toujours **débiteur** (ou nul). On ne peut pas sortir de la caisse plus d’argent qu’elle n’en contient.',
          keyRule: 'Un compte Caisse créditeur est impossible : il révèle un oubli d’entrée ou une sortie enregistrée deux fois.',
          konanTip: 'À l’examen, si ton compte Caisse devient créditeur à une date, reprends tes écritures : c’est toujours une erreur.',
          exercise: {
            id: `${ID}_p1_q2`,
            type: 'mcq',
            prompt: 'En fin de mois, un étudiant obtient un solde CRÉDITEUR de 120 000 F pour le compte 571 Caisse. Que faut-il en conclure ?',
            options: [
              'La caisse a un découvert autorisé de 120 000 F',
              'L’entreprise doit 120 000 F à son caissier',
              'Il y a une erreur d’enregistrement : une caisse ne peut pas avoir un solde créditeur',
              'C’est normal si les ventes au comptant ont été faibles',
            ],
            correctAnswerIndex: 2,
            explanation: 'La caisse ne peut pas sortir plus d’espèces qu’elle n’en a reçu : son solde est toujours débiteur ou nul. Un solde créditeur signale une erreur.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Calcul',
          stepTheme: 'Tenue du compte',
          stepTitle: 'Calculer le solde de la caisse',
          paragraphText:
            'Méthode : partir de la situation initiale (au débit), ajouter toutes les entrées, retirer toutes les sorties.\n' +
            '• Exemple : situation initiale 675 000 F ; achat au comptant 500 000 F ; vente au comptant 1 500 000 F ; salaires payés en espèces 1 300 000 F.\n' +
            '• Débits : 675 000 + 1 500 000 = 2 175 000 F. Crédits : 500 000 + 1 300 000 = 1 800 000 F.\n' +
            '• Solde : 2 175 000 − 1 800 000 = **375 000 F**, débiteur.',
          formula: { name: 'Solde de caisse', formula: '\\text{Solde} = \\text{Total débit} - \\text{Total crédit}' },
          exercise: {
            id: `${ID}_p1_q3`,
            type: 'mcq',
            prompt:
              'La caisse contient 675 000 F au 01/02/N. Le 03/02 : achat au comptant de marchandises 500 000 F. Le 04/02 : vente au comptant 1 500 000 F. Le 05/02 : salaires payés en espèces 1 300 000 F. Quel est le solde de la caisse au 05/02/N ?',
            options: ['375 000 F débiteur', '1 675 000 F débiteur', '425 000 F créditeur', '2 175 000 F débiteur'],
            correctAnswerIndex: 0,
            explanation: 'Débits : 675 000 + 1 500 000 = 2 175 000 F. Crédits : 500 000 + 1 300 000 = 1 800 000 F. Solde : 2 175 000 − 1 800 000 = 375 000 F, débiteur.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Pièce de caisse',
          stepTheme: 'Dépense en espèces',
          stepTitle: 'Enregistrer une pièce de caisse « dépense »',
          paragraphText:
            'La **pièce de caisse** justifie une sortie d’espèces. Pour une charge avec TVA récupérable, on débite la charge (HT) et la TVA récupérable, et on crédite la caisse (TTC).\n' +
            '• Exemple (examen G2) : entretien de l’ordinateur, travaux 20 000 F + TVA 18 % 3 600 F = 23 600 F TTC payés en espèces.\n' +
            '• Écriture : **D 624** Entretien, réparations 20 000 ; **D 4454** État, TVA récupérable sur services 3 600 ; **C 571** Caisse 23 600.',
          keyRule: 'La caisse est créditée du montant TTC réellement sorti ; la charge est débitée HT, la TVA récupérable à part.',
          exercise: {
            id: `${ID}_p1_q4`,
            type: 'mcq',
            prompt:
              'Pièce de caisse « dépense » : entretien de l’ordinateur, travaux 20 000 F HT, TVA 18 % = 3 600 F, total payé en espèces 23 600 F. Quelle écriture passer ?',
            options: [
              'D 571 Caisse 23 600 / C 624 Entretien 20 000 / C 4454 TVA 3 600',
              'D 624 Entretien 20 000 / D 4454 TVA récupérable 3 600 / C 571 Caisse 23 600',
              'D 624 Entretien 23 600 / C 521 Banque 23 600',
              'D 601 Achats de marchandises 20 000 / D 4454 TVA 3 600 / C 571 Caisse 23 600',
            ],
            correctAnswerIndex: 1,
            explanation: 'C’est une charge d’entretien (624) payée en espèces : charge HT au débit, TVA récupérable sur services (4454) au débit, sortie de caisse TTC au crédit du 571.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Caisse ↔ Banque',
          stepTheme: 'Dépôt et retrait',
          stepTitle: 'Dépôt en banque et retrait : deux comptes de trésorerie',
          paragraphText:
            'Un dépôt ou un retrait ne change pas la trésorerie totale : l’argent passe d’un compte de classe 5 à un autre.\n' +
            '• **Dépôt d’espèces en banque** : **D 521** Banque / **C 571** Caisse.\n' +
            '• **Retrait d’espèces à la banque** : **D 571** Caisse / **C 521** Banque.\n' +
            '• Certaines entreprises passent par le compte **585 Virements de fonds** (une écriture par pièce : la pièce de caisse et l’avis de la banque), pour ne pas enregistrer deux fois le même mouvement.',
          keyRule: 'Aucune charge ni aucun produit dans un dépôt ou un retrait : seulement deux comptes de trésorerie.',
          konanTip: 'Piège classique : enregistrer le retrait comme une vente (C 701). Un retrait n’est jamais un produit !',
          exercise: {
            id: `${ID}_p1_q5`,
            type: 'mcq',
            prompt: 'Le 27/02/N, l’entreprise retire 3 000 000 F en espèces de son compte bancaire pour alimenter sa caisse. Quelle écriture passer ?',
            options: [
              'D 521 Banque / C 571 Caisse : 3 000 000',
              'D 571 Caisse / C 701 Ventes : 3 000 000',
              'D 571 Caisse / C 521 Banque : 3 000 000',
              'D 631 Frais bancaires / C 521 Banque : 3 000 000',
            ],
            correctAnswerIndex: 2,
            explanation: 'Le retrait fait entrer des espèces en caisse (débit 571) et diminue l’avoir en banque (crédit 521). Aucun produit ni charge n’apparaît.',
          },
        },
      ],
    }),

    // ------------------------------------------------------------------------
    // 5.2 LE COMPTE BANQUE
    // ------------------------------------------------------------------------
    makePoint({
      id: `${ID}_p2`,
      order: 2,
      title: 'Le compte 521 Banque : avis de débit, avis de crédit et chèques postaux',
      summary: 'Fonctionnement du compte Banque, sens des avis bancaires, frais bancaires, solde débiteur ou créditeur, compte 531 Chèques postaux.',
      conceptExplanation:
        'Le compte **521 Banque** enregistre l’argent déposé dans une banque. La banque informe l’entreprise de chaque mouvement : un **avis de crédit** signale une augmentation de l’avoir (virement reçu, emprunt obtenu, chèque encaissé), un **avis de débit** une diminution (frais, effets domiciliés payés, prélèvements).\n\n' +
        'Chez l’entreprise, une entrée de fonds se met au **débit** du 521, une sortie au **crédit**. Le solde est en général **débiteur** (avoir en banque, actif) ; il peut devenir **créditeur** en cas de découvert : c’est alors une dette envers la banque (trésorerie-passif). Les frais et commissions bancaires vont au compte **631 Frais bancaires**.',
      keyRule: 'Avis de crédit → débit 521 ; avis de débit → crédit 521. Solde débiteur = avoir en banque ; solde créditeur = dû à la banque.',
      workedExample: {
        title: 'Solde du compte Banque en mars',
        statement:
          'Le 01/03/N, l’avoir en banque est de 30 000 000 F. Avis de crédit pour un emprunt de 5 000 000 F ; virement reçu du client YAO 1 500 000 F ; ventes contre chèques 5 000 000 F. Sorties : chèque à BEDA 250 000 F ; frais d’escompte 18 000 F ; frais sur achat de titres 15 000 F ; effets domiciliés payés 500 000 F ; virement à ATSE 400 000 F ; frais de garde de titres 15 000 F ; retrait 2 000 000 F ; facture CIE 75 000 F ; achat de marchandises par chèque 600 000 F.',
        methodSteps: [
          'Débit : 30 000 000 + 5 000 000 + 1 500 000 + 5 000 000 = 41 500 000 F.',
          'Crédit : 250 000 + 18 000 + 15 000 + 500 000 + 400 000 + 15 000 + 2 000 000 + 75 000 + 600 000 = 3 873 000 F.',
          'Solde : 41 500 000 − 3 873 000 = 37 627 000 F, débiteur.',
        ],
        conclusion: 'L’entreprise dispose de 37 627 000 F en banque au 31/03/N.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Avis bancaires',
          stepTheme: 'Débit / Crédit',
          stepTitle: 'Avis de crédit et avis de débit',
          paragraphText:
            '• **Avis de crédit** : la banque informe que l’avoir de l’entreprise **augmente** (virement d’un client, emprunt versé, chèque encaissé, intérêts reçus). Chez l’entreprise : **débit 521**.\n' +
            '• **Avis de débit** : la banque informe que l’avoir **diminue** (frais, commissions, effets domiciliés payés, prélèvement d’une facture). Chez l’entreprise : **crédit 521**.\n' +
            '• Pourquoi ce sens « inversé » ? La banque parle de SES livres, où le compte du client est une dette ; l’entreprise, elle, voit son avoir comme un actif.',
          keyRule: 'Avis de débit de la banque = crédit du 521 chez l’entreprise, et inversement.',
          exercise: {
            id: `${ID}_p2_q1`,
            type: 'mcq',
            prompt: 'L’entreprise reçoit de sa banque un AVIS DE DÉBIT de 18 000 F pour frais d’escompte d’effets. Comment le compte 521 Banque est-il mouvementé chez l’entreprise ?',
            options: ['Débité de 18 000 F', 'Crédité de 18 000 F', 'Il n’est pas mouvementé', 'Débité de 36 000 F'],
            correctAnswerIndex: 1,
            explanation: 'Un avis de débit annonce une diminution de l’avoir en banque : chez l’entreprise, le 521 est crédité (et le 631 Frais bancaires débité).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Solde',
          stepTheme: 'Avoir ou découvert',
          stepTitle: 'Solde débiteur ou créditeur du compte Banque',
          paragraphText:
            '• **Débit** (entrées) : versements d’espèces, chèques remis à l’encaissement, virements reçus, effets encaissés, intérêts reçus, revente de titres de placement.\n' +
            '• **Crédit** (sorties) : retraits, chèques émis, virements émis, effets domiciliés payés, commissions, frais et intérêts à notre charge, achat de titres.\n' +
            '• **Solde débiteur** : avoir en banque (actif). **Solde créditeur** : découvert, l’entreprise **doit** de l’argent à la banque (trésorerie-passif).',
          keyRule: 'Contrairement à la caisse, la banque peut avoir un solde créditeur : c’est un découvert.',
          exercise: {
            id: `${ID}_p2_q2`,
            type: 'mcq',
            prompt: 'Au 31/12/N, le compte 521 Banque de la société KADI présente un solde CRÉDITEUR de 2 400 000 F. Que signifie ce solde ?',
            options: [
              'La société a 2 400 000 F disponibles en banque',
              'La société doit 2 400 000 F à sa banque (découvert)',
              'La société a fait une erreur, car un compte Banque ne peut pas être créditeur',
              'La banque doit 2 400 000 F de frais à la société',
            ],
            correctAnswerIndex: 1,
            explanation: 'Un solde créditeur du compte Banque est un découvert : c’est une dette envers la banque, classée en trésorerie-passif.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Calcul',
          stepTheme: 'Tenue du compte',
          stepTitle: 'Calculer le solde du compte Banque',
          paragraphText:
            'Comme pour la caisse : situation initiale + entrées − sorties.\n' +
            '• Exemple : avoir initial 30 000 000 F ; avis de crédit (emprunt) 5 000 000 F ; chèque émis 250 000 F ; retrait 2 000 000 F ; avis de débit (facture CIE) 75 000 F.\n' +
            '• Débits : 35 000 000 F. Crédits : 250 000 + 2 000 000 + 75 000 = 2 325 000 F.\n' +
            '• Solde : 35 000 000 − 2 325 000 = **32 675 000 F**, débiteur.',
          exercise: {
            id: `${ID}_p2_q3`,
            type: 'mcq',
            prompt:
              'Avoir en banque au 01/03/N : 30 000 000 F. Ensuite : avis de crédit pour un emprunt de 5 000 000 F ; chèque n° 18 émis à BEDA 250 000 F ; retrait d’espèces 2 000 000 F ; avis de débit pour la facture CIE 75 000 F. Quel est le solde du compte 521 ?',
            options: ['32 675 000 F débiteur', '37 325 000 F débiteur', '27 675 000 F débiteur', '35 000 000 F débiteur'],
            correctAnswerIndex: 0,
            explanation: 'Débits : 30 000 000 + 5 000 000 = 35 000 000 F. Crédits : 250 000 + 2 000 000 + 75 000 = 2 325 000 F. Solde : 32 675 000 F, débiteur.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Écritures',
          stepTheme: 'Avis bancaires',
          stepTitle: 'Enregistrer un emprunt et des frais bancaires',
          paragraphText:
            '• **Emprunt obtenu** (avis de crédit) : **D 521** Banque / **C 162** Emprunts auprès des établissements de crédit.\n' +
            '• **Frais bancaires** (avis de débit : frais de tenue de compte, frais d’escompte) : **D 631** Frais bancaires / **C 521** Banque.\n' +
            '• **Frais sur titres** (achat, vente, garde) : **D 6311** Frais sur titres / **C 521** Banque.\n' +
            '• **Effet domicilié payé** par la banque : **D 402** Fournisseurs, effets à payer / **C 521** Banque.',
          exercise: {
            id: `${ID}_p2_q4`,
            type: 'mcq',
            prompt: 'Le 05/03/N, la société reçoit l’avis de crédit n° 17 : la banque a versé sur son compte un emprunt de 5 000 000 F. Quelle écriture passer ?',
            options: [
              'D 162 Emprunts / C 521 Banque : 5 000 000',
              'D 521 Banque / C 701 Ventes : 5 000 000',
              'D 521 Banque / C 162 Emprunts auprès des établissements de crédit : 5 000 000',
              'D 631 Frais bancaires / C 162 Emprunts : 5 000 000',
            ],
            correctAnswerIndex: 2,
            explanation: 'L’avoir en banque augmente (débit 521) et l’entreprise contracte une dette financière (crédit 162).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: '531 CCP',
          stepTheme: 'Chèques postaux',
          stepTitle: 'Le compte 531 Chèques postaux',
          paragraphText:
            'Le compte **531 Chèques postaux** fonctionne comme le compte Banque, avec trois différences :\n' +
            '• il ne peut **pas devenir créditeur** : pas de découvert, sauf exception prévue par contrat ;\n' +
            '• les chèques postaux encaissent chèques, virements et effets, mais **n’escomptent pas** les effets de commerce ;\n' +
            '• les commissions prélevées vont au compte **631 Frais bancaires** ; un relevé est envoyé après chaque opération.',
          keyRule: 'Attention au numéro : 531 = Chèques postaux ; 513 = Chèques à encaisser (à ne pas confondre).',
          konanTip: 'Certains supports écrivent « 513 Chèques postaux » : c’est une erreur. Dans le SYSCOHADA, les chèques postaux sont au 531.',
          exercise: {
            id: `${ID}_p2_q5`,
            type: 'mcq',
            prompt: 'Dans le plan SYSCOHADA, quel numéro de compte correspond aux « Chèques postaux » ?',
            options: ['513', '514', '531', '571'],
            correctAnswerIndex: 2,
            explanation: '531 = Chèques postaux. 513 = Chèques à encaisser, 514 = Chèques à l’encaissement, 571 = Caisse.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Sens des avis',
          stepTitle: 'Ne pas recopier le sens de la banque',
          paragraphText:
            'Piège fréquent : lire « avis de DÉBIT » et débiter le 521. Or la banque parle de ses propres livres.\n' +
            '• Avis de débit de 6 000 F pour frais sur effet impayé (examen G2) : **D 631** Frais bancaires 6 000 / **C 521** Banque 6 000.\n' +
            '• Avis de crédit de 850 000 F pour le chèque d’un client remis à l’encaissement : **D 521** Banque / **C 514** Chèques à l’encaissement (ou C 411 Clients si le chèque n’est pas passé par un compte d’attente).',
          exercise: {
            id: `${ID}_p2_q6`,
            type: 'mcq',
            prompt: 'Le 29/04/N, la SGCI envoie à G&B Sarl un AVIS DE DÉBIT de 6 000 F : frais sur l’effet n° 66 impayé. Quelle écriture G&B Sarl doit-elle passer ?',
            options: [
              'D 521 Banque 6 000 / C 631 Frais bancaires 6 000',
              'D 631 Frais bancaires 6 000 / C 521 Banque 6 000',
              'D 631 Frais bancaires 6 000 / C 571 Caisse 6 000',
              'D 521 Banque 6 000 / C 411 Clients 6 000',
            ],
            correctAnswerIndex: 1,
            explanation: 'L’avis de débit diminue l’avoir en banque : crédit 521. Les frais sont une charge : débit 631.',
          },
        },
      ],
    }),

    // ------------------------------------------------------------------------
    // 5.3 CHÈQUES, CARTES ET VIREMENTS
    // ------------------------------------------------------------------------
    makePoint({
      id: `${ID}_p3`,
      order: 3,
      title: 'Chèques à encaisser (513), à l’encaissement (514), cartes bancaires (515) et virements',
      summary: 'Comptes de transition des chèques reçus, remise à l’encaissement, commissions, paiements par carte et virements.',
      conceptExplanation:
        'Quand l’entreprise reçoit beaucoup de chèques, elle ne les enregistre pas directement en banque : ils passent par des **comptes de transition**.\n\n' +
        '• **513 Chèques à encaisser** : à la réception du chèque (D 513 / C 411 Client).\n' +
        '• **514 Chèques à l’encaissement** : quand les chèques sont remis à la banque (D 514 / C 513).\n' +
        '• À l’avis de crédit : D 521 Banque (net reçu) + D 631 Frais bancaires (commission) / C 514.\n\n' +
        'Le paiement par **carte bancaire** suit la même logique avec le compte **515 Cartes de crédit à encaisser** et la commission au **6315**. Pour un **virement**, le débiteur enregistre à la signature de l’ordre ; le créancier attend l’avis de crédit.',
      keyRule: 'Chèque reçu → 513 ; chèque remis à la banque → 514 ; avis de crédit → 521 (+ 631 pour les frais).',
      workedExample: {
        title: 'Quatre chèques clients remis à l’encaissement',
        statement:
          'L’entreprise 2IT1A reçoit : le 02/02 chèque n° 1 de TOURE 5 000 000 F ; le 08/02 chèque n° 2 de BOUBA 1 000 000 F ; le 12/02 chèque n° 3 de KONAN 3 000 000 F ; le 15/02 chèque n° 4 de YEO 1 500 000 F. Le 16/02, elle remet les 4 chèques à l’encaissement. Le 19/02, avis de crédit : net 10 490 000 F.',
        methodSteps: [
          'À chaque réception : D 513 Chèques à encaisser / C 411 Client (5 000 000 ; 1 000 000 ; 3 000 000 ; 1 500 000).',
          'Le 16/02 : total 5 000 000 + 1 000 000 + 3 000 000 + 1 500 000 = 10 500 000 F → D 514 / C 513 : 10 500 000.',
          'Le 19/02 : frais = 10 500 000 − 10 490 000 = 10 000 F → D 521 10 490 000 ; D 631 10 000 ; C 514 10 500 000.',
        ],
        conclusion: 'Les comptes 513 et 514 sont soldés : chaque chèque est passé de la réception à la banque, frais compris.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: '513 / 514',
          stepTheme: 'Comptes de transition',
          stepTitle: 'Chèques à encaisser et chèques à l’encaissement',
          paragraphText:
            '• **513 Chèques à encaisser** : chèques **reçus** des clients mais pas encore remis à la banque. Débité à la réception, crédité à la remise.\n' +
            '• **514 Chèques à l’encaissement** : chèques **remis** à la banque, en attente de l’avis de crédit. Débité à la remise, crédité à l’avis de crédit.\n' +
            '• Ces comptes sont **débiteurs** et se soldent quand l’argent arrive sur le compte 521.',
          exercise: {
            id: `${ID}_p3_q1`,
            type: 'mcq',
            prompt: 'L’entreprise a remis des chèques de clients à sa banque, mais n’a pas encore reçu l’avis de crédit. Dans quel compte ces chèques se trouvent-ils ?',
            options: ['513 Chèques à encaisser', '514 Chèques à l’encaissement', '531 Chèques postaux', '411 Clients'],
            correctAnswerIndex: 1,
            explanation: 'Remis à la banque mais pas encore crédités : ce sont des chèques à l’encaissement (514). Avant la remise, ils étaient au 513.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Réception',
          stepTheme: 'Chèque reçu',
          stepTitle: 'Enregistrer la réception d’un chèque client',
          paragraphText:
            'À la réception, la créance sur le client est éteinte et le chèque entre en attente :\n' +
            '• **D 513** Chèques à encaisser / **C 411** Clients.\n' +
            '• Exemple : le 02/02/N, chèque n° 1 du client TOURE de 5 000 000 F → D 513 / C 411 TOURE : 5 000 000 (libellé « son chèque n° 1 »).',
          exercise: {
            id: `${ID}_p3_q2`,
            type: 'mcq',
            prompt: 'Le 02/02/N, l’entreprise 2IT1A, qui utilise les comptes de transition, reçoit le chèque n° 1 de son client TOURE : 5 000 000 F. Quelle écriture passer ?',
            options: [
              'D 521 Banque / C 411 TOURE : 5 000 000',
              'D 411 TOURE / C 513 Chèques à encaisser : 5 000 000',
              'D 514 Chèques à l’encaissement / C 411 TOURE : 5 000 000',
              'D 513 Chèques à encaisser / C 411 TOURE : 5 000 000',
            ],
            correctAnswerIndex: 3,
            explanation: 'Avec les comptes de transition, le chèque reçu entre au 513 (débit) et la créance client est soldée (crédit 411).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Remise',
          stepTheme: 'Bordereau de remise',
          stepTitle: 'Remettre les chèques à l’encaissement',
          paragraphText:
            'On regroupe les chèques sur un bordereau et on passe une seule écriture pour le total :\n' +
            '• **D 514** Chèques à l’encaissement / **C 513** Chèques à encaisser.\n' +
            '• Exemple : chèques n° 1 à 4 : 5 000 000 + 1 000 000 + 3 000 000 + 1 500 000 = **10 500 000 F**.',
          exercise: {
            id: `${ID}_p3_q3`,
            type: 'mcq',
            prompt:
              'Le 16/02/N, l’entreprise remet à l’encaissement 4 chèques reçus : TOURE 5 000 000 F, BOUBA 1 000 000 F, KONAN 3 000 000 F et YEO 1 500 000 F. Quelle écriture passer ?',
            options: [
              'D 514 / C 513 : 10 500 000',
              'D 513 / C 514 : 10 500 000',
              'D 521 / C 513 : 10 500 000',
              'D 514 / C 513 : 9 500 000',
            ],
            correctAnswerIndex: 0,
            explanation: 'Total remis : 5 000 000 + 1 000 000 + 3 000 000 + 1 500 000 = 10 500 000 F. Les chèques passent de « à encaisser » (crédit 513) à « à l’encaissement » (débit 514).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Avis de crédit',
          stepTheme: 'Encaissement',
          stepTitle: 'Enregistrer l’avis de crédit et la commission',
          paragraphText:
            'La banque crédite le **net** (montant remis − commission) :\n' +
            '• **D 521** Banque (net) ; **D 631** Frais bancaires (commission) ; **C 514** Chèques à l’encaissement (montant remis).\n' +
            '• Exemple : remis 10 500 000 F, avis de crédit net 10 490 000 F → frais = **10 000 F**.',
          formula: { name: 'Frais bancaires', formula: '\\text{Frais} = \\text{Montant remis} - \\text{Net crédité}' },
          exercise: {
            id: `${ID}_p3_q4`,
            type: 'mcq',
            prompt:
              'Chèques remis à l’encaissement le 16/02/N : 10 500 000 F. Le 19/02/N, avis de crédit de la banque : net 10 490 000 F. Quelle écriture passer ?',
            options: [
              'D 521 10 500 000 / C 514 10 500 000',
              'D 521 10 490 000 ; D 631 10 000 / C 514 10 500 000',
              'D 521 10 490 000 / C 514 10 490 000',
              'D 514 10 500 000 / C 521 10 490 000 ; C 631 10 000',
            ],
            correctAnswerIndex: 1,
            explanation: 'Frais = 10 500 000 − 10 490 000 = 10 000 F (charge 631). La banque reçoit le net (débit 521) et le compte 514 est soldé pour le montant remis.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'propriete',
          stepBadge: '515 Carte',
          stepTheme: 'Carte bancaire',
          stepTitle: 'Règlement par carte bancaire',
          paragraphText:
            'Même logique que le chèque, avec le compte **515 Cartes de crédit à encaisser** :\n' +
            '• Passage de la carte : **D 515** / **C 701** Ventes (et C 443 TVA facturée s’il y a lieu) ou C 411 Client.\n' +
            '• Avis de crédit : **D 521** Banque (net) ; **D 6315** Commissions sur cartes de crédit / **C 515**.',
          exercise: {
            id: `${ID}_p3_q5`,
            type: 'mcq',
            prompt: 'Une boutique encaisse par carte bancaire. À l’avis de crédit, la banque retient une commission sur le paiement par carte. Dans quel compte enregistrer cette commission ?',
            options: ['6315 Commissions sur cartes de crédit', '515 Cartes de crédit à encaisser', '701 Ventes de marchandises', '777 Gains sur cessions de titres'],
            correctAnswerIndex: 0,
            explanation: 'La commission sur carte est une charge : 6315. Le compte 515 est soldé et le net va au 521.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Virement',
          stepTheme: 'Date d’enregistrement',
          stepTitle: 'Le virement : qui enregistre, et quand ?',
          paragraphText:
            '• Le **débiteur** qui signe un ordre de virement l’enregistre comme un chèque émis : **D 401** Fournisseur / **C 521** Banque.\n' +
            '• Le **créancier** n’enregistre le règlement qu’à la **réception de l’avis de crédit**, même s’il a été prévenu avant par son client : **D 521** / **C 411**.',
          keyRule: 'Pas d’avis de crédit, pas d’écriture chez celui qui reçoit le virement.',
          exercise: {
            id: `${ID}_p3_q6`,
            type: 'mcq',
            prompt:
              'Le 08/03/N, le client YAO téléphone : « J’ai donné l’ordre de virer 1 500 000 F sur votre compte. » L’avis de crédit de la banque n’arrive que le 11/03/N. Quand l’entreprise enregistre-t-elle D 521 / C 411 YAO ?',
            options: ['Le 08/03/N, dès l’appel du client', 'Le 11/03/N, à la réception de l’avis de crédit', 'À la fin du mois, lors du rapprochement', 'Jamais : un virement ne s’enregistre pas'],
            correctAnswerIndex: 1,
            explanation: 'Le créancier enregistre le virement à la réception de l’avis de crédit, qui est la pièce justificative.',
          },
        },
      ],
    }),

    // ------------------------------------------------------------------------
    // 5.4 TITRES DE PLACEMENT
    // ------------------------------------------------------------------------
    makePoint({
      id: `${ID}_p4`,
      order: 4,
      title: 'Les titres de placement (compte 50) : achat, frais et cession',
      summary: 'Acquisition au prix d’achat, frais au 6311, sortie au coût historique, plus-value (777) ou moins-value (677).',
      conceptExplanation:
        'Une entreprise qui a un excédent temporaire de trésorerie peut acheter des **titres de placement** (actions, obligations, bons du Trésor) pour réaliser un gain à brève échéance. Ils sont revendus rapidement (quelques semaines ou mois).\n\n' +
        '• **Achat** : D **50** Titres de placement au **prix d’achat** ; les frais d’achat au **6311 Frais sur titres** ; C 521.\n' +
        '• **Cession** : la sortie se fait au **coût historique** (prix d’achat) au crédit du 50. La différence avec le prix de vente est une **plus-value** (C **777** Gains sur cessions de titres de placement) ou une **moins-value** (D **677** Pertes sur cessions de titres de placement).',
      keyRule: 'Titre de placement : entrée et sortie au prix d’achat ; frais en charges (6311) ; écart de cession en 777 ou 677.',
      formulas: [
        { name: 'Résultat de cession', formula: '\\text{Plus ou moins-value} = \\text{Prix de cession} - \\text{Nombre de titres} \\times \\text{Prix d’achat unitaire}' },
      ],
      workedExample: {
        title: 'Société NIM & Cie : achat et revente d’actions ABICI',
        statement:
          'Le 03/03/N, achat de 200 actions ABICI à 15 000 F l’une, frais d’achat 50 000 F, par banque. Le 30/03/N, vente de 150 actions pour 2 505 000 F. Le 16/04/N, vente des 50 actions restantes à 14 700 F l’une.',
        methodSteps: [
          '03/03 : D 50 : 200 × 15 000 = 3 000 000 ; D 6311 : 50 000 ; C 521 : 3 050 000.',
          '30/03 : coût historique 150 × 15 000 = 2 250 000 ; plus-value 2 505 000 − 2 250 000 = 255 000 → D 521 2 505 000 / C 50 2 250 000 / C 777 255 000.',
          '16/04 : prix de cession 50 × 14 700 = 735 000 ; coût 50 × 15 000 = 750 000 ; moins-value 15 000 → D 521 735 000 ; D 677 15 000 / C 50 750 000.',
        ],
        conclusion: 'Le compte 50 est soldé (3 000 000 entrés, 2 250 000 + 750 000 sortis). Gain net sur les deux cessions : 255 000 − 15 000 = 240 000 F, avant les 50 000 F de frais.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Compte 50',
          stepTheme: 'Placement',
          stepTitle: 'Qu’est-ce qu’un titre de placement ?',
          paragraphText:
            '• Titre acheté pour réaliser un **gain à brève échéance** avec une trésorerie momentanément disponible : actions, obligations, bons du Trésor.\n' +
            '• Il est revendu vite (quelques semaines ou mois) : c’est un élément de **trésorerie** (classe 5, compte **50**).\n' +
            '• À distinguer des **titres de participation** (compte 26), achetés pour exercer une influence durable sur une autre société.',
          exercise: {
            id: `${ID}_p4_q1`,
            type: 'mcq',
            prompt: 'Une entreprise a un excédent de trésorerie pour deux mois. Elle achète des actions cotées à la BRVM dans le but de les revendre avec un gain dans quelques semaines. Dans quel compte enregistrer ces actions ?',
            options: ['26 Titres de participation', '50 Titres de placement', '521 Banque', '6311 Frais sur titres'],
            correctAnswerIndex: 1,
            explanation: 'Des titres achetés pour un gain à court terme avec une trésorerie disponible sont des titres de placement : compte 50.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Achat',
          stepTheme: 'Prix d’achat',
          stepTitle: 'Enregistrer l’achat de titres',
          paragraphText:
            '• **D 50** Titres de placement : **prix d’achat** (nombre × prix unitaire).\n' +
            '• **D 6311** Frais sur titres : frais d’achat (jamais ajoutés au prix des titres).\n' +
            '• **C 521** Banque : total payé.\n' +
            '• Exemple : 200 actions à 15 000 F, frais 50 000 F → D 50 3 000 000 ; D 6311 50 000 ; C 521 3 050 000.',
          exercise: {
            id: `${ID}_p4_q2`,
            type: 'mcq',
            prompt: 'Le 03/03/N, NIM & Cie achète par banque 200 actions ABICI au prix unitaire de 15 000 F ; les frais d’achat s’élèvent à 50 000 F. Quel montant porter au DÉBIT du compte 50 Titres de placement ?',
            options: ['3 050 000 F', '3 000 000 F', '2 950 000 F', '50 000 F'],
            correctAnswerIndex: 1,
            explanation: 'Le compte 50 reçoit le prix d’achat seul : 200 × 15 000 = 3 000 000 F. Les 50 000 F de frais vont au 6311.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Plus-value',
          stepTheme: 'Cession gagnante',
          stepTitle: 'Céder des titres avec une plus-value',
          paragraphText:
            '• On sort les titres au **coût historique** : nombre vendu × prix d’achat unitaire.\n' +
            '• Plus-value = prix de cession − coût historique → **C 777** Gains sur cessions de titres de placement.\n' +
            '• Exemple : 150 actions achetées 15 000 F vendues 2 505 000 F : coût 2 250 000 F ; plus-value **255 000 F** → D 521 2 505 000 / C 50 2 250 000 / C 777 255 000.',
          exercise: {
            id: `${ID}_p4_q3`,
            type: 'mcq',
            prompt: 'NIM & Cie a acheté des actions ABICI à 15 000 F l’une. Le 30/03/N, elle vend 150 de ces actions pour un prix global de 2 505 000 F. Quel est le résultat de cession ?',
            options: ['Plus-value de 255 000 F (compte 777)', 'Moins-value de 255 000 F (compte 677)', 'Plus-value de 2 505 000 F (compte 777)', 'Plus-value de 205 000 F (compte 777)'],
            correctAnswerIndex: 0,
            explanation: 'Coût historique : 150 × 15 000 = 2 250 000 F. Plus-value : 2 505 000 − 2 250 000 = 255 000 F, au crédit du 777.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Moins-value',
          stepTheme: 'Cession perdante',
          stepTitle: 'Céder des titres avec une moins-value',
          paragraphText:
            '• Si le prix de cession est inférieur au coût historique, la perte va au **D 677** Pertes sur cessions de titres de placement.\n' +
            '• Exemple : 50 actions achetées 15 000 F, vendues 14 700 F l’une : prix 735 000 F ; coût 750 000 F ; moins-value **15 000 F** → D 521 735 000 ; D 677 15 000 / C 50 750 000.',
          exercise: {
            id: `${ID}_p4_q4`,
            type: 'mcq',
            prompt: 'Le 16/04/N, NIM & Cie vend par banque 50 actions ABICI à 14 700 F l’une ; elles avaient été achetées 15 000 F l’une. Quelle écriture passer ?',
            options: [
              'D 521 735 000 / C 50 735 000',
              'D 521 735 000 ; D 677 15 000 / C 50 750 000',
              'D 521 750 000 / C 50 735 000 ; C 777 15 000',
              'D 521 735 000 ; D 6311 15 000 / C 50 750 000',
            ],
            correctAnswerIndex: 1,
            explanation: 'Prix de cession : 50 × 14 700 = 735 000 F ; coût historique : 50 × 15 000 = 750 000 F ; moins-value 15 000 F au débit du 677. Le compte 50 est crédité du coût historique.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Coût historique',
          stepTitle: 'Les deux erreurs à éviter',
          paragraphText:
            '• **Erreur 1** : ajouter les frais d’achat au compte 50. Non : ils vont au **6311**.\n' +
            '• **Erreur 2** : créditer le compte 50 du **prix de vente**. Non : on le crédite du **prix d’achat** des titres vendus ; l’écart va au 777 ou au 677.\n' +
            '• Vérification : après la vente de tous les titres, le compte 50 doit être **soldé**.',
          exercise: {
            id: `${ID}_p4_q5`,
            type: 'mcq',
            prompt: 'Lors de la vente de titres de placement achetés 15 000 F l’un et revendus 16 700 F l’un, de quel montant unitaire le compte 50 doit-il être crédité ?',
            options: ['16 700 F, le prix de vente', '15 000 F, le prix d’achat (coût historique)', '1 700 F, la plus-value', '31 700 F, la somme des deux prix'],
            correctAnswerIndex: 1,
            explanation: 'Le compte 50 est toujours crédité au coût historique (15 000 F par titre) ; la plus-value de 1 700 F par titre va au 777.',
          },
        },
      ],
    }),

    // ------------------------------------------------------------------------
    // 5.5 MONNAIE ÉLECTRONIQUE
    // ------------------------------------------------------------------------
    makePoint({
      id: `${ID}_p5`,
      order: 5,
      title: 'Les instruments de monnaie électronique (compte 55) : Mobile Money et cartes prépayées',
      summary: 'Chargement (D 55), frais de chargement (6317), paiements par Mobile Money et rapprochement avec l’émetteur.',
      conceptExplanation:
        'Un **instrument de monnaie électronique** est une valeur monétaire stockée sous forme électronique (téléphone, carte prépayée) qui représente une créance sur l’émetteur, remise contre des fonds : Orange Money, MTN MoMo, Moov Money, Wave, cartes carburant prépayées…\n\n' +
        'Le SYSCOHADA révisé lui consacre le compte **55**. On le **charge** depuis la banque ou la caisse (D 55 / C 52, 53 ou 57), les **frais** de chargement vont au **6317**, et les paiements effectués avec cet instrument le **créditent**. Chaque opération doit avoir un **justificatif** (reçu, relevé de l’opérateur). En fin de période, on **rapproche** le solde comptable du solde confirmé par l’émetteur.',
      keyRule: 'Compte 55 = argent sur Mobile Money ou carte prépayée ; frais au 6317 ; rapprochement avec l’émetteur en fin de période.',
      workedExample: {
        title: 'Une entreprise d’Abidjan utilise un compte Mobile Money',
        statement:
          'Le 02/05/N, l’entreprise charge son compte Mobile Money de 300 000 F depuis sa caisse ; frais de chargement 1 500 F payés en espèces. Le 10/05/N, elle règle le fournisseur KONE 120 000 F par Mobile Money. Quel est le solde du compte 55 au 10/05/N ?',
        methodSteps: [
          '02/05 : D 55 / C 571 : 300 000 ; D 6317 / C 571 : 1 500.',
          '10/05 : D 401 KONE / C 55 : 120 000.',
          'Solde du 55 : 300 000 − 120 000 = 180 000 F débiteur, à comparer au solde affiché par l’opérateur.',
        ],
        conclusion: 'Le compte 55 fonctionne comme une petite caisse électronique : chargements au débit, paiements au crédit.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Compte 55',
          stepTheme: 'Monnaie électronique',
          stepTitle: 'Qu’est-ce qu’un instrument de monnaie électronique ?',
          paragraphText:
            '• Valeur monétaire **stockée électroniquement** (téléphone, carte prépayée), représentant une **créance sur l’émetteur**, remise contre des fonds pour payer ou transférer de l’argent.\n' +
            '• Exemples en Côte d’Ivoire : Orange Money, MTN MoMo, Moov Money, Wave, cartes carburant prépayées.\n' +
            '• Compte SYSCOHADA : **55 Instruments de monnaie électronique** (classe 5, trésorerie).',
          exercise: {
            id: `${ID}_p5_q1`,
            type: 'mcq',
            prompt: 'Une entreprise ivoirienne détient 450 000 F sur son compte marchand Wave. Dans quel compte SYSCOHADA cette somme est-elle enregistrée ?',
            options: ['571 Caisse', '521 Banque', '55 Instruments de monnaie électronique', '411 Clients'],
            correctAnswerIndex: 2,
            explanation: 'Les fonds stockés sur un portefeuille de monnaie électronique (Wave, Orange Money, MTN MoMo…) sont enregistrés au compte 55.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Chargement',
          stepTheme: 'Alimenter le compte',
          stepTitle: 'Enregistrer le chargement',
          paragraphText:
            'Le chargement est une sortie de fonds de la banque ou de la caisse :\n' +
            '• **D 55** Instruments de monnaie électronique / **C 521** Banque, **C 53** Établissements financiers ou **C 571** Caisse.\n' +
            '• Exemple : chargement de 300 000 F en espèces → D 55 / C 571 : 300 000.',
          exercise: {
            id: `${ID}_p5_q2`,
            type: 'mcq',
            prompt: 'Le 02/05/N, l’entreprise charge son compte Orange Money de 300 000 F en versant des espèces prises dans sa caisse. Quelle écriture passer ?',
            options: [
              'D 571 Caisse / C 55 Monnaie électronique : 300 000',
              'D 55 Monnaie électronique / C 571 Caisse : 300 000',
              'D 55 Monnaie électronique / C 701 Ventes : 300 000',
              'D 6317 Frais / C 571 Caisse : 300 000',
            ],
            correctAnswerIndex: 1,
            explanation: 'L’argent passe de la caisse (crédit 571) au portefeuille électronique (débit 55) : c’est un mouvement entre deux comptes de trésorerie.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Frais',
          stepTheme: 'Compte 6317',
          stepTitle: 'Enregistrer les frais de chargement',
          paragraphText:
            'Les frais éventuels liés au chargement sont une charge :\n' +
            '• **D 6317** Frais sur instruments de monnaie électronique / **C 52**, **C 53** ou **C 57** selon le moyen de paiement.\n' +
            '• Exemple : frais de 1 500 F payés en espèces → D 6317 / C 571 : 1 500.',
          exercise: {
            id: `${ID}_p5_q3`,
            type: 'mcq',
            prompt: 'Pour charger son compte Mobile Money, l’entreprise paie 1 500 F de frais en espèces. Quelle écriture passer ?',
            options: [
              'D 55 / C 571 : 1 500',
              'D 6317 Frais sur instruments de monnaie électronique / C 571 Caisse : 1 500',
              'D 571 / C 6317 : 1 500',
              'D 631 Frais bancaires / C 55 : 1 500',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les frais de chargement sont une charge propre à la monnaie électronique (6317), payée ici en espèces (crédit 571).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Paiement',
          stepTheme: 'Régler un tiers',
          stepTitle: 'Payer un fournisseur par Mobile Money',
          paragraphText:
            'Un paiement fait avec l’instrument diminue le compte 55 :\n' +
            '• Règlement d’un fournisseur : **D 401** Fournisseur / **C 55**.\n' +
            '• Un client qui nous paie par Mobile Money : **D 55** / **C 411** Client.\n' +
            '• Toujours garder le **reçu de transaction** comme pièce justificative.',
          exercise: {
            id: `${ID}_p5_q4`,
            type: 'mcq',
            prompt: 'Le 10/05/N, l’entreprise règle sa dette envers le fournisseur KONE, soit 120 000 F, par transfert depuis son compte Mobile Money. Quelle écriture passer ?',
            options: [
              'D 55 / C 401 KONE : 120 000',
              'D 401 KONE / C 55 : 120 000',
              'D 401 KONE / C 571 : 120 000',
              'D 6317 / C 55 : 120 000',
            ],
            correctAnswerIndex: 1,
            explanation: 'La dette fournisseur est éteinte (débit 401) et l’argent sort du portefeuille électronique (crédit 55).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Contrôle',
          stepTheme: 'Rapprochement',
          stepTitle: 'Rapprocher le solde comptable du solde réel',
          paragraphText:
            'En fin de période, il faut **comparer** le solde du compte 55 avec le solde réel confirmé par l’émetteur (relevé de l’opérateur).\n' +
            '• Un écart révèle un oubli : frais prélevés non enregistrés, paiement reçu sans écriture…\n' +
            '• Exemple : chargement 300 000 F, paiement 120 000 F → solde comptable 180 000 F. Si l’opérateur affiche 179 000 F, il manque 1 000 F de frais à enregistrer au 6317.',
          exercise: {
            id: `${ID}_p5_q5`,
            type: 'mcq',
            prompt:
              'Le compte 55 de l’entreprise présente un solde comptable de 180 000 F (chargement 300 000 F, paiement fournisseur 120 000 F). Le relevé de l’opérateur affiche 179 000 F, car des frais de transfert ont été prélevés. Que faire ?',
            options: [
              'Rien : l’écart est trop petit pour être enregistré',
              'Enregistrer les frais de 1 000 F : D 6317 / C 55',
              'Enregistrer un produit de 1 000 F : D 55 / C 758 Produits divers',
              'Modifier le solde initial du compte 55',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le rapprochement révèle 1 000 F de frais non enregistrés : on les comptabilise (D 6317 / C 55) pour retrouver le solde confirmé par l’émetteur.',
          },
        },
      ],
    }),
  ],
};
