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

export const ALGO_PYTHON_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : FONDAMENTAUX DE PYTHON 3, TYPAGE DYNAMIQUE & CONTRÔLE
  // ==========================================================================
  {
    id: 'lmd_srit_l1_python_ch1',
    subjectId: 'lmd_algo_python',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (1INF3200 : Algorithmique et Python)',
    title: 'Fondamentaux de Python 3, Typage dynamique et Structures de contrôle',
    summary:
      'Types natifs, opérateurs arithmétiques et logiques, indexation et slicing des chaînes de caractères, structures conditionnelles et boucles bornées ou non bornées.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_python_ch1_p1',
        order: 1,
        title: 'Typage dynamique, types natifs et opérateurs arithmétiques',
        summary:
          'Maîtriser les objets primitifs en Python 3 (int, float, bool, str, None), la division entière //, le modulo % et la puissance **.',
        conceptExplanation:
          'Python 3 est un langage à typage dynamique mais fort : une variable n\'a pas de déclaration de type statique, mais tout objet en mémoire possède un type strict qu\'il est interdit de mélanger implicitement de façon incohérente (ex. additionner un str et un int lève TypeError).',
        keyRule:
          'En Python 3, / réalise toujours une division flottante (float), tandis que // réalise la division euclidienne entière (quotient arrondi vers moins l\'infini).',
        workedExample: {
          title: 'Conversion d\'une durée en secondes vers heures, minutes et secondes',
          statement:
            'Soit t = 3725 secondes. Écrire les expressions Python utilisant // et % pour extraire le nombre d\'heures h, de minutes m et de secondes restantes s.',
          methodSteps: [
            '1. Calculer le nombre d\'heures entières : h = t // 3600 = 3725 // 3600 = 1.',
            '2. Extraire le reste de secondes après retrait des heures : reste = t % 3600 = 125.',
            '3. Calculer les minutes entières et secondes : m = reste // 60 = 2 et s = reste % 60 = 5.',
          ],
          conclusion: '3725 secondes correspondent à h = 1 heure, m = 2 minutes et s = 5 secondes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Typage Python',
            stepTheme: 'blue',
            stepTitle: 'Typage dynamique et typage fort en Python 3',
            paragraphText:
              'En Python 3, une variable est une simple référence (étiquette) pointant vers un objet stocké en mémoire. Le typage est dit **dynamique** car le type est associé à l\'objet en mémoire et non au nom de la variable (`x = 10` puis `x = "SRIT"` est valide). En revanche, le typage est **fort** : Python refuse d\'exécuter `"Age: " + 20` sans conversion explicite via `str(20)` ou une f-string `f"Age: {20}"`. Les types scalaires fondamentaux sont `int` (entiers de précision arbitraire), `float` (flottants IEEE 754 sur 64 bits), `bool` (`True` ou `False`), `str` (chaînes Unicode immuables) et `NoneType` (`None`).',
            keyRule:
              'Utiliser la fonction native type(x) ou isinstance(x, int) pour inspecter ou vérifier le type d\'un objet.',
            konanTip:
              'Attention à la casse des booléens et de la valeur nulle en Python : True, False et None prennent toujours une majuscule initiale.',
            exercise: {
              id: 'srit_py_c1_p1_q1',
              type: 'mcq',
              prompt:
                'Que produit l\'exécution de l\'expression `"5" + 3` dans l\'interpréteur Python 3 ?',
              options: [
                'Une exception TypeError car Python est à typage fort',
                'La chaîne de caractères "53" par conversion implicite',
                'L\'entier 8 par conversion implicite',
                'La valeur None sans erreur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Python possède un typage dynamique mais fort : l\'opérateur + entre une chaîne str et un entier int n\'effectue aucune coercition implicite et lève une exception TypeError.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Arithmétique',
            stepTheme: 'violet',
            stepTitle: 'Opérateurs arithmétiques : /, //, % et **',
            paragraphText:
              'Python 3 distingue strictement la division réelle `/` qui renvoie systématiquement un flottant (`8 / 2` vaut `4.0`) et la division entière `//` qui renvoie le quotient entier arrondi à l\'entier inférieur $\\lfloor a/b \\rfloor$. L\'opérateur `%` calcule le reste (modulo) de la division euclidienne, vérifiant toujours l\'invariant fondamental $(a // b) \\times b + (a \\% b) = a$. Enfin, l\'élévation à la puissance s\'écrit `a ** b` (et non `a ^ b`, qui désigne le OU exclusif bit à bit XOR).',
            formula: {
              name: 'Invariant de la division entière en Python',
              formula: 'a = (a \\;//\\; b) \\times b + (a \\;\\%\\; b) \\quad \\text{avec } a // b = \\lfloor a / b \\rfloor',
              note: 'Priorité des opérateurs : ** est évalué avant *, /, //, %, eux-mêmes évalués avant + et -.',
            },
            keyRule:
              'L\'opérateur d\'exponentiation ** est associatif à droite : 2 ** 3 ** 2 est évalué comme 2 ** (3 ** 2) = 2 ** 9 = 512.',
            konanTip:
              'Ne confondez jamais ** (puissance) avec ^ (XOR bit à bit) lors des QCM d\'algorithmique Python !',
            exercise: {
              id: 'srit_py_c1_p1_q2',
              type: 'mcq',
              prompt:
                'Quel est le couple de valeurs `(q, r)` obtenu après `q = 17 // 5` et `r = 17 % 5` en Python 3 ?',
              options: [
                '(3, 2)',
                '(3.4, 2)',
                '(3, 3)',
                '(4, -3)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans la division euclidienne de 17 par 5, on a 17 = 3 × 5 + 2. Le quotient entier 17 // 5 vaut donc 3 et le reste 17 % 5 vaut 2.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège nombres négatifs',
            stepTheme: 'orange',
            stepTitle: 'Division entière et modulo avec des opérandes négatifs',
            paragraphText:
              'Contrairement au langage C qui tronque vers zéro, l\'opérateur `//` de Python arrondit toujours vers **moins l\'infini** ($\\lfloor x \\rfloor$). Ainsi, `-7 / 2` vaut `-3.5`, donc `-7 // 2` vaut `-4` (et non `-3`). Par conséquent, pour respecter l\'identité $(a // b) \\times b + (a \\% b) = a$, le reste `a % b` prend toujours le **même signe que le diviseur $b$**. Avec `a = -7` et `b = 2`, on obtient `-7 % 2 = -7 - (-4 * 2) = 1`.',
            keyRule:
              'En Python, pour b > 0, le résultat de a % b appartient toujours à {0, 1, ..., b - 1}, même si a est négatif.',
            konanTip:
              'C\'est un immense avantage en informatique (notamment pour les indices circulaires et le chiffrement de César) : (-1) % 26 renvoie directement 25.',
            exercise: {
              id: 'srit_py_c1_p1_q3',
              type: 'mcq',
              prompt:
                'Que renvoient respectivement les expressions `-7 // 2` et `-7 % 2` en Python 3 ?',
              options: [
                '-4 et 1',
                '-3 et -1',
                '-3.5 et 1',
                '-4 et -1',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Python arrondit le quotient entier vers moins l\'infini : floor(-3.5) = -4. Le reste vaut alors -7 - (-4 × 2) = -7 + 8 = 1.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Affectations & Conversions',
            stepTheme: 'green',
            stepTitle: 'Affectations multiples, échange en place et conversions de types',
            paragraphText:
              'Python permet l\'affectation parallèle par dépaquetage de tuple : `a, b = 5, 12`. Cette syntaxe autorise l\'échange (swap) de deux variables en une seule ligne `a, b = b, a` sans variable temporaire explicite, car le membre de droite `(b, a)` est intégralement évalué en mémoire avant que les références de gauche ne soient réassignées. Par ailleurs, la fonction `input()` renvoie **toujours une chaîne de caractères (`str`)** : il est impératif de la convertir via `int(input())` ou `float(input())` avant tout calcul mathématique.',
            keyRule:
              'Toujours encapsuler input() dans int(...) ou float(...) lorsqu\'on lit une grandeur numérique au clavier.',
            konanTip:
              'Dans une mise à jour simultanée comme a, b = b, a + b (suite de Fibonacci), a + b utilise l\'ancienne valeur de a !',
            exercise: {
              id: 'srit_py_c1_p1_q4',
              type: 'mcq',
              prompt:
                'Après `a, b = 3, 5` suivi de `a, b = b, a + b`, quelles sont les valeurs finales de `a` et `b` ?',
              options: [
                'a = 5 et b = 8',
                'a = 5 et b = 10',
                'a = 8 et b = 8',
                'a = 3 et b = 8',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Python évalue d\'abord le tuple de droite avec les valeurs courantes : (b, a + b) = (5, 3 + 5) = (5, 8), puis affecte 5 à a et 8 à b.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Logique booléenne',
            stepTheme: 'violet',
            stepTitle: 'Opérateurs logiques, évaluation paresseuse et valeurs Falsy',
            paragraphText:
              'Les connecteurs logiques en Python s\'écrivent en toutes lettres : `not` (négation, priorité la plus haute), `and` (conjonction, priorité intermédiaire) et `or` (disjonction, priorité la plus basse). Python utilise l\'évaluation en **court-circuit** (lazy evaluation) : dans `A and B`, si `A` est faux, `B` n\'est même pas évalué ; dans `A or B`, si `A` est vrai, `B` n\'est pas évalué. En contexte booléen, seuls `False`, `None`, `0`, `0.0` et les collections vides (`""`, `[]`, `()`, `{}`, `set()`) sont considérés comme faux (**Falsy**).',
            keyRule:
              'Ordre de priorité logique : not > and > or. De plus, Python accepte les comparaisons chaînées : 0 <= x < 10.',
            konanTip:
              'Le court-circuit permet d\'écrire `if d != 0 and n / d > 2:` sans jamais risquer une erreur ZeroDivisionError lorsque d vaut 0.',
            exercise: {
              id: 'srit_py_c1_p1_q5',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de l\'expression `not False and False or True` en Python ?',
              options: [
                'True',
                'False',
                'None',
                'SyntaxError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Selon la priorité not > and > or, l\'expression est parenthésée comme ((not False) and False) or True = (True and False) or True = False or True = True.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Synthèse Binaire & Types',
            stepTheme: 'slate',
            stepTitle: 'Représentation des bases numériques et formatage f-strings',
            paragraphText:
              'En réseaux et télécommunications (SRIT), on manipule fréquemment des entiers en binaire (préfixe `0b`), octal (`0o`) ou hexadécimal (`0x`). Les fonctions natives `bin(n)`, `oct(n)` et `hex(n)` convertissent un entier en chaîne préfixée (ex. `hex(255)` renvoie `\'0xff\'`), tandis que `int("ff", 16)` ou `int("1010", 2)` reconvertit une chaîne exprimée en base $b$ vers un entier décimal `int`. Les **f-strings** permettent un formatage direct : `f"{val:.2f}"` affiche un flottant avec 2 décimales et `f"{255:08b}"` affiche l\'octet sur 8 bits.',
            keyRule:
              'int(chaine, base) convertit une représentation textuelle en base b (2 <= b <= 36) vers un entier Python int.',
            konanTip:
              'Pour convertir une adresse IP ou un masque binaire "11111111" en décimal, int("11111111", 2) donne instantanément 255.',
            exercise: {
              id: 'srit_py_c1_p1_q6',
              type: 'mcq',
              prompt:
                'Que renvoie l\'appel `int("1011", 2)` en Python 3 ?',
              options: [
                'L\'entier 11',
                'L\'entier 1011',
                'La chaîne "0b1011"',
                'L\'entier 13',
              ],
              correctAnswerIndex: 0,
              explanation:
                'int("1011", 2) interprète la chaîne "1011" en base 2 : 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_python_ch1_p2',
        order: 2,
        title: 'Chaînes de caractères (str), indexation, slicing et structures conditionnelles',
        summary:
          'Manipuler les séquences textuelles immuables par indexation positive/négative et découpage s[debut:fin:pas], et structurer les branchements if / elif / else.',
        conceptExplanation:
          'Une chaîne str en Python est une séquence ordonnée et immuable de caractères Unicode. L\'extraction de sous-chaînes s\'effectue en temps constant par rapport à la logique d\'écriture grâce à l\'opérateur de tranchage (slicing) s[debut:fin:pas], où la borne de fin est toujours exclue.',
        keyRule:
          'Dans tout slicing s[debut:fin:pas], l\'indice debut est inclus et l\'indice fin est strictement exclu. L\'expression s[::-1] inverse la séquence.',
        workedExample: {
          title: 'Vérification d\'un palindrome et extraction de préfixe en Python',
          statement:
            'Soit s = "RESEAU-SRIT". Que valent s[0:6], s[-4:] et comment tester en une expression si un mot m est un palindrome ?',
          methodSteps: [
            '1. s[0:6] extrait les indices 0 à 5 inclus : "RESEAU".',
            '2. s[-4:] extrait à partir du 4e caractère en partant de la fin jusqu\'au bout : "SRIT".',
            '3. Un mot m est un palindrome si et seulement si m == m[::-1].',
          ],
          conclusion: 'Le slicing négatif et le pas -1 évitent d\'écrire des boucles manuelles verbeuses.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Indexation str',
            stepTheme: 'blue',
            stepTitle: 'Immuabilité des chaînes et double indexation (positive et négative)',
            paragraphText:
              'Une chaîne `s` de longueur $n = \\text{len}(s)$ est indexée de `0` à `n - 1` de gauche à droite, et simultanément de `-1` (dernier caractère) à `-n` (premier caractère) de droite à gauche. Ainsi, pour tout indice valide, `s[-k]` désigne exactement `s[len(s) - k]`. Les objets `str` sont **immuables** (immutable) : tenter de modifier un caractère en place par `s[0] = "A"` déclenche immédiatement une exception `TypeError`. Pour transformer une chaîne, il faut construire une nouvelle chaîne.',
            keyRule:
              'Dans une chaîne s non vide, s[0] est le premier caractère et s[-1] est toujours le dernier caractère.',
            konanTip:
              'Accéder à s[len(s)] provoque une erreur IndexError: string index out of range car le dernier indice positif est len(s) - 1.',
            exercise: {
              id: 'srit_py_c1_p2_q1',
              type: 'mcq',
              prompt:
                'Soit `s = "TELECOM"`. Quelle est la valeur de `s[-2]` et que produit `s[0] = "R"` ?',
              options: [
                's[-2] vaut "O" et s[0] = "R" lève une exception TypeError',
                's[-2] vaut "C" et s devient "RELECOM"',
                's[-2] vaut "M" et s[0] = "R" lève une exception IndexError',
                's[-2] vaut "O" et s devient "RELECOM"',
              ],
              correctAnswerIndex: 0,
              explanation:
                's[-1] est "M", donc s[-2] est l\'avant-dernier caractère "O". Comme le type str est immuable en Python, l\'affectation s[0] = "R" lève TypeError.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Slicing',
            stepTheme: 'green',
            stepTitle: 'Opérateur de découpage (slicing) : s[debut:fin:pas]',
            paragraphText:
              'Le slicing `s[debut:fin:pas]` extrait une nouvelle sous-chaîne commençant à l\'indice `debut` (**inclus**), s\'arrêtant avant l\'indice `fin` (**exclu**), en avançant de `pas` en `pas` (par défaut `pas = 1`). Si `debut` est omis, il vaut `0` (si `pas > 0`) ; si `fin` est omis, le découpage va jusqu\'à l\'extrémité de la chaîne. La longueur d\'une tranche `s[a:b]` avec $0 \\le a \\le b \\le \\text{len}(s)$ est exactement $b - a$. Avec un pas négatif `s[::-1]`, la chaîne est parcourue à l\'envers et donc inversée.',
            formula: {
              name: 'Indices générés par un slicing positif',
              formula: 's[a:b:k] = s[a] + s[a+k] + s[a+2k] + \\dots \\quad (\\text{tant que } a + m\\cdot k < b)',
              note: 'Contrairement à l\'indexation simple s[i], un slicing hors bornes comme s[2:100] ne lève jamais IndexError : il tronque proprement à la fin.',
            },
            keyRule:
              's[:k] donne les k premiers caractères, s[k:] donne le reste à partir de l\'indice k, et s[:k] + s[k:] == s.',
            konanTip:
              'Pour extraire un caractère sur deux à partir du début, utilisez s[::2]. Pour inverser une chaîne, utilisez s[::-1].',
            exercise: {
              id: 'srit_py_c1_p2_q2',
              type: 'mcq',
              prompt:
                'Soit `s = "ABCDEFGH"`. Que renvoie l\'expression `s[1:6:2]` ?',
              options: [
                '"BDF"',
                '"BCE"',
                '"BDFH"',
                '"ACE"',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On part de l\'indice 1 ("B"), jusqu\'à l\'indice 6 exclu ("G"), avec un pas de 2 : on sélectionne les indices 1 ("B"), 3 ("D") et 5 ("F"), soit "BDF".',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Méthodes de str',
            stepTheme: 'violet',
            stepTitle: 'Méthodes fondamentales sur les chaînes : split, join, strip, replace, find',
            paragraphText:
              'Puisque les chaînes sont immuables, leurs méthodes renvoient toujours un **nouvel objet** sans modifier l\'original. `s.strip()` supprime les espaces et retours à la ligne (`\\n`) en début et fin de chaîne. `s.split(sep)` découpe la chaîne selon le séparateur `sep` et renvoie une **liste de sous-chaînes** `list[str]`. Inversement, `sep.join(liste)` concatène efficacement les chaînes d\'une liste en les reliant par `sep`. Enfin, `s.find(sub)` renvoie le premier indice de `sub` (ou `-1` si absente), tandis que l\'opérateur `sub in s` renvoie un booléen.',
            keyRule:
              '"-".join(["192", "168", "1", "1"]) renvoie "192-168-1-1", et "192.168.1.1".split(".") renvoie ["192", "168", "1", "1"].',
            konanTip:
              'Écrire s.upper() ou s.replace("a", "b") seul sur une ligne sans réaffecter `s = s.upper()` ne modifie pas `s` !',
            exercise: {
              id: 'srit_py_c1_p2_q3',
              type: 'mcq',
              prompt:
                'Que renvoie l\'expression `".".join("192-168-0-1".split("-"))` ?',
              options: [
                '"192.168.0.1"',
                '["192", "168", "0", "1"]',
                '"192-168-0-1"',
                'Une erreur AttributeError car join est une méthode de list',
              ],
              correctAnswerIndex: 0,
              explanation:
                '"192-168-0-1".split("-") produit la liste ["192", "168", "0", "1"], puis ".".join(...) réassemble ses éléments avec le point comme séparateur.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Conditionnelles',
            stepTheme: 'blue',
            stepTitle: 'Blocs indentés et structure conditionnelle if / elif / else',
            paragraphText:
              'En Python, la délimitation des blocs d\'instructions ne repose ni sur des accolades `{}` ni sur `begin/end`, mais sur les **deux-points `:`** suivis d\'une **indentation stricte** (convention PEP 8 : 4 espaces par niveau). Dans une structure `if cond1: ... elif cond2: ... else: ...`, les conditions sont testées séquentiellement de haut en bas : dès qu\'une branche est vraie, son bloc est exécuté et **toutes les branches `elif` / `else` suivantes sont ignorées**.',
            visualSchema: {
              type: 'flowchart',
              title: 'Exécution séquentielle d\'un branchement if / elif / else',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { id: 'c1', label: 'Test condition 1 (if)', kind: 'decision', color: 'blue', branchLabel: 'Vrai → Bloc 1 puis Sortie' },
                  { id: 'c2', label: 'Sinon, test condition 2 (elif)', kind: 'decision', color: 'violet', branchLabel: 'Vrai → Bloc 2 puis Sortie' },
                  { id: 'c3', label: 'Sinon (else) : exécution du bloc par défaut', kind: 'process', color: 'orange' },
                  { id: 'end', label: 'Suite du programme (indentation externe)', kind: 'end', color: 'green' },
                ],
              },
            },
            keyRule:
              'Un seul bloc au maximum est exécuté dans une chaîne if / elif / else, contrairement à plusieurs instructions if indépendantes successives.',
            konanTip:
              'Mélanger des tabulations et des espaces ou oublier le caractère `:` en fin de ligne `if` / `elif` / `else` provoque IndentationError ou SyntaxError.',
            exercise: {
              id: 'srit_py_c1_p2_q4',
              type: 'mcq',
              prompt:
                'Soit `x = 15`. Si l\'on exécute `if x > 10: res = "A"` suivi de `elif x > 12: res = "B"` suivi de `else: res = "C"`, quelle est la valeur finale de `res` ?',
              options: [
                '"A"',
                '"B"',
                '"AB"',
                '"C"',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Bien que x > 12 soit aussi vrai pour x = 15, la première condition x > 10 est satisfaite : le bloc du if est exécuté (res = "A") et le elif suivant est court-circuité.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Opérateur ternaire',
            stepTheme: 'green',
            stepTitle: 'Expression conditionnelle en ligne (opérateur ternaire)',
            paragraphText:
              'Lorsqu\'un branchement `if / else` sert uniquement à choisir entre deux valeurs à affecter à une variable ou à retourner dans une fonction, Python propose l\'expression conditionnelle ternaire : `valeur_si_vrai if condition else valeur_si_faux`. Par exemple, `parite = "pair" if n % 2 == 0 else "impair"` ou `abs_x = x if x >= 0 else -x`. Cette expression évalue d\'abord `condition`, puis n\'évalue que la branche retenue.',
            keyRule:
              'Syntaxe de l\'expression ternaire Python : <expr_vrai> if <condition> else <expr_faux> (la clause else est obligatoire).',
            konanTip:
              'Contrairement au C/Java (`cond ? a : b`), Python place la valeur vraie AVANT le mot-clé `if`.',
            exercise: {
              id: 'srit_py_c1_p2_q5',
              type: 'mcq',
              prompt:
                'Laquelle de ces syntaxes affecte correctement à `m` le maximum entre `a` et `b` via l\'opérateur ternaire Python ?',
              options: [
                'm = a if a >= b else b',
                'm = (a >= b) ? a : b',
                'm = if a >= b then a else b',
                'm = a if a >= b',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En Python, l\'expression conditionnelle ternaire s\'écrit obligatoirement `<valeur_si_vrai> if <condition> else <valeur_si_faux>`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Égalité vs Identité',
            stepTheme: 'orange',
            stepTitle: 'Différence cruciale entre == (égalité de valeur) et is (identité mémoire)',
            paragraphText:
              'En Python, l\'opérateur `a == b` teste si les deux objets ont la **même valeur** (appel de la méthode `__eq__`), tandis que `a is b` teste si `a` et `b` pointent vers la **même adresse mémoire** (`id(a) == id(b)`). Deux listes distinctes ayant le même contenu vérifient `[1, 2] == [1, 2]` (`True`), mais `[1, 2] is [1, 2]` vaut `False` car ce sont deux objets alloués séparément en mémoire. L\'opérateur `is` ne doit être utilisé que pour tester un singleton comme `if x is None:` ou `if x is not None:`.',
            keyRule:
              'Toujours utiliser == pour comparer des nombres, chaînes ou listes, et réserver `is` / `is not` au test avec None.',
            konanTip:
              'La recommandation officielle PEP 8 impose d\'écrire `if resultat is None:` plutôt que `if resultat == None:`.',
            exercise: {
              id: 'srit_py_c1_p2_q6',
              type: 'mcq',
              prompt:
                'Soient `L1 = [10, 20]` et `L2 = [10, 20]`. Que valent respectivement `L1 == L2` et `L1 is L2` ?',
              options: [
                'True et False',
                'True et True',
                'False et False',
                'False et True',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L1 et L2 contiennent les mêmes valeurs dans le même ordre, donc L1 == L2 vaut True. En revanche, ce sont deux listes distinctes en mémoire (id(L1) != id(L2)), donc L1 is L2 vaut False.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_python_ch1_p3',
        order: 3,
        title: 'Boucles bornées (for / range), boucles conditionnelles (while) et contrôle de flux',
        summary:
          'Maîtriser le générateur arithmétique range(debut, fin, pas), les boucles while, ainsi que les instructions break, continue et enumerate.',
        conceptExplanation:
          'La boucle for en Python est un itérateur universel qui parcourt les éléments d\'un objet itérable (range, str, list, dict). La boucle while répète un bloc tant qu\'une condition booléenne reste vraie et exige un variant de boucle pour garantir la terminaison.',
        keyRule:
          'range(n) génère les n entiers de 0 à n - 1 inclus ; range(a, b, pas) s\'arrête toujours strictement avant la borne b.',
        workedExample: {
          title: 'Calcul de la somme des entiers pairs entre 2 et 100 inclus',
          statement:
            'Écrire une boucle for utilisant range avec un pas adapté pour calculer la somme S des entiers pairs de 2 à 100 inclus.',
          methodSteps: [
            '1. Initialiser l\'accumulateur S = 0.',
            '2. Parcourir les pairs avec for k in range(2, 101, 2): (la borne de fin 101 est exclue, donc le dernier entier généré est 100).',
            '3. À chaque itération, ajouter S += k. On obtient S = 50 × 102 / 2 = 2550.',
          ],
          conclusion: 'La borne de fin dans range(2, 101, 2) doit être 101 (ou 102) pour inclure 100.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Objet range()',
            stepTheme: 'blue',
            stepTitle: 'Fonctionnement de range(fin), range(debut, fin) et range(debut, fin, pas)',
            paragraphText:
              'La fonction native `range` génère à la volée (sans stocker toute la liste en mémoire) une progression arithmétique d\'entiers. `range(n)` produit les $n$ entiers de `0` à `n - 1`. `range(a, b)` produit les entiers de `a` (**inclus**) à `b - 1` (**borne `b` exclue**), soit $b - a$ valeurs lorsque $b \\ge a$. Enfin, `range(a, b, pas)` incrémente de `pas` à chaque étape : avec un pas négatif comme `range(10, 0, -2)`, il génère la suite décroissante `10, 8, 6, 4, 2` (s\'arrêtant strictement avant `0`).',
            formula: {
              name: 'Nombre d\'itérations d\'une boucle for k in range(a, b, p) (avec p > 0 et b > a)',
              formula: 'N_{\\text{itérations}} = \\left\\lceil \\frac{b - a}{p} \\right\\rceil = (b - a + p - 1) \\;//\\; p',
              note: 'Si a >= b avec un pas p > 0 (ex: range(5, 2)), la séquence est vide et la boucle for effectue 0 itération.',
            },
            keyRule:
              'La borne de fin de range() est TOUJOURS exclue, exactement comme dans le slicing des chaînes et des listes.',
            konanTip:
              'Pour compter à rebours de n jusqu\'à 1 inclus, écrivez `range(n, 0, -1)`. Pour aller jusqu\'à 0 inclus, écrivez `range(n, -1, -1)`.',
            exercise: {
              id: 'srit_py_c1_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle est la liste obtenue par `list(range(10, 2, -3))` en Python 3 ?',
              options: [
                '[10, 7, 4]',
                '[10, 7, 4, 1]',
                '[10, 8, 6, 4]',
                '[]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On part de 10 en retranchant 3 à chaque pas tant que l\'on reste strictement supérieur à la borne de fin 2 : 10, puis 7, puis 4 (le suivant, 1, est <= 2 donc exclu).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Itération Pythonique',
            stepTheme: 'green',
            stepTitle: 'Itération directe, enumerate() et zip()',
            paragraphText:
              'En Python, lorsqu\'on souhaite parcourir les éléments d\'une séquence `seq` (chaîne ou liste), il est considéré comme non-pythonique d\'écrire `for i in range(len(seq)):` si l\'indice `i` n\'est pas utilisé : on écrit directement `for elem in seq:`. Si l\'on a besoin simultanément de l\'indice et de la valeur, la fonction native `enumerate(seq)` fournit des couples `(indice, valeur)` : `for i, val in enumerate(seq):`. Enfin, `zip(A, B)` permet de parcourir deux séquences en parallèle : `for x, y in zip(A, B):`.',
            keyRule:
              'Utiliser `for i, x in enumerate(L):` pour obtenir proprement le couple (indice, élément) à chaque tour de boucle.',
            konanTip:
              'enumerate(L, start=1) permet de numéroter un affichage à partir de 1 au lieu de 0 tout en parcourant L dès son premier élément.',
            exercise: {
              id: 'srit_py_c1_p3_q2',
              type: 'mcq',
              prompt:
                'Que produit `list(enumerate(["A", "B"]))` en Python ?',
              options: [
                '[(0, "A"), (1, "B")]',
                '[("A", 0), ("B", 1)]',
                '[(1, "A"), (2, "B")]',
                '[0, 1]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par défaut, enumerate() génère des tuples (indice, élément) en commençant l\'indexation à 0.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Boucle while',
            stepTheme: 'violet',
            stepTitle: 'Boucle non bornée while, terminaison et invariant de boucle',
            paragraphText:
              'La boucle `while condition:` est utilisée lorsque le nombre d\'itérations n\'est pas connu à l\'avance (ex. algorithme d\'Euclide pour le PGCD, recherche de seuil, saisie contrôlée). Avant chaque tour, `condition` est réévaluée : si elle est vraie, le corps est exécuté ; si elle est fausse dès le départ, le corps n\'est exécuté **aucune fois**. Pour prouver qu\'une boucle `while` ne tourne pas à l\'infini, on exhibe un **variant de boucle** : une quantité entière positive ou nulle qui décroît strictement à chaque itération.',
            keyRule:
              'Toute boucle while doit modifier au moins une variable intervenant dans sa condition d\'arrêt, sous peine de boucle infinie.',
            konanTip:
              'L\'algorithme d\'Euclide en Python s\'écrit en deux lignes : `while b != 0: a, b = b, a % b` (le PGCD est alors `a`).',
            exercise: {
              id: 'srit_py_c1_p3_q3',
              type: 'mcq',
              prompt:
                'Combien de fois le corps de la boucle est-il exécuté dans : `n = 16` suivi de `while n > 1: n = n // 2` ?',
              options: [
                '4 fois',
                '5 fois',
                '8 fois',
                '16 fois',
              ],
              correctAnswerIndex: 0,
              explanation:
                'n prend successivement les valeurs 16 → 8 (tour 1) → 4 (tour 2) → 2 (tour 3) → 1 (tour 4). Lorsque n vaut 1, la condition n > 1 devient fausse et la boucle s\'arrête après 4 tours.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'break & continue',
            stepTheme: 'green',
            stepTitle: 'Contrôle du flux d\'itération : break, continue et clause else de boucle',
            paragraphText:
              'À l\'intérieur d\'une boucle `for` ou `while`, l\'instruction `break` interrompt **immédiatement** la boucle englobante la plus proche et passe à l\'instruction qui suit la boucle. L\'instruction `continue` interrompt uniquement **l\'itération courante** et saute directement au tour de boucle suivant. Particularité de Python : une boucle peut posséder une clause `else:` placée au même niveau d\'indentation que `for`/`while` ; ce bloc `else` n\'est exécuté que si la boucle s\'est terminée normalement (**sans** avoir rencontré de `break`).',
            keyRule:
              'break sort définitivement de la boucle courante ; continue passe immédiatement à l\'itération suivante.',
            konanTip:
              'Dans deux boucles imbriquées, un `break` placé dans la boucle interne ne sort QUE de la boucle interne, pas de la boucle externe.',
            exercise: {
              id: 'srit_py_c1_p3_q4',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de `s` à la fin de :\n`s = 0`\n`for x in range(1, 6):`\n`    if x == 3: continue`\n`    if x == 5: break`\n`    s += x` ?',
              options: [
                '7',
                '10',
                '6',
                '12',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour x=1 : s=1. Pour x=2 : s=3. Pour x=3 : continue saute s+=x. Pour x=4 : s=3+4=7. Pour x=5 : break stoppe immédiatement la boucle. Finalement s = 7.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège variable de boucle',
            stepTheme: 'orange',
            stepTitle: 'Modification de la variable d\'itération dans une boucle for',
            paragraphText:
              'Contrairement à une boucle `for (i = 0; i < n; i++)` en langage C où modifier `i` dans le corps déplace le compteur, dans une boucle Python `for i in range(n):`, la variable `i` est **automatiquement écrasée** au début du tour suivant par la prochaine valeur issue de l\'itérateur `range(n)`. Ainsi, écrire `i = i + 10` à l\'intérieur d\'un bloc `for i in range(5):` n\'accélère ni ne raccourcit la boucle : elle exécutera quand même exactement 5 tours pour `i = 0, 1, 2, 3, 4`.',
            keyRule:
              'Pour contrôler manuellement le pas d\'avancement de l\'indice en fonction des données, il faut utiliser une boucle while et non une boucle for.',
            konanTip:
              'C\'est un piège classique des partiels d\'algorithmique Python : réassigner la variable de boucle dans un `for` n\'a aucun effet sur le tour suivant.',
            exercise: {
              id: 'srit_py_c1_p3_q5',
              type: 'mcq',
              prompt:
                'Combien de tours effectue la boucle :\n`for i in range(5):`\n`    i = i + 10` ?',
              options: [
                '5 tours',
                '1 seul tour',
                '0 tour',
                'Une boucle infinie',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À chaque nouvelle itération, la boucle for réaffecte à i la valeur suivante produite par l\'itérateur range(5) (0, 1, 2, 3, 4), ignorant la modification i = i + 10 effectuée à la fin du tour précédent.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Boucles imbriquées',
            stepTheme: 'slate',
            stepTitle: 'Décompte exact des opérations dans des boucles imbriquées',
            paragraphText:
              'Lorsqu\'une boucle interne est imbriquée dans une boucle externe, le nombre total d\'exécutions du corps interne est la somme, sur toutes les valeurs de l\'indice externe, du nombre d\'itérations internes. Si les bornes sont indépendantes (`for i in range(n): for j in range(m):`), le corps s\'exécute $n \\times m$ fois. Si la borne interne dépend de `i`, par exemple `for i in range(n): for j in range(i):`, le corps s\'exécute $0 + 1 + 2 + \\dots + (n - 1) = \\frac{n(n - 1)}{2}$ fois.',
            formula: {
              name: 'Somme arithmétique d\'une double boucle triangulaire',
              formula: '\\sum_{i=0}^{n-1} i = 0 + 1 + 2 + \\dots + (n-1) = \\frac{n(n-1)}{2}',
              note: 'Si la boucle interne est range(i + 1), la somme vaut 1 + 2 + ... + n = n(n + 1)/2.',
            },
            keyRule:
              'Toujours distinguer une double boucle rectangulaire (n × m tours) d\'une double boucle triangulaire (n(n-1)/2 tours).',
            konanTip:
              'Pour n = 10, `for i in range(10): for j in range(i):` exécute 10 × 9 / 2 = 45 fois le corps interne.',
            exercise: {
              id: 'srit_py_c1_p3_q6',
              type: 'mcq',
              prompt:
                'Combien de fois l\'instruction `cpt += 1` est-elle exécutée dans :\n`cpt = 0`\n`for i in range(6):`\n`    for j in range(i):`\n`        cpt += 1` ?',
              options: [
                '15 fois',
                '36 fois',
                '21 fois',
                '12 fois',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour i allant de 0 à 5, la boucle interne range(i) s\'exécute 0 + 1 + 2 + 3 + 4 + 5 = 6 × 5 / 2 = 15 fois.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : STRUCTURES DE DONNÉES, COMPLEXITÉ, RECHERCHE ET TRIS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_python_ch2',
    subjectId: 'lmd_algo_python',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (1INF3200 : Algorithmique et Python)',
    title: 'Structures de données Python, Complexité algorithmique, Recherche et Tris',
    summary:
      'Listes mutables et compréhensions, tuples, dictionnaires et ensembles ; analyse de complexité en grand O, recherche dichotomique et algorithmes de tri classiques et récursifs.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_python_ch2_p1',
        order: 1,
        title: 'Collections natives Python : list, tuple, dict et set',
        summary:
          'Comparer mutabilité, performances d\'accès et méthodes des listes, tuples, tables de hachage (dict) et ensembles (set), et maîtriser les compréhensions.',
        conceptExplanation:
          'Python fournit quatre conteneurs fondamentaux : list (tableau dynamique mutable indexé), tuple (séquence immuable), dict (table de hachage associant des clés immuables à des valeurs en temps moyen O(1)) et set (ensemble non ordonné d\'éléments uniques hachables).',
        keyRule:
          'Une simple affectation L2 = L1 ne copie pas une liste : elle crée un alias vers le même objet en mémoire. Utiliser L1.copy() ou L1[:] pour une copie superficielle.',
        workedExample: {
          title: 'Filtrage et transformation par compréhension de liste',
          statement:
            'Écrire en une seule ligne une compréhension de liste produisant les carrés des entiers pairs compris entre 0 et 10 inclus.',
          methodSteps: [
            '1. Parcourir x dans range(11) pour couvrir 0 à 10 inclus.',
            '2. Filtrer les pairs avec la condition if x % 2 == 0.',
            '3. Appliquer l\'expression x ** 2 : [x ** 2 for x in range(11) if x % 2 == 0].',
          ],
          conclusion: 'On obtient directement la liste [0, 4, 16, 36, 64, 100].',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Listes (list)',
            stepTheme: 'blue',
            stepTitle: 'Tableaux dynamiques mutables (list) et complexité de leurs méthodes',
            paragraphText:
              'En Python, le type `list` (noté `[e0, e1, ...]`) est implémenté en C sous forme d\'un **tableau dynamique de pointeurs**, et non d\'une liste chaînée. L\'accès par indice `L[i]` et la modification `L[i] = x` s\'effectuent donc en temps constant $\\mathcal{O}(1)$. L\'ajout en fin `L.append(x)` et le retrait du dernier élément `L.pop()` sont également en $\\mathcal{O}(1)$ amorti. En revanche, insérer ou supprimer au début (`L.insert(0, x)` ou `L.pop(0)`) nécessite de décaler tous les éléments suivants en mémoire et coûte $\\mathcal{O}(n)$.',
            keyRule:
              'L.append(x) ajoute un seul élément x en fin de liste, tandis que L.extend(iterable) ajoute tous les éléments de l\'itérable.',
            konanTip:
              'Attention : `L.sort()` et `L.reverse()` modifient la liste en place et renvoient `None` ! Pour obtenir une nouvelle liste triée sans toucher à `L`, utilisez `sorted(L)`.',
            exercise: {
              id: 'srit_py_c2_p1_q1',
              type: 'mcq',
              prompt:
                'Soit `L = [3, 1, 2]`. Quelle est la valeur de `X` après l\'exécution de `X = L.sort()` ?',
              options: [
                'None (car L.sort() trie la liste L en place et renvoie None)',
                '[1, 2, 3]',
                '[3, 2, 1]',
                'Une exception TypeError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La méthode L.sort() opère une modification en place (in-place) sur L et retourne None. Pour récupérer une nouvelle liste triée dans X, il faut écrire X = sorted(L).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Aliasing & Mutabilité',
            stepTheme: 'orange',
            stepTitle: 'Partage de référence (aliasing) et copie superficielle vs profonde',
            paragraphText:
              'Lorsqu\'on exécute `B = A` sur une liste `A = [1, 2, 3]`, Python ne duplique pas le tableau : `A` et `B` deviennent deux références pointant vers **la même liste en mémoire** (`A is B` est `True`). Toute mutation via `B.append(4)` modifie donc aussi `A` ! Pour créer une copie indépendante d\'une liste à une dimension, on utilise une **copie superficielle** (shallow copy) : `B = A[:]` ou `B = A.copy()` ou `B = list(A)`. Pour une matrice (liste de listes), il faut `copy.deepcopy(A)` ou `[ligne[:] for ligne in A]`.',
            keyRule:
              'Ne jamais initialiser une matrice 2D par `M = [[0] * p] * n` car les n lignes seraient des alias de la même sous-liste !',
            konanTip:
              'Pour créer une matrice de n lignes et p colonnes de zéros sans aliasing, écrivez toujours `M = [[0] * p for _ in range(n)]`.',
            exercise: {
              id: 'srit_py_c2_p1_q2',
              type: 'mcq',
              prompt:
                'Soit `A = [10, 20]`, puis `B = A`, puis `C = A[:]`, et enfin `B.append(30)`. Que valent `A` et `C` ?',
              options: [
                'A vaut [10, 20, 30] et C vaut [10, 20]',
                'A vaut [10, 20] et C vaut [10, 20]',
                'A vaut [10, 20, 30] et C vaut [10, 20, 30]',
                'A vaut [10, 20] et C vaut [10, 20, 30]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'B = A crée un alias vers la même liste que A, donc B.append(30) modifie A en [10, 20, 30]. En revanche, C = A[:] a créé une copie superficielle indépendante avant l\'ajout, donc C reste [10, 20].',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Compréhensions',
            stepTheme: 'green',
            stepTitle: 'Compréhensions de listes, de dictionnaires et d\'ensembles',
            paragraphText:
              'La **compréhension de liste** (list comprehension) offre une syntaxe déclarative, concise et plus rapide qu\'une boucle `for` avec `.append()` pour construire une liste : `[f(x) for x in iterable if condition]`. Si l\'on souhaite appliquer un `if / else` de transformation sur chaque élément (sans filtrer la taille), l\'opérateur ternaire se place **avant** le `for` : `[x if x > 0 else 0 for x in L]`. La même syntaxe existe pour les ensembles `{f(x) for x in L}` et les dictionnaires `{k: v for k, v in pairs}`.',
            formula: {
              name: 'Structure générale d\'une compréhension de liste avec filtre',
              formula: '\\text{resultat} = [\\; \\text{expression}(x) \\;\\; \\mathbf{for} \\;\\; x \\;\\; \\mathbf{in} \\;\\; \\text{source} \\;\\; \\mathbf{if} \\;\\; \\text{predicat}(x) \\;]',
              note: 'Le filtre `if predicat(x)` à droite du `for` sélectionne les éléments ; un ternaire `a if cond else b` à gauche du `for` transforme chaque élément.',
            },
            keyRule:
              'Filtre seul → `if` après le `for`. Transformation conditionnelle `if/else` → opérateur ternaire avant le `for`.',
            konanTip:
              'Attention : `(x**2 for x in range(10))` avec des parenthèses ne crée PAS un tuple en compréhension, mais un objet générateur (`generator`) !',
            exercise: {
              id: 'srit_py_c2_p1_q3',
              type: 'mcq',
              prompt:
                'Que vaut la liste `L = [2 * x for x in range(5) if x % 2 == 1]` ?',
              options: [
                '[2, 6]',
                '[0, 4, 8]',
                '[1, 3]',
                '[2, 6, 10]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans range(5) = {0, 1, 2, 3, 4}, seuls x = 1 et x = 3 vérifient x % 2 == 1. On calcule alors 2 * x pour chacun, ce qui donne [2, 6].',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Tuples immuables',
            stepTheme: 'blue',
            stepTitle: 'Tuples (tuple), immuabilité, dépaquetage et hachabilité',
            paragraphText:
              'Un `tuple` (noté `(e0, e1, ...)` ou simplement `e0, e1`) est une séquence ordonnée **immuable**. Comme pour `str`, on peut l\'indexer (`t[i]`), le découper par slicing (`t[a:b]`) et connaître sa taille (`len(t)`), mais on ne peut ni modifier, ni ajouter, ni supprimer un élément après sa création. Grâce à leur immuabilité, les tuples (ne contenant que des éléments immuables) sont **hachables** (hashable) : ils peuvent servir de **clés dans un dictionnaire** `dict` ou d\'éléments dans un `set`, ce qui est strictement interdit aux listes.',
            keyRule:
              'Pour écrire un tuple à un seul élément (singleton), la virgule finale est obligatoire : `t = (42,)` (car `(42)` est juste l\'entier 42 entre parenthèses).',
            konanTip:
              'Lorsqu\'une fonction Python renvoie plusieurs valeurs par `return q, r`, elle renvoie en réalité un unique objet de type `tuple` `(q, r)`.',
            exercise: {
              id: 'srit_py_c2_p1_q4',
              type: 'mcq',
              prompt:
                'Quel est le type respectif de `a = (5)` et de `b = (5,)` en Python 3 ?',
              options: [
                'a est un int et b est un tuple',
                'a et b sont tous deux des tuples',
                'a est un tuple et b provoque une SyntaxError',
                'a est un int et b est une list',
              ],
              correctAnswerIndex: 0,
              explanation:
                'C\'est la virgule qui construit un tuple en Python : (5) est une simple expression parenthésée de type int, tandis que (5,) est un tuple à 1 élément.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Dictionnaires (dict)',
            stepTheme: 'violet',
            stepTitle: 'Tables de hachage (dict) : clés uniques, accès en O(1) et parcours',
            paragraphText:
              'Un dictionnaire `d = {"host": "10.0.0.1", "port": 8080}` est une **table de hachage** associant des **clés uniques et immuables** (`str`, `int`, `tuple`...) à des valeurs quelconques. La recherche `k in d`, la lecture `d[k]`, l\'insertion `d[k] = v` et la suppression `del d[k]` s\'exécutent en **temps constant moyen $\\mathcal{O}(1)$**. Si la clé `k` est absente, `d[k]` lève une exception `KeyError`, tandis que `d.get(k, defaut)` renvoie proprement `defaut` (ou `None` par défaut) sans erreur.',
            keyRule:
              'd.keys() parcourt les clés, d.values() les valeurs, et `for k, v in d.items():` parcourt simultanément les couples (clé, valeur).',
            konanTip:
              'Le test `if x in d:` sur un dictionnaire vérifie toujours si `x` appartient aux **clés** de `d` (en temps O(1)), et non aux valeurs !',
            exercise: {
              id: 'srit_py_c2_p1_q5',
              type: 'mcq',
              prompt:
                'Soit `d = {"a": 1, "b": 2}`. Que renvoie l\'appel `d.get("c", 0)` ?',
              options: [
                '0',
                'None',
                'Une exception KeyError',
                'False',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La méthode d.get(cle, valeur_defaut) renvoie la valeur associée à cle si elle existe dans le dictionnaire, et renvoie valeur_defaut (ici 0) sans lever KeyError si la clé est absente.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Ensembles (set)',
            stepTheme: 'slate',
            stepTitle: 'Ensembles (set) : dédoublonnage et opérations ensemblistes en O(1)',
            paragraphText:
              'Un ensemble `s = {1, 2, 3}` (ou `set()` pour l\'ensemble vide, car `{}` crée un dictionnaire vide !) est une collection non ordonnée d\'éléments **uniques et hachables**. Convertir une liste en ensemble par `set(L)` élimine instantanément tous les doublons en temps linéaire $\\mathcal{O}(n)$, et le test d\'appartenance `x in s` s\'effectue en temps constant moyen $\\mathcal{O}(1)$ (contre $\\mathcal{O}(n)$ dans une `list`). Les ensembles supportent les opérations mathématiques : union `A | B`, intersection `A & B`, différence `A - B` et différence symétrique `A ^ B`.',
            keyRule:
              'L\'ensemble vide se note obligatoirement `set()`, tandis que `{}` désigne le dictionnaire vide `dict`.',
            konanTip:
              'Besoin de vérifier des milliers de fois si un identifiant appartient à une liste noire ? Stockez-la dans un `set` pour passer de O(n) à O(1) par requête.',
            exercise: {
              id: 'srit_py_c2_p1_q6',
              type: 'mcq',
              prompt:
                'Soient `A = {1, 2, 3, 4}` et `B = {3, 4, 5}`. Que valent respectivement `A & B` et `A - B` ?',
              options: [
                '{3, 4} et {1, 2}',
                '{1, 2, 3, 4, 5} et {1, 2}',
                '{3, 4} et {1, 2, 5}',
                'TypeError car & et - ne s\'appliquent pas aux ensembles',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sur des objets de type set, A & B calcule l\'intersection {3, 4} et A - B calcule la différence ensembliste (éléments de A qui ne sont pas dans B), soit {1, 2}.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_python_ch2_p2',
        order: 2,
        title: 'Complexité algorithmique, recherche séquentielle et recherche dichotomique',
        summary:
          'Évaluer la complexité temporelle et spatiale asymptotique en notation de Landau O(.) et comparer la recherche linéaire O(n) à la recherche dichotomique O(log n).',
        conceptExplanation:
          'La complexité temporelle mesure l\'ordre de grandeur du nombre d\'opérations élémentaires en fonction de la taille n des données lorsque n tend vers l\'infini. Sur un tableau trié, la recherche dichotomique divise l\'espace de recherche par 2 à chaque étape, réduisant le coût de O(n) à O(log2 n).',
        keyRule:
          'La recherche dichotomique (binary search) exige impérativement que le tableau soit préalablement TRIÉ et s\'exécute en O(log n) au pire des cas.',
        workedExample: {
          title: 'Nombre maximal de comparaisons d\'une recherche dichotomique',
          statement:
            'Dans un annuaire trié contenant n = 1 000 000 d\'abonnés, combien d\'étapes au maximum la recherche dichotomique nécessite-t-elle pour trouver un numéro ou prouver son absence ?',
          methodSteps: [
            '1. À chaque étape, la taille de la zone de recherche est divisée par 2.',
            '2. Le nombre maximal d\'étapes est floor(log2(n)) + 1.',
            '3. Or 2^19 = 524 288 et 2^20 = 1 048 576 >= 1 000 000, donc au plus 20 étapes suffisent (contre 1 000 000 en recherche séquentielle).',
          ],
          conclusion: 'En au plus 20 comparaisons, la dichotomie conclut sur 1 million d\'entrées.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Notation Grand O',
            stepTheme: 'blue',
            stepTitle: 'Complexité temporelle et spatiale asymptotique : hiérarchie des classes',
            paragraphText:
              'La **complexité temporelle** $T(n)$ d\'un algorithme compte le nombre d\'opérations élémentaires (affectations, comparaisons, opérations arithmétiques) en fonction de la taille $n$ de l\'entrée, dans le **pire des cas** (ou en moyenne). La notation de Landau $\\mathcal{O}(g(n))$ ne conserve que le terme dominant en ignorant les constantes multiplicatives : $3n^2 + 15n + 8 = \\mathcal{O}(n^2)$. La **complexité spatiale** mesure la mémoire auxiliaire allouée. De la plus efficace à la plus coûteuse, les classes usuelles s\'ordonnent ainsi : $\\mathcal{O}(1) \\prec \\mathcal{O}(\\log n) \\prec \\mathcal{O}(n) \\prec \\mathcal{O}(n\\log n) \\prec \\mathcal{O}(n^2) \\prec \\mathcal{O}(2^n)$.',
            visualSchema: {
              type: 'bar_chart',
              title: 'Nombre d\'opérations pour n = 1 024 selon la classe de complexité (échelle comparative)',
              barChart: {
                yLabel: 'Coût relatif',
                unit: ' op.',
                bars: [
                  { label: 'O(1)', value: 1, color: 'green', annotation: '1 op' },
                  { label: 'O(log₂ n)', value: 10, color: 'blue', annotation: '10 op' },
                  { label: 'O(n)', value: 1024, color: 'violet', annotation: '1 024 op' },
                  { label: 'O(n log₂ n)', value: 10240, color: 'orange', annotation: '10 240 op' },
                ],
              },
            },
            keyRule:
              'Deux boucles successives additionnent leurs coûts : O(n) + O(n²) = O(n²). Deux boucles imbriquées multiplient leurs coûts : n × n = O(n²).',
            konanTip:
              'Dès qu\'une variable de boucle est multipliée ou divisée par une constante k >= 2 à chaque tour (`while n > 1: n //= 2`), la boucle s\'exécute en O(log n) !',
            exercise: {
              id: 'srit_py_c2_p2_q1',
              type: 'mcq',
              prompt:
                'Quel est l\'ordre de croissance correct des classes de complexité, de la plus rapide à la plus lente pour $n$ grand ?',
              options: [
                'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n)',
                'O(1) < O(n) < O(log n) < O(n log n) < O(n²) < O(2^n)',
                'O(log n) < O(1) < O(n) < O(n²) < O(n log n) < O(2^n)',
                'O(1) < O(log n) < O(n) < O(n²) < O(2^n) < O(n log n)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour n tendant vers l\'infini, on a toujours 1 << log(n) << n << n log(n) << n² << 2^n.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Recherche linéaire',
            stepTheme: 'green',
            stepTitle: 'Recherche séquentielle (linéaire) dans un tableau quelconque',
            paragraphText:
              'La **recherche séquentielle** parcourt les éléments de la liste `L` un par un de l\'indice `0` à `n - 1` jusqu\'à trouver la cible `x` (auquel cas elle renvoie son indice `i` ou `True`) ou atteindre la fin de la liste (elle renvoie `-1` ou `False`). C\'est l\'algorithme exécuté en interne par l\'opérateur `x in L` ou la méthode `L.index(x)` sur une `list` Python. Dans le meilleur des cas (`x == L[0]`), elle fait $1$ comparaison soit $\\mathcal{O}(1)$ ; dans le **pire des cas** (`x` absent ou en dernière position) et en moyenne, elle effectue $\\mathcal{O}(n)$ comparaisons.',
            keyRule:
              'Sur une liste non triée de taille n, aucune méthode de recherche ne peut faire mieux que O(n) dans le pire des cas.',
            konanTip:
              'Attention dans une boucle de recherche : ne mettez jamais `else: return False` à l\'intérieur du `for` ! Le `return False` doit être placé APRÈS la fin complète de la boucle `for`.',
            exercise: {
              id: 'srit_py_c2_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle est la complexité temporelle dans le pire des cas du test `x in L` lorsque `L` est une `list` Python de $n$ éléments et lorsque `S` est un `set` de $n$ éléments ?',
              options: [
                'O(n) pour la list L et O(1) en moyenne pour le set S',
                'O(1) pour la list L et O(n) pour le set S',
                'O(log n) pour la list L et O(1) pour le set S',
                'O(n) pour les deux structures',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une list est parcourue séquentiellement élément par élément en O(n), tandis qu\'un set utilise une table de hachage permettant un accès direct en O(1) en moyenne.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Dichotomie',
            stepTheme: 'violet',
            stepTitle: 'Principe et implémentation de la recherche dichotomique (Binary Search)',
            paragraphText:
              'Sur une liste `L` **préalablement triée par ordre croissant**, la recherche dichotomique maintient deux bornes d\'indices `g = 0` (gauche) et `d = len(L) - 1` (droite). Tant que `g <= d`, on calcule l\'indice médian `m = (g + d) // 2` et on compare `L[m]` à la cible `x` : si `L[m] == x`, on a trouvé et on renvoie `m` ; si `L[m] < x`, la cible ne peut être que dans la moitié droite donc on pose `g = m + 1` ; sinon (`L[m] > x`), on pose `d = m - 1`. Si la boucle se termine avec `g > d`, l\'élément est absent et on renvoie `-1`.',
            formula: {
              name: 'Équation de récurrence et complexité de la recherche dichotomique',
              formula: 'T(n) = T(\\lfloor n/2 \\rfloor) + \\mathcal{O}(1) \\implies T(n) = \\mathcal{O}(\\log_2 n)',
              note: 'En espace mémoire, la version itérative avec deux indices g et d utilise un espace constant O(1).',
            },
            keyRule:
              'La mise à jour des bornes doit impérativement exclure le milieu m déjà testé : `g = m + 1` ou `d = m - 1` (sinon risque de boucle infinie lorsque g == d).',
            konanTip:
              'Le module standard `bisect` de Python (`bisect_left`, `bisect_right`) implémente nativement la recherche dichotomique en C.',
            exercise: {
              id: 'srit_py_c2_p2_q3',
              type: 'mcq',
              prompt:
                'On recherche `x = 25` par dichotomie dans `L = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]` (indices 0 à 9). Quelles sont les valeurs successives de l\'indice médian `m = (g + d) // 2` examinées ?',
              options: [
                'm = 4 (L[4]=16), puis m = 7 (L[7]=56), puis m = 5 (L[5]=23), puis m = 6 (L[6]=38) → absent',
                'm = 5 (L[5]=23), puis m = 7 (L[7]=56), puis m = 6 (L[6]=38) → absent',
                'm = 4 (L[4]=16), puis m = 6 (L[6]=38), puis m = 5 (L[5]=23) → absent',
                'm = 0, 1, 2, 3, 4, 5, 6',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Départ g=0, d=9 → m=(0+9)//2=4 (L[4]=16 < 25) → g=5, d=9 → m=(5+9)//2=7 (L[7]=56 > 25) → g=5, d=6 → m=(5+6)//2=5 (L[5]=23 < 25) → g=6, d=6 → m=6 (L[6]=38 > 25) → d=5 < g, arrêt.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Pièges de complexité',
            stepTheme: 'orange',
            stepTitle: 'Opérations cachées en O(n) dans les boucles Python',
            paragraphText:
              'Un piège fréquent lors de l\'analyse d\'un script Python consiste à oublier que certaines instructions écrites en une seule ligne coûtent en réalité $\\mathcal{O}(n)$ et non $\\mathcal{O}(1)$. Par exemple, un slicing `L[1:]` recopie $n - 1$ éléments en mémoire ($\\mathcal{O}(n)$), un test `if x in L:` sur une liste parcourt jusqu\'à $n$ éléments ($\\mathcal{O}(n)$), et `L.pop(0)` décale $n - 1$ éléments ($\\mathcal{O}(n)$). Placée à l\'intérieur d\'une boucle `for` de $n$ tours, chacune de ces opérations transforme une boucle d\'apparence linéaire en un algorithme **quadratique $\\mathcal{O}(n^2)$** !',
            keyRule:
              'En Python, `x in list`, `L.insert(0, x)`, `L.pop(0)` et la tranche `L[a:b]` ne sont PAS en O(1) mais proportionnels au nombre d\'éléments parcourus ou copiés.',
            konanTip:
              'Dans une version récursive de la dichotomie, passer une tranche `dichotomie(L[:m], x)` copie la sous-liste en O(n) et dégrade la complexité totale en O(n) ! Il faut passer les indices `(L, x, g, d)`.',
            exercise: {
              id: 'srit_py_c2_p2_q4',
              type: 'mcq',
              prompt:
                'Quelle est la complexité temporelle de la boucle `while L: L.pop(0)` sur une liste Python `L` de taille $n$ ?',
              options: [
                'O(n²) car chaque pop(0) décale tous les éléments restants de la liste',
                'O(n) car pop(0) s\'exécute en temps constant O(1)',
                'O(n log n)',
                'O(1)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Retirer le premier élément d\'une list Python avec L.pop(0) oblige à décaler les k-1 éléments suivants en mémoire. Répété n fois, cela coûte (n-1) + (n-2) + ... + 1 = n(n-1)/2 = O(n²). (Pour une file en O(1), on utilise collections.deque et popleft()).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Analyse de boucles',
            stepTheme: 'slate',
            stepTitle: 'Calcul de la complexité d\'une boucle logarithmique ou mixte',
            paragraphText:
              'Considérons deux boucles imbriquées où la boucle externe `for i in range(n):` effectue $n$ tours, et la boucle interne est `j = 1; while j < n: j = j * 2`. Dans la boucle interne, `j` prend les valeurs $1, 2, 4, 8, \\dots, 2^k$ jusqu\'à dépasser $n$, ce qui nécessite $k = \\lceil \\log_2 n \\rceil$ itérations. Comme la boucle externe répète ce processus $n$ fois de manière indépendante, le nombre total d\'itérations est le produit $n \\times \\log_2 n$, soit une complexité temporelle en $\\mathcal{O}(n \\log n)$.',
            keyRule:
              'Boucle à pas additif (`j += c`) → O(n) tours. Boucle à pas multiplicatif (`j *= 2` ou `j //= 2`) → O(log n) tours.',
            konanTip:
              'Attention au cas `j = 1; while j < n: j *= 2` suivie (et non imbriquée) d\'une boucle `for i in range(n):` : là on additionne $\\mathcal{O}(\\log n) + \\mathcal{O}(n) = \\mathcal{O}(n)$.',
            exercise: {
              id: 'srit_py_c2_p2_q5',
              type: 'mcq',
              prompt:
                'Quelle est la complexité temporelle du fragment suivant :\n`for i in range(n):`\n`    k = n`\n`    while k > 1:`\n`        k = k // 3` ?',
              options: [
                'O(n log n)',
                'O(n²)',
                'O(log n)',
                'O(n)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La boucle interne divise k par 3 à chaque pas, elle s\'exécute donc en log₃(n) = O(log n) tours. Comme elle est imbriquée dans une boucle for de n tours, la complexité totale est O(n log n).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Deux pointeurs & Hachage',
            stepTheme: 'green',
            stepTitle: 'Optimisation d\'un algorithme de O(n²) vers O(n) par table de hachage',
            paragraphText:
              'Un problème classique d\'algorithmique consiste à déterminer s\'il existe deux éléments dans une liste `L` dont la somme vaut une cible `S` (problème *Two-Sum*), ou à détecter la présence de doublons. L\'approche naïve à deux boucles imbriquées teste toutes les paires `(L[i], L[j])` en $\\mathcal{O}(n^2)$. En mémorisant les éléments déjà vus dans un ensemble `vus = set()`, il suffit pour chaque `x` de `L` de tester en $\\mathcal{O}(1)$ si `S - x in vus`, puis d\'ajouter `vus.add(x)`. Le temps d\'exécution chute alors à **$\\mathcal{O}(n)$ en moyenne**, au prix d\'un espace mémoire $\\mathcal{O}(n)$.',
            keyRule:
              'Remplacer une boucle interne de recherche linéaire O(n) par une consultation dans un dict ou un set O(1) réduit la complexité globale de O(n²) à O(n).',
            konanTip:
              'C\'est le compromis temps-mémoire (time-space trade-off) fondamental en ingénierie logicielle : consommer O(n) de RAM pour gagner un facteur n en temps CPU.',
            exercise: {
              id: 'srit_py_c2_p2_q6',
              type: 'mcq',
              prompt:
                'Quelle est la complexité temporelle moyenne du test `len(L) != len(set(L))` pour détecter si une liste `L` de $n$ entiers contient au moins un doublon ?',
              options: [
                'O(n)',
                'O(n²)',
                'O(n log n)',
                'O(1)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La construction de set(L) insère les n éléments un par un dans une table de hachage en O(1) moyen par élément, soit O(n) au total, puis len() s\'exécute en O(1).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_python_ch2_p3',
        order: 3,
        title: 'Algorithmes de tri : sélection, insertion, tri fusion et tri rapide',
        summary:
          'Maîtriser le principe, les invariants, la stabilité et les complexités (meilleur, moyen, pire cas) des tris quadratiques O(n²) et des tris « diviser pour régner » O(n log n).',
        conceptExplanation:
          'Les tris élémentaires par sélection et par insertion fonctionnent en place en O(n²) dans le pire des cas (mais le tri par insertion descend à O(n) sur un tableau déjà trié). Les tris par la méthode « Diviser pour Régner » (tri fusion MergeSort et tri rapide QuickSort) atteignent la borne optimale O(n log n) des tris par comparaisons.',
        keyRule:
          'Le tri fusion garantit O(n log n) dans TOUS les cas (même au pire), tandis que le tri rapide est en O(n log n) en moyenne mais se dégrade en O(n²) au pire des cas si le pivot est mal choisi.',
        workedExample: {
          title: 'Trace d\'exécution du tri par insertion',
          statement:
            'Soit le tableau L = [7, 3, 5, 2]. Donner l\'état du tableau après chacune des 3 étapes d\'insertion (indices i = 1, 2, 3).',
          methodSteps: [
            '1. i = 1 (clé = 3) : on décale 7 vers la droite et on insère 3 en position 0 → [3, 7, 5, 2].',
            '2. i = 2 (clé = 5) : 7 > 5 est décalé, 3 <= 5 donc on insère 5 en position 1 → [3, 5, 7, 2].',
            '3. i = 3 (clé = 2) : 7, 5 et 3 sont décalés vers la droite et 2 est inséré en tête → [2, 3, 5, 7].',
          ],
          conclusion: 'À la fin de l\'étape i, le préfixe L[0..i] est toujours trié (invariant du tri par insertion).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Tri par sélection',
            stepTheme: 'green',
            stepTitle: 'Tri par sélection du minimum (Selection Sort) : invariant et complexité',
            paragraphText:
              'À chaque étape `i` allant de `0` à `n - 2`, le **tri par sélection** recherche l\'indice `idx_min` du plus petit élément dans la sous-liste non triée `L[i..n-1]`, puis l\'échange avec `L[i]` (`L[i], L[idx_min] = L[idx_min], L[i]`). Son invariant de boucle est qu\'au début du tour `i`, les `i` plus petits éléments de la liste sont déjà placés et triés dans `L[0..i-1]`. Comme la recherche du minimum parcourt systématiquement les $n - i$ éléments restants **quel que soit l\'ordre initial des données**, le nombre de comparaisons vaut toujours $\\frac{n(n-1)}{2}$.',
            keyRule:
              'Le tri par sélection a une complexité temporelle de O(n²) dans TOUS les cas (meilleur, moyen et pire), mais n\'effectue qu\'au plus n - 1 échanges.',
            konanTip:
              'Même si la liste fournie est déjà parfaitement triée, le tri par sélection effectue quand même n(n-1)/2 comparaisons !',
            exercise: {
              id: 'srit_py_c2_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle est la complexité temporelle du tri par sélection dans le **meilleur des cas** (lorsque le tableau est déjà trié) ?',
              options: [
                'O(n²) car il parcourt toujours tout le reste du tableau pour chercher le minimum',
                'O(n) car il s\'arrête dès le premier parcours',
                'O(n log n)',
                'O(log n)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Pour chaque position i, la boucle interne du tri par sélection compare tous les éléments de i+1 à n-1 pour vérifier où est le minimum, effectuant toujours n(n-1)/2 comparaisons, soit O(n²).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Tri par insertion',
            stepTheme: 'green',
            stepTitle: 'Tri par insertion (Insertion Sort) : adaptativité et stabilité',
            paragraphText:
              'Le **tri par insertion** parcourt le tableau pour `i` allant de `1` à `n - 1` : il mémorise `cle = L[i]` et décale vers la droite tous les éléments du préfixe déjà trié `L[0..i-1]` qui sont strictement supérieurs à `cle` (`while j >= 0 and L[j] > cle:`), avant d\'insérer `cle` à sa place. Dans le **pire des cas** (tableau trié en ordre décroissant), il effectue $\\frac{n(n-1)}{2}$ comparaisons soit $\\mathcal{O}(n^2)$. Mais dans le **meilleur des cas** (tableau déjà trié ou quasi-trié), la boucle `while` s\'arrête immédiatement à chaque tour : la complexité devient **linéaire $\\mathcal{O}(n)$** !',
            keyRule:
              'Le tri par insertion est stable (il préserve l\'ordre relatif des éléments égaux), s\'exécute en place O(1) en mémoire, et vaut O(n) au meilleur cas / O(n²) au pire cas.',
            konanTip:
              'C\'est grâce à cette performance O(n) sur les données presque triées que l\'algorithme Timsort de Python utilise le tri par insertion sur les petits blocs !',
            exercise: {
              id: 'srit_py_c2_p3_q2',
              type: 'mcq',
              prompt:
                'Dans quelle configuration d\'entrée le tri par insertion atteint-il son **pire des cas** $\\mathcal{O}(n^2)$ et son **meilleur des cas** $\\mathcal{O}(n)$ (pour un tri par ordre croissant) ?',
              options: [
                'Pire cas : tableau trié en ordre décroissant ; Meilleur cas : tableau déjà trié en ordre croissant',
                'Pire cas : tableau déjà trié en ordre croissant ; Meilleur cas : tableau aléatoire',
                'Pire cas et meilleur cas valent tous deux O(n²) quelle que soit l\'entrée',
                'Pire cas : tableau constant ; Meilleur cas : tableau trié en ordre décroissant',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si le tableau est trié en ordre décroissant, chaque nouvel élément doit remonter jusqu\'à l\'indice 0 (i comparaisons à l\'étape i, soit O(n²)). S\'il est déjà trié en ordre croissant, chaque élément ne fait qu\'une seule comparaison avec son voisin de gauche, soit n-1 comparaisons = O(n).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Tri fusion (MergeSort)',
            stepTheme: 'violet',
            stepTitle: 'Tri fusion (Merge Sort) : paradigme Diviser pour Régner en O(n log n)',
            paragraphText:
              'Le **tri fusion** applique le paradigme **Diviser pour Régner** (Divide and Conquer) en trois étapes : **1. Diviser** la liste de taille $n$ en deux moitiés `G = L[:m]` et `D = L[m:]` de taille $n/2$ ; **2. Régner** en triant récursivement `G` et `D` (cas de base : une liste de taille $\\le 1$ est déjà triée) ; **3. Combiner** en fusionnant (`merge`) les deux sous-listes triées `G` et `D` en une seule liste triée en temps linéaire $\\mathcal{O}(n)$ à l\'aide de deux curseurs. La récurrence $T(n) = 2T(n/2) + \\mathcal{O}(n)$ donne une complexité temporelle **$\\mathcal{O}(n\\log n)$ dans tous les cas**.',
            formula: {
              name: 'Équation de récurrence du tri fusion',
              formula: 'T(n) = 2\\,T(n/2) + \\Theta(n) \\implies T(n) = \\Theta(n \\log_2 n)',
              note: 'Le tri fusion est stable, mais il nécessite un espace mémoire auxiliaire O(n) pour créer les tableaux lors de la fusion.',
            },
            keyRule:
              'La fusion de deux listes déjà triées de tailles n1 et n2 s\'effectue en temps linéaire O(n1 + n2).',
            konanTip:
              'Inconvénient du tri fusion par rapport à QuickSort : il n\'est pas en place et consomme O(n) de mémoire supplémentaire.',
            exercise: {
              id: 'srit_py_c2_p3_q3',
              type: 'mcq',
              prompt:
                'Quelles sont les complexités temporelle (au pire des cas) et spatiale auxiliaire du tri fusion (Merge Sort) sur $n$ éléments ?',
              options: [
                'Temps : O(n log n) au pire des cas ; Espace auxiliaire : O(n)',
                'Temps : O(n²) au pire des cas ; Espace auxiliaire : O(1)',
                'Temps : O(n log n) au pire des cas ; Espace auxiliaire : O(1)',
                'Temps : O(n) au pire des cas ; Espace auxiliaire : O(log n)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'arbre de récursion du tri fusion a une hauteur log₂(n) et chaque niveau fusionne au total n éléments en O(n), garantissant O(n log n) en temps même au pire cas, avec O(n) de mémoire auxiliaire.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Tri rapide (QuickSort)',
            stepTheme: 'violet',
            stepTitle: 'Tri rapide (QuickSort) : partitionnement autour d\'un pivot',
            paragraphText:
              'Le **tri rapide** (Hoare) choisit un élément appelé **pivot**, puis **partitionne** le tableau en plaçant à gauche tous les éléments $\\le \\text{pivot}$ et à droite tous les éléments $> \\text{pivot}$ (le pivot se retrouve alors à sa position définitive), avant de trier récursivement les deux sous-tableaux. En **moyenne** et au meilleur cas (pivot proche de la médiane, coupant le tableau en deux moitiés équilibrées), on a $T(n) = 2T(n/2) + \\mathcal{O}(n) = \\mathcal{O}(n\\log n)$. Mais dans le **pire des cas** (pivot systématiquement égal au minimum ou au maximum, ex. premier élément sur un tableau déjà trié), la taille ne diminue que de $1$ ($T(n) = T(n-1) + \\mathcal{O}(n)$) et la complexité tombe à **$\\mathcal{O}(n^2)$** !',
            keyRule:
              'QuickSort est en O(n log n) en moyenne, mais O(n²) dans le pire des cas (partitionnement déséquilibré 0 et n-1).',
            konanTip:
              'Pour éviter le pire cas O(n²) sur un tableau déjà trié, on choisit un pivot aléatoire ou la médiane de trois éléments (premier, milieu, dernier).',
            exercise: {
              id: 'srit_py_c2_p3_q4',
              type: 'mcq',
              prompt:
                'Dans quel cas le tri rapide (QuickSort) choisissant toujours le premier élément comme pivot tombe-t-il dans sa complexité du pire des cas $\\mathcal{O}(n^2)$ ?',
              options: [
                'Lorsque le tableau d\'entrée est déjà trié (croissant ou décroissant)',
                'Lorsque chaque partition coupe exactement le tableau en deux moitiés égales',
                'Jamais, QuickSort est toujours en O(n log n)',
                'Uniquement lorsque la taille n est une puissance de 2',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Si le tableau est déjà trié et que l\'on choisit le premier élément comme pivot, celui-ci est le minimum : la partition produit un sous-tableau vide (taille 0) et un sous-tableau de taille n-1, d\'où n + (n-1) + ... + 1 = O(n²).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Comparatif des tris',
            stepTheme: 'blue',
            stepTitle: 'Synthèse comparative : stabilité, tri en place et Timsort en Python',
            paragraphText:
              'Un algorithme de tri est dit **en place** (in-place) s\'il n\'utilise qu\'une mémoire auxiliaire négligeable ($\\mathcal{O}(1)$ ou $\\mathcal{O}(\\log n)$ pour la pile d\'appels). Il est dit **stable** si deux éléments ayant la même clé de tri conservent leur ordre relatif d\'apparition initial. En Python 3, la méthode `L.sort()` et la fonction `sorted(L)` utilisent l\'algorithme **Timsort** (hybride entre le **tri fusion** et le **tri par insertion**), qui est **stable**, s\'exécute en **$\\mathcal{O}(n\\log n)$ dans le pire des cas** et descend à **$\\mathcal{O}(n)$ dans le meilleur des cas**.',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Classification des 4 algorithmes de tri du programme SRIT 1',
              matrix2x2: {
                topAxis: ['Complexité pire cas O(n²)', 'Complexité pire cas O(n log n)'],
                leftAxis: ['Tri Stable', 'Tri Non Stable'],
                topLeft: {
                  title: 'Tri par Insertion',
                  items: ['Meilleur cas : O(n)', 'Pire cas : O(n²)', 'En place O(1) et Stable'],
                  color: 'green',
                },
                topRight: {
                  title: 'Tri Fusion & Timsort Python',
                  items: ['Pire cas garanti : O(n log n)', 'Timsort meilleur cas : O(n)', 'Stable, espace O(n)'],
                  color: 'blue',
                },
                bottomLeft: {
                  title: 'Tri par Sélection & QuickSort',
                  items: ['Sélection : O(n²) tous les cas', 'QuickSort : O(n log n) moyen, O(n²) pire', 'En place, Non stables (version standard)'],
                  color: 'orange',
                },
                bottomRight: {
                  title: 'Tri par Tas (HeapSort - hors base)',
                  items: ['Pire cas : O(n log n)', 'En place O(1)', 'Non stable'],
                  color: 'violet',
                },
              },
            },
            keyRule:
              'Le tri natif de Python (`sorted` / `.sort`) est Timsort : stable, O(n) au meilleur cas et O(n log n) en moyenne et au pire cas.',
            konanTip:
              'La stabilité de Timsort permet de trier une liste de tuples d\'abord sur un critère secondaire, puis sur un critère principal sans perdre le premier ordre !',
            exercise: {
              id: 'srit_py_c2_p3_q5',
              type: 'mcq',
              prompt:
                'Quel algorithme de tri est utilisé nativement par `sorted(L)` et `L.sort()` en Python 3, et quelles sont ses propriétés ?',
              options: [
                'Timsort (hybride Fusion + Insertion), stable, O(n) au meilleur cas et O(n log n) au pire cas',
                'QuickSort pur, non stable, O(n log n) en moyenne et O(n²) au pire cas',
                'Tri par sélection, stable, O(n²) dans tous les cas',
                'Tri à bulles optimisé, O(n log n) au pire cas',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Python utilise Timsort (inventé par Tim Peters en 2002), qui combine le tri par insertion sur les sous-séquences monotones (runs) et le tri fusion, offrant la stabilité, O(n) au meilleur cas et O(n log n) au pire cas.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Tri personnalisé key=',
            stepTheme: 'green',
            stepTitle: 'Tri multicritère et paramètre key= / reverse= de sorted()',
            paragraphText:
              'En Python, `sorted(iterable, key=fonction, reverse=False)` accepte un argument nommé `key` qui reçoit une fonction à un argument appliquée à chaque élément **avant** comparaison. Par exemple, `sorted(mots, key=len)` trie une liste de chaînes par longueur croissante ; `sorted(notes, key=lambda x: x[1], reverse=True)` trie une liste de tuples `(nom, moyenne)` par moyenne décroissante. Comme Python compare les tuples de gauche à droite (ordre lexicographique), `key=lambda x: (-x[1], x[0])` trie par moyenne décroissante puis, en cas d\'égalité, par nom alphabétique croissant !',
            keyRule:
              'Le paramètre `key` attend une fonction (ex. `key=len` ou `key=str.lower` ou `key=lambda x: ...`) et jamais le résultat d\'un appel.',
            konanTip:
              'Pour inverser un critère numérique à l\'intérieur d\'une clé tuple tout en gardant l\'ordre alphabétique croissant sur le second critère, utilisez le signe moins `-x[1]`.',
            exercise: {
              id: 'srit_py_c2_p3_q6',
              type: 'mcq',
              prompt:
                'Que renvoie `sorted([" reseau", "ip", "fibre"], key=len)` ?',
              options: [
                '["ip", "fibre", " reseau"]',
                '[" fibre", "ip", "reseau"]',
                '[" reseau", "fibre", "ip"]',
                '[2, 5, 7]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Avec key=len, Python trie les chaînes selon leur longueur len(s) croissante (2 pour "ip", 5 pour "fibre", 7 pour " reseau"), tout en renvoyant les chaînes originales.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : FONCTIONS, RÉCURSIVITÉ, MODULARITÉ, FICHIERS ET EXCEPTIONS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_python_ch3',
    subjectId: 'lmd_algo_python',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'Programme LMD — Licence 1 SRIT (1INF3200 : Algorithmique et Python)',
    title: 'Fonctions, Récursivité, Modularité, Fichiers et Exceptions en Python',
    summary:
      'Définition de fonctions, paramètres *args et **kwargs, portée LEGB, fonctions récursives et pile d\'appels, gestionnaire de contexte with open() et traitement des exceptions.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_python_ch3_p1',
        order: 1,
        title: 'Fonctions, passage d\'arguments, portée LEGB et expressions lambda',
        summary:
          'Définir des fonctions modulaires avec def, gérer les arguments par défaut, *args et **kwargs, comprendre la règle de portée LEGB et le passage de références.',
        conceptExplanation:
          'Une fonction Python est un objet de première classe défini par def. La résolution des noms de variables suit la hiérarchie LEGB (Local, Enclosing, Global, Built-in) et les arguments sont transmis par affectation de référence d\'objet (call by object reference).',
        keyRule:
          'Toute fonction Python qui se termine sans instruction return explicite (ou avec un return vide) renvoie automatiquement la valeur spéciale None.',
        workedExample: {
          title: 'Fonction à paramètres par défaut et arguments variables *args',
          statement:
            'Définir une fonction moyenne(*notes, coeff=1) qui renvoie la moyenne des notes multipliée par coeff, ou 0.0 si aucune note n\'est fournie.',
          methodSteps: [
            '1. Le paramètre *notes regroupe tous les arguments positionnels dans un tuple notes.',
            '2. Tester le cas vide : if not notes: return 0.0.',
            '3. Retourner (sum(notes) / len(notes)) * coeff.',
          ],
          conclusion: 'moyenne(12, 14, 16) renvoie 14.0 et moyenne(10, 15, coeff=2) renvoie 25.0.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition def & return',
            stepTheme: 'blue',
            stepTitle: 'Syntaxe def, instruction return vs print et valeur de retour None',
            paragraphText:
              'Une fonction se définit par `def nom_fonction(param1, param2=val_defaut):`. L\'instruction `return expr` interrompt immédiatement l\'exécution de la fonction et transmet l\'objet résultat à l\'appelant. Il ne faut jamais confondre `return` (qui fournit une valeur exploitable dans un calcul comme `y = 2 * f(x)`) et `print()` (qui ne fait qu\'afficher du texte à l\'écran et renvoie `None`). Si l\'exécution atteint la fin du bloc d\'une fonction sans rencontrer de `return`, Python renvoie implicitement **`None`**.',
            keyRule:
              'Dans la signature d\'une fonction, tous les paramètres ayant une valeur par défaut doivent obligatoirement être placés APRÈS les paramètres obligatoires sans valeur par défaut.',
            konanTip:
              'Si une fonction `f(x)` contient seulement `print(x + 1)` sans `return`, alors `res = f(5)` affiche `6` mais la variable `res` vaut `None` !',
            exercise: {
              id: 'srit_py_c3_p1_q1',
              type: 'mcq',
              prompt:
                'Quelle signature de fonction Python provoque immédiatement une erreur `SyntaxError` ?',
              options: [
                'def configurer(ip="127.0.0.1", port):',
                'def configurer(port, ip="127.0.0.1"):',
                'def configurer(ip="127.0.0.1", port=8080):',
                'def configurer(port, ip, proto="TCP"):',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En Python, un paramètre sans valeur par défaut (port) ne peut jamais suivre un paramètre ayant une valeur par défaut (ip="127.0.0.1") : cela lève SyntaxError: non-default argument follows default argument.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: '*args et **kwargs',
            stepTheme: 'violet',
            stepTitle: 'Arguments en nombre variable : *args (tuple) et **kwargs (dict)',
            paragraphText:
              'Pour accepter un nombre arbitraire d\'arguments positionnels supplémentaires, on préfixe un paramètre d\'une étoile `*args` : à l\'intérieur de la fonction, `args` est un **`tuple`** contenant tous ces arguments positionnels. Pour accepter un nombre arbitraire d\'arguments nommés (`cle=valeur`), on utilise une double étoile `**kwargs` : à l\'intérieur de la fonction, `kwargs` est un **dictionnaire `dict`** associant chaque nom d\'argument (sous forme de `str`) à sa valeur. Inversement, lors de l\'**appel** `f(*L, **D)`, `*` et `**` dépaquettent une liste et un dictionnaire.',
            keyRule:
              'Ordre canonique des paramètres dans def : (positionnels, *args, nommés par défaut, **kwargs).',
            konanTip:
              'Les noms `args` et `kwargs` sont des conventions universelles : ce sont les opérateurs `*` (tuple) et `**` (dict) qui définissent le comportement.',
            exercise: {
              id: 'srit_py_c3_p1_q2',
              type: 'mcq',
              prompt:
                'Dans `def f(a, *args, **kwargs):`, quels sont les types respectifs de `args` et de `kwargs` à l\'intérieur de la fonction ?',
              options: [
                'args est un tuple et kwargs est un dict',
                'args est une list et kwargs est un dict',
                'args est un tuple et kwargs est un set',
                'args et kwargs sont deux listes',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En Python, l\'opérateur * dans une signature empaquette les arguments positionnels excédentaires dans un tuple, et ** empaquette les arguments nommés excédentaires dans un dict.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège défaut mutable',
            stepTheme: 'orange',
            stepTitle: 'Le piège classique de l\'argument par défaut mutable (L=[])',
            paragraphText:
              'En Python, les valeurs par défaut des paramètres d\'une fonction sont évaluées **une seule fois**, au moment où l\'instruction `def` est lue par l\'interpréteur, et non à chaque appel de la fonction ! Si l\'on définit `def ajouter(x, L=[]): L.append(x); return L`, le même objet liste `L` est partagé et conservé d\'un appel à l\'autre : `ajouter(1)` renvoie `[1]`, puis un second appel `ajouter(2)` sans second argument renvoie **`[1, 2]`** au lieu de `[2]`. Pour éviter ce bug, on utilise toujours `None` comme valeur par défaut.',
            keyRule:
              'Ne jamais mettre un objet mutable ([] ou {}) comme valeur par défaut : écrire `def ajouter(x, L=None): if L is None: L = []`.',
            konanTip:
              'Ce piège tombe très régulièrement aux examens de Python L1/L2 : la liste par défaut garde en mémoire les `.append()` des appels précédents !',
            exercise: {
              id: 'srit_py_c3_p1_q3',
              type: 'mcq',
              prompt:
                'Soit `def f(x, L=[]): L.append(x); return L`. Qu\'affichent deux appels successifs `print(f(10))` puis `print(f(20))` ?',
              options: [
                '[10] puis [10, 20]',
                '[10] puis [20]',
                '[10, 20] puis [10, 20]',
                'Une erreur UnboundLocalError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La liste par défaut L=[] est créée une seule fois à la définition de f. Le premier appel f(10) la modifie en [10], et le second appel f(20) réutilise cette même liste et y ajoute 20, renvoyant [10, 20].',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Portée LEGB',
            stepTheme: 'violet',
            stepTitle: 'Portée des variables (règle LEGB) et erreur UnboundLocalError',
            paragraphText:
              'Lorsqu\'une variable est lue dans une fonction, Python la cherche dans l\'ordre **LEGB** : **L**ocal (intérieur de la fonction courante), **E**nclosing (fonction englobante en cas de fonctions imbriquées), **G**lobal (niveau du module `.py`) puis **B**uilt-in (noms natifs comme `len`, `range`). Cependant, dès qu\'une variable fait l\'objet d\'une **affectation** (`x = ...`) n\'importe où dans le corps d\'une fonction, Python la considère comme **locale à toute la fonction** (sauf déclaration `global x`). Lire `x` avant cette ligne locale provoque `UnboundLocalError`.',
            keyRule:
              'Une fonction peut LIRE une variable globale sans mot-clé, mais toute RÉAFFECTATION (`x = ...` ou `x += 1`) crée une variable locale (sauf si `global x` est déclaré).',
            konanTip:
              'En revanche, muter une liste globale en place par `L_globale.append(5)` sans réaffecter le nom `L_globale` fonctionne sans le mot-clé `global` !',
            exercise: {
              id: 'srit_py_c3_p1_q4',
              type: 'mcq',
              prompt:
                'Soit `compteur = 0` au niveau global, et une fonction `def inc(): compteur += 1`. Que se passe-t-il lors de l\'appel `inc()` ?',
              options: [
                'Une exception UnboundLocalError car compteur est assigné localement sans déclaration global compteur',
                'La variable globale compteur passe à 1',
                'compteur vaut 1 dans inc() mais reste à 0 au niveau global sans erreur',
                'Une exception NameError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'instruction compteur += 1 équivaut à compteur = compteur + 1. Comme il y a affectation, Python classe compteur comme variable locale à inc(), mais tente de lire sa valeur avant qu\'elle ne soit initialisée localement, levant UnboundLocalError.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Passage par référence',
            stepTheme: 'green',
            stepTitle: 'Passage d\'arguments : mutation en place vs réaffectation locale',
            paragraphText:
              'En Python, lors d\'un appel `f(arg)`, le paramètre formel reçoit une **référence vers l\'objet** `arg`. Si l\'objet est **immuable** (`int`, `float`, `str`, `tuple`), aucune opération dans `f` ne peut modifier la variable de l\'appelant. Si l\'objet est **mutable** (`list`, `dict`, `set`), deux cas s\'opposent : une **mutation en place** (`param.append(99)` ou `param[0] = 99`) modifie directement l\'objet de l\'appelant ; au contraire, une **réaffectation** (`param = [0, 0]`) fait simplement pointer la variable locale `param` vers une nouvelle liste sans affecter l\'appelant.',
            keyRule:
              'Dans une fonction recevant une liste L : `L.append(x)` ou `L[0] = x` modifie la liste externe, mais `L = [...]` ne modifie que la référence locale.',
            konanTip:
              'Attention : sur une liste, `L += [4]` agit en place (comme `L.extend([4])`) et modifie l\'appelant, tandis que `L = L + [4]` crée une nouvelle liste locale !',
            exercise: {
              id: 'srit_py_c3_p1_q5',
              type: 'mcq',
              prompt:
                'Soient :\n`def g(T):`\n`    T[0] = 99`\n`    T = [0, 0]`\nSi l\'on exécute `A = [1, 2]` puis `g(A)`, quelle est la valeur finale de `A` ?',
              options: [
                '[99, 2]',
                '[0, 0]',
                '[1, 2]',
                '[99, 0]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Au début de g(A), T référence la même liste que A : T[0] = 99 modifie donc A en [99, 2]. Ensuite, T = [0, 0] réassigne uniquement la variable locale T vers une nouvelle liste, laissant A égal à [99, 2].',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Fonctions lambda',
            stepTheme: 'slate',
            stepTitle: 'Fonctions anonymes lambda et programmation fonctionnelle (map, filter)',
            paragraphText:
              'Le mot-clé `lambda` permet de créer à la volée une petite **fonction anonyme** restreinte à une seule expression dont le résultat est retourné implicitement : `lambda x, y: x + y`. Elle est idéale comme argument de fonctions d\'ordre supérieur telles que `sorted(L, key=lambda x: x[1])`, `map(f, iterable)` (qui applique `f` à chaque élément) ou `filter(predicat, iterable)` (qui conserve les éléments pour lesquels `predicat(x)` est vrai). En Python 3, `map` et `filter` renvoient des itérateurs paresseux que l\'on convertit en liste par `list(...)` (ou que l\'on remplace par une compréhension de liste).',
            keyRule:
              'Une expression `lambda params: expression` ne peut contenir ni instruction `return` explicite, ni boucle, ni bloc `if/elif/else` multi-lignes (seulement un opérateur ternaire).',
            konanTip:
              '`list(map(lambda x: x**2, L))` est strictement équivalent à la compréhension `[x**2 for x in L]`.',
            exercise: {
              id: 'srit_py_c3_p1_q6',
              type: 'mcq',
              prompt:
                'Que renvoie l\'expression `list(filter(lambda x: x > 0, [-3, 0, 4, -1, 7]))` ?',
              options: [
                '[4, 7]',
                '[False, False, True, False, True]',
                '[0, 4, 7]',
                '[-3, -1]',
              ],
              correctAnswerIndex: 0,
              explanation:
                'filter(predicat, iterable) ne conserve que les éléments de l\'itérable pour lesquels la fonction prédicat renvoie True (ici les nombres strictement positifs 4 et 7).',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_python_ch3_p2',
        order: 2,
        title: 'Récursivité, pile d\'appels et équivalence itératif / récursif',
        summary:
          'Concevoir des fonctions récursives correctes avec cas de base et appel récursif convergent, analyser la pile d\'appels (call stack) et éviter RecursionError.',
        conceptExplanation:
          'Une fonction est récursive lorsqu\'elle s\'appelle elle-même. Pour garantir sa terminaison, elle doit comporter au moins un cas de base (condition d\'arrêt sans appel récursif) et des appels récursifs sur des arguments qui convergent strictement vers ce cas de base.',
        keyRule:
          'Sans cas de base atteint en un nombre fini d\'étapes, une fonction récursive sature la pile d\'appels et lève l\'exception RecursionError (limite par défaut : ~1000 appels en Python).',
        workedExample: {
          title: 'Exponentiation rapide récursive en O(log n)',
          statement:
            'Écrire la relation de récurrence de l\'exponentiation rapide calculant x^n pour n entier naturel en O(log2 n) multiplications.',
          methodSteps: [
            '1. Cas de base : si n == 0, retourner 1.',
            '2. Calculer une seule fois p = puissance_rapide(x, n // 2).',
            '3. Si n est pair (n % 2 == 0), retourner p * p ; si n est impair, retourner x * p * p.',
          ],
          conclusion: 'À chaque appel, l\'exposant n est divisé par 2, ce qui réduit le nombre d\'appels de O(n) à O(log2 n).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Lois de la récursivité',
            stepTheme: 'blue',
            stepTitle: 'Cas de base, relation de récurrence et convergence du variant',
            paragraphText:
              'Toute fonction récursive valide repose sur trois piliers obligatoires : **1. Le cas de base (condition d\'arrêt)** qui résout directement les instances élémentaires sans nouvel appel récursif (ex. `if n <= 1: return 1` pour la factorielle $n!$) ; **2. L\'appel récursif** qui décompose le problème de taille $n$ en sous-problèmes de même nature ; **3. La convergence** qui garantit que la taille du sous-problème décroît strictement vers le cas de base à chaque appel (ex. appel sur `n - 1` ou `n // 2`).',
            formula: {
              name: 'Définition récursive de la factorielle et du PGCD d\'Euclide',
              formula: 'n! = \\begin{cases} 1 & \\text{si } n = 0 \\\\ n \\times (n-1)! & \\text{si } n \\ge 1 \\end{cases} \\qquad \\text{pgcd}(a,b) = \\begin{cases} a & \\text{si } b = 0 \\\\ \\text{pgcd}(b,\\; a \\% b) & \\text{si } b \\neq 0 \\end{cases}',
              note: 'Chaque appel récursif empile un nouveau cadre d\'activation (stack frame) contenant ses propres variables locales.',
            },
            keyRule:
              'Toujours tester le cas de base EN PREMIER au début de la fonction récursive, avant tout appel récursif.',
            konanTip:
              'Si vous appelez `fact(-1)` sur une fonction dont le cas de base est `if n == 0:` au lieu de `if n <= 0:`, `n - 1` s\'éloigne de 0 indéfiniment et provoque `RecursionError` !',
            exercise: {
              id: 'srit_py_c3_p2_q1',
              type: 'mcq',
              prompt:
                'Soit la fonction récursive :\n`def mystere(n):`\n`    if n == 0: return 0`\n`    return n + mystere(n - 1)`\nQue renvoie `mystere(5)` ?',
              options: [
                '15',
                '120',
                '5',
                'RecursionError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'mystere(5) calcule la somme des entiers de 5 jusqu\'à 0 : 5 + 4 + 3 + 2 + 1 + 0 = 15.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Pile d\'appels (Stack)',
            stepTheme: 'violet',
            stepTitle: 'Fonctionnement de la pile d\'appels, espace mémoire et RecursionError',
            paragraphText:
              'Lorsqu\'une fonction `f(n)` appelle `f(n - 1)`, l\'exécution de `f(n)` est mise en pause et un nouveau **cadre d\'activation** (stack frame) est empilé sur la **pile d\'appels** (structure LIFO : *Last In, First Out*). Ce n\'est que lorsque le cas de base `f(0)` retourne sa valeur que les cadres sont **dépilés un par un** en sens inverse pour achever leurs calculs en attente. Par conséquent, une récursion linéaire de profondeur $n$ consomme un **espace mémoire $\\mathcal{O}(n)$** sur la pile ! En Python, la profondeur maximale de la pile est limitée par défaut à $1000$ (`sys.getrecursionlimit()`), au-delà de laquelle l\'interpréteur lève `RecursionError`.',
            visualSchema: {
              type: 'layered_stack',
              title: 'État de la pile d\'appels (Call Stack LIFO) lors de l\'évaluation de fact(3)',
              layeredStack: {
                style: 'stack',
                layers: [
                  { badge: 'Sommet (Cas de base)', title: 'fact(0) → retourne immédiatement 1', subtitle: 'Dépilement : débloque fact(1)', color: 'green' },
                  { badge: 'Niveau 3', title: 'fact(1) en attente : 1 * fact(0)', subtitle: 'Reçoit 1 → retourne 1 * 1 = 1', color: 'blue' },
                  { badge: 'Niveau 2', title: 'fact(2) en attente : 2 * fact(1)', subtitle: 'Reçoit 1 → retourne 2 * 1 = 2', color: 'violet' },
                  { badge: 'Base de la pile', title: 'fact(3) en attente : 3 * fact(2)', subtitle: 'Reçoit 2 → retourne 3 * 2 = 6 à l\'appelant', color: 'orange' },
                ],
              },
            },
            keyRule:
              'Une fonction récursive linéaire de profondeur n a une complexité spatiale O(n) (due à la pile d\'appels), contre O(1) pour sa version itérative avec une boucle.',
            konanTip:
              'On peut consulter ou modifier la limite de récursion en Python via le module `sys` : `sys.getrecursionlimit()` et `sys.setrecursionlimit(5000)`.',
            exercise: {
              id: 'srit_py_c3_p2_q2',
              type: 'mcq',
              prompt:
                'Quelle exception Python est levée lorsqu\'une fonction récursive oublie son cas de base ou dépasse la profondeur maximale de la pile d\'appels (environ 1000 appels) ?',
              options: [
                'RecursionError',
                'OverflowError',
                'MemoryError',
                'IndexError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Depuis Python 3.5, le dépassement de la profondeur maximale de la pile d\'appels lève spécifiquement l\'exception RecursionError (sous-classe de RuntimeError).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Explosion exponentielle',
            stepTheme: 'orange',
            stepTitle: 'Récursivité multiple (Fibonacci naïf en O(2^n)) et mémoïsation',
            paragraphText:
              'Écrire la suite de Fibonacci sous la forme récursive naïve `def fib(n): return n if n <= 1 else fib(n-1) + fib(n-2)` est un **désastre algorithmique** : chaque appel génère **deux** appels récursifs qui recalculent des milliers de fois les mêmes sous-problèmes (`fib(n-2)`, `fib(n-3)`...). L\'arbre des appels possède une taille **exponentielle $\\mathcal{O}(2^n)$** (plus précisément $\\mathcal{O}(\\varphi^n)$ avec $\\varphi \\approx 1{,}618$). Pour ramener la complexité à **$\\mathcal{O}(n)$**, on utilise soit une boucle itérative (`a, b = b, a + b`), soit la **mémoïsation** qui stocke les résultats déjà calculés dans un dictionnaire cache.',
            keyRule:
              'Fibonacci récursif naïf est en temps exponentiel O(2^n) ; Fibonacci itératif ou mémoïsé (programmation dynamique) est en temps linéaire O(n).',
            konanTip:
              'En Python, ajouter simplement le décorateur `@functools.lru_cache(None)` au-dessus d\'une fonction récursive active automatiquement la mémoïsation en O(n) !',
            exercise: {
              id: 'srit_py_c3_p2_q3',
              type: 'mcq',
              prompt:
                'Quelle est la complexité temporelle de la fonction récursive naïve `fib(n)` qui calcule `fib(n-1) + fib(n-2)` sans cache (mémoïsation) ?',
              options: [
                'Exponentielle O(2^n) en raison de la duplication massive des sous-appels',
                'Linéaire O(n)',
                'Logarithmique O(log n)',
                'Quadratique O(n²)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'L\'arbre binaire d\'appels de fib(n) double presque de taille à chaque niveau de profondeur, conduisant à une complexité temporelle exponentielle O(φ^n) ⊂ O(2^n).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Puissance rapide',
            stepTheme: 'green',
            stepTitle: 'Exponentiation rapide (dichotomique) : de O(n) à O(log n)',
            paragraphText:
              'Pour calculer $x^n$ ($n \\in \\mathbb{N}$), la récursion linéaire $x^n = x \\times x^{n-1}$ effectue $n$ appels et $n$ multiplications ($\\mathcal{O}(n)$). L\'**exponentiation rapide** exploite la parité de $n$ : $x^{2k} = (x^k)^2$ et $x^{2k+1} = x \\times (x^k)^2$. En calculant **une seule fois** `p = pow_rapide(x, n // 2)` puis `p * p`, on divise l\'exposant $n$ par $2$ à chaque appel récursif : la profondeur de récursion et le nombre de multiplications chutent à **$\\mathcal{O}(\\log_2 n)$** ! Attention : écrire `pow_rapide(x, n//2) * pow_rapide(x, n//2)` ferait deux appels identiques et retomberait en $\\mathcal{O}(n)$ !',
            keyRule:
              'Dans l\'exponentiation rapide, il faut stocker `p = f(x, n // 2)` dans une variable locale puis élever `p` au carré (`p * p`), et ne jamais appeler `f(x, n // 2)` deux fois.',
            konanTip:
              'La fonction native `pow(x, n, mod)` de Python implémente l\'exponentiation rapide modulaire en $\\mathcal{O}(\\log n)$, indispensable pour le chiffrement RSA en sécurité réseau !',
            exercise: {
              id: 'srit_py_c3_p2_q4',
              type: 'mcq',
              prompt:
                'Pourquoi est-il crucial d\'écrire `p = exp_rapide(x, n // 2); return p * p` plutôt que `return exp_rapide(x, n // 2) * exp_rapide(x, n // 2)` ?',
              options: [
                'Parce qu\'appeler deux fois la fonction donne T(n) = 2T(n/2) + O(1) = O(n) au lieu de T(n) = T(n/2) + O(1) = O(log n)',
                'Parce que Python interdit deux appels récursifs sur la même ligne',
                'Parce que le résultat mathématique serait différent',
                'Parce que l\'opérateur // ne peut être évalué qu\'une seule fois',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un seul appel récursif sur n//2 divise le travail par 2 à chaque étape → O(log n). Deux appels identiques sur n//2 créent un arbre binaire de hauteur log₂(n) ayant 2^(log₂ n) = n feuilles → O(n).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'exemple',
            stepBadge: 'Récursivité sur chaînes/listes',
            stepTheme: 'slate',
            stepTitle: 'Trace d\'exécution avant et après l\'appel récursif',
            paragraphText:
              'L\'emplacement d\'une instruction par rapport à l\'appel récursif change radicalement l\'ordre d\'exécution : toute instruction placée **avant** l\'appel récursif est exécutée à la **descente** (de $n$ vers le cas de base), tandis que toute instruction placée **après** l\'appel récursif est exécutée à la **remontée** (lors du dépilement, du cas de base vers $n$). Par exemple, pour inverser une chaîne récursivement : `def inv(s): return s if len(s) <= 1 else inv(s[1:]) + s[0]` place `s[0]` à la fin lors de la remontée.',
            keyRule:
              'Instructions avant l\'appel récursif → ordre direct (descente). Instructions après l\'appel récursif → ordre inversé (remontée LIFO de la pile).',
            konanTip:
              'Pour convertir un entier $n > 0$ en binaire récursivement, on appelle d\'abord `binaire(n // 2)` puis on concatène `str(n % 2)` à la remontée !',
            exercise: {
              id: 'srit_py_c3_p2_q5',
              type: 'mcq',
              prompt:
                'Que renvoie `f("SRIT")` avec :\n`def f(s):`\n`    if len(s) <= 1: return s`\n`    return f(s[1:]) + s[0]` ?',
              options: [
                '"TIRS"',
                '"SRIT"',
                '"S"',
                '"T"',
              ],
              correctAnswerIndex: 0,
              explanation:
                'À chaque étape, le premier caractère s[0] est placé APRÈS l\'inversion du reste f(s[1:]). La chaîne est donc inversée : f("SRIT") = f("RIT") + "S" = f("IT") + "R" + "S" = "TIRS".',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Récursivité terminale',
            stepTheme: 'violet',
            stepTitle: 'Récursivité terminale (Tail Recursion) et transformation en boucle',
            paragraphText:
              'Une fonction est dite **récursive terminale** (tail-recursive) lorsque l\'appel récursif est la **toute dernière opération** évaluée par la fonction, sans aucun calcul en attente après son retour. Par exemple, `return n * fact(n - 1)` n\'est **pas** terminale (car la multiplication par `n` attend le retour de `fact(n - 1)`), tandis que `def fact_term(n, acc=1): return acc if n <= 1 else fact_term(n - 1, n * acc)` est terminale grâce à l\'accumulateur `acc`. Attention : contrairement à certains langages fonctionnels, **l\'interpréteur Python standard (CPython) n\'optimise pas la récursivité terminale** (pas de *Tail Call Optimization*) ; pour $n > 1000$, il faut donc réécrire la fonction avec une boucle `while`.',
            keyRule:
              'Dans une récursion terminale, la valeur retournée par l\'appel récursif est directement retournée telle quelle, grâce à un paramètre accumulateur.',
            konanTip:
              'Même récursive terminale, une fonction Python consomme quand même O(n) cadres sur la pile d\'appels dans CPython.',
            exercise: {
              id: 'srit_py_c3_p2_q6',
              type: 'mcq',
              prompt:
                'Parmi les définitions suivantes, laquelle est **récursive terminale** ?',
              options: [
                'def somme(n, acc=0): return acc if n == 0 else somme(n - 1, acc + n)',
                'def somme(n): return 0 if n == 0 else n + somme(n - 1)',
                'def fib(n): return n if n <= 1 else fib(n - 1) + fib(n - 2)',
                'def taille(L): return 0 if not L else 1 + taille(L[1:])',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans somme(n, acc=0), l\'addition acc + n est effectuée AVANT l\'appel récursif dans le passage d\'arguments, et l\'appel somme(n - 1, acc + n) est retourné directement sans aucune opération restante au dépilement.',
            },
          },
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_python_ch3_p3',
        order: 3,
        title: 'Modularité, gestion des fichiers (texte, CSV, JSON) et exceptions',
        summary:
          'Organiser le code en modules, manipuler les fichiers de manière sûre avec le gestionnaire de contexte with open() et intercepter ou lever des exceptions via try / except / else / finally.',
        conceptExplanation:
          'Un programme professionnel sépare ses fonctions en modules importables, lit et écrit des fichiers persistants à l\'aide du bloc with open(...) qui garantit la fermeture automatique du descripteur système, et protège les opérations critiques par une gestion ciblée des exceptions.',
        keyRule:
          'Toujours utiliser `with open(chemin, mode, encoding="utf-8") as f:` : le fichier est automatiquement fermé à la sortie du bloc with, même si une exception survient.',
        workedExample: {
          title: 'Lecture sécurisée d\'un fichier de logs et comptage des erreurs',
          statement:
            'Écrire un bloc Python qui ouvre "serveur.log" en lecture UTF-8, compte le nombre de lignes contenant "ERROR", et affiche un message propre si le fichier est introuvable.',
          methodSteps: [
            '1. Ouvrir un bloc try: et utiliser with open("serveur.log", "r", encoding="utf-8") as f:.',
            '2. Compter par compréhension : nb = sum(1 for ligne in f if "ERROR" in ligne).',
            '3. Intercepter l\'absence du fichier par except FileNotFoundError: print("Fichier log introuvable").',
          ],
          conclusion: 'L\'itération directe `for ligne in f:` lit le fichier ligne par ligne en mémoire constante O(1) sans charger tout le fichier en RAM.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Modules & __name__',
            stepTheme: 'blue',
            stepTitle: 'Importation de modules et rôle de if __name__ == "__main__":',
            paragraphText:
              'Tout fichier Python `.py` constitue un **module** réutilisable. On peut l\'importer via `import math` (accès préfixé `math.sqrt(2)`), `import numpy as np` (alias), ou `from math import sqrt, pi` (import ciblé). Il faut éviter `from module import *` qui pollue l\'espace de noms et masque des fonctions. Chaque module possède une variable spéciale `__name__` : lorsqu\'un fichier est exécuté directement (`python script.py`), `__name__` vaut `"__main__"` ; lorsqu\'il est importé par un autre fichier, `__name__` vaut le nom du module. Placer les tests dans `if __name__ == "__main__":` évite qu\'ils ne s\'exécutent lors d\'un `import`.',
            keyRule:
              'Le bloc `if __name__ == "__main__":` ne s\'exécute que si le fichier est lancé comme programme principal, et jamais lorsqu\'il est importé comme bibliothèque.',
            konanTip:
              'Les modules incontournables de la bibliothèque standard en SRIT : `math`, `random`, `sys`, `os`, `json`, `csv`, `time` et `collections`.',
            exercise: {
              id: 'srit_py_c3_p3_q1',
              type: 'mcq',
              prompt:
                'Quelle est la valeur de la variable spéciale `__name__` à l\'intérieur d\'un fichier `outils.py` lorsqu\'un autre script exécute `import outils` ?',
              options: [
                '"outils"',
                '"__main__"',
                'None',
                '"outils.py"',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Lorsqu\'un module est importé, sa variable __name__ prend le nom du module ("outils"). Elle ne vaut "__main__" que lorsque le fichier est exécuté directement comme script principal.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Fichiers & with open',
            stepTheme: 'green',
            stepTitle: 'Gestionnaire de contexte with open() et modes d\'ouverture (r, w, a, x)',
            paragraphText:
              'L\'ouverture d\'un fichier doit toujours s\'écrire `with open("data.txt", mode, encoding="utf-8") as f:`. Ce **gestionnaire de contexte** garantit l\'appel automatique de `f.close()` dès la sortie du bloc indenté, **même si une erreur interrompt le code**. Les modes principaux sont : `"r"` (lecture seule, par défaut ; lève `FileNotFoundError` si le fichier n\'existe pas), `"w"` (**écriture avec écrasement** : crée le fichier ou **efface totalement** son contenu existant !), `"a"` (*append* : ajout à la fin du fichier sans écraser), `"x"` (création exclusive : échoue si le fichier existe déjà) et le suffixe `"b"` (`"rb"`, `"wb"`) pour les fichiers binaires.',
            keyRule:
              'Attention critique : ouvrir un fichier existant en mode `"w"` efface instantanément tout son contenu ! Pour ajouter à la suite, utiliser le mode `"a"`.',
            konanTip:
              'En écriture `f.write(texte)`, Python n\'ajoute PAS de retour à la ligne automatiquement (contrairement à `print`) : il faut inclure `"\\n"` à la fin de la chaîne.',
            exercise: {
              id: 'srit_py_c3_p3_q2',
              type: 'mcq',
              prompt:
                'Que se passe-t-il si l\'on ouvre un fichier existant non vide `"notes.txt"` avec `with open("notes.txt", "w", encoding="utf-8") as f:` ?',
              options: [
                'Le contenu précédent du fichier est immédiatement effacé (tronqué à 0 octet) avant toute écriture',
                'Les nouvelles écritures s\'ajoutent à la fin du fichier après le contenu existant',
                'Python lève une exception FileExistsError',
                'Le fichier est ouvert en lecture et écriture sans effacer son contenu',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le mode "w" (write) écrase systématiquement le fichier s\'il existe déjà. Pour conserver le contenu existant et écrire à la suite, il faut utiliser le mode "a" (append).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Lecture & JSON/CSV',
            stepTheme: 'violet',
            stepTitle: 'Méthodes de lecture (read, readline, readlines) et sérialisation JSON',
            paragraphText:
              'Sur un fichier texte `f` ouvert en mode `"r"`, `f.read()` lit tout le fichier en une seule grande chaîne `str` ; `f.readline()` lit une seule ligne ; `f.readlines()` renvoie une liste `list[str]` de toutes les lignes (chacune terminée par `"\\n"`, que l\'on nettoie avec `ligne.strip()`). Pour les gros fichiers, l\'itération directe `for ligne in f:` est optimale car elle lit le fichier en flux continu sans saturer la RAM. Enfin, le module `json` permet de sauvegarder et relire des dictionnaires/listes Python : `json.dump(obj, f)` / `obj = json.load(f)` (sur fichier) et `json.dumps(obj)` / `json.loads(chaine)` (sur chaîne `str`).',
            keyRule:
              '`json.load(f)` et `json.dump(obj, f)` opèrent sur un objet fichier ouvert `f`, tandis que `json.loads(s)` et `json.dumps(obj)` (avec un s comme string) opèrent sur des chaînes `str`.',
            konanTip:
              'Pour retirer le caractère de saut de ligne `\\n` à la fin d\'une ligne lue dans un fichier sans supprimer les espaces utiles, utilisez `ligne.rstrip("\\n")` ou `ligne.strip()`.',
            exercise: {
              id: 'srit_py_c3_p3_q3',
              type: 'mcq',
              prompt:
                'Quelle fonction du module `json` permet de convertir une chaîne de caractères JSON `s = \'{"port": 443, "tls": true}\'` en un dictionnaire Python `dict` ?',
              options: [
                'json.loads(s)',
                'json.load(s)',
                'json.dumps(s)',
                'json.dump(s)',
              ],
              correctAnswerIndex: 0,
              explanation:
                'json.loads(s) ("load string") désérialise une chaîne de caractères JSON en objet Python (ici un dict), tandis que json.load(f) attend un objet fichier ouvert.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'try / except / else / finally',
            stepTheme: 'blue',
            stepTitle: 'Architecture complète de la gestion des exceptions en Python',
            paragraphText:
              'Lorsqu\'une erreur d\'exécution survient, Python crée un objet **Exception** et interrompt le flux normal. La structure complète comporte quatre clauses : **1. `try:`** encadre le code susceptible d\'échouer ; **2. `except TypeErreur as e:`** intercepte et traite l\'exception correspondante ; **3. `else:`** (optionnel) s\'exécute **uniquement si aucune exception n\'a été levée** dans le bloc `try` ; **4. `finally:`** (optionnel) s\'exécute **toujours dans absolument tous les cas** (qu\'il y ait eu succès, exception interceptée, exception non interceptée ou même un `return` dans le `try` !), idéal pour libérer une connexion réseau ou un verrou.',
            visualSchema: {
              type: 'flowchart',
              title: 'Flux d\'exécution d\'un bloc try / except / else / finally',
              flowchart: {
                direction: 'vertical',
                steps: [
                  { id: 't', label: 'Bloc try : exécution des instructions surveillées', kind: 'start', color: 'blue' },
                  { id: 'd', label: 'Une exception est-elle levée dans try ?', kind: 'decision', color: 'orange', branchLabel: 'Oui → Recherche du bloc except correspondant' },
                  { id: 'el', label: 'Non (0 erreur) → Exécution du bloc else', kind: 'process', color: 'green' },
                  { id: 'fin', label: 'Dans TOUS les cas → Exécution obligatoire du bloc finally', kind: 'end', color: 'violet' },
                ],
              },
            },
            keyRule:
              'Dans `try / except / else / finally`, le bloc `else` ne s\'exécute que s\'il n\'y a eu AUCUNE exception, et `finally` s\'exécute TOUJOURS.',
            konanTip:
              'Même si le bloc `try` ou `except` contient une instruction `return`, Python exécute quand même le bloc `finally` juste avant de quitter effectivement la fonction !',
            exercise: {
              id: 'srit_py_c3_p3_q4',
              type: 'mcq',
              prompt:
                'Dans une structure `try / except / else / finally`, quand le bloc `else` et le bloc `finally` sont-ils exécutés ?',
              options: [
                'else s\'exécute uniquement si aucune exception n\'a eu lieu dans try ; finally s\'exécute toujours dans tous les cas',
                'else s\'exécute lorsqu\'une exception n\'est pas reconnue par except ; finally s\'exécute uniquement s\'il n\'y a pas d\'erreur',
                'else et finally s\'exécutent tous les deux dans tous les cas',
                'else s\'exécute après finally uniquement en cas d\'erreur',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En Python, la clause else d\'un try est exécutée si et seulement si le bloc try s\'est terminé sans lever d\'exception. La clause finally est exécutée systématiquement quoi qu\'il arrive.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Types d\'exceptions',
            stepTheme: 'orange',
            stepTitle: 'Catalogue des exceptions natives et hiérarchie d\'interception',
            paragraphText:
              'Pour réussir les examens et déboguer efficacement, il faut identifier précisément chaque exception standard : `ValueError` (type correct mais valeur invalide, ex. `int("abc")`), `TypeError` (opération sur un type incompatible, ex. `"a" + 2` ou `len(5)`), `IndexError` (indice de séquence hors bornes `L[10]`), `KeyError` (clé absente d\'un dictionnaire `d["x"]`), `ZeroDivisionError` (division ou modulo par `0`), `NameError` (variable non définie), `AttributeError` (méthode inexistante sur l\'objet). Lorsqu\'on enchaîne plusieurs blocs `except`, il faut toujours placer les exceptions **les plus spécifiques avant les plus générales** (`Exception`).',
            keyRule:
              '`int("12.5")` ou `int("abc")` lève `ValueError` (car `int()` accepte bien une `str`), tandis que `int([1, 2])` lève `TypeError`.',
            konanTip:
              'Évitez le `except:` nu (sans type d\'exception) car il intercepte même `KeyboardInterrupt` (Ctrl+C) et masque les erreurs de frappe (`NameError`) !',
            exercise: {
              id: 'srit_py_c3_p3_q5',
              type: 'mcq',
              prompt:
                'Quelles exceptions sont respectivement levées par `int("SRIT")` et par `{"ip": "10.0.0.1"}["port"]` ?',
              options: [
                'ValueError puis KeyError',
                'TypeError puis IndexError',
                'TypeError puis KeyError',
                'ValueError puis AttributeError',
              ],
              correctAnswerIndex: 0,
              explanation:
                'int() accepte bien un argument de type str, mais le contenu "SRIT" n\'est pas un entier valide → ValueError. Accéder à une clé inexistante "port" dans un dict lève KeyError.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'raise & assert',
            stepTheme: 'green',
            stepTitle: 'Déclenchement volontaire d\'exception (raise) et préconditions (assert)',
            paragraphText:
              'Lorsqu\'une fonction détecte qu\'un argument reçu viole ses contraintes métier (par exemple un numéro de port réseau hors de $[1, 65535]$ ou un diviseur nul), elle ne doit pas continuer silencieusement avec une valeur absurde : elle **lève explicitement une exception** avec l\'instruction `raise ValueError("Le port doit être compris entre 1 et 65535")`. Pour vérifier des invariants internes pendant le développement, on peut aussi utiliser `assert condition, "Message"`, qui lève automatiquement une exception `AssertionError` si `condition` est fausse.',
            keyRule:
              'Syntaxe pour lever une exception en Python : `raise ValueError("message explicatif")` (et non `throw` comme en C++/Java/JS).',
            konanTip:
              'Dans un bloc `except`, écrire simplement `raise` tout seul (sans argument) permet de relancer (propager) exactement l\'exception qui vient d\'être interceptée après l\'avoir journalisée !',
            exercise: {
              id: 'srit_py_c3_p3_q6',
              type: 'mcq',
              prompt:
                'Quelle instruction Python permet à une fonction de déclencher volontairement une exception `ValueError` lorsqu\'un paramètre `age < 0` est invalide ?',
              options: [
                'raise ValueError("L\'âge ne peut pas être négatif")',
                'throw new ValueError("L\'âge ne peut pas être négatif")',
                'except ValueError("L\'âge ne peut pas être négatif")',
                'return ValueError("L\'âge ne peut pas être négatif")',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En Python, le mot-clé pour déclencher (lever) une exception est raise suivi d\'une instance d\'exception comme ValueError("...").',
            },
          },
        ],
      }),
    ],
  },
];
