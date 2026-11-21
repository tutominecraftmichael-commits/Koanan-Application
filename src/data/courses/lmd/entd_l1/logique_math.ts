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

// ============================================================================
// LOGIQUE ET RAISONNEMENT MATHÉMATIQUE — ENTD LICENCE 1
// Programme Masterclass KONAN (4 chapitres, 13 points, 82 étapes, 8 schémas)
// ============================================================================

export const LOGIQUE_MATH_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Logique propositionnelle, connecteurs et équivalences
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch1',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Logique et Raisonnement Mathématique',
    title: 'Chapitre 1 — Logique propositionnelle, connecteurs et équivalences',
    summary:
      'Assertions et valeurs de vérité, connecteurs logiques ($\\neg, \\land, \\lor, \\oplus, \\implies, \\iff$), tables de vérité, tautologies, lois de De Morgan, distributivité, contraposée, réciproque et conditions nécessaires ou suffisantes.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch1_p1',
        order: 1,
        title: 'Propositions, connecteurs logiques et tables de vérité',
        summary:
          'Identifier une assertion mathématique, combiner des énoncés par les connecteurs fondamentaux et dresser leur table de vérité complète.',
        conceptExplanation:
          'La **logique propositionnelle** constitue le socle de tout raisonnement rigoureux en mathématiques, en informatique et en analyse décisionnelle. Elle manipule des **propositions** (ou **assertions**), c’est-à-dire des énoncés déclaratifs susceptibles de recevoir sans ambiguïté une et une seule valeur de vérité : **Vrai ($V$ ou $1$)** ou **Faux ($F$ ou $0$)**.\n\n' +
          'À partir de propositions élémentaires $P$ et $Q$, on forme des propositions composées grâce à six connecteurs clés :\n' +
          '• **Négation ($\\neg P$)** : inverse la valeur de vérité de $P$.\n' +
          '• **Conjonction ($P \\land Q$)** : « $P$ et $Q$ », vraie uniquement si $P$ et $Q$ sont simultanément vraies.\n' +
          '• **Disjonction inclusive ($P \\lor Q$)** : « $P$ ou $Q$ », fausse uniquement si $P$ et $Q$ sont simultanément fausses.\n' +
          '• **Disjonction exclusive ($P \\oplus Q$)** : vraie lorsque $P$ et $Q$ ont des valeurs de vérité strictement opposées.\n' +
          '• **Implication ($P \\implies Q$)** : fausse uniquement dans le cas $P = V$ et $Q = F$.\n' +
          '• **Équivalence ($P \\iff Q$)** : vraie lorsque $P$ et $Q$ ont exactement la même valeur de vérité.\n\n' +
          'Une formule toujours vraie est une **tautologie** ; une formule toujours fausse est une **contradiction** (antilogie).',
        formulas: [
          {
            name: 'Nombre de lignes d’une table de vérité',
            formula: 'N = 2^k \\quad (\\text{pour } k \\text{ variables propositionnelles})',
            note: '2 variables donnent 4 lignes, 3 variables donnent 8 lignes, 4 variables donnent 16 lignes.',
          },
          {
            name: 'Définition de l’implication et de l’équivalence',
            formula: '(P \\implies Q) \\equiv (\\neg P \\lor Q), \\qquad (P \\iff Q) \\equiv (P \\implies Q) \\land (Q \\implies P)',
            note: 'On vérifie également que (P ⇔ Q) ≡ ¬(P ⊕ Q).',
          },
        ],
        keyRule:
          'Une implication $P \\implies Q$ n’est FAUSSE que dans un seul cas sur quatre : lorsque la prémisse $P$ est VRAIE et la conclusion $Q$ est FAUSSE.',
        workedExample: {
          title: 'Analyse d’une règle métier par table de vérité',
          statement:
            'Dans un système d’alerte e-commerce à Abidjan, on note $P$ : « Le budget publicitaire a augmenté » et $Q$ : « Les ventes ont progressé ». Construire la table de vérité de $P \\land \\neg Q$ et interpréter la ligne où cette formule vaut $V$.',
          methodSteps: [
            'Il y a $k = 2$ variables ($P$ et $Q$), donc $2^2 = 4$ combinaisons : $(V,V)$, $(V,F)$, $(F,V)$, $(F,F)$.',
            'On calcule la colonne $\\neg Q$ : respectivement $F, V, F, V$.',
            'On calcule la conjonction $P \\land \\neg Q$ : elle vaut $V$ uniquement quand $P = V$ et $\\neg Q = V$, soit pour la ligne $(P = V, Q = F)$.',
            'Sur les trois autres lignes, $P \\land \\neg Q$ vaut $F$.',
          ],
          conclusion:
            'La formule $P \\land \\neg Q$ s’active exclusivement lorsque le budget publicitaire augmente sans hausse des ventes : elle détecte précisément un investissement marketing inefficace.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Assertion',
            stepTheme: 'blue',
            stepTitle: 'Qu’est-ce qu’une proposition (ou assertion) mathématique ?',
            paragraphText:
              'Avant de raisonner, il faut distinguer les énoncés exploitables en logique de ceux qui ne le sont pas. La logique classique repose sur une binarité stricte (logique bivalente).\n' +
              '• **Proposition (assertion)** : énoncé déclaratif auquel on peut attribuer sans ambiguïté la valeur Vrai ($V$) ou Faux ($F$), mais jamais les deux.\n' +
              '• **Principe de non-contradiction** : une proposition ne peut pas être simultanément vraie et fausse.\n' +
              '• **Principe du tiers exclu** : toute proposition est soit vraie, soit fausse (aucune troisième valeur intermédiaire).\n' +
              '• **Non-propositions** : une question (« Quel est le taux de TVA ? »), un ordre (« Fermez la fenêtre ! ») ou une expression contenant une variable libre non quantifiée ($x + 3 = 7$) ne sont pas des propositions.\n' +
              'Par exemple, « $2 + 3 = 6$ » est bien une proposition (elle est fausse), alors que « $x > 10$ » ne le devient qu’une fois $x$ fixé ou quantifié.',
            keyRule:
              'Un énoncé faux (comme « $7$ est pair ») EST une proposition logique à part entière : être une proposition signifie avoir une valeur de vérité définie, pas nécessairement être vrai.',
            konanTip:
              'Pour tester rapidement si une phrase est une proposition, demande-toi : « Puis-je répondre rigoureusement par VRAI ou FAUX ? ». Si la réponse dépend d’une inconnue $x$ non précisée, c’est un prédicat, pas encore une proposition.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Parmi les énoncés suivants, lequel est une **proposition** (assertion) au sens de la logique mathématique ?',
              options: [
                '« $2x - 5 = 11$ » (sans préciser la valeur de $x$).',
                '« Vérifiez le solde de ce compte Mobile Money ! »',
                '« Tout nombre entier multiple de $6$ est divisible par $4$. »',
                '« Le franc CFA est-il indexé sur l’euro ? »',
              ],
              correctAnswerIndex: 2,
              explanation:
                '« Tout nombre entier multiple de $6$ est divisible par $4$ » est un énoncé déclaratif complet ayant une valeur de vérité déterminée (il est FAUX, car $6$ est multiple de $6$ mais pas de $4$). Les autres sont une équation à variable libre, un ordre et une question.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Négation & ET',
            stepTheme: 'blue',
            stepTitle: 'Négation ($\\neg$), conjonction ($\\land$) et traduction du mot « mais »',
            paragraphText:
              'Pour formaliser des règles de gestion ou des conditions informatiques, deux connecteurs de base interviennent en permanence.\n' +
              '• **Négation ($\\neg P$ ou $\\bar{P}$)** : proposition vraie si $P$ est fausse, fausse si $P$ est vraie. La double négation redonne l’énoncé initial : $\\neg(\\neg P) \\equiv P$.\n' +
              '• **Conjonction ($P \\land Q$)** : se lit « $P$ et $Q$ ». Elle est vraie uniquement lorsque $P$ et $Q$ sont toutes deux vraies simultanément.\n' +
              '• **Nuance linguistique** : en français courant, le mot « **mais** » introduit une opposition stylistique, mais sur le plan strictement logique, il signifie exactement « **et** » ($\\land$).\n' +
              'Exemple : si $P$ signifie « Le prix du forfait data augmente » et $Q$ signifie « La demande baisse », la phrase « Le prix augmente mais la demande ne baisse pas » se traduit rigoureusement par $P \\land \\neg Q$.',
            formula: {
              name: 'Conjonction et double négation',
              formula: '\\neg(\\neg P) \\equiv P, \\qquad (P \\land Q = V) \\iff (P = V \\text{ et } Q = V)',
              note: 'En algorithmique, ¬ correspond à NOT et ∧ correspond à AND.',
            },
            keyRule:
              'En logique formelle, « $P$ mais $Q$ », « $P$ bien que $Q$ » et « $P$ cependant $Q$ » se traduisent tous par la conjonction $P \\land Q$.',
            konanTip:
              'Ne te laisse jamais piéger par le mot « mais » dans un sujet d’examen : remplace-le mentalement par « et » avant d’écrire la formule symbolique.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Soient $P$ : « La plateforme lance une campagne publicitaire » et $Q$ : « Le taux de conversion progresse ». Comment formaliser : « La campagne est lancée, mais le taux de conversion ne progresse pas » ?',
              options: [
                '$P \\implies \\neg Q$',
                '$P \\land \\neg Q$',
                '$P \\lor \\neg Q$',
                '$\\neg(P \\land Q)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le connecteur « mais » correspond à la conjonction logique $\\land$, et « ne progresse pas » à la négation $\\neg Q$. La traduction exacte est donc $P \\land \\neg Q$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'OU inclusif / XOR',
            stepTheme: 'blue',
            stepTitle: 'Disjonction inclusive ($\\lor$) versus disjonction exclusive ($\\oplus$)',
            paragraphText:
              'En mathématiques et en informatique, le mot français « ou » cache deux connecteurs très différents qu’il faut soigneusement distinguer.\n' +
              '• **Disjonction inclusive ($P \\lor Q$)** : c’est le « ou » standard des mathématiques. $P \\lor Q$ est vraie dès qu’**au moins une** des deux propositions est vraie — y compris lorsque les deux sont vraies en même temps !\n' +
              '• **Disjonction exclusive ($P \\oplus Q$, notée XOR)** : signifie « soit $P$, soit $Q$, mais pas les deux ». Elle est vraie uniquement lorsque $P$ et $Q$ ont des valeurs de vérité différentes.\n' +
              '• **Expression du XOR** : on peut toujours exprimer $P \\oplus Q$ avec les connecteurs usuels par $(P \\land \\neg Q) \\lor (\\neg P \\land Q)$.\n' +
              'Exemple concret : pour bénéficier d’une remise étudiante, la condition « être boursier $\\lor$ avoir moins de 25 ans » inclut un étudiant de 20 ans qui est aussi boursier (OU inclusif), alors qu’un choix « paiement comptant $\\oplus$ paiement échelonné » exclut le cumul.',
            formula: {
              name: 'Définition de la disjonction exclusive (XOR)',
              formula: 'P \\oplus Q \\equiv (P \\lor Q) \\land \\neg(P \\land Q) \\equiv (P \\land \\neg Q) \\lor (\\neg P \\land Q)',
              note: 'Lorsque P = V et Q = V, P ∨ Q vaut V tandis que P ⊕ Q vaut F.',
            },
            konanTip:
              'En mathématiques, sauf mention explicite (« soit… soit… exclusivement »), le mot « ou » désigne TOUJOURS le OU inclusif ($\\lor$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Si $P$ est Vraie et $Q$ est Vraie, quelles sont les valeurs de vérité respectives de $P \\lor Q$ et de $P \\oplus Q$ ?',
              options: [
                '$P \\lor Q = V$ et $P \\oplus Q = V$.',
                '$P \\lor Q = F$ et $P \\oplus Q = V$.',
                '$P \\lor Q = V$ et $P \\oplus Q = F$.',
                '$P \\lor Q = F$ et $P \\oplus Q = F$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour $P = V$ et $Q = V$ : la disjonction inclusive $P \\lor Q$ est vraie (au moins une est vraie), mais la disjonction exclusive $P \\oplus Q$ est fausse car elles ne diffèrent pas.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Tables de vérité',
            stepTheme: 'violet',
            stepTitle: 'Implication ($\\implies$), équivalence ($\\iff$) et table de vérité complète',
            paragraphText:
              'Les deux connecteurs les plus utilisés dans les démonstrations sont l’implication et la bi-implication (équivalence).\n' +
              '• **Implication ($P \\implies Q$)** : se lit « si $P$, alors $Q$ » ou « $P$ implique $Q$ ». $P$ est l’antécédent (hypothèse) et $Q$ est le conséquent (conclusion). Elle n’est fausse que si l’hypothèse $P$ est vraie et la conclusion $Q$ est fausse.\n' +
              '• **Équivalence ($P \\iff Q$)** : se lit « $P$ si et seulement si $Q$ » (ssi). Elle vaut Vrai exactement lorsque $P$ et $Q$ portent la même valeur de vérité ($V,V$ ou $F,F$).\n' +
              '• **Lecture de la table** : une table de vérité énumère de manière exhaustive les $2^k$ combinaisons possibles des $k$ variables propositionnelles.\n' +
              'Examine attentivement le tableau ci-dessous qui synthétise les six connecteurs fondamentaux sur les 4 lignes possibles.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Table de vérité complète des 6 connecteurs logiques',
              caption: 'Observe que P ⇒ Q ne vaut F que sur la ligne (V, F), et que P ⇔ Q est l’exact opposé de P ⊕ Q.',
              tableData: {
                headers: ['$P$', '$Q$', '$\\neg P$', '$P \\land Q$', '$P \\lor Q$', '$P \\oplus Q$', '$P \\implies Q$', '$P \\iff Q$'],
                rows: [
                  ['$V$', '$V$', '$F$', '$V$', '$V$', '$F$', '$V$', '$V$'],
                  ['$V$', '$F$', '$F$', '$F$', '$V$', '$V$', '$F$', '$F$'],
                  ['$F$', '$V$', '$V$', '$F$', '$V$', '$V$', '$V$', '$F$'],
                  ['$F$', '$F$', '$V$', '$F$', '$F$', '$F$', '$V$', '$V$'],
                ],
              },
            },
            keyRule:
              'Retiens les cas uniques : $P \\land Q$ est vraie uniquement sur $(V,V)$ ; $P \\lor Q$ est fausse uniquement sur $(F,F)$ ; $P \\implies Q$ est fausse uniquement sur $(V,F)$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Parmi les quatre couples de valeurs de vérité $(P, Q)$, lequel rend simultanément $P \\implies Q$ **Vraie** et $P \\iff Q$ **Fausse** ?',
              options: [
                '$(P = V,\\ Q = V)$',
                '$(P = V,\\ Q = F)$',
                '$(P = F,\\ Q = V)$',
                '$(P = F,\\ Q = F)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sur la ligne $(F, V)$, on a $P \\implies Q = V$ (prémisse fausse) et $Q \\implies P = F$, donc $P \\iff Q = F$. Sur $(V, V)$ et $(F, F)$, $P \\iff Q = V$ ; sur $(V, F)$, $P \\implies Q = F$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'orange',
            stepTitle: 'Le paradoxe de l’implication vacuellement vraie',
            paragraphText:
              'La ligne $(P = F, Q = V)$ et la ligne $(P = F, Q = F)$ déroutent souvent au premier abord : comment une implication avec une hypothèse fausse peut-elle être déclarée Vraie ?\n' +
              '• **Règle d’or (« Ex falso quodlibet »)** : dès que l’antécédent $P$ est faux, l’implication $P \\implies Q$ est automatiquement vraie, quelle que soit la valeur de $Q$.\n' +
              '• **Intuition contractuelle** : imagine la promesse d’une fintech « Si votre solde dépasse $10$ millions de F CFA, nous vous offrons les frais de virement ». Si ton solde est de $50\\,000$ F CFA ($P = F$), la fintech ne trahit jamais sa promesse, qu’elle t’offre les frais ou non ! La promesse n’est rompue que si ton solde dépasse $10$ millions ($P = V$) et qu’on te facture quand même ($Q = F$).\n' +
              '• **Conséquence mathématique** : « Si $2 + 2 = 5$, alors Abidjan est sur la Lune » est logiquement VRAIE, même si elle est sans intérêt pratique.',
            keyRule:
              'Une implication dont la prémisse est fausse est dite **vacuellement vraie** : $F \\implies V$ vaut $V$ et $F \\implies F$ vaut $V$.',
            konanTip:
              'À l’examen, dès que tu repères une prémisse fausse dans $P \\implies Q$, écris directement « Vrai » sans même perdre de temps à évaluer la vérité de $Q$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Quelle est la valeur de vérité de la proposition composée : « $(3 \\times 4 = 15) \\implies (\\text{le carré d’un réel peut être négatif})$ » ?',
              options: [
                'Fausse, car les deux assertions sont fausses.',
                'Vraie, car une implication dont la prémisse est fausse est toujours vraie.',
                'Indéterminée, car il n’y a aucun lien causal entre les deux phrases.',
                'Fausse, car la conclusion est fausse.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La prémisse $P$ (« $3 \\times 4 = 15$ ») est fausse et la conclusion $Q$ est fausse. Or $F \\implies F$ a pour valeur de vérité Vrai ($V$). En logique formelle, l’implication ne requiert aucun lien de causalité.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Tautologie',
            stepTheme: 'violet',
            stepTitle: 'Tautologie, contradiction et lien entre $P \\iff Q$ et $\\neg(P \\oplus Q)$',
            paragraphText:
              'En observant la colonne finale de la table de vérité d’une formule composée, trois statuts fondamentaux se dégagent.\n' +
              '• **Tautologie** : formule qui prend la valeur **Vrai ($V$)** sur **toutes** les lignes de sa table de vérité, quelles que soient les valeurs des variables (ex. $P \\lor \\neg P$, $P \\implies (Q \\implies P)$).\n' +
              '• **Contradiction (ou antilogie)** : formule qui prend la valeur **Faux ($F$)** sur **toutes** les lignes (ex. $P \\land \\neg P$, $(P \\implies Q) \\land P \\land \\neg Q$).\n' +
              '• **Contingence** : formule parfois vraie, parfois fausse selon les lignes (cas le plus courant, ex. $P \\land Q$).\n' +
              '• **Équivalence remarquable** : en comparant les colonnes de $(P \\implies Q) \\land (Q \\implies P)$ et de $\\neg(P \\oplus Q)$, on obtient $(V, F, F, V)$ des deux côtés : la formule $[(P \\iff Q) \\iff \\neg(P \\oplus Q)]$ est une tautologie.',
            formula: {
              name: 'Tautologies fondamentales',
              formula: 'P \\lor \\neg P \\equiv V \\; (\\text{Tiers exclu}), \\qquad P \\land \\neg P \\equiv F \\; (\\text{Contradiction})',
              note: 'A ≡ B signifie exactement que (A ⇔ B) est une tautologie.',
            },
            konanTip:
              'Pour vérifier qu’une formule est une tautologie sans faire toute la table, essaie de la rendre FAUSSE : si toutes tes tentatives mènent à une contradiction, c’est une tautologie !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Parmi les quatre formules suivantes, laquelle est une **tautologie** ?',
              options: [
                '$(P \\implies Q) \\implies (Q \\implies P)$',
                '$(P \\land Q) \\lor (\\neg P \\land \\neg Q)$',
                '$[P \\land (P \\implies Q)] \\implies Q$',
                '$(P \\lor Q) \\implies (P \\land Q)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La formule $[P \\land (P \\implies Q)] \\implies Q$ traduit le Modus Ponens : si $P = V$ et $P \\implies Q = V$, alors nécessairement $Q = V$. Elle ne peut jamais être fausse, c’est une tautologie. Les trois autres sont fausses pour $(P = V, Q = F)$ ou $(P = F, Q = V)$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Cas pratique',
            stepTheme: 'slate',
            stepTitle: 'Évaluer et exploiter des règles logiques en économie numérique',
            paragraphText:
              'Les moteurs de règles métier (CRM, crédit-scoring, filtrage anti-fraude) reposent directement sur le calcul propositionnel.\n' +
              '• **Règle de fidélité** : supposons qu’un client est fidèle ($F$) si et seulement s’il bénéficie de promotions ($P$) ou aime la marque ($M$), soit $F \\iff (P \\lor M)$. Si l’on constate $F = V$ et $M = F$, alors $P \\lor F$ doit valoir $V$, ce qui impose nécessairement $P = V$ (le client est retenu par les promotions).\n' +
              '• **Règle d’achat d’impulsion** : considérons la règle $A \\iff (R \\land G)$ où $R$ = « client pressé » et $G$ = « produit en tête de gondole ». Si un client flâne calmement ($R = F$) mais achète en tête de gondole ($G = V$), alors $R \\land G = F \\land V = F$ : cet acte n’est pas un achat d’impulsion au sens de la règle.\n' +
              'Cette démarche systématique élimine toute ambiguïté d’interprétation dans un cahier des charges.',
            konanTip:
              'Lorsqu’une règle utilise une équivalence $F \\iff (\\text{condition})$, remplace chaque variable connue par $V$ ou $F$ et réduis étape par étape comme en algèbre.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q7',
              type: 'mcq',
              prompt: 'Une néobanque valide un virement instantané ($V$) selon la règle : $V \\iff [(S \\land \\neg B) \\lor A]$, où $S$ = « solde suffisant », $B$ = « compte bloqué », $A$ = « autorisation exceptionnelle ». Si $S = V$, $B = V$ et $A = F$, le virement est-il validé ?',
              options: [
                'Non ($V = F$), car $S \\land \\neg B = V \\land F = F$ et $F \\lor F = F$.',
                'Oui ($V = V$), car le solde est suffisant ($S = V$).',
                'Oui ($V = V$), car $B$ est vrai.',
                'On ne peut pas savoir sans connaître le montant.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On substitue : $\\neg B = F$, donc $S \\land \\neg B = V \\land F = F$. Ensuite $(S \\land \\neg B) \\lor A = F \\lor F = F$. Par l’équivalence, $V = F$ : le virement est refusé.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch1_p2',
        order: 2,
        title: 'Équivalences logiques, lois de De Morgan et algèbre propositionnelle',
        summary:
          'Prouver des équivalences par tables de vérité ou par calcul algébrique, maîtriser les lois de De Morgan, la distributivité et la négation d’une implication.',
        conceptExplanation:
          'Deux propositions composées $A$ et $B$ sont **logiquement équivalentes** (noté $A \\equiv B$) lorsqu’elles prennent exactement les mêmes valeurs de vérité dans toutes les situations possibles (colonnes identiques dans leur table de vérité).\n\n' +
          'Le calcul propositionnel obéit à des lois algébriques puissantes qui permettent de simplifier une formule sans reconstruire de table :\n' +
          '• **Lois de De Morgan** : $\\neg(P \\lor Q) \\equiv (\\neg P \\land \\neg Q)$ et $\\neg(P \\land Q) \\equiv (\\neg P \\lor \\neg Q)$.\n' +
          '• **Distributivité croisée** : $P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$ et $P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$.\n' +
          '• **Réécriture de l’implication** : $(P \\implies Q) \\equiv (\\neg P \\lor Q)$, d’où sa négation fondamentale : $\\neg(P \\implies Q) \\equiv (P \\land \\neg Q)$.\n' +
          '• **Idempotence et absorption** : $P \\land P \\equiv P$, $P \\lor P \\equiv P$, $P \\land (P \\lor Q) \\equiv P$, $P \\lor (P \\land Q) \\equiv P$.',
        formulas: [
          {
            name: 'Lois de De Morgan',
            formula: '\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q, \\qquad \\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q',
            note: 'Propager la négation dans une parenthèse inverse toujours ∧ en ∨ et ∨ en ∧.',
          },
          {
            name: 'Négation d’une implication',
            formula: '\\neg(P \\implies Q) \\equiv \\neg(\\neg P \\lor Q) \\equiv P \\land \\neg Q',
            note: 'La négation d’une implication n’est JAMAIS une implication, c’est une conjonction !',
          },
        ],
        keyRule:
          'Pour nier une formule composée, on remplace d’abord toute implication $A \\implies B$ par $\\neg A \\lor B$, puis on propage $\\neg$ de l’extérieur vers l’intérieur à l’aide des lois de De Morgan.',
        workedExample: {
          title: 'Simplification de la négation d’un indicateur de performance',
          statement:
            'Soient trois indicateurs $A, B, C$ d’une startup. Simplifier au maximum la négation de la formule $E = (A \\land B) \\lor \\neg C$, puis traduire le résultat en français.',
          methodSteps: [
            'On écrit $\\neg E = \\neg[(A \\land B) \\lor \\neg C]$.',
            'On applique la première loi de De Morgan au connecteur principal $\\lor$ : $\\neg E \\equiv \\neg(A \\land B) \\land \\neg(\\neg C)$.',
            'On applique la seconde loi de De Morgan à $\\neg(A \\land B)$ et la double négation à $\\neg(\\neg C)$ : $\\neg E \\equiv (\\neg A \\lor \\neg B) \\land C$.',
          ],
          conclusion:
            '$\\neg[(A \\land B) \\lor \\neg C] \\equiv (\\neg A \\lor \\neg B) \\land C$, soit : « Au moins l’un des deux indicateurs $A$ ou $B$ n’est pas atteint, ET l’indicateur $C$ est atteint ».',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Équivalence',
            stepTheme: 'blue',
            stepTitle: 'Définition de l’équivalence logique ($A \\equiv B$)',
            paragraphText:
              'En logique, deux formules d’apparences différentes peuvent exprimer exactement la même contrainte. C’est la notion d’équivalence logique.\n' +
              '• **Définition** : $A$ et $B$ sont logiquement équivalentes ($A \\equiv B$) si et seulement si elles ont exactement la même colonne finale dans leur table de vérité.\n' +
              '• **Lien avec la tautologie** : $A \\equiv B$ signifie exactement que la proposition $A \\iff B$ est une tautologie.\n' +
              '• **Principe de substitution** : si $A \\equiv B$, on peut remplacer $A$ par $B$ dans n’importe quelle formule plus grande sans jamais changer sa valeur de vérité.\n' +
              'En programmation, cette propriété permet de refactoriser des conditions `if (...)` complexes en conditions plus courtes et plus rapides à évaluer.',
            keyRule:
              'Pour prouver $A \\equiv B$ par table de vérité, il faut vérifier que les colonnes de $A$ et de $B$ coïncident sur TOUTES les $2^k$ lignes sans aucune exception.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Comment démontre-t-on à l’aide d’une table de vérité que deux formules $A$ et $B$ portant sur 3 variables $P, Q, R$ sont **logiquement équivalentes** ?',
              options: [
                'En montrant que leurs colonnes coïncident sur les 8 lignes de la table.',
                'En trouvant au moins une ligne où $A$ et $B$ valent toutes deux Vrai.',
                'En vérifiant que $A$ et $B$ ont le même nombre de symboles.',
                'En montrant que $A \\land B$ est une tautologie.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec 3 variables, la table comporte $2^3 = 8$ lignes. L’équivalence logique $A \\equiv B$ exige l’égalité des valeurs de vérité de $A$ et $B$ sur chacune des 8 lignes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'De Morgan',
            stepTheme: 'violet',
            stepTitle: 'Les lois de De Morgan : preuve par table de vérité et sens concret',
            paragraphText:
              'Les deux lois d’Augustus De Morgan sont les outils les plus utilisés pour nier des conditions composées.\n' +
              '• **Première loi** : $\\neg(P \\lor Q) \\equiv (\\neg P \\land \\neg Q)$. Dire « il est faux que $P$ ou $Q$ » revient à dire « ni $P$, ET ni $Q$ ».\n' +
              '• **Seconde loi** : $\\neg(P \\land Q) \\equiv (\\neg P \\lor \\neg Q)$. Dire « il est faux que $P$ et $Q$ sont vraies ensemble » revient à dire « au moins une des deux est fausse ».\n' +
              '• **Application commerciale** : l’affiche « Nous n’acceptons ni les chèques ($C$) ni les virements ($V$) » traduit $\\neg(C \\lor V)$, qui est strictement équivalent à $\\neg C \\land \\neg V$ (pas de chèque ET pas de virement).\n' +
              'La table ci-dessous démontre rigoureusement la première loi de De Morgan.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Preuve par table de vérité de la loi de De Morgan : ¬(P ∨ Q) ≡ (¬P ∧ ¬Q)',
              caption: 'Les colonnes 4 et 7 sont rigoureusement identiques (F, F, F, V) : l’équivalence logique est démontrée.',
              tableData: {
                headers: ['$P$', '$Q$', '$P \\lor Q$', '$\\neg(P \\lor Q)$', '$\\neg P$', '$\\neg Q$', '$\\neg P \\land \\neg Q$'],
                rows: [
                  ['$V$', '$V$', '$V$', '$F$', '$F$', '$F$', '$F$'],
                  ['$V$', '$F$', '$V$', '$F$', '$F$', '$V$', '$F$'],
                  ['$F$', '$V$', '$V$', '$F$', '$V$', '$F$', '$F$'],
                  ['$F$', '$F$', '$F$', '$V$', '$V$', '$V$', '$V$'],
                ],
              },
            },
            formula: {
              name: 'Dualité de De Morgan',
              formula: '\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q, \\qquad \\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q',
              note: 'Ces lois se généralisent à n propositions : ¬(P₁ ∧ … ∧ Pₙ) ≡ ¬P₁ ∨ … ∨ ¬Pₙ.',
            },
            konanTip:
              'Moyen mnémotechnique : « On casse la barre de négation et on retourne le signe entre les deux » ($\\land \\leftrightarrow \\lor$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Quelle est la négation logique exacte de l’énoncé : « Le candidat maîtrise Python ($P$) et possède un diplôme de Licence ($L$) » ?',
              options: [
                'Le candidat ne maîtrise pas Python et ne possède pas de Licence ($\\neg P \\land \\neg L$).',
                'Le candidat ne maîtrise pas Python ou ne possède pas de Licence ($\\neg P \\lor \\neg L$).',
                'Si le candidat maîtrise Python, alors il ne possède pas de Licence ($P \\implies \\neg L$).',
                'Le candidat maîtrise Python mais ne possède pas de Licence ($P \\land \\neg L$).',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par la seconde loi de De Morgan, $\\neg(P \\land L) \\equiv \\neg P \\lor \\neg L$ : il suffit qu’au moins l’une des deux conditions manque pour que la conjonction échoue.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Algèbre logique',
            stepTheme: 'violet',
            stepTitle: 'Distributivité croisée, associativité et lois d’absorption',
            paragraphText:
              'Tout comme on factorise et développe en algèbre numérique, on transforme les expressions logiques grâce aux lois de l’algèbre de Boole.\n' +
              '• **Commutativité et associativité** : $\\land$ et $\\lor$ sont commutatifs ($P \\land Q \\equiv Q \\land P$) et associatifs ($(P \\lor Q) \\lor R \\equiv P \\lor (Q \\lor R)$), ce qui autorise à supprimer les parenthèses au sein d’une suite de mêmes connecteurs.\n' +
              '• **Double distributivité** : contrairement à l’arithmétique (où $+$ ne se distribue pas sur $\\times$), en logique $\\land$ se distribue sur $\\lor$ ET $\\lor$ se distribue sur $\\land$ !\n' +
              '• **Lois d’absorption et neutres** : $P \\land V \\equiv P$, $P \\lor F \\equiv P$, $P \\land F \\equiv F$, $P \\lor V \\equiv V$, et surtout $P \\lor (P \\land Q) \\equiv P$.\n' +
              'Exemple : $(A \\land B) \\lor (A \\land \\neg B) \\equiv A \\land (B \\lor \\neg B) \\equiv A \\land V \\equiv A$.',
            formula: {
              name: 'Distributivité croisée',
              formula: 'P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R), \\qquad P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)',
              note: 'La seconde distributivité est très utile pour mettre une formule sous forme normale conjonctive.',
            },
            keyRule:
              'Dès que deux connecteurs DIFFÉRENTS ($\\land$ et $\\lor$) apparaissent ensemble, les parenthèses sont OBLIGATOIRES car $(P \\land Q) \\lor R \\not\\equiv P \\land (Q \\lor R)$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Quelle est la forme simplifiée de la proposition $(P \\land Q) \\lor (P \\land \\neg Q)$ ?',
              options: [
                '$Q$',
                '$P \\lor Q$',
                '$P$',
                'Contradiction ($F$)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Par factorisation (distributivité inverse) : $(P \\land Q) \\lor (P \\land \\neg Q) \\equiv P \\land (Q \\lor \\neg Q) \\equiv P \\land V \\equiv P$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Réécriture',
            stepTheme: 'green',
            stepTitle: 'Éliminer l’implication ($\\neg P \\lor Q$) et calculer sa négation',
            paragraphText:
              'L’équivalence $(P \\implies Q) \\equiv (\\neg P \\lor Q)$ est sans doute la formule la plus utile de tout le calcul propositionnel.\n' +
              '• **Justification** : $\\neg P \\lor Q$ est fausse uniquement lorsque $\\neg P = F$ et $Q = F$, c’est-à-dire $P = V$ et $Q = F$ — exactement l’unique cas où $P \\implies Q$ est fausse !\n' +
              '• **Négation immédiate** : en appliquant De Morgan à $\\neg(\\neg P \\lor Q)$, on obtient $\\neg(P \\implies Q) \\equiv \\neg(\\neg P) \\land \\neg Q \\equiv P \\land \\neg Q$.\n' +
              '• **Interprétation** : pour prouver qu’une promesse « Si tu achètes le pack Premium ($P$), alors la livraison est gratuite ($Q$) » est mensongère, il faut constater que tu as acheté le pack Premium ($P$) ET que la livraison a été facturée ($\\neg Q$).',
            formula: {
              name: 'Implication en disjonction et négation',
              formula: '(P \\implies Q) \\equiv (\\neg P \\lor Q) \\quad \\Longrightarrow \\quad \\neg(P \\implies Q) \\equiv (P \\land \\neg Q)',
              note: 'Indispensable pour démontrer la loi de la contraposée et pour mener un raisonnement par l’absurde.',
            },
            keyRule:
              'Nier $P \\implies Q$ donne TOUJOURS $P \\land \\neg Q$ : on garde l’hypothèse $P$ vraie et on nie la conclusion $Q$.',
            konanTip:
              'Cette formule explique immédiatement pourquoi, pour prouver $P \\implies Q$ par l’absurde, on commence par supposer $P$ vraie ET $Q$ fausse !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Quelle formule est logiquement équivalente à $\\neg(P \\implies \\neg Q)$ ?',
              options: [
                '$\\neg P \\implies Q$',
                '$P \\lor Q$',
                '$\\neg P \\land Q$',
                '$P \\land Q$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'On applique $\\neg(A \\implies B) \\equiv A \\land \\neg B$ avec $A = P$ et $B = \\neg Q$ : $\\neg(P \\implies \\neg Q) \\equiv P \\land \\neg(\\neg Q) \\equiv P \\land Q$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Méthode pas à pas',
            stepTheme: 'green',
            stepTitle: 'Simplifier méthodiquement la négation d’une formule imbriquée',
            paragraphText:
              'Face à une formule contenant plusieurs niveaux de parenthèses et d’implications, il faut procéder de manière mécanique de l’extérieur vers l’intérieur.\n' +
              '• **Étape 1** : remplacer chaque implication $X \\implies Y$ par $\\neg X \\lor Y$ (et chaque $X \\iff Y$ si besoin).\n' +
              '• **Étape 2** : descendre le symbole $\\neg$ d’un niveau à la fois en appliquant les lois de De Morgan ($\\land \\leftrightarrow \\lor$).\n' +
              '• **Étape 3** : éliminer toutes les doubles négations $\\neg(\\neg X) \\equiv X$.\n' +
              'Exemple : simplifions $\\neg[(A \\lor B) \\land \\neg C]$. Au niveau externe, le connecteur est $\\land$, donc De Morgan donne $\\neg(A \\lor B) \\lor \\neg(\\neg C)$. Au niveau interne, on obtient $(\\neg A \\land \\neg B) \\lor C$.',
            konanTip:
              'Identifie toujours en premier le **connecteur principal** (celui qui est le plus à l’extérieur des parenthèses) : c’est sur lui que s’applique la première loi de De Morgan.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Quelle est la forme simplifiée de $\\neg[(A \\land \\neg B) \\lor C]$ ?',
              options: [
                '$(\\neg A \\lor B) \\land \\neg C$',
                '$(\\neg A \\land B) \\land \\neg C$',
                '$(\\neg A \\lor B) \\lor \\neg C$',
                '$(A \\lor \\neg B) \\land \\neg C$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Connecteur principal $\\lor$ : $\\neg[(A \\land \\neg B) \\lor C] \\equiv \\neg(A \\land \\neg B) \\land \\neg C \\equiv (\\neg A \\lor \\neg(\\neg B)) \\land \\neg C \\equiv (\\neg A \\lor B) \\land \\neg C$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Erreur fatale',
            stepTheme: 'orange',
            stepTitle: 'Piège d’examen : la négation de « $P \\implies Q$ » n’est pas « $P \\implies \\neg Q$ »',
            paragraphText:
              'C’est l’une des erreurs les plus coûteuses aux partiels de logique : croire que le contraire de « Si $P$, alors $Q$ » est « Si $P$, alors non $Q$ ».\n' +
              '• **Pourquoi c’est faux** : lorsque $P$ est Fausse, $P \\implies Q$ est Vraie ET $P \\implies \\neg Q$ est AUSSI Vraie ! Deux propositions toutes deux vraies sur la même ligne ne peuvent évidemment pas être la négation l’une de l’autre.\n' +
              '• **Vérification numérique** : considérons l’énoncé « Si $n$ est multiple de $3$, alors $n$ est pair » pour un entier $n$ donné. Si $n = 5$ ($P = F$), les deux implications $P \\implies Q$ et $P \\implies \\neg Q$ sont vraies simultanément.\n' +
              '• **Bonne réponse** : la négation exacte exige que $P$ soit réalisée et $Q$ mise en défaut, soit $P \\land \\neg Q$.',
            keyRule:
              '$P \\implies Q$ et $P \\implies \\neg Q$ ne sont PAS contraires : elles sont toutes deux vraies dès que $P$ est fausse !',
            konanTip:
              'Dès qu’un QCM te demande la négation d’une implication, élimine immédiatement toutes les options qui contiennent encore une flèche $\\implies$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Un étudiant affirme que la négation de $P \\implies Q$ est $P \\implies \\neg Q$. Pour quelles valeurs de $(P, Q)$ voit-on immédiatement que son affirmation est fausse ?',
              options: [
                'Uniquement lorsque $P = V$ et $Q = F$.',
                'Lorsque $P = F$ (que $Q$ soit $V$ ou $F$), car les deux implications valent alors Vrai simultanément.',
                'Uniquement lorsque $P = V$ et $Q = V$.',
                'Son affirmation est en réalité correcte.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une proposition et sa négation doivent toujours avoir des valeurs de vérité opposées. Or pour $P = F$, $P \\implies Q$ vaut $V$ et $P \\implies \\neg Q$ vaut aussi $V$.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_logique_ch1_p3',
        order: 3,
        title: 'Implication, réciproque, contraposée et conditions nécessaires/suffisantes',
        summary:
          'Maîtriser les quatre propositions associées à une implication, utiliser la loi de la contraposée, distinguer CN/CS/CNS et déjouer les sophismes classiques.',
        conceptExplanation:
          'Autour d’une implication directe $P \\implies Q$, trois autres implications se forment naturellement et se regroupent en **deux paires logiquement équivalentes** :\n' +
          '1. **Paire directe** : l’implication directe $P \\implies Q$ et sa **contraposée** $\\neg Q \\implies \\neg P$ sont **toujours logiquement équivalentes**.\n' +
          '2. **Paire réciproque** : la **réciproque** $Q \\implies P$ et l’**inverse** $\\neg P \\implies \\neg Q$ sont équivalentes entre elles, mais indépendantes de l’implication directe !\n\n' +
          'Le vocabulaire des conditions traduit précisément le sens de la flèche dans $P \\implies Q$ :\n' +
          '• **$P$ est une condition suffisante (CS) pour $Q$** : il suffit que $P$ soit vraie pour garantir $Q$.\n' +
          '• **$Q$ est une condition nécessaire (CN) pour $P$** : il faut obligatoirement que $Q$ soit vraie pour que $P$ puisse l’être.\n' +
          '• **Condition nécessaire et suffisante (CNS)** : lorsque $P \\implies Q$ ET $Q \\implies P$ sont toutes deux vraies ($P \\iff Q$).',
        formulas: [
          {
            name: 'Loi de la contraposée',
            formula: '(P \\implies Q) \\equiv (\\neg Q \\implies \\neg P)',
            note: 'Preuve algébrique : (¬Q ⇒ ¬P) ≡ (¬(¬Q) ∨ ¬P) ≡ (Q ∨ ¬P) ≡ (¬P ∨ Q) ≡ (P ⇒ Q).',
          },
          {
            name: 'Équivalence de la réciproque et de l’inverse',
            formula: '(Q \\implies P) \\equiv (\\neg P \\implies \\neg Q)',
            note: 'L’inverse est simplement la contraposée de la réciproque.',
          },
        ],
        keyRule:
          'Une implication a toujours la même valeur de vérité que sa **contraposée**, mais connaître $P \\implies Q$ ne dit RIEN sur la vérité de sa **réciproque** $Q \\implies P$ !',
        workedExample: {
          title: 'Carte Gold / Salon VIP et contraposée d’une règle de recommandation',
          statement:
            '1) Soit l’implication « Si un client possède la carte Gold ($G$), alors il accède au salon VIP ($V$) ». Écrire sa réciproque, son inverse et sa contraposée. 2) Écrire et interpréter la contraposée de $(S \\land F) \\implies R$ (Satisfaction et Fidélité impliquent Recommandation).',
          methodSteps: [
            '1) Directe : $G \\implies V$. Réciproque : $V \\implies G$ (« S’il accède au salon VIP, il a la carte Gold » — fausse en général, car un billet Business donne aussi accès).',
            'Inverse : $\\neg G \\implies \\neg V$ (« Sans carte Gold, pas de salon VIP » — équivalente à la réciproque, donc fausse aussi).',
            'Contraposée : $\\neg V \\implies \\neg G$ (« S’il n’a pas accès au salon VIP, alors il ne possède pas la carte Gold » — toujours vraie si $G \\implies V$ est vraie).',
            '2) Contraposée de $(S \\land F) \\implies R$ : $\\neg R \\implies \\neg(S \\land F)$, qui devient par De Morgan $\\neg R \\implies (\\neg S \\lor \\neg F)$.',
          ],
          conclusion:
            'L’absence de recommandation ($\\neg R$) garantit que le client n’est pas satisfait OU n’est pas fidèle (ou ni l’un ni l’autre).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Les 4 formes',
            stepTheme: 'blue',
            stepTitle: 'Cartographie des 4 implications : directe, contraposée, réciproque et inverse',
            paragraphText:
              'Face à une implication $P \\implies Q$, savoir distinguer les quatre variantes évite toute confusion lors d’une démonstration.\n' +
              '• **Directe ($P \\implies Q$)** : énoncé de départ (« Si $x = 2$, alors $x^2 = 4$ » — Vrai).\n' +
              '• **Contraposée ($\\neg Q \\implies \\neg P$)** : on inverse l’ordre ET on nie les deux membres (« Si $x^2 \\neq 4$, alors $x \\neq 2$ » — toujours Vrai).\n' +
              '• **Réciproque ($Q \\implies P$)** : on inverse uniquement l’ordre (« Si $x^2 = 4$, alors $x = 2$ » — Faux, car $x = -2$).\n' +
              '• **Inverse ($\\neg P \\implies \\neg Q$)** : on nie sans inverser (« Si $x \\neq 2$, alors $x^2 \\neq 4$ » — Faux aussi pour $x = -2$).\n' +
              'La matrice 2×2 ci-dessous met en évidence les deux paires équivalentes.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Les 4 formes logiques autour de l’implication P ⇒ Q',
              caption: 'La diagonale descendante (Directe ↔ Contraposée) forme une paire équivalente ; la diagonale montante (Réciproque ↔ Inverse) forme l’autre paire.',
              matrix2x2: {
                topAxis: ['Sans négation', 'Avec négation des deux termes'],
                leftAxis: ['Sens P → Q', 'Sens Q → P'],
                topLeft: {
                  title: 'Directe : P ⇒ Q',
                  color: 'blue',
                  items: ['Sens initial', 'Équivalente à la contraposée', 'Ex. : x = 2 ⇒ x² = 4 (V)'],
                },
                topRight: {
                  title: 'Inverse : ¬P ⇒ ¬Q',
                  color: 'orange',
                  items: ['Négation sans inversion', 'Équivalente à la réciproque', 'Ex. : x ≠ 2 ⇒ x² ≠ 4 (F)'],
                },
                bottomLeft: {
                  title: 'Réciproque : Q ⇒ P',
                  color: 'orange',
                  items: ['Inversion seule', 'Indépendante de P ⇒ Q', 'Ex. : x² = 4 ⇒ x = 2 (F)'],
                },
                bottomRight: {
                  title: 'Contraposée : ¬Q ⇒ ¬P',
                  color: 'green',
                  items: ['Inversion + négation', 'Toujours équivalente à P ⇒ Q', 'Ex. : x² ≠ 4 ⇒ x ≠ 2 (V)'],
                },
              },
            },
            keyRule:
              'Contraposée = inverser + nier ($\\neg Q \\implies \\neg P$). Si tu nies sans inverser, tu obtiens l’inverse, qui n’est PAS équivalente à $P \\implies Q$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Soit l’implication vraie : « Si un nombre entier $n$ est divisible par $6$, alors $n$ est pair ». Quelle proposition est son **inverse** (et quelle est sa valeur de vérité) ?',
              options: [
                '« Si $n$ est impair, alors $n$ n’est pas divisible par $6$ » (Vraie).',
                '« Si $n$ n’est pas divisible par $6$, alors $n$ est impair » (Fausse, contre-exemple $n = 4$).',
                '« Si $n$ est pair, alors $n$ est divisible par $6$ » (Vraie).',
                '« $n$ est divisible par $6$ et $n$ est impair » (Fausse).',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’inverse de $P \\implies Q$ est $\\neg P \\implies \\neg Q$, soit « Si $n$ n’est pas divisible par $6$, alors $n$ est impair ». Elle est fausse car $n = 4$ n’est pas divisible par $6$ mais est pair.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Contraposée',
            stepTheme: 'violet',
            stepTitle: 'Reformuler efficacement un énoncé grâce à la loi de la contraposée',
            paragraphText:
              'La loi de la contraposée $(P \\implies Q) \\equiv (\\neg Q \\implies \\neg P)$ sert aussi bien à démontrer des théorèmes qu’à reformuler positivement un argumentaire.\n' +
              '• **Démonstration algébrique** : $(\\neg Q \\implies \\neg P) \\equiv \\neg(\\neg Q) \\lor \\neg P \\equiv Q \\lor \\neg P \\equiv \\neg P \\lor Q \\equiv (P \\implies Q)$.\n' +
              '• **Reformulation positive** : un éditeur SaaS affiche « Si vous n’utilisez pas notre logiciel ($\\neg L$), vous perdez du temps ($T$) ». Sa contraposée est $\\neg T \\implies L$ : « Si vous ne perdez pas de temps, c’est que vous utilisez notre logiciel ».\n' +
              '• **Contraposée avec conjonction** : la contraposée de $(S \\land F) \\implies R$ est $\\neg R \\implies \\neg(S \\land F)$, soit par De Morgan $\\neg R \\implies (\\neg S \\lor \\neg F)$.',
            formula: {
              name: 'Contraposée d’une implication composée',
              formula: '\\big((S \\land F) \\implies R\\big) \\equiv \\big(\\neg R \\implies (\\neg S \\lor \\neg F)\\big)',
              note: 'Ne jamais oublier d’appliquer De Morgan sur la négation de la prémisse composée !',
            },
            konanTip:
              'Lorsqu’on te demande la contraposée d’une formule dont la prémisse est un « ET », vérifie bien que le « ET » devient un « OU » dans la conclusion de la contraposée.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Quelle est la contraposée simplifiée de l’implication : $(A \\lor B) \\implies \\neg C$ ?',
              options: [
                '$C \\implies (\\neg A \\lor \\neg B)$',
                '$\\neg C \\implies (\\neg A \\land \\neg B)$',
                '$C \\implies (\\neg A \\land \\neg B)$',
                '$(\\neg A \\land \\neg B) \\implies C$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La contraposée de $(A \\lor B) \\implies \\neg C$ est $\\neg(\\neg C) \\implies \\neg(A \\lor B)$, ce qui se simplifie par double négation et De Morgan en $C \\implies (\\neg A \\land \\neg B)$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'CN / CS / CNS',
            stepTheme: 'blue',
            stepTitle: 'Condition suffisante, condition nécessaire et CNS',
            paragraphText:
              'Dans la rédaction mathématique comme dans les contrats ou réglementations, on exprime les implications par les mots « nécessaire » et « suffisante ».\n' +
              '• **Condition suffisante (CS)** : dans $P \\implies Q$, $P$ suffit à entraîner $Q$. Exemple : « habiter à Cocody » est une condition suffisante pour « habiter à Abidjan ».\n' +
              '• **Condition nécessaire (CN)** : dans $P \\implies Q$, $Q$ est indispensable pour que $P$ soit réalisée (car si $\\neg Q$, alors $\\neg P$). Exemple : « avoir un compte Instagram » est une condition **nécessaire** (mais non suffisante) pour faire du marketing d’influence sur Instagram.\n' +
              '• **Condition nécessaire et suffisante (CNS)** : $P \\iff Q$ (« il faut et il suffit que »). Exemple : un entier est pair si et seulement si son carré est pair.',
            keyRule:
              'Dans $P \\implies Q$ : **$P$ = Suffisante** (« il suffit de $P$ pour $Q$ ») et **$Q$ = Nécessaire** (« il faut $Q$ pour $P$ »). Astuce visuelle : $S \\implies N$ (Sens Naturel !).',
            konanTip:
              'Retiens le sigle **S $\\implies$ N** : la condition **S**uffisante est toujours à gauche de la flèche, et la condition **N**écessaire est toujours à droite !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Pour un entier naturel $n$, la condition « $n$ se termine par le chiffre $0$ » est, par rapport à la propriété « $n$ est divisible par $5$ », une condition :',
              options: [
                'Nécessaire mais non suffisante.',
                'Nécessaire et suffisante.',
                'Ni nécessaire ni suffisante.',
                'Suffisante mais non nécessaire.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Si $n$ se termine par $0$, alors $n$ est divisible par $5$ (donc condition suffisante). Mais la réciproque est fausse ($15$ est divisible par $5$ sans se terminer par $0$), donc elle n’est pas nécessaire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Inférences valides',
            stepTheme: 'violet',
            stepTitle: 'Modus Ponens et Modus Tollens : les deux règles d’or de la déduction',
            paragraphText:
              'À partir d’une implication établie $P \\implies Q$, deux règles d’inférence déductives sont rigoureusement valides.\n' +
              '• **Modus Ponens (détachement)** : si l’on sait que $(P \\implies Q)$ est vraie ET que $P$ est vraie, alors on peut déduire avec certitude que $Q$ est vraie.\n' +
              '• **Modus Tollens (négation du conséquent)** : si l’on sait que $(P \\implies Q)$ est vraie ET que $Q$ est fausse ($\\neg Q$), alors on peut déduire avec certitude que $P$ est fausse ($\\neg P$) — c’est le Modus Ponens appliqué à la contraposée !\n' +
              '• **Application en audit informatique** : si « Serveur surchargé $\\implies$ Alerte rouge » est une règle fiable et qu’aucune alerte rouge n’est déclenchée ($\\neg Q$), alors par Modus Tollens le serveur n’est pas surchargé ($\\neg P$).',
            formula: {
              name: 'Modus Ponens et Modus Tollens',
              formula: '\\big[(P \\implies Q) \\land P\\big] \\implies Q, \\qquad \\big[(P \\implies Q) \\land \\neg Q\\big] \\implies \\neg P',
              note: 'Ces deux tautologies sont les moteurs fondamentaux de toute démonstration mathématique.',
            },
            keyRule:
              'Avec $P \\implies Q$ vraie : observer $P$ prouve $Q$ (Modus Ponens) ; observer $\\neg Q$ prouve $\\neg P$ (Modus Tollens).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Sachant que la règle « Si un colis est expédié en express ($E$), il arrive en moins de 24 h ($R$) » est toujours respectée, et qu’un colis met 48 h à arriver ($\\neg R$), quelle déduction rigoureuse s’impose ?',
              options: [
                'Le colis n’a pas été expédié en express ($\\neg E$), par Modus Tollens.',
                'Le colis a été expédié en express ($E$), par Modus Ponens.',
                'On ne peut rien conclure sur le mode d’expédition.',
                'La règle initiale est nécessairement fausse.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On dispose de $E \\implies R$ et de $\\neg R$. Par Modus Tollens (ou contraposée $\\neg R \\implies \\neg E$), on conclut avec certitude $\\neg E$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Sophismes',
            stepTheme: 'orange',
            stepTitle: 'Deux erreurs de raisonnement très fréquentes : affirmation du conséquent et négation de l’antécédent',
            paragraphText:
              'Beaucoup de raisonnements fallacieux en économie, en droit ou dans les médias proviennent de deux sophismes liés à l’implication $P \\implies Q$.\n' +
              '• **Sophisme 1 — Affirmation du conséquent** : observer $Q = V$ et en conclure $P = V$. Exemple : sachant « S’il pleut ($P$), le sol est mouillé ($Q$) », constater que le sol est mouillé ne prouve pas qu’il a plu (un camion-citerne ou une fuite d’eau ont pu mouiller la chaussée).\n' +
              '• **Sophisme 2 — Négation de l’antécédent** : observer $P = F$ et en conclure $Q = F$. Exemple : savoir qu’un client n’a pas la carte Gold ($\\neg G$) ne prouve pas qu’il n’a pas accès au salon VIP ($\\neg V$), car d’autres billets donnent cet accès.\n' +
              'Ces deux erreurs reviennent à confondre l’implication directe avec sa réciproque ou son inverse !',
            keyRule:
              'De $(P \\implies Q)$ et $Q$, on ne déduit RIEN sur $P$. De $(P \\implies Q)$ et $\\neg P$, on ne déduit RIEN sur $Q$.',
            konanTip:
              'Dès qu’un énoncé te donne $P \\implies Q$ et une observation, trace la flèche au brouillon : si tu vas dans le sens de la flèche ($P \\to Q$) ou à rebours avec négation ($\\neg Q \\to \\neg P$), c’est valide ; sinon, c’est un sophisme !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p3_q5',
              type: 'mcq',
              prompt: 'On sait que « Si une entreprise est cotée à la BRVM ($C$), alors elle publie ses comptes audités ($A$) ». On observe qu’une PME ivoirienne publie ses comptes audités ($A = V$). Que peut-on déduire ?',
              options: [
                'Elle est obligatoirement cotée à la BRVM.',
                'Elle n’est pas cotée à la BRVM.',
                'On ne peut rien conclure sur sa cotation en bourse (conclure $C$ serait une affirmation du conséquent).',
                'L’implication $C \\implies A$ est fausse.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Publier des comptes audités est une condition nécessaire pour être cotée à la BRVM, mais non suffisante (une société non cotée peut aussi publier ses comptes). Observer $A = V$ ne permet pas de conclure $C = V$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse',
            stepTheme: 'slate',
            stepTitle: 'Analyser une chaîne de règles de conformité bancaire',
            paragraphText:
              'En pratique, les décisions automatisées combinent plusieurs implications qu’on enchaîne par transitivité et contraposition.\n' +
              '• **Règle 1** : Dossier complet ($D$) et Score élevé ($S$) impliquent Validation automatique ($V$) : $(D \\land S) \\implies V$.\n' +
              '• **Règle 2** : Validation automatique ($V$) implique Déblocage sous 24 h ($U$) : $V \\implies U$.\n' +
              '• **Déduction en chaîne** : par transitivité, $(D \\land S) \\implies U$. Par contraposée, si les fonds ne sont pas débloqués sous 24 h ($\\neg U$), alors $\\neg(D \\land S)$, donc $\\neg D \\lor \\neg S$ : le dossier est incomplet OU le score est insuffisant.\n' +
              'Cette analyse structurée permet d’auditer immédiatement la cause d’un rejet dans un workflow numérique.',
            konanTip:
              'Pour auditer une chaîne $A \\implies B \\implies C$, résume-la d’abord en $A \\implies C$, puis prends la contraposée $\\neg C \\implies \\neg A$ si tu pars d’un échec final.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p3_q6',
              type: 'mcq',
              prompt: 'On dispose des règles vraies : $(D \\land S) \\implies V$ et $V \\implies U$. On constate $\\neg U$ et $D = V$. Que peut-on démontrer avec certitude ?',
              options: [
                '$S = V$ et $V = V$.',
                '$S = F$ (le score est insuffisant).',
                '$V = V$ mais $S = F$.',
                'On ne peut rien conclure sur $S$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'De $V \\implies U$ et $\\neg U$, le Modus Tollens donne $\\neg V$. De $(D \\land S) \\implies V$ et $\\neg V$, le Modus Tollens donne $\\neg(D \\land S) \\equiv \\neg D \\lor \\neg S$. Comme $D = V$ (donc $\\neg D = F$), il faut obligatoirement $\\neg S = V$, soit $S = F$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Logique des prédicats et quantificateurs (∀, ∃, ∃!)
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch2',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Logique et Raisonnement Mathématique',
    title: 'Chapitre 2 — Logique des prédicats et quantificateurs ($\\forall, \\exists, \\exists!$)',
    summary:
      'Prédicats et domaines de quantification, quantificateurs universel ($\\forall$), existentiel ($\\exists$) et d’unicité ($\\exists!$), règles de négation, méthode du contre-exemple et ordre des quantificateurs imbriqués.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch2_p1',
        order: 1,
        title: 'Prédicats, domaines et quantificateurs ($\\forall, \\exists, \\exists!$)',
        summary:
          'Transformer un prédicat dépendant d’une variable en proposition grâce aux quantificateurs universel, existentiel et d’existence-unicité.',
        conceptExplanation:
          'La logique propositionnelle ne suffit pas pour exprimer des propriétés portant sur tous les éléments d’un ensemble ou sur certains d’entre eux. La **logique des prédicats** introduit des **prédicats** $P(x)$ (énoncés dépendant d’une ou plusieurs variables dans un **domaine de référence** $E$) et des **quantificateurs** qui lient ces variables pour former de véritables propositions :\n' +
          '• **Quantificateur universel ($\\forall$)** : « $\\forall x \\in E,\\ P(x)$ » signifie « pour tout $x$ appartenant à $E$, la propriété $P(x)$ est vraie ». Elle n’est vraie que si $P(x)$ est vérifiée pour **chaque** élément de $E$ sans exception.\n' +
          '• **Quantificateur existentiel ($\\exists$)** : « $\\exists x \\in E,\\ P(x)$ » signifie « il existe **au moins un** élément $x$ de $E$ tel que $P(x)$ soit vraie ».\n' +
          '• **Existence et unicité ($\\exists!$)** : « $\\exists! x \\in E,\\ P(x)$ » signifie « il existe **un et un seul** élément $x$ de $E$ vérifiant $P(x)$ ».\n\n' +
          'La valeur de vérité d’un énoncé quantifié dépend directement du domaine $E$ choisi.',
        formulas: [
          {
            name: 'Quantificateurs fondamentaux',
            formula: '\\forall x \\in E,\\ P(x) \\qquad ; \\qquad \\exists x \\in E,\\ P(x) \\qquad ; \\qquad \\exists! x \\in E,\\ P(x)',
            note: 'Dans « ∀x ∈ E, P(x) », la variable x est dite liée (ou muette) : on peut la renommer sans changer le sens.',
          },
          {
            name: 'Décomposition de l’existence et unicité',
            formula: '(\\exists! x \\in E,\\ P(x)) \\iff (\\exists x \\in E,\\ P(x)) \\land (\\forall x, y \\in E,\\ (P(x) \\land P(y)) \\implies x = y)',
            note: 'Existence (au moins un) + Unicité (au plus un) = exactement un.',
          },
        ],
        keyRule:
          'Précise TOUJOURS le domaine de quantification $E$ (ex. $\\mathbb{N}, \\mathbb{Z}, \\mathbb{R}$, ou l’ensemble des clients) : un même prédicat peut être vrai sur $\\mathbb{R}$ et faux sur $\\mathbb{N}$ !',
        workedExample: {
          title: 'Formalisation de règles d’audience en marketing digital',
          statement:
            'Traduire en logique des prédicats : 1) « Chaque visiteur du site e-commerce a cliqué sur au moins une publicité ». 2) « Il existe un segment de marché qui n’est ciblé par aucune marque concurrente ».',
          methodSteps: [
            '1) On identifie les domaines : $V$ (Visiteurs) et $P$ (Publicités), et le prédicat $\\text{Clic}(v, p)$ : « $v$ a cliqué sur $p$ ».',
            '« Chaque visiteur » se traduit par $\\forall v \\in V$, et « au moins une publicité » par $\\exists p \\in P$ : on obtient $\\forall v \\in V,\\ \\exists p \\in P,\\ \\text{Clic}(v, p)$.',
            '2) On pose $S$ (Segments), $M$ (Marques) et $\\text{Cible}(m, s)$ : « la marque $m$ cible le segment $s$ ».',
            '« Il existe un segment » donne $\\exists s \\in S$, et « n’est ciblé par aucune marque » signifie « pour toute marque $m$, $m$ ne cible pas $s$ » : $\\forall m \\in M,\\ \\neg\\text{Cible}(m, s)$.',
          ],
          conclusion:
            '1) $\\forall v \\in V,\\ \\exists p \\in P,\\ \\text{Clic}(v, p)$ ; 2) $\\exists s \\in S,\\ \\forall m \\in M,\\ \\neg\\text{Cible}(m, s)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Prédicat',
            stepTheme: 'blue',
            stepTitle: 'Du prédicat à la proposition : rôle du domaine de référence',
            paragraphText:
              'En mathématiques comme dans une base de données SQL, on manipule constamment des propriétés qui dépendent d’un objet variable $x$.\n' +
              '• **Prédicat (ou forme propositionnelle)** : énoncé $P(x)$ contenant une variable libre $x$ appartenant à un ensemble $E$ (le domaine ou référentiel). Tant que $x$ n’est pas fixé, $P(x)$ n’a pas encore de valeur de vérité globale.\n' +
              '• **Instanciation** : en remplaçant $x$ par une valeur concrète $a \\in E$, $P(a)$ devient une proposition (Vraie ou Fausse). Exemple : pour $P(x) : « x^2 \\ge 9 »$ sur $\\mathbb{R}$, $P(4)$ est Vraie mais $P(2)$ est Fausse.\n' +
              '• **Quantification** : placer $\\forall$ ou $\\exists$ devant $P(x)$ lie la variable $x$ et transforme le prédicat en une véritable proposition.\n' +
              'Exemple en gestion : « $\\text{Actif}(c)$ » est un prédicat sur les clients $c$ ; « $\\forall c \\in \\text{Clients},\\ \\text{Actif}(c)$ » est une proposition.',
            keyRule:
              'Un prédicat $P(x)$ n’est PAS une proposition : il devient une proposition soit par instanciation ($x = a$), soit par quantification ($\\forall x$ ou $\\exists x$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Considérons le prédicat $P(x) : « x^2 - 4 = 0 »$ sur $E = \\mathbb{R}$. Parmi les expressions suivantes, laquelle reste un **prédicat** (et non une proposition) ?',
              options: [
                '$P(2)$',
                '$\\exists x \\in \\mathbb{R},\\ P(x)$',
                '$P(x) \\lor (x > 0)$ sans quantificateur sur $x$',
                '$\\forall x \\in \\mathbb{R},\\ P(x)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans $P(x) \\lor (x > 0)$, la variable $x$ est libre (ni fixée ni quantifiée), donc l’énoncé n’a pas de valeur de vérité globale : c’est un prédicat. Les trois autres sont des propositions (Vraie, Vraie, Fausse).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Universel ∀',
            stepTheme: 'blue',
            stepTitle: 'Le quantificateur universel ($\\forall$) : généralisation de la conjonction',
            paragraphText:
              'Le symbole $\\forall$ (un « A » renversé, pour *All*) permet d’affirmer qu’une propriété s’applique à l’intégralité d’un ensemble sans aucune exception.\n' +
              '• **Syntaxe** : $\\forall x \\in E,\\ P(x)$ se lit « Pour tout $x$ de $E$, $P(x)$ » ou « Quel que soit $x$ appartenant à $E$, $P(x)$ ».\n' +
              '• **Lien avec le « ET »** : lorsque $E = \\{a_1, a_2, \\dots, a_n\\}$ est fini, $\\forall x \\in E,\\ P(x)$ équivaut exactement à la grande conjonction $P(a_1) \\land P(a_2) \\land \\dots \\land P(a_n)$.\n' +
              '• **Condition de vérité** : il suffit qu’un seul élément de $E$ échoue pour que $\\forall x \\in E,\\ P(x)$ soit Fausse.\n' +
              'Exemple : $\\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$ est Vraie ; en revanche, $\\forall n \\in \\mathbb{N},\\ n^2 > 0$ est Fausse car $0 \\in \\mathbb{N}$ et $0^2 = 0$.',
            formula: {
              name: 'Quantificateur universel sur ensemble fini',
              formula: '(\\forall x \\in \\{a_1, \\dots, a_n\\},\\ P(x)) \\equiv P(a_1) \\land P(a_2) \\land \\dots \\land P(a_n)',
              note: 'Par convention logique, si E = ∅, l’énoncé ∀x ∈ ∅, P(x) est vacuellement Vrai.',
            },
            konanTip:
              'Pour tester une proposition universelle $\\forall x \\in E,\\ P(x)$, vérifie d’abord les cas limites du domaine ($x = 0$, $x = 1$, $x < 0$) : c’est là que se cachent 90 % des contre-exemples !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Laquelle des propositions universelles suivantes est **VRAIE** ?',
              options: [
                '$\\forall x \\in \\mathbb{R},\\ x^2 > x$',
                '$\\forall n \\in \\mathbb{N},\\ n^2 \\ge n$',
                '$\\forall x \\in \\mathbb{R},\\ \\sqrt{x^2} = x$',
                '$\\forall n \\in \\mathbb{Z},\\ 2n > n$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour tout entier naturel $n \\in \\mathbb{N}$, $n(n-1) \\ge 0$ (vrai pour $n = 0, 1, 2, \\dots$), donc $n^2 \\ge n$ est Vraie. Contre-exemples pour les autres : $x = 0{,}5$ pour (A), $x = -3$ pour (C), $n = -1$ pour (D).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Existentiel ∃ / ∃!',
            stepTheme: 'blue',
            stepTitle: 'Quantificateur existentiel ($\\exists$) et existence-unicité ($\\exists!$)',
            paragraphText:
              'Le symbole $\\exists$ (un « E » retourné, pour *Exists*) affirme qu’au moins un objet satisfait la propriété demandée.\n' +
              '• **Existentiel simple ($\\exists$)** : $\\exists x \\in E,\\ P(x)$ se lit « Il existe **au moins un** $x \\in E$ tel que $P(x)$ ». Sur un ensemble fini $E = \\{a_1, \\dots, a_n\\}$, il équivaut à la grande disjonction $P(a_1) \\lor P(a_2) \\lor \\dots \\lor P(a_n)$.\n' +
              '• **Existence et unicité ($\\exists!$)** : $\\exists! x \\in E,\\ P(x)$ impose **exactement un** élément vérifiant $P(x)$ — ni zéro, ni deux ou plus.\n' +
              '• **Illustration sur $x^2 = 4$** : $\\exists x \\in \\mathbb{R},\\ x^2 = 4$ est Vraie (il y a $-2$ et $2$), mais $\\exists! x \\in \\mathbb{R},\\ x^2 = 4$ est Fausse ! En revanche, $\\exists! x \\in \\mathbb{R}_+,\\ x^2 = 4$ est Vraie (seul $x = 2$ convient).',
            formula: {
              name: 'Lien entre ∃! et les quantificateurs usuels',
              formula: '(\\exists! x \\in E,\\ P(x)) \\iff (\\exists x \\in E,\\ P(x)) \\land (\\forall x, y \\in E,\\ P(x) \\land P(y) \\implies x = y)',
              note: 'Un identifiant unique (clé primaire) dans une base de données vérifie précisément une propriété ∃!.',
            },
            keyRule:
              'En mathématiques, « il existe » ($\\exists$) signifie TOUJOURS « il existe **au moins un** » (il peut y en avoir plusieurs). Pour exiger un seul élément, il faut écrire $\\exists!$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Parmi les quatre énoncés suivants, lequel est **VRAI** ?',
              options: [
                '$\\exists! x \\in \\mathbb{R},\\ x^2 = 9$',
                '$\\exists! x \\in \\mathbb{Z},\\ 2x = 5$',
                '$\\exists! x \\in \\mathbb{R},\\ x^3 = -8$',
                '$\\exists x \\in \\mathbb{R},\\ x^2 + 4 = 0$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dans $\\mathbb{R}$, la fonction $x \\mapsto x^3$ est strictement croissante et bijective : $x^3 = -8$ admet l’unique solution réelle $x = -2$. Pour (A), il y a deux solutions ($-3$ et $3$) ; pour (B) et (D), aucune solution dans le domaine indiqué.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Traduction',
            stepTheme: 'green',
            stepTitle: 'Traduire rigoureusement un énoncé du français en logique des prédicats',
            paragraphText:
              'La formalisation d’un cahier des charges ou d’une règle métier obéit à des correspondances précises entre tournures françaises et symboles logiques.\n' +
              '• **« Tout… », « Chaque… », « Quel que soit… »** $\\longrightarrow \\forall x \\in E$ (souvent suivi d’une implication $\\implies$ lorsqu’on restreint par une condition : « Tout produit bio est cher » s’écrit $\\forall x,\\ \\text{Bio}(x) \\implies \\text{Cher}(x)$).\n' +
              '• **« Il existe… », « Certains… », « Au moins un… »** $\\longrightarrow \\exists x \\in E$ (souvent suivi d’une **conjonction $\\land$** : « Certains clients sont étudiants » s’écrit $\\exists x,\\ \\text{Client}(x) \\land \\text{Étudiant}(x)$).\n' +
              '• **« Aucun… n’est… »** $\\longrightarrow \\forall x \\in E,\\ \\neg P(x)$ (ou de manière équivalente $\\neg(\\exists x \\in E,\\ P(x))$).\n' +
              'Exemple : « Chaque visiteur a cliqué sur au moins une publicité » devient $\\forall v \\in V,\\ \\exists p \\in P,\\ \\text{Clic}(v, p)$.',
            keyRule:
              'Règle d’or de traduction : **$\\forall$ s’associe naturellement à $\\implies$** (restriction d’une règle générale), tandis que **$\\exists$ s’associe naturellement à $\\land$** (existence d’un objet cumulant deux propriétés).',
            konanTip:
              'N’écris JAMAIS $\\exists x,\\ \\text{Bio}(x) \\implies \\text{Cher}(x)$ pour dire « Certains produits bio sont chers » ! Cette formule serait vraie dès qu’il existe un produit NON bio (prémisse fausse). Utilise toujours $\\land$ après $\\exists$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Comment traduire correctement : « Il existe un segment de marché $s \\in S$ qui n’est ciblé par aucune marque $m \\in M$ » (avec le prédicat $\\text{Cible}(m, s)$) ?',
              options: [
                '$\\forall s \\in S,\\ \\exists m \\in M,\\ \\neg\\text{Cible}(m, s)$',
                '$\\exists s \\in S,\\ \\forall m \\in M,\\ \\neg\\text{Cible}(m, s)$',
                '$\\exists s \\in S,\\ \\exists m \\in M,\\ \\neg\\text{Cible}(m, s)$',
                '$\\forall s \\in S,\\ \\forall m \\in M,\\ \\neg\\text{Cible}(m, s)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Il existe un segment $s$ » donne $\\exists s \\in S$. « Qui n’est ciblé par aucune marque » signifie que pour toute marque $m \\in M$, $m$ ne cible pas $s$, soit $\\forall m \\in M,\\ \\neg\\text{Cible}(m, s)$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Domaine & variables',
            stepTheme: 'orange',
            stepTitle: 'Importance du domaine de quantification et statut de variable muette',
            paragraphText:
              'Deux subtilités majeures piègent régulièrement les étudiants lors de l’évaluation d’énoncés quantifiés.\n' +
              '• **Sensibilité au domaine $E$** : considérons le prédicat $P(x) : « 2x = 1 »$. L’énoncé $\\exists x \\in \\mathbb{Z},\\ 2x = 1$ est **Faux**, mais $\\exists x \\in \\mathbb{Q},\\ 2x = 1$ est **Vrai** ($x = 1/2$). De même, $\\forall x \\in \\mathbb{R}_+,\\ \\sqrt{x^2} = x$ est Vrai alors que sur $\\mathbb{R}$ il est Faux.\n' +
              '• **Variable muette (liée)** : dans $\\forall x \\in \\mathbb{R},\\ x^2 \\ge 0$, la lettre $x$ n’a aucune existence en dehors de la formule ; on peut la remplacer par $t$ ou $u$ sans rien changer : $\\forall t \\in \\mathbb{R},\\ t^2 \\ge 0$.\n' +
              '• **Erreur de syntaxe** : écrire une phrase comme « $\\forall x \\in \\mathbb{R},\\ f(x) = 0$, donc $x = 3$ » est absurde, car $x$ n’est plus défini après la fin de l’énoncé quantifié.',
            konanTip:
              'Lis toujours l’ensemble situé juste après $\\in$ avant de juger la vérité d’une formule : $\\mathbb{N}$, $\\mathbb{N}^*$, $\\mathbb{Z}$, $\\mathbb{Q}$, $\\mathbb{R}$ ou $\\mathbb{R}^*$ changent complètement la réponse !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Pour quel domaine $E$ la proposition « $\\forall x \\in E,\\ \\exists y \\in E,\\ x \\cdot y = 1$ » est-elle **VRAIE** ?',
              options: [
                '$E = \\mathbb{R}$',
                '$E = \\mathbb{Z}^*$',
                '$E = \\mathbb{Q}^*$',
                '$E = \\mathbb{N}^*$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’énoncé affirme que tout élément de $E$ possède un inverse multiplicatif dans $E$. Sur $\\mathbb{R}$, $0$ n’a pas d’inverse ; sur $\\mathbb{Z}^*$ et $\\mathbb{N}^*$, $2$ n’a pas d’inverse entier. Seul $E = \\mathbb{Q}^*$ (rationnels non nuls) vérifie la propriété.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Cas avancé',
            stepTheme: 'slate',
            stepTitle: 'Combiner plusieurs quantificateurs et connecteurs dans une même formule',
            paragraphText:
              'Dans la modélisation d’un système d’information ou d’une plateforme e-commerce, une spécification complète combine souvent plusieurs clauses quantifiées reliées par $\\land$ ou $\\implies$.\n' +
              '• **Énoncé à formaliser** : « Il existe un client qui n’aime aucun produit, mais tous les produits sont aimés par au moins un client » (domaines $C$ = Clients, $P$ = Produits, prédicat $\\text{Aime}(c, p)$).\n' +
              '• **Clause 1** : « Il existe un client $c$ qui n’aime aucun produit » $\\longrightarrow \\exists c \\in C,\\ \\forall p \\in P,\\ \\neg\\text{Aime}(c, p)$.\n' +
              '• **Clause 2** : « Tous les produits $p$ sont aimés par au moins un client $c’$ » $\\longrightarrow \\forall p \\in P,\\ \\exists c’ \\in C,\\ \\text{Aime}(c’, p)$.\n' +
              '• **Assemblage** : le mot « mais » devient $\\land$, et l’utilisation de $c’$ distinct de $c$ rend la formule limpide et sans collision de variables.',
            konanTip:
              'Lorsque deux clauses quantifiées sont assemblées par $\\land$, utilise des noms de variables distincts ($c$ et $c’$) pour éviter toute ambiguïté de portée des parenthèses !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Quelle formule formalise exactement : « Il existe un client $c \\in C$ qui n’a acheté aucun produit, et chaque produit $p \\in P$ a été acheté par au moins un client » ?',
              options: [
                '$\\big(\\exists c \\in C,\\ \\forall p \\in P,\\ \\neg\\text{Achat}(c, p)\\big) \\land \\big(\\forall p \\in P,\\ \\exists c’ \\in C,\\ \\text{Achat}(c’, p)\\big)$',
                '$\\big(\\forall c \\in C,\\ \\exists p \\in P,\\ \\neg\\text{Achat}(c, p)\\big) \\land \\big(\\exists p \\in P,\\ \\forall c’ \\in C,\\ \\text{Achat}(c’, p)\\big)$',
                '$\\exists c \\in C,\\ \\forall p \\in P,\\ \\big(\\neg\\text{Achat}(c, p) \\land \\text{Achat}(c, p)\\big)$',
                '$\\big(\\exists c \\in C,\\ \\exists p \\in P,\\ \\neg\\text{Achat}(c, p)\\big) \\lor \\big(\\forall p \\in P,\\ \\exists c’ \\in C,\\ \\text{Achat}(c’, p)\\big)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La première clause « un client $c$ n’a acheté aucun produit » est $\\exists c \\in C, \\forall p \\in P, \\neg\\text{Achat}(c, p)$. La seconde « chaque produit a été acheté par au moins un client » est $\\forall p \\in P, \\exists c’ \\in C, \\text{Achat}(c’, p)$. Les deux sont reliées par $\\land$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch2_p2',
        order: 2,
        title: 'Négation des énoncés quantifiés et méthode du contre-exemple',
        summary:
          'Appliquer les règles mécaniques de négation sur ∀ et ∃, nier une implication universelle et réfuter une affirmation générale par un contre-exemple.',
        conceptExplanation:
          'Nier un énoncé quantifié prolonge directement les lois de De Morgan. Lorsque la négation traverse un quantificateur, elle l’inverse :\n' +
          '• **Négation d’un énoncé universel** : $\\neg(\\forall x \\in E,\\ P(x)) \\equiv (\\exists x \\in E,\\ \\neg P(x))$. Pour que « tous vérifient $P$ » soit faux, il suffit qu’**au moins un** élément ne vérifie pas $P$.\n' +
          '• **Négation d’un énoncé existentiel** : $\\neg(\\exists x \\in E,\\ P(x)) \\equiv (\\forall x \\in E,\\ \\neg P(x))$. Pour qu’il n’en existe aucun, il faut que **tous** échouent à vérifier $P$.\n\n' +
          'En combinant cette règle avec $\\neg(A \\implies B) \\equiv (A \\land \\neg B)$, on obtient la **méthode du contre-exemple** : pour démontrer que $\\forall x \\in E,\\ P(x) \\implies Q(x)$ est fausse, il suffit d’exhiber **un seul** élément $x_0 \\in E$ tel que $P(x_0)$ soit Vraie et $Q(x_0)$ soit Fausse.',
        formulas: [
          {
            name: 'Négation des quantificateurs',
            formula: '\\neg(\\forall x \\in E,\\ P(x)) \\equiv \\exists x \\in E,\\ \\neg P(x) \\quad ; \\quad \\neg(\\exists x \\in E,\\ P(x)) \\equiv \\forall x \\in E,\\ \\neg P(x)',
            note: 'Attention : le domaine « x ∈ E » ne change JAMAIS lors de la négation (on n’écrit jamais x ∉ E).',
          },
          {
            name: 'Négation d’une implication universelle (Contre-exemple)',
            formula: '\\neg\\big(\\forall x \\in E,\\ P(x) \\implies Q(x)\\big) \\equiv \\big(\\exists x \\in E,\\ P(x) \\land \\neg Q(x)\\big)',
            note: 'Un tel élément x vérifiant P(x) et non Q(x) est appelé un contre-exemple.',
          },
        ],
        keyRule:
          'Pour nier un énoncé quantifié : on retourne $\\forall \\leftrightarrow \\exists$, on **conserve intact** le domaine $x \\in E$, et on nie le prédicat final.',
        workedExample: {
          title: 'Négation d’une règle commerciale et exhibition d’un contre-exemple',
          statement:
            'Soit l’affirmation $(A)$ : « Pour tout produit $x$ du catalogue, si $x$ est certifié bio, alors $x$ est plus cher que la moyenne ». 1) Écrire la négation formelle et en français de $(A)$. 2) Comment appelle-t-on un produit réalisant cette négation ?',
          methodSteps: [
            'On formalise $(A)$ : $\\forall x \\in \\text{Catalogue},\\ \\big(\\text{Bio}(x) \\implies \\text{PlusCher}(x)\\big)$.',
            'On passe la négation sur $\\forall$ (qui devient $\\exists$) en gardant $x \\in \\text{Catalogue}$ : $\\exists x \\in \\text{Catalogue},\\ \\neg\\big(\\text{Bio}(x) \\implies \\text{PlusCher}(x)\\big)$.',
            'On applique $\\neg(P \\implies Q) \\equiv P \\land \\neg Q$ : $\\exists x \\in \\text{Catalogue},\\ \\big(\\text{Bio}(x) \\land \\neg\\text{PlusCher}(x)\\big)$.',
            'Traduction : « Il existe au moins un produit du catalogue qui est bio et qui n’est pas plus cher que la moyenne ».',
          ],
          conclusion:
            'Un tel produit est un **contre-exemple** : il suffit à lui seul pour démontrer que l’affirmation générale $(A)$ est fausse.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Règles de négation',
            stepTheme: 'violet',
            stepTitle: 'Nier $\\forall$ et nier $\\exists$ : les lois de De Morgan généralisées',
            paragraphText:
              'Comme $\\forall$ généralise la conjonction $\\land$ et $\\exists$ généralise la disjonction $\\lor$, leurs règles de négation sont exactement les lois de De Morgan étendues aux ensembles.\n' +
              '• **Règle 1** : $\\neg(\\forall x \\in E,\\ P(x)) \\equiv (\\exists x \\in E,\\ \\neg P(x))$. Exemple : la négation de « Toutes les publicités de l’agence sont créatives » est « Il existe au moins une publicité de l’agence qui n’est pas créative ».\n' +
              '• **Règle 2** : $\\neg(\\exists x \\in E,\\ P(x)) \\equiv (\\forall x \\in E,\\ \\neg P(x))$. Exemple : la négation de « Il existe un entier naturel strictement inférieur à $0$ » est « Tout entier naturel est supérieur ou égal à $0$ ».\n' +
              '• **Invariance du domaine** : on ne nie JAMAIS l’appartenance $x \\in E$ ! Seuls le quantificateur et la propriété $P(x)$ sont inversés.',
            formula: {
              name: 'Dualité négation / quantificateurs',
              formula: '\\neg(\\forall x \\in E,\\ P(x)) \\equiv \\exists x \\in E,\\ \\neg P(x), \\qquad \\neg(\\exists x \\in E,\\ P(x)) \\equiv \\forall x \\in E,\\ \\neg P(x)',
              note: 'Notez que la négation d’une inégalité stricte (<) est une inégalité large (≥), et inversement.',
            },
            keyRule:
              'Lors de la négation d’un énoncé quantifié, ne touche JAMAIS au « $\\in E$ » : $\\forall x \\in E$ devient $\\exists x \\in E$, et non $\\exists x \\notin E$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Quelle est la négation mathématique exacte de la proposition : « $\\forall x \\in \\mathbb{R},\\ x^2 \\ge 0$ » ?',
              options: [
                '$\\forall x \\in \\mathbb{R},\\ x^2 < 0$',
                '$\\exists x \\in \\mathbb{R},\\ x^2 < 0$',
                '$\\exists x \\notin \\mathbb{R},\\ x^2 < 0$',
                '$\\exists x \\in \\mathbb{R},\\ x^2 \\le 0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On remplace $\\forall$ par $\\exists$, on conserve $x \\in \\mathbb{R}$, et la négation de $x^2 \\ge 0$ est $x^2 < 0$ (inégalité stricte). On obtient $\\exists x \\in \\mathbb{R},\\ x^2 < 0$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Implication universelle',
            stepTheme: 'green',
            stepTitle: 'Nier une règle générale du type $\\forall x \\in E,\\ P(x) \\implies Q(x)$',
            paragraphText:
              'La grande majorité des théorèmes et des règles de gestion ont la forme d’une implication universelle : « Pour tout $x$, si $P(x)$, alors $Q(x)$ ».\n' +
              '• **Calcul en deux temps** : d’abord $\\neg(\\forall x \\in E,\\ \\dots)$ devient $\\exists x \\in E,\\ \\neg(\\dots)$ ; ensuite $\\neg(P(x) \\implies Q(x))$ devient $P(x) \\land \\neg Q(x)$.\n' +
              '• **Résultat fondamental** : $\\neg(\\forall x \\in E,\\ P(x) \\implies Q(x)) \\equiv (\\exists x \\in E,\\ P(x) \\land \\neg Q(x))$.\n' +
              '• **Exemple concret** : nier « Pour tout entier $n$, si $n$ est multiple de $3$, alors $n$ est impair » donne « Il existe un entier $n$ qui est multiple de $3$ ET pair » (vrai, par exemple $n = 6$).',
            formula: {
              name: 'Négation d’une implication universelle',
              formula: '\\neg(\\forall x \\in E,\\ P(x) \\implies Q(x)) \\equiv \\exists x \\in E,\\ \\big(P(x) \\land \\neg Q(x)\\big)',
              note: 'Formule indispensable pour construire un contre-exemple ou démarrer une preuve par l’absurde.',
            },
            konanTip:
              'Vérifie systématiquement que la flèche $\\implies$ a disparu et s’est transformée en $\\land$ lorsque tu nies une implication universelle !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Quelle est la négation de la proposition : « $\\forall n \\in \\mathbb{N},\\ (n \\text{ premier} \\implies n \\text{ impair})$ » ?',
              options: [
                '$\\forall n \\in \\mathbb{N},\\ (n \\text{ premier} \\implies n \\text{ pair})$',
                '$\\exists n \\in \\mathbb{N},\\ (n \\text{ premier} \\implies n \\text{ pair})$',
                '$\\exists n \\in \\mathbb{N},\\ (n \\text{ premier} \\land n \\text{ pair})$',
                '$\\exists n \\in \\mathbb{N},\\ (n \\text{ non premier} \\land n \\text{ pair})$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La négation de $\\forall n,\\ P(n) \\implies Q(n)$ est $\\exists n,\\ P(n) \\land \\neg Q(n)$, soit « Il existe un entier naturel qui est à la fois premier et pair » (ce qui est Vrai avec $n = 2$ !).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Contre-exemple',
            stepTheme: 'blue',
            stepTitle: 'La méthode du contre-exemple : un seul cas suffit pour réfuter',
            paragraphText:
              'En logique, il existe une asymétrie fondamentale entre **prouver** et **réfuter** un énoncé universel $\\forall x \\in E,\\ P(x)$.\n' +
              '• **Pour prouver** $\\forall x \\in E,\\ P(x)$, vérifier $10$ ou $1\\,000$ exemples particuliers ne suffit JAMAIS (si $E$ est infini ou plus grand) : il faut une démonstration générale.\n' +
              '• **Pour réfuter** $\\forall x \\in E,\\ P(x)$, il suffit d’exhiber **un seul contre-exemple** $x_0 \\in E$ tel que $P(x_0)$ soit faux !\n' +
              '• **Exemples célèbres** : « Toutes les marques de luxe sont européennes » est réfutée par *Tiffany & Co.* (américaine). En arithmétique, Euler a remarqué que $P(n) = n^2 + n + 41$ est premier pour tous les $n$ de $0$ à $39$, mais $n = 40$ donne $40^2 + 40 + 41 = 41^2$ (non premier) : ce seul contre-exemple détruit la conjecture !',
            keyRule:
              'Mille exemples ne prouvent jamais un « $\\forall$ », mais **un unique contre-exemple** suffit à le réfuter définitivement.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q3',
              type: 'mcq',
              prompt: 'On considère la conjecture : « $\\forall n \\in \\mathbb{N}^*,\\ 2^n + 1$ est un nombre premier ». Quel entier $n$ constitue le plus petit **contre-exemple** réfutant cette affirmation ?',
              options: [
                '$n = 1$ (car $2^1 + 1 = 3$)',
                '$n = 2$ (car $2^2 + 1 = 5$)',
                '$n = 3$ (car $2^3 + 1 = 9 = 3 \\times 3$)',
                '$n = 4$ (car $2^4 + 1 = 17$)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour $n = 1, 2$, on obtient $3$ et $5$ (premiers). Pour $n = 3$, $2^3 + 1 = 9 = 3^2$ n’est pas premier : $n = 3$ est donc le plus petit contre-exemple qui réfute la conjecture.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Négation composée',
            stepTheme: 'green',
            stepTitle: 'Nier un énoncé mêlant quantificateurs et connecteurs ($\\land, \\lor$)',
            paragraphText:
              'Lorsqu’un prédicat quantifié contient des conjonctions ou disjonctions, on combine en cascade les règles de négation des quantificateurs et les lois de De Morgan.\n' +
              '• **Exemple e-commerce** : soit l’énoncé « Certains clients achètent le samedi ou le dimanche », formalisé par $\\exists c \\in C,\\ \\big(A(c, \\text{sam}) \\lor A(c, \\text{dim})\\big)$.\n' +
              '• **Étape 1 (quantificateur)** : $\\neg(\\exists c \\in C,\\ \\dots)$ devient $\\forall c \\in C,\\ \\neg\\big(A(c, \\text{sam}) \\lor A(c, \\text{dim})\\big)$.\n' +
              '• **Étape 2 (De Morgan)** : $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$, d’où $\\forall c \\in C,\\ \\big(\\neg A(c, \\text{sam}) \\land \\neg A(c, \\text{dim})\\big)$.\n' +
              '• **Traduction** : « Aucun client n’achète le samedi ni le dimanche » (pour tout client, il n’achète pas le samedi ET n’achète pas le dimanche).',
            konanTip:
              'Procède toujours **de gauche à droite** : inverse d’abord tous les quantificateurs placés en tête, puis propage la négation à l’intérieur des parenthèses avec De Morgan.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Quelle est la négation simplifiée de : « $\\exists x \\in \\mathbb{R},\\ (x > 2 \\land x^2 < 10)$ » ?',
              options: [
                '$\\forall x \\in \\mathbb{R},\\ (x \\le 2 \\lor x^2 \\ge 10)$',
                '$\\forall x \\in \\mathbb{R},\\ (x \\le 2 \\land x^2 \\ge 10)$',
                '$\\forall x \\in \\mathbb{R},\\ (x < 2 \\lor x^2 > 10)$',
                '$\\exists x \\in \\mathbb{R},\\ (x \\le 2 \\lor x^2 \\ge 10)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\exists$ devient $\\forall$ ; par De Morgan, $\\neg(A \\land B) \\equiv \\neg A \\lor \\neg B$ ; enfin $\\neg(x > 2)$ est $x \\le 2$ et $\\neg(x^2 < 10)$ est $x^2 \\ge 10$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège de langage',
            stepTheme: 'orange',
            stepTitle: 'Piège classique : le contraire de « Tous sont… » n’est pas « Aucun n’est… »',
            paragraphText:
              'Dans le langage courant, on confond souvent **négation** (contradictoire) et **contraire extrême**.\n' +
              '• **L’erreur typique** : face à « Tous les étudiants de la promotion ont validé l’UE ($\\forall e,\\ V(e)$) », beaucoup répondent que le contraire est « Aucun étudiant n’a validé l’UE ($\\forall e,\\ \\neg V(e)$) ».\n' +
              '• **Pourquoi c’est faux** : s’il y a $50$ étudiants et que $49$ ont validé mais $1$ a échoué, alors « Tous ont validé » est Faux ET « Aucun n’a validé » est AUSSI Faux ! Or une proposition et sa négation ne peuvent jamais être toutes deux fausses (tiers exclu).\n' +
              '• **La vraie négation** : « Au moins un étudiant n’a pas validé l’UE » ($\\exists e,\\ \\neg V(e)$). Cela inclut aussi bien le cas d’un seul échec que le cas où aucun n’a validé.',
            keyRule:
              'Négation de « Tous les $x$ vérifient $P$ » = « **Au moins un** $x$ ne vérifie pas $P$ » (et JAMAIS « Aucun $x$ ne vérifie $P$ »).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Un responsable affirme : « Toutes les transactions Mobile Money du mois sont sécurisées ». Quelle phrase exprime la **négation logique exacte** de son affirmation ?',
              options: [
                'Aucune transaction Mobile Money du mois n’est sécurisée.',
                'La majorité des transactions Mobile Money du mois ne sont pas sécurisées.',
                'Au moins une transaction Mobile Money du mois n’est pas sécurisée.',
                'Toutes les transactions non Mobile Money sont sécurisées.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’énoncé initial est $\\forall t,\\ S(t)$. Sa négation exacte est $\\exists t,\\ \\neg S(t)$ : « Au moins une transaction du mois n’est pas sécurisée ».',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Entraînement',
            stepTheme: 'slate',
            stepTitle: 'Déterminer la valeur de vérité d’un énoncé via sa négation',
            paragraphText:
              'Parfois, il est beaucoup plus simple de démontrer que la **négation** $\\neg A$ est vraie (ou fausse) pour en déduire immédiatement la valeur de vérité de $A$.\n' +
              '• **Problème** : l’énoncé $A : « \\forall x \\in \\mathbb{R},\\ x^2 - 4x + 5 > 0 »$ est-il vrai ?\n' +
              '• **Méthode directe** : on met sous forme canonique : $x^2 - 4x + 5 = (x - 2)^2 + 1 \\ge 1 > 0$, donc $A$ est Vraie.\n' +
              '• **Problème 2** : l’énoncé $B : « \\forall a, b \\in \\mathbb{R},\\ |a + b| = |a| + |b| »$ est-il vrai ? Sa négation est $\\neg B : « \\exists a, b \\in \\mathbb{R},\\ |a + b| \\neq |a| + |b| »$. Prenons $a = 1$ et $b = -1$ : $|1 + (-1)| = 0 \\neq |1| + |-1| = 2$. Donc $\\neg B$ est Vraie, et par suite $B$ est Fausse.',
            konanTip:
              'Quand tu doutes de la vérité d’une proposition universelle, écris sa négation existentielle $\\neg B$ et teste un couple simple comme $(1, -1)$ ou $(0, 1)$ : si tu trouves un contre-exemple, c’est réglé en 10 secondes !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Soit $P : « \\forall x \\in \\mathbb{R},\\ \\forall y \\in \\mathbb{R},\\ (x + y)^2 = x^2 + y^2 »$. Quelle affirmation est exacte ?',
              options: [
                '$P$ est vraie car $0^2 = 0^2 + 0^2$.',
                '$P$ est fausse ; sa négation $\\exists x, y \\in \\mathbb{R},\\ (x + y)^2 \\neq x^2 + y^2$ est démontrée par le contre-exemple $x = 1, y = 1$.',
                '$P$ est vraie uniquement si $x$ et $y$ sont positifs.',
                '$P$ est fausse pour tous les couples $(x, y) \\in \\mathbb{R}^2$ sans exception.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $x = 1, y = 1$, on a $(1+1)^2 = 4 \\neq 1^2 + 1^2 = 2$, ce qui prouve $\\neg P$, donc $P$ est fausse. Attention : l’option (D) est fausse car l’égalité est vraie dès que $xy = 0$ (par exemple $x = 0, y = 5$).',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_logique_ch2_p3',
        order: 3,
        title: 'Quantificateurs imbriqués, ordre de lecture et pièges de commutation',
        summary:
          'Maîtriser la portée et l’ordre des quantificateurs multiples (∀∃ vs ∃∀), savoir quand on peut permuter et nier une chaîne de quantificateurs.',
        conceptExplanation:
          'Dès qu’un prédicat $P(x, y)$ fait intervenir deux variables, la manière d’emboîter les quantificateurs change radicalement la signification de la phrase :\n' +
          '• **Quantificateurs identiques** : on peut **toujours** permuter deux $\\forall$ consécutifs ($\\forall x \\forall y \\equiv \\forall y \\forall x$) ainsi que deux $\\exists$ consécutifs ($\\exists x \\exists y \\equiv \\exists y \\exists x$).\n' +
          '• **Quantificateurs différents ($\\forall$ et $\\exists$)** : on ne peut **JAMAIS** les permuter sans changer le sens ! Dans $\\forall x,\\ \\exists y,\\ P(x, y)$, le choix de $y$ **peut dépendre** de $x$. Dans $\\exists y,\\ \\forall x,\\ P(x, y)$, un **même $y$ universel** doit convenir simultanément à tous les $x$.\n\n' +
          'L’implication $(\\exists y \\in F,\\ \\forall x \\in E,\\ P(x, y)) \\implies (\\forall x \\in E,\\ \\exists y \\in F,\\ P(x, y))$ est **toujours vraie** (un objet commun convient en particulier à chacun), mais la réciproque est fausse en général !',
        formulas: [
          {
            name: 'Hiérarchie entre ∃∀ et ∀∃',
            formula: '\\big(\\exists y \\in F,\\ \\forall x \\in E,\\ P(x, y)\\big) \\implies \\big(\\forall x \\in E,\\ \\exists y \\in F,\\ P(x, y)\\big)',
            note: 'La réciproque est FAUSSE en général : ∃∀ est strictement plus fort que ∀∃.',
          },
          {
            name: 'Négation d’une chaîne de quantificateurs',
            formula: '\\neg\\big(\\forall x \\in E,\\ \\exists y \\in F,\\ P(x, y)\\big) \\equiv \\big(\\exists x \\in E,\\ \\forall y \\in F,\\ \\neg P(x, y)\\big)',
            note: 'On inverse chaque quantificateur dans l’ordre où il apparaît, sans modifier l’ordre des variables.',
          },
        ],
        keyRule:
          'Lis toujours les quantificateurs **de gauche à droite** : une variable introduite à droite peut dépendre de toutes les variables déjà introduites à sa gauche, mais jamais de celles qui viennent après !',
        workedExample: {
          title: 'Comparaison de deux énoncés e-commerce à quantificateurs inversés',
          statement:
            'Comparer les deux propositions sur l’ensemble des clients $C$ et des produits $P$ : $(E_1) : \\forall c \\in C,\\ \\exists p \\in P,\\ \\text{Achat}(c, p)$ et $(E_2) : \\exists p \\in P,\\ \\forall c \\in C,\\ \\text{Achat}(c, p)$.',
          methodSteps: [
            'Pour $(E_1)$ : on fixe d’abord un client $c$ quelconque, puis on choisit un produit $p$ (qui dépend de $c$). Traduction : « Chaque client a acheté au moins un produit (pas forcément le même d’un client à l’autre) ».',
            'Pour $(E_2)$ : on fixe d’abord UN produit $p$ unique, qui doit ensuite satisfaire $\\text{Achat}(c, p)$ pour TOUS les clients $c$. Traduction : « Il existe un produit best-seller qui a été acheté par absolument tous les clients ».',
            'Comparaison : si $(E_2)$ est vraie (un produit universel acheté par tous), alors chaque client a bien acheté au moins ce produit-là, donc $(E_1)$ est vraie. Mais $(E_1)$ peut être vraie sans que $(E_2)$ le soit.',
          ],
          conclusion:
            '$(E_2) \\implies (E_1)$ est toujours vraie, mais $(E_1) \\not\\implies (E_2)$ : l’énoncé $(E_2)$ est beaucoup plus contraignant.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Commutativité',
            stepTheme: 'violet',
            stepTitle: 'Quand a-t-on le droit de permuter deux quantificateurs ?',
            paragraphText:
              'Avant d’étudier les cas où l’ordre compte, identifions les cas où l’on peut permuter librement deux quantificateurs consécutifs.\n' +
              '• **Deux universels ($\\forall x \\forall y$)** : $\\forall x \\in E,\\ \\forall y \\in F,\\ P(x, y) \\equiv \\forall y \\in F,\\ \\forall x \\in E,\\ P(x, y)$. On abrège souvent en $\\forall (x, y) \\in E \\times F,\\ P(x, y)$.\n' +
              '• **Deux existentiels ($\\exists x \\exists y$)** : $\\exists x \\in E,\\ \\exists y \\in F,\\ P(x, y) \\equiv \\exists y \\in F,\\ \\exists x \\in E,\\ P(x, y)$. Dire qu’il existe une paire $(x, y)$ vérifiant $P(x, y)$ ne dépend pas de l’ordre dans lequel on cite $x$ et $y$.\n' +
              '• **Attention** : cette permutation n’est autorisée que si les domaines $E$ et $F$ sont indépendants l’un de l’autre (ex. $\\forall x \\in \\mathbb{R},\\ \\forall y \\in [0, x]$ ne peut pas s’inverser directement car la borne $x$ dépend de la première variable).',
            formula: {
              name: 'Permutation de quantificateurs de même type',
              formula: '(\\forall x \\in E,\\ \\forall y \\in F,\\ P(x,y)) \\equiv (\\forall y \\in F,\\ \\forall x \\in E,\\ P(x,y))',
              note: 'Idem pour (∃x ∈ E, ∃y ∈ F, P(x, y)) ≡ (∃y ∈ F, ∃x ∈ E, P(x, y)).',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Parmi les paires d’énoncés suivantes sur $\\mathbb{R}$, laquelle contient deux propositions **logiquement équivalentes** ?',
              options: [
                '$(\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x < y)$ et $(\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x < y)$',
                '$(\\exists x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x + y = 10)$ et $(\\exists y \\in \\mathbb{R},\\ \\exists x \\in \\mathbb{R},\\ x + y = 10)$',
                '$(\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ xy = 0)$ et $(\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ xy = 1)$',
                '$(\\exists x \\in \\mathbb{R},\\ \\forall y \\in \\mathbb{R},\\ x \\le y)$ et $(\\forall y \\in \\mathbb{R},\\ \\exists x \\in \\mathbb{R},\\ x \\le y)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Seule l’option (B) permute deux quantificateurs de même nature ($\\exists x \\exists y \\leftrightarrow \\exists y \\exists x$) sur des domaines indépendants. Dans (A) et (D), on permute $\\forall$ et $\\exists$, ce qui change la valeur de vérité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Ordre ∀∃ vs ∃∀',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi $\\forall x,\\ \\exists y$ et $\\exists y,\\ \\forall x$ ont des sens radicalement différents',
            paragraphText:
              'Permuter $\\forall$ et $\\exists$ est l’une des erreurs les plus graves en mathématiques supérieures. Observe la différence sur deux contextes clés.\n' +
              '• **Dans $\\mathbb{R}$ avec $x < y$** : « $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x < y$ » est **VRAIE** (pour tout $x$, il suffit de prendre $y = x + 1$, qui dépend de $x$). En revanche, « $\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x < y$ » est **FAUSSE** (il n’existe aucun nombre réel $y$ qui soit strictement plus grand que tous les réels à la fois !).\n' +
              '• **En marketing** : « $\\forall c,\\ \\exists p,\\ \\text{Achat}(c, p)$ » (chaque client achète au moins un produit) est beaucoup plus facile à satisfaire que « $\\exists p,\\ \\forall c,\\ \\text{Achat}(c, p)$ » (un même produit est acheté par tous les clients).\n' +
              'Le tableau ci-dessous résume cette opposition essentielle.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparaison structurée : ∀x ∃y P(x, y) versus ∃y ∀x P(x, y)',
              caption: 'Dans ∀x ∃y, y dépend de x ; dans ∃y ∀x, un même y indépendant doit fonctionner pour tous les x.',
              tableData: {
                headers: ['Formule', 'Dépendance de $y$', 'Exemple réel ($x < y$)', 'Exemple e-commerce ($\\text{Achat}(c,p)$)'],
                rows: [
                  ['$\\forall x,\\ \\exists y,\\ P(x,y)$', '$y = y(x)$ varie selon $x$', 'VRAI (prendre $y = x + 1$)', 'Chaque client achète au moins un produit'],
                  ['$\\exists y,\\ \\forall x,\\ P(x,y)$', 'Un $y$ fixe pour tous les $x$', 'FAUX (aucun réel n’est max)', 'Un produit unique acheté par tous les clients'],
                ],
              },
            },
            keyRule:
              'Retiens l’implication à sens unique : $(\\exists y,\\ \\forall x,\\ P(x, y)) \\implies (\\forall x,\\ \\exists y,\\ P(x, y))$, jamais l’inverse sans démonstration spécifique.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Considérons $(A) : « \\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x + y = 0 »$ et $(B) : « \\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x + y = 0 »$. Quelles sont leurs valeurs de vérité respectives ?',
              options: [
                '$(A)$ est Vraie et $(B)$ est Vraie.',
                '$(A)$ est Vraie (prendre $y = -x$) et $(B)$ est Fausse (aucun $y$ fixe n’annule tous les $x$).',
                '$(A)$ est Fausse et $(B)$ est Vraie.',
                '$(A)$ est Fausse et $(B)$ est Fausse.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans $(A)$, pour chaque réel $x$, on choisit $y = -x$ et on a $x + (-x) = 0$ : $(A)$ est Vraie. Dans $(B)$, un même $y$ devrait vérifier $0 + y = 0$ (donc $y = 0$) et $1 + y = 0$ (donc $y = -1$), impossible : $(B)$ est Fausse.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Distributivité',
            stepTheme: 'violet',
            stepTitle: 'Quantificateurs et connecteurs : quelles distributivités sont valides ?',
            paragraphText:
              'Un réflexe dangereux consiste à distribuer $\\forall$ ou $\\exists$ sur n’importe quel connecteur. En réalité, seules deux distributivités sont exactes !\n' +
              '• **$\\forall$ distribue sur $\\land$** : $\\big(\\forall x,\\ P(x) \\land Q(x)\\big) \\equiv \\big(\\forall x,\\ P(x)\\big) \\land \\big(\\forall x,\\ Q(x)\\big)$ (car $\\forall$ est lui-même un grand $\\land$).\n' +
              '• **$\\exists$ distribue sur $\\lor$** : $\\big(\\exists x,\\ P(x) \\lor Q(x)\\big) \\equiv \\big(\\exists x,\\ P(x)\\big) \\lor \\big(\\exists x,\\ Q(x)\\big)$ (car $\\exists$ est un grand $\\lor$).\n' +
              '• **PIÈGES** : $\\forall x,\\ (P(x) \\lor Q(x))$ N’EST PAS équivalent à $(\\forall x,\\ P(x)) \\lor (\\forall x,\\ Q(x))$ ! Preuve : tout entier est pair ou impair (Vrai), mais il est faux que tous les entiers soient pairs ou que tous soient impairs ! De même, $\\exists x,\\ (P(x) \\land Q(x))$ est plus fort que $(\\exists x,\\ P(x)) \\land (\\exists x,\\ Q(x))$.',
            formula: {
              name: 'Distributivités exactes des quantificateurs',
              formula: '\\forall x,\\ (P(x) \\land Q(x)) \\equiv (\\forall x,\\ P(x)) \\land (\\forall x,\\ Q(x)) \\quad ; \\quad \\exists x,\\ (P(x) \\lor Q(x)) \\equiv (\\exists x,\\ P(x)) \\lor (\\exists x,\\ Q(x))',
              note: 'Ne jamais distribuer ∀ sur ∨, ni ∃ sur ∧ !',
            },
            konanTip:
              'Pense aux nombres pairs et impairs : « Chaque entier est pair ou impair » est Vrai, mais « tous pairs OU tous impairs » est Faux. Ce seul exemple t’empêchera à vie de distribuer $\\forall$ sur $\\lor$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Pourquoi la proposition « $(\\exists x \\in \\mathbb{Z},\\ x > 0) \\land (\\exists x \\in \\mathbb{Z},\\ x < 0)$ » n’est-elle PAS équivalente à « $\\exists x \\in \\mathbb{Z},\\ (x > 0 \\land x < 0)$ » ?',
              options: [
                'Parce que la première est Vraie (ex. $x = 1$ puis $x = -1$) alors que la seconde est Fausse (aucun entier n’est à la fois $> 0$ et $< 0$).',
                'Parce que les deux sont fausses dans $\\mathbb{Z}$.',
                'Parce que $\\exists$ ne peut jamais s’utiliser avec des inégalités.',
                'Elles sont en fait équivalentes dans $\\mathbb{R}$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans la première formule, les deux variables $x$ sont indépendantes (on peut prendre $1$ pour la première clause et $-1$ pour la seconde). Dans la seconde, le MÊME $x$ doit vérifier $x > 0$ et $x < 0$, ce qui est impossible.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Négation multiple',
            stepTheme: 'green',
            stepTitle: 'Nier une chaîne de 2 ou 3 quantificateurs imbriqués',
            paragraphText:
              'En analyse mathématique (limites, continuité, bornes), on rencontre des formules à deux ou trois quantificateurs imbriqués. Leur négation est purement mécanique !\n' +
              '• **Règle en cascade** : on lit la formule de gauche à droite en changeant chaque $\\forall$ en $\\exists$ et chaque $\\exists$ en $\\forall$, sans changer l’ordre des variables ni leurs domaines, puis on nie le prédicat final.\n' +
              '• **Application 1 (fonction constante)** : « $\\exists c \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ f(x) = c$ » a pour négation « $\\forall c \\in \\mathbb{R},\\ \\exists x \\in \\mathbb{R},\\ f(x) \\neq c$ ».\n' +
              '• **Application 2 (limite en analyse)** : la négation de « $\\forall \\varepsilon > 0,\\ \\exists \\eta > 0,\\ \\forall x \\in I,\\ (|x - a| < \\eta \\implies |f(x) - L| < \\varepsilon)$ » est « $\\exists \\varepsilon > 0,\\ \\forall \\eta > 0,\\ \\exists x \\in I,\\ (|x - a| < \\eta \\land |f(x) - L| \\ge \\varepsilon)$ ».',
            keyRule:
              'Dans une chaîne de quantificateurs, nier inverse CHAQUE quantificateur sur place ($\\forall \\leftrightarrow \\exists$) et transforme l’implication finale $A \\implies B$ en $A \\land \\neg B$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Quelle est la négation de la définition d’une suite $(u_n)$ majorée : « $\\exists M \\in \\mathbb{R},\\ \\forall n \\in \\mathbb{N},\\ u_n \\le M$ » ?',
              options: [
                '$\\exists M \\in \\mathbb{R},\\ \\forall n \\in \\mathbb{N},\\ u_n > M$',
                '$\\forall M \\in \\mathbb{R},\\ \\forall n \\in \\mathbb{N},\\ u_n > M$',
                '$\\forall M \\in \\mathbb{R},\\ \\exists n \\in \\mathbb{N},\\ u_n > M$',
                '$\\forall M \\in \\mathbb{R},\\ \\exists n \\in \\mathbb{N},\\ u_n \\ge M$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$\\exists M \\in \\mathbb{R}$ devient $\\forall M \\in \\mathbb{R}$, $\\forall n \\in \\mathbb{N}$ devient $\\exists n \\in \\mathbb{N}$, et $\\neg(u_n \\le M)$ est $u_n > M$. Une suite non majorée dépasse tout réel $M$ à au moins un rang $n$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Unicité formelle',
            stepTheme: 'blue',
            stepTitle: 'Écrire l’existence et l’unicité sans le symbole $\\exists!$',
            paragraphText:
              'En démonstration, prouver un théorème d’existence et d’unicité (« $\\exists! x \\in E,\\ P(x)$ ») se scinde systématiquement en deux sous-preuves distinctes.\n' +
              '• **Partie 1 — Existence** : montrer $\\exists x \\in E,\\ P(x)$ (exhiber au moins une solution).\n' +
              '• **Partie 2 — Unicité** : montrer $\\forall x_1, x_2 \\in E,\\ \\big((P(x_1) \\land P(x_2)) \\implies x_1 = x_2\\big)$ (si deux objets vérifient la propriété, alors ils sont nécessairement égaux).\n' +
              '• **Piège de la négation de $\\exists!$** : nier « il existe un unique $x$ tel que $P(x)$ » ne signifie PAS « il n’en existe aucun » ! Cela signifie « il n’en existe aucun **OU** il en existe au moins deux distincts » : $(\\forall x,\\ \\neg P(x)) \\lor (\\exists x_1, x_2,\\ x_1 \\neq x_2 \\land P(x_1) \\land P(x_2))$.',
            formula: {
              name: 'Négation de l’existence et unicité',
              formula: '\\neg(\\exists! x \\in E,\\ P(x)) \\equiv (\\forall x \\in E,\\ \\neg P(x)) \\lor (\\exists x_1, x_2 \\in E,\\ x_1 \\neq x_2 \\land P(x_1) \\land P(x_2))',
              note: 'Ne pas être « exactement 1 » signifie être « 0 ou ≥ 2 ».',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Comment prouve-t-on rigoureusement la partie **unicité** d’un théorème affirmant $\\exists! x \\in E,\\ P(x)$ ?',
              options: [
                'En montrant qu’il existe au moins un $x \\in E$ tel que $P(x)$.',
                'En prenant deux éléments quelconques $x_1, x_2 \\in E$ vérifiant $P(x_1)$ et $P(x_2)$, et en démontrant que $x_1 = x_2$.',
                'En vérifiant que $P(x)$ est faux pour tous les autres éléments connus.',
                'En montrant que $E$ est un singleton.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’unicité s’écrit $\\forall x_1, x_2 \\in E,\\ (P(x_1) \\land P(x_2)) \\implies x_1 = x_2$ : on suppose disposer de deux solutions $x_1$ et $x_2$, et on prouve qu’elles sont confondues.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Évaluation',
            stepTheme: 'slate',
            stepTitle: 'Évaluer rapidement des énoncés quantifiés imbriqués dans $\\mathbb{R}$',
            paragraphText:
              'Savoir évaluer mentalement des formules à deux quantificateurs dans $\\mathbb{R}$ est un automatisme exigé en Licence 1.\n' +
              '• **Exemple 1** : $\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\cdot y = 0$. Ici, on cherche UN réel $y$ fixe qui annule tous les produits $x \\cdot y$. En choisissant $y = 0$, on a bien $x \\cdot 0 = 0$ pour tout $x \\in \\mathbb{R}$ : l’énoncé est **VRAI** !\n' +
              '• **Exemple 2** : $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x \\cdot y = 1$. Testons $x = 0$ : existe-t-il $y \\in \\mathbb{R}$ tel que $0 \\cdot y = 1$ ? Non ! Donc l’énoncé est **FAUX** (il deviendrait Vrai sur $\\mathbb{R}^*$).\n' +
              '• **Exemple 3** : $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ y^2 = x$. Pour $x = -1$, aucun réel $y$ ne vérifie $y^2 = -1$ : **FAUX**.',
            konanTip:
              'Pour évaluer $\\forall x,\\ \\exists y,\\ P(x, y)$, joue un duel : ton adversaire choisit le pire $x$ possible (souvent $x = 0$ ou $x = -1$), et tu dois riposter avec un $y$ gagnant. Si ton adversaire te bloque sur un seul $x$, l’énoncé est FAUX !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Laquelle des propositions suivantes est **VRAIE** ?',
              options: [
                '$\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\cdot y = 0$',
                '$\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\cdot y = 1$',
                '$\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ y^2 = x$',
                '$\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x \\cdot y = 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour (A), il suffit de choisir $y = 0$ : pour tout $x \\in \\mathbb{R}$, $x \\cdot 0 = 0$, donc (A) est Vraie. Les trois autres échouent notamment pour $x = 0$ ou $x = -1$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Audit métier',
            stepTheme: 'slate',
            stepTitle: 'Traduire et auditer une règle d’accès multi-utilisateurs',
            paragraphText:
              'Dans une entreprise digitale, les politiques de sécurité (RBAC) s’expriment directement en logique des prédicats.\n' +
              '• **Politique $P_1$** : « $\\forall u \\in U,\\ \\exists r \\in R,\\ \\text{Accès}(u, r)$ » signifie que chaque utilisateur $u$ dispose d’accès à au moins une ressource $r$ (aucun compte n’est totalement vide).\n' +
              '• **Politique $P_2$** : « $\\exists u \\in U,\\ \\forall r \\in R,\\ \\text{Accès}(u, r)$ » signifie qu’il existe au moins un **super-administrateur** ayant accès à toutes les ressources.\n' +
              '• **Audit de violation** : la violation de $P_2$ ($\\neg P_2$) s’écrit $\\forall u \\in U,\\ \\exists r \\in R,\\ \\neg\\text{Accès}(u, r)$ — c’est le principe de séparation des pouvoirs (aucun individu ne contrôle tout à lui seul).',
            konanTip:
              'Pour traduire un énoncé de sécurité informatique, demande-toi toujours qui est « fixé en premier » : si c’est l’utilisateur ($\\exists u\\,\\forall r$), on parle d’un super-admin ; si c’est la ressource ($\\exists r\\,\\forall u$), on parle d’une ressource publique !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p3_q7',
              type: 'mcq',
              prompt: 'Dans un système d’information (utilisateurs $U$, ressources $R$), que signifie exactement la formule « $\\exists r \\in R,\\ \\forall u \\in U,\\ \\text{Accès}(u, r)$ » ?',
              options: [
                'Il existe un super-administrateur qui accède à toutes les ressources.',
                'Il existe au moins une ressource publique accessible à tous les utilisateurs.',
                'Chaque ressource est accessible par au moins un utilisateur.',
                'Tous les utilisateurs ont accès à toutes les ressources.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On fixe d’abord une ressource $r \\in R$, puis on exige que pour tout utilisateur $u \\in U$, $u$ ait accès à $r$ : c’est exactement l’existence d’une ressource publique (accessible à tous).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Méthodes de raisonnement mathématique
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch3',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Logique et Raisonnement Mathématique',
    title: 'Chapitre 3 — Méthodes de raisonnement mathématique',
    summary:
      'Raisonnement direct, double implication, disjonction de cas, analyse-synthèse, contraposée, raisonnement par l’absurde, réfutation par contre-exemple et raisonnement par récurrence (simple et forte).',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch3_p1',
        order: 1,
        title: 'Raisonnement direct, double implication, disjonction de cas et analyse-synthèse',
        summary:
          'Choisir et structurer rigoureusement une preuve directe, une preuve d’équivalence, une étude cas par cas ou une résolution par analyse-synthèse.',
        conceptExplanation:
          'Démontrer un résultat mathématique consiste à bâtir un enchaînement irréfutable d’inférences depuis les hypothèses jusqu’à la conclusion. Quatre architectures de preuve directes structurent la majorité des démonstrations :\n' +
          '• **Raisonnement direct** : pour prouver $P \\implies Q$, on suppose $P$ vraie et l’on déduit $Q$ par une chaîne d’implications $P \\implies P_1 \\implies \\dots \\implies Q$ (syllogisme / transitivité).\n' +
          '• **Double implication** : pour prouver une équivalence $P \\iff Q$, on démontre séparément le sens direct ($P \\implies Q$) puis la réciproque ($Q \\implies P$).\n' +
          '• **Disjonction de cas (cas par cas)** : lorsqu’une hypothèse se décompose en sous-cas exhaustifs $C_1 \\lor C_2 \\lor \\dots \\lor C_k$, on démontre que chaque cas entraîne $Q$.\n' +
          '• **Analyse-synthèse** : pour déterminer l’ensemble des solutions d’un problème, l’**analyse** suppose qu’une solution existe pour trouver sa forme nécessaire, puis la **synthèse** vérifie quelles candidates conviennent réellement.',
        formulas: [
          {
            name: 'Transitivité et disjonction de cas',
            formula: '\\big[(P \\implies R) \\land (R \\implies Q)\\big] \\implies (P \\implies Q) \\quad ; \\quad \\big[(C_1 \\implies Q) \\land (C_2 \\implies Q)\\big] \\implies \\big((C_1 \\lor C_2) \\implies Q\\big)',
            note: 'En disjonction de cas, les cas choisis doivent recouvrir 100 % des situations possibles (exhaustivité).',
          },
          {
            name: 'Principe d’analyse-synthèse',
            formula: '\\text{Analyse : } (x \\text{ solution} \\implies x \\in S_0) \\quad ; \\quad \\text{Synthèse : } \\text{tester quels } x \\in S_0 \\text{ vérifient l’énoncé}',
            note: 'La synthèse est indispensable car l’analyse ne raisonne que par conditions nécessaires (implications simples).',
          },
        ],
        keyRule:
          'Dans une disjonction de cas, vérifie toujours que tes cas couvrent **tout** le domaine ; dans une analyse-synthèse, n’oublie JAMAIS la **synthèse** pour éliminer les solutions parasites !',
        workedExample: {
          title: 'Preuve par disjonction de cas : parité de $n(n + 1)$',
          statement:
            'Démontrer que pour tout entier naturel $n \\in \\mathbb{N}$, le produit $n(n + 1)$ est un entier pair.',
          methodSteps: [
            'Tout entier naturel $n$ est soit pair, soit impair : ces deux cas sont exhaustifs et disjoints.',
            'Cas 1 ($n$ pair) : il existe $k \\in \\mathbb{N}$ tel que $n = 2k$. Alors $n(n + 1) = 2k(2k + 1) = 2 \\times [k(2k + 1)]$, qui est pair.',
            'Cas 2 ($n$ impair) : il existe $k \\in \\mathbb{N}$ tel que $n = 2k + 1$. Alors $n + 1 = 2k + 2 = 2(k + 1)$, donc $n(n + 1) = 2 \\times [(2k + 1)(k + 1)]$, qui est aussi pair.',
          ],
          conclusion:
            'Dans tous les cas possibles, $n(n + 1)$ est divisible par $2$ : la propriété est démontrée pour tout $n \\in \\mathbb{N}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Panorama',
            stepTheme: 'blue',
            stepTitle: 'Cartographie des 7 grandes méthodes de raisonnement mathématique',
            paragraphText:
              'Face à un exercice de démonstration, la première compétence d’un mathématicien ou d’un analyste consiste à choisir la **bonne stratégie de preuve** avant même d’écrire la première ligne.\n' +
              '• **Démontrer $P \\implies Q$** : on choisit entre la voie directe, la contraposée ($\\neg Q \\implies \\neg P$) ou l’absurde (supposer $P \\land \\neg Q$).\n' +
              '• **Démontrer une propriété pour tout $n \\in \\mathbb{N}$** : la récurrence (simple ou forte) s’impose naturellement.\n' +
              '• **Résoudre un problème d’existence/unicité de fonction ou d’équation** : l’analyse-synthèse garantit qu’on ne perd ni n’invente aucune solution.\n' +
              '• **Réfuter un énoncé universel** : un seul contre-exemple suffit.\n' +
              'Consulte le tableau de synthèse ci-dessous comme boussole de rédaction.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Boussole des 7 méthodes de raisonnement mathématique',
              caption: 'Chaque structure d’énoncé appelle une architecture de démonstration privilégiée.',
              tableData: {
                headers: ['Méthode', 'Objectif', 'Principe logique', 'Indice déclencheur'],
                rows: [
                  ['Direct', '$P \\implies Q$', 'Supposer $P$, déduire $Q$', 'Hypothèse $P$ exploitable directement'],
                  ['Double implication', '$P \\iff Q$', 'Prouver $P \\implies Q$ et $Q \\implies P$', 'Énoncé « si et seulement si »'],
                  ['Disjonction de cas', '$(C_1 \\lor C_2) \\implies Q$', 'Prouver $Q$ dans chaque sous-cas', 'Valeur absolue, parité, signe'],
                  ['Analyse-synthèse', 'Trouver tous les $x$', 'Nécessité puis vérification', 'Équation irrationnelle, décomposition'],
                  ['Contraposée', '$P \\implies Q$', 'Supposer $\\neg Q$, prouver $\\neg P$', '$\\neg Q$ plus simple que $P$'],
                  ['Absurde', '$Q$ (ou $P \\implies Q$)', 'Supposer $\\neg Q \\to$ contradiction', 'Irrationalité, impossibilité, unicité'],
                  ['Récurrence', '$\\forall n \\ge n_0, P(n)$', 'Initialisation + Hérédité', 'Sommes, suites, divisibilité en $n$'],
                ],
              },
            },
            keyRule:
              'Avant de calculer, identifie la forme logique de la conclusion ($\\implies$, $\\iff$, $\\forall n \\in \\mathbb{N}$, $\\exists!$) : elle dicte immédiatement la méthode de preuve adaptée.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Quelle méthode de raisonnement est la plus directement adaptée pour résoudre une équation avec valeur absolue comme $|x - 3| + |x + 1| = 6$ ?',
              options: [
                'Le raisonnement par récurrence.',
                'Le raisonnement par disjonction de cas selon le signe de $(x - 3)$ et $(x + 1)$.',
                'Le raisonnement par contre-exemple.',
                'La contraposée.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La valeur absolue change d’expression selon le signe de son argument : on découpe $\\mathbb{R}$ en trois intervalles exhaustifs ($x < -1$, $-1 \\le x < 3$, $x \\ge 3$) par disjonction de cas.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Direct & Syllogisme',
            stepTheme: 'green',
            stepTitle: 'Raisonnement direct et enchaînement par syllogisme',
            paragraphText:
              'Le **raisonnement direct** est le schéma naturel de déduction : on suppose que l’hypothèse $P$ est vérifiée, puis on applique définitions, théorèmes connus et règles algébriques pour atteindre $Q$.\n' +
              '• **Exemple arithmétique** : prouvons que la somme de deux nombres rationnels $a, b \\in \\mathbb{Q}$ est rationnelle. Par définition, $a = p/q$ et $b = r/s$ avec $p, r \\in \\mathbb{Z}$ et $q, s \\in \\mathbb{N}^*$. Alors $a + b = \\frac{ps + rq}{qs}$. Comme $ps + rq \\in \\mathbb{Z}$ et $qs \\in \\mathbb{N}^*$, on conclut directement $a + b \\in \\mathbb{Q}$.\n' +
              '• **Syllogisme (transitivité)** : si « $\\forall x,\\ x \\in \\text{Luxe} \\implies x \\in \\text{Prestige}$ » et « $\\forall x,\\ x \\in \\text{Prestige} \\implies x \\in \\text{Prix élevé}$ », alors par transitivité « $\\forall x,\\ x \\in \\text{Luxe} \\implies x \\in \\text{Prix élevé}$ ».',
            konanTip:
              'Commence toujours une preuve directe par « **Soit… supposons que…** » en traduisant immédiatement chaque mot-clé de l’hypothèse par sa définition mathématique !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Sachant que « Tout produit de luxe appartient au segment Prestige » et « Tout produit du segment Prestige a un prix élevé », que permet de démontrer le syllogisme combiné à la contraposée ?',
              options: [
                'Tout produit à prix élevé est un produit de luxe.',
                'Un produit à prix bas ne peut pas être un produit de luxe.',
                'Aucun produit de luxe n’a un prix élevé.',
                'Certains produits de luxe ont un prix bas.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par transitivité (syllogisme), $\\text{Luxe} \\implies \\text{Prestige} \\implies \\text{Prix élevé}$, donc $\\text{Luxe} \\implies \\text{Prix élevé}$. Par contraposée, $\\neg(\\text{Prix élevé}) \\implies \\neg(\\text{Luxe})$ : un produit à prix bas ne peut pas être de luxe.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Double implication',
            stepTheme: 'green',
            stepTitle: 'Démontrer une équivalence ($P \\iff Q$) par double implication',
            paragraphText:
              'Pour démontrer une équivalence $P \\iff Q$, deux stratégies existent, mais la plus sûre à l’université est la **double implication**.\n' +
              '• **Sens direct ($\\implies$)** : on suppose $P$ vraie et on démontre $Q$.\n' +
              '• **Sens réciproque ($\\Longleftarrow$)** : on suppose $Q$ vraie et on démontre $P$.\n' +
              '• **Exemple classique** : montrons que pour $x \\in \\mathbb{R}$, $(x^2 - 5x + 6 = 0) \\iff (x = 2 \\lor x = 3)$. ($\\implies$) Si $x^2 - 5x + 6 = 0$, alors $(x - 2)(x - 3) = 0$, donc $x = 2$ ou $x = 3$. ($\\Longleftarrow$) Si $x = 2$, $2^2 - 10 + 6 = 0$ ; si $x = 3$, $3^2 - 15 + 6 = 0$.\n' +
              '• **Prudence avec les $\\iff$ en chaîne** : n’écris $\\iff$ entre deux lignes d’équation que si la transformation est parfaitement réversible (élever au carré ou multiplier par $x$ n’est PAS une équivalence !).',
            keyRule:
              'Pour ne jamais perdre de points sur une preuve d’équivalence, sépare clairement deux paragraphes notés **($\\implies$)** et **($\\Longleftarrow$)**.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Parmi les passages suivants pour $x \\in \\mathbb{R}$, lequel est une **vraie équivalence** ($\\iff$) et non une simple implication ($\\implies$) ?',
              options: [
                '$x = 3 \\iff x^2 = 9$',
                '$x = y \\iff x \\cdot z = y \\cdot z$ (pour $z \\in \\mathbb{R}$ quelconque)',
                '$x - 4 = 2x + 1 \\iff x = -5$',
                '$x > 2 \\iff x^2 > 4$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ajouter ou soustraire une même quantité aux deux membres est réversible : $x - 4 = 2x + 1 \\iff -5 = x$. Dans (A), $x^2 = 9$ donne aussi $x = -3$ ; dans (B), $z = 0$ casse la réciproque ; dans (D), $x = -3$ vérifie $x^2 > 4$ sans vérifier $x > 2$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Cas par cas',
            stepTheme: 'green',
            stepTitle: 'Raisonnement par disjonction de cas (et élimination des cas)',
            paragraphText:
              'Lorsqu’une démonstration unique bloque parce que l’expression dépend d’un paramètre discret ou d’un signe, on découpe l’ensemble des possibilités en **sous-cas exhaustifs**.\n' +
              '• **Principe** : si $E = E_1 \\cup E_2 \\cup \\dots \\cup E_k$, prouver $\\forall x \\in E,\\ Q(x)$ revient à prouver $Q(x)$ successivement sur chaque $E_i$.\n' +
              '• **Application commerciale** : une réduction tarifaire s’applique aux étudiants (Cas 1 : $< 26$ ans avec carte) ou aux retraités (Cas 2 : $\\ge 60$ ans) ; les autres (Cas 3) paient le plein tarif. Les trois cas partitionnent la clientèle et permettent de décider sans ambiguïté.\n' +
              '• **Élimination des cas** : variante sur un ensemble fini où l’on exclut tous les cas incompatibles avec les hypothèses jusqu’à ce qu’il n’en reste qu’un seul (ex. déterminer un reste modulo $4$ en testant $r \\in \\{0, 1, 2, 3\\}$).',
            konanTip:
              'En arithmétique, pense aux disjonctions de cas classiques : **parité** ($2k$ ou $2k+1$) pour la divisibilité par $2$, et **restes modulo $3$** ($3k$, $3k+1$, $3k+2$) pour la divisibilité par $3$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Pour démontrer que pour tout $x \\in \\mathbb{R}$, $|x - 2| \\le x^2 - 2x + 3$, quels deux cas exhaustifs choisit-on naturellement par disjonction de cas ?',
              options: [
                '$x > 0$ et $x < 0$ (en oubliant $x = 0$).',
                '$x \\ge 2$ (où $|x - 2| = x - 2$) et $x < 2$ (où $|x - 2| = 2 - x$).',
                '$x$ pair et $x$ impair.',
                '$x = 2$ et $x = 3$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’expression $|x - 2|$ change de formule exactement en $x = 2$. Les cas $x \\ge 2$ et $x < 2$ recouvrent tout $\\mathbb{R}$ et permettent d’enlever la valeur absolue sans ambiguïté.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Analyse-synthèse',
            stepTheme: 'green',
            stepTitle: 'Le raisonnement par analyse-synthèse : exister, déterminer et vérifier',
            paragraphText:
              'La méthode d’**analyse-synthèse** est l’outil royal lorsqu’on cherche à trouver **toutes** les solutions d’un problème (équations, décompositions de fonctions, géométrie) sans connaître la réponse à l’avance.\n' +
              '• **Phase 1 — Analyse (conditions nécessaires)** : on suppose qu’un objet $x$ est solution du problème, et on en déduit par implications ce que $x$ **doit** obligatoirement valoir. Cette phase restreint l’ensemble des candidats (et prouve l’unicité s’il n’y a qu’un candidat).\n' +
              '• **Phase 2 — Synthèse (conditions suffisantes)** : on reprend chaque candidat trouvé à l’analyse et on vérifie explicitement s’il satisfait bien toutes les exigences de l’énoncé.\n' +
              '• **Exemple célèbre** : toute fonction $f : \\mathbb{R} \\to \\mathbb{R}$ s’écrit de manière **unique** $f = p + i$ avec $p$ paire et $i$ impaire. Analyse : $f(x) = p(x) + i(x)$ et $f(-x) = p(x) - i(x)$ imposent $p(x) = \\frac{f(x)+f(-x)}{2}$ et $i(x) = \\frac{f(x)-f(-x)}{2}$. Synthèse : on vérifie que ces deux formules définissent bien une fonction paire, une impaire, et que leur somme vaut $f$.',
            formula: {
              name: 'Décomposition unique paire / impaire par analyse-synthèse',
              formula: 'p(x) = \\frac{f(x) + f(-x)}{2}, \\qquad i(x) = \\frac{f(x) - f(-x)}{2}, \\qquad f(x) = p(x) + i(x)',
              note: 'L’analyse garantit l’unicité ; la synthèse garantit l’existence.',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Dans une preuve par **analyse-synthèse**, que garantit exactement chacune des deux phases lorsqu’un unique candidat est trouvé et validé ?',
              options: [
                'L’analyse garantit l’existence ; la synthèse garantit l’unicité.',
                'L’analyse garantit l’unicité (seul ce candidat peut convenir) ; la synthèse garantit l’existence (ce candidat convient effectivement).',
                'Les deux phases font la même vérification deux fois par sécurité.',
                'La synthèse est facultative dès que l’analyse donne un seul nombre.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si l’analyse montre que toute solution éventuelle vaut nécessairement $x_0$, cela prouve qu’il y a AU PLUS une solution (unicité). La synthèse vérifie que $x_0$ est réellement solution, prouvant qu’il y en a AU MOINS une (existence).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Solutions parasites',
            stepTheme: 'orange',
            stepTitle: 'Piège de l’analyse-synthèse : les solutions parasites créées par élévation au carré',
            paragraphText:
              'Résolvons dans $\\mathbb{R}$ l’équation irrationnelle $\\sqrt{x + 2} = x$ pour voir concrètement pourquoi la synthèse est vitale !\n' +
              '• **Analyse** : supposons que $x \\in \\mathbb{R}$ soit solution. En élevant au carré (simple implication $\\implies$, pas équivalence !), on obtient $x + 2 = x^2$, soit $x^2 - x - 2 = 0$, c’est-à-dire $(x - 2)(x + 1) = 0$. Les **seuls candidats possibles** sont donc $x = 2$ et $x = -1$.\n' +
              '• **Synthèse** :\n' +
              '  – Test de $x = 2$ : $\\sqrt{2 + 2} = \\sqrt{4} = 2 = x$ $\\longrightarrow$ **Validé** !\n' +
              '  – Test de $x = -1$ : $\\sqrt{-1 + 2} = \\sqrt{1} = 1 \\neq -1$ $\\longrightarrow$ **Rejeté** ! ($-1$ est une solution parasite car une racine carrée est toujours positive).\n' +
              '• **Conclusion** : l’unique solution réelle est $S = \\{2\\}$.',
            keyRule:
              'Élever une équation au carré n’est qu’une **implication** ($a = b \\implies a^2 = b^2$, jamais $\\iff$ sans condition de signe) : la phase de synthèse est donc obligatoire !',
            konanTip:
              'Dès que tu résous une équation contenant une racine carrée $\\sqrt{\\dots}$, écris directement « Analyse » puis « Synthèse » sur ta copie : tu éviteras à coup sûr le piège des solutions négatives parasites !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Quel est l’ensemble exact des solutions réelles de l’équation $\\sqrt{x + 6} = x$ ?',
              options: [
                '$S = \\{-2,\\ 3\\}$',
                '$S = \\{-2\\}$',
                '$S = \\{3\\}$',
                '$S = \\emptyset$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Analyse : $\\sqrt{x + 6} = x \\implies x + 6 = x^2 \\iff x^2 - x - 6 = 0 \\iff (x - 3)(x + 2) = 0$, d’où les candidats $3$ et $-2$. Synthèse : pour $x = 3$, $\\sqrt{9} = 3$ (valide) ; pour $x = -2$, $\\sqrt{4} = 2 \\neq -2$ (rejeté). Donc $S = \\{3\\}$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Application arithmétique',
            stepTheme: 'slate',
            stepTitle: 'Démontrer que $n(n^2 - 1)$ est toujours multiple de $6$ par disjonction de cas',
            paragraphText:
              'Mettons en œuvre la disjonction de cas sur un grand classique d’examen : montrer que pour tout entier $n \\in \\mathbb{Z}$, $A(n) = n(n^2 - 1)$ est divisible par $6$.\n' +
              '• **Factorisation clé** : $n(n^2 - 1) = (n - 1)n(n + 1)$, c’est le produit de **trois entiers consécutifs**.\n' +
              '• **Divisibilité par $2$** : par parité, soit $n$ est pair, soit $n + 1$ est pair, donc $2$ divise $A(n)$.\n' +
              '• **Divisibilité par $3$ (3 cas exhaustifs)** : dans la division euclidienne de $n$ par $3$, $n$ vaut $3k$, $3k + 1$ ou $3k + 2$.\n' +
              '  – Si $n = 3k$, le facteur $n$ est multiple de $3$.\n' +
              '  – Si $n = 3k + 1$, alors $n - 1 = 3k$ est multiple de $3$.\n' +
              '  – Si $n = 3k + 2$, alors $n + 1 = 3(k + 1)$ est multiple de $3$.\n' +
              '• **Conclusion** : $A(n)$ est divisible par $2$ et par $3$ (qui sont premiers entre eux), donc par $6$.',
            konanTip:
              'Retiens ce réflexe puissant : le produit de $k$ entiers consécutifs est toujours divisible par $k!$ (par $2$ pour 2 consécutifs, par $6$ pour 3 consécutifs).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q7',
              type: 'mcq',
              prompt: 'Dans la preuve par disjonction de cas que $3$ divise $n(n^2 - 1)$ pour tout $n \\in \\mathbb{Z}$, si $n = 3k + 2$, quel facteur de $(n - 1)n(n + 1)$ assure la divisibilité par $3$ ?',
              options: [
                'Le facteur $n - 1 = 3k + 1$.',
                'Le facteur $n = 3k + 2$.',
                'Le facteur $n + 1 = 3(k + 1)$.',
                'Aucun des trois facteurs pris isolément.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour $n = 3k + 2$, on a $n + 1 = 3k + 3 = 3(k + 1)$, qui est un multiple exact de $3$. Le produit $(n - 1)n(n + 1)$ est donc divisible par $3$.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch3_p2',
        order: 2,
        title: 'Raisonnement par contraposée et raisonnement par l’absurde',
        summary:
          'Maîtriser les deux grands raisonnements indirects, démontrer l’irrationalité de √2, prouver des impossibilités économiques et distinguer contraposée et absurde.',
        conceptExplanation:
          'Lorsqu’une preuve directe se heurte à une impasse, la logique offre deux stratégies indirectes redoutables d’efficacité :\n' +
          '• **Raisonnement par contraposée** : pour prouver $P \\implies Q$, on exploite l’équivalence $(P \\implies Q) \\equiv (\\neg Q \\implies \\neg P)$. On suppose donc $\\neg Q$ vraie et on démontre $\\neg P$. Elle brille dès que $\\neg Q$ est plus simple à manipuler que $P$ (ex. prouver « $n^2$ pair $\\implies n$ pair » en supposant $n$ impair).\n' +
          '• **Raisonnement par l’absurde (*reductio ad absurdum*)** : pour prouver une proposition $Q$, on suppose que sa négation $\\neg Q$ est vraie (ou pour prouver $P \\implies Q$, on suppose $P \\land \\neg Q$), et on dérive une **contradiction** logique ($R \\land \\neg R$ ou une absurdité comme $1 = 0$ ou une violation d’hypothèse). Par le principe du tiers exclu, l’hypothèse $\\neg Q$ est nécessairement fausse, donc $Q$ est vraie.',
        formulas: [
          {
            name: 'Schéma de la contraposée et de l’absurde',
            formula: '\\text{Contraposée : } (\\neg Q \\implies \\neg P) \\equiv (P \\implies Q) \\qquad ; \\qquad \\text{Absurde : } (\\neg Q \\implies F) \\equiv Q',
            note: 'Pour prouver P ⇒ Q par l’absurde, on suppose P ∧ ¬Q (qui est ¬(P ⇒ Q)) et on cherche une contradiction.',
          },
        ],
        keyRule:
          'Utilise la **contraposée** quand tu veux prouver $P \\implies Q$ et que $\\neg Q$ donne une formule explicite ; utilise l’**absurde** pour prouver une non-existence, une impossibilité ou une irrationalité !',
        workedExample: {
          title: 'Preuve par l’absurde en économie : duopole strict et guerre des prix',
          statement:
            'Dans un marché en duopole strict, deux opérateurs télécoms se partagent 100 % du marché ($S_1 + S_2 = 100\\%$). Démontrer par l’absurde que tout gain strict $\\Delta > 0$ de parts de marché pour l’opérateur 1 entraîne obligatoirement une perte pour l’opérateur 2.',
          methodSteps: [
            'Hypothèse de départ : $S_1 + S_2 = 100\\%$ avant et $S_1’ + S_2’ = 100\\%$ après évolution.',
            'Supposons par l’absurde que l’opérateur 1 gagne $\\Delta > 0$ ($S_1’ = S_1 + \\Delta$) SANS que l’opérateur 2 ne perde de part de marché ($S_2’ \\ge S_2$).',
            'En additionnant : $S_1’ + S_2’ \\ge (S_1 + \\Delta) + S_2 = (S_1 + S_2) + \\Delta = 100\\% + \\Delta > 100\\%$.',
            'Contradiction ! Dans un duopole strict, la somme des parts ne peut dépasser $100\\%$.',
          ],
          conclusion:
            'L’hypothèse supposée est absurde : donc $S_2’ < S_2$ (et même $S_2’ = S_2 - \\Delta$, jeu à somme nulle).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Contraposée',
            stepTheme: 'green',
            stepTitle: 'Mettre en œuvre un raisonnement par contraposée pas à pas',
            paragraphText:
              'Pourquoi prouver « Si $n^2$ est pair, alors $n$ est pair » directement est-il maladroit ? Parce que partir de $n^2 = 2k$ oblige à prendre une racine carrée $\\sqrt{2k}$ qui sort des entiers ! La **contraposée** règle le problème en deux lignes.\n' +
              '• **Énoncé à prouver** : pour tout $n \\in \\mathbb{Z}$, ($n^2$ pair $\\implies n$ pair).\n' +
              '• **Contraposée** : ($n$ impair $\\implies n^2$ impair).\n' +
              '• **Démonstration** : supposons $n$ impair. Il existe $k \\in \\mathbb{Z}$ tel que $n = 2k + 1$. Alors $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, qui est de la forme $2m + 1$ avec $m \\in \\mathbb{Z}$, donc $n^2$ est impair.\n' +
              '• **Conclusion** : la contraposée étant démontrée, l’implication directe est prouvée.',
            keyRule:
              'Annonce toujours clairement ta méthode dès la première ligne : « **Démontrons la contraposée : supposons $\\neg Q$ et montrons $\\neg P$.** »',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Pour démontrer par contraposée : « $\\forall n \\in \\mathbb{Z},\\ (3n + 2 \\text{ impair} \\implies n \\text{ impair})$ », quelle hypothèse pose-t-on au départ et que doit-on montrer ?',
              options: [
                'Supposer $n$ pair et montrer que $3n + 2$ est pair.',
                'Supposer $3n + 2$ pair et montrer que $n$ est pair.',
                'Supposer $n$ impair et montrer que $3n + 2$ est pair.',
                'Supposer $3n + 2$ impair et $n$ pair.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La contraposée de $P \\implies Q$ est $\\neg Q \\implies \\neg P$. Ici $\\neg Q$ est « $n$ est pair » ($n = 2k$), ce qui donne immédiatement $3n + 2 = 6k + 2 = 2(3k + 1)$ pair ($\\neg P$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Absurde',
            stepTheme: 'green',
            stepTitle: 'Architecture rigoureuse d’un raisonnement par l’absurde',
            paragraphText:
              'Le raisonnement par l’absurde repose sur la tautologie $[(\\neg Q) \\implies (R \\land \\neg R)] \\implies Q$ : une hypothèse qui mène à une absurdité ne peut pas être vraie.\n' +
              '• **Étape 1** : écrire explicitement « **Supposons par l’absurde que $\\neg Q$ soit vraie** » (ou, pour $P \\implies Q$, « Supposons que $P$ soit vraie ET $Q$ soit fausse »).\n' +
              '• **Étape 2** : dérouler des déductions rigoureuses jusqu’à faire apparaître une **contradiction flagrante** (ex. $0 = 1$, un nombre à la fois pair et impair, ou une contradiction avec une hypothèse initiale).\n' +
              '• **Étape 3** : conclure « C’est absurde ! Par conséquent, l’énoncé initial $Q$ est vrai ».\n' +
              'Exemple : montrons que $0$ n’a pas d’inverse dans $\\mathbb{R}$. Supposons par l’absurde qu’il existe $x \\in \\mathbb{R}$ tel que $0 \\times x = 1$. Or $0 \\times x = 0$, donc $0 = 1$ : contradiction !',
            konanTip:
              'N’écris jamais une contradiction implicite : mets-la en lumière (« C’est absurde car $0 \\neq 1$ », ou « Contradiction avec le fait que $p$ et $q$ sont premiers entre eux ») !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Pour démontrer par l’absurde que « Pour tous réels $a, b \\ge 0$, $\\frac{a}{1+b} = \\frac{b}{1+a} \\implies a = b$ », quelle hypothèse initiale pose-t-on ?',
              options: [
                'Supposons $a = b$ et $\\frac{a}{1+b} \\neq \\frac{b}{1+a}$.',
                'Supposons $\\frac{a}{1+b} = \\frac{b}{1+a}$ et $a \\neq b$.',
                'Supposons $\\frac{a}{1+b} \\neq \\frac{b}{1+a}$ et $a \\neq b$.',
                'Supposons $a < 0$ et $b < 0$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour démontrer $P \\implies Q$ par l’absurde, on suppose sa négation $P \\land \\neg Q$, soit ici $\\frac{a}{1+b} = \\frac{b}{1+a}$ ET $a \\neq b$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Grand classique',
            stepTheme: 'slate',
            stepTitle: 'Démonstration célèbre par l’absurde : l’irrationalité de $\\sqrt{2}$',
            paragraphText:
              'La preuve de l’irrationalité de $\\sqrt{2}$ (attribuée à l’école pythagoricienne) est le modèle historique du raisonnement par l’absurde.\n' +
              '• **Hypothèse absurde** : supposons $\\sqrt{2} \\in \\mathbb{Q}$. Alors $\\sqrt{2} = \\frac{p}{q}$ sous forme **irréductible**, avec $p, q \\in \\mathbb{N}^*$ et $\\text{pgcd}(p, q) = 1$ (aucun diviseur commun $> 1$).\n' +
              '• **Parité de $p$** : en élevant au carré, $2 = \\frac{p^2}{q^2}$, soit $p^2 = 2q^2$. Donc $p^2$ est pair, ce qui implique (par contraposée vue à l’étape 1) que **$p$ est pair** : $p = 2k$.\n' +
              '• **Parité de $q$** : en remplaçant, $(2k)^2 = 2q^2 \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2$. Donc $q^2$ est pair, et ainsi **$q$ est aussi pair** !\n' +
              '• **Contradiction** : $p$ et $q$ sont tous deux divisibles par $2$, ce qui contredit $\\text{pgcd}(p, q) = 1$ ! Donc $\\sqrt{2} \\notin \\mathbb{Q}$.',
            formula: {
              name: 'Point clé de l’irrationalité de √2',
              formula: '\\sqrt{2} = \\frac{p}{q} \\; (\\text{pgcd}(p,q)=1) \\implies p^2 = 2q^2 \\implies 2 \\mid p \\implies 2 \\mid q \\implies \\text{Contradiction !}',
              note: 'La même preuve fonctionne pour √3, √5, et tout √p avec p premier.',
            },
            keyRule:
              'Le verrou de la preuve de $\\sqrt{2} \\notin \\mathbb{Q}$ est l’hypothèse de fraction **irréductible** ($\\text{pgcd}(p, q) = 1$) : sans elle, il n’y a aucune contradiction à ce que $p$ et $q$ soient pairs !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Dans la démonstration par l’absurde de l’irrationalité de $\\sqrt{2}$, quelle hypothèse de départ est finalement contredite lorsqu’on prouve que $p$ et $q$ sont tous deux pairs ?',
              options: [
                'Le fait que $q \\neq 0$.',
                'Le fait que la fraction $\\frac{p}{q}$ a été choisie sous forme irréductible ($\\text{pgcd}(p, q) = 1$).',
                'Le fait que $\\sqrt{2} > 0$.',
                'Le fait que $p$ et $q$ sont des entiers.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Si $p$ et $q$ sont tous deux pairs, $2$ est un diviseur commun à $p$ et $q$, donc $\\text{pgcd}(p, q) \\ge 2$, ce qui contredit directement l’irréductibilité $\\text{pgcd}(p, q) = 1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Applications éco',
            stepTheme: 'slate',
            stepTitle: 'Raisonnement par l’absurde en économie et stratégie : monopole et paradoxe de la rareté',
            paragraphText:
              'Le raisonnement par l’absurde s’applique tout aussi rigoureusement à la modélisation économique et stratégique.\n' +
              '• **Cas 1 — Monopole et guerre des prix** : prouvons qu’en situation de monopole, il ne peut pas y avoir de guerre des prix. Supposons par l’absurde qu’une guerre des prix existe sur ce marché. Par définition, une guerre des prix implique au moins $2$ offreurs concurrents se livrant une baisse agressive de tarifs. Or, par définition, un monopole ne comporte qu’**un seul offreur** ($1 \\ge 2$ : contradiction !). Donc aucune guerre des prix n’est possible en monopole.\n' +
              '• **Cas 2 — Paradoxe de la rareté** : considérons la chaîne d’implications : $\\text{Rare} \\implies \\text{Désirable} \\implies \\text{Tout le monde l’achète} \\implies \\neg\\text{Rare}$. Par transitivité, $\\text{Rare} \\implies \\neg\\text{Rare}$ : un positionnement fondé uniquement sur la rareté sans contrôle de l’offre s’auto-détruit !',
            konanTip:
              'Dans une preuve par l’absurde en économie, traduis chaque concept par sa définition quantitative exacte : monopole = « nombre d’offreurs $N = 1$ », duopole strict = « $S_1 + S_2 = 100\\%$ ».',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Pourquoi la chaîne d’implications « $\\text{Rare} \\implies \\text{Désirable} \\implies \\text{Acheté par tous} \\implies \\neg\\text{Rare}$ » démontre-t-elle qu’une telle situation ne peut pas rester en état « Rare » ?',
              options: [
                'Parce que par transitivité, elle conduit à $\\text{Rare} \\implies \\neg\\text{Rare}$, ce qui impose $\\neg\\text{Rare}$ (sinon on aurait $V \\implies F$, contradiction).',
                'Parce qu’un produit rare n’est jamais désirable.',
                'Parce que la transitivité est fausse en logique.',
                'Parce que $\\text{Rare} \\implies \\neg\\text{Rare}$ est une contradiction même quand $\\text{Rare} = F$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La formule $P \\implies \\neg P$ est équivalente à $\\neg P \\lor \\neg P \\equiv \\neg P$ : elle ne peut être vraie que si $P$ est Fausse (si $P = V$, on aurait $V \\implies F$, absurde). Donc la rareté non contrôlée disparaît.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Distinction fine',
            stepTheme: 'orange',
            stepTitle: 'Ne pas confondre contraposée et raisonnement par l’absurde',
            paragraphText:
              'Ces deux raisonnements indirects commencent tous deux par supposer $\\neg Q$, ce qui pousse souvent à les confondre. Pourtant, leur mécanique interne diffère nettement.\n' +
              '• **Contraposée** : ne s’applique qu’à une **implication** $P \\implies Q$. On suppose **uniquement $\\neg Q$**, on n’utilise JAMAIS $P$, et l’objectif précis est d’aboutir à **$\\neg P$**.\n' +
              '• **Absurde** : s’applique à n’importe quel énoncé $Q$ (pas seulement une implication). Pour $P \\implies Q$, on suppose **simultanément $P$ ET $\\neg Q$**, et l’on cherche une contradiction **quelconque** (pas nécessairement $\\neg P$).\n' +
              '• **Bonne pratique de rédaction** : si ta preuve par l’absurde pour $P \\implies Q$ n’utilise jamais $P$ avant la toute dernière ligne (« on trouve $\\neg P$, ce qui contredit $P$ »), c’était en réalité une simple contraposée — rédige-la directement comme une contraposée, c’est plus élégant et plus court !',
            keyRule:
              'Contraposée = partir de $\\neg Q$ seul pour prouver $\\neg P$. Absurde = partir de $P \\land \\neg Q$ pour exhiber une contradiction quelconque $R \\land \\neg R$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Un étudiant veut prouver $P \\implies Q$. Il écrit : « Supposons $\\neg Q$. Par calcul direct (sans utiliser $P$), j’obtiens $\\neg P$. » Quelle méthode a-t-il réellement utilisée ?',
              options: [
                'Une récurrence forte.',
                'Un raisonnement par contraposée.',
                'Un raisonnement par contre-exemple.',
                'Une analyse-synthèse.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Partir de $\\neg Q$ seul et démontrer directement $\\neg P$ est exactement la définition du raisonnement par contraposée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Théorème d’Euclide',
            stepTheme: 'slate',
            stepTitle: 'Théorème d’Euclide par l’absurde : l’infinité des nombres premiers',
            paragraphText:
              'Un autre joyau du raisonnement par l’absurde est la preuve d’Euclide qu’il existe une infinité de nombres premiers (indispensable aujourd’hui en cryptographie RSA).\n' +
              '• **Hypothèse absurde** : supposons que l’ensemble des nombres premiers soit **fini**, noté $\\{p_1, p_2, \\dots, p_k\\}$.\n' +
              '• **Construction clé** : considérons l’entier $N = (p_1 \\times p_2 \\times \\dots \\times p_k) + 1$. Comme $N \\ge 2$, $N$ admet au moins un diviseur premier $p$.\n' +
              '• **Contradiction** : puisque $\\{p_1, \\dots, p_k\\}$ contient tous les nombres premiers, $p$ est égal à l’un des $p_i$, donc $p$ divise le produit $p_1 \\cdots p_k$. Or $p$ divise aussi $N$. Donc $p$ divise leur différence $N - p_1 \\cdots p_k = 1$ ! Absurde car un nombre premier est $\\ge 2$ et ne divise jamais $1$.\n' +
              '• **Conclusion** : il existe une infinité de nombres premiers.',
            konanTip:
              'Attention à un mythe fréquent : dans la preuve d’Euclide, $N = p_1 \\cdots p_k + 1$ n’est pas forcément premier lui-même (ex. $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 + 1 = 30\\,031 = 59 \\times 509$), il possède simplement un **diviseur premier** absent de la liste !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Dans la preuve par l’absurde d’Euclide (avec $N = p_1 p_2 \\cdots p_k + 1$), quelle contradiction finale permet de conclure ?',
              options: [
                'Un nombre premier $p$ diviserait à la fois $N$ et $p_1 \\cdots p_k$, donc diviserait $1$, ce qui est impossible car $p \\ge 2$.',
                'Le nombre $N$ serait négatif.',
                'Le produit $p_1 \\cdots p_k$ serait égal à $0$.',
                'Tous les nombres premiers seraient pairs.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si un diviseur premier $p$ de $N$ appartenait à la liste $\\{p_1, \\dots, p_k\\}$, il diviserait $N - p_1 \\cdots p_k = 1$, ce qui contredit $p \\ge 2$.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_logique_ch3_p3',
        order: 3,
        title: 'Raisonnement par récurrence : principe simple, rang initial et récurrence forte',
        summary:
          'Maîtriser les trois étapes de la récurrence, démontrer sommes, inégalités et modèles de croissance virale, éviter le piège de l’initialisation et utiliser la récurrence forte.',
        conceptExplanation:
          'Le **raisonnement par récurrence** est la méthode dédiée à la preuve d’une propriété $P(n)$ dépendant d’un entier naturel $n \\ge n_0$ (souvent $n_0 = 0$ ou $n_0 = 1$).\n\n' +
          'Son mécanisme repose sur l’image d’une file infinie de dominos :\n' +
          '1. **Initialisation** : on vérifie que le premier domino tombe, c’est-à-dire que $P(n_0)$ est vraie.\n' +
          '2. **Hérédité** : on fixe un entier quelconque $n \\ge n_0$, on suppose $P(n)$ vraie (**Hypothèse de Récurrence**, HR), et on démontre que cela entraîne $P(n + 1)$ (si un domino tombe, il fait tomber le suivant).\n' +
          '3. **Conclusion** : par le principe de récurrence, $\\forall n \\ge n_0,\\ P(n)$ est vraie.\n\n' +
          'Lorsque $P(n+1)$ a besoin de **tous** les rangs précédents (et pas seulement du rang $n$), on utilise la **récurrence forte** : on suppose $\\forall k \\in \\{n_0, \\dots, n\\},\\ P(k)$ vraie pour prouver $P(n+1)$.',
        formulas: [
          {
            name: 'Axiome de récurrence simple',
            formula: '\\Big[P(n_0) \\land \\big(\\forall n \\ge n_0,\\ P(n) \\implies P(n+1)\\big)\\Big] \\implies \\big(\\forall n \\ge n_0,\\ P(n)\\big)',
            note: 'Les DEUX piliers (initialisation ET hérédité) sont strictement indispensables.',
          },
          {
            name: 'Sommes classiques démontrées par récurrence',
            formula: '\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}, \\qquad \\sum_{k=0}^{n} q^k = \\frac{1 - q^{n+1}}{1 - q} \\; (q \\neq 1)',
            note: 'À connaître par cœur en Analyse, Algèbre et Statistique.',
          },
        ],
        keyRule:
          'Dans l’hérédité, ne suppose JAMAIS « $\\forall n,\\ P(n)$ » (ce serait supposer ce qu’on veut démontrer !) : fixe UN entier $n \\ge n_0$ et suppose $P(n)$ vraie pour CE rang $n$ précis.',
        workedExample: {
          title: 'Modélisation par récurrence d’une croissance virale par parrainage',
          statement:
            'Une application fintech démarre au jour $0$ avec $C(0) = 1$ client ambassadeur. Chaque jour, chaque client actif parraine un nouveau client : $C(n + 1) = 2 \\times C(n)$. Démontrer par récurrence que pour tout $n \\in \\mathbb{N}$, $C(n) = 2^n$.',
          methodSteps: [
            'Notons $P(n)$ la propriété : « $C(n) = 2^n$ ».',
            'Initialisation ($n = 0$) : d’une part $C(0) = 1$ (donné), d’autre part $2^0 = 1$. Donc $C(0) = 2^0$ et $P(0)$ est vraie.',
            'Hérédité : soit $n \\in \\mathbb{N}$ fixé tel que $P(n)$ soit vraie (HR : $C(n) = 2^n$). Calculons $C(n + 1)$ : $C(n + 1) = 2 \\times C(n) = 2 \\times 2^n = 2^{n+1}$ (d’après l’HR). Ainsi $P(n + 1)$ est vraie.',
            'Conclusion : par le principe de récurrence, $\\forall n \\in \\mathbb{N},\\ C(n) = 2^n$.',
          ],
          conclusion:
            'La base clients suit une croissance exponentielle $C(n) = 2^n$ (au bout de $20$ jours, $2^{20} = 1\\,048\\,576$ clients théoriques !).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Architecture',
            stepTheme: 'blue',
            stepTitle: 'Les 4 temps d’une rédaction parfaite par récurrence',
            paragraphText:
              'Une démonstration par récurrence est un protocole extrêmement codifié : sauter une seule étape invalide toute la preuve.\n' +
              '• **Temps 0 — Énoncer $P(n)$** : définir clairement la propriété dépendant de $n$ (sans inclure « $\\forall n$ » à l’intérieur de $P(n)$ !).\n' +
              '• **Temps 1 — Initialisation** : vérifier explicitement $P(n_0)$ au rang de départ $n_0$ en calculant séparément les deux membres.\n' +
              '• **Temps 2 — Hérédité** : fixer un entier $n \\ge n_0$, supposer $P(n)$ vraie (HR), et prouver $P(n + 1)$ en utilisant explicitement l’HR.\n' +
              '• **Temps 3 — Conclusion** : invoquer le principe de récurrence pour affirmer $\\forall n \\ge n_0,\\ P(n)$.\n' +
              'Suis l’organigramme ci-dessous à chaque récurrence.',
            visualSchema: {
              type: 'flowchart',
              title: 'Protocole complet du raisonnement par récurrence',
              caption: 'Sans initialisation, la chaîne ne démarre jamais ; sans hérédité, elle ne se propage pas.',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { label: '1. Définir la propriété P(n)', sublabel: 'Énoncé précis pour un entier n ≥ n₀ (sans ∀n)', kind: 'start', color: 'blue' },
                  { label: '2. Initialisation : vérifier P(n₀)', sublabel: 'Calculer membre gauche et membre droit au rang n₀', kind: 'process', color: 'green' },
                  { label: '3. Hérédité : fixer n ≥ n₀ et supposer P(n)', sublabel: 'Hypothèse de récurrence (HR) pour ce n fixé', kind: 'decision', color: 'violet' },
                  { label: '4. Démontrer P(n + 1) à l’aide de l’HR', sublabel: 'Relier le rang n + 1 au rang n puis substituer l’HR', kind: 'process', color: 'orange' },
                  { label: '5. Conclusion : ∀ n ≥ n₀, P(n) est vraie', sublabel: 'Par le principe de récurrence', kind: 'end', color: 'green' },
                ],
              },
            },
            keyRule:
              'Ne mets JAMAIS « $\\forall n \\in \\mathbb{N}$ » dans la définition de $P(n)$ : $P(n)$ est un prédicat sur un entier $n$ donné !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q1',
              type: 'mcq',
              prompt: 'Lors de la rédaction de l’étape d’**hérédité** d’une récurrence pour prouver $\\forall n \\ge 1,\\ P(n)$, quelle formulation est mathématiquement rigoureuse ?',
              options: [
                '« Supposons que pour tout $n \\ge 1$, $P(n)$ est vraie, et montrons $P(n + 1)$. »',
                '« Soit un entier $n \\ge 1$ fixé. Supposons $P(n)$ vraie (HR) et montrons que $P(n + 1)$ est vraie. »',
                '« Vérifions $P(1)$, $P(2)$ et $P(3)$ puis concluons pour tout $n$. »',
                '« Supposons $P(n + 1)$ vraie et déduisons $P(n)$. »',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’option (A) suppose déjà le résultat final ($\\forall n, P(n)$), ce qui est un raisonnement circulaire ! Il faut fixer un entier $n \\ge 1$ quelconque, supposer $P(n)$ vraie pour cet $n$, et prouver $P(n + 1)$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Sommes',
            stepTheme: 'green',
            stepTitle: 'Prouver une formule de somme par récurrence : méthode du dernier terme',
            paragraphText:
              'Pour prouver par récurrence une égalité de somme $\\sum_{k=1}^{n} u_k = F(n)$, le geste technique est toujours identique : **isoler le dernier terme** $u_{n+1}$ !\n' +
              '• **Exemple** : prouvons $P(n) : \\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$ pour tout $n \\ge 1$.\n' +
              '• **Initialisation ($n = 1$)** : $\\sum_{k=1}^{1} k = 1$ et $\\frac{1 \\times 2}{2} = 1$, donc $P(1)$ est vraie.\n' +
              '• **Hérédité** : supposons $P(n)$ vraie pour un $n \\ge 1$ fixé. On isole le $(n+1)$-ème terme :\n' +
              '  $\\sum_{k=1}^{n+1} k = \\left(\\sum_{k=1}^{n} k\\right) + (n + 1) \\stackrel{\\text{HR}}{=} \\frac{n(n+1)}{2} + (n + 1) = (n + 1)\\left(\\frac{n}{2} + 1\\right) = \\frac{(n+1)(n+2)}{2}$.\n' +
              '• **Conclusion** : $P(n + 1)$ est vraie, donc la formule vaut pour tout $n \\ge 1$.',
            formula: {
              name: 'Décomposition du rang n + 1 d’une somme',
              formula: '\\sum_{k=1}^{n+1} u_k = \\left(\\sum_{k=1}^{n} u_k\\right) + u_{n+1}',
              note: 'Pense à factoriser par le facteur commun (ici n + 1) plutôt que de tout développer !',
            },
            konanTip:
              'Écris toujours au brouillon la **cible** $P(n + 1)$ en remplaçant chaque $n$ par $(n + 1)$ : pour $\\frac{n(n+1)}{2}$, la cible est $\\frac{(n+1)(n+2)}{2}$. Tu sais exactement où tu vas !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q2',
              type: 'mcq',
              prompt: 'On veut prouver par récurrence que $\\forall n \\ge 1,\\ \\sum_{k=1}^{n} (2k - 1) = n^2$ (somme des $n$ premiers entiers impairs). Quelle égalité réalise l’étape d’hérédité ?',
              options: [
                '$\\sum_{k=1}^{n+1} (2k - 1) = n^2 + (2n + 1) = (n + 1)^2$',
                '$\\sum_{k=1}^{n+1} (2k - 1) = n^2 + (2n - 1) = (n + 1)^2$',
                '$\\sum_{k=1}^{n+1} (2k - 1) = (n + 1)^2 + 1$',
                '$\\sum_{k=1}^{n+1} (2k - 1) = n^2 + 2 = (n + 1)^2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $k = n + 1$, le dernier terme vaut $2(n + 1) - 1 = 2n + 1$. Par l’HR, $\\sum_{k=1}^{n+1} (2k - 1) = n^2 + (2n + 1) = (n + 1)^2$, qui est exactement $P(n + 1)$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Divisibilité & Inégalités',
            stepTheme: 'green',
            stepTitle: 'Divisibilité et inégalité de Bernoulli par récurrence',
            paragraphText:
              'La récurrence excelle aussi pour prouver des propriétés de **divisibilité** et des **inégalités**.\n' +
              '• **Divisibilité** : montrons $P(n) : « 3 \\text{ divise } 4^n - 1 »$ pour tout $n \\in \\mathbb{N}$. Initialisation : $4^0 - 1 = 0 = 3 \\times 0$ (Vrai). Hérédité : supposons $4^n - 1 = 3k$ ($k \\in \\mathbb{Z}$), donc $4^n = 3k + 1$. Alors $4^{n+1} - 1 = 4 \\cdot 4^n - 1 = 4(3k + 1) - 1 = 12k + 3 = 3(4k + 1)$, qui est multiple de $3$ !\n' +
              '• **Inégalité de Bernoulli** : pour tout réel $a \\ge -1$ et tout $n \\in \\mathbb{N}$, $(1 + a)^n \\ge 1 + na$.\n' +
              '  – Initialisation ($n = 0$) : $(1 + a)^0 = 1 \\ge 1 + 0$.\n' +
              '  – Hérédité : comme $1 + a \\ge 0$, on multiplie l’HR par $(1 + a)$ sans changer le sens : $(1 + a)^{n+1} \\ge (1 + na)(1 + a) = 1 + (n + 1)a + na^2 \\ge 1 + (n + 1)a$ car $na^2 \\ge 0$.',
            formula: {
              name: 'Inégalité de Bernoulli',
              formula: '\\forall a \\ge -1,\\ \\forall n \\in \\mathbb{N},\\qquad (1 + a)^n \\ge 1 + na',
              note: 'Très utilisée en finance pour minorer les intérêts composés (1 + r)ⁿ par les intérêts simples 1 + nr !',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q3',
              type: 'mcq',
              prompt: 'Dans la preuve par récurrence de l’inégalité de Bernoulli $(1 + a)^n \\ge 1 + na$, pourquoi l’hypothèse $a \\ge -1$ est-elle indispensable à l’étape d’hérédité ?',
              options: [
                'Parce qu’elle garantit $1 + a \\ge 0$, ce qui permet de multiplier les deux membres de l’inégalité par $(1 + a)$ sans en inverser le sens.',
                'Parce que sinon $na^2$ serait négatif.',
                'Parce que sinon $(1 + a)^0$ ne vaudrait pas $1$.',
                'Elle est en fait inutile, l’inégalité vaut pour tout $a \\in \\mathbb{R}$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour passer de $(1 + a)^n \\ge 1 + na$ à $(1 + a)^{n+1} \\ge (1 + na)(1 + a)$, on multiplie par $(1 + a)$ : cela conserve le sens de l’inégalité si et seulement si $1 + a \\ge 0$, soit $a \\ge -1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Croissance virale',
            stepTheme: 'slate',
            stepTitle: 'Modéliser une suite récurrente économique par récurrence',
            paragraphText:
              'En économie numérique, les phénomènes d’adoption virale, de capitalisation financière ou de complexité algorithmique s’expriment par des relations de récurrence $u_{n+1} = f(u_n)$.\n' +
              '• **Capitalisation composée** : un capital initial $C_0$ placé au taux périodique $r$ vérifie $C_{n+1} = (1 + r)C_n$. Par récurrence immédiate : $C_0 = C_0(1+r)^0$, et si $C_n = C_0(1+r)^n$, alors $C_{n+1} = (1+r)C_0(1+r)^n = C_0(1+r)^{n+1}$.\n' +
              '• **Suite arithmético-géométrique** : si une plateforme gagne chaque mois $50\\%$ d’abonnés en plus mais perd $100$ abonnés, $u_{n+1} = 1{,}5 u_n - 100$ avec $u_0 = 400$. On vérifie par récurrence que $u_n = 200 + 200 \\times (1{,}5)^n$ : pour $n = 0$, $200 + 200 = 400$ ; à l’hérédité, $1{,}5(200 + 200 \\cdot 1{,}5^n) - 100 = 300 + 200 \\cdot 1{,}5^{n+1} - 100 = 200 + 200 \\cdot 1{,}5^{n+1}$.',
            konanTip:
              'Dès qu’un énoncé te donne $u_0$, une relation $u_{n+1} = f(u_n)$ et te demande de prouver une formule explicite $u_n = g(n)$, la récurrence est toujours le chemin le plus court et le plus sûr !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Une suite vérifie $u_0 = 3$ et $\\forall n \\in \\mathbb{N},\\ u_{n+1} = 2u_n - 1$. Quelle formule explicite est vraie pour tout $n \\in \\mathbb{N}$ (vérifiable par récurrence) ?',
              options: [
                '$u_n = 2^n + 2$',
                '$u_n = 2^{n+1} + 1$',
                '$u_n = 3 \\times 2^n - 1$',
                '$u_n = 2n + 3$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Test d’initialisation ($n = 0$) : $2^1 + 1 = 3 = u_0$. Hérédité : si $u_n = 2^{n+1} + 1$, alors $u_{n+1} = 2(2^{n+1} + 1) - 1 = 2^{n+2} + 2 - 1 = 2^{(n+1)+1} + 1$. Les autres formules échouent dès $n = 1$ ($u_1 = 5$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Initialisation vitale',
            stepTheme: 'orange',
            stepTitle: 'Le piège fatal de l’initialisation oubliée : héréditaire ne signifie pas vrai !',
            paragraphText:
              'Certains étudiants bâclent l’initialisation en la croyant purement formelle. C’est une erreur fatale : une propriété peut être parfaitement **héréditaire** tout en étant **fausse pour absolument tous les entiers $n$** !\n' +
              '• **Contre-exemple saisissant** : considérons la propriété $Q(n) : « 3 \\text{ divise } 4^n + 1 »$.\n' +
              '• **Test d’hérédité** : supposons que $4^n + 1 = 3k$. Alors $4^{n+1} + 1 = 4(4^n + 1) - 3 = 4(3k) - 3 = 3(4k - 1)$, donc $3$ divise $4^{n+1} + 1$ ! L’hérédité est **100 % vraie** !\n' +
              '• **Pourtant $Q(n)$ est TOUJOURS FAUSSE** : pour $n = 0$, $4^0 + 1 = 2$ (non divisible par $3$) ; pour $n = 1$, $4^1 + 1 = 5$ ; pour $n = 2$, $4^2 + 1 = 17$… Aucun premier domino ne tombe jamais !',
            keyRule:
              'L’hérédité seule prouve uniquement que « si la propriété démarre quelque part, elle continue ». Sans initialisation vérifiée, la preuve ne démontre RIEN !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q5',
              type: 'mcq',
              prompt: 'Considérons la propriété $Q(n) : « 2^n > 2^n + 1 »$ (ou « $4^n + 1$ est multiple de $3$ »). Que peut-on dire de son hérédité et de sa vérité ?',
              options: [
                'L’hérédité est vraie (si $Q(n)$ était vraie, $Q(n+1)$ le serait aussi), mais $Q(n)$ est fausse pour tout $n \\in \\mathbb{N}$ faute d’initialisation.',
                'Puisque l’hérédité est vraie, $Q(n)$ est vraie pour les grands $n$.',
                'L’hérédité est impossible à démontrer pour une propriété fausse.',
                'Il suffit de vérifier l’hérédité deux fois pour se passer de l’initialisation.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une implication $F \\implies F$ est toujours vraie ! Donc une propriété fausse peut très bien être héréditaire ($Q(n) \\implies Q(n+1)$), ce qui démontre le rôle absolument irremplaçable de l’initialisation.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Récurrence forte',
            stepTheme: 'violet',
            stepTitle: 'Récurrence double et récurrence forte (ou complète)',
            paragraphText:
              'Dans certains problèmes, connaître uniquement le rang $n$ ne suffit pas pour passer au rang $n + 1$. On renforce alors l’hypothèse de récurrence.\n' +
              '• **Récurrence double (d’ordre 2)** : lorsque $u_{n+2}$ dépend à la fois de $u_n$ et de $u_{n+1}$ (comme la suite de Fibonacci $F_{n+2} = F_{n+1} + F_n$). Il faut alors **initialiser deux rangs** ($P(0)$ ET $P(1)$) et prouver $[P(n) \\land P(n+1)] \\implies P(n+2)$.\n' +
              '• **Récurrence forte** : on initialise $P(n_0)$, puis pour l’hérédité, on suppose $P(k)$ vraie **pour tous les entiers $k$ tels que $n_0 \\le k \\le n$**, afin de démontrer $P(n + 1)$.\n' +
              '• **Application reine** : tout entier $n \\ge 2$ se décompose en produit de nombres premiers. Si $n + 1$ est premier, c’est fini ; sinon $n + 1 = a \\times b$ avec $2 \\le a, b \\le n$, et la récurrence forte s’applique simultanément à $a$ et $b$ !',
            formula: {
              name: 'Principe de la récurrence forte',
              formula: '\\Big[P(n_0) \\land \\big(\\forall n \\ge n_0,\\ (\\forall k \\in [\\![n_0, n]\\!],\\ P(k)) \\implies P(n+1)\\big)\\Big] \\implies \\forall n \\ge n_0,\\ P(n)',
              note: 'La récurrence forte est logiquement équivalente à la récurrence simple, mais beaucoup plus pratique quand un entier se factorise ou se divise.',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q6',
              type: 'mcq',
              prompt: 'Pourquoi utilise-t-on la **récurrence forte** plutôt que la récurrence simple pour démontrer que tout entier $n \\ge 2$ est produit de nombres premiers ?',
              options: [
                'Parce que si $n + 1$ est composé ($n + 1 = a \\cdot b$), ses diviseurs $a$ et $b$ sont strictement inférieurs à $n + 1$, mais ne sont généralement pas égaux à $n$.',
                'Parce que la récurrence simple ne fonctionne pas à partir de $n_0 = 2$.',
                'Parce que $n + 1$ est toujours un nombre premier.',
                'Parce que la récurrence forte ne demande aucune initialisation.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Quand $n + 1 = a \\cdot b$ (ex. $12 = 3 \\times 4$), on a besoin de l’hypothèse de récurrence aux rangs $a$ et $b$ qui sont $\\le n$ mais différents de $n$ : c’est précisément la puissance de la récurrence forte.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Rang n₀ > 0',
            stepTheme: 'slate',
            stepTitle: 'Récurrence à partir d’un seuil : prouver $\\forall n \\ge 4,\\ 2^n \\ge n^2$',
            paragraphText:
              'Certaines inégalités ne deviennent vraies qu’à partir d’un seuil $n_0 > 0$ (en informatique, pour comparer la complexité exponentielle $2^n$ et quadratique $n^2$).\n' +
              '• **Observation** : pour $n = 3$, $2^3 = 8 < 3^2 = 9$ (Faux !). En revanche, pour $n = 4$, $2^4 = 16 \\ge 4^2 = 16$ (Vrai !).\n' +
              '• **Initialisation ($n_0 = 4$)** : $2^4 = 16 \\ge 16 = 4^2$, donc $P(4)$ est vraie.\n' +
              '• **Hérédité ($n \\ge 4$)** : supposons $2^n \\ge n^2$. Alors $2^{n+1} = 2 \\cdot 2^n \\ge 2n^2$. Il reste à comparer $2n^2$ et $(n + 1)^2$ : $2n^2 - (n + 1)^2 = n^2 - 2n - 1 = (n - 1)^2 - 2$. Or comme $n \\ge 4$, $(n - 1)^2 - 2 \\ge 3^2 - 2 = 7 > 0$, donc $2n^2 > (n + 1)^2$, d’où $2^{n+1} \\ge (n + 1)^2$.\n' +
              '• **Conclusion** : pour tout $n \\ge 4$, $2^n \\ge n^2$.',
            konanTip:
              'Pour comparer deux polynômes à l’étape d’hérédité (comme $2n^2$ et $(n+1)^2$), forme toujours leur **différence** et factorise-la ou mets-la sous forme canonique pour prouver qu’elle est positive pour $n \\ge n_0$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p3_q7',
              type: 'mcq',
              prompt: 'Dans la preuve par récurrence de « $\\forall n \\ge 4,\\ 2^n \\ge n^2$ », pourquoi le rang $n = 3$ ne peut-il pas servir d’initialisation ?',
              options: [
                'Parce que $2^3 = 8$ est strictement inférieur à $3^2 = 9$ : la propriété $P(3)$ est fausse.',
                'Parce que $3$ est un nombre impair.',
                'Parce que $2^n$ est toujours inférieur à $n^2$.',
                'Parce que $2^4 < 4^2$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Au rang $n = 3$, $2^3 = 8 < 9 = 3^2$, donc $P(3)$ est fausse. La propriété ne devient vraie de manière permanente qu’à partir du seuil $n_0 = 4$ ($16 \\ge 16$).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 4 : Ensembles, applications et relations binaires
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch4',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Logique et Raisonnement Mathématique',
    title: 'Chapitre 4 — Ensembles, applications et relations binaires (équivalence et ordre)',
    summary:
      'Théorie des ensembles, parties $\\mathcal{P}(E)$, opérations, De Morgan et diagrammes de Venn ; applications injectives, surjectives et bijectives ; relations binaires, relations d’équivalence, partitions, relations d’ordre (partiel/total) et bornes dans $\\mathbb{R}$.',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch4_p1',
        order: 1,
        title: 'Ensembles, opérations ensemblistes, ensemble des parties et diagrammes de Venn',
        summary:
          'Définir un ensemble en extension ou compréhension, manipuler inclusion, parties P(E), opérations (∩, ∪, \\, Δ, ×) et dénombrer par diagramme de Venn.',
        conceptExplanation:
          'Un **ensemble** est une collection d’objets distincts appelés **éléments** ($x \\in E$). On le décrit soit en **extension** (liste des éléments, ex. $A = \\{1, 2, 3\\}$), soit en **compréhension** (propriété caractéristique, ex. $P = \\{2k \\mid k \\in \\mathbb{Z}\\}$).\n\n' +
          'Les relations et opérations fondamentales traduisent directement le calcul propositionnel :\n' +
          '• **Inclusion ($A \\subset B$)** : $\\forall x,\\ x \\in A \\implies x \\in B$. Deux ensembles sont égaux ($A = B$) ssi $A \\subset B$ et $B \\subset A$ (**double inclusion**).\n' +
          '• **Ensemble des parties ($\\mathcal{P}(E)$)** : ensemble de tous les sous-ensembles de $E$ (y compris $\\emptyset$ et $E$). Si $|E| = n$, alors $|\\mathcal{P}(E)| = 2^n$.\n' +
          '• **Opérations** : intersection $A \\cap B$ (« et »), réunion $A \\cup B$ (« ou »), différence $A \\setminus B$, complémentaire $\\bar{A} = \\complement_E A$, différence symétrique $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$ (« XOR »), et produit cartésien $E \\times F = \\{(x, y) \\mid x \\in E,\\ y \\in F\\}$.\n' +
          '• **Formule du crible** : pour deux ensembles finis, $|A \\cup B| = |A| + |B| - |A \\cap B|$.',
        formulas: [
          {
            name: 'Cardinal des parties, du produit cartésien et de la réunion',
            formula: '|\\mathcal{P}(E)| = 2^{|E|}, \\qquad |E \\times F| = |E| \\cdot |F|, \\qquad |A \\cup B| = |A| + |B| - |A \\cap B|',
            note: 'Si A ∩ B = ∅ (ensembles disjoints), alors |A ∪ B| = |A| + |B|.',
          },
          {
            name: 'Lois de De Morgan ensemblistes',
            formula: '\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}, \\qquad \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}',
            note: 'Exact pendant ensembliste des lois de De Morgan de la logique propositionnelle.',
          },
        ],
        keyRule:
          'Ne confonds jamais **appartenance** ($\\in$, entre un élément et un ensemble) et **inclusion** ($\\subset$, entre deux ensembles) : $a \\in E \\iff \\{a\\} \\subset E \\iff \\{a\\} \\in \\mathcal{P}(E)$.',
        workedExample: {
          title: 'Segmentation d’audience par diagramme de Venn (formule du crible)',
          statement:
            'Sur un échantillon de $100$ clients interrogés à Abidjan, $60$ aiment le service $A$, $45$ aiment le service $B$, et $20$ n’aiment ni $A$ ni $B$. Déterminer le nombre de clients qui aiment simultanément $A$ et $B$, puis ceux qui aiment uniquement $A$.',
          methodSteps: [
            'Notons $E$ l’échantillon ($|E| = 100$). Les $20$ clients qui n’aiment ni $A$ ni $B$ forment $\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$.',
            'Donc le nombre de clients aimant au moins l’un des deux services est $|A \\cup B| = |E| - |\\overline{A \\cup B}| = 100 - 20 = 80$.',
            'Par la formule du crible : $|A \\cup B| = |A| + |B| - |A \\cap B| \\implies 80 = 60 + 45 - |A \\cap B|$, d’où $|A \\cap B| = 105 - 80 = 25$.',
            'Les clients aimant uniquement $A$ forment $A \\setminus B$ : $|A \\setminus B| = |A| - |A \\cap B| = 60 - 25 = 35$.',
          ],
          conclusion:
            '$25$ clients aiment simultanément $A$ et $B$, $35$ aiment uniquement $A$, $20$ aiment uniquement $B$, et $20$ n’aiment ni $A$ ni $B$ ($35 + 25 + 20 + 20 = 100$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Inclusion & Égalité',
            stepTheme: 'blue',
            stepTitle: 'Écriture d’un ensemble, inclusion et méthode de double inclusion',
            paragraphText:
              'Un ensemble est parfaitement déterminé par ses éléments : ni l’ordre d’écriture ni les répétitions ne comptent ($\\{1, 2, 2\\}$ représente le même ensemble que $\\{2, 1\\}$).\n' +
              '• **Extension vs Compréhension** : $A = \\{0, 2, 4, 6\\}$ est écrit en extension (liste explicite) ; $A = \\{2k \\mid k \\in \\mathbb{N},\\ k \\le 3\\}$ est écrit en compréhension (règle de génération).\n' +
              '• **Inclusion ($A \\subset B$)** : tout élément de $A$ est aussi élément de $B$. Par convention vacuelle, l’ensemble vide $\\emptyset$ est inclus dans tout ensemble ($\\emptyset \\subset E$) et tout ensemble est inclus dans lui-même ($E \\subset E$).\n' +
              '• **Double inclusion** : pour démontrer rigoureusement une égalité d’ensembles $A = B$, on prouve d’abord $A \\subset B$ (« soit $x \\in A$, montrons $x \\in B$ »), puis $B \\subset A$ (« soit $x \\in B$, montrons $x \\in A$ »).',
            keyRule:
              'La méthode standard pour prouver $A = B$ en mathématiques supérieures est la **double inclusion** : montrer $A \\subset B$ puis $B \\subset A$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p1_q1',
              type: 'mcq',
              prompt: 'Soient $A = \\{1, 2, 3, 4\\}$ et $B = ]0, 4] \\cap \\mathbb{N}$. Quelle affirmation est exacte ?',
              options: [
                '$A \\subset B$ mais $A \\neq B$, car $0 \\in B$.',
                '$A = B$, car tout entier naturel vérifiant $0 < n \\le 4$ appartient exactement à $\\{1, 2, 3, 4\\}$.',
                '$A \\cap B = \\emptyset$.',
                '$B$ est un ensemble infini.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’intervalle $]0, 4]$ exclut $0$ et inclut $4$. Ses éléments dans $\\mathbb{N}$ sont donc exactement $1, 2, 3, 4$, d’où $A = B$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Parties P(E)',
            stepTheme: 'violet',
            stepTitle: 'L’ensemble des parties $\\mathcal{P}(E)$ et la formule $2^{|E|}$',
            paragraphText:
              'À tout ensemble $E$ on associe un ensemble fondamental d’un niveau supérieur : l’**ensemble de ses parties**, noté $\\mathcal{P}(E)$.\n' +
              '• **Définition** : les éléments de $\\mathcal{P}(E)$ sont exactement les sous-ensembles de $E$ : $A \\in \\mathcal{P}(E) \\iff A \\subset E$.\n' +
              '• **Exemple** : pour $E = \\{a, b, c\\}$ ($|E| = 3$), $\\mathcal{P}(E)$ comporte $2^3 = 8$ parties : $\\emptyset$, les $3$ singletons $\\{a\\}, \\{b\\}, \\{c\\}$, les $3$ paires $\\{a,b\\}, \\{a,c\\}, \\{b,c\\}$, et $E$ lui-même.\n' +
              '• **Pourquoi $2^n$ ?** Pour fabriquer un sous-ensemble de $E$, chacun des $n$ éléments a exactement $2$ choix indépendants : être pris ou ne pas être pris, soit $2 \\times 2 \\times \\dots \\times 2 = 2^n$ combinaisons.\n' +
              '• **Application produit** : un abonnement numérique proposant $5$ options activables librement permet de configurer $2^5 = 32$ formules distinctes.',
            formula: {
              name: 'Cardinal de l’ensemble des parties',
              formula: '\\text{Si } |E| = n, \\quad \\text{alors } |\\mathcal{P}(E)| = 2^n \\qquad (\\text{en particulier } |\\mathcal{P}(\\emptyset)| = 2^0 = 1)',
              note: 'Attention : P(∅) = {∅} n’est PAS vide, il contient 1 élément (l’ensemble vide lui-même) !',
            },
            konanTip:
              'Ne confonds pas $\\emptyset$ (0 élément) et $\\{\\emptyset\\}$ (1 élément) ! Et vérifie toujours $\\emptyset \\in \\mathcal{P}(E)$ et $E \\in \\mathcal{P}(E)$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p1_q2',
              type: 'mcq',
              prompt: 'Soit $E = \\{1, 2, 3, 4\\}$. Combien d’éléments possède $\\mathcal{P}(E)$ et quelle écriture est **correcte** ?',
              options: [
                '$|\\mathcal{P}(E)| = 8$ et $1 \\in \\mathcal{P}(E)$.',
                '$|\\mathcal{P}(E)| = 16$ et $\\{1\\} \\in \\mathcal{P}(E)$.',
                '$|\\mathcal{P}(E)| = 16$ et $\\{1\\} \\subset \\mathcal{P}(E)$.',
                '$|\\mathcal{P}(E)| = 4$ et $\\emptyset \\notin \\mathcal{P}(E)$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $|E| = 4$, $|\\mathcal{P}(E)| = 2^4 = 16$. Les éléments de $\\mathcal{P}(E)$ sont les sous-ensembles de $E$ : le singleton $\\{1\\}$ est un sous-ensemble de $E$, donc $\\{1\\} \\in \\mathcal{P}(E)$ (tandis que $1 \\notin \\mathcal{P}(E)$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Opérations',
            stepTheme: 'blue',
            stepTitle: 'Intersection, réunion, différence, complémentaire et différence symétrique',
            paragraphText:
              'Soient $A$ et $B$ deux parties d’un référentiel $E$. Cinq opérations permettent de construire de nouveaux ensembles.\n' +
              '• **Intersection ($A \\cap B$)** : éléments appartenant à $A$ **et** à $B$. Si $A \\cap B = \\emptyset$, $A$ et $B$ sont dits **disjoints**.\n' +
              '• **Réunion ($A \\cup B$)** : éléments appartenant à $A$ **ou** à $B$ (OU inclusif).\n' +
              '• **Différence ($A \\setminus B$)** : éléments appartenant à $A$ mais **pas** à $B$ ($A \\setminus B = A \\cap \\bar{B}$).\n' +
              '• **Complémentaire ($\\bar{A} = \\complement_E A$)** : éléments de $E$ n’appartenant pas à $A$. On a $A \\cup \\bar{A} = E$, $A \\cap \\bar{A} = \\emptyset$ et $\\overline{\\bar{A}} = A$.\n' +
              '• **Différence symétrique ($A \\Delta B$)** : éléments appartenant à $A$ **ou exclusivement** à $B$ : $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$.',
            formula: {
              name: 'Différence symétrique',
              formula: 'A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)',
              note: 'Exemple : si A = {2, 5, 7} et B = {1, 5, 7, 9}, alors A \\ B = {2}, B \\ A = {1, 9}, donc A Δ B = {1, 2, 9}.',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p1_q3',
              type: 'mcq',
              prompt: 'Soient $A = \\{2, 4, 6, 8\\}$ et $B = \\{4, 5, 6, 7\\}$. Quel est l’ensemble $A \\Delta B$ (différence symétrique) ?',
              options: [
                '$\\{4, 6\\}$',
                '$\\{2, 8\\}$',
                '$\\{2, 5, 7, 8\\}$',
                '$\\{2, 4, 5, 6, 7, 8\\}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On a $A \\setminus B = \\{2, 8\\}$ et $B \\setminus A = \\{5, 7\\}$. La différence symétrique réunit les éléments qui ne sont que dans un seul des deux ensembles : $A \\Delta B = \\{2, 5, 7, 8\\}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Algèbre & Produit',
            stepTheme: 'violet',
            stepTitle: 'Lois de De Morgan ensemblistes, distributivité et produit cartésien $E \\times F$',
            paragraphText:
              'Les opérations $\\cap$ et $\\cup$ obéissent exactement à la même algèbre de Boole que les connecteurs $\\land$ et $\\lor$.\n' +
              '• **Distributivité croisée** : $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ et $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$.\n' +
              '• **Lois de De Morgan** : dans $E$, $\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$ et $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$.\n' +
              '• **Produit cartésien ($E \\times F$)** : ensemble de tous les **couples ordonnés** $(x, y)$ avec $x \\in E$ et $y \\in F$. Attention : l’ordre compte ! Si $E \\neq F$ (et non vides), $E \\times F \\neq F \\times E$ (ex. $(1, a) \\neq (a, 1)$).\n' +
              '• **Cardinal du produit** : $|E \\times F| = |E| \\times |F|$. Un menu proposant $3$ plats et $4$ boissons offre $3 \\times 4 = 12$ couples (plat, boisson).',
            keyRule:
              'Dans un ensemble $\\{a, b\\} = \\{b, a\\}$ (l’ordre ne compte pas), mais dans un couple du produit cartésien $(a, b) \\neq (b, a)$ dès que $a \\neq b$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p1_q4',
              type: 'mcq',
              prompt: 'Soient $A = \\{1, 2, 3\\}$ et $B = \\{a, b\\}$. Quel est le cardinal de $A \\times B$ et quel élément appartient à $A \\times B$ ?',
              options: [
                '$|A \\times B| = 5$ et $(a, 1) \\in A \\times B$.',
                '$|A \\times B| = 6$ et $(2, b) \\in A \\times B$.',
                '$|A \\times B| = 6$ et $(b, 2) \\in A \\times B$.',
                '$|A \\times B| = 9$ et $\\{1, a\\} \\in A \\times B$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$|A \\times B| = |A| \\times |B| = 3 \\times 2 = 6$. Un élément de $A \\times B$ est un couple ordonné $(x, y)$ avec le premier terme dans $A$ et le second dans $B$, donc $(2, b) \\in A \\times B$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Diagramme de Venn',
            stepTheme: 'green',
            stepTitle: 'Visualiser et dénombrer avec les diagrammes de Venn et la formule du crible',
            paragraphText:
              'Les **diagrammes de Venn** représentent les ensembles par des courbes fermées à l’intérieur d’un rectangle figurant l’univers $E$. Ils permettent de résoudre visuellement tout problème de dénombrement ou de segmentation marketing.\n' +
              '• **Règle d’or du remplissage** : commence TOUJOURS par inscrire l’effectif de la zone la plus centrale ($A \\cap B$), puis déduis par soustraction les zones exclusives ($A \\setminus B$ et $B \\setminus A$) !\n' +
              '• **Formule du crible (Poincaré)** : $|A \\cup B| = |A| + |B| - |A \\cap B|$ (on soustrait $|A \\cap B|$ car les éléments communs ont été comptés deux fois).\n' +
              'Observe le diagramme de Venn ci-dessous résolvant l’enquête sur $100$ clients ($|A| = 60$, $|B| = 45$, extérieur $= 20$).',
            visualSchema: {
              type: 'custom_svg',
              title: 'Diagramme de Venn : enquête sur 100 clients (|A| = 60, |B| = 45, extérieur = 20)',
              caption: 'Chaque zone disjointe porte son effectif propre : 35 + 25 + 20 + 20 = 100.',
              svgContent:
                '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="12" y="12" width="396" height="196" rx="14" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/>' +
                '<text x="26" y="34" font-size="12" font-weight="700" fill="#475569">Univers E (|E| = 100)</text>' +
                '<circle cx="162" cy="116" r="68" fill="#0EA5E9" fill-opacity="0.22" stroke="#0284C7" stroke-width="2.5"/>' +
                '<circle cx="258" cy="116" r="68" fill="#8B5CF6" fill-opacity="0.22" stroke="#6D28D9" stroke-width="2.5"/>' +
                '<text x="112" y="64" font-size="13" font-weight="700" fill="#0369A1">A (60)</text>' +
                '<text x="270" y="64" font-size="13" font-weight="700" fill="#5B21B6">B (45)</text>' +
                '<text x="132" y="114" text-anchor="middle" font-size="18" font-weight="800" fill="#0369A1">35</text>' +
                '<text x="132" y="132" text-anchor="middle" font-size="10" fill="#334155">A \\ B</text>' +
                '<text x="210" y="114" text-anchor="middle" font-size="18" font-weight="800" fill="#059669">25</text>' +
                '<text x="210" y="132" text-anchor="middle" font-size="10" fill="#065F46">A ∩ B</text>' +
                '<text x="288" y="114" text-anchor="middle" font-size="18" font-weight="800" fill="#5B21B6">20</text>' +
                '<text x="288" y="132" text-anchor="middle" font-size="10" fill="#334155">B \\ A</text>' +
                '<rect x="304" y="168" width="92" height="28" rx="8" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>' +
                '<text x="350" y="186" text-anchor="middle" font-size="11" font-weight="700" fill="#92400E">Ni A ni B : 20</text>' +
                '</svg>',
            },
            konanTip:
              'Vérifie toujours la somme des 4 zones disjointes du diagramme ($|A\\setminus B| + |A\\cap B| + |B\\setminus A| + |\\overline{A\\cup B}|$) : elle doit égaler exactement $|E|$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p1_q5',
              type: 'mcq',
              prompt: 'Dans une promotion de $80$ étudiants en ENTD, $52$ utilisent Python ($P$), $38$ utilisent SQL ($S$) et $10$ n’utilisent ni Python ni SQL. Combien d’étudiants utilisent **à la fois** Python et SQL ?',
              options: [
                '$10$',
                '$20$',
                '$28$',
                '$30$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $|P \\cup S| = 80 - 10 = 70$. Par la formule du crible : $|P \\cap S| = |P| + |S| - |P \\cup S| = 52 + 38 - 70 = 90 - 70 = 20$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Segmentation',
            stepTheme: 'slate',
            stepTitle: 'Raisonner sur des inclusions et disjonctions d’ensembles',
            paragraphText:
              'La logique ensembliste permet de valider instantanément la cohérence d’un algorithme de segmentation clients ou de règles d’accès.\n' +
              '• **Problème** : un CRM classe les comptes selon deux règles strictes : (1) « Tout client de catégorie $A$ appartient aussi à la catégorie $B$ » ($A \\subset B$) ; (2) « Aucun client de catégorie $B$ n’est dans la catégorie $C$ » ($B \\cap C = \\emptyset$).\n' +
              '• **Déduction rigoureuse** : est-il possible qu’un client appartienne à la fois à $A$ et à $C$ ? Supposons par l’absurde qu’il existe $x \\in A \\cap C$. Alors $x \\in A$ et $x \\in C$. Or $A \\subset B$, donc $x \\in B$. On obtient $x \\in B \\cap C$, ce qui contredit $B \\cap C = \\emptyset$ !\n' +
              '• **Conclusion** : $A \\cap C = \\emptyset$ — aucun client ne peut être simultanément dans $A$ et dans $C$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p1_q6',
              type: 'mcq',
              prompt: 'Si trois ensembles $A, B, C$ vérifient $A \\subset B$ et $B \\cap C = \\emptyset$, quelle proposition est nécessairement vraie ?',
              options: [
                '$A \\cup C = B$',
                '$A \\cap C = \\emptyset$',
                '$C \\subset A$',
                '$A = B$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Puisque $A \\subset B$, on a $A \\cap C \\subset B \\cap C = \\emptyset$, d’où nécessairement $A \\cap C = \\emptyset$.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch4_p2',
        order: 2,
        title: 'Applications : image directe/réciproque, injection, surjection et bijection',
        summary:
          'Maîtriser la définition d’une application, distinguer image directe et réciproque, et caractériser injection, surjection, bijection et réciproque f⁻¹.',
        conceptExplanation:
          'Une **application** $f : E \\to F$ associe à **chaque** élément $x$ de l’ensemble de départ $E$ **un unique** élément $y = f(x)$ de l’ensemble d’arrivée $F$ (son image). On appelle $x$ un antécédent de $y$.\n\n' +
          'Trois propriétés fondamentales classent les applications selon le nombre d’antécédents de chaque élément $y \\in F$ :\n' +
          '• **Injective** : tout $y \\in F$ possède **au plus un** antécédent dans $E$, soit $\\forall x_1, x_2 \\in E,\\ f(x_1) = f(x_2) \\implies x_1 = x_2$ (ou par contraposée $x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$).\n' +
          '• **Surjective** : tout $y \\in F$ possède **au moins un** antécédent dans $E$, soit $\\forall y \\in F,\\ \\exists x \\in E,\\ f(x) = y$ (équivalent à $f(E) = F$).\n' +
          '• **Bijective** : à la fois injective et surjective — tout $y \\in F$ possède **exactement un** antécédent ($\\forall y \\in F,\\ \\exists! x \\in E,\\ f(x) = y$). Une bijection admet une **application réciproque** unique $f^{-1} : F \\to E$.',
        formulas: [
          {
            name: 'Injection, surjection, bijection',
            formula: '\\text{Inj. : } f(x_1) = f(x_2) \\implies x_1 = x_2 \\quad ; \\quad \\text{Surj. : } \\forall y \\in F,\\ \\exists x \\in E,\\ y = f(x) \\quad ; \\quad \\text{Bij. : } \\forall y \\in F,\\ \\exists! x \\in E,\\ y = f(x)',
            note: 'Attention : injectivité et surjectivité dépendent crucialement des ensembles de départ E et d’arrivée F !',
          },
          {
            name: 'Bijection réciproque et composition',
            formula: 'f^{-1} \\circ f = \\mathrm{id}_E, \\qquad f \\circ f^{-1} = \\mathrm{id}_F, \\qquad (g \\circ f)^{-1} = f^{-1} \\circ g^{-1}',
            note: 'Remarquez l’inversion de l’ordre dans la réciproque d’une composée (règle des « chaussettes et chaussures »).',
          },
        ],
        keyRule:
          'Nombre d’antécédents de tout $y \\in F$ : **au plus 1** = Injective ; **au moins 1** = Surjective ; **exactement 1** = Bijective.',
        workedExample: {
          title: 'Étude de la bijectivité de $f(x) = 3x - 5$ et calcul de $f^{-1}$',
          statement:
            'Montrer que l’application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = 3x - 5$ est bijective et expliciter sa bijection réciproque $f^{-1}$.',
          methodSteps: [
            'Soit $y \\in \\mathbb{R}$ fixé. Résolvons l’équation $f(x) = y$ d’inconnue $x \\in \\mathbb{R}$.',
            '$3x - 5 = y \\iff 3x = y + 5 \\iff x = \\frac{y + 5}{3}$.',
            'Pour chaque $y \\in \\mathbb{R}$, l’équation $f(x) = y$ admet une **unique** solution $x = \\frac{y + 5}{3} \\in \\mathbb{R}$ : cela prouve simultanément l’injectivité et la surjectivité (donc la bijectivité) !',
            'On lit directement l’expression de la réciproque : $f^{-1}(y) = \\frac{y + 5}{3}$.',
          ],
          conclusion:
            '$f$ est bijective de $\\mathbb{R}$ dans $\\mathbb{R}$, de réciproque $f^{-1} : x \\mapsto \\frac{x + 5}{3}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Application',
            stepTheme: 'blue',
            stepTitle: 'Définition d’une application, égalité et composition $g \\circ f$',
            paragraphText:
              'Une application $f : E \\to F$ est une correspondance qui associe à **tout** $x \\in E$ **un et un seul** élément $f(x) \\in F$.\n' +
              '• **Ce qui n’est PAS une application** : si un élément de $E$ n’a pas d’image (ex. $x \\mapsto 1/x$ n’est pas une application de $\\mathbb{R}$ dans $\\mathbb{R}$ à cause de $0$), ou si un élément de $E$ possède deux images distinctes.\n' +
              '• **Égalité de deux applications** : $f = g$ exige **trois** conditions : même ensemble de départ $E$, même ensemble d’arrivée $F$, et $\\forall x \\in E,\\ f(x) = g(x)$.\n' +
              '• **Composition ($g \\circ f$)** : si $f : E \\to F$ et $g : F \\to G$, alors $(g \\circ f)(x) = g(f(x))$. On applique d’abord $f$, puis $g$ ! Attention : en général, $g \\circ f \\neq f \\circ g$ (la composition n’est pas commutative).',
            konanTip:
              'Lis $g \\circ f$ de **droite à gauche** (« $g$ rond $f$ » = d’abord $f$, ensuite $g$). Vérifie toujours que $f(x)$ tombe dans l’ensemble de départ de $g$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Soient $f(x) = x + 2$ et $g(x) = x^2$ définies sur $\\mathbb{R}$. Que valent respectivement $(g \\circ f)(3)$ et $(f \\circ g)(3)$ ?',
              options: [
                '$(g \\circ f)(3) = 25$ et $(f \\circ g)(3) = 11$.',
                '$(g \\circ f)(3) = 11$ et $(f \\circ g)(3) = 25$.',
                'Les deux valent $25$.',
                'Les deux valent $11$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$(g \\circ f)(3) = g(f(3)) = g(5) = 25$, alors que $(f \\circ g)(3) = f(g(3)) = f(9) = 11$. Cela illustre la non-commutativité de la composition.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Images',
            stepTheme: 'blue',
            stepTitle: 'Image directe $f(A)$ et image réciproque $f^{-1}(B)$ d’une partie',
            paragraphText:
              'Pour $f : E \\to F$, on étend $f$ aux sous-ensembles de $E$ et de $F$ grâce à deux notions fondamentales (à ne pas confondre avec la bijection réciproque !).\n' +
              '• **Image directe d’une partie $A \\subset E$** : $f(A) = \\{f(x) \\mid x \\in A\\} \\subset F$ (l’ensemble des images des éléments de $A$).\n' +
              '• **Image réciproque d’une partie $B \\subset F$** : $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\} \\subset E$ (l’ensemble de tous les antécédents des éléments de $B$ ; elle existe **toujours**, même si $f$ n’est pas bijective !).\n' +
              '• **Comportement remarquable** : l’image réciproque respecte TOUTES les opérations ($f^{-1}(B_1 \\cup B_2) = f^{-1}(B_1) \\cup f^{-1}(B_2)$ et $f^{-1}(B_1 \\cap B_2) = f^{-1}(B_1) \\cap f^{-1}(B_2)$), tandis que pour l’image directe on a seulement $f(A_1 \\cap A_2) \\subset f(A_1) \\cap f(A_2)$ (égalité garantie seulement si $f$ est injective).',
            formula: {
              name: 'Image directe et image réciproque',
              formula: 'f(A) = \\{f(x) \\mid x \\in A\\} \\subset F, \\qquad f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\} \\subset E',
              note: 'Exemple pour f(x) = x² sur ℝ : f([-1, 2]) = [0, 4] et f⁻¹({4}) = {-2, 2}, f⁻¹([-5, -1]) = ∅.',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p2_q2',
              type: 'mcq',
              prompt: 'Soit $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^2$. Quelle est l’image réciproque $f^{-1}([1, 9])$ ?',
              options: [
                '$[1, 3]$ uniquement.',
                '$[-3, -1] \\cup [1, 3]$',
                '$[1, 81]$',
                '$\\emptyset$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On cherche tous les $x \\in \\mathbb{R}$ tels que $1 \\le x^2 \\le 9$, soit $1 \\le |x| \\le 3$, ce qui donne $x \\in [-3, -1] \\cup [1, 3]$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Injection',
            stepTheme: 'blue',
            stepTitle: 'Application injective : absence de collision d’images',
            paragraphText:
              'En informatique, une fonction de hachage sans collision ou une attribution de matricules uniques est une **injection**.\n' +
              '• **Définition** : $f : E \\to F$ est injective si deux éléments distincts de $E$ ont toujours des images distinctes dans $F$ : $\\forall x_1, x_2 \\in E,\\ x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$.\n' +
              '• **Forme pratique (contraposée)** : pour démontrer l’injectivité, on préfère presque toujours utiliser la contraposée : « Soient $x_1, x_2 \\in E$ tels que $f(x_1) = f(x_2)$. Montrons que $x_1 = x_2$. »\n' +
              '• **Pour prouver la non-injectivité** : il suffit d’exhiber un contre-exemple $x_1 \\neq x_2$ vérifiant $f(x_1) = f(x_2)$ (ex. pour $f(x) = x^2$ sur $\\mathbb{R}$, $f(-2) = f(2) = 4$ avec $-2 \\neq 2$, donc $f$ n’est pas injective).',
            keyRule:
              'Réflexe d’examen : pour prouver que $f$ est injective, commence toujours par « **Soient $x_1, x_2 \\in E$ tels que $f(x_1) = f(x_2)$** » et déduis $x_1 = x_2$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p2_q3',
              type: 'mcq',
              prompt: 'Parmi les applications suivantes définies de $\\mathbb{R}$ dans $\\mathbb{R}$, laquelle est **injective** ?',
              options: [
                '$f(x) = x^2 + 1$',
                '$g(x) = |x|$',
                '$h(x) = 4x - 7$',
                '$k(x) = \\cos(x)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour $h(x) = 4x - 7$ : $h(x_1) = h(x_2) \\implies 4x_1 - 7 = 4x_2 - 7 \\implies x_1 = x_2$, donc $h$ est injective. Pour les trois autres, $(-1)$ et $1$ (ou $0$ et $2\\pi$) ont la même image.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Surjection',
            stepTheme: 'blue',
            stepTitle: 'Application surjective : tout élément d’arrivée est atteint',
            paragraphText:
              'La **surjectivité** garantit que l’ensemble d’arrivée $F$ est intégralement couvert par les images de $E$ (aucun élément de $F$ n’est « orphelin »).\n' +
              '• **Définition** : $f : E \\to F$ est surjective si $\\forall y \\in F,\\ \\exists x \\in E,\\ f(x) = y$, autrement dit $f(E) = F$.\n' +
              '• **Méthode de preuve** : fixer un $y \\in F$ quelconque et trouver (en fonction de $y$) au moins un $x \\in E$ tel que $f(x) = y$.\n' +
              '• **Rôle crucial de l’ensemble d’arrivée $F$** : l’application $f_1 : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$ n’est **pas** surjective (car $y = -1 \\in \\mathbb{R}$ n’a aucun antécédent réel), mais $f_2 : \\mathbb{R} \\to \\mathbb{R}_+,\\ x \\mapsto x^2$ **est** surjective (pour tout $y \\ge 0$, $x = \\sqrt{y}$ convient) !',
            konanTip:
              'Pour réfuter la surjectivité d’une application $f : E \\to F$, cherche un $y_0 \\in F$ impossible à atteindre (souvent un nombre négatif pour un carré ou une exponentielle, ou $0$ pour $1/x$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p2_q4',
              type: 'mcq',
              prompt: 'Pourquoi l’application $f : \\mathbb{Z} \\to \\mathbb{Z}$ définie par $f(n) = 2n$ est-elle injective mais **non surjective** ?',
              options: [
                'Parce que $f(1) = f(-1)$.',
                'Parce que tout entier impair (ex. $y = 3 \\in \\mathbb{Z}$) n’a aucun antécédent entier $n \\in \\mathbb{Z}$ vérifiant $2n = 3$.',
                'Parce que $0$ n’a pas d’antécédent.',
                'Parce que $\\mathbb{Z}$ est un ensemble fini.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$2n_1 = 2n_2 \\implies n_1 = n_2$ (injective). Mais $f(\\mathbb{Z}) = 2\\mathbb{Z} \\neq \\mathbb{Z}$ : aucun entier $n$ ne vérifie $2n = 3$, donc $f$ n’est pas surjective.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Bijection & f⁻¹',
            stepTheme: 'violet',
            stepTitle: 'Bijection, application réciproque $f^{-1}$ et règle de composition',
            paragraphText:
              'Une **bijection** établit une correspondance parfaite un-à-un entre $E$ et $F$ (en cryptographie, tout algorithme de chiffrement réversible doit être bijectif pour permettre le déchiffrement !).\n' +
              '• **Théorème caractéristique** : $f : E \\to F$ est bijective si et seulement si il existe une application $g : F \\to E$ telle que $g \\circ f = \\mathrm{id}_E$ et $f \\circ g = \\mathrm{id}_F$. Cette application $g$ est unique et notée $f^{-1}$.\n' +
              '• **Propriété de cardinalité (ensembles finis)** : s’il existe une bijection entre deux ensembles finis $E$ et $F$, alors $|E| = |F|$. De plus, si $|E| = |F| < \\infty$, alors pour $f : E \\to F$, injective $\\iff$ surjective $\\iff$ bijective !\n' +
              '• **Réciproque d’une composée** : si $f : E \\to F$ et $g : F \\to G$ sont bijectives, alors $g \\circ f$ est bijective et $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.',
            keyRule:
              'Pour inverser deux opérations successives $g \\circ f$, on défait d’abord la dernière ($g^{-1}$) puis la première ($f^{-1}$) : $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p2_q5',
              type: 'mcq',
              prompt: 'Soient $f : \\mathbb{R} \\to \\mathbb{R}$ ($f(x) = 2x$) et $g : \\mathbb{R} \\to \\mathbb{R}$ ($g(x) = x + 3$). Quelle est l’expression de $(g \\circ f)^{-1}(y)$ ?',
              options: [
                '$\\frac{y}{2} - 3$',
                '$\\frac{y - 3}{2}$',
                '$2y - 3$',
                '$2(y - 3)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $(g \\circ f)(x) = 2x + 3$. En inversant $y = 2x + 3$, on obtient $x = \\frac{y - 3}{2}$. Par la formule : $(f^{-1} \\circ g^{-1})(y) = f^{-1}(y - 3) = \\frac{y - 3}{2}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Étude complète',
            stepTheme: 'slate',
            stepTitle: 'Adapter les ensembles de départ et d’arrivée pour rendre $x \\mapsto x^2$ bijective',
            paragraphText:
              'Une même formule algébrique $x \\mapsto x^2$ peut avoir les 4 statuts possibles selon les ensembles choisis — un piège classique aux partiels de L1 !\n' +
              '• $f_1 : \\mathbb{R} \\to \\mathbb{R}$ : **ni injective** ($f_1(-2) = f_1(2)$) **ni surjective** ($-1$ sans antécédent).\n' +
              '• $f_2 : \\mathbb{R}_+ \\to \\mathbb{R}$ : **injective** ($x_1, x_2 \\ge 0$ et $x_1^2 = x_2^2 \\implies x_1 = x_2$) mais **non surjective** ($-1$ sans antécédent).\n' +
              '• $f_3 : \\mathbb{R} \\to \\mathbb{R}_+$ : **non injective** mais **surjective** (tout $y \\ge 0$ a pour antécédent $\\sqrt{y}$).\n' +
              '• $f_4 : \\mathbb{R}_+ \\to \\mathbb{R}_+$ : **bijective** ! Sa bijection réciproque est $f_4^{-1}(y) = \\sqrt{y}$.',
            konanTip:
              'Ne réponds JAMAIS à une question sur l’injectivité ou la surjectivité d’une formule $f(x)$ sans avoir d’abord regardé attentivement la flèche $E \\to F$ !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p2_q6',
              type: 'mcq',
              prompt: 'Considérons l’application $f : \\mathbb{R} \\setminus \\{1\\} \\to \\mathbb{R} \\setminus \\{2\\}$ définie par $f(x) = \\frac{2x + 1}{x - 1}$. Quelle est l’expression de sa réciproque $f^{-1}(y)$ ?',
              options: [
                '$f^{-1}(y) = \\frac{y + 1}{y - 2}$',
                '$f^{-1}(y) = \\frac{y - 1}{y + 2}$',
                '$f^{-1}(y) = \\frac{2y + 1}{y - 1}$',
                '$f$ n’est pas bijective.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $y \\neq 2$, résolvons $y = \\frac{2x + 1}{x - 1} \\iff y(x - 1) = 2x + 1 \\iff x(y - 2) = y + 1 \\iff x = \\frac{y + 1}{y - 2}$ (qui est bien $\\neq 1$ car $y + 1 = y - 2$ est impossible). Donc $f^{-1}(y) = \\frac{y + 1}{y - 2}$.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_logique_ch4_p3',
        order: 3,
        title: 'Relations binaires, propriétés remarquables et relations d’équivalence',
        summary:
          'Analyser réflexivité, symétrie, antisymétrie et transitivité d’une relation binaire, caractériser une relation d’équivalence et construire les classes d’équivalence et partitions.',
        conceptExplanation:
          'Une **relation binaire** $\\mathcal{R}$ sur un ensemble $E$ est définie par la donnée d’un sous-ensemble $G \\subset E \\times E$ (son graphe) : on écrit $x\\mathcal{R}y$ lorsque $(x, y) \\in G$. Elle se représente par un **diagramme sagittal** (flèches), un **diagramme cartésien** ou une **matrice binaire** ($0$ ou $1$).\n\n' +
          'Quatre propriétés structurent toutes les relations binaires :\n' +
          '• **Réflexive** : $\\forall x \\in E,\\ x\\mathcal{R}x$ (une boucle sur chaque sommet).\n' +
          '• **Symétrique** : $\\forall x, y \\in E,\\ x\\mathcal{R}y \\implies y\\mathcal{R}x$ (toute flèche est à double sens).\n' +
          '• **Antisymétrique** : $\\forall x, y \\in E,\\ (x\\mathcal{R}y \\land y\\mathcal{R}x) \\implies x = y$ (jamais d’aller-retour entre deux éléments distincts).\n' +
          '• **Transitive** : $\\forall x, y, z \\in E,\\ (x\\mathcal{R}y \\land y\\mathcal{R}z) \\implies x\\mathcal{R}z$.\n\n' +
          'Une **relation d’équivalence** ($\\sim$) est une relation **réflexive, symétrique et transitive**. Elle découpe exactement $E$ en **classes d’équivalence** $\\bar{x} = \\{y \\in E \\mid x \\sim y\\}$ qui forment une **partition** de $E$ (sous-ensembles non vides, deux à deux disjoints et dont la réunion vaut $E$).',
        formulas: [
          {
            name: 'Relation d’équivalence et classe d’équivalence',
            formula: '\\text{Équivalence} = \\text{Réflexive} + \\text{Symétrique} + \\text{Transitive} \\qquad ; \\qquad \\bar{x} = \\{y \\in E \\mid x \\sim y\\}',
            note: 'Deux classes d’équivalence sont soit confondues (si x ∼ y), soit totalement disjointes (si x ≁ y).',
          },
          {
            name: 'Congruence modulo n sur ℤ',
            formula: 'a \\equiv b \\pmod{n} \\iff n \\mid (a - b) \\iff \\exists k \\in \\mathbb{Z},\\ a - b = kn',
            note: 'Relation d’équivalence fondamentale : l’ensemble quotient ℤ/nℤ possède exactement n classes {0̄, 1̄, …, (n−1)̄}.',
          },
        ],
        keyRule:
          'Théorème fondamental : **toute relation d’équivalence sur $E$ définit une partition de $E$** (ses classes d’équivalence), et réciproquement toute partition de $E$ (« appartenir au même groupe ») définit une relation d’équivalence !',
        workedExample: {
          title: 'Relation « même code promo » sur un catalogue e-commerce',
          statement:
            'Sur un catalogue de produits $P$, on définit la relation $x \\sim y \\iff « x \\text{ et } y \\text{ bénéficient du même code promo} »$. Démontrer que $\\sim$ est une relation d’équivalence et décrire ses classes d’équivalence.',
          methodSteps: [
            '**Réflexivité** : tout produit $x \\in P$ possède évidemment le même code promo que lui-même $\\implies x \\sim x$.',
            '**Symétrie** : si $x$ a le même code promo que $y$, alors $y$ a le même code promo que $x$ $\\implies (x \\sim y \\implies y \\sim x)$.',
            '**Transitivité** : si $x$ et $y$ ont le même code $c$, et $y$ et $z$ ont le même code (donc nécessairement $c$), alors $x$ et $z$ partagent le code $c$ $\\implies x \\sim z$.',
            '**Classes d’équivalence** : la classe $\\bar{x}$ est l’ensemble de tous les produits du catalogue associés au même code promo que $x$.',
          ],
          conclusion:
            '$\\sim$ est une relation d’équivalence qui partitionne le catalogue en groupes homogènes par code promotionnel.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Représentation',
            stepTheme: 'blue',
            stepTitle: 'Relation binaire, graphe, matrice binaire et diagramme sagittal',
            paragraphText:
              'Une relation binaire $\\mathcal{R}$ sur $E$ formalise tout lien entre paires d’objets : « divise », « a le même reste modulo $2$ », « est ami avec », « précède ».\n' +
              '• **Graphe** : sous-ensemble $G = \\{(x, y) \\in E^2 \\mid x\\mathcal{R}y\\}$.\n' +
              '• **Matrice binaire** : sur un ensemble fini $E = \\{e_1, \\dots, e_n\\}$, on met $M_{ij} = 1$ si $e_i\\mathcal{R}e_j$ et $0$ sinon (réflexive $\\iff$ diagonale pleine de $1$ ; symétrique $\\iff$ matrice symétrique $M^T = M$).\n' +
              '• **Diagramme sagittal** : chaque élément est un sommet et chaque couple $(x, y) \\in G$ est une flèche $x \\to y$.\n' +
              'Observe ci-dessous le diagramme sagittal de la congruence modulo $2$ sur $E = \\{1, 2, 3, 4, 5\\}$ : il découpe visuellement $E$ en deux îlots complets disjoints !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Diagramme sagittal : congruence modulo 2 sur E = {1, 2, 3, 4, 5}',
              caption: 'Deux classes d’équivalence disjointes apparaissent naturellement : les impairs {1, 3, 5} et les pairs {2, 4}.',
              svgContent:
                '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="10" y="10" width="400" height="200" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>' +
                '<rect x="24" y="26" width="214" height="168" rx="14" fill="#EFF6FF" stroke="#3B82F6" stroke-dasharray="5 4" stroke-width="2"/>' +
                '<text x="131" y="45" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">Classe 1̄ (Impairs : {1, 3, 5})</text>' +
                '<rect x="254" y="26" width="142" height="168" rx="14" fill="#ECFDF5" stroke="#10B981" stroke-dasharray="5 4" stroke-width="2"/>' +
                '<text x="325" y="45" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">Classe 0̄ (Pairs : {2, 4})</text>' +
                '<line x1="74" y1="90" x2="188" y2="90" stroke="#2563EB" stroke-width="2"/>' +
                '<line x1="74" y1="90" x2="131" y2="160" stroke="#2563EB" stroke-width="2"/>' +
                '<line x1="188" y1="90" x2="131" y2="160" stroke="#2563EB" stroke-width="2"/>' +
                '<line x1="325" y1="86" x2="325" y2="156" stroke="#059669" stroke-width="2.2"/>' +
                '<circle cx="62" cy="76" r="11" fill="none" stroke="#60A5FA" stroke-width="1.6"/>' +
                '<circle cx="200" cy="76" r="11" fill="none" stroke="#60A5FA" stroke-width="1.6"/>' +
                '<circle cx="131" cy="175" r="11" fill="none" stroke="#60A5FA" stroke-width="1.6"/>' +
                '<circle cx="342" cy="76" r="11" fill="none" stroke="#34D399" stroke-width="1.6"/>' +
                '<circle cx="342" cy="166" r="11" fill="none" stroke="#34D399" stroke-width="1.6"/>' +
                '<circle cx="74" cy="90" r="16" fill="#2563EB"/><text x="74" y="95" text-anchor="middle" font-size="13" font-weight="700" fill="#FFFFFF">1</text>' +
                '<circle cx="188" cy="90" r="16" fill="#2563EB"/><text x="188" y="95" text-anchor="middle" font-size="13" font-weight="700" fill="#FFFFFF">3</text>' +
                '<circle cx="131" cy="160" r="16" fill="#2563EB"/><text x="131" y="165" text-anchor="middle" font-size="13" font-weight="700" fill="#FFFFFF">5</text>' +
                '<circle cx="325" cy="86" r="16" fill="#059669"/><text x="325" y="91" text-anchor="middle" font-size="13" font-weight="700" fill="#FFFFFF">2</text>' +
                '<circle cx="325" cy="156" r="16" fill="#059669"/><text x="325" y="161" text-anchor="middle" font-size="13" font-weight="700" fill="#FFFFFF">4</text>' +
                '</svg>',
            },
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p3_q1',
              type: 'mcq',
              prompt: 'Comment reconnaît-on immédiatement sur la **matrice binaire** $M$ d’une relation $\\mathcal{R}$ sur un ensemble fini que $\\mathcal{R}$ est **réflexive** ?',
              options: [
                'Tous les coefficients de la matrice valent $1$.',
                'Tous les coefficients situés sur la diagonale principale ($M_{ii}$) valent $1$.',
                'La diagonale principale ne contient que des $0$.',
                'La matrice comporte autant de $0$ que de $1$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La réflexivité signifie $\\forall i,\\ e_i \\mathcal{R} e_i$, ce qui se traduit exactement par $M_{ii} = 1$ sur toute la diagonale principale.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Les 4 propriétés',
            stepTheme: 'blue',
            stepTitle: 'Maîtriser les 4 propriétés : réflexivité, symétrie, antisymétrie et transitivité',
            paragraphText:
              'Avant de classer une relation binaire, il faut tester ses quatre propriétés fondamentales sans aucune confusion de vocabulaire.\n' +
              '• **Réflexive** : $\\forall x \\in E,\\ x\\mathcal{R}x$. (Ex. $\\le$ est réflexive ; $<$ ne l’est pas !)\n' +
              '• **Symétrique** : $\\forall x, y \\in E,\\ x\\mathcal{R}y \\implies y\\mathcal{R}x$. (Ex. « être parallèle à », « avoir la même taille ».)\n' +
              '• **Antisymétrique** : $\\forall x, y \\in E,\\ (x\\mathcal{R}y \\land y\\mathcal{R}x) \\implies x = y$. Attention : **antisymétrique n’est PAS le contraire de symétrique** ! La relation d’égalité ($=$) est à la fois symétrique ET antisymétrique !\n' +
              '• **Transitive** : $\\forall x, y, z \\in E,\\ (x\\mathcal{R}y \\land y\\mathcal{R}z) \\implies x\\mathcal{R}z$. (Ex. $\\le$, $\\subset$, « avoir la même zone géographique ».)',
            keyRule:
              'Piège classique : « antisymétrique » ne signifie PAS « non symétrique » ! L’égalité ($=$) est simultanément symétrique et antisymétrique, et certaines relations ne sont ni l’une ni l’autre.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p3_q2',
              type: 'mcq',
              prompt: 'Sur $\\mathbb{R}$, la relation d’égalité ($x\\mathcal{R}y \\iff x = y$) possède lesquelles des propriétés suivantes ?',
              options: [
                'Réflexive et symétrique, mais pas antisymétrique.',
                'Réflexive, antisymétrique et transitive, mais pas symétrique.',
                'Réflexive, symétrique, antisymétrique et transitive (elle est à la fois une équivalence et un ordre !).',
                'Aucune de ces propriétés.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour l’égalité : $x = x$ (réflexive), $x = y \\implies y = x$ (symétrique), $(x = y \\land y = x) \\implies x = y$ (antisymétrique), et $(x = y \\land y = z) \\implies x = z$ (transitive).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Équivalence',
            stepTheme: 'blue',
            stepTitle: 'Relation d’équivalence : définition et exemples canoniques',
            paragraphText:
              'Une relation binaire $\\sim$ sur $E$ est une **relation d’équivalence** si et seulement si elle est simultanément **réflexive, symétrique et transitive**.\n' +
              '• **Idée intuitive** : une relation d’équivalence généralise la notion d’égalité « à un critère près » ($x \\sim y \\iff f(x) = f(y)$ pour une certaine fonction de classement $f$).\n' +
              '• **Exemples fondamentaux** :\n' +
              '  1. Répartition géographique des clients : $x \\sim y \\iff « x \\text{ et } y \\text{ habitent la même commune} »$.\n' +
              '  2. Congruence modulo $n$ sur $\\mathbb{Z}$ : $a \\equiv b \\pmod n \\iff n$ divise $(a - b)$ (même reste dans la division euclidienne par $n$).\n' +
              '  3. Parallélisme des droites du plan ; équipollence des vecteurs ; égalité de fractions ($a/b = c/d \\iff ad = bc$).',
            konanTip:
              'Astuce redoutable : toute relation de la forme « $x \\sim y \\iff f(x) = f(y)$ » (même commune, même code promo, même âge, même reste modulo $n$) est AUTOMATIQUEMENT une relation d’équivalence !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p3_q3',
              type: 'mcq',
              prompt: 'Parmi les relations suivantes, laquelle est une **relation d’équivalence** ?',
              options: [
                'Sur $\\mathbb{R}$ : $x\\mathcal{R}y \\iff x \\le y$.',
                'Sur un ensemble de clients : $x\\mathcal{R}y \\iff x$ et $y$ résident dans la même commune d’Abidjan.',
                'Sur l’ensemble des droites du plan : $D_1 \\mathcal{R} D_2 \\iff D_1 \\perp D_2$ (perpendicularité).',
                'Sur $\\mathbb{N}^*$ : $a\\mathcal{R}b \\iff a$ divise $b$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Résider dans la même commune » est de la forme $\\text{Commune}(x) = \\text{Commune}(y)$, donc réflexive, symétrique et transitive. Les options (A) et (D) ne sont pas symétriques ; la perpendicularité (C) n’est ni réflexive ni transitive.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Classes & Partition',
            stepTheme: 'violet',
            stepTitle: 'Classes d’équivalence, ensemble quotient et théorème de partition',
            paragraphText:
              'La grande puissance d’une relation d’équivalence $\\sim$ sur $E$ est qu’elle range proprement les éléments de $E$ dans des tiroirs étanches sans aucun doublon ni oubli.\n' +
              '• **Classe d’équivalence de $x$** : $\\bar{x} = \\{y \\in E \\mid x \\sim y\\}$. Par réflexivité, $x \\in \\bar{x}$, donc aucune classe n’est vide.\n' +
              '• **Propriété fondamentale** : pour tous $x, y \\in E$, on a $x \\sim y \\iff \\bar{x} = \\bar{y}$, et $x \\not\\sim y \\iff \\bar{x} \\cap \\bar{y} = \\emptyset$.\n' +
              '• **Partition de $E$** : une famille de sous-ensembles $\\{A_i\\}_{i \\in I}$ est une partition de $E$ si (1) chaque $A_i \\neq \\emptyset$, (2) ils sont deux à deux disjoints ($i \\neq j \\implies A_i \\cap A_j = \\emptyset$), et (3) $\\bigcup_{i \\in I} A_i = E$.\n' +
              '• **Ensemble quotient ($E / \\!\\sim$)** : ensemble de toutes les classes d’équivalence distinctes. Exemple : pour la zone géographique, la classe d’un client habitant Cocody est l’ensemble de tous les clients habitant Cocody.',
            keyRule:
              'Deux classes d’équivalence ne se chevauchent JAMAIS partiellement : elles sont soit **strictement identiques**, soit **totalement disjointes** !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p3_q4',
              type: 'mcq',
              prompt: 'Soit $E = \\{a, b, c, d, e, f\\}$. Quelle famille de sous-ensembles forme une **partition** de $E$ ?',
              options: [
                '$A = \\{a\\},\\ B = \\{b, c, f\\},\\ C = \\{b, d, e\\}$',
                '$A = \\{a\\},\\ B = \\{b, c, f\\},\\ C = \\{d, e\\}$',
                '$A = \\{a, b\\},\\ B = \\{c, d\\},\\ C = \\emptyset$',
                '$A = \\{a, b\\},\\ B = \\{c, d, e\\}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans (B), les trois parties sont non vides, deux à deux disjointes, et leur réunion vaut exactement $\\{a, b, c, d, e, f\\}$. (A) a un recouvrement ($b$), (C) contient $\\emptyset$ et oublie $e, f$, et (D) oublie $f$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Contre-exemples',
            stepTheme: 'orange',
            stepTitle: 'Relations faussement intuitives qui échouent à la transitivité',
            paragraphText:
              'Dans la vie quotidienne et en économie, de nombreuses relations symétriques ne sont PAS des relations d’équivalence parce que la **transitivité échoue** !\n' +
              '• **Exemple 1 — « Avoir acheté au moins un produit en commun »** : sur des clients, cette relation est réflexive (si chacun a acheté au moins 1 produit) et symétrique. Mais elle n’est **pas transitive** : Aya et Yao ont tous deux acheté un smartphone ($P_1$), Yao et Koffi ont tous deux acheté un casque audio ($P_2$), sans qu’Aya et Koffi n’aient aucun produit commun !\n' +
              '• **Exemple 2 — « Être un concurrent direct de »** : sur des entreprises, si $A$ concurrence directement $B$, alors $B$ concurrence $A$ (symétrique). Mais une entreprise n’est pas son propre concurrent (non réflexive), et si un supermarché ($B$) concurrence une boulangerie ($A$) et une boutique high-tech ($C$), $A$ et $C$ ne sont pas concurrents directs (non transitive) !',
            konanTip:
              'Pour tester la transitivité d’une relation concrète, essaie toujours de construire un « pont » $x \\mathcal{R} y$ et $y \\mathcal{R} z$ où $y$ joue le rôle d’intermédiaire polyvalent reliant deux extrêmes $x$ et $z$ sans lien direct !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p3_q5',
              type: 'mcq',
              prompt: 'Sur un ensemble de clients ayant chacun effectué au moins un achat, on pose $x\\mathcal{R}y \\iff « x \\text{ et } y \\text{ ont acheté au moins un produit en commun} »$. Quelle propriété **échoue** ?',
              options: [
                'La réflexivité.',
                'La symétrie.',
                'La transitivité.',
                'Aucune : c’est une relation d’équivalence.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$x$ peut partager le produit $P_1$ avec $y$, et $y$ partager le produit $P_2$ avec $z$, sans que $x$ et $z$ ne partagent aucun produit : la transitivité échoue.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Congruence mod 3',
            stepTheme: 'slate',
            stepTitle: 'Étude complète de la congruence modulo $3$ sur $\\mathbb{Z}$',
            paragraphText:
              'Appliquons tout le formalisme des relations d’équivalence à la congruence modulo $3$ sur $\\mathbb{Z}$, définie par $a \\equiv b \\pmod 3 \\iff 3 \\mid (a - b)$.\n' +
              '• **Réflexivité** : $a - a = 0 = 3 \\times 0$, donc $3 \\mid (a - a)$.\n' +
              '• **Symétrie** : si $a - b = 3k$, alors $b - a = 3(-k)$ avec $-k \\in \\mathbb{Z}$.\n' +
              '• **Transitivité** : si $a - b = 3k$ et $b - c = 3k’$, en additionnant on obtient $a - c = 3(k + k’)$.\n' +
              '• **Les 3 classes d’équivalence** (partitionnant $\\mathbb{Z}$ selon le reste de la division par $3$) :\n' +
              '  – $\\bar{0} = \\{\\dots, -6, -3, 0, 3, 6, \\dots\\} = 3\\mathbb{Z}$\n' +
              '  – $\\bar{1} = \\{\\dots, -5, -2, 1, 4, 7, \\dots\\} = 3\\mathbb{Z} + 1$\n' +
              '  – $\\bar{2} = \\{\\dots, -4, -1, 2, 5, 8, \\dots\\} = 3\\mathbb{Z} + 2$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p3_q6',
              type: 'mcq',
              prompt: 'Dans l’ensemble quotient $\\mathbb{Z}/3\\mathbb{Z}$ (congruence modulo $3$), à quelle classe d’équivalence appartient l’entier $-4$ ?',
              options: [
                '$\\bar{0}$',
                '$\\bar{1}$',
                '$\\bar{2}$',
                'Aucune, car $-4$ est négatif.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On vérifie $(-4) - 2 = -6 = 3 \\times (-2)$, donc $3 \\mid (-4 - 2)$, c’est-à-dire $-4 \\equiv 2 \\pmod 3$ (division euclidienne : $-4 = 3 \\times (-2) + 2$). Donc $-4 \\in \\bar{2}$.',
            },
          },
        ],
      }),

      // POINT 4.4
      makePoint({
        id: 'lmd_entd_l1_logique_ch4_p4',
        order: 4,
        title: 'Relations d’ordre (partiel, total), éléments singuliers et bornes dans ℝ',
        summary:
          'Distinguer ordre partiel, ordre total et préordre, analyser des applications en gestion de projet et stratégie, et déterminer min, max, inf et sup dans ℝ.',
        conceptExplanation:
          'Une relation binaire $\\preceq$ sur $E$ est une **relation d’ordre** lorsqu’elle est **réflexive, antisymétrique et transitive**.\n\n' +
          '• **Ordre total** : deux éléments quelconques de $E$ sont toujours comparables : $\\forall x, y \\in E,\\ (x \\preceq y \\lor y \\preceq x)$. Exemple : $(\\mathbb{R}, \\le)$.\n' +
          '• **Ordre partiel** : il existe au moins une paire d’éléments **incomparables** (ni $x \\preceq y$, ni $y \\preceq x$). Exemples majeurs : l’**inclusion** $(\\mathcal{P}(E), \\subseteq)$, la **divisibilité** $(\\mathbb{N}^*, \\mid)$, l’**ordonnancement de tâches** en gestion de projet (graphe orienté acyclique / DAG) ou la **domination stratégique** Prix/Qualité.\n\n' +
          'Dans un ensemble ordonné $(E, \\preceq)$ — et en particulier pour une partie $A \\subset \\mathbb{R}$ — on distingue **majorant / minorant**, **plus grand élément ($\\max A$)** (qui doit appartenir à $A$), et **borne supérieure ($\\sup A$)** (le plus petit des majorants, qui peut ne pas appartenir à $A$).',
        formulas: [
          {
            name: 'Relation d’ordre et totalité',
            formula: '\\text{Ordre} = \\text{Réflexive} + \\text{Antisymétrique} + \\text{Transitive} \\qquad ; \\qquad \\text{Total} \\iff \\forall x, y \\in E,\\ (x \\preceq y \\lor y \\preceq x)',
            note: 'Si l’antisymétrie échoue (ex. Prix(x) ≤ Prix(y) avec deux produits au même prix), on obtient un préordre, pas un ordre !',
          },
          {
            name: 'Caractérisation de la borne supérieure dans ℝ',
            formula: 'M = \\sup(A) \\iff (\\forall x \\in A,\\ x \\le M) \\land (\\forall \\varepsilon > 0,\\ \\exists x \\in A,\\ M - \\varepsilon < x \\le M)',
            note: 'Si sup(A) ∈ A, alors sup(A) = max(A) ; sinon max(A) n’existe pas !',
          },
        ],
        keyRule:
          'Dans $\\mathbb{R}$, toute partie non vide majorée admet une **borne supérieure** $\\sup A$, mais elle n’admet un **maximum** $\\max A$ que si $\\sup A \\in A$ !',
        workedExample: {
          title: 'Domination stratégique Prix/Qualité et inclusion des options d’abonnement',
          statement:
            '1) Sur des offres stratégiques, on définit la domination $S_1 \\succeq S_2 \\iff (\\text{Prix}(S_1) \\le \\text{Prix}(S_2)) \\land (\\text{Qualité}(S_1) \\ge \\text{Qualité}(S_2))$. Est-ce un ordre total ou partiel ? 2) Montrer que l’inclusion $\\subseteq$ est une relation d’ordre sur $\\mathcal{P}(S)$ (services optionnels d’un abonnement).',
          methodSteps: [
            '1) Prenons $S_1 = (10\\,000\\text{ F},\\text{ Qualité } 7/10)$ et $S_2 = (15\\,000\\text{ F},\\text{ Qualité } 9/10)$. $S_1$ est moins chère mais moins qualitative que $S_2$ : ni $S_1 \\succeq S_2$ ni $S_2 \\succeq S_1$ ne sont vraies. La totalité échoue : c’est un **ordre partiel** (frontière de Pareto).',
            '2) Pour $\\subseteq$ sur $\\mathcal{P}(S)$ : Réflexive ($A \\subseteq A$), Antisymétrique ($A \\subseteq B \\land B \\subseteq A \\implies A = B$), Transitive ($A \\subseteq B \\land B \\subseteq C \\implies A \\subseteq C$).',
            'Si $|S| \\ge 2$ (ex. $S = \\{\\text{Cloud}, \\text{Support}\\}$), les singletons $\\{\\text{Cloud}\\}$ et $\\{\\text{Support}\\}$ ne sont inclus ni l’un dans l’autre : l’ordre est **partiel**.',
          ],
          conclusion:
            'L’inclusion sur $\\mathcal{P}(S)$ et la domination multicritère sont deux ordres partiels emblématiques de l’économie numérique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Relation d’ordre',
            stepTheme: 'blue',
            stepTitle: 'Définition d’une relation d’ordre : le triptyque Réflexive–Antisymétrique–Transitive',
            paragraphText:
              'Alors que la relation d’équivalence regroupe les éléments « semblables », la **relation d’ordre** hiérarchise les éléments d’un ensemble.\n' +
              '• **Les 3 axiomes** : $\\preceq$ est une relation d’ordre sur $E$ ssi elle est **réflexive** ($x \\preceq x$), **antisymétrique** ($x \\preceq y \\land y \\preceq x \\implies x = y$) et **transitive** ($x \\preceq y \\land y \\preceq z \\implies x \\preceq z$).\n' +
              '• **Exemples fondamentaux** :\n' +
              '  1. $(\\mathbb{R}, \\le)$ : ordre usuel sur les réels.\n' +
              '  2. $(\\mathcal{P}(E), \\subseteq)$ : inclusion des sous-ensembles.\n' +
              '  3. $(\\mathbb{N}^*, \\mid)$ : divisibilité ($a \\mid b \\iff \\exists k \\in \\mathbb{N}^*,\\ b = ka$). Attention : sur $\\mathbb{Z}$, la divisibilité n’est PAS antisymétrique car $2 \\mid (-2)$ et $(-2) \\mid 2$ avec $2 \\neq -2$ !',
            keyRule:
              'La seule différence axiomatique entre équivalence et ordre tient en un mot : **Symétrie** (équivalence) versus **Antisymétrie** (ordre) !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p4_q1',
              type: 'mcq',
              prompt: 'Pourquoi la relation de divisibilité ($a \\mid b$) est-elle une relation d’ordre sur $\\mathbb{N}^*$, mais **pas** sur $\\mathbb{Z}^*$ ?',
              options: [
                'Parce qu’elle n’est pas réflexive sur $\\mathbb{Z}^*$.',
                'Parce qu’elle échoue à l’antisymétrie sur $\\mathbb{Z}^*$ : par exemple $3 \\mid (-3)$ et $(-3) \\mid 3$, pourtant $3 \\neq -3$.',
                'Parce qu’elle n’est pas transitive sur $\\mathbb{Z}^*$.',
                'Parce que $0$ divise tout le monde dans $\\mathbb{Z}^*$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dans $\\mathbb{N}^*$, $a \\mid b$ et $b \\mid a$ impose $a = b$. Dans $\\mathbb{Z}^*$, cela impose seulement $|a| = |b|$, donc $a = -b$ est possible ($3$ et $-3$ se divisent mutuellement tout en étant distincts) : l’antisymétrie échoue.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Total vs Partiel',
            stepTheme: 'blue',
            stepTitle: 'Ordre total, ordre partiel, gestion de projet (DAG) et paradoxe de Condorcet',
            paragraphText:
              'Dans la réalité économique et technique, la plupart des classements naturels sont des **ordres partiels** plutôt que totaux.\n' +
              '• **Ordre total** : toute paire $(x, y)$ est comparable ($x \\preceq y$ ou $y \\preceq x$). Ex. $(\\mathbb{R}, \\le)$, ordre alphabétique (lexicographique) sur un dictionnaire.\n' +
              '• **Ordre partiel en gestion de projet** : si on pose $x \\preceq y \\iff « \\text{la tâche } x \\text{ doit précéder } y »$, deux tâches indépendantes réalisables en parallèle (ex. design graphique et configuration serveur) ne sont pas comparables — on modélise le projet par un graphe orienté acyclique (DAG).\n' +
              '• **Risque de non-transitivité (paradoxe de Condorcet)** : en agrégeant les préférences d’un groupe de consommateurs par vote majoritaire, on peut obtenir un cycle $A \\succ B$, $B \\succ C$ et pourtant $C \\succ A$ ! La transitivité échoue et aucun ordre collectif cohérent n’existe.',
            konanTip:
              'Pour prouver qu’un ordre est **partiel** (non total), il suffit d’exhiber UNE seule paire d’éléments incomparables (ex. $2$ et $3$ pour la divisibilité sur $\\mathbb{N}^*$, car $2 \\nmid 3$ et $3 \\nmid 2$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p4_q2',
              type: 'mcq',
              prompt: 'Pourquoi la relation de précédence « la tâche $x$ précède la tâche $y$ » dans un projet marketing est-elle généralement un **ordre partiel** (et non total) ?',
              options: [
                'Parce qu’elle n’est pas transitive.',
                'Parce que deux tâches indépendantes exécutables en parallèle ne sont pas comparables entre elles.',
                'Parce qu’une tâche peut précéder elle-même strictement.',
                'Parce qu’il y a toujours un nombre impair de tâches.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès que deux tâches peuvent s’exécuter en parallèle sans dépendance mutuelle, ni $x \\preceq y$ ni $y \\preceq x$ ne tient : la propriété de totalité n’est pas satisfaite, l’ordre est donc partiel.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège du préordre',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi $x\\mathcal{R}y \\iff \\text{Prix}(x) \\le \\text{Prix}(y)$ n’est PAS une relation d’ordre !',
            paragraphText:
              'Voici l’un des pièges les plus subtils des examens de logique appliquée à l’économie.\n' +
              '• **La relation** : sur un catalogue de produits, on compare les articles par leur prix : $x\\mathcal{R}y \\iff \\text{Prix}(x) \\le \\text{Prix}(y)$.\n' +
              '• **Réflexivité et transitivité** : vérifiées immédiatement ($\\text{Prix}(x) \\le \\text{Prix}(x)$, et $\\le$ sur $\\mathbb{R}$ est transitive).\n' +
              '• **Échec de l’antisymétrie** : supposons que deux articles **distincts** $x$ (une souris) et $y$ (un tapis de souris) coûtent tous deux $5\\,000$ F CFA. On a alors $\\text{Prix}(x) \\le \\text{Prix}(y)$ ($x\\mathcal{R}y$) ET $\\text{Prix}(y) \\le \\text{Prix}(x)$ ($y\\mathcal{R}x$), et pourtant **$x \\neq y$** !\n' +
              '• **Statut exact** : une relation réflexive et transitive (sans antisymétrie) s’appelle un **préordre**. Elle ne devient un ordre que sur l’ensemble quotient (ou si tous les prix sont strictement distincts).',
            keyRule:
              'Dès que deux objets distincts peuvent avoir la même note, le même prix ou la même taille, la relation « $f(x) \\le f(y)$ » échoue à l’antisymétrie : c’est un **préordre**, pas un ordre !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p4_q3',
              type: 'mcq',
              prompt: 'Sur un catalogue e-commerce, on définit $x\\mathcal{R}y \\iff \\text{Prix}(x) \\le \\text{Prix}(y)$. Si deux articles différents $x$ et $y$ coûtent exactement $10\\,000$ F CFA, quelle propriété de la relation d’ordre est mise en défaut ?',
              options: [
                'La réflexivité.',
                'La transitivité.',
                'L’antisymétrie (car $x\\mathcal{R}y$ et $y\\mathcal{R}x$ sont vraies alors que $x \\neq y$).',
                'La totalité.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’antisymétrie exige $(x\\mathcal{R}y \\land y\\mathcal{R}x) \\implies x = y$. Avec deux articles distincts de même prix, $x\\mathcal{R}y$ et $y\\mathcal{R}x$ valent Vrai mais $x \\neq y$, donc l’antisymétrie échoue.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Éléments singuliers',
            stepTheme: 'blue',
            stepTitle: 'Majorant, minorant, plus grand élément (max) et élément maximal',
            paragraphText:
              'Dans un ensemble ordonné $(E, \\preceq)$, soit $A$ une partie non vide de $E$.\n' +
              '• **Majorant de $A$** : élément $M \\in E$ (pas forcément dans $A$) tel que $\\forall x \\in A,\\ x \\preceq M$. (Symétriquement, **minorant** : $m \\in E$ tel que $\\forall x \\in A,\\ m \\preceq x$.)\n' +
              '• **Plus grand élément ($\\max A$)** : élément $M \\in A$ qui majore tous les éléments de $A$. S’il existe, il est **unique** (grâce à l’antisymétrie !).\n' +
              '• **Élément maximal** (dans un ordre partiel) : élément $a \\in A$ tel qu’aucun autre élément de $A$ ne lui soit strictement supérieur ($\\forall x \\in A,\\ a \\preceq x \\implies x = a$). Dans un ordre partiel, il peut exister **plusieurs** éléments maximaux sans qu’il existe de plus grand élément (ex. dans $\\{2, 3, 4, 6\\}$ muni de la divisibilité $\\mid$, $4$ et $6$ sont tous deux maximaux mais aucun ne divise l’autre !).',
            konanTip:
              'Retiens la différence cruciale : un **plus grand élément** bat tout le monde ($\\forall x, x \\preceq M$) ; un **élément maximal** n’est simplement battu par personne !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p4_q4',
              type: 'mcq',
              prompt: 'Dans l’ensemble $A = \\{2, 3, 4, 6\\}$ muni de la relation de divisibilité ($a \\mid b$), que peut-on dire de $4$ et $6$ ?',
              options: [
                '$6$ est le plus grand élément de $A$ pour la divisibilité.',
                '$4$ et $6$ sont tous deux des éléments maximaux, et $A$ n’a pas de plus grand élément pour la divisibilité.',
                '$2$ est un élément maximal de $A$.',
                'L’ordre est total sur $A$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Aucun autre élément de $A$ n’est multiple de $4$, ni multiple de $6$ : donc $4$ et $6$ sont maximaux. Comme $4 \\nmid 6$ et $6 \\nmid 4$, aucun élément de $A$ n’est multiple de tous les autres : pas de plus grand élément !',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Borne sup / inf',
            stepTheme: 'violet',
            stepTitle: 'Borne supérieure ($\\sup$), borne inférieure ($\\inf$) et axiome de $\\mathbb{R}$',
            paragraphText:
              'Dans $(\\mathbb{R}, \\le)$, une partie bornée n’a pas toujours de maximum (ex. $]0, 1[$ n’a pas de plus grand élément car entre tout $x < 1$ et $1$, il y a $\\frac{x+1}{2}$). C’est pour combler ce manque qu’on introduit les **bornes**.\n' +
              '• **Borne supérieure ($\\sup A$)** : le **plus petit des majorants** de $A$ dans $\\mathbb{R}$.\n' +
              '• **Borne inférieure ($\\inf A$)** : le **plus grand des minorants** de $A$ dans $\\mathbb{R}$.\n' +
              '• **Axiome fondamental de $\\mathbb{R}$** : toute partie non vide et majorée de $\\mathbb{R}$ admet une borne supérieure dans $\\mathbb{R}$ (et toute partie non vide minorée admet une borne inférieure). C’est la propriété qui distingue $\\mathbb{R}$ de $\\mathbb{Q}$ (dans $\\mathbb{Q}$, $\\{q \\in \\mathbb{Q} \\mid q^2 < 2\\}$ n’a pas de borne supérieure rationnelle !).\n' +
              '• **Lien avec $\\max$ / $\\min$** : si $\\sup A \\in A$, alors $\\max A = \\sup A$ ; si $\\sup A \\notin A$, alors $\\max A$ n’existe pas !',
            formula: {
              name: 'Caractérisation ε de sup(A) et inf(A)',
              formula: 'M = \\sup A \\iff (\\forall x \\in A,\\ x \\le M) \\land (\\forall \\varepsilon > 0,\\ \\exists x \\in A,\\ M - \\varepsilon < x)',
              note: 'Symétriquement : m = inf A ⇔ (∀x ∈ A, m ≤ x) ∧ (∀ε > 0, ∃x ∈ A, x < m + ε).',
            },
            keyRule:
              'Pour tout intervalle borné d’extrémités $a < b$ (ouvert, fermé ou semi-ouvert) : $\\inf = a$ et $\\sup = b$. Ensuite, $\\min$ existe ssi $a$ est inclus (`[a`), et $\\max$ existe ssi $b$ est inclus (`b]`) !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p4_q5',
              type: 'mcq',
              prompt: 'Pour l’intervalle réel $I = ]0, 1]$, quelles affirmations sont exactes ?',
              options: [
                '$\\inf I = 0$, $\\min I = 0$, $\\sup I = 1$, $\\max I = 1$.',
                '$\\inf I = 0$, pas de $\\min I$, $\\sup I = 1$, $\\max I = 1$.',
                'Pas d’$\\inf I$, pas de $\\min I$, $\\sup I = 1$, pas de $\\max I$.',
                '$\\inf I = 0$, $\\min I = 0$, $\\sup I = 1$, pas de $\\max I$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les minorants de $]0, 1]$ sont $]-\\infty, 0]$, donc le plus grand minorant est $\\inf I = 0$ ; comme $0 \\notin I$, il n’y a pas de minimum. Les majorants sont $[1, +\\infty[$, donc $\\sup I = 1$, et comme $1 \\in I$, $\\max I = 1$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Exercice de synthèse',
            stepTheme: 'slate',
            stepTitle: 'Déterminer $\\min, \\max, \\inf, \\sup$ d’un ensemble discret infini',
            paragraphText:
              'Étudions un grand classique de Licence 1 : déterminer $\\min, \\max, \\inf$ et $\\sup$ de l’ensemble $B = \\left\\{1 - \\frac{1}{n} \\;\\Big|\\; n \\in \\mathbb{N}^*\\right\\}$.\n' +
              '• **Premiers éléments** : pour $n = 1, 2, 3, 4, \\dots$, on obtient $0,\\ \\frac{1}{2},\\ \\frac{2}{3},\\ \\frac{3}{4},\\ \\dots$ La suite est strictement croissante et tend vers $1$.\n' +
              '• **Minimum et borne inférieure** : pour tout $n \\ge 1$, $\\frac{1}{n} \\le 1$, donc $1 - \\frac{1}{n} \\ge 0$. De plus $0 \\in B$ (obtenu pour $n = 1$). Donc $\\min B = \\inf B = 0$.\n' +
              '• **Borne supérieure et maximum** : pour tout $n \\ge 1$, $1 - \\frac{1}{n} < 1$, donc $1$ majore $B$ et $1 \\notin B$ (donc **pas de maximum** !). Pour tout $\\varepsilon > 0$, il existe $n \\in \\mathbb{N}^*$ tel que $\\frac{1}{n} < \\varepsilon$ (propriété d’Archimède), donc $1 - \\varepsilon < 1 - \\frac{1}{n} \\in B$. Par la caractérisation en $\\varepsilon$, $\\sup B = 1$.',
            konanTip:
              'Calcule toujours les 3 ou 4 premiers termes ($n = 1, 2, 3$) et la limite quand $n \\to +\\infty$ : cela te donne instantanément les candidats pour $\\inf$ et $\\sup$, puis vérifie s’ils appartiennent à l’ensemble pour savoir si $\\min$ et $\\max$ existent !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch4_p4_q6',
              type: 'mcq',
              prompt: 'Soit $C = \\left\\{\\frac{1}{n} \\;\\Big|\\; n \\in \\mathbb{N}^*\\right\\} = \\left\\{1,\\ \\frac{1}{2},\\ \\frac{1}{3},\\ \\dots\\right\\}$. Quelle affirmation est exacte ?',
              options: [
                '$\\max C = 1$, $\\sup C = 1$, $\\inf C = 0$, et $C$ n’a pas de minimum.',
                '$\\max C = 1$, $\\min C = 0$, $\\sup C = 1$, $\\inf C = 0$.',
                '$C$ n’a ni maximum ni minimum.',
                '$\\inf C = \\frac{1}{2}$ et $\\sup C = 1$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour tout $n \\ge 1$, $0 < \\frac{1}{n} \\le 1$. Comme $1 \\in C$ (pour $n = 1$), $\\max C = \\sup C = 1$. Comme $\\frac{1}{n} \\to 0$ sans jamais atteindre $0$, $\\inf C = 0$ mais $0 \\notin C$, donc $C$ n’a pas de minimum.',
            },
          },
        ],
      }),
    ],
  },
];
