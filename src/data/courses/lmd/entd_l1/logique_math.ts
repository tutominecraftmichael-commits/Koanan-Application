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
// LOGIQUE ET RAISONNEMENT MATHÉMATIQUE — ENTD LICENCE 1 (ESATIC)
// Sources : MATHS 1 1 2024-2025.pdf, TD_Logique_ENTD.pdf, Corrigé TD Logique
// ============================================================================

export const LOGIQUE_MATH_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Calcul propositionnel, connecteurs et quantificateurs
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch1',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Logique et Raisonnement Mathématique (Cours Ch. 2 & TD Ex. 1–13, 21–28)',
    title: 'Chapitre 1 — Calcul propositionnel, connecteurs et quantificateurs',
    summary:
      'Propositions, connecteurs logiques, tables de vérité, lois de De Morgan, quantificateurs $\\forall, \\exists$, négation, implication, réciproque, contraposée et conditions nécessaires/suffisantes.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch1_p1',
        order: 1,
        title: 'Propositions, connecteurs logiques, tables de vérité et De Morgan',
        summary:
          'Modéliser des règles économiques et marketing en logique propositionnelle et prouver des équivalences par tables de vérité.',
        conceptExplanation:
          'Une **proposition** (ou assertion) est un énoncé mathématique auquel on peut attribuer sans ambiguïté une valeur de vérité : **Vrai (V)** ou **Faux (F)**.\n\n' +
          'Les connecteurs fondamentaux construisent des propositions composées :\n' +
          '• **Négation** $\\neg P$ : inverse la valeur de vérité de $P$.\n' +
          '• **Conjonction** $P \\land Q$ (« P et Q ») : vraie uniquement si $P$ et $Q$ sont toutes deux vraies.\n' +
          '• **Disjonction inclusive** $P \\lor Q$ (« P ou Q ») : fausse uniquement si $P$ et $Q$ sont toutes deux fausses.\n' +
          '• **Disjonction exclusive** $P \\oplus Q$ : vraie lorsque $P$ et $Q$ ont des valeurs de vérité **différentes**.\n' +
          '• **Implication** $P \\implies Q$ (équivalente à $\\neg P \\lor Q$) : fausse **uniquement** lorsque $P$ est vraie et $Q$ est fausse.\n' +
          '• **Équivalence** $P \\iff Q$ : vraie lorsque $P$ et $Q$ ont la même valeur de vérité, soit $(P \\implies Q) \\land (Q \\implies P) \\equiv \\neg(P \\oplus Q)$.\n\n' +
          'Deux propositions sont **logiquement équivalentes** ($A \\equiv B$) lorsqu’elles ont exactement la même colonne finale dans leur table de vérité (ex. lois de De Morgan : $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$ et $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$).',
        formulas: [
          {
            name: 'Lois de De Morgan',
            formula: '\\neg(P \\lor Q) \\equiv (\\neg P \\land \\neg Q), \\qquad \\neg(P \\land Q) \\equiv (\\neg P \\lor \\neg Q)',
            note: 'TD Ex. 3 : « Nous n’acceptons ni les chèques ni les virements » = ¬C ∧ ¬V.',
          },
          {
            name: 'Définition de l’implication et sa négation',
            formula: '(P \\implies Q) \\equiv (\\neg P \\lor Q), \\qquad \\neg(P \\implies Q) \\equiv (P \\land \\neg Q)',
            note: 'La négation d’une implication N’EST PAS une implication, c’est une conjonction P ∧ ¬Q !',
          },
        ],
        keyRule:
          'Pour nier une formule composée, appliquer systématiquement De Morgan : $\\neg$ transforme $\\land$ en $\\lor$, $\\lor$ en $\\land$, et transforme $P \\implies Q$ en $P \\land \\neg Q$.',
        workedExample: {
          title: 'Simplification logique et règle de fidélité client (TD Ex. 4 & Ex. 22)',
          statement:
            '1) Un client est fidèle ($F$) ssi il bénéficie de promotions ($P$) ou aime la marque ($M$) : $F \\iff (P \\lor M)$. Si un client n’aime pas la marque ($M = F$) mais est fidèle ($F = V$), que déduire ? 2) Simplifier $\\neg[(A \\land B) \\lor \\neg C]$ (TD Ex. 22).',
          methodSteps: [
            '1) On a $F = V$, donc $P \\lor M$ doit valoir $V$. Comme $M = F$, il faut nécessairement $P = V$ : le client bénéficie de promotions.',
            '2) Appliquons la première loi de De Morgan à $\\neg[(A \\land B) \\lor \\neg C]$ :',
            '$\\neg[(A \\land B) \\lor \\neg C] \\equiv \\neg(A \\land B) \\land \\neg(\\neg C)$.',
            'Par la seconde loi de De Morgan et la double négation : $\\equiv (\\neg A \\lor \\neg B) \\land C$.',
          ],
          conclusion:
            'Le client bénéficie obligatoirement de promotions ; et $\\neg[(A \\land B) \\lor \\neg C] \\equiv (\\neg A \\lor \\neg B) \\land C$ (« au moins un indicateur A ou B est mauvais, ET C est bon »).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'TD Ex. 1 & 2',
            stepTheme: 'blue',
            stepTitle: 'Traduire un énoncé économique en symboles logiques',
            paragraphText:
              'En logique propositionnelle, le mot « mais » joue exactement le même rôle logique que « et » ($\\land$). Ainsi, si $P$ = « Investissement publicitaire » et $Q$ = « Hausse des ventes », alors « On investit en publicité mais les ventes n’augmentent pas » s’écrit $P \\land \\neg Q$ (l’unique cas où $P \\implies Q$ est fausse).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Soient $P$ : « Le prix est élevé » et $Q$ : « La demande baisse » (TD Ex. 1). Comment s’écrit « Le prix est élevé mais la demande ne baisse pas » ?',
              options: [
                '$P \\implies \\neg Q$',
                '$P \\land \\neg Q$',
                '$P \\lor \\neg Q$',
                '$\\neg(P \\land Q)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Mais » correspond à la conjonction $\\land$ et « ne baisse pas » à $\\neg Q$, d’où $P \\land \\neg Q$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'De Morgan (TD Ex. 3)',
            stepTheme: 'violet',
            stepTitle: 'Équivalence $\\neg(P \\lor Q) \\equiv (\\neg P \\land \\neg Q)$',
            paragraphText:
              'La négation d’une disjonction est la conjonction des négations. L’affiche commerciale « Nous n’acceptons ni les chèques ($P$) ni les virements ($Q$) » traduit $\\neg(P \\lor Q)$, qui équivaut à $\\neg P \\land \\neg Q$ (ni chèques ET ni virements).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Dans la table de vérité de $\\neg(P \\lor Q)$, combien de lignes donnent la valeur **Vrai (V)** ?',
              options: [
                '3 lignes sur 4',
                '2 lignes sur 4',
                '1 seule ligne sur 4 (uniquement lorsque $P = F$ et $Q = F$)',
                'Aucune ligne (contradiction)',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$P \\lor Q$ est faux uniquement quand $P = F$ et $Q = F$, donc $\\neg(P \\lor Q)$ est vrai sur cette seule ligne.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'TD Ex. 21',
            stepTheme: 'violet',
            stepTitle: 'Équivalence entre bi-implication et négation du OU exclusif',
            paragraphText:
              'L’exercice 21 du TD montre par table de vérité que $(P \\implies Q) \\land (Q \\implies P)$ est logiquement équivalent à $\\neg(P \\oplus Q)$. Les deux valent Vrai exactement lorsque $P$ et $Q$ ont la **même** valeur de vérité ($V, V$ ou $F, F$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Quelle formule est logiquement équivalente à $P \\iff Q$ (TD Ex. 21) ?',
              options: [
                '$\\neg(P \\oplus Q)$',
                '$P \\oplus Q$',
                '$P \\lor Q$',
                '$\\neg P \\land \\neg Q$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le OU exclusif $P \\oplus Q$ est vrai ssi $P$ et $Q$ diffèrent ; sa négation $\\neg(P \\oplus Q)$ est donc vraie ssi $P$ et $Q$ ont la même valeur de vérité, c’est-à-dire $P \\iff Q$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 22',
            stepTheme: 'green',
            stepTitle: 'Simplifier la négation d’une expression composée',
            paragraphText:
              'Pour simplifier $\\neg((A \\land B) \\lor \\neg C)$, on propage la négation de l’extérieur vers l’intérieur par De Morgan : $\\neg(A \\land B) \\land \\neg(\\neg C) \\equiv (\\neg A \\lor \\neg B) \\land C$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Quelle est la forme simplifiée de la négation de $(A \\lor B) \\land \\neg C$ ?',
              options: [
                '$(\\neg A \\lor \\neg B) \\land C$',
                '$(\\neg A \\land \\neg B) \\land C$',
                '$(\\neg A \\lor \\neg B) \\lor C$',
                '$(\\neg A \\land \\neg B) \\lor C$',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$\\neg[(A \\lor B) \\land \\neg C] \\equiv \\neg(A \\lor B) \\lor \\neg(\\neg C) \\equiv (\\neg A \\land \\neg B) \\lor C$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'TD Ex. 28',
            stepTheme: 'orange',
            stepTitle: 'Paradoxe de l’implication vacuellement vraie',
            paragraphText:
              'Dans la table de vérité de $P \\implies Q$, dès que la prémisse $P$ est **Fausse**, l’implication $P \\implies Q$ est automatiquement **Vraie** quelle que soit la valeur de $Q$ ! En marketing (TD Ex. 28), une promesse conditionnée à un événement impossible ne peut pas être déclarée logiquement fausse, mais elle est sans valeur pratique.',
            keyRule: '« Du faux, on peut tout impliquer » : $F \\implies V$ est VRAI et $F \\implies F$ est VRAI.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Si la proposition $P$ est Fausse et la proposition $Q$ est Fausse, quelle est la valeur de vérité de $P \\implies Q$ ?',
              options: [
                'Fausse',
                'Vraie (implication vacuellement vraie)',
                'Indéterminée',
                'Égale à celle de $P \\land Q$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’implication $P \\implies Q$ n’est fausse que dans le seul cas $P = V$ et $Q = F$. Lorsque $P = F$, elle est toujours Vraie.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'TD Ex. 20',
            stepTheme: 'slate',
            stepTitle: 'Évaluer une règle conjonctive d’achat d’impulsion',
            paragraphText:
              'Dans le TD Ex. 20, la règle est : `Achat d’impulsion ⟺ (Pressé ∧ Tête de gondole)`. Si un client achète un produit en tête de gondole (`V`) mais déambule tranquillement (`Pressé = F`), alors `(F ∧ V) = F` : ce n’est pas un achat d’impulsion selon la règle.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Avec la règle $F \\iff (P \\lor M)$ (TD Ex. 4), si un client est fidèle ($F = V$) et n’aime pas la marque ($M = F$), que peut-on déduire ?',
              options: [
                'Il ne bénéficie pas de promotions ($P = F$).',
                'On ne peut rien déduire sur $P$.',
                'Il bénéficie nécessairement de promotions ($P = V$).',
                'La règle est contradictoire.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour que $P \\lor M$ soit vrai alors que $M$ est faux, il faut obligatoirement $P = V$.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch1_p2',
        order: 2,
        title: 'Quantificateurs, négation, réciproque, contraposée et CNS',
        summary:
          'Manipuler $\\forall$ et $\\exists$, nier des propositions quantifiées, et distinguer implication, réciproque, contraposée, condition nécessaire et condition suffisante.',
        conceptExplanation:
          '• **Quantificateurs** : $\\forall$ (« pour tout / quel que soit ») est le quantificateur universel ; $\\exists$ (« il existe au moins un ») est le quantificateur existentiel ($\\exists!$ signifie « il existe un unique »).\n' +
          '• **Ordre des quantificateurs** : on ne peut **jamais** permuter $\\forall$ et $\\exists$ sans changer le sens ! Exemple du TD Ex. 26 : $\\forall c,\\ \\exists p,\\ \\text{Achat}(c, p)$ (« chaque client a acheté au moins un produit, éventuellement différent ») est beaucoup plus faible que $\\exists p,\\ \\forall c,\\ \\text{Achat}(c, p)$ (« un même produit a été acheté par tous les clients »).\n' +
          '• **Négation des quantificateurs** : $\\neg(\\forall x \\in E,\\ P(x)) \\equiv (\\exists x \\in E,\\ \\neg P(x))$ et $\\neg(\\exists x \\in E,\\ P(x)) \\equiv (\\forall x \\in E,\\ \\neg P(x))$.\n' +
          '• **Autour de l’implication $P \\implies Q$** :\n' +
          '  — **Réciproque** : $Q \\implies P$ (pas forcément vraie si $P \\implies Q$ est vraie).\n' +
          '  — **Contraposée** : $\\neg Q \\implies \\neg P$ (**toujours logiquement équivalente** à $P \\implies Q$).\n' +
          '  — **Vocabulaire** : $P$ est une **condition suffisante** pour $Q$, et $Q$ est une **condition nécessaire** pour $P$.',
        formulas: [
          {
            name: 'Négation d’un énoncé quantifié',
            formula: '\\neg(\\forall x \\in E,\\ P(x)) \\equiv (\\exists x \\in E,\\ \\neg P(x))',
            note: 'Et pour nier une implication universelle : ¬(∀x, A(x) ⇒ B(x)) ≡ (∃x, A(x) ∧ ¬B(x)).',
          },
          {
            name: 'Loi de la contraposée',
            formula: '(P \\implies Q) \\equiv (\\neg Q \\implies \\neg P)',
            note: 'TD Ex. 25 : la contraposée de (S ∧ F) ⇒ R est ¬R ⇒ (¬S ∨ ¬F).',
          },
        ],
        keyRule:
          'Observer $Q = V$ quand $P \\implies Q$ est vrai NE permet JAMAIS de conclure $P = V$ (sophisme de l’affirmation du conséquent, TD Ex. 13) ! Seul $\\neg Q$ permet de conclure $\\neg P$ (modus tollens).',
        workedExample: {
          title: 'Carte Gold / Salon VIP et contraposée de $(S \\land F) \\implies R$ (TD Ex. 10 & Ex. 25)',
          statement:
            '1) Soit l’implication « Si un client possède la carte Gold ($G$), alors il a accès au salon VIP ($V$) ». Écrire sa réciproque et sa contraposée. 2) Écrire et interpréter la contraposée de $(S \\land F) \\implies R$ (Satisfaction et Fidélité impliquent Recommandation).',
          methodSteps: [
            '1) Implication : $G \\implies V$. Réciproque : $V \\implies G$ (« Si un client a accès au salon VIP, alors il possède la carte Gold ») — fausse en général, car on peut accéder au salon VIP autrement (billet Business, invitation).',
            'Contraposée : $\\neg V \\implies \\neg G$ (« Si le client n’a pas accès au salon VIP, alors il ne possède pas la carte Gold ») — toujours équivalente à l’implication initiale.',
            '2) Contraposée de $(S \\land F) \\implies R$ : $\\neg R \\implies \\neg(S \\land F)$.',
            'Par De Morgan : $\\neg R \\implies (\\neg S \\lor \\neg F)$.',
          ],
          conclusion:
            'L’absence de recommandation ($\\neg R$) implique que le client n’est pas satisfait OU n’est pas fidèle (ou les deux).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 5 & 6',
            stepTheme: 'green',
            stepTitle: 'Formaliser un énoncé avec $\\forall$ et $\\exists$',
            paragraphText:
              '« Chaque visiteur du site a cliqué sur au moins une publicité » se traduit par $\\forall v \\in \\text{Visiteurs},\\ \\exists p \\in \\text{Publicités},\\ \\text{Clic}(v, p)$. « Il existe un segment de marché non ciblé par aucune marque » s’écrit $\\exists s \\in \\text{Segments},\\ \\forall m \\in \\text{Marques},\\ \\neg\\text{Cible}(m, s)$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Comment traduire « Il existe un produit qui a été acheté par tous les clients » (TD Ex. 26) ?',
              options: [
                '$\\exists p \\in \\text{Produits},\\ \\forall c \\in \\text{Clients},\\ \\text{Achat}(c, p)$',
                '$\\forall c \\in \\text{Clients},\\ \\exists p \\in \\text{Produits},\\ \\text{Achat}(c, p)$',
                '$\\forall p \\in \\text{Produits},\\ \\forall c \\in \\text{Clients},\\ \\text{Achat}(c, p)$',
                '$\\exists p \\in \\text{Produits},\\ \\exists c \\in \\text{Clients},\\ \\text{Achat}(c, p)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un **même** produit $p$ est fixé d’abord ($\\exists p$), puis vérifie la propriété pour tout client $c$ ($\\forall c$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 7 & 9',
            stepTheme: 'green',
            stepTitle: 'Nier une affirmation universelle et une implication quantifiée',
            paragraphText:
              'La négation de « Toutes les publicités sont créatives » ($\\forall p,\\ \\text{Créative}(p)$) est « Il existe au moins une publicité non créative » ($\\exists p,\\ \\neg\\text{Créative}(p)$). La négation de « Pour tout produit $x$, si $x$ est bio alors $x$ est plus cher » est « Il existe un produit bio qui n’est pas plus cher » ($\\exists x,\\ \\text{Bio}(x) \\land \\neg\\text{PlusCher}(x)$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Quelle est la négation mathématique exacte de $\\forall x,\\ \\text{Bio}(x) \\implies \\text{PlusCher}(x)$ (TD Ex. 9) ?',
              options: [
                '$\\forall x,\\ \\text{Bio}(x) \\implies \\neg\\text{PlusCher}(x)$',
                '$\\exists x,\\ \\text{Bio}(x) \\land \\neg\\text{PlusCher}(x)$',
                '$\\exists x,\\ \\neg\\text{Bio}(x) \\implies \\neg\\text{PlusCher}(x)$',
                '$\\forall x,\\ \\neg\\text{Bio}(x) \\land \\neg\\text{PlusCher}(x)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$\\forall$ devient $\\exists$, et la négation de $A \\implies B$ est $A \\land \\neg B$ : un tel produit est un **contre-exemple** à l’affirmation initiale.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'TD Ex. 11',
            stepTheme: 'violet',
            stepTitle: 'Reformuler un slogan par la loi de la contraposée',
            paragraphText:
              'Le slogan « Si vous n’utilisez pas notre logiciel, vous perdez du temps » correspond à $\\neg L \\implies T$. Sa contraposée est $\\neg T \\implies \\neg(\\neg L)$, soit $\\neg T \\implies L$ : « Si vous ne perdez pas de temps, c’est que vous utilisez notre logiciel ».',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Quelle est la contraposée de l’implication $(S \\land F) \\implies R$ (TD Ex. 25) ?',
              options: [
                '$R \\implies (S \\land F)$',
                '$(\\neg S \\land \\neg F) \\implies \\neg R$',
                '$\\neg R \\implies (\\neg S \\lor \\neg F)$',
                '$\\neg R \\implies (\\neg S \\land \\neg F)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La contraposée de $(S \\land F) \\implies R$ est $\\neg R \\implies \\neg(S \\land F)$, qui se simplifie par De Morgan en $\\neg R \\implies (\\neg S \\lor \\neg F)$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'TD Ex. 12',
            stepTheme: 'blue',
            stepTitle: 'Condition nécessaire vs condition suffisante',
            paragraphText:
              'Dans $A \\implies B$ : $A$ est une condition **suffisante** pour $B$ (il suffit d’avoir $A$ pour avoir $B$), et $B$ est une condition **nécessaire** pour $A$ (il faut obligatoirement avoir $B$ pour avoir $A$). Exemple TD Ex. 12 : avoir un compte Instagram est une condition **nécessaire** (mais non suffisante) pour faire du marketing d’influence sur Instagram.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Sachant que « Faire du marketing d’influence sur Instagram $\\implies$ Avoir un compte Instagram », avoir un compte Instagram est une condition :',
              options: [
                'Suffisante mais non nécessaire.',
                'Nécessaire et suffisante.',
                'Ni nécessaire ni suffisante.',
                'Nécessaire mais non suffisante (il faut aussi une audience et du contenu).',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Sans compte Instagram, impossible de faire du marketing d’influence sur la plateforme (condition nécessaire), mais posséder un compte ne suffit pas à devenir influenceur.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'TD Ex. 13',
            stepTheme: 'orange',
            stepTitle: 'Erreur logique : l’affirmation du conséquent',
            paragraphText:
              'On sait que $A \\implies B$ est vrai (« S’il pleut, le sol est mouillé »). Si l’on observe que $B$ est vrai (le sol est mouillé), on ne peut **pas** conclure que $A$ est vrai (il a peut-être simplement été lavé ou quelqu’un a renversé une bouteille). Confondre $A \\implies B$ et sa réciproque $B \\implies A$ est le piège le plus fréquent !',
            keyRule: 'De $(A \\implies B)$ et $B$, on ne déduit RIEN sur $A$. Seuls $(A \\implies B)$ et $A$ donnent $B$ (modus ponens), ou $(A \\implies B)$ et $\\neg B$ donnent $\\neg A$ (modus tollens).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q5',
              type: 'mcq',
              prompt: 'On sait que « Si un client possède la carte Gold ($G$), alors il a accès au salon VIP ($V$) ». On observe qu’un client accède au salon VIP ($V = V$). Que peut-on en conclure ?',
              options: [
                'On ne peut pas conclure qu’il possède la carte Gold (erreur d’affirmation du conséquent).',
                'Il possède obligatoirement la carte Gold.',
                'Il ne possède pas la carte Gold.',
                'L’implication initiale est fausse.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$G \\implies V$ et $V$ vrai ne permettent pas de remonter à $G$ (il peut entrer au salon VIP par un autre privilège).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 8',
            stepTheme: 'green',
            stepTitle: 'Nier une affirmation existentielle avec disjonction',
            paragraphText:
              'Dans le TD Ex. 8, pour nier « Certains clients achètent le samedi ou le dimanche » ($\\exists c,\\ A(c, \\text{sam}) \\lor A(c, \\text{dim})$), on remplace $\\exists$ par $\\forall$ et $\\lor$ par $\\land$ : $\\forall c,\\ \\neg A(c, \\text{sam}) \\land \\neg A(c, \\text{dim})$ (« Aucun client n’achète ni le samedi ni le dimanche »).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Quelle est la négation de « Il existe au moins un client satisfait qui ne recommande pas la marque » ?',
              options: [
                'Aucun client n’est satisfait et aucun ne recommande la marque.',
                'Tous les clients satisfaits recommandent la marque (ou tout client est soit insatisfait, soit recommande la marque).',
                'Il existe un client insatisfait qui recommande la marque.',
                'Aucun client ne recommande la marque.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’énoncé initial est $\\exists c,\\ (S(c) \\land \\neg R(c))$. Sa négation est $\\forall c,\\ (\\neg S(c) \\lor R(c)) \\equiv \\forall c,\\ (S(c) \\implies R(c))$ : tout client satisfait recommande la marque.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Méthodes de raisonnement mathématique
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch2',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Logique et Raisonnement Mathématique (Cours Ch. 3 & TD Ex. 14–20, 23–29)',
    title: 'Chapitre 2 — Méthodes de raisonnement mathématique',
    summary:
      'Maîtriser les 8 grands schémas de démonstration : direct, double implication, disjonction de cas, contre-exemple, contraposée, absurde, récurrence (simple/forte) et analyse-synthèse.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch2_p1',
        order: 1,
        title: 'Raisonnement direct, disjonction de cas, syllogisme et contre-exemple',
        summary:
          'Choisir et rédiger rigoureusement une preuve directe, par cas, par transitivité (syllogisme) ou une réfutation par contre-exemple.',
        conceptExplanation:
          '• **Raisonnement direct** : pour prouver $P \\implies Q$, on suppose $P$ vraie et l’on déduit $Q$ par une chaîne d’implications valides.\n' +
          '• **Syllogisme (transitivité)** : si $P \\implies Q$ et $Q \\implies R$, alors $P \\implies R$ (et par contraposée $\\neg R \\implies \\neg P$).\n' +
          '• **Raisonnement par double implication** : pour prouver $P \\iff Q$, on démontre successivement le sens direct ($P \\implies Q$) et le sens réciproque ($Q \\implies P$).\n' +
          '• **Raisonnement par disjonction de cas** : pour prouver $P(x)$ sur un ensemble $E$, on partitionne $E$ en sous-cas exhaustifs (ex. $n$ pair / $n$ impair ; ou client étudiant / retraité / autre) et on démontre la propriété dans chaque cas.\n' +
          '• **Raisonnement par contre-exemple** : pour démontrer qu’un énoncé universel $\\forall x \\in E,\\ P(x)$ est **FAUX**, il suffit d’exhiber **un seul** élément $x_0 \\in E$ tel que $P(x_0)$ soit faux.',
        formulas: [
          {
            name: 'Syllogisme (transitivité de l’implication)',
            formula: '\\big((P \\implies Q) \\land (Q \\implies R)\\big) \\implies (P \\implies R)',
            note: 'TD Ex. 23 : Luxe ⇒ Prestige ⇒ Prix élevé ⇒ (Prix bas ⇒ Non luxe).',
          },
          {
            name: 'Principe de la disjonction de cas',
            formula: '\\big((A \\implies C) \\land (B \\implies C)\\big) \\implies \\big((A \\lor B) \\implies C\\big)',
            note: 'Les cas doivent couvrir toutes les possibilités (exhaustivité).',
          },
        ],
        keyRule:
          'Un seul contre-exemple suffit pour **réfuter** une affirmation universelle (« pour tout $x$ »), mais même un million d’exemples ne suffisent jamais pour la **prouver** !',
        workedExample: {
          title: 'Syllogisme du luxe, segmentation et disjonction de cas (TD Ex. 15, 19 & 23)',
          statement:
            '1) Si $\\forall x,\\ x \\in \\text{Luxe} \\implies x \\in \\text{Prestige}$ et $\\forall x,\\ x \\in \\text{Prestige} \\implies x \\in \\text{Prix élevé}$, montrer qu’un produit à prix bas ne peut être de luxe. 2) Si $A \\subseteq B$ et $B \\cap C = \\emptyset$, un client peut-il appartenir à $A \\cap C$ ?',
          methodSteps: [
            '1) Par transitivité (syllogisme) : $\\forall x,\\ x \\in \\text{Luxe} \\implies x \\in \\text{Prix élevé}$.',
            'Par contraposée : $\\forall x,\\ x \\notin \\text{Prix élevé} \\implies x \\notin \\text{Luxe}$. Donc un produit à prix bas n’est pas un produit de luxe.',
            '2) Supposons $x \\in A \\cap C$. Comme $A \\subseteq B$, $x \\in A \\implies x \\in B$. Alors $x \\in B \\cap C$, ce qui contredit $B \\cap C = \\emptyset$.',
          ],
          conclusion:
            'Un produit à prix bas n’est jamais de luxe ; et $A \\cap C = \\emptyset$ (aucun client n’est à la fois dans $A$ et $C$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 17',
            stepTheme: 'green',
            stepTitle: 'Réfuter une proposition universelle par contre-exemple',
            paragraphText:
              'Pour prouver que l’affirmation « Toutes les marques de luxe sont européennes » est **fausse**, il n’est pas nécessaire d’étudier toutes les marques du monde : exhiber un seul contre-exemple (ex. Tiffany & Co. ou Ralph Lauren, marques américaines) suffit rigoureusement.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Comment démontrer que la proposition « $\\forall n \\in \\mathbb{N},\\ n^2 + n + 41$ est un nombre premier » est **fausse** ?',
              options: [
                'En vérifiant que la formule marche pour $n = 0, 1, 2, 3$.',
                'En exhibant un seul contre-exemple : pour $n = 41$, $41^2 + 41 + 41 = 41 \\times 43$ n’est pas premier.',
                'En montrant qu’elle échoue pour une infinité de valeurs.',
                'En prenant sa réciproque.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La négation de $\\forall n,\\ P(n)$ est $\\exists n,\\ \\neg P(n)$ : un seul entier ($n = 41$, ou même $n = 40$ où $40^2+40+41 = 41^2$) suffit à réfuter l’énoncé.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 15',
            stepTheme: 'green',
            stepTitle: 'Raisonnement par disjonction de cas',
            paragraphText:
              'La disjonction de cas découpe le problème en cas exhaustifs traités séparément. Exemple mathématique classique : montrer que pour tout $n \\in \\mathbb{N}$, $n(n + 1)$ est pair en traitant Cas 1 ($n = 2k$ pair) et Cas 2 ($n = 2k + 1$ impair, donc $n + 1 = 2k + 2$ pair).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Pour prouver par disjonction de cas que $\\forall x \\in \\mathbb{R},\\ |x - 2| + |x + 1| \\geqslant 3$, quels intervalles forment une partition adaptée ?',
              options: [
                '$x < 0$ et $x > 0$',
                '$x \\leqslant 2$ et $x > 2$',
                '$x < -1$, $-1 \\leqslant x \\leqslant 2$, et $x > 2$',
                '$x = -1$ et $x = 2$ uniquement',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les valeurs absolues changent d’expression en $x = -1$ et $x = 2$, qui découpent $\\mathbb{R}$ en 3 intervalles exhaustifs : $]-\\infty, -1[$, $[-1, 2]$ et $]2, +\\infty[$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'TD Ex. 19',
            stepTheme: 'violet',
            stepTitle: 'Logique de segmentation ensembliste',
            paragraphText:
              'Si tout client de la catégorie $A$ appartient à la catégorie $B$ ($A \\subseteq B$) et qu’aucun client de $B$ n’est dans $C$ ($B \\cap C = \\emptyset$), alors nécessairement $A \\cap C = \\emptyset$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Sachant que $A \\subseteq B$ et $B \\cap C = \\emptyset$, que vaut $A \\cap C$ (TD Ex. 19) ?',
              options: [
                '$\\emptyset$',
                '$A$',
                '$C$',
                'On ne peut pas savoir sans connaître $|B|$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $A \\subseteq B$, on a $A \\cap C \\subseteq B \\cap C = \\emptyset$, donc $A \\cap C = \\emptyset$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'TD Ex. 23',
            stepTheme: 'violet',
            stepTitle: 'Combiner syllogisme et contraposée',
            paragraphText:
              'Des prémisses $L \\implies Pr$ et $Pr \\implies E$, le syllogisme donne $L \\implies E$. La contraposée fournit aussitôt $\\neg E \\implies \\neg L$ : un produit dont le prix n’est pas élevé ne peut pas appartenir au segment Luxe.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Si l’on sait que $(A \\implies B)$ et $(B \\implies C)$ sont vraies, quelle implication est **toujours** vraie ?',
              options: [
                '$C \\implies A$',
                '$\\neg A \\implies \\neg C$',
                '$B \\implies A$',
                '$\\neg C \\implies \\neg A$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Par transitivité $A \\implies C$, et sa contraposée est $\\neg C \\implies \\neg A$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Double implication',
            stepTheme: 'blue',
            stepTitle: 'Prouver une équivalence par double implication',
            paragraphText:
              'Pour démontrer $P \\iff Q$ (par exemple « $n^2$ est pair $\\iff n$ est pair »), il est souvent beaucoup plus clair et sûr de scinder la preuve en deux étapes indépendantes : $(\\implies)$ puis $(\\Longleftarrow)$, plutôt que d’enchaîner des symboles $\\iff$ risqués.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Que doit-on démontrer pour établir une équivalence $P \\iff Q$ par double implication ?',
              options: [
                'Uniquement $P \\implies Q$ et $\\neg Q \\implies \\neg P$.',
                'D’une part $P \\implies Q$, et d’autre part sa réciproque $Q \\implies P$.',
                'Uniquement $P \\lor Q$.',
                'Que $P$ et $Q$ sont toutes deux vraies dans un exemple.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Attention : $\\neg Q \\implies \\neg P$ est la **contraposée** de $P \\implies Q$ (donc la même chose !). Pour une équivalence, il faut bien $P \\implies Q$ ET la réciproque $Q \\implies P$ (ou $\\neg P \\implies \\neg Q$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège logique',
            stepTheme: 'orange',
            stepTitle: 'Preuve par l’exemple : une faute rédhibitoire',
            paragraphText:
              'Vérifier une propriété pour $n = 1, 2, 3, 10$ ne prouve jamais qu’elle est vraie pour tout $n \\in \\mathbb{N}$ ! Un exemple illustre un énoncé universel ou prouve un énoncé **existentiel** ($\\exists x, P(x)$), mais ne démontre jamais un $\\forall$.',
            keyRule: 'Exemple unique : prouve $\\exists$ ou réfute $\\forall$. Jamais suffisant pour prouver $\\forall$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Dans quel cas l’exhibition d’un **seul** élément $x_0$ constitue-t-elle une démonstration complète et rigoureuse ?',
              options: [
                'Pour prouver $\\forall x \\in \\mathbb{R},\\ x^2 \\geqslant 0$.',
                'Pour prouver que deux fonctions sont égales sur $\\mathbb{R}$.',
                'Pour prouver un énoncé existentiel $\\exists x \\in E,\\ P(x)$ ou pour réfuter un énoncé universel $\\forall x \\in E,\\ Q(x)$.',
                'Pour prouver une récurrence sur $\\mathbb{N}$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Exhiber un témoin $x_0$ prouve $\\exists x, P(x)$ ; exhiber un contre-exemple $x_0$ réfute $\\forall x, Q(x)$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch2_p2',
        order: 2,
        title: 'Contraposée, absurde, récurrence et analyse-synthèse',
        summary:
          'Démontrer par contraposée, par l’absurde, par récurrence (simple ou forte) et résoudre des problèmes par analyse-synthèse.',
        conceptExplanation:
          '• **Raisonnement par contraposée** : pour prouver $P \\implies Q$, on suppose $\\neg Q$ et on démontre $\\neg P$ (ex. $n^2$ pair $\\implies n$ pair : on prouve $n$ impair $\\implies n^2$ impair).\n' +
          '• **Raisonnement par l’absurde** : pour prouver $R$ (ou $P \\implies Q$), on suppose $\\neg R$ (ou $P \\land \\neg Q$) et l’on aboutit à une **contradiction** logique (ex. $\\sqrt{2} \\notin \\mathbb{Q}$, ou guerre des prix impossible en monopole, TD Ex. 14).\n' +
          '• **Raisonnement par récurrence** (pour prouver $\\forall n \\geqslant n_0,\\ P(n)$) :\n' +
          '  1. **Initialisation** : vérifier $P(n_0)$.\n' +
          '  2. **Hérédité** : fixer un entier $n \\geqslant n_0$, supposer $P(n)$ (récurrence simple) ou $\\forall k \\in [n_0, n],\\ P(k)$ (récurrence forte), et prouver $P(n + 1)$.\n' +
          '  3. **Conclusion** : par principe de récurrence, $\\forall n \\geqslant n_0,\\ P(n)$.\n' +
          '• **Analyse-synthèse** : (1) *Analyse* : on suppose que l’objet solution existe et on trouve des conditions nécessaires qui le déterminent ; (2) *Synthèse* : on vérifie que l’objet candidat satisfait effectivement le problème.',
        formulas: [
          {
            name: 'Principe de récurrence classique',
            formula: '\\big[ P(n_0) \\land (\\forall n \\geqslant n_0,\\ P(n) \\implies P(n+1)) \\big] \\implies \\forall n \\geqslant n_0,\\ P(n)',
            note: 'TD Ex. 29 (parrainage) : C(0) = 1, C(n+1) = 2 C(n) ⇒ C(n) = 2^n.',
          },
          {
            name: 'Structure du raisonnement par l’absurde',
            formula: '(\\neg R \\implies \\bot) \\implies R',
            note: 'Où ⊥ désigne une contradiction (une proposition de la forme A ∧ ¬A).',
          },
        ],
        keyRule:
          'En récurrence, **l’initialisation ET l’hérédité** sont toutes deux indispensables : une propriété héréditaire sans initialisation (ex. « $10^n + 1$ est divisible par 9 ») peut être fausse pour tout $n$ !',
        workedExample: {
          title: 'Preuve par l’absurde en duopole et récurrence sur le parrainage (TD Ex. 24 & Ex. 29)',
          statement:
            '1) Dans un duopole strict ($S_1 + S_2 = 100\\%$), prouver par l’absurde que tout gain $\\Delta > 0$ de part de marché pour l’acteur 1 est une perte pour l’acteur 2. 2) Prouver par récurrence que si $C(0) = 1$ et $C(n+1) = 2C(n)$, alors $C(n) = 2^n$.',
          methodSteps: [
            '1) Supposons par l’absurde que l’acteur 1 gagne $\\Delta > 0$ ($S_1\' = S_1 + \\Delta$) sans que l’acteur 2 ne perde ($S_2\' \\geqslant S_2$).',
            'Alors $S_1\' + S_2\' \\geqslant S_1 + \\Delta + S_2 = 100\\% + \\Delta > 100\\%$, ce qui contredit le fait que la somme des parts de marché vaut toujours $100\\%$. Donc $S_2\' < S_2$ (et même $S_2\' = S_2 - \\Delta$).',
            '2) Soit $P(n) : « C(n) = 2^n »$. Initialisation ($n = 0$) : $C(0) = 1 = 2^0$, donc $P(0)$ est vraie.',
            'Hérédité : soit $n \\in \\mathbb{N}$ tel que $C(n) = 2^n$. Alors $C(n+1) = 2 \\times C(n) = 2 \\times 2^n = 2^{n+1}$, donc $P(n+1)$ est vraie.',
          ],
          conclusion:
            'En duopole strict, le jeu est à somme nulle ; et pour tout $n \\in \\mathbb{N}$, $C(n) = 2^n$ (croissance exponentielle).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'TD Ex. 14',
            stepTheme: 'green',
            stepTitle: 'Raisonnement par l’absurde : monopole et guerre des prix',
            paragraphText:
              'Pour prouver qu’il n’y a pas de guerre des prix en situation de monopole (TD Ex. 14), on suppose par l’absurde qu’il existe une guerre des prix dans un monopole. Or une guerre des prix nécessite au moins 2 entreprises concurrentes, ce qui contredit la définition d’un monopole (1 seul offreur).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Pour démontrer une implication $P \\implies Q$ par l’absurde, quelle hypothèse initiale pose-t-on ?',
              options: [
                'On suppose $P$ vraie et $Q$ fausse ($P \\land \\neg Q$), puis on cherche une contradiction.',
                'On suppose $P$ fausse et $Q$ vraie.',
                'On suppose $P$ fausse et $Q$ fausse.',
                'On suppose $Q$ vraie et on prouve $P$ vraie.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La négation de $P \\implies Q$ est exactement $P \\land \\neg Q$. En supposant $P \\land \\neg Q$ et en dérivant une contradiction, on prouve $P \\implies Q$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Contraposée',
            stepTheme: 'green',
            stepTitle: 'Démontrer « $n^2$ pair $\\implies n$ pair » par contraposée',
            paragraphText:
              'Démontrer directement que $n^2$ pair entraîne $n$ pair est malaisé. Par contraposée, on prouve « $n$ impair $\\implies n^2$ impair » : si $n = 2k + 1$, alors $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, qui est impair !',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Pour prouver par contraposée que « Si $3n + 2$ est impair, alors $n$ est impair », que doit-on supposer et que doit-on démontrer ?',
              options: [
                'Supposer $n$ impair et montrer que $3n + 2$ est impair.',
                'Supposer $n$ pair et montrer que $3n + 2$ est pair.',
                'Supposer $3n + 2$ pair et montrer que $n$ est impair.',
                'Supposer $3n + 2$ impair et $n$ pair.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La contraposée de $(3n+2 \\text{ impair} \\implies n \\text{ impair})$ est $(n \\text{ pair} \\implies 3n+2 \\text{ pair})$. En effet, si $n = 2k$, $3n + 2 = 6k + 2 = 2(3k + 1)$ est pair.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège de récurrence',
            stepTheme: 'orange',
            stepTitle: 'Importance de l’initialisation en récurrence',
            paragraphText:
              'Considérons la propriété $P(n) : « 9 \\text{ divise } 10^n + 1 »$. Elle est **héréditaire** ! En effet, si $10^n + 1 = 9k$, alors $10^{n+1} + 1 = 10(10^n + 1) - 9 = 9(10k - 1)$ est multiple de $9$. Pourtant $P(n)$ est **fausse pour tout $n$** car l’initialisation échoue ($10^0 + 1 = 2$ n’est pas divisible par $9$).',
            keyRule: 'Ne jamais omettre l’étape d’initialisation $P(n_0)$, ni supposer $P(n)$ pour TOUT $n$ dans l’hérédité (on fixe UN entier $n \\geqslant n_0$ !).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Pourquoi la propriété $P(n) : « 9 \\text{ divise } 10^n + 1 »$ est-elle fausse malgré le fait que $P(n) \\implies P(n+1)$ soit vraie ?',
              options: [
                'Parce que $10$ n’est pas un nombre premier.',
                'Parce que la récurrence ne fonctionne pas avec la divisibilité.',
                'Parce qu’il n’existe aucun rang initial $n_0$ où $P(n_0)$ est vraie (l’initialisation échoue).',
                'Parce que l’hérédité ne vaut que pour $n$ pair.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sans initialisation, la chaîne des dominos n’est jamais enclenchée : $10^n + 1 \\equiv 1^n + 1 = 2 \\not\\equiv 0 \\pmod{9}$ pour tout $n$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'TD Ex. 18',
            stepTheme: 'slate',
            stepTitle: 'Le paradoxe de la rareté (contradiction par transitivité)',
            paragraphText:
              'Dans le TD Ex. 18 : Rare $\\implies$ Désirable $\\implies$ Tout le monde l’achète $\\implies$ N’est plus rare. Par transitivité, on obtient Rare $\\implies \\neg$Rare, ce qui est une contradiction si le produit est rare : un positionnement fondé uniquement sur la rareté s’autodétruit sans contrôle de l’offre.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Que peut-on conclure d’une proposition $P$ telle que l’implication $P \\implies \\neg P$ soit vraie ?',
              options: [
                '$P$ est nécessairement vraie.',
                '$P$ est une tautologie.',
                'On ne peut rien conclure sur $P$.',
                '$P$ est nécessairement fausse.',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$(P \\implies \\neg P) \\equiv (\\neg P \\lor \\neg P) \\equiv \\neg P$. Si $P$ était vraie, on obtiendrait $\\neg P$ (contradiction), donc $P$ est forcément fausse.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Récurrence forte',
            stepTheme: 'blue',
            stepTitle: 'Quand utiliser la récurrence forte ?',
            paragraphText:
              'Dans la **récurrence forte**, pour prouver $P(n+1)$, on suppose que $P(k)$ est vraie pour **tous** les entiers $k \\in \\{n_0, n_0 + 1, \\dots, n\\}$ (et pas seulement pour $n$). C’est indispensable par exemple pour prouver que tout entier $n \\geqslant 2$ possède un diviseur premier ou pour une suite dépendant de $u_n$ et $u_{n-1}$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Quelle différence distingue la récurrence forte de la récurrence classique (simple) ?',
              options: [
                'Dans l’hérédité, on suppose la propriété vraie pour tous les rangs de $n_0$ jusqu’à $n$ afin de démontrer le rang $n + 1$.',
                'La récurrence forte ne nécessite pas d’initialisation.',
                'La récurrence forte ne s’applique qu’aux nombres réels.',
                'La récurrence forte prouve $P(n)$ à partir de $P(n + 1)$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’hypothèse de récurrence forte est $\\forall k \\in \\{n_0, \\dots, n\\},\\ P(k)$, ce qui est équivalent logiquement à la récurrence simple mais beaucoup plus pratique quand $n+1$ dépend de rangs antérieurs.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Analyse-Synthèse',
            stepTheme: 'blue',
            stepTitle: 'Les deux temps du raisonnement par analyse-synthèse',
            paragraphText:
              'Pour résoudre un problème d’existence et d’unicité (ex. décomposer toute fonction $f : \\mathbb{R} \\to \\mathbb{R}$ en somme d’une fonction paire et d’une fonction impaire) : (1) **Analyse** : on suppose $f = p + i$ et on trouve les seules expressions possibles $p(x) = \\frac{f(x)+f(-x)}{2}$ et $i(x) = \\frac{f(x)-f(-x)}{2}$ (ce qui prouve l’unicité) ; (2) **Synthèse** : on vérifie que ces fonctions $p$ et $i$ sont bien paire, impaire et de somme $f$ (ce qui prouve l’existence).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Dans un raisonnement par analyse-synthèse, quel est le rôle précis de la phase de **synthèse** ?',
              options: [
                'Supposer la solution existante pour éliminer les candidats impossibles.',
                'Vérifier que les candidats trouvés lors de l’analyse satisfont bien toutes les conditions du problème (preuve de l’existence).',
                'Prouver que le problème n’a aucune solution.',
                'Remplacer la démonstration par un graphique.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’analyse fournit des conditions nécessaires (et souvent l’unicité) ; la synthèse vérifie la suffisance et démontre l’existence effective de la solution.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Ensembles, relations binaires et applications
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_logique_ch3',
    subjectId: 'lmd_logique_math',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Logique et Raisonnement Mathématique (Cours Ch. 1, 4 & 5 ; TD Ex. 30–40)',
    title: 'Chapitre 3 — Ensembles, relations d’équivalence et relations d’ordre',
    summary:
      'Diagrammes de Venn, partitions, propriétés des relations binaires (réflexivité, symétrie, antisymétrie, transitivité), classes d’équivalence et ordres partiels/totaux.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_logique_ch3_p1',
        order: 1,
        title: 'Ensembles, diagrammes de Venn et partitions',
        summary:
          'Résoudre des problèmes de dénombrement par diagrammes de Venn et vérifier les trois axiomes d’une partition.',
        conceptExplanation:
          'Un ensemble peut être défini **en extension** (liste exhaustive : $A = \\{1, 2, 3, 4\\}$) ou **en compréhension** (propriété caractéristique : $P = \\{2n \\mid n \\in \\mathbb{Z}\\}$).\n\n' +
          'Les **diagrammes de Venn** permettent de résoudre rapidement des problèmes de segmentation marketing à 2 ou 3 ensembles en utilisant la formule d’inclusion-exclusion : $|A \\cup B| = |A| + |B| - |A \\cap B|$, et $|\\overline{A \\cup B}| = |E| - |A \\cup B|$.\n\n' +
          '**Partition d’un ensemble $E$** : une famille $\\{A_i\\}_{i \\in I}$ de sous-ensembles de $E$ forme une partition de $E$ si elle vérifie les **trois conditions** :\n' +
          '1. Aucune partie n’est vide : $\\forall i \\in I,\\ A_i \\neq \\emptyset$.\n' +
          '2. Elles sont deux à deux disjointes : $i \\neq j \\implies A_i \\cap A_j = \\emptyset$.\n' +
          '3. Leur réunion recouvre tout $E$ : $\\bigcup_{i \\in I} A_i = E$.',
        formulas: [
          {
            name: 'Inclusion-exclusion pour 2 ensembles',
            formula: '|A \\cup B| = |A| + |B| - |A \\cap B|',
            note: 'TD Ex. 30 : 100 clients, 60 aiment A, 45 aiment B, 20 ni A ni B ⇒ |A ∩ B| = 25.',
          },
          {
            name: 'Axiomes d’une partition de E',
            formula: 'A_i \\neq \\emptyset, \\qquad A_i \\cap A_j = \\emptyset \\ (i \\neq j), \\qquad \\bigcup_{i \\in I} A_i = E',
            note: 'Exemple du cours : {A, C_E(A)} est une partition dès que A ≠ ∅ et A ≠ E.',
          },
        ],
        keyRule:
          'Une partition exige les **trois** critères simultanément : parties **non vides**, **deux à deux disjointes**, et **couvrantes**.',
        workedExample: {
          title: 'Sondage clients par diagramme de Venn (TD Ex. 30)',
          statement:
            'Sur un échantillon de $100$ clients, $60$ aiment la marque $A$, $45$ aiment la marque $B$, et $20$ n’aiment ni $A$ ni $B$. Combien de clients aiment simultanément $A$ et $B$ ? Combien aiment uniquement $A$ ?',
          methodSteps: [
            'Le nombre de clients qui aiment au moins une des deux marques est $|A \\cup B| = 100 - 20 = 80$.',
            'Par la formule $|A \\cup B| = |A| + |B| - |A \\cap B|$, on a $80 = 60 + 45 - |A \\cap B|$.',
            'D’où $|A \\cap B| = 105 - 80 = 25$ clients aiment simultanément $A$ et $B$.',
            'Clients aimant uniquement $A$ : $|A \\setminus B| = |A| - |A \\cap B| = 60 - 25 = 35$.',
          ],
          conclusion:
            '$25$ clients aiment à la fois $A$ et $B$, et $35$ aiment uniquement $A$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'exemple',
            stepBadge: 'TD Ex. 30',
            stepTheme: 'slate',
            stepTitle: 'Calculer une intersection via diagramme de Venn',
            paragraphText:
              'Dans un panel de taille $N$, les individus qui n’aiment ni $A$ ni $B$ sont $|\\overline{A \\cup B}| = N - |A \\cup B|$. On en déduit aussitôt $|A \\cup B|$, puis $|A \\cap B| = |A| + |B| - |A \\cup B|$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Sur $120$ étudiants, $70$ suivent le club Data ($A$), $65$ suivent le club Réseaux ($B$), et $15$ ne suivent aucun des deux. Combien suivent les deux clubs à la fois ?',
              options: ['$15$', '$30$', '$20$', '$35$'],
              correctAnswerIndex: 1,
              explanation:
                '$|A \\cup B| = 120 - 15 = 105$. Donc $|A \\cap B| = 70 + 65 - 105 = 30$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Écritures',
            stepTheme: 'blue',
            stepTitle: 'Écriture en extension vs écriture en compréhension',
            paragraphText:
              'Écrire un ensemble en **extension** consiste à lister explicitement ses éléments (ex. $E = \\{0, 1, 2, 3, 4, 5, 6\\}$). L’écrire en **compréhension** consiste à donner une propriété caractéristique (ex. $P = \\{2n \\mid n \\in \\mathbb{Z}\\}$), seule méthode possible pour les ensembles infinis.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Comment s’écrit en extension l’ensemble $A = \\{x \\in \\mathbb{Z} \\mid x^2 \\leqslant 4\\}$ ?',
              options: [
                '$\\{0, 1, 2\\}$',
                '$[-2, 2]$',
                '$\\{-2, -1, 0, 1, 2\\}$',
                '$\\{-4, -1, 0, 1, 4\\}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les entiers relatifs $x \\in \\mathbb{Z}$ vérifiant $x^2 \\leqslant 4$ (soit $-2 \\leqslant x \\leqslant 2$) sont $-2, -1, 0, 1, 2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Partition (Ch. 1)',
            stepTheme: 'blue',
            stepTitle: 'Vérifier qu’une famille est une partition de $E$',
            paragraphText:
              'Pour $E = \\{a, b, c, d, e, f\\}$ (Exemple 27 du cours), la famille $\\{\\{a\\},\\ \\{b, c, f\\},\\ \\{d, e\\}\\}$ est une partition de $E$, mais $\\{\\{a\\},\\ \\{b, c, f\\},\\ \\{b, c, d, e\\}\\}$ n’en est pas une car les deux dernières parties ont une intersection non vide $\\{b, c\\}$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Pour $E = \\{1, 2, 3, 4, 5\\}$, quelle famille de parties forme une **partition** de $E$ ?',
              options: [
                '$\\{\\{1, 2\\},\\ \\{3\\},\\ \\{4, 5\\}\\}$',
                '$\\{\\{1, 2\\},\\ \\{2, 3\\},\\ \\{4, 5\\}\\}$',
                '$\\{\\{1, 2\\},\\ \\{4, 5\\}\\}$',
                '$\\{\\emptyset,\\ \\{1, 2, 3\\},\\ \\{4, 5\\}\\}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Seule $\\{\\{1, 2\\}, \\{3\\}, \\{4, 5\\}\\}$ vérifie les 3 critères : parties non vides, deux à deux disjointes et de réunion égale à $E$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Diagramme 3 ensembles',
            stepTheme: 'violet',
            stepTitle: 'Nombre de régions d’un diagramme de Venn à 3 ensembles',
            paragraphText:
              'Un diagramme de Venn pour $3$ ensembles $A, B, C$ dans un référentiel $E$ (« diagramme en trèfle », Cours Ch. 1) délimite exactement $2^3 = 8$ zones élémentaires disjointes (selon l’appartenance ou non à chacun des 3 ensembles).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Combien de zones élémentaires disjointes (y compris l’extérieur) comporte un diagramme de Venn pour $3$ ensembles $A, B, C$ ?',
              options: ['$3$', '$6$', '$7$', '$8$'],
              correctAnswerIndex: 3,
              explanation:
                'Pour chaque ensemble, un élément y appartient ou non (2 choix), soit $2^3 = 8$ zones élémentaires au total.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Appartenance à A ∩ B',
            stepTheme: 'orange',
            stepTitle: 'Nier l’appartenance à une intersection ou une réunion',
            paragraphText:
              'D’après les Remarques 8 et 9 du cours : $a \\notin (A \\cup B)$ signifie $(a \\notin A) \\land (a \\notin B)$, tandis que $a \\notin (A \\cap B)$ signifie $(a \\notin A) \\lor (a \\notin B)$ (soit 3 situations possibles sur le diagramme de Venn).',
            keyRule: '$a \\notin (A \\cap B) \\iff a \\notin A \\text{ OU } a \\notin B$.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Si un élément $x$ vérifie $x \\notin (A \\cup B)$, quelle condition vérifie-t-il obligatoirement ?',
              options: [
                '$x \\notin A$ ou $x \\notin B$.',
                '$x \\notin A$ et $x \\notin B$.',
                '$x \\in A$ et $x \\notin B$.',
                '$A \\cup B = \\emptyset$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour ne pas être dans la réunion de $A$ et $B$, $x$ ne doit appartenir ni à $A$, ni à $B$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'TD Ex. 37',
            stepTheme: 'violet',
            stepTitle: 'Correspondance fondamentale entre partition et relation d’équivalence',
            paragraphText:
              'Toute relation d’équivalence $\\sim$ sur un ensemble $E$ découpe $E$ en **classes d’équivalence** qui forment une **partition** de $E$ (chaque élément appartient à exactement une classe). Réciproquement, toute partition de $E$ définit une unique relation d’équivalence (« appartenir au même groupe »).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Quel est le lien exact entre une relation d’équivalence sur un ensemble de prospects $E$ et une partition de $E$ (TD Ex. 37) ?',
              options: [
                'Les classes d’équivalence peuvent se chevaucher sur certains prospects.',
                'Une relation d’équivalence ne définit une partition que si $E$ est infini.',
                'Les classes d’équivalence d’une relation d’équivalence forment exactement une partition de $E$, et réciproquement.',
                'Une partition correspond toujours à une relation d’ordre total.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Théorème fondamental : les classes d’équivalence sont non vides, deux à deux disjointes (ou confondues) et recouvrent tout $E$, formant ainsi une partition de $E$.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_logique_ch3_p2',
        order: 2,
        title: 'Relations binaires : équivalence, ordre partiel et ordre total',
        summary:
          'Analyser réflexivité, symétrie, antisymétrie et transitivité sur des relations mathématiques et managériales.',
        conceptExplanation:
          'Une **relation binaire** $\\mathcal{R}$ sur un ensemble $E$ peut posséder quatre propriétés clés :\n' +
          '• **Réflexive** : $\\forall x \\in E,\\ x \\mathcal{R} x$.\n' +
          '• **Symétrique** : $\\forall x, y \\in E,\\ x \\mathcal{R} y \\implies y \\mathcal{R} x$.\n' +
          '• **Antisymétrique** : $\\forall x, y \\in E,\\ (x \\mathcal{R} y \\land y \\mathcal{R} x) \\implies x = y$.\n' +
          '• **Transitive** : $\\forall x, y, z \\in E,\\ (x \\mathcal{R} y \\land y \\mathcal{R} z) \\implies x \\mathcal{R} z$.\n\n' +
          'À partir de ces propriétés, on distingue deux structures majeures :\n' +
          '1. **Relation d’équivalence** = **Réflexive + Symétrique + Transitive** (ex. même code promo, même zone géographique, congruence modulo $n$). La classe d’équivalence de $x$ est $\\bar{x} = \\{y \\in E \\mid x \\sim y\\}$.\n' +
          '2. **Relation d’ordre** = **Réflexive + Antisymétrique + Transitive**. L’ordre est **total** si tous les couples sont comparables ($\\forall x, y,\\ x \\mathcal{R} y \\lor y \\mathcal{R} x$), et **partiel** sinon (ex. inclusion $\\subseteq$ sur $\\mathcal{P}(S)$, précédence de tâches marketing, domination stratégique Prix/Qualité).',
        formulas: [
          {
            name: 'Relation d’équivalence vs Relation d’ordre',
            formula: '\\text{Équivalence} = (\\text{R},\\ \\text{S},\\ \\text{T}), \\qquad \\text{Ordre} = (\\text{R},\\ \\text{AS},\\ \\text{T})',
            note: 'R = Réflexive, S = Symétrique, AS = Antisymétrique, T = Transitive.',
          },
          {
            name: 'Condition d’antisymétrie',
            formula: '\\forall x, y \\in E,\\quad (x \\mathcal{R} y \\land y \\mathcal{R} x) \\implies x = y',
            note: 'Attention : antisymétrique ne signifie PAS « non symétrique » ! (L’égalité = est à la fois symétrique et antisymétrique.)',
          },
        ],
        keyRule:
          'Vérifier toujours les contre-exemples de **transitivité** (« avoir un produit commun », « être concurrent direct ») et d’**antisymétrie** (`Prix(x) ≤ Prix(y)` échoue si deux articles différents ont le même prix !).',
        workedExample: {
          title: 'Étude des relations du TD Ex. 31, 32, 36 et 38',
          statement:
            'Déterminer la nature de : (a) $x \\mathcal{R}_1 y \\iff « x \\text{ et } y \\text{ ont acheté au moins un produit en commun} »$ ; (b) $x \\mathcal{R}_2 y \\iff \\text{Prix}(x) \\leqslant \\text{Prix}(y)$ sur un catalogue d’articles ; (c) la domination stratégique $S_1 \\gg S_2 \\iff \\text{Prix}(S_1) \\leqslant \\text{Prix}(S_2) \\land \\text{Qualité}(S_1) \\geqslant \\text{Qualité}(S_2)$.',
          methodSteps: [
            '(a) $\\mathcal{R}_1$ est réflexive (si tout client a acheté un produit) et symétrique, mais **non transitive** : $x$ et $y$ peuvent partager le produit A, $y$ et $z$ partager le produit B, sans que $x$ et $z$ n’aient de produit commun → ce n’est pas une relation d’équivalence.',
            '(b) $\\mathcal{R}_2$ est réflexive et transitive, mais **non antisymétrique** : si deux articles distincts $x \\neq y$ coûtent tous deux $10\\,000$ FCFA, on a $x \\mathcal{R}_2 y$ et $y \\mathcal{R}_2 x$ sans que $x = y$ → ce n’est pas une relation d’ordre (c’est un préordre).',
            '(c) Sur des stratégies distinctes caractérisées par leur couple (Prix, Qualité), $\\gg$ est un **ordre partiel** car une stratégie moins chère mais de moindre qualité est incomparable avec une stratégie plus chère et meilleure.',
          ],
          conclusion:
            '$\\mathcal{R}_1$ échoue à la transitivité ; $\\mathcal{R}_2$ échoue à l’antisymétrie ; la domination stratégique est un ordre partiel.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'exemple',
            stepBadge: 'TD Ex. 32 & 35',
            stepTheme: 'slate',
            stepTitle: 'Reconnaître une relation d’équivalence',
            paragraphText:
              'La relation $x \\sim y \\iff « x \\text{ et } y \\text{ ont le même code promo} »$ (TD Ex. 32) ou « habitent dans la même zone géographique » (TD Ex. 35) est réflexive, symétrique et transitive : c’est une relation d’équivalence. La classe d’équivalence d’un produit est l’ensemble des produits partageant son code promo.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Quelles sont les trois propriétés exactes qui définissent une **relation d’équivalence** ?',
              options: [
                'Réflexive, antisymétrique et transitive.',
                'Réflexive, symétrique et transitive.',
                'Symétrique, antisymétrique et totale.',
                'Réflexive, symétrique et totale.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une relation d’équivalence est réflexive, symétrique et transitive (R, S, T).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'TD Ex. 31 & 40',
            stepTheme: 'orange',
            stepTitle: 'Relations symétriques mais non transitives',
            paragraphText:
              'La relation « être un concurrent direct de » (TD Ex. 40) est symétrique (si A est concurrent de B, B l’est de A), mais ni réflexive (une entreprise n’est pas son propre concurrent), ni transitive (A peut concurrencer B sur le mobile, B concurrencer C sur le cloud, sans que A et C ne soient concurrents directs).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Sur l’ensemble des clients ayant fait au moins un achat, pourquoi la relation $x \\mathcal{R} y \\iff « x \\text{ et } y \\text{ ont acheté au moins un produit en commun} »$ N’EST-ELLE PAS une relation d’équivalence (TD Ex. 31) ?',
              options: [
                'Parce qu’elle n’est pas symétrique.',
                'Parce qu’elle n’est pas réflexive.',
                'Parce qu’elle n’est pas transitive.',
                'Parce qu’elle n’est pas antisymétrique.',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$x$ et $y$ peuvent partager un produit $P_1$, $y$ et $z$ un produit $P_2$, sans que $x$ et $z$ n’aient aucun produit en commun : la transitivité échoue.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'TD Ex. 39',
            stepTheme: 'blue',
            stepTitle: 'Relation d’ordre partiel : l’inclusion $\\subseteq$ sur $\\mathcal{P}(S)$',
            paragraphText:
              'Sur l’ensemble $\\mathcal{P}(S)$ des packs de services optionnels d’un abonnement (TD Ex. 39), l’inclusion $\\subseteq$ est réflexive ($A \\subseteq A$), antisymétrique ($A \\subseteq B \\land B \\subseteq A \\implies A = B$) et transitive. C’est une **relation d’ordre partiel** (car dès que $|S| \\geqslant 2$, $\\{s_1\\}$ et $\\{s_2\\}$ ne sont pas comparables).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Pourquoi la relation d’inclusion $\\subseteq$ sur $\\mathcal{P}(S)$ (avec $|S| \\geqslant 2$) est-elle un ordre **partiel** et non total (TD Ex. 39) ?',
              options: [
                'Parce qu’il existe des parties $A$ et $B$ de $S$ telles que $A \\not\\subseteq B$ et $B \\not\\subseteq A$.',
                'Parce qu’elle n’est pas transitive.',
                'Parce que $\\emptyset$ n’est pas inclus dans $S$.',
                'Parce qu’elle n’est pas réflexive.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour deux services distincts $a \\neq b$, ni $\\{a\\} \\subseteq \\{b\\}$ ni $\\{b\\} \\subseteq \\{a\\}$ n’est vrai : la propriété de totalité n’est pas vérifiée.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'TD Ex. 38',
            stepTheme: 'orange',
            stepTitle: 'Échec de l’antisymétrie pour $x \\mathcal{R} y \\iff \\text{Prix}(x) \\leqslant \\text{Prix}(y)$',
            paragraphText:
              'Sur un catalogue contenant deux articles distincts $x$ et $y$ vendus au même prix, on a simultanément $\\text{Prix}(x) \\leqslant \\text{Prix}(y)$ et $\\text{Prix}(y) \\leqslant \\text{Prix}(x)$, donc $x \\mathcal{R} y$ et $y \\mathcal{R} x$, pourtant $x \\neq y$ ! L’antisymétrie échoue.',
            keyRule: 'Comparer des objets par un attribut non injectif (prix, âge, note) viole l’antisymétrie dès que deux objets distincts ont la même valeur d’attribut.',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Quelle propriété de la relation d’ordre échoue pour $x \\mathcal{R} y \\iff \\text{Prix}(x) \\leqslant \\text{Prix}(y)$ lorsque deux articles différents ont le même prix (TD Ex. 38) ?',
              options: [
                'La réflexivité.',
                'La transitivité.',
                'La symétrie.',
                'L’antisymétrie.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Si $\\text{Prix}(x) = \\text{Prix}(y)$ avec $x \\neq y$, alors $x \\mathcal{R} y$ et $y \\mathcal{R} x$ sont vrais sans que $x = y$, ce qui contredit l’antisymétrie.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'TD Ex. 33 & 34',
            stepTheme: 'slate',
            stepTitle: 'Ordre total, paradoxe de Condorcet et tâches parallèles',
            paragraphText:
              'Dans la gestion d’un projet marketing (TD Ex. 34), la précédence des tâches ($x \\leqslant y$) forme un **ordre partiel** (graphe acyclique dirigé / DAG) car deux tâches peuvent être exécutées en parallèle. En choix collectif de marques (TD Ex. 33), l’agrégation de votes peut violer la transitivité (paradoxe de Condorcet : $A \\succ B$, $B \\succ C$, mais $C \\succ A$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Dans un projet marketing, pourquoi la relation « la tâche $x$ précède la tâche $y$ » est-elle généralement un ordre **partiel** (TD Ex. 34) ?',
              options: [
                'Parce qu’une tâche ne précède jamais une autre.',
                'Parce que deux tâches indépendantes peuvent être menées en parallèle sans qu’aucune ne précède l’autre.',
                'Parce que les tâches peuvent former des cycles infinis.',
                'Parce que la relation est symétrique.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Deux tâches parallèles sont incomparables : ni $x \\leqslant y$ ni $y \\leqslant x$, donc la totalité n’est pas satisfaite.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Représentation (Ch. 4)',
            stepTheme: 'violet',
            stepTitle: 'Matrice binaire et diagramme sagittal d’une relation',
            paragraphText:
              'Sur un ensemble fini $E$, une relation binaire $\\mathcal{R}$ peut être représentée par une **matrice binaire** $M$ (où $M_{i,j} = 1$ ssi $x_i \\mathcal{R} x_j$, sinon $0$) ou un **diagramme sagittal** (flèches). $\\mathcal{R}$ est réflexive ssi la diagonale principale de $M$ ne contient que des $1$ ; elle est symétrique ssi $M$ est symétrique ($M^T = M$).',
            exercise: {
              id: 'lmd_entd_l1_logique_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Comment reconnaît-on sur sa matrice binaire $M$ qu’une relation sur un ensemble fini $E$ est **réflexive** ?',
              options: [
                'Toutes les entrées de $M$ valent $1$.',
                'La diagonale principale de $M$ ne contient que des $0$.',
                'Tous les coefficients de la diagonale principale de $M$ valent $1$.',
                'Chaque ligne contient exactement un $1$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Réflexivité signifie $\\forall i,\\ x_i \\mathcal{R} x_i$, donc $M_{i,i} = 1$ pour tout $i$ (et chaque sommet possède une boucle sur le diagramme sagittal).',
            },
          },
        ],
      }),
    ],
  },
];
