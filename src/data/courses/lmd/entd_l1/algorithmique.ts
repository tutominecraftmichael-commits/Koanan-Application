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
// ALGORITHMIQUE — ENTD LICENCE 1 (ESATIC)
// Sources : Chp 1, Chp 2, Chap 3, Chap 4, Chap 5, Chap 7, Chap 8, TD Fonctions
// ============================================================================

export const ALGORITHMIQUE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Notions de base, instructions élémentaires et expressions
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch1',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Algorithmique (Chapitres 1, 2 et 3)',
    title: 'Chapitre 1 — Notions de base, instructions élémentaires et expressions',
    summary:
      'Structure d’un algorithme, variables, constantes, types de données, instructions élémentaires (affectation, lecture, écriture) et expressions numériques, booléennes et chaînes de caractères.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch1_p1',
        order: 1,
        title: 'Structure d’un algorithme, variables, constantes et types',
        summary:
          'Formaliser la solution d’un problème, structurer les déclarations et respecter la compatibilité des types de base.',
        conceptExplanation:
          'Un algorithme est la description claire, complète et sans ambiguïté d’un enchaînement d’actions (instructions) destinées à être exécutées par une machine après traduction dans un langage de programmation (programme).\n\n' +
          'Un algorithme se compose de deux parties principales enrichies de commentaires : la partie Déclarations (constantes et variables) et la partie Instructions (entre DEBUT et FIN).\n\n' +
          'Une variable est une zone mémoire repérée par un identificateur (commençant par une lettre, composé de lettres, chiffres et tiret bas) et caractérisée par un type qui contraint les valeurs stockables : ENTIER (élément de $\\mathbb{Z}$), REEL (élément de $\\mathbb{R}$), CARACTERE (délimité par des apostrophes `\'`), CHAINE (délimitée par des guillemets `"`), et BOOLEEN (`VRAI` ou `FAUX`). Une constante (ex. `TAUX_ANNUEL = 4.5`) associe un identificateur en majuscules à une valeur fixe.',
        formulas: [
          {
            name: 'Compatibilité d’affectation',
            formula: '\\text{ENTIER} \\hookrightarrow \\text{REEL} \\quad (\\text{mais } \\text{REEL} \\not\\hookrightarrow \\text{ENTIER})',
            note: 'Un entier peut être rangé dans une variable réelle, mais un réel ne peut pas être rangé dans une variable entière.',
          },
          {
            name: 'Calcul d’intérêt annuel (Algorithme Intérêts)',
            formula: '\\text{interet} \\leftarrow \\frac{\\text{somme} \\times \\text{taux}}{100}',
            note: 'Exemple fondamental du Chapitre 1 (dépôt annuel et taux constant de 4,5 %).',
          },
        ],
        keyRule:
          'Toujours distinguer un identificateur de variable (ex. `nom`) d’une valeur littérale caractère ou chaîne encadrée par des délimiteurs (`\'a\'`, `"nom"`), et vérifier la compatibilité de type avant toute affectation.',
        workedExample: {
          title: 'Trace d’exécution de l’algorithme Intérêts (Chapitre 1)',
          statement:
            'Dans l’algorithme `Intérêts` avec `taux = 4.5`, l’utilisateur saisit un dépôt annuel de `800` et une somme souhaitée de `2600`. On dépose `800` au 1er janvier et on ajoute l’intérêt au 31 décembre. Suivre l’évolution des variables `somme`, `nbAn` et `interet`.',
          methodSteps: [
            'Initialisation : `somme ← 0`, `nbAn ← 0`. Test `0 < 2600` est VRAI.',
            'Année 1 : `somme ← 800`, `nbAn ← 1`, `interet ← (800 × 4.5)/100 = 36`, puis `somme ← 836.00`.',
            'Année 2 : `somme ← 836 + 800 = 1636`, `nbAn ← 2`, `interet ← 73.62`, puis `somme ← 1709.62`.',
            'Année 3 : `somme ← 1709.62 + 800 = 2509.62`, `nbAn ← 3`, `interet ← 112.93`, puis `somme ← 2622.55`.',
            'Test suivant : `2622.55 < 2600` est FAUX, on sort de la boucle.',
          ],
          conclusion:
            'Il faudra attendre 3 années pour recevoir 2622,55 francs.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Définition',
            stepTheme: 'blue',
            stepTitle: 'Algorithme vs Programme',
            paragraphText:
              'Un algorithme est la description formalisée, claire, complète et sans ambiguïté d’un enchaînement d’actions permettant de résoudre un problème. Lorsqu’on traduit ces consignes dans un langage directement interprétable par l’ordinateur, l’ensemble obtenu s’appelle un programme.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quelle différence fondamentale distingue un algorithme d’un programme ?',
              options: [
                'Un algorithme ne contient jamais de variables, contrairement à un programme.',
                'Un algorithme est une description formalisée indépendante d’un langage machine, tandis qu’un programme est écrit dans un langage de programmation exécutable par l’ordinateur.',
                'Un programme est toujours écrit en français naturel et un algorithme en binaire.',
                'Il n’existe aucune différence : les deux termes désignent exactement un fichier exécutable.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’algorithme exprime la solution formalisée indépendamment du langage cible ; le programme en est la traduction dans un langage interprétable par l’ordinateur.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Structure',
            stepTheme: 'blue',
            stepTitle: 'Les deux parties d’un algorithme',
            paragraphText:
              'Tout algorithme comporte deux sections obligatoires : la partie **Déclarations** (où l’on définit constantes et variables avec leur type et leur rôle en commentaire) et la partie **Instructions** (la partie active comprise entre `DEBUT` et `FIN`, exécutée séquentiellement).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Quelles sont les deux grandes parties constitutives d’un algorithme ?',
              options: [
                'L’en-tête réseau et la table de routage.',
                'Les entrées clavier et les sorties imprimante.',
                'Les déclarations et les instructions.',
                'Les boucles et les fonctions prédéfinies.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Selon le Chapitre 1, un algorithme se compose de la partie Déclarations (constantes, variables) et de la partie Instructions (partie active entre DEBUT et FIN).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Règle de nommage',
            stepTheme: 'violet',
            stepTitle: 'Variables, constantes et identificateurs',
            paragraphText:
              'Une variable désigne une zone mémoire dont la valeur peut évoluer au cours de l’exécution, tandis qu’une constante garde une valeur littérale fixe (souvent écrite en majuscules avec tiret bas, ex. `TAUX_ANNUEL`). Un identificateur doit impérativement commencer par une lettre et ne contenir que des lettres, des chiffres ou le tiret souligné `_`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Parmi les propositions suivantes, laquelle est un identificateur de variable valide en algorithmique ?',
              options: [
                'sommeFinale_1',
                '1erDepot',
                'somme Finale',
                'taux-annuel',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un identificateur doit commencer par une lettre et ne comporter ni espace ni tiret `-` (seuls lettres, chiffres et tiret souligné `_` sont autorisés).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Types de base',
            stepTheme: 'violet',
            stepTitle: 'Les types fondamentaux et leurs délimiteurs',
            paragraphText:
              'En algorithmique de base, on distingue `ENTIER` (sous-ensemble de $\\mathbb{Z}$), `REEL` (approximation de $\\mathbb{R}$ en machine dans un sous-ensemble de $\\mathbb{Q}$), `CARACTERE` (un seul signe entouré d’apostrophes `\'A\'`), `CHAINE` (suite de caractères entourée de guillemets `"Arthur"`) et `BOOLEEN` (`VRAI` ou `FAUX`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Quelle différence existe-t-il entre écrire `N` et écrire `\'N\'` dans un algorithme ?',
              options: [
                'Aucune : les apostrophes sont purement esthétiques.',
                '`N` est un entier nul tandis que `\'N\'` est un nombre réel.',
                '`\'N\'` est un identificateur de constante et `N` est un caractère.',
                '`N` désigne l’identificateur d’une variable, alors que `\'N\'` représente la valeur littérale de type CARACTERE.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les délimiteurs (apostrophes ou guillemets) lèvent l’ambiguïté entre un nom de variable (identificateur) et une valeur littérale de type caractère ou chaîne.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Tableau de compatibilité des types',
            paragraphText:
              'On peut affecter une expression `ENTIER` dans une variable de type `REEL` (car $\\mathbb{Z} \\subset \\mathbb{R}$), mais l’inverse est interdit : on ne peut pas ranger `5.5` dans une variable `ENTIER`. De même, `\'5\'` est de type `CARACTERE` et est incompatible avec `ENTIER` et `REEL`.',
            keyRule: 'Affecter `\'5\'` à un `ENTIER` ou `5.5` à un `ENTIER` provoque une erreur de compatibilité de type.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Soient `unEntier : ENTIER`, `unReel : REEL` et `unCar : CARACTERE`. Quelle affectation est **valide** ?',
              options: [
                'unEntier ← 5.5',
                'unReel ← 5',
                'unEntier ← \'5\'',
                'unCar ← 5',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un entier (`5`) est compatible avec une variable de type `REEL`. En revanche, `5.5` ne peut pas aller dans un `ENTIER`, et `\'5\'` est un caractère incompatible avec `ENTIER` (tout comme `5` est incompatible avec `CARACTERE`).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Simulation',
            stepTheme: 'slate',
            stepTitle: 'Notion d’état du système lors d’une trace',
            paragraphText:
              'Les instructions d’un algorithme s’exécutent séquentiellement et modifient l’état du système, défini comme l’ensemble des valeurs prises par toutes les variables à un instant donné. Dans une table de trace, chaque ligne reflète la nouvelle valeur de la variable modifiée par l’instruction courante.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Dans l’algorithme `Intérêts` (`taux = 4.5`, dépôt = `800`), que vaut `somme` à la fin de la première année ?',
              options: [
                '800.00',
                '804.50',
                '836.00',
                '845.00',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Au 1er janvier `somme ← 0 + 800 = 800`. Au 31 décembre `interet ← (800 × 4.5) / 100 = 36`, donc `somme ← 800 + 36 = 836.00`.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch1_p2',
        order: 2,
        title: 'Instructions élémentaires et expressions numériques',
        summary:
          'Maîtriser l’affectation, la lecture, l’écriture et l’évaluation des expressions arithmétiques incluant div et mod.',
        conceptExplanation:
          'Une instruction élémentaire agit directement sur les variables en une ligne :\n' +
          '1. **Affectation** (`variable ← expression`) : évalue d’abord l’expression à droite, puis range le résultat dans la variable à gauche en écrasant son ancienne valeur.\n' +
          '2. **Lecture** (`LIRE(v1, v2, ...)`) : interrompt l’algorithme, attend une saisie clavier et range la valeur dans la variable (écrasement de l’ancienne valeur).\n' +
          '3. **Écriture** (`ECRIRE(expr1, expr2, ...)`) : évalue chaque expression de la liste et l’affiche à l’écran sans modifier les variables.\n\n' +
          'Pour les expressions numériques sur les entiers, la division euclidienne $a = b \\times q + r$ ($0 \\leqslant r < b$) fournit deux opérateurs essentiels : `a div b` (quotient entier $q$) et `a mod b` (reste entier $r$). Les opérateurs `{*, /, div, mod}` sont prioritaires sur `{+, -}`.',
        formulas: [
          {
            name: 'Division euclidienne algorithmique',
            formula: 'a = b \\times (a \\text{ div } b) + (a \\text{ mod } b), \\quad 0 \\leqslant a \\text{ mod } b < b',
            note: 'Exemple du cours : 32 div 5 = 6 et 32 mod 5 = 2.',
          },
          {
            name: 'Priorité arithmétique',
            formula: '\\{ \\times,\\ /,\\ \\text{div},\\ \\text{mod} \\} \\succ \\{ +,\\ - \\}',
            note: 'Les parenthèses permettent de forcer un autre ordre d’évaluation.',
          },
        ],
        keyRule:
          'Dans une affectation `x ← expr`, la partie droite est intégralement évaluée avec les anciennes valeurs avant d’écraser le contenu de `x`.',
        workedExample: {
          title: 'Évaluation d’expressions et permutation de variables',
          statement:
            'Soient `a ← 32`, `b ← 5`. Calculer `q ← a div b`, `r ← a mod b`, puis `res ← a + b * 2 - r`. Enfin, indiquer ce qu’affiche `ECRIRE("q=", q, " r=", r)`.',
          methodSteps: [
            'Division euclidienne de 32 par 5 : $32 = 5 \\times 6 + 2$, donc `q ← 6` et `r ← 2`.',
            'Priorité à la multiplication dans `a + b * 2 - r` : `b * 2 = 10`, puis `32 + 10 - 2 = 40`, donc `res ← 40`.',
            'L’instruction `ECRIRE("q=", q, " r=", r)` évalue chaque élément et affiche la concaténation visuelle : `q=6 r=2`.',
          ],
          conclusion: '`q = 6`, `r = 2`, `res = 40`, et l’écran affiche `q=6 r=2`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Affectation',
            stepTheme: 'blue',
            stepTitle: 'Mécanisme en deux temps de l’affectation',
            paragraphText:
              'Lors de l’exécution de `somme ← somme + interet`, l’ordinateur évalue d’abord l’expression de droite avec les valeurs actuelles des variables (par exemple `1636 + 73.62 = 1709.62`), puis range ce résultat dans la variable de gauche `somme`, ce qui écrase irréversiblement l’ancienne valeur `1636`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Si `x` vaut `10` et `y` vaut `4`, quelles sont les valeurs de `x` et `y` après la séquence : `x ← x + y` puis `y ← x - y` ?',
              options: [
                'x = 14 et y = 10',
                'x = 14 et y = 6',
                'x = 10 et y = 6',
                'x = 14 et y = 4',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Après `x ← x + y`, `x` devient `14` (`y` reste `4`). Puis `y ← x - y` calcule `14 - 4 = 10`, donc `y` devient `10`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Entrée / Sortie',
            stepTheme: 'blue',
            stepTitle: 'Instructions LIRE et ECRIRE',
            paragraphText:
              'L’instruction `LIRE(x)` interrompt l’exécution pour attendre une saisie de l’utilisateur et écrase le contenu de `x`. À l’inverse, `ECRIRE("le successeur de ", x, " est ", x + 1)` affiche successivement les valeurs des quatre expressions sans modifier la variable `x`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Si `x` contient `13`, que fait l’instruction `ECRIRE("le successeur de ", x, " est ", x + 1)` sur la valeur stockée dans `x` ?',
              options: [
                'Elle incrémente `x` qui vaut désormais `14`.',
                'Elle réinitialise `x` à `0` après affichage.',
                'Elle provoque une erreur car `x + 1` est une expression.',
                'Elle affiche « le successeur de 13 est 14 » et laisse `x` égal à `13`.',
              ],
              correctAnswerIndex: 3,
              explanation:
                '`ECRIRE` évalue les expressions (y compris `x + 1`) pour les afficher à l’écran, sans jamais modifier la mémoire des variables.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Division entière',
            stepTheme: 'violet',
            stepTitle: 'Les opérateurs div et mod',
            paragraphText:
              'Pour deux entiers $a$ et $b > 0$, l’opérateur `a div b` renvoie le quotient entier de la division euclidienne et `a mod b` renvoie le reste. Par exemple, comme $32 = 5 \\times 6 + 2$, on a `32 div 5 = 6` et `32 mod 5 = 2`.',
            formula: {
              name: 'Quotient et reste',
              formula: '32 \\text{ div } 5 = 6 \\quad \\text{et} \\quad 32 \\text{ mod } 5 = 2',
            },
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Que valent respectivement `47 div 6` et `47 mod 6` ?',
              options: [
                '6 et 7',
                '7 et 5',
                '8 et 1',
                '7.83 et 5',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$47 = 6 \\times 7 + 5$ avec $0 \\leqslant 5 < 6$. Le quotient entier est `7` et le reste est `5`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Priorités',
            stepTheme: 'green',
            stepTitle: 'Ordre d’évaluation des expressions arithmétiques',
            paragraphText:
              'Dans une expression numérique complexe, les parenthèses sont évaluées en premier, puis les opérateurs multiplicatifs `{*, /, div, mod}` avant les opérateurs additifs `{+, -}`. Le type d’une expression est le type de son résultat : `(nb + 10) * G` est `REEL` dès que `G` est `REEL`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Quelle est la valeur de l’expression `4 + 17 mod 5 * 3` ?',
              options: [
                '18',
                '1',
                '10',
                '15',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`mod` et `*` sont prioritaires sur `+` et évalués de gauche à droite : `17 mod 5 = 2`, puis `2 * 3 = 6`, puis `4 + 6 = 10`.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège classique',
            stepTheme: 'orange',
            stepTitle: 'Échanger le contenu de deux variables',
            paragraphText:
              'Écrire `a ← b` suivi de `b ← a` ne permute pas `a` et `b` : la première affectation écrase la valeur initiale de `a`, de sorte que les deux variables finissent avec l’ancienne valeur de `b`. Il faut impérativement passer par une variable temporaire `aux`.',
            keyRule: 'Permutation correcte : `aux ← a ; a ← b ; b ← aux`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Si `a = 3` et `b = 9`, quelles sont les valeurs de `a` et `b` après `a ← b` puis `b ← a` ?',
              options: [
                'a = 9 et b = 3',
                'a = 3 et b = 3',
                'a = 12 et b = 9',
                'a = 9 et b = 9',
              ],
              correctAnswerIndex: 3,
              explanation:
                '`a ← b` écrase `3` par `9`. Ensuite `b ← a` recopie `9` dans `b`. La valeur initiale de `a` est perdue.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Convertir des minutes en degrés et minutes',
            paragraphText:
              'Les opérateurs `div` et `mod` servent directement à convertir une grandeur entière en unités composées (comme dans le Chapitre 8) : pour `mi` minutes d’angle, le nombre entier de degrés est `mi div 60` et le reste en minutes est `mi mod 60`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Pour `mi = 195` minutes, que donnent `dd ← mi div 60` et `mm ← mi mod 60` ?',
              options: [
                'dd = 3 et mm = 15',
                'dd = 3 et mm = 25',
                'dd = 2 et mm = 75',
                'dd = 15 et mm = 3',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$195 = 60 \\times 3 + 15$, donc `195 div 60 = 3` degrés et `195 mod 60 = 15` minutes.',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_algo_ch1_p3',
        order: 3,
        title: 'Expressions booléennes, lois de De Morgan et chaînes',
        summary:
          'Construire et simplifier des conditions logiques avec NON, ET, OU, et manipuler les chaînes de caractères.',
        conceptExplanation:
          'Une expression booléenne ne peut prendre que deux valeurs : `VRAI` ou `FAUX`. Elle s’obtient via une variable booléenne, un opérateur de comparaison (`<`, `<=`, `>`, `>=`, `=`, `<>`), l’appartenance à un ensemble (`mois ∈ {1, 3, 5, 7, 8, 10, 12}`), ou par composition avec `NON`, `ET`, `OU`.\n\n' +
          'Ordre de priorité des opérateurs logiques : `NON` est prioritaire sur `ET`, qui est prioritaire sur `OU`.\n\n' +
          'Les **lois de De Morgan** permettent de nier une condition composée :\n' +
          '• `NON (A ET B) ≡ (NON A) OU (NON B)`\n' +
          '• `NON (A OU B) ≡ (NON A) ET (NON B)`\n\n' +
          'Pour les chaînes de caractères, l’opérateur de **concaténation** (`+`) met bout à bout deux chaînes : `"51" + "200" = "51200"`, alors que `51 + 200 = 251`. La comparaison de chaînes suit l’ordre lexicographique (caractère par caractère) : `"100" < "40"` vaut `VRAI` car `"1"` précède `"4"`.',
        formulas: [
          {
            name: 'Lois de De Morgan',
            formula: '\\text{NON}(A \\text{ ET } B) \\equiv (\\text{NON } A) \\text{ OU } (\\text{NON } B)',
            note: 'Et symétriquement : NON(A OU B) ≡ (NON A) ET (NON B).',
          },
          {
            name: 'Priorité booléenne',
            formula: '\\text{NON} \\succ \\text{ET} \\succ \\text{OU}',
            note: 'En cas de doute, utiliser des parenthèses pour clarifier la condition.',
          },
        ],
        keyRule:
          'Ne jamais confondre l’addition numérique (`51 + 200 = 251`) avec la concaténation de chaînes (`"51" + "200" = "51200"`), ni l’ordre numérique avec l’ordre alphabétique des chaînes.',
        workedExample: {
          title: 'Condition d’admission à un module (Chapitre 3)',
          statement:
            'Un étudiant possède trois notes `n1, n2, n3`. Il est admis si sa moyenne est supérieure ou égale à 10 et s’il n’a aucune note éliminatoire strictement inférieure à 5. Réécrire la condition sans l’opérateur `NON`.',
          methodSteps: [
            'Traduction directe : `((n1 + n2 + n3) / 3 >= 10) ET NON ((n1 < 5) OU (n2 < 5) OU (n3 < 5))`.',
            'Application de la loi de De Morgan sur `NON ((n1 < 5) OU (n2 < 5) OU (n3 < 5))` : le `OU` devient `ET` et chaque inégalité `< 5` devient `>= 5`.',
            'On obtient : `((n1 + n2 + n3) / 3 >= 10) ET (n1 >= 5) ET (n2 >= 5) ET (n3 >= 5)`.',
          ],
          conclusion:
            'Les deux expressions booléennes sont rigoureusement équivalentes pour tout triplet de notes.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Tables de vérité',
            stepTheme: 'blue',
            stepTitle: 'Opérateurs NON, ET et OU',
            paragraphText:
              '`A ET B` vaut `VRAI` uniquement lorsque `A` et `B` sont tous deux `VRAI`. `A OU B` vaut `FAUX` uniquement lorsque `A` et `B` sont tous deux `FAUX`. `NON A` inverse la valeur de vérité de `A`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Quelle est la valeur de l’expression `(20 > 3) ET (20 < 15)` ?',
              options: [
                'VRAI',
                'FAUX',
                '20',
                'Erreur de syntaxe',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`20 > 3` vaut `VRAI` et `20 < 15` vaut `FAUX`. Or `VRAI ET FAUX` vaut `FAUX`.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Priorité',
            stepTheme: 'violet',
            stepTitle: 'Priorité de NON sur ET puis sur OU',
            paragraphText:
              'Sans parenthèses, `NON` s’applique d’abord, puis `ET`, puis `OU`. Ainsi, `VRAI OU FAUX ET FAUX` s’évalue comme `VRAI OU (FAUX ET FAUX) = VRAI OU FAUX = VRAI`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Que vaut l’expression booléenne `VRAI OU FAUX ET FAUX` en respectant les priorités opératoires ?',
              options: [
                'FAUX',
                'Indéterminé',
                'VRAI',
                'Elle dépend du compilateur',
              ],
              correctAnswerIndex: 2,
              explanation:
                '`ET` est prioritaire sur `OU` : on calcule d’abord `FAUX ET FAUX = FAUX`, puis `VRAI OU FAUX = VRAI`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'De Morgan',
            stepTheme: 'violet',
            stepTitle: 'Appliquer les lois de De Morgan',
            paragraphText:
              'Pour nier une condition composée, on inverse chaque comparaison et on transforme `ET` en `OU` (et inversement). Par exemple, la négation de `(x >= 0) ET (x <= 20)` est `(x < 0) OU (x > 20)`.',
            formula: {
              name: 'Négation d’un encadrement',
              formula: '\\text{NON}(x \\geqslant 0 \\text{ ET } x \\leqslant 20) \\equiv (x < 0) \\text{ OU } (x > 20)',
            },
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Laquelle de ces expressions est équivalente à `NON ((n1 < 5) OU (n2 < 5))` ?',
              options: [
                '(n1 >= 5) OU (n2 >= 5)',
                '(n1 > 5) ET (n2 > 5)',
                '(n1 <= 5) ET (n2 <= 5)',
                '(n1 >= 5) ET (n2 >= 5)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Par De Morgan, le `OU` devient `ET` et la négation de `< 5` est `>= 5` (attention : 5 n’est pas strictement inférieur à 5).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Bonne pratique',
            stepTheme: 'green',
            stepTitle: 'Utiliser une variable booléenne directement dans SI',
            paragraphText:
              'Dans l’algorithme `ExprBooleennesV2` du cours, on stocke le résultat dans `estAdmis : BOOLEEN`, puis on écrit simplement `SI estAdmis ALORS ...` au lieu de `SI estAdmis = VRAI ALORS ...`, car les deux expressions booléennes sont rigoureusement équivalentes.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Si `estPair` est une variable de type `BOOLEEN`, quelle écriture est la plus propre pour tester si elle est fausse ?',
              options: [
                'SI NON estPair ALORS',
                'SI estPair < 0 ALORS',
                'SI estPair = "FAUX" ALORS',
                'SI estPair <> 1 ALORS',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une variable booléenne s’utilise directement avec les opérateurs logiques (`SI estPair` ou `SI NON estPair`), sans comparaison à une chaîne ou un entier.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Chaînes',
            stepTheme: 'blue',
            stepTitle: 'Concaténation de chaînes de caractères',
            paragraphText:
              'L’opérateur de concaténation (`+`) assemble deux caractères ou chaînes bout à bout pour produire une nouvelle chaîne. Contrairement à l’addition mathématique, `"Bonjour" + " Arthur"` donne `"Bonjour Arthur"` et `"51" + "200"` donne `"51200"`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Quel est le résultat et le type de l’expression `"12" + "34"` ?',
              options: [
                '46 de type ENTIER',
                '"1234" de type CHAINE',
                '"46" de type CHAINE',
                '1234 de type ENTIER',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les opérandes étant encadrés de guillemets, ce sont des chaînes : `+` réalise une concaténation et renvoie la chaîne `"1234"`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Comparaison lexicographique des chaînes',
            paragraphText:
              'La comparaison entre chaînes suit l’ordre alphabétique (lexicographique) basé sur le code des caractères, et non la valeur numérique. Ainsi `"ELEPHANT" < "SOURIS"` vaut `VRAI`, et `"100" < "40"` vaut également `VRAI` car le premier caractère `"1"` précède `"4"` !',
            keyRule: '`"100" < "40"` est VRAI (comparaison de chaînes), alors que `100 < 40` est FAUX (comparaison d’entiers).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch1_p3_q6',
              type: 'mcq',
              prompt: 'Quelle est la valeur de vérité de l’expression booléenne `"100" < "40"` ?',
              options: [
                'FAUX, car 100 est supérieur à 40.',
                'Erreur : on ne peut pas comparer des chaînes avec `<`.',
                'VRAI, car la comparaison est lexicographique et le caractère \'1\' précède \'4\'.',
                'FAUX, car `"100"` a 3 caractères et `"40"` n’en a que 2.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les chaînes sont comparées caractère par caractère de gauche à droite selon l’ordre du codage : comme `\'1\' < \'4\'`, on a `"100" < "40"` égal à `VRAI`.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Instructions de choix et instructions répétitives
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch2',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Algorithmique (Chapitres 4 et 5)',
    title: 'Chapitre 2 — Instructions de choix et instructions répétitives',
    summary:
      'Structures conditionnelles (SI/SINON, SI/SINONSI, SELON) et boucles itératives (TANTQUE, REPETER...JUSQUA, POUR) : mécanismes, traces et critères de choix.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch2_p1',
        order: 1,
        title: 'Instructions de choix : SI, SINONSI et SELON',
        summary:
          'Aiguiller l’exécution selon une condition booléenne ou un sélecteur de type énumérable.',
        conceptExplanation:
          'Les instructions de choix permettent d’exécuter différentes séquences d’instructions selon les données ou calculs :\n' +
          '1. **Conditionnelle simple** : `SI <condition> ALORS <séquence> FINSI`.\n' +
          '2. **Alternative complète** : `SI <condition> ALORS <séquence 1> SINON <séquence 2> FINSI`.\n' +
          '3. **Choix multiple `SELON`** : `SELON <sélecteur> DANS <liste 1> : <seq 1> ... AUTREMENT : <seq autre> FINSELON`. Les listes de valeurs doivent être disjointes et le sélecteur doit être de type énumérable (`ENTIER` ou `CARACTERE`, jamais `REEL` ni `CHAINE`).\n' +
          '4. **Cascade `SI ... SINONSI ... SINON ... FINSI`** : remplace proprement les `SI` imbriqués mutuellement exclusifs (ex. tarif dégressif par tranches de quantité). Dès qu’une condition est vraie, sa séquence s’exécute et l’on saute directement après le `FINSI`.',
        formulas: [
          {
            name: 'Condition d’année bissextile (Algorithme NombreDeJours)',
            formula: '\\text{bis} \\leftarrow (\\text{an mod } 4 = 0 \\text{ ET } \\text{an mod } 100 \\neq 0) \\text{ OU } (\\text{an mod } 400 = 0)',
            note: 'Utilisée dans le Chapitre 4 pour déterminer si février compte 29 ou 28 jours.',
          },
        ],
        keyRule:
          'Utiliser `SELON` pour des égalités/appartenances sur un entier ou un caractère, et `SI ... SINONSI ... SINON ... FINSI` pour des intervalles ou inégalités.',
        workedExample: {
          title: 'Tarif dégressif par tranches (Algorithme Tarifs, Chapitre 4)',
          statement:
            'Avec `BORNE_1 = 5, BORNE_2 = 10, BORNE_3 = 30, BORNE_4 = 60` et `PRIX_1 = 100, PRIX_2 = 90, PRIX_3 = 80, PRIX_4 = 70, PRIX_5 = 55`, déterminer le prix renvoyé pour `quantite = 25` par la cascade `SI quantite > 60 ... SINONSI quantite > 30 ... SINONSI quantite > 10 ... SINONSI quantite > 5 ... SINON`.',
          methodSteps: [
            'Test 1 : `25 > 60` est FAUX.',
            'Test 2 : `25 > 30` est FAUX.',
            'Test 3 : `25 > 10` est VRAI → on exécute `prix ← PRIX_3` (soit `80`) et l’on sort immédiatement du bloc `SI ... FINSI` sans tester `quantite > 5`.',
          ],
          conclusion: 'Pour `quantite = 25` kg, le prix unitaire appliqué est `80`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Alternative',
            stepTheme: 'blue',
            stepTitle: 'Conditionnelle simple et alternative SI / SINON',
            paragraphText:
              'Dans `SI <condition> ALORS <seq1> SINON <seq2> FINSI`, la condition est évaluée : si elle vaut `VRAI`, seule `<seq1>` s’exécute ; si elle vaut `FAUX`, seule `<seq2>` s’exécute. Pour que la condition soit évaluable, toutes les variables qui la composent doivent avoir reçu une valeur au préalable.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Pourquoi la séquence `DEBUT SI x > 5 ALORS ECRIRE(x) FINSI FIN` est-elle erronée ?',
              options: [
                'Parce qu’il manque obligatoirement une clause `SINON`.',
                'Parce que `x` n’a reçu aucune valeur avant l’évaluation de la condition `x > 5`.',
                'Parce qu’on ne peut pas utiliser `ECRIRE` dans un `SI`.',
                'Parce que l’opérateur `>` ne fonctionne que sur des réels.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une condition doit être évaluable : la variable `x` n’ayant été ni initialisée par affectation ni saisie par `LIRE(x)`, la condition `x > 5` est indéfinie.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'exemple',
            stepBadge: 'Comparaison',
            stepTheme: 'slate',
            stepTitle: 'Deux façons de calculer le maximum (`maxdeux-1` vs `maxdeux-2`)',
            paragraphText:
              'Dans `maxdeux-1`, on utilise `SI nb1 > nb2 ALORS maxi ← nb1 SINON maxi ← nb2 FINSI`. Dans `maxdeux-2`, on suppose d’abord `maxi ← nb1`, puis on corrige par une conditionnelle simple : `SI nb2 > maxi ALORS maxi ← nb2 FINSI`. Les deux algorithmes produisent le même résultat.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Dans `maxdeux-2` (`maxi ← nb1 ; SI nb2 > maxi ALORS maxi ← nb2 FINSI`), que se passe-t-il si `nb1 = 10` et `nb2 = 15` ?',
              options: [
                '`maxi` vaut d’abord 15, puis est remplacé par 10.',
                'La condition `nb2 > maxi` est fausse et `maxi` reste égal à 10.',
                '`maxi` vaut d’abord 10 ; comme `15 > 10` est VRAI, `maxi` prend ensuite la valeur 15.',
                'L’algorithme boucle indéfiniment.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'D’après la trace du Chapitre 4, ligne 3 `maxi ← 10`, ligne 4 `15 > 10` est VRAI, ligne 5 `maxi ← 15`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Choix multiple',
            stepTheme: 'blue',
            stepTitle: 'Instruction SELON ... DANS ... FINSELON',
            paragraphText:
              'L’instruction `SELON <sélecteur> DANS` compare la valeur du sélecteur à des listes de constantes disjointes. Dès qu’une liste contient la valeur, sa séquence s’exécute et l’on quitte `FINSELON`. Si aucune liste ne correspond, la clause facultative `AUTREMENT` est exécutée.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Quels types sont autorisés pour le sélecteur d’une instruction `SELON` selon le cours ?',
              options: [
                'Uniquement les types énumérables : ENTIER ou CARACTERE.',
                'Uniquement REEL et CHAINE.',
                'Tous les types sans exception, y compris REEL.',
                'Uniquement BOOLEEN.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le Chapitre 4 précise explicitement que le sélecteur de `SELON` doit être d’un type énumérable, c’est-à-dire `ENTIER` ou `CARACTERE` (pas `CHAINE` ni `REEL`), et que les listes doivent être disjointes.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Application',
            stepTheme: 'green',
            stepTitle: 'Tester une année bissextile',
            paragraphText:
              'Une année `an` est bissextile si elle est divisible par 4 sans l’être par 100, OU si elle est divisible par 400 : `bis ← (an mod 4 = 0 ET an mod 100 <> 0) OU (an mod 400 = 0)`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Selon la formule `bis ← (an mod 4 = 0 ET an mod 100 <> 0) OU (an mod 400 = 0)`, quelle année n’est **pas** bissextile ?',
              options: [
                '2000',
                '2024',
                '1600',
                '1900',
              ],
              correctAnswerIndex: 3,
              explanation:
                '1900 est divisible par 4, mais aussi par 100 (`1900 mod 100 = 0`) et non par 400 (`1900 mod 400 = 300`), donc `bis = FAUX`. En revanche 2000 et 1600 sont divisibles par 400, et 2024 par 4 mais pas 100.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Cascade',
            stepTheme: 'green',
            stepTitle: 'Structure SI ... SINONSI ... SINON ... FINSI',
            paragraphText:
              'Lorsque les cas dépendent d’inégalités (comme des tranches de tarifs), on ne peut pas utiliser `SELON`. La structure `SI ... SINONSI ... SINON ... FINSI` évite d’empiler de multiples `FINSI` : seule la branche de la **première** expression booléenne vraie est exécutée.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Dans l’algorithme `Tarifs` (`SI q > 60 ALORS p ← 55 SINONSI q > 30 ALORS p ← 70 SINONSI q > 10 ALORS p ← 80 SINON p ← 100 FINSI`), que vaut `p` si `q = 30` ?',
              options: [
                '70',
                '80',
                '55',
                '100',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`30 > 60` est FAUX, `30 > 30` est FAUX (inégalité stricte), `30 > 10` est VRAI → `p ← 80`.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Ordre des tests dans une cascade SINONSI',
            paragraphText:
              'Dans une cascade `SI ... SINONSI`, l’ordre des conditions est crucial. Si l’on écrivait d’abord `SI q > 5 ALORS p ← 90 SINONSI q > 60 ALORS p ← 55`, alors pour `q = 80`, la première condition `80 > 5` serait déjà vraie et la branche `q > 60` ne serait jamais atteinte !',
            keyRule: 'Toujours ordonner les seuils d’un `SI ... SINONSI` de manière strictement décroissante (pour `>`) ou strictement croissante (pour `<`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Que se passe-t-il pour `q = 100` si l’on inverse les tests en écrivant `SI q > 5 ALORS p ← 90 SINONSI q > 60 ALORS p ← 55 FINSI` ?',
              options: [
                '`p` reçoit 55 car 100 > 60 est plus spécifique.',
                'Les deux branches s’exécutent et `p` vaut 55.',
                '`p` reçoit 90 car la première condition vraie (`100 > 5`) court-circuite les suivantes.',
                'L’algorithme provoque une erreur d’exécution.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Dès la première expression booléenne vraie (`100 > 5`), la séquence associée (`p ← 90`) s’exécute et le contrôle passe directement après `FINSI`.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch2_p2',
        order: 2,
        title: 'Instructions répétitives : TANTQUE, REPETER et POUR',
        summary:
          'Maîtriser les trois boucles fondamentales, éviter les boucles infinies et choisir la structure itérative adaptée.',
        conceptExplanation:
          'Les structures répétitives (boucles) permettent d’exécuter plusieurs fois une séquence d’instructions :\n' +
          '1. **`TANTQUE <cond> FAIRE <seq> FINTANTQUE`** : contrôle à l’entrée. La séquence s’exécute tant que `<cond>` est `VRAI`. Elle peut s’exécuter **0 fois** si la condition est fausse au départ.\n' +
          '2. **`REPETER <seq> JUSQUA <cond>`** : contrôle à la sortie. La séquence s’exécute **au moins 1 fois**, puis la boucle s’arrête dès que `<cond>` devient `VRAI` (condition d’arrêt, inverse de celle du `TANTQUE`).\n' +
          '3. **`POUR i DE debut A fin FAIRE <seq> FINPOUR`** : utilisée quand le nombre d’itérations est connu à l’avance et non modifiable. Équivaut à `i ← debut ; TANTQUE i <= fin FAIRE <seq> ; i ← i + 1 FINTANTQUE` (ou avec `par PAS de -1` pour un pas décroissant).\n\n' +
          'Dans une boucle `POUR`, la séquence ne doit modifier ni la variable de boucle `i`, ni la borne `fin`.',
        formulas: [
          {
            name: 'Équivalence TANTQUE / REPETER (si au moins 1 tour)',
            formula: '\\text{TANTQUE } C \\text{ FAIRE } S \\iff \\text{REPETER } S \\text{ JUSQUA NON } C',
            note: 'Attention : REPETER exécute toujours S au moins une fois, contrairement à TANTQUE.',
          },
          {
            name: 'Nombre de tours d’une boucle POUR',
            formula: 'N = \\max(0,\\ \\text{fin} - \\text{debut} + 1)',
            note: 'Pour un pas de +1 : si debut > fin, la boucle fait 0 itération.',
          },
        ],
        keyRule:
          'Choix de la boucle : nombre d’itérations connu → `POUR` ; inconnu avec 0 tour possible → `TANTQUE` ; inconnu avec au moins 1 tour obligatoire → `REPETER ... JUSQUA`.',
        workedExample: {
          title: 'Simulation d’une boucle POUR (Chapitre 5)',
          statement:
            'Simuler l’algorithme : `n ← 0 ; s ← 0 ; POUR i DE 1 A 3 FAIRE n ← n + 5 ; s ← s + n ; FINPOUR ; ECRIRE(s)`.',
          methodSteps: [
            'Avant la boucle : `n = 0`, `s = 0`.',
            'Tour `i = 1` (`1 <= 3` VRAI) : `n ← 5`, `s ← 0 + 5 = 5`.',
            'Tour `i = 2` (`2 <= 3` VRAI) : `n ← 10`, `s ← 5 + 10 = 15`.',
            'Tour `i = 3` (`3 <= 3` VRAI) : `n ← 15`, `s ← 15 + 15 = 30`.',
            'Incrémentation `i ← 4` : `4 <= 3` est FAUX → sortie de boucle et affichage de `s`.',
          ],
          conclusion: 'L’algorithme affiche `30` (somme $5 + 10 + 15$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'TANTQUE',
            stepTheme: 'blue',
            stepTitle: 'Boucle TANTQUE (contrôle à l’entrée)',
            paragraphText:
              'Dans `TANTQUE <cond> FAIRE <seq> FINTANTQUE`, la condition est évaluée **avant** chaque passage. Si elle est `FAUX` dès le début, le corps de boucle n’est jamais exécuté (0 itération). Pour éviter une boucle infinie, le corps doit faire évoluer les variables de la condition vers sa fausseté.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Que fait la boucle du cours : `a ← 1 ; b ← a ; TANTQUE a < 100 FAIRE b ← b * 5 ; ECRIRE(b) ; FINTANTQUE` ?',
              options: [
                'Elle s’arrête après 3 itérations quand `b` vaut 125.',
                'Elle ne s’exécute jamais.',
                'C’est une boucle infinie car la variable `a` de la condition n’est jamais modifiée dans la boucle.',
                'Elle affiche uniquement `5`.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La condition porte sur `a` (`a < 100`), mais seule `b` est modifiée dans le corps : `a` reste toujours égal à `1`, donc la boucle est éternelle.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'REPETER',
            stepTheme: 'blue',
            stepTitle: 'Boucle REPETER ... JUSQUA (contrôle à la sortie)',
            paragraphText:
              'Dans `REPETER <seq> JUSQUA <cond>`, le corps est exécuté une première fois, puis on teste la condition de **sortie**. Si `<cond>` est `VRAI`, on sort ; si elle est `FAUX`, on recommence. Dans l’exemple des dés (`nbCoups ← 0 ; REPETER LIRE(d1) ; LIRE(d2) ; nbCoups ← nbCoups + 1 ; JUSQUA d1 + d2 = 12`), on lance au moins une fois les deux dés.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Quelle affirmation est toujours vraie pour une boucle `REPETER <seq> JUSQUA <cond>` ?',
              options: [
                'La séquence `<seq>` est exécutée au moins une fois.',
                'La boucle s’arrête dès que `<cond>` devient FAUX.',
                'Elle ne peut jamais devenir une boucle infinie.',
                'Elle ne peut s’exécuter que si le nombre de tours est connu à l’avance.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Comme le test est effectué en sortie, `<seq>` s’exécute toujours au moins 1 fois, et l’on sort dès que `<cond>` vaut `VRAI`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Équivalence',
            stepTheme: 'violet',
            stepTitle: 'Passer de TANTQUE à REPETER ... JUSQUA',
            paragraphText:
              'Attention à l’inversion de la condition : la boucle `TANTQUE somme < sommeFinale FAIRE <seq> FINTANTQUE` continue tant que `somme < sommeFinale`, alors que `REPETER <seq> JUSQUA somme >= sommeFinale` s’arrête dès que la négation `somme >= sommeFinale` devient vraie.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q3',
              type: 'mcq',
              prompt: 'On veut saisir une note `x` valide dans $[0, 20]$ avec `REPETER LIRE(x) JUSQUA <condition>`. Quelle condition d’arrêt faut-il écrire ?',
              options: [
                '(x < 0) OU (x > 20)',
                '(x >= 0) ET (x <= 20)',
                '(x >= 0) OU (x <= 20)',
                '(x < 0) ET (x > 20)',
              ],
              correctAnswerIndex: 1,
              explanation:
                '`JUSQUA` attend la condition de **sortie** (note valide) : on s’arrête dès que `x` est compris entre 0 et 20, soit `(x >= 0) ET (x <= 20)`.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'POUR',
            stepTheme: 'violet',
            stepTitle: 'Boucle POUR et pas décroissant',
            paragraphText:
              '`POUR i DE debut A fin FAIRE <seq> FINPOUR` incrémente automatiquement `i` de `+1` à chaque tour tant que `i <= fin`. Si `debut > fin` dès le départ, la séquence est exécutée **0 fois**. Pour décroître, on précise `POUR i DE debut A fin par PAS de -1 FAIRE`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Combien de fois le corps de la boucle `POUR i DE 5 A 2 FAIRE ECRIRE(i) FINPOUR` (sans pas précisé) s’exécute-t-il ?',
              options: [
                '4 fois (5, 4, 3, 2)',
                '3 fois',
                'Une infinité de fois',
                '0 fois, car la valeur initiale 5 est déjà strictement supérieure à la valeur finale 2.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Par défaut le pas est `+1` et le test d’entrée est `i <= fin`. Comme `5 <= 2` est FAUX dès le départ, on n’entre pas dans la boucle.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Choix de boucle',
            stepTheme: 'green',
            stepTitle: 'Choisir entre POUR, TANTQUE et REPETER',
            paragraphText:
              'Le récapitulatif du Chapitre 5 donne un arbre de décision clair : si le nombre d’itérations est connu avant d’entrer et non modifiable, on choisit `POUR`. Sinon, si 0 itération est possible, on choisit `TANTQUE` ; si au moins 1 itération est toujours nécessaire, on choisit `REPETER`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q5',
              type: 'mcq',
              prompt: 'On veut calculer la moyenne des notes d’une classe de `N` étudiants (où `N` est déjà connu). Quelle boucle est la plus adaptée ?',
              options: [
                'POUR i DE 1 A N FAIRE',
                'REPETER ... JUSQUA',
                'SELON ... FINSELON',
                'SI ... SINONSI ... FINSI',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le nombre d’itérations `N` est connu avant le début de la boucle et ne change pas : la boucle `POUR` est la structure la plus adaptée.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Algorithme de liste',
            stepTheme: 'slate',
            stepTitle: 'Traiter tous les éléments vs s’arrêter avant la sentinelle',
            paragraphText:
              'Dans l’exemple du supermarché (Chapitre 5) : pour traiter **tous** les clients de la file (y compris le dernier), on utilise `REPETER element ← elementSuivant() ; traiter(element) ; JUSQUA dernier(element)`. Pour traiter tous les articles **sauf** la barre de séparation finale (sentinelle), on lit d’abord un élément puis on utilise `TANTQUE NON dernier(element) FAIRE traiter(element) ; element ← elementSuivant() ; FINTANTQUE`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Pourquoi utilise-t-on une boucle `TANTQUE` (avec lecture préalable) pour comptabiliser les articles sur le tapis roulant jusqu’à la barre de séparation ?',
              options: [
                'Parce que `REPETER` ne sait pas appeler une fonction `traiter(element)`.',
                'Parce que la barre de séparation est le dernier élément et ne doit pas être comptabilisée comme un article (et il peut y avoir 0 article).',
                'Parce que le nombre exact d’articles est toujours égal à 10.',
                'Parce que `TANTQUE` est plus rapide que `REPETER`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tester `NON dernier(element)` avant `traiter(element)` garantit qu’on ne traite pas la barre de séparation (sentinelle) et qu’on gère le cas où aucun article n’est présent.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Sous-programmes — Fonctions, procédures et récursivité
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_algo_ch3',
    subjectId: 'lmd_algorithmique',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ESATIC ENTD L1 — Algorithmique (Chapitres 7, 8 et TD Fonctions)',
    title: 'Chapitre 3 — Sous-programmes : fonctions, procédures et récursivité',
    summary:
      'Modularité, profil et appel de fonction, passage de paramètres (E, S, E/S) dans les procédures, variables locales et conception de fonctions récursives.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_algo_ch3_p1',
        order: 1,
        title: 'Fonctions : définition, profil, appel et passage de paramètres',
        summary:
          'Structurer un calcul réutilisable renvoyant une valeur unique via RETOURNER.',
        conceptExplanation:
          'Une **fonction** est un sous-programme nommé qui reçoit des données via ses **paramètres formels**, effectue un calcul (avec d’éventuelles variables locales) et renvoie une valeur unique de type spécifié grâce à l’instruction `RETOURNER <expression>`.\n\n' +
          'Le **profil** (ou **signature**) d’une fonction indique la liste des types de ses paramètres d’entrée et le type du résultat renvoyé : par exemple `maxdeux : (ENTIER, ENTIER) → ENTIER` ou `sous_chaine : (CHAINE, ENTIER, ENTIER) → CHAINE`.\n\n' +
          'À l’**appel**, on fournit des **paramètres effectifs** (ou arguments) dans le même ordre et de types compatibles avec les paramètres formels (correspondance biunivoque par position). L’appel d’une fonction s’utilise au sein d’une expression (ex. `mab ← maxdeux(a, b)`).',
        formulas: [
          {
            name: 'Profil (signature) d’une fonction',
            formula: '\\text{nomFonction} : (T_1, T_2, \\dots, T_k) \\longrightarrow T_{\\text{résultat}}',
            note: 'Exemple du TD : moyenne : (ENTIER, ENTIER) → REEL.',
          },
        ],
        keyRule:
          'Une fonction renvoie exactement un résultat (via `RETOURNER`) et son appel s’insère dans une expression ; les paramètres effectifs doivent correspondre en nombre, en ordre et en type aux paramètres formels.',
        workedExample: {
          title: 'Fonction Moyenne et Maxquatre_2 (Chapitre 7 & TD Fonctions Ex. 1)',
          statement:
            'Écrire la fonction `moyenne(a, b : ENTIER) : REEL` qui renvoie la moyenne de deux entiers, puis montrer comment `Maxquatre_2` calcule le maximum de 4 entiers `a, b, c, d` à l’aide de `maxdeux`.',
          methodSteps: [
            'Définition de `moyenne` : `FONCTION moyenne(a, b : ENTIER) : REEL` ; `VARIABLES locales m : REEL` ; `DEBUT m ← (a + b) / 2 ; RETOURNER(m) FIN`.',
            'Appel dans l’algorithme principal : `LIRE(x, y) ; res ← moyenne(x, y) ; ECRIRE(res)`.',
            'Dans `Maxquatre_2` : `mab ← maxdeux(a, b)` ; `mcd ← maxdeux(c, d)` ; `maxi ← maxdeux(mab, mcd)` — aucune duplication de `SI/SINON` !',
          ],
          conclusion:
            'Les fonctions éliminent la duplication de code, améliorent la lisibilité et favorisent la réutilisation en bibliothèques.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Rôle',
            stepTheme: 'blue',
            stepTitle: 'Rôle, spécification et conditions d’appel d’une fonction',
            paragraphText:
              'Une fonction renvoie un résultat conforme à sa spécification, **à condition** que l’appelant respecte ses conditions d’appel (préconditions). Par exemple, si un algorithme appelle `racine(-4)`, c’est l’algorithme appelant qui est faux, pas la fonction `racine`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Si un programme appelle la fonction prédéfinie `racine(x)` avec `x = -9`, qui est responsable de l’erreur selon le cours ?',
              options: [
                'La bibliothèque mathématique qui aurait dû renvoyer 3.',
                'L’algorithme appelant, qui n’a pas respecté la condition d’appel ($x \\geqslant 0$).',
                'Le système d’exploitation.',
                'Le type `REEL` qui n’accepte pas les nombres négatifs.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le Chapitre 7 souligne que si les conditions d’appel d’une fonction ne sont pas respectées (paramètre négatif pour `racine`), c’est l’algorithme appelant qui est fautif.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Signature',
            stepTheme: 'blue',
            stepTitle: 'Profil (signature) d’une fonction',
            paragraphText:
              'Le profil d’une fonction résume les types de ses entrées et le type de sa sortie. Par exemple, `sous_chaine(chaine, 1, 3)` extrait une portion de chaîne à partir de la position 1 sur une longueur de 3 : son profil est `(CHAINE, ENTIER, ENTIER) → CHAINE`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Quel est le profil de la fonction `moyenne(a, b : ENTIER) : REEL` du TD Fonctions ?',
              options: [
                '(REEL, REEL) → ENTIER',
                '(ENTIER) → REEL',
                '(ENTIER, ENTIER) → REEL',
                '(ENTIER, REEL) → ENTIER',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La fonction prend deux paramètres de type `ENTIER` et retourne un résultat de type `REEL` : `(ENTIER, ENTIER) → REEL`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Paramètres',
            stepTheme: 'violet',
            stepTitle: 'Paramètres formels vs paramètres effectifs',
            paragraphText:
              'Dans la définition `FONCTION maxdeux(x, y : ENTIER) : ENTIER`, `x` et `y` sont les **paramètres formels**. Dans l’appel `mab ← maxdeux(a, b + 1)`, `a` et `b + 1` sont les **paramètres effectifs** (ou arguments). Leur correspondance est biunivoque et régie par l’ordre d’écriture.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Dans l’appel `maxi ← maxdeux(mab, mcd)`, comment appelle-t-on `mab` et `mcd` ?',
              options: [
                'Les paramètres effectifs (ou arguments).',
                'Les paramètres formels.',
                'Les variables globales de `maxdeux`.',
                'Les profils de sortie.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Les noms déclarés dans l’en-tête de définition sont les paramètres formels ; les valeurs/expressions passées lors de l’appel sont les paramètres effectifs.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Contexte d’appel',
            stepTheme: 'green',
            stepTitle: 'Où appeler une fonction ?',
            paragraphText:
              'Parce qu’une fonction retourne une valeur, son appel se comporte exactement comme une expression. On peut l’affecter à une variable (`c ← racine(a*a + b*b)`), l’afficher (`ECRIRE(maxdeux(a, b))`), ou la composer dans un autre appel (`maxdeux(maxdeux(a, b), maxdeux(c, d))`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Avec `FONCTION maxdeux(x, y : ENTIER) : ENTIER`, quelle expression calcule directement le maximum de `a, b, c, d` en une seule ligne ?',
              options: [
                'maxdeux(a, b, c, d)',
                'maxdeux(a + b, c + d)',
                'maxdeux(a, b) + maxdeux(c, d)',
                'maxdeux(maxdeux(a, b), maxdeux(c, d))',
              ],
              correctAnswerIndex: 3,
              explanation:
                '`maxdeux` attend exactement 2 entiers. En passant `maxdeux(a, b)` et `maxdeux(c, d)` comme paramètres effectifs à un troisième appel de `maxdeux`, on obtient le maximum des quatre.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Variables locales et instruction RETOURNER',
            paragraphText:
              'Les variables déclarées à l’intérieur d’une fonction (ex. `mxy` dans `maxdeux`) sont **locales** : elles n’existent que pendant l’exécution de la fonction et ne sont pas accessibles depuis l’algorithme principal. Oublier `RETOURNER` dans une fonction est une erreur grave.',
            keyRule: 'Une fonction doit comporter au moins une instruction `RETOURNER <expression>` dont le type correspond au type de retour déclaré.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Que se passe-t-il si l’algorithme principal tente d’afficher `ECRIRE(mxy)` où `mxy` est une variable locale de `maxdeux` ?',
              options: [
                'Il affiche le dernier maximum calculé.',
                'C’est une erreur : `mxy` est locale à `maxdeux` et inconnue dans l’algorithme principal.',
                'Il affiche `0`.',
                'Il appelle automatiquement `maxdeux`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une variable locale n’a de portée et de durée de vie qu’à l’intérieur du sous-programme qui la déclare.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Modularité',
            stepTheme: 'violet',
            stepTitle: 'Intérêt des fonctions en génie logiciel',
            paragraphText:
              'Décomposer un algorithme en fonctions évite la duplication de code, améliore la lisibilité (on comprend le rôle grâce au nom de la fonction), permet de répartir le travail entre plusieurs équipes et de bâtir des bibliothèques réutilisables.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Parmi les affirmations suivantes, laquelle N’EST PAS un intérêt des fonctions ?',
              options: [
                'Éviter la duplication d’instructions identiques.',
                'Améliorer la lisibilité et la maintenance de l’algorithme.',
                'Permettre de renvoyer simultanément trois résultats indépendants via trois instructions `RETOURNER` exécutées ensemble.',
                'Faciliter le travail en équipe et la création de bibliothèques.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une fonction ne renvoie qu’une seule valeur par appel (l’exécution s’arrête au premier `RETOURNER` rencontré). Pour produire plusieurs résultats, on utilise une procédure avec plusieurs paramètres de sortie.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_algo_ch3_p2',
        order: 2,
        title: 'Procédures (statuts E, S, E/S) et fonctions récursives',
        summary:
          'Maîtriser les trois statuts de paramètres des procédures et écrire des fonctions récursives avec cas de base.',
        conceptExplanation:
          'Contrairement à une fonction, une **procédure** ne renvoie pas de valeur dans une expression : son appel est une **instruction** à part entière (ex. `convertir(dm, deg, min)`). Elle communique avec l’appelant exclusivement par ses paramètres, dotés de trois statuts possibles :\n' +
          '• **Entrée `(E)`** : le paramètre effectif peut être n’importe quelle expression dont la valeur est copiée vers le paramètre formel (consultation seule).\n' +
          '• **Sortie `(S)`** : le paramètre effectif est obligatoirement un identificateur de variable qui reçoit une valeur produite par la procédure (ex. `convertir((E) mi, (S) dd, (S) mm)`).\n' +
          '• **Entrée/Sortie `(E/S)`** : le paramètre effectif est une variable dont la valeur initiale est lue puis modifiée et renvoyée (ex. `echanger((E/S) x, (E/S) y)`).\n\n' +
          'Une **fonction récursive** est une fonction qui s’appelle elle-même sur un sous-problème plus petit, en comportant impérativement un **cas de base** (condition d’arrêt) qui garantit la terminaison.',
        formulas: [
          {
            name: 'Somme récursive (TD Fonctions Ex. 2)',
            formula: '\\text{Somme}(0) = 0, \\quad \\text{Somme}(m) = m + \\text{Somme}(m - 1) \\quad (m \\geqslant 1)',
            note: 'Calcule 1 + 2 + ... + m sans boucle.',
          },
          {
            name: 'Suite récursive (TD Fonctions Ex. 3)',
            formula: 'U(0) = 4, \\quad U(n) = 5 \\cdot U(n - 1) + 9 \\quad (n > 0)',
            note: 'Traduction directe d’une relation de récurrence mathématique.',
          },
        ],
        keyRule:
          'Pour une procédure : expression autorisée uniquement pour un paramètre `(E)` ; variable obligatoire pour `(S)` et `(E/S)`. Pour une fonction récursive : toujours écrire d’abord le cas de base !',
        workedExample: {
          title: 'Tri de 3 caractères par procédures (E/S) et suite récursive $U_n$',
          statement:
            '1) Suivre `tri_lettres` sur `c1 = \'T\', c2 = \'Z\', c3 = \'A\'` avec `classer(c1,c2) ; classer(c2,c3) ; classer(c1,c2)`. 2) Calculer `U(2)` pour la fonction récursive `U(0) = 4`, `U(n) = 5 * U(n-1) + 9`.',
          methodSteps: [
            '1) `classer(\'T\', \'Z\')` : `\'T\' > \'Z\'` est FAUX → inchangé (`T, Z, A`).',
            '`classer(\'Z\', \'A\')` : `\'Z\' > \'A\'` est VRAI → échange → (`T, A, Z`).',
            '`classer(\'T\', \'A\')` : `\'T\' > \'A\'` est VRAI → échange → (`A, T, Z`). Les 3 lettres sont triées !',
            '2) `U(2) = 5 * U(1) + 9` ; `U(1) = 5 * U(0) + 9 = 5 * 4 + 9 = 29` ; donc `U(2) = 5 * 29 + 9 = 154`.',
          ],
          conclusion: 'Résultat du tri : `A, T, Z`. Valeur récursive : `U(2) = 154`.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Procédure vs Fonction',
            stepTheme: 'blue',
            stepTitle: 'Quand utiliser une procédure plutôt qu’une fonction ?',
            paragraphText:
              'Dans l’algorithme `rotation` du Chapitre 8, la conversion de minutes en degrés et minutes produit **deux** résultats (`dd` et `mm`). Une fonction ne pouvant renvoyer qu’une seule valeur, on définit une procédure `convertir((E) mi : ENTIER, (S) dd : ENTIER, (S) mm : ENTIER)`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Pourquoi utilise-t-on une procédure `convertir` plutôt qu’une fonction pour transformer des minutes `mi` en degrés `dd` et minutes `mm` ?',
              options: [
                'Parce qu’une fonction ne peut pas utiliser `div` et `mod`.',
                'Parce qu’une procédure peut renvoyer deux résultats distincts via des paramètres de sortie `(S)`, alors qu’une fonction ne renvoie qu’une seule valeur.',
                'Parce qu’une procédure ne possède jamais de paramètres.',
                'Parce qu’une fonction ne peut pas être appelée depuis un algorithme principal.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une fonction retourne un résultat unique ; pour produire plusieurs résultats (ou réaliser une action comme un affichage), on utilise une procédure.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Statut (E), (S), (E/S)',
            stepTheme: 'violet',
            stepTitle: 'Les trois statuts de paramètres d’une procédure',
            paragraphText:
              '• `(E)` Entrée : valeur fournie à la procédure (l’appelant peut passer une constante ou expression comme `ligne(4, \'+\')`).\n' +
              '• `(S)` Sortie : résultat renvoyé à l’appelant (doit être une variable).\n' +
              '• `(E/S)` Entrée/Sortie : variable lue puis modifiée par la procédure (ex. `echanger((E/S) x, (E/S) y)`).',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Pour `PROCEDURE convertir((E) mi : ENTIER, (S) dd : ENTIER, (S) mm : ENTIER)`, quel appel est **illégal** ?',
              options: [
                'convertir(135, deg, min)',
                'convertir(dm + 10, deg, min)',
                'convertir(dm, 2, min)',
                'convertir(60, a, b)',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le deuxième paramètre `dd` est de statut Sortie `(S)` : le paramètre effectif doit obligatoirement être un identificateur de variable et non la constante `2`.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'exemple',
            stepBadge: 'Échange (E/S)',
            stepTheme: 'slate',
            stepTitle: 'La procédure `echanger` et la procédure `classer`',
            paragraphText:
              'La procédure `echanger((E/S) x, y : CARACTERE)` utilise une variable locale `aux` pour permuter `x` et `y`. Elle doit impérativement déclarer `x` et `y` en `(E/S)` pour que la permutation soit répercutée sur les variables de l’appelant.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Si l’on déclarait `x` et `y` en statut Entrée `(E)` au lieu de `(E/S)` dans `echanger`, que se passerait-il dans l’algorithme appelant après `echanger(c1, c2)` ?',
              options: [
                '`c1` et `c2` seraient inchangés dans l’appelant car seules des copies locales auraient été échangées.',
                '`c1` et `c2` seraient quand même échangés.',
                '`c1` prendrait la valeur vide.',
                '`c2` serait doublé.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un paramètre d’entrée `(E)` ne reçoit qu’une copie de la valeur : toute modification locale reste sans effet sur les variables effectives de l’appelant.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Récursivité',
            stepTheme: 'blue',
            stepTitle: 'Principe d’une fonction récursive (TD Ex. 2)',
            paragraphText:
              'Une fonction récursive calcule le résultat au rang $m$ en s’appelant elle-même au rang $m - 1$. Pour `Somme(m) = 1 + 2 + ... + m` : si `m = 0` (ou `m = 1`), on renvoie `0` (ou `1`) ; sinon on renvoie `m + Somme(m - 1)`.',
            formula: {
              name: 'Définition récursive de Somme(m)',
              formula: '\\text{Somme}(m) = \\begin{cases} 0 & \\text{si } m = 0 \\\\ m + \\text{Somme}(m - 1) & \\text{si } m > 0 \\end{cases}',
            },
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Combien d’appels à la fonction `Somme` (y compris l’appel initial) sont exécutés pour évaluer `Somme(4)` avec le cas de base `m = 0` ?',
              options: [
                '3 appels',
                '4 appels',
                '1 appel',
                '5 appels (`Somme(4)`, `Somme(3)`, `Somme(2)`, `Somme(1)`, `Somme(0)`)',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’appel initial `Somme(4)` déclenche `Somme(3)` → `Somme(2)` → `Somme(1)` → `Somme(0)` (cas de base), soit 5 appels au total.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Suite récursive',
            stepTheme: 'green',
            stepTitle: 'Calculer un terme de suite récursive (TD Ex. 3)',
            paragraphText:
              'Pour la suite définie par $U_0 = 4$ et $U_n = 5 U_{n-1} + 9$ pour $n > 0$, la fonction récursive s’écrit : `SI n = 0 ALORS RETOURNER(4) SINON RETOURNER(5 * U(n - 1) + 9) FINSI`.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Avec la fonction récursive $U(0) = 4$ et $U(n) = 5 U(n-1) + 9$, que renvoie `U(3)` ?',
              options: [
                '779',
                '154',
                '29',
                '770',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$U(0) = 4$, $U(1) = 5(4)+9 = 29$, $U(2) = 5(29)+9 = 154$, $U(3) = 5(154)+9 = 770 + 9 = 779$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège d’examen',
            stepTheme: 'orange',
            stepTitle: 'Absence de cas de base ou non-convergence',
            paragraphText:
              'Toute fonction récursive doit satisfaire deux conditions pour terminer : (1) posséder un cas de base (condition d’arrêt sans appel récursif) et (2) garantir que chaque appel récursif se rapproche strictement du cas de base (par exemple $n - 1$ vers $0$ pour $n \\in \\mathbb{N}$). Sinon, on obtient une récursion infinie (débordement de pile).',
            keyRule: 'Cas de base + progression vers le cas de base = terminaison garantie.',
            exercise: {
              id: 'lmd_entd_l1_algo_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Que se passe-t-il si l’on appelle `Somme(-2)` avec le cas de base `SI m = 0 ALORS RETOURNER(0) SINON RETOURNER(m + Somme(m - 1))` ?',
              options: [
                'La fonction renvoie `-3`.',
                'La fonction renvoie `0`.',
                'La fonction déclenche une récursion infinie (`-2, -3, -4, ...`) car le cas de base `m = 0` n’est jamais atteint.',
                'La fonction renvoie `2`.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'En partant de `-2` et en décrémentant (`m - 1`), `m` s’éloigne de `0` (`-3, -4, ...`) : la précondition `m >= 0` n’étant pas respectée, la récursion ne termine jamais.',
            },
          },
        ],
      }),
    ],
  },
];
