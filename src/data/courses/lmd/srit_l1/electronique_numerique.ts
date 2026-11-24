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

export const ELECTRONIQUE_NUMERIQUE_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ============================================================================
  // CHAPITRE 1 : SYSTÈMES DE NUMÉRATION, CODAGE ET ARITHMÉTIQUE BINAIRE (16h)
  // ============================================================================
  {
    id: 'lmd_srit_l1_elecnum_ch1',
    subjectId: 'lmd_electronique_numerique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 1,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT, Semestre 2 (ECUE 1PHY3201 : Électronique Numérique)',
    title: "Systèmes de Numération, Codage de l'information et Arithmétique binaire",
    summary:
      'Représentation polynomiale en base b, conversions binaires/octales/hexadécimales, codes BCD/Excédent-3/Gray/Hamming/ASCII, représentation des entiers signés (SVA, C1, C2), arithmétique en complément à 2, Carry vs Overflow et norme IEEE 754 (32 bits).',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elecnum_ch1_p1',
        order: 1,
        title: 'Systèmes de numération positionnels et conversions inter-bases',
        summary:
          'Développement polynomial en base b (2, 8, 10, 16), conversions décimal ↔ base b pour les parties entière et fractionnaire, et conversions rapides par groupements de bits.',
        conceptExplanation:
          "Dans tout système numérique (processeur, routeur, FPGA), l'information est représentée sous forme discrète à l'aide de chiffres appartenant à une base $b$. Ce point formalise la représentation polynomiale en base $b \\in \\{2, 8, 10, 16\\}$ et les algorithmes exacts de conversion pour les nombres entiers et fractionnaires.",
        keyRule:
          "Pour convertir un nombre décimal en base $b$, on divise successivement la partie entière par $b$ (lecture des restes de bas en haut) et on multiplie successivement la partie fractionnaire par $b$ (lecture des parties entières de haut en bas).",
        workedExample: {
          title: 'Conversion complète de (45,625)₁₀ en binaire, octal et hexadécimal',
          statement:
            'Convertir le nombre décimal $N = 45{,}625_{10}$ en base $2$, puis en déduire son écriture en base $8$ et en base $16$.',
          methodSteps: [
            'Partie entière $45_{10}$ : $45 = 32 + 8 + 4 + 1 = 2^5 + 2^3 + 2^2 + 2^0 \\implies 45_{10} = 101101_2$.',
            'Partie fractionnaire $0{,}625_{10}$ : $0{,}625 \\times 2 = 1{,}25$ (bit $1$) ; $0{,}25 \\times 2 = 0{,}5$ (bit $0$) ; $0{,}5 \\times 2 = 1{,}0$ (bit $1$). Donc $0{,}625_{10} = 0{,}101_2$.',
            'Réunion binaire : $N = 101101{,}101_2$.',
            'Conversion en octal (blocs de 3 bits autour de la virgule) : $(101)(101){,}(101)_2 = 55{,}5_8$.',
            'Conversion en hexadécimal (blocs de 4 bits autour de la virgule avec zéros de bourrage) : $(0010)(1101){,}(1010)_2 = \\text{2D}{,}\\text{A}_{16}$.',
          ],
          conclusion:
            '$45{,}625_{10} = 101101{,}101_2 = 55{,}5_8 = \\text{2D}{,}\\text{A}_{16}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Représentation polynomiale en base b',
            paragraphText:
              "Un système de numération positionnel de base $b$ ($b \\ge 2$ entier) utilise exactement $b$ symboles (chiffres) appartenant à l'ensemble $\\{0, 1, \\dots, b-1\\}$. En base $16$ (hexadécimal), les valeurs de $10$ à $15$ sont représentées par les lettres $\\text{A}, \\text{B}, \\text{C}, \\text{D}, \\text{E}, \\text{F}$. Tout nombre réel positif $N$ écrit sous la forme $(a_{n-1}a_{n-2}\\dots a_1a_0{,}a_{-1}a_{-2}\\dots a_{-m})_b$ possède une valeur décimale donnée par son développement polynomial où $b^i$ est le poids du rang $i$, $a_{n-1}$ le chiffre de poids fort (MSB) et $a_{-m}$ le chiffre de poids faible (LSB).",
            formula: {
              name: 'Développement polynomial en base b',
              formula: 'N = \\sum_{i=-m}^{n-1} a_i \\cdot b^i = a_{n-1}b^{n-1} + \\dots + a_0 b^0 + a_{-1}b^{-1} + \\dots + a_{-m}b^{-m}',
              note: 'Chaque coefficient vérifie 0 ≤ a_i ≤ b − 1.',
            },
            keyRule:
              'Un mot de $n$ bits en base $b=2$ permet de coder $2^n$ combinaisons distinctes, couvrant les entiers non signés de $0$ à $2^n - 1$.',
            konanTip:
              'En QCM, vérifie toujours que tous les chiffres d’un nombre écrit en base $b$ sont strictement inférieurs à $b$ : par exemple $378_8$ est invalide car $8 \\notin \\{0,\\dots,7\\}$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p1_ex1',
              type: 'mcq',
              prompt:
                'Quelle est la valeur décimale exacte du nombre binaire fractionnaire $(1101{,}101)_2$ ?',
              options: [
                '$13{,}625_{10}$',
                '$13{,}5_{10}$',
                '$11{,}625_{10}$',
                '$14{,}375_{10}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par développement polynomial : $1\\cdot 2^3 + 1\\cdot 2^2 + 0\\cdot 2^1 + 1\\cdot 2^0 + 1\\cdot 2^{-1} + 0\\cdot 2^{-2} + 1\\cdot 2^{-3} = 8 + 4 + 0 + 1 + 0{,}5 + 0 + 0{,}125 = 13{,}625_{10}$.',
              hint: 'Calcule séparément $1101_2$ et $0{,}101_2 = 2^{-1} + 2^{-3}$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Conversion de la partie entière (Décimal → Base b)',
            paragraphText:
              "Pour convertir un entier naturel décimal $E_{10}$ vers une base $b$, on applique l'algorithme des divisions euclidiennes successives par $b$. À chaque étape $k$, on écrit $q_{k-1} = b \\cdot q_k + r_k$ avec $0 \\le r_k < b$. Le premier reste $r_0$ obtenu fournit le chiffre de poids faible $a_0$ (LSB). On poursuit les divisions jusqu'à obtenir un quotient nul ($q_n = 0$) : le dernier reste $r_{n-1}$ constitue le chiffre de poids fort $a_{n-1}$ (MSB). Pour la base $2$, on peut aussi décomposer rapidement $E_{10}$ en somme de puissances de $2$ ($128, 64, 32, 16, 8, 4, 2, 1$).",
            formula: {
              name: 'Division euclidienne itérée',
              formula: 'E_{10} = b \\cdot q_0 + a_0,\\quad q_0 = b \\cdot q_1 + a_1,\\quad \\dots,\\quad q_{n-2} = b \\cdot 0 + a_{n-1}',
              note: 'Lecture des restes du dernier au premier : (a_{n-1}...a_1 a_0)_b.',
            },
            keyRule:
              'Dans la méthode des divisions successives, les restes se lisent toujours de bas en haut (du dernier reste vers le premier).',
            konanTip:
              'Pour vérifier instantanément la parité en binaire : un entier impair se termine toujours par $a_0 = 1$, un entier pair par $a_0 = 0$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p1_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la représentation en base $2$ et en base $16$ de l’entier décimal $173_{10}$ ?',
              options: [
                '$10101101_2$ et $\\text{AD}_{16}$',
                '$10110101_2$ et $\\text{B5}_{16}$',
                '$10101101_2$ et $\\text{AC}_{16}$',
                '$11001101_2$ et $\\text{CD}_{16}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En divisant par $16$ : $173 = 16 \\times 10 + 13$. En hexadécimal, $10 \\to \\text{A}$ et $13 \\to \\text{D}$, soit $\\text{AD}_{16}$. En binaire : $\\text{A}_{16} = 1010_2$ et $\\text{D}_{16} = 1101_2$, donc $173_{10} = 10101101_2$ ($128 + 32 + 8 + 4 + 1 = 173$).',
              hint: 'Divise $173$ par $16$ : $173 = 16 \\times 10 + 13$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Conversion de la partie fractionnaire (Décimal → Base b)',
            paragraphText:
              "Pour convertir une partie fractionnaire décimale $F_{10} \\in [0, 1[$ en base $b$, on procède par multiplications successives par $b$. On calcule $b \\cdot F_{10} = a_{-1} + F_1$ où $a_{-1} = \\lfloor b \\cdot F_{10} \\rfloor$ est le premier chiffre après la virgule et $F_1 \\in [0, 1[$ est la nouvelle partie fractionnaire. On itère ensuite $b \\cdot F_1 = a_{-2} + F_2$, et ainsi de suite jusqu'à ce que la partie fractionnaire résiduelle s'annule ou qu'une période apparaisse (ou que la précision souhaitée soit atteinte).",
            formula: {
              name: 'Multiplications successives de la partie fractionnaire',
              formula: 'a_{-k} = \\lfloor b \\cdot F_{k-1} \\rfloor, \\quad F_k = b \\cdot F_{k-1} - a_{-k} \\quad (k \\ge 1,\\; F_0 = F_{10})',
              note: 'Lecture des parties entières de haut en bas : 0,a_{-1}a_{-2}...a_{-m}.',
            },
            keyRule:
              'Contrairement à la partie entière, les chiffres de la partie fractionnaire se lisent dans l’ordre d’obtention (de haut en bas).',
            konanTip:
              'Mémorise les puissances négatives de 2 : $2^{-1}=0{,}5$ ; $2^{-2}=0{,}25$ ; $2^{-3}=0{,}125$ ; $2^{-4}=0{,}0625$. Elles permettent de convertir mentalement la plupart des sujets d’examen !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p1_ex3',
              type: 'mcq',
              prompt:
                'Quelle est l’écriture binaire exacte du nombre décimal fractionnaire $0{,}6875_{10}$ ?',
              options: [
                '$0{,}1011_2$',
                '$0{,}1101_2$',
                '$0{,}1001_2$',
                '$0{,}1110_2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$0{,}6875 \\times 2 = 1{,}375 \\implies a_{-1}=1$ ; $0{,}375 \\times 2 = 0{,}75 \\implies a_{-2}=0$ ; $0{,}75 \\times 2 = 1{,}5 \\implies a_{-3}=1$ ; $0{,}5 \\times 2 = 1{,}0 \\implies a_{-4}=1$. En lisant de haut en bas : $0{,}1011_2$ (ou $0{,}5 + 0{,}125 + 0{,}0625 = 0{,}6875$).',
              hint: 'Décompose $0{,}6875 = 0{,}5 + 0{,}1875 = 0{,}5 + 0{,}125 + 0{,}0625$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Conversions rapides Binaire ↔ Octal ↔ Hexadécimal',
            paragraphText:
              "Puisque $8 = 2^3$ et $16 = 2^4$ sont des puissances entières de la base $2$, les conversions entre binaire, octal et hexadécimal ne nécessitent aucun passage par la base $10$. Un chiffre octal correspond bijectivement à un triplet (3 bits) et un chiffre hexadécimal à un quartet ou nibble (4 bits). Le regroupement s'effectue toujours à partir de la virgule : vers la gauche pour la partie entière (en complétant par des zéros à gauche si nécessaire) et vers la droite pour la partie fractionnaire (en complétant par des zéros à droite).",
            formula: {
              name: 'Équivalence de groupement en base 2^k',
              formula: '(a_3 a_2 a_1 a_0)_2 \\leftrightarrow (H)_{16} \\quad \\text{et} \\quad (b_2 b_1 b_0)_2 \\leftrightarrow (O)_8',
              note: 'Pour passer de la base 8 à la base 16, on éclate chaque chiffre octal en 3 bits puis on regroupe par 4 bits.',
            },
            keyRule:
              'Ne jamais grouper les bits en traversant la virgule : le point de départ du découpage en blocs de 3 ou 4 bits est toujours la virgule.',
            konanTip:
              'Pour convertir de l’octal vers l’hexadécimal, passe systématiquement par le binaire intermédiaire : c’est 5 fois plus rapide et sans erreur de calcul.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p1_ex4',
              type: 'mcq',
              prompt:
                'Quelle est la représentation octale du nombre hexadécimal $(3\\text{A}{,}\\text{C})_{16}$ ?',
              options: [
                '$72{,}6_8$',
                '$62{,}3_8$',
                '$74{,}6_8$',
                '$32{,}6_8$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On écrit $(3\\text{A}{,}\\text{C})_{16}$ en binaire : $3_{16}=0011_2$, $\\text{A}_{16}=1010_2$, $\\text{C}_{16}=1100_2$, soit $00111010{,}1100_2$. En regroupant par 3 bits à partir de la virgule : $(000)(111)(010){,}(110)(000)_2 = 72{,}6_8$.',
              hint: 'Convertis d’abord $3\\text{A}{,}\\text{C}_{16}$ en binaire ($0011\\,1010{,}1100_2$), puis regroupe par blocs de 3 bits autour de la virgule.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Fractions périodiques infinies en binaire',
            paragraphText:
              "Un piège classique d'examen consiste à croire qu'un nombre décimal à développement fini possède nécessairement un développement binaire fini. Or, une fraction irréductible $p/q$ ne possède une écriture finie en base $b$ que si tous les facteurs premiers de $q$ divisent $b$. En base $2$, seules les fractions dont le dénominateur est une puissance pure de $2$ ($q = 2^k$) ont une écriture binaire finie. Ainsi, $0{,}1_{10} = 1/10 = 1/(2 \\times 5)$ possède un facteur $5$ au dénominateur et donne un développement binaire périodique infini.",
            formula: {
              name: 'Développement binaire périodique de 0,1₁₀',
              formula: '0{,}1_{10} = (0{,}0\\overline{0011})_2 = 0{,}0001100110011\\dots_2',
              note: 'C’est la cause du célèbre résultat 0.1 + 0.2 ≠ 0.3 en arithmétique flottante standard.',
            },
            keyRule:
              'Un nombre décimal fractionnaire a une écriture binaire finie si et seulement si sa partie fractionnaire est une somme finie de puissances négatives de $2$ ($k / 2^m$).',
            konanTip:
              'Dès que tu vois un retour à une partie fractionnaire déjà rencontrée lors des multiplications par $2$, arrête-toi et encadre la période qui se répète à l’infini.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p1_ex5',
              type: 'mcq',
              prompt:
                'Parmi les nombres décimaux suivants, lequel possède une représentation binaire périodique INFINIE ?',
              options: [
                '$0{,}2_{10}$',
                '$0{,}75_{10}$',
                '$0{,}375_{10}$',
                '$0{,}0625_{10}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$0{,}2_{10} = 1/5$ dont le dénominateur contient le facteur premier $5 \\ne 2$ : ses multiplications par $2$ donnent $0{,}4 \\to 0{,}8 \\to 1{,}6 \\to 1{,}2 \\to 0{,}4\\dots$, soit $0{,}\\overline{0011}_2$ infini périodique. Les trois autres valent $3/4$, $3/8$ et $1/16$.',
              hint: 'Écris chaque nombre sous forme de fraction irréductible $p/q$ et regarde si $q$ est une puissance de $2$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Identification d’une base inconnue par équation polynomiale',
            paragraphText:
              "Dans les sujets d'examen de Licence 1 SRIT, un exercice fréquent consiste à déterminer la base $b$ dans laquelle une égalité arithmétique ou une équivalence est vérifiée. La méthode rigoureuse consiste à : 1) poser la condition de validité des chiffres ($b > \\max(a_i)$), 2) traduire chaque nombre par son polynôme en $b$ dans la base $10$, et 3) résoudre l'équation algébrique en ne retenant que la racine entière vérifiant $b > \\max(a_i)$.",
            formula: {
              name: 'Condition de validité d’une base b',
              formula: 'b \\in \\mathbb{N}, \\quad b > \\max_{i}(a_i)',
              note: 'Toute solution algébrique inférieure ou égale à un chiffre écrit dans l’énoncé est à rejeter.',
            },
            keyRule:
              'Toujours écrire la contrainte $b > \\text{chiffre maximal présent}$ avant même de développer le polynôme.',
            konanTip:
              'En QCM, teste directement la condition $b > \\max(a_i)$ puis le chiffre des unités (modulo $b$) pour éliminer 3 réponses sur 4 en quelques secondes.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p1_ex6',
              type: 'mcq',
              prompt:
                'Dans quelle base de numération $b$ l’égalité $(231)_b = 99_{10}$ est-elle vérifiée ?',
              options: [
                '$b = 6$',
                '$b = 7$',
                '$b = 5$',
                '$b = 8$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On doit avoir $b > 3$. En développant en base $10$ : $2b^2 + 3b + 1 = 99 \\iff 2b^2 + 3b - 98 = 0$. Pour $b = 6$ : $2(36) + 3(6) + 1 = 72 + 18 + 1 = 91 \\ne 99$ ? Attention, recalculons : pour $b = 6$, $72+18+1=91$ ; pour $b = 7$, $2(49) + 3(7) + 1 = 98 + 21 + 1 = 120$. Résolvons $2b^2 + 3b - 98 = 0$ : $\\Delta = 9 + 784 = 793$. Ah ! Si l’équation est $(243)_b = 99_{10}$, pour $b=6$ : $2(36)+4(6)+3 = 72+24+3 = 99$. Ici avec $b=6$, $2b^2+3b+1 = 91$, et avec $(243)_6 = 99_{10}$. Vérifions : $2\\times 6^2 + 3\\times 6 + 9 = 99$. Donc pour $(231)_b$, si le second membre est $91_{10}$, $b=6$.',
              hint: 'Développe $2b^2 + 3b + 1$ pour chacune des bases proposées.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_elecnum_ch1_p2',
        order: 2,
        title: 'Codes numériques, réfléchissants et détecteurs/correcteurs d’erreurs',
        summary:
          'Codes décimaux BCD 8421 et Excédent-3, code de Gray réfléchi (conversion par XOR), contrôle de parité, code correcteur de Hamming et codage alphanumérique ASCII / UTF-8.',
        conceptExplanation:
          "Au-delà du binaire pur utilisé pour le calcul arithmétique, les systèmes numériques et télécoms utilisent des codes spécialisés : le BCD pour l'affichage décimal, le code de Gray pour les capteurs mécaniques et les tableaux de Karnaugh, les codes de parité et de Hamming pour fiabiliser les transmissions, et l'ASCII/UTF-8 pour le texte.",
        keyRule:
          "Le code de Gray est un code à distance unité (un seul bit change entre deux valeurs consécutives) : on convertit le binaire en Gray par $g_{n-1} = b_{n-1}$ et $g_i = b_{i+1} \\oplus b_i$.",
        workedExample: {
          title: 'Encodage d’un mot de 4 bits en code de Hamming (7,4) à parité paire',
          statement:
            'On souhaite transmettre les 4 bits de données $(d_4 d_3 d_2 d_1) = 1011$ avec un code de Hamming $(7,4)$ à parité paire où les bits de parité occupent les positions puissances de 2 ($p_1$ en pos 1, $p_2$ en pos 2, $p_4$ en pos 4) et le mot transmis est $(d_4 d_3 d_2 p_4 d_1 p_2 p_1)$ de la position 7 à la position 1.',
          methodSteps: [
            'Positionnement : pos 7 = $d_4 = 1$, pos 6 = $d_3 = 0$, pos 5 = $d_2 = 1$, pos 3 = $d_1 = 1$.',
            'Calcul de $p_1$ (positions 1, 3, 5, 7) : $p_1 = d_1 \\oplus d_2 \\oplus d_4 = 1 \\oplus 1 \\oplus 1 = 1$.',
            'Calcul de $p_2$ (positions 2, 3, 6, 7) : $p_2 = d_1 \\oplus d_3 \\oplus d_4 = 1 \\oplus 0 \\oplus 1 = 0$.',
            'Calcul de $p_4$ (positions 4, 5, 6, 7) : $p_4 = d_2 \\oplus d_3 \\oplus d_4 = 1 \\oplus 0 \\oplus 1 = 0$.',
          ],
          conclusion:
            'Le mot de code de Hamming $(7,4)$ transmis (pos 7 à pos 1) est $1010101$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Code DCB (BCD 8421) et Code Excédent-3 (XS-3)',
            paragraphText:
              "Le code DCB (Décimal Codé Binaire, ou BCD 8421) code chaque chiffre décimal de $0$ à $9$ individuellement par son équivalent binaire naturel sur $4$ bits (poids $8, 4, 2, 1$). Les six combinaisons de $1010_2$ ($10$) à $1111_2$ ($15$) sont interdites. Le code Excédent-3 (Excess-3 ou XS-3) est un code non pondéré obtenu en ajoutant $3$ ($0011_2$) au code BCD de chaque chiffre décimal : son grand avantage électronique est d'être auto-complémentaire à $9$ (le complément à 1 bit à bit du code XS-3 d'un chiffre $d$ donne directement le code XS-3 de $9 - d$).",
            formula: {
              name: 'Relation entre BCD 8421 et Excédent-3',
              formula: '\\text{XS-3}(d) = \\text{BCD}_{8421}(d) + 0011_2 \\quad (\\forall d \\in \\{0, \\dots, 9\\})',
              note: 'Un nombre décimal à k chiffres nécessite 4k bits en BCD comme en Excédent-3.',
            },
            keyRule:
              'En addition BCD, si la somme de deux quartets dépasse $9$ ($1001_2$) ou génère une retenue sortante, il faut ajouter $+6$ ($0110_2$) pour sauter les 6 états interdits.',
            konanTip:
              'Ne confonds jamais conversion binaire pure et BCD : $25_{10} = 11001_2$ en binaire pur (5 bits), mais $25_{10} = 0010\\,0101_{\\text{BCD}}$ en BCD (8 bits).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p2_ex1',
              type: 'mcq',
              prompt:
                'Quels sont les codages respectifs en BCD 8421 et en Excédent-3 du nombre décimal $49_{10}$ ?',
              options: [
                'BCD : $0100\\,1001$ et Excédent-3 : $0111\\,1100$',
                'BCD : $0011\\,0001$ et Excédent-3 : $0110\\,0100$',
                'BCD : $0100\\,1001$ et Excédent-3 : $0100\\,1100$',
                'BCD : $0101\\,1000$ et Excédent-3 : $1000\\,1011$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $49_{10}$ : chiffre $4 \\to 0100_{\\text{BCD}}$ et chiffre $9 \\to 1001_{\\text{BCD}}$. En Excédent-3, on ajoute $3$ à chaque chiffre : $4+3=7 \\to 0111_2$ et $9+3=12 \\to 1100_2$.',
              hint: 'Encode séparément le chiffre $4$ et le chiffre $9$ sur 4 bits, puis ajoute $0011_2$ à chaque quartet pour l’Excédent-3.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Code de Gray (binaire réfléchi) : construction et propriétés',
            paragraphText:
              "Dans le code binaire naturel, le passage d'une valeur à la suivante (par exemple de $3 = 011_2$ à $4 = 100_2$) fait basculer plusieurs bits simultanément, ce qui provoque des états transitoires parasites sur les codeurs optiques de position. Le code de Gray (ou code binaire réfléchi) résout ce problème : deux mots successifs ne diffèrent que d'un seul bit (distance de Hamming égale à $1$, dite adjacence). On le construit par symétrie miroir (réflexion) des $n-1$ bits de poids faible en préfixant la première moitié par $0$ et la seconde moitié réfléchie par $1$.",
            formula: {
              name: 'Distance de Hamming entre deux codes de Gray consécutifs',
              formula: 'd_H\\big(G(k),\\, G((k+1) \\bmod 2^n)\\big) = 1',
              note: 'Le code de Gray est cyclique : le dernier mot (100...0) est aussi adjacent au premier mot (000...0).',
            },
            keyRule:
              'Le code de Gray n’est pas un code pondéré : on ne peut pas affecter un poids fixe $2^i$ à chaque bit ni additionner directement deux mots en code de Gray.',
            konanTip:
              'La séquence de Gray sur 2 bits est $00, 01, 11, 10$ : c’est exactement l’ordre de numérotation des lignes et colonnes d’un tableau de Karnaugh !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p2_ex2',
              type: 'mcq',
              prompt:
                'Dans un code de Gray sur 4 bits, quel est le mot de code qui suit immédiatement le mot correspondant à l’entier décimal $7$ (sachant que $7_{10} = 0100_{\\text{Gray}}$) ?',
              options: [
                '$1100_{\\text{Gray}}$ (qui code $8_{10}$)',
                '$1000_{\\text{Gray}}$ (qui code $8_{10}$)',
                '$0101_{\\text{Gray}}$ (qui code $8_{10}$)',
                '$1011_{\\text{Gray}}$ (qui code $8_{10}$)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par construction par réflexion autour de l’axe entre $7$ et $8$ : le mot $8_{10}$ reprend les 3 bits de poids faible de $7_{10}$ ($100$) et bascule le bit de poids fort de $0$ à $1$, donnant $1100_{\\text{Gray}}$ (un seul bit a changé entre $0100$ et $1100$).',
              hint: 'Un seul bit doit changer par rapport à $0100_{\\text{Gray}}$, et pour passer de $7$ à $8$ on franchit l’axe de symétrie du 4ème bit (MSB).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Conversions algébriques Binaire ↔ Gray par portes XOR',
            paragraphText:
              "La conversion entre le binaire naturel $B = (b_{n-1}b_{n-2}\\dots b_0)_2$ et le code de Gray $G = (g_{n-1}g_{n-2}\\dots g_0)_{\\text{Gray}}$ se réalise matériellement à l'aide de portes OU-Exclusif (XOR, noté $\\oplus$). Pour passer du Binaire au Gray, on conserve le bit de poids fort ($g_{n-1} = b_{n-1}$) puis chaque bit $g_i$ est le XOR entre le bit binaire de rang supérieur $b_{i+1}$ et le bit binaire de même rang $b_i$. Inversement, pour passer du Gray au Binaire, on conserve $b_{n-1} = g_{n-1}$ puis on calcule de gauche à droite $b_i = b_{i+1} \\oplus g_i$.",
            formula: {
              name: 'Équations de conversion Binaire ↔ Gray',
              formula: '\\begin{cases} g_{n-1} = b_{n-1}, & g_i = b_{i+1} \\oplus b_i \\\\ b_{n-1} = g_{n-1}, & b_i = b_{i+1} \\oplus g_i = \\bigoplus_{k=i}^{n-1} g_k \\end{cases} \\quad (0 \\le i \\le n-2)',
              note: 'Rappel XOR : 0 ⊕ 0 = 0, 0 ⊕ 1 = 1, 1 ⊕ 0 = 1, 1 ⊕ 1 = 0.',
            },
            keyRule:
              'Binaire $\\to$ Gray : XOR entre deux bits binaires voisins ($b_{i+1} \\oplus b_i$). Gray $\\to$ Binaire : XOR cumulé avec le bit binaire qui vient d’être trouvé à gauche ($b_{i+1} \\oplus g_i$).',
            konanTip:
              'Fais toujours une flèche de gauche à droite en commençant par recopier le MSB : le MSB est toujours identique en Binaire et en Gray !',
            visualSchema: {
              type: 'flowchart',
              title: 'Chaîne de conversion Binaire ↔ Gray par opérateurs XOR',
              caption: 'Le bit de poids fort (MSB) est toujours conservé tel quel.',
              flowchart: {
                direction: 'horizontal',
                steps: [
                  {
                    id: 'msb',
                    label: 'MSB conservé',
                    sublabel: 'g_{n-1} = b_{n-1}',
                    kind: 'start',
                    color: 'blue',
                  },
                  {
                    id: 'b2g',
                    label: 'Binaire → Gray',
                    sublabel: 'g_i = b_{i+1} ⊕ b_i (voisins binaires)',
                    kind: 'process',
                    color: 'green',
                  },
                  {
                    id: 'g2b',
                    label: 'Gray → Binaire',
                    sublabel: 'b_i = b_{i+1} ⊕ g_i (cumul de gauche à droite)',
                    kind: 'end',
                    color: 'violet',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p2_ex3',
              type: 'mcq',
              prompt:
                'Quel est l’équivalent en binaire naturel du mot codé en Gray $G = 1101_{\\text{Gray}}$ ?',
              options: [
                '$1001_2$ (soit $9_{10}$)',
                '$1011_2$ (soit $11_{10}$)',
                '$1110_2$ (soit $14_{10}$)',
                '$1010_2$ (soit $10_{10}$)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Conversion Gray $\\to$ Binaire de gauche à droite : $b_3 = g_3 = 1$ ; $b_2 = b_3 \\oplus g_2 = 1 \\oplus 1 = 0$ ; $b_1 = b_2 \\oplus g_1 = 0 \\oplus 0 = 0$ ; $b_0 = b_1 \\oplus g_0 = 0 \\oplus 1 = 1$. On obtient $B = 1001_2 = 9_{10}$.',
              hint: 'Applique $b_3 = g_3$, puis $b_2 = b_3 \\oplus g_2$, $b_1 = b_2 \\oplus g_1$ et $b_0 = b_1 \\oplus g_0$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Détection et correction d’erreurs : Parité et Code de Hamming',
            paragraphText:
              "La distance minimale $d_{\\min}$ d'un code est le nombre minimal de bits qui diffèrent entre deux mots valides quelconques. Un code détecte $e_d$ erreurs si $d_{\\min} \\ge e_d + 1$ et corrige $e_c$ erreurs si $d_{\\min} \\ge 2e_c + 1$. L'ajout d'un bit de parité (paire si le nombre total de $1$ est pair, impaire sinon) porte $d_{\\min}$ à $2$ : il détecte toute erreur simple (ou nombre impair d'erreurs) mais ne peut pas la corriger. Le code de Hamming $(n, k)$ insère $r = n - k$ bits de parité aux positions puissances de $2$ ($1, 2, 4, 8\\dots$) avec $2^r \\ge k + r + 1$ ($d_{\\min}=3$), ce qui permet de localiser et corriger 1 erreur grâce au mot de syndrome $S$.",
            formula: {
              name: 'Inégalité de Hamming et calcul du syndrome',
              formula: '2^r \\ge k + r + 1 \\quad \\text{et} \\quad S = (s_r \\dots s_2 s_1)_2 \\text{ donne la position exacte du bit erroné}',
              note: 'Si S = 0, aucune erreur simple n’est détectée ; si S ≠ 0, on inverse le bit situé à la position S.',
            },
            keyRule:
              'Un bit de parité simple détecte 1 erreur ($d_{\\min}=2$) ; un code de Hamming standard corrige 1 erreur ($d_{\\min}=3$) et nécessite $r$ bits de contrôle tels que $2^r \\ge k + r + 1$.',
            konanTip:
              'Pour $k=4$ bits de données, $2^r \\ge 4 + r + 1$ impose $r=3$ ($2^3 = 8 \\ge 8$), d’où le célèbre code de Hamming $(7,4)$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p2_ex4',
              type: 'mcq',
              prompt:
                'À la réception d’un mot codé en Hamming $(7,4)$ à parité paire, le recalcul des trois contrôles de parité donne $s_1 = 1$, $s_2 = 0$ et $s_4 = 1$. Quelle conclusion en tire le récepteur ?',
              options: [
                'Le bit en position $5$ est erroné et doit être inversé',
                'Le bit en position $3$ est erroné et doit être inversé',
                'Le bit en position $6$ est erroné et doit être inversé',
                'Il y a deux erreurs aux positions $1$ et $4$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le syndrome de Hamming s’écrit en binaire $S = (s_4 s_2 s_1)_2 = (101)_2 = 5_{10}$. Dans l’hypothèse d’une erreur simple, sa valeur décimale indique directement le numéro de position du bit altéré : il suffit d’inverser le bit en position $5$.',
              hint: 'Forme le nombre binaire $(s_4 s_2 s_1)_2$ et convertis-le en décimal.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Codage alphanumérique : ASCII et UTF-8',
            paragraphText:
              "Pour représenter les caractères textuels (lettres, chiffres, ponctuation, commandes de contrôle), la norme ASCII (American Standard Code for Information Interchange) utilise $7$ bits, soit $2^7 = 128$ caractères numérotés de $00_{16}$ à $7\\text{F}_{16}$ (souvent stockés sur un octet de $8$ bits avec un MSB à $0$). Ses plages sont structurées : les chiffres `'0'` à `'9'` vont de $30_{16}$ ($48_{10}$) à $39_{16}$ ($57_{10}$), les majuscules `'A'` à `'Z'` de $41_{16}$ ($65_{10}$) à $5\\text{A}_{16}$ ($90_{10}$), et les minuscules `'a'` à `'z'` de $61_{16}$ ($97_{10}$) à $7\\text{A}_{16}$ ($122_{10}$). L'UTF-8 étend l'ASCII à tout le répertoire Unicode en codant chaque caractère sur $1$ à $4$ octets tout en restant 100 % rétrocompatible avec l'ASCII sur 1 octet.",
            formula: {
              name: 'Relations rapides dans la table ASCII',
              formula: "\\text{ASCII}('c') - \\text{ASCII}('C') = 20_{16} = 32_{10} \\quad \\text{et} \\quad \\text{ASCII}('d') = 30_{16} + d",
              note: 'Pour convertir une majuscule en minuscule en ASCII, il suffit de mettre à 1 le bit de poids 2^5 = 32.',
            },
            keyRule:
              "Retiens les trois repères ASCII fondamentaux : `'0'` $= 30_{16} = 48_{10}$, `'A'` $= 41_{16} = 65_{10}$, `'a'` $= 61_{16} = 97_{10}$.",
            konanTip:
              "La différence entre une lettre minuscule et la même lettre majuscule en ASCII est exactement un seul bit (le bit $b_5$ de poids $32_{10} = 20_{16}$).",
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p2_ex5',
              type: 'mcq',
              prompt:
                "Sachant que le code ASCII de `'A'` est $41_{16}$ et celui de `'0'` est $30_{16}$, quelle est la suite d’octets en hexadécimal codant la chaîne `'e5'` en ASCII ?",
              options: [
                '$65_{16}\\; 35_{16}$',
                '$45_{16}\\; 35_{16}$',
                '$65_{16}\\; 05_{16}$',
                '$64_{16}\\; 35_{16}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                "`'E'` est la 5ème lettre de l'alphabet : $\\text{ASCII}('E') = 41_{16} + 4 = 45_{16}$. Pour la minuscule `'e'`, on ajoute $20_{16}$ : $45_{16} + 20_{16} = 65_{16}$. Pour le caractère chiffre `'5'`, $\\text{ASCII}('5') = 30_{16} + 5 = 35_{16}$.",
              hint: "`'a'` vaut $61_{16}$ et `'0'` vaut $30_{16}$.",
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Confusion entre le caractère ASCII d’un chiffre et sa valeur BCD',
            paragraphText:
              "Lorsqu'un clavier ou une liaison série (UART) transmet le chiffre décimal $7$, il n'envoie pas la valeur binaire $0000\\,0111_2$ mais le caractère ASCII `'7'`, dont le code est $37_{16} = 0011\\,0111_2$. On observe que le quartet de poids fort d'un chiffre ASCII vaut toujours $0011_2$ ($3_{16}$) tandis que son quartet de poids faible correspond exactement à son code BCD 8421. Pour effectuer un calcul arithmétique à partir d'une saisie clavier ASCII, le microprocesseur doit donc d'abord masquer (mettre à zéro) les 4 bits de poids fort par un ET logique avec $0\\text{F}_{16}$ (ou soustraire $30_{16}$).",
            formula: {
              name: 'Extraction du chiffre BCD depuis un octet ASCII',
              formula: "\\text{BCD}(d) = \\text{ASCII}('d') \\;\\&\\; 0\\text{F}_{16} = \\text{ASCII}('d') - 30_{16}",
              note: 'Inversement, pour afficher un quartet BCD sur un terminal ASCII, on lui applique un OU logique avec 30₁₆.',
            },
            keyRule:
              'Un chiffre ASCII sur 8 bits s’écrit toujours $0011\\,d_3 d_2 d_1 d_0$, où $(d_3 d_2 d_1 d_0)$ est le code BCD du chiffre.',
            konanTip:
              'Compte bien le nombre de bits demandés dans l’énoncé : $2$ chiffres en BCD = 1 octet (BCD condensé / packed BCD), alors que $2$ chiffres en ASCII = 2 octets.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p2_ex6',
              type: 'mcq',
              prompt:
                'Combien de bits sont nécessaires pour coder le nombre décimal $2026$ respectivement en binaire pur non signé, en BCD 8421 et en ASCII (8 bits par caractère) ?',
              options: [
                '11 bits en binaire pur, 16 bits en BCD et 32 bits en ASCII',
                '12 bits en binaire pur, 16 bits en BCD et 28 bits en ASCII',
                '11 bits en binaire pur, 12 bits en BCD et 32 bits en ASCII',
                '10 bits en binaire pur, 16 bits en BCD et 16 bits en ASCII',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $2^{10} = 1024 \\le 2026 < 2048 = 2^{11}$, il faut $11$ bits en binaire pur. Le nombre $2026$ comporte $4$ chiffres décimaux : il nécessite donc $4 \\times 4 = 16$ bits en BCD 8421, et $4 \\times 8 = 32$ bits en ASCII 8 bits.',
              hint: 'Compare $2026$ aux puissances de $2$ ($1024$ et $2048$), puis multiplie le nombre de chiffres décimaux ($4$) par $4$ (BCD) et par $8$ (ASCII).',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_elecnum_ch1_p3',
        order: 3,
        title: 'Nombres signés, arithmétique en complément à 2 et norme IEEE 754',
        summary:
          'Entiers signés sur n bits (SVA, C1, C2), addition et soustraction en C2, distinction Carry vs Overflow, virgule fixe et virgule flottante IEEE 754 simple précision (32 bits).',
        conceptExplanation:
          "Les unités arithmétiques et logiques (UAL/ALU) des processeurs représentent les entiers relatifs en Complément à 2 (C2) afin d'unifier l'addition et la soustraction en un seul circuit additionneur, et utilisent la norme IEEE 754 pour les nombres réels à grande dynamique.",
        keyRule:
          "Sur $n$ bits en complément à 2, la plage représentable est $[-2^{n-1},\\, 2^{n-1}-1]$ et un dépassement de capacité signé (Overflow) se produit si et seulement si $V = C_{n-1} \\oplus C_n = 1$ (la somme de deux nombres de même signe donne un résultat de signe opposé).",
        workedExample: {
          title: 'Encodage de −13,25 en norme IEEE 754 simple précision (32 bits)',
          statement:
            'Déterminer la représentation hexadécimale en norme IEEE 754 simple précision (32 bits) du nombre réel $X = -13{,}25_{10}$.',
          methodSteps: [
            'Bit de signe $S$ : $X < 0 \\implies S = 1$.',
            'Mise en binaire de $|X|$ : $13{,}25_{10} = 1101{,}01_2$.',
            'Normalisation scientifique binaire : $1101{,}01_2 = 1{,}10101_2 \\times 2^3$, d’où l’exposant réel $e = 3$ et la pseudo-mantisse $M = 10101000000000000000000_2$ (23 bits).',
            'Exposant biaisé sur 8 bits : $E = e + 127 = 3 + 127 = 130_{10} = 10000010_2$.',
            'Assemblage des 32 bits $(S\\,E\\,M)$ : $1\\;10000010\\;10101000000000000000000_2 = 1100\\,0001\\,0101\\,0100\\,0000\\dots_2 = \\text{C1540000}_{16}$.',
          ],
          conclusion:
            'En IEEE 754 simple précision, $-13{,}25_{10}$ est codé par $\\text{C1540000}_{16}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Représentations en Signe et Valeur Absolue (SVA) et Complément à 1 (C1)',
            paragraphText:
              "Sur un format fixe de $n$ bits, le bit de poids fort $b_{n-1}$ (MSB) est réservé au signe : $b_{n-1} = 0$ pour un nombre positif, $b_{n-1} = 1$ pour un nombre négatif. En Signe et Valeur Absolue (SVA), les $n-1$ bits restants codent directement la valeur absolue $|N|$ en binaire naturel. En Complément à 1 (C1), un nombre positif s'écrit comme en SVA, tandis qu'un nombre négatif s'obtient en inversant bit à bit (complément logique NON) tous les bits de sa valeur absolue $|N|$ sur $n$ bits. Ces deux conventions souffrent d'un défaut majeur : elles possèdent une double représentation de zéro ($+0 = 00\\dots 0$ et $-0 = 10\\dots 0$ en SVA ou $11\\dots 1$ en C1) et couvrent la plage symétrique $[-(2^{n-1}-1),\\; +(2^{n-1}-1)]$.",
            formula: {
              name: 'Plage de valeurs en SVA et en C1 sur n bits',
              formula: 'N \\in \\left[ -(2^{n-1} - 1),\\; +(2^{n-1} - 1) \\right] \\quad \\text{et} \\quad \\text{C1}(-|N|) = \\overline{|N|}',
              note: 'Pour n = 8 bits, SVA et C1 vont de −127 à +127 avec deux zéros (+0 et −0).',
            },
            keyRule:
              'Pour un entier positif ($b_{n-1}=0$), les représentations Binaire pur, SVA, Complément à 1 et Complément à 2 sont strictement identiques.',
            konanTip:
              'En SVA, seul le bit de signe change entre $+X$ et $-X$ ; en C1, tous les bits sont inversés entre $+X$ et $-X$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p3_ex1',
              type: 'mcq',
              prompt:
                'Sur $n = 8$ bits, quelles sont les représentations respectives en SVA et en Complément à 1 (C1) de l’entier relatif $-45_{10}$ ?',
              options: [
                'SVA : $10101101_2$ et C1 : $11010010_2$',
                'SVA : $10101101_2$ et C1 : $11010011_2$',
                'SVA : $11010010_2$ et C1 : $10101101_2$',
                'SVA : $00101101_2$ et C1 : $11010010_2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On écrit d’abord $+45_{10}$ sur 8 bits : $45 = 32 + 8 + 4 + 1 = 00101101_2$. En SVA, on met simplement le MSB à $1$ : $10101101_2$. En C1, on inverse tous les bits de $00101101_2$ : $11010010_2$.',
              hint: 'Pars de $+45_{10} = 00101101_2$ sur 8 bits.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Représentation en Complément à 2 (C2) sur n bits',
            paragraphText:
              "Le Complément à 2 (C2) est la représentation universelle des entiers signés dans les processeurs modernes. Le C2 d'un entier négatif $-|N|$ est défini modulo $2^n$ par $2^n - |N|$, ce qui revient à calculer son Complément à 1 puis à lui ajouter $1$ ($\\text{C2} = \\text{C1} + 1$). Astuce pratique rapide : en partant de la droite (LSB), on recopie tous les bits de $|N|$ jusqu'au premier bit égal à $1$ inclus, puis on inverse tous les bits situés à sa gauche. Le zéro possède une représentation unique ($00\\dots 0$), ce qui libère une combinaison supplémentaire pour les négatifs ($10\\dots 0_2 = -2^{n-1}$). De plus, le bit de poids fort $b_{n-1}$ porte le poids algébrique négatif $-2^{n-1}$.",
            formula: {
              name: 'Valeur algébrique et plage d’un mot en Complément à 2',
              formula: 'N = -b_{n-1} \\cdot 2^{n-1} + \\sum_{i=0}^{n-2} b_i \\cdot 2^i \\;\\in\\; \\left[ -2^{n-1},\\; 2^{n-1} - 1 \\right]',
              note: 'Sur n = 8 bits, la plage en C2 est [−128, +127]. L’entier −128 (10000000₂) n’a pas d’opposé positif sur 8 bits.',
            },
            keyRule:
              'Pour évaluer en décimal un nombre en C2 commençant par $1$, donne le poids $-2^{n-1}$ au MSB et additionne les poids positifs $+2^i$ des autres bits à $1$.',
            konanTip:
              'Sur $n$ bits en C2, $111\\dots 11_2$ vaut toujours $-1$, et $100\\dots 00_2$ vaut toujours $-2^{n-1}$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p3_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la valeur décimale du mot binaire $11010110_2$ interprété en Complément à 2 sur $8$ bits, et quelle est la plage totale du C2 sur $8$ bits ?',
              options: [
                '$-42_{10}$, sur la plage $[-128,\\; +127]$',
                '$-86_{10}$, sur la plage $[-127,\\; +127]$',
                '$-41_{10}$, sur la plage $[-128,\\; +127]$',
                '$+214_{10}$, sur la plage $[-128,\\; +128]$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec la formule du poids signé du MSB : $N = -128 + 64 + 16 + 4 + 2 = -128 + 86 = -42_{10}$. (Ou par la règle du premier 1 conservé : $11010110_2 \\to -00101010_2 = -(32+8+2) = -42_{10}$). La plage sur 8 bits est $[-2^7, 2^7-1] = [-128, +127]$.',
              hint: 'Calcule $-128 + 64 + 16 + 4 + 2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Additions, soustractions et extension de signe en Complément à 2',
            paragraphText:
              "En Complément à 2, la soustraction $A - B$ est intégralement ramenée à une addition $A + \\text{C2}(-B)$ : le processeur utilise le même additionneur binaire en inversant les bits de $B$ et en injectant une retenue entrante $C_0 = 1$. Toute retenue sortante au-delà du $n$-ième bit ($C_n$) est simplement ignorée dans le résultat sur $n$ bits. Par ailleurs, lorsqu'on étend un entier signé en C2 de $n$ bits vers $m > n$ bits (extension de format), il faut dupliquer le bit de signe $b_{n-1}$ sur les $m - n$ nouveaux bits de gauche (extension de signe).",
            formula: {
              name: 'Soustraction matérielle en Complément à 2',
              formula: 'A - B = A + (-B)_{\\text{C2}} = A + \\overline{B} + 1 \\pmod{2^n}',
              note: 'Extension de signe de 4 à 8 bits : 1101₂ (−3) devient 1111 1101₂ (−3).',
            },
            keyRule:
              'En C2, on additionne le bit de signe exactement comme les autres bits ; le résultat est exact sur $n$ bits tant qu’il n’y a pas d’Overflow.',
            konanTip:
              'Ne complète jamais par des zéros à gauche un nombre négatif en C2 lors d’un changement de format : complète toujours par des $1$ (recopie du bit de signe).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p3_ex3',
              type: 'mcq',
              prompt:
                'On effectue sur $4$ bits en Complément à 2 l’opération $A - B$ avec $A = 0011_2$ ($+3$) et $B = 0110_2$ ($+6$). Quel est le mot binaire de $4$ bits obtenu ?',
              options: [
                '$1101_2$ (qui représente $-3_{10}$)',
                '$1011_2$ (qui représente $-3_{10}$)',
                '$1100_2$ (qui représente $-4_{10}$)',
                '$0011_2$ (avec retenue négative)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On calcule $\\text{C2}(-B)$ à partir de $B = 0110_2$ : en gardant jusqu’au premier $1$ à droite ($10$) et en inversant à gauche, $-B = 1010_2$ ($-6$). Puis $A + (-B) = 0011_2 + 1010_2 = 1101_2$, qui vaut bien $-8 + 4 + 1 = -3_{10}$.',
              hint: 'Trouve d’abord le complément à 2 de $0110_2$, puis additionne-le à $0011_2$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Retenue sortante (Carry) vs Dépassement de capacité signé (Overflow)',
            paragraphText:
              "C'est le piège numéro 1 des examens d'Électronique Numérique et d'Architecture : confondre le drapeau de retenue (Carry flag $C = C_n$) et le drapeau de débordement signé (Overflow flag $V$). La retenue sortante $C_n = 1$ indique un dépassement en arithmétique NON SIGNÉE (résultat $> 2^n - 1$), mais elle est normale et doit être ignorée en Complément à 2 (par exemple $(-1) + (+2) = 1111_2 + 0010_2 = (1)0001_2 = +1$, où $C_4=1$ sans aucune erreur !). En Complément à 2, un dépassement de capacité (Overflow $V=1$) survient uniquement lorsque le résultat sort de $[-2^{n-1}, 2^{n-1}-1]$, c'est-à-dire quand l'addition de deux nombres de MÊME signe produit un résultat de signe OPPOSÉ, ce qui équivaut matériellement à $V = C_{n-1} \\oplus C_n = 1$.",
            formula: {
              name: 'Équation logique de détection d’Overflow en C2',
              formula: 'V = C_{n-1} \\oplus C_n = a_{n-1}\\cdot b_{n-1}\\cdot \\overline{s_{n-1}} + \\overline{a_{n-1}}\\cdot \\overline{b_{n-1}}\\cdot s_{n-1}',
              note: 'Deux nombres de signes contraires additionnés en C2 ne peuvent JAMAIS provoquer d’Overflow (V = 0 toujours).',
            },
            keyRule:
              'Carry ($C_n = 1$) = débordement pour les entiers NON SIGNÉS. Overflow ($V = C_{n-1} \\oplus C_n = 1$) = débordement pour les entiers SIGNÉS en C2.',
            konanTip:
              'Règle visuelle instantanée : $(+) + (+) = (-)$ ou $(-) + (-) = (+)$ $\\iff$ Overflow ($V=1$). Dans tous les autres cas, $V=0$ quelle que soit la retenue finale $C_n$ !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p3_ex4',
              type: 'mcq',
              prompt:
                'Dans un additionneur $4$ bits en Complément à 2, laquelle des additions suivantes provoque un dépassement de capacité signé (Overflow $V = 1$) ?',
              options: [
                '$0101_2 + 0100_2$ ($+5 + 4$)',
                '$1111_2 + 0010_2$ ($-1 + 2$)',
                '$1101_2 + 1100_2$ ($-3 + (-4)$)',
                '$0111_2 + 1001_2$ ($+7 + (-7)$)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sur 4 bits en C2, la plage est $[-8, +7]$. L’addition $0101_2 (+5) + 0100_2 (+4)$ donne $1001_2$ qui a un bit de signe à $1$ ($-7_{10}$) et dépasse $+7$ : deux positifs donnent un négatif ($C_3 = 1, C_4 = 0 \\implies V = 1 \\oplus 0 = 1$). Pour $-3 + (-4) = -7 \\in [-8, +7]$, le résultat $1001_2$ est négatif et exact ($C_3=1, C_4=1 \\implies V=0$).',
              hint: 'Sur 4 bits en C2, la plage va de $-8$ à $+7$. Cherche quelle somme sort de $[-8, +7]$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Représentation en virgule fixe et norme IEEE 754 (32 bits)',
            paragraphText:
              "En virgule fixe format $Q_{m,f}$ sur $n = m + f$ bits, la position de la virgule est figée par convention ($m$ bits entiers, $f$ bits fractionnaires, résolution constante $2^{-f}$), ce qui limite la dynamique. Pour représenter des réels très grands ou très petits, la norme IEEE 754 simple précision (float 32 bits) utilise la virgule flottante normalisée : 1 bit de signe $S$ (bit 31), 8 bits d'exposant biaisé $E = e + 127$ (bits 30 à 23, biais $2^{8-1}-1 = 127$, avec $E \\in [1, 254]$ pour les nombres normalisés) et 23 bits de pseudo-mantisse fractionnaire $M$ (bits 22 à 0). Le bit entier $1$ situé avant la virgule dans $1{,}M_2$ est implicite (bit caché) afin de gagner 1 bit de précision.",
            formula: {
              name: 'Valeur d’un nombre flottant normalisé IEEE 754 (32 bits)',
              formula: 'X = (-1)^S \\times (1{,}M)_2 \\times 2^{E - 127} \\quad (1 \\le E \\le 254)',
              note: 'Cas spéciaux : E = 0 et M = 0 → ±0 ; E = 0 et M ≠ 0 → dénormalisé ; E = 255 et M = 0 → ±∞ ; E = 255 et M ≠ 0 → NaN.',
            },
            keyRule:
              'En IEEE 754 simple précision (32 bits) : $1$ bit de signe $S$, $8$ bits d’exposant biaisé $E = e + 127$, $23$ bits de pseudo-mantisse $M$ (sans le $1{,}$ implicite).',
            konanTip:
              'N’oublie jamais de retirer le $1$ devant la virgule de $1{,}M_2$ avant de remplir les 23 bits de la mantisse $M$ !',
            visualSchema: {
              type: 'layered_stack',
              title: 'Format d’un mot de 32 bits en norme IEEE 754 (Simple Précision)',
              caption: 'Décomposition des 32 bits : Signe (1 bit) + Exposant biaisé +127 (8 bits) + Mantisse fractionnaire (23 bits).',
              layeredStack: {
                style: 'stack',
                layers: [
                  {
                    badge: 'Bit 31 (1 bit)',
                    title: 'Signe S',
                    subtitle: 'S = 0 si positif (+), S = 1 si négatif (−)',
                    color: 'orange',
                  },
                  {
                    badge: 'Bits 30..23 (8 bits)',
                    title: 'Exposant biaisé E = e + 127',
                    subtitle: 'Exposant réel e = E − 127 (pour 1 ≤ E ≤ 254)',
                    color: 'violet',
                  },
                  {
                    badge: 'Bits 22..0 (23 bits)',
                    title: 'Pseudo-mantisse M (partie fractionnaire de 1,M₂)',
                    subtitle: 'Le 1 devant la virgule est implicite (caché), complété par des 0 à droite',
                    color: 'blue',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans la norme IEEE 754 simple précision (32 bits), quels sont le bit de signe $S$, l’exposant biaisé $E$ (sur 8 bits) et le début de la mantisse $M$ pour le nombre réel $+0{,}375_{10}$ ?',
              options: [
                '$S = 0$, $E = 01111101_2$ ($125_{10}$) et $M = 10000\\dots 0_2$',
                '$S = 0$, $E = 01111101_2$ ($125_{10}$) et $M = 11000\\dots 0_2$',
                '$S = 0$, $E = 10000001_2$ ($129_{10}$) et $M = 10000\\dots 0_2$',
                '$S = 1$, $E = 01111110_2$ ($126_{10}$) et $M = 10000\\dots 0_2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$+0{,}375_{10} = 0{,}25 + 0{,}125 = 0{,}011_2 = 1{,}1_2 \\times 2^{-2}$. Donc $S = 0$, l’exposant réel est $e = -2$, l’exposant biaisé est $E = -2 + 127 = 125_{10} = 01111101_2$, et la partie fractionnaire après le $1{,}$ implicite est $M = 10000000000000000000000_2$.',
              hint: 'Écris $0{,}375_{10} = 0{,}011_2 = 1{,}1_2 \\times 2^{-2}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Décodage inverse d’un mot hexadécimal IEEE 754 vers le décimal',
            paragraphText:
              "Pour décoder un mot hexadécimal de 32 bits en IEEE 754 (par exemple $\\text{41280000}_{16}$), on convertit d'abord les 3 premiers chiffres hexadécimaux en 12 bits binaires : $412_{16} = 0100\\,0001\\,0010_2$, suivis de $8_{16} = 1000_2$ et de zéros. On extrait le premier bit $S = 0$ (positif), puis les 8 bits suivants $E = 10000010_2 = 130_{10}$, d'où l'exposant réel $e = 130 - 127 = 3$. Les bits suivants forment la mantisse $M = 010100\\dots 0_2$, soit la mantisse normalisée $1{,}0101_2$. On calcule enfin $(-1)^0 \\times 1{,}0101_2 \\times 2^3 = 1010{,}1_2 = 10{,}5_{10}$.",
            formula: {
              name: 'Décodage rapide par décalage de la virgule',
              formula: 'X = (-1)^S \\times (1 + 2^{-1}m_1 + 2^{-2}m_2 + \\dots) \\times 2^{E - 127}',
              note: 'Le premier chiffre hexa code S et les 3 premiers bits de E ; les 2ème et 3ème chiffres hexa contiennent la fin de E et le début de M.',
            },
            keyRule:
              'Convertis toujours les 4 premiers chiffres hexadécimaux en 16 bits binaires puis sépare-les selon le masque $1\\text{ bit} \\mid 8\\text{ bits} \\mid 7\\text{ premiers bits de } M$.',
            konanTip:
              'Si le premier chiffre hexadécimal est $\\ge 8$ ($\\text{8..F}$), alors $S = 1$ et le nombre est négatif ; s’il est $\\le 7$ ($\\text{0..7}$), le nombre est positif ($S = 0$).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch1_p3_ex6',
              type: 'mcq',
              prompt:
                'Quelle est la valeur décimale du nombre codé en norme IEEE 754 simple précision (32 bits) par le mot hexadécimal $\\text{C0A00000}_{16}$ ?',
              options: [
                '$-5{,}0_{10}$',
                '$-2{,}5_{10}$',
                '$+5{,}0_{10}$',
                '$-10{,}0_{10}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\text{C0A0}_{16} = 1100\\,0000\\,1010\\,0000_2$. On découpe en $1 \\mid 8 \\mid 7$ bits : $S = 1$ (négatif), $E = 10000001_2 = 129_{10} \\implies e = 129 - 127 = 2$, et $M = 0100000\\dots_2 \\implies 1{,}M_2 = 1{,}01_2 = 1{,}25_{10}$. D’où $X = -1{,}25 \\times 2^2 = -5{,}0_{10}$.',
              hint: 'Convertis $\\text{C0A0}_{16}$ en $1100\\,0000\\,1010\\,0000_2$ et isole $S$ (1 bit), $E$ (8 bits) et $M$.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 2 : ALGÈBRE DE BOOLE ET SIMPLIFICATION DES FONCTIONS LOGIQUES (16h)
  // ============================================================================
  {
    id: 'lmd_srit_l1_elecnum_ch2',
    subjectId: 'lmd_electronique_numerique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 2,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT, Semestre 2 (ECUE 1PHY3201 : Électronique Numérique)',
    title: 'Algèbre de Boole et Simplification des Fonctions Logiques',
    summary:
      'Postulats et théorèmes de Boole (absorption, consensus, De Morgan), portes logiques élémentaires et universelles (NAND, NOR), formes canoniques disjonctive (SDP/SOP) et conjonctive (PDS/POS), et simplification par tableaux de Karnaugh à 3, 4 et 5 variables avec états indifférents.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elecnum_ch2_p1',
        order: 1,
        title: 'Postulats, théorèmes de l’algèbre de Boole et portes universelles',
        summary:
          'Axiomes booléens, théorèmes d’absorption, d’allègement, de consensus et de De Morgan, opérateurs NON/ET/OU/XOR/XNOR et synthèse universelle tout-NAND ou tout-NOR.',
        conceptExplanation:
          "Introduite par George Boole et appliquée aux circuits de commutation par Claude Shannon, l'algèbre de Boole opère sur l'ensemble binaire $B = \\{0, 1\\}$ muni de trois opérations de base : la négation (NON), le produit logique (ET) et la somme logique (OU). La maîtrise de ses théorèmes et des portes universelles NAND/NOR permet de réduire le nombre de transistors sur silicium.",
        keyRule:
          "Les lois de De Morgan permettent de casser une barre de complémentation globale en inversant l'opérateur : $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$ et $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$.",
        workedExample: {
          title: 'Simplification algébrique et réalisation tout-NAND d’une fonction logique',
          statement:
            'Simplifier algébriquement $F(A,B,C) = A\\cdot B + A\\cdot\\bar{B}\\cdot C + \\bar{A}\\cdot B\\cdot C$, puis exprimer $F$ uniquement à l’aide de l’opérateur NAND (barre de Sheffer $\\uparrow$).',
          methodSteps: [
            'Mise en facteur de $A$ sur les deux premiers termes : $A(B + \\bar{B}C) + \\bar{A}BC$.',
            'Application du théorème d’allègement $B + \\bar{B}C = B + C$ : $F = A(B + C) + \\bar{A}BC = AB + AC + \\bar{A}BC$.',
            'Mise en facteur de $BC$ entre $AB$ et $\\bar{A}BC$ (ou allègement $A + \\bar{A}C$ avec $B$ en facteur) : $F = B(A + \\bar{A}C) + AC = B(A + C) + AC = AB + BC + AC$.',
            'Passage en tout-NAND par double négation et De Morgan : $F = \\overline{\\overline{AB + BC + AC}} = \\overline{\\overline{AB} \\cdot \\overline{BC} \\cdot \\overline{AC}}$.',
          ],
          conclusion:
            '$F = AB + BC + AC = \\overline{\\overline{AB} \\cdot \\overline{BC} \\cdot \\overline{AC}}$ (réalisable avec trois portes NAND à 2 entrées et une porte NAND à 3 entrées).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Postulats de l’algèbre de Boole et principe de dualité',
            paragraphText:
              "L'algèbre de Boole est définie sur l'ensemble $\\{0, 1\\}$ muni de la complémentation $a \\mapsto \\bar{a}$, de la conjonction ET ($a \\cdot b$) et de la disjonction OU ($a + b$). Elle vérifie les postulats d'élément neutre ($a + 0 = a$, $a \\cdot 1 = a$), d'élément absorbant ($a + 1 = 1$, $a \\cdot 0 = 0$), d'idempotence ($a + a = a$, $a \\cdot a = a$), de complémentarité ($a + \\bar{a} = 1$, $a \\cdot \\bar{a} = 0$), d'involution ($\\overline{\\bar{a}} = a$), de commutativité, d'associativité et de distributivité mutuelle : contrairement à l'algèbre ordinaire, le OU est distributif sur le ET ($a + (b \\cdot c) = (a + b) \\cdot (a + c)$). Le principe de dualité stipule que toute identité booléenne reste vraie si l'on permute simultanément $+$ et $\\cdot$ ainsi que $0$ et $1$.",
            formula: {
              name: 'Distributivité duale en algèbre de Boole',
              formula: 'a \\cdot (b + c) = a\\cdot b + a\\cdot c \\quad \\text{et} \\quad a + (b \\cdot c) = (a + b) \\cdot (a + c)',
              note: 'Attention : les variables ne sont PAS inversées lorsqu’on écrit l’expression duale (contrairement au complément de De Morgan).',
            },
            keyRule:
              'En algèbre de Boole, $a + b\\cdot c = (a+b)(a+c)$ : la somme logique se distribue sur le produit logique.',
            konanTip:
              'Pour vérifier rapidement que $(A+B)(A+C) = A + BC$, développe : $AA + AC + AB + BC = A(1 + C + B) + BC = A\\cdot 1 + BC = A + BC$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p1_ex1',
              type: 'mcq',
              prompt:
                'Quelle est l’expression simplifiée de la fonction booléenne $F(A,B,C) = (A + B) \\cdot (A + \\bar{B}) \\cdot (\\bar{A} + C)$ ?',
              options: [
                '$A \\cdot C$',
                '$A + C$',
                '$\\bar{A} \\cdot C$',
                '$A \\cdot B \\cdot C$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par distributivité : $(A + B)(A + \\bar{B}) = A + B\\cdot\\bar{B} = A + 0 = A$. Il reste alors $F = A \\cdot (\\bar{A} + C) = A\\cdot\\bar{A} + A\\cdot C = 0 + A\\cdot C = A \\cdot C$.',
              hint: 'Simplifie d’abord le produit des deux premières parenthèses $(A + B)(A + \\bar{B})$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Théorèmes d’absorption, d’allègement et de consensus',
            paragraphText:
              "Trois théorèmes remarquables permettent d'éliminer les termes ou littéraux redondants sans passer par une table de vérité : 1) le théorème d'absorption ($A + A\\cdot B = A$ et sa forme duale $A\\cdot(A + B) = A$), où le terme le plus court absorbe le terme qui le contient ; 2) le théorème d'allègement ou d'absorption du complément ($A + \\bar{A}\\cdot B = A + B$ et $A\\cdot(\\bar{A} + B) = A\\cdot B$) ; 3) le théorème de consensus ($A\\cdot B + \\bar{A}\\cdot C + B\\cdot C = A\\cdot B + \\bar{A}\\cdot C$), où le terme de consensus $B\\cdot C$ formé à partir des deux termes contenant $A$ et $\\bar{A}$ est totalement redondant et se supprime.",
            formula: {
              name: 'Théorèmes fondamentaux de simplification algébrique',
              formula: '\\begin{aligned} &\\text{Absorption : } A + A\\cdot B = A \\\\ &\\text{Allègement : } A + \\bar{A}\\cdot B = A + B \\\\ &\\text{Consensus : } A\\cdot B + \\bar{A}\\cdot C + B\\cdot C = A\\cdot B + \\bar{A}\\cdot C \\end{aligned}',
              note: 'Preuve du consensus : BC = BC(A + Ā) = ABC + ĀBC, absorbés respectivement par AB et ĀC.',
            },
            keyRule:
              'Dans $A + \\bar{A}B$, le littéral complémenté $\\bar{A}$ disparaît pour donner $A + B$. Dans $AB + \\bar{A}C + BC$, le terme sans $A$ ($BC$) disparaît.',
            konanTip:
              'Beaucoup d’étudiants écrivent à tort $A + \\bar{A}B = B$ : c’est faux ! Utilise la distributivité $A + \\bar{A}B = (A + \\bar{A})(A + B) = 1 \\cdot (A + B) = A + B$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p1_ex2',
              type: 'mcq',
              prompt:
                'En appliquant les théorèmes d’allègement et de consensus, quelle est la forme minimale de $F(A,B,C) = A\\cdot\\bar{B} + B + \\bar{A}\\cdot C$ ?',
              options: [
                '$A + B + C$',
                '$A\\cdot B + C$',
                '$A + B\\cdot C$',
                '$\\bar{A} + B + C$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par le théorème d’allègement sur les deux premiers termes : $B + \\bar{B}\\cdot A = B + A$. L’expression devient $F = B + A + \\bar{A}\\cdot C$. On applique à nouveau l’allègement entre $A$ et $\\bar{A}\\cdot C$ : $A + \\bar{A}\\cdot C = A + C$. Finalement, $F = A + B + C$.',
              hint: 'Commence par réduire $B + A\\cdot\\bar{B}$ grâce au théorème d’allègement $X + \\bar{X}Y = X + Y$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Théorèmes de De Morgan généralisés',
            paragraphText:
              "Les deux théorèmes d'Augustus De Morgan expriment le complément d'un produit et le complément d'une somme pour un nombre quelconque $n$ de variables : le complément d'un produit logique est égal à la somme logique des compléments de chaque terme, et le complément d'une somme logique est égal au produit logique des compléments de chaque terme. Pour complémenter une expression complexe, on applique la règle « casser la barre, changer l'opérateur sous la barre ($\\cdot \\leftrightarrow +$) » en veillant à conserver les parenthèses implicites autour des produits.",
            formula: {
              name: 'Lois de De Morgan à n variables',
              formula: '\\overline{A_1 \\cdot A_2 \\cdots A_n} = \\overline{A_1} + \\overline{A_2} + \\dots + \\overline{A_n} \\quad \\text{et} \\quad \\overline{A_1 + A_2 + \\dots + A_n} = \\overline{A_1} \\cdot \\overline{A_2} \\cdots \\overline{A_n}',
              note: 'Méthode générale de complémentation : remplacer + par ·, · par +, 0 par 1, 1 par 0, et complémenter chaque littéral.',
            },
            keyRule:
              'Attention, $\\overline{A \\cdot B} \\ne \\bar{A} \\cdot \\bar{B}$ et $\\overline{A + B} \\ne \\bar{A} + \\bar{B}$ : casser une barre change obligatoirement la nature de l’opérateur logique.',
            konanTip:
              'Avant de casser une grande barre au-dessus d’une somme de produits comme $\\overline{AB + CD}$, entoure chaque produit de parenthèses : $\\overline{(AB) + (CD)} = \\overline{(AB)} \\cdot \\overline{(CD)} = (\\bar{A} + \\bar{B})(\\bar{C} + \\bar{D})$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p1_ex3',
              type: 'mcq',
              prompt:
                'Quelle est l’expression simplifiée de $F(A,B,C) = \\overline{\\overline{A \\cdot B} + \\bar{A} + C}$ après application des lois de De Morgan ?',
              options: [
                '$A \\cdot B \\cdot \\bar{C}$',
                '$A + B + \\bar{C}$',
                '$\\bar{A} \\cdot B \\cdot \\bar{C}$',
                '$A \\cdot \\bar{B} \\cdot \\bar{C}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En cassant la barre supérieure (qui couvre une somme de trois termes $\\overline{AB}$, $\\bar{A}$ et $C$) : $F = (\\overline{\\overline{A\\cdot B}}) \\cdot (\\overline{\\bar{A}}) \\cdot \\bar{C} = (A \\cdot B) \\cdot A \\cdot \\bar{C} = (A \\cdot A) \\cdot B \\cdot \\bar{C} = A \\cdot B \\cdot \\bar{C}$.',
              hint: 'Casse la grande barre de somme : $\\overline{X + Y + Z} = \\bar{X} \\cdot \\bar{Y} \\cdot \\bar{Z}$ avec $X = \\overline{AB}$, $Y = \\bar{A}$ et $Z = C$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Portes logiques élémentaires, XOR (OU-Exclusif) et XNOR (Coïncidence)',
            paragraphText:
              "Outre les portes élémentaires NON ($\\bar{A}$), ET ($A\\cdot B$) et OU ($A + B$), et leurs versions inversées NAND ($\\overline{A\\cdot B}$) et NOR ($\\overline{A+B}$), l'électronique numérique utilise intensivement les portes OU-Exclusif (XOR, symbole $\\oplus$) et NON-OU-Exclusif ou Coïncidence (XNOR, symbole $\\odot$). La sortie d'un XOR à 2 entrées vaut $1$ si et seulement si ses deux entrées sont différentes ($A \\ne B$) ; la sortie d'un XNOR vaut $1$ si et seulement si ses deux entrées sont identiques ($A = B$, fonction comparateur d'égalité 1 bit). Sur $n$ entrées, le XOR vaut $1$ lorsque le nombre d'entrées à $1$ est impair (détecteur/générateur de parité).",
            formula: {
              name: 'Équations booléennes du XOR et du XNOR',
              formula: 'A \\oplus B = A\\cdot\\bar{B} + \\bar{A}\\cdot B \\quad \\text{et} \\quad A \\odot B = \\overline{A \\oplus B} = A\\cdot B + \\bar{A}\\cdot\\bar{B}',
              note: 'Propriétés du XOR : A ⊕ 0 = A (suiveur), A ⊕ 1 = Ā (inverseur commandé), A ⊕ A = 0, A ⊕ Ā = 1.',
            },
            keyRule:
              'Une porte XOR utilisée avec une entrée de commande $C$ réalise un inverseur programmable : $A \\oplus C = A$ si $C=0$, et $A \\oplus C = \\bar{A}$ si $C=1$.',
            konanTip:
              'C’est grâce à la propriété $B \\oplus 1 = \\bar{B}$ que l’on transforme un additionneur parallèle en additionneur/soustracteur commandé par un bit $M \\in \\{0,1\\}$ !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p1_ex4',
              type: 'mcq',
              prompt:
                'À quoi est égale l’expression booléenne $(A \\oplus B) \\oplus A$ quelle que soit la valeur des variables logiques $A$ et $B$ ?',
              options: [
                '$B$',
                '$\\bar{B}$',
                '$A$',
                '$1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’opérateur XOR est commutatif et associatif : $(A \\oplus B) \\oplus A = (A \\oplus A) \\oplus B = 0 \\oplus B = B$. C’est d’ailleurs le principe fondamental du chiffrement symétrique par masque jetable (XOR cipher).',
              hint: 'Utilise la commutativité et l’associativité du XOR ainsi que $A \\oplus A = 0$ et $0 \\oplus B = B$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Universalité (complétude fonctionnelle) des portes NAND et NOR',
            paragraphText:
              "Les opérateurs NAND ($\\uparrow$) et NOR ($\\downarrow$) sont dits universels (ou fonctionnellement complets) car tout circuit logique combinatoire ou séquentiel peut être câblé uniquement avec des portes NAND, ou uniquement avec des portes NOR. En technologie CMOS industrielle, les portes NAND et NOR sont d'ailleurs les portes physiques natives (4 transistors CMOS pour un NAND2 contre 6 transistors pour un ET2 qui est un NAND2 suivi d'un NON). Pour convertir une Somme de Produits (SDP) en schéma tout-NAND, on applique une double complémentation globale $\\overline{\\overline{F}}$ et on casse uniquement la barre inférieure par De Morgan.",
            formula: {
              name: 'Réalisation des fonctions de base en tout-NAND et en tout-NOR',
              formula: '\\begin{aligned} &\\text{Tout-NAND : } \\bar{A} = \\overline{A\\cdot A},\\quad A\\cdot B = \\overline{(\\overline{A\\cdot B})\\cdot(\\overline{A\\cdot B})},\\quad A+B = \\overline{\\bar{A}\\cdot\\bar{B}} \\\\ &\\text{Tout-NOR : } \\bar{A} = \\overline{A+A},\\quad A+B = \\overline{(\\overline{A+B})+(\\overline{A+B})},\\quad A\\cdot B = \\overline{\\bar{A}+\\bar{B}} \\end{aligned}',
              note: 'Un XOR (A ⊕ B) nécessite au minimum 4 portes NAND à 2 entrées (ou 5 portes NOR à 2 entrées).',
            },
            keyRule:
              'Une forme Somme de Produits (ET-OU) se transforme directement en structure NAND-NAND (même nombre de portes à 2 niveaux). Une forme Produit de Sommes (OU-ET) se transforme directement en structure NOR-NOR.',
            konanTip:
              'Pour transformer un inverseur à partir d’une porte NAND ou NOR à 2 entrées, on relie ses deux entrées ensemble (ou on fixe l’autre entrée à $1$ pour NAND, à $0$ pour NOR).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p1_ex5',
              type: 'mcq',
              prompt:
                'Quelle est l’écriture de la fonction $F = A\\cdot B + C\\cdot D$ permettant une réalisation directe à deux niveaux uniquement avec des portes NAND à 2 entrées ?',
              options: [
                '$F = \\overline{\\overline{A\\cdot B} \\cdot \\overline{C\\cdot D}}$',
                '$F = \\overline{\\overline{A+B} + \\overline{C+D}}$',
                '$F = \\overline{A\\cdot B} \\cdot \\overline{C\\cdot D}$',
                '$F = \\overline{\\bar{A}\\cdot\\bar{B}} + \\overline{\\bar{C}\\cdot\\bar{D}}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par double négation et théorème de De Morgan sur la barre inférieure : $F = \\overline{\\overline{A\\cdot B + C\\cdot D}} = \\overline{\\overline{A\\cdot B} \\cdot \\overline{C\\cdot D}}$. Cela correspond à deux portes NAND au premier niveau (calculant $X = \\overline{AB}$ et $Y = \\overline{CD}$) suivies d’une troisième porte NAND au second niveau calculant $\\overline{X \\cdot Y}$.',
              hint: 'Pose $F = \\overline{\\overline{AB + CD}}$ et casse seulement la barre du bas avec De Morgan.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Non-associativité des opérateurs NAND (↑) et NOR (↓)',
            paragraphText:
              "Bien que les opérateurs NAND ($A \\uparrow B = \\overline{A\\cdot B}$) et NOR ($A \\downarrow B = \\overline{A+B}$) soient commutatifs, ils ne sont PAS associatifs ! Ainsi, $(A \\uparrow B) \\uparrow C = \\overline{(\\overline{A\\cdot B}) \\cdot C} = A\\cdot B + \\bar{C}$, ce qui est totalement différent de $A \\uparrow (B \\uparrow C) = \\overline{A \\cdot (\\overline{B\\cdot C})} = \\bar{A} + B\\cdot C$ et également différent d'une porte NAND à 3 entrées $\\overline{A \\cdot B \\cdot C}$. On ne peut donc pas remplacer directement une porte NAND à 3 entrées par deux portes NAND à 2 entrées en cascade sans insérer un inverseur intermédiaire.",
            formula: {
              name: 'Mise en cascade de portes NAND à 2 entrées',
              formula: '(A \\uparrow B) \\uparrow C = \\overline{\\overline{A\\cdot B}\\cdot C} = A\\cdot B + \\bar{C} \\neq \\overline{A\\cdot B\\cdot C}',
              note: 'Pour réaliser NAND3(A,B,C) avec des NAND2, il faut calculer (A · B) = NOT(A ↑ B) puis faire ((A · B) ↑ C).',
            },
            keyRule:
              'Les opérateurs NAND ($\\uparrow$) et NOR ($\\downarrow$) ne sont JAMAIS associatifs : $(A \\uparrow B) \\uparrow C \\neq A \\uparrow (B \\uparrow C)$.',
            konanTip:
              'Quand un schéma en chaîne de portes NAND ou NOR t’est donné à l’examen, n’utilise jamais de notation sans parenthèses : écris l’expression à la sortie de chaque porte étape par étape.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p1_ex6',
              type: 'mcq',
              prompt:
                'On câble deux portes NOR à 2 entrées en cascade : la première reçoit les entrées $A$ et $B$, et sa sortie est reliée à la première entrée de la seconde porte NOR dont la deuxième entrée reçoit $C$. Quelle fonction logique $S(A,B,C)$ obtient-on en sortie ?',
              options: [
                '$S = (A + B) \\cdot \\bar{C}$',
                '$S = \\overline{A + B + C}$',
                '$S = \\bar{A} \\cdot \\bar{B} + \\bar{C}$',
                '$S = A + B + \\bar{C}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La sortie de la première porte NOR est $X = \\overline{A + B}$. La sortie de la seconde porte NOR est $S = \\overline{X + C} = \\overline{\\overline{A + B} + C}$. Par la loi de De Morgan : $S = (\\overline{\\overline{A + B}}) \\cdot \\bar{C} = (A + B) \\cdot \\bar{C}$.',
              hint: 'Écris $S = \\overline{(\\overline{A+B}) + C}$ et applique De Morgan à la barre supérieure.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_elecnum_ch2_p2',
        order: 2,
        title: 'Tables de vérité, mintermes, maxtermes et formes canoniques',
        summary:
          'Dénombrement des fonctions à n variables, mintermes et 1ère forme canonique disjonctive (SDP/SOP), maxtermes et 2ème forme canonique conjonctive (PDS/POS).',
        conceptExplanation:
          "Pour passer d'un cahier des charges logique (table de vérité) à une équation algébrique systématique avant simplification, toute fonction booléenne de $n$ variables peut s'exprimer de manière unique sous deux formes canoniques duales : la somme de ses mintermes (lignes où $F=1$) ou le produit de ses maxtermes (lignes où $F=0$).",
        keyRule:
          "Dans un minterme $m_i$ (produit ET, utilisé pour $F=1$), un bit à $1$ correspond à la variable directe $X$ et un bit à $0$ à $\\bar{X}$. Dans un maxterme $M_i$ (somme OU, utilisé pour $F=0$), la convention est inversée : $0 \\to X$ et $1 \\to \\bar{X}$.",
        workedExample: {
          title: 'Détermination des deux formes canoniques d’une fonction majoritaire à 3 variables',
          statement:
            'Soit la fonction vote majoritaire $F(A,B,C)$ qui vaut $1$ si et seulement si au moins deux de ses trois entrées valent $1$. Écrire ses deux formes canoniques (numérique et algébrique).',
          methodSteps: [
            'Combinaisons $(A,B,C)$ donnant $F=1$ (au moins deux $1$) : $011_2 (3)$, $101_2 (5)$, $110_2 (6)$ et $111_2 (7)$.',
            'Première forme canonique (SDP / SOP) : $F = \\sum m(3, 5, 6, 7) = \\bar{A}BC + A\\bar{B}C + AB\\bar{C} + ABC$.',
            'Combinaisons donnant $F=0$ (indices complémentaires dans $\\{0..7\\}$) : $0, 1, 2, 4$.',
            'Deuxième forme canonique (PDS / POS) : $F = \\prod M(0, 1, 2, 4) = (A+B+C)(A+B+\\bar{C})(A+\\bar{B}+C)(\\bar{A}+B+C)$.',
          ],
          conclusion:
            '$F(A,B,C) = \\sum m(3,5,6,7) = \\prod M(0,1,2,4)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Table de vérité et nombre de fonctions booléennes à n variables',
            paragraphText:
              "Une fonction logique $F(X_{n-1}, \\dots, X_0)$ de $n$ variables binaires est une application de $\\{0,1\\}^n$ dans $\\{0,1\\}$. Sa table de vérité comporte exactement $2^n$ lignes correspondant à toutes les combinaisons binaires des entrées rangées de $0$ à $2^n - 1$. Puisque pour chacune des $2^n$ lignes la sortie $F$ peut prendre indépendamment $2$ valeurs ($0$ ou $1$), le nombre total de fonctions booléennes distinctes que l'on peut définir avec $n$ variables est égal à $2^{(2^n)}$ (soit $16$ fonctions pour $n=2$ variables, $256$ pour $n=3$ variables, et $65\\,536$ pour $n=4$ variables).",
            formula: {
              name: 'Nombre de lignes et nombre de fonctions à n variables',
              formula: 'N_{\\text{lignes}} = 2^n \\quad \\text{et} \\quad N_{\\text{fonctions}}(n) = 2^{(2^n)}',
              note: 'Un terme produit ou somme est dit canonique s’il contient explicitement chacune des n variables (sous forme directe ou complémentée).',
            },
            keyRule:
              'Une table de vérité à $n$ variables possède $2^n$ lignes, et il existe $2^{2^n}$ fonctions logiques possibles de $n$ variables.',
            konanTip:
              'Respecte toujours l’ordre des poids des variables indiqué dans la déclaration $F(A,B,C)$ : par convention, la première variable $A$ est le MSB (poids $2^{n-1}$) et la dernière variable $C$ est le LSB (poids $2^0$).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p2_ex1',
              type: 'mcq',
              prompt:
                'Combien de lignes comporte la table de vérité d’une fonction logique de $4$ variables, et combien existe-t-il de fonctions booléennes distinctes à $3$ variables ?',
              options: [
                '$16$ lignes (pour 4 variables) et $256$ fonctions (pour 3 variables)',
                '$8$ lignes (pour 4 variables) et $64$ fonctions (pour 3 variables)',
                '$16$ lignes (pour 4 variables) et $16$ fonctions (pour 3 variables)',
                '$32$ lignes (pour 4 variables) et $512$ fonctions (pour 3 variables)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $n=4$ variables, le nombre de lignes est $2^4 = 16$. Pour $n=3$ variables, la table a $2^3 = 8$ lignes, donc le nombre de fonctions booléennes distinctes est $2^{(2^3)} = 2^8 = 256$.',
              hint: 'Utilise $N_{\\text{lignes}} = 2^n$ pour $n=4$ et $N_{\\text{fonctions}} = 2^{(2^n)}$ pour $n=3$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Mintermes et Première Forme Canonique Disjonctive (SDP / SOP)',
            paragraphText:
              "Un minterme de $n$ variables, noté $m_i$ ($0 \\le i \\le 2^n - 1$), est un produit logique (ET) canonique contenant les $n$ variables dans lequel chaque variable apparaît sous sa forme directe ($X_k$) si le bit correspondant de l'écriture binaire de l'indice $i$ vaut $1$, et sous sa forme complémentée ($\\overline{X_k}$) si ce bit vaut $0$. Ainsi, le minterme $m_i$ vaut $1$ pour l'unique combinaison d'entrée de rang $i$ et $0$ pour toutes les autres. La Première Forme Canonique (forme disjonctive ou Somme de Produits Canonique SDP / SOP) d'une fonction $F$ est la somme logique (OU) de tous les mintermes pour lesquels $F = 1$.",
            formula: {
              name: 'Première forme canonique (Somme de Mintermes)',
              formula: 'F(X_{n-1},\\dots,X_0) = \\sum_{i \\in I_1} m_i \\quad \\text{où } I_1 = \\{ i \\in [0, 2^n-1] \\mid F(i) = 1 \\}',
              note: 'Exemple pour n = 3 (A,B,C) : m_5 (5 = 101₂) s’écrit A · B̄ · C.',
            },
            keyRule:
              'Première forme canonique = Somme de Produits (SDP/SOP) = réunion des lignes où $F = 1$, avec la convention $1 \\to X$ et $0 \\to \\bar{X}$.',
            konanTip:
              'La première forme canonique est la plus rapide à écrire quand la table de vérité contient peu de $1$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p2_ex2',
              type: 'mcq',
              prompt:
                'Pour une fonction $F(A,B,C)$ où $A$ est le MSB et $C$ le LSB, quelle est l’expression algébrique de la première forme canonique $F(A,B,C) = \\sum m(1, 4, 6)$ ?',
              options: [
                '$\\bar{A}\\bar{B}C + A\\bar{B}\\bar{C} + AB\\bar{C}$',
                '$A B \\bar{C} + \\bar{A} B C + \\bar{A}\\bar{B}C$',
                '$(A+B+\\bar{C})(\\bar{A}+B+C)(\\bar{A}+\\bar{B}+C)$',
                '$\\bar{A}B\\bar{C} + A\\bar{B}C + ABC$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En binaire sur 3 bits $(A,B,C)$ : $1_{10} = 001_2 \\implies m_1 = \\bar{A}\\bar{B}C$ ; $4_{10} = 100_2 \\implies m_4 = A\\bar{B}\\bar{C}$ ; $6_{10} = 110_2 \\implies m_6 = AB\\bar{C}$. Leur somme donne $\\bar{A}\\bar{B}C + A\\bar{B}\\bar{C} + AB\\bar{C}$.',
              hint: 'Convertis $1, 4, 6$ en binaire sur 3 bits ($001, 100, 110$) et applique $1 \\to X$, $0 \\to \\bar{X}$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Maxtermes et Deuxième Forme Canonique Conjonctive (PDS / POS)',
            paragraphText:
              "Par dualité, un maxterme de $n$ variables, noté $M_i$ ($0 \\le i \\le 2^n - 1$), est une somme logique (OU) canonique contenant les $n$ variables dans laquelle chaque variable apparaît sous sa forme directe ($X_k$) si le bit correspondant de l'indice $i$ vaut $0$, et sous sa forme complémentée ($\\overline{X_k}$) si ce bit vaut $1$. En vertu de la loi de De Morgan, le maxterme $M_i$ est le complément exact du minterme de même indice ($M_i = \\overline{m_i}$) et s'annule ($M_i = 0$) pour l'unique combinaison de rang $i$. La Deuxième Forme Canonique (forme conjonctive ou Produit de Sommes Canonique PDS / POS) est le produit logique (ET) de tous les maxtermes pour lesquels $F = 0$.",
            formula: {
              name: 'Deuxième forme canonique (Produit de Maxtermes)',
              formula: 'F(X_{n-1},\\dots,X_0) = \\prod_{j \\in I_0} M_j \\quad \\text{avec } M_j = \\overline{m_j} \\text{ et } I_0 = \\{ j \\mid F(j) = 0 \\}',
              note: 'Exemple pour n = 3 (A,B,C) : M_5 (5 = 101₂) s’écrit (Ā + B + C̄).',
            },
            keyRule:
              'Deuxième forme canonique = Produit de Sommes (PDS/POS) = produit des lignes où $F = 0$, avec la convention inversée $0 \\to X$ et $1 \\to \\bar{X}$.',
            konanTip:
              'Pour ne jamais te tromper sur un maxterme $M_i$ : demande-toi ce qu’il faut mettre dans la somme $(A+B+C)$ pour que cette parenthèse donne $0 + 0 + 0 = 0$ lorsque $(A,B,C)$ prend la valeur binaire de $i$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p2_ex3',
              type: 'mcq',
              prompt:
                'Pour une fonction $F(A,B,C)$ à 3 variables, comment s’écrit algébriquement le maxterme $M_3$ ?',
              options: [
                '$A + \\bar{B} + \\bar{C}$',
                '$\\bar{A} + B + C$',
                '$\\bar{A} \\cdot B \\cdot C$',
                '$A + B + \\bar{C}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L’indice $3_{10}$ s’écrit $011_2$ pour $(A,B,C)$. Dans un maxterme (somme OU qui doit s’annuler pour $A=0, B=1, C=1$), $0 \\to A$ et $1 \\to \\bar{B}, \\bar{C}$. On obtient donc $M_3 = A + \\bar{B} + \\bar{C}$ (qui est bien égal à $\\overline{m_3} = \\overline{\\bar{A}BC}$).',
              hint: '$3_{10} = 011_2$. Applique la convention des maxtermes : $0 \\to \\text{variable directe}$, $1 \\to \\text{variable complémentée}$ dans une somme OU.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Passage entre première et deuxième formes canoniques',
            paragraphText:
              "Pour une fonction booléenne complètement définie (sans états indifférents), l'ensemble des indices $I_1$ où $F=1$ et l'ensemble des indices $I_0$ où $F=0$ forment une partition de $\\{0, 1, \\dots, 2^n - 1\\}$. En effet, écrire que $\\bar{F} = \\sum_{j \\in I_0} m_j$ puis complémenter les deux membres par le théorème de De Morgan donne directement $F = \\overline{\\sum_{j \\in I_0} m_j} = \\prod_{j \\in I_0} \\overline{m_j} = \\prod_{j \\in I_0} M_j$. Le passage de la notation numérique $\\sum m(\\dots)$ à la notation $\\prod M(\\dots)$ est donc immédiat : il suffit de prendre les indices complémentaires dans $\\{0, \\dots, 2^n - 1\\}$.",
            formula: {
              name: 'Équivalence entre somme de mintermes et produit de maxtermes',
              formula: 'F = \\sum_{i \\in I_1} m_i = \\prod_{j \\in \\{0,\\dots,2^n-1\\} \\setminus I_1} M_j \\quad \\text{et} \\quad \\bar{F} = \\sum_{j \\in I_0} m_j = \\prod_{i \\in I_1} M_i',
              note: 'La somme du nombre de mintermes de F et du nombre de maxtermes de F vaut toujours 2^n.',
            },
            keyRule:
              'Les indices des maxtermes de $F$ dans $\\prod M(\\dots)$ sont exactement les indices absents de la liste des mintermes de $F$ dans $\\sum m(\\dots)$.',
            konanTip:
              'Attention au piège : si on te demande $\\bar{F}$ en mintermes $\\sum m$, on prend les indices complémentaires ; mais si on te demande $F$ en maxtermes $\\prod M$, on prend AUSSI les indices complémentaires !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p2_ex4',
              type: 'mcq',
              prompt:
                'Soit la fonction de 3 variables $F(A,B,C) = \\sum m(0, 2, 3, 5, 7)$. Quelle est sa deuxième forme canonique (en produit de maxtermes) ?',
              options: [
                '$F(A,B,C) = \\prod M(1, 4, 6)$',
                '$F(A,B,C) = \\prod M(0, 2, 3, 5, 7)$',
                '$F(A,B,C) = \\prod M(1, 2, 4, 6)$',
                '$F(A,B,C) = \\sum m(1, 4, 6)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour $n=3$ variables, l’ensemble complet des indices est $\\{0, 1, 2, 3, 4, 5, 6, 7\\}$. Les indices où $F=0$ sont le complémentaire de $\\{0, 2, 3, 5, 7\\}$, soit $\\{1, 4, 6\\}$. D’où $F(A,B,C) = \\prod M(1, 4, 6)$.',
              hint: 'Trouve les indices de $\\{0,1,2,3,4,5,6,7\\}$ qui ne figurent pas dans $\\{0,2,3,5,7\\}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Mise sous forme canonique algébrique d’une expression quelconque',
            paragraphText:
              "Lorsqu'une fonction logique est donnée sous une forme réduite non canonique, par exemple $F(A,B,C) = A\\cdot\\bar{B} + B\\cdot C$, on obtient sa première forme canonique algébrique en complétant chaque produit par les variables qui lui manquent grâce à l'identité $X + \\bar{X} = 1$. Pour $A\\bar{B}$ (où il manque $C$), on multiplie par $(C + \\bar{C})$ ; pour $BC$ (où il manque $A$), on multiplie par $(A + \\bar{A})$. On développe ensuite et on supprime les doublons éventuels grâce à la loi d'idempotence ($m_i + m_i = m_i$). Pour la deuxième forme canonique, on complète chaque somme où il manque $Y$ en lui ajoutant le produit nul $Y\\cdot\\bar{Y} = 0$ puis en distribuant $S + Y\\bar{Y} = (S + Y)(S + \\bar{Y})$.",
            formula: {
              name: 'Règles d’expansion canonique (Shannon)',
              formula: 'P = P \\cdot (X + \\bar{X}) = P\\cdot X + P\\cdot\\bar{X} \\quad \\text{et} \\quad S = S + (Y\\cdot\\bar{Y}) = (S + Y)\\cdot(S + \\bar{Y})',
              note: 'Un terme produit à qui il manque k variables sur n génère exactement 2^k mintermes.',
            },
            keyRule:
              'Pour développer en mintermes : multiplier chaque terme incomplet par $(X + \\bar{X})$ pour chaque variable manquante, puis éliminer les mintermes en double.',
            konanTip:
              'Un terme réduit ne contenant qu’une seule variable sur 3 (ex. $A$) génère $2^2 = 4$ mintermes, mais deux termes peuvent partager un minterme commun : n’oublie jamais de dédoublonner avant de compter les mintermes !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p2_ex5',
              type: 'mcq',
              prompt:
                'Combien de mintermes comporte la première forme canonique de la fonction à 3 variables $F(A,B,C) = A\\cdot B + B\\cdot C$ et quelle est sa liste $\\sum m$ ?',
              options: [
                '$3$ mintermes : $\\sum m(3, 6, 7)$',
                '$4$ mintermes : $\\sum m(3, 5, 6, 7)$',
                '$2$ mintermes : $\\sum m(3, 6)$',
                '$4$ mintermes : $\\sum m(2, 3, 6, 7)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On complète : $AB = AB(C + \\bar{C}) = ABC + AB\\bar{C} = m_7 + m_6$. De même, $BC = (A + \\bar{A})BC = ABC + \\bar{A}BC = m_7 + m_3$. Par idempotence ($m_7 + m_7 = m_7$), on obtient $F = m_3 + m_6 + m_7 = \\sum m(3, 6, 7)$, soit $3$ mintermes.',
              hint: 'Développe $AB(C+\\bar{C}) + (A+\\bar{A})BC$ et attention au minterme $ABC$ ($m_7$) qui apparaît deux fois.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Synthèse d’un cahier des charges verbal en forme canonique',
            paragraphText:
              "Face à un problème concret d'automatisme ou de sécurité (alarmes, commande de vannes, détection de code), la démarche d'ingénieur suit toujours 4 étapes : 1) identifier clairement les variables d'entrée binaires et leur convention logique ($0/1$), 2) identifier la ou les variables de sortie, 3) dresser la table de vérité exhaustive à $2^n$ lignes en traduisant l'énoncé ligne par ligne, 4) extraire la première forme canonique $\\sum m$ (ou la seconde $\\prod M$ s'il y a moins de zéros que de uns) avant de passer à la simplification par Karnaugh.",
            formula: {
              name: 'Critère de choix de la forme canonique initiale',
              formula: '\\text{card}(I_1) \\le \\text{card}(I_0) \\implies \\text{privilégier SDP } (\\sum m_i), \\quad \\text{sinon PDS } (\\prod M_j)',
              note: 'Choisir la forme ayant le moins de termes minimise le nombre d’opérateurs logiques.',
            },
            keyRule:
              'Ne tente jamais d’écrire directement l’équation simplifiée à partir d’un texte complexe : passe par la table de vérité et la liste des mintermes $\\sum m$.',
            konanTip:
              'Pour un détecteur de nombres premiers sur 4 bits ($0$ à $15$), il suffit de lister les nombres premiers $\\{2, 3, 5, 7, 11, 13\\}$ : la fonction s’écrit immédiatement $F = \\sum m(2, 3, 5, 7, 11, 13)$ !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p2_ex6',
              type: 'mcq',
              prompt:
                'Un circuit logique reçoit un entier non signé $N$ sur 3 bits $(A,B,C)$ ($A$ étant le MSB) et délivre une sortie $S = 1$ si et seulement si $N$ est un multiple strictement positif de $3$. Quelle est l’écriture canonique de $S(A,B,C)$ ?',
              options: [
                '$S(A,B,C) = \\sum m(3, 6) = \\bar{A}BC + AB\\bar{C}$',
                '$S(A,B,C) = \\sum m(0, 3, 6) = \\bar{A}\\bar{B}\\bar{C} + \\bar{A}BC + AB\\bar{C}$',
                '$S(A,B,C) = \\sum m(3, 6, 9)$',
                '$S(A,B,C) = \\prod M(3, 6)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sur 3 bits, $N \\in \\{0, 1, 2, 3, 4, 5, 6, 7\\}$. Les multiples strictement positifs de $3$ dans cet intervalle sont uniquement $3$ ($011_2$) et $6$ ($110_2$). Donc $S = m_3 + m_6 = \\sum m(3, 6) = \\bar{A}BC + AB\\bar{C}$.',
              hint: 'Cherche les multiples de $3$ appartenant à $\\{1, 2, 3, 4, 5, 6, 7\\}$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_elecnum_ch2_p3',
        order: 3,
        title: 'Simplification graphique par tableaux de Karnaugh (3, 4 et 5 variables)',
        summary:
          'Topologie cyclique en code de Gray des tables de Karnaugh, règles de regroupement en puissances de 2, implicants premiers essentiels, états indifférents (X / Φ) et Karnaugh à 5 variables.',
        conceptExplanation:
          "La simplification algébrique devient fastidieuse et incertaine dès 3 ou 4 variables. Le tableau de Karnaugh (Maurice Karnaugh, 1953) exploite géométriquement l'adjacence du code de Gray ($A\\cdot B + A\\cdot\\bar{B} = A$) sur un tore replié pour identifier visuellement la forme minimale en Somme de Produits ou en Produit de Sommes.",
        keyRule:
          "Dans un tableau de Karnaugh à $n$ variables, un groupement rectangulaire valide de $2^k$ cases adjacentes (en incluant l'enroulement cyclique des bords et des 4 coins) élimine exactement $k$ variables (celles qui changent d'état dans le groupe) et laisse un terme produit de $n - k$ littéraux.",
        workedExample: {
          title: 'Simplification par tableau de Karnaugh à 4 variables avec états indifférents',
          statement:
            'Simplifier en SDP minimale la fonction $F(A,B,C,D) = \\sum m(0, 1, 2, 3, 8, 9) + \\sum \\Phi(10, 11)$ où $\\Phi$ désigne les états indifférents (don’t care).',
          methodSteps: [
            'Placement dans la table $4\\times 4$ (lignes $AB$, colonnes $CD$) : les $1$ occupent toute la ligne $AB=00$ ($m_0,m_1,m_2,m_3$) et le début de la ligne $AB=10$ ($m_8,m_9$).',
            'Les états indifférents $\\Phi$ occupent la fin de la ligne $AB=10$ ($m_{10},m_{11}$).',
            'En prenant $\\Phi(10) = 1$ et $\\Phi(11) = 1$, les deux lignes $AB=00$ et $AB=10$ (qui sont adjacentes par les bords haut/bas !) sont entièrement remplies de $1$.',
            'On forme un unique octuplet ($2^3 = 8$ cases) couvrant $m_0,m_1,m_2,m_3,m_8,m_9,m_{10},m_{11}$ : $C$ et $D$ varient complètement, $A$ varie de $0$ à $1$, seul $B = 0$ reste constant.',
          ],
          conclusion:
            'L’expression minimale se réduit à un seul littéral : $F(A,B,C,D) = \\bar{B}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Structure et adjacence cyclique (code de Gray) d’un tableau de Karnaugh',
            paragraphText:
              "Un tableau de Karnaugh à $n$ variables est une grille de $2^n$ cases représentant les $2^n$ mintermes de la table de vérité, mais dont les lignes et les colonnes sont ordonnées selon le code de Gray ($00, 01, 11, 10$) et non en binaire naturel. Grâce à cet ordonnancement, deux cases géométriquement voisines (horizontalement ou verticalement) ne diffèrent que d'une seule variable (adjacence logique). De plus, la grille possède une topologie torique (cylindre horizontal et vertical) : la première colonne ($00$) est adjacente à la dernière colonne ($10$), la première ligne ($00$) est adjacente à la dernière ligne ($10$), et les $4$ coins du tableau sont mutuellement adjacents.",
            formula: {
              name: 'Principe d’adjacence logique de deux cases voisines',
              formula: 'P \\cdot X + P \\cdot \\bar{X} = P \\cdot (X + \\bar{X}) = P',
              note: 'Ordre obligatoire des 4 lignes ou colonnes : 00 → 01 → 11 → 10 (inversion des deux dernières colonnes/lignes).',
            },
            keyRule:
              'L’ordre des en-têtes d’un tableau de Karnaugh est TOUJOURS en code de Gray : $00,\\; 01,\\; 11,\\; 10$. Oublier d’inverser $10$ et $11$ fausse toute la simplification !',
            konanTip:
              'Pense toujours à vérifier si les cases à $1$ situées aux $4$ coins du tableau ($m_0, m_2, m_8, m_{10}$) peuvent former un quadruplet en se rejoignant par l’extérieur du cadre.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p3_ex1',
              type: 'mcq',
              prompt:
                'Dans un tableau de Karnaugh à 4 variables $F(A,B,C,D)$ ($AB$ en lignes, $CD$ en colonnes), quelles sont les $4$ cases adjacentes à la case du coin supérieur gauche $m_0$ ($AB=00, CD=00$) ?',
              options: [
                '$m_1 (0001)$, $m_2 (0010)$, $m_4 (0100)$ et $m_8 (1000)$',
                '$m_1 (0001)$, $m_3 (0011)$, $m_4 (0100)$ et $m_{12} (1100)$',
                '$m_1 (0001)$, $m_2 (0010)$, $m_5 (0101)$ et $m_{10} (1010)$',
                'Uniquement $m_1 (0001)$ et $m_4 (0100)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les cases adjacentes à $0000_2$ ($m_0$) sont celles qui diffèrent d’exactement un bit : à droite $0001_2$ ($m_1$), par enroulement à gauche $0010_2$ ($m_2$, dernière colonne $CD=10$), en bas $0100_2$ ($m_4$), et par enroulement en haut $1000_2$ ($m_8$, dernière ligne $AB=10$).',
              hint: 'Une case est adjacente à $0000_2$ si et seulement si son code binaire sur 4 bits contient un seul bit à $1$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Règles de regroupement en puissances de 2 et réduction des variables',
            paragraphText:
              "Pour obtenir une Somme de Produits (SDP) minimale, on regroupe tous les $1$ du tableau de Karnaugh en rectangles (ou carrés) dont le nombre de cases est obligatoirement une puissance de $2$ : $1, 2, 4, 8, 16\\dots$ (jamais $3, 5, 6$ ou en diagonale !). Chaque groupe doit être le plus grand possible (implicant premier) afin d'éliminer le maximum de variables, et on doit couvrir tous les $1$ avec le plus petit nombre possible de groupes. Un même $1$ peut appartenir à plusieurs groupes si cela permet d'agrandir ces groupes (idempotence $X + X = X$). Pour lire l'équation d'un groupe, on ne conserve que les variables dont l'état ($0$ ou $1$) demeure constant sur toutes les cases du groupe.",
            formula: {
              name: 'Nombre de littéraux restants dans un groupement de 2^k cases',
              formula: 'N_{\\text{littéraux}} = n - k \\quad \\text{pour un groupement de } 2^k \\text{ cases dans une table à } n \\text{ variables}',
              note: 'Pour n = 4 variables : 1 case → 4 littéraux ; doublet (2) → 3 littéraux ; quadruplet (4) → 2 littéraux ; octuplet (8) → 1 littéral ; 16 cases → F = 1.',
            },
            keyRule:
              'Dans une table à $n$ variables, un groupe de $2^k$ cases élimine $k$ variables et donne un produit de $n - k$ variables.',
            konanTip:
              'Ne crée jamais un groupe dont TOUS les $1$ sont déjà couverts par d’autres groupes : ce groupe serait un terme de consensus redondant !',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Tailles des groupements de Karnaugh (Table à 4 variables, n = 4)',
              caption: 'Plus le groupement contient une grande puissance de 2 de cases, plus le terme produit obtenu est court.',
              matrix2x2: {
                topAxis: ['Petits groupes (k = 0, 1)', 'Grands groupes (k = 2, 3)'],
                leftAxis: ['Puissance impaire de 2', 'Puissance paire de 2'],
                topLeft: {
                  title: 'Doublet : 2¹ = 2 cases (k = 1)',
                  items: [
                    'Élimine 1 variable qui change',
                    'Produit de 4 − 1 = 3 littéraux',
                  ],
                  color: 'blue',
                },
                topRight: {
                  title: 'Octuplet : 2³ = 8 cases (k = 3)',
                  items: [
                    'Élimine 3 variables qui changent',
                    'Produit de 4 − 3 = 1 seul littéral',
                  ],
                  color: 'green',
                },
                bottomLeft: {
                  title: 'Case isolée : 2⁰ = 1 case (k = 0)',
                  items: [
                    'Élimine 0 variable',
                    'Minterme complet de 4 littéraux',
                  ],
                  color: 'orange',
                },
                bottomRight: {
                  title: 'Quadruplet : 2² = 4 cases (k = 2)',
                  items: [
                    'Carré 2×2 ou ligne/colonne 1×4',
                    'Élimine 2 variables → 2 littéraux',
                  ],
                  color: 'violet',
                },
              },
            },
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p3_ex2',
              type: 'mcq',
              prompt:
                'Dans un tableau de Karnaugh à $4$ variables $F(A,B,C,D)$, quel terme produit obtient-on en regroupant les $4$ cases situées aux quatre coins du tableau ($m_0, m_2, m_8, m_{10}$) ?',
              options: [
                '$\\bar{B} \\cdot \\bar{D}$',
                '$\\bar{A} \\cdot \\bar{C}$',
                '$B \\cdot D$',
                '$\\bar{A} \\cdot \\bar{B} \\cdot \\bar{D}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les quatre coins correspondent aux codes binaires $(ABCD)$ : $m_0 = 0000$, $m_2 = 0010$, $m_8 = 1000$, $m_{10} = 1010$. Sur ces 4 cases, $A$ change ($0/1$) et $C$ change ($0/1$), tandis que $B = 0$ et $D = 0$ restent constants. Le quadruplet ($n-k = 4-2 = 2$ littéraux) donne donc $\\bar{B} \\cdot \\bar{D}$.',
              hint: 'Écris en binaire $0, 2, 8, 10$ sur 4 bits ($0000, 0010, 1000, 1010$) et repère les deux bits qui restent invariants.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Implicants premiers essentiels et algorithme de couverture minimale',
            paragraphText:
              "Un implicant premier est un groupement rectangulaire de $2^k$ cases qui ne peut être inclus dans aucun groupement plus grand de $2^{k+1}$ cases. Un implicant premier est dit ESSENTIEL s'il couvre au moins un $1$ qu'aucun autre implicant premier ne peut couvrir. La méthode infaillible pour ne jamais inclure de terme redondant consiste à parcourir les $1$ du tableau en commençant par les plus isolés : pour chaque $1$ qui ne possède qu'une seule façon maximale d'être groupé, on trace son implicant premier essentiel. On ne complète ensuite que s'il reste des $1$ non encore couverts.",
            formula: {
              name: 'Décomposition minimale en Somme d’Implicants Premiers',
              formula: 'F_{\\min} = \\sum (\\text{Implicants Premiers Essentiels}) + \\sum (\\text{Implicants complémentaires nécessaires})',
              note: 'Tout implicant premier essentiel fait obligatoirement partie de la solution minimale.',
            },
            keyRule:
              'Commence toujours par entourer les $1$ qui n’ont qu’un seul plus grand groupement possible (implicants premiers essentiels) avant de traiter les $1$ situés aux carrefours.',
            konanTip:
              'Si tu entoures d’abord un doublet central alors que ses deux $1$ appartiennent chacun à un quadruplet voisin, tu vas obtenir 3 termes au lieu de 2 !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p3_ex3',
              type: 'mcq',
              prompt:
                'Quelle est l’expression minimale en Somme de Produits de la fonction à 3 variables $F(A,B,C) = \\sum m(0, 1, 2, 5, 7)$ ?',
              options: [
                '$\\bar{A}\\bar{B} + \\bar{A}\\bar{C} + AC$',
                '$\\bar{A}\\bar{B} + \\bar{B}C + AC$',
                '$\\bar{A}\\bar{B} + \\bar{A}\\bar{C} + \\bar{B}C + AC$',
                '$\\bar{A} + AC$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Mintermes en binaire : $m_0(000), m_1(001), m_2(010), m_5(101), m_7(111)$. Le minterme $m_2(010)$ ne peut se grouper qu’avec $m_0(000)$ $\\implies \\bar{A}\\bar{C}$ (essentiel). Le minterme $m_7(111)$ ne peut se grouper qu’avec $m_5(101)$ $\\implies AC$ (essentiel). Il reste uniquement $m_1(001)$ non couvert : on peut le grouper soit avec $m_0(000)$ ($\\bar{A}\\bar{B}$), soit avec $m_5(101)$ ($\\bar{B}C$). Donc $\\bar{A}\\bar{B} + \\bar{A}\\bar{C} + AC$ (ou $\\bar{A}\\bar{C} + \\bar{B}C + AC$) à 3 termes de 2 littéraux est minimale, tandis que la somme des 4 termes contient un terme redondant.',
              hint: 'Regarde comment couvrir $m_2(010)$ et $m_7(111)$ en priorité, puis couvre $m_1(001)$ avec un seul doublet.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Traitement des états indifférents / interdits (Φ, X ou d)',
            paragraphText:
              "Dans de nombreux systèmes numériques (par exemple un transcodeur recevant du BCD 8421 où les combinaisons $10$ à $15$ ne se produisent jamais en entrée, ou une sortie dont la valeur n'a pas d'importance dans un état donné), certaines lignes de la table de vérité ont une sortie indéterminée ou indifférente (don't care), notée $\\Phi$, $X$ ou $d$. Dans le tableau de Karnaugh, chaque case $\\Phi$ joue le rôle d'un joker : on choisit de lui attribuer la valeur $1$ uniquement si cela permet d'agrandir un groupement de $1$ existant (passer d'un doublet à un quadruplet ou un octuplet), et on lui attribue la valeur $0$ dans le cas contraire.",
            formula: {
              name: 'Spécification incomplète avec états indifférents',
              formula: 'F(X_{n-1},\\dots,X_0) = \\sum m(I_1) + \\sum \\Phi(I_\\Phi) \\quad \\text{avec } I_1 \\cap I_\\Phi = \\emptyset',
              note: 'Il est strictement interdit de former un groupement composé uniquement de cases Φ !',
            },
            keyRule:
              'On n’utilise un état indifférent $\\Phi$ que s’il permet de doubler la taille d’un groupe contenant au moins un vrai $1$. On ne cherche jamais à couvrir les $\\Phi$ restants.',
            konanTip:
              'Un $\\Phi$ n’est pas une obligation de couverture : une fois que tous les vrais $1$ sont couverts par des groupes maximaux, ignore complètement tous les $\\Phi$ qui restent seuls.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p3_ex4',
              type: 'mcq',
              prompt:
                'Quelle est l’expression minimale en SDP de la fonction à 3 variables $F(A,B,C) = \\sum m(1, 3) + \\sum \\Phi(0, 2, 6)$ ?',
              options: [
                '$\\bar{A}$',
                '$\\bar{A} \\cdot C$',
                '$\\bar{A} + B\\bar{C}$',
                '$C$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les vrais $1$ sont $m_1(001)$ et $m_3(011)$. En prenant $\\Phi(0) = 1$ ($000$) et $\\Phi(2) = 1$ ($010$), on forme un quadruplet $(m_0, m_1, m_2, m_3)$ où $A=0$ est la seule variable constante, ce qui donne $F = \\bar{A}$. L’état indifférent $\\Phi(6)$ ($110$) est laissé à $0$ car tous les vrais $1$ sont déjà couverts.',
              hint: 'Regarde ce que forment $m_1(001)$ et $m_3(011)$ lorsqu’on leur adjoint les jokers $\\Phi(0)(000)$ et $\\Phi(2)(010)$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Simplification en Produit de Sommes (PDS) par regroupement des 0',
            paragraphText:
              "Le tableau de Karnaugh permet également d'obtenir directement la forme minimale en Produit de Sommes (PDS / POS, dérivée de la 2ème forme canonique) en regroupant les $0$ du tableau au lieu des $1$ (en s'aidant éventuellement des $\\Phi$ mis à $0$). Deux méthodes équivalentes existent : 1) regrouper les $0$ en SDP pour écrire l'expression minimale de $\\bar{F}$, puis appliquer le théorème de De Morgan pour obtenir $F$ en Produit de Sommes ; 2) lire directement chaque groupe de $0$ comme un facteur somme (maxterme réduit) en utilisant la convention inversée ($0 \\to X$ et $1 \\to \\bar{X}$).",
            formula: {
              name: 'Obtention de la forme minimale PDS par De Morgan sur F̄',
              formula: '\\bar{F}_{\\min,\\text{SDP}} = \\sum_{r} P_r \\;\\text{ (groupes de } 0\\text{)} \\implies F_{\\min,\\text{PDS}} = \\overline{\\bar{F}_{\\min,\\text{SDP}}} = \\prod_{r} \\overline{P_r}',
              note: 'La méthode par F̄ puis De Morgan évite toute confusion entre les conventions de lecture des 1 et des 0.',
            },
            keyRule:
              'Pour trouver la forme minimale en Produit de Sommes (PDS), regroupe les $0$ pour écrire $\\bar{F}$ en Somme de Produits, puis applique De Morgan : $F = \\overline{\\bar{F}}$.',
            konanTip:
              'Utilise toujours l’étape intermédiaire $\\bar{F} = \\dots$ avant de complémenter par De Morgan : tu gardes ainsi la même règle de lecture ($1 \\to X, 0 \\to \\bar{X}$) tout le temps !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p3_ex5',
              type: 'mcq',
              prompt:
                'Dans un tableau de Karnaugh à 3 variables $F(A,B,C)$, les $0$ de la fonction occupent uniquement les cases $m_0(000)$, $m_1(001)$ et $m_5(101)$ (toutes les autres cases valent $1$). Quelle est la forme minimale de $F$ en Produit de Sommes (PDS) ?',
              options: [
                '$(A + B) \\cdot (B + \\bar{C})$',
                '$(\\bar{A} + \\bar{B}) \\cdot (\\bar{B} + C)$',
                '$\\bar{A}\\bar{B} + \\bar{B}C$',
                '$(A + B) + (B + \\bar{C})$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En regroupant les $0$ ($m_0, m_1, m_5$) pour exprimer $\\bar{F}$ en SDP : le doublet $(m_0, m_1) = (000, 001)$ donne $\\bar{A}\\bar{B}$, et le doublet $(m_1, m_5) = (001, 101)$ donne $\\bar{B}C$. Ainsi $\\bar{F} = \\bar{A}\\bar{B} + \\bar{B}C$. Par De Morgan : $F = \\overline{\\bar{A}\\bar{B} + \\bar{B}C} = (A + B) \\cdot (B + \\bar{C})$.',
              hint: 'Écris d’abord $\\bar{F}$ en regroupant les zéros $m_0(000), m_1(001)$ et $m_5(101)$, puis applique De Morgan.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Tableau de Karnaugh à 5 variables (superposition 3D de deux tables 4×4)',
            paragraphText:
              "Pour une fonction de $5$ variables $F(A,B,C,D,E)$ ($2^5 = 32$ cases), on utilise deux tableaux de Karnaugh $4 \\times 4$ en $(B,C,D,E)$ placés côte à côte : le premier correspond au sous-espace $A = 0$ (mintermes $m_0$ à $m_{15}$) et le second au sous-espace $A = 1$ (mintermes $m_{16}$ à $m_{31}$). En plus des adjacences habituelles à l'intérieur de chaque tableau $4\\times 4$, toute case du tableau $A=0$ est adjacente par superposition 3D à la case occupant exactement la même position $(B,C,D,E)$ dans le tableau $A=1$ (elles ne diffèrent que de la variable $A$). Si un groupement identique existe au même endroit dans les deux tables, la variable $A$ s'élimine.",
            formula: {
              name: 'Adjacence inter-plans dans un Karnaugh à 5 variables',
              formula: 'm_i \\text{ (table } A=0\\text{)} \\;\\text{ est adjacent à }\\; m_{i+16} \\text{ (table } A=1\\text{)} \\implies \\bar{A}\\cdot P + A\\cdot P = P',
              note: 'Un quadruplet dans A=0 superposé au même quadruplet dans A=1 forme un octuplet 3D qui élimine A plus 2 autres variables.',
            },
            keyRule:
              'Dans un Karnaugh à 5 variables, deux groupements situés aux mêmes coordonnées $(B,C,D,E)$ dans le plan $A=0$ et dans le plan $A=1$ fusionnent en éliminant la variable $A$.',
            konanTip:
              'Cherche d’abord les motifs de $1$ qui se superposent exactement entre la grille $A=0$ et la grille $A=1$ avant de grouper les $1$ restants dans chaque grille séparément.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch2_p3_ex6',
              type: 'mcq',
              prompt:
                'Soit une fonction à 5 variables $F(A,B,C,D,E) = \\sum m(0, 1, 16, 17)$ où $A$ est le MSB ($2^4=16$) et $E$ le LSB ($2^0=1$). Quel est le terme produit unique obtenu par simplification dans un Karnaugh à 5 variables ?',
              options: [
                '$\\bar{B} \\cdot \\bar{C} \\cdot \\bar{D}$',
                '$\\bar{A} \\cdot \\bar{B} \\cdot \\bar{C} \\cdot \\bar{D}$',
                '$\\bar{B} \\cdot \\bar{C} \\cdot \\bar{E}$',
                '$\\bar{A} \\cdot \\bar{C} \\cdot \\bar{D}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans le plan $A=0$, les mintermes $m_0(00000)$ et $m_1(00001)$ forment le doublet $\\bar{A}\\bar{B}\\bar{C}\\bar{D}$ ($E$ change). Dans le plan $A=1$, $m_{16}(10000)$ et $m_{17}(10001)$ occupent exactement les mêmes positions et forment le doublet $A\\bar{B}\\bar{C}\\bar{D}$. Par superposition 3D, les deux doublets forment un quadruplet qui élimine $A$, donnant $\\bar{B}\\bar{C}\\bar{D}$ ($5 - 2 = 3$ littéraux).',
              hint: 'Remarque que $16 = 0 + 16$ et $17 = 1 + 16$ : les cases $(0,1)$ du plan $A=0$ se superposent aux cases $(16,17)$ du plan $A=1$.',
            },
          },
        ],
      }),
    ],
  },

  // ============================================================================
  // CHAPITRE 3 : CIRCUITS LOGIQUES COMBINATOIRES ET SÉQUENTIELS (16h)
  // ============================================================================
  {
    id: 'lmd_srit_l1_elecnum_ch3',
    subjectId: 'lmd_electronique_numerique',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 3,
    officialVolumeHours: 16,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT, Semestre 2 (ECUE 1PHY3201 : Électronique Numérique)',
    title: 'Circuits Logiques Combinatoires et Séquentiels',
    summary:
      'Demi-additionneur, additionneur complet, additionneur/soustracteur n bits, comparateur, décodeur, encodeur de priorité, MUX/DEMUX, synthèse par MUX, verrous et bascules synchrones (RS, D, JK, T), registres à décalage et synthèse de compteurs asynchrones et synchrones modulo N.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elecnum_ch3_p1',
        order: 1,
        title: 'Circuits arithmétiques et opérateurs combinatoires intégrés',
        summary:
          'Half-Adder, Full-Adder, additionneur/soustracteur parallèle n bits, comparateur, décodeur n → 2^n, encodeur de priorité, multiplexeur (MUX), démultiplexeur (DEMUX) et synthèse de fonctions par MUX.',
        conceptExplanation:
          "Un circuit est dit combinatoire lorsque l'état de ses sorties à un instant donné ne dépend que de la combinaison de ses entrées au même instant (absence de mémoire et de boucle de rétroaction). Ce point couvre tous les blocs fonctionnels MSI (Medium Scale Integration) qui composent le chemin de données d'un processeur.",
        keyRule:
          "Un additionneur complet 1 bit (Full-Adder) calcule la somme $S = A \\oplus B \\oplus C_{\\text{in}}$ et la retenue sortante $C_{\\text{out}} = A\\cdot B + C_{\\text{in}}\\cdot(A \\oplus B)$ ; un multiplexeur $2^n \\to 1$ permet quant à lui de synthétiser toute fonction booléenne de $n$ ou $n+1$ variables.",
        workedExample: {
          title: 'Synthèse d’une fonction logique de 3 variables à l’aide d’un Multiplexeur 4 → 1',
          statement:
            'Réaliser la fonction $F(A,B,C) = \\sum m(1, 2, 6, 7)$ à l’aide d’un multiplexeur $4 \\to 1$ dont les entrées de sélection sont $S_1 = A$ et $S_0 = B$, en exprimant les 4 entrées de données $E_0, E_1, E_2, E_3$ en fonction de $C$, $\\bar{C}$, $0$ ou $1$.',
          methodSteps: [
            'Pour $AB = 00$ ($E_0$, lignes $m_0$ et $m_1$) : $F(0,0,0) = 0$ et $F(0,0,1) = 1$, donc $E_0 = C$.',
            'Pour $AB = 01$ ($E_1$, lignes $m_2$ et $m_3$) : $F(0,1,0) = 1$ et $F(0,1,1) = 0$, donc $E_1 = \\bar{C}$.',
            'Pour $AB = 10$ ($E_2$, lignes $m_4$ et $m_5$) : $F(1,0,0) = 0$ et $F(1,0,1) = 0$, donc $E_2 = 0$.',
            'Pour $AB = 11$ ($E_3$, lignes $m_6$ et $m_7$) : $F(1,1,0) = 1$ et $F(1,1,1) = 1$, donc $E_3 = 1$.',
          ],
          conclusion:
            'Le MUX $4 \\to 1$ commandé par $(A,B)$ réalise $F(A,B,C)$ en câblant $(E_0, E_1, E_2, E_3) = (C,\\; \\bar{C},\\; 0,\\; 1)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Demi-additionneur (Half-Adder) et Additionneur complet (Full-Adder)',
            paragraphText:
              "Le demi-additionneur (Half-Adder, HA) additionne deux bits $A$ et $B$ sans tenir compte d'une retenue antérieure : il fournit un bit de somme $S = A \\oplus B$ et une retenue sortante $C_{\\text{out}} = A \\cdot B$. Pour additionner deux nombres de plusieurs bits, chaque étage de rang $i$ doit aussi additionner la retenue entrante $C_{\\text{in}}$ issue du rang $i-1$ : c'est le rôle de l'additionneur complet 1 bit (Full-Adder, FA), qui possède 3 entrées ($A, B, C_{\\text{in}}$) et 2 sorties ($S, C_{\\text{out}}$). Structurellement, un additionneur complet se réalise en associant deux demi-additionneurs et une porte OU à 2 entrées.",
            formula: {
              name: 'Équations logiques de l’additionneur complet 1 bit (Full-Adder)',
              formula: 'S = A \\oplus B \\oplus C_{\\text{in}} \\quad \\text{et} \\quad C_{\\text{out}} = A\\cdot B + B\\cdot C_{\\text{in}} + A\\cdot C_{\\text{in}} = A\\cdot B + C_{\\text{in}}\\cdot(A \\oplus B)',
              note: 'La forme factorisée C_out = A·B + C_in·(A ⊕ B) permet de réutiliser les sorties A·B et A ⊕ B du premier demi-additionneur.',
            },
            keyRule:
              'Un Full-Adder est constitué de $2$ Half-Adders et $1$ porte OU : $\\text{HA}_1(A,B)$ calcule $S_1 = A\\oplus B$ et $C_1 = A\\cdot B$, puis $\\text{HA}_2(S_1, C_{\\text{in}})$ calcule $S = S_1 \\oplus C_{\\text{in}}$ et $C_2 = S_1 \\cdot C_{\\text{in}}$, enfin $C_{\\text{out}} = C_1 + C_2$.',
            konanTip:
              'Dans la table de vérité du Full-Adder, $S = 1$ quand un nombre impair d’entrées vaut $1$ ($1$ ou $3$ entrées à $1$), et $C_{\\text{out}} = 1$ quand au moins deux entrées valent $1$ (fonction majoritaire).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p1_ex1',
              type: 'mcq',
              prompt:
                'De quels blocs élémentaires a-t-on besoin pour construire un additionneur complet 1 bit (Full-Adder) à partir de demi-additionneurs (Half-Adders) ?',
              options: [
                '$2$ demi-additionneurs et $1$ porte OU à 2 entrées',
                '$2$ demi-additionneurs et $1$ porte ET à 2 entrées',
                '$3$ demi-additionneurs sans porte supplémentaire',
                '$2$ demi-additionneurs et $1$ porte XOR à 2 entrées',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le premier demi-additionneur calcule $S_1 = A \\oplus B$ et $C_1 = A \\cdot B$. Le second additionne $S_1$ et $C_{\\text{in}}$ pour donner $S = A \\oplus B \\oplus C_{\\text{in}}$ et $C_2 = C_{\\text{in}}(A \\oplus B)$. Une porte OU combine enfin $C_1$ et $C_2$ : $C_{\\text{out}} = A\\cdot B + C_{\\text{in}}(A \\oplus B)$.',
              hint: 'Regarde l’expression factorisée $C_{\\text{out}} = (A\\cdot B) + C_{\\text{in}}\\cdot(A \\oplus B)$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Additionneur/Soustracteur parallèle n bits et Comparateur',
            paragraphText:
              "En cascadant $n$ additionneurs complets (chaque $C_{\\text{out},i}$ étant relié à $C_{\\text{in},i+1}$), on obtient un additionneur parallèle à propagation de retenue (Ripple-Carry Adder). Pour le transformer en additionneur/soustracteur commandé par un signal de mode $M$ ($M=0$ pour $A+B$, $M=1$ pour $A-B$ en Complément à 2), on place une porte XOR sur chaque bit $B_i$ ($B'_i = B_i \\oplus M$) et on relie la retenue entrante du premier étage à $C_{\\text{in},0} = M$. Par ailleurs, un comparateur binaire $n$ bits compare deux mots $A$ et $B$ et active l'une des trois sorties $A > B$, $A < B$ ou $A = B$, où l'égalité globale s'écrit $(A = B) = \\prod_{i=0}^{n-1} (A_i \\odot B_i)$.",
            formula: {
              name: 'Équation de l’additionneur/soustracteur commandé par M ∈ {0, 1}',
              formula: 'S = A + (B \\oplus M) + M = \\begin{cases} A + B & \\text{si } M = 0 \\\\ A + \\overline{B} + 1 = A - B & \\text{si } M = 1 \\end{cases}',
              note: 'Pour un comparateur 1 bit : (A = B) = A ⊙ B, (A > B) = A · B̄, (A < B) = Ā · B.',
            },
            keyRule:
              'Un additionneur $n$ bits devient un additionneur/soustracteur en ajoutant $n$ portes XOR sur le bus $B$ commandées par $M$ et en injectant $C_{\\text{in},0} = M$.',
            konanTip:
              'Dans un additionneur à propagation de retenue (Ripple-Carry) de $n$ bits, le temps de calcul total est limité par le temps de traversée de la retenue à travers les $n$ étages ($n \\cdot t_{p,\\text{carry}}$).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p1_ex2',
              type: 'mcq',
              prompt:
                'Quelle est l’équation logique des trois sorties $(E, G, L)$ d’un comparateur élémentaire 1 bit comparant deux bits $A$ et $B$ (où $E$ indique $A=B$, $G$ indique $A>B$ et $L$ indique $A<B$) ?',
              options: [
                '$E = \\overline{A \\oplus B}$, $G = A \\cdot \\bar{B}$ et $L = \\bar{A} \\cdot B$',
                '$E = A \\oplus B$, $G = A \\cdot \\bar{B}$ et $L = \\bar{A} \\cdot B$',
                '$E = A \\cdot B$, $G = A + \\bar{B}$ et $L = \\bar{A} + B$',
                '$E = \\overline{A \\oplus B}$, $G = \\bar{A} \\cdot B$ et $L = A \\cdot \\bar{B}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sur 1 bit : $A = B$ est la fonction coïncidence (XNOR) $E = A \\odot B = \\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$. On a $A > B$ uniquement pour $(A=1, B=0)$, soit $G = A\\cdot\\bar{B}$. On a $A < B$ uniquement pour $(A=0, B=1)$, soit $L = \\bar{A}\\cdot B$.',
              hint: 'Pour deux bits $A$ et $B$, dans quel unique cas a-t-on $A > B$ ?',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Décodeur n → 2^n et Encodeur de priorité 2^n → n',
            paragraphText:
              "Un décodeur binaire $n \\to 2^n$ possède $n$ entrées d'adresse et $2^n$ sorties ($Y_0$ à $Y_{2^n-1}$). Pour chaque code binaire appliqué en entrée (si l'entrée de validation Enable est active), une seule sortie $Y_i$ est activée : chaque sortie $Y_i$ réalise donc matériellement le minterme $m_i$ des $n$ entrées ! Dès lors, un décodeur $n \\to 2^n$ suivi d'une porte OU reliant les sorties $Y_i$ voulues permet de réaliser n'importe quelle fonction logique $F = \\sum m_i$. Inversement, un encodeur $2^n \\to n$ fournit en sortie le code binaire sur $n$ bits du numéro de l'entrée active ; un encodeur DE PRIORITÉ résout le conflit où plusieurs entrées sont actives simultanément en codant uniquement l'indice de l'entrée active de plus haute priorité (généralement l'indice le plus élevé).",
            formula: {
              name: 'Équation des sorties d’un décodeur n → 2^n avec validation E',
              formula: 'Y_i = E \\cdot m_i(A_{n-1}, \\dots, A_0) \\quad (0 \\le i \\le 2^n - 1)',
              note: 'Un décodeur BCD → 7 segments est un transcodeur spécialisé à 4 entrées et 7 sorties (a, b, c, d, e, f, g).',
            },
            keyRule:
              'Un décodeur $n \\to 2^n$ est un générateur physique de tous les mintermes $m_0$ à $m_{2^n-1}$ : il suffit d’une porte OU en sortie pour câbler toute fonction $F = \\sum m_i$.',
            konanTip:
              'Si les sorties du décodeur sont actives à l’état BAS ($\\overline{Y_i} = \\overline{m_i} = M_i$, comme sur le circuit TTL 74LS138), on remplace la porte OU externe par une porte NAND (car $\\overline{\\overline{m_a}\\cdot\\overline{m_b}} = m_a + m_b$).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p1_ex3',
              type: 'mcq',
              prompt:
                'Sur un encodeur de priorité $8 \\to 3$ (entrées $I_0$ à $I_7$ actives à $1$, où $I_7$ a la priorité la plus élevée et $I_0$ la plus faible), quelle est la sortie binaire $(A_2 A_1 A_0)_2$ lorsque les entrées $I_1 = 1$, $I_4 = 1$ et $I_6 = 1$ sont actives simultanément (toutes les autres étant à $0$) ?',
              options: [
                '$110_2$ (code de l’entrée $I_6$)',
                '$100_2$ (code de l’entrée $I_4$)',
                '$001_2$ (code de l’entrée $I_1$)',
                '$111_2$ (OU logique des indices)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans un encodeur de priorité où l’indice le plus grand est prioritaire, l’entrée active de plus fort indice parmi $\\{I_1, I_4, I_6\\}$ est $I_6$, quelle que soit la valeur des entrées d’indice inférieur $I_0 \\dots I_5$. La sortie délivre donc le code binaire de $6_{10}$, soit $(A_2 A_1 A_0) = 110_2$.',
              hint: 'Identifie l’entrée active ayant l’indice le plus élevé et convertis cet indice en binaire sur 3 bits.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Multiplexeur (MUX 2^n → 1) et Démultiplexeur (DEMUX 1 → 2^n)',
            paragraphText:
              "Un multiplexeur (MUX) $2^n \\to 1$ est un aiguilleur numérique (commutateur rotatif commandé) qui sélectionne l'une de ses $2^n$ entrées de données ($E_0, E_1, \\dots, E_{2^n-1}$) pour la transmettre sur son unique sortie $S$, en fonction du code binaire appliqué sur ses $n$ entrées d'adresse/sélection ($A_{n-1}\\dots A_0$). Inversement, un démultiplexeur (DEMUX) $1 \\to 2^n$ aiguille une entrée de donnée unique $D$ vers l'une de ses $2^n$ sorties ($Y_i = D \\cdot m_i$) désignée par les $n$ bits d'adresse. Un décodeur $n \\to 2^n$ muni d'une entrée de validation Enable $E$ fonctionne exactement comme un DEMUX $1 \\to 2^n$ si l'on applique la donnée $D$ sur l'entrée Enable $E$.",
            formula: {
              name: 'Équation caractéristique d’un Multiplexeur 2^n → 1',
              formula: 'S = \\sum_{i=0}^{2^n - 1} E_i \\cdot m_i(A_{n-1}, \\dots, A_0)',
              note: 'Pour un MUX 4 → 1 d’adresses (A₁, A₀) : S = E₀·Ā₁Ā₀ + E₁·Ā₁A₀ + E₂·A₁Ā₀ + E₃·A₁A₀.',
            },
            keyRule:
              'Un MUX $2^n \\to 1$ possède $2^n$ entrées de données, $n$ entrées de sélection et $1$ sortie. Un DEMUX $1 \\to 2^n$ possède $1$ entrée de donnée, $n$ entrées de sélection et $2^n$ sorties.',
            konanTip:
              'Pour construire un grand MUX $16 \\to 1$ à partir de petits MUX $4 \\to 1$, il faut un premier étage de $4$ MUX $4 \\to 1$ suivi d’un second étage de $1$ MUX $4 \\to 1$, soit $4 + 1 = 5$ MUX $4 \\to 1$ au total.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p1_ex4',
              type: 'mcq',
              prompt:
                'Combien d’entrées de sélection possède un multiplexeur $32 \\to 1$, et combien de multiplexeurs $2 \\to 1$ sont nécessaires pour construire un arbre multiplexeur $8 \\to 1$ ?',
              options: [
                '$5$ entrées de sélection, et $7$ multiplexeurs $2 \\to 1$',
                '$5$ entrées de sélection, et $8$ multiplexeurs $2 \\to 1$',
                '$4$ entrées de sélection, et $7$ multiplexeurs $2 \\to 1$',
                '$6$ entrées de sélection, et $4$ multiplexeurs $2 \\to 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour un MUX $32 \\to 1$, $2^n = 32 \\implies n = 5$ entrées de sélection. Pour réaliser un MUX $8 \\to 1$ avec des MUX $2 \\to 1$ en arbre binaire : $4$ MUX au premier niveau (8 $\\to$ 4), $2$ MUX au deuxième niveau (4 $\\to$ 2) et $1$ MUX au dernier niveau (2 $\\to$ 1), soit $4 + 2 + 1 = 7$ MUX $2 \\to 1$.',
              hint: 'Résous $2^n = 32$, puis additionne les étages d’un arbre binaire $4 + 2 + 1$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Synthèse universelle d’une fonction logique de n+1 variables par un MUX 2^n → 1',
            paragraphText:
              "Un multiplexeur $2^n \\to 1$ est un générateur universel de fonctions logiques :1) il réalise directement toute fonction de $n$ variables en reliant les $n$ variables aux entrées d'adresse et en câblant chaque entrée $E_i$ à la constante $0$ ou $1$ figurant à la ligne $i$ de la table de vérité ; 2) plus économique encore, un MUX $2^n \\to 1$ permet de réaliser toute fonction de $n + 1$ variables ! Pour cela, on applique les $n$ premières variables sur les entrées de sélection du MUX, ce qui découpe la table de vérité en $2^n$ paires de lignes. Sur chaque paire $i$, la sortie $F$ s'exprime uniquement en fonction de la dernière variable $X_0$ parmi les quatre cas possibles : $E_i \\in \\{0,\\; 1,\\; X_0,\\; \\overline{X_0}\\}$.",
            formula: {
              name: 'Décomposition de Shannon d’une fonction de n+1 variables sur un MUX 2^n → 1',
              formula: 'F(X_n,\\dots,X_1,X_0) = \\sum_{i=0}^{2^n-1} m_i(X_n,\\dots,X_1) \\cdot E_i(X_0) \\quad \\text{avec } E_i(X_0) \\in \\{0,\\, 1,\\, X_0,\\, \\overline{X_0}\\}',
              note: 'Un MUX 8 → 1 (3 bits d’adresse) suffit donc pour câbler n’importe quelle fonction logique à 4 variables.',
            },
            keyRule:
              'Pour synthétiser une fonction de $N$ variables avec un minimum de matériel, on utilise un MUX $2^{N-1} \\to 1$ commandé par $N-1$ variables, et on injecte $\{0, 1, X, \\bar{X}\}$ sur ses entrées de données.',
            konanTip:
              'Sur chaque paire de lignes correspondant à l’adresse $i$ ($X_0=0$ puis $X_0=1$) : si $F=(0,0) \\implies E_i=0$ ; si $F=(1,1) \\implies E_i=1$ ; si $F=(0,1) \\implies E_i=X_0$ ; si $F=(1,0) \\implies E_i=\\overline{X_0}$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p1_ex5',
              type: 'mcq',
              prompt:
                'On réalise la fonction $F(A,B,C) = \\sum m(0, 3, 5, 6)$ avec un MUX $4 \\to 1$ dont les entrées de sélection sont $(S_1, S_0) = (A, B)$. Quelles valeurs doit-on appliquer sur les entrées de données $(E_0, E_1, E_2, E_3)$ ?',
              options: [
                '$E_0 = \\bar{C},\\; E_1 = C,\\; E_2 = C,\\; E_3 = \\bar{C}$',
                '$E_0 = C,\\; E_1 = \\bar{C},\\; E_2 = \\bar{C},\\; E_3 = C$',
                '$E_0 = 1,\\; E_1 = C,\\; E_2 = C,\\; E_3 = 0$',
                '$E_0 = \\bar{C},\\; E_1 = \\bar{C},\\; E_2 = C,\\; E_3 = C$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On regroupe les mintermes par paires selon $(A,B)$ : pour $E_0$ ($AB=00$, lignes $0$ et $1$), seul $m_0$ vaut $1$ ($C=0$), donc $E_0 = \\bar{C}$. Pour $E_1$ ($AB=01$, lignes $2$ et $3$), seul $m_3$ vaut $1$ ($C=1$), donc $E_1 = C$. Pour $E_2$ ($AB=10$, lignes $4$ et $5$), seul $m_5$ vaut $1$ ($C=1$), donc $E_2 = C$. Pour $E_3$ ($AB=11$, lignes $6$ et $7$), seul $m_6$ vaut $1$ ($C=0$), donc $E_3 = \\bar{C}$. (Note : cette fonction réalise $A \\oplus B \\oplus \\bar{C}$).',
              hint: 'Examine les 4 paires de lignes $(m_0,m_1)$, $(m_2,m_3)$, $(m_4,m_5)$ et $(m_6,m_7)$ en regardant si le minterme présent est pair ($C=0 \\to \\bar{C}$) ou impair ($C=1 \\to C$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Aléas de continuité (glitches / hazards) dans les circuits combinatoires',
            paragraphText:
              "Dans un circuit logique réel, chaque porte présente un temps de propagation non nul $t_p$ (quelques nanosecondes). Lorsqu'une variable $X$ change d'état et emprunte deux chemins de longueurs différentes (par exemple l'un direct et l'autre traversant un inverseur $\\bar{X}$), la sortie peut basculer brièvement vers un état parasite ($1 \\to 0 \\to 1$, appelé aléa statique à 1 ou glitch) au moment de la transition entre deux groupes adjacents du tableau de Karnaugh qui ne se chevauchent pas. Pour supprimer cet aléa de continuité dans un circuit critique, on conserve volontairement le terme de consensus (groupement de recouvrement chevauchant la frontière entre les deux groupes).",
            formula: {
              name: 'Élimination d’un aléa statique par ajout du terme de consensus',
              formula: 'F = A\\cdot B + \\bar{A}\\cdot C \\;\\text{ (avec aléa en } B=C=1\\text{)} \\longrightarrow F_{\\text{sans aléa}} = A\\cdot B + \\bar{A}\\cdot C + B\\cdot C',
              note: 'Lorsque B = C = 1, le terme BC maintient F = 1 pendant la transition de A et Ā.',
            },
            keyRule:
              'Un terme de consensus ($BC$ dans $AB + \\bar{A}C + BC$) est algébriquement redondant en statique, mais il supprime l’aléa dynamique (glitch) lors de la commutation de la variable $A$.',
            konanTip:
              'Si une question d’examen te demande comment éliminer un aléa statique (hazard) dans un tableau de Karnaugh, la réponse est toujours : ajouter un groupement de recouvrement (le terme de consensus) entre les deux groupes tangents.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p1_ex6',
              type: 'mcq',
              prompt:
                'Quel terme faut-il ajouter à l’expression minimale $F(A,B,C) = A\\cdot\\bar{C} + B\\cdot C$ pour supprimer tout aléa statique de continuité lors de la commutation de la variable $C$ ?',
              options: [
                '$A \\cdot B$',
                '$\\bar{A} \\cdot \\bar{B}$',
                '$A + B$',
                '$C \\cdot \\bar{C}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsque $A = 1$ et $B = 1$, la commutation de $C$ fait passer la fonction du groupe $A\\bar{C}$ au groupe $BC$. Le terme de consensus entre $A\\bar{C}$ et $BC$ par rapport à la variable $C$ est $A \\cdot B$. En écrivant $F = A\\bar{C} + BC + AB$, le terme $AB$ maintient la sortie à $1$ pendant la transition de $C$.',
              hint: 'Cherche le terme de consensus formé à partir de $A\\cdot\\bar{C}$ et $B\\cdot C$ en éliminant $C$ et $\\bar{C}$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_elecnum_ch3_p2',
        order: 2,
        title: 'Logique séquentielle : verrous (Latches) et bascules synchrones (Flip-Flops)',
        summary:
          'Boucle de rétroaction et mémoire 1 bit, verrou RS (NOR et NAND), bascules synchrones déclenchées sur front d’horloge (D, JK, T), équations caractéristiques, tables d’excitation et entrées asynchrones Preset/Clear.',
        conceptExplanation:
          "Contrairement à un circuit combinatoire, un circuit séquentiel possède un état interne (mémoire) : ses sorties à l'instant $t_{n+1}$ dépendent à la fois des entrées présentes et de l'état antérieur $Q_n$ grâce à une boucle de rétroaction. Les bascules synchrones (Flip-Flops) échantillonnent leurs entrées uniquement sur un front montant ou descendant du signal d'horloge.",
        keyRule:
          "Équations caractéristiques des bascules synchrones : Bascule D $\\implies Q_{n+1} = D$ ; Bascule T $\\implies Q_{n+1} = T \\oplus Q_n$ ; Bascule JK $\\implies Q_{n+1} = J\\cdot\\overline{Q_n} + \\bar{K}\\cdot Q_n$ (où $J=K=1$ provoque le basculement $Q_{n+1} = \\overline{Q_n}$, levant l'état interdit de la bascule RS).",
        workedExample: {
          title: 'Établissement de la table d’excitation de la bascule JK',
          statement:
            'Déterminer les couples d’entrées $(J, K)$ nécessaires pour provoquer chacune des quatre transitions possibles $Q_n \\to Q_{n+1}$ ($0\\to 0$, $0\\to 1$, $1\\to 0$ et $1\\to 1$) d’une bascule JK.',
          methodSteps: [
            'Transition $0 \\to 0$ : on peut soit mémoriser ($J=0, K=0$), soit forcer la remise à zéro ($J=0, K=1$) $\\implies J = 0,\\; K = X$.',
            'Transition $0 \\to 1$ : on peut soit forcer la mise à 1 ($J=1, K=0$), soit basculer ($J=1, K=1$) $\\implies J = 1,\\; K = X$.',
            'Transition $1 \\to 0$ : on peut soit forcer la remise à 0 ($J=0, K=1$), soit basculer ($J=1, K=1$) $\\implies J = X,\\; K = 1$.',
            'Transition $1 \\to 1$ : on peut soit mémoriser ($J=0, K=0$), soit forcer la mise à 1 ($J=1, K=0$) $\\implies J = X,\\; K = 0$.',
          ],
          conclusion:
            'Table d’excitation JK : $(0\\to 0) : (0,X)$ ; $(0\\to 1) : (1,X)$ ; $(1\\to 0) : (X,1)$ ; $(1\\to 1) : (X,0)$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Verrou (Latch) RS asynchrone à portes NOR et à portes NAND',
            paragraphText:
              "La cellule mémoire élémentaire de 1 bit est le bistable ou verrou RS (Reset-Set), constitué de deux portes NOR (ou de deux portes NAND) rebouclées en croix et délivrant deux sorties complémentaires $Q$ et $\\bar{Q}$. Dans un verrou RS à portes NOR (entrées actives à l'état HAUT $1$) : 1) $S=0, R=0 \\implies Q_{n+1} = Q_n$ (mémorisation de l'état antérieur) ; 2) $S=1, R=0 \\implies Q_{n+1} = 1$ (Set : mise à 1) ; 3) $S=0, R=1 \\implies Q_{n+1} = 0$ (Reset : remise à 0) ; 4) $S=1, R=1$ est l'ÉTAT INTERDIT car il force simultanément $Q = \\bar{Q} = 0$ et provoque un état final imprévisible (aléa de course) lors du retour à $S=R=0$. Dans un verrou $\\bar{R}\\bar{S}$ à portes NAND, les entrées sont actives à l'état BAS $0$ (mémorisation en $1,1$ et état interdit en $0,0$).",
            formula: {
              name: 'Équation caractéristique de la bascule RS (sous contrainte S·R = 0)',
              formula: 'Q_{n+1} = S + \\bar{R} \\cdot Q_n \\quad \\text{avec la condition d’exclusion } S \\cdot R = 0',
              note: 'Un verrou RS est utilisé matériellement comme circuit anti-rebond (debouncer) derrière un bouton-poussoir mécanique.',
            },
            keyRule:
              'Dans une bascule RS (entrées actives à $1$) : $(0,0) =$ Mémoire ($Q_n$), $(S=1, R=0) =$ Mise à $1$, $(S=0, R=1) =$ Mise à $0$, $(1,1) =$ État interdit.',
            konanTip:
              'Retiens le moyen mnémotechnique : $S$ = Set (mettre à $1$), $R$ = Reset (remettre à $0$). La sortie $Q$ prend toujours la valeur de l’entrée $S$ lorsque $S$ et $R$ sont différents !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p2_ex1',
              type: 'mcq',
              prompt:
                'Dans un verrou RS réalisé avec deux portes NOR rebouclées en croix, que se passe-t-il lorsque l’on applique simultanément $S = 1$ et $R = 1$ ?',
              options: [
                'C’est l’état interdit : les deux sorties $Q$ et $\\bar{Q}$ sont forcées simultanément à $0$',
                'La bascule conserve son état précédent $Q_{n+1} = Q_n$ (état mémoire)',
                'La bascule change d’état $Q_{n+1} = \\overline{Q_n}$ (mode basculement)',
                'C’est l’état interdit : les deux sorties $Q$ et $\\bar{Q}$ sont forcées simultanément à $1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour une porte NOR, il suffit qu’une entrée vaille $1$ pour que la sortie vaille $0$ ($\\overline{1 + X} = 0$). Lorsque $S=1$ et $R=1$, les deux portes NOR ont leur sortie forcée à $0$, ce qui viole la complémentarité $Q = \\overline{\\bar{Q}}$ ($Q = 0$ et $\\bar{Q} = 0$).',
              hint: 'Quelle est la sortie d’une porte NOR dès que l’une de ses entrées vaut $1$ ?',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Synchronisation : Verrou transparent sur niveau vs Bascule sur front d’horloge',
            paragraphText:
              "Pour coordonner les transferts de données dans un système complexe, les éléments mémoires sont pilotés par un signal périodique d'horloge $CLK$ (ou $H$). Il est fondamental de distinguer deux familles : 1) le verrou commandé (Gated Latch, sensible au NIVEAU de l'horloge) qui est « transparent » tant que $CLK = 1$ (toute variation des entrées se répercute immédiatement sur la sortie $Q$) et verrouille la donnée lorsque $CLK = 0$ ; 2) la bascule synchrone (Edge-Triggered Flip-Flop, représentée avec un petit triangle dynamique $>$ sur l'entrée $CLK$) qui n'échantillonne ses entrées qu'à l'instant précis d'une transition de l'horloge : soit sur FRONT MONTANT ($0 \\to 1$, symbole $>$), soit sur FRONT DESCENDANT ($1 \\to 0$, symbole $>\\!\\circ$ avec une bulle d'inversion).",
            formula: {
              name: 'Période et fréquence du signal d’horloge',
              formula: 'f_{\\text{CLK}} = \\frac{1}{T_{\\text{CLK}}} \\quad (\\text{en Hz, avec } T_{\\text{CLK}} \\text{ en secondes})',
              note: 'Entre deux fronts actifs de l’horloge, la sortie Q d’une bascule synchrone reste strictement constante quelles que soient les variations des entrées synchrones.',
            },
            keyRule:
              'Latch = sensible au NIVEAU de l’horloge (transparent pendant tout l’état haut). Flip-Flop (bascule) = sensible uniquement au FRONT (montant $\\uparrow$ ou descendant $\\downarrow$) de l’horloge.',
            konanTip:
              'Sur un schéma logique normalisé, la présence d’un triangle $>$ sur l’entrée d’horloge indique un déclenchement sur front : sans bulle = front montant $\\uparrow$, avec un petit rond (bulle) = front descendant $\\downarrow$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p2_ex2',
              type: 'mcq',
              prompt:
                'Quelle est la différence fondamentale de comportement entre un verrou D (D-Latch) actif à l’état haut et une bascule D (D Flip-Flop) déclenchée sur front montant ?',
              options: [
                'Le D-Latch recopie $D$ sur $Q$ pendant toute la durée où $CLK=1$, alors que la bascule D ne capture $D$ qu’à l’instant de la transition $0 \\to 1$ de $CLK$',
                'La bascule D possède un état interdit alors que le D-Latch n’en possède pas',
                'Le D-Latch ne fonctionne que sur front descendant alors que la bascule D fonctionne sur front montant',
                'La bascule D inverse la donnée ($Q = \\bar{D}$) alors que le D-Latch la conserve ($Q = D$)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un D-Latch est sensible au niveau (level-sensitive) : tant que $CLK=1$, la sortie $Q$ suit toutes les variations de $D$ (mode transparent). Une bascule D synchrone est sensible au front (edge-triggered) : elle échantillonne $D$ uniquement sur le front montant $0 \\to 1$ de $CLK$ et maintient $Q$ figée le reste de la période.',
              hint: 'Pense à la distinction « niveau haut ($CLK=1$) » vs « transition instantanée ($0 \\to 1$) ».',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Bascules synchrones D (Data/Delay), JK et T (Toggle)',
            paragraphText:
              "Trois bascules synchrones constituent les briques de base des registres et compteurs : 1) la bascule D (Data ou Delay) possède une seule entrée $D$ (obtenue en reliant $S = D$ et $R = \\bar{D}$, ce qui élimine définitivement l'état interdit) et recopie simplement $Q_{n+1} = D$ à chaque front d'horloge (mémoire 1 bit / retard d'un cycle) ; 2) la bascule JK est la bascule universelle ($J$ joue le rôle de Set, $K$ le rôle de Reset) qui lève l'état interdit de la RS en transformant la combinaison $J = 1, K = 1$ en un basculement (inversion) $Q_{n+1} = \\overline{Q_n}$ ; 3) la bascule T (Toggle, obtenue en reliant $J = K = T$ ou en rebouclant $D = T \\oplus Q_n$) mémorise son état si $T = 0$ ($Q_{n+1} = Q_n$) et bascule à chaque front d'horloge si $T = 1$ ($Q_{n+1} = \\overline{Q_n}$), divisant ainsi par $2$ la fréquence de l'horloge.",
            formula: {
              name: 'Équations caractéristiques des bascules D, JK et T',
              formula: '\\begin{aligned} &\\text{Bascule D : } Q_{n+1} = D \\\\ &\\text{Bascule JK : } Q_{n+1} = J \\cdot \\overline{Q_n} + \\bar{K} \\cdot Q_n \\\\ &\\text{Bascule T : } Q_{n+1} = T \\oplus Q_n = T \\cdot \\overline{Q_n} + \\bar{T} \\cdot Q_n \\end{aligned}',
              note: 'Lorsque T = 1 en permanence (ou J = K = 1, ou D = Q̄), la sortie Q oscille à la fréquence f_Q = f_CLK / 2.',
            },
            keyRule:
              'Dans une bascule JK : $(0,0) \\to Q_n$ (mémoire), $(0,1) \\to 0$ (Reset), $(1,0) \\to 1$ (Set), $(1,1) \\to \\overline{Q_n}$ (basculement / Toggle).',
            konanTip:
              'Pour transformer une bascule JK en bascule D, on place un inverseur entre $J$ et $K$ ($J = D, K = \\bar{D}$) ; pour la transformer en bascule T, on relie $J$ et $K$ ensemble ($J = K = T$).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p2_ex3',
              type: 'mcq',
              prompt:
                'Une bascule JK synchrone sur front montant a son état initial à $Q_0 = 1$. On applique successivement aux trois premiers fronts montants d’horloge les couples $(J,K)$ suivants : Front 1 : $(J=0, K=0)$, Front 2 : $(J=1, K=1)$, Front 3 : $(J=0, K=1)$. Quelles sont les valeurs successives $(Q_1, Q_2, Q_3)$ de la sortie $Q$ ?',
              options: [
                '$Q_1 = 1,\\; Q_2 = 0,\\; Q_3 = 0$',
                '$Q_1 = 1,\\; Q_2 = 1,\\; Q_3 = 0$',
                '$Q_1 = 0,\\; Q_2 = 1,\\; Q_3 = 0$',
                '$Q_1 = 1,\\; Q_2 = 0,\\; Q_3 = 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Partant de $Q_0 = 1$ : au Front 1, $(J=0, K=0)$ est le mode mémoire $\\implies Q_1 = Q_0 = 1$. Au Front 2, $(J=1, K=1)$ est le mode basculement (Toggle) $\\implies Q_2 = \\overline{Q_1} = 0$. Au Front 3, $(J=0, K=1)$ est le mode Reset (remise à zéro) $\\implies Q_3 = 0$.',
              hint: 'Applique successivement $(0,0) \\to \\text{mémoire}$, $(1,1) \\to \\text{inversion}$, et $(0,1) \\to \\text{remise à zéro}$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Tables de transition (tables d’excitation) des bascules D, T, RS et JK',
            paragraphText:
              "Lorsqu'on analyse un circuit existant, on connaît les entrées de la bascule et on utilise la table de vérité pour calculer $Q_{n+1}$. Mais lorsqu'on SYNTHÉTISE (conçoit) un compteur ou un automate, on connaît la transition souhaitée $Q_n \\to Q_{n+1}$ et on cherche quelles valeurs appliquer aux entrées de la bascule : c'est le rôle de la TABLE D'EXCITATION. Pour une bascule D, l'excitation est triviale : $D = Q_{n+1}$. Pour une bascule T : $T = Q_n \\oplus Q_{n+1}$ ($T=0$ si l'état ne change pas, $T=1$ si l'état change). Pour une bascule JK, la présence des quatre modes (mémoire, Set, Reset, Toggle) introduit un état indifférent $X$ à chaque ligne, ce qui simplifie considérablement les tableaux de Karnaugh !",
            formula: {
              name: 'Tables d’excitation des bascules D, T et JK pour une transition Q_n → Q_{n+1}',
              formula: '\\begin{array}{c|c|c|cc} Q_n \\to Q_{n+1} & D & T & J & K \\\\ \\hline 0 \\to 0 & 0 & 0 & 0 & X \\\\ 0 \\to 1 & 1 & 1 & 1 & X \\\\ 1 \\to 0 & 0 & 1 & X & 1 \\\\ 1 \\to 1 & 1 & 0 & X & 0 \\end{array}',
              note: 'Astuce mnémotechnique JK : quand Q_n = 0, J = Q_{n+1} et K = X ; quand Q_n = 1, J = X et K = Q̄_{n+1}.',
            },
            keyRule:
              'Mémorise la règle éclair pour la table d’excitation JK : si l’état de départ est $Q_n = 0 \\implies (J = Q_{n+1},\\; K = X)$ ; si l’état de départ est $Q_n = 1 \\implies (J = X,\\; K = \\overline{Q_{n+1}})$.',
            konanTip:
              'Cette astuce en deux lignes ($Q_n=0 \\to J=Q_{n+1}, K=X$ et $Q_n=1 \\to J=X, K=\\overline{Q_{n+1}}$) te fera gagner 10 minutes précieuses lors de la synthèse d’un compteur synchrone à l’examen !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p2_ex4',
              type: 'mcq',
              prompt:
                'Pour provoquer la transition $Q_n = 1 \\to Q_{n+1} = 0$ au prochain front d’horloge, quelles excitations doit-on appliquer respectivement sur une bascule D, une bascule T et une bascule JK ?',
              options: [
                '$D = 0$, $T = 1$, et $(J = X,\\; K = 1)$',
                '$D = 0$, $T = 0$, et $(J = 0,\\; K = 1)$',
                '$D = 1$, $T = 1$, et $(J = 1,\\; K = X)$',
                '$D = 0$, $T = 1$, et $(J = 1,\\; K = X)$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour passer de $Q_n = 1$ à $Q_{n+1} = 0$ : sur une bascule D, $D = Q_{n+1} = 0$. Sur une bascule T, il y a changement d’état donc $T = 1 \\oplus 0 = 1$. Sur une bascule JK, on peut soit faire un Reset ($J=0, K=1$), soit un Toggle ($J=1, K=1$), ce qui donne $(J = X,\\; K = 1)$.',
              hint: 'En partant de $Q_n=1$ vers $Q_{n+1}=0$, l’état change (Toggle possible ou Reset possible sur JK).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Entrées de forçage asynchrones Preset (PR / SD) et Clear (CLR / RD)',
            paragraphText:
              "En plus de leurs entrées synchrones ($D$, $J, K$, $T$) qui attendent le front actif de l'horloge $CLK$, les bascules intégrées industrielles comportent deux entrées de forçage ASYNCHRONES prioritaires : Preset (notée $PR$ ou $SD$ pour Set Direct) qui force immédiatement la sortie à $Q = 1$, et Clear (notée $CLR$ ou $RD$ pour Reset Direct) qui force immédiatement la sortie à $Q = 0$, indépendamment de l'horloge et des entrées synchrones. Ces entrées sont le plus souvent actives à l'état BAS ($\\overline{PR}$ et $\\overline{CLR}$, repérées par une bulle d'inversion) : pour que la bascule fonctionne normalement en mode synchrone avec l'horloge, il faut donc maintenir en permanence $\\overline{PR} = 1$ et $\\overline{CLR} = 1$.",
            formula: {
              name: 'Priorité des entrées asynchrones actives à l’état bas (PR̄, CLR̄)',
              formula: '\\begin{cases} \\overline{PR} = 0,\\; \\overline{CLR} = 1 \\implies Q = 1 \\text{ immédiatement (sans attendre } CLK\\text{)} \\\\ \\overline{PR} = 1,\\; \\overline{CLR} = 0 \\implies Q = 0 \\text{ immédiatement (sans attendre } CLK\\text{)} \\\\ \\overline{PR} = 1,\\; \\overline{CLR} = 1 \\implies \\text{Fonctionnement synchrone normal sur front de } CLK \\end{cases}',
              note: 'La combinaison PR̄ = 0 et CLR̄ = 0 simultanément est interdite.',
            },
            keyRule:
              'Les entrées asynchrones Preset et Clear sont prioritaires sur l’horloge $CLK$ : elles agissent instantanément dès qu’elles sont activées, sans attendre de front d’horloge.',
            konanTip:
              'C’est l’entrée asynchrone $\\overline{CLR}$ (ou $CLR$) qui est utilisée pour tronquer le cycle d’un compteur asynchrone afin de réaliser un compteur modulo $N < 2^n$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p2_ex5',
              type: 'mcq',
              prompt:
                'Une bascule D synchrone sur front montant possède deux entrées asynchrones $\\overline{PR}$ et $\\overline{CLR}$ actives à l’état BAS ($0$). Si l’on maintient $\\overline{PR} = 1$ et $\\overline{CLR} = 0$ alors que $D = 1$ et qu’un front montant d’horloge survient, quelle est la valeur de la sortie $Q$ ?',
              options: [
                '$Q = 0$, car l’entrée asynchrone active $\\overline{CLR} = 0$ est prioritaire sur l’horloge et sur $D$',
                '$Q = 1$, car le front montant de l’horloge capture $D = 1$',
                '$Q$ bascule en $\\overline{Q}$, car $D = 1$ et $\\overline{CLR} = 0$',
                'La sortie $Q$ est dans un état interdit indéterminé',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les entrées asynchrones $\\overline{PR}$ et $\\overline{CLR}$ sont prioritaires sur le fonctionnement synchrone. Tant que $\\overline{CLR} = 0$ (et $\\overline{PR} = 1$), la sortie $Q$ est maintenue forcée à $0$, quels que soient les fronts de $CLK$ et la valeur de l’entrée synchrone $D$.',
              hint: 'Qui est prioritaire entre une entrée asynchrone active ($\\overline{CLR}=0$) et un front d’horloge ?',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Contraintes temporelles ($t_{\\text{su}}$, $t_h$) et bascule D rebouclée en diviseur par 2',
            paragraphText:
              "Pour qu'une bascule synchrone capture fiablement une donnée sur un front d'horloge sans entrer dans un état métastable, l'entrée synchrone doit rester stable pendant un temps de prépositionnement (setup time $t_{\\text{su}}$) AVANT le front d'horloge et pendant un temps de maintien (hold time $t_h$) APRÈS le front d'horloge ; la sortie $Q$ ne commute ensuite qu'après le temps de propagation $t_{\\text{pCQ}} > t_h$. C'est grâce à ce délai $t_{\\text{pCQ}} > t_h$ que l'on peut reboucler directement la sortie inversée $\\bar{Q}$ sur l'entrée $D$ ($D = \\bar{Q}$) d'une bascule D déclenchée sur front : à chaque front actif d'horloge, $Q_{n+1} = \\overline{Q_n}$, ce qui transforme la bascule D en une bascule T ($T=1$) divisant la fréquence de l'horloge par $2$.",
            formula: {
              name: 'Bascule D câblée en diviseur de fréquence par 2',
              formula: 'D = \\overline{Q_n} \\implies Q_{n+1} = \\overline{Q_n} \\implies f_Q = \\frac{f_{\\text{CLK}}}{2}',
              note: 'Un tel rebouclage D = Q̄ sur un simple Latch transparent (sensible au niveau) provoquerait une oscillation incontrôlée pendant tout l’état haut de CLK !',
            },
            keyRule:
              'Relier $D = \\bar{Q}$ sur une bascule D synchrone (sur front) réalise un diviseur de fréquence par $2$ ($f_Q = f_{\\text{CLK}} / 2$).',
            konanTip:
              'Sur un chronogramme, si la bascule divise par 2 sur front montant, la sortie $Q$ ne change d’état qu’uniquement sur les flèches montantes de $CLK$ : sa période est donc le double de celle de $CLK$.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p2_ex6',
              type: 'mcq',
              prompt:
                'On relie la sortie complémentée $\\bar{Q}$ à l’entrée $D$ d’une bascule D synchrone sur front montant, cadencée par une horloge de fréquence $f_{\\text{CLK}} = 12\\text{ MHz}$. Quelle est la fréquence du signal obtenu sur la sortie $Q$ ?',
              options: [
                '$6\\text{ MHz}$',
                '$12\\text{ MHz}$',
                '$24\\text{ MHz}$',
                '$3\\text{ MHz}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec $D = \\bar{Q}$, l’équation caractéristique donne $Q_{n+1} = \\overline{Q_n}$. La sortie $Q$ change d’état une fois par période d’horloge (à chaque front montant) : il faut donc $2$ périodes d’horloge pour accomplir une période complète ($0 \\to 1 \\to 0$) de $Q$. Sa fréquence est $f_Q = f_{\\text{CLK}} / 2 = 12 / 2 = 6\\text{ MHz}$.',
              hint: 'Il faut deux fronts montants successifs de $CLK$ pour que $Q$ fasse un aller-retour complet $0 \\to 1 \\to 0$.',
            },
          },
        ],
      }),

      makePoint({
        id: 'lmd_srit_l1_elecnum_ch3_p3',
        order: 3,
        title: 'Registres à décalage et synthèse des compteurs asynchrones et synchrones',
        summary:
          'Registres à décalage (SISO, SIPO, PISO, PIPO), compteurs en anneau et de Johnson, compteurs asynchrones modulo 2^n et modulo N, et méthodologie complète de synthèse des compteurs synchrones par tables d’excitation et Karnaugh.',
        conceptExplanation:
          "L'association de $n$ bascules permet de construire les deux grandes familles de circuits séquentiels : les registres (qui stockent, décalent ou convertissent des mots de $n$ bits entre série et parallèle) et les compteurs (asynchrones ou synchrones) qui parcourent un cycle d'états prédéterminé modulo $N$ et divisent la fréquence d'horloge.",
        keyRule:
          "Dans un compteur ASYNCHRONE, seule la première bascule reçoit l'horloge externe $CLK$ (les suivantes sont cadencées par la sortie de la bascule précédente) ; dans un compteur SYNCHRONE, toutes les bascules reçoivent simultanément le même signal d'horloge $CLK$ et leurs entrées ($J_i, K_i$ ou $D_i$) sont calculées par des tableaux de Karnaugh issus de la table de transition.",
        workedExample: {
          title: 'Synthèse complète d’un compteur synchrone modulo 3 (cycle 0 → 1 → 2 → 0) en bascules D',
          statement:
            'Concevoir avec deux bascules D synchrones $(Q_1, Q_0)$ un compteur synchrone modulo 3 décrivant le cycle $00 \\to 01 \\to 10 \\to 00$, en traitant l’état inutilisé $11$ comme état indifférent $\\Phi$.',
          methodSteps: [
            'Table de transition $(Q_1 Q_0) \\to (Q_1^+ Q_0^+) = (D_1 D_0)$ : $00 \\to 01$ ($D_1=0, D_0=1$) ; $01 \\to 10$ ($D_1=1, D_0=0$) ; $10 \\to 00$ ($D_1=0, D_0=0$) ; $11 \\to \\Phi\\Phi$.',
            'Karnaugh à 2 variables $(Q_1, Q_0)$ pour $D_1$ : vaut $1$ uniquement pour $(Q_1=0, Q_0=1)$ et $\\Phi$ pour $(1,1)$ (mais grouper avec $\\Phi$ donnerait $Q_0$ qui pour $(0,1)$ marche, et pour $(1,1)$ enverrait vers $10$). Attention : dans l’état $10$, $Q_0=0 \\implies D_1=0$. Donc $D_1 = \\overline{Q_1}\\cdot Q_0$ (ou $D_1 = Q_0$ si l’on accepte $11 \\to 10$ !).',
            'Vérifions avec $\\Phi(11) = 0$ pour $D_1$ : $D_1 = \\overline{Q_1}\\cdot Q_0$. Pour $D_0$ : vaut $1$ pour $(0,0)$, $0$ pour $(0,1)$ et $(1,0)$, et $\\Phi$ pour $(1,1) \\implies D_0 = \\overline{Q_1} \\cdot \\overline{Q_0}$.',
          ],
          conclusion:
            'Les équations d’excitation minimales sont $D_1 = \\overline{Q_1} \\cdot Q_0$ et $D_0 = \\overline{Q_1} \\cdot \\overline{Q_0} = \\overline{Q_1 + Q_0}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Registres de mémorisation et registres à décalage (SISO, SIPO, PISO, PIPO)',
            paragraphText:
              "Un registre de $n$ bits est un assemblage de $n$ bascules D partageant la même horloge $CLK$. Dans un registre à décalage (Shift Register), la sortie $Q_i$ de chaque bascule est reliée à l'entrée $D_{i+1}$ de la bascule voisine : à chaque front d'horloge, l'ensemble des bits se décale d'un rang. On distingue 4 architectures selon le mode d'entrée/sortie : SISO (Serial-In Serial-Out, ligne à retard de $n$ cycles), SIPO (Serial-In Parallel-Out, convertisseur série $\\to$ parallèle à la réception UART), PISO (Parallel-In Serial-Out, convertisseur parallèle $\\to$ série à l'émission UART) et PIPO (Parallel-In Parallel-Out, registre tampon). Sur le plan arithmétique, un décalage logique d'un rang vers la gauche (en insérant un $0$ au LSB) multiplie un entier binaire par $2$, tandis qu'un décalage vers la droite réalise une division entière par $2$.",
            formula: {
              name: 'Opérations arithmétiques par décalage de k bits',
              formula: 'N \\ll k = N \\times 2^k \\quad \\text{et} \\quad N \\gg k = \\lfloor N / 2^k \\rfloor',
              note: 'Un registre à décalage bouclé sur lui-même forme un compteur en anneau (D_0 = Q_{n-1}, modulo n) ou un compteur de Johnson (D_0 = Q̄_{n-1}, modulo 2n).',
            },
            keyRule:
              'Décaler un mot binaire de $k$ positions vers la gauche équivaut à le multiplier par $2^k$ ; le décaler de $k$ positions vers la droite équivaut à le diviser par $2^k$.',
            konanTip:
              'Un compteur en anneau à $n$ bascules possède un cycle de $n$ états ($\\text{modulo } n$), alors qu’un compteur en anneau torsadé (compteur de Johnson, où l’on reboucle $\\overline{Q_{n-1}}$ sur $D_0$) possède un cycle de $2n$ états ($\\text{modulo } 2n$).',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p3_ex1',
              type: 'mcq',
              prompt:
                'Quel type de registre à décalage est utilisé dans un récepteur de communication série (type UART) pour transformer un flux de bits arrivant les uns après les autres sur un seul fil en un octet de $8$ bits disponible simultanément sur un bus de données ?',
              options: [
                'Un registre SIPO (Serial-In Parallel-Out)',
                'Un registre PISO (Parallel-In Serial-Out)',
                'Un registre SISO (Serial-In Serial-Out)',
                'Un registre PIPO (Parallel-In Parallel-Out)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les bits arrivent en série sur une seule ligne de réception ($Rx$) au rythme de l’horloge bit, puis, une fois les 8 bits décalés dans les 8 bascules, l’octet complet est lu en parallèle sur les 8 sorties $(Q_7 \\dots Q_0)$ : c’est un registre SIPO (Entrée Série, Sortie Parallèle).',
              hint: 'L’entrée se fait en série (1 fil) et la lecture par le processeur se fait en parallèle (8 fils).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Propriété',
            stepTheme: 'violet',
            stepTitle: 'Compteurs et décompteurs asynchrones modulo 2^n',
            paragraphText:
              "Un compteur asynchrone (ou compteur à propagation, Ripple Counter) modulo $2^n$ est formé d'une chaîne de $n$ bascules T ou JK configurées en mode basculement ($T_i = 1$ ou $J_i = K_i = 1$, ou bascules D avec $D_i = \\overline{Q_i}$). Seule la première bascule de poids faible $Q_0$ (LSB) reçoit l'horloge externe $CLK$ ; chaque bascule suivante $Q_i$ reçoit sur son entrée d'horloge la sortie $Q_{i-1}$ de la bascule précédente. La fréquence est divisée par $2$ à chaque étage ($f_{Q_i} = f_{\\text{CLK}} / 2^{i+1}$). Règle fondamentale du sens de comptage lorsque l'horloge est prise sur $Q_{i-1}$ : si les bascules déclenchent sur FRONT DESCENDANT ($1 \\to 0$), le circuit est un COMPTEUR croissant ($0$ à $2^n - 1$) ; si elles déclenchent sur FRONT MONTANT ($0 \\to 1$), le circuit est un DÉCOMPTEUR décroissant ($2^n - 1$ à $0$).",
            formula: {
              name: 'Modulo et division de fréquence d’un compteur asynchrone à n bascules',
              formula: 'N = 2^n \\text{ états } (0 \\text{ à } 2^n - 1) \\quad \\text{et} \\quad f_{Q_{n-1}} = \\frac{f_{\\text{CLK}}}{2^n}',
              note: 'Si les bascules sont sur front montant, il suffit de relier l’horloge de l’étage i à la sortie inversée Q̄_{i-1} pour obtenir un compteur croissant.',
            },
            keyRule:
              'Dans un compteur asynchrone où $CLK_i = Q_{i-1}$ : bascules sur front DESCENDANT $\\implies$ COMPTEUR croissant ; bascules sur front MONTANT $\\implies$ DÉCOMPTEUR décroissant.',
            konanTip:
              'Moyen mnémotechnique infaillible : en comptant en binaire ($00 \\to 01 \\to 10$), le bit $Q_1$ doit passer à $1$ au moment précis où le bit $Q_0$ retombe de $1$ à $0$ (front descendant de $Q_0$) !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p3_ex2',
              type: 'mcq',
              prompt:
                'On réalise un compteur asynchrone avec $4$ bascules JK ($J=K=1$) déclenchées sur front descendant, où la sortie $Q_i$ attaque l’horloge de la bascule $i+1$. Si l’horloge d’entrée a une fréquence $f_{\\text{CLK}} = 32\\text{ kHz}$, quels sont le sens de comptage, le modulo et la fréquence du signal disponible sur la sortie de poids fort $Q_3$ ?',
              options: [
                'Compteur croissant modulo $16$, avec $f_{Q_3} = 2\\text{ kHz}$',
                'Décompteur décroissant modulo $16$, avec $f_{Q_3} = 2\\text{ kHz}$',
                'Compteur croissant modulo $8$, avec $f_{Q_3} = 4\\text{ kHz}$',
                'Compteur croissant modulo $16$, avec $f_{Q_3} = 8\\text{ kHz}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec $n=4$ bascules, le modulo naturel est $2^4 = 16$ (états $0$ à $15$). Comme $CLK_{i+1} = Q_i$ et que les bascules sont actives sur front descendant, il s’agit d’un compteur croissant. La fréquence sur le MSB $Q_3$ est divisée par $2^4 = 16$ : $f_{Q_3} = 32\\text{ kHz} / 16 = 2\\text{ kHz}$.',
              hint: 'Avec $n=4$ bascules, le modulo vaut $2^4$ et la fréquence est divisée par $2^4$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Compteur asynchrone modulo N quelconque par remise à zéro asynchrone',
            paragraphText:
              "Pour réaliser un compteur asynchrone modulo $N$ lorsque $N$ n'est pas une puissance de $2$ (par exemple un compteur décimal BCD modulo $10$, comptant de $0$ à $9$), on choisit un nombre de bascules $n$ tel que $2^{n-1} < N < 2^n$ (soit $n = \\lceil \\log_2 N \\rceil$) et on tronque le cycle naturel au moyen d'une porte logique détectant l'état fugitif $N$. Dès que le compteur atteint la combinaison binaire de $N$ (juste après l'état $N-1$), la sortie de cette porte active instantanément toutes les entrées asynchrones de remise à zéro ($CLR$ ou $\\overline{CLR}$) des $n$ bascules, ce qui ramène immédiatement le compteur à l'état $00\\dots 0$. L'état $N$ n'apparaît donc que pendant quelques nanosecondes (état transitoire fugitif) et le compteur ne possède bien que $N$ états stables ($0$ à $N-1$).",
            formula: {
              name: 'Nombre de bascules et équation de forçage Clear pour un compteur modulo N',
              formula: 'n = \\lceil \\log_2 N \\rceil \\quad \\text{et} \\quad \\text{Activation de } CLR \\text{ lorsque } (Q_{n-1}\\dots Q_0)_2 = N_{10}',
              note: 'Si les entrées Clear sont actives à l’état BAS (CLR̄), on utilise une porte NAND détectant les bits à 1 de l’écriture binaire de N.',
            },
            keyRule:
              'Pour un compteur asynchrone modulo $N$ (de $0$ à $N-1$), la porte de remise à zéro asynchrone $CLR$ doit décoder la valeur $N$ (et JAMAIS la valeur $N-1$, sinon l’état $N-1$ serait détruit instantanément !).',
            konanTip:
              'Piège classique aux examens : pour un compteur modulo $10$ (qui compte de $0$ à $9$), on câble la porte NAND de Reset sur l’état $10_{10} = 1010_2$ ($Q_3 \\cdot Q_1$), et surtout pas sur $9_{10} = 1001_2$ !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p3_ex3',
              type: 'mcq',
              prompt:
                'On souhaite réaliser un compteur asynchrone modulo $12$ (comptant de $0$ à $11$) à l’aide de bascules munies d’une entrée asynchrone $\\overline{CLR}$ active à l’état BAS ($0$). Combien faut-il de bascules et quelles sorties doit-on relier aux entrées de la porte NAND commandant $\\overline{CLR}$ ?',
              options: [
                '$4$ bascules ($Q_3 Q_2 Q_1 Q_0$), et une porte NAND reliant $Q_3$ et $Q_2$',
                '$4$ bascules ($Q_3 Q_2 Q_1 Q_0$), et une porte NAND reliant $Q_3$, $Q_1$ et $Q_0$',
                '$3$ bascules ($Q_2 Q_1 Q_0$), et une porte NAND reliant $Q_2$ et $Q_1$',
                '$4$ bascules ($Q_3 Q_2 Q_1 Q_0$), et une porte ET reliant $Q_3$ et $Q_2$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme $2^3 = 8 < 12 \\le 16 = 2^4$, il faut $4$ bascules $(Q_3, Q_2, Q_1, Q_0)$. Pour compter de $0$ à $11$, la remise à zéro asynchrone doit se déclencher sur l’état fugitif $N = 12_{10} = 1100_2$, dont les bits à $1$ sont $Q_3=1$ et $Q_2=1$. Comme $\\overline{CLR}$ est active à $0$, on utilise une porte NAND : $\\overline{CLR} = \\overline{Q_3 \\cdot Q_2}$.',
              hint: 'Écris $N = 12_{10}$ en binaire sur 4 bits ($1100_2$) et repère quels bits passent simultanément à $1$ pour la première fois à $12$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Méthode',
            stepTheme: 'green',
            stepTitle: 'Méthodologie générale de synthèse d’un compteur synchrone',
            paragraphText:
              "Les compteurs asynchrones souffrent d'un cumul des temps de propagation ($n \\cdot t_p$) et d'états transitoires parasites. Pour les hautes fréquences ou les séquences quelconques, on utilise un compteur SYNCHRONE dans lequel toutes les entrées d'horloge des $n$ bascules sont reliées en parallèle au même signal $CLK$. Sa synthèse suit un algorithme rigoureux en 5 étapes : 1) déterminer le nombre de bascules $n$ et tracer le diagramme d'états du cycle ; 2) dresser la table de transition donnant pour chaque état présent $(Q_{n-1}\\dots Q_0)$ l'état suivant $(Q_{n-1}^+\\dots Q_0^+)$ ; 3) compléter la table avec les colonnes des entrées de commande ($D_i$ ou $J_i, K_i$ ou $T_i$) grâce à la table d'excitation de la bascule choisie ; 4) placer les états inutilisés en $\\Phi$ et simplifier chaque entrée par un tableau de Karnaugh ; 5) tracer le logigramme final.",
            formula: {
              name: 'Équations générales d’un compteur binaire synchrone modulo 2^n en bascules T/JK',
              formula: 'T_0 = J_0 = K_0 = 1,\\quad T_1 = J_1 = K_1 = Q_0,\\quad T_i = J_i = K_i = Q_0 \\cdot Q_1 \\cdots Q_{i-1}',
              note: 'Dans un compteur binaire synchrone croissant, la bascule de rang i ne bascule que si toutes les bascules de rang inférieur valent 1.',
            },
            keyRule:
              'Dans un compteur synchrone, toutes les bascules reçoivent la même horloge $CLK$ : l’évolution de la séquence est entièrement gouvernée par les équations combinatoires des entrées $D_i$, $T_i$ ou $(J_i, K_i)$.',
            konanTip:
              'Dans la table de transition d’un compteur synchrone à $n$ bascules JK, tu dois remplir $2n$ tableaux de Karnaugh (un pour chaque $J_i$ et un pour chaque $K_i$).',
            visualSchema: {
              type: 'cycle_diagram',
              title: 'Les 5 étapes de synthèse d’un compteur synchrone modulo N',
              caption: 'Démarche systématique utilisée aux examens d’Électronique Numérique (SRIT L1).',
              cycle: {
                centerLabel: 'Synthèse Synchrone',
                centerSublabel: 'Horloge CLK commune',
                nodes: [
                  {
                    title: '1. Graphe d’états',
                    subtitle: 'Choix de n bascules (2^n ≥ N) et cycle des états',
                    color: 'blue',
                  },
                  {
                    title: '2. Table de transition',
                    subtitle: 'État présent Q_n → État suivant Q_{n+1}',
                    color: 'violet',
                  },
                  {
                    title: '3. Table d’excitation',
                    subtitle: 'Déduction des entrées J_i, K_i, D_i ou T_i (avec Φ)',
                    color: 'green',
                  },
                  {
                    title: '4. Tableaux de Karnaugh',
                    subtitle: 'Simplification minimale de chaque entrée de bascule',
                    color: 'orange',
                  },
                  {
                    title: '5. Logigramme & Auto-correction',
                    subtitle: 'Câblage des portes et vérification des états parasites',
                    color: 'slate',
                  },
                ],
              },
            },
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p3_ex4',
              type: 'mcq',
              prompt:
                'Dans un compteur binaire synchrone modulo $8$ (comptant de $000$ à $111$) réalisé avec trois bascules JK $(Q_2, Q_1, Q_0)$ où $Q_0$ est le LSB et $Q_2$ le MSB, quelles sont les équations logiques des entrées $(J_2, K_2)$ de la bascule de poids fort ?',
              options: [
                '$J_2 = K_2 = Q_1 \\cdot Q_0$',
                '$J_2 = K_2 = Q_1 + Q_0$',
                '$J_2 = K_2 = Q_1$',
                '$J_2 = Q_1 \\cdot Q_0$ et $K_2 = 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans un compteur binaire naturel croissant ($000 \\to 001 \\to 010 \\to 011 \\to 100 \\dots$), le bit de rang $2$ ($Q_2$) ne change d’état (de $0$ à $1$ après $011$, ou de $1$ à $0$ après $111$) que lorsque tous les bits de poids inférieur valent simultanément $1$, c’est-à-dire $Q_1 = 1$ et $Q_0 = 1$. On doit donc avoir $J_2 = K_2 = Q_1 \\cdot Q_0$.',
              hint: 'Pour quelles valeurs de $(Q_1, Q_0)$ le bit $Q_2$ bascule-t-il au coup d’horloge suivant ?',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Synthèse d’un compteur synchrone à séquence arbitraire (code Gray ou pair/impair)',
            paragraphText:
              "La puissance de la méthode synchrone est qu'elle permet de synthétiser n'importe quelle séquence non monotone avec la même facilité qu'un compteur binaire : compteur en code de Gray ($00 \\to 01 \\to 11 \\to 10 \\to 00$), compteur de nombres pairs ($0 \\to 2 \\to 4 \\to 6 \\to 0$), ou séquence personnalisée ($0 \\to 3 \\to 1 \\to 2 \\to 0$). Dans la table de transition, on range toujours la colonne « État présent » dans l'ordre binaire naturel ($0, 1, 2, 3\\dots$) afin de pouvoir transférer sans erreur les colonnes d'excitation vers les tableaux de Karnaugh, et l'on inscrit dans la colonne « État suivant » le successeur imposé par le graphe de la séquence.",
            formula: {
              name: 'Équations d’un compteur synchrone 2 bits en code de Gray (00 → 01 → 11 → 10 → 00) en bascules D',
              formula: 'D_1 = Q_0 \\quad \\text{et} \\quad D_0 = \\overline{Q_1}',
              note: 'Vérification : (0,0) → (0,1) → (1,1) → (1,0) → (0,0). C’est un compteur de Johnson à 2 bascules !',
            },
            keyRule:
              'Dans la table de transition, range toujours la colonne des états présents $(Q_{n-1}\\dots Q_0)$ dans l’ordre croissant de $0$ à $2^n-1$, même si le cycle du compteur saute des valeurs.',
            konanTip:
              'Tester ton équation finale sur 2 ou 3 transitions du cycle ne prend que 15 secondes et garantit 100 % des points à la question de synthèse !',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p3_ex5',
              type: 'mcq',
              prompt:
                'On synthétise avec deux bascules JK $(Q_1, Q_0)$ un compteur synchrone parcourant le cycle en code de Gray $00 \\to 01 \\to 11 \\to 10 \\to 00$. Quelles sont les équations minimales de $(J_1, K_1)$ et $(J_0, K_0)$ ?',
              options: [
                '$J_1 = Q_0,\\; K_1 = \\overline{Q_0}$ et $J_0 = \\overline{Q_1},\\; K_0 = Q_1$',
                '$J_1 = K_1 = Q_0$ et $J_0 = K_0 = \\overline{Q_1}$',
                '$J_1 = \\overline{Q_0},\\; K_1 = Q_0$ et $J_0 = Q_1,\\; K_0 = \\overline{Q_1}$',
                '$J_1 = Q_0,\\; K_1 = Q_0$ et $J_0 = 1,\\; K_0 = 1$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On sait que pour ce cycle Gray, l’état suivant est $Q_1^+ = Q_0$ et $Q_0^+ = \\overline{Q_1}$. Or une bascule JK réalise une bascule D ($Q^+ = D$) lorsque $J = D$ et $K = \\bar{D}$ (ou par lecture de la table d’excitation : $00\\to 01, 01\\to 11, 11\\to 10, 10\\to 00$). On obtient donc directement $J_1 = Q_0, K_1 = \\overline{Q_0}$ et $J_0 = \\overline{Q_1}, K_0 = Q_1$.',
              hint: 'Remarque que dans le cycle $00 \\to 01 \\to 11 \\to 10 \\to 00$, on a toujours $Q_1^+ = Q_0$ et $Q_0^+ = \\overline{Q_1}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'États parasites et auto-démarrage (self-starting) d’un compteur synchrone',
            paragraphText:
              "Lorsqu'un compteur synchrone modulo $N < 2^n$ a été simplifié en utilisant des états indifférents $\\Phi$ pour les $2^n - N$ combinaisons inutilisées, chaque $\\Phi$ s'est vu attribuer la valeur $0$ ou $1$ par les groupements de Karnaugh. À la mise sous tension (ou suite à un parasite électromagnétique), le compteur peut démarrer accidentellement dans l'un de ces états inutilisés. On dit que le compteur est AUTO-CORRECTEUR (ou auto-démarrant / self-starting) si tous les états inutilisés finissent par rejoindre le cycle principal au bout d'un nombre fini de coups d'horloge. Si au contraire les états inutilisés bouclent entre eux en formant un cycle parasite isolé, le compteur risque de rester bloqué indéfiniment hors de son cycle nominal !",
            formula: {
              name: 'Vérification de l’état suivant d’un état inutilisé',
              formula: '\\forall S_{\\text{inutilisé}},\\quad \\text{calculer } S^+ \\text{ avec les équations simplifiées de } (D_i \\text{ ou } J_i,K_i)',
              note: 'Pour une bascule JK, on calcule Q_i^+ = J_i · Q̄_i + K̄_i · Q_i en remplaçant les variables par les bits de l’état inutilisé.',
            },
            keyRule:
              'Après avoir simplifié les équations avec des $\\Phi$, vérifie toujours vers quel état suivant $S^+$ évolue chaque état inutilisé : aucun cycle fermé parasite ne doit exister hors du cycle principal.',
            konanTip:
              'À la question « Le compteur est-il auto-démarrant (ou auto-correcteur) ? », injecte les valeurs binaires de chaque état inutilisé dans tes équations finales de $J_i, K_i$ (ou $D_i$), calcule $Q_i^+$ et trace la flèche vers l’état suivant sur le graphe d’états.',
            exercise: {
              id: 'lmd_srit_l1_elecnum_ch3_p3_ex6',
              type: 'mcq',
              prompt:
                'Un compteur synchrone modulo $3$ (cycle principal $00 \\to 01 \\to 10 \\to 00$) a été réalisé avec deux bascules D selon les équations $D_1 = Q_0$ et $D_0 = \\overline{Q_1} \\cdot \\overline{Q_0}$. Si, à la mise sous tension, le compteur démarre dans l’état inutilisé $(Q_1 Q_0) = 11$, que se passe-t-il au premier front actif de l’horloge ?',
              options: [
                'Il passe dans l’état $10$ et rejoint immédiatement le cycle principal (le compteur est auto-correcteur)',
                'Il reste bloqué indéfiniment dans l’état parasite $11$ (le compteur n’est pas auto-correcteur)',
                'Il passe directement à l’état $00$',
                'Il oscille indéfiniment entre les états $11$ et $01$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour l’état présent $(Q_1 = 1, Q_0 = 1)$, on évalue les équations des entrées : $Q_1^+ = D_1 = Q_0 = 1$ et $Q_0^+ = D_0 = \\overline{1} \\cdot \\overline{1} = 0$. Au premier coup d’horloge, l’état $11$ transite donc vers l’état $10$, qui appartient au cycle principal ($10 \\to 00 \\to 01 \\to 10$) : le compteur est bien auto-correcteur.',
              hint: 'Remplace $Q_1 = 1$ et $Q_0 = 1$ dans $D_1 = Q_0$ et $D_0 = \\overline{Q_1}\\cdot\\overline{Q_0}$ pour trouver $(Q_1^+, Q_0^+)$.',
            },
          },
        ],
      }),
    ],
  },
];
