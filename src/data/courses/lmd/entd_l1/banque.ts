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

export const BANQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : RÔLE, INTERMÉDIATION, BILAN ET TYPOLOGIE DES BANQUES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch1',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Rôle des banques, intermédiation, bilan et typologie',
    summary:
      "Maîtriser l'historique et la définition légale UEMOA de la banque, l'intermédiation financière (taux, multiplicateur, capacité maximale, bilan) et la typologie des institutions bancaires.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Enseignant KADJO Assandé Pierre — Cours Banque (Ch. 1 à 3) & Exercices de préparation examen',
    points: [
      makePoint({
        id: 'lmd_entd_l1_banque_ch1_p1',
        order: 1,
        title: 'Historique, définition légale UEMOA et fonctions des banques',
        summary:
          "De Babylone et Venise (1151) aux monnaies numériques, article 4 de la loi bancaire uniforme UEMOA (2007) et 4 fonctions clés des banques.",
        conceptExplanation:
          "Les banques sont le passage obligé du financement de l'économie : en Côte d'Ivoire, elles détiennent 90 % des actifs financiers et assurent la quasi-totalité des crédits au secteur privé.\n\n1. Repères historiques : les prêts sur céréales naissent dans les temples de Babylone (IIe millénaire av. J.-C.), puis se laïcisent avec la monnaie (VIIe s. av. J.-C.) et les banquiers romains. Au Moyen Âge, le mot « banque » dérive de bankiz (banc/table des changeurs) ; la première banque moderne est créée à Venise en 1151 (essor des foires et lettres de change). Aux XVIIIe-XIXe s., monnaie fiduciaire, monnaie scripturale et titres accompagnent la création de grands groupes (Société Générale, Deutsche Bank, Barclays). Après la crise de 1929, Roosevelt sépare banques de dépôts et banques d'affaires ; la seconde moitié du XXe s. voit apparaître cartes bancaires, DAB/GAB et banque en ligne, puis aujourd'hui le mobile money et les monnaies numériques.\n\n2. Définition légale (article 4 de la loi bancaire uniforme de 2007 de l'UEMOA) : est considérée comme une banque toute entreprise effectuant à titre de profession habituelle trois opérations : (1) réception de fonds du public, (2) opérations de crédit et (3) mise à disposition ou gestion de moyens de paiement.\n\n3. Quatre grandes fonctions : création monétaire (collecte de dépôts et octroi de crédits), gestion des moyens de paiement et service de caisse, gestion des risques et sécurité de l'épargne, et conseil/accompagnement.",
        keyRule:
          "Article 4 de la loi bancaire UEMOA (2007) : une banque exerce habituellement 3 métiers indissociables — réception de fonds du public, opérations de crédit et gestion des moyens de paiement.",
        formulas: [
          {
            name: 'Triple critère légal UEMOA (Art. 4, 2007)',
            formula: 'Banque = Réception de fonds du public + Opérations de crédit + Moyens de paiement',
            note: 'En Côte d’Ivoire, les banques détiennent environ 90 % des actifs financiers.',
          },
        ],
        workedExample: {
          title: 'Vérifier si un acteur est juridiquement une banque dans l’UEMOA',
          statement:
            "Une entreprise de transfert d'argent permet uniquement d'envoyer des espèces d'une ville à une autre sans collecter de dépôts bancaires ni accorder de crédits. Est-elle une banque au sens de l'article 4 de la loi bancaire UEMOA de 2007 ?",
          methodSteps: [
            "Rappeler les 3 critères cumulatifs de l'article 4 de la loi bancaire uniforme de 2007 de l'UEMOA : réception de fonds du public, opérations de crédit, gestion de moyens de paiement.",
            "Constater que l'entreprise ne réalise ni réception de dépôts ni opérations de crédit.",
            "Conclure qu'il s'agit d'un prestataire de services de paiement / transfert de fonds, mais pas d'une banque de plein exercice.",
          ],
          conclusion:
            'La qualification juridique de banque suppose l’exercice habituel des trois opérations bancaires fondamentales et l’agrément des autorités UEMOA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Histoire',
            stepTheme: 'Origines de la banque',
            stepTitle: 'Des temples de Babylone à Venise (1151)',
            paragraphText:
              "Les premières opérations de prêt (sur céréales) remontent à Babylone au IIe millénaire av. J.-C. Le mot « banque » vient de l'allemand bankiz (table/banc des changeurs). La première banque au sens moderne est fondée à Venise en 1151, en plein essor du commerce européen.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Dans quelle ville européenne a été créée en 1151 la première banque au sens moderne du terme ?',
              options: ['Paris', 'Venise', 'Londres', 'Abidjan'],
              correctAnswerIndex: 1,
              explanation:
                'À partir du XIe siècle, les banquiers italiens dominent : la première banque moderne est créée à Venise en 1151, et Florence devient une place bancaire majeure.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Loi UEMOA',
            stepTheme: 'Article 4 (2007)',
            stepTitle: 'Les trois opérations définissant une banque dans l’UEMOA',
            paragraphText:
              "D'après l'article 4 de la loi bancaire uniforme de 2007 de l'UEMOA, une banque est une entreprise qui effectue à titre de profession habituelle : la réception de fonds du public, les opérations de crédit, et la mise à disposition ou la gestion de moyens de paiement.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Selon l’article 4 de la loi bancaire uniforme de 2007 de l’UEMOA, quelles sont les trois activités habituelles qui définissent une banque ?',
              options: [
                'Vente d’immobilier, fabrication de billets et audit fiscal',
                'Assurance agricole, transport de fonds et bourse',
                'Réception de fonds du public, opérations de crédit et mise à disposition/gestion de moyens de paiement',
                'Uniquement l’émission de cryptomonnaies',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ce sont les trois opérations de banque consacrées par l’article 4 de la loi bancaire UEMOA de 2007.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Histoire XXe s.',
            stepTheme: 'Crise de 1929 & Innovations',
            stepTitle: 'Régulation post-1929 et essor technologique',
            paragraphText:
              "Suite au krach de 1929, le président Roosevelt sépare strictement aux États-Unis les banques d'affaires (grandes entreprises) des banques de dépôts (particuliers/PME). Dès les années 1960, la bancarisation s'élargit (femmes, jeunes) grâce aux cartes bancaires, DAB/GAB et paiements électroniques.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle réforme majeure a été introduite aux États-Unis par Roosevelt après la crise boursière de 1929 ?',
              options: [
                'La séparation stricte entre banques d’affaires et banques de dépôts',
                'La suppression de tous les comptes courants particuliers',
                'La fermeture définitive des banques centrales',
                'Le remplacement des chèques par le troc',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour protéger l’épargne des déposants des spéculations financières, les banques de dépôts ont été séparées des banques d’affaires (Glass-Steagall Act).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Poids en CI',
            stepTheme: 'Système financier ivoirien',
            stepTitle: 'Place centrale des banques en Côte d’Ivoire',
            paragraphText:
              "En Côte d'Ivoire, le financement de l'économie reste très fortement intermédié : les banques détiennent environ 90 % des actifs financiers et assurent la quasi-totalité des crédits distribués au secteur privé.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle part approximative des actifs financiers les banques détiennent-elles dans l’économie ivoirienne ?',
              options: ['15 %', '35 %', '50 %', '90 %'],
              correctAnswerIndex: 3,
              explanation:
                'Le cours souligne que les banques détiennent 90 % des actifs financiers en Côte d’Ivoire, illustrant la prédominance du financement bancaire.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Fonctions',
            stepTheme: 'Service de caisse & Risques',
            stepTitle: 'Les quatre missions principales des banques',
            paragraphText:
              "Outre la création monétaire (collecte/crédit), les banques assurent la gestion des moyens de paiement (et le service de caisse : conservation des dépôts, retraits, encaissements), la gestion des risques/sécurité (évaluation de la solvabilité, diversification des prêts) et le conseil financier.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'En quoi consiste précisément le « service de caisse » rendu par une banque à ses clients ?',
              options: [
                'Investir obligatoirement tout le capital du client en bourse',
                'Assurer la conservation des fonds, les retraits d’espèces, l’encaissement et la délivrance des moyens de paiement',
                'Imprimer des billets de banque au nom de l’État',
                'Garantir le remboursement de tous les impôts du client',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le service de caisse regroupe la garde des fonds, les retraits/encaissements et la mise à disposition des instruments de règlement.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_banque_ch1_p2',
        order: 2,
        title: "Intermédiation, multiplicateur de crédit et bilan bancaire",
        summary:
          "Calculer le taux d'intermédiation, le besoin de refinancement, le multiplicateur de crédit (m = 1/r), la capacité maximale C_Max et dresser un bilan bancaire en partie double.",
        conceptExplanation:
          "L'intermédiation financière est le métier historique des banques : transformer l'épargne des Agents à Capacité de Financement (dépôts) en crédits aux Agents à Besoin de Financement.\n\n1. Taux d'intermédiation bancaire : Taux = (Crédits distribués / Dépôts collectés) × 100.\n- Un taux élevé traduit une bonne transformation de l'épargne en prêts ; un taux > 100 % signifie que les crédits dépassent les dépôts : la banque doit alors se refinancer (différence Crédits − Dépôts) sur le marché interbancaire ou auprès de la BCEAO.\n\n2. Multiplicateur de crédit et capacité maximale de création monétaire (avec taux de réserves obligatoires r) :\n- Part bloquée en réserves = Dépôt initial × r ; Montant prêté au 1er tour = Dépôt initial × (1 − r).\n- Multiplicateur de crédit : m = 1 / r.\n- Capacité maximale de création de crédit du système bancaire : C_Max = Dépôt initial × (1 − r) × m = Dépôt initial × (1 − r) / r.\n\n3. Bilan simplifié d'une banque (partie double : Total Actif = Total Passif) :\n- ACTIF (emplois / ce que la banque possède ou ce qu'on lui doit) : Crédits/Prêts, Titres/Actions/Bons du Trésor, Liquidités/Trésorerie, Actifs immobilisés (terrains, immeubles).\n- PASSIF (ressources / d'où vient l'argent) : Dépôts de la clientèle, Dettes financières (emprunts interbancaires, découverts auprès des banques, emprunts obligataires), Fonds propres (capital, réserves, résultat net).\nLorsqu'une banque accorde un nouveau crédit financé par dépôt, son Actif (crédits) et son Passif (dépôts) augmentent simultanément du même montant (création de monnaie scripturale).",
        keyRule:
          "Retiens les 3 formules d'examen : Taux d'intermédiation = (Crédits/Dépôts)×100 ; m = 1/r ; C_Max = Dépôt×(1−r)×m. Et au bilan : Crédits & Liquidités à l'ACTIF ; Dépôts, Emprunts & Fonds propres au PASSIF !",
        formulas: [
          {
            name: 'Taux d’intermédiation bancaire',
            formula: 'Taux d’intermédiation = (Crédits / Dépôts) × 100',
            note: 'Si Crédits > Dépôts (taux > 100 %), besoin de refinancement = Crédits − Dépôts.',
          },
          {
            name: 'Multiplicateur de crédit et Capacité maximale',
            formula: 'm = 1 / r   |   C_Max = Dépôt initial × (1 − r) × m',
            note: 'Avec r le taux de réserves obligatoires imposé par la BCEAO.',
          },
          {
            name: 'Équilibre du bilan bancaire',
            formula: 'Total ACTIF (Prêts + Titres + Liquidités + Immobilisations) = Total PASSIF (Dépôts + Dettes + Fonds propres)',
            note: 'Tout crédit inscrit au compte du client crée simultanément un dépôt au passif.',
          },
        ],
        workedExample: {
          title: 'Taux d’intermédiation, multiplicateur et bilan (Exercices 8, 9 & 11)',
          statement:
            "A) Dépôts = 850 Mds FCFA, Crédits = 680 Mds FCFA. Calculez le taux d'intermédiation et les crédits supplémentaires pour atteindre 90 %.\nB) Dépôt initial = 200 M FCFA, réserves obligatoires r = 2 %. Calculez les réserves, le prêt initial, m et C_Max.",
          methodSteps: [
            'A1) Taux d’intermédiation = (680 / 850) × 100 = 80 % (bonne transformation, 20 % des dépôts non prêtés).',
            'A2) Pour 90 % sans changer les dépôts : Crédits cibles = 0,90 × 850 = 765 Mds ⇒ Crédits supplémentaires = 765 − 680 = 85 Mds FCFA.',
            'B1) Réserves obligatoires bloquées = 200 M × 2 % = 4 M FCFA ⇒ La banque peut prêter 200 − 4 = 196 M FCFA.',
            'B2) Multiplicateur de crédit : m = 1 / 0,02 = 50.',
            'B3) Création maximale de crédit : C_Max = 200 M × (1 − 0,02) × 50 = 196 M × 50 = 9 800 M FCFA (9,8 Mds FCFA).',
          ],
          conclusion:
            "Avec un taux de réserves obligatoires de 2 %, un dépôt initial de 200 millions FCFA permet au système bancaire de créer jusqu'à 9,8 milliards FCFA de nouveaux crédits.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Taux d’intermédiation',
            stepTitle: "Calculer et ajuster le taux d'intermédiation",
            paragraphText:
              "Le taux d'intermédiation vaut (Crédits / Dépôts) × 100. Par exemple (Dépôts = 850 Mds, Crédits = 680 Mds), il vaut 80 %. Pour atteindre 85 % sans nouveaux dépôts, les crédits doivent passer à 0,85 × 850 = 722,5 Mds (+42,5 Mds).",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Une banque collecte 850 milliards FCFA de dépôts et distribue 680 milliards FCFA de crédits. Quel est son taux d’intermédiation et quels crédits supplémentaires faut-il pour atteindre 90 % ?',
              options: [
                'Taux = 80 % ; crédits supplémentaires = 85 milliards FCFA',
                'Taux = 125 % ; crédits supplémentaires = 170 milliards FCFA',
                'Taux = 75 % ; crédits supplémentaires = 42,5 milliards FCFA',
                'Taux = 80 % ; crédits supplémentaires = 10 milliards FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                '680 / 850 = 80 %. Pour atteindre 90 %, il faut 0,90 × 850 = 765 milliards, soit 765 − 680 = 85 milliards de crédits supplémentaires.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Refinancement',
            stepTitle: 'Besoin de refinancement interbancaire quand Crédits > Dépôts',
            paragraphText:
              "Lorsque le volume des crédits accordés dépasse les dépôts collectés (taux d'intermédiation > 100 %), la banque doit combler le déficit en se refinançant sur le marché interbancaire (ou auprès de la BCEAO).",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Une banque dispose de 400 millions FCFA de dépôts et a accordé 520 millions FCFA de crédits. Quel est son taux d’intermédiation et son besoin de refinancement ?',
              options: [
                'Taux = 76,9 % ; aucun refinancement nécessaire',
                'Taux = 130 % ; besoin de refinancement de 120 millions FCFA',
                'Taux = 120 % ; besoin de refinancement de 400 millions FCFA',
                'Taux = 130 % ; excédent de 120 millions FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Taux = (520 / 400) × 100 = 130 %. Comme les crédits dépassent les dépôts de 520 − 400 = 120 millions FCFA, la banque doit se refinancer de 120 millions FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Multiplicateur de crédit',
            stepTitle: 'Calculer le multiplicateur m et la capacité maximale C_Max',
            paragraphText:
              "Avec un taux de réserves obligatoires r, le multiplicateur monétaire vaut m = 1/r et la création maximale de crédits vaut C_Max = Dépôt × (1 − r) × m. Plus r est faible, plus le potentiel de création monétaire est grand.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'La BCEAO fixe r = 2 % et un client dépose 200 millions FCFA. Que valent le multiplicateur m et la création maximale de crédits C_Max ?',
              options: [
                'm = 20 et C_Max = 4 000 millions FCFA',
                'm = 50 et C_Max = 10 000 millions FCFA',
                'm = 50 et C_Max = 9 800 millions FCFA',
                'm = 5 et C_Max = 980 millions FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'm = 1 / 0,02 = 50. Montant prêté initialement = 200 × 0,98 = 196 M. Donc C_Max = 196 × 50 = 9 800 millions FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège Bilan',
            stepTheme: 'Actif vs Passif bancaire',
            stepTitle: 'Ne jamais inverser Crédits et Dépôts dans le bilan d’une banque !',
            paragraphText:
              "Piège classique des débutants : pour une banque, un DÉPÔT d'un client est une dette (la banque doit rendre l'argent au client) ⇒ il s'inscrit au PASSIF ! Un CRÉDIT accordé à un client est une créance (le client doit rembourser la banque) ⇒ il s'inscrit à l'ACTIF !",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Dans le bilan simplifié d’une banque, comment se classent respectivement les « Dépôts de la clientèle » et les « Crédits accordés » ?',
              options: [
                'Dépôts à l’Actif ; Crédits au Passif',
                'Les deux à l’Actif',
                'Les deux au Passif',
                'Dépôts au Passif (ressource/dette) ; Crédits à l’Actif (emploi/créance)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La comptabilité bancaire inverse la logique du particulier : les dépôts clients sont des ressources (Passif) et les crédits distribués sont des créances détenues par la banque (Actif).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'Équilibre comptable',
            stepTitle: 'Construire et mettre à jour un bilan bancaire',
            paragraphText:
              "Dans l'exercice 11 Cas 1 : ACTIF = Liquidités (10 M) + Crédits (10 M) + Actions (8 M) + Terrain (2 M) = 30 M FCFA. PASSIF = Capitaux propres (5 M) + Emprunts interbancaires (5 M) + Dépôts (15 M) + Découvert (5 M) = 30 M FCFA. Si la banque octroie un nouveau crédit de 100 000 FCFA financé par dépôt, Crédits (+0,1 M) et Dépôts (+0,1 M) portent le total du bilan à 30,1 M FCFA !",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Dans l’exercice 11 (total bilan initial = 30 millions FCFA), si la banque octroie un nouveau crédit de 100 000 FCFA financé par dépôt sur le compte du client, quel devient le total du bilan ?',
              options: [
                'Il reste inchangé à 30 000 000 FCFA',
                'Il passe à 30 100 000 FCFA (Crédits à l’Actif +100 000 et Dépôts au Passif +100 000)',
                'Il baisse à 29 900 000 FCFA',
                'Il passe à 30 200 000 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La création monétaire scripturale gonfle simultanément l’Actif (créance crédit +100 000) et le Passif (dépôt +100 000) du même montant.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_banque_ch1_p3',
        order: 3,
        title: 'Typologie des banques et produits/crédits bancaires',
        summary:
          "Classifier BCEAO, SGCI, BNI, BOAD et Djamo, distinguer crédit d'exploitation et crédit d'investissement et calculer le coût total d'un emprunt.",
        conceptExplanation:
          "Le paysage bancaire (Chapitres 2 & 3, Exercice 1) rassemble cinq grandes catégories d'établissements :\n1. Banque centrale (ex. BCEAO — Banque Centrale des États de l'Afrique de l'Ouest) : autorité monétaire qui émet la monnaie, conduit la politique monétaire et supervise la stabilité du système.\n2. Banque commerciale / de dépôts (ex. Société Générale Côte d'Ivoire — SGCI) : collecte les dépôts du public (particuliers, PME, entreprises) et distribue des crédits et moyens de paiement courants.\n3. Banque d'investissement (ex. BNI — Banque Nationale d'Investissement en Côte d'Ivoire) : spécialisée dans le financement des grands projets, investissements publics/privés et ingénierie financière.\n4. Banque de développement (ex. BOAD — Banque Ouest-Africaine de Développement) : institution multilatérale finançant les infrastructures et le développement économique à long terme des États membres.\n5. Néobanque / fintech bancaire (ex. Djamo) : acteur 100 % digital proposant comptes, cartes et paiements mobiles à frais réduits.\n\nCôté produits bancaires, on distingue les comptes (courant, épargne, dépôt à terme), les services électroniques (cartes, mobile banking) et les crédits :\n- Crédit d'exploitation (court terme) : finance le cycle d'exploitation courant (stocks, trésorerie, salaires) ;\n- Crédit d'investissement (moyen/long terme) : finance des actifs durables (machines, bâtiments, véhicules).",
        keyRule:
          "Retiens la classification UEMOA de l'Exercice 1 : BCEAO = Centrale ; SGCI = Commerciale ; BNI = Investissement ; BOAD = Développement ; Djamo = Néobanque. Et Crédit d'exploitation = stocks/trésorerie (court terme) ≠ Crédit d'investissement = équipements durables (long terme).",
        formulas: [
          {
            name: 'Intérêts simples annuels d’un crédit',
            formula: 'Intérêt annuel = Capital × Taux   |   Total remboursé = Capital + (Intérêt annuel × Durée)',
            note: 'Modèle utilisé dans les exercices 3 et 4 de préparation à l’examen.',
          },
        ],
        workedExample: {
          title: 'Classifier les banques et calculer un crédit d’exploitation',
          statement:
            "Un commerçant emprunte 10 millions FCFA à 6 % par an sur 2 ans pour financer ses stocks. Calculez les intérêts annuels, le montant total remboursé et justifiez la nature du crédit.",
          methodSteps: [
            'Intérêts annuels = 10 000 000 × 6 % = 600 000 FCFA par an.',
            'Intérêts totaux sur 2 ans = 600 000 × 2 = 1 200 000 FCFA.',
            'Montant total remboursé au bout de 2 ans = Capital + Intérêts = 10 000 000 + 1 200 000 = 11 200 000 FCFA.',
            'Nature du crédit : il finance les stocks (besoin courant du cycle d’exploitation à court terme) et non un bien durable ⇒ c’est un crédit d’exploitation.',
          ],
          conclusion:
            "Le commerçant paie 600 000 FCFA d'intérêts par an, soit 11 200 000 FCFA remboursés au total.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Application',
            stepTheme: 'Classification UEMOA',
            stepTitle: 'Classer BCEAO, SGCI, BNI, BOAD et Djamo',
            paragraphText:
              "Dans l'espace UEMOA/Côte d'Ivoire : la BCEAO est la Banque centrale, la Société Générale CI est une Banque commerciale, la BNI est une Banque d'investissement, la BOAD est une Banque de développement régionale et Djamo est une Néobanque.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'D’après l’exercice 1 de préparation à l’examen, quelle association « institution — catégorie bancaire » est entièrement exacte ?',
              options: [
                'BOAD = Néobanque ; Djamo = Banque centrale',
                'BCEAO = Banque centrale ; SGCI = Banque commerciale ; BOAD = Banque de développement ; Djamo = Néobanque',
                'SGCI = Banque de développement ; BCEAO = Banque commerciale',
                'BNI = Néobanque ; BOAD = Banque commerciale de détail',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Chaque institution joue un rôle précis : BCEAO (centrale), SGCI (commerciale), BNI (investissement), BOAD (développement) et Djamo (néobanque).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Crédits',
            stepTheme: 'Exploitation vs Investissement',
            stepTitle: 'Distinguer crédit d’exploitation et crédit d’investissement',
            paragraphText:
              "Un crédit d'exploitation finance les besoins courants du cycle d'activité (achat de stocks, trésorerie, avances clients) sur une durée courte. Un crédit d'investissement finance l'acquisition d'immobilisations durables (machines, immeubles, flotte) sur moyen ou long terme.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le prêt de 10 millions FCFA accordé au commerçant de l’exercice 4 pour acheter ses stocks est-il un crédit d’exploitation ?',
              options: [
                'Parce que son taux d’intérêt est de 6 %',
                'Parce qu’il sert à construire une nouvelle usine sur 15 ans',
                'Parce qu’il finance le cycle d’activité courant (stocks/trésorerie) plutôt qu’une immobilisation durable',
                'Parce qu’il est accordé par la BCEAO',
              ],
              correctAnswerIndex: 2,
              explanation:
                'C’est la destination économique des fonds (financement des stocks/besoin en fonds de roulement) qui définit le crédit d’exploitation.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Coût d’un crédit',
            stepTitle: 'Calculer les intérêts annuels et le total remboursé',
            paragraphText:
              "Pour un crédit de 10 000 000 FCFA à 6 % sur 2 ans, l'intérêt annuel vaut 10 000 000 × 0,06 = 600 000 FCFA, soit 1 200 000 FCFA d'intérêts totaux et 11 200 000 FCFA remboursés au total.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Un commerçant emprunte 10 millions FCFA à 6 % par an sur 2 ans. Quels sont les intérêts annuels et le montant total remboursé ?',
              options: [
                '600 000 FCFA/an et 11 200 000 FCFA au total',
                '600 000 FCFA/an et 10 600 000 FCFA au total',
                '1 200 000 FCFA/an et 12 400 000 FCFA au total',
                '300 000 FCFA/an et 10 600 000 FCFA au total',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Intérêt annuel = 10 M × 6 % = 600 000 FCFA ; sur 2 ans = 1 200 000 FCFA ; total remboursé = 10 M + 1,2 M = 11 200 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Produits',
            stepTheme: 'Comptes bancaires',
            stepTitle: 'Dépôt à vue (compte courant) vs dépôt à terme',
            paragraphText:
              "Le compte courant (dépôt à vue) permet des retraits et paiements immédiats à tout moment (en général non rémunéré). Le compte d'épargne et le dépôt à terme bloquent ou stabilisent les fonds en échange d'une rémunération par intérêts.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle est la particularité d’un « dépôt à terme » par rapport à un compte courant (dépôt à vue) ?',
              options: [
                'Il ne peut être ouvert que par une banque centrale',
                'Il ne rapporte jamais d’intérêts',
                'Il sert exclusivement aux paiements par chèque au quotidien',
                'Les fonds y sont bloqués jusqu’à une échéance convenue en échange d’une rémunération par intérêts',
              ],
              correctAnswerIndex: 3,
              explanation:
                'En contrepartie du blocage temporaire des liquidités jusqu’à l’échéance, la banque verse un taux d’intérêt plus avantageux.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Digital',
            stepTheme: 'Néobanques',
            stepTitle: 'Modèle des néobanques comme Djamo en Côte d’Ivoire',
            paragraphText:
              "Les néobanques (comme Djamo en Côte d'Ivoire) s'appuient sur des applications mobiles sans réseau d'agences physiques lourdes pour offrir des comptes et cartes Visa accessibles en quelques minutes, dynamisant la bancarisation des jeunes et des étudiants.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quel avantage principal explique le succès rapide des néobanques (comme Djamo) auprès des jeunes en Côte d’Ivoire ?',
              options: [
                'L’obligation de déposer un minimum de 50 millions FCFA en agence',
                'L’ouverture rapide 100 % mobile, l’absence d’agences coûteuses et des frais réduits',
                'Le droit d’émettre elles-mêmes la monnaie fiduciaire de l’UEMOA',
                'L’interdiction des paiements en ligne internationaux',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les néobanques combinent parcours 100 % mobile, faibles frais de structure et intégration au mobile money.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : GESTION BANCAIRE, PERFORMANCE ET RISQUES BANCAIRES
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch2',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Gestion bancaire, performance financière et risques',
    summary:
      "Calculer la marge d'intermédiation, le PNB, le ROA, le ROE, le coefficient d'exploitation et le ratio NPL, et maîtriser la gestion des risques bancaires et cyber.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p1',
        order: 1,
        title: "Marge d'intermédiation et Produit Net Bancaire",
        summary:
          "Calculer produits d'intérêts, charges d'intérêts et marge d'intermédiation, et comprendre la structure des revenus bancaires (PNB).",
        conceptExplanation:
          "La rentabilité d'une banque repose sur deux grandes familles de revenus qui composent son Produit Net Bancaire (PNB, équivalent de la valeur ajoutée bancaire) :\n\n1. La marge d'intermédiation (ou marge nette d'intérêts) : différence entre les produits d'intérêts reçus sur les crédits distribués et les charges d'intérêts versées sur les dépôts rémunérés et emprunts :\n- Produits d'intérêts = Encours de crédits × Taux moyen des crédits ;\n- Charges d'intérêts = Encours de dépôts rémunérés × Taux moyen des dépôts ;\n- Marge d'intermédiation = Produits d'intérêts − Charges d'intérêts.\n\n2. Les revenus hors intérêts (commissions et activités de marché) : frais de tenue de compte, commissions sur virements/cartes/changes, gestion de patrimoine, courtage et plus-values sur titres.\nAinsi : PNB = Marge d'intermédiation + Commissions nettes + Résultats des opérations de marché.\nDans un contexte de concurrence accrue sur les taux, les banques diversifient de plus en plus leurs revenus vers les commissions et services numériques.",
        keyRule:
          "Marge d'intermédiation = Produits d'intérêts (Crédits × taux créditeur) − Charges d'intérêts (Dépôts × taux débiteur). Et PNB = Marge d'intermédiation + Commissions nettes + Opérations financières.",
        formulas: [
          {
            name: 'Marge d’intermédiation bancaire',
            formula: 'Marge d’intermédiation = (Crédits × i_crédit) − (Dépôts × i_dépôt)',
            note: 'Rémunère l’activité traditionnelle de transformation dépôts → crédits.',
          },
          {
            name: 'Produit Net Bancaire (PNB)',
            formula: 'PNB = Marge nette d’intérêts + Commissions nettes + Revenus de marché',
            note: 'Indicateur central du chiffre d’affaires net / richesse créée par la banque.',
          },
        ],
        workedExample: {
          title: 'Calculer la marge d’intermédiation d’une banque (Exercice 5)',
          statement:
            "Une banque accorde 200 milliards FCFA de crédits au taux moyen de 8 % et collecte 150 milliards FCFA de dépôts rémunérés à 3 %. Calculez les produits d'intérêts, les charges d'intérêts et la marge d'intermédiation.",
          methodSteps: [
            'Produits d’intérêts = 200 × 8 % = 16 milliards FCFA.',
            'Charges d’intérêts = 150 × 3 % = 4,5 milliards FCFA.',
            'Marge d’intermédiation = 16 − 4,5 = 11,5 milliards FCFA.',
          ],
          conclusion:
            'La banque dégage une marge d’intermédiation positive de 11,5 milliards FCFA qui alimente son Produit Net Bancaire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Marge',
            stepTheme: 'Intermédiation',
            stepTitle: "Définition de la marge d'intermédiation",
            paragraphText:
              "La marge d'intermédiation (marge nette d'intérêts) mesure le gain brut dégagé par la banque sur son activité de collecte et de prêt : c'est la différence entre les intérêts perçus sur les crédits et les intérêts payés sur les dépôts et refinancements.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Comment se calcule la marge d’intermédiation d’une banque commerciale ?',
              options: [
                'Produits d’intérêts + Charges d’intérêts',
                'Produits d’intérêts reçus sur crédits − Charges d’intérêts versées sur dépôts/emprunts',
                'Total des dépôts − Total des crédits',
                'Résultat net / Fonds propres',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La marge d’intermédiation est la différence entre intérêts encaissés (produits) et intérêts versés (charges).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Calcul numérique',
            stepTitle: 'Calculer produits, charges et marge d’intermédiation',
            paragraphText:
              "Dans l'exercice 5 : 200 Mds de crédits à 8 % rapportent 16 Mds ; 150 Mds de dépôts à 3 % coûtent 4,5 Mds ; la marge d'intermédiation est donc 16 − 4,5 = 11,5 Mds FCFA.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Une banque accorde 100 milliards FCFA de crédits à 9 % et rémunère 80 milliards FCFA de dépôts à 2,5 %. Quelle est sa marge d’intermédiation ?',
              options: [
                '11 milliards FCFA',
                '6,5 milliards FCFA',
                '7 milliards FCFA',
                '9 milliards FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Produits = 100 × 9 % = 9 Mds ; Charges = 80 × 2,5 % = 2 Mds ; Marge = 9 − 2 = 7 milliards FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'PNB',
            stepTheme: 'Revenus bancaires',
            stepTitle: 'Composition du Produit Net Bancaire (PNB)',
            paragraphText:
              "Le Produit Net Bancaire (PNB) est l'indicateur phare de l'activité bancaire (analogue à la valeur ajoutée). Il additionne la marge d'intermédiation, les commissions nettes (tenue de compte, cartes, virements, change) et les gains sur opérations de marché.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quel agrégat comptable mesure la richesse nette (équivalent de la valeur ajoutée) créée par l’ensemble des activités d’une banque ?',
              options: [
                'Le Produit Net Bancaire (PNB)',
                'Le Taux de Réserves Obligatoires',
                'Le Ratio NPL',
                'Le Produit National Brut (PNB macroéconomique)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En gestion bancaire, PNB signifie Produit Net Bancaire : marge nette d’intérêts + commissions nettes + opérations financières.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Stratégie',
            stepTheme: 'Commissions',
            stepTitle: 'Pourquoi les banques développent-elles les revenus de commissions ?',
            paragraphText:
              "Les commissions (frais de cartes, virements, banque digitale, bancassurance) offrent des revenus récurrents moins sensibles aux variations des taux d'intérêt et sans consommation directe de fonds propres réglementaires liés au risque de crédit.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Lequel des éléments suivants constitue un revenu de « commission » (hors intérêts) pour une banque ?',
              options: [
                'Les intérêts sur un crédit immobilier de 15 ans',
                'Les intérêts payés aux épargnants sur leur compte bloqué',
                'Le remboursement du capital d’un emprunt par un client',
                'Les frais facturés sur un virement international, une carte Visa ou une opération de change',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les commissions rémunèrent les prestations de services bancaires et de paiement indépendamment du taux d’intérêt d’un prêt.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'PNB vs Résultat net',
            stepTitle: 'Ne pas confondre PNB et Résultat Net',
            paragraphText:
              "Attention ! Le PNB n'est pas le bénéfice final : pour passer du PNB au Résultat Net, il faut encore soustraire les frais généraux (charges d'exploitation : salaires, loyers, IT), le coût du risque (provisions pour créances douteuses) et l'impôt sur les sociétés.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Si une banque réalise un PNB de 80 Mds FCFA, supporte 20 Mds de charges d’exploitation, 15 Mds de provisions/coût du risque et 25 Mds d’autres charges/impôts, quel est son Résultat Net ?',
              options: [
                '80 milliards FCFA',
                '20 milliards FCFA',
                '60 milliards FCFA',
                '140 milliards FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Résultat Net = PNB − Charges d’exploitation − Coût du risque − Autres charges/Impôts = 80 − 20 − 15 − 25 = 20 milliards FCFA.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p2',
        order: 2,
        title: "Indicateurs de performance (ROA, ROE, Coefficient d'exploitation) et NPL",
        summary:
          "Calculer et interpréter les quatre grands ratios de gestion bancaire issus des exercices d'examen : ROA, ROE, Coefficient d'exploitation et taux de créances douteuses (NPL ratio).",
        conceptExplanation:
          "La performance financière et la qualité du portefeuille d'une banque s'évaluent à l'aide de quatre ratios incontournables (Exercices 6 et 7) :\n\n1. ROA (Return On Assets — Rentabilité des actifs) : ROA = (Résultat net / Total actif) × 100. Il mesure l'efficacité avec laquelle la banque utilise l'ensemble de son bilan pour générer du profit (en banque, un ROA > 1 % est généralement satisfaisant).\n2. ROE (Return On Equity — Rentabilité des fonds propres) : ROE = (Résultat net / Fonds propres) × 100. Il mesure le rendement obtenu par les actionnaires (grâce à l'effet de levier bancaire, le ROE est nettement supérieur au ROA).\n3. Coefficient d'exploitation (Cost-to-Income Ratio) : Coeff = (Charges d'exploitation / PNB) × 100. Il indique quelle part du PNB est absorbée par les frais de fonctionnement : PLUS IL EST FAIBLE, plus la banque est efficiente (idéalement < 50-60 %).\n4. Ratio de créances douteuses (NPL ratio — Non-Performing Loans) : NPL = (Créances douteuses / Encours total des crédits) × 100. Un NPL élevé menace la rentabilité (hausse des provisions), la liquidité et la solvabilité de la banque.",
        keyRule:
          "ROA = RN/Actif (efficience du bilan) ; ROE = RN/Fonds propres (rentabilité actionnaires) ; Coeff d'exploitation = Charges/PNB (plus il est BAS, mieux c'est !) ; NPL = Créances douteuses/Crédits totaux (plus il est BAS, meilleure est la qualité des actifs).",
        formulas: [
          {
            name: 'ROA et ROE',
            formula: 'ROA = (Résultat net / Total actif) × 100   |   ROE = (Résultat net / Fonds propres) × 100',
            note: 'Plus ils sont élevés, plus la banque est rentable.',
          },
          {
            name: 'Coefficient d’exploitation et NPL Ratio',
            formula: 'Coeff. expl. = (Charges d’exploitation / PNB) × 100   |   NPL = (Créances douteuses / Encours crédits) × 100',
            note: 'Ces deux ratios doivent être aussi faibles que possible.',
          },
        ],
        workedExample: {
          title: 'Diagnostic complet de performance et qualité des actifs',
          statement:
            "A) Données 2024 : Résultat net = 20 Mds, Fonds propres = 55 Mds, Total actif = 600 Mds, Charges d'exploitation = 20 Mds, PNB = 80 Mds. Calculez ROA, ROE et coefficient d'exploitation.\nB) Encours total crédits = 400 Mds, créances douteuses = 20 Mds. Calculez le ratio NPL et proposez 2 solutions.",
          methodSteps: [
            'ROA = (20 / 600) × 100 ≈ 3,33 % (très bonne rentabilité des actifs, bien au-dessus de la référence de 1 %).',
            'ROE = (20 / 55) × 100 ≈ 36,36 % (excellente rentabilité des capitaux propres pour les actionnaires).',
            'Coefficient d’exploitation = (20 / 80) × 100 = 25 % (efficacité opérationnelle exceptionnelle : seulement 25 % du PNB est absorbé par les frais généraux).',
            'Ratio NPL = (20 / 400) × 100 = 5 % (niveau modéré à surveiller).',
            'Solutions pour réduire le NPL : renforcer l’analyse crédit / scoring avant octroi, exiger des garanties/sûretés solides, mettre en place un recouvrement proactif et diversifier le portefeuille.',
          ],
          conclusion:
            "La banque affiche une très forte rentabilité (ROA 3,33 %, ROE 36,36 %) et une excellente maîtrise des coûts (25 %), tout en devant maintenir son NPL sous contrôle.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'ROA',
            stepTitle: 'Calculer et interpréter le ROA (Return On Assets)',
            paragraphText:
              "Le ROA = (Résultat net / Total actif) × 100 mesure combien de FCFA de bénéfice net sont générés par tranche de 100 FCFA d'actifs totaux. Pour RN = 20 Mds et Actif = 600 Mds, ROA = 3,33 %.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Une banque affiche un résultat net de 15 milliards FCFA pour un total actif de 750 milliards FCFA. Quelle est la valeur de son ROA ?',
              options: ['2 %', '5 %', '20 %', '0,5 %'],
              correctAnswerIndex: 0,
              explanation:
                'ROA = (15 / 750) × 100 = 2 %.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'ROE',
            stepTitle: 'Calculer et interpréter le ROE (Return On Equity)',
            paragraphText:
              "Le ROE = (Résultat net / Fonds propres) × 100 mesure la rentabilité financière des capitaux apportés par les actionnaires. Dans l'exercice 6 (RN = 20 Mds, Fonds propres = 55 Mds), ROE ≈ 36,36 %.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Dans l’exercice 6 (Résultat net = 20 Mds, Fonds propres = 55 Mds, Total actif = 600 Mds), quelles sont les valeurs arrondies du ROA et du ROE ?',
              options: [
                'ROA = 36,36 % et ROE = 3,33 %',
                'ROA = 3,33 % et ROE = 36,36 %',
                'ROA = 25 % et ROE = 80 %',
                'ROA = 10 % et ROE = 20 %',
              ],
              correctAnswerIndex: 1,
              explanation:
                'ROA = 20/600 = 3,33 % et ROE = 20/55 = 36,36 %. Le ROE est toujours bien plus grand que le ROA car les fonds propres ne représentent qu’une fraction du bilan.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Coefficient d’exploitation',
            stepTitle: 'Interpréter correctement le sens du coefficient d’exploitation',
            paragraphText:
              "Attention au sens de lecture ! Le coefficient d'exploitation = (Charges d'exploitation / PNB) × 100 mesure la part des revenus absorbée par les coûts de fonctionnement. Contrairement au ROA/ROE, PLUS il est BAS, plus la banque est performante !",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'La banque A a un coefficient d’exploitation de 42 % et la banque B de 78 %. Laquelle maîtrise le mieux ses coûts opérationnels ?',
              options: [
                'La banque B car 78 % est plus élevé que 42 %',
                'Les deux sont strictement identiques',
                'La banque A car elle ne consomme que 42 % de son PNB en charges d’exploitation',
                'Aucune des deux car le coefficient doit dépasser 100 %',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un coefficient d’exploitation faible (42 %) indique une grande efficacité opérationnelle et laisse 58 % du PNB avant provisions et impôts.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Qualité des actifs (NPL)',
            stepTitle: 'Calculer le taux de créances douteuses (NPL ratio)',
            paragraphText:
              "Le NPL ratio (Non-Performing Loans) rapporte les créances douteuses (en impayé durable) à l'encours total de crédits. Dans l'exercice 7 (20 Mds / 400 Mds), NPL = 5 %.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Sur un encours total de crédits de 400 milliards FCFA, 20 milliards FCFA sont classés en créances douteuses. Quel est le ratio NPL ?',
              options: ['20 %', '0,5 %', '2 %', '5 %'],
              correctAnswerIndex: 3,
              explanation:
                'NPL = (20 / 400) × 100 = 5 %.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Risques NPL',
            stepTheme: 'Conséquences & Solutions',
            stepTitle: 'Dangers d’un NPL élevé et leviers d’amélioration',
            paragraphText:
              "Un taux NPL élevé oblige la banque à passer de lourdes provisions (chute du résultat net), immobilise sa trésorerie (risque de liquidité) et érode ses fonds propres (risque d'insolvabilité). On le réduit via le scoring crédit, des garanties adaptées, la diversification sectorielle et un recouvrement rapide.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Quel risque direct entraîne une forte hausse du ratio de créances douteuses (NPL) pour une banque ?',
              options: [
                'Une augmentation automatique du ROE et des liquidités disponibles',
                'Une baisse de la rentabilité (provisions), des tensions de liquidité et une menace sur la solvabilité',
                'Une baisse du taux de réserves obligatoires de la BCEAO',
                'L’annulation des dépôts de la clientèle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les crédits non remboursés nécessitent des provisions qui amputent le bénéfice et réduisent les rentrées de trésorerie.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_banque_ch2_p3',
        order: 3,
        title: 'Les risques bancaires et la cybersécurité à l’ère numérique',
        summary:
          "Identifier les 4 grands risques bancaires (crédit, liquidité, marché, opérationnel), les outils de maîtrise des risques et les cybermenaces liées aux innovations digitales.",
        conceptExplanation:
          "Exercer le métier de banque consiste fondamentalement à mesurer, tarifer et maîtriser quatre grandes catégories de risques (Chapitre 5) :\n1. Risque de crédit (ou de contrepartie) : risque qu'un emprunteur ne rembourse pas tout ou partie de son prêt à l'échéance (mesuré par le NPL).\n2. Risque de liquidité : risque que la banque ne puisse pas honorer immédiatement les retraits de ses déposants ou ses dettes à court terme (transformation de dépôts courts en prêts longs).\n3. Risque de marché : risque de perte liée aux variations défavorables des prix de marché (taux d'intérêt, taux de change, cours boursiers).\n4. Risque opérationnel : risque de perte résultant de défaillances des processus internes, d'erreurs humaines, de fraudes, de pannes informatiques ou d'événements externes.\n\nPour les maîtriser, les banques mobilisent des outils dédiés : notation/scoring des emprunteurs, exigences de garanties/sûretés, diversification des portefeuilles, provisions, ratios prudentiels (solvabilité, liquidité) et contrôle interne.\nEnfin, la digitalisation (mobile banking, API/open banking, cloud) amplifie fortement les risques cyber : phishing, ransomwares, piratage de comptes, usurpation d'identité et indisponibilité des systèmes, imposant authentification forte, chiffrement et plans de continuité d'activité.",
        keyRule:
          "Retiens les 4 familles de risques bancaires : Crédit (non-remboursement), Liquidité (incapacité de faire face aux retraits immédiats), Marché (taux/change/bourse) et Opérationnel (fraudes, pannes, cyberattaques).",
        formulas: [
          {
            name: 'Cartographie des 4 risques bancaires majeurs',
            formula: 'Risques bancaires = Crédit + Liquidité + Marché + Opérationnel (dont Cyber)',
            note: 'Encadrés par les accords de Bâle et les normes prudentielles de la BCEAO / Commission Bancaire.',
          },
        ],
        workedExample: {
          title: 'Qualifier quatre incidents bancaires réels selon la typologie des risques',
          statement:
            "Une banque subit : (1) la faillite d'un gros client industriel incapable de rembourser son prêt ; (2) une ruée de déposants dépassant sa trésorerie disponible ; (3) une perte sur son portefeuille d'obligations suite à une hausse des taux ; (4) un ransomware paralysant son application mobile. Qualifiez chaque risque.",
          methodSteps: [
            '(1) Défaut de remboursement d’un emprunteur ⇒ Risque de crédit (ou de contrepartie).',
            '(2) Incapacité de servir immédiatement les retraits de dépôts ⇒ Risque de liquidité.',
            '(3) Perte due à la variation des taux d’intérêt sur des titres ⇒ Risque de marché.',
            '(4) Cyberattaque bloquant le système d’information ⇒ Risque opérationnel (et cyber-risque).',
          ],
          conclusion:
            'Une banque peut être solvable sur le papier mais chuter par manque de liquidité ou par une cyberattaque mal maîtrisée : les quatre risques doivent être gérés simultanément.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Crédit & Liquidité',
            stepTheme: 'Risques de bilan',
            stepTitle: 'Distinguer risque de crédit et risque de liquidité',
            paragraphText:
              "Le risque de crédit correspond au défaut de remboursement d'un emprunteur. Le risque de liquidité survient lorsque la banque manque de trésorerie immédiate pour honorer les retraits des déposants ou ses engagements à court terme, car ses dépôts sont courts et ses prêts longs.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Une banque possède des créances solides à 10 ans mais ne dispose pas assez de trésorerie immédiate pour payer un retrait massif de ses déposants aujourd’hui. À quel risque est-elle confrontée ?',
              options: [
                'Le risque de liquidité',
                'Le risque de change',
                'Le risque climatique',
                'Le risque de sur-capitalisation',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’incapacité temporaire à convertir rapidement ses actifs en cash pour honorer les demandes de retrait immédiat définit le risque de liquidité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Marché & Opérationnel',
            stepTheme: 'Autres risques',
            stepTitle: 'Risque de marché et risque opérationnel',
            paragraphText:
              "Le risque de marché provient des fluctuations de taux d'intérêt, de taux de change ou des marchés financiers. Le risque opérationnel couvre les pertes dues aux pannes informatiques, erreurs humaines, fraudes internes/externes ou défaillances de procédures.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Une perte financière causée par une erreur de saisie d’un employé ou une panne majeure du serveur de virements relève de quel type de risque bancaire ?',
              options: [
                'Le risque de crédit',
                'Le risque opérationnel',
                'Le risque de marché',
                'Le risque souverain',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Erreurs humaines, défaillances techniques, fraudes et pannes systèmes font partie du risque opérationnel.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Outils',
            stepTheme: 'Maîtrise des risques',
            stepTitle: 'Les principaux outils bancaires de gestion du risque de crédit',
            paragraphText:
              "Pour limiter le risque de crédit, les banques s'appuient sur l'analyse financière et le scoring crédit, la prise de garanties (hypothèques, cautions), la diversification des prêts entre secteurs et clients, ainsi que la constitution de provisions.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Pourquoi une banque évite-t-elle de concentrer 80 % de ses crédits sur une seule entreprise ou un seul secteur économique ?',
              options: [
                'Pour réduire ses commissions de tenue de compte',
                'Pour augmenter son coefficient d’exploitation',
                'Pour mutualiser et diversifier le risque de crédit afin qu’une seule crise sectorielle ne menace pas la banque',
                'Parce que les grandes entreprises ne paient jamais d’intérêts',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La diversification du portefeuille de prêts est un outil fondamental de mutualisation et de réduction du risque de concentration.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Cybersécurité',
            stepTheme: 'Innovations numériques',
            stepTitle: 'Nouveaux risques liés à la transformation digitale des banques',
            paragraphText:
              "La généralisation du mobile banking, des cartes en ligne et de l'open banking (API) expose les banques et leurs clients à des menaces cyber accrues : hameçonnage (phishing), rançongiciels (ransomware), vol d'identifiants et fuites de données sensibles.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle mesure renforce directement la cybersécurité d’une application bancaire mobile contre l’usurpation de compte ?',
              options: [
                'Supprimer tous les mots de passe pour accélérer la connexion',
                'Partager publiquement les codes PIN sur les réseaux sociaux',
                'Désactiver toute surveillance des transactions inhabituelles',
                'L’authentification forte (double facteur / biométrie), le chiffrement des données et la détection des fraudes en temps réel',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’authentification forte (2FA/biométrie), le chiffrement et le monitoring anti-fraude sont les piliers de la sécurité bancaire numérique.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Solvabilité vs Liquidité',
            stepTitle: 'Distinguer solvabilité et liquidité',
            paragraphText:
              "La solvabilité mesure la capacité globale de la banque à faire face à ses engagements sur le long terme grâce à ses fonds propres (Actif > Dettes). La liquidité mesure sa capacité à honorer ses paiements à très court terme (trésorerie disponible). Une banque doit respecter les deux simultanément !",
            exercise: {
              id: 'lmd_entd_l1_banque_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quel coussin du passif bancaire absorbe en dernier ressort les pertes exceptionnelles pour garantir la solvabilité d’une banque ?',
              options: [
                'Les dépôts à vue des étudiants',
                'Les fonds propres (capital et réserves)',
                'Les locaux immobiliers à l’actif',
                'Les frais de tenue de compte',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les fonds propres (capital, réserves) jouent le rôle de matelas de sécurité protégeant les déposants contre les pertes sur crédits.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : RÉGULATION UEMOA (BCEAO) ET INCLUSION FINANCIÈRE NUMÉRIQUE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_banque_ch3',
    subjectId: 'lmd_banque',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : BCEAO, régulation UMOA et inclusion financière numérique',
    summary:
      "Comprendre le rôle de la BCEAO, la politique monétaire (taux directeur), la Commission Bancaire UMOA et les leviers d'inclusion financière numérique (microfinance, mobile money, open banking).",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_banque_ch3_p1',
        order: 1,
        title: 'BCEAO, politique monétaire et Commission Bancaire de l’UMOA',
        summary:
          "Missions de la BCEAO, fonctionnement du taux directeur (politique restrictive vs expansionniste) et rôle de supervision de la Commission Bancaire de l'UMOA.",
        conceptExplanation:
          "Dans les 8 États membres de l'UEMOA (dont la Côte d'Ivoire), le système bancaire est encadré par deux institutions majeures :\n\n1. La BCEAO (Banque Centrale des États de l'Afrique de l'Ouest) : institut d'émission du Franc CFA (XOF), elle a pour objectif prioritaire la stabilité des prix (maîtrise de l'inflation), soutient les politiques économiques de l'Union, gère les réserves de change, assure le bon fonctionnement des systèmes de paiement et conduit la politique monétaire à l'aide de ses instruments (taux directeur, taux de réserves obligatoires, opérations d'open market).\n- Politique monétaire restrictive : objectif principal = freiner l'inflation. Effets attendus : renchérissement et ralentissement des crédits bancaires, modération de l'inflation, mais risque de ralentissement de la croissance économique.\n- Politique monétaire expansionniste (baisse du taux directeur) : objectif = relancer le crédit, l'investissement et la croissance en période de ralentissement.\n\n2. La Commission Bancaire de l'UMOA : autorité régionale chargée de la supervision prudentielle et du contrôle (sur pièces et sur place) des banques et établissements financiers ; elle délivre des avis sur les agréments, vérifie les ratios de solvabilité/liquidité et prononce des sanctions (avertissement, blâme, amende, retrait d'agrément) pour protéger les déposants.",
        keyRule:
          "Hausse du taux directeur BCEAO = Politique restrictive ⇒ lutte contre l'inflation ⇒ crédits plus chers et moins nombreux ⇒ baisse de l'inflation mais frein possible sur la croissance.",
        formulas: [
          {
            name: 'Canal de transmission du taux directeur BCEAO',
            formula: '↑ Taux directeur ⇒ ↑ Coût refinancement ⇒ ↓ Crédits ⇒ ↓ Demande & Inflation (et frein croissance)',
            note: 'Effet strictement inverse en cas de baisse du taux directeur (politique expansionniste).',
          },
        ],
        workedExample: {
          title: 'Analyser une hausse du taux directeur de la BCEAO (Exercice 2)',
          statement:
            "La BCEAO décide d'augmenter son taux directeur de 2,75 % à 4 %. Identifiez la nature de cette politique, son objectif principal et son impact attendu sur les crédits bancaires, l'inflation et la croissance.",
          methodSteps: [
            'Nature : augmentation du taux directeur ⇒ Politique monétaire restrictive (resserrement monétaire).',
            'Objectif principal : maîtriser et réduire l’inflation afin de préserver la stabilité des prix et la valeur du Franc CFA.',
            'Impact sur les crédits bancaires : le refinancement des banques coûte plus cher ⇒ hausse des taux des prêts ⇒ diminution de la demande et de l’octroi de crédits.',
            'Impact sur l’inflation : baisse de la demande globale et de la création monétaire ⇒ ralentissement de l’inflation.',
            'Impact sur la croissance : moindre investissement et moindre consommation financés à crédit ⇒ ralentissement à court terme de la croissance.',
          ],
          conclusion:
            'La banque centrale arbitre entre lutte contre l’inflation (stabilité des prix) et soutien à la croissance économique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'BCEAO',
            stepTheme: 'Banque centrale UEMOA',
            stepTitle: 'Missions fondamentales de la BCEAO',
            paragraphText:
              "La BCEAO est la banque centrale commune des 8 pays de l'UEMOA. Elle émet le Franc CFA (XOF), définit la politique monétaire avec pour priorité la stabilité des prix, gère les réserves de change communes et supervise les systèmes de paiement.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quel est l’objectif prioritaire de la politique monétaire conduite par la BCEAO dans la zone UEMOA ?',
              options: [
                'La stabilité des prix (maîtrise de l’inflation)',
                'La distribution directe de crédits immobiliers aux particuliers',
                'La gestion des boutiques de e-commerce',
                'La maximisation des dividendes des banques commerciales',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme toute banque centrale moderne, la mission prioritaire de la BCEAO est la stabilité des prix et de la monnaie.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'Politique restrictive',
            stepTitle: 'Qualifier une hausse du taux directeur (2,75 % → 4 %)',
            paragraphText:
              "Augmenter le taux directeur rend le refinancement bancaire plus coûteux et freine la création monétaire : c'est une politique monétaire restrictive destinée à contenir l'inflation.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Lorsque la BCEAO relève son taux directeur de 2,75 % à 4 %, de quel type de politique monétaire s’agit-il ?',
              options: [
                'Une politique monétaire expansionniste',
                'Une politique monétaire restrictive (lutte contre l’inflation)',
                'Une politique budgétaire de relance fiscale',
                'Une politique de déréglementation totale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le relèvement du taux directeur resserre les conditions de crédit pour freiner les tensions inflationnistes : c’est une politique restrictive.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Transmission',
            stepTheme: 'Effets économiques',
            stepTitle: 'Impact d’une politique restrictive sur crédits, inflation et croissance',
            paragraphText:
              "La hausse du taux directeur se répercute sur les taux pratiqués par les banques commerciales : les crédits bancaires diminuent, les pressions inflationnistes reculent, mais l'investissement et la croissance risquent de ralentir.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quel trio d’impacts attendus résulte d’une hausse marquée du taux directeur de la BCEAO ?',
              options: [
                'Hausse des crédits, hausse de l’inflation, baisse de la croissance',
                'Baisse des crédits, hausse de l’inflation, explosion de la croissance',
                'Baisse des crédits bancaires, modération de l’inflation et ralentissement potentiel de la croissance',
                'Aucun effet sur les crédits ni sur l’inflation',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Des crédits plus chers freinent la demande globale, ce qui calme l’inflation au prix d’un moindre dynamisme de la croissance à court terme.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Supervision',
            stepTheme: 'Commission Bancaire UMOA',
            stepTitle: 'Rôle et pouvoirs de la Commission Bancaire de l’UMOA',
            paragraphText:
              "La Commission Bancaire de l'UMOA assure la surveillance prudentielle (contrôles sur pièces et sur place) des établissements bancaires afin de vérifier le respect des règles de solvabilité/liquidité et de sanctionner les manquements pour protéger les épargnants.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle autorité régionale est spécifiquement chargée du contrôle prudentiel et de la supervision des banques dans la zone UMOA ?',
              options: [
                'La CNUCED',
                'L’Organisation Mondiale du Commerce',
                'La Fédération Internationale des Commerçants',
                'La Commission Bancaire de l’UMOA',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La Commission Bancaire de l’UMOA veille au respect des normes prudentielles et à la solidité financière des banques de l’Union.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Instruments monétaires',
            stepTitle: 'Ne pas confondre politique monétaire (BCEAO) et politique budgétaire (État)',
            paragraphText:
              "La BCEAO agit sur le taux directeur, les réserves obligatoires et la liquidité bancaire (politique monétaire). Les impôts et les dépenses publiques relèvent des États membres (politique budgétaire), jamais de la BCEAO !",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Lequel des instruments suivants appartient réellement à la BCEAO et NON aux ministères des Finances nationaux ?',
              options: [
                'Le taux de TVA sur les produits alimentaires',
                'Le taux directeur et le taux de réserves obligatoires des banques',
                'Le budget de construction des routes nationales',
                'L’impôt sur les salaires des fonctionnaires',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le taux directeur et les réserves obligatoires sont les instruments de politique monétaire de la BCEAO ; impôts et dépenses publiques relèvent du budget des États.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_banque_ch3_p2',
        order: 2,
        title: 'Banques et inclusion financière numérique en Côte d’Ivoire',
        summary:
          "Maîtriser microfinance, mobile money, fintech, open banking et les synergies banque-télécom favorisant l'inclusion financière en Côte d'Ivoire.",
        conceptExplanation:
          "L'inclusion financière désigne l'accès des particuliers (y compris ruraux, jeunes et travailleurs du secteur informel) et des TPE/PME à des services financiers utiles, abordables et sécurisés (paiement, épargne, crédit, assurance).\n\nEn Côte d'Ivoire et dans l'UEMOA, quatre leviers transforment radicalement l'inclusion financière :\n1. La microfinance (SFD — Systèmes Financiers Décentralisés) : offre des microcrédits et produits d'épargne de proximité aux populations exclues du système bancaire traditionnel.\n2. Le Mobile Money (Orange Money, MTN MoMo, Moov Money, Wave) : utilise le téléphone mobile pour les transferts d'argent, paiements marchands, factures et micro-épargne sans nécessiter de compte bancaire classique, faisant de la Côte d'Ivoire un leader ouest-africain de la finance mobile.\n3. Les Fintechs et néobanques (ex. Djamo, agrégateurs de paiement) : innovent sur l'expérience utilisateur, la rapidité et la tarification.\n4. L'Open Banking (banque ouverte) : partage sécurisé des données bancaires et services de paiement via des API (avec consentement du client), favorisant la coopération (bank-to-wallet) entre banques traditionnelles, opérateurs télécoms et fintechs, ainsi que l'interopérabilité impulsée par la BCEAO (plateforme PI-SPI).",
        keyRule:
          "En Côte d'Ivoire, l'inclusion financière numérique repose sur la convergence entre Banques traditionnelles, Microfinance, Mobile Money (Wave, Orange, MTN, Moov) et Open Banking (API / bank-to-wallet).",
        formulas: [
          {
            name: 'Écosystème d’inclusion financière numérique',
            formula: 'Inclusion financière = Banques + Microfinance (SFD) + Mobile Money + Fintechs / Open Banking',
            note: 'S’appuie sur l’interopérabilité des paiements et le lien Bank-to-Wallet.',
          },
        ],
        workedExample: {
          title: 'Concevoir un parcours d’inclusion financière pour un commerçant informel',
          statement:
            "Une commerçante du marché d'Adjamé n'a jamais eu de compte bancaire traditionnel mais encaisse ses clientes par Mobile Money. Comment les innovations bancaires numériques peuvent-elles lui ouvrir l'accès au crédit formel ?",
          methodSteps: [
            'Collecte d’historique transactionnel : ses encaissements Mobile Money créent une trace numérique fiable de son chiffre d’affaires (données alternatives).',
            'Partenariat Bank-to-Wallet / Open Banking : une banque ou institution de microfinance utilise ces données (avec son accord) pour calculer un score de solvabilité (credit scoring IA).',
            'Octroi d’un microcrédit digital : les fonds sont débloqués instantanément sur son portefeuille mobile pour financer ses stocks, avec remboursement automatisé.',
          ],
          conclusion:
            "Le couplage Mobile Money + données transactionnelles + Open Banking lève la barrière de l'absence de fiches de paie et intègre le secteur informel dans le financement formel.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Inclusion',
            stepTheme: 'Accès financier',
            stepTitle: "Qu'est-ce que l'inclusion financière numérique ?",
            paragraphText:
              "L'inclusion financière numérique consiste à utiliser les technologies digitales (téléphone mobile, applications, API) pour donner aux populations non bancarisées et aux TPE un accès simple, rapide et abordable aux paiements, à l'épargne, au crédit et à l'assurance.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est l’objectif principal de l’inclusion financière numérique en Côte d’Ivoire et dans l’UEMOA ?',
              options: [
                'Réserver les services bancaires uniquement aux grandes multinationales',
                'Permettre aux populations non bancarisées et TPE d’accéder à des services financiers abordables via le digital',
                'Supprimer les comptes d’épargne et le microcrédit',
                'Augmenter les frais bancaires sur les petits transferts',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le numérique abaisse les coûts de distribution et d’accès, intégrant les populations rurales, jeunes et informelles dans le circuit financier.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Open Banking',
            stepTheme: 'API bancaires',
            stepTitle: 'Principe de l’Open Banking (banque ouverte)',
            paragraphText:
              "L'Open Banking consiste pour les banques à ouvrir de manière sécurisée l'accès à certaines données et fonctionnalités de paiement à des acteurs tiers agréés (fintechs, agrégateurs) via des interfaces API, uniquement avec le consentement explicite du client.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Sur quel mécanisme technique et juridique repose principalement l’Open Banking ?',
              options: [
                'La publication libre des mots de passe bancaires sur Internet',
                'La fermeture de toutes les banques commerciales',
                'Le partage sécurisé de données et services via des API avec le consentement du client',
                'Le paiement exclusif en billets de banque physiques',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’Open Banking repose sur des API sécurisées et le consentement du client pour stimuler l’innovation et les services personnalisés.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Mobile Money',
            stepTheme: 'Cas Côte d’Ivoire',
            stepTitle: 'Rôle moteur du Mobile Money et du Bank-to-Wallet',
            paragraphText:
              "En Côte d'Ivoire, le Mobile Money (Orange Money, MTN MoMo, Moov Money, Wave) a massivement devancé la bancarisation classique. Les services « Bank-to-Wallet » relient désormais comptes bancaires et portefeuilles mobiles pour transférer des fonds instantanément.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Que permet concrètement une passerelle « Bank-to-Wallet » déployée en Côte d’Ivoire ?',
              options: [
                'Transférer directement de l’argent entre un compte bancaire classique et un portefeuille Mobile Money',
                'Imprimer des billets de Franc CFA à domicile',
                'Éviter toute réglementation de la BCEAO',
                'Remplacer un prêt immobilier par un abonnement vidéo',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le service Bank-to-Wallet crée un pont fluide entre la banque traditionnelle et le porte-monnaie électronique mobile.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Microfinance',
            stepTheme: 'SFD',
            stepTitle: 'Complémentarité entre banques, microfinance et fintechs',
            paragraphText:
              "La microfinance (SFD) cible les micro-entrepreneurs et populations à faibles revenus souvent dépourvus de garanties bancaires classiques. En s'alliant aux fintechs et au mobile money, les banques et SFD réduisent leurs coûts d'agence et accélèrent le décaissement des microcrédits.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle clientèle est historiquement la cible prioritaire des institutions de microfinance ?',
              options: [
                'Les gouvernements des pays du G7',
                'Les bourses internationales de matières premières',
                'Les grandes multinationales cotées en bourse',
                'Les micro-entrepreneurs, artisans et ménages à faibles revenus exclus du crédit bancaire classique',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La microfinance comble le déficit d’accès au crédit et à l’épargne des petits acteurs économiques sans garanties traditionnelles.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Enjeu',
            stepTheme: 'Innovation & Sécurité',
            stepTitle: 'Conjuguer innovation digitale et conformité réglementaire',
            paragraphText:
              "En finance numérique, la transformation digitale ne dispense jamais du respect de la réglementation (BCEAO, lutte contre le blanchiment LBC/FT, protection des données et cybersécurité) : la confiance reste le socle absolu de toute finance numérique.",
            exercise: {
              id: 'lmd_entd_l1_banque_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle double exigence les banques et fintechs doivent-elles impérativement concilier dans la transformation digitale ?',
              options: [
                'Croissance rapide et suppression de tout contrôle de la BCEAO',
                'Innovation digitale et sécurité / respect du cadre réglementaire (BCEAO, Commission Bancaire)',
                'Hausse des frais cachés et abandon des services mobiles',
                'Fermeture des API et refus de l’inclusion financière',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans sécurité cyber ni conformité réglementaire UEMOA, la confiance des usagers s’effondre et menace la stabilité financière.',
            },
          },
        ],
      }),
    ],
  },
];
