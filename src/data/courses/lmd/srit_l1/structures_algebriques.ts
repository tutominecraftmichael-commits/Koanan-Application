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

export const STRUCTURES_ALGEBRIQUES_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : LOIS DE COMPOSITION, GROUPES, MORPHISMES ET GROUPE SYMÉTRIQUE
  // ============================================================================
  {
    id: 'lmd_srit_l1_struct_alg_ch1',
    subjectId: 'lmd_structures_algebriques',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'Programme LMD — SRIT 1 Semestre 1 (ECUE Structures Algébriques — 2MTH3100)',
    title: 'Groupes, Sous-groupes, Morphismes et Groupe Symétrique',
    summary:
      'Lois de composition interne, axiomes de groupe, sous-groupes, théorème de Lagrange, morphismes (noyau et image), groupes cycliques Z/nZ et groupe symétrique Sn (cycles disjoints, ordre, signature).',
    points: [
      makePoint({
        id: 'srit_l1_sa_c1_p1',
        order: 1,
        title: 'Lois de composition interne, Groupes et Sous-groupes',
        summary:
          'Maîtriser les propriétés d’une loi de composition interne, la structure de groupe, la caractérisation des sous-groupes et le théorème de Lagrange.',
        conceptExplanation:
          'Une loi de composition interne (LCI) sur un ensemble non vide $G$ est une application de $G \\times G$ dans $G$. Lorsqu’elle est associative, possède un élément neutre $e$ et que tout élément admet un symétrique dans $G$, le couple $(G, *)$ est un groupe. Si la loi est de plus commutative, le groupe est dit abélien. L’étude des sous-groupes et du théorème de Lagrange permet de relier la structure algébrique au cardinal des groupes finis.',
        keyRule:
          'Pour prouver que $H \\subset G$ est un sous-groupe, vérifier les deux conditions : $H \\neq \\emptyset$ (souvent $e \\in H$) et $\\forall (x,y) \\in H^2, x * y^{-1} \\in H$.',
        formulas: [
          {
            name: 'Critère de sous-groupe',
            formula: 'H \\text{ sous-groupe de } (G,*) \\iff H \\neq \\emptyset \\text{ et } \\forall (x,y)\\in H^2,\\; x * y^{-1} \\in H',
            note: 'En notation additive, la condition devient x - y ∈ H.',
          },
          {
            name: 'Théorème de Lagrange',
            formula: '|G| = [G:H] \\cdot |H|',
            note: 'Dans un groupe fini, l’ordre de tout sous-groupe (et de tout élément) divise l’ordre du groupe.',
          },
        ],
        workedExample: {
          title: 'Ordre d’un sous-groupe et éléments inversibles dans un groupe fini',
          statement:
            'Soit $G$ un groupe fini d’ordre $35$. Quels sont les ordres possibles d’un sous-groupe propre non trivial $H$ de $G$ ? Si $a \\in G \\setminus \\{e\\}$, quel peut être l’ordre de $a$ ?',
          methodSteps: [
            'D’après le théorème de Lagrange, l’ordre $|H|$ de tout sous-groupe $H$ de $G$ divise $|G| = 35$.',
            'Les diviseurs positifs de $35 = 5 \\times 7$ sont $1, 5, 7$ et $35$.',
            'Un sous-groupe propre non trivial vérifie $1 < |H| < 35$, donc $|H| \\in \\{5, 7\\}$.',
            'L’ordre d’un élément $a \\neq e$ est l’ordre du sous-groupe monogène $\\langle a \\rangle$ qu’il engendre : il divise $35$ et est différent de $1$, donc $\\text{ord}(a) \\in \\{5, 7, 35\\}$.',
          ],
          conclusion:
            'Tout sous-groupe propre non trivial de $G$ est d’ordre $5$ ou $7$ (et est donc cyclique car $5$ et $7$ sont premiers).',
        },
        visualSchema: {
          type: 'layered_stack',
          title: 'Hiérarchie des structures à une loi de composition interne',
          caption: 'Chaque niveau ajoute un axiome supplémentaire à la loi de composition interne.',
          layeredStack: {
            style: 'pyramid',
            layers: [
              {
                badge: 'Niveau 4',
                title: 'Groupe abélien (commutatif)',
                subtitle: 'Groupe + Commutativité : ∀x,y ∈ G, x * y = y * x',
                color: 'green',
              },
              {
                badge: 'Niveau 3',
                title: 'Groupe (G, *)',
                subtitle: 'Monoïde + Tout élément est symétrisable : ∀x ∈ G, ∃x⁻¹ ∈ G, x * x⁻¹ = x⁻¹ * x = e',
                color: 'violet',
              },
              {
                badge: 'Niveau 2',
                title: 'Monoïde',
                subtitle: 'Demi-groupe + Élément neutre unique e : ∀x ∈ G, x * e = e * x = x',
                color: 'blue',
              },
              {
                badge: 'Niveau 1',
                title: 'Magma & Demi-groupe',
                subtitle: 'Loi interne (G × G → G) + Associativité : (x * y) * z = x * (y * z)',
                color: 'slate',
              },
            ],
          },
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'LCI & Propriétés',
            stepTheme: 'blue',
            stepTitle: 'Loi de composition interne, associativité et élément neutre',
            paragraphText:
              'Une **loi de composition interne** (LCI) sur un ensemble $E$ est une application $*$ de $E \\times E$ dans $E$ qui à tout couple $(x,y)$ associe $x * y \\in E$. La loi est **associative** si $\\forall x,y,z \\in E, (x * y) * z = x * (y * z)$, et **commutative** si $\\forall x,y \\in E, x * y = y * x$. Un élément $e \\in E$ est **élément neutre** si $\\forall x \\in E, x * e = e * x = x$ ; lorsqu’il existe, l’élément neutre est **unique**.',
            formula: {
              name: 'Unicité de l’élément neutre',
              formula: 'e \\text{ et } e\' \\text{ neutres} \\implies e = e * e\' = e\'',
              note: 'Un élément neutre doit fonctionner à gauche ET à droite.',
            },
            keyRule:
              'Toujours vérifier que $x * y$ appartient bien à $E$ (stabilité) avant de tester l’associativité ou l’élément neutre.',
            konanTip:
              'Sur $\\mathbb{R}$, la loi $x * y = x + y + xy$ admet $e = 0$ comme élément neutre car $x * 0 = x + 0 + 0 = x$.',
            exercise: {
              id: 'srit_l1_sa_c1_p1_s1',
              type: 'mcq',
              prompt:
                'Sur $\\mathbb{R}$, on définit la loi de composition interne $x * y = x + y - 3$. Quel est l’élément neutre $e$ de cette loi ?',
              options: ['$e = 3$', '$e = 0$', '$e = -3$', '$e = 1$'],
              correctAnswerIndex: 0,
              explanation:
                'On cherche $e \\in \\mathbb{R}$ tel que $\\forall x \\in \\mathbb{R}, x * e = x$, soit $x + e - 3 = x$, d’où $e = 3$. Comme la loi est commutative, $3 * x = x$ est aussi vérifié.',
              hint: 'Résolvez l’équation $x + e - 3 = x$ d’inconnue $e$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Groupe',
            stepTheme: 'blue',
            stepTitle: 'Axiomes d’un groupe et règles de calcul sur les symétriques',
            paragraphText:
              'Un ensemble non vide $G$ muni d’une LCI $*$ est un **groupe** si : (1) $*$ est associative, (2) $(G,*)$ possède un élément neutre $e$, (3) tout élément $x \\in G$ possède un **symétrique** (ou inverse) $x^{-1} \\in G$ tel que $x * x^{-1} = x^{-1} * x = e$. Si de plus $*$ est commutative, $(G,*)$ est un **groupe abélien**. Dans tout groupe, le symétrique est unique, tout élément est régulier (simplifiable à gauche et à droite) et $(x * y)^{-1} = y^{-1} * x^{-1}$.',
            formula: {
              name: 'Inverse d’un produit dans un groupe',
              formula: '\\forall (x,y)\\in G^2,\\quad (x * y)^{-1} = y^{-1} * x^{-1}',
              note: 'Attention à l’inversion de l’ordre des facteurs lorsque le groupe n’est pas abélien !',
            },
            keyRule:
              'Dans un groupe non commutatif (comme $GL_n(\\mathbb{R})$ ou $\\mathfrak{S}_n$), $(xy)^{-1} = y^{-1}x^{-1}$ et non $x^{-1}y^{-1}$.',
            konanTip:
              'Si tous les éléments d’un groupe vérifient $x^2 = e$, alors le groupe est nécessairement abélien car $xy = (xy)^{-1} = y^{-1}x^{-1} = yx$.',
            exercise: {
              id: 'srit_l1_sa_c1_p1_s2',
              type: 'mcq',
              prompt:
                'On munit $G = \\mathbb{R} \\setminus \\{-1\\}$ de la loi associative $x * y = x + y + xy$ d’élément neutre $e = 0$. Quel est le symétrique $x^{-1}$ d’un élément $x \\in G$ ?',
              options: [
                '$x^{-1} = \\dfrac{-x}{1 + x}$',
                '$x^{-1} = -x$',
                '$x^{-1} = \\dfrac{1}{1 + x}$',
                '$x^{-1} = \\dfrac{x}{1 - x}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On résout $x * y = 0 \\iff x + y + xy = 0 \\iff y(1 + x) = -x$. Comme $x \\neq -1$, on a $1+x \\neq 0$ et $y = \\frac{-x}{1+x}$. De plus $\\frac{-x}{1+x} \\neq -1$ car $-x = -1 - x$ est impossible.',
              hint: 'Résolvez $x + y + xy = 0$ en factorisant par $y$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Sous-groupe',
            stepTheme: 'green',
            stepTitle: 'Caractérisation pratique d’un sous-groupe',
            paragraphText:
              'Une partie $H$ d’un groupe $(G,*)$ est un **sous-groupe** de $G$ si $H$ est non vide, stable par $*$ et stable par passage au symétrique. En pratique, on utilise la caractérisation condensée en deux points : (1) $e \\in H$ (donc $H \\neq \\emptyset$), (2) $\\forall (x,y) \\in H^2, x * y^{-1} \\in H$. En notation additive $(G,+)$, cette condition s’écrit $0_G \\in H$ et $\\forall (x,y) \\in H^2, x - y \\in H$.',
            formula: {
              name: 'Sous-groupes de (Z, +)',
              formula: 'H \\text{ sous-groupe de } (\\mathbb{Z}, +) \\iff \\exists n \\in \\mathbb{N},\\; H = n\\mathbb{Z}',
              note: 'Tous les sous-groupes de (Z, +) sont de la forme nZ (multiples de n).',
            },
            keyRule:
              'Une intersection quelconque $\\bigcap_{i \\in I} H_i$ de sous-groupes est toujours un sous-groupe, mais la réunion $H_1 \\cup H_2$ n’est un sous-groupe que si $H_1 \\subset H_2$ ou $H_2 \\subset H_1$.',
            konanTip:
              'En QCM, méfiez-vous de $\\mathbb{N}$ dans $(\\mathbb{Z}, +)$ : il est stable par addition et contient $0$, mais ce n’est PAS un sous-groupe car les opposés manquent.',
            exercise: {
              id: 'srit_l1_sa_c1_p1_s3',
              type: 'mcq',
              prompt:
                'Dans le groupe additif $(\\mathbb{Z}, +)$, quel est le sous-groupe engendré par la réunion $12\\mathbb{Z} \\cup 18\\mathbb{Z}$, c’est-à-dire la somme $12\\mathbb{Z} + 18\\mathbb{Z}$ ?',
              options: ['$6\\mathbb{Z}$', '$36\\mathbb{Z}$', '$2\\mathbb{Z}$', '$30\\mathbb{Z}$'],
              correctAnswerIndex: 0,
              explanation:
                'Dans $(\\mathbb{Z},+)$, $a\\mathbb{Z} + b\\mathbb{Z} = d\\mathbb{Z}$ où $d = \\text{PGCD}(a,b)$ (d’après le théorème de Bézout). Or $\\text{PGCD}(12, 18) = 6$, donc $12\\mathbb{Z} + 18\\mathbb{Z} = 6\\mathbb{Z}$. (À l’inverse, l’intersection est $12\\mathbb{Z} \\cap 18\\mathbb{Z} = \\text{PPCM}(12,18)\\mathbb{Z} = 36\\mathbb{Z}$).',
              hint: 'La somme $a\\mathbb{Z} + b\\mathbb{Z}$ correspond au PGCD de $a$ et $b$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Sous-groupe engendré',
            stepTheme: 'violet',
            stepTitle: 'Sous-groupe engendré par une partie et ordre d’un élément',
            paragraphText:
              'Pour toute partie $A \\subset G$, le **sous-groupe engendré** par $A$, noté $\\langle A \\rangle$, est le plus petit sous-groupe de $G$ contenant $A$ (intersection de tous les sous-groupes contenant $A$). Lorsque $A = \\{a\\}$ est un singleton, $\\langle a \\rangle = \\{a^k \\mid k \\in \\mathbb{Z}\\}$ est un groupe **monogène**. S’il existe $n \\in \\mathbb{N}^*$ tel que $a^n = e$, le plus petit tel entier $n$ est appelé l’**ordre** de $a$, noté $\\text{ord}(a)$, et on a $|\\langle a \\rangle| = \\text{ord}(a)$.',
            formula: {
              name: 'Propriété fondamentale de l’ordre d’un élément',
              formula: '\\text{Si } \\text{ord}(a) = n,\\quad a^k = e \\iff n \\mid k \\quad \\text{et} \\quad \\text{ord}(a^k) = \\frac{n}{\\text{PGCD}(n, k)}',
              note: 'Formule essentielle pour calculer l’ordre d’une puissance d’un élément.',
            },
            keyRule:
              'Pour montrer que $a^k = e$ implique $\\text{ord}(a) = n$, il ne suffit pas que $a^n = e$ : il faut aussi vérifier que $a^d \\neq e$ pour tout diviseur strict $d$ de $n$.',
            konanTip:
              'Retenez par cœur $\\text{ord}(a^k) = \\frac{n}{\\text{PGCD}(n,k)}$ : c’est l’une des questions les plus fréquentes aux partiels d’algèbre.',
            exercise: {
              id: 'srit_l1_sa_c1_p1_s4',
              type: 'mcq',
              prompt:
                'Soit $a$ un élément d’ordre $24$ dans un groupe $G$. Quel est l’ordre de l’élément $b = a^{15}$ ?',
              options: ['$8$', '$3$', '$15$', '$24$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après la formule $\\text{ord}(a^k) = \\frac{n}{\\text{PGCD}(n,k)}$ avec $n = 24$ et $k = 15$, on a $\\text{PGCD}(24, 15) = 3$, donc $\\text{ord}(a^{15}) = \\frac{24}{3} = 8$.',
              hint: 'Utilisez $\\text{ord}(a^k) = \\frac{n}{\\text{PGCD}(n,k)}$ avec $n=24$ et $k=15$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Lagrange',
            stepTheme: 'violet',
            stepTitle: 'Classes modulo un sous-groupe et théorème de Lagrange',
            paragraphText:
              'Soit $H$ un sous-groupe d’un groupe fini $G$. La relation $x \\sim y \\iff x^{-1}y \\in H$ est une relation d’équivalence dont les classes à gauche $xH = \\{xh \\mid h \\in H\\}$ forment une partition de $G$, chacune ayant exactement $|H|$ éléments. Le nombre de classes est l’**indice** $[G:H]$. On en déduit le **théorème de Lagrange** : l’ordre $|H|$ de tout sous-groupe de $G$ divise l’ordre $|G|$ du groupe.',
            formula: {
              name: 'Conséquences du théorème de Lagrange',
              formula: '\\forall x \\in G,\\quad \\text{ord}(x) \\mid |G| \\quad \\text{et} \\quad x^{|G|} = e',
              note: 'Tout groupe d’ordre premier p est nécessairement cyclique (isomorphe à Z/pZ).',
            },
            keyRule:
              'Si $|G| = p$ est un nombre premier, tout élément $a \\neq e$ est d’ordre $p$ et engendre $G$ tout entier : $G$ est cyclique et n’a aucun sous-groupe propre non trivial.',
            konanTip:
              'La réciproque du théorème de Lagrange est FAUSSE en général : le groupe alterné $\\mathfrak{A}_4$ est d’ordre $12$, mais il ne possède aucun sous-groupe d’ordre $6$.',
            exercise: {
              id: 'srit_l1_sa_c1_p1_s5',
              type: 'mcq',
              prompt:
                'Soit $G$ un groupe fini d’ordre $29$. Combien de sous-groupes distincts le groupe $G$ possède-t-il au total ?',
              options: [
                '$2$ sous-groupes (uniquement $\\{e\\}$ et $G$)',
                '$1$ seul sous-groupe',
                '$3$ sous-groupes',
                '$29$ sous-groupes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après le théorème de Lagrange, l’ordre de tout sous-groupe $H$ de $G$ divise $|G| = 29$. Comme $29$ est un nombre premier, ses seuls diviseurs sont $1$ et $29$, ce qui correspond uniquement au sous-groupe trivial $\\{e\\}$ et au groupe $G$ lui-même.',
              hint: 'L’ordre d’un sous-groupe doit diviser $29$, qui est un nombre premier.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège Classique',
            stepTheme: 'orange',
            stepTitle: 'Sous-groupe distingué (normal) et groupe quotient G/H',
            paragraphText:
              'Pour que l’ensemble des classes $G/H$ puisse être muni d’une structure de groupe quotient par $(xH)(yH) = (xy)H$, il ne suffit pas que $H$ soit un sous-groupe : il faut que $H$ soit **distingué** (ou normal) dans $G$, noté $H \\triangleleft G$, c’est-à-dire $\\forall g \\in G, gHg^{-1} = H$ (classes à gauche et à droite confondues : $gH = Hg$). Dans un groupe abélien, tout sous-groupe est automatiquement distingué.',
            formula: {
              name: 'Caractérisation d’un sous-groupe distingué',
              formula: 'H \\triangleleft G \\iff \\forall g \\in G,\\; \\forall h \\in H,\\; g h g^{-1} \\in H',
              note: 'Lorsque H ◁ G et G est fini, le groupe quotient G/H est d’ordre |G/H| = |G| / |H|.',
            },
            keyRule:
              'Tout sous-groupe d’indice $[G:H] = 2$ est automatiquement distingué dans $G$.',
            konanTip:
              'Le noyau $\\ker f$ de n’importe quel morphisme de groupes $f : G \\to G\'$ est toujours un sous-groupe distingué de $G$.',
            exercise: {
              id: 'srit_l1_sa_c1_p1_s6',
              type: 'mcq',
              prompt:
                'Quelle condition est nécessaire et suffisante pour qu’un sous-groupe $H$ d’un groupe $(G,*)$ soit distingué ($H \\triangleleft G$) ?',
              options: [
                '$\\forall g \\in G,\\; \\forall h \\in H,\\; g * h * g^{-1} \\in H$',
                '$\\forall (x,y) \\in H^2,\\; x * y = y * x$',
                '$\\forall g \\in G,\\; g^2 \\in H$',
                '$|H|$ est un nombre premier',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un sous-groupe $H$ est distingué dans $G$ si et seulement s’il est stable par conjugaison par tout élément de $G$, c’est-à-dire $\\forall g \\in G, \\forall h \\in H, g * h * g^{-1} \\in H$ (ce qui équivaut à $gH = Hg$).',
              hint: 'Un sous-groupe distingué est invariant par conjugaison $g h g^{-1}$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'srit_l1_sa_c1_p2',
        order: 2,
        title: 'Morphismes de groupes, Noyau, Image et Groupes cycliques Z/nZ',
        summary:
          'Étudier les morphismes de groupes, la caractérisation de l’injectivité par le noyau, le premier théorème d’isomorphisme et la structure des groupes cycliques Z/nZ.',
        conceptExplanation:
          'Un morphisme de groupes est une application entre deux groupes qui préserve la loi de composition. Son noyau $\\ker f$ mesure le défaut d’injectivité tandis que son image $\\text{Im} f$ mesure la surjectivité. Les groupes cycliques, tous isomorphes à $(\\mathbb{Z}/n\\mathbb{Z}, +)$ lorsqu’ils sont finis d’ordre $n$, constituent les briques fondamentales de la théorie des groupes abéliens et de l’arithmétique modulaire.',
        keyRule:
          'Un morphisme de groupes $f : G \\to G\'$ est injectif si et seulement si $\\ker f = \\{e_G\\}$.',
        formulas: [
          {
            name: 'Noyau et Image d’un morphisme',
            formula: '\\ker f = \\{x \\in G \\mid f(x) = e_{G\'}\\}, \\qquad \\text{Im } f = \\{f(x) \\mid x \\in G\\}',
            note: 'ker f est un sous-groupe distingué de G, et Im f est un sous-groupe de G\'.',
          },
          {
            name: 'Générateurs du groupe cyclique Z/nZ',
            formula: '\\bar{k} \\text{ engendre } (\\mathbb{Z}/n\\mathbb{Z}, +) \\iff \\text{PGCD}(k, n) = 1',
            note: 'Le nombre de générateurs de Z/nZ est donné par l’indicatrice d’Euler φ(n).',
          },
        ],
        workedExample: {
          title: 'Générateurs et sous-groupes de (Z/12Z, +)',
          statement:
            'Dans le groupe additif $(\\mathbb{Z}/12\\mathbb{Z}, +)$, déterminer tous les générateurs du groupe ainsi que l’ordre de l’élément $\\bar{8}$.',
          methodSteps: [
            'Une classe $\\bar{k}$ engendre $(\\mathbb{Z}/12\\mathbb{Z}, +)$ si et seulement si $\\text{PGCD}(k, 12) = 1$.',
            'Parmi $k \\in \\{0, 1, \\dots, 11\\}$, les entiers premiers avec $12$ sont $1, 5, 7, 11$.',
            'Il y a donc $\\varphi(12) = 4$ générateurs : $\\bar{1}, \\bar{5}, \\bar{7}$ et $\\overline{11}$.',
            'Pour $\\bar{8}$, son ordre additif est $\\text{ord}(\\bar{8}) = \\frac{12}{\\text{PGCD}(12, 8)} = \\frac{12}{4} = 3$. En effet, $\\langle \\bar{8} \\rangle = \\{\\bar{0}, \\bar{8}, \\bar{4}\\}$.',
          ],
          conclusion:
            'Les générateurs de $\\mathbb{Z}/12\\mathbb{Z}$ sont $\\bar{1}, \\bar{5}, \\bar{7}, \\overline{11}$, et l’élément $\\bar{8}$ est d’ordre $3$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Morphisme',
            stepTheme: 'blue',
            stepTitle: 'Morphisme de groupes et propriétés élémentaires',
            paragraphText:
              'Soient $(G, *)$ et $(G\', \\star)$ deux groupes d’éléments neutres respectifs $e$ et $e\'$. Une application $f : G \\to G\'$ est un **morphisme de groupes** si $\\forall (x,y) \\in G^2, f(x * y) = f(x) \\star f(y)$. Tout morphisme vérifie automatiquement $f(e) = e\'$ et $\\forall x \\in G, f(x^{-1}) = (f(x))^{-1}$, ainsi que $\\forall k \\in \\mathbb{Z}, f(x^k) = (f(x))^k$. Un morphisme bijectif est appelé un **isomorphisme**.',
            formula: {
              name: 'Propriétés fondamentales d’un morphisme',
              formula: 'f(x * y) = f(x) \\star f(y) \\implies f(e_G) = e_{G\'} \\text{ et } f(x^{-1}) = (f(x))^{-1}',
              note: 'Si f(e_G) ≠ e_{G\'}, alors f ne peut absolument pas être un morphisme de groupes.',
            },
            keyRule:
              'Le logarithme $\\ln : (\\mathbb{R}_+^*, \\times) \\to (\\mathbb{R}, +)$ et l’exponentielle $\\exp : (\\mathbb{R}, +) \\to (\\mathbb{R}_+^*, \\times)$ sont les exemples canoniques d’isomorphismes de groupes.',
            konanTip:
              'Le déterminant $\\det : (GL_n(\\mathbb{R}), \\times) \\to (\\mathbb{R}^*, \\times)$ est un morphisme de groupes car $\\det(AB) = \\det(A)\\det(B)$.',
            exercise: {
              id: 'srit_l1_sa_c1_p2_s1',
              type: 'mcq',
              prompt:
                'Laquelle des applications suivantes est un morphisme de groupes ?',
              options: [
                '$f : (\\mathbb{R}, +) \\to (\\mathbb{R}_+^*, \\times)$ définie par $f(x) = e^{3x}$',
                '$g : (\\mathbb{R}, +) \\to (\\mathbb{R}, +)$ définie par $g(x) = 2x + 1$',
                '$h : (\\mathbb{R}^*, \\times) \\to (\\mathbb{R}^*, \\times)$ définie par $h(x) = -x$',
                '$k : (\\mathbb{R}, +) \\to (\\mathbb{R}, +)$ définie par $k(x) = x^2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $f(x) = e^{3x}$, on a $f(x+y) = e^{3(x+y)} = e^{3x} \\times e^{3y} = f(x)f(y)$. En revanche, $g(0) = 1 \\neq 0$, $h(1) = -1 \\neq 1$ et $(x+y)^2 \\neq x^2 + y^2$.',
              hint: 'Vérifiez d’abord que l’image du neutre du groupe de départ est le neutre du groupe d’arrivée.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Noyau & Image',
            stepTheme: 'violet',
            stepTitle: 'Noyau ker f, Image Im f et critère d’injectivité',
            paragraphText:
              'Pour un morphisme de groupes $f : (G,*) \\to (G\',\\star)$, le **noyau** $\\ker f = \\{x \\in G \\mid f(x) = e\'\\}$ est un sous-groupe distingué de $G$, et l’**image** $\\text{Im } f = f(G)$ est un sous-groupe de $G\'$. Le théorème fondamental affirme que $f$ est **injectif si et seulement si $\\ker f = \\{e\\}$**, et $f$ est **surjectif si et seulement si $\\text{Im } f = G\'$**.',
            formula: {
              name: 'Caractérisation de l’injectivité par le noyau',
              formula: 'f \\text{ est injectif} \\iff \\ker f = \\{e_G\\}',
              note: 'Inutile de revenir à f(x) = f(y) ⇒ x = y : il suffit de résoudre f(x) = e_{G\'}.',
            },
            keyRule:
              'En notation additive, le neutre est $0$, donc $\\ker f = \\{x \\in G \\mid f(x) = 0\\}$ ; en notation multiplicative, le neutre est $1$, donc $\\ker f = \\{x \\in G \\mid f(x) = 1\\}$.',
            konanTip:
              'Attention au piège : pour $f : (\\mathbb{C}^*, \\times) \\to (\\mathbb{R}_+^*, \\times)$ définie par $f(z) = |z|$, le neutre d’arrivée est $1$, donc $\\ker f = \\{z \\in \\mathbb{C}^* \\mid |z| = 1\\} = \\mathbb{U}$ (le cercle unité) !',
            exercise: {
              id: 'srit_l1_sa_c1_p2_s2',
              type: 'mcq',
              prompt:
                'Soit le morphisme de groupes $f : (\\mathbb{C}^*, \\times) \\to (\\mathbb{C}^*, \\times)$ défini par $f(z) = z^4$. Quel est le noyau $\\ker f$ de ce morphisme ?',
              options: [
                '$\\{1, -1, i, -i\\}$',
                '$\\{0\\}$',
                '$\\{1\\}$',
                '$\\{1, -1\\}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le neutre du groupe multiplicatif $(\\mathbb{C}^*, \\times)$ est $1$. Donc $\\ker f = \\{z \\in \\mathbb{C}^* \\mid z^4 = 1\\} = \\mathbb{U}_4 = \\{1, -1, i, -i\\}$.',
              hint: 'Dans $(\\mathbb{C}^*, \\times)$, l’élément neutre est $1$, donc $\\ker f$ est l’ensemble des racines quatrièmes de l’unité.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Isomorphisme',
            stepTheme: 'violet',
            stepTitle: 'Premier théorème d’isomorphisme et ordre de l’image',
            paragraphText:
              'Si $f : G \\to G\'$ est un morphisme de groupes, alors le noyau $\\ker f$ est distingué dans $G$ et le **premier théorème d’isomorphisme** établit que le groupe quotient $G / \\ker f$ est isomorphe au sous-groupe image $\\text{Im } f$ : $G / \\ker f \\simeq \\text{Im } f$. Lorsque $G$ est un groupe fini, on en déduit la relation sur les cardinaux : $|G| = |\\ker f| \\times |\\text{Im } f|$. De plus, pour tout $x \\in G$ d’ordre fini, l’ordre de $f(x)$ divise l’ordre de $x$.',
            formula: {
              name: 'Premier théorème d’isomorphisme',
              formula: 'G / \\ker f \\simeq \\text{Im } f \\quad \\text{et si } G \\text{ est fini : } |G| = |\\ker f| \\cdot |\\text{Im } f|',
              note: 'Si f est un isomorphisme, alors ord(f(x)) = ord(x) pour tout x ∈ G.',
            },
            keyRule:
              'Deux groupes finis sont isomorphes seulement s’ils ont le même cardinal et le même nombre d’éléments de chaque ordre.',
            konanTip:
              'Pour prouver que $(\\mathbb{Z}/4\\mathbb{Z}, +)$ et $(\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}, +)$ ne sont PAS isomorphes, observez que $\\mathbb{Z}/4\\mathbb{Z}$ possède un élément d’ordre $4$ alors que tout élément du second groupe est d’ordre $\\le 2$.',
            exercise: {
              id: 'srit_l1_sa_c1_p2_s3',
              type: 'mcq',
              prompt:
                'Soit $f : G \\to G\'$ un morphisme surjectif d’un groupe fini $G$ d’ordre $60$ sur un groupe $G\'$ d’ordre $15$. Quel est le cardinal du noyau $\\ker f$ ?',
              options: ['$4$', '$15$', '$45$', '$1$'],
              correctAnswerIndex: 0,
              explanation:
                'Comme $f$ est surjectif, $\\text{Im } f = G\'$ donc $|\\text{Im } f| = 15$. D’après le premier théorème d’isomorphisme, $|G| = |\\ker f| \\cdot |\\text{Im } f|$, soit $60 = |\\ker f| \\times 15$, d’où $|\\ker f| = 4$.',
              hint: 'Utilisez la formule $|G| = |\\ker f| \\times |\\text{Im } f|$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Groupe Z/nZ',
            stepTheme: 'blue',
            stepTitle: 'Groupes monogènes, groupes cycliques et structure de (Z/nZ, +)',
            paragraphText:
              'Un groupe $G$ est dit **monogène** s’il est engendré par un seul élément $a \\in G$ : $G = \\langle a \\rangle$. Un groupe monogène **fini** est appelé un **groupe cyclique**. Tout groupe monogène infini est isomorphe à $(\\mathbb{Z}, +)$, et tout groupe cyclique d’ordre $n \\ge 1$ est isomorphe au groupe quotient $(\\mathbb{Z}/n\\mathbb{Z}, +) = \\{\\bar{0}, \\bar{1}, \\dots, \\overline{n-1}\\}$ muni de l’addition des classes $\\bar{x} + \\bar{y} = \\overline{x+y}$ modulo $n$.',
            formula: {
              name: 'Ordre additif d’une classe dans (Z/nZ, +)',
              formula: '\\forall \\bar{k} \\in \\mathbb{Z}/n\\mathbb{Z},\\quad \\text{ord}(\\bar{k}) = \\frac{n}{\\text{PGCD}(n, k)}',
              note: 'Le neutre est 0̄ (d’ordre 1) et l’opposé de k̄ est −k̄ = (n − k)̄.',
            },
            keyRule:
              'Dans $(\\mathbb{Z}/n\\mathbb{Z}, +)$, la loi est ADDITIVE : la puissance $m$-ième de $\\bar{k}$ s’écrit $m \\cdot \\bar{k} = \\overline{mk}$, et l’élément neutre est $\\bar{0}$.',
            konanTip:
              'Tout sous-groupe d’un groupe cyclique d’ordre $n$ est lui-même cyclique, et pour chaque diviseur $d$ de $n$, il existe un unique sous-groupe d’ordre $d$.',
            exercise: {
              id: 'srit_l1_sa_c1_p2_s4',
              type: 'mcq',
              prompt:
                'Dans le groupe additif $(\\mathbb{Z}/18\\mathbb{Z}, +)$, quel est l’ordre de l’élément $\\overline{12}$ ?',
              options: ['$3$', '$6$', '$2$', '$12$'],
              correctAnswerIndex: 0,
              explanation:
                'L’ordre de $\\overline{12}$ dans $(\\mathbb{Z}/18\\mathbb{Z}, +)$ vaut $\\frac{18}{\\text{PGCD}(18, 12)} = \\frac{18}{6} = 3$. En effet, $3 \\times \\overline{12} = \\overline{36} = \\bar{0}$ modulo $18$.',
              hint: 'Calculez $\\frac{18}{\\text{PGCD}(18, 12)}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Générateurs & Euler',
            stepTheme: 'green',
            stepTitle: 'Générateurs de (Z/nZ, +) et indicatrice d’Euler φ(n)',
            paragraphText:
              'Un élément $\\bar{k} \\in \\mathbb{Z}/n\\mathbb{Z}$ est un **générateur** du groupe cyclique $(\\mathbb{Z}/n\\mathbb{Z}, +)$ si et seulement si $\\text{ord}(\\bar{k}) = n$, ce qui équivaut à $\\text{PGCD}(k, n) = 1$. Le nombre de générateurs d’un groupe cyclique d’ordre $n$ est donc égal à $\\varphi(n)$, l’**indicatrice d’Euler** (nombre d’entiers de $\\{1, \\dots, n\\}$ premiers avec $n$). Si $n = p_1^{\\alpha_1} \\cdots p_r^{\\alpha_r}$ est la décomposition en facteurs premiers, alors $\\varphi(n) = n \\prod_{i=1}^r \\left(1 - \\frac{1}{p_i}\\right)$.',
            formula: {
              name: 'Formule de l’indicatrice d’Euler',
              formula: '\\varphi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right), \\qquad \\varphi(p^\\alpha) = p^{\\alpha-1}(p - 1)',
              note: 'Pour un nombre premier p, on a φ(p) = p − 1.',
            },
            keyRule:
              'Si $m$ et $n$ sont premiers entre eux ($\\text{PGCD}(m,n)=1$), alors $\\varphi(mn) = \\varphi(m)\\varphi(n)$ et le groupe produit $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$ est cyclique isomorphe à $\\mathbb{Z}/mn\\mathbb{Z}$.',
            konanTip:
              'Pour calculer $\\varphi(20)$ rapidement : $20 = 2^2 \\times 5$, donc $\\varphi(20) = 20 \\times (1 - 1/2) \\times (1 - 1/5) = 20 \\times \\frac{1}{2} \\times \\frac{4}{5} = 8$.',
            exercise: {
              id: 'srit_l1_sa_c1_p2_s5',
              type: 'mcq',
              prompt:
                'Combien de générateurs distincts possède un groupe cyclique d’ordre $15$ tel que $(\\mathbb{Z}/15\\mathbb{Z}, +)$ ?',
              options: ['$8$', '$14$', '$6$', '$4$'],
              correctAnswerIndex: 0,
              explanation:
                'Le nombre de générateurs d’un groupe cyclique d’ordre $15$ est $\\varphi(15)$. Comme $15 = 3 \\times 5$ avec $3$ et $5$ premiers, $\\varphi(15) = \\varphi(3)\\varphi(5) = (3-1)(5-1) = 2 \\times 4 = 8$.',
              hint: 'Calculez $\\varphi(15) = \\varphi(3 \\times 5) = (3-1)(5-1)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Automorphismes',
            stepTheme: 'slate',
            stepTitle: 'Morphismes entre groupes cycliques et groupe produit',
            paragraphText:
              'Un morphisme de groupes $f : (\\mathbb{Z}/n\\mathbb{Z}, +) \\to (G, *)$ est entièrement déterminé par l’image $g = f(\\bar{1})$ du générateur $\\bar{1}$, car $f(\\bar{k}) = g^k$. Pour que $f$ soit bien défini, il faut et il suffit que $g^n = e_G$, c’est-à-dire que $\\text{ord}(g)$ divise $n$. En particulier, pour un produit direct $G_1 \\times G_2$, l’ordre d’un couple $(a,b)$ est $\\text{ord}(a,b) = \\text{PPCM}(\\text{ord}(a), \\text{ord}(b))$.',
            formula: {
              name: 'Ordre dans un groupe produit',
              formula: '\\text{ord}_{G_1 \\times G_2}(a, b) = \\text{PPCM}(\\text{ord}_{G_1}(a),\\; \\text{ord}_{G_2}(b))',
              note: 'Z/mZ × Z/nZ est cyclique si et seulement si PGCD(m, n) = 1.',
            },
            keyRule:
              '$\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z} \\simeq \\mathbb{Z}/mn\\mathbb{Z} \\iff \\text{PGCD}(m,n) = 1$.',
            konanTip:
              'Dans $\\mathbb{Z}/6\\mathbb{Z} \\times \\mathbb{Z}/4\\mathbb{Z}$, l’ordre maximal d’un élément est $\\text{PPCM}(6,4) = 12 < 24$, donc ce groupe produit n’est PAS cyclique.',
            exercise: {
              id: 'srit_l1_sa_c1_p2_s6',
              type: 'mcq',
              prompt:
                'Lequel des groupes produits suivants est un groupe cyclique ?',
              options: [
                '$\\mathbb{Z}/4\\mathbb{Z} \\times \\mathbb{Z}/9\\mathbb{Z}$',
                '$\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/6\\mathbb{Z}$',
                '$\\mathbb{Z}/4\\mathbb{Z} \\times \\mathbb{Z}/6\\mathbb{Z}$',
                '$\\mathbb{Z}/3\\mathbb{Z} \\times \\mathbb{Z}/9\\mathbb{Z}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le produit $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$ est cyclique si et seulement si $\\text{PGCD}(m,n) = 1$. Or $\\text{PGCD}(4,9) = 1$, donc $\\mathbb{Z}/4\\mathbb{Z} \\times \\mathbb{Z}/9\\mathbb{Z} \\simeq \\mathbb{Z}/36\\mathbb{Z}$ est cyclique.',
              hint: 'Cherchez le couple $(m,n)$ tel que $\\text{PGCD}(m,n) = 1$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'srit_l1_sa_c1_p3',
        order: 3,
        title: 'Groupe symétrique Sn : Permutations, Cycles et Signature',
        summary:
          'Décomposer toute permutation en produit de cycles à supports disjoints, calculer son ordre, sa signature et reconnaître le groupe alterné An.',
        conceptExplanation:
          'Le groupe symétrique $\\mathfrak{S}_n$ est le groupe des bijections (permutations) de $\\{1, \\dots, n\\}$ muni de la composition $\\circ$. C’est l’exemple fondamental de groupe fini non commutatif dès que $n \\ge 3$, d’ordre $n!$. La décomposition unique en cycles à supports disjoints permet de lire immédiatement l’ordre d’une permutation (PPCM des longueurs) et sa signature $\\varepsilon(\\sigma) \\in \\{-1, +1\\}$.',
        keyRule:
          'Si $\\sigma = c_1 \\circ c_2 \\circ \\cdots \\circ c_r$ est la décomposition en cycles à supports disjoints de longueurs $\\ell_1, \\dots, \\ell_r$, alors $\\text{ord}(\\sigma) = \\text{PPCM}(\\ell_1, \\dots, \\ell_r)$ et $\\varepsilon(\\sigma) = (-1)^{\\sum_{i=1}^r (\\ell_i - 1)}$.',
        formulas: [
          {
            name: 'Ordre et signature d’un p-cycle',
            formula: '\\text{Si } c \\text{ est un } p\\text{-cycle}, \\quad \\text{ord}(c) = p \\quad \\text{et} \\quad \\varepsilon(c) = (-1)^{p-1}',
            note: 'Attention : une transposition (2-cycle) a une signature impaire (-1), et un 3-cycle a une signature paire (+1) !',
          },
          {
            name: 'Signature et orbites',
            formula: '\\varepsilon(\\sigma) = (-1)^{n - k}',
            note: 'où k est le nombre total d’orbites (cycles disjoints EN COMPTANT les points fixes de longueur 1).',
          },
        ],
        workedExample: {
          title: 'Décomposition en cycles disjoints, ordre et signature dans S7',
          statement:
            'Dans $\\mathfrak{S}_7$, on considère la permutation $\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 3 & 5 & 4 & 1 & 2 & 6 & 7 \\end{pmatrix}$. Déterminer sa décomposition en cycles à supports disjoints, son ordre et sa signature.',
          methodSteps: [
            'On suit l’orbite de $1$ : $1 \\mapsto 3 \\mapsto 4 \\mapsto 1$, ce qui donne le $3$-cycle $c_1 = (1\\; 3\\; 4)$.',
            'On suit l’orbite de $2$ : $2 \\mapsto 5 \\mapsto 2$, ce qui donne la transposition ($2$-cycle) $c_2 = (2\\; 5)$. Les éléments $6$ et $7$ sont invariants (points fixes).',
            'La décomposition en cycles à supports disjoints est $\\sigma = (1\\; 3\\; 4)(2\\; 5)$.',
            'L’ordre est $\\text{ord}(\\sigma) = \\text{PPCM}(3, 2) = 6$, et la signature est $\\varepsilon(\\sigma) = \\varepsilon(c_1)\\varepsilon(c_2) = (-1)^{3-1}(-1)^{2-1} = (+1)(-1) = -1$.',
          ],
          conclusion:
            '$\\sigma = (1\\; 3\\; 4)(2\\; 5)$ est d’ordre $6$ et de signature $\\varepsilon(\\sigma) = -1$ (permutation impaire).',
        },
        visualSchema: {
          type: 'flowchart',
          title: 'Méthode d’étude complète d’une permutation σ ∈ Sn',
          caption: 'Algorithme standard de résolution pour tout exercice sur le groupe symétrique.',
          flowchart: {
            direction: 'vertical',
            steps: [
              {
                id: 's1',
                label: '1. Écriture en deux lignes de σ ∈ Sn',
                sublabel: 'Repérer les points fixes σ(i) = i et le support Supp(σ)',
                kind: 'start',
                color: 'blue',
              },
              {
                id: 's2',
                label: '2. Décomposition en cycles à supports disjoints',
                sublabel: 'σ = c₁ ∘ c₂ ∘ ... ∘ cᵣ (les cycles disjoints commutent entre eux)',
                kind: 'process',
                color: 'violet',
              },
              {
                id: 's3',
                label: '3. Calcul de l’ordre : ord(σ) = PPCM(ℓ₁, ℓ₂, ..., ℓᵣ)',
                sublabel: 'En déduire σᵏ en réduisant k modulo chaque longueur ℓᵢ',
                kind: 'process',
                color: 'green',
              },
              {
                id: 's4',
                label: '4. Calcul de la signature : ε(σ) = (-1)^∑(ℓᵢ - 1)',
                sublabel: 'Si ε(σ) = +1, σ ∈ An (groupe alterné) ; sinon σ est impaire',
                kind: 'end',
                color: 'orange',
              },
            ],
          },
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Groupe Sn',
            stepTheme: 'blue',
            stepTitle: 'Groupe symétrique Sn, support et cycles',
            paragraphText:
              'Pour $n \\ge 1$, le **groupe symétrique** $\\mathfrak{S}_n$ est l’ensemble des bijections de $\\{1, 2, \\dots, n\\}$ dans lui-même, muni de la loi de composition $\\circ$. Son élément neutre est l’identité $\\text{id}$ et son cardinal est $|\\mathfrak{S}_n| = n!$. Pour $n \\ge 3$, $\\mathfrak{S}_n$ est **non abélien**. Le **support** de $\\sigma \\in \\mathfrak{S}_n$ est $\\text{Supp}(\\sigma) = \\{i \\in \\{1,\\dots,n\\} \\mid \\sigma(i) \\neq i\\}$. Un **$p$-cycle** $(a_1\\; a_2\\; \\dots\\; a_p)$ envoie $a_1 \\mapsto a_2 \\mapsto \\dots \\mapsto a_p \\mapsto a_1$ et fixe tous les autres éléments.',
            formula: {
              name: 'Cardinal et inverse d’un cycle',
              formula: '|\\mathfrak{S}_n| = n! \\qquad \\text{et} \\qquad (a_1\\; a_2\\; \\dots\\; a_p)^{-1} = (a_p\\; \\dots\\; a_2\\; a_1)',
              note: 'Deux permutations à supports disjoints commutent : Supp(σ₁) ∩ Supp(σ₂) = ∅ ⇒ σ₁ ∘ σ₂ = σ₂ ∘ σ₁.',
            },
            keyRule:
              'Un $2$-cycle $(i\\; j)$ est appelé une **transposition** : il échange $i$ et $j$, son ordre est $2$ et il est égal à son propre inverse.',
            konanTip:
              'Lorsqu’on compose deux permutations $\\sigma \\circ \\tau$, on applique **d’abord $\\tau$ (à droite), puis $\\sigma$ (à gauche)** : $(\\sigma \\circ \\tau)(x) = \\sigma(\\tau(x))$.',
            exercise: {
              id: 'srit_l1_sa_c1_p3_s1',
              type: 'mcq',
              prompt:
                'Dans $\\mathfrak{S}_4$, que vaut le produit $(1\\; 2\\; 3) \\circ (2\\; 3\\; 4)$ (en appliquant d’abord $(2\\; 3\\; 4)$ puis $(1\\; 2\\; 3)$) ?',
              options: [
                '$(1\\; 2)(3\\; 4)$',
                '$(1\\; 4)(2\\; 3)$',
                '$(1\\; 2\\; 3\\; 4)$',
                '$\\text{id}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Calculons les images : $1 \\mapsto 1 \\mapsto 2$ ; $2 \\mapsto 3 \\mapsto 1$ (donc transposition $(1\\; 2)$) ; $3 \\mapsto 4 \\mapsto 4$ ; $4 \\mapsto 2 \\mapsto 3$ (donc transposition $(3\\; 4)$). Le produit vaut donc $(1\\; 2)(3\\; 4)$.',
              hint: 'Calculez l’image de chaque entier $1, 2, 3, 4$ en commençant par le cycle de droite.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Cycles disjoints',
            stepTheme: 'green',
            stepTitle: 'Théorème de décomposition en cycles à supports disjoints',
            paragraphText:
              'Toute permutation $\\sigma \\in \\mathfrak{S}_n \\setminus \\{\\text{id}\\}$ se décompose de manière **unique** (à l’ordre des facteurs près) en un produit de cycles à supports deux à deux disjoints : $\\sigma = c_1 \\circ c_2 \\circ \\cdots \\circ c_r$. Comme leurs supports sont disjoints, ces cycles **commutent** deux à deux ($c_i \\circ c_j = c_j \\circ c_i$), ce qui entraîne que pour tout $k \\in \\mathbb{Z}$, $\\sigma^k = c_1^k \\circ c_2^k \\circ \\cdots \\circ c_r^k$.',
            formula: {
              name: 'Puissance d’une permutation décomposée en cycles disjoints',
              formula: '\\sigma = c_1 \\circ \\cdots \\circ c_r \\implies \\forall k \\in \\mathbb{Z},\\; \\sigma^k = c_1^k \\circ \\cdots \\circ c_r^k',
              note: 'Cette propriété n’est vraie QUE parce que les cycles sont à supports disjoints (donc commutent).',
            },
            keyRule:
              'Ne laissez jamais deux cycles qui partagent un même chiffre dans une décomposition finale : si un chiffre apparaît deux fois, les cycles ne sont pas disjoints !',
            konanTip:
              'Pour calculer $\\sigma^{2025}$, réduisez $2025$ modulo la longueur $\\ell_i$ de chaque cycle $c_i$ séparément !',
            exercise: {
              id: 'srit_l1_sa_c1_p3_s2',
              type: 'mcq',
              prompt:
                'Quelle est la décomposition en produit de cycles à supports disjoints de $\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\\\ 4 & 6 & 3 & 5 & 1 & 2 \\end{pmatrix} \\in \\mathfrak{S}_6$ ?',
              options: [
                '$(1\\; 4\\; 5)(2\\; 6)$',
                '$(1\\; 4)(4\\; 5)(2\\; 6)$',
                '$(1\\; 5\\; 4)(2\\; 6)$',
                '$(1\\; 4\\; 5)(2\\; 3\\; 6)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On suit les orbites : $1 \\mapsto 4 \\mapsto 5 \\mapsto 1$ donne $(1\\; 4\\; 5)$ ; $2 \\mapsto 6 \\mapsto 2$ donne $(2\\; 6)$ ; et $3 \\mapsto 3$ est un point fixe. D’où $\\sigma = (1\\; 4\\; 5)(2\\; 6)$.',
              hint: 'Suivez les images successives de $1$, puis celles de $2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Ordre dans Sn',
            stepTheme: 'violet',
            stepTitle: 'Ordre d’une permutation dans Sn',
            paragraphText:
              'Si $\\sigma = c_1 \\circ c_2 \\circ \\cdots \\circ c_r$ est la décomposition de $\\sigma \\in \\mathfrak{S}_n$ en cycles à supports disjoints de longueurs respectives $\\ell_1, \\ell_2, \\dots, \\ell_r$, alors comme les cycles sont disjoints, $\\sigma^k = \\text{id} \\iff \\forall i, c_i^k = \\text{id} \\iff \\forall i, \\ell_i \\mid k$. Par conséquent, l’**ordre** de $\\sigma$ est le plus petit commun multiple des longueurs de ses cycles disjoints : $\\text{ord}(\\sigma) = \\text{PPCM}(\\ell_1, \\ell_2, \\dots, \\ell_r)$.',
            formula: {
              name: 'Ordre d’une permutation',
              formula: '\\text{ord}(\\sigma) = \\text{PPCM}(\\ell_1, \\ell_2, \\dots, \\ell_r)',
              note: 'Rappel : PPCM(a, b) = (a × b) / PGCD(a, b).',
            },
            keyRule:
              'Attention : la formule du PPCM ne s’applique QUE si les cycles de la décomposition sont à supports **disjoints**.',
            konanTip:
              'Dans $\\mathfrak{S}_7$, quel est l’ordre maximal possible d’un élément ? On cherche la partition de $7 = 3 + 4$ qui maximise le PPCM : $\\text{PPCM}(3, 4) = 12$ (obtenu pour le produit d’un $3$-cycle et d’un $4$-cycle disjoints).',
            exercise: {
              id: 'srit_l1_sa_c1_p3_s3',
              type: 'mcq',
              prompt:
                'Dans $\\mathfrak{S}_{10}$, soit $\\sigma = (1\\; 3\\; 5\\; 7)(2\\; 4\\; 6\\; 8\\; 9\\; 10)$. Quel est l’ordre de $\\sigma$ ?',
              options: ['$12$', '$24$', '$10$', '$6$'],
              correctAnswerIndex: 0,
              explanation:
                'Les deux cycles $(1\\; 3\\; 5\\; 7)$ de longueur $4$ et $(2\\; 4\\; 6\\; 8\\; 9\\; 10)$ de longueur $6$ ont des supports disjoints. L’ordre de $\\sigma$ est donc $\\text{PPCM}(4, 6) = 12$.',
              hint: 'Calculez le PPCM des longueurs des deux cycles disjoints ($4$ et $6$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Transpositions',
            stepTheme: 'green',
            stepTitle: 'Décomposition en produit de transpositions et inversions',
            paragraphText:
              'L’ensemble des transpositions engendre le groupe $\\mathfrak{S}_n$ : tout $p$-cycle $(a_1\\; a_2\\; \\dots\\; a_p)$ se décompose en produit de $p - 1$ transpositions : $(a_1\\; a_2\\; \\dots\\; a_p) = (a_1\\; a_2)(a_2\\; a_3)\\cdots(a_{p-1}\\; a_p)$. Cette décomposition n’est pas unique, mais la **parité** du nombre de transpositions est toujours la même. On appelle **inversion** de $\\sigma$ tout couple $(i, j)$ tel que $1 \\le i < j \\le n$ et $\\sigma(i) > \\sigma(j)$.',
            formula: {
              name: 'Décomposition d’un p-cycle en p−1 transpositions',
              formula: '(a_1\\; a_2\\; \\dots\\; a_p) = (a_1\\; a_2) \\circ (a_2\\; a_3) \\circ \\cdots \\circ (a_{p-1}\\; a_p)',
              note: 'Un p-cycle nécessite exactement p − 1 transpositions.',
            },
            keyRule:
              'Un $p$-cycle se décompose en $p - 1$ transpositions (jamais $p$ transpositions !).',
            konanTip:
              'Pour vérifier $(1\\; 2\\; 3) = (1\\; 2)(2\\; 3)$ : par $(2\\; 3)$ puis $(1\\; 2)$, on a $1 \\mapsto 1 \\mapsto 2$, $2 \\mapsto 3 \\mapsto 3$ et $3 \\mapsto 2 \\mapsto 1$.',
            exercise: {
              id: 'srit_l1_sa_c1_p3_s4',
              type: 'mcq',
              prompt:
                'En combien de transpositions au minimum peut-on décomposer le produit de cycles à supports disjoints $\\sigma = (1\\; 2\\; 3\\; 4)(5\\; 6\\; 7)$ ?',
              options: [
                '$5$ transpositions',
                '$7$ transpositions',
                '$2$ transpositions',
                '$6$ transpositions',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le $4$-cycle $(1\\; 2\\; 3\\; 4)$ se décompose en $4 - 1 = 3$ transpositions et le $3$-cycle $(5\\; 6\\; 7)$ en $3 - 1 = 2$ transpositions. Au total, on obtient $3 + 2 = 5$ transpositions.',
              hint: 'Un cycle de longueur $\\ell$ se décompose en $\\ell - 1$ transpositions.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Signature',
            stepTheme: 'violet',
            stepTitle: 'Signature d’une permutation : formules et morphisme',
            paragraphText:
              'La **signature** est l’unique morphisme de groupes non trivial $\\varepsilon : (\\mathfrak{S}_n, \\circ) \\to (\\{-1, +1\\}, \\times)$ tel que $\\varepsilon(\\tau) = -1$ pour toute transposition $\\tau$. On a $\\varepsilon(\\sigma) = (-1)^{I(\\sigma)}$ où $I(\\sigma)$ est le nombre d’inversions, ou bien $\\varepsilon(\\sigma) = (-1)^m$ si $\\sigma$ est produit de $m$ transpositions. Pour un $p$-cycle $c$, $\\varepsilon(c) = (-1)^{p-1}$. Comme $\\varepsilon$ est un morphisme, $\\varepsilon(\\sigma_1 \\circ \\sigma_2) = \\varepsilon(\\sigma_1)\\varepsilon(\\sigma_2)$ et $\\varepsilon(\\sigma^k) = (\\varepsilon(\\sigma))^k$.',
            formula: {
              name: 'Signature d’un produit de cycles disjoints',
              formula: '\\sigma = c_1 \\circ \\cdots \\circ c_r \\implies \\varepsilon(\\sigma) = \\prod_{i=1}^r (-1)^{\\ell_i - 1} = (-1)^{\\sum_{i=1}^r (\\ell_i - 1)}',
              note: 'Un cycle de longueur IMPAIRE a une signature PAIRE (+1) ; un cycle de longueur PAIRE a une signature IMPAIRE (-1).',
            },
            keyRule:
              'Piège majeur : la parité d’un cycle est l’INVERSE de la parité de sa longueur ! Un $3$-cycle est pair ($\\varepsilon = +1$) et un $4$-cycle est impair ($\\varepsilon = -1$).',
            konanTip:
              'Pour calculer $\\varepsilon(\\sigma)$ en 5 secondes, comptez uniquement le nombre de cycles de **longueur paire** dans la décomposition disjointe : s’il y en a un nombre impair, $\\varepsilon(\\sigma) = -1$, sinon $\\varepsilon(\\sigma) = +1$.',
            exercise: {
              id: 'srit_l1_sa_c1_p3_s5',
              type: 'mcq',
              prompt:
                'Quelle est la signature de la permutation $\\sigma = (1\\; 4\\; 2\\; 7)(3\\; 5\\; 6)(8\\; 9)$ dans $\\mathfrak{S}_9$ ?',
              options: [
                '$\\varepsilon(\\sigma) = +1$',
                '$\\varepsilon(\\sigma) = -1$',
                '$\\varepsilon(\\sigma) = 0$',
                '$\\varepsilon(\\sigma) = -9$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les longueurs des trois cycles sont $\\ell_1 = 4$, $\\ell_2 = 3$ et $\\ell_3 = 2$. Leurs signatures respectives sont $(-1)^{4-1} = -1$, $(-1)^{3-1} = +1$ et $(-1)^{2-1} = -1$. Par produit, $\\varepsilon(\\sigma) = (-1) \\times (+1) \\times (-1) = +1$.',
              hint: 'Multipliez les signatures $(-1)^{\\ell_i - 1}$ de chacun des trois cycles.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Groupe Alterné An',
            stepTheme: 'violet',
            stepTitle: 'Le groupe alterné An = ker(ε)',
            paragraphText:
              'Le noyau du morphisme signature $\\varepsilon : \\mathfrak{S}_n \\to \\{-1, +1\\}$ est l’ensemble des permutations **paires** (de signature $+1$) : c’est un sous-groupe distingué de $\\mathfrak{S}_n$ appelé le **groupe alterné** et noté $\\mathfrak{A}_n = \\ker \\varepsilon$. Pour tout $n \\ge 2$, $\\varepsilon$ est surjectif (car toute transposition a pour image $-1$), donc d’après le théorème d’isomorphisme, $[\\mathfrak{S}_n : \\mathfrak{A}_n] = 2$ et $|\\mathfrak{A}_n| = \\frac{n!}{2}$.',
            formula: {
              name: 'Définition et ordre du groupe alterné',
              formula: '\\mathfrak{A}_n = \\ker \\varepsilon = \\{\\sigma \\in \\mathfrak{S}_n \\mid \\varepsilon(\\sigma) = +1\\}, \\qquad |\\mathfrak{A}_n| = \\frac{n!}{2} \\; (n \\ge 2)',
              note: 'Le groupe alterné An est engendré par les 3-cycles pour tout n ≥ 3.',
            },
            keyRule:
              'Pour $n \\ge 2$, il y a exactement autant de permutations paires que de permutations impaires dans $\\mathfrak{S}_n$, soit $\\frac{n!}{2}$.',
            konanTip:
              'Dans $\\mathfrak{S}_4$, $|\\mathfrak{S}_4| = 24$ et $|\\mathfrak{A}_4| = 12$. Le groupe $\\mathfrak{A}_4$ contient l’identité, les $8$ cycles de longueur $3$, et les $3$ doubles transpositions à supports disjoints comme $(1\\; 2)(3\\; 4)$.',
            exercise: {
              id: 'srit_l1_sa_c1_p3_s6',
              type: 'mcq',
              prompt:
                'Quel est le cardinal du groupe alterné $\\mathfrak{A}_5$ (sous-groupe des permutations paires de $\\mathfrak{S}_5$) ?',
              options: ['$60$', '$120$', '$24$', '$30$'],
              correctAnswerIndex: 0,
              explanation:
                'Pour $n = 5 \\ge 2$, $|\\mathfrak{A}_5| = \\frac{5!}{2} = \\frac{120}{2} = 60$.',
              hint: 'Utilisez $|\\mathfrak{A}_n| = \\frac{n!}{2}$ pour $n = 5$.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : ANNEAUX, IDÉAUX, Z/nZ ET CORPS COMMUTATIFS
  // ============================================================================
  {
    id: 'lmd_srit_l1_struct_alg_ch2',
    subjectId: 'lmd_structures_algebriques',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'Programme LMD — SRIT 1 Semestre 1 (ECUE Structures Algébriques — 2MTH3100)',
    title: 'Anneaux, Idéaux, Arithmétique dans Z/nZ et Corps Commutatifs',
    summary:
      'Structure d’anneau, sous-anneaux, diviseurs de zéro et anneaux intègres, groupe des inversibles, idéaux principaux, anneau quotient Z/nZ et corps commutatifs Z/pZ.',
    points: [
      makePoint({
        id: 'srit_l1_sa_c2_p1',
        order: 1,
        title: 'Anneaux, Sous-anneaux, Diviseurs de zéro et Anneaux intègres',
        summary:
          'Maîtriser les axiomes d’un anneau, la formule du binôme de Newton, la distinction entre éléments inversibles et diviseurs de zéro, et la notion d’anneau intègre.',
        conceptExplanation:
          'Un anneau $(A, +, \\times)$ est un ensemble muni de deux lois internes : $(A, +)$ est un groupe abélien de neutre $0_A$, $(A, \\times)$ est un monoïde de neutre $1_A$, et la multiplication est distributive par rapport à l’addition. Contrairement à un groupe, les éléments non nuls d’un anneau ne sont pas tous inversibles pour $\\times$ : certains peuvent même être des diviseurs de zéro ($ab = 0_A$ avec $a \\neq 0_A$ et $b \\neq 0_A$).',
        keyRule:
          'Dans un anneau, un élément inversible ne peut jamais être un diviseur de zéro. Un anneau commutatif non nul sans diviseur de zéro est appelé un anneau intègre.',
        formulas: [
          {
            name: 'Formule du binôme de Newton dans un anneau',
            formula: 'a b = b a \\implies (a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}',
            note: 'Hypothèse indispensable : a et b doivent commuter (ab = ba) !',
          },
          {
            name: 'Anneau intègre',
            formula: 'A \\text{ intègre} \\iff (A \\text{ commutatif non nul et } \\forall (a,b)\\in A^2,\\; ab = 0_A \\implies a = 0_A \\text{ ou } b = 0_A)',
            note: 'Dans un anneau intègre, tout élément non nul est simplifiable pour la multiplication.',
          },
        ],
        workedExample: {
          title: 'Éléments nilpotents et éléments inversibles dans un anneau commutatif',
          statement:
            'Soit $A$ un anneau commutatif et $x \\in A$ un élément nilpotent, c’est-à-dire qu’il existe $n \\in \\mathbb{N}^*$ tel que $x^n = 0_A$. Montrer que $1_A - x$ est inversible dans $A$ et exprimer son inverse.',
          methodSteps: [
            'Comme $1_A$ et $x$ commutent, on utilise l’identité remarquable géométrique : $(1_A - x)(1_A + x + x^2 + \\cdots + x^{n-1}) = 1_A - x^n$.',
            'Or $x^n = 0_A$ par hypothèse de nilpotence.',
            'On obtient donc $(1_A - x)\\left(\\sum_{k=0}^{n-1} x^k\\right) = 1_A$.',
            'Ainsi, $1_A - x$ est inversible dans $A$ et son inverse est $(1_A - x)^{-1} = 1_A + x + x^2 + \\cdots + x^{n-1}$.',
          ],
          conclusion:
            'Si $x^n = 0_A$, alors $1_A - x \\in A^\\times$ avec $(1_A - x)^{-1} = \\sum_{k=0}^{n-1} x^k$.',
        },
        visualSchema: {
          type: 'matrix_2x2',
          title: 'Classification des éléments non nuls d’un anneau commutatif A',
          caption: 'Inversibilité et division de zéro sont deux propriétés mutuellement exclusives.',
          matrix2x2: {
            topAxis: ['Régulier (simplifiable)', 'Diviseur de zéro (∃b≠0, ab=0)'],
            leftAxis: ['Inversible (a ∈ A×)', 'Non inversible (a ∉ A×)'],
            topLeft: {
              title: 'Unités (A×)',
              items: [
                '∃a⁻¹ ∈ A, a·a⁻¹ = 1_A',
                'Toujours simplifiable : ab = ac ⇒ b = c',
                'Ex : ±1 dans Z ; classes premières avec n dans Z/nZ',
              ],
              color: 'green',
            },
            topRight: {
              title: 'Impossible (Ensemble vide ∅)',
              items: [
                'Un élément inversible ne peut JAMAIS être un diviseur de zéro',
                'Car ab = 0 ⇒ a⁻¹(ab) = 0 ⇒ b = 0',
              ],
              color: 'orange',
            },
            bottomLeft: {
              title: 'Réguliers non inversibles',
              items: [
                'Présents dans les anneaux intègres qui ne sont pas des corps',
                'Ex : 2, 3, 5... dans (Z, +, ×) ou X dans K[X]',
              ],
              color: 'blue',
            },
            bottomRight: {
              title: 'Diviseurs de zéro non nuls',
              items: [
                'Présents dans les anneaux non intègres',
                'Ex : 2̄ et 3̄ dans Z/6Z car 2̄ × 3̄ = 0̄',
                'Ex : matrices non nulles de déterminant nul dans Mn(R)',
              ],
              color: 'violet',
            },
          },
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Anneau',
            stepTheme: 'blue',
            stepTitle: 'Définition d’un anneau et règles de calcul',
            paragraphText:
              'Un **anneau** $(A, +, \\times)$ est un ensemble muni de deux LCI telles que : (1) $(A, +)$ est un **groupe abélien** d’élément neutre $0_A$, (2) $\\times$ est associative et possède un élément neutre $1_A$ (anneau unitaire), (3) $\\times$ est distributive à gauche et à droite par rapport à $+$. Si $\\times$ est commutative, l’anneau est dit **commutatif**. Dans tout anneau, $0_A$ est absorbant : $\\forall a \\in A, a \\times 0_A = 0_A \\times a = 0_A$, et $(-a)b = a(-b) = -(ab)$.',
            formula: {
              name: 'Distributivité et élément absorbant',
              formula: 'a(b + c) = ab + ac, \\quad (b + c)a = ba + ca, \\quad a \\cdot 0_A = 0_A \\cdot a = 0_A',
              note: 'Si 1_A = 0_A, alors A = {0_A} est l’anneau nul (trivial).',
            },
            keyRule:
              'Dans un anneau non commutatif (comme $\\mathcal{M}_n(\\mathbb{R})$ pour $n \\ge 2$), $(a+b)^2 = a^2 + ab + ba + b^2 \\neq a^2 + 2ab + b^2$ en général.',
            konanTip:
              'Si un anneau $A$ vérifie $x^2 = x$ pour tout $x \\in A$ (anneau de Boole), alors $A$ est commutatif et $\\forall x \\in A, x + x = 0_A$.',
            exercise: {
              id: 'srit_l1_sa_c2_p1_s1',
              type: 'mcq',
              prompt:
                'Dans un anneau quelconque $(A, +, \\times)$ non nécessairement commutatif, que vaut toujours le développement de $(a + b)^2$ pour $(a,b) \\in A^2$ ?',
              options: [
                '$a^2 + ab + ba + b^2$',
                '$a^2 + 2ab + b^2$',
                '$a^2 + b^2$',
                '$a^2 + 2ba + b^2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par distributivité, $(a+b)(a+b) = a(a+b) + b(a+b) = a^2 + ab + ba + b^2$. On ne peut regrouper $ab + ba$ en $2ab$ que si $a$ et $b$ commutent ($ab = ba$).',
              hint: 'Appliquez la distributivité sans supposer que $ab = ba$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Binôme & Sous-anneau',
            stepTheme: 'violet',
            stepTitle: 'Formule du binôme de Newton et caractérisation d’un sous-anneau',
            paragraphText:
              'Dans un anneau $A$, si deux éléments $a$ et $b$ **commutent** ($ab = ba$), on peut appliquer la formule du binôme de Newton $(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}$ ainsi que la factorisation $a^n - b^n = (a - b)\\sum_{k=0}^{n-1} a^{n-1-k}b^k$. Par ailleurs, une partie $B \\subset A$ est un **sous-anneau** de $A$ si et seulement si : (1) $1_A \\in B$, (2) $\\forall (x,y) \\in B^2, x - y \\in B$, et (3) $\\forall (x,y) \\in B^2, xy \\in B$.',
            formula: {
              name: 'Critère de sous-anneau en 3 points',
              formula: 'B \\text{ sous-anneau de } A \\iff \\begin{cases} 1_A \\in B \\\\ \\forall (x,y)\\in B^2,\\; x - y \\in B \\\\ \\forall (x,y)\\in B^2,\\; x y \\in B \\end{cases}',
              note: 'Ne jamais oublier de vérifier que l’unité 1_A de A appartient à B !',
            },
            keyRule:
              'Dans $(\\mathbb{Z}, +, \\times)$, la partie $2\\mathbb{Z}$ est stable par soustraction et par produit, mais ce n’est PAS un sous-anneau de $\\mathbb{Z}$ car $1 \\notin 2\\mathbb{Z}$.',
            konanTip:
              'L’ensemble des entiers de Gauss $\\mathbb{Z}[i] = \\{a + ib \\mid (a,b) \\in \\mathbb{Z}^2\\}$ est le sous-anneau classique de $(\\mathbb{C}, +, \\times)$.',
            exercise: {
              id: 'srit_l1_sa_c2_p1_s2',
              type: 'mcq',
              prompt:
                'Laquelle des parties suivantes est un sous-anneau de $(\\mathbb{R}, +, \\times)$ ?',
              options: [
                '$\\mathbb{Z}[\\sqrt{2}] = \\{a + b\\sqrt{2} \\mid (a,b) \\in \\mathbb{Z}^2\\}$',
                '$2\\mathbb{Z} = \\{2k \\mid k \\in \\mathbb{Z}\\}$',
                '$\\mathbb{N}$',
                '$\\{a + b\\sqrt{2} \\mid (a,b) \\in \\mathbb{Z}^2 \\text{ avec } a \\ge 0\\}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\mathbb{Z}[\\sqrt{2}]$ contient $1 = 1 + 0\\sqrt{2}$, et est stable par soustraction et par multiplication car $(a+b\\sqrt{2})(c+d\\sqrt{2}) = (ac+2bd) + (ad+bc)\\sqrt{2} \\in \\mathbb{Z}[\\sqrt{2}]$. En revanche, $1 \\notin 2\\mathbb{Z}$, et $\\mathbb{N}$ n’est pas stable par soustraction.',
              hint: 'Vérifiez les trois conditions : présence de $1$, stabilité par soustraction et stabilité par multiplication.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Inversibles A×',
            stepTheme: 'blue',
            stepTitle: 'Éléments inversibles (unités) et groupe (A×, ×)',
            paragraphText:
              'Un élément $u \\in A$ est dit **inversible** (ou est une **unité** de $A$) s’il existe $v \\in A$ tel que $u v = v u = 1_A$ (cet inverse $v = u^{-1}$ est alors unique). L’ensemble des éléments inversibles de l’anneau $A$, noté $A^\\times$ ou $\\mathcal{U}(A)$, muni de la multiplication $\\times$, forme un **groupe** appelé le **groupe des unités** de $A$. Attention : en général, $A^\\times \\neq A \\setminus \\{0_A\\}$ !',
            formula: {
              name: 'Groupes des unités usuels',
              formula: '\\mathbb{Z}^\\times = \\{-1, +1\\}, \\qquad (K[X])^\\times = K^*, \\qquad (\\mathcal{M}_n(\\mathbb{R}))^\\times = GL_n(\\mathbb{R})',
              note: 'Dans un anneau de polynômes K[X] sur un corps K, seuls les polynômes constants non nuls sont inversibles.',
            },
            keyRule:
              'Dans $(\\mathbb{Z}, +, \\times)$, les seuls éléments inversibles sont $1$ et $-1$ (car $1/2 \\notin \\mathbb{Z}$).',
            konanTip:
              'Dans l’anneau des entiers de Gauss $\\mathbb{Z}[i]$, un élément $z = a + ib$ est inversible si et seulement si $|z|^2 = a^2 + b^2 = 1$, donc $(\\mathbb{Z}[i])^\\times = \\{1, -1, i, -i\\}$.',
            exercise: {
              id: 'srit_l1_sa_c2_p1_s3',
              type: 'mcq',
              prompt:
                'Quel est le groupe des éléments inversibles $(\\mathbb{Z}[i])^\\times$ de l’anneau des entiers de Gauss $\\mathbb{Z}[i] = \\{a + ib \\mid (a,b) \\in \\mathbb{Z}^2\\}$ ?',
              options: [
                '$\\{1, -1, i, -i\\}$',
                '$\\{1, -1\\}$',
                '$\\mathbb{Z}[i] \\setminus \\{0\\}$',
                '$\\{a + ib \\in \\mathbb{Z}[i] \\mid a^2 + b^2 > 0\\}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si $(a+ib)(c+id) = 1$, en passant au module au carré on a $(a^2+b^2)(c^2+d^2) = 1$ dans $\\mathbb{N}$, donc $a^2+b^2 = 1$, ce qui donne $(a,b) \\in \\{(\\pm 1, 0), (0, \\pm 1)\\}$, soit $\\{1, -1, i, -i\\}$.',
              hint: 'Utilisez la multiplicativité de la norme $N(a+ib) = a^2 + b^2 \\in \\mathbb{N}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Anneau Intègre',
            stepTheme: 'blue',
            stepTitle: 'Diviseurs de zéro et anneaux intègres',
            paragraphText:
              'Dans un anneau commutatif $A$, un élément non nul $a \\in A \\setminus \\{0_A\\}$ est un **diviseur de zéro** s’il existe un élément non nul $b \\in A \\setminus \\{0_A\\}$ tel que $a b = 0_A$. Un anneau $A$ est dit **intègre** s’il est **commutatif**, non réduit à $\\{0_A\\}$ ($1_A \\neq 0_A$), et **sans diviseur de zéro** : $\\forall (a,b) \\in A^2, ab = 0_A \\implies a = 0_A \\text{ ou } b = 0_A$. Dans un anneau intègre, on peut simplifier toute égalité $ab = ac$ avec $a \\neq 0_A$ en $b = c$.',
            formula: {
              name: 'Simplification dans un anneau intègre',
              formula: 'A \\text{ intègre et } a \\neq 0_A \\implies (ab = ac \\iff b = c)',
              note: 'Exemples d’anneaux intègres : Z, R, C, K[X]. Exemples non intègres : Z/6Z, Mn(R), F(R, R).',
            },
            keyRule:
              'Un produit cartésien $A_1 \\times A_2$ de deux anneaux non nuls n’est JAMAIS intègre car $(1, 0) \\times (0, 1) = (0, 0)$ avec $(1,0) \\neq (0,0)$ et $(0,1) \\neq (0,0)$.',
            konanTip:
              'Tout sous-anneau d’un anneau intègre (ou d’un corps) est automatiquement un anneau intègre.',
            exercise: {
              id: 'srit_l1_sa_c2_p1_s4',
              type: 'mcq',
              prompt:
                'Lequel des anneaux suivants est un anneau intègre ?',
              options: [
                'L’anneau des polynômes $\\mathbb{R}[X]$',
                'L’anneau produit $\\mathbb{Z} \\times \\mathbb{Z}$',
                'L’anneau $\\mathbb{Z}/15\\mathbb{Z}$',
                'L’anneau des matrices $\\mathcal{M}_2(\\mathbb{R})$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sur un corps (ou un anneau intègre), l’anneau des polynômes $\\mathbb{R}[X]$ est intègre car $\\deg(PQ) = \\deg P + \\deg Q$. En revanche, dans $\\mathbb{Z} \\times \\mathbb{Z}$, $(1,0)(0,1)=(0,0)$ ; dans $\\mathbb{Z}/15\\mathbb{Z}$, $\\bar{3} \\times \\bar{5} = \\bar{0}$ ; et $\\mathcal{M}_2(\\mathbb{R})$ n’est ni commutatif ni sans diviseur de zéro.',
              hint: 'Cherchez l’anneau commutatif dans lequel un produit de deux éléments non nuls n’est jamais nul.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Caractéristique',
            stepTheme: 'violet',
            stepTitle: 'Caractéristique d’un anneau et morphisme de Frobenius',
            paragraphText:
              'La **caractéristique** d’un anneau $A$, notée $\\text{car}(A)$, est le plus petit entier $n \\in \\mathbb{N}^*$ tel que $n \\cdot 1_A = \\underbrace{1_A + \\cdots + 1_A}_{n \\text{ fois}} = 0_A$ s’il en existe un, et $\\text{car}(A) = 0$ sinon. Si $A$ est un **anneau intègre**, sa caractéristique est soit $0$ (comme $\\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$), soit un **nombre premier $p$** (comme $\\mathbb{Z}/p\\mathbb{Z}$). En caractéristique première $p$, pour tout anneau commutatif $A$, l’application $x \\mapsto x^p$ est un morphisme d’anneaux car $(a+b)^p = a^p + b^p$.',
            formula: {
              name: 'Caractéristique d’un anneau intègre et endomorphisme de Frobenius',
              formula: 'A \\text{ intègre} \\implies \\text{car}(A) \\in \\{0\\} \\cup \\mathcal{P} \\qquad \\text{et si } \\text{car}(A) = p,\\; (a + b)^p = a^p + b^p',
              note: 'En caractéristique p première, p divise tous les coefficients binomiaux C(p, k) pour 1 ≤ k ≤ p−1.',
            },
            keyRule:
              'La caractéristique d’un anneau intègre (et en particulier d’un corps) ne peut jamais être un entier composé : si $\\text{car}(A) = 6$, alors $(2 \\cdot 1_A)(3 \\cdot 1_A) = 0_A$ donc $A$ n’est pas intègre.',
            konanTip:
              'Le fameux « rêve du débutant » $(a+b)^p = a^p + b^p$ est VRAI dans tout anneau commutatif de caractéristique première $p$ (comme $\\mathbb{Z}/p\\mathbb{Z}$) !',
            exercise: {
              id: 'srit_l1_sa_c2_p1_s5',
              type: 'mcq',
              prompt:
                'Dans l’anneau $(\\mathbb{Z}/5\\mathbb{Z})[X]$ de caractéristique $5$, que vaut le développement de $(X + \\bar{2})^5$ ?',
              options: [
                '$X^5 + \\bar{2}$',
                '$X^5 + \\overline{32}X^4 + \\bar{2}$',
                '$X^5 + \\bar{1}$',
                '$X^5 + \\bar{4}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $\\mathbb{Z}/5\\mathbb{Z}$ est de caractéristique première $p = 5$, le morphisme de Frobenius donne $(X + \\bar{2})^5 = X^5 + \\bar{2}^5$. Or d’après le petit théorème de Fermat, $2^5 = 32 \\equiv 2 \\pmod 5$, donc $\\bar{2}^5 = \\bar{2}$. On obtient $X^5 + \\bar{2}$.',
              hint: 'Utilisez $(a+b)^5 = a^5 + b^5$ en caractéristique $5$, puis réduisez $2^5 = 32$ modulo $5$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège Résolution',
            stepTheme: 'orange',
            stepTitle: 'Équations polynomiales dans un anneau non intègre',
            paragraphText:
              'Dans un anneau intègre, une équation de degré $2$ comme $x^2 - x = 0$ (soit $x(x-1) = 0$) possède au plus $2$ solutions ($0$ et $1$). Mais dans un anneau **non intègre** comme $\\mathbb{Z}/n\\mathbb{Z}$ avec $n$ composé, le produit $x(x-1)$ peut être nul sans que $x$ ni $x-1$ ne soient nuls ! On trouve alors des solutions supplémentaires appelées éléments idempotents.',
            formula: {
              name: 'Équation x(x − 1) = 0 dans Z/6Z',
              formula: 'x(x - \\bar{1}) = \\bar{0} \\text{ dans } \\mathbb{Z}/6\\mathbb{Z} \\iff x \\in \\{\\bar{0}, \\bar{1}, \\bar{3}, \\bar{4}\\}',
              note: '4 solutions pour une équation de degré 2 car Z/6Z n’est pas intègre !',
            },
            keyRule:
              'Ne concluez jamais que $ab = 0 \\implies a = 0 \\text{ ou } b = 0$ avant d’avoir vérifié que l’anneau est **intègre**.',
            konanTip:
              'Dans $\\mathbb{Z}/8\\mathbb{Z}$, l’équation $x^2 = \\bar{1}$ possède $4$ solutions : $\\bar{1}, \\bar{3}, \\bar{5}, \\bar{7}$ !',
            exercise: {
              id: 'srit_l1_sa_c2_p1_s6',
              type: 'mcq',
              prompt:
                'Combien de solutions possède l’équation $x^2 - x = \\bar{0}$ dans l’anneau non intègre $\\mathbb{Z}/6\\mathbb{Z}$ ?',
              options: [
                '$4$ solutions ($\\bar{0}, \\bar{1}, \\bar{3}, \\bar{4}$)',
                '$2$ solutions ($\\bar{0}$ et $\\bar{1}$)',
                '$1$ seule solution ($\\bar{0}$)',
                '$6$ solutions',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On teste les $6$ éléments de $\\mathbb{Z}/6\\mathbb{Z}$ pour $x(x-1) \\equiv 0 \\pmod 6$ : $0 \\times (-1) = 0$, $1 \\times 0 = 0$, $2 \\times 1 = 2 \\not\\equiv 0$, $3 \\times 2 = 6 \\equiv 0$, $4 \\times 3 = 12 \\equiv 0$, $5 \\times 4 = 20 \\not\\equiv 0$. Il y a donc $4$ solutions : $\\bar{0}, \\bar{1}, \\bar{3}, \\bar{4}$.',
              hint: 'Testez les $6$ classes $\\bar{0}, \\bar{1}, \\bar{2}, \\bar{3}, \\bar{4}, \\bar{5}$ dans $x(x-1) \\pmod 6$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'srit_l1_sa_c2_p2',
        order: 2,
        title: 'Idéaux, Morphismes d’anneaux et Anneau Z/nZ',
        summary:
          'Comprendre les morphismes d’anneaux, les idéaux principaux, la construction des anneaux quotients A/I et l’arithmétique complète de l’anneau Z/nZ.',
        conceptExplanation:
          'Dans la théorie des anneaux, les idéaux jouent exactement le rôle que jouent les sous-groupes distingués dans la théorie des groupes : ce sont les noyaux des morphismes d’anneaux et ils permettent de construire un anneau quotient $A/I$. Dans $\\mathbb{Z}$, tout idéal est principal de la forme $n\\mathbb{Z}$, ce qui donne naissance à l’anneau quotient $\\mathbb{Z}/n\\mathbb{Z}$, pilier de la cryptographie et des télécommunications.',
        keyRule:
          'Dans l’anneau $(\\mathbb{Z}/n\\mathbb{Z}, +, \\times)$, une classe $\\bar{k}$ est inversible si et seulement si $\\text{PGCD}(k, n) = 1$, et on calcule son inverse grâce aux coefficients de Bézout $uk + vn = 1 \\implies (\\bar{k})^{-1} = \\bar{u}$.',
        formulas: [
          {
            name: 'Caractérisation des éléments de Z/nZ',
            formula: '\\bar{k} \\in (\\mathbb{Z}/n\\mathbb{Z})^\\times \\iff \\text{PGCD}(k, n) = 1 \\qquad \\text{et} \\qquad |(\\mathbb{Z}/n\\mathbb{Z})^\\times| = \\varphi(n)',
            note: 'Si k̄ ≠ 0̄ et PGCD(k, n) = d > 1, alors k̄ est un diviseur de zéro car k̄ × (n/d)̄ = 0̄.',
          },
          {
            name: 'Idéal principal d’un anneau commutatif',
            formula: '(a) = a A = \\{a x \\mid x \\in A\\}',
            note: 'Un anneau intègre dans lequel tout idéal est principal est appelé un anneau principal (ex : Z et K[X]).',
          },
        ],
        workedExample: {
          title: 'Calcul de l’inverse d’une classe dans Z/26Z par l’algorithme d’Euclide étendu',
          statement:
            'Montrer que $\\overline{11}$ est inversible dans l’anneau $\\mathbb{Z}/26\\mathbb{Z}$ et déterminer son inverse $(\\overline{11})^{-1}$.',
          methodSteps: [
            'On applique l’algorithme d’Euclide entre $26$ et $11$ : $26 = 2 \\times 11 + 4$, puis $11 = 2 \\times 4 + 3$, puis $4 = 1 \\times 3 + 1$.',
            'Comme le dernier reste non nul est $1$, $\\text{PGCD}(11, 26) = 1$, donc $\\overline{11}$ est inversible dans $\\mathbb{Z}/26\\mathbb{Z}$.',
            'On remonte les égalités (Bézout) : $1 = 4 - 1 \\times 3 = 4 - (11 - 2 \\times 4) = 3 \\times 4 - 11 = 3(26 - 2 \\times 11) - 11 = 3 \\times 26 - 7 \\times 11$.',
            'En réduisant modulo $26$, on obtient $(-7) \\times 11 \\equiv 1 \\pmod{26}$, soit $(\\overline{11})^{-1} = \\overline{-7} = \\overline{26 - 7} = \\overline{19}$.',
          ],
          conclusion:
            'Dans $\\mathbb{Z}/26\\mathbb{Z}$, $(\\overline{11})^{-1} = \\overline{19}$ (en effet, $11 \\times 19 = 209 = 8 \\times 26 + 1 \\equiv 1 \\pmod{26}$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Morphisme d’anneaux',
            stepTheme: 'blue',
            stepTitle: 'Morphisme d’anneaux et noyau',
            paragraphText:
              'Soient $(A, +, \\times)$ et $(B, +, \\times)$ deux anneaux. Une application $f : A \\to B$ est un **morphisme d’anneaux** si : (1) $\\forall (x,y) \\in A^2, f(x+y) = f(x) + f(y)$, (2) $\\forall (x,y) \\in A^2, f(xy) = f(x)f(y)$, et (3) **$f(1_A) = 1_B$**. Son noyau $\\ker f = \\{x \\in A \\mid f(x) = 0_B\\}$ mesure l’injectivité ($f$ est injectif $\\iff \\ker f = \\{0_A\\}$), tandis que son image $\\text{Im } f$ est un sous-anneau de $B$.',
            formula: {
              name: 'Les 3 axiomes d’un morphisme d’anneaux',
              formula: 'f(x + y) = f(x) + f(y), \\qquad f(x y) = f(x) f(y), \\qquad f(1_A) = 1_B',
              note: 'Attention : f(x+y)=f(x)+f(y) et f(xy)=f(x)f(y) n’impliquent PAS automatiquement f(1_A) = 1_B (ex : l’application nulle).',
            },
            keyRule:
              'La condition $f(1_A) = 1_B$ fait partie intégrante de la définition d’un morphisme d’anneaux unitaires : l’application nulle $x \\mapsto 0_B$ n’est PAS un morphisme d’anneaux (si $B \\neq \\{0_B\\}$).',
            konanTip:
              'Tout morphisme d’anneaux $f : A \\to B$ envoie un élément inversible $u \\in A^\\times$ sur un élément inversible $f(u) \\in B^\\times$ avec $f(u^{-1}) = (f(u))^{-1}$.',
            exercise: {
              id: 'srit_l1_sa_c2_p2_s1',
              type: 'mcq',
              prompt:
                'Pourquoi le noyau $\\ker f$ d’un morphisme d’anneaux $f : A \\to B$ (avec $1_B \\neq 0_B$) n’est-il JAMAIS un sous-anneau de $A$ ?',
              options: [
                'Parce que $1_A \\notin \\ker f$ (puisque $f(1_A) = 1_B \\neq 0_B$)',
                'Parce que $\\ker f$ n’est pas stable par addition',
                'Parce que $\\ker f$ n’est pas stable par multiplication',
                'Parce que $0_A \\notin \\ker f$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un sous-anneau de $A$ doit obligatoirement contenir l’unité $1_A$. Or par définition d’un morphisme d’anneaux, $f(1_A) = 1_B \\neq 0_B$, donc $1_A \\notin \\ker f$. Le noyau $\\ker f$ n’est pas un sous-anneau mais un **idéal** de $A$.',
              hint: 'Un sous-anneau doit contenir $1_A$. Que vaut $f(1_A)$ ?',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Idéal',
            stepTheme: 'blue',
            stepTitle: 'Idéal d’un anneau commutatif et propriété d’absorption',
            paragraphText:
              'Une partie $I$ d’un anneau commutatif $(A, +, \\times)$ est un **idéal** de $A$ si : (1) $(I, +)$ est un sous-groupe de $(A, +)$ ($0_A \\in I$ et $\\forall x,y \\in I, x - y \\in I$), et (2) $I$ est **absorbant** pour la multiplication par tout élément de $A$ : $\\forall a \\in A, \\forall x \\in I, a x \\in I$. Le noyau $\\ker f$ de tout morphisme d’anneaux est un idéal de $A$. Si un idéal $I$ contient $1_A$ (ou n’importe quel élément inversible $u \\in A^\\times$), alors $I = A$ tout entier.',
            formula: {
              name: 'Idéal contenant un élément inversible',
              formula: 'I \\text{ idéal de } A \\implies (I \\cap A^\\times \\neq \\emptyset \\iff 1_A \\in I \\iff I = A)',
              note: 'En effet, si u ∈ I ∩ A×, alors par absorption u⁻¹·u = 1_A ∈ I, puis ∀a ∈ A, a·1_A = a ∈ I.',
            },
            keyRule:
              'La différence entre un sous-anneau et un idéal : un sous-anneau contient $1_A$ et est stable par produit interne ($B \\cdot B \\subset B$), tandis qu’un idéal propre ne contient PAS $1_A$ mais absorbe tout produit externe ($A \\cdot I \\subset I$).',
            konanTip:
              'Un corps $K$ ne possède que deux idéaux : l’idéal nul $\\{0_K\\}$ et $K$ lui-même (car tout élément non nul d’un corps est inversible) !',
            exercise: {
              id: 'srit_l1_sa_c2_p2_s2',
              type: 'mcq',
              prompt:
                'Soit $I$ un idéal d’un anneau commutatif $A$. Que peut-on affirmer si $I$ contient un élément inversible $u \\in A^\\times$ ?',
              options: [
                '$I = A$ tout entier',
                '$I = \\{0_A\\}$',
                '$I = A^\\times$',
                '$I$ est un corps',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si $u \\in I$ avec $u$ inversible, alors par absorption avec $u^{-1} \\in A$, on a $u^{-1} u = 1_A \\in I$. Puis pour tout $a \\in A$, par absorption $a \\cdot 1_A = a \\in I$, donc $I = A$.',
              hint: 'Multipliez $u \\in I$ par $u^{-1} \\in A$ en utilisant la propriété d’absorption de l’idéal.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Idéal Principal',
            stepTheme: 'violet',
            stepTitle: 'Idéaux principaux et anneaux principaux (Z et K[X])',
            paragraphText:
              'Dans un anneau commutatif $A$, pour tout $a \\in A$, l’ensemble des multiples de $a$, noté $(a) = aA = \\{ax \\mid x \\in A\\}$, est le plus petit idéal de $A$ contenant $a$ : on l’appelle l’**idéal principal** engendré par $a$. On a $(a) \\subset (b) \\iff b \\mid a$ (« contenir, c’est diviser »). Un anneau **intègre** dans lequel **tout idéal est principal** est appelé un **anneau principal**. Les deux anneaux principaux fondamentaux du programme sont $(\\mathbb{Z}, +, \\times)$ et $(K[X], +, \\times)$ où $K$ est un corps.',
            formula: {
              name: 'Opérations sur les idéaux de Z',
              formula: 'a\\mathbb{Z} + b\\mathbb{Z} = \\text{PGCD}(a,b)\\mathbb{Z} \\qquad \\text{et} \\qquad a\\mathbb{Z} \\cap b\\mathbb{Z} = \\text{PPCM}(a,b)\\mathbb{Z}',
              note: 'En particulier, aZ + bZ = Z ⇔ PGCD(a, b) = 1 (théorème de Bézout).',
            },
            keyRule:
              'Retenez l’inversion d’inclusion : $a$ est un multiple de $b$ ($b \\mid a$) si et seulement si $(a) \\subset (b)$. Par exemple, $6\\mathbb{Z} \\subset 2\\mathbb{Z}$ car $2$ divise $6$.',
            konanTip:
              'L’anneau $\\mathbb{Z}[X]$ (polynômes à coefficients entiers) est intègre mais n’est PAS principal : l’idéal $(2, X)$ n’est pas engendré par un seul élément.',
            exercise: {
              id: 'srit_l1_sa_c2_p2_s3',
              type: 'mcq',
              prompt:
                'Dans l’anneau principal $(\\mathbb{Z}, +, \\times)$, quel est le générateur positif $d$ de l’idéal intersection $I = 15\\mathbb{Z} \\cap 20\\mathbb{Z} = d\\mathbb{Z}$ ?',
              options: ['$d = 60$', '$d = 5$', '$d = 35$', '$d = 300$'],
              correctAnswerIndex: 0,
              explanation:
                'Un entier appartient à $15\\mathbb{Z} \\cap 20\\mathbb{Z}$ si et seulement s’il est multiple à la fois de $15$ et de $20$, donc multiple de leur $\\text{PPCM}(15, 20) = \\frac{15 \\times 20}{\\text{PGCD}(15,20)} = \\frac{300}{5} = 60$. Ainsi $15\\mathbb{Z} \\cap 20\\mathbb{Z} = 60\\mathbb{Z}$.',
              hint: 'L’intersection $a\\mathbb{Z} \\cap b\\mathbb{Z}$ est engendrée par le PPCM de $a$ et $b$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Anneau Z/nZ',
            stepTheme: 'violet',
            stepTitle: 'Anneau quotient A/I et structure de (Z/nZ, +, ×)',
            paragraphText:
              'Si $I$ est un idéal d’un anneau commutatif $A$, le groupe quotient $(A/I, +)$ muni de la multiplication des classes $\\bar{x} \\times \\bar{y} = \\overline{xy}$ est un anneau commutatif appelé **anneau quotient** $A/I$. Pour $A = \\mathbb{Z}$ et $I = n\\mathbb{Z}$ ($n \\ge 2$), on obtient l’anneau $(\\mathbb{Z}/n\\mathbb{Z}, +, \\times)$ à $n$ éléments. Dans $\\mathbb{Z}/n\\mathbb{Z}$, tout élément non nul $\\bar{k}$ est **soit inversible** (si $\\text{PGCD}(k,n) = 1$), **soit diviseur de zéro** (si $\\text{PGCD}(k,n) > 1$).',
            formula: {
              name: 'Partition des éléments non nuls de Z/nZ',
              formula: '(\\mathbb{Z}/n\\mathbb{Z}) \\setminus \\{\\bar{0}\\} = (\\mathbb{Z}/n\\mathbb{Z})^\\times \\;\\sqcup\\; \\{\\text{diviseurs de zéro non nuls}\\}',
              note: 'Le nombre d’inversibles est φ(n), et le nombre de diviseurs de zéro non nuls est (n − 1) − φ(n).',
            },
            keyRule:
              'Dans $\\mathbb{Z}/n\\mathbb{Z}$, il n’existe aucun élément non nul qui ne soit ni inversible ni diviseur de zéro : c’est une propriété propre aux anneaux finis !',
            konanTip:
              'Pour compter les diviseurs de zéro non nuls de $\\mathbb{Z}/n\\mathbb{Z}$ en QCM, calculez simplement $(n - 1) - \\varphi(n)$.',
            exercise: {
              id: 'srit_l1_sa_c2_p2_s4',
              type: 'mcq',
              prompt:
                'Dans l’anneau $(\\mathbb{Z}/10\\mathbb{Z}, +, \\times)$, combien y a-t-il d’éléments inversibles et combien de diviseurs de zéro non nuls ?',
              options: [
                '$4$ éléments inversibles et $5$ diviseurs de zéro non nuls',
                '$5$ éléments inversibles et $4$ diviseurs de zéro non nuls',
                '$4$ éléments inversibles et $6$ diviseurs de zéro non nuls',
                '$9$ éléments inversibles et $0$ diviseur de zéro',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le nombre d’inversibles est $\\varphi(10) = \\varphi(2)\\varphi(5) = 1 \\times 4 = 4$ (ce sont $\\bar{1}, \\bar{3}, \\bar{7}, \\bar{9}$). Les autres éléments non nuls sont au nombre de $(10 - 1) - 4 = 5$ (ce sont $\\bar{2}, \\bar{4}, \\bar{5}, \\bar{6}, \\bar{8}$) et sont tous des diviseurs de zéro.',
              hint: 'Calculez $\\varphi(10)$ pour les inversibles, puis $(10 - 1) - \\varphi(10)$ pour les diviseurs de zéro non nuls.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Inversion & Équations',
            stepTheme: 'green',
            stepTitle: 'Calcul d’inverse et résolution de a·x ≡ b (mod n)',
            paragraphText:
              'Pour résoudre l’équation $\\bar{a} x = \\bar{b}$ dans $\\mathbb{Z}/n\\mathbb{Z}$ (soit $ax \\equiv b \\pmod n$), on calcule $d = \\text{PGCD}(a, n)$. **Cas 1** : si $d = 1$, $\\bar{a}$ est inversible, on trouve $u$ tel que $au + nv = 1$ (Bézout) et l’unique solution est $x = \\bar{a}^{-1}\\bar{b} = \\overline{ub}$. **Cas 2** : si $d > 1$, l’équation admet des solutions si et seulement si $d$ divise $b$ ; dans ce cas, on divise toute la congruence par $d$ et il y a exactement $d$ solutions distinctes dans $\\mathbb{Z}/n\\mathbb{Z}$.',
            formula: {
              name: 'Critère d’existence et nombre de solutions de ax ≡ b (mod n)',
              formula: 'd = \\text{PGCD}(a, n) \\implies \\begin{cases} \\text{Si } d \\nmid b : 0 \\text{ solution dans } \\mathbb{Z}/n\\mathbb{Z} \\\\ \\text{Si } d \\mid b : \\text{exactement } d \\text{ solutions dans } \\mathbb{Z}/n\\mathbb{Z} \\end{cases}',
              note: 'Règle redoutable pour répondre instantanément aux QCM sur le nombre de solutions dans Z/nZ.',
            },
            keyRule:
              'Pour trouver $(\\bar{a})^{-1}$ dans $\\mathbb{Z}/n\\mathbb{Z}$ en QCM, inutile de dérouler tout Euclide : multipliez chaque option proposée par $a$ et vérifiez laquelle donne un reste égal à $1$ modulo $n$ !',
            konanTip:
              'Dans $\\mathbb{Z}/17\\mathbb{Z}$, quel est l’inverse de $\\bar{5}$ ? On cherche un multiple de $5$ qui vaut $1$ modulo $17$ : $5 \\times 7 = 35 = 2 \\times 17 + 1$, donc $(\\bar{5})^{-1} = \\bar{7}$ !',
            exercise: {
              id: 'srit_l1_sa_c2_p2_s5',
              type: 'mcq',
              prompt:
                'Dans l’anneau $\\mathbb{Z}/23\\mathbb{Z}$, quel est l’inverse multiplicatif de la classe $\\bar{7}$ ?',
              options: ['$\\overline{10}$', '$\\bar{3}$', '$\\overline{16}$', '$\\overline{13}$'],
              correctAnswerIndex: 0,
              explanation:
                'On calcule $\\bar{7} \\times \\overline{10} = \\overline{70}$. Or $70 = 3 \\times 23 + 1$, donc $\\overline{70} = \\bar{1}$ dans $\\mathbb{Z}/23\\mathbb{Z}$. L’inverse de $\\bar{7}$ est donc $\\overline{10}$.',
              hint: 'Calculez $7 \\times 10$ et réduisez le résultat modulo $23$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Théorème Chinois',
            stepTheme: 'violet',
            stepTitle: 'Théorème des restes chinois et théorème d’Euler',
            paragraphText:
              'Si $m$ et $n$ sont deux entiers **premiers entre eux** ($\\text{PGCD}(m,n) = 1$), le **théorème des restes chinois** affirme que l’application $\\bar{x} \\mapsto (x \\bmod m, x \\bmod n)$ est un **isomorphisme d’anneaux** de $\\mathbb{Z}/mn\\mathbb{Z}$ sur l’anneau produit $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$. En passant aux groupes des unités, on a $(\\mathbb{Z}/mn\\mathbb{Z})^\\times \\simeq (\\mathbb{Z}/m\\mathbb{Z})^\\times \\times (\\mathbb{Z}/n\\mathbb{Z})^\\times$. De plus, par le théorème de Lagrange appliqué au groupe $(\\mathbb{Z}/n\\mathbb{Z})^\\times$ d’ordre $\\varphi(n)$, on obtient le **théorème d’Euler** : si $\\text{PGCD}(a,n)=1$, alors $a^{\\varphi(n)} \\equiv 1 \\pmod n$.',
            formula: {
              name: 'Théorème d’Euler',
              formula: '\\text{PGCD}(a, n) = 1 \\implies a^{\\varphi(n)} \\equiv 1 \\pmod n',
              note: 'Ce théorème est la base mathématique du chiffrement asymétrique RSA étudié en SRIT.',
            },
            keyRule:
              'Pour tout système de congruences $\\begin{cases} x \\equiv a \\pmod m \\\\ x \\equiv b \\pmod n \\end{cases}$ avec $\\text{PGCD}(m,n)=1$, il existe une unique solution modulo $mn$.',
            konanTip:
              'Avec le théorème d’Euler, pour calculer $7^{100} \\pmod{10}$ : comme $\\text{PGCD}(7,10)=1$ et $\\varphi(10)=4$, on a $7^4 \\equiv 1 \\pmod{10}$, donc $7^{100} = (7^4)^{25} \\equiv 1^{25} = 1 \\pmod{10}$.',
            exercise: {
              id: 'srit_l1_sa_c2_p2_s6',
              type: 'mcq',
              prompt:
                'Quel est l’unique entier $x \\in \\{0, 1, \\dots, 14\\}$ solution du système de congruences $\\begin{cases} x \\equiv 2 \\pmod 3 \\\\ x \\equiv 3 \\pmod 5 \\end{cases}$ ?',
              options: ['$x = 8$', '$x = 13$', '$x = 11$', '$x = 3$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après le théorème des restes chinois ($\\text{PGCD}(3,5)=1$), la solution est unique modulo $15$. Les entiers de $\\{0,\\dots,14\\}$ congrus à $3 \\pmod 5$ sont $3, 8, 13$. Parmi eux, $8 = 2 \\times 3 + 2 \\equiv 2 \\pmod 3$, donc $x = 8$.',
              hint: 'Listez les nombres congrus à $3 \\pmod 5$ entre $0$ et $14$ ($3, 8, 13$) et trouvez celui qui vaut $2 \\pmod 3$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'srit_l1_sa_c2_p3',
        order: 3,
        title: 'Corps commutatifs, Sous-corps et Corps finis Z/pZ',
        summary:
          'Maîtriser la structure de corps commutatif, le théorème de Wedderburn sur les anneaux intègres finis, la primalité de p pour Z/pZ et les théorèmes de Fermat et Wilson.',
        conceptExplanation:
          'Un corps est un anneau non nul dans lequel tout élément non nul est inversible : autrement dit, $K^\\times = K \\setminus \\{0_K\\}$ est un groupe multiplicatif. En Licence SRIT, on considère systématiquement des corps commutatifs ($\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$ et les corps finis $\\mathbb{F}_p = \\mathbb{Z}/p\\mathbb{Z}$). Ils constituent le cadre naturel de l’algèbre linéaire, des polynômes et des codes correcteurs d’erreurs.',
        keyRule:
          'L’anneau $\\mathbb{Z}/n\\mathbb{Z}$ est un corps si et seulement si $\\mathbb{Z}/n\\mathbb{Z}$ est intègre, si et seulement si $n$ est un nombre premier.',
        formulas: [
          {
            name: 'Caractérisation des corps parmi les anneaux Z/nZ',
            formula: '(\\mathbb{Z}/n\\mathbb{Z}, +, \\times) \\text{ est un corps} \\iff \\mathbb{Z}/n\\mathbb{Z} \\text{ est intègre} \\iff n \\text{ est premier}',
            note: 'Plus généralement, tout anneau intègre FINI est nécessairement un corps.',
          },
          {
            name: 'Petit théorème de Fermat et théorème de Wilson',
            formula: 'p \\text{ premier} \\implies \\begin{cases} \\forall a \\in \\mathbb{Z},\\; a^p \\equiv a \\pmod p \\\\ (p - 1)! \\equiv -1 \\pmod p \\end{cases}',
            note: 'Si p ne divise pas a, alors a^{p-1} ≡ 1 (mod p).',
          },
        ],
        workedExample: {
          title: 'Tout anneau intègre fini est un corps',
          statement:
            'Soit $A$ un anneau intègre ayant un nombre fini d’éléments. Montrer que tout élément non nul $a \\in A \\setminus \\{0_A\\}$ est inversible, et en déduire que $A$ est un corps.',
          methodSteps: [
            'Soit $a \\in A \\setminus \\{0_A\\}$. Considérons l’application $\\varphi_a : A \\to A$ définie par $\\varphi_a(x) = a x$.',
            'Comme $A$ est intègre et $a \\neq 0_A$, $\\varphi_a(x) = \\varphi_a(y) \\implies a(x - y) = 0_A \\implies x = y$ : l’application $\\varphi_a$ est donc injective.',
            'Or $A$ est un ensemble **fini** : toute application injective d’un ensemble fini dans lui-même est automatiquement **bijective** (donc surjective).',
            'Puisque $\\varphi_a$ est surjective, l’élément $1_A \\in A$ possède un antécédent $b \\in A$ tel que $\\varphi_a(b) = a b = 1_A$, donc $a$ est inversible.',
          ],
          conclusion:
            'Tout élément non nul de $A$ est inversible : tout anneau intègre fini est donc un corps.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Corps Commutatif',
            stepTheme: 'blue',
            stepTitle: 'Définition d’un corps commutatif et d’un sous-corps',
            paragraphText:
              'Un **corps commutatif** est un anneau commutatif $(K, +, \\times)$ non réduit à $\\{0_K\\}$ ($1_K \\neq 0_K$) dans lequel **tout élément non nul est inversible** : $K^\\times = K \\setminus \\{0_K\\} = K^*$. Autrement dit, $(K, +)$ est un groupe abélien de neutre $0_K$, $(K^*, \\times)$ est un groupe abélien de neutre $1_K$, et $\\times$ est distributive sur $+$. Une partie $L \\subset K$ est un **sous-corps** de $K$ si $1_K \\in L$, $\\forall x,y \\in L, x - y \\in L$ et $\\forall x \\in L, \\forall y \\in L^*, x y^{-1} \\in L$.',
            formula: {
              name: 'Hiérarchie Corps ⇒ Anneau intègre ⇒ Anneau commutatif',
              formula: 'K \\text{ est un corps commutatif} \\iff (K \\text{ anneau commutatif non nul et } K^\\times = K \\setminus \\{0_K\\})',
              note: 'Tout corps est un anneau intègre, mais la réciproque est fausse en général (Z est intègre mais n’est pas un corps).',
            },
            keyRule:
              'Tout corps est un anneau intègre (car un élément inversible n’est jamais un diviseur de zéro).',
            konanTip:
              '$\\mathbb{Q}[\\sqrt{2}] = \\{a + b\\sqrt{2} \\mid (a,b) \\in \\mathbb{Q}^2\\}$ est un sous-corps de $\\mathbb{R}$ car pour $(a,b) \\neq (0,0)$, $\\frac{1}{a+b\\sqrt{2}} = \\frac{a - b\\sqrt{2}}{a^2 - 2b^2} \\in \\mathbb{Q}[\\sqrt{2}]$ (puisque $\\sqrt{2} \\notin \\mathbb{Q}$).',
            exercise: {
              id: 'srit_l1_sa_c2_p3_s1',
              type: 'mcq',
              prompt:
                'Lequel des ensembles suivants, muni de l’addition et de la multiplication usuelles, est un corps commutatif ?',
              options: [
                '$\\mathbb{Q}[\\sqrt{3}] = \\{a + b\\sqrt{3} \\mid (a,b) \\in \\mathbb{Q}^2\\}$',
                '$\\mathbb{Z}[\\sqrt{3}] = \\{a + b\\sqrt{3} \\mid (a,b) \\in \\mathbb{Z}^2\\}$',
                '$\\mathbb{Z}$',
                '$\\mathbb{R}[X]$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans $\\mathbb{Q}[\\sqrt{3}]$, tout élément non nul $a+b\\sqrt{3}$ admet pour inverse $\\frac{a}{a^2-3b^2} - \\frac{b}{a^2-3b^2}\\sqrt{3} \\in \\mathbb{Q}[\\sqrt{3}]$ (car $\\sqrt{3} \\notin \\mathbb{Q}$ donc $a^2-3b^2 \\neq 0$). En revanche, dans $\\mathbb{Z}$, $\\mathbb{Z}[\\sqrt{3}]$ et $\\mathbb{R}[X]$, l’élément $2$ (ou $X$) n’est pas inversible.',
              hint: 'Dans un corps, $2$ doit avoir un inverse $1/2$, ce qui exclut les anneaux à coefficients dans $\\mathbb{Z}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Anneau Intègre Fini',
            stepTheme: 'violet',
            stepTitle: 'Théorème : Tout anneau intègre fini est un corps',
            paragraphText:
              'Bien qu’un anneau intègre infini comme $\\mathbb{Z}$ ou $K[X]$ ne soit pas un corps, la situation change radicalement pour les ensembles **finis** : **tout anneau intègre fini est un corps**. En effet, pour tout $a \\neq 0_A$, la multiplication $x \\mapsto ax$ est injective par intégrité, donc bijective puisque $A$ est fini, ce qui garantit l’existence de $b \\in A$ tel que $ab = 1_A$. De plus, le groupe multiplicatif $(K^*, \\times)$ de tout corps fini $K$ est un **groupe cyclique**.',
            formula: {
              name: 'Équivalence fondamentale pour un anneau fini',
              formula: 'A \\text{ anneau commutatif fini} \\implies (A \\text{ est un corps} \\iff A \\text{ est intègre})',
              note: 'Le cardinal d’un corps fini est toujours une puissance d’un nombre premier : |K| = p^n.',
            },
            keyRule:
              'Un corps fini ne peut jamais avoir $6$, $10$, $12$ ou $15$ éléments : le cardinal d’un corps fini est obligatoirement de la forme $p^n$ où $p$ est un nombre premier et $n \\in \\mathbb{N}^*$.',
            konanTip:
              'Il existe un corps fini à $4 = 2^2$, $8 = 2^3$, $9 = 3^2$ ou $25 = 5^2$ éléments (construits comme quotients de $\\mathbb{F}_p[X]$), mais attention : le corps à $4$ éléments n’est PAS $\\mathbb{Z}/4\\mathbb{Z}$ (car $\\bar{2} \\times \\bar{2} = \\bar{0}$ dans $\\mathbb{Z}/4\\mathbb{Z}$) !',
            exercise: {
              id: 'srit_l1_sa_c2_p3_s2',
              type: 'mcq',
              prompt:
                'Parmi les entiers suivants, lequel NE PEUT PAS être le cardinal d’un corps fini ?',
              options: ['$12$', '$8$', '$9$', '$17$'],
              correctAnswerIndex: 0,
              explanation:
                'Le cardinal de tout corps fini est nécessairement une puissance $p^n$ d’un nombre premier $p$ (sa caractéristique). Or $8 = 2^3$, $9 = 3^2$ et $17 = 17^1$ sont des puissances de nombres premiers, tandis que $12 = 2^2 \\times 3$ possède deux facteurs premiers distincts.',
              hint: 'Le cardinal d’un corps fini doit s’écrire $p^n$ avec $p$ premier.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Corps Z/pZ',
            stepTheme: 'violet',
            stepTitle: 'Le corps fini Fp = Z/pZ pour p premier',
            paragraphText:
              'Appliquons le théorème précédent à l’anneau quotient $\\mathbb{Z}/n\\mathbb{Z}$ ($n \\ge 2$) : les affirmations suivantes sont équivalentes : (1) $(\\mathbb{Z}/n\\mathbb{Z}, +, \\times)$ est un **corps**, (2) $\\mathbb{Z}/n\\mathbb{Z}$ est un **anneau intègre**, (3) $n$ est un **nombre premier**. Lorsque $p$ est premier, on note souvent ce corps $\\mathbb{F}_p = \\mathbb{Z}/p\\mathbb{Z}$. Son groupe multiplicatif $(\\mathbb{F}_p^*, \\times) = \\{\\bar{1}, \\bar{2}, \\dots, \\overline{p-1}\\}$ est un groupe cyclique d’ordre $p - 1$.',
            formula: {
              name: 'Groupe multiplicatif de Fp = Z/pZ',
              formula: 'p \\text{ premier} \\implies (\\mathbb{F}_p^*, \\times) \\text{ est un groupe cyclique d’ordre } p - 1',
              note: 'Il possède donc φ(p − 1) éléments primitifs (générateurs multiplicatifs).',
            },
            keyRule:
              'Dans $\\mathbb{Z}/p\\mathbb{Z}$ avec $p$ premier, TOUTES les classes non nulles $\\bar{1}, \\bar{2}, \\dots, \\overline{p-1}$ sont inversibles.',
            konanTip:
              'Dans un langage plus avancé, $I$ est un idéal **maximal** d’un anneau commutatif $A$ $\\iff A/I$ est un **corps**, et $I$ est un idéal **premier** $\\iff A/I$ est **intègre**.',
            exercise: {
              id: 'srit_l1_sa_c2_p3_s3',
              type: 'mcq',
              prompt:
                'Pour quelle valeur de $n$ l’anneau $(\\mathbb{Z}/n\\mathbb{Z}, +, \\times)$ est-il un corps ?',
              options: ['$n = 31$', '$n = 27$', '$n = 51$', '$n = 91$'],
              correctAnswerIndex: 0,
              explanation:
                '$\\mathbb{Z}/n\\mathbb{Z}$ est un corps si et seulement si $n$ est un nombre premier. Or $27 = 3^3$, $51 = 3 \\times 17$ et $91 = 7 \\times 13$ sont composés, tandis que $31$ est premier.',
              hint: 'Attention aux faux nombres premiers : $51 = 3 \\times 17$ et $91 = 7 \\times 13$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Fermat & Wilson',
            stepTheme: 'violet',
            stepTitle: 'Petit théorème de Fermat et théorème de Wilson dans Z/pZ',
            paragraphText:
              'Dans le groupe multiplicatif $(\\mathbb{F}_p^*, \\times)$ d’ordre $p - 1$, le théorème de Lagrange entraîne que tout élément non nul $\\bar{a} \\in \\mathbb{F}_p^*$ vérifie $\\bar{a}^{p-1} = \\bar{1}$, d’où le **petit théorème de Fermat** : si $p$ est premier et $p \\nmid a$, alors $a^{p-1} \\equiv 1 \\pmod p$ (et pour tout $a \\in \\mathbb{Z}, a^p \\equiv a \\pmod p$). Par ailleurs, en regroupant chaque élément de $\\mathbb{F}_p^*$ avec son inverse (sauf $\\bar{1}$ et $\\overline{-1}$ qui sont leurs propres inverses), on obtient le **théorème de Wilson** : $p$ est premier $\\iff (p-1)! \\equiv -1 \\pmod p$.',
            formula: {
              name: 'Inverse rapide grâce au petit théorème de Fermat',
              formula: 'p \\text{ premier et } \\bar{a} \\neq \\bar{0} \\implies (\\bar{a})^{-1} = \\bar{a}^{p-2} \\text{ dans } \\mathbb{Z}/p\\mathbb{Z}',
              note: 'Car ā × ā^{p−2} = ā^{p−1} = 1̄.',
            },
            keyRule:
              'Dans $\\mathbb{Z}/p\\mathbb{Z}$ ($p$ premier), les seuls éléments qui sont égaux à leur propre inverse ($x^2 = \\bar{1}$) sont $\\bar{1}$ et $\\overline{-1} = \\overline{p-1}$.',
            konanTip:
              'Avec le théorème de Wilson, dans $\\mathbb{Z}/13\\mathbb{Z}$, on sait immédiatement sans aucun calcul que $12! \\equiv -1 \\equiv 12 \\pmod{13}$ et donc que $11! \\equiv 1 \\pmod{13}$ !',
            exercise: {
              id: 'srit_l1_sa_c2_p3_s4',
              type: 'mcq',
              prompt:
                'Que vaut le reste de la division euclidienne de $16! + 3^{16}$ par le nombre premier $17$ ?',
              options: ['$0$', '$1$', '$2$', '$16$'],
              correctAnswerIndex: 0,
              explanation:
                'Comme $17$ est premier : d’après le théorème de Wilson, $16! \\equiv -1 \\pmod{17}$ ; et d’après le petit théorème de Fermat ($17 \\nmid 3$), $3^{16} \\equiv 1 \\pmod{17}$. En additionnant, $16! + 3^{16} \\equiv -1 + 1 = 0 \\pmod{17}$. Le reste est donc $0$.',
              hint: 'Appliquez le théorème de Wilson à $16! \\pmod{17}$ et le petit théorème de Fermat à $3^{16} \\pmod{17}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Morphismes de corps',
            stepTheme: 'violet',
            stepTitle: 'Injectivité automatique des morphismes de corps et sous-corps premier',
            paragraphText:
              'Soit $f : K \\to A$ un morphisme d’anneaux partant d’un **corps** $K$ vers un anneau non nul $A$ ($1_A \\neq 0_A$). Son noyau $\\ker f$ est un idéal de $K$. Or un corps $K$ ne possède que deux idéaux : $\\{0_K\\}$ et $K$. Comme $f(1_K) = 1_A \\neq 0_A$, on a $1_K \\notin \\ker f$, donc nécessairement $\\ker f = \\{0_K\\}$. Par conséquent, **tout morphisme d’un corps dans un anneau non nul est automatiquement injectif** ! De plus, tout corps $K$ contient un plus petit sous-corps (son **sous-corps premier**), qui est isomorphe à $\\mathbb{Q}$ si $\\text{car}(K) = 0$, ou à $\\mathbb{Z}/p\\mathbb{Z}$ si $\\text{car}(K) = p$.',
            formula: {
              name: 'Sous-corps premier d’un corps K',
              formula: '\\text{Sous-corps premier de } K \\simeq \\begin{cases} \\mathbb{Q} & \\text{si } \\text{car}(K) = 0 \\\\ \\mathbb{F}_p = \\mathbb{Z}/p\\mathbb{Z} & \\text{si } \\text{car}(K) = p \\text{ premier} \\end{cases}',
              note: 'C’est l’intersection de tous les sous-corps de K.',
            },
            keyRule:
              'Tout morphisme entre deux corps $f : K \\to L$ est toujours injectif.',
            konanTip:
              'C’est parce que le sous-corps premier d’un corps fini $K$ est $\\mathbb{F}_p$ que $K$ est un $\\mathbb{F}_p$-espace vectoriel de dimension finie $n$, d’où $|K| = p^n$.',
            exercise: {
              id: 'srit_l1_sa_c2_p3_s5',
              type: 'mcq',
              prompt:
                'Soit $K$ un corps commutatif et $L$ un autre corps commutatif. Que peut-on affirmer de tout morphisme d’anneaux $f : K \\to L$ ?',
              options: [
                '$f$ est toujours injectif',
                '$f$ est toujours surjectif',
                '$f$ est toujours bijectif',
                '$\\ker f$ contient au moins deux éléments',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le noyau $\\ker f$ est un idéal du corps $K$ qui ne contient pas $1_K$ (car $f(1_K) = 1_L \\neq 0_L$). Comme les seuls idéaux d’un corps sont $\\{0_K\\}$ et $K$, on a $\\ker f = \\{0_K\\}$, donc $f$ est toujours injectif.',
              hint: 'Quels sont les seuls idéaux possibles d’un corps $K$ ?',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'definition',
            stepBadge: 'Corps des fractions',
            stepTheme: 'blue',
            stepTitle: 'Corps des fractions d’un anneau intègre',
            paragraphText:
              'Tout anneau intègre $A$ peut être plongé dans un plus petit corps commutatif appelé son **corps des fractions**, noté $\\text{Frac}(A)$, construit sur les couples $(a, b) \\in A \\times (A \\setminus \\{0_A\\})$ modulo la relation d’équivalence $(a, b) \\sim (c, d) \\iff ad = bc$. La classe de $(a,b)$ est notée $\\frac{a}{b}$. Ainsi, le corps des fractions de l’anneau intègre $\\mathbb{Z}$ est le corps des rationnels $\\mathbb{Q} = \\text{Frac}(\\mathbb{Z})$, et le corps des fractions de l’anneau des polynômes $K[X]$ est le corps des **fractions rationnelles** $K(X) = \\text{Frac}(K[X])$.',
            formula: {
              name: 'Corps des fractions classiques',
              formula: '\\text{Frac}(\\mathbb{Z}) = \\mathbb{Q} \\qquad \\text{et} \\qquad \\text{Frac}(K[X]) = K(X)',
              note: 'Cette construction exige impérativement que l’anneau A soit intègre (pour que b ≠ 0 et d ≠ 0 implique bd ≠ 0).',
            },
            keyRule:
              'Ne confondez jamais les crochets $K[X]$ (anneau des polynômes) et les parenthèses $K(X)$ (corps des fractions rationnelles $\\frac{P(X)}{Q(X)}$ avec $Q \\neq 0$).',
            konanTip:
              'Le corps des fractions de l’anneau des entiers de Gauss $\\mathbb{Z}[i]$ est le corps des rationnels de Gauss $\\mathbb{Q}[i] = \\{p + iq \\mid (p,q) \\in \\mathbb{Q}^2\\}$.',
            exercise: {
              id: 'srit_l1_sa_c2_p3_s6',
              type: 'mcq',
              prompt:
                'Quel est le corps des fractions de l’anneau intègre des polynômes $\\mathbb{R}[X]$ ?',
              options: [
                'Le corps des fractions rationnelles $\\mathbb{R}(X) = \\left\\{\\dfrac{P(X)}{Q(X)} \\;\\middle|\\; P, Q \\in \\mathbb{R}[X],\\; Q \\neq 0\\right\\}$',
                'L’anneau $\\mathbb{C}[X]$',
                'Le corps des nombres complexes $\\mathbb{C}$',
                'L’anneau des séries formelles $\\mathbb{R}[[X]]$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par construction du corps des fractions d’un anneau intègre $A = \\mathbb{R}[X]$, on obtient l’ensemble des quotients formels $\\frac{P(X)}{Q(X)}$ de deux polynômes avec $Q \\neq 0$, noté $\\mathbb{R}(X)$.',
              hint: 'La notation du corps des fractions de $K[X]$ utilise des parenthèses à la place des crochets.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : POLYNÔMES K[X] ET FRACTIONS RATIONNELLES K(X)
  // ============================================================================
  {
    id: 'lmd_srit_l1_struct_alg_ch3',
    subjectId: 'lmd_structures_algebriques',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — SRIT 1 Semestre 1 (ECUE Structures Algébriques — 2MTH3100)',
    title: 'Polynômes K[X] et Fractions Rationnelles K(X)',
    summary:
      'Degré, division euclidienne, PGCD, théorème de Bézout, racines multiples et dérivées, théorème de d’Alembert-Gauss, polynômes irréductibles de C[X] et R[X], et décomposition en éléments simples dans C(X) et R(X).',
    points: [
      makePoint({
        id: 'srit_l1_sa_c3_p1',
        order: 1,
        title: 'Arithmétique dans K[X] : Degré, Division euclidienne, PGCD et Bézout',
        summary:
          'Maîtriser les règles sur le degré, la division euclidienne des polynômes, le calcul du PGCD par l’algorithme d’Euclide, le théorème de Bézout et la formule de Taylor.',
        conceptExplanation:
          'Lorsque $K$ est un corps commutatif ($\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$ ou $\\mathbb{Z}/p\\mathbb{Z}$), l’anneau des polynômes $K[X]$ possède une division euclidienne gouvernée par le degré $\\deg$. Cette division euclidienne confère à $K[X]$ une arithmétique identique à celle de $\\mathbb{Z}$ : tout idéal est principal, tout couple de polynômes admet un PGCD unitaire calculable par l’algorithme d’Euclide, et les théorèmes de Bézout et de Gauss s’y appliquent intégralement.',
        keyRule:
          'Dans la division euclidienne de $A$ par $B \\neq 0$, l’unique couple $(Q, R)$ vérifie $A = BQ + R$ avec $\\deg R < \\deg B$. Si $B = (X-a)(X-b)$ avec $a \\neq b$, le reste est de la forme $R(X) = \\alpha X + \\beta$ et se détermine en évaluant en $X = a$ et $X = b$.',
        formulas: [
          {
            name: 'Degré d’une somme et d’un produit dans K[X]',
            formula: '\\deg(P + Q) \\le \\max(\\deg P, \\deg Q), \\qquad \\deg(P \\cdot Q) = \\deg P + \\deg Q',
            note: 'Par convention, le polynôme nul 0 a pour degré deg(0) = −∞.',
          },
          {
            name: 'Théorème de la division euclidienne dans K[X]',
            formula: '\\forall A \\in K[X],\\; \\forall B \\in K[X] \\setminus \\{0\\},\\; \\exists!(Q, R) \\in (K[X])^2,\\quad A = B Q + R \\text{ avec } \\deg R < \\deg B',
            note: 'En particulier, le reste de la division de P(X) par X − a est la constante R = P(a).',
          },
        ],
        workedExample: {
          title: 'Reste d’une division euclidienne d’un polynôme de grand degré',
          statement:
            'Déterminer le reste $R(X)$ de la division euclidienne de $A(X) = X^{2025} + X^2 + 1$ par $B(X) = X^2 - 1$ dans $\\mathbb{R}[X]$.',
          methodSteps: [
            'La division euclidienne s’écrit $A(X) = (X^2 - 1)Q(X) + R(X)$ avec $\\deg R < \\deg B = 2$.',
            'Donc le reste est de degré au plus $1$ : il existe $(a, b) \\in \\mathbb{R}^2$ tels que $R(X) = aX + b$.',
            'Les racines du diviseur $B(X) = (X - 1)(X + 1)$ sont $1$ et $-1$. En évaluant l’égalité en $X = 1$ et $X = -1$, le terme $(X^2-1)Q(X)$ s’annule :',
            'Pour $X = 1$ : $A(1) = 1^{2025} + 1^2 + 1 = 3 = R(1) = a + b$. Pour $X = -1$ : $A(-1) = (-1)^{2025} + (-1)^2 + 1 = -1 + 1 + 1 = 1 = R(-1) = -a + b$.',
            'On résout le système $\\begin{cases} a + b = 3 \\\\ -a + b = 1 \\end{cases}$, ce qui donne $2b = 4 \\implies b = 2$, puis $a = 1$.',
          ],
          conclusion:
            'Le reste de la division euclidienne de $X^{2025} + X^2 + 1$ par $X^2 - 1$ est $R(X) = X + 2$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Anneau K[X]',
            stepTheme: 'blue',
            stepTitle: 'Polynômes sur un corps K, degré et coefficient dominant',
            paragraphText:
              'Un polynôme $P \\in K[X]$ non nul s’écrit de façon unique $P(X) = a_n X^n + a_{n-1} X^{n-1} + \\cdots + a_1 X + a_0$ avec $a_n \\neq 0$. L’entier $n = \\deg P \\in \\mathbb{N}$ est le **degré** de $P$, $a_n$ est son **coefficient dominant**, et si $a_n = 1$, $P$ est dit **unitaire** (ou normalisé). Par convention, $\\deg(0) = -\\infty$. Comme $K$ est un corps (donc intègre), $\\deg(PQ) = \\deg P + \\deg Q$, ce qui prouve que $K[X]$ est un **anneau intègre** et que ses seuls éléments inversibles sont les polynômes constants non nuls : $(K[X])^\\times = K^*$.',
            formula: {
              name: 'Cas d’égalité dans le degré d’une somme',
              formula: '\\deg P \\neq \\deg Q \\implies \\deg(P + Q) = \\max(\\deg P, \\deg Q)',
              note: 'Si deg P = deg Q, les termes dominants peuvent s’annuler et deg(P + Q) peut être strictement inférieur à deg P.',
            },
            keyRule:
              'Dans $K[X]$, $\\deg(P \\circ Q) = (\\deg P) \\times (\\deg Q)$ pour deux polynômes non constants.',
            konanTip:
              'Si $A$ n’est pas intègre, $\\deg(PQ)$ peut être strictement inférieur à $\\deg P + \\deg Q$ : par exemple dans $(\\mathbb{Z}/4\\mathbb{Z})[X]$, $(\\bar{2}X + \\bar{1})(\\bar{2}X - \\bar{1}) = \\bar{4}X^2 - \\bar{1} = -\\bar{1}$ est de degré $0$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p1_s1',
              type: 'mcq',
              prompt:
                'Soient $P, Q \\in \\mathbb{R}[X]$ tels que $\\deg P = 4$ et $\\deg Q = 3$. Quel est le degré du polynôme $R(X) = (P(X))^2 - X^2 (Q(X))^2$ ?',
              options: [
                '$\\deg R$ est inférieur ou égal à $8$ (et égal à $8$ sauf si les coefficients dominants de $P^2$ et $X^2Q^2$ sont égaux)',
                '$\\deg R$ est toujours égal à $7$',
                '$\\deg R$ est toujours égal à $14$',
                '$\\deg R$ est toujours égal à $0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $\\deg(P^2) = 2 \\times 4 = 8$ et $\\deg(X^2 Q^2) = 2 + 2 \\times 3 = 8$. Comme les deux termes ont le même degré $8$, $\\deg(P^2 - X^2 Q^2) \\le 8$ (avec égalité à $8$ si les coefficients dominants de $P^2$ et $Q^2$ sont différents).',
              hint: 'Comparez $\\deg(P^2) = 2\\deg P$ et $\\deg(X^2 Q^2) = 2 + 2\\deg Q$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Division Euclidienne',
            stepTheme: 'green',
            stepTitle: 'Division euclidienne dans K[X] et calcul du reste',
            paragraphText:
              'Pour tout $A \\in K[X]$ et tout $B \\in K[X] \\setminus \\{0\\}$, il existe un **unique** couple $(Q, R) \\in (K[X])^2$ (quotient et reste) tel que $A = BQ + R$ avec $\\deg R < \\deg B$. On dit que $B$ **divise** $A$ (noté $B \\mid A$) si le reste est nul ($R = 0$). En particulier, en divisant $P(X)$ par $X - \\alpha$ (de degré $1$), le reste est une constante $R \\in K$, et en évaluant $P(X) = (X - \\alpha)Q(X) + R$ en $X = \\alpha$, on obtient immédiatement $R = P(\\alpha)$.',
            formula: {
              name: 'Reste de la division par X − α',
              formula: 'P(X) = (X - \\alpha)Q(X) + P(\\alpha) \\implies (X - \\alpha) \\mid P(X) \\iff P(\\alpha) = 0',
              note: 'Le reste de la division euclidienne de P(X) par X − α vaut toujours P(α).',
            },
            keyRule:
              'Si vous divisez par un polynôme $B$ de degré $d$, posez un reste générique $R(X)$ de degré $\\le d - 1$ (donc à $d$ inconnues) et évaluez l’identité $A(X) = B(X)Q(X) + R(X)$ aux racines de $B$.',
            konanTip:
              'Si $B(X) = (X - \\alpha)^2$ possède une racine double $\\alpha$, évaluez $A(\\alpha) = R(\\alpha)$ ET dérivez l’égalité pour évaluer $A\'(\\alpha) = R\'(\\alpha)$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p1_s2',
              type: 'mcq',
              prompt:
                'Quel est le reste $R(X)$ de la division euclidienne de $P(X) = X^{100} - 2X^{51} + 1$ par $B(X) = X^2 - 1$ dans $\\mathbb{R}[X]$ ?',
              options: [
                '$R(X) = -2X + 2$',
                '$R(X) = 2X - 2$',
                '$R(X) = 0$',
                '$R(X) = -2X + 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On écrit $P(X) = (X^2 - 1)Q(X) + aX + b$. En évaluant aux racines $1$ et $-1$ de $X^2 - 1$ : $P(1) = 1 - 2 + 1 = 0 = a + b$, et $P(-1) = (-1)^{100} - 2(-1)^{51} + 1 = 1 + 2 + 1 = 4 = -a + b$. On trouve $2b = 4 \\implies b = 2$ et $a = -2$, donc $R(X) = -2X + 2$.',
              hint: 'Posez $R(X) = aX + b$ et évaluez $P(1) = a + b$ et $P(-1) = -a + b$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Idéaux & PGCD',
            stepTheme: 'violet',
            stepTitle: 'K[X] est un anneau principal : PGCD et algorithme d’Euclide',
            paragraphText:
              'Grâce à la division euclidienne, **tout idéal non nul $I$ de $K[X]$ est principal** : il existe un unique polynôme **unitaire** $D \\in I$ de degré minimal tel que $I = (D) = D \\cdot K[X]$. Pour deux polynômes $A, B$ non tous deux nuls, la somme d’idéaux $A\\cdot K[X] + B\\cdot K[X]$ est un idéal principal $(D)$ : son unique générateur unitaire $D = \\text{PGCD}(A, B)$ est le **plus grand commun diviseur** de $A$ et $B$. Il se calcule en prenant le dernier reste non nul (normalisé pour être unitaire) dans l’algorithme d’Euclide.',
            formula: {
              name: 'Définition idéale du PGCD et du PPCM dans K[X]',
              formula: '(A) + (B) = (\\text{PGCD}(A, B)) \\qquad \\text{et} \\qquad (A) \\cap (B) = (\\text{PPCM}(A, B))',
              note: 'Par convention, PGCD(A, B) et PPCM(A, B) sont toujours choisis UNITAIRES.',
            },
            keyRule:
              'Dans $K[X]$, deux polynômes sont associés ($A \\mid B$ et $B \\mid A$) si et seulement s’ils diffèrent d’une constante multiplicative non nulle : $A = \\lambda B$ avec $\\lambda \\in K^*$.',
            konanTip:
              'Pour normaliser le dernier reste non nul de l’algorithme d’Euclide (par exemple $3X - 6$), divisez-le par son coefficient dominant ($3$) pour obtenir le PGCD unitaire $X - 2$.',
            exercise: {
              id: 'srit_l1_sa_c3_p1_s3',
              type: 'mcq',
              prompt:
                'Dans $\\mathbb{R}[X]$, quel est le PGCD unitaire des polynômes $A(X) = X^3 - 1$ et $B(X) = X^2 - 1$ ?',
              options: [
                '$X - 1$',
                '$X + 1$',
                '$X^2 - 1$',
                '$1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On factorise : $A(X) = X^3 - 1 = (X - 1)(X^2 + X + 1)$ et $B(X) = X^2 - 1 = (X - 1)(X + 1)$. Comme $-1$ n’est pas racine de $X^2 + X + 1$ ($1 - 1 + 1 = 1 \\neq 0$), le PGCD unitaire est $X - 1$. (Par Euclide : $X^3 - 1 = X(X^2 - 1) + (X - 1)$, et $X - 1$ divise $X^2 - 1$).',
              hint: 'Effectuez la division euclidienne $X^3 - 1 = X(X^2 - 1) + R(X)$ ou factorisez par $X - 1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bézout & Gauss',
            stepTheme: 'violet',
            stepTitle: 'Polynômes premiers entre eux, théorème de Bézout et lemme de Gauss',
            paragraphText:
              'Deux polynômes $A$ et $B$ de $K[X]$ sont dits **premiers entre eux** si $\\text{PGCD}(A, B) = 1$ (leurs seuls diviseurs communs sont les constantes non nulles). Le **théorème de Bézout** affirme que $\\text{PGCD}(A, B) = 1 \\iff \\exists (U, V) \\in (K[X])^2, A U + B V = 1$. On en déduit le **lemme de Gauss** : si $A \\mid B C$ et $\\text{PGCD}(A, B) = 1$, alors $A \\mid C$ ; ainsi que son corollaire : si $A \\mid C$, $B \\mid C$ et $\\text{PGCD}(A, B) = 1$, alors $A B \\mid C$.',
            formula: {
              name: 'Identité de Bézout polynomiale',
              formula: '\\text{PGCD}(A, B) = 1 \\iff \\exists (U, V) \\in (K[X])^2,\\quad A(X) U(X) + B(X) V(X) = 1',
              note: 'Si deg A ≥ 1 et deg B ≥ 1, il existe un unique couple (U₀, V₀) de Bézout tel que deg U₀ < deg B et deg V₀ < deg A.',
            },
            keyRule:
              'Deux polynômes de $\\mathbb{C}[X]$ (ou deux polynômes scindés) sont premiers entre eux si et seulement s’ils n’ont **aucune racine complexe commune**.',
            konanTip:
              'Pour vérifier en 3 secondes si $A$ et $B$ sont premiers entre eux, cherchez les racines de l’un (le plus simple à factoriser) et testez si elles annulent l’autre !',
            exercise: {
              id: 'srit_l1_sa_c3_p1_s4',
              type: 'mcq',
              prompt:
                'Soient $A(X) = X^2 - 3X + 2$ et $B(X) = X^3 + X + 1$ dans $\\mathbb{C}[X]$. Que vaut $\\text{PGCD}(A, B)$ ?',
              options: [
                '$1$ (ils sont premiers entre eux)',
                '$X - 1$',
                '$X - 2$',
                '$X^2 - 3X + 2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les racines de $A(X) = (X - 1)(X - 2)$ sont $1$ et $2$. Or $B(1) = 1 + 1 + 1 = 3 \\neq 0$ et $B(2) = 8 + 2 + 1 = 11 \\neq 0$. Comme $A$ et $B$ n’ont aucune racine complexe commune, ils sont premiers entre eux : $\\text{PGCD}(A, B) = 1$.',
              hint: 'Trouvez les racines de $A(X) = (X-1)(X-2)$ et vérifiez si elles annulent $B(X)$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Dérivation & Taylor',
            stepTheme: 'green',
            stepTitle: 'Dérivation formelle et formule de Taylor pour les polynômes',
            paragraphText:
              'La **dérivée formelle** de $P(X) = \\sum_{k=0}^n a_k X^k \\in K[X]$ est $P\'(X) = \\sum_{k=1}^n k a_k X^{k-1}$. En caractéristique $0$ ($K = \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$), si $\\deg P = n \\ge 1$, alors $\\deg P\' = n - 1$, et on dispose de la **formule de Taylor exacte** pour tout $\\alpha \\in K$ : $P(X) = \\sum_{k=0}^n \\frac{P^{(k)}(\\alpha)}{k!} (X - \\alpha)^k$. Il n’y a aucun reste asymptotique : c’est une égalité algébrique exacte qui décompose $P(X)$ dans la base des puissances de $(X - \\alpha)$.',
            formula: {
              name: 'Formule de Taylor polynomiale en α (car(K) = 0)',
              formula: 'P(X) = \\sum_{k=0}^{\\deg P} \\frac{P^{(k)}(\\alpha)}{k!} (X - \\alpha)^k = P(\\alpha) + P\'(\\alpha)(X - \\alpha) + \\frac{P\'\'(\\alpha)}{2!}(X - \\alpha)^2 + \\cdots',
              note: 'Le reste de la division euclidienne de P(X) par (X − α)^m est exactement la troncature de Taylor à l’ordre m − 1 !',
            },
            keyRule:
              'D’après Taylor, le reste de la division euclidienne de $P(X)$ par $(X - \\alpha)^2$ est directement $R(X) = P(\\alpha) + P\'(\\alpha)(X - \\alpha)$.',
            konanTip:
              'Attention en caractéristique $p$ première : dans $(\\mathbb{Z}/p\\mathbb{Z})[X]$, la dérivée de $X^p$ est $p X^{p-1} = \\bar{0}$, donc un polynôme non constant peut avoir une dérivée nulle !',
            exercise: {
              id: 'srit_l1_sa_c3_p1_s5',
              type: 'mcq',
              prompt:
                'À l’aide de la formule de Taylor en $\\alpha = 1$, quel est le reste de la division euclidienne de $P(X) = X^5 - 2X + 1$ par $(X - 1)^2$ dans $\\mathbb{R}[X]$ ?',
              options: [
                '$3X - 3$',
                '$5X - 5$',
                '$3X + 3$',
                '$0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par la formule de Taylor en $\\alpha = 1$, le reste de la division par $(X - 1)^2$ est $R(X) = P(1) + P\'(1)(X - 1)$. Or $P(1) = 1 - 2 + 1 = 0$, et $P\'(X) = 5X^4 - 2$ donc $P\'(1) = 5 - 2 = 3$. D’où $R(X) = 0 + 3(X - 1) = 3X - 3$.',
              hint: 'Utilisez $R(X) = P(1) + P\'(1)(X - 1)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Équations Pol.Diff',
            stepTheme: 'slate',
            stepTitle: 'Utilisation du degré dans les équations polynomiales différentielles',
            paragraphText:
              'Dans de nombreux exercices d’algèbre de L1 SRIT, on cherche tous les polynômes $P \\in \\mathbb{R}[X]$ vérifiant une relation entre $P$ et ses dérivées $P\', P\'\'$. La méthode systématique consiste à supposer $P \\neq 0$ de terme dominant $a_n X^n$ ($a_n \\neq 0$), puis à identifier les termes de plus haut degré des deux membres de l’équation pour déterminer les valeurs possibles du degré $n = \\deg P$.',
            formula: {
              name: 'Terme dominant de X · P\'(X)',
              formula: 'P(X) = a_n X^n + \\cdots \\implies X P\'(X) = n a_n X^n + \\cdots',
              note: 'L’opérateur P ↦ X·P\' conserve le degré et multiplie le terme dominant a_n X^n par n.',
            },
            keyRule:
              'Face à une équation d’inconnue $P \\in K[X]$, commencez toujours par déterminer le degré $n = \\deg P$ en comparant les coefficients dominants.',
            konanTip:
              'Si l’équation est $(X^2 + 1)P\'\' - 6P = 0$, le terme dominant en $X^n$ donne $n(n-1)a_n - 6a_n = 0$, soit $n^2 - n - 6 = 0 \\implies n = 3$ (car $n \\in \\mathbb{N}$).',
            exercise: {
              id: 'srit_l1_sa_c3_p1_s6',
              type: 'mcq',
              prompt:
                'Soit $P \\in \\mathbb{R}[X]$ un polynôme non nul vérifiant l’équation $(X^2 - 1)P\'\'(X) = 12 P(X)$. Quel est nécessairement le degré $n$ de $P$ ?',
              options: ['$n = 4$', '$n = 3$', '$n = 2$', '$n = 6$'],
              correctAnswerIndex: 0,
              explanation:
                'Soit $P(X) = a_n X^n + \\cdots$ avec $a_n \\neq 0$. Le terme de plus haut degré de $(X^2 - 1)P\'\'(X)$ est $n(n-1)a_n X^n$, et celui de $12P(X)$ est $12 a_n X^n$. Par identification ($a_n \\neq 0$), $n(n-1) = 12 \\iff n^2 - n - 12 = 0 \\iff (n-4)(n+3) = 0$. Comme $n \\in \\mathbb{N}$, on a $n = 4$.',
              hint: 'Identifiez le coefficient du terme dominant $X^n$ dans $(X^2-1)P\'\' = 12P$ : $n(n-1) = 12$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'srit_l1_sa_c3_p2',
        order: 2,
        title: 'Racines, Multiplicité, D’Alembert-Gauss et Irréductibilité dans C[X] et R[X]',
        summary:
          'Caractériser les racines multiples par les dérivées, appliquer le théorème de d’Alembert-Gauss, factoriser en irréductibles dans C[X] et dans R[X] et utiliser les relations de Viète.',
        conceptExplanation:
          'Une racine $\\alpha \\in K$ d’un polynôme $P \\in K[X]$ correspond exactement à un facteur linéaire $(X - \\alpha)$ divisant $P$. Le théorème de d’Alembert-Gauss garantit que tout polynôme non constant de $\\mathbb{C}[X]$ est scindé (produit de facteurs de degré $1$). En regroupant les racines complexes non réelles conjuguées deux à deux, on en déduit que les polynômes irréductibles de $\\mathbb{R}[X]$ sont exactement ceux de degré $1$ et ceux de degré $2$ à discriminant $\\Delta < 0$.',
        keyRule:
          'En caractéristique $0$, $\\alpha$ est racine d’ordre de multiplicité $m \\ge 1$ de $P$ si et seulement si $P(\\alpha) = P\'(\\alpha) = \\cdots = P^{(m-1)}(\\alpha) = 0$ et $P^{(m)}(\\alpha) \\neq 0$.',
        formulas: [
          {
            name: 'Caractérisation d’une racine d’ordre m par les dérivées',
            formula: '\\alpha \\text{ racine d’ordre } m \\text{ de } P \\iff (X - \\alpha)^m \\mid P \\text{ et } (X - \\alpha)^{m+1} \\nmid P \\iff \\begin{cases} P(\\alpha) = P\'(\\alpha) = \\cdots = P^{(m-1)}(\\alpha) = 0 \\\\ P^{(m)}(\\alpha) \\neq 0 \\end{cases}',
            note: 'En particulier, α est racine au moins double de P ⇔ P(α) = 0 et P\'(α) = 0.',
          },
          {
            name: 'Factorisation en irréductibles dans R[X]',
            formula: 'P(X) = \\lambda \\prod_{i=1}^r (X - \\alpha_i)^{m_i} \\prod_{j=1}^s (X^2 + p_j X + q_j)^{n_j} \\quad \\text{avec } \\Delta_j = p_j^2 - 4q_j < 0',
            note: 'Les seuls polynômes irréductibles de R[X] sont de degré 1 ou de degré 2 avec Δ < 0.',
          },
        ],
        workedExample: {
          title: 'Factorisation de X⁴ + 1 en polynômes irréductibles dans C[X] puis dans R[X]',
          statement:
            'Factoriser le polynôme $P(X) = X^4 + 1$ en produit de polynômes irréductibles dans $\\mathbb{C}[X]$, puis en déduire sa factorisation en irréductibles dans $\\mathbb{R}[X]$.',
          methodSteps: [
            'Dans $\\mathbb{C}$, on résout $z^4 = -1 = e^{i\\pi}$ : les $4$ racines sont $z_k = e^{i(\\pi + 2k\\pi)/4}$ pour $k \\in \\{0, 1, 2, 3\\}$, soit $e^{i\\pi/4}, e^{i3\\pi/4}, e^{-i3\\pi/4}, e^{-i\\pi/4}$.',
            'Dans $\\mathbb{C}[X]$, la factorisation en irréductibles est $X^4 + 1 = (X - e^{i\\pi/4})(X - e^{-i\\pi/4})(X - e^{i3\\pi/4})(X - e^{-i3\\pi/4})$.',
            'Pour passer à $\\mathbb{R}[X]$, on regroupe les facteurs conjugués avec $(X - e^{i\\theta})(X - e^{-i\\theta}) = X^2 - 2\\cos(\\theta)X + 1$ :',
            'Pour $\\theta = \\pi/4$ ($2\\cos(\\pi/4) = \\sqrt{2}$) : $X^2 - \\sqrt{2}X + 1$. Pour $\\theta = 3\\pi/4$ ($2\\cos(3\\pi/4) = -\\sqrt{2}$) : $X^2 + \\sqrt{2}X + 1$.',
          ],
          conclusion:
            'Dans $\\mathbb{R}[X]$, $X^4 + 1 = (X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$ (ou par complétion du carré : $(X^2+1)^2 - (\\sqrt{2}X)^2$).',
        },
        visualSchema: {
          type: 'matrix_2x2',
          title: 'Comparaison de la factorisation en irréductibles dans C[X] et dans R[X]',
          caption: 'Tout polynôme réel de degré ≥ 3 est réductible dans R[X].',
          matrix2x2: {
            topAxis: ['Dans C[X] (Corps algébriquement clos)', 'Dans R[X]'],
            leftAxis: ['Polynômes irréductibles', 'Factorisation de tout P (deg P ≥ 1)'],
            topLeft: {
              title: 'Uniquement degré 1',
              items: [
                'P irréductible dans C[X] ⇔ deg P = 1',
                'Forme : aX + b avec a ∈ C*',
                'Théorème de d’Alembert-Gauss',
              ],
              color: 'blue',
            },
            topRight: {
              title: 'Degré 1 ou Degré 2 (Δ < 0)',
              items: [
                'Polynômes de degré 1 : aX + b',
                'Polynômes de degré 2 : aX² + bX + c avec Δ = b² - 4ac < 0',
                'Aucun polynôme de degré ≥ 3 n’est irréductible dans R[X] !',
              ],
              color: 'violet',
            },
            bottomLeft: {
              title: 'Toujours scindé sur C',
              items: [
                'P(X) = λ ∏(X - αᵢ)^{mᵢ}',
                '∑ mᵢ = deg P (exactement n racines comptées avec multiplicité)',
              ],
              color: 'green',
            },
            bottomRight: {
              title: 'Facteurs de deg 1 et deg 2',
              items: [
                'Les racines complexes non réelles de P ∈ R[X] vont par paires conjuguées (α et ᾱ)',
                '(X - α)(X - ᾱ) = X² - 2Re(α)X + |α|² ∈ R[X]',
              ],
              color: 'orange',
            },
          },
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Racines & Divisibilité',
            stepTheme: 'blue',
            stepTitle: 'Racines d’un polynôme et nombre maximal de racines',
            paragraphText:
              'Un élément $\\alpha \\in K$ est une **racine** (ou un zéro) de $P \\in K[X]$ si $P(\\alpha) = 0$, ce qui équivaut à $(X - \\alpha) \\mid P(X)$. Si $\\alpha_1, \\alpha_2, \\dots, \\alpha_r \\in K$ sont des racines **deux à deux distinctes** de $P$, les polynômes $X - \\alpha_i$ sont deux à deux premiers entre eux, donc leur produit $\\prod_{i=1}^r (X - \\alpha_i)$ divise $P(X)$. En comparant les degrés, un polynôme non nul de degré $n$ dans $K[X]$ possède **au plus $n$ racines** dans le corps $K$.',
            formula: {
              name: 'Principe d’unicité polynomiale',
              formula: 'P \\in K[X],\\; \\deg P \\le n \\text{ et } P \\text{ admet } n+1 \\text{ racines distinctes dans } K \\implies P = 0',
              note: 'Si un polynôme a strictement plus de racines que son degré, c’est obligatoirement le polynôme nul !',
            },
            keyRule:
              'Pour prouver que deux polynômes $P, Q \\in K[X]$ de degré $\\le n$ sont égaux, il suffit de montrer qu’ils prennent la même valeur en $n + 1$ points distincts (ou une infinité de points).',
            konanTip:
              'Attention : cette règle exige que $K$ soit un corps (ou un anneau intègre) ; dans $(\\mathbb{Z}/8\\mathbb{Z})[X]$, $X^2 - \\bar{1}$ est de degré $2$ mais possède $4$ racines !',
            exercise: {
              id: 'srit_l1_sa_c3_p2_s1',
              type: 'mcq',
              prompt:
                'Soit $P \\in \\mathbb{R}[X]$ un polynôme tel que $\\deg P \\le 3$ et $P(0) = P(1) = P(2) = P(3) = 5$. Que vaut $P(X)$ ?',
              options: [
                '$P(X) = 5$ (polynôme constant égal à $5$)',
                '$P(X) = X(X-1)(X-2) + 5$',
                '$P(X) = 5X^3$',
                '$P(X) = 0$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Posons $Q(X) = P(X) - 5$. Alors $\\deg Q \\le 3$ et $Q$ s’annule en $4$ points distincts ($0, 1, 2, 3$). Comme un polynôme non nul de degré $\\le 3$ a au plus $3$ racines, $Q$ est le polynôme nul, donc $P(X) = 5$.',
              hint: 'Considérez le polynôme $Q(X) = P(X) - 5$ qui est de degré $\\le 3$ et possède $4$ racines.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Multiplicité',
            stepTheme: 'green',
            stepTitle: 'Ordre de multiplicité d’une racine et critère des dérivées',
            paragraphText:
              'Un élément $\\alpha \\in K$ est une **racine d’ordre de multiplicité $m \\in \\mathbb{N}^*$** de $P \\in K[X]$ si $(X - \\alpha)^m$ divise $P(X)$ mais $(X - \\alpha)^{m+1}$ ne divise pas $P(X)$, autrement dit $P(X) = (X - \\alpha)^m Q(X)$ avec $Q(\\alpha) \\neq 0$. En caractéristique $0$ ($K = \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$), la formule de Taylor fournit la caractérisation pratique fondamentale : $\\alpha$ est racine d’ordre $m$ de $P$ si et seulement si $P(\\alpha) = P\'(\\alpha) = \\cdots = P^{(m-1)}(\\alpha) = 0$ et $P^{(m)}(\\alpha) \\neq 0$.',
            formula: {
              name: 'Racine simple, double, triple',
              formula: '\\begin{cases} \\text{Racine simple } (m=1) : P(\\alpha) = 0 \\text{ et } P\'(\\alpha) \\neq 0 \\\\ \\text{Racine double } (m=2) : P(\\alpha) = P\'(\\alpha) = 0 \\text{ et } P\'\'(\\alpha) \\neq 0 \\end{cases}',
              note: 'Un polynôme P ∈ C[X] est à racines simples si et seulement si PGCD(P, P\') = 1.',
            },
            keyRule:
              'Si $\\alpha$ est racine d’ordre $m \\ge 1$ de $P$, alors $\\alpha$ est racine d’ordre $m - 1$ du polynôme dérivé $P\'$.',
            konanTip:
              'Pour vérifier si un polynôme $P$ possède des racines multiples sans même connaître ses racines, calculez $\\text{PGCD}(P, P\')$ : les racines multiples de $P$ sont exactement les racines de $\\text{PGCD}(P, P\')$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p2_s2',
              type: 'mcq',
              prompt:
                'Pour quelles valeurs des réels $a$ et $b$ le nombre $\\alpha = 1$ est-il une racine au moins double du polynôme $P(X) = X^4 + aX + b$ ?',
              options: [
                '$a = -4$ et $b = 3$',
                '$a = 4$ et $b = -5$',
                '$a = -2$ et $b = 1$',
                '$a = 0$ et $b = -1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour que $1$ soit racine au moins double, il faut et il suffit que $P(1) = 0$ et $P\'(1) = 0$. Or $P\'(X) = 4X^3 + a$, donc $P\'(1) = 4 + a = 0 \\implies a = -4$. Puis $P(1) = 1 + a + b = 1 - 4 + b = 0 \\implies b = 3$.',
              hint: 'Résolvez le système $P(1) = 0$ et $P\'(1) = 0$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'D’Alembert-Gauss',
            stepTheme: 'violet',
            stepTitle: 'Théorème de d’Alembert-Gauss et factorisation dans C[X]',
            paragraphText:
              'Le **théorème de d’Alembert-Gauss** (ou théorème fondamental de l’algèbre) affirme que le corps $\\mathbb{C}$ est **algébriquement clos** : tout polynôme non constant $P \\in \\mathbb{C}[X]$ ($\\deg P \\ge 1$) admet au moins une racine dans $\\mathbb{C}$. Par récurrence sur le degré, tout polynôme $P \\in \\mathbb{C}[X]$ de degré $n \\ge 1$ est **scindé** sur $\\mathbb{C}$ : $P(X) = a_n \\prod_{i=1}^r (X - \\alpha_i)^{m_i}$ avec $\\sum_{i=1}^r m_i = n$. Les seuls polynômes **irréductibles** de $\\mathbb{C}[X]$ sont donc les polynômes de **degré $1$**.',
            formula: {
              name: 'Factorisation canonique dans C[X]',
              formula: 'P(X) = a_n (X - \\alpha_1)^{m_1} (X - \\alpha_2)^{m_2} \\cdots (X - \\alpha_r)^{m_r} \\quad \\text{avec } \\sum_{i=1}^r m_i = \\deg P',
              note: 'En particulier, les racines n-ièmes de l’unité donnent X^n − 1 = ∏_{k=0}^{n−1} (X − e^{2ikπ/n}).',
            },
            keyRule:
              'Dans $\\mathbb{C}[X]$, un polynôme de degré $n \\ge 1$ possède toujours exactement $n$ racines complexes lorsqu’on les compte avec leur ordre de multiplicité.',
            konanTip:
              'En dérivant ou en évaluant $X^n - 1 = (X - 1)\\prod_{k=1}^{n-1}(X - e^{2ik\\pi/n})$, on trouve en posant $X = 1$ la relation célèbre $\\prod_{k=1}^{n-1} (1 - e^{2ik\\pi/n}) = n$.',
            exercise: {
              id: 'srit_l1_sa_c3_p2_s3',
              type: 'mcq',
              prompt:
                'Quels sont tous les polynômes irréductibles de l’anneau $\\mathbb{C}[X]$ ?',
              options: [
                'Uniquement les polynômes de degré $1$',
                'Les polynômes de degré $1$ et ceux de degré $2$ à discriminant non nul',
                'Les polynômes de la forme $X^n + 1$',
                'Les polynômes constants non nuls',
              ],
              correctAnswerIndex: 0,
              explanation:
                'D’après le théorème de d’Alembert-Gauss, tout polynôme de $\\mathbb{C}[X]$ de degré $\\ge 2$ possède une racine complexe $\\alpha$ et est donc divisible par $X - \\alpha$ (réductible). Les seuls polynômes irréductibles de $\\mathbb{C}[X]$ sont donc ceux de degré $1$.',
              hint: 'Dans un corps algébriquement clos comme $\\mathbb{C}$, tout polynôme est scindé.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Conjugaison dans R[X]',
            stepTheme: 'violet',
            stepTitle: 'Racines complexes conjuguées d’un polynôme à coefficients réels',
            paragraphText:
              'Soit $P \\in \\mathbb{R}[X]$ un polynôme à coefficients **réels**. Comme la conjugaison complexe est un automorphisme de corps qui fixe $\\mathbb{R}$, on a $\\forall z \\in \\mathbb{C}, P(\\bar{z}) = \\overline{P(z)}$. Par conséquent, si un nombre complexe non réel $\\alpha \\in \\mathbb{C} \\setminus \\mathbb{R}$ est racine de $P$ avec l’ordre de multiplicité $m$, alors son conjugué $\\bar{\\alpha}$ est aussi racine de $P$ avec le **même ordre de multiplicité $m$**. Le produit $(X - \\alpha)(X - \\bar{\\alpha}) = X^2 - 2\\text{Re}(\\alpha)X + |\\alpha|^2$ est un polynôme de $\\mathbb{R}[X]$ de degré $2$ à discriminant $\\Delta < 0$.',
            formula: {
              name: 'Regroupement de deux facteurs conjugués',
              formula: '(X - \\alpha)(X - \\bar{\\alpha}) = X^2 - 2\\,\\text{Re}(\\alpha)\\,X + |\\alpha|^2 = (X - \\text{Re}(\\alpha))^2 + (\\text{Im}(\\alpha))^2 \\in \\mathbb{R}[X]',
              note: 'Son discriminant vaut Δ = 4(Re α)² − 4|α|² = −4(Im α)² < 0.',
            },
            keyRule:
              'Tout polynôme $P \\in \\mathbb{R}[X]$ de **degré impair** possède obligatoirement **au moins une racine réelle** (car ses racines complexes non réelles vont par paires conjuguées).',
            konanTip:
              'Pour montrer qu’un polynôme réel $P$ est divisible par $X^2 + 1$ dans $\\mathbb{R}[X]$, il suffit de vérifier que $P(i) = 0$ (car alors $P(-i) = \\overline{P(i)} = 0$ est automatique) !',
            exercise: {
              id: 'srit_l1_sa_c3_p2_s4',
              type: 'mcq',
              prompt:
                'Soit $P \\in \\mathbb{R}[X]$ un polynôme unitaire de degré $3$ tel que $P(1 + 2i) = 0$ et $P(0) = -15$. Quelle est l’unique racine réelle de $P$ ?',
              options: ['$3$', '$-3$', '$5$', '$-5$'],
              correctAnswerIndex: 0,
              explanation:
                'Comme $P \\in \\mathbb{R}[X]$ et $1+2i$ est racine, son conjugué $1-2i$ est aussi racine. Or $(X - (1+2i))(X - (1-2i)) = (X-1)^2 + 4 = X^2 - 2X + 5$. Soit $r \\in \\mathbb{R}$ la troisième racine : $P(X) = (X^2 - 2X + 5)(X - r)$. En évaluant en $0$, $P(0) = -5r = -15 \\implies r = 3$.',
              hint: 'Utilisez le fait que $1 - 2i$ est aussi racine et que $(X - (1+2i))(X - (1-2i)) = X^2 - 2X + 5$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Irréductibles de R[X]',
            stepTheme: 'green',
            stepTitle: 'Polynômes irréductibles et factorisation dans R[X]',
            paragraphText:
              'Les polynômes **irréductibles** de $\\mathbb{R}[X]$ sont exactement de deux types : (1) les polynômes de **degré $1$** ($aX + b$ avec $a \\neq 0$), et (2) les polynômes de **degré $2$ à discriminant strictement négatif** ($aX^2 + bX + c$ avec $\\Delta = b^2 - 4ac < 0$). Tout polynôme de $\\mathbb{R}[X]$ de degré $\\ge 3$ est donc **réductible** dans $\\mathbb{R}[X]$. Pour factoriser un polynôme pair de degré $4$ comme $X^4 + aX^2 + b^2$ ($b > 0$) sans racine évidente, on complète le carré : $X^4 + aX^2 + b^2 = (X^2 + b)^2 - (2b - a)X^2$.',
            formula: {
              name: 'Identité de Sophie Germain (exemple classique de réductibilité dans R[X])',
              formula: 'X^4 + 4 = (X^2 + 2)^2 - 4X^2 = (X^2 - 2X + 2)(X^2 + 2X + 2)',
              note: 'Bien que X⁴ + 4 n’ait aucune racine réelle, il est réductible dans R[X] !',
            },
            keyRule:
              'Attention au piège : « $P \\in \\mathbb{R}[X]$ n’a aucune racine réelle » n’implique PAS que $P$ est irréductible dans $\\mathbb{R}[X]$ dès que $\\deg P \\ge 4$ (exemple : $X^4 + 1$ ou $X^4 + 4$).',
            konanTip:
              'En revanche, pour un polynôme de degré $2$ ou $3$ sur un corps $K$, être irréductible dans $K[X]$ équivaut bien à ne posséder aucune racine dans $K$.',
            exercise: {
              id: 'srit_l1_sa_c3_p2_s5',
              type: 'mcq',
              prompt:
                'Quelle est la décomposition en produit de polynômes irréductibles dans $\\mathbb{R}[X]$ du polynôme $P(X) = X^4 + X^2 + 1$ ?',
              options: [
                '$(X^2 - X + 1)(X^2 + X + 1)$',
                '$X^4 + X^2 + 1$ est irréductible dans $\\mathbb{R}[X]$',
                '$(X^2 + 1)^2$',
                '$(X - 1)(X + 1)(X^2 + X + 1)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par complétion du carré : $X^4 + X^2 + 1 = (X^4 + 2X^2 + 1) - X^2 = (X^2 + 1)^2 - X^2 = (X^2 - X + 1)(X^2 + X + 1)$. Chacun des deux facteurs de degré $2$ a un discriminant $\\Delta = 1 - 4 = -3 < 0$, donc ils sont irréductibles dans $\\mathbb{R}[X]$.',
              hint: 'Écrivez $X^4 + X^2 + 1 = (X^2 + 1)^2 - X^2$ et utilisez $A^2 - B^2 = (A-B)(A+B)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Relations de Viète',
            stepTheme: 'violet',
            stepTitle: 'Relations entre coefficients et racines (formules de Viète)',
            paragraphText:
              'Soit $P(X) = a_n X^n + a_{n-1} X^{n-1} + \\cdots + a_1 X + a_0$ un polynôme scindé de degré $n$ de racines $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$ (comptées avec multiplicité). En développant $a_n \\prod_{i=1}^n (X - \\alpha_i)$, on obtient les **relations coefficients-racines de Viète** : la somme des racines vaut $\\sigma_1 = \\sum_{i=1}^n \\alpha_i = -\\frac{a_{n-1}}{a_n}$, et le produit des racines vaut $\\sigma_n = \\prod_{i=1}^n \\alpha_i = (-1)^n \\frac{a_0}{a_n}$. Pour $n = 3$ ($P(X) = a_3 X^3 + a_2 X^2 + a_1 X + a_0$), on a aussi $\\sigma_2 = \\alpha_1\\alpha_2 + \\alpha_1\\alpha_3 + \\alpha_2\\alpha_3 = \\frac{a_1}{a_3}$.',
            formula: {
              name: 'Relations de Viète pour un polynôme de degré 3 : a₃X³ + a₂X² + a₁X + a₀',
              formula: '\\begin{cases} \\alpha_1 + \\alpha_2 + \\alpha_3 = -\\dfrac{a_2}{a_3} \\\\[6pt] \\alpha_1\\alpha_2 + \\alpha_1\\alpha_3 + \\alpha_2\\alpha_3 = \\dfrac{a_1}{a_3} \\\\[6pt] \\alpha_1\\alpha_2\\alpha_3 = -\\dfrac{a_0}{a_3} \\end{cases}',
              note: 'Notez l’alternance des signes : −, +, −, +, ...',
            },
            keyRule:
              'On a toujours $\\alpha_1^2 + \\alpha_2^2 + \\alpha_3^2 = (\\alpha_1 + \\alpha_2 + \\alpha_3)^2 - 2(\\alpha_1\\alpha_2 + \\alpha_1\\alpha_3 + \\alpha_2\\alpha_3) = \\sigma_1^2 - 2\\sigma_2$.',
            konanTip:
              'De même, la somme des inverses des racines (si $a_0 \\neq 0$) vaut directement $\\frac{1}{\\alpha_1} + \\frac{1}{\\alpha_2} + \\frac{1}{\\alpha_3} = \\frac{\\sigma_2}{\\sigma_3} = -\\frac{a_1}{a_0}$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p2_s6',
              type: 'mcq',
              prompt:
                'Soient $\\alpha_1, \\alpha_2, \\alpha_3 \\in \\mathbb{C}$ les trois racines du polynôme $P(X) = X^3 - 4X^2 + 5X - 7$. Que vaut la somme des carrés $\\alpha_1^2 + \\alpha_2^2 + \\alpha_3^2$ ?',
              options: ['$6$', '$16$', '$26$', '$-6$'],
              correctAnswerIndex: 0,
              explanation:
                'D’après les formules de Viète, $\\sigma_1 = \\alpha_1 + \\alpha_2 + \\alpha_3 = 4$ et $\\sigma_2 = \\alpha_1\\alpha_2 + \\alpha_1\\alpha_3 + \\alpha_2\\alpha_3 = 5$. Donc $\\alpha_1^2 + \\alpha_2^2 + \\alpha_3^2 = \\sigma_1^2 - 2\\sigma_2 = 4^2 - 2 \\times 5 = 16 - 10 = 6$.',
              hint: 'Utilisez $\\alpha_1^2 + \\alpha_2^2 + \\alpha_3^2 = (\\alpha_1+\\alpha_2+\\alpha_3)^2 - 2(\\alpha_1\\alpha_2+\\alpha_1\\alpha_3+\\alpha_2\\alpha_3)$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'srit_l1_sa_c3_p3',
        order: 3,
        title: 'Fractions rationnelles K(X) et Décomposition en éléments simples (DES)',
        summary:
          'Déterminer la partie entière, les pôles et la décomposition en éléments simples d’une fraction rationnelle dans C(X) et dans R(X).',
        conceptExplanation:
          'Le corps des fractions rationnelles $K(X)$ est l’ensemble des quotients $F(X) = \\frac{P(X)}{Q(X)}$ avec $P, Q \\in K[X]$ et $Q \\neq 0$. Le théorème de décomposition en éléments simples (DES) permet d’écrire toute fraction rationnelle de manière unique comme somme d’un polynôme (sa partie entière $E(X)$) et de fractions élémentaires associées aux facteurs irréductibles du dénominateur $Q(X)$. Cet outil est indispensable en Analyse 2 pour le calcul des primitives de fractions rationnelles et en traitement du signal (transformée en $Z$ et transformée de Laplace).',
        keyRule:
          'Avant toute décomposition en éléments simples de $F = P/Q$, vérifier que $F$ est irréductible ($\\text{PGCD}(P,Q) = 1$) et extraire la partie entière $E(X)$ par division euclidienne si $\\deg P \\ge \\deg Q$.',
        formulas: [
          {
            name: 'Calcul rapide du coefficient d’un pôle simple α',
            formula: 'F(X) = \\frac{P(X)}{Q(X)} \\text{ avec } \\alpha \\text{ racine simple de } Q \\implies a_1 = \\lim_{X \\to \\alpha} (X - \\alpha)F(X) = \\frac{P(\\alpha)}{Q\'(\\alpha)}',
            note: 'La formule a₁ = P(α) / Q\'(α) évite de factoriser complètement Q(X) lorsqu’on connaît ses racines simples (ex : Q(X) = X^n − 1).',
          },
          {
            name: 'Forme générale de la DES dans R(X)',
            formula: 'F(X) = E(X) + \\sum_i \\sum_{k=1}^{m_i} \\frac{a_{i,k}}{(X - \\alpha_i)^k} + \\sum_j \\sum_{\\ell=1}^{n_j} \\frac{b_{j,\\ell} X + c_{j,\\ell}}{(X^2 + p_j X + q_j)^\\ell}',
            note: 'Au-dessus d’un facteur irréductible de degré 2 (Δ < 0), le numérateur est de degré ≤ 1 : bX + c.',
          },
        ],
        workedExample: {
          title: 'Décomposition en éléments simples complète dans R(X)',
          statement:
            'Décomposer en éléments simples dans $\\mathbb{R}(X)$ la fraction rationnelle $F(X) = \\frac{X^3 + 2}{X(X - 1)^2}$.',
          methodSteps: [
            'Le numérateur $P(X) = X^3 + 2$ et le dénominateur $Q(X) = X(X-1)^2 = X^3 - 2X^2 + X$ ont tous deux le degré $3$. La division euclidienne donne $X^3 + 2 = 1 \\cdot (X^3 - 2X^2 + X) + (2X^2 - X + 2)$, donc la partie entière est $E(X) = 1$.',
            'La forme théorique de la DES est $F(X) = 1 + \\frac{a}{X} + \\frac{b}{X - 1} + \\frac{c}{(X - 1)^2}$.',
            'On multiplie par $X$ et on évalue en $X = 0$ : $a = \\left[\\frac{X^3 + 2}{(X - 1)^2}\\right]_{X=0} = \\frac{2}{1} = 2$.',
            'On multiplie par $(X - 1)^2$ et on évalue en $X = 1$ : $c = \\left[\\frac{X^3 + 2}{X}\\right]_{X=1} = \\frac{3}{1} = 3$.',
            'Pour trouver $b$, on multiplie $F(X) - 1$ par $X$ et on fait tendre $X \\to +\\infty$ : $\\lim_{X \\to \\infty} X(F(X) - 1) = 2 = a + b$, d’où $b = 2 - a = 2 - 2 = 0$.',
          ],
          conclusion:
            'Dans $\\mathbb{R}(X)$, $F(X) = 1 + \\frac{2}{X} + \\frac{3}{(X - 1)^2}$.',
        },
        visualSchema: {
          type: 'flowchart',
          title: 'Protocole en 4 étapes pour réussir toute Décomposition en Éléments Simples (DES)',
          caption: 'Ne sautez jamais l’étape 1 (simplification et partie entière) !',
          flowchart: {
            direction: 'vertical',
            steps: [
              {
                id: 'des1',
                label: 'Étape 1 : Forme irréductible & Partie entière E(X)',
                sublabel: 'Si deg P < deg Q ⇒ E(X) = 0. Si deg P ≥ deg Q ⇒ division euclidienne P = Q·E + R',
                kind: 'start',
                color: 'blue',
              },
              {
                id: 'des2',
                label: 'Étape 2 : Factorisation de Q(X) en irréductibles',
                sublabel: 'Sur C : facteurs (X - αᵢ)^{mᵢ}. Sur R : facteurs (X - αᵢ)^{mᵢ} et (X² + pⱼX + qⱼ)^{nⱼ} (Δ < 0)',
                kind: 'process',
                color: 'violet',
              },
              {
                id: 'des3',
                label: 'Étape 3 : Écriture de la structure théorique de la DES',
                sublabel: 'Constantes a_{i,k} sur (X - αᵢ)^k (1re espèce) ; binômes bX + c sur (X² + pX + q)^ℓ (2e espèce)',
                kind: 'process',
                color: 'green',
              },
              {
                id: 'des4',
                label: 'Étape 4 : Calcul des coefficients (Méthodes rapides)',
                sublabel: 'Multiplication-évaluation (cache), formule P(α)/Q\'(α), parité de F, limite de X·F(X) en +∞',
                kind: 'end',
                color: 'orange',
              },
            ],
          },
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Degré & Partie entière',
            stepTheme: 'blue',
            stepTitle: 'Forme irréductible, degré et partie entière d’une fraction rationnelle',
            paragraphText:
              'Toute fraction rationnelle $F \\in K(X)$ s’écrit de façon unique sous **forme irréductible** $F(X) = \\frac{P(X)}{Q(X)}$ où $P, Q \\in K[X]$, $Q$ est unitaire et $\\text{PGCD}(P, Q) = 1$. Le **degré** de $F$ est défini par $\\deg F = \\deg P - \\deg Q \\in \\mathbb{Z} \\cup \\{-\\infty\\}$. Par division euclidienne de $P$ par $Q$ ($P = Q E + R$ avec $\\deg R < \\deg Q$), $F$ s’écrit de façon unique $F(X) = E(X) + \\frac{R(X)}{Q(X)}$. Le polynôme $E(X) \\in K[X]$ est appelé la **partie entière** de $F$ : en particulier, **$E(X) = 0 \\iff \\deg P < \\deg Q$**.',
            formula: {
              name: 'Partie entière d’une fraction rationnelle F = P / Q',
              formula: 'P = Q E + R \\;(\\deg R < \\deg Q) \\implies F(X) = E(X) + \\frac{R(X)}{Q(X)}',
              note: 'Si deg P ≥ deg Q, la partie entière E(X) est de degré deg P − deg Q.',
            },
            keyRule:
              'La toute première question à se poser devant une fraction $F = P/Q$ est : a-t-on $\\deg P < \\deg Q$ ? Si $\\deg P \\ge \\deg Q$, la partie entière $E(X)$ est NON NULLE !',
            konanTip:
              'Oublier la partie entière quand $\\deg P = \\deg Q$ est l’erreur n°1 aux examens : par exemple pour $\\frac{X^2}{X^2 - 1}$, la partie entière vaut $E(X) = 1$ (et non $0$).',
            exercise: {
              id: 'srit_l1_sa_c3_p3_s1',
              type: 'mcq',
              prompt:
                'Quelle est la partie entière $E(X)$ de la fraction rationnelle $F(X) = \\dfrac{2X^3 - X^2 + 5}{X^2 - 1}$ ?',
              options: [
                '$E(X) = 2X - 1$',
                '$E(X) = 2X$',
                '$E(X) = 0$',
                '$E(X) = 2X + 4$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On effectue la division euclidienne de $2X^3 - X^2 + 5$ par $X^2 - 1$ : $2X^3 - X^2 + 5 = (2X - 1)(X^2 - 1) + (2X + 4)$ avec $\\deg(2X+4) = 1 < 2$. Le quotient est donc la partie entière $E(X) = 2X - 1$.',
              hint: 'Effectuez la division euclidienne de $2X^3 - X^2 + 5$ par $X^2 - 1$ et prenez le quotient.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Pôles & Multiplicité',
            stepTheme: 'blue',
            stepTitle: 'Racines et pôles d’une fraction rationnelle irréductible',
            paragraphText:
              'Soit $F(X) = \\frac{P(X)}{Q(X)} \\in K(X)$ écrite sous **forme irréductible** ($\\text{PGCD}(P, Q) = 1$). Les racines de $P$ dans $K$ sont appelées les **racines** (ou zéros) de $F$, et les **racines du dénominateur $Q$** dans $K$ sont appelées les **pôles** de $F$. Un élément $\\alpha \\in K$ est un **pôle d’ordre de multiplicité $m \\ge 1$** de $F$ si $\\alpha$ est une racine d’ordre $m$ du dénominateur $Q(X)$ (et comme $\\text{PGCD}(P,Q)=1$, on a alors nécessairement $P(\\alpha) \\neq 0$).',
            formula: {
              name: 'Pôle d’ordre m d’une fraction irréductible F = P / Q',
              formula: '\\alpha \\text{ pôle d’ordre } m \\text{ de } F \\iff Q(X) = (X - \\alpha)^m Q_1(X) \\text{ avec } Q_1(\\alpha) \\neq 0 \\text{ et } P(\\alpha) \\neq 0',
              note: 'Si P(α) = 0 et Q(α) = 0, la fraction n’est pas irréductible : il faut d’abord simplifier par (X − α) !',
            },
            keyRule:
              'Ne déterminez jamais l’ordre d’un pôle avant d’avoir simplifié les facteurs communs entre le numérateur $P$ et le dénominateur $Q$.',
            konanTip:
              'Pour $F(X) = \\frac{X^2 - 1}{(X - 1)^3}$, le nombre $1$ n’est PAS un pôle d’ordre $3$ : après simplification par $X - 1$, $F(X) = \\frac{X + 1}{(X - 1)^2}$ donc $1$ est un pôle d’ordre $2$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p3_s2',
              type: 'mcq',
              prompt:
                'Quel est l’ordre de multiplicité du pôle $\\alpha = 2$ pour la fraction rationnelle $F(X) = \\dfrac{X^2 - 4}{(X - 2)^4 (X + 1)}$ ?',
              options: [
                'Pôle d’ordre $3$',
                'Pôle d’ordre $4$',
                'Pôle d’ordre $2$',
                'Pôle simple (d’ordre $1$)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On met d’abord $F$ sous forme irréductible : comme $X^2 - 4 = (X - 2)(X + 2)$, on simplifie par $X - 2$ pour obtenir $F(X) = \\frac{X + 2}{(X - 2)^3 (X + 1)}$. Comme $2 + 2 = 4 \\neq 0$, $\\alpha = 2$ est un pôle d’ordre $3$.',
              hint: 'Factorisez d’abord $X^2 - 4 = (X-2)(X+2)$ et simplifiez par $X - 2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'DES dans C(X)',
            stepTheme: 'green',
            stepTitle: 'Décomposition en éléments simples dans C(X) et pôles simples',
            paragraphText:
              'Dans $\\mathbb{C}(X)$, si $F = \\frac{P}{Q}$ a pour dénominateur factorisé $Q(X) = \\prod_{i=1}^r (X - \\alpha_i)^{m_i}$, alors il existe un unique polynôme $E(X)$ et d’uniques complexes $a_{i,k} \\in \\mathbb{C}$ tels que $F(X) = E(X) + \\sum_{i=1}^r \\sum_{k=1}^{m_i} \\frac{a_{i,k}}{(X - \\alpha_i)^k}$. La somme $\\sum_{k=1}^{m_i} \\frac{a_{i,k}}{(X - \\alpha_i)^k}$ est la **partie polaire** relative au pôle $\\alpha_i$. Le coefficient dominant $a_{i, m_i}$ de chaque pôle se calcule par la **méthode du cache** : $a_{i, m_i} = \\left[(X - \\alpha_i)^{m_i} F(X)\\right]_{X = \\alpha_i}$. Si $\\alpha_i$ est un **pôle simple** ($m_i = 1$), on a aussi la formule de la dérivée : $a_{i,1} = \\frac{P(\\alpha_i)}{Q\'(\\alpha_i)}$.',
            formula: {
              name: 'Décomposition de 1 / (X^n − 1) dans C(X)',
              formula: '\\frac{1}{X^n - 1} = \\frac{1}{n} \\sum_{k=0}^{n-1} \\frac{\\omega_k}{X - \\omega_k} \\quad \\text{où } \\omega_k = e^{2ik\\pi/n}',
              note: 'Car pour chaque racine simple ω_k de Q(X) = X^n − 1, on a P(ω_k)/Q\'(ω_k) = 1 / (n ω_k^{n−1}) = ω_k / n.',
            },
            keyRule:
              'Pour un pôle d’ordre $m \\ge 2$, la méthode du cache $\\left[(X-\\alpha)^m F(X)\\right]_{X=\\alpha}$ donne UNIQUEMENT le coefficient $a_m$ de $\\frac{1}{(X-\\alpha)^m}$ (et pas $a_1, \\dots, a_{m-1}$).',
            konanTip:
              'La formule $a_1 = \\frac{P(\\alpha)}{Q\'(\\alpha)}$ est magique quand $Q(X) = X^n - 1$ ou $X^n + 1$ car $Q\'(X) = n X^{n-1}$ est immédiat !',
            exercise: {
              id: 'srit_l1_sa_c3_p3_s3',
              type: 'mcq',
              prompt:
                'Dans la décomposition en éléments simples de $F(X) = \\dfrac{X + 5}{(X - 1)(X + 2)}$ dans $\\mathbb{R}(X)$, soit $F(X) = \\dfrac{a}{X - 1} + \\dfrac{b}{X + 2}$, que valent $a$ et $b$ ?',
              options: [
                '$a = 2$ et $b = -1$',
                '$a = 2$ et $b = 1$',
                '$a = -2$ et $b = 3$',
                '$a = 1$ et $b = -1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par la méthode du cache : en multipliant par $X - 1$ et en posant $X = 1$, on a $a = \\frac{1 + 5}{1 + 2} = \\frac{6}{3} = 2$. En multipliant par $X + 2$ et en posant $X = -2$, on a $b = \\frac{-2 + 5}{-2 - 1} = \\frac{3}{-3} = -1$.',
              hint: 'Utilisez la méthode du cache en $X = 1$ pour $a$, puis en $X = -2$ pour $b$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'DES dans R(X)',
            stepTheme: 'violet',
            stepTitle: 'Décomposition en éléments simples dans R(X) : 1re et 2e espèce',
            paragraphText:
              'Dans $\\mathbb{R}(X)$, la factorisation du dénominateur $Q(X)$ comporte des facteurs irréductibles de degré $1$, $(X - \\alpha_i)^{m_i}$, et des facteurs irréductibles de degré $2$ à discriminant $\\Delta < 0$, $(X^2 + p_j X + q_j)^{n_j}$. La DES dans $\\mathbb{R}(X)$ contient alors deux types de termes : les **éléments simples de 1re espèce** $\\frac{a_{i,k}}{(X - \\alpha_i)^k}$ (avec $a_{i,k} \\in \\mathbb{R}$ constant), et les **éléments simples de 2e espèce** $\\frac{b_{j,\\ell} X + c_{j,\\ell}}{(X^2 + p_j X + q_j)^\\ell}$ (avec un numérateur affine $b_{j,\\ell}X + c_{j,\\ell} \\in \\mathbb{R}[X]$ de degré $\\le 1$).',
            formula: {
              name: 'Éléments simples de 1re et de 2e espèce dans R(X)',
              formula: '\\underbrace{\\frac{a}{(X - \\alpha)^k}}_{\\text{1re espèce (numérateur constant)}} \\qquad \\text{et} \\qquad \\underbrace{\\frac{b X + c}{(X^2 + p X + q)^\\ell}}_{\\text{2e espèce (numérateur de degré } \\le 1\\text{, } \\Delta < 0)}',
              note: 'Un élément simple de 2e espèce dans R(X) provient du regroupement de deux éléments conjugués de C(X).',
            },
            keyRule:
              'Dans $\\mathbb{R}(X)$, au-dessus de $(X^2 + pX + q)^\\ell$ avec $\\Delta < 0$, le numérateur est toujours de la forme $bX + c$ (et non une simple constante $c$, ni un polynôme de degré $2\\ell - 1$).',
            konanTip:
              'Pour trouver $b$ et $c$ dans $\\frac{bX + c}{X^2 + 1}$, multipliez toute l’égalité par $X^2 + 1$ et évaluez dans $\\mathbb{C}$ en $X = i$ : vous obtenez directement $bi + c$, d’où $c = \\text{Re}(\\dots)$ et $b = \\text{Im}(\\dots)$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p3_s4',
              type: 'mcq',
              prompt:
                'Quelle est la forme théorique exacte de la décomposition en éléments simples dans $\\mathbb{R}(X)$ de la fraction $F(X) = \\dfrac{2X + 1}{(X - 3)^2 (X^2 + 1)^2}$ ?',
              options: [
                '$\\dfrac{a}{X - 3} + \\dfrac{b}{(X - 3)^2} + \\dfrac{cX + d}{X^2 + 1} + \\dfrac{eX + f}{(X^2 + 1)^2}$',
                '$\\dfrac{a}{(X - 3)^2} + \\dfrac{cX + d}{(X^2 + 1)^2}$',
                '$\\dfrac{a}{X - 3} + \\dfrac{b}{(X - 3)^2} + \\dfrac{c}{X^2 + 1} + \\dfrac{d}{(X^2 + 1)^2}$',
                '$\\dfrac{aX + b}{(X - 3)^2} + \\dfrac{cX^3 + dX^2 + eX + f}{(X^2 + 1)^2}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $\\deg P = 1 < \\deg Q = 6$, la partie entière est nulle. Le pôle double $3$ donne $\\frac{a}{X-3} + \\frac{b}{(X-3)^2}$ (1re espèce), et le facteur irréductible $(X^2+1)^2$ ($\\Delta = -4 < 0$) donne $\\frac{cX+d}{X^2+1} + \\frac{eX+f}{(X^2+1)^2}$ (2e espèce).',
              hint: 'Il faut une fraction pour chaque exposant de $1$ jusqu’à la multiplicité, avec constante sur $X-3$ et $uX+v$ sur $X^2+1$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Astuces de Calcul',
            stepTheme: 'green',
            stepTitle: 'Techniques rapides : Parité, limite en +∞ et évaluation en un point',
            paragraphText:
              'Pour déterminer les coefficients restants d’une DES sans réduire au même dénominateur, on combine trois astuces puissantes : (1) **Parité** : par unicité de la DES, si $F(-X) = F(X)$ (paire) ou $F(-X) = -F(X)$ (impaire), l’identification des termes de $F(-X)$ fournit des relations immédiates entre les coefficients (ex : $a(-\\alpha) = \\pm a(\\alpha)$) ; (2) **Limite en $\\infty$** : si $\\deg P < \\deg Q$, calculer $\\lim_{X \\to +\\infty} X \\cdot F(X)$ donne la somme des coefficients des termes en $\\frac{a}{X - \\alpha}$ et $\\frac{bX+c}{X^2+pX+q}$ ; (3) **Évaluation** en une valeur simple comme $X = 0$ ou $X = 1$ (qui n’est pas un pôle).',
            formula: {
              name: 'Méthode de la limite à l’infini (quand E(X) = 0)',
              formula: '\\lim_{X \\to +\\infty} X \\cdot F(X) = \\sum_{i} a_{i, 1} + \\sum_{j} b_{j, 1}',
              note: 'Tous les termes d’exposant k ≥ 2 tendent vers 0 lorsqu’on les multiplie par X.',
            },
            keyRule:
              'Ne réduisez JAMAIS toute la DES au même dénominateur en premier recours : utilisez toujours cache + parité + limite de $X F(X)$ en $+\\infty$ + évaluation en $X = 0$.',
            konanTip:
              'Si $F(X)$ est une fonction paire ($F(-X) = F(X)$) et que sa DES contient $\\frac{a}{X - 1} + \\frac{b}{X + 1}$, alors $F(-X) = F(X)$ impose immédiatement $b = -a$ !',
            exercise: {
              id: 'srit_l1_sa_c3_p3_s5',
              type: 'mcq',
              prompt:
                'Soit la fraction paire $F(X) = \\dfrac{4}{(X^2 - 1)^2} = \\dfrac{a}{X - 1} + \\dfrac{b}{(X - 1)^2} + \\dfrac{c}{X + 1} + \\dfrac{d}{(X + 1)^2}$. Sachant que $b = 1$ et $a = -1$, que valent $c$ et $d$ par parité ($F(-X) = F(X)$) ?',
              options: [
                '$c = 1$ et $d = 1$',
                '$c = -1$ et $d = -1$',
                '$c = -1$ et $d = 1$',
                '$c = 1$ et $d = -1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En remplaçant $X$ par $-X$, on a $F(-X) = \\frac{-a}{X + 1} + \\frac{b}{(X + 1)^2} + \\frac{-c}{X - 1} + \\frac{d}{(X - 1)^2}$. Comme $F(-X) = F(X)$, par unicité de la DES on identifie : $c = -a = -(-1) = 1$ et $d = b = 1$.',
              hint: 'Remplacez $X$ par $-X$ dans la DES : $(-X - 1) = -(X + 1)$ change de signe tandis que $(-X - 1)^2 = (X + 1)^2$ garde son signe.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Pôles Multiples',
            stepTheme: 'slate',
            stepTitle: 'DES avec un seul pôle multiple : changement de variable Y = X − α',
            paragraphText:
              'Lorsqu’une fraction rationnelle possède un **unique pôle multiple** de la forme $F(X) = \\frac{P(X)}{(X - \\alpha)^m}$, il est inutile de poser un système d’équations : il suffit d’effectuer le changement de variable $Y = X - \\alpha$ (soit $X = Y + \\alpha$) ou d’appliquer la formule de Taylor à $P(X)$ en $\\alpha$ : $P(Y + \\alpha) = c_0 + c_1 Y + \\cdots + c_n Y^n$, puis de diviser terme à terme par $Y^m = (X - \\alpha)^m$ !',
            formula: {
              name: 'Décomposition par changement de variable Y = X − α',
              formula: '\\frac{P(X)}{(X - \\alpha)^m} = \\frac{P(\\alpha + Y)}{Y^m} = \\sum_{k=0}^{\\deg P} \\frac{P^{(k)}(\\alpha)}{k!} (X - \\alpha)^{k - m}',
              note: 'Méthode instantanée dès que le dénominateur est une puissance (X − α)^m.',
            },
            keyRule:
              'Dès que le dénominateur est $(X - \\alpha)^m$, posez $Y = X - \\alpha \\iff X = Y + \\alpha$, développez le numérateur en puissances de $Y$ et divisez chaque monôme par $Y^m$.',
            konanTip:
              'Cette technique s’étend aussi aux divisions suivant les puissances croissantes lorsque le dénominateur est de la forme $Y^m Q_1(Y)$ avec $Q_1(0) \\neq 0$.',
            exercise: {
              id: 'srit_l1_sa_c3_p3_s6',
              type: 'mcq',
              prompt:
                'Quelle est la décomposition en éléments simples de $F(X) = \\dfrac{X^2 + 1}{(X - 1)^3}$ dans $\\mathbb{R}(X)$ ?',
              options: [
                '$\\dfrac{1}{X - 1} + \\dfrac{2}{(X - 1)^2} + \\dfrac{2}{(X - 1)^3}$',
                '$\\dfrac{1}{X - 1} + \\dfrac{1}{(X - 1)^2} + \\dfrac{2}{(X - 1)^3}$',
                '$\\dfrac{1}{X - 1} + \\dfrac{2}{(X - 1)^3}$',
                '$\\dfrac{2}{X - 1} + \\dfrac{2}{(X - 1)^2} + \\dfrac{1}{(X - 1)^3}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Posons $Y = X - 1$, soit $X = Y + 1$. Le numérateur devient $(Y + 1)^2 + 1 = Y^2 + 2Y + 2$. En divisant par $Y^3 = (X - 1)^3$, on obtient immédiatement $\\frac{Y^2 + 2Y + 2}{Y^3} = \\frac{1}{Y} + \\frac{2}{Y^2} + \\frac{2}{Y^3} = \\frac{1}{X - 1} + \\frac{2}{(X - 1)^2} + \\frac{2}{(X - 1)^3}$.',
              hint: 'Posez $Y = X - 1$ (donc $X = Y + 1$), développez $(Y + 1)^2 + 1$ et divisez par $Y^3$.',
            },
          },
        ],
      }),
    ],
  },
];
