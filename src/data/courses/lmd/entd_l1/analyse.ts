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
// ANALYSE — ENTD LICENCE 1
// Programme structuré KONAN — Version Masterclass
// ============================================================================

export const ANALYSE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Corps des nombres réels, bornes et partie entière
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch1',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 1 — Corps des nombres réels, bornes et partie entière',
    summary:
      'Structure algébrique et relation d’ordre sur $\\mathbb{R}$, intervalles, voisinages, droite réelle achevée $\\overline{\\mathbb{R}}$, bornes supérieure et inférieure, extrema, valeur absolue, inégalités triangulaires et partie entière $E(x)$.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch1_p1',
        order: 1,
        title: 'Corps des réels, intervalles, voisinages et droite réelle achevée',
        summary:
          'Maîtriser les axiomes du corps totalement ordonné $\\mathbb{R}$, la typologie des intervalles, les voisinages, la droite réelle achevée $\\overline{\\mathbb{R}}$, la densité de $\\mathbb{Q}$ et la démonstration par récurrence.',
        conceptExplanation:
          'L’ensemble $\\mathbb{R}$ des nombres réels est muni de deux opérations ($+$ et $\\times$) qui en font un **corps commutatif**, et d’une relation d’ordre totale $\\leqslant$ compatible avec ces opérations.\n\n' +
          '• **Intervalles de $\\mathbb{R}$** : une partie $I \\subset \\mathbb{R}$ est un intervalle si et seulement si elle est convexe pour l’ordre : $\\forall x, y \\in I,\\ \\forall z \\in \\mathbb{R},\\ x \\leqslant z \\leqslant y \\implies z \\in I$.\n' +
          '• **Voisinages** : $V \\subset \\mathbb{R}$ est un voisinage de $a \\in \\mathbb{R}$ s’il existe $\\varepsilon > 0$ tel que $[a - \\varepsilon, a + \\varepsilon] \\subset V$ (ou $]a - \\varepsilon, a + \\varepsilon[ \\subset V$). $V$ est un voisinage de $+\\infty$ s’il existe $A \\in \\mathbb{R}$ tel que $[A, +\\infty[ \\subset V$.\n' +
          '• **Droite réelle achevée** : $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$ prolonge l’ordre de $\\mathbb{R}$ afin que toute partie possède un $\\sup$ et un $\\inf$, mais certaines opérations ($+\\infty - \\infty$, $0 \\times \\infty$) restent indéterminées.\n' +
          '• **Archimède et récurrence** : $\\mathbb{R}$ est archimédien ($\\forall x \\in \\mathbb{R},\\ \\exists n \\in \\mathbb{N},\\ n > x$), $\\mathbb{Q}$ est dense dans $\\mathbb{R}$, et le principe de récurrence permet d’établir les identités sommatoires pour tout $n \\in \\mathbb{N}$.',
        formulas: [
          {
            name: 'Compatibilité de l’ordre avec les opérations',
            formula: '(a \\leqslant b \\implies a + c \\leqslant b + c) \\quad \\text{et} \\quad (a \\leqslant b \\text{ et } c \\geqslant 0 \\implies ac \\leqslant bc)',
            note: 'Si c < 0, multiplier par c renverse le sens de l’inégalité.',
          },
          {
            name: 'Paramétrisation d’un segment [a, b]',
            formula: '[a, b] = \\{ (1 - t)a + tb \\mid t \\in [0, 1] \\}',
            note: 'Toute combinaison convexe de a et b reste dans [a, b].',
          },
          {
            name: 'Sommes classiques démontrées par récurrence',
            formula: '\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}, \\qquad \\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}',
            note: 'Indispensables pour les calculs de limites de suites et de sommes de Riemann.',
          },
        ],
        keyRule:
          'Ne jamais confondre l’appartenance $a \\in I$ (élément) avec l’inclusion $\\{a\\} \\subset I$ (partie), ni manipuler $+\\infty - \\infty$ ou $0 \\times (\\pm\\infty)$ comme des opérations définies dans $\\overline{\\mathbb{R}}$.',
        workedExample: {
          title: 'Preuve de l’irrationalité de $\\sqrt{2} + \\sqrt{3}$ et somme des carrés',
          statement:
            '1) Démontrer par l’absurde que $x = \\sqrt{2} + \\sqrt{3}$ est irrationnel. 2) Calculer $S_{10} = \\sum_{k=1}^{10} k^2$.',
          methodSteps: [
            '1) Supposons par l’absurde que $x = \\sqrt{2} + \\sqrt{3} \\in \\mathbb{Q}$. Alors son carré $x^2$ est aussi rationnel.',
            'Or $x^2 = (\\sqrt{2} + \\sqrt{3})^2 = 2 + 2\\sqrt{6} + 3 = 5 + 2\\sqrt{6}$, d’où $\\sqrt{6} = \\frac{x^2 - 5}{2} \\in \\mathbb{Q}$.',
            'Écrivons $\\sqrt{6} = \\frac{p}{q}$ sous forme irréductible ($p, q \\in \\mathbb{N}^*$, $\\operatorname{pgcd}(p,q)=1$). Alors $p^2 = 6q^2$, donc $2 \\mid p^2$, d’où $2 \\mid p$. En posant $p = 2k$, on obtient $4k^2 = 6q^2 \\implies 2k^2 = 3q^2$, donc $2 \\mid q^2$, d’où $2 \\mid q$ : contradiction avec $\\operatorname{pgcd}(p,q)=1$.',
            '2) Pour $n = 10$, $S_{10} = \\frac{10 \\times 11 \\times 21}{6} = 5 \\times 11 \\times 7 = 385$.',
          ],
          conclusion:
            '$\\sqrt{2} + \\sqrt{3} \\notin \\mathbb{Q}$ et $\\sum_{k=1}^{10} k^2 = 385$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Structure de ℝ',
            stepTheme: 'blue',
            stepTitle: 'Corps commutatif totalement ordonné $(\\mathbb{R}, +, \\times, \\leqslant)$',
            paragraphText:
              'Pour comparer des performances financières, des taux de croissance ou des temps d’exécution, on a besoin d’un ensemble où les quatre opérations fonctionnent sans restriction et où deux valeurs sont toujours comparables : c’est le corps totalement ordonné $\\mathbb{R}$.\n' +
              '• **Lois de corps** : $+$ et $\\times$ sont associatives et commutatives, $\\times$ distribue sur $+$, tout réel a un opposé $-a$ et tout réel non nul $a \\in \\mathbb{R}^*$ a un inverse $a^{-1}$.\n' +
              '• **Ordre total** : pour tous $x, y \\in \\mathbb{R}$, on a $x \\leqslant y$ ou $y \\leqslant x$.\n' +
              '• **Compatibilité** : l’ordre est préservé par translation ($x \\leqslant y \\implies x+z \\leqslant y+z$) et par multiplication par un réel positif ($c \\geqslant 0$). En revanche, multiplier par $c < 0$ renverse le sens : si $-2 \\leqslant 3$, alors $(-1)(-2) \\geqslant (-1)(3)$, soit $2 \\geqslant -3$.',
            formula: {
              name: 'Règles de compatibilité de l’ordre',
              formula: 'x \\leqslant y \\implies \\begin{cases} x + z \\leqslant y + z \\\\ cx \\leqslant cy \\text{ si } c \\geqslant 0 \\\\ cx \\geqslant cy \\text{ si } c \\leqslant 0 \\end{cases}',
              note: 'On ne soustrait jamais deux inégalités membre à membre : on ajoute l’opposée après avoir inversé le sens.',
            },
            keyRule:
              'On peut additionner deux inégalités de même sens ($a \\leqslant b$ et $c \\leqslant d \\implies a+c \\leqslant b+d$), et multiplier deux inégalités entre nombres positifs, mais jamais les soustraire ni les diviser directement.',
            konanTip:
              'Pour encadrer $x - y$ connaissant $a \\leqslant x \\leqslant b$ et $c \\leqslant y \\leqslant d$, écris d’abord $-d \\leqslant -y \\leqslant -c$ puis additionne : $a - d \\leqslant x - y \\leqslant b - c$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q1',
              type: 'mcq',
              prompt:
                'Sachant que $2 \\leqslant x \\leqslant 5$ et $1 \\leqslant y \\leqslant 4$, quel est l’encadrement exact de $x - y$ ?',
              options: [
                '$1 \\leqslant x - y \\leqslant 1$',
                '$-2 \\leqslant x - y \\leqslant 4$',
                '$-3 \\leqslant x - y \\leqslant 4$',
                '$-2 \\leqslant x - y \\leqslant 3$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'De $1 \\leqslant y \\leqslant 4$, on tire en multipliant par $-1$ : $-4 \\leqslant -y \\leqslant -1$. En additionnant membre à membre avec $2 \\leqslant x \\leqslant 5$, on obtient $2 - 4 \\leqslant x - y \\leqslant 5 - 1$, soit $-2 \\leqslant x - y \\leqslant 4$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Intervalles',
            stepTheme: 'blue',
            stepTitle: 'Typologie des intervalles et propriété de convexité',
            paragraphText:
              'En analyse, les domaines d’étude privilégiés des fonctions continues sont les intervalles, c’est-à-dire des parties « sans trou » de la droite réelle.\n' +
              '• **Définition intrinsèque** : $I \\subset \\mathbb{R}$ est un intervalle ssi dès que $x, y \\in I$ et $x \\leqslant z \\leqslant y$, alors $z \\in I$. Ainsi $\\mathbb{R}^*$ n’est pas un intervalle car $-1 \\in \\mathbb{R}^*$, $1 \\in \\mathbb{R}^*$, mais $0 \\notin \\mathbb{R}^*$.\n' +
              '• **Segments** : un intervalle fermé borné $[a, b]$ (avec $a \\leqslant b$) s’appelle un segment ; chaque point s’écrit $x = (1-t)a + tb$ avec $t \\in [0,1]$. Un singleton $\\{a\\} = [a,a]$ est un intervalle fermé.\n' +
              '• **Cas particuliers** : l’ensemble vide $\\emptyset$ et $\\mathbb{R} = ]-\\infty, +\\infty[$ sont les seules parties de $\\mathbb{R}$ à être simultanément ouvertes et fermées.',
            formula: {
              name: 'Caractérisation d’un intervalle',
              formula: 'I \\text{ intervalle} \\iff \\forall (x, y) \\in I^2,\\ \\forall z \\in \\mathbb{R},\\ (x \\leqslant z \\leqslant y \\implies z \\in I)',
              note: 'Un segment [a, b] est à la fois fermé et borné (compact).',
            },
            keyRule:
              'Une réunion de deux intervalles disjoints comme $]-\\infty, 0[ \\cup ]0, +\\infty[ = \\mathbb{R}^*$ n’est PAS un intervalle. En revanche, l’intersection de deux intervalles est toujours un intervalle.',
            konanTip:
              'Avant d’appliquer un théorème global (TVI, Rolle, monotonie par signe de $f’$), vérifie toujours que ton domaine est bien un **intervalle** et pas une réunion d’intervalles comme $\\mathbb{R}^*$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q2',
              type: 'mcq',
              prompt:
                'Parmi les parties suivantes de $\\mathbb{R}$, laquelle est un **intervalle** ?',
              options: [
                '$\\mathbb{R}^* = ]-\\infty, 0[ \\cup ]0, +\\infty[$',
                '$[0, 1] \\cup [2, 3]$',
                '$\\{5\\}$',
                '$\\mathbb{Z}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le singleton $\\{5\\} = [5, 5]$ vérifie trivialement la définition d’un intervalle (si $x, y \\in \\{5\\}$ et $x \\leqslant z \\leqslant y$, alors $z = 5 \\in \\{5\\}$). Les trois autres ensembles possèdent des « trous » : $0 \\notin \\mathbb{R}^*$, $1{,}5 \\notin [0,1] \\cup [2,3]$, et $0{,}5 \\notin \\mathbb{Z}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Topologie',
            stepTheme: 'blue',
            stepTitle: 'Voisinage d’un point réel et voisinages de l’infini',
            paragraphText:
              'Pour formaliser l’idée qu’une fonction ou un indicateur économique se comporte d’une certaine manière « très près de $a$ » ou « pour de très grandes valeurs », l’analyse introduit la notion de voisinage.\n' +
              '• **Voisinage d’un réel $a$** : $V \\subset \\mathbb{R}$ est un voisinage de $a$ s’il existe $\\varepsilon > 0$ tel que $[a - \\varepsilon, a + \\varepsilon] \\subset V$ (de façon équivalente, $]a - \\varepsilon, a + \\varepsilon[ \\subset V$). $V$ doit donc contenir une marge de sécurité à gauche ET à droite de $a$.\n' +
              '• **Voisinage de $+\\infty$** : $V$ est un voisinage de $+\\infty$ s’il existe $A \\in \\mathbb{R}$ tel que $[A, +\\infty[ \\subset V$ (exemple : $]10^6, +\\infty[$ est un voisinage de $+\\infty$).\n' +
              '• **Voisinage de $-\\infty$** : $V$ contient un intervalle $]-\\infty, A]$ pour un certain $A \\in \\mathbb{R}$.',
            formula: {
              name: 'Définition d’un voisinage de a',
              formula: 'V \\in \\mathcal{V}(a) \\iff \\exists \\varepsilon > 0,\\ [a - \\varepsilon, a + \\varepsilon] \\subset V',
              note: 'Un voisinage n’est pas nécessairement lui-même un intervalle ouvert : [0, 2] ∪ {5} est un voisinage de 1.',
            },
            keyRule:
              'Un intervalle fermé $[a, b]$ avec $a < b$ n’est PAS un voisinage de ses extrémités $a$ et $b$, car aucun intervalle $[a - \\varepsilon, a + \\varepsilon]$ n’est inclus dans $[a, b]$.',
            konanTip:
              'Pense à un voisinage de $a$ comme à une « bulle de rayon $\\varepsilon > 0$ » centrée en $a$ qui tient entièrement dans $V$. S’il manque un côté (comme pour $[0, 1]$ en $0$), ce n’est pas un voisinage de $0$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q3',
              type: 'mcq',
              prompt:
                'Lequel des ensembles suivants est un **voisinage de $2$** dans $\\mathbb{R}$ ?',
              options: [
                '$[2, 5]$',
                '$]1, 2[ \\cup ]2, 3[$',
                '$[1, 3] \\cup \\{10\\}$',
                '$\\{2\\}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour $V = [1, 3] \\cup \\{10\\}$, en choisissant $\\varepsilon = 0{,}5$, on a $[2 - 0{,}5, 2 + 0{,}5] = [1{,}5, 2{,}5] \\subset V$. En revanche, $[2, 5]$ ne contient rien à gauche de $2$, $]1,2[ \\cup ]2,3[$ ne contient même pas $2$, et $\\{2\\}$ ne contient aucun intervalle non trivial.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Droite achevée',
            stepTheme: 'violet',
            stepTitle: 'Droite réelle achevée $\\overline{\\mathbb{R}}$ et règles opératoires',
            paragraphText:
              'Pour exprimer uniformément les bornes d’ensembles non bornés et les limites infinies, on complète $\\mathbb{R}$ par deux éléments non réels $-\\infty$ et $+\\infty$ pour former la droite réelle achevée $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$.\n' +
              '• **Relation d’ordre** : pour tout $x \\in \\mathbb{R}$, $-\\infty < x < +\\infty$. Ainsi $+\\infty$ est le plus grand élément de $\\overline{\\mathbb{R}}$ et $-\\infty$ son plus petit élément.\n' +
              '• **Opérations définies** : $x + (+\\infty) = +\\infty$ pour tout $x \\in \\mathbb{R} \\cup \\{+\\infty\\}$ ; si $x > 0$, $x \\times (+\\infty) = +\\infty$ et $x \\times (-\\infty) = -\\infty$ ; si $x < 0$, les signes s’inversent ; $\\frac{1}{\\pm\\infty} = 0$.\n' +
              '• **Formes non définies** : $(+\\infty) + (-\\infty)$, $0 \\times (+\\infty)$ et $0 \\times (-\\infty)$ ne sont PAS définies dans $\\overline{\\mathbb{R}}$ (ce sont les formes indéterminées classiques).',
            formula: {
              name: 'Conventions de bornes dans ℝ̄',
              formula: '\\sup(X) = +\\infty \\text{ si } X \\text{ non majorée}, \\qquad \\inf(X) = -\\infty \\text{ si } X \\text{ non minorée}',
              note: 'Dans ℝ̄, toute partie non vide admet une borne supérieure et une borne inférieure.',
            },
            keyRule:
              '$\\overline{\\mathbb{R}}$ n’est PAS un corps : l’addition et la multiplication n’y sont pas partout définies car $(+\\infty)+(-\\infty)$ et $0 \\times (\\pm\\infty)$ n’ont pas de sens.',
            konanTip:
              'Attention au signe : $(-3) \\times (-\\infty) = +\\infty$ et $(-3) \\times (+\\infty) = -\\infty$, mais $0 \\times (+\\infty)$ n’est JAMAIS égal à $0$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q4',
              type: 'mcq',
              prompt:
                'Dans la droite réelle achevée $\\overline{\\mathbb{R}}$, quelle expression est **parfaitement définie** et vaut $-\\infty$ ?',
              options: [
                '$(+\\infty) + (-\\infty)$',
                '$0 \\times (-\\infty)$',
                '$(-2) \\times (+\\infty)$',
                '$(-2) \\times (-\\infty)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme $-2 \\in \\mathbb{R}_-^*$, la multiplication $(-2) \\times (+\\infty)$ est définie dans $\\overline{\\mathbb{R}}$ et vaut $-\\infty$. Les deux premières expressions sont indéterminées et $(-2) \\times (-\\infty) = +\\infty$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Archimède & ℚ',
            stepTheme: 'green',
            stepTitle: 'Propriété d’Archimède, densité de $\\mathbb{Q}$ et irrationalité',
            paragraphText:
              'Entre deux réels distincts, aussi proches soient-ils (par exemple deux taux d’intérêt $0{,}0451$ et $0{,}0452$), il existe toujours une infinité de rationnels et une infinité d’irrationnels : c’est la structure fine de $\\mathbb{R}$.\n' +
              '• **Propriété d’Archimède** : pour tout $x \\in \\mathbb{R}$ et tout $y > 0$, il existe $n \\in \\mathbb{N}$ tel que $ny > x$. En particulier, pour tout $\\varepsilon > 0$, il existe $n \\in \\mathbb{N}^*$ tel que $\\frac{1}{n} < \\varepsilon$.\n' +
              '• **Densité de $\\mathbb{Q}$ et $\\mathbb{R} \\setminus \\mathbb{Q}$** : pour tous réels $a < b$, il existe $q \\in \\mathbb{Q}$ et $r \\in \\mathbb{R} \\setminus \\mathbb{Q}$ tels que $a < q < b$ et $a < r < b$.\n' +
              '• **Méthode d’irrationalité** : pour prouver qu’un nombre comme $\\sqrt{2} + \\sqrt{3}$ est irrationnel, on raisonne par l’absurde en isolant une racine carrée ($\\sqrt{6} = \\frac{x^2 - 5}{2} \\in \\mathbb{Q}$) pour aboutir à une contradiction sur la parité d’une fraction irréductible.',
            formula: {
              name: 'Propriété d’Archimède (forme utile en analyse)',
              formula: '\\forall \\varepsilon > 0,\\ \\exists n \\in \\mathbb{N}^*,\\quad 0 < \\frac{1}{n} < \\varepsilon',
              note: 'C’est la clé de presque toutes les démonstrations de limites et de bornes inférieures.',
            },
            keyRule:
              'La somme ou le produit de deux irrationnels peut être rationnel : $\\sqrt{2} + (-\\sqrt{2}) = 0 \\in \\mathbb{Q}$ et $\\sqrt{2} \\times \\sqrt{2} = 2 \\in \\mathbb{Q}$. En revanche, la somme d’un rationnel et d’un irrationnel est toujours irrationnelle.',
            konanTip:
              'Pour démontrer que $\\sqrt{a} + \\sqrt{b}$ est irrationnel, élève au carré : cela fait apparaître $\\sqrt{ab}$, qu’il suffit alors de montrer irrationnel.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q5',
              type: 'mcq',
              prompt:
                'On suppose par l’absurde que $x = \\sqrt{2} + \\sqrt{3}$ est rationnel. Quelle déduction permet de conclure immédiatement à une contradiction ?',
              options: [
                '$x^2 = 5$, ce qui est impossible',
                '$\\sqrt{6} = \\frac{x^2 - 5}{2}$ serait rationnel, ce qui contredit l’irrationalité de $\\sqrt{6}$',
                '$\\sqrt{2}$ et $\\sqrt{3}$ sont irrationnels, et la somme de deux irrationnels est toujours irrationnelle',
                '$x^2 = 5 + \\sqrt{6} \\in \\mathbb{Z}$, ce qui est absurde',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $x^2 = (\\sqrt{2} + \\sqrt{3})^2 = 5 + 2\\sqrt{6}$, donc $\\sqrt{6} = \\frac{x^2 - 5}{2}$. Si $x \\in \\mathbb{Q}$, alors $\\sqrt{6} \\in \\mathbb{Q}$, ce qui est faux. Attention : l’option C est un raisonnement faux car la somme de deux irrationnels peut être rationnelle (ex : $\\sqrt{2} + (1 - \\sqrt{2}) = 1$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Récurrence',
            stepTheme: 'green',
            stepTitle: 'Raisonnement par récurrence et identités sommatoires',
            paragraphText:
              'Pour prouver qu’une propriété $\\mathcal{P}(n)$ portant sur un entier naturel est vraie pour tout $n \\geqslant n_0$ (sommes d’annuités, bornes d’une suite récurrente, formules de dérivées $n$-ièmes), le principe de récurrence est l’outil universel.\n' +
              '• **Initialisation** : vérifier explicitement que $\\mathcal{P}(n_0)$ est vraie (souvent $n_0 = 0$ ou $n_0 = 1$).\n' +
              '• **Hérédité** : fixer un entier $n \\geqslant n_0$ quelconque, supposer $\\mathcal{P}(n)$ vraie (hypothèse de récurrence) et démontrer $\\mathcal{P}(n+1)$.\n' +
              '• **Application aux sommes** : pour $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$, le passage de $n$ à $n+1$ consiste à factoriser $(n+1)$ dans $\\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)(2n^2+7n+6)}{6} = \\frac{(n+1)(n+2)(2n+3)}{6}$.',
            formula: {
              name: 'Étape d’hérédité pour la somme des carrés',
              formula: '\\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)(n+2)(2n+3)}{6}',
              note: 'Factoriser (n+1) dès le début évite de développer des polynômes de degré 3.',
            },
            keyRule:
              'Ne jamais oublier l’initialisation ! La proposition « $2^n > 2^n + 1$ » est héréditaire (en multipliant par $2$, si $2^n > 2^n+1$ alors $2^{n+1} > 2^{n+1}+2 > 2^{n+1}+1$), mais elle est toujours fausse faute d’initialisation.',
            konanTip:
              'Dans une hérédité avec des fractions, mets systématiquement le facteur commun en facteur avant de développer le numérateur : tu divises par trois le risque d’erreur de calcul.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de la somme $S = 1^2 + 2^2 + 3^2 + \\cdots + 6^2$ ?',
              options: ['$70$', '$91$', '$105$', '$84$'],
              correctAnswerIndex: 1,
              explanation:
                'Avec la formule $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$ pour $n = 6$, on trouve $S = \\frac{6 \\times 7 \\times 13}{6} = 7 \\times 13 = 91$. Vérification : $1 + 4 + 9 + 16 + 25 + 36 = 91$.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch1_p2',
        order: 2,
        title: 'Majorants, minorants, bornes supérieure/inférieure et extrema',
        summary:
          'Distinguer rigoureusement majorant, $\\sup(A)$ et $\\max(A)$ (ainsi que minorant, $\\inf(A)$ et $\\min(A)$), utiliser la caractérisation par $\\varepsilon$ et l’axiome de la borne supérieure.',
        conceptExplanation:
          'L’axiome qui distingue fondamentalement $\\mathbb{R}$ de $\\mathbb{Q}$ est l’**axiome de la borne supérieure** : toute partie non vide et majorée de $\\mathbb{R}$ admet une borne supérieure dans $\\mathbb{R}$ (par exemple, $\\{x \\in \\mathbb{Q} \\mid x^2 \\leqslant 2\\}$ n’a pas de $\\sup$ dans $\\mathbb{Q}$, mais admet $\\sqrt{2}$ comme $\\sup$ dans $\\mathbb{R}$).\n\n' +
          '• **Majorant / Minorant** : $M$ majore $A$ si $\\forall x \\in A,\\ x \\leqslant M$ ; $m$ minore $A$ si $\\forall x \\in A,\\ x \\geqslant m$. Une partie à la fois majorée et minorée est dite **bornée**.\n' +
          '• **Borne supérieure $\\sup(A)$** : c’est le **plus petit des majorants** de $A$. Elle est unique lorsqu’elle existe.\n' +
          '• **Caractérisation par $\\varepsilon$** : $M = \\sup(A) \\iff (\\forall x \\in A,\\ x \\leqslant M)$ et $(\\forall \\varepsilon > 0,\\ \\exists x \\in A,\\ M - \\varepsilon < x \\leqslant M)$.\n' +
          '• **Maximum / Minimum** : $\\max(A)$ existe ssi $\\sup(A) \\in A$, auquel cas $\\max(A) = \\sup(A)$. Symétriquement, $\\min(A)$ existe ssi $\\inf(A) \\in A$.',
        formulas: [
          {
            name: 'Caractérisation par ε de sup(A) et inf(A)',
            formula: 'M = \\sup(A) \\iff \\begin{cases} \\forall x \\in A,\\ x \\leqslant M \\\\ \\forall \\varepsilon > 0,\\ \\exists x \\in A,\\ M - \\varepsilon < x \\end{cases}',
            note: 'Pour inf(A) = m : ∀x ∈ A, m ≤ x et ∀ε > 0, ∃x ∈ A, x < m + ε.',
          },
          {
            name: 'Symétrie par passage à l’opposé',
            formula: 'B = \\{-x \\mid x \\in A\\} \\implies \\inf(B) = -\\sup(A) \\quad \\text{et} \\quad \\sup(B) = -\\inf(A)',
            note: 'Propriété très utilisée pour déduire les théorèmes sur inf de ceux sur sup.',
          },
        ],
        keyRule:
          'Si $M = \\sup(A)$ et $M \\notin A$, alors $A$ n’a PAS de maximum ! Un majorant n’est jamais unique (si $M$ majore $A$, $M + 1$ aussi), tandis que $\\sup(A)$ et $\\max(A)$ sont uniques s’ils existent.',
        workedExample: {
          title: 'Étude complète de $C = \\left\\{(-1)^n + \\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\right\\}$',
          statement:
            'Déterminer les majorants, minorants, $\\sup(C)$, $\\inf(C)$, $\\max(C)$ et $\\min(C)$ pour $C = \\left\\{(-1)^n + \\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\right\\}$.',
          methodSteps: [
            'Séparons les entiers $n$ pairs et impairs. Pour $n = 2k$ ($k \\geqslant 1$), $u_{2k} = 1 + \\frac{1}{2k}$, qui décroît de $\\frac{3}{2}$ (pour $n=2$) vers $1$ (sans l’atteindre).',
            'Pour $n = 2k+1$ ($k \\geqslant 0$), $u_{2k+1} = -1 + \\frac{1}{2k+1}$, qui décroît de $0$ (pour $n=1$) vers $-1$ (sans l’atteindre).',
            'Tous les éléments de $C$ vérifient $-1 < x \\leqslant \\frac{3}{2}$. De plus $\\frac{3}{2} = u_2 \\in C$, donc $\\sup(C) = \\max(C) = \\frac{3}{2}$ (majorants : $[\\frac{3}{2}, +\\infty[$).',
            '$-1$ est un minorant de $C$. Pour tout $\\varepsilon > 0$, il existe un entier impair $n > \\frac{1}{\\varepsilon}$ tel que $-1 < -1 + \\frac{1}{n} < -1 + \\varepsilon$. Donc $\\inf(C) = -1$ (minorants : $]-\\infty, -1]$). Comme $-1 \\notin C$ (car $\\frac{1}{n} > 0$), $C$ n’a pas de minimum.',
          ],
          conclusion:
            '$\\sup(C) = \\max(C) = \\frac{3}{2}$, $\\inf(C) = -1$, et $C$ ne possède pas de minimum.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Majorants & Bornes',
            stepTheme: 'blue',
            stepTitle: 'Parties majorées, minorées et bornées de $\\mathbb{R}$',
            paragraphText:
              'Avant de chercher un optimum (coût minimal, rendement maximal), il faut savoir si les valeurs possibles restent confinées ou partent vers l’infini.\n' +
              '• **Majorant** : $a \\in \\mathbb{R}$ majore $A$ si $\\forall x \\in A,\\ x \\leqslant a$. Si $a$ majore $A$, alors tout réel $a’ > a$ majore aussi $A$ : un majorant n’est donc jamais unique.\n' +
              '• **Minorant** : $b \\in \\mathbb{R}$ minore $A$ si $\\forall x \\in A,\\ x \\geqslant b$.\n' +
              '• **Partie bornée** : $A$ est bornée ssi elle est à la fois majorée et minorée, ce qui équivaut à $\\exists K \\geqslant 0,\\ \\forall x \\in A,\\ |x| \\leqslant K$. Par exemple, $D = \\{n^2 \\mid n \\in \\mathbb{Z}\\}$ est minorée par $0$ (ou $-5$) mais non majorée, donc non bornée.',
            formula: {
              name: 'Caractérisation d’une partie bornée',
              formula: 'A \\text{ bornée} \\iff \\exists K \\geqslant 0,\\ \\forall x \\in A,\\ |x| \\leqslant K',
              note: 'Un ensemble borné tient entièrement dans un segment [-K, K].',
            },
            keyRule:
              'Ne confonds pas « bornée » avec « majorée » : $]-\\infty, 1]$ est majorée (par $1, 2, 10\\dots$) mais n’est pas minorée, donc elle n’est PAS bornée.',
            konanTip:
              'Pour prouver qu’un ensemble n’est pas majoré, montre que pour tout $M \\in \\mathbb{R}$, tu peux fabriquer un élément $x \\in A$ vérifiant $x > M$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q1',
              type: 'mcq',
              prompt:
                'Considérons l’ensemble $D = \\{n^2 \\mid n \\in \\mathbb{Z}\\}$. Quelle affirmation est **exacte** ?',
              options: [
                '$D$ est borné car $0 \\leqslant n^2$',
                '$D$ est majoré et non minoré',
                '$D$ est minoré (par exemple par $-3$ et $0$) et non majoré',
                '$D$ n’admet ni minorant ni majorant',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour tout $n \\in \\mathbb{Z}$, $n^2 \\geqslant 0 \\geqslant -3$, donc tout réel $\\leqslant 0$ minore $D$. En revanche, comme $n^2 \\to +\\infty$ quand $n \\to +\\infty$, aucun réel ne majore $D$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Axiome clé',
            stepTheme: 'violet',
            stepTitle: 'Borne supérieure, borne inférieure et axiome de complétude',
            paragraphText:
              'La borne supérieure $\\sup(A)$ est le seuil le plus serré qui coiffe l’ensemble $A$ par le haut : c’est le **plus petit des majorants** de $A$. Symétriquement, $\\inf(A)$ est le **plus grand des minorants** de $A$.\n' +
              '• **Axiome fondamental de $\\mathbb{R}$** : toute partie non vide et majorée de $\\mathbb{R}$ possède une borne supérieure dans $\\mathbb{R}$. Par passage à l’opposé, toute partie non vide et minorée de $\\mathbb{R}$ possède une borne inférieure.\n' +
              '• **Différence cruciale avec $\\mathbb{Q}$** : la partie $X = \\{x \\in \\mathbb{Q} \\mid x^2 \\leqslant 2\\}$ est non vide et majorée dans $\\mathbb{Q}$ (par $2$), mais elle n’a pas de borne supérieure dans $\\mathbb{Q}$ car son seuil exact est $\\sqrt{2} \\notin \\mathbb{Q}$.\n' +
              '• **Exemples directs** : pour $[0, 1]$ comme pour $]0, 1[$, on a $\\inf = 0$ et $\\sup = 1$.',
            formula: {
              name: 'Définition de sup(A) et inf(A)',
              formula: 'M = \\sup(A) \\iff (\\forall x \\in A,\\ x \\leqslant M) \\text{ et } (\\forall M’ \\text{ majorant de } A,\\ M \\leqslant M’)',
              note: 'L’unicité de sup(A) découle immédiatement de l’antisymétrie de ≤.',
            },
            keyRule:
              'Pour appliquer l’axiome de la borne supérieure à une partie $A \\subset \\mathbb{R}$, il faut TOUJOURS vérifier deux hypothèses : (1) $A$ est **non vide**, (2) $A$ est **majorée**.',
            konanTip:
              'Dès qu’un énoncé te demande de montrer qu’un nombre existe sans pouvoir le calculer explicitement, pense à l’axiome de la borne supérieure (ou au théorème de convergence monotone).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle est la borne supérieure dans $\\mathbb{R}$ de l’ensemble $X = \\{x \\in \\mathbb{Q} \\mid x^2 < 3\\}$ ?',
              options: [
                'Elle n’existe pas car les éléments sont dans $\\mathbb{Q}$',
                '$3$',
                '$\\sqrt{3}$',
                '$2$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Vu comme partie de $\\mathbb{R}$, $X$ est non vide ($0 \\in X$) et majorée par $\\sqrt{3}$. Par densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, pour tout $\\varepsilon > 0$, il existe un rationnel dans $]\\sqrt{3} - \\varepsilon, \\sqrt{3}[$, qui appartient à $X$. Donc $\\sup_{\\mathbb{R}}(X) = \\sqrt{3}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Caractérisation ε',
            stepTheme: 'green',
            stepTitle: 'Caractérisation par $\\varepsilon$ et propriété $\\inf(-A) = -\\sup(A)$',
            paragraphText:
              'Comment démontrer rigoureusement qu’un réel $M$ est bien $\\sup(A)$ lorsqu’on ne peut pas simplement lister tous les majorants ? La caractérisation par $\\varepsilon$ transforme la définition en un test opérationnel en deux temps.\n' +
              '• **Étape 1 (Majorant)** : prouver que $\\forall x \\in A,\\ x \\leqslant M$.\n' +
              '• **Étape 2 (Plus petit majorant)** : prouver que dès qu’on baisse $M$ d’un $\\varepsilon > 0$ arbitrairement petit, $M - \\varepsilon$ ne majore plus $A$, c’est-à-dire $\\exists x \\in A,\\ M - \\varepsilon < x \\leqslant M$.\n' +
              '• **Application au symétrique** : soit $B = \\{-x \\mid x \\in A\\}$ où $A$ est non vide majorée et $M = \\sup(A)$. Pour tout $y = -x \\in B$, $x \\leqslant M \\implies y \\geqslant -M$ ($-M$ minore $B$). Et pour tout $\\varepsilon > 0$, $\\exists x \\in A$ tel que $M - \\varepsilon < x$, soit $-x < -M + \\varepsilon$ : donc $\\inf(B) = -\\sup(A)$.',
            formula: {
              name: 'Caractérisation opérationnelle de inf(B)',
              formula: 'm = \\inf(B) \\iff (\\forall y \\in B,\\ y \\geqslant m) \\text{ et } (\\forall \\varepsilon > 0,\\ \\exists y \\in B,\\ m \\leqslant y < m + \\varepsilon)',
              note: 'Symétrique exacte de la caractérisation de sup(A).',
            },
            keyRule:
              'La caractérisation par $\\varepsilon$ signifie intuitivement que l’on peut trouver des éléments de $A$ aussi proches que l’on veut de $\\sup(A)$, sans jamais le dépasser.',
            konanTip:
              'Pour trouver $x \\in B = \\{1/n \\mid n \\in \\mathbb{N}^*\\}$ tel que $1/n < \\varepsilon$, il suffit de choisir $n = E(1/\\varepsilon) + 1$ : c’est la technique standard de l’examen !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q3',
              type: 'mcq',
              prompt:
                'Soit $A$ une partie non vide et majorée de $\\mathbb{R}$ telle que $\\sup(A) = 7$. On pose $B = \\{-x \\mid x \\in A\\}$. Que vaut $\\inf(B)$ ?',
              options: ['$7$', '$-7$', '$0$', 'On ne peut pas savoir sans connaître $A$'],
              correctAnswerIndex: 1,
              explanation:
                'La transformation $x \\mapsto -x$ renverse l’ordre : tout majorant $M$ de $A$ devient un minorant $-M$ de $B$, et le plus petit majorant $\\sup(A) = 7$ devient le plus grand minorant $\\inf(B) = -\\sup(A) = -7$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Distinguer borne supérieure et maximum (borne inférieure et minimum)',
            paragraphText:
              'C’est l’erreur la plus fréquente en première année : affirmer qu’un intervalle ouvert comme $]0, 5[$ possède un maximum égal à $5$ ou un minimum égal à $0$.\n' +
              '• **Définition du maximum** : $M = \\max(A) \\iff M \\in A$ **et** $\\forall x \\in A,\\ x \\leqslant M$. Si $\\max(A)$ existe, alors $\\sup(A)$ existe et $\\sup(A) = \\max(A)$.\n' +
              '• **Définition du minimum** : $m = \\min(A) \\iff m \\in A$ **et** $\\forall x \\in A,\\ x \\geqslant m$. Si $\\min(A)$ existe, alors $\\inf(A) = \\min(A)$.\n' +
              '• **Exemple décisif** : pour $A = ]0, 5]$, $\\sup(A) = 5 \\in A$ donc $\\max(A) = 5$ ; mais $\\inf(A) = 0 \\notin A$, donc $A$ n’a **pas de minimum** (pour tout $x \\in A$, $x/2 \\in A$ est strictement plus petit que $x$).',
            formula: {
              name: 'Lien entre bornes et extrema',
              formula: '\\max(A) \\text{ existe} \\iff \\sup(A) \\in A, \\qquad \\min(A) \\text{ existe} \\iff \\inf(A) \\in A',
              note: 'Un ensemble borné non vide a toujours un sup et un inf dans ℝ, mais pas toujours un max ou un min.',
            },
            keyRule:
              'Vérifie systématiquement l’appartenance : $\\sup(A) \\in A \\implies \\max(A) = \\sup(A)$ ; $\\sup(A) \\notin A \\implies$ pas de maximum !',
            konanTip:
              'Pour justifier rigoureusement qu’un ensemble $A$ n’a pas de minimum, il suffit d’écrire en deux lignes : « $\\inf(A) = m$, or $m \\notin A$, donc $A$ n’admet pas de minimum ».',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q4',
              type: 'mcq',
              prompt:
                'Pour l’ensemble $B = \\left\\{\\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\right\\}$, quelle proposition est **vraie** ?',
              options: [
                '$\\min(B) = 0$ et $\\max(B) = 1$',
                '$\\inf(B) = 0$, $\\sup(B) = \\max(B) = 1$, et $B$ n’a pas de minimum',
                '$\\inf(B) = 0$, $\\sup(B) = 1$, et $B$ n’a ni minimum ni maximum',
                '$B$ n’est pas minoré car $1/n$ devient arbitrairement petit',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour tout $n \\geqslant 1$, $0 < \\frac{1}{n} \\leqslant 1$ et $1 = \\frac{1}{1} \\in B$, donc $\\sup(B) = \\max(B) = 1$. De plus, $0$ est le plus grand minorant ($\\inf(B) = 0$), mais $\\frac{1}{n}$ ne vaut jamais $0$, donc $0 \\notin B$ et $B$ n’a pas de minimum.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Méthode d’étude',
            stepTheme: 'slate',
            stepTitle: 'Étudier les bornes d’une famille indexée par $n$ (parité pair/impair)',
            paragraphText:
              'Lorsqu’un ensemble contient un terme oscillant comme $(-1)^n$, il est indispensable de séparer les indices pairs et les indices impairs pour repérer les bornes sans se tromper.\n' +
              '• **Exemple** : $C = \\left\\{(-1)^n + \\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\right\\}$.\n' +
              '• **Indices pairs ($n = 2k, k \\geqslant 1$)** : les valeurs $1 + \\frac{1}{2k}$ valent $\\frac{3}{2}, \\frac{5}{4}, \\frac{7}{6}, \\dots$ et restent dans $]1, \\frac{3}{2}]$. Le maximum est donc atteint en $n = 2$ et vaut $\\frac{3}{2}$.\n' +
              '• **Indices impairs ($n = 2k+1, k \\geqslant 0$)** : les valeurs $-1 + \\frac{1}{2k+1}$ valent $0, -\\frac{2}{3}, -\\frac{4}{5}, \\dots$ et se rapprochent indéfiniment de $-1$ par valeurs supérieures. Ainsi $\\inf(C) = -1 \\notin C$ (pas de minimum).',
            formula: {
              name: 'Décomposition pair / impair de C',
              formula: 'C = \\left\\{1 + \\frac{1}{2k} \\mid k \\geqslant 1\\right\\} \\cup \\left\\{-1 + \\frac{1}{2k+1} \\mid k \\geqslant 0\\right\\}',
              note: 'Le sup d’une réunion finie est le max des sup ; l’inf est le min des inf.',
            },
            keyRule:
              'En présence de $(-1)^n$, ne cherche jamais le maximum en $n = 1$ sans calculer $n = 2$ : ici $u_1 = 0$ alors que $u_2 = 1{,}5$ !',
            konanTip:
              'Calcule toujours les 4 ou 5 premiers termes ($n = 1, 2, 3, 4, 5$) au brouillon pour visualiser instantanément les candidats à $\\sup$ et $\\inf$ avant de rédiger la preuve.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q5',
              type: 'mcq',
              prompt:
                'Pour $C = \\left\\{(-1)^n + \\frac{1}{n} \\mid n \\in \\mathbb{N}^*\\right\\}$, que valent $\\sup(C)$ et $\\inf(C)$ ?',
              options: [
                '$\\sup(C) = 2$ et $\\inf(C) = -1$',
                '$\\sup(C) = \\frac{3}{2}$ et $\\inf(C) = -1$',
                '$\\sup(C) = 1$ et $\\inf(C) = 0$',
                '$\\sup(C) = \\frac{3}{2}$ et $\\inf(C) = 0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $n = 1$, $u_1 = -1 + 1 = 0$. Pour $n = 2$, $u_2 = 1 + \\frac{1}{2} = \\frac{3}{2}$ (et pour tout $n \\geqslant 2$ pair, $u_n \\leqslant \\frac{3}{2}$). Pour $n$ impair grand, $u_n = -1 + \\frac{1}{n} \\to -1^+$ en restant $> -1$. Donc $\\sup(C) = \\frac{3}{2}$ et $\\inf(C) = -1$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Entiers naturels',
            stepTheme: 'violet',
            stepTitle: 'Extrema dans $\\mathbb{N}$ et propriété du bon ordre',
            paragraphText:
              'Contrairement à $\\mathbb{R}$, où une partie minorée peut ne pas avoir de minimum (comme $]0, 1[$), l’ensemble $\\mathbb{N}$ des entiers naturels est discret : on ne peut pas descendre indéfiniment vers une borne sans l’atteindre.\n' +
              '• **Principe du bon ordre** : toute partie non vide de $\\mathbb{N}$ possède un **plus petit élément** (minimum).\n' +
              '• **Symétrique pour les parties majorées** : toute partie non vide et majorée de $\\mathbb{N}$ est finie et possède donc un **plus grand élément** (maximum).\n' +
              '• **Utilité pratique** : c’est ce théorème qui garantit l’existence de la partie entière $E(x)$ (plus grand entier $\\leqslant x$) ainsi que la terminaison d’algorithmes entiers comme l’algorithme d’Euclide.',
            formula: {
              name: 'Théorème des extrema dans ℕ',
              formula: '(A \\subset \\mathbb{N},\\ A \\neq \\emptyset) \\implies \\min(A) \\text{ existe} ; \\qquad (A \\text{ majorée}) \\implies \\max(A) \\text{ existe}',
              note: 'Faux dans ℤ pour le minimum (ex : ℤ lui-même) sauf si la partie est minorée dans ℤ.',
            },
            keyRule:
              'Toute partie non vide minorée de $\\mathbb{Z}$ admet un minimum ; toute partie non vide majorée de $\\mathbb{Z}$ admet un maximum.',
            konanTip:
              'C’est exactement ce qui explique pourquoi une boucle `while` dont un invariant entier naturel décroît strictement à chaque itération finit forcément par s’arrêter !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p2_q6',
              type: 'mcq',
              prompt:
                'Laquelle de ces affirmations est **toujours vraie** ?',
              options: [
                'Toute partie non vide minorée de $\\mathbb{R}$ possède un minimum',
                'Toute partie non vide de $\\mathbb{Z}$ possède un minimum',
                'Toute partie non vide et majorée de $\\mathbb{N}$ possède un maximum',
                'Toute partie non vide et majorée de $\\mathbb{Q}$ possède une borne supérieure dans $\\mathbb{Q}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une partie non vide majorée de $\\mathbb{N}$ est incluse dans $\\{0, 1, \\dots, M\\}$, donc finie et non vide : elle admet un plus grand élément. Les options A ($]0,1[$), B ($\\mathbb{Z}$) et D ($\\{x\\in\\mathbb{Q} \\mid x^2 \\leqslant 2\\}$) admettent toutes un contre-exemple.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_analyse_ch1_p3',
        order: 3,
        title: 'Valeur absolue, inégalités triangulaires et partie entière E(x)',
        summary:
          'Exploiter la valeur absolue comme distance, démontrer les inégalités triangulaires et racinaires, maîtriser l’encadrement de la partie entière $E(x)$ et son comportement sur les négatifs.',
        conceptExplanation:
          'La **valeur absolue** $|x| = \\max(x, -x) = \\sqrt{x^2}$ mesure la distance de $x$ à $0$ sur la droite réelle ; plus généralement, $d(x, y) = |x - y|$ est la distance entre $x$ et $y$.\n\n' +
          '• **Inégalités triangulaires** : pour tous réels $x, y$, $|x + y| \\leqslant |x| + |y|$ (1re inégalité) et $\\big||x| - |y|\\big| \\leqslant |x - y|$ (2e inégalité, aussi valable avec $|x+y|$).\n' +
          '• **Parties positive/négative et max/min** : avec $x^+ = \\max(x,0)$ et $x^- = \\max(-x,0)$, on a $x = x^+ - x^-$, $|x| = x^+ + x^-$, $\\max(x,y) = \\frac{x+y+|x-y|}{2}$ et $\\min(x,y) = \\frac{x+y-|x-y|}{2}$.\n' +
          '• **Partie entière $E(x)$ (notée aussi $\\lfloor x \\rfloor$)** : unique entier relatif tel que $E(x) \\leqslant x < E(x) + 1$, ou de manière équivalente $x - 1 < E(x) \\leqslant x$.\n' +
          '• **Identités clés** : $\\forall k \\in \\mathbb{Z},\\ E(x + k) = E(x) + k$, et $E(x) + E(-x) = 0$ si $x \\in \\mathbb{Z}$, $-1$ si $x \\notin \\mathbb{Z}$.',
        formulas: [
          {
            name: 'Inégalités triangulaires',
            formula: '\\big||x| - |y|\\big| \\leqslant |x - y| \\quad \\text{et} \\quad |x + y| \\leqslant |x| + |y|',
            note: 'La seconde se prouve en écrivant |x| = |(x-y)+y| ≤ |x-y|+|y| puis par symétrie.',
          },
          {
            name: 'Max et min via la valeur absolue',
            formula: '\\max(x, y) = \\frac{x + y + |x - y|}{2}, \\qquad \\min(x, y) = \\frac{x + y - |x - y|}{2}',
            note: 'Pratique pour dériver ou prouver la continuité de max(f, g).',
          },
          {
            name: 'Double inégalité de la partie entière',
            formula: 'E(x) \\leqslant x < E(x) + 1 \\iff x - 1 < E(x) \\leqslant x',
            note: 'Permet d’encadrer E(x) dans tous les calculs de limites (théorème des gendarmes).',
          },
        ],
        keyRule:
          'Pour un nombre négatif non entier, la partie entière est l’entier **strictement inférieur** (plus à gauche sur la droite) : $E(-3{,}14) = -4$, jamais $-3$ !',
        workedExample: {
          title: 'Preuve de la 2e inégalité triangulaire et limite de $\\frac{E(nx)}{n}$',
          statement:
            '1) Démontrer que $\\forall (x, y) \\in \\mathbb{R}^2,\\ \\big||x| - |y|\\big| \\leqslant |x - y|$. 2) Déterminer $\\lim_{n \\to +\\infty} \\frac{E(nx)}{n}$ pour tout $x \\in \\mathbb{R}$.',
          methodSteps: [
            '1) Écrivons $x = (x - y) + y$. Par la 1re inégalité triangulaire, $|x| \\leqslant |x - y| + |y|$, d’où $|x| - |y| \\leqslant |x - y|$.',
            'En échangeant les rôles de $x$ et $y$ (et sachant $|y - x| = |x - y|$), on obtient $|y| - |x| \\leqslant |x - y|$, soit $-(|x| - |y|) \\leqslant |x - y|$.',
            'Comme $\\big||x| - |y|\\big| = \\max(|x| - |y|, |y| - |x|)$, on conclut $\\big||x| - |y|\\big| \\leqslant |x - y|$.',
            '2) Par définition de la partie entière, $nx - 1 < E(nx) \\leqslant nx$. En divisant par $n > 0$ : $x - \\frac{1}{n} < \\frac{E(nx)}{n} \\leqslant x$. Par le théorème des gendarmes, $\\lim_{n \\to +\\infty} \\frac{E(nx)}{n} = x$.',
          ],
          conclusion:
            '$\\big||x| - |y|\\big| \\leqslant |x - y|$ pour tous réels $x, y$, et $\\frac{E(nx)}{n} \\xrightarrow[n\\to+\\infty]{} x$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Distance',
            stepTheme: 'blue',
            stepTitle: 'Valeur absolue, distance et encadrement centré $|x - y| \\leqslant r$',
            paragraphText:
              'Lorsqu’un capteur numérique ou un modèle économique estime une grandeur $y$ avec une tolérance d’erreur $r > 0$, la condition « $x$ est à une distance au plus $r$ de $y$ » s’écrit de façon compacte $|x - y| \\leqslant r$.\n' +
              '• **Définition** : $|a| = a$ si $a \\geqslant 0$ et $|a| = -a$ si $a < 0$. On a toujours $|a| \\geqslant 0$, $|a| = 0 \\iff a = 0$, $|ab| = |a|\\,|b|$ et $\\sqrt{a^2} = |a|$.\n' +
              '• **Traduction en intervalle** : pour tout $r > 0$, $|x - y| \\leqslant r \\iff y - r \\leqslant x \\leqslant y + r \\iff x \\in [y - r, y + r]$.\n' +
              '• **Exemple** : une marge de $150\\ \\text{FCFA}$ autour d’un prix cible de $2\\,500\\ \\text{FCFA}$ correspond à $|p - 2500| \\leqslant 150$, soit $p \\in [2350, 2650]$.',
            formula: {
              name: 'Équivalence distance / intervalle centré',
              formula: '|x - y| \\leqslant r \\iff y - r \\leqslant x \\leqslant y + r \\quad (r > 0)',
              note: 'Et pour le complémentaire : |x - y| > r ⇔ x < y - r ou x > y + r.',
            },
            keyRule:
              'Attention au piège classique : $\\sqrt{x^2} = |x|$, et NON $x$ ! Si $x = -4$, $\\sqrt{(-4)^2} = \\sqrt{16} = 4 = |-4|$.',
            konanTip:
              'Pour transformer un intervalle $[a, b]$ en inégalité de valeur absolue, calcule le centre $c = \\frac{a+b}{2}$ et le rayon $r = \\frac{b-a}{2}$ : alors $x \\in [a, b] \\iff |x - c| \\leqslant r$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q1',
              type: 'mcq',
              prompt:
                'Quel est l’ensemble des réels $x$ vérifiant l’inéquation $|2x - 6| \\leqslant 4$ ?',
              options: ['$[-1, 5]$', '$[1, 5]$', '$[2, 10]$', '$[-5, -1]$'],
              correctAnswerIndex: 1,
              explanation:
                '$|2x - 6| \\leqslant 4 \\iff 2|x - 3| \\leqslant 4 \\iff |x - 3| \\leqslant 2 \\iff 3 - 2 \\leqslant x \\leqslant 3 + 2$, soit $x \\in [1, 5]$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Inégalités',
            stepTheme: 'violet',
            stepTitle: 'Première et deuxième inégalités triangulaires',
            paragraphText:
              'Les inégalités triangulaires sont les outils de majoration les plus utilisés en analyse pour contrôler des erreurs cumulées ou démontrer des limites.\n' +
              '• **1re inégalité triangulaire** : $\\forall (x, y) \\in \\mathbb{R}^2,\\ |x + y| \\leqslant |x| + |y|$. L’égalité a lieu si et seulement si $x$ et $y$ sont de même signe ($xy \\geqslant 0$).\n' +
              '• **2e inégalité triangulaire** : $\\forall (x, y) \\in \\mathbb{R}^2,\\ \\big||x| - |y|\\big| \\leqslant |x - y|$ (et aussi $\\big||x| - |y|\\big| \\leqslant |x + y|$ en remplaçant $y$ par $-y$).\n' +
              '• **Exemple** : pour $x = 3$ et $y = -5$, $|x + y| = |-2| = 2 \\leqslant 3 + 5 = 8$, et $\\big||3| - |-5|\\big| = |3 - 5| = 2 \\leqslant |3 - (-5)| = 8$.',
            formula: {
              name: 'Double inégalité triangulaire complète',
              formula: '\\big||x| - |y|\\big| \\leqslant |x - y| \\leqslant |x| + |y|',
              note: 'La partie gauche minore une distance ; la partie droite la majore.',
            },
            keyRule:
              'Dans la 2e inégalité, la valeur absolue extérieure est indispensable car $|x| - |y|$ peut être négatif : on écrit toujours $\\big||x| - |y|\\big| \\leqslant |x - y|$.',
            konanTip:
              'La 2e inégalité prouve instantanément que la fonction $x \\mapsto |x|$ est $1$-lipschitzienne, donc continue partout sur $\\mathbb{R}$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q2',
              type: 'mcq',
              prompt:
                'À quelle condition exacte a-t-on l’égalité $|x + y| = |x| + |y|$ pour deux réels $x$ et $y$ ?',
              options: [
                'Seulement si $x = y$',
                'Si et seulement si $x \\geqslant 0$ et $y \\geqslant 0$',
                'Si et seulement si $xy \\geqslant 0$ ($x$ et $y$ de même signe)',
                'Pour tous réels $x$ et $y$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En élevant au carré deux nombres positifs, $|x+y| = |x|+|y| \\iff (x+y)^2 = (|x|+|y|)^2 \\iff x^2 + 2xy + y^2 = x^2 + 2|xy| + y^2 \\iff xy = |xy| \\iff xy \\geqslant 0$. Cela fonctionne aussi quand $x$ et $y$ sont tous deux négatifs (ex : $|-2 + (-3)| = 5 = |-2| + |-3|$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Décomposition',
            stepTheme: 'violet',
            stepTitle: 'Parties positive/négative ($x^+, x^-$) et formules de $\\max$ / $\\min$',
            paragraphText:
              'En finance (payoff d’une option d’achat $\\max(S - K, 0)$) et en intelligence artificielle (fonction d’activation ReLU $x^+ = \\max(x, 0)$), on décompose un réel en sa partie positive et sa partie négative.\n' +
              '• **Définitions** : $x^+ = \\max(x, 0) = \\frac{|x| + x}{2}$ et $x^- = \\max(-x, 0) = \\frac{|x| - x}{2}$. Attention : $x^-$ est toujours **positif ou nul** !\n' +
              '• **Identités fondamentales** : $x = x^+ - x^-$ et $|x| = x^+ + x^-$.\n' +
              '• **Max et min de deux réels** : $\\max(x, y) = \\frac{x + y + |x - y|}{2}$ et $\\min(x, y) = \\frac{x + y - |x - y|}{2}$. Pour $x = -3$ et $y = 5$, $\\max = \\frac{2 + 8}{2} = 5$ et $\\min = \\frac{2 - 8}{2} = -3$.',
            formula: {
              name: 'Parties positive et négative d’un réel',
              formula: 'x^+ = \\frac{|x| + x}{2}, \\quad x^- = \\frac{|x| - x}{2}, \\quad x = x^+ - x^-, \\quad |x| = x^+ + x^-',
              note: 'Exemple : pour x = -7, x⁺ = 0 et x⁻ = 7 (positif !).',
            },
            keyRule:
              'Bien que son nom soit « partie négative », le nombre $x^- = \\max(-x, 0)$ est toujours $\\geqslant 0$ !',
            konanTip:
              'En posant $x = a - b$, la formule $\\max(a, b) = \\frac{a+b+|a-b|}{2}$ permet de prouver en une ligne que le maximum de deux fonctions continues est continu.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q3',
              type: 'mcq',
              prompt:
                'Pour $x = -6$, que valent respectivement la partie positive $x^+$ et la partie négative $x^-$ ?',
              options: [
                '$x^+ = 0$ et $x^- = -6$',
                '$x^+ = 0$ et $x^- = 6$',
                '$x^+ = 6$ et $x^- = 0$',
                '$x^+ = -6$ et $x^- = 6$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$x^+ = \\max(-6, 0) = 0$ et $x^- = \\max(-(-6), 0) = \\max(6, 0) = 6$. On vérifie bien $x^+ - x^- = 0 - 6 = -6 = x$ et $x^+ + x^- = 6 = |x|$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Inégalités racinaires',
            stepTheme: 'green',
            stepTitle: 'Inégalités classiques avec la racine carrée',
            paragraphText:
              'La fonction racine carrée est sous-additive sur $\\mathbb{R}_+$ : la racine d’une somme est toujours inférieure ou égale à la somme des racines.\n' +
              '• **Sous-additivité** : pour tous $a, b \\geqslant 0$, $\\sqrt{a + b} \\leqslant \\sqrt{a} + \\sqrt{b}$. Preuve : les deux membres sont positifs et $(\\sqrt{a} + \\sqrt{b})^2 = a + b + 2\\sqrt{ab} \\geqslant a + b = (\\sqrt{a+b})^2$.\n' +
              '• **Inégalité inversée avec valeur absolue** : pour tous $a, b \\in \\mathbb{R}$, $\\big|\\sqrt{|a|} - \\sqrt{|b|}\\big| \\leqslant \\sqrt{|a - b|}$.\n' +
              '• **Stratégie de preuve** : par la 1re inégalité triangulaire $|a| \\leqslant |a - b| + |b|$, puis par croissance et sous-additivité de $\\sqrt{\\cdot}$ : $\\sqrt{|a|} \\leqslant \\sqrt{|a - b| + |b|} \\leqslant \\sqrt{|a - b|} + \\sqrt{|b|}$, et on conclut par symétrie.',
            formula: {
              name: 'Inégalités fondamentales de la racine carrée',
              formula: '\\forall a, b \\geqslant 0,\\ \\sqrt{a + b} \\leqslant \\sqrt{a} + \\sqrt{b} ; \\qquad \\forall a, b \\in \\mathbb{R},\\ \\big|\\sqrt{|a|} - \\sqrt{|b|}\\big| \\leqslant \\sqrt{|a - b|}',
              note: 'La seconde sert à démontrer directement la continuité uniforme de x ↦ √x sur ℝ₊.',
            },
            keyRule:
              'Ne JAMAIS écrire $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ ! L’égalité n’a lieu que si $a = 0$ ou $b = 0$.',
            konanTip:
              'Pour comparer deux expressions positives contenant des racines carrées, compare leurs carrés : $A \\leqslant B \\iff A^2 \\leqslant B^2$ (valable uniquement lorsque $A \\geqslant 0$ et $B \\geqslant 0$ !).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q4',
              type: 'mcq',
              prompt:
                'Pour quels réels positifs $a, b \\in \\mathbb{R}_+$ a-t-on l’égalité $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ ?',
              options: [
                'Pour tous $a, b \\geqslant 0$',
                'Si et seulement si $a = b$',
                'Si et seulement si $a = 0$ ou $b = 0$',
                'Si et seulement si $a = 0$ et $b = 0$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En élevant au carré, $\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b} \\iff a + b = a + b + 2\\sqrt{ab} \\iff \\sqrt{ab} = 0 \\iff ab = 0 \\iff a = 0$ ou $b = 0$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Partie entière',
            stepTheme: 'blue',
            stepTitle: 'Définition, graphique en escalier et encadrement de $E(x)$',
            paragraphText:
              'La partie entière modélise tout phénomène à paliers discrets : facturation par tranches d’heures entières, calcul d’âges révolus ou conversion d’un réel en entier par défaut.\n' +
              '• **Définition** : pour tout $x \\in \\mathbb{R}$, il existe un unique entier relatif $p = E(x) \\in \\mathbb{Z}$ tel que $p \\leqslant x < p + 1$. C’est le plus grand entier inférieur ou égal à $x$.\n' +
              '• **Encadrement dual** : $E(x) \\leqslant x < E(x) + 1 \\iff x - 1 < E(x) \\leqslant x$.\n' +
              '• **Graphe en escalier** : $E$ est constante égale à $k$ sur chaque intervalle $[k, k+1[$ (point plein en $x = k$, point vide en $x = k+1$) et présente un saut de $+1$ à chaque entier.',
            formula: {
              name: 'Caractérisation de la partie entière',
              formula: 'p = E(x) \\iff p \\in \\mathbb{Z} \\text{ et } p \\leqslant x < p + 1',
              note: 'La partie fractionnaire {x} = x - E(x) appartient toujours à [0, 1[.',
            },
            keyRule:
              'La fonction $x \\mapsto E(x)$ est croissante (au sens large) sur $\\mathbb{R}$, continue à droite en tout entier, mais discontinue en tout entier $k \\in \\mathbb{Z}$.',
            konanTip:
              'Sur la représentation en escalier, chaque marche est fermée à gauche (point plein) et ouverte à droite (rond vide) : ainsi $E(2) = 2$ et $\\lim_{x \\to 2^-} E(x) = 1$.',
            visualSchema: {
              type: 'function_plot',
              title: 'Graphe en escalier de la fonction partie entière E(x)',
              caption: 'Sur chaque intervalle [k, k+1[, E(x) = k : extrémité gauche incluse (point plein), extrémité droite exclue (rond vide).',
              plot: {
                xMin: -3,
                xMax: 4,
                yMin: -3,
                yMax: 4,
                xStep: 1,
                yStep: 1,
                curves: [
                  {
                    label: 'y = E(x)',
                    color: 'blue',
                    pieces: [
                      { expr: '-3', from: -3, to: -2, includeFrom: true, includeTo: false },
                      { expr: '-2', from: -2, to: -1, includeFrom: true, includeTo: false },
                      { expr: '-1', from: -1, to: 0, includeFrom: true, includeTo: false },
                      { expr: '0', from: 0, to: 1, includeFrom: true, includeTo: false },
                      { expr: '1', from: 1, to: 2, includeFrom: true, includeTo: false },
                      { expr: '2', from: 2, to: 3, includeFrom: true, includeTo: false },
                      { expr: '3', from: 3, to: 4, includeFrom: true, includeTo: false },
                    ],
                  },
                  {
                    label: 'y = x',
                    color: 'slate',
                    pieces: [{ expr: 'x', from: -3, to: 4 }],
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle inégalité est **toujours vraie** pour tout réel $x \\in \\mathbb{R}$ ?',
              options: [
                '$x \\leqslant E(x) < x + 1$',
                '$x - 1 < E(x) \\leqslant x$',
                '$E(x) < x \\leqslant E(x) + 1$',
                '$x - 1 \\leqslant E(x) < x$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'De $E(x) \\leqslant x < E(x) + 1$, la première inégalité donne $E(x) \\leqslant x$, et la seconde $x < E(x) + 1$ donne $x - 1 < E(x)$. D’où $x - 1 < E(x) \\leqslant x$ (égalité à droite lorsque $x \\in \\mathbb{Z}$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège négatifs',
            stepTheme: 'orange',
            stepTitle: 'Partie entière des nombres négatifs et identité $E(x) + E(-x)$',
            paragraphText:
              'Une confusion fréquente consiste à assimiler $E(x)$ à la simple troncature des décimales (suppression de ce qui suit la virgule). Cela fonctionne pour $x \\geqslant 0$, mais échoue pour tout négatif non entier !\n' +
              '• **Règle sur les négatifs** : comme $-4 \\leqslant -\\pi < -3$, on a $E(-\\pi) = -4$ (et non $-3$). De même, $E(-0{,}01) = -1$ et $E(-2{,}3) = -3$.\n' +
              '• **Identité $E(x) + E(-x)$** : si $x \\in \\mathbb{Z}$, alors $E(x) = x$ et $E(-x) = -x$, donc $E(x) + E(-x) = 0$. Si $x \\notin \\mathbb{Z}$, posons $p = E(x)$ : on a $p < x < p + 1$, d’où $-p - 1 < -x < -p$, donc $E(-x) = -p - 1$ et $E(x) + E(-x) = -1$.\n' +
              '• **Translation entière** : en revanche, pour tout $k \\in \\mathbb{Z}$, $E(x + k) = E(x) + k$ est toujours vraie.',
            formula: {
              name: 'Identité E(x) + E(-x)',
              formula: 'E(x) + E(-x) = \\begin{cases} 0 & \\text{si } x \\in \\mathbb{Z} \\\\ -1 & \\text{si } x \\notin \\mathbb{Z} \\end{cases}',
              note: 'La fonction E n’est donc ni paire ni impaire !',
            },
            keyRule:
              'Avant de calculer $E(x)$ pour un réel négatif, place toujours $x$ entre deux entiers consécutifs $p \\leqslant x < p + 1$ et prends celui de GAUCHE ($p$).',
            konanTip:
              'En programmation (Python `math.floor`, Excel `ENT`), `floor(-2.3)` renvoie `-3` tandis que `int(-2.3)` renvoie `-2` (troncature vers zéro). En mathématiques, $E(x)$ est toujours `floor(x)` !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q6',
              type: 'mcq',
              prompt:
                'Que vaut $E(-4{,}1) + E(4{,}1) + E(-3) + E(3)$ ?',
              options: ['$0$', '$-1$', '$-2$', '$1$'],
              correctAnswerIndex: 1,
              explanation:
                'Comme $4{,}1 \\notin \\mathbb{Z}$, $E(-4{,}1) = -5$ et $E(4{,}1) = 4$, donc $E(-4{,}1) + E(4{,}1) = -1$. Comme $3 \\in \\mathbb{Z}$, $E(-3) + E(3) = -3 + 3 = 0$. La somme totale vaut $-1 + 0 = -1$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'methode',
            stepBadge: 'Équations',
            stepTheme: 'green',
            stepTitle: 'Résoudre une équation ou une inéquation avec $E(x)$',
            paragraphText:
              'Résoudre une équation contenant $E(x)$ revient presque toujours à traduire $E(u) = k$ (avec $k \\in \\mathbb{Z}$) par le double encadrement $k \\leqslant u < k + 1$.\n' +
              '• **Règle d’équivalence** : pour $k \\in \\mathbb{Z}$, $E(u) = k \\iff k \\leqslant u < k + 1$. Si $k \\notin \\mathbb{Z}$, l’équation $E(u) = k$ n’a **aucune solution** car $E(u)$ est toujours un entier.\n' +
              '• **Exemple 1** : $E(2x - 1) = 3 \\iff 3 \\leqslant 2x - 1 < 4 \\iff 4 \\leqslant 2x < 5 \\iff x \\in [2, \\frac{5}{2}[$.\n' +
              '• **Exemple 2 (inéquation)** : $E(x) \\leqslant 4 \\iff x < 5$ (car dès que $x < 5$, le plus grand entier $\\leqslant x$ vaut au plus $4$, tandis que pour $x = 5$, $E(5) = 5 > 4$).',
            formula: {
              name: 'Équivalences usuelles avec E(x)',
              formula: 'E(x) \\leqslant n \\iff x < n + 1 ; \\qquad E(x) \\geqslant n \\iff x \\geqslant n \\quad (n \\in \\mathbb{Z})',
              note: 'Attention au caractère strict de x < n + 1 dans la première équivalence !',
            },
            keyRule:
              'Si $n \\in \\mathbb{Z}$, $E(x) \\leqslant n$ équivaut à $x < n + 1$ (et NON $x \\leqslant n$ : par exemple $E(4{,}99) = 4 \\leqslant 4$).',
            konanTip:
              'Teste systématiquement les bornes de ton intervalle solution (par exemple $x = 2$ et $x = 2{,}5$) dans l’équation initiale pour confirmer les crochets fermés et ouverts.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch1_p3_q7',
              type: 'mcq',
              prompt:
                'Quel est l’ensemble des réels $x$ solutions de l’équation $E(3x + 1) = -2$ ?',
              options: [
                '$\\left[-1, -\\frac{2}{3}\\right[$',
                '$\\left]-1, -\\frac{2}{3}\\right]$',
                '$\\left[-\\frac{2}{3}, -\\frac{1}{3}\\right[$',
                '$\\emptyset$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $-2 \\in \\mathbb{Z}$, $E(3x + 1) = -2 \\iff -2 \\leqslant 3x + 1 < -1 \\iff -3 \\leqslant 3x < -2 \\iff -1 \\leqslant x < -\\frac{2}{3}$, soit $x \\in \\left[-1, -\\frac{2}{3}\\right[$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Suites numériques, convergence et modélisation économique
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch2',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 2 — Suites numériques, convergence et modélisation économique',
    summary:
      'Suites monotones et bornées, définition formelle de la limite, opérations et théorème des gendarmes, théorème de convergence monotone, suites adjacentes, suites arithmétiques/géométriques, suites récurrentes $u_{n+1}=f(u_n)$ et applications (intérêts composés, capitalisation continue, multiplicateur keynésien).',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch2_p1',
        order: 1,
        title: 'Suites numériques : monotonie, bornes, limites et opérations',
        summary:
          'Modéliser des phénomènes discrets par des suites, étudier monotonie et caractère borné, maîtriser la définition $(\\varepsilon, \\eta_\\varepsilon)$ de la limite, les pièges classiques et le théorème des gendarmes.',
        conceptExplanation:
          'Une **suite numérique** $(u_n)_{n \\in \\mathbb{N}}$ est une application de $\\mathbb{N}$ dans $\\mathbb{R}$ qui modélise l’évolution d’une grandeur à pas de temps discrets (capital annuel, utilisateurs mensuels d’une application, indice des prix).\n\n' +
          '• **Monotonie et bornes** : $(u_n)$ est croissante si $\\forall n,\\ u_{n+1} \\geqslant u_n$ ; décroissante si $u_{n+1} \\leqslant u_n$ ; bornée s’il existe $A, B \\in \\mathbb{R}$ tels que $\\forall n,\\ B \\leqslant u_n \\leqslant A$.\n' +
          '• **Limite finie** : $\\lim_{n \\to +\\infty} u_n = a \\iff \\forall \\varepsilon > 0,\\ \\exists \\eta_\\varepsilon \\in \\mathbb{N},\\ \\forall n \\geqslant \\eta_\\varepsilon,\\ |u_n - a| \\leqslant \\varepsilon$. Si la limite existe, elle est **unique**.\n' +
          '• **Lien convergence / bornitude** : toute suite convergente est bornée (mais la réciproque est fausse : $(-1)^n$ est bornée et diverge). Par contraposée, toute suite non bornée diverge.\n' +
          '• **Théorème des gendarmes** : si $u_n \\leqslant w_n \\leqslant v_n$ à partir d’un certain rang et $\\lim u_n = \\lim v_n = l$, alors $\\lim w_n = l$.',
        formulas: [
          {
            name: 'Définition formelle de la convergence vers a',
            formula: '\\lim_{n \\to +\\infty} u_n = a \\iff \\forall \\varepsilon > 0,\\ \\exists \\eta_\\varepsilon \\in \\mathbb{N},\\ \\forall n \\geqslant \\eta_\\varepsilon,\\ |u_n - a| \\leqslant \\varepsilon',
            note: 'Tous les termes à partir du rang η_ε appartiennent à l’intervalle [a - ε, a + ε].',
          },
          {
            name: 'Intérêts composés (modèle discret)',
            formula: 'x_{n+1} = (1 + i)x_n \\iff x_n = C(1 + i)^n',
            note: 'C : capital initial, i : taux périodique, n : nombre de périodes.',
          },
          {
            name: 'Théorème d’encadrement (gendarmes)',
            formula: '(u_n \\leqslant w_n \\leqslant v_n \\text{ et } \\lim u_n = \\lim v_n = l) \\implies \\lim w_n = l',
            note: 'Reste valable même si l’encadrement n’a lieu qu’à partir d’un rang n₀.',
          },
        ],
        keyRule:
          'Toute suite convergente est bornée, mais une suite bornée n’est pas nécessairement convergente (ex : $(-1)^n$) et une suite convergente n’est pas nécessairement monotone (ex : $\\frac{(-1)^n}{n} \\to 0$).',
        workedExample: {
          title: 'Encadrement d’une suite oscillante et somme de termes',
          statement:
            '1) Étudier la limite de $w_n = \\frac{3n + (-1)^n}{n + 2}$ pour $n \\in \\mathbb{N}$. 2) Déterminer $\\lim_{n \\to +\\infty} \\frac{1 + 2 + \\cdots + n}{n^2}$.',
          methodSteps: [
            '1) Pour tout $n \\in \\mathbb{N}$, $-1 \\leqslant (-1)^n \\leqslant 1$, donc $\\frac{3n - 1}{n + 2} \\leqslant w_n \\leqslant \\frac{3n + 1}{n + 2}$.',
            'En factorisant par $n$, $\\frac{3n - 1}{n + 2} = \\frac{3 - 1/n}{1 + 2/n} \\to 3$ et $\\frac{3n + 1}{n + 2} = \\frac{3 + 1/n}{1 + 2/n} \\to 3$.',
            'Par le théorème des gendarmes, $\\lim_{n \\to +\\infty} w_n = 3$.',
            '2) Comme $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$, on a $u_n = \\frac{n(n+1)}{2n^2} = \\frac{n+1}{2n} = \\frac{1}{2} + \\frac{1}{2n} \\xrightarrow[n\\to+\\infty]{} \\frac{1}{2}$.',
          ],
          conclusion:
            '$\\lim_{n\\to+\\infty} w_n = 3$ et $\\lim_{n\\to+\\infty} \\frac{1 + 2 + \\cdots + n}{n^2} = \\frac{1}{2}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Modélisation',
            stepTheme: 'blue',
            stepTitle: 'Suite numérique et modélisation par intérêts composés',
            paragraphText:
              'Les suites numériques sont le langage naturel des phénomènes observés à intervalles réguliers : chiffre d’affaires mensuel, nombre d’abonnés mobile money, ou capitalisation d’un placement financier.\n' +
              '• **Définition** : une suite réelle $(u_n)_{n \\geqslant n_0}$ associe à chaque entier $n \\geqslant n_0$ un réel $u_n$ (terme de rang $n$, avec terme initial $u_{n_0}$). Elle peut être donnée par une **formule explicite** ($u_n = 5 - \\frac{1}{n}$) ou par une **relation de récurrence** ($u_{n+1} = f(u_n)$).\n' +
              '• **Exemple financier (intérêts composés)** : un capital $C = 1\\,000\\,000\\ \\text{FCFA}$ placé au taux annuel $i = 6\\%$ vérifie $x_0 = C$ et $x_n = x_{n-1}(1 + i)$, d’où la formule explicite $x_n = C(1 + i)^n$.\n' +
              '• **Chiffrage** : au bout de $3$ ans, $x_3 = 1\\,000\\,000 \\times (1{,}06)^3 = 1\\,191\\,016\\ \\text{FCFA}$ (les intérêts eux-mêmes produisent des intérêts).',
            formula: {
              name: 'Valeur acquise à intérêts composés',
              formula: 'x_n = C(1 + i)^n',
              note: 'À ne pas confondre avec les intérêts simples C(1 + ni), qui croissent linéairement.',
            },
            keyRule:
              'Ne confonds pas la suite $(u_n)$ (l’objet global, une fonction de $\\mathbb{N}$ dans $\\mathbb{R}$) avec $u_n$ (un simple nombre réel, le terme de rang $n$).',
            konanTip:
              'Pour vérifier qu’une formule explicite correspond bien à une relation de récurrence, vérifie toujours l’indice initial $n_0$ (souvent $0$ ou $1$) : un décalage d’un cran fausse tous les calculs !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q1',
              type: 'mcq',
              prompt:
                'Un capital de $500\\,000\\ \\text{FCFA}$ est placé à intérêts composés au taux annuel de $10\\%$. Quelle est sa valeur acquise au bout de $2$ ans ?',
              options: [
                '$600\\,000\\ \\text{FCFA}$',
                '$605\\,000\\ \\text{FCFA}$',
                '$550\\,000\\ \\text{FCFA}$',
                '$610\\,000\\ \\text{FCFA}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À intérêts composés, $x_2 = C(1 + i)^2 = 500\\,000 \\times (1{,}1)^2 = 500\\,000 \\times 1{,}21 = 605\\,000\\ \\text{FCFA}$ (soit $5\\,000\\ \\text{FCFA}$ de plus qu’à intérêts simples).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Monotonie',
            stepTheme: 'green',
            stepTitle: 'Étudier la monotonie et le caractère borné d’une suite',
            paragraphText:
              'Savoir si une suite croît, décroît ou reste confinée entre deux bornes est la première étape de toute étude de convergence.\n' +
              '• **Méthode 1 (différence)** : étudier le signe de $u_{n+1} - u_n$. Si $u_{n+1} - u_n \\geqslant 0$ pour tout $n$, $(u_n)$ est croissante ; si $\\leqslant 0$, elle est décroissante.\n' +
              '• **Méthode 2 (quotient)** : lorsque $u_n > 0$ pour tout $n$, comparer $\\frac{u_{n+1}}{u_n}$ à $1$ (très efficace avec les puissances et les factorielles : pour $u_n = \\frac{2^n}{n!}$, $\\frac{u_{n+1}}{u_n} = \\frac{2}{n+1} \\leqslant 1$ dès $n \\geqslant 1$, donc décroissante à partir du rang $1$).\n' +
              '• **Méthode 3 (fonction associée)** : si $u_n = f(n)$, la monotonie de $f$ sur $[n_0, +\\infty[$ entraîne celle de $(u_n)$.',
            formula: {
              name: 'Critères pratiques de monotonie',
              formula: '(u_n) \\text{ croissante} \\iff \\forall n,\\ u_{n+1} - u_n \\geqslant 0 \\iff \\left(\\text{si } u_n > 0\\right)\\ \\frac{u_{n+1}}{u_n} \\geqslant 1',
              note: 'Piège : ne jamais utiliser le quotient si uₙ peut être négatif ou nul !',
            },
            keyRule:
              'La condition $\\forall n,\\ (u_{n+1} - u_n)(u_n - u_{n-1}) > 0$ caractérise la **monotonie stricte**, pas la monotonie large (une suite constante est monotone mais donne $0$).',
            konanTip:
              'Si une suite a une expression avec des factorielles $n!$ ou des puissances $a^n$, teste immédiatement le quotient $\\frac{u_{n+1}}{u_n}$ : les simplifications tombent tout de suite.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q2',
              type: 'mcq',
              prompt:
                'Soit la suite définie pour $n \\geqslant 1$ par $u_n = \\frac{3^n}{n!}$. À partir de quel rang $n$ la suite $(u_n)$ est-elle décroissante ?',
              options: [
                'Dès $n = 1$',
                'À partir de $n = 2$',
                'À partir de $n = 3$',
                'Elle est toujours croissante',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $u_n > 0$, calculons $\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}/(n+1)!}{3^n/n!} = \\frac{3}{n+1}$. On a $\\frac{3}{n+1} \\leqslant 1 \\iff n + 1 \\geqslant 3 \\iff n \\geqslant 2$. Vérification : $u_1 = 3$, $u_2 = 4{,}5$, $u_3 = 4{,}5$, $u_4 = 3{,}375\\dots$ : elle décroît bien (au sens large) dès $n = 2$ (et strictement dès $n = 3$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Limite finie',
            stepTheme: 'blue',
            stepTitle: 'Langage $(\\varepsilon, \\eta_\\varepsilon)$ de la convergence et unicité',
            paragraphText:
              'Dire qu’une suite $(u_n)$ converge vers un réel $a$, c’est dire qu’on peut rendre l’écart $|u_n - a|$ aussi petit qu’on le souhaite (inférieur à toute tolérance $\\varepsilon > 0$) à condition d’aller assez loin dans les rangs.\n' +
              '• **Définition formelle** : $\\lim_{n \\to +\\infty} u_n = a \\iff \\forall \\varepsilon > 0,\\ \\exists \\eta_\\varepsilon \\in \\mathbb{N},\\ \\forall n \\geqslant \\eta_\\varepsilon,\\ |u_n - a| \\leqslant \\varepsilon$.\n' +
              '• **Interprétation graphique** : toute bande horizontale $[a - \\varepsilon, a + \\varepsilon]$ autour de $a$ contient **tous** les termes de la suite sauf éventuellement un nombre fini (les premiers termes $0, 1, \\dots, \\eta_\\varepsilon - 1$).\n' +
              '• **Unicité de la limite** : une suite ne peut pas converger vers deux limites distinctes $a \\neq b$ (sinon en prenant $\\varepsilon = \\frac{|a-b|}{3}$, les bandes $[a-\\varepsilon, a+\\varepsilon]$ et $[b-\\varepsilon, b+\\varepsilon]$ seraient disjointes, ce qui est impossible).',
            formula: {
              name: 'Définition de la limite finie et de la limite +∞',
              formula: '\\lim u_n = +\\infty \\iff \\forall A > 0,\\ \\exists \\eta_A \\in \\mathbb{N},\\ \\forall n \\geqslant \\eta_A,\\ u_n > A',
              note: 'Modifier un nombre fini de premiers termes d’une suite ne change ni sa convergence ni sa limite.',
            },
            keyRule:
              'L’ordre des quantificateurs est crucial : $\\forall \\varepsilon > 0,\\ \\exists \\eta_\\varepsilon \\in \\mathbb{N}$ signifie que le rang seuil $\\eta_\\varepsilon$ **dépend** de la précision $\\varepsilon$ choisie (plus $\\varepsilon$ est petit, plus $\\eta_\\varepsilon$ est grand).',
            konanTip:
              'Pour trouver $\\eta_\\varepsilon$ sur un exemple concret comme $u_n = 5 - \\frac{1}{n}$ convergeant vers $5$, résous $|u_n - 5| = \\frac{1}{n} \\leqslant \\varepsilon \\iff n \\geqslant \\frac{1}{\\varepsilon}$, donc $\\eta_\\varepsilon = E(1/\\varepsilon) + 1$ convient.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q3',
              type: 'mcq',
              prompt:
                'Pour la suite $u_n = 2 + \\frac{1}{n+1}$ ($n \\in \\mathbb{N}$) qui converge vers $2$, quel est le plus petit rang $\\eta$ à partir duquel $|u_n - 2| \\leqslant 0{,}01$ ?',
              options: ['$99$', '$100$', '$101$', '$98$'],
              correctAnswerIndex: 0,
              explanation:
                'On résout $|u_n - 2| = \\frac{1}{n+1} \\leqslant 0{,}01 = \\frac{1}{100} \\iff n + 1 \\geqslant 100 \\iff n \\geqslant 99$. Le plus petit rang est donc $\\eta = 99$ (pour $n = 99$, $u_{99} = 2{,}01$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Divergence',
            stepTheme: 'blue',
            stepTitle: 'Les quatre comportements possibles et les types de divergence',
            paragraphText:
              'Contrairement à une idée reçue, « diverger » ne signifie pas uniquement « tendre vers l’infini » : une suite diverge dès qu’elle **ne possède pas de limite finie**.\n' +
              '• **Type I (Convergente)** : $\\lim u_n = a \\in \\mathbb{R}$ (exemple : $u_n = 5 - \\frac{1}{n} \\to 5$).\n' +
              '• **Type II (Divergence vers $+\\infty$)** : $u_n$ dépasse tout seuil $A > 0$ à partir d’un certain rang (exemple : $u_n = 7^n \\to +\\infty$).\n' +
              '• **Type III (Divergence vers $-\\infty$)** : $u_n$ passe en dessous de tout seuil $A < 0$ à partir d’un certain rang (exemple : $u_n = -n^2 \\to -\\infty$).\n' +
              '• **Type IV (Divergence sans limite)** : la suite oscille indéfiniment sans se stabiliser ni tendre vers $\\pm\\infty$ (exemple : $u_n = (-1)^n$ ou $u_n = \\sin(n)$).',
            formula: {
              name: 'Relation entre divergence et absence de limite finie',
              formula: '(u_n) \\text{ diverge} \\iff (\\lim u_n = +\\infty) \\text{ ou } (\\lim u_n = -\\infty) \\text{ ou } (u_n \\text{ n’a pas de limite})',
              note: 'Pour prouver que (-1)ⁿ n’a pas de limite, on montre que les sous-suites paire (+1) et impaire (-1) ont des limites différentes.',
            },
            keyRule:
              'Une suite qui admet deux sous-suites (par exemple $u_{2n}$ et $u_{2n+1}$) convergeant vers deux limites distinctes ne possède **aucune limite** et diverge donc.',
            konanTip:
              'En cas de terme oscillant $(-1)^n$, examine immédiatement $u_{2n}$ et $u_{2n+1}$ : s’ils convergent vers la même limite $l$, alors $(u_n)$ converge vers $l$ ; sinon $(u_n)$ diverge !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q4',
              type: 'mcq',
              prompt:
                'Parmi les suites suivantes, laquelle est **divergente sans admettre de limite** (ni finie, ni infinie) ?',
              options: [
                '$u_n = \\left(-\\frac{1}{9}\\right)^n$',
                '$u_n = \\frac{(-1)^n}{n+1}$',
                '$u_n = (-1)^n + \\frac{1}{n+1}$',
                '$u_n = 5 - 8n$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour $u_n = (-1)^n + \\frac{1}{n+1}$, on a $u_{2n} = 1 + \\frac{1}{2n+1} \\to 1$ et $u_{2n+1} = -1 + \\frac{1}{2n+2} \\to -1$. Les deux sous-suites ayant des limites distinctes, $(u_n)$ n’a pas de limite. Les options A et B convergent vers $0$, et D tend vers $-\\infty$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Vrai / Faux pièges',
            stepTheme: 'orange',
            stepTitle: 'Convergence, bornitude et pièges sur $|u_n|$ et $u_n^2$',
            paragraphText:
              'Les questions de logique sur les implications entre convergence, bornitude et valeur absolue sont des classiques incontournables des examens de première année.\n' +
              '• **Convergence $\\implies$ Bornée** : si $u_n \\to a$, alors à partir d’un rang $\\eta$, $u_n \\in [a-1, a+1]$ ; les $\\eta$ premiers termes étant en nombre fini, toute la suite est bornée. Par contraposée, non bornée $\\implies$ divergente.\n' +
              '• **Piège sur $|u_n|$** : $u_n \\to l \\implies |u_n| \\to |l|$, mais la réciproque est **FAUSSE** ! Pour $u_n = (-1)^n$, $|u_n| = 1 \\to 1$ mais $(u_n)$ diverge. Seule exception : $|u_n| \\to 0 \\iff u_n \\to 0$.\n' +
              '• **Piège sur $u_n^2$** : si $u_n^2 \\to l$, on ne peut PAS conclure $u_n \\to \\sqrt{l}$ (contre-exemple : $u_n = -2$ donne $u_n^2 = 4 \\to 4$, mais $u_n \\to -2 \\neq 2$, ou $u_n = (-1)^n$ donne $u_n^2 = 1$ sans limite pour $u_n$).',
            formula: {
              name: 'Implications vraies et fausses classiques',
              formula: '(u_n \\to l \\implies |u_n| \\to |l|), \\quad (|u_n| \\to 0 \\iff u_n \\to 0), \\quad (u_n \\text{ converge} \\implies u_n \\text{ bornée})',
              note: 'Réciproque de |uₙ| → |l| fausse dès que l ≠ 0 ; réciproque de « bornée » fausse.',
            },
            keyRule:
              'Si $\\lim \\frac{u_n}{u_{n+1}} = a \\neq 1$ et que $(u_n)$ converge vers un réel $l$, alors nécessairement $l = 0$ (car si $l \\neq 0$, le quotient tendrait vers $l/l = 1 \\neq a$, contradiction).',
            konanTip:
              'Pour tester instantanément une affirmation universelle sur les suites en QCM, garde toujours en poche tes trois contre-exemples magiques : $u_n = (-1)^n$, $u_n = \\frac{(-1)^n}{n}$ et $u_n = -1$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q5',
              type: 'mcq',
              prompt:
                'Soit $(u_n)$ une suite réelle et $l \\in \\mathbb{R}$. Laquelle des affirmations suivantes est **vraie** ?',
              options: [
                'Si $\\lim_{n \\to +\\infty} |u_n| = |l|$, alors $\\lim_{n \\to +\\infty} u_n = l$',
                'Si $\\lim_{n \\to +\\infty} u_n^2 = l$, alors $\\lim_{n \\to +\\infty} u_n = \\sqrt{l}$',
                'Toute suite convergente est bornée',
                'Toute suite bornée est convergente',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Toute suite convergente est bornée (C est vraie). A et B sont réfutées par $u_n = (-1)^n$ (avec $l=1$), et D est également réfutée par $u_n = (-1)^n$, qui est bornée entre $-1$ et $1$ mais diverge.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Opérations & Gendarmes',
            stepTheme: 'violet',
            stepTitle: 'Opérations sur les limites, formes indéterminées et passage à la limite',
            paragraphText:
              'Les opérations usuelles (somme, produit, quotient de dénominateur non nul) passent à la limite, mais les inégalités strictes deviennent larges et quatre formes indéterminées imposent de transformer l’expression.\n' +
              '• **Passage à la limite dans une inégalité** : si $u_n < v_n$ (ou $u_n \\leqslant v_n$) à partir d’un rang $n_0$ et si $u_n \\to a$ et $v_n \\to b$, alors $a \\leqslant b$ (l’inégalité stricte se perd : $0 < \\frac{1}{n}$ mais $\\lim \\frac{1}{n} = 0$).\n' +
              '• **Somme avec suite bornée** : si $u_n \\to +\\infty$ et $(v_n)$ est bornée, alors $u_n + v_n \\to +\\infty$ (ex : $n + (-1)^n \\to +\\infty$).\n' +
              '• **Les 4 formes indéterminées** : $(+\\infty) - (+\\infty)$, $0 \\times (\\pm\\infty)$, $\\frac{\\pm\\infty}{\\pm\\infty}$ et $\\frac{0}{0}$. Pour les lever, on factorise le terme dominant ou on multiplie par l’expression conjuguée.',
            formula: {
              name: 'Théorème des gendarmes et passage à la limite',
              formula: '(\\forall n \\geqslant n_0,\\ u_n \\leqslant w_n \\leqslant v_n \\text{ et } \\lim u_n = \\lim v_n = l) \\implies \\lim w_n = l',
              note: 'Si uₙ ≤ vₙ et lim uₙ = +∞, alors lim vₙ = +∞ (théorème de comparaison).',
            },
            keyRule:
              'Une inégalité **stricte** $u_n < v_n$ devient toujours une inégalité **large** $a \\leqslant b$ lors du passage à la limite !',
            konanTip:
              'Dès que tu vois $\\sin(n)$, $\\cos(n)$ ou $(-1)^n$ divisé par un terme qui tend vers $+\\infty$, pense immédiatement au théorème des gendarmes avec l’encadrement $-1 \\leqslant \\sin(n) \\leqslant 1$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle est la limite quand $n \\to +\\infty$ de la suite $u_n = \\frac{4n^2 + \\cos(n)}{2n^2 - n + 1}$ ?',
              options: ['$0$', '$2$', '$+\\infty$', 'Elle n’a pas de limite à cause de $\\cos(n)$'],
              correctAnswerIndex: 1,
              explanation:
                'On divise numérateur et dénominateur par $n^2$ : $u_n = \\frac{4 + \\frac{\\cos(n)}{n^2}}{2 - \\frac{1}{n} + \\frac{1}{n^2}}$. Comme $-\\frac{1}{n^2} \\leqslant \\frac{\\cos(n)}{n^2} \\leqslant \\frac{1}{n^2}$, le théorème des gendarmes donne $\\frac{\\cos(n)}{n^2} \\to 0$, donc $u_n \\to \\frac{4}{2} = 2$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch2_p2',
        order: 2,
        title: 'Théorèmes de convergence : suites monotones bornées et suites adjacentes',
        summary:
          'Prouver l’existence d’une limite sans la connaître via le théorème de convergence monotone et les suites adjacentes, construire le nombre $e$ et analyser les séries classiques ($\\sum 1/k^2$ vs $\\sum 1/k$).',
        conceptExplanation:
          'Dans de nombreux modèles (approximations numériques, séries, suites récurrentes), on ne connaît pas de formule explicite pour la limite. Les théorèmes d’existence permettent de prouver la convergence uniquement par la monotonie et les bornes.\n\n' +
          '• **Théorème de convergence monotone** : toute suite **croissante et majorée** converge (vers $\\sup_n u_n$) ; toute suite **décroissante et minorée** converge (vers $\\inf_n u_n$). Une suite croissante non majorée tend vers $+\\infty$.\n' +
          '• **Suites adjacentes** : $(u_n)$ et $(v_n)$ sont adjacentes ssi (1) $(u_n)$ est croissante, (2) $(v_n)$ est décroissante, (3) $\\lim_{n \\to +\\infty} (v_n - u_n) = 0$. Alors elles convergent vers la **même limite** $l$, et pour tout $n$, $u_n \\leqslant l \\leqslant v_n$.\n' +
          '• **Nombre d’Euler $e$** : la suite $(1 + \\frac{1}{n})^n$ est croissante et majorée par $3$, donc converge vers $e \\approx 2{,}71828$. En finance, un capital $C$ capitalisé continûment au taux $r$ vaut $C e^r$ après un an.\n' +
          '• **Séries de référence** : $H_n = \\sum_{k=1}^n \\frac{1}{k}$ (série harmonique) diverge vers $+\\infty$, tandis que $S_n = \\sum_{k=1}^n \\frac{1}{k^2}$ converge (majorée par $2$).',
        formulas: [
          {
            name: 'Critère des suites adjacentes',
            formula: '\\begin{cases} (u_n) \\text{ croissante} \\\\ (v_n) \\text{ décroissante} \\\\ \\lim_{n\\to+\\infty}(v_n - u_n) = 0 \\end{cases} \\implies \\exists l \\in \\mathbb{R},\\ \\lim u_n = \\lim v_n = l \\text{ et } u_n \\leqslant l \\leqslant v_n',
            note: 'Fournit automatiquement un encadrement chiffré de l’erreur |l - uₙ| ≤ vₙ - uₙ !',
          },
          {
            name: 'Limite fondamentale du nombre e et capitalisation continue',
            formula: '\\lim_{n \\to +\\infty} \\left(1 + \\frac{r}{n}\\right)^n = e^r, \\qquad \\text{en particulier } \\lim_{n \\to +\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2{,}718',
            note: 'Si un taux annuel r est capitalisé n fois par an, la valeur acquise tend vers Ceʳ.',
          },
        ],
        keyRule:
          'Pour prouver que deux suites sont adjacentes, il faut TOUJOURS vérifier les **trois conditions** : $(u_n)$ croissante, $(v_n)$ décroissante, et $\\lim (v_n - u_n) = 0$ — aucune des trois ne peut être omise !',
        workedExample: {
          title: 'Suites adjacentes convergeant vers $e$ : $u_n = \\sum_{k=0}^n \\frac{1}{k!}$ et $v_n = u_n + \\frac{1}{n!}$',
          statement:
            'Montrer que les suites définies pour $n \\geqslant 1$ par $u_n = \\sum_{k=0}^n \\frac{1}{k!}$ et $v_n = u_n + \\frac{1}{n!}$ sont adjacentes, puis en déduire un encadrement de leur limite commune.',
          methodSteps: [
            '1) Monotonie de $(u_n)$ : $u_{n+1} - u_n = \\frac{1}{(n+1)!} > 0$, donc $(u_n)$ est strictement croissante.',
            '2) Monotonie de $(v_n)$ : $v_{n+1} - v_n = (u_{n+1} - u_n) + \\frac{1}{(n+1)!} - \\frac{1}{n!} = \\frac{2}{(n+1)!} - \\frac{n+1}{(n+1)!} = \\frac{1 - n}{(n+1)!} \\leqslant 0$ pour tout $n \\geqslant 1$, donc $(v_n)$ est décroissante.',
            '3) Limite de la différence : $v_n - u_n = \\frac{1}{n!}$. Comme $n! \\geqslant n$ pour tout $n \\geqslant 1$, $0 < \\frac{1}{n!} \\leqslant \\frac{1}{n} \\to 0$, donc $\\lim (v_n - u_n) = 0$.',
            '4) Les suites sont adjacentes, donc convergent vers une même limite $l = e$, avec $u_3 \\leqslant e \\leqslant v_3$, soit $2{,}666\\dots \\leqslant e \\leqslant 2{,}833\\dots$.',
          ],
          conclusion:
            '$(u_n)$ et $(v_n)$ sont adjacentes et convergent vers $e$, avec une précision de $\\frac{1}{n!}$ au rang $n$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Convergence monotone',
            stepTheme: 'violet',
            stepTitle: 'Théorème des suites monotones bornées',
            paragraphText:
              'Comment prouver qu’une suite converge lorsqu’on ne connaît pas la valeur de sa limite ? Le théorème de convergence monotone est la conséquence directe de l’axiome de la borne supérieure.\n' +
              '• **Cas croissant** : si $(u_n)$ est croissante et majorée par un réel $M$, alors elle converge vers une limite finie $l = \\sup_{n \\in \\mathbb{N}} u_n \\leqslant M$. Si elle est croissante et non majorée, elle diverge vers $+\\infty$.\n' +
              '• **Cas décroissant** : si $(u_n)$ est décroissante et minorée par $m$, alors elle converge vers $l = \\inf_{n \\in \\mathbb{N}} u_n \\geqslant m$.\n' +
              '• **Attention cruciale** : la limite $l$ n’est pas forcément égale au majorant $M$ utilisé dans la preuve ! Si tu montres que $(u_n)$ est croissante et majorée par $10$, tu prouves seulement $l \\leqslant 10$.',
            formula: {
              name: 'Théorème de convergence monotone',
              formula: '\\text{Croissante et majorée} \\implies \\text{converge vers } \\sup_n u_n ; \\qquad \\text{Décroissante et minorée} \\implies \\text{converge vers } \\inf_n u_n',
              note: 'Ne nécessite jamais de connaître la valeur de la limite a priori.',
            },
            keyRule:
              'Une suite croissante n’a que deux destins possibles : soit elle est majorée et converge vers un réel fini, soit elle n’est pas majorée et tend vers $+\\infty$. Elle ne peut jamais osciller !',
            konanTip:
              'Ne confonds pas majorant et limite : prouver $u_n \\leqslant 5$ prouve que la suite converge vers un $l \\leqslant 5$, pas que $l = 5$. Pour trouver $l$, il faut une seconde étape (comme $f(l) = l$).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q1',
              type: 'mcq',
              prompt:
                'On sait qu’une suite $(u_n)$ est décroissante et que pour tout $n \\in \\mathbb{N}$, $u_n \\geqslant -3$. Que peut-on conclure avec certitude ?',
              options: [
                '$(u_n)$ converge vers $-3$',
                '$(u_n)$ converge vers une limite finie $l \\geqslant -3$',
                '$(u_n)$ converge vers une limite finie $l \\leqslant -3$',
                'On ne peut rien conclure sans savoir si $(u_n)$ est majorée',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une suite décroissante est automatiquement majorée par $u_0$. Comme elle est minorée par $-3$, le théorème de convergence monotone assure qu’elle converge vers $l = \\inf u_n \\geqslant -3$ (mais $l$ peut être strictement supérieur à $-3$, par exemple $u_n = \\frac{1}{n+1} \\to 0 \\geqslant -3$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Suites adjacentes',
            stepTheme: 'blue',
            stepTitle: 'Définition et théorème des suites adjacentes',
            paragraphText:
              'Imagine deux pinces qui se rapprochent l’une de l’autre : la pince inférieure $(u_n)$ monte sans jamais reculer, la pince supérieure $(v_n)$ descend sans jamais remonter, et l’écart entre les deux tend vers $0$. Elles finissent forcément par se rejoindre en un unique point !\n' +
              '• **Les 3 conditions** : (1) $(u_n)$ croissante ; (2) $(v_n)$ décroissante ; (3) $\\lim_{n \\to +\\infty} (v_n - u_n) = 0$.\n' +
              '• **Théorème** : deux suites adjacentes convergent vers la **même limite** $l \\in \\mathbb{R}$, et vérifient $u_0 \\leqslant u_1 \\leqslant \\cdots \\leqslant u_n \\leqslant l \\leqslant v_n \\leqslant \\cdots \\leqslant v_1 \\leqslant v_0$.\n' +
              '• **Force numérique** : on obtient immédiatement une borne exacte de l’erreur d’approximation : $|l - u_n| \\leqslant v_n - u_n$.',
            formula: {
              name: 'Encadrement garanti par deux suites adjacentes',
              formula: '\\forall n \\in \\mathbb{N},\\quad u_n \\leqslant l \\leqslant v_n \\quad \\text{et} \\quad 0 \\leqslant l - u_n \\leqslant v_n - u_n',
              note: 'C’est le fondement théorique de la méthode de dichotomie en analyse numérique.',
            },
            keyRule:
              'Attention : si $(u_n)$ est croissante et $(v_n)$ décroissante, mais que $v_n - u_n \\to 2 \\neq 0$, elles convergent toutes les deux, mais vers deux limites **distinctes** distantes de $2$ !',
            konanTip:
              'Pour vérifier que $u_n \\leqslant v_n$ pour tout $n$, pas besoin de récurrence : $(v_n - u_n)$ est décroissante et tend vers $0$, donc tous ses termes sont nécessairement $\\geqslant 0$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q2',
              type: 'mcq',
              prompt:
                'Deux suites $(u_n)$ et $(v_n)$ vérifient : $(u_n)$ est croissante, $(v_n)$ est décroissante, et $v_n - u_n = \\frac{1}{2^n}$. Si $u_4 = 1{,}60$ et $v_4 = 1{,}6625$, que peut-on affirmer de leur limite commune $l$ ?',
              options: [
                '$l = 1{,}60$',
                '$1{,}60 \\leqslant l \\leqslant 1{,}6625$',
                '$l \\geqslant 1{,}6625$',
                'Les suites ne sont pas adjacentes car $\\frac{1}{2^n} > 0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $\\lim \\frac{1}{2^n} = 0$, les deux suites sont adjacentes et convergent vers une même limite $l$ qui vérifie $u_n \\leqslant l \\leqslant v_n$ pour tout $n$, donc en particulier $1{,}60 \\leqslant l \\leqslant 1{,}6625$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Construction de e',
            stepTheme: 'slate',
            stepTitle: 'Approximation du nombre $e$ par suites adjacentes factorielles',
            paragraphText:
              'Les suites $u_n = \\sum_{k=0}^n \\frac{1}{k!}$ et $v_n = u_n + \\frac{1}{n!}$ (pour $n \\geqslant 1$) constituent l’exemple le plus célèbre de suites adjacentes : elles convergent ultra-rapidement vers la constante d’Euler $e \\approx 2{,}7182818$.\n' +
              '• **Croissance de $(u_n)$** : $u_{n+1} - u_n = \\frac{1}{(n+1)!} > 0$.\n' +
              '• **Décroissance de $(v_n)$** : $v_{n+1} - v_n = \\frac{1}{(n+1)!} + \\frac{1}{(n+1)!} - \\frac{1}{n!} = \\frac{2 - (n+1)}{(n+1)!} = \\frac{1 - n}{(n+1)!} \\leqslant 0$ dès $n \\geqslant 1$.\n' +
              '• **Écart vers $0$** : $v_n - u_n = \\frac{1}{n!} \\to 0$. Dès $n = 6$, $\\frac{1}{6!} = \\frac{1}{720} < 0{,}0014$ : on connaît déjà $e$ au millième près ! (On note aussi que $w_n = u_n + \\frac{1}{n \\cdot n!}$ est encore plus serrée et permet même de prouver l’irrationalité de $e$).',
            formula: {
              name: 'Différence vₙ₊₁ − vₙ pour la suite d’Euler',
              formula: 'v_{n+1} - v_n = \\frac{2}{(n+1)!} - \\frac{1}{n!} = \\frac{1 - n}{(n+1)!} \\leqslant 0 \\quad (n \\geqslant 1)',
              note: 'Rappel : (n+1)! = (n+1) × n!, d’où 1/n! = (n+1)/(n+1)!.',
            },
            keyRule:
              'Pour simplifier une différence de fractions factorielles $\\frac{1}{(n+1)!} - \\frac{1}{n!}$, mets toujours au dénominateur commun $(n+1)!$ en utilisant $\\frac{1}{n!} = \\frac{n+1}{(n+1)!}$.',
            konanTip:
              'La convergence en $\\frac{1}{n!}$ est exponentiellement plus rapide que celle de $(1 + 1/n)^n$ (qui a une erreur en $1/n$) : pour $n = 10$, $10! = 3\\,628\\,800$, soit $6$ décimales exactes !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q3',
              type: 'mcq',
              prompt:
                'Pour $u_n = \\sum_{k=0}^n \\frac{1}{k!}$ et $v_n = u_n + \\frac{1}{n!}$, que vaut $v_{n+1} - v_n$ ?',
              options: [
                '$\\frac{1}{(n+1)!}$',
                '$\\frac{1 - n}{(n+1)!}$',
                '$-\\frac{1}{(n+1)!}$',
                '$\\frac{n - 1}{(n+1)!}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$v_{n+1} - v_n = (u_{n+1} - u_n) + \\frac{1}{(n+1)!} - \\frac{1}{n!} = \\frac{1}{(n+1)!} + \\frac{1}{(n+1)!} - \\frac{n+1}{(n+1)!} = \\frac{2 - n - 1}{(n+1)!} = \\frac{1 - n}{(n+1)!} \\leqslant 0$ pour $n \\geqslant 1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Finance continue',
            stepTheme: 'slate',
            stepTitle: 'La suite $\\left(1 + \\frac{1}{n}\\right)^n \\to e$ et la capitalisation continue',
            paragraphText:
              'En finance de marché, que devient un capital de $1\\,000\\,000\\ \\text{FCFA}$ placé au taux annuel de $7\\%$ si les intérêts sont capitalisés non plus une fois par an, mais chaque mois ($n=12$), chaque jour ($n=365$), ou à chaque instant ($n \\to +\\infty$) ?\n' +
              '• **Suite des valeurs acquises** : $y_n = 1\\,000\\,000 \\left(1 + \\frac{0{,}07}{n}\\right)^n$.\n' +
              '• **Preuve de convergence pour $r = 1$** : en développant $\\left(1 + \\frac{1}{n}\\right)^n$ par la formule du binôme de Newton, on montre que la suite est croissante et majorée par $3$ (car $\\frac{1}{k!} \\leqslant \\frac{1}{2^{k-1}}$ pour $k \\geqslant 1$, et $1 + 1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots < 3$).\n' +
              '• **Limite financière** : quand $n \\to +\\infty$, $\\left(1 + \\frac{r}{n}\\right)^n \\to e^r$. Pour $r = 0{,}07$, la capitalisation continue plafonne à $1\\,000\\,000 \\times e^{0{,}07} \\approx 1\\,072\\,508\\ \\text{FCFA}$ (à peine $2\\,508\\ \\text{FCFA}$ de plus que la capitalisation annuelle !).',
            formula: {
              name: 'Limite de la capitalisation continue',
              formula: '\\lim_{n \\to +\\infty} C\\left(1 + \\frac{r}{n}\\right)^n = C e^r',
              note: 'On retrouve cette limite via (1 + r/n)ⁿ = exp(n ln(1 + r/n)) et ln(1 + u) ~ u en 0.',
            },
            keyRule:
              'Attention à la forme indéterminée $1^\\infty$ ! Même si $1 + \\frac{r}{n} \\to 1$, l’exposant $n \\to +\\infty$ empêche de conclure que la limite vaut $1$ : elle vaut $e^r$.',
            konanTip:
              'Dès que tu rencontres une limite du type $(1 + u_n)^{v_n}$ avec $u_n \\to 0$ et $v_n \\to \\infty$, passe toujours à l’exponentielle : $\\exp(v_n \\ln(1 + u_n)) \\sim \\exp(v_n u_n)$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la limite quand $n \\to +\\infty$ de la suite $a_n = \\left(1 + \\frac{3}{n}\\right)^n$ ?',
              options: ['$1$', '$+\\infty$', '$e^3$', '$3e$'],
              correctAnswerIndex: 2,
              explanation:
                'On écrit $a_n = \\exp\\left(n \\ln\\left(1 + \\frac{3}{n}\\right)\\right)$. Comme $\\ln\\left(1 + \\frac{3}{n}\\right) \\sim \\frac{3}{n}$ quand $n \\to +\\infty$, on a $n \\ln\\left(1 + \\frac{3}{n}\\right) \\to 3$, donc $a_n \\to e^3$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Séries de référence',
            stepTheme: 'green',
            stepTitle: 'Somme des inverses de carrés ($\\sum 1/k^2$) vs série harmonique ($\\sum 1/k$)',
            paragraphText:
              'Deux suites croissantes d’allure très proche peuvent avoir des comportements opposés : l’une converge, l’autre diverge vers $+\\infty$ !\n' +
              '• **Convergence de $S_n = \\sum_{k=1}^n \\frac{1}{k^2}$** : $(S_n)$ est croissante. Pour $k \\geqslant 2$, $\\frac{1}{k^2} \\leqslant \\frac{1}{k(k-1)} = \\frac{1}{k-1} - \\frac{1}{k}$. En sommant par télescopage, $S_n \\leqslant 1 + \\sum_{k=2}^n \\left(\\frac{1}{k-1} - \\frac{1}{k}\\right) = 2 - \\frac{1}{n} < 2$. Croissante et majorée par $2$, $(S_n)$ converge (en fait vers $\\frac{\\pi^2}{6} \\approx 1{,}645$).\n' +
              '• **Divergence de la série harmonique $H_n = \\sum_{k=1}^n \\frac{1}{k}$** : $(H_n)$ est croissante mais non majorée ! En effet, $H_{2n} - H_n = \\frac{1}{n+1} + \\cdots + \\frac{1}{2n} \\geqslant n \\times \\frac{1}{2n} = \\frac{1}{2}$. Si $(H_n)$ convergeait vers $l$, on aurait $0 = l - l \\geqslant \\frac{1}{2}$, absurde ! Donc $H_n \\to +\\infty$.',
            formula: {
              name: 'Télescopage majorant ∑ 1/k² et minoration de H₂ₙ − Hₙ',
              formula: '\\frac{1}{k^2} \\leqslant \\frac{1}{k-1} - \\frac{1}{k} \\quad (k \\geqslant 2) ; \\qquad H_{2n} - H_n \\geqslant \\frac{1}{2}',
              note: 'La série harmonique diverge très lentement (Hₙ ~ ln n), mais tend bien vers +∞.',
            },
            keyRule:
              'Le fait que le terme général $\\frac{1}{k}$ tende vers $0$ est une condition **nécessaire** mais **NON suffisante** pour que la somme partielle $\\sum_{k=1}^n u_k$ converge (contre-exemple : la série harmonique $H_n$).',
            konanTip:
              'Retiens l’astuce du télescopage $\\frac{1}{k(k-1)} = \\frac{1}{k-1} - \\frac{1}{k}$ : elle revient sans arrêt pour majorer des sommes partielles.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q5',
              type: 'mcq',
              prompt:
                'Que peut-on affirmer concernant les deux suites $S_n = \\sum_{k=1}^n \\frac{1}{k^2}$ et $H_n = \\sum_{k=1}^n \\frac{1}{k}$ ?',
              options: [
                'Elles convergent toutes les deux car $1/k \\to 0$ et $1/k^2 \\to 0$',
                'Elles divergent toutes les deux vers $+\\infty$',
                '$(S_n)$ converge (majorée par $2$) et $(H_n)$ diverge vers $+\\infty$',
                '$(H_n)$ converge et $(S_n)$ diverge vers $+\\infty$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$(S_n)$ est croissante et majorée par $2 - \\frac{1}{n} < 2$ par télescopage, donc converge. $(H_n)$ est croissante et vérifie $H_{2n} - H_n \\geqslant \\frac{1}{2}$, ce qui exclut toute limite finie : elle tend vers $+\\infty$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Quantité conjuguée',
            stepTheme: 'green',
            stepTitle: 'Lever une forme indéterminée $\\infty - \\infty$ par expression conjuguée',
            paragraphText:
              'Lorsque deux racines carrées se soustraient et tendent chacune vers $+\\infty$, comme $u_n = \\sqrt{n + 1} - \\sqrt{n}$, on fait face à une forme indéterminée $(+\\infty) - (+\\infty)$.\n' +
              '• **Réflexe de la quantité conjuguée** : on multiplie et on divise par $\\sqrt{n+1} + \\sqrt{n}$ afin d’exploiter l’identité remarquable $(A - B)(A + B) = A^2 - B^2$.\n' +
              '• **Calcul** : $u_n = \\frac{(\\sqrt{n+1} - \\sqrt{n})(\\sqrt{n+1} + \\sqrt{n})}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{(n+1) - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$.\n' +
              '• **Conclusion** : le dénominateur tend vers $+\\infty$, donc $\\lim_{n \\to +\\infty} u_n = 0$. Plus précisément, $u_n \\sim \\frac{1}{2\\sqrt{n}}$.',
            formula: {
              name: 'Transformation par expression conjuguée',
              formula: '\\sqrt{A} - \\sqrt{B} = \\frac{A - B}{\\sqrt{A} + \\sqrt{B}} \\qquad (A, B \\geqslant 0,\\ A+B > 0)',
              note: 'Fonctionne aussi pour √(n² + 3n) - n = 3n / (√(n² + 3n) + n) → 3/2.',
            },
            keyRule:
              'Avant de sortir la quantité conjuguée pour $\\sqrt{an^2 + bn} - cn$, vérifie si $\\sqrt{a} = c$ : si $\\sqrt{a} \\neq c$, une simple factorisation par $n$ suffit sans conjugué !',
            konanTip:
              'Pour $\\sqrt{n^2 + 4n} - n$, la quantité conjuguée donne $\\frac{4n}{\\sqrt{n^2+4n} + n} = \\frac{4}{\\sqrt{1 + 4/n} + 1} \\to \\frac{4}{2} = 2$ (ne pas oublier le $2$ au dénominateur !).',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la limite quand $n \\to +\\infty$ de $u_n = \\sqrt{n^2 + 6n} - n$ ?',
              options: ['$0$', '$3$', '$6$', '$+\\infty$'],
              correctAnswerIndex: 1,
              explanation:
                'Par l’expression conjuguée, $u_n = \\frac{(n^2 + 6n) - n^2}{\\sqrt{n^2 + 6n} + n} = \\frac{6n}{n\\left(\\sqrt{1 + 6/n} + 1\\right)} = \\frac{6}{\\sqrt{1 + 6/n} + 1} \\xrightarrow[n\\to+\\infty]{} \\frac{6}{1 + 1} = 3$.',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_analyse_ch2_p3',
        order: 3,
        title: 'Suites arithmétiques, géométriques, récurrentes et multiplicateur keynésien',
        summary:
          'Maîtriser les suites arithmétiques et géométriques, calculer le multiplicateur keynésien, et appliquer la méthode complète d’étude d’une suite récurrente $u_{n+1} = f(u_n)$.',
        conceptExplanation:
          'Les suites arithmétiques, géométriques et récurrentes $u_{n+1} = f(u_n)$ sont au cœur de l’analyse économique (dépenses publiques, amortissements, dynamique d’équilibre).\n\n' +
          '• **Suite arithmétique** : $u_{n+1} = u_n + r \\iff u_n = u_0 + nr$. Somme : $\\sum_{k=0}^n u_k = \\frac{n+1}{2}(u_0 + u_n)$. Elle diverge vers $\\pm\\infty$ dès que $r \\neq 0$.\n' +
          '• **Suite géométrique** : $u_{n+1} = r u_n \\iff u_n = u_0 r^n$. Somme (si $r \\neq 1$) : $\\sum_{k=0}^n u_k = u_0 \\frac{1 - r^{n+1}}{1 - r}$. Elle converge vers $0$ si $|r| < 1$ (et vers $u_0$ si $r = 1$).\n' +
          '• **Multiplicateur keynésien** : une injection publique initiale $I_0$ avec propension marginale à consommer $c \\in ]0, 1[$ engendre une dépense totale $\\sum_{k=0}^{+\\infty} I_0 c^k = \\frac{I_0}{1 - c}$.\n' +
          '• **Suite récurrente $u_{n+1} = f(u_n)$** : on montre qu’elle est bien définie (intervalle stable), on étudie la monotonie (signe de $f(x) - x$ ou récurrence si $f$ croissante), on prouve la convergence (monotone bornée), puis la continuité de $f$ impose $f(l) = l$.',
        formulas: [
          {
            name: 'Sommes arithmétique et géométrique',
            formula: '\\sum_{k=0}^n (u_0 + kr) = \\frac{n+1}{2}(u_0 + u_n) ; \\qquad \\sum_{k=0}^n u_0 r^k = u_0 \\frac{1 - r^{n+1}}{1 - r} \\ (r \\neq 1)',
            note: 'Si |r| < 1, la série géométrique converge vers u₀ / (1 - r).',
          },
          {
            name: 'Multiplicateur keynésien',
            formula: '\\Delta Y = I_0 \\sum_{k=0}^{+\\infty} c^k = \\frac{I_0}{1 - c} \\qquad (0 < c < 1)',
            note: 'Pour c = 0,8, le multiplicateur vaut 1 / (1 - 0,8) = 5.',
          },
          {
            name: 'Équation du point fixe d’une suite récurrente',
            formula: '\\big(u_{n+1} = f(u_n),\\ u_n \\to l \\text{ et } f \\text{ continue en } l\\big) \\implies f(l) = l',
            note: 'Résoudre f(l) = l donne les limites candidates, mais ne prouve PAS à lui seul que la suite converge !',
          },
        ],
        keyRule:
          'Ne JAMAIS résoudre $f(l) = l$ avant d’avoir **démontré** que la suite $(u_n)$ converge ! Une suite divergente comme $u_{n+1} = 2u_n - 1$ (avec $u_0 = 2$) possède un point fixe $l = 1$ mais tend vers $+\\infty$.',
        workedExample: {
          title: 'Étude complète de $u_0 = 0$, $u_{n+1} = \\sqrt{6 + u_n}$',
          statement:
            'Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = \\sqrt{6 + u_n}$. Montrer que $(u_n)$ est majorée par $3$, croissante, convergente, puis calculer sa limite.',
          methodSteps: [
            '1) Majoration par récurrence ($0 \\leqslant u_n \\leqslant 3$) : vrai pour $n=0$ ($0 \\leqslant 0 \\leqslant 3$). Si $0 \\leqslant u_n \\leqslant 3$, alors $6 \\leqslant 6 + u_n \\leqslant 9$, donc $\\sqrt{6} \\leqslant u_{n+1} \\leqslant 3$, d’où $0 \\leqslant u_{n+1} \\leqslant 3$.',
            '2) Croissance : comme $f(x) = \\sqrt{6 + x}$ est croissante sur $[0, 3]$ et $u_1 = \\sqrt{6} \\geqslant 0 = u_0$, une récurrence immédiate montre $u_{n+1} \\geqslant u_n$ (on peut aussi factoriser $u_{n+1} - u_n = \\frac{6 + u_n - u_n^2}{\\sqrt{6+u_n} + u_n} = \\frac{(3 - u_n)(2 + u_n)}{\\sqrt{6+u_n} + u_n} \\geqslant 0$).',
            '3) Convergence : $(u_n)$ est croissante et majorée par $3$, donc elle converge vers un réel $l \\in [0, 3]$.',
            '4) Limite : $f$ est continue sur $[0, 3]$, donc $l = \\sqrt{6 + l} \\implies l^2 - l - 6 = 0 \\implies (l - 3)(l + 2) = 0$. Comme $l \\geqslant 0$, la seule solution admissible est $l = 3$.',
          ],
          conclusion:
            '$(u_n)$ converge en croissant vers $l = 3$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Arithmétique',
            stepTheme: 'blue',
            stepTitle: 'Suites arithmétiques : terme général, somme et divergence',
            paragraphText:
              'Une suite arithmétique modélise une progression linéaire par pas constant $r$ (la raison) : amortissement linéaire d’un matériel informatique, épargne mensuelle fixe ou intérêts simples.\n' +
              '• **Relations** : $u_{n+1} = u_n + r$, d’où $u_n = u_0 + nr$ (et plus généralement $u_n = u_p + (n - p)r$).\n' +
              '• **Somme des termes** : $\\sum_{k=0}^n u_k = (n + 1) \\times \\frac{u_0 + u_n}{2}$ (nombre de termes $\\times$ moyenne du premier et du dernier terme).\n' +
              '• **Comportement asymptotique** : si $r > 0$, $u_n \\to +\\infty$ ; si $r < 0$, $u_n \\to -\\infty$ ; elle ne converge que dans le cas trivial où $r = 0$ (suite constante).',
            formula: {
              name: 'Somme des termes d’une suite arithmétique',
              formula: 'S = \\text{Nb termes} \\times \\frac{\\text{Premier terme} + \\text{Dernier terme}}{2}',
              note: 'Entre les indices p et n (inclus), il y a exactement (n − p + 1) termes.',
            },
            keyRule:
              'De $k = 0$ à $n$, il y a $n + 1$ termes (et NON $n$ termes) ! Vérifie toujours le nombre de termes sur $n = 1$ ou $n = 2$.',
            konanTip:
              'Pour reconnaître si une suite est arithmétique, calcule $u_{n+1} - u_n$ : si le résultat est une constante indépendante de $n$, c’est gagné !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p3_q1',
              type: 'mcq',
              prompt:
                'Soit $(u_n)$ la suite arithmétique de premier terme $u_0 = 5$ et de raison $r = 3$. Quelle est la valeur de la somme $S = u_0 + u_1 + \\cdots + u_{10}$ ?',
              options: ['$200$', '$220$', '$185$', '$210$'],
              correctAnswerIndex: 1,
              explanation:
                'On a $u_{10} = 5 + 10 \\times 3 = 35$, et il y a $10 - 0 + 1 = 11$ termes. Donc $S = 11 \\times \\frac{5 + 35}{2} = 11 \\times 20 = 220$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Géométrique',
            stepTheme: 'violet',
            stepTitle: 'Suites géométriques : somme partielle et critère de convergence',
            paragraphText:
              'Une suite géométrique modélise une évolution par pourcentage constant : croissance virale d’une plateforme, actualisation de flux financiers ou décroissance d’une dette.\n' +
              '• **Relations** : $u_{n+1} = r u_n$, d’où $u_n = u_0 r^n$. Si $r \\neq 1$, la somme partielle vaut $\\sum_{k=0}^n u_0 r^k = u_0 \\frac{1 - r^{n+1}}{1 - r}$.\n' +
              '• **Convergence de $r^n$** : si $|r| < 1$, $r^n \\to 0$ ; si $r = 1$, $r^n = 1 \\to 1$ ; si $r > 1$, $r^n \\to +\\infty$ ; si $r \\leqslant -1$, $(r^n)$ diverge sans limite.\n' +
              '• **Exemple** : pour $u_n = 1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots + \\frac{1}{3^n} = \\frac{1 - (1/3)^{n+1}}{1 - 1/3} = \\frac{3}{2}\\left(1 - \\frac{1}{3^{n+1}}\\right)$, comme $|1/3| < 1$, la limite vaut $\\frac{3}{2}$.',
            formula: {
              name: 'Limite d’une série géométrique',
              formula: '|r| < 1 \\implies \\sum_{k=0}^{+\\infty} u_0 r^k = \\lim_{n\\to+\\infty} u_0\\frac{1 - r^{n+1}}{1 - r} = \\frac{u_0}{1 - r}',
              note: 'La somme commence ici à k = 0 ; si elle commence à k = 1, le premier terme est u₁ = u₀ r.',
            },
            keyRule:
              'La suite géométrique $(r^n)$ converge si et seulement si $-1 < r \\leqslant 1$ (attention : $r = -1$ diverge car $(-1)^n$ oscille entre $-1$ et $1$).',
            konanTip:
              'Formule universelle sans erreur d’indice : $\\text{Somme géométrique} = \\text{Premier terme} \\times \\frac{1 - r^{\\text{Nb termes}}}{1 - r}$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p3_q2',
              type: 'mcq',
              prompt:
                'Quelle est la limite quand $n \\to +\\infty$ de $S_n = 1 + \\frac{1}{4} + \\frac{1}{16} + \\cdots + \\frac{1}{4^n}$ ?',
              options: ['$\\frac{4}{3}$', '$\\frac{3}{4}$', '$2$', '$+\\infty$'],
              correctAnswerIndex: 0,
              explanation:
                'C’est la somme des $n+1$ premiers termes d’une suite géométrique de premier terme $u_0 = 1$ et de raison $r = \\frac{1}{4} \\in ]-1, 1[$. Elle converge donc vers $\\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Macroéconomie',
            stepTheme: 'slate',
            stepTitle: 'Application économique : le multiplicateur keynésien',
            paragraphText:
              'En macroéconomie, lorsqu’un État investit dans une infrastructure numérique (fibre optique, data center national), l’impact total sur le PIB est bien supérieur à la dépense initiale : c’est l’effet multiplicateur keynésien, modélisé par une série géométrique.\n' +
              '• **Mécanisme en vagues** : l’État injecte $I_0 = 100$ millions (vague $0$). Les ménages et entreprises dépensent une fraction $c = 0{,}8$ (propension marginale à consommer) de tout revenu reçu : cela génère $100 \\times 0{,}8 = 80$ millions en vague $1$, puis $100 \\times 0{,}8^2 = 64$ millions en vague $2$, etc.\n' +
              '• **Somme après $n$ vagues** : $Y_n = 100(1 + 0{,}8 + 0{,}8^2 + \\cdots + 0{,}8^n) = 100 \\frac{1 - 0{,}8^{n+1}}{1 - 0{,}8}$.\n' +
              '• **Impact total** : comme $0 < 0{,}8 < 1$, $Y_n \\to \\frac{100}{1 - 0{,}8} = \\frac{100}{0{,}2} = 500$ millions ! Le multiplicateur vaut $k = \\frac{1}{1 - c} = 5$.',
            formula: {
              name: 'Multiplicateur keynésien en économie fermée',
              formula: 'k = \\frac{1}{1 - c} \\quad \\text{et} \\quad \\Delta Y_{\\text{total}} = k \\cdot I_0 = \\frac{I_0}{1 - c} \\quad (0 < c < 1)',
              note: 'Plus la propension marginale à consommer c est proche de 1 (faible épargne), plus le multiplicateur est élevé.',
            },
            keyRule:
              'Le multiplicateur keynésien $k = \\frac{1}{1 - c}$ converge précisément parce que la propension marginale à consommer vérifie $0 < c < 1$ (une part $1 - c$ est épargnée à chaque vague).',
            konanTip:
              'Retiens ce lien direct entre Analyse et Macroéconomie : la formule $\\Delta Y = \\frac{1}{1-c}\\Delta G$ n’est rien d’autre que la somme d’une série géométrique de raison $c$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p3_q3',
              type: 'mcq',
              prompt:
                'Dans une économie où la propension marginale à consommer vaut $c = 0{,}75$, l’État injecte $20$ milliards de FCFA. Quel est l’impact économique total (limite des dépenses cumulées) ?',
              options: [
                '$26{,}67$ milliards de FCFA',
                '$35$ milliards de FCFA',
                '$80$ milliards de FCFA',
                '$15$ milliards de FCFA',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le multiplicateur keynésien vaut $k = \\frac{1}{1 - c} = \\frac{1}{1 - 0{,}75} = \\frac{1}{0{,}25} = 4$. L’impact total est donc $4 \\times 20 = 80$ milliards de FCFA.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode récurrence',
            stepTheme: 'green',
            stepTitle: 'Protocole en 5 étapes pour étudier $u_{n+1} = f(u_n)$',
            paragraphText:
              'Une suite définie par récurrence $u_{n+1} = f(u_n)$ (sans formule explicite) s’étudie toujours selon un protocole rigoureux en cinq étapes qu’il faut connaître par cœur.\n' +
              '• **Étape 1 (Existence / Intervalle stable)** : trouver un intervalle $I$ contenant $u_0$ tel que $f(I) \\subset I$ ; cela garantit par récurrence que $u_n \\in I$ pour tout $n$ (suite bien définie et bornée).\n' +
              '• **Étape 2 (Premiers termes)** : calculer $u_0, u_1, u_2$ pour conjecturer la monotonie et la limite.\n' +
              '• **Étape 3 (Monotonie)** : si $f$ est **croissante** sur $I$, la monotonie de $(u_n)$ est donnée par le signe de $u_1 - u_0$ (prouvé par récurrence : $u_n \\leqslant u_{n+1} \\implies f(u_n) \\leqslant f(u_{n+1})$). On peut aussi étudier le signe de $f(x) - x$ sur $I$.\n' +
              '• **Étapes 4 & 5 (Convergence et limite)** : conclure la convergence par monotonie + borne, puis résoudre $f(l) = l$ dans l’adhérence de $I$ en invoquant la continuité de $f$.',
            formula: {
              name: 'Invariance de la monotonie quand f est croissante',
              formula: '(f \\text{ croissante sur } I \\text{ et } u_0 \\leqslant u_1) \\implies (u_n) \\text{ croissante}',
              note: 'Attention : si f est décroissante, (uₙ) n’est PAS monotone ! Les sous-suites (u₂ₙ) et (u₂ₙ₊₁) sont alors monotones de sens opposés.',
            },
            keyRule:
              'La monotonie de $f$ n’est PAS la monotonie de $(u_n)$ ! Une fonction $f$ croissante peut engendrer une suite décroissante (si $u_1 < u_0$).',
            konanTip:
              'Si $f$ est croissante, il suffit de comparer $u_1$ et $u_0$ : si $u_1 \\geqslant u_0$, la suite est croissante ; si $u_1 \\leqslant u_0$, elle est décroissante !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p3_q4',
              type: 'mcq',
              prompt:
                'Soit $u_{n+1} = f(u_n)$ où $f$ est **croissante** sur un intervalle stable $I$. On observe $u_0 = 5$ et $u_1 = 3{,}2$. Que peut-on dire de la suite $(u_n)$ ?',
              options: [
                'Elle est croissante car $f$ est croissante',
                'Elle est décroissante car $f$ est croissante et $u_1 < u_0$',
                'Elle oscille entre $3{,}2$ et $5$',
                'Elle diverge vers $+\\infty$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $u_1 \\leqslant u_0$ et $f$ est croissante, on obtient $f(u_1) \\leqslant f(u_0)$, soit $u_2 \\leqslant u_1$, et par récurrence $u_{n+1} \\leqslant u_n$ pour tout $n$ : la suite est décroissante.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Étude graphique',
            stepTheme: 'slate',
            stepTitle: 'Visualisation en escalier de $u_{n+1} = \\sqrt{6 + u_n}$',
            paragraphText:
              'Graphiquement, pour construire les termes d’une suite récurrente $u_{n+1} = f(u_n)$, on trace la courbe $y = f(x)$ et la première bissectrice $y = x$ : la limite éventuelle se lit à l’intersection des deux courbes !\n' +
              '• **Cas de $f(x) = \\sqrt{6 + x}$ avec $u_0 = 0$** : on part de $u_0 = 0$, on monte verticalement jusqu’à la courbe ($u_1 = \\sqrt{6} \\approx 2{,}45$), puis on se rabat horizontalement sur $y = x$, puis on remonte vers la courbe ($u_2 = \\sqrt{6 + \\sqrt{6}} \\approx 2{,}91$), etc.\n' +
              '• **Intervalle stable** : sur $[0, 3]$, $f(0) = \\sqrt{6} \\in [0, 3]$ et $f(3) = \\sqrt{9} = 3$, donc $f([0, 3]) = [\\sqrt{6}, 3] \\subset [0, 3]$.\n' +
              '• **Point fixe** : la courbe coupe la bissectrice $y = x$ au point $(3, 3)$, qui est l’unique solution positive de $x^2 - x - 6 = 0$.',
            formula: {
              name: 'Signe de f(x) − x sur [0, 3]',
              formula: '\\sqrt{6 + x} - x = \\frac{6 + x - x^2}{\\sqrt{6 + x} + x} = \\frac{(3 - x)(x + 2)}{\\sqrt{6 + x} + x} \\geqslant 0 \\quad \\forall x \\in [0, 3]',
              note: 'La courbe de f reste au-dessus de y = x sur [0, 3[, ce qui confirme que la suite monte vers 3.',
            },
            keyRule:
              'Sur le graphique, tant que la courbe $y = f(x)$ est **au-dessus** de la bissectrice $y = x$, on a $f(x) > x$, donc $u_{n+1} > u_n$ : l’escalier monte !',
            konanTip:
              'Si l’on avait démarré avec $u_0 = 7 > 3$, la courbe de $f$ est sous $y = x$ sur $]3, +\\infty[$, donc la suite décroîtrait tout aussi sûrement vers le même point fixe attractif $l = 3$.',
            visualSchema: {
              type: 'function_plot',
              title: 'Point fixe de la suite récurrente uₙ₊₁ = √(6 + uₙ)',
              caption: 'La courbe y = √(6 + x) (bleu) coupe la première bissectrice y = x (orange) au point fixe attractif (3 ; 3).',
              plot: {
                xMin: -1,
                xMax: 6,
                yMin: 0,
                yMax: 5,
                xStep: 1,
                yStep: 1,
                curves: [
                  {
                    label: 'y = √(6+x)',
                    color: 'blue',
                    pieces: [{ expr: 'sqrt(6 + x)', from: -1, to: 6 }],
                  },
                  {
                    label: 'y = x',
                    color: 'orange',
                    pieces: [{ expr: 'x', from: 0, to: 5 }],
                  },
                ],
                points: [
                  { x: 0, y: 2.45, label: 'u₁≈2,45', filled: true, color: 'violet' },
                  { x: 3, y: 3, label: 'l = 3', filled: true, color: 'green' },
                ],
                verticalLines: [{ x: 3, label: 'x = 3', color: 'green' }],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p3_q5',
              type: 'mcq',
              prompt:
                'Pour la suite définie par $u_0 = 1$ et $u_{n+1} = \\sqrt{2 + u_n}$, quelle est la limite $l$ de $(u_n)$ ?',
              options: ['$l = 1$', '$l = 2$', '$l = -1$', '$l = \\sqrt{2}$'],
              correctAnswerIndex: 1,
              explanation:
                'Sur $[0, 2]$, $f(x) = \\sqrt{2 + x}$ est croissante, $f([0,2]) \\subset [0,2]$ et $u_1 = \\sqrt{3} > u_0 = 1$, donc $(u_n)$ croît et converge vers un $l \\in [1, 2]$ vérifiant $l^2 - l - 2 = 0 \\iff (l - 2)(l + 1) = 0$. Comme $l \\geqslant 1$, on obtient $l = 2$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège du point fixe',
            stepTheme: 'orange',
            stepTitle: 'Éliminer les solutions parasites de $f(l) = l$ et vérifier la convergence',
            paragraphText:
              'L’équation du point fixe $f(l) = l$ comporte deux pièges classiques qui font perdre des points le jour de l’examen.\n' +
              '• **Piège 1 (Oublier de prouver la convergence)** : pour $u_0 = 2$ et $u_{n+1} = 3u_n - 2$, l’équation $l = 3l - 2$ donne $l = 1$. Pourtant $u_1 = 4, u_2 = 10, u_3 = 28 \\to +\\infty$ ! Sans preuve préalable de convergence, résoudre $f(l) = l$ ne prouve rien.\n' +
              '• **Piège 2 (Plusieurs solutions à $f(l) = l$)** : quand $f(l) = l$ admet plusieurs racines (ex : $l = -2$ et $l = 3$ pour $l^2 - l - 6 = 0$), il faut utiliser l’encadrement prouvé ($u_n \\geqslant 0 \\implies l \\geqslant 0$) et parfois la monotonie ($u_n \\geqslant u_0$ si croissante) pour éliminer les racines parasites.\n' +
              '• **Piège 3 (Continuité de $f$ en $l$)** : le passage à la limite $u_{n+1} = f(u_n) \\implies l = f(l)$ exige impérativement que $f$ soit **continue en $l$** !',
            formula: {
              name: 'Filtrage des limites candidates',
              formula: '\\big(\\forall n,\\ a \\leqslant u_n \\leqslant b\\big) \\implies l \\in [a, b] \\quad \\text{et} \\quad f(l) = l',
              note: 'Si (uₙ) est croissante, on a même u₀ ≤ l ≤ b ; si elle est décroissante, a ≤ l ≤ u₀.',
            },
            keyRule:
              'Rédaction d’examen impérative : (1) prouver que $(u_n)$ converge vers un réel $l \\in [a, b]$, (2) citer explicitement « comme $f$ est continue en $l$, on a $f(l) = l$ », (3) écarter les racines hors de $[a, b]$.',
            konanTip:
              'Si $f(l) = l$ te donne deux racines toutes deux dans $[a, b]$, regarde la monotonie : si $(u_n)$ est croissante et $u_0 = 1{,}5$, toute racine $< 1{,}5$ est automatiquement éliminée !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch2_p3_q6',
              type: 'mcq',
              prompt:
                'Une suite $(u_n)$ vérifie $u_{n+1} = \\frac{1}{2}(u_n^2 + 1)$ avec $u_0 = 0$. On démontre qu’elle est croissante et majorée par $1$. Quelle est sa limite ?',
              options: [
                '$0$',
                '$1$',
                '$\\frac{1}{2}$',
                'On ne peut pas conclure car $f$ n’est pas linéaire',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La suite est croissante et majorée par $1$, donc converge vers un réel $l \\in [0, 1]$. La fonction $f(x) = \\frac{1}{2}(x^2 + 1)$ est polynomiale donc continue : $l = \\frac{1}{2}(l^2 + 1) \\iff l^2 - 2l + 1 = 0 \\iff (l - 1)^2 = 0 \\iff l = 1$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Limites, équivalents locaux et continuité des fonctions
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch3',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 3 — Limites, équivalents locaux et continuité des fonctions',
    summary:
      'Limites finies et infinies, limites à gauche et à droite, théorème des gendarmes, fonctions équivalentes en un point et à l’infini, continuité, prolongement par continuité, Théorème des Valeurs Intermédiaires (TVI), théorème de Weierstrass et théorème du point fixe.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch3_p1',
        order: 1,
        title: 'Limites de fonctions : définitions, limites unilatérales et propriétés',
        summary:
          'Maîtriser les définitions $(\\varepsilon, \\eta)$ et séquentielle d’une limite, les limites à gauche/droite, les limites infinies, les opérations algébriques et les techniques de levée d’indétermination.',
        conceptExplanation:
          'La notion de limite d’une fonction étend celle des suites numériques au continu : elle décrit le comportement de $f(x)$ lorsque la variable $x$ s’approche d’un réel $a$ (sans nécessairement atteindre $a$) ou tend vers $\\pm\\infty$.\n\n' +
          '• **Définition $(\\varepsilon, \\eta)$** : $\\lim_{x \\to a} f(x) = l \\iff \\forall \\varepsilon > 0,\\ \\exists \\eta_\\varepsilon > 0,\\ \\forall x,\\ (0 < |x - a| < \\eta_\\varepsilon \\implies |f(x) - l| < \\varepsilon)$.\n' +
          '• **Caractérisation séquentielle** : $\\lim_{x \\to a} f(x) = l$ ssi pour **toute** suite $(x_n)$ convergeant vers $a$ ($x_n \\neq a$), la suite $(f(x_n))$ converge vers $l$.\n' +
          '• **Limites unilatérales** : $\\lim_{x \\to a} f(x) = l \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = l$. Si les limites à gauche et à droite diffèrent (comme pour $\\frac{|x|}{x}$ en $0$), la limite en $a$ n’existe pas.\n' +
          '• **Opérations et gendarmes** : unicité de la limite, linéarité, produit, quotient (dénominateur non nul), passage à la limite dans les inégalités et théorème des gendarmes.',
        formulas: [
          {
            name: 'Condition d’existence par limites unilatérales',
            formula: '\\lim_{x \\to a} f(x) = l \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = l',
            note: 'L’existence et la valeur de la limite en a ne dépendent jamais de la valeur éventuelle de f(a).',
          },
          {
            name: 'Définition d’une limite infinie en a',
            formula: '\\lim_{x \\to a} f(x) = +\\infty \\iff \\forall A > 0,\\ \\exists \\eta_A > 0,\\ \\forall x,\\ (0 < |x - a| < \\eta_A \\implies f(x) > A)',
            note: 'Interprétation graphique : la droite x = a est asymptote verticale à la courbe.',
          },
        ],
        keyRule:
          'Une limite en $a$ ne dépend JAMAIS de la valeur de $f(a)$ (ni même du fait que $f$ soit définie en $a$) : seul le comportement de $f(x)$ pour $x$ proche de $a$ ($x \\neq a$) compte.',
        workedExample: {
          title: 'Levée d’indétermination de $\\frac{x^2 - 1}{\\sqrt{x - 1}}$ en $1^+$ et preuve $(\\varepsilon, \\eta)$ pour $\\sqrt{x}$',
          statement:
            '1) Calculer $\\lim_{x \\to 1^+} \\frac{x^2 - 1}{\\sqrt{x - 1}}$. 2) Montrer directement par la définition $(\\varepsilon, \\eta)$ que $\\lim_{x \\to a} \\sqrt{x} = \\sqrt{a}$ pour $a > 0$.',
          methodSteps: [
            '1) Forme indéterminée $\\frac{0}{0}$ en $1^+$. Pour $x > 1$, factorisons $x^2 - 1 = (x - 1)(x + 1)$ et écrivons $x - 1 = (\\sqrt{x - 1})^2$.',
            'Alors $\\frac{x^2 - 1}{\\sqrt{x - 1}} = \\frac{(\\sqrt{x - 1})^2(x + 1)}{\\sqrt{x - 1}} = \\sqrt{x - 1}(x + 1) \\xrightarrow[x\\to 1^+]{} 0 \\times 2 = 0$.',
            '2) Pour $a > 0$ et $x \\geqslant 0$, multiplions par la quantité conjuguée : $|\\sqrt{x} - \\sqrt{a}| = \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}} \\leqslant \\frac{|x - a|}{\\sqrt{a}}$ (car $\\sqrt{x} \\geqslant 0$).',
            'Soit $\\varepsilon > 0$. En posant $\\eta_\\varepsilon = \\min(a, \\varepsilon \\sqrt{a}) > 0$, si $|x - a| < \\eta_\\varepsilon$ alors $x > 0$ et $|\\sqrt{x} - \\sqrt{a}| \\leqslant \\frac{|x - a|}{\\sqrt{a}} < \\varepsilon$.',
          ],
          conclusion:
            '$\\lim_{x \\to 1^+} \\frac{x^2 - 1}{\\sqrt{x - 1}} = 0$ et $\\lim_{x \\to a} \\sqrt{x} = \\sqrt{a}$ pour tout $a > 0$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définitions',
            stepTheme: 'blue',
            stepTitle: 'Limite finie en un point : langage $(\\varepsilon, \\eta)$ et suites',
            paragraphText:
              'La limite d’une fonction en un point $a$ admet deux définitions rigoureusement équivalentes, complémentaires selon ce qu’on veut prouver.\n' +
              '• **Langage des voisinages ($\\varepsilon, \\eta$)** : $\\lim_{x \\to a} f(x) = l$ signifie que pour toute tolérance $\\varepsilon > 0$ sur l’ordonnée, il existe un rayon $\\eta_\\varepsilon > 0$ autour de $a$ tel que $0 < |x - a| < \\eta_\\varepsilon \\implies |f(x) - l| < \\varepsilon$.\n' +
              '• **Caractérisation séquentielle** : $\\lim_{x \\to a} f(x) = l$ ssi pour toute suite $(x_n)$ qui converge vers $a$ (avec $x_n \\neq a$), la suite image $(f(x_n))$ converge vers $l$.\n' +
              '• **Intérêt pratique** : pour prouver qu’une limite **n’existe pas** (ex : $\\sin(1/x)$ en $0$), il suffit d’exhiber **deux suites** $x_n \\to a$ et $y_n \\to a$ telles que $\\lim f(x_n) \\neq \\lim f(y_n)$ (ex : $x_n = \\frac{1}{2n\\pi}$ donne $0$, $y_n = \\frac{1}{2n\\pi + \\pi/2}$ donne $1$).',
            formula: {
              name: 'Équivalence voisinages / suites',
              formula: '\\lim_{x \\to a} f(x) = l \\iff \\forall (x_n) \\text{ t.q. } x_n \\to a\\ (x_n \\neq a),\\quad \\lim_{n\\to+\\infty} f(x_n) = l',
              note: 'Idéal pour transférer les propriétés des suites aux fonctions ou réfuter une limite.',
            },
            keyRule:
              'Pour démontrer que $\\lim_{x \\to a} f(x)$ **n’existe pas**, exhibe deux suites $(x_n)$ et $(y_n)$ tendant toutes deux vers $a$ dont les images $f(x_n)$ et $f(y_n)$ ont des limites différentes !',
            konanTip:
              'Vérifie toujours que la définition de limite exclut $x = a$ : la fonction $f(x) = 1$ pour $x \\neq 0$ et $f(0) = 99$ a pour limite $1$ en $0$, même si $f(0) = 99$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q1',
              type: 'mcq',
              prompt:
                'Pour prouver rigoureusement que $f(x) = \\cos\\left(\\frac{1}{x}\\right)$ n’admet pas de limite en $0$, quelle méthode séquentielle est concluante ?',
              options: [
                'Choisir $x_n = \\frac{1}{2n\\pi}$ (où $f(x_n) = 1$) et $y_n = \\frac{1}{(2n+1)\\pi}$ (où $f(y_n) = -1$)',
                'Montrer que $f(0)$ n’est pas défini',
                'Choisir $x_n = \\frac{1}{n}$ et constater que $x_n \\to 0$',
                'Constater que $-1 \\leqslant \\cos(1/x) \\leqslant 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $x_n \\to 0$ avec $f(x_n) = \\cos(2n\\pi) = 1 \\to 1$, et $y_n \\to 0$ avec $f(y_n) = \\cos((2n+1)\\pi) = -1 \\to -1$. Par la caractérisation séquentielle et l’unicité de la limite, $f$ ne peut avoir de limite en $0$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Limites unilatérales',
            stepTheme: 'slate',
            stepTitle: 'Limites à gauche et à droite : le saut de $f(x) = \\frac{|x|}{x}$',
            paragraphText:
              'Une fonction peut approcher une valeur par la gauche ($x < a$, noté $x \\to a^-$) et une autre valeur par la droite ($x > a$, noté $x \\to a^+$) : c’est un point de rupture (palier tarifaire, fonction signe, partie entière).\n' +
              '• **Critère fondamental** : $\\lim_{x \\to a} f(x) = l$ existe si et seulement si $\\lim_{x \\to a^-} f(x)$ et $\\lim_{x \\to a^+} f(x)$ existent toutes les deux et sont **égales à $l$**.\n' +
              '• **Exemple canonique $f(x) = \\frac{|x|}{x}$ ($x \\neq 0$)** : pour $x > 0$, $|x| = x$ donc $f(x) = 1$ et $\\lim_{x \\to 0^+} f(x) = 1$ ; pour $x < 0$, $|x| = -x$ donc $f(x) = -1$ et $\\lim_{x \\to 0^-} f(x) = -1$.\n' +
              '• **Conclusion** : comme $-1 \\neq 1$, la fonction $f$ n’admet **aucune limite** en $0$ (elle présente une discontinuité de saut d’amplitude $2$).',
            formula: {
              name: 'Limites unilatérales de la fonction signe',
              formula: '\\lim_{x \\to 0^-} \\frac{|x|}{x} = -1 \\neq 1 = \\lim_{x \\to 0^+} \\frac{|x|}{x} \\implies \\lim_{x \\to 0} \\frac{|x|}{x} \\text{ n’existe pas}',
              note: 'Même phénomène pour E(x) en chaque entier k : limite à gauche k−1, limite à droite k.',
            },
            keyRule:
              'Si $\\lim_{x \\to a^-} f(x) = L_1$ et $\\lim_{x \\to a^+} f(x) = L_2$ avec $L_1 \\neq L_2$, la limite en $a$ **n’existe pas** (elle ne vaut jamais la moyenne $\\frac{L_1+L_2}{2}$ !).',
            konanTip:
              'Dès qu’une fonction contient $|x - a|$, $E(x)$ ou une définition par morceaux avec un changement de formule en $a$, calcule **systématiquement** les deux limites $x \\to a^-$ et $x \\to a^+$ séparément.',
            visualSchema: {
              type: 'function_plot',
              title: 'Discontinuité de saut de f(x) = |x|/x en x = 0',
              caption: 'À gauche de 0, f(x) = −1 ; à droite de 0, f(x) = +1. Les limites unilatérales diffèrent donc lim f(x) en 0 n’existe pas.',
              plot: {
                xMin: -4,
                xMax: 4,
                yMin: -2,
                yMax: 2,
                xStep: 1,
                yStep: 1,
                curves: [
                  {
                    label: 'y = |x|/x',
                    color: 'blue',
                    pieces: [
                      { expr: '-1', from: -4, to: 0, includeTo: false },
                      { expr: '1', from: 0, to: 4, includeFrom: false },
                    ],
                  },
                ],
                verticalLines: [{ x: 0, label: 'saut en 0', color: 'orange' }],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q2',
              type: 'mcq',
              prompt:
                'Soit $f(x) = \\frac{|x - 3|}{x - 3}$ pour $x \\neq 3$. Que valent $\\lim_{x \\to 3^-} f(x)$, $\\lim_{x \\to 3^+} f(x)$ et $\\lim_{x \\to 3} f(x)$ ?',
              options: [
                '$-1$, $+1$, et la limite en $3$ vaut $0$',
                '$-1$, $+1$, et la limite en $3$ n’existe pas',
                '$+1$, $+1$, et la limite en $3$ vaut $1$',
                '$-\\infty$, $+\\infty$, et la limite en $3$ n’existe pas',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $x < 3$, $x - 3 < 0$ donc $|x - 3| = -(x - 3)$ et $f(x) = -1 \\to -1$. Pour $x > 3$, $|x - 3| = x - 3$ donc $f(x) = 1 \\to 1$. Comme $-1 \\neq 1$, la limite en $3$ n’existe pas.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Asymptotes',
            stepTheme: 'blue',
            stepTitle: 'Limites infinies en un point et limites en $\\pm\\infty$',
            paragraphText:
              'Les limites infinies décrivent les comportements extrêmes d’un modèle : explosion d’un coût lorsque la capacité d’un serveur approche $100\\%$ (asymptote verticale) ou stabilisation d’un coût moyen à grande échelle (asymptote horizontale).\n' +
              '• **Limite infinie en $a$** : $\\lim_{x \\to a^+} \\frac{1}{x - a} = +\\infty$ et $\\lim_{x \\to a^-} \\frac{1}{x - a} = -\\infty$. Graphiquement, la droite $x = a$ est une **asymptote verticale**.\n' +
              '• **Limite finie en $+\\infty$** : $\\lim_{x \\to +\\infty} f(x) = l \\iff \\forall \\varepsilon > 0,\\ \\exists A_\\varepsilon > 0,\\ \\forall x > A_\\varepsilon,\\ |f(x) - l| < \\varepsilon$. La droite $y = l$ est une **asymptote horizontale**.\n' +
              '• **Asymptote oblique** : si $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$, la droite $y = ax + b$ est asymptote oblique à la courbe en $\\pm\\infty$.',
            formula: {
              name: 'Définition de la limite finie à l’infini',
              formula: '\\lim_{x \\to +\\infty} f(x) = l \\iff \\forall \\varepsilon > 0,\\ \\exists A_\\varepsilon > 0,\\ \\forall x > A_\\varepsilon,\\ |f(x) - l| < \\varepsilon',
              note: 'Exemple : lim_{x → +∞} (2x + 1)/x = 2 ⇒ la droite y = 2 est asymptote horizontale.',
            },
            keyRule:
              'Pour calculer la limite d’une fraction rationnelle $\\frac{P(x)}{Q(x)}$ en $\\pm\\infty$, garde uniquement le quotient des **termes de plus haut degré** !',
            konanTip:
              'Pour $\\frac{x^3 - 5x^2}{2x^4 - 7x^2}$ en $+\\infty$, le degré du dénominateur ($4$) dépasse celui du numérateur ($3$), donc la limite vaut immédiatement $0$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q3',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to +\\infty} \\frac{x^3 - 5x^2}{2x^4 - 7x^2}$ ?',
              options: ['$+\\infty$', '$\\frac{1}{2}$', '$0$', 'La limite n’existe pas'],
              correctAnswerIndex: 2,
              explanation:
                'En $+\\infty$, on factorise les termes dominants : $\\frac{x^3(1 - 5/x)}{2x^4(1 - 7/(2x^2))} = \\frac{1}{2x} \\cdot \\frac{1 - 5/x}{1 - 7/(2x^2)} \\xrightarrow[x\\to+\\infty]{} 0 \\times 1 = 0$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Gendarmes',
            stepTheme: 'violet',
            stepTitle: 'Opérations sur les limites, composition et théorème des gendarmes',
            paragraphText:
              'Les règles opératoires des limites de suites se transposent intégralement aux fonctions, avec en prime un théorème puissant pour les fonctions composées.\n' +
              '• **Opérations** : si $\\lim_{x\\to a} f(x) = l$ et $\\lim_{x\\to a} g(x) = k$, alors $f + g \\to l + k$, $fg \\to lk$, et $f/g \\to l/k$ (si $k \\neq 0$).\n' +
              '• **Composition** : si $\\lim_{x \\to a} f(x) = b$ et $\\lim_{y \\to b} g(y) = c$, alors $\\lim_{x \\to a} g(f(x)) = c$ (valable pour $a, b, c \\in \\overline{\\mathbb{R}}$).\n' +
              '• **Théorème des gendarmes** : si $f(x) \\leqslant h(x) \\leqslant g(x)$ au voisinage de $a$ (sauf peut-être en $a$) et $\\lim_{x\\to a} f(x) = \\lim_{x\\to a} g(x) = l$, alors $\\lim_{x\\to a} h(x) = l$. Exemple : $|x \\sin(1/x)| \\leqslant |x| \\to 0$ en $0$, donc $\\lim_{x\\to 0} x \\sin(1/x) = 0$.',
            formula: {
              name: 'Forme pratique du théorème des gendarmes',
              formula: '|h(x) - l| \\leqslant u(x) \\text{ au voisinage de } a \\text{ et } \\lim_{x\\to a} u(x) = 0 \\implies \\lim_{x\\to a} h(x) = l',
              note: 'Un produit d’une fonction tendant vers 0 par une fonction bornée tend toujours vers 0.',
            },
            keyRule:
              'Retiens le corollaire ultra-rapide : **(limite $0$) $\\times$ (fonction bornée) $\\to 0$** ! Ainsi $x^2 \\sin(1/x) \\to 0$ en $0$, même si $\\sin(1/x)$ n’a pas de limite en $0$.',
            konanTip:
              'Dans la règle « $0 \\times$ bornée $= 0$ », ne confonds surtout pas « bornée » avec « tend vers $\\infty$ » : $0 \\times \\infty$ reste une forme indéterminée !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x^3}\\right)$ ?',
              options: [
                'La limite n’existe pas car $\\cos(1/x^3)$ oscille',
                '$1$',
                '$0$',
                '$+\\infty$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Pour tout $x \\neq 0$, $-1 \\leqslant \\cos(1/x^3) \\leqslant 1$, donc $-x^2 \\leqslant x^2 \\cos(1/x^3) \\leqslant x^2$. Comme $\\lim_{x\\to 0} (-x^2) = \\lim_{x\\to 0} x^2 = 0$, le théorème des gendarmes donne $\\lim_{x\\to 0} x^2 \\cos(1/x^3) = 0$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Indéterminations',
            stepTheme: 'green',
            stepTitle: 'Techniques algébriques de levée d’indétermination ($0/0$, $\\infty/\\infty$)',
            paragraphText:
              'Face à une forme indéterminée $\\frac{0}{0}$ en un réel $a$, la cause est toujours la présence d’un facteur caché $(x - a)$ au numérateur et au dénominateur qu’il faut faire apparaître pour le simplifier.\n' +
              '• **Quotient de polynômes en $a$** : si $P(a) = Q(a) = 0$, factoriser par $(x - a)$ (division euclidienne ou identités remarquables) puis simplifier.\n' +
              '• **Expression avec radical** : multiplier numérateur et dénominateur par la quantité conjuguée. Exemple : pour $f(x) = \\frac{x + 2 - \\sqrt{4 - x^2}}{x}$ en $0$, séparons $1 + \\frac{2 - \\sqrt{4 - x^2}}{x} = 1 + \\frac{4 - (4 - x^2)}{x(2 + \\sqrt{4 - x^2})} = 1 + \\frac{x}{2 + \\sqrt{4 - x^2}} \\xrightarrow[x\\to 0]{} 1$.\n' +
              '• **En $\\pm\\infty$ avec $\\sqrt{x^2}$** : attention, $\\sqrt{x^2} = |x|$ vaut $+x$ en $+\\infty$ mais **$-x$ en $-\\infty$** !',
            formula: {
              name: 'Piège du signe en −∞ lors de la factorisation sous radical',
              formula: '\\sqrt{x^2 + bx + c} = |x|\\sqrt{1 + \\frac{b}{x} + \\frac{c}{x^2}} = \\begin{cases} +x\\sqrt{1 + \\frac{b}{x} + \\frac{c}{x^2}} & (x > 0) \\\\ -x\\sqrt{1 + \\frac{b}{x} + \\frac{c}{x^2}} & (x < 0) \\end{cases}',
              note: 'Oublier le signe − en −∞ change totalement la limite !',
            },
            keyRule:
              'Quand tu sors $x^2$ d’une racine carrée, écris TOUJOURS $|x|$ d’abord, puis remplace $|x|$ par $x$ si $x \\to +\\infty$ ou par $-x$ si $x \\to -\\infty$.',
            konanTip:
              'Pour $\\frac{x + 2 - \\sqrt{4 - x^2}}{x}$, couper la fraction en $\\frac{x}{x} + \\frac{2 - \\sqrt{4-x^2}}{x} = 1 + \\frac{2 - \\sqrt{4-x^2}}{x}$ rend le conjugué deux fois plus simple !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to -\\infty} \\frac{\\sqrt{4x^2 + 3x}}{x}$ ?',
              options: ['$2$', '$-2$', '$0$', '$-\\infty$'],
              correctAnswerIndex: 1,
              explanation:
                'Pour $x < 0$, $\\sqrt{4x^2 + 3x} = |x|\\sqrt{4 + 3/x} = -x\\sqrt{4 + 3/x}$. Donc $\\frac{\\sqrt{4x^2 + 3x}}{x} = -\\sqrt{4 + 3/x} \\xrightarrow[x\\to -\\infty]{} -\\sqrt{4} = -2$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Preuve ε-η',
            stepTheme: 'green',
            stepTitle: 'Rédiger une preuve $(\\varepsilon, \\eta)$ de limite : le cas $f(x) = \\sqrt{x}$',
            paragraphText:
              'Savoir démontrer une limite directement à partir de la définition $(\\varepsilon, \\eta)$ est un savoir-faire fondamental qui garantit une maîtrise complète du raisonnement analytique.\n' +
              '• **En $a > 0$** : on cherche à majorer $|\\sqrt{x} - \\sqrt{a}|$ en fonction de $|x - a|$. Par l’expression conjuguée, $|\\sqrt{x} - \\sqrt{a}| = \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}} \\leqslant \\frac{|x - a|}{\\sqrt{a}}$. Pour avoir $|\\sqrt{x} - \\sqrt{a}| < \\varepsilon$, il suffit que $|x - a| < \\varepsilon\\sqrt{a}$ (avec $x \\geqslant 0$, donc $\\eta_\\varepsilon = \\min(a, \\varepsilon\\sqrt{a})$).\n' +
              '• **En $a = 0^+$** : pour $x > 0$, $|\\sqrt{x} - 0| = \\sqrt{x} < \\varepsilon \\iff 0 < x < \\varepsilon^2$. Il suffit donc de choisir $\\eta_\\varepsilon = \\varepsilon^2 > 0$.\n' +
              '• **En $a = 0^-$** : $\\sqrt{x}$ n’est pas définie pour $x < 0$, donc la limite à gauche en $0$ n’a pas de sens (la continuité en $0$ se réduit à la continuité à droite sur le domaine $\\mathbb{R}_+$).',
            formula: {
              name: 'Choix explicite de η_ε pour f(x) = √x',
              formula: '\\text{En } a > 0 : \\eta_\\varepsilon = \\min(a, \\varepsilon\\sqrt{a}) ; \\qquad \\text{En } 0^+ : \\eta_\\varepsilon = \\varepsilon^2',
              note: 'La méthode générale : majorer |f(x) − l| ≤ C|x − a| au voisinage de a, puis poser η = ε/C.',
            },
            keyRule:
              'Dans une preuve $(\\varepsilon, \\eta)$, on travaille à rebours au brouillon pour exprimer $\\eta$ en fonction de $\\varepsilon$, puis on rédige à l’endroit : « Soit $\\varepsilon > 0$. Posons $\\eta = \\dots$. Alors si $|x - a| < \\eta$, on a $|f(x) - l| < \\varepsilon$. »',
            konanTip:
              'Pour une fonction affine $f(x) = mx + p$ ($m \\neq 0$), $|f(x) - f(a)| = |m|\\,|x - a|$, donc $\\eta_\\varepsilon = \\frac{\\varepsilon}{|m|}$ fonctionne instantanément pour tout $a \\in \\mathbb{R}$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p1_q6',
              type: 'mcq',
              prompt:
                'Pour démontrer par la définition $(\\varepsilon, \\eta)$ que $\\lim_{x \\to 0^+} \\sqrt{x} = 0$, quel choix de $\\eta_\\varepsilon > 0$ garantit $0 < x < \\eta_\\varepsilon \\implies \\sqrt{x} < \\varepsilon$ pour tout $\\varepsilon > 0$ ?',
              options: [
                '$\\eta_\\varepsilon = \\varepsilon$',
                '$\\eta_\\varepsilon = \\sqrt{\\varepsilon}$',
                '$\\eta_\\varepsilon = \\varepsilon^2$',
                '$\\eta_\\varepsilon = 2\\varepsilon$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Si $0 < x < \\varepsilon^2$, alors par croissance stricte de la racine carrée sur $\\mathbb{R}_+$, $\\sqrt{x} < \\sqrt{\\varepsilon^2} = \\varepsilon$. Attention : pour $\\varepsilon = 0{,}01$, $\\eta = \\varepsilon$ ne suffirait pas car $\\sqrt{0{,}009} \\approx 0{,}095 > 0{,}01$ !',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch3_p2',
        order: 2,
        title: 'Fonctions équivalentes en un point et à l’infini',
        summary:
          'Simplifier les calculs de limites grâce aux équivalents locaux ($f \\sim_a g$), connaître les équivalents usuels et maîtriser les opérations autorisées vs interdites (somme et composition).',
        conceptExplanation:
          'Deux fonctions sont **équivalentes** au voisinage de $a$ (fini ou $\\pm\\infty$) lorsqu’elles ont exactement le même comportement dominant près de $a$, ce qui permet de remplacer une expression compliquée par une forme élémentaire dans un produit ou un quotient.\n\n' +
          '• **Définition** : $f \\sim_a g \\iff \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1$ (pour $g$ ne s’annulant pas au voisinage épointé de $a$). Deux fonctions équivalentes ont la même limite et le même signe au voisinage de $a$.\n' +
          '• **Polynômes** : au voisinage de **$0$**, un polynôme est équivalent à son monôme de **plus bas degré** ; au voisinage de **$\\pm\\infty$**, il est équivalent à son monôme de **plus haut degré**.\n' +
          '• **Opérations autorisées** : **produit** ($f_1 f_2 \\sim_a g_1 g_2$), **quotient** ($f_1/f_2 \\sim_a g_1/g_2$) et **puissance fixe** ($f^\\alpha \\sim_a g^\\alpha$).\n' +
          '• **Opérations INTERDITES** : on ne peut en général ni **additionner** deux équivalents, ni **composer** à gauche par une fonction $h$ (en particulier ni $\\exp$, ni $\\ln$ sans précaution).',
        formulas: [
          {
            name: 'Équivalents usuels au voisinage de 0',
            formula: '\\sin x \\sim_0 x, \\quad \\tan x \\sim_0 x, \\quad 1 - \\cos x \\sim_0 \\frac{x^2}{2}, \\quad e^x - 1 \\sim_0 x, \\quad \\ln(1+x) \\sim_0 x, \\quad (1+x)^\\alpha - 1 \\sim_0 \\alpha x',
            note: 'Tous proviennent directement du nombre dérivé f’(0) (sauf 1 − cos x qui est d’ordre 2).',
          },
          {
            name: 'Règles de calcul sur les équivalents',
            formula: '(f_1 \\sim_a g_1 \\text{ et } f_2 \\sim_a g_2) \\implies f_1 f_2 \\sim_a g_1 g_2 \\quad \\text{et} \\quad \\frac{f_1}{f_2} \\sim_a \\frac{g_1}{g_2}',
            note: 'JAMAIS de somme f₁ + f₂ ~ g₁ + g₂ sans vérification (risque d’annulation des termes dominants) !',
          },
        ],
        keyRule:
          'Règle d’or absolue : on n’additionne JAMAIS des équivalents et on ne passe JAMAIS à l’exponentielle dans un équivalent !',
        workedExample: {
          title: 'Équivalents de $f(x) = \\frac{(x^2 + 7x^3)(x + 3)}{x^5 + x^2}$ en $0$, $+\\infty$ et $-1$',
          statement:
            'Déterminer un équivalent simple et la limite de $f(x) = \\frac{(x^2 + 7x^3)(x + 3)}{x^5 + x^2}$ lorsque $x \\to 0$, $x \\to +\\infty$, puis $x \\to -1$.',
          methodSteps: [
            '1) En $0$ : $x^2 + 7x^3 \\sim_0 x^2$ (plus bas degré), $x + 3 \\sim_0 3$, et $x^5 + x^2 \\sim_0 x^2$. Par produit et quotient, $f(x) \\sim_0 \\frac{x^2 \\cdot 3}{x^2} = 3$, donc $\\lim_{x\\to 0} f(x) = 3$.',
            '2) En $+\\infty$ : $x^2 + 7x^3 \\sim_{+\\infty} 7x^3$ (plus haut degré), $x + 3 \\sim_{+\\infty} x$, et $x^5 + x^2 \\sim_{+\\infty} x^5$. Donc $f(x) \\sim_{+\\infty} \\frac{7x^3 \\cdot x}{x^5} = \\frac{7}{x}$, d’où $\\lim_{x\\to +\\infty} f(x) = 0^+$.',
            '3) En $-1$ : le numérateur vaut $(1 - 7)(2) = -12 \\neq 0$, tandis que le dénominateur $x^2(x^3 + 1) = x^2(x + 1)(x^2 - x + 1)$ s’annule en $-1$ !',
            'En $x \\to -1$, $x^2 \\to 1$ et $x^2 - x + 1 \\to 3$, donc $x^5 + x^2 \\sim_{-1} 3(x + 1)$, d’où $f(x) \\sim_{-1} \\frac{-12}{3(x + 1)} = \\frac{-4}{x + 1}$ (limite $+\\infty$ en $(-1)^-$ et $-\\infty$ en $(-1)^+$).',
          ],
          conclusion:
            '$f(x) \\sim_0 3$, $f(x) \\sim_{+\\infty} \\frac{7}{x}$ (limite $0$), et $f(x) \\sim_{-1} \\frac{-4}{x + 1}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Équivalence',
            stepTheme: 'blue',
            stepTitle: 'Définition de $f \\sim_a g$ et propriétés d’une relation d’équivalence',
            paragraphText:
              'Lorsque deux fonctions croissent ou décroissent exactement au même rythme près d’un point $a$, on dit qu’elles sont équivalentes : l’une peut remplacer l’autre pour évaluer un rapport ou une limite.\n' +
              '• **Définition** : si $g(x) \\neq 0$ sur un voisinage épointé de $a \\in \\overline{\\mathbb{R}}$, $f \\sim_a g \\iff \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1$.\n' +
              '• **Relation d’équivalence** : $\\sim_a$ est réflexive ($f \\sim_a f$), symétrique ($f \\sim_a g \\implies g \\sim_a f$) et transitive ($f \\sim_a g$ et $g \\sim_a h \\implies f \\sim_a h$).\n' +
              '• **Conservation de la limite et du signe** : si $f \\sim_a g$ et $\\lim_{x\\to a} g(x) = l \\in \\overline{\\mathbb{R}}$, alors $\\lim_{x\\to a} f(x) = l$. De plus, $f(x)$ et $g(x)$ ont le même signe au voisinage de $a$.',
            formula: {
              name: 'Définition de l’équivalence locale',
              formula: 'f \\sim_a g \\iff \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1',
              note: 'Écrire f ~ₐ 0 n’a AUCUN sens (on ne divise jamais par 0) !',
            },
            keyRule:
              'On n’écrit JAMAIS $f \\sim_a 0$ ! Dire que $f$ tend vers $0$ s’écrit $\\lim_{x \\to a} f(x) = 0$ (ou $f(x) = o(1)$), jamais $f \\sim_a 0$.',
            konanTip:
              'Un équivalent en $a$ dépend toujours du point $a$ considéré : précise systématiquement l’indice ($\\sim_0$, $\\sim_{+\\infty}$, $\\sim_1$) sous la tilde !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q1',
              type: 'mcq',
              prompt:
                'Sachant que $f(x) \\sim_0 3x^2$, quelle affirmation est **nécessairement vraie** ?',
              options: [
                '$f(x) = 3x^2$ pour tout $x$ proche de $0$',
                '$\\lim_{x \\to 0} \\frac{f(x)}{x^2} = 3$ et $f(x) > 0$ au voisinage épointé de $0$',
                '$f(x) \\sim_0 0$',
                '$f(x) - 3x^2 = 0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$f(x) \\sim_0 3x^2 \\iff \\lim_{x\\to 0} \\frac{f(x)}{3x^2} = 1 \\iff \\lim_{x\\to 0} \\frac{f(x)}{x^2} = 3$. Comme $3x^2 > 0$ pour $x \\neq 0$ et le rapport tend vers $1 > 0$, $f(x)$ est strictement positif au voisinage épointé de $0$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Polynômes',
            stepTheme: 'green',
            stepTitle: 'Équivalents des polynômes en $0$ vs en $\\pm\\infty$',
            paragraphText:
              'Un même polynôme n’a pas du tout le même terme dominant près de $0$ et près de l’infini : il faut inverser son réflexe selon l’endroit où l’on regarde !\n' +
              '• **En $0$ (petites valeurs)** : $x^3$ est minuscule devant $x^2$, lui-même minuscule devant $x$. Un polynôme est donc équivalent en $0$ à son monôme de **plus bas degré**. Exemple : $4x^3 + 2x^2 - x \\sim_0 -x$.\n' +
              '• **En $\\pm\\infty$ (grandes valeurs)** : $x^3$ écrase $x^2$ et $x$. Un polynôme est équivalent en $\\pm\\infty$ à son monôme de **plus haut degré**. Exemple : $4x^3 + 2x^2 - x \\sim_{+\\infty} 4x^3$.\n' +
              '• **Hiérarchie à l’infini** : en $+\\infty$, $e^x$ domine toute puissance $x^k$, qui domine $\\ln |x|$. Ainsi $e^x + x^3 + \\ln |x| \\sim_{+\\infty} e^x$.',
            formula: {
              name: 'Règle des degrés pour un polynôme',
              formula: 'a_p x^p + \\cdots + a_n x^n \\underset{0}{\\sim} a_p x^p \\quad (a_p \\neq 0), \\qquad a_p x^p + \\cdots + a_n x^n \\underset{\\pm\\infty}{\\sim} a_n x^n \\quad (a_n \\neq 0)',
              note: 'En 0 : plus petit exposant ; en ±∞ : plus grand exposant.',
            },
            keyRule:
              'Mémo visuel : en $0$ (petit $x$), on prend le **plus petit** degré ; en $\\infty$ (grand $x$), on prend le **plus grand** degré !',
            konanTip:
              'Si un polynôme a un terme constant non nul (ex : $P(x) = 5 + 2x + x^2$), son monôme de plus bas degré est la constante $5$ (degré $0$), donc $P(x) \\sim_0 5$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle fonction est équivalente à $f(x) = 4x^3 + 2x^2 - x$ au voisinage de $0$ ?',
              options: ['$4x^3$', '$2x^2$', '$-x$', '$4x^3 + 2x^2$'],
              correctAnswerIndex: 2,
              explanation:
                'Au voisinage de $0$, un polynôme est équivalent à son monôme de plus bas degré : $\\frac{4x^3 + 2x^2 - x}{-x} = -4x^2 - 2x + 1 \\xrightarrow[x\\to 0]{} 1$, donc $f(x) \\sim_0 -x$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Produit & Quotient',
            stepTheme: 'violet',
            stepTitle: 'Compatibilité avec le produit, le quotient et les puissances constantes',
            paragraphText:
              'La puissance des équivalents réside dans le fait qu’on peut remplacer chaque facteur d’un produit ou d’un quotient par son équivalent le plus simple.\n' +
              '• **Produit** : si $f_1 \\sim_a g_1$ et $f_2 \\sim_a g_2$, alors $\\frac{f_1 f_2}{g_1 g_2} = \\frac{f_1}{g_1} \\cdot \\frac{f_2}{g_2} \\to 1 \\times 1 = 1$, donc $f_1 f_2 \\sim_a g_1 g_2$.\n' +
              '• **Quotient** : de même, $\\frac{f_1}{f_2} \\sim_a \\frac{g_1}{g_2}$.\n' +
              '• **Puissance fixe** : pour tout réel constant $\\alpha \\in \\mathbb{R}$, si $f \\sim_a g$ (avec $f, g > 0$), alors $f^\\alpha \\sim_a g^\\alpha$ (car $(f/g)^\\alpha \\to 1^\\alpha = 1$). Attention : cela devient FAUX si l’exposant $\\alpha(x)$ dépend de $x$ et tend vers $\\infty$ !',
            formula: {
              name: 'Puissance fixe vs exposant variable',
              formula: '(f \\sim_a g \\text{ et } \\alpha \\in \\mathbb{R} \\text{ fixe}) \\implies f^\\alpha \\sim_a g^\\alpha',
              note: 'Contre-exemple à exposant variable : 1 + 1/n ~ 1, mais (1 + 1/n)ⁿ → e ≠ 1ⁿ = 1 !',
            },
            keyRule:
              'Dans un produit ou un quotient, remplace chaque facteur par son équivalent et simplifie ; dans une puissance $f(x)^{u(x)}$ dont l’exposant varie, passe toujours à $\\exp(u(x)\\ln f(x))$.',
            konanTip:
              'Pour vérifier en une seconde si une opération est compatible avec $\\sim_a$, demande-toi : « est-ce un produit, un quotient ou une puissance constante ? » Si oui, fonce ; sinon, prudence maximale !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q3',
              type: 'mcq',
              prompt:
                'Quel est un équivalent simple en $+\\infty$ de $f(x) = \\frac{(2x^2 + 5x)^3}{\\sqrt{9x^6 + 1}}$ ?',
              options: [
                '$\\frac{8}{3} x^3$',
                '$\\frac{2}{3} x^3$',
                '$\\frac{8}{9} x^3$',
                '$\\frac{8}{3} x^2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En $+\\infty$, $2x^2 + 5x \\sim 2x^2$ donc $(2x^2 + 5x)^3 \\sim (2x^2)^3 = 8x^6$. Au dénominateur, $9x^6 + 1 \\sim 9x^6$ donc $\\sqrt{9x^6 + 1} \\sim \\sqrt{9x^6} = 3x^3$ (car $x > 0$). Par quotient, $f(x) \\sim_{+\\infty} \\frac{8x^6}{3x^3} = \\frac{8}{3} x^3$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Formulaire',
            stepTheme: 'violet',
            stepTitle: 'Tableau des équivalents usuels au voisinage de $0$',
            paragraphText:
              'Presque tous les équivalents usuels en $0$ ne sont qu’une reformulation du nombre dérivé en $0$ : si $f(0) = 0$ et $f’(0) \\neq 0$, alors $\\lim_{x\\to 0} \\frac{f(x)}{f’(0) x} = 1$, donc $f(x) \\sim_0 f’(0) x$.\n' +
              '• **Trigonométriques** : $\\sin x \\sim_0 x$, $\\tan x \\sim_0 x$, et $1 - \\cos x \\sim_0 \\frac{x^2}{2}$ (à retenir car $\\cos’(0) = 0$ !).\n' +
              '• **Logarithme et exponentielle** : $\\ln(1 + x) \\sim_0 x$ et $e^x - 1 \\sim_0 x$.\n' +
              '• **Puissance** : $(1 + x)^\\alpha - 1 \\sim_0 \\alpha x$, en particulier $\\sqrt{1 + x} - 1 \\sim_0 \\frac{x}{2}$. Et si $u(x) \\to 0$ quand $x \\to a$, on peut composer à **droite** : $\\sin(u(x)) \\sim_a u(x)$, $\\ln(1 + u(x)) \\sim_a u(x)$, $e^{u(x)} - 1 \\sim_a u(x)$ !',
            formula: {
              name: 'Composition à droite par u(x) → 0',
              formula: 'u(x) \\xrightarrow[x\\to a]{} 0 \\implies \\begin{cases} \\ln(1 + u(x)) \\sim_a u(x) \\\\ e^{u(x)} - 1 \\sim_a u(x) \\\\ 1 - \\cos(u(x)) \\sim_a \\frac{1}{2}u(x)^2 \\end{cases}',
              note: 'Exemple en +∞ : sin(1/x) ~ 1/x et ln(1 + 3/x) ~ 3/x.',
            },
            keyRule:
              'Si $f$ est dérivable en $0$ avec $f(0) = 0$ et $f’(0) \\neq 0$, alors $f(x) \\sim_0 f’(0)x$. Si tu as un trou de mémoire sur un équivalent en $0$, calcule simplement $f’(0)$ !',
            konanTip:
              'Pour $\\lim_{x \\to 0} \\frac{\\ln(1 + 5x)}{\\sin(2x)}$, utilise les équivalents : $\\ln(1+5x) \\sim_0 5x$ et $\\sin(2x) \\sim_0 2x$, donc le quotient équivaut à $\\frac{5x}{2x} = \\frac{5}{2}$ en deux secondes !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la limite quand $x \\to 0$ de $\\frac{1 - \\cos(2x)}{x \\ln(1 + 3x)}$ ?',
              options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{4}{3}$', '$0$'],
              correctAnswerIndex: 0,
              explanation:
                'En $0$, $1 - \\cos(2x) \\sim_0 \\frac{(2x)^2}{2} = 2x^2$, et $x\\ln(1 + 3x) \\sim_0 x(3x) = 3x^2$. Par quotient, l’expression est équivalente en $0$ à $\\frac{2x^2}{3x^2} = \\frac{2}{3}$, qui est donc la limite.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Interdiction absolue',
            stepTheme: 'orange',
            stepTitle: 'Pourquoi on n’additionne ni ne compose à gauche les équivalents',
            paragraphText:
              'C’est le piège numéro 1 sur les équivalents : remplacer un terme par son équivalent à l’intérieur d’une somme ou d’une exponentielle donne presque toujours un résultat FAUX.\n' +
              '• **Contre-exemple sur la somme** : soit $f(x) = \\ln(1 + x) - x - x^2$ en $0$. On sait que $\\ln(1+x) \\sim_0 x$. Si l’on remplaçait naïvement $\\ln(1+x)$ par $x$ dans la somme, on trouverait $x - x - x^2 = -x^2$ ! Or le vrai développement est $\\ln(1+x) = x - \\frac{x^2}{2} + o(x^2)$, donc $f(x) = -\\frac{3}{2}x^2 + o(x^2) \\sim_0 -\\frac{3}{2}x^2$ !\n' +
              '• **Autre exemple** : $f_1(x) = x + x^2 \\sim_0 x$ et $f_2(x) = -x + x^3 \\sim_0 -x$, mais $f_1 + f_2 = x^2 + x^3 \\sim_0 x^2$ (la somme des équivalents $x + (-x) = 0$ est absurde).\n' +
              '• **Contre-exemple sur la composition à gauche** : $x^2 + x \\sim_{+\\infty} x^2$, mais $\\frac{e^{x^2 + x}}{e^{x^2}} = e^x \\to +\\infty \\neq 1$, donc $e^{x^2+x} \\not\\sim_{+\\infty} e^{x^2}$ !',
            formula: {
              name: 'Limite exacte du contre-exemple ln(1+x) − x − x²',
              formula: '\\lim_{x \\to 0} \\frac{\\ln(1 + x) - x - x^2}{x^2} = -\\frac{1}{2} - 1 = -\\frac{3}{2} \\implies \\ln(1+x) - x - x^2 \\sim_0 -\\frac{3}{2}x^2',
              note: 'Remplacer ln(1+x) par x aurait fait perdre le terme −x²/2 qui est du même ordre que −x² !',
            },
            keyRule:
              'Tu n’as le droit d’additionner des équivalents QUE si les termes ne se compensent pas (ex : $f_1 \\sim_a g_1$ et $f_2 \\sim_a g_2$ avec $g_1, g_2$ de **même signe**). En cas de soustraction où les termes dominants s’annulent, passe à la règle de l’Hôpital ou à un développement limité d’ordre supérieur !',
            konanTip:
              'Un excellent réflexe : ne remplace JAMAIS un morceau d’une somme par son équivalent ; remplace uniquement des **facteurs** entiers d’un produit ou d’un quotient.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q5',
              type: 'mcq',
              prompt:
                'On considère $f_1(x) = x + x^2$ et $f_2(x) = -x + x^3$ au voisinage de $0$. On a $f_1 \\sim_0 x$ et $f_2 \\sim_0 -x$. Que peut-on conclure en général sur l’équivalent de $f_1 + f_2$ ?',
              options: [
                '$f_1 + f_2 \\sim_0 x + (-x) = 0$',
                '$f_1 + f_2 \\sim_0 x^3$',
                'On ne peut rien conclure en général par addition d’équivalents (ici $f_1 + f_2 \\sim_0 x^2$)',
                '$f_1 + f_2$ n’admet aucun équivalent en $0$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’addition n’est pas compatible avec la relation d’équivalence car les termes principaux $x$ et $-x$ s’annulent. En calculant directement la somme, $f_1(x) + f_2(x) = x^2 + x^3 \\sim_0 x^2$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Changement de variable',
            stepTheme: 'green',
            stepTitle: 'Trouver un équivalent en un point $a \\neq 0$ par changement de variable',
            paragraphText:
              'Tous nos équivalents usuels ($\\sin u, \\ln(1+u), e^u - 1$) sont centrés en $0$. Que faire lorsque $x$ tend vers un autre point $a \\neq 0$ (par exemple $a = 1$, $a = -1$ ou $a = \\pi$) ?\n' +
              '• **Méthode universelle** : poser $h = x - a$ (donc $x = a + h$ et $h \\to 0$) afin de ramener le calcul en $0$ !\n' +
              '• **Exemple 1** : équivalent de $\\ln(x)$ en $1$. On pose $x = 1 + h$ ($h \\to 0$) : $\\ln(x) = \\ln(1 + h) \\sim_0 h = x - 1$, donc $\\ln(x) \\sim_1 x - 1$.\n' +
              '• **Exemple 2** : équivalent de $e^x - e$ en $1$. On factorise $e^x - e = e(e^{x-1} - 1) = e(e^h - 1) \\sim_0 eh = e(x - 1)$.',
            formula: {
              name: 'Équivalents décalés au voisinage de a = 1',
              formula: '\\ln(x) \\sim_1 x - 1, \\qquad e^x - e \\sim_1 e(x - 1), \\qquad \\sqrt{x} - 1 \\sim_1 \\frac{x - 1}{2}',
              note: 'Tous se retrouvent en posant h = x − 1 → 0.',
            },
            keyRule:
              'Pour calculer un équivalent ou une limite en un point $a \\neq 0$, le changement de variable $h = x - a \\to 0$ est le couteau suisse absolu.',
            konanTip:
              'Une fois ton équivalent trouvé en fonction de $h$, pense toujours à revenir à la variable $x$ en remplaçant $h$ par $x - a$ dans ta conclusion finale !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to 1} \\frac{\\ln(x)}{x^2 - 1}$ ?',
              options: ['$0$', '$1$', '$\\frac{1}{2}$', '$2$'],
              correctAnswerIndex: 2,
              explanation:
                'En posant $h = x - 1 \\to 0$, $\\ln(x) = \\ln(1+h) \\sim_0 h = x - 1$. Au dénominateur, $x^2 - 1 = (x - 1)(x + 1) \\sim_1 2(x - 1)$. Donc $\\frac{\\ln(x)}{x^2 - 1} \\sim_1 \\frac{x - 1}{2(x - 1)} = \\frac{1}{2}$.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_analyse_ch3_p3',
        order: 3,
        title: 'Continuité, TVI, théorème de Weierstrass et point fixe',
        summary:
          'Vérifier la continuité en un point ou sur un intervalle (y compris par morceaux), prolonger par continuité, et exploiter les trois grands théorèmes globaux : TVI, Weierstrass et point fixe.',
        conceptExplanation:
          'Une fonction est **continue en $a$** lorsque son graphe ne présente ni trou ni saut au point d’abscisse $a$ : on peut tracer la courbe sans lever le crayon.\n\n' +
          '• **Définition** : $f$ est continue en $a \\iff$ (1) $a \\in D_f$, (2) $\\lim_{x \\to a} f(x)$ existe et est finie, (3) $\\lim_{x \\to a} f(x) = f(a)$. Cela équivaut à la continuité à gauche et à droite en $a$.\n' +
          '• **Prolongement par continuité** : si $f$ n’est pas définie en $a$ mais admet une limite finie $l$ en $a$, on peut la prolonger continûment en posant $\\tilde{f}(a) = l$.\n' +
          '• **Théorème des Valeurs Intermédiaires (TVI)** : si $f$ est continue sur $[a, b]$, alors pour tout réel $d$ compris entre $f(a)$ et $f(b)$, il existe **au moins un** $c \\in [a, b]$ tel que $f(c) = d$. Si de plus $f$ est **strictement monotone**, ce $c$ est **unique** (théorème de la bijection).\n' +
          '• **Weierstrass & Point fixe** : toute fonction continue sur un segment compact $[a, b]$ est bornée et atteint son maximum global $M$ et son minimum global $m$. Si de plus $f([a, b]) \\subset [a, b]$, alors $f$ possède au moins un **point fixe** $c \\in [a, b]$ tel que $f(c) = c$ (équilibre économique).',
        formulas: [
          {
            name: 'Corollaire du TVI (existence d’une racine)',
            formula: '\\big(f \\text{ continue sur } [a, b] \\text{ et } f(a)\\cdot f(b) \\leqslant 0\\big) \\implies \\exists c \\in [a, b],\\ f(c) = 0',
            note: 'Si f est de plus strictement monotone sur [a, b], la solution c est unique.',
          },
          {
            name: 'Théorème du point fixe (dimension 1)',
            formula: '\\big(f \\text{ continue sur } [a, b] \\text{ et } f([a, b]) \\subset [a, b]\\big) \\implies \\exists c \\in [a, b],\\ f(c) = c',
            note: 'Preuve en 2 lignes par le TVI appliqué à g(x) = f(x) − x : g(a) ≥ 0 et g(b) ≤ 0 !',
          },
        ],
        keyRule:
          'Le TVI garantit l’**existence** d’au moins une solution, jamais son **unicité** ! Pour prouver l’unicité, il faut impérativement ajouter la **stricte monotonie** de $f$.',
        workedExample: {
          title: 'Continuité d’un barème progressif de frais immobiliers et existence de racine',
          statement:
            'Un agent immobilier perçoit $14\\%$ sur la tranche de loyer de $0$ à $1\\,000$, $10\\%$ sur la tranche de $1\\,000$ à $1\\,500$, $6\\%$ sur la tranche de $1\\,500$ à $3\\,000$, et $4\\%$ au-delà de $3\\,000$. Écrire la fonction $F(x)$ des frais et vérifier sa continuité.',
          methodSteps: [
            '1) Pour $0 \\leqslant x \\leqslant 1000$ : $F(x) = 0{,}14x$. Au seuil $x = 1000$, $F(1000) = 140$.',
            '2) Pour $1000 < x \\leqslant 1500$ : on garde $140$ sur la 1re tranche et on ajoute $10\\%$ de ce qui dépasse $1000$ : $F(x) = 140 + 0{,}10(x - 1000) = 0{,}10x + 40$. À $x = 1500$, $F(1500) = 190$.',
            '3) Pour $1500 < x \\leqslant 3000$ : $F(x) = 190 + 0{,}06(x - 1500) = 0{,}06x + 100$. À $x = 3000$, $F(3000) = 280$.',
            '4) Pour $x > 3000$ : $F(x) = 280 + 0{,}04(x - 3000) = 0{,}04x + 160$. Sur chaque intervalle ouvert, $F$ est affine donc continue. Aux jonctions $1000$, $1500$ et $3000$, les limites à gauche et à droite coïncident ($140$, $190$, $280$) : $F$ est donc **continue partout sur $[0, +\\infty[$** (en revanche, sa pente change aux seuils, donc elle n’y est pas dérivable).',
          ],
          conclusion:
            'Un barème par tranches marginales est toujours continu aux seuils (sans effet de saut fiscal), mais non dérivable aux points de changement de taux.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Continuité',
            stepTheme: 'blue',
            stepTitle: 'Les 3 conditions de la continuité et le prolongement par continuité',
            paragraphText:
              'Dire que $f$ est continue en $a$ exige trois conditions indissociables : $f$ doit être définie en $a$, sa limite en $a$ doit exister et être finie, et cette limite doit être égale à $f(a)$.\n' +
              '• **Dérivabilité non requise** : une fonction peut parfaitement être continue en $a$ sans y être dérivable (exemple : $x \\mapsto |x|$ en $0$ présente un point anguleux).\n' +
              '• **Prolongement par continuité** : la fonction $f(x) = \\frac{\\sin x}{x}$ n’est pas définie en $0$, mais comme $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, la fonction prolongée $\\tilde{f}(0) = 1$ est continue en $0$.\n' +
              '• **Exemple classique** : pour $f(x) = \\frac{x + 2 - \\sqrt{4 - x^2}}{x}$ ($x \\neq 0$) et $f(0) = 1$, on a prouvé que $\\lim_{x\\to 0} f(x) = 1 = f(0)$, donc $f$ est continue en $0$.',
            formula: {
              name: 'Définition de la continuité en a',
              formula: 'f \\text{ continue en } a \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)',
              note: 'Toutes les fonctions usuelles (polynômes, fractions rationnelles, √, ln, exp, sin, cos) sont continues sur leur domaine.',
            },
            keyRule:
              'La dérivabilité en $a$ n’est PAS nécessaire pour la continuité en $a$ : « dérivable $\\implies$ continue », mais la réciproque est fausse !',
            konanTip:
              'Pour rendre continue en $a$ une fonction définie par morceaux avec un paramètre $m$, écris l’équation $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$ et résous en $m$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p3_q1',
              type: 'mcq',
              prompt:
                'Pour qu’une fonction $f$ soit continue en un point $a$, laquelle de ces conditions **N’EST PAS** nécessaire ?',
              options: [
                '$f$ doit être définie en $a$',
                'La limite $\\lim_{x \\to a} f(x)$ doit exister et être finie',
                '$f$ doit être dérivable en $a$',
                '$\\lim_{x \\to a} f(x)$ doit être égale à $f(a)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La dérivabilité est une propriété strictement plus forte que la continuité : la fonction $x \\mapsto |x|$ est continue en $0$ bien qu’elle n’y soit pas dérivable.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Barème par morceaux',
            stepTheme: 'slate',
            stepTitle: 'Étudier la continuité d’une fonction tarifaire par tranches',
            paragraphText:
              'En économie et fiscalité (impôt sur le revenu, frais de transfert mobile money, commissions d’agence immobilière), on distingue les barèmes **par tranches marginales** (continus) des barèmes **par paliers globaux** (discontinus).\n' +
              '• **Barème marginal** : dans notre exemple immobilier ($14\\%$ jusqu’à $1000$, $10\\%$ sur la tranche $1000$–$1500$, $6\\%$ sur $1500$–$3000$, $4\\%$ au-delà), on ne change le taux que sur le surplus. Pour un loyer de $1\\,200$, les frais valent $140 + 0{,}10 \\times 200 = 160$.\n' +
              '• **Vérification aux raccords** : à $x = 1000$, $\\lim_{x\\to 1000^-} F(x) = 0{,}14 \\times 1000 = 140$ et $\\lim_{x\\to 1000^+} F(x) = 140 + 0{,}10(1000 - 1000) = 140$. Il n’y a aucun saut.\n' +
              '• **Contre-exemple discontinu** : si le taux s’appliquait à la totalité du montant (effet de seuil), passer de $1000$ à $1001$ ferait chuter brutalement les frais de $140$ à $100{,}1$ !',
            formula: {
              name: 'Expression de la continuité aux points de raccord x₀',
              formula: '\\lim_{x \\to x_0^-} F_{\\text{tranche } k}(x) = F(x_0) = \\lim_{x \\to x_0^+} F_{\\text{tranche } k+1}(x)',
              note: 'Un barème fiscal progressif bien conçu est toujours continu mais affine par morceaux.',
            },
            keyRule:
              'Pour étudier la continuité d’une fonction définie par morceaux, indique d’abord qu’elle est continue sur chaque intervalle ouvert (comme somme/composée de fonctions usuelles), puis teste **chaque point de jonction** par limites à gauche et à droite.',
            konanTip:
              'N’oublie jamais de justifier la continuité **en dehors** des points de raccord en une phrase courte (« sur $]a, b[$, $F$ est affine donc continue ») : cela rapporte des points faciles en copie.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p3_q2',
              type: 'mcq',
              prompt:
                'Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x + 3$ si $x \\leqslant 1$, et $f(x) = x^2 + m$ si $x > 1$. Quelle valeur de $m$ rend $f$ continue en $x = 1$ ?',
              options: ['$m = 3$', '$m = 4$', '$m = 5$', '$m = 2$'],
              correctAnswerIndex: 1,
              explanation:
                'On a $f(1) = \\lim_{x \\to 1^-} f(x) = 2(1) + 3 = 5$, et $\\lim_{x \\to 1^+} f(x) = 1^2 + m = 1 + m$. Pour la continuité en $1$, il faut $1 + m = 5$, soit $m = 4$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Stabilité',
            stepTheme: 'violet',
            stepTitle: 'Opérations algébriques et composition de fonctions continues',
            paragraphText:
              'Plutôt que de revenir à la définition $(\\varepsilon, \\eta)$ pour chaque nouvelle fonction, on s’appuie sur la stabilité de la continuité par les opérations usuelles.\n' +
              '• **Opérations** : si $f$ et $g$ sont continues en $a$, alors $f + g$, $\\lambda f$, $f \\times g$ et $f / g$ (à condition que $g(a) \\neq 0$) sont continues en $a$.\n' +
              '• **Composition** : si $f$ est continue en $a$ et $g$ est continue en $f(a)$, alors $g \\circ f$ est continue en $a$.\n' +
              '• **Application** : la fonction $h(x) = \\ln(1 + x^2) + \\sqrt{x^4 + 5}$ est continue sur $\\mathbb{R}$ car $1 + x^2 > 0$ et $x^4 + 5 > 0$ sur $\\mathbb{R}$, et $\\ln$, $\\sqrt{\\cdot}$ sont continues sur $]0, +\\infty[$.',
            formula: {
              name: 'Continuité d’une fonction composée',
              formula: '\\big(f \\text{ continue en } a \\text{ et } g \\text{ continue en } f(a)\\big) \\implies g \\circ f \\text{ continue en } a',
              note: 'Vérifier systématiquement que f(a) appartient au domaine de continuité de g !',
            },
            keyRule:
              'La continuité d’un quotient $f/g$ n’est garantie qu’aux points où le dénominateur $g(x)$ ne s’annule PAS !',
            konanTip:
              'Par la formule $\\max(f, g) = \\frac{f + g + |f - g|}{2}$, le maximum et le minimum de deux fonctions continues sont aussi continus !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p3_q3',
              type: 'mcq',
              prompt:
                'Sur quel ensemble maximal la fonction $f(x) = \\frac{\\sqrt{x + 2}}{x^2 - 9}$ est-elle continue ?',
              options: [
                '$[-2, +\\infty[$',
                '$[-2, 3[ \\cup ]3, +\\infty[$',
                '$]-2, 3[ \\cup ]3, +\\infty[$',
                '$\\mathbb{R} \\setminus \\{-3, 3\\}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La racine $\\sqrt{x + 2}$ est définie et continue sur $[-2, +\\infty[$ (y compris en $-2$). Le dénominateur $x^2 - 9$ s’annule en $-3$ (hors de $[-2, +\\infty[$) et en $3$. Le domaine de continuité est donc $[-2, 3[ \\cup ]3, +\\infty[$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'TVI',
            stepTheme: 'violet',
            stepTitle: 'Théorème des Valeurs Intermédiaires (TVI) et existence de solutions',
            paragraphText:
              'Si une courbe continue passe d’une altitude négative en $x = a$ à une altitude positive en $x = b$, elle doit forcément traverser l’axe des abscisses au moins une fois entre $a$ et $b$ : c’est le Théorème des Valeurs Intermédiaires.\n' +
              '• **Énoncé général** : si $f$ est continue sur $[a, b]$, alors pour tout réel $d$ compris entre $f(a)$ et $f(b)$, il existe **au moins un** $c \\in [a, b]$ tel que $f(c) = d$.\n' +
              '• **Corollaire des zéros** : si $f$ est continue sur $[a, b]$ et $f(a) \\cdot f(b) < 0$, alors l’équation $f(x) = 0$ admet au moins une solution dans $]a, b[$.\n' +
              '• **Théorème de la bijection (unicité)** : si en plus $f$ est **strictement monotone** sur $[a, b]$, alors $f$ réalise une bijection de $[a, b]$ sur l’intervalle d’extrémités $f(a)$ et $f(b)$, et la solution $c$ est **unique**.',
            formula: {
              name: 'Image d’un intervalle par une fonction continue',
              formula: 'f \\text{ continue sur un intervalle } I \\implies f(I) \\text{ est un intervalle}',
              note: 'C’est la formulation topologique la plus élégante du TVI.',
            },
            keyRule:
              'Sans hypothèse de stricte monotonie, le TVI prouve uniquement « il existe **au moins un** $c$ », JAMAIS « il existe un **unique** $c$ » !',
            konanTip:
              'Pour localiser une racine d’une équation transcendante comme $e^x + x - 3 = 0$ par dichotomie, calcule $f(0) = -2 < 0$ et $f(1) = e - 2 > 0$ : le TVI (+ croissance stricte) assure une unique racine dans $]0, 1[$.',
            visualSchema: {
              type: 'function_plot',
              title: 'Illustration du Théorème des Valeurs Intermédiaires (TVI)',
              caption: 'f(x) = x³ − 3x + 1 est continue sur [0, 1] avec f(0) = 1 > 0 et f(1) = −1 < 0 : elle coupe donc l’axe y = 0 au moins une fois (en c ≈ 0,35).',
              plot: {
                xMin: -0.5,
                xMax: 2.2,
                yMin: -2,
                yMax: 2.5,
                xStep: 0.5,
                yStep: 1,
                curves: [
                  {
                    label: 'f(x) = x³ − 3x + 1',
                    color: 'blue',
                    pieces: [{ expr: 'x^3 - 3*x + 1', from: -0.5, to: 2.2 }],
                  },
                ],
                points: [
                  { x: 0, y: 1, label: 'f(0)=1', filled: true, color: 'violet' },
                  { x: 0.347, y: 0, label: 'c ≈ 0,35', filled: true, color: 'green' },
                  { x: 1, y: -1, label: 'f(1)=-1', filled: true, color: 'orange' },
                ],
                horizontalLines: [{ y: 0, label: 'y = 0', color: 'slate' }],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p3_q4',
              type: 'mcq',
              prompt:
                'Une fonction $f$ est continue sur $[0, 2]$ avec $f(0) = -1$ et $f(2) = 5$. Lequel de ces énoncés est **garanti** par le TVI seul ?',
              options: [
                'Il existe au moins un $c \\in [0, 2]$ tel que $f(c) = 0$',
                '$f$ est croissante sur $[0, 2]$',
                '$f$ admet un maximum en $x = 2$',
                'Il existe un unique $c \\in [0, 2]$ tel que $f(c) = 0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$0$ est compris entre $f(0) = -1$ et $f(2) = 5$, donc le TVI garantit l’existence d’au moins un $c \\in [0, 2]$ tel que $f(c) = 0$. Sans information sur la monotonie, $f$ peut osciller, couper l’axe plusieurs fois et atteindre un maximum supérieur à $5$ à l’intérieur de $[0, 2]$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Optimisation',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Weierstrass (maximum et minimum globaux sur un compact)',
            paragraphText:
              'En économie numérique et en recherche opérationnelle, un problème d’optimisation (maximiser un profit ou minimiser un coût) possède-t-il toujours une solution ? Le théorème de Weierstrass donne la condition suffisante idéale.\n' +
              '• **Énoncé** : toute fonction $f$ **continue** sur un intervalle **fermé et borné** $[a, b]$ (un segment compact) est bornée et **atteint** ses bornes : il existe $x_m, x_M \\in [a, b]$ tels que $\\forall x \\in [a, b],\\ f(x_m) \\leqslant f(x) \\leqslant f(x_M)$.\n' +
              '• **Image d’un segment** : $f([a, b]) = [m, M]$ est encore un segment fermé borné.\n' +
              '• **Nécessité des 3 hypothèses** : si l’intervalle est **ouvert** ($f(x) = 1/x$ sur $]0, 1]$), **non borné** ($f(x) = x$ sur $[0, +\\infty[$) ou si $f$ est **discontinue** ($f(x) = x - E(x)$ sur $[0, 1]$), l’extremum peut ne pas être atteint !',
            formula: {
              name: 'Théorème des bornes atteintes (Weierstrass)',
              formula: 'f \\in \\mathcal{C}^0([a, b], \\mathbb{R}) \\implies \\exists (x_m, x_M) \\in [a, b]^2,\\ f([a, b]) = [f(x_m), f(x_M)]',
              note: 'Les trois mots-clés obligatoires : CONTINUE + FERMÉ + BORNÉ.',
            },
            keyRule:
              'Pour appliquer Weierstrass, vérifie les **3 verrous** : $f$ continue, intervalle **fermé** et intervalle **borné** (c’est-à-dire un segment $[a, b]$).',
            konanTip:
              'Sur $]0, 1[$, la fonction continue $f(x) = x$ est bornée mais n’atteint ni son minimum ($0$) ni son maximum ($1$) : voilà pourquoi les crochets fermés $[a, b]$ sont indispensables !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p3_q5',
              type: 'mcq',
              prompt:
                'Sous quelles conditions suffisantes une fonction $f : I \\to \\mathbb{R}$ est-elle assurée d’atteindre un maximum global et un minimum global sur $I$ ?',
              options: [
                'Si elle est dérivable sur un intervalle ouvert $]a, b[$',
                'Si elle est continue sur un intervalle fermé et borné $[a, b]$',
                'Si elle est monotone sur $[0, +\\infty[$',
                'Si elle est bornée sur $[a, b]$ (même discontinue)',
              ],
              correctAnswerIndex: 1,
              explanation:
                'C’est exactement le théorème de Weierstrass : toute fonction continue sur un segment fermé borné $[a, b]$ y atteint son minimum et son maximum globaux.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Point fixe',
            stepTheme: 'violet',
            stepTitle: 'Théorème du point fixe en dimension 1 et équilibre économique',
            paragraphText:
              'En microéconomie (équilibre de marché offre = demande, équilibre de Nash) et en dynamique des suites récurrentes, on cherche des états qui restent inchangés sous l’action d’une transformation $f$ : ce sont les **points fixes** ($f(x) = x$).\n' +
              '• **Théorème du point fixe** : si $f : [a, b] \\to [a, b]$ est continue (autrement dit $f$ est continue sur $[a, b]$ et $f([a, b]) \\subset [a, b]$), alors il existe au moins un $c \\in [a, b]$ tel que $f(c) = c$.\n' +
              '• **Démonstration élégante** : posons $g(x) = f(x) - x$, continue sur $[a, b]$. Comme $f(a) \\in [a, b]$, on a $f(a) \\geqslant a$, donc $g(a) \\geqslant 0$. Comme $f(b) \\in [a, b]$, $f(b) \\leqslant b$, donc $g(b) \\leqslant 0$. Par le TVI, $g$ s’annule en au moins un $c \\in [a, b]$, soit $f(c) = c$ !\n' +
              '• **Lien avec les suites récurrentes** : si $u_{n+1} = f(u_n)$ converge vers $l$ et $f$ est continue en $l$, alors $l$ est nécessairement un point fixe de $f$.',
            formula: {
              name: 'Fonction auxiliaire de preuve du point fixe',
              formula: 'g(x) = f(x) - x \\implies g(a) = f(a) - a \\geqslant 0 \\text{ et } g(b) = f(b) - b \\leqslant 0',
              note: 'C’est le cas en dimension 1 du célèbre théorème de Brouwer.',
            },
            keyRule:
              'Dès qu’un énoncé te demande de prouver l’existence d’un $c \\in [a, b]$ tel que $f(c) = c$ (ou $f(c) = h(c)$), définis la fonction auxiliaire $g(x) = f(x) - x$ (ou $f(x) - h(x)$) et applique le TVI !',
            konanTip:
              'L’hypothèse $f([a, b]) \\subset [a, b]$ est indispensable : la translation $f(x) = x + 1$ est continue sur $[0, 1]$ mais envoie $[0, 1]$ dans $[1, 2]$ et n’a aucun point fixe !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch3_p3_q6',
              type: 'mcq',
              prompt:
                'Soit $f : [0, 1] \\to [0, 1]$ une fonction continue. Pour prouver qu’il existe $c \\in [0, 1]$ tel que $f(c) = c$, quelle fonction auxiliaire applique-t-on au TVI ?',
              options: [
                '$g(x) = f(x) + x$, car $g(0) \\geqslant 0$ et $g(1) \\leqslant 2$',
                '$g(x) = f(x) - x$, car $g(0) = f(0) \\geqslant 0$ et $g(1) = f(1) - 1 \\leqslant 0$',
                '$g(x) = \\frac{f(x)}{x}$, car elle s’annule en $1$',
                '$g(x) = f’(x) - 1$, par le théorème de Rolle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $f([0, 1]) \\subset [0, 1]$, on a $0 \\leqslant f(0)$ donc $g(0) = f(0) - 0 \\geqslant 0$, et $f(1) \\leqslant 1$ donc $g(1) = f(1) - 1 \\leqslant 0$. Comme $g$ est continue sur $[0, 1]$, le TVI assure l’existence d’un $c \\in [0, 1]$ tel que $g(c) = 0$, soit $f(c) = c$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 4 : Dérivabilité, théorèmes globaux et convexité
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch4',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 4 — Dérivabilité, théorèmes globaux et convexité',
    summary:
      'Taux d’accroissement, tangente, DL₁, règles de dérivation et bijection réciproque, prolongement dérivable, théorème de Rolle, égalité et inégalité des accroissements finis (TAF/IAF), règle de l’Hôpital, dérivées successives, formule de Leibniz et fonctions convexes.',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch4_p1',
        order: 1,
        title: 'Dérivabilité, opérations, bijection réciproque et prolongement dérivable',
        summary:
          'Maîtriser le taux d’accroissement, le développement limité d’ordre 1, la dérivation des fonctions composées et réciproques, le théorème du prolongement dérivable et le cas limite $x^2\\sin(1/x)$.',
        conceptExplanation:
          'La **dérivée** $f’(a)$ mesure la sensibilité instantanée de $f$ au voisinage de $a$ : vitesse instantanée en physique, coût marginal ou recette marginale en économie, pente de la tangente en géométrie.\n\n' +
          '• **Taux d’accroissement** : $\\Delta_{a,f}(x) = \\frac{f(x) - f(a)}{x - a}$. $f$ est dérivable en $a$ ssi $\\Delta_{a,f}$ admet une limite finie $f’(a)$ en $a$ (équivalent pour un point intérieur à $f’_g(a) = f’_d(a) \\in \\mathbb{R}$).\n' +
          '• **DL₁ et continuité** : $f$ est dérivable en $a \\iff f(x) = f(a) + f’(a)(x - a) + o(x - a)$. En particulier, toute fonction dérivable en $a$ est **continue** en $a$ (réciproque fausse : $|x|$ en $0$).\n' +
          '• **Opérations et composition** : $(fg)’ = f’g + fg’$, $(f/g)’ = \\frac{f’g - fg’}{g^2}$, $(g \\circ f)’ = (g’ \\circ f) \\cdot f’$.\n' +
          '• **Bijection réciproque & Prolongement** : si $f$ est injective, dérivable et $f’ \\neq 0$ sur $I$, alors $(f^{-1})’ = \\frac{1}{f’ \\circ f^{-1}}$. Si $f$ est continue sur $I$, dérivable sur $I \\setminus \\{a\\}$ et $\\lim_{x \\to a} f’(x) = l \\in \\mathbb{R}$, alors $f$ est dérivable en $a$ et $f’(a) = l$.',
        formulas: [
          {
            name: 'Développement limité d’ordre 1 et tangente',
            formula: 'f(x) = f(a) + f’(a)(x - a) + o_{x \\to a}(x - a), \\qquad T_a : y = f(a) + f’(a)(x - a)',
            note: 'La tangente est la meilleure approximation affine locale de f près de a.',
          },
          {
            name: 'Dérivée d’une composée et d’une bijection réciproque',
            formula: '(g \\circ f)’(a) = g’(f(a)) \\cdot f’(a), \\qquad (f^{-1})’(y) = \\frac{1}{f’(f^{-1}(y))}',
            note: 'Attention : f⁻¹ n’est pas dérivable aux points y = f(x) où f’(x) = 0 (tangente verticale) !',
          },
          {
            name: 'Théorème du prolongement dérivable',
            formula: '\\big(f \\text{ continue en } a,\\ \\text{dérivable sur } I\\setminus\\{a\\} \\text{ et } \\lim_{x\\to a} f’(x) = l \\in \\mathbb{R}\\big) \\implies f \\text{ dérivable en } a \\text{ et } f’(a) = l',
            note: 'Attention : la réciproque est fausse ! f peut être dérivable en a sans que lim f’(x) n’existe.',
          },
        ],
        keyRule:
          'Si $\\lim_{x\\to a} f’(x) = l \\in \\mathbb{R}$ (avec $f$ continue en $a$), alors $f$ est dérivable en $a$ et $f’(a) = l$ ; mais si $\\lim_{x\\to a} f’(x)$ n’existe pas, on ne peut RIEN conclure : il faut revenir au taux d’accroissement !',
        workedExample: {
          title: 'Fonction dérivable à dérivée discontinue : $f(x) = x^2 \\sin(1/x)$ en $0$',
          statement:
            'Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 \\sin(1/x)$ si $x \\neq 0$ et $f(0) = 0$. Montrer que $f$ est dérivable sur $\\mathbb{R}$, puis déterminer si $f’$ est continue en $0$.',
          methodSteps: [
            '1) Pour $x \\neq 0$, $f$ est produit et composée de fonctions dérivables, donc dérivable avec $f’(x) = 2x \\sin\\left(\\frac{1}{x}\\right) + x^2 \\cos\\left(\\frac{1}{x}\\right)\\left(-\\frac{1}{x^2}\\right) = 2x \\sin\\left(\\frac{1}{x}\\right) - \\cos\\left(\\frac{1}{x}\\right)$.',
            '2) En $x = 0$, on revient à la définition du taux d’accroissement : $\\frac{f(x) - f(0)}{x - 0} = \\frac{x^2 \\sin(1/x)}{x} = x \\sin\\left(\\frac{1}{x}\\right)$.',
            '3) Comme $\\left|x \\sin\\left(\\frac{1}{x}\\right)\\right| \\leqslant |x| \\xrightarrow[x\\to 0]{} 0$, le théorème des gendarmes donne $\\lim_{x\\to 0} \\frac{f(x) - f(0)}{x} = 0$. Donc $f$ est dérivable en $0$ et $f’(0) = 0$.',
            '4) Pourtant, quand $x \\to 0$, $2x \\sin(1/x) \\to 0$ mais $-\\cos(1/x)$ n’admet aucune limite ! Donc $\\lim_{x\\to 0} f’(x)$ n’existe pas : $f’$ n’est **pas continue** en $0$ ($f$ est dérivable sur $\\mathbb{R}$, mais pas de classe $\\mathcal{C}^1$).',
          ],
          conclusion:
            '$f$ est dérivable sur tout $\\mathbb{R}$ avec $f’(0) = 0$, mais $f’$ est discontinue en $0$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Nombre dérivé',
            stepTheme: 'blue',
            stepTitle: 'Taux d’accroissement et dérivabilité à gauche / à droite',
            paragraphText:
              'Le taux d’accroissement $\\Delta_{a,f}(x) = \\frac{f(x) - f(a)}{x - a}$ représente la pente de la sécante joignant les points $(a, f(a))$ et $(x, f(x))$ — en économie, c’est le coût moyen supplémentaire entre les productions $a$ et $x$.\n' +
              '• **Dérivabilité en $a$** : $f$ est dérivable en $a$ ssi $\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$ existe et est **finie** ; cette limite est notée $f’(a)$.\n' +
              '• **Dérivées unilatérales** : en un point intérieur $a \\in I$, $f$ est dérivable en $a$ ssi elle est dérivable à gauche et à droite en $a$ et $f’_g(a) = f’_d(a)$.\n' +
              '• **Point anguleux** : pour $f(x) = |x|$ en $0$, $f’_g(0) = -1$ et $f’_d(0) = +1$ : les demi-tangentes diffèrent, donc $|x|$ n’est pas dérivable en $0$.',
            formula: {
              name: 'Définition équivalente avec h = x − a',
              formula: 'f’(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}',
              note: 'Si la limite vaut ±∞, la fonction n’est PAS dérivable en a (la courbe admet une tangente verticale).',
            },
            keyRule:
              'Un point où le taux d’accroissement tend vers $+\\infty$ (comme $\\sqrt{x}$ en $0^+$) n’est PAS un point de dérivabilité : la tangente est verticale (pente infinie).',
            konanTip:
              'En économie, $C’(q)$ (dérivée du coût total) s’interprète comme le **coût marginal**, c’est-à-dire le coût approximatif de production d’une unité supplémentaire à partir du niveau $q$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q1',
              type: 'mcq',
              prompt:
                'Pour la fonction $f(x) = |x - 2|$ au point $a = 2$, que valent les dérivées à gauche $f’_g(2)$ et à droite $f’_d(2)$ ?',
              options: [
                '$f’_g(2) = 0$ et $f’_d(2) = 0$, donc $f$ est dérivable en $2$',
                '$f’_g(2) = -1$ et $f’_d(2) = 1$, donc $f$ n’est pas dérivable en $2$',
                '$f’_g(2) = 1$ et $f’_d(2) = -1$, donc $f$ n’est pas dérivable en $2$',
                'Elles valent $-\\infty$ et $+\\infty$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $x < 2$, $\\frac{|x-2| - 0}{x - 2} = \\frac{-(x-2)}{x-2} = -1 \\to -1 = f’_g(2)$. Pour $x > 2$, $\\frac{|x-2|}{x-2} = 1 \\to 1 = f’_d(2)$. Comme $-1 \\neq 1$, $f$ n’est pas dérivable en $2$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Tangente & DL₁',
            stepTheme: 'violet',
            stepTitle: 'Interprétation géométrique et développement limité d’ordre 1',
            paragraphText:
              'Dire que $f$ est dérivable en $a$ signifie que, vue de très près autour de $a$, la courbe de $f$ se confond avec sa tangente $y = f(a) + f’(a)(x - a)$, à un terme d’erreur négligeable devant $(x - a)$ près.\n' +
              '• **Développement limité d’ordre 1 ($\\text{DL}_1$)** : $f$ est dérivable en $a$ ssi il existe une fonction $\\varepsilon(x) \\xrightarrow[x\\to a]{} 0$ telle que $f(x) = f(a) + f’(a)(x - a) + (x - a)\\varepsilon(x)$, noté $f(x) = f(a) + f’(a)(x - a) + o_{x\\to a}(x - a)$.\n' +
              '• **Approximation affine** : pour $h$ petit, $f(a + h) \\approx f(a) + f’(a)h$.\n' +
              '• **Application chiffrée** : estimons $\\sqrt{102}$ sans calculatrice avec $f(x) = \\sqrt{x}$ en $a = 100$ ($f’(x) = \\frac{1}{2\\sqrt{x}}$, donc $f’(100) = \\frac{1}{20} = 0{,}05$) : $\\sqrt{102} \\approx 10 + 0{,}05 \\times 2 = 10{,}10$ (valeur exacte : $10{,}0995\\dots$, erreur $< 5\\cdot 10^{-4}$ !).',
            formula: {
              name: 'Approximation affine au premier ordre',
              formula: 'f(a + h) = f(a) + f’(a)h + o(h) \\qquad (h \\to 0)',
              note: 'La notation o(h) désigne une quantité négligeable devant h, c’est-à-dire o(h)/h → 0.',
            },
            keyRule:
              'Si $f(a + h) = A + Bh + o(h)$ quand $h \\to 0$, alors $f$ est automatiquement dérivable en $a$ avec $f(a) = A$ et $f’(a) = B$ !',
            konanTip:
              'Le $\\text{DL}_1$ est une machine à calculer des limites $\\frac{0}{0}$ : $\\lim_{x\\to a} \\frac{f(x) - f(a)}{x - a} = f’(a)$ permet d’évaluer instantanément $\\lim_{x\\to 0} \\frac{\\sin x}{x} = \\cos(0) = 1$ ou $\\lim_{x\\to 1} \\frac{\\ln x}{x - 1} = \\frac{1}{1} = 1$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle est l’équation de la tangente à la courbe de $f(x) = \\ln(x) + 2x$ au point d’abscisse $a = 1$ ?',
              options: [
                '$y = 3x - 1$',
                '$y = 2x + 1$',
                '$y = 3x + 2$',
                '$y = x + 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $f(1) = \\ln(1) + 2(1) = 2$ et $f’(x) = \\frac{1}{x} + 2$, donc $f’(1) = 1 + 2 = 3$. La tangente a pour équation $y = f(1) + f’(1)(x - 1) = 2 + 3(x - 1) = 3x - 1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Hiérarchie',
            stepTheme: 'orange',
            stepTitle: 'Dérivabilité implique continuité (mais jamais l’inverse)',
            paragraphText:
              'Du développement limité d’ordre 1 $f(x) = f(a) + f’(a)(x - a) + o(x - a)$, on déduit en une ligne que $\\lim_{x \\to a} f(x) = f(a)$ : toute fonction dérivable en $a$ est donc nécessairement continue en $a$.\n' +
              '• **Contraposée très utile** : si $f$ n’est **pas continue** en $a$, alors $f$ n’est **pas dérivable** en $a$ (inutile de calculer le taux d’accroissement !).\n' +
              '• **Réciproque fausse** : une fonction peut être continue en $a$ sans y être dérivable — deux grands cas géométriques : (1) un **point anguleux** ($|x|$ en $0$, $f’_g \\neq f’_d$), (2) une **tangente verticale** ($\\sqrt{x}$ en $0^+$ ou $x^{1/3}$ en $0$, taux d’accroissement $\\to +\\infty$).\n' +
              '• **Hiérarchie de régularité** : $\\mathcal{C}^\\infty \\subset \\cdots \\subset \\mathcal{C}^2 \\subset \\mathcal{C}^1 \\subset \\text{Dérivable} \\subset \\mathcal{C}^0$.',
            formula: {
              name: 'Implication fondamentale et sa contraposée',
              formula: '(f \\text{ dérivable en } a \\implies f \\text{ continue en } a) \\iff (f \\text{ discontinue en } a \\implies f \\text{ non dérivable en } a)',
              note: 'Ne jamais confondre avec la réciproque fausse « continue ⇒ dérivable ».',
            },
            keyRule:
              'Avant d’étudier la dérivabilité d’une fonction par morceaux en un point de raccord $a$, vérifie d’abord la **continuité** en $a$ : si elle est discontinue, elle est immédiatement non dérivable !',
            konanTip:
              'Les fonctions continues partout mais dérivables nulle part existent aussi (fonction de Weierstrass, trajectoires du mouvement brownien en finance quantitative) !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q3',
              type: 'mcq',
              prompt:
                'Laquelle de ces affirmations sur la continuité et la dérivabilité en un point $a$ est **exacte** ?',
              options: [
                'Si $f$ est continue en $a$, alors $f$ est dérivable en $a$',
                'Si $f$ n’est pas dérivable en $a$, alors $f$ n’est pas continue en $a$',
                'Si $f$ n’est pas continue en $a$, alors $f$ n’est pas dérivable en $a$',
                'Une fonction ne peut être dérivable en $a$ que si sa dérivée $f’$ est continue en $a$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'C’est la contraposée du théorème « dérivable $\\implies$ continue ». Les options A et B sont réfutées par $x \\mapsto |x|$ en $0$, et l’option D est réfutée par $x^2 \\sin(1/x)$ en $0$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Règles de calcul',
            stepTheme: 'green',
            stepTitle: 'Règles de dérivation et dérivée des fonctions composées (règle de la chaîne)',
            paragraphText:
              'Calculer une dérivée complexe sans erreur repose sur l’identification claire de la structure globale de l’expression : somme, produit, quotient ou composition.\n' +
              '• **Opérations** : $(\\alpha f + \\beta g)’ = \\alpha f’ + \\beta g’$, $(fg)’ = f’g + fg’$, $\\left(\\frac{1}{g}\\right)’ = -\\frac{g’}{g^2}$, et $\\left(\\frac{f}{g}\\right)’ = \\frac{f’g - fg’}{g^2}$.\n' +
              '• **Règle de la chaîne** : $(g \\circ f)’(x) = g’(f(x)) \\cdot f’(x)$. En pratique, on dérive la fonction **extérieure** en gardant l’intérieur intact, puis on multiplie par la dérivée de l’**intérieur**.\n' +
              '• **Formules composées indispensables** : $(u^n)’ = n u’ u^{n-1}$, $(\\sqrt{u})’ = \\frac{u’}{2\\sqrt{u}}$, $(e^u)’ = u’ e^u$, $(\\ln u)’ = \\frac{u’}{u}$ (pour $u > 0$).',
            formula: {
              name: 'Règle de la chaîne et dérivées composées usuelles',
              formula: '(g \\circ f)’ = (g’ \\circ f) \\cdot f’, \\qquad (\\ln u)’ = \\frac{u’}{u}, \\qquad (e^u)’ = u’ e^u, \\qquad (\\sqrt{u})’ = \\frac{u’}{2\\sqrt{u}}',
              note: 'Ne jamais oublier le facteur u’(x) (erreur la plus fréquente en copie) !',
            },
            keyRule:
              'Pour dériver un produit ou un quotient dont un facteur est lui-même composé, identifie d’abord l’opération la plus **extérieure** et applique les règles couche par couche comme des poupées russes.',
            konanTip:
              'Pour dériver $\\frac{1}{u(x)}$ ou $\\frac{c}{u(x)}$ (numérateur constant), utilise $\\left(\\frac{c}{u}\\right)’ = -\\frac{c u’}{u^2}$ plutôt que la formule lourde du quotient : gain de temps et zéro erreur de signe !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q4',
              type: 'mcq',
              prompt:
                'Quelle est la dérivée sur $\\mathbb{R}$ de la fonction $f(x) = \\ln(x^2 + 1) \\cdot e^{3x}$ ?',
              options: [
                '$\\frac{2x}{x^2+1} \\cdot 3e^{3x}$',
                '$\\left(\\frac{2x}{x^2+1} + 3\\ln(x^2+1)\\right) e^{3x}$',
                '$\\left(\\frac{1}{x^2+1} + 3\\ln(x^2+1)\\right) e^{3x}$',
                '$\\left(\\frac{2x}{x^2+1} + \\ln(x^2+1)\\right) e^{3x}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On applique la dérivée d’un produit $(uv)’ = u’v + uv’$ avec $u(x) = \\ln(x^2 + 1)$ ($u’(x) = \\frac{2x}{x^2+1}$) et $v(x) = e^{3x}$ ($v’(x) = 3e^{3x}$). En factorisant $e^{3x}$, on obtient $f’(x) = \\left(\\frac{2x}{x^2+1} + 3\\ln(x^2+1)\\right) e^{3x}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Bijection réciproque',
            stepTheme: 'violet',
            stepTitle: 'Dérivation de la bijection réciproque $(f^{-1})’ = \\frac{1}{f’ \\circ f^{-1}}$',
            paragraphText:
              'Comment calculer la dérivée de $\\exp$, de $\\sqrt[n]{x}$, d’$\\arcsin$ ou d’$\\arctan$ sans repartir de zéro ? Grâce au théorème de dérivation de la bijection réciproque !\n' +
              '• **Théorème** : si $f : I \\to J = f(I)$ est injective, dérivable sur $I$ et telle que $f’(x) \\neq 0$ pour tout $x \\in I$, alors $f^{-1}$ est dérivable sur $J$ et pour tout $y \\in J$, $(f^{-1})’(y) = \\frac{1}{f’(f^{-1}(y))}$.\n' +
              '• **Astuce mnémotechnique** : il suffit de dériver l’identité $f(f^{-1}(y)) = y$ par la règle de la chaîne : $f’(f^{-1}(y)) \\cdot (f^{-1})’(y) = 1$, d’où la formule immédiate !\n' +
              '• **Exemple** : pour $f(x) = x^3$ sur $]0, +\\infty[$, $f’(x) = 3x^2 > 0$ et $f^{-1}(y) = y^{1/3}$, donc $(y^{1/3})’ = \\frac{1}{3(y^{1/3})^2} = \\frac{1}{3} y^{-2/3}$. En $y = 0$, $f’(0) = 0$, donc $y \\mapsto y^{1/3}$ n’est **pas dérivable** en $0$ (tangente verticale).',
            formula: {
              name: 'Formule de la dérivée réciproque',
              formula: '(f^{-1})’(y) = \\frac{1}{f’(f^{-1}(y))} \\qquad \\big(f’(f^{-1}(y)) \\neq 0\\big)',
              note: 'Géométriquement, la symétrie par rapport à y = x transforme une pente m en sa pente inverse 1/m.',
            },
            keyRule:
              'Si $f$ est bijective et dérivable mais que $f’(x_0) = 0$, alors la courbe de $f^{-1}$ possède une **tangente verticale** au point $y_0 = f(x_0)$ : $f^{-1}$ n’est pas dérivable en $y_0$ !',
            konanTip:
              'Ne retiens pas la formule par cœur de façon mécanique : écris $f(f^{-1}(y)) = y$, dérive les deux membres par rapport à $y$, et divise par $f’(f^{-1}(y))$. Zéro oubli possible !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q5',
              type: 'mcq',
              prompt:
                'Soit $f(x) = x^3 + x + 1$ (bijection strictement croissante de $\\mathbb{R}$ sur $\\mathbb{R}$). Sachant que $f(1) = 3$, que vaut $(f^{-1})’(3)$ ?',
              options: ['$\\frac{1}{4}$', '$4$', '$\\frac{1}{28}$', '$\\frac{1}{3}$'],
              correctAnswerIndex: 0,
              explanation:
                'Puisque $f(1) = 3$, on a $f^{-1}(3) = 1$. De plus $f’(x) = 3x^2 + 1$, donc $f’(1) = 3(1)^2 + 1 = 4 \\neq 0$. Ainsi $(f^{-1})’(3) = \\frac{1}{f’(f^{-1}(3))} = \\frac{1}{f’(1)} = \\frac{1}{4}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Prolongement C¹',
            stepTheme: 'violet',
            stepTitle: 'Théorème du prolongement dérivable (limite de la dérivée)',
            paragraphText:
              'Quand une fonction est définie par une formule pour $x \\neq a$ et une valeur particulière en $a$, calculer le taux d’accroissement peut parfois être lourd : le théorème du prolongement dérivable offre un raccourci puissant (lorsqu’il s’applique).\n' +
              '• **Énoncé** : si $f$ est **continue** sur $I$, dérivable sur $I \\setminus \\{a\\}$, et si $\\lim_{x \\to a} f’(x) = l \\in \\mathbb{R}$, alors $f$ est dérivable en $a$, $f’(a) = l$, et $f’$ est même **continue** en $a$ !\n' +
              '• **Cas limite infini** : si $\\lim_{x \\to a} f’(x) = \\pm\\infty$ (avec $f$ continue en $a$), alors $f$ n’est pas dérivable en $a$ et sa courbe présente une tangente verticale en $a$.\n' +
              '• **Exemple** : pour $f(x) = \\frac{x + 2 - \\sqrt{4 - x^2}}{x}$ ($x \\neq 0$) et $f(0) = 1$, $f$ est continue en $0$, et on peut montrer $\\lim_{x \\to 0} f’(x) = \\frac{1}{4}$ : donc $f$ est dérivable en $0$, $f’(0) = \\frac{1}{4}$ et $f’$ est continue en $0$.',
            formula: {
              name: 'Théorème de la limite de la dérivée',
              formula: '\\big(f \\in \\mathcal{C}^0(I),\\ f \\text{ dérivable sur } I\\setminus\\{a\\},\\ \\lim_{x\\to a} f’(x) = l \\in \\mathbb{R}\\big) \\implies f’(a) = l \\text{ et } f’ \\text{ continue en } a',
              note: 'Ce théorème se démontre directement grâce au Théorème des Accroissements Finis.',
            },
            keyRule:
              'Ne jamais oublier de vérifier que $f$ est **continue en $a$** avant d’appliquer le théorème du prolongement dérivable ! (Contre-exemple : la fonction saut $f(x) = 0$ pour $x < 0$ et $f(x) = 1$ pour $x \\geqslant 0$ vérifie $\\lim_{x\\to 0} f’(x) = 0$, mais n’est ni continue ni dérivable en $0$ !)',
            konanTip:
              'Si $f$ est continue en $a$ et $\\lim_{x\\to a^-} f’(x) \\neq \\lim_{x\\to a^+} f’(x)$, alors $f’_g(a)$ et $f’_d(a)$ existent et sont différents : c’est un point anguleux, $f$ n’est pas dérivable en $a$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q6',
              type: 'mcq',
              prompt:
                'Soit $f$ continue sur un intervalle ouvert $I$, dérivable sur $I \\setminus \\{a\\}$, et telle que $\\lim_{x \\to a} f’(x) = -5$. Que peut-on affirmer ?',
              options: [
                '$f$ n’est pas dérivable en $a$',
                '$f$ est seulement continue en $a$',
                '$f$ est dérivable en $a$, $f’(a) = -5$, et $f’$ est continue en $a$',
                'La courbe admet une tangente verticale en $a$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'C’est l’application directe du théorème du prolongement dérivable : la continuité de $f$ en $a$ jointe à l’existence de la limite finie $\\lim_{x\\to a} f’(x) = -5$ entraîne que $f$ est dérivable en $a$ avec $f’(a) = -5$, et donc que $f’$ est continue en $a$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'piege',
            stepBadge: 'Contre-exemple clé',
            stepTheme: 'orange',
            stepTitle: 'Dérivable sans être $\\mathcal{C}^1$ : le contre-exemple $x^2 \\sin(1/x)$',
            paragraphText:
              'Que se passe-t-il quand $\\lim_{x \\to a} f’(x)$ **n’existe pas** ? Beaucoup d’étudiants concluent à tort que $f$ n’est pas dérivable en $a$. C’est FAUX !\n' +
              '• **Le contre-exemple canonique** : $f(x) = x^2 \\sin(1/x)$ pour $x \\neq 0$ et $f(0) = 0$.\n' +
              '• **Dérivabilité en $0$** : le taux d’accroissement vaut $\\frac{f(x) - f(0)}{x} = x\\sin(1/x) \\xrightarrow[x\\to 0]{} 0$ par gendarmes. Donc $f$ **est dérivable** en $0$ avec $f’(0) = 0$ !\n' +
              '• **Discontinuité de $f’$** : pourtant, pour $x \\neq 0$, $f’(x) = 2x\\sin(1/x) - \\cos(1/x)$ oscille entre $-1$ et $+1$ quand $x \\to 0$ et n’a donc aucune limite en $0$. Ainsi $f$ est dérivable partout sur $\\mathbb{R}$, mais $f’$ n’est pas continue en $0$ ($f \\notin \\mathcal{C}^1(\\mathbb{R})$).',
            formula: {
              name: 'Dérivée et taux d’accroissement de x² sin(1/x)',
              formula: '\\frac{f(x) - f(0)}{x} = x\\sin\\left(\\frac{1}{x}\\right) \\xrightarrow[x\\to 0]{} 0, \\qquad f’(x) = 2x\\sin\\left(\\frac{1}{x}\\right) - \\cos\\left(\\frac{1}{x}\\right)',
              note: 'Si l’on remplace x² par x³ (x³ sin(1/x)), la dérivée tend vers 0 et f devient de classe C¹ !',
            },
            keyRule:
              'L’absence de limite de $f’(x)$ en $a$ ne prouve JAMAIS la non-dérivabilité en $a$ : dans ce cas, seul le calcul direct de $\\lim_{x\\to a} \\frac{f(x) - f(a)}{x - a}$ permet de trancher !',
            konanTip:
              'Retiens la famille $x^\\alpha \\sin(1/x)$ en $0$ : pour $\\alpha = 1$, continue mais non dérivable ; pour $\\alpha = 2$, dérivable mais non $\\mathcal{C}^1$ ; pour $\\alpha = 3$, de classe $\\mathcal{C}^1$ mais non $\\mathcal{C}^2$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p1_q7',
              type: 'mcq',
              prompt:
                'Pour la fonction $f(x) = x^2 \\sin(1/x)$ ($x \\neq 0$) et $f(0) = 0$, laquelle de ces affirmations est **vraie** ?',
              options: [
                '$f$ n’est pas dérivable en $0$ car $\\lim_{x\\to 0} f’(x)$ n’existe pas',
                '$f$ est dérivable en $0$ avec $f’(0) = 0$, et $f’$ est continue en $0$',
                '$f$ est dérivable en $0$ avec $f’(0) = 0$, mais $f’$ n’est pas continue en $0$',
                '$f$ n’est même pas continue en $0$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le taux d’accroissement $x\\sin(1/x)$ tend vers $0$ en $0$, donc $f$ est dérivable en $0$ avec $f’(0) = 0$. En revanche, $f’(x) = 2x\\sin(1/x) - \\cos(1/x)$ n’a pas de limite en $0$, donc $f’$ est discontinue en $0$.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch4_p2',
        order: 2,
        title: 'Théorèmes de Rolle, des Accroissements Finis et règle de l’Hôpital',
        summary:
          'Relier les variations globales d’une fonction à sa dérivée grâce aux théorèmes de Fermat, Rolle, TAF, IAF (fonctions lipschitziennes), caractériser la monotonie et maîtriser la règle de l’Hôpital.',
        conceptExplanation:
          'Les théorèmes globaux de dérivation font le pont entre le comportement **local** ($f’$) et le comportement **global** ($f(b) - f(a)$, monotonie, existence de zéros de $f’$).\n\n' +
          '• **Condition d’extremum (Fermat)** : si $a$ est un point intérieur de $I$ qui est un extremum local de $f$ et si $f$ est dérivable en $a$, alors $f’(a) = 0$ (réciproque fausse : $x^3$ en $0$).\n' +
          '• **Théorème de Rolle** : si $f$ est continue sur $[a, b]$, dérivable sur $]a, b[$ et $f(a) = f(b)$, alors $\\exists c \\in ]a, b[,\\ f’(c) = 0$.\n' +
          '• **Égalité des Accroissements Finis (TAF)** : si $f$ est continue sur $[a, b]$ et dérivable sur $]a, b[$, alors $\\exists c \\in ]a, b[,\\ f(b) - f(a) = f’(c)(b - a)$.\n' +
          '• **IAF et Lipschitz** : si $|f’(x)| \\leqslant K$ sur $]a, b[$, alors $|f(b) - f(a)| \\leqslant K|b - a|$ ($f$ est $K$-lipschitzienne).\n' +
          '• **Règle de l’Hôpital** : pour une forme indéterminée $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$ en $\\alpha$, si $\\lim_{x \\to \\alpha} \\frac{f’(x)}{g’(x)} = l \\in \\overline{\\mathbb{R}}$, alors $\\lim_{x \\to \\alpha} \\frac{f(x)}{g(x)} = l$.',
        formulas: [
          {
            name: 'Égalité des Accroissements Finis (TAF)',
            formula: '\\exists c \\in ]a, b[,\\quad f(b) - f(a) = f’(c)(b - a) \\iff \\frac{f(b) - f(a)}{b - a} = f’(c)',
            note: 'Il existe un point c où la tangente est parallèle à la corde joignant (a, f(a)) à (b, f(b)).',
          },
          {
            name: 'Inégalité des Accroissements Finis (IAF)',
            formula: '\\big(\\forall x \\in ]a, b[,\\ m \\leqslant f’(x) \\leqslant M\\big) \\implies m(b - a) \\leqslant f(b) - f(a) \\leqslant M(b - a)',
            note: 'En particulier, |f’| ≤ K sur I ⇒ ∀x, y ∈ I, |f(x) − f(y)| ≤ K|x − y| (K-lipschitzienne).',
          },
          {
            name: 'Règle de l’Hôpital',
            formula: '\\lim_{x \\to \\alpha} \\frac{f’(x)}{g’(x)} = l \\implies \\lim_{x \\to \\alpha} \\frac{f(x)}{g(x)} = l \\qquad \\left(\\text{FI } \\frac{0}{0} \\text{ ou } \\frac{\\infty}{\\infty}\\right)',
            note: 'Attention : ne jamais dériver le quotient (f/g)’ ! On dérive séparément numérateur et dénominateur.',
          },
        ],
        keyRule:
          'Dans la règle de l’Hôpital, on calcule le quotient des dérivées $\\frac{f’(x)}{g’(x)}$, et JAMAIS la dérivée du quotient $\\left(\\frac{f}{g}\\right)’$ ! De plus, on ne l’applique QUE sur une vraie forme indéterminée $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$.',
        workedExample: {
          title: 'Encadrement de $\\ln(1 + x)$ par l’IAF et calcul de limite par l’Hôpital',
          statement:
            '1) Montrer par le TAF/IAF que pour tout $x > 0$, $\\frac{x}{1 + x} < \\ln(1 + x) < x$. 2) Calculer $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$ par la règle de l’Hôpital.',
          methodSteps: [
            '1) Soit $f(t) = \\ln(1 + t)$, continue sur $[0, x]$ et dérivable sur $]0, x[$ avec $f’(t) = \\frac{1}{1 + t}$.',
            'Pour tout $t \\in ]0, x[$, on a $1 < 1 + t < 1 + x$, donc $\\frac{1}{1 + x} < f’(t) < 1$. Par le TAF, il existe $c \\in ]0, x[$ tel que $\\ln(1 + x) - \\ln(1) = f’(c)(x - 0) = \\frac{x}{1 + c}$, d’où $\\frac{x}{1 + x} < \\ln(1 + x) < x$.',
            '2) En $x = 0$, $f(x) = e^x - 1 - x \\to 0$ et $g(x) = x^2 \\to 0$ (forme indéterminée $\\frac{0}{0}$). On dérive : $\\frac{f’(x)}{g’(x)} = \\frac{e^x - 1}{2x}$, encore de la forme $\\frac{0}{0}$ !',
            'On applique une seconde fois la règle de l’Hôpital : $\\frac{f’’(x)}{g’’(x)} = \\frac{e^x}{2} \\xrightarrow[x\\to 0]{} \\frac{1}{2}$. Par remontée, $\\lim_{x\\to 0} \\frac{e^x - 1}{2x} = \\frac{1}{2}$, donc $\\lim_{x\\to 0} \\frac{e^x - 1 - x}{x^2} = \\frac{1}{2}$.',
          ],
          conclusion:
            '$\\forall x > 0,\\ \\frac{x}{1+x} < \\ln(1+x) < x$, et $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\frac{1}{2}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Extremum local',
            stepTheme: 'violet',
            stepTitle: 'Condition nécessaire d’extremum local (théorème de Fermat)',
            paragraphText:
              'En optimisation économique (maximiser un profit $\\pi(q)$, minimiser un coût moyen), le premier réflexe consiste à résoudre $f’(x) = 0$ : c’est le théorème de Fermat, qui fournit les points critiques candidats.\n' +
              '• **Énoncé** : si $a$ est un point **intérieur** à $I$, si $f$ admet un extremum local (maximum ou minimum) en $a$, et si $f$ est **dérivable** en $a$, alors $f’(a) = 0$ (tangente horizontale).\n' +
              '• **Piège 1 (Réciproque fausse)** : $f’(a) = 0$ ne suffit PAS pour avoir un extremum ! Pour $f(x) = x^3$, $f’(0) = 0$, mais $x^3$ est strictement croissante (point d’inflexion, pas d’extremum).\n' +
              '• **Piège 2 (Extrémités et points non dérivables)** : un extremum peut aussi se trouver aux **bornes** de $[a, b]$ (ex : $f(x) = x$ sur $[0, 1]$ atteint son min en $0$ et son max en $1$ avec $f’ = 1 \\neq 0$) ou en un point non dérivable (ex : $|x|$ en $0$).',
            formula: {
              name: 'Condition nécessaire du premier ordre',
              formula: '(a \\in \\mathring{I},\\ a \\text{ extremum local de } f \\text{ et } f \\text{ dérivable en } a) \\implies f’(a) = 0',
              note: 'Un extremum a lieu quand f’ s’annule en CHANGEANT DE SIGNE.',
            },
            keyRule:
              'Pour trouver le maximum/minimum global de $f$ sur $[a, b]$, compare la valeur de $f$ en trois types de points : les **points critiques** ($f’(x) = 0$), les **bornes** $a$ et $b$, et les éventuels **points non dérivables** !',
            konanTip:
              'En microéconomie, maximiser le profit $\\pi(q) = R(q) - C(q)$ à l’intérieur du domaine impose $\\pi’(q) = 0 \\iff R’(q) = C’(q)$ : à l’optimum, la recette marginale égale le coût marginal !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p2_q1',
              type: 'mcq',
              prompt:
                'Pour la fonction $f(x) = x^3$ sur $[-1, 2]$, que peut-on dire du point $x = 0$ où $f’(0) = 0$ ?',
              options: [
                '$0$ est un minimum local de $f$',
                '$0$ est un maximum local de $f$',
                '$0$ n’est ni un minimum ni un maximum local, car $f’(x) = 3x^2 \\geqslant 0$ ne change pas de signe',
                'Cela contredit le théorème de Fermat',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le théorème de Fermat est une condition nécessaire, pas suffisante : $f’(0) = 0$, mais pour $x < 0$, $f(x) < 0 = f(0)$ et pour $x > 0$, $f(x) > 0 = f(0)$. Donc $0$ n’est pas un extremum local (les extrema sur $[-1, 2]$ sont atteints aux bornes $-1$ et $2$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Théorème de Rolle',
            stepTheme: 'violet',
            stepTitle: 'Théorème de Rolle : hypothèses exactes et applications',
            paragraphText:
              'Si un avion décolle et atterrit à la même altitude en suivant une trajectoire lisse, il existe au moins un instant entre le décollage et l’atterrissage où sa vitesse verticale est nulle (vol horizontal) : c’est le théorème de Rolle.\n' +
              '• **Les 3 hypothèses** : (1) $f$ **continue** sur $[a, b]$ ; (2) $f$ **dérivable** sur $]a, b[$ ; (3) $f(a) = f(b)$.\n' +
              '• **Conclusion** : il existe au moins un $c \\in ]a, b[$ (strictement intérieur !) tel que $f’(c) = 0$.\n' +
              '• **Application puissante aux polynômes** : entre deux racines distinctes d’une fonction dérivable $f$, la dérivée $f’$ s’annule au moins une fois. Par récurrence, si un polynôme $P$ a $k$ racines distinctes dans $\\mathbb{R}$, alors $P’$ en a au moins $k - 1$.',
            formula: {
              name: 'Théorème de Rolle',
              formula: '\\begin{cases} f \\in \\mathcal{C}^0([a, b]) \\\\ f \\text{ dérivable sur } ]a, b[ \\\\ f(a) = f(b) \\end{cases} \\implies \\exists c \\in ]a, b[,\\quad f’(c) = 0',
              note: 'La dérivabilité aux bornes a et b n’est PAS requise (exemple : f(x) = √(1 − x²) sur [−1, 1] a bien f’(0) = 0).',
            },
            keyRule:
              'Vérifie toujours les **trois hypothèses** de Rolle ! Pour $f(x) = |x|$ sur $[-1, 1]$, on a $f(-1) = f(1) = 1$ et $f$ continue, mais $f$ n’est pas dérivable en $0 \\in ]-1, 1[$, et en effet $f’$ ne s’annule nulle part !',
            konanTip:
              'Astuce d’examen : si l’on te demande de montrer qu’une équation du type $g(x) = 0$ possède au moins une solution dans $]a, b[$ et que $g$ est visiblement la dérivée d’une fonction $f$ vérifiant $f(a) = f(b)$, dégaine le théorème de Rolle !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p2_q2',
              type: 'mcq',
              prompt:
                'Soit $f$ continue sur $[a, b]$, dérivable sur $]a, b[$, telle que $f(a) = f(b)$. Que garantit exactement le théorème de Rolle ?',
              options: [
                'Il existe $c \\in ]a, b[$ tel que $f(c) = 0$',
                'Il existe $c \\in ]a, b[$ tel que $f’(c) = 0$',
                '$f$ est nécessairement constante sur $[a, b]$',
                'Il existe un unique $c \\in ]a, b[$ tel que $f’(c) = 0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le théorème de Rolle garantit l’existence d’au moins un $c \\in ]a, b[$ où la dérivée s’annule ($f’(c) = 0$), pas que $f$ s’annule ni que $c$ soit unique (ex : $\\sin x$ sur $[0, 2\\pi]$ a deux points où $\\cos c = 0$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'TAF',
            stepTheme: 'violet',
            stepTitle: 'Théorème des Accroissements Finis (TAF) : la vitesse moyenne atteinte',
            paragraphText:
              'Un véhicule parcourt $240\\ \\text{km}$ entre Abidjan et Yamoussoukro en $2\\ \\text{h}$ (vitesse moyenne $120\\ \\text{km/h}$) : le Théorème des Accroissements Finis (TAF) assure qu’à au moins un instant du trajet, son compteur a affiché exactement $120\\ \\text{km/h}$ !\n' +
              '• **Énoncé** : si $f$ est continue sur $[a, b]$ et dérivable sur $]a, b[$, alors il existe $c \\in ]a, b[$ tel que $f(b) - f(a) = f’(c)(b - a)$.\n' +
              '• **Preuve par Rolle** : on applique Rolle à la fonction auxiliaire $g(x) = f(x) - f(a) - \\frac{f(b) - f(a)}{b - a}(x - a)$, qui vérifie $g(a) = g(b) = 0$ ; alors $g’(c) = 0 \\iff f’(c) = \\frac{f(b) - f(a)}{b - a}$.\n' +
              '• **Exemple** : pour $f(x) = x^2$ sur $[1, 4]$, $\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = 5$, et $f’(c) = 2c = 5 \\iff c = 2{,}5 \\in ]1, 4[$.',
            formula: {
              name: 'Égalité des Accroissements Finis',
              formula: '\\exists c \\in ]a, b[,\\quad \\frac{f(b) - f(a)}{b - a} = f’(c)',
              note: 'Le théorème de Rolle est le cas particulier du TAF où f(a) = f(b).',
            },
            keyRule:
              'Le TAF exige seulement la continuité sur $[a, b]$ et la dérivabilité sur $]a, b[$ — jamais l’égalité $f(a) = f(b)$ !',
            konanTip:
              'Pour démontrer une inégalité impliquant une différence $f(b) - f(a)$ (ex : $\\sin b - \\sin a$ ou $\\arctan b - \\arctan a$), le TAF est presque toujours la clé en trois lignes !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p2_q3',
              type: 'mcq',
              prompt:
                'On applique le Théorème des Accroissements Finis à $f(x) = x^3$ sur l’intervalle $[0, 3]$. Quelle est la valeur exacte du point $c \\in ]0, 3[$ tel que $f(3) - f(0) = f’(c)(3 - 0)$ ?',
              options: ['$c = 1{,}5$', '$c = \\sqrt{3}$', '$c = 3$', '$c = \\sqrt{2}$'],
              correctAnswerIndex: 1,
              explanation:
                'On a $\\frac{f(3) - f(0)}{3 - 0} = \\frac{27 - 0}{3} = 9$, et $f’(c) = 3c^2$. On résout $3c^2 = 9 \\iff c^2 = 3$. Comme $c \\in ]0, 3[$, on obtient $c = \\sqrt{3} \\approx 1{,}732$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'IAF & Lipschitz',
            stepTheme: 'violet',
            stepTitle: 'Inégalité des Accroissements Finis (IAF) et fonctions $K$-lipschitziennes',
            paragraphText:
              'En pratique, on ne connaît presque jamais la position exacte du point $c$ donné par le TAF, mais il suffit d’encadrer $f’(c)$ pour obtenir un encadrement global de $f(b) - f(a)$ : c’est l’Inégalité des Accroissements Finis.\n' +
              '• **IAF** : si $f$ est continue sur $[a, b]$, dérivable sur $]a, b[$, et si $m \\leqslant f’(x) \\leqslant M$ sur $]a, b[$, alors $m(b - a) \\leqslant f(b) - f(a) \\leqslant M(b - a)$.\n' +
              '• **Fonction $K$-lipschitzienne** : si $|f’(x)| \\leqslant K$ sur l’intérieur d’un intervalle $I$, alors pour tous $x, y \\in I$, $|f(x) - f(y)| \\leqslant K|x - y|$.\n' +
              '• **Exemples fondamentaux** : comme $|\\sin’(x)| = |\\cos x| \\leqslant 1$, la fonction $\\sin$ est $1$-lipschitzienne : $\\forall x, y \\in \\mathbb{R},\\ |\\sin x - \\sin y| \\leqslant |x - y|$ (en particulier $|\\sin x| \\leqslant |x|$). De même $|\\arctan x - \\arctan y| \\leqslant |x - y|$ car $\\frac{1}{1+t^2} \\leqslant 1$.',
            formula: {
              name: 'Critère dérivée bornée ⇒ lipschitzienne',
              formula: '\\big(\\forall x \\in \\mathring{I},\\ |f’(x)| \\leqslant K\\big) \\implies \\forall (x, y) \\in I^2,\\ |f(x) - f(y)| \\leqslant K|x - y|',
              note: 'Si K < 1 (fonction contractante), la suite uₙ₊₁ = f(uₙ) converge géométriquement vers un unique point fixe !',
            },
            keyRule:
              'Pour montrer qu’une fonction dérivable est $K$-lipschitzienne sur un intervalle $I$, il suffit de majorer $|f’(x)|$ par $K$ sur $I$ et d’invoquer l’Inégalité des Accroissements Finis !',
            konanTip:
              'Attention au domaine : $f(x) = \\frac{1}{x}$ n’est PAS lipschitzienne sur $]0, +\\infty[$ car $|f’(x)| = \\frac{1}{x^2} \\to +\\infty$ en $0^+$, mais elle est $1$-lipschitzienne sur $[1, +\\infty[$ car $\\frac{1}{x^2} \\leqslant 1$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p2_q4',
              type: 'mcq',
              prompt:
                'Pour la fonction $f(x) = \\sqrt{6 + x}$ sur l’intervalle $[0, +\\infty[$, quelle est la meilleure constante de Lipschitz $K$ obtenue en majorant $|f’(x)|$ ?',
              options: [
                '$K = 1$',
                '$K = \\frac{1}{2\\sqrt{6}}$',
                '$K = \\frac{1}{6}$',
                '$f$ n’est pas lipschitzienne sur $[0, +\\infty[$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour tout $x \\geqslant 0$, $f’(x) = \\frac{1}{2\\sqrt{6 + x}}$. Comme $6 + x \\geqslant 6$, on a $0 < f’(x) \\leqslant \\frac{1}{2\\sqrt{6}}$ (atteint en $x = 0$). Par l’IAF, $f$ est $\\frac{1}{2\\sqrt{6}}$-lipschitzienne (donc contractante, car $\\frac{1}{2\\sqrt{6}} \\approx 0{,}204 < 1$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Variations',
            stepTheme: 'green',
            stepTitle: 'Caractérisation de la monotonie par le signe de $f’$ sur un intervalle',
            paragraphText:
              'Conséquence directe du TAF : le signe de la dérivée $f’$ sur un **intervalle** $I$ détermine intégralement le sens de variation de $f$.\n' +
              '• **Équivalences sur un intervalle $I$** : $f$ croissante $\\iff f’ \\geqslant 0$ ; $f$ décroissante $\\iff f’ \\leqslant 0$ ; $f$ constante $\\iff f’ = 0$ partout sur $I$.\n' +
              '• **Monotonie stricte** : si $f’ > 0$ sur $I$ (ou $f’ \\geqslant 0$ et ne s’annule qu’en des points isolés, comme $x^3$ en $0$), alors $f$ est **strictement croissante** sur $I$.\n' +
              '• **Piège du domaine non connexe** : la fonction $f(x) = -\\frac{1}{x}$ vérifie $f’(x) = \\frac{1}{x^2} > 0$ sur $\\mathbb{R}^*$, mais elle n’est PAS croissante sur $\\mathbb{R}^*$ ($f(-1) = 1 > -1 = f(1)$) car $\\mathbb{R}^*$ n’est pas un intervalle ! Elle est croissante séparément sur $]-\\infty, 0[$ et sur $]0, +\\infty[$.',
            formula: {
              name: 'Caractérisation des variations sur un intervalle I',
              formula: 'f \\text{ croissante sur } I \\iff \\forall x \\in I,\\ f’(x) \\geqslant 0 ; \\qquad f \\text{ constante sur } I \\iff \\forall x \\in I,\\ f’(x) = 0',
              note: 'Impératif : I doit être un INTERVALLE (une seule pièce, sans valeur interdite à l’intérieur).',
            },
            keyRule:
              'Ne jamais écrire qu’une fonction est croissante sur $\\mathbb{R} \\setminus \\{a\\}$ : toujours dire « croissante sur $]-\\infty, a[$ et croissante sur $]a, +\\infty[$ » !',
            konanTip:
              'Pour étudier le signe de $f’(x)$, factorise toujours $f’(x)$ complètement avant de dresser le tableau de signes.',
            visualSchema: {
              type: 'sign_table',
              title: 'Tableau de signe de f’(x) = 3x² − 3 = 3(x − 1)(x + 1)',
              caption: 'f(x) = x³ − 3x est croissante sur ]−∞, −1], décroissante sur [−1, 1] (max local en −1, min local en 1), puis croissante sur [1, +∞[.',
              signs: {
                xLabel: 'x',
                xValues: ['−∞', '−1', '1', '+∞'],
                rows: [
                  { label: 'x + 1', cells: ['', '−', '0', '+', '', '+', ''] },
                  { label: 'x − 1', cells: ['', '−', '', '−', '0', '+', ''] },
                  { label: 'f’(x) = 3(x²−1)', cells: ['', '+', '0', '−', '0', '+', ''] },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p2_q5',
              type: 'mcq',
              prompt:
                'Soit $f(x) = x^3 - 3x + 2$ sur $\\mathbb{R}$. Sur quel intervalle $f$ est-elle **strictement décroissante** ?',
              options: [
                '$]-\\infty, -1]$',
                '$[-1, 1]$',
                '$[1, +\\infty[$',
                '$[0, 3]$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$f’(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$ est strictement négative sur $]-1, 1[$ et s’annule en $-1$ et $1$. Par continuité, $f$ est strictement décroissante sur $[-1, 1]$ (avec maximum local $f(-1) = 4$ et minimum local $f(1) = 0$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Règle de l’Hôpital',
            stepTheme: 'green',
            stepTitle: 'Règle de l’Hôpital : conditions d’application et pièges à éviter',
            paragraphText:
              'La règle de l’Hôpital est un outil redoutable pour lever rapidement les formes indéterminées $\\frac{0}{0}$ et $\\frac{\\infty}{\\infty}$ en remplaçant le quotient $\\frac{f(x)}{g(x)}$ par le quotient des dérivées $\\frac{f’(x)}{g’(x)}$.\n' +
              '• **Hypothèses** : $f$ et $g$ dérivables au voisinage épointé de $\\alpha \\in \\overline{\\mathbb{R}}$, $g’(x) \\neq 0$ près de $\\alpha$, et $\\frac{f(x)}{g(x)}$ est une FI $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$. Si $\\lim_{x\\to\\alpha} \\frac{f’(x)}{g’(x)} = l \\in \\overline{\\mathbb{R}}$, alors $\\lim_{x\\to\\alpha} \\frac{f(x)}{g(x)} = l$.\n' +
              '• **Piège 1 (Pas une FI !)** : pour $\\lim_{x\\to 1} \\frac{x + 1}{x + 2}$, la limite vaut $\\frac{2}{3}$. Appliquer l’Hôpital à tort donnerait $\\frac{1}{1} = 1$, totalement FAUX !\n' +
              '• **Piège 2 (Absence de limite de $f’/g’$)** : si $\\frac{f’(x)}{g’(x)}$ n’a pas de limite, on ne peut rien conclure (ex : $\\frac{x + \\sin x}{x} \\to 1$ en $+\\infty$, alors que $\\frac{1 + \\cos x}{1}$ oscille sans limite !).',
            formula: {
              name: 'Itération de la règle de l’Hôpital',
              formula: '\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3} \\overset{\\text{H}}{=} \\lim_{x \\to 0} \\frac{1 - \\cos x}{3x^2} \\overset{\\text{H}}{=} \\lim_{x \\to 0} \\frac{\\sin x}{6x} = \\frac{1}{6}',
              note: 'À chaque étape, vérifie impérativement qu’on est encore devant une forme indéterminée 0/0 ou ∞/∞ !',
            },
            keyRule:
              'Vérifie TOUJOURS que la limite est bien de la forme $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$ avant chaque application de la règle de l’Hôpital !',
            konanTip:
              'Ne l’utilise pas en boucle sur $\\lim_{x\\to 0} \\frac{\\sin x}{x}$ si tu veux prouver $\\sin’(0) = 1$, car ce serait un raisonnement circulaire ! En revanche, pour $\\frac{e^x - 1 - x}{x^2}$ ou $\\frac{\\ln x}{x - 1}$, elle est parfaitement valide.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p2_q6',
              type: 'mcq',
              prompt:
                'En appliquant la règle de l’Hôpital, quelle est la valeur de $\\lim_{x \\to 0} \\frac{\\ln(1 + x) - x}{x^2}$ ?',
              options: ['$0$', '$-1$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
              correctAnswerIndex: 2,
              explanation:
                'C’est une FI $\\frac{0}{0}$ en $0$. On dérive numérateur et dénominateur : $\\frac{\\frac{1}{1+x} - 1}{2x} = \\frac{-x}{2x(1+x)} = \\frac{-1}{2(1+x)} \\xrightarrow[x\\to 0]{} -\\frac{1}{2}$. Par la règle de l’Hôpital, la limite vaut $-\\frac{1}{2}$.',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_analyse_ch4_p3',
        order: 3,
        title: 'Dérivées successives, formule de Leibniz et fonctions convexes',
        summary:
          'Calculer des dérivées d’ordre $n$ via la formule de Leibniz, maîtriser la définition géométrique et les caractérisations différentielles ($f’$ croissante, $f’’ \\geqslant 0$) de la convexité, et appliquer la convexité aux inégalités et à l’économie.',
        conceptExplanation:
          'Les dérivées d’ordre supérieur mesurent la régularité et la courbure d’une fonction : la dérivée seconde $f’’$ indique comment évolue la pente (accélération, courbure, rendements marginaux croissants ou décroissants).\n\n' +
          '• **Classes $\\mathcal{C}^n$** : $f$ est de classe $\\mathcal{C}^n(I)$ si elle est $n$ fois dérivable sur $I$ et si $f^{(n)}$ est continue sur $I$. $\\mathcal{C}^\\infty(I)$ désigne les fonctions indéfiniment dérivables.\n' +
          '• **Formule de Leibniz** : pour un produit $fg$ de fonctions $n$ fois dérivables, $(fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)} g^{(n-k)}$ (analogue exact du binôme de Newton).\n' +
          '• **Convexité / Concavité** : $f$ est **convexe** sur $I$ ssi $\\forall x, y \\in I,\\ \\forall \\lambda \\in [0, 1],\\ f(\\lambda x + (1-\\lambda)y) \\leqslant \\lambda f(x) + (1-\\lambda)f(y)$ (le graphe est **sous** toutes ses cordes). $f$ est **concave** ssi $-f$ est convexe.\n' +
          '• **Caractérisations différentielles** : pour $f$ dérivable, $f$ convexe $\\iff f’$ croissante ; pour $f$ deux fois dérivable, $f$ convexe $\\iff f’’ \\geqslant 0$ (et concave $\\iff f’’ \\leqslant 0$). Le graphe d’une fonction convexe dérivable est toujours **au-dessus** de toutes ses tangentes.',
        formulas: [
          {
            name: 'Formule de Leibniz pour la dérivée n-ième d’un produit',
            formula: '(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}',
            note: 'Par convention, f⁽⁰⁾ = f. Très efficace quand l’un des facteurs est un polynôme de petit degré !',
          },
          {
            name: 'Caractérisation de la convexité par f’’ et position des tangentes',
            formula: 'f \\text{ convexe} \\iff f’’ \\geqslant 0 \\implies \\forall x, x_0 \\in I,\\ f(x) \\geqslant f(x_0) + f’(x_0)(x - x_0)',
            note: 'Concave ⇔ f’’ ≤ 0 ⇒ le graphe est en dessous de toutes ses tangentes.',
          },
          {
            name: 'Inégalités classiques issues de la convexité',
            formula: '\\forall x \\in \\mathbb{R},\\ e^x \\geqslant 1 + x ; \\qquad \\forall x > -1,\\ \\ln(1 + x) \\leqslant x',
            note: 'exp est convexe (au-dessus de sa tangente en 0) ; ln(1+x) est concave (en dessous de sa tangente en 0).',
          },
        ],
        keyRule:
          'Retiens l’image géométrique infaillible d’une fonction **convexe** (comme un bol $\\cup$, ex : $x^2$, $e^x$) : elle est **SOUS** ses cordes et **AU-DESSUS** de ses tangentes, et $f’’ \\geqslant 0$ !',
        workedExample: {
          title: 'Dérivée $n$-ième de $x^2 e^{2x}$ par Leibniz et étude de convexité de $x \\ln x$',
          statement:
            '1) Calculer la dérivée $n$-ième de $h(x) = x^2 e^{2x}$ pour tout $n \\geqslant 2$. 2) Étudier la convexité de $\\varphi(x) = x \\ln x$ sur $]0, +\\infty[$.',
          methodSteps: [
            '1) Posons $f(x) = x^2$ et $g(x) = e^{2x}$. On a $f^{(0)}(x) = x^2$, $f^{(1)}(x) = 2x$, $f^{(2)}(x) = 2$, et $f^{(k)}(x) = 0$ pour tout $k \\geqslant 3$ !',
            'Pour tout $m \\in \\mathbb{N}$, $g^{(m)}(x) = 2^m e^{2x}$. La somme de Leibniz se tronque à seulement 3 termes ($k = 0, 1, 2$) :',
            '$h^{(n)}(x) = \\binom{n}{0} x^2 (2^n e^{2x}) + \\binom{n}{1} (2x) (2^{n-1} e^{2x}) + \\binom{n}{2} (2) (2^{n-2} e^{2x}) = 2^{n-2}\\big[4x^2 + 4nx + n(n-1)\\big]e^{2x}$.',
            '2) Pour $\\varphi(x) = x \\ln x$ sur $]0, +\\infty[$ : $\\varphi’(x) = \\ln x + 1$, puis $\\varphi’’(x) = \\frac{1}{x} > 0$ sur $]0, +\\infty[$. Donc $\\varphi$ est strictement **convexe** sur $]0, +\\infty[$.',
          ],
          conclusion:
            '$h^{(n)}(x) = 2^{n-2}[4x^2 + 4nx + n(n-1)]e^{2x}$, et $x \\mapsto x \\ln x$ est convexe sur $]0, +\\infty[$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Classes Cⁿ',
            stepTheme: 'blue',
            stepTitle: 'Dérivées successives et classes de régularité $\\mathcal{C}^n(I)$, $\\mathcal{C}^\\infty(I)$',
            paragraphText:
              'En dérivant la fonction dérivée $f’$, on obtient la dérivée seconde $f’’ = f^{(2)}$, puis par récurrence la dérivée $n$-ième $f^{(n)} = (f^{(n-1)})’$, avec la convention $f^{(0)} = f$.\n' +
              '• **Classe $\\mathcal{C}^n(I)$** : $f$ est de classe $\\mathcal{C}^n$ sur $I$ si $f$ est $n$ fois dérivable sur $I$ et si $f^{(n)}$ est **continue** sur $I$. Si $f$ est de classe $\\mathcal{C}^n$ pour tout $n \\in \\mathbb{N}$, on dit qu’elle est de classe $\\mathcal{C}^\\infty$ (lisse).\n' +
              '• **Dérivées $n$-ièmes usuelles à connaître** : $(e^{ax})^{(n)} = a^n e^{ax}$ ; $(\\ln x)^{(n)} = \\frac{(-1)^{n-1}(n-1)!}{x^n}$ (pour $n \\geqslant 1$) ; $\\left(\\frac{1}{x}\\right)^{(n)} = \\frac{(-1)^n n!}{x^{n+1}}$ ; $(\\sin x)^{(n)} = \\sin\\left(x + n\\frac{\\pi}{2}\\right)$.\n' +
              '• **Polynômes** : si $P$ est un polynôme de degré $d$, alors $P^{(d)}$ est constante et $P^{(n)} = 0$ pour tout $n > d$.',
            formula: {
              name: 'Dérivées n-ièmes de référence',
              formula: '(e^{ax})^{(n)} = a^n e^{ax}, \\qquad \\left(\\frac{1}{x}\\right)^{(n)} = \\frac{(-1)^n n!}{x^{n+1}}, \\qquad (\\ln x)^{(n)} = \\frac{(-1)^{n-1}(n-1)!}{x^n}\\ (n \\geqslant 1)',
              note: 'Toutes se vérifient immédiatement par récurrence sur n.',
            },
            keyRule:
              'Ne confonds pas « $n$ fois dérivable » et « de classe $\\mathcal{C}^n$ » : $\\mathcal{C}^n$ ajoute la **continuité** de la dérivée $n$-ième $f^{(n)}$ !',
            konanTip:
              'Pour conjecturer une dérivée $n$-ième en exercice, calcule les 3 premières dérivées ($f’, f’’, f’’’$) sans simplifier les factorielles (écris $2 \\times 3$, pas $6$) pour voir apparaître $n!$ et $(-1)^n$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle est la dérivée $4$-ième de la fonction $f(x) = \\ln(x)$ sur $]0, +\\infty[$ ?',
              options: [
                '$\\frac{6}{x^4}$',
                '$-\\frac{6}{x^4}$',
                '$-\\frac{24}{x^4}$',
                '$\\frac{24}{x^4}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On dérive pas à pas : $f’(x) = x^{-1}$, $f’’(x) = -x^{-2}$, $f^{(3)}(x) = 2x^{-3}$, $f^{(4)}(x) = -6x^{-4} = -\\frac{6}{x^4}$. La formule générale $\\frac{(-1)^{n-1}(n-1)!}{x^n}$ donne bien $\\frac{(-1)^3 3!}{x^4} = -\\frac{6}{x^4}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Leibniz',
            stepTheme: 'green',
            stepTitle: 'Calculer $(fg)^{(n)}$ avec la formule de Leibniz',
            paragraphText:
              'Pour dériver $n$ fois un produit de deux fonctions $f(x)g(x)$ (comme $(x^2 + 1)e^x$ ou $x \\ln x$), la formule de Leibniz évite de dériver $n$ fois à la main et ressemble exactement à la formule du binôme de Newton.\n' +
              '• **Formule** : $(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}$, où $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ et $f^{(0)} = f$.\n' +
              '• **Choix stratégique de $f$** : place TOUJOURS le **polynôme** dans le rôle de $f$ ! Si $f$ est de degré $2$, tous les termes pour $k \\geqslant 3$ sont nuls : la somme se réduit à seulement **3 termes** ($k = 0, 1, 2$), quel que soit $n$ !\n' +
              '• **Exemple rapide** : pour $(x e^x)^{(n)}$, avec $f(x) = x$ ($f^{(0)}=x, f^{(1)}=1, f^{(k)}=0$ pour $k\\geqslant 2$) et $g^{(m)}(x)=e^x$, on trouve $\\binom{n}{0}x e^x + \\binom{n}{1}(1)e^x = (x + n)e^x$ !',
            formula: {
              name: 'Formule de Leibniz tronquée pour un polynôme de degré 1',
              formula: '\\big((ax + b)g(x)\\big)^{(n)} = (ax + b)g^{(n)}(x) + n a g^{(n-1)}(x) \\qquad (n \\geqslant 1)',
              note: 'Rappel des premiers coefficients binomiaux : C(n,0) = 1, C(n,1) = n, C(n,2) = n(n−1)/2.',
            },
            keyRule:
              'Dans la formule de Leibniz, mets toujours le facteur qui s’annule après quelques dérivations (le polynôme !) en $f^{(k)}$ afin de tronquer la somme aux 2 ou 3 premiers indices $k$.',
            konanTip:
              'Vérifie toujours ta formule de Leibniz sur $n = 1$ (doit redonner $f’g + fg’$) et $n = 2$ (doit redonner $f’’g + 2f’g’ + fg’’$) pour détecter toute erreur de coefficient !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p3_q2',
              type: 'mcq',
              prompt:
                'À l’aide de la formule de Leibniz, que vaut la dérivée $n$-ième de $h(x) = x e^x$ pour tout $n \\in \\mathbb{N}$ ?',
              options: [
                '$n x e^x$',
                '$(x + n) e^x$',
                '$(x + 1)^n e^x$',
                '$(nx + 1) e^x$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Avec $f(x) = x$ et $g(x) = e^x$, on a $f^{(0)} = x$, $f^{(1)} = 1$, $f^{(k)} = 0$ pour $k \\geqslant 2$, et $g^{(m)}(x) = e^x$. Ainsi $(xe^x)^{(n)} = \\binom{n}{0} x e^x + \\binom{n}{1} \\cdot 1 \\cdot e^x = (x + n)e^x$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Convexité',
            stepTheme: 'blue',
            stepTitle: 'Définition géométrique de la convexité et de la concavité',
            paragraphText:
              'La convexité est la propriété géométrique fondamentale qui assure en optimisation qu’un minimum local est automatiquement un minimum **global**.\n' +
              '• **Définition** : $f : I \\to \\mathbb{R}$ est **convexe** sur l’intervalle $I$ lorsque $\\forall (x, y) \\in I^2,\\ \\forall \\lambda \\in [0, 1],\\ f(\\lambda x + (1 - \\lambda)y) \\leqslant \\lambda f(x) + (1 - \\lambda)f(y)$.\n' +
              '• **Lecture géométrique** : le point $(\\lambda x + (1-\\lambda)y,\\ \\lambda f(x) + (1-\\lambda)f(y))$ parcourt le segment (la **corde**) joignant $(x, f(x))$ à $(y, f(y))$. Dire que $f$ est convexe signifie que **la courbe reste en dessous de toutes ses cordes**.\n' +
              '• **Concavité** : $f$ est **concave** sur $I$ ssi $-f$ est convexe, c’est-à-dire $f(\\lambda x + (1-\\lambda)y) \\geqslant \\lambda f(x) + (1-\\lambda)f(y)$ (la courbe reste **au-dessus** de ses cordes, comme $\\ln(x)$ ou $\\sqrt{x}$).',
            formula: {
              name: 'Inégalité de convexité (et inégalité de Jensen)',
              formula: 'f\\big(\\lambda x + (1 - \\lambda)y\\big) \\leqslant \\lambda f(x) + (1 - \\lambda)f(y) \\qquad (\\lambda \\in [0, 1])',
              note: 'Pour λ = 1/2 : f((x + y)/2) ≤ (f(x) + f(y))/2 (l’image du milieu est sous la moyenne des images).',
            },
            keyRule:
              'Une fonction affine $f(x) = ax + b$ est à la fois convexe ET concave (car l’inégalité est une égalité). Par ailleurs, la fonction $x \\mapsto |x|$ est convexe sur $\\mathbb{R}$ bien qu’elle ne soit pas dérivable en $0$ !',
            konanTip:
              'Pour ne jamais inverser convexe et concave : une fonction **conVexe** a la forme d’un **V** (ou d’un bol $\\cup$ qui retient l’eau), tandis qu’une fonction **conCave** a la forme d’une **Cave** (une voûte $\\cap$ qui rejette l’eau) !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p3_q3',
              type: 'mcq',
              prompt:
                'Géométriquement, qu’est-ce qui caractérise une fonction **concave** $f$ sur un intervalle $I$ ?',
              options: [
                'Son graphe est situé en dessous de toutes ses cordes',
                'Son graphe est situé au-dessus de toutes ses cordes (et en dessous de ses tangentes si elle est dérivable)',
                'Elle est nécessairement décroissante sur $I$',
                'Elle est toujours négative sur $I$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour une fonction concave ($-f$ convexe), $f(\\lambda x + (1-\\lambda)y) \\geqslant \\lambda f(x) + (1-\\lambda)f(y)$ : le graphe passe au-dessus de chaque corde, et si $f$ est dérivable, en dessous de chacune de ses tangentes (comme $x \\mapsto \\ln x$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Critère f’’ ≥ 0',
            stepTheme: 'violet',
            stepTitle: 'Caractérisations différentielles de la convexité et points d’inflexion',
            paragraphText:
              'Lorsque la fonction est dérivable ou deux fois dérivable, on n’a pas besoin de tester l’inégalité des cordes : le sens de variation de $f’$ ou le signe de $f’’$ tranche immédiatement.\n' +
              '• **Critère d’ordre 1** : si $f$ est dérivable sur $I$, alors $f$ est convexe $\\iff f’$ est **croissante** sur $I$ (les pentes des tangentes augmentent quand $x$ croît).\n' +
              '• **Critère d’ordre 2** : si $f$ est deux fois dérivable sur $I$, alors $f$ est convexe $\\iff \\forall x \\in I,\\ f’’(x) \\geqslant 0$ ; et $f$ est concave $\\iff \\forall x \\in I,\\ f’’(x) \\leqslant 0$.\n' +
              '• **Point d’inflexion** : c’est un point $x_0$ où la courbe change de convexité ($f’’$ s’annule en **changeant de signe**, la tangente traverse la courbe — ex : $x = 0$ pour $x^3$).',
            formula: {
              name: 'Équivalences différentielles de convexité / concavité',
              formula: '(f \\text{ convexe} \\iff f’ \\text{ croissante} \\iff f’’ \\geqslant 0), \\qquad (f \\text{ concave} \\iff f’ \\text{ décroissante} \\iff f’’ \\leqslant 0)',
              note: 'Exemples : exp’’(x) = eˣ > 0 (convexe) ; ln’’(x) = −1/x² < 0 (concave).',
            },
            keyRule:
              'Ne confonds pas **croissance** ($f’ \\geqslant 0$) et **convexité** ($f’’ \\geqslant 0$) ! La fonction $\\ln(x)$ est strictement **croissante** ($1/x > 0$) mais **concave** ($-1/x^2 < 0$).',
            konanTip:
              'Une dérivée seconde nulle ($f’’(x_0) = 0$) ne suffit pas pour avoir un point d’inflexion : pour $f(x) = x^4$, $f’’(x) = 12x^2 \\geqslant 0$ s’annule en $0$ sans changer de signe ($x^4$ reste convexe partout !).',
            visualSchema: {
              type: 'function_plot',
              title: 'Convexité de f(x) = x² : sous sa corde, au-dessus de sa tangente',
              caption: 'La parabole y = x² (bleu, f’’=2 > 0) est entièrement au-dessus de sa tangente y = 2x − 1 en x = 1 (vert), et en dessous de la corde joignant (−1 ; 1) à (2 ; 4) (orange).',
              plot: {
                xMin: -2,
                xMax: 3,
                yMin: -2,
                yMax: 5,
                xStep: 1,
                yStep: 1,
                curves: [
                  {
                    label: 'f(x) = x²',
                    color: 'blue',
                    pieces: [{ expr: 'x^2', from: -2, to: 2.3 }],
                  },
                  {
                    label: 'Corde [-1, 2]',
                    color: 'orange',
                    pieces: [{ expr: 'x + 2', from: -1, to: 2, includeFrom: true, includeTo: true }],
                  },
                  {
                    label: 'Tangente en 1',
                    color: 'green',
                    pieces: [{ expr: '2*x - 1', from: -0.5, to: 2.8 }],
                  },
                ],
                points: [
                  { x: 1, y: 1, label: 'T(1 ; 1)', filled: true, color: 'green' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p3_q4',
              type: 'mcq',
              prompt:
                'Une fonction $f$ deux fois dérivable sur un intervalle $I$ est **concave** si et seulement si :',
              options: [
                '$f’(x) \\leqslant 0$ pour tout $x \\in I$',
                '$f’’(x) \\geqslant 0$ pour tout $x \\in I$',
                '$f’’(x) \\leqslant 0$ pour tout $x \\in I$',
                'Le graphe de $f$ est au-dessus de toutes ses tangentes',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une fonction deux fois dérivable est concave ssi $f’’(x) \\leqslant 0$ sur $I$ (sa dérivée $f’$ est décroissante et son graphe est situé en dessous de ses tangentes). L’option A définit la décroissance, et B et D caractérisent la convexité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Inégalités',
            stepTheme: 'green',
            stepTitle: 'Démontrer des inégalités célèbres grâce à la position des tangentes',
            paragraphText:
              'La propriété « courbe convexe au-dessus de ses tangentes, courbe concave en dessous de ses tangentes » permet de prouver en deux lignes des inégalités fondamentales utilisées partout en analyse et en probabilités.\n' +
              '• **Inégalité de l’exponentielle** : $f(x) = e^x$ est convexe sur $\\mathbb{R}$ ($f’’(x) = e^x > 0$). Sa tangente en $x_0 = 0$ est $y = 1 + x$. Donc $\\forall x \\in \\mathbb{R},\\ e^x \\geqslant 1 + x$ (avec égalité ssi $x = 0$).\n' +
              '• **Inégalité du logarithme** : $g(x) = \\ln(1 + x)$ est concave sur $]-1, +\\infty[$ ($g’’(x) = -\\frac{1}{(1+x)^2} < 0$). Sa tangente en $0$ est $y = x$. Donc $\\forall x > -1,\\ \\ln(1 + x) \\leqslant x$.\n' +
              '• **Inégalité trigonométrique** : $h(x) = \\sin x$ est concave sur $[0, \\frac{\\pi}{2}]$ ($h’’(x) = -\\sin x \\leqslant 0$), donc sa courbe est sous sa tangente en $0$ ($y = x$) et au-dessus de sa corde sur $[0, \\frac{\\pi}{2}]$ ($y = \\frac{2}{\\pi}x$) : $\\forall x \\in [0, \\frac{\\pi}{2}],\\ \\frac{2}{\\pi}x \\leqslant \\sin x \\leqslant x$ !',
            formula: {
              name: 'Encadrement de sin(x) par concavité sur [0, π/2]',
              formula: '\\forall x \\in \\left[0, \\frac{\\pi}{2}\\right],\\quad \\frac{2}{\\pi}x \\leqslant \\sin x \\leqslant x',
              note: 'Méthode reine : corde ≤ f(x) ≤ tangente pour une fonction concave !',
            },
            keyRule:
              'Pour une fonction **concave** sur $[a, b]$, on dispose gratuitement d’un double encadrement : $\\text{corde} \\leqslant f(x) \\leqslant \\text{tangente}$ ! Pour une fonction **convexe**, le sens s’inverse : $\\text{tangente} \\leqslant f(x) \\leqslant \\text{corde}$.',
            konanTip:
              'L’inégalité $\\forall x \\in \\mathbb{R},\\ e^x \\geqslant 1 + x$ est l’une des plus rentables de toute l’analyse : retiens-la comme réflexe immédiat !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p3_q5',
              type: 'mcq',
              prompt:
                'En utilisant la concavité de la fonction $\\ln$ sur $]0, +\\infty[$ et sa tangente au point $x_0 = 1$, quelle inégalité obtient-on pour tout $x > 0$ ?',
              options: [
                '$\\ln(x) \\geqslant x - 1$',
                '$\\ln(x) \\leqslant x - 1$',
                '$\\ln(x) \\leqslant x$',
                '$\\ln(x) \\geqslant 1 - \\frac{1}{x}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La tangente à $y = \\ln(x)$ en $x_0 = 1$ est $y = \\ln(1) + \\frac{1}{1}(x - 1) = x - 1$. Comme $\\ln’’(x) = -\\frac{1}{x^2} < 0$, $\\ln$ est concave, donc sa courbe est située en dessous de sa tangente : $\\forall x > 0,\\ \\ln(x) \\leqslant x - 1$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Économie',
            stepTheme: 'slate',
            stepTitle: 'Interprétation économique : utilité concave et fonction de coût convexe',
            paragraphText:
              'En microéconomie et en gestion de la transformation digitale, la convexité et la concavité traduisent deux lois économiques majeures.\n' +
              '• **Concavité = Rendements décroissants / Aversion au risque** : une fonction d’utilité $U(w) = \\ln(w)$ ou $U(w) = \\sqrt{w}$ est croissante ($U’ > 0$) mais **concave** ($U’’ < 0$) : chaque million de FCFA supplémentaire augmente la satisfaction, mais moins que le million précédent (utilité marginale décroissante). Par l’inégalité de Jensen, $U(\\frac{w_1 + w_2}{2}) \\geqslant \\frac{U(w_1) + U(w_2)}{2}$ : un agent averse au risque préfère un gain certain à une loterie de même espérance.\n' +
              '• **Convexité = Coût marginal croissant** : lorsque la fonction de coût total $C(q)$ est convexe ($C’’(q) \\geqslant 0$), le coût marginal $C’(q)$ augmente avec la quantité produite $q$ (congestion, heures supplémentaires), et le profit $\\pi(q) = p q - C(q)$ est **concave** ($\\pi’’(q) = -C’’(q) \\leqslant 0$), garantissant que le point critique $C’(q^*) = p$ est un **maximum global** de profit !',
            formula: {
              name: 'Condition du second ordre d’un maximum de profit',
              formula: '\\pi(q) = p q - C(q) \\implies \\pi’(q^*) = 0 \\iff C’(q^*) = p, \\quad \\text{et } C’’(q) \\geqslant 0 \\implies \\pi’’(q) \\leqslant 0 \\text{ (max global)}',
              note: 'La concavité de π(q) garantit qu’il n’existe aucun piège de minimum local.',
            },
            keyRule:
              'Pour une fonction **convexe**, tout point où $f’(x^*) = 0$ est un **minimum global** ; pour une fonction **concave**, tout point où $f’(x^*) = 0$ est un **maximum global** !',
            konanTip:
              'Si un exercice d’optimisation économique te demande de vérifier que le niveau de production $q^*$ trouvé par $\\pi’(q^*) = 0$ maximise bien le profit, calcule $\\pi’’(q)$ et montre que $\\pi’’(q) \\leqslant 0$ (concavité) !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch4_p3_q6',
              type: 'mcq',
              prompt:
                'Une entreprise vend son service cloud au prix unitaire fixe $p = 50$ et supporte un coût total $C(q) = 100 + 10q + 2q^2$ ($q \\geqslant 0$). Quelle quantité $q^*$ maximise le profit $\\pi(q) = 50q - C(q)$ et pourquoi s’agit-il d’un maximum global ?',
              options: [
                '$q^* = 10$, car $\\pi’(10) = 0$ et $\\pi’’(q) = -4 < 0$ ($\\pi$ est concave)',
                '$q^* = 20$, car $\\pi’(20) = 0$ et $\\pi’’(q) = 4 > 0$',
                '$q^* = 10$, car $\\pi’’(q) = 4 > 0$ ($\\pi$ est convexe)',
                '$q^* = 5$, car $C’(5) = 50$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $\\pi(q) = 50q - (100 + 10q + 2q^2) = -2q^2 + 40q - 100$. Alors $\\pi’(q) = -4q + 40 = 0 \\iff q^* = 10$. De plus $\\pi’’(q) = -4 < 0$ sur $[0, +\\infty[$, donc $\\pi$ est concave et $q^* = 10$ réalise son maximum global ($\\pi(10) = 100$).',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 5 : Fonctions usuelles (ln, exp, puissances, circulaires réciproques, hyperboliques)
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_analyse_ch5',
    subjectId: 'lmd_analyse',
    gradeLevel: 'lmd_entd_l1',
    order: 5,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Analyse 1',
    title: 'Chapitre 5 — Fonctions usuelles : logarithmes, exponentielles, puissances, circulaires réciproques et hyperboliques',
    summary:
      'Logarithme népérien $\\ln$ et de base $a$, exponentielle $\\exp$ et $a^x$, fonctions puissances $x^a$, croissances comparées, fonctions circulaires réciproques ($\\arcsin, \\arccos, \\arctan$) et fonctions hyperboliques ($\\cosh, \\sinh, \\tanh$).',
    points: [
      // POINT 5.1
      makePoint({
        id: 'lmd_entd_l1_analyse_ch5_p1',
        order: 1,
        title: 'Logarithmes, exponentielles, puissances $x^a$ et croissances comparées',
        summary:
          'Maîtriser les propriétés analytiques et algébriques de $\\ln, \\log_a, \\exp, a^x, x^a$, leur convexité, la symétrie des graphes $\\exp/\\ln$, et la hiérarchie générale des croissances comparées.',
        conceptExplanation:
          'Les fonctions logarithme, exponentielle et puissance forment le socle de toute modélisation quantitative : croissance économique, élasticités, taux d’actualisation, complexité algorithmique ($O(\\log n), O(n^a), O(e^n)$).\n\n' +
          '• **Logarithme népérien $\\ln$** : unique primitive de $x \\mapsto \\frac{1}{x}$ sur $]0, +\\infty[$ s’annulant en $1$. Elle est $\\mathcal{C}^\\infty$, strictement croissante, **concave** ($\\ln’’(x) = -1/x^2 < 0$), transforme les produits en sommes ($\\ln(xy) = \\ln x + \\ln y$), et le logarithme de base $a > 0$ ($a \\neq 1$) vaut $\\log_a(x) = \\frac{\\ln x}{\\ln a}$.\n' +
          '• **Exponentielle $\\exp$** : bijection réciproque de $\\ln$, de $\\mathbb{R}$ sur $]0, +\\infty[$. Elle vérifie $\\exp’ = \\exp$, est strictement croissante et **convexe**, transforme les sommes en produits ($e^{x+y} = e^x e^y$), et $a^x = e^{x \\ln a}$ a pour dérivée $(\\ln a) a^x$.\n' +
          '• **Fonction puissance $x^a = e^{a \\ln x}$ ($x > 0, a \\in \\mathbb{R}$)** : $(x^a)’ = a x^{a-1}$, croissante si $a > 0$, décroissante si $a < 0$, **convexe** si $a \\geqslant 1$ ou $a \\leqslant 0$, **concave** si $0 \\leqslant a \\leqslant 1$.\n' +
          '• **Croissances comparées** : en $+\\infty$, pour tous $\\alpha, \\beta > 0$ et $\\gamma \\in \\mathbb{R}$, $(\\ln x)^\\beta = o(x^\\alpha)$ et $x^\\gamma = o(e^{\\alpha x})$ : l’exponentielle l’emporte toujours sur la puissance, qui l’emporte toujours sur le logarithme.',
        formulas: [
          {
            name: 'Exponentielle de base a et fonction puissance réelle',
            formula: 'a^x = e^{x \\ln a} \\implies (a^x)’ = (\\ln a)a^x ; \\qquad x^a = e^{a \\ln x} \\implies (x^a)’ = a x^{a-1}',
            note: 'Ne jamais confondre la variable à l’exposant (aˣ) et la variable à la base (xᵃ) !',
          },
          {
            name: 'Théorème général des croissances comparées',
            formula: '\\forall \\alpha, \\beta > 0,\\ \\forall \\gamma \\in \\mathbb{R},\\quad \\lim_{x\\to +\\infty} \\frac{(\\ln x)^\\beta}{x^\\alpha} = 0, \\quad \\lim_{x\\to +\\infty} \\frac{e^{\\alpha x}}{x^\\gamma} = +\\infty, \\quad \\lim_{x\\to 0^+} x^\\alpha |\\ln x|^\\beta = 0',
            note: 'Hiérarchie en +∞ : (ln x)^β ≪ x^α ≪ e^(αx).',
          },
        ],
        keyRule:
          'Distingue bien la dérivée de $x^a$ (variable en bas : $a x^{a-1}$) de celle de $a^x$ (variable en haut : $(\\ln a) a^x$) et de celle de $x^x = e^{x \\ln x}$ (variable partout : $(1 + \\ln x)x^x$) !',
        workedExample: {
          title: 'Étude complète de $g(x) = \\frac{\\ln x}{x}$ sur $]0, +\\infty[$ et comparaison $e^\\pi$ vs $\\pi^e$',
          statement:
            '1) Étudier les variations et les limites de $g(x) = \\frac{\\ln x}{x}$ sur $]0, +\\infty[$. 2) En déduire sans calculatrice lequel de $e^\\pi$ ou $\\pi^e$ est le plus grand.',
          methodSteps: [
            '1) $g$ est dérivable sur $]0, +\\infty[$ et $g’(x) = \\frac{\\frac{1}{x} \\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$.',
            'Comme $x^2 > 0$, $g’(x)$ a le signe de $1 - \\ln x$ : positif sur $]0, e[$ (donc $g$ croît), nul en $x = e$, et négatif sur $]e, +\\infty[$ (donc $g$ décroît).',
            'Limites : en $0^+$, $\\ln x \\to -\\infty$ et $1/x \\to +\\infty$, donc $g(x) \\to -\\infty$. En $+\\infty$, par croissance comparée, $\\lim_{x\\to +\\infty} \\frac{\\ln x}{x} = 0^+$. Maximum global en $x = e$ valant $g(e) = \\frac{1}{e}$.',
            '2) Comme $e \\approx 2{,}718 < \\pi \\approx 3{,}141$ et que $g$ est strictement décroissante sur $[e, +\\infty[$, on a $g(e) > g(\\pi)$, soit $\\frac{\\ln e}{e} > \\frac{\\ln \\pi}{\\pi} \\implies \\pi \\ln e > e \\ln \\pi \\implies \\ln(e^\\pi) > \\ln(\\pi^e) \\implies e^\\pi > \\pi^e$ !',
          ],
          conclusion:
            '$g(x) = \\frac{\\ln x}{x}$ atteint son maximum global $\\frac{1}{e}$ en $x = e$, ce qui prouve instantanément $e^\\pi > \\pi^e$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Logarithme ln',
            stepTheme: 'blue',
            stepTitle: 'Logarithme népérien $\\ln$ : définition, propriétés algébriques et concavité',
            paragraphText:
              'Le logarithme népérien $\\ln$ a été inventé pour transformer les multiplications complexes en simples additions — et aujourd’hui encore, il est indispensable en économétrie (modèles log-linéaires pour calculer des élasticités) et en théorie de l’information (entropie).\n' +
              '• **Définition** : $\\ln$ est l’unique primitive sur $]0, +\\infty[$ de $x \\mapsto \\frac{1}{x}$ qui vérifie $\\ln(1) = 0$. Elle est $\\mathcal{C}^\\infty$ sur $]0, +\\infty[$ avec $\\ln’(x) = \\frac{1}{x} > 0$ (strictement croissante) et $\\ln’’(x) = -\\frac{1}{x^2} < 0$ (strictement **concave**).\n' +
              '• **Propriétés algébriques** : pour tous $x, y > 0$ et $n \\in \\mathbb{Z}$, $\\ln(xy) = \\ln x + \\ln y$, $\\ln(1/x) = -\\ln x$, $\\ln(x/y) = \\ln x - \\ln y$, et $\\ln(x^n) = n \\ln x$.\n' +
              '• **Dérivée composée** : si $u(x) > 0$ (ou pour $\\ln|u(x)|$ avec $u(x) \\neq 0$), $(\\ln|u|)’ = \\frac{u’}{u}$ (c’est le taux de croissance instantané de $u$ !).',
            formula: {
              name: 'Propriétés fondamentales de ln',
              formula: '\\ln’(x) = \\frac{1}{x}, \\qquad \\ln’’(x) = -\\frac{1}{x^2} < 0, \\qquad (\\ln|u|)’ = \\frac{u’}{u}',
              note: 'Piège : ln(x + y) ≠ ln(x) + ln(y) ! Le logarithme ne se distribue JAMAIS sur une somme.',
            },
            keyRule:
              'La fonction $\\ln$ est définie UNIQUEMENT sur $]0, +\\infty[$ : avant toute résolution d’équation en $\\ln(u(x))$, impose toujours la condition de domaine $u(x) > 0$ !',
            konanTip:
              'En économie, la dérivée de $\\ln(Y(t))$ par rapport au temps $t$ vaut $\\frac{Y’(t)}{Y(t)}$, c’est-à-dire exactement le taux de croissance instantané du PIB $Y(t)$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q1',
              type: 'mcq',
              prompt:
                'Laquelle de ces affirmations concernant la fonction $\\ln$ sur $]0, +\\infty[$ est **exacte** ?',
              options: [
                '$\\ln$ est convexe car sa dérivée $1/x$ est positive',
                '$\\ln$ est strictement croissante et concave, car $\\ln’(x) = \\frac{1}{x} > 0$ et $\\ln’’(x) = -\\frac{1}{x^2} < 0$',
                '$\\ln(a + b) = \\ln(a) + \\ln(b)$ pour tous $a, b > 0$',
                '$\\ln(e^2) = e$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$\\ln’(x) = \\frac{1}{x} > 0$ donc $\\ln$ est strictement croissante ; $\\ln’’(x) = -\\frac{1}{x^2} < 0$ donc $\\ln$ est strictement concave. $\\ln(e^2) = 2$, et $\\ln$ transforme un produit (pas une somme) en somme.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Base a & Limites',
            stepTheme: 'violet',
            stepTitle: 'Limites de $\\ln$ et logarithme en base quelconque $\\log_a$',
            paragraphText:
              'Si le logarithme népérien $\\ln$ (base $e$) est le plus commode en analyse, l’informatique utilise massivement le logarithme binaire $\\log_2$ (nombre de bits, hauteur d’un arbre binaire) et la finance/acoustique le logarithme décimal $\\log_{10}$.\n' +
              '• **Limites de $\\ln$** : $\\lim_{x \\to 0^+} \\ln x = -\\infty$ (asymptote verticale $x = 0$), $\\lim_{x \\to +\\infty} \\ln x = +\\infty$, et $\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$.\n' +
              '• **Logarithme de base $a > 0, a \\neq 1$** : $\\log_a(x) = \\frac{\\ln x}{\\ln a}$. Sa dérivée vaut $\\log_a’(x) = \\frac{1}{x \\ln a}$.\n' +
              '• **Sens de variation selon $a$** : si $a > 1$, $\\ln a > 0$ donc $\\log_a$ est strictement croissante (ex : $\\log_2(1024) = 10$ bits) ; si $0 < a < 1$, $\\ln a < 0$ donc $\\log_a$ est strictement **décroissante** !',
            formula: {
              name: 'Définition et dérivée du logarithme de base a',
              formula: '\\log_a(x) = \\frac{\\ln x}{\\ln a}, \\qquad \\log_a’(x) = \\frac{1}{x \\ln a} \\qquad (a > 0,\\ a \\neq 1)',
              note: 'Formule de changement de base : log_b(x) = log_a(x) / log_a(b).',
            },
            keyRule:
              'Le signe de $\\ln a$ gouverne la monotonie de $\\log_a$ : croissante pour $a > 1$, **décroissante** pour $0 < a < 1$ !',
            konanTip:
              'Pour calculer mentalement $\\log_2(N)$, demande-toi « à quelle puissance faut-il élever $2$ pour obtenir $N$ ? » : $\\log_2(64) = 6$, $\\log_2(1/8) = -3$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q2',
              type: 'mcq',
              prompt:
                'Quelle est la dérivée sur $]0, +\\infty[$ de la fonction $f(x) = \\log_{10}(x)$ ?',
              options: [
                '$\\frac{1}{10x}$',
                '$\\frac{\\ln 10}{x}$',
                '$\\frac{1}{x \\ln 10}$',
                '$\\frac{10}{x}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Par définition, $\\log_{10}(x) = \\frac{\\ln x}{\\ln 10}$, où $\\frac{1}{\\ln 10}$ est une constante multiplicative. Sa dérivée est donc $\\frac{1}{\\ln 10} \\cdot \\frac{1}{x} = \\frac{1}{x \\ln 10}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Exponentielle',
            stepTheme: 'blue',
            stepTitle: 'Exponentielle népérienne $\\exp$ : réciproque, propriétés et limites',
            paragraphText:
              'La fonction $\\ln$ réalise une bijection strictement croissante de $]0, +\\infty[$ sur $\\mathbb{R}$ : sa bijection réciproque est la fonction exponentielle népérienne $\\exp : \\mathbb{R} \\to ]0, +\\infty[$, notée $e^x$.\n' +
              '• **Dérivée et convexité** : par dérivation de la bijection réciproque, $\\exp’(y) = \\frac{1}{\\ln’(\\exp(y))} = \\frac{1}{1/\\exp(y)} = \\exp(y)$ ! Elle est donc $\\mathcal{C}^\\infty$, strictement positive, strictement croissante et strictement **convexe** ($\\exp’’ = \\exp > 0$).\n' +
              '• **Propriétés algébriques** : $e^0 = 1$, $e^1 = e$, $e^{x+y} = e^x e^y$, $e^{-x} = \\frac{1}{e^x}$, $e^{nx} = (e^x)^n$.\n' +
              '• **Limites** : $\\lim_{x\\to -\\infty} e^x = 0^+$ (asymptote horizontale $y = 0$), $\\lim_{x\\to +\\infty} e^x = +\\infty$, et $\\lim_{x\\to 0} \\frac{e^x - 1}{x} = 1$.',
            formula: {
              name: 'Identités réciproques exp / ln',
              formula: '\\forall x \\in \\mathbb{R},\\ \\ln(e^x) = x ; \\qquad \\forall y > 0,\\ e^{\\ln y} = y ; \\qquad \\forall x \\in \\mathbb{R},\\ e^x > 0',
              note: 'eˣ ne s’annule JAMAIS : le signe d’un produit P(x)eˣ est toujours celui de P(x) !',
            },
            keyRule:
              'Dans une étude de signe de dérivée comportant un facteur $e^{u(x)}$, factorise $e^{u(x)}$ : comme $e^{u(x)} > 0$ pour tout réel, le signe ne dépend QUE de l’autre facteur !',
            konanTip:
              'Pour résoudre une équation de la forme $e^{2x} - 5e^x + 6 = 0$, pose le changement de variable $X = e^x > 0$ : tu obtiens $X^2 - 5X + 6 = 0 \\implies X = 2$ ou $X = 3$, donc $x = \\ln 2$ ou $x = \\ln 3$.',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q3',
              type: 'mcq',
              prompt:
                'Quelles sont les solutions réelles de l’équation $e^{2x} - e^x - 6 = 0$ ?',
              options: [
                '$x = \\ln 3$ et $x = \\ln(-2)$',
                'Uniquement $x = \\ln 3$',
                '$x = 3$ et $x = -2$',
                'Aucune solution réelle',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Posons $X = e^x > 0$. L’équation devient $X^2 - X - 6 = 0 \\iff (X - 3)(X + 2) = 0$, d’où $X = 3$ ou $X = -2$. Comme $e^x > 0$, la racine $X = -2$ est à rejeter ; il reste $e^x = 3 \\iff x = \\ln 3$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Symétrie graphique',
            stepTheme: 'slate',
            stepTitle: 'Graphes symétriques de $\\exp$ et $\\ln$ par rapport à la droite $y = x$',
            paragraphText:
              'Dans un repère orthonormé, les courbes de deux fonctions réciproques $f$ et $f^{-1}$ sont toujours symétriques par rapport à la première bissectrice $y = x$ : chaque propriété de $\\exp$ se reflète en miroir sur $\\ln$ !\n' +
              '• **Points remarquables** : $(0 ; 1)$ sur $\\exp$ devient $(1 ; 0)$ sur $\\ln$ ; $(1 ; e)$ sur $\\exp$ devient $(e ; 1)$ sur $\\ln$.\n' +
              '• **Asymptotes en miroir** : l’asymptote horizontale $y = 0$ de $e^x$ en $-\\infty$ devient l’asymptote verticale $x = 0$ de $\\ln x$ en $0^+$.\n' +
              '• **Position relative** : $e^x$ reste toujours strictement **au-dessus** de $y = x$ ($e^x \\geqslant x + 1 > x$), tandis que $\\ln x$ reste toujours strictement **en dessous** de $y = x$ ($\\ln x \\leqslant x - 1 < x$). Les deux courbes ne se coupent donc jamais !',
            formula: {
              name: 'Hiérarchie globale sur ]0, +∞[',
              formula: '\\forall x > 0,\\quad \\ln(x) < x < e^x',
              note: 'La droite y = x sépare strictement les deux courbes sur tout ]0, +∞[.',
            },
            keyRule:
              'La symétrie par rapport à $y = x$ échange abscisses et ordonnées, asymptote horizontale et asymptote verticale, ainsi que convexité ($e^x$) et concavité ($\\ln x$) pour une bijection croissante !',
            konanTip:
              'Si tu dois prouver que l’équation $e^x = \\ln x$ n’a aucune solution réelle, une seule ligne suffit : pour tout $x > 0$, $\\ln x < x < e^x$, donc $e^x - \\ln x > 0$ !',
            visualSchema: {
              type: 'function_plot',
              title: 'Symétrie des courbes y = eˣ et y = ln(x) autour de y = x',
              caption: 'y = exp(x) (bleu, convexe) et y = ln(x) (vert, concave) sont symétriques par rapport à la première bissectrice y = x (orange).',
              plot: {
                xMin: -2.5,
                xMax: 4.5,
                yMin: -2.5,
                yMax: 4.5,
                xStep: 1,
                yStep: 1,
                curves: [
                  {
                    label: 'y = eˣ',
                    color: 'blue',
                    pieces: [{ expr: 'exp(x)', from: -2.5, to: 1.55 }],
                  },
                  {
                    label: 'y = ln(x)',
                    color: 'green',
                    pieces: [{ expr: 'ln(x)', from: 0.08, to: 4.5 }],
                  },
                  {
                    label: 'y = x',
                    color: 'orange',
                    pieces: [{ expr: 'x', from: -2.5, to: 4.5 }],
                  },
                ],
                points: [
                  { x: 0, y: 1, label: '(0;1)', filled: true, color: 'blue' },
                  { x: 1, y: 0, label: '(1;0)', filled: true, color: 'green' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q4',
              type: 'mcq',
              prompt:
                'Combien de solutions réelles l’équation $e^x = \\ln(x)$ possède-t-elle sur $]0, +\\infty[$ ?',
              options: [
                'Aucune solution ($0$)',
                'Exactement une solution',
                'Exactement deux solutions',
                'Une infinité de solutions',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour tout $x > 0$, la concavité de $\\ln$ donne $\\ln(x) \\leqslant x - 1 < x$, et la convexité de $\\exp$ donne $e^x \\geqslant x + 1 > x$. Donc $\\ln(x) < x < e^x$ pour tout $x > 0$ : les deux courbes ne se coupent jamais.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Puissances xᵃ & aˣ',
            stepTheme: 'violet',
            stepTitle: 'Exponentielle de base $a$ ($a^x$) et fonction puissance réelle ($x^a$)',
            paragraphText:
              'Grâce à $\\exp$ et $\\ln$, on donne un sens rigoureux aux puissances d’exposant réel quelconque $a \\in \\mathbb{R}$ (comme $x^{\\sqrt{2}}$, $x^{0{,}3}$ dans une fonction de production Cobb-Douglas $Y = A K^\\alpha L^\\beta$, ou $2^x$ en complexité algorithmique).\n' +
              '• **Exponentielle de base $a > 0$** : $a^x = e^{x \\ln a}$ définie sur $\\mathbb{R}$, $\\mathcal{C}^\\infty$, de dérivée $(a^x)’ = (\\ln a)a^x$. Elle est croissante si $a > 1$, constante si $a = 1$, décroissante si $0 < a < 1$.\n' +
              '• **Fonction puissance $\\varphi_a(x) = x^a = e^{a \\ln x}$** : définie sur $]0, +\\infty[$ pour tout $a \\in \\mathbb{R}$, $\\mathcal{C}^\\infty$, de dérivée $(x^a)’ = a x^{a-1}$ et dérivée seconde $(x^a)’’ = a(a - 1)x^{a-2}$.\n' +
              '• **Convexité de $x^a$** : le signe de $a(a - 1)$ donne immédiatement la courbure ! $x^a$ est **convexe** si $a > 1$ ou $a < 0$ (ex : $x^2, 1/x$), et **concave** si $0 < a < 1$ (ex : $\\sqrt{x} = x^{1/2}$, fonction de production à rendements décroissants).',
            formula: {
              name: 'Dérivées première et seconde de xᵃ',
              formula: '(x^a)’ = a x^{a-1}, \\qquad (x^a)’’ = a(a - 1) x^{a-2} \\qquad (x > 0,\\ a \\in \\mathbb{R})',
              note: 'Piège : pour f(x) = u(x)^v(x) où base ET exposant varient, toujours réécrire exp(v(x) ln(u(x))) avant de dériver !',
            },
            keyRule:
              'Pour dériver une expression du type $x^x$ ou $(1 + x)^{1/x}$, n’applique JAMAIS ni la règle de $x^a$ ni celle de $a^x$ : passe TOUJOURS par la forme exponentielle $e^{v(x) \\ln u(x)}$ !',
            konanTip:
              'Par exemple, $f(x) = x^x = e^{x \\ln x}$ se dérive en $f’(x) = (x \\ln x)’ e^{x \\ln x} = (\\ln x + 1) x^x$ — ce qui s’annule en $x = e^{-1} = \\frac{1}{e}$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q5',
              type: 'mcq',
              prompt:
                'Pour quels exposants réels $a \\in \\mathbb{R}$ la fonction puissance $x \\mapsto x^a$ est-elle **concave** sur $]0, +\\infty[$ ?',
              options: [
                '$a < 0$',
                '$0 \\leqslant a \\leqslant 1$',
                '$a > 1$',
                'Pour tout $a > 0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$(x^a)’’ = a(a - 1)x^{a-2}$. Comme $x^{a-2} > 0$ sur $]0, +\\infty[$, $(x^a)’’ \\leqslant 0 \\iff a(a - 1) \\leqslant 0 \\iff 0 \\leqslant a \\leqslant 1$ (exemples : $\\sqrt{x} = x^{1/2}$ est concave, tandis que $x^2$ et $x^{-1} = 1/x$ sont convexes).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Croissances comparées',
            stepTheme: 'violet',
            stepTitle: 'Hiérarchie générale des croissances comparées ($\\ln \\ll x^a \\ll \\exp$)',
            paragraphText:
              'Dans toute limite où s’affrontent un logarithme, une puissance et une exponentielle (en $+\\infty$, $-\\infty$ ou $0^+$), une hiérarchie absolue tranche instantanément le duel.\n' +
              '• **En $+\\infty$** : pour tous $\\alpha > 0, \\beta > 0$ et $\\gamma \\in \\mathbb{R}$, $\\lim_{x\\to+\\infty} \\frac{(\\ln x)^\\beta}{x^\\alpha} = 0$ et $\\lim_{x\\to+\\infty} \\frac{e^{\\alpha x}}{x^\\gamma} = +\\infty$. Même un logarithme à la puissance $1000$ s’incline devant $x^{0{,}001}$, et même $x^{1000}$ s’incline devant $e^{0{,}001 x}$ !\n' +
              '• **En $-\\infty$** : $\\lim_{x\\to -\\infty} |x|^\\gamma e^{\\alpha x} = 0$ (pour $\\alpha > 0$, en posant $t = -x \\to +\\infty$).\n' +
              '• **En $0^+$** : $\\lim_{x\\to 0^+} x^\\alpha |\\ln x|^\\beta = 0$ (en posant $t = 1/x \\to +\\infty$, cela revient à $\\frac{(\\ln t)^\\beta}{t^\\alpha} \\to 0$).',
            formula: {
              name: 'Formes usuelles des croissances comparées',
              formula: '\\lim_{x\\to+\\infty} \\frac{e^{\\alpha x}}{x^\\gamma} = +\\infty, \\quad \\lim_{x\\to+\\infty} \\frac{(\\ln x)^\\beta}{x^\\alpha} = 0, \\quad \\lim_{x\\to 0^+} x^\\alpha (\\ln x)^\\beta = 0 \\quad (\\alpha, \\beta > 0)',
              note: 'En informatique, c’est pourquoi un algorithme en O(n log n) écrase O(n²), qui écrase O(2ⁿ) !',
            },
            keyRule:
              'Pour lever une somme/différence avec croissance comparée (ex : $e^x - x^{10}$ en $+\\infty$), factorise toujours le terme **le plus fort** : $e^x\\left(1 - \\frac{x^{10}}{e^x}\\right) \\to (+\\infty) \\times 1 = +\\infty$ !',
            konanTip:
              'Vérifie toujours le **signe** de $\\alpha$ dans $e^{\\alpha x}$ : si $\\alpha < 0$, alors $e^{\\alpha x} \\to 0$ en $+\\infty$ (et NON $+\\infty$) !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to +\\infty} \\frac{e^{0{,}1 x}}{x^{50} + (\\ln x)^{100}}$ ?',
              options: ['$0$', '$1$', '$+\\infty$', '$0{,}1$'],
              correctAnswerIndex: 2,
              explanation:
                'En $+\\infty$, $x^{50} + (\\ln x)^{100} \\sim x^{50}$ (la puissance l’emporte sur le logarithme), puis $\\frac{e^{0{,}1x}}{x^{50}} \\to +\\infty$ car l’exponentielle avec $\\alpha = 0{,}1 > 0$ l’emporte sur toute puissance $x^\\gamma$.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Tableau de variations',
            stepTheme: 'slate',
            stepTitle: 'Synthèse d’étude complète : variations de $g(x) = \\frac{\\ln x}{x}$',
            paragraphText:
              'Combiner dérivée, signe, limites et croissances comparées permet de dresser le tableau de variations complet d’une fonction usuelle — et d’en déduire des inégalités surprenantes.\n' +
              '• **Dérivée et signe** : sur $]0, +\\infty[$, $g’(x) = \\frac{1 - \\ln x}{x^2}$, qui est positif pour $0 < x < e$, nul en $x = e$, et négatif pour $x > e$.\n' +
              '• **Bornes et extrema** : $g(x) \\to -\\infty$ en $0^+$, monte jusqu’au maximum global $g(e) = \\frac{1}{e} \\approx 0{,}368$ (atteint en $x = e$), puis redescend vers $0^+$ en $+\\infty$ (par croissance comparée).\n' +
              '• **Conséquence remarquable** : pour tout $x > 0$, $\\frac{\\ln x}{x} \\leqslant \\frac{1}{e}$, soit $x^{1/x} \\leqslant e^{1/e}$, et pour tous $a, b$ vérifiant $e \\leqslant a < b$, on a toujours $a^b > b^a$ (donc $e^\\pi > \\pi^e$ et $3^4 > 4^3$) !',
            formula: {
              name: 'Maximum global de (ln x)/x et conséquence sur aᵇ vs bᵃ',
              formula: '\\forall x > 0,\\ \\frac{\\ln x}{x} \\leqslant \\frac{1}{e} ; \\qquad e \\leqslant a < b \\implies a^b > b^a',
              note: 'Vérification : 3⁴ = 81 > 64 = 4³, car e < 3 < 4 !',
            },
            keyRule:
              'Pour comparer deux puissances croisées $a^b$ et $b^a$ ($a, b > 0$), passe au logarithme et divise par $ab$ : $a^b > b^a \\iff \\frac{\\ln a}{a} > \\frac{\\ln b}{b}$ !',
            konanTip:
              'Dans un tableau de variations sur $]0, +\\infty[$, n’oublie jamais la **double barre** en $x = 0$ (valeur interdite) et d’indiquer toutes les limites aux bornes.',
            visualSchema: {
              type: 'variation_table',
              title: 'Tableau de variations de g(x) = (ln x) / x sur ]0, +∞[',
              caption: 'g croît strictement sur ]0, e] jusqu’au maximum global 1/e, puis décroît strictement sur [e, +∞[ vers 0.',
              variation: {
                xLabel: 'x',
                fLabel: 'g(x) = ln(x)/x',
                xValues: ['0', 'e', '+∞'],
                values: [
                  { forbidden: true, right: { text: '−∞', level: 'bottom' } },
                  { text: '1/e', level: 'top' },
                  { text: '0', level: 'bottom' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p1_q7',
              type: 'mcq',
              prompt:
                'À partir du tableau de variations de $g(x) = \\frac{\\ln x}{x}$, combien de solutions réelles possède l’équation $\\frac{\\ln x}{x} = \\frac{1}{4}$ sur $]0, +\\infty[$ ?',
              options: [
                'Aucune solution',
                'Exactement $1$ solution',
                'Exactement $2$ solutions (une dans $]1, e[$ et une dans $]e, +\\infty[$)',
                'Une infinité de solutions',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme $e \\approx 2{,}718 < 4$, on a $0 < \\frac{1}{4} < \\frac{1}{e}$. Par le TVI + stricte monotonie, $g$ prend exactement une fois la valeur $\\frac{1}{4}$ sur $]0, e[$ (en fait dans $]1, e[$ car $g(1)=0$) et exactement une fois sur $]e, +\\infty[$. Il y a donc exactement $2$ solutions.',
            },
          },
        ],
      }),

      // POINT 5.2
      makePoint({
        id: 'lmd_entd_l1_analyse_ch5_p2',
        order: 2,
        title: 'Fonctions circulaires réciproques (arcsin, arccos, arctan)',
        summary:
          'Construire $\\arcsin, \\arccos, \\arctan$ par restriction bijective, connaître leurs domaines, ensembles images, dérivées, identités remarquables et déjouer le piège de $\\arcsin(\\sin x)$.',
        conceptExplanation:
          'Les fonctions trigonométriques $\\sin, \\cos, \\tan$ sont périodiques, donc **non injectives** sur $\\mathbb{R}$. Pour définir leurs fonctions réciproques, il est impératif de les restreindre à un intervalle maximal où elles sont strictement monotones.\n\n' +
          '• **$\\arcsin : [-1, 1] \\to [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$** : réciproque de $\\sin|_{[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]}$. Impaire, strictement croissante, dérivable sur **$]-1, 1[$** (tangentes verticales en $\\pm 1$) avec $\\arcsin’(x) = \\frac{1}{\\sqrt{1 - x^2}}$.\n' +
          '• **$\\arccos : [-1, 1] \\to [0, \\pi]$** : réciproque de $\\cos|_{[0, \\pi]}$. Ni paire ni impaire, strictement **décroissante**, dérivable sur $]-1, 1[$ avec $\\arccos’(x) = -\\frac{1}{\\sqrt{1 - x^2}}$, et $\\forall x \\in [-1, 1],\\ \\arcsin x + \\arccos x = \\frac{\\pi}{2}$.\n' +
          '• **$\\arctan : \\mathbb{R} \\to ]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$** : réciproque de $\\tan|_{]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[}$. Impaire, strictement croissante, $\\mathcal{C}^\\infty$ sur tout $\\mathbb{R}$ avec $\\arctan’(x) = \\frac{1}{1 + x^2}$, et $\\lim_{x\\to \\pm\\infty} \\arctan x = \\pm \\frac{\\pi}{2}$.',
        formulas: [
          {
            name: 'Dérivées des fonctions circulaires réciproques',
            formula: '\\arcsin’(x) = \\frac{1}{\\sqrt{1 - x^2}}, \\quad \\arccos’(x) = -\\frac{1}{\\sqrt{1 - x^2}} \\ (|x|<1) ; \\qquad \\arctan’(x) = \\frac{1}{1 + x^2} \\ (x \\in \\mathbb{R})',
            note: 'Les dérivées de arcsin et arccos sont opposées car leur somme est constante égale à π/2 !',
          },
          {
            name: 'Identités fondamentales',
            formula: '\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\ (x \\in [-1,1]) ; \\qquad \\arctan x + \\arctan\\left(\\frac{1}{x}\\right) = \\begin{cases} +\\frac{\\pi}{2} & (x > 0) \\\\ -\\frac{\\pi}{2} & (x < 0) \\end{cases}',
            note: 'Attention au saut de signe en 0 pour arctan(x) + arctan(1/x) !',
          },
        ],
        keyRule:
          'Ne JAMAIS écrire $\\arcsin(\\sin x) = x$ sans vérifier que $x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ ! De même, $\\arccos(\\cos x) = x$ exige $x \\in [0, \\pi]$, et $\\arctan(\\tan x) = x$ exige $x \\in ]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$.',
        workedExample: {
          title: 'Preuve de $\\arctan x + \\arctan(1/x) = \\pm\\frac{\\pi}{2}$ et calcul de $\\arcsin(\\sin(5\\pi/6))$',
          statement:
            '1) Démontrer que pour tout $x > 0$, $\\arctan(x) + \\arctan(1/x) = \\frac{\\pi}{2}$, et pour tout $x < 0$, cela vaut $-\\frac{\\pi}{2}$. 2) Calculer $\\arcsin\\left(\\sin\\left(\\frac{5\\pi}{6}\\right)\\right)$ et $\\cos(\\arcsin x)$.',
          methodSteps: [
            '1) Posons $h(x) = \\arctan(x) + \\arctan(1/x)$ sur $\\mathbb{R}^* = ]-\\infty, 0[ \\cup ]0, +\\infty[$.',
            'Pour tout $x \\neq 0$, $h’(x) = \\frac{1}{1 + x^2} + \\frac{-1/x^2}{1 + 1/x^2} = \\frac{1}{1 + x^2} - \\frac{1}{x^2 + 1} = 0$.',
            'Comme $\\mathbb{R}^*$ n’est PAS un intervalle, $h$ est constante séparément sur $]0, +\\infty[$ et sur $]-\\infty, 0[$ ! En $x = 1 > 0$ : $h(1) = \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}$. En $x = -1 < 0$ : $h(-1) = -\\frac{\\pi}{4} - \\frac{\\pi}{4} = -\\frac{\\pi}{2}$.',
            '2) $\\frac{5\\pi}{6} \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, mais $\\sin\\left(\\frac{5\\pi}{6}\\right) = \\sin\\left(\\pi - \\frac{5\\pi}{6}\\right) = \\sin\\left(\\frac{\\pi}{6}\\right)$ avec $\\frac{\\pi}{6} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, donc $\\arcsin(\\sin(5\\pi/6)) = \\frac{\\pi}{6}$. Et pour $y = \\arcsin x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\cos y \\geqslant 0$, donc $\\cos(\\arcsin x) = +\\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$.',
          ],
          conclusion:
            '$\\arctan(x) + \\arctan(1/x) = \\operatorname{sgn}(x)\\frac{\\pi}{2}$, $\\arcsin(\\sin(5\\pi/6)) = \\frac{\\pi}{6}$, et $\\cos(\\arcsin x) = \\sqrt{1 - x^2}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Restrictions',
            stepTheme: 'blue',
            stepTitle: 'Pourquoi et comment restreindre $\\sin, \\cos, \\tan$ pour les inverser',
            paragraphText:
              'Une fonction périodique prend une infinité de fois la même valeur (ex : $\\sin(0) = \\sin(\\pi) = \\sin(2\\pi) = 0$) : elle n’est donc pas bijective sur $\\mathbb{R}$. Pour définir une réciproque unique, on choisit un intervalle standard contenant $0$ (ou collé à $0$) où la fonction est continue et strictement monotone.\n' +
              '• **Pour $\\sin$** : on choisit $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, où $\\sin$ est strictement croissante de $-1$ à $+1$.\n' +
              '• **Pour $\\cos$** : $\\cos$ n’est pas monotone sur $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ (elle est paire !), donc on choisit $[0, \\pi]$, où $\\cos$ est strictement décroissante de $+1$ à $-1$.\n' +
              '• **Pour $\\tan$** : on choisit l’intervalle ouvert $\\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[$, où $\\tan$ est strictement croissante de $-\\infty$ à $+\\infty$.',
            formula: {
              name: 'Tableau des bijections circulaires réciproques',
              formula: '\\arcsin : [-1,1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right], \\quad \\arccos : [-1,1] \\to [0, \\pi], \\quad \\arctan : \\mathbb{R} \\to \\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[',
              note: 'Retiens parfaitement ces trois ensembles d’arrivée : ils conditionnent tous les signes et toutes les simplifications !',
            },
            keyRule:
              'Avant tout calcul avec une fonction circulaire réciproque, récite son ensemble image : $\\arcsin \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\arccos \\in [0, \\pi]$, $\\arctan \\in ]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$.',
            konanTip:
              'Visualise le cercle trigonométrique : $\\arcsin$ et $\\arctan$ vivent dans le **demi-cercle droit** (où $\\cos \\geqslant 0$), tandis que $\\arccos$ vit dans le **demi-cercle supérieur** (où $\\sin \\geqslant 0$) !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est l’ensemble image (valeurs prises) de la fonction $\\arccos$ définie sur $[-1, 1]$ ?',
              options: [
                '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
                '$[0, \\pi]$',
                '$\\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[$',
                '$[-1, 1]$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fonction $\\cos$ réalise une bijection strictement décroissante de $[0, \\pi]$ sur $[-1, 1]$, donc sa réciproque $\\arccos$ envoie $[-1, 1]$ bijectivement sur $[0, \\pi]$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Arcsinus',
            stepTheme: 'violet',
            stepTitle: 'Étude complète de $\\arcsin$ : parité, dérivée et tangentes verticales',
            paragraphText:
              'La fonction $\\arcsin$ est définie sur $[-1, 1]$ par : $y = \\arcsin(x) \\iff (\\sin y = x \\text{ et } y \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}])$.\n' +
              '• **Valeurs usuelles** : $\\arcsin(0) = 0$, $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$, $\\arcsin(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$, $\\arcsin(\\frac{\\sqrt{3}}{2}) = \\frac{\\pi}{3}$, $\\arcsin(1) = \\frac{\\pi}{2}$. Comme $\\sin$ est impaire, $\\arcsin$ est **impaire** : $\\arcsin(-x) = -\\arcsin(x)$.\n' +
              '• **Dérivée sur $]-1, 1[$** : par dérivation réciproque, $\\arcsin’(x) = \\frac{1}{\\cos(\\arcsin x)}$. Or $\\arcsin x \\in ]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$, où $\\cos > 0$, donc $\\cos(\\arcsin x) = +\\sqrt{1 - \\sin^2(\\arcsin x)} = \\sqrt{1 - x^2}$. D’où $\\arcsin’(x) = \\frac{1}{\\sqrt{1 - x^2}}$.\n' +
              '• **Aux bornes $\\pm 1$** : $\\arcsin’(x) \\to +\\infty$ quand $x \\to \\pm 1$, donc $\\arcsin$ est continue sur $[-1, 1]$ mais **non dérivable en $-1$ et $1$** (tangentes verticales).',
            formula: {
              name: 'Dérivée et parité d’arcsin',
              formula: '\\forall x \\in ]-1, 1[,\\ \\arcsin’(x) = \\frac{1}{\\sqrt{1 - x^2}} ; \\qquad \\arcsin(-x) = -\\arcsin(x)',
              note: 'Équivalent en 0 : arcsin(x) ~₀ x (car arcsin’(0) = 1).',
            },
            keyRule:
              '$\\arcsin$ est continue sur le segment fermé $[-1, 1]$, mais dérivable seulement sur l’ouvert $]-1, 1[$ !',
            konanTip:
              'Pour retenir le signe de $\\cos(\\arcsin x) = +\\sqrt{1 - x^2}$, souviens-toi que $\\arcsin$ vit dans le demi-cercle droit, où le cosinus est toujours positif !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p2_q2',
              type: 'mcq',
              prompt:
                'Que vaut la dérivée de $f(x) = \\arcsin(2x)$ pour $x \\in \\left]-\\frac{1}{2}, \\frac{1}{2}\\right[$ ?',
              options: [
                '$\\frac{1}{\\sqrt{1 - 2x^2}}$',
                '$\\frac{2}{\\sqrt{1 - 4x^2}}$',
                '$\\frac{1}{\\sqrt{1 - 4x^2}}$',
                '$\\frac{-2}{\\sqrt{1 - 4x^2}}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par la règle de la chaîne $(\\arcsin u)’ = \\frac{u’}{\\sqrt{1 - u^2}}$ avec $u(x) = 2x$ ($u’(x) = 2$ et $u^2 = 4x^2$), on trouve $f’(x) = \\frac{2}{\\sqrt{1 - 4x^2}}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Arccosinus',
            stepTheme: 'violet',
            stepTitle: 'Étude de $\\arccos$ et relation $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$',
            paragraphText:
              'La fonction $\\arccos$ est la seule des trois circulaires réciproques qui soit **strictement décroissante**, et elle n’est ni paire ni impaire.\n' +
              '• **Valeurs et symétrie** : $\\arccos(1) = 0$, $\\arccos(0) = \\frac{\\pi}{2}$, $\\arccos(-1) = \\pi$, et $\\forall x \\in [-1, 1],\\ \\arccos(-x) = \\pi - \\arccos(x)$ (centre de symétrie $(0 ; \\frac{\\pi}{2})$).\n' +
              '• **Dérivée sur $]-1, 1[$** : $\\arccos’(x) = \\frac{1}{-\\sin(\\arccos x)}$. Comme $\\arccos x \\in ]0, \\pi[$, $\\sin(\\arccos x) = +\\sqrt{1 - x^2} > 0$, donc $\\arccos’(x) = -\\frac{1}{\\sqrt{1 - x^2}} < 0$.\n' +
              '• **Identité complémentaire** : la fonction $g(x) = \\arcsin x + \\arccos x$ est continue sur $[-1, 1]$, de dérivée $g’(x) = \\frac{1}{\\sqrt{1-x^2}} - \\frac{1}{\\sqrt{1-x^2}} = 0$ sur $]-1, 1[$, donc constante égale à $g(0) = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}$ !',
            formula: {
              name: 'Complémentarité et symétrie d’arccos',
              formula: '\\forall x \\in [-1, 1],\\quad \\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad \\text{et} \\quad \\arccos(-x) = \\pi - \\arccos(x)',
              note: 'Piège classique : arccos(-x) ≠ -arccos(x) et arccos(-x) ≠ arccos(x) !',
            },
            keyRule:
              'Ne dis JAMAIS que $\\arccos$ est paire sous prétexte que $\\cos$ est paire ! Une fonction paire non constante n’est pas injective ; la vraie symétrie est $\\arccos(-x) = \\pi - \\arccos(x)$.',
            konanTip:
              'Pour calculer $\\arccos(-\\frac{1}{2})$, pense $\\pi - \\arccos(\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p2_q3',
              type: 'mcq',
              prompt:
                'Que vaut $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right)$ ?',
              options: [
                '$-\\frac{\\pi}{4}$',
                '$\\frac{\\pi}{4}$',
                '$\\frac{3\\pi}{4}$',
                '$\\frac{5\\pi}{4}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Comme $\\arccos(-x) = \\pi - \\arccos(x)$ et $\\arccos\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$, on a $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4} \\in [0, \\pi]$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Arctangente',
            stepTheme: 'violet',
            stepTitle: 'Étude complète de $\\arctan$ : dérivée rationnelle et asymptotes',
            paragraphText:
              'La fonction $\\arctan$ est particulièrement prisée en analyse et en calcul intégral car elle est définie et $\\mathcal{C}^\\infty$ sur tout $\\mathbb{R}$, bornée entre $-\\frac{\\pi}{2}$ et $+\\frac{\\pi}{2}$, et sa dérivée est une fraction rationnelle très simple !\n' +
              '• **Dérivée** : par dérivation réciproque (sachant $\\tan’ = 1 + \\tan^2$), $\\arctan’(x) = \\frac{1}{1 + \\tan^2(\\arctan x)} = \\frac{1}{1 + x^2} > 0$.\n' +
              '• **Variations, parité et convexité** : impaire ($\\arctan(-x) = -\\arctan x$), strictement croissante sur $\\mathbb{R}$. Sa dérivée seconde $\\arctan’’(x) = \\frac{-2x}{(1 + x^2)^2}$ change de signe en $0$ : **convexe** sur $]-\\infty, 0]$, **concave** sur $[0, +\\infty[$ (point d’inflexion en $0$, tangente $y = x$).\n' +
              '• **Limites et valeurs usuelles** : $\\lim_{x\\to -\\infty} \\arctan x = -\\frac{\\pi}{2}$, $\\lim_{x\\to +\\infty} \\arctan x = +\\frac{\\pi}{2}$ (deux asymptotes horizontales), $\\arctan(1) = \\frac{\\pi}{4}$, $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$, $\\arctan(1/\\sqrt{3}) = \\frac{\\pi}{6}$.',
            formula: {
              name: 'Dérivée et asymptotes de arctan',
              formula: '\\forall x \\in \\mathbb{R},\\ \\arctan’(x) = \\frac{1}{1 + x^2}, \\qquad \\lim_{x \\to \\pm\\infty} \\arctan(x) = \\pm\\frac{\\pi}{2}',
              note: 'En particulier, une primitive de 1/(1 + x²) sur ℝ est arctan(x) !',
            },
            keyRule:
              'Sur $[0, +\\infty[$, $\\arctan$ est concave et sa tangente en $0$ est $y = x$, donc $\\forall x \\geqslant 0,\\ \\arctan(x) \\leqslant x$ (et pour tout $x \\in \\mathbb{R}$, $|\\arctan(x)| \\leqslant |x|$ et $|\\arctan(x)| < \\frac{\\pi}{2}$).',
            konanTip:
              'La formule de dérivée $\\left(\\arctan\\frac{x}{a}\\right)’ = \\frac{a}{a^2 + x^2}$ te sera aussi très utile en calcul de primitives : $\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to +\\infty} \\arctan(x^2 - 10x)$ ?',
              options: [
                '$+\\infty$',
                '$\\frac{\\pi}{2}$',
                '$-\\frac{\\pi}{2}$',
                '$0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Quand $x \\to +\\infty$, $x^2 - 10x \\to +\\infty$. Par composition des limites avec $\\lim_{u \\to +\\infty} \\arctan(u) = \\frac{\\pi}{2}$, on obtient $\\frac{\\pi}{2}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Identités & Simplifications',
            stepTheme: 'green',
            stepTitle: 'Simplifier des compositions mixtes ($\\cos(\\arcsin x)$, $\\cos(\\arctan x)$, $\\arctan x + \\arctan(1/x)$)',
            paragraphText:
              'Savoir simplifier une fonction trigonométrique appliquée à une réciproque (comme $\\cos(\\arcsin x)$ ou $\\sin(\\arctan x)$) repose sur les identités pythagoriciennes et le signe dans le bon demi-cercle.\n' +
              '• **$\\cos(\\arcsin x)$ et $\\sin(\\arccos x)$** : dans les deux cas, le résultat est positif ($\\arcsin \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ où $\\cos \\geqslant 0$ ; $\\arccos \\in [0, \\pi]$ où $\\sin \\geqslant 0$), donc $\\cos(\\arcsin x) = \\sin(\\arccos x) = \\sqrt{1 - x^2}$.\n' +
              '• **$\\cos(\\arctan x)$ et $\\sin(\\arctan x)$** : posons $\\theta = \\arctan x \\in ]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$. Comme $1 + \\tan^2\\theta = \\frac{1}{\\cos^2\\theta}$ et $\\cos\\theta > 0$, on obtient $\\cos(\\arctan x) = \\frac{1}{\\sqrt{1 + x^2}}$ et $\\sin(\\arctan x) = \\tan\\theta \\cos\\theta = \\frac{x}{\\sqrt{1 + x^2}}$.\n' +
              '• **Identité $\\arctan x + \\arctan(1/x)$** : vaut $+\\frac{\\pi}{2}$ si $x > 0$ et $-\\frac{\\pi}{2}$ si $x < 0$ (attention à ne PAS dire qu’elle est constante sur $\\mathbb{R}^*$ !).',
            formula: {
              name: 'Compositions trigonométriques croisées',
              formula: '\\cos(\\arcsin x) = \\sin(\\arccos x) = \\sqrt{1 - x^2}, \\qquad \\cos(\\arctan x) = \\frac{1}{\\sqrt{1 + x^2}}, \\qquad \\sin(\\arctan x) = \\frac{x}{\\sqrt{1 + x^2}}',
              note: 'Très utile pour simplifier les dérivées et les calculs géométriques !',
            },
            keyRule:
              'Pour démontrer une identité entre fonctions réciproques (type $f(x) = \\text{constante}$), dérive $f$ pour vérifier $f’ = 0$, mais **découpe toujours le domaine en intervalles connexes** avant d’évaluer la constante sur chaque intervalle !',
            konanTip:
              'Astuce du triangle rectangle : pour $\\theta = \\arctan(x)$ ($x > 0$), dessine un triangle rectangle de côté opposé $x$, côté adjacent $1$, donc hypoténuse $\\sqrt{1 + x^2}$ : tu lis immédiatement $\\cos\\theta = \\frac{1}{\\sqrt{1+x^2}}$ et $\\sin\\theta = \\frac{x}{\\sqrt{1+x^2}}$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p2_q5',
              type: 'mcq',
              prompt:
                'Pour $x = -2$, quelle est la valeur exacte de $\\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right)$ ?',
              options: [
                '$\\frac{\\pi}{2}$',
                '$-\\frac{\\pi}{2}$',
                '$0$',
                '$\\pi$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La fonction $h(x) = \\arctan(x) + \\arctan(1/x)$ a une dérivée nulle sur $]-\\infty, 0[$ et sur $]0, +\\infty[$, donc elle est constante sur chacun de ces deux intervalles. Comme $x = -2 < 0$, $h(-2) = h(-1) = \\arctan(-1) + \\arctan(-1) = -\\frac{\\pi}{4} - \\frac{\\pi}{4} = -\\frac{\\pi}{2}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège majeur',
            stepTheme: 'orange',
            stepTitle: 'Calculer $\\arcsin(\\sin x)$, $\\arccos(\\cos x)$ et $\\arctan(\\tan x)$ hors domaine',
            paragraphText:
              'Si $\\sin(\\arcsin x) = x$ est toujours vraie pour tout $x \\in [-1, 1]$, la composition dans l’autre sens $\\arcsin(\\sin x)$ est le piège favori des examens !\n' +
              '• **Règle d’or** : $\\arcsin(\\sin x)$ est l’**unique réel $y \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$** tel que $\\sin y = \\sin x$. Il ne vaut $x$ QUE si $x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ !\n' +
              '• **Méthode de ramenée dans l’intervalle** : utilise la périodicité ($\\pm 2k\\pi$) et les symétries ($\\sin(\\pi - x) = \\sin x$, $\\cos(-x) = \\cos x$, $\\tan(x + k\\pi) = \\tan x$) pour trouver l’angle équivalent dans le bon intervalle.\n' +
              '• **Exemples** : $\\arcsin(\\sin(\\frac{2\\pi}{3})) = \\arcsin(\\sin(\\pi - \\frac{2\\pi}{3})) = \\frac{\\pi}{3}$ (et non $\\frac{2\\pi}{3}$) ; $\\arccos(\\cos(-\\frac{\\pi}{3})) = \\arccos(\\cos(\\frac{\\pi}{3})) = \\frac{\\pi}{3}$ ; $\\arctan(\\tan(\\frac{4\\pi}{3})) = \\arctan(\\tan(\\frac{4\\pi}{3} - \\pi)) = \\frac{\\pi}{3}$.',
            formula: {
              name: 'Identités exactes vs conditions de validité',
              formula: '\\arcsin(\\sin x) = x \\iff x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]; \\quad \\arccos(\\cos x) = x \\iff x \\in [0, \\pi]; \\quad \\arctan(\\tan x) = x \\iff x \\in \\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[',
              note: 'Dans l’autre sens : sin(arcsin x) = x (∀x∈[-1,1]), cos(arccos x) = x (∀x∈[-1,1]), tan(arctan x) = x (∀x∈ℝ).',
            },
            keyRule:
              'Vérifie TOUJOURS si l’angle final de ta réponse appartient bien à l’intervalle d’arrivée ($[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ pour $\\arcsin$, $[0, \\pi]$ pour $\\arccos$, $]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$ pour $\\arctan$) !',
            konanTip:
              'La fonction $x \\mapsto \\arcsin(\\sin x)$ est $2\\pi$-périodique en dents de scie : elle vaut $x$ sur $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, puis $\\pi - x$ sur $[\\frac{\\pi}{2}, \\frac{3\\pi}{2}]$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur exacte de $\\arccos\\left(\\cos\\left(\\frac{5\\pi}{4}\\right)\\right)$ ?',
              options: [
                '$\\frac{5\\pi}{4}$',
                '$-\\frac{3\\pi}{4}$',
                '$\\frac{3\\pi}{4}$',
                '$\\frac{\\pi}{4}$',
              ],
              correctAnswerIndex: 2,
              explanation:
                '$\\frac{5\\pi}{4} \\notin [0, \\pi]$. On utilise $\\cos(2\\pi - \\theta) = \\cos(\\theta)$ : $\\cos\\left(\\frac{5\\pi}{4}\\right) = \\cos\\left(2\\pi - \\frac{5\\pi}{4}\\right) = \\cos\\left(\\frac{3\\pi}{4}\\right)$. Comme $\\frac{3\\pi}{4} \\in [0, \\pi]$, on conclut $\\arccos\\left(\\cos\\left(\\frac{5\\pi}{4}\\right)\\right) = \\frac{3\\pi}{4}$.',
            },
          },
        ],
      }),

      // POINT 5.3
      makePoint({
        id: 'lmd_entd_l1_analyse_ch5_p3',
        order: 3,
        title: 'Fonctions hyperboliques (cosh, sinh, tanh) et réciproques',
        summary:
          'Définir $\\cosh, \\sinh, \\tanh$ à partir de l’exponentielle, maîtriser l’identité $\\cosh^2 x - \\sinh^2 x = 1$, leurs dérivées, variations, représentations graphiques, réciproques et leur usage en IA.',
        conceptExplanation:
          'Les **fonctions hyperboliques** sont construites directement à partir de $e^x$ et $e^{-x}$ ; elles jouent pour l’hyperbole $X^2 - Y^2 = 1$ exactement le rôle que $\\cos$ et $\\sin$ jouent pour le cercle $X^2 + Y^2 = 1$. Elles modélisent la courbe d’un câble suspendu (chaînette $\\cosh$), les fonctions d’activation en réseaux de neurones ($\\tanh$) et la relativité.\n\n' +
          '• **Définitions** : $\\cosh x = \\frac{e^x + e^{-x}}{2}$ (partie paire de $e^x$), $\\sinh x = \\frac{e^x - e^{-x}}{2}$ (partie impaire de $e^x$), et $\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}} = \\frac{e^{2x} - 1}{e^{2x} + 1}$. On a donc $\\cosh x + \\sinh x = e^x$ et $\\cosh x - \\sinh x = e^{-x}$.\n' +
          '• **Identité fondamentale** : $\\forall x \\in \\mathbb{R},\\ \\cosh^2 x - \\sinh^2 x = 1$ (attention au signe **MOINS** !), d’où $\\cosh x \\geqslant 1$ pour tout $x \\in \\mathbb{R}$.\n' +
          '• **Dérivées** : $\\cosh’ = \\sinh$ (sans signe moins !), $\\sinh’ = \\cosh$, et $\\tanh’ = \\frac{1}{\\cosh^2} = 1 - \\tanh^2$.\n' +
          '• **Réciproques** : $\\operatorname{argsh}(x) = \\ln(x + \\sqrt{x^2 + 1})$ sur $\\mathbb{R}$, $\\operatorname{argch}(x) = \\ln(x + \\sqrt{x^2 - 1})$ sur $[1, +\\infty[$, et $\\operatorname{argth}(x) = \\frac{1}{2}\\ln\\left(\\frac{1 + x}{1 - x}\\right)$ sur $]-1, 1[$.',
        formulas: [
          {
            name: 'Définitions et identité hyperbolique fondamentale',
            formula: '\\cosh x = \\frac{e^x + e^{-x}}{2}, \\quad \\sinh x = \\frac{e^x - e^{-x}}{2}, \\quad \\tanh x = \\frac{e^{2x} - 1}{e^{2x} + 1}, \\qquad \\cosh^2 x - \\sinh^2 x = 1',
            note: 'De plus : cosh(x) + sinh(x) = eˣ et cosh(x) − sinh(x) = e⁻ˣ.',
          },
          {
            name: 'Dérivées des fonctions hyperboliques',
            formula: '\\cosh’(x) = \\sinh(x), \\qquad \\sinh’(x) = \\cosh(x), \\qquad \\tanh’(x) = \\frac{1}{\\cosh^2 x} = 1 - \\tanh^2 x',
            note: 'Piège : contrairement à cos’ = −sin, ici cosh’ = +sinh (pas de signe moins) !',
          },
          {
            name: 'Expressions logarithmiques des fonctions hyperboliques réciproques',
            formula: '\\operatorname{argsh}(x) = \\ln\\left(x + \\sqrt{x^2 + 1}\\right), \\quad \\operatorname{argch}(x) = \\ln\\left(x + \\sqrt{x^2 - 1}\\right)\\ (x \\geqslant 1), \\quad \\operatorname{argth}(x) = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)\\ (|x|<1)',
            note: 'Toutes s’obtiennent en résolvant une équation du second degré en X = eʸ !',
          },
        ],
        keyRule:
          'Attention aux deux pièges d’analogie avec la trigonométrie circulaire : (1) $\\cosh^2 x - \\sinh^2 x = 1$ (signe **moins**), (2) $\\cosh’(x) = +\\sinh(x)$ (signe **plus**) !',
        workedExample: {
          title: 'Résolution de $2\\cosh x + \\sinh x = 3$ et expression logarithmique de $\\operatorname{argsh}$',
          statement:
            '1) Résoudre dans $\\mathbb{R}$ l’équation $2\\cosh x + \\sinh x = 3$. 2) Retrouver la formule $\\operatorname{argsh}(x) = \\ln(x + \\sqrt{x^2 + 1})$.',
          methodSteps: [
            '1) Remplaçons $\\cosh x$ et $\\sinh x$ par leurs expressions en exponentielles : $2\\frac{e^x + e^{-x}}{2} + \\frac{e^x - e^{-x}}{2} = 3 \\iff \\frac{3}{2}e^x + \\frac{1}{2}e^{-x} = 3$.',
            'En multipliant par $2e^x > 0$ et en posant $X = e^x > 0$ : $3X^2 - 6X + 1 = 0$. Le discriminant vaut $\\Delta = 36 - 12 = 24$, d’où $X = \\frac{6 \\pm 2\\sqrt{6}}{6} = 1 \\pm \\frac{\\sqrt{6}}{3}$.',
            'Comme $\\frac{\\sqrt{6}}{3} \\approx 0{,}816 < 1$, les deux racines sont strictement positives : $x_1 = \\ln\\left(1 + \\frac{\\sqrt{6}}{3}\\right)$ et $x_2 = \\ln\\left(1 - \\frac{\\sqrt{6}}{3}\\right)$.',
            '2) Pour $y = \\operatorname{argsh}(x) \\iff \\sinh y = x$, on écrit $\\frac{e^y - e^{-y}}{2} = x \\iff (e^y)^2 - 2x(e^y) - 1 = 0$. Les racines en $e^y$ sont $x \\pm \\sqrt{x^2 + 1}$. Comme $\\sqrt{x^2 + 1} > |x|$, seule $x + \\sqrt{x^2 + 1} > 0$ convient, donc $y = \\ln(x + \\sqrt{x^2 + 1})$.',
          ],
          conclusion:
            'Les solutions sont $x = \\ln\\left(1 \\pm \\frac{\\sqrt{6}}{3}\\right)$, et $\\operatorname{argsh}(x) = \\ln(x + \\sqrt{x^2 + 1})$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définitions',
            stepTheme: 'blue',
            stepTitle: 'Construction de $\\cosh, \\sinh, \\tanh$ : décomposition paire/impaire de $e^x$',
            paragraphText:
              'Toute fonction $f$ définie sur $\\mathbb{R}$ se décompose de manière unique en la somme d’une fonction paire $\\frac{f(x) + f(-x)}{2}$ et d’une fonction impaire $\\frac{f(x) - f(-x)}{2}$. Appliquée à l’exponentielle $e^x$, cette décomposition donne naissance aux fonctions hyperboliques !\n' +
              '• **Cosinus hyperbolique** : $\\cosh x$ (noté aussi $\\operatorname{ch} x$) $= \\frac{e^x + e^{-x}}{2}$. Elle est **paire** ($\\cosh(-x) = \\cosh x$), $\\cosh(0) = 1$, et $\\forall x \\in \\mathbb{R},\\ \\cosh x \\geqslant 1$.\n' +
              '• **Sinus hyperbolique** : $\\sinh x$ (noté aussi $\\operatorname{sh} x$) $= \\frac{e^x - e^{-x}}{2}$. Elle est **impaire** ($\\sinh(-x) = -\\sinh x$) et $\\sinh(0) = 0$.\n' +
              '• **Tangente hyperbolique** : $\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}} = \\frac{e^{2x} - 1}{e^{2x} + 1}$. Elle est définie sur tout $\\mathbb{R}$ (car $\\cosh x \\geqslant 1 > 0$), impaire, et vérifie $-1 < \\tanh x < 1$.',
            formula: {
              name: 'Décomposition de l’exponentielle',
              formula: 'e^x = \\cosh x + \\sinh x, \\qquad e^{-x} = \\cosh x - \\sinh x',
              note: 'En multipliant ces deux égalités, on obtient instantanément cosh²x − sinh²x = eˣ·e⁻ˣ = 1 !',
            },
            keyRule:
              'Contrairement à $\\tan x$ qui a des valeurs interdites en $\\frac{\\pi}{2} + k\\pi$, la fonction $\\tanh x$ est définie et $\\mathcal{C}^\\infty$ sur tout $\\mathbb{R}$ car $\\cosh x \\geqslant 1$ ne s’annule jamais !',
            konanTip:
              'Pour résoudre n’importe quelle équation en $\\cosh x$ et $\\sinh x$, reviens toujours aux définitions en $e^x$ et $e^{-x}$, puis pose $X = e^x > 0$ pour obtenir une équation du second degré !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p3_q1',
              type: 'mcq',
              prompt:
                'Que vaut la somme $\\cosh(\\ln 2) + \\sinh(\\ln 2)$ ?',
              options: ['$1$', '$2$', '$\\frac{5}{2}$', '$\\frac{3}{2}$'],
              correctAnswerIndex: 1,
              explanation:
                'Pour tout réel $x$, $\\cosh x + \\sinh x = e^x$. En appliquant à $x = \\ln 2$, on obtient directement $e^{\\ln 2} = 2$ (vérification : $\\cosh(\\ln 2) = \\frac{2 + 1/2}{2} = \\frac{5}{4}$ et $\\sinh(\\ln 2) = \\frac{2 - 1/2}{2} = \\frac{3}{4}$, somme $\\frac{8}{4} = 2$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Formulaire',
            stepTheme: 'violet',
            stepTitle: 'Identité $\\cosh^2 x - \\sinh^2 x = 1$ et formules d’addition / duplication',
            paragraphText:
              'Les formules trigonométriques hyperboliques suivent presque toutes celles de la trigonométrie circulaire, avec une règle de signe simple (règle d’Osborn : remplacer chaque produit de deux sinus par son opposé).\n' +
              '• **Identité fondamentale** : $\\cosh^2 x - \\sinh^2 x = 1$, d’où $1 - \\tanh^2 x = \\frac{1}{\\cosh^2 x}$.\n' +
              '• **Formules d’addition** : $\\cosh(a + b) = \\cosh a \\cosh b + \\sinh a \\sinh b$ (signe **PLUS** !) et $\\sinh(a + b) = \\sinh a \\cosh b + \\cosh a \\sinh b$.\n' +
              '• **Duplication** : $\\cosh(2x) = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 1 + 2\\sinh^2 x$, et $\\sinh(2x) = 2\\sinh x \\cosh x$.',
            formula: {
              name: 'Formules hyperboliques d’addition et de duplication',
              formula: '\\cosh(a + b) = \\cosh a \\cosh b + \\sinh a \\sinh b, \\qquad \\cosh(2x) = 2\\cosh^2 x - 1, \\qquad \\sinh(2x) = 2\\sinh x \\cosh x',
              note: 'Toutes se vérifient en deux lignes en repassant aux exponentielles !',
            },
            keyRule:
              'Règle de contrôle instantané : si tu hésites sur un signe dans une formule hyperbolique, teste en $x = 0$ (où $\\cosh 0 = 1, \\sinh 0 = 0$) ou remplace par $\\frac{e^x \\pm e^{-x}}{2}$ !',
            konanTip:
              'En posant $X = \\cosh t$ et $Y = \\sinh t$, le point $(X, Y)$ parcourt la branche droite ($X \\geqslant 1$) de l’hyperbole équilatère $X^2 - Y^2 = 1$ — d’où le nom de « fonctions hyperboliques » !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p3_q2',
              type: 'mcq',
              prompt:
                'Sachant que $\\sinh(x) = \\frac{3}{4}$, quelle est la valeur exacte de $\\cosh(x)$ ?',
              options: [
                '$\\frac{\\sqrt{7}}{4}$',
                '$\\frac{5}{4}$',
                '$-\\frac{5}{4}$',
                '$\\frac{7}{4}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'De $\\cosh^2 x - \\sinh^2 x = 1$, on tire $\\cosh^2 x = 1 + \\sinh^2 x = 1 + \\frac{9}{16} = \\frac{25}{16}$. Comme $\\cosh x \\geqslant 1 > 0$ pour tout réel $x$, on obtient $\\cosh x = +\\frac{5}{4}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Dérivées & Variations',
            stepTheme: 'violet',
            stepTitle: 'Dérivées, variations et convexité de $\\cosh, \\sinh, \\tanh$',
            paragraphText:
              'La dérivation des fonctions hyperboliques est remarquablement simple et donne immédiatement leurs tableaux de variations sur tout $\\mathbb{R}$.\n' +
              '• **$\\cosh$** : $\\cosh’(x) = \\sinh(x)$ (négatif sur $]-\\infty, 0[$, positif sur $]0, +\\infty[$), donc $\\cosh$ décroît sur $]-\\infty, 0]$ jusqu’à son minimum global $\\cosh(0) = 1$, puis croît sur $[0, +\\infty[$. Comme $\\cosh’’ = \\cosh > 0$, $\\cosh$ est strictement **convexe** sur $\\mathbb{R}$.\n' +
              '• **$\\sinh$** : $\\sinh’(x) = \\cosh(x) \\geqslant 1 > 0$, donc $\\sinh$ est strictement croissante de $-\\infty$ à $+\\infty$ (bijection de $\\mathbb{R}$ sur $\\mathbb{R}$). Comme $\\sinh’’ = \\sinh$, elle est concave sur $\\mathbb{R}_-$ et convexe sur $\\mathbb{R}_+$ (point d’inflexion en $0$).\n' +
              '• **$\\tanh$** : $\\tanh’(x) = \\frac{1}{\\cosh^2 x} = 1 - \\tanh^2 x > 0$, donc $\\tanh$ est strictement croissante et bijective de $\\mathbb{R}$ sur $]-1, 1[$ !',
            formula: {
              name: 'Dérivées secondes et convexité',
              formula: '\\cosh’’ = \\cosh > 0\\ (\\text{convexe}), \\qquad \\sinh’’ = \\sinh, \\qquad \\tanh’’ = -2\\tanh(1 - \\tanh^2)',
              note: 'La dérivée de tanh vérifie l’équation différentielle autonome y’ = 1 − y² (très prisée en rétropropagation de réseaux de neurones !).',
            },
            keyRule:
              '$\\sinh$ et $\\tanh$ sont strictement croissantes sur tout $\\mathbb{R}$ (donc bijectives sans restriction !), tandis que $\\cosh$ n’est bijective qu’après restriction à $[0, +\\infty[$ (vers $[1, +\\infty[$).',
            konanTip:
              'Pour retenir que $\\cosh’ = +\\sinh$ sans signe moins, calcule mentalement la dérivée de $\\frac{e^x + e^{-x}}{2}$ : cela donne $\\frac{e^x - e^{-x}}{2} = +\\sinh x$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle est l’expression exacte de la dérivée de $f(x) = \\tanh(3x)$ sur $\\mathbb{R}$ ?',
              options: [
                '$\\frac{1}{\\cosh^2(3x)}$',
                '$3(1 - \\tanh^2(3x))$',
                '$3(1 + \\tanh^2(3x))$',
                '$-\\frac{3}{\\cosh^2(3x)}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par la règle de la chaîne avec $\\tanh’(u) = \\frac{1}{\\cosh^2 u} = 1 - \\tanh^2 u$, on obtient $f’(x) = 3 \\tanh’(3x) = \\frac{3}{\\cosh^2(3x)} = 3(1 - \\tanh^2(3x))$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'exemple',
            stepBadge: 'Courbes comparées',
            stepTheme: 'slate',
            stepTitle: 'Allure graphique comparée de $\\cosh, \\sinh$ et $\\tanh$',
            paragraphText:
              'Tracer sur un même repère $\\cosh x$, $\\sinh x$ et $\\tanh x$ fait ressortir immédiatement toutes leurs propriétés géométriques et asymptotiques.\n' +
              '• **La chaînette ($\\cosh$, en bleu)** : symétrique par rapport à l’axe des ordonnées, minimum en $(0 ; 1)$, toujours au-dessus de $y = 1$ et de la courbe de $\\sinh$ (car $\\cosh x - \\sinh x = e^{-x} > 0$). C’est la forme exacte d’un câble électrique ou d’une chaîne suspendue entre deux pylônes !\n' +
              '• **$\\sinh$ (en violet)** : passe par l’origine avec une tangente de pente $1$ ($\\sinh’(0) = 1$), et se colle asymptotiquement à $\\cosh x$ en $+\\infty$ (car $\\cosh x - \\sinh x = e^{-x} \\to 0$).\n' +
              '• **La sigmoïde centrée ($\\tanh$, en vert)** : courbe en « S » impaire coincée entre ses deux asymptotes horizontales $y = -1$ en $-\\infty$ et $y = +1$ en $+\\infty$, avec tangente $y = x$ à l’origine.',
            formula: {
              name: 'Asymptotes et positions relatives',
              formula: '\\forall x \\in \\mathbb{R},\\ \\sinh x < \\cosh x, \\quad \\lim_{x\\to+\\infty}(\\cosh x - \\sinh x) = 0, \\quad \\lim_{x\\to\\pm\\infty} \\tanh x = \\pm 1',
              note: 'En +∞ : cosh(x) ~ sinh(x) ~ eˣ / 2.',
            },
            keyRule:
              'Retiens que $\\cosh x > |\\sinh x|$ pour tout $x \\in \\mathbb{R}$ (car $\\cosh^2 x = 1 + \\sinh^2 x > \\sinh^2 x$), ce qui implique directement $|\\tanh x| < 1$ partout !',
            konanTip:
              'Note le lien direct avec la fonction sigmoïde logistique $\\sigma(x) = \\frac{1}{1 + e^{-x}}$ utilisée en machine learning : $\\tanh(x) = 2\\sigma(2x) - 1$ !',
            visualSchema: {
              type: 'function_plot',
              title: 'Représentation graphique comparée de cosh(x), sinh(x) et tanh(x)',
              caption: 'cosh(x) (bleu, chaînette ≥ 1), sinh(x) (violet, impaire) et tanh(x) (vert, bornée entre les asymptotes y = ±1).',
              plot: {
                xMin: -3,
                xMax: 3,
                yMin: -4,
                yMax: 5,
                xStep: 1,
                yStep: 1,
                curves: [
                  {
                    label: 'y = cosh(x)',
                    color: 'blue',
                    pieces: [{ expr: '(exp(x) + exp(-x))/2', from: -2.3, to: 2.3 }],
                  },
                  {
                    label: 'y = sinh(x)',
                    color: 'violet',
                    pieces: [{ expr: '(exp(x) - exp(-x))/2', from: -2.1, to: 2.3 }],
                  },
                  {
                    label: 'y = tanh(x)',
                    color: 'green',
                    pieces: [{ expr: '(exp(x) - exp(-x))/(exp(x) + exp(-x))', from: -3, to: 3 }],
                  },
                ],
                points: [
                  { x: 0, y: 1, label: '(0;1)', filled: true, color: 'blue' },
                  { x: 0, y: 0, label: '(0;0)', filled: true, color: 'green' },
                ],
                horizontalLines: [
                  { y: 1, label: 'y = 1', color: 'slate' },
                  { y: -1, label: 'y = −1', color: 'slate' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle est la limite de $\\cosh(x) - \\sinh(x)$ lorsque $x \\to +\\infty$ ?',
              options: ['$+\\infty$', '$1$', '$0$', '$-\\infty$'],
              correctAnswerIndex: 2,
              explanation:
                'Pour tout réel $x$, $\\cosh(x) - \\sinh(x) = \\frac{e^x + e^{-x}}{2} - \\frac{e^x - e^{-x}}{2} = e^{-x}$. Lorsque $x \\to +\\infty$, $e^{-x} \\to 0$ : les deux courbes se rapprochent asymptotiquement.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Équivalents & Limites',
            stepTheme: 'green',
            stepTitle: 'Limites et équivalents locaux des fonctions hyperboliques en $0$ et $\\pm\\infty$',
            paragraphText:
              'Les équivalents des fonctions hyperboliques en $0$ et en $\\pm\\infty$ permettent d’évaluer en quelques secondes des limites qui sembleraient complexes.\n' +
              '• **Au voisinage de $0$** : $\\sinh x \\sim_0 x$, $\\tanh x \\sim_0 x$, et $\\cosh x - 1 \\sim_0 \\frac{x^2}{2}$ (à comparer avec $1 - \\cos x \\sim_0 \\frac{x^2}{2}$ : ici $\\cosh x \\geqslant 1$, donc c’est $\\cosh x - 1 > 0$ !).\n' +
              '• **Au voisinage de $+\\infty$** : $e^{-x} \\to 0$, donc $\\cosh x \\sim_{+\\infty} \\frac{e^x}{2}$, $\\sinh x \\sim_{+\\infty} \\frac{e^x}{2}$, et $\\tanh x \\to 1$.\n' +
              '• **Au voisinage de $-\\infty$** : $e^x \\to 0$, donc $\\cosh x \\sim_{-\\infty} \\frac{e^{-x}}{2}$, $\\sinh x \\sim_{-\\infty} -\\frac{e^{-x}}{2}$, et $\\tanh x \\to -1$.',
            formula: {
              name: 'Équivalents hyperboliques de référence en 0',
              formula: '\\sinh x \\sim_0 x, \\qquad \\tanh x \\sim_0 x, \\qquad \\cosh x - 1 \\sim_0 \\frac{x^2}{2}',
              note: 'Preuve de cosh x − 1 ~ x²/2 : cosh x − 1 = 2 sinh²(x/2) ~ 2(x/2)² = x²/2 !',
            },
            keyRule:
              'Retiens la symétrie des signes en $0$ : $1 - \\cos x \\sim_0 \\frac{x^2}{2}$ (car $\\cos x \\leqslant 1$), mais $\\cosh x - 1 \\sim_0 \\frac{x^2}{2}$ (car $\\cosh x \\geqslant 1$) !',
            konanTip:
              'Pour $\\lim_{x\\to 0} \\frac{\\cosh(3x) - 1}{x \\sinh(2x)}$, utilise les équivalents : $\\frac{(3x)^2 / 2}{x \\cdot 2x} = \\frac{9x^2/2}{2x^2} = \\frac{9}{4}$ en une ligne !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p3_q5',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de $\\lim_{x \\to 0} \\frac{\\cosh(2x) - 1}{x \\tanh(x)}$ ?',
              options: ['$1$', '$2$', '$4$', '$\\frac{1}{2}$'],
              correctAnswerIndex: 1,
              explanation:
                'Au voisinage de $0$, $\\cosh(2x) - 1 \\sim_0 \\frac{(2x)^2}{2} = 2x^2$ et $x\\tanh(x) \\sim_0 x \\cdot x = x^2$. Le quotient est donc équivalent en $0$ à $\\frac{2x^2}{x^2} = 2$, qui est la limite.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Réciproques & IA',
            stepTheme: 'violet',
            stepTitle: 'Fonctions hyperboliques réciproques ($\\operatorname{argsh}, \\operatorname{argch}, \\operatorname{argth}$) et activation en IA',
            paragraphText:
              'Contrairement à $\\arcsin$ et $\\arctan$, les fonctions hyperboliques réciproques s’expriment explicitement à l’aide du logarithme népérien !\n' +
              '• **$\\operatorname{argsh} : \\mathbb{R} \\to \\mathbb{R}$** : $\\operatorname{argsh}(x) = \\ln(x + \\sqrt{x^2 + 1})$, impaire, dérivable sur tout $\\mathbb{R}$ avec $\\operatorname{argsh}’(x) = \\frac{1}{\\sqrt{x^2 + 1}}$.\n' +
              '• **$\\operatorname{argch} : [1, +\\infty[ \\to [0, +\\infty[$** : réciproque de $\\cosh|_{[0,+\\infty[}$, $\\operatorname{argch}(x) = \\ln(x + \\sqrt{x^2 - 1})$, dérivable sur $]1, +\\infty[$ avec $\\operatorname{argch}’(x) = \\frac{1}{\\sqrt{x^2 - 1}}$.\n' +
              '• **$\\operatorname{argth} : ]-1, 1[ \\to \\mathbb{R}$** : $\\operatorname{argth}(x) = \\frac{1}{2}\\ln\\left(\\frac{1 + x}{1 - x}\\right)$, dérivable sur $]-1, 1[$ avec $\\operatorname{argth}’(x) = \\frac{1}{1 - x^2}$.\n' +
              '• **Application en Deep Learning** : la fonction $\\tanh$ est utilisée comme fonction d’activation dans les réseaux de neurones car elle est centrée en $0$ (contrairement à la sigmoïde), bornée dans $]-1, 1[$, et sa dérivée $1 - \\tanh^2(x)$ se recalcule gratuitement à partir de sa sortie !',
            formula: {
              name: 'Dérivées des fonctions hyperboliques réciproques',
              formula: '\\operatorname{argsh}’(x) = \\frac{1}{\\sqrt{x^2 + 1}}, \\qquad \\operatorname{argch}’(x) = \\frac{1}{\\sqrt{x^2 - 1}}\\ (x > 1), \\qquad \\operatorname{argth}’(x) = \\frac{1}{1 - x^2}\\ (|x| < 1)',
              note: 'Compare avec arctan’(x) = 1/(1 + x²) et arcsin’(x) = 1/√(1 − x²) !',
            },
            keyRule:
              'En calcul intégral, $\\frac{1}{\\sqrt{1 - x^2}}$ s’intègre en $\\arcsin x$, $\\frac{1}{\\sqrt{x^2 + 1}}$ en $\\operatorname{argsh} x$, $\\frac{1}{\\sqrt{x^2 - 1}}$ en $\\operatorname{argch} x$, $\\frac{1}{1 + x^2}$ en $\\arctan x$, et $\\frac{1}{1 - x^2}$ en $\\operatorname{argth} x$ !',
            konanTip:
              'Pour retrouver $\\operatorname{argth}(x) = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$ sans l’apprendre bêtement : écris $x = \\frac{e^{2y} - 1}{e^{2y} + 1}$, isole $e^{2y} = \\frac{1+x}{1-x}$, puis prends $\\frac{1}{2}\\ln$ !',
            exercise: {
              id: 'lmd_entd_l1_analyse_ch5_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle est la dérivée de la fonction $f(x) = \\operatorname{argth}(x) = \\frac{1}{2}\\ln\\left(\\frac{1 + x}{1 - x}\\right)$ sur $]-1, 1[$ ?',
              options: [
                '$\\frac{1}{1 + x^2}$',
                '$\\frac{1}{1 - x^2}$',
                '$\\frac{1}{\\sqrt{1 - x^2}}$',
                '$\\frac{2}{1 - x^2}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'En écrivant $f(x) = \\frac{1}{2}[\\ln(1 + x) - \\ln(1 - x)]$, on dérive : $f’(x) = \\frac{1}{2}\\left(\\frac{1}{1 + x} - \\frac{-1}{1 - x}\\right) = \\frac{1}{2}\\left(\\frac{(1 - x) + (1 + x)}{1 - x^2}\\right) = \\frac{1}{1 - x^2}$.',
            },
          },
        ],
      }),
    ],
  },
];
