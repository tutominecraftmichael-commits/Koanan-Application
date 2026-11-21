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
// ALGÈBRE — ENTD LICENCE 1
// Programme structuré KONAN — Version Masterclass
// ============================================================================

export const ALGEBRE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Ensembles, relations binaires et applications
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch1',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1',
    title: 'Chapitre 1 — Ensembles, relations binaires et applications',
    summary:
      'Théorie des ensembles, cardinalité, ensemble des parties $\\mathcal{P}(E)$, opérations ensemblistes (Poincaré, De Morgan, différence symétrique), relations d’équivalence et d’ordre, applications (injection, surjection, bijection, images directe et réciproque).',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch1_p1',
        order: 1,
        title: 'Ensembles, cardinalité, ensemble des parties et opérations ensemblistes',
        summary:
          'Maîtriser appartenance et inclusion, calculer des cardinaux (Poincaré, $\\mathcal{P}(E)$, produit cartésien), manipuler $\\cup, \\cap, \\setminus, \\Delta$, les lois de De Morgan et les partitions.',
        conceptExplanation:
          'La théorie des ensembles fournit le langage rigoureux sur lequel reposent les bases de données relationnelles (requêtes SQL `UNION`, `INTERSECT`, `EXCEPT`), l’algorithmique et les probabilités.\n\n' +
          '• **Appartenance et inclusion** : $x \\in E$ désigne un élément dans un ensemble ; $A \\subset B$ signifie $\\forall x,\\ x \\in A \\implies x \\in B$. Deux ensembles sont égaux ($A = B$) ssi $A \\subset B$ et $B \\subset A$ (double inclusion).\n' +
          '• **Cardinal et ensemble des parties** : pour un ensemble fini $E$ de cardinal $|E| = n$ (nombre d’éléments **distincts**), l’ensemble de ses sous-ensembles $\\mathcal{P}(E)$ possède exactement $|\\mathcal{P}(E)| = 2^n$ éléments.\n' +
          '• **Opérations et Poincaré** : réunion $A \\cup B$, intersection $A \\cap B$, différence $A \\setminus B$, complémentaire $\\bar{A}$, différence symétrique $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$, avec $|A \\cup B| = |A| + |B| - |A \\cap B|$.\n' +
          '• **Lois de De Morgan et produit cartésien** : $\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$, $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$, et $|E \\times F| = |E| \\cdot |F|$.',
        formulas: [
          {
            name: 'Formule de Poincaré (inclusion-exclusion)',
            formula: '|A \\cup B| = |A| + |B| - |A \\cap B|',
            note: 'Pour 3 ensembles : |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|.',
          },
          {
            name: 'Cardinal de l’ensemble des parties et produit cartésien',
            formula: '|\\mathcal{P}(E)| = 2^{|E|}, \\qquad |E \\times F| = |E| \\times |F|',
            note: 'Pour E = ∅ (|E| = 0), P(∅) = {∅} a pour cardinal 2⁰ = 1 (et non 0 !).',
          },
          {
            name: 'Lois de De Morgan et différence symétrique',
            formula: '\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}, \\quad \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}, \\quad A \\Delta B = (A \\cup B) \\setminus (A \\cap B)',
            note: 'La différence symétrique correspond au OU exclusif (XOR) en logique et en informatique.',
          },
        ],
        keyRule:
          'Ne confonds jamais $\\in$ (élément dans un ensemble) et $\\subset$ (partie incluse dans un ensemble) : $a \\in E \\iff \\{a\\} \\subset E \\iff \\{a\\} \\in \\mathcal{P}(E)$.',
        workedExample: {
          title: 'Cardinal de lettres de villes ivoiriennes et formule de Poincaré',
          statement:
            '1) Déterminer le cardinal de l’ensemble des lettres distinctes des villes ivoiriennes « MAN », « GAGNOA » et « YAMOUSSOUKRO ». 2) Dans une promotion de $80$ étudiants, $52$ utilisent Python, $45$ utilisent SQL et $25$ maîtrisent les deux. Combien n’utilisent aucun de ces deux langages ?',
          methodSteps: [
            '1) Dans un ensemble, chaque élément n’apparaît qu’une seule fois : $\\{\\text{M}, \\text{A}, \\text{N}\\}$ a pour cardinal $3$ ; $\\{\\text{G}, \\text{A}, \\text{N}, \\text{O}\\}$ (les répétitions de G et A sont ignorées) a pour cardinal $4$ ; $\\{\\text{Y}, \\text{A}, \\text{M}, \\text{O}, \\text{U}, \\text{S}, \\text{K}, \\text{R}\\}$ a pour cardinal $8$.',
            '2) Soient $P$ (Python, $|P| = 52$) et $S$ (SQL, $|S| = 45$), avec $|P \\cap S| = 25$.',
            'Par la formule de Poincaré, le nombre d’étudiants utilisant au moins un des deux langages est $|P \\cup S| = |P| + |S| - |P \\cap S| = 52 + 45 - 25 = 72$.',
            'Par passage au complémentaire dans la promotion $E$ ($|E| = 80$), le nombre d’étudiants n’utilisant ni Python ni SQL est $|\\overline{P \\cup S}| = 80 - 72 = 8$.',
          ],
          conclusion:
            'Cardinaux respectifs : $3$, $4$ et $8$ ; et $8$ étudiants n’utilisent ni Python ni SQL.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Fondamentaux',
            stepTheme: 'blue',
            stepTitle: 'Ensembles, unicité des éléments, appartenance ($\\in$) et inclusion ($\\subset$)',
            paragraphText:
              'Un ensemble $E$ est une collection d’objets bien définis appelés éléments : ni l’ordre d’écriture ni les répétitions ne changent l’ensemble ($\\{1, 2, 2\\} = \\{2, 1\\}$).\n' +
              '• **Définition en extension vs compréhension** : en extension, on liste les éléments ($\\{0, 2, 4, 6\\}$) ; en compréhension, on donne une propriété caractérisante ($\\{n \\in \\mathbb{N} \\mid n \\text{ pair et } n \\leqslant 6\\}$).\n' +
              '• **Appartenance vs Inclusion** : on écrit $x \\in E$ pour un élément, et $A \\subset E$ pour une partie (tout élément de $A$ appartient à $E$). L’ensemble vide $\\emptyset$ est inclus dans **tout** ensemble ($\\emptyset \\subset E$).\n' +
              '• **Double inclusion** : pour démontrer rigoureusement $A = B$, on prouve séparément $A \\subset B$ (« soit $x \\in A$, montrons $x \\in B$ ») puis $B \\subset A$.',
            formula: {
              name: 'Définition de l’inclusion et de l’égalité ensembliste',
              formula: 'A \\subset B \\iff (\\forall x,\\ x \\in A \\implies x \\in B) ; \\qquad A = B \\iff (A \\subset B \\text{ et } B \\subset A)',
              note: 'Exemple : l’ensemble des lettres de « KORHOGO » est {K, O, R, H, G}, de cardinal 5 (et non 7).',
            },
            keyRule:
              'Élément $\\in$ Ensemble ; Sous-ensemble $\\subset$ Ensemble ! Ainsi pour $E = \\{1, 2\\}$, on a $1 \\in E$ et $\\{1\\} \\subset E$, jamais $1 \\subset E$.',
            konanTip:
              'En Côte d’Ivoire, la ville « ABIDJAN » a $6$ lettres distinctes ($\\{\\text{A}, \\text{B}, \\text{I}, \\text{D}, \\text{J}, \\text{N}\\}$) et « GUIGLO » en a $5$ ($\\{\\text{G}, \\text{U}, \\text{I}, \\text{L}, \\text{O}\\}$) : supprime toujours les doublons avant de compter !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Soit $E = \\{a, b, c\\}$. Laquelle des quatre affirmations suivantes est **fausse** ?',
              options: [
                '$\\emptyset \\subset E$',
                '$\\{a, c\\} \\subset E$',
                '$a \\subset E$',
                '$\\{b\\} \\in \\mathcal{P}(E)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$a$ est un élément de $E$ (et non un sous-ensemble), donc on écrit $a \\in E$ ou $\\{a\\} \\subset E$, mais jamais $a \\subset E$. Les trois autres affirmations sont parfaitement exactes.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Poincaré',
            stepTheme: 'violet',
            stepTitle: 'Cardinal d’un ensemble fini et formule de Poincaré',
            paragraphText:
              'Lorsque deux populations se chevauchent (par exemple les clients qui utilisent à la fois Orange Money et Wave en Côte d’Ivoire), additionner leurs effectifs compterait deux fois les clients communs : c’est exactement ce que corrige la formule de Poincaré.\n' +
              '• **Cardinal d’une réunion** : $|A \\cup B| = |A| + |B| - |A \\cap B|$. Si $A$ et $B$ sont **disjoints** ($A \\cap B = \\emptyset$), alors $|A \\cup B| = |A| + |B|$.\n' +
              '• **Différence et complémentaire** : $|A \\setminus B| = |A| - |A \\cap B|$, et pour $A \\subset E$, $|\\bar{A}| = |E| - |A|$.\n' +
              '• **Exemple chiffré** : sur $120$ commerçants d’Adjamé, $85$ acceptent Wave, $70$ acceptent Orange Money et $45$ acceptent les deux. Le nombre de commerçants acceptant au moins l’un des deux est $85 + 70 - 45 = 110$ (et $10$ n’acceptent que du liquide).',
            formula: {
              name: 'Formule de Poincaré et cardinal de la différence symétrique',
              formula: '|A \\cup B| = |A| + |B| - |A \\cap B|, \\qquad |A \\Delta B| = |A| + |B| - 2|A \\cap B|',
              note: 'A Δ B retire deux fois l’intersection car elle est exclue des deux côtés.',
            },
            keyRule:
              'Pour compter les éléments dans **exactement un** des deux ensembles $A$ ou $B$ ($A \\Delta B$), n’oublie pas de retrancher **deux fois** $|A \\cap B|$ : $|A \\Delta B| = |A| + |B| - 2|A \\cap B|$ !',
            konanTip:
              'Face à un problème de dénombrement à 2 ou 3 critères, dessine un diagramme de Venn au brouillon et remplis-le **de l’intérieur vers l’extérieur** (en commençant par l’intersection centrale) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Dans un échantillon de $100$ utilisateurs, $65$ utilisent WhatsApp, $50$ utilisent Telegram et $30$ utilisent les deux. Combien utilisent **exactement une** de ces deux applications ($|W \\Delta T|$) ?',
              options: ['$85$', '$55$', '$35$', '$70$'],
              correctAnswerIndex: 1,
              explanation:
                'Ceux qui utilisent uniquement WhatsApp sont $65 - 30 = 35$ ; uniquement Telegram : $50 - 30 = 20$. Total : $|W \\Delta T| = 35 + 20 = 55$ (ou par la formule : $65 + 50 - 2 \\times 30 = 55$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Parties P(E)',
            stepTheme: 'violet',
            stepTitle: 'Ensemble des parties $\\mathcal{P}(E)$ et démonstration de $|\\mathcal{P}(E)| = 2^n$',
            paragraphText:
              'Si un système informatique possède $n$ permissions indépendantes (lire, écrire, exécuter, partager...), combien de profils de droits distincts peut-on créer ? Autant que de sous-ensembles de l’ensemble des $n$ permissions, soit $|\\mathcal{P}(E)| = 2^n$ !\n' +
              '• **Définition** : $\\mathcal{P}(E) = \\{A \\mid A \\subset E\\}$. Ses éléments sont eux-mêmes des **ensembles** : $\\emptyset \\in \\mathcal{P}(E)$ et $E \\in \\mathcal{P}(E)$ toujours.\n' +
              '• **Justification de $2^n$** : pour construire une partie $A \\subset E$, pour chacun des $n$ éléments de $E$, on a exactement $2$ choix indépendants (le prendre ou ne pas le prendre — c’est un bit `1` ou `0`). Il y a donc $2 \\times 2 \\times \\cdots \\times 2 = 2^n$ parties.\n' +
              '• **Exemple** : pour $E = \\{1, 2\\}$, $\\mathcal{P}(E) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$ ($2^2 = 4$ parties). Et $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$ ($2^0 = 1$ partie), puis $\\mathcal{P}(\\mathcal{P}(\\emptyset)) = \\{\\emptyset, \\{\\emptyset\\}\\}$ ($2^1 = 2$ parties) !',
            formula: {
              name: 'Cardinal de P(E) et somme des coefficients binomiaux',
              formula: '|E| = n \\implies |\\mathcal{P}(E)| = \\sum_{k=0}^{n} \\binom{n}{k} = 2^n',
              note: 'Le nombre de parties à k éléments vaut C(n, k) = n! / (k!(n−k)!).',
            },
            keyRule:
              'Ne confonds jamais $\\emptyset$ (qui a $0$ élément) avec $\\{\\emptyset\\} = \\mathcal{P}(\\emptyset)$ (qui a **$1$ élément**, à savoir l’ensemble vide) !',
            konanTip:
              'En informatique, chaque sous-ensemble d’un ensemble à $n$ éléments est codé par un **masque binaire** (bitmask) sur $n$ bits : c’est exactement la bijection entre $\\mathcal{P}(E)$ et $\\{0, 1\\}^n$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Un serveur gère $5$ droits d’accès distincts. Combien existe-t-il de profils d’accès **non vides** (contenant au moins un droit) ?',
              options: ['$25$', '$32$', '$31$', '$30$'],
              correctAnswerIndex: 2,
              explanation:
                'Le nombre total de parties d’un ensemble à $5$ éléments est $2^5 = 32$. En retirant la partie vide $\\emptyset$ (aucun droit), il reste $32 - 1 = 31$ profils non vides.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Opérations & Venn',
            stepTheme: 'blue',
            stepTitle: 'Opérations ensemblistes ($\\cup, \\cap, \\setminus, \\Delta$) et diagramme de Venn',
            paragraphText:
              'Visualiser les opérations ensemblistes sur un diagramme de Venn permet d’identifier immédiatement les zones élémentaires et de vérifier n’importe quelle identité algébrique.\n' +
              '• **Réunion $A \\cup B$** : éléments dans $A$ **ou** dans $B$ (ou les deux : OU inclusif).\n' +
              '• **Intersection $A \\cap B$** : éléments dans $A$ **et** dans $B$ simultanément.\n' +
              '• **Différence $A \\setminus B$** : éléments dans $A$ et **pas** dans $B$ ($A \\setminus B = A \\cap \\bar{B}$).\n' +
              '• **Différence symétrique $A \\Delta B$** : éléments dans $A$ ou dans $B$, **mais pas dans les deux** : $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$. Elle est commutative, associative, d’élément neutre $\\emptyset$, et vérifie $A \\Delta A = \\emptyset$ !',
            formula: {
              name: 'Propriétés remarquables de la différence symétrique',
              formula: 'A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B), \\qquad A \\Delta \\emptyset = A, \\qquad A \\Delta A = \\emptyset',
              note: 'Muni de Δ et ∩, P(E) forme un anneau commutatif (anneau de Boole) !',
            },
            keyRule:
              'La différence $A \\setminus B$ n’est PAS commutative ($A \\setminus B \\neq B \\setminus A$ en général), tandis que $\\cup$, $\\cap$ et $\\Delta$ sont toutes commutatives et associatives !',
            konanTip:
              'En cryptographie symétrique, le chiffrement par flot applique l’opérateur XOR ($\\Delta$) bit à bit avec une clé $K$ : comme $(M \\Delta K) \\Delta K = M \\Delta (K \\Delta K) = M \\Delta \\emptyset = M$, réappliquer la clé déchiffre instantanément !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Diagramme de Venn : A \\ B, A ∩ B, B \\ A et différence symétrique A Δ B',
              caption: 'Les deux croissants colorés (bleu à gauche : A \\ B, vert à droite : B \\ A) forment la différence symétrique A Δ B ; le cœur violet est l’intersection A ∩ B.',
              svgContent:
                '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">' +
                '<rect x="10" y="10" width="400" height="180" rx="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<text x="24" y="30" font-size="12" font-weight="700" fill="#475569">E</text>' +
                '<circle cx="165" cy="105" r="65" fill="#3b82f6" fill-opacity="0.22" stroke="#2563eb" stroke-width="2.5"/>' +
                '<circle cx="255" cy="105" r="65" fill="#10b981" fill-opacity="0.22" stroke="#059669" stroke-width="2.5"/>' +
                '<path d="M 210 56 A 65 65 0 0 1 210 154 A 65 65 0 0 1 210 56 Z" fill="#8b5cf6" fill-opacity="0.35"/>' +
                '<text x="122" y="54" font-size="14" font-weight="800" fill="#1d4ed8">A</text>' +
                '<text x="292" y="54" font-size="14" font-weight="800" fill="#047857">B</text>' +
                '<text x="145" y="109" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">A \\ B</text>' +
                '<text x="210" y="109" text-anchor="middle" font-size="12" font-weight="800" fill="#5b21b6">A ∩ B</text>' +
                '<text x="275" y="109" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">B \\ A</text>' +
                '<text x="210" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">A Δ B = (A \\ B) ∪ (B \\ A)   |   A ∪ B = (A \\ B) ∪ (A ∩ B) ∪ (B \\ A)</text>' +
                '</svg>',
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Soient $A = \\{1, 2, 4, 6\\}$ et $B = \\{2, 4, 5, 7\\}$. Quel est l’ensemble $A \\Delta B$ ?',
              options: [
                '$\\{2, 4\\}$',
                '$\\{1, 6\\}$',
                '$\\{1, 5, 6, 7\\}$',
                '$\\{1, 2, 4, 5, 6, 7\\}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On a $A \\cap B = \\{2, 4\\}$, $A \\setminus B = \\{1, 6\\}$ et $B \\setminus A = \\{5, 7\\}$. Donc $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = \\{1, 5, 6, 7\\}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Lois de De Morgan',
            stepTheme: 'violet',
            stepTitle: 'Complémentaire, distributivité et lois de De Morgan',
            paragraphText:
              'Les lois de De Morgan et la distributivité sont les règles de calcul algébrique qui permettent de simplifier des expressions ensemblistes ou des conditions booléennes complexes dans un programme.\n' +
              '• **Lois de De Morgan** : dans un référentiel $E$, $\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$ (« ni dans $A$ ni dans $B$ ») et $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$ (« pas dans les deux à la fois »).\n' +
              '• **Double distributivité** : contrairement aux nombres (où $\\times$ distribue sur $+$ mais pas l’inverse), $\\cap$ distribue sur $\\cup$ **ET** $\\cup$ distribue sur $\\cap$ : $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ et $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$.\n' +
              '• **Inversion de l’inclusion** : $A \\subset B \\iff \\bar{B} \\subset \\bar{A}$ (contraposition logique !).',
            formula: {
              name: 'Algèbre de Boole des parties de E',
              formula: '\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}, \\quad \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}, \\quad \\overline{\\bar{A}} = A, \\quad A \\subset B \\iff \\bar{B} \\subset \\bar{A}',
              note: 'Pour passer au complémentaire, on complète chaque ensemble et on retourne ∪ en ∩ (et inversement).',
            },
            keyRule:
              'Attention au piège classique : $\\overline{A \\cap B}$ n’est PAS $\\bar{A} \\cap \\bar{B}$, c’est $\\bar{A} \\cup \\bar{B}$ ! (Dire qu’un étudiant ne fait pas « Maths ET Anglais » signifie qu’il ne fait pas Maths OU qu’il ne fait pas Anglais.)',
            konanTip:
              'En programmation, `not (age >= 18 and actif)` s’écrit grâce à De Morgan `(age < 18) or (not actif)` : même règle exacte !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'À quel ensemble est toujours égal $A \\setminus (B \\cup C)$ ?',
              options: [
                '$(A \\setminus B) \\cup (A \\setminus C)$',
                '$(A \\setminus B) \\cap (A \\setminus C)$',
                '$(A \\cap B) \\cup (A \\cap C)$',
                '$A \\cup (\\bar{B} \\cap \\bar{C})$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par définition et De Morgan : $A \\setminus (B \\cup C) = A \\cap \\overline{B \\cup C} = A \\cap (\\bar{B} \\cap \\bar{C}) = (A \\cap \\bar{B}) \\cap (A \\cap \\bar{C}) = (A \\setminus B) \\cap (A \\setminus C)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Produit cartésien',
            stepTheme: 'blue',
            stepTitle: 'Produit cartésien $E \\times F$ et cardinalité des $p$-uplets',
            paragraphText:
              'En bases de données relationnelles, une table (ex : Clients $\\times$ Produits) ou un système de coordonnées $(x, y) \\in \\mathbb{R}^2$ repose sur le **produit cartésien** d’ensembles.\n' +
              '• **Définition** : $E \\times F = \\{(x, y) \\mid x \\in E \\text{ et } y \\in F\\}$ est l’ensemble des **couples ordonnés** $(x, y)$. Contrairement aux paires $\\{x, y\\}$, l’ordre compte : $(1, 2) \\neq (2, 1)$ et $E \\times F \\neq F \\times E$ si $E \\neq F$.\n' +
              '• **Cardinalité** : pour des ensembles finis, $|E \\times F| = |E| \\cdot |F|$ et plus généralement $|E_1 \\times \\cdots \\times E_p| = |E_1| \\cdots |E_p|$. En particulier, $|E^p| = |E|^p$.\n' +
              '• **Exemple numérique** : un code PIN à $4$ chiffres pris dans $\\{0, 1, \\dots, 9\\}$ est un élément de $\\{0, \\dots, 9\\}^4$, donc il existe $10^4 = 10\\,000$ codes possibles.',
            formula: {
              name: 'Égalité de couples et cardinal d’un produit cartésien',
              formula: '(x, y) = (x’, y’) \\iff (x = x’ \\text{ et } y = y’) ; \\qquad |E_1 \\times \\cdots \\times E_p| = \\prod_{k=1}^p |E_k|',
              note: 'Si E = ∅ ou F = ∅, alors E × F = ∅ (cardinal 0).',
            },
            keyRule:
              'Ne confonds jamais la **paire** $\\{a, b\\}$ (ensemble non ordonné : $\\{a, b\\} = \\{b, a\\}$) avec le **couple** $(a, b)$ (objet ordonné : $(a, b) = (b, a) \\iff a = b$).',
            konanTip:
              'Le produit cartésien est distributif par rapport à $\\cup$ et $\\cap$ : $E \\times (F \\cup G) = (E \\times F) \\cup (E \\times G)$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Une plaque d’identifiant numérique comporte $2$ lettres choisies parmi $26$, suivies de $3$ chiffres choisis parmi $10$ (avec répétitions autorisées). Quel est le cardinal de l’ensemble des identifiants possibles ?',
              options: [
                '$26 \\times 2 + 10 \\times 3 = 82$',
                '$26^2 + 10^3 = 1\\,676$',
                '$26^2 \\times 10^3 = 676\\,000$',
                '$26 \\times 25 \\times 10 \\times 9 \\times 8 = 468\\,000$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’ensemble des identifiants est le produit cartésien $L^2 \\times C^3$ avec $|L| = 26$ et $|C| = 10$. Son cardinal vaut donc $26^2 \\times 10^3 = 676 \\times 1\\,000 = 676\\,000$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'definition',
            stepBadge: 'Partitions',
            stepTheme: 'blue',
            stepTitle: 'Partition d’un ensemble et application à la segmentation',
            paragraphText:
              'En marketing digital ou en data science, segmenter une base de clients signifie la découper en groupes homogènes sans doublon ni oubli : mathématiquement, c’est construire une **partition** de l’ensemble.\n' +
              '• **Les 3 axiomes d’une partition** : une famille de parties $(A_i)_{i \\in I}$ de $E$ forme une partition de $E$ ssi : (1) aucune partie n’est vide ($\\forall i,\\ A_i \\neq \\emptyset$) ; (2) elles sont **deux à deux disjointes** ($i \\neq j \\implies A_i \\cap A_j = \\emptyset$) ; (3) leur réunion recouvre tout $E$ ($\\bigcup_{i \\in I} A_i = E$).\n' +
              '• **Conséquence sur le cardinal** : si $(A_1, \\dots, A_k)$ partitionne un ensemble fini $E$, alors $|E| = |A_1| + |A_2| + \\cdots + |A_k|$ (principe additif pur).\n' +
              '• **Exemple** : les entiers pairs $2\\mathbb{Z}$ et impairs $2\\mathbb{Z}+1$ forment une partition de $\\mathbb{Z}$. En revanche, $\\{\\{1,2\\}, \\{2,3\\}\\}$ n’est pas une partition de $\\{1,2,3\\}$ car $2$ apparaît dans deux blocs.',
            formula: {
              name: 'Définition formelle d’une partition de E',
              formula: '\\begin{cases} \\forall i \\in I,\\ A_i \\neq \\emptyset \\\\ \\forall i \\neq j,\\ A_i \\cap A_j = \\emptyset \\\\ \\bigcup_{i \\in I} A_i = E \\end{cases}',
              note: 'C’est le fondement des classes d’équivalence (point suivant) et de la formule des probabilités totales.',
            },
            keyRule:
              'Trois vérifications obligatoires pour prouver qu’une famille est une partition : **non vides**, **disjointes deux à deux**, **réunion égale à $E$** !',
            konanTip:
              'Pour tout sous-ensemble $A$ non vide et strict ($\\emptyset \\neq A \\subsetneq E$), la paire $\\{A, \\bar{A}\\}$ forme toujours la partition la plus simple de $E$ en $2$ blocs !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p1_q7',
              type: 'mcq',
              prompt:
                'Parmi les familles suivantes de parties de $E = \\{1, 2, 3, 4, 5\\}$, laquelle est une **partition** de $E$ ?',
              options: [
                '$\\big\\{\\{1, 2\\},\\ \\{3, 4\\}\\big\\}$',
                '$\\big\\{\\{1, 2\\},\\ \\{2, 3, 4\\},\\ \\{5\\}\\big\\}$',
                '$\\big\\{\\{1, 3, 5\\},\\ \\{2, 4\\},\\ \\emptyset\\big\\}$',
                '$\\big\\{\\{1, 4\\},\\ \\{2, 5\\},\\ \\{3\\}\\big\\}$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Dans D, les trois blocs sont non vides, deux à deux disjoints et leur réunion vaut exactement $\\{1,2,3,4,5\\}$. A oublie l’élément $5$ ; B répète l’élément $2$ ; C contient $\\emptyset$ (interdit dans une partition).',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch1_p2',
        order: 2,
        title: 'Relations binaires : relations d’équivalence et relations d’ordre',
        summary:
          'Identifier réflexivité, symétrie, antisymétrie et transitivité, construire les classes d’équivalence et l’ensemble quotient $E/\\mathcal{R}$, et distinguer ordre partiel et ordre total.',
        conceptExplanation:
          'Une **relation binaire** $\\mathcal{R}$ sur un ensemble $E$ est définie par son graphe $G \\subset E \\times E$ : on écrit $x \\mathcal{R} y$ lorsque $(x, y) \\in G$. Deux familles structurent toutes les mathématiques et l’informatique : les relations d’équivalence (regrouper ce qui est similaire) et les relations d’ordre (hiérarchiser).\n\n' +
          '• **Les 4 propriétés fondamentales** :\n' +
          '  – **Réflexive** : $\\forall x \\in E,\\ x \\mathcal{R} x$.\n' +
          '  – **Symétrique** : $\\forall x, y \\in E,\\ x \\mathcal{R} y \\implies y \\mathcal{R} x$.\n' +
          '  – **Antisymétrique** : $\\forall x, y \\in E,\\ (x \\mathcal{R} y \\text{ et } y \\mathcal{R} x) \\implies x = y$.\n' +
          '  – **Transitive** : $\\forall x, y, z \\in E,\\ (x \\mathcal{R} y \\text{ et } y \\mathcal{R} z) \\implies x \\mathcal{R} z$.\n' +
          '• **Relation d’équivalence** : réflexive + **symétrique** + transitive. Les **classes d’équivalence** $\\bar{x} = \\{y \\in E \\mid x \\mathcal{R} y\\}$ forment une **partition** de $E$, dont l’ensemble est le quotient $E / \\mathcal{R}$ (ex : $\\mathbb{Z}/n\\mathbb{Z}$).\n' +
          '• **Relation d’ordre** : réflexive + **antisymétrique** + transitive. L’ordre est **total** si tous deux éléments sont comparables ($x \\mathcal{R} y$ ou $y \\mathcal{R} x$), sinon **partiel** (ex : l’inclusion $\\subset$ sur $\\mathcal{P}(E)$ ou la divisibilité $\\mid$ sur $\\mathbb{N}^*$).',
        formulas: [
          {
            name: 'Classe d’équivalence et ensemble quotient',
            formula: '\\bar{x} = \\{y \\in E \\mid x \\mathcal{R} y\\}, \\qquad E / \\mathcal{R} = \\{\\bar{x} \\mid x \\in E\\}',
            note: 'Deux classes d’équivalence sont soit identiques (si x R y), soit totalement disjointes !',
          },
          {
            name: 'Antisymétrie (définition exacte)',
            formula: '\\forall (x, y) \\in E^2,\\quad (x \\mathcal{R} y \\text{ et } y \\mathcal{R} x) \\implies x = y',
            note: 'Attention : « antisymétrique » n’est PAS le contraire de « symétrique » (l’égalité « = » est les deux à la fois !).',
          },
        ],
        keyRule:
          'Relation d’**équivalence** = Réflexive + **Symétrique** + Transitive (regroupe en classes). Relation d’**ordre** = Réflexive + **Antisymétrique** + Transitive (classe/hiérarchise).',
        workedExample: {
          title: 'Étude d’une relation d’équivalence dans $\\mathbb{R}$ et de la divisibilité dans $\\mathbb{N}^*$',
          statement:
            '1) Sur $\\mathbb{R}$, on définit $x \\mathcal{R} y \\iff x^2 - y^2 = x - y$. Montrer que $\\mathcal{R}$ est une relation d’équivalence et déterminer la classe $\\bar{x}$ de tout réel $x$. 2) Pourquoi la divisibilité $a \\mid b$ est-elle une relation d’ordre sur $\\mathbb{N}^*$ mais pas sur $\\mathbb{Z}$ ?',
          methodSteps: [
            '1) Réécrivons $x \\mathcal{R} y \\iff x^2 - x = y^2 - y$. En posant $f(t) = t^2 - t$, on a $x \\mathcal{R} y \\iff f(x) = f(y)$ !',
            'Réflexivité ($f(x) = f(x)$), symétrie ($f(x) = f(y) \\implies f(y) = f(x)$) et transitivité ($f(x) = f(y)$ et $f(y) = f(z) \\implies f(x) = f(z)$) sont immédiates.',
            'Classe de $x$ : $y^2 - y = x^2 - x \\iff (y - x)(y + x - 1) = 0 \\iff y = x$ ou $y = 1 - x$. Donc $\\bar{x} = \\{x, 1 - x\\}$ (et pour $x = \\frac{1}{2}$, $\\overline{1/2} = \\{\\frac{1}{2}\\}$).',
            '2) Sur $\\mathbb{N}^*$, $a \\mid b$ et $b \\mid a \\implies a = b$ (antisymétrique), mais sur $\\mathbb{Z}$, $2 \\mid (-2)$ et $(-2) \\mid 2$ alors que $2 \\neq -2$ : l’antisymétrie échoue dans $\\mathbb{Z}$ !',
          ],
          conclusion:
            '$\\mathcal{R}$ est d’équivalence avec $\\bar{x} = \\{x, 1 - x\\}$ ; la divisibilité est un ordre partiel sur $\\mathbb{N}^*$ mais pas un ordre sur $\\mathbb{Z}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: '4 propriétés',
            stepTheme: 'blue',
            stepTitle: 'Réflexivité, symétrie, antisymétrie et transitivité d’une relation binaire',
            paragraphText:
              'Pour analyser une relation binaire $\\mathcal{R}$ sur un ensemble $E$, on teste quatre propriétés précises qui caractérisent sa structure interne.\n' +
              '• **Réflexive** : tout élément est relié à lui-même ($\\forall x,\\ x \\mathcal{R} x$). Attention : l’ordre strict $<$ n’est **pas** réflexif ($x < x$ est faux).\n' +
              '• **Symétrique** : la flèche va toujours dans les deux sens ($x \\mathcal{R} y \\implies y \\mathcal{R} x$, ex : « avoir la même date de naissance »).\n' +
              '• **Antisymétrique** : deux éléments distincts ne peuvent jamais être reliés dans les deux sens ($x \\mathcal{R} y$ et $y \\mathcal{R} x \\implies x = y$).\n' +
              '• **Transitive** : on peut enchaîner les relations ($x \\mathcal{R} y$ et $y \\mathcal{R} z \\implies x \\mathcal{R} z$). Contre-exemple non transitif : la perpendicularité $\\perp$ dans le plan ($D_1 \\perp D_2$ et $D_2 \\perp D_3 \\implies D_1 \\parallel D_3$).',
            formula: {
              name: 'Définitions quantifiées des 4 propriétés',
              formula: '\\text{Réf.}: x\\mathcal{R}x ; \\quad \\text{Sym.}: x\\mathcal{R}y \\Rightarrow y\\mathcal{R}x ; \\quad \\text{Antisym.}: (x\\mathcal{R}y \\land y\\mathcal{R}x) \\Rightarrow x=y ; \\quad \\text{Trans.}: (x\\mathcal{R}y \\land y\\mathcal{R}z) \\Rightarrow x\\mathcal{R}z',
              note: 'Piège logique : une relation peut n’être NI symétrique NI antisymétrique (ex : divisibilité sur ℤ), ou être LES DEUX (ex : l’égalité =).',
            },
            keyRule:
              '« Antisymétrique » ne signifie JAMAIS « non symétrique » ! L’égalité ($x = y$) est à la fois symétrique ET antisymétrique.',
            konanTip:
              'Pour prouver qu’une propriété est **fausse**, il suffit d’exhiber **un seul contre-exemple numérique** (ex : pour nier l’antisymétrie de $\\mid$ sur $\\mathbb{Z}$, montre simplement $3 \\mid -3$ et $-3 \\mid 3$ avec $3 \\neq -3$).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'On considère la relation d’ordre strict $<$ sur $\\mathbb{R}$. Quelles propriétés vérifie-t-elle parmi réflexivité, symétrie, antisymétrie et transitivité ?',
              options: [
                'Réflexive, antisymétrique et transitive',
                'Antisymétrique et transitive (mais ni réflexive ni symétrique)',
                'Symétrique et transitive uniquement',
                'Transitive uniquement (elle n’est pas antisymétrique)',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$<$ n’est pas réflexive ($2 < 2$ est faux) ni symétrique ($1 < 2$ mais pas $2 < 1$). Elle est transitive ($x < y < z \\implies x < z$) et **antisymétrique** par vacuité : l’hypothèse « $x < y$ et $y < x$ » est toujours fausse, donc l’implication « $(x < y \\text{ et } y < x) \\implies x = y$ » est vraie !',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Équivalence',
            stepTheme: 'blue',
            stepTitle: 'Relation d’équivalence et classes d’équivalence',
            paragraphText:
              'Une relation d’équivalence identifie entre eux des objets qui partagent une même propriété essentielle : deux fractions $\\frac{2}{4}$ et $\\frac{3}{6}$, deux entiers ayant le même reste modulo $n$, ou deux clients appartenant au même segment tarifaire.\n' +
              '• **Définition** : $\\mathcal{R}$ est une relation d’équivalence ssi elle est **réflexive, symétrique et transitive**.\n' +
              '• **Classe d’équivalence de $x$** : $\\bar{x} = \\{y \\in E \\mid x \\mathcal{R} y\\}$. Par réflexivité, $x \\in \\bar{x}$, donc toute classe est **non vide**.\n' +
              '• **Astuce universelle** : toute relation de la forme $x \\mathcal{R} y \\iff f(x) = f(y)$ (pour n’importe quelle application $f : E \\to F$) est automatiquement une relation d’équivalence, et la classe $\\bar{x}$ est l’ensemble des antécédents de $f(x)$ : $\\bar{x} = f^{-1}(\\{f(x)\\})$ !',
            formula: {
              name: 'Égalité ou disjonction de deux classes d’équivalence',
              formula: '\\forall (x, y) \\in E^2,\\quad \\bar{x} = \\bar{y} \\iff x \\mathcal{R} y, \\qquad \\text{sinon } \\bar{x} \\cap \\bar{y} = \\emptyset',
              note: 'Il est impossible que deux classes d’équivalence se chevauchent partiellement !',
            },
            keyRule:
              'Dès que tu reconnais qu’une relation peut s’écrire $x \\mathcal{R} y \\iff f(x) = f(y)$, les trois axiomes d’équivalence découlent immédiatement des propriétés de l’égalité !',
            konanTip:
              'Un élément $x$ quelconque de la classe $\\bar{x}$ est appelé un **représentant** de cette classe : dans $\\mathbb{Z}/7\\mathbb{Z}$, $\\bar{2} = \\bar{9} = \\overline{-5}$ désignent exactement la même classe !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Sur $\\mathbb{R}$, on définit la relation d’équivalence $x \\mathcal{R} y \\iff x^2 - 4x = y^2 - 4y$. Quelle est la classe d’équivalence $\\bar{1}$ de $1$ ?',
              options: [
                '$\\{1\\}$',
                '$\\{1, 3\\}$',
                '$\\{1, -1\\}$',
                '$\\{1, 4\\}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On cherche tous les $y \\in \\mathbb{R}$ tels que $y^2 - 4y = 1^2 - 4(1) = -3$, soit $y^2 - 4y + 3 = 0 \\iff (y - 1)(y - 3) = 0$. Les solutions sont $1$ et $3$, donc $\\bar{1} = \\{1, 3\\}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Quotient E/R',
            stepTheme: 'violet',
            stepTitle: 'Ensemble quotient $E/\\mathcal{R}$ et théorème fondamental de partition',
            paragraphText:
              'La beauté des relations d’équivalence est qu’elles correspondent biunivoquement aux **partitions** de $E$ : chaque relation d’équivalence découpe $E$ en classes disjointes, et réciproquement toute partition définit une relation d’équivalence (« appartenir au même bloc »).\n' +
              '• **Théorème** : les classes d’équivalence distinctes d’une relation d’équivalence $\\mathcal{R}$ sur $E$ forment une **partition** de $E$.\n' +
              '• **Ensemble quotient $E/\\mathcal{R}$** : c’est l’ensemble de toutes les classes d’équivalence (un sous-ensemble de $\\mathcal{P}(E)$). On définit la **surjection canonique** $\\pi : E \\to E/\\mathcal{R}$ par $\\pi(x) = \\bar{x}$.\n' +
              '• **Exemple clé de l’algèbre** : la congruence modulo $n$ ($a \\equiv b \\pmod n$) partitionne $\\mathbb{Z}$ en exactement $n$ classes $\\bar{0}, \\bar{1}, \\dots, \\overline{n-1}$, dont l’ensemble quotient est $\\mathbb{Z}/n\\mathbb{Z}$ !',
            formula: {
              name: 'Cardinal du quotient en classes de même taille',
              formula: '\\text{Si chaque classe a } k \\text{ éléments dans } E \\text{ fini, alors } |E / \\mathcal{R}| = \\frac{|E|}{k}',
              note: 'C’est le principe du berger (compter les moutons en divisant le nombre de pattes par 4) !',
            },
            keyRule:
              'Les éléments de l’ensemble quotient $E / \\mathcal{R}$ ne sont pas des éléments de $E$, ce sont des **classes d’équivalence** (des sous-ensembles de $E$).',
            konanTip:
              'En SQL, la clause `GROUP BY colonne` réalise exactement le passage à l’ensemble quotient : elle partitionne les lignes d’une table en classes d’équivalence ayant la même valeur sur `colonne` !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'On définit sur $E = \\{0, 1, 2, \\dots, 11\\}$ la relation $a \\mathcal{R} b \\iff a \\text{ et } b \\text{ ont le même reste modulo } 4$. Quel est le cardinal de l’ensemble quotient $E / \\mathcal{R}$ ?',
              options: ['$3$', '$4$', '$12$', '$6$'],
              correctAnswerIndex: 1,
              explanation:
                'Les restes possibles dans la division par $4$ sont $0, 1, 2, 3$ : on obtient exactement $4$ classes d’équivalence ($\\{0,4,8\\}$, $\\{1,5,9\\}$, $\\{2,6,10\\}$ et $\\{3,7,11\\}$), donc $|E/\\mathcal{R}| = 4$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Relation d’ordre',
            stepTheme: 'blue',
            stepTitle: 'Relation d’ordre : ordre total vs ordre partiel',
            paragraphText:
              'Une relation d’ordre permet de hiérarchiser les éléments d’un ensemble (classement, dépendances de tâches dans un projet, inclusion de droits d’accès, divisibilité).\n' +
              '• **Définition** : $\\preceq$ est une relation d’ordre sur $E$ ssi elle est **réflexive, antisymétrique et transitive**.\n' +
              '• **Ordre total** : deux éléments quelconques sont toujours comparables ($\\forall x, y \\in E,\\ x \\preceq y \\text{ ou } y \\preceq x$). Exemples : $\\leqslant$ sur $\\mathbb{R}$, ordre lexicographique du dictionnaire.\n' +
              '• **Ordre partiel** : il existe au moins deux éléments **incomparables**. Exemples fondamentaux : la divisibilité $\\mid$ sur $\\mathbb{N}^*$ ($2$ ne divise pas $3$ et $3$ ne divise pas $2$) ; l’inclusion $\\subset$ sur $\\mathcal{P}(E)$ dès que $|E| \\geqslant 2$ ($\\{1\\}$ et $\\bar{\\{1\\}}$ ne sont pas comparables).',
            formula: {
              name: 'Définition d’un ordre total',
              formula: '\\forall (x, y) \\in E^2,\\quad (x \\preceq y) \\text{ ou } (y \\preceq x)',
              note: 'Un ordre qui n’est pas total est dit partiel (il suffit de trouver une paire incomparable).',
            },
            keyRule:
              'Pour montrer qu’un ordre est **partiel**, exhibe simplement **deux éléments incomparables** (par exemple $4$ et $6$ pour la divisibilité, ou $\\{a\\}$ et $\\{b\\}$ pour l’inclusion) !',
            konanTip:
              'En gestion de projet (diagramme PERT/Gantt), la relation « la tâche $A$ doit précéder la tâche $B$ » est un ordre partiel : les tâches incomparables peuvent être exécutées en parallèle !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Parmi les couples $(E, \\mathcal{R})$ suivants, lequel définit une relation d’**ordre partiel** (et non total) ?',
              options: [
                '$(\\mathbb{R}, \\leqslant)$',
                '$(\\mathbb{Z}, \\mid)$ (divisibilité dans $\\mathbb{Z}$)',
                '$(\\mathbb{N}^*, \\mid)$ (divisibilité dans $\\mathbb{N}^*$)',
                '$(\\mathbb{Z}, \\equiv \\pmod 5)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sur $\\mathbb{N}^*$, la divisibilité est réflexive, antisymétrique et transitive, donc c’est un ordre ; comme $2 \\nmid 3$ et $3 \\nmid 2$, il est partiel. Attention : sur $\\mathbb{Z}$, la divisibilité n’est PAS un ordre (défaut d’antisymétrie : $2 \\mid -2$ et $-2 \\mid 2$), $\\leqslant$ sur $\\mathbb{R}$ est total, et la congruence est une équivalence.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Éléments remarquables',
            stepTheme: 'violet',
            stepTitle: 'Plus grand élément, majorants et éléments maximaux dans un ordre partiel',
            paragraphText:
              'Dans un ensemble muni d’un ordre **partiel** $(E, \\preceq)$, deux notions qui coïncidaient dans $\\mathbb{R}$ se séparent nettement : « plus grand élément » et « élément maximal » !\n' +
              '• **Plus grand élément (maximum)** : $M \\in E$ tel que $\\forall x \\in E,\\ x \\preceq M$ ($M$ domine **tout le monde**). S’il existe, il est **unique**.\n' +
              '• **Élément maximal** : $m \\in E$ tel qu’aucun autre élément ne le domine strictement ($\\forall x \\in E,\\ m \\preceq x \\implies x = m$). Il peut en exister **plusieurs** !\n' +
              '• **Exemple lumineux** : soit $A = \\{2, 3, 4, 6\\}$ ordonné par la divisibilité $\\mid$. $A$ n’a **pas de plus grand élément** ($4$ ne divise pas $6$ et $6$ ne divise pas $4$), mais il possède **deux éléments maximaux** : $4$ et $6$ (aucun élément de $A$ n’est un multiple strict de $4$ ou de $6$) !',
            formula: {
              name: 'Différence entre maximum et élément maximal',
              formula: 'M \\text{ maximum} : \\forall x,\\ x \\preceq M ; \\qquad m \\text{ maximal} : (\\forall x,\\ m \\preceq x \\implies x = m)',
              note: 'Un maximum est toujours l’unique élément maximal, mais la réciproque est fausse dans un ordre partiel.',
            },
            keyRule:
              'Dans $\\mathcal{P}(E)$ ordonné par $\\subset$, le plus petit élément est $\\emptyset$ et le plus grand élément est $E$. Pour $A, B \\in \\mathcal{P}(E)$, $\\sup\\{A, B\\} = A \\cup B$ et $\\inf\\{A, B\\} = A \\cap B$ !',
            konanTip:
              'Dans $(\\mathbb{N}^*, \\mid)$, la borne inférieure de $\\{a, b\\}$ est $\\operatorname{pgcd}(a, b)$ et sa borne supérieure est $\\operatorname{ppcm}(a, b)$ : tout l’édifice algébrique est relié !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'On munit $A = \\{2, 3, 5, 6, 10, 15\\}$ de la relation de divisibilité $\\mid$. Quels sont les éléments **maximaux** de $A$ ?',
              options: [
                'Uniquement $15$',
                '$6$, $10$ et $15$',
                '$2$, $3$ et $5$',
                'Il n’y en a aucun',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Aucun élément de $A$ n’est multiple strict de $6$, de $10$ ou de $15$ (car $30 \\notin A$), donc $6, 10$ et $15$ sont les $3$ éléments maximaux (et $A$ n’a pas de plus grand élément). Les éléments minimaux sont $2, 3$ et $5$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Tableau comparatif',
            stepTheme: 'green',
            stepTitle: 'Synthèse comparée : relation d’équivalence vs relation d’ordre',
            paragraphText:
              'Pour ne jamais confondre les critères à démontrer en contrôle, garde toujours en tête le tableau comparatif complet des deux grandes structures relationnelles.\n' +
              '• **Point commun** : les deux sont **réflexives** et **transitives**.\n' +
              '• **Point de divergence** : l’équivalence exige la **symétrie** (regrouper en classes disjointes), tandis que l’ordre exige l’**antisymétrie** (empêcher les cycles entre éléments distincts).\n' +
              '• **Question réflexe** : pour savoir immédiatement ce qu’est une relation $\\mathcal{R}$, regarde si $x \\mathcal{R} y$ est symétrique en $x$ et $y$ (ex : $x - y \\in 5\\mathbb{Z}$) ou orientée de $x$ vers $y$ (ex : $x \\leqslant y$, $x \\mid y$, $A \\subset B$).',
            formula: {
              name: 'Dualité Équivalence / Ordre',
              formula: '\\text{Équivalence} = \\text{Réf.} + \\text{Sym.} + \\text{Trans.} ; \\qquad \\text{Ordre} = \\text{Réf.} + \\text{Antisym.} + \\text{Trans.}',
              note: 'Seule l’égalité « = » vérifie à la fois les axiomes d’équivalence et ceux d’ordre !',
            },
            keyRule:
              'Dans une rédaction de preuve d’équivalence ou d’ordre, structure toujours ta copie en **3 paragraphes titrés** (Réflexivité / Symétrie ou Antisymétrie / Transitivité) + éventuellement Totalité.',
            konanTip:
              'Si une relation vérifie « réflexive + transitive » sans être ni symétrique ni antisymétrique (ex : la divisibilité sur $\\mathbb{Z}$), on parle de **préordre**.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Matrice comparative : Relation d’équivalence vs Relation d’ordre',
              caption: 'Les deux structures partagent réflexivité et transitivité, mais se distinguent par symétrie vs antisymétrie.',
              tableData: {
                headers: ['Propriété / Caractéristique', 'Relation d’équivalence', 'Relation d’ordre'],
                rows: [
                  ['Réflexive (x R x)', 'Oui (obligatoire)', 'Oui (obligatoire)'],
                  ['Symétrique (x R y ⇒ y R x)', 'Oui (obligatoire)', 'Non (sauf l’égalité)'],
                  ['Antisymétrique (x R y et y R x ⇒ x = y)', 'Non (sauf l’égalité)', 'Oui (obligatoire)'],
                  ['Transitive (x R y et y R z ⇒ x R z)', 'Oui (obligatoire)', 'Oui (obligatoire)'],
                  ['Structure induite', 'Partition en classes (E/R)', 'Hiérarchie (ordre total ou partiel)'],
                  ['Exemples phares', 'Congruence mod n, f(x)=f(y)', '≤ sur ℝ, ⊂ sur P(E), | sur ℕ*'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est l’unique relation binaire sur un ensemble $E$ qui soit à la fois une **relation d’équivalence** et une **relation d’ordre** ?',
              options: [
                'La relation vide',
                'La relation pleine ($E \\times E$)',
                'La relation d’égalité ($x \\mathcal{R} y \\iff x = y$)',
                'La relation d’inclusion',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Si $\\mathcal{R}$ est symétrique et antisymétrique, alors $x \\mathcal{R} y \\implies y \\mathcal{R} x \\implies x = y$. Comme elle est aussi réflexive ($x \\mathcal{R} x$ pour tout $x$), on a exactement $x \\mathcal{R} y \\iff x = y$.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_algebre_ch1_p3',
        order: 3,
        title: 'Applications : injection, surjection, bijection et images directe/réciproque',
        summary:
          'Distinguer application et fonction, calculer images directes et réciproques, démontrer injectivité/surjectivité/bijectivité, composer des applications et exploiter le principe des tiroirs.',
        conceptExplanation:
          'Une **application** $f : E \\to F$ associe à **chaque** élément $x \\in E$ (ensemble de départ) un **unique** élément $f(x) \\in F$ (ensemble d’arrivée). Le comportement de $f$ par rapport aux antécédents définit les trois notions cardinales de l’algèbre.\n\n' +
          '• **Image directe et réciproque** : pour $A \\subset E$, $f(A) = \\{f(x) \\mid x \\in A\\} \\subset F$ ; pour $B \\subset F$, $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\} \\subset E$ (cette notation $f^{-1}(B)$ existe **toujours**, même si $f$ n’est pas bijective !).\n' +
          '• **Injective** : tout $y \\in F$ admet **au plus un** antécédent ($f(x_1) = f(x_2) \\implies x_1 = x_2$).\n' +
          '• **Surjective** : tout $y \\in F$ admet **au moins un** antécédent ($\\forall y \\in F,\\ \\exists x \\in E,\\ f(x) = y$, soit $f(E) = F$).\n' +
          '• **Bijective** : injective ET surjective (tout $y \\in F$ admet un **unique** antécédent). Elle possède alors une application réciproque $f^{-1} : F \\to E$ vérifiant $f^{-1} \\circ f = \\operatorname{Id}_E$ et $f \\circ f^{-1} = \\operatorname{Id}_F$, et $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.',
        formulas: [
          {
            name: 'Définitions équivalentes d’injection, surjection, bijection',
            formula: '\\text{Inj}: f(x_1)=f(x_2) \\Rightarrow x_1=x_2 ; \\quad \\text{Surj}: \\forall y \\in F,\\ \\exists x \\in E,\\ f(x)=y ; \\quad \\text{Bij}: \\forall y \\in F,\\ \\exists! x \\in E,\\ f(x)=y',
            note: 'Règle des cardinaux finis : Inj ⇒ |E| ≤ |F| ; Surj ⇒ |E| ≥ |F| ; Bij ⇒ |E| = |F|.',
          },
          {
            name: 'Réciproque d’une composée de bijections',
            formula: '(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}',
            note: 'Ordre inversé (« chaussettes puis chaussures » : pour enlever, on enlève d’abord les chaussures !).',
          },
          {
            name: 'Comportement de f et f⁻¹ avec ∪ et ∩',
            formula: 'f(A \\cup B) = f(A) \\cup f(B), \\quad f(A \\cap B) \\subset f(A) \\cap f(B) ; \\qquad f^{-1}(C \\cap D) = f^{-1}(C) \\cap f^{-1}(D)',
            note: 'L’image réciproque respecte TOUTES les opérations (∪, ∩, complémentaire), contrairement à l’image directe !',
          },
        ],
        keyRule:
          'Entre deux ensembles **finis de même cardinal** ($|E| = |F| = n$), les trois propriétés sont **équivalentes** : injective $\\iff$ surjective $\\iff$ bijective ! (Mais c’est FAUX sur les ensembles infinis : $n \\mapsto 2n$ de $\\mathbb{N}$ dans $\\mathbb{N}$ est injective mais non surjective.)',
        workedExample: {
          title: 'Bijectivité de $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$, $f(x) = \\frac{3x + 1}{x - 2}$',
          statement:
            'Montrer que $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ définie par $f(x) = \\frac{3x + 1}{x - 2}$ est bijective et déterminer son application réciproque $f^{-1}$.',
          methodSteps: [
            '1) Vérifions que $f$ est bien à valeurs dans $\\mathbb{R} \\setminus \\{3\\}$ : si $\\frac{3x+1}{x-2} = 3$, alors $3x + 1 = 3x - 6 \\implies 1 = -6$, impossible ! Donc $f(x) \\neq 3$ pour tout $x \\neq 2$.',
            '2) Soit $y \\in \\mathbb{R} \\setminus \\{3\\}$ fixé. Résolvons l’équation $f(x) = y$ d’inconnue $x \\in \\mathbb{R} \\setminus \\{2\\}$ :',
            '$\\frac{3x + 1}{x - 2} = y \\iff 3x + 1 = y(x - 2) \\iff (3 - y)x = -2y - 1 \\iff x = \\frac{2y + 1}{y - 3}$ (division légitime car $y \\neq 3$).',
            '3) Vérifions que cette unique solution $x$ appartient bien à $\\mathbb{R} \\setminus \\{2\\}$ : $\\frac{2y+1}{y-3} = 2 \\iff 2y + 1 = 2y - 6 \\iff 1 = -6$, impossible ! Ainsi tout $y \\in \\mathbb{R} \\setminus \\{3\\}$ admet un **unique** antécédent dans $\\mathbb{R} \\setminus \\{2\\}$.',
          ],
          conclusion:
            '$f$ est bijective et sa réciproque est $f^{-1}(y) = \\frac{2y + 1}{y - 3}$ pour tout $y \\in \\mathbb{R} \\setminus \\{3\\}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Composition',
            stepTheme: 'blue',
            stepTitle: 'Application, ensembles de départ/arrivée et composition $g \\circ f$',
            paragraphText:
              'Une application $f : E \\to F$ n’est pas uniquement une formule : son **ensemble de départ $E$** et son **ensemble d’arrivée $F$** font partie intégrante de sa définition ! Changer $E$ ou $F$ change ses propriétés (ex : $x \\mapsto x^2$ est bijective de $\\mathbb{R}_+$ dans $\\mathbb{R}_+$, mais ni injective ni surjective de $\\mathbb{R}$ dans $\\mathbb{R}$).\n' +
              '• **Composition $g \\circ f$** : si $f : E \\to F$ et $g : F \\to G$, alors $(g \\circ f)(x) = g(f(x))$ applique d’abord $f$, puis $g$.\n' +
              '• **Propriétés** : la composition est **associative** : $h \\circ (g \\circ f) = (h \\circ g) \\circ f$, mais **non commutative** en général ($g \\circ f \\neq f \\circ g$).\n' +
              '• **Exemple** : avec $f(x) = x + 1$ et $g(x) = x^2$, $(g \\circ f)(x) = (x + 1)^2$ alors que $(f \\circ g)(x) = x^2 + 1$.',
            formula: {
              name: 'Associativité et identité de la composition',
              formula: '(h \\circ g) \\circ f = h \\circ (g \\circ f), \\qquad f \\circ \\operatorname{Id}_E = f = \\operatorname{Id}_F \\circ f',
              note: 'Lire g ∘ f de droite à gauche : d’abord f, puis g !',
            },
            keyRule:
              'Précise TOUJOURS les ensembles de départ et d’arrivée avant de juger si une formule définit une injection, une surjection ou une bijection !',
            konanTip:
              'Pour vérifier que $f : E \\to F$ est une bijection de réciproque $g : F \\to E$, il suffit de vérifier les deux égalités $g \\circ f = \\operatorname{Id}_E$ **et** $f \\circ g = \\operatorname{Id}_F$ (les deux sont nécessaires !).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Soient $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto 2x - 3$ et $g : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 + 1$. Que vaut $(f \\circ g)(x)$ ?',
              options: [
                '$(2x - 3)^2 + 1 = 4x^2 - 12x + 10$',
                '$2(x^2 + 1) - 3 = 2x^2 - 1$',
                '$2x^2 + 1$',
                '$2x^2 - 2$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$(f \\circ g)(x) = f(g(x)) = f(x^2 + 1) = 2(x^2 + 1) - 3 = 2x^2 + 2 - 3 = 2x^2 - 1$. Attention à ne pas inverser avec $(g \\circ f)(x) = 4x^2 - 12x + 10$ !',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Images',
            stepTheme: 'violet',
            stepTitle: 'Image directe $f(A)$ et image réciproque $f^{-1}(B)$',
            paragraphText:
              'Ne te laisse pas piéger par la notation $f^{-1}(B)$ : appliquée à un **sous-ensemble** $B \\subset F$, elle désigne l’ensemble de tous les antécédents des éléments de $B$ et existe pour **toute** application $f$, même non bijective !\n' +
              '• **Image directe** : $f(A) = \\{f(x) \\mid x \\in A\\}$. Exemple : pour $f(x) = x^2$, $f([-2, 3]) = [0, 9]$.\n' +
              '• **Image réciproque** : $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}$. Exemple : pour $f(x) = x^2$, $f^{-1}([1, 4]) = [-2, -1] \\cup [1, 2]$, et $f^{-1}([-5, -1]) = \\emptyset$.\n' +
              '• **Piège sur l’intersection** : on a toujours $f^{-1}(C \\cap D) = f^{-1}(C) \\cap f^{-1}(D)$, mais pour l’image directe, on a seulement $f(A \\cap B) \\subset f(A) \\cap f(B)$ (contre-exemple : $f(x) = x^2$, $A = \\{-1\\}$, $B = \\{1\\}$ : $f(A \\cap B) = f(\\emptyset) = \\emptyset \\neq \\{1\\} = f(A) \\cap f(B)$ !).',
            formula: {
              name: 'Propriétés de l’image directe et de l’image réciproque',
              formula: 'f(A \\cup B) = f(A) \\cup f(B), \\quad f(A \\cap B) \\subset f(A) \\cap f(B) ; \\qquad f^{-1}(\\bar{C}) = \\overline{f^{-1}(C)}',
              note: 'L’égalité f(A ∩ B) = f(A) ∩ f(B) pour tous A, B caractérise exactement les applications injectives !',
            },
            keyRule:
              '$f^{-1}(B)$ existe pour TOUTE application $f$ et commute avec $\\cup$, $\\cap$ et le complémentaire. En revanche, $f(A \\cap B)$ peut être strictement inclus dans $f(A) \\cap f(B)$ si $f$ n’est pas injective !',
            konanTip:
              'Pour calculer $f^{-1}(B)$ sur un exemple, remplace mentalement la question par une inéquation : « pour quels $x$ a-t-on $f(x) \\in B$ ? ».',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'Pour l’application $f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$, que vaut l’image réciproque $f^{-1}([-4, 9])$ ?',
              options: [
                '$[0, 3]$',
                '$[-3, 3]$',
                '$[-2, 3]$',
                '$f^{-1}$ n’existe pas car $f$ n’est pas bijective',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’image réciproque d’une partie existe toujours : $x \\in f^{-1}([-4, 9]) \\iff -4 \\leqslant x^2 \\leqslant 9 \\iff 0 \\leqslant x^2 \\leqslant 9 \\iff x \\in [-3, 3]$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Injectivité',
            stepTheme: 'green',
            stepTitle: 'Applications injectives : définition, méthode de preuve et stabilité',
            paragraphText:
              'Une application injective est une application « sans collision » : deux entrées distinctes produisent toujours deux sorties distinctes (comme une fonction de codage sans perte ou un numéro matricule unique).\n' +
              '• **Définition** : $f : E \\to F$ est injective ssi $\\forall x_1, x_2 \\in E,\\ f(x_1) = f(x_2) \\implies x_1 = x_2$ (contraposée : $x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$).\n' +
              '• **Comment prouver l’injectivité** : on fixe deux éléments quelconques $x_1, x_2 \\in E$ tels que $f(x_1) = f(x_2)$ et l’on déduit $x_1 = x_2$. En analyse, toute fonction **strictement monotone** sur un intervalle est automatiquement injective !\n' +
              '• **Composition** : la composée de deux injections est injective. Plus fort : si $g \\circ f$ est injective, alors **$f$** (la première appliquée) est nécessairement injective !',
            formula: {
              name: 'Propriété de la composée pour l’injectivité',
              formula: '(g \\circ f \\text{ injective}) \\implies f \\text{ injective}',
              note: 'Preuve : f(x₁) = f(x₂) ⇒ g(f(x₁)) = g(f(x₂)) ⇒ x₁ = x₂ par injectivité de g ∘ f.',
            },
            keyRule:
              'Pour prouver qu’une application $f$ n’est **pas injective**, il suffit de donner un seul couple $x_1 \\neq x_2$ tel que $f(x_1) = f(x_2)$ (ex : $f(-2) = f(2) = 4$ pour $x \\mapsto x^2$).',
            konanTip:
              'Mémo sur la composée $g \\circ f$ : « **$g \\circ f$ injective $\\implies f$ injective** » (à droite) et « **$g \\circ f$ surjective $\\implies g$ surjective** » (à gauche) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'On considère $f : \\mathbb{Z} \\to \\mathbb{Z}$ définie par $f(n) = 2n + 1$. Est-elle injective et/ou surjective ?',
              options: [
                'Bijective (injective et surjective)',
                'Injective mais non surjective',
                'Surjective mais non injective',
                'Ni injective ni surjective',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Injective : $2n_1 + 1 = 2n_2 + 1 \\implies 2n_1 = 2n_2 \\implies n_1 = n_2$. Non surjective dans $\\mathbb{Z}$ : aucun entier $n \\in \\mathbb{Z}$ ne vérifie $2n + 1 = 4$ (les images sont toutes impaires, les entiers pairs n’ont pas d’antécédent).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Surjection & Bijection',
            stepTheme: 'green',
            stepTitle: 'Surjectivité, bijectivité et calcul de la réciproque $f^{-1}$',
            paragraphText:
              'Une application surjective couvre tout son ensemble d’arrivée ($f(E) = F$) ; lorsqu’elle est aussi injective, elle établit une correspondance parfaite un-pour-un (bijection), réversible sans aucune ambiguïté.\n' +
              '• **Méthode directe de preuve de bijectivité** : on fixe un $y \\in F$ quelconque et l’on résout l’équation $f(x) = y$ d’inconnue $x \\in E$. Si l’on montre qu’il existe une **unique** solution $x \\in E$ (exprimée en fonction de $y$), on prouve **en une seule fois** l’injectivité, la surjectivité, et l’on obtient la formule explicite de $f^{-1}(y)$ !\n' +
              '• **Propriété de composition** : si $g \\circ f$ est surjective, alors $g$ est surjective. Si $f$ et $g$ sont bijectives, $g \\circ f$ est bijective et $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.\n' +
              '• **Involution** : si $f \\circ f = \\operatorname{Id}_E$ (ex : $x \\mapsto 1/x$ sur $\\mathbb{R}^*$, ou la symétrie $x \\mapsto -x$), alors $f$ est bijective et $f^{-1} = f$ !',
            formula: {
              name: 'Caractérisation par existence d’une réciproque bilatérale',
              formula: 'f : E \\to F \\text{ bijective} \\iff \\exists g : F \\to E,\\ (g \\circ f = \\operatorname{Id}_E \\text{ et } f \\circ g = \\operatorname{Id}_F)',
              note: 'Si f est involutive (f ∘ f = Id), sa bijectivité est immédiate et f⁻¹ = f !',
            },
            keyRule:
              'Pour prouver qu’une application $f : E \\to F$ est bijective, ne vérifie pas séparément injection et surjection si tu peux résoudre $f(x) = y$ directement : l’existence et l’unicité de $x \\in E$ prouvent tout d’un coup !',
            konanTip:
              'N’oublie jamais de vérifier que la formule trouvée pour $x$ appartient bien à l’ensemble de départ $E$ (ex : $x \\neq 2$ pour $E = \\mathbb{R} \\setminus \\{2\\}$) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Soit $f : \\mathbb{R} \\to ]0, +\\infty[$ définie par $f(x) = e^{2x - 1}$. Quelle est son application réciproque $f^{-1}(y)$ pour tout $y > 0$ ?',
              options: [
                '$f^{-1}(y) = \\frac{\\ln(y) - 1}{2}$',
                '$f^{-1}(y) = \\frac{\\ln(y) + 1}{2}$',
                '$f^{-1}(y) = 2\\ln(y) + 1$',
                '$f^{-1}(y) = e^{(y+1)/2}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $y > 0$, $e^{2x - 1} = y \\iff 2x - 1 = \\ln(y) \\iff 2x = \\ln(y) + 1 \\iff x = \\frac{\\ln(y) + 1}{2} \\in \\mathbb{R}$. Cette solution existe et est unique, donc $f$ est bijective et $f^{-1}(y) = \\frac{\\ln(y) + 1}{2}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Diagrammes sagittaux',
            stepTheme: 'slate',
            stepTitle: 'Lecture visuelle comparée : injective, surjective, bijective',
            paragraphText:
              'Un diagramme sagittal (flèches de $E$ vers $F$) permet de diagnostiquer en un coup d’œil le type d’une application entre ensembles finis.\n' +
              '• **Règle d’une application** : de **chaque** point de $E$, il part **exactement une** flèche (jamais $0$, jamais $2$).\n' +
              '• **Injective** : chaque point de $F$ reçoit **au plus $1$ flèche** (aucune flèche ne converge sur un même point ; certains points de $F$ peuvent rester libres).\n' +
              '• **Surjective** : chaque point de $F$ reçoit **au moins $1$ flèche** (aucun point de $F$ n’est oublié ; plusieurs flèches peuvent arriver au même point).\n' +
              '• **Bijective** : chaque point de $F$ reçoit **exactement $1$ flèche** (mariage parfait un-pour-un entre $E$ et $F$, donc $|E| = |F|$).',
            formula: {
              name: 'Contraintes de cardinalité sur les ensembles finis',
              formula: 'f \\text{ inj.} \\implies |E| \\leqslant |F| ; \\qquad f \\text{ surj.} \\implies |E| \\geqslant |F| ; \\qquad f \\text{ bij.} \\implies |E| = |F|',
              note: 'Nombre de bijections d’un ensemble à n éléments sur lui-même : n! (permutations).',
            },
            keyRule:
              'Compte les flèches à l’**arrivée** (dans $F$) : $\\leqslant 1$ par point $\\iff$ injective ; $\\geqslant 1$ par point $\\iff$ surjective ; $= 1$ par point $\\iff$ bijective !',
            konanTip:
              'Le nombre total d’applications de $E$ ($p$ éléments) dans $F$ ($n$ éléments) vaut $n^p = |F|^{|E|}$, le nombre d’injections ($p \\leqslant n$) vaut $A_n^p = \\frac{n!}{(n-p)!}$, et le nombre de bijections ($p = n$) vaut $n!$ !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Comparaison sagittale : Injection, Surjection et Bijection',
              caption: 'Injective : au plus 1 flèche reçue dans F. Surjective : au moins 1 flèche reçue dans F. Bijective : exactement 1 flèche reçue dans F.',
              svgContent:
                '<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto">' +
                '<defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#475569"/></marker></defs>' +
                '<!-- Panel 1: Injective -->' +
                '<rect x="6" y="8" width="130" height="174" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>' +
                '<text x="71" y="26" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">Injective (non surj.)</text>' +
                '<ellipse cx="36" cy="104" rx="18" ry="54" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>' +
                '<ellipse cx="106" cy="104" rx="18" ry="60" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>' +
                '<circle cx="36" cy="76" r="4" fill="#2563eb"/><circle cx="36" cy="104" r="4" fill="#2563eb"/><circle cx="36" cy="132" r="4" fill="#2563eb"/>' +
                '<circle cx="106" cy="64" r="4" fill="#2563eb"/><circle cx="106" cy="90" r="4" fill="#2563eb"/><circle cx="106" cy="118" r="4" fill="#2563eb"/><circle cx="106" cy="144" r="4" fill="#f97316"/>' +
                '<line x1="41" y1="76" x2="99" y2="65" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="41" y1="104" x2="99" y2="91" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="41" y1="132" x2="99" y2="119" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<text x="71" y="175" text-anchor="middle" font-size="9.5" fill="#1e40af">|E| &lt; |F| (1 libre)</text>' +
                '<!-- Panel 2: Surjective -->' +
                '<rect x="145" y="8" width="130" height="174" rx="10" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>' +
                '<text x="210" y="26" text-anchor="middle" font-size="11" font-weight="800" fill="#6d28d9">Surjective (non inj.)</text>' +
                '<ellipse cx="175" cy="104" rx="18" ry="60" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>' +
                '<ellipse cx="245" cy="104" rx="18" ry="50" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>' +
                '<circle cx="175" cy="64" r="4" fill="#7c3aed"/><circle cx="175" cy="90" r="4" fill="#7c3aed"/><circle cx="175" cy="118" r="4" fill="#7c3aed"/><circle cx="175" cy="144" r="4" fill="#7c3aed"/>' +
                '<circle cx="245" cy="76" r="4" fill="#7c3aed"/><circle cx="245" cy="104" r="4" fill="#7c3aed"/><circle cx="245" cy="132" r="4" fill="#f97316"/>' +
                '<line x1="180" y1="64" x2="238" y2="75" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="180" y1="90" x2="238" y2="103" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="180" y1="118" x2="238" y2="131" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="180" y1="144" x2="238" y2="133" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<text x="210" y="175" text-anchor="middle" font-size="9.5" fill="#5b21b6">|E| &gt; |F| (collision)</text>' +
                '<!-- Panel 3: Bijective -->' +
                '<rect x="284" y="8" width="130" height="174" rx="10" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>' +
                '<text x="349" y="26" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">Bijective (inj. + surj.)</text>' +
                '<ellipse cx="314" cy="104" rx="18" ry="54" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>' +
                '<ellipse cx="384" cy="104" rx="18" ry="54" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>' +
                '<circle cx="314" cy="76" r="4" fill="#059669"/><circle cx="314" cy="104" r="4" fill="#059669"/><circle cx="314" cy="132" r="4" fill="#059669"/>' +
                '<circle cx="384" cy="76" r="4" fill="#059669"/><circle cx="384" cy="104" r="4" fill="#059669"/><circle cx="384" cy="132" r="4" fill="#059669"/>' +
                '<line x1="319" y1="76" x2="377" y2="76" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="319" y1="104" x2="377" y2="104" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<line x1="319" y1="132" x2="377" y2="132" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>' +
                '<text x="349" y="175" text-anchor="middle" font-size="9.5" fill="#065f46">|E| = |F| (1-pour-1)</text>' +
                '</svg>',
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Soient $E$ un ensemble à $4$ éléments et $F$ un ensemble à $3$ éléments. Quelle affirmation est **nécessairement vraie** pour toute application $f : E \\to F$ ?',
              options: [
                '$f$ est surjective',
                '$f$ ne peut PAS être injective',
                '$f$ peut être bijective',
                'Il existe $3^4 = 81$ bijections de $E$ dans $F$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $|E| = 4 > 3 = |F|$, aucune application de $E$ dans $F$ ne peut être injective (il y a plus d’éléments au départ qu’à l’arrivée, donc au moins deux éléments auront la même image). Elle n’est pas forcément surjective (par exemple une fonction constante).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Tiroirs & Finis',
            stepTheme: 'violet',
            stepTitle: 'Principe des tiroirs de Dirichlet et bijections d’ensembles finis',
            paragraphText:
              'La contraposée de « $f$ injective $\\implies |E| \\leqslant |F|$ » est l’un des théorèmes les plus simples et les plus puissants des mathématiques discrètes : le **principe des tiroirs de Dirichlet** (pigeonhole principle).\n' +
              '• **Principe des tiroirs** : si l’on range strictement plus de $n$ objets dans $n$ tiroirs ($|E| > |F|$), alors au moins un tiroir contient **au moins $2$ objets** ($f : E \\to F$ ne peut être injective).\n' +
              '• **Application en informatique (hachage)** : une fonction de hachage qui compresse des fichiers de taille arbitraire vers $256$ bits ($2^{256}$ sorties) n’est jamais injective : des collisions existent nécessairement !\n' +
              '• **Théorème d’équivalence sur les ensembles finis** : si $|E| = |F|$ fini, alors pour toute $f : E \\to F$, **$f$ injective $\\iff f$ surjective $\\iff f$ bijective** ! (Par exemple, montrer que $x \\mapsto ax \\bmod p$ est injective sur $\\mathbb{Z}/p\\mathbb{Z}$ prouve aussitôt qu’elle est bijective !)',
            formula: {
              name: 'Équivalence en cardinal fini égal',
              formula: '|E| = |F| < +\\infty \\implies \\big(f \\text{ injective} \\iff f \\text{ surjective} \\iff f \\text{ bijective}\\big)',
              note: 'C’est aussi ce qui permet d’affirmer en algèbre linéaire qu’une matrice carrée injective est inversible !',
            },
            keyRule:
              'Pour prouver qu’une application $f : E \\to E$ sur un ensemble **fini** est bijective, il suffit de prouver qu’elle est **injective** (la surjectivité est offerte gratuitement par l’égalité des cardinaux) !',
            konanTip:
              'Exemple célèbre des tiroirs : parmi $13$ personnes dans une salle à Abidjan, au moins deux sont nées le même mois ; parmi $n + 1$ entiers quelconques, au moins deux ont le même reste modulo $n$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'On choisit au hasard $8$ entiers relatifs quelconques. Que garantit le principe des tiroirs de Dirichlet concernant leurs restes dans la division euclidienne par $7$ ?',
              options: [
                'L’un des $8$ entiers est nécessairement divisible par $7$',
                'Au moins deux de ces $8$ entiers ont le même reste modulo $7$ (donc leur différence est divisible par $7$)',
                'Les $7$ restes possibles apparaissent tous au moins une fois',
                'La somme des $8$ entiers est divisible par $7$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Il n’existe que $7$ restes possibles modulo $7$ ($\\{0, 1, 2, 3, 4, 5, 6\\}$). L’application qui associe à chacun des $8$ entiers son reste modulo $7$ va d’un ensemble de cardinal $8$ dans un ensemble de cardinal $7$ : elle n’est donc pas injective, ce qui garantit que deux entiers distincts ont le même reste modulo $7$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Arithmétique dans Z : divisibilité, Euclide, Bézout et Gauss
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch2',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1',
    title: 'Chapitre 2 — Arithmétique dans $\\mathbb{Z}$ : divisibilité, Euclide, Bézout et Gauss',
    summary:
      'Divisibilité et critères, division euclidienne dans $\\mathbb{Z}$ et codes ISBN-10, nombres premiers et décomposition unique, PGCD, PPCM, algorithme d’Euclide étendu, théorème de Bézout, lemme de Gauss et résolution complète des équations diophantiennes $ax + by = c$.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch2_p1',
        order: 1,
        title: 'Divisibilité, division euclidienne, codes ISBN et nombres premiers',
        summary:
          'Maîtriser la divisibilité dans $\\mathbb{Z}$, les critères usuels, le théorème de la division euclidienne (y compris pour les négatifs), le contrôle de clé ISBN-10, le test de primalité jusqu’à $\\sqrt{n}$ et la décomposition en facteurs premiers.',
        conceptExplanation:
          'L’arithmétique dans $\\mathbb{Z}$ est le pilier caché du monde numérique : détection d’erreurs sur les numéros ISBN, cartes bancaires et comptes IBAN, compression de données et sécurité cryptographique.\n\n' +
          '• **Divisibilité** : pour $(a, b) \\in \\mathbb{Z}^2$, $b \\mid a \\iff \\exists q \\in \\mathbb{Z},\\ a = bq \\iff a\\mathbb{Z} \\subset b\\mathbb{Z}$. Si $c \\mid a$ et $c \\mid b$, alors pour tous $u, v \\in \\mathbb{Z}$, $c \\mid (ua + vb)$.\n' +
          '• **Division euclidienne dans $\\mathbb{Z}$** : pour $(a, b) \\in \\mathbb{Z} \\times \\mathbb{Z}^*$, il existe un **unique** couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ et **$0 \\leqslant r < |b|$** (le reste est TOUJOURS positif ou nul !).\n' +
          '• **Nombres premiers** : un entier $n > 1$ est premier ssi ses seuls diviseurs positifs sont $1$ et $n$. Tout entier composé $n > 1$ admet au moins un diviseur premier $p \\leqslant \\sqrt{n}$.\n' +
          '• **Théorème fondamental de l’arithmétique** : tout entier $n \\geqslant 2$ se décompose de façon **unique** (à l’ordre près) en produit de puissances de nombres premiers $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_r^{\\alpha_r}$.',
        formulas: [
          {
            name: 'Théorème de la division euclidienne dans ℤ',
            formula: '\\forall (a, b) \\in \\mathbb{Z} \\times \\mathbb{Z}^*,\\ \\exists! (q, r) \\in \\mathbb{Z} \\times \\mathbb{N},\\quad a = bq + r \\quad \\text{et} \\quad 0 \\leqslant r < |b|',
            note: 'Exemple négatif : −17 = 5 × (−4) + 3 (et NON 5 × (−3) − 2 car le reste doit être ≥ 0 !).',
          },
          {
            name: 'Clé de contrôle d’un numéro ISBN-10',
            formula: 'c \\equiv \\sum_{i=1}^{9} i \\cdot a_i \\pmod{11} \\qquad (0 \\leqslant c \\leqslant 10,\\ \\text{noté X si } c = 10)',
            note: 'Permet de détecter automatiquement toute erreur d’un chiffre ou toute inversion de deux chiffres adjacents.',
          },
          {
            name: 'Test de primalité par racine carrée',
            formula: 'n > 1 \\text{ composé} \\implies \\exists p \\text{ premier},\\quad p \\mid n \\text{ et } p \\leqslant \\sqrt{n}',
            note: 'Si aucun nombre premier ≤ √n ne divise n, alors n est garanti premier !',
          },
        ],
        keyRule:
          'Dans une division euclidienne dans $\\mathbb{Z}$, le reste $r$ est TOUJOURS positif ou nul et strictement inférieur à $|b|$ ($0 \\leqslant r < |b|$), même lorsque le dividende $a$ est négatif !',
        workedExample: {
          title: 'Primalité de $139$, clé ISBN-10 et divisibilité de deux entiers consécutifs',
          statement:
            '1) Vérifier que $139$ est premier. 2) Calculer la clé ISBN-10 associée aux 9 chiffres `0-901690-54`. 3) Montrer que deux entiers consécutifs $n$ et $n+1$ sont toujours premiers entre eux.',
          methodSteps: [
            '1) Comme $11^2 = 121 < 139 < 144 = 12^2$, on a $\\sqrt{139} \\approx 11{,}79$. Il suffit de tester les nombres premiers $\\leqslant 11$ : $2, 3, 5, 7, 11$.',
            '$139$ est impair ($2 \\nmid$), somme des chiffres $13$ ($3 \\nmid$), finit par $9$ ($5 \\nmid$), $139 = 7 \\times 19 + 6$ ($7 \\nmid$), $139 = 11 \\times 12 + 7$ ($11 \\nmid$). Aucun ne divise $139$, donc **$139$ est premier** !',
            '2) Somme pondérée $\\sum_{i=1}^9 i a_i = 1(0) + 2(9) + 3(0) + 4(1) + 5(6) + 6(9) + 7(0) + 8(5) + 9(4) = 0 + 18 + 0 + 4 + 30 + 54 + 0 + 40 + 36 = 182$. Division par $11$ : $182 = 11 \\times 16 + 6$, donc la clé est **$c = 6$**.',
            '3) Si $d > 0$ divise à la fois $n$ et $n+1$, alors $d$ divise leur différence $(n + 1) - n = 1$, donc $d = 1$ : $n$ et $n + 1$ sont premiers entre eux.',
          ],
          conclusion:
            '$139$ est premier, la clé ISBN-10 est $6$, et $\\operatorname{pgcd}(n, n+1) = 1$ pour tout $n \\in \\mathbb{Z}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Divisibilité',
            stepTheme: 'blue',
            stepTitle: 'Divisibilité dans $\\mathbb{Z}$, $\\mathcal{D}(a)$, $b\\mathbb{Z}$ et combinaisons linéaires',
            paragraphText:
              'Dans $\\mathbb{Z}$, on travaille sans fractions : on dit que $b$ divise $a$ (noté $b \\mid a$) lorsqu’il existe un entier $q \\in \\mathbb{Z}$ tel que $a = bq$.\n' +
              '• **Ensembles associés** : $\\mathcal{D}(a)$ est l’ensemble des diviseurs de $a$ (positifs **et négatifs** : $\\mathcal{D}(6) = \\{-6, -3, -2, -1, 1, 2, 3, 6\\}$) ; $b\\mathbb{Z} = \\{bk \\mid k \\in \\mathbb{Z}\\}$ est l’ensemble des multiples de $b$. On a $b \\mid a \\iff a\\mathbb{Z} \\subset b\\mathbb{Z}$.\n' +
              '• **Cas extrêmes** : pour tout $a \\in \\mathbb{Z}$, $1 \\mid a$ et $a \\mid 0$ (car $0 = a \\times 0$) ; en revanche $0 \\mid a \\iff a = 0$ ! De plus, si $b \\mid a$ et $a \\neq 0$, alors $0 < |b| \\leqslant |a|$.\n' +
              '• **Combinaison linéaire** : si $c \\mid a$ et $c \\mid b$, alors $\\forall (u, v) \\in \\mathbb{Z}^2,\\ c \\mid (ua + vb)$ (en particulier $c \\mid a + b$ et $c \\mid a - b$).',
            formula: {
              name: 'Propriété fondamentale des combinaisons linéaires',
              formula: '(c \\mid a \\text{ et } c \\mid b) \\implies \\forall (u, v) \\in \\mathbb{Z}^2,\\ c \\mid (ua + vb)',
              note: 'Exemple : tout diviseur commun de 2n + 3 et n + 1 divise (2n + 3) − 2(n + 1) = 1, donc vaut ±1 !',
            },
            keyRule:
              'Ne confonds jamais le sens de la barre verticale : $3 \\mid 12$ signifie « $3$ divise $12$ » (vrai), tandis que $12 \\mid 3$ est FAUX ! Et $0$ est multiple de tout entier ($a \\mid 0$), mais $0$ ne divise que $0$.',
            konanTip:
              'Pour trouver les entiers $n$ tels que $(n + 1) \\mid (3n + 11)$, élimine $n$ par combinaison linéaire : comme $(n+1) \\mid (n+1)$, on a $(n+1) \\mid (3n + 11) - 3(n+1) = 8$, donc $n + 1 \\in \\mathcal{D}(8) = \\{\\pm 1, \\pm 2, \\pm 4, \\pm 8\\}$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Pour quels entiers relatifs $a \\in \\mathbb{Z}$ l’affirmation « $0 \\mid a$ » est-elle vraie ?',
              options: [
                'Pour tout entier $a \\in \\mathbb{Z}$',
                'Pour tout entier $a \\neq 0$',
                'Uniquement pour $a = 0$',
                'Pour aucun entier $a$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Par définition, $0 \\mid a \\iff \\exists q \\in \\mathbb{Z},\\ a = 0 \\times q = 0 \\iff a = 0$. À l’inverse, $a \\mid 0$ est vraie pour tout $a \\in \\mathbb{Z}$ (avec $q = 0$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Critères rapides',
            stepTheme: 'green',
            stepTitle: 'Critères usuels de divisibilité (2, 3, 4, 5, 6, 8, 9, 11, 12)',
            paragraphText:
              'Avant de lancer une factorisation ou un test de primalité sans calculatrice, les critères de divisibilité permettent d’éliminer instantanément les petits facteurs premiers.\n' +
              '• **Puissances de $2$ et $5$** : par $2$ (dernier chiffre pair), par $4$ (2 derniers chiffres divisibles par $4$), par $8$ (3 derniers chiffres divisibles par $8$), par $5$ (dernier chiffre $0$ ou $5$), par $10$ (dernier chiffre $0$).\n' +
              '• **Par $3$ et $9$** : la somme des chiffres est divisible par $3$ (resp. par $9$).\n' +
              '• **Par $11$** : la somme **alternée** des chiffres ($c_0 - c_1 + c_2 - c_3 + \\cdots$) est divisible par $11$.\n' +
              '• **Critères composés (facteurs premiers entre eux)** : divisible par $6 \\iff$ par $2$ et $3$ ; par $12 \\iff$ par $3$ et $4$ (attention : PAS « par $2$ et $6$ » car $\\operatorname{pgcd}(2,6) = 2 \\neq 1$ : $18$ est divisible par $2$ et $6$ mais pas par $12$ !).',
            formula: {
              name: 'Combinaison de critères (corollaire de Gauss)',
              formula: '(a \\mid n,\\ b \\mid n \\text{ et } \\operatorname{pgcd}(a, b) = 1) \\implies ab \\mid n',
              note: 'Exemples : 12 = 3 × 4 (pgcd = 1) ; 15 = 3 × 5 ; 36 = 4 × 9 ; 45 = 5 × 9.',
            },
            keyRule:
              'Tu ne peux combiner deux critères de divisibilité ($a \\mid n$ et $b \\mid n \\implies ab \\mid n$) **QUE** lorsque $a$ et $b$ sont **premiers entre eux** ($\\operatorname{pgcd}(a, b) = 1$) !',
            konanTip:
              'Teste rapidement $302\\,328$ : ses 3 derniers chiffres $328 = 8 \\times 41$ (donc divisible par $2, 4, 8$), somme des chiffres $3+0+2+3+2+8 = 18$ (divisible par $3$ et $9$), donc aussi par $6, 12, 18, 24, 36, 72$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Sans calculatrice, parmi les nombres suivants, lequel est divisible par **$12$** ?',
              options: [
                '$17\\,661$',
                '$13\\,110$',
                '$156\\,009$',
                '$302\\,328$',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Un entier est divisible par $12$ ssi il est divisible par $3$ et par $4$. Pour $302\\,328$, la somme des chiffres vaut $3+0+2+3+2+8 = 18$ (multiple de $3$) et les 2 derniers chiffres forment $28 = 4 \\times 7$ (multiple de $4$). $17\\,661$ et $156\\,009$ sont impairs ; $13\\,110$ finit par $10$, non multiple de $4$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Division dans ℤ',
            stepTheme: 'orange',
            stepTitle: 'Division euclidienne dans $\\mathbb{Z}$ : le piège des dividendes négatifs',
            paragraphText:
              'La division euclidienne dans $\\mathbb{Z}$ généralise celle de l’école primaire aux entiers négatifs, avec une contrainte non négociable : **le reste $r$ doit impérativement vérifier $0 \\leqslant r < |b|$**.\n' +
              '• **Théorème** : pour tout $(a, b) \\in \\mathbb{Z} \\times \\mathbb{Z}^*$, il existe un **unique** couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ et $0 \\leqslant r < |b|$. En particulier, $b \\mid a \\iff r = 0$.\n' +
              '• **Piège des négatifs** : effectuons la division euclidienne de $a = -23$ par $b = 5$. Écrire $-23 = 5 \\times (-4) - 3$ est **FAUX** pour la division euclidienne car $r = -3 < 0$ ! Il faut descendre le quotient d’une unité : $-23 = 5 \\times (-5) + 2$, donc $q = -5$ et $r = 2 \\in [0, 5[$ !\n' +
              '• **Diviseur négatif** : pour $a = -23$ et $b = -5$, on a $|b| = 5$, donc $-23 = (-5) \\times 5 + 2$ ($q = 5, r = 2$).',
            formula: {
              name: 'Lien avec la partie entière (pour b > 0)',
              formula: 'q = E\\left(\\frac{a}{b}\\right) \\quad \\text{et} \\quad r = a - b \\cdot E\\left(\\frac{a}{b}\\right) \\in \\{0, 1, \\dots, b - 1\\}',
              note: 'En Python, -23 // 5 renvoie -5 et -23 % 5 renvoie +2 (conforme aux maths) ; attention en C/Java où % peut renvoyer un reste négatif !',
            },
            keyRule:
              'Vérifie TOUJOURS les deux conditions après ta division euclidienne : (1) $a = bq + r$, ET (2) **$0 \\leqslant r < |b|$** !',
            konanTip:
              'Si tu trouves un reste négatif $r’ < 0$ avec $b > 0$, ajoute $b$ au reste et retire $1$ au quotient : $b q’ + r’ = b(q’ - 1) + (r’ + b)$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Quel est le couple $(q, r)$ (quotient et reste) de la division euclidienne de $a = -37$ par $b = 6$ dans $\\mathbb{Z}$ ?',
              options: [
                '$q = -6$ et $r = -1$',
                '$q = -7$ et $r = 5$',
                '$q = -6$ et $r = 1$',
                '$q = 7$ et $r = -5$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On cherche $q \\in \\mathbb{Z}$ et $r \\in \\{0, 1, 2, 3, 4, 5\\}$ tels que $-37 = 6q + r$. Comme $6 \\times (-7) = -42$ et $-42 + 5 = -37$, on obtient $q = -7$ et $r = 5$ (tandis que $q = -6$ donne un reste négatif $-1$, interdit).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Codage ISBN-10',
            stepTheme: 'slate',
            stepTitle: 'Application numérique : calcul et contrôle de la clé d’un numéro ISBN-10',
            paragraphText:
              'Tout livre publié porte un identifiant normalisé ISBN qui intègre un **chiffre de contrôle** (checksum) calculé par division euclidienne afin de détecter instantanément les fautes de frappe lors d’une commande en ligne ou d’un scan de code-barres.\n' +
              '• **Algorithme ISBN-10** : à partir des $9$ premiers chiffres $a_1, a_2, \\dots, a_9$ (zone linguistique, éditeur, ouvrage), on calcule la somme pondérée $S = \\sum_{i=1}^9 i \\cdot a_i$. La clé $c$ (10e caractère) est le **reste de la division euclidienne de $S$ par $11$** (si $c = 10$, on écrit la lettre romaine `X`).\n' +
              '• **Pourquoi le diviseur $11$ (nombre premier) ?** Parce que $11$ étant premier, toute erreur sur un seul chiffre $a_k \\mapsto a_k’$ modifie $S$ de $k(a_k’ - a_k) \\not\\equiv 0 \\pmod{11}$, et toute transposition de deux chiffres voisins $a_k, a_{k+1}$ modifie $S$ de $a_k - a_{k+1} \\not\\equiv 0 \\pmod{11}$ : **100% des fautes simples et inversions sont détectées** !\n' +
              '• **Exemple** : pour `2-10-054321`, $S = 1(2)+2(1)+3(0)+4(0)+5(5)+6(4)+7(3)+8(2)+9(1) = 99 = 11 \\times 9 + 0$, donc la clé est $0$.',
            formula: {
              name: 'Clé ISBN-10 par reste modulo 11',
              formula: 'S = \\sum_{i=1}^{9} i \\cdot a_i = 11q + c, \\qquad 0 \\leqslant c \\leqslant 10 \\ (c = 10 \\mapsto \\text{X})',
              note: 'Le même principe arithmétique sécurise les clés RIB (mod 97) et les numéros de cartes bancaires (algorithme de Luhn, mod 10).',
            },
            keyRule:
              'Un numéro ISBN-10 est valide si et seulement si le reste de la division euclidienne de $\\sum_{i=1}^9 i a_i$ par $11$ coïncide avec sa clé $c$ (avec `X` valant $10$).',
            konanTip:
              'Pour simplifier le calcul mental de $S \\bmod 11$, tu peux remplacer chaque produit $i a_i$ par son reste modulo $11$ au fur et à mesure, sans jamais manipuler de grands nombres !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Les $9$ premiers chiffres d’un numéro ISBN-10 donnent une somme pondérée $\\sum_{i=1}^{9} i a_i = 208$. Quelle est la clé (10e caractère) de cet ISBN-10 ?',
              options: ['$9$', '$10$ (noté `X`)', '$0$', '$8$'],
              correctAnswerIndex: 1,
              explanation:
                'Effectuons la division euclidienne de $208$ par $11$ : $11 \\times 18 = 198$, donc $208 = 11 \\times 18 + 10$. Le reste vaut $c = 10$, qui se code par le caractère `X` dans la norme ISBN-10.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Nombres premiers',
            stepTheme: 'violet',
            stepTitle: 'Nombres premiers, test de primalité en $\\sqrt{n}$ et nombres de Mersenne',
            paragraphText:
              'Les nombres premiers sont les « atomes » multiplicatifs de $\\mathbb{Z}$ : tout entier supérieur ou égal à $2$ est soit premier, soit composé (produit de nombres premiers plus petits).\n' +
              '• **Définition** : $p \\in \\mathbb{N}$ est premier ssi $p > 1$ et ses seuls diviseurs positifs sont $1$ et $p$. (Attention : **$1$ n’est PAS premier**, car il n’a qu’un seul diviseur positif, et cela briserait l’unicité de la factorisation !)\n' +
              '• **Critère d’arrêt en $\\sqrt{n}$** : si $n > 1$ est composé, son plus petit diviseur strict $d > 1$ est nécessairement premier et vérifie $d \\leqslant \\sqrt{n}$ (sinon $n = d \\cdot d’$ avec $d’ \\geqslant d > \\sqrt{n} \\implies n > n$, absurde). Pour tester $197$, comme $\\sqrt{197} < 15$, il suffit de tester $2, 3, 5, 7, 11, 13$ !\n' +
              '• **Infinité et Mersenne** : Euclide a prouvé qu’il existe une infinité de nombres premiers. De plus, si $2^p - 1$ est premier (nombre de Mersenne), alors $p$ est nécessairement premier (car $2^a - 1 \\mid 2^{ab} - 1$).',
            formula: {
              name: 'Identité des nombres de Mersenne',
              formula: '2^{ab} - 1 = (2^a - 1)\\big(1 + 2^a + 2^{2a} + \\cdots + 2^{(b-1)a}\\big) \\implies (2^a - 1) \\mid (2^{ab} - 1)',
              note: 'Par contraposée : si 2ᵖ − 1 est premier, alors p est premier (réciproque fausse : 2¹¹ − 1 = 2047 = 23 × 89).',
            },
            keyRule:
              '$1$ n’est PAS un nombre premier ! Le plus petit nombre premier est $2$, et c’est aussi le **seul** nombre premier pair.',
            konanTip:
              'Pour tester la primalité d’un entier $n \\leqslant 200$, garde en tête la liste des premiers $\\leqslant 13$ : $2, 3, 5, 7, 11, 13$. Six petits tests suffisent !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Pour déterminer si $n = 211$ est un nombre premier, jusqu’à quel nombre premier suffit-il de tester la divisibilité de $211$ ?',
              options: [
                'Jusqu’à $11$',
                'Jusqu’à $13$ (car $13 < \\sqrt{211} < 15$)',
                'Jusqu’à $17$',
                'Jusqu’à $105$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $14^2 = 196 < 211 < 225 = 15^2$, donc $\\sqrt{211} \\approx 14{,}53$. Les nombres premiers $\\leqslant 14{,}53$ sont $2, 3, 5, 7, 11, 13$. Aucun ne divise $211$, donc $211$ est premier.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Factorisation unique',
            stepTheme: 'violet',
            stepTitle: 'Théorème fondamental de l’arithmétique et nombre de diviseurs',
            paragraphText:
              'Tout entier naturel $n \\geqslant 2$ possède une « carte d’identité » multiplicative absolument unique : sa décomposition en facteurs premiers.\n' +
              '• **Théorème** : tout entier $n \\geqslant 2$ s’écrit de manière **unique** (à l’ordre des facteurs près) sous la forme $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_r^{\\alpha_r}$ où $p_1 < p_2 < \\cdots < p_r$ sont premiers et $\\alpha_i \\in \\mathbb{N}^*$.\n' +
              '• **Piège de rédaction** : écrire $300 = 5^2 \\times 3 \\times 4$ n’est **pas** une décomposition en facteurs premiers car $4 = 2^2$ n’est pas premier ! La bonne écriture est $300 = 2^2 \\times 3^1 \\times 5^2$.\n' +
              '• **Nombre de diviseurs positifs** : un diviseur positif de $n$ est de la forme $p_1^{\\beta_1} \\cdots p_r^{\\beta_r}$ avec $0 \\leqslant \\beta_i \\leqslant \\alpha_i$ (soit $\\alpha_i + 1$ choix pour chaque exposant). Donc $n$ possède exactement $\\tau(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\cdots (\\alpha_r + 1)$ diviseurs positifs ! Pour $360 = 2^3 \\times 3^2 \\times 5^1$, cela fait $(3+1)(2+1)(1+1) = 24$ diviseurs positifs.',
            formula: {
              name: 'Décomposition unique et formule du nombre de diviseurs positifs',
              formula: 'n = \\prod_{i=1}^{r} p_i^{\\alpha_i} \\implies |\\mathcal{D}^+(n)| = \\prod_{i=1}^{r} (\\alpha_i + 1)',
              note: 'Un entier n est un carré parfait si et seulement si tous ses exposants αᵢ sont pairs !',
            },
            keyRule:
              'Vérifie toujours que **chaque base** de ta décomposition est bien un nombre **premier** ($2, 3, 5, 7, 11, \\dots$) avant de calculer un PGCD, un PPCM ou un nombre de diviseurs !',
            konanTip:
              'Pour factoriser rapidement un nombre se terminant par des zéros comme $15\\,200$, sépare d’abord les $10 = 2 \\times 5$ : $15\\,200 = 152 \\times 10^2 = (8 \\times 19) \\times 2^2 \\times 5^2 = 2^5 \\times 5^2 \\times 19$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle est la décomposition en facteurs premiers de $360$, et combien $360$ possède-t-il de diviseurs positifs ?',
              options: [
                '$360 = 2^2 \\times 3^2 \\times 10$ ; $18$ diviseurs positifs',
                '$360 = 2^3 \\times 3^2 \\times 5$ ; $24$ diviseurs positifs',
                '$360 = 2^3 \\times 3 \\times 5^2$ ; $24$ diviseurs positifs',
                '$360 = 2^3 \\times 3^2 \\times 5$ ; $6$ diviseurs positifs',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$360 = 36 \\times 10 = (2^2 \\times 3^2) \\times (2 \\times 5) = 2^3 \\times 3^2 \\times 5^1$. Le nombre de diviseurs positifs vaut $(3 + 1)(2 + 1)(1 + 1) = 4 \\times 3 \\times 2 = 24$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch2_p2',
        order: 2,
        title: 'PGCD, PPCM, algorithme d’Euclide étendu, Bézout et lemme de Gauss',
        summary:
          'Calculer $\\operatorname{pgcd}(a, b)$ par Euclide ou décomposition, déterminer les coefficients de Bézout par remontée, démontrer et appliquer le lemme de Gauss et relier PGCD et PPCM.',
        conceptExplanation:
          'L’algorithme d’Euclide (plus de 2 300 ans !) est l’un des algorithmes les plus rapides jamais inventés : il calcule le PGCD de nombres de plusieurs centaines de chiffres en une fraction de milliseconde et fonde tout le chiffrement RSA.\n\n' +
          '• **PGCD et invariance d’Euclide** : $\\operatorname{pgcd}(a, b)$ est le plus grand entier naturel divisant à la fois $a$ et $b$. Si $a = bq + r$, alors **$\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, r)$** : le PGCD est le **dernier reste non nul** des divisions successives.\n' +
          '• **Identité et théorème de Bézout** : $d = \\operatorname{pgcd}(a, b)$ implique $\\exists (u, v) \\in \\mathbb{Z}^2,\\ au + bv = d$ (trouvés par **remontée** de l’algorithme d’Euclide). En particulier, $\\operatorname{pgcd}(a, b) = 1 \\iff \\exists (u, v) \\in \\mathbb{Z}^2,\\ au + bv = 1$.\n' +
          '• **Lemme de Gauss** : si $a \\mid bc$ et $\\operatorname{pgcd}(a, b) = 1$, alors **$a \\mid c$** (se démontre en deux lignes via Bézout : $au + bv = 1 \\implies acu + bcv = c$).\n' +
          '• **PPCM** : $\\operatorname{pgcd}(a, b) \\times \\operatorname{ppcm}(a, b) = |ab|$ ; via la décomposition en facteurs premiers, le PGCD prend le $\\min$ des exposants et le PPCM prend le $\\max$ des exposants.',
        formulas: [
          {
            name: 'Théorème de Bézout (caractérisation de la primalité entre eux)',
            formula: '\\operatorname{pgcd}(a, b) = 1 \\iff \\exists (u, v) \\in \\mathbb{Z}^2,\\quad au + bv = 1',
            note: 'Attention : si au + bv = d (d > 1), on sait seulement que pgcd(a, b) DIVISE d (pas forcément égal à d) !',
          },
          {
            name: 'Lemme de Gauss',
            formula: '\\big(a \\mid bc \\text{ et } \\operatorname{pgcd}(a, b) = 1\\big) \\implies a \\mid c',
            note: 'Sans pgcd(a, b) = 1, c’est faux : 6 | 4 × 3 = 12, mais 6 ne divise ni 4 ni 3 !',
          },
          {
            name: 'Relation fondamentale PGCD × PPCM',
            formula: '\\operatorname{pgcd}(a, b) \\times \\operatorname{ppcm}(a, b) = |ab|',
            note: 'Pour tout c ∈ ℤ*, pgcd(ca, cb) = |c| · pgcd(a, b) et ppcm(ca, cb) = |c| · ppcm(a, b).',
          },
        ],
        keyRule:
          'Piège subtil de Bézout : $au + bv = 1$ garantit $\\operatorname{pgcd}(a, b) = 1$, MAIS $au + bv = 6$ ne garantit PAS $\\operatorname{pgcd}(a, b) = 6$ — cela prouve seulement que $\\operatorname{pgcd}(a, b) \\mid 6$ (ex : $2(1) + 4(1) = 6$, pourtant $\\operatorname{pgcd}(2, 4) = 2$) !',
        workedExample: {
          title: 'Algorithme d’Euclide étendu pour $a = 1\\,111\\,111\\,111$ et $b = 123\\,456\\,789$',
          statement:
            'Soient $a = 1\\,111\\,111\\,111$ et $b = 123\\,456\\,789$. Calculer $\\operatorname{pgcd}(a, b)$ et un couple de coefficients de Bézout $(u, v)$ tel que $au + bv = \\operatorname{pgcd}(a, b)$.',
          methodSteps: [
            '1) Division de $a$ par $b$ : remarquons que $9 \\times 123\\,456\\,789 = 1\\,111\\,111\\,101$. Donc $a = 9b + 10$ !',
            '2) Division de $b = 123\\,456\\,789$ par $10$ : $123\\,456\\,789 = 10 \\times 12\\,345\\,678 + 9$.',
            '3) Division de $10$ par $9$ : $10 = 9 \\times 1 + 1$, puis $9 = 1 \\times 9 + 0$. Le dernier reste non nul est $1$, donc $\\operatorname{pgcd}(a, b) = 1$ !',
            '4) Remontée de Bézout : $1 = 10 - 9 = 10 - (b - 12\\,345\\,678 \\times 10) = 12\\,345\\,679 \\times 10 - b = 12\\,345\\,679(a - 9b) - b = 12\\,345\\,679 a - 111\\,111\\,112 b$.',
          ],
          conclusion:
            '$\\operatorname{pgcd}(a, b) = 1$, avec $u = 12\\,345\\,679$ et $v = -111\\,111\\,112$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'PGCD',
            stepTheme: 'blue',
            stepTitle: 'Définition, propriétés élémentaires du PGCD et entiers premiers entre eux',
            paragraphText:
              'Le plus grand commun diviseur $\\operatorname{pgcd}(a, b)$ (noté aussi $a \\wedge b$) capture toute la partie multiplicative partagée par deux entiers $a$ et $b$ non tous deux nuls.\n' +
              '• **Propriétés algébriques** : $\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, a) = \\operatorname{pgcd}(|a|, |b|)$ ; $\\operatorname{pgcd}(1, a) = 1$ ; $\\operatorname{pgcd}(0, a) = |a|$ (pour $a \\neq 0$) ; $\\operatorname{pgcd}(ca, cb) = |c|\\operatorname{pgcd}(a, b)$.\n' +
              '• **Caractérisation des diviseurs communs** : un entier $c$ divise à la fois $a$ et $b$ si et seulement si $c \\mid \\operatorname{pgcd}(a, b)$ !\n' +
              '• **Entiers premiers entre eux** : $a$ et $b$ sont premiers entre eux ssi $\\operatorname{pgcd}(a, b) = 1$ (exemple : $8$ et $15$ sont premiers entre eux bien qu’aucun des deux ne soit un nombre premier !).',
            formula: {
              name: 'Homogénéité et division par le PGCD',
              formula: 'd = \\operatorname{pgcd}(a, b) \\implies a = da’,\\ b = db’ \\text{ avec } \\operatorname{pgcd}(a’, b’) = 1',
              note: 'Diviser deux entiers par leur PGCD les rend toujours premiers entre eux (base de la simplification des fractions) !',
            },
            keyRule:
              'Ne confonds pas « nombres premiers » (propriété d’un seul nombre) et « premiers entre eux » (propriété d’un couple : $9$ et $16$ sont composés, mais $\\operatorname{pgcd}(9, 16) = 1$) !',
            konanTip:
              'Retiens $\\operatorname{pgcd}(0, a) = |a|$ (car tout diviseur de $a$ divise aussi $0$, donc le plus grand diviseur commun est $|a|$).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'Sachant que $\\operatorname{pgcd}(a, b) = 14$, que vaut $\\operatorname{pgcd}(5a, -5b)$ ?',
              options: ['$-70$', '$70$', '$14$', '$350$'],
              correctAnswerIndex: 1,
              explanation:
                'Le PGCD est toujours positif et homogène : $\\operatorname{pgcd}(5a, -5b) = \\operatorname{pgcd}(5a, 5b) = |5|\\operatorname{pgcd}(a, b) = 5 \\times 14 = 70$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Euclide',
            stepTheme: 'green',
            stepTitle: 'Principe de l’algorithme d’Euclide par divisions successives',
            paragraphText:
              'Factoriser des entiers de 100 chiffres est hors de portée des ordinateurs actuels, mais calculer leur PGCD par l’algorithme d’Euclide prend quelques microsecondes grâce à une invariance élémentaire !\n' +
              '• **Lemme d’Euclide** : si $a = bq + r$, alors les diviseurs communs de $(a, b)$ sont exactement ceux de $(b, r)$, donc **$\\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, r)$**.\n' +
              '• **Algorithme** : on remplace $(a, b)$ par $(b, r)$ et on recommence tant que le reste n’est pas nul. Comme $0 \\leqslant r_k < r_{k-1}$, la suite strictement décroissante d’entiers naturels atteint forcément $0$ en un nombre fini d’étapes.\n' +
              '• **Résultat** : $\\operatorname{pgcd}(a, b)$ est le **dernier reste non nul** (si dès la 1re division $r = 0$, alors $\\operatorname{pgcd}(a, b) = |b|$).',
            formula: {
              name: 'Invariance d’Euclide',
              formula: 'a = bq + r \\implies \\operatorname{pgcd}(a, b) = \\operatorname{pgcd}(b, r)',
              note: 'Complexité algorithmique : au plus O(log(min(a, b))) divisions (théorème de Lamé : au pire cas, les nombres de Fibonacci !).',
            },
            keyRule:
              'Le PGCD n’est jamais le dernier quotient, ni le reste nul $0$ : c’est toujours le **dernier reste NON nul** !',
            konanTip:
              'Garde soigneusement les quotients $q_i$ à chaque ligne de ton tableau d’Euclide : tu vas en avoir besoin immédiatement si la question suivante demande les coefficients de Bézout !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'On applique l’algorithme d’Euclide à $a = 252$ et $b = 105$ : $252 = 105 \\times 2 + 42$, puis $105 = 42 \\times 2 + 21$, puis $42 = 21 \\times 2 + 0$. Que vaut $\\operatorname{pgcd}(252, 105)$ ?',
              options: ['$0$', '$2$', '$21$', '$42$'],
              correctAnswerIndex: 2,
              explanation:
                'Le dernier reste non nul de la chaîne de divisions euclidiennes est $21$, donc $\\operatorname{pgcd}(252, 105) = 21$. Vérification : $252 = 21 \\times 12$ et $105 = 21 \\times 5$ avec $\\operatorname{pgcd}(12, 5) = 1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Euclide étendu',
            stepTheme: 'green',
            stepTitle: 'Remontée de l’algorithme d’Euclide pour trouver les coefficients de Bézout',
            paragraphText:
              'Une fois le PGCD $d$ obtenu par descente d’Euclide, il suffit de « remonter » les égalités de bas en haut en exprimant chaque reste en fonction des deux précédents pour écrire $d = au + bv$.\n' +
              '• **Exemple complet ($a = 621, b = 405$)** :\n' +
              '  1. Descente : $621 = 405(1) + 216$ ; $405 = 216(1) + 189$ ; $216 = 189(1) + 27$ ; $189 = 27(7) + 0 \\implies d = 27$.\n' +
              '  2. Remontée : $27 = 216 - 189$. On remplace $189$ par $405 - 216$ : $27 = 216 - (405 - 216) = 2 \\times 216 - 405$.\n' +
              '  3. On remplace $216$ par $621 - 405$ : $27 = 2(621 - 405) - 405 = 2 \\times 621 - 3 \\times 405$ !\n' +
              '• **Vérification obligatoire** : $2 \\times 621 - 3 \\times 405 = 1242 - 1215 = 27$. Exact !',
            formula: {
              name: 'Identité de Bézout obtenue pour (621, 405)',
              formula: '2 \\times 621 + (-3) \\times 405 = 27 = \\operatorname{pgcd}(621, 405)',
              note: 'Les coefficients (u, v) ne sont PAS uniques : (u + kb/d, v − ka/d) conviennent pour tout k ∈ ℤ.',
            },
            keyRule:
              'Pendant la remontée, ne calcule JAMAIS les produits comme $2 \\times 216 = 432$ ! Garde les nombres $621, 405, 216, 189$ sous forme symbolique (comme des variables) pour regrouper leurs coefficients sans erreur !',
            konanTip:
              'Fais systématiquement la multiplication finale $au + bv$ à la fin de ta remontée : si tu retombes sur $d$, tu as **100% de certitude** qu’il n’y a aucune erreur de signe !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Algorithme d’Euclide étendu (descente et remontée) pour (621, 405)',
              caption: 'Descente (gauche → bas) jusqu’au dernier reste non nul 27, puis remontée (bas → haut) pour isoler 2×621 − 3×405 = 27.',
              tableData: {
                headers: ['Étape', 'Descente (Division euclidienne)', 'Reste isolé', 'Remontée (Substitution vers 621 et 405)'],
                rows: [
                  ['1', '621 = 405 × 1 + 216', '216 = 621 − 405', '27 = 2(621 − 405) − 405 = 2×621 − 3×405'],
                  ['2', '405 = 216 × 1 + 189', '189 = 405 − 216', '27 = 216 − (405 − 216) = 2×216 − 405'],
                  ['3', '216 = 189 × 1 + 27', '27 = 216 − 189', 'Départ : 27 = 216 − 189'],
                  ['4', '189 = 27 × 7 + 0', 'r = 0 (arrêt)', 'PGCD = 27  ⇒  (u, v) = (2, −3)'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Pour $a = 23$ et $b = 10$, quel couple $(u, v)$ est un couple de coefficients de Bézout vérifiant $23u + 10v = 1$ ?',
              options: [
                '$(u, v) = (3, -7)$',
                '$(u, v) = (-3, 7)$',
                '$(u, v) = (7, -3)$',
                '$(u, v) = (-7, 3)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Euclide : $23 = 10 \\times 2 + 3$, puis $10 = 3 \\times 3 + 1$. Remontée : $1 = 10 - 3 \\times 3 = 10 - 3(23 - 2 \\times 10) = -3 \\times 23 + 7 \\times 10$. Vérification : $23(-3) + 10(7) = -69 + 70 = 1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bézout',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Bézout et preuve rapide de primalité entre eux',
            paragraphText:
              'Le théorème de Bézout offre une caractérisation algébrique instantanée du fait que deux entiers sont premiers entre eux, sans même avoir à factoriser ni à lancer l’algorithme d’Euclide.\n' +
              '• **Énoncé** : $\\operatorname{pgcd}(a, b) = 1 \\iff \\exists (u, v) \\in \\mathbb{Z}^2,\\ au + bv = 1$.\n' +
              '• **Usage express pour des expressions en $n$** : montrer que $2n + 1$ et $3n + 1$ sont premiers entre eux pour tout $n \\in \\mathbb{Z}$. Il suffit d’éliminer $n$ par une combinaison linéaire qui donne $1$ : **$3(2n + 1) - 2(3n + 1) = 6n + 3 - 6n - 2 = 1$** ! Par Bézout, $\\operatorname{pgcd}(2n + 1, 3n + 1) = 1$ en une seule ligne !\n' +
              '• **Attention pour $d > 1$** : si $d \\geqslant 1$ est **déjà** un diviseur commun de $a$ et $b$, alors $d = \\operatorname{pgcd}(a, b) \\iff \\exists (u, v) \\in \\mathbb{Z}^2,\\ au + bv = d$.',
            formula: {
              name: 'Équivalence de Bézout pour un diviseur commun d',
              formula: '(d \\mid a,\\ d \\mid b,\\ d \\geqslant 1) \\implies \\big(d = \\operatorname{pgcd}(a, b) \\iff \\exists (u, v) \\in \\mathbb{Z}^2,\\ au + bv = d\\big)',
              note: 'Si l’on ne vérifie pas que d divise a et b, l’existence de au + bv = d prouve seulement pgcd(a, b) | d !',
            },
            keyRule:
              'Pour prouver que deux polynômes en $n$ sont premiers entre eux pour tout $n \\in \\mathbb{Z}$, cherche deux petits entiers $u, v$ qui éliminent $n$ et donnent $1$ (ou $-1$), puis cite le théorème de Bézout !',
            konanTip:
              'Si ta combinaison linéaire donne $2$ au lieu de $1$ (par ex : $3(2n+1) - 2(3n+2) = -1$ donne $1$, mais $2(n+1) - (2n) = 2$), tu sais que le PGCD divise $2$, donc vaut $1$ ou $2$ (selon la parité de $n$) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'On sait que deux entiers $a$ et $b$ vérifient $5a - 3b = 2$. Que peut-on affirmer avec certitude sur $d = \\operatorname{pgcd}(a, b)$ ?',
              options: [
                '$d = 2$ obligatoirement',
                '$d = 1$ obligatoirement',
                '$d \\mid 2$, donc $d = 1$ ou $d = 2$',
                'On ne peut rien dire sur $d$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme $d \\mid a$ et $d \\mid b$, $d$ divise toute combinaison linéaire $5a - 3b = 2$. Les diviseurs positifs de $2$ étant $1$ et $2$, on a $d \\in \\{1, 2\}$. Par exemple $(a, b) = (1, 1)$ donne $5 - 3 = 2$ avec $d = 1$, tandis que $(a, b) = (2, 2)$ donne $10 - 6 = 4$ — ou $(a, b) = (4, 6)$ donne $20 - 18 = 2$ avec $d = 2$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Lemme de Gauss',
            stepTheme: 'violet',
            stepTitle: 'Lemme de Gauss : démonstration par Bézout et conséquences clés',
            paragraphText:
              'Le lemme de Gauss est le moteur qui permet de résoudre toutes les équations diophantiennes et de démontrer l’unicité de la décomposition en facteurs premiers.\n' +
              '• **Énoncé** : soient $(a, b, c) \\in \\mathbb{Z}^3$. Si $a \\mid bc$ et $\\operatorname{pgcd}(a, b) = 1$, alors **$a \\mid c$**.\n' +
              '• **Démonstration en 3 lignes** : puisque $\\operatorname{pgcd}(a, b) = 1$, par Bézout il existe $(u, v) \\in \\mathbb{Z}^2$ tels que $au + bv = 1$. En multipliant par $c$, on obtient $acu + bcv = c$. Or $a \\mid acu$ et $a \\mid bc \\implies a \\mid bcv$, donc $a \\mid (acu + bcv) = c$ !\n' +
              '• **Lemme d’Euclide (corollaire)** : si un nombre **premier** $p$ divise un produit $bc$, alors $p \\mid b$ ou $p \\mid c$ (car si $p \\nmid b$, alors $\\operatorname{pgcd}(p, b) = 1$, donc $p \\mid c$ par Gauss).',
            formula: {
              name: 'Lemme de Gauss et corollaire des produits',
              formula: '(a \\mid bc \\text{ et } \\operatorname{pgcd}(a, b) = 1) \\implies a \\mid c ; \\qquad (a \\mid n,\\ b \\mid n,\\ \\operatorname{pgcd}(a, b) = 1) \\implies ab \\mid n',
              note: 'Aussi : si pgcd(a, b) = 1 et pgcd(a, c) = 1, alors pgcd(a, bc) = 1.',
            },
            keyRule:
              'Ne JAMAIS appliquer le lemme de Gauss sans avoir d’abord écrit et justifié explicitement que **$\\operatorname{pgcd}(a, b) = 1$** !',
            konanTip:
              'Dans la résolution d’une équation diophantienne, tu arriveras toujours à une ligne du type $7(x - x_0) = 16(y_0 - y)$ : c’est là que tu cites « $7 \\mid 16(y_0 - y)$ et $\\operatorname{pgcd}(7, 16) = 1$, donc par le lemme de Gauss, $7 \\mid (y_0 - y)$ » !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Soient $x, y \\in \\mathbb{Z}$ vérifiant $9x = 14y$. Que permet de conclure immédiatement le lemme de Gauss ?',
              options: [
                '$x = 14$ et $y = 9$',
                '$9 \\mid y$ et $14 \\mid x$ (car $\\operatorname{pgcd}(9, 14) = 1$)',
                '$9 \\mid x$ et $14 \\mid y$',
                'Aucune conclusion car $9$ et $14$ ne sont pas premiers',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $9 = 3^2$ et $14 = 2 \\times 7$, on a $\\operatorname{pgcd}(9, 14) = 1$ (nul besoin qu’ils soient premiers individuellement !). De $9 \\mid 14y$ et $\\operatorname{pgcd}(9, 14) = 1$, Gauss donne $9 \\mid y$ ; symétriquement $14 \\mid x$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'PPCM',
            stepTheme: 'violet',
            stepTitle: 'PPCM et relation fondamentale $\\operatorname{pgcd}(a, b) \\times \\operatorname{ppcm}(a, b) = |ab|$',
            paragraphText:
              'Tandis que le PGCD sert à découper au plus grand pas commun (simplification de fractions, pavage), le plus petit commun multiple $\\operatorname{ppcm}(a, b)$ sert à synchroniser des cycles périodiques (tâches cron informatiques, échéances financières, engrenages).\n' +
              '• **Définition** : pour $a, b \\in \\mathbb{Z}^*$, $\\operatorname{ppcm}(a, b)$ (noté aussi $a \\vee b$) est le plus petit entier **strictement positif** qui soit multiple à la fois de $a$ et de $b$. Tout multiple commun de $a$ et $b$ est un multiple de $\\operatorname{ppcm}(a, b)$.\n' +
              '• **Relation fondamentale** : $\\operatorname{pgcd}(a, b) \\times \\operatorname{ppcm}(a, b) = |ab|$. Si $a$ et $b$ sont premiers entre eux, alors $\\operatorname{ppcm}(a, b) = |ab|$.\n' +
              '• **Application pratique** : deux sauvegardes serveur tournent respectivement tous les $18$ jours et tous les $24$ jours. Comme $\\operatorname{pgcd}(18, 24) = 6$, elles se déclencheront à nouveau ensemble tous les $\\operatorname{ppcm}(18, 24) = \\frac{18 \\times 24}{6} = 72$ jours.',
            formula: {
              name: 'Calcul du PPCM à partir du PGCD',
              formula: '\\operatorname{ppcm}(a, b) = \\frac{|ab|}{\\operatorname{pgcd}(a, b)}',
              note: 'Attention : cette formule produit ne se généralise PAS telle quelle à trois entiers (pgcd(a,b,c) × ppcm(a,b,c) ≠ |abc| en général) !',
            },
            keyRule:
              'Pour calculer rapidement $\\operatorname{ppcm}(a, b)$ sur de grands nombres sans factoriser, calcule d’abord $d = \\operatorname{pgcd}(a, b)$ par Euclide puis effectue $\\frac{|a|}{d} \\times |b|$ !',
            konanTip:
              'Divise d’abord $a$ par $d$ AVANT de multiplier par $b$ : cela garde des nombres plus petits et évite tout dépassement de calcul mental ou informatique (`overflow`) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Sachant que $\\operatorname{pgcd}(84, 126) = 42$, quelle est la valeur de $\\operatorname{ppcm}(84, 126)$ ?',
              options: ['$126$', '$252$', '$504$', '$420$'],
              correctAnswerIndex: 1,
              explanation:
                'Par la relation $\\operatorname{pgcd}(a, b) \\times \\operatorname{ppcm}(a, b) = |ab|$, on obtient $\\operatorname{ppcm}(84, 126) = \\frac{84}{42} \\times 126 = 2 \\times 126 = 252$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'methode',
            stepBadge: 'Exposants min/max',
            stepTheme: 'green',
            stepTitle: 'Calcul du PGCD et du PPCM par décomposition en facteurs premiers',
            paragraphText:
              'Lorsque la décomposition en facteurs premiers de deux entiers $a$ et $b$ est déjà connue, on lit instantanément leur PGCD et leur PPCM en comparant les exposants premier par premier !\n' +
              '• **Règle du PGCD (exposant $\\min$)** : si $a = \\prod p_i^{\\alpha_i}$ et $b = \\prod p_i^{\\beta_i}$ (avec $\\alpha_i, \\beta_i \\in \\mathbb{N}$), alors $\\operatorname{pgcd}(a, b) = \\prod p_i^{\\min(\\alpha_i, \\beta_i)}$ (on garde uniquement les facteurs **communs** avec le **plus petit** exposant).\n' +
              '• **Règle du PPCM (exposant $\\max$)** : $\\operatorname{ppcm}(a, b) = \\prod p_i^{\\max(\\alpha_i, \\beta_i)}$ (on prend **tous** les facteurs présents avec le **plus grand** exposant).\n' +
              '• **Exemple** : $126 = 2^1 \\times 3^2 \\times 7^1$ et $230 = 2^1 \\times 5^1 \\times 23^1$. Seul $2^1$ est commun, donc $\\operatorname{pgcd}(126, 230) = 2$, et $\\operatorname{ppcm}(126, 230) = 2 \\times 3^2 \\times 5 \\times 7 \\times 23 = 14\\,490$.',
            formula: {
              name: 'Formules par valuations p-adiques',
              formula: '\\operatorname{pgcd}(a, b) = \\prod_{p} p^{\\min(v_p(a),\\, v_p(b))}, \\qquad \\operatorname{ppcm}(a, b) = \\prod_{p} p^{\\max(v_p(a),\\, v_p(b))}',
              note: 'Comme min(α, β) + max(α, β) = α + β, cela redémontre immédiatement pgcd(a,b) × ppcm(a,b) = ab !',
            },
            keyRule:
              'Retiens l’inversion des mots : Plus **Grand** Commun Diviseur $\\implies$ exposant **MIN** ; Plus **Petit** Commun Multiple $\\implies$ exposant **MAX** !',
            konanTip:
              'Cette méthode par $\\min$ et $\\max$ des exposants a un énorme avantage : elle fonctionne aussi directement pour **3, 4 ou $k$ entiers** simultanément !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p2_q7',
              type: 'mcq',
              prompt:
                'Soient $a = 2^4 \\times 3^2 \\times 5$ et $b = 2^2 \\times 3^3 \\times 7$. Que valent $\\operatorname{pgcd}(a, b)$ et $\\operatorname{ppcm}(a, b)$ ?',
              options: [
                '$\\operatorname{pgcd} = 2^2 \\times 3^2$ et $\\operatorname{ppcm} = 2^4 \\times 3^3 \\times 5 \\times 7$',
                '$\\operatorname{pgcd} = 2^4 \\times 3^3$ et $\\operatorname{ppcm} = 2^2 \\times 3^2 \\times 5 \\times 7$',
                '$\\operatorname{pgcd} = 2^2 \\times 3^2 \\times 5 \\times 7$ et $\\operatorname{ppcm} = 2^4 \\times 3^3$',
                '$\\operatorname{pgcd} = 2 \\times 3$ et $\\operatorname{ppcm} = 2^6 \\times 3^5 \\times 5 \\times 7$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En écrivant les facteurs absents avec l’exposant $0$ ($a = 2^4 3^2 5^1 7^0$ et $b = 2^2 3^3 5^0 7^1$), on prend le $\\min$ pour le PGCD ($2^2 \\times 3^2 = 36$) et le $\\max$ pour le PPCM ($2^4 \\times 3^3 \\times 5 \\times 7 = 15\\,120$).',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_algebre_ch2_p3',
        order: 3,
        title: 'Équations diophantiennes linéaires ax + by = c',
        summary:
          'Tester l’existence de solutions entières, simplifier par le PGCD, trouver une solution particulière par Bézout, déterminer la famille complète des solutions par Gauss et traiter les contraintes de positivité.',
        conceptExplanation:
          'Une **équation diophantienne linéaire** est une équation $ax + by = c$ (avec $a, b, c \\in \\mathbb{Z}$) dont on cherche toutes les solutions **entières** $(x, y) \\in \\mathbb{Z}^2$ : répartition optimale de conteneurs, rendu de monnaie exact en billets, ou résolution de congruences.\n\n' +
          '• **Condition d’existence** : $(E) : ax + by = c$ possède des solutions dans $\\mathbb{Z}^2$ si et seulement si **$d = \\operatorname{pgcd}(a, b)$ divise $c$**.\n' +
          '• **Simplification** : si $d \\mid c$, on divise toute l’équation par $d$ pour obtenir $(E’) : a’x + b’y = c’$ avec $\\operatorname{pgcd}(a’, b’) = 1$.\n' +
          '• **Solution particulière $(x_0, y_0)$** : on trouve $(u, v)$ tel que $a’u + b’v = 1$ (par Euclide étendu ou observation évidente), puis on multiplie par $c’$ : $(x_0, y_0) = (c’u, c’v)$.\n' +
          '• **Famille générale des solutions** : par soustraction et lemme de Gauss, l’ensemble complet des solutions est $\\mathcal{S} = \\{(x_0 + k b’,\\ y_0 - k a’) \\mid k \\in \\mathbb{Z}\\}$ (ou de façon équivalente $(x_0 - k b’,\\ y_0 + k a’)$).',
        formulas: [
          {
            name: 'Condition d’existence et forme générale des solutions',
            formula: 'ax + by = c \\text{ résoluble dans } \\mathbb{Z}^2 \\iff d = \\operatorname{pgcd}(a, b) \\mid c',
            note: 'Si d | c, en posant a’ = a/d et b’ = b/d : (x, y) = (x₀ + k b’, y₀ − k a’), k ∈ ℤ.',
          },
          {
            name: 'Vérification de la réciproque (indispensable en rédaction !)',
            formula: 'a(x_0 + k b’) + b(y_0 - k a’) = (ax_0 + by_0) + k(ab’ - ba’) = c + k(da’b’ - db’a’) = c',
            note: 'Toujours vérifier la réciproque : le lemme de Gauss donne une condition nécessaire, la substitution prouve la suffisance.',
          },
        ],
        keyRule:
          'Ne JAMAIS oublier de diviser par $d = \\operatorname{pgcd}(a, b)$ avant d’écrire le pas de la famille de solutions : le pas sur $x$ est $b’ = \\frac{b}{d}$ (et NON $b$), et le pas sur $y$ est $-a’ = -\\frac{a}{d}$ (et NON $-a$) !',
        workedExample: {
          title: 'Résolution intégrale de $161x + 368y = 115$',
          statement:
            'Déterminer l’ensemble de tous les couples $(x, y) \\in \\mathbb{Z}^2$ solutions de $(E) : 161x + 368y = 115$.',
          methodSteps: [
            '1) PGCD : $368 = 161 \\times 2 + 46$ ; $161 = 46 \\times 3 + 23$ ; $46 = 23 \\times 2 + 0 \\implies d = \\operatorname{pgcd}(161, 368) = 23$. Comme $115 = 23 \\times 5$, $23 \\mid 115$ donc $(E)$ admet des solutions !',
            '2) Simplification par $23$ : $(E) \\iff 7x + 16y = 5$ (avec $\\operatorname{pgcd}(7, 16) = 1$).',
            '3) Solution particulière : par remontée d’Euclide (ou observation directe sur $7$ et $16$), $7 \\times 7 + 16 \\times (-3) = 49 - 48 = 1$. En multipliant par $5$, $(x_0, y_0) = (35, -15)$ vérifie $7(35) + 16(-15) = 245 - 240 = 5$ (on peut même choisir $(x_0, y_0) = (3, -1)$ car $7(3) + 16(-1) = 5$ !).',
            '4) Toutes les solutions : $7(x - 35) = -16(y + 15)$. Comme $\\operatorname{pgcd}(7, 16) = 1$, par le lemme de Gauss, $7 \\mid (y + 15)$, soit $y = -15 + 7k$ ($k \\in \\mathbb{Z}$), puis $x = 35 - 16k$. Réciproque vérifiée : $7(35 - 16k) + 16(-15 + 7k) = 5$.',
          ],
          conclusion:
            '$\\mathcal{S} = \\{(35 - 16k,\\ -15 + 7k) \\mid k \\in \\mathbb{Z}\\}$ (équivalent à $\\{(3 - 16m,\\ -1 + 7m) \\mid m \\in \\mathbb{Z}\\}$ en posant $m = k - 2$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Existence',
            stepTheme: 'violet',
            stepTitle: 'Condition nécessaire et suffisante d’existence : $\\operatorname{pgcd}(a, b) \\mid c$',
            paragraphText:
              'Avant de se lancer dans des calculs longs pour résoudre $ax + by = c$ dans $\\mathbb{Z}^2$, un test d’une seconde permet de savoir si des solutions entières existent.\n' +
              '• **Condition nécessaire** : si $d = \\operatorname{pgcd}(a, b)$ et s’il existe $(x, y) \\in \\mathbb{Z}^2$ tels que $ax + by = c$, alors comme $d \\mid a$ et $d \\mid b$, $d$ divise $ax + by = c$.\n' +
              '• **Condition suffisante** : réciproquement, si $c = k d$, par l’identité de Bézout il existe $(u, v)$ tels que $au + bv = d$, donc $a(ku) + b(kv) = kd = c$ : $(ku, kv)$ est une solution !\n' +
              '• **Exemple impossible** : $6x + 15y = 20$ n’a **aucune** solution entière car $\\operatorname{pgcd}(6, 15) = 3$ ne divise pas $20$ ($6x + 15y$ est toujours multiple de $3$).',
            formula: {
              name: 'Critère d’existence de solutions entières',
              formula: '\\exists (x, y) \\in \\mathbb{Z}^2,\\ ax + by = c \\iff \\operatorname{pgcd}(a, b) \\mid c',
              note: 'Dès que pgcd(a, b) | c, il existe en fait une INFINITÉ de solutions dans ℤ² !',
            },
            keyRule:
              'Première ligne de toute résolution diophantienne : calculer $d = \\operatorname{pgcd}(a, b)$ et vérifier si $d \\mid c$. Si $d \\nmid c$, conclus immédiatement $\\mathcal{S} = \\emptyset$ !',
            konanTip:
              'Si $a$ et $b$ sont tous les deux pairs et que $c$ est impair (ex : $14x + 8y = 51$), tu vois immédiatement sans aucun calcul que $\\mathcal{S} = \\emptyset$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Parmi les équations diophantiennes suivantes, laquelle possède des solutions dans $\\mathbb{Z}^2$ ?',
              options: [
                '$12x + 18y = 25$',
                '$14x - 21y = 35$',
                '$15x + 25y = 42$',
                '$8x + 12y = 14$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $14x - 21y = 35$, $\\operatorname{pgcd}(14, 21) = 7$ divise bien $35 = 7 \\times 5$. Pour les trois autres : $\\operatorname{pgcd}(12, 18) = 6 \\nmid 25$ ; $\\operatorname{pgcd}(15, 25) = 5 \\nmid 42$ ; $\\operatorname{pgcd}(8, 12) = 4 \\nmid 14$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Solution particulière',
            stepTheme: 'green',
            stepTitle: 'Simplifier par $d$ et trouver une solution particulière $(x_0, y_0)$',
            paragraphText:
              'Une fois vérifié que $d = \\operatorname{pgcd}(a, b)$ divise $c$, on simplifie l’équation par $d$ pour travailler avec les plus petits entiers possibles : $a’x + b’y = c’$ où $\\operatorname{pgcd}(a’, b’) = 1$.\n' +
              '• **Méthode 1 (Euclide étendu)** : toujours infaillible, même pour de grands coefficients (comme $8303x + 2717y = 19$). On remonte Euclide pour $a’u + b’v = 1$, puis $(x_0, y_0) = (c’u, c’v)$.\n' +
              '• **Méthode 2 (Solution évidente)** : lorsque $a’$ et $b’$ sont petits, un coup d’œil suffit souvent ! Pour $7x + 16y = 5$, on voit $7 \\times 3 - 16 \\times 1 = 21 - 16 = 5$, donc $(x_0, y_0) = (3, -1)$ immédiatement !\n' +
              '• **Réduction d’une grande solution** : si Euclide donne une grande solution comme $(35, -15)$, tu peux toujours ajouter/retrancher des multiples de $(-b’, a’) = (-16, 7)$ pour la rendre toute petite : $(35 - 2\\times 16, -15 + 2\\times 7) = (3, -1)$ !',
            formula: {
              name: 'Passage de Bézout à une solution particulière',
              formula: 'a’u + b’v = 1 \\implies a’(c’u) + b’(c’v) = c’ \\implies (x_0, y_0) = (c’u,\\ c’v)',
              note: 'N’importe quelle solution particulière (x₀, y₀) engendre exactement le même ensemble final de solutions !',
            },
            keyRule:
              'Si deux étudiants trouvent deux solutions particulières différentes (ex : $(35, -15)$ et $(3, -1)$), leurs ensembles de solutions paramétrés par $k \\in \\mathbb{Z}$ sont **strictement identiques** !',
            konanTip:
              'Ne confonds pas $ax + by = d$ (qui demande juste Bézout) et $ax + by = c$ (où il faut **multiplier** les coefficients de Bézout par $c’ = c/d$) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'On sait que $5 \\times (-2) + 11 \\times 1 = 1$. Quelle solution particulière $(x_0, y_0)$ en déduit-on immédiatement pour $5x + 11y = 7$ ?',
              options: [
                '$(-2, 1)$',
                '$(-14, 7)$',
                '$(14, -7)$',
                '$(-9, 8)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En multipliant les deux membres de $5(-2) + 11(1) = 1$ par $7$, on obtient $5(-14) + 11(7) = 7$, donc $(x_0, y_0) = (-14, 7)$ est une solution particulière.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Famille générale',
            stepTheme: 'green',
            stepTitle: 'Trouver toutes les solutions grâce au lemme de Gauss + réciproque',
            paragraphText:
              'Pour passer d’une seule solution particulière $(x_0, y_0)$ à **toutes** les solutions de $a’x + b’y = c’$ (avec $\\operatorname{pgcd}(a’, b’) = 1$), la méthode par soustraction et lemme de Gauss est un modèle de rigueur.\n' +
              '• **Étape 1 (Soustraction)** : on soustrait $a’x_0 + b’y_0 = c’$ à $a’x + b’y = c’$, ce qui élimine la constante $c’$ : $a’(x - x_0) = -b’(y - y_0)$.\n' +
              '• **Étape 2 (Lemme de Gauss)** : $a’$ divise $-b’(y - y_0)$ et $\\operatorname{pgcd}(a’, b’) = 1$, donc $a’ \\mid (y - y_0)$, soit $\\exists k \\in \\mathbb{Z},\\ y - y_0 = k a’ \\iff y = y_0 + k a’$.\n' +
              '• **Étape 3 (Substitution & Réciproque)** : en reportant dans l’équation, $a’(x - x_0) = -b’(k a’) \\implies x = x_0 - k b’$. Enfin, on vérifie **explicitement** la réciproque : $a’(x_0 - kb’) + b’(y_0 + ka’) = a’x_0 + b’y_0 = c’$.',
            formula: {
              name: 'Ensemble complet des solutions de a’x + b’y = c’ (pgcd(a’, b’) = 1)',
              formula: '\\mathcal{S} = \\big\\{(x_0 - k b’,\\ y_0 + k a’) \\mid k \\in \\mathbb{Z}\\big\\} = \\big\\{(x_0 + k b’,\\ y_0 - k a’) \\mid k \\in \\mathbb{Z}\\big\\}',
              note: 'Signes opposés sur le terme en k si l’équation est a’x + b’y = c’ ; même signe sur k si l’équation est a’x − b’y = c’ !',
            },
            keyRule:
              'Moyen mnémotechnique infaillible sur les signes de $k$ : dans $a’x + b’y = c’$, pour que la somme reste constante quand $x$ augmente de $+kb’$, il faut que $y$ **diminue** de $-ka’$ ! Dans $a’x - b’y = c’$, les deux varient dans le **même** sens ($+kb’$ et $+ka’$) !',
            konanTip:
              'Ne jamais oublier la phrase de réciproque en fin de preuve (« Réciproquement, pour tout $k \\in \\mathbb{Z}$, on vérifie que $a(x_0 - kb’) + b(y_0 + ka’) = c$ ») : c’est un point classique du barème !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'On considère l’équation $3x - 5y = 1$, qui admet $(x_0, y_0) = (2, 1)$ comme solution particulière. Quel est l’ensemble de toutes les solutions dans $\\mathbb{Z}^2$ ?',
              options: [
                '$\\{(2 + 5k,\\ 1 - 3k) \\mid k \\in \\mathbb{Z}\\}$',
                '$\\{(2 + 5k,\\ 1 + 3k) \\mid k \\in \\mathbb{Z}\\}$',
                '$\\{(2 + 3k,\\ 1 + 5k) \\mid k \\in \\mathbb{Z}\\}$',
                '$\\{(2 - 3k,\\ 1 + 5k) \\mid k \\in \\mathbb{Z}\\}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Soustraction : $3(x - 2) = 5(y - 1)$. Comme $\\operatorname{pgcd}(3, 5) = 1$, Gauss donne $x - 2 = 5k$ et $y - 1 = 3k$, soit $(x, y) = (2 + 5k,\\ 1 + 3k)$. Vérification : $3(2 + 5k) - 5(1 + 3k) = 6 + 15k - 5 - 15k = 1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Organigramme',
            stepTheme: 'green',
            stepTitle: 'Organigramme décisionnel complet pour résoudre $ax + by = c$',
            paragraphText:
              'Pour ne jamais sauter d’étape ni oublier une simplification, suis systématiquement l’organigramme en 5 blocs ci-dessous : il couvre 100% des équations diophantiennes linéaires, quelles que soient les tailles et les signes des coefficients.\n' +
              '• **Bloc 1** : calculer $d = \\operatorname{pgcd}(|a|, |b|)$ par l’algorithme d’Euclide.\n' +
              '• **Bloc 2 (Test d’existence)** : si $d \\nmid c$, arrêt immédiat ($\\mathcal{S} = \\emptyset$). Si $d \\mid c$, diviser par $d$ pour obtenir $a’x + b’y = c’$ avec $\\operatorname{pgcd}(a’, b’) = 1$.\n' +
              '• **Blocs 3 à 5** : isoler $(x_0, y_0)$ par remontée de Bézout (multipliée par $c’$), appliquer Gauss sur $a’(x - x_0) = -b’(y - y_0)$, puis vérifier la réciproque.',
            formula: {
              name: 'Check-list de validation rapide',
              formula: '\\text{1) } d \\mid c \\quad \\text{2) } \\operatorname{pgcd}(a’, b’) = 1 \\quad \\text{3) } a’x_0 + b’y_0 = c’ \\quad \\text{4) } a’(\\pm kb’) + b’(\\mp ka’) = 0',
              note: 'Vérifier la solution pour k = 0 ET pour k = 1 détecte 100% des erreurs de calcul ou de signe !',
            },
            keyRule:
              'Contrôle express avant de rendre ta copie : substitue $k = 0$ ET $k = 1$ dans l’équation **initiale** $ax + by = c$ ! Si les deux marchent et que $\\operatorname{pgcd}(\\text{pas}_x, \\text{pas}_y) = 1$, ta solution est garantie 100% juste !',
            konanTip:
              'Cet organigramme sert aussi à résoudre toute congruence linéaire $ax \\equiv c \\pmod b$, puisqu’elle équivaut exactement à $ax - bk = c$ !',
            visualSchema: {
              type: 'flowchart',
              title: 'Organigramme de résolution d’une équation diophantienne ax + by = c',
              caption: 'Pipeline complet en 5 étapes garantissant l’exhaustivité et la justesse des solutions dans ℤ².',
              flowchart: {
                direction: 'vertical',
                steps: [
                  {
                    label: '1. Calculer d = pgcd(|a|, |b|)',
                    sublabel: 'Algorithme d’Euclide (garder les quotients)',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    label: '2. Est-ce que d divise c ?',
                    sublabel: 'Condition nécessaire et suffisante',
                    kind: 'decision',
                    color: 'orange',
                    branchLabel: 'Non',
                    branchTarget: 'Aucune solution : S = ∅ (Arrêt)',
                  },
                  {
                    label: '3. Diviser par d : a’x + b’y = c’',
                    sublabel: 'Maintenant pgcd(a’, b’) = 1',
                    kind: 'process',
                    color: 'violet',
                  },
                  {
                    label: '4. Trouver (x₀, y₀) par Bézout',
                    sublabel: 'Remontée d’Euclide (a’u + b’v = 1) puis × c’',
                    kind: 'process',
                    color: 'blue',
                  },
                  {
                    label: '5. Lemme de Gauss + Réciproque',
                    sublabel: 'S = {(x₀ − kb’, y₀ + ka’) | k ∈ ℤ} (tester k=0 et k=1)',
                    kind: 'end',
                    color: 'green',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Un étudiant résout $6x + 9y = 15$, trouve la solution particulière $(1, 1)$ et écrit $\\mathcal{S} = \\{(1 - 9k,\\ 1 + 6k) \\mid k \\in \\mathbb{Z}\\}$. Quelle erreur a-t-il commise ?',
              options: [
                'Aucune erreur, tous ses couples sont solutions',
                'Il a oublié de diviser par $\\operatorname{pgcd}(6, 9) = 3$ : il rate des solutions entières comme $(-2, 3)$ !',
                'L’équation n’a pas de solution dans $\\mathbb{Z}^2$',
                'Les signes devant $k$ doivent être tous les deux positifs',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En divisant par $d = \\operatorname{pgcd}(6, 9) = 3$, l’équation devient $2x + 3y = 5$, dont les solutions sont $(1 - 3k,\\ 1 + 2k)$. Avec $(-9k, +6k)$, l’étudiant ne trouve qu’un tiers des solutions (il manque par exemple $k = 1 \\implies (-2, 3)$, qui vérifie pourtant $6(-2) + 9(3) = 15$ !).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Grands coefficients',
            stepTheme: 'slate',
            stepTitle: 'Résolution guidée sur de grands coefficients : $8303x + 2717y = 19$',
            paragraphText:
              'Quand les coefficients sont grands, seule la méthode d’Euclide étendu permet d’aboutir sans tâtonner. Voyons comment elle résout $8303x + 2717y = 19$ en quelques lignes propres !\n' +
              '• **Descente d’Euclide** :\n' +
              '  1. $8303 = 2717 \\times 3 + 152$ ;\n' +
              '  2. $2717 = 152 \\times 17 + 133$ ;\n' +
              '  3. $152 = 133 \\times 1 + 19$ ;\n' +
              '  4. $133 = 19 \\times 7 + 0 \\implies \\operatorname{pgcd}(8303, 2717) = 19$ !\n' +
              '• **Remontée de Bézout** : $19 = 152 - 133 = 152 - (2717 - 17 \\times 152) = 18 \\times 152 - 2717 = 18(8303 - 3 \\times 2717) - 2717 = 18 \\times 8303 - 55 \\times 2717$.\n' +
              '• **Résultat** : $(x_0, y_0) = (18, -55)$ est solution particulière, et comme $8303/19 = 437$ et $2717/19 = 143$, toutes les solutions sont $(18 - 143k,\\ -55 + 437k)$, $k \\in \\mathbb{Z}$ !',
            formula: {
              name: 'Identité vérifiée pour (8303, 2717)',
              formula: '8303 \\times 18 + 2717 \\times (-55) = 149\\,454 - 149\\,435 = 19',
              note: 'En seulement 3 divisions euclidiennes, on résout une équation à coefficients à 4 chiffres !',
            },
            keyRule:
              'Lorsque le second membre $c$ est **exactement égal** au PGCD $d$, il n’y a même pas besoin de multiplier les coefficients de Bézout : $(u, v)$ est directement une solution particulière !',
            konanTip:
              'Pour éviter les fautes de calcul dans $2717 \\div 152$, estime d’abord $152 \\times 10 = 1520$, reste $1197$, puis $152 \\times 7 = 1064$, total $17$ et reste $133$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Pour l’équation $8303x + 2717y = 19$, on a trouvé $\\operatorname{pgcd}(8303, 2717) = 19$ ($8303 = 19 \\times 437$, $2717 = 19 \\times 143$) et la solution particulière $(18, -55)$. Quel autre couple appartient à l’ensemble des solutions ?',
              options: [
                '$(161, -492)$',
                '$(-125, 382)$',
                '$(18 - 2717, -55 + 8303)$',
                'Les trois propositions A, B et C sont toutes des solutions de l’équation',
              ],
              correctAnswerIndex: 3,
              explanation:
                'La famille générale est $(18 - 143k, -55 + 437k)$ pour $k \\in \\mathbb{Z}$. A correspond à $k = -1$ ($18 + 143 = 161, -55 - 437 = -492$) ; B à $k = +1$ ($18 - 143 = -125, -55 + 437 = 382$) ; C à $k = 19$ ($143 \\times 19 = 2717, 437 \\times 19 = 8303$). Les trois vérifient donc bien l’équation !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Contraintes ℕ',
            stepTheme: 'slate',
            stepTitle: 'Problème concret avec contraintes de positivité ($x, y \\in \\mathbb{N}$)',
            paragraphText:
              'Dans les applications concrètes (paiement en billets et pièces, commandes de cartons, allocation de ressources), les inconnues ne sont pas dans $\\mathbb{Z}$ mais dans $\\mathbb{N}$ ($x \\geqslant 0$ et $y \\geqslant 0$), ce qui réduit l’infinité de solutions à un **nombre fini** de valeurs de $k$ !\n' +
              '• **Cas pratique** : constituer exactement $59$ unités monétaires avec des pièces de $2$ ($x \\in \\mathbb{N}$) et des billets de $5$ ($y \\in \\mathbb{N}$) revient à résoudre $2x + 5y = 59$ dans $\\mathbb{N}^2$.\n' +
              '• **Résolution dans $\\mathbb{Z}^2$** : $\\operatorname{pgcd}(2, 5) = 1$, solution particulière évidente : $2(27) + 5(1) = 59$, donc $x = 27 - 5k$ et $y = 1 + 2k$ ($k \\in \\mathbb{Z}$).\n' +
              '• **Filtrage par $x \\geqslant 0$ et $y \\geqslant 0$** : $27 - 5k \\geqslant 0 \\iff k \\leqslant 5{,}4 \\iff k \\leqslant 5$, et $1 + 2k \\geqslant 0 \\iff k \\geqslant -0{,}5 \\iff k \\geqslant 0$. Donc **$k \\in \\{0, 1, 2, 3, 4, 5\\}$** (exactement $6$ combinaisons : de $(27, 1)$ à $(2, 11)$) ! Remarque : $y = 1 + 2k$ est **toujours impair** et $\\geqslant 1$ !',
            formula: {
              name: 'Encadrement du paramètre k sous contraintes de positivité',
              formula: '\\begin{cases} x_0 - k b’ \\geqslant 0 \\\\ y_0 + k a’ \\geqslant 0 \\end{cases} \\iff -\\frac{y_0}{a’} \\leqslant k \\leqslant \\frac{x_0}{b’} \\quad (a’, b’ > 0)',
              note: 'Le nombre de solutions dans ℕ² est le nombre d’entiers k contenus dans cet intervalle fermé.',
            },
            keyRule:
              'Pour résoudre $ax + by = c$ dans $\\mathbb{N}^2$, résous TOUJOURS d’abord dans $\\mathbb{Z}^2$, puis traduis $x \\geqslant 0$ et $y \\geqslant 0$ en un encadrement exact de l’entier $k$ !',
            konanTip:
              'Regarde la parité dans $2x + 5y = 59$ : comme $2x$ est pair et $59$ est impair, $5y$ est forcément impair, donc $y$ est obligatoirement **impair** (impossible d’avoir $0$ ou un nombre pair de billets de $5$ !).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'On souhaite payer exactement $59$ euros en utilisant uniquement $x$ pièces de $2$ euros et $y$ billets de $5$ euros ($x, y \\in \\mathbb{N}$). Laquelle de ces affirmations est **fausse** ?',
              options: [
                'Il y a au moins un billet de $5$ euros ($y \\geqslant 1$)',
                'Il peut y avoir exactement $12$ pièces de $2$ euros ($x = 12$)',
                'Il peut y avoir exactement $10$ pièces de $2$ euros ($x = 10$)',
                'Le nombre de billets de $5$ euros est nécessairement impair',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les solutions dans $\\mathbb{N}^2$ sont $(x, y) = (27 - 5k,\\ 1 + 2k)$ pour $k \\in \\{0, 1, 2, 3, 4, 5\\}$, soit $x \\in \\{27, 22, 17, 12, 7, 2\\}$ et $y \\in \\{1, 3, 5, 7, 9, 11\\}$. Ainsi $x = 12$ est possible ($k = 3$, avec $y = 7$), mais $x = 10$ est **impossible** (il resterait $59 - 20 = 39$, non divisible par $5$).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Congruences, restes chinois, Fermat et cryptographie
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch3',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1',
    title: 'Chapitre 3 — Congruences, restes chinois, petit théorème de Fermat et cryptographie',
    summary:
      'Relation de congruence modulo $n$, anneau $\\mathbb{Z}/n\\mathbb{Z}$, carrés modulaires et calendriers, équations $ax \\equiv b \\pmod n$, inverse modulaire, petit théorème de Fermat, théorème des restes chinois et cryptographie (César, affine, principes RSA).',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch3_p1',
        order: 1,
        title: 'Arithmétique modulaire : congruences, anneau Z/nZ et carrés modulaires',
        summary:
          'Manipuler les congruences modulo $n$, éviter les pièges de simplification, explorer la table de multiplication de $\\mathbb{Z}/n\\mathbb{Z}$, utiliser les carrés modulo $4$ et $8$ et calculer des jours de la semaine.',
        conceptExplanation:
          'L’arithmétique modulaire — inventée par Gauss — consiste à calculer « sur un cadran d’horloge à $n$ heures » : on ne retient des entiers que leur **reste** dans la division euclidienne par $n$.\n\n' +
          '• **Définition** : pour $n \\in \\mathbb{N}^*$, $a \\equiv b \\pmod n \\iff n \\mid (a - b) \\iff \\exists k \\in \\mathbb{Z},\\ a = b + kn \\iff a$ et $b$ ont le même reste modulo $n$. C’est une **relation d’équivalence** sur $\\mathbb{Z}$.\n' +
          '• **Compatibilité opératoire** : les congruences s’additionnent, se soustraient, se multiplient et s’élèvent aux puissances entières naturelles ($a \\equiv b \\pmod n \\implies a^p \\equiv b^p \\pmod n$).\n' +
          '• **Piège de la division** : on ne divise PAS librement une congruence ! $ca \\equiv cb \\pmod n \\iff a \\equiv b \\pmod{\\frac{n}{\\operatorname{pgcd}(c, n)}}$. La simplification directe $a \\equiv b \\pmod n$ n’est licite que si $\\operatorname{pgcd}(c, n) = 1$.\n' +
          '• **Anneau $\\mathbb{Z}/n\\mathbb{Z}$** : muni de l’addition et de la multiplication des classes, $\\mathbb{Z}/n\\mathbb{Z}$ est un anneau commutatif ; c’est un **corps** (tout élément non nul est inversible) si et seulement si **$n$ est premier**.',
        formulas: [
          {
            name: 'Compatibilité des opérations modulo n',
            formula: '\\begin{cases} a \\equiv b \\pmod n \\\\ c \\equiv d \\pmod n \\end{cases} \\implies a + c \\equiv b + d, \\quad ac \\equiv bd, \\quad a^p \\equiv b^p \\pmod n',
            note: 'Attention : on ne remplace JAMAIS l’exposant p par son reste modulo n (voir Petit théorème de Fermat : c’est modulo p−1) !',
          },
          {
            name: 'Règle exacte de simplification d’un facteur commun',
            formula: 'ca \\equiv cb \\pmod n \\iff a \\equiv b \\pmod{\\frac{n}{\\operatorname{pgcd}(c, n)}}',
            note: 'Exemple : 2x ≡ 2 [6] ⇔ x ≡ 1 [3] (et NON x ≡ 1 [6], car x = 4 vérifie 2×4 = 8 ≡ 2 [6] !).',
          },
          {
            name: 'Carrés modulo 4 et modulo 8',
            formula: 'x^2 \\equiv 0 \\text{ ou } 1 \\pmod 4 ; \\qquad x \\text{ impair} \\implies x^2 \\equiv 1 \\pmod 8 ; \\qquad x \\text{ pair} \\implies x^2 \\equiv 0 \\text{ ou } 4 \\pmod 8',
            note: 'Conséquence célèbre : une somme de deux carrés n’est JAMAIS congrue à 3 modulo 4 !',
          },
        ],
        keyRule:
          'Piège d’or : ne jamais simplifier $ca \\equiv cb \\pmod n$ en $a \\equiv b \\pmod n$ sans vérifier $\\operatorname{pgcd}(c, n) = 1$, et ne jamais réduire un **exposant** modulo $n$ !',
        workedExample: {
          title: 'Preuve que $a^2 + b^2 + c^2$ n’est pas un carré pour $a, b, c$ impairs, et calcul calendaire',
          statement:
            '1) Soient $a, b, c$ trois entiers impairs. Montrer que $a^2 + b^2 + c^2$ n’est jamais le carré d’un entier. 2) Le 1er janvier 2007 était un lundi. Quel jour de la semaine était le 19 mars 2008 (2008 étant bissextile) ?',
          methodSteps: [
            '1) Tout entier impair s’écrit $2k + 1$, donc son carré vaut $(2k + 1)^2 = 4k(k + 1) + 1$. Comme $k(k + 1)$ est le produit de deux entiers consécutifs, il est pair ($2m$), d’où $(2k + 1)^2 = 8m + 1 \\equiv 1 \\pmod 8$.',
            'Ainsi $a^2 + b^2 + c^2 \\equiv 1 + 1 + 1 = 3 \\pmod 8$. Or tout carré d’entier est congru à $0, 1$ ou $4 \\pmod 8$ (jamais à $3$). Donc $a^2 + b^2 + c^2$ ne peut pas être un carré parfait !',
            '2) Nombre de jours entre le 1er janvier 2007 et le 19 mars 2008 : toute l’année 2007 ($365$ jours, non bissextile) amène au 1er janvier 2008. De là au 19 mars 2008 : $31$ (janv.) $+ 29$ (fév. 2008 bissextile) $+ 18$ (du 1er au 19 mars) $= 78$ jours. Total : $365 + 78 = 443$ jours.',
            'Division par $7$ : $443 = 7 \\times 63 + 2$, donc $443 \\equiv 2 \\pmod 7$. Deux jours après lundi, c’est un **mercredi** !',
          ],
          conclusion:
            '$a^2 + b^2 + c^2 \\equiv 3 \\pmod 8$ n’est jamais un carré, et le 19 mars 2008 était un mercredi.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Congruence',
            stepTheme: 'blue',
            stepTitle: 'Définition de $a \\equiv b \\pmod n$ et représentant canonique',
            paragraphText:
              'Si un serveur affiche l’heure $15\\text{h}$ et qu’une tâche dure $50\\text{h}$, à quelle heure s’achèvera-t-elle ? On calcule $15 + 50 = 65 = 24 \\times 2 + 17$, soit $17\\text{h}$ : c’est un calcul modulo $24$ !\n' +
              '• **Définition** : pour $n \\in \\mathbb{N}^*$ et $(a, b) \\in \\mathbb{Z}^2$, $a \\equiv b \\pmod n$ (noté aussi $a \\equiv b\\,[n]$) ssi $n \\mid (a - b)$, c’est-à-dire $a - b \\in n\\mathbb{Z}$.\n' +
              '• **Lien avec la division euclidienne** : $a \\equiv b \\pmod n$ ssi $a$ et $b$ ont le **même reste** dans la division euclidienne par $n$. Ce reste unique $r \\in \\{0, 1, \\dots, n - 1\\}$ est le représentant canonique de $a$ modulo $n$.\n' +
              '• **Astuce des représentants négatifs** : en calcul mental, utiliser un petit représentant **négatif** est souvent beaucoup plus rapide ! Par exemple, $16 \\equiv -1 \\pmod{17}$ permet de calculer $16^{100} \\equiv (-1)^{100} = 1 \\pmod{17}$ en une seconde !',
            formula: {
              name: 'Équivalence congruence / égalité des restes',
              formula: 'a \\equiv b \\pmod n \\iff n \\mid (a - b) \\iff (a \\bmod n = b \\bmod n)',
              note: 'La congruence modulo n est réflexive, symétrique et transitive (relation d’équivalence).',
            },
            keyRule:
              'Pour simplifier des puissances modulo $n$, cherche toujours un représentant égal à $\\pm 1$ ou de petite valeur absolue : $n - 1 \\equiv -1 \\pmod n$ est ton meilleur allié !',
            konanTip:
              'Ne confonds pas le « reste » (toujours dans $\\{0, \\dots, n-1\\}$) et un « nombre congru » (qui peut être négatif) : à la fin d’un calcul où tu trouves $-3 \\pmod{11}$, ajoute $11$ pour donner le reste exact $8$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Quel est le reste de la division euclidienne de $12^{2025}$ par $13$ ?',
              options: ['$1$', '$12$', '$0$', '$5$'],
              correctAnswerIndex: 1,
              explanation:
                'On remarque que $12 \\equiv -1 \\pmod{13}$. Donc $12^{2025} \\equiv (-1)^{2025} = -1 \\equiv 12 \\pmod{13}$ (car $2025$ est impair). Comme $0 \\leqslant 12 < 13$, le reste exact est $12$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul modulaire',
            stepTheme: 'green',
            stepTitle: 'Calcul de restes par compatibilité des sommes, produits et puissances',
            paragraphText:
              'Grâce à la compatibilité de la congruence avec $+$, $-$ et $\\times$, on peut réduire **à chaque étape intermédiaire** pour calculer le reste de nombres gigantesques comme $7^{100} \\bmod 5$ ou le chiffre des unités de $3^{2026}$.\n' +
              '• **Règle d’exponentiation rapide / cyclicité** : pour calculer $a^k \\pmod n$, on calcule les premières puissances $a^1, a^2, a^3, \\dots \\pmod n$ jusqu’à tomber sur $1$ (ou $-1$).\n' +
              '• **Exemple** : trouver le chiffre des unités ($\\bmod 10$) de $3^{2026}$. On calcule $3^1 \\equiv 3$, $3^2 \\equiv 9 \\equiv -1$, donc $3^4 \\equiv (-1)^2 = 1 \\pmod{10}$ (période $4$ !). Or $2026 = 4 \\times 506 + 2$, donc $3^{2026} = (3^4)^{506} \\cdot 3^2 \\equiv 1^{506} \\cdot 9 = 9 \\pmod{10}$ : le chiffre des unités est **$9$** !\n' +
              '• **Critère de divisibilité par $9$ redémontré** : comme $10 \\equiv 1 \\pmod 9$, $10^k \\equiv 1 \\pmod 9$, donc $\\sum c_k 10^k \\equiv \\sum c_k \\pmod 9$ !',
            formula: {
              name: 'Réduction d’une puissance par périodicité d’ordre d',
              formula: 'a^d \\equiv 1 \\pmod n \\text{ et } k = dq + r \\implies a^k = (a^d)^q a^r \\equiv a^r \\pmod n',
              note: 'C’est la division euclidienne de l’EXPOSANT k par la période d (et non par n) qui donne la réduction !',
            },
            keyRule:
              'Trouver le dernier chiffre d’un entier revient à calculer son reste **modulo $10$** ; trouver ses deux derniers chiffres revient à calculer son reste **modulo $100$**.',
            konanTip:
              'De la même façon que $10 \\equiv 1 \\pmod 9$ prouve le critère par $9$, $10 \\equiv -1 \\pmod{11}$ prouve immédiatement le critère de divisibilité par $11$ (somme alternée des chiffres) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Quel est le chiffre des unités (reste modulo $10$) de $7^{43}$ ?',
              options: ['$1$', '$3$', '$7$', '$9$'],
              correctAnswerIndex: 1,
              explanation:
                'Calculons les puissances de $7 \\pmod{10}$ : $7^1 \\equiv 7$, $7^2 = 49 \\equiv 9 \\equiv -1$, $7^3 \\equiv -7 \\equiv 3$, $7^4 \\equiv (-1)^2 = 1 \\pmod{10}$. Comme $43 = 4 \\times 10 + 3$, on a $7^{43} = (7^4)^{10} \\cdot 7^3 \\equiv 1^{10} \\cdot 3 = 3 \\pmod{10}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Simplification',
            stepTheme: 'orange',
            stepTitle: 'Piège de la division dans une congruence : le rôle de $\\operatorname{pgcd}(c, n)$',
            paragraphText:
              'Dans $\\mathbb{R}$, $4x = 4y$ implique toujours $x = y$. Dans les congruences, cette simplification est **FAUSSE** en général dès que le facteur commun $c$ partage un diviseur avec le module $n$ !\n' +
              '• **Contre-exemple frappant** : $4 \\times 1 = 4 \\equiv 16 = 4 \\times 4 \\pmod{12}$, pourtant $1 \\not\\equiv 4 \\pmod{12}$ ! Pourquoi ? Parce que $\\operatorname{pgcd}(4, 12) = 4 > 1$ : en divisant par $4$, on doit aussi diviser le module $12$ par $4$, ce qui donne bien $1 \\equiv 4 \\pmod 3$ !\n' +
              '• **Règle exacte** : $ca \\equiv cb \\pmod n \\iff n \\mid c(a - b) \\iff \\frac{n}{d} \\mid \\frac{c}{d}(a - b)$ où $d = \\operatorname{pgcd}(c, n)$. Par le lemme de Gauss, cela équivaut à **$a \\equiv b \\pmod{\\frac{n}{d}}$**.\n' +
              '• **Cas favorable** : si $\\operatorname{pgcd}(c, n) = 1$, alors $d = 1$ et l’on peut simplifier sans changer le module : $ca \\equiv cb \\pmod n \\iff a \\equiv b \\pmod n$.',
            formula: {
              name: 'Simplification licite d’une congruence',
              formula: 'ca \\equiv cb \\pmod n \\iff a \\equiv b \\pmod{\\frac{n}{\\operatorname{pgcd}(c, n)}}',
              note: 'En particulier, dans ℤ/pℤ avec p premier, tout facteur c non divisible par p se simplifie librement !',
            },
            keyRule:
              'Ne simplifie JAMAIS une congruence par $c$ sans calculer $d = \\operatorname{pgcd}(c, n)$ : tu dois diviser le module $n$ par $d$ !',
            konanTip:
              'Si $a \\equiv b \\pmod{12}$ et $c = 3$ dans $3x \\equiv 6 \\pmod{12}$, divise TOUT par $3$ (y compris le module !) : tu obtiens $x \\equiv 2 \\pmod 4$, ce qui donne bien les $3$ solutions modulo $12$ : $2, 6, 10$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'À quelle congruence la relation $6x \\equiv 12 \\pmod{18}$ est-elle **strictement équivalente** ?',
              options: [
                '$x \\equiv 2 \\pmod{18}$',
                '$x \\equiv 2 \\pmod{3}$',
                '$x \\equiv 2 \\pmod{6}$',
                '$x \\equiv 0 \\pmod{3}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $6x \\equiv 6 \\times 2 \\pmod{18}$ avec $d = \\operatorname{pgcd}(6, 18) = 6$. En divisant par $6$ y compris le module ($18/6 = 3$), on obtient $x \\equiv 2 \\pmod 3$ (soit $x \\in \\{2, 5, 8, 11, 14, 17\\} \\pmod{18}$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Anneau ℤ/nℤ',
            stepTheme: 'blue',
            stepTitle: 'Classes de restes et structure de l’anneau $\\mathbb{Z}/n\\mathbb{Z}$',
            paragraphText:
              'L’ensemble quotient $\\mathbb{Z}/n\\mathbb{Z} = \\{\\bar{0}, \\bar{1}, \\dots, \\overline{n-1}\\}$ muni des lois $\\bar{a} + \\bar{b} = \\overline{a + b}$ et $\\bar{a} \\times \\bar{b} = \\overline{ab}$ forme un **anneau commutatif** fini de cardinal $n$.\n' +
              '• **Diviseurs de zéro** : lorsque $n$ est **composé** (comme $n = 6 = 2 \\times 3$), deux classes non nulles peuvent avoir un produit nul ! Dans $\\mathbb{Z}/6\\mathbb{Z}$, $\\bar{2} \\times \\bar{3} = \\bar{6} = \\bar{0}$ alors que $\\bar{2} \\neq \\bar{0}$ et $\\bar{3} \\neq \\bar{0}$ : l’anneau n’est **pas intègre**.\n' +
              '• **Éléments inversibles** : $\\bar{a}$ est inversible dans $\\mathbb{Z}/n\\mathbb{Z}$ (il existe $\\bar{u}$ tel que $\\bar{a}\\bar{u} = \\bar{1}$) ssi **$\\operatorname{pgcd}(a, n) = 1$** ! Dans $\\mathbb{Z}/6\\mathbb{Z}$, seuls $\\bar{1}$ et $\\bar{5}$ sont inversibles ($\\bar{5} \\times \\bar{5} = \\overline{25} = \\bar{1}$).\n' +
              '• **Corps fini $\\mathbb{Z}/p\\mathbb{Z}$** : lorsque $p$ est **premier**, tout élément non nul est inversible et il n’y a aucun diviseur de zéro : $\\mathbb{Z}/p\\mathbb{Z}$ est un **corps** !',
            formula: {
              name: 'Caractérisation des inversibles de ℤ/nℤ',
              formula: '\\bar{a} \\in (\\mathbb{Z}/n\\mathbb{Z})^\\times \\iff \\operatorname{pgcd}(a, n) = 1 ; \\qquad \\mathbb{Z}/n\\mathbb{Z} \\text{ corps} \\iff n \\text{ premier}',
              note: 'Le nombre d’inversibles dans ℤ/nℤ est l’indicatrice d’Euler φ(n) (ex : φ(6) = 2, φ(p) = p − 1).',
            },
            keyRule:
              'Dans $\\mathbb{Z}/n\\mathbb{Z}$ ($n$ composé), la règle du produit nul « $ab = 0 \\implies a = 0$ ou $b = 0$ » est **FAUSSE** ! Elle n’est vraie que lorsque $n$ est un nombre premier.',
            konanTip:
              'Regarde la table de multiplication de $\\mathbb{Z}/6\\mathbb{Z}$ ci-dessous : les lignes de $\\bar{1}$ et $\\bar{5}$ (inversibles) contiennent tous les éléments de $0$ à $5$ une seule fois (bijection !), tandis que celles de $\\bar{2}, \\bar{3}, \\bar{4}$ contiennent des $\\bar{0}$ supplémentaires (diviseurs de zéro) !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Table de multiplication dans l’anneau ℤ/6ℤ',
              caption: 'Inversibles : 1̄ et 5̄ (présence d’un 1̄ dans la ligne). Diviseurs de zéro : 2̄, 3̄, 4̄ (car 2̄×3̄ = 0̄ et 4̄×3̄ = 0̄).',
              tableData: {
                headers: ['× (mod 6)', '0̄', '1̄', '2̄', '3̄', '4̄', '5̄'],
                rows: [
                  ['0̄', '0̄', '0̄', '0̄', '0̄', '0̄', '0̄'],
                  ['1̄ (inv.)', '0̄', '1̄', '2̄', '3̄', '4̄', '5̄'],
                  ['2̄ (div. 0)', '0̄', '2̄', '4̄', '0̄', '2̄', '4̄'],
                  ['3̄ (div. 0)', '0̄', '3̄', '0̄', '3̄', '0̄', '3̄'],
                  ['4̄ (div. 0)', '0̄', '4̄', '2̄', '0̄', '4̄', '2̄'],
                  ['5̄ (inv.)', '0̄', '5̄', '4̄', '3̄', '2̄', '1̄'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Combien d’éléments **inversibles** possède l’anneau $\\mathbb{Z}/12\\mathbb{Z}$ ?',
              options: ['$11$', '$6$', '$4$', '$2$'],
              correctAnswerIndex: 2,
              explanation:
                'Les éléments inversibles de $\\mathbb{Z}/12\\mathbb{Z}$ sont les classes $\\bar{a}$ avec $0 \\leqslant a < 12$ et $\\operatorname{pgcd}(a, 12) = 1$, soit $\\bar{1}, \\bar{5}, \\bar{7}, \\overline{11}$. Il y en a exactement $4$ ($\\varphi(12) = 4$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Carrés modulaires',
            stepTheme: 'green',
            stepTitle: 'Étude des carrés modulo 4 et modulo 8 : prouver qu’un entier n’est pas un carré',
            paragraphText:
              'Pour démontrer qu’une équation diophantienne non linéaire (comme $x^2 + y^2 = 403$ ou $x^2 - 8y = 6$) n’a **aucune** solution entière, la technique des congruences sur les carrés est d’une efficacité redoutable.\n' +
              '• **Carrés modulo $4$** : si $x \\equiv 0, 2 \\pmod 4$, $x^2 \\equiv 0 \\pmod 4$ ; si $x \\equiv 1, 3 \\pmod 4$, $x^2 \\equiv 1 \\pmod 4$. Donc $x^2 + y^2 \\equiv 0, 1$ ou $2 \\pmod 4$ : **une somme de deux carrés n’est jamais congrue à $3$ modulo $4$** (impossible d’écrire $403 = x^2 + y^2$ !).\n' +
              '• **Carrés modulo $8$** : en testant $0, \\pm 1, \\pm 2, \\pm 3, 4 \\pmod 8$, tout entier **impair** vérifie $x^2 \\equiv 1 \\pmod 8$, et tout entier **pair** vérifie $x^2 \\equiv 0$ ou $4 \\pmod 8$.\n' +
              '• **Application avancée** : si $a, b, c$ sont impairs, alors $a^2 + b^2 + c^2 \\equiv 3 \\pmod 8$ (pas un carré) et $2(ab + bc + ca) = (a + b + c)^2 - (a^2 + b^2 + c^2) \\equiv 1 - 3 \\equiv 6 \\pmod 8$ (pas un carré non plus !).',
            formula: {
              name: 'Table des carrés modulo 4 et modulo 8',
              formula: 'x^2 \\bmod 4 \\in \\{0, 1\\}, \\qquad x^2 \\bmod 8 \\in \\{0, 1, 4\\}',
              note: 'En particulier, un entier congru à 2, 3, 5, 6 ou 7 modulo 8 n’est JAMAIS un carré parfait !',
            },
            keyRule:
              'Pour prouver qu’une équation entière n’a pas de solution, réduis-la modulo un petit entier bien choisi ($3, 4, 5, 8$ ou $9$) pour faire apparaître une valeur impossible !',
            konanTip:
              'Vérifie aussi $a^2 \\bmod 3 \\in \\{0, 1\\}$ et $a^2 \\bmod 5 \\in \\{0, 1, 4\\}$ : avec seulement $3, 4, 5$ et $8$, tu bloques presque tous les exercices de non-existence !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Soient $a, b, c$ trois entiers impairs. Quel est le reste modulo $8$ de $2(ab + bc + ca)$ ?',
              options: ['$0$', '$1$', '$4$', '$6$'],
              correctAnswerIndex: 3,
              explanation:
                'Utilisons l’identité $(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$. Comme $a, b, c$ sont impairs, leur somme $a + b + c$ est impaire donc $(a + b + c)^2 \\equiv 1 \\pmod 8$, et $a^2 + b^2 + c^2 \\equiv 1 + 1 + 1 = 3 \\pmod 8$. Ainsi $2(ab + bc + ca) \\equiv 1 - 3 = -2 \\equiv 6 \\pmod 8$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Calendrier mod 7',
            stepTheme: 'slate',
            stepTitle: 'Périodicité calendaire modulo 7 et gestion des années bissextiles',
            paragraphText:
              'Les jours de la semaine forment un cycle parfait dans $\\mathbb{Z}/7\\mathbb{Z}$ : tous les lundis d’une année ont le même reste modulo $7$ !\n' +
              '• **Décalage d’une année** : une année normale compte $365 = 7 \\times 52 + 1 \\equiv 1 \\pmod 7$ jour (une même date avance donc de **$+1$ jour** de la semaine l’année suivante). Une année **bissextile** (multiple de $4$, sauf les siècles non multiples de $400$) compte $366 \\equiv 2 \\pmod 7$ jours (avance de **$+2$ jours** si l’on franchit le 29 février).\n' +
              '• **Exemple chiffré** : sachant que le 1er janvier 2007 était un lundi, quel jour était le 15 janvier 2008 ? De 1er janv. 2007 à 1er janv. 2008 : $+365 \\equiv +1$ (mardi) ; puis $+14 \\equiv 0 \\pmod 7$ jusqu’au 15 janvier $\\implies$ **mardi** !\n' +
              '• **Et le 2 juillet 2007 ?** Janvier ($31$), fév. ($28$), mars ($31$), avril ($30$), mai ($31$), juin ($30$) et $1$ jour en juillet (du 1er au 2) $= 182 = 7 \\times 26 + 0 \\equiv 0 \\pmod 7$ $\\implies$ encore un **lundi** !',
            formula: {
              name: 'Décalages modulaires des mois (mod 7)',
              formula: '31 \\equiv 3,\\quad 30 \\equiv 2,\\quad 29 \\equiv 1,\\quad 28 \\equiv 0 \\pmod 7 ; \\qquad 365 \\equiv 1,\\quad 366 \\equiv 2 \\pmod 7',
              note: 'Réduire chaque mois modulo 7 évite d’additionner des centaines de jours !',
            },
            keyRule:
              'Pour calculer le nombre de jours écoulés du jour $j_1$ au jour $j_2$ du même mois, c’est $j_2 - j_1$ (et NON $j_2 - j_1 + 1$) : du 1er au 2 juillet, il s’écoule $1$ jour, pas $2$ !',
            konanTip:
              'Remplace chaque mois par son reste modulo $7$ ($3, 0, 3, 2, 3, 2\\dots$) : pour Janv→Juin 2007, $3 + 0 + 3 + 2 + 3 + 2 = 13 \\equiv -1$, plus $1$ jour (du 1er au 2 juillet) $= 0 \\pmod 7$ : calcul en 5 secondes !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Le 1er janvier 2007 était un lundi. En sachant que $2008$ était bissextile (366 jours), quel jour de la semaine était le 1er janvier 2010 ?',
              options: ['Jeudi', 'Vendredi', 'Samedi', 'Mercredi'],
              correctAnswerIndex: 1,
              explanation:
                'Décalages annuels modulo $7$ : 2007 ($+1$), 2008 bissextile ($+2$), 2009 ($+1$). Total : $+1 + 2 + 1 = +4$ jours après lundi : mardi ($+1$), mercredi ($+2$), jeudi ($+3$), **vendredi** ($+4$).',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch3_p2',
        order: 2,
        title: 'Équations de congruence, petit théorème de Fermat et restes chinois',
        summary:
          'Résoudre $ax \\equiv b \\pmod n$, calculer un inverse modulaire par Bézout, exploiter le petit théorème de Fermat pour réduire de grandes puissances et résoudre tout système de congruences par le théorème des restes chinois.',
        conceptExplanation:
          'Trois théorèmes majeurs transforment les congruences en un outil algorithmique surpuissant capable de résoudre des systèmes linéaires modulaires et de manipuler des exposants astronomiques.\n\n' +
          '• **Équation $ax \\equiv b \\pmod n$** : elle admet des solutions ssi $d = \\operatorname{pgcd}(a, n) \\mid b$. Les solutions sont alors de la forme $x = x_0 + l \\frac{n}{d}$ ($l \\in \\mathbb{Z}$), soit exactement $d$ solutions distinctes modulo $n$ (une seule solution modulo $n$ si $\\operatorname{pgcd}(a, n) = 1$, obtenue via l’**inverse modulaire** $a^{-1} \\bmod n$).\n' +
          '• **Petit théorème de Fermat** : si $p$ est **premier** et $a \\in \\mathbb{Z}$, alors $a^p \\equiv a \\pmod p$. Corollaire : si $p \\nmid a$, alors **$a^{p - 1} \\equiv 1 \\pmod p$** (ce qui réduit l’exposant modulo $p - 1$ !).\n' +
          '• **Théorème des restes chinois (TRC)** : si $n_1, \\dots, n_p$ sont **deux à deux premiers entre eux**, le système $x \\equiv a_k \\pmod{n_k}$ ($1 \\leqslant k \\leqslant p$) admet une **unique** solution modulo $N = \\prod_{k=1}^p n_k$, donnée explicitement par $x \\equiv \\sum_{k=1}^p a_k N_k u_k \\pmod N$ où $N_k = N/n_k$ et $N_k u_k \\equiv 1 \\pmod{n_k}$.',
        formulas: [
          {
            name: 'Petit théorème de Fermat et son corollaire',
            formula: 'p \\text{ premier} \\implies \\forall a \\in \\mathbb{Z},\\ a^p \\equiv a \\pmod p ; \\qquad (p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod p)',
            note: 'Attention : Fermat exige impérativement que p soit PREMIER (faux pour un module composé comme 4 : 3³ = 27 ≡ 3 ≠ 1 [4] !).',
          },
          {
            name: 'Formule constructive des restes chinois',
            formula: 'x \\equiv \\sum_{k=1}^{p} a_k N_k u_k \\pmod{N}, \\qquad N = \\prod_{k=1}^{p} n_k,\\quad N_k = \\frac{N}{n_k},\\quad N_k u_k \\equiv 1 \\pmod{n_k}',
            note: 'Si les modulos ne sont pas premiers entre eux deux à deux, on décompose chaque congruence en facteurs premiers et on vérifie la compatibilité !',
          },
        ],
        keyRule:
          'Dans le petit théorème de Fermat ($p$ premier, $p \\nmid a$), on réduit la **base** $a$ modulo **$p$**, et l’**exposant** $k$ modulo **$p - 1$** (jamais modulo $p$ !).',
        workedExample: {
          title: 'Puissance de Fermat ($14^{3141} \\bmod 17$) et problème chinois ($2\\,[3], 3\\,[5], 2\\,[7]$)',
          statement:
            '1) Montrer que $14^{3141} \\equiv 12 \\pmod{17}$. 2) Des objets rangés par $3$ laissent $2$, par $5$ laissent $3$, par $7$ laissent $2$. Quel est le plus petit nombre possible d’objets ?',
          methodSteps: [
            '1) $17$ est premier et $17 \\nmid 14$. Par le petit théorème de Fermat, $14^{16} \\equiv 1 \\pmod{17}$. Divisons l’exposant $3141$ par $16$ : $3141 = 16 \\times 196 + 5$.',
            'Donc $14^{3141} = (14^{16})^{196} \\cdot 14^5 \\equiv 14^5 \\equiv (-3)^5 = -243 \\pmod{17}$. Or $243 = 17 \\times 14 + 5$, donc $-243 \\equiv -5 \\equiv 12 \\pmod{17}$ !',
            '2) Les modulos $n_1 = 3, n_2 = 5, n_3 = 7$ sont deux à deux premiers entre eux, de produit $N = 105$. On a $N_1 = 35, N_2 = 21, N_3 = 15$.',
            'Inverses modulaires : $35 u_1 \\equiv 2 u_1 \\equiv 1 \\pmod 3 \\implies u_1 = 2$ ; $21 u_2 \\equiv 1 u_2 \\equiv 1 \\pmod 5 \\implies u_2 = 1$ ; $15 u_3 \\equiv 1 u_3 \\equiv 1 \\pmod 7 \\implies u_3 = 1$. Ainsi $x \\equiv 2(35)(2) + 3(21)(1) + 2(15)(1) = 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}$ !',
          ],
          conclusion:
            '$14^{3141} \\equiv 12 \\pmod{17}$ et le plus petit nombre d’objets est **$23$** (toutes solutions : $23 + 105k$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Équation ax ≡ b [n]',
            stepTheme: 'green',
            stepTitle: 'Résoudre une équation de congruence $ax \\equiv b \\pmod n$',
            paragraphText:
              'Résoudre $ax \\equiv b \\pmod n$ dans $\\mathbb{Z}$ n’est rien d’autre que résoudre l’équation diophantienne $ax - nk = b$ !\n' +
              '• **Existence** : il existe des solutions ssi $d = \\operatorname{pgcd}(a, n)$ divise $b$.\n' +
              '• **Résolution propre** : si $d \\mid b$, on divise toute la congruence (y compris le module !) par $d$ pour obtenir $a’x \\equiv b’ \\pmod{n’}$ avec $\\operatorname{pgcd}(a’, n’) = 1$. On cherche ensuite l’inverse $u$ de $a’$ modulo $n’$ ($a’u \\equiv 1 \\pmod{n’}$), et on obtient $x \\equiv u b’ \\pmod{n’}$, soit $x = x_0 + l \\frac{n}{d}$ ($l \\in \\mathbb{Z}$).\n' +
              '• **Exemple** : $9x \\equiv 6 \\pmod{24}$. Ici $d = \\operatorname{pgcd}(9, 24) = 3 \\mid 6$. Division par $3$ : $3x \\equiv 2 \\pmod 8$. Comme $3 \\times 3 = 9 \\equiv 1 \\pmod 8$, on multiplie par $3$ : $x \\equiv 6 \\pmod 8$, soit $x = 6 + 8l$ (trois solutions dans $\\mathbb{Z}/24\\mathbb{Z}$ : $6, 14, 22$).',
            formula: {
              name: 'Structure des solutions de ax ≡ b [n]',
              formula: 'd = \\operatorname{pgcd}(a, n) \\mid b \\implies x \\equiv x_0 \\pmod{\\frac{n}{d}} \\iff x = x_0 + l\\frac{n}{d}\\ (l \\in \\mathbb{Z})',
              note: 'Il y a exactement d solutions distinctes modulo n.',
            },
            keyRule:
              'Ne confonds pas le nombre de solutions dans $\\mathbb{Z}$ (une infinité dès que $d \\mid b$) et le nombre de solutions dans $\\mathbb{Z}/n\\mathbb{Z}$ (exactement $d = \\operatorname{pgcd}(a, n)$) !',
            konanTip:
              'Dès que $d = \\operatorname{pgcd}(a, n) > 1$ divise $b$, divise immédiatement $a, b$ et $n$ par $d$ : tu te ramènes aussitôt à un module plus petit où $a’$ est inversible !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est l’ensemble des solutions entières de la congruence $12x \\equiv 5 \\pmod{35}$ ?',
              options: [
                '$x \\equiv 15 \\pmod{35}$',
                '$x \\equiv 3 \\pmod{35}$',
                '$x \\equiv 20 \\pmod{35}$',
                'Aucune solution dans $\\mathbb{Z}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\operatorname{pgcd}(12, 35) = 1$, donc $12$ est inversible modulo $35$. Par Euclide : $35 = 12 \\times 3 - 1 \\implies 12 \\times 3 = 36 \\equiv 1 \\pmod{35}$ ! Donc $12^{-1} \\equiv 3 \\pmod{35}$. En multipliant $12x \\equiv 5$ par $3$, on obtient $x \\equiv 15 \\pmod{35}$ (vérification : $12 \\times 15 = 180 = 35 \\times 5 + 5$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Inverse modulaire',
            stepTheme: 'green',
            stepTitle: 'Calculer l’inverse modulaire $a^{-1} \\bmod n$ par l’algorithme d’Euclide étendu',
            paragraphText:
              'En cryptographie (déchiffrement affine, calcul de la clé privée $d$ en RSA), l’opération centrale est le calcul de l’**inverse modulaire** : trouver $u \\in \\{1, \\dots, n-1\\}$ tel que $au \\equiv 1 \\pmod n$.\n' +
              '• **Existence et unicité** : $a$ admet un inverse modulo $n$ ssi $\\operatorname{pgcd}(a, n) = 1$, et cet inverse est unique modulo $n$.\n' +
              '• **Méthode de Bézout** : l’algorithme d’Euclide étendu donne $(u, v)$ tel que $au + nv = 1$. En réduisant modulo $n$, le terme $nv$ disparaît et il reste **$au \\equiv 1 \\pmod n$** : $u \\bmod n$ est l’inverse cherché !\n' +
              '• **Exemple** : inverse de $7$ modulo $26$. $26 = 7(3) + 5$ ; $7 = 5(1) + 2$ ; $5 = 2(2) + 1$. Remontée : $1 = 5 - 2(7 - 5) = 3(5) - 2(7) = 3(26 - 3 \\times 7) - 2(7) = 3(26) - 11(7)$. Donc $7^{-1} \\equiv -11 \\equiv 15 \\pmod{26}$ (vérification : $7 \\times 15 = 105 = 4 \\times 26 + 1$).',
            formula: {
              name: 'Lien entre Bézout et inverse modulaire',
              formula: 'au + nv = 1 \\implies au \\equiv 1 \\pmod n \\implies a^{-1} \\equiv u \\pmod n',
              note: 'Si u est négatif, ajoute simplement un multiple de n pour revenir dans {1, ..., n − 1} !',
            },
            keyRule:
              'Vérifie TOUJOURS ton inverse modulaire $u$ en calculant le produit $a \\times u$ et en vérifiant que le reste modulo $n$ vaut bien **$1$** !',
            konanTip:
              'Pour un petit module comme $26$ ou $35$, cherche d’abord s’il existe un multiple de $n$ juste à côté d’un multiple de $a$ ($12 \\times 3 = 36 = 35 + 1 \\implies 12^{-1} = 3 \\bmod 35$ en deux secondes) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quel est l’inverse modulaire de $9$ modulo $26$ (dans $\\{1, \\dots, 25\\}$) ?',
              options: ['$3$', '$9$', '$17$', '$23$'],
              correctAnswerIndex: 0,
              explanation:
                'On cherche $u \\in \\{1, \\dots, 25\\}$ tel que $9u \\equiv 1 \\pmod{26}$. Or $9 \\times 3 = 27 = 26 + 1 \\equiv 1 \\pmod{26}$ ! L’inverse de $9$ modulo $26$ est donc tout simplement $3$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Fermat',
            stepTheme: 'violet',
            stepTitle: 'Petit théorème de Fermat et condition de primalité de $p$',
            paragraphText:
              'Le petit théorème de Fermat est la clé magique qui permet d’écraser des exposants gigantesques modulo un nombre premier $p$ et de tester la primalité de grands nombres en cryptographie.\n' +
              '• **Énoncé général** : si $p$ est un nombre **premier**, alors pour tout $a \\in \\mathbb{Z}$, $a^p \\equiv a \\pmod p$.\n' +
              '• **Corollaire opérationnel** : si $p$ est premier et **$p \\nmid a$** (c’est-à-dire $\\operatorname{pgcd}(a, p) = 1$), on peut simplifier par $a$ : **$a^{p - 1} \\equiv 1 \\pmod p$**.\n' +
              '• **Inverse gratuit via Fermat** : de $a \\cdot a^{p - 2} = a^{p - 1} \\equiv 1 \\pmod p$, on obtient aussi une formule explicite pour l’inverse dans $\\mathbb{Z}/p\\mathbb{Z}$ : $a^{-1} \\equiv a^{p - 2} \\pmod p$ !\n' +
              '• **Attention** : la réciproque est fausse en général (il existe des nombres composés dits de Carmichael comme $561 = 3 \\times 11 \\times 17$ vérifiant $a^{560} \\equiv 1 \\pmod{561}$ pour tout $a$ premier avec $561$).',
            formula: {
              name: 'Formes équivalentes du petit théorème de Fermat',
              formula: 'p \\text{ premier},\\ p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod p \\quad \\text{et} \\quad a^{-1} \\equiv a^{p-2} \\pmod p',
              note: 'Généralisation d’Euler pour n quelconque avec pgcd(a, n) = 1 : a^φ(n) ≡ 1 [n] (base de RSA !).',
            },
            keyRule:
              'Avant d’appliquer Fermat ($a^{p-1} \\equiv 1 \\pmod p$), coche TOUJOURS les deux conditions : (1) **$p$ est premier**, et (2) **$p$ ne divise pas $a$** !',
            konanTip:
              'Fermat implique immédiatement que pour tout entier $a$, $a^5 - a$ est divisible par $5$, et même par $30$ (car $a^5 - a = a(a^2 - 1)(a^2 + 1)$ est divisible par $2$, par $3$ et par $5$, deux à deux premiers entre eux) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Sachant que $13$ est premier, quelle est la valeur de $5^{12} \\bmod 13$ et celle de $26^{12} \\bmod 13$ ?',
              options: [
                '$1$ et $1$',
                '$1$ et $0$',
                '$5$ et $0$',
                '$0$ et $1$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$13$ est premier et $13 \\nmid 5$, donc par le corollaire de Fermat, $5^{12} = 5^{13-1} \\equiv 1 \\pmod{13}$. En revanche, $13 \\mid 26$ ($26 \\equiv 0 \\pmod{13}$), donc $26^{12} \\equiv 0^{12} = 0 \\pmod{13}$ (le corollaire ne s’applique pas quand $p \\mid a$ !).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Grandes puissances',
            stepTheme: 'green',
            stepTitle: 'Méthode express pour calculer $a^k \\bmod p$ avec Fermat',
            paragraphText:
              'Pour calculer le reste de $a^k$ modulo un nombre premier $p$ lorsque $k$ est très grand (ex : $14^{3141} \\bmod 17$ ou $2026^{2026} \\bmod 11$), applique toujours ce protocole en 3 étapes sans jamais calculer $a^k$ !\n' +
              '• **Étape 1 (Réduire la base modulo $p$)** : remplace $a$ par son plus petit représentant $a_0$ (positif ou négatif) modulo $p$. Si $p \\mid a$, la réponse est immédiatement $0$.\n' +
              '• **Étape 2 (Réduire l’exposant modulo $p - 1$)** : effectue la division euclidienne de $k$ par $p - 1$ : $k = (p - 1)q + r$ ($0 \\leqslant r < p - 1$). Par Fermat, $a_0^k = (a_0^{p-1})^q \\cdot a_0^r \\equiv 1^q \\cdot a_0^r = a_0^r \\pmod p$.\n' +
              '• **Étape 3 (Calculer la petite puissance $a_0^r \\bmod p$)** : par carrés successifs ($a_0^2, a_0^4, \\dots$) en réduisant modulo $p$ après chaque multiplication !',
            formula: {
              name: 'Double réduction (base mod p, exposant mod p − 1)',
              formula: 'a \\equiv a_0 \\pmod p,\\quad k \\equiv r \\pmod{p - 1} \\implies a^k \\equiv a_0^r \\pmod p \\qquad (p \\text{ premier},\\ p \\nmid a)',
              note: 'Exemple : 2026 ≡ 2 [11] et 2026 ≡ 6 [10] ⇒ 2026²⁰²⁶ ≡ 2⁶ = 64 ≡ 9 [11] !',
            },
            keyRule:
              'Retiens le slogan : **base modulo $p$, exposant modulo $p - 1$** !',
            konanTip:
              'Pour $a_0^r \\bmod p$, si $r$ est encore proche de $p - 1$ (ex : $r = p - 2$), souviens-toi que $a_0^{p - 2} \\equiv a_0^{-1} \\pmod p$, souvent beaucoup plus rapide à trouver par Bézout !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quel est le reste de la division euclidienne de $3^{103}$ par $11$ ?',
              options: ['$1$', '$3$', '$5$', '$9$'],
              correctAnswerIndex: 2,
              explanation:
                '$11$ est premier et $11 \\nmid 3$, donc par Fermat $3^{10} \\equiv 1 \\pmod{11}$. Divisons l’exposant par $10$ : $103 = 10 \\times 10 + 3$. Donc $3^{103} = (3^{10})^{10} \\cdot 3^3 \\equiv 1 \\cdot 27 \\equiv 5 \\pmod{11}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Restes chinois',
            stepTheme: 'violet',
            stepTitle: 'Théorème des restes chinois : existence, unicité et formule constructive',
            paragraphText:
              'Formulé au IIIe siècle en Chine pour compter des soldats en les alignant par rangées de 3, 5 puis 7, le **Théorème des Restes Chinois (TRC)** est aujourd’hui au cœur du calcul parallèle, de la correction d’erreurs et de l’accélération du déchiffrement RSA.\n' +
              '• **Énoncé** : si les modulos $n_1, n_2, \\dots, n_p$ sont **deux à deux premiers entre eux** ($\\operatorname{pgcd}(n_i, n_j) = 1$ pour $i \\neq j$), alors le système $\\{x \\equiv a_k \\pmod{n_k}\\}_{1 \\leqslant k \\leqslant p}$ possède une **unique solution modulo $N = n_1 n_2 \\cdots n_p$**.\n' +
              '• **Construction explicite** : pour chaque $k$, posons $N_k = \\frac{N}{n_k}$ (produit de tous les autres modulos). Comme $\\operatorname{pgcd}(N_k, n_k) = 1$, on calcule l’inverse $u_k$ de $N_k$ modulo $n_k$ ($N_k u_k \\equiv 1 \\pmod{n_k}$). Alors $e_k = N_k u_k$ vaut $1 \\pmod{n_k}$ et $0 \\pmod{n_j}$ pour $j \\neq k$ !\n' +
              '• **Combinaison linéaire** : $x_0 = \\sum_{k=1}^p a_k N_k u_k$ vérifie automatiquement toutes les équations, et toutes les solutions sont $x \\equiv x_0 \\pmod N$ !',
            formula: {
              name: 'Propriété d’orthogonalité des idempotents eₖ = Nₖ uₖ',
              formula: 'e_k = N_k u_k \\equiv \\begin{cases} 1 \\pmod{n_k} \\\\ 0 \\pmod{n_j} \\quad (j \\neq k) \\end{cases} \\implies x_0 = \\sum_{k=1}^{p} a_k e_k',
              note: 'C’est exactement l’analogue discret de l’interpolation polynomiale de Lagrange !',
            },
            keyRule:
              'Vérifie TOUJOURS que les modulos sont **deux à deux premiers entre eux** (pas seulement globalement premiers entre eux : $6, 10, 15$ ont un PGCD global de $1$, mais $\\operatorname{pgcd}(6, 10) = 2 \\neq 1$ !).',
            konanTip:
              'Pour un système à seulement **2 congruences** ($x \\equiv a_1 \\pmod{n_1}$ et $x \\equiv a_2 \\pmod{n_2}$), la méthode par substitution est souvent encore plus rapide : pose $x = a_1 + n_1 k$, substitue dans la 2e congruence pour trouver $k \\bmod n_2$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle est l’unique solution modulo $35$ du système $\\begin{cases} x \\equiv 2 \\pmod 5 \\\\ x \\equiv 3 \\pmod 7 \\end{cases}$ ?',
              options: ['$x \\equiv 12 \\pmod{35}$', '$x \\equiv 17 \\pmod{35}$', '$x \\equiv 22 \\pmod{35}$', '$x \\equiv 31 \\pmod{35}$'],
              correctAnswerIndex: 1,
              explanation:
                'Écrivons $x = 2 + 5k$ (1re équation). La 2e devient $2 + 5k \\equiv 3 \\pmod 7 \\iff 5k \\equiv 1 \\pmod 7$. Or $5 \\times 3 = 15 \\equiv 1 \\pmod 7$, donc $k \\equiv 3 \\pmod 7$, soit $k = 3 + 7m$. Ainsi $x = 2 + 5(3 + 7m) = 17 + 35m \\equiv 17 \\pmod{35}$. Vérification : $17 = 5(3)+2$ et $17 = 7(2)+3$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Système à 3 équations',
            stepTheme: 'slate',
            stepTitle: 'Résolution complète d’un système chinois à 3 congruences',
            paragraphText:
              'Appliquons pas à pas la formule constructive du théorème des restes chinois à un système à 3 équations : $\\begin{cases} x \\equiv 1 \\pmod 3 \\\\ x \\equiv 2 \\pmod 4 \\\\ x \\equiv 3 \\pmod 5 \\end{cases}$.\n' +
              '• **Étape 1 (Vérification et $N$)** : $3, 4, 5$ sont deux à deux premiers entre eux ; $N = 3 \\times 4 \\times 5 = 60$.\n' +
              '• **Étape 2 ($N_k$ et inverses $u_k$)** :\n' +
              '  – $N_1 = 20 \\equiv 2 \\pmod 3 \\implies 2 u_1 \\equiv 1 \\pmod 3 \\implies u_1 = 2$ ($e_1 = 40$).\n' +
              '  – $N_2 = 15 \\equiv 3 \\equiv -1 \\pmod 4 \\implies (-1) u_2 \\equiv 1 \\pmod 4 \\implies u_2 = 3$ ($e_2 = 45$).\n' +
              '  – $N_3 = 12 \\equiv 2 \\pmod 5 \\implies 2 u_3 \\equiv 1 \\pmod 5 \\implies u_3 = 3$ ($e_3 = 36$).\n' +
              '• **Étape 3 (Combinaison et réduction mod 60)** : $x_0 = 1(40) + 2(45) + 3(36) = 40 + 90 + 108 = 238 = 60 \\times 3 + 58 \\equiv 58 \\pmod{60}$ ! (Remarque maline : ici $x \\equiv -2$ dans les 3 équations, donc $x \\equiv -2 \\equiv 58 \\pmod{60}$ !)',
            formula: {
              name: 'Astuce du reste négatif commun',
              formula: '\\forall k,\\ x \\equiv -r \\pmod{n_k} \\implies x \\equiv -r \\pmod{\\operatorname{ppcm}(n_1, \\dots, n_p)}',
              note: 'Pense toujours à vérifier si les différences (nₖ − aₖ) sont égales avant de lancer le gros calcul !',
            },
            keyRule:
              'Vérifie TOUJOURS ta solution finale $x_0$ dans **chacune** des congruences initiales : cela prend 5 secondes et garantit zéro faute de calcul !',
            konanTip:
              'Ici $3 - 1 = 2$, $4 - 2 = 2$ et $5 - 3 = 2$ : donc $x + 2$ est multiple commun de $3, 4$ et $5$, soit multiple de $60$, d’où $x \\equiv -2 \\equiv 58 \\pmod{60}$ en 3 secondes chrono !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quel est le plus petit entier naturel strictement positif $x$ vérifiant $\\begin{cases} x \\equiv 2 \\pmod 3 \\\\ x \\equiv 3 \\pmod 5 \\\\ x \\equiv 2 \\pmod 7 \\end{cases}$ ?',
              options: ['$13$', '$23$', '$53$', '$128$'],
              correctAnswerIndex: 1,
              explanation:
                'Testons ou résolvons : $x \\equiv 2 \\pmod 3$ et $x \\equiv 2 \\pmod 7 \\implies x \\equiv 2 \\pmod{21}$ (car $\\operatorname{pgcd}(3, 7) = 1$). On cherche $x = 2 + 21k \\equiv 3 \\pmod 5 \\iff 2 + k \\equiv 3 \\pmod 5 \\iff k \\equiv 1 \\pmod 5$. Le plus petit est $k = 1$, soit $x = 2 + 21 = 23$ (vérification : $23 = 7(3)+2 = 4(5)+3 = 3(7)+2$).',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'piege',
            stepBadge: 'Modulos non premiers',
            stepTheme: 'orange',
            stepTitle: 'Systèmes de congruences dont les modulos ne sont pas premiers entre eux',
            paragraphText:
              'Que faire lorsque les modulos d’un système partagent un diviseur commun, comme $\\begin{cases} x \\equiv 1 \\pmod 6 \\\\ x \\equiv 4 \\pmod{15} \\end{cases}$ où $\\operatorname{pgcd}(6, 15) = 3$ ? Le système peut être **compatible** (solutions modulo le PPCM) ou **incompatible** (aucune solution) !\n' +
              '• **Critère de compatibilité** : le système $x \\equiv a \\pmod m$ et $x \\equiv b \\pmod n$ admet des solutions ssi **$\\operatorname{pgcd}(m, n) \\mid (a - b)$**, et dans ce cas la solution est unique modulo $\\operatorname{ppcm}(m, n)$.\n' +
              '• **Méthode par décomposition en facteurs premiers** : on éclate chaque congruence selon les facteurs premiers du module !\n' +
              '  – $x \\equiv 1 \\pmod 6 \\iff (x \\equiv 1 \\pmod 2 \\text{ et } x \\equiv 1 \\pmod 3)$.\n' +
              '  – $x \\equiv 4 \\pmod{15} \\iff (x \\equiv 4 \\equiv 1 \\pmod 3 \\text{ et } x \\equiv 4 \\pmod 5)$.\n' +
              '  – Les deux conditions modulo $3$ sont **identiques** ($1 \\equiv 1 \\pmod 3$, compatible !). Il reste le système chinois $(1\\,[2],\\ 1\\,[3],\\ 4\\,[5])$ dont la solution unique modulo $\\operatorname{ppcm}(6, 15) = 30$ est $x \\equiv 19 \\pmod{30}$ !',
            formula: {
              name: 'Condition de compatibilité pour modulos quelconques',
              formula: '\\begin{cases} x \\equiv a \\pmod m \\\\ x \\equiv b \\pmod n \\end{cases} \\text{ a une solution} \\iff \\operatorname{pgcd}(m, n) \\mid (a - b) \\quad (\\text{unique mod } \\operatorname{ppcm}(m, n))',
              note: 'Si x ≡ 1 [6] et x ≡ 2 [15], alors pgcd(6,15) = 3 ne divise pas 2 − 1 = 1 ⇒ aucune solution !',
            },
            keyRule:
              'Lorsque les modulos ne sont pas premiers entre eux, décompose-les en puissances de nombres premiers : si deux équations imposent des restes **différents** modulo un même diviseur commun, le système est immédiatement **incompatible** ($\\mathcal{S} = \\emptyset$) !',
            konanTip:
              'Une fois la compatibilité vérifiée, la période de la solution est $\\operatorname{ppcm}(m, n)$ (et surtout PAS $m \\times n$ !).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p2_q7',
              type: 'mcq',
              prompt:
                'Que peut-on dire du système $\\begin{cases} x \\equiv 1 \\pmod 6 \\\\ x \\equiv 4 \\pmod{15} \\end{cases}$ ?',
              options: [
                'Il n’a aucune solution car $\\operatorname{pgcd}(6, 15) = 3 \\neq 1$',
                'Il admet une unique solution modulo $90$, qui est $x \\equiv 19 \\pmod{90}$',
                'Il admet une unique solution modulo $30$, qui est $x \\equiv 19 \\pmod{30}$',
                'Il admet une unique solution modulo $30$, qui est $x \\equiv 13 \\pmod{30}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$\\operatorname{pgcd}(6, 15) = 3$ divise $4 - 1 = 3$, donc le système est compatible et admet une unique solution modulo $\\operatorname{ppcm}(6, 15) = 30$. En testant $x \\equiv 4 \\pmod{15}$ : $4 \\equiv 4 \\neq 1 \\pmod 6$, mais $19 = 6(3) + 1 \\equiv 1 \\pmod 6$ et $19 = 15(1) + 4 \\equiv 4 \\pmod{15}$ ! Donc $x \\equiv 19 \\pmod{30}$.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_algebre_ch3_p3',
        order: 3,
        title: 'Applications à la cryptographie : chiffre de César, chiffrement affine et RSA',
        summary:
          'Modéliser le chiffrement de César et le chiffrement affine dans $\\mathbb{Z}/26\\mathbb{Z}$, justifier la condition de bijectivité, déchiffrer par inverse modulaire et comprendre les fondements arithmétiques du protocole RSA.',
        conceptExplanation:
          'Toute la sécurité de nos transactions bancaires, messageries chiffrées (WhatsApp, TLS/HTTPS) et signatures électroniques repose directement sur l’arithmétique modulaire vue dans ce chapitre.\n\n' +
          '• **Codage dans $\\mathbb{Z}/26\\mathbb{Z}$** : on associe chaque lettre de l’alphabet à son rang $A \\leftrightarrow 0, B \\leftrightarrow 1, \\dots, Z \\leftrightarrow 25$.\n' +
          '• **Chiffre de César** : chiffrement par translation $y \\equiv x + k \\pmod{26}$ (déchiffrement : $x \\equiv y - k \\pmod{26}$). Très faible : seulement $25$ clés non triviales (cassable instantanément par force brute ou analyse de fréquence des lettres).\n' +
          '• **Chiffrement affine** : $y \\equiv ax + b \\pmod{26}$. Pour que le message soit déchiffrable sans ambiguïté (bijection de $\\mathbb{Z}/26\\mathbb{Z}$), il faut et il suffit que **$\\operatorname{pgcd}(a, 26) = 1$** ($12$ choix possibles pour $a$, soit $12 \\times 26 = 312$ clés). Le déchiffrement vaut $x \\equiv a^{-1}(y - b) \\pmod{26}$.\n' +
          '• **Cryptographie asymétrique RSA** : on choisit deux très grands nombres premiers distincts $p$ et $q$, on pose $n = pq$ et $\\varphi(n) = (p-1)(q-1)$, une clé publique $e$ telle que $\\operatorname{pgcd}(e, \\varphi(n)) = 1$, et la clé privée $d = e^{-1} \\bmod \\varphi(n)$. Chiffrement : $C \\equiv M^e \\pmod n$ ; déchiffrement : $M \\equiv C^d \\pmod n$ (garanti par Fermat + Restes chinois !).',
        formulas: [
          {
            name: 'Chiffrement et déchiffrement affines dans ℤ/26ℤ',
            formula: 'y \\equiv ax + b \\pmod{26} \\iff x \\equiv a^{-1}(y - b) \\pmod{26} \\qquad (\\operatorname{pgcd}(a, 26) = 1)',
            note: 'Les 12 valeurs valides de a mod 26 sont : 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25 (impairs ≠ 13).',
          },
          {
            name: 'Protocole asymétrique RSA',
            formula: 'n = pq,\\quad \\varphi(n) = (p-1)(q-1),\\quad ed \\equiv 1 \\pmod{\\varphi(n)} \\implies (M^e)^d \\equiv M \\pmod n',
            note: 'Clé publique : (n, e) ; Clé privée secrète : d (calculable uniquement si l’on connaît p et q !).',
          },
        ],
        keyRule:
          'Dans un chiffrement affine $y \\equiv ax + b \\pmod{26}$, si $\\operatorname{pgcd}(a, 26) > 1$ (par exemple $a$ pair ou $a = 13$), plusieurs lettres claires donnent la **même** lettre chiffrée : le déchiffrement devient mathématiquement impossible !',
        workedExample: {
          title: 'Chiffrement/déchiffrement affine ($y \\equiv 5x + 8 \\pmod{26}$) et mini-RSA ($p=5, q=11$)',
          statement:
            '1) Avec $y \\equiv 5x + 8 \\pmod{26}$, chiffrer la lettre `K` ($10$) puis déterminer la formule de déchiffrement. 2) En mini-RSA avec $p = 5, q = 11$ et $e = 3$, calculer $n, \\varphi(n)$, la clé privée $d$, puis chiffrer et déchiffrer le message $M = 4$.',
          methodSteps: [
            '1) Chiffrement de `K` ($x = 10$) : $y \\equiv 5(10) + 8 = 58 = 2 \\times 26 + 6 \\equiv 6 \\pmod{26}$, soit la lettre `G` !',
            'Déchiffrement : $\\operatorname{pgcd}(5, 26) = 1$. Cherchons $5^{-1} \\bmod 26$ : $5 \\times 21 = 105 = 4 \\times 26 + 1 \\equiv 1 \\pmod{26}$, donc $5^{-1} \\equiv 21 \\pmod{26}$. D’où $x \\equiv 21(y - 8) \\equiv 21y - 168 \\equiv 21y + 14 \\pmod{26}$ (vérification sur `G` $= 6$ : $21(6) + 14 = 140 = 5 \\times 26 + 10 \\equiv 10 =$ `K` !).',
            '2) Mini-RSA : $n = 5 \\times 11 = 55$, $\\varphi(n) = (5 - 1)(11 - 1) = 4 \\times 10 = 40$. Comme $\\operatorname{pgcd}(3, 40) = 1$, on cherche $3d \\equiv 1 \\pmod{40}$ : $3 \\times 27 = 81 \\equiv 1 \\pmod{40}$, donc **$d = 27$**.',
            'Chiffrement de $M = 4$ : $C \\equiv 4^3 = 64 \\equiv 9 \\pmod{55}$. Déchiffrement : $C^d = 9^{27} \\pmod{55}$ : $9^2 = 81 \\equiv 26$, $9^3 \\equiv 234 \\equiv 14$, $9^6 \\equiv 196 \\equiv 31$, $9^9 \\equiv 31 \\times 14 = 434 \\equiv 49 \\equiv -6$, $9^{27} = (9^9)^3 \\equiv (-6)^3 = -216 = -4 \\times 55 + 4 \\equiv 4 = M$ !',
          ],
          conclusion:
            '`K` se chiffre en `G` avec $x \\equiv 21y + 14 \\pmod{26}$ ; en mini-RSA, $d = 27$ et $4 \\to 9 \\to 4$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Chiffre de César',
            stepTheme: 'blue',
            stepTitle: 'Codage dans $\\mathbb{Z}/26\\mathbb{Z}$ et chiffrement par décalage de César',
            paragraphText:
              'Utilisé par Jules César pour sécuriser ses dépêches militaires, le chiffre par décalage est l’application la plus directe de l’addition dans $\\mathbb{Z}/26\\mathbb{Z}$.\n' +
              '• **Numérotation** : on code l’alphabet de $0$ à $25$ (`A`=0, `B`=1, `C`=2, `D`=3, …, `Z`=25).\n' +
              '• **Chiffrement** : pour une clé de décalage $k \\in \\{0, \\dots, 25\\}$, chaque lettre de rang $x$ est transformée en la lettre de rang $y = (x + k) \\bmod 26$. Par exemple, avec le décalage classique $k = 3$, `A`(0)$\\to$`D`(3), `X`(23)$\\to$`A`(0), `Z`(25)$\\to$`C`(2).\n' +
              '• **Application sur un mot** : avec $k = 3$, le mot `BON` (`1, 14, 13`) devient `4, 17, 16`, soit `ERQ` !',
            formula: {
              name: 'Bijection de César dans ℤ/26ℤ',
              formula: 'E_k(x) = (x + k) \\bmod 26, \\qquad D_k(y) = (y - k) \\bmod 26',
              note: 'La translation x ↦ x + k est toujours bijective sur ℤ/nℤ quelle que soit la valeur de k.',
            },
            keyRule:
              'Attention à l’indexation en cryptographie mathématique : **`A` vaut $0$** et **`Z` vaut $25$** (et non $1$ à $26$), afin que le modulo $26$ fonctionne directement sans décalage !',
            konanTip:
              'Un cas particulier célèbre utilisé sur Internet pour masquer les spoilers est `ROT13` ($k = 13$) : comme $13 + 13 = 26 \\equiv 0 \\pmod{26}$, `ROT13` est **involutif** (chiffrer et déchiffrer sont la même opération) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Avec le codage `A`=0, `B`=1, …, `Z`=25 et le chiffre de César de décalage $k = 5$, en quelle lettre est chiffrée la lettre `Y` (rang $24$) ?',
              options: [
                '`C` (rang $2$)',
                '`D` (rang $3$)',
                '`E` (rang $4$)',
                '`T` (rang $19$)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On calcule $(24 + 5) \\bmod 26 = 29 \\bmod 26 = 3$. Comme `A`=0, `B`=1, `C`=2, `D`=3, la lettre chiffrée est `D`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Cryptanalyse',
            stepTheme: 'orange',
            stepTitle: 'Déchiffrement de César et vulnérabilités (force brute et fréquences)',
            paragraphText:
              'Pourquoi le chiffre de César — et plus généralement tout chiffrement par substitution monoalphabétique — n’est-il plus jamais utilisé pour protéger des données sensibles ?\n' +
              '• **Déchiffrement légitime** : si l’on connaît la clé $k$, il suffit de décaler de $k$ vers la gauche : $x = (y - k) \\bmod 26$ (en ajoutant $26$ si $y - k < 0$).\n' +
              '• **Attaque par force brute** : il n’existe que **$25$ clés** non triviales ($k = 1$ à $25$). Un ordinateur — et même un humain en deux minutes — teste les $25$ décalages et lit immédiatement le message en clair !\n' +
              '• **Attaque par analyse fréquentielle** : en français, la lettre `E` représente environ $15\\%$ à $17\\%$ d’un texte ! La lettre la plus fréquente du texte chiffré correspond presque sûrement à `E`, ce qui révèle instantanément $k = (y_{\\max} - 4) \\bmod 26$ !',
            formula: {
              name: 'Récupération de la clé de César par lettre la plus fréquente',
              formula: 'y_{\\text{max}} \\text{ correspond à E (rang 4)} \\implies k \\equiv y_{\\text{max}} - 4 \\pmod{26}',
              note: 'Un bon chiffrement moderne (comme AES ou RSA) masque totalement les statistiques de fréquence du message clair.',
            },
            keyRule:
              'Selon le principe de Kerckhoffs (base de la cybersécurité moderne), la sécurité d’un système ne doit JAMAIS reposer sur le secret de l’algorithme, mais uniquement sur la taille et le secret de la **clé** !',
            konanTip:
              'Pour déchiffrer `C`(2) avec $k = 5$, calcule $2 - 5 = -3 \\equiv -3 + 26 = 23$, soit `X` !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'On intercepte un long texte français chiffré par César dans lequel la lettre la plus fréquente est `L` (rang $11$). Sachant que la lettre la plus fréquente en français est `E` (rang $4$), quelle est la clé probable $k$ du décalage ?',
              options: ['$k = 6$', '$k = 7$', '$k = 15$', '$k = 19$'],
              correctAnswerIndex: 1,
              explanation:
                'Si `E` (rang $4$) a été chiffré en `L` (rang $11$), alors $4 + k \\equiv 11 \\pmod{26}$, soit $k = 11 - 4 = 7$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Chiffrement affine',
            stepTheme: 'violet',
            stepTitle: 'Chiffrement affine $y \\equiv ax + b \\pmod{26}$ et condition de bijectivité',
            paragraphText:
              'Pour agrandir l’espace des clés tout en restant dans $\\mathbb{Z}/26\\mathbb{Z}$, le chiffrement affine combine une multiplication par $a$ et une translation par $b$ : $f(x) = (ax + b) \\bmod 26$.\n' +
              '• **Condition de déchiffrement unique** : le chiffrement est exploitable ssi $f : \\mathbb{Z}/26\\mathbb{Z} \\to \\mathbb{Z}/26\\mathbb{Z}$ est **bijective** (comme l’ensemble est fini, il suffit qu’elle soit injective !).\n' +
              '• **Preuve arithmétique** : $ax_1 + b \\equiv ax_2 + b \\pmod{26} \\iff a(x_1 - x_2) \\equiv 0 \\pmod{26}$. Cela entraîne $x_1 \\equiv x_2 \\pmod{26}$ pour tous $x_1, x_2$ si et seulement si **$\\operatorname{pgcd}(a, 26) = 1$** !\n' +
              '• **Exemple de collision si $\\operatorname{pgcd}(a, 26) > 1$** : si $a = 2, b = 0$, alors `A`($0$) et `N`($13$) se chiffrent toutes les deux en `A`($0$), car $2 \\times 13 = 26 \\equiv 0 \\pmod{26}$ : message irrécupérable !',
            formula: {
              name: 'Condition de validité d’une clé affine (a, b) mod 26',
              formula: 'f(x) = (ax + b) \\bmod 26 \\text{ bijective} \\iff \\operatorname{pgcd}(a, 26) = 1 \\iff a \\text{ impair et } a \\neq 13',
              note: 'Nombre de clés affines valides : φ(26) × 26 = 12 × 26 = 312 (dont 311 clés non triviales).',
            },
            keyRule:
              'Comme $26 = 2 \\times 13$, un entier $a \\in \\{0, \\dots, 25\\}$ est valide pour un chiffrement affine si et seulement si $a$ est **impair et différent de $13$** !',
            konanTip:
              'Attention : le paramètre $b$ peut prendre **n’importe quelle** des $26$ valeurs de $0$ à $25$ (y compris $b = 0$ ou $b$ pair) ; seule la pente $a$ subit la contrainte $\\operatorname{pgcd}(a, 26) = 1$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Parmi les fonctions affines suivantes sur $\\mathbb{Z}/26\\mathbb{Z}$, laquelle définit un chiffrement **valide (bijectif)** ?',
              options: [
                '$y \\equiv 4x + 7 \\pmod{26}$',
                '$y \\equiv 13x + 5 \\pmod{26}$',
                '$y \\equiv 11x + 6 \\pmod{26}$',
                '$y \\equiv 6x + 1 \\pmod{26}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Il faut $\\operatorname{pgcd}(a, 26) = 1$. Or $\\operatorname{pgcd}(4, 26) = 2$, $\\operatorname{pgcd}(13, 26) = 13$ et $\\operatorname{pgcd}(6, 26) = 2$. Seule $a = 11$ vérifie $\\operatorname{pgcd}(11, 26) = 1$ (la valeur paire $b = 6$ ne pose aucun problème).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Déchiffrement affine',
            stepTheme: 'green',
            stepTitle: 'Inverser un chiffrement affine grâce à l’inverse modulaire $a^{-1} \\bmod 26$',
            paragraphText:
              'Pour déchiffrer un message chiffré par $y \\equiv ax + b \\pmod{26}$ (avec $\\operatorname{pgcd}(a, 26) = 1$), on isole $x$ en deux temps, exactement comme une équation affine réelle, sauf que la division par $a$ est remplacée par la multiplication par son **inverse modulaire** $a’ = a^{-1} \\bmod 26$ !\n' +
              '• **Étape 1** : isoler $ax \\equiv y - b \\pmod{26}$.\n' +
              '• **Étape 2** : calculer $a’ \\in \\{1, \\dots, 25\\}$ tel que $a a’ \\equiv 1 \\pmod{26}$ (par Euclide étendu), puis multiplier les deux membres : $x \\equiv a’(y - b) \\equiv a’y + (-a’b \\bmod 26) \\pmod{26}$.\n' +
              '• **Exemple** : pour $y \\equiv 3x + 4 \\pmod{26}$, comme $3 \\times 9 = 27 \\equiv 1 \\pmod{26}$, on a $a’ = 9$, donc $x \\equiv 9(y - 4) = 9y - 36 \\equiv 9y + 16 \\pmod{26}$ !',
            formula: {
              name: 'Formule de déchiffrement affine',
              formula: 'y \\equiv ax + b \\pmod{26} \\iff x \\equiv a’ y + b’ \\pmod{26} \\quad \\text{avec } a’ = a^{-1} \\bmod 26 \\text{ et } b’ \\equiv -a’b \\pmod{26}',
              note: 'La réciproque d’une fonction affine mod 26 est encore une fonction affine mod 26 !',
            },
            keyRule:
              'Ne jamais écrire $x = \\frac{y - b}{a}$ dans $\\mathbb{Z}/26\\mathbb{Z}$ ! Il n’y a pas de fractions dans $\\mathbb{Z}/26\\mathbb{Z}$ : on multiplie toujours par l’entier $a^{-1} \\bmod 26$.',
            konanTip:
              'Vérifie immédiatement ta formule de déchiffrement en chiffrant $x = 0$ ($y = b$) et $x = 1$ ($y = a + b$), puis en les repassant dans ta formule inverse : tu dois retomber sur $0$ et $1$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'On chiffre un message dans $\\mathbb{Z}/26\\mathbb{Z}$ par $y \\equiv 9x + 2 \\pmod{26}$. Sachant que $9^{-1} \\equiv 3 \\pmod{26}$, quelle est la formule de déchiffrement ?',
              options: [
                '$x \\equiv 3y - 2 \\pmod{26}$',
                '$x \\equiv 3y + 20 \\pmod{26}$',
                '$x \\equiv 3y + 6 \\pmod{26}$',
                '$x \\equiv 9y + 20 \\pmod{26}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On multiplie $9x \\equiv y - 2 \\pmod{26}$ par $3$ : $x \\equiv 3(y - 2) = 3y - 6 \\equiv 3y + 20 \\pmod{26}$ (car $-6 + 26 = 20$). Vérification pour $x = 0 \\implies y = 2 \\implies 3(2) + 20 = 26 \\equiv 0$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Protocole RSA',
            stepTheme: 'blue',
            stepTitle: 'Cryptographie asymétrique RSA : génération des clés $(n, e)$ et $d$',
            paragraphText:
              'Dans César ou le chiffrement affine (cryptographie **symétrique**), l’émetteur et le destinataire doivent partager la même clé secrète — problème majeur sur Internet ! En 1977, Rivest, Shamir et Adleman ont inventé **RSA** (cryptographie **asymétrique** à clé publique), entièrement basé sur l’arithmétique modulaire.\n' +
              '• **Étape 1 (Secret)** : Alice choisit deux très grands nombres premiers distincts $p$ et $q$ (de plus de $300$ chiffres chacun en production) et calcule le module public $n = pq$ ainsi que l’indicatrice d’Euler secrète $\\varphi(n) = (p - 1)(q - 1)$.\n' +
              '• **Étape 2 (Clé publique $e$)** : Alice choisit un exposant $e$ tel que $\\operatorname{pgcd}(e, \\varphi(n)) = 1$ (souvent $e = 65537$) et publie le couple $(n, e)$ à la terre entière.\n' +
              '• **Étape 3 (Clé privée $d$)** : Alice calcule par Euclide étendu l’unique inverse $d \\in \\{1, \\dots, \\varphi(n) - 1\\}$ tel que **$ed \\equiv 1 \\pmod{\\varphi(n)}$** et le garde strictement secret !',
            formula: {
              name: 'Équations de génération et d’usage des clés RSA',
              formula: 'ed \\equiv 1 \\pmod{(p - 1)(q - 1)}, \\qquad C \\equiv M^e \\pmod n, \\qquad M \\equiv C^d \\pmod n',
              note: 'N’importe qui peut chiffrer avec (n, e), mais SEULE Alice peut déchiffrer avec d !',
            },
            keyRule:
              'Attention au module dans chaque étape de RSA : le chiffrement/déchiffrement se fait **modulo $n = pq$**, tandis que le calcul de la clé privée $d = e^{-1}$ se fait **modulo $\\varphi(n) = (p - 1)(q - 1)$** !',
            konanTip:
              'RSA permet aussi la **signature électronique** en inversant les rôles : Alice signe un condensat $H$ en calculant $S = H^d \\bmod n$ (avec sa clé privée), et n’importe qui vérifie $S^e \\equiv H \\pmod n$ avec sa clé publique !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Dans un mini-système RSA avec $p = 7$, $q = 11$ et exposant public $e = 13$, quelles sont les valeurs de $n$, $\\varphi(n)$ et de la clé privée $d$ ?',
              options: [
                '$n = 77$, $\\varphi(n) = 60$, $d = 37$',
                '$n = 77$, $\\varphi(n) = 76$, $d = 37$',
                '$n = 77$, $\\varphi(n) = 60$, $d = 13$',
                '$n = 77$, $\\varphi(n) = 60$, $d = 7$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$n = 7 \\times 11 = 77$ et $\\varphi(n) = (7 - 1)(11 - 1) = 6 \\times 10 = 60$. On cherche $d$ tel que $13d \\equiv 1 \\pmod{60}$. Or $13 \\times 37 = 481 = 8 \\times 60 + 1 \\equiv 1 \\pmod{60}$ (par Euclide : $60 = 13(4) + 8$, $13 = 8(1) + 5$, $8 = 5(1) + 3$, $5 = 3(1) + 2$, $3 = 2(1) + 1 \\implies -23 \\equiv 37 \\pmod{60}$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Preuve & Sécurité RSA',
            stepTheme: 'violet',
            stepTitle: 'Pourquoi RSA fonctionne (Fermat + Restes chinois) et d’où vient sa sécurité',
            paragraphText:
              'La preuve mathématique que le déchiffrement RSA restitue **toujours** le message original $M$ (pour tout $0 \\leqslant M < n$) est un chef-d’œuvre qui réunit en trois lignes le petit théorème de Fermat et le théorème des restes chinois !\n' +
              '• **Preuve modulo $p$** : comme $ed \\equiv 1 \\pmod{(p - 1)(q - 1)}$, il existe $k \\in \\mathbb{N}$ tel que $ed = 1 + k(p - 1)(q - 1)$. Si $p \\mid M$, alors $M^{ed} \\equiv 0 \\equiv M \\pmod p$. Si $p \\nmid M$, par Fermat $M^{p - 1} \\equiv 1 \\pmod p$, donc $M^{ed} = M \\cdot (M^{p - 1})^{k(q - 1)} \\equiv M \\cdot 1 = M \\pmod p$ !\n' +
              '• **Conclusion par le TRC** : symétriquement, $M^{ed} \\equiv M \\pmod q$. Comme $p$ et $q$ sont premiers distincts ($\\operatorname{pgcd}(p, q) = 1$), le théorème des restes chinois implique **$M^{ed} \\equiv M \\pmod{pq}$** !\n' +
              '• **Fondement de la sécurité** : multiplier deux nombres premiers de $300$ chiffres prend une fraction de milliseconde, mais **factoriser** leur produit $n$ de $600$ chiffres pour retrouver $p, q$ et donc $\\varphi(n)$ demande des millénaires aux supercalculateurs classiques !',
            formula: {
              name: 'Cœur de la preuve de correction de RSA',
              formula: '\\begin{cases} M^{ed} \\equiv M \\pmod p \\\\ M^{ed} \\equiv M \\pmod q \\end{cases} \\xrightarrow{\\text{TRC } (p \\neq q)} M^{ed} \\equiv M \\pmod{pq}',
              note: 'Valable même si pgcd(M, n) ≠ 1 !',
            },
            keyRule:
              'La sécurité de RSA repose sur l’**asymétrie de complexité** entre la multiplication (triviale) et la factorisation d’un grand entier $n = pq$ (extrêmement difficile).',
            konanTip:
              'Tu viens de voir la boucle parfaite de tout ce chapitre : Euclide étendu (calcul de $d$) + Petit théorème de Fermat + Théorème des restes chinois = le cadenas HTTPS de ton navigateur web !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Si un attaquant parvient à factoriser le module public $n = pq$ d’une clé RSA $(n, e)$, pourquoi peut-il immédiatement casser le chiffrement ?',
              options: [
                'Parce que $p$ est directement la clé privée',
                'Parce qu’il peut alors calculer $\\varphi(n) = (p - 1)(q - 1)$ puis retrouver la clé privée $d = e^{-1} \\bmod \\varphi(n)$ par l’algorithme d’Euclide étendu',
                'Parce que $C^e \\equiv M \\pmod p$',
                'Parce que $\\operatorname{pgcd}(p, q)$ lui donne le message en clair',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dès que $p$ et $q$ sont connus, le calcul de $\\varphi(n) = (p - 1)(q - 1)$ est instantané, et l’algorithme d’Euclide étendu fournit en quelques millisecondes l’inverse modulaire $d = e^{-1} \\bmod \\varphi(n)$, qui permet de déchiffrer tous les messages !',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 4 : Nombres complexes dans C
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algebre_ch4',
    subjectId: 'lmd_algebre',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Algèbre 1',
    title: 'Chapitre 4 — Nombres complexes dans $\\mathbb{C}$',
    summary:
      'Forme algébrique et conjugué, module et argument (formes trigonométrique et exponentielle $re^{i\\theta}$), formules de Moivre et d’Euler, linéarisation trigonométrique, racines carrées, équations du second degré dans $\\mathbb{C}$, racines $n$-ièmes de l’unité et transformations géométriques.',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_algebre_ch4_p1',
        order: 1,
        title: 'Forme algébrique, conjugué, module et argument ($re^{i\\theta}$)',
        summary:
          'Manipuler la forme algébrique $a + ib$ et le conjugué $\\bar{z}$, calculer module et argument, passer aux formes trigonométrique et exponentielle et interpréter géométriquement dans le plan complexe.',
        conceptExplanation:
          'L’ensemble $\\mathbb{C}$ prolonge $\\mathbb{R}$ en introduisant l’unité imaginaire $i$ vérifiant $i^2 = -1$, permettant de résoudre toute équation polynomiale ainsi que de modéliser les signaux sinusoïdaux, les circuits électriques alternatifs et les rotations en infographie.\n\n' +
          '• **Forme algébrique et conjugué** : tout $z \\in \\mathbb{C}$ s’écrit de façon unique $z = a + ib$ avec $a = \\operatorname{Re}(z) \\in \\mathbb{R}$ et $b = \\operatorname{Im}(z) \\in \\mathbb{R}$. Son conjugué est $\\bar{z} = a - ib$, avec $z\\bar{z} = a^2 + b^2 \\in \\mathbb{R}_+$.\n' +
          '• **Module et distance** : $|z| = \\sqrt{a^2 + b^2} = \\sqrt{z\\bar{z}}$ vérifie $|zz’| = |z||z’|$ et l’inégalité triangulaire $|z + z’| \\leqslant |z| + |z’|$. Géométriquement, $AB = |z_B - z_A|$.\n' +
          '• **Formes trigonométrique et exponentielle** : tout $z \\neq 0$ s’écrit $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$ où $r = |z| > 0$ et $\\theta \\equiv \\arg(z) \\pmod{2\\pi}$. Le produit additionne les arguments : $e^{i\\theta} e^{i\\theta’} = e^{i(\\theta + \\theta’)}$.',
        formulas: [
          {
            name: 'Forme algébrique, conjugué et inverse',
            formula: 'z = a + ib,\\quad \\bar{z} = a - ib,\\quad z\\bar{z} = a^2 + b^2 = |z|^2,\\quad \\frac{1}{z} = \\frac{\\bar{z}}{|z|^2}',
            note: 'On élimine toujours i du dénominateur en multipliant haut et bas par le conjugué.',
          },
          {
            name: 'Formes trigonométrique et exponentielle',
            formula: 'z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta} \\quad (r = |z| > 0),\\qquad \\cos\\theta = \\frac{a}{r},\\quad \\sin\\theta = \\frac{b}{r}',
            note: 'Règle d’or : r doit toujours être STRICTEMENT POSITIF pour que r soit le module et θ un argument.',
          },
          {
            name: 'Propriétés du module et de l’argument',
            formula: '|z z’| = |z|\\,|z’|,\\quad \\arg(z z’) \\equiv \\arg(z) + \\arg(z’) \\pmod{2\\pi},\\quad \\arg\\!\\left(\\frac{z}{z’}\\right) \\equiv \\arg(z) - \\arg(z’) \\pmod{2\\pi}',
            note: 'Et pour le conjugué : |z̄| = |z| et arg(z̄) ≡ −arg(z) [2π].',
          },
        ],
        keyRule:
          'Un nombre complexe $z = r e^{i\\theta}$ n’est sous forme exponentielle valide que si $r > 0$ : si tu obtiens $-2 e^{i\\pi/3}$, remplace $-1$ par $e^{i\\pi}$ pour obtenir $2 e^{i(\\pi/3 + \\pi)} = 2 e^{i 4\\pi/3}$ (ou $2 e^{-2i\\pi/3}$).',
        workedExample: {
          title: 'Quotient sous forme algébrique, passage en forme exponentielle et calcul de puissance',
          statement:
            'On pose $z_1 = 1 + i\\sqrt{3}$ et $z_2 = 1 - i$. 1) Mettre $Z = \\frac{z_1}{z_2}$ sous forme algébrique. 2) Écrire $z_1$, $z_2$ et $Z$ sous forme exponentielle. 3) En déduire les valeurs exactes de $\\cos\\frac{7\\pi}{12}$ et $\\sin\\frac{7\\pi}{12}$.',
          methodSteps: [
            '1) On multiplie numérateur et dénominateur par $\\overline{z_2} = 1 + i$ : $Z = \\frac{(1 + i\\sqrt{3})(1 + i)}{(1 - i)(1 + i)} = \\frac{1 - \\sqrt{3} + i(1 + \\sqrt{3})}{2} = \\frac{1 - \\sqrt{3}}{2} + i\\frac{1 + \\sqrt{3}}{2}$.',
            '2) Pour $z_1 = 1 + i\\sqrt{3}$ : $|z_1| = \\sqrt{1 + 3} = 2$, $\\cos\\theta_1 = \\frac{1}{2}$ et $\\sin\\theta_1 = \\frac{\\sqrt{3}}{2}$, donc $z_1 = 2 e^{i\\pi/3}$.',
            'Pour $z_2 = 1 - i$ : $|z_2| = \\sqrt{1 + 1} = \\sqrt{2}$, $\\cos\\theta_2 = \\frac{1}{\\sqrt{2}}$ et $\\sin\\theta_2 = -\\frac{1}{\\sqrt{2}}$, donc $z_2 = \\sqrt{2} e^{-i\\pi/4}$.',
            'Ainsi $Z = \\frac{2 e^{i\\pi/3}}{\\sqrt{2} e^{-i\\pi/4}} = \\sqrt{2} e^{i(\\pi/3 + \\pi/4)} = \\sqrt{2} e^{i 7\\pi/12} = \\sqrt{2}\\left(\\cos\\frac{7\\pi}{12} + i\\sin\\frac{7\\pi}{12}\\right)$.',
            '3) En identifiant les parties réelle et imaginaire entre la forme algébrique et la forme trigonométrique : $\\cos\\frac{7\\pi}{12} = \\frac{1 - \\sqrt{3}}{2\\sqrt{2}} = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$ et $\\sin\\frac{7\\pi}{12} = \\frac{1 + \\sqrt{3}}{2\\sqrt{2}} = \\frac{\\sqrt{2} + \\sqrt{6}}{4}$.',
          ],
          conclusion:
            '$Z = \\frac{1 - \\sqrt{3}}{2} + i\\frac{1 + \\sqrt{3}}{2} = \\sqrt{2} e^{i 7\\pi/12}$, ce qui fournit $\\cos\\frac{7\\pi}{12} = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$ et $\\sin\\frac{7\\pi}{12} = \\frac{\\sqrt{2} + \\sqrt{6}}{4}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Forme algébrique',
            stepTheme: 'blue',
            stepTitle: 'L’ensemble $\\mathbb{C}$, unicité de l’écriture $a + ib$ et puissances de $i$',
            paragraphText:
              'Dans $\\mathbb{R}$, aucun nombre élevé au carré n’est négatif : l’équation $x^2 + 1 = 0$ n’a pas de solution réelle. On construit $\\mathbb{C}$ en adjoignant un élément $i$ tel que $i^2 = -1$.\n' +
              '• **Unicité de la forme algébrique** : tout $z \\in \\mathbb{C}$ s’écrit de façon unique $z = a + ib$ avec $a = \\operatorname{Re}(z) \\in \\mathbb{R}$ et $b = \\operatorname{Im}(z) \\in \\mathbb{R}$. En particulier, $a + ib = a’ + ib’ \\iff (a = a’ \\text{ et } b = b’)$.\n' +
              '• **Réels et imaginaires purs** : $z \\in \\mathbb{R} \\iff \\operatorname{Im}(z) = 0$ ; $z \\in i\\mathbb{R} \\iff \\operatorname{Re}(z) = 0$.\n' +
              '• **Cycle des puissances de $i$** : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, donc $i^n = i^{n \\bmod 4}$ ! Par exemple, $i^{2026} = i^{2} = -1$ car $2026 = 4 \\times 506 + 2$.',
            formula: {
              name: 'Unicité de la forme algébrique et périodicité de iⁿ',
              formula: 'a + ib = 0 \\iff a = 0 \\text{ et } b = 0 ; \\qquad i^{4k+r} = i^r \\quad (r \\in \\{0, 1, 2, 3\\})',
              note: 'Attention : Im(z) = b est un nombre RÉEL (sans le i !). Pour z = 3 − 5i, Im(z) = −5 et non −5i.',
            },
            keyRule:
              'Il n’existe PAS de relation d’ordre compatible avec les opérations dans $\\mathbb{C}$ : on n’écrit jamais $z_1 < z_2$ ou $i > 0$ pour des complexes non réels !',
            konanTip:
              'Pour calculer $i^n$ instantanément, regarde uniquement les deux derniers chiffres de $n$ (critère de divisibilité par $4$) : pour $i^{1975}$, comme $75 = 4 \\times 18 + 3$, on obtient $i^3 = -i$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle est la forme algébrique de $z = (2 - 3i)^2 + i^{2027}$ ?',
              options: [
                '$-5 - 13i$',
                '$-5 - 11i$',
                '$13 - 13i$',
                '$4 - 13i$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$(2 - 3i)^2 = 4 - 12i + 9i^2 = 4 - 9 - 12i = -5 - 12i$. Comme $2027 = 4 \\times 506 + 3$, $i^{2027} = i^3 = -i$. D’où $z = -5 - 12i - i = -5 - 13i$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Conjugué & Quotient',
            stepTheme: 'green',
            stepTitle: 'Conjugué $\\bar{z}$ et mise sous forme algébrique d’un quotient',
            paragraphText:
              'Le **conjugué** de $z = a + ib$ est le complexe $\\bar{z} = a - ib$ obtenu en changeant le signe de sa partie imaginaire. Il joue un rôle central dans la résolution d’équations et la division dans $\\mathbb{C}$.\n' +
              '• **Propriétés algébriques** : $\\overline{z + z’} = \\bar{z} + \\overline{z’}$, $\\overline{z \\cdot z’} = \\bar{z} \\cdot \\overline{z’}$, $\\overline{(z/z’)} = \\bar{z} / \\overline{z’}$ et $\\overline{z^n} = (\\bar{z})^n$.\n' +
              '• **Caractérisations utiles** : $z \\in \\mathbb{R} \\iff \\bar{z} = z$ ; $z \\in i\\mathbb{R} \\iff \\bar{z} = -z$ ; $\\operatorname{Re}(z) = \\frac{z + \\bar{z}}{2}$ et $\\operatorname{Im}(z) = \\frac{z - \\bar{z}}{2i}$.\n' +
              '• **Division par $z = a + ib \\neq 0$** : comme $z\\bar{z} = a^2 + b^2$ est un réel strictement positif, on multiplie numérateur et dénominateur par $\\bar{z}$ : par exemple, $\\frac{3 + i}{1 - 2i} = \\frac{(3 + i)(1 + 2i)}{1^2 + 2^2} = \\frac{1 + 7i}{5} = \\frac{1}{5} + \\frac{7}{5}i$.',
            formula: {
              name: 'Identités du conjugué et quotient complexe',
              formula: 'z\\bar{z} = a^2 + b^2, \\quad \\operatorname{Re}(z) = \\frac{z + \\bar{z}}{2}, \\quad \\operatorname{Im}(z) = \\frac{z - \\bar{z}}{2i}, \\quad \\frac{u}{a + ib} = \\frac{u(a - ib)}{a^2 + b^2}',
              note: 'Attention au facteur 2i (avec i !) au dénominateur de Im(z).',
            },
            keyRule:
              'Pour démontrer rapidement qu’une expression complexe $Z$ est réelle (resp. imaginaire pure), vérifie si $\\overline{Z} = Z$ (resp. $\\overline{Z} = -Z$) sans même passer par $a + ib$ !',
            konanTip:
              'Pour calculer $(a + ib)(a - ib)$, ne développe jamais quatre termes : applique directement $a^2 + b^2$ (somme des carrés, avec un **PLUS**, car $-i^2 b^2 = +b^2$) !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle est la forme algébrique du quotient $Z = \\frac{5 + i}{2 - i}$ ?',
              options: [
                '$\\frac{9}{5} + \\frac{7}{5}i$',
                '$\\frac{11}{5} + \\frac{7}{5}i$',
                '$\\frac{9}{3} + \\frac{7}{3}i$',
                '$\\frac{9}{5} - \\frac{3}{5}i$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On multiplie haut et bas par $\\overline{2 - i} = 2 + i$ : le dénominateur vaut $2^2 + 1^2 = 5$, et le numérateur $(5 + i)(2 + i) = 10 + 5i + 2i + i^2 = 9 + 7i$. Donc $Z = \\frac{9}{5} + \\frac{7}{5}i$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Module & Distance',
            stepTheme: 'violet',
            stepTitle: 'Module $|z|$, propriétés multiplicatives et inégalité triangulaire',
            paragraphText:
              'Dans le plan muni d’un repère orthonormé $(O ; \\vec{u}, \\vec{v})$, si $M$ a pour affixe $z = a + ib$, la longueur $OM$ vaut par le théorème de Pythagore $\\sqrt{a^2 + b^2}$, appelée **module** de $z$.\n' +
              '• **Lien avec le conjugué** : $|z| = \\sqrt{z\\bar{z}}$, soit $|z|^2 = z\\bar{z}$. Ce réflexe évite des racines carrées pénibles !\n' +
              '• **Règles de calcul** : $|z z’| = |z|\\,|z’|$, $|z^n| = |z|^n$ ($n \\in \\mathbb{Z}$), $\\left|\\frac{z}{z’}\\right| = \\frac{|z|}{|z’|}$ ($z’ \\neq 0$), et $|\\bar{z}| = |-z| = |z|$.\n' +
              '• **Inégalité triangulaire** : $\\big||z| - |z’|\\big| \\leqslant |z + z’| \\leqslant |z| + |z’|$, avec égalité $|z + z’| = |z| + |z’|$ ssi $z$ et $z’$ ont le même argument (ou l’un est nul).\n' +
              '• **Exemple** : $\\left|\\frac{(3 + 4i)^3}{(1 - i)^4}\\right| = \\frac{|3 + 4i|^3}{|1 - i|^4} = \\frac{5^3}{(\\sqrt{2})^4} = \\frac{125}{4}$ sans jamais développer !',
            formula: {
              name: 'Propriétés du module et inégalité triangulaire',
              formula: '|z|^2 = z\\bar{z}, \\qquad |z^n| = |z|^n, \\qquad \\big||z| - |z’|\\big| \\leqslant |z + z’| \\leqslant |z| + |z’|',
              note: 'La distance entre deux points A(z_A) et B(z_B) est AB = |z_B − z_A|.',
            },
            keyRule:
              'Pour calculer le module d’un produit ou d’un quotient de puissances, ne mets JAMAIS sous forme algébrique : distribue directement le module sur chaque facteur et chaque exposant !',
            konanTip:
              'Retiens le triplet pythagoricien $(3, 4, 5)$ : $|3 + 4i| = 5$, $|5 + 12i| = 13$, $|1 + i| = \\sqrt{2}$, $|1 + i\\sqrt{3}| = 2$. Tu gagneras de précieuses minutes en examen !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Quel est le module du nombre complexe $Z = \\frac{(3 - 4i)^2}{(1 + i\\sqrt{3})^3}$ ?',
              options: [
                '$\\frac{25}{8}$',
                '$\\frac{5}{2}$',
                '$\\frac{25}{4}$',
                '$\\frac{7}{8}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On utilise les propriétés du module : $|3 - 4i| = \\sqrt{3^2 + (-4)^2} = 5$ et $|1 + i\\sqrt{3}| = \\sqrt{1 + 3} = 2$. Donc $|Z| = \\frac{|3 - 4i|^2}{|1 + i\\sqrt{3}|^3} = \\frac{5^2}{2^3} = \\frac{25}{8}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Plan complexe',
            stepTheme: 'blue',
            stepTitle: 'Argument, forme trigonométrique, forme exponentielle $r e^{i\\theta}$ et lecture graphique',
            paragraphText:
              'Repérer un point $M(a, b)$ par ses coordonnées polaires $(r, \\theta)$ plutôt que cartésiennes $(a, b)$ rend les multiplications et puissances élémentaires.\n' +
              '• **Définition** : pour $z = a + ib \\neq 0$, on pose $r = |z| > 0$. Un **argument** $\\theta$ de $z$ (noté $\\arg(z)$) est une mesure en radians de l’angle orienté $(\\vec{u}, \\overrightarrow{OM})$, définie modulo $2\\pi$ par $\\cos\\theta = \\frac{a}{r}$ et $\\sin\\theta = \\frac{b}{r}$.\n' +
              '• **Notation d’Euler** : en posant $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ (module $1$, argument $\\theta$), on obtient $z = r e^{i\\theta}$.\n' +
              '• **Exemple** : pour $z = -\\sqrt{3} + i$, $r = \\sqrt{3 + 1} = 2$, $\\cos\\theta = -\\frac{\\sqrt{3}}{2}$ et $\\sin\\theta = \\frac{1}{2}$ (quadrant II) $\\implies \\theta = \\frac{5\\pi}{6}$, soit $z = 2 e^{i 5\\pi/6}$.',
            formula: {
              name: 'Passage forme algébrique ↔ forme exponentielle',
              formula: 'z = a + ib = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}, \\qquad r = \\sqrt{a^2 + b^2}, \\quad \\begin{cases} \\cos\\theta = a/r \\\\ \\sin\\theta = b/r \\end{cases}',
              note: 'L’argument principal est l’unique valeur θ ∈ ]−π, π].',
            },
            keyRule:
              'Ne détermine JAMAIS $\\theta$ uniquement avec $\\arctan(b/a)$ ! Vérifie toujours les **signes** de $a$ ($\cos\\theta$) et $b$ ($\sin\\theta$) pour placer $M$ dans le bon quadrant.',
            konanTip:
              'Sur le schéma ci-dessous, observe la symétrie par rapport à l’axe réel : $z = a + ib = r e^{i\\theta}$ et $\\bar{z} = a - ib = r e^{-i\\theta}$ ont le même module $r$ et des arguments opposés !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Représentation géométrique de z = a + ib = r·e^(iθ) et de son conjugué z̄',
              caption: 'Coordonnées cartésiennes (a, b) et polaires (r, θ) dans le plan complexe ; symétrie de z̄ par rapport à l’axe réel.',
              svgContent:
                '<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">' +
                '<rect x="8" y="8" width="424" height="214" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
                '<line x1="40" y1="120" x2="380" y2="120" stroke="#475569" stroke-width="1.8"/>' +
                '<polygon points="380,120 372,116 372,124" fill="#475569"/>' +
                '<line x1="140" y1="212" x2="140" y2="20" stroke="#475569" stroke-width="1.8"/>' +
                '<polygon points="140,20 136,28 144,28" fill="#475569"/>' +
                '<text x="386" y="124" font-size="12" font-weight="700" fill="#334155">Re(z)</text>' +
                '<text x="148" y="29" font-size="12" font-weight="700" fill="#334155">Im(z)</text>' +
                '<text x="126" y="135" font-size="12" font-weight="700" fill="#334155">O</text>' +
                '<line x1="140" y1="120" x2="180" y2="120" stroke="#0f172a" stroke-width="2.5"/>' +
                '<text x="160" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">u⃗</text>' +
                '<line x1="140" y1="120" x2="140" y2="80" stroke="#0f172a" stroke-width="2.5"/>' +
                '<text x="126" y="102" font-size="11" font-weight="700" fill="#0f172a">v⃗</text>' +
                '<line x1="295" y1="48" x2="295" y2="192" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,4"/>' +
                '<line x1="140" y1="48" x2="295" y2="48" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,4"/>' +
                '<line x1="140" y1="192" x2="295" y2="192" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,4"/>' +
                '<line x1="140" y1="120" x2="295" y2="48" stroke="#2563eb" stroke-width="2.6"/>' +
                '<line x1="140" y1="120" x2="295" y2="192" stroke="#10b981" stroke-width="2.2" stroke-dasharray="5,3"/>' +
                '<path d="M 186 120 A 46 46 0 0 0 181.8 100.6" fill="none" stroke="#7c3aed" stroke-width="2.2"/>' +
                '<path d="M 180 120 A 40 40 0 0 1 176.3 136.9" fill="none" stroke="#10b981" stroke-width="2"/>' +
                '<text x="195" y="111" font-size="13" font-weight="800" fill="#6d28d9">θ</text>' +
                '<text x="188" y="137" font-size="12" font-weight="700" fill="#047857">−θ</text>' +
                '<circle cx="295" cy="48" r="5" fill="#2563eb"/>' +
                '<circle cx="295" cy="192" r="5" fill="#10b981"/>' +
                '<text x="303" y="45" font-size="12" font-weight="800" fill="#1d4ed8">M(z = a + ib)</text>' +
                '<text x="303" y="60" font-size="11" font-weight="700" fill="#1d4ed8">= r·e^(iθ)</text>' +
                '<text x="303" y="196" font-size="12" font-weight="800" fill="#047857">M’(z̄ = a − ib)</text>' +
                '<text x="303" y="210" font-size="11" font-weight="700" fill="#047857">= r·e^(−iθ)</text>' +
                '<text x="212" y="75" font-size="12" font-weight="800" fill="#1d4ed8">r = |z|</text>' +
                '<text x="295" y="134" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">a = r cosθ</text>' +
                '<text x="95" y="52" font-size="11" font-weight="700" fill="#334155">b = r sinθ</text>' +
                '<text x="95" y="196" font-size="11" font-weight="700" fill="#334155">−b</text>' +
                '</svg>',
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle est l’écriture exponentielle du nombre complexe $z = -2 + 2i\\sqrt{3}$ ?',
              options: [
                '$4 e^{i\\pi/3}$',
                '$4 e^{2i\\pi/3}$',
                '$2 e^{2i\\pi/3}$',
                '$4 e^{-i\\pi/3}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On calcule $r = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = 4$. Puis $\\cos\\theta = \\frac{-2}{4} = -\\frac{1}{2}$ et $\\sin\\theta = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$, donc $\\theta = \\frac{2\\pi}{3} \\pmod{2\\pi}$ et $z = 4 e^{2i\\pi/3}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Règles sur arg',
            stepTheme: 'orange',
            stepTitle: 'Calculs d’arguments et piège du signe négatif devant $e^{i\\theta}$',
            paragraphText:
              'La forme exponentielle transforme les opérations multiplicatives en additions d’exposants, exactement comme les exponentielles réelles : $r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = (r_1 r_2) e^{i(\\theta_1 + \\theta_2)}$. Mais un piège classique guette les étudiants !\n' +
              '• **Piège du signe moins** : dans $z = -5 e^{i\\pi/6}$, le module n’est PAS $-5$ (un module est toujours positif !) et l’argument n’est PAS $\\pi/6$. Comme $-1 = e^{i\\pi}$, on écrit $z = 5 e^{i\\pi} e^{i\\pi/6} = 5 e^{i 7\\pi/6}$ (ou $5 e^{-5i\\pi/6}$).\n' +
              '• **Opposé et conjugué** : $\\arg(-z) \\equiv \\arg(z) + \\pi \\pmod{2\\pi}$ ; $\\arg(\\bar{z}) \\equiv -\\arg(z) \\pmod{2\\pi}$ ; $\\arg(1/z) \\equiv -\\arg(z) \\pmod{2\\pi}$.\n' +
              '• **Angles orientés** : pour trois points distincts $A, B, C$, $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\!\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) \\pmod{2\\pi}$.',
            formula: {
              name: 'Correction d’un coefficient négatif et angle de vecteurs',
              formula: '-r e^{i\\theta} = r e^{i(\\theta + \\pi)} \\quad (r > 0), \\qquad (\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\!\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) \\pmod{2\\pi}',
              note: 'De même : i·e^(iθ) = e^(i(θ + π/2)) et −i·e^(iθ) = e^(i(θ − π/2)).',
            },
            keyRule:
              'Avant de lire le module et l’argument d’une expression $k e^{i\\theta}$, vérifie TOUJOURS le signe du facteur réel $k$ : s’il est négatif, absorbe le signe « $-$ » en ajoutant $\\pi$ à l’argument !',
            konanTip:
              'Mémorise les 4 axes cardinaux en exponentielle : $1 = e^{i0}$, $i = e^{i\\pi/2}$, $-1 = e^{i\\pi}$, $-i = e^{-i\\pi/2}$. Cela permet de corriger instantanément tout facteur $\\pm 1$ ou $\\pm i$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle est la forme exponentielle correcte (avec module positif et argument principal dans $]-\\pi, \\pi]$) de $z = -3 e^{i\\pi/4}$ ?',
              options: [
                '$3 e^{-i\\pi/4}$',
                '$3 e^{-3i\\pi/4}$',
                '$3 e^{3i\\pi/4}$',
                '$-3 e^{i 5\\pi/4}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On écrit $-3 e^{i\\pi/4} = 3 \\cdot e^{i\\pi} \\cdot e^{i\\pi/4} = 3 e^{i 5\\pi/4}$. Pour ramener l’argument dans $]-\\pi, \\pi]$, on retranche $2\\pi$ : $\\frac{5\\pi}{4} - 2\\pi = -\\frac{3\\pi}{4}$, donc $z = 3 e^{-3i\\pi/4}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Angle moitié',
            stepTheme: 'green',
            stepTitle: 'Factorisation par l’angle moitié : $1 \\pm e^{i\\theta}$ et $e^{ia} \\pm e^{ib}$',
            paragraphText:
              'Pour mettre sous forme exponentielle une somme de deux complexes de même module comme $z = 1 + e^{i\\theta}$ ou $e^{ia} + e^{ib}$, la technique universelle est la **factorisation par l’angle moitié**.\n' +
              '• **Principe pour $1 + e^{i\\theta}$** : on met $e^{i\\theta/2}$ en facteur : $1 + e^{i\\theta} = e^{i\\theta/2}\\left(e^{-i\\theta/2} + e^{i\\theta/2}\\right) = 2\\cos\\!\\left(\\frac{\\theta}{2}\\right) e^{i\\theta/2}$.\n' +
              '• **Cas de la différence** : $1 - e^{i\\theta} = e^{i\\theta/2}\\left(e^{-i\\theta/2} - e^{i\\theta/2}\\right) = -2i\\sin\\!\\left(\\frac{\\theta}{2}\\right) e^{i\\theta/2} = 2\\sin\\!\\left(\\frac{\\theta}{2}\\right) e^{i(\\theta - \\pi)/2}$.\n' +
              '• **Cas général $e^{ia} + e^{ib}$** : on factorise par $e^{i(a+b)/2}$ pour obtenir $2\\cos\\!\\left(\\frac{a - b}{2}\\right) e^{i(a+b)/2}$. Attention au signe de $\\cos\\!\\left(\\frac{a-b}{2}\\right)$ si l’on veut le module !',
            formula: {
              name: 'Identités de factorisation par l’angle moitié',
              formula: '1 + e^{i\\theta} = 2\\cos\\!\\left(\\frac{\\theta}{2}\\right) e^{i\\theta/2}, \\qquad e^{ia} + e^{ib} = 2\\cos\\!\\left(\\frac{a - b}{2}\\right) e^{i\\frac{a+b}{2}}',
              note: 'Et pour la différence : e^(ia) − e^(ib) = 2i sin((a − b)/2) e^(i(a + b)/2).',
            },
            keyRule:
              'La factorisation par $e^{i(a+b)/2}$ fait automatiquement apparaître $\\cos\\frac{a-b}{2}$ (somme) ou $i\\sin\\frac{a-b}{2}$ (différence), transformant une somme en produit !',
            konanTip:
              'Attention au module de $1 + e^{i\\theta}$ : c’est $2\\left|\\cos\\frac{\\theta}{2}\\right|$ (avec valeur absolue !). Si $\\cos\\frac{\\theta}{2} < 0$, n’oublie pas d’ajouter $\\pi$ à l’argument $\\frac{\\theta}{2}$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Pour $\\theta \\in ]0, \\pi[$, quelle est la forme exponentielle de $z = 1 + e^{i\\theta}$ ?',
              options: [
                '$2\\sin(\\theta/2)\\,e^{i\\theta/2}$',
                '$2\\cos(\\theta/2)\\,e^{i\\theta/2}$',
                '$2\\cos(\\theta/2)\\,e^{i\\theta}$',
                '$\\cos(\\theta/2)\\,e^{i\\theta/2}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$1 + e^{i\\theta} = e^{i\\theta/2}(e^{-i\\theta/2} + e^{i\\theta/2}) = 2\\cos(\\theta/2) e^{i\\theta/2}$. Comme $\\theta \\in ]0, \\pi[$, $\\theta/2 \\in ]0, \\pi/2[$, donc $2\\cos(\\theta/2) > 0$ est bien le module.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Géométrie plane',
            stepTheme: 'slate',
            stepTitle: 'Alignement, orthogonalité et nature d’un triangle via les affixes',
            paragraphText:
              'Les nombres complexes traduisent les propriétés géométriques du plan en calculs algébriques élémentaires sur le quotient $Z = \\frac{z_C - z_A}{z_B - z_A}$ (pour $A, B, C$ distincts).\n' +
              '• **Points alignés** : $A, B, C$ sont alignés $\\iff (\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv 0 \\pmod{\\pi} \\iff \\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}^*$.\n' +
              '• **Orthogonalité** : $(AB) \\perp (AC) \\iff (\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\pm\\frac{\\pi}{2} \\pmod{2\\pi} \\iff \\frac{z_C - z_A}{z_B - z_A} \\in i\\mathbb{R}^*$.\n' +
              '• **Triangle rectangle isocèle en $A$** : $AB = AC$ et $(AB) \\perp (AC) \\iff \\frac{z_C - z_A}{z_B - z_A} = \\pm i$.\n' +
              '• **Triangle équilatéral** : $AB = AC$ et angle $\\pm\\frac{\\pi}{3} \\iff \\frac{z_C - z_A}{z_B - z_A} = e^{\\pm i\\pi/3}$.',
            formula: {
              name: 'Critères géométriques sur le quotient complexe',
              formula: '\\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}^* \\iff A, B, C \\text{ alignés} ; \\qquad \\frac{z_C - z_A}{z_B - z_A} \\in i\\mathbb{R}^* \\iff (AB) \\perp (AC)',
              note: 'Le module |Z| = AC/AB donne le rapport des longueurs, et arg(Z) donne l’angle orienté (AB⃗, AC⃗).',
            },
            keyRule:
              'Un seul quotient complexe $Z = \\frac{z_C - z_A}{z_B - z_A}$ donne simultanément le rapport de longueurs $|Z| = \\frac{AC}{AB}$ et l’angle $\\arg(Z) = (\\overrightarrow{AB}, \\overrightarrow{AC})$ !',
            konanTip:
              'Pour montrer qu’un quadrilatère $ABCD$ est un parallélogramme, vérifie simplement l’égalité des affixes de vecteurs : $z_B - z_A = z_C - z_D \\iff z_A + z_C = z_B + z_D$ (mêmes milieux des diagonales).',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p1_q7',
              type: 'mcq',
              prompt:
                'Soient $A(1)$, $B(3 + 2i)$ et $C(-1 + 2i)$ dans le plan complexe. Quelle est la nature exacte du triangle $ABC$ ?',
              options: [
                'Quelconque mais non isocèle',
                'Équilatéral',
                'Rectangle et isocèle en $A$',
                'Aplati (points $A, B, C$ alignés)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Calculons $Z = \\frac{z_C - z_A}{z_B - z_A} = \\frac{-2 + 2i}{2 + 2i} = \\frac{-1 + i}{1 + i} = \\frac{(-1 + i)(1 - i)}{2} = \\frac{2i}{2} = i = e^{i\\pi/2}$. Comme $|Z| = 1$ ($AC = AB$) et $\\arg(Z) = \\frac{\\pi}{2}$ ($(AB) \\perp (AC)$), le triangle $ABC$ est rectangle et isocèle en $A$.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_algebre_ch4_p2',
        order: 2,
        title: 'Formules de Moivre, formules d’Euler, linéarisation et sommes trigonométriques',
        summary:
          'Appliquer la formule de Moivre pour les puissances et les développements de $\\cos(n\\theta), \\sin(n\\theta)$, utiliser les formules d’Euler pour linéariser $\\cos^p\\theta \\sin^q\\theta$ et sommer $\\sum \\cos(k\\theta)$.',
        conceptExplanation:
          'Les formules de Moivre et d’Euler constituent le pont fondamental entre la trigonométrie et l’algèbre exponentielle : elles automatisent des identités qui seraient fastidieuses à mémoriser.\n\n' +
          '• **Formule de Moivre** : pour tout $\\theta \\in \\mathbb{R}$ et tout $n \\in \\mathbb{Z}$, $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. En développant le membre de gauche par la formule du binôme de Newton et en identifiant parties réelle et imaginaire, on exprime $\\cos(n\\theta)$ et $\\sin(n\\theta)$ en polynômes de $\\cos\\theta$ et $\\sin\\theta$.\n' +
          '• **Formules d’Euler** : $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$ et $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$.\n' +
          '• **Linéarisation** : remplacer $\\cos\\theta$ et $\\sin\\theta$ par les formules d’Euler, développer par le binôme de Newton et regrouper les termes conjugués $e^{ik\\theta}$ et $e^{-ik\\theta}$ transforme tout produit $\\cos^p\\theta \\sin^q\\theta$ en somme de $\\cos(k\\theta)$ et $\\sin(k\\theta)$, indispensable pour calculer des primitives !',
        formulas: [
          {
            name: 'Formule de Moivre',
            formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\qquad (\\forall n \\in \\mathbb{Z},\\ \\forall \\theta \\in \\mathbb{R})',
            note: 'Équivaut à (e^(iθ))ⁿ = e^(inθ).',
          },
          {
            name: 'Formules d’Euler',
            formula: '\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\qquad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}',
            note: 'Permettent d’exprimer toute puissance de cos θ et sin θ sous forme linéaire en cos(kθ) et sin(kθ).',
          },
          {
            name: 'Sommes trigonométriques par série géométrique',
            formula: '\\sum_{k=0}^{n} e^{ik\\theta} = \\begin{cases} n + 1 & \\text{si } \\theta \\equiv 0 \\pmod{2\\pi} \\\\ \\dfrac{1 - e^{i(n+1)\\theta}}{1 - e^{i\\theta}} = e^{i\\frac{n\\theta}{2}} \\dfrac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}} & \\text{sinon} \\end{cases}',
            note: 'En prenant Re(...) et Im(...), on obtient d’un seul coup ∑ cos(kθ) et ∑ sin(kθ) !',
          },
        ],
        keyRule:
          'Pour passer de $\\cos^p\\theta \\sin^q\\theta$ à une combinaison de $\\cos(k\\theta), \\sin(k\\theta)$ (linéarisation), on utilise **Euler**. Pour l’opération inverse — exprimer $\\cos(n\\theta), \\sin(n\\theta)$ en puissances de $\\cos\\theta, \\sin\\theta$ — on utilise **Moivre + binôme de Newton** !',
        workedExample: {
          title: 'Puissance complexe par Moivre et linéarisation de $\\cos^3\\theta \\sin^2\\theta$',
          statement:
            '1) Calculer $(1 + i\\sqrt{3})^{12}$ sous forme algébrique. 2) Linéariser $\\sin^3\\theta$.',
          methodSteps: [
            '1) On met d’abord sous forme exponentielle : $1 + i\\sqrt{3} = 2 e^{i\\pi/3}$.',
            'Par la formule de Moivre : $(1 + i\\sqrt{3})^{12} = 2^{12} e^{i \\cdot 12\\pi/3} = 4096\\,e^{i 4\\pi} = 4096(\\cos 4\\pi + i\\sin 4\\pi) = 4096$.',
            '2) Par la formule d’Euler, $\\sin^3\\theta = \\left(\\frac{e^{i\\theta} - e^{-i\\theta}}{2i}\\right)^3 = \\frac{1}{(2i)^3}\\left(e^{3i\\theta} - 3 e^{i\\theta} + 3 e^{-i\\theta} - e^{-3i\\theta}\\right)$.',
            'Or $(2i)^3 = 8 i^3 = -8i$. En regroupant : $\\sin^3\\theta = \\frac{-1}{4} \\left(\\frac{e^{3i\\theta} - e^{-3i\\theta}}{2i} - 3\\frac{e^{i\\theta} - e^{-i\\theta}}{2i}\\right) = -\\frac{1}{4}\\sin(3\\theta) + \\frac{3}{4}\\sin\\theta$.',
          ],
          conclusion:
            '$(1 + i\\sqrt{3})^{12} = 4096$ et $\\sin^3\\theta = \\frac{3\\sin\\theta - \\sin(3\\theta)}{4}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Moivre & Puissances',
            stepTheme: 'violet',
            stepTitle: 'Formule de Moivre et calcul rapide des grandes puissances $(a + ib)^n$',
            paragraphText:
              'Calculer $(1 - i)^{20}$ en développant par le binôme de Newton demanderait $21$ termes pénibles. La formule de Moivre $(e^{i\\theta})^n = e^{in\\theta}$ le résout en deux lignes !\n' +
              '• **Méthode en 3 temps** : (1) mettre $z = a + ib$ sous forme exponentielle $r e^{i\\theta}$ ; (2) élever à la puissance $n$ : $z^n = r^n e^{in\\theta}$ ; (3) réduire l’angle $n\\theta$ modulo $2\\pi$ et revenir à la forme algébrique.\n' +
              '• **Exemple** : $1 - i = \\sqrt{2} e^{-i\\pi/4}$, donc $(1 - i)^{20} = (\\sqrt{2})^{20} e^{-i 20\\pi/4} = 2^{10} e^{-5i\\pi} = 1024 e^{i\\pi} = -1024$ !\n' +
              '• **Application aux puissances négatives** : $(1 + i)^{-4} = (\\sqrt{2} e^{i\\pi/4})^{-4} = 2^{-2} e^{-i\\pi} = -\\frac{1}{4}$.',
            formula: {
              name: 'Puissance n-ième via Moivre',
              formula: 'z = r e^{i\\theta} \\implies z^n = r^n (\\cos(n\\theta) + i\\sin(n\\theta)) \\qquad (\\forall n \\in \\mathbb{Z})',
              note: 'Vérifie toujours si l’argument obtenu nθ est un multiple entier de π ou π/2 pour simplifier instantanément.',
            },
            keyRule:
              'Ne développe JAMAIS $(a + ib)^n$ par le binôme dès que $n \\geqslant 4$ si $(a + ib)$ possède un argument remarquable ($\pm\\frac{\\pi}{6}, \\pm\\frac{\\pi}{4}, \\pm\\frac{\\pi}{3}, \\pm\\frac{\\pi}{2}$) : passe en exponentielle !',
            konanTip:
              'Un réel positif $(r e^{i\\theta})^n$ est réel ssi $n\\theta \\equiv 0 \\pmod{\\pi}$, et imaginaire pur ssi $n\\theta \\equiv \\frac{\\pi}{2} \\pmod{\\pi}$.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $Z = (\\sqrt{3} + i)^9$ ?',
              options: [
                '$512i$',
                '$-512i$',
                '$512$',
                '$-512$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$\\sqrt{3} + i = 2\\left(\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i\\right) = 2 e^{i\\pi/6}$. Par la formule de Moivre, $Z = 2^9 e^{i \\cdot 9\\pi/6} = 512 e^{i 3\\pi/2} = 512(-i) = -512i$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Développement',
            stepTheme: 'green',
            stepTitle: 'Exprimer $\\cos(n\\theta)$ et $\\sin(n\\theta)$ grâce à Moivre et au binôme de Newton',
            paragraphText:
              'Comment retrouver $\\cos(3\\theta)$ ou $\\sin(4\\theta)$ sans risque de trou de mémoire ? En égalant la formule de Moivre au développement binomial de $(\\cos\\theta + i\\sin\\theta)^n$ !\n' +
              '• **Exemple pour $n = 3$** : $(\\cos\\theta + i\\sin\\theta)^3 = \\cos^3\\theta + 3i\\cos^2\\theta\\sin\\theta + 3i^2\\cos\\theta\\sin^2\\theta + i^3\\sin^3\\theta$.\n' +
              '• **Regroupement réel / imaginaire** : comme $i^2 = -1$ et $i^3 = -i$, cela vaut $(\\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta) + i(3\\cos^2\\theta\\sin\\theta - \\sin^3\\theta)$.\n' +
              '• **Identification** avec $\\cos(3\\theta) + i\\sin(3\\theta)$ et remplacement de $\\sin^2\\theta = 1 - \\cos^2\\theta$ : $\\cos(3\\theta) = \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$ !',
            formula: {
              name: 'Formules de triplication via Moivre',
              formula: '\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta, \\qquad \\sin(3\\theta) = 3\\sin\\theta - 4\\sin^3\\theta',
              note: 'En général, cos(nθ) est un polynôme de degré n en cos θ (polynôme de Tchebychev T_n).',
            },
            keyRule:
              'Dans le développement de $(\\cos\\theta + i\\sin\\theta)^n$, les termes d’indice $k$ **pair** ($i^k = \\pm 1$) forment $\\cos(n\\theta)$ et ceux d’indice $k$ **impair** ($i^k = \\pm i$) forment $\\sin(n\\theta)$.',
            konanTip:
              'Vérifie toujours ta formule de développement en testant $\\theta = 0$ (pour $\\cos(n\\theta)$ : somme des coefficients doit valoir $1$) et $\\theta = \\frac{\\pi}{2}$ ! Ici $4(1)^3 - 3(1) = 1$, c’est bon.',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'En identifiant la partie réelle de $(\\cos\\theta + i\\sin\\theta)^4 = \\cos(4\\theta) + i\\sin(4\\theta)$, quelle expression de $\\cos(4\\theta)$ en fonction de $\\cos\\theta$ uniquement obtient-on ?',
              options: [
                '$8\\cos^4\\theta - 8\\cos^2\\theta + 1$',
                '$8\\cos^4\\theta - 4\\cos^2\\theta + 1$',
                '$4\\cos^4\\theta - 4\\cos^2\\theta + 1$',
                '$8\\cos^4\\theta + 8\\cos^2\\theta - 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\operatorname{Re}((\\cos\\theta + i\\sin\\theta)^4) = \\cos^4\\theta - 6\\cos^2\\theta\\sin^2\\theta + \\sin^4\\theta$. En posant $\\sin^2\\theta = 1 - \\cos^2\\theta$ : $\\cos^4\\theta - 6\\cos^2\\theta(1 - \\cos^2\\theta) + (1 - \\cos^2\\theta)^2 = (1 + 6 + 1)\\cos^4\\theta + (-6 - 2)\\cos^2\\theta + 1 = 8\\cos^4\\theta - 8\\cos^2\\theta + 1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Formules d’Euler',
            stepTheme: 'blue',
            stepTitle: 'Formules d’Euler et lien avec l’argument moitié',
            paragraphText:
              'En additionnant puis en soustrayant les deux relations $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ et $e^{-i\\theta} = \\cos\\theta - i\\sin\\theta$, Leonhard Euler obtient les deux formules les plus fécondes de l’analyse.\n' +
              '• **Expression de $\\cos\\theta$ et $\\sin\\theta$** : $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$ et $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$.\n' +
              '• **Lecture immédiate** : pour tout $k \\in \\mathbb{Z}^*$, $e^{ik\\theta} + e^{-ik\\theta} = 2\\cos(k\\theta)$ et $e^{ik\\theta} - e^{-ik\\theta} = 2i\\sin(k\\theta)$.\n' +
              '• **Test de contrôle** : $\\cos^2\\theta + \\sin^2\\theta = \\left(\\frac{e^{i\\theta}+e^{-i\\theta}}{2}\\right)^2 + \\left(\\frac{e^{i\\theta}-e^{-i\\theta}}{2i}\\right)^2 = \\frac{e^{2i\\theta}+2+e^{-2i\\theta}}{4} - \\frac{e^{2i\\theta}-2+e^{-2i\\theta}}{4} = 1$ !',
            formula: {
              name: 'Formules d’Euler (directes et inverses)',
              formula: 'e^{ik\\theta} + e^{-ik\\theta} = 2\\cos(k\\theta), \\qquad e^{ik\\theta} - e^{-ik\\theta} = 2i\\sin(k\\theta)',
              note: 'Retiens que 1/i = −i : utile lorsqu’il reste un i au dénominateur lors de la linéarisation.',
            },
            keyRule:
              'Dans la formule d’Euler pour $\\sin\\theta$, le dénominateur est **$2i$** (et non $2$). Oublier le $i$ fausse tous les signes lorsque l’on élève $\\sin\\theta$ à une puissance paire ou impaire !',
            konanTip:
              'Pour retrouver les formules trigonométriques d’addition $\\cos(a+b)$ et $\\sin(a+b)$, écris simplement $e^{i(a+b)} = e^{ia} e^{ib}$ et développe $(\\cos a + i\\sin a)(\\cos b + i\\sin b)$ : fini le par-cœur fragile !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'À quoi est égale l’expression $E = \\frac{e^{i 3\\theta} - e^{-i 3\\theta}}{2}$ (attention au dénominateur !) ?',
              options: [
                '$\\sin(3\\theta)$',
                '$\\cos(3\\theta)$',
                '$i\\sin(3\\theta)$',
                '$-i\\sin(3\\theta)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'D’après Euler, $e^{i3\\theta} - e^{-i3\\theta} = 2i\\sin(3\\theta)$. En divisant par $2$ (et non par $2i$), il reste $i\\sin(3\\theta)$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Linéarisation',
            stepTheme: 'green',
            stepTitle: 'Linéariser $\\cos^p\\theta \\sin^q\\theta$ étape par étape',
            paragraphText:
              'Linéariser une expression trigonométrique consiste à la réécrire comme somme de termes du premier degré $\\cos(k\\theta)$ et $\\sin(k\\theta)$, sans aucune puissance ni produit. Cette méthode est systématique.\n' +
              '• **Étape 1** : remplacer chaque $\\cos\\theta$ et $\\sin\\theta$ par sa formule d’Euler.\n' +
              '• **Étape 2** : développer le produit grâce au binôme de Newton (triangle de Pascal).\n' +
              '• **Étape 3** : regrouper les termes par paires d’exposants opposés $e^{ik\\theta}$ et $e^{-ik\\theta}$ et réappliquer Euler.\n' +
              '• **Exemple ($\cos^2\\theta \\sin^2\\theta$)** : $\\left(\\frac{e^{i\\theta}+e^{-i\\theta}}{2}\\right)^2 \\left(\\frac{e^{i\\theta}-e^{-i\\theta}}{2i}\\right)^2 = \\frac{(e^{2i\\theta} - e^{-2i\\theta})^2}{-16} = \\frac{e^{4i\\theta} - 2 + e^{-4i\\theta}}{-16} = \\frac{2 - 2\\cos(4\\theta)}{16} = \\frac{1 - \\cos(4\\theta)}{8}$ !',
            formula: {
              name: 'Linéarisations classiques de degré 2 et 3',
              formula: '\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}, \\quad \\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}, \\quad \\cos^3\\theta = \\frac{\\cos(3\\theta) + 3\\cos\\theta}{4}',
              note: 'Vérification rapide pour θ = 0 : cos³(0) = 1 et (cos 0 + 3 cos 0)/4 = 1 !',
            },
            keyRule:
              'Avant de développer brutalement $\\cos^p\\theta \\sin^q\\theta$, pense aux identités remarquables : $(e^{i\\theta} + e^{-i\\theta})(e^{i\\theta} - e^{-i\\theta}) = e^{2i\\theta} - e^{-2i\\theta}$ divise le calcul par quatre !',
            konanTip:
              'Vérifie toujours ton résultat linéarisé en testant $\\theta = 0$ et $\\theta = \\frac{\\pi}{2}$ : si une constante ou un signe est faux, ce contrôle en 10 secondes le repère immédiatement !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la forme linéarisée de $\\cos^4\\theta$ ?',
              options: [
                '$\\frac{1}{8}\\cos(4\\theta) + \\frac{1}{2}\\cos(2\\theta) + \\frac{3}{8}$',
                '$\\frac{1}{8}\\cos(4\\theta) - \\frac{1}{2}\\cos(2\\theta) + \\frac{3}{8}$',
                '$\\frac{1}{16}\\cos(4\\theta) + \\frac{1}{4}\\cos(2\\theta) + \\frac{3}{8}$',
                '$\\frac{1}{8}\\cos(4\\theta) + \\frac{1}{2}\\cos(2\\theta) + \\frac{1}{8}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\cos^4\\theta = \\frac{1}{16}(e^{i\\theta}+e^{-i\\theta})^4 = \\frac{1}{16}(e^{4i\\theta} + 4e^{2i\\theta} + 6 + 4e^{-2i\\theta} + e^{-4i\\theta}) = \\frac{1}{16}(2\\cos(4\\theta) + 8\\cos(2\\theta) + 6) = \\frac{1}{8}\\cos(4\\theta) + \\frac{1}{2}\\cos(2\\theta) + \\frac{3}{8}$. (Contrôle en $\\theta=0$ : $\\frac{1}{8} + \\frac{4}{8} + \\frac{3}{8} = 1$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Sommes trigonométriques',
            stepTheme: 'green',
            stepTitle: 'Calculer $\\sum_{k=0}^n \\cos(k\\theta)$ et $\\sum_{k=0}^n \\sin(k\\theta)$ via $e^{ik\\theta}$',
            paragraphText:
              'Comment calculer la somme $C_n = \\sum_{k=0}^n \\cos(k\\theta)$ et $S_n = \\sum_{k=0}^n \\sin(k\\theta)$ ? En formant le complexe $Z_n = C_n + i S_n = \\sum_{k=0}^n e^{ik\\theta}$, qui est une simple **somme géométrique** de raison $q = e^{i\\theta}$ !\n' +
              '• **Cas particulier $\\theta \\equiv 0 \\pmod{2\\pi}$** : $q = 1$, donc $Z_n = n + 1$ ($C_n = n + 1$ et $S_n = 0$).\n' +
              '• **Cas général $\\theta \\not\\equiv 0 \\pmod{2\\pi}$** ($q \\neq 1$) : $Z_n = \\frac{1 - e^{i(n+1)\\theta}}{1 - e^{i\\theta}}$.\n' +
              '• **Astuce de l’angle moitié** : $Z_n = \\frac{e^{i(n+1)\\theta/2}(-2i\\sin\\frac{(n+1)\\theta}{2})}{e^{i\\theta/2}(-2i\\sin\\frac{\\theta}{2})} = e^{i\\frac{n\\theta}{2}} \\frac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}}$. Il ne reste qu’à lire $\\operatorname{Re}(Z_n)$ et $\\operatorname{Im}(Z_n)$ !',
            formula: {
              name: 'Sommes de cos(kθ) et sin(kθ) pour θ ≠ 0 [2π]',
              formula: '\\sum_{k=0}^{n} \\cos(k\\theta) = \\cos\\!\\left(\\frac{n\\theta}{2}\\right) \\frac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}}, \\qquad \\sum_{k=0}^{n} \\sin(k\\theta) = \\sin\\!\\left(\\frac{n\\theta}{2}\\right) \\frac{\\sin\\frac{(n+1)\\theta}{2}}{\\sin\\frac{\\theta}{2}}',
              note: 'Méthode valide aussi pour ∑ cos(a + kb) en factorisant par e^(ia) !',
            },
            keyRule:
              'Pour sommer $\\sum \\cos(k\\theta)$ ou $\\sum \\sin(k\\theta)$, pense toujours à « complexifier » en $C_n + i S_n = \\sum e^{ik\\theta}$, à appliquer $\\frac{1 - q^{n+1}}{1 - q}$, puis à factoriser numérateur et dénominateur par l’angle moitié !',
            konanTip:
              'N’oublie jamais de traiter séparément le cas $q = 1$ (ici $\\theta \\equiv 0 \\pmod{2\\pi}$), sinon tu divises par $\\sin(0) = 0$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'En utilisant $Z = \\sum_{k=0}^{4} e^{ik \\cdot 2\\pi/5}$, que vaut la somme $\\sum_{k=0}^{4} \\cos\\!\\left(\\frac{2k\\pi}{5}\\right)$ ?',
              options: ['$1$', '$0$', '$-1$', '$5$'],
              correctAnswerIndex: 1,
              explanation:
                'La raison est $q = e^{i 2\\pi/5} \\neq 1$, et $q^5 = e^{i 2\\pi} = 1$. Donc $Z = \\frac{1 - q^5}{1 - q} = \\frac{1 - 1}{1 - q} = 0$. Sa partie réelle $\\sum_{k=0}^4 \\cos(2k\\pi/5)$ vaut donc exactement $0$ !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Pièges classiques',
            stepTheme: 'orange',
            stepTitle: 'Éviter les erreurs de parité et de signe dans Euler et Moivre',
            paragraphText:
              'Lors des linéarisations et calculs trigonométriques, trois erreurs reviennent très souvent aux examens.\n' +
              '• **Piège 1 — Puissance de $(2i)^q$** : $(2i)^2 = -4$ (réel négatif), $(2i)^3 = -8i$ (imaginaire pur), $(2i)^4 = +16$ (réel positif). Un terme comme $\\frac{e^{ik\\theta} - e^{-ik\\theta}}{2^n \\cdot i}$ doit se regrouper avec $\\frac{1}{2i}$ (et non $\\frac{1}{2}$) pour faire apparaître $\\sin(k\\theta)$ !\n' +
              '• **Piège 2 — Formule de Moivre à argument négatif** : $(\\cos\\theta - i\\sin\\theta)^n = (e^{-i\\theta})^n = e^{-in\\theta} = \\cos(n\\theta) - i\\sin(n\\theta)$.\n' +
              '• **Piège 3 — Confusion linéarisation vs développement** : si l’on demande de linéariser $\\cos^3\\theta$, la réponse contient $\\cos(3\\theta)$ et $\\cos\\theta$ (angles multiples), jamais de cubes.',
            formula: {
              name: 'Rappel de parité des puissances de i dans Euler',
              formula: '\\sin^{2m}\\theta \\text{ ne contient que des } \\cos(k\\theta), \\qquad \\sin^{2m+1}\\theta \\text{ ne contient que des } \\sin(k\\theta)',
              note: 'Par parité : cos^p θ sin^q θ est paire si q est pair (développement en cos(kθ)) et impaire si q est impair (développement en sin(kθ)).',
            },
            keyRule:
              'La parité de $q$ dans $\\cos^p\\theta \\sin^q\\theta$ dicte la nature de la linéarisation : si $q$ est **pair**, la fonction est paire donc il n’y a QUE des $\\cos(k\\theta)$ ; si $q$ est **impair**, elle est impaire donc il n’y a QUE des $\\sin(k\\theta)$ !',
            konanTip:
              'Si en linéarisant $\\sin^2\\theta \\cos^3\\theta$ tu trouves un $\\cos(k\\theta)$ alors que $q = 2$ est pair, c’est juste ; si tu trouves un $\\sin(k\\theta)$, il y a une erreur de signe garantie !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la forme linéarisée exacte de $f(\\theta) = \\cos\\theta \\sin^2\\theta$ ?',
              options: [
                '$\\frac{1}{4}\\sin\\theta - \\frac{1}{4}\\sin(3\\theta)$',
                '$\\frac{1}{4}\\cos\\theta - \\frac{1}{4}\\cos(3\\theta)$',
                '$\\frac{1}{4}\\cos\\theta + \\frac{1}{4}\\cos(3\\theta)$',
                '$\\frac{1}{2}\\cos\\theta - \\frac{1}{2}\\cos(3\\theta)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $q = 2$ est pair, $f$ est paire : seules des fonctions $\\cos$ apparaissent (A est éliminée). Calcul : $\\cos\\theta\\sin^2\\theta = \\cos\\theta \\cdot \\frac{1 - \\cos(2\\theta)}{2} = \\frac{1}{2}\\cos\\theta - \\frac{1}{2}\\cos\\theta\\cos(2\\theta) = \\frac{1}{2}\\cos\\theta - \\frac{1}{4}(\\cos(3\\theta) + \\cos\\theta) = \\frac{1}{4}\\cos\\theta - \\frac{1}{4}\\cos(3\\theta)$.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_algebre_ch4_p3',
        order: 3,
        title: 'Racines carrées, équations dans $\\mathbb{C}$, racines $n$-ièmes et transformations',
        summary:
          'Calculer les racines carrées d’un complexe par système algébrique, résoudre $az^2 + bz + c = 0$ à coefficients réels ou complexes, déterminer les racines $n$-ièmes sur le cercle unité et reconnaître les transformations géométriques.',
        conceptExplanation:
          'Le théorème de d’Alembert-Gauss affirme que tout polynôme non constant de degré $n$ à coefficients complexes admet exactement $n$ racines dans $\\mathbb{C}$ (comptées avec multiplicité).\n\n' +
          '• **Racines carrées d’un complexe $Z = A + iB$** : on cherche $z = x + iy$ tel que $z^2 = Z$, ce qui fournit trois équations (dont la troisième, sur les modules, simplifie grandement la résolution) : $x^2 - y^2 = A$, $x^2 + y^2 = \\sqrt{A^2 + B^2}$ et $2xy = B$.\n' +
          '• **Équation du second degré $az^2 + bz + c = 0$ ($a \\neq 0$)** : on calcule $\\Delta = b^2 - 4ac$. Si $\\Delta \\in \\mathbb{C} \\setminus \\mathbb{R}_+$, on détermine une racine carrée $\\delta$ de $\\Delta$ ($\delta^2 = \\Delta$) et les solutions sont $z_{1,2} = \\frac{-b \\pm \\delta}{2a}$.\n' +
          '• **Racines $n$-ièmes** : les $n$ racines de $z^n = 1$ forment l’ensemble $\\mathbb{U}_n = \\{e^{2ik\\pi/n} \\mid 0 \\leqslant k \\leqslant n - 1\\}$, sommets d’un polygone régulier inscrit dans le cercle unité, de somme nulle pour $n \\geqslant 2$.',
        formulas: [
          {
            name: 'Système des racines carrées de Z = A + iB',
            formula: 'z = x + iy,\\ z^2 = A + iB \\iff \\begin{cases} x^2 - y^2 = A \\\\ x^2 + y^2 = \\sqrt{A^2 + B^2} \\\\ 2xy = B \\text{ (donne le signe de } xy\\text{)} \\end{cases}',
            note: 'Additionner et soustraire les deux premières lignes donne immédiatement x² et y² !',
          },
          {
            name: 'Racines n-ièmes de l’unité et d’un complexe R e^(iφ)',
            formula: 'z^n = 1 \\iff z_k = e^{i\\frac{2k\\pi}{n}} \\quad (0 \\leqslant k \\leqslant n-1) ; \\qquad z^n = R e^{i\\varphi} \\iff z_k = R^{1/n} e^{i\\frac{\\varphi + 2k\\pi}{n}}',
            note: 'Cas n = 3 : j = e^(2iπ/3) = −1/2 + i√3/2 vérifie j³ = 1, j̄ = j² et 1 + j + j² = 0.',
          },
          {
            name: 'Similitudes directes et transformations géométriques',
            formula: 'z’ = z + b \\text{ (translation)}, \\quad z’ - \\omega = e^{i\\alpha}(z - \\omega) \\text{ (rotation)}, \\quad z’ - \\omega = k(z - \\omega) \\text{ (homothétie)}',
            note: 'Plus généralement, z’ = az + b (a ∈ ℂ*) est une similitude directe de rapport |a| et d’angle arg(a).',
          },
        ],
        keyRule:
          'Dans la recherche des racines carrées de $Z = A + iB$ par méthode algébrique, utilise TOUJOURS l’équation sur les modules $x^2 + y^2 = \\sqrt{A^2 + B^2}$ : sans elle, tu te retrouves bloqué avec une équation bicarrée inutile !',
        workedExample: {
          title: 'Équation du second degré à coefficients complexes et racines cubiques',
          statement:
            '1) Résoudre dans $\\mathbb{C}$ l’équation $z^2 - (3 + 4i)z - 1 + 5i = 0$. 2) Résoudre $z^3 = -8i$.',
          methodSteps: [
            '1) Discriminant : $\\Delta = (3 + 4i)^2 - 4(1)(-1 + 5i) = (9 + 24i - 16) + 4 - 20i = -3 + 4i$.',
            'Cherchons $\\delta = x + iy$ tel que $\\delta^2 = -3 + 4i$ : $x^2 - y^2 = -3$, $x^2 + y^2 = \\sqrt{(-3)^2 + 4^2} = 5$, et $2xy = 4 > 0$ ($x$ et $y$ de même signe).',
            'On obtient $2x^2 = 2 \\implies x = \\pm 1$ et $2y^2 = 8 \\implies y = \\pm 2$. Comme $xy > 0$, $\\delta = 1 + 2i$ (ou $-1 - 2i$).',
            'Les deux solutions sont $z_1 = \\frac{(3 + 4i) + (1 + 2i)}{2} = 2 + 3i$ et $z_2 = \\frac{(3 + 4i) - (1 + 2i)}{2} = 1 + i$.',
            '2) Écrivons $-8i = 8 e^{-i\\pi/2}$. Ses $3$ racines cubiques sont $z_k = 8^{1/3} e^{i\\frac{-\\pi/2 + 2k\\pi}{3}} = 2 e^{i\\left(-\\frac{\\pi}{6} + \\frac{2k\\pi}{3}\\right)}$ pour $k \\in \\{0, 1, 2\\}$, soit $z_0 = 2 e^{-i\\pi/6} = \\sqrt{3} - i$, $z_1 = 2 e^{i\\pi/2} = 2i$, $z_2 = 2 e^{i 7\\pi/6} = -\\sqrt{3} - i$.',
          ],
          conclusion:
            'Les solutions de l’équation sont $2 + 3i$ et $1 + i$ ; les racines cubiques de $-8i$ sont $\\sqrt{3} - i$, $2i$ et $-\\sqrt{3} - i$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Racines carrées',
            stepTheme: 'green',
            stepTitle: 'Calculer les deux racines carrées d’un complexe $Z = A + iB$ par méthode algébrique',
            paragraphText:
              'Tout complexe non nul $Z = A + iB$ admet exactement deux racines carrées opposées $\\delta$ et $-\\delta$ dans $\\mathbb{C}$. Quand $\\arg(Z)$ n’est pas remarquable, la méthode algébrique est imparable !\n' +
              '• **Les 3 équations** pour $\\delta = x + iy$ : (1) $\\operatorname{Re}(\\delta^2) = A \\implies x^2 - y^2 = A$ ; (2) $|\\delta|^2 = |Z| \\implies x^2 + y^2 = \\sqrt{A^2 + B^2}$ ; (3) $\\operatorname{Im}(\\delta^2) = B \\implies 2xy = B$.\n' +
              '• **Résolution express sur $Z = 5 - 12i$** : $|Z| = \\sqrt{25 + 144} = 13$. Ainsi $x^2 - y^2 = 5$ et $x^2 + y^2 = 13$, d’où $2x^2 = 18 \\implies x = \\pm 3$ et $2y^2 = 8 \\implies y = \\pm 2$.\n' +
              '• **Choix des couples via $2xy = -12 < 0$** : $x$ et $y$ sont de signes contraires, donc $\\delta = 3 - 2i$ et $-\\delta = -3 + 2i$ !',
            formula: {
              name: 'Formules directes de x² et y² pour z² = A + iB',
              formula: 'x^2 = \\frac{\\sqrt{A^2 + B^2} + A}{2}, \\qquad y^2 = \\frac{\\sqrt{A^2 + B^2} - A}{2}, \\qquad \\operatorname{sgn}(xy) = \\operatorname{sgn}(B)',
              note: 'Vérifie toujours ton résultat en élevant δ au carré : c’est immédiat !',
            },
            keyRule:
              'Si $B > 0$, $x$ et $y$ ont le **même signe** ; si $B < 0$, $x$ et $y$ ont des **signes opposés**. Il y a toujours exactement $2$ solutions opposées (jamais $4$ !).',
            konanTip:
              'Les triplets pythagoriciens $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$ apparaissent très souvent dans les discriminants complexes pour que $\\sqrt{A^2 + B^2}$ tombe juste !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelles sont les deux racines carrées complexes de $Z = 8 - 6i$ ?',
              options: [
                '$3 + i$ et $-3 - i$',
                '$3 - i$ et $-3 + i$',
                '$1 - 3i$ et $-1 + 3i$',
                '$4 - 3i$ et $-4 + 3i$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$|Z| = \\sqrt{8^2 + (-6)^2} = 10$. On résout $x^2 - y^2 = 8$ et $x^2 + y^2 = 10$, soit $x^2 = 9 \\implies x = \\pm 3$ et $y^2 = 1 \\implies y = \\pm 1$. Comme $2xy = -6 < 0$, $x$ et $y$ sont de signes contraires : $\\pm(3 - i)$. Vérification : $(3 - i)^2 = 9 - 6i - 1 = 8 - 6i$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Équation degré 2',
            stepTheme: 'green',
            stepTitle: 'Résoudre $az^2 + bz + c = 0$ dans $\\mathbb{C}$ (coefficients réels ou complexes)',
            paragraphText:
              'Dans $\\mathbb{C}$, **toute** équation du second degré $az^2 + bz + c = 0$ ($a \\neq 0$) possède des solutions, que ses coefficients $a, b, c$ soient réels ou complexes !\n' +
              '• **Cas 1 : $a, b, c \\in \\mathbb{R}$** : si $\\Delta = b^2 - 4ac < 0$, on écrit $\\Delta = (i\\sqrt{-\\Delta})^2$, d’où deux racines **complexes conjuguées** $z_{1,2} = \\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$.\n' +
              '• **Cas 2 : $a, b, c \\in \\mathbb{C}$ quelconques** : la formule avec $\\sqrt{\\Delta}$ n’a PLUS de sens si $\\Delta \\notin \\mathbb{R}_+$ ! On cherche une racine carrée $\\delta \\in \\mathbb{C}$ telle que $\\delta^2 = \\Delta$, puis $z_{1,2} = \\frac{-b \\pm \\delta}{2a}$.\n' +
              '• **Relations racines-coefficients** : dans les deux cas, $z_1 + z_2 = -\\frac{b}{a}$ et $z_1 z_2 = \\frac{c}{a}$.',
            formula: {
              name: 'Résolution universelle de az² + bz + c = 0 dans ℂ',
              formula: '\\Delta = b^2 - 4ac = \\delta^2 \\implies z_1 = \\frac{-b + \\delta}{2a}, \\quad z_2 = \\frac{-b - \\delta}{2a}',
              note: 'Si a, b, c ∈ ℝ et Δ < 0, alors z₂ = z̄₁ ; mais si a, b, c ∉ ℝ, les deux racines NE sont en général PAS conjuguées !',
            },
            keyRule:
              'N’écris JAMAIS $\\sqrt{3 + 4i}$ ou $\\sqrt{-5}$ ! Le symbole $\\sqrt{\\cdot}$ est strictement réservé aux réels positifs ou nuls : dans $\\mathbb{C}$, on écrit $\\delta$ tel que $\\delta^2 = \\Delta$.',
            konanTip:
              'Vérifie toujours tes deux racines $z_1, z_2$ en deux secondes avec la somme et le produit : $z_1 + z_2$ doit égaler $-b/a$ et $z_1 z_2$ doit égaler $c/a$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'Quelles sont les solutions dans $\\mathbb{C}$ de l’équation $z^2 - (5 + i)z + 8 + i = 0$ ?',
              options: [
                '$3 + 2i$ et $2 - i$',
                '$3 - i$ et $2 + 2i$',
                '$3 + i$ et $2$',
                '$-3 + i$ et $-2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\Delta = (5 + i)^2 - 4(8 + i) = 24 + 10i - 32 - 4i = -8 + 6i$. Or $(1 + 3i)^2 = 1 + 6i - 9 = -8 + 6i$, donc $\\delta = 1 + 3i$. Les solutions sont $z_1 = \\frac{(5 + i) + (1 + 3i)}{2} = 3 + 2i$ et $z_2 = \\frac{(5 + i) - (1 + 3i)}{2} = 2 - i$. Vérification : $z_1 + z_2 = 5 + i$ et $z_1 z_2 = 6 - 3i + 4i + 2 = 8 + i$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Racines de l’unité',
            stepTheme: 'blue',
            stepTitle: 'Racines $n$-ièmes de l’unité ($\\mathbb{U}_n$) et propriétés du nombre $j = e^{2i\\pi/3}$',
            paragraphText:
              'Résoudre $z^n = 1$ dans $\\mathbb{C}$ (pour $n \\in \\mathbb{N}^*$) revient à chercher les nombres de module $1$ dont l’argument multiplié par $n$ est un multiple de $2\\pi$.\n' +
              '• **Les $n$ solutions** : $\\mathbb{U}_n = \\left\\{\\omega_k = e^{i\\frac{2k\\pi}{n}} \\mid k \\in \\{0, 1, \\dots, n-1\\}\\right\\}$. En notant $\\omega = e^{2i\\pi/n}$, elles s’écrivent $1, \\omega, \\omega^2, \\dots, \\omega^{n-1}$.\n' +
              '• **Somme nulle** : pour tout $n \\geqslant 2$, $\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega} = 0$ (le barycentre des sommets est l’origine $O$ !).\n' +
              '• **Le nombre d’or complexe $j$ ($n = 3$)** : $j = e^{2i\\pi/3} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ vérifie $j^3 = 1$, $j^2 = \\bar{j} = \\frac{1}{j}$ et **$1 + j + j^2 = 0$**.',
            formula: {
              name: 'Propriétés fondamentales des racines n-ièmes et de j',
              formula: '\\mathbb{U}_n = \\{1, \\omega, \\dots, \\omega^{n-1}\\}, \\quad \\sum_{k=0}^{n-1} \\omega^k = 0 \\ (n \\geqslant 2) ; \\qquad j^3 = 1,\\quad 1 + j + j^2 = 0,\\quad \\bar{j} = j^2',
              note: 'Pour n = 4 : U₄ = {1, i, −1, −i}. Pour n = 2 : U₂ = {1, −1}.',
            },
            keyRule:
              'Dès que tu vois $1 + j + j^2$ dans un calcul, remplace-le par **$0$** ! Et dès que tu vois $j^m$, réduis l’exposant $m$ modulo $3$ car $j^3 = 1$.',
            konanTip:
              'En physique et génie électrique, les trois phases du courant triphasé équilibré sont déphasées de $\\frac{2\\pi}{3}$ ($1, j, j^2$) : la relation $1 + j + j^2 = 0$ signifie exactement que la somme des trois courants instantanés est nulle sur le fil neutre !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Soit $j = e^{2i\\pi/3}$. Que vaut l’expression $(1 + j)^{2025}$ ?',
              options: [
                '$1$',
                '$-1$',
                '$j$',
                '$-j^2$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $1 + j + j^2 = 0$, on a $1 + j = -j^2$. Donc $(1 + j)^{2025} = (-j^2)^{2025} = (-1)^{2025} j^{4050}$. Or $4050 = 3 \\times 1350$, donc $j^{4050} = (j^3)^{1350} = 1$, et $(-1)^{2025} = -1$. D’où $(1 + j)^{2025} = -1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Cercle unité',
            stepTheme: 'violet',
            stepTitle: 'Interprétation géométrique des racines $n$-ièmes sur le cercle unité',
            paragraphText:
              'Les images des $n$ racines de $\\mathbb{U}_n$ possèdent une géométrie remarquable : toutes ont pour module $1$, donc elles appartiennent toutes au **cercle trigonométrique** (centre $O$, rayon $1$).\n' +
              '• **Polygone régulier** : comme l’argument passe de $\\frac{2k\\pi}{n}$ à $\\frac{2(k+1)\\pi}{n}$, deux sommets consécutifs forment un angle au centre constant de $\\frac{2\\pi}{n}$ radians : pour $n \\geqslant 3$, les points forment un **polygone régulier convexe à $n$ côtés** inscrit dans le cercle unité, admettant $(1, 0)$ pour sommet et symétrique par rapport à l’axe réel (car les racines non réelles vont par paires conjuguées).\n' +
              '• **Exemples sur le schéma ci-dessous** : $\\mathbb{U}_3$ trace un triangle équilatéral ($120^\\circ$), $\\mathbb{U}_4$ un carré ($90^\\circ$), $\\mathbb{U}_6$ un hexagone régulier ($60^\\circ$).',
            formula: {
              name: 'Factorisation de zⁿ − 1 sur ℂ et angles au centre',
              formula: 'z^n - 1 = \\prod_{k=0}^{n-1} \\left(z - e^{i\\frac{2k\\pi}{n}}\\right), \\qquad \\text{angle entre deux racines consécutives} = \\frac{2\\pi}{n}',
              note: 'De plus, le produit des racines n-ièmes vaut (−1)ⁿ⁻¹.',
            },
            keyRule:
              'Toutes les racines $n$-ièmes de l’unité sont situées sur le cercle unité et séparées régulièrement d’un angle $\\frac{2\\pi}{n}$, en partant toujours de $z_0 = 1$.',
            konanTip:
              'Observe sur le schéma de droite que $\\mathbb{U}_6 = \\{1, e^{i\\pi/3}, j, -1, j^2, e^{-i\\pi/3}\\} = \\mathbb{U}_3 \\cup (-\\mathbb{U}_3)$ : c’est une propriété générale dès que $n = 2m$ est pair ($z^{2m} = 1 \\iff z^m = 1$ ou $z^m = -1$) !',
            visualSchema: {
              type: 'custom_svg',
              title: 'Polygones réguliers des racines n-ièmes sur le cercle unité (U₃ et U₆)',
              caption: 'À gauche : U₃ = {1, j, j²} forme un triangle équilatéral (angle 2π/3). À droite : U₆ forme un hexagone régulier (angle π/3) contenant U₃ et −U₃.',
              svgContent:
                '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">' +
                '<rect x="6" y="6" width="448" height="208" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
                '<text x="115" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">Racines cubiques U₃ (z³ = 1)</text>' +
                '<text x="345" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#6d28d9">Racines 6-ièmes U₆ (z⁶ = 1)</text>' +
                '<line x1="25" y1="115" x2="205" y2="115" stroke="#94a3b8" stroke-width="1.2"/>' +
                '<line x1="115" y1="200" x2="115" y2="30" stroke="#94a3b8" stroke-width="1.2"/>' +
                '<circle cx="115" cy="115" r="66" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>' +
                '<polygon points="181,115 82,57.8 82,172.2" fill="#3b82f6" fill-opacity="0.16" stroke="#2563eb" stroke-width="2.4"/>' +
                '<line x1="115" y1="115" x2="181" y2="115" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="3,2"/>' +
                '<line x1="115" y1="115" x2="82" y2="57.8" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="3,2"/>' +
                '<path d="M 137 115 A 22 22 0 0 0 104 95.9" fill="none" stroke="#ea580c" stroke-width="2"/>' +
                '<text x="132" y="92" font-size="10" font-weight="800" fill="#c2410c">2π/3</text>' +
                '<circle cx="181" cy="115" r="4.5" fill="#2563eb"/>' +
                '<circle cx="82" cy="57.8" r="4.5" fill="#2563eb"/>' +
                '<circle cx="82" cy="172.2" r="4.5" fill="#2563eb"/>' +
                '<text x="188" y="112" font-size="11" font-weight="800" fill="#1e40af">1</text>' +
                '<text x="58" y="54" font-size="11" font-weight="800" fill="#1e40af">j</text>' +
                '<text x="48" y="182" font-size="11" font-weight="800" fill="#1e40af">j² = j̄</text>' +
                '<line x1="255" y1="115" x2="435" y2="115" stroke="#94a3b8" stroke-width="1.2"/>' +
                '<line x1="345" y1="200" x2="345" y2="30" stroke="#94a3b8" stroke-width="1.2"/>' +
                '<circle cx="345" cy="115" r="66" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>' +
                '<polygon points="411,115 378,57.8 312,57.8 279,115 312,172.2 378,172.2" fill="#8b5cf6" fill-opacity="0.16" stroke="#7c3aed" stroke-width="2.4"/>' +
                '<line x1="345" y1="115" x2="411" y2="115" stroke="#7c3aed" stroke-width="1.3" stroke-dasharray="3,2"/>' +
                '<line x1="345" y1="115" x2="378" y2="57.8" stroke="#7c3aed" stroke-width="1.3" stroke-dasharray="3,2"/>' +
                '<path d="M 371 115 A 26 26 0 0 0 358 92.5" fill="none" stroke="#059669" stroke-width="2"/>' +
                '<text x="372" y="102" font-size="10" font-weight="800" fill="#047857">π/3</text>' +
                '<circle cx="411" cy="115" r="4" fill="#7c3aed"/>' +
                '<circle cx="378" cy="57.8" r="4" fill="#7c3aed"/>' +
                '<circle cx="312" cy="57.8" r="4" fill="#7c3aed"/>' +
                '<circle cx="279" cy="115" r="4" fill="#7c3aed"/>' +
                '<circle cx="312" cy="172.2" r="4" fill="#7c3aed"/>' +
                '<circle cx="378" cy="172.2" r="4" fill="#7c3aed"/>' +
                '<text x="417" y="112" font-size="10" font-weight="800" fill="#5b21b6">1</text>' +
                '<text x="382" y="51" font-size="10" font-weight="800" fill="#5b21b6">e^(iπ/3)</text>' +
                '<text x="292" y="51" font-size="10" font-weight="800" fill="#5b21b6">j</text>' +
                '<text x="256" y="112" font-size="10" font-weight="800" fill="#5b21b6">−1</text>' +
                '<text x="292" y="185" font-size="10" font-weight="800" fill="#5b21b6">j²</text>' +
                '<text x="382" y="185" font-size="10" font-weight="800" fill="#5b21b6">e^(−iπ/3)</text>' +
                '</svg>',
            },
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Que forment géométriquement les images des $5$ racines cinquièmes de l’unité ($z^5 = 1$) dans le plan complexe ?',
              options: [
                'Un pentagone régulier inscrit dans le cercle de rayon $5$',
                'Un pentagone régulier inscrit dans le cercle unité (rayon $1$), avec pour premier sommet $A_0(1, 0)$',
                'Cinq points alignés sur l’axe réel',
                'Un carré centré en $O$ accompagné de l’origine',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Toutes les racines de $z^5 = 1$ ont pour module $1^{1/5} = 1$ et pour arguments $\\frac{2k\\pi}{5}$ ($k = 0, \\dots, 4$) : elles forment un pentagone régulier inscrit dans le cercle de centre $O$ et de rayon $1$, démarrant au point $(1, 0)$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Racines n-ièmes',
            stepTheme: 'green',
            stepTitle: 'Résoudre $z^n = Z$ pour un nombre complexe $Z = R e^{i\\varphi}$ quelconque',
            paragraphText:
              'Comment résoudre $z^4 = -8(1 + i\\sqrt{3})$ ou $z^3 = 8i$ ? On passe systématiquement en forme exponentielle !\n' +
              '• **Étape 1** : écrire le second membre $Z$ sous forme exponentielle $Z = R e^{i\\varphi}$ avec $R > 0$. Pour $Z = -8(1 + i\\sqrt{3}) = -16 e^{i\\pi/3} = 16 e^{i 4\\pi/3}$.\n' +
              '• **Étape 2** : poser $z = r e^{i\\theta}$ ($r > 0$). L’équation $r^n e^{in\\theta} = R e^{i\\varphi}$ équivaut à $r^n = R \\iff r = R^{1/n}$ et $n\\theta = \\varphi + 2k\\pi \\iff \\theta_k = \\frac{\\varphi}{n} + \\frac{2k\\pi}{n}$ pour $k \\in \\{0, 1, \\dots, n-1\\}$.\n' +
              '• **Résultat sur $z^4 = 16 e^{i 4\\pi/3}$** : $r = 16^{1/4} = 2$ et $\\theta_k = \\frac{\\pi}{3} + \\frac{k\\pi}{2}$ ($k = 0, 1, 2, 3$). Toutes les solutions s’obtiennent en multipliant une solution particulière $z_0$ par les racines de l’unité $\\mathbb{U}_n$ !',
            formula: {
              name: 'Racines n-ièmes d’un complexe non nul',
              formula: 'z^n = R e^{i\\varphi} \\iff z_k = \\sqrt[n]{R}\\,e^{i\\left(\\frac{\\varphi}{n} + \\frac{2k\\pi}{n}\\right)} = z_0 \\cdot \\omega_k \\quad (0 \\leqslant k \\leqslant n - 1)',
              note: 'Géométriquement, les n racines forment encore un polygone régulier, inscrit dans le cercle de rayon R^(1/n) et tourné de φ/n.',
            },
            keyRule:
              'N’oublie JAMAIS le terme $+ 2k\\pi$ AVANT de diviser par $n$ ! Si tu écris $n\\theta = \\varphi$ puis divises par $n$, tu ne trouves qu’une seule racine au lieu des $n$ attendues.',
            konanTip:
              'Pour vérifier tes $n$ solutions $z_0, \\dots, z_{n-1}$, vérifie qu’elles ont toutes le même module $R^{1/n}$ et que leurs arguments avancent régulièrement d’un pas constant $\\frac{2\\pi}{n}$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'Parmi les nombres suivants, lequel est l’une des $4$ solutions de l’équation $z^4 = -16$ ?',
              options: [
                '$2 e^{i\\pi/4} = \\sqrt{2} + i\\sqrt{2}$',
                '$2 e^{i\\pi/2} = 2i$',
                '$2 e^{i\\pi} = -2$',
                '$4 e^{i\\pi/4} = 2\\sqrt{2}(1 + i)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$-16 = 16 e^{i\\pi}$, donc $r = 16^{1/4} = 2$ et $\\theta_k = \\frac{\\pi + 2k\\pi}{4}$ pour $k \\in \\{0, 1, 2, 3\\}$. Pour $k = 0$, $z_0 = 2 e^{i\\pi/4} = 2\\left(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}\\right) = \\sqrt{2} + i\\sqrt{2}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Degré ≥ 3',
            stepTheme: 'slate',
            stepTitle: 'Équations de degré $\\geqslant 3$, changement d’inconnue et triangle équilatéral',
            paragraphText:
              'Les équations polynomiales ou rationnelles de degré supérieur dans $\\mathbb{C}$ se ramènent presque toujours aux cas précédents par trois leviers classiques.\n' +
              '• **1. Racine évidente et factorisation** : si $P(z_0) = 0$ (tester $0, \\pm 1, \\pm i, \\pm 2$), on factorise $P(z) = (z - z_0)Q(z)$ par division euclidienne ou identification.\n' +
              '• **2. Équation bicarrée** : $az^4 + bz^2 + c = 0$ se résout en posant $Z = z^2$, puis en prenant les racines carrées de $Z_1$ et $Z_2$.\n' +
              '• **3. Équation $\\left(\\frac{z - a}{z - b}\\right)^n = 1$** : on pose $u = \\frac{z - a}{z - b} \\in \\mathbb{U}_n$ ($u \\neq 1$), puis on isole $z = \\frac{bu - a}{u - 1}$.\n' +
              '• **Caractérisation algébrique d’un triangle équilatéral** : trois points $A(a), B(b), C(c)$ forment un triangle équilatéral ssi $a^2 + b^2 + c^2 = ab + bc + ca$ (soit $a + bj + cj^2 = 0$ ou $a + bj^2 + cj = 0$).',
            formula: {
              name: 'Équation homographique et critère du triangle équilatéral',
              formula: '\\left(\\frac{z - 1}{z + 1}\\right)^n = 1 \\iff \\frac{z - 1}{z + 1} = \\omega_k \\neq 1 ; \\qquad ABC \\text{ équilatéral} \\iff a^2 + b^2 + c^2 = ab + bc + ca',
              note: 'Pour u = e^(iα) ≠ 1, on utilise l’angle moitié : (u + 1)/(u − 1) = −i cotan(α/2) ∈ iℝ !',
            },
            keyRule:
              'Dans une équation de type $\\left(\\frac{z - a}{z - b}\\right)^n = 1$, vérifie toujours la valeur interdite $z = b$ et élimine la racine de l’unité $u = 1$ qui correspondrait à $z - a = z - b \\iff a = b$ (impossible si $a \\neq b$) !',
            konanTip:
              'Si un polynôme $P(z)$ à coefficients **réels** admet une racine complexe $z_0$, alors son conjugué $\\overline{z_0}$ est automatiquement racine de $P$, ce qui permet de factoriser par le trinôme réel $(z - z_0)(z - \\overline{z_0}) = z^2 - 2\\operatorname{Re}(z_0)z + |z_0|^2$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Combien de solutions complexes possède l’équation $\\left(\\frac{z - 1}{z + 1}\\right)^4 = 1$ ?',
              options: [
                '$4$ solutions : $0, i, -i, 1$',
                '$3$ solutions : $0, i, -i$',
                '$2$ solutions : $i$ et $-i$',
                'Aucune solution dans $\\mathbb{C}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Posons $u = \\frac{z - 1}{z + 1}$ ($z \\neq -1$). L’équation $u^4 = 1$ donne $u \\in \\{1, i, -1, -i\\}$. Le cas $u = 1$ donne $z - 1 = z + 1$ (impossible !). Pour $u = -1$ : $z - 1 = -z - 1 \\implies z = 0$. Pour $u = i$ : $z = \\frac{1 + i}{1 - i} = i$. Pour $u = -i$ : $z = -i$. Il y a donc exactement $3$ solutions : $0, i, -i$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'propriete',
            stepBadge: 'Transformations',
            stepTheme: 'violet',
            stepTitle: 'Transformations géométriques $z’ = az + b$ et lieux géométriques dans $\\mathbb{C}$',
            paragraphText:
              'Les applications affines dans $\\mathbb{C}$ unifient toutes les transformations géométriques directes du plan (translations, homothéties, rotations, similitudes).\n' +
              '• **Translation de vecteur $\\vec{w}(b)$** : $z’ = z + b$.\n' +
              '• **Similitude directe $z’ = az + b$ ($a \\in \\mathbb{C}^*$)** : si $a = 1$, c’est une translation. Si $a \\neq 1$, elle possède un unique point fixe $\\omega = \\frac{b}{1 - a}$ (centre), un rapport $k = |a|$ et un angle $\\alpha = \\arg(a)$ : $z’ - \\omega = a(z - \\omega)$.\n' +
              '  – Si $|a| = 1$ ($a = e^{i\\alpha} \\neq 1$) : **rotation** de centre $\\omega$ et d’angle $\\alpha$.\n' +
              '  – Si $a \\in \\mathbb{R}^* \\setminus \\{1\\}$ : **homothétie** de centre $\\omega$ et de rapport $a$.\n' +
              '• **Lieux géométriques** : $|z - z_A| = R$ décrit le **cercle** de centre $A$ et rayon $R$ ; $|z - z_A| = |z - z_B|$ décrit la **médiatrice** de $[AB]$.',
            formula: {
              name: 'Classification d’une transformation affine complexe z’ = az + b',
              formula: 'z’ = az + b \\ (a \\neq 1) \\iff z’ - \\omega = a(z - \\omega) \\quad \\text{avec } \\omega = \\frac{b}{1 - a}, \\quad \\text{rapport } |a|, \\quad \\text{angle } \\arg(a)',
              note: 'Quant à z’ = a z̄ + b, elle inverse les angles (similitude indirecte / réflexion).',
            },
            keyRule:
              'Pour identifier $z’ = az + b$ ($a \\neq 1$) : calcule toujours le point fixe $\\omega = \\frac{b}{1 - a}$, le module $|a|$ (rapport) et l’argument $\\arg(a)$ (angle de rotation) !',
            konanTip:
              'En synthèse : $|z - z_A| = |z - z_B|$ est une **médiatrice** ; $\\arg\\!\\left(\\frac{z - z_A}{z - z_B}\\right) \\equiv \\pm\\frac{\\pi}{2} \\pmod{\\pi}$ est le **cercle de diamètre $[AB]$** privé de $A$ et $B$ !',
            exercise: {
              id: 'lmd_entd_l1_algebre_ch4_p3_q7',
              type: 'mcq',
              prompt:
                'Quelle est la nature géométrique précise de l’application $f$ du plan complexe définie par $z’ = i z + (1 - i)$ ?',
              options: [
                'Translation de vecteur d’affixe $1 - i$',
                'Homothétie de centre $1$ et de rapport $i$',
                'Rotation de centre $\\Omega(1)$ et d’angle $\\frac{\\pi}{2}$',
                'Rotation de centre $O(0)$ et d’angle $\\frac{\\pi}{2}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Ici $a = i = e^{i\\pi/2} \\neq 1$, avec $|a| = 1$ et $\\arg(a) = \\frac{\\pi}{2}$ : c’est donc une rotation d’angle $\\frac{\\pi}{2}$. Son centre est l’unique point fixe $\\omega = \\frac{b}{1 - a} = \\frac{1 - i}{1 - i} = 1$.',
            },
          },
        ],
      }),
    ],
  },
];
