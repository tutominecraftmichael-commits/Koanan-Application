import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 10 : Probabilité.pdf » (format v2).
export const MATHS_1RE_C_L10_PROBABILITE: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l10_probabilite',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 10,
  title: 'Leçon 10 : Probabilité',
  summary:
    'Expérience aléatoire, univers et événements, opérations sur les ensembles et incompatibilité, probabilité sur un univers fini, équiprobabilité, liens avec le dénombrement et modélisation.',
  officialVolumeHours: 6,
  contentVersion: 2,
  source: '1ère C - Leçon 10 : Probabilité.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Expérience aléatoire, univers et événements
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l10_probabilite_p01',
      order: 1,
      title: 'Expérience aléatoire, univers et événements',
      summary:
        'Distinguer une expérience aléatoire, écrire son univers en extension et identifier les types d’événements.',
      conceptExplanation:
        "Une **expérience aléatoire** (ou épreuve aléatoire) est une expérience dont on ne peut pas prévoir le résultat à l'avance, bien que l'on connaisse l'ensemble de tous les résultats possibles.\n\n- Chaque résultat possible s'appelle une **éventualité** (notée $e_i$).\n- L'ensemble de toutes les éventualités s'appelle l'**univers**, noté $U$ ou $\\Omega$.\n- On appelle **événement** toute partie (sous-ensemble) $A$ de $U$ ($A \\subset U$).\n\nCas particuliers importants :\n- **Événement élémentaire** : singleton $\\{e_i\\}$ ne contenant qu'une seule éventualité.\n- **Événement impossible** : la partie vide $\\emptyset$ (aucune éventualité ne le réalise).\n- **Événement certain** : l'univers entier $U$ (toujours réalisé).",
      keyRule:
        'Un univers U regroupe tous les résultats possibles ; un singleton est élémentaire, ∅ est impossible et U est certain.',
      formulas: [
        { name: 'Univers d’un dé équilibré', formula: '\\Omega = \\{1; 2; 3; 4; 5; 6\\}' },
        { name: 'Lancer de deux pièces', formula: 'U = \\{(P,P), (P,F), (F,P), (F,F)\\}' },
        { name: 'Événements extrêmes', formula: 'A = \\emptyset \\text{ (impossible)}, \\quad A = U \\text{ (certain)}' },
      ],
      workedExample: {
        title: 'Identifier une expérience aléatoire et décrire son univers',
        statement:
          'On considère trois expériences : (E1) choisir une bouteille de Fanta parmi une Fanta, une Coca et une Sprite posées sur une table ; (E2) tirer une boule au hasard parmi 5 boules indiscernables numérotées de 1 à 5 ; (E3) lancer un dé cubique numéroté de 1 à 6.',
        methodSteps: [
          '(E1) impose un choix déterminé à l’avance (« prendre la bouteille de Fanta ») : ce n’est pas une expérience aléatoire.',
          '(E2) donne un résultat imprévisible parmi cinq boules indiscernables au toucher : c’est une expérience aléatoire d’univers $U = \\{1; 2; 3; 4; 5\\}$.',
          'Dans (E3), l’univers est $\\Omega = \\{1; 2; 3; 4; 5; 6\\}$ ; obtenir « $7$ » correspond à $\\emptyset$ (événement impossible) et obtenir « un entier inférieur ou égal à $6$ » correspond à $\\Omega$ (événement certain).',
        ],
        conclusion: 'Seules (E2) et (E3) sont des expériences aléatoires.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Reconnaître une expérience aléatoire',
          stepTitle: 'Incertitude du résultat mais liste connue des issues',
          paragraphText:
            'Pour qu’une expérience soit aléatoire, il faut connaître l’ensemble des issues possibles tout en étant incapable de prédire avec certitude celle qui va se produire. Choisir explicitement la bouteille de Fanta sur une table n’a aucun hasard.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p01_q1',
            type: 'mcq',
            prompt: 'Parmi ces expériences, laquelle N’EST PAS une expérience aléatoire ?',
            options: [
              'Tirer au hasard une boule parmi 5 boules indiscernables numérotées de 1 à 5',
              'Lancer deux pièces de monnaie équilibrées',
              'Prendre volontairement la bouteille de Fanta posée à côté d’une Coca et d’une Sprite',
              'Lancer un dé cubique équilibré numéroté de 1 à 6',
            ],
            correctAnswerIndex: 2,
            explanation: 'Choisir précisément la bouteille de Fanta fixe le résultat à l’avance : il n’y a aucun caractère aléatoire.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Univers en extension',
          stepTitle: 'Écrire l’univers du lancer de deux pièces',
          paragraphText:
            'Lorsqu’on lance deux pièces de monnaie (ou une pièce deux fois de suite), une éventualité est un couple ordonné $(1^{\\text{re}}\\text{ pièce}, 2^{\\text{e}}\\text{ pièce})$. L’ordre compte pour distinguer $(P, F)$ de $(F, P)$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p01_q2',
            type: 'mcq',
            prompt: 'Quel est le cardinal de l’univers $U$ lorsqu’on lance deux pièces de monnaie équilibrées ?',
            options: ['$2$', '$3$', '$4$', '$6$'],
            correctAnswerIndex: 2,
            explanation: 'L’univers est $U = \\{(P,P), (P,F), (F,P), (F,F)\\}$, qui comporte $4$ couples distincts.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Événements élémentaire, impossible et certain',
          stepTitle: 'Classer un sous-ensemble de l’univers U',
          paragraphText:
            'Un singleton $\\{e_i\\}$ est un événement élémentaire. La partie vide $\\emptyset$ représente l’événement impossible (par exemple obtenir $7$ sur un dé à 6 faces). L’ensemble $U$ tout entier est l’événement certain.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p01_q3',
            type: 'mcq',
            prompt: 'Lors du lancer d’un dé cubique numéroté de 1 à 6, que représente l’événement $A$ : « obtenir le chiffre 7 » ?',
            options: [
              'Un événement élémentaire',
              'Un événement impossible',
              'Un événement certain',
              'L’univers $\\Omega$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Comme $7 \\notin \\{1; 2; 3; 4; 5; 6\\}$, aucune issue ne réalise $A$ : $A = \\emptyset$ est un événement impossible.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Nature mathématique des éventualités',
          stepTitle: 'Associer une expérience au bon type d’objets',
          paragraphText:
            'Selon l’expérience, l’univers regroupe des $p$-uplets (tirages successifs avec remise ou lancers répétés), des $p$-arrangements (tirages successifs sans remise) ou des $p$-combinaisons (tirages simultanés).',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p01_q4',
            type: 'mcq',
            prompt: 'On choisit simultanément deux élèves dans une classe de $25$ élèves. De quoi est constitué l’univers ?',
            options: [
              'De $2$-arrangements d’élèves ($600$ cas)',
              'De $2$-combinaisons de deux élèves ($300$ combinaisons)',
              'De $2$-uplets avec répétition ($625$ cas)',
              'De $25$ singletons seulement',
            ],
            correctAnswerIndex: 1,
            explanation: 'Un choix simultané ne tient pas compte de l’ordre : ce sont des combinaisons de $2$ éléments parmi $25$, soit $C_{25}^2 = 300$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier l’ordre dans un lancer successif',
          stepTitle: 'Distinguer tirage successif sans remise et avec remise',
          paragraphText:
            'Tirer successivement sans remise $2$ boules parmi $4$ donne des $2$-arrangements ($A_4^2 = 12$), tandis que taper un code à $4$ chiffres sur un clavier à $10$ touches donne des $4$-uplets ($10^4 = 10\\,000$ codes).',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p01_q5',
            type: 'mcq',
            prompt: 'On tire successivement et sans remise deux boules dans une urne qui en contient $4$. Combien d’issues comporte l’univers ?',
            options: ['$6$', '$12$', '$16$', '$24$'],
            correctAnswerIndex: 1,
            explanation: 'L’ordre intervient et il n’y a pas de répétition : ce sont des $2$-arrangements pris parmi $4$, soit $4 \\times 3 = 12$ issues.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Écriture en extension d’un événement',
          stepTitle: 'Traduire une phrase sur deux lancers de pièce en ensemble',
          paragraphText:
            'Soit $U = \\{(P,P), (P,F), (F,P), (F,F)\\}$. L’événement $A$ « obtenir Pile au $1^{\\text{er}}$ lancer » est $A = \\{(P,P), (P,F)\\}$, et $B$ « obtenir Pile au $2^{\\text{nd}}$ lancer » est $B = \\{(P,P), (F,P)\\}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p01_q6',
            type: 'mcq',
            prompt: 'Dans l’expérience du lancer de deux pièces, quelle écriture en extension décrit l’événement $C$ : « obtenir exactement une fois Pile » ?',
            options: [
              '$\\{(P,P)\\}$',
              '$\\{(P,F), (F,P)\\}$',
              '$\\{(P,P), (P,F), (F,P)\\}$',
              '$\\{(F,F)\\}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Exactement une fois Pile signifie un $P$ et un $F$, soit au premier lancer $(P,F)$, soit au second $(F,P)$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p01_q1',
          type: 'mcq',
          prompt: 'Parmi ces expériences, laquelle N’EST PAS une expérience aléatoire ?',
          options: [
            'Tirer au hasard une boule parmi 5 boules indiscernables numérotées de 1 à 5',
            'Lancer deux pièces de monnaie équilibrées',
            'Prendre volontairement la bouteille de Fanta posée à côté d’une Coca et d’une Sprite',
            'Lancer un dé cubique équilibré numéroté de 1 à 6',
          ],
          correctAnswerIndex: 2,
          explanation: 'Choisir précisément la bouteille de Fanta fixe le résultat à l’avance : il n’y a aucun caractère aléatoire.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p01_q2',
          type: 'mcq',
          prompt: 'Quel est le cardinal de l’univers $U$ lorsqu’on lance deux pièces de monnaie équilibrées ?',
          options: ['$2$', '$3$', '$4$', '$6$'],
          correctAnswerIndex: 2,
          explanation: 'L’univers est $U = \\{(P,P), (P,F), (F,P), (F,F)\\}$, qui comporte $4$ couples distincts.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p01_q3',
          type: 'mcq',
          prompt: 'Lors du lancer d’un dé cubique numéroté de 1 à 6, que représente l’événement $A$ : « obtenir le chiffre 7 » ?',
          options: [
            'Un événement élémentaire',
            'Un événement impossible',
            'Un événement certain',
            'L’univers $\\Omega$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Comme $7 \\notin \\{1; 2; 3; 4; 5; 6\\}$, aucune issue ne réalise $A$ : $A = \\emptyset$ est un événement impossible.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p01_q4',
          type: 'mcq',
          prompt: 'On choisit simultanément deux élèves dans une classe de $25$ élèves. De quoi est constitué l’univers ?',
          options: [
            'De $2$-arrangements d’élèves ($600$ cas)',
            'De $2$-combinaisons de deux élèves ($300$ combinaisons)',
            'De $2$-uplets avec répétition ($625$ cas)',
            'De $25$ singletons seulement',
          ],
          correctAnswerIndex: 1,
          explanation: 'Un choix simultané ne tient pas compte de l’ordre : ce sont des combinaisons de $2$ éléments parmi $25$, soit $C_{25}^2 = 300$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p01_q5',
          type: 'mcq',
          prompt: 'On tire successivement et sans remise deux boules dans une urne qui en contient $4$. Combien d’issues comporte l’univers ?',
          options: ['$6$', '$12$', '$16$', '$24$'],
          correctAnswerIndex: 1,
          explanation: 'L’ordre intervient et il n’y a pas de répétition : ce sont des $2$-arrangements pris parmi $4$, soit $4 \\times 3 = 12$ issues.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p01_q6',
          type: 'mcq',
          prompt: 'Dans l’expérience du lancer de deux pièces, quelle écriture en extension décrit l’événement $C$ : « obtenir exactement une fois Pile » ?',
          options: [
            '$\\{(P,P)\\}$',
            '$\\{(P,F), (F,P)\\}$',
            '$\\{(P,P), (P,F), (F,P)\\}$',
            '$\\{(F,F)\\}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Exactement une fois Pile signifie un $P$ et un $F$, soit au premier lancer $(P,F)$, soit au second $(F,P)$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Opérations sur les événements et incompatibilité
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l10_probabilite_p02',
      order: 2,
      title: 'Opérations sur les événements et incompatibilité',
      summary:
        'Traduire « et », « ou », « contraire » en intersection, réunion et complémentaire, et reconnaître deux événements incompatibles.',
      conceptExplanation:
        "Soient $A$ et $B$ deux événements d'un univers $U$ :\n- **Intersection $A \\cap B$** (« $A$ et $B$ ») : réalisé si une issue réalise à la fois $A$ **et** $B$.\n- **Réunion $A \\cup B$** (« $A$ ou $B$ ») : réalisé si une issue réalise $A$ **ou** $B$ (au moins l'un des deux).\n- **Événement contraire $\\overline{A}$** (ou $C_U^A$) : réalisé lorsque $A$ n'est pas réalisé ; on a toujours $A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$.\n- **Événements incompatibles** : deux événements $A$ et $B$ sont dits incompatibles (ou disjoints) lorsque $A \\cap B = \\emptyset$ (ils ne peuvent pas se produire en même temps).",
      keyRule:
        '« A et B » correspond à A ∩ B, « A ou B » à A ∪ B, le contraire de A à Ā, et incompatibles signifie A ∩ B = ∅.',
      formulas: [
        { name: 'Contraire d’un événement', formula: 'A \\cup \\overline{A} = U \\quad \\text{et} \\quad A \\cap \\overline{A} = \\emptyset' },
        { name: 'Incompatibilité', formula: 'A \\text{ et } B \\text{ incompatibles} \\iff A \\cap B = \\emptyset' },
        { name: 'Lois de De Morgan', formula: '\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}, \\quad \\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}' },
      ],
      workedExample: {
        title: 'Tester des relations entre événements (Exercice 1 du cours)',
        statement:
          'Soient $A$ et $B$ deux événements quelconques d’un univers $U$. Étudie si les trois égalités suivantes sont toujours vraies : (1) $P(A \\cup B) = P(A) + P(B)$ ; (2) $P(A \\cup \\overline{A}) = 1$ ; (3) $P(\\overline{A \\cap B}) = 1 - P(A \\cap B)$.',
        methodSteps: [
          '(1) En général, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. La formule sans soustraction n’est vraie que si $A$ et $B$ sont incompatibles : elle est donc FAUSSE en général.',
          '(2) Comme $A \\cup \\overline{A} = U$, on a $P(A \\cup \\overline{A}) = P(U) = 1$ : c’est toujours VRAI.',
          '(3) Pour tout événement $E$, $P(\\overline{E}) = 1 - P(E)$. En posant $E = A \\cap B$, on obtient $P(\\overline{A \\cap B}) = 1 - P(A \\cap B)$ : c’est toujours VRAI.',
        ],
        conclusion: '(1) Faux en général ; (2) Vrai ; (3) Vrai.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Intersection et réunion d’événements',
          stepTitle: 'Traduire les connecteurs « et » et « ou »',
          paragraphText:
            'Dire qu’une éventualité $e_i$ réalise « $A$ et $B$ » signifie $e_i \\in A \\cap B$. Dire qu’elle réalise « $A$ ou $B$ » signifie $e_i \\in A \\cup B$ (le « ou » mathématique inclut le cas où les deux se produisent).',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p02_q1',
            type: 'mcq',
            prompt:
              'Lors du lancer de deux pièces, $A = \\{(P,P), (P,F)\\}$ et $B = \\{(P,P), (F,P)\\}$. Quel ensemble représente l’événement « $A$ et $B$ » ?',
            options: [
              '$\\{(P,P)\\}$',
              '$\\{(P,P), (P,F), (F,P)\\}$',
              '$\\emptyset$',
              '$\\{(F,F)\\}$',
            ],
            correctAnswerIndex: 0,
            explanation: '« $A$ et $B$ » correspond à l’intersection $A \\cap B = \\{(P,P)\\}$ : obtenir Pile aux deux lancers.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Événement contraire',
          stepTitle: 'Caractériser Ā par union et intersection',
          paragraphText:
            'L’événement contraire $\\overline{A}$ est constitué des éventualités de $U$ qui n’appartiennent pas à $A$. Ainsi $A$ et $\\overline{A}$ sont disjoints et leur réunion recouvre tout $U$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p02_q2',
            type: 'mcq',
            prompt: 'Pour tout événement $A$ d’un univers $U$, quelle affirmation est toujours vraie ?',
            options: [
              '$A \\cup \\overline{A} = \\emptyset$ et $A \\cap \\overline{A} = U$',
              '$A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$',
              '$\\overline{A} = A$',
              '$A$ et $\\overline{A}$ ont toujours le même cardinal',
            ],
            correctAnswerIndex: 1,
            explanation: 'Une issue réalise soit $A$, soit $\\overline{A}$, jamais les deux à la fois : $A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Événements incompatibles',
          stepTitle: 'Reconnaître deux événements incompatibles',
          paragraphText:
            'Deux événements $A$ et $B$ sont incompatibles lorsqu’ils ne possèdent aucune issue commune : $A \\cap B = \\emptyset$. Par exemple sur un dé, $A = \\{2; 4; 6\\}$ (« pair ») et $B = \\{1; 3; 5\\}$ (« impair ») sont incompatibles.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p02_q3',
            type: 'mcq',
            prompt:
              'On lance un dé à 6 faces. Soient $E = \\{2; 4; 6\\}$ et $F = \\{3; 6\\}$. Les événements $E$ et $F$ sont-ils incompatibles ?',
            options: [
              'Oui, car $E \\neq F$',
              'Oui, car $E \\cup F \\neq \\Omega$',
              'Non, car $E \\cap F = \\{6\\} \\neq \\emptyset$',
              'Non, car $E$ et $F$ sont contraires',
            ],
            correctAnswerIndex: 2,
            explanation: 'L’issue $6$ réalise à la fois $E$ et $F$, donc $E \\cap F = \\{6\\} \\neq \\emptyset$ : $E$ et $F$ ne sont pas incompatibles.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Nier « au moins un »',
          stepTitle: 'Trouver le contraire de « Monsieur ou Madame fait partie de la délégation »',
          paragraphText:
            'Le contraire de « au moins un des deux » (réunion $M \\cup F$) est « ni l’un ni l’autre » (intersection $\\overline{M} \\cap \\overline{F}$). Cette astuce évite souvent de longs comptages de cas !',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p02_q4',
            type: 'mcq',
            prompt: 'Quel est l’événement contraire de : « M. Zamblé ou Mme Zamblé fait partie de la délégation » ?',
            options: [
              '« M. Zamblé et Mme Zamblé en font tous les deux partie »',
              '« Ni M. Zamblé ni Mme Zamblé n’en fait partie »',
              '« M. Zamblé seul n’en fait pas partie »',
              '« Au moins l’un des deux en fait partie »',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par les lois de De Morgan, le contraire de $M \\cup F$ est $\\overline{M} \\cap \\overline{F}$ : aucun des deux n’est retenu.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre P(A ∪ B) et P(A) + P(B)',
          stepTitle: 'Ne jamais additionner P(A) et P(B) sans vérifier A ∩ B = ∅',
          paragraphText:
            'Beaucoup d’élèves écrivent directement $P(A \\cup B) = P(A) + P(B)$. C’est faux dès que $P(A \\cap B) > 0$, car les issues de l’intersection seraient comptées deux fois !',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p02_q5',
            type: 'mcq',
            prompt: 'L’égalité $P(A \\cup B) = P(A) + P(B)$ est-elle toujours vraie pour deux événements $A$ et $B$ ?',
            options: [
              'Oui, pour tous événements $A$ et $B$',
              'Oui, à condition que $A = \\overline{B}$ uniquement',
              'Non, elle n’est assurée que lorsque $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$)',
              'Non, car $P(A \\cup B) = P(A) \\times P(B)$',
            ],
            correctAnswerIndex: 2,
            explanation: 'La formule générale est $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ ; elle ne se réduit à $P(A)+P(B)$ que si $P(A \\cap B) = 0$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Événement contraire d’une intersection',
          stepTitle: 'Calculer P(A ∩ B̄) ou le complémentaire de A ∩ B',
          paragraphText:
            'Pour deux événements quelconques $A$ et $B$, l’événement $\\overline{A \\cap B}$ signifie « $A$ et $B$ ne sont pas réalisés simultanément ». Sa probabilité vaut simplement $1 - P(A \\cap B)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p02_q6',
            type: 'mcq',
            prompt: 'Si $P(A \\cap B) = 0{,}09$, que vaut $P(\\overline{A \\cap B})$ ?',
            options: ['$0{,}09$', '$0{,}81$', '$0{,}91$', 'On ne peut pas savoir'],
            correctAnswerIndex: 2,
            explanation: 'Par propriété de l’événement contraire, $P(\\overline{A \\cap B}) = 1 - P(A \\cap B) = 1 - 0{,}09 = 0{,}91$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p02_q1',
          type: 'mcq',
          prompt:
            'Lors du lancer de deux pièces, $A = \\{(P,P), (P,F)\\}$ et $B = \\{(P,P), (F,P)\\}$. Quel ensemble représente l’événement « $A$ et $B$ » ?',
          options: [
            '$\\{(P,P)\\}$',
            '$\\{(P,P), (P,F), (F,P)\\}$',
            '$\\emptyset$',
            '$\\{(F,F)\\}$',
          ],
          correctAnswerIndex: 0,
          explanation: '« $A$ et $B$ » correspond à l’intersection $A \\cap B = \\{(P,P)\\}$ : obtenir Pile aux deux lancers.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p02_q2',
          type: 'mcq',
          prompt: 'Pour tout événement $A$ d’un univers $U$, quelle affirmation est toujours vraie ?',
          options: [
            '$A \\cup \\overline{A} = \\emptyset$ et $A \\cap \\overline{A} = U$',
            '$A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$',
            '$\\overline{A} = A$',
            '$A$ et $\\overline{A}$ ont toujours le même cardinal',
          ],
          correctAnswerIndex: 1,
          explanation: 'Une issue réalise soit $A$, soit $\\overline{A}$, jamais les deux à la fois : $A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p02_q3',
          type: 'mcq',
          prompt:
            'On lance un dé à 6 faces. Soient $E = \\{2; 4; 6\\}$ et $F = \\{3; 6\\}$. Les événements $E$ et $F$ sont-ils incompatibles ?',
          options: [
            'Oui, car $E \\neq F$',
            'Oui, car $E \\cup F \\neq \\Omega$',
            'Non, car $E \\cap F = \\{6\\} \\neq \\emptyset$',
            'Non, car $E$ et $F$ sont contraires',
          ],
          correctAnswerIndex: 2,
          explanation: 'L’issue $6$ réalise à la fois $E$ et $F$, donc $E \\cap F = \\{6\\} \\neq \\emptyset$ : $E$ et $F$ ne sont pas incompatibles.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p02_q4',
          type: 'mcq',
          prompt: 'Quel est l’événement contraire de : « M. Zamblé ou Mme Zamblé fait partie de la délégation » ?',
          options: [
            '« M. Zamblé et Mme Zamblé en font tous les deux partie »',
            '« Ni M. Zamblé ni Mme Zamblé n’en fait partie »',
            '« M. Zamblé seul n’en fait pas partie »',
            '« Au moins l’un des deux en fait partie »',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par les lois de De Morgan, le contraire de $M \\cup F$ est $\\overline{M} \\cap \\overline{F}$ : aucun des deux n’est retenu.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p02_q5',
          type: 'mcq',
          prompt: 'L’égalité $P(A \\cup B) = P(A) + P(B)$ est-elle toujours vraie pour deux événements $A$ et $B$ ?',
          options: [
            'Oui, pour tous événements $A$ et $B$',
            'Oui, à condition que $A = \\overline{B}$ uniquement',
            'Non, elle n’est assurée que lorsque $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$)',
            'Non, car $P(A \\cup B) = P(A) \\times P(B)$',
          ],
          correctAnswerIndex: 2,
          explanation: 'La formule générale est $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ ; elle ne se réduit à $P(A)+P(B)$ que si $P(A \\cap B) = 0$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p02_q6',
          type: 'mcq',
          prompt: 'Si $P(A \\cap B) = 0{,}09$, que vaut $P(\\overline{A \\cap B})$ ?',
          options: ['$0{,}09$', '$0{,}81$', '$0{,}91$', 'On ne peut pas savoir'],
          correctAnswerIndex: 2,
          explanation: 'Par propriété de l’événement contraire, $P(\\overline{A \\cap B}) = 1 - P(A \\cap B) = 1 - 0{,}09 = 0{,}91$.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Probabilité sur un univers fini et cas d'un dé truqué
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l10_probabilite_p03',
      order: 3,
      title: 'Probabilité sur un univers fini et dé truqué',
      summary:
        'Appliquer les axiomes d’une probabilité, additionner les probabilités d’issues d’un événement et utiliser la formule de la réunion.',
      conceptExplanation:
        "Une **probabilité** $P$ sur un univers fini $U$ est une application de $\\mathcal{P}(U)$ vers $[0; 1]$ telle que :\n1. $P(U) = 1$ ;\n2. Si $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$), alors $P(A \\cup B) = P(A) + P(B)$.\n\nConséquences fondamentales :\n- Pour tout événement $A$, $0 \\le P(A) \\le 1$ et $P(\\overline{A}) = 1 - P(A)$ ;\n- $P(\\emptyset) = 0$ ;\n- Si $A = \\{e_1; e_2; \\dots; e_k\\}$, alors $P(A) = P(\\{e_1\\}) + P(\\{e_2\\}) + \\dots + P(\\{e_k\\})$ (même si le dé est **truqué** !) ;\n- Pour tous événements $A$ et $B$ : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      keyRule:
        'Même sans équiprobabilité (dé truqué), la probabilité d’un événement est toujours la somme des probabilités de ses issues élémentaires.',
      formulas: [
        { name: 'Probabilité du contraire', formula: 'P(\\overline{A}) = 1 - P(A)' },
        { name: 'Réunion quelconque', formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)' },
        { name: 'Décomposition en issues', formula: 'P(\\{e_1; \\dots; e_k\\}) = \\sum_{i=1}^{k} P(\\{e_i\\})' },
      ],
      workedExample: {
        title: 'Calculer avec un dé truqué (Exercice de fixation p. 4-5)',
        statement:
          'On lance un dé truqué tel que $P(\\{1\\})=\\dfrac{1}{16}$, $P(\\{2\\})=\\dfrac{3}{16}$, $P(\\{3\\})=\\dfrac{5}{16}$, $P(\\{4\\})=\\dfrac{2}{16}$, $P(\\{5\\})=\\dfrac{3}{16}$ et $P(\\{6\\})=\\dfrac{2}{16}$. Calcule $P(A)$ pour $A$ : « obtenir un nombre pair », $P(B)$ pour $B$ : « multiple de $3$ », et $P(C)$ pour $C$ : « différent de $6$ ».',
        methodSteps: [
          '$A = \\{2; 4; 6\\}$ donc $P(A) = P(\\{2\\}) + P(\\{4\\}) + P(\\{6\\}) = \\dfrac{3 + 2 + 2}{16} = \\dfrac{7}{16}$.',
          '$B = \\{3; 6\\}$ donc $P(B) = P(\\{3\\}) + P(\\{6\\}) = \\dfrac{5 + 2}{16} = \\dfrac{7}{16}$.',
          '$C = \\{1; 2; 3; 4; 5\\} = \\overline{\\{6\\}}$ donc $P(C) = 1 - P(\\{6\\}) = 1 - \\dfrac{2}{16} = \\dfrac{14}{16} = \\dfrac{7}{8}$.',
        ],
        conclusion: '$P(A) = \\dfrac{7}{16}$, $P(B) = \\dfrac{7}{16}$ et $P(C) = \\dfrac{7}{8}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Conditions d’existence d’une probabilité',
          stepTitle: 'Vérifier que des probabilités élémentaires sont valides',
          paragraphText:
            'Sur un univers fini $U = \\{e_1; \\dots; e_n\\}$, une loi de probabilité est valide si chaque $P(\\{e_i\\}) \\in [0; 1]$ et si leur somme totale vaut exactement $P(U) = 1$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p03_q1',
            type: 'mcq',
            prompt:
              'Pour un dé à 4 faces, on donne $p_1 = 0{,}2$, $p_2 = 0{,}3$, $p_3 = 0{,}1$. Que doit valoir $p_4$ pour définir une probabilité ?',
            options: ['$0{,}25$', '$0{,}4$', '$0{,}5$', '$0{,}6$'],
            correctAnswerIndex: 1,
            explanation: 'La somme doit valoir $1$ : $p_4 = 1 - (0{,}2 + 0{,}3 + 0{,}1) = 1 - 0{,}6 = 0{,}4$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Formule P(A ∪ B)',
          stepTitle: 'Calculer la probabilité d’une réunion',
          paragraphText:
            'Dans l’Exercice 2 du cours, $P(A) = 0{,}33$, $P(B) = 0{,}15$ et $P(A \\cap B) = 0{,}09$. La formule générale évite de compter $A \\cap B$ deux fois.',
          formula: { name: 'Réunion de deux événements', formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)' },
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p03_q2',
            type: 'mcq',
            prompt: 'Soient $A$ et $B$ deux événements tels que $P(A) = 0{,}33$, $P(B) = 0{,}15$ et $P(A \\cap B) = 0{,}09$. Que vaut $P(A \\cup B)$ ?',
            options: ['$0{,}48$', '$0{,}39$', '$0{,}57$', '$0{,}27$'],
            correctAnswerIndex: 1,
            explanation: '$P(A \\cup B) = 0{,}33 + 0{,}15 - 0{,}09 = 0{,}39$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Somme des issues sur un dé truqué',
          stepTitle: 'Calculer P(A) quand les faces n’ont pas la même chance',
          paragraphText:
            'Sur un dé truqué, la formule $\\text{card}(A)/\\text{card}(\\Omega)$ est interdite ! On additionne obligatoirement les probabilités individuelles $P(\\{e_i\\})$ des issues appartenant à $A$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p03_q3',
            type: 'mcq',
            prompt:
              'Avec le dé truqué du cours ($P(\\{1\\})=\\frac{1}{16}, P(\\{2\\})=\\frac{3}{16}, P(\\{3\\})=\\frac{5}{16}, P(\\{4\\})=\\frac{2}{16}, P(\\{5\\})=\\frac{3}{16}, P(\\{6\\})=\\frac{2}{16}$), que vaut $P(B)$ pour $B$ : « multiple de 3 » ?',
            options: ['$\\dfrac{1}{3}$', '$\\dfrac{7}{16}$', '$\\dfrac{5}{16}$', '$\\dfrac{1}{2}$'],
            correctAnswerIndex: 1,
            explanation: '$B = \\{3; 6\\}$, donc $P(B) = P(\\{3\\}) + P(\\{6\\}) = \\dfrac{5}{16} + \\dfrac{2}{16} = \\dfrac{7}{16}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calcul par l’événement contraire',
          stepTitle: 'Calculer P(C) pour « différent de 6 »',
          paragraphText:
            'Au lieu d’additionner cinq fractions ($P(\\{1\\}) + \\dots + P(\\{5\\})$), remarque que $\\{1;2;3;4;5\\}$ est le contraire de $\\{6\\}$ et utilise $1 - P(\\{6\\})$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p03_q4',
            type: 'mcq',
            prompt: 'Pour le même dé truqué où $P(\\{6\\}) = \\dfrac{2}{16}$, quelle est la probabilité d’obtenir un résultat différent de $6$ ?',
            options: ['$\\dfrac{5}{6}$', '$\\dfrac{7}{8}$', '$\\dfrac{15}{16}$', '$\\dfrac{13}{16}$'],
            correctAnswerIndex: 1,
            explanation: '$P(C) = 1 - P(\\{6\\}) = 1 - \\dfrac{2}{16} = \\dfrac{14}{16} = \\dfrac{7}{8}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Appliquer card(A)/card(U) sur un dé pipé',
          stepTitle: 'Attention : nombre de cas favorables / possibles exige l’équiprobabilité !',
          paragraphText:
            'Pour le dé truqué précédent, « obtenir un nombre pair » comporte $3$ issues sur $6$, mais $P(\\{2; 4; 6\\}) = \\dfrac{3+2+2}{16} = \\dfrac{7}{16} \\neq \\dfrac{1}{2}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p03_q5',
            type: 'mcq',
            prompt: 'Pourquoi la probabilité d’obtenir un nombre pair avec le dé truqué du cours vaut-elle $\\dfrac{7}{16}$ et non $\\dfrac{1}{2}$ ?',
            options: [
              'Parce que le dé a $16$ faces',
              'Parce que les faces paires n’ont pas toutes la même probabilité que les faces impaires (pas d’équiprobabilité)',
              'Parce que $6$ n’est pas un nombre pair',
              'Parce que $P(U)$ vaut $16$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Les faces impaires totalisent $\\frac{1+5+3}{16} = \\frac{9}{16}$ et les faces paires $\\frac{3+2+2}{16} = \\frac{7}{16}$ : le dé n’est pas équilibré.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Retrouver P(A ∩ B)',
          stepTitle: 'Déduire P(A ∩ B) à partir de P(A), P(B) et P(A ∪ B)',
          paragraphText:
            'De $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, on tire directement $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$, et $P(A \\cap \\overline{B}) = P(A) - P(A \\cap B)$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p03_q6',
            type: 'mcq',
            prompt: 'Si $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cup B) = 0{,}85$, que vaut $P(A \\cap B)$ ?',
            options: ['$0{,}25$', '$0{,}30$', '$0{,}35$', '$0{,}15$'],
            correctAnswerIndex: 0,
            explanation: '$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}85 = 0{,}25$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p03_q1',
          type: 'mcq',
          prompt:
            'Pour un dé à 4 faces, on donne $p_1 = 0{,}2$, $p_2 = 0{,}3$, $p_3 = 0{,}1$. Que doit valoir $p_4$ pour définir une probabilité ?',
          options: ['$0{,}25$', '$0{,}4$', '$0{,}5$', '$0{,}6$'],
          correctAnswerIndex: 1,
          explanation: 'La somme doit valoir $1$ : $p_4 = 1 - (0{,}2 + 0{,}3 + 0{,}1) = 1 - 0{,}6 = 0{,}4$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p03_q2',
          type: 'mcq',
          prompt: 'Soient $A$ et $B$ deux événements tels que $P(A) = 0{,}33$, $P(B) = 0{,}15$ et $P(A \\cap B) = 0{,}09$. Que vaut $P(A \\cup B)$ ?',
          options: ['$0{,}48$', '$0{,}39$', '$0{,}57$', '$0{,}27$'],
          correctAnswerIndex: 1,
          explanation: '$P(A \\cup B) = 0{,}33 + 0{,}15 - 0{,}09 = 0{,}39$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p03_q3',
          type: 'mcq',
          prompt:
            'Avec le dé truqué du cours ($P(\\{1\\})=\\frac{1}{16}, P(\\{2\\})=\\frac{3}{16}, P(\\{3\\})=\\frac{5}{16}, P(\\{4\\})=\\frac{2}{16}, P(\\{5\\})=\\frac{3}{16}, P(\\{6\\})=\\frac{2}{16}$), que vaut $P(B)$ pour $B$ : « multiple de 3 » ?',
          options: ['$\\dfrac{1}{3}$', '$\\dfrac{7}{16}$', '$\\dfrac{5}{16}$', '$\\dfrac{1}{2}$'],
          correctAnswerIndex: 1,
          explanation: '$B = \\{3; 6\\}$, donc $P(B) = P(\\{3\\}) + P(\\{6\\}) = \\dfrac{5}{16} + \\dfrac{2}{16} = \\dfrac{7}{16}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p03_q4',
          type: 'mcq',
          prompt: 'Pour le même dé truqué où $P(\\{6\\}) = \\dfrac{2}{16}$, quelle est la probabilité d’obtenir un résultat différent de $6$ ?',
          options: ['$\\dfrac{5}{6}$', '$\\dfrac{7}{8}$', '$\\dfrac{15}{16}$', '$\\dfrac{13}{16}$'],
          correctAnswerIndex: 1,
          explanation: '$P(C) = 1 - P(\\{6\\}) = 1 - \\dfrac{2}{16} = \\dfrac{14}{16} = \\dfrac{7}{8}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p03_q5',
          type: 'mcq',
          prompt: 'Pourquoi la probabilité d’obtenir un nombre pair avec le dé truqué du cours vaut-elle $\\dfrac{7}{16}$ et non $\\dfrac{1}{2}$ ?',
          options: [
            'Parce que le dé a $16$ faces',
            'Parce que les faces paires n’ont pas toutes la même probabilité que les faces impaires (pas d’équiprobabilité)',
            'Parce que $6$ n’est pas un nombre pair',
            'Parce que $P(U)$ vaut $16$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Les faces impaires totalisent $\\frac{1+5+3}{16} = \\frac{9}{16}$ et les faces paires $\\frac{3+2+2}{16} = \\frac{7}{16}$ : le dé n’est pas équilibré.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p03_q6',
          type: 'mcq',
          prompt: 'Si $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cup B) = 0{,}85$, que vaut $P(A \\cap B)$ ?',
          options: ['$0{,}25$', '$0{,}30$', '$0{,}35$', '$0{,}15$'],
          correctAnswerIndex: 0,
          explanation: '$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}85 = 0{,}25$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Équiprobabilité et reconnaissance des mots-clés
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l10_probabilite_p04',
      order: 4,
      title: 'Équiprobabilité et mots-clés d’un énoncé',
      summary:
        'Reconnaître une situation d’équiprobabilité grâce aux mots-clés et calculer P(A) = card(A) / card(U).',
      conceptExplanation:
        "Une expérience aléatoire a lieu dans un cadre d'**équiprobabilité** lorsque tous les événements élémentaires de l'univers $U$ ont la même probabilité.\n\n- Si $\\text{card}(U) = n$, chaque événement élémentaire a pour probabilité $\\dfrac{1}{n}$.\n- Pour tout événement $A \\subset U$ :\n$$P(A) = \\frac{\\text{nombre de cas favorables à } A}{\\text{nombre de cas possibles}} = \\frac{\\text{card}(A)}{\\text{card}(U)}$$\n\n**Mots-clés d'équiprobabilité** dans un énoncé : « équilibré », « équitable », « parfait », « uniforme », « même chance », « au hasard », « indiscernable au toucher », « non truqué ».",
      keyRule:
        'Sous équiprobabilité (dé équilibré, tirage au hasard, objets indiscernables), P(A) = card(A) / card(U).',
      formulas: [
        { name: 'Issue élémentaire', formula: '\\forall e_i \\in U, \\quad P(\\{e_i\\}) = \\frac{1}{\\text{card}(U)}' },
        { name: 'Formule de Laplace', formula: 'P(A) = \\frac{\\text{card}(A)}{\\text{card}(U)}' },
      ],
      workedExample: {
        title: 'Lancer de deux dés équilibrés (Exercice 4 p. 9-10)',
        statement:
          'On lance deux fois de suite un dé cubique parfaitement équilibré dont les faces sont numérotées de $1$ à $6$. Détermine la probabilité que les deux nombres obtenus soient supérieurs ou égaux à $4$.',
        methodSteps: [
          'Le dé étant parfaitement équilibré, tous les couples $(i; j)$ de $\\{1;\\dots;6\\}^2$ sont équiprobables.',
          'L’univers comporte $\\text{card}(U) = 6 \\times 6 = 36$ couples possibles.',
          'Les issues favorables sont les couples formés à partir de $\\{4; 5; 6\\}$ : $(4;4), (4;5), (4;6), (5;4), (5;5), (5;6), (6;4), (6;5), (6;6)$, soit $\\text{card}(A) = 3 \\times 3 = 9$.',
          'Donc $P(A) = \\dfrac{9}{36} = \\dfrac{1}{4} = 0{,}25$.',
        ],
        conclusion: 'La probabilité cherchée est $\\dfrac{9}{36} = 0{,}25$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Justifier l’équiprobabilité',
          stepTitle: 'Repérer les mots-clés de l’énoncé',
          paragraphText:
            'Avant d’écrire $\\text{card}(A)/\\text{card}(U)$, il faut toujours justifier l’équiprobabilité à l’aide d’un terme de l’énoncé (« pièce équilibrée », « boules indiscernables au toucher », « choix au hasard »...).',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p04_q1',
            type: 'mcq',
            prompt: 'Lequel de ces qualificatifs NE permet PAS de conclure à une situation d’équiprobabilité ?',
            options: [
              '« Indiscernables au toucher »',
              '« Parfaitement équilibré »',
              '« Dé pipé / truqué »',
              '« Chaque secteur a la même chance »',
            ],
            correctAnswerIndex: 2,
            explanation: 'Un dé pipé ou truqué favorise certaines faces et rompt l’équiprobabilité.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Probabilité d’un événement élémentaire',
          stepTitle: 'Calculer 1 / card(U) et card(A) / card(U)',
          paragraphText:
            'Pour un dé équilibré à $6$ faces, chaque face a pour probabilité $\\dfrac{1}{6}$. L’événement $E = \\{3; 6\\}$ (« multiple de $3$ ») contient $2$ issues, donc $P(E) = \\dfrac{2}{6} = \\dfrac{1}{3}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p04_q2',
            type: 'mcq',
            prompt: 'On lance un dé parfaitement équilibré à $6$ faces. Quelle est la probabilité d’obtenir un multiple de $3$ ?',
            options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
            correctAnswerIndex: 1,
            explanation: 'Sous équiprobabilité, $E = \\{3; 6\\}$ donne $P(E) = \\dfrac{\\text{card}(E)}{\\text{card}(\\Omega)} = \\dfrac{2}{6} = \\dfrac{1}{3}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Double lancer de dé',
          stepTitle: 'Compter les couples favorables sur 36 issues',
          paragraphText:
            'Pour deux lancers d’un dé équilibré, le produit cartésien $\\{1;\\dots;6\\}^2$ contient $36$ couples équiprobables. Si chaque nombre doit être $\\ge 4$, chacun a $3$ choix ($4, 5$ ou $6$), soit $3 \\times 3 = 9$ couples.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p04_q3',
            type: 'mcq',
            prompt: 'On lance deux fois de suite un dé équilibré à $6$ faces. Quelle est la probabilité que les deux résultats soient supérieurs ou égaux à $4$ ?',
            options: ['$0{,}15$', '$0{,}25$', '$0{,}30$', '$0{,}50$'],
            correctAnswerIndex: 1,
            explanation: 'Il y a $3 \\times 3 = 9$ couples favorables sur $36$ possibles, donc $P = \\dfrac{9}{36} = \\dfrac{1}{4} = 0{,}25$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Somme de deux dés',
          stepTitle: 'Dénombrer une somme donnée dans le tableau 6×6',
          paragraphText:
            'Dans le même univers à $36$ couples équiprobables, pour obtenir une somme égale à $7$, on recense $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$ : il ne faut pas oublier les symétriques !',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p04_q4',
            type: 'mcq',
            prompt: 'On lance deux dés équilibrés à $6$ faces. Quelle est la probabilité d’obtenir une somme égale à $7$ ?',
            options: ['$\\dfrac{1}{12}$', '$\\dfrac{1}{6}$', '$\\dfrac{5}{36}$', '$\\dfrac{7}{36}$'],
            correctAnswerIndex: 1,
            explanation: 'Il y a $6$ couples donnant une somme de $7$ : $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$. D’où $P = \\dfrac{6}{36} = \\dfrac{1}{6}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Croire que les sommes de deux dés sont équiprobables',
          stepTitle: 'Attention : la somme n’est pas équiprobable entre 2 et 12 !',
          paragraphText:
            'Même si les $36$ couples sont équiprobables, les $11$ sommes possibles ($2, 3, \\dots, 12$) n’ont pas la même probabilité : on n’a qu’une façon d’obtenir $2$ (couple $(1;1)$) contre $6$ façons d’obtenir $7$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p04_q5',
            type: 'mcq',
            prompt: 'On lance deux dés équilibrés. Quelle affirmation sur la somme des deux faces est vraie ?',
            options: [
              'La probabilité d’obtenir une somme égale à $2$ est $\\dfrac{1}{11}$',
              'La probabilité d’obtenir une somme égale à $2$ est $\\dfrac{1}{36}$',
              'Les sommes $2$ et $7$ ont la même probabilité',
              'Les $36$ couples ne sont pas équiprobables',
            ],
            correctAnswerIndex: 1,
            explanation: 'L’équiprobabilité porte sur les $36$ couples ordonnés. Seul $(1;1)$ donne la somme $2$, donc sa probabilité est $\\dfrac{1}{36}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Lancer de deux pièces',
          stepTitle: 'Calculer une probabilité sur U = {(P,P), (P,F), (F,P), (F,F)}',
          paragraphText:
            'Sur $4$ couples équiprobables, « obtenir au moins une fois Pile » regroupe $(P,P), (P,F)$ et $(F,P)$, soit $3$ issues sur $4$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p04_q6',
            type: 'mcq',
            prompt: 'On lance deux fois une pièce équilibrée. Quelle est la probabilité d’obtenir au moins une fois Face ?',
            options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{3}{4}$'],
            correctAnswerIndex: 3,
            explanation: 'Le contraire de « au moins une fois Face » est « deux fois Pile » $\\{(P,P)\\}$ de probabilité $\\dfrac{1}{4}$, donc $P = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p04_q1',
          type: 'mcq',
          prompt: 'Lequel de ces qualificatifs NE permet PAS de conclure à une situation d’équiprobabilité ?',
          options: [
            '« Indiscernables au toucher »',
            '« Parfaitement équilibré »',
            '« Dé pipé / truqué »',
            '« Chaque secteur a la même chance »',
          ],
          correctAnswerIndex: 2,
          explanation: 'Un dé pipé ou truqué favorise certaines faces et rompt l’équiprobabilité.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p04_q2',
          type: 'mcq',
          prompt: 'On lance un dé parfaitement équilibré à $6$ faces. Quelle est la probabilité d’obtenir un multiple de $3$ ?',
          options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
          correctAnswerIndex: 1,
          explanation: 'Sous équiprobabilité, $E = \\{3; 6\\}$ donne $P(E) = \\dfrac{\\text{card}(E)}{\\text{card}(\\Omega)} = \\dfrac{2}{6} = \\dfrac{1}{3}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p04_q3',
          type: 'mcq',
          prompt: 'On lance deux fois de suite un dé équilibré à $6$ faces. Quelle est la probabilité que les deux résultats soient supérieurs ou égaux à $4$ ?',
          options: ['$0{,}15$', '$0{,}25$', '$0{,}30$', '$0{,}50$'],
          correctAnswerIndex: 1,
          explanation: 'Il y a $3 \\times 3 = 9$ couples favorables sur $36$ possibles, donc $P = \\dfrac{9}{36} = \\dfrac{1}{4} = 0{,}25$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p04_q4',
          type: 'mcq',
          prompt: 'On lance deux dés équilibrés à $6$ faces. Quelle est la probabilité d’obtenir une somme égale à $7$ ?',
          options: ['$\\dfrac{1}{12}$', '$\\dfrac{1}{6}$', '$\\dfrac{5}{36}$', '$\\dfrac{7}{36}$'],
          correctAnswerIndex: 1,
          explanation: 'Il y a $6$ couples donnant une somme de $7$ : $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$. D’où $P = \\dfrac{6}{36} = \\dfrac{1}{6}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p04_q5',
          type: 'mcq',
          prompt: 'On lance deux dés équilibrés. Quelle affirmation sur la somme des deux faces est vraie ?',
          options: [
            'La probabilité d’obtenir une somme égale à $2$ est $\\dfrac{1}{11}$',
            'La probabilité d’obtenir une somme égale à $2$ est $\\dfrac{1}{36}$',
            'Les sommes $2$ et $7$ ont la même probabilité',
            'Les $36$ couples ne sont pas équiprobables',
          ],
          correctAnswerIndex: 1,
          explanation: 'L’équiprobabilité porte sur les $36$ couples ordonnés. Seul $(1;1)$ donne la somme $2$, donc sa probabilité est $\\dfrac{1}{36}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p04_q6',
          type: 'mcq',
          prompt: 'On lance deux fois une pièce équilibrée. Quelle est la probabilité d’obtenir au moins une fois Face ?',
          options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{3}{4}$'],
          correctAnswerIndex: 3,
          explanation: 'Le contraire de « au moins une fois Face » est « deux fois Pile » $\\{(P,P)\\}$ de probabilité $\\dfrac{1}{4}$, donc $P = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Dénombrement au service des probabilités (délégations et tirages)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l10_probabilite_p05',
      order: 5,
      title: 'Dénombrement au service des probabilités',
      summary:
        'Utiliser les combinaisons Cₙᵖ pour calculer card(U) et card(A) sans lister toutes les issues en extension.',
      conceptExplanation:
        "Lorsque l'univers est trop grand pour être écrit en extension, la remarque 2 du cours rappelle qu'on utilise directement les **formules de dénombrement** (combinaisons $C_n^p$, arrangements $A_n^p$, $p$-uplets $n^p$).\n\nPour un choix simultané ou « au hasard » d'une délégation de $p$ personnes parmi $n$ :\n- $\\text{card}(U) = C_n^p$ ;\n- Si l'on impose $k$ personnes fixées dans la délégation, il reste à choisir $p - k$ personnes parmi les $n - k$ restantes, soit $C_{n-k}^{p-k}$ choix.",
      keyRule:
        'Quand un événement devient trop long à lister, calcule directement card(U) et card(A) avec les combinaisons Cₙᵖ ou passe par l’événement contraire.',
      formulas: [
        { name: 'Cardinal d’un choix simultané', formula: '\\text{card}(U) = C_n^p = \\frac{n!}{p!(n-p)!}' },
        { name: 'Complémentaire et probabilité', formula: 'P(A) = 1 - \\frac{\\text{card}(\\overline{A})}{\\text{card}(U)}' },
      ],
      workedExample: {
        title: 'Délégation d’une coopérative et couple Zamblé (Exercice 3 p. 8)',
        statement:
          'Une coopérative compte $7$ hommes et $3$ femmes, dont le couple Zamblé. Elle choisit au hasard une délégation de $4$ membres. (1) Détermine le nombre de délégations possibles. (2) Calcule la probabilité $p_1$ que le couple Zamblé en fasse partie. (3) Calcule la probabilité $p_2$ que Monsieur ou Madame Zamblé fasse partie de la délégation.',
        methodSteps: [
          'Total de membres : $7 + 3 = 10$. Une délégation de $4$ membres est une $4$-combinaison parmi $10$ : $\\text{card}(U) = C_{10}^4 = 210$. Choix au hasard $\\implies$ équiprobabilité.',
          'Si le couple Zamblé ($2$ personnes) fait partie de la délégation, on complète en choisissant $2$ personnes parmi les $8$ autres : $C_8^2 = 28$ délégations, d’où $p_1 = \\dfrac{28}{210} = \\dfrac{2}{15}$.',
          'Méthode directe pour (3) : Monsieur seul ($C_8^3 = 56$) + Madame seule ($C_8^3 = 56$) + le couple ($C_8^2 = 28$) donne $140$ cas, soit $p_2 = \\dfrac{140}{210} = \\dfrac{2}{3}$.',
          'Méthode par le contraire $B$ (« ni Monsieur ni Madame ») : on choisit $4$ membres parmi les $8$ autres, soit $C_8^4 = 70$, d’où $P(B) = \\dfrac{70}{210} = \\dfrac{1}{3}$ et $p_2 = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.',
        ],
        conclusion: '$210$ délégations possibles ; $p_1 = \\dfrac{2}{15}$ ; $p_2 = \\dfrac{2}{3}$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Cardinal de l’univers des délégations',
          stepTitle: 'Compter les sous-ensembles de 4 membres parmi 10',
          paragraphText:
            'Dans une délégation de $4$ membres choisis au hasard parmi $10$, l’ordre dans lequel les membres sont désignés n’a aucune importance : il s’agit de combinaisons de $4$ éléments pris parmi $10$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p05_q1',
            type: 'mcq',
            prompt: 'Combien de délégations différentes de $4$ membres peut-on former à partir des $10$ membres de la coopérative ?',
            options: ['$40$', '$210$', '$5\\,040$', '$10\\,000$'],
            correctAnswerIndex: 1,
            explanation: '$C_{10}^4 = \\dfrac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Couple imposé dans la délégation',
          stepTitle: 'Compléter la délégation avec les 8 membres restants',
          paragraphText:
            'Si M. et Mme Zamblé font tous les deux partie de la délégation de $4$ places, $2$ places sont déjà occupées : il reste exactement $2$ places à attribuer parmi les $10 - 2 = 8$ autres membres.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p05_q2',
            type: 'mcq',
            prompt: 'Quelle est la probabilité que le couple Zamblé fasse partie de la délégation de $4$ membres ?',
            options: ['$\\dfrac{1}{15}$', '$\\dfrac{2}{15}$', '$\\dfrac{4}{15}$', '$\\dfrac{1}{5}$'],
            correctAnswerIndex: 1,
            explanation: 'Le nombre de délégations favorables est $C_8^2 = 28$, d’où $P = \\dfrac{28}{210} = \\dfrac{2}{15}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Un seul des deux conjoints présent',
          stepTitle: 'Calculer « Monsieur seul sans Madame »',
          paragraphText:
            'Si Monsieur fait partie de la délégation sans Madame, Monsieur prend $1$ place et Madame est écartée : les $3$ autres membres doivent être choisis parmi les $8$ membres restants.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p05_q3',
            type: 'mcq',
            prompt: 'Combien de délégations contiennent M. Zamblé sans Mme Zamblé ?',
            options: ['$28$', '$56$', '$70$', '$84$'],
            correctAnswerIndex: 1,
            explanation: 'M. Zamblé est fixé et Mme Zamblé est exclue : il reste $C_8^3 = \\dfrac{8 \\times 7 \\times 6}{6} = 56$ choix pour les $3$ autres places.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Passage par l’événement contraire',
          stepTitle: 'Calculer P(M ∪ F) grâce à B : « aucun des deux »',
          paragraphText:
            'L’événement contraire de « Monsieur ou Madame Zamblé fait partie de la délégation » consiste à choisir les $4$ membres uniquement parmi les $8$ autres personnes ($C_8^4 = 70$ cas).',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p05_q4',
            type: 'mcq',
            prompt: 'Quelle est la probabilité que Monsieur ou Madame Zamblé fasse partie de la délégation ?',
            options: ['$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{8}{15}$', '$\\dfrac{13}{15}$'],
            correctAnswerIndex: 1,
            explanation: 'La probabilité du contraire est $\\dfrac{C_8^4}{210} = \\dfrac{70}{210} = \\dfrac{1}{3}$, donc la probabilité cherchée est $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier d’exclure l’autre conjoint dans la méthode directe',
          stepTitle: 'Attention aux cas comptés deux fois !',
          paragraphText:
            'Si tu comptes $C_9^3$ délégations avec Monsieur et $C_9^3$ délégations avec Madame, tu as compté deux fois les $C_8^2$ délégations contenant le couple ! Il faut soit disjoindre les trois cas ($56 + 56 + 28$), soit soustraire $C_8^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p05_q5',
            type: 'mcq',
            prompt: 'Si l’on ajoute $C_9^3 = 84$ (avec Monsieur) et $C_9^3 = 84$ (avec Madame), pourquoi obtient-on $168$ au lieu de $140$ ?',
            options: [
              'Parce que $C_9^3$ est égal à $70$',
              'Parce que les $28$ délégations contenant le couple ont été comptées deux fois ($168 - 28 = 140$)',
              'Parce qu’il y a $11$ membres au total',
              'Parce que la délégation contient $5$ membres',
            ],
            correctAnswerIndex: 1,
            explanation: 'D’après la formule de Poincaré / réunion, $\\text{card}(M \\cup F) = \\text{card}(M) + \\text{card}(F) - \\text{card}(M \\cap F) = 84 + 84 - 28 = 140$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Mixité dans la même coopérative',
          stepTitle: 'Dénombrer un comité avec 2 hommes et 2 femmes',
          paragraphText:
            'Parmi les $7$ hommes et $3$ femmes de la coopérative, on peut aussi calculer la probabilité d’obtenir une délégation paritaire de $2$ hommes et $2$ femmes en multipliant $C_7^2$ par $C_3^2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p05_q6',
            type: 'mcq',
            prompt: 'Toujours parmi les $7$ hommes et $3$ femmes, quelle est la probabilité qu’une délégation de $4$ membres tirée au hasard compte exactement $2$ hommes et $2$ femmes ?',
            options: ['$\\dfrac{3}{10}$', '$\\dfrac{21}{70}$', '$\\dfrac{63}{210}$', '$\\dfrac{3}{5}$'],
            correctAnswerIndex: 0,
            explanation: 'Il y a $C_7^2 \\times C_3^2 = 21 \\times 3 = 63$ délégations mixtes sur $210$, et $\\dfrac{63}{210} = \\dfrac{3}{10}$. (Attention : $\\frac{21}{70} = \\frac{63}{210} = \\frac{3}{10}$, mais ici l’option simplifiée est $\\dfrac{3}{10}$).',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p05_q1',
          type: 'mcq',
          prompt: 'Combien de délégations différentes de $4$ membres peut-on former à partir des $10$ membres de la coopérative ?',
          options: ['$40$', '$210$', '$5\\,040$', '$10\\,000$'],
          correctAnswerIndex: 1,
          explanation: '$C_{10}^4 = \\dfrac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p05_q2',
          type: 'mcq',
          prompt: 'Quelle est la probabilité que le couple Zamblé fasse partie de la délégation de $4$ membres ?',
          options: ['$\\dfrac{1}{15}$', '$\\dfrac{2}{15}$', '$\\dfrac{4}{15}$', '$\\dfrac{1}{5}$'],
          correctAnswerIndex: 1,
          explanation: 'Le nombre de délégations favorables est $C_8^2 = 28$, d’où $P = \\dfrac{28}{210} = \\dfrac{2}{15}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p05_q3',
          type: 'mcq',
          prompt: 'Combien de délégations contiennent M. Zamblé sans Mme Zamblé ?',
          options: ['$28$', '$56$', '$70$', '$84$'],
          correctAnswerIndex: 1,
          explanation: 'M. Zamblé est fixé et Mme Zamblé est exclue : il reste $C_8^3 = \\dfrac{8 \\times 7 \\times 6}{6} = 56$ choix pour les $3$ autres places.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p05_q4',
          type: 'mcq',
          prompt: 'Quelle est la probabilité que Monsieur ou Madame Zamblé fasse partie de la délégation ?',
          options: ['$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{8}{15}$', '$\\dfrac{13}{15}$'],
          correctAnswerIndex: 1,
          explanation: 'La probabilité du contraire est $\\dfrac{C_8^4}{210} = \\dfrac{70}{210} = \\dfrac{1}{3}$, donc la probabilité cherchée est $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p05_q5',
          type: 'mcq',
          prompt: 'Si l’on ajoute $C_9^3 = 84$ (avec Monsieur) et $C_9^3 = 84$ (avec Madame), pourquoi obtient-on $168$ au lieu de $140$ ?',
          options: [
            'Parce que $C_9^3$ est égal à $70$',
            'Parce que les $28$ délégations contenant le couple ont été comptées deux fois ($168 - 28 = 140$)',
            'Parce qu’il y a $11$ membres au total',
            'Parce que la délégation contient $5$ membres',
          ],
          correctAnswerIndex: 1,
          explanation: 'D’après la formule de Poincaré / réunion, $\\text{card}(M \\cup F) = \\text{card}(M) + \\text{card}(F) - \\text{card}(M \\cap F) = 84 + 84 - 28 = 140$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p05_q6',
          type: 'mcq',
          prompt: 'Toujours parmi les $7$ hommes et $3$ femmes, quelle est la probabilité qu’une délégation de $4$ membres tirée au hasard compte exactement $2$ hommes et $2$ femmes ?',
          options: ['$\\dfrac{3}{10}$', '$\\dfrac{21}{70}$', '$\\dfrac{63}{210}$', '$\\dfrac{3}{5}$'],
          correctAnswerIndex: 0,
          explanation: 'Il y a $C_7^2 \\times C_3^2 = 21 \\times 3 = 63$ délégations mixtes sur $210$, et $\\dfrac{63}{210} = \\dfrac{3}{10}$. (Attention : $\\frac{21}{70} = \\frac{63}{210} = \\frac{3}{10}$, mais ici l’option simplifiée est $\\dfrac{3}{10}$).',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Modélisation de jeux, loterie et code secret
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l10_probabilite_p06',
      order: 6,
      title: 'Modélisation : loterie de la roue et code secret',
      summary:
        'Modéliser une situation complexe par des événements incompatibles et comparer des chances de gain ou de réussite.',
      conceptExplanation:
        "Face à une situation concrète (loterie, code bancaire, jeu), la démarche de modélisation comprend quatre étapes :\n1. Identifier l'univers $\\Omega$ et vérifier s'il y a **équiprobabilité** ;\n2. Nommer précisément les événements élémentaires ou par catégories ;\n3. Exprimer l'événement recherché comme **réunion d'événements incompatibles** ou comme **événement contraire** ;\n4. Calculer les probabilités puis **conclure** clairement par rapport au problème posé.",
      keyRule:
        'En situation complexe, nomme clairement l’univers et les événements, décompose l’événement étudié en cas incompatibles et conclus explicitement.',
      formulas: [
        { name: 'Réunion incompatible', formula: 'G = N \\cup R \\text{ avec } N \\cap R = \\emptyset \\implies P(G) = P(N) + P(R)' },
        { name: 'Probabilité d’un code à 4 chiffres distincts', formula: 'P = \\frac{1}{4!} = \\frac{1}{24}' },
      ],
      workedExample: {
        title: 'Loterie de la roue à 8 secteurs (Situation complexe p. 6-7)',
        statement:
          'Une roue de loterie est partagée en $8$ secteurs équitables : $4$ blancs (perte de $2\\,000\\text{ F CFA}$), $3$ noirs (gain de $1\\,000\\text{ F CFA}$) et $1$ rouge (gain de $2\\,000\\text{ F CFA}$). Des élèves affirment qu’un joueur a autant de chance de gagner que de perdre. Ont-ils raison ?',
        methodSteps: [
          'Comme chaque secteur a la même chance d’être désigné, il y a équiprobabilité sur un univers $\\Omega$ de cardinal $\\text{card}(\\Omega) = 8$.',
          'Soient $B$ (« perdre $2\\,000\\text{ F CFA}$ », $4$ secteurs), $N$ (« gagner $1\\,000\\text{ F CFA}$ », $3$ secteurs) et $R$ (« gagner $2\\,000\\text{ F CFA}$ », $1$ secteur).',
          'La probabilité de perdre est $P(B) = \\dfrac{4}{8} = 0{,}5$.',
          'L’événement « gagner » est $G = N \\cup R$ avec $N \\cap R = \\emptyset$, donc $P(G) = P(N) + P(R) = \\dfrac{3}{8} + \\dfrac{1}{8} = 0{,}375 + 0{,}125 = 0{,}5$.',
          'On constate que $P(G) = P(B) = 0{,}5$.',
        ],
        conclusion: 'Oui, le groupe d’élèves a raison : un joueur a autant de chance de gagner que de perdre ($50\\%$).',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Décomposer un événement en union disjointe',
          stepTitle: 'Calculer la probabilité de gagner à la loterie',
          paragraphText:
            'Dans la loterie à $8$ secteurs équitables, on gagne soit sur un secteur noir ($3$ secteurs), soit sur un secteur rouge ($1$ secteur). Ces deux couleurs étant incompatibles sur un tirage, leurs probabilités s’additionnent.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p06_q1',
            type: 'mcq',
            prompt: 'Sur la roue à $8$ secteurs ($4$ blancs, $3$ noirs, $1$ rouge), que vaut la probabilité $P(G)$ de gagner de l’argent ?',
            options: ['$0{,}125$', '$0{,}375$', '$0{,}5$', '$0{,}625$'],
            correctAnswerIndex: 2,
            explanation: '$P(G) = P(N) + P(R) = \\dfrac{3}{8} + \\dfrac{1}{8} = \\dfrac{4}{8} = 0{,}5$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Comparer deux probabilités pour trancher',
          stepTitle: 'Vérifier si le jeu offre autant de chances de gagner que de perdre',
          paragraphText:
            'On calcule $P(B) = \\dfrac{4}{8} = 0{,}5$ et $P(G) = 0{,}5$. Comme $P(G) = P(B)$, on peut affirmer que le joueur a exactement la même chance de gagner que de perdre.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p06_q2',
            type: 'mcq',
            prompt: 'Dans cette loterie, que vaut la probabilité de gagner exactement $2\\,000\\text{ F CFA}$ ?',
            options: ['$0{,}125$', '$0{,}25$', '$0{,}375$', '$0{,}5$'],
            correctAnswerIndex: 0,
            explanation: 'Seul $1$ secteur rouge sur $8$ rapporte $2\\,000\\text{ F CFA}$, soit $P(R) = \\dfrac{1}{8} = 0{,}125$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Code secret de M. Konan (Situation d’apprentissage)',
          stepTitle: 'Quantifier la chance au dernier essai',
          paragraphText:
            'L’épouse de M. Konan lui donne les $4$ chiffres du code (supposés distincts) mais dans le désordre. M. Konan doit trouver la bonne permutation parmi les $4! = 24$ ordres possibles.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p06_q3',
            type: 'mcq',
            prompt:
              'M. Konan connaît les $4$ chiffres distincts de son code secret mais pas leur ordre. En tapant un code au hasard sur un seul essai, quelle est sa probabilité de réussir ?',
            options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{16}$', '$\\dfrac{1}{24}$', '$\\dfrac{1}{256}$'],
            correctAnswerIndex: 2,
            explanation: 'Il existe $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ permutations possibles des $4$ chiffres distincts ; une seule est bonne, donc $P = \\dfrac{1}{24}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Modéliser avec deux essais infructueux déjà faits',
          stepTitle: 'Mettre à jour l’univers restant après échec',
          paragraphText:
            'Si M. Konan a déjà éliminé $2$ mauvais codes différents lors de ses deux premiers essais et choisit au hasard parmi les combinaisons restantes, son univers se réduit à $24 - 2 = 22$ codes possibles.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p06_q4',
            type: 'mcq',
            prompt:
              'Si M. Konan mémorise ses $2$ premiers essais erronés et tente un $3^{\\text{e}}$ ordre au hasard parmi les ordres restants (pour $4$ chiffres distincts), quelle devient sa probabilité de réussir ?',
            options: ['$\\dfrac{1}{24}$', '$\\dfrac{1}{22}$', '$\\dfrac{3}{24}$', '$\\dfrac{1}{12}$'],
            correctAnswerIndex: 1,
            explanation: 'Il reste $24 - 2 = 22$ ordres possibles équiprobables dont $1$ seul est le bon code, soit une probabilité de $\\dfrac{1}{22}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre probabilité de gagner et montant du gain',
          stepTitle: 'Attention : même chance de gagner ≠ jeu financièrement équilibré !',
          paragraphText:
            'Dans la loterie, $P(\\text{gagner}) = P(\\text{perdre}) = 0{,}5$. Pourtant, en perdant on remet $2\\,000\\text{ F CFA}$ ($4$ fois sur $8$), alors qu’en gagnant on reçoit souvent $1\\,000\\text{ F CFA}$ ($3$ fois sur $8$) et rarement $2\\,000\\text{ F CFA}$ ($1$ fois sur $8$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p06_q5',
            type: 'mcq',
            prompt:
              'À la loterie précédente, si $8$ joueurs tournent la roue chacun une fois en tombant exactement une fois sur chaque secteur, quel est le bilan total des joueurs ?',
            options: [
              'Ils gagnent $3\\,000\\text{ F CFA}$ au total',
              'Ils perdent $3\\,000\\text{ F CFA}$ au total',
              'Le bilan est nul ($0\\text{ F CFA}$)',
              'Ils perdent $1\\,000\\text{ F CFA}$ au total',
            ],
            correctAnswerIndex: 1,
            explanation: 'Gains : $3 \\times 1\\,000 + 1 \\times 2\\,000 = 5\\,000\\text{ F CFA}$. Pertes : $4 \\times 2\\,000 = 8\\,000\\text{ F CFA}$. Bilan : $-3\\,000\\text{ F CFA}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Code à 4 chiffres sur clavier de 10 touches',
          stepTitle: 'Probabilité d’un code trouvé entièrement au hasard',
          paragraphText:
            'Sans connaître les $4$ chiffres du code, un clavier à $10$ touches ($0$ à $9$) permet de former $10^4 = 10\\,000$ codes de $4$ chiffres.',
          exercise: {
            id: 'premiere_c_maths_numerique_l10_probabilite_p06_q6',
            type: 'mcq',
            prompt:
              'On tape au hasard un code à $4$ chiffres sur un clavier à $10$ touches ($0$ à $9$), avec répétitions autorisées. Quelle est la probabilité de trouver le bon code du premier coup ?',
            options: ['$0{,}001$', '$0{,}0001$', '$0{,}0004$', '$0{,}01$'],
            correctAnswerIndex: 1,
            explanation: 'Il y a $10^4 = 10\\,000$ codes possibles équiprobables, donc une probabilité de $\\dfrac{1}{10\\,000} = 0{,}0001$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p06_q1',
          type: 'mcq',
          prompt: 'Sur la roue à $8$ secteurs ($4$ blancs, $3$ noirs, $1$ rouge), que vaut la probabilité $P(G)$ de gagner de l’argent ?',
          options: ['$0{,}125$', '$0{,}375$', '$0{,}5$', '$0{,}625$'],
          correctAnswerIndex: 2,
          explanation: '$P(G) = P(N) + P(R) = \\dfrac{3}{8} + \\dfrac{1}{8} = \\dfrac{4}{8} = 0{,}5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p06_q2',
          type: 'mcq',
          prompt: 'Dans cette loterie, que vaut la probabilité de gagner exactement $2\\,000\\text{ F CFA}$ ?',
          options: ['$0{,}125$', '$0{,}25$', '$0{,}375$', '$0{,}5$'],
          correctAnswerIndex: 0,
          explanation: 'Seul $1$ secteur rouge sur $8$ rapporte $2\\,000\\text{ F CFA}$, soit $P(R) = \\dfrac{1}{8} = 0{,}125$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p06_q3',
          type: 'mcq',
          prompt:
            'M. Konan connaît les $4$ chiffres distincts de son code secret mais pas leur ordre. En tapant un code au hasard sur un seul essai, quelle est sa probabilité de réussir ?',
          options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{16}$', '$\\dfrac{1}{24}$', '$\\dfrac{1}{256}$'],
          correctAnswerIndex: 2,
          explanation: 'Il existe $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ permutations possibles des $4$ chiffres distincts ; une seule est bonne, donc $P = \\dfrac{1}{24}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p06_q4',
          type: 'mcq',
          prompt:
            'Si M. Konan mémorise ses $2$ premiers essais erronés et tente un $3^{\\text{e}}$ ordre au hasard parmi les ordres restants (pour $4$ chiffres distincts), quelle devient sa probabilité de réussir ?',
          options: ['$\\dfrac{1}{24}$', '$\\dfrac{1}{22}$', '$\\dfrac{3}{24}$', '$\\dfrac{1}{12}$'],
          correctAnswerIndex: 1,
          explanation: 'Il reste $24 - 2 = 22$ ordres possibles équiprobables dont $1$ seul est le bon code, soit une probabilité de $\\dfrac{1}{22}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p06_q5',
          type: 'mcq',
          prompt:
            'À la loterie précédente, si $8$ joueurs tournent la roue chacun une fois en tombant exactement une fois sur chaque secteur, quel est le bilan total des joueurs ?',
          options: [
            'Ils gagnent $3\\,000\\text{ F CFA}$ au total',
            'Ils perdent $3\\,000\\text{ F CFA}$ au total',
            'Le bilan est nul ($0\\text{ F CFA}$)',
            'Ils perdent $1\\,000\\text{ F CFA}$ au total',
          ],
          correctAnswerIndex: 1,
          explanation: 'Gains : $3 \\times 1\\,000 + 1 \\times 2\\,000 = 5\\,000\\text{ F CFA}$. Pertes : $4 \\times 2\\,000 = 8\\,000\\text{ F CFA}$. Bilan : $-3\\,000\\text{ F CFA}$.',
        },
        {
          id: 'premiere_c_maths_numerique_l10_probabilite_p06_q6',
          type: 'mcq',
          prompt:
            'On tape au hasard un code à $4$ chiffres sur un clavier à $10$ touches ($0$ à $9$), avec répétitions autorisées. Quelle est la probabilité de trouver le bon code du premier coup ?',
          options: ['$0{,}001$', '$0{,}0001$', '$0{,}0004$', '$0{,}01$'],
          correctAnswerIndex: 1,
          explanation: 'Il y a $10^4 = 10\\,000$ codes possibles équiprobables, donc une probabilité de $\\dfrac{1}{10\\,000} = 0{,}0001$.',
        },
      ],
    },
  ],
};

