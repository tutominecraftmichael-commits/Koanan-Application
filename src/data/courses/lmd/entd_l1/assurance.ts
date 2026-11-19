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

export const ASSURANCE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : INTRODUCTION À L'ASSURANCE ET PRINCIPES TECHNIQUES ACTUARIELS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch1',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: "Chapitre 1 : Introduction à l'assurance et principes techniques actuariels",
    summary:
      "Maîtriser le rôle économique de l'assurance (2 % de pénétration en CI), les critères du risque assurable, la mutualisation (espérance, écart-type, Poisson) et le calcul des primes (TD1).",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC — Enseignant KADJO Assandé Pierre — Cours d’Assurance (Ch. 1 & 2) & TD N°1',
    points: [
      makePoint({
        id: 'lmd_entd_l1_assurance_ch1_p1',
        order: 1,
        title: "Définition, rôle, fonctions de l'assurance et développement économique",
        summary:
          "Contrat d'assurance (assuré, assureur, prime, risque), 4 rôles, 3 fonctions et analyse du faible taux de pénétration en Côte d'Ivoire (2 % — OHCA 2024, TD1 Ex. 3).",
        conceptExplanation:
          "L'assurance est un contrat par lequel une personne (l'assuré) se protège contre la survenance d'un risque incertain (maladie, accident, incendie, décès...) en versant une prime ou cotisation régulière à une autre partie (l'assureur), qui s'engage à indemniser en cas de sinistre.\n\n1. Rôles majeurs de l'assurance : sécurisation des personnes et des biens, stabilité sociale, facilitation de la prise de risque entrepreneuriale et mobilisation de ressources financières à long terme.\n2. Trois fonctions économiques : mécanisme de prévoyance sociale, outil de crédit (garantie pour emprunter) et dispositif d'épargne (notamment en assurance vie).\n\n3. Assurance et développement économique : selon l'OHCA (2024), seulement 2 % de la population est assurée en Côte d'Ivoire (soit environ 580 000 personnes sur 29 millions d'habitants — TD1 Ex. 3). Or, l'assurance stimule la croissance (réduction de l'incertitude, mobilisation de l'épargne pour le marché financier et les infrastructures), renforce la stabilité sociale et macroéconomique (résilience des ménages et entreprises) et soutient la formalisation et l'inclusion financière en zone UEMOA.",
        keyRule:
          "Retiens le chiffre clé du cours : 2 % seulement de la population est assurée en Côte d'Ivoire (OHCA, 2024), alors que l'assurance est à la fois outil de prévoyance, de crédit, d'épargne et de financement long terme.",
        formulas: [
          {
            name: 'Population assurée en Côte d’Ivoire (OHCA 2024 — TD1 Ex. 3)',
            formula: 'Assurés = 2 % × 29 000 000 = 580 000 personnes',
            note: 'Révèle un potentiel immense d’inclusion assurantielle via la micro-assurance et le mobile.',
          },
        ],
        workedExample: {
          title: 'Analyser la faible pénétration de l’assurance en Côte d’Ivoire (TD1 Ex. 3)',
          statement:
            "En Côte d'Ivoire, seul 2 % de la population (sur 29 millions d'habitants) est assuré (TD1 Ex. 3). Calculez le nombre d'assurés, citez deux conséquences économiques et proposez trois leviers d'amélioration.",
          methodSteps: [
            'Nombre de personnes assurées = 29 000 000 × 2 % = 580 000 personnes.',
            'Conséquences économiques : forte vulnérabilité des ménages et PME face aux chocs (maladie, incendie), faible mobilisation d’épargne longue pour financer les infrastructures et frein à l’investissement privé.',
            'Trois leviers d’amélioration : (1) éducation financière et transparence sur l’indemnisation pour restaurer la confiance ; (2) micro-assurance abordable adaptée au secteur informel ; (3) distribution digitale couplée au Mobile Money.',
          ],
          conclusion:
            "Relever le taux de pénétration au-delà de 2 % est un levier majeur de résilience sociale et de financement de l'économie ivoirienne.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'Contrat d’assurance',
            stepTitle: 'Les éléments constitutifs du contrat d’assurance',
            paragraphText:
              "Un contrat d'assurance lie un assuré (preneur) et un assureur : l'assuré verse une prime (ou cotisation) afin de se protéger contre les conséquences financières d'un risque incertain (maladie, accident, incendie, décès).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Comment appelle-t-on la somme régulière versée par l’assuré à une compagnie d’assurance commerciale en échange de sa couverture ?',
              options: [
                'Le dividende',
                'La prime d’assurance (ou cotisation)',
                'La franchise obligatoire',
                'Le taux directeur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La prime (ou cotisation pour une mutuelle) est le prix payé par le preneur d’assurance pour transférer son risque financier à l’assureur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Fonctions',
            stepTheme: '3 fonctions économiques',
            stepTitle: 'Prévoyance sociale, outil de crédit et dispositif d’épargne',
            paragraphText:
              "Le cours identifie trois grandes fonctions de l'assurance : mécanisme de prévoyance sociale (protection des familles), outil de crédit (elle rassure les banques qui exigent une assurance emprunteur) et dispositif d'épargne (capitalisation en assurance vie).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Pourquoi le cours classe-t-il l’assurance comme un « outil de crédit » ?',
              options: [
                'Parce que les compagnies d’assurance impriment la monnaie',
                'Parce que tout assuré reçoit automatiquement un prêt sans intérêt',
                'Parce que l’assurance sécurise les emprunts (ex. assurance décès emprunteur), facilitant l’accès au crédit bancaire',
                'Parce que les primes remplacent les impôts sur le revenu',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En garantissant le remboursement d’un prêt en cas de décès ou d’invalidité, l’assurance lève un obstacle majeur à l’octroi de crédit.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Rôle économique',
            stepTheme: 'Croissance & Stabilité',
            stepTitle: 'Contribution de l’assurance à la croissance et au marché financier',
            paragraphText:
              "En réduisant l'incertitude, l'assurance encourage les entrepreneurs à investir et prendre des risques productifs. Les primes collectées sont placées sur les marchés financiers, mobilisant des capitaux longs pour financer entreprises et infrastructures.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quel rôle macroéconomique jouent les primes massives collectées par les compagnies d’assurance dans le financement de l’économie ?',
              options: [
                'Elles mobilisent une épargne longue orientée vers les marchés financiers et le financement des infrastructures',
                'Elles restent obligatoirement détruites dans un coffre sans être placées',
                'Elles empêchent les entrepreneurs de prendre des risques économiques',
                'Elles augmentent l’incertitude des ménages',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les assureurs sont des investisseurs institutionnels majeurs qui canalisent l’épargne vers les obligations d’État, infrastructures et entreprises.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Chiffre CI (TD1)',
            stepTheme: 'Pénétration en Côte d’Ivoire',
            stepTitle: 'Mesurer la couverture assurantielle en Côte d’Ivoire (OHCA 2024)',
            paragraphText:
              "Selon l'OHCA (2024) cité dans le cours et le TD1 (Ex. 3), seuls 2 % de la population ivoirienne sont assurés, soit 580 000 personnes sur 29 millions d'habitants.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Selon l’exercice 3 du TD1 (taux de couverture de 2 % sur une population de 29 millions d’habitants en Côte d’Ivoire), combien de personnes sont assurées ?',
              options: [
                '290 000 personnes',
                '2 900 000 personnes',
                '5 800 000 personnes',
                '580 000 personnes',
              ],
              correctAnswerIndex: 3,
              explanation:
                '29 000 000 × (2 / 100) = 580 000 personnes assurées.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'UEMOA',
            stepTheme: 'Développement & Inclusion',
            stepTitle: 'Impact spécifique de l’assurance dans les pays en développement',
            paragraphText:
              "En zone UEMOA, développer l'assurance ne sert pas qu'aux grandes entreprises : cela soutient la formalisation des PME, favorise l'inclusion financière, protège les populations vulnérables (agriculteurs, artisans) contre le basculement dans la pauvreté et mobilise l'épargne locale.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Parmi ces effets, lequel correspond à l’impact recherché de l’assurance dans les pays en développement et la zone UEMOA ?',
              options: [
                'Exclure les populations rurales du système financier',
                'Soutenir la formalisation des entreprises, protéger les vulnérables et favoriser l’inclusion financière',
                'Supprimer toute prise de risque entrepreneuriale',
                'Remplacer la BCEAO dans la gestion du Franc CFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance absorbe les chocs des ménages vulnérables, accompagne la formalisation des PME et renforce l’inclusion financière.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_assurance_ch1_p2',
        order: 2,
        title: 'Risque assurable, mutualisation, taux de sinistre et loi de Poisson (TD1)',
        summary:
          "Vérifier les 3 critères du risque assurable (TD1 Ex. 1), calculer espérance E(X), écart-type σ, taux de sinistre TS (Ex. 2) et appliquer la loi de Poisson aux sinistres rares (Ex. 6 & 8).",
        conceptExplanation:
          "La technique assurantielle repose sur deux piliers : un risque assurable et la mutualisation (loi des grands nombres).\n\n1. Trois caractéristiques du risque assurable (TD1 Ex. 1) : l'événement doit être futur, indépendant de la volonté de l'assuré et présenter : (a) Incertitude (peut survenir ou non), (b) Aléa (date, fréquence ou intensité inconnues d'avance) et (c) Indépendance (les sinistres ne doivent pas frapper tous les assurés à la fois, hors risques systémiques/catastrophes traités spécifiquement).\n\n2. Mutualisation et indicateurs statistiques : regrouper n assurés soumis au même risque rend la perte moyenne prévisible :\n- Espérance mathématique (perte moyenne espérée) : E(X) = Σ x_i · P(x_i) (pour n assurés indépendants avec sinistre C et probabilité p : E(S) = n·p·C) ;\n- Écart-type σ : mesure la dispersion/volatilité des sinistres (pour n sinistres binomiaux indépendants : σ = C · √[n·p·(1 − p)]). Plus σ est faible par rapport à E(X), plus la mutualisation est maîtrisée ;\n- Taux de sinistre (rapport de dispersion du cours) : TS = (σ / E(X)) × 100 (si TS < 50 %, la prévisibilité est favorable ; si TS ≥ 50 %, risque trop volatil).\n\n3. Modélisation du nombre de sinistres : loi Binomiale pour des assurés homogènes, ou loi de Poisson P(X = k) = (e^{−λ} · λ^k) / k! (avec E(X) = V(X) = λ) très utilisée lorsque les sinistres sont rares (TD1 Ex. 6 & 8).",
        keyRule:
          "Risque assurable = Futur + Incertain/Aléatoire + Indépendant de la volonté de l'assuré. Pour n assurés : E(S) = n·p·C, σ = C·√[n·p(1−p)], TS = (σ / E(S))×100. Pour Poisson(λ) : P(X=k) = e^{−λ}·λ^k / k! et E(X) = Var(X) = λ.",
        formulas: [
          {
            name: 'Espérance, Écart-type et Taux de sinistre (TD1 Ex. 2)',
            formula: 'E(S) = n·p·C   |   σ(S) = C·√[n·p·(1−p)]   |   TS = [σ / E(S)] × 100',
            note: 'Plus n est grand, plus TS diminue (en 1/√n) : c’est la puissance de la loi des grands nombres !',
          },
          {
            name: 'Loi de Poisson pour sinistres rares (TD1 Ex. 6 & 8)',
            formula: 'P(X = k) = (e^{−λ} · λ^k) / k!   |   E(X) = λ   |   Var(X) = λ',
            note: 'Ex. pour k = 0 : P(X = 0) = e^{−λ} ; pour k = 1 : P(X = 1) = λ · e^{−λ}.',
          },
        ],
        workedExample: {
          title: 'Mutualisation (TD1 Ex. 2) et Loi de Poisson (TD1 Ex. 8)',
          statement:
            "A) Une compagnie assure n = 10 000 personnes contre un sinistre de C = 100 000 FCFA avec p = 2 % (TD1 Ex. 2). Calculez la perte totale espérée, l'écart-type et le TS.\nB) Sinistres catastrophiques ~ Poisson(λ = 2) par an (TD1 Ex. 8) : calculez P(X = 0), E(X) et Var(X).",
          methodSteps: [
            'A1) Nombre moyen de sinistres = n·p = 10 000 × 0,02 = 200 sinistres ⇒ Perte totale espérée E(S) = 200 × 100 000 = 20 000 000 FCFA.',
            'A2) Écart-type : σ(S) = 100 000 × √[10 000 × 0,02 × 0,98] = 100 000 × √196 = 100 000 × 14 = 1 400 000 FCFA.',
            'A3) Taux de sinistre (dispersion) : TS = (1 400 000 / 20 000 000) × 100 = 7 % (< 50 % : la mutualisation est très stable et prévisible !).',
            'B) Pour Poisson(λ = 2) : P(X = 0) = e^{−2} ≈ 0,1353 (13,53 %) ; E(X) = λ = 2 et Var(X) = λ = 2.',
          ],
          conclusion:
            "Grâce à la mutualisation sur 10 000 assurés, l'incertitude relative tombe à seulement 7 % autour de la perte moyenne de 20 millions FCFA.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'TD1 Ex. 1',
            stepTheme: 'Risque assurable',
            stepTitle: 'Reconnaître ce qui est assurable et ce qui ne l’est pas',
            paragraphText:
              "Un risque assurable doit être incertain, aléatoire et indépendant de la volonté ou de la gestion interne de l'assuré (accident de circulation, sécheresse via assurance paramétrique). En revanche, la perte de clients due à l'incompétence du commerçant ou la baisse de motivation des salariés ne sont pas assurables (aléa moral / dépendent de la gestion de l'assuré).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'D’après l’exercice 1 du TD1, lequel des événements suivants n’est PAS un risque assurable ?',
              options: [
                'Les accidents de circulation d’un conducteur',
                'La perte de clients d’un commerçant causée par sa propre incompétence',
                'La sécheresse frappant un agriculteur (assurance climatique/paramétrique)',
                'L’incendie accidentel d’une habitation',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La perte de clients par incompétence n’est ni aléatoire ni indépendante de la volonté/gestion de l’assuré : elle n’est donc pas assurable.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Mutualisation',
            stepTheme: 'Loi des grands nombres',
            stepTitle: 'Pourquoi la mutualisation est le pilier de l’assurance',
            paragraphText:
              "La mutualisation applique la loi des grands nombres : regrouper de nombreux assurés exposés au même risque permet de répartir la perte des quelques sinistrés sur l'ensemble de la mutualité, stabilisant le coût moyen et réduisant la probabilité de ruine de l'assureur.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle loi mathématique fonde le principe de mutualisation en assurance en rendant la moyenne des pertes prévisible sur un grand portefeuille ?',
              options: [
                'La loi de Moore',
                'La loi de Say',
                'La loi des grands nombres',
                'La guillotine de Hume',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La loi des grands nombres garantit que la fréquence observée des sinistres converge vers la probabilité théorique quand le nombre d’assurés augmente.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'TD1 Ex. 2',
            stepTheme: 'Espérance & Écart-type',
            stepTitle: 'Calculer perte espérée, écart-type et TS sur 10 000 assurés',
            paragraphText:
              "Avec n = 10 000, p = 2 % et C = 100 000 FCFA (TD1 Ex. 2) : E(S) = 10 000 × 0,02 × 100 000 = 20 000 000 FCFA ; σ = 100 000 × √(10 000 × 0,02 × 0,98) = 1 400 000 FCFA ; TS = (1,4 M / 20 M) × 100 = 7 %.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Dans l’exercice 2 du TD1 (10 000 assurés, sinistre 100 000 FCFA, probabilité 2 %), quelles sont la perte totale espérée et la valeur exacte du TS = (σ / E(S)) × 100 ?',
              options: [
                'Perte espérée = 20 000 000 FCFA et TS = 7 %',
                'Perte espérée = 2 000 000 FCFA et TS = 70 %',
                'Perte espérée = 200 000 000 FCFA et TS = 2 %',
                'Perte espérée = 20 000 000 FCFA et TS = 50 %',
              ],
              correctAnswerIndex: 0,
              explanation:
                'E(S) = 200 × 100 000 = 20 M FCFA ; σ = 100 000 × √196 = 1,4 M FCFA ; TS = 1,4 / 20 = 7 % (< 50 %, portefeuille très stable).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Poisson (Ex. 6)',
            stepTheme: 'Sinistres rares',
            stepTitle: 'Appliquer la loi de Poisson à un portefeuille d’assurés',
            paragraphText:
              "La loi de Poisson(λ) est privilégiée lorsque les sinistres sont rares. Dans le TD1 Ex. 6 (5 000 assurés, moyenne λ = 0,03 sinistre par assuré), le nombre moyen annuel est 5 000 × 0,03 = 150 sinistres ; pour un assuré, P(0 sinistre) = e^{−0,03} ≈ 97,04 % et P(1 sinistre) = 0,03·e^{−0,03} ≈ 2,91 %.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Pour un portefeuille de 5 000 assurés générant en moyenne 0,03 sinistre par assuré et par an (TD1 Ex. 6), quel est le nombre moyen annuel total de sinistres et quelle est la formule de P(X = 0) pour un assuré sous Poisson ?',
              options: [
                '15 sinistres/an et P(0) = 0,03',
                '300 sinistres/an et P(0) = 1 − e^{−0,03}',
                '150 sinistres/an et P(0) = 0,03 · e^{−0,03}',
                '150 sinistres/an et P(0) = e^{−0,03} ≈ 0,9704',
              ],
              correctAnswerIndex: 3,
              explanation:
                '5 000 × 0,03 = 150 sinistres/an. Pour Poisson(λ = 0,03), P(X = 0) = e^{−0,03}·0,03^0 / 0! = e^{−0,03} ≈ 0,9704.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Poisson (Ex. 8)',
            stepTheme: 'Espérance & Variance',
            stepTitle: 'Propriété clé et calcul sur Poisson(λ = 2)',
            paragraphText:
              "Une propriété remarquable de la loi de Poisson(λ) est que son espérance et sa variance sont toutes deux égales à λ : E(X) = Var(X) = λ. Pour λ = 2 (TD1 Ex. 8), P(X ≥ 3) = 1 − [P(0) + P(1) + P(2)] = 1 − e^{−2}(1 + 2 + 2) = 1 − 5e^{−2} ≈ 32,33 %.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Si le nombre annuel de sinistres catastrophiques suit une loi de Poisson(λ = 2) (TD1 Ex. 8), quelles sont son espérance et sa variance ?',
              options: [
                'E(X) = 2 et Var(X) = 4',
                'E(X) = 2 et Var(X) = 2',
                'E(X) = 0,5 et Var(X) = 2',
                'E(X) = 2 et Var(X) = 1',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour toute loi de Poisson de paramètre λ, on a toujours E(X) = Var(X) = λ = 2.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_assurance_ch1_p3',
        order: 3,
        title: 'Tarification actuarielle : prime pure, prime commerciale HT/TTC et actualisation (TD1)',
        summary:
          "Calculer la prime pure (fréquence × coût moyen), ajouter les chargements (sécurité, gestion, marge), appliquer la TCA (HT → TTC) et utiliser la formule d'actualisation actuarielle.",
        conceptExplanation:
          "La fixation du prix d'un contrat d'assurance (tarification actuarielle) suit une construction rigoureuse en trois étages (TD1 Ex. 4, 5 & 7) :\n\n1. Prime pure (ou prime de risque) : coût statistique moyen du sinistre par assuré :\nPrime pure = Probabilité (ou Fréquence) de sinistre × Coût moyen d'un sinistre = Coût total attendu des sinistres / Nombre d'assurés.\n\n2. Prime commerciale Hors Taxes (HT) : ajoute à la prime pure les chargements (chargement de sécurité, frais de gestion/acquisition et marge bénéficiaire) :\nPrime commerciale HT = Prime pure × (1 + Taux de chargement total).\n\n3. Prime commerciale TTC (prime finale payée par l'assuré) : applique la Taxe sur les Conventions d'Assurance (TCA) :\nPrime commerciale TTC = Prime commerciale HT × (1 + TCA).\n\n4. Base actuarielle multi-périodes (taux d'actualisation i sur T années) :\n- Probabilités variables p_t : P = Σ_{t=1}^T [p_t · C_t / (1 + i)^t] ;\n- Probabilité p et coût c identiques chaque année : P = p · c · [(1 − (1 + i)^{−T}) / i].",
        keyRule:
          "Chaîne de tarification : Prime pure = p × C  →  Prime commerciale HT = Prime pure × (1 + chargements)  →  Prime TTC = Prime HT × (1 + TCA).",
        formulas: [
          {
            name: 'Prime pure, HT et TTC (TD1 Ex. 4, 5 & 7)',
            formula: 'P_pure = p × C   |   P_HT = P_pure × (1 + ch.)   |   P_TTC = P_HT × (1 + TCA)',
            note: 'Chargement global = chargement de sécurité + frais de gestion + marge bénéficiaire.',
          },
          {
            name: 'Prime actuarielle actualisée (p et c constants)',
            formula: 'P = p · c · [(1 − (1 + i)^{−T}) / i]',
            note: 'Intègre la valeur temps de l’argent via le taux technique d’actualisation i.',
          },
        ],
        workedExample: {
          title: 'Calcul complet Prime pure → HT → TTC (TD1 Ex. 4 & Ex. 5)',
          statement:
            "A) Assurance maladie (TD1 Ex. 4) : indemnisation moyenne 300 000 FCFA, probabilité p = 8 %, chargement sécurité 10 %, frais de gestion 25 %, marge 5 %, TCA = 14,5 %. Calculez Prime pure, Prime HT et Prime TTC.\nB) Assurance auto (TD1 Ex. 7) : 5 000 assurés, p = 3 %, coût moyen 1 200 000 FCFA, chargements 20 % : calculez coût total, prime pure et prime commerciale.",
          methodSteps: [
            'A1) Prime pure = 8 % × 300 000 = 24 000 FCFA.',
            'A2) Chargement total = 10 % + 25 % + 5 % = 40 % ⇒ Prime commerciale HT = 24 000 × (1 + 0,40) = 33 600 FCFA.',
            'A3) Prime commerciale TTC = 33 600 × (1 + 0,145) = 38 472 FCFA.',
            'B1) Coût attendu total = 5 000 × 3 % × 1 200 000 = 150 × 1 200 000 = 180 000 000 FCFA.',
            'B2) Prime pure = 3 % × 1 200 000 = 36 000 FCFA ; Prime commerciale HT = 36 000 × 1,20 = 43 200 FCFA.',
          ],
          conclusion:
            "La prime TTC intègre successivement le risque pur (24 000), les frais/sécurité/marge (+40 % → 33 600) et la fiscalité TCA (+14,5 % → 38 472 FCFA).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'TD1 Ex. 4',
            stepTheme: 'Prime pure',
            stepTitle: 'Calculer la prime pure d’un contrat d’assurance',
            paragraphText:
              "La prime pure est égale à l'espérance de perte par assuré : Prime pure = Probabilité de sinistre × Coût moyen d'un sinistre. Elle couvre exactement la charge attendue des sinistres, sans aucun frais de gestion ni marge.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Pour un contrat maladie prévoyant une indemnisation moyenne de 300 000 FCFA avec une probabilité de sinistre de 8 % (TD1 Ex. 4), quelle est la prime pure ?',
              options: [
                '24 000 FCFA',
                '37 500 FCFA',
                '30 000 FCFA',
                '240 000 FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Prime pure = 0,08 × 300 000 = 24 000 FCFA.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'TD1 Ex. 4',
            stepTheme: 'HT et TTC',
            stepTitle: 'Passer de la prime pure à la prime commerciale HT puis TTC',
            paragraphText:
              "À la prime pure (24 000 FCFA), on applique le total des chargements (10 % sécurité + 25 % gestion + 5 % marge = 40 %) pour obtenir la prime HT (33 600 FCFA), puis on multiplie par (1 + TCA) avec TCA = 14,5 % pour obtenir la prime TTC (38 472 FCFA).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Dans la suite de l’exercice 4 du TD1 (prime pure = 24 000 FCFA, chargements cumulés = 40 %, TCA = 14,5 %), quelles sont la prime commerciale HT et la prime TTC ?',
              options: [
                'HT = 28 000 FCFA et TTC = 32 060 FCFA',
                'HT = 33 600 FCFA et TTC = 38 472 FCFA',
                'HT = 33 600 FCFA et TTC = 37 080 FCFA',
                'HT = 36 000 FCFA et TTC = 41 220 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'HT = 24 000 × 1,40 = 33 600 FCFA ; TTC = 33 600 × 1,145 = 38 472 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'TD1 Ex. 5',
            stepTheme: 'Statistiques sur 3 ans',
            stepTitle: 'Estimer la tarification à partir d’un historique de sinistres',
            paragraphText:
              "Dans l'exercice 5 du TD1 sur 3 ans : total assurés = 1 000 + 1 200 + 1 500 = 3 700 ; total sinistres = 80 + 100 + 120 = 300 ; coût total = 24 M + 30 M + 36 M = 90 000 000 FCFA. Fréquence moyenne = 300 / 3 700 ≈ 8,11 % ; coût moyen par sinistre = 90 M / 300 = 300 000 FCFA ; prime pure = 90 M / 3 700 ≈ 24 324 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Dans l’étude de cas sur 3 ans (TD1 Ex. 5 : 300 sinistres pour un coût cumulé de 90 millions FCFA sur 3 700 assurés-années), quel est le coût moyen par sinistre ?',
              options: [
                '24 324 FCFA',
                '150 000 FCFA',
                '300 000 FCFA',
                '900 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Coût moyen par sinistre = Coût total / Nombre de sinistres = 90 000 000 / 300 = 300 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'TD1 Ex. 7',
            stepTheme: 'Assurance auto',
            stepTitle: 'Calculer coût total attendu et prime commerciale auto',
            paragraphText:
              "Pour 5 000 automobilistes assurés avec p = 3 %, coût moyen 1 200 000 FCFA et 20 % de frais/marge (TD1 Ex. 7) : prime pure = 36 000 FCFA et prime commerciale = 36 000 × 1,20 = 43 200 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Une police auto couvre 5 000 clients avec une probabilité d’accident de 3 %, un coût moyen de 1 200 000 FCFA et 20 % de chargements (TD1 Ex. 7). Quelle est la prime commerciale par assuré ?',
              options: [
                '36 000 FCFA',
                '40 000 FCFA',
                '54 000 FCFA',
                '43 200 FCFA',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Prime pure = 0,03 × 1 200 000 = 36 000 FCFA ; Prime commerciale = 36 000 × 1,20 = 43 200 FCFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'TCA vs Chargements',
            stepTitle: 'Ne pas additionner le taux de TCA aux taux de chargements !',
            paragraphText:
              "Piège classique : on n'additionne PAS le taux de TCA (14,5 %) aux chargements (40 %) pour faire 54,5 % ! La TCA s'applique en cascade SUR la prime commerciale HT : Prime TTC = Prime pure × (1 + chargements) × (1 + TCA).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Si une prime pure vaut 10 000 FCFA, les chargements 30 % et la TCA 10 %, quelle est la prime TTC exacte ?',
              options: [
                '14 000 FCFA',
                '14 300 FCFA',
                '13 000 FCFA',
                '11 300 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Prime HT = 10 000 × 1,30 = 13 000 FCFA ; Prime TTC = 13 000 × 1,10 = 14 300 FCFA (et non 10 000 × 1,40 = 14 000).',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : ASSURANCE VIE, ASSURANCE NON-VIE ET INNOVATIONS INSURTECH
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch2',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Assurance vie, assurance non-vie (dommages) et Insurtech',
    summary:
      "Maîtriser les produits et calculs d'assurance vie (capital décès, valeur de rachat, rente éducation), l'assurance dommages (RC, franchise, sous-assurance — TD2) et les innovations numériques.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC — KADJO Assandé Pierre — Cours d’Assurance (Ch. 3 & 4) & TD N°2',
    points: [
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p1',
        order: 1,
        title: 'Assurance vie : produits, valeur acquise, rachat et rente éducation (TD2)',
        summary:
          "Distinguer épargne vie, temporaire décès et rente éducation, calculer une valeur de rachat nette (Ex. 6), une valeur acquise capitalisée et une valeur actuelle de rente (Ex. 8 & 9).",
        conceptExplanation:
          "L'assurance vie est un contrat couvrant les risques liés à la durée de la vie humaine (vie ou décès) : elle permet à la fois de constituer et faire fructifier un capital sur le long terme (épargne/retraite) et de transmettre ce capital à des bénéficiaires désignés en cas de décès avec une fiscalité avantageuse (notamment après 8 ans).\n\nPrincipaux produits (TD2 Ex. 1, 4, 6, 7 & 8) :\n- Assurance temporaire décès : garantit le versement d'un capital aux proches si l'assuré décède pendant la durée du contrat (ex. couvrir le capital restant dû d'un prêt immobilier : 25 M − 5 M déjà remboursés = 20 M FCFA — Ex. 6 Cas 1) ;\n- Assurance vie épargne / retraite : capitalisation des primes versées au taux garanti + participation aux bénéfices ;\n- Rente éducation / conjoint survivant : versement d'un revenu périodique garanti en cas de décès.\n\nTrois calculs actuariels clés du TD2 :\n1. Valeur acquise d'un capital unique C placé à taux r pendant n années : V_n = C · (1 + r)^n. En cas de rachat anticipé avant 8 ans avec frais f : Valeur de rachat nette = V_n · (1 − f).\n2. Valeur acquise de versements annuels constants a (en début/fin de période) capitalisés au taux r.\n3. Valeur actuelle d'une rente constante R versée pendant n périodes au taux technique i : VA = R · [(1 − (1 + i)^{−n}) / i].",
        keyRule:
          "En temporaire décès emprunteur, on assure le capital RESTANT DÛ (pas le prêt initial). Pour une rente de montant R sur n périodes au taux i : VA = R · [1 − (1+i)^{−n}] / i.",
        formulas: [
          {
            name: 'Valeur acquise et Valeur de rachat nette (TD2 Ex. 6)',
            formula: 'V_n = C · (1 + r)^n   |   Rachat net = V_n · (1 − frais)',
            note: 'Avec r = taux garanti + participation aux bénéfices.',
          },
          {
            name: 'Valeur actuelle d’une rente éducation (TD2 Ex. 8 & 9)',
            formula: 'VA = R · [(1 − (1 + i)^{−n}) / i]',
            note: 'Capital à constituer aujourd’hui pour servir une rente R pendant n périodes au taux technique i.',
          },
        ],
        workedExample: {
          title: 'Capital décès, valeur de rachat et rente éducation (TD2 Ex. 6 & Ex. 8)',
          statement:
            "A) Prêt immobilier de 25 M FCFA dont 5 M déjà remboursés (Ex. 6 Cas 1) : quel capital assurer ?\nB) Contrat épargne 6 ans : primes 2 000 000 FCFA, taux garanti 2,5 %, participation 1,5 %, frais rachat avant 8 ans = 3 % (Ex. 6 Cas 2) : calculez la valeur de rachat nette.\nC) Rente éducation 500 000 FCFA/an pendant 4 ans à i = 2 % (Ex. 8 Cas 1) : calculez le capital VA.",
          methodSteps: [
            'A) Capital restant dû à assurer = 25 000 000 − 5 000 000 = 20 000 000 FCFA (inutile de payer des primes sur la part déjà remboursée).',
            'B1) Taux annuel global r = 2,5 % + 1,5 % = 4 % ⇒ Valeur acquise avant frais (6 ans) = 2 000 000 × (1,04)^6 ≈ 2 530 638 FCFA.',
            'B2) Valeur de rachat nette après 3 % de frais = 2 530 638 × 0,97 ≈ 2 454 719 FCFA.',
            'C) Valeur actuelle rente éducation : VA = 500 000 × [(1 − 1,02^{−4}) / 0,02] ≈ 500 000 × 3,80773 ≈ 1 903 864 FCFA.',
          ],
          conclusion:
            "L'actualisation à 2 % permet de financer 2 000 000 FCFA de rentes cumulées (4 × 500 000) avec un capital initial d'environ 1 903 864 FCFA.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Assurance vie',
            stepTheme: 'Double finalité',
            stepTitle: 'Épargne à long terme et transmission de capital',
            paragraphText:
              "L'assurance vie remplit deux objectifs complémentaires : faire fructifier une épargne sur le long terme (retraite, projets) et transmettre un capital à des bénéficiaires désignés en cas de décès avec une fiscalité avantageuse (notamment après 8 ans).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'D’après le cours, au-delà de quelle durée de détention la fiscalité des gains d’un contrat d’assurance vie devient-elle particulièrement avantageuse ?',
              options: ['Après 1 an', 'Après 8 ans', 'Après 2 ans', 'Après 6 mois'],
              correctAnswerIndex: 1,
              explanation:
                'Le cours précise que les gains générés sur les contrats d’assurance vie bénéficient d’une fiscalité avantageuse, particulièrement après huit ans (d’où les frais de rachat anticipé avant 8 ans dans le TD2).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'TD2 Ex. 4 & 6',
            stepTheme: 'Temporaire décès',
            stepTitle: 'Choisir une temporaire décès et fixer le capital assuré',
            paragraphText:
              "Pour garantir les études d'un enfant en cas de décès prématuré du parent (Ex. 4), la temporaire décès (ou rente éducation) est plus adaptée qu'une simple épargne scolaire car elle verse immédiatement le capital entier même si le décès survient dès la 1re année. Pour un prêt (Ex. 6), on assure uniquement le capital restant dû.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Un client a emprunté 25 000 000 FCFA et a déjà remboursé 5 000 000 FCFA (TD2 Ex. 6). Quel capital doit-il assurer en temporaire décès pour protéger sa famille face à ce prêt ?',
              options: [
                '25 000 000 FCFA obligatoirement',
                '5 000 000 FCFA',
                '20 000 000 FCFA (le capital restant dû)',
                '30 000 000 FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On assure le capital restant dû (25 M − 5 M = 20 M FCFA) pour éviter de payer inutilement des cotisations sur une dette déjà éteinte.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'TD2 Ex. 6',
            stepTheme: 'Valeur de rachat',
            stepTitle: 'Calculer une valeur acquise et une valeur de rachat nette',
            paragraphText:
              "Avec un taux garanti de 2,5 % et une participation aux bénéfices de 1,5 %, le rendement annuel global est de 4 %. Sur 6 ans pour 2 000 000 FCFA : V_6 = 2 000 000 × (1,04)^6 ≈ 2 530 638 FCFA ; après 3 % de frais de rachat, la valeur nette vaut ≈ 2 454 719 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Un contrat d’assurance vie épargne dispose d’une valeur acquise brute de 2 500 000 FCFA. Si l’assuré rachète avant 8 ans avec 3 % de frais de rachat, quelle valeur nette perçoit-il ?',
              options: [
                '2 425 000 FCFA',
                '2 575 000 FCFA',
                '2 470 000 FCFA',
                '2 200 000 FCFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Frais = 3 % × 2 500 000 = 75 000 FCFA ⇒ Valeur nette = 2 500 000 − 75 000 = 2 425 000 FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'TD2 Ex. 8',
            stepTheme: 'Rente & Capitalisation',
            stepTitle: 'Calculer la valeur acquise de primes annuelles et la VA d’une rente',
            paragraphText:
              "Dans le TD2 Ex. 8 Cas 2, 300 000 FCFA versés fin d'année 1, 2 et 3 à 4 % donnent : 300 000×(1,04)² + 300 000×(1,04)¹ + 300 000 = 324 480 + 312 000 + 300 000 = 936 480 FCFA (ou en début d'année : 936 480 × 1,04 = 973 939 FCFA). Pour la rente éducation (Cas 1), VA = 500 000 × [(1 − 1,02^{−4}) / 0,02] ≈ 1 903 864 FCFA.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Dans l’exercice 8 Cas 1 (rente éducation de 500 000 FCFA/an pendant 4 ans au taux technique de 2 %), pourquoi le capital à constituer aujourd’hui (~1 903 864 FCFA) est-il inférieur à 2 000 000 FCFA ?',
              options: [
                'Parce que l’assureur retire 50 % d’impôts',
                'Parce que la 4e année n’est jamais payée',
                'Parce que l’inflation annule la rente',
                'Parce que le capital placé produit des intérêts à 2 %/an pendant les 4 années de versement (effet d’actualisation)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les sommes non encore versées continuent de produire 2 % d’intérêts par an, ce qui réduit le capital initial nécessaire (VA < somme nominale).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'TD2 Ex. 1',
            stepTheme: 'Vie vs Non-Vie',
            stepTitle: 'Bien classer les besoins entre Vie et Non-Vie',
            paragraphText:
              "Assurer les études de sa fille en cas de décès et épargner pour la retraite relèvent de l'ASSURANCE VIE. Protéger sa maison contre l'incendie, couvrir les dommages causés aux clients en magasin (RC) ou réparer sa propre voiture accidentée relèvent de l'ASSURANCE NON-VIE (dommages).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Parmi les situations de l’exercice 1 du TD2, lesquelles relèvent de l’ASSURANCE VIE ?',
              options: [
                'Protéger une maison contre l’incendie et couvrir sa voiture contre les accidents',
                'Assurer les études de sa fille en cas de décès et épargner progressivement pour la retraite',
                'Couvrir les dommages causés aux clients dans un magasin',
                'Garantir les dégâts matériels d’une collision automobile',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’assurance vie couvre les risques liés à la durée de vie humaine (décès prématuré et survie/retraite).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p2',
        order: 2,
        title: 'Assurance non-vie (dommages) : RC, franchise et règle proportionnelle (TD2)',
        summary:
          "Maîtriser la Responsabilité Civile (RC) obligatoire, la garantie dommages collision avec franchise (Ex. 2, 3, 11) et la règle proportionnelle de sous-assurance (Ex. 5).",
        conceptExplanation:
          "L'assurance non-vie (ou assurance dommages) engage l'assureur à indemniser l'assuré ou un tiers en cas d'événement aléatoire affectant un bien (auto, incendie, vol), une personne (santé/accidents) ou une responsabilité (RC auto, RC professionnelle d'un médecin ou commerçant).\n\nTrois règles techniques reviennent systématiquement au TD2 et à l'examen :\n1. Responsabilité Civile (RC) automobile obligatoire (Ex. 2, 3 & 11) : elle indemnise UNIQUEMENT les dommages corporels et matériels causés aux TIERS (piéton, motocycliste, autre véhicule) lorsque l'assuré est responsable. Elle ne répare JAMAIS le propre véhicule de l'assuré responsable !\n2. Garantie Dommages collision / Tous risques et Franchise (Ex. 2) : si l'assuré a souscrit cette garantie facultative, son propre véhicule est indemnisé sous déduction de la franchise contractuelle (part restant à la charge de l'assuré) : Indemnité = Dommages véhicule − Franchise.\n3. Principe indemnitaire et règle proportionnelle de capitaux en cas de sous-assurance (Ex. 5 Cas 1) : si un bien de valeur réelle V_r est assuré pour un capital inférieur V_a < V_r, l'indemnité est réduite proportionnellement :\nIndemnité = Dommage × (Capital assuré / Valeur réelle).",
        keyRule:
          "Retiens les 3 réflexes TD2 : (1) La RC indemnise les TIERS, jamais le véhicule de l'assuré responsable ; (2) Indemnité dommages = Dommage − Franchise ; (3) Sous-assurance ⇒ Indemnité = Dommage × (Capital assuré / Valeur réelle).",
        formulas: [
          {
            name: 'Indemnisation avec franchise (TD2 Ex. 2)',
            formula: 'Indemnité véhicule assuré = Dommages constatés − Franchise',
            note: 'Applicable uniquement si le contrat comporte une garantie Dommages (collision ou tous risques).',
          },
          {
            name: 'Règle proportionnelle de sous-assurance (TD2 Ex. 5)',
            formula: 'Indemnité = Dommage × (Capital assuré / Valeur réelle du bien)',
            note: 'S’applique lorsque Capital assuré < Valeur réelle afin de respecter l’équité tarifaire.',
          },
        ],
        workedExample: {
          title: 'Sinistre auto avec franchise (TD2 Ex. 2) et sous-assurance incendie (TD2 Ex. 5)',
          statement:
            "A) Un conducteur heurte un piéton (Ex. 2) : soins piéton 300 000 FCFA, téléphone piéton 120 000 FCFA, véhicule assuré 450 000 FCFA. Contrat : RC obligatoire + Dommages collision (franchise 100 000 FCFA). Calculez les indemnités.\nB) Bâtiment assuré 100 M FCFA, valeur réelle 200 M FCFA, dommage incendie 40 M FCFA (Ex. 5) : calculez l'indemnité.",
          methodSteps: [
            'A1) Garantie RC obligatoire (dommages causés au tiers piéton) : 300 000 (soins) + 120 000 (téléphone) = 420 000 FCFA.',
            'A2) Garantie Dommages collision (véhicule de l’assuré) : 450 000 − 100 000 (franchise) = 350 000 FCFA (si l’assuré n’avait que la RC, il recevrait 0 FCFA pour son véhicule).',
            'B) Sous-assurance (100 M < 200 M) ⇒ Règle proportionnelle : Indemnité = 40 000 000 × (100 000 000 / 200 000 000) = 20 000 000 FCFA.',
          ],
          conclusion:
            "L'assureur paie 420 000 FCFA au piéton (RC) et 350 000 FCFA à l'assuré (dommages − franchise). En sous-assurance à 50 %, l'entreprise ne reçoit que 50 % du dommage (20 M FCFA).",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'piege',
            stepBadge: 'TD2 Ex. 3 & 11',
            stepTheme: 'Responsabilité Civile',
            stepTitle: 'Qui est indemnisé par la RC automobile obligatoire ?',
            paragraphText:
              "La garantie Responsabilité Civile (RC) automobile obligatoire couvre exclusivement les dommages corporels et matériels causés aux TIERS victimes (piéton, motocycliste, passagers tiers). Dans l'Ex. 11 (moto 350 000 + frais médicaux motocycliste 420 000 + voiture assuré 500 000), la RC indemnise 770 000 FCFA au motocycliste et 0 FCFA pour la voiture de l'assuré responsable !",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Un conducteur responsable heurte un motocycliste (TD2 Ex. 11 : moto 350 000 FCFA, frais médicaux motocycliste 420 000 FCFA, voiture du conducteur 500 000 FCFA). Quel montant est indemnisé par la seule garantie RC obligatoire ?',
              options: [
                '770 000 FCFA (moto + frais médicaux du tiers motocycliste ; 0 FCFA pour la voiture de l’assuré)',
                '1 270 000 FCFA (la totalité des dommages)',
                '500 000 FCFA (uniquement la voiture de l’assuré)',
                '350 000 FCFA (uniquement les dégâts matériels)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La RC couvre uniquement les victimes tierces (350 000 + 420 000 = 770 000 FCFA) et jamais le véhicule du conducteur responsable.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'TD2 Ex. 2',
            stepTheme: 'Dommages collision & Franchise',
            stepTitle: 'Appliquer la franchise sur la garantie Dommages collision',
            paragraphText:
              "Lorsque l'assuré a souscrit une garantie Dommages collision en plus de la RC, son propre véhicule est indemnisé à hauteur des réparations diminuées de la franchise (dans l'Ex. 2 : 450 000 − 100 000 = 350 000 FCFA). Note : la collision implique un choc avec un tiers identifié (véhicule, piéton, animal).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Dans l’exercice 2 du TD2 (dommages véhicule assuré = 450 000 FCFA, garantie dommages collision avec franchise de 100 000 FCFA), combien l’assureur verse-t-il pour réparer le véhicule de l’assuré ?',
              options: [
                '450 000 FCFA',
                '350 000 FCFA',
                '100 000 FCFA',
                '0 FCFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Indemnité = Dommages − Franchise = 450 000 − 100 000 = 350 000 FCFA.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'TD2 Ex. 5',
            stepTheme: 'Sous-assurance',
            stepTitle: 'Appliquer la règle proportionnelle de capitaux',
            paragraphText:
              "Si un bien est assuré en dessous de sa valeur réelle (sous-assurance), l'assureur applique la règle proportionnelle : Indemnité = Dommage × (Capital assuré / Valeur réelle). Dans l'Ex. 5 : 40 M × (100 M / 200 M) = 20 M FCFA.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un entrepôt d’une valeur réelle de 200 millions FCFA est assuré pour seulement 100 millions FCFA (TD2 Ex. 5). Un incendie cause 40 millions FCFA de dégâts. Quelle indemnité l’assureur verse-t-il ?',
              options: [
                '40 millions FCFA',
                '100 millions FCFA',
                '20 millions FCFA',
                '10 millions FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Règle proportionnelle de sous-assurance : 40 M × (100 M / 200 M) = 20 millions FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'TD2 Ex. 5 Cas 2',
            stepTheme: 'RC Professionnelle',
            stepTitle: 'Identifier une assurance Responsabilité Civile Professionnelle',
            paragraphText:
              "Lorsqu'un médecin commet une erreur de diagnostic causant un préjudice financier ou corporel à son patient (TD2 Ex. 5 Cas 2), c'est son assurance Responsabilité Civile Professionnelle (RCP) qui indemnise le patient (bénéficiaire/tiers victime) sur la base légale de la responsabilité civile (faute + dommage + lien de causalité).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Un médecin commet une erreur de diagnostic entraînant un préjudice pour son patient (TD2 Ex. 5 Cas 2). Quelle assurance et quel bénéficiaire sont concernés ?',
              options: [
                'Assurance vie épargne ; bénéficiaire : la clinique',
                'Assurance incendie ; bénéficiaire : l’État',
                'Assurance automobile ; bénéficiaire : le médecin',
                'Assurance Responsabilité Civile Professionnelle (RCP) ; bénéficiaire : le patient victime',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La RCP couvre les dommages causés aux clients/patients dans l’exercice de la profession et indemnise la victime tierce.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Principe indemnitaire',
            stepTheme: 'Non-enrichissement',
            stepTitle: 'Le principe indemnitaire en assurance dommages',
            paragraphText:
              "En assurance non-vie (dommages), le principe indemnitaire interdit que l'assurance soit une source d'enrichissement pour l'assuré : l'indemnité versée ne peut jamais dépasser le montant réel du préjudice subi.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Que garantit le « principe indemnitaire » en assurance de dommages (non-vie) ?',
              options: [
                'Que l’assuré reçoit toujours le double de la valeur de son bien détruit',
                'Que l’indemnité ne peut jamais dépasser le montant réel du dommage subi (l’assurance ne doit pas être une source d’enrichissement)',
                'Que l’assureur paie les sinistres même sans contrat',
                'Que la franchise est toujours égale à la valeur du bien',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le principe indemnitaire limite strictement l’indemnisation à la réparation exacte du préjudice subi pour prévenir la fraude (sinistres volontaires).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_assurance_ch2_p3',
        order: 3,
        title: 'Innovations numériques et Insurtech (IA, IoT, PAYD/PHYD, Paramétrique)',
        summary:
          "Comprendre la transformation digitale de l'assurance vie et non-vie : IA, Big Data, Blockchain, IoT, RPA, vision par ordinateur, assurance à l'usage (PAYD/PHYD) et assurance paramétrique.",
        conceptExplanation:
          "Les technologies Insurtech transforment profondément les métiers de l'assurance vie et non-vie (Chapitres 3, 4 & 6) :\n\n1. Technologies transversales :\n- Intelligence Artificielle (IA) & Machine Learning : tarification dynamique, automatisation de la souscription, détection des fraudes, chatbots/voicebots 24h/24 pour déclarer un sinistre ;\n- Big Data : analyse fine des profils de risque et personnalisation des polices ;\n- Blockchain : contrats intelligents (smart contracts), transactions transparentes et lutte contre la fraude ;\n- RPA (Robotic Process Automation) : automatisation des quittances, relances et renouvellements ;\n- Vision par ordinateur & Drones : évaluation automatique de dommages auto/habitation sur photos et accès aux zones sinistrées dangereuses ;\n- IoT / capteurs connectés : montres/trackers santé en vie, capteurs d'alerte incendie/fuite en non-vie.\n\n2. Nouveaux modèles d'assurance non-vie :\n- Usage-Based Insurance (UBI) : Pay As You Drive (PAYD — prime selon le kilométrage parcouru) et Pay How You Drive (PHYD — prime selon le style de conduite mesuré par télématique) ;\n- On-Demand Insurance (assurance à la demande, activable temporairement sur mobile) ;\n- Assurance paramétrique : indemnisation AUTOMATIQUE dès qu'un indice objectif prédéfini est atteint (ex. niveau de pluviométrie/sécheresse, vitesse du vent, retard d'avion), sans expertise longue — très utilisée en agriculture, transport/logistique et climat.",
        keyRule:
          "Distingue PAYD (kilométrage), PHYD (style de conduite) et Assurance paramétrique (déclenchement automatique sur un indice objectif, sans expertise de terrain, idéale pour l'agriculture).",
        formulas: [
          {
            name: 'Modèles Insurtech innovants',
            formula: 'PAYD = Prime f(kilométrage)  |  PHYD = Prime f(conduite)  |  Paramétrique = Paiement auto si Indice ≥ Seuil',
            note: 'Réduisent les coûts de gestion, les délais d’indemnisation et la fraude.',
          },
        ],
        workedExample: {
          title: 'Choisir le modèle Insurtech adapté à des planteurs de cacao ivoiriens',
          statement:
            "Des milliers de petits planteurs de cacao craignent une sécheresse prolongée. Une expertise individuelle de chaque parcelle coûterait plus cher que la prime. Quelle innovation assurantielle du cours recommander ?",
          methodSteps: [
            "Identifier le blocage classique : l'assurance dommage traditionnelle exige un expert terrain par sinistre, trop coûteux et lent pour des milliers de petites parcelles.",
            "Recommander l'assurance paramétrique : le contrat fixe un indice satellite/météo objectif (ex. cumul de pluie inférieur à X mm sur la saison).",
            'Automatiser le paiement : dès que l’indice est franchi (via capteurs IoT/satellites et éventuellement smart contract Blockchain), l’indemnité est versée automatiquement par Mobile Money à tous les agriculteurs assurés de la zone.',
          ],
          conclusion:
            "L'assurance paramétrique rend enfin l'assurance climatique économiquement viable et rapide pour l'agriculture ouest-africaine.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'UBI Auto',
            stepTheme: 'PAYD vs PHYD',
            stepTitle: 'Distinguer Pay As You Drive (PAYD) et Pay How You Drive (PHYD)',
            paragraphText:
              "L'assurance basée sur l'usage (UBI) se décline en PAYD (Pay As You Drive : prime calculée selon le nombre de kilomètres réellement parcourus) et PHYD (Pay How You Drive : prime ajustée selon le comportement/style de conduite mesuré par boîtier télématique ou smartphone).",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Un assureur installe un capteur télématique qui réduit la prime auto d’un conducteur parce qu’il freine en douceur et respecte les limitations de vitesse. De quel modèle s’agit-il ?',
              options: [
                'PAYD (Pay As You Drive)',
                'PHYD (Pay How You Drive)',
                'Rente éducation',
                'Sous-assurance proportionnelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'PHYD (Pay How You Drive) ajuste la prime au style de conduite, tandis que PAYD (Pay As You Drive) la base sur le kilométrage.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Paramétrique',
            stepTheme: 'Indemnisation automatique',
            stepTitle: 'Fonctionnement et domaines clés de l’assurance paramétrique',
            paragraphText:
              "L'assurance paramétrique déclenche une indemnisation automatique dès qu'un indice prédéfini est atteint (pluviométrie, séisme, température), sans attendre d'expertise longue. Elle est particulièrement utilisée en agriculture, transport/logistique et risques climatiques.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quelle caractéristique distingue fondamentalement l’assurance paramétrique de l’assurance dommages traditionnelle ?',
              options: [
                'Elle exige au moins trois expertises physiques avant tout paiement',
                'Elle s’applique uniquement aux contrats d’assurance vie retraite',
                'Elle déclenche une indemnisation automatique dès qu’un indice objectif prédéfini est atteint (ex. seuil de sécheresse)',
                'Elle interdit toute utilisation de données météorologiques',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’assurance paramétrique supprime l’expertise lente en indexant l’indemnisation automatique sur un paramètre mesurable indépendant.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Sinistres digitaux',
            stepTheme: 'Vision IA & Drones',
            stepTitle: 'Vision par ordinateur, drones et RPA dans la gestion des sinistres',
            paragraphText:
              "La digitalisation accélère la gestion : la vision par ordinateur estime les dommages auto/habitation sur photos, les drones inspectent les zones sinistrées dangereuses, et la RPA (Robotic Process Automation) automatise quittances, relances et renouvellements.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Quel est le rôle principal de la RPA (Robotic Process Automation) dans une compagnie d’assurance selon le cours ?',
              options: [
                'Automatiser les tâches administratives répétitives comme les quittances, relances et renouvellements',
                'Remplacer la loi des grands nombres',
                'Inspecter physiquement les toits incendiés depuis le ciel',
                'Fixer le taux de TCA au niveau de l’État',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La RPA automatise les processus back-office répétitifs (quittances, relances, renouvellements), réduisant les frais de gestion et les erreurs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'IoT & Blockchain',
            stepTheme: 'Assurance vie digitale',
            stepTitle: 'Apports de l’IoT et de la Blockchain en assurance',
            paragraphText:
              "En assurance vie, les objets connectés (IoT : trackers de santé/activité) fournissent des données en temps réel pour personnaliser les polices selon le mode de vie. La Blockchain garantit des transactions sécurisées, transparentes et infalsifiables, réduisant la fraude et renforçant la confiance.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Comment la technologie Blockchain contribue-t-elle à moderniser le secteur de l’assurance selon le cours ?',
              options: [
                'En rendant tous les contrats anonymes et illégaux',
                'En supprimant le besoin de mutualisation',
                'En augmentant volontairement les délais de remboursement',
                'En garantissant des transactions sécurisées et transparentes qui réduisent la fraude et renforcent la confiance',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La traçabilité infalsifiable de la Blockchain (et les smart contracts) limite la fraude et automatise les règlements.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Enjeu éthique',
            stepTheme: 'Personnalisation vs Mutualisation',
            stepTitle: 'Attention à l’hyper-personnalisation des risques par le Big Data',
            paragraphText:
              "Si l'IA, le Big Data et l'IoT affinent la tarification et préviennent les sinistres, une hyper-segmentation extrême pourrait menacer le principe solidaire de mutualisation en excluant les profils jugés trop risqués : un encadrement réglementaire reste indispensable.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quel risque majeur pour le principe fondamental de l’assurance pourrait résulter d’une hyper-segmentation excessive par l’IA et le Big Data ?',
              options: [
                'La disparition des téléphones mobiles',
                'L’affaiblissement de la mutualisation, rendant les « mauvais risques » financièrement inassurables',
                'La baisse de la précision des données météo',
                'L’impossibilité de déclarer un sinistre en ligne',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si chaque assuré paie exactement son risque individuel prédit par l’IA, le partage solidaire (mutualisation) s’effrite au détriment des profils vulnérables.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : RÉGLEMENTATION CIMA, SUPERVISION ET DISTRIBUTION DIGITALE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_assurance_ch3',
    subjectId: 'lmd_assurance',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Réglementation CIMA, supervision et digitalisation',
    summary:
      "Maîtriser la Conférence Interafricaine des Marchés d'Assurances (Traité de Yaoundé 1992, Code CIMA, CMA, CRCA, CICA-RE), la solvabilité et les nouveaux canaux digitaux d'inclusion assurantielle.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC — KADJO Assandé Pierre — Cours d’Assurance (Ch. 5 & 6)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_assurance_ch3_p1',
        order: 1,
        title: "La CIMA (Traité de Yaoundé 1992) : objectifs, Code CIMA et organes",
        summary:
          "Connaître la date de création, les 4 objectifs spécifiques (unifier, contrôler, protéger, développer) et les 4 outils/organes clés de la CIMA (Code CIMA, CMA, CRCA, CICA-RE).",
        conceptExplanation:
          "L'assurance reposant sur une promesse future d'indemnisation, elle exige la confiance du public, un cadre légal clair et une autorité de supervision stricte. Dans les États membres de la zone Franc CFA d'Afrique francophone subsaharienne (dont la Côte d'Ivoire), ce cadre est assuré par la CIMA — Conférence Interafricaine des Marchés d'Assurances.\n\n1. Création et mission : instituée par le Traité de Yaoundé signé le 10 juillet 1992, la CIMA a pour mission d'harmoniser les règles d'assurance (éviter les pratiques divergentes entre pays), superviser et développer un marché régional sain et équilibré.\n\n2. Quatre objectifs spécifiques :\n- Unifier : un Code unique des assurances applicable à tous les États membres ;\n- Contrôler : surveiller la santé financière et la solvabilité des compagnies ;\n- Protéger : garantir que les assurés et bénéficiaires seront effectivement indemnisés ;\n- Développer : favoriser l'émergence d'un marché régional dynamique.\n\n3. Quatre outils et organes majeurs :\n- Le Code CIMA : cadre juridique unique régissant les contrats et entreprises d'assurance ;\n- Le Conseil des Ministres des Assurances (CMA) : organe suprême qui adopte et modifie la législation ;\n- La Commission Régionale de Contrôle des Assurances (CRCA) : organe de régulation et de contrôle prudentiel (agréments, vérifications, sanctions) ;\n- La CICA-RE (Compagnie Commune de Réassurance des États membres de la CIMA) : institution régionale de réassurance.",
        keyRule:
          "Mémorise le quatuor CIMA (Traité de Yaoundé, 10 juillet 1992) : Code CIMA (droit unique), CMA (législation), CRCA (contrôle/régulation) et CICA-RE (réassurance).",
        formulas: [
          {
            name: 'Architecture institutionnelle de la CIMA',
            formula: 'CIMA (10 juillet 1992, Yaoundé) = Code CIMA + CMA (lois) + CRCA (contrôle) + CICA-RE (réassurance)',
            note: '4 objectifs : Unifier, Contrôler, Protéger les assurés, Développer le marché.',
          },
        ],
        workedExample: {
          title: 'Identifier l’organe CIMA compétent selon trois situations réelles',
          statement:
            "Dans l'espace CIMA : (1) une compagnie présente une marge de solvabilité insuffisante et tarde à indemniser les sinistrés ; (2) les États souhaitent réformer un article du Code des assurances ; (3) un assureur local veut céder une partie d'un très gros risque industriel. Quel organe intervient dans chaque cas ?",
          methodSteps: [
            '(1) Contrôle financier, mise sous surveillance ou sanction d’une compagnie ⇒ Commission Régionale de Contrôle des Assurances (CRCA).',
            '(2) Adoption ou modification de la législation du Code CIMA ⇒ Conseil des Ministres des Assurances (CMA).',
            '(3) Cession régionale d’une fraction d’un grand risque (réassurance) ⇒ CICA-RE.',
          ],
          conclusion:
            'La séparation claire entre législation (CMA), supervision (CRCA) et réassurance (CICA-RE) assure la solidité du marché des assurances en zone Franc CFA.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Origine',
            stepTheme: 'Traité de Yaoundé',
            stepTitle: 'Création et rôle de la CIMA',
            paragraphText:
              "La Conférence Interafricaine des Marchés d'Assurances (CIMA) a été créée par le Traité de Yaoundé du 10 juillet 1992 afin d'harmoniser les règles d'assurance, éviter les divergences nationales et superviser le marché des États membres.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Par quel traité et à quelle date la Conférence Interafricaine des Marchés d’Assurances (CIMA) a-t-elle été créée ?',
              options: [
                'Traité de Dakar du 1er janvier 2000',
                'Traité de Yaoundé du 10 juillet 1992',
                'Traité d’Abidjan du 15 mai 1980',
                'Traité de Genève du 10 juillet 2010',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La CIMA a été instituée par le Traité de Yaoundé signé le 10 juillet 1992.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Missions',
            stepTheme: '4 objectifs CIMA',
            stepTitle: 'Unifier, contrôler, protéger et développer',
            paragraphText:
              "Les quatre objectifs spécifiques de la CIMA sont : (1) Unifier via un Code unique, (2) Contrôler la santé financière des compagnies, (3) Protéger les assurés pour garantir leur indemnisation, et (4) Développer un marché régional dynamique.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Lequel des quatre éléments suivants constitue la finalité de l’objectif « Protéger » de la CIMA ?',
              options: [
                'Protéger les compagnies contre toute concurrence digitale',
                'Protéger les États contre l’importation de voitures',
                'Garantir que les assurés et bénéficiaires seront effectivement indemnisés en cas de sinistre',
                'Interdire les contrats d’assurance vie de plus de 8 ans',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La régulation prudentielle vise avant tout à protéger les assurés en garantissant la capacité des compagnies à payer les sinistres.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Régulation',
            stepTheme: 'CRCA vs CMA',
            stepTitle: 'Distinguer le Conseil des Ministres (CMA) et la CRCA',
            paragraphText:
              "Au sein de la CIMA, le Conseil des Ministres des Assurances (CMA) adopte la législation et les textes du Code CIMA, tandis que la Commission Régionale de Contrôle des Assurances (CRCA) exerce la régulation et le contrôle quotidien des compagnies.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quel organe de la CIMA exerce concrètement la régulation et le contrôle prudentiel des compagnies d’assurances ?',
              options: [
                'La Commission Régionale de Contrôle des Assurances (CRCA)',
                'La CICA-RE',
                'La Commission Bancaire de l’UMOA',
                'Le tribunal de commerce local uniquement',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La CRCA est l’organe de régulation et de supervision financière des assureurs dans la zone CIMA (pendant assurantiel de la Commission Bancaire pour les banques).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Réassurance',
            stepTheme: 'CICA-RE',
            stepTitle: 'Rôle de la CICA-RE dans l’écosystème CIMA',
            paragraphText:
              "La CICA-RE (Compagnie Commune de Réassurance des États membres de la CIMA) assure la fonction de réassurance — l'assurance des assureurs — permettant de mutualiser les très grands risques à l'échelle régionale et de retenir une part des primes dans la zone.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle est la vocation spécifique de la CICA-RE parmi les organes de l’espace CIMA ?',
              options: [
                'Émettre le Franc CFA',
                'Vendre directement des polices auto aux particuliers',
                'Rédiger les sujets d’examens universitaires',
                'Assurer la réassurance (l’assurance des assureurs) au niveau régional des États membres de la CIMA',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La CICA-RE réassure les compagnies locales face aux risques de grande ampleur et renforce la capacité de rétention régionale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Supervision Banque vs Assurance',
            stepTitle: 'Ne pas confondre régulateur bancaire et régulateur assurantiel',
            paragraphText:
              "Attention aux examens croisés Banque / Assurance : en Côte d'Ivoire (zone UEMOA/CIMA), les BANQUES sont supervisées par la BCEAO et la Commission Bancaire UMOA, tandis que les ASSURANCES sont encadrées par la CIMA (Code CIMA) et la CRCA !",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle paire associe correctement chaque secteur à son autorité régionale de contrôle prudentiel en Côte d’Ivoire ?',
              options: [
                'Banques → CRCA ; Assurances → Commission Bancaire UMOA',
                'Banques → Commission Bancaire UMOA / BCEAO ; Assurances → CRCA / CIMA',
                'Banques et Assurances → CICA-RE uniquement',
                'Banques → Code CIMA ; Assurances → Traité de Venise',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les banques relèvent de la BCEAO / Commission Bancaire UMOA ; les compagnies d’assurances relèvent de la CIMA / CRCA.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_assurance_ch3_p2',
        order: 2,
        title: 'Solvabilité, distribution digitale et avenir de la micro-assurance',
        summary:
          "Comprendre les exigences de solvabilité (provisions techniques, marge de solvabilité), les nouveaux canaux digitaux (mobile apps, self-service) et le développement de la culture assurantielle.",
        conceptExplanation:
          "Pour garantir que l'assureur pourra honorer ses engagements futurs (cycle de production inversé : l'assureur encaisse la prime avant de connaître le coût final des sinistres), la réglementation CIMA impose deux garde-fous de solvabilité :\n1. Les provisions techniques : sommes mises en réserve au passif pour payer les sinistres futurs ou en cours de règlement, couvertes par des actifs sûrs et liquides ;\n2. La marge de solvabilité (et capital social minimum renforcé par la CIMA) : coussin de fonds propres permettant d'absorber des dérives exceptionnelles de sinistralité.\n\nParallèlement, la digitalisation ouvre de nouveaux canaux de distribution et de relation client (Chapitre 6) :\n- Comparateurs web, plateformes en ligne et applications mobiles avec souscription 100 % digitale et signature électronique ;\n- Self-service sinistre sur smartphone (déclaration photo, suivi temps réel, indemnisation sur Mobile Money) ;\n- Partenariats bancassurance et télécoms-assurance (micro-assurance accessible dès quelques centaines de FCFA par mois via Mobile Money) pour surmonter le défi des 2 % de couverture en Côte d'Ivoire.",
        keyRule:
          "L'assurance fonctionne en cycle de production inversé (prime encaissée avant le sinistre) ⇒ la solvabilité (provisions techniques + marge de solvabilité) et la rapidité d'indemnisation digitale sont les clés de la confiance.",
        formulas: [
          {
            name: 'Équation de confiance et solvabilité en assurance',
            formula: 'Solvabilité = Provisions techniques suffisantes + Marge de solvabilité (Fonds propres)',
            note: 'Contrôlée en permanence par la CRCA dans l’espace CIMA.',
          },
        ],
        workedExample: {
          title: 'Bâtir une offre de micro-assurance santé digitale en Côte d’Ivoire',
          statement:
            "Une Insurtech ivoirienne veut distribuer une micro-assurance santé à 1 000 FCFA/mois pour les travailleurs indépendants. Quelles obligations réglementaires CIMA et quels choix de distribution digitale doit-elle intégrer ?",
          methodSteps: [
            'Cadre légal : s’adosser à une compagnie agréée CIMA (ou obtenir l’agrément micro-assurance CIMA), respecter les provisions techniques et le Code CIMA.',
            'Distribution et paiement : souscription en 2 minutes sur application mobile ou USSD (accessible sans smartphone haut de gamme) avec prélèvement fractionné par Mobile Money.',
            'Expérience sinistre (conquête de confiance) : déclaration par photo/application et remboursement instantané sur portefeuille mobile afin de briser la méfiance vis-à-vis des délais d’indemnisation.',
          ],
          conclusion:
            'Allier conformité CIMA, fractionnement mobile à petit prix et indemnisation quasi instantanée est la clé pour démocratiser l’assurance en Côte d’Ivoire.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Cycle inversé',
            stepTheme: 'Spécificité financière',
            stepTitle: 'Pourquoi la solvabilité est-elle critique en assurance ?',
            paragraphText:
              "Contrairement à une industrie qui connaît son coût de fabrication avant de vendre, l'assureur encaisse la prime d'avance sans connaître le coût exact des sinistres futurs (cycle de production inversé). Il doit donc constituer des provisions techniques rigoureuses et une marge de solvabilité contrôlées par la CRCA.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Que signifie l’expression « cycle de production inversé » dans l’économie de l’assurance ?',
              options: [
                'L’assureur encaisse les primes avant de connaître et de payer le coût réel des sinistres futurs',
                'L’assuré paie sa prime uniquement dix ans après avoir été indemnisé',
                'Les compagnies d’assurance produisent d’abord des voitures avant de les assurer',
                'Les primes diminuent toujours lorsque les sinistres augmentent',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La recette (prime) précède la dépense aléatoire (sinistre), ce qui rend indispensables les provisions techniques et la surveillance de solvabilité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Solvabilité',
            stepTheme: 'Provisions techniques',
            stepTitle: 'Rôle des provisions techniques et de la marge de solvabilité',
            paragraphText:
              "Les provisions techniques représentent les sommes que la compagnie met de côté pour honorer les engagements envers les assurés (sinistres à payer, épargne vie). La marge de solvabilité (fonds propres excédentaires) sert de bouclier supplémentaire en cas d'année catastrophique.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'À quoi servent principalement les « provisions techniques » au passif d’une compagnie d’assurance ?',
              options: [
                'À distribuer immédiatement tous les encaissements aux actionnaires',
                'À garantir que la compagnie dispose des réserves nécessaires pour régler les sinistres et engagements envers les assurés',
                'À financer exclusivement les campagnes publicitaires',
                'À remplacer la taxe sur les conventions d’assurance (TCA)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les provisions techniques matérialisent la dette actuarielle de l’assureur envers la mutualité des assurés.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Parcours digital',
            stepTheme: 'Self-service mobile',
            stepTitle: 'Souscription en ligne et self-service sinistre',
            paragraphText:
              "Les nouveaux canaux digitaux transforment le parcours client (Ch. 4 & 6) : comparateurs web, souscription en ligne avec signature électronique, et applications mobiles en self-service permettant de déclarer un sinistre 24h/24 et suivre son indemnisation en temps réel.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Parmi ces fonctionnalités, laquelle illustre le « self-service via application mobile » dans la digitalisation de l’assurance ?',
              options: [
                'Se déplacer trois fois en agence papier pour obtenir un formulaire',
                'Attendre un courrier postal pendant deux mois sans information',
                'Déclarer un sinistre avec photos depuis son smartphone et suivre son indemnisation en temps réel',
                'Supprimer toute signature électronique sur les contrats',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le self-service mobile donne de l’autonomie à l’assuré (déclaration photo, suivi temps réel, chatbots 24h/24) et accélère l’indemnisation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Inclusion',
            stepTheme: 'Micro-assurance mobile',
            stepTitle: 'Leviers pour dépasser les 2 % de pénétration en Côte d’Ivoire',
            paragraphText:
              "Pour développer la culture assurantielle (TD1 Ex. 3), trois leviers sont décisifs : des produits simples de micro-assurance à primes fractionnées, la distribution par plateformes mobiles/Mobile Money (atteignant les non-bancarisés) et la rapidité/transparence des indemnisations pour bâtir la confiance.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle combinaison est la plus efficace pour lever la barrière de l’accès à l’assurance auprès du secteur informel en Côte d’Ivoire ?',
              options: [
                'Des contrats de 50 pages payables uniquement par chèque annuel de 500 000 FCFA',
                'La suppression de la réglementation CIMA',
                'La fermeture des agences et des plateformes mobiles',
                'La micro-assurance simple à primes fractionnées distribuée et remboursée via Mobile Money',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le fractionnement des primes sur Mobile Money et la simplicité des garanties répondent exactement aux réalités de trésorerie du secteur informel.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Conseil client',
            stepTheme: 'Pédagogie (TD2 Ex. 10)',
            stepTitle: 'Savoir expliquer l’assurance simplement à un client novice',
            paragraphText:
              "Comme le demande l'exercice 10 du TD2 (« Je n'y connais rien. C'est quoi une assurance vie ? »), la pédagogie commerciale est essentielle : utiliser un langage clair (épargne qui fructifie + bouclier financier pour protéger sa famille si un malheur arrive) sans jargon actuariel obscur.",
            exercise: {
              id: 'lmd_entd_l1_assurance_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Face à un client novice qui demande « C’est quoi une assurance vie ? » (TD2 Ex. 10), quelle explication est la plus juste et accessible ?',
              options: [
                'C’est uniquement une taxe obligatoire qui ne rapporte jamais rien de votre vivant',
                'C’est un contrat qui permet à la fois de faire fructifier votre épargne sur le long terme et de protéger vos proches en leur transmettant un capital en cas de décès',
                'C’est une assurance qui ne couvre que les réparations de voiture',
                'C’est un prêt bancaire à court terme pour acheter des stocks',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Expliquer clairement le double rôle (épargne valorisée + protection/transmission aux bénéficiaires) lève les idées reçues et renforce la culture assurantielle.',
            },
          },
        ],
      }),
    ],
  },
];
