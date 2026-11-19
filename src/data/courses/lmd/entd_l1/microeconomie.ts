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
  // CHAPITRE 1 : FONDEMENTS DE LA MICROÉCONOMIE, FPP ET ÉQUILIBRE DE MARCHÉ
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch1',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    title: 'Chapitre 1 : Fondements microéconomiques, FPP et équilibre de marché',
    summary:
      "Maîtriser la démarche microéconomique (guillotine de Hume, statique comparative, équilibre partiel), la Frontière des Possibilités de Production (FPP) et la stabilité de l'équilibre de marché.",
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC — Microéconomie Licence 1 (Dr Sylla N’Gomory Muhamed & Dr Libaud R.A. Doho)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch1_p1',
        order: 1,
        title: 'Objet de la microéconomie, systèmes économiques et méthodologie',
        summary:
          "Rareté des ressources, trois questions fondamentales (que, comment, pour qui produire), guillotine de Hume (positif vs normatif) et statique comparative vs dynamique.",
        conceptExplanation:
          "Le problème économique fondamental consiste à concilier des désirs humains quasiment illimités avec la rareté des facteurs de production (travail, capital/équipements, terre/ressources naturelles, esprit d'entreprise). Toute société doit répondre à trois questions : que produire ? comment produire ? pour qui produire ? Trois grands systèmes y répondent différemment : l'économie libérale (marchés libres guidés par la « main invisible » d'Adam Smith et le système des prix), l'économie dirigée (planification centrale par l'État) et l'économie mixte (marché + forte intervention de l'État via impôts, transferts et biens publics).\n\nLa microéconomie étudie le comportement individuel des unités de base (consommateurs maximisant leur utilité, producteurs maximisant leur profit) sur des marchés spécifiques. Elle repose sur trois piliers méthodologiques :\n1. L'économie positive (expliquer objectivement ce qui EST) par opposition à l'économie normative (prescrire ce qui DEVRAIT ÊTRE, distinction formalisée par la guillotine de Hume : fait/valeur, objectif/subjectif, descriptif/prescriptif, vrai-faux/bien-mal).\n2. La statique comparative (comparer deux équilibres avant et après un choc en supposant un ajustement instantané) par opposition à la dynamique (étudier la trajectoire d'ajustement dans le temps).\n3. L'équilibre partiel (étude d'un seul marché toutes choses égales par ailleurs, ceteris paribus) par opposition à l'équilibre général (équilibre simultané de tous les marchés).",
        keyRule:
          "La microéconomie privilégie trois outils fondamentaux : l'analyse positive (guillotine de Hume), la statique comparative et l'équilibre partiel (hypothèse ceteris paribus).",
        formulas: [
          {
            name: 'Guillotine de Hume (Positif vs Normatif)',
            formula: 'Positif = Est / Fait / Objectif / Descriptif   ≠   Normatif = Devrait être / Valeurs / Prescriptif',
            note: 'Les propositions normatives reposent sur des jugements de valeur non démontrables.',
          },
          {
            name: 'Objet méthodologique central de la microéconomie',
            formula: 'Microéconomie = Économie positive + Statique comparative + Équilibre partiel',
            note: 'Complétée en fin de cursus par l’équilibre général de Walras.',
          },
        ],
        workedExample: {
          title: 'Distinguer statique comparative, dynamique et analyse positive',
          statement:
            "Le prix du cacao double suite à une sécheresse. Un analyste compare le prix d'équilibre initial (1 000 FCFA/kg) et le nouveau prix d'équilibre final (1 800 FCFA/kg) sans modéliser les fluctuations mois par mois. Un second affirme que « l'État devrait subventionner les producteurs ». Qualifiez chaque démarche.",
          methodSteps: [
            "Premier analyste : il compare deux positions d'équilibre sans décrire la trajectoire temporelle intermédiaire ⇒ Statique comparative (et analyse positive car descriptive).",
            "S'il avait modélisé le sentier mois par mois du prix entre 1 000 et 1 800 FCFA, il aurait fait de l'analyse dynamique.",
            'Second analyste : il formule une recommandation (« devrait ») basée sur un jugement de valeur ⇒ Analyse normative (guillotine de Hume).',
          ],
          conclusion:
            "Distinguer positif/normatif et statique comparative/dynamique permet de poser rigoureusement tout problème microéconomique.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fondements',
            stepTheme: 'Problème économique',
            stepTitle: 'Rareté des facteurs et trois questions de tout système économique',
            paragraphText:
              "Les quatre facteurs de production (travail, capital, terre/ressources naturelles, esprit d'entreprise) existent en quantités limitées face à des besoins quasi illimités. Tout système économique (libéral, dirigé ou mixte) doit donc trancher trois questions : que produire, comment produire et pour qui produire ?",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Dans un système d’économie libérale selon Adam Smith, quel mécanisme coordonne spontanément les décisions des acheteurs et vendeurs ?',
              options: [
                'Un office central de planification d’État',
                'Le système des prix guidé par la « main invisible » de l’intérêt personnel',
                'La suppression de la monnaie au profit du troc',
                'Des quotas fixés chaque année par décret',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Selon Adam Smith, la poursuite de l’intérêt individuel sur des marchés libres est coordonnée par les prix comme par une main invisible.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Guillotine de Hume',
            stepTheme: 'Positif vs Normatif',
            stepTitle: 'Opposer économie positive et économie normative',
            paragraphText:
              "Selon la guillotine de Hume présentée en cours, l'économie positive relève du « est / fait / objectif / descriptif / science / vrai-faux » et vise à expliquer et prévoir. L'économie normative relève du « devrait être / valeurs / subjectif / prescriptif / art / bien-mal ».",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Selon le tableau de la guillotine de Hume figurant dans le cours ESATIC, quelle série d’attributs caractérise l’économie POSITIVE ?',
              options: [
                'Devrait être, valeurs, subjectif, prescriptif',
                'Bien/mal, art, jugement moral, norme',
                'Est, fait, objectif, descriptif, science, vrai/faux',
                'Opinion politique, équité, prescription',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’analyse positive s’attache aux faits objectifs et vérifiables (vrai/faux), sans jugement de valeur.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Méthode',
            stepTheme: 'Statique comparative',
            stepTitle: 'Statique comparative versus analyse dynamique',
            paragraphText:
              "La statique comparative compare deux ou plusieurs positions d'équilibre après une modification des conditions de marché, sans étudier le cheminement temporel entre elles (ajustement instantané). La dynamique analyse au contraire le processus d'ajustement des prix et quantités dans le temps.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle méthode microéconomique compare deux positions d’équilibre successives sans s’intéresser au processus temporel de passage de l’une à l’autre ?',
              options: [
                'La statique comparative',
                'L’analyse dynamique',
                'La comptabilité nationale',
                'L’économie normative',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La statique comparative confronte l’équilibre initial et l’équilibre final en faisant abstraction de la trajectoire temporelle.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Équilibre',
            stepTheme: 'Partiel vs Général',
            stepTitle: 'Équilibre partiel (ceteris paribus) vs équilibre général',
            paragraphText:
              "L'équilibre partiel analyse un seul marché ou un seul agent individuel en maintenant constantes toutes les variables des autres marchés (hypothèse ceteris paribus). L'équilibre général lève cette hypothèse pour étudier l'équilibre simultané de tous les marchés.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Que signifie l’hypothèse « ceteris paribus » utilisée dans l’analyse en équilibre partiel ?',
              options: [
                'Tous les prix de tous les marchés varient en même temps',
                'L’État fixe le prix d’équilibre sur chaque marché',
                'Les consommateurs ont un revenu infini',
                'Toutes choses égales par ailleurs (les variables des autres marchés sont maintenues constantes)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Ceteris paribus signifie « toutes choses égales par ailleurs », indispensable pour isoler l’effet d’une seule variable sur un marché donné.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Synthèse',
            stepTheme: 'Trépied microéconomique',
            stepTitle: 'Les trois piliers de la microéconomie standard',
            paragraphText:
              "Le cours résume l'objet principal de la microéconomie en trois termes précis : la statique comparative, l'équilibre partiel et l'économie positive — appliqués à des agents individuels rationnels (homo œconomicus).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'Quel trio définit l’objet principal de l’analyse microéconomique selon le support ESATIC ?',
              options: [
                'Analyse dynamique, économie normative et équilibre budgétaire',
                'Statique comparative, équilibre partiel et économie positive',
                'Agrégats nationaux, politique monétaire et inflation',
                'Planification centrale, transferts sociaux et balance commerciale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La microéconomie repose prioritairement sur la statique comparative, l’équilibre partiel et l’analyse positive.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch1_p2',
        order: 2,
        title: "Frontière des possibilités de production (FPP) et coût d'opportunité",
        summary:
          "Interpréter les points sur, dans et hors de la FPP, calculer le coût d'opportunité et relier la concavité de la FPP aux rendements décroissants.",
        conceptExplanation:
          "En raison de la rareté des ressources, produire davantage d'un bien X_1 impose de transférer des ressources depuis la production d'un autre bien X_2. Cet arbitrage est représenté par la Frontière des Possibilités de Production (FPP), qui indique pour chaque quantité de X_1 la quantité maximale de X_2 réalisable :\n- Un point SUR la FPP (ex. A, B, C) correspond à une utilisation efficiente (plein emploi) des ressources rares.\n- Un point À L'INTÉRIEUR de la FPP (ex. D) est réalisable mais inefficient : la société possède des ressources oisives (chômage, machines sous-utilisées) et peut produire plus d'un bien sans sacrifier l'autre.\n- Un point À L'EXTÉRIEUR de la FPP (ex. E) est inaccessible compte tenu des ressources et de la technologie actuelles.\n\nLe coût d'opportunité (CO) d'un bien X_1 est la quantité de l'autre bien X_2 à laquelle il faut renoncer pour obtenir une unité supplémentaire de X_1 : CO(X_1) = |ΔX_2 / ΔX_1|.\n- Si les coûts d'opportunité sont croissants (facteurs imparfaitement substituables ou loi des rendements décroissants), la FPP est CONCAVE par rapport à l'origine.\n- Si les coûts d'opportunité sont constants, la FPP est une droite affine de pente négative.",
        keyRule:
          "Sur la FPP = efficient ; dedans = réalisable mais ressources oisives ; dehors = inaccessible. CO croissants ⇒ FPP concave ; CO constants ⇒ FPP droite.",
        formulas: [
          {
            name: 'Coût d’opportunité de X₁ en termes de X₂',
            formula: 'CO(X_1) = − ΔX_2 / ΔX_1 = |ΔX_2 / ΔX_1|',
            note: 'Correspond à la valeur absolue de la pente de la tangente à la FPP.',
          },
          {
            name: 'Forme de la FPP',
            formula: 'CO croissants (rendements décroissants) ⇔ FPP concave  |  CO constants ⇔ FPP linéaire',
            note: 'La croissance économique (progrès technique, hausse des facteurs) déplace la FPP vers l’extérieur.',
          },
        ],
        workedExample: {
          title: 'Analyser une FPP et calculer un coût d’opportunité',
          statement:
            "Une économie peut produire sur sa FPP : Combinaison A (0 ordinateurs, 100 tonnes de cacao), B (20 ordinateurs, 80 t de cacao), C (40 ordinateurs, 40 t de cacao), D (20 ordinateurs, 50 t de cacao) et E (40 ordinateurs, 80 t de cacao). Calculez les coûts d'opportunité entre A→B et B→C et qualifiez D et E.",
          methodSteps: [
            'De A à B : +20 ordinateurs coûtent −20 t de cacao ⇒ CO = 20 / 20 = 1 tonne de cacao par ordinateur.',
            'De B à C : +20 ordinateurs supplémentaires coûtent −40 t de cacao ⇒ CO = 40 / 20 = 2 tonnes de cacao par ordinateur.',
            'Le coût d’opportunité passe de 1 à 2 t/ordinateur : il est croissant ⇒ la FPP est concave par rapport à l’origine.',
            'D (20 ; 50) est sous B (20 ; 80) : point réalisable mais inefficient (ressources oisives). E (40 ; 80) est au-dessus de C (40 ; 40) : point inaccessible.',
          ],
          conclusion:
            "Plus on se spécialise dans un bien, plus son coût d'opportunité augmente (FPP concave) en raison de la spécialisation des facteurs et des rendements décroissants.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'FPP',
            stepTheme: 'Arbitrage & Efficience',
            stepTitle: 'Interpréter les trois zones de la Frontière des Possibilités de Production',
            paragraphText:
              "La FPP trace la production maximale réalisable de deux biens X_1 et X_2 à ressources et technologie données. Sur la courbe, les ressources sont utilisées efficacement ; à l'intérieur, des ressources sont oisives (inefficience) ; à l'extérieur, la combinaison est inaccessible.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Que représente un point situé strictement À L’INTÉRIEUR de la Frontière des Possibilités de Production (FPP) ?',
              options: [
                'Une combinaison réalisable mais inefficiente, traduisant l’existence de ressources oisives',
                'Une combinaison techniquement inaccessible avec les ressources actuelles',
                'Une utilisation optimale et maximale de tous les facteurs de production',
                'Un coût d’opportunité infini',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À l’intérieur de la FPP, il est possible d’augmenter la production d’un bien sans sacrifier l’autre car des ressources restent sous-employées.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Coût d’opportunité',
            stepTheme: 'Renoncement',
            stepTitle: "Définition et calcul du coût d'opportunité",
            paragraphText:
              "Le coût d'opportunité (CO) d'un bien est la quantité d'autres biens à laquelle il faut renoncer pour produire une unité supplémentaire de ce bien : CO(X_1) = |ΔX_2 / ΔX_1|.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Pour passer de 10 à 15 logiciels produits, une entreprise doit renoncer à 20 formations (qui passent de 60 à 40). Quel est le coût d’opportunité d’un logiciel supplémentaire ?',
              options: ['0,25 formation', '4 formations', '20 formations', '5 formations'],
              correctAnswerIndex: 1,
              explanation:
                'CO = |ΔFormations / ΔLogiciels| = 20 / 5 = 4 formations sacrifiées par logiciel supplémentaire.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Concavité',
            stepTheme: 'CO croissants vs constants',
            stepTitle: "Relier la forme de la FPP à l'évolution des coûts d'opportunité",
            paragraphText:
              "Lorsque les coûts d'opportunité sont croissants, la FPP est concave par rapport à l'origine (courbée vers l'extérieur). Lorsque les coûts d'opportunité sont constants, la FPP est une droite affine de pente négative.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle est la forme géométrique de la FPP lorsque les coûts d’opportunité sont constants ?',
              options: [
                'Une courbe strictement convexe vers l’origine',
                'Une courbe verticale',
                'Une droite affine de pente négative',
                'Un cercle centré sur l’origine',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Des coûts d’opportunité constants signifient que la pente |ΔX_2/ΔX_1| est constante : la FPP est donc une droite décroissante.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Rendements',
            stepTheme: 'Loi des rendements décroissants',
            stepTitle: 'Pourquoi les coûts d’opportunité sont généralement croissants',
            paragraphText:
              "Le cours donne deux causes aux coûts d'opportunité croissants : (1) les facteurs de production ont des qualités différentes et sont inégalement adaptés à chaque bien ; (2) la loi des rendements décroissants : chaque unité supplémentaire d'un facteur augmente la production d'une quantité inférieure à l'unité précédente.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Que stipule la loi des rendements décroissants énoncée dans le cours ESATIC ?',
              options: [
                'La production totale devient immédiatement négative dès le deuxième travailleur',
                'Les coûts de production baissent toujours lorsque la production augmente',
                'Tous les facteurs de production sont parfaitement identiques',
                'Chaque unité supplémentaire d’un facteur augmente la production totale d’une quantité inférieure à celle ajoutée par l’unité précédente',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La loi des rendements décroissants explique la baisse de la contribution marginale d’un facteur additionnel, et donc la hausse du coût d’opportunité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Efficience vs Inaccessible',
            stepTitle: 'Comment atteindre un point auparavant inaccessible (hors FPP) ?',
            paragraphText:
              "À court terme, un point situé à l'extérieur de la FPP est inaccessible. Pour l'atteindre, il ne suffit pas de réallouer les ressources existantes : il faut déplacer la FPP vers l'extérieur via un progrès technique ou un accroissement des facteurs de production (capital, travail).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Comment une économie peut-elle rendre accessible un point E situé initialement au-delà de sa FPP ?',
              options: [
                'En laissant des machines inutilisées',
                'Grâce au progrès technique ou à une augmentation du stock de facteurs de production déplaçant la FPP vers l’extérieur',
                'En réduisant la production des deux biens simultanément',
                'En passant d’un point efficient A à un autre point efficient B sur la même FPP',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seuls l’innovation/progrès technique ou l’accumulation de facteurs déplacent la FPP vers l’extérieur.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch1_p3',
        order: 3,
        title: "Offre, demande, équilibre de marché et stabilité au sens de Walras",
        summary:
          "Prix de réserve, fonctions de demande (f'<0) et d'offre (g'>0), calcul de l'équilibre (P*, Q*), excès d'offre/demande et stabilité walrasienne.",
        conceptExplanation:
          "Un marché (physique ou dématérialisé comme la bourse ; au comptant ou à terme) met en relation acheteurs et vendeurs.\n\n1. Demande : quantité souhaitée par les acheteurs pour chaque prix P (ceteris paribus). Le prix de réserve est le montant maximal qu'un acheteur est prêt à payer. Quand P baisse, il passe sous le prix de réserve de plus d'acheteurs ⇒ Q^D = f(P) avec f'(P) < 0 (pente négative).\n2. Offre : quantité que les producteurs désirent vendre pour chaque prix P. Quand P augmente, la production devient plus lucrative ⇒ Q^S = g(P) avec g'(P) > 0 (pente positive).\n3. Équilibre de marché : point E(Q*, P*) où Q^D(P*) = Q^S(P*) (ni pénurie ni surplus). Si P_1 > P*, Q^S > Q^D (excès d'offre / invendus ⇒ concurrence entre vendeurs ⇒ baisse de P). Si P_2 < P*, Q^D > Q^S (excès de demande / pénurie ⇒ surenchère des acheteurs ⇒ hausse de P).\n\n4. Stabilité au sens de Walras :\n- Équilibre stable : toute déviation engendre des forces de rappel ramenant à E (en représentation P en ordonnée, courbe d'offre plus raide / cas normal pente offre > 0 et demande < 0).\n- Équilibre instable : une perturbation éloigne durablement le marché de E.\n- Équilibre neutre ou métastable : aucune force de retour ni d'éloignement (courbes d'offre et de demande confondues).",
        keyRule:
          "Équilibre de marché : Q^D(P*) = Q^S(P*). Si P > P* ⇒ excès d'offre ⇒ pression à la baisse sur P. Si P < P* ⇒ excès de demande ⇒ pression à la hausse sur P.",
        formulas: [
          {
            name: 'Lois de la demande et de l’offre',
            formula: 'Q^D = f(P) avec f’(P) < 0   |   Q^S = g(P) avec g’(P) > 0',
            note: 'À l’équilibre E(Q*, P*) : f(P*) = g(P*) = Q*.',
          },
          {
            name: 'Dynamique de retour à l’équilibre (tâtonnement walrasien)',
            formula: 'P > P* ⇒ Q^S > Q^D ⇒ ΔP < 0   |   P < P* ⇒ Q^D > Q^S ⇒ ΔP > 0',
            note: 'Équilibre stable si le mécanisme des prix restaure spontanément E.',
          },
        ],
        workedExample: {
          title: 'Déterminer l’équilibre d’un marché et analyser un déséquilibre (TD1)',
          statement:
            "Sur un marché, l'offre est Q^S = 4 000 + 400P et la demande est Q^D = 16 000 − 400P (correspondant au tableau du jeu d'échecs du TD1). Calculez le prix et la quantité d'équilibre, puis diagnostiquez la situation pour P = 20 €.",
          methodSteps: [
            'Condition d’équilibre Q^S = Q^D : 4 000 + 400P* = 16 000 − 400P* ⇒ 800P* = 12 000 ⇒ P* = 15 €.',
            'Quantité d’équilibre : Q* = 4 000 + 400(15) = 10 000 unités (vérification : 16 000 − 400×15 = 10 000).',
            'Pour P = 20 € (> P*) : Q^S = 12 000 et Q^D = 8 000 ⇒ Excès d’offre (surplus d’invendus) de 4 000 unités.',
            'Force de rappel : pour écouler leurs 4 000 invendus, les vendeurs se font concurrence et abaissent leurs prix jusqu’à 15 €.',
          ],
          conclusion:
            "L'équilibre unique et stable s'établit à P* = 15 € et Q* = 10 000 unités.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Demande',
            stepTheme: 'Prix de réserve',
            stepTitle: 'Prix de réserve et pente négative de la demande',
            paragraphText:
              "Le prix de réserve d'un consommateur est le montant maximal qu'il est disposé à payer pour acquérir un bien (prix d'indifférence entre acheter et ne pas acheter). Quand le prix baisse, il devient inférieur au prix de réserve de nouveaux acheteurs, d'où Q^D = f(P) avec f'(P) < 0.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Comment définit-on le « prix de réserve » d’un consommateur en microéconomie ?',
              options: [
                'Le prix minimal auquel une entreprise accepte de fermer son usine',
                'Le montant maximum qu’une personne est prête à payer pour acheter un bien',
                'La taxe ajoutée par l’État sur les produits importés',
                'Le prix moyen constaté sur les dix dernières années',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le prix de réserve est le plafond de disposition à payer d’un acheteur : au-dessus, il renonce ; en dessous, il achète et dégage un surplus.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Marchés',
            stepTheme: 'Comptant vs Terme',
            stepTitle: 'Distinguer marché au comptant et marché à terme',
            paragraphText:
              "Le cours distingue les marchés au comptant (échanges et livraison réalisés immédiatement) et les marchés à terme (transactions exécutées à une date ultérieure selon un prix, une quantité, une qualité et un lieu fixés d'avance par contrat).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Sur quel type de marché les parties signent-elles aujourd’hui un contrat fixant le prix et la quantité d’une livraison prévue dans 6 mois ?',
              options: [
                'Un marché au comptant',
                'Un marché non marchand',
                'Un marché à terme',
                'Un marché de troc instantané',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le marché à terme fixe contractuellement aujourd’hui les conditions d’un échange qui sera dénoué à une échéance future.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Point d’équilibre',
            stepTitle: 'Résoudre un équilibre offre-demande linéaire',
            paragraphText:
              "Pour trouver le couple d'équilibre (P*, Q*), on pose Q^D(P) = Q^S(P), on résout en P*, puis on reporte P* dans l'une des deux fonctions (et on vérifie dans l'autre !).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Soient Q^D = 120 − 2P et Q^S = 20 + 3P. Quels sont le prix d’équilibre P* et la quantité d’équilibre Q* ?',
              options: [
                'P* = 20 et Q* = 80',
                'P* = 25 et Q* = 70',
                'P* = 10 et Q* = 50',
                'P* = 40 et Q* = 40',
              ],
              correctAnswerIndex: 0,
              explanation:
                '120 − 2P = 20 + 3P ⇒ 5P = 100 ⇒ P* = 20 ; Q* = 120 − 2(20) = 80 (et 20 + 3×20 = 80).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Déséquilibre',
            stepTheme: 'Excès d’offre / demande',
            stepTitle: 'Ajustement des prix en cas de pénurie ou de surplus',
            paragraphText:
              "Si le prix de marché est supérieur à P*, il y a excès d'offre (Q^S > Q^D) : les invendus poussent les vendeurs à baisser les prix. S'il est inférieur à P*, il y a excès de demande (Q^D > Q^S) : la surenchère des acheteurs fait monter les prix vers P*.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Sur le marché précédent (Q^D = 120 − 2P, Q^S = 20 + 3P, P* = 20), que se passe-t-il si l’État impose un prix plafond P = 14 ?',
              options: [
                'Un excès d’offre de 30 unités',
                'Un équilibre parfait sans pénurie',
                'Un excès de demande de 10 unités',
                'Un excès de demande (pénurie) de 30 unités',
              ],
              correctAnswerIndex: 3,
              explanation:
                'À P = 14 : Q^D = 120 − 28 = 92 et Q^S = 20 + 42 = 62 ⇒ Q^D − Q^S = 30 unités de pénurie (excès de demande).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Stabilité',
            stepTheme: 'Walras',
            stepTitle: 'Équilibre stable, instable et neutre (métastable)',
            paragraphText:
              "Un équilibre est stable si une perturbation déclenche des forces de marché qui restaurent l'équilibre ; instable si elle l'en éloigne ; neutre (ou métastable) si les courbes d'offre et de demande coïncident et qu'aucune force de retour ni d'éloignement n'apparaît.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Dans quel cas dit-on qu’un équilibre de marché est « neutre » ou « métastable » ?',
              options: [
                'Lorsque la courbe d’offre est verticale',
                'Lorsqu’un écart par rapport à l’équilibre n’engendre aucune force ni de retour ni d’éloignement (courbes confondues)',
                'Lorsque le prix d’équilibre est égal à zéro',
                'Lorsque la demande augmente suite à une hausse des revenus',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un équilibre métastable (neutre) se produit lorsque les courbes d’offre et de demande coïncident : un déplacement ne crée aucune force de rappel.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : THÉORIE DU CONSOMMATEUR ET ANALYSE DE LA DEMANDE
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch2',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    title: 'Chapitre 2 : Théorie du consommateur et analyse de la demande',
    summary:
      "Maîtriser les préférences, courbes d'indifférence, TMS, contrainte budgétaire, équilibre optimal du consommateur (Lagrangien) et les élasticités de la demande.",
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC — Microéconomie 1 (Partie I : Chap. I Préférences/Utilité, Chap. II Équilibre, Chap. III Demande)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p1',
        order: 1,
        title: "Préférences, utilité, courbes d'indifférence et TMS",
        summary:
          "Comportement de l'homo œconomicus, utilité totale/marginale, propriétés des courbes d'indifférence et calcul du Taux Marginal de Substitution (TMS).",
        conceptExplanation:
          "La théorie du consommateur modélise les choix rationnels de l'homo œconomicus disposant de préférences complètes, réflexives, transitives et monotones (non-saturation). L'utilité ordinale classe les paniers de biens (x_1, x_2) par ordre de préférence via une fonction U(x_1, x_2).\n\n1. Utilité marginale : Um_1 = ∂U/∂x_1 (supplément de satisfaction apporté par une unité additionnelle du bien 1, généralement décroissante : 1re loi de Gossen).\n2. Courbe d'indifférence : lieu géométrique de tous les paniers (x_1, x_2) procurant exactement le même niveau d'utilité U_0. Propriétés : décroissante, convexe vers l'origine, deux courbes d'indifférence ne se coupent jamais, et plus on s'éloigne de l'origine, plus l'utilité est élevée.\n3. Taux Marginal de Substitution (TMS_{1→2}) : quantité de bien 2 à laquelle le consommateur accepte de renoncer pour obtenir une unité supplémentaire de bien 1 à utilité constante (dU = 0) :\nTMS_{1/2} = − dx_2 / dx_1 = Um_1 / Um_2.\nLa convexité des préférences signifie que le TMS est décroissant le long d'une courbe d'indifférence (goût pour la diversité).",
        keyRule:
          "Le long d'une courbe d'indifférence (dU = 0), le TMS vaut toujours le rapport des utilités marginales : TMS = −dx₂/dx₁ = Um₁ / Um₂, et il décroît quand x₁ augmente.",
        formulas: [
          {
            name: 'Utilités marginales et Taux Marginal de Substitution',
            formula: 'Um_1 = ∂U/∂x_1,  Um_2 = ∂U/∂x_2   |   TMS_{1/2} = −dx_2/dx_1 = Um_1 / Um_2',
            note: 'S’obtient en écrivant la différentielle totale dU = Um₁·dx₁ + Um₂·dx₂ = 0.',
          },
          {
            name: 'TMS d’une fonction Cobb-Douglas U = A·x₁^α·x₂^β',
            formula: 'TMS_{1/2} = (α / β) · (x_2 / x_1)',
            note: 'Formule ultra-fréquente en TD et examen de Microéconomie L1 !',
          },
        ],
        workedExample: {
          title: 'Calculer les utilités marginales et le TMS d’une fonction Cobb-Douglas',
          statement:
            "Soit la fonction d'utilité U(x_1, x_2) = 4·x_1^{0,5}·x_2^{0,5}. Calculez Um_1, Um_2 et le TMS au panier (x_1 = 4, x_2 = 16), puis interprétez économiquement.",
          methodSteps: [
            'Um_1 = ∂U/∂x_1 = 4 × 0,5 · x_1^{−0,5} · x_2^{0,5} = 2 · (x_2 / x_1)^{0,5}.',
            'Um_2 = ∂U/∂x_2 = 4 × 0,5 · x_1^{0,5} · x_2^{−0,5} = 2 · (x_1 / x_2)^{0,5}.',
            'TMS_{1/2} = Um_1 / Um_2 = x_2 / x_1 (vérifié par (0,5/0,5)·(x_2/x_1) = x_2/x_1).',
            'Au point (4 ; 16) : TMS = 16 / 4 = 4.',
          ],
          conclusion:
            'À ce panier, le consommateur est prêt à sacrifier 4 unités de bien 2 pour obtenir 1 unité supplémentaire de bien 1 en conservant la même satisfaction.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Axiomes',
            stepTheme: 'Préférences rationnelles',
            stepTitle: 'Transitivité et non-saturation des préférences',
            paragraphText:
              "La rationalité du consommateur suppose notamment la transitivité (si A est préféré à B et B est préféré à C, alors A est préféré à C) et la non-saturation (à quantité égale de l'autre bien, « plus » est toujours préféré à « moins »).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Si un consommateur préfère le panier A au panier B et le panier B au panier C, quel axiome garantit qu’il préfère A à C ?',
              options: [
                'La transitivité des préférences',
                'La décroissance du coût marginal',
                'La loi des grands nombres',
                'La concurrence imparfaite',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La transitivité assure la cohérence logique du classement des paniers (A ≻ B et B ≻ C ⇒ A ≻ C) et interdit que deux courbes d’indifférence se coupent.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Indifférence',
            stepTheme: 'Courbes d’indifférence',
            stepTitle: 'Pourquoi deux courbes d’indifférence ne peuvent jamais se couper',
            paragraphText:
              "Une courbe d'indifférence rassemble tous les paniers procurant le même niveau d'utilité. Si deux courbes se coupaient en un point I, cela violerait simultanément la transitivité et la non-saturation (deux paniers de niveaux d'utilité différents seraient tous deux équivalents à I).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Parmi les propriétés suivantes des courbes d’indifférence standards (biens désirables), laquelle est FAUSSE ?',
              options: [
                'Elles sont décroissantes',
                'Deux courbes d’indifférence correspondant à des niveaux d’utilité distincts peuvent se couper',
                'Elles sont convexes par rapport à l’origine',
                'Une courbe plus éloignée de l’origine représente un niveau d’utilité supérieur',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Deux courbes d’indifférence de niveaux différents ne se coupent jamais par cohérence (transitivité + non-saturation).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul TMS',
            stepTheme: 'Cobb-Douglas',
            stepTitle: 'Calculer rapidement le TMS d’une utilité Cobb-Douglas',
            paragraphText:
              "Pour U(x_1, x_2) = A·x_1^α·x_2^β, le TMS vaut directement (α/β)·(x_2/x_1). On vérifie immédiatement qu'à mesure que x_1 augmente et x_2 diminue, le TMS diminue (convexité).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Pour la fonction d’utilité U(x_1, x_2) = x_1^2 · x_2, quelle est l’expression du TMS_{1/2} = Um_1 / Um_2 ?',
              options: [
                'x_1 / (2x_2)',
                'x_2 / x_1',
                '2 · (x_2 / x_1)',
                '2 · x_1 · x_2',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Um_1 = 2·x_1·x_2 et Um_2 = x_1^2 ⇒ TMS = (2·x_1·x_2) / x_1^2 = 2·(x_2 / x_1) = (α/β)·(x_2/x_1).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Interprétation',
            stepTheme: 'Signification du TMS',
            stepTitle: 'Interpréter économiquement la valeur numérique du TMS',
            paragraphText:
              "Si TMS_{1/2} = 3 au panier courant, le consommateur valorise tellement la prochaine unité de bien 1 qu'il est prêt à céder 3 unités de bien 2 pour l'obtenir tout en restant sur la même courbe d'indifférence.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Au panier (x_1 = 5, x_2 = 15), le TMS_{1/2} d’un consommateur vaut 3. Quelle est la bonne interprétation économique ?',
              options: [
                'Le prix du bien 1 est forcément égal à 3 FCFA',
                'Le consommateur achète 3 fois plus de bien 1 que de bien 2',
                'Le consommateur refuse tout échange entre bien 1 et bien 2',
                'Le consommateur accepte de céder 3 unités de bien 2 pour obtenir 1 unité supplémentaire de bien 1 à satisfaction constante',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le TMS mesure le taux subjectif d’échange à utilité constante : combien d’unités de x_2 on cède pour +1 unité de x_1.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Cas particuliers',
            stepTheme: 'Substituts & Compléments',
            stepTitle: 'Substituts parfaits et compléments parfaits',
            paragraphText:
              "Deux cas limites reviennent souvent aux examens : pour des substituts parfaits (U = a·x_1 + b·x_2), les courbes d'indifférence sont des droites et le TMS = a/b est constant ; pour des compléments parfaits (U = min(a·x_1, b·x_2), ex. chaussure gauche et droite), les courbes sont en angle droit (forme de L).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle fonction d’utilité représente deux biens parfaitement complémentaires (consommés en proportions fixes, courbes d’indifférence en forme de L) ?',
              options: [
                'U(x_1, x_2) = x_1 + x_2',
                'U(x_1, x_2) = min(a·x_1, b·x_2)',
                'U(x_1, x_2) = x_1 · x_2',
                'U(x_1, x_2) = 2x_1 + 3x_2',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fonction de Leontief U = min(a·x_1, b·x_2) modélise les compléments parfaits aux courbes d’indifférence en angle droit.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p2',
        order: 2,
        title: 'Contrainte budgétaire et équilibre optimal du consommateur',
        summary:
          "Écrire la droite de budget, poser le programme de maximisation de l'utilité (Lagrangien) et résoudre la condition de tangence TMS = P1 / P2.",
        conceptExplanation:
          "Le consommateur dispose d'un revenu nominal R pour acheter les biens 1 et 2 aux prix P_1 et P_2. Sa contrainte budgétaire s'écrit :\nP_1·x_1 + P_2·x_2 = R  ⇔  x_2 = (R / P_2) − (P_1 / P_2)·x_1.\n- La pente de la droite de budget est −P_1 / P_2 (prix relatif du bien 1 en termes de bien 2).\n- Les intersections avec les axes sont R/P_1 (tout le revenu en bien 1) et R/P_2 (tout en bien 2).\n\nLe programme du consommateur consiste à maximiser U(x_1, x_2) sous la contrainte P_1·x_1 + P_2·x_2 = R.\nPar la méthode de Lagrange : L(x_1, x_2, λ) = U(x_1, x_2) + λ(R − P_1·x_1 − P_2·x_2). Les conditions du premier ordre donnent :\nUm_1 / P_1 = Um_2 / P_2 = λ  ⇔  TMS_{1/2} = Um_1 / Um_2 = P_1 / P_2.\nGéométriquement, l'optimum est le point de tangence entre la droite de budget et la plus haute courbe d'indifférence atteignable. Économiquement, le dernier franc dépensé doit procurer exactement la même utilité marginale sur chaque bien (2e loi de Gossen).",
        keyRule:
          "À l'optimum intérieur du consommateur, résous toujours le système de 2 équations : (1) TMS = P₁/P₂ (soit Um₁/P₁ = Um₂/P₂) et (2) contrainte budgétaire P₁x₁ + P₂x₂ = R.",
        formulas: [
          {
            name: 'Condition d’équilibre du consommateur',
            formula: 'TMS_{1/2} = Um_1 / Um_2 = P_1 / P_2   et   P_1·x_1 + P_2·x_2 = R',
            note: 'Équivaut à l’égalisation des utilités marginales pondérées par les prix : Um₁/P₁ = Um₂/P₂ = λ.',
          },
          {
            name: 'Raccourci Cobb-Douglas U = A·x₁^α·x₂^β',
            formula: 'x_1* = [α / (α + β)] · (R / P_1)   |   x_2* = [β / (α + β)] · (R / P_2)',
            note: 'Le consommateur consacre une part constante α/(α+β) de son revenu au bien 1 !',
          },
        ],
        workedExample: {
          title: 'Trouver le panier optimal d’un consommateur par le Lagrangien',
          statement:
            "Un étudiant dispose d'un budget R = 12 000 FCFA pour des repas (x_1 à P_1 = 1 000 FCFA) et des crédits Internet (x_2 à P_2 = 500 FCFA). Sa fonction d'utilité est U(x_1, x_2) = x_1^{2/3} · x_2^{1/3}. Déterminez le panier optimal (x_1*, x_2*).",
          methodSteps: [
            'Écrire la contrainte budgétaire : 1 000·x_1 + 500·x_2 = 12 000.',
            'Calculer le TMS : TMS = (α/β)·(x_2/x_1) = ((2/3)/(1/3))·(x_2/x_1) = 2·(x_2/x_1).',
            'Appliquer la condition de tangence TMS = P_1/P_2 : 2·(x_2/x_1) = 1 000 / 500 = 2 ⇒ x_2 = x_1.',
            'Injecter x_2 = x_1 dans le budget : 1 000·x_1 + 500·x_1 = 12 000 ⇒ 1 500·x_1 = 12 000 ⇒ x_1* = 8 et x_2* = 8.',
            'Vérification par le raccourci Cobb-Douglas : x_1* = (2/3)·(12 000/1 000) = 8 ; x_2* = (1/3)·(12 000/500) = 8.',
          ],
          conclusion:
            "Le consommateur maximise sa satisfaction en achetant 8 repas (8 000 FCFA) et 8 forfaits Internet (4 000 FCFA), épuisant intégralement son budget.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Budget',
            stepTheme: 'Droite de budget',
            stepTitle: 'Équation et pente de la droite de contrainte budgétaire',
            paragraphText:
              "La droite de budget P_1·x_1 + P_2·x_2 = R s'écrit x_2 = R/P_2 − (P_1/P_2)·x_1. Sa pente (−P_1/P_2) mesure le coût d'opportunité marchand du bien 1 en termes de bien 2. Une hausse de R déplace la droite parallèlement vers l'extérieur sans changer sa pente.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Comment se déplace la droite de budget si le revenu R augmente de 20 % tandis que les prix P_1 et P_2 restent inchangés ?',
              options: [
                'Elle pivote autour de l’axe vertical en changeant de pente',
                'Elle se déplace parallèlement vers l’extérieur (droite) sans changement de pente',
                'Elle se déplace parallèlement vers l’origine',
                'Elle devient verticale',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le rapport des prix P_1/P_2 ne change pas (pente inchangée), mais les pouvoirs d’achat maximaux R/P_1 et R/P_2 augmentent de 20 %.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Optimum',
            stepTheme: 'Condition de tangence',
            stepTitle: 'Égalité entre TMS et rapport des prix (2e loi de Gossen)',
            paragraphText:
              "À l'équilibre intérieur du consommateur, la courbe d'indifférence est tangente à la droite de budget : TMS_{1/2} = P_1 / P_2, ce qui équivaut à Um_1 / P_1 = Um_2 / P_2 = λ (le multiplicateur de Lagrange λ représente l'utilité marginale du revenu).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Que signifie économiquement le multiplicateur de Lagrange λ dans le programme de maximisation du consommateur ?',
              options: [
                'Le prix du bien 1',
                'Le montant total des impôts payés',
                'L’utilité marginale du revenu (gain d’utilité apporté par 1 FCFA de revenu supplémentaire)',
                'La quantité totale de bien 2 achetée',
              ],
              correctAnswerIndex: 2,
              explanation:
                'À l’optimum, λ = Um_1/P_1 = Um_2/P_2 = dU*/dR mesure le supplément de satisfaction procuré par une unité monétaire additionnelle.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Résolution',
            stepTheme: 'Panier optimal',
            stepTitle: 'Calculer un panier optimal Cobb-Douglas',
            paragraphText:
              "Avec U = x_1·x_2 (exposants égaux α = β = 1), le consommateur consacre exactement la moitié de son budget à chaque bien : x_1* = R / (2P_1) et x_2* = R / (2P_2).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Un consommateur d’utilité U(x_1, x_2) = x_1·x_2 dispose d’un revenu R = 200 avec P_1 = 5 et P_2 = 10. Quel est son panier optimal (x_1*, x_2*) ?',
              options: [
                'x_1* = 20 et x_2* = 10',
                'x_1* = 10 et x_2* = 20',
                'x_1* = 40 et x_2* = 0',
                'x_1* = 15 et x_2* = 12,5',
              ],
              correctAnswerIndex: 0,
              explanation:
                'TMS = x_2/x_1 = P_1/P_2 = 5/10 = 0,5 ⇒ x_1 = 2x_2. Dans le budget : 5(2x_2) + 10x_2 = 200 ⇒ 20x_2 = 200 ⇒ x_2* = 10 et x_1* = 20.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Déséquilibre individuel',
            stepTitle: 'Que faire si Um₁/P₁ > Um₂/P₂ ?',
            paragraphText:
              "Si au panier actuel Um_1 / P_1 > Um_2 / P_2 (autrement dit TMS > P_1 / P_2), le dernier franc dépensé en bien 1 rapporte plus de satisfaction que le dernier franc dépensé en bien 2. Le consommateur doit donc acheter PLUS de bien 1 et MOINS de bien 2 jusqu'à retrouver l'égalité.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Si un consommateur constate que Um_1 / P_1 = 8 et Um_2 / P_2 = 4 tout en dépensant tout son budget, comment doit-il modifier son panier pour augmenter son utilité ?',
              options: [
                'Il est déjà à l’optimum et ne doit rien changer',
                'Acheter moins de bien 1 et plus de bien 2',
                'Réduire sa consommation des deux biens à zéro',
                'Acheter plus de bien 1 et moins de bien 2 jusqu’à égaliser Um_1/P_1 et Um_2/P_2',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le franc dépensé en bien 1 procure 2 fois plus d’utilité marginale que celui dépensé en bien 2 : il faut transférer du budget vers le bien 1.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Choc de prix',
            stepTheme: 'Absence d’illusion monétaire',
            stepTitle: 'Homogénéité de degré 0 de la demande',
            paragraphText:
              "Si le revenu R et tous les prix (P_1, P_2) sont simultanément multipliés par 2, l'équation budgétaire (2P_1·x_1 + 2P_2·x_2 = 2R) reste strictement identique : le panier optimal (x_1*, x_2*) ne change pas (absence d'illusion monétaire).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Que devient le panier optimal (x_1*, x_2*) d’un consommateur rationnel si son revenu et tous les prix doublent simultanément ?',
              options: [
                'Les quantités consommées doublent',
                'Le panier optimal reste strictement inchangé (absence d’illusion monétaire)',
                'Les quantités consommées sont divisées par deux',
                'Le consommateur n’achète plus que le bien le moins cher',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les fonctions de demande marshalliennes sont homogènes de degré 0 par rapport aux prix et au revenu : le pouvoir d’achat réel et les prix relatifs restent inchangés.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch2_p3',
        order: 3,
        title: 'Analyse de la demande, élasticités et lois d’Engel',
        summary:
          "Calculer et interpréter les élasticités-prix, élasticités-revenu (lois d'Engel / biens normaux, inférieurs, supérieurs) et élasticités croisées (substituts vs compléments).",
        conceptExplanation:
          "Les élasticités mesurent la sensibilité relative (en %) de la quantité demandée Q à une variation de 1 % d'un de ses déterminants (prix propre, revenu, prix d'un autre bien) :\n\n1. Élasticité-prix directe : e_p = (ΔQ / Q) / (ΔP / P) = (∂Q / ∂P) · (P / Q). Généralement négative (sauf bien de Giffen).\n- |e_p| > 1 : demande élastique (une hausse de P fait baisser la recette totale P·Q) ;\n- |e_p| < 1 : demande inélastique / rigide (une hausse de P fait augmenter la recette totale) ;\n- |e_p| = 1 : élasticité unitaire (recette maximale).\n\n2. Élasticité-revenu : e_R = (ΔQ / Q) / (ΔR / R) = (∂Q / ∂R) · (R / Q) (lois d'Engel) :\n- e_R < 0 : bien inférieur (sa consommation baisse quand le revenu augmente) ;\n- 0 < e_R < 1 : bien normal de première nécessité (sa part budgétaire diminue quand le revenu croît, ex. alimentation) ;\n- e_R > 1 : bien supérieur ou de luxe (sa demande croît plus vite que le revenu, ex. loisirs/culture/voyages).\n\n3. Élasticité-prix croisée : e_{1/2} = (ΔQ_1 / Q_1) / (ΔP_2 / P_2) :\n- e_{1/2} > 0 : biens substituables (ex. thé et café) ;\n- e_{1/2} < 0 : biens complémentaires (ex. smartphone et forfait data) ;\n- e_{1/2} = 0 : biens indépendants.",
        keyRule:
          "Retiens les signes clés : e_R < 0 (inférieur), 0 < e_R < 1 (nécessité), e_R > 1 (supérieur/luxe) ; e_croisée > 0 (substituts), e_croisée < 0 (compléments).",
        formulas: [
          {
            name: 'Élasticité-prix directe',
            formula: 'e_p = (ΔQ / Q) / (ΔP / P) = (dQ / dP) · (P / Q)',
            note: 'En général e_p < 0 ; si |e_p| > 1 la demande est élastique, si |e_p| < 1 elle est inélastique.',
          },
          {
            name: 'Élasticité-revenu et Élasticité croisée',
            formula: 'e_R = (ΔQ / Q) / (ΔR / R)   |   e_{1/2} = (ΔQ_1 / Q_1) / (ΔP_2 / P_2)',
            note: 'Identifient la nature des biens (inférieur/nécessité/luxe) et leurs liens (substituts/compléments).',
          },
        ],
        workedExample: {
          title: 'Calculer et commenter une élasticité-prix (TD1 — Marché du jeu d’échecs)',
          statement:
            "Dans le TD1, lorsque le prix d'un jeu d'échecs passe de 15 € à 16 €, la quantité demandée passe de 10 000 à 9 600 unités. Calculez l'élasticité-prix directe, interprétez-la et indiquez l'impact sur le chiffre d'affaires.",
          methodSteps: [
            'Variation relative de la quantité : ΔQ / Q = (9 600 − 10 000) / 10 000 = −400 / 10 000 = −0,04 (−4 %).',
            'Variation relative du prix : ΔP / P = (16 − 15) / 15 = +1 / 15 ≈ +0,0667 (+6,67 %).',
            'Élasticité-prix : e_p = −0,04 / (1/15) = −0,04 × 15 = −0,60.',
            'Interprétation : |e_p| = 0,60 < 1 ⇒ demande inélastique (rigide) : quand P augmente de 1 %, Q ne baisse que de 0,6 %.',
            'Chiffre d’affaires : passe de 15 × 10 000 = 150 000 € à 16 × 9 600 = 153 600 € (il augmente car la demande est inélastique).',
          ],
          conclusion:
            'Sur une zone inélastique (|e_p| < 1), une hausse de prix augmente la recette totale du vendeur.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Élasticité-prix',
            stepTheme: 'Calcul & Sensibilité',
            stepTitle: 'Calculer l’élasticité-prix directe',
            paragraphText:
              "L'élasticité-prix directe e_p = (ΔQ/Q) / (ΔP/P) est un nombre sans unité qui mesure le pourcentage de variation de la quantité demandée pour une hausse de 1 % du prix.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Lorsque le prix d’un abonnement passe de 10 000 à 11 000 FCFA (+10 %), le nombre d’abonnés passe de 1 000 à 800 (−20 %). Quelle est l’élasticité-prix de la demande ?',
              options: ['−0,5', '−2', '+2', '−10'],
              correctAnswerIndex: 1,
              explanation:
                'e_p = (−20 %) / (+10 %) = −2. Comme |e_p| = 2 > 1, la demande est fortement élastique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Recette totale',
            stepTheme: 'Lien élasticité / CA',
            stepTitle: 'Élasticité-prix et évolution du chiffre d’affaires',
            paragraphText:
              "Si la demande est élastique (|e_p| > 1), augmenter le prix fait baisser la recette totale car la perte en volume domine le gain en prix. Si la demande est inélastique (|e_p| < 1), augmenter le prix accroît la recette totale.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Un opérateur télécom fait face à une demande de forfaits data dont l’élasticité-prix vaut e_p = −0,4. Si l’opérateur augmente légèrement ses tarifs, que devient sa recette totale ?',
              options: [
                'Elle diminue fortement',
                'Elle devient nulle',
                'Elle augmente car la demande est inélastique (|e_p| < 1)',
                'Elle reste strictement constante',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Avec |e_p| = 0,4 < 1, la baisse proportionnelle des quantités est plus faible que la hausse du prix : le chiffre d’affaires augmente.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Lois d’Engel',
            stepTheme: 'Élasticité-revenu',
            stepTitle: 'Classer un bien selon son élasticité-revenu e_R',
            paragraphText:
              "Selon les trois cas significatifs de l'élasticité-revenu (TD1) : e_R < 0 caractérise un bien inférieur ; 0 < e_R < 1 caractérise un bien normal de première nécessité (sa part budgétaire diminue quand le revenu augmente) ; e_R > 1 caractérise un bien supérieur / de luxe (3e loi d'Engel : la part des dépenses de loisirs/santé/culture augmente avec le revenu).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Un service de streaming premium a une élasticité-revenu e_R = +1,8. Dans quelle catégorie classe-t-on ce service ?',
              options: [
                'Un bien supérieur (ou de luxe)',
                'Un bien inférieur',
                'Un bien de première nécessité',
                'Un bien de Giffen',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Puisque e_R = +1,8 > 1, la demande progresse plus vite que le revenu : c’est un bien supérieur (ou de luxe).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Croisée',
            stepTheme: 'Substituts vs Compléments',
            stepTitle: 'Interpréter le signe de l’élasticité-prix croisée',
            paragraphText:
              "L'élasticité croisée e_{1/2} mesure la réaction de la demande du bien 1 lorsque le prix du bien 2 varie : si e_{1/2} > 0, les biens sont substituables (la hausse du prix de 2 reporte la demande vers 1) ; si e_{1/2} < 0, ils sont complémentaires.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Lorsque le prix des smartphones augmente de 10 %, la demande de coques de protection diminue de 8 %. Quel est le signe de l’élasticité croisée et quelle relation lie ces deux biens ?',
              options: [
                'e_{1/2} = +0,8 ⇒ biens substituables',
                'e_{1/2} = 0 ⇒ biens indépendants',
                'e_{1/2} = −1,25 ⇒ biens inférieurs',
                'e_{1/2} = −0,8 < 0 ⇒ biens complémentaires',
              ],
              correctAnswerIndex: 3,
              explanation:
                'e_{1/2} = (−8 %) / (+10 %) = −0,8 < 0 : la hausse du prix d’un bien réduit la demande de l’autre, preuve qu’ils sont complémentaires.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Bien inférieur vs Giffen',
            stepTitle: 'Effet de substitution et effet de revenu (cas du bien de Giffen)',
            paragraphText:
              "Lorsqu'un prix baisse, la variation de demande se décompose en effet de substitution (toujours de sens opposé au prix) et effet de revenu. Pour un bien normal, les deux s'additionnent. Un bien de Giffen est un cas très rare de bien fortement inférieur où l'effet de revenu négatif l'emporte sur l'effet de substitution, rendant la demande croissante avec le prix (e_p > 0).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle particularité exceptionnelle définit un « bien de Giffen » ?',
              options: [
                'C’est un bien de luxe dont le prix baisse constamment',
                'C’est un bien fortement inférieur dont la quantité demandée augmente lorsque son propre prix augmente (e_p > 0)',
                'C’est un bien gratuit dont l’élasticité vaut zéro',
                'C’est un bien parfaitement complémentaire à tous les autres biens',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un bien de Giffen viole la loi habituelle de la demande (e_p > 0) car son effet de revenu négatif domine l’effet de substitution.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : THÉORIE DU PRODUCTEUR, COÛTS ET ORGANISATION DES MARCHÉS
  // ==========================================================================
  {
    id: 'lmd_entd_l1_microeconomie_ch3',
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    title: 'Chapitre 3 : Théorie du producteur, coûts et structures de marché',
    summary:
      "Maîtriser fonctions de production (PmL, isoquantes, TMST, rendements d'échelle), coûts (CT, CM, Cm) et équilibres de marché (concurrence pure et parfaite, monopole, oligopole).",
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC — Microéconomie 1 & 2 (Partie II : Offre des firmes & Partie III : Prix et organisation du marché)',
    points: [
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch3_p1',
        order: 1,
        title: 'Fonctions de production, TMST, rendements d’échelle et coûts de production',
        summary:
          "Court terme (PmL, PML) vs long terme (isoquantes, TMST = w/r, rendements d'échelle) et relations fondamentales entre Coût Total, Coût Moyen et Coût Marginal.",
        conceptExplanation:
          "La fonction de production Q = F(K, L) relie les quantités d'inputs (capital K, travail L) à la production maximale Q.\n\n1. Court terme (K fixe, L variable) : Productivité Moyenne PML = Q/L et Productivité Marginale PmL = ∂Q/∂L. La courbe PmL coupe PML à son maximum.\n2. Long terme (K et L variables) : une isoquante rassemble les combinaisons (K, L) donnant le même niveau de production Q_0. Sa pente est le Taux Marginal de Substitution Technique : TMST_{L/K} = −dK/dL = PmL / PmK. La combinaison optimale minimisant le coût C = wL + rK vérifie TMST = w/r (soit PmL/w = PmK/r).\n- Rendements d'échelle (pour F(tK, tL) = t^k·F(K, L)) : croissants si k > 1, constants si k = 1, décroissants si k < 1. Pour Cobb-Douglas Q = A·K^α·L^β, k = α + β.\n\n3. Théorie des coûts : Coût Total CT(Q) = CF + CV(Q) ; Coût Moyen CM = CT/Q = CFM + CVM ; Coût Marginal Cm = dCT/dQ = dCV/dQ.\nPropriété fondamentale : la courbe de Coût Marginal (Cm) coupe les courbes de Coût Moyen (CM) et de Coût Variable Moyen (CVM) exactement en leurs minimums respectifs (seuil de rentabilité au min CM ; seuil de fermeture au min CVM).",
        keyRule:
          "Optimum du producteur : TMST = PmL/PmK = w/r. Rendements d'échelle Cobb-Douglas : comparer α + β à 1. En coûts : Cm coupe CM à son minimum (seuil de rentabilité) et CVM à son minimum (seuil de fermeture).",
        formulas: [
          {
            name: 'Optimum technique et Rendements d’échelle',
            formula: 'TMST_{L/K} = PmL / PmK = w / r   |   Q = A·K^α·L^β ⇒ k = α + β',
            note: 'α + β > 1 : rendements croissants ; = 1 : constants ; < 1 : décroissants.',
          },
          {
            name: 'Coûts de production',
            formula: 'CT = CF + CV(Q)   |   CM = CT / Q   |   Cm = dCT / dQ   |   Min CM ⇔ Cm = CM',
            note: 'Le coût fixe CF n’influence pas le coût marginal Cm !',
          },
        ],
        workedExample: {
          title: 'Calculer rendements d’échelle, CM, Cm et seuil de rentabilité',
          statement:
            "A) Déterminez la nature des rendements d'échelle de Q = 10·K^{0,4}·L^{0,8}.\nB) Une firme a pour coût total CT(Q) = Q² + 4Q + 100. Calculez CF, CV, CM, Cm et le seuil de rentabilité (minimum du CM).",
          methodSteps: [
            'A) F(tK, tL) = 10·(tK)^{0,4}·(tL)^{0,8} = t^{1,2}·Q ⇒ α + β = 1,2 > 1 : rendements d’échelle croissants.',
            'B1) CF = 100 ; CV(Q) = Q² + 4Q ; CM(Q) = CT/Q = Q + 4 + 100/Q ; Cm(Q) = dCT/dQ = 2Q + 4.',
            'B2) Minimum du CM atteint lorsque Cm = CM : 2Q + 4 = Q + 4 + 100/Q ⇒ Q = 100/Q ⇒ Q² = 100 ⇒ Q = 10.',
            'B3) Coût moyen minimum (seuil de rentabilité) : CM(10) = 10 + 4 + 10 = 24 (et Cm(10) = 24).',
          ],
          conclusion:
            'Le seuil de rentabilité de la firme est P = 24 pour Q = 10 : au-dessus de ce prix, elle dégage un profit économique strictement positif.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Long terme',
            stepTheme: 'Isoquante & TMST',
            stepTitle: 'Isoquante et condition de minimisation des coûts',
            paragraphText:
              "L'isoquante relie toutes les combinaisons (K, L) produisant une même quantité Q_0. Sa pente en valeur absolue est le TMST = PmL / PmK. Pour minimiser le coût total wL + rK, la firme égalise son TMST au rapport des prix des facteurs : PmL / PmK = w / r.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle condition caractérise la combinaison optimale des facteurs (K, L) qui minimise le coût de production d’un niveau donné Q_0 ?',
              options: [
                'TMST = PmL / PmK = w / r (soit PmL / w = PmK / r)',
                'PmL + PmK = w + r',
                'K = L quels que soient les prix w et r',
                'CF = CV',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La tangence entre isoquante et isocoût impose TMST = w/r, c’est-à-dire la même productivité marginale par franc dépensé en travail et en capital.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Échelle',
            stepTheme: 'Rendements d’échelle',
            stepTitle: 'Identifier la nature des rendements d’échelle',
            paragraphText:
              "En multipliant tous les inputs par t > 1, si la production est multipliée par t^k : k > 1 indique des rendements d'échelle croissants (économies d'échelle), k = 1 constants, k < 1 décroissants. Pour Q = A·K^α·L^β, il suffit de calculer α + β.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle est la nature des rendements d’échelle de la fonction de production Q = 5 · K^{0,3} · L^{0,5} ?',
              options: [
                'Rendements d’échelle croissants',
                'Rendements d’échelle décroissants (car 0,3 + 0,5 = 0,8 < 1)',
                'Rendements d’échelle constants',
                'Rendements nuls',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La somme des exposants vaut 0,3 + 0,5 = 0,8 < 1 : doubler K et L fait augmenter la production de moins du double.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Coûts',
            stepTheme: 'CT, CM et Cm',
            stepTitle: 'Calculer Coût Marginal et Coût Moyen',
            paragraphText:
              "Le coût marginal Cm = dCT/dQ mesure le coût de la dernière unité produite (la dérivée des coûts fixes CF est nulle !). Le coût moyen CM = CT/Q mesure le coût unitaire global.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Pour un coût total CT(Q) = 2Q² + 10Q + 50, quelle est l’expression du coût marginal Cm(Q) ?',
              options: [
                '2Q + 10 + 50/Q',
                '4Q + 60',
                '4Q + 10',
                '2Q + 10',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Cm(Q) = d(2Q² + 10Q + 50)/dQ = 4Q + 10. Le coût fixe (50) disparaît à la dérivation.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Seuils',
            stepTheme: 'Rentabilité vs Fermeture',
            stepTitle: 'Minimum du CM (seuil de rentabilité) et du CVM (seuil de fermeture)',
            paragraphText:
              "La courbe Cm coupe CM et CVM en leurs minimums. À court terme, si le prix P tombe sous min(CVM) (seuil de fermeture), la firme a intérêt à arrêter de produire (Q = 0) ; si P ≥ min(CM) (seuil de rentabilité), son profit économique est positif ou nul.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Pour CT(Q) = Q² + 6Q + 25, pour quelle quantité Q le coût moyen CM(Q) atteint-il son minimum ?',
              options: ['Q = 25', 'Q = 6', 'Q = 10', 'Q = 5'],
              correctAnswerIndex: 3,
              explanation:
                'Cm = CM ⇔ 2Q + 6 = Q + 6 + 25/Q ⇔ Q² = 25 ⇔ Q = 5 (avec min CM = 16).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Court terme avec perte',
            stepTitle: 'Pourquoi produire à court terme même à perte ?',
            paragraphText:
              "Attention en examen ! Si min(CVM) < P < min(CM), le profit est négatif mais la firme continue pourtant de produire à court terme : ses recettes couvrent intégralement ses coûts variables et contribuent à payer une partie des coûts fixes déjà engagés (la perte est donc inférieure à −CF).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'À court terme, si le prix de marché P est supérieur au minimum du Coût Variable Moyen (CVM) mais inférieur au minimum du Coût Moyen (CM), que doit faire une entreprise rationnelle ?',
              options: [
                'Fermer immédiatement et subir une perte égale à la totalité des coûts fixes',
                'Continuer à produire à court terme afin de couvrir ses coûts variables et une partie de ses coûts fixes',
                'Augmenter ses coûts fixes pour réduire son coût marginal',
                'Doubler sa production quel que soit son coût marginal',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tant que P > min(CVM), chaque unité vendue dégage une marge sur coût variable qui réduit la perte par rapport à une fermeture immédiate.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_entd_l1_microeconomie_ch3_p2',
        order: 2,
        title: 'Structures de marché : CPP, Monopole, Oligopole et Surplus social',
        summary:
          "Hypothèses et équilibre de la Concurrence Pure et Parfaite (P = Cm), maximisation du profit en monopole (Rm = Cm), perte sèche et concurrence imparfaite.",
        conceptExplanation:
          "La théorie des prix distingue quatre grandes structures de marché :\n\n1. Concurrence Pure et Parfaite (CPP) : repose sur 5 hypothèses — atomicité, homogénéité du produit, libre entrée/sortie, transparence de l'information et mobilité parfaite des facteurs. La firme est « price-taker » (preneuse de prix) : sa recette marginale vaut P, donc elle maximise son profit lorsque P = Cm(Q) (sur la partie croissante de Cm au-dessus du seuil de fermeture). À long terme, la libre entrée annule les profits économiques (P = Cm = min CM) et maximise le surplus social (surplus des consommateurs + surplus des producteurs).\n\n2. Monopole : un seul offreur « price-maker » face à la demande globale P(Q). Sa recette marginale Rm = d(P(Q)·Q)/dQ est strictement inférieure au prix P. Il maximise son profit lorsque Rm = Cm, ce qui aboutit à un prix plus élevé (P_M > Cm), une quantité réduite (Q_M < Q_{CPP}) et une perte sèche de bien-être social (triangle de Harberger).\n\n3. Concurrence monopolistique (Chamberlin) : grand nombre de firmes vendant des produits différenciés (pouvoir de marché local, profit nul à long terme).\n4. Oligopole : petit nombre de firmes interdépendantes (duopole de Cournot en quantités, Bertrand en prix, entente/cartel).",
        keyRule:
          "Règle d'or du profit maximal : Rm = Cm pour toute firme. En CPP, Rm = P ⇒ P = Cm (optimum social) ; en Monopole, Rm < P ⇒ P_M > Cm (prix plus élevé, quantité plus faible, perte sèche).",
        formulas: [
          {
            name: 'Maximisation du profit (CPP vs Monopole)',
            formula: 'Général : Rm = Cm   |   CPP : P = Cm   |   Monopole : Rm(Q) = Cm(Q) avec P_M > Cm',
            note: 'Pour une demande linéaire P = a − bQ, la recette marginale du monopole est Rm = a − 2bQ (pente double !).',
          },
          {
            name: 'Indice de Lerner (pouvoir de marché)',
            formula: 'L = (P − Cm) / P = − 1 / e_p',
            note: 'En CPP, L = 0 ; plus le pouvoir de monopole est fort, plus L s’approche de 1.',
          },
        ],
        workedExample: {
          title: 'Comparer l’équilibre de CPP et l’équilibre de Monopole',
          statement:
            "La demande du marché est P = 100 − Q et le coût marginal constant vaut Cm = 20 (sans coût fixe). Comparez les prix, quantités et profits en CPP puis en Monopole.",
          methodSteps: [
            'En CPP : P = Cm ⇒ 100 − Q_{CPP} = 20 ⇒ Q_{CPP} = 80 et P_{CPP} = 20 (profit économique = 0).',
            'En Monopole : RT(Q) = (100 − Q)·Q = 100Q − Q² ⇒ Rm(Q) = 100 − 2Q.',
            'Équilibre de monopole Rm = Cm : 100 − 2Q_M = 20 ⇒ 2Q_M = 80 ⇒ Q_M = 40.',
            'Prix de monopole : P_M = 100 − 40 = 60 ; Profit du monopole : π_M = (60 − 20) × 40 = 1 600.',
            'Perte sèche (triangle) = ½ × (60 − 20) × (80 − 40) = 800.',
          ],
          conclusion:
            "Le monopole divise par deux la quantité produite (40 vs 80), triple le prix (60 vs 20) et engendre une perte sèche de surplus social égale à 800.",
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'CPP',
            stepTheme: '5 hypothèses',
            stepTitle: 'Les cinq conditions de la Concurrence Pure et Parfaite',
            paragraphText:
              "Un marché est en Concurrence Pure et Parfaite (CPP) s'il réunit cinq conditions : atomicité des acheteurs et vendeurs, homogénéité du produit, libre entrée et libre sortie (fluidité), transparence parfaite de l'information et mobilité parfaite des facteurs de production.",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces situations viole l’hypothèse d’« homogénéité du produit » de la Concurrence Pure et Parfaite ?',
              options: [
                'L’existence d’un grand nombre de petits producteurs',
                'La différenciation par la marque, le design ou la qualité entre concurrents',
                'La libre entrée de nouvelles entreprises sur le marché',
                'La parfaite transparence des prix affichés',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La différenciation des produits fait quitter la CPP pour entrer dans la concurrence monopolistique.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Équilibre CPP',
            stepTheme: 'Price-taker (P = Cm)',
            stepTitle: 'Déterminer la quantité optimale d’une firme en CPP',
            paragraphText:
              "En CPP, la firme subit le prix du marché P (price-taker). Elle maximise son profit π(Q) = P·Q − CT(Q) lorsque P = Cm(Q). À long terme, l'entrée de nouvelles firmes ramène le profit économique à zéro (P = Cm = min CM).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Une entreprise en CPP a pour coût marginal Cm(Q) = 4Q + 10. Si le prix du marché est P = 50, quelle quantité Q* maximise son profit ?',
              options: ['Q* = 5', 'Q* = 15', 'Q* = 10', 'Q* = 50'],
              correctAnswerIndex: 2,
              explanation:
                'P = Cm(Q) ⇔ 50 = 4Q + 10 ⇔ 4Q = 40 ⇔ Q* = 10.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Monopole',
            stepTheme: 'Rm = Cm',
            stepTitle: 'Maximisation du profit en monopole (astuce de la pente double)',
            paragraphText:
              "Face à une demande linéaire P = a − bQ, la recette totale du monopole est RT = aQ − bQ², donc sa recette marginale est Rm = a − 2bQ (même ordonnée à l'origine, pente deux fois plus forte). On résout Rm = Cm pour trouver Q_M, puis on lit P_M sur la courbe de demande !",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Un monopole fait face à la demande P = 80 − 2Q avec un coût marginal constant Cm = 20. Quels sont la quantité Q_M et le prix P_M d’équilibre du monopole ?',
              options: [
                'Q_M = 15 et P_M = 50',
                'Q_M = 30 et P_M = 20',
                'Q_M = 20 et P_M = 40',
                'Q_M = 10 et P_M = 60',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Rm = 80 − 4Q = Cm = 20 ⇒ 4Q = 60 ⇒ Q_M = 15. Puis on reporte dans la demande : P_M = 80 − 2(15) = 50.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bien-être',
            stepTheme: 'Surplus & Perte sèche',
            stepTitle: 'Pourquoi le monopole réduit le surplus social par rapport à la CPP',
            paragraphText:
              "Le surplus social est la somme du surplus des consommateurs et du surplus des producteurs. En réduisant les quantités (Q_M < Q_{CPP}) et en augmentant le prix (P_M > Cm), le monopole capte une partie du surplus des consommateurs et détruit une part de bien-être collectif appelée « perte sèche ».",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Par rapport à l’équilibre de Concurrence Pure et Parfaite, quelle est la conséquence économique du monopole sur le marché ?',
              options: [
                'Un prix plus bas, une quantité plus élevée et un surplus social maximal',
                'Un prix identique au coût marginal et un profit toujours nul',
                'Une augmentation du surplus des consommateurs sans perte sèche',
                'Un prix plus élevé (P_M > Cm), une quantité plus faible et une perte sèche de surplus social',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Le monopole restreint volontairement l’offre pour maintenir un prix supérieur au coût marginal, créant une inefficience allocative (perte sèche).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Concurrence imparfaite',
            stepTheme: 'Oligopole & Monopolistique',
            stepTitle: 'Distinguer oligopole et concurrence monopolistique',
            paragraphText:
              "En oligopole, quelques grandes firmes dominent le marché et leurs décisions sont stratégiquement interdépendantes (ex. télécoms, constructeurs aéronautiques ; modèles de Cournot/Bertrand/cartel). En concurrence monopolistique, de nombreuses entreprises proposent des produits différenciés (ex. restaurants, vêtements, applications mobiles).",
            exercise: {
              id: 'lmd_entd_l1_microeconomie_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Un marché dominé par trois opérateurs de téléphonie mobile qui surveillent en permanence les tarifs et offres de leurs rivaux relève de quelle structure de marché ?',
              options: [
                'La Concurrence Pure et Parfaite',
                'L’oligopole',
                'Le monopole naturel unique',
                'Le monopsone agricole',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un petit nombre d’offreurs stratégiquement interdépendants définit exactement une situation d’oligopole.',
            },
          },
        ],
      }),
    ],
  },
];
